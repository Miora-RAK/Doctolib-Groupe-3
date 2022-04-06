import React from "react";
import { Layout } from "../components/Layout";

const Forms: React.FC = () => {
  const [status, setStatus] = React.useState();
  const handleChange = (e: { target: any }) => {
    const target = e.target;
    if (target.checked) {
      setStatus(target.value);
    }
  };
  const handleText = (e: any) => {
    // console.log(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let user;
    if (status === "Patient") {
      user = {
        name: e.target[0].value,
        email: e.target[1].value,
        status: status,
      };
    } else {
      user = {
        name: e.target[0].value,
        email: e.target[1].value,
        status: status,
        disponibilities: e.target[4].value,
      };
    }

    console.log(user);
  };

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
          <label>
            <input
              type="text"
              name="email"
              placeholder="email"
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
          <div>
            <label htmlFor="disponibilities">
              If you are a doctor, please indicate your disponibilities :
            </label>
            <br />
            <input
              type="text"
              name="drone"
              placeholder="Disponibilities"
              onChange={handleChange}
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </main>
    </Layout>
  );
};

export default Forms;
