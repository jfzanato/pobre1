import ProductCard from '@/components/ProductCard';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="sticky top-0 z-10 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 border-b border-primary/10">
        <div className="w-10">
          <span className="material-symbols-outlined text-primary">info</span>
        </div>
        <h1 className="text-lg font-extrabold tracking-tight text-primary uppercase">
          Aleatório da Pobreza
        </h1>
        <div className="w-10 flex justify-end">
          <span className="material-symbols-outlined text-slate-400">share</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6 pt-4 pb-32">
        <ProductCard
          title="Relógio de Parede que Gira ao Contrário"
          phrase="Onde a utilidade é um mistério"
          price="R$ 49,90"
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBMplh58sixbdMGt5S_BgjVXpPnQ6WeH4uHcHphKdEsSLVwkIw27hSTy4hoSpkkcqJAcuYlBAop6nK4PaCdmuPHYlaOQy1o_PpDi2qmOzAJ_0plrN-hZKrYDVh6uCM9bAa-UOQyPfBsxWDeC8CxcWSfm6ohHKRG2ljxra6FH_c7F3FEnVmpAhxzUVSjDcGbhx6DGtG7_a6d36SoB8ZpVW2Dmx3Wfs_kuOVAaOc8IY_8e0B8Z6PFxit3nsPE9KT5jP7jUxCZaFoSm9xE"
          isNew={true}
        />

        {/* Footer Info */}
        <footer className="mt-8 pb-4 text-center">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-tighter">
            Powered by <span className="text-primary font-bold">Supabase</span>
          </p>
        </footer>
      </main>

      <BottomNav />
    </div>
  );
}
