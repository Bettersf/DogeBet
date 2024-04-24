(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
// src/components/layout/Footer.tsx
// Button links

const LINKS = [
    {
        href: "https://explorer.gamba.so/create",
        title: "\uD83D\uDE80 Create Pool"
    },
    {
        href: "https://github.com/BankkRoll/Gamba-V2-Next.js",
        title: "\uD83D\uDC68‍\uD83D\uDCBB Build your own"
    },
    {
        href: "https://gamba.so/docs",
        title: "\uD83D\uDCD6 Gamba Docs"
    },
    {
        href: "https://discord.com/invite/HSTtFFwR",
        title: "\uD83D\uDCAC Join Discord"
    }, 
];
// Twitter link
const TWITTER_LINK = {
    href: "https://twitter.com/bankkroll_eth",
    title: "\xa9 2024 Template made with ❤️ by Bankk"
};
function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "bg-black rounded-t-2xl shadow dark:bg-gray-900",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full max-w-screen-xl mx-auto p-4 md:py-8",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "sm:flex sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://gamba.so/",
                            className: "flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/logo.svg",
                                className: "h-10",
                                alt: "Gamba Logo"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400",
                            children: LINKS.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: link.href,
                                        className: "hover:underline me-4 md:me-6",
                                        children: link.title
                                    })
                                }, link.href))
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "block text-sm text-gray-500 sm:text-center dark:text-gray-400",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: TWITTER_LINK.href,
                        className: "hover:underline",
                        children: TWITTER_LINK.title
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 1658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useDisclaimer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9081);
/* harmony import */ var _useUserStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(257);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useUserStore__WEBPACK_IMPORTED_MODULE_4__]);
_useUserStore__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// hooks/useDisclaimer.tsx





function useDisclaimer() {
    const { 0: showDisclaimer , 1: setShowDisclaimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { agreedToTerms , set  } = (0,_useUserStore__WEBPACK_IMPORTED_MODULE_4__/* .useUserStore */ .L)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!agreedToTerms) {
            setShowDisclaimer(true);
        } else {
            setShowDisclaimer(false);
        }
    }, [
        agreedToTerms
    ]);
    const handleDisclaimerClose = ()=>{
        set((state)=>({
                ...state,
                agreedToTerms: true
            }));
        setShowDisclaimer(false);
    };
    const DisclaimerModal = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Modal__WEBPACK_IMPORTED_MODULE_3__/* .Modal */ .u, {
            onClose: handleDisclaimerClose,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal items-start text-left p-4 overflow-y-auto max-h-[60vh]",
                    style: {
                        maxHeight: "400px"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                        className: "list-decimal list-inside space-y-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "1. Age Requirement:"
                                    }),
                                    " Must be at least 18 years old."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "2. Legal Compliance:"
                                    }),
                                    " Follow local laws responsibly."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "3. Risk Acknowledgement:"
                                    }),
                                    " Games involve risk; no guaranteed winnings."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "4. No Warranty:"
                                    }),
                                    ' Games provided "as is"; operate randomly.'
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "5. Limitation of Liability:"
                                    }),
                                    " ",
                                    "We're not liable for damages."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "6. Licensing Disclaimer:"
                                    }),
                                    " Not a licensed casino; for simulation only."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "7. Fair Play:"
                                    }),
                                    " Games are conducted fairly and transparently."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "8. Data Privacy:"
                                    }),
                                    " Your privacy is important to us."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "9. Responsible Gaming:"
                                    }),
                                    " Play responsibly; seek help if needed."
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-lg py-6",
                    children: "By playing on our platform, you confirm your compliance."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Button, {
                    main: true,
                    onClick: handleDisclaimerClose,
                    children: "Acknowledge"
                })
            ]
        });
    };
    return {
        showDisclaimer,
        DisclaimerModal
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8870:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_core_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4442);
/* harmony import */ var gamba_core_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_core_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_RecentPlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1727);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7270);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1247);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sonner__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__]);
([sonner__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/hooks/useGameEvent.ts









function RecentPlay({ event  }) {
    const data = event.data;
    const token = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useTokenMeta)(data.tokenMint);
    const multiplier = data.bet[data.resultIndex.toNumber()] / gamba_core_v2__WEBPACK_IMPORTED_MODULE_1__.BPS_PER_WHOLE;
    const wager = data.wager.toNumber();
    const payout = multiplier * wager;
    const profit = payout + data.jackpotPayoutToUser.toNumber() - wager;
    const { game  } = (0,_utils_RecentPlay__WEBPACK_IMPORTED_MODULE_5__/* .extractMetadata */ .m)(event);
    if (!game || !token) {
        return null;
    }
    const textColorClass = profit >= 0 ? "text-green-600" : "text-red-600";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: `/games/${game.id}/logo.png`,
                alt: `${game.meta.name}`,
                className: "h-10"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: textColorClass,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/logo.svg",
                        alt: "gamba",
                        className: "absolute top-2 right-2 w-24 h-6 rounded-full"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "font-bold text-lg",
                        children: [
                            data.user.toBase58().substring(0, 4),
                            "...",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm",
                                children: profit >= 0 ? "WON" : "LOST"
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                amount: Math.abs(profit),
                                mint: data.tokenMint
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "whitespace-nowrap flex items-center gap-2 mt-2",
                        children: [
                            token.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: token.image,
                                alt: `${token.name}`,
                                className: "w-6 h-6 rounded-full"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block w-6 h-6 border border-white rounded-full items-center justify-center text-xs font-medium text-white",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-4 h-4 rounded-full border border-white flex items-center justify-center",
                                    children: token.symbol
                                })
                            }),
                            profit >= 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: `text-sm font-semibold text-green-600`,
                                        children: [
                                            "+",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                                amount: data.payout.toNumber(),
                                                mint: data.tokenMint
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-xs font-medium text-gray-500",
                                        children: [
                                            "(",
                                            multiplier.toFixed(2),
                                            "x)"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    data.jackpotPayoutToUser.toNumber() > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-2 animate-jackpotGradient flex items-center gap-2 text-black rounded-lg p-1",
                        children: [
                            "+",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                mint: data.tokenMint,
                                amount: data.jackpotPayoutToUser.toNumber()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-2 absolute bottom-2 right-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: `https://explorer.gamba.so/tx/${event.signature}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "gambaButton text-xs rounded-lg p-1",
                                    children: "Verify"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: `/play/${game.id}`,
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "gambaButton text-xs rounded-lg px-2",
                                    children: "Play"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const GameToast = ()=>{
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__.useWallet)();
    (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_7__.useGambaEventListener)("GameSettled", (event)=>{
        const { game  } = (0,_utils_RecentPlay__WEBPACK_IMPORTED_MODULE_5__/* .extractMetadata */ .m)(event);
        // - Filter events by a specific creator
        // - To enable filtering by a specific creator, uncomment the following lines and
        // - this will auto filter your events from your platform only.
        // const allowedCreator = PLATFORM_CREATOR_ADDRESS;
        // const eventCreatorPublicKeyString = event.data.creator.toBase58();
        // - Swap the line below to add the filter
        // if (game && (allowedCreator.includes(eventCreatorPublicKeyString)) ) {
        if (game) {
            const connectedUserPublicKeyString = publicKey?.toString();
            const eventUserPublicKeyString = event.data.user.toBase58();
            if (!publicKey || eventUserPublicKeyString !== connectedUserPublicKeyString) {
                const isGameWon = event.data.payout.toNumber() > 0;
                const toastType = isGameWon ? sonner__WEBPACK_IMPORTED_MODULE_6__.toast.success : sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error;
                toastType(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RecentPlay, {
                    event: event
                }), {
                    duration: 5000,
                    position: "bottom-left"
                });
            }
        }
    });
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameToast);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useUserStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3602);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_middleware__WEBPACK_IMPORTED_MODULE_1__]);
([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_middleware__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/hooks/useUserStore.ts


/**
 * Store client settings here
 */ const useUserStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.persist)((set)=>({
        agreedToTerms: false,
        newcomer: true,
        gamesPlayed: [],
        set
    }), {
    name: "user",
    storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.createJSONStorage)(()=>sessionStorage)
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2121);
/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8288);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7963);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useGameEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8870);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7270);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8847);
/* harmony import */ var _hooks_useDisclaimer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1658);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _hooks_useGameEvent__WEBPACK_IMPORTED_MODULE_7__, sonner__WEBPACK_IMPORTED_MODULE_9__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__, _hooks_useDisclaimer__WEBPACK_IMPORTED_MODULE_11__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _hooks_useGameEvent__WEBPACK_IMPORTED_MODULE_7__, sonner__WEBPACK_IMPORTED_MODULE_9__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__, _hooks_useDisclaimer__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/pages/_app.tsx













function MyApp({ Component , pageProps  }) {
    const { showDisclaimer , DisclaimerModal  } = (0,_hooks_useDisclaimer__WEBPACK_IMPORTED_MODULE_11__/* .useDisclaimer */ .x)();
    const RPC_ENDPOINT = process.env.NEXT_PUBLIC_RPC_ENDPOINT ?? "https://api.mainnet-beta.solana.com";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.ConnectionProvider, {
        endpoint: RPC_ENDPOINT,
        config: {
            commitment: "processed"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.WalletProvider, {
            autoConnect: true,
            wallets: [],
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__.WalletModalProvider, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_3__.TokenMetaProvider, {
                    tokens: _config__WEBPACK_IMPORTED_MODULE_4__/* .TOKENLIST */ .EX,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__.GambaProvider, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_3__.GambaPlatformProvider, {
                            creator: _config__WEBPACK_IMPORTED_MODULE_4__/* .PLATFORM_CREATOR_ADDRESS */ .Ie,
                            defaultCreatorFee: _config__WEBPACK_IMPORTED_MODULE_4__/* .PLATFORM_CREATOR_FEE */ .Jr,
                            defaultJackpotFee: _config__WEBPACK_IMPORTED_MODULE_4__/* .PLATFORM_JACKPOT_FEE */ .cg,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sonner__WEBPACK_IMPORTED_MODULE_9__.Toaster, {
                                    position: "bottom-right",
                                    richColors: true,
                                    toastOptions: {
                                        style: {
                                            background: "#15151f"
                                        }
                                    }
                                }),
                                _config__WEBPACK_IMPORTED_MODULE_4__/* .LIVE_EVENT_TOAST */ .fT && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hooks_useGameEvent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                showDisclaimer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DisclaimerModal, {})
                            ]
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2121:
/***/ (() => {



/***/ }),

/***/ 4165:
/***/ ((module) => {

"use strict";
module.exports = require("@react-three/drei");

/***/ }),

/***/ 3784:
/***/ ((module) => {

"use strict";
module.exports = require("@react-three/fiber");

/***/ }),

/***/ 7831:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ 4442:
/***/ ((module) => {

"use strict";
module.exports = require("gamba-core-v2");

/***/ }),

/***/ 5923:
/***/ ((module) => {

"use strict";
module.exports = require("gamba-react-ui-v2");

/***/ }),

/***/ 6545:
/***/ ((module) => {

"use strict";
module.exports = require("gamba-react-v2");

/***/ }),

/***/ 8438:
/***/ ((module) => {

"use strict";
module.exports = require("matter-js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 5459:
/***/ ((module) => {

"use strict";
module.exports = import("@preact/signals-react");;

/***/ }),

/***/ 1247:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 8847:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 7270:
/***/ ((module) => {

"use strict";
module.exports = import("sonner");;

/***/ }),

/***/ 2949:
/***/ ((module) => {

"use strict";
module.exports = import("three");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ }),

/***/ 3602:
/***/ ((module) => {

"use strict";
module.exports = import("zustand/middleware");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,142,243,727], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();