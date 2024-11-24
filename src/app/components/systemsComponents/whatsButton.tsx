import Link from "next/link";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const WhatsButton = () => {
  return (
    <Link
      href="https://wa.me/5553999097340?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20Harmony%20Clinic%20Bag%C3%A9..."
      target="_blank"
      className="fixed z-50 bottom-10 right-10 bg-green-500 text-white p-2 rounded-full 
      shadow-lg hover:bg-green-600 transition duration-300 ease-in-out sm:bottom-10 sm:right-10"
    >
      <IoLogoWhatsapp
      className="text-2xl sm:text-4xl" />
    </Link>
  );
};

export default WhatsButton;