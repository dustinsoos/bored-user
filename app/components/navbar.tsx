import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex text-white bg-blue-900 items-center justify-between  px-4 md:px-20">
      <Link href="/">
        <Image
          alt="page-logo"
          src="/images/games.png"
          width={50}
          height={100}
          className="w-14"
        />
      </Link>
      <ul className=" hidden md:flex md:gap-8">
        <Link href="/activity">Example Activity</Link>
        <Link href="/weather">Weather</Link>
      </ul>
      <Image
        alt="hamburger-icon"
        src="/images/hamburger.png"
        width={50}
        height={50}
        className="w-10 md:hidden"
      />
    </nav>
  );
};

export default Navbar;
