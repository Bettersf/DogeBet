// src/components/sections/Dashboard/WelcomeBanner.tsx
import React from "react";

export function WelcomeBanner() {
  const openWhitepaper = () => {
    window.open("/Whitepaper.pdf", "_blank");
  };

  return (
    <div
      className="relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-lg lg:grid lg:grid-cols-3 gap-4 lg:p-10 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/background.png')`, // Path to your background image
        backgroundSize: "contain", // Adjust background size to contain
        backgroundPosition: "center", // Center the background image
      }}
    >
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
          className="rounded-lg p-3 bg-purple-500 bg-opacity-50 hover:bg-purple-700 hover:-translate-y-0.5 transform text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          Buy $DOGE
        </button>
        <button
          onClick={openWhitepaper} // Use the function to open Whitepaper
          className="rounded-lg p-3 bg-purple-500 bg-opacity-50 hover:bg-purple-700 hover:-translate-y-0.5 transform text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          Whitepaper
        </button>
        <button
          onClick={() => window.open("https://dexscreener.com")}
          className="rounded-lg p-3 bg-purple-500 bg-opacity-50 hover:bg-purple-700 hover:-translate-y-0.5 transform text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          Chart
        </button>
        <button
          onClick={() => window.open("https://t.me/DogeBetsSol")}
          className="rounded-lg p-3 bg-purple-500 bg-opacity-50 hover:bg-purple-700 hover:-translate-y-0.5 transform text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          💬 Join Telegram
        </button>
      </div>
    </div>
  );
}

export default WelcomeBanner;
