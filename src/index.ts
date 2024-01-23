import express from "express";
import { connectDatabase } from "./utils/database";

const start = () => {
  const app = express();
  connectDatabase();
  const PORT = 8000;
  app.get("/", (req, res) => {
    res.status(200).send({ succes: true, msg: "hello world" });
  });
  app.listen(PORT, () => {
    console.log("server runging");
  });
};
start();
