import { API_BASE_URL } from "../eventConfig.js";

export async function submitRsvp({ fullName, status }) {
  const res = await fetch(`${API_BASE_URL}/api/rsvp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, status }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.error || "Жауапты жіберу кезінде қате шықты");
  }

  return data;
}
