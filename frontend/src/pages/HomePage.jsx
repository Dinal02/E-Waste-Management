import React from "react";

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-teal-700 text-white py-16 px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Responsible E-Waste Disposal for a Cleaner City
          </h1>
          <p className="mb-6">
            GreenCity Municipal Corporation provides safe and convenient
            e-waste collection services to keep our environment clean and
            healthy.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full">
            Request Pickup
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="https://via.placeholder.com/600x400"
            alt="E-waste recycling"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our E-Waste Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Doorstep Collection",
              desc: "Schedule a pickup and our team will collect your e-waste from your home or office at a time convenient for you.",
            },
            {
              title: "Safe Recycling",
              desc: "We ensure all collected e-waste is processed through certified recycling facilities following environmental guidelines.",
            },
            {
              title: "Data Security",
              desc: "Your sensitive data on old devices is securely destroyed before recycling, giving you peace of mind.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="bg-gray-200 w-16 h-16 flex items-center justify-center mb-4 text-gray-500">
                64 × 64
              </div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-teal-50">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2 mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2 mb-4"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border rounded-lg px-4 py-2 mb-4"
          ></textarea>
          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
