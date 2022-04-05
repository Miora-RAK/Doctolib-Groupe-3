import { getDatabase } from "../../src/utils/database";

export default async function handler(req, res) {
  const mongodb = await getDatabase();
  const user = await mongodb.db().collection("users");
  // .updateOne(
  //   { email: req.query.email },
  //   {
  //     $set: {
  //       email: "toto@gmail.com",
  //     },
  //   }
  // );

  console.log(user);

  res.redirect(307, "/");
}
