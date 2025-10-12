"use client";
import { useState } from "react";

export default function Webinar() {
  const [status, setStatus] = useState<string|null>(null);
  const [error, setError] = useState<string|null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null); setError(null);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const r = await fetch("/api/register", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(payload),
      });
      const json = await r.json();
      if (!r.ok) throw new Error(json?.message || "Request failed");
      setStatus(json.message || "OK");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err:any) {
      setError(err.message);
    }
  }

  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Register for the Webinar</h1>
      <form onSubmit={submit} className="space-y-3">
        <input name="name" placeholder="Your name" className="w-full border rounded px-3 py-2" required/>
        <input name="email" type="email" placeholder="Email" className="w-full border rounded px-3 py-2" required/>
        <button className="w-full bg-black text-white rounded px-3 py-2">Register</button>
      </form>
      {status && <p className="mt-3 text-green-600">{status}</p>}
      {error && <p className="mt-3 text-red-600">{error}</p>}
    </main>
  );
}
