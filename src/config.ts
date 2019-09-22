import dotenv from "dotenv";
import PATH from "path";

const root: Function = PATH.join.bind(this, __dirname, "../");
dotenv.config({path: root(".env")});

export const isProduction: boolean = process.env.NODE_ENV === "production";
export const isDevelopment: boolean = !isProduction;
export const url: string | undefined = process.env.URL_DB;
export const port: number | undefined = Number(process.env.PORT);