export function Topbar() {
  return (
    <header className="h-20 border-b border-slate-800 flex items-center justify-between px-6">
      <div>
        <h2 className="text-xl font-semibold">
          Executive Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search..."
          className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2"
        />

        <div className="w-10 h-10 rounded-full bg-cyan-500" />
      </div>
    </header>
  );
}