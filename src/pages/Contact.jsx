import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "044fafe7-219e-4697-91b5-670583d9e2ec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    const status = data.success ? "Success!" : "Error";
    setResult(status);

    alert(result);

    if (data.success) {
      navigate("/");
    }
  };

  return (
    <main className="min-h-screen bg-green-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Punya pertanyaan tentang kursus kami? Tim kami siap membantu perjalanan belajar Anda.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Kami Siap Membantu Anda</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Baik Anda tertarik dengan kursus kami, butuh bantuan teknis, atau ingin bermitra dengan kami,
                  kami di sini untuk membantu kesuksesan perjalanan edukasi Anda.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Telepon</h3>
                    <p className="text-gray-600">+62 21 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">support@educourse.id</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Kantor</h3>
                    <p className="text-gray-600">Jl. Pendidikan No. 123<br />Jakarta Selatan, 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Waktu Respons</h3>
                    <p className="text-gray-600">Biasanya dalam 24 jam<br />Senin - Jumat, 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8 lg:p-10 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Kirim Pesan kepada Kami</h3>
              <p className="text-gray-600 mb-8">Isi formulir di bawah ini dan kami akan segera menghubungi Anda.</p>
              
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Depan *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Masukkan nama depan Anda"
                      className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Belakang *
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Masukkan nama belakang Anda"
                      className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email.anda@example.com"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select
                    name="subject"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    required
                  >
                    <option value="">Pilih subjek</option>
                    <option value="course-inquiry">Pertanyaan Kursus</option>
                    <option value="technical-support">Bantuan Teknis</option>
                    <option value="billing">Pertanyaan Pembayaran</option>
                    <option value="partnership">Kemitraan</option>
                    <option value="feedback">Masukan</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan Anda *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Ceritakan bagaimana kami dapat membantu Anda..."
                    rows="6"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-3 shadow-md transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <h3 className="font-semibold text-gray-800 mb-3">Bagaimana cara mendaftar kursus?</h3>
              <p className="text-gray-600">Jelajahi katalog kursus kami, pilih kursus yang diinginkan, dan klik "Daftar Sekarang" untuk memulai perjalanan belajar Anda.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <h3 className="font-semibold text-gray-800 mb-3">Apakah bisa mendapatkan refund?</h3>
              <p className="text-gray-600">Kami menawarkan garansi uang kembali 30 hari jika Anda tidak puas dengan kursus yang diikuti.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <h3 className="font-semibold text-gray-800 mb-3">Apakah sertifikat disediakan?</h3>
              <p className="text-gray-600">Ya, semua kursus yang diselesaikan termasuk sertifikat kelulusan yang dapat diunduh.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <h3 className="font-semibold text-gray-800 mb-3">Apakah ada diskon untuk grup?</h3>
              <p className="text-gray-600">Ya, kami menawarkan harga khusus untuk tim dan organisasi. Hubungi kami untuk detailnya.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}