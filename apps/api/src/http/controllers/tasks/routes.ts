import { Router as expressRouter } from "express";
import { getTasks } from "./getTasks";
import { createTask } from "./createTask";
import { updateTask } from "./updateTask";

const router = expressRouter();
router.get("/", getTasks);
router.post("/", createTask);
router.patch("/", updateTask);


export const tasksRoutes = router;