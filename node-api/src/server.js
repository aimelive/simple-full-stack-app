import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.listen(8000, () => {
  console.log("App is listening on port 8000 🔥");
});

export default app;
