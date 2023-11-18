import { NextResponse } from "next/server";
import axios from "axios";
import prismadb from "@/lib/db";
import { z } from "zod"

export async function GET(req:Request){
    try{
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

        if(!process.env.FACEBOOK_CLIENTID || process.env.FACEBOOK_CLIENTID.trim()==='' || !process.env.FACEBOOK_CLIENTSECRET || process.env.FACEBOOK_CLIENTSECRET.trim()==='')
            throw new Error("Credentials are missing.");

        const accessToken = await prismadb.token.findMany();
        const currentDate = new Date();
        //@ts-ignore
        const daysPassed = Math.floor((currentDate - accessToken[0].createdAt) / (1000 * 60 * 60 * 24));
        
        if(daysPassed>10){
            const newAccessToken = await axios.get(`https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.FACEBOOK_CLIENTID}&client_secret=${process.env.FACEBOOK_CLIENTSECRET}&fb_exchange_token=${accessToken[0].token}`);
            await prismadb.token.deleteMany();
            await prismadb.token.create({
                data:{
                    token:newAccessToken.data.access_token,
                },
            });
            const pageAccessToken = await axios.get(`https://graph.facebook.com/me/accounts?access_token=${newAccessToken.data.access_token}`);     
            const response = await axios.get(`https://graph.facebook.com/${pageAccessToken.data.data[0].id}/feed?fields=id,message,attachments,created_time&access_token=${pageAccessToken.data.data[0].access_token}&limit=${limit}&offset=${(parseInt(page)-1)*parseInt(limit)}`);
            
            if(!response)
                throw new Error("Something went wrong. Please try again later !");
            return NextResponse.json({msg:"Posts were successfully retrieved !",posts:response.data.data});

        }else{
            const pageAccessToken = await axios.get(`https://graph.facebook.com/me/accounts?access_token=${accessToken[0].token}`);
            const response = await axios.get(`https://graph.facebook.com/${pageAccessToken.data.data[0].id}/feed?fields=id,message,attachments,created_time&access_token=${pageAccessToken.data.data[0].access_token}&limit=${limit}&offset=${(parseInt(page)-1)*parseInt(limit)}`);
            
            if(!response)
                throw new Error("Something went wrong. Please try again later !");
            return NextResponse.json({msg:"Posts were successfully retrieved !",posts:response.data.data});

        }
        
    }catch(err){
        console.log("fberror",err);
        
        return new NextResponse("Something went wrong. Please try again later!",{status:500});
    }
}