"use client"

import { Bar, BarChart, CartesianGrid, Line, ComposedChart, ReferenceLine, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Panel } from "@/components/dashboard/panel"
import { demandForecast, hourlyHeat } from "@/lib/dashboard-data"

const config = {
  actual: { label: "Actual", color: "var(--chart-1)" },
  predicted: { label: "Predicted", color: "var(--chart-2)" },
} satisfies ChartConfig

function heatColor(load: number) {
  // map 0-100 load to opacity over the cyan accent
  const op = 0.15 + (load / 100) * 0.85
  return `color-mix(in oklch, var(--chart-2) ${Math.round(op * 100)}%, transparent)`
}

export function DemandForecast() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
      <Panel
        title="Demand Forecasting"
        description="Predicted order volume vs. processing capacity (next 7 days)"
        className="xl:col-span-2"
        action={
          <span className="rounded-full bg-primary/15 px-2 py-1 text-[11px] font-medium text-primary">
            Model v3.2 · 94% accuracy
          </span>
        }
      >
        <ChartContainer config={config} className="h-[260px] w-full">
          <ComposedChart data={demandForecast} margin={{ left: -8, right: 8, top: 8 }}>
            <CartesianGrid vertical={false} stroke="var(--border)" />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} className="text-[11px]" />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(v) => `${v / 1000}k`}
              className="text-[11px]"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ReferenceLine
              y={11000}
              stroke="var(--warning)"
              strokeDasharray="5 5"
              label={{ value: "Capacity", position: "insideTopRight", fill: "var(--warning)", fontSize: 11 }}
            />
            <Bar dataKey="actual" fill="var(--chart-1)" radius={[4, 4, 0, 0]} barSize={22} />
            <Line
              dataKey="predicted"
              type="monotone"
              stroke="var(--chart-2)"
              strokeWidth={2.25}
              strokeDasharray="4 4"
              dot={{ r: 3, fill: "var(--chart-2)" }}
            />
          </ComposedChart>
        </ChartContainer>
      </Panel>

      <Panel title="Hourly Load Profile" description="Average facility utilization by hour">
        <div className="flex flex-col gap-2.5">
          {hourlyHeat.map((h) => (
            <div key={h.hour} className="flex items-center gap-3">
              <span className="w-8 text-right text-[11px] tabular-nums text-muted-foreground">
                {h.hour}
              </span>
              <div className="h-5 flex-1 overflow-hidden rounded-md bg-secondary/40">
                <div
                  className="h-full rounded-md"
                  style={{ width: `${h.load}%`, background: heatColor(h.load) }}
                />
              </div>
              <span className="w-9 text-right text-[11px] font-medium tabular-nums text-foreground">
                {h.load}%
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 rounded-lg border border-border bg-secondary/30 p-3 text-[11px] leading-relaxed text-muted-foreground">
          Peak load occurs at <span className="text-foreground">8:00 PM (95%)</span>. Consider shifting
          non-urgent commercial batches to off-peak windows.
        </p>
      </Panel>
    </div>
  )
}
