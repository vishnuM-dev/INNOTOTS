(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/animations/AlphabetBlocks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlphabetBlocks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
'use client';
;
;
function AlphabetBlocks({ className = '', size = 44 }) {
    const blocks = [
        {
            letter: 'A',
            bg: '#FF3F68',
            border: '#D9234B',
            delay: 0,
            rot: -8
        },
        {
            letter: 'B',
            bg: '#FFBA08',
            border: '#D99B00',
            delay: 0.2,
            rot: 6
        },
        {
            letter: 'C',
            bg: '#08BFC1',
            border: '#059A9C',
            delay: 0.4,
            rot: -4
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-flex items-center gap-2 select-none pointer-events-none ${className}`,
        children: blocks.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 15,
                    scale: 0.8
                },
                whileInView: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                viewport: {
                    once: true
                },
                animate: {
                    y: [
                        0,
                        -6,
                        0
                    ],
                    rotate: [
                        b.rot,
                        b.rot + (i % 2 === 0 ? 3 : -3),
                        b.rot
                    ]
                },
                transition: {
                    y: {
                        duration: 2.8 + i * 0.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: b.delay
                    },
                    rotate: {
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: b.delay
                    }
                },
                className: "rounded-xl flex items-center justify-center font-bold text-white shadow-sm",
                style: {
                    width: size,
                    height: size,
                    backgroundColor: b.bg,
                    borderBottom: `4px solid ${b.border}`,
                    borderRight: `2px solid ${b.border}`,
                    fontFamily: 'var(--font-fredoka)',
                    fontSize: size * 0.52
                },
                children: b.letter
            }, b.letter, false, {
                fileName: "[project]/src/components/animations/AlphabetBlocks.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/animations/AlphabetBlocks.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = AlphabetBlocks;
var _c;
__turbopack_context__.k.register(_c, "AlphabetBlocks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animations/AnimatedCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
'use client';
;
;
function AnimatedCard({ children, className = '', style }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        whileHover: {
            y: -6,
            scale: 1.02,
            transition: {
                type: 'spring',
                stiffness: 350,
                damping: 22
            }
        },
        whileTap: {
            scale: 0.98
        },
        className: className,
        style: style,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/animations/AnimatedCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = AnimatedCard;
var _c;
__turbopack_context__.k.register(_c, "AnimatedCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animations/AnimatedCloud.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedCloud
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function AnimatedCloud({ size = 80, delay = 0, duration = 18, className = '', color = 'white', opacity = 0.95 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-block select-none pointer-events-none ${className}`,
        style: {
            animationName: 'drift',
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            width: size,
            height: size * 0.6
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 60",
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-full h-full drop-shadow-xs overflow-visible",
            style: {
                opacity
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "50",
                    cy: "40",
                    rx: "40",
                    ry: "18",
                    fill: color
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/AnimatedCloud.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "35",
                    cy: "32",
                    rx: "22",
                    ry: "20",
                    fill: color
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/AnimatedCloud.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "62",
                    cy: "30",
                    rx: "20",
                    ry: "18",
                    fill: color
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/AnimatedCloud.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "50",
                    cy: "25",
                    rx: "18",
                    ry: "16",
                    fill: color
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/AnimatedCloud.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/animations/AnimatedCloud.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/animations/AnimatedCloud.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = AnimatedCloud;
var _c;
__turbopack_context__.k.register(_c, "AnimatedCloud");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animations/AnimatedRainbow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedRainbow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
'use client';
;
;
function AnimatedRainbow({ className = '', width = 240, height = 140 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.9,
            y: 10
        },
        whileInView: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.8,
            ease: 'easeOut'
        },
        className: `inline-block select-none pointer-events-none relative ${className}`,
        style: {
            width,
            height
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 240 140",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-full h-full overflow-visible",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "shimmerRainbow",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "0%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#ffffff",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "50%",
                                stopColor: "#ffffff",
                                stopOpacity: "0.8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#ffffff",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].path, {
                    d: "M30 130 C30 50, 210 50, 210 130",
                    stroke: "#FF3F68",
                    strokeWidth: "10",
                    strokeLinecap: "round",
                    initial: {
                        pathLength: 0
                    },
                    whileInView: {
                        pathLength: 1
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 1,
                        ease: 'easeInOut'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].path, {
                    d: "M44 130 C44 64, 196 64, 196 130",
                    stroke: "#FFBA08",
                    strokeWidth: "10",
                    strokeLinecap: "round",
                    initial: {
                        pathLength: 0
                    },
                    whileInView: {
                        pathLength: 1
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 1,
                        delay: 0.15,
                        ease: 'easeInOut'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].path, {
                    d: "M58 130 C58 78, 182 78, 182 130",
                    stroke: "#08BFC1",
                    strokeWidth: "10",
                    strokeLinecap: "round",
                    initial: {
                        pathLength: 0
                    },
                    whileInView: {
                        pathLength: 1
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 1,
                        delay: 0.3,
                        ease: 'easeInOut'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].path, {
                    d: "M72 130 C72 92, 168 92, 168 130",
                    stroke: "#A75CE2",
                    strokeWidth: "10",
                    strokeLinecap: "round",
                    initial: {
                        pathLength: 0
                    },
                    whileInView: {
                        pathLength: 1
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 1,
                        delay: 0.45,
                        ease: 'easeInOut'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].path, {
                    d: "M30 130 C30 50, 210 50, 210 130",
                    stroke: "url(#shimmerRainbow)",
                    strokeWidth: "14",
                    strokeLinecap: "round",
                    strokeDasharray: "60 280",
                    animate: {
                        strokeDashoffset: [
                            340,
                            -340
                        ]
                    },
                    transition: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'linear'
                    },
                    opacity: 0.65
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
                    animate: {
                        x: [
                            -2,
                            2,
                            -2
                        ]
                    },
                    transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "32",
                            cy: "126",
                            rx: "22",
                            ry: "12",
                            fill: "white",
                            className: "drop-shadow-xs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "24",
                            cy: "120",
                            rx: "14",
                            ry: "12",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "42",
                            cy: "122",
                            rx: "12",
                            ry: "10",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
                    animate: {
                        x: [
                            2,
                            -2,
                            2
                        ]
                    },
                    transition: {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "208",
                            cy: "126",
                            rx: "22",
                            ry: "12",
                            fill: "white",
                            className: "drop-shadow-xs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "200",
                            cy: "122",
                            rx: "12",
                            ry: "10",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "218",
                            cy: "120",
                            rx: "14",
                            ry: "12",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/animations/AnimatedRainbow.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = AnimatedRainbow;
var _c;
__turbopack_context__.k.register(_c, "AnimatedRainbow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animations/FlyingBirds.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CuteBird",
    ()=>CuteBird,
    "default",
    ()=>FlyingBirds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CuteBird({ bodyColor = '#FFBA08', wingColor = '#08BFC1', size = 38, initialX = 0, initialY = 0, duration = 16, delay = 0, direction = 'hover-drift', className = '' }) {
    _s();
    const [chirping, setChirping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const transitionConfig = direction === 'left-to-right' || direction === 'right-to-left' ? {
        x: {
            duration,
            repeat: Infinity,
            ease: 'linear',
            delay
        },
        y: {
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    } : {
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
    };
    const initialProps = direction === 'left-to-right' ? {
        x: '-10vw',
        y: initialY
    } : direction === 'right-to-left' ? {
        x: '110vw',
        y: initialY
    } : {
        x: initialX,
        y: initialY
    };
    const animateProps = direction === 'left-to-right' ? {
        x: '110vw',
        y: [
            0,
            -20,
            10,
            -25,
            5,
            0
        ]
    } : direction === 'right-to-left' ? {
        x: '-10vw',
        y: [
            0,
            -25,
            8,
            -20,
            0
        ]
    } : {
        x: [
            0,
            45,
            -20,
            30,
            0
        ],
        y: [
            0,
            -18,
            8,
            -24,
            0
        ],
        rotate: [
            0,
            5,
            -4,
            6,
            0
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: initialProps,
        animate: animateProps,
        transition: transitionConfig,
        whileHover: {
            scale: 1.25,
            rotate: 10
        },
        whileTap: {
            scale: 0.9,
            y: -20
        },
        onClick: ()=>{
            setChirping(true);
            setTimeout(()=>setChirping(false), 2000);
        },
        className: `absolute cursor-pointer select-none z-20 ${className}`,
        style: {
            width: size,
            height: size * 0.8
        },
        "aria-label": "Happy little cartoon bird",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: chirping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.5,
                            y: 0
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            y: -22
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.6,
                            y: -30
                        },
                        className: "absolute -top-6 -right-2 bg-white px-2 py-0.5 rounded-full shadow-xs text-[10px] font-bold text-[#FF3F68] border border-[#FFBA08]/50 flex items-center gap-1 z-30 pointer-events-none whitespace-nowrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "🎶 Tweet!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 87,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 60 48",
                    className: "w-full h-full drop-shadow-xs overflow-visible",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8,26 L0,20 Q4,26 0,32 Z",
                            fill: wingColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6,27 L-2,28",
                            stroke: wingColor,
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "28",
                            cy: "27",
                            rx: "18",
                            ry: "15",
                            fill: bodyColor
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "29",
                            cy: "31",
                            rx: "12",
                            ry: "9",
                            fill: "#FFFBE8",
                            opacity: 0.65
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "44,23 54,26 44,30",
                            fill: "#FF5E1E"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "37",
                            cy: "21",
                            rx: "4.5",
                            ry: "5.5",
                            fill: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "38",
                            cy: "21",
                            rx: "2.5",
                            ry: "3.5",
                            fill: "#07194F"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "39.5",
                            cy: "19.5",
                            r: "1.2",
                            fill: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "33",
                            cy: "28",
                            rx: "3.2",
                            ry: "2.2",
                            fill: "#FF3F68",
                            opacity: 0.6
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
                            animate: {
                                rotate: [
                                    -20,
                                    35,
                                    -20
                                ],
                                y: [
                                    0,
                                    -3,
                                    0
                                ]
                            },
                            transition: {
                                duration: chirping ? 0.15 : 0.28,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            },
                            style: {
                                transformOrigin: '22px 26px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M22,25 C26,14 38,16 38,24 C38,32 26,34 20,29 Z",
                                    fill: wingColor
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M26,24 Q32,22 34,26",
                                    stroke: "#FFFFFF",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    opacity: 0.6
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "24",
                            y1: "40",
                            x2: "22",
                            y2: "46",
                            stroke: "#FF5E1E",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "22",
                            y1: "46",
                            x2: "19",
                            y2: "46",
                            stroke: "#FF5E1E",
                            strokeWidth: "1.5",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "31",
                            y1: "40",
                            x2: "30",
                            y2: "46",
                            stroke: "#FF5E1E",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "30",
                            y1: "46",
                            x2: "27",
                            y2: "46",
                            stroke: "#FF5E1E",
                            strokeWidth: "1.5",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/animations/FlyingBirds.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/animations/FlyingBirds.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(CuteBird, "6tzGzN32JAPRdKlDyt1lDb3AsY8=");
_c = CuteBird;
function FlyingBirds() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 overflow-hidden z-10",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CuteBird, {
                bodyColor: "#FFBA08",
                wingColor: "#08BFC1",
                size: 46,
                initialX: "68%",
                initialY: "12%",
                duration: 12,
                delay: 0.2,
                className: "pointer-events-auto"
            }, void 0, false, {
                fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CuteBird, {
                bodyColor: "#08BFC1",
                wingColor: "#FF3F68",
                size: 34,
                initialX: "25%",
                initialY: "8%",
                duration: 15,
                delay: 2,
                className: "pointer-events-auto hidden sm:block"
            }, void 0, false, {
                fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CuteBird, {
                bodyColor: "#FF3F68",
                wingColor: "#FFBA08",
                size: 30,
                initialX: "86%",
                initialY: "30%",
                duration: 10,
                delay: 1.2,
                className: "pointer-events-auto hidden md:block"
            }, void 0, false, {
                fileName: "[project]/src/components/animations/FlyingBirds.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/animations/FlyingBirds.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_c1 = FlyingBirds;
var _c, _c1;
__turbopack_context__.k.register(_c, "CuteBird");
__turbopack_context__.k.register(_c1, "FlyingBirds");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animations/FlyingButterflies.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Butterfly",
    ()=>Butterfly,
    "default",
    ()=>FlyingButterflies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Butterfly({ color = '#FF3F68', size = 28, initialX = 0, initialY = 0, path = {
    x: [
        0,
        40,
        90,
        60,
        20,
        0
    ],
    y: [
        0,
        -30,
        -15,
        -45,
        -20,
        0
    ],
    rotate: [
        0,
        15,
        -10,
        20,
        -15,
        0
    ]
}, duration = 12, delay = 0, className = '' }) {
    _s();
    const [isHovered, setIsHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: {
            x: initialX,
            y: initialY
        },
        animate: {
            x: path.x,
            y: path.y,
            rotate: path.rotate || [
                0,
                10,
                -10,
                0
            ]
        },
        transition: {
            duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay
        },
        whileHover: {
            scale: 1.25
        },
        whileTap: {
            scale: 0.9,
            rotate: 360
        },
        onHoverStart: ()=>setIsHovered(true),
        onHoverEnd: ()=>setIsHovered(false),
        className: `absolute cursor-pointer select-none z-20 ${className}`,
        style: {
            width: size,
            height: size,
            perspective: 400
        },
        "aria-label": "Playful fluttering butterfly",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    animate: {
                        rotateY: isHovered ? [
                            0,
                            75,
                            0
                        ] : [
                            0,
                            65,
                            0
                        ]
                    },
                    transition: {
                        duration: isHovered ? 0.12 : 0.22,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    },
                    style: {
                        transformOrigin: 'right center',
                        width: size * 0.48,
                        height: size * 0.85
                    },
                    className: "absolute right-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 30 50",
                        className: "w-full h-full drop-shadow-xs",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M30,24 C28,12 18,2 6,4 C-2,6 0,22 14,24 C24,25 28,24 30,24 Z",
                                fill: color,
                                opacity: 0.92
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M24,20 C22,12 16,6 8,8 C4,10 6,18 16,20 Z",
                                fill: "#FFFFFF",
                                opacity: 0.4
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M30,24 C26,28 14,32 8,40 C2,46 12,50 20,44 C26,38 28,28 30,24 Z",
                                fill: color,
                                opacity: 0.82
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "14",
                                cy: "14",
                                r: "2.5",
                                fill: "#FFBA08",
                                opacity: 0.85
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "16",
                                cy: "38",
                                r: "1.8",
                                fill: "#FFBA08",
                                opacity: 0.85
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    animate: {
                        rotateY: isHovered ? [
                            0,
                            -75,
                            0
                        ] : [
                            0,
                            -65,
                            0
                        ]
                    },
                    transition: {
                        duration: isHovered ? 0.12 : 0.22,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    },
                    style: {
                        transformOrigin: 'left center',
                        width: size * 0.48,
                        height: size * 0.85
                    },
                    className: "absolute left-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 30 50",
                        className: "w-full h-full drop-shadow-xs",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0,24 C2,12 12,2 24,4 C32,6 30,22 16,24 C6,25 2,24 0,24 Z",
                                fill: color,
                                opacity: 0.92
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6,20 C8,12 14,6 22,8 C26,10 24,18 14,20 Z",
                                fill: "#FFFFFF",
                                opacity: 0.4
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0,24 C4,28 16,32 22,40 C28,46 18,50 10,44 C4,38 2,28 0,24 Z",
                                fill: color,
                                opacity: 0.82
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "16",
                                cy: "14",
                                r: "2.5",
                                fill: "#FFBA08",
                                opacity: 0.85
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "14",
                                cy: "38",
                                r: "1.8",
                                fill: "#FFBA08",
                                opacity: 0.85
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-[3px] h-[65%] bg-[#07194F] rounded-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-1 left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#07194F]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-3 -left-2 w-4 h-3 pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 20 16",
                                fill: "none",
                                className: "w-full h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10,14 Q6,6 3,4",
                                        stroke: "#07194F",
                                        strokeWidth: "1",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "3",
                                        cy: "4",
                                        r: "0.8",
                                        fill: "#07194F"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10,14 Q14,6 17,4",
                                        stroke: "#07194F",
                                        strokeWidth: "1",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "17",
                                        cy: "4",
                                        r: "0.8",
                                        fill: "#07194F"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Butterfly, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = Butterfly;
function FlyingButterflies() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 overflow-hidden z-10",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Butterfly, {
                color: "#FF3F68",
                size: 32,
                initialX: "78%",
                initialY: "18%",
                path: {
                    x: [
                        0,
                        45,
                        90,
                        50,
                        10,
                        0
                    ],
                    y: [
                        0,
                        -35,
                        -15,
                        -50,
                        -25,
                        0
                    ],
                    rotate: [
                        0,
                        18,
                        -12,
                        22,
                        -10,
                        0
                    ]
                },
                duration: 11,
                delay: 0.2,
                className: "pointer-events-auto"
            }, void 0, false, {
                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Butterfly, {
                color: "#08BFC1",
                size: 26,
                initialX: "12%",
                initialY: "35%",
                path: {
                    x: [
                        0,
                        55,
                        30,
                        -35,
                        -10,
                        0
                    ],
                    y: [
                        0,
                        -25,
                        -55,
                        -30,
                        -10,
                        0
                    ],
                    rotate: [
                        -5,
                        15,
                        -20,
                        10,
                        -5,
                        -5
                    ]
                },
                duration: 14,
                delay: 1.5,
                className: "pointer-events-auto hidden sm:block"
            }, void 0, false, {
                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Butterfly, {
                color: "#FFBA08",
                size: 24,
                initialX: "62%",
                initialY: "65%",
                path: {
                    x: [
                        0,
                        35,
                        70,
                        40,
                        -10,
                        0
                    ],
                    y: [
                        0,
                        -20,
                        -10,
                        -35,
                        -15,
                        0
                    ],
                    rotate: [
                        5,
                        -15,
                        12,
                        -8,
                        10,
                        5
                    ]
                },
                duration: 9.5,
                delay: 2.8,
                className: "pointer-events-auto"
            }, void 0, false, {
                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Butterfly, {
                color: "#A75CE2",
                size: 22,
                initialX: "88%",
                initialY: "55%",
                path: {
                    x: [
                        0,
                        -40,
                        -70,
                        -30,
                        15,
                        0
                    ],
                    y: [
                        0,
                        -30,
                        -10,
                        -40,
                        -15,
                        0
                    ],
                    rotate: [
                        -10,
                        12,
                        -15,
                        10,
                        -8,
                        -10
                    ]
                },
                duration: 13,
                delay: 3.5,
                className: "pointer-events-auto hidden md:block"
            }, void 0, false, {
                fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/animations/FlyingButterflies.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_c1 = FlyingButterflies;
var _c, _c1;
__turbopack_context__.k.register(_c, "Butterfly");
__turbopack_context__.k.register(_c1, "FlyingButterflies");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animations/PinkMascot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PinkMascot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
'use client';
;
;
function PinkMascot({ size = 72, className = '', interactive = true }) {
    const height = size * 1.18;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 15,
            scale: 0.9
        },
        whileInView: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        viewport: {
            once: true
        },
        animate: {
            y: [
                0,
                -6,
                0
            ]
        },
        transition: {
            y: {
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut'
            },
            opacity: {
                duration: 0.5
            },
            scale: {
                duration: 0.5
            }
        },
        whileHover: interactive ? {
            scale: 1.08,
            y: -10,
            transition: {
                type: 'spring',
                stiffness: 350,
                damping: 15
            }
        } : undefined,
        whileTap: interactive ? {
            scale: 0.95
        } : undefined,
        className: `inline-block select-none ${interactive ? 'cursor-pointer' : 'pointer-events-none'} ${className}`,
        style: {
            width: size,
            height
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 118",
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-full h-full drop-shadow-sm overflow-visible",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
                    animate: {
                        scale: [
                            1,
                            1.15,
                            1
                        ],
                        opacity: [
                            0.85,
                            1,
                            0.85
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "36",
                            y: "5",
                            width: "5",
                            height: "13",
                            rx: "2.5",
                            fill: "#FFBA08",
                            transform: "rotate(-25 38 11)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/PinkMascot.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "52",
                            y: "3",
                            width: "5",
                            height: "13",
                            rx: "2.5",
                            fill: "#FFBA08"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/PinkMascot.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/animations/PinkMascot.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "50",
                    cy: "38",
                    r: "22",
                    fill: "#FF3F68"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/PinkMascot.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ellipse, {
                    cx: "43",
                    cy: "35",
                    rx: "2.2",
                    ry: "3.2",
                    fill: "#07194F",
                    animate: {
                        scaleY: [
                            1,
                            1,
                            0.1,
                            1
                        ]
                    },
                    transition: {
                        duration: 3.2,
                        repeat: Infinity,
                        repeatDelay: 2
                    },
                    style: {
                        transformOrigin: '43px 35px'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/PinkMascot.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ellipse, {
                    cx: "57",
                    cy: "35",
                    rx: "2.2",
                    ry: "3.2",
                    fill: "#07194F",
                    animate: {
                        scaleY: [
                            1,
                            1,
                            0.1,
                            1
                        ]
                    },
                    transition: {
                        duration: 3.2,
                        repeat: Infinity,
                        repeatDelay: 2
                    },
                    style: {
                        transformOrigin: '57px 35px'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/PinkMascot.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M43,41 Q50,50 57,41",
                    stroke: "#07194F",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/PinkMascot.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "38",
                    cy: "41",
                    r: "3",
                    fill: "#FFBA08",
                    opacity: "0.6"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/PinkMascot.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "62",
                    cy: "41",
                    r: "3",
                    fill: "#FFBA08",
                    opacity: "0.6"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/PinkMascot.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "37",
                    y: "60",
                    width: "26",
                    height: "42",
                    rx: "11",
                    fill: "#FF3F68"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/PinkMascot.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
                    animate: {
                        rotate: [
                            0,
                            -18,
                            0,
                            -18,
                            0
                        ]
                    },
                    transition: {
                        duration: 1.8,
                        repeat: Infinity,
                        repeatDelay: 2.2,
                        ease: 'easeInOut'
                    },
                    style: {
                        transformOrigin: '38px 68px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M38,68 C22,64 15,46 20,38",
                        stroke: "#FF3F68",
                        strokeWidth: "11",
                        strokeLinecap: "round",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/PinkMascot.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/PinkMascot.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M62,68 C73,74 77,83 75,91",
                    stroke: "#FF3F68",
                    strokeWidth: "10",
                    strokeLinecap: "round",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/PinkMascot.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/animations/PinkMascot.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/animations/PinkMascot.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = PinkMascot;
var _c;
__turbopack_context__.k.register(_c, "PinkMascot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animations/ScrollReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
'use client';
;
;
function ScrollReveal({ children, className = '', delay = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 16
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: '-40px'
        },
        transition: {
            duration: 0.5,
            delay,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/animations/ScrollReveal.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animations/TealMascot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TealMascot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
'use client';
;
;
function TealMascot({ size = 72, className = '', interactive = true, playfulJump = true }) {
    const height = size * 1.18;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 15,
            scale: 0.9
        },
        whileInView: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        viewport: {
            once: true
        },
        animate: playfulJump ? {
            y: [
                0,
                -5,
                0,
                0,
                -18,
                2,
                0
            ],
            scaleX: [
                1,
                1,
                1,
                1.06,
                0.92,
                1.08,
                1
            ],
            scaleY: [
                1,
                1,
                1,
                0.94,
                1.12,
                0.92,
                1
            ],
            rotate: [
                0,
                2,
                -2,
                0,
                3,
                -1,
                0
            ]
        } : {
            y: [
                0,
                -7,
                0
            ],
            rotate: [
                0,
                2,
                -2,
                0
            ]
        },
        transition: {
            y: {
                duration: 5,
                times: [
                    0,
                    0.3,
                    0.55,
                    0.68,
                    0.8,
                    0.92,
                    1
                ],
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2
            },
            scaleX: {
                duration: 5,
                times: [
                    0,
                    0.3,
                    0.55,
                    0.68,
                    0.8,
                    0.92,
                    1
                ],
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2
            },
            scaleY: {
                duration: 5,
                times: [
                    0,
                    0.3,
                    0.55,
                    0.68,
                    0.8,
                    0.92,
                    1
                ],
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2
            },
            rotate: {
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
            },
            opacity: {
                duration: 0.5,
                delay: 0.1
            },
            scale: {
                duration: 0.5,
                delay: 0.1
            }
        },
        whileHover: interactive ? {
            scale: 1.1,
            y: -10,
            rotate: [
                0,
                -4,
                4,
                0
            ],
            transition: {
                type: 'spring',
                stiffness: 350,
                damping: 15
            }
        } : undefined,
        whileTap: interactive ? {
            scale: 0.94
        } : undefined,
        className: `inline-block select-none ${interactive ? 'cursor-pointer' : 'pointer-events-none'} ${className}`,
        style: {
            width: size,
            height,
            transformOrigin: 'bottom center'
        },
        "aria-label": "InnoTots Teal Mascot",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 118",
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-full h-full drop-shadow-sm overflow-visible",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
                    animate: {
                        scale: [
                            1,
                            1.15,
                            1
                        ],
                        opacity: [
                            0.85,
                            1,
                            0.85
                        ]
                    },
                    transition: {
                        duration: 2.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.4
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "56",
                            y: "5",
                            width: "5",
                            height: "13",
                            rx: "2.5",
                            fill: "#FFBA08",
                            transform: "rotate(25 58 11)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/TealMascot.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "67",
                            y: "11",
                            width: "5",
                            height: "11",
                            rx: "2.5",
                            fill: "#A75CE2",
                            transform: "rotate(45 69 16)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/TealMascot.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/animations/TealMascot.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "50",
                    cy: "38",
                    r: "22",
                    fill: "#08BFC1"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/TealMascot.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ellipse, {
                    cx: "43",
                    cy: "35",
                    rx: "2.2",
                    ry: "3.2",
                    fill: "#07194F",
                    animate: {
                        scaleY: [
                            1,
                            1,
                            0.1,
                            1
                        ]
                    },
                    transition: {
                        duration: 3.5,
                        repeat: Infinity,
                        repeatDelay: 2.4
                    },
                    style: {
                        transformOrigin: '43px 35px'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/TealMascot.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ellipse, {
                    cx: "57",
                    cy: "35",
                    rx: "2.2",
                    ry: "3.2",
                    fill: "#07194F",
                    animate: {
                        scaleY: [
                            1,
                            1,
                            0.1,
                            1
                        ]
                    },
                    transition: {
                        duration: 3.5,
                        repeat: Infinity,
                        repeatDelay: 2.4
                    },
                    style: {
                        transformOrigin: '57px 35px'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/TealMascot.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M42,40 Q50,51 58,40",
                    stroke: "#07194F",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/TealMascot.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "38",
                    cy: "41",
                    r: "3",
                    fill: "#FFBA08",
                    opacity: "0.6"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/TealMascot.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "62",
                    cy: "41",
                    r: "3",
                    fill: "#FFBA08",
                    opacity: "0.6"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/TealMascot.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "37",
                    y: "60",
                    width: "26",
                    height: "42",
                    rx: "11",
                    fill: "#08BFC1"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/TealMascot.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].path, {
                    d: "M38,68 C24,66 16,74 18,84",
                    stroke: "#08BFC1",
                    strokeWidth: "10",
                    strokeLinecap: "round",
                    fill: "none",
                    animate: {
                        rotate: [
                            0,
                            -6,
                            0
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    },
                    style: {
                        transformOrigin: '38px 68px'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/TealMascot.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
                    animate: {
                        rotate: [
                            0,
                            18,
                            -4,
                            18,
                            -4,
                            18,
                            0
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3.5,
                        ease: 'easeInOut',
                        delay: 0.6
                    },
                    style: {
                        transformOrigin: '62px 68px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M62,68 C76,64 85,50 83,40",
                        stroke: "#08BFC1",
                        strokeWidth: "10",
                        strokeLinecap: "round",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/TealMascot.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/TealMascot.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/animations/TealMascot.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/animations/TealMascot.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = TealMascot;
var _c;
__turbopack_context__.k.register(_c, "TealMascot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animations/TwinklingStar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TwinklingStar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function TwinklingStar({ size = 24, color = '#FFBA08', delay = 0, duration = 2.2, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-block select-none pointer-events-none ${className}`,
        style: {
            animationName: 'twinkle',
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            transformOrigin: 'center',
            width: size,
            height: size
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-full h-full drop-shadow-xs overflow-visible",
            style: {
                transformOrigin: 'center'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/animations/TwinklingStar.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/animations/TwinklingStar.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/animations/TwinklingStar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = TwinklingStar;
var _c;
__turbopack_context__.k.register(_c, "TwinklingStar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/AdmissionCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdmissionCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/FloatingShape.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$AnimatedRainbow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/AnimatedRainbow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$PinkMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/PinkMascot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$TealMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/TealMascot.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function AdmissionCTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden py-20 lg:py-28",
        style: {
            backgroundColor: '#572A8D'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-10 left-1/2 -translate-x-1/2 opacity-30 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$AnimatedRainbow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    width: 320,
                    height: 180
                }, void 0, false, {
                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                shape: "circle",
                color: "#FFBA08",
                size: 90,
                delay: 0,
                className: "absolute -top-10 -left-10 pointer-events-none",
                opacity: 0.2
            }, void 0, false, {
                fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                shape: "star",
                color: "#FF3F68",
                size: 60,
                delay: 1,
                className: "absolute top-10 right-16 pointer-events-none",
                opacity: 0.25
            }, void 0, false, {
                fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                shape: "circle",
                color: "#08BFC1",
                size: 110,
                delay: 0.5,
                className: "absolute -bottom-10 right-10 pointer-events-none",
                opacity: 0.2
            }, void 0, false, {
                fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                shape: "triangle",
                color: "#DDF3F1",
                size: 50,
                delay: 2,
                className: "absolute bottom-10 left-1/4 pointer-events-none",
                opacity: 0.2
            }, void 0, false, {
                fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 shadow-sm border border-white/20",
                            style: {
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                color: '#FFBA08',
                                fontFamily: 'var(--font-nunito)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 16,
                                    className: "animate-spin-slow"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Admissions Open for Academic Year"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-5",
                            style: {
                                fontFamily: 'var(--font-fredoka)'
                            },
                            children: "A Happy Beginning Starts Here!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed",
                            style: {
                                fontFamily: 'var(--font-nunito)'
                            },
                            children: "Discover a joyful learning journey for your little one. Limited seats available — take the first step towards a bright future today."
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative inline-flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block absolute -left-24 bottom-0 z-10 pointer-events-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$PinkMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        size: 64
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/admissions-contact",
                                            className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200",
                                            style: {
                                                backgroundColor: '#FFBA08',
                                                color: '#07194F',
                                                fontFamily: 'var(--font-nunito)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Enquire for Admission"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/admissions-contact",
                                            className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-base border-2 border-white/80 text-white hover:bg-white/10 active:scale-95 transition-all duration-200",
                                            style: {
                                                fontFamily: 'var(--font-nunito)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Book a Campus Tour"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block absolute -right-24 bottom-0 z-10 pointer-events-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$TealMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        size: 64
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-white/80 text-xs sm:text-sm",
                            style: {
                                fontFamily: 'var(--font-nunito)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-[#08BFC1]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        "Ages 1.5 to 5.5 Years"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-[#FFBA08]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        "Playgroup · Nursery · LKG · UKG"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-[#FF3F68]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        "Safe & Caring Campus"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/AdmissionCTA.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/AdmissionCTA.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = AdmissionCTA;
var _c;
__turbopack_context__.k.register(_c, "AdmissionCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/programs/DailySchedule.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DailySchedule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
'use client';
;
;
;
;
;
const scheduleItems = [
    {
        time: '08:00 AM',
        activity: 'Arrival & Warm Welcome',
        description: 'Children arrive, unpack their little bags, greet teachers and settle into morning free play corners.',
        color: '#FF3F68'
    },
    {
        time: '08:30 AM',
        activity: 'Circle Time & Rhymes',
        description: 'Morning gathering with welcome songs, weather wheel, calendar fun and joyful sharing time.',
        color: '#FFBA08'
    },
    {
        time: '09:00 AM',
        activity: 'Core Learning Activity',
        description: 'Structured, playful activities focused on phonics, numbers, shapes and sensory exploration.',
        color: '#08BFC1'
    },
    {
        time: '09:45 AM',
        activity: 'Healthy Snack Break',
        description: 'Social dining habits, table etiquette and nutritious refreshment shared with classmates.',
        color: '#A75CE2'
    },
    {
        time: '10:15 AM',
        activity: 'Creative Expression & Art',
        description: 'Hands-on painting, clay molding, music and sensory building activities.',
        color: '#572A8D'
    },
    {
        time: '11:00 AM',
        activity: 'Outdoor Physical Play',
        description: 'Free movement, jungle gym, balance beam and cooperative outdoor playground games.',
        color: '#FF3F68'
    },
    {
        time: '11:45 AM',
        activity: 'Story Time & Mindfulness',
        description: 'Calming wind-down circle with picture books, quiet music and gentle reflection.',
        color: '#FFBA08'
    },
    {
        time: '12:30 PM',
        activity: 'Reflection & Farewell',
        description: 'Reviewing the day\'s happy moments, pack-up rituals and warm goodbyes with parents.',
        color: '#08BFC1'
    }
];
function DailySchedule() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 lg:py-24 bg-white relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        badge: "Routine & Rhythm",
                        badgeColor: "#572A8D",
                        badgeBg: "#F4EFF9",
                        title: "A Day at InnoTots",
                        subtitle: "A glimpse into our balanced daily rhythm of joyful play, guided learning and mindful rest.",
                        center: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/programs/DailySchedule.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/programs/DailySchedule.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 mb-8 sm:mb-10 p-3 sm:p-4 rounded-2xl bg-[#FFF0F3] border border-[#FF3F68]/20 flex items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#FF3F68] font-bold text-center",
                    style: {
                        fontFamily: 'var(--font-nunito)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                            size: 18,
                            className: "flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/programs/DailySchedule.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Note: Illustrative daily routine; specific timings are gently adapted per program age tier."
                        }, void 0, false, {
                            fileName: "[project]/src/components/programs/DailySchedule.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/programs/DailySchedule.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative space-y-4 sm:space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-[18px] sm:left-[24px] top-6 sm:top-8 bottom-6 sm:bottom-8 w-1 -translate-x-1/2 rounded-full bg-gray-100",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/programs/DailySchedule.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            initial: {
                                scaleY: 0
                            },
                            whileInView: {
                                scaleY: 1
                            },
                            viewport: {
                                once: true,
                                margin: '-40px'
                            },
                            transition: {
                                duration: 1.2,
                                ease: [
                                    0.25,
                                    0.1,
                                    0.25,
                                    1
                                ]
                            },
                            className: "absolute left-[18px] sm:left-[24px] top-6 sm:top-8 bottom-6 sm:bottom-8 w-1 -translate-x-1/2 rounded-full origin-top z-0",
                            style: {
                                background: 'linear-gradient(180deg, #FF3F68 0%, #FFBA08 25%, #08BFC1 50%, #A75CE2 75%, #572A8D 100%)'
                            },
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/programs/DailySchedule.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        scheduleItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: i * 0.04,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center gap-3.5 sm:gap-5 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-9 sm:w-12 flex-shrink-0 flex items-center justify-center relative z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                initial: {
                                                    scale: 0,
                                                    opacity: 0
                                                },
                                                whileInView: {
                                                    scale: 1,
                                                    opacity: 1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    type: 'spring',
                                                    stiffness: 450,
                                                    damping: 24,
                                                    delay: i * 0.05 + 0.15
                                                },
                                                className: "w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 sm:border-[3px] border-white shadow-xs transition-transform duration-200 group-hover:scale-125 relative flex items-center justify-center",
                                                style: {
                                                    backgroundColor: item.color
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -inset-1 rounded-full opacity-0 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none",
                                                    style: {
                                                        backgroundColor: item.color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/programs/DailySchedule.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/programs/DailySchedule.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/programs/DailySchedule.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.01,
                                                x: 5
                                            },
                                            transition: {
                                                type: 'spring',
                                                stiffness: 350,
                                                damping: 25
                                            },
                                            className: "flex-1 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 bg-white rounded-2xl p-3.5 sm:p-5 shadow-xs hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-[#FF3F68]/25",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 w-24 sm:w-26 h-10 sm:h-11 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-xs group-hover:scale-105 transition-transform",
                                                    style: {
                                                        backgroundColor: item.color,
                                                        fontFamily: 'var(--font-nunito)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            size: 13,
                                                            className: "mr-1.5 opacity-85"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/programs/DailySchedule.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: item.time
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/programs/DailySchedule.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/programs/DailySchedule.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-base sm:text-lg text-[#07194F] group-hover:text-[#FF3F68] transition-colors mb-0.5",
                                                            style: {
                                                                fontFamily: 'var(--font-fredoka)'
                                                            },
                                                            children: item.activity
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/programs/DailySchedule.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs sm:text-sm text-gray-600 leading-relaxed",
                                                            style: {
                                                                fontFamily: 'var(--font-nunito)'
                                                            },
                                                            children: item.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/programs/DailySchedule.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/programs/DailySchedule.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/programs/DailySchedule.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/programs/DailySchedule.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/src/components/programs/DailySchedule.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/programs/DailySchedule.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/programs/DailySchedule.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/programs/DailySchedule.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = DailySchedule;
var _c;
__turbopack_context__.k.register(_c, "DailySchedule");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/programs/ProgramsHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgramsHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/FloatingShape.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$AlphabetBlocks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/AlphabetBlocks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$AnimatedCloud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/AnimatedCloud.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$TwinklingStar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/TwinklingStar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$PinkMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/PinkMascot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingButterflies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/FlyingButterflies.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingBirds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/FlyingBirds.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/programs.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function ProgramsHero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-20 md:pb-28 select-none",
        style: {
            background: 'linear-gradient(180deg, #FFFBEC 0%, #E6F7F5 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$AnimatedCloud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: 80,
                delay: 0,
                duration: 20,
                className: "absolute top-4 sm:top-6 left-[2%] sm:left-[6%]"
            }, void 0, false, {
                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$AnimatedCloud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: 65,
                delay: 3,
                duration: 18,
                className: "absolute top-10 sm:top-16 right-[3%] sm:right-[8%]"
            }, void 0, false, {
                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$TwinklingStar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                color: "#FFBA08",
                size: 20,
                delay: 0.4,
                className: "absolute top-8 sm:top-10 left-[18%] sm:left-[22%] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$TwinklingStar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                color: "#FF3F68",
                size: 16,
                delay: 1.2,
                className: "absolute top-12 sm:top-14 right-[20%] sm:right-[25%] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-12 right-12 pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingButterflies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Butterfly"], {
                    color: "#FF3F68",
                    size: 26,
                    duration: 10
                }, void 0, false, {
                    fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-16 left-10 pointer-events-auto hidden sm:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingBirds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CuteBird"], {
                    bodyColor: "#08BFC1",
                    wingColor: "#FFBA08",
                    size: 34,
                    duration: 13
                }, void 0, false, {
                    fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                shape: "circle",
                color: "#FFBA08",
                size: 70,
                delay: 0,
                className: "absolute top-6 sm:top-8 right-4 sm:right-8 pointer-events-none",
                opacity: 0.18
            }, void 0, false, {
                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                shape: "star",
                color: "#FF3F68",
                size: 45,
                delay: 1,
                className: "absolute bottom-12 sm:bottom-16 left-4 sm:left-8 pointer-events-none",
                opacity: 0.18
            }, void 0, false, {
                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                shape: "circle",
                color: "#A75CE2",
                size: 50,
                delay: 0.5,
                className: "absolute top-16 sm:top-20 left-6 sm:left-16 pointer-events-none",
                opacity: 0.15
            }, void 0, false, {
                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4 flex items-end justify-center gap-2 pointer-events-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$AlphabetBlocks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: 36
                            }, void 0, false, {
                                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$PinkMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: 46
                            }, void 0, false, {
                                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold mb-4 sm:mb-6 bg-white/80 shadow-2xs text-gray-600",
                        "aria-label": "Breadcrumb",
                        style: {
                            fontFamily: 'var(--font-nunito)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-[#FF3F68] transition-colors",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-300",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#FF3F68] font-bold",
                                children: "Programs & Activities"
                            }, void 0, false, {
                                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 15
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "text-3xl sm:text-5xl lg:text-6xl font-semibold mb-3 sm:mb-4 text-[#07194F] tracking-tight max-w-xs sm:max-w-xl mx-auto leading-[1.18]",
                        style: {
                            fontFamily: 'var(--font-fredoka)'
                        },
                        children: "Programs & Activities"
                    }, void 0, false, {
                        fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 15
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.15
                        },
                        className: "text-sm sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto text-gray-700 leading-relaxed px-3 sm:px-0",
                        style: {
                            fontFamily: 'var(--font-nunito)'
                        },
                        children: "Thoughtfully structured programs for every stage of early childhood, guiding each child from joyful first steps to confident school readiness."
                    }, void 0, false, {
                        fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 min-[390px]:grid-cols-2 md:flex md:flex-row md:flex-wrap md:justify-center gap-2.5 sm:gap-3 max-w-md md:max-w-none mx-auto w-full",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["programs"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${p.id}`,
                                className: "inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 min-h-[44px] rounded-full text-xs sm:text-sm font-bold text-white shadow-2xs hover:shadow-md hover:scale-105 active:scale-95 transition-all text-center w-full md:w-auto",
                                style: {
                                    backgroundColor: p.color,
                                    fontFamily: 'var(--font-nunito)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: p.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "opacity-90 font-medium",
                                        children: [
                                            "(",
                                            p.ageRange,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 1440 40",
                    preserveAspectRatio: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-full h-8 sm:h-10 md:h-12 block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z",
                        fill: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/programs/ProgramsHero.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/programs/ProgramsHero.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = ProgramsHero;
var _c;
__turbopack_context__.k.register(_c, "ProgramsHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function SectionHeading({ badge, badgeColor = '#FF3F68', badgeBg = '#FFF0F3', title, subtitle, center = false, color = '#07194F', className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mb-8 md:mb-12', center ? 'text-center' : 'text-left', className),
        children: [
            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs', center ? 'mx-auto' : ''),
                style: {
                    backgroundColor: badgeBg,
                    color: badgeColor,
                    fontFamily: 'var(--font-nunito)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: badge
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SectionHeading.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeading.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-3",
                style: {
                    fontFamily: 'var(--font-fredoka)',
                    color
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeading.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1.5 w-14 rounded-full mb-4",
                style: {
                    backgroundColor: badgeColor || '#FF3F68',
                    marginLeft: center ? 'auto' : '0',
                    marginRight: center ? 'auto' : '0'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeading.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base sm:text-lg max-w-2xl leading-relaxed text-gray-600",
                style: {
                    fontFamily: 'var(--font-nunito)',
                    marginLeft: center ? 'auto' : '0',
                    marginRight: center ? 'auto' : '0'
                },
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeading.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SectionHeading.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/programs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "programs",
    ()=>programs
]);
const programs = [
    {
        id: 'playgroup',
        name: 'Playgroup',
        tagline: 'First steps into a world of wonder',
        ageRange: '1.5 – 2.5 years',
        description: 'Our Playgroup program nurtures the youngest learners through sensory play, music, and gentle social interaction in a warm and welcoming environment.',
        highlights: [
            'Early social interaction',
            'Sensory experiences',
            'Music and movement',
            'Learning through play',
            'Caring and safe environment'
        ],
        color: '#FF3F68',
        imagePath: '/images/programs/playgroup.jpg'
    },
    {
        id: 'nursery',
        name: 'Nursery',
        tagline: 'Curious minds, creative hearts',
        ageRange: '2.5 – 3.5 years',
        description: 'Nursery focuses on early communication, storytelling, colors and shapes, creative activities and motor development through joyful exploration.',
        highlights: [
            'Early communication',
            'Storytelling & imagination',
            'Colors, shapes & textures',
            'Creative art activities',
            'Motor development'
        ],
        color: '#FFBA08',
        imagePath: '/images/programs/nursery.jpg'
    },
    {
        id: 'lkg',
        name: 'LKG',
        tagline: 'Building foundations for lifelong learning',
        ageRange: '3.5 – 4.5 years',
        description: 'Lower Kindergarten builds foundational literacy, number awareness and creative expression through structured yet playful learning activities.',
        highlights: [
            'Foundational literacy',
            'Number awareness',
            'Creative expression',
            'Group learning',
            'Interactive activities'
        ],
        color: '#08BFC1',
        imagePath: '/images/programs/lkg.jpg'
    },
    {
        id: 'ukg',
        name: 'UKG',
        tagline: 'Ready, set, grow!',
        ageRange: '4.5 – 5.5 years',
        description: 'Upper Kindergarten prepares children for primary school with early reading, writing, mathematics and strong social skills built through collaborative play.',
        highlights: [
            'School readiness',
            'Foundational reading',
            'Writing preparation',
            'Number concepts',
            'Confidence building',
            'Problem-solving activities'
        ],
        color: '#A75CE2',
        imagePath: '/images/programs/ukg.jpg'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0dsj6lzx5eh1y._.js.map