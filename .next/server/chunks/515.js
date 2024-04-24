"use strict";
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 9927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VT": () => (/* binding */ TEXTURE_HEADS),
/* harmony export */   "WJ": () => (/* binding */ TEXTURE_TAILS),
/* harmony export */   "sN": () => (/* binding */ Coin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__);
// src/games/Flip/Coin.tsx




const MODEL_COIN = "/games/flip/Coin.glb";
const TEXTURE_HEADS = "/games/flip/heads.png";
const TEXTURE_TAILS = "/games/flip/tails.png";
function CoinModel() {
    // Use the `useGLTF` and `useTexture` hooks with the paths
    const { nodes  } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF)(MODEL_COIN);
    const [heads, tails] = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useTexture)([
        TEXTURE_HEADS,
        TEXTURE_TAILS
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("primitive", {
                object: nodes.Coin
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("mesh", {
                "position-z": 0.3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("planeGeometry", {
                        args: [
                            1.3,
                            1.3
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshStandardMaterial", {
                        transparent: true,
                        map: heads
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("group", {
                "rotation-y": Math.PI,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("mesh", {
                    "position-z": 0.3,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("planeGeometry", {
                            args: [
                                1.3,
                                1.3
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshStandardMaterial", {
                            transparent: true,
                            map: tails
                        })
                    ]
                })
            })
        ]
    });
}
function Coin({ flipping , result  }) {
    const group = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const target = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!flipping && group.current) {
            const fullTurns = Math.floor(group.current.rotation.y / (Math.PI * 2));
            target.current = (fullTurns + 1) * Math.PI * 2 + result * Math.PI;
        }
    }, [
        flipping,
        result
    ]);
    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)((state, dt)=>{
        if (group.current) {
            if (flipping) {
                group.current.rotation.y += 25 * dt;
            } else {
                const clamp = (value, min, max)=>Math.min(Math.max(value, min), max);
                group.current.rotation.y += clamp((target.current - group.current.rotation.y) * 10 * dt, 0, 1);
            }
            const scale = flipping ? 1.25 : 1;
            group.current.scale.y += (scale - group.current.scale.y) * 0.1;
            group.current.scale.setScalar(group.current.scale.y);
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("group", {
        ref: group,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CoinModel, {})
    });
}
_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF.preload(MODEL_COIN);



/***/ }),

/***/ 9293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ Effect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2949);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_1__]);
three__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/games/Flip/Effect.tsx





const tmp = new three__WEBPACK_IMPORTED_MODULE_1__.Object3D();
const TEXTURE_STAR = "/games/flip/star.png";
const STARS = 10;
const Effect = ({ color  })=>{
    const texture = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useTexture)(TEXTURE_STAR);
    const mesh = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
    const animation = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(0);
    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)(()=>{
        for(let i = 0; i < STARS; i++){
            const angle = i / STARS * Math.PI * 2;
            const ssss = 0.5 + (1 + Math.cos(i)) * 2;
            tmp.rotation.z = i + Date.now() * 0.001;
            tmp.scale.setScalar(ssss * animation.current * 1 * (1 - animation.current));
            const len = 1 + 2 * animation.current;
            tmp.position.set(Math.cos(angle) * len, Math.sin(angle) * len, 0);
            tmp.updateMatrix();
            mesh.current.setMatrixAt(i, tmp.matrix);
        }
        mesh.current.instanceMatrix.needsUpdate = true;
        animation.current += (1 - animation.current) * 0.1;
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("instancedMesh", {
        ref: mesh,
        args: [
            undefined,
            undefined,
            STARS
        ],
        "position-z": -1,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("planeGeometry", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshBasicMaterial", {
                transparent: true,
                map: texture,
                color: color
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Coin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9927);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9293);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1247);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Effect__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__]);
([_Effect__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/games/Flip/index.tsx









const SIDES = {
    heads: [
        2,
        0
    ],
    tails: [
        0,
        2
    ]
};
const SOUND_COIN = "/games/flip/coin.mp3";
const SOUND_WIN = "/games/flip/win.mp3";
const SOUND_LOSE = "/games/flip/lose.mp3";
function Flip() {
    const game = gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.useGame();
    const token = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useCurrentToken)();
    const gamba = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__.useGamba)();
    const [flipping, setFlipping] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false);
    const [win, setWin] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(false);
    const [resultIndex, setResultIndex] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(0);
    const [side, setSide] = react__WEBPACK_IMPORTED_MODULE_5___default().useState("heads");
    const walletModal = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_8__.useWalletModal)();
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet)();
    const connect = ()=>{
        if (wallet.wallet) {
            wallet.connect();
        } else {
            walletModal.setVisible(true);
        }
    };
    const WAGER_OPTIONS = [
        1,
        5,
        10,
        50,
        100
    ].map((x)=>x * token.baseWager);
    const [wager, setWager] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(WAGER_OPTIONS[0]);
    const sounds = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useSound)({
        coin: SOUND_COIN,
        win: SOUND_WIN,
        lose: SOUND_LOSE
    });
    const play = async ()=>{
        try {
            setWin(false);
            setFlipping(true);
            sounds.play("coin", {
                playbackRate: 0.5
            });
            await game.play({
                bet: SIDES[side],
                wager,
                metadata: [
                    side
                ]
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
        } finally{
            setFlipping(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
                target: "screen",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.Canvas, {
                    linear: true,
                    flat: true,
                    orthographic: true,
                    camera: {
                        zoom: 80,
                        position: [
                            0,
                            0,
                            100
                        ]
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_5___default().Suspense), {
                            fallback: null,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Coin__WEBPACK_IMPORTED_MODULE_1__/* .Coin */ .sN, {
                                result: resultIndex,
                                flipping: flipping
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Effect__WEBPACK_IMPORTED_MODULE_4__/* .Effect */ .Q, {
                            color: "white"
                        }),
                        flipping && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Effect__WEBPACK_IMPORTED_MODULE_4__/* .Effect */ .Q, {
                            color: "white"
                        }),
                        win && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Effect__WEBPACK_IMPORTED_MODULE_4__/* .Effect */ .Q, {
                            color: "#42ff78"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ambientLight", {
                            intensity: 3
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("directionalLight", {
                            "position-z": 1,
                            "position-y": 1,
                            castShadow: true,
                            color: "#CCCCCC"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hemisphereLight", {
                            intensity: 0.5,
                            position: [
                                0,
                                1,
                                0
                            ],
                            scale: [
                                1,
                                1,
                                1
                            ],
                            color: "#ffadad",
                            groundColor: "#6666fe"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
                target: "controls",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Button, {
                        disabled: gamba.isPlaying,
                        onClick: ()=>setSide(side === "heads" ? "tails" : "heads"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                display: "flex"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    width: 32,
                                    src: side === "heads" ? _Coin__WEBPACK_IMPORTED_MODULE_1__/* .TEXTURE_HEADS */ .VT : _Coin__WEBPACK_IMPORTED_MODULE_1__/* .TEXTURE_TAILS */ .WJ
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center items-center",
                                    children: side === "heads" ? "Heads" : "Tails"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.WagerInput, {
                        value: wager,
                        onChange: setWager
                    }),
                    wallet.connected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.PlayButton, {
                        onClick: play,
                        children: "Flip"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Button, {
                        main: true,
                        onClick: connect,
                        children: "Play"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flip);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;