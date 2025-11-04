import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faPaperPlane,
  faHeadset,
  faGraduationCap,
  faCreditCard,
  faHandshake,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    subject: "",
    priority: "medium",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Mengirim pesan...");

    const serviceID = "service_y3l21vm";
    const templateID = "template_6ns7t9q";
    const publicKey = "cu9zlI3BElTIYcO5w";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("Success!", response.status, response.text);
        setStatus("Pesan berhasil dikirim!");
        setFormData({ 
          name: "", 
          lastname: "", 
          email: "", 
          subject: "", 
          priority: "medium", 
          message: "" 
        });
      })
      .catch((err) => {
        console.log("Failed....", err);
        setStatus("Gagal mengirim pesan. Silakan coba lagi.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePriorityChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      priority: value
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
            <span>Kami Siap Membantu</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Mari <span className="text-teal-200">Berbincang</span>
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Tim support kami siap membantu perjalanan belajar Anda. Dapatkan
            respons cepat dan solusi tepat untuk semua pertanyaan seputar kursus
            dan platform.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4 -mt-10 relative z-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-teal-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Informasi Kontak
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Butuh bantuan segera? Hubungi kami melalui berbagai channel
                  yang tersedia. Tim kami siap membantu 24/7 untuk pertanyaan
                  mendesak.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: faPhone,
                      title: "Telepon & WhatsApp",
                      details: ["+62 21 1234 5678", "+62 812 3456 7890"],
                      color: "from-green-500 to-teal-500",
                      description: "Available 24/7 for urgent matters",
                    },
                    {
                      icon: faEnvelope,
                      title: "Email Support",
                      details: [
                        "support@educourse.id",
                        "partnership@educourse.id",
                      ],
                      color: "from-blue-500 to-teal-500",
                      description: "Response within 2-4 hours",
                    },
                    {
                      icon: faLocationDot,
                      title: "Office Location",
                      details: [
                        "Jl. Digital Education No. 123",
                        "Jakarta Selatan, 12560",
                      ],
                      color: "from-purple-500 to-pink-500",
                      description: "Visit us Mon-Fri, 9AM-6PM",
                    },
                    {
                      icon: faClock,
                      title: "Support Hours",
                      details: [
                        "Senin - Jumat: 08:00 - 18:00",
                        "Sabtu - Minggu: 09:00 - 15:00",
                      ],
                      color: "from-orange-500 to-red-500",
                      description: "Live chat available 24/7",
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100 group hover:shadow-lg transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <FontAwesomeIcon
                          icon={contact.icon}
                          className="text-white text-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {contact.title}
                        </h3>
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm mb-1">
                            {detail}
                          </p>
                        ))}
                        <p className="text-teal-600 text-xs font-medium mt-2">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Support */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faHeadset}
                      className="text-white text-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Butuh Bantuan Cepat?</h3>
                </div>
                <p className="text-teal-100 mb-6 leading-relaxed">
                  Chat langsung dengan tim support kami untuk pertanyaan
                  mendesak dan bantuan teknis.
                </p>
                <button className="w-full bg-white hover:bg-gray-100 text-teal-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faCommentDots} />
                  Mulai Live Chat
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-teal-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="text-white text-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Kirim Pesan kepada Kami
                  </h3>
                </div>
                <p className="text-gray-600 mb-8">
                  Isi formulir di bawah ini dan kami akan segera menghubungi
                  Anda dalam waktu 24 jam.
                </p>

                {status && (
                  <div className={`p-4 rounded-xl mb-6 ${
                    status.includes("berhasil") || status.includes("Success") 
                      ? "bg-green-100 text-green-700 border border-green-200" 
                      : status.includes("Mengirim")
                      ? "bg-blue-100 text-blue-700 border border-blue-200"
                      : "bg-red-100 text-red-700 border border-red-200"
                  }`}>
                    {status}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Nama Depan *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Masukkan nama depan Anda"
                        className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all duration-200 bg-gray-50/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Nama Belakang *
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder="Masukkan nama belakang Anda"
                        className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all duration-200 bg-gray-50/50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email.anda@example.com"
                      className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all duration-200 bg-gray-50/50"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Subjek *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all duration-200 bg-gray-50/50 appearance-none"
                      required
                    >
                      <option value="">Pilih kategori pertanyaan</option>
                      <option value="course-inquiry">Pertanyaan Kursus</option>
                      <option value="technical-support">Bantuan Teknis</option>
                      <option value="billing">Pertanyaan Pembayaran</option>
                      <option value="partnership">Kemitraan & Kerjasama</option>
                      <option value="feedback">Masukan & Saran</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Prioritas Pesan
                    </label>
                    <div className="flex gap-4 flex-wrap">
                      {[
                        {
                          value: "low",
                          label: "Rutin",
                          color: "bg-gray-100 text-gray-700",
                        },
                        {
                          value: "medium",
                          label: "Standard",
                          color: "bg-blue-100 text-blue-700",
                        },
                        {
                          value: "high",
                          label: "Penting",
                          color: "bg-orange-100 text-orange-700",
                        },
                        {
                          value: "urgent",
                          label: "Mendesak",
                          color: "bg-red-100 text-red-700",
                        },
                      ].map((priority) => (
                        <label
                          key={priority.value}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="priority"
                            value={priority.value}
                            checked={formData.priority === priority.value}
                            onChange={() => handlePriorityChange(priority.value)}
                            className="hidden peer"
                          />
                          <span
                            className={`px-4 py-2 rounded-lg border-2 border-transparent peer-checked:border-teal-500 transition-all duration-200 ${priority.color} hover:shadow-md`}
                          >
                            {priority.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Pesan Anda *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ceritakan bagaimana kami dapat membantu Anda... Jelaskan secara detail kebutuhan atau kendala yang Anda hadapi."
                      rows="6"
                      className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all duration-200 bg-gray-50/50 resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl border border-teal-200">
                    <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="text-teal-600"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-teal-700 font-medium">
                        Waktu Respons Rata-rata: 2-4 jam untuk pertanyaan
                        mendesak
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-3 shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto mb-6">
              <span>Bantuan Cepat</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Pertanyaan yang{" "}
              <span className="text-teal-600">Sering Diajukan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban cepat untuk pertanyaan umum seputar platform dan
              layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: faGraduationCap,
                question: "Bagaimana cara memilih kursus yang tepat?",
                answer:
                  "Gunakan fitur learning path advisor kami atau konsultasi gratis dengan education consultant untuk rekomendasi personal.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: faCreditCard,
                question: "Apakah ada garansi refund?",
                answer:
                  "Ya, kami menawarkan garansi uang kembali 30 hari jika kursus tidak sesuai ekspektasi. Syarat dan ketentuan berlaku.",
                color: "from-blue-500 to-teal-500",
              },
              {
                icon: faGraduationCap,
                question: "Apakah sertifikat diakui industri?",
                answer:
                  "Semua sertifikat kami telah terverifikasi dan diakui oleh perusahaan partner kami di industri teknologi.",
                color: "from-green-500 to-teal-500",
              },
              {
                icon: faHandshake,
                question: "Apakah ada program beasiswa?",
                answer:
                  "Kami menyediakan program beasiswa untuk pelajar berprestasi dan kebutuhan khusus. Daftar melalui halaman beasiswa.",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: faHeadset,
                question: "Bagaimana cara akses support teknis?",
                answer:
                  "Gunakan live chat 24/7, email support, atau booking technical support session dengan tim khusus kami.",
                color: "from-teal-500 to-blue-500",
              },
              {
                icon: faCommentDots,
                question: "Bisa konsultasi karir dengan mentor?",
                answer:
                  "Ya, semua siswa premium mendapatkan akses 1-on-1 career consultation dengan mentor industri berpengalaman.",
                color: "from-purple-500 to-blue-500",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-teal-50 rounded-2xl p-6 border border-teal-100 hover:shadow-xl transition-all duration-500 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${faq.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <FontAwesomeIcon
                    icon={faq.icon}
                    className="text-white text-lg"
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg leading-tight group-hover:text-teal-600 transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Tidak menemukan jawaban yang Anda cari?
            </p>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-teal-600 font-semibold rounded-xl shadow-lg border border-teal-200 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              <FontAwesomeIcon icon={faHeadset} />
              Buka Pusat Bantuan Lengkap
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}