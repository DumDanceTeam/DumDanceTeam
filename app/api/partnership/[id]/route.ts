import prismadb from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, {params}:{params:{id: string}}){
    try{
        const id = params.id;

        const partnership = prismadb.partnership.findFirst({
            where:{
                id: id,
            },
        });
        
        if(!partnership)
            throw new Error("Nu am putut găsi un eveniment cu id-ul dat");
        
        //delete partnership
        await prismadb.partnership.delete({
            where:{
                id:id
            }
        });

        return new Response("OK", {status:200})
    }catch(err){
        
        return new NextResponse("Ceva a mers greșit. Te rugăm să încerci mai târziu !",{status:400});
    }
}