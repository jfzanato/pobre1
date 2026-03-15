interface ProductCardProps {
  title: string;
  phrase: string;
  price: string;
  imageUrl: string;
  isNew?: boolean;
}

export default function ProductCard({ title, phrase, price, imageUrl, isNew }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl shadow-primary/5 overflow-hidden border border-primary/5">
      <div className="relative aspect-square w-full bg-slate-100 dark:bg-slate-900">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></div>
        {isNew && (
          <div className="absolute top-4 right-4 bg-primary text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg">
            NOVO
          </div>
        )}
      </div>
      <div className="p-6 text-center">
        <p className="text-primary font-medium text-sm mb-1 uppercase tracking-widest italic">
          "{phrase}"
        </p>
        <h2 className="text-2xl font-bold leading-tight mb-2">
          {title}
        </h2>
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-3xl font-black text-primary">{price}</span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            className="flex items-center justify-center w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform"
            href="#"
          >
            <span className="material-symbols-outlined mr-2">shopping_cart</span>
            COMPRAR AGORA
          </a>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
            <button className="flex flex-col items-center justify-center py-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border-2 border-transparent hover:border-green-500 group transition-all">
              <span className="material-symbols-outlined text-green-500 text-3xl mb-1 group-hover:scale-110 transition-transform">thumb_up</span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">ÚTIL</span>
            </button>
            <button className="flex flex-col items-center justify-center py-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border-2 border-transparent hover:border-red-500 group transition-all">
              <span className="material-symbols-outlined text-red-500 text-3xl mb-1 group-hover:scale-110 transition-transform">thumb_down</span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">INÚTIL</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
