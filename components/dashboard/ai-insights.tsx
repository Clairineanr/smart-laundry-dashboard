"use client"

import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
} from "lucide-react"
import { aiInsights } from "@/lib/dashboard-data"

const config = {
  opportunity: {
    icon: TrendingUp,
    label: "Peluang",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  risk: {
    icon: AlertTriangle,
    label: "Risiko",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
  info: {
    icon: Lightbulb,
    label: "Rekomendasi",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
} as const

export function AiInsights() {
  return (
    <div className="glass flex h-full flex-col rounded-xl p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>

          <div>
            <h2 className="text-sm font-semibold">
              Insight AI
            </h2>

            <p className="text-xs text-muted-foreground">
              Analisis bisnis real-time
            </p>
          </div>
        </div>

        <div className="rounded-full bg-green-500/10 px-2 py-1 text-[11px] text-green-400">
          Aktif
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4">
        {aiInsights.map((insight) => {
          const item = config[insight.severity]
          const Icon = item.icon

          return (
            <div
              key={insight.id}
              className={`rounded-xl border p-4 transition-all hover:scale-[1.02] ${item.border} ${item.bg}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${item.color}`} />

                  <span className={`text-xs font-medium ${item.color}`}>
                    {item.label}
                  </span>
                </div>

                <span className="text-xs text-muted-foreground">
                  {insight.confidence}%
                </span>
              </div>

              <h3 className="mt-3 text-sm font-semibold text-foreground">
                {insight.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {insight.body}
              </p>

              <div className="mt-4">
                <div className="mb-1 flex justify-between text-[10px] text-muted-foreground">
                  <span>Confidence</span>
                  <span>{insight.confidence}%</span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{
                      width: `${insight.confidence}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <button className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/30 py-2 text-xs font-medium transition-colors hover:bg-secondary/50">
        Lihat Semua Insight
        <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  )
}