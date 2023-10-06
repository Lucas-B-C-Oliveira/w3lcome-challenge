import express from "express";
import cors from "cors";
import { tasksRoutes } from "./http/controllers/tasks/routes";

export const app = express();
app.use(cors({ origin: true }))
app.use(express.json());

// Routes

// ### Tasks
app.use("/tasks", tasksRoutes)

