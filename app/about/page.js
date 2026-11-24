import Link from "next/link";

export const metadata = { title: "Haqqımızda — TechHub" };

const items = [
  ["Orijinal məhsullar", "Bütün məhsullar rəsmi distribyutorlardan gəlir və zəmanətlidir."],
  ["Sürətli çatdırılma", "Bakı daxilində 24 saat ərzində, regionlara 2–3 gün ərzində çatdırırıq."],
  ["Peşəkar dəstək", "Satışdan sonra da sizinləyik: quraşdırma, məsləhət və servis."],
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">Haqqımızda</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Texnologiyanı hər kəs üçün əlçatan edirik.</h1>
      <p className="mt-5 max-w-2xl text-lg text-zinc-400">TechHub Bakıda yerləşən onlayn texnologiya mağazasıdır. Məqsədimiz ən son cihazları sərfəli qiymətə və etibarlı xidmətlə təqdim etməkdir.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{text}</p>
          </div>
        ))}
      </div>
      <Link href="/#products" className="btn-primary mt-12">Alış-verişə başla</Link>
    </div>
  );
}
