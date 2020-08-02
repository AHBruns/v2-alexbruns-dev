import React from "react";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="relative z-50 flex-none w-full h-12 overflow-x-auto bg-white border-b border-gray-700">
        <div className="absolute top-0 left-0 flex items-center h-12 px-6 space-x-4 text-lg font-light text-gray-700 whitespace-no-wrap">
          <Link href="/">
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/books">
            <a className="hover:underline">Books</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
