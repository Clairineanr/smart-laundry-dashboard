# 🧺 Smart Laundry Express

Smart Laundry Express adalah prototype aplikasi layanan laundry digital berbasis web yang menghubungkan pelanggan, mitra laundry, driver, dan admin dalam satu platform terintegrasi.

## 📌 Deskripsi

Aplikasi ini dirancang untuk memudahkan proses pemesanan laundry secara online dengan fitur:

* Pemesanan laundry online
* Pickup & Delivery
* Tracking status pesanan
* Pembayaran QRIS
* Chat pelanggan dan driver
* Dashboard admin
* Dashboard mitra laundry
* Dashboard driver

Prototype ini dibuat menggunakan teknologi web sederhana sehingga dapat diakses langsung melalui browser tanpa instalasi tambahan.

---

## 👥 Role Pengguna

### 👤 Customer

* Melihat laundry terdekat
* Membuat pesanan
* Checkout dan pembayaran QRIS
* Melacak status pesanan
* Chat dengan driver
* Memberikan rating dan review

### 🛡️ Admin

* Monitoring pengguna
* Monitoring pesanan
* Kelola komplain
* Dashboard statistik
* Laporan operasional

### 🛵 Driver

* Melihat tugas pickup
* Detail pelanggan
* Upload bukti pengambilan
* Menyelesaikan tugas pengiriman

### 🏪 Mitra Laundry

* Menerima pesanan
* Menimbang pakaian
* Mengelola proses laundry
* Memperbarui status pesanan

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Vercel Deployment

---

## 📂 Struktur Project

```text
smartlaundry-vercel/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── vercel.json
```

---

## 🚀 Menjalankan Project Secara Lokal

### Opsi 1 - Live Server (VS Code)

1. Install extension **Live Server**
2. Klik kanan `index.html`
3. Pilih **Open with Live Server**

### Opsi 2 - Local HTTP Server

```bash
python -m http.server 8000
```

Buka browser:

```text
http://localhost:8000
```

---

## 🌐 Deployment ke Vercel

1. Push project ke GitHub
2. Login ke Vercel
3. Import repository GitHub
4. Klik Deploy

Karena project ini merupakan static website, tidak diperlukan build command ataupun package.json.

---

## 🎯 Fitur Utama

* Multi-role simulation
* Responsive mobile layout
* QRIS payment simulation
* Order tracking simulation
* Driver management simulation
* Laundry partner dashboard
* Admin monitoring dashboard

---

## 📚 Tujuan Pengembangan

Project ini dikembangkan sebagai bagian dari tugas mata kuliah dan simulasi sistem informasi laundry modern yang mengintegrasikan pelanggan, driver, mitra laundry, dan administrator dalam satu platform digital.

---

## 📄 License

This project is created for educational and academic purposes.
© 2026 Smart Laundry Express Team