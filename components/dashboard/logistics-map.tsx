"use client"

import { Panel } from "@/components/dashboard/panel"
import { logisticsHubs } from "@/lib/dashboard-data"

export function LogisticsMap() {
  return (
    <Panel
      title="Analisis Logistik"
      description="Distribusi pesanan aktif dan performa operasional di berbagai kota"
      className="xl:col-span-2"
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {logisticsHubs.map((hub) => (
          <div
            key={hub.id}
            className="rounded-xl border border-border bg-secondary/20 p-4 transition-all hover:border-primary/30 hover:bg-secondary/30"
          >
            <p className="text-sm text-muted-foreground">
              {hub.city}
            </p>

            <p className="mt-2 text-2xl font-bold text-foreground">
              {hub.volume.toLocaleString()}
            </p>

            <p className="text-xs text-muted-foreground">
              Pesanan Aktif
            </p>

            <div className="mt-3">
              <span
                className={`rounded-full px-2 py-1 text-xs ${
                  hub.status === "high"
                    ? "bg-green-500/10 text-green-400"
                    : hub.status === "medium"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {hub.status === "high"
                  ? "Tinggi"
                  : hub.status === "medium"
                  ? "Sedang"
                  : "Rendah"}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Kurir Aktif", value: "128" },
          { label: "Rata-rata Antar", value: "32 menit" },
          { label: "Kurir Online", value: "96 / 110" },
          { label: "Waktu Idle", value: "4.1%" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border bg-secondary/30 p-3"
          >
            <p className="text-[11px] text-muted-foreground">
              {stat.label}
            </p>

            <p className="mt-1 text-lg font-semibold tracking-tight text-foreground">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </Panel>
  )
}