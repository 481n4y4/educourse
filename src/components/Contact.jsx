import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "044fafe7-219e-4697-91b5-670583d9e2ec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <section className=" flex items-center justify-center min-h-80 p-12">
      <form
        onSubmit={onSubmit}
        className="shadow-md p-12 min-w-lvh rounded-3xl"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Contact Us
        </h2>
        <div className="grid gap-3">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full  border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              className="w-full  border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition resize-none"
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full  font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 shadow-lg"
        >
          Send Message
        </button>
        <p>{result}</p>
      </form>
    </section>
  );
}
