(() => {
    var rn = Object.create;
    var ct = Object.defineProperty;
    var on = Object.getOwnPropertyDescriptor;
    var sn = Object.getOwnPropertyNames;
    var un = Object.getPrototypeOf,
        an = Object.prototype.hasOwnProperty;
    var cn = (t => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, {
        get: (u, l) => (typeof require < "u" ? require : u)[l]
    }) : t)(function (t) {
        if (typeof require < "u") return require.apply(this, arguments);
        throw new Error('Dynamic require of "' + t + '" is not supported')
    });
    var de = (t, u) => () => (u || t((u = {
        exports: {}
    }).exports, u), u.exports);
    var ln = (t, u, l, x) => {
        if (u && typeof u == "object" || typeof u == "function")
            for (let S of sn(u)) !an.call(t, S) && S !== l && ct(t, S, {
                get: () => u[S],
                enumerable: !(x = on(u, S)) || x.enumerable
            });
        return t
    };
    var fn = (t, u, l) => (l = t != null ? rn(un(t)) : {}, ln(u || !t || !t.__esModule ? ct(l, "default", {
        value: t,
        enumerable: !0
    }) : l, t));
    var Qe = de(() => {
        "use strict";
        window.tram = function (t) {
            function u(e, r) {
                var i = new ue.Bare;
                return i.init(e, r)
            }

            function l(e) {
                return e.replace(/[A-Z]/g, function (r) {
                    return "-" + r.toLowerCase()
                })
            }

            function x(e) {
                var r = parseInt(e.slice(1), 16),
                    i = r >> 16 & 255,
                    s = r >> 8 & 255,
                    c = 255 & r;
                return [i, s, c]
            }

            function S(e, r, i) {
                return "#" + (1 << 24 | e << 16 | r << 8 | i).toString(16).slice(1)
            }

            function b() {}

            function R(e, r) {
                B("Type warning: Expected: [" + e + "] Got: [" + typeof r + "] " + r)
            }

            function P(e, r, i) {
                B("Units do not match [" + e + "]: " + r + ", " + i)
            }

            function O(e, r, i) {
                if (r !== void 0 && (i = r), e === void 0) return i;
                var s = i;
                return Fe.test(e) || !Pe.test(e) ? s = parseInt(e, 10) : Pe.test(e) && (s = 1e3 * parseFloat(e)), 0 > s && (s = 0), s === s ? s : i
            }

            function B(e) {
                G.debug && window && window.console.warn(e)
            }

            function J(e) {
                for (var r = -1, i = e ? e.length : 0, s = []; ++r < i;) {
                    var c = e[r];
                    c && s.push(c)
                }
                return s
            }
            var U = function (e, r, i) {
                    function s(N) {
                        return typeof N == "object"
                    }

                    function c(N) {
                        return typeof N == "function"
                    }

                    function a() {}

                    function T(N, re) {
                        function p() {
                            var ge = new z;
                            return c(ge.init) && ge.init.apply(ge, arguments), ge
                        }

                        function z() {}
                        re === i && (re = N, N = Object), p.Bare = z;
                        var X, ae = a[e] = N[e],
                            Te = z[e] = p[e] = new a;
                        return Te.constructor = p, p.mixin = function (ge) {
                            return z[e] = p[e] = T(p, ge)[e], p
                        }, p.open = function (ge) {
                            if (X = {}, c(ge) ? X = ge.call(p, Te, ae, p, N) : s(ge) && (X = ge), s(X))
                                for (var ze in X) r.call(X, ze) && (Te[ze] = X[ze]);
                            return c(Te.init) || (Te.init = N), p
                        }, p.open(re)
                    }
                    return T
                }("prototype", {}.hasOwnProperty),
                Y = {
                    ease: ["ease", function (e, r, i, s) {
                        var c = (e /= s) * e,
                            a = c * e;
                        return r + i * (-2.75 * a * c + 11 * c * c + -15.5 * a + 8 * c + .25 * e)
                    }],
                    "ease-in": ["ease-in", function (e, r, i, s) {
                        var c = (e /= s) * e,
                            a = c * e;
                        return r + i * (-1 * a * c + 3 * c * c + -3 * a + 2 * c)
                    }],
                    "ease-out": ["ease-out", function (e, r, i, s) {
                        var c = (e /= s) * e,
                            a = c * e;
                        return r + i * (.3 * a * c + -1.6 * c * c + 2.2 * a + -1.8 * c + 1.9 * e)
                    }],
                    "ease-in-out": ["ease-in-out", function (e, r, i, s) {
                        var c = (e /= s) * e,
                            a = c * e;
                        return r + i * (2 * a * c + -5 * c * c + 2 * a + 2 * c)
                    }],
                    linear: ["linear", function (e, r, i, s) {
                        return i * e / s + r
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (e, r, i, s) {
                        return i * (e /= s) * e + r
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (e, r, i, s) {
                        return -i * (e /= s) * (e - 2) + r
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (e, r, i, s) {
                        return (e /= s / 2) < 1 ? i / 2 * e * e + r : -i / 2 * (--e * (e - 2) - 1) + r
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (e, r, i, s) {
                        return i * (e /= s) * e * e + r
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (e, r, i, s) {
                        return i * ((e = e / s - 1) * e * e + 1) + r
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (e, r, i, s) {
                        return (e /= s / 2) < 1 ? i / 2 * e * e * e + r : i / 2 * ((e -= 2) * e * e + 2) + r
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (e, r, i, s) {
                        return i * (e /= s) * e * e * e + r
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (e, r, i, s) {
                        return -i * ((e = e / s - 1) * e * e * e - 1) + r
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (e, r, i, s) {
                        return (e /= s / 2) < 1 ? i / 2 * e * e * e * e + r : -i / 2 * ((e -= 2) * e * e * e - 2) + r
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (e, r, i, s) {
                        return i * (e /= s) * e * e * e * e + r
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (e, r, i, s) {
                        return i * ((e = e / s - 1) * e * e * e * e + 1) + r
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (e, r, i, s) {
                        return (e /= s / 2) < 1 ? i / 2 * e * e * e * e * e + r : i / 2 * ((e -= 2) * e * e * e * e + 2) + r
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (e, r, i, s) {
                        return -i * Math.cos(e / s * (Math.PI / 2)) + i + r
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (e, r, i, s) {
                        return i * Math.sin(e / s * (Math.PI / 2)) + r
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (e, r, i, s) {
                        return -i / 2 * (Math.cos(Math.PI * e / s) - 1) + r
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (e, r, i, s) {
                        return e === 0 ? r : i * Math.pow(2, 10 * (e / s - 1)) + r
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (e, r, i, s) {
                        return e === s ? r + i : i * (-Math.pow(2, -10 * e / s) + 1) + r
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (e, r, i, s) {
                        return e === 0 ? r : e === s ? r + i : (e /= s / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + r : i / 2 * (-Math.pow(2, -10 * --e) + 2) + r
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (e, r, i, s) {
                        return -i * (Math.sqrt(1 - (e /= s) * e) - 1) + r
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (e, r, i, s) {
                        return i * Math.sqrt(1 - (e = e / s - 1) * e) + r
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (e, r, i, s) {
                        return (e /= s / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + r : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + r
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (e, r, i, s, c) {
                        return c === void 0 && (c = 1.70158), i * (e /= s) * e * ((c + 1) * e - c) + r
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (e, r, i, s, c) {
                        return c === void 0 && (c = 1.70158), i * ((e = e / s - 1) * e * ((c + 1) * e + c) + 1) + r
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (e, r, i, s, c) {
                        return c === void 0 && (c = 1.70158), (e /= s / 2) < 1 ? i / 2 * e * e * (((c *= 1.525) + 1) * e - c) + r : i / 2 * ((e -= 2) * e * (((c *= 1.525) + 1) * e + c) + 2) + r
                    }]
                },
                I = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                Q = document,
                V = window,
                K = "bkwld-tram",
                D = /[\-\.0-9]/g,
                L = /[A-Z]/,
                m = "number",
                _ = /^(rgb|#)/,
                k = /(em|cm|mm|in|pt|pc|px)$/,
                F = /(em|cm|mm|in|pt|pc|px|%)$/,
                oe = /(deg|rad|turn)$/,
                le = "unitless",
                ye = /(all|none) 0s ease 0s/,
                Le = /^(width|height)$/,
                ve = " ",
                g = Q.createElement("a"),
                f = ["Webkit", "Moz", "O", "ms"],
                d = ["-webkit-", "-moz-", "-o-", "-ms-"],
                E = function (e) {
                    if (e in g.style) return {
                        dom: e,
                        css: e
                    };
                    var r, i, s = "",
                        c = e.split("-");
                    for (r = 0; r < c.length; r++) s += c[r].charAt(0).toUpperCase() + c[r].slice(1);
                    for (r = 0; r < f.length; r++)
                        if (i = f[r] + s, i in g.style) return {
                            dom: i,
                            css: d[r] + e
                        }
                },
                y = u.support = {
                    bind: Function.prototype.bind,
                    transform: E("transform"),
                    transition: E("transition"),
                    backface: E("backface-visibility"),
                    timing: E("transition-timing-function")
                };
            if (y.transition) {
                var q = y.timing.dom;
                if (g.style[q] = Y["ease-in-back"][0], !g.style[q])
                    for (var W in I) Y[W][0] = I[W]
            }
            var j = u.frame = function () {
                    var e = V.requestAnimationFrame || V.webkitRequestAnimationFrame || V.mozRequestAnimationFrame || V.oRequestAnimationFrame || V.msRequestAnimationFrame;
                    return e && y.bind ? e.bind(V) : function (r) {
                        V.setTimeout(r, 16)
                    }
                }(),
                pe = u.now = function () {
                    var e = V.performance,
                        r = e && (e.now || e.webkitNow || e.msNow || e.mozNow);
                    return r && y.bind ? r.bind(e) : Date.now || function () {
                        return +new Date
                    }
                }(),
                me = U(function (e) {
                    function r(C, Z) {
                        var se = J(("" + C).split(ve)),
                            ee = se[0];
                        Z = Z || {};
                        var we = w[ee];
                        if (!we) return B("Unsupported property: " + ee);
                        if (!Z.weak || !this.props[ee]) {
                            var xe = we[0],
                                be = this.props[ee];
                            return be || (be = this.props[ee] = new xe.Bare), be.init(this.$el, se, we, Z), be
                        }
                    }

                    function i(C, Z, se) {
                        if (C) {
                            var ee = typeof C;
                            if (Z || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), ee == "number" && Z) return this.timer = new ne({
                                duration: C,
                                context: this,
                                complete: a
                            }), void(this.active = !0);
                            if (ee == "string" && Z) {
                                switch (C) {
                                    case "hide":
                                        p.call(this);
                                        break;
                                    case "stop":
                                        T.call(this);
                                        break;
                                    case "redraw":
                                        z.call(this);
                                        break;
                                    default:
                                        r.call(this, C, se && se[1])
                                }
                                return a.call(this)
                            }
                            if (ee == "function") return void C.call(this, this);
                            if (ee == "object") {
                                var we = 0;
                                Te.call(this, C, function (ce, nn) {
                                    ce.span > we && (we = ce.span), ce.stop(), ce.animate(nn)
                                }, function (ce) {
                                    "wait" in ce && (we = O(ce.wait, 0))
                                }), ae.call(this), we > 0 && (this.timer = new ne({
                                    duration: we,
                                    context: this
                                }), this.active = !0, Z && (this.timer.complete = a));
                                var xe = this,
                                    be = !1,
                                    $e = {};
                                j(function () {
                                    Te.call(xe, C, function (ce) {
                                        ce.active && (be = !0, $e[ce.name] = ce.nextStyle)
                                    }), be && xe.$el.css($e)
                                })
                            }
                        }
                    }

                    function s(C) {
                        C = O(C, 0), this.active ? this.queue.push({
                            options: C
                        }) : (this.timer = new ne({
                            duration: C,
                            context: this,
                            complete: a
                        }), this.active = !0)
                    }

                    function c(C) {
                        return this.active ? (this.queue.push({
                            options: C,
                            args: arguments
                        }), void(this.timer.complete = a)) : B("No active transition timer. Use start() or wait() before then().")
                    }

                    function a() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var C = this.queue.shift();
                            i.call(this, C.options, !0, C.args)
                        }
                    }

                    function T(C) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var Z;
                        typeof C == "string" ? (Z = {}, Z[C] = 1) : Z = typeof C == "object" && C != null ? C : this.props, Te.call(this, Z, ge), ae.call(this)
                    }

                    function N(C) {
                        T.call(this, C), Te.call(this, C, ze, en)
                    }

                    function re(C) {
                        typeof C != "string" && (C = "block"), this.el.style.display = C
                    }

                    function p() {
                        T.call(this), this.el.style.display = "none"
                    }

                    function z() {
                        this.el.offsetHeight
                    }

                    function X() {
                        T.call(this), t.removeData(this.el, K), this.$el = this.el = null
                    }

                    function ae() {
                        var C, Z, se = [];
                        this.upstream && se.push(this.upstream);
                        for (C in this.props) Z = this.props[C], Z.active && se.push(Z.string);
                        se = se.join(","), this.style !== se && (this.style = se, this.el.style[y.transition.dom] = se)
                    }

                    function Te(C, Z, se) {
                        var ee, we, xe, be, $e = Z !== ge,
                            ce = {};
                        for (ee in C) xe = C[ee], ee in ie ? (ce.transform || (ce.transform = {}), ce.transform[ee] = xe) : (L.test(ee) && (ee = l(ee)), ee in w ? ce[ee] = xe : (be || (be = {}), be[ee] = xe));
                        for (ee in ce) {
                            if (xe = ce[ee], we = this.props[ee], !we) {
                                if (!$e) continue;
                                we = r.call(this, ee)
                            }
                            Z.call(this, we, xe)
                        }
                        se && be && se.call(this, be)
                    }

                    function ge(C) {
                        C.stop()
                    }

                    function ze(C, Z) {
                        C.set(Z)
                    }

                    function en(C) {
                        this.$el.css(C)
                    }

                    function Ee(C, Z) {
                        e[C] = function () {
                            return this.children ? tn.call(this, Z, arguments) : (this.el && Z.apply(this, arguments), this)
                        }
                    }

                    function tn(C, Z) {
                        var se, ee = this.children.length;
                        for (se = 0; ee > se; se++) C.apply(this.children[se], Z);
                        return this
                    }
                    e.init = function (C) {
                        if (this.$el = t(C), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, G.keepInherited && !G.fallback) {
                            var Z = h(this.el, "transition");
                            Z && !ye.test(Z) && (this.upstream = Z)
                        }
                        y.backface && G.hideBackface && n(this.el, y.backface.css, "hidden")
                    }, Ee("add", r), Ee("start", i), Ee("wait", s), Ee("then", c), Ee("next", a), Ee("stop", T), Ee("set", N), Ee("show", re), Ee("hide", p), Ee("redraw", z), Ee("destroy", X)
                }),
                ue = U(me, function (e) {
                    function r(i, s) {
                        var c = t.data(i, K) || t.data(i, K, new me.Bare);
                        return c.el || c.init(i), s ? c.start(s) : c
                    }
                    e.init = function (i, s) {
                        var c = t(i);
                        if (!c.length) return this;
                        if (c.length === 1) return r(c[0], s);
                        var a = [];
                        return c.each(function (T, N) {
                            a.push(r(N, s))
                        }), this.children = a, this
                    }
                }),
                M = U(function (e) {
                    function r() {
                        var a = this.get();
                        this.update("auto");
                        var T = this.get();
                        return this.update(a), T
                    }

                    function i(a, T, N) {
                        return T !== void 0 && (N = T), a in Y ? a : N
                    }

                    function s(a) {
                        var T = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a);
                        return (T ? S(T[1], T[2], T[3]) : a).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var c = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    e.init = function (a, T, N, re) {
                        this.$el = a, this.el = a[0];
                        var p = T[0];
                        N[2] && (p = N[2]), A[p] && (p = A[p]), this.name = p, this.type = N[1], this.duration = O(T[1], this.duration, c.duration), this.ease = i(T[2], this.ease, c.ease), this.delay = O(T[3], this.delay, c.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = Le.test(this.name), this.unit = re.unit || this.unit || G.defaultUnit, this.angle = re.angle || this.angle || G.defaultAngle, G.fallback || re.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + ve + this.duration + "ms" + (this.ease != "ease" ? ve + Y[this.ease][0] : "") + (this.delay ? ve + this.delay + "ms" : ""))
                    }, e.set = function (a) {
                        a = this.convert(a, this.type), this.update(a), this.redraw()
                    }, e.transition = function (a) {
                        this.active = !0, a = this.convert(a, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), a == "auto" && (a = r.call(this))), this.nextStyle = a
                    }, e.fallback = function (a) {
                        var T = this.el.style[this.name] || this.convert(this.get(), this.type);
                        a = this.convert(a, this.type), this.auto && (T == "auto" && (T = this.convert(this.get(), this.type)), a == "auto" && (a = r.call(this))), this.tween = new v({
                            from: T,
                            to: a,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, e.get = function () {
                        return h(this.el, this.name)
                    }, e.update = function (a) {
                        n(this.el, this.name, a)
                    }, e.stop = function () {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, n(this.el, this.name, this.get()));
                        var a = this.tween;
                        a && a.context && a.destroy()
                    }, e.convert = function (a, T) {
                        if (a == "auto" && this.auto) return a;
                        var N, re = typeof a == "number",
                            p = typeof a == "string";
                        switch (T) {
                            case m:
                                if (re) return a;
                                if (p && a.replace(D, "") === "") return +a;
                                N = "number(unitless)";
                                break;
                            case _:
                                if (p) {
                                    if (a === "" && this.original) return this.original;
                                    if (T.test(a)) return a.charAt(0) == "#" && a.length == 7 ? a : s(a)
                                }
                                N = "hex or rgb string";
                                break;
                            case k:
                                if (re) return a + this.unit;
                                if (p && T.test(a)) return a;
                                N = "number(px) or string(unit)";
                                break;
                            case F:
                                if (re) return a + this.unit;
                                if (p && T.test(a)) return a;
                                N = "number(px) or string(unit or %)";
                                break;
                            case oe:
                                if (re) return a + this.angle;
                                if (p && T.test(a)) return a;
                                N = "number(deg) or string(angle)";
                                break;
                            case le:
                                if (re || p && F.test(a)) return a;
                                N = "number(unitless) or string(unit or %)"
                        }
                        return R(N, a), a
                    }, e.redraw = function () {
                        this.el.offsetHeight
                    }
                }),
                o = U(M, function (e, r) {
                    e.init = function () {
                        r.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), _))
                    }
                }),
                H = U(M, function (e, r) {
                    e.init = function () {
                        r.init.apply(this, arguments), this.animate = this.fallback
                    }, e.get = function () {
                        return this.$el[this.name]()
                    }, e.update = function (i) {
                        this.$el[this.name](i)
                    }
                }),
                $ = U(M, function (e, r) {
                    function i(s, c) {
                        var a, T, N, re, p;
                        for (a in s) re = ie[a], N = re[0], T = re[1] || a, p = this.convert(s[a], N), c.call(this, T, p, N)
                    }
                    e.init = function () {
                        r.init.apply(this, arguments), this.current || (this.current = {}, ie.perspective && G.perspective && (this.current.perspective = G.perspective, n(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, e.set = function (s) {
                        i.call(this, s, function (c, a) {
                            this.current[c] = a
                        }), n(this.el, this.name, this.style(this.current)), this.redraw()
                    }, e.transition = function (s) {
                        var c = this.values(s);
                        this.tween = new fe({
                            current: this.current,
                            values: c,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var a, T = {};
                        for (a in this.current) T[a] = a in c ? c[a] : this.current[a];
                        this.active = !0, this.nextStyle = this.style(T)
                    }, e.fallback = function (s) {
                        var c = this.values(s);
                        this.tween = new fe({
                            current: this.current,
                            values: c,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, e.update = function () {
                        n(this.el, this.name, this.style(this.current))
                    }, e.style = function (s) {
                        var c, a = "";
                        for (c in s) a += c + "(" + s[c] + ") ";
                        return a
                    }, e.values = function (s) {
                        var c, a = {};
                        return i.call(this, s, function (T, N, re) {
                            a[T] = N, this.current[T] === void 0 && (c = 0, ~T.indexOf("scale") && (c = 1), this.current[T] = this.convert(c, re))
                        }), a
                    }
                }),
                v = U(function (e) {
                    function r(p) {
                        N.push(p) === 1 && j(i)
                    }

                    function i() {
                        var p, z, X, ae = N.length;
                        if (ae)
                            for (j(i), z = pe(), p = ae; p--;) X = N[p], X && X.render(z)
                    }

                    function s(p) {
                        var z, X = t.inArray(p, N);
                        X >= 0 && (z = N.slice(X + 1), N.length = X, z.length && (N = N.concat(z)))
                    }

                    function c(p) {
                        return Math.round(p * re) / re
                    }

                    function a(p, z, X) {
                        return S(p[0] + X * (z[0] - p[0]), p[1] + X * (z[1] - p[1]), p[2] + X * (z[2] - p[2]))
                    }
                    var T = {
                        ease: Y.ease[1],
                        from: 0,
                        to: 1
                    };
                    e.init = function (p) {
                        this.duration = p.duration || 0, this.delay = p.delay || 0;
                        var z = p.ease || T.ease;
                        Y[z] && (z = Y[z][1]), typeof z != "function" && (z = T.ease), this.ease = z, this.update = p.update || b, this.complete = p.complete || b, this.context = p.context || this, this.name = p.name;
                        var X = p.from,
                            ae = p.to;
                        X === void 0 && (X = T.from), ae === void 0 && (ae = T.to), this.unit = p.unit || "", typeof X == "number" && typeof ae == "number" ? (this.begin = X, this.change = ae - X) : this.format(ae, X), this.value = this.begin + this.unit, this.start = pe(), p.autoplay !== !1 && this.play()
                    }, e.play = function () {
                        this.active || (this.start || (this.start = pe()), this.active = !0, r(this))
                    }, e.stop = function () {
                        this.active && (this.active = !1, s(this))
                    }, e.render = function (p) {
                        var z, X = p - this.start;
                        if (this.delay) {
                            if (X <= this.delay) return;
                            X -= this.delay
                        }
                        if (X < this.duration) {
                            var ae = this.ease(X, 0, 1, this.duration);
                            return z = this.startRGB ? a(this.startRGB, this.endRGB, ae) : c(this.begin + ae * this.change), this.value = z + this.unit, void this.update.call(this.context, this.value)
                        }
                        z = this.endHex || this.begin + this.change, this.value = z + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, e.format = function (p, z) {
                        if (z += "", p += "", p.charAt(0) == "#") return this.startRGB = x(z), this.endRGB = x(p), this.endHex = p, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var X = z.replace(D, ""),
                                ae = p.replace(D, "");
                            X !== ae && P("tween", z, p), this.unit = X
                        }
                        z = parseFloat(z), p = parseFloat(p), this.begin = this.value = z, this.change = p - z
                    }, e.destroy = function () {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = b
                    };
                    var N = [],
                        re = 1e3
                }),
                ne = U(v, function (e) {
                    e.init = function (r) {
                        this.duration = r.duration || 0, this.complete = r.complete || b, this.context = r.context, this.play()
                    }, e.render = function (r) {
                        var i = r - this.start;
                        i < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                fe = U(v, function (e, r) {
                    e.init = function (i) {
                        this.context = i.context, this.update = i.update, this.tweens = [], this.current = i.current;
                        var s, c;
                        for (s in i.values) c = i.values[s], this.current[s] !== c && this.tweens.push(new v({
                            name: s,
                            from: this.current[s],
                            to: c,
                            duration: i.duration,
                            delay: i.delay,
                            ease: i.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, e.render = function (i) {
                        var s, c, a = this.tweens.length,
                            T = !1;
                        for (s = a; s--;) c = this.tweens[s], c.context && (c.render(i), this.current[c.name] = c.value, T = !0);
                        return T ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, e.destroy = function () {
                        if (r.destroy.call(this), this.tweens) {
                            var i, s = this.tweens.length;
                            for (i = s; i--;) this.tweens[i].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                G = u.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !y.transition,
                    agentTests: []
                };
            u.fallback = function (e) {
                if (!y.transition) return G.fallback = !0;
                G.agentTests.push("(" + e + ")");
                var r = new RegExp(G.agentTests.join("|"), "i");
                G.fallback = r.test(navigator.userAgent)
            }, u.fallback("6.0.[2-5] Safari"), u.tween = function (e) {
                return new v(e)
            }, u.delay = function (e, r, i) {
                return new ne({
                    complete: r,
                    duration: e,
                    context: i
                })
            }, t.fn.tram = function (e) {
                return u.call(null, this, e)
            };
            var n = t.style,
                h = t.css,
                A = {
                    transform: y.transform && y.transform.css
                },
                w = {
                    color: [o, _],
                    background: [o, _, "background-color"],
                    "outline-color": [o, _],
                    "border-color": [o, _],
                    "border-top-color": [o, _],
                    "border-right-color": [o, _],
                    "border-bottom-color": [o, _],
                    "border-left-color": [o, _],
                    "border-width": [M, k],
                    "border-top-width": [M, k],
                    "border-right-width": [M, k],
                    "border-bottom-width": [M, k],
                    "border-left-width": [M, k],
                    "border-spacing": [M, k],
                    "letter-spacing": [M, k],
                    margin: [M, k],
                    "margin-top": [M, k],
                    "margin-right": [M, k],
                    "margin-bottom": [M, k],
                    "margin-left": [M, k],
                    padding: [M, k],
                    "padding-top": [M, k],
                    "padding-right": [M, k],
                    "padding-bottom": [M, k],
                    "padding-left": [M, k],
                    "outline-width": [M, k],
                    opacity: [M, m],
                    top: [M, F],
                    right: [M, F],
                    bottom: [M, F],
                    left: [M, F],
                    "font-size": [M, F],
                    "text-indent": [M, F],
                    "word-spacing": [M, F],
                    width: [M, F],
                    "min-width": [M, F],
                    "max-width": [M, F],
                    height: [M, F],
                    "min-height": [M, F],
                    "max-height": [M, F],
                    "line-height": [M, le],
                    "scroll-top": [H, m, "scrollTop"],
                    "scroll-left": [H, m, "scrollLeft"]
                },
                ie = {};
            y.transform && (w.transform = [$], ie = {
                x: [F, "translateX"],
                y: [F, "translateY"],
                rotate: [oe],
                rotateX: [oe],
                rotateY: [oe],
                scale: [m],
                scaleX: [m],
                scaleY: [m],
                skew: [oe],
                skewX: [oe],
                skewY: [oe]
            }), y.transform && y.backface && (ie.z = [F, "translateZ"], ie.rotateZ = [oe], ie.scaleZ = [m], ie.perspective = [k]);
            var Fe = /ms/,
                Pe = /s|\./;
            return t.tram = u
        }(window.jQuery)
    });
    var ft = de((Fn, lt) => {
        "use strict";
        var dn = window.$,
            hn = Qe() && dn.tram;
        lt.exports = function () {
            var t = {};
            t.VERSION = "1.6.0-Webflow";
            var u = {},
                l = Array.prototype,
                x = Object.prototype,
                S = Function.prototype,
                b = l.push,
                R = l.slice,
                P = l.concat,
                O = x.toString,
                B = x.hasOwnProperty,
                J = l.forEach,
                U = l.map,
                Y = l.reduce,
                I = l.reduceRight,
                Q = l.filter,
                V = l.every,
                K = l.some,
                D = l.indexOf,
                L = l.lastIndexOf,
                m = Array.isArray,
                _ = Object.keys,
                k = S.bind,
                F = t.each = t.forEach = function (f, d, E) {
                    if (f == null) return f;
                    if (J && f.forEach === J) f.forEach(d, E);
                    else if (f.length === +f.length) {
                        for (var y = 0, q = f.length; y < q; y++)
                            if (d.call(E, f[y], y, f) === u) return
                    } else
                        for (var W = t.keys(f), y = 0, q = W.length; y < q; y++)
                            if (d.call(E, f[W[y]], W[y], f) === u) return;
                    return f
                };
            t.map = t.collect = function (f, d, E) {
                var y = [];
                return f == null ? y : U && f.map === U ? f.map(d, E) : (F(f, function (q, W, j) {
                    y.push(d.call(E, q, W, j))
                }), y)
            }, t.find = t.detect = function (f, d, E) {
                var y;
                return oe(f, function (q, W, j) {
                    if (d.call(E, q, W, j)) return y = q, !0
                }), y
            }, t.filter = t.select = function (f, d, E) {
                var y = [];
                return f == null ? y : Q && f.filter === Q ? f.filter(d, E) : (F(f, function (q, W, j) {
                    d.call(E, q, W, j) && y.push(q)
                }), y)
            };
            var oe = t.some = t.any = function (f, d, E) {
                d || (d = t.identity);
                var y = !1;
                return f == null ? y : K && f.some === K ? f.some(d, E) : (F(f, function (q, W, j) {
                    if (y || (y = d.call(E, q, W, j))) return u
                }), !!y)
            };
            t.contains = t.include = function (f, d) {
                return f == null ? !1 : D && f.indexOf === D ? f.indexOf(d) != -1 : oe(f, function (E) {
                    return E === d
                })
            }, t.delay = function (f, d) {
                var E = R.call(arguments, 2);
                return setTimeout(function () {
                    return f.apply(null, E)
                }, d)
            }, t.defer = function (f) {
                return t.delay.apply(t, [f, 1].concat(R.call(arguments, 1)))
            }, t.throttle = function (f) {
                var d, E, y;
                return function () {
                    d || (d = !0, E = arguments, y = this, hn.frame(function () {
                        d = !1, f.apply(y, E)
                    }))
                }
            }, t.debounce = function (f, d, E) {
                var y, q, W, j, pe, me = function () {
                    var ue = t.now() - j;
                    ue < d ? y = setTimeout(me, d - ue) : (y = null, E || (pe = f.apply(W, q), W = q = null))
                };
                return function () {
                    W = this, q = arguments, j = t.now();
                    var ue = E && !y;
                    return y || (y = setTimeout(me, d)), ue && (pe = f.apply(W, q), W = q = null), pe
                }
            }, t.defaults = function (f) {
                if (!t.isObject(f)) return f;
                for (var d = 1, E = arguments.length; d < E; d++) {
                    var y = arguments[d];
                    for (var q in y) f[q] === void 0 && (f[q] = y[q])
                }
                return f
            }, t.keys = function (f) {
                if (!t.isObject(f)) return [];
                if (_) return _(f);
                var d = [];
                for (var E in f) t.has(f, E) && d.push(E);
                return d
            }, t.has = function (f, d) {
                return B.call(f, d)
            }, t.isObject = function (f) {
                return f === Object(f)
            }, t.now = Date.now || function () {
                return new Date().getTime()
            }, t.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var le = /(.)^/,
                ye = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                Le = /\\|'|\r|\n|\u2028|\u2029/g,
                ve = function (f) {
                    return "\\" + ye[f]
                },
                g = /^\s*(\w|\$)+\s*$/;
            return t.template = function (f, d, E) {
                !d && E && (d = E), d = t.defaults({}, d, t.templateSettings);
                var y = RegExp([(d.escape || le).source, (d.interpolate || le).source, (d.evaluate || le).source].join("|") + "|$", "g"),
                    q = 0,
                    W = "__p+='";
                f.replace(y, function (ue, M, o, H, $) {
                    return W += f.slice(q, $).replace(Le, ve), q = $ + ue.length, M ? W += `'+
    ((__t=(` + M + `))==null?'':_.escape(__t))+
    '` : o ? W += `'+
    ((__t=(` + o + `))==null?'':__t)+
    '` : H && (W += `';
    ` + H + `
    __p+='`), ue
                }), W += `';
    `;
                var j = d.variable;
                if (j) {
                    if (!g.test(j)) throw new Error("variable is not a bare identifier: " + j)
                } else W = `with(obj||{}){
    ` + W + `}
    `, j = "obj";
                W = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` + W + `return __p;
    `;
                var pe;
                try {
                    pe = new Function(d.variable || "obj", "_", W)
                } catch (ue) {
                    throw ue.source = W, ue
                }
                var me = function (ue) {
                    return pe.call(this, ue, t)
                };
                return me.source = "function(" + j + `){
    ` + W + "}", me
            }, t
        }()
    });
    var Oe = de((zn, yt) => {
        "use strict";
        var te = {},
            qe = {},
            He = [],
            Je = window.Webflow || [],
            Re = window.jQuery,
            ke = Re(window),
            vn = Re(document),
            Ie = Re.isFunction,
            _e = te._ = ft(),
            ht = te.tram = Qe() && Re.tram,
            Xe = !1,
            et = !1;
        ht.config.hideBackface = !1;
        ht.config.keepInherited = !0;
        te.define = function (t, u, l) {
            qe[t] && pt(qe[t]);
            var x = qe[t] = u(Re, _e, l) || {};
            return vt(x), x
        };
        te.require = function (t) {
            return qe[t]
        };

        function vt(t) {
            te.env() && (Ie(t.design) && ke.on("__wf_design", t.design), Ie(t.preview) && ke.on("__wf_preview", t.preview)), Ie(t.destroy) && ke.on("__wf_destroy", t.destroy), t.ready && Ie(t.ready) && pn(t)
        }

        function pn(t) {
            if (Xe) {
                t.ready();
                return
            }
            _e.contains(He, t.ready) || He.push(t.ready)
        }

        function pt(t) {
            Ie(t.design) && ke.off("__wf_design", t.design), Ie(t.preview) && ke.off("__wf_preview", t.preview), Ie(t.destroy) && ke.off("__wf_destroy", t.destroy), t.ready && Ie(t.ready) && mn(t)
        }

        function mn(t) {
            He = _e.filter(He, function (u) {
                return u !== t.ready
            })
        }
        te.push = function (t) {
            if (Xe) {
                Ie(t) && t();
                return
            }
            Je.push(t)
        };
        te.env = function (t) {
            var u = window.__wf_design,
                l = typeof u < "u";
            if (!t) return l;
            if (t === "design") return l && u;
            if (t === "preview") return l && !u;
            if (t === "slug") return l && window.__wf_slug;
            if (t === "editor") return window.WebflowEditor;
            if (t === "test") return window.__wf_test;
            if (t === "frame") return window !== window.top
        };
        var Ke = navigator.userAgent.toLowerCase(),
            mt = te.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            gn = te.env.chrome = /chrome/.test(Ke) && /Google/.test(navigator.vendor) && parseInt(Ke.match(/chrome\/(\d+)\./)[1], 10),
            wn = te.env.ios = /(ipod|iphone|ipad)/.test(Ke);
        te.env.safari = /safari/.test(Ke) && !gn && !wn;
        var je;
        mt && vn.on("touchstart mousedown", function (t) {
            je = t.target
        });
        te.validClick = mt ? function (t) {
            return t === je || Re.contains(t, je)
        } : function () {
            return !0
        };
        var gt = "resize.webflow orientationchange.webflow load.webflow",
            yn = "scroll.webflow " + gt;
        te.resize = tt(ke, gt);
        te.scroll = tt(ke, yn);
        te.redraw = tt();

        function tt(t, u) {
            var l = [],
                x = {};
            return x.up = _e.throttle(function (S) {
                _e.each(l, function (b) {
                    b(S)
                })
            }), t && u && t.on(u, x.up), x.on = function (S) {
                typeof S == "function" && (_e.contains(l, S) || l.push(S))
            }, x.off = function (S) {
                if (!arguments.length) {
                    l = [];
                    return
                }
                l = _e.filter(l, function (b) {
                    return b !== S
                })
            }, x
        }
        te.location = function (t) {
            window.location = t
        };
        te.env() && (te.location = function () {});
        te.ready = function () {
            Xe = !0, et ? bn() : _e.each(He, dt), _e.each(Je, dt), te.resize.up()
        };

        function dt(t) {
            Ie(t) && t()
        }

        function bn() {
            et = !1, _e.each(qe, vt)
        }
        var We;
        te.load = function (t) {
            We.then(t)
        };

        function wt() {
            We && (We.reject(), ke.off("load", We.resolve)), We = new Re.Deferred, ke.on("load", We.resolve)
        }
        te.destroy = function (t) {
            t = t || {}, et = !0, ke.triggerHandler("__wf_destroy"), t.domready != null && (Xe = t.domready), _e.each(qe, pt), te.resize.off(), te.scroll.off(), te.redraw.off(), He = [], Je = [], We.state() === "pending" && wt()
        };
        Re(te.ready);
        wt();
        yt.exports = window.Webflow = te
    });
    var xt = de((Bn, Et) => {
        "use strict";
        var bt = Oe();
        bt.define("brand", Et.exports = function (t) {
            var u = {},
                l = document,
                x = t("html"),
                S = t("body"),
                b = ".w-webflow-badge",
                R = window.location,
                P = /PhantomJS/i.test(navigator.userAgent),
                O = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                B;
            u.ready = function () {
                var I = x.attr("data-wf-status"),
                    Q = x.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(Q) && R.hostname !== Q && (I = !0), I && !P && (B = B || U(), Y(), setTimeout(Y, 500), t(l).off(O, J).on(O, J))
            };

            function J() {
                var I = l.fullScreen || l.mozFullScreen || l.webkitIsFullScreen || l.msFullscreenElement || !!l.webkitFullscreenElement;
                t(B).attr("style", I ? "display: none !important;" : "")
            }

            function U() {
                return null;
            }

            function Y() {
                var I = S.children(b),
                    Q = I.length && I.get(0) === B,
                    V = bt.env("editor");
                if (Q) {
                    V && I.remove();
                    return
                }
                I.length && I.remove(), V || S.append(B)
            }
            return u
        })
    });
    var kt = de((Un, _t) => {
        "use strict";
        var Ne = Oe();
        Ne.define("links", _t.exports = function (t, u) {
            var l = {},
                x = t(window),
                S, b = Ne.env(),
                R = window.location,
                P = document.createElement("a"),
                O = "w--current",
                B = /index\.(html|php)$/,
                J = /\/$/,
                U, Y;
            l.ready = l.design = l.preview = I;

            function I() {
                S = b && Ne.env("design"), Y = Ne.env("slug") || R.pathname || "", Ne.scroll.off(V), U = [];
                for (var D = document.links, L = 0; L < D.length; ++L) Q(D[L]);
                U.length && (Ne.scroll.on(V), V())
            }

            function Q(D) {
                if (!D.getAttribute("hreflang")) {
                    var L = S && D.getAttribute("href-disabled") || D.getAttribute("href");
                    if (P.href = L, !(L.indexOf(":") >= 0)) {
                        var m = t(D);
                        if (P.hash.length > 1 && P.host + P.pathname === R.host + R.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(P.hash)) return;
                            var _ = t(P.hash);
                            _.length && U.push({
                                link: m,
                                sec: _,
                                active: !1
                            });
                            return
                        }
                        if (!(L === "#" || L === "")) {
                            var k = P.href === R.href || L === Y || B.test(L) && J.test(Y);
                            K(m, O, k)
                        }
                    }
                }
            }

            function V() {
                var D = x.scrollTop(),
                    L = x.height();
                u.each(U, function (m) {
                    if (!m.link.attr("hreflang")) {
                        var _ = m.link,
                            k = m.sec,
                            F = k.offset().top,
                            oe = k.outerHeight(),
                            le = L * .5,
                            ye = k.is(":visible") && F + oe - le >= D && F + le <= D + L;
                        m.active !== ye && (m.active = ye, K(_, O, ye))
                    }
                })
            }

            function K(D, L, m) {
                var _ = D.hasClass(L);
                m && _ || !m && !_ || (m ? D.addClass(L) : D.removeClass(L))
            }
            return l
        })
    });
    var At = de(($n, Ot) => {
        "use strict";
        var Ge = Oe();
        Ge.define("scroll", Ot.exports = function (t) {
            var u = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                l = window.location,
                x = Q() ? null : window.history,
                S = t(window),
                b = t(document),
                R = t(document.body),
                P = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (g) {
                    window.setTimeout(g, 15)
                },
                O = Ge.env("editor") ? ".w-editor-body" : "body",
                B = "header, " + O + " > .header, " + O + " > .w-nav:not([data-no-scroll])",
                J = 'a[href="#"]',
                U = 'a[href*="#"]:not(.w-tab-link):not(' + J + ")",
                Y = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                I = document.createElement("style");
            I.appendChild(document.createTextNode(Y));

            function Q() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var V = /^#[a-zA-Z0-9][\w:.-]*$/;

            function K(g) {
                return V.test(g.hash) && g.host + g.pathname === l.host + l.pathname
            }
            let D = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function L() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || D.matches
            }

            function m(g, f) {
                var d;
                switch (f) {
                    case "add":
                        d = g.attr("tabindex"), d ? g.attr("data-wf-tabindex-swap", d) : g.attr("tabindex", "-1");
                        break;
                    case "remove":
                        d = g.attr("data-wf-tabindex-swap"), d ? (g.attr("tabindex", d), g.removeAttr("data-wf-tabindex-swap")) : g.removeAttr("tabindex");
                        break
                }
                g.toggleClass("wf-force-outline-none", f === "add")
            }

            function _(g) {
                var f = g.currentTarget;
                if (!(Ge.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(f.className))) {
                    var d = K(f) ? f.hash : "";
                    if (d !== "") {
                        var E = t(d);
                        E.length && (g && (g.preventDefault(), g.stopPropagation()), k(d, g), window.setTimeout(function () {
                            F(E, function () {
                                m(E, "add"), E.get(0).focus({
                                    preventScroll: !0
                                }), m(E, "remove")
                            })
                        }, g ? 0 : 300))
                    }
                }
            }

            function k(g) {
                if (l.hash !== g && x && x.pushState && !(Ge.env.chrome && l.protocol === "file:")) {
                    var f = x.state && x.state.hash;
                    f !== g && x.pushState({
                        hash: g
                    }, "", g)
                }
            }

            function F(g, f) {
                var d = S.scrollTop(),
                    E = oe(g);
                if (d !== E) {
                    var y = le(g, d, E),
                        q = Date.now(),
                        W = function () {
                            var j = Date.now() - q;
                            window.scroll(0, ye(d, E, j, y)), j <= y ? P(W) : typeof f == "function" && f()
                        };
                    P(W)
                }
            }

            function oe(g) {
                var f = t(B),
                    d = f.css("position") === "fixed" ? f.outerHeight() : 0,
                    E = g.offset().top - d;
                if (g.data("scroll") === "mid") {
                    var y = S.height() - d,
                        q = g.outerHeight();
                    q < y && (E -= Math.round((y - q) / 2))
                }
                return E
            }

            function le(g, f, d) {
                if (L()) return 0;
                var E = 1;
                return R.add(g).each(function (y, q) {
                    var W = parseFloat(q.getAttribute("data-scroll-time"));
                    !isNaN(W) && W >= 0 && (E = W)
                }), (472.143 * Math.log(Math.abs(f - d) + 125) - 2e3) * E
            }

            function ye(g, f, d, E) {
                return d > E ? f : g + (f - g) * Le(d / E)
            }

            function Le(g) {
                return g < .5 ? 4 * g * g * g : (g - 1) * (2 * g - 2) * (2 * g - 2) + 1
            }

            function ve() {
                var {
                    WF_CLICK_EMPTY: g,
                    WF_CLICK_SCROLL: f
                } = u;
                b.on(f, U, _), b.on(g, J, function (d) {
                    d.preventDefault()
                }), document.head.insertBefore(I, document.head.firstChild)
            }
            return {
                ready: ve
            }
        })
    });
    var It = de((Kn, Tt) => {
        "use strict";
        var Lt = Oe();
        Lt.define("focus", Tt.exports = function () {
            var t = [],
                u = !1;

            function l(R) {
                u && (R.preventDefault(), R.stopPropagation(), R.stopImmediatePropagation(), t.unshift(R))
            }

            function x(R) {
                var P = R.target,
                    O = P.tagName;
                return /^a$/i.test(O) && P.href != null || /^(button|textarea)$/i.test(O) && P.disabled !== !0 || /^input$/i.test(O) && /^(button|reset|submit|radio|checkbox)$/i.test(P.type) && !P.disabled || !/^(button|input|textarea|select|a)$/i.test(O) && !Number.isNaN(Number.parseFloat(P.tabIndex)) || /^audio$/i.test(O) || /^video$/i.test(O) && P.controls === !0
            }

            function S(R) {
                x(R) && (u = !0, setTimeout(() => {
                    for (u = !1, R.target.focus(); t.length > 0;) {
                        var P = t.pop();
                        P.target.dispatchEvent(new MouseEvent(P.type, P))
                    }
                }, 0))
            }

            function b() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Lt.env.safari && (document.addEventListener("mousedown", S, !0), document.addEventListener("mouseup", l, !0), document.addEventListener("click", l, !0))
            }
            return {
                ready: b
            }
        })
    });
    var Rt = de((Xn, Ct) => {
        "use strict";
        var En = Oe();
        En.define("focus-visible", Ct.exports = function () {
            function t(l) {
                var x = !0,
                    S = !1,
                    b = null,
                    R = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function P(m) {
                    return !!(m && m !== document && m.nodeName !== "HTML" && m.nodeName !== "BODY" && "classList" in m && "contains" in m.classList)
                }

                function O(m) {
                    var _ = m.type,
                        k = m.tagName;
                    return !!(k === "INPUT" && R[_] && !m.readOnly || k === "TEXTAREA" && !m.readOnly || m.isContentEditable)
                }

                function B(m) {
                    m.getAttribute("data-wf-focus-visible") || m.setAttribute("data-wf-focus-visible", "true")
                }

                function J(m) {
                    m.getAttribute("data-wf-focus-visible") && m.removeAttribute("data-wf-focus-visible")
                }

                function U(m) {
                    m.metaKey || m.altKey || m.ctrlKey || (P(l.activeElement) && B(l.activeElement), x = !0)
                }

                function Y() {
                    x = !1
                }

                function I(m) {
                    P(m.target) && (x || O(m.target)) && B(m.target)
                }

                function Q(m) {
                    P(m.target) && m.target.hasAttribute("data-wf-focus-visible") && (S = !0, window.clearTimeout(b), b = window.setTimeout(function () {
                        S = !1
                    }, 100), J(m.target))
                }

                function V() {
                    document.visibilityState === "hidden" && (S && (x = !0), K())
                }

                function K() {
                    document.addEventListener("mousemove", L), document.addEventListener("mousedown", L), document.addEventListener("mouseup", L), document.addEventListener("pointermove", L), document.addEventListener("pointerdown", L), document.addEventListener("pointerup", L), document.addEventListener("touchmove", L), document.addEventListener("touchstart", L), document.addEventListener("touchend", L)
                }

                function D() {
                    document.removeEventListener("mousemove", L), document.removeEventListener("mousedown", L), document.removeEventListener("mouseup", L), document.removeEventListener("pointermove", L), document.removeEventListener("pointerdown", L), document.removeEventListener("pointerup", L), document.removeEventListener("touchmove", L), document.removeEventListener("touchstart", L), document.removeEventListener("touchend", L)
                }

                function L(m) {
                    m.target.nodeName && m.target.nodeName.toLowerCase() === "html" || (x = !1, D())
                }
                document.addEventListener("keydown", U, !0), document.addEventListener("mousedown", Y, !0), document.addEventListener("pointerdown", Y, !0), document.addEventListener("touchstart", Y, !0), document.addEventListener("visibilitychange", V, !0), K(), l.addEventListener("focus", I, !0), l.addEventListener("blur", Q, !0)
            }

            function u() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    t(document)
                }
            }
            return {
                ready: u
            }
        })
    });
    var Pt = de((Gn, St) => {
        "use strict";
        var xn = Oe();
        xn.define("touch", St.exports = function (t) {
            var u = {},
                l = window.getSelection;
            t.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, u.init = function (b) {
                return b = typeof b == "string" ? t(b).get(0) : b, b ? new x(b) : null
            };

            function x(b) {
                var R = !1,
                    P = !1,
                    O = Math.min(Math.round(window.innerWidth * .04), 40),
                    B, J;
                b.addEventListener("touchstart", U, !1), b.addEventListener("touchmove", Y, !1), b.addEventListener("touchend", I, !1), b.addEventListener("touchcancel", Q, !1), b.addEventListener("mousedown", U, !1), b.addEventListener("mousemove", Y, !1), b.addEventListener("mouseup", I, !1), b.addEventListener("mouseout", Q, !1);

                function U(K) {
                    var D = K.touches;
                    D && D.length > 1 || (R = !0, D ? (P = !0, B = D[0].clientX) : B = K.clientX, J = B)
                }

                function Y(K) {
                    if (R) {
                        if (P && K.type === "mousemove") {
                            K.preventDefault(), K.stopPropagation();
                            return
                        }
                        var D = K.touches,
                            L = D ? D[0].clientX : K.clientX,
                            m = L - J;
                        J = L, Math.abs(m) > O && l && String(l()) === "" && (S("swipe", K, {
                            direction: m > 0 ? "right" : "left"
                        }), Q())
                    }
                }

                function I(K) {
                    if (R && (R = !1, P && K.type === "mouseup")) {
                        K.preventDefault(), K.stopPropagation(), P = !1;
                        return
                    }
                }

                function Q() {
                    R = !1
                }

                function V() {
                    b.removeEventListener("touchstart", U, !1), b.removeEventListener("touchmove", Y, !1), b.removeEventListener("touchend", I, !1), b.removeEventListener("touchcancel", Q, !1), b.removeEventListener("mousedown", U, !1), b.removeEventListener("mousemove", Y, !1), b.removeEventListener("mouseup", I, !1), b.removeEventListener("mouseout", Q, !1), b = null
                }
                this.destroy = V
            }

            function S(b, R, P) {
                var O = t.Event(b, {
                    originalEvent: R
                });
                t(R.target).trigger(O, P)
            }
            return u.instance = u.init(document), u
        })
    });
    var Mt = de((Yn, Wt) => {
        "use strict";
        var nt = Oe();
        nt.define("edit", Wt.exports = function (t, u, l) {
            if (l = l || {}, (nt.env("test") || nt.env("frame")) && !l.fixture && !_n()) return {
                exit: 1
            };
            var x = {},
                S = t(window),
                b = t(document.documentElement),
                R = document.location,
                P = "hashchange",
                O, B = l.load || Y,
                J = !1;
            try {
                J = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            J ? B() : R.search ? (/[?&](edit)(?:[=&?]|$)/.test(R.search) || /\?edit$/.test(R.href)) && B() : S.on(P, U).triggerHandler(P);

            function U() {
                O || /\?edit/.test(R.hash) && B()
            }

            function Y() {
                O = !0, window.WebflowEditor = !0, S.off(P, U), L(function (_) {
                    t.ajax({
                        url: D("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: b.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: I(_)
                    })
                })
            }

            function I(_) {
                return function (k) {
                    if (!k) {
                        console.error("Could not load editor data");
                        return
                    }
                    k.thirdPartyCookiesSupported = _, Q(K(k.scriptPath), function () {
                        window.WebflowEditor(k)
                    })
                }
            }

            function Q(_, k) {
                t.ajax({
                    type: "GET",
                    url: _,
                    dataType: "script",
                    cache: !0
                }).then(k, V)
            }

            function V(_, k, F) {
                throw console.error("Could not load editor script: " + k), F
            }

            function K(_) {
                return _.indexOf("//") >= 0 ? _ : D("https://editor-api.webflow.com" + _)
            }

            function D(_) {
                return _.replace(/([^:])\/\//g, "$1/")
            }

            function L(_) {
                var k = window.document.createElement("iframe");
                k.src = "https://webflow.com/site/third-party-cookie-check.html", k.style.display = "none", k.sandbox = "allow-scripts allow-same-origin";
                var F = function (oe) {
                    oe.data === "WF_third_party_cookies_unsupported" ? (m(k, F), _(!1)) : oe.data === "WF_third_party_cookies_supported" && (m(k, F), _(!0))
                };
                k.onerror = function () {
                    m(k, F), _(!1)
                }, window.addEventListener("message", F, !1), window.document.body.appendChild(k)
            }

            function m(_, k) {
                window.removeEventListener("message", k, !1), _.remove()
            }
            return x
        });

        function _n() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Ht = de((Vn, qt) => {
        "use strict";
        var rt = window.jQuery,
            Ce = {},
            Ye = [],
            Dt = ".w-ix",
            Ve = {
                reset: function (t, u) {
                    u.__wf_intro = null
                },
                intro: function (t, u) {
                    u.__wf_intro || (u.__wf_intro = !0, rt(u).triggerHandler(Ce.types.INTRO))
                },
                outro: function (t, u) {
                    u.__wf_intro && (u.__wf_intro = null, rt(u).triggerHandler(Ce.types.OUTRO))
                }
            };
        Ce.triggers = {};
        Ce.types = {
            INTRO: "w-ix-intro" + Dt,
            OUTRO: "w-ix-outro" + Dt
        };
        Ce.init = function () {
            for (var t = Ye.length, u = 0; u < t; u++) {
                var l = Ye[u];
                l[0](0, l[1])
            }
            Ye = [], rt.extend(Ce.triggers, Ve)
        };
        Ce.async = function () {
            for (var t in Ve) {
                var u = Ve[t];
                Ve.hasOwnProperty(t) && (Ce.triggers[t] = function (l, x) {
                    Ye.push([u, x])
                })
            }
        };
        Ce.async();
        qt.exports = Ce
    });
    var ot = de((Zn, zt) => {
        "use strict";
        var it = Ht();

        function Nt(t, u) {
            var l = document.createEvent("CustomEvent");
            l.initCustomEvent(u, !0, !0, null), t.dispatchEvent(l)
        }
        var kn = window.jQuery,
            Ze = {},
            Ft = ".w-ix",
            On = {
                reset: function (t, u) {
                    it.triggers.reset(t, u)
                },
                intro: function (t, u) {
                    it.triggers.intro(t, u), Nt(u, "COMPONENT_ACTIVE")
                },
                outro: function (t, u) {
                    it.triggers.outro(t, u), Nt(u, "COMPONENT_INACTIVE")
                }
            };
        Ze.triggers = {};
        Ze.types = {
            INTRO: "w-ix-intro" + Ft,
            OUTRO: "w-ix-outro" + Ft
        };
        kn.extend(Ze.triggers, On);
        zt.exports = Ze
    });
    var Ut = de((Qn, Bt) => {
        "use strict";
        var Se = Oe(),
            An = ot(),
            he = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        Se.define("navbar", Bt.exports = function (t, u) {
            var l = {},
                x = t.tram,
                S = t(window),
                b = t(document),
                R = u.debounce,
                P, O, B, J, U = Se.env(),
                Y = '<div class="w-nav-overlay" data-wf-ignore />',
                I = ".w-nav",
                Q = "w--open",
                V = "w--nav-dropdown-open",
                K = "w--nav-dropdown-toggle-open",
                D = "w--nav-dropdown-list-open",
                L = "w--nav-link-open",
                m = An.triggers,
                _ = t();
            l.ready = l.design = l.preview = k, l.destroy = function () {
                _ = t(), F(), O && O.length && O.each(Le)
            };

            function k() {
                B = U && Se.env("design"), J = Se.env("editor"), P = t(document.body), O = b.find(I), O.length && (O.each(ye), F(), oe())
            }

            function F() {
                Se.resize.off(le)
            }

            function oe() {
                Se.resize.on(le)
            }

            function le() {
                O.each(M)
            }

            function ye(n, h) {
                var A = t(h),
                    w = t.data(h, I);
                w || (w = t.data(h, I, {
                    open: !1,
                    el: A,
                    config: {},
                    selectedIdx: -1
                })), w.menu = A.find(".w-nav-menu"), w.links = w.menu.find(".w-nav-link"), w.dropdowns = w.menu.find(".w-dropdown"), w.dropdownToggle = w.menu.find(".w-dropdown-toggle"), w.dropdownList = w.menu.find(".w-dropdown-list"), w.button = A.find(".w-nav-button"), w.container = A.find(".w-container"), w.overlayContainerId = "w-nav-overlay-" + n, w.outside = me(w);
                var ie = A.find(".w-nav-brand");
                ie && ie.attr("href") === "/" && ie.attr("aria-label") == null && ie.attr("aria-label", "home"), w.button.attr("style", "-webkit-user-select: text;"), w.button.attr("aria-label") == null && w.button.attr("aria-label", "menu"), w.button.attr("role", "button"), w.button.attr("tabindex", "0"), w.button.attr("aria-controls", w.overlayContainerId), w.button.attr("aria-haspopup", "menu"), w.button.attr("aria-expanded", "false"), w.el.off(I), w.button.off(I), w.menu.off(I), f(w), B ? (ve(w), w.el.on("setting" + I, d(w))) : (g(w), w.button.on("click" + I, j(w)), w.menu.on("click" + I, "a", pe(w)), w.button.on("keydown" + I, E(w)), w.el.on("keydown" + I, y(w))), M(n, h)
            }

            function Le(n, h) {
                var A = t.data(h, I);
                A && (ve(A), t.removeData(h, I))
            }

            function ve(n) {
                n.overlay && (G(n, !0), n.overlay.remove(), n.overlay = null)
            }

            function g(n) {
                n.overlay || (n.overlay = t(Y).appendTo(n.el), n.overlay.attr("id", n.overlayContainerId), n.parent = n.menu.parent(), G(n, !0))
            }

            function f(n) {
                var h = {},
                    A = n.config || {},
                    w = h.animation = n.el.attr("data-animation") || "default";
                h.animOver = /^over/.test(w), h.animDirect = /left$/.test(w) ? -1 : 1, A.animation !== w && n.open && u.defer(W, n), h.easing = n.el.attr("data-easing") || "ease", h.easing2 = n.el.attr("data-easing2") || "ease";
                var ie = n.el.attr("data-duration");
                h.duration = ie != null ? Number(ie) : 400, h.docHeight = n.el.attr("data-doc-height"), n.config = h
            }

            function d(n) {
                return function (h, A) {
                    A = A || {};
                    var w = S.width();
                    f(n), A.open === !0 && ne(n, !0), A.open === !1 && G(n, !0), n.open && u.defer(function () {
                        w !== S.width() && W(n)
                    })
                }
            }

            function E(n) {
                return function (h) {
                    switch (h.keyCode) {
                        case he.SPACE:
                        case he.ENTER:
                            return j(n)(), h.preventDefault(), h.stopPropagation();
                        case he.ESCAPE:
                            return G(n), h.preventDefault(), h.stopPropagation();
                        case he.ARROW_RIGHT:
                        case he.ARROW_DOWN:
                        case he.HOME:
                        case he.END:
                            return n.open ? (h.keyCode === he.END ? n.selectedIdx = n.links.length - 1 : n.selectedIdx = 0, q(n), h.preventDefault(), h.stopPropagation()) : (h.preventDefault(), h.stopPropagation())
                    }
                }
            }

            function y(n) {
                return function (h) {
                    if (n.open) switch (n.selectedIdx = n.links.index(document.activeElement), h.keyCode) {
                        case he.HOME:
                        case he.END:
                            return h.keyCode === he.END ? n.selectedIdx = n.links.length - 1 : n.selectedIdx = 0, q(n), h.preventDefault(), h.stopPropagation();
                        case he.ESCAPE:
                            return G(n), n.button.focus(), h.preventDefault(), h.stopPropagation();
                        case he.ARROW_LEFT:
                        case he.ARROW_UP:
                            return n.selectedIdx = Math.max(-1, n.selectedIdx - 1), q(n), h.preventDefault(), h.stopPropagation();
                        case he.ARROW_RIGHT:
                        case he.ARROW_DOWN:
                            return n.selectedIdx = Math.min(n.links.length - 1, n.selectedIdx + 1), q(n), h.preventDefault(), h.stopPropagation()
                    }
                }
            }

            function q(n) {
                if (n.links[n.selectedIdx]) {
                    var h = n.links[n.selectedIdx];
                    h.focus(), pe(h)
                }
            }

            function W(n) {
                n.open && (G(n, !0), ne(n, !0))
            }

            function j(n) {
                return R(function () {
                    n.open ? G(n) : ne(n)
                })
            }

            function pe(n) {
                return function (h) {
                    var A = t(this),
                        w = A.attr("href");
                    if (!Se.validClick(h.currentTarget)) {
                        h.preventDefault();
                        return
                    }
                    w && w.indexOf("#") === 0 && n.open && G(n)
                }
            }

            function me(n) {
                return n.outside && b.off("click" + I, n.outside),
                    function (h) {
                        var A = t(h.target);
                        J && A.closest(".w-editor-bem-EditorOverlay").length || ue(n, A)
                    }
            }
            var ue = R(function (n, h) {
                if (n.open) {
                    var A = h.closest(".w-nav-menu");
                    n.menu.is(A) || G(n)
                }
            });

            function M(n, h) {
                var A = t.data(h, I),
                    w = A.collapsed = A.button.css("display") !== "none";
                if (A.open && !w && !B && G(A, !0), A.container.length) {
                    var ie = H(A);
                    A.links.each(ie), A.dropdowns.each(ie)
                }
                A.open && fe(A)
            }
            var o = "max-width";

            function H(n) {
                var h = n.container.css(o);
                return h === "none" && (h = ""),
                    function (A, w) {
                        w = t(w), w.css(o, ""), w.css(o) === "none" && w.css(o, h)
                    }
            }

            function $(n, h) {
                h.setAttribute("data-nav-menu-open", "")
            }

            function v(n, h) {
                h.removeAttribute("data-nav-menu-open")
            }

            function ne(n, h) {
                if (n.open) return;
                n.open = !0, n.menu.each($), n.links.addClass(L), n.dropdowns.addClass(V), n.dropdownToggle.addClass(K), n.dropdownList.addClass(D), n.button.addClass(Q);
                var A = n.config,
                    w = A.animation;
                (w === "none" || !x.support.transform || A.duration <= 0) && (h = !0);
                var ie = fe(n),
                    Fe = n.menu.outerHeight(!0),
                    Pe = n.menu.outerWidth(!0),
                    e = n.el.height(),
                    r = n.el[0];
                if (M(0, r), m.intro(0, r), Se.redraw.up(), B || b.on("click" + I, n.outside), h) {
                    c();
                    return
                }
                var i = "transform " + A.duration + "ms " + A.easing;
                if (n.overlay && (_ = n.menu.prev(), n.overlay.show().append(n.menu)), A.animOver) {
                    x(n.menu).add(i).set({
                        x: A.animDirect * Pe,
                        height: ie
                    }).start({
                        x: 0
                    }).then(c), n.overlay && n.overlay.width(Pe);
                    return
                }
                var s = e + Fe;
                x(n.menu).add(i).set({
                    y: -s
                }).start({
                    y: 0
                }).then(c);

                function c() {
                    n.button.attr("aria-expanded", "true")
                }
            }

            function fe(n) {
                var h = n.config,
                    A = h.docHeight ? b.height() : P.height();
                return h.animOver ? n.menu.height(A) : n.el.css("position") !== "fixed" && (A -= n.el.outerHeight(!0)), n.overlay && n.overlay.height(A), A
            }

            function G(n, h) {
                if (!n.open) return;
                n.open = !1, n.button.removeClass(Q);
                var A = n.config;
                if ((A.animation === "none" || !x.support.transform || A.duration <= 0) && (h = !0), m.outro(0, n.el[0]), b.off("click" + I, n.outside), h) {
                    x(n.menu).stop(), r();
                    return
                }
                var w = "transform " + A.duration + "ms " + A.easing2,
                    ie = n.menu.outerHeight(!0),
                    Fe = n.menu.outerWidth(!0),
                    Pe = n.el.height();
                if (A.animOver) {
                    x(n.menu).add(w).start({
                        x: Fe * A.animDirect
                    }).then(r);
                    return
                }
                var e = Pe + ie;
                x(n.menu).add(w).start({
                    y: -e
                }).then(r);

                function r() {
                    n.menu.height(""), x(n.menu).set({
                        x: 0,
                        y: 0
                    }), n.menu.each(v), n.links.removeClass(L), n.dropdowns.removeClass(V), n.dropdownToggle.removeClass(K), n.dropdownList.removeClass(D), n.overlay && n.overlay.children().length && (_.length ? n.menu.insertAfter(_) : n.menu.prependTo(n.parent), n.overlay.attr("style", "").hide()), n.el.triggerHandler("w-close"), n.button.attr("aria-expanded", "false")
                }
            }
            return l
        })
    });
    var Xt = de((jn, Kt) => {
        "use strict";
        var Me = Oe(),
            Ln = ot(),
            Ae = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            $t = !0,
            Tn = /^#[a-zA-Z0-9\-_]+$/;
        Me.define("dropdown", Kt.exports = function (t, u) {
            var l = u.debounce,
                x = {},
                S = Me.env(),
                b = !1,
                R, P = Me.env.touch,
                O = ".w-dropdown",
                B = "w--open",
                J = Ln.triggers,
                U = 900,
                Y = "focusout" + O,
                I = "keydown" + O,
                Q = "mouseenter" + O,
                V = "mousemove" + O,
                K = "mouseleave" + O,
                D = (P ? "click" : "mouseup") + O,
                L = "w-close" + O,
                m = "setting" + O,
                _ = t(document),
                k;
            x.ready = F, x.design = function () {
                b && f(), b = !1, F()
            }, x.preview = function () {
                b = !0, F()
            };

            function F() {
                R = S && Me.env("design"), k = _.find(O), k.each(oe)
            }

            function oe(o, H) {
                var $ = t(H),
                    v = t.data(H, O);
                v || (v = t.data(H, O, {
                    open: !1,
                    el: $,
                    config: {},
                    selectedIdx: -1
                })), v.toggle = v.el.children(".w-dropdown-toggle"), v.list = v.el.children(".w-dropdown-list"), v.links = v.list.find("a:not(.w-dropdown .w-dropdown a)"), v.complete = y(v), v.mouseLeave = W(v), v.mouseUpOutside = E(v), v.mouseMoveOutside = j(v), le(v);
                var ne = v.toggle.attr("id"),
                    fe = v.list.attr("id");
                ne || (ne = "w-dropdown-toggle-" + o), fe || (fe = "w-dropdown-list-" + o), v.toggle.attr("id", ne), v.toggle.attr("aria-controls", fe), v.toggle.attr("aria-haspopup", "menu"), v.toggle.attr("aria-expanded", "false"), v.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), v.toggle.prop("tagName") !== "BUTTON" && (v.toggle.attr("role", "button"), v.toggle.attr("tabindex") || v.toggle.attr("tabindex", "0")), v.list.attr("id", fe), v.list.attr("aria-labelledby", ne), v.links.each(function (n, h) {
                    h.hasAttribute("tabindex") || h.setAttribute("tabindex", "0"), Tn.test(h.hash) && h.addEventListener("click", g.bind(null, v))
                }), v.el.off(O), v.toggle.off(O), v.nav && v.nav.off(O);
                var G = Le(v, $t);
                R && v.el.on(m, ye(v)), R || (S && (v.hovering = !1, g(v)), v.config.hover && v.toggle.on(Q, q(v)), v.el.on(L, G), v.el.on(I, pe(v)), v.el.on(Y, M(v)), v.toggle.on(D, G), v.toggle.on(I, ue(v)), v.nav = v.el.closest(".w-nav"), v.nav.on(L, G))
            }

            function le(o) {
                var H = Number(o.el.css("z-index"));
                o.manageZ = H === U || H === U + 1, o.config = {
                    hover: o.el.attr("data-hover") === "true" && !P,
                    delay: o.el.attr("data-delay")
                }
            }

            function ye(o) {
                return function (H, $) {
                    $ = $ || {}, le(o), $.open === !0 && ve(o), $.open === !1 && g(o, {
                        immediate: !0
                    })
                }
            }

            function Le(o, H) {
                return l(function ($) {
                    if (o.open || $ && $.type === "w-close") return g(o, {
                        forceClose: H
                    });
                    ve(o)
                })
            }

            function ve(o) {
                if (!o.open) {
                    d(o), o.open = !0, o.list.addClass(B), o.toggle.addClass(B), o.toggle.attr("aria-expanded", "true"), J.intro(0, o.el[0]), Me.redraw.up(), o.manageZ && o.el.css("z-index", U + 1);
                    var H = Me.env("editor");
                    R || _.on(D, o.mouseUpOutside), o.hovering && !H && o.el.on(K, o.mouseLeave), o.hovering && H && _.on(V, o.mouseMoveOutside), window.clearTimeout(o.delayId)
                }
            }

            function g(o, {
                immediate: H,
                forceClose: $
            } = {}) {
                if (o.open && !(o.config.hover && o.hovering && !$)) {
                    o.toggle.attr("aria-expanded", "false"), o.open = !1;
                    var v = o.config;
                    if (J.outro(0, o.el[0]), _.off(D, o.mouseUpOutside), _.off(V, o.mouseMoveOutside), o.el.off(K, o.mouseLeave), window.clearTimeout(o.delayId), !v.delay || H) return o.complete();
                    o.delayId = window.setTimeout(o.complete, v.delay)
                }
            }

            function f() {
                _.find(O).each(function (o, H) {
                    t(H).triggerHandler(L)
                })
            }

            function d(o) {
                var H = o.el[0];
                k.each(function ($, v) {
                    var ne = t(v);
                    ne.is(H) || ne.has(H).length || ne.triggerHandler(L)
                })
            }

            function E(o) {
                return o.mouseUpOutside && _.off(D, o.mouseUpOutside), l(function (H) {
                    if (o.open) {
                        var $ = t(H.target);
                        if (!$.closest(".w-dropdown-toggle").length) {
                            var v = t.inArray(o.el[0], $.parents(O)) === -1,
                                ne = Me.env("editor");
                            if (v) {
                                if (ne) {
                                    var fe = $.parents().length === 1 && $.parents("svg").length === 1,
                                        G = $.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (fe || G) return
                                }
                                g(o)
                            }
                        }
                    }
                })
            }

            function y(o) {
                return function () {
                    o.list.removeClass(B), o.toggle.removeClass(B), o.manageZ && o.el.css("z-index", "")
                }
            }

            function q(o) {
                return function () {
                    o.hovering = !0, ve(o)
                }
            }

            function W(o) {
                return function () {
                    o.hovering = !1, o.links.is(":focus") || g(o)
                }
            }

            function j(o) {
                return l(function (H) {
                    if (o.open) {
                        var $ = t(H.target),
                            v = t.inArray(o.el[0], $.parents(O)) === -1;
                        if (v) {
                            var ne = $.parents(".w-editor-bem-EditorHoverControls").length,
                                fe = $.parents(".w-editor-bem-RTToolbar").length,
                                G = t(".w-editor-bem-EditorOverlay"),
                                n = G.find(".w-editor-edit-outline").length || G.find(".w-editor-bem-RTToolbar").length;
                            if (ne || fe || n) return;
                            o.hovering = !1, g(o)
                        }
                    }
                })
            }

            function pe(o) {
                return function (H) {
                    if (!(R || !o.open)) switch (o.selectedIdx = o.links.index(document.activeElement), H.keyCode) {
                        case Ae.HOME:
                            return o.open ? (o.selectedIdx = 0, me(o), H.preventDefault()) : void 0;
                        case Ae.END:
                            return o.open ? (o.selectedIdx = o.links.length - 1, me(o), H.preventDefault()) : void 0;
                        case Ae.ESCAPE:
                            return g(o), o.toggle.focus(), H.stopPropagation();
                        case Ae.ARROW_RIGHT:
                        case Ae.ARROW_DOWN:
                            return o.selectedIdx = Math.min(o.links.length - 1, o.selectedIdx + 1), me(o), H.preventDefault();
                        case Ae.ARROW_LEFT:
                        case Ae.ARROW_UP:
                            return o.selectedIdx = Math.max(-1, o.selectedIdx - 1), me(o), H.preventDefault()
                    }
                }
            }

            function me(o) {
                o.links[o.selectedIdx] && o.links[o.selectedIdx].focus()
            }

            function ue(o) {
                var H = Le(o, $t);
                return function ($) {
                    if (!R) {
                        if (!o.open) switch ($.keyCode) {
                            case Ae.ARROW_UP:
                            case Ae.ARROW_DOWN:
                                return $.stopPropagation()
                        }
                        switch ($.keyCode) {
                            case Ae.SPACE:
                            case Ae.ENTER:
                                return H(), $.stopPropagation(), $.preventDefault()
                        }
                    }
                }
            }

            function M(o) {
                return l(function (H) {
                    var {
                        relatedTarget: $,
                        target: v
                    } = H, ne = o.el[0], fe = ne.contains($) || ne.contains(v);
                    return fe || g(o), H.stopPropagation()
                })
            }
            return x
        })
    });
    var Qt = de(at => {
        "use strict";
        Object.defineProperty(at, "__esModule", {
            value: !0
        });

        function In(t, u) {
            for (var l in u) Object.defineProperty(t, l, {
                enumerable: !0,
                get: u[l]
            })
        }
        In(at, {
            createInstance: function () {
                return Yt
            },
            destroy: function () {
                return Wn
            },
            destroyInstance: function () {
                return Vt
            },
            getInstance: function () {
                return Sn
            },
            init: function () {
                return Zt
            },
            ready: function () {
                return Mn
            },
            setLoadHandler: function () {
                return Pn
            }
        });
        var st;
        async function Cn() {
            let {
                Application: t
            } = await import("https://unpkg.com/@splinetool/runtime/build/runtime.js");
            st = t
        }
        var Ue = new Map,
            Be = new Map,
            Rn = new Event("w-spline-load"),
            ut = class {
                spline;
                container;
                destroy() {
                    this.container && (Ue.delete(this.container), Be.delete(this.container)), this.spline ? this.spline.destroy() : this.container && this.container.remove()
                }
                async load(u, l) {
                    st || await Cn();
                    let x = u.querySelector("canvas"),
                        S = new st(x);
                    await S.load(l), Ue.set(u, this), this.container = u, this.spline = S, u.dispatchEvent(Rn), Be.has(u) && (Be.get(u)(S), Be.delete(u))
                }
            },
            Gt = () => Array.from(document.querySelectorAll('[data-animation-type="spline"]')),
            Yt = async (t, u) => {
                let l = Ue.get(t);
                return l == null && (l = new ut), await l.load(t, u), l
            }, Vt = t => {
                Ue.get(t) ? Ue.get(t).destroy() : Be.set(t, t => t.destroy())
            }, Sn = t => Ue.get(t), Pn = (t, u) => {
                Be.set(t, u)
            }, Zt = () => {
                Gt().forEach(t => {
                    let u = t.getAttribute("data-spline-url");
                    u && Yt(t, u)
                })
            }, Wn = () => {
                Gt().forEach(Vt)
            }, Mn = Zt
    });
    var Jt = de((er, jt) => {
        "use strict";
        var Dn = Oe(),
            De = Qt();
        Dn.define("spline", jt.exports = function () {
            return {
                createInstance: De.createInstance,
                destroyInstance: De.destroyInstance,
                getInstance: De.getInstance,
                setLoadHandler: De.setLoadHandler,
                init: De.init,
                destroy: De.destroy,
                ready: De.ready
            }
        })
    });
    xt();
    kt();
    At();
    It();
    Rt();
    Pt();
    Mt();
    Ut();
    Xt();
    Jt();
})();
