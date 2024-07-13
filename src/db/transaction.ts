import { prisma } from ".";
import { Transaction } from "@prisma/client";

export const getTransactions = async () => {
  return prisma.transaction.findMany();
};

// TODO: Implement the following functions
// getTransactionById
// saveTransaction
// updateTransaction
// deleteTransaction
