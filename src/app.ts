import express, { Request, Response, Application } from "express";
import cors from "cors";
import { env } from "./env";
import { brianRouter } from "./routes/brian";
import { txRouter } from "./routes/tx";

const app: Application = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors());

const port = env.PORT;
const hostname = env.HOSTNAME;

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.use("/brian", brianRouter);
app.use("/tx", txRouter);

app.listen(port, hostname, () => {
  console.log(`Server is live at http://localhost:${port}`);
});
