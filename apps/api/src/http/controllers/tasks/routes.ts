import { Router as expressRouter } from "express";
import { getTasks } from "./getTasks";
import { createTask } from "./createTask";
import { updateTask } from "./updateTask";
import { deleteTask } from "./deleteTask";

const router = expressRouter();
router.get("/", getTasks);
router.post("/", createTask);
router.patch("/", updateTask);
router.delete("/", deleteTask);


export const tasksRoutes = router;