import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Abril_Fatface } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/headerComponent";
import Image from "next/image";
import FooterComponent from "@/components/footerComponent";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/config/authOptions";

const inter = Inter({ subsets: ["latin"] });
const abril = Abril_Fatface({ weight: "400", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Post It",
  description: "Post your ideas and thoughts",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session = (await getServerSession(authOptions)) as Session;
  return (
    <html lang="en">
      <body className="${inter.className} bg-gradient-to-b from-bg-yellow-light to-bg-yellow">
        <div className="flex flex-col">
          <div className="h-20 max-sm:h-32 border-b border-black">
            <HeaderComponent session={session}></HeaderComponent>
          </div>
          <div className="h-[calc(100vh-136px)] max-sm:h-[calc(100vh-208px)]  border-b border-black overflow-hidden">
            <div className="flex max-sm:flex-col max-sm:overflow-auto  h-full">
              <div className="w-[30%] max-sm:w-full max-sm:h-fit h-full flex items-center justify-center flex-col">
                <div className="w-4/5 flex flex-col max-sm:flex-row items-center max-sm:border-b max-sm:border-coorporate-orange">
                  <img
                    className="w-4/5 max-sm:w-2/5"
                    src="/images/illustration-post-it.png"
                    alt="Logo"
                  ></img>
                  <div className="w-2/5 max-sm:hidden mt-16 h-[1px] bg-black"></div>
                  <p className="my-4 text-center text-2xl max-sm:text-lg text-coorporate-blue">
                    Share your toughts and ideas with the world. <br />
                    <em className="${abril.className} font-serif text-4xl max-sm:text-xl font-extrabold text-coorporate-orange">
                      Post it as it appears!
                    </em>
                  </p>
                  <div className="w-2/5 max-sm:hidden h-[1px] bg-black"></div>
                </div>
              </div>
              <div className="w-[70%] border-l h-full max-sm:overflow-auto max-sm:h-fit max-sm:border-none max-sm:w-full border-black p-12  overflow-auto">
                {children}
              </div>
            </div>
          </div>
          <div className="h-14 max-sm:h-20 border-b border-black">
            <FooterComponent></FooterComponent>
          </div>
        </div>
      </body>
    </html>
  );
}
