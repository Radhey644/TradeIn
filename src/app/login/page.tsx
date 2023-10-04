"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { useToast } from "@chakra-ui/react";
export default function LoginPage() {



export default function LoginPage() {
  const toast = useToast()
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data); 
      toast({
        title: "Successfully Logged In",
        description: "",
        status: 'success',
        position:'top',
        duration: 1000,
        isClosable: true,
      })
      // router.push("/profile");
      router.push("/");
    } 
    catch (error:any) {
      console.log(error)
      toast({
        title: error.response.data.error,
        description: error.response.data.error,
        status: 'error',
        position:'top',
        duration: 3000,
        isClosable: true,
      })
      }
     finally {
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* Create a centered box to wrap all content */}
      <div
        className="border border-gray-300 p-4 rounded-lg"
        style={{
          width: "600px",
          height: "400px",
          backgroundColor: "rgba(31, 41, 55, 0.5)",
        }}
      >
        <h1 className="text-2xl font-bold mb-4">
        <i className="fa-solid fa-right-to-bracket"></i>
          {loading ? "Processing" : "Login"}
        </h1>
        <hr className="my-4" />

        <div className="flex flex-col space-y-4">
  <label htmlFor="email" className="text-sm font-semibold">
    Email
  </label>
  <input
    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
    id="email"
    type="text"
    value={user.email}
    onChange={(e) => setUser({ ...user, email: e.target.value })}
    placeholder="Enter your email"
  />

  <label htmlFor="password" className="text-sm font-semibold">
    Password
  </label>
  <input
    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
    id="password"
    type="password"
    value={user.password}
    onChange={(e) => setUser({ ...user, password: e.target.value })}
    placeholder="Enter your password"
  />

  <button
    onClick={onLogin}
    className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none"
  >
    Login
  </button>
</div>


        <div className="text-sm mt-4">
          <Link href="/signup" className="text-blue-500 hover:underline">
            Go To Sign Up
          </Link>
        </div>
      </div>
      <h1>{loading ? "Logging you in.." : "Login"}</h1>
      <hr />

      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Login here
      </button>
      <Link href="/signup">Visit Signup page</Link>
    </div>
  );
}
}