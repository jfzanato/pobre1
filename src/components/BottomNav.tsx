import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-primary/10 px-6 pb-8 pt-4 flex justify-around items-center z-20">
      <Link className="flex flex-col items-center gap-1 text-primary" href="/">
        <div className="relative">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>shuffle</span>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-tighter">Aleatório</span>
      </Link>
      <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700"></div>
      <Link className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors" href="/ranking">
        <span className="material-symbols-outlined text-2xl">trophy</span>
        <span className="text-[10px] font-bold uppercase tracking-tighter">Ranking</span>
      </Link>
    </nav>
  );
}
