"use client"

import {
  LayoutDashboard,
  TrendingUp,
  Users,
  Activity,
  Truck,
  Navigation,
  Building2,
  Sparkles,
  Waves,
  Settings,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/dashboard-data"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  TrendingUp,
  Users,
  Activity,
  Truck,
  Navigation,
  Building2,
  Sparkles,
}

export function Sidebar({
  active,
  onSelect,
}: {
  active: string
  onSelect: (id: string) => void
}) {
  return (
    <aside className="hidden lg:flex lg:w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex h-16 items-center gap-2.5 px-5 border-b border-sidebar-border">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Waves className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold tracking-tight">SmartLaundry</p>
          <p className="text-[11px] text-muted-foreground">Intelligence Platform</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <p className="px-3 pb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Menu Utama
        </p>
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon] ?? LayoutDashboard
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    onSelect(item.id)
                    
                    document
                  .getElementById(item.id)
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                  )}
                  >
                  <Icon
                    className={cn(
                      "h-4 w-4 shrink-0",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                    )}
                  />
                  <span className="truncate">{item.label}</span>
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="px-3 pb-3">
        <ul className="flex flex-col gap-1">
          <li>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground transition-colors">
              <Settings className="h-4 w-4" />
              Settings
            </button>
          </li>
          <li>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground transition-colors">
              <LifeBuoy className="h-4 w-4" />
              Support
            </button>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3 border-t border-sidebar-border px-4 py-3">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-secondary text-xs text-foreground">AR</AvatarFallback>
        </Avatar>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-sm font-medium">Admin Sistem</p>
          <p className="truncate text-[11px] text-muted-foreground">SmartLaundry Dashboard</p>
        </div>
      </div>
    </aside>
  )
}
