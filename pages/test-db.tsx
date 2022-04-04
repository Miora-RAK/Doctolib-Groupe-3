import { GetServerSideProps } from "next";
import React from "react";
import { getDatabase } from "../src/utils/database"

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();

  const response = await mongodb
    .db()
    .collection("test")
    .find().toArray();

  const data = await JSON.parse(JSON.stringify(response));
  console.log(data[0])

  return {
    props: {
      // name: response.name
    },
  };
};

const Test: React.FC<{}> = ({
}) => {
  return (
    <div>
      <h1>TEST</h1>
    </div>
  )
};

export default Test;
