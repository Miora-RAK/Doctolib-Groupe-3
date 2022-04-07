import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const MyAppointment: NextPage = () => {
  return (
    <>
      <Layout>
        <div>
          <div className="appointment">
            <h3 className="appointment-text">Mes prochains rendez vous</h3>
            {/* A remplacer par rendez-vous de la collection RDV */}
            <div>
              <p>doctor: </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                beatae esse, suscipit ipsam vero hic nihil nemo dolores et
                deleniti velit earum! Sapiente perferendis minus ratione nulla a
                rerum voluptatum. Tenetur veritatis optio quis dolores eaque
                dignissimos, eius facere cum repellendus sapiente provident
                soluta ipsa assumenda? Repudiandae quia vitae ut. Laborum autem
                sed facere, aperiam aut repellendus. Omnis, eum tenetur.
              </p>
            </div>
          </div>
          <div className="appointment">
            <h3 className="appointment-text">Mes précédents rendez vous</h3>
            {/* A remplacer par historique de la collection RDV */}
            <div>
              <p>doctor: </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, suscipit vel excepturi aperiam animi temporibus quia
                nesciunt libero sequi fugit a facere doloremque laborum odit,
                nostrum quos iste? Sunt, ratione.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MyAppointment;
