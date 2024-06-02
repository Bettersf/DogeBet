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
        Welcome To $FLOKI Bets Casino. A utillity for Floki on solana CTO!
      </h1>
      <img src="/wave.gif" className="h-12" alt="Gamba Logo" />
    </div>
    <p className="mt-4 text-white font-bold drop-shadow">
      CA: NiA4syconyg4fsiKQeLEPWBBB3ykXoCccGqxMT7iX74
    </p>
  </div>
  <div className="whitespace-nowrap grid grid-cols-2 grid-rows-2 gap-2 mt-5 md:flex md:flex-col md:mt-0 md:justify-start">
    <button
      onClick={() => window.open("https://raydium.io/swap/?outputMint=NiA4syconyg4fsiKQeLEPWBBB3ykXoCccGqxMT7iX74&inputMint=sol")}
      className="rounded-lg p-3 bg-black-800 bg-opacity-75 hover:bg-black-900 hover:-translate-y-0.5 transform text-white font-bold transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
    >
      Buy $FLOKI
    </button>
    <button
      onClick={() => window.open("https://twitter.com/FlokiOnSolCTO")}
      className="rounded-lg p-3 bg-black-800 bg-opacity-75 hover:bg-gray-900 hover:-translate-y-0.5 transform text-white font-bold transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
    >
      Twitter
    </button>
    <button
      onClick={() => window.open("https://dexscreener.com/solana/J8JBUEyH5zKQv6Z39aGLYLfVfUR5CxcyzwkgadqJbrsx")}
      className="rounded-lg p-3 bg-black-800 bg-opacity-75 hover:bg-gray-900 hover:-translate-y-0.5 transform text-white font-bold transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
    >
      Chart
    </button>
    <button
      onClick={() => window.open("https://t.me/FlokiSolCt0")}
      className="rounded-lg p-3 bg-black-800 bg-opacity-75 hover:bg-gray-900 hover:-translate-y-0.5 transform text-white font-bold transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
    >
      💬 Join Telegram
    </button>
  </div>
</div>
  );
}

export default WelcomeBanner;
