"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "@nextui-org/react";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      toast.warn("Logging In !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      // router.push("/profile");
      toast.success("Logged In ", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 500,
      });
      router.push("/");
    } catch (error: any) {
      console.log(error);
      toast.error(`${error.response.data.error}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <title>Log In</title>
      <div className="flex min-h-screen">
        <div
          className="w-2/5 min-h-svh flex justify-center items-center bg-cover"
          style={{
            backgroundImage: "url('/login.webp')",
          }}
        >
          <span className="font-bold text-cyan-50 text-4xl font-sans ml-auto w-2/3">
            Trade risk Free without Limits.
          </span>
        </div>
        <div className="w-3/5 min-h-svh flex justify-center bg-gray-800 bg-opacity-65">
          {/* Create a centered box to wrap all content */}
          <div className="p-4 rounded-lg my-auto w-1/2">
            <div className="mb-9">
              <h1 className="text-3xl font-bold mb-4">
                <i className="fa-solid fa-right-to-bracket"></i>
                {loading ? "Processing" : "Login"}
              </h1>
              <div className="text-sm mt-4">
                New to TradeIn?{" "}
                <Link href="/signup" color="primary">
                  Sign up for an account
                </Link>
              </div>
            </div>
            <hr className="my-4" />

            <div className="flex flex-col space-y-4">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                className="p-2 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 bg-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />

              <label htmlFor="password" className="text-sm font-semibold">
                Password
              </label>
              <input
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 bg-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />

              <button
                onClick={onLogin}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
