import React, { useEffect } from "react";

// src/pages/index.tsx
import Dashboard from "@/components/sections/Dashboard/Dashboard";
import Head from "next/head";
import Header from "@/components/layout/Header";
import RecentPlays from "@/components/sections/RecentPlays/RecentPlays";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Shiba Inu - $SHIB</title>
        <meta name="title" content="Shiba Inu - $SHIB" />
        <meta
          name="description"
          content="A fair, simple, and decentralized casino on Solana."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dogebets.casino" />
        <meta
          property="og:title"
          content="Shiba Inu - $SHIB"
        />
        <meta
          property="og:description"
          content="A fair, simple, and decentralized casino on Solana."
        />
        <meta
          property="og:image"
          content="https://static.wixstatic.com/media/998431_71247210a0ea47a6a6fd67f5765f8927~mv2.png/v1/fill/w_990,h_986,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/shib-gr.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dogebets.casino"
        />
        <meta
          property="twitter:title"
          content="Shiba Inu - $SHIB"
        />
        <meta
          property="twitter:description"
          content="A fair, simple, and decentralized casino on Solana."
        />
        <meta
          property="twitter:image"
          content="https://static.wixstatic.com/media/998431_71247210a0ea47a6a6fd67f5765f8927~mv2.png/v1/fill/w_990,h_986,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/shib-gr.png"
        />
      </Head>
      <Header />
      <div className="relative mx-auto flex flex-col gap-5 mt-20 pb-10 px-2.5 transition-all duration-250 ease-in-out sm:px-5 sm:pt-5 md:max-w-6xl">
        <Dashboard />
        <h2 className="text-2xl font-bold text-center">Recent Plays</h2>
        <RecentPlays />
      </div>
    </>
  );
}
