import express, { Request, Response, Application } from "express";
import cors from "cors";
import { env } from "./env";
import { brianRouter } from "./routes/brian";

const app: Application = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors());

const port = env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.use("/brian", brianRouter);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
