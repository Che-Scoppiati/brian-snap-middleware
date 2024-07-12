import axios, { Axios, AxiosError } from "axios";
import { env } from "../../env";
import { Request, Response } from "express";
import { Logger } from "../../logger";

const BRIAN_BASE_URL = "https://api.brianknows.org/api/v0/agent";
const BRIAN_API_KEY = env.BRIAN_API_KEY;

const logger = new Logger("brian");

export async function fetchTransactionFromPrompt(req: Request, res: Response) {
  const { prompt, address, chainId } = req.body;
  logger.log(`received prompt: ${prompt} and address: ${address}`);
  if (!prompt || !address) {
    return res.status(400).json({ message: "Prompt and address are required" });
  }
  const options = {
    method: "POST",
    url: `${BRIAN_BASE_URL}/transaction`,
    headers: {
      "Content-Type": "application/json",
      "X-Brian-Api-Key": BRIAN_API_KEY,
    },
    data: { prompt, address, chainId },
  };
  try {
    const { data } = await axios.request(options);
    console.log(data);
    return res.status(200).json({
      status: "ok",
      data: data.result,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError) {
      return res.status(error.response?.status || 500).json({
        status: "nok",
        error: {
          message: error.response?.data.error,
        },
      });
    }
    return res.status(500).json({
      status: "nok",
      error: {
        message: "Internal server error",
      },
    });
  }
}
