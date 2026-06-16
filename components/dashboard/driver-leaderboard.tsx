"use client"

import { Star } from "lucide-react"
import { Panel } from "@/components/dashboard/panel"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { drivers } from "@/lib/dashboard-data"

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
}

function medal(rank: number) {
  if (rank === 1) return "🥇"
  if (rank === 2) return "🥈"
  if (rank === 3) return "🥉"
  return `#${rank}`
}

export function DriverLeaderboard() {
  return (
    <Panel
      title="Performa Driver"
      description="Driver dengan performa terbaik bulan ini"
    >
      <ul className="flex flex-col gap-3">
        {drivers.map((d) => (
          <li
            key={d.rank}
            className="rounded-xl border border-border bg-secondary/20 p-3 transition-all hover:bg-secondary/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 text-center font-bold">
                {medal(d.rank)}
              </div>

              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-secondary text-xs">
                  {initials(d.name)}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  {d.name}
                </p>

                <p className="text-xs text-muted-foreground">
                  Zona {d.zone}
                </p>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1 justify-end">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">
                    {d.rating}
                  </span>
                </div>

                <p className="text-[10px] text-muted-foreground">
                  Rating
                </p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-muted-foreground">
                  Pengiriman
                </p>

                <p className="font-semibold text-foreground">
                  {d.deliveries.toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  Ketepatan Waktu
                </p>

                <p className="font-semibold text-foreground">
                  {d.onTime}%
                </p>
              </div>
            </div>

            <div className="mt-3">
              <div className="mb-1 flex justify-between text-[11px] text-muted-foreground">
                <span>SLA Driver</span>
                <span>{d.onTime}%</span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{
                    width: `${d.onTime}%`,
                  }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  )
}