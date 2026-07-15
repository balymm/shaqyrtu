import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

const VALID_STATUSES = ["COMING", "COMING_WITH_SPOUSE", "NOT_COMING"];

// POST /api/rsvp — гость подтверждает участие
router.post("/", async (req, res) => {
  try {
    const { fullName, status } = req.body ?? {};

    if (typeof fullName !== "string" || fullName.trim().length < 2) {
      return res.status(400).json({ error: "Аты-жөніңізді толық енгізіңіз" });
    }
    if (!VALID_STATUSES.includes(status)) {
      return res.status(400).json({ error: "Жауап түрін таңдаңыз" });
    }

    const guest = await prisma.guest.create({
      data: {
        fullName: fullName.trim().slice(0, 120),
        status,
      },
    });

    return res.status(201).json({ ok: true, guest });
  } catch (err) {
    console.error("POST /api/rsvp error:", err);
    return res.status(500).json({ error: "Серверде қате шықты, кейінірек қайталап көріңіз" });
  }
});

// GET /api/rsvp — список гостей (для организатора).
// Защищено простым ключом через заголовок x-admin-key, чтобы список не был публичным.
router.get("/", async (req, res) => {
  try {
    const adminKey = req.header("x-admin-key");
    if (!process.env.ADMIN_KEY || adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const guests = await prisma.guest.findMany({
      orderBy: { createdAt: "desc" },
    });

    const summary = {
      total: guests.length,
      coming: guests.filter((g) => g.status === "COMING").length,
      comingWithSpouse: guests.filter((g) => g.status === "COMING_WITH_SPOUSE").length,
      notComing: guests.filter((g) => g.status === "NOT_COMING").length,
    };

    return res.json({ summary, guests });
  } catch (err) {
    console.error("GET /api/rsvp error:", err);
    return res.status(500).json({ error: "Серверде қате шықты" });
  }
});

export default router;
