"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">Əlaqə</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">Sualınız var?</h1>
        <p className="mt-4 text-lg text-zinc-400">Bizə yazın, komandamız ən qısa zamanda cavab verəcək.</p>
        <ul className="mt-8 space-y-3 text-zinc-300">
          <li>📍 Bakı, Nizami küçəsi</li>
          <li>📞 +994 12 000 00 00</li>
          <li>✉️ info@techhub.az</li>
          <li>🕘 Hər gün 10:00 – 20:00</li>
        </ul>
      </div>
      {sent ? (
        <div className="h-fit rounded-2xl border border-orange-500/40 bg-orange-500/10 p-8">
          <h2 className="text-2xl font-bold">Mesajınız göndərildi</h2>
          <p className="mt-2 text-zinc-300">Təşəkkür edirik! Tezliklə sizinlə əlaqə saxlayacağıq.</p>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900 p-6">
          <input className="field" placeholder="Adınız" required />
          <input className="field" type="email" placeholder="E-poçt" required />
          <textarea className="field" rows={5} placeholder="Mesajınız" required />
          <button type="submit" className="btn-primary w-full">Göndər</button>
        </form>
      )}
    </div>
  );
}
