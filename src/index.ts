import dotenv from "dotenv";
import express from "express";
import path from "path";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello ts-node");
});

app.listen(port, () => {
  console.log(`server on localhost:${port}`);
});
