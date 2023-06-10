import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = (await req.json()) as {
      name: string;
      email: string;
      password: string;
    };
    
    const hashed_password = await hash(password, 12);

    const alreadyExists = await prisma.user.findUnique({
      where: {email : email.toLowerCase()}
    })

    if(alreadyExists) {
      return new NextResponse(
      JSON.stringify({
        status: "error",
        message: 'Esse email já foi registrado!'
      }),
      { status: 500 }
    );
    }

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashed_password,
      },
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
