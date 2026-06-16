"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Panel } from "@/components/dashboard/panel"
import { partners } from "@/lib/dashboard-data"

export function PartnerAnalytics() {
  return (
    <Panel
      title="Analisis Mitra Laundry"
      description="Kapasitas operasional, SLA, dan kontribusi pendapatan mitra"
      className="xl:col-span-3"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {partners.map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-border bg-secondary/20 p-4 transition-all hover:bg-secondary/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">
                  {p.name}
                </h3>

                <p className="text-xs text-muted-foreground">
                  {p.city}
                </p>
              </div>

              <div className="flex items-center gap-1">
                {p.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-400" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-400" />
                )}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-muted-foreground">
                    Kapasitas
                  </span>

                  <span className="font-medium">
                    {p.capacity}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{
                      width: `${p.capacity}%`,
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  SLA
                </span>

                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    p.sla >= 96
                      ? "bg-green-500/10 text-green-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {p.sla}%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Pendapatan
                </span>

                <span className="font-semibold text-foreground">
                  {p.revenue}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}