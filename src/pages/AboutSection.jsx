import React from "react";
import { useNavigate } from "react-router-dom";
const AboutSection = () => {
    const navigate = useNavigate();
  return (
    <section
      id="about"
      className="bg-white text-gray-800 py-24 px-6 border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* ---------- Left Image ---------- */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
            alt="Team working"
            className="rounded-2xl shadow-2xl w-full max-w-md"
          />
        </div>

        {/* ---------- Right Content ---------- */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-pink-600">
            About <span className="text-pink-500">Us</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a passionate team of developers dedicated to crafting modern,
            user-centric web solutions. Our goal is to empower businesses and
            individuals to bring their digital ideas to life through clean,
            scalable, and efficient code.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From responsive front-end interfaces to complex full-stack
            applications, we focus on performance, design, and functionality to
            deliver seamless experiences.
          </p>

          <button  onClick={() => navigate("/about")}
            className="mt-4 bg-gradient-to-r from-pink-600 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-md"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
