import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcrypt";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
  function formDataToObject(formData: any) {
    const object = {};
    formData.forEach((value: any, key: any) => {
      object[key] = value;
    });
    console.log(object);
    return object;
  }
  try {
    console.log(request);
    const reqs = await request.formData();
    // formDataToObject(reqs)
    // console.log(reqs);
    // const reqBody = await request.json();
    const data = formDataToObject(reqs);
    const {
      fullname,
      username,
      email,
      password,
      avtar,
    } =
      data;

    console.log(avtar);
    console.log(fullname);

    //check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      fullname,
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    //send verification email

    await sendEmail({
      fullname,
      email,
      emailType: "VERIFY",
      userId: savedUser._id,
    });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
// export type User = {
//   name:string,
//   fullname:string,
//   avtar:File,
//   email:string,
//   password:string
// }