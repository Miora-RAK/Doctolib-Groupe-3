import { getDatabase } from "../../src/utils/database";

export default async function handler(
  req: { body: { email: string; name: string; status: string } },
  res: { redirect: (arg0: number, arg1: string) => void }
) {
  const mongodb = await getDatabase();
  console.log(req.body);
  const user = await mongodb
    .db()
    .collection("test")
    .updateOne(
      { email: req.body.email },
      {
        $set: {
          name: req.body.name,
          status: req.body.status,
        },
      }
    );

  res.redirect(307, "/");
}
