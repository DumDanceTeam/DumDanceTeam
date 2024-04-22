import prismadb from "@/lib/db";
import { RegistrationDataValidator } from "@/validators";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    console.log(payload);

    const data1 = RegistrationDataValidator.parse(payload);
console.log(data1.cum_eveniment)
    await prismadb.registration.create({
      data: {
        nume_copil: data1.nume_copil,
        varsta_copil: data1.varsta_copil,
        scoala: data1.scoala,
        grupa_copil: data1.grupa_copil,
        nume_parinte: data1.nume_parinte,
        numar_telefon: data1.numar_telefon,
        nume_parinte_eveniment: data1.nume_parinte_eveniment,
        email_parinte: data1.email_parinte,
        sesiune_foto: data1.sesiune_foto === true ? "true" : "false",
        tombola: data1.tombola === true ? "true" : "false",
      },
    });

    if(data1.numeInvitatie && data1.numeInvitatie.trim()!==""){
      const invitationPers = await prismadb.invitation.findFirst({
        where:{
          name: data1.numeInvitatie,
        },
      });

      if(invitationPers){
        await prismadb.invitation.update({
          data:{
            nrInvitati: invitationPers.nrInvitati+1,
          },
          where:{
            id: invitationPers.id,
            name: invitationPers.name
          }
        })
      }
    }

    await prismadb.recommend.create({
      data:{
        nume_copil: data1.nume_copil,
        nume_parinte: data1.nume_parinte,
        numar_telefon: data1.numar_telefon,
        email_parinte: data1.email_parinte
      },
    });


    return NextResponse.json(
      { msg: "Te-ai înscris cu succes !" },
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
