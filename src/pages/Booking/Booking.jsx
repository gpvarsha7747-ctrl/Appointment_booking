import React, { useState } from "react";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Booking Data:", formData);
    alert("🎉 Appointment Booked Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 flex flex-col items-center justify-center p-6">
      {/* Step Indicator */}
      <div className="flex justify-center gap-4 mb-10">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-all duration-300 ${
              step === num
                ? "bg-purple-500 text-white shadow-lg scale-110"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {num}
          </div>
        ))}
      </div>

      {/* Booking Card */}
      <div className="bg-white shadow-[0_0_25px_rgba(168,85,247,0.6)] rounded-2xl p-8 w-full max-w-md transition-all duration-500">
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Select Appointment Date
            </h2>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
            <div className="flex justify-end">
              <button
                disabled={!formData.date}
                onClick={nextStep}
                className={`px-6 py-2 rounded-lg text-white font-semibold transition ${
                  formData.date
                    ? "bg-purple-500 hover:bg-purple-600"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Choose Time Slot
            </h2>
            <select
              value={formData.time}
              onChange={(e) => handleChange("time", e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            >
              <option value="">Select a Time</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>12:30 PM</option>
              <option>2:00 PM</option>
              <option>3:30 PM</option>
              <option>5:00 PM</option>
            </select>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                ← Back
              </button>
              <button
                disabled={!formData.time}
                onClick={nextStep}
                className={`px-6 py-2 rounded-lg text-white font-semibold transition ${
                  formData.time
                    ? "bg-purple-500 hover:bg-purple-600"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Enter Your Details
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />

            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                ← Back
              </button>
              <button
                disabled={
                  !formData.name || !formData.phone || !formData.email
                }
                onClick={handleSubmit}
                className={`px-6 py-2 rounded-lg text-white font-semibold transition ${
                  formData.name && formData.phone && formData.email
                    ? "bg-purple-500 hover:bg-purple-600"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
