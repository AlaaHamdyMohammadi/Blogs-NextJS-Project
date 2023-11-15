import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ status: "Invalid Data!" });
      return;
    }

    // Stored in database
    const newData = {
      email,
      name,
      message,
    };
    console.log(newData);

    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://alaahamdy2197:y26kJiZGBET2hU25@cluster0.d3ab7ns.mongodb.net/blogs?retryWrites=true&w=majority`
      );
    } catch (err) {
      res.status(500).json({ status: "Could not connect to database" });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newData);
      newData.id = result.insertedId;
    } catch (err) {
      res.status(500).json({
        status: "Could not have a data",
        data: newData,
      });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Data successfully Added.", data: newData });
  }
}
export default handler;
