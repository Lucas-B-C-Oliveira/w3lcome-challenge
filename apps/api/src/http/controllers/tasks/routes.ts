import { Router as expressRouter } from "express";
import { getTasks } from "./getTasks";

const router = expressRouter();
router.get("/", getTasks);


export const tasksRoutes = router;