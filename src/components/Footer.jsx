import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-auto">
      <p className="text-sm">
        © {new Date().getFullYear()} Appointment Booking App. All rights reserved.
      </p>
    </footer>
  );
}