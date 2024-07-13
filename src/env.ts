import z from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  HOSTNAME: z.string().trim().default("127.0.0.1"),
  PORT: z
    .string()
    .trim()
    .default("8001")
    .transform((v) => parseInt(v)),
  BRIAN_API_KEY: z.string().trim().min(1),
  NODE_ENV: z.string().default("development"),
  DATABASE_URL: z.string().trim().min(1),
});
const { data, success, error } = envSchema.safeParse(process.env);

if (!success) {
  console.error(
    `An error has occurred while parsing environment variables:${error.errors.map(
      (e) => ` ${e.path.join(".")} is ${e.message}`
    )}`
  );
  process.exit(1);
}

export type EnvSchemaType = z.infer<typeof envSchema>;
export const env = data;
