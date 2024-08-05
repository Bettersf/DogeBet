import React from "react";

export function WelcomeBanner() {
  const openWhitepaper = () => {
    window.open("/Whitepaper.pdf", "_blank");
  };

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-lg lg:grid lg:grid-cols-3 gap-4 lg:p-10 bg-black bg-opacity-80">
  <div className="lg:col-span-2 text-center lg:text-left">
    <div className="flex items-center justify-center md:justify-start">
      <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md">
        Welcome To $SHIB Casino
      </h1>
      <img src="/icon-192.png" className="h-12" alt="Gamba Logo" />
    </div>
    <p className="mt-4 text-white font-bold drop-shadow">
      CA: AyX9ETMfYzM7MLBE6DVDsJzmAQokcQUcJqKxtSMs5HKh
    </p>
  </div>
  <div className="whitespace-nowrap grid grid-cols-2 grid-rows-2 gap-2 mt-5 md:flex md:flex-col md:mt-0 md:justify-start">
    <button
      onClick={() => window.open("https://raydium.io/swap/?outputMint=AyX9ETMfYzM7MLBE6DVDsJzmAQokcQUcJqKxtSMs5HKh&inputMint=sol")}
      className="rounded-lg p-3 bg-black-800 bg-opacity-75 hover:bg-gray-900 hover:-translate-y-0.5 transform text-white font-bold transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
    >
      Buy $SHIB
    </button>
    <button
      onClick={() => window.open("https://x.com/shibainulfg")}
      className="rounded-lg p-3 bg-black-800 bg-opacity-75 hover:bg-gray-900 hover:-translate-y-0.5 transform text-white font-bold transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
    >
      Twitter
    </button>
    <button
      onClick={() => window.open("https://dexscreener.com/solana/9xyfmkfih3hjhaacxhpkhvzc99nzdpstkofuytbofxkt")}
      className="rounded-lg p-3 bg-black-800 bg-opacity-75 hover:bg-gray-900 hover:-translate-y-0.5 transform text-white font-bold transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
    >
      Chart
    </button>
    <button
      onClick={() => window.open("https://t.me/shibainulfg")}
      className="rounded-lg p-3 bg-black-800 bg-opacity-75 hover:bg-gray-900 hover:-translate-y-0.5 transform text-white font-bold transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
    >
      💬 Join Telegram
    </button>
  </div>
</div>
  );
}

export default WelcomeBanner;
