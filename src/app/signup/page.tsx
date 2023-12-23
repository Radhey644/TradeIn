"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "inspector";
import { Button, Divider, Input, Link } from "@nextui-org/react";
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
    if(user.email==""||user.fullname==""||user.password==""||user.username=="")
    {
      toast.error("Please fill the feilds !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      return
    }
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
          "url('https://img.freepik.com/premium-vector/stock-market-graph-background_565702-77.jpg?w=1060')",
        backgroundSize: "cover",
      }}
      className="min-h-screen flex justify-center items-center text-inherit"
    >
      <div className="flex flex-col items-center gap-4 border h-fit p-4 min-w-[400px] bg-slate-500 bg-opacity-50 rounded-xl">
        <h1 className="font-bold text-xl">{loading ? "Processing" : "Signup"}</h1>
        <Divider />
        <Input
          variant="underlined"
          type="fullname"
          label="Full Name"
          placeholder="Enter your full name"
          value={user.fullname}
          onChange={(e) => setUser({ ...user, fullname: e.target.value })}
        />
        <Input
          type="username"
          variant="underlined"
          label="Username"
          placeholder="Enter your username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <Input
        variant="underlined"
          type="email"
          label="Email"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          variant="underlined"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
        size="lg"
        color="primary"
        variant="shadow"
          onClick={onSignup}
          className="rounded-lg mb-4"
        >
          {buttonDisabled ? "No signup" : "Signup"}
        </Button>
        <Link showAnchorIcon color="success" href="/login">Visit login page</Link>
      </div>
    </div>
  );
}

