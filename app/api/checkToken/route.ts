import prismadb from "@/lib/db";
import { AuthTokenValidator } from "@/validators";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    //validate payload
    const { authToken } = AuthTokenValidator.parse(payload);

    const availableToken = await prismadb.authToken.findFirst({
        where:{
            authToken,
        },
    });

    if(!availableToken){
        return new NextResponse("Token-ul introdus este incorect.",{status:400, statusText:"invalid token"});
    }

    const encryptedAccessToken = jwt.sign({role:"admin"},process.env.JWT_SECRET!,{expiresIn:"2d"});

    cookies().set("authTokenDDT", encryptedAccessToken);

    return NextResponse.json({msg:"Bun venit în dashboard",ok:true},{status:200});

  } catch (err) {
    if (err instanceof ZodError)
      return new NextResponse(err.issues[0].message, { status: 400 });
    return new NextResponse("Something went wrong. Please try again later !");
  }
}
