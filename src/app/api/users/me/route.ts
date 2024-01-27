import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { client } from "@/helpers/redis-client";

connect();

export async function GET(request: NextRequest) {
  // const cachedUser = await client.get("user");
  // if (cachedUser) {
  //   console.log(cachedUser)
  //   // return NextResponse.json({
  //   //   mesaaage: "User found",
  //   //   data: userRes,
  //   // });
  // }
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    // await client.set("user",user);
    // await client.expire("user", 30);
    console.log(user);
    return NextResponse.json({
      mesaaage: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
