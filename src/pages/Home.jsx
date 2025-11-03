import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import educourse from "../assets/img/logo.png";
import ml from "../assets/img/ml.png";
import dm from "../assets/img/dm.png";
import fs from "../assets/img/full.png";
import { Link } from "react-router-dom";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faLaptopCode, 
  faUsers, 
  faChartLine 
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 sm:py-28 min-h-screen flex items-center justify-center bg-green-50"
      >
        <div className="flex flex-col items-center text-center justify-center max-w-6xl gap-8 mx-auto px-4">
          <img
            src={educourse}
            alt="EduCourse"
            className="object-cover w-64 sm:w-80 md:w-96 mb-4"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Transformasi Masa Depan Anda
            <span className="block text-green-600 mt-2">
              Melalui Pendidikan
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl leading-relaxed">
            Jelajahi ratusan kursus berkualitas tinggi dari instruktur ahli di
            bidang teknologi, bisnis, desain, dan pengembangan karir. Belajar
            sesuai jadwal Anda, raih sertifikat, dan tingkatkan karier Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200">
              Mulai Belajar Gratis
            </button>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-green-600 font-semibold rounded-lg shadow-md border border-green-600 transition-colors duration-200">
              Lihat Kursus
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12 text-gray-600">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">
                10K+
              </div>
              <div className="text-sm sm:text-base">Murid Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">
                500+
              </div>
              <div className="text-sm sm:text-base">Kursus Online</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">
                200+
              </div>
              <div className="text-sm sm:text-base">Instruktur Ahli</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">
                95%
              </div>
              <div className="text-sm sm:text-base">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Apa itu Educourse Section */}
      <section className="py-20 sm:py-24 bg-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex justify-center items-center order-2 lg:order-1">
              <img 
                src={educourse} 
                alt="educourse" 
                className="w-full max-w-md lg:max-w-lg rounded-lg" 
              />
            </div>

            <div className="flex flex-col justify-center order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Apa itu Educourse?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Educourse adalah sebuah platform pembelajaran daring (online
                learning platform) yang dirancang untuk mendukung pengembangan
                diri secara berkelanjutan bagi berbagai kalangan, mulai dari
                pelajar sekolah, mahasiswa, hingga profesional. Platform ini
                menggabungkan pendekatan interaktif, praktis, dan berbasis proyek
                untuk memastikan pembelajaran yang relevan dan aplikatif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tujuan Utama Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Tujuan Utama Educourse
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen untuk menciptakan pengalaman belajar yang transformatif 
              dan berdampak positif bagi perkembangan karir dan kehidupan peserta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tujuan 1 */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <FontAwesomeIcon 
                  icon={faGraduationCap} 
                  className="text-green-600 text-2xl" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Akses Pendidikan Berkualitas
              </h3>
              <p className="text-gray-600">
                Memberikan akses pendidikan berkualitas tinggi bagi semua kalangan 
                dengan harga terjangkau dan fleksibilitas waktu belajar.
              </p>
            </div>

            {/* Tujuan 2 */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <FontAwesomeIcon 
                  icon={faLaptopCode} 
                  className="text-green-600 text-2xl" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Pembelajaran Praktis
              </h3>
              <p className="text-gray-600">
                Menyediakan konten pembelajaran yang praktis dan aplikatif, 
                langsung dapat diterapkan dalam dunia kerja dan kehidupan sehari-hari.
              </p>
            </div>

            {/* Tujuan 3 */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <FontAwesomeIcon 
                  icon={faUsers} 
                  className="text-green-600 text-2xl" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Komunitas Pembelajar
              </h3>
              <p className="text-gray-600">
                Membangun komunitas pembelajar yang saling mendukung, berbagi pengetahuan, 
                dan berkolaborasi dalam proyek nyata.
              </p>
            </div>

            {/* Tujuan 4 */}
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <FontAwesomeIcon 
                  icon={faChartLine} 
                  className="text-green-600 text-2xl" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Pengembangan Karir
              </h3>
              <p className="text-gray-600">
                Membantu peserta mengembangkan keterampilan yang dibutuhkan 
                di pasar kerja dan meningkatkan prospek karir mereka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 sm:py-24 bg-white min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Mengapa Memilih EduCourse?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Platform pembelajaran online terdepan yang memberikan pengalaman
              belajar terbaik untuk masa depan karir Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎓",
                name: "Kurikulum Terupdate",
                desc: "Materi pembelajaran selalu diperbarui mengikuti perkembangan industri dan teknologi terbaru",
              },
              {
                icon: "👨‍🏫",
                name: "Instruktur Berpengalaman",
                desc: "Diajar oleh praktisi industri dengan pengalaman bertahun-tahun di bidangnya masing-masing",
              },
              {
                icon: "💻",
                name: "Fleksibel",
                desc: "Akses kursus kapan saja, di mana saja melalui berbagai perangkat tanpa batasan waktu",
              },
              {
                icon: "📜",
                name: "Sertifikat Resmi",
                desc: "Dapatkan sertifikat kelulusan yang diakui industri untuk meningkatkan nilai CV Anda",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 border border-green-200"
              >
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 text-3xl">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {feature.name}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Kursus Populer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan kursus paling diminati yang akan membawa karir Anda ke
              level berikutnya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Full-Stack Web Development",
                category: "Teknologi",
                students: "2.5K",
                rating: "4.9",
                imge: fs,
              },
              {
                title: "Data Science & Machine Learning",
                category: "Data",
                students: "1.8K",
                rating: "4.8",
                imge: ml,
              },
              {
                title: "Digital Marketing Mastery",
                category: "Bisnis",
                students: "1.2K",
                rating: "4.7",
                imge: dm,
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="h-48 bg-gray-200">
                  <img 
                    src={course.imge} 
                    alt={course.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-3 text-gray-800">
                    {course.title}
                  </h3>
                  <div className="flex justify-between text-gray-600">
                    <span>👨‍🎓 {course.students} Murid</span>
                    <span>⭐ {course.rating}/5</span>
                  </div>
                  <button className="w-full mt-6 py-3 bg-green-50 hover:bg-green-100 text-green-700 font-semibold rounded-lg transition-colors border border-green-200">
                    Lihat Kursus
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200">
              Jelajahi Semua Kursus
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Siap Memulai Perjalanan Belajar Anda?
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Bergabunglah dengan ribuan pelajar lainnya yang telah mengubah karir
            mereka melalui pendidikan online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white hover:bg-gray-100 text-green-600 font-semibold rounded-lg shadow-md transition-colors duration-200">
              Daftar Sekarang - Gratis
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent hover:bg-green-700 text-white font-semibold rounded-lg border border-white transition-colors duration-200 text-center"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}