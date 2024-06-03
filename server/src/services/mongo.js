const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://kyryloshyrokovdev:w1XkYJe6NQhwNZYN@nasa-cluster.drxq4oa.mongodb.net/nasa-api-db?retryWrites=true&w=majority&appName=NASA-Cluster";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
