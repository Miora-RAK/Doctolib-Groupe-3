import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.css";

const Forms: React.FC = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
          <form action="#">
            <label>
              <input type="text" name="name" placeholder="name" />
            </label>
            <label>
              <input type="text" name="email" placeholder="email" />
            </label>

            <div>
              <input type="radio" name="drone" value="patient" />
              <label htmlFor="name">Patient</label>
            </div>
            <div>
              <input type="radio" name="drone" value="doctor" />
              <label htmlFor="email">Doctor</label>
            </div>
            <button> Envoyer </button>
          </form>
        </main>
      </Layout>
    </div>
  );
};

export default Forms;
