import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Step1Gender from "./Step1Gender";

import {
  fetchGenders,
  fetchUserDetails,
  submitBooking,
  clearSuccess,
} from "../../redux/Slice/bookingSlice";

export default function Booking() {
   const dispatch = useDispatch();
  const { genders, user, successMessage, error } = useSelector(
    (state) => state.booking
  );
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: "",
    date: "",
    time: "",
    username: "",
    contact: "",
    email: "",
  });

   useEffect(() => {
    dispatch(fetchGenders());
    dispatch(fetchUserDetails());
  }, [dispatch]);

   // Pre-fill from user table
  useEffect(() => {
    if (user?.username || user?.email) {
      setFormData((prev) => ({
        ...prev,
        username: user.username || "",
        contact: user.contact || "",
        email: user.email || "",
        date: user.date || "",
        time: user.time || "",
      }));
    }
  }, [user]);

  

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    dispatch(submitBooking(formData));
  };

  useEffect(() => {
    if (successMessage) {
      alert(successMessage);
      dispatch(clearSuccess());
    }
  }, [successMessage, dispatch]);

  return (
     <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 flex flex-col items-center justify-center p-6">
      {/* Step Indicator */}
      <div className="flex justify-center gap-4 mb-10">
        {[1, 2, 3, 4].map((num) => (
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

      <div className="bg-white shadow-[0_0_25px_rgba(168,85,247,0.6)] rounded-2xl p-8 w-full max-w-md transition-all duration-500">
        {step === 1 && (
          <Step1Gender
            genders={genders}
            formData={formData}
            onChange={handleChange}
            onNext={nextStep}
          />
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">
              Select Date
            </h2>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mb-4"
            />
            <div className="flex justify-between">
              <button onClick={prevStep} className="btn btn-outline">
                ← Back
              </button>
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

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">
              Select Time
            </h2>
            <select
              value={formData.time}
              onChange={(e) => handleChange("time", e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mb-4"
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
              <button onClick={prevStep} className="btn btn-outline">
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

        {step === 4 && (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">
              Enter Your Details
            </h2>
            <input
              type="text"
              value={formData.username}
              placeholder="Username"
              onChange={(e) => handleChange("username", e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 bg-gray-100"
            />
            <input
              type="email"
              value={formData.email}
              placeholder="Email"
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 bg-gray-100"
            />
            <input
              type="tel"
              value={formData.contact}
              placeholder="Contact"
              onChange={(e) => handleChange("contact", e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 bg-gray-100"
            />
            <div className="flex justify-between">
              <button onClick={prevStep} className="btn btn-outline">
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Book Now
              </button>
            </div>
          </div>
        )}

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
}
