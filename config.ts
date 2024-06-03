// config.ts

import { FAKE_TOKEN_MINT, useTokenMeta } from "gamba-react-ui-v2";

import { PublicKey } from "@solana/web3.js";
import { TokenMetadata } from "./types";

// Solana address you wish to receive fees
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  "EHhn38Vpcavsr1mZZyEpa4sQMCHKzPaRqyvEeMjjstds",
);

// Creator fee (in %)
export const PLATFORM_CREATOR_FEE = 0.05; // 5% (5/100 = 0.05)

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.01; // 1% (1/100 = 0.01)

// Platform URL - Appears in ShareModal
export const PLATFORM_SHARABLE_URL = "floki-bets.online";

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
  {
    mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
    name: "Jupiter",
    symbol: "JUP",
    image:
      "https://static.jup.ag/jup/icon.png",
    decimals: 6,
    baseWager: 0.01e6,
  },
  {
    mint: new PublicKey("DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"),
    name: "Bonk",
    symbol: "Bonk",
    image:
      "https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I",
    decimals: 5,
    baseWager: 0.01e5,
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
