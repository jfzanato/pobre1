import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <label className="relative w-full max-w-md group">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </span>
              <input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Search inventory..." type="text"/>
            </label>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold leading-none">Admin User</p>
                <p className="text-[10px] text-slate-500">Developer Account</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/20 border-2 border-primary/10 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-ZsrAMiRs9gJWo-fi_Hvm5AzB7SyttYIxCnfwAQzKukPrdSSD5pRxSgJ1b5CD0cJbB3YfrZQmNIdC64bWX3TU_vONCXbB2Pks0cgLnsPVJAg2G_DSEkR50o1llmsNSP0nIh6erQQkwNrnmrEzjXIM-s74CXF698WZJTD-vWpLXnMTtbTmGI23TSrVmoLPSCfqcVDklYvPWNW-uD_AM2LW7yzDuwk03drRRC0TdgIJIcfN_MlDqb_4FP-c8x-g6ETShh9VUNIYB1uJ" alt="Admin Profile" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Hero Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Product Inventory</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and monitor your digital assets across all regions.</p>
            </div>
            <button className="flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold px-6 py-2.5 rounded-xl hover:opacity-90 transition-all">
              <span className="material-symbols-outlined">download</span>
              Export Data
            </button>
          </div>

          {/* Supabase Status */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm gap-4">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined text-[28px]">cloud_done</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Supabase Connection Active</p>
                  <p className="text-sm text-slate-500">Host: aleatorio-pobreza-db.supabase.co • Latency: 12ms</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Sync</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox"/>
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StatCard
              label="Total Products"
              value="1,424"
              unit="Items"
              trend="+12.5%"
              trendType="positive"
            />
            <StatCard
              label="Active Sales"
              value="892"
              unit="Daily"
              trend="-2.4%"
              trendType="negative"
            />
            <StatCard
              label="Monthly Revenue"
              value="$12,450"
              unit="USD"
              trend="+25.8%"
              trendType="positive"
            />
          </div>

          {/* Products Table/List */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h4 className="font-bold">Recent Products</h4>
              <button className="text-sm text-primary font-bold hover:underline">View all</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Product</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Phrase</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Price</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Stats</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {/* Product Row 1 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrzhslE-R0YO0_YuYxCLUeZk0Lhs1cOO2eHaAoKVJdXL2KycwBD_G3IWA2YZ_AMo4YJ70IL6emXrYWURrhJPER4RhaTfi4YtxUVuULSfBrF0FdzlY2ZLgSW834ThMJZS0opaSceg7P_Nn1SeGEVWpcKDdCm2ULMpsaL5m5Su2diVuouJ2cQ97tapML26plmElttqmr0S_1QMeoRfkH_sDzQ7Hsnu3RHdH6PDMbbLkh5sr3Jk3_fVKxjxLD8NfX08uEGrqNq6QD_SZR" alt="Product" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">Nexus Core</p>
                          <p className="text-xs text-slate-500">ID: NX-2034-A</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm italic text-slate-600 dark:text-slate-400">"The future of decentralized poverty..."</p>
                    </td>
                    <td className="px-6 py-4 font-bold text-sm text-primary">
                      $49.00
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-slate-400">visibility</span>
                        <span className="text-sm font-medium">1.2k</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-full text-[10px] font-black uppercase bg-green-100 text-green-600 dark:bg-green-900/30">Active</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  {/* Product Row 2 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACmc7kCbdaJKs7K47CCgmzVDWQZHDO44X-SQoyD_g86sJ-p2xGzNlawHwQZkpsNzu0dKnnoe8C_QBMMN3y0jfswJNP5t4URTBc3YUQo5s6TcfnifcwQu9KhjTmNU_BipbXxT_dSZ8uU00n5HPi4wDA_RdqDVWMVSsz4SEjPDZ188sT2ReBPAy2Lt-C_p8w7Xvx137tcH6lkCCG-nZp0m-LpnwIyuvSgsusvp53Jmt8SpAxoeAgHeVesRgWpqDMCWm_hd_S2LQodmO_" alt="Product" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">Aether Drift</p>
                          <p className="text-xs text-slate-500">ID: AD-9912-B</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm italic text-slate-600 dark:text-slate-400">"Drift away from basic interfaces..."</p>
                    </td>
                    <td className="px-6 py-4 font-bold text-sm text-primary">
                      $29.90
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-slate-400">visibility</span>
                        <span className="text-sm font-medium">842</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-full text-[10px] font-black uppercase bg-green-100 text-green-600 dark:bg-green-900/30">Active</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  {/* Product Row 3 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATwQvUmBAMVNf2otfcKhWN4r37dmCY8_M_fintY91Mfp1YCozwSvUk2nZoxgsaXEaEVZoKadkvNe0tShpZLJou5FH5Sk2u6NqS5iVw4sPtBdsR2GNr2a37EiZOOkdAtPVTIVLHOG-XAA-4bzr7BNkf-fPQJX52EZFLrZYJgpLrWoWxfGCXuul3svj6jTtIihvmwiU3JBPFfIPszXncj5t7UcQ0yMi31GJtsAYhYjCwQs3wFUmsAHHn3_KNCaZ4Aap0d1i4SRc-bQPO" alt="Product" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">Pobreza Ultra</p>
                          <p className="text-xs text-slate-500">ID: PU-0010-C</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm italic text-slate-600 dark:text-slate-400">"Luxury for everyone, or just for the brand."</p>
                    </td>
                    <td className="px-6 py-4 font-bold text-sm text-primary">
                      $149.00
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-slate-400">visibility</span>
                        <span className="text-sm font-medium">2.5k</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-full text-[10px] font-black uppercase bg-slate-100 text-slate-400 dark:bg-slate-800">Draft</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <p className="text-sm text-slate-500 font-medium">Showing 3 of 1,424 products</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white transition-all disabled:opacity-50" disabled>Previous</button>
                <button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white transition-all">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
