import { getSession, useUser } from "@auth0/nextjs-auth0";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Layout } from "../components/Layout";
import { getDatabase } from "../src/utils/database";

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

  const responseTwo = await mongodb
    .db()
    .collection("users")
    .find({ status: "Doctor" })
    .toArray();
  const allData = await JSON.parse(JSON.stringify(responseTwo));
  // console.log(allData);

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
          <h1>No data</h1>
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
    if (data[0].status === "patient") {
      return (
        // if connected and is patient
        <Layout>
          <div className="connexion-container">
            <h1>Patient</h1>
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
          {/* <div className="row">
            <div className="card">
              <p>Dr </p>
              <p>Status: </p>
              <p>Spécialité:</p>
              <p>E-mail: </p>
            </div>
            <div className="card">Calendrier</div>
          </div> */}

          {/* {console.log(allData)} */}

          {/* {allData.map((element: any) => {
            // console.log(element);
            return <div key={element._id}>Hello</div>;
          })} */}
        </Layout>
      );
    } else {
      return (
        // if connected and isn't patient
        <Layout>
          <h1>Doctor</h1>
        </Layout>
      );
    }
  }
};
export default Home;

// {allData.map((user: any, index: any) => {
//   if (user.status === "doctor")
//     return (
//       <>
//         <div className="row">
//           <div key={index} className="card">
//             <p>Dr {user.name}</p>
//             <p>{user.status}</p>
//             <p>Spécialité:</p>
//             <p>E-mail: {user.email}</p>
//           </div>
//           <div key={index} className="card">
//             {user.disponibilities.map((date: any, index: any) => (
//               <>
//                 <div className="card">
//                   <p> {Object.keys(date)}</p>
//                   <p> {Object.values(date)}</p>
//                 </div>
//               </>
//             ))}
//           </div>
//         </div>
//       </>
//     );
// })}
