import React from 'react'
import { FaHandSparkles, FaSpa, FaLeaf, FaGem, FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../../../utils/cart";
import { useNavigate } from 'react-router-dom';
const maniPediServices  = [
 {
       id: 1,
       name: "Classic Manicure",
       desc: "Revitalize your hands with cleansing, shaping, and soothing massage for soft and smooth skin.",
       img: "https://images.unsplash.com/photo-1596464716121-7a5ceceb83f1?auto=format&fit=crop&w=800&q=80",
  icon: <FaHandSparkles className="text-purple-500 text-3xl" />,
       price: "₹599",
     },
     {
       id: 2,
       name: "Luxury Pedicure",
       desc: "A luxurious foot treatment with exfoliation, massage, and moisturizing mask for ultimate relaxation.",
       img: "https://images.unsplash.com/photo-1622295024183-47c2e8a27f83?auto=format&fit=crop&w=800&q=80",
       icon: <FaSpa className="text-yellow-500 text-3xl" />,
       price: "₹899",
     },
     {
       id: 3,
      name: "Gel Polish Manicure",
      desc: "Durable, glossy finish for both hands and feet. Perfect for long-lasting style and shine.",
      img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2VsJTIwcG9saXNofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      icon: <FaGem className="text-blue-500 text-3xl" />,
      price: "₹1299",
     },
     {
       id: 4,
       name: "Herbal Spa Therapy",
       desc: "Indulge in a natural herbal soak with essential oils to relax, detoxify, and rejuvenate tired hands and feet.",
       img: "https://images.unsplash.com/photo-1616394584738-54e73e0c0ef8?auto=format&fit=crop&w=800&q=80",
       icon: <FaLeaf className="text-green-500 text-3xl" />,
       price: "₹999",
     },
       {
       id: 3,
       name: "Express Manicure",
       desc: "Quick clean-up and nail shaping for a tidy appearance.",
       img: "https://images.unsplash.com/photo-1622295024350-7a7db8416d3a?auto=format&fit=crop&w=800&q=80",
       icon: <FaGem className="text-blue-500 text-3xl" />,
       price: "₹1299",
     },
     {
       id: 4,
       name: "Hydrating Manicure",
       desc: "Moisturizing treatment to prevent dry or cracked skin.",
       img: "https://images.unsplash.com/photo-1616394584738-54e73e0c0ef8?auto=format&fit=crop&w=800&q=80",
       icon: <FaLeaf className="text-green-500 text-3xl" />,
       price: "₹999",
     },
     {
       id: 3,
       name: "Classic Pedicure",
       desc: " A treatment for Nail trimming, cuticle cleanup, and buffing for neat, clean hands.",
       img: "https://images.unsplash.com/photo-1622295024350-7a7db8416d3a?auto=format&fit=crop&w=800&q=80",
       icon: <FaGem className="text-blue-500 text-3xl" />,
       price: "₹1299",
     },
     {
       id: 4,
       name: "Paraffin Pedicure",
       desc: "A treatment from warm paraffin wax dip after exfoliation and massage.",
       img: "https://images.unsplash.com/photo-1616394584738-54e73e0c0ef8?auto=format&fit=crop&w=800&q=80",
       icon: <FaLeaf className="text-green-500 text-3xl" />,
       price: "₹999",
     },
];



const Pedicuremanicure = () => {
  const navigate = useNavigate();
  return (
  <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 py-16 px-6">
      {/* ---- Header ---- */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          💅 Pedicure & Manicure Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Treat your hands and feet to a luxurious spa experience — because every detail of you deserves to glow.
        </p>
      </div>

      {/* ---- Service Cards ---- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {maniPediServices.map((item) => (
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
              <div className="text-lg font-semibold text-purple-600 mb-3">
                {item.price}
              </div>
              <button
                onClick={() => {
                  addToCart({ id: item.id, name: item.name, price: item.price, category: 'mani-pedi' });
                  navigate('/booking');
                }}
                className="px-5 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <FaShoppingCart className="text-lg" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ---- CTA Section ---- */}
      <div className="mt-20 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-12 rounded-3xl shadow-lg max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Pamper Yourself from Tip to Toe ✨</h2>
        <p className="mb-6 text-purple-100">
          Book your relaxing pedicure & manicure session and feel the transformation today!
        </p>
        {/* <button className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full hover:bg-pink-100 transition-all flex items-center gap-2 mx-auto">
          <FaShoppingCart className="text-lg" />
          Add Services to Cart
        </button> */}
      </div>
    </div>
  )
  
}

export default Pedicuremanicure