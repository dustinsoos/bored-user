"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  //Closing dropdown nav at a certain screen size
  const closeDropdownOnResize = () => {
    if (window.innerWidth > 768 && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", closeDropdownOnResize);

    return () => {
      window.removeEventListener("resize", closeDropdownOnResize);
    };
  }, [isOpen]);

  return (
    <nav className=" w-full bg-blue-900 px-4 py-2 md:px-8 xl:px-16 ">
      <ul>
        <div className=" flex justify-between items-center ">
          <Link href="/" className=" w-10 2xl:w-14  hover:opacity-70">
            <Image
              src="/images/games.png"
              width={100}
              height={100}
              alt="Logo"
              priority={true}
            />
          </Link>
          <button
            className=" hover:opacity-80"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src="/images/hamburger.png"
              width={40}
              height={40}
              alt="hamburger-icon"
              className=" w-10 lg:w-10 md:hidden "
              priority={true}
            />
          </button>

          <div className="text-white text-center hidden md:flex md:gap-6">
            <Link href="/" className="hover:opacity-70">
              Home
            </Link>
            <Link href="/exampleuser" className="hover:opacity-70">
              Get Activity
            </Link>
            <Link href="/createpersonas" className="hover:opacity-70">
              Create Personas
            </Link>
          </div>
        </div>
        {isOpen && (
          <div className="text-white grid gap-2 pt-4 place-content-center text-center ">
            <Link href="/" onClick={closeNavbar} className="hover:opacity-70">
              Home
            </Link>
            <Link
              href="/exampleuser"
              onClick={closeNavbar}
              className="hover:opacity-70"
            >
              Get Activity
            </Link>
            <Link
              href="/createpersonas"
              onClick={closeNavbar}
              className="hover:opacity-70"
            >
              Create Personas
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
