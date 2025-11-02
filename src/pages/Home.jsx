import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section
        id="home"
        className=" py-10 sm:py-15 min-h-screen flex items-center"
      >
        <div className="flex flex-col max-w-5xl gap-5 mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4x1 font-bold">
            Belajar Lebih Cerdas, Raih Impianmu Bersama Educourse
          </h2>
          <p className="text-lg sm:text-xl">
            Tingkatkan keterampilanmu dengan ratusan kursus online dari para
            ahli di bidang teknologi, bisnis, desain, dan banyak lagi — bisa
            diakses kapan pun, di mana pun.
          </p>

          <div>
            <button className="p-4 bg-blue-400 rounded-lg text-white">
              Mulai Belajar Sekarang
            </button>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="flex items-center py-12 sm:py-16 bg-gray-100 min-h-screen"
      >
        <div className="container mx-auto px-4">
          <h3 className="text-2x1 sm:text-3xl md:text-5xl font-bold text-center mb-8 text-gary-800">
            Tentang Landing Page
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 md:w-34 md:h-34 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-xl sm:text-2xl md:text-6xl">
                  🪩
                </span>
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                Simple
              </h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Landing Page ini dibuat secara simple
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 md:w-34 md:h-34 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-xl sm:text-2xl md:text-6xl">
                  🏫
                </span>
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                Educourse
              </h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Dibuat dengan penuh Cinta kasih
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 md:w-34 md:h-34 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-xl sm:text-2xl md:text-6xl">
                  🗣️
                </span>
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                Easy
              </h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Dengan tailwind css, kita dapat membuat tampilan kustom dengan
                mudah
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-8 sm:py-12 bg-amber-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl sm:text-2xl font-bold">
            Tentang Landing Page
          </h3>
          <p className="text-base sm:text-xl">
            Untuk informasi lebih lanjut mengenai web ini, silahkan hubungi kami
            lewat akun instagram: @educourse.id
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
