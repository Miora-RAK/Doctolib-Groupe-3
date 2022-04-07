import { getDatabase } from "../../src/utils/database";

export default async function handler(
  req: { body: { email: string; name: string; status: string } },
  res: { redirect: (arg0: string, arg1: number) => void }
) {
  const mongodb = await getDatabase();
  const user = await mongodb
    .db()
    .collection("users")
    .updateOne(
      { email: req.body.email },
      {
        $set: {
          name: req.body.name,
          status: req.body.status,
        },
      }
    );

  res.redirect("/", 302);
}
