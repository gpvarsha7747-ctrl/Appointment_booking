import React, { useState } from "react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("female");

  const femaleServices = [
    "Haircut & Styling",
    "Hair Spa",
    "Hair Coloring & Highlights",
    "Keratin / Smoothening / Straightening",
    "Facials & Clean-ups",
    "Waxing & Threading",
    "Manicure & Pedicure",
    "Bridal & Party Makeup",
    "Nail Extensions & Art",
  ];

  const maleServices = [
    "Haircut & Styling",
    "Beard Trimming & Styling",
    "Hair Coloring / Grey Coverage",
    "Facials & Clean-ups",
    "De-tan & Bleach",
    "Hair Spa & Scalp Massage",
    "Manicure & Pedicure",
    "Head & Shoulder Massage",
  ];

  const servicesToShow = activeTab === "female" ? femaleServices : maleServices;

  return (
    <>
    
      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Our <span className="text-pink-400">Salon Services</span>
          </h1>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Discover our range of professional beauty and grooming services designed
            to help you look and feel your best.
          </p>

          {/* ---------- Toggle Buttons ---------- */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveTab("female")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "female"
                  ? "bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-md"
                  : "bg-white text-gray-600 border border-pink-300 hover:bg-pink-50"
              }`}
            >
              Services for Women
            </button>
            <button
              onClick={() => setActiveTab("male")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "male"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-md"
                  : "bg-white text-gray-600 border border-blue-300 hover:bg-blue-50"
              }`}
            >
              Services for Men
            </button>
          </div>

          {/* ---------- Services Cards ---------- */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicesToShow.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service}
                </h3>
                <p className="text-gray-500 text-sm">
                  Experience the best {service.toLowerCase()} service performed by
                  our trained professionals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
