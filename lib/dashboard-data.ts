// Mock data for the SmartLaundry Intelligence Platform.
// All values are illustrative and meant to be replaced with live data.

export const kpis = [
  {
    id: "revenue",
    label: "Net Revenue",
    value: "Rp 482 Jt",
    delta: 12.4,
    trend: "up" as const,
    spark: [38, 41, 39, 45, 48, 52, 55, 58, 61, 64, 68, 72],
    sub: "vs. Rp 429 Jt bulan lalu",
  },
  {
    id: "orders",
    label: "Orders Processed",
    value: "284,910",
    delta: 8.1,
    trend: "up" as const,
    spark: [52, 54, 51, 58, 60, 59, 63, 66, 65, 69, 71, 74],
    sub: "9,830 avg / day",
  },
  {
    id: "aov",
    label: "Avg. Order Value",
    value: "Rp 16.900",
    delta: 3.6,
    trend: "up" as const,
    spark: [40, 42, 41, 43, 44, 46, 45, 47, 49, 50, 51, 53],
    sub: "+Rp 1.200 dibanding bulan lalu",
  },
  {
    id: "sla",
    label: "On-Time Delivery",
    value: "96.4%",
    delta: -1.2,
    trend: "down" as const,
    spark: [72, 74, 73, 71, 70, 69, 68, 67, 68, 66, 65, 64],
    sub: "Target 98%",
  },
]

export const aiInsights = [
  {
    id: 1,
    severity: "opportunity" as const,
    title: "Permintaan layanan express meningkat",
    body: "Pesanan express meningkat 18% dalam 30 hari terakhir dan menyumbang 42% total pendapatan.",
    confidence: 94,
  },
  {
    id: 2,
    severity: "risk" as const,
    title: "Keterlambatan pengiriman di Surabaya Timur",
    body: "Rata-rata waktu pengiriman meningkat 12% pada jam sibuk pukul 18.00–20.00.",
    confidence: 88,
  },
  {
    id: 3,
    severity: "info" as const,
    title: "Pelanggan loyal mendominasi pendapatan",
    body: "64% pendapatan bulanan berasal dari pelanggan yang melakukan lebih dari 5 transaksi per bulan.",
    confidence: 91,
  },
]

export const revenueSeries = [
  { month: "Jan", revenue: 312, forecast: 300, cost: 184 },
  { month: "Feb", revenue: 298, forecast: 305, cost: 178 },
  { month: "Mar", revenue: 341, forecast: 330, cost: 196 },
  { month: "Apr", revenue: 372, forecast: 360, cost: 205 },
  { month: "May", revenue: 358, forecast: 372, cost: 201 },
  { month: "Jun", revenue: 401, forecast: 390, cost: 219 },
  { month: "Jul", revenue: 438, forecast: 420, cost: 233 },
  { month: "Aug", revenue: 452, forecast: 448, cost: 241 },
  { month: "Sep", revenue: 478, forecast: 465, cost: 252 },
  { month: "Oct", revenue: 496, forecast: 488, cost: 261 },
  { month: "Nov", revenue: 531, forecast: 512, cost: 274 },
  { month: "Dec", revenue: 562, forecast: 548, cost: 288 },
]

export const revenueByService = [
  { name: "Cuci Reguler", value: 42, fill: "#38bdf8" },
  { name: "Dry Cleaning", value: 27, fill: "#22d3ee" },
  { name: "Express", value: 18, fill: "#10b981" },
  { name: "Corporate", value: 13, fill: "#f59e0b" },
]

export const customerSegments = [
  { segment: "Pelanggan Baru", count: 12840, retention: 41, value: 9.2 },
  { segment: "Pelanggan Reguler", count: 38210, retention: 73, value: 14.6 },
  { segment: "Berlangganan", count: 21560, retention: 91, value: 22.8 },
  { segment: "Perusahaan", count: 1840, retention: 96, value: 84.0 },
]

export const cohortRetention = [
  { week: "W0", new: 100, returning: 100, sub: 100 },
  { week: "W1", new: 62, returning: 81, sub: 95 },
  { week: "W2", new: 44, returning: 72, sub: 92 },
  { week: "W3", new: 33, returning: 67, sub: 90 },
  { week: "W4", new: 28, returning: 64, sub: 89 },
  { week: "W6", new: 21, returning: 59, sub: 87 },
  { week: "W8", new: 17, returning: 55, sub: 86 },
]

export const demandForecast = [
  { day: "Sen", actual: 8200, predicted: 8100, capacity: 11000 },
  { day: "Sel", actual: 7800, predicted: 7950, capacity: 11000 },
  { day: "Rab", actual: 8600, predicted: 8500, capacity: 11000 },
  { day: "Kam", actual: 9100, predicted: 9050, capacity: 11000 },
  { day: "Jum", actual: 10400, predicted: 10250, capacity: 11000 },
  { day: "Sab", actual: null, predicted: 12300, capacity: 11000 },
  { day: "Min", actual: null, predicted: 11200, capacity: 11000 },
]

export const hourlyHeat = [
  "6a", "8a", "10a", "12p", "2p", "4p", "6p", "8p", "10p",
].map((hour, i) => ({
  hour,
  load: [22, 48, 65, 71, 58, 63, 88, 95, 54][i],
}))

// Logistics hubs — coordinates [lng, lat]
export const logisticsHubs = [
  { id: "sby", city: "Surabaya", coordinates: [112.7521, -7.2575], volume: 4820, status: "high" as const },
  { id: "jkt", city: "Jakarta", coordinates: [106.8456, -6.2088], volume: 3980, status: "high" as const },
  { id: "bdg", city: "Bandung", coordinates: [107.6191, -6.9175], volume: 3110, status: "medium" as const },
  { id: "mlg", city: "Malang", coordinates: [112.6304, -7.9797], volume: 2240, status: "medium" as const },
  { id: "yk", city: "Yogyakarta", coordinates: [110.3695, -7.7956], volume: 1870, status: "low" as const },
  { id: "smg", city: "Semarang", coordinates: [110.4203, -6.9932], volume: 1560, status: "medium" as const },
]

export const drivers = [
  {rank: 1, name: "Ahmad Rizki", zone: "Surabaya", deliveries: 1284, onTime: 99.1, rating: 4.97, change: 2,},
  {rank: 2, name: "Budi Santoso", zone: "Jakarta", deliveries: 1211, onTime: 98.4, rating: 4.95, change: 0,},
  {rank: 3, name: "Dimas Pratama", zone: "Bandung", deliveries: 1188, onTime: 98.0, rating: 4.93, change: 3,},
]

export const partners = [
  { name: "Fresh Laundry Surabaya", city: "Surabaya", capacity: 92, sla: 98.2, revenue: "Rp 612 Jt", trend: "up" as const },
  { name: "Laundry Express", city: "Jakarta", capacity: 78, sla: 96.5, revenue: "Rp 488 Jt", trend: "up" as const },
  { name: "CleanPro Indonesia", city: "Bandung", capacity: 84, sla: 94.1, revenue: "Rp 521 Jt", trend: "down" as const },
  { name: "CuciKilat", city: "Malang", capacity: 67, sla: 95.8, revenue: "Rp 402 Jt", trend: "up" as const },
  { name: "LaundryHub", city: "Yogyakarta", capacity: 71, sla: 93.4, revenue: "Rp 356 Jt", trend: "down" as const },
]

export const navItems = [
  { id: "overview", label: "Ringkasan Eksekutif", icon: "LayoutDashboard" },
  { id: "orders", label: "Analisis Pesanan", icon: "TrendingUp" },
  { id: "revenue", label: "Analisis Pendapatan", icon: "TrendingUp" },
  { id: "customers", label: "Analisis Pelanggan", icon: "Users" },
  { id: "forecast", label: "Prediksi Permintaan", icon: "Activity" },
  { id: "drivers", label: "Performa Driver", icon: "Navigation" },
  { id: "partners", label: "Mitra Laundry", icon: "Building2" },
  { id: "operations", label: "Operasional", icon: "Truck" },
]

export const filterScopes = [
  "Semua Wilayah",
  "Surabaya",
  "Jakarta",
  "Bandung",
  "Malang",
  "Yogyakarta",
  "Semarang",
]

export const filterRanges = [
  "7 Hari Terakhir",
  "30 Hari Terakhir",
  "Tahun Berjalan",
]