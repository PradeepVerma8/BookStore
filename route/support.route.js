import express from "express";
import { support } from "../Controller/support.contoller.js";
const router = express.Router();

router.post("/support",support);
export default router;
