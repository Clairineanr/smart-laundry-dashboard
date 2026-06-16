"use client"

import { Search, Calendar, MapPin, ChevronDown, Bell, Download, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { filterScopes, filterRanges } from "@/lib/dashboard-data"

function FilterSelect({
  icon: Icon,
  value,
  options,
  onChange,
}: {
  icon: typeof MapPin
  value: string
  options: string[]
  onChange: (v: string) => void
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary">
        <Icon className="h-4 w-4 text-muted-foreground" />
        <span>{value}</span>
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        {options.map((opt) => (
          <DropdownMenuItem key={opt} onClick={() => onChange(opt)} className="justify-between">
            {opt}
            {opt === value && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function TopBar({
  scope,
  setScope,
  range,
  setRange,
}: {
  scope: string
  setScope: (v: string) => void
  range: string
  setRange: (v: string) => void
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-3 px-4 md:px-6">
        <div className="relative hidden md:block w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search metrics, partners, drivers..."
            className="h-9 w-full rounded-lg border border-border bg-secondary/40 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <FilterSelect icon={MapPin} value={scope} options={filterScopes} onChange={setScope} />
          <FilterSelect icon={Calendar} value={range} options={filterRanges} onChange={setRange} />
          <Button variant="outline" size="sm" className="hidden sm:inline-flex gap-2 border-border bg-secondary/50">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-colors hover:text-foreground">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
          </button>
        </div>
      </div>
    </header>
  )
}
