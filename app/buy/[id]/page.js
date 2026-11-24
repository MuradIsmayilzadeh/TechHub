import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct } from "../../lib/products";
import { sampleProducts } from "../../lib/sample-products";
import OrderForm from "./OrderForm";

export const dynamic = "force-dynamic";

// Used by the static GitHub Pages build.
export function generateStaticParams() {
  return sampleProducts.map((p) => ({ id: p._id }));
}

export default async function BuyPage({ params }) {
  const product = await getProduct(params.id);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href={`/product/${product._id}`} className="text-sm text-zinc-400 hover:text-white">← Məhsula qayıt</Link>
      <h1 className="mt-4 text-3xl font-bold">Sifarişi tamamla</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.3fr]">
        <div className="h-fit rounded-2xl border border-white/10 bg-zinc-900 p-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} className="aspect-[4/3] w-full rounded-xl object-cover" />
          <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
          <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-sm text-zinc-400">
            <span>Çatdırılma</span><span>Pulsuz</span>
          </div>
          <div className="mt-2 flex justify-between text-lg font-bold">
            <span>Cəmi</span><span>{product.price} ₼</span>
          </div>
        </div>
        <OrderForm productName={product.name} />
      </div>
    </div>
  );
}
