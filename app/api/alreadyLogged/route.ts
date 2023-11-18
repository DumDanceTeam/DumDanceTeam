import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest){
    try{
        const authToken = cookies().get("authTokenDDT");
        
        if(authToken && authToken.value.trim()!==''){
            jwt.verify(authToken.value,process.env.JWT_SECRET!);
            return NextResponse.json({msg:"Autentificat"},{status:200});
        }

        return new NextResponse("Neautentificat");
    }catch(err){
        return new NextResponse("Neautentificat");
    }
}