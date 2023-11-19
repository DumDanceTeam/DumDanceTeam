import prismadb from "@/lib/db";
import { ImageUpdateValidator } from "@/validators";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, {params}:{params:{id: string}}){
    try{
        const payload = await req.json();

        const {newUrl} = ImageUpdateValidator.parse(payload);

        const gImage = await prismadb.image.findFirst({
            where:{
                id: params.id,
            },
        });

        if(!gImage)
            throw new Error("Nu am putut găsi niciun rezultat conform id-ului");

        await prismadb.image.updateMany({
            where:{
                id:params.id,
            },
            data:{
                url:newUrl,
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

export async function DELETE(req: NextRequest, {params}:{params:{id: string}}){
    try{
      

        const gImage = await prismadb.image.findFirst({
            where:{
                id: params.id,
            },
        });

        if(!gImage)
            throw new Error("Nu am putut găsi niciun rezultat conform id-ului");

        await prismadb.image.deleteMany({
            where:{
                id:params.id,
            },
        });

        return NextResponse.json({msg:"Imaginea a fost ștearsă cu succes !"},{status:200});

    }catch(err){
        
        return new NextResponse(
            "Ceva a mers greșit, te rugăm să încerci mai tărziu !",
            { status: 400 }
          );
    }
}