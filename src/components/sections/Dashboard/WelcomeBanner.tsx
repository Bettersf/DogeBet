// src/components/sections/Dashboard/WelcomeBanner.tsx
import React from "react";
import Whitepaper from "/whitepaper.pdf"; // Assuming Whitepaper.pdf is in the public folder

export function WelcomeBanner() {
  const openWhitepaper = () => {
    window.open(Whitepaper, "_blank");
  };

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-lg lg:grid lg:grid-cols-3 gap-4 lg:p-10 bg-gradient-to-br from-orange-300 via-pink-500 to-blue-500">
      <div className="lg:col-span-2 text-center lg:text-left">
        <div className="flex items-center justify-center md:justify-start">
          <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md">
          Welcome To DogeBets Casino!
          </h1>
          <img src="/wave.gif" className="h-14" alt="Gamba Logo" />
        </div>
        <p className="mt-4 text-white drop-shadow">
          A fair, simple, and decentralized casino on Solana.
        </p>
      </div>
      <div className="whitespace-nowrap grid grid-cols-2 grid-rows-2 gap-2 mt-5 md:flex md:flex-col md:mt-0 md:justify-start">
        <button
          onClick={() => window.open("https://raydium.io/swap/")}
          className="rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          Buy $DOGE
        </button>
        <button
          onClick={openWhitepaper} // Use the function to open Whitepaper
          className="rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          Whitepaper
        </button>
        <button
          onClick={() => window.open("https://dexscreener.com")}
          className="rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          Chart
        </button>
        <button
          onClick={() => window.open("https://discord.com/invite/HSTtFFwR")}
          className="rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          💬 Join Discord
        </button>
      </div>
    </div>
  );
}

export default WelcomeBanner;