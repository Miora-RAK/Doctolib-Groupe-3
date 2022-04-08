import { getSession, useUser } from "@auth0/nextjs-auth0";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Calendar } from "../components/Calendar";
import { Layout } from "../components/Layout";
import { getDatabase } from "../src/utils/database";
import { week } from "../src/utils/weekType";
import Image from "next/image";
export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
}: any) => {
  const session = getSession(req, res);
  const email = session?.user.email;

  const mongodb = await getDatabase();
  const response = await mongodb
    .db()
    .collection("users")
    .find({ email: email })
    .toArray();

  const data = await JSON.parse(JSON.stringify(response));

  const responseTwo = await mongodb
    .db()
    .collection("users")
    .find({ status: "Doctor" })
    .toArray();
  const allData = await JSON.parse(JSON.stringify(responseTwo));

  return {
    props: {
      data: data,
      allData: allData,
    },
  };
};

const Home: React.FC<{ data: any; allData: any }> = ({ data, allData }) => {
  const { user, error, isLoading } = useUser();

  if (!user) {
    // if no connected
    return (
      <Layout>
        <div className="connexion-container">
          <Link href="/api/auth/login">
            <a>
              <button className="home-button">
                Se connecter pour prendre rendez-vous
              </button>
            </a>
          </Link>
        </div>
        <div>
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
        </div>
      </Layout>
    );
  } else {
    // if connected
    if (data[0].status === "Patient") {
      return (
        // if connected and is patient
        <Layout>
          <div className="connexion-container">
            <h1>Patient</h1>
            <div>
              <Link href="/myAppointment">
                <a>
                  <p>Mes rendez-vous</p>
                </a>
              </Link>
            </div>
            <button className="home-button">
              Aucun RDV de prévue (RDV prévue pour le...)
            </button>
          </div>
          <form className="form-search-bar" role="search">
            <input
              type="text"
              placeholder="Rechercher sur le site..."
              size={50}
            />
            <button className="form-search-bar-button" type="submit">
              Trouver un médecin
            </button>
          </form>
          {/* liste des docteurs */}
          {allData.map((user: any, index: any) => {
            return (
              <>
                <div key={index} className="row-doctor-list">
                  <div className="card">
                    <p>
                      <strong>Dr</strong> {user.name}
                    </p>
                    <p>
                      <strong>Status:</strong> {user.status}
                    </p>
                    <p>
                      <strong>Spécialité:</strong>
                    </p>
                    <p>
                      <strong>E-mail:</strong> {user.email}
                    </p>
                  </div>
                  <div className="calendar">
                    {Object.keys(user?.dispo?.day).map((dayName) => {
                      return (
                        <>
                          <div key={dayName}>
                            <div className="card"> {dayName}</div>
                            {user.dispo.day[dayName].map((element: any) => {
                              if (element.dispo) {
                                return (
                                  <div>
                                    <Link
                                      href={`/api/appointement?date=${element.starthour}&dayName=${dayName}&doctor=${user.email}&user=${data[0].email}`}
                                    >
                                      <a>
                                        <p
                                          className={
                                            element.dispo && !element.reserved
                                              ? "button available"
                                              : "button notAvailable"
                                          }
                                        >
                                          {element.starthour}h -{" "}
                                          {element.endhour}h
                                        </p>
                                      </a>
                                    </Link>
                                  </div>
                                );
                              } else {
                                return (
                                  <div>
                                    <p className="button notAVailable">-</p>
                                  </div>
                                );
                              }
                            })}
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </Layout>
      );
    } else {
      return (
        // if connected and isn't patient
        <Layout>
          <h1>
            Planning <hr />
          </h1>
          <br />
          {data.map((doctor: any, index: any) => {
            return (
              <>
                <div key={index} className="calendar">
                  {Object.keys(doctor?.dispo.day).map((dayName) => {
                    return (
                      <>
                        <div key={dayName}>
                          <div className="card"> {dayName}</div>
                          {doctor.dispo.day[dayName].map((element: any) => {
                            if (element.dispo) {
                              return (
                                <div>
                                  <p
                                    className={
                                      element.dispo && !element.reserved
                                        ? "button available"
                                        : "button notAvailable"
                                    }
                                  >
                                    {element.starthour}h - {element.endhour}h
                                  </p>
                                </div>
                              );
                            } else {
                              return <div></div>;
                            }
                          })}
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
        </Layout>
      );
    }
  }
};
export default Home;
