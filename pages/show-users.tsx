import React from "react";
import { Layout } from "../components/Layout";
import { GetServerSideProps } from "next";
import { getDatabase } from "../src/utils/database";

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();

  const response = await mongodb.db().collection("test").find().toArray();

  const data = await JSON.parse(JSON.stringify(response));
  // console.log(data[0].disponibilities)

  return {
    props: {
      name: data[0].name,
      email: data[0].email,
      status: data[0].status,
      disponibilities: data[0].disponibilities,
    },
  };
};

const Cart: React.FC<{
  name: string;
  email: string;
  status: string;
  disponibilities: any;
}> = ({ name, email, status, disponibilities }) => {
  if (email !== null) {
    return (
      <Layout>
        <div className="container">
          <li>name: {name}</li>
          <li>email: {email}</li>
          <li>status: {status}</li>
          <li>diponibilities: </li>
          <li>{`${Object.keys(disponibilities)}\n`}</li>
        </div>
        {console.log(disponibilities)}
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="container">Please log in to see your cart</div>
      </Layout>
    );
  }
};

export default Cart;
