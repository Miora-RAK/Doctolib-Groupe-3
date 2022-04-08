import { getDatabase } from "../../src/utils/database";

export default async function handler(
  req: { query: { date: any; dayName: string; doctor: string; user: string } },
  res: { redirect: (arg0: string, arg1: number) => void }
) {
  let index = 0;

  if (req.query.date === 9) {
    index = 0;
  } else if (req.query.date === 10) {
    index = 1;
  } else if (req.query.date === 11) {
    index = 2;
  }

  const indexString = index.toString();
  console.log(index);
  const mongodb = await getDatabase();
  const user = mongodb
    .db()
    .collection("users")
    .updateOne(
      { email: req.query.doctor },
      {
        $set: {
          "dispo.day.monday.{index}.reserved": false,
        },
      }
    );

  res.redirect("/", 302);
}
