import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex text-white bg-blue-900 items-center justify-between">
      <Image
        alt="page-logo"
        src="/images/umbrella.png"
        width={50}
        height={100}
      />
      <ul>
        <Link href="/activity">Activity</Link>
        <Link href="/weather">Weather</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
