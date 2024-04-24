"use strict";
exports.id = 727;
exports.ids = [727];
exports.modules = {

/***/ 1727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ extractMetadata),
/* harmony export */   "x": () => (/* binding */ RecentPlay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_core_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4442);
/* harmony import */ var gamba_core_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_core_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7547);




const extractMetadata = (event)=>{
    try {
        const [version, gameId, ...rest] = event.data.metadata.split(":");
        const game = _games__WEBPACK_IMPORTED_MODULE_3__/* .GAMES.find */ .W.find((x)=>x.id.toLowerCase() === gameId.toLowerCase());
        const gameNameFallback = gameId || "Unknown";
        return {
            game,
            gameNameFallback
        };
    } catch  {
        return {
            game: null,
            gameNameFallback: "Unknown"
        };
    }
};
function RecentPlay({ event  }) {
    const data = event.data;
    const token = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useTokenMeta)(data.tokenMint);
    const multiplier = data.bet[data.resultIndex.toNumber()] / gamba_core_v2__WEBPACK_IMPORTED_MODULE_1__.BPS_PER_WHOLE;
    const wager = data.wager.toNumber();
    const payout = multiplier * wager;
    const profit = payout - wager;
    const { game , gameNameFallback  } = extractMetadata(event);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "game-info",
                children: game ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: `/games/${game.id}/logo.png`,
                    alt: `Splash for ${game.meta.name}`,
                    width: 64
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fallback-game-info",
                    children: gameNameFallback
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    color: "#a079ff"
                },
                children: `${data.user.toBase58().substring(0, 4)}...${data.user.toBase58().slice(-4)}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden md:flex",
                children: profit >= 0 ? " WON " : " LOST "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-2 items-center rounded-lg p-1",
                style: {
                    backgroundColor: profit > 0 ? "#34D399" : "#666"
                },
                children: [
                    token.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: token.image,
                        alt: "Token",
                        width: 24,
                        className: "rounded-full"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "inline-block w-6 h-6 border border-white rounded-full items-center justify-center text-xs font-medium text-white",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "w-4 h-4 rounded-full border border-white flex items-center justify-center m-auto",
                            children: token.symbol
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                        amount: Math.abs(profit),
                        mint: data.tokenMint
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hidden md:flex flex-col",
                children: [
                    profit > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            "(",
                            multiplier.toFixed(2),
                            "x)"
                        ]
                    }),
                    data.jackpotPayoutToUser.toNumber() > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "animate-jackpotGradient flex gap-2 items-center text-black rounded-lg p-1",
                        children: [
                            "+",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                mint: data.tokenMint,
                                amount: data.jackpotPayoutToUser.toNumber()
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;