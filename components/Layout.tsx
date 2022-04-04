import Link from "next/link";
import React from "react";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <Link href="#">
            <a>Logo</a>
          </Link>

          <Link href="#">
            <a>Login</a>
          </Link>
          <div></div>
        </ul>
      </nav>
      <div>{children}</div>
      <footer>Footer</footer>
    </>
  );
};
