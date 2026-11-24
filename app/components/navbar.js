import Link from "next/link";

const navLinks = [
  { text: "Məhsullar", href: "/#products" },
  { text: "Haqqımızda", href: "/about" },
  { text: "Əlaqə", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-white">
          Tech<span className="text-orange-500">Hub</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white">
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
