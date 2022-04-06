import React from "react";

export const Calendar = (props: any) => {
  return (
    <div className="calendar">
      <div>
        <h2>Lundi</h2>
        {props.dispo.day.monday.map((element: any) => {
          return (
            <div key={element.starthour}>
              <button
                className={
                  element.dispo ? "button available" : "button notAvailable"
                }
                onClick={() => {
                  element.dispo = !element.dispo;
                  props.setDispo((dispo: any) => ({
                    ...dispo,
                  }));
                }}
              >
                {element.starthour}h - {element.endhour}h
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
              <button
                className={
                  element.dispo ? "button available" : "button notAvailable"
                }
                onClick={() => {
                  element.dispo = !element.dispo;
                  props.setDispo((dispo: any) => ({
                    ...dispo,
                  }));
                }}
              >
                {element.starthour}h - {element.endhour}h
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <h2>Mercredi</h2>
        {props.dispo.day.wednesday.map((element: any) => {
          return (
            <div key={element.starthour}>
              <button
                className={
                  element.dispo ? "button available" : "button notAvailable"
                }
                onClick={() => {
                  element.dispo = !element.dispo;
                  props.setDispo((dispo: any) => ({
                    ...dispo,
                  }));
                }}
              >
                {element.starthour}h - {element.endhour}h
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <h2>Jeudi</h2>
        {props.dispo.day.thursday.map((element: any) => {
          return (
            <div key={element.starthour}>
              <button
                className={
                  element.dispo ? "button available" : "button notAvailable"
                }
                onClick={() => {
                  element.dispo = !element.dispo;
                  props.setDispo((dispo: any) => ({
                    ...dispo,
                  }));
                }}
              >
                {element.starthour}h - {element.endhour}h
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <h2>Vendredi</h2>
        {props.dispo.day.friday.map((element: any) => {
          return (
            <div key={element.starthour}>
              <button
                className={
                  element.dispo ? "button available" : "button notAvailable"
                }
                onClick={() => {
                  element.dispo = !element.dispo;
                  props.setDispo((dispo: any) => ({
                    ...dispo,
                  }));
                }}
              >
                {element.starthour}h - {element.endhour}h
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
