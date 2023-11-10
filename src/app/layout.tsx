import "./globals.css";
import type { Metadata } from "next"; 
import NextuiProvider from "@/components/NextUIProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <body className="max-w-[2200px]">
       <NextuiProvider>
        {children}
        <ToastContainer theme="dark"/>
       </NextuiProvider>
      </body>
    </html>
  );
}
