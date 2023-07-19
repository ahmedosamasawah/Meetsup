import { MongoClient } from "mongodb";

async function handler(request, response) {
  if (request.method === "POST") {
    const data = request.body;
    const client = await MongoClient.connect(
      `mongodb+srv://ahmedosamaalsawah:Mongo%40742002@cluster0.0dvsymx.mongodb.net/test`
    );

    const db = client.db();
    const meetupsCollections = db.collection("meetups");
    const result = await meetupsCollections.insertOne(data);

    console.log(result);
    client.close();
    response.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
