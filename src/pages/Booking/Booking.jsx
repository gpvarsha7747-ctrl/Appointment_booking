import React, { useState } from "react";
import Step1Gender from "./Step1Gender";
import Step2Category from "./Step2Category";
import Step3Date from "./Step3Date";
import Step4Time from "./Step4Time";
import Step5Customer from "./Step5Customer";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: "",
    category: "",
    stylist: "",
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
    alert("Appointment Booked Successfully!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-8">
      {/* Step Indicator */}
      <div className="flex justify-center gap-4 mb-8">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
              step === num
                ? "bg-pink-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {num}
          </div>
        ))}
      </div>

      {/* Step Components */}
      {step === 1 && (
        <Step1Gender
          formData={formData}
          onChange={handleChange}
          onNext={nextStep}
        />
      )}
      {step === 2 && (
        <Step2Category
          formData={formData}
          onChange={handleChange}
          onNext={nextStep}
          onPrev={prevStep}
        />
      )}
      {step === 3 && (
        <Step3Date
          formData={formData}
          onChange={handleChange}
          onNext={nextStep}
          onPrev={prevStep}
        />
      )}
      {step === 4 && (
        <Step4Time
          formData={formData}
          onChange={handleChange}
          onNext={nextStep}
          onPrev={prevStep}
        />
      )}
      {step === 5 && (
        <Step5Customer
          formData={formData}
          onChange={handleChange}
          onPrev={prevStep}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
