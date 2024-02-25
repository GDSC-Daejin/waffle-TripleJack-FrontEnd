const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();

app.use(express.json());
var cors = require("cors");
app.use(cors());

let db;
const url =
  "mongodb+srv://miun55:als631023@cluster0.uxw5l0c.mongodb.net/?retryWrites=true&w=majority";
new MongoClient(url)
  .connect()
  .then((client) => {
    console.log("DB연결성공");
    db = client.db("daejin");

    app.listen(8080, () => {
      console.log("http://localhost:8080 에서 서버 실행중");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", async (요청, 응답) => {
  응답.send("배고파");
});

app.get("/list", async (요청, 응답) => {
  let result = await db.collection("date").find().toArray();
  console.log(result);
  응답.send(result);
});
