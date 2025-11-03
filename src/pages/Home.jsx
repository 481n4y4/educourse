import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import educourse from "../assets/img/logo.png";
import ml from "../assets/img/ml.png"
import dm from "../assets/img/dm.png"
import fs from "../assets/img/full.png"

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
            <span className="block text-green-600 mt-2">Melalui Pendidikan</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl leading-relaxed">
            Jelajahi ratusan kursus berkualitas tinggi dari instruktur ahli di bidang 
            teknologi, bisnis, desain, dan pengembangan karir. Belajar sesuai jadwal Anda, 
            raih sertifikat, dan tingkatkan karier Anda.
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
              <div className="text-2xl sm:text-3xl font-bold text-green-600">10K+</div>
              <div className="text-sm sm:text-base">Murid Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">500+</div>
              <div className="text-sm sm:text-base">Kursus Online</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">200+</div>
              <div className="text-sm sm:text-base">Instruktur Ahli</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">95%</div>
              <div className="text-sm sm:text-base">Tingkat Kepuasan</div>
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
              Platform pembelajaran online terdepan yang memberikan pengalaman belajar 
              terbaik untuk masa depan karir Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Kurikulum Terupdate</h3>
              <p className="text-gray-600">
                Materi pembelajaran selalu diperbarui mengikuti perkembangan industri 
                dan teknologi terbaru
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-3xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Instruktur Berpengalaman</h3>
              <p className="text-gray-600">
                Belajar langsung dari praktisi dan ahli di bidangnya dengan 
                pengalaman industri yang luas
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Fleksibel</h3>
              <p className="text-gray-600">
                Akses kursus kapan saja, di mana saja melalui berbagai perangkat 
                tanpa batasan waktu
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-3xl">📜</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Sertifikat Resmi</h3>
              <p className="text-gray-600">
                Dapatkan sertifikat kelulusan yang diakui industri untuk 
                meningkatkan nilai CV Anda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Kursus Populer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan kursus paling diminati yang akan membawa karir Anda ke level berikutnya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Full-Stack Web Development",
                category: "Teknologi",
                students: "2.5K",
                rating: "4.9",
                imge: fs
              },
              {
                title: "Data Science & Machine Learning",
                category: "Data",
                students: "1.8K",
                rating: "4.8",
                imge: ml
              },
              {
                title: "Digital Marketing Mastery",
                category: "Bisnis",
                students: "1.2K",
                rating: "4.7",
                imge: dm
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="h-48">
                  <img src={course.imge} alt="image" />
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-3 text-gray-800">{course.title}</h3>
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
            <button className="px-8 py-4 bg-transparent hover:bg-green-700 text-white font-semibold rounded-lg border border-white transition-colors duration-200">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}