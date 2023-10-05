import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

export const app = express();
app.use(cors({ origin: true }))
app.use(express.json());