import express from "express";
import cors from "cors";
import rsvpRouter from "./routes/rsvp.js";

const app = express();

const allowedOrigins = (process.env.CORS_ORIGIN ?? "*")
  .split(",")
  .map((s) => s.trim());

app.use(
  cors({
    origin: allowedOrigins.includes("*") ? true : allowedOrigins,
  })
);
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ ok: true, service: "mereitoi-backend" });
});

app.use("/api/rsvp", rsvpRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`mereitoi-backend listening on port ${PORT}`);
});
