//https://www.youtube.com/watch?v=qy8PxD3alWw

import express from "express";
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO FROM MY EXPRESS + TYPESCRIPT APP!");
});

app.listen(port, () => console.log(`The app is now listening on port ${port}`));
