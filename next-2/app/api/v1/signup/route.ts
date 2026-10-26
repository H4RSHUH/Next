import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
})

export async function POST(req : NextRequest){

    const data = await req.json();
    console.log(data);

    prisma.user.create({
        data : {
            name : data.name,
            password : data.password
        }
    })
    return NextResponse.json({
        msg : "User Signed Up Successfully"
    });
}