import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
// import Navber from "@/component/Navber";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero",
  },
  description: "Super powerful Next Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <nav>
          <ul className=" flex justify-center gap-5">
            <li className=" text-xl">
              <Link href={"/"} className=" text-xl font-semibold">
                Home
              </Link>
            </li>
            <li className="">
              <Link href={"/posts"} className=" text-xl font-semibold">
                posts
              </Link>
            </li>
            <li className=" ml-6 bg-red-950">
              <Link href={"/meals"} className=" text-xl font-semibold">
                Meals
              </Link>
            </li>
            <li className=" ml-6 bg-red-950">
              <Link href={"/gallery"} className=" text-xl font-semibold">
                Gallery
              </Link>
            </li>
            <li className=" ml-6 bg-red-950">
              <Link href={"/about"} className=" text-xl font-semibold">
                About
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
