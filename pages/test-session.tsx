import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { getDatabase } from "../src/utils/database";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  let headers = {};
  const session = await getSession({ req });
  if (session) {
    headers = { Authorization: `Bearer ${session.jwt}` };
  }

  return {
    props: {},
  };
  // Use this session information where you want.
};

export default function Home() {
  return <div>TEST</div>;
}
