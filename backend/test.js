const dns = require("dns");

dns.resolveSrv("_mongodb._tcp.cluster0.zfj5gnc.mongodb.net", (err, records) => {
  if (err) {
    console.log("❌ DNS ERROR");
    console.log(err);
  } else {
    console.log("✅ DNS OK");
    console.log(records);
  }
});