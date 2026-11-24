import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-2xl hover:shadow-orange-500/10">
      <Link href={`/product/${product._id}`} className="relative block aspect-[4/3] overflow-hidden bg-zinc-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        {product.category && (
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">{product.category}</span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/product/${product._id}`} className="text-lg font-semibold text-white hover:text-orange-400">{product.name}</Link>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-zinc-400">{product.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-bold text-white">{product.price} ₼</span>
          <Link href={`/buy/${product._id}`} className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">Sifariş et</Link>
        </div>
      </div>
    </div>
  );
}
