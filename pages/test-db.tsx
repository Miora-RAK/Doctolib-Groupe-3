import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { getDatabase } from "../src/utils/database";

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();

  const response = await mongodb.db().collection("users").find().toArray();

  const data = await JSON.parse(JSON.stringify(response));
  console.log(data[0]);

  return {
    props: {
      email: data[0].email,
    },
  };
};

const Test: React.FC<{ email: string }> = ({ email }) => {
  console.log(email);
  return (
    <div>
      <h1>TEST</h1>
    </div>
  );
};

export default Test;
