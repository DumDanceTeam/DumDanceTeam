import prismadb from "@/lib/db";
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
        
        //delete event
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