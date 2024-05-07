import prismadb from "@/lib/db";
import {
  RegistrationDataValidator,
  SummerRegistrationDataValidator,
} from "@/validators";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();


    const data1 = SummerRegistrationDataValidator.parse(payload);
    console.log(data1);
    // await prismadb.summerRegistration.create({
    //   data: {
    //     nume_copil: data1.nume_copil,
    //     varsta_copil: data1.varsta_copil,
    //     scoala: data1.scoala,
    //     perioada: data1.perioada,
    //     nume_parinte: data1.nume_parinte,
    //     numar_telefon: data1.numar_telefon,
    //     nume_parinte_eveniment: data1.nume_parinte_eveniment,
    //     email_parinte: data1.email_parinte,
    //     sesiune_lunga: data1.sesiune_lunga === true ? "true" : "false",
    //     sesiun_scurta: data1.sesiune_scurta === true ? "true" : "false",
    //   },
    // });

    return NextResponse.json(
      { msg: "Te-ai înscris cu succes!" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);

    return new NextResponse(
      "Ceva a mers greșit, te rugăm să încerci mai tărziu !",
      { status: 400 }
    );
  }
}
