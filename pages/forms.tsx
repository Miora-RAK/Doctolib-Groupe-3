import { Layout } from "../components/Layout";

const Forms: React.FC = () => {
  return (
    <>
      <Layout>
        <main>
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
    </>
  );
};

export default Forms;
