export function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-800 bg-slate-900 p-6">
      <h1 className="text-xl font-bold text-cyan-400">
        SmartLaundry
      </h1>

      <p className="text-sm text-slate-400 mt-1">
        Intelligence Platform
      </p>

      <nav className="mt-8 space-y-3">
        <div className="text-slate-300">Overview</div>
        <div className="text-slate-500">Orders Analytics</div>
        <div className="text-slate-500">Revenue Analytics</div>
        <div className="text-slate-500">Customer Intelligence</div>
        <div className="text-slate-500">Forecast Center</div>
        <div className="text-slate-500">Driver Performance</div>
        <div className="text-slate-500">Operations Intelligence</div>
      </nav>
    </aside>
  );
}