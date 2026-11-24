"use client";
import { useState } from "react";
import Link from "next/link";

export default function OrderForm({ productName }) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="rounded-2xl border border-orange-500/40 bg-orange-500/10 p-8">
        <h2 className="text-2xl font-bold">Təşəkkür edirik!</h2>
        <p className="mt-2 text-zinc-300">“{productName}” üçün sifarişiniz qəbul edildi. Operatorumuz qısa zamanda sizinlə əlaqə saxlayacaq.</p>
        <Link href="/" className="btn-primary mt-6">Ana səhifəyə qayıt</Link>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="field" placeholder="Ad" required />
        <input className="field" placeholder="Soyad" required />
      </div>
      <input className="field" type="tel" placeholder="Telefon (+994 ...)" required />
      <input className="field" placeholder="Ünvan" required />
      <select className="field" defaultValue="cash">
        <option value="cash">Qapıda nağd ödəniş</option>
        <option value="card">Qapıda kartla ödəniş</option>
        <option value="installment">Hissə-hissə ödəniş</option>
      </select>
      <textarea className="field" rows={3} placeholder="Qeyd (istəyə bağlı)" />
      <button type="submit" className="btn-primary w-full">Sifarişi təsdiqlə</button>
    </form>
  );
}
