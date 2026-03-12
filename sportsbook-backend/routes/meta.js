import express from "express";
import { getMeta } from "../services/metaService.js";

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Meta endpoint is working"
  });
});

router.get("/", (req, res) => {
  const meta = getMeta();
  res.json({
    meta,
    message: "Meta data returned successfully"
  });
});

export default router;
