const { MongoClient } = require("mongodb");

const uri = "mongodb://<rapidaid>:<rapidaid23>@ac-im5jxts-shard-00-00.zfj5gnc.mongodb.net:27017,ac-im5jxts-shard-00-01.zfj5gnc.mongodb.net:27017,ac-im5jxts-shard-00-02.zfj5gnc.mongodb.net:27017/?ssl=true&replicaSet=atlas-10hwts-shard-0&authSource=admin&appName=Cluster0";

async function test() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("✅ Authentication Successful");
    await client.close();
  } catch (err) {
    console.error(err);
  }
}

test();