import { Router as expressRouter } from "express";
import { getTasks } from "./getTasks";
import { createTask } from "./createTask";

const router = expressRouter();
router.get("/", getTasks);
router.post("/", createTask);


export const tasksRoutes = router;