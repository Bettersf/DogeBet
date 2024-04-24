"use strict";
exports.id = 930;
exports.ids = [930];
exports.modules = {

/***/ 2936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9081);
/* harmony import */ var _ui_TokenSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1863);
/* harmony import */ var _ui_UserButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2024);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_UserButton__WEBPACK_IMPORTED_MODULE_6__]);
_ui_UserButton__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/components/sections/Header.tsx







function Header() {
    const pool = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useCurrentPool)();
    const token = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useCurrentToken)();
    const balance = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useTokenBalance)();
    const { 0: bonusHelp , 1: setBonusHelp  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: jackpotHelp , 1: setJackpotHelp  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            bonusHelp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u, {
                onClose: ()=>setBonusHelp(false),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "You have a bonus!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "You have",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                    amount: balance.bonusBalance
                                })
                            }),
                            " ",
                            "worth of free plays. This bonus will be applied automatically when you play."
                        ]
                    })
                ]
            }),
            jackpotHelp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u, {
                onClose: ()=>setJackpotHelp(false),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-lg font-semibold text-center",
                        children: [
                            token.name,
                            " Jackpot Details"
                        ]
                    }),
                    pool.jackpotBalance > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 uppercase font-bold",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                            amount: pool.jackpotBalance
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "The Jackpot grows with each game played, funded by fees from unsuccessful attempts to win it. Winning the jackpot not only grants substantial rewards but also recycles a tiny portion of the winnings back into the main liquidity pool, sustaining the games economy."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Pool Fee:"
                                            }),
                                            " ",
                                            pool.poolFee,
                                            "%"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Liquidity:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                                amount: Number(pool.liquidity)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Minimum Wager:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                                amount: pool.minWager
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Maximum Payout:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                                amount: pool.maxPayout
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-4 text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Button, {
                                    main: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: `https://explorer.gamba.so/pool/${pool.publicKey.toString()}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "View Pool on Explorer"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between w-full p-2.5 bg-gray-900 fixed top-0 left-0 z-50 backdrop-blur-[20px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex gap-5 items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-9 m-0 cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    alt: "Gamba logo",
                                    src: "/logo.svg",
                                    className: "h-full"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "max-sm:text-xs max-sm:gap-1 flex gap-2.5 items-center relative",
                        children: [
                            pool.jackpotBalance > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setJackpotHelp(true),
                                className: "hidden md:flex all-unset cursor-pointer text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 text-xs uppercase font-bold transition-colors duration-200 hover:bg-white",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                    amount: pool.jackpotBalance
                                })
                            }),
                            balance.bonusBalance > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>setBonusHelp(true),
                                className: "hidden md:flex all-unset cursor-pointer text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 text-xs uppercase font-bold transition-colors duration-200 hover:bg-white",
                                children: [
                                    "+",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                        amount: balance.bonusBalance
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_TokenSelect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_UserButton__WEBPACK_IMPORTED_MODULE_6__/* .UserButton */ .l, {})
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ GameCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
// src/components/sections/Dashboard/GameCard.tsx




function GameCard({ game  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const small = router.pathname !== "/";
    const imagePath = `/games/${game.id}/logo.png`;
    const backgroundStyle = {
        aspectRatio: small ? "1 / 0.5" : "1 / 0.6",
        backgroundColor: game.meta.background
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/play/${game.id}`,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "cursor-pointer game-card w-full bg-cover bg-center rounded-lg text-white font-bold text-2xl",
            style: backgroundStyle,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "background absolute top-0 left-0 w-full h-full bg-size-100 bg-center bg-repeat",
                    style: {
                        backgroundImage: "url(/stuff.png)"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "image absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-contain auto",
                    style: {
                        backgroundImage: `url(${imagePath})`
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "play absolute right-2 bottom-2 bg-black bg-opacity-40 rounded px-2 py-1 text-sm text-uppercase",
                    children: [
                        "Play ",
                        game.meta.name
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 1863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TokenSelect)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "gamba-react-ui-v2"
var external_gamba_react_ui_v2_ = __webpack_require__(5923);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/ui/Dropdown.tsx
// src/components/Dropdown.tsx


function Dropdown({ children , visible , anchor  }) {
    const ref = (0,external_react_.useRef)(null);
    const { 0: dynamicAnchor , 1: setDynamicAnchor  } = (0,external_react_.useState)("bottom");
    (0,external_react_.useEffect)(()=>{
        if (anchor) {
            setDynamicAnchor(anchor);
        } else if (ref.current) {
            const isBottom = ref.current.getBoundingClientRect().y > window.innerHeight / 2;
            setDynamicAnchor(isBottom ? "top" : "bottom");
        }
    }, [
        visible,
        anchor
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: `absolute min-w-36 right-0 z-50 transition-opacity duration-200 ease-out ${visible ? "opacity-100" : "opacity-0 invisible"} ${dynamicAnchor === "top" ? "mt-2" : "mb-2"} min-w-full`,
        style: {
            transform: visible ? "translateY(0)" : dynamicAnchor === "top" ? "translateY(-10px)" : "translateY(10px)"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "grid bg-[#15151f] rounded-lg overflow-hidden p-1 gap-1",
            children: children
        })
    });
}

// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(8288);
;// CONCATENATED MODULE: ./src/components/ui/TokenSelect.tsx
// components/ui/TokenSelect.tsx





function TokenSelect() {
    const { 0: visible , 1: setVisible  } = (0,external_react_.useState)(false);
    const context = (0,external_react_.useContext)(external_gamba_react_ui_v2_.GambaPlatformContext);
    const selectedToken = (0,external_gamba_react_ui_v2_.useCurrentToken)();
    const balance = (0,external_gamba_react_ui_v2_.useUserBalance)();
    const setToken = (token)=>{
        context.setToken(token);
        setVisible(false);
    };
    const click = ()=>{
        setVisible(!visible);
    };
    const tokensArray = Object.values(config/* TOKENLIST */.EX);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_gamba_react_ui_v2_.GambaUi.Button, {
                onClick: click,
                children: selectedToken && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "min-w-32 max-sm:text-xs whitespace-nowrap flex items-center gap-2.5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "w-5 h-5 rounded-full",
                            src: selectedToken.image,
                            alt: "Token"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_gamba_react_ui_v2_.TokenValue, {
                            amount: balance.balance
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Dropdown, {
                visible: visible,
                children: tokensArray.map((token, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "flex items-center gap-2.5 px-2.5 py-2 hover:bg-gray-800 rounded-lg w-full text-left",
                        onClick: ()=>setToken(token.mint),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "w-5 h-5 rounded-full",
                                src: token.image,
                                alt: token.symbol
                            }),
                            token.symbol
                        ]
                    }, index))
            })
        ]
    });
}


/***/ }),

/***/ 2024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ UserButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1247);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/components/sections/UserButton.tsx







function ConnectedButton() {
    const [modal, setModal] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();
    const ref = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(null);
    const address = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_5__.useWalletAddress)();
    const truncateString = (s, startLen = 4, endLen = startLen)=>s.slice(0, startLen) + "..." + s.slice(-endLen);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            modal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_2__/* .Modal */ .u, {
                onClose: ()=>setModal(false),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "min-w-64",
                        children: truncateString(address.toBase58(), 8, 8)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Button, {
                        onClick: ()=>wallet.disconnect(),
                        children: "Disconnect"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-sm:text-xs whitespace-nowrap",
                ref: ref,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Button, {
                    onClick: ()=>setModal(true),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: wallet.wallet?.adapter.icon,
                                width: 20
                            }),
                            truncateString(address.toBase58(), 3)
                        ]
                    })
                })
            })
        ]
    });
}
function UserButton() {
    const walletModal = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__.useWalletModal)();
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();
    const connect = ()=>{
        if (wallet.wallet) {
            wallet.connect();
        } else {
            walletModal.setVisible(true);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: wallet.connected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConnectedButton, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Button, {
            onClick: connect,
            children: wallet.connecting ? "Connecting" : "Connect"
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;