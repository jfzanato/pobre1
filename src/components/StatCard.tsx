interface StatCardProps {
  label: string;
  value: string;
  unit: string;
  trend: string;
  trendType: 'positive' | 'negative' | 'neutral';
}

export default function StatCard({ label, value, unit, trend, trendType }: StatCardProps) {
  const trendClass = trendType === 'positive'
    ? 'text-green-500 bg-green-50 dark:bg-green-900/20'
    : trendType === 'negative'
      ? 'text-primary bg-primary/10'
      : 'text-slate-500 bg-slate-100 dark:bg-slate-800';

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <span className={`text-xs font-bold px-2 py-1 rounded-lg ${trendClass}`}>
          {trend}
        </span>
      </div>
      <div className="flex items-end gap-2">
        <h3 className="text-3xl font-black text-slate-900 dark:text-white">{value}</h3>
        <p className="text-sm text-slate-400 mb-1">{unit}</p>
      </div>
    </div>
  );
}
