import prismadb from "@/lib/db";
import { RegistrationDataValidator } from "@/validators";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    console.log(payload);

    const data1 = RegistrationDataValidator.parse(payload);

    await prismadb.registration.create({
      data: {
        nume_copil: data1.nume_copil,
        prenume_copil: data1.prenume_copil,
        varsta_copil: data1.varsta_copil,
        grupa_copil: data1.grupa_copil,
        nume_parinte: data1.nume_parinte,
        prenume_parinte: data1.prenume_parinte,
        nume_parinte_eveniment: data1.nume_parinte_eveniment,
        email_parinte: data1.email_parinte,
        sesiune_foto: data1.sesiune_foto === true ? "true" : "false",
        tombola: data1.tombola === true ? "true" : "false",
      },
    });



    return NextResponse.json(
      { msg: "Te-ai înscris cu succes !" },
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(
      "Ceva a mers greșit, te rugăm să încerci mai tărziu !",
      { status: 400 }
    );
  }
}
