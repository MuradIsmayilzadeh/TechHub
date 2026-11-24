import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct } from "../../lib/products";

export const dynamic = "force-dynamic";

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link href="/#products" className="text-sm text-zinc-400 hover:text-white">← Bütün məhsullar</Link>
      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} className="aspect-square h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          {product.category && <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">{product.category}</p>}
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight">{product.name}</h1>
          <p className="mt-4 text-lg text-zinc-400">{product.description}</p>
          <p className="mt-8 text-4xl font-bold">{product.price} ₼</p>
          <ul className="mt-6 space-y-2 text-sm text-zinc-400">
            <li>✓ 12 ay rəsmi zəmanət</li>
            <li>✓ Bakı daxili pulsuz çatdırılma</li>
            <li>✓ 14 gün ərzində geri qaytarma</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/buy/${product._id}`} className="btn-primary">Sifariş et</Link>
            <Link href="/contact" className="btn-ghost">Sual ver</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
