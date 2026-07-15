import { API_BASE_URL } from "../eventConfig.js";

export async function submitRsvp({ fullName, status }) {
  const res = await fetch(`${API_BASE_URL}/api/rsvp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, status }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const err = new Error(data?.error || "request_failed");
    err.code = data?.code || "SERVER_ERROR";
    throw err;
  }

  return data;
}