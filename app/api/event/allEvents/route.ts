import prismadb from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const allEvents = await prismadb.event.findMany({});

        return NextResponse.json({allEvents:allEvents}, {
            status: 200,
        });
    } catch (err) {
      return new NextResponse(
        "Ceva a mers greșit, te rugăm să încerci mai tărziu !",
        { status: 400 }
      );
    }
}