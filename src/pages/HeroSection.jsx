import React from "react";
// import { ArrowRight } from "lucide-react";
import { Scissors, Sparkles } from "lucide-react";

import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    // <section id="hero" className="relative">
    //   <Navbar />
    //   <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white min-h-[90vh] flex items-center">
    //     <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-32">
    //       {/* ---------- Left Content ---------- */}
    //       <div className="text-center md:text-left max-w-xl">
    //         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
    //           Empower Your Ideas with{" "}
    //           <span className="text-pink-300">Modern Web Solutions</span>
    //         </h1>
    //         <p className="text-lg text-gray-100 mb-8">
    //           Build responsive, user-friendly, and high-performance web
    //           applications using the latest technologies.
    //         </p>

    //         <div className="flex justify-center md:justify-start gap-4">
    //           <button className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
    //             Get Started <ArrowRight size={18} />
    //           </button>

    //           <button
    //             onClick={handleScroll}
    //             className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
    //           >
    //             Learn More
    //           </button>
    //         </div>
    //       </div>

    //       {/* ---------- Right Image ---------- */}
    //       <div className="w-full md:w-1/2 flex justify-center">
    //         <img
    //           src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80"
    //           alt="Hero Illustration"
    //           className="rounded-2xl shadow-2xl w-full max-w-md"
    //         />
    //       </div>
    //     </div>
    //   </div>
      
    // </section>

    <section id="hero" className="relative">


      {/* ---------- HERO BACKGROUND ---------- */}
      <div className="bg-gradient-to-r from-pink-100 via-pink-200 to-rose-300 min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-28">
          
          {/* ---------- LEFT CONTENT ---------- */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800 mb-6">
              Discover Your True Beauty with{" "}
              <span className="text-pink-600">GlowUp Salon</span>
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              Pamper yourself with our professional hair, skin, and beauty
              services. Experience luxury, relaxation, and confidence — all in
              one place.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <button className="flex items-center gap-2 bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-pink-700 hover:scale-105 transition-all duration-300"
               onClick={() => navigate("/register")}>
                <Scissors size={18} />
                Book Appointment
              </button>

              <button
                onClick={() => navigate("/about")}
                className="border border-pink-600 text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                View Services
              </button>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src=""
              alt="Salon Experience"
              className="rounded-2xl shadow-2xl w-full max-w-md border-4 border-pink-200"
            />
          </div>
        </div>
      </div>

      {/* ---------- FLOATING ICON ---------- */}
      <div className="absolute bottom-6 right-6 bg-white p-3 rounded-full shadow-lg">
        <Sparkles size={24} className="text-pink-600" />
      </div>
    </section>
  );
};

export default HeroSection;
