import React from "react";

export function WelcomeBanner() {
  const openWhitepaper = () => {
    window.open("/Whitepaper.pdf", "_blank");
  };

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-lg lg:grid lg:grid-cols-3 gap-4 lg:p-10 bg-gradient-to-br from-orange-300 via-pink-500 to-blue-500 bg-opacity-50">
      <div className="lg:col-span-2 text-center lg:text-left">
        <div className="flex items-center justify-center md:justify-start">
          <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md">
            Welcome To MONKI Casino!
          </h1>
          <img src="/wave.gif" className="h-14" alt="Gamba Logo" />
        </div>
        <p className="mt-4 text-white drop-shadow">
          Take part of a unique CTO, casino added as utility!
          CA: HZKXhPGJaRUk7RDrLNjvdg871VKphcRAPeorP7HnBQAM
        </p>
      </div>
      <div className="whitespace-nowrap grid grid-cols-2 grid-rows-2 gap-2 mt-5 md:flex md:flex-col md:mt-0 md:justify-start">
        <button
          onClick={() => window.open("https://raydium.io/swap/?outputCurrency=HZKXhPGJaRUk7RDrLNjvdg871VKphcRAPeorP7HnBQAM")}
          className="rounded-lg p-3 bg-[#6b46c1] bg-opacity-50 hover:bg-[#553c9a] hover:-translate-y-0.5 transform text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          Buy $MONKI
        </button>
        <button
          onClick={() => window.open("https://twitter.com/monkionsol")}
          className="rounded-lg p-3 bg-[#6b46c1] bg-opacity-50 hover:bg-[#553c9a] hover:-translate-y-0.5 transform text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          Twitter
        </button>
        <button
          onClick={() => window.open("https://dexscreener.com/solana/e4xqrqd2ifnjphmtstsh4pavrzycygfmqqhbshxcufxj")}
          className="rounded-lg p-3 bg-[#6b46c1] bg-opacity-50 hover:bg-[#553c9a] hover:-translate-y-0.5 transform text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          Chart
        </button>
        <button
          onClick={() => window.open("https://t.me/monkicto")}
          className="rounded-lg p-3 bg-[#6b46c1] bg-opacity-50 hover:bg-[#553c9a] hover:-translate-y-0.5 transform text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          💬 Join Telegram
        </button>
      </div>
    </div>
  );
}

export default WelcomeBanner;
