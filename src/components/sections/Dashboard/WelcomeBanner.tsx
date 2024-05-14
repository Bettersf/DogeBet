import React from "react";

export function WelcomeBanner() {
  const openWhitepaper = () => {
    window.open("/Whitepaper.pdf", "_blank");
  };

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-lg lg:grid lg:grid-cols-3 gap-4 lg:p-10 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 bg-opacity-50">
  <div className="lg:col-span-2 text-center lg:text-left">
    <div className="flex items-center justify-center md:justify-start">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 drop-shadow-md">
        Welcome To $GEOG Woshingtun Casino
      </h1>
      <img src="/wave.gif" className="h-14" alt="Gamba Logo" />
    </div>
    <p className="mt-4 text-gray-800 drop-shadow">
      CA: FXwCaUML71j3BzCdwE79Aww3ghvPZPgcL74UY9gNhwP9
    </p>
  </div>
  <div className="whitespace-nowrap grid grid-cols-2 grid-rows-2 gap-2 mt-5 md:flex md:flex-col md:mt-0 md:justify-start">
    <button
      onClick={() => window.open("https://raydium.io/swap/?outputCurrency=FXwCaUML71j3BzCdwE79Aww3ghvPZPgcL74UY9gNhwP9")}
      className="rounded-lg p-3 bg-gray-500 bg-opacity-50 hover:bg-gray-600 hover:-translate-y-0.5 transform text-gray-800 transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
    >
      Buy $GEOG
    </button>
    <button
      onClick={() => window.open("https://twitter.com/woshigtunCTO")}
      className="rounded-lg p-3 bg-gray-500 bg-opacity-50 hover:bg-gray-600 hover:-translate-y-0.5 transform text-gray-800 transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
    >
      Twitter
    </button>
    <button
      onClick={() => window.open("https://dexscreener.com/solana/FXwCaUML71j3BzCdwE79Aww3ghvPZPgcL74UY9gNhwP9?utm_source=fluxbot&id=1715539840")}
      className="rounded-lg p-3 bg-gray-500 bg-opacity-50 hover:bg-gray-600 hover:-translate-y-0.5 transform text-gray-800 transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
    >
      Chart
    </button>
    <button
      onClick={() => window.open("https://t.me/GeogWoshigtunCTO")}
      className="rounded-lg p-3 bg-gray-500 bg-opacity-50 hover:bg-gray-600 hover:-translate-y-0.5 transform text-gray-800 transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
    >
      💬 Join Telegram
    </button>
  </div>
</div>
  );
}

export default WelcomeBanner;
