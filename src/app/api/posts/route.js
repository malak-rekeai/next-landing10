import { request } from "http";
import { NextResponse } from "next/server";


export const GET = async (request)=>{
    return new NextResponse("Hello World");
}

export const POST = async (request)=>{
    return new NextResponse("Hello World");
}

export const PUT = async (request)=>{
    return new NextResponse("Hello World");
}
