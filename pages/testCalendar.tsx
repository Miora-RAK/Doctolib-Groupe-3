import React from "react";
import { Calendar } from "../components/Calendar";
import { Layout } from "../components/Layout";
import { week } from "../src/utils/weekType";

const TestCalendar: React.FC = () => {
  const [dispo, setDispo] = React.useState(week);

  return (
    <div>
      <Layout>
        <Calendar dispo={dispo} setDispo={setDispo}></Calendar>
        <button
          onClick={() => {
            console.log(dispo);
          }}
        >
          TEST
        </button>
      </Layout>
    </div>
  );
};

export default TestCalendar;
