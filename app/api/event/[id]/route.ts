import prismadb from "@/lib/db";
import { EventValidator } from "@/validators";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, {params}:{params:{id: string}}){
    try{
        const id = params.id;

        const event = prismadb.event.findFirst({
            where:{
                id: id,
            },
        });
        
        if(!event)
            throw new Error("Nu am putut găsi un eveniment cu id-ul dat");
        
        await prismadb.event.delete({
            where:{
                id:id
            }
        });

        return new Response("OK", {status:200})
    }catch(err){
        
        return new NextResponse("Ceva a mers greșit. Te rugăm să încerci mai târziu !",{status:400});
    }
}

export async function PATCH(req: NextRequest, {params}:{params:{id: string}}){
    try{
        const payload = await req.json();

        const updatedData = EventValidator.parse(payload);
        const id = params.id;

        const event = prismadb.event.findFirst({
            where:{
                id: id,
            },
        });
        
        if(!event)
            throw new Error("Nu am putut găsi un eveniment cu id-ul dat");
        
        await prismadb.event.update({
            where:{
                id:id
            },
            data:{
                ...updatedData,
            },
        });

        return new Response("OK", {status:200})
    }catch(err){
        
        return new NextResponse("Ceva a mers greșit. Te rugăm să încerci mai târziu !",{status:400});
    }
}