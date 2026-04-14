import logoXl from "@/assets/logo-xl.png";
import fbLogo from "@/assets/facebook.png";
import instaLogo from "@/assets/instagram.png";
import xLogo from "@/assets/twitter.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-emerald-800 text-white p-10">
      <aside>
        <Image src={logoXl} alt="KeenKeeper Logo" width={300} height={200} />
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p className="font-bold">Social Links</p>
        <nav className="flex gap-2">
          <Image src={fbLogo} alt="Facebook Logo" width={30} height={30} />
          <Image src={instaLogo} alt="Instagram Logo" width={30} height={30} />
          <Image src={xLogo} alt="Twitter Logo" width={30} height={30} />
        </nav>
      </aside>
      <div className="container flex flex-col md:flex-row justify-between text-slate-300 border-t-2 border-emerald-700 pt-6">
        <p>&copy; {new Date().getFullYear()} KeenKeeper. All right reserved.</p>
        <div className="flex justify-center gap-6">
          <Link href="/privacyPolicy" className="link link-hover">
            Privacy Policy
          </Link>
          <Link href="/termsOfService" className="link link-hover">
            Terms of Service
          </Link>
          <Link href="/cookies" className="link link-hover">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
