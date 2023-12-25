import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";

import logo from "../../public/images/logo.png";
import { Button } from "antd";
import { useRouter } from "next/router";

const Nav = () => {
  //   const session =  getServerSession(options);
  const router = useRouter();
  const curr = router.pathname;
  const { data: session } = useSession();

  const activeLinkStyle = "text-teal-400 hover:text-teal-400";

  return (
    <header className="bg-gradient-to-b from-sky-600 to-sky-800 font-medium text-white">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <Link className="hover:text-white" href="/">
          <div className="flex gap-2">
            <Image width={35} src={logo} alt="logo" />
            <div className="text-xl font-bold">
              <span className="text-teal-500">e</span>Doctor
            </div>
          </div>
        </Link>
        <div className="flex gap-10">
          <Link
            className={`${curr == "/specialities" && activeLinkStyle}`}
            href="/specialities"
          >
            Consultation
          </Link>
          <Link
            className={`${curr == "/blog" && activeLinkStyle}`}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={`${curr == "/doctor" && activeLinkStyle}`}
            href="/doctor"
          >
            For Doctor
          </Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">
              <Button type="primary" shape="round">
                Logout
              </Button>
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <Button type="primary" shape="round">
                Login
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
