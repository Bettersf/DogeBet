// config.ts

import { FAKE_TOKEN_MINT, useTokenMeta } from "gamba-react-ui-v2";

import { PublicKey } from "@solana/web3.js";
import { TokenMetadata } from "./types";

// Solana address you wish to receive fees
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  "8aMbqzYBu7PStyQMy3axeZhxJ4gtaTFk9xoQ1ZVwsGKw",
);

// Creator fee (in %)
export const PLATFORM_CREATOR_FEE = 0.05; // 5% (5/100 = 0.05)

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.01; // 1% (1/100 = 0.01)

// Platform URL - Appears in ShareModal
export const PLATFORM_SHARABLE_URL = "dogebets.casino";

// Toggle all live events acrossed gamba toast (true = on, false = off)
export const LIVE_EVENT_TOAST = true;

// Platform explorer URL - Appears in welcome banner (can be changed for if you have cusotm explorer)
export const PLATFORM_EXPLORER_URL = `https://explorer.gamba.so/platform/${PLATFORM_CREATOR_ADDRESS.toString()}`;

// Supported tokens
export const TOKENLIST = [
  // SOL
  {
    mint: new PublicKey("So11111111111111111111111111111111111111112"),
    name: "Solana",
    symbol: "SOL",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // USDC
  {
    mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    name: "USD Coin",
    symbol: "USDC",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  // ADD NEW TOKENS HERE
  // USE TOKEN LAYOUT FOR LAYOUT STRUCTURE
  // {
  //   mint: new PublicKey(""),
  //   name: "",
  //   symbol: "",
  //   image: "",
  //   decimals: 0,
  //   baseWager: 0,
  // },
];
