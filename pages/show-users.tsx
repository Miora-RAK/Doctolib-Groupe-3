import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { Layout } from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  const { user, error, isLoading } = useUser();
  console.log(user);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    user && (
      <Layout>
        <Link href={`/api/getUser?email=${user.email}`}>
          <a>test route api</a>
        </Link>
        <div>
          <main>
            <h2>User conected</h2>

            <div>
              <div>
                <h2>mail : {user.name}</h2>
                <Image
                  src={`${user.picture}`}
                  alt="cover img"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </main>
        </div>
      </Layout>
    )
  );
}
