// components/Footer.tsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-20 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div className="space-y-4 md:col-span-2">
          <h2 className="text-3xl font-extrabold text-white tracking-wide">Gameode</h2>
          <p className="text-gray-400 leading-relaxed">
            Oyun dünyasının en güncel haberleri, incelemeleri ve rehberleri burada.  
            En yeni oyunları keşfet, topluluğa katıl, ve oyun tutkunları ile etkileşimde kal!
          </p>
          <div className="flex space-x-4 mt-6 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition"><FaFacebookF size={22} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-sky-400 transition"><FaTwitter size={22} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition"><FaInstagram size={22} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 transition"><FaLinkedinIn size={22} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-600 transition"><FaYoutube size={22} /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-100 transition"><FaGithub size={22} /></a>
          </div>
        </div>

        {/* Site Navigation */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Site Haritası</h3>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-white transition">Ana Sayfa</a></li>
            <li><a href="/games" className="hover:text-white transition">Oyunlar</a></li>
            <li><a href="/news" className="hover:text-white transition">Haberler</a></li>
            <li><a href="/reviews" className="hover:text-white transition">İncelemeler</a></li>
            <li><a href="/about" className="hover:text-white transition">Hakkımızda</a></li>
            <li><a href="/contact" className="hover:text-white transition">İletişim</a></li>
          </ul>
        </div>

        {/* Destek & Yardım */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Destek & Yardım</h3>
          <ul className="space-y-3">
            <li><a href="/faq" className="hover:text-white transition">SSS</a></li>
            <li><a href="/support" className="hover:text-white transition">Destek Merkezi</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Gizlilik Politikası</a></li>
            <li><a href="/terms" className="hover:text-white transition">Kullanım Şartları</a></li>
            <li><a href="/feedback" className="hover:text-white transition">Geri Bildirim</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Bültene Abone Ol</h3>
          <p className="text-gray-400 mb-4">
            Haftalık en yeni oyun haberleri ve fırsatları kaçırma!
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="rounded-md px-4 py-2 text-black flex-grow focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition"
            >
              Abone Ol
            </button>
          </form>
          <p className="text-xs mt-3 text-gray-500">
            E-postanız güvende. İstediğiniz zaman aboneliği iptal edebilirsiniz.
          </p>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-800 pt-8 text-center text-sm text-gray-500 select-none">
        &copy; {new Date().getFullYear()} Gameode. Tüm hakları saklıdır. Tasarım & Geliştirme Serpent.
      </div>
    </footer>
  );
}
