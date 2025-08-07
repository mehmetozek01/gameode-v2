// pages/about.tsx

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Head from "next/head";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Mehmet Özek",
    role: "Kurucu & Yazılım Mühendisi",
    photo: "https://i.pravatar.cc/150?img=12",
    linkedin: "https://linkedin.com/in/mehmetozek",
    twitter: "https://twitter.com/mehmetozek",
  },
  {
    name: "Ayşe Yılmaz",
    role: "İçerik Editörü",
    photo: "https://i.pravatar.cc/150?img=32",
    linkedin: "https://linkedin.com/in/ayseyilmaz",
    twitter: "https://twitter.com/ayseyilmaz",
  },
  {
    name: "Buse Demir",
    role: "Topluluk Yöneticisi",
    photo: "https://i.pravatar.cc/150?img=45",
    linkedin: "https://linkedin.com/in/candemir",
    twitter: "https://twitter.com/candemir",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>Gameode Hakkımızda | Güvenilir Oyun Platformu</title>
        <meta
          name="description"
          content="Gameode, Türkiye'nin en güvenilir oyun bilgilendirme ve topluluk platformudur. Misyonumuz, vizyonumuz ve ekip üyelerimiz hakkında detaylı bilgi."
        />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-24 px-6 md:px-16 text-center overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight drop-shadow-lg">
            🎮 Oyun Tutkunları Buraya! 🎮
          </h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light tracking-wide drop-shadow-md">
            En yeni oyun haberleri, rehberler, stratejiler ve büyüyen oyuncu topluluğumuza katıl!
          </p>

          {/* Çoklu oyun görselleri - kart şeklinde */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Valorant",
                img: "https://images.alphacoders.com/135/thumb-1920-1356696.jpeg",
              },
              {
                title: "Elden Ring",
                img: "https://image.api.playstation.com/vulcan/ap/rnd/202501/3008/4b8274d023372e065669b663015c6f23b8df2d0ce2d3c500.jpg",
              },
              {
                title: "God of War Ragnarok",
                img: "https://www.psu.com/wp/wp-content/uploads/2021/10/god-of-war-ragnarok-ps4-ps5-wallpapers-01.jpg",
              },
              {
                title: "League of Legends",
                img: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b",
              },
            ].map(({ title, img }) => (
              <div
                key={title}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                title={title}
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-40 object-cover brightness-90"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Özgün ve dikkat çekici Bize Katıl butonu */}
          <a
            href="/register"
            className="inline-block relative px-14 py-4 font-extrabold text-purple-900 bg-yellow-400 rounded-full overflow-hidden group shadow-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-xl"></span>
            <span className="relative z-10">Bize Katıl ve Oyun Dünyanı Keşfet!</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 transform text-2xl z-10 animate-bounce">
              ▶️
            </span>
          </a>
        </section>


        {/* Biz Kimiz? */}
        <section className="max-w-6xl mx-auto px-6 md:px-0 py-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
            Biz Kimiz?
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed mb-12 text-center">
            Gameode, oyun severlerin bilgiye kolayca ulaşması için kurulmuş,
            teknolojiyle iç içe, dinamik ve yenilikçi bir platformdur. Alanında
            uzman yazılım mühendisleri ve oyun meraklılarından oluşan bir ekip
            tarafından yönetilmektedir. Amacımız, oyunculara güvenilir,
            kaliteli ve özgün içerikler sunmaktır.
          </p>

          {/* Takım Üyeleri */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {teamMembers.map(({ name, role, photo, linkedin, twitter }) => (
              <div
                key={name}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              >
                <img
                  src={photo}
                  alt={name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                <p className="text-gray-600 mb-4">{role}</p>
                <div className="flex space-x-4 text-gray-500 text-2xl">
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} LinkedIn`}
                    className="hover:text-blue-700 transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} Twitter`}
                    className="hover:text-blue-400 transition"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Misyon & Vizyon */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 md:px-0 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-5 text-purple-800">Misyonumuz</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Oyunculara en doğru, en güncel ve özgün içerikleri sunmak; aynı
                zamanda eğlenceli ve interaktif bir topluluk ortamı yaratmak.
                Teknolojiyi ve yenilikleri takip ederek, oyun dünyasının nabzını
                tutuyoruz.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-5 text-purple-800">Vizyonumuz</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Türkiye'nin ve bölgenin en saygın oyun platformu olmak; oyuncuların
                güvenle buluştuğu, bilgi paylaştığı ve geliştiği bir adres haline
                gelmek. Sürekli büyüyen topluluğumuzla sektörde fark yaratmak.
              </p>
            </div>
          </div>
        </section>

        {/* Değerlerimiz */}
        <section className="max-w-5xl mx-auto px-6 md:px-0 py-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
            Değerlerimiz
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-700 text-lg max-w-4xl mx-auto">
            <li className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-3">Güvenilirlik</h3>
              <p>İçeriklerimiz titizlikle hazırlanır, doğru bilgi ve şeffaflık önceliğimizdir.</p>
            </li>
            <li className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-3">Yenilikçilik</h3>
              <p>Teknolojiyi yakından takip eder, sürekli gelişim ve inovasyonu destekleriz.</p>
            </li>
            <li className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-3">Topluluk Odaklılık</h3>
              <p>Oyuncularımızın sesi ve ihtiyaçları bizim için çok önemlidir. Birlikte büyürüz.</p>
            </li>
          </ul>
        </section>

        {/* Neden Gameode? */}
        <section className="bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 py-16 text-white px-6 md:px-0">
          <h2 className="text-4xl font-bold mb-12 text-center">Neden Gameode?</h2>
          <ul className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed">
            <li>✔️ Özgün ve detaylı içerik</li>
            <li>✔️ Güncel ve güvenilir haberler</li>
            <li>✔️ Kullanıcı dostu arayüz</li>
            <li>✔️ Profesyonel ve samimi ekip</li>
            <li>✔️ Hızlı ve sorunsuz erişim</li>
            <li>✔️ Etkin topluluk ve destek</li>
          </ul>
        </section>

        <Footer />
      </main>
    </>
  );
}
