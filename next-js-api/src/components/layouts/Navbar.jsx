"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();
  console.log(session);

  return (
    <section className="flex justify-between items-center px-2 py-1 bg-red-500 text-stone-200 font-semibold">
      <div>Logo</div>
      <div className="flex gap-2 items-center">
        <ul className="flex gap-2">
          <li>
            <Link
              href={"/"}
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/dashboard"}
              className="hover:text-white transition-colors"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="hover:text-white transition-colors"
            >
              Link3
            </Link>
          </li>
        </ul>
        {session.data && session.status === 'authenticated' ?
          <button className="bg-red-900 text-gray-50 px-1 py-1 rounded cursor-pointer" onClick={()=> signOut({ callbackUrl: "/" })}>Logout</button> :
          <button className="bg-red-900 text-gray-50 px-1 py-1 rounded cursor-pointer"><Link href={'/api/auth/signin'}>Login</Link></button>}
      </div>
    </section>
  );
};

export default Navbar;