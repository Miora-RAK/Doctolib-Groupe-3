import Head from "next/head";
import Link from "next/link";
import React from "react";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Doctolibnt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Doctolibnt</a>
            </Link>
          </li>

          <li>
            <Link href="/api/auth/login">
              <a>Login</a>
            </Link>
          </li>

          <li>
            <Link href="/api/auth/logout">
              <a>Logout</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div>{children}</div>

      <footer>CopyrightÂ©</footer>
    </>
  );
};
