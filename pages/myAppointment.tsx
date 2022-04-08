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
        <div className="container">
          <h3 className="appointment-text">Mes prochains rendez vous</h3>

          <div className="appointment">
            {data.map((element: any) => {
              return (
                <div key={element._id}>
                  <div>
                    <p className="appointText">doctor: {element.doctor}</p>
                    <p className="appointText"> Date : {element.dayName}</p>
                    <p className="appointText">
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
