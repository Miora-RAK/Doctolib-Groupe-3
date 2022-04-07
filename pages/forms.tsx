import { getSession } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import Link from "next/link";
import router from "next/router";
import React from "react";
import { Calendar } from "../components/Calendar";
import { Layout } from "../components/Layout";
import { getDatabase } from "../src/utils/database";
import { week } from "../src/utils/weekType";

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
}: any) => {
  const session = await getSession(req, res);
  const email = session?.user.email;

  const mongodb = await getDatabase();
  const response = await mongodb
    .db()
    .collection("users")
    .find({ email: email })
    .toArray();

  const data = await JSON.parse(JSON.stringify(response));

  return {
    props: {
      data: data,
    },
  };
};

const Forms: React.FC<{ data: any }> = ({ data }) => {
  const [status, setStatus] = React.useState();
  const [dispo, setDispo] = React.useState(week);

  const handleChange = (e: { target: any }) => {
    const target = e.target;
    if (target.checked) {
      setStatus(target.value);
    }
  };

  const handleText = (e: any) => {};

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let user;
    if (status === "Patient") {
      user = {
        name: e.target[0].value,
        email: data[0].email,
        status: status,
      };
    } else {
      user = {
        name: e.target[0].value,
        email: data[0].email,
        status: status,
        dispo: dispo,
      };
    }
    fetch("/api/update-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    router.push("/");
  };

  if (data[0].status) {
    return (
      <Layout>
        <Link href="/">
          <a>
            <h2>HOMEPAGE</h2>
          </a>
        </Link>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <main>
          <form onSubmit={handleSubmit}>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "3em",
              }}
            >
              Signup Form
            </h2>
            <label>
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={handleText}
              />
            </label>
            <br />
            <br />
            <div>
              <input
                type="radio"
                name="drone"
                value="Patient"
                onChange={handleChange}
              />
              <label htmlFor="name"> Patient</label>
            </div>
            <div>
              <input
                type="radio"
                name="drone"
                value="Doctor"
                onChange={handleChange}
              />
              <label htmlFor="email"> Doctor</label>
            </div>
            <br />

            <Calendar dispo={dispo} setDispo={setDispo}></Calendar>

            <button type="submit">Envoyer</button>
          </form>
        </main>
      </Layout>
    );
  }
  // console.log(status);
};

export default Forms;
