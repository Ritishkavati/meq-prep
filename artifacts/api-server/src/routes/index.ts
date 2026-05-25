import { Router, type IRouter } from "express";
import healthRouter from "./health";
import aiFeedbackRouter from "./aiFeedback";
import statsRouter from "./stats";
import meqEvaluateRouter from "./meqEvaluate";
import adminRouter from "./admin";

const router: IRouter = Router();

router.use(healthRouter);
router.use(aiFeedbackRouter);
router.use(statsRouter);
router.use(meqEvaluateRouter);
router.use(adminRouter);

export default router;
