import React from "react";
import { Calendar } from "../components/Calendar";

const week = {
  week: 0,
  day: {
    monday: [
      {
        starthour: 9,
        endhour: 10,
        reserved: false,
        dispo: false,
      },
      {
        starthour: 10,
        endhour: 11,
        reserved: false,
        dispo: false,
      },
      {
        starthour: 11,
        endhour: 12,
        reserved: false,
        dispo: false,
      },
    ],
    tuesday: [
      {
        starthour: 9,
        endhour: 10,
        reserved: false,
        dispo: false,
      },
      {
        starthour: 10,
        endhour: 11,
        reserved: false,
        dispo: false,
      },
      {
        starthour: 11,
        endhour: 12,
        reserved: false,
        dispo: false,
      },
    ],
    wednesday: [
      {
        starthour: 9,
        endhour: 10,
        reserved: false,
        dispo: false,
      },
      {
        starthour: 10,
        endhour: 11,
        reserved: false,
        dispo: false,
      },
      {
        starthour: 11,
        endhour: 12,
        reserved: false,
        dispo: false,
      },
    ],
    thursday: [
      {
        starthour: 9,
        endhour: 10,
        reserved: false,
        dispo: false,
      },
      {
        starthour: 10,
        endhour: 11,
        reserved: false,
        dispo: false,
      },
      {
        starthour: 11,
        endhour: 12,
        reserved: false,
        dispo: false,
      },
    ],
    friday: [
      {
        starthour: 9,
        endhour: 10,
        reserved: false,
        dispo: false,
      },
      {
        starthour: 10,
        endhour: 11,
        reserved: false,
        dispo: false,
      },
      {
        starthour: 11,
        endhour: 12,
        reserved: false,
        dispo: false,
      },
    ],
  },
};

const TestCalendar: React.FC = () => {
  const [dispo, setDispo] = React.useState(week);

  React.useEffect(() => {
    setDispo(dispo);
  }, [dispo]);

  return (
    <div>
      <Calendar dispo={dispo} setDispo={setDispo}></Calendar>
    </div>
  );
};

export default TestCalendar;
