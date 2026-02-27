"use client";

import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = "https://wa.me/919595073539";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {hovered && (
        <div className="bg-forest text-offwhite text-xs font-lato font-400 px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-200">
          Chat with us on WhatsApp
          <div className="absolute bottom-[-5px] right-4 w-2.5 h-2.5 bg-forest rotate-45" />
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="pulse-ring relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat with us on WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
        >
          <path d="M16.002 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.37.638 4.592 1.748 6.51L2.667 29.333l6.99-1.724A13.28 13.28 0 0016.002 29.333C23.366 29.333 29.333 23.366 29.333 16c0-7.362-5.967-13.333-13.331-13.333zm0 2.4c6.03 0 10.933 4.905 10.933 10.933 0 6.03-4.903 10.933-10.933 10.933a10.89 10.89 0 01-5.529-1.504l-.388-.232-4.152 1.023 1.054-4.03-.255-.41a10.88 10.88 0 01-1.663-5.78C5.07 10.972 9.972 5.067 16.002 5.067zm-3.285 5.267c-.2 0-.525.075-.8.375-.274.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.1 3.2 5.1 4.375 2.55 1 3 .8 3.525.75s1.7-.7 1.94-1.375c.24-.675.24-1.25.167-1.375-.075-.125-.275-.2-.575-.35-.3-.15-1.7-.84-1.965-.935-.265-.1-.458-.15-.65.15-.195.3-.75.935-.918 1.125-.17.19-.337.213-.637.063-.3-.15-1.265-.466-2.41-1.485-.892-.794-1.493-1.774-1.668-2.074-.175-.3-.019-.462.132-.611.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.65-1.564-.9-2.14-.237-.562-.48-.484-.65-.493-.168-.008-.363-.01-.558-.01z" />
        </svg>
      </a>
    </div>
  );
}
