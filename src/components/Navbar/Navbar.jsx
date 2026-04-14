"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { ChartSpline, Clock4, House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: <House /> },
    { name: "Timeline", href: "/timeline", icon: <Clock4 /> },
    { name: "Stats", href: "/stats", icon: <ChartSpline /> },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link href={"/"}>
          <Image src={logo} alt="KeenKeeper Logo" width={150} height={100} />
        </Link>
      </div>

      <div className="navbar-end">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={index}
              href={link.href}
              className={`btn ${
                isActive
                  ? "bg-emerald-900 hover:bg-emerald-700 text-white"
                  : "btn-ghost text-slate-500"
              }`}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
