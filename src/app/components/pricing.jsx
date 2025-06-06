import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

const plans = [
  {
    title: "Free",
    price: "Gratis",
    features: [
      { text: "Konversi hingga 3 video per bulan", available: true },
      { text: "Panjang video maksimal 5 menit", available: true },
      { text: "Format output: teks mentah", available: true },
      { text: "Tidak ada penyimpanan riwayat", available: false },
      { text: "Tidak ada pengeditan otomatis", available: false },
    ],
  },
  {
    title: "Basic",
    price: "Rp50.000",
    sub: "/bulan",
    features: [
      { text: "10 video/bulan", available: true },
      { text: "Panjang video 10 menit", available: true },
      { text: "Format output: teks mentah", available: true },
      { text: "Tidak ada AI Editor", available: false },
      { text: "Tidak ada riwayat", available: false },
    ],
  },
  {
    title: "Student",
    price: "Rp150.000",
    sub: "/bulan",
    features: [
      { text: "Konversi hingga 30 video per bulan", available: true },
      { text: "Panjang video maksimal 15 menit", available: true },
      { text: "Format output: artikel siap baca", available: true },
      { text: "Riwayat konversi tersimpan", available: true },
      { text: "Akses ke fitur penyuntingan dasar", available: true },
      { text: "Diskon pelajar tersedia (dengan verifikasi)", status: "info" },
    ],
  },
  {
    title: "Pro",
    price: "Rp250.000",
    sub: "/bulan",
    features: [
      { text: "Konversi tak terbatas", available: true },
      { text: "Panjang video hingga 60 menit", available: true },
      { text: "Artikel lengkap dengan struktur & heading otomatis", available: true },
      { text: "Dukungan format output (PDF, HTML, Markdown)", available: true },
      { text: "AI editor untuk hasil yang lebih halus", available: true },
      { text: "Prioritas layanan pelanggan", available: true },
      { text: "Penyimpanan cloud untuk riwayat dan file", available: true },
    ],
  },
]

export default function Pricing() {
  return (
    <section id="Pricing" className="bg-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <div key={plan.title} className="bg-white border border-blue-700 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-black">{plan.title}</h3>
            <p className="text-2xl font-bold mt-1 text-black">
              {plan.price}
              <span className="text-base font-normal italic">{plan.sub || ""}</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {plan.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-black">
                  {feat.status === "info" ? (
                    <span className="text-orange-500 text-lg mt-0.5">🎁</span>
                   ) :feat.available ? (
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5" />
                   ) : (
                    <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5" />
                  )}
                  <span className="text-black">{feat.text}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full border border-blue-700 text-black text-sm font-semibold py-2 rounded hover:bg-gray-100">
              Try it now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
