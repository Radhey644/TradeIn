import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcrypt";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    const data = await request.json(); // Assuming request is a valid fetch request
    console.log(data); // Log the entire JSON data for inspection

    // Destructure properties from the JSON data
    const { fullname, username, email, password, avtar } = data;

    console.log(avtar); // Log the value of avtar
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
      avtar,
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
