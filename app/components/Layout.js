import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-white/10 py-8 text-sm text-zinc-500">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-4">
          <span>© {new Date().getFullYear()} TechHub. Bütün hüquqlar qorunur.</span>
          <span>Bakı, Azərbaycan</span>
        </div>
      </footer>
    </div>
  );
}
