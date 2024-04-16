import { RegistrationDataValidator } from "@/validators";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    console.log(payload);

    const data = RegistrationDataValidator.parse(payload)

    

    return NextResponse.json(
      { msg: "Imaginea a fost adăugată cu succes !" },
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(
      "Ceva a mers greșit, te rugăm să încerci mai tărziu !",
      { status: 400 }
    );
  }
}
