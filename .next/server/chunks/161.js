"use strict";
exports.id = 161;
exports.ids = [161];
exports.modules = {

/***/ 2161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Limbo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1247);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/games/Limbo/index.tsx
/*
 * Author: BankkRoll
 */ 




function Limbo() {
    const game = gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.useGame();
    // const gambaBPlay = useCustomPlay("limbo");
    const [wager, setWager] = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useWagerInput)();
    const { 0: targetMultiplier , 1: setTargetMultiplier  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(20);
    const { 0: resultMultiplier , 1: setResultMultiplier  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: playing , 1: setPlaying  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: isWin , 1: setIsWin  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: textColor , 1: setTextColor  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("#FFFFFF");
    const walletModal = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__.useWalletModal)();
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)();
    const sounds = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useSound)({
        spin: "/games/limbo/numbers.mp3",
        win: "/games/limbo/win.mp3",
        lose: "/games/limbo/lose.mp3",
        tick: "/games/limbo/tick.mp3"
    });
    const connect = ()=>{
        if (wallet.wallet) {
            wallet.connect();
        } else {
            walletModal.setVisible(true);
        }
    };
    const handleMultiplierChange = (value)=>{
        setTargetMultiplier(Math.max(2, Math.min(100, parseFloat(value))));
        sounds.play("tick");
    };
    const startAnimation = (start, end, winCondition)=>{
        let startTime = null;
        const duration = 2500;
        const animate = (timestamp)=>{
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setResultMultiplier(start + (end - start) * progress);
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setTextColor(winCondition ? "#10B981" : "#EF4444");
                sounds.play(winCondition ? "win" : "lose");
            }
        };
        requestAnimationFrame(animate);
    };
    const play = async ()=>{
        try {
            setPlaying(true);
            setResultMultiplier(1);
            setTextColor("#FFFFFF");
            //await gambaBPlay(
            //  wager,
            //  new Array(targetMultiplier)
            //    .fill(0)
            //    .map((_, index) => (index === 0 ? targetMultiplier : 0)),
            //);
            await game.play({
                bet: new Array(targetMultiplier).fill(0).map((_, index)=>index === 0 ? targetMultiplier : 0),
                wager: wager
            });
            const result = await game.result();
            const winCondition = result.multiplier >= targetMultiplier;
            setIsWin(winCondition);
            sounds.play("spin", {
                playbackRate: 0.8
            });
            const endMultiplier = winCondition ? targetMultiplier + Math.random() * targetMultiplier * 0.2 : 1 + Math.random() * (targetMultiplier - 1);
            setTimeout(()=>startAnimation(1, endMultiplier, winCondition), 500);
            setPlaying(false);
        } catch (error) {
            console.log(error);
            setPlaying(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Portal, {
                target: "screen",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Responsive, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "500px",
                                transition: "all 0.5s ease-in-out"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    fontSize: "100px",
                                    fontWeight: "bold",
                                    color: textColor,
                                    transition: "color 0.5s ease-in-out"
                                },
                                children: [
                                    resultMultiplier.toFixed(2),
                                    "x"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            position: "absolute",
                            bottom: "4px",
                            right: "4px",
                            zIndex: 1000
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://x.com/bankkroll_eth",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                fontSize: "14px",
                                color: "#fff",
                                padding: "10px"
                            },
                            children: "BankkmaticGames"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Portal, {
                target: "controls",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.WagerInput, {
                        value: wager,
                        onChange: setWager
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                            height: "40px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                style: {
                                    position: "absolute",
                                    right: "40px",
                                    top: "-10px"
                                },
                                children: "Target"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "targetMultiplier",
                                placeholder: "Target Multiplier",
                                type: "range",
                                min: 2,
                                max: 100,
                                step: 1,
                                value: String(targetMultiplier),
                                onChange: (e)=>handleMultiplierChange(e.target.value)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                style: {
                                    position: "absolute",
                                    right: "40px",
                                    bottom: "-10px"
                                },
                                children: [
                                    targetMultiplier,
                                    ".00X"
                                ]
                            })
                        ]
                    }),
                    wallet.connected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.PlayButton, {
                        onClick: play,
                        disabled: playing,
                        children: playing ? "Playing..." : "Play"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Button, {
                        main: true,
                        onClick: connect,
                        children: "Play"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;