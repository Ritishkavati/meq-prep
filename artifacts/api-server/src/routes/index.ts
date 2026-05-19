import { Router, type IRouter } from "express";
import healthRouter from "./health";
import aiFeedbackRouter from "./aiFeedback";

const router: IRouter = Router();

router.use(healthRouter);
router.use(aiFeedbackRouter);

export default router;
