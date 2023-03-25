import express from 'express';
import {signup, signin, updatePass} from "../controllers/auth.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.put("/pass/:id", verifyToken, updatePass);

export default router; 