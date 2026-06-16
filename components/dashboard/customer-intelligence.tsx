"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Panel } from "@/components/dashboard/panel"
import { customerSegments, cohortRetention } from "@/lib/dashboard-data"

const cohortConfig = {
  new: {
    label: "Pelanggan Baru",
    color: "#ef4444",
  },
  returning: {
    label: "Pelanggan Reguler",
    color: "#3b82f6",
  },
  sub: {
    label: "Berlangganan",
    color: "#10b981",
  },
} satisfies ChartConfig

export function CustomerIntelligence() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
      {/* LEFT PANEL */}
      <Panel
        title="Analisis Pelanggan"
        description="Segmentasi pelanggan, retensi, dan nilai pelanggan"
        className="xl:col-span-1"
      >
        <div className="mb-4 grid grid-cols-1 gap-3">
          <div className="rounded-lg border border-border bg-secondary/20 p-3">
            <p className="text-xs text-muted-foreground">
              Retensi Rata-rata
            </p>
            <p className="mt-1 text-xl font-bold text-foreground">
              82%
            </p>
          </div>

          <div className="rounded-lg border border-border bg-secondary/20 p-3">
            <p className="text-xs text-muted-foreground">
              Pelanggan Loyal
            </p>
            <p className="mt-1 text-xl font-bold text-foreground">
              64%
            </p>
          </div>

          <div className="rounded-lg border border-border bg-secondary/20 p-3">
            <p className="text-xs text-muted-foreground">
              Nilai Pelanggan
            </p>
            <p className="mt-1 text-xl font-bold text-foreground">
              Rp 348 rb
            </p>
          </div>
        </div>

        <ul className="flex flex-col gap-3">
          {customerSegments.map((s) => (
            <li
              key={s.segment}
              className="rounded-lg border border-border bg-secondary/20 p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  {s.segment}
                </span>

                <span className="text-xs text-muted-foreground">
                  {s.count.toLocaleString()} pelanggan
                </span>
              </div>

              <div className="mt-2.5 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${s.retention}%` }}
                  />
                </div>

                <span className="w-10 text-right text-xs font-medium text-foreground">
                  {s.retention}%
                </span>
              </div>

              <p className="mt-1.5 text-[11px] text-muted-foreground">
                Nilai rata-rata Rp {(s.value * 10000).toLocaleString("id-ID")}
              </p>
            </li>
          ))}
        </ul>
      </Panel>

      {/* RIGHT PANEL */}
      <Panel
        title="Retensi Pelanggan"
        description="Perbandingan tingkat retensi pelanggan dari waktu ke waktu"
        className="xl:col-span-2"
        action={
          <div className="flex items-center gap-3 text-xs">
            <Legend color="#10b981" label="Berlangganan" />
            <Legend color="#3b82f6" label="Reguler" />
            <Legend color="#ef4444" label="Baru" />
          </div>
        }
      >
        <ChartContainer config={cohortConfig} className="h-[260px] w-full">
          <LineChart
            data={cohortRetention}
            margin={{
              left: -16,
              right: 8,
              top: 8,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="var(--border)"
            />

            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-[11px]"
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(v) => `${v}%`}
              className="text-[11px]"
            />

            <ChartTooltip
              content={<ChartTooltipContent indicator="dot" />}
            />

            <Line
              dataKey="sub"
              type="monotone"
              stroke="#10b981"
              strokeWidth={3}
              dot={false}
            />

            <Line
              dataKey="returning"
              type="monotone"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={false}
            />

            <Line
              dataKey="new"
              type="monotone"
              stroke="#ef4444"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ChartContainer>

        <div className="mt-4 rounded-lg border border-border bg-secondary/20 p-4">
          <p className="text-sm font-medium text-foreground">
            Insight Pelanggan
          </p>

          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Pelanggan berlangganan memiliki retensi tertinggi sebesar
            86% hingga minggu ke-8. Pelanggan baru mengalami
            penurunan tercepat sehingga program loyalitas dan promo
            repeat-order berpotensi meningkatkan retensi hingga 15%.
          </p>
        </div>
      </Panel>
    </div>
  )
}

function Legend({
  color,
  label,
}: {
  color: string
  label: string
}) {
  return (
    <span className="flex items-center gap-1.5 text-muted-foreground">
      <span
        className="h-2 w-2 rounded-full"
        style={{ background: color }}
      />
      {label}
    </span>
  )
}