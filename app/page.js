"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { sampleProducts } from "./lib/sample-products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Hamısı");

  useEffect(() => {
    // Static builds (GitHub Pages) have no API: show the built-in catalogue.
    if (process.env.NEXT_PUBLIC_STATIC_EXPORT) {
      setProducts(sampleProducts);
      setLoading(false);
      return;
    }
    fetch("/api/posts")
      .then((r) => (r.ok ? r.json() : { products: [] }))
      .then((d) => setProducts(d.products || []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => ["Hamısı", ...new Set(products.map((p) => p.category).filter(Boolean))], [products]);
  const visible = products.filter(
    (p) => (category === "Hamısı" || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">Yeni kolleksiya</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Ən son texnologiya, <span className="text-orange-500">ən yaxşı qiymətə</span>.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-400">Telefon, noutbuk, qulaqlıq və aksesuarlar. Rəsmi zəmanət və Bakı daxili pulsuz çatdırılma.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="btn-primary">Məhsullara bax</a>
            <Link href="/contact" className="btn-ghost">Bizimlə əlaqə</Link>
          </div>
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 text-sm text-zinc-400">
            <div><strong className="block text-2xl text-white">24 saat</strong>Çatdırılma</div>
            <div><strong className="block text-2xl text-white">12 ay</strong>Rəsmi zəmanət</div>
            <div><strong className="block text-2xl text-white">0%</strong>Hissə-hissə ödəniş</div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-24">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold">Məhsullar</h2>
          <input className="field sm:max-w-xs" placeholder="Məhsul axtar..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-4 py-2 text-sm transition ${category === c ? "bg-orange-500 text-white" : "border border-white/10 text-zinc-300 hover:bg-white/5"}`}>
              {c}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => <div key={i} className="h-80 animate-pulse rounded-2xl bg-zinc-900" />)}
          </div>
        ) : visible.length === 0 ? (
          <p className="rounded-2xl border border-white/10 p-10 text-center text-zinc-400">Heç bir məhsul tapılmadı.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((product) => <ProductCard key={product._id} product={product} />)}
          </div>
        )}
      </section>
    </>
  );
}
