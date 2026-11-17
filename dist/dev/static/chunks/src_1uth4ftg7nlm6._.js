(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/animations/DriftingCloudsLayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DriftingCloudsLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$AnimatedCloud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/AnimatedCloud.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function DriftingCloudsLayer({ className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                initial: {
                    x: '-15%'
                },
                animate: {
                    x: '115%'
                },
                transition: {
                    duration: 38,
                    repeat: Infinity,
                    ease: 'linear'
                },
                className: "absolute top-4 sm:top-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$AnimatedCloud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 95,
                    opacity: 0.85
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/DriftingCloudsLayer.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/animations/DriftingCloudsLayer.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                initial: {
                    x: '30%'
                },
                animate: {
                    x: '125%'
                },
                transition: {
                    duration: 44,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 0
                },
                className: "absolute top-16 sm:top-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$AnimatedCloud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 70,
                    opacity: 0.7
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/DriftingCloudsLayer.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/animations/DriftingCloudsLayer.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                initial: {
                    x: '-30%'
                },
                animate: {
                    x: '110%'
                },
                transition: {
                    duration: 48,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 15
                },
                className: "absolute top-6 sm:top-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$AnimatedCloud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 80,
                    opacity: 0.75
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/DriftingCloudsLayer.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/animations/DriftingCloudsLayer.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/animations/DriftingCloudsLayer.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = DriftingCloudsLayer;
var _c;
__turbopack_context__.k.register(_c, "DriftingCloudsLayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animations/FloatingBalloon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingBalloon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const defaultColors = [
    '#FF3F68',
    '#FFBA08',
    '#08BFC1',
    '#A75CE2'
];
function FloatingBalloon({ color, delay = 0, duration = 5, size = 36, className = '', swayVariant = 1 }) {
    const balloonColor = color || defaultColors[0];
    const animName = `float-balloon-${swayVariant}`;
    const heightRatio = 86 / 44; // Proportional balloon + string viewBox ratio
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-block select-none pointer-events-none ${className}`,
        style: {
            animationName: animName,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            transformOrigin: '50% 100%',
            width: size,
            height: size * heightRatio
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 44 86",
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-full h-full overflow-visible drop-shadow-xs",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "22",
                    cy: "22",
                    rx: "17",
                    ry: "20",
                    fill: balloonColor
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/FloatingBalloon.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "16",
                    cy: "15",
                    rx: "5",
                    ry: "7",
                    fill: "white",
                    opacity: "0.32"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/FloatingBalloon.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "19,45 25,45 22,42",
                    fill: balloonColor
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/FloatingBalloon.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22,45 C20,56 25,68 22,84",
                    fill: "none",
                    stroke: balloonColor,
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    opacity: "0.7"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/FloatingBalloon.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/animations/FloatingBalloon.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/animations/FloatingBalloon.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = FloatingBalloon;
var _c;
__turbopack_context__.k.register(_c, "FloatingBalloon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animations/FloatingBalloonsGroup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingBalloonsGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingBalloon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/FloatingBalloon.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function FloatingBalloonsGroup({ className = '', variant = 'hero-left' }) {
    if (variant === 'hero-left') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `pointer-events-none select-none z-10 ${className}`,
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                animate: {
                    y: [
                        0,
                        -18,
                        0
                    ],
                    rotate: [
                        -2,
                        2.5,
                        -2
                    ]
                },
                transition: {
                    duration: 5.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                className: "pointer-events-auto cursor-pointer",
                whileHover: {
                    scale: 1.15,
                    y: -25
                },
                whileTap: {
                    scale: 0.9,
                    y: -30
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingBalloon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    color: "#FF3F68",
                    size: 38,
                    swayVariant: 1,
                    duration: 5
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/FloatingBalloonsGroup.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/animations/FloatingBalloonsGroup.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/animations/FloatingBalloonsGroup.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this);
    }
    if (variant === 'corner-cluster') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `pointer-events-none select-none flex items-end gap-1 ${className}`,
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    animate: {
                        y: [
                            0,
                            -14,
                            0
                        ],
                        rotate: [
                            -2,
                            3,
                            -2
                        ]
                    },
                    transition: {
                        duration: 4.8,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    },
                    className: "pointer-events-auto cursor-pointer",
                    whileHover: {
                        scale: 1.15
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingBalloon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        color: "#FF3F68",
                        size: 32,
                        swayVariant: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/FloatingBalloonsGroup.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/FloatingBalloonsGroup.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    animate: {
                        y: [
                            0,
                            -20,
                            0
                        ],
                        rotate: [
                            2,
                            -3,
                            2
                        ]
                    },
                    transition: {
                        duration: 5.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5
                    },
                    className: "pointer-events-auto cursor-pointer -ml-2 -mb-2",
                    whileHover: {
                        scale: 1.15
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingBalloon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        color: "#FFBA08",
                        size: 36,
                        swayVariant: 2
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/FloatingBalloonsGroup.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/FloatingBalloonsGroup.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    animate: {
                        y: [
                            0,
                            -16,
                            0
                        ],
                        rotate: [
                            -3,
                            2,
                            -3
                        ]
                    },
                    transition: {
                        duration: 5.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1
                    },
                    className: "pointer-events-auto cursor-pointer -ml-2",
                    whileHover: {
                        scale: 1.15
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingBalloon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        color: "#08BFC1",
                        size: 30,
                        swayVariant: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/FloatingBalloonsGroup.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/FloatingBalloonsGroup.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/animations/FloatingBalloonsGroup.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `pointer-events-none select-none ${className}`,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingBalloon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            color: "#A75CE2",
            size: 32,
            swayVariant: 1
        }, void 0, false, {
            fileName: "[project]/src/components/animations/FloatingBalloonsGroup.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/animations/FloatingBalloonsGroup.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_c = FloatingBalloonsGroup;
var _c;
__turbopack_context__.k.register(_c, "FloatingBalloonsGroup");
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
"[project]/src/components/animations/InteractiveCartoonCharacters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PeekingGiraffe",
    ()=>PeekingGiraffe,
    "RabbitHotAirBalloon",
    ()=>RabbitHotAirBalloon,
    "StorybookChildrenInteractiveLayer",
    ()=>StorybookChildrenInteractiveLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
function CharacterBubble({ text, subtext, emoji = '✨', color = '#FF3F68', visible, position = 'top' }) {
    const positionClasses = {
        top: '-top-14 left-1/2 -translate-x-1/2',
        'top-right': '-top-14 -right-4',
        'top-left': '-top-14 -left-4'
    }[position];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.7,
                y: 10
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                scale: 0.8,
                y: -6
            },
            transition: {
                type: 'spring',
                stiffness: 450,
                damping: 25
            },
            className: `absolute ${positionClasses} z-40 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-2xl shadow-md border border-gray-100 flex items-center gap-2 whitespace-nowrap pointer-events-none`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm select-none",
                    children: emoji
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs font-bold leading-tight",
                            style: {
                                color,
                                fontFamily: 'var(--font-fredoka)'
                            },
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        subtext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] text-gray-500 font-medium",
                            style: {
                                fontFamily: 'var(--font-nunito)'
                            },
                            children: subtext
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 46,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100"
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
            lineNumber: 33,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = CharacterBubble;
function PeekingGiraffe({ className = '', size = 110 }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative inline-block select-none ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CharacterBubble, {
                text: "Hello little explorer!",
                subtext: "Let's reach high!",
                emoji: "🦒",
                color: "#FFBA08",
                visible: active,
                position: "top"
            }, void 0, false, {
                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                animate: {
                    y: active ? -12 : [
                        0,
                        -6,
                        0
                    ],
                    rotate: active ? [
                        0,
                        4,
                        -4,
                        0
                    ] : [
                        -1,
                        2,
                        -1
                    ]
                },
                transition: {
                    y: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    },
                    rotate: {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }
                },
                whileHover: {
                    scale: 1.12,
                    y: -16
                },
                whileTap: {
                    scale: 0.95
                },
                onMouseEnter: ()=>setActive(true),
                onMouseLeave: ()=>setActive(false),
                onClick: ()=>setActive(!active),
                className: "cursor-pointer",
                style: {
                    width: size,
                    height: size * 1.3
                },
                "aria-label": "Friendly smiling giraffe",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 100 130",
                    className: "w-full h-full drop-shadow-sm overflow-visible",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M40,130 C40,80 44,45 52,35 C56,45 60,80 60,130 Z",
                            fill: "#FFBA08"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "48",
                            cy: "85",
                            rx: "6",
                            ry: "8",
                            fill: "#E28905",
                            opacity: 0.75
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "54",
                            cy: "110",
                            rx: "5",
                            ry: "7",
                            fill: "#E28905",
                            opacity: 0.75
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "50",
                            cy: "55",
                            rx: "4",
                            ry: "6",
                            fill: "#E28905",
                            opacity: 0.75
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "44",
                            y1: "28",
                            x2: "38",
                            y2: "10",
                            stroke: "#FFBA08",
                            strokeWidth: "4",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "38",
                            cy: "9",
                            r: "4.5",
                            fill: "#E28905"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "60",
                            y1: "28",
                            x2: "66",
                            y2: "10",
                            stroke: "#FFBA08",
                            strokeWidth: "4",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "66",
                            cy: "9",
                            r: "4.5",
                            fill: "#E28905"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ellipse, {
                            cx: "32",
                            cy: "28",
                            rx: "8",
                            ry: "4",
                            fill: "#FFBA08",
                            transform: "rotate(-25 32 28)",
                            animate: {
                                rotate: [
                                    -25,
                                    -35,
                                    -25
                                ]
                            },
                            transition: {
                                duration: 2.2,
                                repeat: Infinity
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ellipse, {
                            cx: "72",
                            cy: "28",
                            rx: "8",
                            ry: "4",
                            fill: "#FFBA08",
                            transform: "rotate(25 72 28)",
                            animate: {
                                rotate: [
                                    25,
                                    35,
                                    25
                                ]
                            },
                            transition: {
                                duration: 2.2,
                                repeat: Infinity,
                                delay: 0.3
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "52",
                            cy: "32",
                            rx: "16",
                            ry: "14",
                            fill: "#FFBA08"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "52",
                            cy: "40",
                            rx: "13",
                            ry: "10",
                            fill: "#FFF2C2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "48",
                            cy: "40",
                            r: "1.5",
                            fill: "#C47300"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "56",
                            cy: "40",
                            r: "1.5",
                            fill: "#C47300"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M46,43 Q52,47 58,43",
                            stroke: "#C47300",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "45",
                                    cy: "27",
                                    r: "4",
                                    fill: "#FFFFFF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ellipse, {
                                    cx: "45.5",
                                    cy: "27",
                                    rx: "2.5",
                                    ry: "3",
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
                                        repeatDelay: 2.5
                                    },
                                    style: {
                                        transformOrigin: '45.5px 27px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "46.5",
                                    cy: "26",
                                    r: "1",
                                    fill: "#FFFFFF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "59",
                                    cy: "27",
                                    r: "4",
                                    fill: "#FFFFFF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ellipse, {
                                    cx: "59.5",
                                    cy: "27",
                                    rx: "2.5",
                                    ry: "3",
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
                                        repeatDelay: 2.5
                                    },
                                    style: {
                                        transformOrigin: '59.5px 27px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "60.5",
                                    cy: "26",
                                    r: "1",
                                    fill: "#FFFFFF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "38",
                            cy: "34",
                            rx: "3.5",
                            ry: "2.5",
                            fill: "#FF3F68",
                            opacity: 0.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "66",
                            cy: "34",
                            rx: "3.5",
                            ry: "2.5",
                            fill: "#FF3F68",
                            opacity: 0.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(PeekingGiraffe, "1cfVChV6gA1Fk8+xDnwTj3gmgZo=");
_c1 = PeekingGiraffe;
function RabbitHotAirBalloon({ className = '', size = 120 }) {
    _s1();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative inline-block select-none ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CharacterBubble, {
                text: "Soaring high in dreams!",
                subtext: "Hop aboard with us!",
                emoji: "🐰",
                color: "#FF3F68",
                visible: active,
                position: "top"
            }, void 0, false, {
                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                animate: {
                    y: [
                        0,
                        -18,
                        0
                    ],
                    rotate: [
                        -1.8,
                        1.8,
                        -1.8
                    ]
                },
                transition: {
                    y: {
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    },
                    rotate: {
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }
                },
                whileHover: {
                    scale: 1.1,
                    y: -24
                },
                whileTap: {
                    scale: 0.95
                },
                onMouseEnter: ()=>setActive(true),
                onMouseLeave: ()=>setActive(false),
                onClick: ()=>setActive(!active),
                className: "cursor-pointer",
                style: {
                    width: size,
                    height: size * 1.45
                },
                "aria-label": "Cute rabbit floating in colorful hot air balloon",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 120 174",
                    className: "w-full h-full drop-shadow-md overflow-visible",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                id: "balloonGlow",
                                cx: "40%",
                                cy: "30%",
                                r: "70%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#FFFFFF",
                                        stopOpacity: "0.4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#FFFFFF",
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M60,10 C25,10 10,40 16,80 C20,102 46,116 54,120 L66,120 C74,116 100,102 104,80 C110,40 95,10 60,10 Z",
                            fill: "#FF3F68"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M60,10 C42,10 32,40 36,80 C38,102 52,116 56,120 L64,120 C68,116 82,102 84,80 C88,40 78,10 60,10 Z",
                            fill: "#FFBA08"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M60,10 C50,10 46,40 48,80 C50,102 56,116 58,120 L62,120 C64,116 70,102 72,80 C74,40 70,10 60,10 Z",
                            fill: "#08BFC1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M60,10 C25,10 10,40 16,80 C20,102 46,116 54,120 L66,120 C74,116 100,102 104,80 C110,40 95,10 60,10 Z",
                            fill: "url(#balloonGlow)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "38",
                            y1: "120",
                            x2: "44",
                            y2: "142",
                            stroke: "#B87333",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "50",
                            y1: "120",
                            x2: "48",
                            y2: "142",
                            stroke: "#B87333",
                            strokeWidth: "1.2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "70",
                            y1: "120",
                            x2: "72",
                            y2: "142",
                            stroke: "#B87333",
                            strokeWidth: "1.2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "82",
                            y1: "120",
                            x2: "76",
                            y2: "142",
                            stroke: "#B87333",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "42",
                            y: "142",
                            width: "36",
                            height: "26",
                            rx: "5",
                            fill: "#D28C4B"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "42",
                            y1: "150",
                            x2: "78",
                            y2: "150",
                            stroke: "#9C5A20",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "42",
                            y1: "158",
                            x2: "78",
                            y2: "158",
                            stroke: "#9C5A20",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "51",
                            y1: "142",
                            x2: "51",
                            y2: "168",
                            stroke: "#9C5A20",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "60",
                            y1: "142",
                            x2: "60",
                            y2: "168",
                            stroke: "#9C5A20",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "69",
                            y1: "142",
                            x2: "69",
                            y2: "168",
                            stroke: "#9C5A20",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ellipse, {
                            cx: "52",
                            cy: "128",
                            rx: "4.5",
                            ry: "11",
                            fill: "#FFFFFF",
                            transform: "rotate(-10 52 128)",
                            animate: {
                                rotate: [
                                    -10,
                                    -18,
                                    -10
                                ]
                            },
                            transition: {
                                duration: 2.8,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "52",
                            cy: "128",
                            rx: "2.5",
                            ry: "8",
                            fill: "#FFCFDE",
                            transform: "rotate(-10 52 128)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ellipse, {
                            cx: "66",
                            cy: "128",
                            rx: "4.5",
                            ry: "11",
                            fill: "#FFFFFF",
                            transform: "rotate(12 66 128)",
                            animate: {
                                rotate: [
                                    12,
                                    22,
                                    12
                                ]
                            },
                            transition: {
                                duration: 2.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 0.2
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "66",
                            cy: "128",
                            rx: "2.5",
                            ry: "8",
                            fill: "#FFCFDE",
                            transform: "rotate(12 66 128)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "59",
                            cy: "138",
                            r: "10",
                            fill: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "54",
                            cy: "140",
                            r: "2.5",
                            fill: "#FF3F68",
                            opacity: 0.45
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "64",
                            cy: "140",
                            r: "2.5",
                            fill: "#FF3F68",
                            opacity: 0.45
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ellipse, {
                            cx: "55.5",
                            cy: "136",
                            rx: "1.5",
                            ry: "2.2",
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
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 2
                            },
                            style: {
                                transformOrigin: '55.5px 136px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ellipse, {
                            cx: "62.5",
                            cy: "136",
                            rx: "1.5",
                            ry: "2.2",
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
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 2
                            },
                            style: {
                                transformOrigin: '62.5px 136px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "59,139 57.5,138 60.5,138",
                            fill: "#FF3F68"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M57,141 Q59,143 61,141",
                            stroke: "#07194F",
                            strokeWidth: "1",
                            strokeLinecap: "round",
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ellipse, {
                            cx: "48",
                            cy: "144",
                            rx: "3",
                            ry: "2.5",
                            fill: "#FFFFFF",
                            stroke: "#E0E0E0",
                            strokeWidth: "0.8",
                            animate: {
                                y: [
                                    0,
                                    -4,
                                    0
                                ],
                                rotate: [
                                    0,
                                    20,
                                    0
                                ]
                            },
                            transition: {
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            },
                            style: {
                                transformOrigin: '48px 144px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "69",
                            cy: "144",
                            rx: "3",
                            ry: "2.5",
                            fill: "#FFFFFF",
                            stroke: "#E0E0E0",
                            strokeWidth: "0.8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
_s1(RabbitHotAirBalloon, "1cfVChV6gA1Fk8+xDnwTj3gmgZo=");
_c2 = RabbitHotAirBalloon;
function StorybookChildrenInteractiveLayer() {
    _s2();
    const [activeChild, setActiveChild] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-20 pointer-events-none",
        "aria-label": "Interactive preschool children",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[8%] sm:left-[10%] bottom-[12%] sm:bottom-[14%] w-24 sm:w-32 h-24 sm:h-32 pointer-events-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CharacterBubble, {
                        text: "I love storybooks!",
                        subtext: "Adventures on every page!",
                        emoji: "📖",
                        color: "#08BFC1",
                        visible: activeChild === 1,
                        position: "top"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
                        onClick: ()=>setActiveChild(activeChild === 1 ? null : 1),
                        onHoverStart: ()=>setActiveChild(1),
                        onHoverEnd: ()=>setActiveChild(null),
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        className: "w-full h-full rounded-full cursor-pointer focus:outline-none flex items-center justify-center relative group",
                        "aria-label": "Boy reading book",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-2 rounded-full border-2 border-[#08BFC1]/0 group-hover:border-[#08BFC1]/50 group-hover:scale-105 transition-all duration-300"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                animate: {
                                    y: [
                                        0,
                                        -6,
                                        0
                                    ],
                                    opacity: [
                                        0.4,
                                        1,
                                        0.4
                                    ]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: Infinity
                                },
                                className: "absolute -top-2 left-1/3 text-[#FFBA08]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                        lineNumber: 365,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[34%] sm:left-[36%] bottom-[14%] sm:bottom-[16%] w-24 sm:w-32 h-24 sm:h-32 pointer-events-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CharacterBubble, {
                        text: "InnoTots is super fun!",
                        subtext: "Come play with me!",
                        emoji: "💖",
                        color: "#FF3F68",
                        visible: activeChild === 2,
                        position: "top"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
                        onClick: ()=>setActiveChild(activeChild === 2 ? null : 2),
                        onHoverStart: ()=>setActiveChild(2),
                        onHoverEnd: ()=>setActiveChild(null),
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        className: "w-full h-full rounded-full cursor-pointer focus:outline-none flex items-center justify-center relative group",
                        "aria-label": "Girl smiling on grass",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-2 rounded-full border-2 border-[#FF3F68]/0 group-hover:border-[#FF3F68]/50 group-hover:scale-105 transition-all duration-300"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                animate: {
                                    y: [
                                        0,
                                        -8,
                                        0
                                    ],
                                    scale: [
                                        0.9,
                                        1.15,
                                        0.9
                                    ]
                                },
                                transition: {
                                    duration: 2.4,
                                    repeat: Infinity,
                                    delay: 0.4
                                },
                                className: "absolute -top-3 left-1/2 -translate-x-1/2 text-[#FF3F68]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    size: 16,
                                    fill: "#FF3F68"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[12%] sm:right-[15%] bottom-[10%] sm:bottom-[12%] w-28 sm:w-36 h-24 sm:h-32 pointer-events-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CharacterBubble, {
                        text: "Drawing rainbows & dreams!",
                        subtext: "Look at my art!",
                        emoji: "🎨",
                        color: "#FFBA08",
                        visible: activeChild === 3,
                        position: "top"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                        lineNumber: 419,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
                        onClick: ()=>setActiveChild(activeChild === 3 ? null : 3),
                        onHoverStart: ()=>setActiveChild(3),
                        onHoverEnd: ()=>setActiveChild(null),
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        className: "w-full h-full rounded-full cursor-pointer focus:outline-none flex items-center justify-center relative group",
                        "aria-label": "Boy drawing with crayons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-2 rounded-full border-2 border-[#FFBA08]/0 group-hover:border-[#FFBA08]/50 group-hover:scale-105 transition-all duration-300"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                lineNumber: 436,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                animate: {
                                    rotate: [
                                        0,
                                        30,
                                        0
                                    ],
                                    scale: [
                                        1,
                                        1.2,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 2.2,
                                    repeat: Infinity,
                                    delay: 0.8
                                },
                                className: "absolute -top-2 right-1/4 text-[#FFBA08]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    size: 16,
                                    fill: "#FFBA08"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                    lineNumber: 442,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                                lineNumber: 437,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/animations/InteractiveCartoonCharacters.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
_s2(StorybookChildrenInteractiveLayer, "mT9vsrWPmL+3pU3pHAmonlcNiIw=");
_c3 = StorybookChildrenInteractiveLayer;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CharacterBubble");
__turbopack_context__.k.register(_c1, "PeekingGiraffe");
__turbopack_context__.k.register(_c2, "RabbitHotAirBalloon");
__turbopack_context__.k.register(_c3, "StorybookChildrenInteractiveLayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/animations/MascotPair.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MascotPair
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$PinkMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/PinkMascot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$TealMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/TealMascot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
'use client';
;
;
;
;
;
function MascotPair({ size = 64, className = '', badgeText, showHearts = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative inline-flex items-end justify-center select-none ${className}`,
        children: [
            showHearts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                animate: {
                    y: [
                        -3,
                        -12,
                        -3
                    ],
                    opacity: [
                        0.6,
                        1,
                        0.6
                    ],
                    scale: [
                        0.9,
                        1.1,
                        0.9
                    ]
                },
                transition: {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                className: "absolute -top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-6 h-6 rounded-full bg-white shadow-xs flex items-center justify-center text-[#FF3F68]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                        size: 13,
                        fill: "#FF3F68"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/MascotPair.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/MascotPair.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/animations/MascotPair.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end gap-1.5 sm:gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$PinkMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: size
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/MascotPair.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$TealMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: size
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/MascotPair.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/animations/MascotPair.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            badgeText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.8
                },
                whileInView: {
                    opacity: 1,
                    scale: 1
                },
                viewport: {
                    once: true
                },
                transition: {
                    delay: 0.4
                },
                className: "absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-bold bg-white text-[#07194F] shadow-xs border border-[#FFBA08]/40 flex items-center gap-1 z-20",
                style: {
                    fontFamily: 'var(--font-nunito)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        size: 11,
                        className: "text-[#FFBA08]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/MascotPair.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: badgeText
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/MascotPair.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/animations/MascotPair.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/animations/MascotPair.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = MascotPair;
var _c;
__turbopack_context__.k.register(_c, "MascotPair");
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
"[project]/src/components/animations/RainbowShimmer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RainbowShimmer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
'use client';
;
;
function RainbowShimmer({ className = '', width = '100%', height = '100%', opacity = 0.85 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative select-none pointer-events-none ${className}`,
        style: {
            width,
            height,
            opacity
        },
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 500 280",
                xmlns: "http://www.w3.org/2000/svg",
                className: "w-full h-full overflow-visible",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "shimmerGradient",
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
                                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "#ffffff",
                                        stopOpacity: "0.75"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#ffffff",
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "rainbowGradRed",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "0%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#FF3F68",
                                        stopOpacity: "0.6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "#FF3F68",
                                        stopOpacity: "0.95"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#FF3F68",
                                        stopOpacity: "0.6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "softGlow",
                                x: "-20%",
                                y: "-20%",
                                width: "140%",
                                height: "140%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                        stdDeviation: "4",
                                        result: "blur"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                        in: "SourceGraphic",
                                        in2: "blur",
                                        operator: "over"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 50,260 A 200,180 0 0,1 450,260",
                        fill: "none",
                        stroke: "#FFFBE8",
                        strokeWidth: "38",
                        opacity: "0.3",
                        filter: "url(#softGlow)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 60,260 A 190,170 0 0,1 440,260",
                        fill: "none",
                        stroke: "#FF3F68",
                        strokeWidth: "10",
                        strokeLinecap: "round",
                        opacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 72,260 A 178,158 0 0,1 428,260",
                        fill: "none",
                        stroke: "#FFBA08",
                        strokeWidth: "10",
                        strokeLinecap: "round",
                        opacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 84,260 A 166,146 0 0,1 416,260",
                        fill: "none",
                        stroke: "#08BFC1",
                        strokeWidth: "10",
                        strokeLinecap: "round",
                        opacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 96,260 A 154,134 0 0,1 404,260",
                        fill: "none",
                        stroke: "#A75CE2",
                        strokeWidth: "10",
                        strokeLinecap: "round",
                        opacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].path, {
                        d: "M 60,260 A 190,170 0 0,1 440,260",
                        fill: "none",
                        stroke: "url(#shimmerGradient)",
                        strokeWidth: "42",
                        strokeLinecap: "round",
                        strokeDasharray: "120 400",
                        animate: {
                            strokeDashoffset: [
                                520,
                                -520
                            ]
                        },
                        transition: {
                            duration: 4.5,
                            repeat: Infinity,
                            ease: 'linear'
                        },
                        opacity: "0.7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        fill: "#FFFFFF",
                        opacity: "0.95",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "60",
                                cy: "260",
                                rx: "30",
                                ry: "18"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "78",
                                cy: "254",
                                rx: "22",
                                ry: "16"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "44",
                                cy: "255",
                                rx: "20",
                                ry: "14"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "440",
                                cy: "260",
                                rx: "30",
                                ry: "18"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "422",
                                cy: "254",
                                rx: "22",
                                ry: "16"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "456",
                                cy: "255",
                                rx: "20",
                                ry: "14"
                            }, void 0, false, {
                                fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                animate: {
                    scale: [
                        0.8,
                        1.3,
                        0.8
                    ],
                    opacity: [
                        0.4,
                        1,
                        0.4
                    ],
                    rotate: [
                        0,
                        90,
                        180
                    ]
                },
                transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                className: "absolute top-2 left-1/2 -translate-x-1/2 text-[#FFBA08]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                animate: {
                    scale: [
                        1,
                        1.4,
                        1
                    ],
                    opacity: [
                        0.3,
                        0.9,
                        0.3
                    ],
                    rotate: [
                        0,
                        -90,
                        -180
                    ]
                },
                transition: {
                    duration: 2.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1
                },
                className: "absolute top-12 left-1/4 text-[#FF3F68]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "15",
                    height: "15",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                animate: {
                    scale: [
                        0.9,
                        1.3,
                        0.9
                    ],
                    opacity: [
                        0.3,
                        0.95,
                        0.3
                    ]
                },
                transition: {
                    duration: 3.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.8
                },
                className: "absolute top-14 right-1/4 text-[#08BFC1]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/animations/RainbowShimmer.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = RainbowShimmer;
var _c;
__turbopack_context__.k.register(_c, "RainbowShimmer");
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
"[project]/src/components/home/FeaturedPrograms.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedPrograms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/programs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$AnimatedCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/AnimatedCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingButterflies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/FlyingButterflies.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
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
const program3dImages = {
    playgroup: '/images/programs/playgroup-3d.png',
    nursery: '/images/programs/nursery-3d.png',
    lkg: '/images/programs/lkg-3d.png',
    ukg: '/images/programs/ukg-3d.png'
};
function FeaturedPrograms() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 lg:py-24 bg-white relative select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-10 right-12 hidden lg:block z-10 pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingButterflies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Butterfly"], {
                    color: "#FFBA08",
                    size: 26,
                    duration: 10
                }, void 0, false, {
                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            badge: "Age-Tailored Learning",
                            badgeColor: "#08BFC1",
                            badgeBg: "#F0FAFA",
                            title: "Our Programs",
                            subtitle: "Thoughtfully structured, age-appropriate programs crafted to give every child a joyful head start.",
                            center: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["programs"].map((program, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: i * 0.08,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$AnimatedCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-[#FF3F68]/20 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-52 sm:h-48 overflow-hidden bg-gradient-to-b from-[#F0FAFA] to-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                    src: program3dImages[program.id] || '/images/programs/playgroup-3d.png',
                                                    alt: `InnoTots ${program.name} 3D Cartoon Learning`,
                                                    width: 400,
                                                    height: 300,
                                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this),
                                                program.id === 'playgroup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                    animate: {
                                                        y: [
                                                            0,
                                                            -5,
                                                            0
                                                        ],
                                                        rotate: [
                                                            -4,
                                                            4,
                                                            -4
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 2.5,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut'
                                                    },
                                                    className: "absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-xl shadow-xs text-xs font-bold text-[#FF3F68] flex items-center gap-1.5 z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "🧸"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Toy Play"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                            lineNumber: 65,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 21
                                                }, this),
                                                program.id === 'nursery' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                    animate: {
                                                        y: [
                                                            0,
                                                            -5,
                                                            0
                                                        ],
                                                        rotate: [
                                                            4,
                                                            -4,
                                                            4
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 2.8,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut'
                                                    },
                                                    className: "absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-xl shadow-xs text-xs font-bold text-[#FFBA08] flex items-center gap-1.5 z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "🖍️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Art & Colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this),
                                                program.id === 'lkg' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                    animate: {
                                                        y: [
                                                            0,
                                                            -5,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut'
                                                    },
                                                    className: "absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-xl shadow-xs text-xs font-bold text-[#08BFC1] flex items-center gap-1.5 z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "🔤"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "ABC Phonics"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this),
                                                program.id === 'ukg' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                    animate: {
                                                        y: [
                                                            0,
                                                            -5,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 3.2,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut'
                                                    },
                                                    className: "absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-xl shadow-xs text-xs font-bold text-[#A75CE2] flex items-center gap-1.5 z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "🔢"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "123 Logic"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-3.5 right-3.5 z-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-xs",
                                                        style: {
                                                            backgroundColor: program.color,
                                                            fontFamily: 'var(--font-nunito)'
                                                        },
                                                        children: program.ageRange
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 flex flex-col flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-semibold text-[#07194F] group-hover:text-[#FF3F68] transition-colors",
                                                            style: {
                                                                fontFamily: 'var(--font-fredoka)'
                                                            },
                                                            children: program.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold tracking-wide mt-1",
                                                            style: {
                                                                color: program.color,
                                                                fontFamily: 'var(--font-nunito)'
                                                            },
                                                            children: program.tagline
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm leading-relaxed text-gray-600 mb-5 flex-1",
                                                    style: {
                                                        fontFamily: 'var(--font-nunito)'
                                                    },
                                                    children: program.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 mb-6 pt-4 border-t border-gray-100",
                                                    children: program.highlights.slice(0, 3).map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-xs font-medium text-gray-700",
                                                            style: {
                                                                fontFamily: 'var(--font-nunito)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    size: 14,
                                                                    style: {
                                                                        color: program.color
                                                                    },
                                                                    className: "flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: h
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                                    lineNumber: 133,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, h, true, {
                                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/programs#${program.id}`,
                                                    className: "mt-auto flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full text-white text-sm font-bold shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all",
                                                    style: {
                                                        backgroundColor: program.color,
                                                        fontFamily: 'var(--font-nunito)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "View Curriculum"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this)
                            }, program.id, false, {
                                fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/FeaturedPrograms.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = FeaturedPrograms;
var _c;
__turbopack_context__.k.register(_c, "FeaturedPrograms");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/FloatingShape.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingBalloonsGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/FloatingBalloonsGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingButterflies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/FlyingButterflies.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingBirds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/FlyingBirds.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$DriftingCloudsLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/DriftingCloudsLayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$RainbowShimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/RainbowShimmer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$InteractiveCartoonCharacters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/InteractiveCartoonCharacters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$MascotPair$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/MascotPair.tsx [app-client] (ecmascript)");
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
;
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 select-none",
        style: {
            background: 'linear-gradient(180deg, #F0FAFA 0%, #E3F6F4 70%, #FFFFFF 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$DriftingCloudsLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingBirds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingButterflies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                shape: "circle",
                color: "#FF3F68",
                size: 60,
                delay: 0,
                duration: 5,
                className: "absolute top-14 left-6 sm:left-12 pointer-events-none",
                opacity: 0.14
            }, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                shape: "star",
                color: "#FFBA08",
                size: 42,
                delay: 1.5,
                duration: 5.5,
                className: "absolute top-24 left-1/3 pointer-events-none",
                opacity: 0.22
            }, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                shape: "circle",
                color: "#A75CE2",
                size: 46,
                delay: 0.8,
                duration: 5.2,
                className: "absolute top-32 right-20 sm:right-28 pointer-events-none",
                opacity: 0.14
            }, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                shape: "triangle",
                color: "#08BFC1",
                size: 38,
                delay: 2,
                duration: 5.8,
                className: "absolute bottom-28 left-8 pointer-events-none",
                opacity: 0.18
            }, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                shape: "star",
                color: "#FF3F68",
                size: 32,
                delay: 3,
                duration: 6.2,
                className: "absolute bottom-16 right-16 pointer-events-none",
                opacity: 0.22
            }, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-24 sm:top-28 left-3 sm:left-8 z-20 pointer-events-auto hidden sm:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FloatingBalloonsGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    variant: "hero-left"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/HeroSection.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6 text-center lg:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 15
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-2xs mb-5 sm:mb-6 border border-[#FF3F68]/20 bg-white",
                                    style: {
                                        color: '#FF3F68',
                                        fontFamily: 'var(--font-nunito)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 16,
                                            className: "text-[#FFBA08] animate-spin-slow"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Welcome to InnoTots Preschool"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].h1, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.7,
                                        delay: 0.1,
                                        ease: 'easeOut'
                                    },
                                    className: "text-3xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.12] tracking-tight mb-5 sm:mb-6 text-[#07194F]",
                                    style: {
                                        fontFamily: 'var(--font-fredoka)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Little Minds, "
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative inline-block text-[#FF3F68]",
                                            children: [
                                                "Big Dreams!",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "absolute -bottom-2 left-0 w-full h-3 text-[#FFBA08] opacity-80",
                                                    viewBox: "0 0 100 12",
                                                    preserveAspectRatio: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M0,8 Q50,0 100,8",
                                                        stroke: "currentColor",
                                                        strokeWidth: "4",
                                                        fill: "none",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
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
                                        duration: 0.5,
                                        delay: 0.25
                                    },
                                    className: "text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0",
                                    style: {
                                        fontFamily: 'var(--font-nunito)'
                                    },
                                    children: "Where every little step leads to a world of discovery, creativity, happiness and learning. Giving your child the perfect foundation for life."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 15
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.35
                                    },
                                    className: "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/programs",
                                            className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-base shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 group",
                                            style: {
                                                backgroundColor: '#FF3F68',
                                                fontFamily: 'var(--font-nunito)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Explore Our Programs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 18,
                                                    className: "transition-transform group-hover:translate-x-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/admissions-contact",
                                            className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-base shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200",
                                            style: {
                                                backgroundColor: '#08BFC1',
                                                fontFamily: 'var(--font-nunito)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Enquire for Admission"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.45
                                    },
                                    className: "grid grid-cols-3 gap-2.5 sm:gap-4 max-w-md mx-auto lg:mx-0 pt-2 border-t border-[#07194F]/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.05,
                                                y: -4
                                            },
                                            transition: {
                                                type: 'spring',
                                                stiffness: 350,
                                                damping: 20
                                            },
                                            className: "bg-white/95 backdrop-blur-xs rounded-2xl p-2.5 sm:p-4 text-center shadow-2xs border border-[#08BFC1]/20 cursor-default",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xl sm:text-2xl font-bold text-[#FF3F68]",
                                                    style: {
                                                        fontFamily: 'var(--font-fredoka)'
                                                    },
                                                    children: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-bold text-[#07194F] mt-0.5",
                                                    style: {
                                                        fontFamily: 'var(--font-nunito)'
                                                    },
                                                    children: "Programs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] sm:text-[11px] text-gray-500 font-medium",
                                                    children: "1.5 - 5.5 Years"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.05,
                                                y: -4
                                            },
                                            transition: {
                                                type: 'spring',
                                                stiffness: 350,
                                                damping: 20
                                            },
                                            className: "bg-white/95 backdrop-blur-xs rounded-2xl p-2.5 sm:p-4 text-center shadow-2xs border border-[#FFBA08]/30 cursor-default",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xl sm:text-2xl font-bold text-[#FFBA08]",
                                                    style: {
                                                        fontFamily: 'var(--font-fredoka)'
                                                    },
                                                    children: "8+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-bold text-[#07194F] mt-0.5",
                                                    style: {
                                                        fontFamily: 'var(--font-nunito)'
                                                    },
                                                    children: "Activities"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] sm:text-[11px] text-gray-500 font-medium",
                                                    children: "Art & Music"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.05,
                                                y: -4
                                            },
                                            transition: {
                                                type: 'spring',
                                                stiffness: 350,
                                                damping: 20
                                            },
                                            className: "bg-white/95 backdrop-blur-xs rounded-2xl p-2.5 sm:p-4 text-center shadow-2xs border border-[#A75CE2]/20 cursor-default",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xl sm:text-2xl font-bold text-[#572A8D]",
                                                    style: {
                                                        fontFamily: 'var(--font-fredoka)'
                                                    },
                                                    children: "100%"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-bold text-[#07194F] mt-0.5",
                                                    style: {
                                                        fontFamily: 'var(--font-nunito)'
                                                    },
                                                    children: "Play-Based"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] sm:text-[11px] text-gray-500 font-medium",
                                                    children: "Safe & Caring"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/HeroSection.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: 0.7,
                                delay: 0.2
                            },
                            className: "lg:col-span-6 flex flex-col justify-center items-center relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-w-lg lg:max-w-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-12 -left-6 w-full h-44 pointer-events-none z-0 opacity-80",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$RainbowShimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            width: "100%",
                                            height: "100%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-16 sm:-top-20 right-4 sm:right-8 z-10 pointer-events-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$InteractiveCartoonCharacters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeekingGiraffe"], {
                                            size: 100
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-20 sm:-top-24 left-2 sm:left-10 z-10 pointer-events-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$InteractiveCartoonCharacters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RabbitHotAirBalloon"], {
                                            size: 110
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-6 left-1/3 z-20 pointer-events-auto hidden sm:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingBirds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CuteBird"], {
                                            bodyColor: "#FFBA08",
                                            wingColor: "#08BFC1",
                                            size: 42,
                                            delay: 0.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gradient-to-b from-[#F0FAFA] via-[#E3F6F4] to-[#FFFFFF] group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                src: "/images/hero-scene-right.png",
                                                alt: "InnoTots Preschool 3D Cartoon Storybook Scene with Happy Children, Schoolhouse and Animals",
                                                width: 554,
                                                height: 536,
                                                className: "w-full h-auto object-contain select-none pointer-events-none transition-transform duration-700 group-hover:scale-[1.01]",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$InteractiveCartoonCharacters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorybookChildrenInteractiveLayer"], {}, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                animate: {
                                                    opacity: [
                                                        0.4,
                                                        0.9,
                                                        0.4
                                                    ],
                                                    scale: [
                                                        0.9,
                                                        1.15,
                                                        0.9
                                                    ]
                                                },
                                                transition: {
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: 'easeInOut'
                                                },
                                                className: "absolute top-4 left-4 text-[#FFBA08] pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    size: 22
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-6 sm:-bottom-8 right-1 sm:right-4 z-30 pointer-events-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$MascotPair$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: 62,
                                            badgeText: "Say Hello!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/HeroSection.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/HeroSection.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/HeroSection.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/WelcomeSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WelcomeSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$PinkMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/PinkMascot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingButterflies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/FlyingButterflies.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingBirds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/FlyingBirds.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-handshake.mjs [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
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
const keyPoints = [
    {
        text: 'Play-Based Curriculum',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        color: '#FF3F68',
        bg: '#FFF0F3'
    },
    {
        text: 'Safe & Nurturing Campus',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        color: '#08BFC1',
        bg: '#F0FAFA'
    },
    {
        text: 'Loving Early Educators',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"],
        color: '#FFBA08',
        bg: '#FFFBEC'
    },
    {
        text: 'Holistic Child Growth',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        color: '#A75CE2',
        bg: '#F7F0FD'
    }
];
function WelcomeSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 lg:py-24 relative overflow-hidden bg-white select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -left-28 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none",
                style: {
                    backgroundColor: '#DDF3F1',
                    opacity: 0.45,
                    filter: 'blur(70px)'
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/home/WelcomeSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                animate: {
                    y: [
                        0,
                        -12,
                        0
                    ],
                    opacity: [
                        0.3,
                        0.8,
                        0.3
                    ]
                },
                transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                className: "absolute top-24 right-[12%] text-[#FF3F68] pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                    size: 20,
                    fill: "#FF3F68"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/WelcomeSection.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/WelcomeSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                animate: {
                    y: [
                        0,
                        -8,
                        0
                    ],
                    opacity: [
                        0.2,
                        0.6,
                        0.2
                    ]
                },
                transition: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1
                },
                className: "absolute bottom-20 left-[6%] text-[#08BFC1] pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                    size: 16,
                    fill: "#08BFC1"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/WelcomeSection.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/WelcomeSection.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-12 right-8 hidden lg:block pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingBirds$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CuteBird"], {
                    bodyColor: "#FFBA08",
                    wingColor: "#FF3F68",
                    size: 36,
                    duration: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/home/WelcomeSection.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/WelcomeSection.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-10 -left-2 sm:-left-6 z-20 pointer-events-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$PinkMascot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                size: 64
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-4 right-8 z-30 pointer-events-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$FlyingButterflies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Butterfly"], {
                                                color: "#08BFC1",
                                                size: 24,
                                                duration: 8
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-gradient-to-b from-[#F0FAFA] to-white transition-transform duration-300 group-hover:scale-[1.02]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                    src: "/images/preschool-playground-3d.png",
                                                    alt: "InnoTots Preschool 3D Cartoon Playground and Building with Slide, Swings, Giraffe and Bunny",
                                                    width: 800,
                                                    height: 600,
                                                    className: "w-full h-auto object-cover select-none pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                            animate: {
                                                y: [
                                                    0,
                                                    -6,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: 'easeInOut'
                                            },
                                            className: "absolute -bottom-5 right-1 sm:right-6 bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-[#FF3F68]/15 flex items-center gap-3 z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-[#FFF0F3]",
                                                    children: "🎈"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-bold text-[#07194F]",
                                                            style: {
                                                                fontFamily: 'var(--font-fredoka)'
                                                            },
                                                            children: "Every Day is Fun!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-500 font-medium",
                                                            style: {
                                                                fontFamily: 'var(--font-nunito)'
                                                            },
                                                            children: "Hands-on exploration"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/WelcomeSection.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.15,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        badge: "Who We Are",
                                        badgeColor: "#08BFC1",
                                        badgeBg: "#F0FAFA",
                                        title: "Welcome to InnoTots Preschool",
                                        subtitle: "A warm, joyful sanctuary where early childhood is celebrated and every little mind is empowered to thrive."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-gray-700 leading-relaxed mb-5",
                                        style: {
                                            fontFamily: 'var(--font-nunito)'
                                        },
                                        children: "At InnoTots Preschool, we believe that the early years are the most transformative chapter of a child's life. Our thoughtfully designed spaces encourage children to explore, imagine and grow at their own pace while feeling completely safe, loved and supported."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-gray-700 leading-relaxed mb-8",
                                        style: {
                                            fontFamily: 'var(--font-nunito)'
                                        },
                                        children: "Through guided play, creative expression, music and social activities, we help children build genuine confidence, emotional resilience and an enduring love for learning."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8",
                                        children: keyPoints.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                whileHover: {
                                                    scale: 1.03,
                                                    y: -2
                                                },
                                                transition: {
                                                    type: 'spring',
                                                    stiffness: 350,
                                                    damping: 20
                                                },
                                                className: "flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-gray-100 shadow-2xs bg-white hover:border-[#FF3F68]/30 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                                                        style: {
                                                            backgroundColor: item.bg,
                                                            color: item.color
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-[#07194F]",
                                                        style: {
                                                            fontFamily: 'var(--font-nunito)'
                                                        },
                                                        children: item.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.text, true, {
                                                fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200",
                                        style: {
                                            backgroundColor: '#572A8D',
                                            fontFamily: 'var(--font-nunito)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Learn More About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/WelcomeSection.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/WelcomeSection.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/WelcomeSection.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/WelcomeSection.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/WelcomeSection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = WelcomeSection;
var _c;
__turbopack_context__.k.register(_c, "WelcomeSection");
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

//# sourceMappingURL=src_1uth4ftg7nlm6._.js.map