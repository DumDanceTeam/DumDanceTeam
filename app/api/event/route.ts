import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { EventRequest, EventValidator } from "@/validators";
import { ZodError } from "zod";
import prismadb from "@/lib/db";
import z from "zod";

export async function POST(req: Request) {
  try {
    const payload: EventRequest = await req.json();
    const authToken = cookies().get("authTokenDDT");

    EventValidator.parse(payload);

    if (!authToken || authToken.value.trim() === "")
      return new NextResponse(
        "Ceva a mers greșit, te rugăm să încerci mai tărziu !",
        { status: 401 }
      );

    jwt.verify(authToken.value, process.env.JWT_SECRET!);

    await prismadb.event.create({
      data: {
        title: payload.title,
        description: payload.description,
        mainImage: payload.mainImage,
        secondImages: payload.secondImages || [],
        youtubeLink:payload.youtubeLink,
      },
    });

    return new NextResponse("Evenimentul a fost creat cu succes !", {
      status: 200,
    });
  } catch (err) {
    if (err instanceof ZodError)
      return new NextResponse(err.issues[0].message, { status: 400 });
    return new NextResponse(
      "Ceva a mers greșit, te rugăm să încerci mai tărziu !",
      { status: 400 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);

    const { limit, page } = z
      .object({
        limit: z.string(),
        page: z.string(),
      })
      .parse({
        limit: url.searchParams.get("limit"),
        page: url.searchParams.get("page"),
      });

    const events = await prismadb.event.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
      orderBy:{
        createdAt:"desc"
      }
    });

    return new Response(JSON.stringify(events));
  } catch (error) {
    if (error instanceof z.ZodError)
      return new Response("Invalid request data passed", { status: 422 });
    return new Response("Could not fetch more events", { status: 500, statusText:"no more events to be shown" });
  }
}
