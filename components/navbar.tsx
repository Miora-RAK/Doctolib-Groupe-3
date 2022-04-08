import { getSession } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
}: any) => {
  const session = getSession(req, res);
  console.log("=============", session?.user.name);

  return {
    props: {
      session: session,
    },
  };
};

export const Navbar: React.FC<{ session: any }> = ({ session }) => {
  return (
    <>
      {console.log(session)}
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
    </>
  );
};
