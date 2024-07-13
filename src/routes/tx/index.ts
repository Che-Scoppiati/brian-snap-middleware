import { Router } from "express";
import {
  getAllTransactions,
  getAllTransactionsByAddress,
  getTransactionByTransactionId,
  updateTransaction,
  deleteTransaction,
} from "./transaction.controller";
import { getTransactionById } from "../../db/transaction";

const txRouter = Router();

// get all transactions
txRouter.get("/", getAllTransactions);

// get transactions by address
txRouter.get("/address/:address", getAllTransactionsByAddress);

// get transaction by uuid
txRouter.get("/:uuid", getTransactionByTransactionId);
txRouter.put("/:uuid", updateTransaction);
txRouter.delete("/:uuid", deleteTransaction);

export { txRouter };
