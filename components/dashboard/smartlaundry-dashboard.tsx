"use client"

import { useState } from "react"
import { TopBar } from "@/components/dashboard/top-bar"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { AiInsights } from "@/components/dashboard/ai-insights"
import { RevenueAnalytics } from "@/components/dashboard/revenue-analytics"
import { CustomerIntelligence } from "@/components/dashboard/customer-intelligence"
import { DemandForecast } from "@/components/dashboard/demand-forecast"
import { LogisticsMap } from "@/components/dashboard/logistics-map"
import { DriverLeaderboard } from "@/components/dashboard/driver-leaderboard"
import { PartnerAnalytics } from "@/components/dashboard/partner-analytics"

export default function SmartLaundryDashboard() {
  const [active, setActive] = useState("overview")
  const [scope, setScope] = useState("All Regions")
  const [range, setRange] = useState("Last 30 days")

  return (
    <div className="flex min-h-screen bg-background text-foreground">

      <div className="relative flex min-w-0 flex-1 flex-col">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(900px 500px at 78% -8%, color-mix(in oklch, var(--primary) 16%, transparent), transparent 70%)",
          }}
        />

        <TopBar
          scope={scope}
          setScope={setScope}
          range={range}
          setRange={setRange}
        />

        <main className="flex-1 space-y-5 p-4 md:p-6">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-balance text-xl font-semibold tracking-tight md:text-2xl">
                Dashboard SmartLaundry
              </h1>

              <span className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-[11px] text-muted-foreground">
                {scope} · {range}
              </span>
            </div>

            <p className="text-sm text-muted-foreground">
              Monitoring pendapatan, pelanggan, permintaan, pengiriman, dan
              performa mitra laundry secara real-time.
            </p>
          </div>

          {/* HERO CARDS */}
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-5">
              <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-blue-500/10 blur-3xl" />

              <p className="text-xs uppercase tracking-wider text-slate-400">
                Weekly Growth
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">+18%</h3>

              <p className="mt-2 text-sm text-slate-400">
                Orders meningkat dibanding minggu lalu
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-5">
              <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-orange-500/10 blur-3xl" />

              <p className="text-xs uppercase tracking-wider text-slate-400">
                Peak Demand
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">18–20</h3>

              <p className="mt-2 text-sm text-slate-400">
                Jam tersibuk setiap hari
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent p-5">
              <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-green-500/10 blur-3xl" />

              <p className="text-xs uppercase tracking-wider text-slate-400">
                Express Service
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">42%</h3>

              <p className="mt-2 text-sm text-slate-400">
                Kontribusi terhadap total revenue
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-transparent p-5">
              <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-pink-500/10 blur-3xl" />

              <p className="text-xs uppercase tracking-wider text-slate-400">
                Loyal Customers
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">64%</h3>

              <p className="mt-2 text-sm text-slate-400">
                Revenue berasal dari pelanggan loyal
              </p>
            </div>
          </div>

          <section id="overview">
            <KpiCards />
          </section>

          <section id="revenue">
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
              <div className="xl:col-span-3">
                <RevenueAnalytics />
              </div>

              <div className="xl:col-span-2">
                <AiInsights />
              </div>
            </div>
          </section>

          <section id="customer">
            <CustomerIntelligence />
          </section>

          <section id="forecast">
            <DemandForecast />
          </section>

          <section id="drivers">
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
              <LogisticsMap />
              <DriverLeaderboard />
            </div>
          </section>

          <section id="partners">
            <PartnerAnalytics />
          </section>

          <footer className="flex flex-col items-center justify-between gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row">
            <p>
              SmartLaundry Intelligence Platform — confidential operating data.
            </p>

            <p>Updated 2 min ago · All systems operational</p>
          </footer>
        </main>
      </div>
    </div>
  )
}