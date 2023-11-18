import prismadb from "@/lib/db";
import { TestmonialUpdateValidator } from "@/validators";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, {params}:{params:{id: string}}){
    try{
        const payload = await req.json();

        const {newData} = TestmonialUpdateValidator.parse(payload);

        const testmonial = await prismadb.testmonial.findFirst({
            where:{
                id: params.id,
            },
        });

        if(!testmonial)
            throw new Error("Nu am putut găsi niciun rezultat conform id-ului");

        await prismadb.testmonial.updateMany({
            where:{
                id:params.id,
            },
            data:{
                ...newData,
            },
        });

        return NextResponse.json({msg:"Schimbarea a fost facută cu succes !"},{status:200});

    }catch(err){
        return new NextResponse(
            "Ceva a mers greșit, te rugăm să încerci mai tărziu !",
            { status: 400 }
          );
    }
}