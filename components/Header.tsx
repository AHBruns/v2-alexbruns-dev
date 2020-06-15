import React from "react";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="fixed inset-x-0 top-0 right-fade">
        <div className="fixed top-0 left-0 right-0 h-12 overflow-x-auto /bg-white bg-blur">
          <div className="absolute top-0 left-0 flex items-center h-12 px-6 space-x-4 text-lg font-light text-gray-700 whitespace-no-wrap">
            <Link href="/">
              <a className="hover:underline">Home</a>
            </Link>
            <Link href="/books">
              <a className="hover:underline">Books</a>
            </Link>
            <Link href="/programming">
              <a className="hover:underline">Programming</a>
            </Link>
            <Link href="philosophy">
              <a className="hover:underline">Politics & Philosophy</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .right-fade::after {
          content: "";
          position: absolute;
          pointer-events: none;
          top: 0;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 48px;
          background: linear-gradient(
            to right,
            white 0%,
            rgba(0, 0, 0, 0) 24px,
            rgba(0, 0, 0, 0) calc(100% - 24px),
            white 100%
          );
        }
        .bg-blur {
          backdrop-filter: blur(10px);
        }
      `}</style>
    </>
  );
}

export default Header;
