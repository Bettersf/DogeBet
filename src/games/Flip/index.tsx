// src/games/Flip/index.tsx

import { Coin, TEXTURE_HEADS, TEXTURE_TAILS } from "./Coin";
import { GambaUi, useCurrentToken, useSound } from "gamba-react-ui-v2";

import { Canvas } from "@react-three/fiber";
import { Effect } from "./Effect";
import React from "react";
import { useGamba } from "gamba-react-v2";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const SIDES = {
  heads: [2, 0],
  tails: [0, 2],
};

const SOUND_COIN = "/games/flip/coin.mp3";
const SOUND_WIN = "/games/flip/win.mp3";
const SOUND_LOSE = "/games/flip/lose.mp3";

type Side = keyof typeof SIDES;

function Flip() {
  const game = GambaUi.useGame();
  const token = useCurrentToken();
  const gamba = useGamba();
  const [flipping, setFlipping] = React.useState(false);
  const [win, setWin] = React.useState(false);
  const [resultIndex, setResultIndex] = React.useState(0);
  const [side, setSide] = React.useState<Side>("heads");

  const walletModal = useWalletModal();
  const wallet = useWallet();

  const connect = () => {
    if (wallet.wallet) {
      wallet.connect();
    } else {
      walletModal.setVisible(true);
    }
  };

  const WAGER_OPTIONS = [1, 5, 10, 50, 100].map((x) => x * token.baseWager);

  const [wager, setWager] = React.useState(WAGER_OPTIONS[0]);

  const sounds = useSound({
    coin: SOUND_COIN,
    win: SOUND_WIN,
    lose: SOUND_LOSE,
  });

  const play = async () => {
    try {
      setWin(false);
      setFlipping(true);

      sounds.play("coin", { playbackRate: 0.5 });

      await game.play({
        bet: SIDES[side],
        wager,
        metadata: [side],
      });

      sounds.play("coin");

      const result = await gamba.result();

      const win = result.payout > 0;

      setResultIndex(result.resultIndex);

      setWin(win);

      if (win) {
        sounds.play("win");
      } else {
        sounds.play("lose");
      }
    } finally {
      setFlipping(false);
    }
  };

  return (
    <>
      <GambaUi.Portal target="screen">
        <Canvas
          linear
          flat
          orthographic
          camera={{
            zoom: 80,
            position: [0, 0, 100],
          }}
        >
          <React.Suspense fallback={null}>
            <Coin result={resultIndex} flipping={flipping} />
          </React.Suspense>
          <Effect color="white" />

          {flipping && <Effect color="white" />}
          {win && <Effect color="#42ff78" />}
          <ambientLight intensity={3} />
          <directionalLight
            position-z={1}
            position-y={1}
            castShadow
            color="#CCCCCC"
          />
          <hemisphereLight
            intensity={0.5}
            position={[0, 1, 0]}
            scale={[1, 1, 1]}
            color="#ffadad"
            groundColor="#6666fe"
          />
        </Canvas>
      </GambaUi.Portal>
      <GambaUi.Portal target="controls">
        <GambaUi.Button
          disabled={gamba.isPlaying}
          onClick={() => setSide(side === "heads" ? "tails" : "heads")}
        >
          <div style={{ display: "flex" }}>
            <img
              width={32}
              src={side === "heads" ? TEXTURE_HEADS : TEXTURE_TAILS}
            />
            <div className="flex justify-center items-center">
              {side === "heads" ? "Heads" : "Tails"}
            </div>
          </div>
        </GambaUi.Button>
        <GambaUi.WagerInput value={wager} onChange={setWager} />

        {wallet.connected ? (
          <GambaUi.PlayButton onClick={play}>Flip</GambaUi.PlayButton>
        ) : (
          <GambaUi.Button main onClick={connect}>
            Play
          </GambaUi.Button>
        )}
      </GambaUi.Portal>
    </>
  );
}

export default Flip;
