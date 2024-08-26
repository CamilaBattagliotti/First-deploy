// app => Definicion de los mw grales, el endpoint del estado y la conexion a los routers a traves de index router

import express from "express";
import { json } from "express";
import indexRouter from "./routes";

const app = express();
app.use(json());
app.use("/status", (req, res) =>
  res.json({ environment: process.env.ENVIRONMENT })
);
app.use("/", indexRouter);

export default app;
