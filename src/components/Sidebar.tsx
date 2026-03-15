export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined">dashboard_customize</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm font-bold leading-tight">Aleatório da Pobreza</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">SaaS Admin Panel</p>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl bg-primary/10 text-primary transition-colors" href="#">
          <span className="material-symbols-outlined text-[20px]">grid_view</span>
          Dashboard
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors" href="#">
          <span className="material-symbols-outlined text-[20px]">inventory_2</span>
          Products
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors" href="#">
          <span className="material-symbols-outlined text-[20px]">analytics</span>
          Analytics
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors" href="#">
          <span className="material-symbols-outlined text-[20px]">database</span>
          Database
        </a>
        <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors" href="#">
          <span className="material-symbols-outlined text-[20px]">settings</span>
          Settings
        </a>
      </nav>
      <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800">
        <button className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm py-3 rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
          Add New Product
        </button>
      </div>
    </aside>
  );
}
