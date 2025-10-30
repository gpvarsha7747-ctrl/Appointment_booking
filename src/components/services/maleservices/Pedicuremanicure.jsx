import React from 'react'
import { FaHandSparkles, FaSpa, FaLeaf, FaGem } from "react-icons/fa";
import { addToCart } from "../../../utils/cart";
import { useNavigate } from 'react-router-dom';
const MalePedicuremanicure = () => {
  const navigate = useNavigate();
   const services = [
    {
      id: 1,
      name: "Classic Manicure",
      desc: "Revitalize your hands with cleansing, shaping, and soothing massage for soft and smooth skin.",
      img: "https://plus.unsplash.com/premium_photo-1661290231745-15f1ed6fea88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xhc3NpYyUyMG1hbmljdXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      icon: <FaHandSparkles className="text-pink-500 text-3xl" />,
      price: "₹599",
    },
    {
      id: 2,
      name: "French Pedicure",
      desc: "A luxurious foot treatment with exfoliation, massage, and moisturizing mask for ultimate relaxation.",
      img: "https://media.istockphoto.com/id/1308841863/photo/beautician-washing-woman-feet-for-pedicure-treatment.webp?a=1&b=1&s=612x612&w=0&k=20&c=cjK_gR0jZWWlecfXl5Xls2XHaC6zHHa3BaZ3MKiTfxE=",
      icon: <FaSpa className="text-yellow-500 text-3xl" />,
      price: "₹899",
    },
    {
      id: 3,
      name: "Sports Pedicure",
      desc: "A foot treatment designed for people with active lifestyles, focusing on foot health and stress relief rather than just aesthetics",
      img: "",
      icon: <FaGem className="text-blue-500 text-3xl" />,
      price: "₹1299",
    },
    {
      id: 4,
      name: "Herbal Spa Therapy",
      desc: "Indulge in a natural herbal soak with essential oils to relax, detoxify, and rejuvenate tired hands and feet.",
      img: "https://media.istockphoto.com/id/1479350890/photo/relax-spa-and-zen-woman-with-candles-for-beauty-physical-therapy-or-skincare-female-client-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=oXOwNHuQcblCbgBast8nf6wPa05M_PreLOTw9MXPtk0=",
      icon: <FaLeaf className="text-green-500 text-3xl" />,
      price: "₹999",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 py-16 px-6">
      {/* ---- Header ---- */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
           Pedicure & Manicure Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Treat your hands and feet to a luxurious spa experience — because every detail of you deserves to glow.
        </p>
      </div>

      {/* ---- Service Cards ---- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-3 left-3">{item.icon}</div>
            </div>

            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
              <div className="text-lg font-semibold text-pink-600 mb-3">
                {item.price}
              </div>
              <button
                onClick={() => {
                  addToCart({ id: item.id, name: item.name, price: item.price, category: 'mani-pedi' });
                  navigate('/booking');
                }}
                className="px-5 py-2 bg-gradient-to-r from-pink-500 to-red-400 text-white rounded-full hover:scale-105 transition-all"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ---- CTA Section ---- */}
      <div className="mt-20 bg-gradient-to-r from-pink-500 to-red-400 text-white text-center py-12 rounded-3xl shadow-lg max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Pamper Yourself from Tip to Toe ✨</h2>
        <p className="mb-6 text-pink-100">
          Book your relaxing pedicure & manicure session and feel the transformation today!
        </p>
        <button className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full hover:bg-pink-100 transition-all">
          Book Appointment
        </button>
      </div>
    </div>
  )
}

export default MalePedicuremanicure