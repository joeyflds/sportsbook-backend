import express from "express";
import { startParlay, addLegToParlay, getAllParlays } from "../services/parlaysService.js";

const router = express.Router();

router.post("/start", (req, res) => {
  const parlay = startParlay(req.body);
  res.json({
    message: "Parlay started successfully",
    parlay
  });
});

router.post("/:id/add-leg", (req, res) => {
  const updated = addLegToParlay(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({ message: "Parlay not found" });
  }

  res.json({
    message: "Leg added successfully",
    parlay: updated
  });
});

router.get("/", (req, res) => {
  const parlays = getAllParlays();
  res.json({
    parlays,
    message: "All parlays returned successfully"
  });
});

export default router;
