import { useUser } from "@auth0/nextjs-auth0";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Layout } from "../components/Layout";
import { getDatabase } from "../src/utils/database";

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();

  const response = await mongodb.db().collection("test").find().toArray();

  const data = await JSON.parse(JSON.stringify(response));
  const name = data.map((e: any) => e.name);
  const email = data.map((e: any) => e.email);
  const status = data.map((e: any) => e.status);
  const disponibilities = data.map((e: any) => e.disponibilities);
  // console.log(data[1]);

  return {
    props: {
      data1: data[1],
      allData: data,
      name: name,
      email: email,
      status: status,
      disponibilities: disponibilities,
    },
  };
};
type HomeProps = {
  data1: any;
  allData: any;
  name: string;
  email: string;
  status: string;
  disponibilities: any;
};
const Home: React.FC<HomeProps> = ({
  name,
  email,
  status,
  disponibilities,
  allData,
  data1,
}) => {
  const { user, error, isLoading } = useUser();
  const [formText, setFormText] = React.useState("");
  const [doctor, setDoctor] = React.useState("");
  const handleInputText = (event: any) => {
    const value = event.target.value;
    setFormText(value);
    // console.log(value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // console.log("ma data", formText);
    formText === "doctor"
      ? setDoctor("il y a un docteur")
      : setDoctor("pas de docteur");
  };
  return (
    <>
      <Layout>
        <div className="connexion-container">
          {/* if patient connected  =  à remplacer par RDV collection*/}
          {data1.status === "patient" && user ? (
            <button className="home-button">
              Aucun RDV de prévue (RDV prévue pour le...)
            </button>
          ) : (
            /* if user not connected  */
            <Link href="/api/auth/login">
              <a>
                <button className="home-button">
                  Se connecter pour prendre rendez-vous
                </button>
              </a>
            </Link>
          )}
          {/* image */}
        </div>

        <div>
          {data1.status === "patient" && user ? (
            <>
              <form
                className="form-search-bar"
                role="search"
                onSubmit={handleSubmit}
              >
                <input
                  onChange={handleInputText}
                  type="text"
                  placeholder="Rechercher sur le site..."
                  size={50}
                />
                <button className="form-search-bar-button" type="submit">
                  Trouver un médecin
                </button>
              </form>
              <p>{doctor}</p>
              {allData.map((user: any, index: any) => {
                if (user.status === "doctor")
                  return (
                    <>
                      <div className="row">
                        <div key={index} className="card">
                          <p>Dr {user.name}</p>
                          <p>{user.status}</p>
                          <p>Spécialité:</p>
                          <p>E-mail: {user.email}</p>
                        </div>
                        <div key={index} className="card">
                          {user.disponibilities.map((date: any, index: any) => (
                            <>
                              <div className="card">
                                <p> {Object.keys(date)}</p>
                                <p> {Object.values(date)}</p>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </>
                  );
              })}
            </>
          ) : (
            <>
              <p>Prendre rendez-vous avec un médecin en 3 étapes</p>
              <div className="row">
                <div className="card">
                  <h3>1</h3>
                  <p>Je me connecte</p>
                </div>
                <div className="card">
                  <h3>2</h3>
                  <p>Je sélectionne un médecin selon mes critères</p>
                </div>
                <div className="card">
                  <h3>3</h3>
                  <p>Je prend RDV sur un des créneaux disponible</p>
                </div>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
