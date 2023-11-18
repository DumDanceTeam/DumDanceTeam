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

    await prismadb.partnership.create({
      data: {
        title: payload.title,
        description: payload.description,
        mainImage: payload.mainImage,
        secondImages: payload.secondImages || [],
        youtubeLink:payload.youtubeLink,
      },
    });

    return new NextResponse("Parteneriatul a fost creat cu succes !", {
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

