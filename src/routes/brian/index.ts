import { Router } from "express";
import { fetchTransactionFromPrompt } from "./brian.controller";

const brianRouter = Router();

brianRouter.post("/transaction", fetchTransactionFromPrompt);

export { brianRouter };
