import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TimelineProvider from "@/context/TimelineContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper — Keep Your Friendships Alive",
  description: "A smart way to track and maintain your meaningful friendships.",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${geistSans.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TimelineProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </TimelineProvider>
      </body>
    </html>
  );
}
