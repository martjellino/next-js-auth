import Joi from "joi";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/utils/prisma";

function validateUserInput(data) {
  const userSchema = Joi.object({
    fullname: Joi.string().min(3).max(100).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });

  const { error } = userSchema.validate(data);
  return error;
}

export async function POST(req) {
  try {
    const { fullname, email, password } = await req.json();

    const validationError = validateUserInput({
      fullname,
      email,
      password,
    });

    if (validationError) {
      return NextResponse.json(
        { error: validationError.details.map((err) => err.message) },
        { status: 400 }
      );
    }

    if (!fullname || !email || !password) {
      return NextResponse.json(
        { error: "Please fill all columns!" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        fullname,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        status: "success",
        message: "User successfully registered!",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
