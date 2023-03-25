import express from "express";
import {
  update,
  getUser,
  follow,
  unfollow
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verifyToken, update);

router.get("/find/:id", getUser);

router.put("/sub/:id", verifyToken, follow);

router.put("/unsub/:id", verifyToken, unfollow);

export default router;