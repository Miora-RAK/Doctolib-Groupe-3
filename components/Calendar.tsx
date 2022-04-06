import React from "react";

export const Calendar = (props: any) => {
  return (
    <>
      <div>
        <h2>Lundi</h2>
        {props.dispo.day.monday.map((element: any) => {
          return (
            <div key={element.starthour}>
              <p>
                Start hour : {element.starthour} - End hour : {element.endhour}
              </p>
              <button
                onClick={() => {
                  element.dispo = !element.dispo;
                  console.log(props.dispo.day.monday[0].dispo);
                }}
              >
                {element.dispo ? "Dispo." : "Pas dispo"}
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <h2>Mardi</h2>
        {props.dispo.day.tuesday.map((element: any) => {
          return (
            <div key={element.starthour}>
              <p>
                Start hour : {element.starthour} - End hour : {element.endhour}
              </p>
            </div>
          );
        })}
      </div>

      <div>
        <h2>Mercredi</h2>
        {props.dispo.day.wednesday.map((element: any) => {
          return (
            <div key={element.starthour}>
              <p>
                Start hour : {element.starthour} - End hour : {element.endhour}
              </p>
            </div>
          );
        })}
      </div>

      <div>
        <h2>jeudi</h2>
        {props.dispo.day.thursday.map((element: any) => {
          return (
            <div key={element.starthour}>
              <p>
                Start hour : {element.starthour} - End hour : {element.endhour}
              </p>
            </div>
          );
        })}
      </div>

      <div>
        <h2>Vendredi</h2>
        {props.dispo.day.friday.map((element: any) => {
          return (
            <div key={element.starthour}>
              <p>
                Start hour : {element.starthour} - End hour : {element.endhour}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
