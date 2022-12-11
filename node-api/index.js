import app from "./src/server.js";

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Welcome to our very first Node JS API and Docker" });
});
