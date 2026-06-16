"use client"

import { Area, AreaChart, ResponsiveContainer } from "recharts"
import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  ShoppingBag,
  Wallet,
  Truck,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { kpis } from "@/lib/dashboard-data"

const iconMap = {
  revenue: DollarSign,
  orders: ShoppingBag,
  aov: Wallet,
  sla: Truck,
}

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi) => {
        const positive = kpi.trend === "up"
        const data = kpi.spark.map((v, i) => ({ i, v }))
        const color = positive ? "var(--chart-3)" : "var(--destructive)"
        const Icon = iconMap[kpi.id as keyof typeof iconMap]

        return (
          <div
            key={kpi.id}
            className="glass relative overflow-hidden rounded-xl p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>

                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {kpi.label}
                  </p>
                </div>

                <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                  {kpi.value}
                </p>
              </div>

              <span
                className={cn(
                  "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
                  positive
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                )}
              >
                {positive ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : (
                  <ArrowDownRight className="h-3 w-3" />
                )}

                {Math.abs(kpi.delta)}%
              </span>
            </div>

            <div className="mt-3 flex items-end justify-between gap-3">
              <p className="text-xs text-muted-foreground">
                {kpi.sub}
              </p>

              <div className="h-10 w-24">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{
                      top: 2,
                      bottom: 2,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id={`spark-${kpi.id}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor={color}
                          stopOpacity={0.5}
                        />
                        <stop
                          offset="100%"
                          stopColor={color}
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke={color}
                      strokeWidth={1.75}
                      fill={`url(#spark-${kpi.id})`}
                      isAnimationActive={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}