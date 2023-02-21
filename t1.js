(this["webpackJsonp@weijarz/babelabc"] = this["webpackJsonp@weijarz/babelabc"] || []).push([[0], {
    121: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return c
        }
        )),
        n.d(t, "b", (function() {
            return i
        }
        )),
        n.d(t, "a", (function() {
            return o
        }
        ));
        var r = n(43)
          , a = "referrer";
        function c() {
            var e = new URLSearchParams(window.location.search)
              , t = Number(e.get("r"));
            t && (localStorage.setItem(a, String(t)),
            setTimeout((function() {
                !function(e) {
                    var t = "referrerClickSent";
                    localStorage.getItem(t) || (localStorage.setItem(t, "1"),
                    Object(r.a)({
                        url: "/_api/share/click",
                        method: "POST",
                        body: {
                            referrer: e
                        }
                    }))
                }(t)
            }
            ), 5e3))
        }
        function i() {
            return Number(localStorage.getItem(a))
        }
        function o() {
            localStorage.removeItem(a)
        }
    },
    124: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return O
        }
        ));
        var r = n(35)
          , a = n(4)
          , c = n(0)
          , i = n(125)
          , o = n(146)
          , s = n(486)
          , u = n(487)
          , l = n(488)
          , d = n(190)
          , f = n(490)
          , h = n(191)
          , p = n(484)
          , b = n(493)
          , j = n(489)
          , m = n(62)
          , x = n(2)
          , O = function(e) {
            Object(i.a)(e.title ? "".concat(e.title, " - ").concat(Object(m.d)()) : Object(m.d)());
            var t = v();
            return Object(x.jsxs)(c.Fragment, {
                children: [Object(x.jsx)(o.a, {
                    children: Object(x.jsx)(s.a, {
                        position: "sticky",
                        children: Object(x.jsxs)(u.a, {
                            children: [Object(x.jsx)(l.a, {
                                className: t.backButton,
                                edge: "start",
                                color: "inherit",
                                onClick: function() {
                                    Object(r.c)("/")
                                },
                                children: Object(x.jsx)(j.a, {})
                            }), Object(x.jsx)(d.a, {
                                className: t.title,
                                variant: "h6",
                                color: "inherit",
                                noWrap: !0,
                                children: e.title
                            }), e.toolbar && e.toolbar()]
                        })
                    })
                }), Object(x.jsx)(f.a, {
                    className: e.containerClassName,
                    maxWidth: e.maxWidth,
                    children: e.noPaper ? e.children || "" : Object(x.jsx)(h.a, {
                        className: Object(a.a)(t.dialog, e.contentClassName),
                        children: e.children
                    })
                })]
            })
        }
          , v = Object(p.a)((function(e) {
            return Object(b.a)({
                title: {
                    flexGrow: 1
                },
                dialog: {
                    marginTop: e.spacing(3),
                    marginBottom: e.spacing(4),
                    padding: e.spacing(2)
                },
                backButton: {
                    marginRight: e.spacing(1)
                }
            })
        }
        ))
    },
    125: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var r = n(0)
          , a = function(e) {
            Object(r.useEffect)((function() {
                document.title = e
            }
            ), [e])
        }
    },
    146: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        ));
        var r = n(0)
          , a = n.n(r)
          , c = n(485);
        function i(e) {
            var t = Object(c.a)({
                disableHysteresis: !0,
                threshold: 0
            });
            return a.a.cloneElement(e.children, {
                elevation: t ? 4 : 0
            })
        }
    },
    15: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return r
        }
        )),
        n.d(t, "a", (function() {
            return u
        }
        )),
        n.d(t, "g", (function() {
            return l
        }
        )),
        n.d(t, "i", (function() {
            return d
        }
        )),
        n.d(t, "c", (function() {
            return h
        }
        )),
        n.d(t, "l", (function() {
            return p
        }
        )),
        n.d(t, "h", (function() {
            return b
        }
        )),
        n.d(t, "k", (function() {
            return j
        }
        )),
        n.d(t, "j", (function() {
            return m
        }
        )),
        n.d(t, "e", (function() {
            return x
        }
        )),
        n.d(t, "f", (function() {
            return O
        }
        )),
        n.d(t, "d", (function() {
            return v
        }
        ));
        var r, a = n(29), c = n(96), i = n(34), o = n(188), s = n(0);
        Object(o.b)(),
        function(e) {
            e[e.all = 0] = "all",
            e[e.oneWord = 1] = "oneWord",
            e[e.twoWords = 2] = "twoWords",
            e[e.threeWords = 3] = "threeWords"
        }(r || (r = {}));
        var u = {
            fillWordsMode: !1,
            fillWordsModeDelay: 10,
            fillWordsModeHideWords: r.twoWords,
            numRepeat: 3,
            playSlow: !1,
            firstPlaySlow: !1,
            firstPlayHideDialogueText: !0,
            hideEnDialogueText: !0,
            hideZhDialogueText: !0,
            homePageNumber: 1
        }
          , l = {
            id: "local",
            title: "\u672c\u673a",
            isLocal: !0
        }
          , d = {
            id: "remote",
            isRemote: !0
        }
          , f = function(e, t) {
            var n = []
              , r = e;
            function a() {
                return r
            }
            return {
                get: a,
                mutations: Object.keys(t(void 0)).reduce((function(e, a) {
                    return e[a] = function() {
                        for (var e = arguments.length, c = new Array(e), i = 0; i < e; i++)
                            c[i] = arguments[i];
                        var s = Object(o.a)(r, (function(e) {
                            var n;
                            return (n = t(e))[a].apply(n, c)
                        }
                        ));
                        s !== r && (r = s,
                        n.forEach((function(e) {
                            return e()
                        }
                        )))
                    }
                    ,
                    e
                }
                ), {}),
                use: function(e) {
                    var t = Object(s.useState)((function() {
                        return e(a())
                    }
                    ))
                      , r = Object(i.a)(t, 2)
                      , c = r[0]
                      , o = r[1];
                    return Object(s.useEffect)((function() {
                        var t = function() {
                            o(e(a()))
                        };
                        return t(),
                        function(e) {
                            n.push(e)
                        }(t),
                        function() {
                            !function(e) {
                                n = n.filter((function(t) {
                                    return t !== e
                                }
                                ))
                            }(t)
                        }
                    }
                    ), [e]),
                    c
                }
            }
        }({
            initialized: !1,
            userInfo: c.a,
            settings: u,
            isShowLoginDialog: !1,
            forceDarkTheme: !1
        }, (function(e) {
            return {
                init: function() {
                    e.initialized = !0
                },
                crash: function(t) {
                    null == e.fatalError && (e.fatalError = t),
                    t.error && console.error(t.error)
                },
                notify: function(t, n, r) {
                    e.message = {
                        type: n,
                        text: t,
                        refreshAppAction: r,
                        open: !0
                    }
                },
                clearNotify: function() {
                    e.message && (e.message.open = !1)
                },
                setUserInfo: function(t) {
                    e.userInfo = t
                },
                setSettings: function(t) {
                    e.settings = Object(a.a)(Object(a.a)({}, e.settings), t)
                },
                setForceDarkTheme: function(t) {
                    e.forceDarkTheme = t
                },
                setDramas: function(t) {
                    e.dramas = t
                },
                setLocalMovie: function(t) {
                    e.localMovie = t
                },
                setIsShowLoginDialog: function(t) {
                    e.isShowLoginDialog = t
                }
            }
        }
        ))
          , h = f.get
          , p = f.use
          , b = f.mutations;
        function j() {
            return p((function(e) {
                return e.settings
            }
            ))
        }
        function m(e) {
            return p((function(t) {
                return t.settings[e]
            }
            ))
        }
        function x(e) {
            return e.isLocal
        }
        function O(e) {
            return e.isRemote
        }
        var v = /BabelabcAndroidApp/.test(window.navigator.userAgent)
    },
    160: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return i
        }
        )),
        n.d(t, "a", (function() {
            return o
        }
        )),
        n.d(t, "d", (function() {
            return s
        }
        )),
        n.d(t, "b", (function() {
            return u
        }
        ));
        var r = n(29)
          , a = (n(0),
        n(102))
          , c = n(2);
        function i(e) {
            return Object(c.jsx)(a.a, Object(r.a)(Object(r.a)({
                viewBox: "0 0 24 24"
            }, e), {}, {
                children: Object(c.jsx)("path", {
                    d: "M4,4H10V10H4V4M20,4V10H14V4H20M14,15H16V13H14V11H16V13H18V11H20V13H18V15H20V18H18V20H16V18H13V20H11V16H14V15M16,15V18H18V15H16M4,20V14H10V20H4M6,6V8H8V6H6M16,6V8H18V6H16M6,16V18H8V16H6M4,11H6V13H4V11M9,11H13V15H11V13H9V11M11,6H13V10H11V6M2,2V6H0V2A2,2 0 0,1 2,0H6V2H2M22,0A2,2 0 0,1 24,2V6H22V2H18V0H22M2,18V22H6V24H2A2,2 0 0,1 0,22V18H2M22,22V18H24V22A2,2 0 0,1 22,24H18V22H22Z"
                })
            }))
        }
        function o(e) {
            return Object(c.jsx)(a.a, Object(r.a)(Object(r.a)({
                viewBox: "0 0 1024 1024"
            }, e), {}, {
                children: Object(c.jsx)("path", {
                    d: "M566.5 195.4l129.5-129.5 129.5 129.5-129.5 129.5zM652 367.4L523.8 239.2 218.6 538.3l-18.3 152.6 146.5-24.4zM145.3 776.4h732.6v183.1H145.3z"
                })
            }))
        }
        function s(e) {
            return Object(c.jsx)(a.a, Object(r.a)(Object(r.a)({
                viewBox: "0 0 1024 1024"
            }, e), {}, {
                children: Object(c.jsx)("path", {
                    d: "M874.7 149.3a64 64 0 0 1 64 64v597.3a64 64 0 0 1-64 64H149.3a64 64 0 0 1-64-64V213.3a64 64 0 0 1 64-64h725.3zm0 64H149.3v597.3h725.3V213.3zm-478 128c40.4 0 77 16.6 103.9 43.4l6.4 6.3L469.3 437.3c-16.6-14.8-32-32-74.7-32-53.3 0-96 42.7-96 106.7s42.7 106.7 96 106.7c42.7 0 59.5-16 74.7-32l42 40.4-5.6 6.3C477 665.9 438.7 682.7 394.1 682.7 301.1 682.7 234.7 617.6 234.7 513.7 234.7 410.7 304.4 341.3 396.7 341.3zm298.7 0c40.4 0 77 16.6 103.9 43.4l6.4 6.3L768 437.3c-16.6-14.8-32-32-74.7-32-53.3 0-96 42.7-96 106.7s42.7 106.7 96 106.7c42.7 0 59.5-16 74.7-32l42 40.4-5.6 6.3C775.6 665.9 737.4 682.7 692.8 682.7 599.7 682.7 533.3 617.6 533.3 513.7 533.3 410.7 603.1 341.3 695.3 341.3z"
                })
            }))
        }
        function u(e) {
            return Object(c.jsxs)(a.a, Object(r.a)(Object(r.a)({
                viewBox: "0 0 1024 1024"
            }, e), {}, {
                children: [Object(c.jsx)("path", {
                    d: "M853 1024H171C75 1024 0 949 0 853V239C0 143 75 68 171 68h478c20 0 34 14 34 34s-14 35-34 35H171c-55 0-103 44-103 102v614c0 58 45 103 103 103h682c58 0 103-45 103-103V239c0-21 13-34 34-34s34 13 34 34v614c0 96-75 171-171 171z"
                }), Object(c.jsx)("path", {
                    d: "M758 96L614 10c-6-3-13 0-13 7v164c0 7 7 10 13 7l144-82c7 0 7-7 0-10zM396 386c20 30 31 75 31 126s-11 96-31 126c-21 34-55 51-92 51s-72-17-92-51c-21-30-31-75-31-126 0-55 10-96 31-126 20-34 54-51 92-51s71 17 92 51zm-150 41c-10 20-14 51-14 88s4 65 14 86c10 30 30 48 58 48 27 0 48-18 58-48 7-21 13-51 13-86 0-37-3-64-13-88-10-31-31-48-58-48-28 0-48 14-58 48zm290 198c7 6 10 13 10 27 0 10-3 17-10 24s-17 10-24 10c-10 0-17-3-24-10s-10-17-10-27c0-11 3-21 10-28s14-10 24-10c10 3 17 7 24 14zm293-284v45H666l-11 99c11-11 24-17 38-24s27-7 41-7c31 0 58 10 78 31 21 20 31 51 31 85s-14 65-37 85a143 143 0 01-167 7c-25-17-38-44-42-75h52c3 21 10 34 23 44 11 11 28 14 45 14 20 0 37-7 54-20 14-14 21-31 21-52 0-23-7-41-17-54s-31-21-51-21c-14 0-28 4-41 7-14 7-21 14-28 27h-47l17-191h204z"
                })]
            }))
        }
    },
    192: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return Ee
        }
        )),
        n.d(t, "b", (function() {
            return Be
        }
        ));
        var r = n(567)
          , a = n(531)
          , c = n(488)
          , i = n(484)
          , o = n(493)
          , s = n(558)
          , u = n(557)
          , l = n(556)
          , d = n(555)
          , f = n(548)
          , h = n(564)
          , p = n(35)
          , b = n(0)
          , j = n.n(b)
          , m = n(89)
          , x = n.n(m)
          , O = n(249)
          , v = (Object(O.a)({
            palette: {
                type: "light",
                primary: {
                    main: "#4b53d0",
                    contrastText: "#fff"
                },
                secondary: {
                    main: "#ff3976",
                    contrastText: "#fff"
                },
                background: {
                    default: "#f5f2f0",
                    paper: "#fff"
                }
            },
            overrides: {
                MuiButton: {
                    label: {
                        whiteSpace: "nowrap"
                    }
                },
                MuiToolbar: {
                    root: {
                        color: "#fff"
                    }
                }
            }
        }),
        Object(O.a)({
            palette: {
                type: "dark",
                primary: {
                    main: "#0083C3",
                    contrastText: "#fff"
                },
                secondary: {
                    main: "#D9822B",
                    contrastText: "#fff"
                },
                background: {
                    default: "#2C2B32",
                    paper: "#43424D"
                }
            },
            overrides: {
                MuiButton: {
                    label: {
                        whiteSpace: "nowrap"
                    }
                }
            }
        }))
          , g = n(24)
          , w = n(151)
          , y = n(152)
          , k = n(252)
          , I = n(250)
          , C = n(560)
          , S = n(190)
          , A = n(530)
          , N = n(2)
          , T = function(e) {
            var t = H()
              , n = "/" === window.location.pathname && !window.location.search
              , r = e.title || "\u5e94\u7528\u7a0b\u5e8f\u9519\u8bef";
            return Object(N.jsxs)("section", {
                className: t.root,
                children: [Object(N.jsx)(C.a, {
                    my: 2,
                    children: Object(N.jsx)(A.a, {
                        style: {
                            fontSize: 80
                        }
                    })
                }), Object(N.jsx)(S.a, {
                    variant: "h4",
                    gutterBottom: !0,
                    children: r
                }), e.subtitle && Object(N.jsx)(S.a, {
                    variant: "h6",
                    children: e.subtitle
                }), Object(N.jsxs)("div", {
                    className: t.btns,
                    children: [!n && Object(N.jsx)(a.a, {
                        variant: "contained",
                        color: "primary",
                        onClick: function() {
                            window.location.assign("/")
                        },
                        children: "\u8fd4\u56de\u4e3b\u9875"
                    }), Object(N.jsx)(a.a, {
                        variant: "contained",
                        color: "primary",
                        onClick: function() {
                            window.location.reload()
                        },
                        children: "\u91cd\u8bd5"
                    })]
                })]
            })
        }
          , H = Object(i.a)((function(e) {
            return Object(o.a)({
                root: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "fixed",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    zIndex: 1e6,
                    padding: 16,
                    background: e.palette.error.light,
                    color: e.palette.error.contrastText
                },
                btns: {
                    margin: e.spacing(3, 0),
                    "&>button:not(:first-child)": {
                        marginLeft: e.spacing(2)
                    }
                }
            })
        }
        ))
          , M = function(e) {
            Object(k.a)(n, e);
            var t = Object(I.a)(n);
            function n() {
                var e;
                Object(w.a)(this, n);
                for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++)
                    a[c] = arguments[c];
                return (e = t.call.apply(t, [this].concat(a))).state = {
                    hasError: !1,
                    error: void 0
                },
                e
            }
            return Object(y.a)(n, [{
                key: "handleReloadButtonClick",
                value: function() {
                    window.location.reload()
                }
            }, {
                key: "handleGotoHomeButtonClick",
                value: function() {
                    window.location.assign("/")
                }
            }, {
                key: "render",
                value: function() {
                    return this.state.hasError ? Object(N.jsx)(T, {
                        subtitle: String(this.state.error),
                        error: this.state.error
                    }) : this.props.children
                }
            }], [{
                key: "getDerivedStateFromError",
                value: function(e) {
                    return {
                        hasError: !0,
                        error: e
                    }
                }
            }]),
            n
        }(b.Component)
          , V = n(34)
          , E = n(251)
          , L = n(537)
          , B = n(538)
          , W = n(486)
          , D = n(487)
          , z = n(541)
          , P = n(490)
          , R = n(543)
          , _ = n(26)
          , U = n(544)
          , q = n(545)
          , K = n(546)
          , F = n(547)
          , Y = n(539)
          , G = n(540)
          , $ = n(542)
          , J = n(562)
          , Q = n(4)
          , X = n.p + "static/media/logo.004c1c55.svg"
          , Z = n(146)
          , ee = n(160)
          , te = n(533)
          , ne = n(534)
          , re = n(566)
          , ae = n(532);
        function ce(e) {
            var t = function() {
                e.onClose()
            };
            return Object(N.jsxs)(re.a, {
                onClose: t,
                open: e.open,
                children: [e.title && Object(N.jsx)(ae.a, {
                    children: e.title
                }), Object(N.jsx)(te.a, {
                    children: e.children
                }), Object(N.jsx)(ne.a, {
                    children: Object(N.jsx)(a.a, {
                        color: "primary",
                        onClick: t,
                        children: "\u786e\u5b9a"
                    })
                })]
            })
        }
        var ie = n(124)
          , oe = n(62)
          , se = "privacy";
        var ue = function() {
            var e = Object(b.useState)(!1)
              , t = Object(V.a)(e, 2)
              , n = t[0]
              , r = t[1];
            Object(oe.j)();
            var c = de();
            return Object(N.jsxs)(b.Fragment, {
                children: [Object(N.jsxs)(ie.a, {
                    containerClassName: c.container,
                    title: "\u5df4\u522b\u82f1\u8bed:\u9690\u79c1\u653f\u7b56",
                    maxWidth: "sm",
                    children: [Object(N.jsx)("h1", {
                        children: "\u9690\u79c1\u653f\u7b56"
                    }), Object(N.jsx)("p", {
                        children: "\u6b64\u9690\u79c1\u653f\u7b56\u7684\u76ee\u7684\uff0c\u5728\u4e8e\u8ba9\u60a8\u4e86\u89e3\uff0c\u5f53\u60a8\u4f7f\u7528\u5df4\u522b\u82f1\u8bed\u65f6\uff0c\u6211\u4eec\u5982\u4f55\u5904\u7406\u60a8\u7684\u4fe1\u606f\u3002 \u6211\u4eec\u6536\u96c6\u7684\u67d0\u4e9b\u6570\u636e\u53ef\u80fd\u88ab\u89c6\u4e3a\u4e2a\u4eba\u6570\u636e\u3002 \u6211\u4eec\u6839\u636e\u6cd5\u5f8b\u8981\u6c42\u4ee5\u7279\u6b8a\u65b9\u5f0f\u5904\u7406\u8fd9\u4e9b\u6570\u636e\u3002 \u5e76\u4e14\uff0c\u6211\u4eec\u5c06\u59cb\u7ec8\u5c0a\u91cd\u60a8\u5bf9\u6570\u636e\u4f7f\u7528\u65b9\u5f0f\u7684\u51b3\u5b9a\u3002"
                    }), Object(N.jsx)("h3", {
                        children: "\u6211\u4eec\u6536\u96c6\u4ec0\u4e48\u4fe1\u606f\uff1f"
                    }), Object(N.jsx)("p", {
                        children: "\u6211\u4eec\u6536\u96c6\u7684\u4fe1\u606f\u5305\u62ec\uff1a"
                    }), Object(N.jsxs)("ul", {
                        children: [Object(N.jsx)("li", {
                            children: "\u7528\u4ee5\u4fdd\u8bc1\u670d\u52a1\u6b63\u5e38\u4f7f\u7528\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u5728\u60a8\u4f7f\u7528\u670d\u52a1\u65f6\u7684\u8d26\u53f7\u548c\u5bc6\u7801\u4fe1\u606f(\u6240\u6709\u8fd9\u7c7b\u4fe1\u606f\u90fd\u4f1a\u52a0\u5bc6\u5b58\u50a8)\uff1b"
                        }), Object(N.jsx)("li", {
                            children: "\u5e94\u7528\u4e2d\u6bcf\u9879\u529f\u80fd\u7684\u4f7f\u7528\u60c5\u51b5\uff0c\u5e94\u7528\u4f7f\u7528\u60c5\u51b5\uff0c\u5d29\u6e83\u65e5\u5fd7\u7b49\u3002\u6240\u6709\u7684\u8fd9\u4e9b\u4fe1\u606f\u90fd\u662f\u533f\u540d\u4f20\u8f93\u548c\u5b58\u50a8\u7684\u3002"
                        })]
                    }), Object(N.jsx)("h3", {
                        children: "\u6211\u4eec\u4e3a\u4ec0\u4e48\u6536\u96c6\u8fd9\u4e9b\u4fe1\u606f\uff1f"
                    }), Object(N.jsx)("p", {
                        children: "\u6211\u4eec\u6536\u96c6\u5c3d\u53ef\u80fd\u5c11\u7684\u4fe1\u606f\uff0c\u6211\u4eec\u6536\u96c6\u7684\u4fe1\u606f\u7684\u7528\u9014\u5982\u4e0b\uff1a"
                    }), Object(N.jsxs)("ul", {
                        children: [Object(N.jsx)("li", {
                            children: "\u7528\u4ee5\u5b8c\u5584\u4ea7\u54c1\uff1b"
                        }), Object(N.jsx)("li", {
                            children: "\u7528\u4ee5\u4fdd\u8bc1\u670d\u52a1\u7684\u6b63\u5e38\u4f7f\u7528\uff1b"
                        }), Object(N.jsx)("li", {
                            children: "\u7528\u4ee5\u8fdb\u884c\u4e1a\u52a1\u5206\u6790\u53ca\u7814\u7a76\u3002"
                        })]
                    }), Object(N.jsx)("h3", {
                        children: "\u6211\u4eec\u4e0e\u8c01\u5171\u4eab\u60a8\u7684\u6570\u636e\uff1f"
                    }), Object(N.jsx)("p", {
                        children: "\u653e\u5fc3\uff0c\u6211\u4eec\u4e0d\u4f1a\u4e0e\u4efb\u4f55\u7b2c\u4e09\u65b9\u5171\u4eab\u60a8\u7684\u6570\u636e\u3002\u540c\u65f6\uff0c\u6211\u4eec\u7edd\u4e0d\u4f1a\u5c06\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u51fa\u552e\uff0c\u4ea4\u6613\u6216\u4ee5\u5176\u4ed6\u65b9\u5f0f\u8f6c\u8ba9\u7ed9\u4efb\u4f55\u7b2c\u4e09\u65b9\u3002"
                    }), Object(N.jsx)("h3", {
                        children: "\u6211\u4eec\u600e\u4e48\u4fdd\u62a4\u60a8\u7684\u6570\u636e\uff1f"
                    }), Object(N.jsx)("p", {
                        children: "\u540c\u6b65\u670d\u52a1\u4e2d\u4f7f\u7528\u7684\u4fe1\u606f\u7ecf\u8fc7\u52a0\u5bc6\u540e\u4f20\u8f93\u548c\u5b58\u50a8\uff0c\u5373\u4f7f\u662f\u6211\u4eec\u4e5f\u65e0\u6cd5\u83b7\u53d6\u5176\u4e2d\u7684\u8d26\u6237\u5bc6\u7801\u7b49\u79c1\u5bc6\u4fe1\u606f\u3002 "
                    }), Object(N.jsx)("h3", {
                        children: "\u5176\u4ed6\u9700\u8981\u4e86\u89e3\u7684"
                    }), Object(N.jsx)("p", {
                        children: "\u6211\u4eec\u7684\u9690\u79c1\u653f\u7b56\u53ef\u80fd\u4f1a\u4e0d\u65f6\u66f4\u6539\uff0c\u6211\u4eec\u4f1a\u5728\u6b64\u9875\u9762\u4e0a\u53d1\u5e03\u4efb\u4f55\u9690\u79c1\u653f\u7b56\u66f4\u6539\uff0c\u56e0\u6b64\u8bf7\u5b9a\u671f\u8fdb\u884c\u5ba1\u6838\u3002 \u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u4e3a\u60a8\u63d0\u4f9b\u5176\u4ed6\u5f62\u5f0f\u7684\u4fee\u6539\u6216\u66f4\u65b0\u901a\u77e5\u3002"
                    }), Object(N.jsx)("h3", {
                        children: "\u8054\u7cfb\u4fe1\u606f"
                    }), Object(N.jsx)("p", {
                        children: "\u5982\u679c\u60a8\u6709\u4efb\u4f55\u7591\u95ee\u6216\u6295\u8bc9\uff0c\u8bf7\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u4e0e\u6211\u4eec\u8054\u7cfb\uff1a oxyry.com@gmail.com"
                    }), Object(N.jsx)("p", {
                        children: Object(N.jsx)("em", {
                            children: "2021/03/02 \u66f4\u65b0"
                        })
                    })]
                }), Object(N.jsxs)(C.a, {
                    className: c.commands,
                    boxShadow: 3,
                    children: [Object(N.jsx)(a.a, {
                        className: c.button,
                        variant: "contained",
                        size: "large",
                        color: "default",
                        onClick: function() {
                            localStorage.removeItem(se),
                            r(!0)
                        },
                        children: "\u4e0d\u540c\u610f"
                    }), Object(N.jsx)(a.a, {
                        className: c.button,
                        variant: "contained",
                        size: "large",
                        color: "secondary",
                        onClick: function() {
                            localStorage.setItem(se, "1"),
                            Object(p.c)("/", {
                                replace: !0
                            })
                        },
                        children: "\u540c\u610f"
                    })]
                }), Object(N.jsx)(ce, {
                    open: n,
                    onClose: function() {
                        r(!1)
                    },
                    children: "\u60a8\u5fc5\u987b\u540c\u610f\u6b64\u534f\u8bae\u624d\u80fd\u7ee7\u7eed\u4f7f\u7528\u6b64 App\u3002"
                })]
            })
        }
          , le = function() {
            return Object(N.jsx)(ue, {})
        }
          , de = Object(i.a)((function(e) {
            return Object(o.a)({
                container: {
                    paddingBottom: 80
                },
                commands: {
                    position: "fixed",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 80,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: e.palette.background.default
                },
                button: {
                    margin: e.spacing(0, 2)
                }
            })
        }
        ))
          , fe = n(15)
          , he = n(125)
          , pe = -1
          , be = function() {
            var e = Object(b.useState)(void 0)
              , t = Object(V.a)(e, 2)
              , n = t[0]
              , r = t[1]
              , i = Object(fe.l)((function(e) {
                return e.userInfo
            }
            ))
              , o = Object(fe.l)((function(e) {
                return e.dramas
            }
            ))
              , s = Object(fe.j)("homePageNumber")
              , u = Object(b.useRef)()
              , l = Object(b.useRef)()
              , d = Object(b.useRef)(0);
            Object(he.a)("\u5df4\u522b\u82f1\u8bed - \u82f1\u8bed\u542c\u529b\u53e3\u8bed\u5728\u7ebf\u5b66\u4e60");
            var f = i.expiresAt > Date.now()
              , h = Object(b.useMemo)((function() {
                return null === o || void 0 === o ? void 0 : o.dramas.filter((function(e) {
                    return !e.visibility || "public" === e.visibility || "publicExceptAppGuest" === e.visibility && !fe.d || "registered" === e.visibility && i.isAuthenticated || "registered" === e.visibility && g.k() > 14400 || "vip" === e.visibility && f
                }
                ))
            }
            ), [o, i.isAuthenticated, f])
              , j = h ? Math.ceil(h.length / 12) : 0;
            s = Math.min(Math.max(s, 1), j);
            var m = h ? h.slice(12 * (s - 1), 12 * (s - 1) + 12) : void 0
              , x = Object(b.useState)(null)
              , O = Object(V.a)(x, 2)
              , v = O[0]
              , w = O[1]
              , y = Boolean(v)
              , k = g.g()
              , I = g.l(k || g.b)
              , A = me();
            function T(e) {
                pe = window.pageYOffset,
                Object(p.c)("/dramas/".concat(e.id))
            }
            Object(b.useEffect)((function() {
                fe.h.setLocalMovie(void 0)
            }
            ), []),
            Object(b.useEffect)((function() {
                if (n === s && l.current && u.current) {
                    r(void 0);
                    var e = u.current.offsetHeight;
                    Object(oe.i)(0, Math.max(0, function(e) {
                        var t, n, r = e.getBoundingClientRect(), a = null !== (t = window.pageXOffset) && void 0 !== t ? t : document.documentElement.scrollLeft, c = null !== (n = window.pageYOffset) && void 0 !== n ? n : document.documentElement.scrollTop;
                        return {
                            top: r.top + c,
                            left: r.left + a
                        }
                    }(l.current).top - e - 16)),
                    l.current.classList.add(A.newPage)
                }
            }
            ), [n, s, A.newPage]),
            Object(b.useEffect)((function() {
                fe.d && null == localStorage.getItem(se) && Object(p.c)("/privacy")
            }
            ), []),
            Object(b.useLayoutEffect)((function() {
                pe > 0 && Math.abs(window.pageYOffset - pe) > 30 && window.scroll(0, pe)
            }
            ), []);
            var H = Object(N.jsxs)(E.a, {
                anchorEl: v,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                open: y,
                onClose: function() {
                    w(null)
                },
                children: [Object(N.jsx)(L.a, {
                    onClick: function() {
                        w(null),
                        Object(p.c)("/local")
                    },
                    children: "\u672c\u673a\u89c6\u9891"
                }), !1, Object(N.jsx)(B.a, {}), Object(N.jsx)(L.a, {
                    onClick: function() {
                        w(null),
                        Object(p.c)("/account")
                    },
                    children: "\u6211\u7684\u5e10\u53f7"
                }), i.isAuthenticated && Object(N.jsx)(N.Fragment, {
                    children: Object(N.jsx)(L.a, {
                        onClick: function() {
                            w(null),
                            g.t()
                        },
                        children: "\u767b\u51fa"
                    })
                })]
            });
            return Object(N.jsxs)("div", {
                className: A.root,
                children: [Object(N.jsx)(Z.a, {
                    children: Object(N.jsx)(W.a, {
                        ref: u,
                        position: "sticky",
                        children: Object(N.jsxs)(D.a, {
                            children: [Object(N.jsx)("img", {
                                src: X,
                                className: A.logoIcon,
                                alt: ""
                            }), Object(N.jsx)(S.a, {
                                className: A.logoText,
                                variant: "h6",
                                color: "inherit",
                                noWrap: !0,
                                children: Object(oe.d)()
                            }), Object(N.jsx)(a.a, {
                                color: "inherit",
                                onClick: function() {
                                    Object(p.c)("/new-words")
                                },
                                children: "\u751f\u8bcd\u672c"
                            }), Object(N.jsx)(c.a, {
                                edge: "end",
                                color: "inherit",
                                onClick: function(e) {
                                    w(e.currentTarget)
                                },
                                children: Object(N.jsx)(Y.a, {})
                            })]
                        })
                    })
                }), H, Object(N.jsxs)("main", {
                    children: [Object(N.jsxs)("div", {
                        className: A.siteHeader,
                        children: [Object(N.jsxs)(C.a, {
                            pt: 4,
                            px: 2,
                            pb: 6,
                            textAlign: "center",
                            children: [Object(N.jsxs)(S.a, {
                                variant: "h4",
                                gutterBottom: !0,
                                children: [Object(N.jsxs)("span", {
                                    className: A.nowrap,
                                    children: ["\u6bcf\u65e5 ", g.a / 60, " \u5206\u949f"]
                                }), ",", " ", Object(N.jsx)("span", {
                                    className: A.nowrap,
                                    children: "\u8f7b\u677e\u7ec3\u82f1\u8bed\u542c\u529b"
                                })]
                            }), g.k() > 300 ? Object(N.jsxs)(S.a, {
                                variant: "h6",
                                children: ["\u4eca\u65e5\u5df2\u5b66 ", g.i(), "/", g.a / 60, " \u5206\u949f"]
                            }) : Object(N.jsx)(S.a, {
                                variant: "h6",
                                children: "\u5355\u53e5\u91cd\u590d / \u7075\u6d3b\u5b57\u5e55 / \u60c5\u5883\u586b\u8bcd"
                            })]
                        }), Object(N.jsx)(C.a, {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            children: Object(N.jsx)(a.a, {
                                className: A.quickStartButton,
                                variant: "contained",
                                color: "secondary",
                                disableElevation: !0,
                                endIcon: Object(N.jsx)(G.a, {}),
                                onClick: function() {
                                    Object(p.c)(I)
                                },
                                children: k ? "\u8df3\u5230\u4e0a\u6b21\u64ad\u653e\u4f4d\u7f6e" : "\u6253\u5f00\u6f14\u793a\u89c6\u9891"
                            })
                        })]
                    }), m && Object(N.jsxs)(C.a, {
                        ref: l,
                        mb: 4,
                        px: 2,
                        onAnimationEnd: function(e) {
                            l.current && (e.stopPropagation(),
                            l.current.classList.remove(A.newPage))
                        },
                        children: [Object(N.jsx)(z.a, {
                            container: !0,
                            spacing: 3,
                            children: m.map((function(e) {
                                return Object(N.jsx)(z.a, {
                                    item: !0,
                                    xs: 12,
                                    sm: 6,
                                    md: 4,
                                    lg: 3,
                                    children: Object(N.jsx)(xe, {
                                        drama: e,
                                        onClick: T
                                    })
                                }, e.id)
                            }
                            ))
                        }), Object(N.jsx)(C.a, {
                            display: "flex",
                            my: 3,
                            justifyContent: "center",
                            children: Object(N.jsx)(J.a, {
                                count: j,
                                page: s,
                                variant: "outlined",
                                color: "primary",
                                size: "large",
                                onChange: function(e, t) {
                                    g.z({
                                        homePageNumber: t
                                    }),
                                    r(t)
                                }
                            })
                        })]
                    })]
                }), i.isAuthenticated || Boolean(k) || Object(N.jsx)(P.a, {
                    className: Object(Q.a)(A.intro, A.features),
                    maxWidth: "md",
                    children: Object(N.jsxs)(z.a, {
                        container: !0,
                        spacing: 3,
                        children: [Object(N.jsxs)(z.a, {
                            item: !0,
                            xs: 12,
                            sm: 4,
                            children: [Object(N.jsx)("div", {
                                className: A.introCardImage,
                                children: Object(N.jsx)($.a, {
                                    className: A.introIcon
                                })
                            }), Object(N.jsxs)("div", {
                                className: A.introCardText,
                                children: [Object(N.jsx)(S.a, {
                                    variant: "h5",
                                    gutterBottom: !0,
                                    children: "\u5355\u53e5\u91cd\u590d"
                                }), Object(N.jsx)(S.a, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    children: "\u9002\u5408\u8bed\u8a00\u5b66\u4e60\u7684\u64ad\u653e\u8282\u594f\uff0c\u6bcf\u53e5\u81ea\u52a8\u64ad\u653e\u591a\u904d\uff0c\u907f\u514d\u6765\u56de\u62d6\u52a8\uff0c\u8f7b\u677e\u542c\u6e05\u53f0\u8bcd\u3002"
                                })]
                            })]
                        }), Object(N.jsxs)(z.a, {
                            item: !0,
                            xs: 12,
                            sm: 4,
                            children: [Object(N.jsx)("div", {
                                className: A.introCardImage,
                                children: Object(N.jsx)(ee.d, {
                                    className: A.introIcon
                                })
                            }), Object(N.jsxs)("div", {
                                className: A.introCardText,
                                children: [Object(N.jsx)(S.a, {
                                    variant: "h5",
                                    gutterBottom: !0,
                                    children: "\u7075\u6d3b\u5b57\u5e55"
                                }), Object(N.jsxs)(S.a, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    children: ["\u591a\u79cd\u5b57\u5e55\u663e\u793a\u65b9\u5f0f\uff0c\u5fc5\u6709\u4e00\u6b3e\u9002\u5408\u4f60\u3002", Object(N.jsx)("br", {}), "\u652f\u6301\u5b57\u5e55\u5355\u8bcd\u968f\u70b9\u968f\u8bd1\uff0c\u5e76\u81ea\u52a8\u52a0\u5165\u751f\u8bcd\u672c\u3002"]
                                })]
                            })]
                        }), Object(N.jsxs)(z.a, {
                            item: !0,
                            xs: 12,
                            sm: 4,
                            children: [Object(N.jsx)("div", {
                                className: A.introCardImage,
                                children: Object(N.jsx)(ee.a, {
                                    className: A.introIcon
                                })
                            }), Object(N.jsxs)("div", {
                                className: A.introCardText,
                                children: [Object(N.jsx)(S.a, {
                                    variant: "h5",
                                    gutterBottom: !0,
                                    children: "\u586b\u8bcd\u6a21\u5f0f"
                                }), Object(N.jsxs)(S.a, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    children: ["\u4f1a\u5728\u6bcf\u53e5\u53f0\u8bcd\u524d\u5148\u663e\u793a\u4e2d\u6587\u5b57\u5e55\u548c\u5e26\u7a7a\u7f3a\u7684\u82f1\u8bed\u5b57\u5e55\uff0c\u5ef6\u65f6\u6307\u5b9a\u65f6\u95f4\u540e\u7ee7\u7eed\u64ad\u653e\u3002", Object(N.jsx)("br", {}), "\u5728\u6682\u505c\u7684\u65f6\u95f4\u6bb5\u5185\u4f60\u53ef\u4ee5\u4e3b\u52a8\u601d\u8003\u7a7a\u7f3a\u5904\u76f8\u5e94\u82f1\u6587\uff0c\u5e76\u548c\u63a5\u4e0b\u6765\u7684\u64ad\u653e\u5185\u5bb9\u76f8\u5370\u8bc1\u3002 \u4e3b\u52a8\u601d\u8003\u6bd4\u88ab\u52a8\u704c\u8f93\u66f4\u7b26\u5408\u5927\u8111\u7684\u8bb0\u5fc6\u6a21\u578b\uff0c\u5feb\u901f\u5b66\u4f1a\u5f20\u53e3\u53bb\u8bf4\u3002"]
                                })]
                            })]
                        })]
                    })
                }), Object(N.jsx)("footer", {
                    className: A.footer,
                    children: Object(N.jsx)(P.a, {
                        children: Object(N.jsxs)(S.a, {
                            variant: "body2",
                            children: [Object(N.jsx)("span", {
                                onDoubleClick: function() {
                                    d.current++ > 5 && window.location.assign("http://pc.oxyry.com:3000")
                                },
                                children: "\xa9"
                            }), " ", (new Date).getFullYear(), " ", Object(N.jsx)(R.a, {
                                className: A.footerLink,
                                href: "https://www.oxyry.com/",
                                color: "inherit",
                                target: "_blank",
                                children: "OXYRY"
                            }), " ", fe.d && Object(N.jsx)(R.a, {
                                component: p.a,
                                className: A.footerLink,
                                to: "/privacy",
                                color: "inherit",
                                children: "\u9690\u79c1\u653f\u7b56"
                            }), " ", !fe.d && Object(N.jsxs)(N.Fragment, {
                                children: [Object(N.jsx)(R.a, {
                                    href: "http://beian.miit.gov.cn/",
                                    color: "inherit",
                                    target: "_blank",
                                    rel: "nofollow",
                                    children: "\u6d59ICP\u590717056500\u53f7-1"
                                }), " ", Object(N.jsx)(R.a, {
                                    className: A.footerLink,
                                    href: "https://www.babelabc.com/babelabc-app.apk",
                                    color: "inherit",
                                    children: "\u5b89\u5353 App"
                                })]
                            }), !fe.d && !1]
                        })
                    })
                })]
            })
        }
          , je = function() {
            return Object(N.jsx)(be, {})
        }
          , me = Object(i.a)((function(e) {
            return Object(o.a)({
                root: {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh"
                },
                logoIcon: {
                    marginRight: e.spacing(1),
                    width: 34,
                    height: 34
                },
                logoText: {
                    flexGrow: 1
                },
                siteHeader: {
                    marginBottom: e.spacing(4),
                    background: e.palette.primary.main,
                    boxShadow: e.shadows[4],
                    borderRadius: "0 0 0 5rem",
                    color: e.palette.primary.contrastText
                },
                quickStartButton: {
                    borderRadius: 0
                },
                nowrap: {
                    whiteSpace: "nowrap"
                },
                footer: {
                    marginTop: "auto",
                    padding: e.spacing(2, 1),
                    background: Object(_.e)(e.palette.background.default, .05),
                    color: e.palette.text.secondary
                },
                footerLink: {
                    textDecoration: "underline"
                },
                features: {
                    marginTop: e.spacing(5)
                },
                intro: {
                    marginBottom: e.spacing(4)
                },
                introCardText: {
                    textAlign: "center"
                },
                introCardImage: {
                    margin: "0 auto 16px",
                    padding: e.spacing(1),
                    textAlign: "center"
                },
                introIcon: {
                    fontSize: 60
                },
                "@keyframes newPage": {
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    }
                },
                newPage: {
                    animation: "$newPage 0.5s ease-in"
                }
            })
        }
        ))
          , xe = function(e) {
            var t, n = Oe();
            var r = "/babelabc-data/dramas/".concat(e.drama.id, "/cover.jpg");
            return Object(N.jsx)(U.a, {
                className: n.root,
                children: Object(N.jsx)(q.a, {
                    component: "a",
                    href: "/dramas/".concat(e.drama.id),
                    className: n.actionArea,
                    onClick: function(t) {
                        t.preventDefault(),
                        e.onClick(e.drama)
                    },
                    children: Object(N.jsxs)("div", {
                        className: n.actionContent,
                        children: [Object(N.jsx)(K.a, {
                            className: n.cover,
                            image: r
                        }), Object(N.jsxs)(F.a, {
                            children: [Object(N.jsx)(S.a, {
                                variant: "h6",
                                children: e.drama.title
                            }), Object(N.jsx)(S.a, {
                                variant: "subtitle2",
                                color: "textSecondary",
                                children: null === (t = e.drama.genre) || void 0 === t ? void 0 : t.join("/")
                            })]
                        })]
                    })
                })
            })
        }
          , Oe = Object(i.a)((function() {
            return Object(o.a)({
                root: {
                    height: "100%"
                },
                actionArea: {
                    height: "100%"
                },
                actionContent: {
                    height: "100%"
                },
                cover: {
                    height: 165
                }
            })
        }
        ))
          , ve = n(29)
          , ge = n(147)
          , we = n(561)
          , ye = n(549)
          , ke = n(568)
          , Ie = n(248)
          , Ce = n.n(Ie)
          , Se = n(96)
          , Ae = n(121)
          , Ne = function() {
            var e = Object(fe.l)((function(e) {
                return e.isShowLoginDialog
            }
            ))
              , t = Object(b.useState)(!1)
              , n = Object(V.a)(t, 2)
              , r = n[0]
              , i = n[1]
              , o = Object(b.useState)()
              , s = Object(V.a)(o, 2)
              , u = s[0]
              , l = s[1]
              , d = Object(b.useState)(0)
              , p = Object(V.a)(d, 2)
              , j = p[0]
              , m = p[1]
              , x = Object(b.useState)("")
              , O = Object(V.a)(x, 2)
              , v = O[0]
              , w = O[1]
              , y = Object(b.useState)("")
              , k = Object(V.a)(y, 2)
              , I = k[0]
              , A = k[1]
              , T = Object(b.useState)(!0)
              , H = Object(V.a)(T, 2)
              , M = H[0]
              , E = H[1]
              , L = Object(b.useState)(!0)
              , B = Object(V.a)(L, 2)
              , W = B[0]
              , D = B[1];
            function z(e) {
                var t = e.target.value;
                w(t),
                E(!t || Se.c.test(t))
            }
            function P(e) {
                var t = e.target.value;
                A(t),
                D(!t || t.length >= 6)
            }
            function R() {
                fe.h.setIsShowLoginDialog(!1)
            }
            var _ = Te();
            return Object(N.jsxs)(re.a, {
                maxWidth: "xs",
                open: e,
                onClose: R,
                children: [Object(N.jsxs)(ae.a, {
                    disableTypography: !0,
                    children: [Object(N.jsx)(S.a, {
                        variant: "h6",
                        children: "\u5e10\u53f7"
                    }), Object(N.jsx)(c.a, {
                        className: _.closeButton,
                        onClick: R,
                        children: Object(N.jsx)(f.a, {})
                    })]
                }), Object(N.jsxs)(C.a, {
                    mx: 3,
                    mb: 2,
                    children: [Object(N.jsxs)(we.a, {
                        variant: "fullWidth",
                        value: j,
                        onChange: function(e, t) {
                            r || (l(void 0),
                            m(t))
                        },
                        children: [Object(N.jsx)(ye.a, {
                            label: "\u767b\u5f55"
                        }), Object(N.jsx)(ye.a, {
                            label: "\u6ce8\u518c"
                        })]
                    }), u && Object(N.jsx)(C.a, {
                        my: 2,
                        children: Object(N.jsx)(h.a, {
                            severity: "error",
                            children: u
                        })
                    }), Object(N.jsxs)(Ce.a, {
                        index: j,
                        onChangeIndex: function(e) {
                            r || (l(void 0),
                            m(e))
                        },
                        children: [Object(N.jsx)(He, {
                            className: _.tabPanel,
                            index: 0,
                            value: j,
                            children: Object(N.jsxs)("form", {
                                className: _.form,
                                action: "/_api/login",
                                method: "post",
                                onSubmit: function(e) {
                                    e.preventDefault(),
                                    M && W && (i(!0),
                                    l(void 0),
                                    g.s(v, I).then((function(e) {
                                        e ? l(e.errorMessage || "\u672a\u77e5\u9519\u8bef\u3002") : (g.u("\u767b\u5f55\u6210\u529f\u3002"),
                                        fe.h.setIsShowLoginDialog(!1))
                                    }
                                    )).finally((function() {
                                        i(!1)
                                    }
                                    )).catch((function() {
                                        g.u("\u672a\u77e5\u9519\u8bef\uff01", "error")
                                    }
                                    )))
                                },
                                children: [Object(N.jsx)(ke.a, {
                                    name: "username",
                                    label: "\u7528\u6237\u540d",
                                    value: v,
                                    error: !M,
                                    required: !0,
                                    autoComplete: "username",
                                    variant: "outlined",
                                    fullWidth: !0,
                                    onChange: z
                                }), Object(N.jsx)("br", {}), Object(N.jsx)(ke.a, {
                                    name: "password",
                                    label: "\u5bc6\u7801",
                                    type: "password",
                                    value: I,
                                    error: !W,
                                    required: !0,
                                    autoComplete: "current-password",
                                    variant: "outlined",
                                    fullWidth: !0,
                                    onChange: P
                                }), Object(N.jsx)("div", {
                                    className: _.actionBar,
                                    children: Object(N.jsx)(a.a, {
                                        type: "submit",
                                        variant: "contained",
                                        color: "primary",
                                        fullWidth: !0,
                                        disabled: r,
                                        children: "\u767b\u5f55"
                                    })
                                })]
                            })
                        }), Object(N.jsx)(He, {
                            className: _.tabPanel,
                            index: 1,
                            value: j,
                            children: Object(N.jsxs)("form", {
                                className: _.form,
                                action: "/_api/register",
                                method: "post",
                                onSubmit: function(e) {
                                    e.preventDefault(),
                                    M && W && (i(!0),
                                    l(void 0),
                                    g.w(v, I, Object(Ae.b)()).then((function(e) {
                                        e ? l(e.errorMessage) : (Object(Ae.a)(),
                                        fe.h.setIsShowLoginDialog(!1),
                                        g.u("\u5e10\u53f7\u521b\u5efa\u6210\u529f\u5e76\u5df2\u767b\u5f55\u3002"))
                                    }
                                    )).finally((function() {
                                        i(!1)
                                    }
                                    )).catch((function() {
                                        g.u("\u672a\u77e5\u9519\u8bef\uff01", "error")
                                    }
                                    )))
                                },
                                children: [Object(N.jsx)(ke.a, {
                                    name: "username",
                                    label: "\u7528\u6237\u540d",
                                    value: v,
                                    error: !M,
                                    required: !0,
                                    autoComplete: "username",
                                    helperText: "\u81f3\u5c115\u4f4d\u82f1\u6587\u5b57\u7b26\uff0c\u53ef\u4ee5\u662f\u90ae\u7bb1\u6216\u7535\u8bdd\u53f7\u7801",
                                    variant: "outlined",
                                    fullWidth: !0,
                                    onChange: z
                                }), Object(N.jsx)("br", {}), Object(N.jsx)(ke.a, {
                                    name: "password",
                                    label: "\u5bc6\u7801",
                                    type: "password",
                                    value: I,
                                    error: !W,
                                    required: !0,
                                    helperText: "\u81f3\u5c11 6 \u4f4d",
                                    variant: "outlined",
                                    fullWidth: !0,
                                    onChange: P
                                }), Object(N.jsx)("div", {
                                    className: _.actionBar,
                                    children: Object(N.jsx)(a.a, {
                                        type: "submit",
                                        variant: "contained",
                                        color: "primary",
                                        fullWidth: !0,
                                        disabled: r,
                                        children: "\u6ce8\u518c"
                                    })
                                })]
                            })
                        })]
                    })]
                })]
            })
        }
          , Te = Object(i.a)((function(e) {
            return Object(o.a)({
                closeButton: {
                    position: "absolute",
                    right: e.spacing(1),
                    top: e.spacing(1),
                    color: e.palette.grey[500]
                },
                tabPanel: {
                    marginTop: e.spacing(2)
                },
                form: {
                    marginBottom: e.spacing(1),
                    "& .MuiTextField-root": {
                        marginTop: e.spacing(1),
                        marginBottom: e.spacing(1)
                    }
                },
                actionBar: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "right",
                    marginTop: e.spacing(1.5)
                }
            })
        }
        ))
          , He = function(e) {
            var t = e.children
              , n = e.value
              , r = e.index
              , a = Object(ge.a)(e, ["children", "value", "index"]);
            return Object(N.jsx)("div", Object(ve.a)(Object(ve.a)({
                className: e.className,
                hidden: n !== r
            }, a), {}, {
                children: n === r && t
            }))
        }
          , Me = function() {
            var e = Ve();
            return Object(N.jsxs)(ie.a, {
                contentClassName: e.dialog,
                maxWidth: "sm",
                children: [Object(N.jsx)(S.a, {
                    variant: "h2",
                    gutterBottom: !0,
                    children: "\u9875\u9762\u672a\u627e\u5230"
                }), Object(N.jsx)(a.a, {
                    variant: "contained",
                    color: "primary",
                    component: p.a,
                    to: "/",
                    children: "\u8fd4\u56de\u9996\u9875"
                })]
            })
        }
          , Ve = Object(i.a)((function() {
            return Object(o.a)({
                dialog: {
                    textAlign: "center"
                }
            })
        }
        ))
          , Ee = function() {
            var e = Object(fe.l)((function(e) {
                return e.initialized
            }
            ))
              , t = Object(fe.l)((function(e) {
                return e.fatalError
            }
            ))
              , n = Object(fe.l)((function(e) {
                return e.message
            }
            ))
              , i = Le();
            Object(d.a)("(prefers-color-scheme: dark)"),
            Object(fe.l)((function(e) {
                return e.forceDarkTheme
            }
            ));
            function o() {
                var e = document.getElementById("app-loading");
                e && e.remove()
            }
            if (Object(b.useEffect)((function() {
                Object(g.m)().catch((function(e) {
                    g.f({
                        error: e
                    })
                }
                )).then(o)
            }
            ), []),
            t)
                return Object(N.jsx)(T, {
                    title: t.resourceName ? "\u52a0\u8f7d".concat(t.resourceName, "\u5931\u8d25") : "\u5e94\u7528\u53d1\u751f\u672a\u77e5\u9519\u8bef",
                    subtitle: t.resourceName ? "\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\u540e\u91cd\u8bd5" : "\u8bf7\u5c1d\u8bd5\u5237\u65b0\u6216\u66f4\u6362\u6d4f\u89c8\u5668"
                });
            if (!e)
                return null;
            var s = v;
            return Object(N.jsxs)(l.a, {
                theme: s,
                children: [Object(N.jsx)(u.a, {}), Object(N.jsx)(M, {
                    children: Object(N.jsxs)("div", {
                        className: i.root,
                        children: [Object(N.jsxs)(p.b, {
                            children: [Object(N.jsx)(je, {
                                path: "/"
                            }), Object(N.jsx)(Re, {
                                path: "/dramas/:id"
                            }), Object(N.jsx)(De, {
                                path: "/dramas/:dramaId/episodes/:episodeId/dialogues/:dialogueIndex/:chunkType"
                            }), Object(N.jsx)(De, {
                                path: "/local/dialogues/:dialogueIndex/:chunkType",
                                dramaId: "local",
                                episodeId: "local"
                            }), Object(N.jsx)(De, {
                                path: "/remote/dialogues/:dialogueIndex/:chunkType",
                                dramaId: "remote",
                                episodeId: "remote"
                            }), Object(N.jsx)(ze, {
                                path: "/account"
                            }), Object(N.jsx)(Pe, {
                                path: "/new-words"
                            }), Object(N.jsx)(_e, {
                                path: "/local"
                            }), Object(N.jsx)(Ue, {
                                path: "/userlib"
                            }), Object(N.jsx)(le, {
                                path: "/privacy"
                            }), Object(N.jsx)(Me, {
                                default: !0
                            })]
                        }), Object(N.jsx)(Ne, {}), n && Object(N.jsx)(r.a, {
                            open: n.open,
                            children: Object(N.jsx)(h.a, {
                                onClose: g.e,
                                severity: n.type,
                                action: Object(N.jsxs)(j.a.Fragment, {
                                    children: [n.refreshAppAction && Object(N.jsx)(a.a, {
                                        color: "secondary",
                                        size: "small",
                                        onClick: function() {
                                            window.location.reload()
                                        },
                                        children: "\u91cd\u8bd5"
                                    }), Object(N.jsx)(c.a, {
                                        size: "small",
                                        "aria-label": "close",
                                        color: "inherit",
                                        onClick: function(e, t) {
                                            "clickaway" !== t && g.e()
                                        },
                                        children: Object(N.jsx)(f.a, {
                                            fontSize: "small"
                                        })
                                    })]
                                }),
                                children: n.text
                            })
                        })]
                    })
                })]
            })
        }
          , Le = Object(i.a)((function() {
            return Object(o.a)({
                root: {
                    cursor: "default"
                }
            })
        }
        ));
        function Be(e) {
            return e
        }
        var We = function() {
            return Object(N.jsx)(s.a, {})
        }
          , De = x()({
            loader: function() {
                return Promise.all([n.e(3), n.e(8)]).then(n.bind(null, 600))
            },
            loading: We
        })
          , ze = x()({
            loader: function() {
                return n.e(5).then(n.bind(null, 599))
            },
            loading: We
        })
          , Pe = x()({
            loader: function() {
                return n.e(4).then(n.bind(null, 602))
            },
            loading: We
        })
          , Re = x()({
            loader: function() {
                return n.e(7).then(n.bind(null, 603))
            },
            loading: We
        })
          , _e = x()({
            loader: function() {
                return n.e(9).then(n.bind(null, 601))
            },
            loading: We
        })
          , Ue = x()({
            loader: function() {
                return n.e(6).then(n.bind(null, 604))
            },
            loading: We
        })
    },
    24: function(e, t, n) {
        "use strict";
        n.d(t, "m", (function() {
            return C
        }
        )),
        n.d(t, "q", (function() {
            return A
        }
        )),
        n.d(t, "w", (function() {
            return T
        }
        )),
        n.d(t, "s", (function() {
            return M
        }
        )),
        n.d(t, "t", (function() {
            return E
        }
        )),
        n.d(t, "v", (function() {
            return D
        }
        )),
        n.d(t, "o", (function() {
            return F
        }
        )),
        n.d(t, "p", (function() {
            return J
        }
        )),
        n.d(t, "c", (function() {
            return ee
        }
        )),
        n.d(t, "x", (function() {
            return ne
        }
        )),
        n.d(t, "h", (function() {
            return ae
        }
        )),
        n.d(t, "r", (function() {
            return ie
        }
        )),
        n.d(t, "u", (function() {
            return le
        }
        )),
        n.d(t, "e", (function() {
            return de
        }
        )),
        n.d(t, "f", (function() {
            return fe
        }
        )),
        n.d(t, "y", (function() {
            return be
        }
        )),
        n.d(t, "g", (function() {
            return Oe
        }
        )),
        n.d(t, "b", (function() {
            return ve
        }
        )),
        n.d(t, "l", (function() {
            return ge
        }
        )),
        n.d(t, "z", (function() {
            return ye
        }
        )),
        n.d(t, "a", (function() {
            return He
        }
        )),
        n.d(t, "d", (function() {
            return Be
        }
        )),
        n.d(t, "n", (function() {
            return We
        }
        )),
        n.d(t, "i", (function() {
            return De
        }
        )),
        n.d(t, "k", (function() {
            return ze
        }
        )),
        n.d(t, "j", (function() {
            return Pe
        }
        ));
        var r = n(29)
          , a = n(84)
          , c = n(7)
          , i = n.n(c)
          , o = n(12)
          , s = n(83)
          , u = n(187)
          , l = n.n(u)
          , d = n(96)
          , f = n(43)
          , h = n(151)
          , p = n(152)
          , b = n(159)
          , j = n.n(b)
          , m = "$value"
          , x = function() {
            function e(t, n) {
                Object(h.a)(this, e),
                this.name = t,
                this.maxLength = n,
                this.kv = void 0,
                this.length = void 0,
                this.kv = j.a.createInstance({
                    name: t
                })
            }
            return Object(p.a)(e, [{
                key: "getItem",
                value: function() {
                    var e = Object(o.a)(i.a.mark((function e(t) {
                        return i.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.abrupt("return", this.kv.getItem(null == this.maxLength ? t : O(t)));
                                case 4:
                                    return e.prev = 4,
                                    e.t0 = e.catch(0),
                                    console.error("Db::removeItem error: ".concat(t)),
                                    e.abrupt("return", null);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 4]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setItem",
                value: function() {
                    var e = Object(o.a)(i.a.mark((function e(t, n) {
                        var r, a = this;
                        return i.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    null == this.maxLength) {
                                        e.next = 32;
                                        break
                                    }
                                    if (!0 === this.maxLength) {
                                        e.next = 13;
                                        break
                                    }
                                    if (null != this.length) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.t0 = Math,
                                    e.next = 7,
                                    this.kv.length();
                                case 7:
                                    e.t1 = e.sent,
                                    e.t2 = e.t1 / 2,
                                    this.length = e.t0.ceil.call(e.t0, e.t2);
                                case 10:
                                    if (!(this.length > this.maxLength)) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 13,
                                    this.cleanup();
                                case 13:
                                    return r = function() {
                                        var e = Object(o.a)(i.a.mark((function e() {
                                            return i.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        a.kv.setItem(t, Date.now());
                                                    case 2:
                                                        return e.next = 4,
                                                        a.kv.setItem(O(t), n);
                                                    case 4:
                                                        null != a.length && a.length++;
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(),
                                    e.prev = 14,
                                    e.next = 17,
                                    r();
                                case 17:
                                    e.next = 30;
                                    break;
                                case 19:
                                    if (e.prev = 19,
                                    e.t3 = e.catch(14),
                                    !((c = e.t3)instanceof DOMException) || 22 !== c.code && "QuotaExceededError" !== c.name) {
                                        e.next = 29;
                                        break
                                    }
                                    return console.error("Db::quota exceeded"),
                                    e.next = 25,
                                    this.cleanup();
                                case 25:
                                    return e.next = 27,
                                    r();
                                case 27:
                                    e.next = 30;
                                    break;
                                case 29:
                                    throw e.t3;
                                case 30:
                                    e.next = 34;
                                    break;
                                case 32:
                                    return e.next = 34,
                                    this.kv.setItem(t, n);
                                case 34:
                                    return e.abrupt("return", !0);
                                case 37:
                                    e.prev = 37,
                                    e.t4 = e.catch(0),
                                    console.error("Db::setItem error: ".concat(t));
                                case 40:
                                    return e.abrupt("return", !1);
                                case 41:
                                case "end":
                                    return e.stop()
                                }
                            var c
                        }
                        ), e, this, [[0, 37], [14, 19]])
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "removeItem",
                value: function() {
                    var e = Object(o.a)(i.a.mark((function e(t) {
                        return i.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.kv.removeItem(t);
                                case 3:
                                    if (null == this.maxLength) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 6,
                                    this.kv.removeItem(O(t));
                                case 6:
                                    e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8,
                                    e.t0 = e.catch(0),
                                    console.error("Db::removeItem error: ".concat(t));
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 8]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "keys",
                value: function() {
                    var e = Object(o.a)(i.a.mark((function e() {
                        var t;
                        return i.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.kv.keys();
                                case 2:
                                    return t = e.sent,
                                    e.abrupt("return", null == this.maxLength ? t : t.filter((function(e) {
                                        return !e.endsWith(m)
                                    }
                                    )));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "clear",
                value: function() {
                    var e = Object(o.a)(i.a.mark((function e() {
                        return i.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.kv.clear();
                                case 2:
                                    this.length = void 0;
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "drop",
                value: function() {
                    var e = Object(o.a)(i.a.mark((function e() {
                        return i.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.kv.dropInstance();
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "cleanup",
                value: function() {
                    var e = Object(o.a)(i.a.mark((function e() {
                        var t, n, r, c, o, s, u, l, d, f, h, p;
                        return i.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (null != this.maxLength) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4,
                                    this.kv.keys();
                                case 4:
                                    t = e.sent,
                                    n = {},
                                    r = t.filter((function(e) {
                                        return !e.endsWith(m)
                                    }
                                    )),
                                    c = Object(a.a)(r),
                                    e.prev = 8,
                                    c.s();
                                case 10:
                                    if ((o = c.n()).done) {
                                        e.next = 18;
                                        break
                                    }
                                    return s = o.value,
                                    e.next = 14,
                                    this.kv.getItem(s);
                                case 14:
                                    null != (u = e.sent) && "number" === typeof u && (n[s] = u);
                                case 16:
                                    e.next = 10;
                                    break;
                                case 18:
                                    e.next = 23;
                                    break;
                                case 20:
                                    e.prev = 20,
                                    e.t0 = e.catch(8),
                                    c.e(e.t0);
                                case 23:
                                    return e.prev = 23,
                                    c.f(),
                                    e.finish(23);
                                case 26:
                                    r.sort((function(e, t) {
                                        return (n[e] || 0) - (n[t] || 0)
                                    }
                                    )),
                                    l = r.slice(Math.ceil(r.length / 4)),
                                    d = Object(a.a)(t),
                                    e.prev = 29,
                                    d.s();
                                case 31:
                                    if ((f = d.n()).done) {
                                        e.next = 39;
                                        break
                                    }
                                    if (h = f.value,
                                    p = h.endsWith(m) ? h.substr(0, h.length - m.length) : h,
                                    l.includes(p)) {
                                        e.next = 37;
                                        break
                                    }
                                    return e.next = 37,
                                    this.kv.removeItem(h);
                                case 37:
                                    e.next = 31;
                                    break;
                                case 39:
                                    e.next = 44;
                                    break;
                                case 41:
                                    e.prev = 41,
                                    e.t1 = e.catch(29),
                                    d.e(e.t1);
                                case 44:
                                    return e.prev = 44,
                                    d.f(),
                                    e.finish(44);
                                case 47:
                                    this.length = void 0;
                                case 48:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[8, 20, 23, 26], [29, 41, 44, 47]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            e
        }();
        function O(e) {
            return "".concat(e).concat(m)
        }
        var v = n(15)
          , g = new x("appStorage")
          , w = new x("dramaEpisodeListCache",100)
          , y = new x("episodeCache",300)
          , k = new x("newWords",100)
          , I = "userInfo";
        function C() {
            return S.apply(this, arguments)
        }
        function S() {
            return (S = Object(o.a)(i.a.mark((function e() {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Promise.all([Ee(), A(), Ie(), P(), me()]);
                        case 2:
                            v.h.init(),
                            setInterval(A.bind(void 0, !0), 3e5);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function A() {
            return N.apply(this, arguments)
        }
        function N() {
            return (N = Object(o.a)(i.a.mark((function e() {
                var t = arguments;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t.length > 0 && void 0 !== t[0] && t[0],
                            e.next = 3,
                            Re({
                                name: "\u7528\u6237\u8d44\u6599",
                                cache: g,
                                cacheKey: I,
                                fetch: B,
                                onLoad: v.h.setUserInfo
                            });
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function T(e, t, n) {
            return H.apply(this, arguments)
        }
        function H() {
            return (H = Object(o.a)(i.a.mark((function e(t, n, r) {
                var a;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Object(f.a)({
                                method: "POST",
                                url: "/_api/register",
                                body: {
                                    username: t,
                                    password: n,
                                    referrer: r
                                }
                            });
                        case 2:
                            if (!(a = e.sent).ok) {
                                e.next = 8;
                                break
                            }
                            return e.next = 6,
                            A();
                        case 6:
                            e.next = 9;
                            break;
                        case 8:
                            return e.abrupt("return", a.result || {
                                errorMessage: "\u672a\u77e5\u9519\u8bef\u3002"
                            });
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function M(e, t) {
            return V.apply(this, arguments)
        }
        function V() {
            return (V = Object(o.a)(i.a.mark((function e(t, n) {
                var r;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Object(f.a)({
                                method: "POST",
                                url: "/_api/login",
                                body: {
                                    username: t,
                                    password: n
                                }
                            });
                        case 2:
                            if (!(r = e.sent).ok) {
                                e.next = 8;
                                break
                            }
                            return e.next = 6,
                            A();
                        case 6:
                            e.next = 9;
                            break;
                        case 8:
                            return e.abrupt("return", r.result || {
                                errorMessage: "\u672a\u77e5\u9519\u8bef\u3002"
                            });
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function E() {
            return L.apply(this, arguments)
        }
        function L() {
            return (L = Object(o.a)(i.a.mark((function e() {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Object(f.a)({
                                method: "POST",
                                url: "/_api/logout"
                            });
                        case 2:
                            if (!e.sent.ok) {
                                e.next = 7;
                                break
                            }
                            return e.next = 6,
                            g.setItem(I, null);
                        case 6:
                            v.h.setUserInfo(d.a);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function B() {
            return W.apply(this, arguments)
        }
        function W() {
            return (W = Object(o.a)(i.a.mark((function e() {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Object(f.b)({
                                url: "/_api/user-info"
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function D(e) {
            return z.apply(this, arguments)
        }
        function z() {
            return (z = Object(o.a)(i.a.mark((function e(t) {
                var n;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Object(f.a)({
                                method: "POST",
                                url: "/_api/redeem",
                                body: {
                                    code: t
                                }
                            });
                        case 2:
                            if (!(n = e.sent).ok) {
                                e.next = 8;
                                break
                            }
                            return e.next = 6,
                            A();
                        case 6:
                            e.next = 9;
                            break;
                        case 8:
                            return e.abrupt("return", n.result || {
                                errorMessage: "\u672a\u77e5\u9519\u8bef\u3002"
                            });
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function P() {
            return R.apply(this, arguments)
        }
        function R() {
            return (R = Object(o.a)(i.a.mark((function e() {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Re({
                                name: "\u5267\u96c6\u5217\u8868",
                                cache: g,
                                cacheKey: "dramas",
                                fetch: q,
                                isStale: _,
                                onLoad: v.h.setDramas
                            });
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function _(e) {
            return U.apply(this, arguments)
        }
        function U() {
            return (U = Object(o.a)(i.a.mark((function e(t) {
                var n;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Object(f.b)({
                                url: "/_api/dramas/version"
                            });
                        case 2:
                            return n = e.sent,
                            e.abrupt("return", n.version !== t.version);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function q() {
            return K.apply(this, arguments)
        }
        function K() {
            return (K = Object(o.a)(i.a.mark((function e() {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Object(f.b)({
                                url: "/_api/dramas"
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function F(e, t, n) {
            return Y.apply(this, arguments)
        }
        function Y() {
            return (Y = Object(o.a)(i.a.mark((function e(t, n, r) {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Ue({
                                name: "\u5267\u96c6\u5217\u8868",
                                cache: w,
                                cacheKey: t,
                                fetch: G.bind(void 0, t),
                                onLoad: n,
                                onError: r
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function G(e) {
            return $.apply(this, arguments)
        }
        function $() {
            return ($ = Object(o.a)(i.a.mark((function e(t) {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Object(f.b)({
                                url: "/_api/dramas/".concat(t)
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function J(e, t, n, r) {
            return Q.apply(this, arguments)
        }
        function Q() {
            return (Q = Object(o.a)(i.a.mark((function e(t, n, r, a) {
                var c;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return c = "".concat(t, ".").concat(n),
                            e.abrupt("return", Ue({
                                name: "\u5267\u96c6",
                                cache: y,
                                cacheKey: c,
                                fetch: X.bind(void 0, t, n),
                                onLoad: r,
                                onError: a
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function X(e, t) {
            return Z.apply(this, arguments)
        }
        function Z() {
            return (Z = Object(o.a)(i.a.mark((function e(t, n) {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Object(f.b)({
                                url: "/_api/dramas/".concat(t, "/volumes/").concat(n)
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function ee(e) {
            return te.apply(this, arguments)
        }
        function te() {
            return (te = Object(o.a)(i.a.mark((function e(t) {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            k.setItem(t.word, t);
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function ne(e) {
            return re.apply(this, arguments)
        }
        function re() {
            return (re = Object(o.a)(i.a.mark((function e(t) {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            k.removeItem(t);
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function ae() {
            return ce.apply(this, arguments)
        }
        function ce() {
            return (ce = Object(o.a)(i.a.mark((function e() {
                var t, n, r, c, o;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = [],
                            e.t0 = a.a,
                            e.next = 4,
                            k.keys();
                        case 4:
                            e.t1 = e.sent,
                            n = (0,
                            e.t0)(e.t1),
                            e.prev = 6,
                            n.s();
                        case 8:
                            if ((r = n.n()).done) {
                                e.next = 16;
                                break
                            }
                            return c = r.value,
                            e.next = 12,
                            k.getItem(c);
                        case 12:
                            (o = e.sent) && t.push(o);
                        case 14:
                            e.next = 8;
                            break;
                        case 16:
                            e.next = 21;
                            break;
                        case 18:
                            e.prev = 18,
                            e.t2 = e.catch(6),
                            n.e(e.t2);
                        case 21:
                            return e.prev = 21,
                            n.f(),
                            e.finish(21);
                        case 24:
                            return t.sort((function(e, t) {
                                return t.addTime - e.addTime
                            }
                            )),
                            e.abrupt("return", t);
                        case 26:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[6, 18, 21, 24]])
            }
            )))).apply(this, arguments)
        }
        function ie(e, t) {
            return oe.apply(this, arguments)
        }
        function oe() {
            return (oe = Object(o.a)(i.a.mark((function e(t, n) {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Ue({
                                name: "\u89c6\u9891\u5217\u8868",
                                cache: g,
                                cacheKey: "remoteMovies",
                                fetch: function() {
                                    return Object(f.b)({
                                        url: "/_api/userlib"
                                    })
                                },
                                onLoad: t,
                                onError: n
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var se, ue = {
            default: 7e3,
            short: 5e3,
            long: 15e3
        };
        function le(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info"
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default"
              , r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (v.h.notify(e, t, r),
            null != se && window.clearTimeout(se),
            n) {
                var a = ue[n];
                Object(s.a)(a),
                se = window.setTimeout((function() {
                    se = void 0,
                    v.h.clearNotify()
                }
                ), a)
            }
        }
        function de() {
            v.h.clearNotify()
        }
        function fe(e) {
            v.h.crash(e)
        }
        var he = "lastPosition"
          , pe = null;
        function be(e) {
            return je.apply(this, arguments)
        }
        function je() {
            return (je = Object(o.a)(i.a.mark((function e(t) {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if ("local" !== t.dramaId) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if (l()(pe, t)) {
                                e.next = 5;
                                break
                            }
                            return e.next = 5,
                            g.setItem(he, t);
                        case 5:
                            pe = t;
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function me() {
            return xe.apply(this, arguments)
        }
        function xe() {
            return (xe = Object(o.a)(i.a.mark((function e() {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            g.getItem(he);
                        case 2:
                            pe = e.sent;
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Oe() {
            return pe
        }
        var ve = {
            dramaId: "ted0258-lydia-machova-the-secrets-of-learning-a-new-language",
            episodeId: "E01",
            dialogueIndex: 0,
            chunkType: "dialogue"
        };
        function ge(e) {
            return "/dramas/".concat(e.dramaId, "/episodes/").concat(e.episodeId, "/dialogues/").concat(e.dialogueIndex, "/").concat(e.chunkType)
        }
        var we = "settings";
        function ye(e) {
            return ke.apply(this, arguments)
        }
        function ke() {
            return (ke = Object(o.a)(i.a.mark((function e(t) {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return v.h.setSettings(t),
                            e.next = 3,
                            g.setItem(we, Object(v.c)().settings);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Ie() {
            return Ce.apply(this, arguments)
        }
        function Ce() {
            return (Ce = Object(o.a)(i.a.mark((function e() {
                var t;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            g.getItem(we);
                        case 2:
                            if (e.t0 = e.sent,
                            e.t0) {
                                e.next = 5;
                                break
                            }
                            e.t0 = {};
                        case 5:
                            t = e.t0,
                            v.h.setSettings(t);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Se, Ae, Ne = "playTimeToday", Te = "playTimeTotal", He = 600, Me = function() {
            return (new Date).toISOString().substr(0, 10)
        }, Ve = function() {
            return {
                today: Me(),
                playTimeSec: 0
            }
        };
        function Ee() {
            return Le.apply(this, arguments)
        }
        function Le() {
            return (Le = Object(o.a)(i.a.mark((function e() {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            g.getItem(Ne);
                        case 2:
                            if (e.t0 = e.sent,
                            e.t0) {
                                e.next = 5;
                                break
                            }
                            e.t0 = Ve();
                        case 5:
                            return Se = e.t0,
                            e.t2 = Number,
                            e.next = 9,
                            g.getItem(Te);
                        case 9:
                            if (e.t3 = e.sent,
                            e.t1 = (0,
                            e.t2)(e.t3),
                            e.t1) {
                                e.next = 13;
                                break
                            }
                            e.t1 = 0;
                        case 13:
                            Ae = e.t1;
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Be(e) {
            e = Math.min(60, e),
            Se.today !== Me() && (Se = Ve()),
            Se.playTimeSec += 0.1,
            g.setItem(Ne, Se),
            Ae += 0.1,
            g.setItem(Te, Ae)
        }
        function We() {
            return !(Object(v.c)().userInfo.expiresAt > Date.now()) && Se.today === Me() && Se.playTimeSec > He && ze() >= 900
        }
        function De() {
            return Math.ceil((Se.today === Me() ? Se.playTimeSec : 0) / 60)
        }
        function ze() {
            return Ae
        }
        function Pe() {
            return (ze() / 3600).toFixed(1)
        }
        function Re(e) {
            return _e.apply(this, arguments)
        }
        function _e() {
            return (_e = Object(o.a)(i.a.mark((function e(t) {
                var n, r, a, c;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.cache.getItem(t.cacheKey);
                        case 2:
                            if (n = e.sent,
                            r = !1,
                            null == n) {
                                e.next = 16;
                                break
                            }
                            e.prev = 5,
                            t.onLoad(n),
                            r = !0,
                            e.next = 16;
                            break;
                        case 10:
                            return e.prev = 10,
                            e.t0 = e.catch(5),
                            e.next = 14,
                            t.cache.removeItem(t.cacheKey);
                        case 14:
                            throw fe({
                                resourceName: t.name,
                                error: e.t0
                            }),
                            e.t0;
                        case 16:
                            if (a = Object(o.a)(i.a.mark((function e() {
                                return i.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (e.t0 = null == n || !t.isStale,
                                            e.t0) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 4,
                                            t.isStale(n);
                                        case 4:
                                            e.t0 = e.sent;
                                        case 5:
                                            if (!e.t0) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 8,
                                            Object(o.a)(i.a.mark((function e() {
                                                var a;
                                                return i.a.wrap((function(e) {
                                                    for (; ; )
                                                        switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.prev = 0,
                                                            e.next = 3,
                                                            t.fetch();
                                                        case 3:
                                                            a = e.sent,
                                                            e.next = 18;
                                                            break;
                                                        case 6:
                                                            if (e.prev = 6,
                                                            e.t0 = e.catch(0),
                                                            !t.onError) {
                                                                e.next = 12;
                                                                break
                                                            }
                                                            t.onError(e.t0),
                                                            e.next = 18;
                                                            break;
                                                        case 12:
                                                            if (!r) {
                                                                e.next = 17;
                                                                break
                                                            }
                                                            le("\u5e94\u7528".concat(t.name ? "".concat(r ? "\u66f4\u65b0" : "\u52a0\u8f7d").concat(t.name, "\u65f6") : "", "\u53d1\u751f\u7f51\u7edc\u9519\u8bef"), "error", "long"),
                                                            console.error(e.t0),
                                                            e.next = 18;
                                                            break;
                                                        case 17:
                                                            throw e.t0;
                                                        case 18:
                                                            if (null == a || l()(a, n)) {
                                                                e.next = 22;
                                                                break
                                                            }
                                                            return e.next = 21,
                                                            t.cache.setItem(t.cacheKey, a);
                                                        case 21:
                                                            t.onLoad(a);
                                                        case 22:
                                                        case "end":
                                                            return e.stop()
                                                        }
                                                }
                                                ), e, null, [[0, 6]])
                                            }
                                            )))();
                                        case 8:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )))(),
                            c = a.catch((function(e) {
                                throw fe({
                                    resourceName: t.name,
                                    error: e
                                }),
                                e
                            }
                            )),
                            r) {
                                e.next = 20;
                                break
                            }
                            return e.abrupt("return", c);
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[5, 10]])
            }
            )))).apply(this, arguments)
        }
        function Ue(e) {
            return qe.apply(this, arguments)
        }
        function qe() {
            return (qe = Object(o.a)(i.a.mark((function e(t) {
                var n;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = function() {
                                var e = Object(o.a)(i.a.mark((function e(t) {
                                    var n;
                                    return i.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return n = Object(v.c)().dramas,
                                                e.abrupt("return", !Ke(t) || t.version !== (n ? n.version : -1));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            e.abrupt("return", Re(Object(r.a)({
                                isStale: n
                            }, t)));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Ke(e) {
            return null != e.version
        }
    },
    43: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return l
        }
        )),
        n.d(t, "b", (function() {
            return f
        }
        ));
        var r = n(7)
          , a = n.n(r)
          , c = n(29)
          , i = n(147)
          , o = n(34)
          , s = n(12)
          , u = n(83);
        function l(e) {
            return d.apply(this, arguments)
        }
        function d() {
            return (d = Object(s.a)(a.a.mark((function e(t) {
                var n, r, o, s, l, d, f, h, b, j, m, x, O, v, g;
                return a.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = t.url,
                            r = t.method,
                            o = void 0 === r ? "GET" : r,
                            s = t.body,
                            l = t.query,
                            d = t.headers,
                            f = Object(i.a)(t, ["url", "method", "body", "query", "headers"]),
                            h = n,
                            null != l && (Object(u.a)(!h.includes("?")),
                            h += "?" + p(l)),
                            b = JSON.stringify(s),
                            j = Object(c.a)({
                                "content-type": "application/json",
                                accept: "application/json"
                            }, d),
                            e.next = 7,
                            window.fetch(h, Object(c.a)({
                                method: o,
                                credentials: "include",
                                body: b,
                                headers: j
                            }, f));
                        case 7:
                            return void 0 === (m = e.sent).ok && (m.ok = m.status >= 200 && m.status < 300),
                            e.next = 11,
                            m.text();
                        case 11:
                            return x = e.sent,
                            O = (m.headers.get("Content-Type") || "").split(";")[0],
                            (v = "application/json" === O) && (g = JSON.parse(x)),
                            e.abrupt("return", {
                                ok: m.ok,
                                finalUrl: h,
                                status: m.status,
                                result: v ? g : void 0
                            });
                        case 16:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function f(e) {
            return h.apply(this, arguments)
        }
        function h() {
            return (h = Object(s.a)(a.a.mark((function e(t) {
                var n, r;
                return a.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            l(t);
                        case 2:
                            if ((n = e.sent).ok) {
                                e.next = 7;
                                break
                            }
                            throw (r = new Error("Http ".concat(n.status, " error on ").concat(n.finalUrl))).httpStatus = n.status,
                            r;
                        case 7:
                            return e.abrupt("return", n.result);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function p(e) {
            var t = function(e, t) {
                return encodeURIComponent(e) + "=" + function(e) {
                    return null == e ? "" : encodeURIComponent(String(e))
                }(t)
            };
            return null == e ? "" : Object.entries(e).map((function(e) {
                var n = Object(o.a)(e, 2)
                  , r = n[0]
                  , a = n[1];
                return Array.isArray(a) ? a.length ? a.map((function(e) {
                    return t(r, e)
                }
                )).join("&") : encodeURIComponent(r) + "=" : t(r, a)
            }
            )).join("&")
        }
    },
    481: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(7)
          , a = n.n(r)
          , c = n(12)
          , i = (n(266),
        n(0),
        n(21))
          , o = n.n(i)
          , s = n(559)
          , u = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        function l(e, t) {
            navigator.serviceWorker.register(e).then((function(e) {
                e.onupdatefound = function() {
                    var n = e.installing;
                    null != n && (n.onstatechange = function() {
                        "installed" === n.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),
                        t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)))
                    }
                    )
                }
            }
            )).catch((function(e) {
                console.error("Error during service worker registration:", e)
            }
            ))
        }
        var d = n(192)
          , f = n(121)
          , h = n(2);
        Object(f.c)(),
        o.a.render(Object(h.jsx)(s.a, {
            children: Object(h.jsx)(d.a, {})
        }), document.getElementById("root")),
        function(e) {
            if ("serviceWorker"in navigator) {
                if (new URL("",window.location.href).origin !== window.location.origin)
                    return;
                window.addEventListener("load", (function() {
                    var t = "".concat("", "/service-worker.js");
                    u ? (!function(e, t) {
                        fetch(e, {
                            headers: {
                                "Service-Worker": "script"
                            }
                        }).then((function(n) {
                            var r = n.headers.get("content-type");
                            404 === n.status || null != r && -1 === r.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                e.unregister().then((function() {
                                    window.location.reload()
                                }
                                ))
                            }
                            )) : l(e, t)
                        }
                        )).catch((function() {
                            console.log("No internet connection found. App is running in offline mode.")
                        }
                        ))
                    }(t, e),
                    navigator.serviceWorker.ready.then((function() {
                        console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")
                    }
                    ))) : l(t, e)
                }
                ))
            }
        }({
            onUpdate: function() {
                var e = Object(c.a)(a.a.mark((function e(t) {
                    return a.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!t || !t.waiting) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3,
                                t.unregister();
                            case 3:
                                t.waiting.postMessage({
                                    type: "SKIP_WAITING"
                                }),
                                window.location.reload();
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        })
    },
    62: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }
        )),
        n.d(t, "d", (function() {
            return i
        }
        )),
        n.d(t, "c", (function() {
            return o
        }
        )),
        n.d(t, "e", (function() {
            return s
        }
        )),
        n.d(t, "b", (function() {
            return u
        }
        )),
        n.d(t, "f", (function() {
            return l
        }
        )),
        n.d(t, "g", (function() {
            return d
        }
        )),
        n.d(t, "i", (function() {
            return f
        }
        )),
        n.d(t, "h", (function() {
            return h
        }
        )),
        n.d(t, "j", (function() {
            return p
        }
        ));
        n(84);
        var r = n(0)
          , a = n(83);
        Object(a.a)("weijarz", "missing REACT_APP_* envvar");
        var c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        function i() {
            return "\u5df4\u522b\u82f1\u8bed"
        }
        function o(e) {
            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        }
        function s(e) {
            var t, n, r = /^E([-\d]+)$/.exec(e), c = /^S([-\d]+)E([-\d]+)$/.exec(e);
            if (r)
                t = 1,
                n = r[1];
            else {
                if (!c)
                    return Object(a.b)(e);
                t = Number(c[1]),
                n = c[2]
            }
            return [t, n]
        }
        function u(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }
        function l(e) {
            return e[Math.floor(Math.random() * e.length)]
        }
        function d(e) {
            return Array.from(Array(e).keys())
        }
        function f(e, t) {
            try {
                window.scrollTo({
                    top: t,
                    left: e,
                    behavior: "smooth"
                })
            } catch (n) {
                window.scrollTo(e, t)
            }
        }
        function h(e, t) {
            try {
                window.scrollBy({
                    top: t,
                    left: e,
                    behavior: "smooth"
                })
            } catch (n) {
                window.scrollBy(e, t)
            }
        }
        function p() {
            Object(r.useLayoutEffect)((function() {
                window.scroll(0, 0)
            }
            ), [])
        }
    },
    96: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return r
        }
        )),
        n.d(t, "a", (function() {
            return a
        }
        )),
        n.d(t, "d", (function() {
            return c
        }
        )),
        n.d(t, "b", (function() {
            return i
        }
        ));
        var r = /^[\w@.]{5,40}$/
          , a = {
            isAuthenticated: !1,
            expiresAt: 0,
            paid: !1
        }
          , c = 1320
          , i = {
            6: 28,
            12: 48,
            36: 118
        };
        Math.round(.3 * i[6]),
        Math.round(.3 * i[12]),
        Math.round(.3 * i[36]),
        Math.round(.12 * i[6]),
        Math.round(.12 * i[12]),
        Math.round(.12 * i[36])
    }
}, [[481, 1, 2]]]);
