import type { NextPage } from "next";
import { Layout } from "../components/Layout";
const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="connexion-container">
          <div>
            <button> Se connecter pour prendre rendez-vous</button>
            {/* image */}
          </div>
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
    </>
  );
};

export default Home;
