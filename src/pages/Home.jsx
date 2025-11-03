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
  faChartLine,
  faPlayCircle,
  faStar,
  faUserGraduate,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 sm:py-28 min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-teal-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-teal-400 rounded-full opacity-25 animate-ping"></div>

        <div className="flex flex-col items-center text-center justify-center max-w-6xl gap-8 mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center">
            <img
              src={educourse}
              alt="EduCourse"
              className="object-cover w-64 sm:w-80 md:w-96 mb-6 drop-shadow-lg"
            />
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-200 mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-teal-700">1,200+ pelajar aktif hari ini</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Wujudkan Potensi
            <span className="block text-teal-600 mt-2 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Masa Depan Digital
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl leading-relaxed">
            Kuasai keterampilan masa depan dengan kurikulum industri terbaru. Dari pemula hingga expert, 
            temukan jalur belajar yang tepat untuk karir impian Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <FontAwesomeIcon icon={faPlayCircle} />
              Mulai Belajar Gratis
            </button>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-teal-600 font-semibold rounded-xl shadow-lg border border-teal-200 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Jelajahi Kursus
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12 text-gray-600">
            {[
              { number: "15K+", label: "Murid Aktif", icon: faUserGraduate },
              { number: "650+", label: "Kursus Premium", icon: faLaptopCode },
              { number: "280+", label: "Instruktur Ahli", icon: faUsers },
              { number: "98%", label: "Tingkat Kepuasan", icon: faStar }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-200 transition-colors duration-300">
                  <FontAwesomeIcon icon={stat.icon} className="text-teal-600 text-xl" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-teal-600">{stat.number}</div>
                <div className="text-sm sm:text-base font-medium text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apa itu Educourse Section */}
      <section className="py-20 sm:py-24 bg-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center items-center order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={educourse} 
                  alt="educourse" 
                  className="w-full md:w-96 max-w-lg rounded-2xl" 
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-500 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-teal-300 rounded-2xl -z-10"></div>
              </div>
            </div>

            <div className="flex flex-col justify-center order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium w-fit mb-6">
                <span>Tentang Kami</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Revolusi <span className="text-teal-600">Pembelajaran Digital</span> untuk Semua
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                EduCourse adalah ekosistem pembelajaran digital yang menghubungkan passion dengan purpose. 
                Kami tidak hanya menyediakan kursus, tetapi membangun komunitas pembelajar seumur hidup 
                yang siap menghadapi tantangan era digital.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Dengan pendekatan project-based learning dan mentorship langsung dari praktisi industri, 
                kami memastikan setiap materi yang diajarkan relevan dengan kebutuhan pasar kerja terkini.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "50+", label: "Partner Industri" },
                  { number: "24/7", label: "Akses Belajar" },
                  { number: "1-on-1", label: "Mentorship" },
                  { number: "100%", label: "Project Based" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-teal-50 rounded-xl">
                    <div className="text-xl font-bold text-teal-600">{item.number}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tujuan Utama Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white text-teal-700 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto mb-6 shadow-sm">
              <span>Visi & Misi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Membangun <span className="text-teal-600">Generasi Pembelajar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen menciptakan dampak berkelanjutan melalui pendidikan yang inklusif, 
              praktis, dan transformatif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: faGraduationCap,
                title: "Demokratisasi Pendidikan",
                description: "Membuka akses pendidikan berkualitas tinggi bagi semua kalangan dengan model harga yang inklusif dan berkelanjutan."
              },
              {
                icon: faLaptopCode,
                title: "Skills yang Relevan",
                description: "Kurikulum dirancang bersama industri untuk memastikan keterampilan yang dipelajari sesuai kebutuhan pasar kerja."
              },
              {
                icon: faUsers,
                title: "Komunitas Global",
                description: "Jaringan pembelajar dan mentor dari berbagai background untuk kolaborasi dan pertukaran ide tanpa batas."
              },
              {
                icon: faChartLine,
                title: "Pathway Karir",
                description: "Panduan karir personalisasi dan koneksi langsung dengan perusahaan partner untuk opportunities terbaik."
              }
            ].map((tujuan, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-teal-100 group hover:border-teal-200"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon 
                    icon={tujuan.icon} 
                    className="text-white text-2xl" 
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                  {tujuan.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tujuan.description}
                </p>
              </div>
            ))}
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
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto mb-6">
              <span>Keunggulan Platform</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Mengapa <span className="text-teal-600">EduCourse</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengalaman belajar yang dirancang untuk kesuksesan jangka panjang dengan teknologi terkini
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📚",
                name: "Learning Path",
                desc: "Jalur belajar terstruktur dari fundamental hingga advanced dengan milestone yang jelas"
              },
              {
                icon: "👨‍💼",
                name: "Industry Mentor",
                desc: "1-on-1 mentorship langsung dari praktisi di perusahaan teknologi terkemuka"
              },
              {
                icon: "🔄",
                name: "Live Updates",
                desc: "Konten selalu diperbarui real-time mengikuti perkembangan teknologi terbaru"
              },
              {
                icon: "🎯",
                name: "Career Support",
                desc: "Bimbingan portfolio, persiapan interview, dan rekomendasi ke perusahaan partner"
              },
              {
                icon: "📱",
                name: "Multi-Device",
                desc: "Akses seamless di desktop, tablet, dan mobile dengan sync otomatis"
              },
              {
                icon: "🤝",
                name: "Peer Learning",
                desc: "Kolaborasi dengan cohort members dalam project kelompok dan code review"
              },
              {
                icon: "⚡",
                name: "Fast Track",
                desc: "Program intensif untuk karir switch dalam 3-6 bulan dengan job guarantee"
              },
              {
                icon: "🌍",
                name: "Global Certificate",
                desc: "Sertifikat yang diakui internasional dengan verifikasi digital"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-teal-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 border border-teal-100 group hover:border-teal-200"
              >
                <div className="bg-gradient-to-br from-teal-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                  {feature.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white text-teal-700 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto mb-6 shadow-sm">
              <span>Kurikulum Populer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Temukan <span className="text-teal-600">Jalur Karir</span> Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih dari 650+ kursus premium dengan kurikulum industry-standard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Full-Stack Web Development",
                category: "Tech Career",
                students: "3.2K",
                rating: "4.9",
                duration: "6 Bulan",
                level: "Beginner to Pro",
                imge: fs,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Data Science & AI Mastery",
                category: "Data Career",
                students: "2.4K",
                rating: "4.8",
                duration: "8 Bulan",
                level: "Intermediate",
                imge: ml,
                color: "from-blue-500 to-teal-500"
              },
              {
                title: "Digital Marketing Pro",
                category: "Business",
                students: "1.8K",
                rating: "4.7",
                duration: "4 Bulan",
                level: "All Levels",
                imge: dm,
                color: "from-orange-500 to-red-500"
              }
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-teal-100 group hover:scale-105"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={course.imge} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${course.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {course.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-semibold text-gray-700">
                    ⭐ {course.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faUserGraduate} className="text-teal-500" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faPlayCircle} className="text-teal-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faChartLine} className="text-teal-500" />
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    Explore Program
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-teal-600 font-semibold rounded-xl shadow-lg border border-teal-200 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              Lihat Semua Program
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Siap <span className="text-teal-200">Transformasi Karir</span> Anda?
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Bergabung dengan 15,000+ alumni yang telah meraih kesuksesan di perusahaan teknologi ternama
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {[
              "Google", "Microsoft", "Gojek", "Tokopedia", "Traveloka"
            ].map((company, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <span className="font-semibold text-white">{company}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white hover:bg-gray-100 text-teal-600 font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <FontAwesomeIcon icon={faPlayCircle} />
              Mulai Sekarang - Gratis
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-xl border border-white transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-2"
            >
              Konsultasi Gratis
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <p className="text-teal-200 mt-6 text-sm">
            ✅ 7-day free trial • ✅ Cancel anytime • ✅ No credit card required
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}