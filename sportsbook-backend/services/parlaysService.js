import { db } from "../data/db.js";

export function startParlay(data) {
  const id = db.parlays.length + 1;

  const newParlay = {
    id,
    legs: [],
    ...data
  };

  db.parlays.push(newParlay);
  return newParlay;
}

export function addLegToParlay(id, leg) {
  const parlay = db.parlays.find(p => p.id === Number(id));
  if (!parlay) return null;

  parlay.legs.push(leg);
  return parlay;
}

export function getAllParlays() {
  return db.parlays;
}
