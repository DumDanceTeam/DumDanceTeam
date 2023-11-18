import prismadb from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try{
        const currentShowState = await prismadb.rule.findFirst();

        await prismadb.rule.update({
            where:{
                id: currentShowState?.id,
            },
            data:{
                show: !currentShowState?.show,
            },
        });

        return new NextResponse("Success",{status:200});
    }catch(err){
        return new NextResponse("Something went wrong. Please try again later!",{status:500});
    }
}