import { getDatabase } from "../../src/utils/database";

export default async function handler(
  req: {
    query: {
      date: any;
      dayName: string;
      doctor: string;
      user: string;
      endhour: string;
    };
  },
  res: { redirect: (arg0: string, arg1: number) => void }
) {
  const mongodb = await getDatabase();
  console.log(req.query.dayName);
  console.log(req.query.date);

  switch (req.query.dayName) {
    // Lundi
    case "monday":
      if (req.query.date === "9") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.monday.0.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      } else if (req.query.date === "10") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.monday.1.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      } else if (req.query.date === "11") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.monday.2.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      }
      break;

    // Mardi
    case "tuesday":
      if (req.query.date === "9") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.tuesday.0.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      } else if (req.query.date === "10") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.tuesday.1.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      } else if (req.query.date === "11") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.tuesday.2.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      }
      break;

    // Mercredi
    case "wednesday":
      if (req.query.date === "9") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.wednesday.0.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      } else if (req.query.date === "10") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.wednesday.1.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      } else if (req.query.date === "11") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.wednesday.2.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      }
      break;

    // Jeudi
    case "thursday":
      if (req.query.date === "9") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.thursday.0.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      } else if (req.query.date === "10") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.thursday.1.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      } else if (req.query.date === "11") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.thursday.2.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      }
      break;

    // Vendredi
    case "friday":
      if (req.query.date === "9") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.friday.0.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      } else if (req.query.date === "10") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.friday.1.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      } else if (req.query.date === "11") {
        const user = mongodb
          .db()
          .collection("users")
          .updateOne(
            { email: req.query.doctor },
            {
              $set: {
                "dispo.day.friday.2.reserved": true,
              },
            }
          );
        const rdv = await mongodb
          .db()
          .collection("meetings")
          .insertMany([
            {
              user: req.query.user,
              doctor: req.query.doctor,
              dayName: req.query.dayName,
              date: req.query.date,
              endhour: req.query.endhour,
            },
          ]);
      }
      break;
  }

  res.redirect("/", 302);
}
