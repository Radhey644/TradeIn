"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "inspector";
import { Button, Input, Link } from "@nextui-org/react";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
    fullname: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      toast.warn("Signing In !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      toast.success("Account Created", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error);
      toast.error(`${error.response.data.error}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/8370377/pexels-photo-8370377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ')",
        backgroundSize: "cover",
      }}
      className="min-h-screen flex justify-center items-center text-inherit"
    >
      <div className="flex flex-col items-center gap-4 border h-fit p-4 min-w-[370px] bg-slate-500 opacity-90 rounded-xl">
        <h1 className="font-bold text-xl">{loading ? "Processing" : "Signup"}</h1>
        <hr />
        <Input
          type="fullname"
          label="Full Name"
          placeholder="Enter your full name"
          value={user.fullname}
          onChange={(e) => setUser({ ...user, fullname: e.target.value })}
        />
        <Input
          type="username"
          label="Username"
          placeholder="Enter your username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
        color="primary"
          onClick={onSignup}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        >
          {buttonDisabled ? "No signup" : "Signup"}
        </Button>
        <Link showAnchorIcon href="/login">Visit login page</Link>
      </div>
    </div>
  );
}
