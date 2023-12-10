import prismadb from "@/lib/db";
import { ImageCreateValidator } from "@/validators";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest, {params}:{params:{id: string}}){
    try{
        const payload = await req.json();

        const {imageUrl} = ImageCreateValidator.parse(payload);

        await prismadb.onlineImage.create({
            data:{
                url: imageUrl,
            }
        });

        return NextResponse.json({msg:"Imaginea a fost adăugată cu succes !"},{status:200});

    }catch(err){
        
        return new NextResponse(
            "Ceva a mers greșit, te rugăm să încerci mai tărziu !",
            { status: 400 }
          );
    }
}


export async function GET(req: Request) {
    try {
      const url = new URL(req.url);
  
      const { limit, page } = z
        .object({
          limit: z.string(),
          page: z.string(),
        })
        .parse({
          limit: url.searchParams.get("limit"),
          page: url.searchParams.get("page"),
        });
  
      const images = await prismadb.onlineImage.findMany({
        take: parseInt(limit),
        skip: (parseInt(page) - 1) * parseInt(limit),
      });
  
      return new Response(JSON.stringify(images));
    } catch (error) {
      if (error instanceof z.ZodError)
        return new Response("Invalid request data passed", { status: 422 });
      return new Response("Could not fetch more images", { status: 500, statusText:"no more images to be shown" });
    }
  }