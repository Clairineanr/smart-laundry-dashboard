"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Panel } from "@/components/dashboard/panel"
import { revenueSeries, revenueByService } from "@/lib/dashboard-data"

const revenueConfig = {
  revenue: { label: "Pendapatan", color: "#38bdf8" },
  forecast: { label: "Prediksi", color: "#22d3ee" },
  cost: { label: "Biaya", color: "#ef4444" },
} satisfies ChartConfig

export function RevenueAnalytics() {
  return (
    <Panel
      title="Analisis Pendapatan"
      description="Perbandingan pendapatan, prediksi AI, dan biaya operasional bulanan"
      action={
        <div className="hidden items-center gap-3 text-xs sm:flex">
          <Legend color="#38bdf8" label="Pendapatan" />
          <Legend color="#22d3ee" label="Prediksi" />
          <Legend color="#ef4444" label="Biaya" />
        </div>
      }
    >
      <ChartContainer config={revenueConfig} className="h-[280px] w-full">
        <AreaChart data={revenueSeries} margin={{ left: -16, right: 8, top: 8 }}>
          <defs>
            <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.55} />
              <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="fillCost" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="var(--border)" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            className="text-[11px]"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(v) => `Rp ${v} Jt`}
            className="text-[11px]"
          />
          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
          <Area dataKey="cost" type="monotone" stroke="#ef4444" fill="url(#fillCost)" strokeWidth={1.5} />
          <Area
            dataKey="forecast"
            type="monotone"
            stroke="#22d3ee"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            fill="none"
          />
          <Area dataKey="revenue" type="monotone" stroke="#38bdf8" strokeWidth={2.25} fill="url(#fillRevenue)" />
        </AreaChart>
      </ChartContainer>

      <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4 sm:grid-cols-4">
        {revenueByService.map((s) => (
          <div key={s.name} className="flex flex-col gap-1">
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="h-2 w-2 rounded-sm" style={{ background: s.fill }} />
              {s.name}
            </span>
            <span className="text-sm font-semibold text-foreground">{s.value}%</span>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-muted-foreground">
      <span className="h-2 w-2 rounded-full" style={{ background: color }} />
      {label}
    </span>
  )
}
