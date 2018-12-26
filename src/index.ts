import express from "express";
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello ts-node");
});

app.listen(port, () => {
  console.log(`server on localhost:${port}`);
});
