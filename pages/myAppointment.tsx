import { getSession } from "@auth0/nextjs-auth0";
import type { GetServerSideProps, NextPage } from "next";
import { Layout } from "../components/Layout";
import { getDatabase } from "../src/utils/database";

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
}: any) => {
  const session = getSession(req, res);
  const email = session?.user.email;

  const mongodb = await getDatabase();
  const response = await mongodb
    .db()
    .collection("meetings")
    .find({ user: email })
    .toArray();

  const data = await JSON.parse(JSON.stringify(response));

  return {
    props: {
      data: data,
    },
  };
};
const MyAppointment: React.FC<{ data: any }> = ({ data }) => {
  console.log("data", data);
  return (
    <>
      <Layout>
        <div>
          <div className="appointment">
            <h3 className="appointment-text">Mes prochains rendez vous</h3>
            <br />
            {/* A remplacer par rendez-vous de la collection RDV */}
            {data.map((element: any) => {
              return (
                <div key={element._id}>
                  <div>
                    <p>doctor: {element.doctor}</p>
                    <p> Date : {element.dayName}</p>
                    <p>
                      Heure : {element.date} h - {element.endhour} h
                    </p>
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MyAppointment;
