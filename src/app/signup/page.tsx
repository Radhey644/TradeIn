"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { CldUploadButton, CldUploadWidget } from "next-cloudinary";
import { url } from "inspector";
import { Button, Divider, Input, Link } from "@nextui-org/react";
export type User = {
  username: string | undefined;
  password: string | undefined;
  email?: string | undefined;
  fullname: string | undefined;
  avtar?: string | undefined;
};
export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
    fullname: "",
    avtar: "",
  });
  const [avtar, setAvtar] = useState("");
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onSignup = async () => {
    // const formData = new FormData();
    // formData.append("fullname", user.fullname);
    // formData.append("username", user.username);
    // formData.append("avtar", user.profile_picture);
    // formData.append("email", user.email);
    // formData.append("password", user.password);
    console.log(user);
    if (
      user.email == "" ||
      user.fullname == "" ||
      user.password == "" ||
      user.username == ""
    ) {
      toast.error("Please fill the feilds !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      return;
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
        backgroundImage: "url('/signupBg.webp')",
        backgroundSize: "cover",
      }}
      className="min-h-screen flex justify-center items-center text-inherit"
    >
      <div className="flex flex-col items-center gap-4 border h-fit p-4 min-w-[400px] bg-slate-500 bg-opacity-50 rounded-xl">
        <h1 className="font-bold text-xl">
          {loading ? "Processing" : "Signup"}
        </h1>
        <Divider />
        <div className="flex w-full items-center">
          <Input
            variant="underlined"
            type="fullname"
            label="Full Name"
            placeholder="Enter your full name"
            value={user.fullname}
            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
          />
          {avtar != "" ? (
            <img
              className="w-16 h-16 flex rounded-full border-4 border-cyan-900 object-cover"
              src={avtar}
              alt=""
            />
          ) : (
            <CldUploadWidget
              uploadPreset="tradein"
              signatureEndpoint="/api/sign-image"
              onUpload={(res: any) => {
                console.log(res);
                setUser({ ...user, avtar: res.info.url });
                setAvtar(res.info.url);
              }}
            >
              {({ open }) => {
                return (
                  <button
                    onClick={() => open()}
                    className="bg-gray-600 bg-opacity-60
                rounded-full font-medium active:scale-95 h-14"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-14 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                      />
                    </svg>
                  </button>
                );
              }}
            </CldUploadWidget>
          )}
        </div>
        <Input
          type="username"
          variant="underlined"
          label="Username"
          placeholder="Enter your username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        {/* <Input
          type="file"
          variant="underlined"
          label="profile_picture"
          placeholder="Add an image"
          onChange={(e) =>
            setUser({ ...user, profile_picture: e.target.files[0] })}
        /> */}

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
        <Link showAnchorIcon color="success" href="/login">
          Visit login page
        </Link>
      </div>
    </div>
  );
}
