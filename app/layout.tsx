import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Abril_Fatface } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/headerComponent";
import Image from "next/image";
import FooterComponent from "@/components/footerComponent";

const inter = Inter({ subsets: ["latin"] });
const abril = Abril_Fatface({ weight: "400", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Post It",
  description: "Post your ideas and thoughts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="${inter.className} bg-gradient-to-b from-bg-yellow-light to-bg-yellow">
        <div className="flex flex-col">
          <div className="h-20 border-b border-black">
            <HeaderComponent></HeaderComponent>
          </div>
          <div className="h-[calc(100vh-136px)] border-b border-black overflow-hidden">
            <div className="flex h-full">
              <div className="w-[30%] h-full flex items-center justify-center flex-col">
                <div className="w-4/5 flex flex-col items-center mb-16">
                  <img
                    className="w-4/5"
                    src="/images/illustration-post-it.png"
                    alt="Logo"
                  ></img>
                  <div className="w-2/5 mt-16 h-[1px] bg-black"></div>
                  <p className="my-4 text-center text-3xl text-coorporate-blue">
                    Share your toughts and ideas with the world. <br />
                    <em className="${abril.className} font-extrabold text-coorporate-orange">
                      Post it as it appears!
                    </em>
                  </p>
                  <div className="w-2/5 h-[1px] bg-black"></div>
                </div>
              </div>
              <div className="w-[70%] border-l h-full border-black p-12  overflow-auto">
                {children}
              </div>
            </div>
          </div>
          <div className="h-14 border-b border-black">
            <FooterComponent></FooterComponent>
          </div>
        </div>
      </body>
    </html>
  );
}
