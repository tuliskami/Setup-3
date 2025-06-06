import Image from "next/image";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-100 py-12 px-4">
      <div className="max-w-8xl mx-auto bg-yellow-400 border border-blue-700 rounded-md p-6">
        {/* Top Navigation */}
        <div className="flex flex-wrap justify-between border-b border-black pb-3 text-sm font-semibold text-black">
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:underline">
              Help center
            </a>
            <a href="#" className="hover:underline">
              Location
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              Back to Top
            </a>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-6 grid md:grid-cols-4 gap-6 text-sm text-black">
          {/* Form */}
          <div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 w-full rounded border border-black text-black"
              />
              <button className="bg-black text-white px-4 rounded font-bold">
                Join now
              </button>
            </div>
          </div>

          {/* Column: Desain */}
          <div>
            <h4 className="font-bold mb-2">Desain</h4>
            <ul className="space-y-1">
              <li>Antarmuka Pengguna</li>
              <li>Desain Responsif</li>
              <li>Konsisten Visual</li>
              <li>Pratinjau konversi</li>
            </ul>
          </div>

          {/* Column: Status */}
          <div>
            <h4 className="font-bold mb-2">Status</h4>
            <ul className="space-y-1">
              <li>Status Layanan</li>
              <li>Riwayat Gangguan</li>
              <li>Jadwal Pemeliharaan</li>
              <li>Performa Sistem</li>
            </ul>
          </div>

          {/* Column: Tentang Kami */}
          <div>
            <h4 className="font-bold mb-2">Tentang Kami</h4>
            <ul className="space-y-1">
              <li>Profil Mahasiswa</li>
              <li>Tim Pengembang</li>
              <li>Kolaborasi & Dukungan</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 pt-4 border-t border-black flex flex-col md:flex-row items-center justify-between text-xs text-black">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <div className="bg-white rounded p-1">
              <Image src="/TulisKami.jpg" alt="Logo" width={20} height={20} />
            </div>
            <span className="font-semibold text-sm">Tulis Kami</span>
            <span className="ml-1">© TulisKami 2025. All rights reserved.</span>
          </div>
          <div className="flex gap-4 text-lg">
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
