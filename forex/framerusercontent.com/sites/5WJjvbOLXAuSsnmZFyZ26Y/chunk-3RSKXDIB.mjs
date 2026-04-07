import { a as Wn, b as Wg, c as eo, d as Ug, e as Gg, f as qg, g as dt, h as T, i as fe, j as Fn, k as tf, l as Nt } from "./chunk-HZL4YIMB.mjs";

 import { a as ef, b as Me, c as F } from "./chunk-XNQNUANK.mjs";

 var Ct = {};

 ef(Ct, { Children: () => Jt, Component: () => ye, Fragment: () => pn, Profiler: () => jE, PureComponent: () => HE, StrictMode: () => WE, Suspense: () => vi, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => UE, cloneElement: () => dr, createContext: () => pe, createElement: () => no, createFactory: () => GE, createRef: () => iv, default: () => S, forwardRef: () => xe, isValidElement: () => ht, lazy: () => lf, memo: () => rl, startTransition: () => Ze, unstable_act: () => qE, useCallback: () => $, useContext: () => L, useDebugValue: () => XE, useDeferredValue: () => YE, useEffect: () => V, useId: () => hr, useImperativeHandle: () => KE, useInsertionEffect: () => et, useLayoutEffect: () => ze, useMemo: () => q, useReducer: () => QE, useRef: () => _, useState: () => Se, useSyncExternalStore: () => ZE, useTransition: () => JE, version: () => eF });

 var S = {}, gs = Symbol.for("react.element"), EE = Symbol.for("react.portal"), FE = Symbol.for("react.fragment"), PE = Symbol.for("react.strict_mode"), IE = Symbol.for("react.profiler"), _E = Symbol.for("react.provider"), ME = Symbol.for("react.context"), OE = Symbol.for("react.forward_ref"), LE = Symbol.for("react.suspense"), VE = Symbol.for("react.memo"), AE = Symbol.for("react.lazy"), Xg = Symbol.iterator;

 function DE(e) { return e === null || typeof e != "object" ? null : (e = Xg && e[Xg] || e["@@iterator"], typeof e == "function" ? e : null) } var Qg = { isMounted: function () { return !1 }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, Zg = Object.assign, Jg = {};

 function to(e, t, n) { this.props = e, this.context = t, this.refs = Jg, this.updater = n || Qg } to.prototype.isReactComponent = {};

 to.prototype.setState = function (e, t) { if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");

 this.updater.enqueueSetState(this, e, t, "setState") };

 to.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") };

 function ev() { } ev.prototype = to.prototype;

 function rf(e, t, n) { this.props = e, this.context = t, this.refs = Jg, this.updater = n || Qg } var of = rf.prototype = new ev;

 of.constructor = rf;

 Zg(of, to.prototype);

 of.isPureReactComponent = !0;

 var Yg = Array.isArray, tv = Object.prototype.hasOwnProperty, sf = { current: null }, nv = { key: !0, ref: !0, __self: !0, __source: !0 };

 function rv(e, t, n) { var r, i = {}, o = null, s = null;

 if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) tv.call(t, r) && !nv.hasOwnProperty(r) && (i[r] = t[r]);

 var a = arguments.length - 2;

 if (a === 1) i.children = n;

 else if (1 < a) { for (var l = Array(a), c = 0;

 c < a;

 c++)l[c] = arguments[c + 2];

 i.children = l } if (e && e.defaultProps) for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);

 return { $$typeof: gs, type: e, key: o, ref: s, props: i, _owner: sf.current } } function zE(e, t) { return { $$typeof: gs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner } } function af(e) { return typeof e == "object" && e !== null && e.$$typeof === gs } function BE(e) { var t = { "=": "=0", ":": "=2" };

 return "$" + e.replace(/[=:]/g, function (n) { return t[n] }) } var Kg = /\/+/g;

 function nf(e, t) { return typeof e == "object" && e !== null && e.key != null ? BE("" + e.key) : t.toString(36) } function tl(e, t, n, r, i) { var o = typeof e;

 o !== "undefined" && o !== "boolean" || (e = null);

 var s = !1;

 if (e === null) s = !0;

 else switch (o) { case "string": case "number": s = !0;

 break;

 case "object": switch (e.$$typeof) { case gs: case EE: s = !0 } }if (s) return s = e, i = i(s), e = r === "" ? "." + nf(s, 0) : r, Yg(i) ? (n = "", e != null && (n = e.replace(Kg, "$&/") + "/"), tl(i, t, n, "", function (c) { return c })) : i != null && (af(i) && (i = zE(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Kg, "$&/") + "/") + e)), t.push(i)), 1;

 if (s = 0, r = r === "" ? "." : r + ":", Yg(e)) for (var a = 0;

 a < e.length;

 a++) { o = e[a];

 var l = r + nf(o, a);

 s += tl(o, t, n, l, i) } else if (l = DE(e), typeof l == "function") for (e = l.call(e), a = 0;

 !(o = e.next()).done;

)o = o.value, l = r + nf(o, a++), s += tl(o, t, n, l, i);

 else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");

 return s } function el(e, t, n) { if (e == null) return e;

 var r = [], i = 0;

 return tl(e, r, "", "", function (o) { return t.call(n, o, i++) }), r } function $E(e) { if (e._status === -1) { var t = e._result;

 t = t(), t.then(function (n) { e._status !== 0 && e._status !== -1 || (e._status = 1, e._result = n) }, function (n) { e._status !== 0 && e._status !== -1 || (e._status = 2, e._result = n) }), e._status === -1 && (e._status = 0, e._result = t) } if (e._status === 1) return e._result.default;

 throw e._result } var Mt = { current: null }, nl = { transition: null }, NE = { ReactCurrentDispatcher: Mt, ReactCurrentBatchConfig: nl, ReactCurrentOwner: sf };

 S.Children = { map: el, forEach: function (e, t, n) { el(e, function () { t.apply(this, arguments) }, n) }, count: function (e) { var t = 0;

 return el(e, function () { t++ }), t }, toArray: function (e) { return el(e, function (t) { return t }) || [] }, only: function (e) { if (!af(e)) throw Error("React.Children.only expected to receive a single React element child.");

 return e } };

 S.Component = to;

 S.Fragment = FE;

 S.Profiler = IE;

 S.PureComponent = rf;

 S.StrictMode = PE;

 S.Suspense = LE;

 S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = NE;

 S.cloneElement = function (e, t, n) { if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");

 var r = Zg({}, e.props), i = e.key, o = e.ref, s = e._owner;

 if (t != null) { if (t.ref !== void 0 && (o = t.ref, s = sf.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;

 for (l in t) tv.call(t, l) && !nv.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]) } var l = arguments.length - 2;

 if (l === 1) r.children = n;

 else if (1 < l) { a = Array(l);

 for (var c = 0;

 c < l;

 c++)a[c] = arguments[c + 2];

 r.children = a } return { $$typeof: gs, type: e.type, key: i, ref: o, props: r, _owner: s } };

 S.createContext = function (e) { return e = { $$typeof: ME, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: _E, _context: e }, e.Consumer = e };

 S.createElement = rv;

 S.createFactory = function (e) { var t = rv.bind(null, e);

 return t.type = e, t };

 S.createRef = function () { return { current: null } };

 S.forwardRef = function (e) { return { $$typeof: OE, render: e } };

 S.isValidElement = af;

 S.lazy = function (e) { return { $$typeof: AE, _payload: { _status: -1, _result: e }, _init: $E } };

 S.memo = function (e, t) { return { $$typeof: VE, type: e, compare: t === void 0 ? null : t } };

 S.startTransition = function (e) { var t = nl.transition;

 nl.transition = {};

 try { e() } finally { nl.transition = t } };

 S.unstable_act = function () { throw Error("act(...) is not supported in production builds of React.") };

 S.useCallback = function (e, t) { return Mt.current.useCallback(e, t) };

 S.useContext = function (e) { return Mt.current.useContext(e) };

 S.useDebugValue = function () { };

 S.useDeferredValue = function (e) { return Mt.current.useDeferredValue(e) };

 S.useEffect = function (e, t) { return Mt.current.useEffect(e, t) };

 S.useId = function () { return Mt.current.useId() };

 S.useImperativeHandle = function (e, t, n) { return Mt.current.useImperativeHandle(e, t, n) };

 S.useInsertionEffect = function (e, t) { return Mt.current.useInsertionEffect(e, t) };

 S.useLayoutEffect = function (e, t) { return Mt.current.useLayoutEffect(e, t) };

 S.useMemo = function (e, t) { return Mt.current.useMemo(e, t) };

 S.useReducer = function (e, t, n) { return Mt.current.useReducer(e, t, n) };

 S.useRef = function (e) { return Mt.current.useRef(e) };

 S.useState = function (e) { return Mt.current.useState(e) };

 S.useSyncExternalStore = function (e, t, n) { return Mt.current.useSyncExternalStore(e, t, n) };

 S.useTransition = function () { return Mt.current.useTransition() };

 S.version = "18.2.0";

 var Jt = S.Children, ye = S.Component, pn = S.Fragment, jE = S.Profiler, HE = S.PureComponent, WE = S.StrictMode, vi = S.Suspense, UE = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dr = S.cloneElement, pe = S.createContext, no = S.createElement, GE = S.createFactory, iv = S.createRef, xe = S.forwardRef, ht = S.isValidElement, lf = S.lazy, rl = S.memo, Ze = S.startTransition, qE = S.unstable_act, $ = S.useCallback, L = S.useContext, XE = S.useDebugValue, YE = S.useDeferredValue, V = S.useEffect, hr = S.useId, KE = S.useImperativeHandle, et = S.useInsertionEffect, ze = S.useLayoutEffect, q = S.useMemo, QE = S.useReducer, _ = S.useRef, Se = S.useState, ZE = S.useSyncExternalStore, JE = S.useTransition, eF = S.version;

 var tF = "default" in Ct ? S : Ct, ro = {}, nF = tF, rF = Symbol.for("react.element"), iF = Symbol.for("react.fragment"), oF = Object.prototype.hasOwnProperty, sF = nF.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, aF = { key: !0, ref: !0, __self: !0, __source: !0 };

 function ov(e, t, n) { var r, i = {}, o = null, s = null;

 n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);

 for (r in t) oF.call(t, r) && !aF.hasOwnProperty(r) && (i[r] = t[r]);

 if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);

 return { $$typeof: rF, type: e, key: o, ref: s, props: i, _owner: sF.current } } ro.Fragment = iF;

 ro.jsx = ov;

 ro.jsxs = ov;

 var rt = ro.Fragment, k = ro.jsx, de = ro.jsxs;

 var lF = Wn({ "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(e) { "use strict";

 Object.defineProperty(e, "__esModule", { value: !0 });

 function t(n) { var r = {};

 return function (i) { return r[i] === void 0 && (r[i] = n(i)), r[i] } } e.default = t } }), cF = Wn({ "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(e) { "use strict";

 Object.defineProperty(e, "__esModule", { value: !0 });

 function t(o) { return o && typeof o == "object" && "default" in o ? o.default : o } var n = t(lF()), r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, i = n(function (o) { return r.test(o) || o.charCodeAt(0) === 111 && o.charCodeAt(1) === 110 && o.charCodeAt(2) < 91 });

 e.default = i } }), bl = { skipAnimations: !1, useManualTiming: !1 }, yt = e => e;

 function uF(e) { let t = new Set, n = new Set, r = !1, i = !1, o = new WeakSet, s = { delta: 0, timestamp: 0, isProcessing: !1 };

 function a(c) { o.has(c) && (l.schedule(c), e()), c(s) } let l = { schedule: (c, u = !1, f = !1) => { let h = f && r ? t : n;

 return u && o.add(c), h.has(c) || h.add(c), c }, cancel: c => { n.delete(c), o.delete(c) }, process: c => { if (s = c, r) { i = !0;

 return } r = !0, [t, n] = [n, t], n.clear(), t.forEach(a), r = !1, i && (i = !1, l.process(c)) } };

 return l } var bs = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"], fF = 40;

 function Iy(e, t) { let n = !1, r = !0, i = { delta: 0, timestamp: 0, isProcessing: !1 }, o = () => n = !0, s = bs.reduce((g, m) => (g[m] = uF(o), g), {}), { read: a, resolveKeyframes: l, update: c, preRender: u, render: f, postRender: d } = s, h = () => { let g = bl.useManualTiming ? i.timestamp : performance.now();

 n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, fF), 1), i.timestamp = g, i.isProcessing = !0, a.process(i), l.process(i), c.process(i), u.process(i), f.process(i), d.process(i), i.isProcessing = !1, n && t && (r = !1, e(h)) }, p = () => { n = !0, r = !0, i.isProcessing || e(h) };

 return { schedule: bs.reduce((g, m) => { let y = s[m];

 return g[m] = (x, C = !1, w = !1) => (n || p(), y.schedule(x, C, w)), g }, {}), cancel: g => { for (let m = 0;

 m < bs.length;

 m++)s[bs[m]].cancel(g) }, state: i, steps: s } } var { schedule: Q, cancel: Tt, state: Xe, steps: al } = Iy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : yt, !0), _y = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, dF = 1e-7, hF = 12;

 function pF(e, t, n, r, i) { let o, s, a = 0;

 do s = t + (n - t) / 2, o = _y(s, r, i) - e, o > 0 ? n = s : t = s;

 while (Math.abs(o) > dF && ++a < hF);

 return s } function ho(e, t, n, r) { if (e === t && n === r) return yt;

 let i = o => pF(o, 0, 1, e, n);

 return o => o === 0 || o === 1 ? o : _y(i(o), t, r) } var Hf = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Wf = e => t => 1 - e(1 - t), Uf = ho(.33, 1.53, .69, .99), xl = Wf(Uf), Gf = Hf(xl), qf = e => (e *= 2) < 1 ? .5 * xl(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))), Sl = e => 1 - Math.sin(Math.acos(e)), Xf = Wf(Sl), Yf = Hf(Sl), po = yt, en = yt, mr = (e, t, n) => n > t ? t : n < e ? e : n, Os = e => ({ test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1, parse: parseFloat, transform: t => `${t}${e}` }), Vr = Os("deg"), Un = Os("%"), J = Os("px"), mF = Os("vh"), gF = Os("vw"), sv = { ...Un, parse: e => Un.parse(e) / 100, transform: e => Un.transform(e * 100) }, mo = { test: e => typeof e == "number", parse: parseFloat, transform: e => e }, Es = { ...mo, transform: e => mr(0, 1, e) }, il = { ...mo, default: 1 }, ws = e => Math.round(e * 1e5) / 1e5, Kf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

 function vF(e) { return e == null } var yF = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Qf = (e, t) => n => !!(typeof n == "string" && yF.test(n) && n.startsWith(e) || t && !vF(n) && Object.prototype.hasOwnProperty.call(n, t)), My = (e, t, n) => r => { if (typeof r != "string") return r;

 let [i, o, s, a] = r.match(Kf);

 return { [e]: parseFloat(i), [t]: parseFloat(o), [n]: parseFloat(s), alpha: a !== void 0 ? parseFloat(a) : 1 } }, bF = e => mr(0, 255, e), cf = { ...mo, transform: e => Math.round(bF(e)) }, Si = { test: Qf("rgb", "red"), parse: My("red", "green", "blue"), transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + cf.transform(e) + ", " + cf.transform(t) + ", " + cf.transform(n) + ", " + ws(Es.transform(r)) + ")" };

 function xF(e) { let t = "", n = "", r = "", i = "";

 return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: i ? parseInt(i, 16) / 255 : 1 } } var wf = { test: Qf("#"), parse: xF, transform: Si.transform }, io = { test: Qf("hsl", "hue"), parse: My("hue", "saturation", "lightness"), transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Un.transform(ws(t)) + ", " + Un.transform(ws(n)) + ", " + ws(Es.transform(r)) + ")" }, vt = { test: e => Si.test(e) || wf.test(e) || io.test(e), parse: e => Si.test(e) ? Si.parse(e) : io.test(e) ? io.parse(e) : wf.parse(e), transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Si.transform(e) : io.transform(e) }, SF = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

 function wF(e) { var t, n;

 return isNaN(e) && typeof e == "string" && (((t = e.match(Kf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(SF)) === null || n === void 0 ? void 0 : n.length) || 0) > 0 } var Oy = "number", Ly = "color", kF = "var", CF = "var(", av = "${}", RF = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

 function Fs(e) { let t = e.toString(), n = [], r = { color: [], number: [], var: [] }, i = [], o = 0, a = t.replace(RF, l => (vt.test(l) ? (r.color.push(o), i.push(Ly), n.push(vt.parse(l))) : l.startsWith(CF) ? (r.var.push(o), i.push(kF), n.push(l)) : (r.number.push(o), i.push(Oy), n.push(parseFloat(l))), ++o, av)).split(av);

 return { values: n, split: a, indexes: r, types: i } } function Vy(e) { return Fs(e).values } function Ay(e) { let { split: t, types: n } = Fs(e), r = t.length;

 return i => { let o = "";

 for (let s = 0;

 s < r;

 s++)if (o += t[s], i[s] !== void 0) { let a = n[s];

 a === Oy ? o += ws(i[s]) : a === Ly ? o += vt.transform(i[s]) : o += i[s] } return o } } var TF = e => typeof e == "number" ? 0 : e;

 function EF(e) { let t = Vy(e);

 return Ay(e)(t.map(TF)) } var gr = { test: wF, parse: Vy, createTransformer: Ay, getAnimatableNone: EF }, Pn = e => e * 1e3, Gn = e => e / 1e3, uf = .001, FF = .01, lv = 10, PF = .05, IF = 1;

 function Dy({ duration: e = 800, bounce: t = .25, velocity: n = 0, mass: r = 1 }) { let i, o;

 po(e <= Pn(lv), "Spring duration must be 10 seconds or less");

 let s = 1 - t;

 s = mr(PF, IF, s), e = mr(FF, lv, Gn(e)), s < 1 ? (i = c => { let u = c * s, f = u * e, d = u - n, h = kf(c, s), p = Math.exp(-f);

 return uf - d / h * p }, o = c => { let f = c * s * e, d = f * n + n, h = Math.pow(s, 2) * Math.pow(c, 2) * e, p = Math.exp(-f), v = kf(Math.pow(c, 2), s);

 return (-i(c) + uf > 0 ? -1 : 1) * ((d - h) * p) / v }) : (i = c => { let u = Math.exp(-c * e), f = (c - n) * e + 1;

 return -uf + u * f }, o = c => { let u = Math.exp(-c * e), f = (n - c) * (e * e);

 return u * f });

 let a = 5 / e, l = MF(i, o, a);

 if (e = Pn(e), isNaN(l)) return { stiffness: 100, damping: 10, duration: e };

 { let c = Math.pow(l, 2) * r;

 return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e } } } var _F = 12;

 function MF(e, t, n) { let r = n;

 for (let i = 1;

 i < _F;

 i++)r = r - e(r) / t(r);

 return r } function kf(e, t) { return e * Math.sqrt(1 - t * t) } function Zf(e, t) { return t ? e * (1e3 / t) : 0 } var OF = 5;

 function zy(e, t, n) { let r = Math.max(t - OF, 0);

 return Zf(n - e(r), t - r) } var LF = ["duration", "bounce"], VF = ["stiffness", "damping", "mass"];

 function cv(e, t) { return t.some(n => e[n] !== void 0) } function AF(e) { let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };

 if (!cv(e, VF) && cv(e, LF)) { let n = Dy(e);

 t = { ...t, ...n, mass: 1 }, t.isResolvedFromDuration = !0 } return t } function Ls({ keyframes: e, restDelta: t, restSpeed: n, ...r }) { let i = e[0], o = e[e.length - 1], s = { done: !1, value: i }, { stiffness: a, damping: l, mass: c, duration: u, velocity: f, isResolvedFromDuration: d } = AF({ ...r, velocity: -Gn(r.velocity || 0) }), h = f || 0, p = l / (2 * Math.sqrt(a * c)), v = o - i, b = Gn(Math.sqrt(a / c)), g = Math.abs(v) < 5;

 n || (n = g ? .01 : 2), t || (t = g ? .005 : .5);

 let m;

 if (p < 1) { let y = kf(b, p);

 m = x => { let C = Math.exp(-p * b * x);

 return o - C * ((h + p * b * v) / y * Math.sin(y * x) + v * Math.cos(y * x)) } } else if (p === 1) m = y => o - Math.exp(-b * y) * (v + (h + b * v) * y);

 else { let y = b * Math.sqrt(p * p - 1);

 m = x => { let C = Math.exp(-p * b * x), w = Math.min(y * x, 300);

 return o - C * ((h + p * b * v) * Math.sinh(w) + y * v * Math.cosh(w)) / y } } return { calculatedDuration: d && u || null, next: y => { let x = m(y);

 if (d) s.done = y >= u;

 else { let C = 0;

 p < 1 && (C = y === 0 ? Pn(h) : zy(m, y, x));

 let w = Math.abs(C) <= n, R = Math.abs(o - x) <= t;

 s.done = w && R } return s.value = s.done ? o : x, s } } } function Cf({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: c = .5, restSpeed: u }) { let f = e[0], d = { done: !1, value: f }, h = E => a !== void 0 && E < a || l !== void 0 && E > l, p = E => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l, v = n * t, b = f + v, g = s === void 0 ? b : s(b);

 g !== b && (v = g - f);

 let m = E => -v * Math.exp(-E / r), y = E => g + m(E), x = E => { let I = m(E), P = y(E);

 d.done = Math.abs(I) <= c, d.value = d.done ? g : P }, C, w, R = E => { h(d.value) && (C = E, w = Ls({ keyframes: [d.value, p(d.value)], velocity: zy(y, E, d.value), damping: i, stiffness: o, restDelta: c, restSpeed: u })) };

 return R(0), { calculatedDuration: null, next: E => { let I = !1;

 return !w && C === void 0 && (I = !0, x(E), R(E)), C !== void 0 && E >= C ? w.next(E - C) : (!I && x(E), d) } } } var By = ho(.42, 0, 1, 1), $y = ho(0, 0, .58, 1), Jf = ho(.42, 0, .58, 1), DF = (e, t) => n => t(e(n)), qn = (...e) => e.reduce(DF), vr = (e, t, n) => { let r = t - e;

 return r === 0 ? 1 : (n - e) / r }, Oe = (e, t, n) => e + (t - e) * n;

 function ff(e, t, n) { return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e } function zF({ hue: e, saturation: t, lightness: n, alpha: r }) { e /= 360, t /= 100, n /= 100;

 let i = 0, o = 0, s = 0;

 if (!t) i = o = s = n;

 else { let a = n < .5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;

 i = ff(l, a, e + 1 / 3), o = ff(l, a, e), s = ff(l, a, e - 1 / 3) } return { red: Math.round(i * 255), green: Math.round(o * 255), blue: Math.round(s * 255), alpha: r } } function dl(e, t) { return n => n > 0 ? t : e } var df = (e, t, n) => { let r = e * e, i = n * (t * t - r) + r;

 return i < 0 ? 0 : Math.sqrt(i) }, BF = [wf, Si, io], $F = e => BF.find(t => t.test(e));

 function uv(e) { let t = $F(e);

 if (po(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t) return !1;

 let n = t.parse(e);

 return t === io && (n = zF(n)), n } var fv = (e, t) => { let n = uv(e), r = uv(t);

 if (!n || !r) return dl(e, t);

 let i = { ...n };

 return o => (i.red = df(n.red, r.red, o), i.green = df(n.green, r.green, o), i.blue = df(n.blue, r.blue, o), i.alpha = Oe(n.alpha, r.alpha, o), Si.transform(i)) }, Ny = e => t => typeof t == "string" && t.startsWith(e), jy = Ny("--"), NF = Ny("var(--"), ed = e => NF(e) ? jF.test(e.split("/*")[0].trim()) : !1, jF = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Rf = new Set(["none", "hidden"]);

 function HF(e, t) { return Rf.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e } function WF(e, t) { return n => Oe(e, t, n) } function td(e) { return typeof e == "number" ? WF : typeof e == "string" ? ed(e) ? dl : vt.test(e) ? fv : qF : Array.isArray(e) ? Hy : typeof e == "object" ? vt.test(e) ? fv : UF : dl } function Hy(e, t) { let n = [...e], r = n.length, i = e.map((o, s) => td(o)(o, t[s]));

 return o => { for (let s = 0;

 s < r;

 s++)n[s] = i[s](o);

 return n } } function UF(e, t) { let n = { ...e, ...t }, r = {};

 for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = td(e[i])(e[i], t[i]));

 return i => { for (let o in r) n[o] = r[o](i);

 return n } } function GF(e, t) { var n;

 let r = [], i = { color: 0, var: 0, number: 0 };

 for (let o = 0;

 o < t.values.length;

 o++) { let s = t.types[o], a = e.indexes[s][i[s]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;

 r[o] = l, i[s]++ } return r } var qF = (e, t) => { let n = gr.createTransformer(t), r = Fs(e), i = Fs(t);

 return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Rf.has(e) && !i.values.length || Rf.has(t) && !r.values.length ? HF(e, t) : qn(Hy(GF(r, i), i.values), n) : (po(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), dl(e, t)) };

 function nd(e, t, n) { return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Oe(e, t, n) : td(e)(e, t) } function XF(e, t, n) { let r = [], i = n || nd, o = e.length - 1;

 for (let s = 0;

 s < o;

 s++) { let a = i(e[s], e[s + 1]);

 if (t) { let l = Array.isArray(t) ? t[s] || yt : t;

 a = qn(l, a) } r.push(a) } return r } function go(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) { let o = e.length;

 if (en(o === t.length, "Both input and output ranges must be the same length"), o === 1) return () => t[0];

 if (o === 2 && e[0] === e[1]) return () => t[1];

 e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());

 let s = XF(t, r, i), a = s.length, l = c => { let u = 0;

 if (a > 1) for (;

 u < e.length - 2 && !(c < e[u + 1]);

 u++);

 let f = vr(e[u], e[u + 1], c);

 return s[u](f) };

 return n ? c => l(mr(e[0], e[o - 1], c)) : l } var Wy = e => Array.isArray(e) && typeof e[0] != "number", rd = e => Array.isArray(e) && typeof e[0] == "number", dv = { linear: yt, easeIn: By, easeInOut: Jf, easeOut: $y, circIn: Sl, circInOut: Yf, circOut: Xf, backIn: xl, backInOut: Gf, backOut: Uf, anticipate: qf }, Tf = e => { if (rd(e)) { en(e.length === 4, "Cubic bezier arrays must contain four numerical values.");

 let [t, n, r, i] = e;

 return ho(t, n, r, i) } else if (typeof e == "string") return en(dv[e] !== void 0, `Invalid easing type '${e}'`), dv[e];

 return e };

 function Uy(e, t) { let n = e[e.length - 1];

 for (let r = 1;

 r <= t;

 r++) { let i = vr(0, t, r);

 e.push(Oe(n, 1, i)) } } function id(e) { let t = [0];

 return Uy(t, e.length - 1), t } function YF(e, t) { return e.map(n => n * t) } function KF(e, t) { return e.map(() => t || Jf).splice(0, e.length - 1) } function Ps({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) { let i = Wy(r) ? r.map(Tf) : Tf(r), o = { done: !1, value: t[0] }, s = YF(n && n.length === t.length ? n : id(t), e), a = go(s, t, { ease: Array.isArray(i) ? i : KF(t, i) });

 return { calculatedDuration: e, next: l => (o.value = a(l), o.done = l >= e, o) } } var Vs = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], Dr = new Set(Vs), QF = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]), hv = e => e === mo || e === J, pv = (e, t) => parseFloat(e.split(", ")[t]), mv = (e, t) => (n, { transform: r }) => { if (r === "none" || !r) return 0;

 let i = r.match(/^matrix3d\((.+)\)$/u);

 if (i) return pv(i[1], t);

 { let o = r.match(/^matrix\((.+)\)$/u);

 return o ? pv(o[1], e) : 0 } }, ZF = new Set(["x", "y", "z"]), JF = Vs.filter(e => !ZF.has(e));

 function eP(e) { let t = [];

 return JF.forEach(n => { let r = e.getValue(n);

 r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0)) }), t } var co = { width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n), height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n), top: (e, { top: t }) => parseFloat(t), left: (e, { left: t }) => parseFloat(t), bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min), right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min), x: mv(4, 13), y: mv(5, 14) };

 co.translateX = co.x;

 co.translateY = co.y;

 var wi = new Set, Ef = !1, Ff = !1;

 function Gy() { if (Ff) { let e = Array.from(wi).filter(r => r.needsMeasurement), t = new Set(e.map(r => r.element)), n = new Map;

 t.forEach(r => { let i = eP(r);

 i.length && (n.set(r, i), r.render()) }), e.forEach(r => r.measureInitialState()), t.forEach(r => { r.render();

 let i = n.get(r);

 i && i.forEach(([o, s]) => { var a;

 (a = r.getValue(o)) === null || a === void 0 || a.set(s) }) }), e.forEach(r => r.measureEndState()), e.forEach(r => { r.suspendedScrollY !== void 0 && F.scrollTo(0, r.suspendedScrollY) }) } Ff = !1, Ef = !1, wi.forEach(e => e.complete()), wi.clear() } function qy() { wi.forEach(e => { e.readKeyframes(), e.needsMeasurement && (Ff = !0) }) } function tP() { qy(), Gy() } var od = class { constructor(e, t, n, r, i, o = !1) { this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = o } scheduleResolve() { this.isScheduled = !0, this.isAsync ? (wi.add(this), Ef || (Ef = !0, Q.read(qy), Q.resolveKeyframes(Gy))) : (this.readKeyframes(), this.complete()) } readKeyframes() { let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;

 for (let i = 0;

 i < e.length;

 i++)if (e[i] === null) if (i === 0) { let o = r?.get(), s = e[e.length - 1];

 if (o !== void 0) e[0] = o;

 else if (n && t) { let a = n.readValue(t, s);

 a != null && (e[0] = a) } e[0] === void 0 && (e[0] = s), r && o === void 0 && r.set(e[0]) } else e[i] = e[i - 1] } setFinalKeyframe() { } measureInitialState() { } renderEndStyles() { } measureEndState() { } complete() { this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), wi.delete(this) } cancel() { this.isComplete || (this.isScheduled = !1, wi.delete(this)) } resume() { this.isComplete || this.scheduleResolve() } }, ll;

 function nP() { ll = void 0 } var Xn = { now: () => (ll === void 0 && Xn.set(Xe.isProcessing || bl.useManualTiming ? Xe.timestamp : performance.now()), ll), set: e => { ll = e, queueMicrotask(nP) } }, hl = { current: !1 };

 function wl(e) { return typeof e == "function" } var gv = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (gr.test(e) || e === "0") && !e.startsWith("url("));

 function rP(e) { let t = e[0];

 if (e.length === 1) return !0;

 for (let n = 0;

 n < e.length;

 n++)if (e[n] !== t) return !0 } function iP(e, t, n, r) { let i = e[0];

 if (i === null) return !1;

 if (t === "display" || t === "visibility") return !0;

 let o = e[e.length - 1], s = gv(i, t), a = gv(o, t);

 return po(s === a, `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !s || !a ? !1 : rP(e) || (n === "spring" || wl(n)) && r } var oP = e => e !== null;

 function kl(e, { repeat: t, repeatType: n = "loop" }, r) { let i = e.filter(oP), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;

 return !o || r === void 0 ? i[o] : r } var sP = 40, Xy = class { constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: o = "loop", ...s }) { this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Xn.now(), this.options = { autoplay: e, delay: t, type: n, repeat: r, repeatDelay: i, repeatType: o, ...s }, this.updateFinishedPromise() } calcStartTime() { return this.resolvedAt ? this.resolvedAt - this.createdAt > sP ? this.resolvedAt : this.createdAt : this.createdAt } get resolved() { return !this._resolved && !this.hasAttemptedResolve && tP(), this._resolved } onKeyframesResolved(e, t) { this.resolvedAt = Xn.now(), this.hasAttemptedResolve = !0;

 let { name: n, type: r, velocity: i, delay: o, onComplete: s, onUpdate: a, isGenerator: l } = this.options;

 if (!l && !iP(e, n, r, i)) if (hl.current || !o) { a?.(kl(e, this.options, t)), s?.(), this.resolveFinishedPromise();

 return } else this.options.duration = 0;

 let c = this.initPlayback(e, t);

 c !== !1 && (this._resolved = { keyframes: e, finalKeyframe: t, ...c }, this.onPostResolved()) } onPostResolved() { } then(e, t) { return this.currentFinishedPromise.then(e, t) } updateFinishedPromise() { this.currentFinishedPromise = new Promise(e => { this.resolveFinishedPromise = e }) } }, Pf = 2e4;

 function Yy(e) { let t = 0, n = 50, r = e.next(t);

 for (;

 !r.done && t < Pf;

)t += n, r = e.next(t);

 return t >= Pf ? 1 / 0 : t } var aP = e => { let t = ({ timestamp: n }) => e(n);

 return { start: () => Q.update(t, !0), stop: () => Tt(t), now: () => Xe.isProcessing ? Xe.timestamp : Xn.now() } }, lP = { decay: Cf, inertia: Cf, tween: Ps, keyframes: Ps, spring: Ls }, cP = e => e / 100, Cl = class extends Xy { constructor(e) { super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => { if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;

 this.teardown();

 let { onStop: a } = this.options;

 a && a() };

 let { name: t, motionValue: n, element: r, keyframes: i } = this.options, o = r?.KeyframeResolver || od, s = (a, l) => this.onKeyframesResolved(a, l);

 this.resolver = new o(i, s, t, n, r), this.resolver.scheduleResolve() } initPlayback(e) { let { type: t = "keyframes", repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: o = 0 } = this.options, s = wl(t) ? t : lP[t] || Ps, a, l;

 s !== Ps && typeof e[0] != "number" && (a = qn(cP, nd(e[0], e[1])), e = [0, 100]);

 let c = s({ ...this.options, keyframes: e });

 i === "mirror" && (l = s({ ...this.options, keyframes: [...e].reverse(), velocity: -o })), c.calculatedDuration === null && (c.calculatedDuration = Yy(c));

 let { calculatedDuration: u } = c, f = u + r, d = f * (n + 1) - r;

 return { generator: c, mirroredGenerator: l, mapPercentToKeyframes: a, calculatedDuration: u, resolvedDuration: f, totalDuration: d } } onPostResolved() { let { autoplay: e = !0 } = this.options;

 this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState } tick(e, t = !1) { let { resolved: n } = this;

 if (!n) { let { keyframes: R } = this.options;

 return { done: !0, value: R[R.length - 1] } } let { finalKeyframe: r, generator: i, mirroredGenerator: o, mapPercentToKeyframes: s, keyframes: a, calculatedDuration: l, totalDuration: c, resolvedDuration: u } = n;

 if (this.startTime === null) return i.next(0);

 let { delay: f, repeat: d, repeatType: h, repeatDelay: p, onUpdate: v } = this.options;

 this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), t ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;

 let b = this.currentTime - f * (this.speed >= 0 ? 1 : -1), g = this.speed >= 0 ? b < 0 : b > c;

 this.currentTime = Math.max(b, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);

 let m = this.currentTime, y = i;

 if (d) { let R = Math.min(this.currentTime, c) / u, E = Math.floor(R), I = R % 1;

 !I && R >= 1 && (I = 1), I === 1 && E--, E = Math.min(E, d + 1), !!(E % 2) && (h === "reverse" ? (I = 1 - I, p && (I -= p / u)) : h === "mirror" && (y = o)), m = mr(0, 1, I) * u } let x = g ? { done: !1, value: a[0] } : y.next(m);

 s && (x.value = s(x.value));

 let { done: C } = x;

 !g && l !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);

 let w = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);

 return w && r !== void 0 && (x.value = kl(a, this.options, r)), v && v(x.value), w && this.finish(), x } get duration() { let { resolved: e } = this;

 return e ? Gn(e.calculatedDuration) : 0 } get time() { return Gn(this.currentTime) } set time(e) { e = Pn(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed) } get speed() { return this.playbackSpeed } set speed(e) { let t = this.playbackSpeed !== e;

 this.playbackSpeed = e, t && (this.time = Gn(this.currentTime)) } play() { if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) { this.pendingPlayState = "running";

 return } if (this.isStopped) return;

 let { driver: e = aP, onPlay: t, startTime: n } = this.options;

 this.driver || (this.driver = e(i => this.tick(i))), t && t();

 let r = this.driver.now();

 this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = r) : this.startTime = n ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start() } pause() { var e;

 if (!this._resolved) { this.pendingPlayState = "paused";

 return } this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0 } complete() { this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null } finish() { this.teardown(), this.state = "finished";

 let { onComplete: e } = this.options;

 e && e() } cancel() { this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise() } teardown() { this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel() } stopDriver() { this.driver && (this.driver.stop(), this.driver = void 0) } sample(e) { return this.startTime = 0, this.tick(e, !0) } };

 function sd(e) { return new Cl(e) } var Ky = e => /^0[^.\s]+$/u.test(e);

 function uP(e) { return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Ky(e) : !0 } var Qy = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), fP = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

 function dP(e) { let t = fP.exec(e);

 if (!t) return [,];

 let [, n, r, i] = t;

 return [`--${n ?? r}`, i] } var hP = 4;

 function Zy(e, t, n = 1) { en(n <= hP, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);

 let [r, i] = dP(e);

 if (!r) return;

 let o = F.getComputedStyle(t).getPropertyValue(r);

 if (o) { let s = o.trim();

 return Qy(s) ? parseFloat(s) : s } return ed(i) ? Zy(i, t, n + 1) : i } var Jy = e => t => t.test(e), pP = { test: e => e === "auto", parse: e => e }, e0 = [mo, J, Un, Vr, gF, mF, pP], vv = e => e0.find(Jy(e)), mP = new Set(["brightness", "contrast", "saturate", "opacity"]);

 function gP(e) { let [t, n] = e.slice(0, -1).split("(");

 if (t === "drop-shadow") return e;

 let [r] = n.match(Kf) || [];

 if (!r) return e;

 let i = n.replace(r, ""), o = mP.has(t) ? 1 : 0;

 return r !== n && (o *= 100), t + "(" + o + i + ")" } var vP = /\b([a-z-]*)\(.*?\)/gu, If = { ...gr, getAnimatableNone: e => { let t = e.match(vP);

 return t ? t.map(gP).join(" ") : e } }, yP = { borderWidth: J, borderTopWidth: J, borderRightWidth: J, borderBottomWidth: J, borderLeftWidth: J, borderRadius: J, radius: J, borderTopLeftRadius: J, borderTopRightRadius: J, borderBottomRightRadius: J, borderBottomLeftRadius: J, width: J, maxWidth: J, height: J, maxHeight: J, top: J, right: J, bottom: J, left: J, padding: J, paddingTop: J, paddingRight: J, paddingBottom: J, paddingLeft: J, margin: J, marginTop: J, marginRight: J, marginBottom: J, marginLeft: J, backgroundPositionX: J, backgroundPositionY: J }, bP = { rotate: Vr, rotateX: Vr, rotateY: Vr, rotateZ: Vr, scale: il, scaleX: il, scaleY: il, scaleZ: il, skew: Vr, skewX: Vr, skewY: Vr, distance: J, translateX: J, translateY: J, translateZ: J, x: J, y: J, z: J, perspective: J, transformPerspective: J, opacity: Es, originX: sv, originY: sv, originZ: J }, yv = { ...mo, transform: Math.round }, ad = { ...yP, ...bP, zIndex: yv, size: J, fillOpacity: Es, strokeOpacity: Es, numOctaves: yv }, xP = { ...ad, color: vt, backgroundColor: vt, outlineColor: vt, fill: vt, stroke: vt, borderColor: vt, borderTopColor: vt, borderRightColor: vt, borderBottomColor: vt, borderLeftColor: vt, filter: If, WebkitFilter: If }, ld = e => xP[e];

 function t0(e, t) { let n = ld(e);

 return n !== If && (n = gr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0 } var SP = new Set(["auto", "none", "0"]);

 function wP(e, t, n) { let r = 0, i;

 for (;

 r < e.length && !i;

) { let o = e[r];

 typeof o == "string" && !SP.has(o) && Fs(o).values.length && (i = e[r]), r++ } if (i && n) for (let o of t) e[o] = t0(n, i) } var n0 = class extends od { constructor(e, t, n, r, i) { super(e, t, n, r, i, !0) } readKeyframes() { let { unresolvedKeyframes: e, element: t, name: n } = this;

 if (!t || !t.current) return;

 super.readKeyframes();

 for (let a = 0;

 a < e.length;

 a++) { let l = e[a];

 if (typeof l == "string" && (l = l.trim(), ed(l))) { let c = Zy(l, t.current);

 c !== void 0 && (e[a] = c), a === e.length - 1 && (this.finalKeyframe = l) } } if (this.resolveNoneKeyframes(), !QF.has(n) || e.length !== 2) return;

 let [r, i] = e, o = vv(r), s = vv(i);

 if (o !== s) if (hv(o) && hv(s)) for (let a = 0;

 a < e.length;

 a++) { let l = e[a];

 typeof l == "string" && (e[a] = parseFloat(l)) } else this.needsMeasurement = !0 } resolveNoneKeyframes() { let { unresolvedKeyframes: e, name: t } = this, n = [];

 for (let r = 0;

 r < e.length;

 r++)uP(e[r]) && n.push(r);

 n.length && wP(e, n, t) } measureInitialState() { let { element: e, unresolvedKeyframes: t, name: n } = this;

 if (!e || !e.current) return;

 n === "height" && (this.suspendedScrollY = F.pageYOffset), this.measuredOrigin = co[n](e.measureViewportBox(), F.getComputedStyle(e.current)), t[0] = this.measuredOrigin;

 let r = t[t.length - 1];

 r !== void 0 && e.getValue(n, r).jump(r, !1) } measureEndState() { var e;

 let { element: t, name: n, unresolvedKeyframes: r } = this;

 if (!t || !t.current) return;

 let i = t.getValue(n);

 i && i.jump(this.measuredOrigin, !1);

 let o = r.length - 1, s = r[o];

 r[o] = co[n](t.measureViewportBox(), F.getComputedStyle(t.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([a, l]) => { t.getValue(a).set(l) }), this.resolveNoneKeyframes() } }, r0 = new Set(["opacity", "clipPath", "filter", "transform"]), kP = 10, CP = (e, t) => { let n = "", r = Math.max(Math.round(t / kP), 2);

 for (let i = 0;

 i < r;

 i++)n += e(vr(0, r - 1, i)) + ", ";

 return `linear(${n.substring(0, n.length - 2)})` };

 function cd(e) { let t;

 return () => (t === void 0 && (t = e()), t) } var RP = { linearEasing: void 0 };

 function TP(e, t) { let n = cd(e);

 return () => { var r;

 return (r = RP[t]) !== null && r !== void 0 ? r : n() } } var pl = TP(() => { try { document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" }) } catch { return !1 } return !0 }, "linearEasing");

 function i0(e) { return !!(typeof e == "function" && pl() || !e || typeof e == "string" && (e in _f || pl()) || rd(e) || Array.isArray(e) && e.every(i0)) } var xs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, _f = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: xs([0, .65, .55, 1]), circOut: xs([.55, 0, 1, .45]), backIn: xs([.31, .01, .66, -.59]), backOut: xs([.33, 1.53, .69, .99]) };

 function o0(e, t) { if (e) return typeof e == "function" && pl() ? CP(e, t) : rd(e) ? xs(e) : Array.isArray(e) ? e.map(n => o0(n, t) || _f.easeOut) : _f[e] } function EP(e, t, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: a, times: l } = {}) { let c = { [t]: n };

 l && (c.offset = l);

 let u = o0(a, i);

 return Array.isArray(u) && (c.easing = u), e.animate(c, { delay: r, duration: i, easing: Array.isArray(u) ? "linear" : u, fill: "both", iterations: o + 1, direction: s === "reverse" ? "alternate" : "normal" }) } function bv(e, t) { e.timeline = t, e.onfinish = null } var FP = cd(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ml = 10, PP = 2e4;

 function IP(e) { return wl(e.type) || e.type === "spring" || !i0(e.ease) } function _P(e, t) { let n = new Cl({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }), r = { done: !1, value: e[0] }, i = [], o = 0;

 for (;

 !r.done && o < PP;

)r = n.sample(o), i.push(r.value), o += ml;

 return { times: void 0, keyframes: i, duration: o - ml, ease: "linear" } } var s0 = { anticipate: qf, backInOut: Gf, circInOut: Yf };

 function MP(e) { return e in s0 } var Mf = class extends Xy { constructor(e) { super(e);

 let { name: t, motionValue: n, element: r, keyframes: i } = this.options;

 this.resolver = new n0(i, (o, s) => this.onKeyframesResolved(o, s), t, n, r), this.resolver.scheduleResolve() } initPlayback(e, t) { var n;

 let { duration: r = 300, times: i, ease: o, type: s, motionValue: a, name: l, startTime: c } = this.options;

 if (!(!((n = a.owner) === null || n === void 0) && n.current)) return !1;

 if (typeof o == "string" && pl() && MP(o) && (o = s0[o]), IP(this.options)) { let { onComplete: f, onUpdate: d, motionValue: h, element: p, ...v } = this.options, b = _P(e, v);

 e = b.keyframes, e.length === 1 && (e[1] = e[0]), r = b.duration, i = b.times, o = b.ease, s = "keyframes" } let u = EP(a.owner.current, l, e, { ...this.options, duration: r, times: i, ease: o });

 return u.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (bv(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => { let { onComplete: f } = this.options;

 a.set(kl(e, this.options, t)), f && f(), this.cancel(), this.resolveFinishedPromise() }, { animation: u, duration: r, times: i, type: s, ease: o, keyframes: e } } get duration() { let { resolved: e } = this;

 if (!e) return 0;

 let { duration: t } = e;

 return Gn(t) } get time() { let { resolved: e } = this;

 if (!e) return 0;

 let { animation: t } = e;

 return Gn(t.currentTime || 0) } set time(e) { let { resolved: t } = this;

 if (!t) return;

 let { animation: n } = t;

 n.currentTime = Pn(e) } get speed() { let { resolved: e } = this;

 if (!e) return 1;

 let { animation: t } = e;

 return t.playbackRate } set speed(e) { let { resolved: t } = this;

 if (!t) return;

 let { animation: n } = t;

 n.playbackRate = e } get state() { let { resolved: e } = this;

 if (!e) return "idle";

 let { animation: t } = e;

 return t.playState } get startTime() { let { resolved: e } = this;

 if (!e) return null;

 let { animation: t } = e;

 return t.startTime } attachTimeline(e) { if (!this._resolved) this.pendingTimeline = e;

 else { let { resolved: t } = this;

 if (!t) return yt;

 let { animation: n } = t;

 bv(n, e) } return yt } play() { if (this.isStopped) return;

 let { resolved: e } = this;

 if (!e) return;

 let { animation: t } = e;

 t.playState === "finished" && this.updateFinishedPromise(), t.play() } pause() { let { resolved: e } = this;

 if (!e) return;

 let { animation: t } = e;

 t.pause() } stop() { if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;

 this.resolveFinishedPromise(), this.updateFinishedPromise();

 let { resolved: e } = this;

 if (!e) return;

 let { animation: t, keyframes: n, duration: r, type: i, ease: o, times: s } = e;

 if (t.playState === "idle" || t.playState === "finished") return;

 if (this.time) { let { motionValue: l, onUpdate: c, onComplete: u, element: f, ...d } = this.options, h = new Cl({ ...d, keyframes: n, duration: r, type: i, ease: o, times: s, isGenerator: !0 }), p = Pn(this.time);

 l.setWithVelocity(h.sample(p - ml).value, h.sample(p).value, ml) } let { onStop: a } = this.options;

 a && a(), this.cancel() } complete() { let { resolved: e } = this;

 e && e.animation.finish() } cancel() { let { resolved: e } = this;

 e && e.animation.cancel() } static supports(e) { let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: o, type: s } = e;

 return FP() && n && r0.has(n) && t && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate && !r && i !== "mirror" && o !== 0 && s !== "inertia" } };

 function ud(e, t) { e.indexOf(t) === -1 && e.push(t) } function Rl(e, t) { let n = e.indexOf(t);

 n > -1 && e.splice(n, 1) } function OP([...e], t, n) { let r = t < 0 ? e.length + t : t;

 if (r >= 0 && r < e.length) { let i = n < 0 ? e.length + n : n, [o] = e.splice(t, 1);

 e.splice(i, 0, o) } return e } var fd = class { constructor() { this.subscriptions = [] } add(e) { return ud(this.subscriptions, e), () => Rl(this.subscriptions, e) } notify(e, t, n) { let r = this.subscriptions.length;

 if (r) if (r === 1) this.subscriptions[0](e, t, n);

 else for (let i = 0;

 i < r;

 i++) { let o = this.subscriptions[i];

 o && o(e, t, n) } } getSize() { return this.subscriptions.length } clear() { this.subscriptions.length = 0 } }, xv = 30, LP = e => !isNaN(parseFloat(e)), ks = { current: void 0 }, Tl = class { constructor(e, t = {}) { this.version = "11.11.7", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (n, r = !0) => { let i = Xn.now();

 this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), r && this.events.renderRequest && this.events.renderRequest.notify(this.current) }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner } setCurrent(e) { this.current = e, this.updatedAt = Xn.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = LP(this.current)) } setPrevFrameValue(e = this.current) { this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt } onChange(e) { return this.on("change", e) } on(e, t) { this.events[e] || (this.events[e] = new fd);

 let n = this.events[e].add(t);

 return e === "change" ? () => { n(), Q.read(() => { this.events.change.getSize() || this.stop() }) } : n } clearListeners() { for (let e in this.events) this.events[e].clear() } attach(e, t) { this.passiveEffect = e, this.stopPassiveEffect = t } set(e, t = !0) { !t || !this.passiveEffect ? this.updateAndNotify(e, t) : this.passiveEffect(e, this.updateAndNotify) } setWithVelocity(e, t, n) { this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n } jump(e, t = !0) { this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect() } get() { return ks.current && ks.current.push(this), this.current } getPrevious() { return this.prev } getVelocity() { let e = Xn.now();

 if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > xv) return 0;

 let t = Math.min(this.updatedAt - this.prevUpdatedAt, xv);

 return Zf(parseFloat(this.current) - parseFloat(this.prevFrameValue), t) } start(e) { return this.stop(), new Promise(t => { this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify() }).then(() => { this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation() }) } stop() { this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation() } isAnimating() { return !!this.animation } clearAnimation() { delete this.animation } destroy() { this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect() } };

 function Ye(e, t) { return new Tl(e, t) } var El = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), VP = "framerAppearId", Fl = "data-" + El(VP), Be = e => !!(e && e.getVelocity);

 function Sv(e) { let t = [{}, {}];

 return e?.values.forEach((n, r) => { t[0][r] = n.get(), t[1][r] = n.getVelocity() }), t } function dd(e, t, n, r) { if (typeof t == "function") { let [i, o] = Sv(r);

 t = t(n !== void 0 ? n : e.custom, i, o) } if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") { let [i, o] = Sv(r);

 t = t(n !== void 0 ? n : e.custom, i, o) } return t } function Pl(e, t, n) { let r = e.getProps();

 return dd(r, t, n !== void 0 ? n : r.custom, e) } var AP = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, DP = e => ({ type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), zP = { type: "keyframes", duration: .8 }, BP = { type: "keyframes", ease: [.25, .1, .35, 1], duration: .3 }, $P = (e, { keyframes: t }) => t.length > 2 ? zP : Dr.has(e) ? e.startsWith("scale") ? DP(t[1]) : AP : BP;

 function hd(e, t) { return e ? e[t] || e.default || e : void 0 } var a0 = cd(() => F.ScrollTimeline !== void 0), l0 = class { constructor(e) { this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean) } then(e, t) { return Promise.all(this.animations).then(e).catch(t) } getAll(e) { return this.animations[0][e] } setAll(e, t) { for (let n = 0;

 n < this.animations.length;

 n++)this.animations[n][e] = t } attachTimeline(e, t) { let n = this.animations.map(r => a0() && r.attachTimeline ? r.attachTimeline(e) : t(r));

 return () => { n.forEach((r, i) => { r && r(), this.animations[i].stop() }) } } get time() { return this.getAll("time") } set time(e) { this.setAll("time", e) } get speed() { return this.getAll("speed") } set speed(e) { this.setAll("speed", e) } get startTime() { return this.getAll("startTime") } get duration() { let e = 0;

 for (let t = 0;

 t < this.animations.length;

 t++)e = Math.max(e, this.animations[t].duration);

 return e } runAll(e) { this.animations.forEach(t => t[e]()) } play() { this.runAll("play") } pause() { this.runAll("pause") } cancel() { this.runAll("cancel") } complete() { this.runAll("complete") } };

 function NP({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: c, ...u }) { return !!Object.keys(u).length } var pd = (e, t, n, r = {}, i, o) => s => { let a = hd(r, e) || {}, l = a.delay || r.delay || 0, { elapsed: c = 0 } = r;

 c = c - Pn(l);

 let u = { keyframes: Array.isArray(n) ? n : [null, n], ease: "easeOut", velocity: t.getVelocity(), ...a, delay: -c, onUpdate: d => { t.set(d), a.onUpdate && a.onUpdate(d) }, onComplete: () => { s(), a.onComplete && a.onComplete() }, name: e, motionValue: t, element: o ? void 0 : i };

 NP(a) || (u = { ...u, ...$P(e, u) }), u.duration && (u.duration = Pn(u.duration)), u.repeatDelay && (u.repeatDelay = Pn(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);

 let f = !1;

 if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (f = !0)), (hl.current || bl.skipAnimations) && (f = !0, u.duration = 0, u.delay = 0), f && !o && t.get() !== void 0) { let d = kl(u.keyframes, a);

 if (d !== void 0) return Q.update(() => { u.onUpdate(d), u.onComplete() }), new l0([]) } return !o && Mf.supports(u) ? new Mf(u) : new Cl(u) }, Of = e => Array.isArray(e), jP = e => !!(e && typeof e == "object" && e.mix && e.toValue), HP = e => Of(e) ? e[e.length - 1] || 0 : e;

 function WP(e, t, n) { e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ye(n)) } function md(e, t) { let n = Pl(e, t), { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};

 o = { ...o, ...r };

 for (let s in o) { let a = HP(o[s]);

 WP(e, s, a) } } function c0(e) { return e.props[Fl] } function UP(e) { return !!(Be(e) && e.add) } function u0(e) { if (Dr.has(e)) return "transform";

 if (r0.has(e)) return El(e) } function Lf(e, t) { var n;

 if (!e.applyWillChange) return;

 let r = e.getValue("willChange");

 if (UP(r)) return r.add(t);

 !(!((n = e.props.style) === null || n === void 0) && n.willChange) && u0(t) && e.setStaticValue("willChange", "transform") } function GP({ protectedKeys: e, needsAnimating: t }, n) { let r = e.hasOwnProperty(n) && t[n] !== !0;

 return t[n] = !1, r } function gd(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) { var o;

 let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;

 r && (s = r);

 let c = [], u = i && e.animationState && e.animationState.getState()[i];

 for (let f in l) { let d = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null), h = l[f];

 if (h === void 0 || u && GP(u, f)) continue;

 let p = { delay: n, ...hd(s || {}, f) }, v = !1;

 if (F.MotionHandoffAnimation) { let g = c0(e);

 if (g) { let m = F.MotionHandoffAnimation(g, f, Q);

 m !== null && (p.startTime = m, v = !0) } } Lf(e, f), d.start(pd(f, d, h, e.shouldReduceMotion && Dr.has(f) ? { type: !1 } : p, e, v));

 let b = d.animation;

 b && c.push(b) } return a && Promise.all(c).then(() => { Q.update(() => { a && md(e, a) }) }), c } function Vf(e, t, n = {}) { var r;

 let i = Pl(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0), { transition: o = e.getDefaultTransition() || {} } = i || {};

 n.transitionOverride && (o = n.transitionOverride);

 let s = i ? () => Promise.all(gd(e, i, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => { let { delayChildren: u = 0, staggerChildren: f, staggerDirection: d } = o;

 return qP(e, t, u + c, f, d, n) } : () => Promise.resolve(), { when: l } = o;

 if (l) { let [c, u] = l === "beforeChildren" ? [s, a] : [a, s];

 return c().then(() => u()) } else return Promise.all([s(), a(n.delay)]) } function qP(e, t, n = 0, r = 0, i = 1, o) { let s = [], a = (e.variantChildren.size - 1) * r, l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;

 return Array.from(e.variantChildren).sort(XP).forEach((c, u) => { c.notify("AnimationStart", t), s.push(Vf(c, t, { ...o, delay: n + l(u) }).then(() => c.notify("AnimationComplete", t))) }), Promise.all(s) } function XP(e, t) { return e.sortNodePosition(t) } function vd(e, t, n = {}) { e.notify("AnimationStart", t);

 let r;

 if (Array.isArray(t)) { let i = t.map(o => Vf(e, o, n));

 r = Promise.all(i) } else if (typeof t == "string") r = Vf(e, t, n);

 else { let i = typeof t == "function" ? Pl(e, t, n.custom) : t;

 r = Promise.all(gd(e, i, n)) } return r.then(() => { e.notify("AnimationComplete", t) }) } function Is(e) { return e !== null && typeof e == "object" && typeof e.start == "function" } function f0(e, t) { if (!Array.isArray(t)) return !1;

 let n = t.length;

 if (n !== e.length) return !1;

 for (let r = 0;

 r < n;

 r++)if (t[r] !== e[r]) return !1;

 return !0 } function _s(e) { return typeof e == "string" || Array.isArray(e) } var yd = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], bd = ["initial", ...yd], YP = bd.length;

 function d0(e) { if (!e) return;

 if (!e.isControllingVariants) { let n = e.parent ? d0(e.parent) || {} : {};

 return e.props.initial !== void 0 && (n.initial = e.props.initial), n } let t = {};

 for (let n = 0;

 n < YP;

 n++) { let r = bd[n], i = e.props[r];

 (_s(i) || i === !1) && (t[r] = i) } return t } var KP = [...yd].reverse(), QP = yd.length;

 function ZP(e) { return t => Promise.all(t.map(({ animation: n, options: r }) => vd(e, n, r))) } function JP(e) { let t = ZP(e), n = wv(), r = !0, i = l => (c, u) => { var f;

 let d = Pl(e, u, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);

 if (d) { let { transition: h, transitionEnd: p, ...v } = d;

 c = { ...c, ...v, ...p } } return c };

 function o(l) { t = l(e) } function s(l) { let { props: c } = e, u = d0(e.parent) || {}, f = [], d = new Set, h = {}, p = 1 / 0;

 for (let b = 0;

 b < QP;

 b++) { let g = KP[b], m = n[g], y = c[g] !== void 0 ? c[g] : u[g], x = _s(y), C = g === l ? m.isActive : null;

 C === !1 && (p = b);

 let w = y === u[g] && y !== c[g] && x;

 if (w && r && e.manuallyAnimateOnMount && (w = !1), m.protectedKeys = { ...h }, !m.isActive && C === null || !y && !m.prevProp || Is(y) || typeof y == "boolean") continue;

 let R = eI(m.prevProp, y), E = R || g === l && m.isActive && !w && x || b > p && x, I = !1, P = Array.isArray(y) ? y : [y], z = P.reduce(i(g), {});

 C === !1 && (z = {});

 let { prevResolvedValues: H = {} } = m, O = { ...H, ...z }, X = U => { E = !0, d.has(U) && (I = !0, d.delete(U)), m.needsAnimating[U] = !0;

 let Y = e.getValue(U);

 Y && (Y.liveStyle = !1) };

 for (let U in O) { let Y = z[U], le = H[U];

 if (h.hasOwnProperty(U)) continue;

 let me = !1;

 Of(Y) && Of(le) ? me = !f0(Y, le) : me = Y !== le, me ? Y != null ? X(U) : d.add(U) : Y !== void 0 && d.has(U) ? X(U) : m.protectedKeys[U] = !0 } m.prevProp = y, m.prevResolvedValues = z, m.isActive && (h = { ...h, ...z }), r && e.blockInitialAnimation && (E = !1), E && (!(w && R) || I) && f.push(...P.map(U => ({ animation: U, options: { type: g } }))) } if (d.size) { let b = {};

 d.forEach(g => { let m = e.getBaseTarget(g), y = e.getValue(g);

 y && (y.liveStyle = !0), b[g] = m ?? null }), f.push({ animation: b }) } let v = !!f.length;

 return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve() } function a(l, c) { var u;

 if (n[l].isActive === c) return Promise.resolve();

 (u = e.variantChildren) === null || u === void 0 || u.forEach(d => { var h;

 return (h = d.animationState) === null || h === void 0 ? void 0 : h.setActive(l, c) }), n[l].isActive = c;

 let f = s(l);

 for (let d in n) n[d].protectedKeys = {};

 return f } return { animateChanges: s, setActive: a, setAnimateFunction: o, getState: () => n, reset: () => { n = wv(), r = !0 } } } function eI(e, t) { return typeof t == "string" ? t !== e : Array.isArray(t) ? !f0(t, e) : !1 } function yi(e = !1) { return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} } } function wv() { return { animate: yi(!0), whileInView: yi(), whileHover: yi(), whileTap: yi(), whileDrag: yi(), whileFocus: yi(), exit: yi() } } var zr = class { constructor(e) { this.isMounted = !1, this.node = e } update() { } }, tI = class extends zr { constructor(e) { super(e), e.animationState || (e.animationState = JP(e)) } updateAnimationControlsSubscription() { let { animate: e } = this.node.getProps();

 Is(e) && (this.unmountControls = e.subscribe(this.node)) } mount() { this.updateAnimationControlsSubscription() } update() { let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};

 e !== t && this.updateAnimationControlsSubscription() } unmount() { var e;

 this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this) } }, nI = 0, rI = class extends zr { constructor() { super(...arguments), this.id = nI++ } update() { if (!this.node.presenceContext) return;

 let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};

 if (!this.node.animationState || e === n) return;

 let r = this.node.animationState.setActive("exit", !e);

 t && !e && r.then(() => t(this.id)) } mount() { let { register: e } = this.node.presenceContext || {};

 e && (this.unmount = e(this.id)) } unmount() { } }, Il = { animation: { Feature: tI }, exit: { Feature: rI } }, h0 = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

 function _l(e, t = "page") { return { point: { x: e[`${t}X`], y: e[`${t}Y`] } } } var p0 = e => t => h0(t) && e(t, _l(t));

 function pr(e, t, n, r = { passive: !0 }) { return e.addEventListener(t, n, r), () => e.removeEventListener(t, n) } function Yn(e, t, n, r) { return pr(e, t, p0(n), r) } var Af = (e, t) => Math.abs(e - t);

 function m0(e, t) { let n = Af(e.x, t.x), r = Af(e.y, t.y);

 return Math.sqrt(n ** 2 + r ** 2) } function g0(e) { let t = null;

 return () => { let n = () => { t = null };

 return t === null ? (t = e, n) : !1 } } var kv = g0("dragHorizontal"), Cv = g0("dragVertical");

 function v0(e) { let t = !1;

 if (e === "y") t = Cv();

 else if (e === "x") t = kv();

 else { let n = kv(), r = Cv();

 n && r ? t = () => { n(), r() } : (n && n(), r && r()) } return t } function xd() { let e = v0(!0);

 return e ? (e(), !1) : !0 } var y0 = 1e-4, iI = 1 - y0, oI = 1 + y0, b0 = .01, sI = 0 - b0, aI = 0 + b0;

 function jt(e) { return e.max - e.min } function lI(e, t, n) { return Math.abs(e - t) <= n } function Rv(e, t, n, r = .5) { e.origin = r, e.originPoint = Oe(t.min, t.max, e.origin), e.scale = jt(n) / jt(t), e.translate = Oe(n.min, n.max, e.origin) - e.originPoint, (e.scale >= iI && e.scale <= oI || isNaN(e.scale)) && (e.scale = 1), (e.translate >= sI && e.translate <= aI || isNaN(e.translate)) && (e.translate = 0) } function Cs(e, t, n, r) { Rv(e.x, t.x, n.x, r ? r.originX : void 0), Rv(e.y, t.y, n.y, r ? r.originY : void 0) } function Tv(e, t, n) { e.min = n.min + t.min, e.max = e.min + jt(t) } function cI(e, t, n) { Tv(e.x, t.x, n.x), Tv(e.y, t.y, n.y) } function Ev(e, t, n) { e.min = t.min - n.min, e.max = e.min + jt(t) } function Rs(e, t, n) { Ev(e.x, t.x, n.x), Ev(e.y, t.y, n.y) } var Fv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), oo = () => ({ x: Fv(), y: Fv() }), Pv = () => ({ min: 0, max: 0 }), je = () => ({ x: Pv(), y: Pv() }), vo = pe(null);

 function Sd() { let e = L(vo);

 if (e === null) return [!0, null];

 let { isPresent: t, onExitComplete: n, register: r } = e, i = hr();

 V(() => r(i), []);

 let o = $(() => n && n(i), [i, n]);

 return !t && n ? [!1, o] : [!0] } var Ms = pe({}), Ml = pe({}), gl = {};

 function wd(e) { Object.assign(gl, e) } var uI = (e, t) => e.depth - t.depth, x0 = class { constructor() { this.children = [], this.isDirty = !1 } add(e) { ud(this.children, e), this.isDirty = !0 } remove(e) { Rl(this.children, e), this.isDirty = !0 } forEach(e) { this.isDirty && this.children.sort(uI), this.isDirty = !1, this.children.forEach(e) } };

 function Rt(e) { let t = Be(e) ? e.get() : e;

 return jP(t) ? t.toValue() : t } function S0(e, t) { let n = Xn.now(), r = ({ timestamp: i }) => { let o = i - n;

 o >= t && (Tt(r), e(o - t)) };

 return Q.read(r, !0), () => Tt(r) } var Kn = pe({ transformPagePoint: e => e, isStatic: !1, reducedMotion: "never" }), As = pe({}), Ol = typeof F < "u", Br = Ol ? ze : V, w0 = pe({ strict: !1 }), { schedule: kd, cancel: X8 } = Iy(queueMicrotask, !1);

 function so(e) { return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current") } function fI(e, t, n, r, i) { var o, s;

 let { visualElement: a } = L(As), l = L(w0), c = L(vo), u = L(Kn).reducedMotion, f = _();

 r = r || l.renderer, !f.current && r && (f.current = r(e, { visualState: t, parent: a, props: n, presenceContext: c, blockInitialAnimation: c ? c.initial === !1 : !1, reducedMotionConfig: u }));

 let d = f.current, h = L(Ml);

 d && !d.projection && i && (d.type === "html" || d.type === "svg") && dI(f.current, n, i, h), et(() => { d && d.update(n, c) });

 let p = n[Fl], v = _(!!p && !(!((o = F.MotionHandoffIsComplete) === null || o === void 0) && o.call(F, p)) && ((s = F.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(F, p)));

 return Br(() => { d && (F.MotionIsMounted = !0, d.updateFeatures(), kd.render(d.render), v.current && d.animationState && d.animationState.animateChanges()) }), V(() => { d && (!v.current && d.animationState && d.animationState.animateChanges(), v.current && (queueMicrotask(() => { var b;

 (b = F.MotionHandoffMarkAsComplete) === null || b === void 0 || b.call(F, p) }), v.current = !1)) }), d } function dI(e, t, n, r) { let { layoutId: i, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c } = t;

 e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : k0(e.parent)), e.projection.setOptions({ layoutId: i, layout: o, alwaysMeasureLayout: !!s || a && so(a), visualElement: e, animationType: typeof o == "string" ? o : "both", initialPromotionConfig: r, layoutScroll: l, layoutRoot: c }) } function k0(e) { if (e) return e.options.allowProjection !== !1 ? e.projection : k0(e.parent) } function hI(e, t, n) { return $(r => { r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : so(n) && (n.current = r)) }, [t]) } function Ll(e) { return Is(e.animate) || bd.some(t => _s(e[t])) } function C0(e) { return !!(Ll(e) || e.variants) } function pI(e, t) { if (Ll(e)) { let { initial: n, animate: r } = e;

 return { initial: n === !1 || _s(n) ? n : void 0, animate: _s(r) ? r : void 0 } } return e.inherit !== !1 ? t : {} } function mI(e) { let { initial: t, animate: n } = pI(e, L(As));

 return q(() => ({ initial: t, animate: n }), [Iv(t), Iv(n)]) } function Iv(e) { return Array.isArray(e) ? e.join(" ") : e } var _v = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] }, uo = {};

 for (let e in _v) uo[e] = { isEnabled: t => _v[e].some(n => !!t[n]) };

 function gI(e) { for (let t in e) uo[t] = { ...uo[t], ...e[t] } } var Cd = Symbol.for("motionComponentSymbol");

 function R0({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) { e && gI(e);

 function o(a, l) { let c, u = { ...L(Kn), ...a, layoutId: vI(a) }, { isStatic: f } = u, d = mI(a), h = r(a, f);

 if (!f && Ol) { yI(u, e);

 let p = bI(u);

 c = p.MeasureLayout, d.visualElement = fI(i, h, u, t, p.ProjectionNode) } return de(As.Provider, { value: d, children: [c && d.visualElement ? k(c, { visualElement: d.visualElement, ...u }) : null, n(i, a, hI(h, d.visualElement, l), h, f, d.visualElement)] }) } let s = xe(o);

 return s[Cd] = i, s } function vI({ layoutId: e }) { let t = L(Ms).id;

 return t && e !== void 0 ? t + "-" + e : e } function yI(e, t) { let n = L(w0).strict } function bI(e) { let { drag: t, layout: n } = uo;

 if (!t && !n) return {};

 let r = { ...t, ...n };

 return { MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0, ProjectionNode: r.ProjectionNode } } function Zn(e) { let t = _(null);

 return t.current === null && (t.current = e()), t.current } function xI({ applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: r }, i, o, s, a) { let l = { latestValues: SI(i, o, s, a ? !1 : e, t), renderState: n() };

 return r && (l.mount = c => r(i, c, l)), l } var Vl = e => (t, n) => { let r = L(As), i = L(vo), o = () => xI(e, t, r, i, n);

 return n ? o() : Zn(o) };

 function Mv(e, t, n) { let r = Array.isArray(t) ? t : [t];

 for (let i = 0;

 i < r.length;

 i++) { let o = dd(e, r[i]);

 if (o) { let { transitionEnd: s, transition: a, ...l } = o;

 n(l, s) } } } function SI(e, t, n, r, i) { var o;

 let s = {}, a = r && ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) === void 0, l = i(e, {});

 for (let v in l) s[v] = Rt(l[v]);

 let { initial: c, animate: u } = e, f = Ll(e), d = C0(e);

 t && d && !f && e.inherit !== !1 && (c === void 0 && (c = t.initial), u === void 0 && (u = t.animate));

 let h = n ? n.initial === !1 : !1;

 h = h || c === !1;

 let p = h ? u : c;

 return p && typeof p != "boolean" && !Is(p) && Mv(e, p, (v, b) => { for (let g in v) { let m = v[g];

 if (Array.isArray(m)) { let y = h ? m.length - 1 : 0;

 m = m[y] } m !== null && (s[g] = m) } for (let g in b) s[g] = b[g] }), a && u && c !== !1 && !Is(u) && Mv(e, u, v => { for (let b in v) if (u0(b)) { s.willChange = "transform";

 return } }), s } var T0 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, wI = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, kI = Vs.length;

 function E0(e, t, n) { let r = "", i = !0;

 for (let o = 0;

 o < kI;

 o++) { let s = Vs[o], a = e[s];

 if (a === void 0) continue;

 let l = !0;

 if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) { let c = T0(a, ad[s]);

 if (!l) { i = !1;

 let u = wI[s] || s;

 r += `${u}(${c}) ` } n && (t[s] = c) } } return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r } var CI = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

 function fo(e) { return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || CI.has(e) } var F0 = e => !fo(e);

 function P0(e) { e && (F0 = t => t.startsWith("on") ? !fo(t) : e(t)) } try { P0(cF().default) } catch { } function I0(e, t, n) { let r = {};

 for (let i in e) i === "values" && typeof e.values == "object" || (F0(i) || n === !0 && fo(i) || !t && !fo(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);

 return r } var Qn = new WeakMap, vl = { current: null }, Rd = { current: !1 };

 function _0() { if (Rd.current = !0, !!Ol) if (F.matchMedia) { let e = F.matchMedia("(prefers-reduced-motion)"), t = () => vl.current = e.matches;

 e.addListener(t), t() } else vl.current = !1 } function RI(e, t, n) { for (let r in t) { let i = t[r], o = n[r];

 if (Be(i)) e.addValue(r, i);

 else if (Be(o)) e.addValue(r, Ye(i, { owner: e }));

 else if (o !== i) if (e.hasValue(r)) { let s = e.getValue(r);

 s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i) } else { let s = e.getStaticValue(r);

 e.addValue(r, Ye(s !== void 0 ? s : i, { owner: e })) } } for (let r in n) t[r] === void 0 && e.removeValue(r);

 return t } var TI = [...e0, vt, gr], EI = e => TI.find(Jy(e)), Ov = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"], Td = class { scrapeMotionValuesFromProps(e, t, n) { return {} } constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, blockInitialAnimation: i, visualState: o }, s = {}) { this.applyWillChange = !1, this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = od, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => { this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection)) }, this.renderScheduledAt = 0, this.scheduleRender = () => { let f = Xn.now();

 this.renderScheduledAt < f && (this.renderScheduledAt = f, Q.render(this.render, !1, !0)) };

 let { latestValues: a, renderState: l } = o;

 this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = t.initial ? { ...a } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = s, this.blockInitialAnimation = !!i, this.isControllingVariants = Ll(t), this.isVariantNode = C0(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);

 let { willChange: c, ...u } = this.scrapeMotionValuesFromProps(t, {}, this);

 for (let f in u) { let d = u[f];

 a[f] !== void 0 && Be(d) && d.set(a[f], !1) } } mount(e) { this.current = e, Qn.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, n) => this.bindToMotionValue(n, t)), Rd.current || _0(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : vl.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext) } unmount() { Qn.delete(this.current), this.projection && this.projection.unmount(), Tt(this.notifyUpdate), Tt(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);

 for (let e in this.events) this.events[e].clear();

 for (let e in this.features) { let t = this.features[e];

 t && (t.unmount(), t.isMounted = !1) } this.current = null } bindToMotionValue(e, t) { this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();

 let n = Dr.has(e), r = t.on("change", s => { this.latestValues[e] = s, this.props.onUpdate && Q.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0) }), i = t.on("renderRequest", this.scheduleRender), o;

 F.MotionCheckAppearSync && (o = F.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => { r(), i(), o && o(), t.owner && t.stop() }) } sortNodePosition(e) { return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current) } updateFeatures() { let e = "animation";

 for (e in uo) { let t = uo[e];

 if (!t) continue;

 let { isEnabled: n, Feature: r } = t;

 if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) { let i = this.features[e];

 i.isMounted ? i.update() : (i.mount(), i.isMounted = !0) } } } triggerBuild() { this.build(this.renderState, this.latestValues, this.props) } measureViewportBox() { return this.current ? this.measureInstanceViewportBox(this.current, this.props) : je() } getStaticValue(e) { return this.latestValues[e] } setStaticValue(e, t) { this.latestValues[e] = t } update(e, t) { (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;

 for (let n = 0;

 n < Ov.length;

 n++) { let r = Ov[n];

 this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);

 let i = "on" + r, o = e[i];

 o && (this.propEventSubscriptions[r] = this.on(r, o)) } this.prevMotionValues = RI(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue() } getProps() { return this.props } getVariant(e) { return this.props.variants ? this.props.variants[e] : void 0 } getDefaultTransition() { return this.props.transition } getTransformPagePoint() { return this.props.transformPagePoint } getClosestVariantNode() { return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0 } addVariantChild(e) { let t = this.getClosestVariantNode();

 if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e) } addValue(e, t) { let n = this.values.get(e);

 t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get()) } removeValue(e) { this.values.delete(e);

 let t = this.valueSubscriptions.get(e);

 t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState) } hasValue(e) { return this.values.has(e) } getValue(e, t) { if (this.props.values && this.props.values[e]) return this.props.values[e];

 let n = this.values.get(e);

 return n === void 0 && t !== void 0 && (n = Ye(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n } readValue(e, t) { var n;

 let r = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, e, this.options);

 return r != null && (typeof r == "string" && (Qy(r) || Ky(r)) ? r = parseFloat(r) : !EI(r) && gr.test(t) && (r = t0(e, t)), this.setBaseTarget(e, Be(r) ? r.get() : r)), Be(r) ? r.get() : r } setBaseTarget(e, t) { this.baseTarget[e] = t } getBaseTarget(e) { var t;

 let { initial: n } = this.props, r;

 if (typeof n == "string" || typeof n == "object") { let o = dd(this.props, n, (t = this.presenceContext) === null || t === void 0 ? void 0 : t.custom);

 o && (r = o[e]) } if (n && r !== void 0) return r;

 let i = this.getBaseTargetFromProps(this.props, e);

 return i !== void 0 && !Be(i) ? i : this.initialValues[e] !== void 0 && r === void 0 ? void 0 : this.baseTarget[e] } on(e, t) { return this.events[e] || (this.events[e] = new fd), this.events[e].add(t) } notify(e, ...t) { this.events[e] && this.events[e].notify(...t) } };

 function FI(e) { if (typeof Proxy > "u") return e;

 let t = new Map, n = (...r) => e(...r);

 return new Proxy(n, { get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)) }) } var M0 = class { constructor(e, t, { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}) { if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = F, this.updatePoint = () => { if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;

 let u = pf(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, d = m0(u.offset, { x: 0, y: 0 }) >= 3;

 if (!f && !d) return;

 let { point: h } = u, { timestamp: p } = Xe;

 this.history.push({ ...h, timestamp: p });

 let { onStart: v, onMove: b } = this.handlers;

 f || (v && v(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, u) }, this.handlePointerMove = (u, f) => { this.lastMoveEvent = u, this.lastMoveEventInfo = hf(f, this.transformPagePoint), Q.update(this.updatePoint, !0) }, this.handlePointerUp = (u, f) => { this.end();

 let { onEnd: d, onSessionEnd: h, resumeAnimation: p } = this.handlers;

 if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;

 let v = pf(u.type === "pointercancel" ? this.lastMoveEventInfo : hf(f, this.transformPagePoint), this.history);

 this.startEvent && d && d(u, v), h && h(u, v) }, !h0(e)) return;

 this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.contextWindow = r || F;

 let o = _l(e), s = hf(o, this.transformPagePoint), { point: a } = s, { timestamp: l } = Xe;

 this.history = [{ ...a, timestamp: l }];

 let { onSessionStart: c } = t;

 c && c(e, pf(s, this.history)), this.removeListeners = qn(Yn(this.contextWindow, "pointermove", this.handlePointerMove), Yn(this.contextWindow, "pointerup", this.handlePointerUp), Yn(this.contextWindow, "pointercancel", this.handlePointerUp)) } updateHandlers(e) { this.handlers = e } end() { this.removeListeners && this.removeListeners(), Tt(this.updatePoint) } };

 function hf(e, t) { return t ? { point: t(e.point) } : e } function Lv(e, t) { return { x: e.x - t.x, y: e.y - t.y } } function pf({ point: e }, t) { return { point: e, delta: Lv(e, O0(t)), offset: Lv(e, PI(t)), velocity: II(t, .1) } } function PI(e) { return e[0] } function O0(e) { return e[e.length - 1] } function II(e, t) { if (e.length < 2) return { x: 0, y: 0 };

 let n = e.length - 1, r = null, i = O0(e);

 for (;

 n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Pn(t)));

)n--;

 if (!r) return { x: 0, y: 0 };

 let o = Gn(i.timestamp - r.timestamp);

 if (o === 0) return { x: 0, y: 0 };

 let s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };

 return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s } function _I(e, { min: t, max: n }, r) { return t !== void 0 && e < t ? e = r ? Oe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Oe(n, e, r.max) : Math.min(e, n)), e } function Vv(e, t, n) { return { min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0 } } function MI(e, { top: t, left: n, bottom: r, right: i }) { return { x: Vv(e.x, n, i), y: Vv(e.y, t, r) } } function Av(e, t) { let n = t.min - e.min, r = t.max - e.max;

 return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r } } function OI(e, t) { return { x: Av(e.x, t.x), y: Av(e.y, t.y) } } function LI(e, t) { let n = .5, r = jt(e), i = jt(t);

 return i > r ? n = vr(t.min, t.max - r, e.min) : r > i && (n = vr(e.min, e.max - i, t.min)), mr(0, 1, n) } function VI(e, t) { let n = {};

 return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n } var Df = .35;

 function AI(e = Df) { return e === !1 ? e = 0 : e === !0 && (e = Df), { x: Dv(e, "left", "right"), y: Dv(e, "top", "bottom") } } function Dv(e, t, n) { return { min: zv(e, t), max: zv(e, n) } } function zv(e, t) { return typeof e == "number" ? e : e[t] || 0 } function gn(e) { return [e("x"), e("y")] } function L0({ top: e, left: t, right: n, bottom: r }) { return { x: { min: t, max: n }, y: { min: e, max: r } } } function DI({ x: e, y: t }) { return { top: t.min, right: e.max, bottom: t.max, left: e.min } } function zI(e, t) { if (!t) return e;

 let n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });

 return { top: n.y, left: n.x, bottom: r.y, right: r.x } } function mf(e) { return e === void 0 || e === 1 } function zf({ scale: e, scaleX: t, scaleY: n }) { return !mf(e) || !mf(t) || !mf(n) } function bi(e) { return zf(e) || V0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY } function V0(e) { return Bv(e.x) || Bv(e.y) } function Bv(e) { return e && e !== "0%" } function yl(e, t, n) { let r = e - n, i = t * r;

 return n + i } function $v(e, t, n, r, i) { return i !== void 0 && (e = yl(e, i, r)), yl(e, n, r) + t } function Bf(e, t = 0, n = 1, r, i) { e.min = $v(e.min, t, n, r, i), e.max = $v(e.max, t, n, r, i) } function A0(e, { x: t, y: n }) { Bf(e.x, t.translate, t.scale, t.originPoint), Bf(e.y, n.translate, n.scale, n.originPoint) } var Nv = .999999999999, jv = 1.0000000000001;

 function BI(e, t, n, r = !1) { let i = n.length;

 if (!i) return;

 t.x = t.y = 1;

 let o, s;

 for (let a = 0;

 a < i;

 a++) { o = n[a], s = o.projectionDelta;

 let { visualElement: l } = o.options;

 l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && lo(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }), s && (t.x *= s.x.scale, t.y *= s.y.scale, A0(e, s)), r && bi(o.latestValues) && lo(e, o.latestValues)) } t.x < jv && t.x > Nv && (t.x = 1), t.y < jv && t.y > Nv && (t.y = 1) } function ao(e, t) { e.min = e.min + t, e.max = e.max + t } function Hv(e, t, n, r, i = .5) { let o = Oe(e.min, e.max, i);

 Bf(e, t, n, o, r) } function lo(e, t) { Hv(e.x, t.x, t.scaleX, t.scale, t.originX), Hv(e.y, t.y, t.scaleY, t.scale, t.originY) } function D0(e, t) { return L0(zI(e.getBoundingClientRect(), t)) } function $I(e, t, n) { let r = D0(e, n), { scroll: i } = t;

 return i && (ao(r.x, i.offset.x), ao(r.y, i.offset.y)), r } var z0 = ({ current: e }) => e ? e.ownerDocument.defaultView : null, NI = new WeakMap, jI = class { constructor(e) { this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = je(), this.visualElement = e } start(e, { snapToCursor: t = !1 } = {}) { let { presenceContext: n } = this.visualElement;

 if (n && n.isPresent === !1) return;

 let r = c => { let { dragSnapToOrigin: u } = this.getProps();

 u ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(_l(c, "page").point) }, i = (c, u) => { let { drag: f, dragPropagation: d, onDragStart: h } = this.getProps();

 if (f && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = v0(f), !this.openGlobalLock)) return;

 this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), gn(v => { let b = this.getAxisMotionValue(v).get() || 0;

 if (Un.test(b)) { let { projection: g } = this.visualElement;

 if (g && g.layout) { let m = g.layout.layoutBox[v];

 m && (b = jt(m) * (parseFloat(b) / 100)) } } this.originPoint[v] = b }), h && Q.postRender(() => h(c, u)), Lf(this.visualElement, "transform");

 let { animationState: p } = this.visualElement;

 p && p.setActive("whileDrag", !0) }, o = (c, u) => { let { dragPropagation: f, dragDirectionLock: d, onDirectionLock: h, onDrag: p } = this.getProps();

 if (!f && !this.openGlobalLock) return;

 let { offset: v } = u;

 if (d && this.currentDirection === null) { this.currentDirection = HI(v), this.currentDirection !== null && h && h(this.currentDirection);

 return } this.updateAxis("x", u.point, v), this.updateAxis("y", u.point, v), this.visualElement.render(), p && p(c, u) }, s = (c, u) => this.stop(c, u), a = () => gn(c => { var u;

 return this.getAnimationState(c) === "paused" && ((u = this.getAxisMotionValue(c).animation) === null || u === void 0 ? void 0 : u.play()) }), { dragSnapToOrigin: l } = this.getProps();

 this.panSession = new M0(e, { onSessionStart: r, onStart: i, onMove: o, onSessionEnd: s, resumeAnimation: a }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: l, contextWindow: z0(this.visualElement) }) } stop(e, t) { let n = this.isDragging;

 if (this.cancel(), !n) return;

 let { velocity: r } = t;

 this.startAnimation(r);

 let { onDragEnd: i } = this.getProps();

 i && Q.postRender(() => i(e, t)) } cancel() { this.isDragging = !1;

 let { projection: e, animationState: t } = this.visualElement;

 e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;

 let { dragPropagation: n } = this.getProps();

 !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), t && t.setActive("whileDrag", !1) } updateAxis(e, t, n) { let { drag: r } = this.getProps();

 if (!n || !ol(e, r, this.currentDirection)) return;

 let i = this.getAxisMotionValue(e), o = this.originPoint[e] + n[e];

 this.constraints && this.constraints[e] && (o = _I(o, this.constraints[e], this.elastic[e])), i.set(o) } resolveConstraints() { var e;

 let { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, i = this.constraints;

 t && so(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = MI(r.layoutBox, t) : this.constraints = !1, this.elastic = AI(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && gn(o => { this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = VI(r.layoutBox[o], this.constraints[o])) }) } resolveRefConstraints() { let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();

 if (!e || !so(e)) return !1;

 let n = e.current;

 en(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");

 let { projection: r } = this.visualElement;

 if (!r || !r.layout) return !1;

 let i = $I(n, r.root, this.visualElement.getTransformPagePoint()), o = OI(r.layout.layoutBox, i);

 if (t) { let s = t(DI(o));

 this.hasMutatedConstraints = !!s, s && (o = L0(s)) } return o } startAnimation(e) { let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: s } = this.getProps(), a = this.constraints || {}, l = gn(c => { if (!ol(c, t, this.currentDirection)) return;

 let u = a && a[c] || {};

 o && (u = { min: 0, max: 0 });

 let f = r ? 200 : 1e6, d = r ? 40 : 1e7, h = { type: "inertia", velocity: n ? e[c] : 0, bounceStiffness: f, bounceDamping: d, timeConstant: 750, restDelta: 1, restSpeed: 10, ...i, ...u };

 return this.startAxisValueAnimation(c, h) });

 return Promise.all(l).then(s) } startAxisValueAnimation(e, t) { let n = this.getAxisMotionValue(e);

 return Lf(this.visualElement, e), n.start(pd(e, n, 0, t, this.visualElement, !1)) } stopAnimation() { gn(e => this.getAxisMotionValue(e).stop()) } pauseAnimation() { gn(e => { var t;

 return (t = this.getAxisMotionValue(e).animation) === null || t === void 0 ? void 0 : t.pause() }) } getAnimationState(e) { var t;

 return (t = this.getAxisMotionValue(e).animation) === null || t === void 0 ? void 0 : t.state } getAxisMotionValue(e) { let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps(), r = n[t];

 return r || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0) } snapToCursor(e) { gn(t => { let { drag: n } = this.getProps();

 if (!ol(t, n, this.currentDirection)) return;

 let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);

 if (r && r.layout) { let { min: o, max: s } = r.layout.layoutBox[t];

 i.set(e[t] - Oe(o, s, .5)) } }) } scalePositionWithinConstraints() { if (!this.visualElement.current) return;

 let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;

 if (!so(t) || !n || !this.constraints) return;

 this.stopAnimation();

 let r = { x: 0, y: 0 };

 gn(o => { let s = this.getAxisMotionValue(o);

 if (s && this.constraints !== !1) { let a = s.get();

 r[o] = LI({ min: a, max: a }, this.constraints[o]) } });

 let { transformTemplate: i } = this.visualElement.getProps();

 this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), gn(o => { if (!ol(o, e, null)) return;

 let s = this.getAxisMotionValue(o), { min: a, max: l } = this.constraints[o];

 s.set(Oe(a, l, r[o])) }) } addListeners() { if (!this.visualElement.current) return;

 NI.set(this.visualElement, this);

 let e = this.visualElement.current, t = Yn(e, "pointerdown", a => { let { drag: l, dragListener: c = !0 } = this.getProps();

 l && c && this.start(a) }), n = () => { let { dragConstraints: a } = this.getProps();

 so(a) && a.current && (this.constraints = this.resolveRefConstraints()) }, { projection: r } = this.visualElement, i = r.addEventListener("measure", n);

 r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), Q.read(n);

 let o = pr(F, "resize", () => this.scalePositionWithinConstraints()), s = r.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: l }) => { this.isDragging && l && (gn(c => { let u = this.getAxisMotionValue(c);

 u && (this.originPoint[c] += a[c].translate, u.set(u.get() + a[c].translate)) }), this.visualElement.render()) });

 return () => { o(), t(), i(), s && s() } } getProps() { let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: o = Df, dragMomentum: s = !0 } = e;

 return { ...e, drag: t, dragDirectionLock: n, dragPropagation: r, dragConstraints: i, dragElastic: o, dragMomentum: s } } };

 function ol(e, t, n) { return (t === !0 || t === e) && (n === null || n === e) } function HI(e, t = 10) { let n = null;

 return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n } var WI = class extends zr { constructor(e) { super(e), this.removeGroupControls = yt, this.removeListeners = yt, this.controls = new jI(e) } mount() { let { dragControls: e } = this.node.getProps();

 e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || yt } unmount() { this.removeGroupControls(), this.removeListeners() } }, Wv = e => (t, n) => { e && Q.postRender(() => e(t, n)) }, UI = class extends zr { constructor() { super(...arguments), this.removePointerDownListener = yt } onPointerDown(e) { this.session = new M0(e, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: z0(this.node) }) } createPanHandlers() { let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();

 return { onSessionStart: Wv(e), onStart: Wv(t), onMove: n, onEnd: (i, o) => { delete this.session, r && Q.postRender(() => r(i, o)) } } } mount() { this.removePointerDownListener = Yn(this.node.current, "pointerdown", e => this.onPointerDown(e)) } update() { this.session && this.session.updateHandlers(this.createPanHandlers()) } unmount() { this.removePointerDownListener(), this.session && this.session.end() } }, cl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };

 function Uv(e, t) { return t.max === t.min ? 0 : e / (t.max - t.min) * 100 } var vs = { correct: (e, t) => { if (!t.target) return e;

 if (typeof e == "string") if (J.test(e)) e = parseFloat(e);

 else return e;

 let n = Uv(e, t.target.x), r = Uv(e, t.target.y);

 return `${n}% ${r}%` } }, GI = { correct: (e, { treeScale: t, projectionDelta: n }) => { let r = e, i = gr.parse(e);

 if (i.length > 5) return r;

 let o = gr.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;

 i[0 + s] /= a, i[1 + s] /= l;

 let c = Oe(a, l, .5);

 return typeof i[2 + s] == "number" && (i[2 + s] /= c), typeof i[3 + s] == "number" && (i[3 + s] /= c), o(i) } }, qI = class extends ye { componentDidMount() { let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;

 wd(XI), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => { this.safeToRemove() }), i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })), cl.hasEverUpdated = !0 } getSnapshotBeforeUpdate(e) { let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, o = n.projection;

 return o && (o.isPresent = i, r || e.layoutDependency !== t || t === void 0 ? o.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? o.promote() : o.relegate() || Q.postRender(() => { let s = o.getStack();

 (!s || !s.members.length) && this.safeToRemove() }))), null } componentDidUpdate() { let { projection: e } = this.props.visualElement;

 e && (e.root.didUpdate(), kd.postRender(() => { !e.currentAnimation && e.isLead() && this.safeToRemove() })) } componentWillUnmount() { let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;

 r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r)) } safeToRemove() { let { safeToRemove: e } = this.props;

 e && e() } render() { return null } };

 function B0(e) { let [t, n] = Sd(), r = L(Ms);

 return k(qI, { ...e, layoutGroup: r, switchLayoutGroup: L(Ml), isPresent: t, safeToRemove: n }) } var XI = { borderRadius: { ...vs, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: vs, borderTopRightRadius: vs, borderBottomLeftRadius: vs, borderBottomRightRadius: vs, boxShadow: GI }, $0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], YI = $0.length, Gv = e => typeof e == "string" ? parseFloat(e) : e, qv = e => typeof e == "number" || J.test(e);

 function KI(e, t, n, r, i, o) { i ? (e.opacity = Oe(0, n.opacity !== void 0 ? n.opacity : 1, QI(r)), e.opacityExit = Oe(t.opacity !== void 0 ? t.opacity : 1, 0, ZI(r))) : o && (e.opacity = Oe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));

 for (let s = 0;

 s < YI;

 s++) { let a = `border${$0[s]}Radius`, l = Xv(t, a), c = Xv(n, a);

 if (l === void 0 && c === void 0) continue;

 l || (l = 0), c || (c = 0), l === 0 || c === 0 || qv(l) === qv(c) ? (e[a] = Math.max(Oe(Gv(l), Gv(c), r), 0), (Un.test(c) || Un.test(l)) && (e[a] += "%")) : e[a] = c } (t.rotate || n.rotate) && (e.rotate = Oe(t.rotate || 0, n.rotate || 0, r)) } function Xv(e, t) { return e[t] !== void 0 ? e[t] : e.borderRadius } var QI = N0(0, .5, Xf), ZI = N0(.5, .95, yt);

 function N0(e, t, n) { return r => r < e ? 0 : r > t ? 1 : n(vr(e, t, r)) } function Yv(e, t) { e.min = t.min, e.max = t.max } function mn(e, t) { Yv(e.x, t.x), Yv(e.y, t.y) } function Kv(e, t) { e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin } function Qv(e, t, n, r, i) { return e -= t, e = yl(e, 1 / n, r), i !== void 0 && (e = yl(e, 1 / i, r)), e } function JI(e, t = 0, n = 1, r = .5, i, o = e, s = e) { if (Un.test(t) && (t = parseFloat(t), t = Oe(s.min, s.max, t / 100) - s.min), typeof t != "number") return;

 let a = Oe(o.min, o.max, r);

 e === o && (a -= t), e.min = Qv(e.min, t, n, a, i), e.max = Qv(e.max, t, n, a, i) } function Zv(e, t, [n, r, i], o, s) { JI(e, t[n], t[r], t[i], t.scale, o, s) } var e_ = ["x", "scaleX", "originX"], t_ = ["y", "scaleY", "originY"];

 function Jv(e, t, n, r) { Zv(e.x, t, e_, n ? n.x : void 0, r ? r.x : void 0), Zv(e.y, t, t_, n ? n.y : void 0, r ? r.y : void 0) } function ey(e) { return e.translate === 0 && e.scale === 1 } function j0(e) { return ey(e.x) && ey(e.y) } function ty(e, t) { return e.min === t.min && e.max === t.max } function n_(e, t) { return ty(e.x, t.x) && ty(e.y, t.y) } function ny(e, t) { return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max) } function H0(e, t) { return ny(e.x, t.x) && ny(e.y, t.y) } function ry(e) { return jt(e.x) / jt(e.y) } function iy(e, t) { return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint } var r_ = class { constructor() { this.members = [] } add(e) { ud(this.members, e), e.scheduleRender() } remove(e) { if (Rl(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) { let t = this.members[this.members.length - 1];

 t && this.promote(t) } } relegate(e) { let t = this.members.findIndex(r => e === r);

 if (t === 0) return !1;

 let n;

 for (let r = t;

 r >= 0;

 r--) { let i = this.members[r];

 if (i.isPresent !== !1) { n = i;

 break } } return n ? (this.promote(n), !0) : !1 } promote(e, t) { let n = this.lead;

 if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) { n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);

 let { crossfade: r } = e.options;

 r === !1 && n.hide() } } exitAnimationComplete() { this.members.forEach(e => { let { options: t, resumingFrom: n } = e;

 t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete() }) } scheduleRender() { this.members.forEach(e => { e.instance && e.scheduleRender(!1) }) } removeLeadSnapshot() { this.lead && this.lead.snapshot && (this.lead.snapshot = void 0) } };

 function i_(e, t, n) { let r = "", i = e.x.translate / t.x, o = e.y.translate / t.y, s = n?.z || 0;

 if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) { let { transformPerspective: c, rotate: u, rotateX: f, rotateY: d, skewX: h, skewY: p } = n;

 c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), h && (r += `skewX(${h}deg) `), p && (r += `skewY(${p}deg) `) } let a = e.x.scale * t.x, l = e.y.scale * t.y;

 return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none" } function W0(e) { return e instanceof SVGElement && e.tagName !== "svg" } function U0(e, t, n) { let r = Be(e) ? e : Ye(e);

 return r.start(pd("", r, t, n)), r.animation } var xi = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 }, Ss = typeof F < "u" && F.MotionDebug !== void 0, gf = ["", "X", "Y", "Z"], o_ = { visibility: "hidden" }, oy = 1e3, s_ = 0;

 function vf(e, t, n, r) { let { latestValues: i } = t;

 i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0)) } function G0(e) { if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;

 let { visualElement: t } = e.options;

 if (!t) return;

 let n = c0(t);

 if (F.MotionHasOptimisedAnimation(n, "transform")) { let { layout: i, layoutId: o } = e.options;

 F.MotionCancelOptimisedAnimation(n, "transform", Q, !(i || o)) } let { parent: r } = e;

 r && !r.hasCheckedOptimisedAppear && G0(r) } function q0({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) { return class { constructor(s = {}, a = t?.()) { this.id = s_++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => { this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots()) }, this.updateProjection = () => { this.projectionUpdateScheduled = !1, Ss && (xi.totalNodes = xi.resolvedTargetDeltas = xi.recalculatedProjection = 0), this.nodes.forEach(c_), this.nodes.forEach(p_), this.nodes.forEach(m_), this.nodes.forEach(u_), Ss && F.MotionDebug.record(xi) }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;

 for (let l = 0;

 l < this.path.length;

 l++)this.path[l].shouldResetTransform = !0;

 this.root === this && (this.nodes = new x0) } addEventListener(s, a) { return this.eventHandlers.has(s) || this.eventHandlers.set(s, new fd), this.eventHandlers.get(s).add(a) } notifyListeners(s, ...a) { let l = this.eventHandlers.get(s);

 l && l.notify(...a) } hasListeners(s) { return this.eventHandlers.has(s) } mount(s, a = this.root.hasTreeAnimated) { if (this.instance) return;

 this.isSVG = W0(s), this.instance = s;

 let { layoutId: l, layout: c, visualElement: u } = this.options;

 if (u && !u.current && u.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) { let f, d = () => this.root.updateBlockedByResize = !1;

 e(s, () => { this.root.updateBlockedByResize = !0, f && f(), f = S0(d, 250), cl.hasAnimatedSinceResize && (cl.hasAnimatedSinceResize = !1, this.nodes.forEach(ay)) }) } l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: h, layout: p }) => { if (this.isTreeAnimationBlocked()) { this.target = void 0, this.relativeTarget = void 0;

 return } let v = this.options.transition || u.getDefaultTransition() || x_, { onLayoutAnimationStart: b, onLayoutAnimationComplete: g } = u.getProps(), m = !this.targetLayout || !H0(this.targetLayout, p) || h, y = !d && h;

 if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || y || d && (m || !this.currentAnimation)) { this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, y);

 let x = { ...hd(v, "layout"), onPlay: b, onComplete: g };

 (u.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x) } else d || ay(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();

 this.targetLayout = p }) } unmount() { this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);

 let s = this.getStack();

 s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Tt(this.updateProjection) } blockUpdate() { this.updateManuallyBlocked = !0 } unblockUpdate() { this.updateManuallyBlocked = !1 } isUpdateBlocked() { return this.updateManuallyBlocked || this.updateBlockedByResize } isTreeAnimationBlocked() { return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1 } startUpdate() { this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(g_), this.animationId++) } getTransformTemplate() { let { visualElement: s } = this.options;

 return s && s.getProps().transformTemplate } willUpdate(s = !0) { if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) { this.options.onExitComplete && this.options.onExitComplete();

 return } if (F.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && G0(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;

 this.isLayoutDirty = !0;

 for (let u = 0;

 u < this.path.length;

 u++) { let f = this.path[u];

 f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1) } let { layoutId: a, layout: l } = this.options;

 if (a === void 0 && !l) return;

 let c = this.getTransformTemplate();

 this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate") } update() { if (this.updateScheduled = !1, this.isUpdateBlocked()) { this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(sy);

 return } this.isUpdating || this.nodes.forEach(d_), this.isUpdating = !1, this.nodes.forEach(h_), this.nodes.forEach(a_), this.nodes.forEach(l_), this.clearAllSnapshots();

 let a = Xn.now();

 Xe.delta = mr(0, 1e3 / 60, a - Xe.timestamp), Xe.timestamp = a, Xe.isProcessing = !0, al.update.process(Xe), al.preRender.process(Xe), al.render.process(Xe), Xe.isProcessing = !1 } didUpdate() { this.updateScheduled || (this.updateScheduled = !0, kd.read(this.scheduleUpdate)) } clearAllSnapshots() { this.nodes.forEach(f_), this.sharedNodes.forEach(v_) } scheduleUpdateProjection() { this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Q.preRender(this.updateProjection, !1, !0)) } scheduleCheckAfterUnmount() { Q.postRender(() => { this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed() }) } updateSnapshot() { this.snapshot || !this.instance || (this.snapshot = this.measure()) } updateLayout() { if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;

 if (this.resumeFrom && !this.resumeFrom.instance) for (let l = 0;

 l < this.path.length;

 l++)this.path[l].updateScroll();

 let s = this.layout;

 this.layout = this.measure(!1), this.layoutCorrected = je(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);

 let { visualElement: a } = this.options;

 a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0) } updateScroll(s = "measure") { let a = !!(this.options.layoutScroll && this.instance);

 if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) { let l = r(this.instance);

 this.scroll = { animationId: this.root.animationId, phase: s, isRoot: l, offset: n(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : l } } } resetTransform() { if (!i) return;

 let s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !j0(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;

 s && (a || bi(this.latestValues) || u) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender()) } measure(s = !0) { let a = this.measurePageBox(), l = this.removeElementScroll(a);

 return s && (l = this.removeTransform(l)), S_(l), { animationId: this.root.animationId, measuredBox: a, layoutBox: l, latestValues: {}, source: this.id } } measurePageBox() { var s;

 let { visualElement: a } = this.options;

 if (!a) return je();

 let l = a.measureViewportBox();

 if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(w_))) { let { scroll: u } = this.root;

 u && (ao(l.x, u.offset.x), ao(l.y, u.offset.y)) } return l } removeElementScroll(s) { var a;

 let l = je();

 if (mn(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return l;

 for (let c = 0;

 c < this.path.length;

 c++) { let u = this.path[c], { scroll: f, options: d } = u;

 u !== this.root && f && d.layoutScroll && (f.wasRoot && mn(l, s), ao(l.x, f.offset.x), ao(l.y, f.offset.y)) } return l } applyTransform(s, a = !1) { let l = je();

 mn(l, s);

 for (let c = 0;

 c < this.path.length;

 c++) { let u = this.path[c];

 !a && u.options.layoutScroll && u.scroll && u !== u.root && lo(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }), bi(u.latestValues) && lo(l, u.latestValues) } return bi(this.latestValues) && lo(l, this.latestValues), l } removeTransform(s) { let a = je();

 mn(a, s);

 for (let l = 0;

 l < this.path.length;

 l++) { let c = this.path[l];

 if (!c.instance || !bi(c.latestValues)) continue;

 zf(c.latestValues) && c.updateSnapshot();

 let u = je(), f = c.measurePageBox();

 mn(u, f), Jv(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u) } return bi(this.latestValues) && Jv(a, this.latestValues), a } setTargetDelta(s) { this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0 } setOptions(s) { this.options = { ...this.options, ...s, crossfade: s.crossfade !== void 0 ? s.crossfade : !0 } } clearMeasurements() { this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1 } forceRelativeParentToResolveTarget() { this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Xe.timestamp && this.relativeParent.resolveTargetDelta(!0) } resolveTargetDelta(s = !1) { var a;

 let l = this.getLead();

 this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);

 let c = !!this.resumingFrom || this !== l;

 if (!(s || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;

 let { layout: f, layoutId: d } = this.options;

 if (!(!this.layout || !(f || d))) { if (this.resolvedRelativeTargetAt = Xe.timestamp, !this.targetDelta && !this.relativeTarget) { let h = this.getClosestProjectingParent();

 h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = je(), this.relativeTargetOrigin = je(), Rs(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), mn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0 } if (!(!this.relativeTarget && !this.targetDelta)) { if (this.target || (this.target = je(), this.targetWithTransforms = je()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), cI(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : mn(this.target, this.layout.layoutBox), A0(this.target, this.targetDelta)) : mn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) { this.attemptToResolveRelativeTarget = !1;

 let h = this.getClosestProjectingParent();

 h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = je(), this.relativeTargetOrigin = je(), Rs(this.relativeTargetOrigin, this.target, h.target), mn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0 } Ss && xi.resolvedTargetDeltas++ } } } getClosestProjectingParent() { if (!(!this.parent || zf(this.parent.latestValues) || V0(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent() } isProjecting() { return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout) } calcProjection() { var s;

 let a = this.getLead(), l = !!this.resumingFrom || this !== a, c = !0;

 if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === Xe.timestamp && (c = !1), c) return;

 let { layout: u, layoutId: f } = this.options;

 if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || f)) return;

 mn(this.layoutCorrected, this.layout.layoutBox);

 let d = this.treeScale.x, h = this.treeScale.y;

 BI(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = je());

 let { target: p } = a;

 if (!p) { this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());

 return } !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Kv(this.prevProjectionDelta.x, this.projectionDelta.x), Kv(this.prevProjectionDelta.y, this.projectionDelta.y)), Cs(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== h || !iy(this.projectionDelta.x, this.prevProjectionDelta.x) || !iy(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p)), Ss && xi.recalculatedProjection++ } hide() { this.isVisible = !1 } show() { this.isVisible = !0 } scheduleRender(s = !0) { var a;

 if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) { let l = this.getStack();

 l && l.scheduleRender() } this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0) } createProjectionDeltas() { this.prevProjectionDelta = oo(), this.projectionDelta = oo(), this.projectionDeltaWithTransform = oo() } setAnimationOrigin(s, a = !1) { let l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, f = oo();

 (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;

 let d = je(), h = l ? l.source : void 0, p = this.layout ? this.layout.source : void 0, v = h !== p, b = this.getStack(), g = !b || b.members.length <= 1, m = !!(v && !g && this.options.crossfade === !0 && !this.path.some(b_));

 this.animationProgress = 0;

 let y;

 this.mixTargetDelta = x => { let C = x / 1e3;

 ly(f.x, s.x, C), ly(f.y, s.y, C), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Rs(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), y_(this.relativeTarget, this.relativeTargetOrigin, d, C), y && n_(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = je()), mn(y, this.relativeTarget)), v && (this.animationValues = u, KI(u, c, this.latestValues, C, m, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0) } startAnimation(s) { this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Tt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Q.update(() => { cl.hasAnimatedSinceResize = !0, this.currentAnimation = U0(0, oy, { ...s, onUpdate: a => { this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a) }, onComplete: () => { s.onComplete && s.onComplete(), this.completeAnimation() } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0 }) } completeAnimation() { this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);

 let s = this.getStack();

 s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete") } finishAnimation() { this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(oy), this.currentAnimation.stop()), this.completeAnimation() } applyTransformsToTarget() { let s = this.getLead(), { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;

 if (!(!a || !l || !c)) { if (this !== s && this.layout && c && X0(this.options.animationType, this.layout.layoutBox, c.layoutBox)) { l = this.target || je();

 let f = jt(this.layout.layoutBox.x);

 l.x.min = s.target.x.min, l.x.max = l.x.min + f;

 let d = jt(this.layout.layoutBox.y);

 l.y.min = s.target.y.min, l.y.max = l.y.min + d } mn(a, l), lo(a, u), Cs(this.projectionDeltaWithTransform, this.layoutCorrected, a, u) } } registerSharedNode(s, a) { this.sharedNodes.has(s) || this.sharedNodes.set(s, new r_), this.sharedNodes.get(s).add(a);

 let c = a.options.initialPromotionConfig;

 a.promote({ transition: c ? c.transition : void 0, preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0 }) } isLead() { let s = this.getStack();

 return s ? s.lead === this : !0 } getLead() { var s;

 let { layoutId: a } = this.options;

 return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this } getPrevLead() { var s;

 let { layoutId: a } = this.options;

 return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0 } getStack() { let { layoutId: s } = this.options;

 if (s) return this.root.sharedNodes.get(s) } promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) { let c = this.getStack();

 c && c.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a }) } relegate() { let s = this.getStack();

 return s ? s.relegate(this) : !1 } resetSkewAndRotation() { let { visualElement: s } = this.options;

 if (!s) return;

 let a = !1, { latestValues: l } = s;

 if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;

 let c = {};

 l.z && vf("z", s, c, this.animationValues);

 for (let u = 0;

 u < gf.length;

 u++)vf(`rotate${gf[u]}`, s, c, this.animationValues), vf(`skew${gf[u]}`, s, c, this.animationValues);

 s.render();

 for (let u in c) s.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);

 s.scheduleRender() } getProjectionStyles(s) { var a, l;

 if (!this.instance || this.isSVG) return;

 if (!this.isVisible) return o_;

 let c = { visibility: "" }, u = this.getTransformTemplate();

 if (this.needsReset) return this.needsReset = !1, c.opacity = "", c.pointerEvents = Rt(s?.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;

 let f = this.getLead();

 if (!this.projectionDelta || !this.layout || !f.target) { let v = {};

 return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Rt(s?.pointerEvents) || ""), this.hasProjected && !bi(this.latestValues) && (v.transform = u ? u({}, "") : "none", this.hasProjected = !1), v } let d = f.animationValues || f.latestValues;

 this.applyTransformsToTarget(), c.transform = i_(this.projectionDeltaWithTransform, this.treeScale, d), u && (c.transform = u(d, c.transform));

 let { x: h, y: p } = this.projectionDelta;

 c.transformOrigin = `${h.origin * 100}% ${p.origin * 100}% 0`, f.animationValues ? c.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;

 for (let v in gl) { if (d[v] === void 0) continue;

 let { correct: b, applyTo: g } = gl[v], m = c.transform === "none" ? d[v] : b(d[v], f);

 if (g) { let y = g.length;

 for (let x = 0;

 x < y;

 x++)c[g[x]] = m } else c[v] = m } return this.options.layoutId && (c.pointerEvents = f === this ? Rt(s?.pointerEvents) || "" : "none"), c } clearSnapshot() { this.resumeFrom = this.snapshot = void 0 } resetTree() { this.root.nodes.forEach(s => { var a;

 return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop() }), this.root.nodes.forEach(sy), this.root.sharedNodes.clear() } } } function a_(e) { e.updateLayout() } function l_(e) { var t;

 let n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;

 if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) { let { layoutBox: r, measuredBox: i } = e.layout, { animationType: o } = e.options, s = n.source !== e.layout.source;

 o === "size" ? gn(f => { let d = s ? n.measuredBox[f] : n.layoutBox[f], h = jt(d);

 d.min = r[f].min, d.max = d.min + h }) : X0(o, n.layoutBox, r) && gn(f => { let d = s ? n.measuredBox[f] : n.layoutBox[f], h = jt(r[f]);

 d.max = d.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + h) });

 let a = oo();

 Cs(a, r, n.layoutBox);

 let l = oo();

 s ? Cs(l, e.applyTransform(i, !0), n.measuredBox) : Cs(l, r, n.layoutBox);

 let c = !j0(a), u = !1;

 if (!e.resumeFrom) { let f = e.getClosestProjectingParent();

 if (f && !f.resumeFrom) { let { snapshot: d, layout: h } = f;

 if (d && h) { let p = je();

 Rs(p, n.layoutBox, d.layoutBox);

 let v = je();

 Rs(v, r, h.layoutBox), H0(p, v) || (u = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = p, e.relativeParent = f) } } } e.notifyListeners("didUpdate", { layout: r, snapshot: n, delta: l, layoutDelta: a, hasLayoutChanged: c, hasRelativeTargetChanged: u }) } else if (e.isLead()) { let { onExitComplete: r } = e.options;

 r && r() } e.options.transition = void 0 } function c_(e) { Ss && xi.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)) } function u_(e) { e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1 } function f_(e) { e.clearSnapshot() } function sy(e) { e.clearMeasurements() } function d_(e) { e.isLayoutDirty = !1 } function h_(e) { let { visualElement: t } = e.options;

 t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform() } function ay(e) { e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0 } function p_(e) { e.resolveTargetDelta() } function m_(e) { e.calcProjection() } function g_(e) { e.resetSkewAndRotation() } function v_(e) { e.removeLeadSnapshot() } function ly(e, t, n) { e.translate = Oe(t.translate, 0, n), e.scale = Oe(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint } function cy(e, t, n, r) { e.min = Oe(t.min, n.min, r), e.max = Oe(t.max, n.max, r) } function y_(e, t, n, r) { cy(e.x, t.x, n.x, r), cy(e.y, t.y, n.y, r) } function b_(e) { return e.animationValues && e.animationValues.opacityExit !== void 0 } var x_ = { duration: .45, ease: [.4, 0, .1, 1] }, uy = e => typeof Me < "u" && Me.userAgent && Me.userAgent.toLowerCase().includes(e), fy = uy("applewebkit/") && !uy("chrome/") ? Math.round : yt;

 function dy(e) { e.min = fy(e.min), e.max = fy(e.max) } function S_(e) { dy(e.x), dy(e.y) } function X0(e, t, n) { return e === "position" || e === "preserve-aspect" && !lI(ry(t), ry(n), .2) } function w_(e) { var t;

 return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot) } var k_ = q0({ attachResizeListener: (e, t) => pr(e, "resize", t), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => !0 }), ki = { current: void 0 }, Y0 = q0({ measureScroll: e => ({ x: e.scrollLeft, y: e.scrollTop }), defaultParent: () => { if (!ki.current) { let e = new k_({});

 e.mount(F), e.setOptions({ layoutScroll: !0 }), ki.current = e } return ki.current }, resetTransform: (e, t) => { e.style.transform = t !== void 0 ? t : "none" }, checkIsScrollRoot: e => F.getComputedStyle(e).position === "fixed" }), K0 = { pan: { Feature: UI }, drag: { Feature: WI, ProjectionNode: Y0, MeasureLayout: B0 } };

 function hy(e, t) { let n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", i = (o, s) => { if (o.pointerType === "touch" || xd()) return;

 let a = e.getProps();

 e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);

 let l = a[r];

 l && Q.postRender(() => l(o, s)) };

 return Yn(e.current, n, i, { passive: !e.getProps()[r] }) } var C_ = class extends zr { mount() { this.unmount = qn(hy(this.node, !0), hy(this.node, !1)) } unmount() { } }, R_ = class extends zr { constructor() { super(...arguments), this.isActive = !1 } onFocus() { let e = !1;

 try { e = this.node.current.matches(":focus-visible") } catch { e = !0 } !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0) } onBlur() { !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1) } mount() { this.unmount = qn(pr(this.node.current, "focus", () => this.onFocus()), pr(this.node.current, "blur", () => this.onBlur())) } unmount() { } }, Q0 = (e, t) => t ? e === t ? !0 : Q0(e, t.parentElement) : !1;

 function yf(e, t) { if (!t) return;

 let n = new PointerEvent("pointer" + e);

 t(n, _l(n)) } var T_ = class extends zr { constructor() { super(...arguments), this.removeStartListeners = yt, this.removeEndListeners = yt, this.removeAccessibleListeners = yt, this.startPointerPress = (e, t) => { if (this.isPressing) return;

 this.removeEndListeners();

 let n = this.node.getProps(), i = Yn(F, "pointerup", (s, a) => { if (!this.checkPressEnd()) return;

 let { onTap: l, onTapCancel: c, globalTapTarget: u } = this.node.getProps(), f = !u && !Q0(this.node.current, s.target) ? c : l;

 f && Q.update(() => f(s, a)) }, { passive: !(n.onTap || n.onPointerUp) }), o = Yn(F, "pointercancel", (s, a) => this.cancelPress(s, a), { passive: !(n.onTapCancel || n.onPointerCancel) });

 this.removeEndListeners = qn(i, o), this.startPress(e, t) }, this.startAccessiblePress = () => { let e = i => { if (i.key !== "Enter" || this.isPressing) return;

 let o = s => { s.key !== "Enter" || !this.checkPressEnd() || yf("up", (a, l) => { let { onTap: c } = this.node.getProps();

 c && Q.postRender(() => c(a, l)) }) };

 this.removeEndListeners(), this.removeEndListeners = pr(this.node.current, "keyup", o), yf("down", (s, a) => { this.startPress(s, a) }) }, t = pr(this.node.current, "keydown", e), n = () => { this.isPressing && yf("cancel", (i, o) => this.cancelPress(i, o)) }, r = pr(this.node.current, "blur", n);

 this.removeAccessibleListeners = qn(t, r) } } startPress(e, t) { this.isPressing = !0;

 let { onTapStart: n, whileTap: r } = this.node.getProps();

 r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && Q.postRender(() => n(e, t)) } checkPressEnd() { return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !xd() } cancelPress(e, t) { if (!this.checkPressEnd()) return;

 let { onTapCancel: n } = this.node.getProps();

 n && Q.postRender(() => n(e, t)) } mount() { let e = this.node.getProps(), t = Yn(e.globalTapTarget ? F : this.node.current, "pointerdown", this.startPointerPress, { passive: !(e.onTapStart || e.onPointerStart) }), n = pr(this.node.current, "focus", this.startAccessiblePress);

 this.removeStartListeners = qn(t, n) } unmount() { this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners() } }, $f = new WeakMap, bf = new WeakMap, E_ = e => { let t = $f.get(e.target);

 t && t(e) }, F_ = e => { e.forEach(E_) };

 function P_({ root: e, ...t }) { let n = e || document;

 bf.has(n) || bf.set(n, {});

 let r = bf.get(n), i = JSON.stringify(t);

 return r[i] || (r[i] = new IntersectionObserver(F_, { root: e, ...t })), r[i] } function I_(e, t, n) { let r = P_(t);

 return $f.set(e, n), r.observe(e), () => { $f.delete(e), r.unobserve(e) } } var __ = { some: 0, all: 1 }, M_ = class extends zr { constructor() { super(...arguments), this.hasEnteredView = !1, this.isInView = !1 } startObserver() { this.unmount();

 let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, o = { root: t ? t.current : void 0, rootMargin: n, threshold: typeof r == "number" ? r : __[r] }, s = a => { let { isIntersecting: l } = a;

 if (this.isInView === l || (this.isInView = l, i && !l && this.hasEnteredView)) return;

 l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);

 let { onViewportEnter: c, onViewportLeave: u } = this.node.getProps(), f = l ? c : u;

 f && f(a) };

 return I_(this.node.current, o, s) } mount() { this.startObserver() } update() { if (typeof IntersectionObserver > "u") return;

 let { props: e, prevProps: t } = this.node;

["amount", "margin", "root"].some(O_(e, t)) && this.startObserver() } unmount() { } };

 function O_({ viewport: e = {} }, { viewport: t = {} } = {}) { return n => e[n] !== t[n] } var Z0 = { inView: { Feature: M_ }, tap: { Feature: T_ }, focus: { Feature: R_ }, hover: { Feature: C_ } }, J0 = { layout: { ProjectionNode: Y0, MeasureLayout: B0 } }, L_ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

 function Ed(e) { return typeof e != "string" || e.includes("-") ? !1 : !!(L_.indexOf(e) > -1 || /[A-Z]/u.test(e)) } function eb(e, { style: t, vars: n }, r, i) { Object.assign(e.style, t, i && i.getProjectionStyles(r));

 for (let o in n) e.style.setProperty(o, n[o]) } var tb = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

 function nb(e, t, n, r) { eb(e, t, void 0, r);

 for (let i in t.attrs) e.setAttribute(tb.has(i) ? i : El(i), t.attrs[i]) } function rb(e, { layout: t, layoutId: n }) { return Dr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!gl[e] || e === "opacity") } function Fd(e, t, n) { var r;

 let { style: i } = e, o = {};

 for (let s in i) (Be(i[s]) || t.style && Be(t.style[s]) || rb(s, e) || ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);

 return n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), o } function ib(e, t, n) { let r = Fd(e, t, n);

 for (let i in e) if (Be(e[i]) || Be(t[i])) { let o = Vs.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;

 r[o] = e[i] } return r } var Pd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }), ob = () => ({ ...Pd(), attrs: {} });

 function Id(e, t, n) { let { style: r, vars: i, transformOrigin: o } = e, s = !1, a = !1;

 for (let l in t) { let c = t[l];

 if (Dr.has(l)) { s = !0;

 continue } else if (jy(l)) { i[l] = c;

 continue } else { let u = T0(c, ad[l]);

 l.startsWith("origin") ? (a = !0, o[l] = u) : r[l] = u } } if (t.transform || (s || n ? r.transform = E0(t, e.transform, n) : r.transform && (r.transform = "none")), a) { let { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = o;

 r.transformOrigin = `${l} ${c} ${u}` } } function py(e, t, n) { return typeof e == "string" ? e : J.transform(t + n * e) } function V_(e, t, n) { let r = py(t, e.x, e.width), i = py(n, e.y, e.height);

 return `${r} ${i}` } var A_ = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, D_ = { offset: "strokeDashoffset", array: "strokeDasharray" };

 function z_(e, t, n = 1, r = 0, i = !0) { e.pathLength = 1;

 let o = i ? A_ : D_;

 e[o.offset] = J.transform(-r);

 let s = J.transform(t), a = J.transform(n);

 e[o.array] = `${s} ${a}` } function _d(e, { attrX: t, attrY: n, attrScale: r, originX: i, originY: o, pathLength: s, pathSpacing: a = 1, pathOffset: l = 0, ...c }, u, f) { if (Id(e, c, f), u) { e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);

 return } e.attrs = e.style, e.style = {};

 let { attrs: d, style: h, dimensions: p } = e;

 d.transform && (p && (h.transform = d.transform), delete d.transform), p && (i !== void 0 || o !== void 0 || h.transform) && (h.transformOrigin = V_(p, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), s !== void 0 && z_(d, s, a, l, !1) } var Md = e => typeof e == "string" && e.toLowerCase() === "svg", B_ = { useVisualState: Vl({ scrapeMotionValuesFromProps: ib, createRenderState: ob, onMount: (e, t, { renderState: n, latestValues: r }) => { Q.read(() => { try { n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect() } catch { n.dimensions = { x: 0, y: 0, width: 0, height: 0 } } }), Q.render(() => { _d(n, r, Md(t.tagName), e.transformTemplate), nb(t, n) }) } }) }, $_ = { useVisualState: Vl({ applyWillChange: !0, scrapeMotionValuesFromProps: Fd, createRenderState: Pd }) };

 function sb(e, t, n) { for (let r in t) !Be(t[r]) && !rb(r, n) && (e[r] = t[r]) } function N_({ transformTemplate: e }, t) { return q(() => { let n = Pd();

 return Id(n, t, e), Object.assign({}, n.vars, n.style) }, [t]) } function j_(e, t) { let n = e.style || {}, r = {};

 return sb(r, n, e), Object.assign(r, N_(e, t)), r } function H_(e, t) { let n = {}, r = j_(e, t);

 return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n } function W_(e, t, n, r) { let i = q(() => { let o = ob();

 return _d(o, t, Md(r), e.transformTemplate), { ...o.attrs, style: { ...o.style } } }, [t]);

 if (e.style) { let o = {};

 sb(o, e.style, e), i.style = { ...o, ...i.style } } return i } function U_(e = !1) { return (n, r, i, { latestValues: o }, s) => { let l = (Ed(n) ? W_ : H_)(r, o, s, n), c = I0(r, typeof n == "string", e), u = n !== pn ? { ...c, ...l, ref: i } : {}, { children: f } = r, d = q(() => Be(f) ? f.get() : f, [f]);

 return no(n, { ...u, children: d }) } } function G_(e, t) { return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) { let s = { ...Ed(r) ? B_ : $_, preloadedFeatures: e, useRender: U_(i), createVisualElement: t, Component: r };

 return R0(s) } } var ab = class extends Td { constructor() { super(...arguments), this.KeyframeResolver = n0 } sortInstanceNodePosition(e, t) { return e.compareDocumentPosition(t) & 2 ? 1 : -1 } getBaseTargetFromProps(e, t) { return e.style ? e.style[t] : void 0 } removeValueFromRenderState(e, { vars: t, style: n }) { delete t[e], delete n[e] } };

 function q_(e) { return F.getComputedStyle(e) } var lb = class extends ab { constructor() { super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = eb } readValueFromInstance(e, t) { if (Dr.has(t)) { let n = ld(t);

 return n && n.default || 0 } else { let n = q_(e), r = (jy(t) ? n.getPropertyValue(t) : n[t]) || 0;

 return typeof r == "string" ? r.trim() : r } } measureInstanceViewportBox(e, { transformPagePoint: t }) { return D0(e, t) } build(e, t, n) { Id(e, t, n.transformTemplate) } scrapeMotionValuesFromProps(e, t, n) { return Fd(e, t, n) } handleChildMotionValue() { this.childSubscription && (this.childSubscription(), delete this.childSubscription);

 let { children: e } = this.props;

 Be(e) && (this.childSubscription = e.on("change", t => { this.current && (this.current.textContent = `${t}`) })) } }, cb = class extends ab { constructor() { super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = je } getBaseTargetFromProps(e, t) { return e[t] } readValueFromInstance(e, t) { if (Dr.has(t)) { let n = ld(t);

 return n && n.default || 0 } return t = tb.has(t) ? t : El(t), e.getAttribute(t) } scrapeMotionValuesFromProps(e, t, n) { return ib(e, t, n) } build(e, t, n) { _d(e, t, this.isSVGTag, n.transformTemplate) } renderInstance(e, t, n, r) { nb(e, t, n, r) } mount(e) { this.isSVGTag = Md(e.tagName), super.mount(e) } }, Od = (e, t) => Ed(e) ? new cb(t) : new lb(t, { allowProjection: e !== pn }), X_ = G_({ ...Il, ...Z0, ...K0, ...J0 }, Od), Ht = FI(X_);

 var Y_ = class extends ye { getSnapshotBeforeUpdate(e) { let t = this.props.childRef.current;

 if (t && e.isPresent && !this.props.isPresent) { let n = this.props.sizeRef.current;

 n.height = t.offsetHeight || 0, n.width = t.offsetWidth || 0, n.top = t.offsetTop, n.left = t.offsetLeft } return null } componentDidUpdate() { } render() { return this.props.children } };

 function K_({ children: e, isPresent: t }) {
    let n = hr(), r = _(null), i = _({ width: 0, height: 0, top: 0, left: 0 }), { nonce: o } = L(Kn);

 return et(() => {
        let { width: s, height: a, top: l, left: c } = i.current;

 if (t || !r.current || !s || !a) return;

 r.current.dataset.motionPopId = n;

 let u = document.createElement("style");

 return o && (u.nonce = o), document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;


            width: ${s}px !important;


            height: ${a}px !important;


            top: ${l}px !important;


            left: ${c}px !important;


          }
        `), () => { document.head.removeChild(u) }
    }, [t]), k(Y_, { isPresent: t, childRef: r, sizeRef: i, children: dr(e, { ref: r }) })
} var Q_ = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s }) => { let a = Zn(Z_), l = hr(), c = $(f => { a.set(f, !0);

 for (let d of a.values()) if (!d) return;

 r && r() }, [a, r]), u = q(() => ({ id: l, initial: t, isPresent: n, custom: i, onExitComplete: c, register: f => (a.set(f, !1), () => a.delete(f)) }), o ? [Math.random(), c] : [n, c]);

 return q(() => { a.forEach((f, d) => a.set(d, !1)) }, [n]), V(() => { !n && !a.size && r && r() }, [n]), s === "popLayout" && (e = k(K_, { isPresent: n, children: e })), k(vo.Provider, { value: u, children: e }) };

 function Z_() { return new Map } var sl = e => e.key || "";

 function my(e) { let t = [];

 return Jt.forEach(e, n => { ht(n) && t.push(n) }), t } var Ld = ({ children: e, exitBeforeEnter: t, custom: n, initial: r = !0, onExitComplete: i, presenceAffectsLayout: o = !0, mode: s = "sync" }) => { en(!t, "Replace exitBeforeEnter with mode='wait'");

 let a = q(() => my(e), [e]), l = a.map(sl), c = _(!0), u = _(a), f = Zn(() => new Map), [d, h] = Se(a), [p, v] = Se(a);

 Br(() => { c.current = !1, u.current = a;

 for (let m = 0;

 m < p.length;

 m++) { let y = sl(p[m]);

 l.includes(y) ? f.delete(y) : f.get(y) !== !0 && f.set(y, !1) } }, [p, l.length, l.join("-")]);

 let b = [];

 if (a !== d) { let m = [...a];

 for (let y = 0;

 y < p.length;

 y++) { let x = p[y], C = sl(x);

 l.includes(C) || (m.splice(y, 0, x), b.push(x)) } s === "wait" && b.length && (m = b), v(my(m)), h(a);

 return } let { forceRender: g } = L(Ms);

 return k(rt, { children: p.map(m => { let y = sl(m), x = a === p || l.includes(y), C = () => { if (f.has(y)) f.set(y, !0);

 else return;

 let w = !0;

 f.forEach(R => { R || (w = !1) }), w && (g?.(), v(u.current), i && i()) };

 return k(Q_, { isPresent: x, initial: !c.current || r ? void 0 : !1, custom: x ? void 0 : n, presenceAffectsLayout: o, mode: s, onExitComplete: x ? void 0 : C, children: m }, y) }) }) };

 function ub({ children: e, isValidProp: t, ...n }) { t && P0(t), n = { ...L(Kn), ...n }, n.isStatic = Zn(() => n.isStatic);

 let r = q(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);

 return k(Kn.Provider, { value: r, children: e }) } var fb = pe(null);

 function J_() { let e = _(!1);

 return Br(() => (e.current = !0, () => { e.current = !1 }), []), e } function Vd() { let e = J_(), [t, n] = Se(0), r = $(() => { e.current && n(t + 1) }, [t]);

 return [$(() => Q.postRender(r), [r]), t] } var e2 = e => !e.isLayoutDirty && e.willUpdate(!1);

 function gy() { let e = new Set, t = new WeakMap, n = () => e.forEach(e2);

 return { add: r => { e.add(r), t.set(r, r.addEventListener("willUpdate", n)) }, remove: r => { e.delete(r);

 let i = t.get(r);

 i && (i(), t.delete(r)), n() }, dirty: n } } var db = e => e === !0, t2 = e => db(e === !0) || e === "id", hb = ({ children: e, id: t, inherit: n = !0 }) => { let r = L(Ms), i = L(fb), [o, s] = Vd(), a = _(null), l = r.id || i;

 a.current === null && (t2(n) && l && (t = t ? l + "-" + t : l), a.current = { id: t, group: db(n) && r.group || gy() });

 let c = q(() => ({ ...a.current, forceRender: o }), [s]);

 return k(Ms.Provider, { value: c, children: e }) }, n2 = { renderer: Od, ...Il }, pb = { renderer: Od, ...Il, ...Z0 }, r2 = { ...pb, ...K0, ...J0 };

 function Jn(e) { let t = Zn(() => Ye(e)), { isStatic: n } = L(Kn);

 if (n) { let [, r] = Se(e);

 V(() => t.on("change", r), []) } return t } function mb(e, t) { let n = Jn(t()), r = () => n.set(t());

 return r(), Br(() => { let i = () => Q.preRender(r, !1, !0), o = e.map(s => s.on("change", i));

 return () => { o.forEach(s => s()), Tt(r) } }), n } var i2 = e => e && typeof e == "object" && e.mix, o2 = e => i2(e) ? e.mix : void 0;

 function yo(...e) { let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], o = e[2 + n], s = e[3 + n], a = go(i, o, { mixer: o2(o[0]), ...s });

 return t ? a(r) : a } function s2(e) { ks.current = [], e();

 let t = mb(ks.current, e);

 return ks.current = void 0, t } function Ot(e, t, n, r) { if (typeof e == "function") return s2(e);

 let i = typeof t == "function" ? t : yo(t, n, r);

 return Array.isArray(e) ? vy(e, i) : vy([e], ([o]) => i(o)) } function vy(e, t) { let n = Zn(() => []);

 return mb(e, () => { n.length = 0;

 let r = e.length;

 for (let i = 0;

 i < r;

 i++)n[i] = e[i].get();

 return t(n) }) } function yy(e) { return typeof e == "number" ? e : parseFloat(e) } function Ad(e, t = {}) { let { isStatic: n } = L(Kn), r = _(null), i = Jn(Be(e) ? yy(e.get()) : e), o = _(i.get()), s = _(() => { }), a = () => { let c = r.current;

 c && c.time === 0 && c.sample(Xe.delta), l(), r.current = sd({ keyframes: [i.get(), o.current], velocity: i.getVelocity(), type: "spring", restDelta: .001, restSpeed: .01, ...t, onUpdate: s.current }) }, l = () => { r.current && r.current.stop() };

 return et(() => i.attach((c, u) => n ? u(c) : (o.current = c, s.current = u, Q.update(a), i.get()), l), [JSON.stringify(t)]), Br(() => { if (Be(e)) return e.on("change", c => i.set(yy(c))) }, [i]), i } function Dd(e, t, n) { var r;

 if (typeof e == "string") { let i = document;

 t && (en(!!t.current, "Scope provided, but no element detected."), i = t.current), n ? ((r = n[e]) !== null && r !== void 0 || (n[e] = i.querySelectorAll(e)), e = n[e]) : e = i.querySelectorAll(e) } else e instanceof Element && (e = [e]);

 return Array.from(e || []) } var ul = new WeakMap, Ar;

 function a2(e, t) { if (t) { let { inlineSize: n, blockSize: r } = t[0];

 return { width: n, height: r } } else return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : { width: e.offsetWidth, height: e.offsetHeight } } function l2({ target: e, contentRect: t, borderBoxSize: n }) { var r;

 (r = ul.get(e)) === null || r === void 0 || r.forEach(i => { i({ target: e, contentSize: t, get size() { return a2(e, n) } }) }) } function c2(e) { e.forEach(l2) } function u2() { typeof ResizeObserver > "u" || (Ar = new ResizeObserver(c2)) } function f2(e, t) { Ar || u2();

 let n = Dd(e);

 return n.forEach(r => { let i = ul.get(r);

 i || (i = new Set, ul.set(r, i)), i.add(t), Ar?.observe(r) }), () => { n.forEach(r => { let i = ul.get(r);

 i?.delete(t), i?.size || Ar?.unobserve(r) }) } } var fl = new Set, Ts;

 function d2() { Ts = () => { let e = { width: F.innerWidth, height: F.innerHeight }, t = { target: F, size: e, contentSize: e };

 fl.forEach(n => n(t)) }, F.addEventListener("resize", Ts) } function h2(e) { return fl.add(e), Ts || d2(), () => { fl.delete(e), !fl.size && Ts && (Ts = void 0) } } function p2(e, t) { return typeof e == "function" ? h2(e) : f2(e, t) } var m2 = 50, by = () => ({ current: 0, offset: [], progress: 0, scrollLength: 0, targetOffset: 0, targetLength: 0, containerLength: 0, velocity: 0 }), g2 = () => ({ time: 0, x: by(), y: by() }), v2 = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };

 function xy(e, t, n, r) { let i = n[t], { length: o, position: s } = v2[t], a = i.current, l = n.time;

 i.current = e[`scroll${s}`], i.scrollLength = e[`scroll${o}`] - e[`client${o}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = vr(0, i.scrollLength, i.current);

 let c = r - l;

 i.velocity = c > m2 ? 0 : Zf(i.current - a, c) } function y2(e, t, n) { xy(e, "x", t, n), xy(e, "y", t, n), t.time = n } function b2(e, t) { let n = { x: 0, y: 0 }, r = e;

 for (;

 r && r !== t;

)if (r instanceof HTMLElement) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;

 else if (r.tagName === "svg") { let i = r.getBoundingClientRect();

 r = r.parentElement;

 let o = r.getBoundingClientRect();

 n.x += i.left - o.left, n.y += i.top - o.top } else if (r instanceof SVGGraphicsElement) { let { x: i, y: o } = r.getBBox();

 n.x += i, n.y += o;

 let s = null, a = r.parentNode;

 for (;

 !s;

)a.tagName === "svg" && (s = a), a = r.parentNode;

 r = s } else break;

 return n } var x2 = { Enter: [[0, 1], [1, 1]], Exit: [[0, 0], [1, 0]], Any: [[1, 0], [0, 1]], All: [[0, 0], [1, 1]] }, Nf = { start: 0, center: .5, end: 1 };

 function Sy(e, t, n = 0) { let r = 0;

 if (e in Nf && (e = Nf[e]), typeof e == "string") { let i = parseFloat(e);

 e.endsWith("px") ? r = i : e.endsWith("%") ? e = i / 100 : e.endsWith("vw") ? r = i / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = i / 100 * document.documentElement.clientHeight : e = i } return typeof e == "number" && (r = t * e), n + r } var S2 = [0, 0];

 function w2(e, t, n, r) { let i = Array.isArray(e) ? e : S2, o = 0, s = 0;

 return typeof e == "number" ? i = [e, e] : typeof e == "string" && (e = e.trim(), e.includes(" ") ? i = e.split(" ") : i = [e, Nf[e] ? e : "0"]), o = Sy(i[0], n, r), s = Sy(i[1], t), o - s } var k2 = { x: 0, y: 0 };

 function C2(e) { return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : { width: e.clientWidth, height: e.clientHeight } } function R2(e, t, n) { let { offset: r = x2.All } = n, { target: i = e, axis: o = "y" } = n, s = o === "y" ? "height" : "width", a = i !== e ? b2(i, e) : k2, l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : C2(i), c = { width: e.clientWidth, height: e.clientHeight };

 t[o].offset.length = 0;

 let u = !t[o].interpolate, f = r.length;

 for (let d = 0;

 d < f;

 d++) { let h = w2(r[d], c[s], l[s], a[o]);

 !u && h !== t[o].interpolatorOffsets[d] && (u = !0), t[o].offset[d] = h } u && (t[o].interpolate = go(t[o].offset, id(r)), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = t[o].interpolate(t[o].current) } function T2(e, t = e, n) { if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) { let r = t;

 for (;

 r && r !== e;

)n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent } n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight } function E2(e, t, n, r = {}) { return { measure: () => T2(e, r.target, n), update: i => { y2(e, n, i), (r.offset || r.target) && R2(e, n, r) }, notify: () => t(n) } } var ys = new WeakMap, wy = new WeakMap, xf = new WeakMap, ky = e => e === document.documentElement ? F : e;

 function yr(e, { container: t = document.documentElement, ...n } = {}) { let r = xf.get(t);

 r || (r = new Set, xf.set(t, r));

 let i = g2(), o = E2(t, e, i, n);

 if (r.add(o), !ys.has(t)) { let a = () => { for (let d of r) d.measure() }, l = () => { for (let d of r) d.update(Xe.timestamp) }, c = () => { for (let d of r) d.notify() }, u = () => { Q.read(a, !1, !0), Q.read(l, !1, !0), Q.update(c, !1, !0) };

 ys.set(t, u);

 let f = ky(t);

 F.addEventListener("resize", u, { passive: !0 }), t !== document.documentElement && wy.set(t, p2(t, u)), f.addEventListener("scroll", u, { passive: !0 }) } let s = ys.get(t);

 return Q.read(s, !1, !0), () => { var a;

 Tt(s);

 let l = xf.get(t);

 if (!l || (l.delete(o), l.size)) return;

 let c = ys.get(t);

 ys.delete(t), c && (ky(t).removeEventListener("scroll", c), (a = wy.get(t)) === null || a === void 0 || a(), F.removeEventListener("resize", c)) } } function gb(e, t) { let n, r = () => { let { currentTime: i } = t, s = (i === null ? 0 : i.value) / 100;

 n !== s && e(s), n = s };

 return Q.update(r, !0), () => Tt(r) } function F2({ source: e, container: t, axis: n = "y" }) { e && (t = e);

 let r = { value: 0 }, i = yr(o => { r.value = o[n].progress * 100 }, { container: t, axis: n });

 return { currentTime: r, cancel: i } } var Sf = new Map;

 function vb({ source: e, container: t = document.documentElement, axis: n = "y" } = {}) { e && (t = e), Sf.has(t) || Sf.set(t, {});

 let r = Sf.get(t);

 return r[n] || (r[n] = a0() ? new ScrollTimeline({ source: t, axis: n }) : F2({ source: t, axis: n })), r[n] } function P2(e) { return e.length === 2 } function yb(e) { return e && (e.target || e.offset) } function I2(e, t) { return P2(e) || yb(t) ? yr(n => { e(n[t.axis].progress, n) }, t) : gb(e, vb(t)) } function _2(e, t) { if (yb(t)) return e.pause(), yr(n => { e.time = e.duration * n[t.axis].progress }, t);

 { let n = vb(t);

 return e.attachTimeline(n, r => (r.pause(), gb(i => { r.time = r.duration * i }, n))) } } function bb(e, { axis: t = "y", ...n } = {}) { let r = { axis: t, ...n };

 return typeof e == "function" ? I2(e, r) : _2(e, r) } function Cy(e, t) { po(!!(!t || t.current), `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`) } var M2 = () => ({ scrollX: Ye(0), scrollY: Ye(0), scrollXProgress: Ye(0), scrollYProgress: Ye(0) });

 function xb({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) { let i = Zn(M2);

 return (n ? Br : V)(() => (Cy("target", t), Cy("container", e), bb((s, { x: a, y: l }) => { i.scrollX.set(a.current), i.scrollXProgress.set(a.progress), i.scrollY.set(l.current), i.scrollYProgress.set(l.progress) }, { ...r, container: e?.current || void 0, target: t?.current || void 0 })), [e, t, JSON.stringify(r.offset)]), i } function O2(e) { let t = _(0), { isStatic: n } = L(Kn);

 V(() => { if (n) return;

 let r = ({ timestamp: i, delta: o }) => { t.current || (t.current = i), e(i - t.current, o) };

 return Q.update(r, !0), () => Tt(r) }, [e]) } function Sb() { !Rd.current && _0();

 let [e] = Se(vl.current);

 return e } function Ci() { let e = Sb(), { reducedMotion: t } = L(Kn);

 return t === "never" ? !1 : t === "always" ? !0 : e } function L2(e) { e.values.forEach(t => t.stop()) } function jf(e, t) { [...t].reverse().forEach(r => { let i = e.getVariant(r);

 i && md(e, i), e.variantChildren && e.variantChildren.forEach(o => { jf(o, t) }) }) } function V2(e, t) { if (Array.isArray(t)) return jf(e, t);

 if (typeof t == "string") return jf(e, [t]);

 md(e, t) } function wb() { let e = !1, t = new Set, n = { subscribe(r) { return t.add(r), () => void t.delete(r) }, start(r, i) { en(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");

 let o = [];

 return t.forEach(s => { o.push(vd(s, r, { transitionOverride: i })) }), Promise.all(o) }, set(r) { return en(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), t.forEach(i => { V2(i, r) }) }, stop() { t.forEach(r => { L2(r) }) }, mount() { return e = !0, () => { e = !1, n.stop() } } };

 return n } var kb = (e, t, n) => { let r = t - e;

 return ((n - e) % r + r) % r + e };

 function A2(e, t = 100, n) { let r = n({ ...e, keyframes: [0, t] }), i = Math.min(Yy(r), Pf);

 return { type: "keyframes", ease: o => r.next(i * o).value / t, duration: Gn(i) } } function zd(e) { return typeof e == "object" && !Array.isArray(e) } function Cb(e, t, n, r) { return typeof e == "string" && zd(t) ? Dd(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e : [e] } function Ry(e, t, n, r) { var i;

 return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : (i = r.get(t)) !== null && i !== void 0 ? i : e } function D2(e, t) { return Wy(e) ? e[kb(0, e.length, t)] : e } function z2(e, t, n) { for (let r = 0;

 r < e.length;

 r++) { let i = e[r];

 i.at > t && i.at < n && (Rl(e, i), r--) } } function B2(e, t, n, r, i, o) { z2(e, i, o);

 for (let s = 0;

 s < t.length;

 s++)e.push({ value: t[s], at: Oe(i, o, r[s]), easing: D2(n, s) }) } function $2(e, t) { return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at } var N2 = "easeInOut";

 function j2(e, { defaultTransition: t = {}, ...n } = {}, r, i) { let o = t.duration || .3, s = new Map, a = new Map, l = {}, c = new Map, u = 0, f = 0, d = 0;

 for (let h = 0;

 h < e.length;

 h++) { let p = e[h];

 if (typeof p == "string") { c.set(p, f);

 continue } else if (!Array.isArray(p)) { c.set(p.name, Ry(f, p.at, u, c));

 continue } let [v, b, g = {}] = p;

 g.at !== void 0 && (f = Ry(f, g.at, u, c));

 let m = 0, y = (x, C, w, R = 0, E = 0) => { let I = H2(x), { delay: P = 0, times: z = id(I), type: H = "keyframes", ...O } = C, { ease: X = t.ease || "easeOut", duration: W } = C, ie = typeof P == "function" ? P(R, E) : P, U = I.length, Y = wl(H) ? H : i?.[H];

 if (U <= 2 && Y) { let K = 100;

 if (U === 2 && G2(I)) { let we = I[1] - I[0];

 K = Math.abs(we) } let Z = { ...O };

 W !== void 0 && (Z.duration = Pn(W));

 let Fe = A2(Z, K, Y);

 X = Fe.ease, W = Fe.duration } W ?? (W = o);

 let le = f + ie, me = le + W;

 z.length === 1 && z[0] === 0 && (z[1] = 1);

 let B = z.length - I.length;

 B > 0 && Uy(z, B), I.length === 1 && I.unshift(null), B2(w, I, X, z, le, me), m = Math.max(ie + W, m), d = Math.max(me, d) };

 if (Be(v)) { let x = Ty(v, a);

 y(b, g, Ey("default", x)) } else { let x = Cb(v, b, r, l), C = x.length;

 for (let w = 0;

 w < C;

 w++) { b = b, g = g;

 let R = x[w], E = Ty(R, a);

 for (let I in b) y(b[I], W2(g, I), Ey(I, E), w, C) } } u = f, f += m } return a.forEach((h, p) => { for (let v in h) { let b = h[v];

 b.sort($2);

 let g = [], m = [], y = [];

 for (let C = 0;

 C < b.length;

 C++) { let { at: w, value: R, easing: E } = b[C];

 g.push(R), m.push(vr(0, d, w)), y.push(E || "easeOut") } m[0] !== 0 && (m.unshift(0), g.unshift(g[0]), y.unshift(N2)), m[m.length - 1] !== 1 && (m.push(1), g.push(null)), s.has(p) || s.set(p, { keyframes: {}, transition: {} });

 let x = s.get(p);

 x.keyframes[v] = g, x.transition[v] = { ...t, duration: d, ease: y, times: m, ...n } } }), s } function Ty(e, t) { return !t.has(e) && t.set(e, {}), t.get(e) } function Ey(e, t) { return t[e] || (t[e] = []), t[e] } function H2(e) { return Array.isArray(e) ? e : [e] } function W2(e, t) { return e && e[t] ? { ...e, ...e[t] } : { ...e } } var U2 = e => typeof e == "number", G2 = e => e.every(U2);

 function q2(e, t) { return e in t } var X2 = class extends Td { constructor() { super(...arguments), this.type = "object" } readValueFromInstance(e, t) { if (q2(t, e)) { let n = e[t];

 if (typeof n == "string" || typeof n == "number") return n } } getBaseTargetFromProps() { } removeValueFromRenderState(e, t) { delete t.output[e] } measureInstanceViewportBox() { return je() } build(e, t) { Object.assign(e.output, t) } renderInstance(e, { output: t }) { Object.assign(e, t) } sortInstanceNodePosition() { return 0 } };

 function Y2(e) { let t = { presenceContext: null, props: {}, visualState: { renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} }, latestValues: {} } }, n = W0(e) ? new cb(t) : new lb(t);

 n.mount(e), Qn.set(e, n) } function K2(e) { let t = { presenceContext: null, props: {}, visualState: { renderState: { output: {} }, latestValues: {} } }, n = new X2(t);

 n.mount(e), Qn.set(e, n) } function Q2(e, t) { return Be(e) || typeof e == "number" || typeof e == "string" && !zd(t) } function Rb(e, t, n, r) { let i = [];

 if (Q2(e, t)) i.push(U0(e, zd(t) && t.default || t, n && (n.default || n)));

 else { let o = Cb(e, t, r), s = o.length;

 en(!!s, "No valid elements provided.");

 for (let a = 0;

 a < s;

 a++) { let l = o[a], c = l instanceof Element ? Y2 : K2;

 Qn.has(l) || c(l);

 let u = Qn.get(l), f = { ...n };

 "delay" in f && typeof f.delay == "function" && (f.delay = f.delay(a, s)), i.push(...gd(u, { ...t, transition: f }, {})) } } return i } function Z2(e, t, n) { let r = [];

 return j2(e, t, n, { spring: Ls }).forEach(({ keyframes: o, transition: s }, a) => { r.push(...Rb(a, o, s)) }), r } function J2(e) { return Array.isArray(e) && Array.isArray(e[0]) } function Tb(e) { function t(n, r, i) { let o = [];

 J2(n) ? o = Z2(n, r, e) : o = Rb(n, r, i, e);

 let s = new l0(o);

 return e && e.animations.push(s), s } return t } var er = Tb();

 function Eb() { let e = Zn(wb);

 return Br(e.mount, []), e } var Fb = Eb;

 var eM = { some: 0, all: 1 };

 function Al(e, t, { root: n, margin: r, amount: i = "some" } = {}) { let o = Dd(e), s = new WeakMap, a = c => { c.forEach(u => { let f = s.get(u.target);

 if (u.isIntersecting !== !!f) if (u.isIntersecting) { let d = t(u);

 typeof d == "function" ? s.set(u.target, d) : l.unobserve(u.target) } else f && (f(u), s.delete(u.target)) }) }, l = new IntersectionObserver(a, { root: n, rootMargin: r, threshold: typeof i == "number" ? i : eM[i] });

 return o.forEach(c => l.observe(c)), () => l.disconnect() } function tM(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) { let [o, s] = Se(!1);

 return V(() => { if (!e.current || i && o) return;

 let a = () => (s(!0), i ? void 0 : () => s(!1)), l = { root: t && t.current || void 0, margin: n, amount: r };

 return Al(e.current, a, l) }, [t, e, n, i, r]), o } function Dl(e) { return e !== null && typeof e == "object" && Cd in e } function Bd(e) { if (Dl(e)) return e[Cd] } function $d() { return nM } function nM(e) { ki.current && (ki.current.isUpdating = !1, ki.current.blockUpdate(), e && e()) } function Pb() { let [e, t] = Vd(), n = $d(), r = _();

 return V(() => { Q.postRender(() => Q.postRender(() => { t === r.current && (hl.current = !1) })) }, [t]), i => { n(() => { hl.current = !0, e(), i(), r.current = t + 1 }) } } function Ib() { return $(() => { let t = ki.current;

 t && t.resetTree() }, []) } var Fy = () => ({});

 var Aj = Vl({ scrapeMotionValuesFromProps: Fy, createRenderState: Fy });

 var _b = {};

 Wg(_b, { Group: () => oM, Item: () => cM });

 var Mb = pe(null);

 function rM(e, t, n, r) { if (!r) return e;

 let i = e.findIndex(u => u.value === t);

 if (i === -1) return e;

 let o = r > 0 ? 1 : -1, s = e[i + o];

 if (!s) return e;

 let a = e[i], l = s.layout, c = Oe(l.min, l.max, .5);

 return o === 1 && a.layout.max + n > c || o === -1 && a.layout.min + n < c ? OP(e, i, i + o) : e } function iM({ children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...o }, s) { let a = Zn(() => Ht[t]), l = [], c = _(!1);

 en(!!i, "Reorder.Group must be provided a values prop");

 let u = { axis: n, registerItem: (f, d) => { let h = l.findIndex(p => f === p.value);

 h !== -1 ? l[h].layout = d[n] : l.push({ value: f, layout: d[n] }), l.sort(aM) }, updateOrder: (f, d, h) => { if (c.current) return;

 let p = rM(l, f, d, h);

 l !== p && (c.current = !0, r(p.map(sM).filter(v => i.indexOf(v) !== -1))) } };

 return V(() => { c.current = !1 }), k(a, { ...o, ref: s, ignoreStrict: !0, children: k(Mb.Provider, { value: u, children: e }) }) } var oM = xe(iM);

 function sM(e) { return e.value } function aM(e, t) { return e.layout.min - t.layout.min } function Py(e, t = 0) { return Be(e) ? e : Jn(t) } function lM({ children: e, style: t = {}, value: n, as: r = "li", onDrag: i, layout: o = !0, ...s }, a) { let l = Zn(() => Ht[r]), c = L(Mb), u = { x: Py(t.x), y: Py(t.y) }, f = Ot([u.x, u.y], ([v, b]) => v || b ? 1 : "unset");

 en(!!c, "Reorder.Item must be a child of Reorder.Group");

 let { axis: d, registerItem: h, updateOrder: p } = c;

 return k(l, { drag: d, ...s, dragSnapToOrigin: !0, style: { ...t, x: u.x, y: u.y, zIndex: f }, layout: o, onDrag: (v, b) => { let { velocity: g } = b;

 g[d] && p(n, u[d].get(), g[d]), i && i(v, b) }, onLayoutMeasure: v => h(n, v), ref: a, ignoreStrict: !0, children: e }) } var cM = xe(lM);

 function uM(e, t) { if (e === "first") return 0;

 { let n = t - 1;

 return e === "last" ? n : n / 2 } } function Nd(e = .1, { startDelay: t = 0, from: n = 0, ease: r } = {}) { return (i, o) => { let s = typeof n == "number" ? n : uM(n, o), a = Math.abs(s - i), l = e * a;

 if (r) { let c = o * e;

 l = Tf(r)(l / c) * c } return t + l } } var fM = bs.reduce((e, t) => (e[t] = n => Tt(n), e), {});

 var GL = {};

 ef(GL, { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => LL, createPortal: () => VL, createRoot: () => AL, default: () => YS, findDOMNode: () => DL, flushSync: () => zL, hydrate: () => BL, hydrateRoot: () => $L, render: () => NL, unmountComponentAtNode: () => jL, unstable_batchedUpdates: () => HL, unstable_renderSubtreeIntoContainer: () => WL, version: () => UL });

 var Hl = {};

 ef(Hl, { default: () => te, unstable_IdlePriority: () => pM, unstable_ImmediatePriority: () => mM, unstable_LowPriority: () => gM, unstable_NormalPriority: () => vM, unstable_Profiling: () => yM, unstable_UserBlockingPriority: () => bM, unstable_cancelCallback: () => xM, unstable_continueExecution: () => SM, unstable_forceFrameRate: () => wM, unstable_getCurrentPriorityLevel: () => kM, unstable_getFirstCallbackNode: () => CM, unstable_next: () => RM, unstable_now: () => hM, unstable_pauseExecution: () => TM, unstable_requestPaint: () => EM, unstable_runWithPriority: () => FM, unstable_scheduleCallback: () => PM, unstable_shouldYield: () => IM, unstable_wrapCallback: () => _M });

 var te = {};

 function Ud(e, t) { var n = e.length;

 e.push(t);

 e: for (;

 0 < n;

) { var r = n - 1 >>> 1, i = e[r];

 if (!(0 < zl(i, t))) break e;

 e[r] = t, e[n] = i, n = r } } function In(e) { return e.length === 0 ? null : e[0] } function $l(e) { if (e.length === 0) return null;

 var t = e[0], n = e.pop();

 if (n !== t) { e[0] = n;

 e: for (var r = 0, i = e.length, o = i >>> 1;

 r < o;

) { var s = 2 * (r + 1) - 1, a = e[s], l = s + 1, c = e[l];

 if (0 > zl(a, n)) l < i && 0 > zl(c, a) ? (e[r] = c, e[l] = n, r = l) : (e[r] = a, e[s] = n, r = s);

 else { if (!(l < i && 0 > zl(c, n))) break e;

 e[r] = c, e[l] = n, r = l } } } return t } function zl(e, t) { var n = e.sortIndex - t.sortIndex;

 return n !== 0 ? n : e.id - t.id } typeof performance == "object" && typeof performance.now == "function" ? (Ob = performance, te.unstable_now = function () { return Ob.now() }) : (jd = Date, Lb = jd.now(), te.unstable_now = function () { return jd.now() - Lb });

 var Ob, jd, Lb, tr = [], $r = [], dM = 1, vn = null, Et = 3, Nl = !1, Ri = !1, zs = !1, Db = typeof setTimeout == "function" ? setTimeout : null, zb = typeof clearTimeout == "function" ? clearTimeout : null, Vb = typeof setImmediate < "u" ? setImmediate : null;

 typeof Me < "u" && Me.scheduling !== void 0 && Me.scheduling.isInputPending !== void 0 && Me.scheduling.isInputPending.bind(Me.scheduling);

 function Gd(e) { for (var t = In($r);

 t !== null;

) { if (t.callback === null) $l($r);

 else { if (!(t.startTime <= e)) break;

 $l($r), t.sortIndex = t.expirationTime, Ud(tr, t) } t = In($r) } } function qd(e) { if (zs = !1, Gd(e), !Ri) if (In(tr) !== null) Ri = !0, Yd(Xd);

 else { var t = In($r);

 t !== null && Kd(qd, t.startTime - e) } } function Xd(e, t) { Ri = !1, zs && (zs = !1, zb(Bs), Bs = -1), Nl = !0;

 var n = Et;

 try { for (Gd(t), vn = In(tr);

 vn !== null && (!(vn.expirationTime > t) || e && !Nb());

) { var r = vn.callback;

 if (typeof r == "function") { vn.callback = null, Et = vn.priorityLevel;

 var i = r(vn.expirationTime <= t);

 t = te.unstable_now(), typeof i == "function" ? vn.callback = i : vn === In(tr) && $l(tr), Gd(t) } else $l(tr);

 vn = In(tr) } if (vn !== null) var o = !0;

 else { var s = In($r);

 s !== null && Kd(qd, s.startTime - t), o = !1 } return o } finally { vn = null, Et = n, Nl = !1 } } var jl = !1, Bl = null, Bs = -1, Bb = 5, $b = -1;

 function Nb() { return !(te.unstable_now() - $b < Bb) } function Hd() { if (Bl !== null) { var e = te.unstable_now();

 $b = e;

 var t = !0;

 try { t = Bl(!0, e) } finally { t ? Ds() : (jl = !1, Bl = null) } } else jl = !1 } var Ds;

 typeof Vb == "function" ? Ds = function () { Vb(Hd) } : typeof MessageChannel < "u" ? (Wd = new MessageChannel, Ab = Wd.port2, Wd.port1.onmessage = Hd, Ds = function () { Ab.postMessage(null) }) : Ds = function () { Db(Hd, 0) };

 var Wd, Ab;

 function Yd(e) { Bl = e, jl || (jl = !0, Ds()) } function Kd(e, t) { Bs = Db(function () { e(te.unstable_now()) }, t) } te.unstable_IdlePriority = 5;

 te.unstable_ImmediatePriority = 1;

 te.unstable_LowPriority = 4;

 te.unstable_NormalPriority = 3;

 te.unstable_Profiling = null;

 te.unstable_UserBlockingPriority = 2;

 te.unstable_cancelCallback = function (e) { e.callback = null };

 te.unstable_continueExecution = function () { Ri || Nl || (Ri = !0, Yd(Xd)) };

 te.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Bb = 0 < e ? Math.floor(1e3 / e) : 5 };

 te.unstable_getCurrentPriorityLevel = function () { return Et };

 te.unstable_getFirstCallbackNode = function () { return In(tr) };

 te.unstable_next = function (e) { switch (Et) { case 1: case 2: case 3: var t = 3;

 break;

 default: t = Et }var n = Et;

 Et = t;

 try { return e() } finally { Et = n } };

 te.unstable_pauseExecution = function () { };

 te.unstable_requestPaint = function () { };

 te.unstable_runWithPriority = function (e, t) { switch (e) { case 1: case 2: case 3: case 4: case 5: break;

 default: e = 3 }var n = Et;

 Et = e;

 try { return t() } finally { Et = n } };

 te.unstable_scheduleCallback = function (e, t, n) { var r = te.unstable_now();

 switch (typeof n == "object" && n !== null ? (n = n.delay, n = typeof n == "number" && 0 < n ? r + n : r) : n = r, e) { case 1: var i = -1;

 break;

 case 2: i = 250;

 break;

 case 5: i = 1073741823;

 break;

 case 4: i = 1e4;

 break;

 default: i = 5e3 }return i = n + i, e = { id: dM++, callback: t, priorityLevel: e, startTime: n, expirationTime: i, sortIndex: -1 }, n > r ? (e.sortIndex = n, Ud($r, e), In(tr) === null && e === In($r) && (zs ? (zb(Bs), Bs = -1) : zs = !0, Kd(qd, n - r))) : (e.sortIndex = i, Ud(tr, e), Ri || Nl || (Ri = !0, Yd(Xd))), e };

 te.unstable_shouldYield = Nb;

 te.unstable_wrapCallback = function (e) { var t = Et;

 return function () { var n = Et;

 Et = t;

 try { return e.apply(this, arguments) } finally { Et = n } } };

 var hM = te.unstable_now, pM = te.unstable_IdlePriority, mM = te.unstable_ImmediatePriority, gM = te.unstable_LowPriority, vM = te.unstable_NormalPriority, yM = te.unstable_Profiling, bM = te.unstable_UserBlockingPriority, xM = te.unstable_cancelCallback, SM = te.unstable_continueExecution, wM = te.unstable_forceFrameRate, kM = te.unstable_getCurrentPriorityLevel, CM = te.unstable_getFirstCallbackNode, RM = te.unstable_next, TM = te.unstable_pauseExecution, EM = te.unstable_requestPaint, FM = te.unstable_runWithPriority, PM = te.unstable_scheduleCallback, IM = te.unstable_shouldYield, _M = te.unstable_wrapCallback;

 var MM = "default" in Ct ? S : Ct, OM = "default" in Hl ? te : Hl, sn = {}, Xx = MM, on = OM;

 function M(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;

 n < arguments.length;

 n++)t += "&args[]=" + encodeURIComponent(arguments[n]);

 return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } var Yx = new Set, aa = {};

 function zi(e, t) { Bo(e, t), Bo(e + "Capture", t) } function Bo(e, t) { for (aa[e] = t, e = 0;

 e < t.length;

 e++)Yx.add(t[e]) } var Cr = !(typeof F > "u" || typeof F.document > "u" || typeof F.document.createElement > "u"), bh = Object.prototype.hasOwnProperty, LM = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, jb = {}, Hb = {};

 function VM(e) { return bh.call(Hb, e) ? !0 : bh.call(jb, e) ? !1 : LM.test(e) ? Hb[e] = !0 : (jb[e] = !0, !1) } function AM(e, t, n, r) { if (n !== null && n.type === 0) return !1;

 switch (typeof t) { case "function": case "symbol": return !0;

 case "boolean": return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");

 default: return !1 } } function DM(e, t, n, r) { if (t === null || typeof t > "u" || AM(e, t, n, r)) return !0;

 if (r) return !1;

 if (n !== null) switch (n.type) { case 3: return !t;

 case 4: return t === !1;

 case 5: return isNaN(t);

 case 6: return isNaN(t) || 1 > t }return !1 } function At(e, t, n, r, i, o, s) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s } var St = {};

 "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { St[e] = new At(e, 0, !1, e, null, !1, !1) });

[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var t = e[0];

 St[t] = new At(t, 1, !1, e[1], null, !1, !1) });

["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { St[e] = new At(e, 2, !1, e.toLowerCase(), null, !1, !1) });

["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { St[e] = new At(e, 2, !1, e, null, !1, !1) });

 "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { St[e] = new At(e, 3, !1, e.toLowerCase(), null, !1, !1) });

["checked", "multiple", "muted", "selected"].forEach(function (e) { St[e] = new At(e, 3, !0, e, null, !1, !1) });

["capture", "download"].forEach(function (e) { St[e] = new At(e, 4, !1, e, null, !1, !1) });

["cols", "rows", "size", "span"].forEach(function (e) { St[e] = new At(e, 6, !1, e, null, !1, !1) });

["rowSpan", "start"].forEach(function (e) { St[e] = new At(e, 5, !1, e.toLowerCase(), null, !1, !1) });

 var up = /[\-:]([a-z])/g;

 function fp(e) { return e[1].toUpperCase() } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var t = e.replace(up, fp);

 St[t] = new At(t, 1, !1, e, null, !1, !1) });

 "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var t = e.replace(up, fp);

 St[t] = new At(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1) });

["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var t = e.replace(up, fp);

 St[t] = new At(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1) });

["tabIndex", "crossOrigin"].forEach(function (e) { St[e] = new At(e, 1, !1, e.toLowerCase(), null, !1, !1) });

 St.xlinkHref = new At("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);

["src", "href", "action", "formAction"].forEach(function (e) { St[e] = new At(e, 1, !1, e.toLowerCase(), null, !0, !0) });

 function dp(e, t, n, r) { var i = St.hasOwnProperty(t) ? St[t] : null;

 (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (DM(t, n, i, r) && (n = null), r || i === null ? VM(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type !== 3 && "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))) } var Fr = Xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Wl = Symbol.for("react.element"), So = Symbol.for("react.portal"), wo = Symbol.for("react.fragment"), hp = Symbol.for("react.strict_mode"), xh = Symbol.for("react.profiler"), Kx = Symbol.for("react.provider"), Qx = Symbol.for("react.context"), pp = Symbol.for("react.forward_ref"), Sh = Symbol.for("react.suspense"), wh = Symbol.for("react.suspense_list"), mp = Symbol.for("react.memo"), jr = Symbol.for("react.lazy");

 Symbol.for("react.scope");

 Symbol.for("react.debug_trace_mode");

 var Zx = Symbol.for("react.offscreen");

 Symbol.for("react.legacy_hidden");

 Symbol.for("react.cache");

 Symbol.for("react.tracing_marker");

 var Wb = Symbol.iterator;

 function $s(e) { return e === null || typeof e != "object" ? null : (e = Wb && e[Wb] || e["@@iterator"], typeof e == "function" ? e : null) } var Qd, Ue = Object.assign;

 function Xs(e) {
    if (Qd === void 0) try { throw Error() } catch (n) { var t = n.stack.trim().match(/\n( *(at )?)/);

 Qd = t && t[1] || "" } return `
`+ Qd + e
} var Zd = !1;

 function Jd(e, t) {
    if (!e || Zd) return "";

 Zd = !0;

 var n = Error.prepareStackTrace;

 Error.prepareStackTrace = void 0;

 try { if (t) if (t = function () { throw Error() }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error() } }), typeof Reflect == "object" && Reflect.construct) { try { Reflect.construct(t, []) } catch (c) { var r = c } Reflect.construct(e, [], t) } else { try { t.call() } catch (c) { r = c } e.call(t.prototype) } else { try { throw Error() } catch (c) { r = c } e() } } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1;

 1 <= s && 0 <= a && i[s] !== o[a];

)a--;

 for (;

 1 <= s && 0 <= a;

 s--, a--)if (i[s] !== o[a]) {
                if (s !== 1 || a !== 1) do if (s--, a--, 0 > a || i[s] !== o[a]) {
                    var l = `
`+ i[s].replace(" at new ", " at ");

 return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                } while (1 <= s && 0 <= a);

 break
            }
        }
    } finally { Zd = !1, Error.prepareStackTrace = n } return (e = e ? e.displayName || e.name : "") ? Xs(e) : ""
} function zM(e) { switch (e.tag) { case 5: return Xs(e.type);

 case 16: return Xs("Lazy");

 case 13: return Xs("Suspense");

 case 19: return Xs("SuspenseList");

 case 0: case 2: case 15: return e = Jd(e.type, !1), e;

 case 11: return e = Jd(e.type.render, !1), e;

 case 1: return e = Jd(e.type, !0), e;

 default: return "" } } function kh(e) { if (e == null) return null;

 if (typeof e == "function") return e.displayName || e.name || null;

 if (typeof e == "string") return e;

 switch (e) { case wo: return "Fragment";

 case So: return "Portal";

 case xh: return "Profiler";

 case hp: return "StrictMode";

 case Sh: return "Suspense";

 case wh: return "SuspenseList" }if (typeof e == "object") switch (e.$$typeof) { case Qx: return (e.displayName || "Context") + ".Consumer";

 case Kx: return (e._context.displayName || "Context") + ".Provider";

 case pp: var t = e.render;

 return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;

 case mp: return t = e.displayName || null, t !== null ? t : kh(e.type) || "Memo";

 case jr: t = e._payload, e = e._init;

 try { return kh(e(t)) } catch { } }return null } function BM(e) { var t = e.type;

 switch (e.tag) { case 24: return "Cache";

 case 9: return (t.displayName || "Context") + ".Consumer";

 case 10: return (t._context.displayName || "Context") + ".Provider";

 case 18: return "DehydratedFragment";

 case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");

 case 7: return "Fragment";

 case 5: return t;

 case 4: return "Portal";

 case 3: return "Root";

 case 6: return "Text";

 case 16: return kh(t);

 case 8: return t === hp ? "StrictMode" : "Mode";

 case 22: return "Offscreen";

 case 12: return "Profiler";

 case 21: return "Scope";

 case 13: return "Suspense";

 case 19: return "SuspenseList";

 case 25: return "TracingMarker";

 case 1: case 0: case 17: case 2: case 14: case 15: if (typeof t == "function") return t.displayName || t.name || null;

 if (typeof t == "string") return t }return null } function ni(e) { switch (typeof e) { case "boolean": case "number": case "string": case "undefined": return e;

 case "object": return e;

 default: return "" } } function Jx(e) { var t = e.type;

 return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio") } function $M(e) { var t = Jx(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];

 if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") { var i = n.get, o = n.set;

 return Object.defineProperty(e, t, { configurable: !0, get: function () { return i.call(this) }, set: function (s) { r = "" + s, o.call(this, s) } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r }, setValue: function (s) { r = "" + s }, stopTracking: function () { e._valueTracker = null, delete e[t] } } } } function Ul(e) { e._valueTracker || (e._valueTracker = $M(e)) } function e1(e) { if (!e) return !1;

 var t = e._valueTracker;

 if (!t) return !0;

 var n = t.getValue(), r = "";

 return e && (r = Jx(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0) } function bc(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;

 try { return e.activeElement || e.body } catch { return e.body } } function Ch(e, t) { var n = t.checked;

 return Ue({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked }) } function Ub(e, t) { var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;

 n = ni(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null } } function t1(e, t) { t = t.checked, t != null && dp(e, "checked", t, !1) } function Rh(e, t) { t1(e, t);

 var n = ni(t.value), r = t.type;

 if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);

 else if (r === "submit" || r === "reset") { e.removeAttribute("value");

 return } t.hasOwnProperty("value") ? Th(e, t.type, n) : t.hasOwnProperty("defaultValue") && Th(e, t.type, ni(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked) } function Gb(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) { var r = t.type;

 if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;

 t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t } n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n) } function Th(e, t, n) { t === "number" && bc(e.ownerDocument) === e || (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)) } var Ys = Array.isArray;

 function Oo(e, t, n, r) { if (e = e.options, t) { t = {};

 for (var i = 0;

 i < n.length;

 i++)t["$" + n[i]] = !0;

 for (n = 0;

 n < e.length;

 n++)i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0) } else { for (n = "" + ni(n), t = null, i = 0;

 i < e.length;

 i++) { if (e[i].value === n) { e[i].selected = !0, r && (e[i].defaultSelected = !0);

 return } t !== null || e[i].disabled || (t = e[i]) } t !== null && (t.selected = !0) } } function Eh(e, t) { if (t.dangerouslySetInnerHTML != null) throw Error(M(91));

 return Ue({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) } function qb(e, t) { var n = t.value;

 if (n == null) { if (n = t.children, t = t.defaultValue, n != null) { if (t != null) throw Error(M(92));

 if (Ys(n)) { if (1 < n.length) throw Error(M(93));

 n = n[0] } t = n } t == null && (t = ""), n = t } e._wrapperState = { initialValue: ni(n) } } function n1(e, t) { var n = ni(t.value), r = ni(t.defaultValue);

 n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r) } function Xb(e) { var t = e.textContent;

 t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t) } function r1(e) { switch (e) { case "svg": return "http://www.w3.org/2000/svg";

 case "math": return "http://www.w3.org/1998/Math/MathML";

 default: return "http://www.w3.org/1999/xhtml" } } function Fh(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? r1(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e } var Gl, i1 = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) { MSApp.execUnsafeLocalFunction(function () { return e(t, n, r, i) }) } : e }(function (e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;

 else { for (Gl = Gl || document.createElement("div"), Gl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Gl.firstChild;

 e.firstChild;

)e.removeChild(e.firstChild);

 for (;

 t.firstChild;

)e.appendChild(t.firstChild) } });

 function la(e, t) { if (t) { var n = e.firstChild;

 if (n && n === e.lastChild && n.nodeType === 3) { n.nodeValue = t;

 return } } e.textContent = t } var Zs = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, NM = ["Webkit", "ms", "Moz", "O"];

 Object.keys(Zs).forEach(function (e) { NM.forEach(function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), Zs[t] = Zs[e] }) });

 function o1(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zs.hasOwnProperty(e) && Zs[e] ? ("" + t).trim() : t + "px" } function s1(e, t) { e = e.style;

 for (var n in t) if (t.hasOwnProperty(n)) { var r = n.indexOf("--") === 0, i = o1(n, t[n], r);

 n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i } } var jM = Ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

 function Ph(e, t) { if (t) { if (jM[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));

 if (t.dangerouslySetInnerHTML != null) { if (t.children != null) throw Error(M(60));

 if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61)) } if (t.style != null && typeof t.style != "object") throw Error(M(62)) } } function Ih(e, t) { if (e.indexOf("-") === -1) return typeof t.is == "string";

 switch (e) { case "annotation-xml": case "color-profile": case "font-face": case "font-face-src": case "font-face-uri": case "font-face-format": case "font-face-name": case "missing-glyph": return !1;

 default: return !0 } } var _h = null;

 function gp(e) { return e = e.target || e.srcElement || F, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e } var Mh = null, Lo = null, Vo = null;

 function Yb(e) { if (e = Ta(e)) { if (typeof Mh != "function") throw Error(M(280));

 var t = e.stateNode;

 t && (t = qc(t), Mh(e.stateNode, e.type, t)) } } function a1(e) { Lo ? Vo ? Vo.push(e) : Vo = [e] : Lo = e } function l1() { if (Lo) { var e = Lo, t = Vo;

 if (Vo = Lo = null, Yb(e), t) for (e = 0;

 e < t.length;

 e++)Yb(t[e]) } } function c1(e, t) { return e(t) } function u1() { } var eh = !1;

 function f1(e, t, n) { if (eh) return e(t, n);

 eh = !0;

 try { return c1(e, t, n) } finally { eh = !1, (Lo !== null || Vo !== null) && (u1(), l1()) } } function ca(e, t) { var n = e.stateNode;

 if (n === null) return null;

 var r = qc(n);

 if (r === null) return null;

 n = r[t];

 e: switch (t) { case "onClick": case "onClickCapture": case "onDoubleClick": case "onDoubleClickCapture": case "onMouseDown": case "onMouseDownCapture": case "onMouseMove": case "onMouseMoveCapture": case "onMouseUp": case "onMouseUpCapture": case "onMouseEnter": (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;

 break e;

 default: e = !1 }if (e) return null;

 if (n && typeof n != "function") throw Error(M(231, t, typeof n));

 return n } var Oh = !1;

 if (Cr) try { bo = {}, Object.defineProperty(bo, "passive", { get: function () { Oh = !0 } }), F.addEventListener("test", bo, bo), F.removeEventListener("test", bo, bo) } catch { Oh = !1 } var bo;

 function HM(e, t, n, r, i, o, s, a, l) { var c = Array.prototype.slice.call(arguments, 3);

 try { t.apply(n, c) } catch (u) { this.onError(u) } } var Js = !1, xc = null, Sc = !1, Lh = null, WM = { onError: function (e) { Js = !0, xc = e } };

 function UM(e, t, n, r, i, o, s, a, l) { Js = !1, xc = null, HM.apply(WM, arguments) } function GM(e, t, n, r, i, o, s, a, l) { if (UM.apply(this, arguments), Js) { if (!Js) throw Error(M(198));

 var c = xc;

 Js = !1, xc = null, Sc || (Sc = !0, Lh = c) } } function Bi(e) { var t = e, n = e;

 if (e.alternate) for (;

 t.return;

)t = t.return;

 else { e = t;

 do t = e, (4098 & t.flags) !== 0 && (n = t.return), e = t.return;

 while (e) } return t.tag === 3 ? n : null } function d1(e) { if (e.tag === 13) { var t = e.memoizedState;

 if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated } return null } function Kb(e) { if (Bi(e) !== e) throw Error(M(188)) } function qM(e) { var t = e.alternate;

 if (!t) { if (t = Bi(e), t === null) throw Error(M(188));

 return t !== e ? null : e } for (var n = e, r = t;

 ;

) { var i = n.return;

 if (i === null) break;

 var o = i.alternate;

 if (o === null) { if (r = i.return, r !== null) { n = r;

 continue } break } if (i.child === o.child) { for (o = i.child;

 o;

) { if (o === n) return Kb(i), e;

 if (o === r) return Kb(i), t;

 o = o.sibling } throw Error(M(188)) } if (n.return !== r.return) n = i, r = o;

 else { for (var s = !1, a = i.child;

 a;

) { if (a === n) { s = !0, n = i, r = o;

 break } if (a === r) { s = !0, r = i, n = o;

 break } a = a.sibling } if (!s) { for (a = o.child;

 a;

) { if (a === n) { s = !0, n = o, r = i;

 break } if (a === r) { s = !0, r = o, n = i;

 break } a = a.sibling } if (!s) throw Error(M(189)) } } if (n.alternate !== r) throw Error(M(190)) } if (n.tag !== 3) throw Error(M(188));

 return n.stateNode.current === n ? e : t } function h1(e) { return e = qM(e), e !== null ? p1(e) : null } function p1(e) { if (e.tag === 5 || e.tag === 6) return e;

 for (e = e.child;

 e !== null;

) { var t = p1(e);

 if (t !== null) return t;

 e = e.sibling } return null } var m1 = on.unstable_scheduleCallback, Qb = on.unstable_cancelCallback, XM = on.unstable_shouldYield, YM = on.unstable_requestPaint, Je = on.unstable_now, KM = on.unstable_getCurrentPriorityLevel, vp = on.unstable_ImmediatePriority, g1 = on.unstable_UserBlockingPriority, wc = on.unstable_NormalPriority, QM = on.unstable_LowPriority, v1 = on.unstable_IdlePriority, Hc = null, or = null;

 function ZM(e) { if (or && typeof or.onCommitFiberRoot == "function") try { or.onCommitFiberRoot(Hc, e, void 0, (128 & e.current.flags) === 128) } catch { } } var Vn = Math.clz32 ? Math.clz32 : tO, JM = Math.log, eO = Math.LN2;

 function tO(e) { return e >>>= 0, e === 0 ? 32 : 31 - (JM(e) / eO | 0) | 0 } var ql = 64, Xl = 4194304;

 function Ks(e) { switch (e & -e) { case 1: return 1;

 case 2: return 2;

 case 4: return 4;

 case 8: return 8;

 case 16: return 16;

 case 32: return 32;

 case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return 4194240 & e;

 case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: return 130023424 & e;

 case 134217728: return 134217728;

 case 268435456: return 268435456;

 case 536870912: return 536870912;

 case 1073741824: return 1073741824;

 default: return e } } function kc(e, t) { var n = e.pendingLanes;

 if (n === 0) return 0;

 var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = 268435455 & n;

 if (s !== 0) { var a = s & ~i;

 a !== 0 ? r = Ks(a) : (o &= s, o !== 0 && (r = Ks(o))) } else s = n & ~i, s !== 0 ? r = Ks(s) : o !== 0 && (r = Ks(o));

 if (r === 0) return 0;

 if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, o = t & -t, i >= o || i === 16 && (4194240 & o) !== 0)) return t;

 if ((4 & r) !== 0 && (r |= 16 & n), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r;

 0 < t;

)n = 31 - Vn(t), i = 1 << n, r |= e[n], t &= ~i;

 return r } function nO(e, t) { switch (e) { case 1: case 2: case 4: return t + 250;

 case 8: case 16: case 32: case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return t + 5e3;

 case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: return -1;

 case 134217728: case 268435456: case 536870912: case 1073741824: return -1;

 default: return -1 } } function rO(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes;

 0 < o;

) { var s = 31 - Vn(o), a = 1 << s, l = i[s];

 l === -1 ? (a & n) !== 0 && (a & r) === 0 || (i[s] = nO(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a } } function Vh(e) { return e = -1073741825 & e.pendingLanes, e !== 0 ? e : 1073741824 & e ? 1073741824 : 0 } function y1() { var e = ql;

 return ql <<= 1, (4194240 & ql) === 0 && (ql = 64), e } function th(e) { for (var t = [], n = 0;

 31 > n;

 n++)t.push(e);

 return t } function Ca(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Vn(t), e[t] = n } function iO(e, t) { var n = e.pendingLanes & ~t;

 e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;

 var r = e.eventTimes;

 for (e = e.expirationTimes;

 0 < n;

) { var i = 31 - Vn(n), o = 1 << i;

 t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o } } function yp(e, t) { var n = e.entangledLanes |= t;

 for (e = e.entanglements;

 n;

) { var r = 31 - Vn(n), i = 1 << r;

 i & t | e[r] & t && (e[r] |= t), n &= ~i } } var ke = 0;

 function b1(e) { return e &= -e, 1 < e ? 4 < e ? (268435455 & e) !== 0 ? 16 : 536870912 : 4 : 1 } var x1, bp, S1, w1, k1, Ah = !1, Yl = [], Xr = null, Yr = null, Kr = null, ua = new Map, fa = new Map, Wr = [], oO = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

 function Zb(e, t) { switch (e) { case "focusin": case "focusout": Xr = null;

 break;

 case "dragenter": case "dragleave": Yr = null;

 break;

 case "mouseover": case "mouseout": Kr = null;

 break;

 case "pointerover": case "pointerout": ua.delete(t.pointerId);

 break;

 case "gotpointercapture": case "lostpointercapture": fa.delete(t.pointerId) } } function Ns(e, t, n, r, i, o) { return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Ta(t), t !== null && bp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e) } function sO(e, t, n, r, i) { switch (t) { case "focusin": return Xr = Ns(Xr, e, t, n, r, i), !0;

 case "dragenter": return Yr = Ns(Yr, e, t, n, r, i), !0;

 case "mouseover": return Kr = Ns(Kr, e, t, n, r, i), !0;

 case "pointerover": var o = i.pointerId;

 return ua.set(o, Ns(ua.get(o) || null, e, t, n, r, i)), !0;

 case "gotpointercapture": return o = i.pointerId, fa.set(o, Ns(fa.get(o) || null, e, t, n, r, i)), !0 }return !1 } function C1(e) { var t = Fi(e.target);

 if (t !== null) { var n = Bi(t);

 if (n !== null) { if (t = n.tag, t === 13) { if (t = d1(n), t !== null) { e.blockedOn = t, k1(e.priority, function () { S1(n) });

 return } } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) { e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;

 return } } } e.blockedOn = null } function cc(e) { if (e.blockedOn !== null) return !1;

 for (var t = e.targetContainers;

 0 < t.length;

) { var n = Dh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);

 if (n !== null) return t = Ta(n), t !== null && bp(t), e.blockedOn = n, !1;

 n = e.nativeEvent;

 var r = new n.constructor(n.type, n);

 _h = r, n.target.dispatchEvent(r), _h = null, t.shift() } return !0 } function Jb(e, t, n) { cc(e) && n.delete(t) } function aO() { Ah = !1, Xr !== null && cc(Xr) && (Xr = null), Yr !== null && cc(Yr) && (Yr = null), Kr !== null && cc(Kr) && (Kr = null), ua.forEach(Jb), fa.forEach(Jb) } function js(e, t) { e.blockedOn === t && (e.blockedOn = null, Ah || (Ah = !0, on.unstable_scheduleCallback(on.unstable_NormalPriority, aO))) } function da(e) { function t(i) { return js(i, e) } if (0 < Yl.length) { js(Yl[0], e);

 for (var n = 1;

 n < Yl.length;

 n++) { var r = Yl[n];

 r.blockedOn === e && (r.blockedOn = null) } } for (Xr !== null && js(Xr, e), Yr !== null && js(Yr, e), Kr !== null && js(Kr, e), ua.forEach(t), fa.forEach(t), n = 0;

 n < Wr.length;

 n++)r = Wr[n], r.blockedOn === e && (r.blockedOn = null);

 for (;

 0 < Wr.length && (n = Wr[0], n.blockedOn === null);

)C1(n), n.blockedOn === null && Wr.shift() } var Ao = Fr.ReactCurrentBatchConfig, Cc = !0;

 function lO(e, t, n, r) { var i = ke, o = Ao.transition;

 Ao.transition = null;

 try { ke = 1, xp(e, t, n, r) } finally { ke = i, Ao.transition = o } } function cO(e, t, n, r) { var i = ke, o = Ao.transition;

 Ao.transition = null;

 try { ke = 4, xp(e, t, n, r) } finally { ke = i, Ao.transition = o } } function xp(e, t, n, r) { if (Cc) { var i = Dh(e, t, n, r);

 if (i === null) lh(e, t, r, Rc, n), Zb(e, r);

 else if (sO(i, e, t, n, r)) r.stopPropagation();

 else if (Zb(e, r), 4 & t && -1 < oO.indexOf(e)) { for (;

 i !== null;

) { var o = Ta(i);

 if (o !== null && x1(o), o = Dh(e, t, n, r), o === null && lh(e, t, r, Rc, n), o === i) break;

 i = o } i !== null && r.stopPropagation() } else lh(e, t, r, null, n) } } var Rc = null;

 function Dh(e, t, n, r) { if (Rc = null, e = gp(r), e = Fi(e), e !== null) if (t = Bi(e), t === null) e = null;

 else if (n = t.tag, n === 13) { if (e = d1(t), e !== null) return e;

 e = null } else if (n === 3) { if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;

 e = null } else t !== e && (e = null);

 return Rc = e, null } function R1(e) { switch (e) { case "cancel": case "click": case "close": case "contextmenu": case "copy": case "cut": case "auxclick": case "dblclick": case "dragend": case "dragstart": case "drop": case "focusin": case "focusout": case "input": case "invalid": case "keydown": case "keypress": case "keyup": case "mousedown": case "mouseup": case "paste": case "pause": case "play": case "pointercancel": case "pointerdown": case "pointerup": case "ratechange": case "reset": case "resize": case "seeked": case "submit": case "touchcancel": case "touchend": case "touchstart": case "volumechange": case "change": case "selectionchange": case "textInput": case "compositionstart": case "compositionend": case "compositionupdate": case "beforeblur": case "afterblur": case "beforeinput": case "blur": case "fullscreenchange": case "focus": case "hashchange": case "popstate": case "select": case "selectstart": return 1;

 case "drag": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "mousemove": case "mouseout": case "mouseover": case "pointermove": case "pointerout": case "pointerover": case "scroll": case "toggle": case "touchmove": case "wheel": case "mouseenter": case "mouseleave": case "pointerenter": case "pointerleave": return 4;

 case "message": switch (KM()) { case vp: return 1;

 case g1: return 4;

 case wc: case QM: return 16;

 case v1: return 536870912;

 default: return 16 }default: return 16 } } var Gr = null, Sp = null, uc = null;

 function T1() { if (uc) return uc;

 var e, t, n = Sp, r = n.length, i = "value" in Gr ? Gr.value : Gr.textContent, o = i.length;

 for (e = 0;

 e < r && n[e] === i[e];

 e++);

 var s = r - e;

 for (t = 1;

 t <= s && n[r - t] === i[o - t];

 t++);

 return uc = i.slice(e, 1 < t ? 1 - t : void 0) } function fc(e) { var t = e.keyCode;

 return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 } function Kl() { return !0 } function ex() { return !1 } function an(e) { function t(n, r, i, o, s) { this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;

 for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);

 return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Kl : ex, this.isPropagationStopped = ex, this } return Ue(t.prototype, { preventDefault: function () { this.defaultPrevented = !0;

 var n = this.nativeEvent;

 n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Kl) }, stopPropagation: function () { var n = this.nativeEvent;

 n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Kl) }, persist: function () { }, isPersistent: Kl }), t } var nh, rh, Hs, Go = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 }, wp = an(Go), Ra = Ue({}, Go, { view: 0, detail: 0 }), uO = an(Ra), Wc = Ue({}, Ra, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: kp, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Hs && (Hs && e.type === "mousemove" ? (nh = e.screenX - Hs.screenX, rh = e.screenY - Hs.screenY) : rh = nh = 0, Hs = e), nh) }, movementY: function (e) { return "movementY" in e ? e.movementY : rh } }), tx = an(Wc), fO = Ue({}, Wc, { dataTransfer: 0 }), dO = an(fO), hO = Ue({}, Ra, { relatedTarget: 0 }), ih = an(hO), pO = Ue({}, Go, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mO = an(pO), gO = Ue({}, Go, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : F.clipboardData } }), vO = an(gO), yO = Ue({}, Go, { data: 0 }), nx = an(yO), bO = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, xO = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, SO = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

 function wO(e) { var t = this.nativeEvent;

 return t.getModifierState ? t.getModifierState(e) : !!(e = SO[e]) && !!t[e] } function kp() { return wO } var kO = Ue({}, Ra, { key: function (e) { if (e.key) { var t = bO[e.key] || e.key;

 if (t !== "Unidentified") return t } return e.type === "keypress" ? (e = fc(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xO[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: kp, charCode: function (e) { return e.type === "keypress" ? fc(e) : 0 }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function (e) { return e.type === "keypress" ? fc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }), CO = an(kO), RO = Ue({}, Wc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rx = an(RO), TO = Ue({}, Ra, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: kp }), EO = an(TO), FO = Ue({}, Go, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), PO = an(FO), IO = Ue({}, Wc, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }), _O = an(IO), MO = [9, 13, 27, 32], Cp = Cr && "CompositionEvent" in F, ea = null;

 Cr && "documentMode" in document && (ea = document.documentMode);

 var OO = Cr && "TextEvent" in F && !ea, E1 = Cr && (!Cp || ea && 8 < ea && 11 >= ea), ix = " ", ox = !1;

 function F1(e, t) { switch (e) { case "keyup": return MO.indexOf(t.keyCode) !== -1;

 case "keydown": return t.keyCode !== 229;

 case "keypress": case "mousedown": case "focusout": return !0;

 default: return !1 } } function P1(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null } var ko = !1;

 function LO(e, t) { switch (e) { case "compositionend": return P1(t);

 case "keypress": return t.which !== 32 ? null : (ox = !0, ix);

 case "textInput": return e = t.data, e === ix && ox ? null : e;

 default: return null } } function VO(e, t) { if (ko) return e === "compositionend" || !Cp && F1(e, t) ? (e = T1(), uc = Sp = Gr = null, ko = !1, e) : null;

 switch (e) { case "paste": return null;

 case "keypress": if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char;

 if (t.which) return String.fromCharCode(t.which) } return null;

 case "compositionend": return E1 && t.locale !== "ko" ? null : t.data;

 default: return null } } var AO = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

 function sx(e) { var t = e && e.nodeName && e.nodeName.toLowerCase();

 return t === "input" ? !!AO[e.type] : t === "textarea" } function I1(e, t, n, r) { a1(r), t = Tc(t, "onChange"), 0 < t.length && (n = new wp("onChange", "change", null, n, r), e.push({ event: n, listeners: t })) } var ta = null, ha = null;

 function DO(e) { N1(e, 0) } function Uc(e) { var t = To(e);

 if (e1(t)) return e } function zO(e, t) { if (e === "change") return t } var _1 = !1;

 Cr && (Cr ? (Zl = "oninput" in document, Zl || (oh = document.createElement("div"), oh.setAttribute("oninput", "return;"), Zl = typeof oh.oninput == "function"), Ql = Zl) : Ql = !1, _1 = Ql && (!document.documentMode || 9 < document.documentMode));

 var Ql, Zl, oh;

 function ax() { ta && (ta.detachEvent("onpropertychange", M1), ha = ta = null) } function M1(e) { if (e.propertyName === "value" && Uc(ha)) { var t = [];

 I1(t, ha, e, gp(e)), f1(DO, t) } } function BO(e, t, n) { e === "focusin" ? (ax(), ta = t, ha = n, ta.attachEvent("onpropertychange", M1)) : e === "focusout" && ax() } function $O(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return Uc(ha) } function NO(e, t) { if (e === "click") return Uc(t) } function jO(e, t) { if (e === "input" || e === "change") return Uc(t) } function HO(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t } var Dn = typeof Object.is == "function" ? Object.is : HO;

 function pa(e, t) { if (Dn(e, t)) return !0;

 if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;

 var n = Object.keys(e), r = Object.keys(t);

 if (n.length !== r.length) return !1;

 for (r = 0;

 r < n.length;

 r++) { var i = n[r];

 if (!bh.call(t, i) || !Dn(e[i], t[i])) return !1 } return !0 } function lx(e) { for (;

 e && e.firstChild;

)e = e.firstChild;

 return e } function cx(e, t) { var n = lx(e);

 e = 0;

 for (var r;

 n;

) { if (n.nodeType === 3) { if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };

 e = r } e: { for (;

 n;

) { if (n.nextSibling) { n = n.nextSibling;

 break e } n = n.parentNode } n = void 0 } n = lx(n) } } function O1(e, t) { return !(!e || !t) && (e === t || (!e || e.nodeType !== 3) && (t && t.nodeType === 3 ? O1(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))) } function L1() { for (var e = F, t = bc();

 t instanceof e.HTMLIFrameElement;

) { try { var n = typeof t.contentWindow.location.href == "string" } catch { n = !1 } if (!n) break;

 e = t.contentWindow, t = bc(e.document) } return t } function Rp(e) { var t = e && e.nodeName && e.nodeName.toLowerCase();

 return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true") } function WO(e) { var t = L1(), n = e.focusedElem, r = e.selectionRange;

 if (t !== n && n && n.ownerDocument && O1(n.ownerDocument.documentElement, n)) { if (r !== null && Rp(n)) { if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);

 else if (e = (t = n.ownerDocument || document) && t.defaultView || F, e.getSelection) { e = e.getSelection();

 var i = n.textContent.length, o = Math.min(r.start, i);

 r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = cx(n, o);

 var s = cx(n, r);

 i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t))) } } for (t = [], e = n;

 e = e.parentNode;

)e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });

 for (typeof n.focus == "function" && n.focus(), n = 0;

 n < t.length;

 n++)e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top } } var UO = Cr && "documentMode" in document && 11 >= document.documentMode, Co = null, zh = null, na = null, Bh = !1;

 function ux(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;

 Bh || Co == null || Co !== bc(r) || (r = Co, "selectionStart" in r && Rp(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || F).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), na && pa(na, r) || (na = r, r = Tc(zh, "onSelect"), 0 < r.length && (t = new wp("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Co))) } function Jl(e, t) { var n = {};

 return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n } var Ro = { animationend: Jl("Animation", "AnimationEnd"), animationiteration: Jl("Animation", "AnimationIteration"), animationstart: Jl("Animation", "AnimationStart"), transitionend: Jl("Transition", "TransitionEnd") }, sh = {}, V1 = {};

 Cr && (V1 = document.createElement("div").style, "AnimationEvent" in F || (delete Ro.animationend.animation, delete Ro.animationiteration.animation, delete Ro.animationstart.animation), "TransitionEvent" in F || delete Ro.transitionend.transition);

 function Gc(e) { if (sh[e]) return sh[e];

 if (!Ro[e]) return e;

 var t, n = Ro[e];

 for (t in n) if (n.hasOwnProperty(t) && t in V1) return sh[e] = n[t];

 return e } var A1 = Gc("animationend"), D1 = Gc("animationiteration"), z1 = Gc("animationstart"), B1 = Gc("transitionend"), $1 = new Map, fx = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

 function ii(e, t) { $1.set(e, t), zi(t, [e]) } for (ec = 0;

 ec < fx.length;

 ec++)tc = fx[ec], dx = tc.toLowerCase(), hx = tc[0].toUpperCase() + tc.slice(1), ii(dx, "on" + hx);

 var tc, dx, hx, ec;

 ii(A1, "onAnimationEnd");

 ii(D1, "onAnimationIteration");

 ii(z1, "onAnimationStart");

 ii("dblclick", "onDoubleClick");

 ii("focusin", "onFocus");

 ii("focusout", "onBlur");

 ii(B1, "onTransitionEnd");

 Bo("onMouseEnter", ["mouseout", "mouseover"]);

 Bo("onMouseLeave", ["mouseout", "mouseover"]);

 Bo("onPointerEnter", ["pointerout", "pointerover"]);

 Bo("onPointerLeave", ["pointerout", "pointerover"]);

 zi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));

 zi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));

 zi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);

 zi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));

 zi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));

 zi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));

 var Qs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), GO = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));

 function px(e, t, n) { var r = e.type || "unknown-event";

 e.currentTarget = n, GM(r, t, void 0, e), e.currentTarget = null } function N1(e, t) { t = (4 & t) !== 0;

 for (var n = 0;

 n < e.length;

 n++) { var r = e[n], i = r.event;

 r = r.listeners;

 e: { var o = void 0;

 if (t) for (var s = r.length - 1;

 0 <= s;

 s--) { var a = r[s], l = a.instance, c = a.currentTarget;

 if (a = a.listener, l !== o && i.isPropagationStopped()) break e;

 px(i, a, c), o = l } else for (s = 0;

 s < r.length;

 s++) { if (a = r[s], l = a.instance, c = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;

 px(i, a, c), o = l } } } if (Sc) throw e = Lh, Sc = !1, Lh = null, e } function Le(e, t) { var n = t[Wh];

 n === void 0 && (n = t[Wh] = new Set);

 var r = e + "__bubble";

 n.has(r) || (j1(t, e, 2, !1), n.add(r)) } function ah(e, t, n) { var r = 0;

 t && (r |= 4), j1(n, e, r, t) } var nc = "_reactListening" + Math.random().toString(36).slice(2);

 function ma(e) { if (!e[nc]) { e[nc] = !0, Yx.forEach(function (n) { n !== "selectionchange" && (GO.has(n) || ah(n, !1, e), ah(n, !0, e)) });

 var t = e.nodeType === 9 ? e : e.ownerDocument;

 t === null || t[nc] || (t[nc] = !0, ah("selectionchange", !1, t)) } } function j1(e, t, n, r) { switch (R1(t)) { case 1: var i = lO;

 break;

 case 4: i = cO;

 break;

 default: i = xp }n = i.bind(null, t, n, e), i = void 0, !Oh || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1) } function lh(e, t, n, r, i) { var o = r;

 if ((1 & t) === 0 && (2 & t) === 0 && r !== null) e: for (;

 ;

) { if (r === null) return;

 var s = r.tag;

 if (s === 3 || s === 4) { var a = r.stateNode.containerInfo;

 if (a === i || a.nodeType === 8 && a.parentNode === i) break;

 if (s === 4) for (s = r.return;

 s !== null;

) { var l = s.tag;

 if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;

 s = s.return } for (;

 a !== null;

) { if (s = Fi(a), s === null) return;

 if (l = s.tag, l === 5 || l === 6) { r = o = s;

 continue e } a = a.parentNode } } r = r.return } f1(function () { var c = o, u = gp(n), f = [];

 e: { var d = $1.get(e);

 if (d !== void 0) { var h = wp, p = e;

 switch (e) { case "keypress": if (fc(n) === 0) break e;

 case "keydown": case "keyup": h = CO;

 break;

 case "focusin": p = "focus", h = ih;

 break;

 case "focusout": p = "blur", h = ih;

 break;

 case "beforeblur": case "afterblur": h = ih;

 break;

 case "click": if (n.button === 2) break e;

 case "auxclick": case "dblclick": case "mousedown": case "mousemove": case "mouseup": case "mouseout": case "mouseover": case "contextmenu": h = tx;

 break;

 case "drag": case "dragend": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "dragstart": case "drop": h = dO;

 break;

 case "touchcancel": case "touchend": case "touchmove": case "touchstart": h = EO;

 break;

 case A1: case D1: case z1: h = mO;

 break;

 case B1: h = PO;

 break;

 case "scroll": h = uO;

 break;

 case "wheel": h = _O;

 break;

 case "copy": case "cut": case "paste": h = vO;

 break;

 case "gotpointercapture": case "lostpointercapture": case "pointercancel": case "pointerdown": case "pointermove": case "pointerout": case "pointerover": case "pointerup": h = rx }var v = (4 & t) !== 0, b = !v && e === "scroll", g = v ? d !== null ? d + "Capture" : null : d;

 v = [];

 for (var m, y = c;

 y !== null;

) { m = y;

 var x = m.stateNode;

 if (m.tag === 5 && x !== null && (m = x, g !== null && (x = ca(y, g), x != null && v.push(ga(y, x, m)))), b) break;

 y = y.return } 0 < v.length && (d = new h(d, p, null, n, u), f.push({ event: d, listeners: v })) } } if ((7 & t) === 0) { if (d = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", (!d || n === _h || !(p = n.relatedTarget || n.fromElement) || !Fi(p) && !p[Rr]) && (h || d) && (d = u.window === u ? u : (d = u.ownerDocument) ? d.defaultView || d.parentWindow : F, h ? (p = n.relatedTarget || n.toElement, h = c, p = p ? Fi(p) : null, p !== null && (b = Bi(p), p !== b || p.tag !== 5 && p.tag !== 6) && (p = null)) : (h = null, p = c), h !== p)) { if (v = tx, x = "onMouseLeave", g = "onMouseEnter", y = "mouse", e !== "pointerout" && e !== "pointerover" || (v = rx, x = "onPointerLeave", g = "onPointerEnter", y = "pointer"), b = h == null ? d : To(h), m = p == null ? d : To(p), d = new v(x, y + "leave", h, n, u), d.target = b, d.relatedTarget = m, x = null, Fi(u) === c && (v = new v(g, y + "enter", p, n, u), v.target = m, v.relatedTarget = b, x = v), b = x, h && p) e: { for (v = h, g = p, y = 0, m = v;

 m;

 m = xo(m))y++;

 for (m = 0, x = g;

 x;

 x = xo(x))m++;

 for (;

 0 < y - m;

)v = xo(v), y--;

 for (;

 0 < m - y;

)g = xo(g), m--;

 for (;

 y--;

) { if (v === g || g !== null && v === g.alternate) break e;

 v = xo(v), g = xo(g) } v = null } else v = null;

 h !== null && mx(f, d, h, v, !1), p !== null && b !== null && mx(f, b, p, v, !0) } if (d = c ? To(c) : F, h = d.nodeName && d.nodeName.toLowerCase(), h === "select" || h === "input" && d.type === "file") var C = zO;

 else if (sx(d)) if (_1) C = jO;

 else { C = $O;

 var w = BO } else (h = d.nodeName) && h.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = NO);

 switch (C && (C = C(e, c)) ? I1(f, C, n, u) : (w && w(e, d, c), e === "focusout" && (w = d._wrapperState) && w.controlled && d.type === "number" && Th(d, "number", d.value)), w = c ? To(c) : F, e) { case "focusin": (sx(w) || w.contentEditable === "true") && (Co = w, zh = c, na = null);

 break;

 case "focusout": na = zh = Co = null;

 break;

 case "mousedown": Bh = !0;

 break;

 case "contextmenu": case "mouseup": case "dragend": Bh = !1, ux(f, n, u);

 break;

 case "selectionchange": if (UO) break;

 case "keydown": case "keyup": ux(f, n, u) }var R;

 if (Cp) e: { switch (e) { case "compositionstart": var E = "onCompositionStart";

 break e;

 case "compositionend": E = "onCompositionEnd";

 break e;

 case "compositionupdate": E = "onCompositionUpdate";

 break e }E = void 0 } else ko ? F1(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");

 E && (E1 && n.locale !== "ko" && (ko || E !== "onCompositionStart" ? E === "onCompositionEnd" && ko && (R = T1()) : (Gr = u, Sp = "value" in Gr ? Gr.value : Gr.textContent, ko = !0)), w = Tc(c, E), 0 < w.length && (E = new nx(E, e, null, n, u), f.push({ event: E, listeners: w }), R ? E.data = R : (R = P1(n), R !== null && (E.data = R)))), (R = OO ? LO(e, n) : VO(e, n)) && (c = Tc(c, "onBeforeInput"), 0 < c.length && (u = new nx("onBeforeInput", "beforeinput", null, n, u), f.push({ event: u, listeners: c }), u.data = R)) } N1(f, t) }) } function ga(e, t, n) { return { instance: e, listener: t, currentTarget: n } } function Tc(e, t) { for (var n = t + "Capture", r = [];

 e !== null;

) { var i = e, o = i.stateNode;

 i.tag === 5 && o !== null && (i = o, o = ca(e, n), o != null && r.unshift(ga(e, o, i)), o = ca(e, t), o != null && r.push(ga(e, o, i))), e = e.return } return r } function xo(e) { if (e === null) return null;

 do e = e.return;

 while (e && e.tag !== 5);

 return e || null } function mx(e, t, n, r, i) { for (var o = t._reactName, s = [];

 n !== null && n !== r;

) { var a = n, l = a.alternate, c = a.stateNode;

 if (l !== null && l === r) break;

 a.tag === 5 && c !== null && (a = c, i ? (l = ca(n, o), l != null && s.unshift(ga(n, l, a))) : i || (l = ca(n, o), l != null && s.push(ga(n, l, a)))), n = n.return } s.length !== 0 && e.push({ event: t, listeners: s }) } var qO = /\r\n?/g, XO = /\u0000|\uFFFD/g;

 function gx(e) {
    return (typeof e == "string" ? e : "" + e).replace(qO, `
`).replace(XO, "")
} function rc(e, t, n) { if (t = gx(t), gx(e) !== t && n) throw Error(M(425)) } function Ec() { } var $h = null, Nh = null;

 function jh(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null } var Hh = typeof setTimeout == "function" ? setTimeout : void 0, YO = typeof clearTimeout == "function" ? clearTimeout : void 0, vx = typeof Promise == "function" ? Promise : void 0, KO = typeof queueMicrotask == "function" ? queueMicrotask : typeof vx < "u" ? function (e) { return vx.resolve(null).then(e).catch(QO) } : Hh;

 function QO(e) { setTimeout(function () { throw e }) } function ch(e, t) { var n = t, r = 0;

 do { var i = n.nextSibling;

 if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") { if (r === 0) { e.removeChild(i), da(t);

 return } r-- } else n !== "$" && n !== "$?" && n !== "$!" || r++;

 n = i } while (n);

 da(t) } function Qr(e) { for (;

 e != null;

 e = e.nextSibling) { var t = e.nodeType;

 if (t === 1 || t === 3) break;

 if (t === 8) { if (t = e.data, t === "$" || t === "$!" || t === "$?") break;

 if (t === "/$") return null } } return e } function yx(e) { e = e.previousSibling;

 for (var t = 0;

 e;

) { if (e.nodeType === 8) { var n = e.data;

 if (n === "$" || n === "$!" || n === "$?") { if (t === 0) return e;

 t-- } else n === "/$" && t++ } e = e.previousSibling } return null } var qo = Math.random().toString(36).slice(2), ir = "__reactFiber$" + qo, va = "__reactProps$" + qo, Rr = "__reactContainer$" + qo, Wh = "__reactEvents$" + qo, ZO = "__reactListeners$" + qo, JO = "__reactHandles$" + qo;

 function Fi(e) { var t = e[ir];

 if (t) return t;

 for (var n = e.parentNode;

 n;

) { if (t = n[Rr] || n[ir]) { if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = yx(e);

 e !== null;

) { if (n = e[ir]) return n;

 e = yx(e) } return t } e = n, n = e.parentNode } return null } function Ta(e) { return e = e[ir] || e[Rr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e } function To(e) { if (e.tag === 5 || e.tag === 6) return e.stateNode;

 throw Error(M(33)) } function qc(e) { return e[va] || null } var Uh = [], Eo = -1;

 function oi(e) { return { current: e } } function Ve(e) { 0 > Eo || (e.current = Uh[Eo], Uh[Eo] = null, Eo--) } function Pe(e, t) { Eo++, Uh[Eo] = e.current, e.current = t } var ri = {}, _t = oi(ri), Gt = oi(!1), Oi = ri;

 function $o(e, t) { var n = e.type.contextTypes;

 if (!n) return ri;

 var r = e.stateNode;

 if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;

 var i, o = {};

 for (i in n) o[i] = t[i];

 return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o } function qt(e) { return e = e.childContextTypes, e != null } function Fc() { Ve(Gt), Ve(_t) } function bx(e, t, n) { if (_t.current !== ri) throw Error(M(168));

 Pe(_t, t), Pe(Gt, n) } function H1(e, t, n) { var r = e.stateNode;

 if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;

 r = r.getChildContext();

 for (var i in r) if (!(i in t)) throw Error(M(108, BM(e) || "Unknown", i));

 return Ue({}, n, r) } function Pc(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ri, Oi = _t.current, Pe(_t, e), Pe(Gt, Gt.current), !0 } function xx(e, t, n) { var r = e.stateNode;

 if (!r) throw Error(M(169));

 n ? (e = H1(e, t, Oi), r.__reactInternalMemoizedMergedChildContext = e, Ve(Gt), Ve(_t), Pe(_t, e)) : Ve(Gt), Pe(Gt, n) } var xr = null, Xc = !1, uh = !1;

 function W1(e) { xr === null ? xr = [e] : xr.push(e) } function eL(e) { Xc = !0, W1(e) } function si() { if (!uh && xr !== null) { uh = !0;

 var e = 0, t = ke;

 try { var n = xr;

 for (ke = 1;

 e < n.length;

 e++) { var r = n[e];

 do r = r(!0);

 while (r !== null) } xr = null, Xc = !1 } catch (i) { throw xr !== null && (xr = xr.slice(e + 1)), m1(vp, si), i } finally { ke = t, uh = !1 } } return null } var Fo = [], Po = 0, Ic = null, _c = 0, yn = [], bn = 0, Li = null, Sr = 1, wr = "";

 function Ti(e, t) { Fo[Po++] = _c, Fo[Po++] = Ic, Ic = e, _c = t } function U1(e, t, n) { yn[bn++] = Sr, yn[bn++] = wr, yn[bn++] = Li, Li = e;

 var r = Sr;

 e = wr;

 var i = 32 - Vn(r) - 1;

 r &= ~(1 << i), n += 1;

 var o = 32 - Vn(t) + i;

 if (30 < o) { var s = i - i % 5;

 o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Sr = 1 << 32 - Vn(t) + i | n << i | r, wr = o + e } else Sr = 1 << o | n << i | r, wr = e } function Tp(e) { e.return !== null && (Ti(e, 1), U1(e, 1, 0)) } function Ep(e) { for (;

 e === Ic;

)Ic = Fo[--Po], Fo[Po] = null, _c = Fo[--Po], Fo[Po] = null;

 for (;

 e === Li;

)Li = yn[--bn], yn[bn] = null, wr = yn[--bn], yn[bn] = null, Sr = yn[--bn], yn[bn] = null } var rn = null, nn = null, $e = !1, Ln = null;

 function G1(e, t) { var n = xn(5, null, null, 0);

 n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n) } function Sx(e, t) { switch (e.tag) { case 5: var n = e.type;

 return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null && (e.stateNode = t, rn = e, nn = Qr(t.firstChild), !0);

 case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null && (e.stateNode = t, rn = e, nn = null, !0);

 case 13: return t = t.nodeType !== 8 ? null : t, t !== null && (n = Li !== null ? { id: Sr, overflow: wr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = xn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, rn = e, nn = null, !0);

 default: return !1 } } function Gh(e) { return (1 & e.mode) !== 0 && (128 & e.flags) === 0 } function qh(e) { if ($e) { var t = nn;

 if (t) { var n = t;

 if (!Sx(e, t)) { if (Gh(e)) throw Error(M(418));

 t = Qr(n.nextSibling);

 var r = rn;

 t && Sx(e, t) ? G1(r, n) : (e.flags = -4097 & e.flags | 2, $e = !1, rn = e) } } else { if (Gh(e)) throw Error(M(418));

 e.flags = -4097 & e.flags | 2, $e = !1, rn = e } } } function wx(e) { for (e = e.return;

 e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

)e = e.return;

 rn = e } function ic(e) { if (e !== rn) return !1;

 if (!$e) return wx(e), $e = !0, !1;

 var t;

 if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !jh(e.type, e.memoizedProps)), t && (t = nn)) { if (Gh(e)) throw q1(), Error(M(418));

 for (;

 t;

)G1(e, t), t = Qr(t.nextSibling) } if (wx(e), e.tag === 13) { if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));

 e: { for (e = e.nextSibling, t = 0;

 e;

) { if (e.nodeType === 8) { var n = e.data;

 if (n === "/$") { if (t === 0) { nn = Qr(e.nextSibling);

 break e } t-- } else n !== "$" && n !== "$!" && n !== "$?" || t++ } e = e.nextSibling } nn = null } } else nn = rn ? Qr(e.stateNode.nextSibling) : null;

 return !0 } function q1() { for (var e = nn;

 e;

)e = Qr(e.nextSibling) } function No() { nn = rn = null, $e = !1 } function Fp(e) { Ln === null ? Ln = [e] : Ln.push(e) } var tL = Fr.ReactCurrentBatchConfig;

 function Mn(e, t) { if (e && e.defaultProps) { t = Ue({}, t), e = e.defaultProps;

 for (var n in e) t[n] === void 0 && (t[n] = e[n]);

 return t } return t } var Mc = oi(null), Oc = null, Io = null, Pp = null;

 function Ip() { Pp = Io = Oc = null } function _p(e) { var t = Mc.current;

 Ve(Mc), e._currentValue = t } function Xh(e, t, n) { for (;

 e !== null;

) { var r = e.alternate;

 if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;

 e = e.return } } function Do(e, t) { Oc = e, Pp = Io = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ut = !0), e.firstContext = null) } function wn(e) { var t = e._currentValue;

 if (Pp !== e) if (e = { context: e, memoizedValue: t, next: null }, Io === null) { if (Oc === null) throw Error(M(308));

 Io = e, Oc.dependencies = { lanes: 0, firstContext: e } } else Io = Io.next = e;

 return t } var Pi = null;

 function Mp(e) { Pi === null ? Pi = [e] : Pi.push(e) } function X1(e, t, n, r) { var i = t.interleaved;

 return i === null ? (n.next = n, Mp(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Tr(e, r) } function Tr(e, t) { e.lanes |= t;

 var n = e.alternate;

 for (n !== null && (n.lanes |= t), n = e, e = e.return;

 e !== null;

)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;

 return n.tag === 3 ? n.stateNode : null } var Hr = !1;

 function Op(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } } function Y1(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) } function kr(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null } } function Zr(e, t, n) { var r = e.updateQueue;

 if (r === null) return null;

 if (r = r.shared, (2 & ge) !== 0) { var i = r.pending;

 return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Tr(e, n) } return i = r.interleaved, i === null ? (t.next = t, Mp(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Tr(e, n) } function dc(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, (4194240 & n) !== 0)) { var r = t.lanes;

 r &= e.pendingLanes, n |= r, t.lanes = n, yp(e, n) } } function kx(e, t) { var n = e.updateQueue, r = e.alternate;

 if (r === null || (r = r.updateQueue, n !== r)) e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;

 else { var i = null, o = null;

 if (n = n.firstBaseUpdate, n !== null) { do { var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };

 o === null ? i = o = s : o = o.next = s, n = n.next } while (n !== null);

 o === null ? i = o = t : o = o.next = t } else i = o = t;

 n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n } } function Lc(e, t, n, r) { var i = e.updateQueue;

 Hr = !1;

 var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending;

 if (a !== null) { i.shared.pending = null;

 var l = a, c = l.next;

 l.next = null, s === null ? o = c : s.next = c, s = l;

 var u = e.alternate;

 u !== null && (u = u.updateQueue, a = u.lastBaseUpdate, a !== s && (a === null ? u.firstBaseUpdate = c : a.next = c, u.lastBaseUpdate = l)) } if (o !== null) { var f = i.baseState;

 s = 0, u = c = l = null, a = o;

 do { var d = a.lane, h = a.eventTime;

 if ((r & d) === d) { u !== null && (u = u.next = { eventTime: h, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });

 e: { var p = e, v = a;

 switch (d = t, h = n, v.tag) { case 1: if (p = v.payload, typeof p == "function") { f = p.call(h, f, d);

 break e } f = p;

 break e;

 case 3: p.flags = -65537 & p.flags | 128;

 case 0: if (p = v.payload, d = typeof p == "function" ? p.call(h, f, d) : p, d == null) break e;

 f = Ue({}, f, d);

 break e;

 case 2: Hr = !0 } } a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a)) } else h = { eventTime: h, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, u === null ? (c = u = h, l = f) : u = u.next = h, s |= d;

 if (a = a.next, a === null) { if (a = i.shared.pending, a === null) break;

 d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null } } while (!0);

 if (u === null && (l = f), i.baseState = l, i.firstBaseUpdate = c, i.lastBaseUpdate = u, t = i.shared.interleaved, t !== null) { i = t;

 do s |= i.lane, i = i.next;

 while (i !== t) } else o === null && (i.shared.lanes = 0);

 Ai |= s, e.lanes = s, e.memoizedState = f } } function Cx(e, t, n) { if (e = t.effects, t.effects = null, e !== null) for (t = 0;

 t < e.length;

 t++) { var r = e[t], i = r.callback;

 if (i !== null) { if (r.callback = null, r = n, typeof i != "function") throw Error(M(191, i));

 i.call(r) } } } var K1 = new Xx.Component().refs;

 function Yh(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : Ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n) } var Yc = { isMounted: function (e) { return !!(e = e._reactInternals) && Bi(e) === e }, enqueueSetState: function (e, t, n) { e = e._reactInternals;

 var r = Vt(), i = ei(e), o = kr(r, i);

 o.payload = t, n != null && (o.callback = n), t = Zr(e, o, i), t !== null && (An(t, e, i, r), dc(t, e, i)) }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals;

 var r = Vt(), i = ei(e), o = kr(r, i);

 o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Zr(e, o, i), t !== null && (An(t, e, i, r), dc(t, e, i)) }, enqueueForceUpdate: function (e, t) { e = e._reactInternals;

 var n = Vt(), r = ei(e), i = kr(n, r);

 i.tag = 2, t != null && (i.callback = t), t = Zr(e, i, r), t !== null && (An(t, e, r, n), dc(t, e, r)) } };

 function Rx(e, t, n, r, i, o, s) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : !t.prototype || !t.prototype.isPureReactComponent || !pa(n, r) || !pa(i, o) } function Q1(e, t, n) { var r = !1, i = ri, o = t.contextType;

 return typeof o == "object" && o !== null ? o = wn(o) : (i = qt(t) ? Oi : _t.current, r = t.contextTypes, o = (r = r != null) ? $o(e, i) : ri), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Yc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t } function Tx(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Yc.enqueueReplaceState(t, t.state, null) } function Kh(e, t, n, r) { var i = e.stateNode;

 i.props = n, i.state = e.memoizedState, i.refs = K1, Op(e);

 var o = t.contextType;

 typeof o == "object" && o !== null ? i.context = wn(o) : (o = qt(t) ? Oi : _t.current, i.context = $o(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Yh(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Yc.enqueueReplaceState(i, i.state, null), Lc(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308) } function Ws(e, t, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") { if (n._owner) { if (n = n._owner, n) { if (n.tag !== 1) throw Error(M(309));

 var r = n.stateNode } if (!r) throw Error(M(147, e));

 var i = r, o = "" + e;

 return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (s) { var a = i.refs;

 a === K1 && (a = i.refs = {}), s === null ? delete a[o] : a[o] = s }, t._stringRef = o, t) } if (typeof e != "string") throw Error(M(284));

 if (!n._owner) throw Error(M(290, e)) } return e } function oc(e, t) { throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)) } function Ex(e) { var t = e._init;

 return t(e._payload) } function Z1(e) { function t(g, m) { if (e) { var y = g.deletions;

 y === null ? (g.deletions = [m], g.flags |= 16) : y.push(m) } } function n(g, m) { if (!e) return null;

 for (;

 m !== null;

)t(g, m), m = m.sibling;

 return null } function r(g, m) { for (g = new Map;

 m !== null;

)m.key !== null ? g.set(m.key, m) : g.set(m.index, m), m = m.sibling;

 return g } function i(g, m) { return g = ti(g, m), g.index = 0, g.sibling = null, g } function o(g, m, y) { return g.index = y, e ? (y = g.alternate, y !== null ? (y = y.index, y < m ? (g.flags |= 2, m) : y) : (g.flags |= 2, m)) : (g.flags |= 1048576, m) } function s(g) { return e && g.alternate === null && (g.flags |= 2), g } function a(g, m, y, x) { return m === null || m.tag !== 6 ? (m = vh(y, g.mode, x), m.return = g, m) : (m = i(m, y), m.return = g, m) } function l(g, m, y, x) { var C = y.type;

 return C === wo ? u(g, m, y.props.children, x, y.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === jr && Ex(C) === m.type) ? (x = i(m, y.props), x.ref = Ws(g, m, y), x.return = g, x) : (x = yc(y.type, y.key, y.props, null, g.mode, x), x.ref = Ws(g, m, y), x.return = g, x) } function c(g, m, y, x) { return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = yh(y, g.mode, x), m.return = g, m) : (m = i(m, y.children || []), m.return = g, m) } function u(g, m, y, x, C) { return m === null || m.tag !== 7 ? (m = Mi(y, g.mode, x, C), m.return = g, m) : (m = i(m, y), m.return = g, m) } function f(g, m, y) { if (typeof m == "string" && m !== "" || typeof m == "number") return m = vh("" + m, g.mode, y), m.return = g, m;

 if (typeof m == "object" && m !== null) { switch (m.$$typeof) { case Wl: return y = yc(m.type, m.key, m.props, null, g.mode, y), y.ref = Ws(g, null, m), y.return = g, y;

 case So: return m = yh(m, g.mode, y), m.return = g, m;

 case jr: var x = m._init;

 return f(g, x(m._payload), y) }if (Ys(m) || $s(m)) return m = Mi(m, g.mode, y, null), m.return = g, m;

 oc(g, m) } return null } function d(g, m, y, x) { var C = m !== null ? m.key : null;

 if (typeof y == "string" && y !== "" || typeof y == "number") return C !== null ? null : a(g, m, "" + y, x);

 if (typeof y == "object" && y !== null) { switch (y.$$typeof) { case Wl: return y.key === C ? l(g, m, y, x) : null;

 case So: return y.key === C ? c(g, m, y, x) : null;

 case jr: return C = y._init, d(g, m, C(y._payload), x) }if (Ys(y) || $s(y)) return C !== null ? null : u(g, m, y, x, null);

 oc(g, y) } return null } function h(g, m, y, x, C) { if (typeof x == "string" && x !== "" || typeof x == "number") return g = g.get(y) || null, a(m, g, "" + x, C);

 if (typeof x == "object" && x !== null) { switch (x.$$typeof) { case Wl: return g = g.get(x.key === null ? y : x.key) || null, l(m, g, x, C);

 case So: return g = g.get(x.key === null ? y : x.key) || null, c(m, g, x, C);

 case jr: var w = x._init;

 return h(g, m, y, w(x._payload), C) }if (Ys(x) || $s(x)) return g = g.get(y) || null, u(m, g, x, C, null);

 oc(m, x) } return null } function p(g, m, y, x) { for (var C = null, w = null, R = m, E = m = 0, I = null;

 R !== null && E < y.length;

 E++) { R.index > E ? (I = R, R = null) : I = R.sibling;

 var P = d(g, R, y[E], x);

 if (P === null) { R === null && (R = I);

 break } e && R && P.alternate === null && t(g, R), m = o(P, m, E), w === null ? C = P : w.sibling = P, w = P, R = I } if (E === y.length) return n(g, R), $e && Ti(g, E), C;

 if (R === null) { for (;

 E < y.length;

 E++)R = f(g, y[E], x), R !== null && (m = o(R, m, E), w === null ? C = R : w.sibling = R, w = R);

 return $e && Ti(g, E), C } for (R = r(g, R);

 E < y.length;

 E++)I = h(R, g, E, y[E], x), I !== null && (e && I.alternate !== null && R.delete(I.key === null ? E : I.key), m = o(I, m, E), w === null ? C = I : w.sibling = I, w = I);

 return e && R.forEach(function (z) { return t(g, z) }), $e && Ti(g, E), C } function v(g, m, y, x) { var C = $s(y);

 if (typeof C != "function") throw Error(M(150));

 if (y = C.call(y), y == null) throw Error(M(151));

 for (var w = C = null, R = m, E = m = 0, I = null, P = y.next();

 R !== null && !P.done;

 E++, P = y.next()) { R.index > E ? (I = R, R = null) : I = R.sibling;

 var z = d(g, R, P.value, x);

 if (z === null) { R === null && (R = I);

 break } e && R && z.alternate === null && t(g, R), m = o(z, m, E), w === null ? C = z : w.sibling = z, w = z, R = I } if (P.done) return n(g, R), $e && Ti(g, E), C;

 if (R === null) { for (;

 !P.done;

 E++, P = y.next())P = f(g, P.value, x), P !== null && (m = o(P, m, E), w === null ? C = P : w.sibling = P, w = P);

 return $e && Ti(g, E), C } for (R = r(g, R);

 !P.done;

 E++, P = y.next())P = h(R, g, E, P.value, x), P !== null && (e && P.alternate !== null && R.delete(P.key === null ? E : P.key), m = o(P, m, E), w === null ? C = P : w.sibling = P, w = P);

 return e && R.forEach(function (H) { return t(g, H) }), $e && Ti(g, E), C } function b(g, m, y, x) { if (typeof y == "object" && y !== null && y.type === wo && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) { switch (y.$$typeof) { case Wl: e: { for (var C = y.key, w = m;

 w !== null;

) { if (w.key === C) { if (C = y.type, C === wo) { if (w.tag === 7) { n(g, w.sibling), m = i(w, y.props.children), m.return = g, g = m;

 break e } } else if (w.elementType === C || typeof C == "object" && C !== null && C.$$typeof === jr && Ex(C) === w.type) { n(g, w.sibling), m = i(w, y.props), m.ref = Ws(g, w, y), m.return = g, g = m;

 break e } n(g, w);

 break } t(g, w), w = w.sibling } y.type === wo ? (m = Mi(y.props.children, g.mode, x, y.key), m.return = g, g = m) : (x = yc(y.type, y.key, y.props, null, g.mode, x), x.ref = Ws(g, m, y), x.return = g, g = x) } return s(g);

 case So: e: { for (w = y.key;

 m !== null;

) { if (m.key === w) { if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) { n(g, m.sibling), m = i(m, y.children || []), m.return = g, g = m;

 break e } n(g, m);

 break } t(g, m), m = m.sibling } m = yh(y, g.mode, x), m.return = g, g = m } return s(g);

 case jr: return w = y._init, b(g, m, w(y._payload), x) }if (Ys(y)) return p(g, m, y, x);

 if ($s(y)) return v(g, m, y, x);

 oc(g, y) } return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, m !== null && m.tag === 6 ? (n(g, m.sibling), m = i(m, y), m.return = g, g = m) : (n(g, m), m = vh(y, g.mode, x), m.return = g, g = m), s(g)) : n(g, m) } return b } var jo = Z1(!0), J1 = Z1(!1), Ea = {}, sr = oi(Ea), ya = oi(Ea), ba = oi(Ea);

 function Ii(e) { if (e === Ea) throw Error(M(174));

 return e } function Lp(e, t) { switch (Pe(ba, t), Pe(ya, e), Pe(sr, Ea), e = t.nodeType, e) { case 9: case 11: t = (t = t.documentElement) ? t.namespaceURI : Fh(null, "");

 break;

 default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fh(t, e) }Ve(sr), Pe(sr, t) } function Ho() { Ve(sr), Ve(ya), Ve(ba) } function eS(e) { Ii(ba.current);

 var t = Ii(sr.current), n = Fh(t, e.type);

 t !== n && (Pe(ya, e), Pe(sr, n)) } function Vp(e) { ya.current === e && (Ve(sr), Ve(ya)) } var He = oi(0);

 function Vc(e) { for (var t = e;

 t !== null;

) { if (t.tag === 13) { var n = t.memoizedState;

 if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) { if ((128 & t.flags) !== 0) return t } else if (t.child !== null) { t.child.return = t, t = t.child;

 continue } if (t === e) break;

 for (;

 t.sibling === null;

) { if (t.return === null || t.return === e) return null;

 t = t.return } t.sibling.return = t.return, t = t.sibling } return null } var fh = [];

 function Ap() { for (var e = 0;

 e < fh.length;

 e++)fh[e]._workInProgressVersionPrimary = null;

 fh.length = 0 } var hc = Fr.ReactCurrentDispatcher, dh = Fr.ReactCurrentBatchConfig, Vi = 0, We = null, it = null, pt = null, Ac = !1, ra = !1, xa = 0, nL = 0;

 function Ft() { throw Error(M(321)) } function Dp(e, t) { if (t === null) return !1;

 for (var n = 0;

 n < t.length && n < e.length;

 n++)if (!Dn(e[n], t[n])) return !1;

 return !0 } function zp(e, t, n, r, i, o) { if (Vi = o, We = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, hc.current = e === null || e.memoizedState === null ? sL : aL, e = n(r, i), ra) { o = 0;

 do { if (ra = !1, xa = 0, 25 <= o) throw Error(M(301));

 o += 1, pt = it = null, t.updateQueue = null, hc.current = lL, e = n(r, i) } while (ra) } if (hc.current = Dc, t = it !== null && it.next !== null, Vi = 0, pt = it = We = null, Ac = !1, t) throw Error(M(300));

 return e } function Bp() { var e = xa !== 0;

 return xa = 0, e } function rr() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };

 return pt === null ? We.memoizedState = pt = e : pt = pt.next = e, pt } function kn() { if (it === null) { var e = We.alternate;

 e = e !== null ? e.memoizedState : null } else e = it.next;

 var t = pt === null ? We.memoizedState : pt.next;

 if (t !== null) pt = t, it = e;

 else { if (e === null) throw Error(M(310));

 it = e, e = { memoizedState: it.memoizedState, baseState: it.baseState, baseQueue: it.baseQueue, queue: it.queue, next: null }, pt === null ? We.memoizedState = pt = e : pt = pt.next = e } return pt } function Sa(e, t) { return typeof t == "function" ? t(e) : t } function hh(e) { var t = kn(), n = t.queue;

 if (n === null) throw Error(M(311));

 n.lastRenderedReducer = e;

 var r = it, i = r.baseQueue, o = n.pending;

 if (o !== null) { if (i !== null) { var s = i.next;

 i.next = o.next, o.next = s } r.baseQueue = i = o, n.pending = null } if (i !== null) { o = i.next, r = r.baseState;

 var a = s = null, l = null, c = o;

 do { var u = c.lane;

 if ((Vi & u) === u) l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);

 else { var f = { lane: u, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };

 l === null ? (a = l = f, s = r) : l = l.next = f, We.lanes |= u, Ai |= u } c = c.next } while (c !== null && c !== o);

 l === null ? s = r : l.next = a, Dn(r, t.memoizedState) || (Ut = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r } if (e = n.interleaved, e !== null) { i = e;

 do o = i.lane, We.lanes |= o, Ai |= o, i = i.next;

 while (i !== e) } else i === null && (n.lanes = 0);

 return [t.memoizedState, n.dispatch] } function ph(e) { var t = kn(), n = t.queue;

 if (n === null) throw Error(M(311));

 n.lastRenderedReducer = e;

 var r = n.dispatch, i = n.pending, o = t.memoizedState;

 if (i !== null) { n.pending = null;

 var s = i = i.next;

 do o = e(o, s.action), s = s.next;

 while (s !== i);

 Dn(o, t.memoizedState) || (Ut = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o } return [o, r] } function tS() { } function nS(e, t) { var n = We, r = kn(), i = t(), o = !Dn(r.memoizedState, i);

 if (o && (r.memoizedState = i, Ut = !0), r = r.queue, $p(oS.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || pt !== null && 1 & pt.memoizedState.tag) { if (n.flags |= 2048, wa(9, iS.bind(null, n, r, i, t), void 0, null), mt === null) throw Error(M(349));

 (30 & Vi) !== 0 || rS(n, t, i) } return i } function rS(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = We.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, We.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)) } function iS(e, t, n, r) { t.value = n, t.getSnapshot = r, sS(t) && aS(e) } function oS(e, t, n) { return n(function () { sS(t) && aS(e) }) } function sS(e) { var t = e.getSnapshot;

 e = e.value;

 try { var n = t();

 return !Dn(e, n) } catch { return !0 } } function aS(e) { var t = Tr(e, 1);

 t !== null && An(t, e, 1, -1) } function Fx(e) { var t = rr();

 return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sa, lastRenderedState: e }, t.queue = e, e = e.dispatch = oL.bind(null, We, e), [t.memoizedState, e] } function wa(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = We.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, We.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e } function lS() { return kn().memoizedState } function pc(e, t, n, r) { var i = rr();

 We.flags |= e, i.memoizedState = wa(1 | t, n, void 0, r === void 0 ? null : r) } function Kc(e, t, n, r) { var i = kn();

 r = r === void 0 ? null : r;

 var o = void 0;

 if (it !== null) { var s = it.memoizedState;

 if (o = s.destroy, r !== null && Dp(r, s.deps)) { i.memoizedState = wa(t, n, o, r);

 return } } We.flags |= e, i.memoizedState = wa(1 | t, n, o, r) } function Px(e, t) { return pc(8390656, 8, e, t) } function $p(e, t) { return Kc(2048, 8, e, t) } function cS(e, t) { return Kc(4, 2, e, t) } function uS(e, t) { return Kc(4, 4, e, t) } function fS(e, t) { return typeof t == "function" ? (e = e(), t(e), function () { t(null) }) : t != null ? (e = e(), t.current = e, function () { t.current = null }) : void 0 } function dS(e, t, n) { return n = n != null ? n.concat([e]) : null, Kc(4, 4, fS.bind(null, t, e), n) } function Np() { } function hS(e, t) { var n = kn();

 t = t === void 0 ? null : t;

 var r = n.memoizedState;

 return r !== null && t !== null && Dp(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e) } function pS(e, t) { var n = kn();

 t = t === void 0 ? null : t;

 var r = n.memoizedState;

 return r !== null && t !== null && Dp(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e) } function mS(e, t, n) { return (21 & Vi) === 0 ? (e.baseState && (e.baseState = !1, Ut = !0), e.memoizedState = n) : (Dn(n, t) || (n = y1(), We.lanes |= n, Ai |= n, e.baseState = !0), t) } function rL(e, t) { var n = ke;

 ke = n !== 0 && 4 > n ? n : 4, e(!0);

 var r = dh.transition;

 dh.transition = {};

 try { e(!1), t() } finally { ke = n, dh.transition = r } } function gS() { return kn().memoizedState } function iL(e, t, n) { var r = ei(e);

 if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, vS(e)) yS(t, n);

 else if (n = X1(e, t, n, r), n !== null) { var i = Vt();

 An(n, e, r, i), bS(n, t, r) } } function oL(e, t, n) { var r = ei(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };

 if (vS(e)) yS(t, i);

 else { var o = e.alternate;

 if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try { var s = t.lastRenderedState, a = o(s, n);

 if (i.hasEagerState = !0, i.eagerState = a, Dn(a, s)) { var l = t.interleaved;

 l === null ? (i.next = i, Mp(t)) : (i.next = l.next, l.next = i), t.interleaved = i;

 return } } catch { } n = X1(e, t, i, r), n !== null && (i = Vt(), An(n, e, r, i), bS(n, t, r)) } } function vS(e) { var t = e.alternate;

 return e === We || t !== null && t === We } function yS(e, t) { ra = Ac = !0;

 var n = e.pending;

 n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t } function bS(e, t, n) { if ((4194240 & n) !== 0) { var r = t.lanes;

 r &= e.pendingLanes, n |= r, t.lanes = n, yp(e, n) } } var Dc = { readContext: wn, useCallback: Ft, useContext: Ft, useEffect: Ft, useImperativeHandle: Ft, useInsertionEffect: Ft, useLayoutEffect: Ft, useMemo: Ft, useReducer: Ft, useRef: Ft, useState: Ft, useDebugValue: Ft, useDeferredValue: Ft, useTransition: Ft, useMutableSource: Ft, useSyncExternalStore: Ft, useId: Ft, unstable_isNewReconciler: !1 }, sL = { readContext: wn, useCallback: function (e, t) { return rr().memoizedState = [e, t === void 0 ? null : t], e }, useContext: wn, useEffect: Px, useImperativeHandle: function (e, t, n) { return n = n != null ? n.concat([e]) : null, pc(4194308, 4, fS.bind(null, t, e), n) }, useLayoutEffect: function (e, t) { return pc(4194308, 4, e, t) }, useInsertionEffect: function (e, t) { return pc(4, 2, e, t) }, useMemo: function (e, t) { var n = rr();

 return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e }, useReducer: function (e, t, n) { var r = rr();

 return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = iL.bind(null, We, e), [r.memoizedState, e] }, useRef: function (e) { var t = rr();

 return e = { current: e }, t.memoizedState = e }, useState: Fx, useDebugValue: Np, useDeferredValue: function (e) { return rr().memoizedState = e }, useTransition: function () { var e = Fx(!1), t = e[0];

 return e = rL.bind(null, e[1]), rr().memoizedState = e, [t, e] }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = We, i = rr();

 if ($e) { if (n === void 0) throw Error(M(407));

 n = n() } else { if (n = t(), mt === null) throw Error(M(349));

 (30 & Vi) !== 0 || rS(r, t, n) } i.memoizedState = n;

 var o = { value: n, getSnapshot: t };

 return i.queue = o, Px(oS.bind(null, r, o, e), [e]), r.flags |= 2048, wa(9, iS.bind(null, r, o, n, t), void 0, null), n }, useId: function () { var e = rr(), t = mt.identifierPrefix;

 if ($e) { var n = wr, r = Sr;

 n = (r & ~(1 << 32 - Vn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = xa++, 0 < n && (t += "H" + n.toString(32)), t += ":" } else n = nL++, t = ":" + t + "r" + n.toString(32) + ":";

 return e.memoizedState = t }, unstable_isNewReconciler: !1 }, aL = { readContext: wn, useCallback: hS, useContext: wn, useEffect: $p, useImperativeHandle: dS, useInsertionEffect: cS, useLayoutEffect: uS, useMemo: pS, useReducer: hh, useRef: lS, useState: function () { return hh(Sa) }, useDebugValue: Np, useDeferredValue: function (e) { var t = kn();

 return mS(t, it.memoizedState, e) }, useTransition: function () { var e = hh(Sa)[0], t = kn().memoizedState;

 return [e, t] }, useMutableSource: tS, useSyncExternalStore: nS, useId: gS, unstable_isNewReconciler: !1 }, lL = { readContext: wn, useCallback: hS, useContext: wn, useEffect: $p, useImperativeHandle: dS, useInsertionEffect: cS, useLayoutEffect: uS, useMemo: pS, useReducer: ph, useRef: lS, useState: function () { return ph(Sa) }, useDebugValue: Np, useDeferredValue: function (e) { var t = kn();

 return it === null ? t.memoizedState = e : mS(t, it.memoizedState, e) }, useTransition: function () { var e = ph(Sa)[0], t = kn().memoizedState;

 return [e, t] }, useMutableSource: tS, useSyncExternalStore: nS, useId: gS, unstable_isNewReconciler: !1 };

 function Wo(e, t) {
    try { var n = "", r = t;

 do n += zM(r), r = r.return;

 while (r);

 var i = n } catch (o) {
        i = `
Error generating stack: `+ o.message + `
`+ o.stack
    } return { value: e, source: t, stack: i, digest: null }
} function mh(e, t, n) { return { value: e, source: null, stack: n ?? null, digest: t ?? null } } function Qh(e, t) { try { console.error(t.value) } catch (n) { setTimeout(function () { throw n }) } } var cL = typeof WeakMap == "function" ? WeakMap : Map;

 function xS(e, t, n) { n = kr(-1, n), n.tag = 3, n.payload = { element: null };

 var r = t.value;

 return n.callback = function () { Bc || (Bc = !0, sp = r), Qh(e, t) }, n } function SS(e, t, n) { n = kr(-1, n), n.tag = 3;

 var r = e.type.getDerivedStateFromError;

 if (typeof r == "function") { var i = t.value;

 n.payload = function () { return r(i) }, n.callback = function () { Qh(e, t) } } var o = e.stateNode;

 return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () { Qh(e, t), typeof r != "function" && (Jr === null ? Jr = new Set([this]) : Jr.add(this));

 var s = t.stack;

 this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" }) }), n } function Ix(e, t, n) { var r = e.pingCache;

 if (r === null) { r = e.pingCache = new cL;

 var i = new Set;

 r.set(t, i) } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));

 i.has(n) || (i.add(n), e = kL.bind(null, e, t, n), t.then(e, e)) } function _x(e) { do { var t;

 if ((t = e.tag === 13) && (t = e.memoizedState, t = t === null || t.dehydrated !== null), t) return e;

 e = e.return } while (e !== null);

 return null } function Mx(e, t, n, r, i) { return (1 & e.mode) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = kr(-1, 1), t.tag = 2, Zr(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e) } var uL = Fr.ReactCurrentOwner, Ut = !1;

 function Lt(e, t, n, r) { t.child = e === null ? J1(t, null, n, r) : jo(t, e.child, n, r) } function Ox(e, t, n, r, i) { n = n.render;

 var o = t.ref;

 return Do(t, i), r = zp(e, t, n, r, o, i), n = Bp(), e !== null && !Ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Er(e, t, i)) : ($e && n && Tp(t), t.flags |= 1, Lt(e, t, r, i), t.child) } function Lx(e, t, n, r, i) { if (e === null) { var o = n.type;

 return typeof o == "function" && !Yp(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, wS(e, t, o, r, i)) : (e = yc(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e) } if (o = e.child, (e.lanes & i) === 0) { var s = o.memoizedProps;

 if (n = n.compare, n = n !== null ? n : pa, n(s, r) && e.ref === t.ref) return Er(e, t, i) } return t.flags |= 1, e = ti(o, r), e.ref = t.ref, e.return = t, t.child = e } function wS(e, t, n, r, i) { if (e !== null) { var o = e.memoizedProps;

 if (pa(o, r) && e.ref === t.ref) { if (Ut = !1, t.pendingProps = r = o, (e.lanes & i) === 0) return t.lanes = e.lanes, Er(e, t, i);

 (131072 & e.flags) !== 0 && (Ut = !0) } } return Zh(e, t, n, r, i) } function kS(e, t, n) { var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;

 if (r.mode === "hidden") if ((1 & t.mode) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Pe(Mo, tn), tn |= n;

 else { if ((1073741824 & n) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Pe(Mo, tn), tn |= e, null;

 t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Pe(Mo, tn), tn |= r } else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Pe(Mo, tn), tn |= r;

 return Lt(e, t, i, n), t.child } function CS(e, t) { var n = t.ref;

 (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152) } function Zh(e, t, n, r, i) { var o = qt(n) ? Oi : _t.current;

 return o = $o(t, o), Do(t, i), n = zp(e, t, n, r, o, i), r = Bp(), e !== null && !Ut ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Er(e, t, i)) : ($e && r && Tp(t), t.flags |= 1, Lt(e, t, n, i), t.child) } function Vx(e, t, n, r, i) { if (qt(n)) { var o = !0;

 Pc(t) } else o = !1;

 if (Do(t, i), t.stateNode === null) mc(e, t), Q1(t, n, r), Kh(t, n, r, i), r = !0;

 else if (e === null) { var s = t.stateNode, a = t.memoizedProps;

 s.props = a;

 var l = s.context, c = n.contextType;

 typeof c == "object" && c !== null ? c = wn(c) : (c = qt(n) ? Oi : _t.current, c = $o(t, c));

 var u = n.getDerivedStateFromProps, f = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";

 f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== c) && Tx(t, s, r, c), Hr = !1;

 var d = t.memoizedState;

 s.state = d, Lc(t, r, s, i), l = t.memoizedState, a !== r || d !== l || Gt.current || Hr ? (typeof u == "function" && (Yh(t, n, u, r), l = t.memoizedState), (a = Hr || Rx(t, n, a, r, d, l, c)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = c, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1) } else { s = t.stateNode, Y1(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Mn(t.type, a), s.props = c, f = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = wn(l) : (l = qt(n) ? Oi : _t.current, l = $o(t, l));

 var h = n.getDerivedStateFromProps;

 (u = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && Tx(t, s, r, l), Hr = !1, d = t.memoizedState, s.state = d, Lc(t, r, s, i);

 var p = t.memoizedState;

 a !== f || d !== p || Gt.current || Hr ? (typeof h == "function" && (Yh(t, n, h, r), p = t.memoizedState), (c = Hr || Rx(t, n, c, r, d, p, l) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, p, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, p, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), s.props = r, s.state = p, s.context = l, r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1) } return Jh(e, t, n, r, o, i) } function Jh(e, t, n, r, i, o) { CS(e, t);

 var s = (128 & t.flags) !== 0;

 if (!r && !s) return i && xx(t, n, !1), Er(e, t, o);

 r = t.stateNode, uL.current = t;

 var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();

 return t.flags |= 1, e !== null && s ? (t.child = jo(t, e.child, null, o), t.child = jo(t, null, a, o)) : Lt(e, t, a, o), t.memoizedState = r.state, i && xx(t, n, !0), t.child } function RS(e) { var t = e.stateNode;

 t.pendingContext ? bx(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bx(e, t.context, !1), Lp(e, t.containerInfo) } function Ax(e, t, n, r, i) { return No(), Fp(i), t.flags |= 256, Lt(e, t, n, r), t.child } var ep = { dehydrated: null, treeContext: null, retryLane: 0 };

 function tp(e) { return { baseLanes: e, cachePool: null, transitions: null } } function TS(e, t, n) { var r, i = t.pendingProps, o = He.current, s = !1, a = (128 & t.flags) !== 0;

 if ((r = a) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0), r ? (s = !0, t.flags &= -129) : e !== null && e.memoizedState === null || (o |= 1), Pe(He, 1 & o), e === null) return qh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((1 & t.mode) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (a = i.children, e = i.fallback, s ? (i = t.mode, s = t.child, a = { mode: "hidden", children: a }, (1 & i) === 0 && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = Jc(a, i, 0, null), e = Mi(e, i, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = tp(n), t.memoizedState = ep, e) : jp(t, a));

 if (o = e.memoizedState, o !== null && (r = o.dehydrated, r !== null)) return fL(e, t, a, i, r, o, n);

 if (s) { s = i.fallback, a = t.mode, o = e.child, r = o.sibling;

 var l = { mode: "hidden", children: i.children };

 return (1 & a) === 0 && t.child !== o ? (i = t.child, i.childLanes = 0, i.pendingProps = l, t.deletions = null) : (i = ti(o, l), i.subtreeFlags = 14680064 & o.subtreeFlags), r !== null ? s = ti(r, s) : (s = Mi(s, a, n, null), s.flags |= 2), s.return = t, i.return = t, i.sibling = s, t.child = i, i = s, s = t.child, a = e.child.memoizedState, a = a === null ? tp(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = ep, i } return s = e.child, e = s.sibling, i = ti(s, { mode: "visible", children: i.children }), (1 & t.mode) === 0 && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i } function jp(e, t) { return t = Jc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t } function sc(e, t, n, r) { return r !== null && Fp(r), jo(t, e.child, null, n), e = jp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e } function fL(e, t, n, r, i, o, s) { if (n) return 256 & t.flags ? (t.flags &= -257, r = mh(Error(M(422))), sc(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Jc({ mode: "visible", children: r.children }, i, 0, null), o = Mi(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (1 & t.mode) !== 0 && jo(t, e.child, null, s), t.child.memoizedState = tp(s), t.memoizedState = ep, o);

 if ((1 & t.mode) === 0) return sc(e, t, s, null);

 if (i.data === "$!") { if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;

 return r = a, o = Error(M(419)), r = mh(o, r, void 0), sc(e, t, s, r) } if (a = (s & e.childLanes) !== 0, Ut || a) { if (r = mt, r !== null) { switch (s & -s) { case 4: i = 2;

 break;

 case 16: i = 8;

 break;

 case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: i = 32;

 break;

 case 536870912: i = 268435456;

 break;

 default: i = 0 }i = (i & (r.suspendedLanes | s)) !== 0 ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Tr(e, i), An(r, e, i, -1)) } return Xp(), r = mh(Error(M(421))), sc(e, t, s, r) } return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = CL.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, nn = Qr(i.nextSibling), rn = t, $e = !0, Ln = null, e !== null && (yn[bn++] = Sr, yn[bn++] = wr, yn[bn++] = Li, Sr = e.id, wr = e.overflow, Li = t), t = jp(t, r.children), t.flags |= 4096, t) } function Dx(e, t, n) { e.lanes |= t;

 var r = e.alternate;

 r !== null && (r.lanes |= t), Xh(e.return, t, n) } function gh(e, t, n, r, i) { var o = e.memoizedState;

 o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i) } function ES(e, t, n) { var r = t.pendingProps, i = r.revealOrder, o = r.tail;

 if (Lt(e, t, r.children, n), r = He.current, (2 & r) !== 0) r = 1 & r | 2, t.flags |= 128;

 else { if (e !== null && (128 & e.flags) !== 0) e: for (e = t.child;

 e !== null;

) { if (e.tag === 13) e.memoizedState !== null && Dx(e, n, t);

 else if (e.tag === 19) Dx(e, n, t);

 else if (e.child !== null) { e.child.return = e, e = e.child;

 continue } if (e === t) break e;

 for (;

 e.sibling === null;

) { if (e.return === null || e.return === t) break e;

 e = e.return } e.sibling.return = e.return, e = e.sibling } r &= 1 } if (Pe(He, r), (1 & t.mode) === 0) t.memoizedState = null;

 else switch (i) { case "forwards": for (n = t.child, i = null;

 n !== null;

)e = n.alternate, e !== null && Vc(e) === null && (i = n), n = n.sibling;

 n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), gh(t, !1, i, n, o);

 break;

 case "backwards": for (n = null, i = t.child, t.child = null;

 i !== null;

) { if (e = i.alternate, e !== null && Vc(e) === null) { t.child = i;

 break } e = i.sibling, i.sibling = n, n = i, i = e } gh(t, !0, n, null, o);

 break;

 case "together": gh(t, !1, null, null, void 0);

 break;

 default: t.memoizedState = null }return t.child } function mc(e, t) { (1 & t.mode) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2) } function Er(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), Ai |= t.lanes, (n & t.childLanes) === 0) return null;

 if (e !== null && t.child !== e.child) throw Error(M(153));

 if (t.child !== null) { for (e = t.child, n = ti(e, e.pendingProps), t.child = n, n.return = t;

 e.sibling !== null;

)e = e.sibling, n = n.sibling = ti(e, e.pendingProps), n.return = t;

 n.sibling = null } return t.child } function dL(e, t, n) { switch (t.tag) { case 3: RS(t), No();

 break;

 case 5: eS(t);

 break;

 case 1: qt(t.type) && Pc(t);

 break;

 case 4: Lp(t, t.stateNode.containerInfo);

 break;

 case 10: var r = t.type._context, i = t.memoizedProps.value;

 Pe(Mc, r._currentValue), r._currentValue = i;

 break;

 case 13: if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Pe(He, 1 & He.current), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? TS(e, t, n) : (Pe(He, 1 & He.current), e = Er(e, t, n), e !== null ? e.sibling : null);

 Pe(He, 1 & He.current);

 break;

 case 19: if (r = (n & t.childLanes) !== 0, (128 & e.flags) !== 0) { if (r) return ES(e, t, n);

 t.flags |= 128 } if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Pe(He, He.current), r) break;

 return null;

 case 22: case 23: return t.lanes = 0, kS(e, t, n) }return Er(e, t, n) } var FS, np, PS, IS;

 FS = function (e, t) { for (var n = t.child;

 n !== null;

) { if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);

 else if (n.tag !== 4 && n.child !== null) { n.child.return = n, n = n.child;

 continue } if (n === t) break;

 for (;

 n.sibling === null;

) { if (n.return === null || n.return === t) return;

 n = n.return } n.sibling.return = n.return, n = n.sibling } };

 np = function () { };

 PS = function (e, t, n, r) { var i = e.memoizedProps;

 if (i !== r) { e = t.stateNode, Ii(sr.current);

 var o = null;

 switch (n) { case "input": i = Ch(e, i), r = Ch(e, r), o = [];

 break;

 case "select": i = Ue({}, i, { value: void 0 }), r = Ue({}, r, { value: void 0 }), o = [];

 break;

 case "textarea": i = Eh(e, i), r = Eh(e, r), o = [];

 break;

 default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ec) }Ph(n, r);

 var s;

 n = null;

 for (c in i) if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null) if (c === "style") { var a = i[c];

 for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "") } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (aa.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));

 for (c in r) { var l = r[c];

 if (a = i?.[c], r.hasOwnProperty(c) && l !== a && (l != null || a != null)) if (c === "style") if (a) { for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");

 for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]) } else n || (o || (o = []), o.push(c, n)), n = l;

 else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (aa.hasOwnProperty(c) ? (l != null && c === "onScroll" && Le("scroll", e), o || a === l || (o = [])) : (o = o || []).push(c, l)) } n && (o = o || []).push("style", n);

 var c = o;

 (t.updateQueue = c) && (t.flags |= 4) } };

 IS = function (e, t, n, r) { n !== r && (t.flags |= 4) };

 function Us(e, t) { if (!$e) switch (e.tailMode) { case "hidden": t = e.tail;

 for (var n = null;

 t !== null;

)t.alternate !== null && (n = t), t = t.sibling;

 n === null ? e.tail = null : n.sibling = null;

 break;

 case "collapsed": n = e.tail;

 for (var r = null;

 n !== null;

)n.alternate !== null && (r = n), n = n.sibling;

 r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null } } function Pt(e) { var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;

 if (t) for (var i = e.child;

 i !== null;

)n |= i.lanes | i.childLanes, r |= 14680064 & i.subtreeFlags, r |= 14680064 & i.flags, i.return = e, i = i.sibling;

 else for (i = e.child;

 i !== null;

)n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;

 return e.subtreeFlags |= r, e.childLanes = n, t } function hL(e, t, n) { var r = t.pendingProps;

 switch (Ep(t), t.tag) { case 2: case 16: case 15: case 0: case 11: case 7: case 8: case 12: case 9: case 14: return Pt(t), null;

 case 1: return qt(t.type) && Fc(), Pt(t), null;

 case 3: return r = t.stateNode, Ho(), Ve(Gt), Ve(_t), Ap(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), e !== null && e.child !== null || (ic(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (256 & t.flags) === 0 || (t.flags |= 1024, Ln !== null && (cp(Ln), Ln = null))), np(e, t), Pt(t), null;

 case 5: Vp(t);

 var i = Ii(ba.current);

 if (n = t.type, e !== null && t.stateNode != null) PS(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);

 else { if (!r) { if (t.stateNode === null) throw Error(M(166));

 return Pt(t), null } if (e = Ii(sr.current), ic(t)) { r = t.stateNode, n = t.type;

 var o = t.memoizedProps;

 switch (r[ir] = t, r[va] = o, e = (1 & t.mode) !== 0, n) { case "dialog": Le("cancel", r), Le("close", r);

 break;

 case "iframe": case "object": case "embed": Le("load", r);

 break;

 case "video": case "audio": for (i = 0;

 i < Qs.length;

 i++)Le(Qs[i], r);

 break;

 case "source": Le("error", r);

 break;

 case "img": case "image": case "link": Le("error", r), Le("load", r);

 break;

 case "details": Le("toggle", r);

 break;

 case "input": Ub(r, o), Le("invalid", r);

 break;

 case "select": r._wrapperState = { wasMultiple: !!o.multiple }, Le("invalid", r);

 break;

 case "textarea": qb(r, o), Le("invalid", r) }Ph(n, o), i = null;

 for (var s in o) if (o.hasOwnProperty(s)) { var a = o[s];

 s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && rc(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && rc(r.textContent, a, e), i = ["children", "" + a]) : aa.hasOwnProperty(s) && a != null && s === "onScroll" && Le("scroll", r) } switch (n) { case "input": Ul(r), Gb(r, o, !0);

 break;

 case "textarea": Ul(r), Xb(r);

 break;

 case "select": case "option": break;

 default: typeof o.onClick == "function" && (r.onclick = Ec) }r = i, t.updateQueue = r, r !== null && (t.flags |= 4) } else { s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = r1(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[ir] = t, e[va] = r, FS(e, t, !1, !1), t.stateNode = e;

 e: { switch (s = Ih(n, r), n) { case "dialog": Le("cancel", e), Le("close", e), i = r;

 break;

 case "iframe": case "object": case "embed": Le("load", e), i = r;

 break;

 case "video": case "audio": for (i = 0;

 i < Qs.length;

 i++)Le(Qs[i], e);

 i = r;

 break;

 case "source": Le("error", e), i = r;

 break;

 case "img": case "image": case "link": Le("error", e), Le("load", e), i = r;

 break;

 case "details": Le("toggle", e), i = r;

 break;

 case "input": Ub(e, r), i = Ch(e, r), Le("invalid", e);

 break;

 case "option": i = r;

 break;

 case "select": e._wrapperState = { wasMultiple: !!r.multiple }, i = Ue({}, r, { value: void 0 }), Le("invalid", e);

 break;

 case "textarea": qb(e, r), i = Eh(e, r), Le("invalid", e);

 break;

 default: i = r }Ph(n, i), a = i;

 for (o in a) if (a.hasOwnProperty(o)) { var l = a[o];

 o === "style" ? s1(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && i1(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && la(e, l) : typeof l == "number" && la(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (aa.hasOwnProperty(o) ? l != null && o === "onScroll" && Le("scroll", e) : l != null && dp(e, o, l, s)) } switch (n) { case "input": Ul(e), Gb(e, r, !1);

 break;

 case "textarea": Ul(e), Xb(e);

 break;

 case "option": r.value != null && e.setAttribute("value", "" + ni(r.value));

 break;

 case "select": e.multiple = !!r.multiple, o = r.value, o != null ? Oo(e, !!r.multiple, o, !1) : r.defaultValue != null && Oo(e, !!r.multiple, r.defaultValue, !0);

 break;

 default: typeof i.onClick == "function" && (e.onclick = Ec) }switch (n) { case "button": case "input": case "select": case "textarea": r = !!r.autoFocus;

 break e;

 case "img": r = !0;

 break e;

 default: r = !1 } } r && (t.flags |= 4) } t.ref !== null && (t.flags |= 512, t.flags |= 2097152) } return Pt(t), null;

 case 6: if (e && t.stateNode != null) IS(e, t, e.memoizedProps, r);

 else { if (typeof r != "string" && t.stateNode === null) throw Error(M(166));

 if (n = Ii(ba.current), Ii(sr.current), ic(t)) { if (r = t.stateNode, n = t.memoizedProps, r[ir] = t, (o = r.nodeValue !== n) && (e = rn, e !== null)) switch (e.tag) { case 3: rc(r.nodeValue, n, (1 & e.mode) !== 0);

 break;

 case 5: e.memoizedProps.suppressHydrationWarning !== !0 && rc(r.nodeValue, n, (1 & e.mode) !== 0) }o && (t.flags |= 4) } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ir] = t, t.stateNode = r } return Pt(t), null;

 case 13: if (Ve(He), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) { if ($e && nn !== null && (1 & t.mode) !== 0 && (128 & t.flags) === 0) q1(), No(), t.flags |= 98560, o = !1;

 else if (o = ic(t), r !== null && r.dehydrated !== null) { if (e === null) { if (!o) throw Error(M(318));

 if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(M(317));

 o[ir] = t } else No(), (128 & t.flags) === 0 && (t.memoizedState = null), t.flags |= 4;

 Pt(t), o = !1 } else Ln !== null && (cp(Ln), Ln = null), o = !0;

 if (!o) return 65536 & t.flags ? t : null } return (128 & t.flags) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (1 & t.mode) !== 0 && (e === null || (1 & He.current) !== 0 ? ot === 0 && (ot = 3) : Xp())), t.updateQueue !== null && (t.flags |= 4), Pt(t), null);

 case 4: return Ho(), np(e, t), e === null && ma(t.stateNode.containerInfo), Pt(t), null;

 case 10: return _p(t.type._context), Pt(t), null;

 case 17: return qt(t.type) && Fc(), Pt(t), null;

 case 19: if (Ve(He), o = t.memoizedState, o === null) return Pt(t), null;

 if (r = (128 & t.flags) !== 0, s = o.rendering, s === null) if (r) Us(o, !1);

 else { if (ot !== 0 || e !== null && (128 & e.flags) !== 0) for (e = t.child;

 e !== null;

) { if (s = Vc(e), s !== null) { for (t.flags |= 128, Us(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child;

 n !== null;

)o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;

 return Pe(He, 1 & He.current | 2), t.child } e = e.sibling } o.tail !== null && Je() > Uo && (t.flags |= 128, r = !0, Us(o, !1), t.lanes = 4194304) } else { if (!r) if (e = Vc(s), e !== null) { if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Us(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !$e) return Pt(t), null } else 2 * Je() - o.renderingStartTime > Uo && n !== 1073741824 && (t.flags |= 128, r = !0, Us(o, !1), t.lanes = 4194304);

 o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s) } return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Je(), t.sibling = null, n = He.current, Pe(He, r ? 1 & n | 2 : 1 & n), t) : (Pt(t), null);

 case 22: case 23: return qp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (1 & t.mode) !== 0 ? (1073741824 & tn) !== 0 && (Pt(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Pt(t), null;

 case 24: return null;

 case 25: return null }throw Error(M(156, t.tag)) } function pL(e, t) { switch (Ep(t), t.tag) { case 1: return qt(t.type) && Fc(), e = t.flags, 65536 & e ? (t.flags = -65537 & e | 128, t) : null;

 case 3: return Ho(), Ve(Gt), Ve(_t), Ap(), e = t.flags, (65536 & e) !== 0 && (128 & e) === 0 ? (t.flags = -65537 & e | 128, t) : null;

 case 5: return Vp(t), null;

 case 13: if (Ve(He), e = t.memoizedState, e !== null && e.dehydrated !== null) { if (t.alternate === null) throw Error(M(340));

 No() } return e = t.flags, 65536 & e ? (t.flags = -65537 & e | 128, t) : null;

 case 19: return Ve(He), null;

 case 4: return Ho(), null;

 case 10: return _p(t.type._context), null;

 case 22: case 23: return qp(), null;

 case 24: return null;

 default: return null } } var ac = !1, It = !1, mL = typeof WeakSet == "function" ? WeakSet : Set, N = null;

 function _o(e, t) { var n = e.ref;

 if (n !== null) if (typeof n == "function") try { n(null) } catch (r) { Ke(e, t, r) } else n.current = null } function _S(e, t, n) { try { n() } catch (r) { Ke(e, t, r) } } var zx = !1;

 function gL(e, t) { if ($h = Cc, e = L1(), Rp(e)) { if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };

 else e: { n = (n = e.ownerDocument) && n.defaultView || F;

 var r = n.getSelection && n.getSelection();

 if (r && r.rangeCount !== 0) { n = r.anchorNode;

 var i = r.anchorOffset, o = r.focusNode;

 r = r.focusOffset;

 try { n.nodeType, o.nodeType } catch { n = null;

 break e } var s = 0, a = -1, l = -1, c = 0, u = 0, f = e, d = null;

 t: for (;

 ;

) { for (var h;

 f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (h = f.firstChild) !== null;

)d = f, f = h;

 for (;

 ;

) { if (f === e) break t;

 if (d === n && ++c === i && (a = s), d === o && ++u === r && (l = s), (h = f.nextSibling) !== null) break;

 f = d, d = f.parentNode } f = h } n = a === -1 || l === -1 ? null : { start: a, end: l } } else n = null } n = n || { start: 0, end: 0 } } else n = null;

 for (Nh = { focusedElem: e, selectionRange: n }, Cc = !1, N = t;

 N !== null;

)if (t = N, e = t.child, (1028 & t.subtreeFlags) !== 0 && e !== null) e.return = t, N = e;

 else for (;

 N !== null;

) { t = N;

 try { var p = t.alternate;

 if ((1024 & t.flags) !== 0) switch (t.tag) { case 0: case 11: case 15: break;

 case 1: if (p !== null) { var v = p.memoizedProps, b = p.memoizedState, g = t.stateNode, m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Mn(t.type, v), b);

 g.__reactInternalSnapshotBeforeUpdate = m } break;

 case 3: var y = t.stateNode.containerInfo;

 y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);

 break;

 case 5: case 6: case 4: case 17: break;

 default: throw Error(M(163)) } } catch (x) { Ke(t, t.return, x) } if (e = t.sibling, e !== null) { e.return = t.return, N = e;

 break } N = t.return } return p = zx, zx = !1, p } function ia(e, t, n) { var r = t.updateQueue;

 if (r = r !== null ? r.lastEffect : null, r !== null) { var i = r = r.next;

 do { if ((i.tag & e) === e) { var o = i.destroy;

 i.destroy = void 0, o !== void 0 && _S(t, n, o) } i = i.next } while (i !== r) } } function Qc(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) { var n = t = t.next;

 do { if ((n.tag & e) === e) { var r = n.create;

 n.destroy = r() } n = n.next } while (n !== t) } } function rp(e) { var t = e.ref;

 if (t !== null) { var n = e.stateNode;

 switch (e.tag) { case 5: e = n;

 break;

 default: e = n }typeof t == "function" ? t(e) : t.current = e } } function MS(e) { var t = e.alternate;

 t !== null && (e.alternate = null, MS(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ir], delete t[va], delete t[Wh], delete t[ZO], delete t[JO])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null } function OS(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4 } function Bx(e) { e: for (;

 ;

) { for (;

 e.sibling === null;

) { if (e.return === null || OS(e.return)) return null;

 e = e.return } for (e.sibling.return = e.return, e = e.sibling;

 e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

) { if (2 & e.flags || e.child === null || e.tag === 4) continue e;

 e.child.return = e, e = e.child } if (!(2 & e.flags)) return e.stateNode } } function ip(e, t, n) { var r = e.tag;

 if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ec));

 else if (r !== 4 && (e = e.child, e !== null)) for (ip(e, t, n), e = e.sibling;

 e !== null;

)ip(e, t, n), e = e.sibling } function op(e, t, n) { var r = e.tag;

 if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);

 else if (r !== 4 && (e = e.child, e !== null)) for (op(e, t, n), e = e.sibling;

 e !== null;

)op(e, t, n), e = e.sibling } var bt = null, On = !1;

 function Nr(e, t, n) { for (n = n.child;

 n !== null;

)LS(e, t, n), n = n.sibling } function LS(e, t, n) { if (or && typeof or.onCommitFiberUnmount == "function") try { or.onCommitFiberUnmount(Hc, n) } catch { } switch (n.tag) { case 5: It || _o(n, t);

 case 6: var r = bt, i = On;

 bt = null, Nr(e, t, n), bt = r, On = i, bt !== null && (On ? (e = bt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : bt.removeChild(n.stateNode));

 break;

 case 18: bt !== null && (On ? (e = bt, n = n.stateNode, e.nodeType === 8 ? ch(e.parentNode, n) : e.nodeType === 1 && ch(e, n), da(e)) : ch(bt, n.stateNode));

 break;

 case 4: r = bt, i = On, bt = n.stateNode.containerInfo, On = !0, Nr(e, t, n), bt = r, On = i;

 break;

 case 0: case 11: case 14: case 15: if (!It && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) { i = r = r.next;

 do { var o = i, s = o.destroy;

 o = o.tag, s !== void 0 && ((2 & o) !== 0 || (4 & o) !== 0) && _S(n, t, s), i = i.next } while (i !== r) } Nr(e, t, n);

 break;

 case 1: if (!It && (_o(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try { r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount() } catch (a) { Ke(n, t, a) } Nr(e, t, n);

 break;

 case 21: Nr(e, t, n);

 break;

 case 22: 1 & n.mode ? (It = (r = It) || n.memoizedState !== null, Nr(e, t, n), It = r) : Nr(e, t, n);

 break;

 default: Nr(e, t, n) } } function $x(e) { var t = e.updateQueue;

 if (t !== null) { e.updateQueue = null;

 var n = e.stateNode;

 n === null && (n = e.stateNode = new mL), t.forEach(function (r) { var i = RL.bind(null, e, r);

 n.has(r) || (n.add(r), r.then(i, i)) }) } } function _n(e, t) { var n = t.deletions;

 if (n !== null) for (var r = 0;

 r < n.length;

 r++) { var i = n[r];

 try { var o = e, s = t, a = s;

 e: for (;

 a !== null;

) { switch (a.tag) { case 5: bt = a.stateNode, On = !1;

 break e;

 case 3: bt = a.stateNode.containerInfo, On = !0;

 break e;

 case 4: bt = a.stateNode.containerInfo, On = !0;

 break e }a = a.return } if (bt === null) throw Error(M(160));

 LS(o, s, i), bt = null, On = !1;

 var l = i.alternate;

 l !== null && (l.return = null), i.return = null } catch (c) { Ke(i, t, c) } } if (12854 & t.subtreeFlags) for (t = t.child;

 t !== null;

)VS(t, e), t = t.sibling } function VS(e, t) { var n = e.alternate, r = e.flags;

 switch (e.tag) { case 0: case 11: case 14: case 15: if (_n(t, e), nr(e), 4 & r) { try { ia(3, e, e.return), Qc(3, e) } catch (v) { Ke(e, e.return, v) } try { ia(5, e, e.return) } catch (v) { Ke(e, e.return, v) } } break;

 case 1: _n(t, e), nr(e), 512 & r && n !== null && _o(n, n.return);

 break;

 case 5: if (_n(t, e), nr(e), 512 & r && n !== null && _o(n, n.return), 32 & e.flags) { var i = e.stateNode;

 try { la(i, "") } catch (v) { Ke(e, e.return, v) } } if (4 & r && (i = e.stateNode, i != null)) { var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;

 if (e.updateQueue = null, l !== null) try { a === "input" && o.type === "radio" && o.name != null && t1(i, o), Ih(a, s);

 var c = Ih(a, o);

 for (s = 0;

 s < l.length;

 s += 2) { var u = l[s], f = l[s + 1];

 u === "style" ? s1(i, f) : u === "dangerouslySetInnerHTML" ? i1(i, f) : u === "children" ? la(i, f) : dp(i, u, f, c) } switch (a) { case "input": Rh(i, o);

 break;

 case "textarea": n1(i, o);

 break;

 case "select": var d = i._wrapperState.wasMultiple;

 i._wrapperState.wasMultiple = !!o.multiple;

 var h = o.value;

 h != null ? Oo(i, !!o.multiple, h, !1) : d !== !!o.multiple && (o.defaultValue != null ? Oo(i, !!o.multiple, o.defaultValue, !0) : Oo(i, !!o.multiple, o.multiple ? [] : "", !1)) }i[va] = o } catch (v) { Ke(e, e.return, v) } } break;

 case 6: if (_n(t, e), nr(e), 4 & r) { if (e.stateNode === null) throw Error(M(162));

 i = e.stateNode, o = e.memoizedProps;

 try { i.nodeValue = o } catch (v) { Ke(e, e.return, v) } } break;

 case 3: if (_n(t, e), nr(e), 4 & r && n !== null && n.memoizedState.isDehydrated) try { da(t.containerInfo) } catch (v) { Ke(e, e.return, v) } break;

 case 4: _n(t, e), nr(e);

 break;

 case 13: _n(t, e), nr(e), i = e.child, 8192 & i.flags && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Up = Je())), 4 & r && $x(e);

 break;

 case 22: if (u = n !== null && n.memoizedState !== null, 1 & e.mode ? (It = (c = It) || u, _n(t, e), It = c) : _n(t, e), nr(e), 8192 & r) { if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && (1 & e.mode) !== 0) for (N = e, u = e.child;

 u !== null;

) { for (f = N = u;

 N !== null;

) { switch (d = N, h = d.child, d.tag) { case 0: case 11: case 14: case 15: ia(4, d, d.return);

 break;

 case 1: _o(d, d.return);

 var p = d.stateNode;

 if (typeof p.componentWillUnmount == "function") { r = d, n = d.return;

 try { t = r, p.props = t.memoizedProps, p.state = t.memoizedState, p.componentWillUnmount() } catch (v) { Ke(r, n, v) } } break;

 case 5: _o(d, d.return);

 break;

 case 22: if (d.memoizedState !== null) { jx(f);

 continue } }h !== null ? (h.return = d, N = h) : jx(f) } u = u.sibling } e: for (u = null, f = e;

 ;

) { if (f.tag === 5) { if (u === null) { u = f;

 try { i = f.stateNode, c ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = o1("display", s)) } catch (v) { Ke(e, e.return, v) } } } else if (f.tag === 6) { if (u === null) try { f.stateNode.nodeValue = c ? "" : f.memoizedProps } catch (v) { Ke(e, e.return, v) } } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) { f.child.return = f, f = f.child;

 continue } if (f === e) break e;

 for (;

 f.sibling === null;

) { if (f.return === null || f.return === e) break e;

 u === f && (u = null), f = f.return } u === f && (u = null), f.sibling.return = f.return, f = f.sibling } } break;

 case 19: _n(t, e), nr(e), 4 & r && $x(e);

 break;

 case 21: break;

 default: _n(t, e), nr(e) } } function nr(e) { var t = e.flags;

 if (2 & t) { try { e: { for (var n = e.return;

 n !== null;

) { if (OS(n)) { var r = n;

 break e } n = n.return } throw Error(M(160)) } switch (r.tag) { case 5: var i = r.stateNode;

 32 & r.flags && (la(i, ""), r.flags &= -33);

 var o = Bx(e);

 op(e, o, i);

 break;

 case 3: case 4: var s = r.stateNode.containerInfo, a = Bx(e);

 ip(e, a, s);

 break;

 default: throw Error(M(161)) } } catch (l) { Ke(e, e.return, l) } e.flags &= -3 } 4096 & t && (e.flags &= -4097) } function vL(e, t, n) { N = e, AS(e, t, n) } function AS(e, t, n) { for (var r = (1 & e.mode) !== 0;

 N !== null;

) { var i = N, o = i.child;

 if (i.tag === 22 && r) { var s = i.memoizedState !== null || ac;

 if (!s) { var a = i.alternate, l = a !== null && a.memoizedState !== null || It;

 a = ac;

 var c = It;

 if (ac = s, (It = l) && !c) for (N = i;

 N !== null;

)s = N, l = s.child, s.tag === 22 && s.memoizedState !== null ? Hx(i) : l !== null ? (l.return = s, N = l) : Hx(i);

 for (;

 o !== null;

)N = o, AS(o, t, n), o = o.sibling;

 N = i, ac = a, It = c } Nx(e, t, n) } else (8772 & i.subtreeFlags) !== 0 && o !== null ? (o.return = i, N = o) : Nx(e, t, n) } } function Nx(e) { for (;

 N !== null;

) { var t = N;

 if ((8772 & t.flags) !== 0) { var n = t.alternate;

 try { if ((8772 & t.flags) !== 0) switch (t.tag) { case 0: case 11: case 15: It || Qc(5, t);

 break;

 case 1: var r = t.stateNode;

 if (4 & t.flags && !It) if (n === null) r.componentDidMount();

 else { var i = t.elementType === t.type ? n.memoizedProps : Mn(t.type, n.memoizedProps);

 r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate) } var o = t.updateQueue;

 o !== null && Cx(t, o, r);

 break;

 case 3: var s = t.updateQueue;

 if (s !== null) { if (n = null, t.child !== null) switch (t.child.tag) { case 5: n = t.child.stateNode;

 break;

 case 1: n = t.child.stateNode }Cx(t, s, n) } break;

 case 5: var a = t.stateNode;

 if (n === null && 4 & t.flags) { n = a;

 var l = t.memoizedProps;

 switch (t.type) { case "button": case "input": case "select": case "textarea": l.autoFocus && n.focus();

 break;

 case "img": l.src && (n.src = l.src) } } break;

 case 6: break;

 case 4: break;

 case 12: break;

 case 13: if (t.memoizedState === null) { var c = t.alternate;

 if (c !== null) { var u = c.memoizedState;

 if (u !== null) { var f = u.dehydrated;

 f !== null && da(f) } } } break;

 case 19: case 17: case 21: case 22: case 23: case 25: break;

 default: throw Error(M(163)) }It || 512 & t.flags && rp(t) } catch (d) { Ke(t, t.return, d) } } if (t === e) { N = null;

 break } if (n = t.sibling, n !== null) { n.return = t.return, N = n;

 break } N = t.return } } function jx(e) { for (;

 N !== null;

) { var t = N;

 if (t === e) { N = null;

 break } var n = t.sibling;

 if (n !== null) { n.return = t.return, N = n;

 break } N = t.return } } function Hx(e) { for (;

 N !== null;

) { var t = N;

 try { switch (t.tag) { case 0: case 11: case 15: var n = t.return;

 try { Qc(4, t) } catch (l) { Ke(t, n, l) } break;

 case 1: var r = t.stateNode;

 if (typeof r.componentDidMount == "function") { var i = t.return;

 try { r.componentDidMount() } catch (l) { Ke(t, i, l) } } var o = t.return;

 try { rp(t) } catch (l) { Ke(t, o, l) } break;

 case 5: var s = t.return;

 try { rp(t) } catch (l) { Ke(t, s, l) } } } catch (l) { Ke(t, t.return, l) } if (t === e) { N = null;

 break } var a = t.sibling;

 if (a !== null) { a.return = t.return, N = a;

 break } N = t.return } } var yL = Math.ceil, zc = Fr.ReactCurrentDispatcher, Hp = Fr.ReactCurrentOwner, Sn = Fr.ReactCurrentBatchConfig, ge = 0, mt = null, tt = null, xt = 0, tn = 0, Mo = oi(0), ot = 0, ka = null, Ai = 0, Zc = 0, Wp = 0, oa = null, Wt = null, Up = 0, Uo = 1 / 0, br = null, Bc = !1, sp = null, Jr = null, lc = !1, qr = null, $c = 0, sa = 0, ap = null, gc = -1, vc = 0;

 function Vt() { return (6 & ge) !== 0 ? Je() : gc !== -1 ? gc : gc = Je() } function ei(e) { return (1 & e.mode) === 0 ? 1 : (2 & ge) !== 0 && xt !== 0 ? xt & -xt : tL.transition !== null ? (vc === 0 && (vc = y1()), vc) : (e = ke, e !== 0 || (e = F.event, e = e === void 0 ? 16 : R1(e.type)), e) } function An(e, t, n, r) { if (50 < sa) throw sa = 0, ap = null, Error(M(185));

 Ca(e, n, r), (2 & ge) !== 0 && e === mt || (e === mt && ((2 & ge) === 0 && (Zc |= n), ot === 4 && Ur(e, xt)), Xt(e, r), n === 1 && ge === 0 && (1 & t.mode) === 0 && (Uo = Je() + 500, Xc && si())) } function Xt(e, t) { var n = e.callbackNode;

 rO(e, t);

 var r = kc(e, e === mt ? xt : 0);

 if (r === 0) n !== null && Qb(n), e.callbackNode = null, e.callbackPriority = 0;

 else if (t = r & -r, e.callbackPriority !== t) { if (n != null && Qb(n), t === 1) e.tag === 0 ? eL(Wx.bind(null, e)) : W1(Wx.bind(null, e)), KO(function () { (6 & ge) === 0 && si() }), n = null;

 else { switch (b1(r)) { case 1: n = vp;

 break;

 case 4: n = g1;

 break;

 case 16: n = wc;

 break;

 case 536870912: n = v1;

 break;

 default: n = wc }n = WS(n, DS.bind(null, e)) } e.callbackPriority = t, e.callbackNode = n } } function DS(e, t) { if (gc = -1, vc = 0, (6 & ge) !== 0) throw Error(M(327));

 var n = e.callbackNode;

 if (zo() && e.callbackNode !== n) return null;

 var r = kc(e, e === mt ? xt : 0);

 if (r === 0) return null;

 if ((30 & r) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Nc(e, r);

 else { t = r;

 var i = ge;

 ge |= 2;

 var o = BS();

 mt === e && xt === t || (br = null, Uo = Je() + 500, _i(e, t));

 do try { SL();

 break } catch (a) { zS(e, a) } while (!0);

 Ip(), zc.current = o, ge = i, tt !== null ? t = 0 : (mt = null, xt = 0, t = ot) } if (t !== 0) { if (t === 2 && (i = Vh(e), i !== 0 && (r = i, t = lp(e, i))), t === 1) throw n = ka, _i(e, 0), Ur(e, r), Xt(e, Je()), n;

 if (t === 6) Ur(e, r);

 else { if (i = e.current.alternate, (30 & r) === 0 && !bL(i) && (t = Nc(e, r), t === 2 && (o = Vh(e), o !== 0 && (r = o, t = lp(e, o))), t === 1)) throw n = ka, _i(e, 0), Ur(e, r), Xt(e, Je()), n;

 switch (e.finishedWork = i, e.finishedLanes = r, t) { case 0: case 1: throw Error(M(345));

 case 2: Ei(e, Wt, br);

 break;

 case 3: if (Ur(e, r), (130023424 & r) === r && (t = Up + 500 - Je(), 10 < t)) { if (kc(e, 0) !== 0) break;

 if (i = e.suspendedLanes, (i & r) !== r) { Vt(), e.pingedLanes |= e.suspendedLanes & i;

 break } e.timeoutHandle = Hh(Ei.bind(null, e, Wt, br), t);

 break } Ei(e, Wt, br);

 break;

 case 4: if (Ur(e, r), (4194240 & r) === r) break;

 for (t = e.eventTimes, i = -1;

 0 < r;

) { var s = 31 - Vn(r);

 o = 1 << s, s = t[s], s > i && (i = s), r &= ~o } if (r = i, r = Je() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yL(r / 1960)) - r, 10 < r) { e.timeoutHandle = Hh(Ei.bind(null, e, Wt, br), r);

 break } Ei(e, Wt, br);

 break;

 case 5: Ei(e, Wt, br);

 break;

 default: throw Error(M(329)) } } } return Xt(e, Je()), e.callbackNode === n ? DS.bind(null, e) : null } function lp(e, t) { var n = oa;

 return e.current.memoizedState.isDehydrated && (_i(e, t).flags |= 256), e = Nc(e, t), e !== 2 && (t = Wt, Wt = n, t !== null && cp(t)), e } function cp(e) { Wt === null ? Wt = e : Wt.push.apply(Wt, e) } function bL(e) { for (var t = e;

 ;

) { if (16384 & t.flags) { var n = t.updateQueue;

 if (n !== null && (n = n.stores, n !== null)) for (var r = 0;

 r < n.length;

 r++) { var i = n[r], o = i.getSnapshot;

 i = i.value;

 try { if (!Dn(o(), i)) return !1 } catch { return !1 } } } if (n = t.child, 16384 & t.subtreeFlags && n !== null) n.return = t, t = n;

 else { if (t === e) break;

 for (;

 t.sibling === null;

) { if (t.return === null || t.return === e) return !0;

 t = t.return } t.sibling.return = t.return, t = t.sibling } } return !0 } function Ur(e, t) { for (t &= ~Wp, t &= ~Zc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;

 0 < t;

) { var n = 31 - Vn(t), r = 1 << n;

 e[n] = -1, t &= ~r } } function Wx(e) { if ((6 & ge) !== 0) throw Error(M(327));

 zo();

 var t = kc(e, 0);

 if ((1 & t) === 0) return Xt(e, Je()), null;

 var n = Nc(e, t);

 if (e.tag !== 0 && n === 2) { var r = Vh(e);

 r !== 0 && (t = r, n = lp(e, r)) } if (n === 1) throw n = ka, _i(e, 0), Ur(e, t), Xt(e, Je()), n;

 if (n === 6) throw Error(M(345));

 return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ei(e, Wt, br), Xt(e, Je()), null } function Gp(e, t) { var n = ge;

 ge |= 1;

 try { return e(t) } finally { ge = n, ge === 0 && (Uo = Je() + 500, Xc && si()) } } function Di(e) { qr !== null && qr.tag === 0 && (6 & ge) === 0 && zo();

 var t = ge;

 ge |= 1;

 var n = Sn.transition, r = ke;

 try { if (Sn.transition = null, ke = 1, e) return e() } finally { ke = r, Sn.transition = n, ge = t, (6 & ge) === 0 && si() } } function qp() { tn = Mo.current, Ve(Mo) } function _i(e, t) { e.finishedWork = null, e.finishedLanes = 0;

 var n = e.timeoutHandle;

 if (n !== -1 && (e.timeoutHandle = -1, YO(n)), tt !== null) for (n = tt.return;

 n !== null;

) { var r = n;

 switch (Ep(r), r.tag) { case 1: r = r.type.childContextTypes, r != null && Fc();

 break;

 case 3: Ho(), Ve(Gt), Ve(_t), Ap();

 break;

 case 5: Vp(r);

 break;

 case 4: Ho();

 break;

 case 13: Ve(He);

 break;

 case 19: Ve(He);

 break;

 case 10: _p(r.type._context);

 break;

 case 22: case 23: qp() }n = n.return } if (mt = e, tt = e = ti(e.current, null), xt = tn = t, ot = 0, ka = null, Wp = Zc = Ai = 0, Wt = oa = null, Pi !== null) { for (t = 0;

 t < Pi.length;

 t++)if (n = Pi[t], r = n.interleaved, r !== null) { n.interleaved = null;

 var i = r.next, o = n.pending;

 if (o !== null) { var s = o.next;

 o.next = i, r.next = s } n.pending = r } Pi = null } return e } function zS(e, t) { do { var n = tt;

 try { if (Ip(), hc.current = Dc, Ac) { for (var r = We.memoizedState;

 r !== null;

) { var i = r.queue;

 i !== null && (i.pending = null), r = r.next } Ac = !1 } if (Vi = 0, pt = it = We = null, ra = !1, xa = 0, Hp.current = null, n === null || n.return === null) { ot = 1, ka = t, tt = null;

 break } e: { var o = e, s = n.return, a = n, l = t;

 if (t = xt, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") { var c = l, u = a, f = u.tag;

 if ((1 & u.mode) === 0 && (f === 0 || f === 11 || f === 15)) { var d = u.alternate;

 d ? (u.updateQueue = d.updateQueue, u.memoizedState = d.memoizedState, u.lanes = d.lanes) : (u.updateQueue = null, u.memoizedState = null) } var h = _x(s);

 if (h !== null) { h.flags &= -257, Mx(h, s, a, o, t), 1 & h.mode && Ix(o, c, t), t = h, l = c;

 var p = t.updateQueue;

 if (p === null) { var v = new Set;

 v.add(l), t.updateQueue = v } else p.add(l);

 break e } if ((1 & t) === 0) { Ix(o, c, t), Xp();

 break e } l = Error(M(426)) } else if ($e && 1 & a.mode) { var b = _x(s);

 if (b !== null) { (65536 & b.flags) === 0 && (b.flags |= 256), Mx(b, s, a, o, t), Fp(Wo(l, a));

 break e } } o = l = Wo(l, a), ot !== 4 && (ot = 2), oa === null ? oa = [o] : oa.push(o), o = s;

 do { switch (o.tag) { case 3: o.flags |= 65536, t &= -t, o.lanes |= t;

 var g = xS(o, l, t);

 kx(o, g);

 break e;

 case 1: a = l;

 var m = o.type, y = o.stateNode;

 if ((128 & o.flags) === 0 && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Jr === null || !Jr.has(y)))) { o.flags |= 65536, t &= -t, o.lanes |= t;

 var x = SS(o, a, t);

 kx(o, x);

 break e } }o = o.return } while (o !== null) } NS(n) } catch (C) { t = C, tt === n && n !== null && (tt = n = n.return);

 continue } break } while (!0) } function BS() { var e = zc.current;

 return zc.current = Dc, e === null ? Dc : e } function Xp() { ot !== 0 && ot !== 3 && ot !== 2 || (ot = 4), mt === null || (268435455 & Ai) === 0 && (268435455 & Zc) === 0 || Ur(mt, xt) } function Nc(e, t) { var n = ge;

 ge |= 2;

 var r = BS();

 mt === e && xt === t || (br = null, _i(e, t));

 do try { xL();

 break } catch (i) { zS(e, i) } while (!0);

 if (Ip(), ge = n, zc.current = r, tt !== null) throw Error(M(261));

 return mt = null, xt = 0, ot } function xL() { for (;

 tt !== null;

)$S(tt) } function SL() { for (;

 tt !== null && !XM();

)$S(tt) } function $S(e) { var t = HS(e.alternate, e, tn);

 e.memoizedProps = e.pendingProps, t === null ? NS(e) : tt = t, Hp.current = null } function NS(e) { var t = e;

 do { var n = t.alternate;

 if (e = t.return, (32768 & t.flags) === 0) { if (n = hL(n, t, tn), n !== null) { tt = n;

 return } } else { if (n = pL(n, t), n !== null) { n.flags &= 32767, tt = n;

 return } if (e === null) { ot = 6, tt = null;

 return } e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null } if (t = t.sibling, t !== null) { tt = t;

 return } tt = t = e } while (t !== null);

 ot === 0 && (ot = 5) } function Ei(e, t, n) { var r = ke, i = Sn.transition;

 try { Sn.transition = null, ke = 1, wL(e, t, n, r) } finally { Sn.transition = i, ke = r } return null } function wL(e, t, n, r) { do zo();

 while (qr !== null);

 if ((6 & ge) !== 0) throw Error(M(327));

 n = e.finishedWork;

 var i = e.finishedLanes;

 if (n === null) return null;

 if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));

 e.callbackNode = null, e.callbackPriority = 0;

 var o = n.lanes | n.childLanes;

 if (iO(e, o), e === mt && (tt = mt = null, xt = 0), (2064 & n.subtreeFlags) === 0 && (2064 & n.flags) === 0 || lc || (lc = !0, WS(wc, function () { return zo(), null })), o = (15990 & n.flags) !== 0, (15990 & n.subtreeFlags) !== 0 || o) { o = Sn.transition, Sn.transition = null;

 var s = ke;

 ke = 1;

 var a = ge;

 ge |= 4, Hp.current = null, gL(e, n), VS(n, e), WO(Nh), Cc = !!$h, Nh = $h = null, e.current = n, vL(n, e, i), YM(), ge = a, ke = s, Sn.transition = o } else e.current = n;

 if (lc && (lc = !1, qr = e, $c = i), o = e.pendingLanes, o === 0 && (Jr = null), ZM(n.stateNode, r), Xt(e, Je()), t !== null) for (r = e.onRecoverableError, n = 0;

 n < t.length;

 n++)i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });

 if (Bc) throw Bc = !1, e = sp, sp = null, e;

 return (1 & $c) !== 0 && e.tag !== 0 && zo(), o = e.pendingLanes, (1 & o) !== 0 ? e === ap ? sa++ : (sa = 0, ap = e) : sa = 0, si(), null } function zo() { if (qr !== null) { var e = b1($c), t = Sn.transition, n = ke;

 try { if (Sn.transition = null, ke = 16 > e ? 16 : e, qr === null) var r = !1;

 else { if (e = qr, qr = null, $c = 0, (6 & ge) !== 0) throw Error(M(331));

 var i = ge;

 for (ge |= 4, N = e.current;

 N !== null;

) { var o = N, s = o.child;

 if ((16 & N.flags) !== 0) { var a = o.deletions;

 if (a !== null) { for (var l = 0;

 l < a.length;

 l++) { var c = a[l];

 for (N = c;

 N !== null;

) { var u = N;

 switch (u.tag) { case 0: case 11: case 15: ia(8, u, o) }var f = u.child;

 if (f !== null) f.return = u, N = f;

 else for (;

 N !== null;

) { u = N;

 var d = u.sibling, h = u.return;

 if (MS(u), u === c) { N = null;

 break } if (d !== null) { d.return = h, N = d;

 break } N = h } } } var p = o.alternate;

 if (p !== null) { var v = p.child;

 if (v !== null) { p.child = null;

 do { var b = v.sibling;

 v.sibling = null, v = b } while (v !== null) } } N = o } } if ((2064 & o.subtreeFlags) !== 0 && s !== null) s.return = o, N = s;

 else e: for (;

 N !== null;

) { if (o = N, (2048 & o.flags) !== 0) switch (o.tag) { case 0: case 11: case 15: ia(9, o, o.return) }var g = o.sibling;

 if (g !== null) { g.return = o.return, N = g;

 break e } N = o.return } } var m = e.current;

 for (N = m;

 N !== null;

) { s = N;

 var y = s.child;

 if ((2064 & s.subtreeFlags) !== 0 && y !== null) y.return = s, N = y;

 else e: for (s = m;

 N !== null;

) { if (a = N, (2048 & a.flags) !== 0) try { switch (a.tag) { case 0: case 11: case 15: Qc(9, a) } } catch (C) { Ke(a, a.return, C) } if (a === s) { N = null;

 break e } var x = a.sibling;

 if (x !== null) { x.return = a.return, N = x;

 break e } N = a.return } } if (ge = i, si(), or && typeof or.onPostCommitFiberRoot == "function") try { or.onPostCommitFiberRoot(Hc, e) } catch { } r = !0 } return r } finally { ke = n, Sn.transition = t } } return !1 } function Ux(e, t, n) { t = Wo(n, t), t = xS(e, t, 1), e = Zr(e, t, 1), t = Vt(), e !== null && (Ca(e, 1, t), Xt(e, t)) } function Ke(e, t, n) { if (e.tag === 3) Ux(e, e, n);

 else for (;

 t !== null;

) { if (t.tag === 3) { Ux(t, e, n);

 break } if (t.tag === 1) { var r = t.stateNode;

 if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Jr === null || !Jr.has(r))) { e = Wo(n, e), e = SS(t, e, 1), t = Zr(t, e, 1), e = Vt(), t !== null && (Ca(t, 1, e), Xt(t, e));

 break } } t = t.return } } function kL(e, t, n) { var r = e.pingCache;

 r !== null && r.delete(t), t = Vt(), e.pingedLanes |= e.suspendedLanes & n, mt === e && (xt & n) === n && (ot === 4 || ot === 3 && (130023424 & xt) === xt && 500 > Je() - Up ? _i(e, 0) : Wp |= n), Xt(e, t) } function jS(e, t) { t === 0 && ((1 & e.mode) === 0 ? t = 1 : (t = Xl, Xl <<= 1, (130023424 & Xl) === 0 && (Xl = 4194304)));

 var n = Vt();

 e = Tr(e, t), e !== null && (Ca(e, t, n), Xt(e, n)) } function CL(e) { var t = e.memoizedState, n = 0;

 t !== null && (n = t.retryLane), jS(e, n) } function RL(e, t) { var n = 0;

 switch (e.tag) { case 13: var r = e.stateNode, i = e.memoizedState;

 i !== null && (n = i.retryLane);

 break;

 case 19: r = e.stateNode;

 break;

 default: throw Error(M(314)) }r !== null && r.delete(t), jS(e, n) } var HS;

 HS = function (e, t, n) { if (e !== null) if (e.memoizedProps !== t.pendingProps || Gt.current) Ut = !0;

 else { if ((e.lanes & n) === 0 && (128 & t.flags) === 0) return Ut = !1, dL(e, t, n);

 Ut = (131072 & e.flags) !== 0 } else Ut = !1, $e && (1048576 & t.flags) !== 0 && U1(t, _c, t.index);

 switch (t.lanes = 0, t.tag) { case 2: var r = t.type;

 mc(e, t), e = t.pendingProps;

 var i = $o(t, _t.current);

 Do(t, n), i = zp(null, t, r, e, i, n);

 var o = Bp();

 return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, qt(r) ? (o = !0, Pc(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Op(t), i.updater = Yc, t.stateNode = i, i._reactInternals = t, Kh(t, r, e, n), t = Jh(null, t, r, !0, o, n)) : (t.tag = 0, $e && o && Tp(t), Lt(null, t, i, n), t = t.child), t;

 case 16: r = t.elementType;

 e: { switch (mc(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = EL(r), e = Mn(r, e), i) { case 0: t = Zh(null, t, r, e, n);

 break e;

 case 1: t = Vx(null, t, r, e, n);

 break e;

 case 11: t = Ox(null, t, r, e, n);

 break e;

 case 14: t = Lx(null, t, r, Mn(r.type, e), n);

 break e }throw Error(M(306, r, "")) } return t;

 case 0: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Mn(r, i), Zh(e, t, r, i, n);

 case 1: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Mn(r, i), Vx(e, t, r, i, n);

 case 3: e: { if (RS(t), e === null) throw Error(M(387));

 r = t.pendingProps, o = t.memoizedState, i = o.element, Y1(e, t), Lc(t, r, null, n);

 var s = t.memoizedState;

 if (r = s.element, o.isDehydrated) { if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) { i = Wo(Error(M(423)), t), t = Ax(e, t, r, n, i);

 break e } if (r !== i) { i = Wo(Error(M(424)), t), t = Ax(e, t, r, n, i);

 break e } for (nn = Qr(t.stateNode.containerInfo.firstChild), rn = t, $e = !0, Ln = null, n = J1(t, null, r, n), t.child = n;

 n;

)n.flags = -3 & n.flags | 4096, n = n.sibling } else { if (No(), r === i) { t = Er(e, t, n);

 break e } Lt(e, t, r, n) } t = t.child } return t;

 case 5: return eS(t), e === null && qh(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, jh(r, i) ? s = null : o !== null && jh(r, o) && (t.flags |= 32), CS(e, t), Lt(e, t, s, n), t.child;

 case 6: return e === null && qh(t), null;

 case 13: return TS(e, t, n);

 case 4: return Lp(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = jo(t, null, r, n) : Lt(e, t, r, n), t.child;

 case 11: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Mn(r, i), Ox(e, t, r, i, n);

 case 7: return Lt(e, t, t.pendingProps, n), t.child;

 case 8: return Lt(e, t, t.pendingProps.children, n), t.child;

 case 12: return Lt(e, t, t.pendingProps.children, n), t.child;

 case 10: e: { if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, Pe(Mc, r._currentValue), r._currentValue = s, o !== null) if (Dn(o.value, s)) { if (o.children === i.children && !Gt.current) { t = Er(e, t, n);

 break e } } else for (o = t.child, o !== null && (o.return = t);

 o !== null;

) { var a = o.dependencies;

 if (a !== null) { s = o.child;

 for (var l = a.firstContext;

 l !== null;

) { if (l.context === r) { if (o.tag === 1) { l = kr(-1, n & -n), l.tag = 2;

 var c = o.updateQueue;

 if (c !== null) { c = c.shared;

 var u = c.pending;

 u === null ? l.next = l : (l.next = u.next, u.next = l), c.pending = l } } o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Xh(o.return, n, t), a.lanes |= n;

 break } l = l.next } } else if (o.tag === 10) s = o.type === t.type ? null : o.child;

 else if (o.tag === 18) { if (s = o.return, s === null) throw Error(M(341));

 s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Xh(s, n, t), s = o.sibling } else s = o.child;

 if (s !== null) s.return = o;

 else for (s = o;

 s !== null;

) { if (s === t) { s = null;

 break } if (o = s.sibling, o !== null) { o.return = s.return, s = o;

 break } s = s.return } o = s } Lt(e, t, i.children, n), t = t.child } return t;

 case 9: return i = t.type, r = t.pendingProps.children, Do(t, n), i = wn(i), r = r(i), t.flags |= 1, Lt(e, t, r, n), t.child;

 case 14: return r = t.type, i = Mn(r, t.pendingProps), i = Mn(r.type, i), Lx(e, t, r, i, n);

 case 15: return wS(e, t, t.type, t.pendingProps, n);

 case 17: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Mn(r, i), mc(e, t), t.tag = 1, qt(r) ? (e = !0, Pc(t)) : e = !1, Do(t, n), Q1(t, r, i), Kh(t, r, i, n), Jh(null, t, r, !0, e, n);

 case 19: return ES(e, t, n);

 case 22: return kS(e, t, n) }throw Error(M(156, t.tag)) };

 function WS(e, t) { return m1(e, t) } function TL(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null } function xn(e, t, n, r) { return new TL(e, t, n, r) } function Yp(e) { return e = e.prototype, !(!e || !e.isReactComponent) } function EL(e) { if (typeof e == "function") return Yp(e) ? 1 : 0;

 if (e != null) { if (e = e.$$typeof, e === pp) return 11;

 if (e === mp) return 14 } return 2 } function ti(e, t) { var n = e.alternate;

 return n === null ? (n = xn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n } function yc(e, t, n, r, i, o) { var s = 2;

 if (r = e, typeof e == "function") Yp(e) && (s = 1);

 else if (typeof e == "string") s = 5;

 else e: switch (e) { case wo: return Mi(n.children, i, o, t);

 case hp: s = 8, i |= 8;

 break;

 case xh: return e = xn(12, n, t, 2 | i), e.elementType = xh, e.lanes = o, e;

 case Sh: return e = xn(13, n, t, i), e.elementType = Sh, e.lanes = o, e;

 case wh: return e = xn(19, n, t, i), e.elementType = wh, e.lanes = o, e;

 case Zx: return Jc(n, i, o, t);

 default: if (typeof e == "object" && e !== null) switch (e.$$typeof) { case Kx: s = 10;

 break e;

 case Qx: s = 9;

 break e;

 case pp: s = 11;

 break e;

 case mp: s = 14;

 break e;

 case jr: s = 16, r = null;

 break e }throw Error(M(130, e == null ? e : typeof e, "")) }return t = xn(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t } function Mi(e, t, n, r) { return e = xn(7, e, r, t), e.lanes = n, e } function Jc(e, t, n, r) { return e = xn(22, e, r, t), e.elementType = Zx, e.lanes = n, e.stateNode = { isHidden: !1 }, e } function vh(e, t, n) { return e = xn(6, e, null, t), e.lanes = n, e } function yh(e, t, n) { return t = xn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t } function FL(e, t, n, r, i) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = th(0), this.expirationTimes = th(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = th(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null } function Kp(e, t, n, r, i, o, s, a, l) { return e = new FL(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = xn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Op(o), e } function PL(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;

 return { $$typeof: So, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n } } function US(e) { if (!e) return ri;

 e = e._reactInternals;

 e: { if (Bi(e) !== e || e.tag !== 1) throw Error(M(170));

 var t = e;

 do { switch (t.tag) { case 3: t = t.stateNode.context;

 break e;

 case 1: if (qt(t.type)) { t = t.stateNode.__reactInternalMemoizedMergedChildContext;

 break e } }t = t.return } while (t !== null);

 throw Error(M(171)) } if (e.tag === 1) { var n = e.type;

 if (qt(n)) return H1(e, n, t) } return t } function GS(e, t, n, r, i, o, s, a, l) { return e = Kp(n, r, !0, e, i, o, s, a, l), e.context = US(null), n = e.current, r = Vt(), i = ei(n), o = kr(r, i), o.callback = t ?? null, Zr(n, o, i), e.current.lanes = i, Ca(e, i, r), Xt(e, r), e } function eu(e, t, n, r) { var i = t.current, o = Vt(), s = ei(i);

 return n = US(n), t.context === null ? t.context = n : t.pendingContext = n, t = kr(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Zr(i, t, s), e !== null && (An(e, i, s, o), dc(e, i, s)), s } function jc(e) { if (e = e.current, !e.child) return null;

 switch (e.child.tag) { case 5: return e.child.stateNode;

 default: return e.child.stateNode } } function Gx(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) { var n = e.retryLane;

 e.retryLane = n !== 0 && n < t ? n : t } } function Qp(e, t) { Gx(e, t), (e = e.alternate) && Gx(e, t) } function IL() { return null } var qS = typeof reportError == "function" ? reportError : function (e) { console.error(e) };

 function Zp(e) { this._internalRoot = e } tu.prototype.render = Zp.prototype.render = function (e) { var t = this._internalRoot;

 if (t === null) throw Error(M(409));

 eu(e, t, null, null) };

 tu.prototype.unmount = Zp.prototype.unmount = function () { var e = this._internalRoot;

 if (e !== null) { this._internalRoot = null;

 var t = e.containerInfo;

 Di(function () { eu(null, e, null, null) }), t[Rr] = null } };

 function tu(e) { this._internalRoot = e } tu.prototype.unstable_scheduleHydration = function (e) { if (e) { var t = w1();

 e = { blockedOn: null, target: e, priority: t };

 for (var n = 0;

 n < Wr.length && t !== 0 && t < Wr[n].priority;

 n++);

 Wr.splice(n, 0, e), n === 0 && C1(e) } };

 function Jp(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) } function nu(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")) } function qx() { } function _L(e, t, n, r, i) { if (i) { if (typeof r == "function") { var o = r;

 r = function () { var c = jc(s);

 o.call(c) } } var s = GS(t, r, e, 0, null, !1, !1, "", qx);

 return e._reactRootContainer = s, e[Rr] = s.current, ma(e.nodeType === 8 ? e.parentNode : e), Di(), s } for (;

 i = e.lastChild;

)e.removeChild(i);

 if (typeof r == "function") { var a = r;

 r = function () { var c = jc(l);

 a.call(c) } } var l = Kp(e, 0, !1, null, null, !1, !1, "", qx);

 return e._reactRootContainer = l, e[Rr] = l.current, ma(e.nodeType === 8 ? e.parentNode : e), Di(function () { eu(t, l, n, r) }), l } function ru(e, t, n, r, i) { var o = n._reactRootContainer;

 if (o) { var s = o;

 if (typeof i == "function") { var a = i;

 i = function () { var l = jc(s);

 a.call(l) } } eu(t, s, e, i) } else s = _L(n, t, e, i, r);

 return jc(s) } x1 = function (e) { switch (e.tag) { case 3: var t = e.stateNode;

 if (t.current.memoizedState.isDehydrated) { var n = Ks(t.pendingLanes);

 n !== 0 && (yp(t, 1 | n), Xt(t, Je()), (6 & ge) === 0 && (Uo = Je() + 500, si())) } break;

 case 13: Di(function () { var r = Tr(e, 1);

 if (r !== null) { var i = Vt();

 An(r, e, 1, i) } }), Qp(e, 1) } };

 bp = function (e) { if (e.tag === 13) { var t = Tr(e, 134217728);

 if (t !== null) { var n = Vt();

 An(t, e, 134217728, n) } Qp(e, 134217728) } };

 S1 = function (e) { if (e.tag === 13) { var t = ei(e), n = Tr(e, t);

 if (n !== null) { var r = Vt();

 An(n, e, t, r) } Qp(e, t) } };

 w1 = function () { return ke };

 k1 = function (e, t) { var n = ke;

 try { return ke = e, t() } finally { ke = n } };

 Mh = function (e, t, n) { switch (t) { case "input": if (Rh(e, n), t = n.name, n.type === "radio" && t != null) { for (n = e;

 n.parentNode;

)n = n.parentNode;

 for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;

 t < n.length;

 t++) { var r = n[t];

 if (r !== e && r.form === e.form) { var i = qc(r);

 if (!i) throw Error(M(90));

 e1(r), Rh(r, i) } } } break;

 case "textarea": n1(e, n);

 break;

 case "select": t = n.value, t != null && Oo(e, !!n.multiple, t, !1) } };

 c1 = Gp;

 u1 = Di;

 var ML = { usingClientEntryPoint: !1, Events: [Ta, To, qc, a1, l1, Gp] }, Gs = { findFiberByHostInstance: Fi, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, OL = { bundleType: Gs.bundleType, version: Gs.version, rendererPackageName: Gs.rendererPackageName, rendererConfig: Gs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Fr.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = h1(e), e === null ? null : e.stateNode }, findFiberByHostInstance: Gs.findFiberByHostInstance || IL, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };

 if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (qs = __REACT_DEVTOOLS_GLOBAL_HOOK__, !qs.isDisabled && qs.supportsFiber)) try { Hc = qs.inject(OL), or = qs } catch { } var qs;

 sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ML;

 sn.createPortal = function (e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;

 if (!Jp(t)) throw Error(M(200));

 return PL(e, t, null, n) };

 sn.createRoot = function (e, t) { if (!Jp(e)) throw Error(M(299));

 var n = !1, r = "", i = qS;

 return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Kp(e, 1, !1, null, null, n, !1, r, i), e[Rr] = t.current, ma(e.nodeType === 8 ? e.parentNode : e), new Zp(t) };

 sn.findDOMNode = function (e) { if (e == null) return null;

 if (e.nodeType === 1) return e;

 var t = e._reactInternals;

 if (t === void 0) throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));

 return e = h1(t), e = e === null ? null : e.stateNode, e };

 sn.flushSync = function (e) { return Di(e) };

 sn.hydrate = function (e, t, n) { if (!nu(t)) throw Error(M(200));

 return ru(null, e, t, !0, n) };

 sn.hydrateRoot = function (e, t, n) { if (!Jp(e)) throw Error(M(405));

 var r = n != null && n.hydratedSources || null, i = !1, o = "", s = qS;

 if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = GS(t, null, e, 1, n ?? null, i, !1, o, s), e[Rr] = t.current, ma(e), r) for (e = 0;

 e < r.length;

 e++)n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);

 return new tu(t) };

 sn.render = function (e, t, n) { if (!nu(t)) throw Error(M(200));

 return ru(null, e, t, !1, n) };

 sn.unmountComponentAtNode = function (e) { if (!nu(e)) throw Error(M(40));

 return !!e._reactRootContainer && (Di(function () { ru(null, null, e, !1, function () { e._reactRootContainer = null, e[Rr] = null }) }), !0) };

 sn.unstable_batchedUpdates = Gp;

 sn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!nu(n)) throw Error(M(200));

 if (e == null || e._reactInternals === void 0) throw Error(M(38));

 return ru(e, t, n, !1, r) };

 sn.version = "18.2.0-next-9e3b772b8-20220608";

 function XS() { if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(XS) } catch (e) { console.error(e) } } XS();

 var ln = sn, YS = ln, LL = ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, VL = ln.createPortal, AL = ln.createRoot, DL = ln.findDOMNode, zL = ln.flushSync, BL = ln.hydrate, $L = ln.hydrateRoot, NL = ln.render, jL = ln.unmountComponentAtNode, HL = ln.unstable_batchedUpdates, WL = ln.unstable_renderSubtreeIntoContainer, UL = ln.version;

 var qL = Wn({ "../../../node_modules/hsluv/dist/hsluv.cjs"(e) { "use strict";

 Object.defineProperty(e, "__esModule", { value: !0 }), e.Hsluv = void 0;

 var t = class D { constructor() { this.hex = "#000000", this.rgb_r = 0, this.rgb_g = 0, this.rgb_b = 0, this.xyz_x = 0, this.xyz_y = 0, this.xyz_z = 0, this.luv_l = 0, this.luv_u = 0, this.luv_v = 0, this.lch_l = 0, this.lch_c = 0, this.lch_h = 0, this.hsluv_h = 0, this.hsluv_s = 0, this.hsluv_l = 0, this.hpluv_h = 0, this.hpluv_p = 0, this.hpluv_l = 0, this.r0s = 0, this.r0i = 0, this.r1s = 0, this.r1i = 0, this.g0s = 0, this.g0i = 0, this.g1s = 0, this.g1i = 0, this.b0s = 0, this.b0i = 0, this.b1s = 0, this.b1i = 0 } static fromLinear(r) { return r <= .0031308 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055 } static toLinear(r) { return r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92 } static yToL(r) { return r <= D.epsilon ? r / D.refY * D.kappa : 116 * Math.pow(r / D.refY, 1 / 3) - 16 } static lToY(r) { return r <= 8 ? D.refY * r / D.kappa : D.refY * Math.pow((r + 16) / 116, 3) } static rgbChannelToHex(r) { let i = Math.round(r * 255), o = i % 16, s = (i - o) / 16 | 0;

 return D.hexChars.charAt(s) + D.hexChars.charAt(o) } static hexToRgbChannel(r, i) { let o = D.hexChars.indexOf(r.charAt(i)), s = D.hexChars.indexOf(r.charAt(i + 1));

 return (o * 16 + s) / 255 } static distanceFromOriginAngle(r, i, o) { let s = i / (Math.sin(o) - r * Math.cos(o));

 return s < 0 ? 1 / 0 : s } static distanceFromOrigin(r, i) { return Math.abs(i) / Math.sqrt(Math.pow(r, 2) + 1) } static min6(r, i, o, s, a, l) { return Math.min(r, Math.min(i, Math.min(o, Math.min(s, Math.min(a, l))))) } rgbToHex() { this.hex = "#", this.hex += D.rgbChannelToHex(this.rgb_r), this.hex += D.rgbChannelToHex(this.rgb_g), this.hex += D.rgbChannelToHex(this.rgb_b) } hexToRgb() { this.hex = this.hex.toLowerCase(), this.rgb_r = D.hexToRgbChannel(this.hex, 1), this.rgb_g = D.hexToRgbChannel(this.hex, 3), this.rgb_b = D.hexToRgbChannel(this.hex, 5) } xyzToRgb() { this.rgb_r = D.fromLinear(D.m_r0 * this.xyz_x + D.m_r1 * this.xyz_y + D.m_r2 * this.xyz_z), this.rgb_g = D.fromLinear(D.m_g0 * this.xyz_x + D.m_g1 * this.xyz_y + D.m_g2 * this.xyz_z), this.rgb_b = D.fromLinear(D.m_b0 * this.xyz_x + D.m_b1 * this.xyz_y + D.m_b2 * this.xyz_z) } rgbToXyz() { let r = D.toLinear(this.rgb_r), i = D.toLinear(this.rgb_g), o = D.toLinear(this.rgb_b);

 this.xyz_x = .41239079926595 * r + .35758433938387 * i + .18048078840183 * o, this.xyz_y = .21263900587151 * r + .71516867876775 * i + .072192315360733 * o, this.xyz_z = .019330818715591 * r + .11919477979462 * i + .95053215224966 * o } xyzToLuv() { let r = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z, i = 4 * this.xyz_x, o = 9 * this.xyz_y;

 r !== 0 ? (i /= r, o /= r) : (i = NaN, o = NaN), this.luv_l = D.yToL(this.xyz_y), this.luv_l === 0 ? (this.luv_u = 0, this.luv_v = 0) : (this.luv_u = 13 * this.luv_l * (i - D.refU), this.luv_v = 13 * this.luv_l * (o - D.refV)) } luvToXyz() { if (this.luv_l === 0) { this.xyz_x = 0, this.xyz_y = 0, this.xyz_z = 0;

 return } let r = this.luv_u / (13 * this.luv_l) + D.refU, i = this.luv_v / (13 * this.luv_l) + D.refV;

 this.xyz_y = D.lToY(this.luv_l), this.xyz_x = 0 - 9 * this.xyz_y * r / ((r - 4) * i - r * i), this.xyz_z = (9 * this.xyz_y - 15 * i * this.xyz_y - i * this.xyz_x) / (3 * i) } luvToLch() { if (this.lch_l = this.luv_l, this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v), this.lch_c < 1e-8) this.lch_h = 0;

 else { let r = Math.atan2(this.luv_v, this.luv_u);

 this.lch_h = r * 180 / Math.PI, this.lch_h < 0 && (this.lch_h = 360 + this.lch_h) } } lchToLuv() { let r = this.lch_h / 180 * Math.PI;

 this.luv_l = this.lch_l, this.luv_u = Math.cos(r) * this.lch_c, this.luv_v = Math.sin(r) * this.lch_c } calculateBoundingLines(r) { let i = Math.pow(r + 16, 3) / 1560896, o = i > D.epsilon ? i : r / D.kappa, s = o * (284517 * D.m_r0 - 94839 * D.m_r2), a = o * (838422 * D.m_r2 + 769860 * D.m_r1 + 731718 * D.m_r0), l = o * (632260 * D.m_r2 - 126452 * D.m_r1), c = o * (284517 * D.m_g0 - 94839 * D.m_g2), u = o * (838422 * D.m_g2 + 769860 * D.m_g1 + 731718 * D.m_g0), f = o * (632260 * D.m_g2 - 126452 * D.m_g1), d = o * (284517 * D.m_b0 - 94839 * D.m_b2), h = o * (838422 * D.m_b2 + 769860 * D.m_b1 + 731718 * D.m_b0), p = o * (632260 * D.m_b2 - 126452 * D.m_b1);

 this.r0s = s / l, this.r0i = a * r / l, this.r1s = s / (l + 126452), this.r1i = (a - 769860) * r / (l + 126452), this.g0s = c / f, this.g0i = u * r / f, this.g1s = c / (f + 126452), this.g1i = (u - 769860) * r / (f + 126452), this.b0s = d / p, this.b0i = h * r / p, this.b1s = d / (p + 126452), this.b1i = (h - 769860) * r / (p + 126452) } calcMaxChromaHpluv() { let r = D.distanceFromOrigin(this.r0s, this.r0i), i = D.distanceFromOrigin(this.r1s, this.r1i), o = D.distanceFromOrigin(this.g0s, this.g0i), s = D.distanceFromOrigin(this.g1s, this.g1i), a = D.distanceFromOrigin(this.b0s, this.b0i), l = D.distanceFromOrigin(this.b1s, this.b1i);

 return D.min6(r, i, o, s, a, l) } calcMaxChromaHsluv(r) { let i = r / 360 * Math.PI * 2, o = D.distanceFromOriginAngle(this.r0s, this.r0i, i), s = D.distanceFromOriginAngle(this.r1s, this.r1i, i), a = D.distanceFromOriginAngle(this.g0s, this.g0i, i), l = D.distanceFromOriginAngle(this.g1s, this.g1i, i), c = D.distanceFromOriginAngle(this.b0s, this.b0i, i), u = D.distanceFromOriginAngle(this.b1s, this.b1i, i);

 return D.min6(o, s, a, l, c, u) } hsluvToLch() { if (this.hsluv_l > 99.9999999) this.lch_l = 100, this.lch_c = 0;

 else if (this.hsluv_l < 1e-8) this.lch_l = 0, this.lch_c = 0;

 else { this.lch_l = this.hsluv_l, this.calculateBoundingLines(this.hsluv_l);

 let r = this.calcMaxChromaHsluv(this.hsluv_h);

 this.lch_c = r / 100 * this.hsluv_s } this.lch_h = this.hsluv_h } lchToHsluv() { if (this.lch_l > 99.9999999) this.hsluv_s = 0, this.hsluv_l = 100;

 else if (this.lch_l < 1e-8) this.hsluv_s = 0, this.hsluv_l = 0;

 else { this.calculateBoundingLines(this.lch_l);

 let r = this.calcMaxChromaHsluv(this.lch_h);

 this.hsluv_s = this.lch_c / r * 100, this.hsluv_l = this.lch_l } this.hsluv_h = this.lch_h } hpluvToLch() { if (this.hpluv_l > 99.9999999) this.lch_l = 100, this.lch_c = 0;

 else if (this.hpluv_l < 1e-8) this.lch_l = 0, this.lch_c = 0;

 else { this.lch_l = this.hpluv_l, this.calculateBoundingLines(this.hpluv_l);

 let r = this.calcMaxChromaHpluv();

 this.lch_c = r / 100 * this.hpluv_p } this.lch_h = this.hpluv_h } lchToHpluv() { if (this.lch_l > 99.9999999) this.hpluv_p = 0, this.hpluv_l = 100;

 else if (this.lch_l < 1e-8) this.hpluv_p = 0, this.hpluv_l = 0;

 else { this.calculateBoundingLines(this.lch_l);

 let r = this.calcMaxChromaHpluv();

 this.hpluv_p = this.lch_c / r * 100, this.hpluv_l = this.lch_l } this.hpluv_h = this.lch_h } hsluvToRgb() { this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb() } hpluvToRgb() { this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb() } hsluvToHex() { this.hsluvToRgb(), this.rgbToHex() } hpluvToHex() { this.hpluvToRgb(), this.rgbToHex() } rgbToHsluv() { this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv() } rgbToHpluv() { this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv() } hexToHsluv() { this.hexToRgb(), this.rgbToHsluv() } hexToHpluv() { this.hexToRgb(), this.rgbToHpluv() } };

 e.Hsluv = t, t.hexChars = "0123456789abcdef", t.refY = 1, t.refU = .19783000664283, t.refV = .46831999493879, t.kappa = 903.2962962, t.epsilon = .0088564516, t.m_r0 = 3.240969941904521, t.m_r1 = -1.537383177570093, t.m_r2 = -.498610760293, t.m_g0 = -.96924363628087, t.m_g1 = 1.87596750150772, t.m_g2 = .041555057407175, t.m_b0 = .055630079696993, t.m_b1 = -.20397695888897, t.m_b2 = 1.056971514242878 } }), XL = Wn({ "../../../node_modules/eventemitter3/index.js"(e, t) { "use strict";

 var n = Object.prototype.hasOwnProperty, r = "~";

 function i() { } Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1));

 function o(c, u, f) { this.fn = c, this.context = u, this.once = f || !1 } function s(c, u, f, d, h) { if (typeof f != "function") throw new TypeError("The listener must be a function");

 var p = new o(f, d || c, h), v = r ? r + u : u;

 return c._events[v] ? c._events[v].fn ? c._events[v] = [c._events[v], p] : c._events[v].push(p) : (c._events[v] = p, c._eventsCount++), c } function a(c, u) { --c._eventsCount === 0 ? c._events = new i : delete c._events[u] } function l() { this._events = new i, this._eventsCount = 0 } l.prototype.eventNames = function () { var u = [], f, d;

 if (this._eventsCount === 0) return u;

 for (d in f = this._events) n.call(f, d) && u.push(r ? d.slice(1) : d);

 return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(f)) : u }, l.prototype.listeners = function (u) { var f = r ? r + u : u, d = this._events[f];

 if (!d) return [];

 if (d.fn) return [d.fn];

 for (var h = 0, p = d.length, v = new Array(p);

 h < p;

 h++)v[h] = d[h].fn;

 return v }, l.prototype.listenerCount = function (u) { var f = r ? r + u : u, d = this._events[f];

 return d ? d.fn ? 1 : d.length : 0 }, l.prototype.emit = function (u, f, d, h, p, v) { var b = r ? r + u : u;

 if (!this._events[b]) return !1;

 var g = this._events[b], m = arguments.length, y, x;

 if (g.fn) { switch (g.once && this.removeListener(u, g.fn, void 0, !0), m) { case 1: return g.fn.call(g.context), !0;

 case 2: return g.fn.call(g.context, f), !0;

 case 3: return g.fn.call(g.context, f, d), !0;

 case 4: return g.fn.call(g.context, f, d, h), !0;

 case 5: return g.fn.call(g.context, f, d, h, p), !0;

 case 6: return g.fn.call(g.context, f, d, h, p, v), !0 }for (x = 1, y = new Array(m - 1);

 x < m;

 x++)y[x - 1] = arguments[x];

 g.fn.apply(g.context, y) } else { var C = g.length, w;

 for (x = 0;

 x < C;

 x++)switch (g[x].once && this.removeListener(u, g[x].fn, void 0, !0), m) { case 1: g[x].fn.call(g[x].context);

 break;

 case 2: g[x].fn.call(g[x].context, f);

 break;

 case 3: g[x].fn.call(g[x].context, f, d);

 break;

 case 4: g[x].fn.call(g[x].context, f, d, h);

 break;

 default: if (!y) for (w = 1, y = new Array(m - 1);

 w < m;

 w++)y[w - 1] = arguments[w];

 g[x].fn.apply(g[x].context, y) } } return !0 }, l.prototype.on = function (u, f, d) { return s(this, u, f, d, !1) }, l.prototype.once = function (u, f, d) { return s(this, u, f, d, !0) }, l.prototype.removeListener = function (u, f, d, h) { var p = r ? r + u : u;

 if (!this._events[p]) return this;

 if (!f) return a(this, p), this;

 var v = this._events[p];

 if (v.fn) v.fn === f && (!h || v.once) && (!d || v.context === d) && a(this, p);

 else { for (var b = 0, g = [], m = v.length;

 b < m;

 b++)(v[b].fn !== f || h && !v[b].once || d && v[b].context !== d) && g.push(v[b]);

 g.length ? this._events[p] = g.length === 1 ? g[0] : g : a(this, p) } return this }, l.prototype.removeAllListeners = function (u) { var f;

 return u ? (f = r ? r + u : u, this._events[f] && a(this, f)) : (this._events = new i, this._eventsCount = 0), this }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, typeof t < "u" && (t.exports = l) } }), YL = Wn({ "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(e) { "use strict";

 var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, o = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, c = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, f = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, h = t ? Symbol.for("react.suspense_list") : 60120, p = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, b = t ? Symbol.for("react.block") : 60121, g = t ? Symbol.for("react.fundamental") : 60117, m = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;

 function x(w) { if (typeof w == "object" && w !== null) { var R = w.$$typeof;

 switch (R) { case n: switch (w = w.type, w) { case c: case u: case i: case s: case o: case d: return w;

 default: switch (w = w && w.$$typeof, w) { case l: case f: case v: case p: case a: return w;

 default: return R } }case r: return R } } } function C(w) { return x(w) === u } e.AsyncMode = c, e.ConcurrentMode = u, e.ContextConsumer = l, e.ContextProvider = a, e.Element = n, e.ForwardRef = f, e.Fragment = i, e.Lazy = v, e.Memo = p, e.Portal = r, e.Profiler = s, e.StrictMode = o, e.Suspense = d, e.isAsyncMode = function (w) { return C(w) || x(w) === c }, e.isConcurrentMode = C, e.isContextConsumer = function (w) { return x(w) === l }, e.isContextProvider = function (w) { return x(w) === a }, e.isElement = function (w) { return typeof w == "object" && w !== null && w.$$typeof === n }, e.isForwardRef = function (w) { return x(w) === f }, e.isFragment = function (w) { return x(w) === i }, e.isLazy = function (w) { return x(w) === v }, e.isMemo = function (w) { return x(w) === p }, e.isPortal = function (w) { return x(w) === r }, e.isProfiler = function (w) { return x(w) === s }, e.isStrictMode = function (w) { return x(w) === o }, e.isSuspense = function (w) { return x(w) === d }, e.isValidElementType = function (w) { return typeof w == "string" || typeof w == "function" || w === i || w === u || w === s || w === o || w === d || w === h || typeof w == "object" && w !== null && (w.$$typeof === v || w.$$typeof === p || w.$$typeof === a || w.$$typeof === l || w.$$typeof === f || w.$$typeof === g || w.$$typeof === m || w.$$typeof === y || w.$$typeof === b) }, e.typeOf = x } }), KL = Wn({ "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) { "use strict";

 t.exports = YL() } }), Au = Wn({ "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) { "use strict";

 var n = KL(), r = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, o = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, s = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, a = {};

 a[n.ForwardRef] = o, a[n.Memo] = s;

 function l(b) { return n.isMemo(b) ? s : a[b.$$typeof] || r } var c = Object.defineProperty, u = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, h = Object.getPrototypeOf, p = Object.prototype;

 function v(b, g, m) { if (typeof g != "string") { if (p) { var y = h(g);

 y && y !== p && v(b, y, m) } var x = u(g);

 f && (x = x.concat(f(g)));

 for (var C = l(b), w = l(g), R = 0;

 R < x.length;

 ++R) { var E = x[R];

 if (!i[E] && !(m && m[E]) && !(w && w[E]) && !(C && C[E])) { var I = d(g, E);

 try { c(b, E, I) } catch { } } } } return b } t.exports = v } }), QL = Wn({ "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) { "use strict";

 (function () { function n(b, g) { document.addEventListener ? b.addEventListener("scroll", g, !1) : b.attachEvent("scroll", g) } function r(b) { document.body ? b() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function g() { document.removeEventListener("DOMContentLoaded", g), b() }) : document.attachEvent("onreadystatechange", function g() { (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", g), b()) }) } function i(b) { this.g = document.createElement("div"), this.g.setAttribute("aria-hidden", "true"), this.g.appendChild(document.createTextNode(b)), this.h = document.createElement("span"), this.i = document.createElement("span"), this.m = document.createElement("span"), this.j = document.createElement("span"), this.l = -1, this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.h.appendChild(this.m), this.i.appendChild(this.j), this.g.appendChild(this.h), this.g.appendChild(this.i) } function o(b, g) { b.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + g + ";" } function s(b) { var g = b.g.offsetWidth, m = g + 100;

 return b.j.style.width = m + "px", b.i.scrollLeft = m, b.h.scrollLeft = b.h.scrollWidth + 100, b.l !== g ? (b.l = g, !0) : !1 } function a(b, g) { function m() { var x = y;

 s(x) && x.g.parentNode !== null && g(x.l) } var y = b;

 n(b.h, m), n(b.i, m), s(b) } function l(b, g, m) { g = g || {}, m = m || F, this.family = b, this.style = g.style || "normal", this.weight = g.weight || "normal", this.stretch = g.stretch || "normal", this.context = m } var c = null, u = null, f = null, d = null;

 function h(b) { return u === null && (p(b) && /Apple/.test(F.navigator.vendor) ? (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(F.navigator.userAgent), u = !!b && 603 > parseInt(b[1], 10)) : u = !1), u } function p(b) { return d === null && (d = !!b.document.fonts), d } function v(b, g) { var m = b.style, y = b.weight;

 if (f === null) { var x = document.createElement("div");

 try { x.style.font = "condensed 100px sans-serif" } catch { } f = x.style.font !== "" } return [m, y, f ? b.stretch : "", "100px", g].join(" ") } l.prototype.load = function (b, g) { var m = this, y = b || "BESbswy", x = 0, C = g || 3e3, w = new Date().getTime();

 return new Promise(function (R, E) { if (p(m.context) && !h(m.context)) { var I = new Promise(function (z, H) { function O() { new Date().getTime() - w >= C ? H(Error("" + C + "ms timeout exceeded")) : m.context.document.fonts.load(v(m, '"' + m.family + '"'), y).then(function (X) { 1 <= X.length ? z() : setTimeout(O, 25) }, H) } O() }), P = new Promise(function (z, H) { x = setTimeout(function () { H(Error("" + C + "ms timeout exceeded")) }, C) });

 Promise.race([P, I]).then(function () { clearTimeout(x), R(m) }, E) } else r(function () { function z() { var Z;

 (Z = ie != -1 && U != -1 || ie != -1 && Y != -1 || U != -1 && Y != -1) && ((Z = ie != U && ie != Y && U != Y) || (c === null && (Z = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(F.navigator.userAgent), c = !!Z && (536 > parseInt(Z[1], 10) || parseInt(Z[1], 10) === 536 && 11 >= parseInt(Z[2], 10))), Z = c && (ie == le && U == le && Y == le || ie == me && U == me && Y == me || ie == B && U == B && Y == B)), Z = !Z), Z && (K.parentNode !== null && K.parentNode.removeChild(K), clearTimeout(x), R(m)) } function H() { if (new Date().getTime() - w >= C) K.parentNode !== null && K.parentNode.removeChild(K), E(Error("" + C + "ms timeout exceeded"));

 else { var Z = m.context.document.hidden;

 (Z === !0 || Z === void 0) && (ie = O.g.offsetWidth, U = X.g.offsetWidth, Y = W.g.offsetWidth, z()), x = setTimeout(H, 50) } } var O = new i(y), X = new i(y), W = new i(y), ie = -1, U = -1, Y = -1, le = -1, me = -1, B = -1, K = document.createElement("div");

 K.dir = "ltr", o(O, v(m, "sans-serif")), o(X, v(m, "serif")), o(W, v(m, "monospace")), K.appendChild(O.g), K.appendChild(X.g), K.appendChild(W.g), m.context.document.body.appendChild(K), le = O.g.offsetWidth, me = X.g.offsetWidth, B = W.g.offsetWidth, H(), a(O, function (Z) { ie = Z, z() }), o(O, v(m, '"' + m.family + '",sans-serif')), a(X, function (Z) { U = Z, z() }), o(X, v(m, '"' + m.family + '",serif')), a(W, function (Z) { Y = Z, z() }), o(W, v(m, '"' + m.family + '",monospace')) }) }) }, typeof t == "object" ? t.exports = l : (F.FontFaceObserver = l, F.FontFaceObserver.prototype.load = l.prototype.load) })() } }), ZL = "preload";

 function lg(e) { return typeof e == "object" && e !== null && !ht(e) && ZL in e } function KH(e) { let t = lf(e), n, r, i = !1, o = xe(function (a, l) { return V(() => { i = !0 }, []), k(r ?? t, { ref: l, ...a }) });

 return o.preload = () => (n || (n = e().then(s => (r = s.default, r))), n), o.getStatus = () => ({ hasLoaded: r !== void 0, hasRendered: i }), o } var Gi = Object.keys;

 function ku(e, t) { return Object.prototype.hasOwnProperty.call(e, t) } var JL = "equals";

 function KS(e) { return e === null || !(JL in e) ? !1 : typeof e.equals == "function" } function cg(e, t) { return e === t ? !0 : e !== e && t !== t } function eV(e, t) { let n = e.length;

 if (n !== t.length) return !1;

 for (let r = n;

 r-- !== 0;

)if (!cg(e[r], t[r])) return !1;

 return !0 } function tV(e, t) { let n = e.length;

 if (n !== t.length) return !1;

 for (let r = n;

 r-- !== 0;

)if (!Du(e[r], t[r], !0)) return !1;

 return !0 } function nV(e, t) { if (e.size !== t.size) return !1;

 for (let [n, r] of e.entries()) if (!cg(r, t.get(n))) return !1;

 return !0 } function rV(e, t) { if (e.size !== t.size) return !1;

 for (let [n, r] of e.entries()) if (!Du(r, t.get(n), !0)) return !1;

 return !0 } function iV(e, t) { if (e.size !== t.size) return !1;

 for (let n of e.keys()) if (!t.has(n)) return !1;

 return !0 } function oV(e, t) { let n = Gi(e);

 if (n.length !== Gi(t).length) return !1;

 for (let r of n) { if (!ku(t, r)) return !1;

 if (!(r === "_owner" && ku(e, "$$typeof") && e.$$typeof) && !cg(e[r], t[r])) return !1 } return !0 } function sV(e, t) { let n = Gi(e);

 if (n.length !== Gi(t).length) return !1;

 for (let r of n) { if (!ku(t, r)) return !1;

 if (!(r === "_owner" && ku(e, "$$typeof") && e.$$typeof) && !Du(e[r], t[r], !0)) return !1 } return !0 } function Du(e, t, n) { if (e === t) return !0;

 if (!e || !t) return e !== e && t !== t;

 let r = typeof e;

 if (r !== typeof t || r !== "object") return !1;

 let o = Array.isArray(e), s = Array.isArray(t);

 if (o && s) return n ? tV(e, t) : eV(e, t);

 if (o !== s) return !1;

 let a = e instanceof Map, l = t instanceof Map;

 if (a && l) return n ? rV(e, t) : nV(e, t);

 if (a !== l) return !1;

 let c = e instanceof Set, u = t instanceof Set;

 if (c && u) return iV(e, t);

 if (c !== u) return !1;

 let f = e instanceof Date, d = t instanceof Date;

 if (f && d) return e.getTime() === t.getTime();

 if (f !== d) return !1;

 let h = e instanceof RegExp, p = t instanceof RegExp;

 return h && p ? e.toString() === t.toString() : h !== p ? !1 : KS(e) && KS(t) ? e.equals(t) : n ? sV(e, t) : oV(e, t) } function qa(e, t, n = !0) { try { return Du(e, t, n) } catch (r) { if (r instanceof Error && /stack|recursion/iu.exec(r.message)) return console.warn("Warning: isEqual does not handle circular references.", r.name, r.message), !1;

 throw r } } function Qk(e) { return S.useCallback(t => e[t], [e]) } var ug = S.createContext({});

 function aV({ api: e, children: t }) { return k(ug.Provider, { value: e, children: t }) } function Qi() { return S.useContext(ug) } function lV({ routes: e, children: t }) { let n = Qk(e), r = q(() => ({ getRoute: n }), [n]);

 return k(ug.Provider, { value: r, children: t }) } var cV = S.createContext({});

 function gi() { var e;

 let t = Qi(), n = L(cV), r = n?.routeId ?? t.currentRouteId, i = n?.routeId ? n.pathVariables : t.currentPathVariables, o = r ? (e = t.getRoute) == null ? void 0 : e.call(t, r) : void 0;

 return q(() => { if (!(!r || !o)) return { ...o, id: r, pathVariables: i } }, [r, i, o]) } function fg() { let e = gi();

 if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}` } function zu(e) { let t = gi(), [n, r] = S.useState(t);

 qa(n, t) || !t || (r(t), e(t)) } function uV(e) { var t;

 let n = Qi();

 if (e) return (t = n.getRoute) == null ? void 0 : t.call(n, e) } function Bu(e, t) { if (t && e) return e.elements && t in e.elements ? e.elements[t] : t } function Zk(e) { if ("scheduler" in F) { if ("yield" in scheduler) return scheduler.yield(e);

 if ("postTask" in scheduler) return scheduler.postTask(() => { }, e) } return e?.priority === "user-blocking" ? Promise.resolve() : new Promise(t => { setTimeout(t) }) } async function Jk(e, t) { return await Zk(t), e() } function Xa(e) { return new Promise(t => { setTimeout(t, 100), requestAnimationFrame(() => { Jk(t, e) }) }) } function fV(e, t, n, r = ze) { r(() => { let i = async s => (await Xa(n), s()), o = i(e);

 return () => { (async () => { let s = await o;

 s && i(s) })() } }, t) } var dV = [], hV = {};

 function eC(e) { let t = ["pointerdown", "pointerup", "keydown", "keyup"], n = r => { let i = r.type;

 t.includes(i) && performance.mark("framer-navigation-input", { detail: { type: i } }) };

 for (let r = 0;

 r < t.length;

 r++)document.addEventListener(t[r], n, { signal: e });

 return () => { for (let r = 0;

 r < t.length;

 r++)document.removeEventListener(t[r], n) } } function oW(e, t) { let n = gi(), r = uV(t) ?? n;

 return S.useMemo(() => r ? Bu(r, e) : e, [e, r]) } function sW() { var e;

 return (e = gi()) == null ? void 0 : e.pathVariables } function Qt(e) { return typeof e == "function" } function dg(e) { return typeof e == "boolean" } function re(e) { return typeof e == "string" } function Ee(e) { return Number.isFinite(e) } function $u(e) { return Array.isArray(e) } function ue(e) { return e !== null && typeof e == "object" && !$u(e) } function ut(e) { return typeof e > "u" } function Nn(e) { return e === null } function pV(e) { return e == null } function tC(e) { return e instanceof Date && !Number.isNaN(e.getTime()) } function nC(e) { return ue(e) && Qt(e.return) } var Cu = () => { }, Zi = typeof F < "u", ja = Zi && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(Me.userAgent), rC = Zi && typeof F.requestIdleCallback == "function", hg = rC ? F.requestIdleCallback : setTimeout, pg = !ja;

 function mV(e, t = !0) { let { getRoute: n } = Qi();

 V(() => { if (!(!n || !t || !pg)) for (let r of e) iC(n(r)) }, [e, n, t]) } async function iC(e) { if (!pg || !e) return;

 let t = e.page;

 if (!(!t || !lg(t))) { await Zk();

 try { await t.preload() } catch { } } } var gV = { addEventListener: () => { }, removeEventListener: () => { }, dispatchEvent: () => !1, ResizeObserver: void 0, onpointerdown: !1, onpointermove: !1, onpointerup: !1, ontouchstart: !1, ontouchmove: !1, ontouchend: !1, onmousedown: !1, onmousemove: !1, onmouseup: !1, devicePixelRatio: 1, scrollX: 0, scrollY: 0, location: { hash: "", hostname: "", href: "", origin: "", pathname: "", search: "" }, document: { baseURI: "", cookie: "", referrer: null }, setTimeout: () => 0, clearTimeout: () => { }, setInterval: () => 0, clearInterval: () => { }, requestAnimationFrame: () => 0, cancelAnimationFrame: () => { }, requestIdleCallback: () => 0, getSelection: () => null, matchMedia: e => ({ matches: !1, media: e, onchange: () => { }, addEventListener: () => { }, removeEventListener: () => { }, addListener: () => { }, removeListener: () => { }, dispatchEvent: () => !1 }), innerHeight: 0, innerWidth: 0, SVGSVGElement: {}, scheduler: void 0, open: function (e, t, n) { }, __framer_events: [] }, be = Zi ? F : gV, _m, Mm;

 function oC() { let e = Intl.DateTimeFormat().resolvedOptions();

 _m = e.timeZone, Mm = e.locale } hg(oC);

 function mi(e, t, n = "lazy") { if (be.__framer_events) switch ((!_m || !Mm) && oC(), be.__framer_events.push([e, { referrer: null, url: be.location.href, hostname: be.location.hostname || null, pathname: be.location.pathname || null, hash: be.location.hash || null, search: be.location.search || null, timezone: _m, locale: Mm, ...t }, n]), e) { case "published_site_click": { let { trackingId: r, href: i } = t;

 r && document.dispatchEvent(new CustomEvent("framer:click", { detail: { trackingId: r, href: i } }));

 break } case "published_site_form_submit": { let { trackingId: r } = t;

 r && document.dispatchEvent(new CustomEvent("framer:formsubmit", { detail: { trackingId: r } }));

 break } case "published_site_pageview": { let { framerLocale: r } = t;

 document.dispatchEvent(new CustomEvent("framer:pageview", { detail: { framerLocale: r } }));

 break } } } function Om(e, t) { if (!e.startsWith("/") || !t.startsWith("/")) throw new Error("from/to paths are expected to be absolute");

 let [n] = QS(e), [r, i] = QS(t), o = vV(n, r);

 return o === "" && (o = "."), !o.startsWith(".") && !o.startsWith("/") && (o = "./" + o), o + "/" + i } function QS(e) { let t = e.lastIndexOf("/");

 return [e.substring(0, t + 1), e.substring(t + 1)] } var em = 46, Jo = 47, pi = (e, t) => e.charCodeAt(t), ZS = (e, t) => e.lastIndexOf(t), ts = (e, t, n) => e.slice(t, n);

 function vV(e, t) { if (e === t || (e = "/" + ew(e), t = "/" + ew(t), e === t)) return "";

 let n = 1, r = e.length, i = r - n, o = 1, s = t.length - o, a = i < s ? i : s, l = -1, c = 0;

 for (;

 c < a;

 c++) { let f = pi(e, n + c);

 if (f !== pi(t, o + c)) break;

 f === Jo && (l = c) } if (c === a) if (s > a) { if (pi(t, o + c) === Jo) return ts(t, o + c + 1);

 if (c === 0) return ts(t, o + c) } else i > a && (pi(e, n + c) === Jo ? l = c : c === 0 && (l = 0));

 let u = "";

 for (c = n + l + 1;

 c <= r;

 ++c)(c === r || pi(e, c) === Jo) && (u += u.length === 0 ? ".." : "/..");

 return `${u}${ts(t, o + l)}` } var yV = !1, iu = "/", JS = e => e === Jo;

 function ew(e) { let t = "", n = 0, r = -1, i = 0, o = 0;

 for (let s = 0;

 s <= e.length;

 ++s) { if (s < e.length) o = pi(e, s);

 else { if (JS(o)) break;

 o = Jo } if (JS(o)) { if (!(r === s - 1 || i === 1)) if (i === 2) { if (t.length < 2 || n !== 2 || pi(t, t.length - 1) !== em || pi(t, t.length - 2) !== em) { if (t.length > 2) { let a = ZS(t, iu);

 a === -1 ? (t = "", n = 0) : (t = ts(t, 0, a), n = t.length - 1 - ZS(t, iu)), r = s, i = 0;

 continue } else if (t.length !== 0) { t = "", n = 0, r = s, i = 0;

 continue } } yV && (t += t.length > 0 ? `${iu}..` : "..", n = 2) } else t.length > 0 ? t += `${iu}${ts(e, r + 1, s)}` : t = ts(e, r + 1, s), n = s - r - 1;

 r = s, i = 0 } else o === em && i !== -1 ? ++i : i = -1 } return t } var bV = new Set(["/404.html", "/404", "/404/"]), xV = ":([a-z]\\w*)", qi = new RegExp(xV, "gi");

 function sC(e, t) { return e.replace(qi, (n, r) => { let i = t[r];

 return typeof i != "string" || i.length === 0 ? n : encodeURIComponent(i) }) } function aC(e) { let t = typeof F < "u" ? F.location.search : "";

 return t ? SV(t, e) : e } function SV(e, t) { let n = t.indexOf("#"), r = n === -1 ? t : t.substring(0, n), i = n === -1 ? "" : t.substring(n), o = r.indexOf("?");

 if (o === -1) return r + e + i;

 let s = new URLSearchParams(e), a = r.substring(o + 1), l = new URLSearchParams(a);

 for (let [c, u] of s) l.has(c) || l.append(c, u);

 return r.substring(0, o + 1) + l.toString() + i } async function wV(e, t, n, r, i, o, s) { var a;

 let l = e, c = !1, u = { ...o }, f = Array.from(l.matchAll(qi)), d = await Promise.all(f.map(async b => { var g;

 let m = b?.[0], y = b?.[1];

 if (!m || !y) throw new Error("Failed to replace path variables: unexpected regex match group");

 let x = o[y];

 if (!x || !re(x)) throw new Error(`No slug found for path variable ${y}`);

 let C = await ((g = s?.[i]) == null ? void 0 : g.call(s));

 if (!C || !t) return x;

 let w = await C.getRecordIdBySlug(x, t);

 if (!w) return x;

 let R = await C.getSlugByRecordId(w, n);

 if (!R) { c = !0;

 let E = await C.getSlugByRecordId(w, r);

 return E && (u[y] = E), E ?? x } return u[y] = R, R })), h = 0, p = "", v = !1;

 for (let b = 0;

 b < f.length;

 b++) { let g = f[b], m = d[b];

 !g || !m || (p += l.substring(h, g.index), h = (g.index ?? 0) + (((a = g[0]) == null ? void 0 : a.length) ?? 0), p += d[b], v = !0) } return v && (l = p), { path: l, pathVariables: u, isMissingInLocale: c } } async function kV({ currentLocale: e, nextLocale: t, defaultLocale: n, route: r, pathVariables: i, collectionUtils: o, preserveQueryParams: s }) { let { path: a } = r, l = { path: a, pathVariables: i, isMissingInLocale: !1 };

 if (!a) return l;

 if (i && r.collectionId) try { l = await wV(a, e, t, n, r.collectionId, i, o) } catch { } return t.slug && (l.path = "/" + t.slug + l.path), s && l.path && (l.path = aC(l.path)), l } function CV(e) { if (!e) return "";

 let t;

 try { t = new URL(e) } catch { return "" } return t.pathname === "/" || F.location.origin !== t.origin ? "" : t.pathname.endsWith("/") ? t.pathname.slice(0, -1) : t.pathname } var RV = { global: void 0, routes: {} }, lC = S.createContext(RV);

 function hW({ children: e, value: t }) { return k(lC.Provider, { value: t, children: e }) } function TV() { return S.useContext(lC) } function EV(e, t, { global: n, routes: r }) { var i;

 return ((i = r[e]) == null ? void 0 : i[t]) || n } var tm = 10, FV = 1e4;

 function PV(e) { let t = tm, n = e.next(0), r = [n.value];

 for (;

 !n.done && t < FV;

)n = e.next(t), r.push(n.value), t += tm;

 return r.length === 1 && r.push(n.value), { easing: `linear(${r.join(",")})`, duration: t - tm } } var Mr = e => `--view-transition-${e}`;

 function Lm(e) { return [parseFloat(e), e.endsWith("px") ? "px" : "%"] } function cC(e) { let { innerWidth: t, innerHeight: n } = F, [r, i] = Lm(e.x), [o, s] = Lm(e.y);

 return { x: i === "px" ? r : t * (r / 100), y: s === "px" ? o : n * (o / 100) } } var IV = {
    makeKeyframe: (e, t, n) => { let r = 0;

 return (n === "exit" && e.angularDirection === "clockwise" && t === "start" || n === "exit" && e.angularDirection === "counter-clockwise" && t === "end" || n === "enter" && e.angularDirection === "counter-clockwise" && t === "start" || n === "enter" && e.angularDirection === "clockwise" && t === "end") && (r = e.sweepAngle / 360 * 100), `${Mr("conic-offset")}: ${r}%;

` }, makeStyles: (e, t) => { let n = `var(${Mr("conic-offset")})`, r = t === "exit" && e.angularDirection === "clockwise" || t === "enter" && e.angularDirection === "counter-clockwise", i = r ? "transparent" : "black", o = r ? "black" : "transparent", s = "conic-gradient(from ";

 return s += `${e.angle}deg at ${e.x} ${e.y}, `, s += `${i} 0%, ${i} ${n}, `, s += `${o} ${n}, ${o} 100%)`, `mask-image: ${s};

 -webkit-mask-image: ${s};

` }, makePropertyRules: () => `
        @property ${Mr("conic-offset")} {
            syntax: '<percentage>';


            initial-value: 0%;


            inherits: false;


        }
    `}, _V = { makeKeyframe: (e, t) => { let { x: n, y: r } = cC(e);

 return t === "start" ? `clip-path: circle(0 at ${n}px ${r}px);

` : `clip-path: circle(${Math.hypot(Math.max(n, F.innerWidth - n), Math.max(r, F.innerHeight - r))}px at ${n}px ${r}px);

` } }, MV = { makeKeyframe: (e, t) => { let { x: n, y: r } = cC(e), i = F.innerHeight - r, o = F.innerWidth - n;

 return t === "start" ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);` : "clip-path: inset(0 round 0);" } }, OV = {
        makeKeyframe: (e, t, n) => { let [, r] = Lm(e.width), i = `0${r}`;

 return (t === "start" && n === "exit" || t === "end" && n === "enter") && (i = e.width), `${Mr("blinds-width")}: ${i};

` }, makeStyles: (e, t) => { let n = `var(${Mr("blinds-width")})`, r = t === "exit" ? "transparent" : "black", i = t === "exit" ? "black" : "transparent", o = "repeating-linear-gradient(";

 return o += e.angle + 90 + "deg, ", o += `${r} 0px, ${r} ${n}, `, o += `${i} ${n}, ${i} ${e.width})`, `mask-image: ${o};

 -webkit-mask-image: ${o};

` }, makePropertyRules: () => `
            @property ${Mr("blinds-width")} {
                syntax: '<length-percentage>';


                initial-value: 0px;


                inherits: false;


            }
        `}, LV = {
        makeKeyframe: (e, t, n) => { let r = t === "start" && n === "exit" || t === "end" && n === "enter" ? 1 : 0;

 return `${Mr("wipe-offset")}: ${r};

` }, makeStyles: (e, t) => { let n = `var(${Mr("wipe-offset")})`, r = t === "exit" ? "transparent" : "black", i = t === "exit" ? "black" : "transparent", o = "linear-gradient(";

 return o += e.angle + 90 + "deg, ", o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `, o += `${i} calc(calc(100% + ${e.width}) * ${n}))`, `mask-image: ${o};

 -webkit-mask-image: ${o};

` }, makePropertyRules: () => `
            @property ${Mr("wipe-offset")} {
                syntax: '<number>';


                initial-value: 0;


                inherits: false;


            }
        `}, VV = { circle: _V, conic: IV, inset: MV, blinds: OV, wipe: LV }, AV = { opacity: 1, x: "0px", y: "0px", scale: 1, rotate: 0, rotateX: 0, rotateY: 0, mask: void 0 };

 function tw(e, t, n, r) {
    var i;

 let o = `
      opacity: ${e.opacity};


      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);


    `;

 return e.mask && (o += ((i = r?.makeKeyframe) == null ? void 0 : i.call(r, e.mask, t, n)) || ""), o
} function DV(e) { return e ? VV[e] : void 0 } function nw(e, { transition: t, ...n }) {
    var r;

 let i = "view-transition-" + e, o = { duration: "0s", easing: "linear" };

 if (t.type === "tween") o.duration = t.duration + "s", o.easing = `cubic-bezier(${t.ease.join(",")})`;

 else if (zV(t)) { let { easing: c, duration: u } = PV(Ls({ keyframes: [0, 1], ...BV(t), restDelta: .001, restSpeed: 1e-4 }));

 o.duration = u + "ms", o.easing = c } let s = DV((r = n?.mask) == null ? void 0 : r.type), a = tw(n, "start", e, s), l = tw({ ...AV, mask: n.mask }, "end", e, s);

 return e === "exit" && ([a, l] = [l, a]), `
        ${n.mask && s?.makePropertyRules ? s.makePropertyRules(n.mask) : ""}

        @keyframes ${i} {
            0% {
                ${a}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === "enter" ? "new" : "old"}(root) {
            animation-name: ${i};


            animation-duration: ${o.duration};


            animation-delay: ${t.delay}s;


            animation-timing-function: ${o.easing};


            animation-fill-mode: both;


            ${n.mask && s?.makeStyles ? s.makeStyles(n.mask, e) : ""}
        }
    `} function zV(e) { return e.type === "spring" } function BV(e) { return e.durationBasedSpring ? { duration: e.duration * 1e3, bounce: e.bounce } : { stiffness: e.stiffness, damping: e.damping, mass: e.mass } } var uC = "view-transition-styles", $V = { x: "0px", y: "0px", scale: 1, opacity: 1, rotate3d: !1, rotate: 0, rotateX: 0, rotateY: 0, mask: void 0, transition: { type: "tween", delay: 0, duration: .2, ease: [.27, 0, .51, 1], stiffness: 400, damping: 30, mass: 1 } };

 function NV({ exit: e = $V, enter: t }) {
    let n = document.createElement("style");

 n.id = uC;

 let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;


            }
        }
    `;

 (e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) && (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;


            }
        `), r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;


        }
    `, r += nw("exit", e), r += nw("enter", t), n.textContent = r, document.head.appendChild(n)
} function jV() { hg(() => { Q.render(() => { performance.mark("framer-vt-remove");

 let e = document.getElementById(uC);

 e && document.head.removeChild(e) }) }) } var rw = () => { };

 function HV() { return !!document.startViewTransition } function WV(e) { return new Promise(t => { Q.render(() => { performance.mark("framer-vt-style"), NV(e), t() }) }) } async function iw(e, t, n) { if (!HV()) { e();

 return } if (await WV(t), n?.aborted) return;

 performance.mark("framer-vt");

 let r = document.startViewTransition(async () => { performance.mark("framer-vt-freeze"), !n?.aborted && (n?.addEventListener("abort", () => r.skipTransition()), await e()) });

 return r.updateCallbackDone.then(() => { performance.mark("framer-vt-unfreeze") }).catch(rw), Promise.all([r.ready, r.finished]).then(() => { performance.mark("framer-vt-finished"), jV() }).catch(rw), r } function fC() { let e = TV(), t = _(void 0);

 return V(() => { t.current && (t.current(), t.current = void 0) }), $((n, r, i, o, s) => { let a = EV(n, r, e);

 if (a) { let l = new Promise(f => { t.current = f }), c = async () => { i(), await l }, u = async () => (await Xa({ priority: "user-blocking", signal: s }).catch(Cu), iw(c, a, s));

 return o ? u() : iw(c, a) } i() }, [e]) } function dC(e, t) { hg(() => { let n = document.querySelector("link[rel='canonical']");

 if (!n) return;

 let r = new URL(e, t);

 r.search = "", n.setAttribute("href", r.toString()) }) } var ai, hC = () => { ai || (ai = document.createElement("div"), ai.setAttribute("aria-live", "assertive"), ai.setAttribute("aria-atomic", "true"), ai.style.position = "absolute", ai.style.transform = "scale(0)", document.body.append(ai)), setTimeout(() => { ai.textContent = document.title }, 60) };

 function pC() { let e = _(void 0);

 return fV(() => { e.current && (e.current(), e.current = void 0) }, void 0, { priority: "user-blocking" }), $((t, n) => { let r = `${t}-start`, i = `${t}-end`, o = new Promise(s => { e.current = s });

 return t ? (performance.mark(r), o.finally(() => { performance.mark(i), performance.measure(t, { start: r, end: i, detail: n }) }).catch(s => { console.error(s) })) : o }, []) } async function ow(e, t, { currentRoutePath: n, currentPathVariables: r, hash: i, pathVariables: o, localeId: s, preserveQueryParams: a, siteCanonicalURL: l }, c = !1, u = !1) { let { path: f } = t;

 if (!f) return;

 let d = Nu(t, { currentRoutePath: n, currentPathVariables: r, hash: i, pathVariables: o, preserveQueryParams: a, siteCanonicalURL: l });

 try { return await mC({ routeId: e, hash: i, pathVariables: o, localeId: s }, d, c, u) } catch { } } function UV(e) { return ue(e) && re(e["routeId"]) } function GV(e, t, n = !1) { performance.mark("framer-history-replace"), (n ? F.history.__proto__.replaceState : F.history.replaceState).call(F.history, e, "", t) } var ou = !0, sw = (() => { if (typeof Me > "u") return !1;

 let e = Me.userAgent, t = e.indexOf("Chrome/"), n = +e.slice(t + 7, e.indexOf(".", t));

 return n > 101 && n < 128 })();

 async function mC(e, t, n = !1, r = !1) { if (n && await Xa({ priority: "user-blocking" }), performance.mark("framer-history-push"), dC(t, F.location.href), !r) { F.history.pushState(e, "", t);

 return } let i = !1, o;

 ou && (o = () => { if (i = !0, sw) return;

 let s = "Popstate called after intercept(). Please report this to the Framer team.";

 console.error(s), mi("published_site_load_recoverable_error", { message: s }) }, F.addEventListener("popstate", o, { once: !0 })), sw && ou ? F.history.__proto__.pushState.call(F.history, e, "", t) : F.history.pushState(e, "", t), ou && queueMicrotask(() => { i || (ou = !1, F.removeEventListener("popstate", o)) }) } function qV({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r }) { ze(() => { e || (performance.mark("framer-history-set-initial-state"), GV({ routeId: t, pathVariables: n, localeId: r }, void 0, !0)) }, []) } var Vm = (() => { var e;

 return Zi && typeof ((e = F.navigation) == null ? void 0 : e.back) == "function" })();

 function XV(e, t) { let n = fC(), r = pC(), i = _(void 0), o = $(async ({ state: a }) => { var l, c, u, f, d, h;

 if ((l = F.navigation) != null && l.transition && ((u = (c = F.navigation) == null ? void 0 : c.transition) == null ? void 0 : u.navigationType) !== "traverse" || !ue(a)) return;

 let { routeId: p, hash: v, pathVariables: b, localeId: g } = a;

 if (!re(p)) return;

 let m = r("framer-route-change", { popstate: !0 }), y = eC();

 m.finally(y);

 let x = () => { t(p, re(g) ? g : void 0, re(v) ? v : void 0, ue(b) ? b : void 0, !0, !1) }, C = await n(e.current, p, x, !1), w = (f = F.navigation) == null ? void 0 : f.transition;

 await (C?.updateCallbackDone ?? Promise.resolve()).then((d = i.current) == null ? void 0 : d.resolve).catch((h = i.current) == null ? void 0 : h.reject), await m;

 try { await w?.finished } catch (R) { console.warn("Popstate transition failed", R) } hC(), dC(F.location.href) }, [e, r, t, n]), s = $(a => { a.navigationType === "traverse" && a.intercept({ async handler() { await new Promise((l, c) => { i.current = { resolve: l, reject: c } }), i.current = void 0 }, scroll: "after-transition" }) }, []);

 V(() => (F.addEventListener("popstate", o), Vm && F.navigation.addEventListener("navigate", s), () => { F.removeEventListener("popstate", o), Vm && F.navigation.removeEventListener("navigate", s) }), [o, s]) } function YV(e, t, n) { let r = Bu(t, e);

 if (!r) return;

 let i = Object.assign({}, t?.elements, n);

 return r.replace(qi, (o, s) => String(i[s] ?? o)) } function Nu(e, { currentRoutePath: t, currentPathVariables: n, hash: r, pathVariables: i, hashVariables: o, relative: s = !0, preserveQueryParams: a, onlyHash: l = !1, siteCanonicalURL: c }) { let u = YV(r, e, o);

 if (l) return u ?? "";

 let f = t ?? "/";

 n && (f = f.replace(qi, (v, b) => String(n[b] || v)));

 let h = e?.path ?? "/";

 i && (h = h.replace(qi, (v, b) => String(i[b] || v)));

 let p = f === h && u;

 if (s) if (bV.has(f) && typeof F < "u") { let v = CV(c);

 h = Om(F.location.pathname, v + h) } else h = Om(f, h);

 return (a || p) && (h = aC(h)), u && (h = `${h}#${u}`), h } async function KV(e, t, n) { if (!e.path || !t) return !1;

 let i = `${n.slug ? `/${n.slug}` : ""}${sC(e.path, t)}`;

 return (await fetch(i, { method: "HEAD", redirect: "manual" })).type === "opaqueredirect" ? (F.location.href = F.location.origin + i, !0) : !1 } async function QV(e) { let t = await kV(e);

 if (t) { try { localStorage.setItem("preferredLocale", e.nextLocale.code) } catch { } try { if (!re(t.path)) throw new Error("Expected result.path to be a string");

 if (t.isMissingInLocale && await KV(e.route, t.pathVariables, e.nextLocale)) return } catch { } return t } } function ZV() { let e = _(Promise.resolve()), t = _(), n = $(r => { if (r.navigationType === "traverse") return;

 let i = t.current;

 i?.signal.addEventListener("abort", () => { i.abort("user aborted") }), r.intercept({ handler: () => e.current }) }, []);

 return $((r, i, o) => { if (!Vm) { i();

 return } e.current = r, t.current = o, F.navigation.addEventListener("navigate", n), i(!0), r.finally(() => { F.navigation.removeEventListener("navigate", n) }) }, [n]) } var JV = async () => { }, eA = { activeLocale: null, locales: [], setLocale: JV }, gC = S.createContext(eA);

 function ju() { return S.useContext(gC) } function vW() { var e;

 return ((e = ju().activeLocale) == null ? void 0 : e.code) ?? "en-US" } var Aa = ["mousedown", "mouseup", "touchcancel", "touchend", "touchstart", "auxclick", "dblclick", "pointercancel", "pointerdown", "pointerup", "dragend", "dragstart", "drop", "compositionend", "compositionstart", "keydown", "keypress", "keyup", "input", "textInput", "copy", "cut", "paste", "click", "change", "contextmenu", "reset"], vC = e => { var t, n;

 (n = (t = e.target) == null ? void 0 : t.closest) != null && n.call(t, "#main") && (e.stopPropagation(), performance.mark("framer-react-event-handling-prevented")) }, yC = !1;

 function bW() { if (!Aa) return;

 yC = !0, performance.mark("framer-react-event-handling-start");

 let e = { capture: !0 };

 Aa.forEach(t => document.body.addEventListener(t, vC, e)) } function tA() { return V(() => { if (!yC || !Aa) return;

 let e = { capture: !0 };

 Aa.forEach(t => document.body.removeEventListener(t, vC, e)), Aa = void 0, performance.mark("framer-react-event-handling-end") }, []), null } var mg = !1;

 function SW() { mg = !0 } function nA() { mg = !1 } function rA() { let e = _(!Zi || mg);

 return V(() => { e.current = !1 }, []), e } function wt(e) { let t = !1;

 return function (...n) { if (!t) return t = !0, e.apply(this, n) } } function Pr(e, t, n) { try { performance.measure(e, t, n) } catch (r) { console.warn(`Could not measure ${e}`, r) } } var bC, xC, SC, wC, kC, CC, RC, TC, EC, FC, PC, IC, _C, MC, OC, LC, VC, nt;

 VC = [wt], LC = [wt], OC = [wt], MC = [wt], _C = [wt], IC = [wt], PC = [wt], FC = [wt], EC = [wt], TC = [wt], RC = [wt], CC = [wt], kC = [wt], wC = [wt], SC = [wt], xC = [wt], bC = [wt];

 var ft = class { constructor() { qg(nt, 5, this), T(this, "render", { markStart: () => this.markRenderStart(), markEnd: () => this.markRenderEnd() }), T(this, "mutationEffects", { measure: () => this.measureMutationEffects() }), T(this, "useInsertionEffects", { markStart: () => this.markUseInsertionEffectsStart(), markRouterStart: () => this.markUseInsertionEffectRouterStart(), markEnd: () => this.markUseInsertionEffectsEnd() }), T(this, "useLayoutEffects", { markStart: () => this.markUseLayoutEffectsStart(), markRouterStart: () => this.markRouterUseLayoutEffectStart(), markEnd: () => this.markUseLayoutEffectsEnd() }), T(this, "useEffects", { markStart: () => this.markUseEffectsStart(), markRouterStart: () => this.markUseEffectsRouterStart(), markEnd: () => this.markUseEffectsEnd(), markAreSynchronous: () => this.markUseEffectsAreSynchronous() }), T(this, "browserRendering", { hasStarted: !1, requestAnimationFrame: { markStart: () => this.markRafStart(), markEnd: () => this.markRafEnd() }, layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() } }), T(this, "unattributedHydrationOverhead", { measure: () => this.measureUnattributedHydrationOverhead() }) } markRenderStart() { performance.mark("framer-hydration-start") } markRenderEnd() { performance.mark("framer-hydration-render-end"), Pr("framer-hydration-render", "framer-hydration-start", "framer-hydration-render-end") } markUseInsertionEffectsStart() { performance.mark("framer-hydration-insertion-effects-start") } markUseInsertionEffectRouterStart() { performance.mark("framer-hydration-router-insertion-effect") } markUseInsertionEffectsEnd() { performance.mark("framer-hydration-insertion-effects-end"), Pr("framer-hydration-insertion-effects", "framer-hydration-insertion-effects-start", "framer-hydration-insertion-effects-end") } markUseLayoutEffectsStart() { performance.mark("framer-hydration-layout-effects-start") } markRouterUseLayoutEffectStart() { performance.mark("framer-hydration-router-layout-effect") } markUseLayoutEffectsEnd() { performance.mark("framer-hydration-layout-effects-end"), Pr("framer-hydration-layout-effects", "framer-hydration-layout-effects-start", "framer-hydration-layout-effects-end") } markUseEffectsStart() { performance.mark("framer-hydration-effects-start") } markUseEffectsRouterStart() { performance.mark("framer-hydration-router-effect") } markUseEffectsAreSynchronous() { performance.mark("framer-hydration-effects-sync") } markUseEffectsEnd() { var e, t;

 performance.mark("framer-hydration-effects-end"), Pr("framer-hydration-effects", ((e = performance.getEntriesByName("framer-hydration-first-paint")[0]) == null ? void 0 : e.name) ?? ((t = performance.getEntriesByName("framer-hydration-effects-start")[0]) == null ? void 0 : t.name), "framer-hydration-effects-end") } markRafStart() { this.browserRendering.hasStarted = !0, performance.mark("framer-hydration-browser-render-start") } markRafEnd() { performance.mark("framer-hydration-browser-raf-end"), Pr("framer-hydration-raf", "framer-hydration-browser-render-start", "framer-hydration-browser-raf-end") } markLayoutStylePaintEnd() { performance.mark("framer-hydration-first-paint"), Pr("framer-hydration-time-to-first-paint", "framer-hydration-start", "framer-hydration-first-paint"), Pr("framer-hydration-browser-render", "framer-hydration-browser-raf-end", "framer-hydration-first-paint") } measureMutationEffects() { Pr("framer-hydration-commit", "framer-hydration-layout-effects-end", "framer-hydration-effects-start") } measureUnattributedHydrationOverhead() { var e, t;

 Pr("framer-hydration-uho", ((e = performance.getEntriesByName("framer-hydration-effects-end")[0]) == null ? void 0 : e.name) ?? ((t = performance.getEntriesByName("framer-hydration-layout-effects-end")[0]) == null ? void 0 : t.name), "framer-hydration-browser-render-start") } };

 nt = Ug(null);

 dt(nt, 1, "markRenderStart", VC, ft);

 dt(nt, 1, "markRenderEnd", LC, ft);

 dt(nt, 1, "markUseInsertionEffectsStart", OC, ft);

 dt(nt, 1, "markUseInsertionEffectRouterStart", MC, ft);

 dt(nt, 1, "markUseInsertionEffectsEnd", _C, ft);

 dt(nt, 1, "markUseLayoutEffectsStart", IC, ft);

 dt(nt, 1, "markRouterUseLayoutEffectStart", PC, ft);

 dt(nt, 1, "markUseLayoutEffectsEnd", FC, ft);

 dt(nt, 1, "markUseEffectsStart", EC, ft);

 dt(nt, 1, "markUseEffectsRouterStart", TC, ft);

 dt(nt, 1, "markUseEffectsAreSynchronous", RC, ft);

 dt(nt, 1, "markUseEffectsEnd", CC, ft);

 dt(nt, 1, "markRafStart", kC, ft);

 dt(nt, 1, "markRafEnd", wC, ft);

 dt(nt, 1, "markLayoutStylePaintEnd", SC, ft);

 dt(nt, 1, "measureMutationEffects", xC, ft);

 dt(nt, 1, "measureUnattributedHydrationOverhead", bC, ft);

 Gg(nt, ft);

 var he;

 function kW() { he = new ft, he.render.markStart() } function iA() { et(() => { he?.useInsertionEffects.markRouterStart() }, []), ze(() => { he?.useLayoutEffects.markRouterStart() }, []), V(() => { he?.useEffects.markRouterStart() }, []) } var AC = !1;

 function oA() { et(() => { he?.render.markEnd(), he?.useInsertionEffects.markStart() }, []), ze(() => { if (he?.useLayoutEffects.markStart(), document.visibilityState !== "visible") { AC = !0;

 return } requestAnimationFrame(() => { he?.browserRendering.requestAnimationFrame.markStart(), he?.unattributedHydrationOverhead.measure() }) }, []), V(() => { he?.useEffects.markStart(), he?.browserRendering.hasStarted || (he?.mutationEffects.measure(), he?.useEffects.markAreSynchronous()) }, []) } function sA() { et(() => { he?.useInsertionEffects.markEnd() }, []), ze(() => { he?.useLayoutEffects.markEnd(), !(AC || document.visibilityState !== "visible") && requestAnimationFrame(() => { he?.browserRendering.requestAnimationFrame.markEnd(), Jk(() => { he?.browserRendering.layoutStylePaint.markEnd() }) }) }, []), V(() => { he?.useEffects.markEnd() }, []) } function aA() { return oA(), null } function lA() { return sA(), null } var aw = { Start: aA, End: lA };

 function Am(e, t) { let n = { style: t, "data-framer-root": "" };

 return S.isValidElement(e) ? S.cloneElement(e, n) : k(e, { ...n }) } var cA = class extends Error { }, uA = class extends ye { constructor(e) { super(e), this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey } } static getDerivedStateFromError(e) { return { error: e } } static getDerivedStateFromProps(e, t) { if (e.forceUpdateKey !== t.forceUpdateKey) { let n = { forceUpdateKey: e.forceUpdateKey };

 return t.error && (n.error = void 0), n } return null } render() { if (this.state.error === void 0) return this.props.children;

 if (!(this.state.error instanceof cA)) throw this.state.error;

 let { notFoundPage: e, defaultPageStyle: t } = this.props;

 if (!e) throw this.state.error;

 return Am(e, t) } }, su, nm, lw;

 function fA(e) { if (lw !== e) { su = {};

 for (let [t, { path: n }] of Object.entries(e)) n && (su[n] = { path: n, depth: dA(n), routeId: t });

 nm = Object.values(su), nm.sort(({ depth: t }, { depth: n }) => n - t), lw = e } return [su, nm] } function DC(e, t, n = !0, r = []) { let [i, o] = fA(e), s, a, l = t;

 if (r.length > 0) { let d = l.split("/").find(Boolean);

 if (d && (s = r.find(({ slug: h }) => h === d), s && (a = s.id, l = l.substring(s.slug.length + 1))), !a) { let h = r.find(({ slug: p }) => p === "");

 h && (a = h.id) } } let c = i[l];

 if (c) { let d = cw(l, c.path);

 if (d.isMatch) return { routeId: c.routeId, localeId: a, pathVariables: d.pathVariables } } for (let { path: d, routeId: h } of o) { let p = cw(l, d);

 if (p.isMatch) return { routeId: h, localeId: a, pathVariables: p.pathVariables } } if (!n) throw new Error("No exact match found for path");

 let u = i["/"];

 if (u) return { routeId: u.routeId, localeId: a };

 let f = Object.keys(e)[0];

 if (!f) throw new Error("Router should not have undefined routes");

 return { routeId: f, localeId: a } } function dA(e) { let t = e.replace(/^\/|\/$/gu, "");

 return t === "" ? 0 : t.split("/").length } function cw(e, t) { let n = [], i = hA(t).replace(qi, (c, u) => (n.push(u), "([^/]+)")), o = new RegExp(i + "$"), s = e.match(o);

 if (!s) return { isMatch: !1 };

 if (s.length === 1) return { isMatch: !0 };

 let a = {}, l = s.slice(1);

 for (let c = 0;

 c < n.length;

 ++c) { let u = n[c];

 if (u === void 0) continue;

 let f = l[c], d = a[u];

 if (d) { if (d !== f) return { isMatch: !1 };

 continue } if (f === void 0) throw new Error("Path variable values cannot be undefined");

 a[u] = f } return { isMatch: !0, pathVariables: a } } function hA(e) { return e.replace(/[|\\{}()[\]^$+*?.]/gu, "\\$&").replace(/-/gu, "\\x2d") } function pA() { var e;

 if ("PerformanceServerTiming" in F) { let t = (e = performance.getEntriesByType("navigation")[0]) == null ? void 0 : e.serverTiming;

 if (!t || t.length === 0) return new URLSearchParams;

 let n = t.find(r => r.name === "abtests");

 return n ? new URLSearchParams(n.description) : new URLSearchParams } return new URLSearchParams } var mA = /[^|;]?framerAbTestingOverrides=(?<value>[^;]*)[;|$]?/u;
    function gA() { var e;

 let t = "";

 try { let n = mA.exec(document.cookie);

 t = ((e = n?.groups) == null ? void 0 : e.value) ?? "" } catch { } return new URLSearchParams(t) } function vA(e, t, n) { let r = e[n];

 if (!r) return;

 let i = r.abTestingParentId ?? n;

 if (!e[i]) return;

 let { abTestingParentId: o, ...s } = r, a = e[i].elements || r.elements ? { ...e[i].elements, ...r.elements } : void 0;

 e[i] = { ...s, elements: a, abTestingVariantId: n, abTestId: t } } function uw(e, t) { for (let [n, r] of t) vA(e, n, r) } function yA(e) { var t;

 for (let n in e) (t = e[n]) != null && t.abTestingParentId && delete e[n] } function bA(e, t) { var n, r;

 if (!e[t] || !e[t].abTestingParentId) return;

 let i = e[t].abTestingParentId, { abTestingParentId: o, ...s } = e[t], a = (n = e[i]) != null && n.elements || s.elements ? { ...(r = e[i]) == null ? void 0 : r.elements, ...s.elements } : void 0;

 e[i] = { ...s, elements: a, abTestingVariantId: t } } function EW(e, t) { var n;

 if (typeof F > "u") return t;

 let r = t;

 if (t) { bA(e, t);

 let i = (n = e[t]) == null ? void 0 : n.abTestingParentId;

 i && (r = i) } return uw(e, pA()), uw(e, gA()), yA(e), r } var fw = new Set;

 function ns(e, ...t) { fw.has(e) || (fw.add(e), console.warn(e, ...t)) } function xA(e, t, n) { let r = n ? `, use ${n} instead` : "", i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;

 ns(i) } var zC = class { constructor() { T(this, "observers", new Set), T(this, "transactions", {}) } add(e) { this.observers.add(e);

 let t = !1;

 return () => { t || (t = !0, this.remove(e)) } } remove(e) { this.observers.delete(e) } notify(e, t) { if (t) { let n = this.transactions[t] || e;

 n.value = e.value, this.transactions[t] = n } else this.callObservers(e) } finishTransaction(e) { let t = this.transactions[e];

 return delete this.transactions[e], this.callObservers(t, e) } callObservers(e, t) { let n = [];

 return new Set(this.observers).forEach(r => { typeof r == "function" ? r(e, t) : (r.update(e, t), n.push(r.finish)) }), n } }, at = (() => { function e(t) { return xA("Animatable()", "2.0.0", "the new animation API (https://www.framer.com/api/animation/)"), jn(t) ? t : new wA(t) } return e.transaction = t => { let n = Math.random(), r = new Set;

 t((s, a) => { s.set(a, n), r.add(s) }, n);

 let o = [];

 r.forEach(s => { o.push(...s.finishTransaction(n)) }), o.forEach(s => { s(n) }) }, e.getNumber = (t, n = 0) => e.get(t, n), e.get = (t, n) => t == null ? n : jn(t) ? t.get() : t, e.objectToValues = t => { if (!t) return t;

 let n = {};

 for (let r in t) { let i = t[r];

 jn(i) ? n[r] = i.get() : n[r] = i } return n }, e })(), dw = "onUpdate", hw = "finishTransaction";

 function jn(e) { return e !== null && typeof e == "object" && dw in e && e[dw] instanceof Function && hw in e && e[hw] instanceof Function } function SA(e, t) { return { interpolate(n, r) { let i = n.get(), o = r.get(), s = at(i);

 return a => { let l = t.interpolate(i, o)(a);

 return s.set(l), s } }, difference(n, r) { let i = n.get();

 return t.difference(i, r.get()) } } } var wA = class { constructor(e) { this.value = e, T(this, "observers", new zC) } static interpolationFor(e, t) { if (jn(e)) return SA(e, t) } get() { return this.value } set(e, t) { let n = this.value;

 jn(e) && (e = e.get()), this.value = e;

 let r = { value: e, oldValue: n };

 this.observers.notify(r, t) } finishTransaction(e) { return this.observers.finishTransaction(e) } onUpdate(e) { return this.observers.add(e) } };

 function au(e, t) { let r = 10 ** Math.round(Math.abs(t));

 return Math.round(e * r) / r } function pw(e, t) { return t === 0 ? Math.round(e) : (t -= t | 0, t < 0 && (t = 1 - t), Math.round(e - t) + t) } function fn(e, t) { return { x: e, y: t } } (e => { e.isQuadrilateralPoints = i => i?.length === 4, e.add = (...i) => i.reduce((o, s) => ({ x: o.x + s.x, y: o.y + s.y }), { x: 0, y: 0 }), e.subtract = (i, o) => ({ x: i.x - o.x, y: i.y - o.y }), e.multiply = (i, o) => ({ x: i.x * o, y: i.y * o }), e.divide = (i, o) => ({ x: i.x / o, y: i.y / o }), e.absolute = i => ({ x: Math.abs(i.x), y: Math.abs(i.y) }), e.reverse = i => ({ x: i.x * -1, y: i.y * -1 }), e.pixelAligned = (i, o = { x: 0, y: 0 }) => ({ x: pw(i.x, o.x), y: pw(i.y, o.y) }), e.distance = (i, o) => { let s = Math.abs(i.x - o.x), a = Math.abs(i.y - o.y);

 return Math.sqrt(s * s + a * a) }, e.angle = (i, o) => Math.atan2(o.y - i.y, o.x - i.x) * 180 / Math.PI - 90, e.angleFromX = (i, o) => Math.atan2(o.y - i.y, o.x - i.x) * 180 / Math.PI, e.isEqual = (i, o) => i.x === o.x && i.y === o.y, e.rotationNormalizer = () => { let i;

 return o => { typeof i != "number" && (i = o);

 let s = i - o, a = Math.abs(s) + 180, l = Math.floor(a / 360);

 return s < 180 && (o -= l * 360), s > 180 && (o += l * 360), i = o, o } };

 function t(i, o) { return { x: (i.x + o.x) / 2, y: (i.y + o.y) / 2 } } e.center = t;

 function n(i) { let o = 0, s = 0;

 i.forEach(c => { o += c.x, s += c.y });

 let a = o / i.length, l = s / i.length;

 return { x: a, y: l } } e.centroid = n;

 function r(i) { let o = e.centroid(i), s = new Map;

 for (let a = 0;

 a < i.length;

 a++) { let l = i[a];

 l && s.set(l, Math.atan2(l.y - o.y, l.x - o.x)) } return i.sort((a, l) => (s.get(a) ?? 0) - (s.get(l) ?? 0)) } e.sortClockwise = r })(fn || (fn = {}));

 var Dm = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };

 function li(e, t, n, r = !1) { let [i, o] = t, [s, a] = n, l = o - i;

 if (l === 0) return (a + s) / 2;

 let c = a - s;

 if (c === 0) return s;

 let u = s + (e - i) / l * c;

 if (r === !0) if (s < a) { if (u < s) return s;

 if (u > a) return a } else { if (u > s) return s;

 if (u < a) return a } return u } function rs(e) { return !Number.isNaN(e) && Number.isFinite(e) } function ci(e) { let t = zm(e);

 return t !== void 0 ? e.includes("%") ? t / 100 : t : 0 } function zm(e) { let t = /\d?\.?\d+/u.exec(e);

 return t ? Number(t[0]) : void 0 } var kA = qL().Hsluv, Yt = new kA;

 function CA(e, t, n) { return Yt.rgb_r = e / 255, Yt.rgb_g = t / 255, Yt.rgb_b = n / 255, Yt.rgbToHsluv(), { h: Yt.hsluv_h, s: Yt.hsluv_s, l: Yt.hsluv_l } } function RA(e, t, n, r = 1) { return Yt.hsluv_h = e, Yt.hsluv_s = t, Yt.hsluv_l = n, Yt.hsluvToRgb(), { r: Yt.rgb_r * 255, g: Yt.rgb_g * 255, b: Yt.rgb_b * 255, a: r } } function Fa(e, t, n, r) { let i = Math.round(e), o = Math.round(t * 100), s = Math.round(n * 100);

 return r === void 0 || r === 1 ? "hsv(" + i + ", " + o + "%, " + s + "%)" : "hsva(" + i + ", " + o + "%, " + s + "%, " + r + ")" } function TA(e, t, n) { return { r: rs(e) ? zt(e, 255) * 255 : 0, g: rs(t) ? zt(t, 255) * 255 : 0, b: rs(n) ? zt(n, 255) * 255 : 0 } } function mw(e, t, n, r) { let i = [im(Math.round(e).toString(16)), im(Math.round(t).toString(16)), im(Math.round(n).toString(16))];

 return r && i[0].charAt(0) === i[0].charAt(1) && i[1].charAt(0) === i[1].charAt(1) && i[2].charAt(0) === i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("") } function Hu(e, t, n) { let r, i, o = zt(e, 255), s = zt(t, 255), a = zt(n, 255), l = Math.max(o, s, a), c = Math.min(o, s, a), u = i = r = (l + c) / 2;

 if (l === c) u = i = 0;

 else { let f = l - c;

 switch (i = r > .5 ? f / (2 - l - c) : f / (l + c), l) { case o: u = (s - a) / f + (s < a ? 6 : 0);

 break;

 case s: u = (a - o) / f + 2;

 break;

 case a: u = (o - s) / f + 4;

 break }u /= 6 } return { h: u * 360, s: i, l: r } } function rm(e, t, n) { return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e } function EA(e, t, n) { let r, i, o;

 if (e = zt(e, 360), t = zt(t * 100, 100), n = zt(n * 100, 100), t === 0) r = i = o = n;

 else { let s = n < .5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;

 r = rm(a, s, e + 1 / 3), i = rm(a, s, e), o = rm(a, s, e - 1 / 3) } return { r: r * 255, g: i * 255, b: o * 255 } } function gw(e, t, n) { e = zt(e, 255), t = zt(t, 255), n = zt(n, 255);

 let r = Math.max(e, t, n), i = Math.min(e, t, n), o = r - i, s, a = r === 0 ? 0 : o / r, l = r;

 if (r === i) s = 0;

 else { switch (r) { case e: s = (t - n) / o + (t < n ? 6 : 0);

 break;

 case t: s = (n - e) / o + 2;

 break;

 case n: s = (e - t) / o + 4;

 break }s /= 6 } return { h: s, s: a, v: l } } function FA(e, t, n) { e = zt(e, 360) * 6, t = zt(t * 100, 100), n = zt(n * 100, 100);

 let r = Math.floor(e), i = e - r, o = n * (1 - t), s = n * (1 - i * t), a = n * (1 - (1 - i) * t), l = r % 6, c = [n, s, o, o, a, n][l], u = [a, n, n, s, o, o][l], f = [o, o, a, n, n, s][l];

 return { r: c * 255, g: u * 255, b: f * 255 } } function zt(e, t) { let n, r;

 if (typeof t == "string" ? n = parseFloat(t) : n = t, typeof e == "string") { PA(e) && (e = "100%");

 let i = IA(e);

 r = Math.min(n, Math.max(0, parseFloat(e))), i && (r = Math.floor(r * n) / 100) } else r = e;

 return Math.abs(r - n) < 1e-6 ? 1 : r % n / n } function PA(e) { return typeof e == "string" && e.includes(".") && parseFloat(e) === 1 } function IA(e) { return typeof e == "string" && e.includes("%") } function im(e) { return e.length === 1 ? "0" + e : "" + e } var ar = (() => { let n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + "[-\\+]?\\d+%?" + ")", r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?", i = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?";

 return { rgb: new RegExp("rgb" + r), rgba: new RegExp("rgba" + i), hsl: new RegExp("hsl" + r), hsla: new RegExp("hsla" + i), hsv: new RegExp("hsv" + r), hsva: new RegExp("hsva" + i), hex3: /^([\da-f])([\da-f])([\da-f])$/iu, hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu, hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu, hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu } })();

 function gg(e) { if (e.includes("gradient(") || e.includes("var(")) return !1;

 let t = /^[\s,#]+/u, n = e.replace(t, "").trimEnd().toLowerCase(), r = Dm[n];

 if (r && (n = r), n === "transparent") return { r: 0, g: 0, b: 0, a: 0, format: "name" };

 let i;

 return (i = ar.rgb.exec(n)) ? { r: parseInt(i[1] ?? ""), g: parseInt(i[2] ?? ""), b: parseInt(i[3] ?? ""), a: 1, format: "rgb" } : (i = ar.rgba.exec(n)) ? { r: parseInt(i[1] ?? ""), g: parseInt(i[2] ?? ""), b: parseInt(i[3] ?? ""), a: parseFloat(i[4] ?? ""), format: "rgb" } : (i = ar.hsl.exec(n)) ? { h: parseInt(i[1] ?? ""), s: ci(i[2] ?? ""), l: ci(i[3] ?? ""), a: 1, format: "hsl" } : (i = ar.hsla.exec(n)) ? { h: parseInt(i[1] ?? ""), s: ci(i[2] ?? ""), l: ci(i[3] ?? ""), a: parseFloat(i[4] ?? ""), format: "hsl" } : (i = ar.hsv.exec(n)) ? { h: parseInt(i[1] ?? ""), s: ci(i[2] ?? ""), v: ci(i[3] ?? ""), a: 1, format: "hsv" } : (i = ar.hsva.exec(n)) ? { h: parseInt(i[1] ?? ""), s: ci(i[2] ?? ""), v: ci(i[3] ?? ""), a: parseFloat(i[4] ?? ""), format: "hsv" } : (i = ar.hex8.exec(n)) ? { r: un(i[1] ?? ""), g: un(i[2] ?? ""), b: un(i[3] ?? ""), a: vw(i[4] ?? ""), format: r ? "name" : "hex" } : (i = ar.hex6.exec(n)) ? { r: un(i[1] ?? ""), g: un(i[2] ?? ""), b: un(i[3] ?? ""), a: 1, format: r ? "name" : "hex" } : (i = ar.hex4.exec(n)) ? { r: un(`${i[1]}${i[1]}`), g: un(`${i[2]}${i[2]}`), b: un(`${i[3]}${i[3]}`), a: vw(i[4] + "" + i[4]), format: r ? "name" : "hex" } : (i = ar.hex3.exec(n)) ? { r: un(`${i[1]}${i[1]}`), g: un(`${i[2]}${i[2]}`), b: un(`${i[3]}${i[3]}`), a: 1, format: r ? "name" : "hex" } : !1 } function un(e) { return parseInt(e, 16) } function vw(e) { return un(e) / 255 } var _A = /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u;

 function MA(e) { let t = _A.exec(e);

 if (!t) return null;

 let { r: n = "0", g: r = "0", b: i = "0", a: o } = t.groups ?? {};

 return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: o ? parseFloat(o) : 1 } } function om(e = 0) { let t = Math.abs(e);

 return t <= .04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + .055) / 1.055) ** 2.4 } function BC({ r: e, g: t, b: n, a: r }) { return { r: om(e), g: om(t), b: om(n), a: r } } function sm(e = 0) { let t = Math.abs(e);

 return t > .0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - .055) : e * 12.92 } function $C({ r: e, g: t, b: n, a: r }) { return { r: sm(e), g: sm(t), b: sm(n), a: r } } var OA = e => { let { r: t, g: n, b: r, a: i } = BC(e);

 return { x: .486570948648216 * t + .265667693169093 * n + .1982172852343625 * r, y: .2289745640697487 * t + .6917385218365062 * n + .079286914093745 * r, z: 0 * t + .0451133818589026 * n + 1.043944368900976 * r, a: i } }, LA = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) => $C({ r: e * 3.2409699419045226 - t * 1.537383177570094 - .4986107602930034 * n, g: e * -.9692436362808796 + t * 1.8759675015077204 + .0415550574071756 * n, b: e * .0556300796969936 - t * .2039769588889765 + 1.0569715142428784 * n, a: r }), VA = e => { let { r: t, g: n, b: r, a: i } = BC(e);

 return { x: .4123907992659593 * t + .357584339383878 * n + .1804807884018343 * r, y: .2126390058715102 * t + .715168678767756 * n + .0721923153607337 * r, z: .0193308187155918 * t + .119194779794626 * n + .9505321522496607 * r, a: i } }, AA = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) => $C({ r: e * 2.4934969119414263 - t * .9313836179191242 - .402710784450717 * n, g: e * -.8294889695615749 + t * 1.7626640603183465 + .0236246858419436 * n, b: e * .0358458302437845 - t * .0761723892680418 + .9568845240076871 * n, a: r });

 function DA({ r: e, g: t, b: n, a: r }) { let i = Math.max(e, t, n), o = Math.min(e, t, n), s = { h: 0, s: i === 0 ? 0 : 1 - o / i, v: i, a: r };

 return i - o !== 0 && (s.h = (i === e ? (t - n) / (i - o) + (t < n ? 6 : 0) : i === t ? (n - e) / (i - o) + 2 : (e - t) / (i - o) + 4) * 60), s } function zA(e) { return (e = e % 360) < 0 ? e + 360 : e } function yw({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) { let i = zA(e), o = Math.abs(i / 60 % 2 - 1);

 switch (Math.floor(i / 60)) { case 0: return { r: n, g: n * (1 - t * o), b: n * (1 - t), a: r };

 case 1: return { r: n * (1 - t * o), g: n, b: n * (1 - t), a: r };

 case 2: return { r: n * (1 - t), g: n, b: n * (1 - t * o), a: r };

 case 3: return { r: n * (1 - t), g: n * (1 - t * o), b: n, a: r };

 case 4: return { r: n * (1 - t * o), g: n * (1 - t), b: n, a: r };

 case 5: return { r: n, g: n * (1 - t), b: n * (1 - t * o), a: r };

 default: return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r } } } function bw(e) { return AA(VA(e)) } function BA(e) { return LA(OA(e)) } var $A = class fi { constructor(t) { T(this, "format"), T(this, "r"), T(this, "g"), T(this, "b"), T(this, "a"), this.r = t.r ?? 0, this.g = t.g ?? 0, this.b = t.b ?? 0, this.a = t.a ?? 1 } hsv() { return DA(this) } rgb() { return BA(this) } hsl() { return Hu(this.r, this.g, this.b) } toString(t = "p3", n) { switch (t) { case "p3": { let r = n?.r ?? this.r, i = n?.g ?? this.g, o = n?.b ?? this.b, s = n?.a ?? this.a;

 return s === 1 ? `color(display-p3 ${r} ${i} ${o})` : `color(display-p3 ${r} ${i} ${o} / ${s})` } case "srgb": { let r = this.rgb(), i = Math.round(Math.max(0, Math.min(r.r, 1)) * 100) / 100, o = Math.round(Math.max(0, Math.min(r.g, 1)) * 100) / 100, s = Math.round(Math.max(0, Math.min(r.b, 1)) * 100) / 100, a = n?.r ?? i * 255, l = n?.g ?? o * 255, c = n?.b ?? s * 255, u = n?.a ?? r.a ?? 1;

 return u === 1 ? `rgb(${a}, ${l}, ${c})` : `rgba(${a}, ${l}, ${c}, ${u})` } } } static isP3String(t) { return t.startsWith("color(display-p3") } static fromHSV(t, n = "p3") { switch (n) { case "p3": return new fi(yw(t));

 case "srgb": return new fi(bw(yw(t))) } } static fromRGB(t) { return new fi(bw({ r: Math.round(t.r / 255 * 1e4) / 1e4, g: Math.round(t.g / 255 * 1e4) / 1e4, b: Math.round(t.b / 255 * 1e4) / 1e4, a: t.a ?? 1 })) } static fromRGBString(t) { let n = j(t);

 if (n) return fi.fromRGB(n) } static fromString(t) { if (!fi.isP3String(t)) return;

 let n = MA(t);

 if (n) return new fi({ r: n.r, g: n.g, b: n.b, a: n.a }) } static srgbFromValue(t) { if (!re(t) || !j.isP3String(t)) return t;

 let n = fi.fromString(t);

 return n ? n.toString("srgb") : t } };

 var xw = new Map, j = (() => { function e(o, s, a, l) { if (typeof o == "string") { let u = xw.get(o);

 return u || (u = t(o), u === void 0 ? { ...e("black"), isValid: !1 } : (xw.set(o, u), u)) } let c = t(o, s, a, l);

 return c !== void 0 ? c : { ...e("black"), isValid: !1 } } function t(o, s, a, l) { if (o === "") return;

 let c = NA(o, s, a, l);

 if (c) { let u = { r: c.r, g: c.g, b: c.b, a: c.a, h: c.h, s: c.s, l: c.l, initialValue: typeof o == "string" && c.format !== "hsv" ? o : void 0, roundA: Math.round(100 * c.a) / 100, format: c.format, mix: e.mix, toValue: () => e.toRgbString(u) };

 return u } else return } let n = { isRGB(o) { return o === "rgb" || o === "rgba" }, isHSL(o) { return o === "hsl" || o === "hsla" } };

 e.inspect = (o, s) => o.format === "hsl" ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>` : o.format === "hex" || o.format === "name" ? `<${o.constructor.name} "${s}">` : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`, e.isColor = o => typeof o == "string" ? e.isColorString(o) : e.isColorObject(o), e.isColorString = o => typeof o == "string" ? gg(o) !== !1 : !1, e.isColorObject = o => ue(o) && typeof o.r == "number" && typeof o.g == "number" && typeof o.b == "number" && typeof o.h == "number" && typeof o.s == "number" && typeof o.l == "number" && typeof o.a == "number" && typeof o.roundA == "number" && typeof o.format == "string", e.toString = o => e.toRgbString(o), e.toHex = (o, s = !1) => mw(o.r, o.g, o.b, s), e.toHexString = (o, s = !1) => `#${e.toHex(o, s)}`, e.isP3String = o => typeof o != "string" ? !1 : $A.isP3String(o), e.toRgbString = o => o.a === 1 ? "rgb(" + Math.round(o.r) + ", " + Math.round(o.g) + ", " + Math.round(o.b) + ")" : "rgba(" + Math.round(o.r) + ", " + Math.round(o.g) + ", " + Math.round(o.b) + ", " + o.roundA + ")", e.toHusl = o => ({ ...CA(o.r, o.g, o.b), a: o.roundA }), e.toHslString = o => { let s = e.toHsl(o), a = Math.round(s.h), l = Math.round(s.s * 100), c = Math.round(s.l * 100);

 return o.a === 1 ? "hsl(" + a + ", " + l + "%, " + c + "%)" : "hsla(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")" }, e.toHsv = o => { let s = gw(o.r, o.g, o.b);

 return { h: s.h * 360, s: s.s, v: s.v, a: o.a } }, e.toHsvString = o => { let s = gw(o.r, o.g, o.b), a = Math.round(s.h * 360), l = Math.round(s.s * 100), c = Math.round(s.v * 100);

 return o.a === 1 ? "hsv(" + a + ", " + l + "%, " + c + "%)" : "hsva(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")" }, e.toName = o => { if (o.a === 0) return "transparent";

 if (o.a < 1) return !1;

 let s = mw(o.r, o.g, o.b, !0);

 for (let a of Object.keys(Dm)) if (Dm[a] === s) return a;

 return !1 }, e.toHsl = o => ({ h: Math.round(o.h), s: o.s, l: o.l, a: o.a }), e.toRgb = o => ({ r: Math.round(o.r), g: Math.round(o.g), b: Math.round(o.b), a: o.a }), e.brighten = (o, s = 10) => { let a = e.toRgb(o);

 return a.r = Math.max(0, Math.min(255, a.r - Math.round(255 * -(s / 100)))), a.g = Math.max(0, Math.min(255, a.g - Math.round(255 * -(s / 100)))), a.b = Math.max(0, Math.min(255, a.b - Math.round(255 * -(s / 100)))), e(a) }, e.lighten = (o, s = 10) => { let a = e.toHsl(o);

 return a.l += s / 100, a.l = Math.min(1, Math.max(0, a.l)), e(a) }, e.darken = (o, s = 10) => { let a = e.toHsl(o);

 return a.l -= s / 100, a.l = Math.min(1, Math.max(0, a.l)), e(a) }, e.saturate = (o, s = 10) => { let a = e.toHsl(o);

 return a.s += s / 100, a.s = Math.min(1, Math.max(0, a.s)), e(a) }, e.desaturate = (o, s = 10) => { let a = e.toHsl(o);

 return a.s -= s / 100, a.s = Math.min(1, Math.max(0, a.s)), e(a) }, e.grayscale = o => e.desaturate(o, 100), e.hueRotate = (o, s) => { let a = e.toHsl(o);

 return a.h += s, a.h = a.h > 360 ? a.h - 360 : a.h, e(a) }, e.alpha = (o, s = 1) => e({ r: o.r, g: o.g, b: o.b, a: s }), e.transparent = o => e.alpha(o, 0), e.multiplyAlpha = (o, s = 1) => e({ r: o.r, g: o.g, b: o.b, a: o.a * s }), e.interpolate = (o, s, a = "rgb") => { if (!e.isColorObject(o) || !e.isColorObject(s)) throw new TypeError("Both arguments for Color.interpolate must be Color objects");

 return l => e.mixAsColor(o, s, l, !1, a) }, e.mix = (o, s, { model: a = "rgb" } = {}) => { let l = typeof o == "string" ? e(o) : o, c = e.interpolate(l, s, a);

 return u => e.toRgbString(c(u)) }, e.mixAsColor = (o, s, a = .5, l = !1, c = "rgb") => { let u = null;

 if (n.isRGB(c)) u = e({ r: li(a, [0, 1], [o.r, s.r], l), g: li(a, [0, 1], [o.g, s.g], l), b: li(a, [0, 1], [o.b, s.b], l), a: li(a, [0, 1], [o.a, s.a], l) });

 else { let f, d;

 n.isHSL(c) ? (f = e.toHsl(o), d = e.toHsl(s)) : (f = e.toHusl(o), d = e.toHusl(s)), f.s === 0 ? f.h = d.h : d.s === 0 && (d.h = f.h);

 let h = f.h, p = d.h, v = p - h;

 v > 180 ? v = p - 360 - h : v < -180 && (v = p + 360 - h);

 let b = { h: li(a, [0, 1], [h, h + v], l), s: li(a, [0, 1], [f.s, d.s], l), l: li(a, [0, 1], [f.l, d.l], l), a: li(a, [0, 1], [o.a, s.a], l) };

 n.isHSL(c) ? u = e(b) : u = e(RA(b.h, b.s, b.l, b.a)) } return u }, e.random = (o = 1) => { function s() { return Math.floor(Math.random() * 255) } return e("rgba(" + s() + ", " + s() + ", " + s() + ", " + o + ")") }, e.grey = (o = .5, s = 1) => (o = Math.floor(o * 255), e("rgba(" + o + ", " + o + ", " + o + ", " + s + ")")), e.gray = e.grey, e.rgbToHsl = (o, s, a) => Hu(o, s, a), e.isValidColorProperty = (o, s) => !!((o.toLowerCase().slice(-5) === "color" || o === "fill" || o === "stroke") && typeof s == "string" && e.isColorString(s)), e.difference = (o, s) => { let a = (o.r + s.r) / 2, l = o.r - s.r, c = o.g - s.g, u = o.b - s.b, f = Math.pow(l, 2), d = Math.pow(c, 2), h = Math.pow(u, 2);

 return Math.sqrt(2 * f + 4 * d + 3 * h + a * (f - h) / 256) }, e.equal = (o, s, a = .1) => !(Math.abs(o.r - s.r) >= a || Math.abs(o.g - s.g) >= a || Math.abs(o.b - s.b) >= a || Math.abs(o.a - s.a) * 256 >= a);

 let r = go([0, 255], [0, 1]);

 function i(o) { o = r(o);

 let s = Math.abs(o);

 return s < .04045 ? o / 12.92 : (Math.sign(o) || 1) * Math.pow((s + .055) / 1.055, 2.4) } return e.luminance = o => { let { r: s, g: a, b: l } = e.toRgb(o);

 return .2126 * i(s) + .7152 * i(a) + .0722 * i(l) }, e.contrast = (o, s) => { let a = e.luminance(o), l = e.luminance(s);

 return (Math.max(a, l) + .05) / (Math.min(a, l) + .05) }, e })();

 function NA(e, t, n, r = 1) { let i;

 return typeof e == "number" && !Number.isNaN(e) && typeof t == "number" && !Number.isNaN(t) && typeof n == "number" && !Number.isNaN(n) ? i = Bm({ r: e, g: t, b: n, a: r }) : typeof e == "string" ? i = jA(e) : typeof e == "object" && (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b") ? i = Bm(e) : i = NC(e)), i } function jA(e) { let t = gg(e);

 if (t) return t.format === "hsl" ? NC(t) : t.format === "hsv" ? HA(t) : Bm(t) } function HA(e) { let t = FA(e.h, e.s, e.v);

 return { ...Hu(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? jC(e.a) : 1 } } function Bm(e) { let t = TA(e.r, e.g, e.b);

 return { ...Hu(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? jC(e.a) : 1 } } function NC(e) { let t, n, r, i = { r: 0, g: 0, b: 0 }, o = { h: 0, s: 0, l: 0 };

 return t = rs(e.h) ? e.h : 0, t = (t + 360) % 360, n = rs(e.s) ? e.s : 1, typeof e.s == "string" && (n = zm(e.s)), r = rs(e.l) ? e.l : .5, typeof e.l == "string" && (r = zm(e.l)), i = EA(t, n, r), o = { h: t, s: n, l: r }, { ...i, ...o, a: e.a === void 0 ? 1 : e.a, format: "hsl" } } function jC(e) { return e = parseFloat(e), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e } var Sw = e => e instanceof Tl;

 var WA = XL().EventEmitter, UA = class { constructor() { T(this, "_emitter", new WA) } eventNames() { return this._emitter.eventNames() } eventListeners() { let e = {};

 for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);

 return e } on(e, t) { this.addEventListener(e, t, !1, !1, this) } off(e, t) { this.removeEventListeners(e, t) } once(e, t) { this.addEventListener(e, t, !0, !1, this) } unique(e, t) { this.addEventListener(e, t, !1, !0, this) } addEventListener(e, t, n, r, i) { if (r) { for (let o of this._emitter.eventNames()) if (t === this._emitter.listeners(o)) return } n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i) } removeEventListeners(e, t) { e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners() } removeAllEventListeners() { this._emitter.removeAllListeners() } countEventListeners(e) { if (e) return this._emitter.listeners(e).length;

 { let t = 0;

 for (let n of this._emitter.eventNames()) t += this._emitter.listeners(n).length;

 return t } } emit(e, ...t) { this._emitter.emit(e, ...t) } }, GA = e => { setTimeout(e, 1 / 60) }, qA = be.requestAnimationFrame || GA, ww = e => qA(e), Pa = 1 / 60, XA = class extends UA { constructor(e = !1) { super(), T(this, "_started", !1), T(this, "_frame", 0), T(this, "_frameTasks", []), T(this, "tick", () => { this._started && (ww(this.tick), this.emit("update", this._frame, Pa), this.emit("render", this._frame, Pa), this._processFrameTasks(), this._frame++) }), e && this.start() } addFrameTask(e) { this._frameTasks.push(e) } _processFrameTasks() { var e;

 let t = this._frameTasks, n = t.length;

 if (n !== 0) { for (let r = 0;

 r < n;

 r++)(e = t[r]) == null || e.call(t);

 t.length = 0 } } static set TimeStep(e) { Pa = e } static get TimeStep() { return Pa } start() { return this._started ? this : (this._frame = 0, this._started = !0, ww(this.tick), this) } stop() { return this._started = !1, this } get frame() { return this._frame } get time() { return this._frame * Pa } }, HC = new XA, $m = { target: "PREVIEW", zoom: 1 };

 var se = { canvas: "CANVAS", export: "EXPORT", thumbnail: "THUMBNAIL", preview: "PREVIEW", current: () => $m.target, hasRestrictions: () => { let e = $m.target;

 return e === "CANVAS" || e === "EXPORT" } };

 var lu = e => ({ correct: (t, { delta: n, treeScale: r }) => { if (typeof t == "string" && (t = parseFloat(t)), t === 0) return "0px";

 let i = t;

 return n && r && (i = Math.round(t / n[e].scale / r[e]), i = Math.max(i, 1)), i + "px" } });

 wd({ borderTopWidth: lu("y"), borderLeftWidth: lu("x"), borderRightWidth: lu("x"), borderBottomWidth: lu("y") });

 function A(e, ...t) {
    var n, r;

 if (e) return;

 let i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));

 if (i.stack) try {
        let o = i.stack.split(`
`);

 (n = o[1]) != null && n.includes("assert") ? (o.splice(1, 1), i.stack = o.join(`
`)) : (r = o[0]) != null && r.includes("assert") && (o.splice(0, 1), i.stack = o.join(`
`))
    } catch { } throw i
} function Ce(e, t) { throw t || new Error(e ? `Unexpected value: ${e}` : "Application entered invalid state") } var is = S.createContext({ getLayoutId: e => null, persistLayoutIdCache: () => { }, top: !1, enabled: !0 });

 function YA({ children: e }) { if (L(is).top) return k(rt, { children: e });

 let n = _({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {}, count: { byId: {}, byName: {} } }), r = _({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }), i = _(new Set).current, o = $(({ id: l, name: c, duplicatedFrom: u }) => { if (!l) return null;

 let f = c ? "byName" : "byId", d = n.current[f][l];

 if (d) return d;

 let h = c || l;

 if (!u && !i.has(h) && (!n.current.byLayoutId[h] || n.current.byLayoutId[h] === h)) return n.current.count[f][h] === void 0 && (n.current.count[f][h] = 0, n.current.byLayoutId[h] = h, r.current[f][l] = h), i.add(h), h;

 let p;

 if (u?.length) for (let w = u.length - 1;

 w >= 0;

 w--) { let R = u[w];

 A(!!R, "duplicatedId must be defined");

 let E = n.current[f][R], I = n.current.byLastId[R];

 if (I && !p) { let H = n.current.byLayoutId[I], O = !H || H === c;

 I && !i.has(I) && (!c || O) && (p = [I, R]) } let P = E ? n.current.byLayoutId[E] : void 0, z = !P || P === c;

 if (E && !i.has(E) && (!c || z)) return r.current[f][l] = E, r.current.byLastId[R] = E, i.add(E), E } let v = n.current.byLastId[l];

 if (v && !i.has(v)) return i.add(v), r.current.byId[l] = v, v;

 if (p) { let [w, R] = p;

 return r.current[f][l] = w, r.current.byLastId[R] = w, i.add(w), w } let b = n.current.byPossibleId[l];

 if (b && !i.has(b)) return i.add(b), r.current.byId[l] = b, b;

 let g = u?.[0], m = c || g || l, y = (n.current.count[f][m] ?? -1) + 1, { layoutId: x, value: C } = KA(m, y, i);

 if (n.current.count[f][m] = C, r.current[f][l] = x, u?.length && !c) { let w = u[u.length - 1];

 if (w && (r.current.byLastId[w] = x), u.length > 1) for (let R = 0;

 R < u.length - 1;

 R++) { let E = u[R];

 E !== void 0 && (r.current.byPossibleId[E] || (r.current.byPossibleId[E] = x)) } } return r.current.byLayoutId[x] = h, i.add(x), x }, []), s = $(() => { n.current = { byId: { ...n.current.byId, ...r.current.byId }, byLastId: { ...n.current.byLastId, ...r.current.byLastId }, byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId }, byName: { ...n.current.byName, ...r.current.byName }, byLastName: { ...n.current.byLastName, ...r.current.byLastName }, byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId }, count: { ...n.current.count, byName: {} } }, r.current = { byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }, i.clear() }, []), a = _({ getLayoutId: o, persistLayoutIdCache: s, top: !0, enabled: !0 }).current;

 return k(is.Provider, { value: a, children: e }) } function KA(e, t, n) { let r = t, i = r ? `${e}-${r}` : e;

 for (;

 n.has(i);

)r++, i = `${e}-${r}`;

 return { layoutId: i, value: r } } function QA({ enabled: e = !0, ...t }) { let n = L(is), r = q(() => ({ ...n, enabled: e }), [e]);

 return k(is.Provider, { ...t, value: r }) } function ct(e) { let t = _(null);

 return t.current === null && (t.current = e()), t.current } var ZA = { background: void 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", lineHeight: "1.4em", textOverflow: "ellipsis", overflow: "hidden", minHeight: 0, width: "100%", height: "100%" }, JA = { ...ZA, border: "1px solid rgba(149, 149, 149, 0.15)", borderRadius: 6, fontSize: "12px", backgroundColor: "rgba(149, 149, 149, 0.1)", color: "#a5a5a5" }, WC = { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: "100%", flexShrink: 0, padding: "0 10px" }, eD = { ...WC, fontWeight: 500 }, tD = { ...WC, whiteSpace: "pre", maxHeight: "calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))", WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" };

 function LW(e) { let { error: t, file: n } = e, r = n ? `Error in ${nD(n)}` : "Error", i = t instanceof Error ? t.message : "" + t;

 return de("div", { style: JA, children: [k("div", { className: "text", style: eD, children: r }), i && k("div", { className: "text", style: tD, children: i })] }) } function nD(e) { return e.startsWith("./") ? e.replace("./", "") : e } function ee(e) { return Number.isFinite(e) } function rD(e) { return !e || !Object.keys(e).length && e.constructor === Object } function Da(e) { return typeof e != "string" && typeof e != "number" } function za(e) { return e !== null && typeof e < "u" && typeof e != "boolean" && !rD(e) } function iD(e) { return e * (Math.PI / 180) } var Cn = (() => { function e(t, n) { return { a: t, b: n } } return e.offset = (t, n) => { let r = fn.angleFromX(t.a, t.b), i = iD(r), o = n * Math.sin(i), s = n * Math.cos(i);

 return e({ x: t.a.x + o, y: t.a.y - s }, { x: t.b.x + o, y: t.b.y - s }) }, e.intersection = (t, n, r) => { let i = t.a.x, o = t.a.y, s = t.b.x, a = t.b.y, l = n.a.x, c = n.a.y, u = n.b.x, f = n.b.y, d = (u - l) * (c - o) - (f - c) * (l - i), h = (u - l) * (a - o) - (f - c) * (s - i), p = (s - i) * (c - o) - (a - o) * (l - i);

 if (d === 0 && h === 0 || h === 0) return null;

 let v = d / h, b = p / h;

 return r && (v < 0 || v > 1 || b < 0 || b > 1) ? null : { x: i + v * (s - i), y: o + v * (a - o) } }, e.intersectionAngle = (t, n) => { let r = t.b.x - t.a.x, i = t.b.y - t.a.y, o = n.b.x - n.a.x, s = n.b.y - n.a.y;

 return Math.atan2(r * s - i * o, r * o + i * s) * (180 / Math.PI) }, e.isOrthogonal = t => t.a.x === t.b.x || t.a.y === t.b.y, e.perpendicular = (t, n) => { let r = t.a.x - t.b.x, i = t.a.y - t.b.y, o = fn(n.x - i, n.y + r);

 return e(o, n) }, e.projectPoint = (t, n) => { let r = e.perpendicular(t, n);

 return e.intersection(t, r) }, e.pointAtPercentDistance = (t, n) => { let r = e.distance(t), i = n * r / r;

 return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y } }, e.distance = t => fn.distance(t.a, t.b), e })(), ne = { equals: function (e, t) { return e === t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height }, atOrigin: e => ({ ...e, x: 0, y: 0 }), fromTwoPoints: (e, t) => ({ x: Math.min(e.x, t.x), y: Math.min(e.y, t.y), width: Math.abs(e.x - t.x), height: Math.abs(e.y - t.y) }), fromRect: e => ({ x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }), multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }), divide: (e, t) => ne.multiply(e, 1 / t), offset: (e, t) => { let n = typeof t.x == "number" ? t.x : 0, r = typeof t.y == "number" ? t.y : 0;

 return { ...e, x: e.x + n, y: e.y + r } }, inflate: (e, t) => { if (t === 0) return e;

 let n = 2 * t;

 return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n } }, pixelAligned: e => { let t = Math.round(e.x), n = Math.round(e.y), r = Math.round(e.x + e.width), i = Math.round(e.y + e.height), o = Math.max(r - t, 0), s = Math.max(i - n, 0);

 return { x: t, y: n, width: o, height: s } }, halfPixelAligned: e => { let t = Math.round(e.x * 2) / 2, n = Math.round(e.y * 2) / 2, r = Math.round((e.x + e.width) * 2) / 2, i = Math.round((e.y + e.height) * 2) / 2, o = Math.max(r - t, 1), s = Math.max(i - n, 1);

 return { x: t, y: n, width: o, height: s } }, round: (e, t = 0) => { let n = au(e.x, t), r = au(e.y, t), i = au(e.width, t), o = au(e.height, t);

 return { x: n, y: r, width: i, height: o } }, roundToOutside: e => { let t = Math.floor(e.x), n = Math.floor(e.y), r = Math.ceil(e.x + e.width), i = Math.ceil(e.y + e.height), o = Math.max(r - t, 0), s = Math.max(i - n, 0);

 return { x: t, y: n, width: o, height: s } }, minX: e => e.x, maxX: e => e.x + e.width, minY: e => e.y, maxY: e => e.y + e.height, positions: e => ({ minX: e.x, midX: e.x + e.width / 2, maxX: ne.maxX(e), minY: e.y, midY: e.y + e.height / 2, maxY: ne.maxY(e) }), center: e => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }), boundingRectFromPoints: e => { let t = 1 / 0, n = -1 / 0, r = 1 / 0, i = -1 / 0;

 for (let o = 0;

 o < e.length;

 o++) { let s = e[o];

 t = Math.min(t, s.x), n = Math.max(n, s.x), r = Math.min(r, s.y), i = Math.max(i, s.y) } return { x: t, y: r, width: n - t, height: i - r } }, fromPoints: e => { let [t, n, r, i] = e, { x: o, y: s } = t, a = fn.distance(t, n), l = fn.distance(t, i);

 return { x: o, y: s, width: a, height: l } }, merge: (...e) => { let t = { x: Math.min(...e.map(ne.minX)), y: Math.min(...e.map(ne.minY)) }, n = { x: Math.max(...e.map(ne.maxX)), y: Math.max(...e.map(ne.maxY)) };

 return ne.fromTwoPoints(t, n) }, intersection: (e, t) => { let n = Math.max(e.x, t.x), r = Math.min(e.x + e.width, t.x + t.width), i = Math.max(e.y, t.y), o = Math.min(e.y + e.height, t.y + t.height);

 return { x: n, y: i, width: r - n, height: o - i } }, points: e => [{ x: ne.minX(e), y: ne.minY(e) }, { x: ne.minX(e), y: ne.maxY(e) }, { x: ne.maxX(e), y: ne.minY(e) }, { x: ne.maxX(e), y: ne.maxY(e) }], pointsAtOrigin: e => [{ x: 0, y: 0 }, { x: e.width, y: 0 }, { x: e.width, y: e.height }, { x: 0, y: e.height }], transform: (e, t) => { let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }), { x: i, y: o } = t.transformPoint({ x: e.x + e.width, y: e.y }), { x: s, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }), { x: l, y: c } = t.transformPoint({ x: e.x, y: e.y + e.height }), u = Math.min(n, i, s, l), f = Math.max(n, i, s, l) - u, d = Math.min(r, o, a, c), h = Math.max(r, o, a, c) - d;

 return { x: u, y: d, width: f, height: h } }, containsPoint: (e, t) => !(t.x < ne.minX(e) || t.x > ne.maxX(e) || t.y < ne.minY(e) || t.y > ne.maxY(e) || Number.isNaN(e.x) || Number.isNaN(e.y)), containsRect: (e, t) => { for (let n of ne.points(t)) if (!ne.containsPoint(e, n)) return !1;

 return !0 }, toCSS: e => ({ display: "block", transform: `translate(${e.x}px, ${e.y}px)`, width: `${e.width}px`, height: `${e.height}px` }), inset: (e, t) => ({ x: e.x + t, y: e.y + t, width: Math.max(0, e.width - 2 * t), height: Math.max(0, e.height - 2 * t) }), intersects: (e, t) => !(t.x >= ne.maxX(e) || ne.maxX(t) <= e.x || t.y >= ne.maxY(e) || ne.maxY(t) <= e.y), overlapHorizontally: (e, t) => { let n = ne.maxX(e), r = ne.maxX(t);

 return n > t.x && r > e.x }, overlapVertically: (e, t) => { let n = ne.maxY(e), r = ne.maxY(t);

 return n > t.y && r > e.y }, doesNotIntersect: (e, t) => t.find(n => ne.intersects(n, e)) === void 0, isEqual: (e, t) => ne.equals(e, t), cornerPoints: e => { let t = e.x, n = e.x + e.width, r = e.y, i = e.y + e.height;

 return [{ x: t, y: r }, { x: n, y: r }, { x: n, y: i }, { x: t, y: i }] }, midPoints: e => { let t = e.x, n = e.x + e.width / 2, r = e.x + e.width, i = e.y, o = e.y + e.height / 2, s = e.y + e.height;

 return [{ x: n, y: i }, { x: r, y: o }, { x: n, y: s }, { x: t, y: o }] }, pointDistance: (e, t) => { let n = 0, r = 0;

 return t.x < e.x ? n = e.x - t.x : t.x > ne.maxX(e) && (n = t.x - ne.maxX(e)), t.y < e.y ? r = e.y - t.y : t.y > ne.maxY(e) && (r = t.y - ne.maxY(e)), fn.distance({ x: n, y: r }, { x: 0, y: 0 }) }, fromAny: (e, t = { x: 0, y: 0, width: 0, height: 0 }) => ({ x: e.x || t.x, y: e.y || t.y, width: e.width || t.width, height: e.height || t.height }), delta: (e, t) => { let n = { x: ne.minX(e), y: ne.minY(e) }, r = { x: ne.minX(t), y: ne.minY(t) };

 return { x: n.x - r.x, y: n.y - r.y } }, withMinSize: (e, t) => { let { width: n, height: r } = t, i = e.width - n, o = e.height - r;

 return { width: Math.max(e.width, n), height: Math.max(e.height, r), x: e.width < n ? e.x + i / 2 : e.x, y: e.height < r ? e.y + o / 2 : e.y } }, anyPointsOutsideRect: (e, t) => { let n = ne.minX(e), r = ne.minY(e), i = ne.maxX(e), o = ne.maxY(e);

 for (let s of t) if (s.x < n || s.x > i || s.y < r || s.y > o) return !0;

 return !1 }, edges: e => { let [t, n, r, i] = ne.cornerPoints(e);

 return [Cn(t, n), Cn(n, r), Cn(r, i), Cn(i, t)] }, rebaseRectOnto: (e, t, n, r) => { let i = { ...e };

 switch (n) { case "bottom": case "top": switch (r) { case "start": i.x = t.x;

 break;

 case "center": i.x = t.x + t.width / 2 - e.width / 2;

 break;

 case "end": i.x = t.x + t.width - e.width;

 break;

 default: Ce(r) }break;

 case "left": i.x = t.x - e.width;

 break;

 case "right": i.x = t.x + t.width;

 break;

 default: Ce(n) }switch (n) { case "left": case "right": switch (r) { case "start": i.y = t.y;

 break;

 case "center": i.y = t.y + t.height / 2 - e.height / 2;

 break;

 case "end": i.y = t.y + t.height - e.height;

 break;

 default: Ce(r) }break;

 case "top": i.y = t.y - e.height;

 break;

 case "bottom": i.y = t.y + t.height;

 break;

 default: Ce(n) }return i } };

 var UC = { quickfix: e => ((e.widthType === 2 || e.heightType === 2) && (e.aspectRatio = null), ee(e.aspectRatio) && (e.left && e.right && (e.widthType = 0), e.top && e.bottom && (e.heightType = 0), e.left && e.right && e.top && e.bottom && (e.bottom = !1), e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)), e.left && e.right && ((e.fixedSize || e.widthType === 2 || ee(e.maxWidth)) && (e.right = !1), e.widthType = 0), e.top && e.bottom && ((e.fixedSize || e.heightType === 2 || ee(e.maxHeight)) && (e.bottom = !1), e.heightType = 0), e) };

 function Ru(e) { if (typeof e == "string") { let t = e.trim();

 if (t === "auto") return 2;

 if (t.endsWith("fr")) return 3;

 if (t.endsWith("%")) return 1;

 if (t.endsWith("vw") || t.endsWith("vh")) return 4 } return 0 } var GC = { fromProperties: e => { let { left: t, right: n, top: r, bottom: i, width: o, height: s, centerX: a, centerY: l, aspectRatio: c, autoSize: u } = e, f = UC.quickfix({ left: ee(t) || jn(t), right: ee(n) || jn(n), top: ee(r) || jn(r), bottom: ee(i) || jn(i), widthType: Ru(o), heightType: Ru(s), aspectRatio: c || null, fixedSize: u === !0 }), d = null, h = null, p = 0, v = 0;

 if (f.widthType !== 0 && typeof o == "string") { let m = parseFloat(o);

 o.endsWith("fr") ? (p = 3, d = m) : o === "auto" ? p = 2 : (p = 1, d = m / 100) } else o !== void 0 && typeof o != "string" && (d = at.getNumber(o));

 if (f.heightType !== 0 && typeof s == "string") { let m = parseFloat(s);

 s.endsWith("fr") ? (v = 3, h = m) : s === "auto" ? v = 2 : (v = 1, h = parseFloat(s) / 100) } else s !== void 0 && typeof s != "string" && (h = at.getNumber(s));

 let b = .5, g = .5;

 return a && (b = parseFloat(a) / 100), l && (g = parseFloat(l) / 100), { left: f.left ? at.getNumber(t) : null, right: f.right ? at.getNumber(n) : null, top: f.top ? at.getNumber(r) : null, bottom: f.bottom ? at.getNumber(i) : null, widthType: p, heightType: v, width: d, height: h, aspectRatio: f.aspectRatio || null, centerAnchorX: b, centerAnchorY: g } }, toSize: (e, t, n, r) => { let i = null, o = null, s = t?.sizing ? at.getNumber(t?.sizing.width) : null, a = t?.sizing ? at.getNumber(t?.sizing.height) : null, l = kw(e.left, e.right);

 if (s && ee(l)) i = s - l;

 else if (n && e.widthType === 2) i = n.width;

 else if (ee(e.width)) switch (e.widthType) { case 0: i = e.width;

 break;

 case 3: i = r ? r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width * e.width : null;

 break;

 case 1: case 4: s && (i = s * e.width);

 break;

 case 2: break;

 default: Ce(e.widthType) }let c = kw(e.top, e.bottom);

 if (a && ee(c)) o = a - c;

 else if (n && e.heightType === 2) o = n.height;

 else if (ee(e.height)) switch (e.heightType) { case 0: o = e.height;

 break;

 case 3: o = r ? r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height * e.height : null;

 break;

 case 1: case 4: a && (o = a * e.height);

 break;

 case 2: break;

 default: Ce(e.heightType) }return uD(i, o, e, { height: a ?? 0, width: s ?? 0 }, t?.viewport) }, toRect: (e, t = null, n = null, r = !1, i = null) => { let o = e.left || 0, s = e.top || 0, { width: a, height: l } = GC.toSize(e, t, n, i), c = t?.positioning ?? null, u = c ? at.getNumber(c.width) : null, f = c ? at.getNumber(c.height) : null;

 e.left !== null ? o = e.left : u && e.right !== null ? o = u - e.right - a : u && (o = e.centerAnchorX * u - a / 2), e.top !== null ? s = e.top : f && e.bottom !== null ? s = f - e.bottom - l : f && (s = e.centerAnchorY * f - l / 2);

 let d = { x: o, y: s, width: a, height: l };

 return r ? ne.pixelAligned(d) : d } }, oD = 200, sD = 200;

 function Tu(e, t, n, r) { if (typeof t == "string") { if (t.endsWith("%") && n) switch (e) { case "maxWidth": case "minWidth": return parseFloat(t) / 100 * n.width;

 case "maxHeight": case "minHeight": return parseFloat(t) / 100 * n.height;

 default: break }if (t.endsWith("vh")) { if (!r) return aD(e);

 switch (e) { case "maxWidth": case "minWidth": return parseFloat(t) / 100 * r.width;

 case "maxHeight": case "minHeight": return parseFloat(t) / 100 * r.height;

 default: break } } return parseFloat(t) } return t } function aD(e) { switch (e) { case "minWidth": case "minHeight": return Number.NEGATIVE_INFINITY;

 case "maxWidth": case "maxHeight": return Number.POSITIVE_INFINITY;

 default: Ce(e, "unknown constraint key") } } function lD(e, t, n, r) { return t.minHeight && (e = Math.max(Tu("minHeight", t.minHeight, n, r), e)), t.maxHeight && (e = Math.min(Tu("maxHeight", t.maxHeight, n, r), e)), e } function cD(e, t, n, r) { return t.minWidth && (e = Math.max(Tu("minWidth", t.minWidth, n, r), e)), t.maxWidth && (e = Math.min(Tu("maxWidth", t.maxWidth, n, r), e)), e } function uD(e, t, n, r, i) { let o = cD(ee(e) ? e : oD, n, r, i), s = lD(ee(t) ? t : sD, n, r, i);

 return ee(n.aspectRatio) && n.aspectRatio > 0 && (ee(n.left) && ee(n.right) ? s = o / n.aspectRatio : ee(n.top) && ee(n.bottom) ? o = s * n.aspectRatio : n.widthType !== 0 ? s = o / n.aspectRatio : o = s * n.aspectRatio), { width: o, height: s } } function kw(e, t) { return !ee(e) || !ee(t) ? null : e + t } function fD(e) { return typeof e.right == "string" || typeof e.bottom == "string" || typeof e.left == "string" && (!e.center || e.center === "y") || typeof e.top == "string" && (!e.center || e.center === "x") } function ls(e) { return !e._constraints || fD(e) ? !1 : e._constraints.enabled } function dD(e) { let { size: t } = e, { width: n, height: r } = e;

 return ee(t) && (n === void 0 && (n = t), r === void 0 && (r = t)), ee(n) && ee(r) ? { width: n, height: r } : null } function hD(e) { let t = dD(e);

 if (t === null) return null;

 let { left: n, top: r } = e;

 return ee(n) && ee(r) ? { x: n, y: r, ...t } : null } function Ha(e, t, n = !0) { if (e.positionFixed || e.positionAbsolute) return null;

 let r = t === 1 || t === 2;

 if (!ls(e) || r) return hD(e);

 let i = pD(e), o = mD(t), s = o ? { sizing: o, positioning: o, viewport: null } : null;

 return GC.toRect(i, s, null, n, null) } function pD(e) { let { left: t, right: n, top: r, bottom: i, center: o, _constraints: s, size: a } = e, { width: l, height: c } = e;

 l === void 0 && (l = a), c === void 0 && (c = a);

 let { aspectRatio: u, autoSize: f } = s, d = UC.quickfix({ left: ee(t), right: ee(n), top: ee(r), bottom: ee(i), widthType: Ru(l), heightType: Ru(c), aspectRatio: u || null, fixedSize: f === !0 }), h = null, p = null, v = 0, b = 0;

 if (d.widthType !== 0 && typeof l == "string") { let y = parseFloat(l);

 l.endsWith("fr") ? (v = 3, h = y) : l === "auto" ? v = 2 : (v = 1, h = y / 100) } else l !== void 0 && typeof l != "string" && (h = l);

 if (d.heightType !== 0 && typeof c == "string") { let y = parseFloat(c);

 c.endsWith("fr") ? (b = 3, p = y) : c === "auto" ? b = 2 : (b = 1, p = parseFloat(c) / 100) } else c !== void 0 && typeof c != "string" && (p = c);

 let g = .5, m = .5;

 return (o === !0 || o === "x") && (d.left = !1, typeof t == "string" && (g = parseFloat(t) / 100)), (o === !0 || o === "y") && (d.top = !1, typeof r == "string" && (m = parseFloat(r) / 100)), { left: d.left ? t : null, right: d.right ? n : null, top: d.top ? r : null, bottom: d.bottom ? i : null, widthType: v, heightType: b, width: h, height: p, aspectRatio: d.aspectRatio || null, centerAnchorX: g, centerAnchorY: m, minHeight: e.minHeight, maxHeight: e.maxHeight, minWidth: e.minWidth, maxWidth: e.maxWidth } } var qC = S.createContext({ parentSize: 0 });

 function mD(e) { return e === 0 || e === 1 || e === 2 ? null : e } function Ya() { return S.useContext(qC).parentSize } function XC(e) { return typeof e == "object" } var gD = e => { let t = Ya(), { parentSize: n, children: r } = e, i = S.useMemo(() => ({ parentSize: n }), [vD(n), yD(n)]);

 return t === 1 ? r ? k(rt, { children: r }) : null : k(qC.Provider, { value: i, children: r }) };

 function vD(e) { return XC(e) ? e.width : e } function yD(e) { return XC(e) ? e.height : e } function YC(e, t) { return k(gD, { parentSize: t, children: e }) } function bD(e) { let t = Ya();

 return Ha(e, t, !0) } function KC({ width: e, height: t }) { return e === "auto" || e === "min-content" || t === "auto" || t === "min-content" } var xD = (e => (e.Boolean = "boolean", e.Number = "number", e.String = "string", e.RichText = "richtext", e.FusedNumber = "fusednumber", e.Enum = "enum", e.SegmentedEnum = "segmentedenum", e.Color = "color", e.Image = "image", e.ResponsiveImage = "responsiveimage", e.File = "file", e.ComponentInstance = "componentinstance", e.Slot = "slot", e.Array = "array", e.EventHandler = "eventhandler", e.Transition = "transition", e.BoxShadow = "boxshadow", e.Link = "link", e.Date = "date", e.Object = "object", e.Font = "font", e.PageScope = "pagescope", e.ScrollSectionRef = "scrollsectionref", e.CustomCursor = "customcursor", e.Border = "border", e.Cursor = "cursor", e.Padding = "padding", e.BorderRadius = "borderradius", e.Gap = "gap", e.CollectionReference = "collectionreference", e.MultiCollectionReference = "multicollectionreference", e.TrackingId = "trackingid", e.VectorSetItem = "vectorsetitem", e))(xD || {}), am;

 function SD() { if (am !== void 0) return am;

 let e = document.createElement("div");

 Object.assign(e.style, { position: "absolute", display: "flex", flexDirection: "column", rowGap: "1px" }), e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e);

 let t = e.scrollHeight === 1;

 return e.parentNode && e.parentNode.removeChild(e), am = t, t } var Xi = "flexbox-gap-not-supported", Cw = !1;

 function BW() { Cw || (Cw = !0, !SD() && document.body.classList.add(Xi)) } var wD = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);


    font-style: var(--framer-font-style, normal);


    font-weight: var(--framer-font-weight, 400);


    color: var(--framer-text-color, #000);


    font-size: var(--framer-font-size, 16px);


    letter-spacing: var(--framer-letter-spacing, 0);


    text-transform: var(--framer-text-transform, none);


    text-decoration: var(--framer-text-decoration, none);


    line-height: var(--framer-line-height, 1.2em);


    text-align: var(--framer-text-alignment, start);


}
`, kD = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);


}
`, CD = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;


    background-clip: text;


    -webkit-background-clip: text;


    -webkit-text-fill-color: transparent;


}
`, RD = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));


    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));


    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));


    color: var(--framer-link-text-color, var(--framer-text-color, #000));


    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));


    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));


    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));


}
`, TD = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));


    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));


    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));


    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));


    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));


    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));


    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));


}
`, ED = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));


    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));


    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));


    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));


    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));


    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));


    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));


}
`, FD = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));


    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));


    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));


    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));


    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));


    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));


    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));


}
`, PD = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;


}
`, ID = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;


}
`, _D = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;


    max-width: 100%;


    height: auto;


}
`, MD = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;


    padding: 0;


}
`, OD = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;


    --framer-font-style: normal;


    --framer-font-weight: 500;


    --framer-text-color: #000;


    --framer-font-size: 16px;


    --framer-letter-spacing: 0;


    --framer-text-transform: none;


    --framer-text-decoration: none;


    --framer-line-height: 1.2em;


    --framer-text-alignment: start;


    --framer-font-open-type-features: normal;


    --font-variation-settings: normal;


}
`, LD = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;


    width: 100%;


    padding-left: 0;


    margin: 0;


}
`, VD = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;


    counter-increment: list-item;


    list-style: none;


}
`, AD = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;


    width: 2.25ch;


    box-sizing: border-box;


    padding-right: 0.75ch;


    content: counter(list-item) ".";


    white-space: nowrap;


}
`, DD = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;


    width: 2.25ch;


    box-sizing: border-box;


    padding-right: 0.75ch;


    content: "\u2022";


}
`, zD = ['[data-framer-component-type="DeprecatedRichText"] { cursor: inherit;}', OD, MD, wD, kD, CD, RD, TD, ED, FD, PD, ID, _D, LD, VD, AD, DD], QC = (e => (e.Padding = "--framer-input-padding", e.BorderRadiusTopLeft = "--framer-input-border-radius-top-left", e.BorderRadiusTopRight = "--framer-input-border-radius-top-right", e.BorderRadiusBottomRight = "--framer-input-border-radius-bottom-right", e.BorderRadiusBottomLeft = "--framer-input-border-radius-bottom-left", e.BorderColor = "--framer-input-border-color", e.BorderTopWidth = "--framer-input-border-top-width", e.BorderRightWidth = "--framer-input-border-right-width", e.BorderBottomWidth = "--framer-input-border-bottom-width", e.BorderLeftWidth = "--framer-input-border-left-width", e.BorderStyle = "--framer-input-border-style", e.Background = "--framer-input-background", e.FontFamily = "--framer-input-font-family", e.FontWeight = "--framer-input-font-weight", e.FontSize = "--framer-input-font-size", e.FontColor = "--framer-input-font-color", e.FontStyle = "--framer-input-font-style", e.FontLetterSpacing = "--framer-input-font-letter-spacing", e.FontTextAlignment = "--framer-input-font-text-alignment", e.FontLineHeight = "--framer-input-font-line-height", e.FontOpenType = "--framer-input-font-open-type-features", e.PlaceholderColor = "--framer-input-placeholder-color", e.BoxShadow = "--framer-input-box-shadow", e.FocusedBorderColor = "--framer-input-focused-border-color", e.FocusedBorderWidth = "--framer-input-focused-border-width", e.FocusedBorderStyle = "--framer-input-focused-border-style", e.FocusedBackground = "--framer-input-focused-background", e.FocusedBoxShadow = "--framer-input-focused-box-shadow", e.FocusedTransition = "--framer-input-focused-transition", e.BooleanCheckedBackground = "--framer-input-boolean-checked-background", e.BooleanCheckedBorderColor = "--framer-input-boolean-checked-border-color", e.BooleanCheckedBorderWidth = "--framer-input-boolean-checked-border-width", e.BooleanCheckedBorderStyle = "--framer-input-boolean-checked-border-style", e.BooleanCheckedBoxShadow = "--framer-input-boolean-checked-box-shadow", e.BooleanCheckedTransition = "--framer-input-boolean-checked-transition", e.InvalidTextColor = "--framer-input-invalid-text-color", e.IconBackgroundImage = "--framer-input-icon-image", e.IconMaskImage = "--framer-input-icon-mask-image", e.IconColor = "--framer-input-icon-color", e.WrapperHeight = "--framer-input-wrapper-height", e))(QC || {}), Te = QC, Rw = "framer-form-input", BD = "framer-form-input-wrapper";

 function $D(e) { return typeof e == "number" ? e : e.startsWith("--") ? st.variable(e) : e === "" ? '""' : e } function st(e, t) { let n = " ";

 for (let r in t) { let i = t[r];

 n += `${r.replace(/([A-Z])/gu, "-$1").toLowerCase()}: ${$D(i)};

 ` } return e + " {" + n + "}" } (e => { function t(...n) { let r = n[n.length - 1], i = r.startsWith("--") ? `var(${r})` : r;

 for (let o = n.length - 2;

 o >= 0;

 o--)i = `var(${n[o]}, ${i})`;

 return i } e.variable = t })(st || (st = {}));

 var NW = [st(`.${Rw}`, { padding: st.variable(Te.Padding), background: "transparent", fontFamily: st.variable(Te.FontFamily), fontWeight: st.variable(Te.FontWeight), fontSize: st.variable(Te.FontSize), fontStyle: st.variable(Te.FontStyle), color: st.variable(Te.FontColor), fontFeatureSettings: st.variable(Te.FontOpenType), border: "none", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "100%", height: st.variable(Te.WrapperHeight, "100%"), letterSpacing: st.variable(Te.FontLetterSpacing), textAlign: st.variable(Te.FontTextAlignment), lineHeight: st.variable(Te.FontLineHeight) }), st(`.${Rw}:focus-visible`, { outline: "none" })];

 var jW = `var(${Te.BorderTopWidth}) var(${Te.BorderRightWidth}) var(${Te.BorderBottomWidth}) var(${Te.BorderLeftWidth})`, HW = [`.${BD}:after {
        content: "";


        pointer-events: none;


        box-sizing: border-box;


        position: absolute;


        top: 0;


        left: 0;


        width: 100%;


        height: 100%;


        border-top-left-radius: var(${Te.BorderRadiusTopLeft});


        border-top-right-radius: var(${Te.BorderRadiusTopRight});


        border-bottom-right-radius: var(${Te.BorderRadiusBottomRight});


        border-bottom-left-radius: var(${Te.BorderRadiusBottomLeft});


        border-color: var(${Te.BorderColor});


        border-top-width: var(${Te.BorderTopWidth});


        border-right-width: var(${Te.BorderRightWidth});


        border-bottom-width: var(${Te.BorderBottomWidth});


        border-left-width: var(${Te.BorderLeftWidth});


        border-style: var(${Te.BorderStyle});


        transition: var(${Te.FocusedTransition});


        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius;


    }`];

 var lm = 16, WW = { content: "", display: "block", position: "absolute", right: 0, top: 0, bottom: 0, width: `${lm}px`, boxSizing: "content-box", padding: st.variable(Te.Padding), border: "none", pointerEvents: "none", backgroundRepeat: "no-repeat", backgroundSize: `${lm}px`, maskRepeat: "no-repeat", maskSize: `${lm}px`, backgroundColor: st.variable(Te.IconColor) };

 function zn(e, t) { return st.variable(...e.flatMap(n => [`${n}-rgb`, n]), t) } var ND = [`
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;


            padding: 0;


        }
    `, `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));


            font-style: var(--framer-blockquote-font-style, var(--framer-font-style, normal));


            font-weight: var(--framer-blockquote-font-weight, var(--framer-font-weight, 400));


            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));


            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));


            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));


            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));


            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, none));


            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));


            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));


            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);


            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);


            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);


            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);


            font-feature-settings: var(--framer-font-open-type-features, initial);


            font-variation-settings: var(--framer-font-variation-axes, normal);


            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));


        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${zn(["--framer-blockquote-text-color", "--framer-text-color"], "#000")};


                -webkit-text-stroke-color: ${zn(["--framer-text-stroke-color"], "initial")};


            }
        }
    `, `
        .framer-fit-text .framer-text {
            white-space: nowrap;


            white-space-collapse: preserve;


        }
    `, `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));


            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));


            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));


            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));


        }
    `, `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));


            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));


            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));


            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));


        }
    `, `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));


            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));


            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));


            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));


        }
    `, `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));


        }
    `, `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;


        }
    `, `
        .framer-text[data-text-fill] {
            display: inline-block;


            background-clip: text;


            -webkit-background-clip: text;


            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;


            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));


            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));


        }
    `, `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));


            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));


            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));


            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));


            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));


            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));


            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));


        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${zn(["--framer-blockquote-text-color", "--framer-code-text-color", "--framer-text-color"], "#000")};


            }
        }
    `, `
        blockquote.framer-text {
            margin-block-start: initial;


            margin-block-end: initial;


            margin-inline-start: initial;


            margin-inline-end: initial;


            unicode-bidi: initial;


        }
    `, `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));


            font-style: var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));


            font-weight: var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));


            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));


            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));


            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));


            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));


            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);


        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            a.framer-text span.framer-text:not([data-text-fill]),
            span.framer-text[data-nested-link],
            span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
                color: ${zn(["--framer-blockquote-text-color", "--framer-link-text-color", "--framer-text-color"], "#000")};


            }
        }
    `, `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));


            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));


            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));


            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));


            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));


        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text,
            code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-nested-link],
            code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
                color: ${zn(["--framer-blockquote-text-color", "--framer-link-text-color", "--framer-code-text-color", "--framer-text-color"], "#000")};


            }
        }
    `, `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));


            font-style: var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));


            font-weight: var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));


            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));


            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));


            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));


            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));


        }
    `, `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            color: ${zn(["--framer-link-hover-text-color", "--framer-blockquote-text-color", "--framer-link-text-color", "--framer-text-color"], "#000")};


        }
    }
    `, `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link]:hover,
        code.framer-text span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));


            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));


            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));


            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));


            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));


        }
    `, `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link]:hover,
        code.framer-text span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            color: ${zn(["--framer-link-hover-text-color", "--framer-blockquote-text-color", "--framer-link-text-color", "--framer-text-color"], "#000")};


        }
    }
   `, `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));


            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));


            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));


            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));


            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));


            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));


            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));


        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            span.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${zn(["--framer-link-current-text-color", "--framer-link-text-color", "--framer-text-color"], "#000")};


            }
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));


            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));


            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));


            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));


            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));


        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${zn(["--framer-link-current-text-color", "--framer-link-text-color", "--framer-code-text-color", "--framer-text-color"], "#000")};


            }
        }
    `, `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));


            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));


            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));


            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));


            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));


            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));


            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));


        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            span.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${zn(["--framer-link-hover-text-color", "--framer-link-current-text-color", "--framer-link-text-color", "--framer-code-text-color", "--framer-text-color"], "#000")};


            }
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));


            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));


            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));


            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));


            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));


        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${zn(["--framer-link-hover-text-color", "--framer-link-current-text-color", "--framer-link-text-color", "--framer-code-text-color", "--framer-text-color"], "#000")};


            }
        }
    `, `
        .framer-image.framer-text {
            display: block;


            max-width: 100%;


            height: auto;


        }
    `, `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;


            --framer-font-style: normal;


            --framer-font-weight: 500;


            --framer-text-color: #000;


            --framer-font-size: 16px;


            --framer-letter-spacing: 0;


            --framer-text-transform: none;


            --framer-text-decoration: none;


            --framer-line-height: 1.2em;


            --framer-text-alignment: start;


            --framer-font-open-type-features: normal;


        }
    `, `
        ol.framer-text {
            --list-style-type: decimal;


        }
    `, `
        ul.framer-text,
        ol.framer-text {
            padding-left: 3ch;


            position: relative;


        }
    `, `
        li.framer-text {
            counter-increment: list-item;


            list-style: none;


        }
    `, `
        ol.framer-text > li.framer-text::before {
            position: absolute;


            left: 0;


            content: counter(list-item, var(--list-style-type)) ".";


            font-variant-numeric: tabular-nums;


        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 100),
        ol.framer-text > li.framer-text:nth-last-child(n + 100) ~ li {
            padding-left: 1ch;


        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000) ~ li {
            padding-left: 2ch;


        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 10000),
        ol.framer-text > li.framer-text:nth-last-child(n + 10000) ~ li {
            padding-left: 3ch;


        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 100000),
        ol.framer-text > li.framer-text:nth-last-child(n + 100000) ~ li {
            padding-left: 4ch;


        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000) ~ li {
            padding-left: 5ch;


        }
    `, `
        ul.framer-text > li.framer-text::before {
            position: absolute;


            left: 0;


            content: "\u2022";


        }
    `, `
        .framer-table-wrapper {
            overflow-x: auto;


        }
    `, `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;


            border-spacing: 0;


            table-layout: auto;


            word-break: normal;


            width: 100%;


        }
    `, `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;


            vertical-align: top;


        }
    `, `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;


        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;


            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";


                display: block;


                padding-bottom: calc(100% / calc(var(--aspect-ratio)));


            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;


                top: 0;


                left: 0;


                height: 100%;


            }
        }
    `], jD = new Set, cm;

 function ZC(e, t, n = jD) { if (!(!e || n.has(e) || typeof document > "u")) { if (n.add(e), !t) { if (!cm) { let r = document.createElement("style");

 if (r.setAttribute("type", "text/css"), r.setAttribute("data-framer-css", "true"), !document.head) { console.warn("not injecting CSS: the document is missing a <head> element");

 return } if (document.head.appendChild(r), r.sheet) cm = r.sheet;

 else { console.warn("not injecting CSS: injected <style> element does not have a sheet", r);

 return } } t = cm } try { t.insertRule(e, t.cssRules.length) } catch { } } } var HD = ["[data-framer-component-type] { position: absolute;}"], WD = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);


}`, UD = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;


}`, GD = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;


}`, qD = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);


    font-style: var(--font-style);


    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);


    color: var(--text-color);


    letter-spacing: var(--letter-spacing);


    font-size: var(--font-size);


    text-transform: var(--text-transform);


    text-decoration: var(--text-decoration);


    line-height: var(--line-height);


}`, XD = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);


    --font-style: var(--framer-font-style);


    --font-weight: var(--framer-font-weight);


    --text-color: var(--framer-text-color);


    --letter-spacing: var(--framer-letter-spacing);


    --font-size: var(--framer-font-size);


    --text-transform: var(--framer-text-transform);


    --text-decoration: var(--framer-text-decoration);


    --line-height: var(--framer-line-height);


}`, YD = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));


    --font-style: var(--framer-link-font-style, var(--framer-font-style));


    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));


    --text-color: var(--framer-link-text-color, var(--framer-text-color));


    --font-size: var(--framer-link-font-size, var(--framer-font-size));


    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));


    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));


}`, KD = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));


    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));


    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));


    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));


    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));


    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));


    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));


}`, QD = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));


    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));


    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));


    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));


    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));


    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));


    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));


}`, ZD = ['[data-framer-component-type="Text"] { cursor: inherit;}', "[data-framer-component-text-autosized] * { white-space: pre; }", WD, UD, GD, qD, XD, YD, KD, QD], JD = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;


}`, e3 = [`[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);


        column-gap: var(--stack-native-column-gap);


    }`, `.${Xi} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;


        column-gap: unset;


    }`], t3 = `
.${Xi} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);


    margin-bottom: calc(var(--stack-gap-y) / 2);


    margin-right: calc(var(--stack-gap-x) / 2);


    margin-left: calc(var(--stack-gap-x) / 2);


}
`, n3 = `
.${Xi}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Xi}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;


    margin-left: 0;


}`, r3 = `
.${Xi}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Xi}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;


    margin-bottom: 0;


}`, i3 = [JD, t3, ...e3, n3, r3], o3 = [`
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;


}`], s3 = ['[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }', '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }'], a3 = ['[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch;}', '[data-framer-component-type="NativeScroll"] > * { position: relative; }', '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll;overflow-y: scroll;}', '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden;overflow-y: scroll;}', '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll;overflow-y: hidden;}', '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important;}', '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }', '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none;}'], l3 = ['[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important;height: 100% !important; }'], c3 = ['[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }'], u3 = ['[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }'], f3 = ['[data-framer-cursor="pointer"] { cursor: pointer; }', '[data-framer-cursor="grab"] { cursor: grab; }', '[data-framer-cursor="grab"]:active { cursor: grabbing; }'], d3 = ['[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }', "[data-framer-generated] * { pointer-events: unset }"], h3 = [`[data-reset="button"] {
        border-width: 0;


        padding: 0;


        background: none;


}`], p3 = ['[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }', '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }', '[data-hide-scrollbars="true"] { scrollbar-width: none; }'], um = "--framer-will-change-override", m3 = "--framer-will-change-effect-override", g3 = "(background: -webkit-named-image(i))", v3 = "(grid-template-rows: subgrid)", y3 = e => e ? [`body { ${um}: none; }`, `@supports ${g3} and (not ${v3}) { body { ${um}: transform;

 } }`] : [`body { ${um}: none;

 ${m3}: none;

 }`], b3 = e => e ? d3 : [], x3 = [".svgContainer svg { display: block; }"], JC = e => [...y3(e), ...HD, ...ZD, ...ND, ...zD, ...i3, ...o3, ...s3, ...a3, ...c3, ...l3, ...u3, ...f3, ...b3(e), ...x3, ...h3, ...p3], S3 = JC(!1), w3 = JC(!0), Tw = !1;

 function Ka() { if (Tw) return;

 Tw = !0;

 let e = se.current() === se.preview ? w3 : S3;

 for (let t of e) ZC(t, void 0, void 0) } function k3(e) { return ue(e) || Qt(e) } var Ew = "optional";

 function C3(e) { return !!e && Ew in e && e[Ew] === !0 } function R3(e) { try { switch (e.type) { case "string": case "collectionreference": case "multicollectionreference": case "color": case "date": case "link": case "boxshadow": case "padding": case "borderradius": case "gap": return re(e.defaultValue) ? e.defaultValue : void 0;

 case "boolean": return dg(e.defaultValue) ? e.defaultValue : void 0;

 case "enum": return ut(e.defaultValue) ? void 0 : e.options.includes(e.defaultValue) ? e.defaultValue : void 0;

 case "fusednumber": case "number": return Ee(e.defaultValue) ? e.defaultValue : void 0;

 case "transition": return ue(e.defaultValue) ? e.defaultValue : void 0;

 case "border": return ue(e.defaultValue) ? e.defaultValue : void 0;

 case "font": return ue(e.defaultValue) ? e.defaultValue : void 0;

 case "object": { let t = ue(e.defaultValue) ? e.defaultValue : {};

 return ue(e.controls) && eR(t, e.controls), t } case "array": return $u(e.defaultValue) ? e.defaultValue : void 0;

 case "file": case "image": case "richtext": case "pagescope": case "eventhandler": case "segmentedenum": case "responsiveimage": case "componentinstance": case "slot": case "scrollsectionref": case "customcursor": case "cursor": case "trackingid": case "vectorsetitem": return;

 default: return } } catch { return } } function eR(e, t) { for (let n in t) { let r = t[n];

 if (!r) continue;

 let i = e[n];

 if (!ut(i) || C3(r)) continue;

 let o = R3(r);

 ut(o) || (e[n] = o) } } function T3(e) { if (ue(e.defaultProps)) return e.defaultProps;

 let t = {};

 return e.defaultProps = t, t } function E3(e, t) { if (!k3(e)) return;

 let n = T3(e);

 eR(n, t) } function F3(e, t) { Object.assign(e, { propertyControls: t }), E3(e, t) } function P3(e) { return e.propertyControls } function Qa() { let e = se.current();

 return e === se.canvas || e === se.export } function I3() { let [e] = Se(() => Qa());

 return e } var Ne = e => e;

 function _3(e) { let t = Object.create(Object.prototype);

 return n => (t[n] === void 0 && (t[n] = e(n)), t[n]) } var M3 = /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u, O3 = _3(e => M3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91), Fw = e => () => { ns(e) }, L3 = () => () => { }, V3 = { useImageSource(e) { return e.src ?? "" }, useImageElement(e, t, n) { let r = new Image;

 return r.src = lt.useImageSource(e, t, n), e.srcSet && (r.srcset = e.srcSet), r }, canRenderOptimizedCanvasImage() { return !1 } }, A3 = !1, D3 = { get(e, t, n) { return Reflect.has(e, t) ? Reflect.get(e, t, n) : ["getLogger"].includes(String(t)) ? L3() : Fw(A3 ? `${String(t)} is not available in this version of Framer.` : `${String(t)} is only available inside of Framer. https://www.framer.com/`) } }, lt = new Proxy(V3, D3);

 var Pw = { position: "absolute", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0 }, z3 = { backgroundRepeat: "repeat", backgroundPosition: "left top", backgroundSize: "126px auto", backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjEyNiI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0xMjYgMHYyMS41ODRMMjEuNTg0IDEyNkgwdi0xNy41ODVMMTA4LjQxNSAwSDEyNlptMCAxMDguNDE0VjEyNmgtMTcuNTg2TDEyNiAxMDguNDE0Wm0wLTg0djM5LjE3MUw2My41ODUgMTI2SDI0LjQxNEwxMjYgMjQuNDE0Wm0wIDQydjM5LjE3TDEwNS41ODQgMTI2aC0zOS4xN0wxMjYgNjYuNDE0Wk0xMDUuNTg2IDAgMCAxMDUuNTg2VjY2LjQxNUw2Ni40MTUgMGgzOS4xNzFabS00MiAwTDAgNjMuNTg2VjI0LjQxNUwyNC40MTUgMGgzOS4xNzFabS00MiAwTDAgMjEuNTg2VjBoMjEuNTg2WiIvPjwvZGVmcz48dXNlIHhsaW5rOmhyZWY9IiNhIiBmaWxsPSIjODg4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)", opacity: .2 };

 function B3(e) { switch (e) { case "fit": return "contain";

 case "stretch": return "fill";

 default: return "cover" } } function tR(e, t) { let n = e ?? "center", r = t ?? "center";

 return n === "center" && r === "center" ? "center" : n + " " + r } function vg(e) { return { display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectPosition: tR(e.positionX, e.positionY), objectFit: B3(e.fit) } } function $3({ image: e, containerSize: t, nodeId: n, alt: r, draggable: i, syncDecoding: o }) { let s = lt.useImageSource(e, t, n), a = vg(e), l = S.useRef(null);

 return k("img", { ref: l, decoding: o ? "sync" : "async", fetchpriority: e.fetchPriority, loading: e.loading, width: e.pixelWidth, height: e.pixelHeight, sizes: e.sizes, srcSet: e.srcSet, src: s, alt: r ?? e.alt ?? "", style: a, draggable: i }) } function N3({ image: e, containerSize: t, nodeId: n }) { let r = S.useRef(null), i = lt.useImageElement(e, t, n), o = vg(e);

 return S.useLayoutEffect(() => { let s = r.current;

 if (s !== null) return s.appendChild(i), () => { s.removeChild(i) } }, [i]), Object.assign(i.style, o), k("div", { ref: r, style: { display: "contents", borderRadius: "inherit" } }) } function j3({ nodeId: e, image: t, containerSize: n }) { let r = S.useRef(null), i = lt.useImageSource(t, n, e);

 return S.useLayoutEffect(() => { let o = r.current;

 if (o === null) return;

 let s = vg(t);

 lt.renderOptimizedCanvasImage(o, i, s, e) }, [e, t, i]), k("div", { ref: r, style: { display: "contents", borderRadius: "inherit" } }) } function nR({ layoutId: e, image: t, ...n }) { e && (e = e + "-background");

 let r = { ...Pw, ...z3 }, i = null;

 if (re(t.src)) if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) { let o = Ee(t.backgroundSize) ? t.backgroundSize : 1, s = { width: Math.round(o * t.pixelWidth), height: Math.round(o * t.pixelHeight) }, a = lt.useImageSource(t, s);

 r.backgroundImage = `url(${a})`, r.backgroundRepeat = "repeat", r.backgroundPosition = tR(t.positionX, t.positionY), r.opacity = void 0, r.border = 0, r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`, i = null } else se.current() !== se.canvas ? i = k($3, { image: t, syncDecoding: se.current() === se.export, ...n }) : lt.canRenderOptimizedCanvasImage(lt.useImageSource(t)) ? i = k(j3, { image: t, ...n }) : i = k(N3, { image: t, ...n });

 return k(Ht.div, { layoutId: e, style: i ? Pw : r, "data-framer-background-image-wrapper": !0, children: i }) } function H3(e, t, n = !0) { let { borderWidth: r, borderStyle: i, borderColor: o } = e;

 if (!r) return;

 let s, a, l, c;

 if (typeof r == "number" ? s = a = l = c = r : (s = r.top || 0, a = r.bottom || 0, l = r.left || 0, c = r.right || 0), !(s === 0 && a === 0 && l === 0 && c === 0)) { if (n && s === a && s === l && s === c) { t.border = `${s}px ${i} ${o}`;

 return } t.borderStyle = e.borderStyle, t.borderColor = e.borderColor, t.borderTopWidth = `${s}px`, t.borderBottomWidth = `${a}px`, t.borderLeftWidth = `${l}px`, t.borderRightWidth = `${c}px` } } function W3(e) { let t = e.layoutId ? `${e.layoutId}-border` : void 0;

 if (!e.borderWidth) return null;

 let n = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, borderRadius: "inherit", pointerEvents: "none" };

 return e.border ? (n.border = e.border, k(Ht.div, { style: n })) : (H3(e, n, !1), k(Ht.div, { "data-frame-border": !0, style: n, layoutId: t })) } var U3 = "src", Wi = { isImageObject: function (e) { return !e || typeof e == "string" ? !1 : U3 in e } };

 function G3(e, t) { let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t, o = n ?? i, s = r && o ? r[o] : void 0;

 return s && typeof s == "string" && (e = { ...e, src: s }), e } function q3(e) { let { background: t, image: n } = e;

 if (n !== void 0 && t && !Wi.isImageObject(t)) return;

 let r = null;

 if (re(n) ? r = { alt: "", src: n } : r = at.get(t, null), !!Wi.isImageObject(r)) return G3(r, e) } function cs(e) { return e && e !== "search" && e !== "slot" && e !== "template" ? Ht[e] : Ht.div } var Kt = typeof Me < "u" ? Me : void 0, Or = () => typeof document == "object";

 var X3 = () => Kt && /Chrome/u.test(Kt.userAgent) && /Google Inc/u.test(Kt.vendor) && !Z3(), Y3 = () => Kt && /Safari/u.test(Kt.userAgent) && /Apple Computer/u.test(Kt.vendor), K3 = () => Kt && /Firefox\/\d+\.\d+$/u.test(Kt.userAgent), Q3 = () => Kt && /FramerX/u.test(Kt.userAgent), Z3 = () => Kt && /Edg\//u.test(Kt.userAgent);

 var J3 = () => Kt && /iPhone|iPod|iPad/iu.test(Kt.platform);

 var yg = () => !1;

 var e4 = X3();

 function t4(e, t) { e["data-framer-layout-hint-center-x"] = t === !0 || t === "x" ? !0 : void 0, e["data-framer-layout-hint-center-y"] = t === !0 || t === "y" ? !0 : void 0 } function rR(e) { let t = {};

 return !e || !e4 || se.current() !== se.canvas || t4(t, e), t } function bg(e) { return e.replace(/^id_/u, "").replace(/\\/gu, "") } function iR(e, t) { if (!t && (t = e.children, !t)) return { props: e, children: t };

 let n = e._forwardedOverrides;

 return n ? (t = S.Children.map(t, r => S.isValidElement(r) ? S.cloneElement(r, { _forwardedOverrides: n }) : r), { props: e, children: t }) : { props: e, children: t } } function Wu(e) { return (t, n) => e === !0 ? `translate(-50%, -50%) ${n}` : e === "x" ? `translateX(-50%) ${n}` : e === "y" ? `translateY(-50%) ${n}` : n || "none" } function us(e, { specificLayoutId: t, postfix: n } = {}) { let { name: r, layoutIdKey: i, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: a } = e, { getLayoutId: l, enabled: c } = L(is);

 return q(() => { if (!c) return e.layoutId;

 let u = t || e.layoutId;

 if (!u && (a || !i || s)) return;

 let f = u || l({ id: i, name: r, duplicatedFrom: o });

 if (f) return n ? `${f}-${n}` : f }, [c]) } var Nm = typeof document < "u" ? ze : V, fs = S.createContext(!1);

 function Uu() { let [e, t] = S.useState(0);

 return S.useCallback(() => t(n => n + 1), []) } var n4 = class { constructor() { T(this, "sharedResizeObserver"), T(this, "callbacks", new WeakMap), this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this)) } updateResizedElements(e) { for (let t of e) { let n = this.callbacks.get(t.target);

 n && n(t.contentRect) } } observeElementWithCallback(e, t) { this.sharedResizeObserver.observe(e), this.callbacks.set(e, t) } unobserve(e) { this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e) } }, cu = Or() ? new n4 : void 0;

 function r4(e) { let t = Uu();

 V(() => { let n = e?.current;

 if (n) return cu?.observeElementWithCallback(e.current, t), () => { cu?.unobserve(n) } }, [e, t]) } var i4 = "data-framer-size-compatibility-wrapper";

 function o4(e) { return [...e.firstElementChild && e.firstElementChild.hasAttribute(i4) ? e.firstElementChild.children : e.children].filter(oR).map(sR) } function oR(e) { return e instanceof HTMLBaseElement || e instanceof HTMLHeadElement || e instanceof HTMLLinkElement || e instanceof HTMLMetaElement || e instanceof HTMLScriptElement || e instanceof HTMLStyleElement || e instanceof HTMLTitleElement ? !1 : e instanceof HTMLElement || e instanceof SVGElement } function sR(e) { if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents") return e;

 let t = [...e.children].find(oR);

 return t ? sR(t) : e } function Gu(e, t, n = () => [], r = {}) { let { id: i, visible: o, _needsMeasure: s } = e, { skipHook: a = !1 } = r, l = !!L(fs), c = se.current() === se.canvas;

 Nm(() => { !c || l || a || t.current && i && o && s && lt.queueMeasureRequest(bg(i), t.current, n(t.current)) }) } function s4(e) { let t = e.closest("[data-framer-component-container]");

 t && lt.queueMeasureRequest(bg(t.id), t, o4(t)) } var aR = "0.000001px", fm = ` translateZ(${aR})`, lR = Q3() || Y3() || yg();

 function a4(e) { e.willChange = "transform";

 let t = se.current() === se.canvas;

 lR && t && (e.translateZ = aR) } function l4(e) { e.willChange = "transform", c4(e, !0) } function c4(e, t) { let n = se.current() === se.canvas;

 if (!lR || !n) return;

 let r = re(e.transform) && e.transform || "";

 t ? r.includes(fm) || (e.transform = r + fm) : e.transform = r.replace(fm, "") } function cR(e, t, n, r = !0) { if (!e) return;

 let i = Ne(e.style), o = n || i[t], s = () => { u4(o) && (i[t] = o) };

 i[t] = null, r ? Promise.resolve().then(s) : setTimeout(s, 0) } function u4(e) { return re(e) || Ee(e) || Nn(e) } var Ba = (() => { class e extends ye { constructor() { super(...arguments), T(this, "layerElement", null), T(this, "setLayerElement", n => { this.layerElement = n }) } static applyWillChange(n, r, i) { n.willChangeTransform && (i ? a4(r) : l4(r)) } shouldComponentUpdate(n, r) { return n._needsMeasure || this.state !== r || !qa(this.props, n) } componentDidUpdate(n) { Ne(this.props).clip && Ne(this.props).radius === 0 && Ne(n).radius !== 0 && cR(this.layerElement, "overflow", "hidden", !1) } } return T(e, "defaultProps", {}), e })();

 function f4(e, t) { if (e.size < t) return;

 let r = Math.round(Math.random());

 for (let i of e.keys()) (++r & 1) !== 1 && e.delete(i) } function d4(e, t, n, r) { let i = t.get(n);

 if (i) return i;

 f4(t, e);

 let o = r(n);

 return t.set(n, o), o } var uR = e => { let t = 0, n, r;

 if (e.length === 0) return t;

 for (n = 0;

 n < e.length;

 n++)r = e.charCodeAt(n), t = (t << 5) - t + r, t |= 0;

 return t }, xg = { hueRotate: (e, t) => j.toHslString(j.hueRotate(j(e), t)), setAlpha: (e, t) => j.toRgbString(j.alpha(j(e), t)), getAlpha: e => { let t = gg(e);

 return t ? t.a : 1 }, multiplyAlpha: (e, t) => j.toRgbString(j.multiplyAlpha(j(e), t)), toHexValue: e => j.toHex(j(e)).toUpperCase(), toHex: e => j.toHexString(j(e)).toUpperCase(), toRgb: e => j.toRgb(j(e)), toRgbString: e => j.toRgbString(j(e)), toHSV: e => j.toHsv(j(e)), toHSL: e => j.toHsl(j(e)), toHslString: e => j.toHslString(j(e)), toHsvString: e => j.toHsvString(j(e)), hsvToHSLString: e => j.toHslString(j(Fa(e.h, e.s, e.v, e.a))), hsvToHexValue: e => j.toHex(j(Fa(e.h, e.s, e.v, e.a))).toUpperCase(), hsvToHex: e => j.toHexString(j(Fa(e.h, e.s, e.v, e.a))).toUpperCase(), hsvToRgbString: e => j.toRgbString(j(Fa(e.h, e.s, e.v, e.a))), hsvToString: e => Fa(e.h, e.s, e.v), rgbaToString: e => j.toRgbString(j(e)), rgbToHexValue: e => j.toHex(j(e)), rgbToHexString: e => j.toHexString(j(e)), hslToString: e => j.toHslString(j(e)), hslToRgbString: e => j.toRgbString(j(e)), toColorPickerSquare: e => j.toRgbString(j({ h: e, s: 1, l: .5, a: 1 })), isValid: e => j(e).isValid !== !1, equals: (e, t) => j.isP3String(e) || j.isP3String(t) ? e === t : (typeof e == "string" && (e = j(e)), typeof t == "string" && (t = j(t)), j.equal(e, t)), toHexOrRgbaString: e => { let t = j(e);

 return t.a !== 1 ? j.toRgbString(t) : j.toHexString(t) }, toFormatString: e => j.isP3String(e) ? e : j.toRgbString(j(e)) }, h4 = /var\(.+\)/u, p4 = new Map;

 function m4(e, t) { let n = [e, t];

 return h4.test(e) ? e : d4(1e3, p4, n, () => xg.multiplyAlpha(e, t)) } function Za(e, t = 1) { let n;

 return "stops" in e ? n = e.stops : n = [{ value: e.start, position: 0 }, { value: e.end, position: 1 }], t === 1 ? n : n.map(r => ({ ...r, value: m4(r.value, t) })) } function fR(e, t) { let n = 0;

 return Za(e, t).forEach(r => { n ^= uR(r.value) ^ r.position }), n } var g4 = ["stops"];

 function dR(e) { return e && g4.every(t => t in e) } var v4 = ["start", "end"];

 function hR(e) { return e && v4.every(t => t in e) } var y4 = ["angle", "alpha"], Wa = { isLinearGradient: e => ue(e) && y4.every(t => t in e) && (hR(e) || dR(e)), hash: e => e.angle ^ fR(e, e.alpha), toCSS: (e, t, n) => { let r = Za(e, e.alpha), i = t !== void 0 ? t : e.angle, o = r.map(s => `${n?.(s.value) ?? s.value} ${s.position * 100}%`);

 return `linear-gradient(${i}deg, ${o.join(", ")})` } }, b4 = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"], Ua = { isRadialGradient: e => ue(e) && b4.every(t => t in e) && (hR(e) || dR(e)), hash: e => e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ fR(e, e.alpha), toCSS: (e, t) => { let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: o, centerAnchorY: s } = e, a = Za(e, n), l = a.map((c, u) => { let f = a[u + 1], d = c.position === 1 && f?.position === 1 ? c.position - 1e-4 : c.position;

 return `${t?.(c.value) ?? c.value} ${d * 100}%` });

 return `radial-gradient(${r * 100}% ${i * 100}% at ${o * 100}% ${s * 100}%, ${l.join(", ")})` } };

 function x4({ background: e, backgroundColor: t }, n) { t ? typeof t == "string" || Sw(t) ? n.backgroundColor = t : j.isColorObject(e) && (n.backgroundColor = e.initialValue || j.toRgbString(e)) : e && (e = at.get(e, null), typeof e == "string" || Sw(e) ? n.background = e : Wa.isLinearGradient(e) ? n.background = Wa.toCSS(e) : Ua.isRadialGradient(e) ? n.background = Ua.toCSS(e) : j.isColorObject(e) && (n.backgroundColor = e.initialValue || j.toRgbString(e))) } function ve(e, t, n, r) { if (r === void 0 && (r = t), e[t] !== void 0) { n[r] = e[t];

 return } } function S4(e) { return e ? e.left !== void 0 && e.right !== void 0 : !1 } function w4(e) { return e ? e.top !== void 0 && e.bottom !== void 0 : !1 } function k4(e) { if (!e) return {};

 let t = {};

 return e.preserve3d === !0 ? t.transformStyle = "preserve-3d" : e.preserve3d === !1 && (t.transformStyle = "flat"), e.backfaceVisible === !0 ? t.backfaceVisibility = "visible" : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"), t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility), e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective), e.__fromCanvasComponent || (e.center === !0 ? (t.left = "50%", t.top = "50%") : e.center === "x" ? t.left = "50%" : e.center === "y" && (t.top = "50%")), ve(e, "size", t), ve(e, "width", t), ve(e, "height", t), ve(e, "minWidth", t), ve(e, "minHeight", t), ve(e, "top", t), ve(e, "right", t), ve(e, "bottom", t), ve(e, "left", t), ve(e, "position", t), ve(e, "overflow", t), ve(e, "opacity", t), (!e._border || !e._border.borderWidth) && ve(e, "border", t), ve(e, "borderRadius", t), ve(e, "radius", t, "borderRadius"), ve(e, "color", t), ve(e, "shadow", t, "boxShadow"), ve(e, "x", t), ve(e, "y", t), ve(e, "z", t), ve(e, "rotate", t), ve(e, "rotateX", t), ve(e, "rotateY", t), ve(e, "rotateZ", t), ve(e, "scale", t), ve(e, "scaleX", t), ve(e, "scaleY", t), ve(e, "skew", t), ve(e, "skewX", t), ve(e, "skewY", t), ve(e, "originX", t), ve(e, "originY", t), ve(e, "originZ", t), x4(e, t), t } function C4(e) { for (let t in e) if (t === "drag" || t.startsWith("while") || typeof Ne(e)[t] == "function" && t.startsWith("on") && !t.includes("Animation")) return !0;

 return !1 } var Iw = ["onClick", "onDoubleClick", "onMouse", "onMouseDown", "onMouseUp", "onTapDown", "onTap", "onTapUp", "onPointer", "onPointerDown", "onPointerUp", "onTouch", "onTouchDown", "onTouchUp"], R4 = new Set([...Iw, ...Iw.map(e => `${e}Capture`)]);

 function T4(e) { if (e.drag) return "grab";

 for (let t in e) if (R4.has(t)) return "pointer" } var dm = "overflow";

 function E4(e) { return _w(e) ? !0 : e.style ? !!_w(e.style) : !1 } function _w(e) { return dm in e && (e[dm] === "scroll" || e[dm] === "auto") } function Sg(e) { let { left: t, top: n, bottom: r, right: i, width: o, height: s, center: a, _constraints: l, size: c, widthType: u, heightType: f, positionFixed: d, positionAbsolute: h } = e, p = Rt(e.minWidth), v = Rt(e.minHeight), b = Rt(e.maxWidth), g = Rt(e.maxHeight);

 return { top: Rt(n), left: Rt(t), bottom: Rt(r), right: Rt(i), width: Rt(o), height: Rt(s), size: Rt(c), center: a, _constraints: l, widthType: u, heightType: f, positionFixed: d, positionAbsolute: h, minWidth: p, minHeight: v, maxWidth: b, maxHeight: g } } var Mw = { x: 0, y: 0, width: 200, height: 200 };

 function F4(e) { S.useInsertionEffect(() => { Ka() }, []);

 let t = !!L(fs), { style: n, _initialStyle: r, __fromCanvasComponent: i, size: o } = e, s = Sg(e), a = bD(s), l = { display: "block", flex: n?.flex ?? "0 0 auto", userSelect: se.current() !== se.preview ? "none" : void 0 };

 e.__fromCanvasComponent || (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);

 let c = !C4(e) && !e.__fromCanvasComponent && !E4(e), u = e.style ? !("pointerEvents" in e.style) : !0;

 c && u && (l.pointerEvents = "none");

 let d = S.Children.count(e.children) > 0 && S.Children.toArray(e.children).every(g => typeof g == "string" || typeof g == "number") && { display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }, h = k4(e);

 o === void 0 && !i && (S4(h) || (l.width = Mw.width), w4(h) || (l.height = Mw.height)), s.minWidth !== void 0 && (l.minWidth = s.minWidth), s.minHeight !== void 0 && (l.minHeight = s.minHeight);

 let p = {};

 ls(s) && a && !KC(e) && (p = { left: a.x, top: a.y, width: a.width, height: a.height, right: void 0, bottom: void 0 }), Object.assign(l, d, r, h, p, n), Object.assign(l, { overflowX: l.overflowX ?? l.overflow, overflowY: l.overflowY ?? l.overflow, overflow: void 0 }), Ba.applyWillChange(e, l, !0);

 let v = l;

 l.transform || (v = { x: 0, y: 0, ...l });

 let b = Qa();

 return e.positionSticky ? (!b || t) && (v.position = "sticky", v.willChange = "transform", v.zIndex = 1, v.top = e.positionStickyTop, v.right = e.positionStickyRight, v.bottom = e.positionStickyBottom, v.left = e.positionStickyLeft) : b && (e.positionFixed || e.positionAbsolute) && (v.position = "absolute"), "rotate" in v && v.rotate === void 0 && delete v.rotate, [v, a] } var P4 = new Set(["width", "height", "opacity", "overflow", "radius", "background", "color", "x", "y", "z", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "skew", "skewX", "skewY", "originX", "originY", "originZ"]);

 function I4(e) { let t = {};

 for (let n in e) (fo(n) || O3(n)) && !P4.has(n) ? t[n] = Ne(e)[n] : (n === "positionTransition" || n === "layoutTransition") && (t.layout = !0, typeof Ne(e)[n] != "boolean" && !e.transition && (t.transition = Ne(e)[n]));

 return t } function _4(e) { return "data-framer-name" in e } var M4 = xe(function (t, n) { let { name: r, center: i, border: o, _border: s, __portal: a } = t, { props: l, children: c } = iR(t), u = I4(l), f = us(t), d = T4(t), h = _(null), p = n ?? h, v = { "data-framer-component-type": t.componentType ?? "Frame", "data-framer-cursor": d, "data-framer-highlight": d === "pointer" ? !0 : void 0, "data-layoutid": f, "data-framer-offset-parent-id": Ne(t)["data-framer-offset-parent-id"] };

 !_4(t) && r && (Ne(v)["data-framer-name"] = r);

 let [b, g] = F4(l), m = Sg(l), y = KC(m);

 i && !(g && !y && ls(m)) ? (u.transformTemplate || (u.transformTemplate = Wu(i)), Object.assign(v, rR(i))) : u.transformTemplate || (u.transformTemplate = void 0), Gu(t, p);

 let x = q3(t), C = !!L(fs), w = O4(l, m, g, C), R = YC(de(rt, { children: [x ? k(nR, { alt: t.alt ?? "", image: x, containerSize: g ?? void 0, nodeId: t.id && bg(t.id), layoutId: f }) : null, c, k(W3, { ...s, border: o, layoutId: f })] }), w), E = cs(t.as), { size: I, radius: P, shadow: z } = b;

 return I !== void 0 && (delete b.size, b.height === void 0 && (b.height = I), b.width === void 0 && (b.width = I)), P !== void 0 && (delete b.radius, b.borderRadius = P), z !== void 0 && (delete b.shadow, b.boxShadow = z), de(E, { ...v, ...u, layoutId: f, style: b, ref: p, children: [R, a] }) }), $a = xe(function (t, n) { let { visible: r = !0 } = t;

 return r ? k(M4, { ...t, ref: n }) : null });

 function O4(e, t, n, r) { if (r) return n ? { width: n.width, height: n.height } : 1;

 let { _usesDOMRect: i } = e, { widthType: o = 0, heightType: s = 0, width: a, height: l } = t;

 return n && !i ? n : o === 0 && s === 0 && typeof a == "number" && typeof l == "number" ? { width: a, height: l } : i || e.positionFixed || e.positionAbsolute ? 2 : 0 } var wg = "__LAYOUT_TREE_ROOT", pR = S.createContext({ schedulePromoteTree: () => { }, scheduleProjectionDidUpdate: () => { }, initLead: () => { } }), L4 = class extends ye { constructor() { super(...arguments), T(this, "shouldAnimate", !1), T(this, "transition"), T(this, "lead"), T(this, "follow"), T(this, "scheduledPromotion", !1), T(this, "scheduledDidUpdate", !1), T(this, "scheduleProjectionDidUpdate", () => { this.scheduledDidUpdate = !0 }), T(this, "schedulePromoteTree", (e, t, n) => { this.follow = this.lead, this.shouldAnimate = n, this.lead = e, this.transition = t, this.scheduledPromotion = !0 }), T(this, "initLead", (e, t) => { this.follow = this.lead, this.lead = e, this.follow && t && (this.follow.layoutMaybeMutated = !0) }), T(this, "sharedLayoutContext", { schedulePromoteTree: this.schedulePromoteTree, scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate, initLead: this.initLead }) } getSnapshotBeforeUpdate() { var e;

 if (!this.scheduledPromotion || !this.lead || !this.follow) return null;

 let t = !!((e = this.lead) != null && e.layoutMaybeMutated) && !this.shouldAnimate;

 return this.lead.projectionNodes.forEach(n => { var r;

 n?.promote({ needsReset: t, transition: this.shouldAnimate ? this.transition : void 0, preserveFollowOpacity: n.options.layoutId === wg && !((r = this.follow) != null && r.isExiting) }) }), this.shouldAnimate ? this.follow.layoutMaybeMutated = !0 : this.scheduleProjectionDidUpdate(), this.lead.layoutMaybeMutated = !1, this.transition = void 0, this.scheduledPromotion = !1, null } componentDidUpdate() { var e, t;

 if (!this.lead) return null;

 this.scheduledDidUpdate && ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) == null || t.didUpdate(), this.scheduledDidUpdate = !1) } render() { return k(pR.Provider, { value: this.sharedLayoutContext, children: this.props.children }) } }, V4 = { width: "100%", height: "100%", backgroundColor: "none" };

 function A4(e) { return k(Ht.div, { layoutId: wg, style: V4, children: e.children }) } function Ow(e, t) { Qt(e) ? e(t) : mR(e) && (e.current = t) } function mR(e) { return ue(e) && "current" in e } function D4() { let e = ct(() => new Set), t = ct(() => new Map);

 return ct(() => (n, r) => ({ get current() { return n.current }, set current(i) { r && r(i), n.current = i;

 let o = i === null;

 e.forEach(s => { if (o && t.has(s)) return;

 let a = s(i);

 a && t.set(s, a) }), o && (t.forEach(s => s()), t.clear()) }, observe(i, o = !1) { e.has(i) || (e.add(i), !o && n.current && i(n.current)) }, unobserve(i) { i && e.delete(i) }, cleanup(i) { var o;

 return !i || !t.has(i) ? !1 : ((o = t.get(i)) == null || o(), !0) } })) } function kg(e) { let t = _(null), n = D4();

 return ct(() => mR(e) ? n(e) : Qt(e) ? n(t, e) : n(t)) } function Yi(e, t, n) { var r;

 let i = _(), o = _();

 if (q(() => { o.current !== void 0 && (o.current = !0) }, n ?? [{}]), !e) return;

 let s = o.current;

 if (s) { o.current = !1, e.cleanup(i.current) || (r = i.current) == null || r.call(i, null);

 let a = e.current;

 a && t?.(a) } i.current !== t && (e.unobserve(i.current), i.current = t, e.observe(t, s), o.current === void 0 && (o.current = !1)) } var z4 = class { constructor(e) { T(this, "sharedIntersectionObserver"), T(this, "callbacks", new WeakMap), this.sharedIntersectionObserver = new IntersectionObserver(this.intersectionObserverCallback.bind(this), e) } intersectionObserverCallback(e, t) { for (let n of e) { let r = this.callbacks.get(n.target);

 r && r(n, t) } } observeElementWithCallback(e, t) { this.sharedIntersectionObserver && (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t)) } unobserve(e) { this.sharedIntersectionObserver && (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e)) } get root() { var e;

 return (e = this.sharedIntersectionObserver) == null ? void 0 : e.root } }, B4 = pe(new Map);

 function $4(e, t, n) { let r = ct(() => `${n.rootMargin}`), i = L(B4), { enabled: o, root: s, rootMargin: a, threshold: l } = n;

 Yi(e, c => { if (!o || c === null) return;

 let u = i.get(r);

 return (!u || u.root !== s?.current) && (u = new z4({ root: s?.current, rootMargin: a, threshold: l }), i.set(r, u)), u.observeElementWithCallback(c, t), () => { u?.unobserve(c) } }, [o, t, s, a, l]) } var gR = typeof IntersectionObserver > "u" ? Cu : $4, N4 = new Array(100).fill(void 0).map((e, t) => t * .01), j4 = S.createContext(null);

 function vR(e, t, n) { let r = S.useRef({ isInView: !1, hasAnimatedOnce: !1 }), { enabled: i, animateOnce: o, threshold: s, rootMargin: a = "0px 0px 0px 0px" } = n, l = S.useCallback(c => { let { isInView: u, hasAnimatedOnce: f } = r.current, d = W4(c, s?.y ?? 0);

 if (d && !u) { if (o && f) return;

 r.current.hasAnimatedOnce = !0, r.current.isInView = !0, t(!0);

 return } if (!d && u) { if (r.current.isInView = !1, o) return;

 t(!1);

 return } }, [o, s?.y, t]);

 gR(e, l, { threshold: N4, rootMargin: a, enabled: i ?? !0 }) } function H4(e, t) { return t.height === 0 ? 0 : e.height / Math.min(t.height, be.innerHeight) } function W4({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) { return e.height === 0 ? n : n && H4(t, e) >= r } var bU = eo(Au(), 1);

 var SU = eo(Au(), 1);

 var Lw = (e, t) => Object.prototype.hasOwnProperty.call(e, t), _r = Symbol("private"), hm = (() => { function e(t = {}, n = !1, r = !0) { let i = { [_r]: { makeAnimatables: n, observeAnimatables: r, observers: new zC, reset() { for (let s in o) if (Lw(o, s)) { let a = Lw(t, s) ? Ne(t)[s] : void 0;

 a !== void 0 ? o[s] = a : delete o[s] } }, transactions: new Set } }, o = new Proxy(i, G4);

 return Object.assign(o, t), o } return e.resetObject = t => t[_r].reset(), e.addObserver = (t, n) => t[_r].observers.add(n), e })(), U4 = class { constructor() { T(this, "set", (e, t, n, r) => { if (t === _r) return !1;

 let i = e[_r], o, s;

 if (jn(n) ? (o = n, s = o.get()) : s = n, i.makeAnimatables && typeof n != "function" && typeof n != "object" && !o && (o = at(n)), i.observeAnimatables && o) { let u = i.transactions;

 o.onUpdate({ update: (f, d) => { d && u.add(d), i.observers.notify({ value: r }, d) }, finish: f => { u.delete(f) && i.observers.finishTransaction(f) } }) } let a = !1, l = !0, c = Ne(e)[t];

 if (c !== void 0) { jn(c) ? (l = c.get() !== s, c.set(s)) : (l = c !== s, Ne(e)[t] = s);

 let u = s !== null && typeof s == "object";

 (Array.isArray(s) || u) && (l = !0), a = !0 } else o && (n = o), a = Reflect.set(e, t, n);

 return l && i.observers.notify({ value: r }), a }), T(this, "get", (e, t, n) => { if (t === _r) return Ne(e)[t];

 let r = Reflect.get(e, t, n);

 return typeof r == "function" ? r.bind(n) : r }) } deleteProperty(e, t) { let n = Reflect.deleteProperty(e, t);

 return e[_r].observers.notify({ value: e }), n } ownKeys(e) { let t = Reflect.ownKeys(e), n = t.indexOf(_r);

 return n !== -1 && t.splice(n, 1), t } getOwnPropertyDescriptor(e, t) { if (t !== _r) return Reflect.getOwnPropertyDescriptor(e, t) } }, G4 = new U4;

 var q4 = "opacity";

 function X4(e) { return q4 in e } function Y4(e, t) { if (!X4(e)) return;

 let n = at.getNumber(e.opacity);

 n !== 1 && (t.opacity = n) } function K4(e) { let t = [];

 if (e && e.length) { let n = e.map(r => `drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`);

 t.push(...n) } return t } function yR(e, t) { if (!e.shadows || e.shadows.length === 0) return;

 let n = e.shadows.map(r => `${r.x}px ${r.y}px ${r.blur}px ${r.color}`).join(", ");

 n && (t.textShadow = n) } function Q4(e, t) { let n = [];

 ee(e.brightness) && n.push(`brightness(${e.brightness / 100})`), ee(e.contrast) && n.push(`contrast(${e.contrast / 100})`), ee(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`), ee(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`), ee(e.invert) && n.push(`invert(${e.invert / 100})`), ee(e.saturate) && n.push(`saturate(${e.saturate / 100})`), ee(e.sepia) && n.push(`sepia(${e.sepia / 100})`), ee(e.blur) && n.push(`blur(${e.blur}px)`), e.dropShadows && n.push(...K4(e.dropShadows)), n.length !== 0 && (t.filter = t.WebkitFilter = n.join(" ")) } function Z4(e, t) { ee(e.backgroundBlur) && (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`) } function Cg(e, t) { Z4(e, t), Q4(e, t) } var J4 = class extends ye { constructor() { super(...arguments), T(this, "layoutMaybeMutated"), T(this, "projectionNodes", new Map), T(this, "rootProjectionNode"), T(this, "isExiting"), T(this, "shouldPreserveFollowOpacity", e => e.options.layoutId === wg && !this.props.isExiting), T(this, "switchLayoutGroupContext", { register: e => this.addChild(e), deregister: e => this.removeChild(e), transition: this.props.isLead !== void 0 && this.props.animatesLayout ? this.props.transition : void 0, shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity }) } componentDidMount() { this.props.isLead && this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout) } shouldComponentUpdate(e) { let { isLead: t, isExiting: n, isOverlayed: r, animatesLayout: i, transition: o, sharedLayoutContext: s } = e;

 if (this.isExiting = n, t === void 0) return !0;

 let a = !this.props.isLead && !!t, l = this.props.isExiting && !n, c = a || l, u = !!this.props.isLead && !t, f = this.props.isOverlayed !== r;

 return (c || u) && this.projectionNodes.forEach(d => d?.willUpdate()), c ? s.schedulePromoteTree(this, o, !!i) : f && s.scheduleProjectionDidUpdate(), !!c && !!i } addChild(e) { let t = e.options.layoutId;

 t && (this.projectionNodes.set(t, e), this.setRootChild(e)) } setRootChild(e) { if (!this.rootProjectionNode) return this.rootProjectionNode = e;

 this.rootProjectionNode = this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e } removeChild(e) { let t = e.options.layoutId;

 t && this.projectionNodes.delete(t) } render() { return k(Ml.Provider, { value: this.switchLayoutGroupContext, children: this.props.children }) } }, e5 = e => { let t = S.useContext(pR);

 return k(J4, { ...e, sharedLayoutContext: t }) }, t5 = S.createContext(!0);

 function n5() { return new Map } function r5() { return ct(n5) } var bR = pe({ register: () => { }, deregister: () => { } }), i5 = ({ isCurrent: e, isOverlayed: t, children: n }) => { let r = r5(), i = $(a => { if (r.has(a)) { console.warn("NavigationTargetWrapper: already registered");

 return } r.set(a, void 0) }, [r]), o = $(a => { let l = r.get(a);

 l?.(), r.delete(a) }, [r]), s = _({ register: i, deregister: o }).current;

 return V(() => (r.forEach((a, l) => { let c = l(e, t);

 r.set(l, Qt(c) ? c : void 0) }), () => { r.forEach((a, l) => { a && (a(), r.set(l, void 0)) }) }), [e, t, r]), k(bR.Provider, { value: s, children: n }) };

 function xR(e, t = []) { let { register: n, deregister: r } = L(bR);

 V(() => { if (e) return n(e), () => r(e) }, [n, r, ...t]) } var pm = S.memo(function ({ isLayeredContainer: t, isCurrent: n, isPrevious: r, isOverlayed: i = !1, visible: o, transitionProps: s, children: a, backdropColor: l, onTapBackdrop: c, backfaceVisible: u, exitBackfaceVisible: f, animation: d, exitAnimation: h, instant: p, initialProps: v, exitProps: b, position: g = { top: 0, right: 0, bottom: 0, left: 0 }, withMagicMotion: m, index: y, areMagicMotionLayersPresent: x, id: C, isInitial: w }) { let R = Fb(), E = L(vo), { persistLayoutIdCache: I } = L(is), P = _({ wasCurrent: void 0, wasPrevious: !1, wasBeingRemoved: !1, wasReset: !0, origins: Vw({}, v, s) }), z = _(null), H = E !== null && !E.isPresent;

 n && P.current.wasCurrent === void 0 && I(), V(() => { if (t || !R) return;

 if (H) { P.current = { ...P.current, wasBeingRemoved: H };

 return } let { wasPrevious: Z, wasCurrent: Fe } = P.current, we = n && !Fe || !H && P.current.wasBeingRemoved && n, Ie = r && !Z, _e = Vw(P.current.origins, v, s), Re = P.current.wasReset;

 we || Ie ? (R.stop(), R.start({ zIndex: y, ..._e, ...s }), Re = !1) : Re === !1 && (R.stop(), R.set({ zIndex: y, ...Ui, opacity: 0 }), Re = !0), P.current = { wasCurrent: !!n, wasPrevious: !!r, wasBeingRemoved: !1, wasReset: Re, origins: _e } }, [n, r, H]);

 let O = p ? { type: !1 } : "velocity" in d ? { ...d, velocity: 0 } : d, X = p ? { type: !1 } : h || d, W = { ...g };

 (W.left === void 0 || W.right === void 0) && (W.width = "auto"), (W.top === void 0 || W.bottom === void 0) && (W.height = "auto");

 let U = (Aw(s) || Aw(v)) && (t || n || r) ? 1200 : void 0, Y = { ...Ui, ...P.current.origins }, le = t ? { initial: { ...Y, ...v }, animate: { ...Y, ...s, transition: O }, exit: { ...Y, ...b, transition: d } } : { animate: R, exit: { ...Y, ...b, transition: X } }, me = !(H || x === !1), B = !!n && me;

 return de($a, { "data-framer-component-type": "NavigationContainerWrapper", width: "100%", height: "100%", style: { position: "absolute", transformStyle: "flat", backgroundColor: "transparent", overflow: "hidden", zIndex: t || H || n && m ? y : void 0, pointerEvents: void 0, visibility: o ? "visible" : "hidden", perspective: U }, children: [t && k($a, { width: "100%", height: "100%", "data-framer-component-type": "NavigationContainerBackdrop", transition: d, initial: { opacity: p && o ? 1 : 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, backgroundColor: l || "transparent", onTap: H ? void 0 : c }), k($a, { ...W, ...le, transition: { default: O, originX: { type: !1 }, originY: { type: !1 }, originZ: { type: !1 } }, backgroundColor: "transparent", backfaceVisible: H ? f : u, "data-framer-component-type": "NavigationContainer", "data-framer-is-current-navigation-target": !!n, style: { pointerEvents: void 0, opacity: n && w || t || n && m ? 1 : 0 }, "data-is-present": me ? void 0 : !1, ref: z, children: k(j4.Provider, { value: z, children: k(t5.Provider, { value: B, children: k(i5, { isCurrent: B, isOverlayed: i, children: k(e5, { isLead: n, animatesLayout: !!m, transition: O, isExiting: !me, isOverlayed: i, id: C, children: a }) }) }) }) })] }) }, o5);

 function o5(e, t) { return !(t.isCurrent === void 0 || e.isCurrent !== t.isCurrent || e.isPrevious !== t.isPrevious || t.isCurrent && e.isOverlayed !== t.isOverlayed) } function Vw(e, t, n) { let r = { ...e };

 return t && (ee(t.originX) && (r.originX = t.originX), ee(t.originY) && (r.originY = t.originY), ee(t.originZ) && (r.originZ = t.originZ)), n && (ee(n.originX) && (r.originX = n.originX), ee(n.originY) && (r.originY = n.originY), ee(n.originZ) && (r.originZ = n.originZ)), r } function Aw(e) { var t, n, r;

 if (!e || !("rotateX" in e || "rotateY" in e || "z" in e)) return !1;

 let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0, s = ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 || ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 || ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;

 return o || s } var Ui = { x: 0, y: 0, z: 0, rotate: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1, scaleX: 1, scaleY: 1, scaleZ: 1, skew: 0, skewX: 0, skewY: 0, originX: .5, originY: .5, originZ: 0, opacity: 1 }, s5 = class { constructor() { T(this, "warning", () => { ns("The Navigator API is only available inside of Framer: https://www.framer.com/") }), T(this, "goBack", () => this.warning()), T(this, "instant", () => this.warning()), T(this, "fade", () => this.warning()), T(this, "push", () => this.warning()), T(this, "modal", () => this.warning()), T(this, "overlay", () => this.warning()), T(this, "flip", () => this.warning()), T(this, "customTransition", () => this.warning()), T(this, "magicMotion", () => this.warning()) } }, a5 = new s5, l5 = pe(a5), gt = { Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } }, PushLeft: { exit: { x: "-30%" }, enter: { x: "100%" } }, PushRight: { exit: { x: "30%" }, enter: { x: "-100%" } }, PushUp: { exit: { y: "-30%" }, enter: { y: "100%" } }, PushDown: { exit: { y: "30%" }, enter: { y: "-100%" } }, Instant: { animation: { type: !1 }, enter: { opacity: 0 } }, Modal: { overCurrentContext: !0, goBackOnTapOutside: !0, position: { center: !0 }, enter: { opacity: 0, scale: 1.2 } }, OverlayLeft: { overCurrentContext: !0, goBackOnTapOutside: !0, position: { right: 0, top: 0, bottom: 0 }, enter: { x: "100%" } }, OverlayRight: { overCurrentContext: !0, goBackOnTapOutside: !0, position: { left: 0, top: 0, bottom: 0 }, enter: { x: "-100%" } }, OverlayUp: { overCurrentContext: !0, goBackOnTapOutside: !0, position: { bottom: 0, left: 0, right: 0 }, enter: { y: "100%" } }, OverlayDown: { overCurrentContext: !0, goBackOnTapOutside: !0, position: { top: 0, left: 0, right: 0 }, enter: { y: "-100%" } }, FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } }, FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } }, FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } }, FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } }, MagicMotion: { withMagicMotion: !0 } };

 function c5(e) { switch (e && e.appearsFrom ? e.appearsFrom : "right") { case "right": return gt.PushLeft;

 case "left": return gt.PushRight;

 case "bottom": return gt.PushUp;

 case "top": return gt.PushDown } } function u5(e) { switch (e && e.appearsFrom ? e.appearsFrom : "bottom") { case "right": return gt.OverlayLeft;

 case "left": return gt.OverlayRight;

 case "bottom": return gt.OverlayUp;

 case "top": return gt.OverlayDown } } function f5(e) { switch (e && e.appearsFrom ? e.appearsFrom : "bottom") { case "right": return gt.FlipLeft;

 case "left": return gt.FlipRight;

 case "bottom": return gt.FlipUp;

 case "top": return gt.FlipDown } } var d5 = () => ({ current: -1, previous: -1, currentOverlay: -1, previousOverlay: -1, visualIndex: 0, overlayItemId: 0, historyItemId: 0, history: [], overlayStack: [], containers: {}, containerIndex: {}, containerVisualIndex: {}, containerIsRemoved: {}, transitionForContainer: {}, previousTransition: null });

 function Dw(e, t) { switch (t.type) { case "addOverlay": return p5(e, t.transition, t.component);

 case "removeOverlay": return m5(e);

 case "add": return SR(e, t.key, t.transition, t.component);

 case "remove": return wR(e);

 case "update": return h5(e, t.key, t.component);

 case "back": return g5(e);

 case "forward": return v5(e);

 default: return } } function h5(e, t, n) { return { ...e, containers: { ...e.containers, [t]: n } } } function p5(e, t, n) { let r = e.overlayStack[e.currentOverlay];

 if (r && r.component === n) return;

 let i = e.overlayItemId + 1, o = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];

 return { ...e, overlayStack: o, overlayItemId: i, currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)), previousOverlay: e.currentOverlay } } function m5(e) { return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay } } function SR(e, t, n, r) { e.containers[t] || (e.containers[t] = r), e.history = e.history.slice(0, e.current + 1), e.visualIndex = Math.max(e.history.length, 0);

 let i = e.history[e.history.length - 1], o = i && i.key === t;

 if (e.overlayStack = [], o && e.currentOverlay > -1) return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };

 if (o) return;

 let s = e.containerVisualIndex[t], a = e.containerIsRemoved[t], l = i?.key && n.withMagicMotion ? S5(t, s, a, e.history) : !0;

 e.history.push({ key: t, transition: n, visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t] });

 let c = e.current + 1, u = e.current;

 for (let p in e.containerIndex) e.containerIndex[p] === c && (e.containerIndex[p] = x5(p, e.history));

 e.containerIndex[t] = c;

 let { containerVisualIndex: f, containerIsRemoved: d } = y5(e, t, l), h = kR(c, u, e.history, e.containerIndex, e.transitionForContainer);

 return { ...e, current: c, previous: u, containerVisualIndex: f, containerIsRemoved: d, transitionForContainer: h, previousTransition: null, currentOverlay: -1, historyItemId: e.historyItemId + 1, previousOverlay: e.currentOverlay } } function g5(e) { let t = { ...e.containers }, n = wR(e);

 if (n) return n.containers = t, n } function v5(e) { let t = e.history[e.current + 1];

 if (!t) return;

 let { key: n, transition: r, component: i } = t, o = [...e.history], s = SR(e, n, r, i);

 if (s) return s.history = o, s } function wR(e) { let t = [...e.history.slice(0, e.current + 1)];

 if (t.length === 1) return;

 let n = t.pop();

 if (!n) return;

 let r = t[t.length - 1];

 A(r, "The navigation history must have at least one component"), e.containerIndex[r.key] = t.length - 1, t.every(d => d.key !== n.key) && delete e.containers[n.key];

 let o = e.current - 1, s = e.current, { containerIsRemoved: a, containerVisualIndex: l, previousTransition: c, visualIndex: u } = b5(e, r, n), f = kR(o, s, e.history, e.containerIndex, e.transitionForContainer);

 return { ...e, current: o, previous: s, containerIsRemoved: a, containerVisualIndex: l, previousTransition: c, visualIndex: u, transitionForContainer: f } } function y5(e, t, n) { let r = { containerVisualIndex: { ...e.containerVisualIndex }, containerIsRemoved: { ...e.containerIsRemoved } };

 if (n) r.containerVisualIndex[t] = e.history.length - 1, r.containerIsRemoved[t] = !1;

 else { let i = e.containerVisualIndex[t];

 for (let [o, s] of Object.entries(e.containerVisualIndex)) i !== void 0 && s > i && (r.containerIsRemoved[o] = !0) } return r } function b5(e, t, n) { let r = [t.key, n.key], i = e.history[e.history.length - 2], o = e.previousTransition === null ? null : { ...e.previousTransition }, s = { containerIsRemoved: { ...e.containerIsRemoved }, containerVisualIndex: { ...e.containerVisualIndex }, previousTransition: o, visualIndex: e.visualIndex };

 i && r.push(i.key);

 let a = e.containerVisualIndex[t.key], l = e.containerVisualIndex[n.key], c = a !== void 0 && l !== void 0 && a <= l || t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1, u = t.visualIndex;

 return c ? (s.containerIsRemoved[n.key] = !0, s.containerVisualIndex[t.key] = u !== void 0 ? u : e.history.length - 1) : (s.visualIndex = e.visualIndex + 1, s.containerVisualIndex[t.key] = e.visualIndex + 1), n.transition.withMagicMotion && (s.previousTransition = n.transition || null), e.containerIsRemoved[t.key] = !1, s } function x5(e, t) { var n;

 for (let r = t.length;

 r > t.length;

 r--)if (((n = t[r]) == null ? void 0 : n.key) === e) return r;

 return -1 } function kR(e, t, n, r, i) { let o = { ...i };

 for (let [s, a] of Object.entries(r)) { let l = w5(a, { current: e, previous: t, history: n });

 l && (o[s] = l) } return o } function S5(e, t, n, r) { return n || t === void 0 ? !0 : t === 0 ? !1 : r.slice(t, r.length).findIndex(s => s.key === e) > -1 ? !0 : !(r.slice(0, t - 1).findIndex(s => s.key === e) > -1) } function w5(e, t) { let { current: n, previous: r, history: i } = t;

 if (!(e !== n && e !== r)) { if (e === n && n > r) { let o = i[e];

 return uu("enter", o?.transition.enter, o?.transition.animation) } if (e === r && n > r) { let o = i[e + 1];

 return uu("exit", o?.transition.exit, o?.transition.animation) } if (e === n && n < r) { let o = i[e + 1];

 return uu("enter", o?.transition.exit, o?.transition.animation) } if (e === r && n < r) { let o = i[e];

 return uu("exit", o?.transition.enter, o?.transition.animation) } } } var k5 = Gi(Ui);

 function uu(e, t, n) { let r = {}, i = {};

 return k5.forEach(o => { r[o] = Ui[o], i[o] = { ...n, from: Ui[o] } }), t && Object.keys(t).forEach(o => { if (t[o] === void 0) return;

 let s = t[o], a = typeof t[o] == "string" ? `${Ne(Ui)[o]}%` : Ne(Ui)[o];

 Ne(r)[o] = e === "enter" ? a : s, i[o] = { ...n, from: e === "enter" ? s : a, velocity: 0 } }), { ...r, transition: { ...i } } } var C5 = S.createContext(void 0);

 var CR = S.createContext(void 0), R5 = (() => { var e, t, n, r, i, o, s;

 return t = class extends ye { constructor(a) { var l;

 super(a), Fn(this, n), Fn(this, e, null), T(this, "state", d5()), Fn(this, o, p => { if (!this.props.enabled && this.state.history.length > 0) return;

 let v = Dw(this.state, p);

 if (!v) return;

 let { skipLayoutAnimation: b } = this.props, g = v.history[v.current], m = p.type === "add" && p.transition.withMagicMotion || p.type === "forward" && g?.transition.withMagicMotion || p.type === "remove" && !!v.previousTransition, y = () => { var x;

 this.setState(v), g?.key && ((x = this.context) == null || x.call(this, g.key)) };

 b && !m ? b(y) : y() }), T(this, "goBack", () => { var p;

 if (!Nt(this, n, i).call(this)) return tf(this, e, ((p = globalThis.event) == null ? void 0 : p.timeStamp) || null), this.state.currentOverlay !== -1 ? fe(this, o).call(this, { type: "removeOverlay" }) : fe(this, o).call(this, { type: "remove" }) });

 let c = this.props.children;

 if (!c || !za(c) || !Da(c)) return;

 let u = { ...gt.Instant }, d = { type: "add", key: ((l = c.key) == null ? void 0 : l.toString()) || `stack-${this.state.historyItemId + 1}`, transition: u, component: c }, h = Dw(this.state, d);

 h && (this.state = h) } componentDidMount() { var a;

 let l = this.state.history[this.state.current];

 l && ((a = this.context) == null || a.call(this, l.key)) } UNSAFE_componentWillReceiveProps(a) { var l;

 let c = a.children;

 if (!za(c) || !Da(c)) return;

 let u = (l = c.key) == null ? void 0 : l.toString();

 u && (this.state.history.length === 0 ? Nt(this, n, s).call(this, c, gt.Instant) : fe(this, o).call(this, { type: "update", key: u, component: c })) } componentWillUnmount() { var a, l;

 (l = (a = this.props).resetProjection) == null || l.call(a) } instant(a) { Nt(this, n, s).call(this, a, gt.Instant, void 0) } fade(a, l) { Nt(this, n, s).call(this, a, gt.Fade, l) } push(a, l) { Nt(this, n, s).call(this, a, c5(l), l) } modal(a, l) { Nt(this, n, s).call(this, a, gt.Modal, l) } overlay(a, l) { Nt(this, n, s).call(this, a, u5(l), l) } flip(a, l) { Nt(this, n, s).call(this, a, f5(l), l) } magicMotion(a, l) { Nt(this, n, s).call(this, a, gt.MagicMotion, l) } customTransition(a, l) { Nt(this, n, s).call(this, a, l) } render() { var a, l, c, u, f;

 let d = Nt(this, n, r).call(this, { overCurrentContext: !1 }), h = Nt(this, n, r).call(this, { overCurrentContext: !0 }), p = T5(h), v = h.current > -1, b = this.state.history.length === 1, g = [];

 for (let [y, x] of Object.entries(this.state.containers)) { let C = this.state.containerIndex[y];

 A(C !== void 0, "Container's index must be registered");

 let w = this.state.containerVisualIndex[y];

 A(w !== void 0, "Container's visual index must be registered");

 let R = this.state.containerIsRemoved[y], E = this.state.history[C], I = this.state.transitionForContainer[y], P = C === this.state.current, z = C === this.state.previous, H = P ? !1 : R, O = ((a = E?.transition) == null ? void 0 : a.withMagicMotion) || P && !!this.state.previousTransition;

 g.push(k(pm, { id: y, index: w, isInitial: b, isCurrent: P, isPrevious: z, isOverlayed: v, visible: P || z, position: (l = E?.transition) == null ? void 0 : l.position, instant: Bw(C, d), transitionProps: I, animation: zw(C, d), backfaceVisible: O5(C, d), exitAnimation: (c = E?.transition) == null ? void 0 : c.animation, exitBackfaceVisible: (u = E?.transition) == null ? void 0 : u.backfaceVisible, exitProps: (f = E?.transition) == null ? void 0 : f.enter, withMagicMotion: O, areMagicMotionLayersPresent: H ? !1 : void 0, children: k(A4, { children: $w({ component: x, transition: E?.transition }) }) }, y)) } let m = this.state.overlayStack.map((y, x) => k(pm, { isLayeredContainer: !0, isCurrent: x === this.state.currentOverlay, position: y.transition.position, initialProps: M5(x, h), transitionProps: L5(x, h), instant: Bw(x, h, !0), animation: zw(x, h), exitProps: y.transition.enter, visible: V5(x, h), backdropColor: I5(y.transition), backfaceVisible: _5(x, h), onTapBackdrop: A5(y.transition, this.goBack), index: this.state.current + 1 + x, children: $w({ component: y.component, transition: y.transition }) }, y.key));

 return k($a, { "data-framer-component-type": "NavigationRoot", top: 0, left: 0, width: "100%", height: "100%", position: "relative", style: { overflow: "hidden", backgroundColor: "unset", pointerEvents: void 0, ...this.props.style }, children: k(l5.Provider, { value: this, children: de(CR.Provider, { value: b, children: [k(pm, { isLayeredContainer: !0, position: void 0, initialProps: {}, instant: !1, transitionProps: E5(p), animation: F5(p), backfaceVisible: P5(p), visible: !0, backdropColor: void 0, onTapBackdrop: void 0, index: 0, children: k(YA, { children: k(L4, { children: k(Ld, { presenceAffectsLayout: !1, children: g }) }) }) }), k(Ld, { children: m })] }) }) }) } }, e = new WeakMap, n = new WeakSet, r = function (a) { let { current: l, previous: c, currentOverlay: u, previousOverlay: f } = this.state;

 return a.overCurrentContext ? { current: u, previous: f, history: this.state.overlayStack } : { current: l, previous: c, history: this.state.history } }, i = function () { return globalThis.event ? fe(this, e) === globalThis.event.timeStamp : !1 }, o = new WeakMap, s = function (a, l, c) { var u, f;

 if (Nt(this, n, i).call(this) || (tf(this, e, ((u = globalThis.event) == null ? void 0 : u.timeStamp) || null), !a || !za(a) || !Da(a))) return;

 let d = { ...l, ...c };

 if (!!d.overCurrentContext) return fe(this, o).call(this, { type: "addOverlay", transition: d, component: a });

 let p = ((f = a.key) == null ? void 0 : f.toString()) || `stack-${this.state.historyItemId + 1}`;

 fe(this, o).call(this, { type: "add", key: p, transition: d, component: a }) }, T(t, "defaultProps", { enabled: !0 }), T(t, "contextType", C5), t })(), RR = { stiffness: 500, damping: 50, restDelta: 1, type: "spring" };

 function T5(e) { let t, n;

 return e.current !== -1 ? t = e.history[e.current] : n = e.history[e.previous], { currentOverlayItem: t, previousOverlayItem: n } } function E5({ currentOverlayItem: e }) { return e && e.transition.exit } function F5({ currentOverlayItem: e, previousOverlayItem: t }) { return e && e.transition.animation ? e.transition.animation : t && t.transition.animation ? t.transition.animation : RR } function P5({ currentOverlayItem: e, previousOverlayItem: t }) { return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible } function I5(e) { if (e.backdropColor) return e.backdropColor;

 if (e.overCurrentContext) return "rgba(4,4,15,.4)" } function _5(e, t) { let { current: n, history: r } = t;

 if (e === n) { let i = r[e];

 return i && i.transition ? i.transition.backfaceVisible : !0 } else if (e < n) { let i = r[e + 1];

 return i && i.transition ? i.transition.backfaceVisible : !0 } else { let i = r[e];

 return i && i.transition ? i.transition.backfaceVisible : !0 } } function M5(e, t) { let n = t.history[e];

 if (n) return n.transition.enter } function O5(e, t) { var n, r, i, o;

 let { current: s, previous: a, history: l } = t;

 return e === a && s > a || e === s && s < a ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null ? void 0 : r.backfaceVisible : (o = (i = l[e]) == null ? void 0 : i.transition) == null ? void 0 : o.backfaceVisible } function L5(e, t) { let { current: n, history: r } = t;

 if (e !== n) if (e < n) { let i = r[e + 1];

 if (i && i.transition) return i.transition.exit } else { let i = r[e];

 if (i && i.transition) return i.transition.enter } } function zw(e, t) { let { current: n, previous: r, history: i } = t, o = r > n ? r : n;

 if (e < o) { let s = i[e + 1];

 if (s && s.transition.animation) return s.transition.animation } else if (e !== o) { let s = i[e];

 if (s && s.transition.animation) return s.transition.animation } else { let s = i[e];

 if (s?.transition.animation) return s.transition.animation } return RR } function Bw(e, t, n) { let { current: r, previous: i, history: o } = t;

 return !!(n && o.length > 1 || e !== i && e !== r || r === i) } function V5(e, t) { let { current: n, previous: r } = t;

 return e > n && e > r ? !1 : e === n } function $w(e) { return S.Children.map(e.component, n => { var r;

 if (!za(n) || !Da(n) || !n.props) return n;

 let i = { style: n.props.style ?? {} }, o = (r = e?.transition) == null ? void 0 : r.position, s = !o || o.left !== void 0 && o.right !== void 0, a = !o || o.top !== void 0 && o.bottom !== void 0, l = "style" in n.props ? ue(n.props.style) : !0;

 return s && ("width" in n.props && (i.width = "100%"), l && (i.style.width = "100%")), a && ("height" in n.props && (i.height = "100%"), l && (i.style.height = "100%")), S.cloneElement(n, i) }) } function A5(e, t) { if (e.goBackOnTapOutside !== !1) return t } function D5(e) { let t = Ib(), n = $d();

 return S.useInsertionEffect(() => { Ka() }, []), k(R5, { ...e, resetProjection: t, skipLayoutAnimation: n, children: e.children }) } var DU = eo(Au(), 1);

 function z5(e, t) { let n, r = (...o) => { be.clearTimeout(n), n = be.setTimeout(e, t, ...o) }, i = () => { be.clearTimeout(n) };

 return r.cancel = i, r } function TR(e) { let { paddingPerSide: t, paddingTop: n, paddingBottom: r, paddingLeft: i, paddingRight: o } = e;

 return t !== !1 && (n !== void 0 || r !== void 0 || i !== void 0 || o !== void 0) } function B5(e) { let { padding: t = 0, paddingTop: n, paddingBottom: r, paddingLeft: i, paddingRight: o } = e;

 return TR(e) ? { top: n !== void 0 ? n : t, bottom: r !== void 0 ? r : t, left: i !== void 0 ? i : t, right: o !== void 0 ? o : t } : { top: t, bottom: t, left: t, right: t } } function $5({ top: e, left: t, bottom: n, right: r }) { return e === r && r === n && n === t ? `${e}px` : `${e}px ${r}px ${n}px ${t}px` } var GU = (() => { let e = S.forwardRef(function (n, r) { let { as: i = "div", direction: o = "vertical", distribution: s = "start", alignment: a = "center", gap: l = 10, wrap: c = !1, useFlexboxGap: u = !0, children: f, style: d, className: h, willChangeTransform: p, __fromCodeComponentNode: v, parentSize: b, __contentWrapperStyle: g, ...m } = n, y = !!(u || c), x = S.useRef(null), C = H5(o), w = U5(C), R = jw(s), E = TR(m) || m.padding ? $5(B5(m)) : void 0, I = { ...d };

 Ba.applyWillChange({ willChangeTransform: p }, I, !0), v && !ls(Sg(m)) && (m.width = "100%", m.height = "100%", m._constraints = { enabled: !0 });

 let P = us(n), { children: z, props: H } = iR(m, f), O = m.widthType ?? (m.width === "auto" ? 2 : 0), X = m.heightType ?? (m.height === "auto" ? 2 : 0), W = N5(z, o, O, X), ie = j5(W, l, C, R, y, c), U = YC(ie, b ?? 1), Y = { "data-framer-component-type": "Stack" }, le = m.__fromCanvasComponent;

 le && (Y["data-framer-generated"] = !0);

 let me = jw(a), B = { display: "flex", flexDirection: C, flexWrap: c ? "wrap" : "nowrap", justifyContent: R, alignItems: me, alignContent: me, padding: E, ...g }, K = FR(l, R, c);

 if (y && K) { let Z = ER(R);

 (Z || o !== "horizontal") && (Ne(B)["--stack-native-column-gap"] = `${l}px`), (Z || o !== "vertical") && (Ne(B)["--stack-native-row-gap"] = `${l}px`) } return B.width === void 0 && (B.width = O === 2 ? "min-content" : "100%"), B.height === void 0 && (B.height = X === 2 ? "min-content" : "100%"), le && (d?.width && (B.width = d?.width), d?.height && (B.height = d?.height)), k($a, { as: i, background: le ? void 0 : "none", ...H, layoutId: P, ref: G5(r, x), ...Y, style: I, className: h, layoutScroll: !0, children: k(Ht.div, { "data-framer-stack-content-wrapper": !0, "data-framer-stack-direction-reverse": w, "data-framer-stack-gap-enabled": K, style: B, children: U }) }) });

 return e.defaultProps = { distribution: "start" }, e.displayName = "Stack", F3(e, { direction: { type: "segmentedenum", options: ["horizontal", "vertical"], title: "Direction", defaultValue: "vertical" }, distribution: { type: "enum", options: ["start", "center", "end", "space-between", "space-around", "space-evenly"], optionTitles: ["Start", "Center", "End", "Space Between", "Space Around", "Space Evenly"], title: "Distribute", defaultValue: "space-around" }, alignment: { type: "segmentedenum", options: ["start", "center", "end"], title: "Align", defaultValue: "center" }, gap: { type: "number", min: 0, title: "Gap", hidden: t => t.distribution !== void 0 && ["space-between", "space-around", "space-evenly"].includes(t.distribution), defaultValue: 10 }, padding: { type: "fusednumber", toggleKey: "paddingPerSide", toggleTitles: ["Padding", "Padding per side"], valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"], valueLabels: ["t", "r", "b", "l"], min: 0, title: "Padding", defaultValue: 0 } }), e })();

 function Nw(e) { return typeof e == "string" && e.endsWith("fr") } function fu(e) { let t = parseFloat(e);

 return ee(t) ? t : 0 } function N5(e, t, n, r) { return S.Children.map(e, i => { if (!za(i) || !Da(i)) return;

 let o = t === "vertical", s = {}, a = !1, { style: l, size: c } = i.props, { width: u, height: f } = i.props;

 c !== void 0 && (u === void 0 && (u = c), f === void 0 && (f = c));

 let d = u, h = f;

 if (Nw(u) && (a = !0, a = !0, o ? n === 2 ? (s.alignSelf = "stretch", d = "auto") : d = `${fu(u) * 100}%` : (d = 1, s.flexGrow = fu(u), s.flexBasis = 0), s.width = d), Nw(f) && (a = !0, o ? (h = 1, s.flexGrow = fu(f), s.flexBasis = 0) : r === 2 ? (s.alignSelf = "stretch", h = "auto") : h = `${fu(f) * 100}%`, s.height = h), !a) return i;

 let p = { ...l, ...s };

 return S.cloneElement(i, { width: d, height: h, style: p }) }) } function ER(e) { return e ? !["space-between", "space-around", "space-evenly", "stretch"].includes(e) : !1 } function FR(e, t, n) { return !(!e || !n && !ER(t)) } function j5(e, t, n, r, i, o) { let s = { display: "contents" }, a = FR(t, r, o);

 if (a) { let l = W5(n);

 Ne(s)["--stack-gap-x"] = `${l ? 0 : t}px`, Ne(s)["--stack-gap-y"] = `${l ? t : 0}px` } return k("div", { "data-framer-legacy-stack-gap-enabled": a, "data-framer-stack-flexbox-gap": i, style: s, children: e }) } function H5(e) { switch (e) { case "vertical": return "column";

 case "horizontal": return "row";

 default: return e } } function W5(e) { return e === "column" || e === "column-reverse" } function U5(e) { switch (e) { case "column-reverse": case "row-reverse": return !0;

 default: return !1 } } function jw(e) { switch (e) { case "start": return "flex-start";

 case "end": return "flex-end";

 default: return e } } function G5(e, t) { return n => { t.current = n, typeof e == "function" ? e(n) : e && (e.current = n) } } function Eu(...e) { return e.filter(Boolean).join(" ") } var q5 = (() => { function e(t = {}) { let n = hm(t, !1, !1);

 return e.addData(n), n } return e._stores = [], e.addData = t => { e._stores.push(t) }, e.reset = () => { e._stores.forEach(t => hm.resetObject(t)) }, e.addObserver = (t, n) => hm.addObserver(t, n), e })(), mm = q5;

 var X5 = { update: 0 }, Y5 = S.createContext({ update: NaN });

 var K5 = class extends ye { constructor() { super(...arguments), T(this, "observers", []), T(this, "state", X5), T(this, "taskAdded", !1), T(this, "frameTask", () => { this.setState({ update: this.state.update + 1 }), this.taskAdded = !1 }), T(this, "observer", () => { this.taskAdded || (this.taskAdded = !0, HC.addFrameTask(this.frameTask)) }) } componentWillUnmount() { this.observers.map(e => e()), mm.reset() } render() { let { children: e } = this.props;

 return this.observers.map(t => t()), this.observers = [], mm._stores.forEach(t => { let n = mm.addObserver(t, this.observer);

 this.observers.push(n) }), k(Y5.Provider, { value: { ...this.state }, children: e }) } }, h9 = eo(Au(), 1);

 var PR = "__framer__", Q5 = PR.length;

 function Z5(e, t) { let n = {}, r = {};

 for (let i in e) { let o = IR(i);

 if (o && t.has(o)) { n[o] = e[i];

 continue } r[i] = e[i] } return [n, r] } function IR(e) { if (e.startsWith(PR)) return e.substr(Q5) } var _R = S.createContext(void 0);

 function J5(e, t, n) { let r = Jt.map(e, i => ht(i) ? dr(i, t) : i);

 return n ? r : k(rt, { children: r }) } function qu(e) { let t = ct(() => ez(e));

 return t.useSetup(e), t.cloneAsElement } function ez(e) { let t = { forwardedRef: e, childRef: null, ref: null };

 t.ref = Hw(t);

 let n = (s, a) => { if (!t.forwardedRef && t.forwardedRef === s) { t.ref = a;

 return } let l = !1;

 t.childRef !== a && (t.childRef = a, l = !0), t.forwardedRef !== s && (t.forwardedRef = s, l = !0), l && (t.ref = Hw(t)) }, r = !1;

 function i(s, a) { if (r) throw new ReferenceError("useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.");

 return r = !0, Jt.count(s) > 1 && e && (t.forwardedRef = void 0, t.ref = t.childRef), Jt.map(s, l => { if (ht(l)) { let c = "ref" in l ? l.ref : void 0;

 n(t.forwardedRef, c);

 let u = Qt(a) ? a(l.props) : a;

 return dr(l, t.ref !== c ? { ...u, ref: t.ref } : u) } return l }) } let o = function (a, l) { return k(rt, { children: i(a, l) }) };

 return o.cloneAsArray = i, { useSetup: s => { r = !1, n(s, t.childRef) }, cloneAsElement: o } } function Hw(e) { if (!e.forwardedRef) return e.childRef;

 let { forwardedRef: t, childRef: n } = e;

 return r => { Ow(n, r), Ow(t, r) } } var tz = S.createContext(void 0), nz = "style[data-framer-css-ssr-minified]", rz = (() => { var e;

 if (!Or()) return new Set;

 let t = (e = document.querySelector(nz)) == null ? void 0 : e.getAttribute("data-framer-components");

 return t ? new Set(t.split(" ")) : new Set })(), iz = "data-framer-css-ssr", MR = (e, t, n) => S.forwardRef((r, i) => {
    let { sheet: o, cache: s } = S.useContext(tz) ?? {}, a = n;

 if (!Or()) {
        Qt(t) && (t = t(se.current()));

 let l = Array.isArray(t) ? t.join(`
`) : t;

 return de(rt, { children: [k("style", { [iz]: !0, "data-framer-component": a, dangerouslySetInnerHTML: { __html: l } }), k(e, { ...r, ref: i })] })
    } return et(() => {
        if (a && rz.has(a)) return;

 (Qt(t) ? t(se.current()) : Array.isArray(t) ? t : t.split(`
`)).forEach(c => c && ZC(c, o, s))
    }, []), k(e, { ...r, ref: i })
}), Rg = S.createContext(void 0), OR = "ssr-variant";

 function Ww(e, t, n, r, i, o, s, a) { let l = S.Children.toArray(t), c = l[0];

 if (l.length !== 1 || !S.isValidElement(c)) return console.warn("PropertyOverrides: expected exactly one React element for a child", t), s(t, n);

 let u = [], f = [];

 for (let [v] of Object.entries(r)) { if (v === i) continue;

 let b = e[v];

 if (!b || !sz(c.props, b)) { f.push(v);

 continue } let g = Uw([v], o);

 g.length && u.push({ variants: g, propOverrides: b }) } if (u.length === 0) return s(c, n);

 let d = [i, ...f], h = Uw(d, o);

 h.length && u.unshift({ variants: h });

 let p = [];

 for (let { variants: v, propOverrides: b } of u) { if (a && !v.includes(a)) continue;

 let g = v.join("+"), m = k(Rg.Provider, { value: { primaryVariantId: i, variants: new Set(v) }, children: s(c, b ? { ...n, ...b } : n) }, g), y = oz(v, o, r);

 y.length ? (A(u.length > 1, "Must branch out when there are hiddenClassNames"), m = k("div", { className: `${OR} ${y.join(" ")}`, children: m }, g)) : A(u.length === 1, "Cannot branch out when hiddenClassNames is empty"), p.push(m) } return A(!a || p.length === 1, "Must render exactly one branch when activeVariantId is given"), p } function LR(e) { return e.split("-")[2] } function oz(e, t, n) { let r = [];

 for (let [i, o] of Object.entries(n)) { let s = t && !t.has(i);

 e.includes(i) || s || r.push(`hidden-${LR(o)}`) } return r } function Uw(e, t) { return t ? e.filter(n => t.has(n)) : e } function sz(e, t) { for (let n of Object.keys(t)) if (!qa(e[n], t[n], !0)) return !0;

 return !1 } function az(e, t, n) { return !n || !e ? t : { ...t, ...n[e] } } var lz = S.forwardRef(function ({ breakpoint: t, overrides: n, children: r, ...i }, o) { let s = qu(o), a = S.useContext(Rg), l = rA(), c = ct(() => l.current ? Or() ? 1 : 2 : 0), u = S.useContext(_R);

 if (!u) return console.warn("PropertyOverrides is missing GeneratedComponentContext"), s(r, i);

 let { primaryVariantId: f, variantClassNames: d } = u, h = a?.primaryVariantId === f ? a?.variants : void 0;

 switch (c) { case 0: return s(r, az(t, i, n));

 case 1: return Ww(n, r, i, d, f, h, s, t);

 case 2: return Ww(n, r, i, d, f, h, J5, void 0);

 default: Ce(c) } }), T9 = MR(lz, `.${OR} { display: contents }`, "PropertyOverrides"), gu = "default", cz = new Set([gu]), vu, uz = class { constructor() { T(this, "entries", new Map), Fn(this, vu, {}) } set(e, t, n, r) { switch (t) { case "transformTemplate": { A(typeof n == "string", `transformTemplate must be a string, received: ${n}`), this.setHash(e, r, { transformTemplate: n, legacy: !0 });

 break } case "initial": case "animate": { A(typeof n == "object", `${t} must be a valid object, received: ${n}`), this.setHash(e, r, { [t]: n, legacy: !0 });

 break } default: break } } setHash(e, t = gu, n) { let r = this.entries.get(e) ?? {}, i = r[t] ?? {};

 r[t] = n === null ? null : { ...i, ...n }, this.entries.set(e, r) } variantHash(e, t) { if (e === t?.primaryVariantId) return gu;

 let n = fe(this, vu)[e];

 if (n) return n;

 let r = t?.variantClassNames[e];

 return r ? fe(this, vu)[e] = LR(r) : gu } setAll(e, t = cz, n, r) { var i;

 if (n === null) { for (let c of t) this.setHash(e, this.variantHash(c, r), null);

 return } let o = Qt(n.transformTemplate) ? (i = n.transformTemplate) == null ? void 0 : i.call(n, {}, dz) : void 0, s = n.__framer__presenceInitial ?? n.initial, a = n.__framer__presenceAnimate ?? n.animate, l = { initial: ue(s) ? s : void 0, animate: ue(a) ? a : void 0, transformTemplate: re(o) ? o : void 0 };

 for (let c of t) this.setHash(e, this.variantHash(c, r), l) } clear() { this.entries.clear() } toObject() { return Object.fromEntries(this.entries) } };

 vu = new WeakMap;

 var fz = new uz;

 function F9(e) { return S.forwardRef(({ optimized: t, ...n }, r) => { var i;

 let o = S.useContext(_R), s = (i = S.useContext(Rg)) == null ? void 0 : i.variants, a = n[hz];

 a && !Or() && fz.setAll(a, s, t ? n : null, o);

 let l = VR(n);

 return k(e, { ref: r, ...n, ...l }) }) } var dz = "__Appear_Animation_Transform__";

 var hz = "data-framer-appear-id", P9 = "data-framer-appear-animation", VR = e => { if (Qa()) return { animate: Gw(e.animate) ? e.animate : void 0, initial: Gw(e.initial) ? e.initial : void 0, exit: void 0 } };

 function Gw(e) { return re(e) || Array.isArray(e) } var Rn = ["opacity", "x", "y", "scale", "rotate", "rotateX", "rotateY", "skewX", "skewY", "transformPerspective"], Fu = e => ({ x: Ye(e?.x ?? 0), y: Ye(e?.y ?? 0), opacity: Ye(e?.opacity ?? 1), scale: Ye(e?.scale ?? 1), rotate: Ye(e?.rotate ?? 0), rotateX: Ye(e?.rotateX ?? 0), rotateY: Ye(e?.rotateY ?? 0), skewX: Ye(e?.skewX ?? 0), skewY: Ye(e?.skewY ?? 0), transformPerspective: Ye(e?.transformPerspective ?? 0) }), Ge = { x: 0, y: 0, scale: 1, opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, skewX: 0, skewY: 0, transformPerspective: 0 };

 function AR(e) { return e in Ge } var ds = { willChange: "transform" };

 Object.freeze(ds);

 var hs = {};

 Object.freeze(hs);

 function DR(e, t) { let n = ct(() => ({ values: Fu(t ? e : void 0) }));

 return S.useEffect(() => { if (!t) for (let r of Rn) { let i = Ge[r];

 ut(i) || n.values[r].set(i) } }, [t]), n } var pz = new Set(["loopEffectEnabled", "loopTransition", "loop", "loopRepeatType", "loopRepeatDelay", "loopPauseOffscreen"]), mz = () => { let e = _();

 return V(() => () => { clearTimeout(e.current) }, []), async t => new Promise(n => { e.current = setTimeout(() => { n(!0) }, t * 1e3) }) };

 function gz({ loopEffectEnabled: e, loopRepeatDelay: t, loopTransition: n, loopRepeatType: r, loop: i, loopPauseOffscreen: o }, s) { let a = Ci(), l = ct(Fu), c = _(!1), u = mz(), f = $(async () => { if (!i) return;

 let w = n || void 0, R = c.current && r === "mirror", E = R ? Ge : i, I = R ? i : Ge;

 return c.current = !c.current, Promise.all(Rn.map(P => { if (!(a && P !== "opacity")) return l[P].set(I[P] ?? Ge[P]), new Promise(z => { let H = { ...w, onComplete: () => z() }, O = E[P] ?? I[P];

 typeof O == "number" && er(l[P], O, H) }) })) }, [i, r, n, a]), [d, h] = Se(!1), p = _(!1), v = $(async () => { !e || !p.current || (await f(), await u(t ?? 0), await v()) }, [f, u, e, t]), b = $(() => { p.current || (p.current = !0, Ze(() => h(!0)), v()) }, [v]), g = $((w = !0) => { Rn.forEach(R => { l[R].stop() }), Rn.forEach(R => { l[R].set(Ge[R]) }), c.current = !1, w && (p.current = !1, Ze(() => h(!1))) }, []), m = e && i, y = $(() => { document.hidden ? g(!1) : p.current && (p.current = !1, b()) }, [b, g]);

 V(() => { if (m) return document.addEventListener("visibilitychange", y), () => { document.removeEventListener("visibilitychange", y) } }, [m, y]), V(() => { m && o || (m ? b() : g()) }, [b, g, o, m]), V(() => () => g(), []);

 let x = $(w => { w.isIntersecting ? b() : g() }, [b, g]);

 gR(s, x, { enabled: m && o });

 let C = d || !o;

 return q(() => ({ values: l, style: m && C ? ds : hs }), [m, C]) } function vz(e, t, n, r, i) { let o = n / 100 - 1, s = i ? (t - r) * o : 0, a = -e * o;

 return s + a } var yz = new Set(["speed", "adjustPosition", "offset", "parallaxTransformEnabled"]);

 function bz(e, t, n) { let { speed: r = 100, offset: i = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e, a = S.useRef(null), l = Ci(), c = S.useCallback(p => a.current === null || r === 100 ? 0 : vz(p, a.current, r, i, o), [r, i, o]), { scrollY: u } = xb(), f = Ot(u, c), d = Jn(o && a.current === null ? "hidden" : n), h = Jn(0);

 return Yi(t, p => { p !== null && (Q.read(() => { var v;

 a.current = ((v = p.getBoundingClientRect()) == null ? void 0 : v.top) ?? 0 }), Q.update(() => { f.set(c(u.get())), o && d.set(n ?? "initial") })) }, [o]), zu(() => f.set(0)), { values: { y: l || !s ? h : f }, style: s ? { ...ds, visibility: d } : hs } } function xz(e) { if (!(re(e) || !ue(e))) return e?.transition } function gm(e, t, n, r, i, o) { let s = xz(e);

 return Promise.all(Rn.map(a => new Promise(l => { if (n && a !== "opacity") return l();

 let c = t.values[a];

 c.stop();

 let u = ue(e) ? e?.[a] ?? Ge[a] : Ge[a];

 if (Be(u) && (u = u.get()), !Ee(u)) return l();

 let f = Qn.get(r.current);

 f && f.setBaseTarget(a, u);

 let d;

 if (re(i) && !c?.hasAnimated && be.MotionHandoffAnimation) { let h = be.MotionHandoffAnimation(i, a, Q);

 h && (d = h) } o ? c.set(u) : er(c, u, { ...s, velocity: 0, startTime: d, onComplete: () => l() }) }))) } var Sz = new Set(["presenceInitial", "presenceAnimate", "presenceExit"]);

 function wz({ initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: o }, s, a, l, c) { let u = r ?? e, f = i ?? t, d = o ?? n, [h, p] = Sd(), v = _({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }), b = ct(() => { let y = u ?? l;

 if (!ue(y)) return { values: Fu() };

 let x = {};

 for (let C in y) { let w = ue(y) ? y[C] : void 0;

 Ee(w) && (x[C] = w) } return { values: Fu(x) } });

 Yi(s, y => { let { hasMounted: x } = v.current;

 if (x && f) return;

 let C = Qn.get(y);

 if (C) { Object.assign(v.current, { hasMounted: !0 });

 for (let w in b.values) { if (!AR(w)) continue;

 let R = l?.[w];

 C.setBaseTarget(w, Ee(R) ? R : Ge[w]) } } }, [f]);

 let g = Ci();

 Yi(s, y => { if (!a) { p?.();

 return } if (y === null) return;

 if (h !== v.current.lastPresence) { Object.assign(v.current, { lastPresence: h }), h ? u && f && (Object.assign(v.current, { running: !0 }), gm(f, b, g, s, c).then(() => Object.assign(v.current, { running: !1 }))) : d ? (Object.assign(v.current, { running: !0 }), gm(d, b, g, s, c).then(() => Object.assign(v.current, { running: !1 })).then(() => p())) : p();

 return } let { lastAnimate: x, running: C } = v.current;

 qa(f, x) || !f || (Object.assign(v.current, { lastAnimate: f }), gm(f, b, g, s, c, !C).then(() => Object.assign(v.current, { running: !1 }))) });

 let m = a && f;

 return q(() => ({ values: b.values, style: m ? ds : hs }), [m]) } function kz(e, t) { let n = 0, r = e;

 for (;

 r && r !== t && r instanceof HTMLElement;

)n += r.offsetTop, r = r.offsetParent;

 return n } var Cz = 1;

 function Tg(e, t = 0, n) { var r;

 let i = [], o = [];

 for (let s = e.length;

 s >= 0;

 s--) { let { ref: a, offset: l } = e[s] ?? {};

 if (!a || !a.current) continue;

 let u = kz(a.current, document.documentElement) - Cz - (l ?? 0) - t, f = ((r = a.current) == null ? void 0 : r.clientHeight) ?? 0, d = i[i.length - 1], h = Math.max(u + f, 0);

 i.push(u), o.unshift(Math.max(u, 0), d === void 0 ? h : Math.min(h, Math.max(d - 1, 0))), n?.(s) } return o } function Rz(e, t = 0) { return e < t ? "up" : "down" } var Tz = 4;

 function zR(e, t, n = {}) { let { direction: r, target: i } = e ?? {}, { repeat: o = !0, enabled: s = !0 } = n, a = fg();

 S.useEffect(() => { if (!r || !s) return;

 let l = a, c, u = 0, f, d;

 return yr(({ y: h }) => { if (!o && d === i || h.current > h.scrollLength || h.current < 0) return;

 let p = Rz(h.current, c);

 c = h.current;

 let v = p !== f;

 if (f = p, v) u = h.current;

 else { if (Math.abs(h.current - u) < Tz) return;

 let g = p === r ? i : void 0;

 g !== d && t(g), d = g } }) }, [a, r, o, i, s, t]) } var Ez = new Set(["threshold", "animateOnce", "opacity", "targetOpacity", "x", "y", "scale", "transition", "rotate", "rotateX", "rotateY", "perspective", "enter", "exit", "animate", "styleAppearEffectEnabled", "targets", "scrollDirection"]), Fz = ["animate", "animate"], qw = { inputRange: [], outputRange: [] };

 function Pz(e, t, n) { let r = Tg(e, t), i = [...Fz], o = r[0];

 if (!Ee(o)) return qw;

 if (o > 1 && (r.unshift(0, o - 1), i.unshift("initial", "initial")), n) { let s = r.length - 1, a = r[s];

 if (!Ee(a)) return qw;

 r.push(a + 1), i.push("exit") } return { inputRange: r, outputRange: i } } function vm(e) { return { x: e?.x ?? Ge.x, y: e?.y ?? Ge.y, scale: e?.scale ?? Ge.scale, opacity: e?.opacity ?? Ge.opacity, transformPerspective: e?.transformPerspective ?? Ge.transformPerspective, rotate: e?.rotate ?? Ge.rotate, rotateX: e?.rotateX ?? Ge.rotateX, rotateY: e?.rotateY ?? Ge.rotateY, skewX: e?.skewX ?? Ge.skewX, skewY: e?.skewY ?? Ge.skewY, transition: e?.transition ?? void 0 } } function Iz({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: o, ...s }) { return S.useMemo(() => ({ initial: r ?? vm({ ...s, opacity: e ?? t ?? 1, transformPerspective: n }), animate: o ?? vm({ opacity: t }), exit: i ?? vm() }), [o, s, r, i, e, t, n]) } function _z(e, t) { let n = Ci(), r = Iz(e), i = e.styleAppearEffectEnabled, o = DR(i ? r.initial : r.animate, i), s = S.useRef({ isPlaying: !1, scheduledAppearState: void 0, lastAppearState: !e.styleAppearEffectEnabled }), a = fg(), l = S.useRef(), c = S.useCallback(async ({ transition: h, ...p }, v) => { let b = h ?? r.animate.transition ?? e.transition;

 await l.current;

 let g = Qn.get(t.current);

 l.current = Promise.all(Rn.map(m => { v && o.values[m].set(r.initial[m] ?? Ge[m]);

 let y = p[m] ?? Ge[m];

 return g && typeof y != "object" && g.setBaseTarget(m, y), new Promise(x => { if (n && m !== "opacity") Ee(y) && o.values[m].set(y), x();

 else { let C = { restDelta: m === "scale" ? .001 : void 0, ...b, onComplete: () => x() };

 typeof y == "number" && er(o.values[m], y, C) } }) })) }, []), u = e.animateOnce && s.current.lastAppearState === !0, f = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !u;

 vR(t, h => { let { isPlaying: p, lastAppearState: v } = s.current;

 if (p) { s.current.scheduledAppearState = h;

 return } s.current.scheduledAppearState = void 0, s.current.lastAppearState = h, v !== h && c(h ? r.animate : r.exit, h) }, { enabled: f, animateOnce: !!e.animateOnce, threshold: { y: e.threshold } });

 let d = e.targets && i && !e.scrollDirection;

 return S.useEffect(() => { if (!d) return;

 let h = { initial: !0 }, p = a, v = "initial";

 return yr(({ y: b }) => { let { targets: g } = e;

 if (!g || !g[0] || g[0].ref && !g[0].ref.current) return;

 let { inputRange: m, outputRange: y } = Pz(g, (e.threshold ?? 0) * b.containerLength, !!e.exit);

 if (m.length === 0 || m.length !== y.length) return;

 let x = yo(b.current, m, y);

 if (e.animateOnce && h[x] || (h[x] = !0, v === x)) return;

 v = x;

 let C = Ne(r)[x];

 C && c(C) }) }, [a, d]), zR(e.scrollDirection, h => c(h ?? r.animate), { enabled: i, repeat: !e.animateOnce }), zu(() => { var h;

 if (i && !(!e.targets && !e.scrollDirection)) for (let p of Rn) o.values[p].set(((h = r.initial) == null ? void 0 : h[p]) ?? Ge[p]) }), q(() => ({ values: o.values, style: i ? ds : hs }), [i]) } var Mz = new Set(["transformViewportThreshold", "styleTransformEffectEnabled", "transformTargets", "spring", "transformTrigger"]), Xw = (e, t) => { var n;

 let r = (n = e?.[0]) == null ? void 0 : n.target;

 return t ? { opacity: r?.opacity ?? 1 } : r }, BR = () => ({ opacity: [], x: [], y: [], scale: [], rotate: [], rotateX: [], rotateY: [], skewX: [], skewY: [], transformPerspective: [] });

 function Oz(e, t) { let n = S.useRef({});

 S.useEffect(() => { if (t !== void 0) for (let r of Gi(e)) { let i = e[r];

 i.attach((o, s) => { let a = n.current[r];

 if (a && a.stop(), n.current[r] = sd({ keyframes: [i.get(), o], velocity: i.getVelocity(), ...t, restDelta: .001, onUpdate: s }), !Xe.isProcessing) { let l = performance.now() - Xe.timestamp;

 l < 40 && (n.current[r].time = l / 1e3) } return i.get() }) } }, [JSON.stringify(t)]) } function Lz(e, t) { let n = BR();

 return { inputRange: Tg(e, t, i => { var o, s, a;

 let l = (o = e[i - 1]) == null ? void 0 : o.target, c = (s = e[i]) == null ? void 0 : s.target;

 for (let u of Rn) (a = n[u]) == null || a.unshift(l?.[u] ?? 0, c?.[u] ?? 0) }), effectKeyOutputRange: n } } function Vz(e) { var t;

 let n = BR();

 for (let { target: r } of e) for (let i of Rn) (t = n[i]) == null || t.push(r[i]);

 return n } var Yw = [0, 1];

 function Az({ transformTrigger: e, styleTransformEffectEnabled: t, transformTargets: n, spring: r, transformViewportThreshold: i = 0 }, o) { let s = Ci(), a = DR(Xw(n, s), t), l = !t || !n, c = e === "onScrollTarget", u = fg();

 return ze(() => { if (!(l || !c)) return yr(({ y: f }) => { if (!n[0] || n[0].ref && !n[0].ref.current) return;

 let { inputRange: d, effectKeyOutputRange: h } = Lz(n, i * f.containerLength);

 if (d.length !== 0) for (let p of Rn) s && p !== "opacity" || d.length === h[p].length && h[p][0] !== void 0 && a.values[p].set(yo(f.current, d, h[p])) }) }, [s, c, i, n, l]), Yi(o, f => { if (l || c || f === null) return;

 let d = u, h = Vz(n);

 return yr(({ y: p }) => { for (let v of Rn) s && v !== "opacity" || Yw.length === h[v].length && h[v][0] !== void 0 && a.values[v].set(yo(p.progress, Yw, h[v])) }, e === "onInView" ? { target: f ?? void 0, offset: ["start end", "end end"] } : void 0) }, [u, s, e, c, n, l]), Oz(a.values, r), zu(() => { if (l) return;

 let f = Xw(n, s);

 for (let d of Rn) a.values[d].set(f?.[d] ?? Ge[d]) }), S.useMemo(() => ({ values: a.values, style: t ? ds : hs }), [t]) } var $R = { parallax: yz, styleAppear: Ez, styleTransform: Mz, loop: pz, presence: Sz }, Dz = Gi($R);

 function Kw(e, t, n) { return !(e in n) && t in n || n[e] === !0 } function zz(e) { let t = { parallax: {}, styleAppear: {}, styleTransform: {}, presence: { animate: e.animate, initial: e.initial, exit: e.exit }, loop: {}, forwardedProps: {} };

 for (let n in e) { let r = IR(n);

 if (r) for (let i of Dz) { let o = $R[i];

 if (o?.has(r)) { t[i][r] = Ne(e)[n];

 break } } else t.forwardedProps[n] = Ne(e)[n] } return t.parallax.parallaxTransformEnabled = Kw("parallaxTransformEnabled", "speed", t.parallax), t.styleAppear.styleAppearEffectEnabled = Kw("styleAppearEffectEnabled", "animateOnce", t.styleAppear), t } var ui = e => e.reduce((t, n) => t += n, 0), Qw = e => e.reduce((t, n) => t = t * n, 1), Bz = "current";

 function $z(e) { return ue(e) && Bz in e } function Nz(e, t) { if (!e || !ue(e)) return t;

 for (let n in e) { let r = e[n];

 !Be(r) || !AR(n) || Ee(r.get()) && t[n].push(r) } } function ym(e) { return re(e) || Array.isArray(e) } var z9 = e => S.forwardRef((t, n) => { var r;

 if (t.__withFX) return k(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });

 let i = VR(t);

 if (i) return k(e, { ...t, ...i, ref: n });

 let { parallax: o = {}, styleAppear: s = {}, styleTransform: a = {}, presence: l = {}, loop: c = {}, forwardedProps: u } = zz(t), { __targetOpacity: f, __perspectiveFX: d, __smartComponentFX: h = !1 } = t, p = Jn(f ?? 1), v = kg(n), { values: b, style: g } = wz(l, v, h, t.style, t[Fl]), { values: m, style: y } = bz(o, v, (r = t.style) == null ? void 0 : r.visibility), { values: x, style: C } = Az(a, v), { values: w, style: R } = _z(s, v), { values: E, style: I } = gz(c, v), P = S.useMemo(() => ({ scale: [w.scale, E.scale, b.scale, x.scale], opacity: [w.opacity, E.opacity, b.opacity, p, x.opacity], x: [w.x, E.x, b.x, x.x], y: [w.y, E.y, m.y, b.y, x.y], rotate: [w.rotate, E.rotate, b.rotate, x.rotate], rotateX: [w.rotateX, E.rotateX, b.rotateX, x.rotateX], rotateY: [w.rotateY, E.rotateY, b.rotateY, x.rotateY], skewX: [w.skewX, E.skewX, b.skewX, x.skewX], skewY: [w.skewY, E.skewY, b.skewY, x.skewY], transformPerspective: [x.transformPerspective, w.transformPerspective] }), [p, x, m, w, E, b]);

 Nz(t.style, P);

 let z = Ot(P.scale, Qw), H = Ot(P.opacity, Qw), O = Ot(P.x, ui), X = Ot(P.y, ui), W = Ot(P.rotate, ui), ie = Ot(P.rotateX, ui), U = Ot(P.rotateY, ui), Y = Ot(P.skewX, ui), le = Ot(P.skewY, ui), me = Ot(P.transformPerspective, ui), { drag: B, dragConstraints: K } = u;

 r4(B && $z(K) ? K : void 0);

 let Z = { opacity: H, scale: z, x: O, y: X, rotate: W, rotateX: ie, rotateY: U, skewX: Y, skewY: le };

 ut(d) && (Z.transformPerspective = me);

 let Fe = ym(t.animate) ? t.animate : void 0, we = ym(t.initial) ? t.initial : void 0, Ie = ym(t.exit) ? t.exit : void 0, _e = h && !l.presenceInitial ? { initial: we, animate: Fe, exit: Ie } : {};

 return k(e, { ...u, ..._e, __withFX: !0, style: { ...t.style, ...y, ...C, ...I, ...Z, ...R, ...g }, values: b, ref: v }) });

 var jz = pe({});

 function N9({ presets: e, children: t }) { let n = _(e);

 return qa(e, n.current, !1) || (n.current = e), k(jz.Provider, { value: n.current, children: t }) } var NR = S.createContext({});

 function W9() { return S.useContext(NR) } var U9 = S.forwardRef(function ({ width: t, height: n, y: r, children: i, ...o }, s) { let a = S.useMemo(() => ({ width: t, height: n, y: r }), [t, n, r]), l = qu(s);

 return k(NR.Provider, { value: a, children: l(i, o) }) }), Hz = e => S.forwardRef((t, n) => { let r = us(t);

 return k(e, { layoutId: r, ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n }) }), jR = !1, Wz = class extends ye {
    constructor() { super(...arguments), T(this, "state", { error: void 0 }) } static getDerivedStateFromError(e) { return { error: e } } componentDidCatch(e, t) {
        if (!Zw(e)) return;

 let n = t?.componentStack;

 console.error(`Caught an error in SynchronousSuspenseErrorBoundary:

`, e, `

Component stack:
`, n, `

This error indicates a state update wasn\u2019t wrapped with startTransition. Some of the UI might flash as a result. If you are the author of this website, check recently added custom code, and if the issue persists, report it to the Framer team via https://www.framer.community/.`);

 let r = e instanceof Error && typeof e.stack == "string" ? e.stack : void 0;

 mi("published_site_load_recoverable_error", { message: String(e), stack: r, componentStack: r ? void 0 : n })
    } render() { let e = this.state.error;

 if (e === void 0) return this.props.children;

 if (!Zw(e)) throw e;

 return jR = !0, this.props.children }
};

 function Zw(e) { return e instanceof Error && (e.message.includes("A component suspended while responding to synchronous input.") || e.message.includes("Minified React error #426")) } var Uz = typeof F < "u" ? new Promise(() => { }) : null;

 function Gz() { if (typeof F > "u" || jR) return k("div", { hidden: !0, dangerouslySetInnerHTML: { __html: "<!-- SuspenseThatPreservesDOM fallback rendered -->" } });

 throw Uz } var qz = k(Gz, {});

 function Eg({ children: e }) { return k(vi, { fallback: qz, children: e }) } function Xz() { return k("div", { hidden: !0, dangerouslySetInnerHTML: { __html: "<!-- Code boundary fallback rendered -->" } }) } var HR = k(Xz, {});

 function Fg(e, t) { if (!Zi || Math.random() > .01) return;

 let n = e instanceof Error && typeof e.stack == "string" ? e.stack : null, r = t?.componentStack;

 mi("published_site_load_recoverable_error", { message: String(e), stack: n, componentStack: n ? void 0 : r }) } function jm(...e) { console.error(...e) } function WR() { return se.current() !== se.canvas } function UR({ errorMessage: e, fallback: t, children: n }) { return WR() ? k(Kz, { fallback: t, children: k(Yz, { fallback: t, errorMessage: e, children: n }) }) : n } var Yz = class extends ye { constructor() { super(...arguments), T(this, "state", { hasError: !1 }) } static getDerivedStateFromError() { return { hasError: !0 } } componentDidCatch(e, t) { jm(this.props.errorMessage, t?.componentStack), Fg(e, t) } render() { let { children: e, fallback: t = HR } = this.props, { hasError: n } = this.state;

 return n ? t : e } };

 function Kz({ children: e, fallback: t = HR }) { return typeof F > "u" ? k(vi, { fallback: t, children: e }) : k(Eg, { children: e }) } var Qz = class extends ye { constructor() { super(...arguments), T(this, "state", { hasError: !1 }) } componentDidCatch(e, t) { let n = t?.componentStack;

 console.error("Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.", n), this.setState({ hasError: !0 }), Fg(e, t) } render() { let { children: e } = this.props, { hasError: t } = this.state;

 return t ? null : e } }, GR = S.createContext(void 0);

 function Xu() { return S.useContext(GR) } function Zz() { let e = Xu();

 return S.useMemo(() => { if (!e) return;

 let n = e;

 for (;

 n.parent && n.parent.level > 0;

)n = n.parent;

 return n }, [e]) } function Jz({ children: e, scopeId: t, nodeId: n }) { let r = Xu(), i = S.useMemo(() => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }), [t, n, r]);

 return k(GR.Provider, { value: i, children: e }) } var eB = "code-crash:";

 function tB(e, t) { return `${eB}${e}:${t}` } function nB(e, t) { return qR("component", e, t) } function Jw(e, t) { return qR("override", e, t) } function qR(e, t, n) { return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${tB(t, n)} \u2192 click \u201CShow Layer\u201D.` } function rB(e, t, n, r, i, o) { let s = XR(e, t, n, o);

 return s && !i && r || s && i } function iB(e, t, n, r) { return XR(e, t, n, r) } function XR(e, t, n, r) { return !!(ut(n) || n === 1 && r && e === t) } function YR(e, t, n, r, i, o) { let s = Xu();

 return ut(t) || ut(n) ? k(Qz, { children: e }) : (rB(t, s?.scopeId, s?.level, r ?? !1, i ?? !1, o ?? !1) && (e = k(UR, { errorMessage: nB(t, n), fallback: null, children: e })), i && (e = k(Jz, { scopeId: t, nodeId: n, children: e })), e) } var oB = S.forwardRef(({ children: e, layoutId: t, as: n, scopeId: r, nodeId: i, isAuthoredByUser: o, isModuleExternal: s, inComponentSlot: a, ...l }, c) => { let u = ct(() => t ? `${t}-container` : void 0), f = cs(n), d = S.Children.map(e, p => S.isValidElement(p) ? S.cloneElement(p, { layoutId: t }) : p), h = YR(d, r, i, o, s, a);

 return k(f, { layoutId: u, ...l, ref: c, children: k(fs.Provider, { value: !0, children: k(QA, { enabled: !1, children: k(hb, { id: t ?? "", inherit: "id", children: h }) }) }) }) }), s7 = Hz(oB), a7 = S.forwardRef((e, t) => { let { as: n, children: r, scopeId: i, nodeId: o, isAuthoredByUser: s, rendersWithMotion: a, isModuleExternal: l, inComponentSlot: c, ...u } = e, f = YR(r, i, o, s, l, c), d = e.as ?? "div";

 if (e.rendersWithMotion) { let h = cs(d);

 return k(h, { ...u, ref: t, style: e.style, children: f }) } else { let h = d, { layoutId: p, layoutDependency: v, ...b } = u;

 return k(h, { ...b, ref: t, style: e.style, children: f }) } }), Pg = pe({ onRegisterCursors: () => () => { }, registerCursors: () => { } }), Pu = "framer-cursor-none", Hm = "framer-pointer-events-none";

 function sB(e, t, n) { let r = {};

 for (let [, i] of e) for (let o of i) { let s = r[o] ?? t[o] ?? n[o];

 s && (r[o] = s) } return r } var aB = rl(function ({ children: t }) { let n = ct(() => { let i = new Set, o = {}, s = new Map;

 return { onRegisterCursors: a => (a(o), i.add(a), () => i.delete(a)), registerCursors: (a, l) => { s.set(l, Object.keys(a)), o = sB(s, o, a);

 for (let c of i) c(o);

 return () => { s.delete(l) } } } }), r = Ci();

 return de(Pg.Provider, { value: n, children: [t, !r && k(dB, {})] }) }), lB = MR(aB, [`.${Pu}, .${Pu} * { cursor: none !important;

 }`, `.${Hm}, .${Hm} * { pointer-events: none !important;

 }`], "framer-lib-cursors-host"), cB = { position: "fixed", top: 0, left: 0, zIndex: 13, pointerEvents: "none" };

 function uB(e) { return !(!e || e.placement || e.alignment) } function du(e) { switch (e) { case "start": return "0%";

 case "center": return "-50%";

 case "end": return "-100%";

 default: Ce(e) } } function fB(e, t = "center") { switch (e) { case "top": return `${du(t)}, -100%`;

 case "right": return `0%, ${du(t)}`;

 case "bottom": return `${du(t)}, 0%`;

 case "left": return `-100%, ${du(t)}`;

 default: return "-50%, -50%" } } var ek = "data-framer-portal-id";

 function tk(e, t) { let n = document.elementFromPoint(e, t);

 for (;

 n;

) { if (n === document.body) return;

 let r = n.getAttribute("data-framer-cursor");

 if (r) return r;

 if (n.hasAttribute(ek)) { let i = n.getAttribute(ek);

 n = n.parentElement, i && (n = document.getElementById(i) ?? n) } else n = n.parentElement } } function nk(e) { for (let t in e) return !1;

 return !0 } var dB = rl(function () { let { onRegisterCursors: t } = L(Pg), [n, r] = Se(!1), i = Jn(0), o = Jn(0), s = Jn(0), a = _(null), l = _({ cursors: {}, cursorHash: void 0 }), c = Uu();

 ze(() => { let R = be.matchMedia("(any-hover: none)");

 function E(I) { I.matches ? Ze(() => r(!1)) : r(!0) } return R.addEventListener("change", E), R.matches || r(!0), () => { R.removeEventListener("change", E) } }, []), V(() => { if (!n) return;

 let R = 0, E = 0;

 function I() { i.set(R), o.set(E), er(s, 1, { type: "tween", duration: .2 }) } let P = () => { if (nk(l.current.cursors)) return;

 let O = tk(R, E);

 O !== l.current.cursorHash && (l.current.cursorHash = O, Q.update(() => c())) };

 function z(O) { if (O.pointerType === "touch") { Tt(P);

 return } Q.read(P, !0), R = O.clientX, E = O.clientY, Q.update(I) } function H(O) { if (O.target === a.current || !a.current) return;

 let X = new PointerEvent(O.type, { bubbles: !0, cancelable: O.cancelable, pointerType: O.pointerType, pointerId: O.pointerId, composed: O.composed, isPrimary: O.isPrimary, buttons: O.buttons, button: O.button });

 Q.update(() => { var W;

 (W = a.current) == null || W.dispatchEvent(X) }) } return be.addEventListener("pointermove", z), document.addEventListener("pointerdown", H), document.addEventListener("pointerup", H), Q.read(P, !0), () => { be.removeEventListener("pointermove", z), document.removeEventListener("pointerdown", H), document.removeEventListener("pointerup", H), Tt(P) } }, [s, i, o, c, n]), V(() => { if (!n) return;

 function R() { er(s, 0, { type: "tween", duration: .2 }) } return document.addEventListener("mouseleave", R), be.addEventListener("blur", R), () => { document.removeEventListener("mouseleave", R), be.removeEventListener("blur", R) } }, [s, n]), ze(() => { function R(I) { l.current.cursors = I, l.current.cursorHash = nk(I) ? null : tk(i.get(), o.get()), c() } let E = t(R);

 return () => { E(), document.body.classList.toggle(Pu, !1) } }, [i, o, t, c]);

 let { cursors: u, cursorHash: f } = l.current, d = f ? u[f] : null, h = uB(d);

 ze(() => { n && document.body.classList.toggle(Pu, h) }, [h, n]);

 let p = d?.component, v = d?.transition ?? { duration: 0 }, b = Ad(i, v), g = Ad(o, v), m = Ot(() => { var R;

 return b.get() + (((R = d?.offset) == null ? void 0 : R.x) ?? 0) }), y = Ot(() => { var R;

 return g.get() + (((R = d?.offset) == null ? void 0 : R.y) ?? 0) }), x = d?.alignment, C = d?.placement, w = $((R, E) => `translate(${fB(C, x)}) ${E}`, [x, C]);

 return !n || !d || !p ? null : k(p, { transformTemplate: w, style: { ...cB, x: m, y, opacity: s }, globalTapTarget: !0, variant: d?.variant, ref: a, className: Hm }) });

 function u7(e) { let { registerCursors: t } = L(Pg), n = ct(() => e), r = hr();

 ze(() => t(n, r), [t, r]) } var g7 = class extends ye {
    constructor() { super(...arguments), T(this, "state", { error: void 0 }), T(this, "message", "Made UI non-interactive due to an error"), T(this, "messageFatal", "Fatal error"), T(this, "messageReport", "If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/") } static getDerivedStateFromError(e) { return { error: e } } componentDidCatch(e) {
        if (F.__framer_hadFatalError = !0, "cause" in e && (e = e.cause), console.error(`${ja ? this.message : this.messageFatal}. ${this.messageReport}. Error:

`, e), Math.random() > .5) return;

 let n = e instanceof Error && typeof e.stack == "string" ? e.stack : null;

 mi("published_site_load_error", { message: String(e), stack: n })
    } render() { var e, t;

 let n = this.state.error;

 if (!n) return this.props.children;

 let r = "cause" in n ? n.cause : n, i = /-->/gu, o = "--!>", s = ja && ((e = document.getElementById("main")) == null ? void 0 : e.innerHTML) || "";

 return k("div", { style: { display: "contents" }, suppressHydrationWarning: !0, dangerouslySetInnerHTML: { __html: `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${r.message.replace(i, o)}". ${this.messageReport}: --><!-- Stack: ${(t = n.stack) == null ? void 0 : t.replace(i, "--!>")} -->` + s } }) }
}, Ig = class KR { constructor(t) { this.resolver = t, T(this, "status") } static is(t) { return t instanceof KR } preload() { if (this.status) { let n = this.status;

 return n.type !== "pending" ? void 0 : n.promise } let t = this.resolver().then(n => { this.status = { type: "fulfilled", value: n } }, n => { this.status = { type: "rejected", error: n } });

 return this.status = { type: "pending", promise: t }, t } read() { let t = this.status;

 if (!t) throw new Error("Need to call preload() before read()");

 switch (t.type) { case "pending": throw new Error("Need to wait for preload() to resolve");

 case "fulfilled": return t.value;

 case "rejected": throw t.error;

 default: Ce(t) } } async readAsync() { let t = this.preload();

 return t && await t, this.read() } use() { let t = this.preload();

 if (t) throw t;

 return this.read() } }, QR = S.createContext(void 0), y7 = QR.Provider, _g = () => S.useContext(QR) ?? {};

 function Yu(e, t) { return e instanceof HTMLAnchorElement ? e : e instanceof Element ? e === t ? null : Yu(e.parentElement, t) : null } var Iu = new Set;

 function bm() { for (let e of Iu) e();

 Iu.clear() } var hB = be.scheduler && "yield" in be.scheduler, pB = be.scheduler && "postTask" in be.scheduler;

 function mB(e = !1) { return new Promise(t => { if (Iu.add(t), document.visibilityState === "visible") { document.addEventListener("visibilitychange", bm), document.addEventListener("pagehide", bm), requestAnimationFrame(async () => { let n = () => { Iu.delete(t), t() };

 e ? hB ? (await scheduler.yield(), n()) : pB ? scheduler.postTask(n) : setTimeout(n, 0) : setTimeout(n, 1) });

 return } bm() }) } function gB({ children: e }) { return k(Eg, { children: e }) } function ZR(e) { return xe(function (n, r) { return k(gB, { children: k(e, { ...n, ref: r }) }) }) } var vB = "webPageId";

 function Ki(e) { return !!(e && typeof e == "object" && vB in e) } var yB = 500, bB = .9, xB = 1.7, SB = 4, wB = 1 / 0, Xo = new WeakMap, hu = new Set, Yo = new Map;

 function kB() { var e;

 let t = Me.connection || Me.mozConnection || Me.webkitConnection || {}, n = Me.deviceMemory && Me.deviceMemory > xB, r, i, o;

 function s() { r = t.effectiveType || "", i = t.saveData || r.includes("2g"), o = r === "3g" || n ? SB : wB } (e = t.addEventListener) == null || e.call(t, "change", s), s();

 let a = new IntersectionObserver(u, { threshold: bB }), l = 0;

 async function c(f, d) { if (i) return;

 let h = Yo.get(f);

 if (!h?.size || hu.has(f)) return;

 ++l, hu.add(f);

 let p = iC(f).catch(() => { });

 a.unobserve(d), Xo.delete(d);

 for (let v of h) a.unobserve(v), Xo.delete(v);

 h.clear(), Yo.delete(f), await p, --l } function u(f) { var d;

 for (let h of f) { let p = h.target, v = Xo.get(p);

 if (!v || hu.has(v)) { a.unobserve(p), Xo.delete(p);

 continue } let b = Yo.get(v), g = ((d = Yo.get(v)) == null ? void 0 : d.size) ?? 0;

 if (h.isIntersecting) { if (l >= o) continue;

 b ? b.add(p) : Yo.set(v, new Set([p])), setTimeout(c.bind(void 0, v, p), yB) } else b && b.delete(p), g <= 1 && Yo.delete(v) } } return (f, d) => { if (!hu.has(f)) return Xo.set(d, f), a.observe(d), () => { Xo.delete(d), a.unobserve(d) } } } var CB = !pg || typeof IntersectionObserver > "u" ? null : kB(), xm = Symbol("noLocale"), pu = new Map;

 function JR(e, t, n) { var r, i;

 let o = (i = (r = pu?.get(n?.id ?? xm)) == null ? void 0 : r.get(e.collectionId)) == null ? void 0 : i.get(e.collectionItemId);

 if (o) return o;

 let s = pu.get(n?.id ?? xm) ?? new Map;

 pu.set(n?.id ?? xm, s);

 let a = s.get(e.collectionId) ?? new Map;

 s.set(e.collectionId, a);

 let l = new Ig(async () => { try { let c = t[e.collectionId];

 if (!c) throw new Error(`Key not found in collection utils for collection id: "${e.collectionId}"`);

 let u = await c();

 if (!u) throw new Error("Collection does not contain utility functions");

 return await u.getSlugByRecordId(e.collectionItemId, n ?? void 0) } catch (c) { console.warn(`Failed to resolve slug: ${c instanceof Error ? c.message : "Unknown error"}`);

 return } });

 return a.set(e.collectionItemId, l), l } function RB(e, t, n, r) { let i = [];

 function o(a) { if (!a || !n) return;

 let l = {};

 for (let c in a) { let u = a[c];

 A(u, "unresolvedSlug should be defined");

 let f = JR(u, n, r), d = f.preload();

 if (d) i.push(d);

 else { let h = f.read();

 h && (l[c] = h) } } return l } let s = { path: o(e), hash: o(t) };

 if (i.length) throw Promise.allSettled(i);

 return s } function Mg(e) { return e === void 0 ? !1 : !!(e.startsWith("#") || e.startsWith("/") || e.startsWith(".")) } function _u(e, t) { try { return !!new URL(e).protocol } catch { } return t } function TB(e, t, n, r, i) { let { webPageId: o, hash: s, pathVariables: a, hashVariables: l, unresolvedHashSlugs: c, unresolvedPathSlugs: u } = n, f = RB(u, c, e.collectionUtils, r);

 return FB(e, t, o, s, i, a, l, f) } function EB(e, t, n) { if (!(!e.routes || !e.getRoute || !Mg(t))) try { let [i, o] = t.split("#", 2);

 A(i !== void 0, "A href must have a defined pathname.");

 let [s] = i.split("?", 2);

 A(s !== void 0, "A href must have a defined pathname.");

 let { routeId: a, pathVariables: l } = DC(e.routes, s), c = e.getRoute(a);

 if (c) { let u = Object.assign({}, n, l);

 return { routeId: a, route: c, href: t, elementId: o, pathVariables: u } } } catch { } } function FB(e, t, n, r, i, o, s, a) { var l;

 let c = { ...i, ...o, ...a?.path }, u = { ...i, ...s, ...a?.hash }, f = (l = e.getRoute) == null ? void 0 : l.call(e, n), d = Nu(f, { currentRoutePath: t?.path, currentPathVariables: t?.pathVariables, hash: r, pathVariables: c, hashVariables: u, preserveQueryParams: e.preserveQueryParams, siteCanonicalURL: e.siteCanonicalURL }), h = d.split("#", 2)[1];

 return { routeId: n, route: f, href: d, elementId: h, pathVariables: c } } function eT(e, t, n) { var r;

 if (re(e)) { let o = Mg(e);

 if (!t.routes || !t.getRoute || !n || !o) return;

 let [s] = e.split("#", 2);

 if (s === void 0) return;

 let [a] = s.split("?", 2);

 if (a === void 0) return;

 let { routeId: l } = DC(t.routes, a);

 return t.getRoute(l) } let { webPageId: i } = e;

 return (r = t.getRoute) == null ? void 0 : r.call(t, i) } var rk = "element", PB = "collection", IB = "collectionItemId", _B = "pathVariables", tT = "framer/page-link,";

 function nT(e) { return re(e) && e.startsWith(`data:${tT}`) } function Og(e) { if (nT(e)) try { let t = new URL(e), n = t.pathname.substring(tT.length), r = t.searchParams, i = r.has(rk) ? r.get(rk) : void 0, o, s = r.get(PB), a = r.get(IB), l = r.get(_B);

 if (s && a && l) { let c = Object.fromEntries(new URLSearchParams(l).entries());

 o = { collection: s, collectionItemId: a, pathVariables: c } } return { target: n === "none" ? null : n, element: i === "none" ? void 0 : i, collectionItem: o } } catch { return } } function MB(e, t, n) { var r;

 let i = t.getAttribute("data-framer-page-link-target"), o, s;

 if (i) { o = t.getAttribute("data-framer-page-link-element") ?? void 0;

 let l = t.getAttribute("data-framer-page-link-path-variables");

 l && (s = Object.fromEntries(new URLSearchParams(l).entries())) } else { let l = t.getAttribute("href");

 if (!l) return !1;

 let c = Og(l);

 if (!c || !c.target) return !1;

 i = c.target, o = c.element ?? void 0, s = (r = c.collectionItem) == null ? void 0 : r.pathVariables } let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;

 return e(i, o, Object.assign({}, n, s), a), !0 } function os(e) { if (!nT(e)) return e;

 let t = Og(e);

 if (!t) return;

 let { target: n, element: r, collectionItem: i } = t;

 if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: OB(i) } } function OB(e) { if (!e) return;

 let t = {};

 for (let n in e.pathVariables) { let r = e.pathVariables[n];

 r && (t[n] = r) } return t } var rT = /:([a-z]\w*)/gi, LB = pe(void 0);

 function iT() { var e;

 let t = L(LB), n = (e = gi()) == null ? void 0 : e.pathVariables;

 return t || n } function oT(e, { webPageId: t, hash: n, pathVariables: r }, i) { if (t !== e.id || n) return !1;

 if (e.path && e.pathVariables) { let o = Object.assign({}, i, r);

 for (let [, s] of e.path.matchAll(rT)) if (!s || e.pathVariables[s] !== o[s]) return !1 } return !0 } function yu(e, t = void 0, n) { let r = Mg(e), i = Lg(t, r), o = r ? void 0 : "noopener";

 return e = e === "" || _u(e, r) ? e : `https://${e}`, n ? { href: e, target: i, rel: o, onClick() { n(e) } } : { href: e, target: i, rel: o } } function Lg(e, t) { return e !== void 0 ? e ? "_blank" : void 0 : t ? void 0 : "_blank" } function Ia(e) { var t, n;

 return `${e.scopeId}:${e.nodeId}:${(t = e.furthestExternalComponent) == null ? void 0 : t.scopeId}:${(n = e.furthestExternalComponent) == null ? void 0 : n.nodeId}` } var VB = class { constructor() { T(this, "collectedLinks", new Map), T(this, "nestingInfo", new Map) } clear() { this.collectedLinks.clear(), this.nestingInfo.clear() } getLinks() { let e = new Map;

 for (let [t, n] of this.nestingInfo) { let r = this.collectedLinks.get(t);

 A(r, `Outer link not found: ${t}`);

 let i = Array.from(n).map(o => { let s = this.collectedLinks.get(o);

 return A(s, `Inner link not found: ${o}`), s });

 e.set(r, i) } return e } collectNestedLink(e, t) { if (Zi && !yg() || !e.nodeId || !t.nodeId) return;

 this.collectedLinks.set(Ia(e), e), this.collectedLinks.set(Ia(t), t);

 let n = this.nestingInfo.get(Ia(e)) ?? new Set;

 n.add(Ia(t)), this.nestingInfo.set(Ia(e), n) } }, AB = new VB;

 function Ku() { return se.current() === se.canvas } var ik = pe(void 0);

 function DB(e, t, n, r, i, o) { let s = L(ik), a = Zz(), l = q(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: a }), [t, n, a]), c = Qi(), u = gi(), f = q(() => { let y = Ki(r) ? r : os(r);

 if (y) return eT(y, c, u) }, [u, r, c]), { replaceNestedLinks: d } = _g(), h = Ku(), p = !!(d && !h && s?.nodeId && l.nodeId), v = $(y => { var x;

 if (!i.href) return;

 if (y.preventDefault(), y.stopPropagation(), /Mac|iPod|iPhone|iPad/u.test(Me.userAgent) ? y.metaKey : y.ctrlKey) { mu(i.href, "", "_blank");

 return } f ? (x = i.navigate) == null || x.call(i) : mu(i.href, i.rel, i.target) }, [i, f]), b = $(y => { i.href && (y.preventDefault(), y.stopPropagation(), mu(i.href, "", "_blank")) }, [i]), g = $(y => { var x;

 i.href && y.key === "Enter" && (y.preventDefault(), y.stopPropagation(), f ? (x = i.navigate) == null || x.call(i) : mu(i.href, i.rel, i.target)) }, [i, f]);

 Yi(o, y => { y !== null && p && (y.dataset.hydrated = "true") }, [p]);

 let m = e;

 return p && (Jt.forEach(e, y => { sk(y) && (A(ok(s), "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"), A(ok(l), "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"), AB.collectNestedLink(s, l)) }), m = Jt.map(e, y => { if (!sk(y)) return y;

 let x = Mu(y.type), { children: C, ...w } = y.props, R = { ...w, "data-nested-link": !0, role: "link", tabIndex: 0, onClick: v, onAuxClick: b, onKeyDown: g, as: w.as && Mu(w.as) }, E = "ref" in y ? y.ref : void 0;

 return no(x, { ...R, ref: E }, C) })), k(ik.Provider, { value: l, children: m }) } function ok(e) { return !ut(e?.nodeId) } function sk(e) { return ht(e) && (Mu(e.type) !== e.type || Mu(e.props.as) !== e.props.as) } function mu(e, t, n) { let r = document.createElement("a");

 r.href = e, t && (r.rel = t), n && (r.target = n), document.body.appendChild(r), r.click(), r.remove() } function Mu(e) { return e === "a" ? "span" : Dl(e) && Bd(e) === "a" ? Ht.span : e } function zB({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) { return $(async o => { var s, a, l, c, u;

 if (!((s = n.pageviewEventData) != null && s.current)) return;

 let f = n.pageviewEventData.current, d = Ki(r) ? r : os(r);

 if (!Ki(d)) return mi("published_site_click", { ...f, href: o ? ak(o) : null, nodeId: e ?? null, trackingId: t ?? null, targetRoutePath: null, targetWebPageId: null, targetCollectionItemId: null }, "eager");

 let h = d.webPageId, p = (a = n?.getRoute) == null ? void 0 : a.call(n, h), v = p?.path ?? null, b = null;

 if (p?.collectionId && d.pathVariables && ((l = n.collectionUtils) != null && l[p.collectionId])) { let g = await ((u = (c = n.collectionUtils)[p.collectionId]) == null ? void 0 : u.call(c)), [m] = Object.values(d.pathVariables);

 g && typeof m == "string" && (b = await g.getRecordIdBySlug(m, i || void 0) ?? null) } return mi("published_site_click", { ...f, href: o ? ak(o) : null, nodeId: e ?? null, trackingId: t ?? null, targetRoutePath: v, targetWebPageId: h, targetCollectionItemId: b }, "eager") }, [e, t, n, r, i]) } function ak(e) { try { let t = new URL(e, be.document.baseURI);

 return t.origin === be.location.origin ? t.pathname + t.search + t.hash : t.href } catch { return e } } function Vg(e, t, n, r, i) { var o, s;

 let a = (o = e.getRoute) == null ? void 0 : o.call(e, t);

 a && lg(a?.page) && a.page.preload(), (s = e.navigate) == null || s.call(e, t, n, r, i) } function sT(e, t, n, r, i, o, s) { return async a => { let l = a.metaKey, c = Yu(a.target), u = !c || c.getAttribute("target") === "_blank", f = !l && !u;

 f && a.preventDefault(), await mB(), r(n), f && Vg(e, t, i, o, s) } } function BB(e, t, n, r, i, o, s) { if (!r) return yu(e, t, i);

 let a = EB(n, e, o);

 if (!a) return yu(e, t, i);

 let { routeId: l, route: c, elementId: u, pathVariables: f } = a;

 if (!c) return yu(e, t, i);

 let d = Nu(c, { currentRoutePath: r.path, currentPathVariables: r.pathVariables, hash: u, pathVariables: f, preserveQueryParams: n.preserveQueryParams && !ja, siteCanonicalURL: n.siteCanonicalURL }), h = Lg(t, !0);

 return { href: d, target: h, onClick: sT(n, l, d, i, u, f, s), navigate: () => Vg(n, l, u, f, s), "data-framer-page-link-current": !u && r.id === l || void 0 } } var E7 = ZR(xe(function ({ children: t, href: n, openInNewTab: r, smoothScroll: i, clickTrackingId: o, nodeId: s, scopeId: a, motionChild: l, ...c }, u) { let f = Qi(), d = gi(), h = iT(), { activeLocale: p } = ju(), v = zB({ nodeId: s, clickTrackingId: o, router: f, href: n, activeLocale: p }), b = q(() => { if (!n) return {};

 let E = Ki(n) ? n : os(n);

 if (!E) return {};

 if (re(E)) return BB(E, r, f, d, v, h, i);

 let { routeId: I, href: P, elementId: z, pathVariables: H } = TB(f, d, E, p, h), O = Lg(r, !0);

 return { href: P, target: O, onClick: sT(f, I, P, v, z, H, i), navigate: () => Vg(f, I, z, H, i), "data-framer-page-link-current": d && oT(d, E, h) || void 0 } }, [n, f, p, h, r, d, i, v]), g = ht(t) && "ref" in t, m = kg(g ? t.ref : void 0);

 Yi(m, E => { var I;

 if (E === null) return;

 let P = Ki(n) ? n : os(n);

 if (!P) return;

 let z = eT(P, f, d);

 if (z) return (I = CB) == null ? void 0 : I(z, E) }, [d, n, f]);

 let y = t, { navigate: x, ...C } = b, w = !!x;

 return y = qu(u).cloneAsArray(y, E => $B(E, { ...c, ...NB(C, l, w) }, m)), y = DB(y, a, s, n, b, m), y }));

 function $B(e, t, n) { let r = { ...e, ...t, ref: n }, { onTap: i, onClick: o } = t;

 if (!i && !o) return r;

 let { onClick: s, onTap: a } = e;

 return { ...r, onClick: o || s ? l => { Qt(s) && s?.(l), o?.(l) } : void 0, onTap: i || a ? (l, c) => { Qt(a) && a?.(l, c), i?.(l, c) } : void 0 } } function NB(e, t, n) { if (!!!(t && J3())) return e;

 let { onClick: i, ...o } = e;

 return i ? n ? { ...o, onTap: i, onClick: jB } : { ...o, onTap: i } : e } function jB(e) { let t = Yu(e.target);

 !t || t.getAttribute("target") === "_blank" || e.preventDefault() } function lk(e, t, n, r, i) { let o = Ki(e) ? e : os(e);

 if (!Ki(o)) return re(e) ? yu(e).href : void 0;

 if (!t.getRoute || !t.currentRouteId) return;

 let s = t.getRoute(t.currentRouteId), { webPageId: a, hash: l, pathVariables: c, hashVariables: u, unresolvedHashSlugs: f, unresolvedPathSlugs: d } = o, h = t.getRoute(a), p = d || f ? i?.(d, f) : void 0, v = Object.assign({}, t.currentPathVariables, n, c, p?.path), b = Object.assign({}, t.currentPathVariables, n, u, p?.hash);

 return Nu(h, { currentRoutePath: s?.path, currentPathVariables: t.currentPathVariables, hash: l, pathVariables: v, hashVariables: b, relative: !1, preserveQueryParams: t.preserveQueryParams, onlyHash: r, siteCanonicalURL: t.siteCanonicalURL }) } var HB = class extends ye { constructor() { super(...arguments), T(this, "state", { error: void 0 }) } static getDerivedStateFromError(e) { return { error: e } } render() { return this.state.error ? null : this.props.children } };

 var Ag = S.createContext(void 0);

 function WB(e, t) { if (e.routeId !== t.routeId) return !1;

 if (e.pathVariables === t.pathVariables) return !0;

 let n = e.pathVariables || {}, r = t.pathVariables || {};

 return n.length === r.length && Object.keys(n).every(i => n[i] === r[i]) } function UB({ abTestId: e, framerSiteId: t, routeId: n, routePath: r, collectionItemId: i, localeCode: o }) { return { abTestId: e, framerSiteId: t, routePath: r || "/", collectionItemId: i, framerLocale: o, webPageId: n } } var GB = (e, t, n, r, i) => { let o = L(Ag), s = _(), a = _(!0);

 return V(() => { let l = async () => { var u;

 let f = null;

 if (e?.collectionId && r && n) { let d = await ((u = r[e.collectionId]) == null ? void 0 : u.call(r)), [h] = Object.values(n);

 d && typeof h == "string" && (f = await d.getRecordIdBySlug(h, i || void 0) ?? null) } return UB({ abTestId: e?.abTestId, framerSiteId: o ?? null, routeId: e?.abTestingVariantId ?? t, routePath: e?.path, collectionItemId: f, localeCode: i?.code || null }) };

 (async () => { if (s.current = await l(), a.current) { a.current = !1;

 return } mi("published_site_pageview", s.current, "eager") })();

 let c = async u => { u.persisted && (s.current = await l(), mi("published_site_pageview", s.current, "eager")) };

 return F.addEventListener("pageshow", c), () => { F.removeEventListener("pageshow", c) } }, [e, t, n, r, i, o]), s }, ck = "default";

 function qB() { let [e, t] = S.useState(0);

 return [e, S.useCallback(() => t(n => n + 1), [])] } function uk(e, t, n) { let r = e && document.getElementById(e);

 if (r) { ZB(r, t);

 return } n || F.scrollTo(0, 0) } function XB(e) { let t = _([]);

 return ze(() => { var n;

 (n = t.current) != null && n.length && (t.current.forEach(r => r()), t.current = []) }, [e]), $(n => { t.current.push(n) }, []) } function YB() { let e = ZV(), t = pC(), n = _(void 0);

 return $(async (r, i, o, s = !0) => { var a, l;

 nA();

 let c = o !== void 0;

 (a = n.current) == null || a.abort();

 let u = s ? new AbortController : void 0;

 n.current = u;

 let f = u?.signal, { hasRendered: d, hasLoaded: h, localized: p } = r, v = t("framer-route-change", { cached: d, preloaded: d ? void 0 : h, localized: p ?? void 0 }), b = eC(f);

 if (v.finally(b), !c) return n.current = void 0, i(f), v;

 let g, m = new Promise((x, C) => { g = x, f?.addEventListener("abort", C) }).catch(Cu);

 if (await Xa({ priority: "user-blocking", signal: f }).catch(Cu), i(f), e(m, o, u), await v, f?.aborted) return;

 let y = (l = F.navigation) == null ? void 0 : l.transition;

 g();

 try { await y?.finished } catch (x) { console.error("Navigation transition failed", x) } f?.aborted || hC() }, [t, e]) } function KB({ defaultPageStyle: e, disableHistory: t, initialPathVariables: n, initialRoute: r, notFoundPage: i, collectionUtils: o, routes: s, initialLocaleId: a, locales: l = dV, preserveQueryParams: c = !1, LayoutTemplate: u, editorBar: f, siteCanonicalURL: d }) { iA(), qV({ disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: a });

 let h = fC(), [p, v] = qB(), b = XB(p), g = YB(), m = _(r), y = _(n), x = _(a), C = x.current, w = q(() => l.find(({ id: B }) => C ? B === C : B === ck) ?? null, [C, l]), R = q(() => ({ activeLocale: w, locales: l, setLocale: async B => { let K;

 re(B) ? K = B : ue(B) && (K = B.id);

 let Z = l.find(({ id: _e }) => _e === ck), Fe = l.find(({ id: _e }) => _e === K);

 if (!Fe) return;

 let we = m.current, Ie = s[we];

 if (Ie) try { let _e = await QV({ currentLocale: w, nextLocale: Fe, route: Ie, routeId: we, defaultLocale: Z, pathVariables: y.current, collectionUtils: o, preserveQueryParams: c });

 if (!_e) return;

 let Re = y.current, Bt = UV(F.history.state) ? F.history.state.paginationInfo : void 0, kt = _e.path;

 y.current = _e.pathVariables, x.current = Fe.id, g({ localized: !0 }, () => { h(we, we, () => Ze(v), !0) }, async (oe = !1) => { if (kt) return mC({ routeId: we, pathVariables: Re, localeId: Fe.id, paginationInfo: Bt }, kt, !1, oe) }, !1) } catch { } } }), [w, o, v, l, c, s, g, h]), E = $((B, K, Z, Fe, we, Ie = !1, _e) => { var Re;

 let Bt = m.current;

 if (m.current = B, y.current = Fe, x.current = K, b(() => { uk(Z, Ie, we) }), we) { Ze(v);

 return } let kt = (Re = s[B]) == null ? void 0 : Re.page, fr = lg(kt);

 g(fr ? kt.getStatus() : hV, oe => { h(Bt, B, () => Ze(v), !0, oe) }, _e, !0) }, [v, b, g, h, s]);

 XV(m, E);

 let I = $(async (B, K, Z, Fe) => { var we;

 let Ie = s[B];

 if (Z) { let oe = new Set, Zt = Ie?.path ?? "/";

 for (let En of Zt.matchAll(qi)) { let hn = En[1];

 if (hn === void 0) throw new Error("A matching path variable should not be undefined");

 oe.add(hn) } Z = Object.fromEntries(Object.entries(Z).filter(([En]) => oe.has(En))) } let _e = Bu(Ie, K), Re = y.current, Bt = x.current;

 if (WB({ routeId: m.current, pathVariables: Re }, { routeId: B, pathVariables: Z })) { let oe = s[B];

 ((we = F.history.state) == null ? void 0 : we.hash) !== K && !t && oe && await ow(B, oe, { currentRoutePath: oe.path, currentPathVariables: Re, pathVariables: Z, hash: K, localeId: Bt, preserveQueryParams: c, siteCanonicalURL: d }, !0), uk(_e, Fe, !1);

 return } if (!Ie) return;

 let kt = s[m.current];

 E(B, Bt, _e, Z, !1, Fe, t ? void 0 : async (oe = !1) => ow(B, Ie, { currentRoutePath: kt?.path, currentPathVariables: Re, hash: K, pathVariables: Z, localeId: Bt, preserveQueryParams: c, siteCanonicalURL: d }, !1, oe)) }, [s, E, t, c, d]), P = Qk(s), z = m.current, H = y.current, O = s[z], X = O?.path, W = GB(O, z, H, o, w), ie = q(() => ({ navigate: I, getRoute: P, currentRouteId: z, currentPathVariables: H, routes: s, collectionUtils: o, preserveQueryParams: c, pageviewEventData: W, siteCanonicalURL: d }), [I, P, z, H, s, o, c, d, W]);

 if (!O) throw new Error(`Router cannot find route for ${z}`);

 let U = !w || !O.includedLocales || O.includedLocales.includes(w.id), Y = X && H ? sC(X, H) : X, le = String(C) + Y, me = ct(() => ({ ...e, display: "contents" }));

 return k(aV, { api: ie, children: k(gC.Provider, { value: R, children: k(Wz, { children: de(Eg, { children: [de(uA, { notFoundPage: i, defaultPageStyle: e, forceUpdateKey: p, children: [k(aw.Start, {}), k(QB, { LayoutTemplate: u, routeId: z, style: e, children: B => k(pn, { children: U ? Am(O.page, B ? me : e) : i && Am(i, e) }, le) })] }), f, k(tA, {}), k(aw.End, {})] }) }) }) }) } function QB({ LayoutTemplate: e, routeId: t, style: n, children: r }) { return e ? k(e, { routeId: t, style: n, children: r }) : r(!1) } function ZB(e, t) { let n = t ? { behavior: "smooth", block: "start", inline: "nearest" } : void 0;

 e.scrollIntoView(n) } function JB(e) { return new Promise((t, n) => { try { new URL(e);

 let r = new Image;

 r.onload = () => t(), r.onerror = n, r.src = e } catch (r) { n(r) } }) } function e$(e) { return typeof e == "object" && e !== null } function t$(e, t) { if (t === "") return e;

 let n = t.split(/[.[\]]+/u).filter(i => i.length > 0), r = e;

 for (let i of n) { if (!e$(r)) return;

 r = r[i] } return r } function _a(e) { return `${e.credentials}:${e.url}` } var n$ = { status: "loading", data: void 0 };

 function r$(e) { return re(e) && !Number.isNaN(Number(e)) } function i$(e, t) { switch (e) { case "string": return re(t) || Ee(t);

 case "color": return re(t);

 case "boolean": return dg(t);

 case "number": return Ee(t) || r$(t);

 case "link": case "image": return re(t) && _u(t, !1);

 default: { let n = e;

 return !1 } } } function o$(e, t) { if (e.status === "loading") return t.fallbackValue;

 if (e.status === "error") throw e.error;

 let n = t$(e.data, t.resultKeyPath);

 if (ut(n)) throw new Error(`Key '${t.resultKeyPath}' not found in response`);

 if (!i$(t.resultOutputType, n)) throw new Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);

 return n } function Sm(e, t) { if (se.current() === se.canvas) return !1;

 let n = t === 0 ? 500 : t * 1e3, r = Date.now(), i = e + n;

 return r >= i } var fk = () => { }, Ir, bu, $i, Ni, Ma, di, aT = class xu { constructor() { T(this, "responseValues", new Map), Fn(this, Ir, new Map), Fn(this, bu, new Set), Fn(this, $i, new Map), Fn(this, Ni, new Map), Fn(this, Ma, new Map), Fn(this, di, new Map), T(this, "persistCache", z5(() => { let t = {};

 for (let [n, r] of this.responseValues) { if (!r || r.status !== "success") continue;

 let i = fe(this, $i).get(n);

 if (!i || i === 0) continue;

 let o = fe(this, Ni).get(n);

 o && (o && Sm(o, i) || (t[n] = [o, i, r.data])) } try { localStorage.setItem(xu.cacheKey, JSON.stringify(t)) } catch { } }, 500)) } unmount() { for (let [t, n] of fe(this, di)) clearInterval(n), fe(this, di).delete(t) } stopQueryRefetching(t) { let n = _a(t), r = fe(this, di).get(n);

 r && (clearInterval(r), fe(this, di).delete(n)) } startQueryRefetching(t) { let n = _a(t), r = fe(this, di).get(n), i = fe(this, $i).get(n);

 if (r || !i) return;

 let o = be.setInterval(() => { if (document.visibilityState === "hidden") return;

 let s = fe(this, Ni).get(n);

 !i || !s || this.fetchWithCache({ ...t, cacheDuration: i }) }, i);

 fe(this, di).set(n, o) } hydrateCache() { try { let t = localStorage.getItem(xu.cacheKey);

 if (!t) return;

 let n = JSON.parse(t);

 if (typeof n != "object") throw new Error("Invalid cache data");

 for (let r in n) { let i = n[r];

 if (!Array.isArray(i) || i.length !== 3) throw new Error("Invalid cache data");

 let [o, s, a] = i;

 Sm(o, s) || (fe(this, Ni).set(r, o), fe(this, $i).set(r, s), this.responseValues.set(r, { status: "success", data: a })) } } catch { try { localStorage.removeItem(xu.cacheKey) } catch { } } } setResponseValue(t, n) { this.responseValues.set(t, n), this.persistCache();

 let r = fe(this, Ir).get(t);

 if (r) for (let i of r) i() } async prefetch(t) { if (!Or() || !_u(t.url, !1)) return;

 let n = _a(t);

 fe(this, bu).add(n), await this.fetchWithCache(t);

 let r = this.getValue(n);

 if (!r || r.status === "loading") throw new Error("Unexpected result status for prefetch");

 let i = fe(this, Ir).get(n);

 for (let s of i ?? []) s();

 let o = o$(r, t);

 return t.resultOutputType === "image" && re(o) && await JB(o).catch(fk), o } async fetchWithCache(t) { if (!Or()) return;

 let n = _a(t), r = fe(this, Ma).get(n);

 if (r) return r;

 let i = fe(this, Ni).get(n), o = i && Sm(i, t.cacheDuration);

 if (this.responseValues.has(n) && !o) return;

 this.responseValues.get(n) || this.setResponseValue(n, n$);

 let l = (async () => { try { let c = await fetch(t.url, { method: "GET", credentials: t.credentials });

 if (!c.ok) { this.setResponseValue(n, { status: "error", error: new Error("Invalid Response Status"), data: void 0 });

 return } let u = await c.json();

 this.setResponseValue(n, { status: "success", data: u }), fe(this, Ni).set(n, Date.now()) } catch (c) { this.setResponseValue(n, { status: "error", error: c, data: void 0 }) } })();

 return fe(this, Ma).set(n, l), l.finally(() => { fe(this, Ma).delete(n) }), l } getValue(t, n = !1) { if (!(n && !fe(this, bu).has(t))) return this.responseValues.get(t) } subscribe(t, n, r = !1) { let { url: i, cacheDuration: o } = t;

 if (!_u(i, !1)) return fk;

 let s = _a(t), a = fe(this, $i).get(s);

 (!a || o < a) && fe(this, $i).set(s, o), r || (this.startQueryRefetching(t), this.fetchWithCache(t));

 let l = fe(this, Ir).get(s) ?? new Set;

 return l.add(n), fe(this, Ir).set(s, l), () => { let c = fe(this, Ir).get(s);

 c && (c.delete(n), c.size === 0 && fe(this, Ir).delete(s), fe(this, Ir).size === 0 && this.stopQueryRefetching(t)) } } };

 Ir = new WeakMap;

 bu = new WeakMap;

 $i = new WeakMap;

 Ni = new WeakMap;

 Ma = new WeakMap;

 di = new WeakMap;

 T(aT, "cacheKey", "framer-fetch-client-cache");

 var s$ = aT, a$ = pe(void 0), l$ = pe(!0), c$ = ({ children: e, client: t }) => { let [n] = Se(() => t ?? new s$), [r, i] = Se(!0);

 return V(() => (n.hydrateCache(), Ze(() => { i(!1) }), () => n.unmount()), [n]), k(l$.Provider, { value: r, children: k(a$.Provider, { value: n, children: e }) }) }, u$, f$, d$, h$, p$;

 u$ = new WeakMap;

 f$ = new WeakMap;

 d$ = new WeakMap;

 h$ = new WeakMap;

 p$ = new WeakMap;

 function z7({ RootComponent: e, isWebsite: t, routeId: n, framerSiteId: r, pathVariables: i, routes: o, collectionUtils: s, notFoundPage: a, isReducedMotion: l = !1, includeDataObserver: c = !1, localeId: u, locales: f, preserveQueryParams: d, EditorBar: h, defaultPageStyle: p, disableHistory: v, LayoutTemplate: b, siteCanonicalURL: g }) { if (S.useEffect(() => { t || HC.start() }, []), t) return k(ub, { reducedMotion: l ? "user" : "never", children: k(c$, { children: k(lB, { children: k(Ag.Provider, { value: r, children: k(KB, { initialRoute: n, initialPathVariables: i, initialLocaleId: u, routes: o, collectionUtils: s, notFoundPage: a, locales: f, defaultPageStyle: p ?? { minHeight: "100vh", width: "auto" }, preserveQueryParams: d, editorBar: k(m$, { EditorBar: h }), disableHistory: v, LayoutTemplate: b, siteCanonicalURL: g }) }) }) }) });

 { let m = c ? K5 : S.Fragment;

 return k(m, { children: k(lV, { routes: o, children: k(D5, { children: S.isValidElement(e) ? e : S.createElement(e, { key: n }) }) }) }) } } function m$({ EditorBar: e }) { let t = _g(), [n, r] = Se(!1), i = L(Ag), o = q(() => { let s = {}, a;

 for (a in t) t.hasOwnProperty(a) && a.startsWith("editorBar") && (s[a] = t[a]);

 return s }, [t]);

 return V(() => { Ze(() => { r(!0) }) }, []), !e || !i || !n ? null : k(HB, { children: k(vi, { children: k(e, { framerSiteId: i, features: o }) }) }) } var $7 = ZR(xe(function ({ links: t, children: n, ...r }, i) { let o = Qi(), { activeLocale: s } = ju(), a = qu(i), l = [], c = t.map(f => { if (f) return re(f) ? lk(f, o) : lk(f.href, o, f.implicitPathVariables, f.refKey, (d, h) => { function p(v) { let b = {};

 for (let g in v) { let m = v[g];

 A(o.collectionUtils, "collectionUtils should be defined"), A(m, "unresolvedSlug be defined");

 let y = JR(m, o.collectionUtils, s), x = y.preload();

 if (x) l.push(x);

 else { let C = y.read();

 C && (b[g] = C) } } return b } return { path: p(d), hash: p(h) } }) });

 if (l.length > 0) throw Promise.allSettled(l);

 let u = n(c);

 return a(u, r) }));

 function g$(e) { return { trace(...t) { var n;

 return (n = lt.getLogger(e)) == null ? void 0 : n.trace(...t) }, debug(...t) { var n;

 return (n = lt.getLogger(e)) == null ? void 0 : n.debug(...t) }, info(...t) { var n;

 return (n = lt.getLogger(e)) == null ? void 0 : n.info(...t) }, warn(...t) { var n;

 return (n = lt.getLogger(e)) == null ? void 0 : n.warn(...t) }, error(...t) { var n;

 return (n = lt.getLogger(e)) == null ? void 0 : n.error(...t) } } } function v$(e) { return cT(e) || b$(e) } function y$(e) { return $u(e) && e.every(ue) } function lT(e) { return ue(e) && Qt(e.read) && Qt(e.preload) } function cT(e) { return y$(e) || lT(e) } function Dg(e) { return ue(e) && ue(e.schema) } function uT(e) { return ue(e) && ue(e.collectionByLocaleId) } function b$(e) { return Dg(e) || uT(e) } async function dk(e, t) { return lT(e) ? (await e.preload(t), e.read(t)) : e } var x$ = class { constructor(e, t) { this.collection = e, this.locale = t, T(this, "schema"), T(this, "indexes", []);

 let n = P3(e);

 A(n, "Collection does not have properties");

 let r = { id: { type: "string", isNullable: !1 } }, i = Object.entries(n);

 for (let [o, s] of i) { if (!s) continue;

 let a = s.type;

 A(a !== "array", "Array properties are not supported"), A(a !== "object", "Object properties are not supported"), r[o] = { type: a, isNullable: !0 } } this.schema = r } getDatabaseItem(e, t) { let n = {};

 for (let r in this.schema) { let i = e[r];

 if (pV(i)) continue;

 let o = this.schema[r];

 ut(o) || (A(o.type !== "unknown", "Invalid definition type"), n[r] = { type: o.type, value: i }) } return { pointer: t, data: n } } async resolveRichText(e) { if (Ig.is(e)) { let t = e.preload();

 return t && await t, e.read() } return e } async scanItems() { return (await dk(this.collection, this.locale)).map((t, n) => { let r = String(n);

 return this.getDatabaseItem(t, r) }) } async resolveItems(e) { let t = await dk(this.collection, this.locale);

 return e.map(n => { let r = Number(n), i = t[r];

 return A(i, "Can't find collection item"), this.getDatabaseItem(i, n) }) } compareItems(e, t) { return Number(e.pointer) - Number(t.pointer) } };

 function S$(e, t, n) { let r = e.value.length, i = t.value.length;

 if (r < i) return -1;

 if (r > i) return 1;

 for (let o = 0;

 o < r;

 o++) { let s = e.value[o], a = t.value[o], l = Hi(s, a, n);

 if (l !== 0) return l } return 0 } function w$(e, t) { switch (e?.type) { case "array": return { type: "array", value: e.value.map(r => Ae.cast(r, t.definition)) } }return null } function k$(e, t) { return e.value < t.value ? -1 : e.value > t.value ? 1 : 0 } function fT(e) { switch (e?.type) { case "boolean": return e;

 case "number": case "string": return { type: "boolean", value: !!e.value } }return null } function Lr(e) { let t = fT(e);

 return t?.value ?? !1 } function C$(e, t) { return e.value < t.value ? -1 : e.value > t.value ? 1 : 0 } function R$(e) { switch (e?.type) { case "color": return e }return null } function T$(e, t) { let n = new Date(e.value), r = new Date(t.value);

 return n < r ? -1 : n > r ? 1 : 0 } function E$(e) { switch (e?.type) { case "date": return e;

 case "number": case "string": { let t = new Date(e.value);

 return tC(t) ? { type: "date", value: t.toISOString() } : null } }return null } function F$(e, t) { return e.value < t.value ? -1 : e.value > t.value ? 1 : 0 } function P$(e) { switch (e?.type) { case "enum": return e;

 case "string": return { type: "enum", value: e.value } }return null } function I$(e, t) { return e.value < t.value ? -1 : e.value > t.value ? 1 : 0 } function _$(e) { switch (e?.type) { case "file": return e }return null } function M$(e, t) { let n = JSON.stringify(e.value), r = JSON.stringify(t.value);

 return n < r ? -1 : n > r ? 1 : 0 } function O$(e) { switch (e?.type) { case "link": return e;

 case "string": try { let { protocol: t } = new URL(e.value);

 return t === "http:" || t === "https:" ? { type: "link", value: e.value } : null } catch { return null } }return null } function L$(e, t) { return e.value < t.value ? -1 : e.value > t.value ? 1 : 0 } function dT(e) { switch (e?.type) { case "number": case "string": { let t = Number(e.value);

 return Number.isFinite(t) ? { type: "number", value: t } : null } }return null } function hT(e) { let t = dT(e);

 return t?.value ?? null } function V$(e, t, n) { let r = Object.keys(e.value).sort(), i = Object.keys(t.value).sort();

 if (r.length < i.length) return -1;

 if (r.length > i.length) return 1;

 for (let o = 0;

 o < r.length;

 o++) { let s = r[o], a = i[o];

 if (s < a) return -1;

 if (s > a) return 1;

 let l = e.value[s] ?? null, c = t.value[a] ?? null, u = Hi(l, c, n);

 if (u !== 0) return u } return 0 } function A$(e, t) { switch (e?.type) { case "object": { let n = {}, r = Object.entries(t.definitions);

 for (let [i, o] of r) { let s = e.value[i] ?? null;

 n[i] = Ae.cast(s, o) } return { type: "object", value: n } } }return null } function D$(e, t) { let n = JSON.stringify(e.value), r = JSON.stringify(t.value);

 return n < r ? -1 : n > r ? 1 : 0 } function z$(e) { switch (e?.type) { case "responsiveimage": return e }return null } function B$(e, t) { let n = e.value, r = t.value;

 return n < r ? -1 : n > r ? 1 : 0 } function $$(e) { switch (e?.type) { case "richtext": return e }return null } function N$(e, t, n) { let r = e.value, i = t.value;

 return n.type === 0 && (r = e.value.toLowerCase(), i = t.value.toLowerCase()), r < i ? -1 : r > i ? 1 : 0 } function pT(e) { switch (e?.type) { case "string": return e;

 case "number": return { type: "string", value: String(e.value) } }return null } function Ko(e) { let t = pT(e);

 return t?.value ?? null } var Ae = { cast(e, t) { switch (t.type) { case "array": return w$(e, t);

 case "boolean": return fT(e);

 case "color": return R$(e);

 case "date": return E$(e);

 case "enum": return P$(e);

 case "file": return _$(e);

 case "link": return O$(e);

 case "number": return dT(e);

 case "object": return A$(e, t);

 case "responsiveimage": return z$(e);

 case "richtext": return $$(e);

 case "string": return pT(e);

 case "unknown": return e;

 default: Ce(t, "Unsupported cast") } }, parse(e) { return dg(e) ? { type: "boolean", value: e } : tC(e) ? { type: "date", value: e.toISOString() } : Ee(e) ? { type: "number", value: e } : re(e) ? { type: "string", value: e } : $u(e) ? { type: "array", value: e.map(Ae.parse) } : null }, equal(e, t, n) { return e?.type !== t?.type ? !1 : Hi(e, t, n) === 0 }, lessThan(e, t, n) { return e?.type !== t?.type ? !1 : Hi(e, t, n) < 0 }, lessThanOrEqual(e, t, n) { return e?.type !== t?.type ? !1 : Hi(e, t, n) <= 0 }, greaterThan(e, t, n) { return e?.type !== t?.type ? !1 : Hi(e, t, n) > 0 }, greaterThanOrEqual(e, t, n) { return e?.type !== t?.type ? !1 : Hi(e, t, n) >= 0 }, in(e, t, n) { return t?.type !== "array" ? !1 : t.value.some(r => Ae.equal(r, e, n)) }, indexOf(e, t, n) { return e?.type !== "array" ? -1 : e.value.findIndex(r => Ae.equal(r, t, n)) }, contains(e, t, n) { let r = Ko(e), i = Ko(t);

 return Nn(r) || Nn(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(), i = i.toLowerCase()), r.includes(i)) }, startsWith(e, t, n) { let r = Ko(e), i = Ko(t);

 return Nn(r) || Nn(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(), i = i.toLowerCase()), r.startsWith(i)) }, endsWith(e, t, n) { let r = Ko(e), i = Ko(t);

 return Nn(r) || Nn(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(), i = i.toLowerCase()), r.endsWith(i)) }, length(e) { switch (e?.type) { case "array": return e.value.length }return 0 }, stringify(e) { if (e === null) return "null";

 switch (e.type) { case "array": return `[${e.value.map(Ae.stringify).join(", ")}]`;

 case "boolean": case "number": return String(e.value);

 case "string": return `'${e.value}'`;

 case "enum": return `'${e.value}' /* Enum */`;

 case "color": return `'${e.value}' /* Color */`;

 case "date": return `'${e.value}' /* Date */`;

 case "richtext": return "RichText";

 case "responsiveimage": return "ResponsiveImage";

 case "file": return "File";

 case "link": return re(e.value) ? `'${e.value}' /* Link */` : "Link";

 case "object": return "Object";

 default: Ce(e) } } };

 function Hi(e, t, n) { if (Nn(e) || Nn(t)) return A(e === t), 0;

 switch (e.type) { case "array": return A(e.type === t.type), S$(e, t, n);

 case "boolean": return A(e.type === t.type), k$(e, t);

 case "color": return A(e.type === t.type), C$(e, t);

 case "date": return A(e.type === t.type), T$(e, t);

 case "enum": return A(e.type === t.type), F$(e, t);

 case "file": return A(e.type === t.type), I$(e, t);

 case "link": return A(e.type === t.type), M$(e, t);

 case "number": return A(e.type === t.type), L$(e, t);

 case "object": return A(e.type === t.type), V$(e, t, n);

 case "responsiveimage": return A(e.type === t.type), D$(e, t);

 case "richtext": return A(e.type === t.type), B$(e, t);

 case "string": return A(e.type === t.type), N$(e, t, n);

 default: Ce(e) } } var hk = { type: "unknown", isNullable: !0 };

 function j$() { return 25 } function H$() { return 100 * 125 } var Ou = 1e3, ae = class Wm { constructor(t) { this.network = t } static estimate(t, n) { let r = j$(), i = H$(), o = t * r + n / i;

 return new Wm(o) } static max(t, n) { let r = Math.max(t.network, n.network);

 return new Wm(r) } static compare(t, n) { return t.network < n.network ? -1 : t.network > n.network ? 1 : 0 } add(t) { return this.network += t.network, this } toString() { return `${this.network}ms` } };

 var mT = class { constructor(e, t) { this.id = e, this.relational = t, T(this, "nodes", []), T(this, "winners", new Map) } addNode(e) { this.nodes.push(e), e.setGroup(this) } getWinner(e) { let t = e.getHash(), n = this.winners.get(t);

 if (n) return n;

 let r = new W$;

 return this.winners.set(t, r), r } getOptimized(e) { let t = this.getWinner(e);

 A(t.node, "Group not optimized");

 let n = t.node.getOptimized(e);

 return n.setGroup(this), n } }, W$ = class { constructor() { T(this, "node"), T(this, "cost", new ae(1 / 0)), T(this, "nodes", []) } update(e, t) { this.nodes.push(e), ae.compare(t, this.cost) < 0 && (this.node = e, this.cost = t) } };

 function gT(e) { let t = e.next();

 return A(t.done, "Generator must not yield"), t.value } async function Qu(e, t = e.next()) { for (;

 !t.done;

) { let n = await t.value;

 t = e.next(n) } return t.value } function* qe(e) { let t = {}, n = Object.keys(e), r = [];

 for (let i of n) { let o = e[i];

 if (nC(o)) { let s = o.next();

 s.done ? t[i] = s.value : r.push(Qu(o, s).then(a => { t[i] = a })) } else t[i] = o } return r.length > 0 && (yield Promise.all(r)), t } function* Lu(e) { let t = [], n = e.keys(), r = [];

 for (let i of n) { let o = e[i];

 if (nC(o)) { let s = o.next();

 s.done ? t[i] = s.value : r.push(Qu(o, s).then(a => { t[i] = a })) } else t[i] = o } return r.length > 0 && (yield Promise.all(r)), t } var vT = class { constructor(e) { this.isSynchronous = e } }, Tn = class extends vT { constructor() { super(...arguments), T(this, "group") } getGroup() { return A(this.group, "Node must be in a group"), this.group } setGroup(e) { A(!this.group, "Node is already in a group"), this.group = e } evaluateSync() { let e = this.evaluate(void 0);

 return gT(e) } evaluateAsync() { let e = this.evaluate(void 0);

 return Qu(e) } };

 function U$(e) { return ue(e) && Qt(e.getHash) } function ce(e, ...t) { let n = t.map(r => { let i = r instanceof bT;

 A(!i, "Pass CollectionMetadata.id instead");

 let o = r instanceof Oa;

 A(!o, "Pass FieldMetadata.id instead");

 let s = r instanceof xT;

 A(!s, "Pass IndexMetadata.id instead");

 let a = r instanceof Tn;

 A(!a, "Pass RelationalNode.group.id instead");

 let l = r instanceof mT;

 return A(!l, "Pass Group.id instead"), U$(r) ? r.getHash() : JSON.stringify(r) });

 return `${e}(${n.join(", ")})` } var zg = class { constructor(e, t) { this.data = e, this.pointer = t, T(this, "cached") } resolve() { return this.cached ??= this.data.resolveRichText(this.pointer), this.cached } }, ss = "index", yT = class extends Set { merge(e) { for (let t of e) this.add(t) } equals(e) { if (this === e) return !0;

 if (this.size !== e.size) return !1;

 for (let t of this) if (!e.has(t)) return !1;

 return !0 } subsetOf(e) { if (this === e) return !0;

 if (this.size > e.size) return !1;

 for (let t of this) if (!e.has(t)) return !1;

 return !0 } getHash() { let e = [];

 for (let t of this) e.push(t.id);

 return e.sort((t, n) => t - n), ce(this.name, ...e) } };

 var bT = class { constructor(e, t, n) { this.id = e, this.name = t, this.data = n, T(this, "indexes", new G$), T(this, "fields", new G) } };

 var xT = class { constructor(e, t, n, r, i, o) { this.id = e, this.data = t, this.collection = n, this.lookupNodes = r, this.constraint = i, this.ordering = o, T(this, "resolvedFields", new G);

 for (let s in t.schema) for (let a of n.fields) a.name === s && this.resolvedFields.add(a) } }, G$ = class extends yT { constructor() { super(...arguments), T(this, "name", "Indexes") } };

 var Oa = class { constructor(e, t, n, r) { this.id = e, this.name = t, this.definition = n, this.collection = r } getValue(e) { A(this.name, "Can only get value of field with a name");

 let t = e.data[this.name];

 return t?.type === "richtext" ? (A(this.collection, "Rich text field must have a collection"), { type: "richtext", value: new zg(this.collection.data, t.value) }) : t ?? null } }, G = class extends yT { constructor() { super(...arguments), T(this, "name", "Fields") } }, wm = class { constructor(e, t = "asc") { this.field = e, this.direction = t } getHash() { return ce("OrderingField", this.field.id, this.direction) } }, cr = class { constructor(e) { T(this, "fields", []), e && this.merge(e) } get length() { return this.fields.length } getHash() { return ce("Ordering", ...this.fields) } push(e) { this.fields.push(e) } merge(e) { this.fields.push(...e.fields) } equals(e) { return this === e ? !0 : this.length !== e.length ? !1 : this.getHash() === e.getHash() } providedByFields(e) { for (let { field: t } of this.fields) if (!e.has(t) && t.name !== ss) return !1;

 return !0 } }, dn = class { constructor(e, t) { this.ordering = e, this.resolvedFields = t } getHash() { return ce("RequiredProps", this.ordering, this.resolvedFields) } get isMinimal() { return this.ordering.length === 0 && this.resolvedFields.size === 0 } canProvide(e) { return this.canProvideOrdering(e) && this.canProvideResolvedFields(e) } canProvideOrdering(e) { return this.ordering.length === 0 ? !0 : e.canProvideOrdering(this.ordering) } canProvideResolvedFields(e) { return this.resolvedFields.size === 0 ? !0 : e.canProvideResolvedFields(this.resolvedFields) } }, q$ = class Um { constructor(t) { this.parent = t, T(this, "node"), T(this, "ordering"), T(this, "fields", []) } takeNode() { let t = this.node;

 return A(t, "Node is missing"), this.node = void 0, t } setNode(t) { A(!this.node, "Node already set"), this.node = t } setOrdering(t) { this.ordering = t } push() { return new Um(this) } replace() { return new Um(this.parent) } addField(t) { this.fields.push(t) } addFieldsFromScope(t) { for (let n of t.fields) this.addField(n) } resolveField(t, n) { var r;

 let i = [];

 for (let o of this.fields) o.name === t && (n && o.collectionName !== n || i.push(o));

 if (i.length === 1) return i[0];

 if (i.length > 1) throw new Error("Ambiguous fields");

 return (r = this.parent) == null ? void 0 : r.resolveField(t, n) } has(t) { var n;

 return this.fields.includes(t) ? !0 : ((n = this.parent) == null ? void 0 : n.has(t)) ?? !1 } getRequiredOrdering() { return this.ordering ?? new cr } getRequiredResolvedFields() { let t = new G;

 for (let { field: n } of this.fields) n.collection && t.add(n);

 return t } getRequiredProps() { let t = this.getRequiredOrdering(), n = this.getRequiredResolvedFields();

 return new dn(t, n) } getNamedFields() { let t = {};

 for (let { name: n, field: r } of this.fields) t[n] = r;

 return t } getSingleField() { A(this.fields.length === 1, "Scope must contain exactly one field");

 let t = this.fields[0];

 return A(t, "Field must exist"), t.field } }, ur = class { constructor() { T(this, "pointers", new Map), T(this, "values", new Map) } getKey() { let e = [];

 for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);

 return e.sort().join("-") } addValue(e, t) { this.values.set(e, t) } getValue(e) { return this.values.get(e) ?? null } mergeValues(e) { for (let [t, n] of e.values) this.addValue(t, n) } addPointer(e, t) { this.pointers.set(e, t) } getPointer(e) { return this.pointers.get(e) } mergePointers(e) { for (let [t, n] of e.pointers) this.addPointer(t, n) } merge(e) { this.mergeValues(e), this.mergePointers(e) } }, as = class ji { constructor(t, n = []) { this.fields = t, this.tuples = n } push(t) { this.tuples.push(t) } filter(t) { let n = this.tuples.filter(t);

 return new ji(this.fields, n) } map(t, n) { let r = this.tuples.map(n);

 return new ji(t, r) } sort(t) { let n = Array.from(this.tuples).sort(t);

 return new ji(this.fields, n) } slice(t, n) { let r = this.tuples.slice(t, n);

 return new ji(this.fields, r) } union(t) { let n = new G;

 for (let o of this.fields) t.fields.has(o) && n.add(o);

 let r = new Set, i = new ji(n);

 for (let o of this.tuples) { let s = o.getKey();

 r.add(s), i.push(o) } for (let o of t.tuples) { let s = o.getKey();

 r.has(s) || i.push(o) } return i } intersection(t) { let n = new G;

 for (let o of this.fields) t.fields.has(o) && n.add(o);

 let r = new Set, i = new ji(n);

 for (let o of this.tuples) { let s = o.getKey();

 r.add(s) } for (let o of t.tuples) { let s = o.getKey();

 r.has(s) && i.push(o) } return i } }, Gm = class { constructor(e, t) { this.input = e, this.field = t } getHash() { return ce("ProjectionField", this.input, this.field.id) } }, pk = class ST extends Tn { constructor(t, n, r) { let i = t.isSynchronous;

 for (let o of n) i &&= o.input.isSynchronous;

 super(i), this.input = t, this.projections = n, this.passthrough = r, T(this, "inputGroup"), this.inputGroup = t.getGroup() } getHash() { return ce("RelationalProject", this.inputGroup.id, ...this.projections, this.passthrough) } getOutputFields() { let t = new G;

 t.merge(this.passthrough);

 for (let n of this.projections) t.add(n.field);

 return t } canProvideOrdering(t) { let n = new G;

 for (let r of this.projections) n.add(r.field);

 for (let { field: r } of t.fields) if (n.has(r)) return !1;

 return !0 } canProvideResolvedFields() { return !0 } getInputRequiredProps(t) { let n = new G(t.resolvedFields);

 for (let r of this.projections) n.merge(r.input.referencedFields), n.delete(r.field);

 return new dn(t.ordering, n) } optimize(t, n) { let r = this.getInputRequiredProps(n), i = t.optimizeGroup(this.inputGroup, r), o = new ae(0);

 for (let s of this.projections) { let a = s.input.optimize(t);

 o = ae.max(o, a) } return new ae(0).add(ae.max(i, o)) } getOptimized(t) { let n = this.getInputRequiredProps(t), r = this.inputGroup.getOptimized(n), i = this.projections.map(o => { let s = o.input.getOptimized();

 return new Gm(s, o.field) });

 return new ST(r, i, this.passthrough) } *evaluate(t) { let n = this.getOutputFields(), r = yield* this.input.evaluate(t), i = yield* Lu(r.tuples.map(o => Lu(this.projections.map(s => qe({ field: s.field, value: s.input.evaluate(t, o) })))));

 return r.map(n, (o, s) => { let a = new ur;

 a.mergePointers(o);

 for (let c of this.passthrough) { let u = o.getValue(c);

 a.addValue(c, u) } let l = i[s];

 A(l, "Projections must exist");

 for (let { field: c, value: u } of l) a.addValue(c, u);

 return a }) } }, ps = { type: 0 }, Qe = class extends vT { constructor(e, t, n) { super(n), this.referencedFields = e, this.referencedOuterFields = t, this.isSynchronous = n } evaluateSync() { let e = this.evaluate(void 0, void 0);

 return gT(e) } evaluateAsync() { let e = this.evaluate(void 0, void 0);

 return Qu(e) } }, X$ = { type: 0 }, Bg = class { constructor(e, t) { this.when = e, this.then = t } getHash() { return ce("CaseCondition", this.when, this.then) } }, Y$ = class wT extends Qe { constructor(t, n, r) { let i = new G, o = new G, s = !0;

 t && (i.merge(t.referencedFields), o.merge(t.referencedOuterFields), s &&= t.isSynchronous);

 for (let { when: a, then: l } of n) i.merge(a.referencedFields), o.merge(a.referencedOuterFields), s &&= a.isSynchronous, i.merge(l.referencedFields), o.merge(l.referencedOuterFields), s &&= l.isSynchronous;

 r && (i.merge(r.referencedFields), o.merge(r.referencedOuterFields), s &&= r.isSynchronous), super(i, o, s), this.input = t, this.conditions = n, this.otherwise = r, T(this, "definition", { type: "unknown", isNullable: !0 }) } getHash() { return ce("ScalarCase", this.input, ...this.conditions, this.otherwise) } optimize(t) { var n, r;

 (n = this.input) == null || n.optimize(t);

 for (let i of this.conditions) i.when.optimize(t), i.then.optimize(t);

 return (r = this.otherwise) == null || r.optimize(t), new ae(0) } getOptimized() { var t, n;

 let r = (t = this.input) == null ? void 0 : t.getOptimized(), i = this.conditions.map(s => { let a = s.when.getOptimized(), l = s.then.getOptimized();

 return new Bg(a, l) }), o = (n = this.otherwise) == null ? void 0 : n.getOptimized();

 return new wT(r, i, o) } *evaluate(t, n) { var r, i;

 let { input: o, conditions: s, otherwise: a } = yield* qe({ input: ((r = this.input) == null ? void 0 : r.evaluate(t, n)) ?? null, conditions: Lu(this.conditions.map(l => qe({ when: l.when.evaluate(t, n), then: l.then.evaluate(t, n) }))), otherwise: ((i = this.otherwise) == null ? void 0 : i.evaluate(t, n)) ?? null });

 if (this.input) { for (let { when: l, then: c } of s) if (Ae.equal(o, l, X$)) return c } else for (let { when: l, then: c } of s) if (Lr(l)) return c;

 return a } }, K$ = class { constructor(e, t, n) { this.normalizer = e, this.query = t, this.locale = n, T(this, "collectionId", 0), T(this, "indexId", 0), T(this, "fieldId", 0), T(this, "subqueries", []) } build() { let e = new q$;

 return this.buildQuery(e, this.query) } buildQuery(e, t) { let n = { type: "Select", ...t };

 return this.buildSelect(e, n) } buildSelect(e, t) { let n = this.buildFrom(e, t.from), r = n.getRequiredOrdering();

 if (t.where) { let l = n.takeNode(), c = this.buildExpression(n, t.where), u = this.normalizer.newRelationalFilter(l, c);

 n.setNode(u) } let i = [], o = new G, s;

 if (t.orderBy) { s = new cr;

 for (let l of t.orderBy) if (l.type === "Identifier") { let c = n.resolveField(l.name, l.collection);

 if (ut(c)) continue;

 o.add(c.field);

 let u = new wm(c.field, l.direction);

 s.push(u) } else { let c = this.buildExpression(n, l), u = this.fieldId++, f = new Oa(u, void 0, c.definition, void 0), d = new Gm(c, f);

 i.push(d);

 let h = new wm(f, l.direction);

 s.push(h) } s.merge(r) } else s = r;

 let a = this.buildSelectList(n, t.select, o, i);

 if (a.setOrdering(s), t.offset) { let l = a.takeNode(), c = this.buildExpression(e, t.offset), u = this.normalizer.newRelationalOffset(l, c, s);

 a.setNode(u) } if (t.limit) { let l = a.takeNode(), c = this.buildExpression(e, t.limit), u = this.normalizer.newRelationalLimit(l, c, s);

 a.setNode(u) } return a } buildSelectList(e, t, n, r) { let i = e.push(), o = new G(n), s = [...r];

 for (let c of t) if (c.type === "Identifier") { let u = e.resolveField(c.name, c.collection);

 if (ut(u)) continue;

 o.add(u.field), i.addField({ ...u, name: c.alias ?? u.name }) } else { let u = this.buildExpression(e, c);

 A(c.alias, "Subqueries should have an alias");

 let f = this.fieldId++, d = c.alias, h = new Oa(f, d, u.definition, void 0), p = new Gm(u, h);

 s.push(p), i.addField({ field: h, name: d }) } let a = e.takeNode(), l = this.normalizer.newRelationalProject(a, s, o);

 return i.setNode(l), i } buildFrom(e, t) { switch (t.type) { case "Collection": return this.buildCollection(e, t);

 case "LeftJoin": return this.buildJoin(e, t);

 default: Ce(t, "Unsupported from type") } } buildCollection(e, t) { let n = e.push(), r = Q$(t.data, this.locale), i = t.alias, o = this.collectionId++, s = new bT(o, i, r);

 for (let [l, c] of Object.entries(r.schema)) { let u = this.fieldId++, f = new Oa(u, l, c, s);

 n.addField({ field: f, name: l, collectionName: i }), s.fields.add(f) } { let l = { type: "number", isNullable: !1 }, c = this.fieldId++, u = new Oa(c, ss, l, s);

 n.addField({ field: u, name: ss, collectionName: i });

 let f = new cr, d = new wm(u);

 f.push(d), n.setOrdering(f) } for (let l of r.indexes) { let c = [];

 for (let p of l.fields) { let v = this.buildExpression(n, p);

 c.push(v) } let u;

 l.where && (u = this.buildExpression(n, l.where));

 let f = new cr, d = this.indexId++, h = new xT(d, l, s, c, u, f);

 s.indexes.add(h) } let a = this.normalizer.newRelationalScan(s);

 return n.setNode(a), n } buildJoin(e, t) { let n = this.buildFrom(e, t.left), r = this.buildFrom(e, t.right), i = new cr, o = n.getRequiredOrdering();

 i.merge(o);

 let s = r.getRequiredOrdering();

 i.merge(s);

 let a = e.push();

 a.addFieldsFromScope(n), a.addFieldsFromScope(r), a.setOrdering(i);

 let l = this.buildExpression(a, t.constraint), c = n.takeNode(), u = r.takeNode(), f;

 switch (t.type) { case "LeftJoin": f = this.normalizer.newRelationalLeftJoin(c, u, l);

 break;

 default: Ce(t.type, "Unsupported join type") }return a.setNode(f), a } buildExpression(e, t) { switch (t.type) { case "Identifier": return this.buildIdentifier(e, t);

 case "LiteralValue": return this.buildLiteralValue(t);

 case "FunctionCall": return this.buildFunctionCall(e, t);

 case "Case": return this.buildCase(e, t);

 case "UnaryOperation": return this.buildUnaryOperation(e, t);

 case "BinaryOperation": return this.buildBinaryOperation(e, t);

 case "TypeCast": return this.buildTypeCast(e, t);

 case "Select": throw new Error("Subqueries are only supported inside subquery function calls");

 default: Ce(t, "Unsupported expression") } } buildIdentifier(e, t) { let n = e.resolveField(t.name, t.collection);

 if (n) { let r = !1;

 for (let i of this.subqueries) r ? i.referencedOuterFields.add(n.field) : (r = i.inScope.has(n), r && i.referencedFields.add(n.field));

 return this.normalizer.newScalarVariable(n.field, r) } return this.normalizer.newScalarConstant(hk, null) } buildLiteralValue(e) { let t = Ae.parse(e.value);

 return this.normalizer.newScalarConstant(hk, t) } buildFunctionCall(e, t) { let n = r => { let i = t.arguments[r];

 return A(i, "Missing argument"), this.buildExpression(e, i) };

 switch (t.functionName) { case "CONTAINS": { let r = n(0), i = n(1);

 return this.normalizer.newScalarContains(r, i) } case "STARTS_WITH": { let r = n(0), i = n(1);

 return this.normalizer.newScalarStartsWith(r, i) } case "ENDS_WITH": { let r = n(0), i = n(1);

 return this.normalizer.newScalarEndsWith(r, i) } case "LENGTH": { let r = n(0);

 return this.normalizer.newScalarLength(r) } case "INDEX_OF": { let r = n(0), i = n(1);

 return this.normalizer.newScalarIndexOf(r, i) } case "ARRAY": { let r = t.arguments[0];

 return A(r, "Missing argument"), A(r.type === "Select", "Subqueries require a select expression"), this.buildSubqueryArray(e, r) } case "FLAT_ARRAY": { let r = t.arguments[0];

 return A(r, "Missing argument"), A(r.type === "Select", "Subqueries require a select expression"), this.buildSubqueryFlatArray(e, r) } default: throw new Error("Unsupported function name") } } buildSubqueryArray(e, t) { try { let n = new mk(e);

 this.subqueries.push(n);

 let r = this.buildSelect(e, t), i = r.takeNode(), o = r.getNamedFields(), s = r.getRequiredOrdering(), a = n.referencedFields, l = n.referencedOuterFields;

 return this.normalizer.newScalarArray(i, o, s, a, l) } finally { this.subqueries.pop() } } buildSubqueryFlatArray(e, t) { try { let n = new mk(e);

 this.subqueries.push(n);

 let r = this.buildSelect(e, t), i = r.takeNode(), o = r.getSingleField(), s = r.getRequiredOrdering(), a = n.referencedFields, l = n.referencedOuterFields;

 return this.normalizer.newScalarFlatArray(i, o, s, a, l) } finally { this.subqueries.pop() } } buildCase(e, t) { let n;

 t.value && (n = this.buildExpression(e, t.value));

 let r = t.conditions.map(o => { let s = this.buildExpression(e, o.when), a = this.buildExpression(e, o.then);

 return new Bg(s, a) }), i;

 return t.else && (i = this.buildExpression(e, t.else)), this.normalizer.newScalarCase(n, r, i) } buildUnaryOperation(e, t) { let n = this.buildExpression(e, t.value);

 switch (t.operator) { case "not": return this.normalizer.newScalarNot(n);

 default: Ce(t.operator, "Unsupported unary operator") } } buildBinaryOperation(e, t) { let n = this.buildExpression(e, t.left), r = this.buildExpression(e, t.right);

 switch (t.operator) { case "and": return this.normalizer.newScalarAnd(n, r);

 case "or": return this.normalizer.newScalarOr(n, r);

 case "==": return this.normalizer.newScalarEquals(n, r);

 case "!=": return this.normalizer.newScalarNotEquals(n, r);

 case "<": return this.normalizer.newScalarLessThan(n, r);

 case "<=": return this.normalizer.newScalarLessThanOrEqual(n, r);

 case ">": return this.normalizer.newScalarGreaterThan(n, r);

 case ">=": return this.normalizer.newScalarGreaterThanOrEqual(n, r);

 case "in": return this.normalizer.newScalarIn(n, r);

 default: Ce(t.operator, "Unsupported binary operator") } } buildTypeCast(e, t) { let n = this.buildExpression(e, t.value);

 switch (t.dataType) { case "BOOLEAN": { let r = { type: "boolean", isNullable: !0 };

 return this.normalizer.newScalarCast(n, r) } case "DATE": { let r = { type: "date", isNullable: !0 };

 return this.normalizer.newScalarCast(n, r) } case "NUMBER": { let r = { type: "number", isNullable: !0 };

 return this.normalizer.newScalarCast(n, r) } case "STRING": { let r = { type: "string", isNullable: !0 };

 return this.normalizer.newScalarCast(n, r) } default: throw new Error("Unsupported data type") } } };

 function Q$(e, t) { if (cT(e)) return new x$(e, t);

 if (Dg(e)) return e;

 if (uT(e)) { for (;

 t;

) { let n = e.collectionByLocaleId[t.id];

 if (n) return n;

 t = t.fallback } return e.collectionByLocaleId.default } Ce(e, "Unsupported collection type") } var mk = class { constructor(e) { this.inScope = e, T(this, "referencedFields", new G), T(this, "referencedOuterFields", new G) } }, qm = class kT extends Tn { constructor(t, n) { super(t.isSynchronous && n.isSynchronous), this.input = t, this.predicate = n, T(this, "inputGroup"), this.inputGroup = t.getGroup() } getHash() { return ce("RelationalFilter", this.inputGroup.id, this.predicate) } getOutputFields() { return this.inputGroup.relational.outputFields } canProvideOrdering() { return !0 } canProvideResolvedFields() { return !0 } getInputRequiredProps(t) { let n = new G(t.resolvedFields);

 return n.merge(this.predicate.referencedFields), new dn(t.ordering, n) } optimize(t, n) { let r = this.getInputRequiredProps(n), i = t.optimizeGroup(this.inputGroup, r), o = this.predicate.optimize(t);

 return new ae(0).add(ae.max(i, o)) } getOptimized(t) { let n = this.getInputRequiredProps(t), r = this.inputGroup.getOptimized(n), i = this.predicate.getOptimized();

 return new kT(r, i) } *evaluate(t) { let n = yield* this.input.evaluate(t), r = yield* Lu(n.tuples.map(i => this.predicate.evaluate(t, i)));

 return n.filter((i, o) => { let s = r[o] ?? null;

 return Lr(s) }) } }, Bn = class CT extends Tn { constructor(t, n) { super(!1), this.index = t, this.query = n } getHash() { return ce("RelationalIndexLookup", this.index.id, ...this.query) } getOutputFields() { return this.index.collection.fields } canProvideOrdering(t) { return t.equals(this.index.ordering) } canProvideResolvedFields(t) { return t.subsetOf(this.index.resolvedFields) } optimize() { let t = this.query.every(n => n.type === "All");

 return ae.estimate(1, t ? 100 * Ou : 50 * Ou) } getOptimized() { return new CT(this.index, this.query) } *evaluate() { let t = this.index, n = t.collection, r = this.getOutputFields(), o = (yield t.data.lookupItems(this.query)).map(s => { let a = new ur;

 for (let l of t.resolvedFields) { let c = l.getValue(s);

 a.addPointer(n, s.pointer), a.addValue(l, c) } return a });

 return new as(r, o) } }, Z$ = class RT extends Tn { constructor(t, n) { super(t.isSynchronous && n.isSynchronous), this.left = t, this.right = n, T(this, "leftGroup"), T(this, "rightGroup"), this.leftGroup = t.getGroup(), this.rightGroup = n.getGroup() } getHash() { return ce("RelationalIntersection", this.leftGroup.id, this.rightGroup.id) } getOutputFields() { let t = new G, n = this.leftGroup.relational.outputFields, r = this.rightGroup.relational.outputFields;

 for (let i of n) r.has(i) && t.add(i);

 return t } canProvideOrdering() { return !1 } canProvideResolvedFields() { return !0 } getChildRequiredProps(t) { let n = new cr;

 return new dn(n, t.resolvedFields) } optimize(t, n) { let r = this.getChildRequiredProps(n), i = t.optimizeGroup(this.leftGroup, r), o = this.getChildRequiredProps(n), s = t.optimizeGroup(this.rightGroup, o);

 return ae.max(i, s) } getOptimized(t) { let n = this.getChildRequiredProps(t), r = this.leftGroup.getOptimized(n), i = this.getChildRequiredProps(t), o = this.rightGroup.getOptimized(i);

 return new RT(r, o) } *evaluate(t) { let { left: n, right: r } = yield* qe({ left: this.left.evaluate(t), right: this.right.evaluate(t) });

 return n.intersection(r) } }, Ga = class TT extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.left = t, this.right = n, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarEquals", this.left, this.right) } optimize(t) { let n = this.left.optimize(t), r = this.right.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.left.getOptimized(), n = this.right.getOptimized();

 return new TT(t, n) } *evaluate(t, n) { let { left: r, right: i } = yield* qe({ left: this.left.evaluate(t, n), right: this.right.evaluate(t, n) });

 return { type: "boolean", value: Ae.equal(r, i, ps) } } }, Xm = class ET extends Tn { constructor(t, n, r) { super(t.isSynchronous && n.isSynchronous && r.isSynchronous), this.left = t, this.right = n, this.constraint = r, T(this, "leftGroup"), T(this, "rightGroup"), this.leftGroup = t.getGroup(), this.rightGroup = n.getGroup() } getHash() { return ce("RelationalLeftJoin", this.leftGroup.id, this.rightGroup.id, this.constraint) } getOutputFields() { let t = new G;

 return t.merge(this.leftGroup.relational.outputFields), t.merge(this.rightGroup.relational.outputFields), t } canProvideOrdering() { return !1 } canProvideResolvedFields() { return !0 } getChildRequiredProps(t, n) { let r = new G, i = t.relational.outputFields;

 for (let s of n.resolvedFields) i.has(s) && r.add(s);

 for (let s of this.constraint.referencedFields) i.has(s) && r.add(s);

 let o = new cr;

 return new dn(o, r) } optimize(t, n) { let r = this.getChildRequiredProps(this.leftGroup, n), i = t.optimizeGroup(this.leftGroup, r), o = this.getChildRequiredProps(this.rightGroup, n), s = t.optimizeGroup(this.rightGroup, o), a = this.constraint.optimize(t);

 return ae.max(ae.max(i, s), a) } getOptimized(t) { let n = this.getChildRequiredProps(this.leftGroup, t), r = this.leftGroup.getOptimized(n), i = this.getChildRequiredProps(this.rightGroup, t), o = this.rightGroup.getOptimized(i), s = this.constraint.getOptimized();

 return new ET(r, o, s) } *evaluateScalarEquals(t, n, r, i, o) { let s = new Map;

 for (let c of n.tuples) { let u = yield* i.evaluate(o, c), f = JSON.stringify(u?.value ?? null), d = s.get(f) ?? [];

 d.push(c), s.set(f, d) } let a = this.getOutputFields(), l = new as(a);

 for (let c of t.tuples) { let u = yield* r.evaluate(o, c), f = JSON.stringify(u?.value ?? null), d = s.get(f) ?? [];

 if (d.length === 0) l.push(c);

 else for (let h of d) { let p = new ur;

 p.merge(c), p.merge(h), l.push(p) } } return l } *evaluate(t) { let { left: n, right: r } = yield* qe({ left: this.left.evaluate(t), right: this.right.evaluate(t) });

 if (this.constraint instanceof Ga) { if (this.constraint.left.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.right.referencedFields.subsetOf(this.rightGroup.relational.outputFields)) return yield* this.evaluateScalarEquals(n, r, this.constraint.left, this.constraint.right, t);

 if (this.constraint.right.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.left.referencedFields.subsetOf(this.rightGroup.relational.outputFields)) return yield* this.evaluateScalarEquals(n, r, this.constraint.right, this.constraint.left, t) } let i = this.getOutputFields(), o = new as(i);

 for (let s of n.tuples) { let a = !1;

 for (let l of r.tuples) { let c = new ur;

 c.merge(s), c.merge(l);

 let u = yield* this.constraint.evaluate(t, c);

 Lr(u) && (o.push(c), a = !0) } a || o.push(s) } return o } }, FT = class PT extends Tn { constructor(t, n, r) { super(t.isSynchronous && n.isSynchronous && r.isSynchronous), this.left = t, this.right = n, this.constraint = r, T(this, "leftGroup"), T(this, "rightGroup"), this.leftGroup = t.getGroup(), this.rightGroup = n.getGroup() } getHash() { return ce("RelationalRightJoin", this.leftGroup.id, this.rightGroup.id, this.constraint) } getOutputFields() { let t = new G;

 return t.merge(this.leftGroup.relational.outputFields), t.merge(this.rightGroup.relational.outputFields), t } canProvideOrdering() { return !1 } canProvideResolvedFields() { return !0 } getChildRequiredProps(t, n) { let r = new G, i = t.relational.outputFields;

 for (let s of n.resolvedFields) i.has(s) && r.add(s);

 for (let s of this.constraint.referencedFields) i.has(s) && r.add(s);

 let o = new cr;

 return new dn(o, r) } optimize(t, n) { let r = this.getChildRequiredProps(this.leftGroup, n), i = t.optimizeGroup(this.leftGroup, r), o = this.getChildRequiredProps(this.rightGroup, n), s = t.optimizeGroup(this.rightGroup, o), a = this.constraint.optimize(t);

 return ae.max(ae.max(i, s), a) } getOptimized(t) { let n = this.getChildRequiredProps(this.leftGroup, t), r = this.leftGroup.getOptimized(n), i = this.getChildRequiredProps(this.rightGroup, t), o = this.rightGroup.getOptimized(i), s = this.constraint.getOptimized();

 return new PT(r, o, s) } *evaluateScalarEquals(t, n, r, i, o) { let s = new Map;

 for (let c of t.tuples) { let u = yield* r.evaluate(o, c), f = JSON.stringify(u?.value ?? null), d = s.get(f) ?? [];

 d.push(c), s.set(f, d) } let a = this.getOutputFields(), l = new as(a);

 for (let c of n.tuples) { let u = yield* i.evaluate(o, c), f = JSON.stringify(u?.value ?? null), d = s.get(f) ?? [];

 if (d.length === 0) l.push(c);

 else for (let h of d) { let p = new ur;

 p.merge(c), p.merge(h), l.push(p) } } return l } *evaluate(t) { let { left: n, right: r } = yield* qe({ left: this.left.evaluate(t), right: this.right.evaluate(t) });

 if (this.constraint instanceof Ga) { if (this.constraint.left.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.right.referencedFields.subsetOf(this.rightGroup.relational.outputFields)) return yield* this.evaluateScalarEquals(n, r, this.constraint.left, this.constraint.right, t);

 if (this.constraint.right.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.left.referencedFields.subsetOf(this.rightGroup.relational.outputFields)) return yield* this.evaluateScalarEquals(n, r, this.constraint.right, this.constraint.left, t) } let i = this.getOutputFields(), o = new as(i);

 for (let s of r.tuples) { let a = !1;

 for (let l of n.tuples) { let c = new ur;

 c.merge(s), c.merge(l);

 let u = yield* this.constraint.evaluate(t, c);

 Lr(u) && (o.push(c), a = !0) } a || o.push(s) } return o } }, Ym = class IT extends Tn { constructor(t) { super(!1), this.collection = t } getHash() { return ce("RelationalScan", this.collection.id) } getOutputFields() { return this.collection.fields } canProvideOrdering() { return !1 } canProvideResolvedFields(t) { return t.subsetOf(this.collection.fields) } optimize() { return ae.estimate(1, 200 * Ou) } getOptimized() { return new IT(this.collection) } *evaluate() { let t = this.collection, n = this.getOutputFields(), i = (yield t.data.scanItems()).map(o => { let s = new ur;

 for (let a of n) { let l = a.getValue(o);

 s.addPointer(t, o.pointer), s.addValue(a, l) } return s });

 return new as(n, i) } }, J$ = class _T extends Tn { constructor(t, n) { super(t.isSynchronous && n.isSynchronous), this.left = t, this.right = n, T(this, "leftGroup"), T(this, "rightGroup"), this.leftGroup = t.getGroup(), this.rightGroup = n.getGroup() } getHash() { return ce("RelationalUnion", this.leftGroup.id, this.rightGroup.id) } getOutputFields() { let t = new G, n = this.leftGroup.relational.outputFields, r = this.rightGroup.relational.outputFields;

 for (let i of n) r.has(i) && t.add(i);

 return t } canProvideOrdering() { return !1 } canProvideResolvedFields() { return !0 } getChildRequiredProps(t) { let n = new cr;

 return new dn(n, t.resolvedFields) } optimize(t, n) { let r = this.getChildRequiredProps(n), i = t.optimizeGroup(this.leftGroup, r), o = this.getChildRequiredProps(n), s = t.optimizeGroup(this.rightGroup, o);

 return ae.max(i, s) } getOptimized(t) { let n = this.getChildRequiredProps(t), r = this.leftGroup.getOptimized(n), i = this.getChildRequiredProps(t), o = this.rightGroup.getOptimized(i);

 return new _T(r, o) } *evaluate(t) { let { left: n, right: r } = yield* qe({ left: this.left.evaluate(t), right: this.right.evaluate(t) });

 return n.union(r) } }, Km = class MT extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.left = t, this.right = n, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarAnd", this.left, this.right) } optimize(t) { let n = this.left.optimize(t), r = this.right.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.left.getOptimized(), n = this.right.getOptimized();

 return new MT(t, n) } *evaluate(t, n) { let { left: r, right: i } = yield* qe({ left: this.left.evaluate(t, n), right: this.right.evaluate(t, n) });

 return { type: "boolean", value: Lr(r) && Lr(i) } } }, $n = class extends Qe { constructor(e, t) { let n = new G, r = new G;

 super(n, r, !0), this.definition = e, this.value = t } getHash() { return ce("ScalarConstant", this.definition, this.value) } optimize() { return new ae(0) } getOptimized() { return this } *evaluate() { return this.value } }, eN = { type: 0 }, OT = class LT extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.source = t, this.target = n, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarContains", this.source, this.target) } optimize(t) { let n = this.source.optimize(t), r = this.target.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.source.getOptimized(), n = this.target.getOptimized();

 return new LT(t, n) } *evaluate(t, n) { let { source: r, target: i } = yield* qe({ source: this.source.evaluate(t, n), target: this.target.evaluate(t, n) });

 return { type: "boolean", value: Ae.contains(r, i, eN) } } }, tN = { type: 0 }, VT = class AT extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.source = t, this.target = n, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarEndsWith", this.source, this.target) } optimize(t) { let n = this.source.optimize(t), r = this.target.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.source.getOptimized(), n = this.target.getOptimized();

 return new AT(t, n) } *evaluate(t, n) { let { source: r, target: i } = yield* qe({ source: this.source.evaluate(t, n), target: this.target.evaluate(t, n) });

 return { type: "boolean", value: Ae.endsWith(r, i, tN) } } }, Qm = class DT extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.left = t, this.right = n, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarGreaterThan", this.left, this.right) } optimize(t) { let n = this.left.optimize(t), r = this.right.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.left.getOptimized(), n = this.right.getOptimized();

 return new DT(t, n) } *evaluate(t, n) { let { left: r, right: i } = yield* qe({ left: this.left.evaluate(t, n), right: this.right.evaluate(t, n) });

 return { type: "boolean", value: Ae.greaterThan(r, i, ps) } } }, Zm = class zT extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.left = t, this.right = n, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarGreaterThanOrEqual", this.left, this.right) } optimize(t) { let n = this.left.optimize(t), r = this.right.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.left.getOptimized(), n = this.right.getOptimized();

 return new zT(t, n) } *evaluate(t, n) { let { left: r, right: i } = yield* qe({ left: this.left.evaluate(t, n), right: this.right.evaluate(t, n) });

 return { type: "boolean", value: Ae.greaterThanOrEqual(r, i, ps) } } }, Jm = class BT extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.left = t, this.right = n, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarLessThan", this.left, this.right) } optimize(t) { let n = this.left.optimize(t), r = this.right.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.left.getOptimized(), n = this.right.getOptimized();

 return new BT(t, n) } *evaluate(t, n) { let { left: r, right: i } = yield* qe({ left: this.left.evaluate(t, n), right: this.right.evaluate(t, n) });

 return { type: "boolean", value: Ae.lessThan(r, i, ps) } } }, eg = class $T extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.left = t, this.right = n, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarLessThanOrEqual", this.left, this.right) } optimize(t) { let n = this.left.optimize(t), r = this.right.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.left.getOptimized(), n = this.right.getOptimized();

 return new $T(t, n) } *evaluate(t, n) { let { left: r, right: i } = yield* qe({ left: this.left.evaluate(t, n), right: this.right.evaluate(t, n) });

 return { type: "boolean", value: Ae.lessThanOrEqual(r, i, ps) } } }, tg = class NT extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.left = t, this.right = n, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarNotEquals", this.left, this.right) } optimize(t) { let n = this.left.optimize(t), r = this.right.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.left.getOptimized(), n = this.right.getOptimized();

 return new NT(t, n) } *evaluate(t, n) { let { left: r, right: i } = yield* qe({ left: this.left.evaluate(t, n), right: this.right.evaluate(t, n) });

 return { type: "boolean", value: !Ae.equal(r, i, ps) } } }, ng = class jT extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.left = t, this.right = n, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarOr", this.left, this.right) } optimize(t) { let n = this.left.optimize(t), r = this.right.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.left.getOptimized(), n = this.right.getOptimized();

 return new jT(t, n) } *evaluate(t, n) { let { left: r, right: i } = yield* qe({ left: this.left.evaluate(t, n), right: this.right.evaluate(t, n) });

 return { type: "boolean", value: Lr(r) || Lr(i) } } }, nN = { type: 0 }, HT = class WT extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.source = t, this.target = n, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarStartsWith", this.source, this.target) } optimize(t) { let n = this.source.optimize(t), r = this.target.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.source.getOptimized(), n = this.target.getOptimized();

 return new WT(t, n) } *evaluate(t, n) { let { source: r, target: i } = yield* qe({ source: this.source.evaluate(t, n), target: this.target.evaluate(t, n) });

 return { type: "boolean", value: Ae.startsWith(r, i, nN) } } }, rN = class { constructor(e) { this.normalizer = e, T(this, "memo"), this.memo = e.memo } explore(e) { let t = e.getGroup();

 if (e instanceof Xm) { let n = new FT(e.right, e.left, e.constraint);

 this.memo.addRelational(n, t) } if (e instanceof qm) { if (e.predicate instanceof Km) { let n = this.normalizer.newRelationalFilter(e.input, e.predicate.left), r = this.normalizer.newRelationalFilter(e.input, e.predicate.right), i = new Z$(n, r);

 this.memo.addRelational(i, t) } if (e.predicate instanceof ng) { let n = this.normalizer.newRelationalFilter(e.input, e.predicate.left), r = this.normalizer.newRelationalFilter(e.input, e.predicate.right), i = new J$(n, r);

 this.memo.addRelational(i, t) } } if (e instanceof Ym) for (let n of e.collection.indexes) { if (n.constraint) continue;

 let r = lr(n.lookupNodes.length), i = new Bn(n, r);

 this.memo.addRelational(i, t) } if (e instanceof qm) { for (let n of e.inputGroup.nodes) if (n instanceof Ym) for (let r of n.collection.indexes) { if (e.predicate instanceof Ga && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof $n && r.data.supportedLookupTypes.includes("Equals")) { let i = lr(r.lookupNodes.length);

 i[0] = { type: "Equals", value: e.predicate.right.value };

 let o = new Bn(r, i);

 this.memo.addRelational(o, t) } if (e.predicate instanceof tg && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof $n && r.data.supportedLookupTypes.includes("NotEquals")) { let i = lr(r.lookupNodes.length);

 i[0] = { type: "NotEquals", value: e.predicate.right.value };

 let o = new Bn(r, i);

 this.memo.addRelational(o, t) } if (e.predicate instanceof Jm && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof $n && r.data.supportedLookupTypes.includes("LessThan")) { let i = lr(r.lookupNodes.length);

 i[0] = { type: "LessThan", value: e.predicate.right.value, inclusive: !1 };

 let o = new Bn(r, i);

 this.memo.addRelational(o, t) } if (e.predicate instanceof eg && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof $n && r.data.supportedLookupTypes.includes("LessThan")) { let i = lr(r.lookupNodes.length);

 i[0] = { type: "LessThan", value: e.predicate.right.value, inclusive: !0 };

 let o = new Bn(r, i);

 this.memo.addRelational(o, t) } if (e.predicate instanceof Qm && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof $n && r.data.supportedLookupTypes.includes("GreaterThan")) { let i = lr(r.lookupNodes.length);

 i[0] = { type: "GreaterThan", value: e.predicate.right.value, inclusive: !1 };

 let o = new Bn(r, i);

 this.memo.addRelational(o, t) } if (e.predicate instanceof Zm && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof $n && r.data.supportedLookupTypes.includes("GreaterThan")) { let i = lr(r.lookupNodes.length);

 i[0] = { type: "GreaterThan", value: e.predicate.right.value, inclusive: !0 };

 let o = new Bn(r, i);

 this.memo.addRelational(o, t) } if (e.predicate instanceof OT && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof $n && r.data.supportedLookupTypes.includes("Contains")) { let i = lr(r.lookupNodes.length);

 i[0] = { type: "Contains", value: e.predicate.target.value };

 let o = new Bn(r, i);

 this.memo.addRelational(o, t) } if (e.predicate instanceof HT && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof $n && r.data.supportedLookupTypes.includes("StartsWith")) { let i = lr(r.lookupNodes.length);

 i[0] = { type: "StartsWith", value: e.predicate.target.value };

 let o = new Bn(r, i);

 this.memo.addRelational(o, t) } if (e.predicate instanceof VT && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof $n && r.data.supportedLookupTypes.includes("EndsWith")) { let i = lr(r.lookupNodes.length);

 i[0] = { type: "EndsWith", value: e.predicate.target.value };

 let o = new Bn(r, i);

 this.memo.addRelational(o, t) } } } } };

 function lr(e) { let t = { type: "All" };

 return new Array(e).fill(t) } var iN = class { constructor(e) { this.outputFields = e } isCompatible(e) { return this.outputFields.equals(e.outputFields) } }, oN = class { constructor() { T(this, "nodes", new Map), T(this, "groups", []) } addGroup(e) { let t = this.groups.length, n = new mT(t, e);

 return this.groups.push(n), n } addRelational(e, t) { let n = e.getHash(), r = this.nodes.get(n);

 if (r) return r;

 this.nodes.set(n, e);

 let i = e.getOutputFields(), o = new iN(i);

 return t ??= this.addGroup(o), t.addNode(e), A(o.isCompatible(t.relational), "Group has inconsistent relational props"), e } addScalar(e) { let t = e.getHash(), n = this.nodes.get(t);

 return n || (this.nodes.set(t, e), e) } }, sN = class UT extends Tn { constructor(t, n, r) { super(t.isSynchronous && n.isSynchronous), this.input = t, this.limit = n, this.ordering = r, T(this, "inputGroup"), this.inputGroup = t.getGroup() } getHash() { return ce("RelationalLimit", this.inputGroup.id, this.limit) } getOutputFields() { return this.inputGroup.relational.outputFields } canProvideOrdering(t) { return t.equals(this.ordering) } canProvideResolvedFields() { return !0 } getInputRequiredProps(t) { let n = new G(t.resolvedFields);

 return n.merge(this.limit.referencedFields), new dn(this.ordering, n) } optimize(t, n) { let r = this.getInputRequiredProps(n), i = t.optimizeGroup(this.inputGroup, r), o = this.limit.optimize(t);

 return new ae(0).add(ae.max(i, o)) } getOptimized(t) { let n = this.getInputRequiredProps(t), r = this.inputGroup.getOptimized(n), i = this.limit.getOptimized();

 return new UT(r, i, this.ordering) } *evaluate(t) { let { input: n, limit: r } = yield* qe({ input: this.input.evaluate(t), limit: this.limit.evaluate(t, void 0) }), i = hT(r) ?? 1 / 0;

 return i === 1 / 0 ? n : n.slice(0, i) } }, aN = class GT extends Tn { constructor(t, n, r) { super(t.isSynchronous && n.isSynchronous), this.input = t, this.offset = n, this.ordering = r, T(this, "inputGroup"), this.inputGroup = t.getGroup() } getHash() { return ce("RelationalOffset", this.inputGroup.id, this.offset) } getOutputFields() { return this.inputGroup.relational.outputFields } canProvideOrdering(t) { return t.equals(this.ordering) } canProvideResolvedFields() { return !0 } getInputRequiredProps(t) { let n = new G(t.resolvedFields);

 return n.merge(this.offset.referencedFields), new dn(this.ordering, n) } optimize(t, n) { let r = this.getInputRequiredProps(n), i = t.optimizeGroup(this.inputGroup, r), o = this.offset.optimize(t);

 return new ae(0).add(ae.max(i, o)) } getOptimized(t) { let n = this.getInputRequiredProps(t), r = this.inputGroup.getOptimized(n), i = this.offset.getOptimized();

 return new GT(r, i, this.ordering) } *evaluate(t) { let { input: n, offset: r } = yield* qe({ input: this.input.evaluate(t), offset: this.offset.evaluate(t, void 0) }), i = hT(r) ?? 0;

 return i === 0 ? n : n.slice(i) } }, lN = class qT extends Qe { constructor(t, n, r, i, o) { super(i, o, t.isSynchronous), this.input = t, this.namedFields = n, this.ordering = r, this.referencedFields = i, this.referencedOuterFields = o, T(this, "inputGroup"), T(this, "definition"), this.inputGroup = t.getGroup();

 let s = {}, a = Object.entries(n);

 for (let [l, c] of a) s[l] = c.definition;

 this.definition = { type: "array", isNullable: !1, definition: { type: "object", isNullable: !1, definitions: s } } } getHash() { let t = {}, n = Object.entries(this.namedFields);

 for (let [r, i] of n) t[r] = i.id;

 return ce("ScalarArray", this.inputGroup.id, t, this.ordering, this.referencedFields, this.referencedOuterFields) } getInputRequiredProps() { let t = new G, n = Object.values(this.namedFields);

 for (let r of n) ut(r.collection) || t.add(r);

 return new dn(this.ordering, t) } optimize(t) { let n = this.getInputRequiredProps(), r = t.optimizeGroup(this.inputGroup, n);

 return new ae(0).add(r) } getOptimized() { let t = this.getInputRequiredProps(), n = this.inputGroup.getOptimized(t);

 return new qT(n, this.namedFields, this.ordering, this.referencedFields, this.referencedOuterFields) } *evaluate(t, n) { let r = new ur;

 t && r.merge(t), n && r.merge(n);

 let i = yield* this.input.evaluate(r), o = Object.entries(this.namedFields);

 return { type: "array", value: i.tuples.map(s => { let a = {};

 for (let [l, c] of o) a[l] = s.getValue(c);

 return { type: "object", value: a } }) } } }, cN = class XT extends Qe { constructor(t, n) { super(t.referencedFields, t.referencedOuterFields, t.isSynchronous), this.input = t, this.definition = n, A(n.isNullable, "Unsupported non-nullable cast") } getHash() { return ce("ScalarCast", this.input, this.definition) } optimize(t) { return this.input.optimize(t) } getOptimized() { let t = this.input.getOptimized();

 return new XT(t, this.definition) } *evaluate(t, n) { let r = yield* this.input.evaluate(t, n);

 return Ae.cast(r, this.definition) } }, uN = class YT extends Qe { constructor(t, n, r, i, o) { super(i, o, t.isSynchronous), this.input = t, this.field = n, this.ordering = r, this.referencedFields = i, this.referencedOuterFields = o, T(this, "inputGroup"), T(this, "definition"), this.inputGroup = t.getGroup(), this.definition = { type: "array", isNullable: !1, definition: n.definition } } getHash() { return ce("ScalarFlatArray", this.inputGroup.id, this.field.id, this.ordering, this.referencedFields, this.referencedOuterFields) } getInputRequiredProps() { let t = new G;

 return ut(this.field.collection) || t.add(this.field), new dn(this.ordering, t) } optimize(t) { let n = this.getInputRequiredProps(), r = t.optimizeGroup(this.inputGroup, n);

 return new ae(0).add(r) } getOptimized() { let t = this.getInputRequiredProps(), n = this.inputGroup.getOptimized(t);

 return new YT(n, this.field, this.ordering, this.referencedFields, this.referencedOuterFields) } *evaluate(t, n) { let r = new ur;

 return t && r.merge(t), n && r.merge(n), { type: "array", value: (yield* this.input.evaluate(r)).tuples.map(o => o.getValue(this.field)) } } }, fN = { type: 0 }, dN = class KT extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.left = t, this.right = n, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarIn", this.left, this.right) } optimize(t) { let n = this.left.optimize(t), r = this.right.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.left.getOptimized(), n = this.right.getOptimized();

 return new KT(t, n) } *evaluate(t, n) { let { left: r, right: i } = yield* qe({ left: this.left.evaluate(t, n), right: this.right.evaluate(t, n) });

 return { type: "boolean", value: Ae.in(r, i, fN) } } }, hN = { type: 1 }, pN = class QT extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.source = t, this.target = n, T(this, "definition", { type: "number", isNullable: !1 }) } getHash() { return ce("ScalarIndexOf", this.source, this.target) } optimize(t) { let n = this.source.optimize(t), r = this.target.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.source.getOptimized(), n = this.target.getOptimized();

 return new QT(t, n) } *evaluate(t, n) { let { source: r, target: i } = yield* qe({ source: this.source.evaluate(t, n), target: this.target.evaluate(t, n) });

 return { type: "number", value: Ae.indexOf(r, i, hN) } } }, mN = class ZT extends Qe { constructor(t) { super(t.referencedFields, t.referencedOuterFields, t.isSynchronous), this.input = t, T(this, "definition", { type: "number", isNullable: !1 }) } getHash() { return ce("ScalarLength", this.input) } optimize(t) { return this.input.optimize(t) } getOptimized() { let t = this.input.getOptimized();

 return new ZT(t) } *evaluate(t, n) { let r = yield* this.input.evaluate(t, n);

 return { type: "number", value: Ae.length(r) } } }, gk = class JT extends Qe { constructor(t) { super(t.referencedFields, t.referencedOuterFields, t.isSynchronous), this.input = t, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarNot", this.input) } optimize(t) { return this.input.optimize(t) } getOptimized() { let t = this.input.getOptimized();

 return new JT(t) } *evaluate(t, n) { let r = yield* this.input.evaluate(t, n);

 return { type: "boolean", value: !Lr(r) } } }, gN = { type: 0 }, vN = class eE extends Qe { constructor(t, n) { let r = new G;

 r.merge(t.referencedFields), r.merge(n.referencedFields);

 let i = new G;

 i.merge(t.referencedOuterFields), i.merge(n.referencedOuterFields);

 let o = t.isSynchronous && n.isSynchronous;

 super(r, i, o), this.left = t, this.right = n, T(this, "definition", { type: "boolean", isNullable: !1 }) } getHash() { return ce("ScalarNotIn", this.left, this.right) } optimize(t) { let n = this.left.optimize(t), r = this.right.optimize(t);

 return ae.max(n, r) } getOptimized() { let t = this.left.getOptimized(), n = this.right.getOptimized();

 return new eE(t, n) } *evaluate(t, n) { let { left: r, right: i } = yield* qe({ left: this.left.evaluate(t, n), right: this.right.evaluate(t, n) });

 return { type: "boolean", value: !Ae.in(r, i, gN) } } }, cn = class extends Qe { constructor(e, t) { A(e.name !== ss, "Invalid field name");

 let n = new G, r = new G;

 t ? r.add(e) : n.add(e), super(n, r, !0), this.field = e, this.isOuterField = t, T(this, "definition"), this.definition = e.definition } getHash() { return ce("ScalarVariable", this.field.id, this.isOuterField) } optimize() { return new ae(0) } getOptimized() { return this } *evaluate(e, t) { return this.isOuterField ? (A(e, "Context must exist"), e.getValue(this.field)) : (A(t, "Tuple must exist"), t.getValue(this.field)) } }, yN = class { constructor(e) { this.memo = e } finishRelational(e) { return this.memo.addRelational(e) } newRelationalScan(e) { let t = new Ym(e);

 return this.finishRelational(t) } newRelationalIndexLookup(e, t) { let n = new Bn(e, t);

 return this.finishRelational(n) } newRelationalLeftJoin(e, t, n) { let r = new Xm(e, t, n);

 return this.finishRelational(r) } newRelationalRightJoin(e, t, n) { return this.newRelationalLeftJoin(t, e, n) } newRelationalFilter(e, t) { if (e instanceof Xm && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) { let r = this.newRelationalFilter(e.left, t);

 return this.newRelationalLeftJoin(r, e.right, e.constraint) } if (e instanceof FT && t.referencedFields.subsetOf(e.rightGroup.relational.outputFields)) { let r = this.newRelationalFilter(e.right, t);

 return this.newRelationalLeftJoin(e.left, r, e.constraint) } let n = new qm(e, t);

 return this.finishRelational(n) } newRelationalProject(e, t, n) { let r = new pk(e, t, n);

 return this.finishRelational(r) } newRelationalLimit(e, t, n) { if (e instanceof pk && t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) && n.providedByFields(e.inputGroup.relational.outputFields)) { let i = this.newRelationalLimit(e.input, t, n);

 return this.newRelationalProject(i, e.projections, e.passthrough) } let r = new sN(e, t, n);

 return this.finishRelational(r) } newRelationalOffset(e, t, n) { let r = new aN(e, t, n);

 return this.finishRelational(r) } finishScalar(e) { if (!(e instanceof $n) && e.isSynchronous && e.referencedFields.size === 0 && e.referencedOuterFields.size === 0) { let n = e.evaluateSync();

 return this.newScalarConstant(e.definition, n) } return this.memo.addScalar(e) } removeUnknown(e, t) { if (e.definition.type !== "unknown" || t.type === "unknown") return e;

 let n = { ...t, isNullable: !0 };

 return this.newScalarCast(e, n) } newScalarVariable(e, t) { let n = new cn(e, t);

 return this.finishScalar(n) } newScalarConstant(e, t) { let n = new $n(e, t);

 return this.finishScalar(n) } newScalarNot(e) { if (e instanceof gk) { if (e.input.definition.type === "boolean") return e.input;

 let n = { type: "boolean", isNullable: !0 };

 return this.newScalarCast(e.input, n) } if (e instanceof Ga) return this.newScalarNotEquals(e.left, e.right);

 if (e instanceof tg) return this.newScalarEquals(e.left, e.right);

 if (e instanceof Jm) return this.newScalarGreaterThanOrEqual(e.left, e.right);

 if (e instanceof eg) return this.newScalarGreaterThan(e.left, e.right);

 if (e instanceof Qm) return this.newScalarLessThanOrEqual(e.left, e.right);

 if (e instanceof Zm) return this.newScalarLessThan(e.left, e.right);

 if (e instanceof Km) { let n = this.newScalarNot(e.left), r = this.newScalarNot(e.right);

 return this.newScalarOr(n, r) } if (e instanceof ng) { let n = this.newScalarNot(e.left), r = this.newScalarNot(e.right);

 return this.newScalarAnd(n, r) } let t = new gk(e);

 return this.finishScalar(t) } newScalarAnd(e, t) { let n = new Km(e, t);

 return this.finishScalar(n) } newScalarOr(e, t) { let n = new ng(e, t);

 return this.finishScalar(n) } newScalarEquals(e, t) { let n = e instanceof cn;

 if (t instanceof cn && !n) return this.newScalarEquals(t, e);

 e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);

 let i = new Ga(e, t);

 return this.finishScalar(i) } newScalarNotEquals(e, t) { let n = e instanceof cn;

 if (t instanceof cn && !n) return this.newScalarNotEquals(t, e);

 e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);

 let i = new tg(e, t);

 return this.finishScalar(i) } newScalarLessThan(e, t) { let n = e instanceof cn;

 if (t instanceof cn && !n) return this.newScalarGreaterThan(t, e);

 e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);

 let i = new Jm(e, t);

 return this.finishScalar(i) } newScalarLessThanOrEqual(e, t) { let n = e instanceof cn;

 if (t instanceof cn && !n) return this.newScalarGreaterThanOrEqual(t, e);

 e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);

 let i = new eg(e, t);

 return this.finishScalar(i) } newScalarGreaterThan(e, t) { let n = e instanceof cn;

 if (t instanceof cn && !n) return this.newScalarLessThan(t, e);

 e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);

 let i = new Qm(e, t);

 return this.finishScalar(i) } newScalarGreaterThanOrEqual(e, t) { let n = e instanceof cn;

 if (t instanceof cn && !n) return this.newScalarLessThanOrEqual(t, e);

 e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);

 let i = new Zm(e, t);

 return this.finishScalar(i) } newScalarIn(e, t) { t.definition.type === "array" && (e = this.removeUnknown(e, t.definition.definition));

 let n = { type: "array", isNullable: !0, definition: e.definition };

 t = this.removeUnknown(t, n);

 let r = new dN(e, t);

 return this.finishScalar(r) } newScalarNotIn(e, t) { t.definition.type === "array" && (e = this.removeUnknown(e, t.definition.definition));

 let n = { type: "array", isNullable: !0, definition: e.definition };

 t = this.removeUnknown(t, n);

 let r = new vN(e, t);

 return this.finishScalar(r) } newScalarCase(e, t, n) { if (e) { let i = [];

 for (let { when: o, then: s } of t) { let a = this.removeUnknown(o, e.definition), l = new Bg(a, s);

 i.push(l) } t = i } let r = new Y$(e, t, n);

 return this.finishScalar(r) } newScalarContains(e, t) { let n = new OT(e, t);

 return this.finishScalar(n) } newScalarStartsWith(e, t) { let n = new HT(e, t);

 return this.finishScalar(n) } newScalarEndsWith(e, t) { let n = new VT(e, t);

 return this.finishScalar(n) } newScalarLength(e) { let t = new mN(e);

 return this.finishScalar(t) } newScalarIndexOf(e, t) { let n = new pN(e, t);

 return this.finishScalar(n) } newScalarArray(e, t, n, r, i) { let o = new lN(e, t, n, r, i);

 return this.finishScalar(o) } newScalarFlatArray(e, t, n, r, i) { let o = new uN(e, t, n, r, i);

 return this.finishScalar(o) } newScalarCast(e, t) { if (e.definition.type === t.type) return e;

 let n = new cN(e, t);

 return this.finishScalar(n) } }, tE = class extends Tn { }, bN = class nE extends tE { constructor(t, n) { super(!1), this.input = t, this.fields = n, T(this, "inputGroup"), this.inputGroup = t.getGroup() } getHash() { return ce("EnforcerResolve", this.inputGroup.id, this.fields) } getOutputFields() { return this.inputGroup.relational.outputFields } canProvideOrdering() { return !0 } canProvideResolvedFields(t) { return t.subsetOf(this.fields) } getInputRequiredProps(t) { let n = new G;

 return new dn(t.ordering, n) } optimize(t, n) { let r = this.getInputRequiredProps(n), i = t.optimizeGroup(this.inputGroup, r);

 return ae.estimate(0, 100 * Ou).add(i) } getOptimized(t) { let n = this.getInputRequiredProps(t), r = this.inputGroup.getOptimized(n);

 return new nE(r, this.fields) } *evaluate(t) { let n = yield* this.input.evaluate(t);

 A(this.fields.subsetOf(n.fields), "Fields can't be resolved");

 let r = new Set;

 for (let o of this.fields) A(o.collection, "Collection required to resolve field"), r.add(o.collection);

 for (let o of n.tuples) for (let s of this.fields) { let a = o.getValue(s);

 a?.type === "richtext" && (A(a.value instanceof zg, "Pointer must be wrapped"), a.value.resolve()) } let i = yield Promise.all(Array.from(r).map(async o => { let s = [];

 for (let l of n.tuples) { let c = l.getPointer(o);

 c && s.push(c) } let a = await o.data.resolveItems(s);

 return A(a.length === s.length, "Invalid number of items"), [o, a] }));

 return n.map(n.fields, o => { let s = new ur;

 s.merge(o);

 for (let [a, l] of i) { let c = o.getPointer(a);

 if (!c) continue;

 let u = l.shift();

 A(u, "Item not found"), A(u.pointer === c, "Pointer mismatch");

 for (let f of a.fields) { let d = f.getValue(u);

 s.addValue(f, d) } } return s }) } }, km = { type: 0 }, xN = class rE extends tE { constructor(t, n) { super(t.isSynchronous), this.input = t, this.ordering = n, T(this, "inputGroup"), this.inputGroup = t.getGroup() } getHash() { return ce("EnforcerSort", this.inputGroup.id, this.ordering) } getOutputFields() { return this.inputGroup.relational.outputFields } canProvideOrdering(t) { return t.equals(this.ordering) } canProvideResolvedFields() { return !0 } getInputRequiredProps(t) { let n = new G(t.resolvedFields);

 for (let { field: i } of this.ordering.fields) i.name !== ss && (ut(i.collection) || n.add(i));

 let r = new cr;

 return new dn(r, n) } optimize(t, n) { let r = this.getInputRequiredProps(n), i = t.optimizeGroup(this.inputGroup, r);

 return new ae(0).add(i) } getOptimized(t) { let n = this.getInputRequiredProps(t), r = this.inputGroup.getOptimized(n);

 return new rE(r, this.ordering) } *evaluate(t) { return (yield* this.input.evaluate(t)).sort((r, i) => { for (let { field: o, direction: s } of this.ordering.fields) { let a = s === "asc";

 if (o.name === ss) { let u = o.collection;

 A(u, "Collection required for sorting");

 let f = r.getPointer(u);

 A(f, "Pointer required for sorting");

 let d = { pointer: f, data: {} }, h = i.getPointer(u);

 A(h, "Pointer required for sorting");

 let p = { pointer: h, data: {} }, v = u.data.compareItems(d, p);

 return a ? v : -v } let l = r.getValue(o), c = i.getValue(o);

 if (!Ae.equal(l, c, km)) { if (Nn(l) || Ae.lessThan(l, c, km)) return a ? -1 : 1;

 if (Nn(c) || Ae.greaterThan(l, c, km)) return a ? 1 : -1;

 throw new Error("Invalid comparison") } } return 0 }) } };

 var SN = class { constructor(e, t) { this.query = e, this.locale = t, T(this, "memo", new oN), T(this, "normalizer", new yN(this.memo)), T(this, "explorer", new rN(this.normalizer)) } optimize() { let t = new K$(this.normalizer, this.query, this.locale).build(), r = t.takeNode().getGroup(), i = t.getRequiredProps();

 this.optimizeGroup(r, i);

 let o = r.getOptimized(i), s = t.getNamedFields();

 return [o, s] } optimizeGroup(e, t) { let n = e.getWinner(t);

 if (n.node) return n.cost;

 let r = e.nodes[0];

 A(r, "Normalized node not found"), this.createEnforcer(n, r, t);

 for (let i of e.nodes) { if (t.canProvide(i)) { let o = i.optimize(this, t);

 n.update(i, o) } t.isMinimal && this.explorer.explore(i) } return n.cost } createEnforcer(e, t, n) { if (n.resolvedFields.size > 0) { let r = new bN(t, n.resolvedFields), i = r.optimize(this, n);

 e.update(r, i) } if (n.ordering.length > 0) { let r = new xN(t, n.ordering), i = r.optimize(this, n);

 e.update(r, i) } } };

 function wN(e) { return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"` } function kN(e) { return typeof e.value == "string" ? `'${e.value}'` : e.value } function CN(e) { return `${e.functionName}(${e.arguments.map(t => Dt(t)).join(", ")})` } function RN(e) { let t = "CASE";

 e.value && (t += ` ${Dt(e.value)}`);

 for (let n of e.conditions) t += ` WHEN ${Dt(n.when)} THEN ${Dt(n.then)}`;

 return e.else && (t += ` ELSE ${Dt(e.else)}`), t += " END", t } function TN(e) { let t = Dt(e.value);

 return `${e.operator.toUpperCase()} ${t}` } function EN(e) { let t = Dt(e.left), n = Dt(e.right), r = e.operator.toUpperCase();

 return `${t} ${r} ${n}` } function FN(e) { return `CAST(${Dt(e.value)} as ${e.dataType})` } function Dt(e) { switch (e.type) { case "Identifier": return wN(e);

 case "LiteralValue": return kN(e);

 case "FunctionCall": return CN(e);

 case "Case": return RN(e);

 case "UnaryOperation": return TN(e);

 case "BinaryOperation": return EN(e);

 case "TypeCast": return FN(e);

 case "Select": return `${iE(e)}`;

 default: Ce(e) } } function PN(e) { return Dg(e.data) ? "Collection" : e.alias ? `"${e.data.displayName}" AS "${e.alias}"` : `"${e.data.displayName}"` } function IN(e) { let t = `${rg(e.left)} LEFT JOIN ${rg(e.right)}`;

 return e.constraint && (t += ` ON ${Dt(e.constraint)}`), t } function rg(e) { switch (e.type) { case "Collection": return PN(e);

 case "LeftJoin": return IN(e);

 default: Ce(e) } } function _N(e) {
    let t = "";

 return e.split(/\s+/u).forEach(r => {
        r !== "" && (["SELECT", "FROM", "WHERE", "ORDER", "LIMIT", "OFFSET"].includes(r) ? t += `
${r}` : ["AND", "OR"].includes(r) ? t += `
	${r}` : t += ` ${r}`)
    }), t.trim()
} function iE(e) { let t = "";

 return t += `SELECT ${e.select.map(n => { let r = Dt(n);

 return n.alias ? `${r} AS "${n.alias}"` : r }).join(", ")}`, t += ` FROM ${rg(e.from)}`, e.where && (t += ` WHERE ${Dt(e.where)}`), e.orderBy && (t += ` ORDER BY ${e.orderBy.map(n => `${Dt(n)} ${n.direction ?? "asc"}`).join(", ")}`), e.limit && (t += ` LIMIT ${Dt(e.limit)}`), e.offset && (t += ` OFFSET ${Dt(e.offset)}`), _N(t) } var MN = g$("query-engine"), ON = class {
    async query(e, t) {
        MN.debug(`Query:
${iE(e)}`);

 let n = new SN(e, t), [r, i] = n.optimize(), o = await r.evaluateAsync(), s = Object.entries(i);

 return await Promise.all(o.tuples.map(async l => { let c = await Promise.all(s.map(async ([u, f]) => { let d = l.getValue(f), h = await this.resolveValue(d);

 return [u, h] }));

 return Object.fromEntries(c) }))
    } async resolveValue(e) { if (e?.type === "richtext") return A(e.value instanceof zg, "Pointer must be wrapped"), e.value.resolve();

 if (e?.type === "array") return Promise.all(e.value.map(async t => this.resolveValue(t)));

 if (e?.type === "object") { let t = Object.entries(e.value), n = await Promise.all(t.map(async ([r, i]) => { let o = await this.resolveValue(i);

 return [r, o] }));

 return Object.fromEntries(n) } return e?.value ?? null }
}, LN = class { constructor(e) { this.queryEngine = e, T(this, "cache", new Map) } get(e, t) { let n = DN(e, t), r = this.cache.get(n);

 if (r) return r;

 let i = () => this.queryEngine.query(e, t), o = new Ig(i);

 return this.cache.set(n, o), o } }, vk = new WeakMap;

 function VN(e) { let t = vk.get(e);

 if (t) return t;

 let n = Math.random().toString(16).slice(2);

 return vk.set(e, n), n } function AN(e, t) { return ue(t) && t.type === "Collection" && v$(t.data) ? VN(t.data) : t } function DN(e, t) { let n = t?.id ?? "default";

 return JSON.stringify(e, AN) + n } function Cm(e, t) { e.forEach(n => clearTimeout(n)), e.clear(), t.forEach(n => n?.("Callback cancelled by variant change")), t.clear() } function yk() { return new Set } function j7(e) { let t = ct(yk), n = ct(yk);

 return xR(() => () => Cm(n, t)), V(() => () => Cm(n, t), []), V(() => { Cm(n, t) }, [e]), _({ activeVariantCallback: r => async (...i) => new Promise((o, s) => { t.add(s), r(...i).then(o) }).catch(() => { }), delay: async (r, i) => { await new Promise(o => { n.add(globalThis.setTimeout(() => o(!0), i)) }), r() } }).current } function zN(e, t, n) { return S.useCallback(r => { var i, o, s;

 return n ? e ? t ? Object.assign({}, (i = n[e]) == null ? void 0 : i[r], (o = n[t]) == null ? void 0 : o[r]) : ((s = n[e]) == null ? void 0 : s[r]) || {} : {} : {} }, [e, t, n]) } function BN(e) { for (let [t, n] of Object.entries(e)) if (be.matchMedia(n).matches) return t } function $N(e) { var t;

 let n = [];

 for (let { hash: i, mediaQuery: o } of e) { if (!o) continue;

 be.matchMedia(o).matches && n.push(i) } if (n.length > 0) return n;

 let r = (t = e[0]) == null ? void 0 : t.hash;

 if (r) return [r] } function U7(e, t, n = !0) { let r = L(CR), i = I3(), o = !i && Or(), s = _(o ? BN(t) ?? e : e), a = _(n && r ? e : s.current), l = Uu(), c = Pb(), u = $(f => { if (f !== s.current || f !== a.current) { let h = function () { s.current = a.current = f, Ze(() => { l() }) };

 var d = h;

 i ? h() : c(() => { h() }) } }, [c, l, i]);

 return Nm(() => { i && u(e) }, [e, i, u]), Nm(() => { !n || r !== !0 || u(s.current) }, []), V(() => { let f = [];

 for (let [d, h] of Object.entries(t)) { let p = be.matchMedia(h), v = b => { b.matches && u(d) };

 NN(p, v), f.push([p, v]) } return () => f.forEach(([d, h]) => jN(d, h)) }, [t, u]), [s.current, a.current] } function NN(e, t) { e.addEventListener ? e.addEventListener("change", t) : e.addListener(t) } function jN(e, t) { e.removeEventListener ? e.removeEventListener("change", t) : e.removeListener(t) } var HN = "style[data-framer-breakpoint-css]";

 function WN(e) { setTimeout(e, 1) } function G7(e) { var t, n, r, i;

 let o = new Set, s = $N(e);

 if (s) for (let l of s) for (let c of document.querySelectorAll(".hidden-" + l)) bk(c.previousSibling) && o.add(c.previousSibling), (t = c.parentNode) == null || t.removeChild(c);

 (rC ? be.requestIdleCallback : WN)(() => { var l;

 (l = document.querySelector(HN)) == null || l.remove() });

 for (let l of document.querySelectorAll(".ssr-variant:empty")) bk(l.previousSibling) && o.add(l.previousSibling), (n = l.parentNode) == null || n.removeChild(l);

 for (let l of o) UN(l.nextSibling) && ((r = l.parentNode) == null || r.removeChild(l.nextSibling), (i = l.parentNode) == null || i.removeChild(l)) } function bk(e) { return e?.nodeType === Node.COMMENT_NODE && e.textContent === "$" } function UN(e) { return e?.nodeType === Node.COMMENT_NODE && e.textContent === "/$" } function xk(e, t) { if (e[t]) return e[t];

 if (!(t in e)) return e.default } function Z7(e, t) { if (Qa()) return;

 let r = S.useRef(!0), i = S.useRef(t);

 xR((o, s) => { let a = o && !s;

 if (!r.current && a) { let l = xk(i.current, e);

 l && l() } r.current = a }, []), S.useEffect(() => { if (r.current) { let o = xk(i.current, e);

 o && o() } }, [e]) } async function Sk(e, t, n = !0) { e !== !1 && (n && await Xa(), Q.render(() => { let r = document.documentElement.style;

 t ? r.setProperty("overflow", "hidden") : r.removeProperty("overflow") })) } function eG({ blockDocumentScrolling: e = !0 } = {}) { let [t, n] = S.useState(!1), r = S.useCallback(i => { n(i), Sk(e, i) }, [e]);

 return S.useEffect(() => () => { Sk(e, !1, !1) }, [e]), [t, r] } var GN = "page";

 function wk(e) { return ue(e) && GN in e && e.page !== void 0 } function qN(e) { throw e } var XN = new ON, YN = new LN(XN);

 function rG(e) { let { activeLocale: t } = ju(), n = YN.get(e, t), r = n.preload();

 return r && qN(r), n.read() } function iG(e, t) { let r = Object.entries(e ?? {}).filter(([, i]) => !(ut(i) || ue(i))).map(([i, o]) => ({ type: "BinaryOperation", operator: "==", left: { type: "TypeCast", value: { type: "Identifier", name: i, collection: t }, dataType: "STRING" }, right: { type: "LiteralValue", value: String(o) } }));

 return r.length === 0 ? { type: "LiteralValue", value: !1 } : r.reduce((i, o) => ({ type: "BinaryOperation", operator: "and", left: i, right: o })) } function kk(e, t) { return `${e}-${t}` } function KN(e, t) { let r = e.indexOf(t) + 1;

 r >= e.length && (r = 0);

 let i = e[r];

 return A(i !== void 0, "nextVariant should be defined"), i } function QN(e, t) { if (e) { if (t) { let n = e[t];

 if (n) return n } return e.default } } function Ck(e, t, n, r, i) { let { hover: o, pressed: s, loading: a, error: l } = e || {};

 if (l && i) return "error";

 if (a && r) return "loading";

 if (s && n) return "pressed";

 if (o && t) return "hover" } function ZN(e, t) { let n = t[e];

 return n || `framer-v-${e}` } function Rk(e, t, n) { return e && n.has(e) ? e : t } var JN = Symbol("cycle");

 function e6() { let e = _(), t = _(), n = $(() => { e.current && (document.removeEventListener("visibilitychange", e.current), e.current = void 0, t.current = void 0) }, []);

 return V(() => () => { n() }, [n]), $(r => { if (!document.hidden) { r(), n();

 return } if (t.current = r, e.current) return;

 let i = () => { var o;

 document.hidden || ((o = t.current) == null || o.call(t), n()) };

 e.current = i, document.addEventListener("visibilitychange", i) }, [n]) } function t6() { let e = _(null), t = _(!1), n = _();

 return V(() => () => { var r;

 (r = e.current) == null || r.disconnect(), n.current = void 0, e.current = null }, []), $((r, i) => { if (!i?.current || t.current) { r();

 return } if (n.current = r, e.current) return;

 let o = new IntersectionObserver(s => { var a;

 let l = !1;

 for (let c = 0;

 c < s.length;

 ++c)l = s[c].isIntersecting;

 t.current = l, l && ((a = n.current) == null || a.call(n)) });

 e.current = o, o.observe(i.current) }, []) } function n6(e) { let t = e6(), n = t6();

 return $((r, i = !1) => { if (ja) { r();

 return } t(i && e ? () => n(r, e) : r) }, [t, n, e]) } function lG({ variant: e, defaultVariant: t, transitions: n, enabledGestures: r, cycleOrder: i = [], variantProps: o = {}, variantClassNames: s = {}, ref: a }) { let l = Uu(), c = Ku(), u = ct(() => new Set(i)), { pauseOffscreen: f } = _g(), d = $(O => { if (O) { Ze(() => void l());

 return } l() }, [l]), h = n6(a), p = _({ isHovered: !1, isPressed: !1, isError: !1, hasPressedVariants: !0, baseVariant: Rk(e, t, u), lastVariant: e, gestureVariant: void 0, loadedBaseVariant: {}, defaultVariant: t, enabledGestures: r, cycleOrder: i, transitions: n }), v = $(O => { let { isHovered: X, isPressed: W, isError: ie, enabledGestures: U, defaultVariant: Y } = p.current, le = Rk(O, Y, u), me = Ck(U?.[le], X, W, !1, ie), B = me ? kk(le, me) : void 0;

 return [le, B] }, []), b = $((O, X, W, ie, U = !1, Y = !1, le = !1, me = !1) => { let [B, K] = v(ie);

 B === O && K === X || (me && (p.current.isError = !1), p.current.baseVariant = B || W, p.current.gestureVariant = K, h(() => d(!le || U), f && Y)) }, [v, d, h, f]), g = $(({ isHovered: O, isPressed: X, isError: W }) => { O !== void 0 && (p.current.isHovered = O), X !== void 0 && (p.current.isPressed = X), W !== void 0 && (p.current.isError = W);

 let { baseVariant: ie, gestureVariant: U, defaultVariant: Y } = p.current;

 b(ie, U, Y, ie, W, !(X || O), O) }, [b]), m = $((O, X = !1) => { let { defaultVariant: W, cycleOrder: ie, baseVariant: U, gestureVariant: Y } = p.current, le = O === JN ? KN(ie || [], U || W) : O;

 b(U, Y, W, le, !1, X, !1, !0) }, [b]), y = $(() => { let { baseVariant: O } = p.current;

 p.current.loadedBaseVariant[O] = !0, h(() => d(!0), !0) }, [d, h]);

 if (e !== p.current.lastVariant) { let [O, X] = v(e);

 p.current.lastVariant = O, (O !== p.current.baseVariant || X !== p.current.gestureVariant) && (p.current.baseVariant = O, p.current.gestureVariant = X) } let { baseVariant: x, gestureVariant: C, defaultVariant: w, enabledGestures: R, isHovered: E, isPressed: I, isError: P, loadedBaseVariant: z } = p.current, H = zN(p.current.baseVariant, p.current.gestureVariant, o);

 return q(() => { var O;

 let X = [];

 x !== w && X.push(x);

 let W = (O = R?.[x]) == null ? void 0 : O.loading, ie = !P && !c && !!W && !z[x], U = ie ? kk(x, "loading") : C;

 U && X.push(U);

 let Y = R?.[x], le = { onMouseEnter: () => g({ isHovered: !0 }), onMouseLeave: () => g({ isHovered: !1 }) };

 return Y?.pressed && Object.assign(le, { onTapStart: () => g({ isPressed: !0 }), onTapCancel: () => g({ isPressed: !1 }), onTap: () => g({ isPressed: !1 }) }), { variants: X, baseVariant: x, gestureVariant: U, isLoading: ie, transition: QN(p.current.transitions, x), setVariant: m, setGestureState: g, clearLoadingGesture: y, addVariantProps: H, gestureHandlers: le, classNames: Eu(ZN(x, s), Ck(Y, E, I, ie, P)) } }, [x, C, E, I, z, H, m, w, R, g, y, s]) } function fG(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) { if (!WR()) return r(e);

 let o = r6(e, r), s = !1;

 function a(l, c) { let u = Xu();

 if (iB(t, u?.scopeId, u?.level, i ?? !1)) return o.status === "success" ? k(UR, { errorMessage: Jw(t, n), fallback: k(e, { ...l, ref: c }), children: k(o.Component, { ...l, ref: c }) }) : (s || (jm(o.error), jm(Jw(t, n)), Fg(o.error), s = !0), k(e, { ...l, ref: c }));

 if (o.status === "success") return k(o.Component, { ...l, ref: c });

 throw o.error } return S.forwardRef(a) } function r6(e, t) { try { return { status: "success", Component: t(e) } } catch (n) { return { status: "error", error: n } } } var i6 = new Set(["visibleVariantId", "obscuredVariantId", "threshold", "animateOnce", "variantAppearEffectEnabled", "targets", "exitTarget", "scrollDirection"]), Tk = { inputRange: [], outputRange: [] };

 function o6(e, t, n) { let r = [], i = Tg(e, t, s => r.unshift(s, s));

 if (n) { let s = i[i.length - 1];

 if (!Ee(s)) return Tk;

 i.push(s + 1), r.push(-1) } let o = i[0];

 return Ee(o) ? o <= 1 ? { inputRange: i, outputRange: r } : { inputRange: [0, Math.max(o - 1, 0), ...i], outputRange: [-1, -1, ...r] } : Tk } var vG = e => S.forwardRef((t, n) => { if (se.current() === se.canvas) return k(e, { ...t, ref: n });

 let [r, i] = Z5(t, i6), { visibleVariantId: o, obscuredVariantId: s, animateOnce: a, threshold: l, variantAppearEffectEnabled: c, targets: u, exitTarget: f, scrollDirection: d } = r, [h, p] = S.useState(s), v = S.useRef(!1), b = kg(n);

 return vR(b, g => { r.targets || r.scrollDirection || a && v.current === !0 || v.current !== g && (v.current = g, S.startTransition(() => { p(g ? o : s) })) }, { enabled: c, animateOnce: a, threshold: { y: l } }), S.useEffect(() => { if (d || !u) return;

 let g = {}, m;

 return yr(({ y }) => { var x;

 if (!u[0] || u[0].ref && !u[0].ref.current) return;

 let { inputRange: C, outputRange: w } = o6(u, (l ?? 0) * y.containerLength, f);

 if (C.length === 0 || C.length !== w.length) return;

 let R = Math.floor(yo(y.current, C, w));

 if (a && g[R]) return;

 g[R] = !0;

 let E = ((x = u[R]) == null ? void 0 : x.target) ?? void 0;

 E !== m && (m = E, S.startTransition(() => { p(E) })) }) }, [a, l, u, t.variant, d, f]), zR(d, p, { enabled: c, repeat: !a }), zu(() => { if (!c) return;

 let m = !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;

 S.startTransition(() => p(m)) }), !("variantAppearEffectEnabled" in r) || c === !0 ? k(e, { ...i, variant: h ?? t.variant, ref: b }) : k(e, { ...i }) });

 var s6 = S.createContext(void 0), a6 = () => S.useContext(s6);

 var l6 = { Arial: { Regular: { selector: "Arial", weight: void 0 }, Black: { selector: "Arial-Black", weight: void 0 }, Narrow: { selector: "Arial Narrow", weight: void 0 }, "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 } }, Avenir: { Book: { selector: "Avenir", weight: void 0 }, Light: { selector: "Avenir-Light", weight: void 0 }, Medium: { selector: "Avenir-Medium", weight: void 0 }, Heavy: { selector: "Avenir-Heavy", weight: void 0 }, Black: { selector: "Avenir-Black", weight: void 0 } }, "Avenir Next": { Regular: { selector: "Avenir Next", weight: void 0 }, "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 }, Medium: { selector: "AvenirNext-Medium", weight: void 0 }, "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 }, Heavy: { selector: "AvenirNext-Heavy", weight: void 0 } }, "Avenir Next Condensed": { Regular: { selector: "Avenir Next Condensed", weight: void 0 }, "Ultra Light": { selector: "AvenirNextCondensed-UltraLight", weight: void 0 }, Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 }, "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 }, Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 } }, Baskerville: { Regular: { selector: "Baskerville", weight: void 0 }, "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 } }, "Bodoni 72": { Book: { selector: "Bodoni 72", weight: void 0 }, Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 }, Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 } }, Courier: { Regular: { selector: "Courier", weight: void 0 } }, "Courier New": { Regular: { selector: "Courier New", weight: void 0 } }, Futura: { Medium: { selector: "Futura", weight: void 0 }, Condensed: { selector: "Futura-CondensedMedium", weight: void 0 }, "Condensed ExtraBold": { selector: "Futura-CondensedExtraBold", weight: void 0 } }, Georgia: { Regular: { selector: "Georgia", weight: void 0 } }, "Gill Sans": { Regular: { selector: "Gill Sans", weight: void 0 }, Light: { selector: "GillSans-Light", weight: void 0 }, SemiBold: { selector: "GillSans-SemiBold", weight: void 0 }, UltraBold: { selector: "GillSans-UltraBold", weight: void 0 } }, Helvetica: { Regular: { selector: "Helvetica", weight: void 0 }, Light: { selector: "Helvetica-Light", weight: void 0 }, Bold: { selector: "Helvetica-Bold", weight: void 0 }, Oblique: { selector: "Helvetica-Oblique", weight: void 0 }, "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 }, "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 } }, "Helvetica Neue": { Regular: { selector: "Helvetica Neue", weight: void 0 }, UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 }, Thin: { selector: "HelveticaNeue-Thin", weight: void 0 }, Light: { selector: "HelveticaNeue-Light", weight: void 0 }, Medium: { selector: "HelveticaNeue-Medium", weight: void 0 }, Bold: { selector: "HelveticaNeue-Bold", weight: void 0 }, Italic: { selector: "HelveticaNeue-Italic", weight: void 0 }, "UltraLight Italic": { selector: "HelveticaNeue-UltraLightItalic", weight: void 0 }, "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 }, "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 }, "Medium Italic": { selector: "HelveticaNeue-MediumItalic", weight: void 0 }, "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 }, "Condensed Bold": { selector: "HelveticaNeue-CondensedBold", weight: void 0 }, "Condensed Black": { selector: "HelveticaNeue-CondensedBlack", weight: void 0 } }, "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } }, Impact: { Regular: { selector: "Impact", weight: void 0 } }, "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } }, Menlo: { Regular: { selector: "Menlo", weight: void 0 } }, Monaco: { Regular: { selector: "Monaco", weight: void 0 } }, Optima: { Regular: { selector: "Optima", weight: void 0 }, ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 } }, Palatino: { Regular: { selector: "Palatino", weight: void 0 } }, "SF Pro Display": { Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 }, Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 }, Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 }, Light: { selector: "__SF-UI-Display-Light__", weight: 300 }, Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 }, Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 }, Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 }, Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 }, Black: { selector: "__SF-UI-Display-Black__", weight: 900 }, Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 }, "Ultralight Italic": { selector: "__SF-UI-Display-Ultralight-Italic__", weight: 100 }, "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 }, "Light Italic": { selector: "__SF-UI-Display-Light-Italic__", weight: 300 }, "Medium Italic": { selector: "__SF-UI-Display-Medium-Italic__", weight: 500 }, "Semibold Italic": { selector: "__SF-UI-Display-Semibold-Italic__", weight: 600 }, "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 }, "Heavy Italic": { selector: "__SF-UI-Display-Heavy-Italic__", weight: 800 }, "Black Italic": { selector: "__SF-UI-Display-Black-Italic__", weight: 900 } }, "SF Pro Display Condensed": { Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 }, Ultralight: { selector: "__SF-UI-Display-Condensed-Ultralight__", weight: 100 }, Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 }, Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 }, Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 }, Semibold: { selector: "__SF-UI-Display-Condensed-Semibold__", weight: 600 }, Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 }, Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 }, Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 } }, "SF Pro Text": { Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 }, Light: { selector: "__SF-UI-Text-Light__", weight: 200 }, Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 }, Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 }, Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 }, Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 }, Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 }, "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 }, "Medium Italic": { selector: "__SF-UI-Text-Medium-Italic__", weight: 500 }, "Semibold Italic": { selector: "__SF-UI-Text-Semibold-Italic__", weight: 600 }, "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 }, "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 } }, "SF Pro Text Condensed": { Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 }, Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 }, Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 }, Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 }, Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 }, Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 } }, Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } }, Times: { Regular: { selector: "Times", weight: void 0 } }, "Times New Roman": { Regular: { selector: "Times New Roman", weight: void 0 } }, Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } }, Verdana: { Regular: { selector: "Verdana", weight: void 0 } } }, c6 = { "__SF-Compact-Display-Regular__": "SFCompactDisplay-Regular|.SFCompactDisplay-Regular", "__SF-Compact-Display-Ultralight__": "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight", "__SF-Compact-Display-Thin__": "SFCompactDisplay-Thin|.SFCompactDisplay-Thin", "__SF-Compact-Display-Light__": "SFCompactDisplay-Light|.SFCompactDisplay-Light", "__SF-Compact-Display-Medium__": "SFCompactDisplay-Medium|.SFCompactDisplay-Medium", "__SF-Compact-Display-Semibold__": "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold", "__SF-Compact-Display-Heavy__": "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy", "__SF-Compact-Display-Black__": "SFCompactDisplay-Black|.SFCompactDisplay-Black", "__SF-Compact-Display-Bold__": "SFCompactDisplay-Bold|.SFCompactDisplay-Bold", "__SF-UI-Text-Regular__": ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText", "__SF-UI-Text-Light__": ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light", "__SF-UI-Text-Medium__": ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium", "__SF-UI-Text-Semibold__": ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold", "__SF-UI-Text-Bold__": ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold", "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy", "__SF-UI-Text-Italic__": ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic", "__SF-UI-Text-Light-Italic__": ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic", "__SF-UI-Text-Medium-Italic__": ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic", "__SF-UI-Text-Semibold-Italic__": ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic", "__SF-UI-Text-Bold-Italic__": ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic", "__SF-UI-Text-Heavy-Italic__": ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic", "__SF-Compact-Text-Regular__": "SFCompactText-Regular|.SFCompactText-Regular", "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light", "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium", "__SF-Compact-Text-Semibold__": "SFCompactText-Semibold|.SFCompactText-Semibold", "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold", "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy", "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic", "__SF-Compact-Text-Light-Italic__": "SFCompactText-LightItalic|.SFCompactText-LightItalic", "__SF-Compact-Text-Medium-Italic__": "SFCompactText-MediumItalic|.SFCompactText-MediumItalic", "__SF-Compact-Text-Semibold-Italic__": "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic", "__SF-Compact-Text-Bold-Italic__": "SFCompactText-BoldItalic|.SFCompactText-BoldItalic", "__SF-Compact-Text-Heavy-Italic__": "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic", "__SF-UI-Display-Condensed-Regular__": ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular", "__SF-UI-Display-Condensed-Ultralight__": ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight", "__SF-UI-Display-Condensed-Thin__": ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin", "__SF-UI-Display-Condensed-Light__": ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light", "__SF-UI-Display-Condensed-Medium__": ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium", "__SF-UI-Display-Condensed-Semibold__": ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold", "__SF-UI-Display-Condensed-Bold__": ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold", "__SF-UI-Display-Condensed-Heavy__": ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy", "__SF-UI-Display-Condensed-Black__": ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black", "__SF-UI-Display-Regular__": ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay", "__SF-UI-Display-Ultralight__": ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight", "__SF-UI-Display-Thin__": ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin", "__SF-UI-Display-Light__": ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light", "__SF-UI-Display-Medium__": ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium", "__SF-UI-Display-Semibold__": ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold", "__SF-UI-Display-Bold__": ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold", "__SF-UI-Display-Heavy__": ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy", "__SF-UI-Display-Black__": ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black", "__SF-UI-Display-Italic__": ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic", "__SF-UI-Display-Ultralight-Italic__": ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic", "__SF-UI-Display-Thin-Italic__": ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic", "__SF-UI-Display-Light-Italic__": ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic", "__SF-UI-Display-Medium-Italic__": ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic", "__SF-UI-Display-Semibold-Italic__": ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic", "__SF-UI-Display-Bold-Italic__": ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic", "__SF-UI-Display-Heavy-Italic__": ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic", "__SF-UI-Display-Black-Italic__": ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic", "__SF-UI-Text-Condensed-Regular__": ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular", "__SF-UI-Text-Condensed-Light__": ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light", "__SF-UI-Text-Condensed-Medium__": ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium", "__SF-UI-Text-Condensed-Semibold__": ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold", "__SF-UI-Text-Condensed-Bold__": ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold", "__SF-UI-Text-Condensed-Heavy__": ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy", "__SF-Compact-Rounded-Regular__": "SFCompactRounded-Regular|.SFCompactRounded-Regular", "__SF-Compact-Rounded-Ultralight__": "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight", "__SF-Compact-Rounded-Thin__": "SFCompactRounded-Thin|.SFCompactRounded-Thin", "__SF-Compact-Rounded-Light__": "SFCompactRounded-Light|.SFCompactRounded-Light", "__SF-Compact-Rounded-Medium__": "SFCompactRounded-Medium|.SFCompactRounded-Medium", "__SF-Compact-Rounded-Semibold__": "SFCompactRounded-Semibold|.SFCompactRounded-Semibold", "__SF-Compact-Rounded-Bold__": "SFCompactRounded-Bold|.SFCompactRounded-Bold", "__SF-Compact-Rounded-Heavy__": "SFCompactRounded-Heavy|.SFCompactRounded-Heavy", "__SF-Compact-Rounded-Black__": "SFCompactRounded-Black|.SFCompactRounded-Black" }, Ek = l6;

 function Na(e) { return e.weight !== void 0 && e.style !== void 0 } var u6 = "System Default", f6 = class { constructor() { T(this, "name", "local"), T(this, "fontFamilies", []), T(this, "byFamilyName", new Map), T(this, "fontAliasBySelector", new Map), T(this, "fontAliases", new Map) } getFontFamilyByName(e) { return this.byFamilyName.get(e) ?? null } createFontFamily(e) { let t = { name: e, fonts: [], source: this.name };

 return this.addFontFamily(t), t } addFontFamily(e) { this.fontFamilies.push(e), this.byFamilyName.set(e.name, e) } importFonts() { let e = [];

 for (let r of Object.keys(Ek)) { let i = Ek[r];

 if (!i) continue;

 let o = this.createFontFamily(r);

 for (let s of Object.keys(i)) { let a = i[s];

 if (!a) continue;

 let { selector: l, weight: c } = a, u = { variant: s, selector: l, weight: c, family: o };

 o.fonts.push(u) } e.push(...o.fonts) } for (let [r, i] of Object.entries(c6)) this.addFontAlias(r, i);

 let { fontFamily: t, aliases: n } = this.getSystemFontFamily();

 this.addFontFamily(t);

 for (let [r, i] of n) this.addFontAlias(r, i);

 return e.push(...t.fonts), e } addFontAlias(e, t) { this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e) } getSystemFontFamily() { let e = "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif", t = { name: u6, fonts: [], source: this.name }, n = new Map, r = [400, 100, 200, 300, 500, 600, 700, 800, 900], i = ["normal", "italic"];

 for (let o of i) for (let s of r) { let a = d6(s, o), l = `__SystemDefault-${s}-${o}__`, c = { variant: a, selector: l, style: o, weight: s, family: t };

 t.fonts.push(c), n.set(l, e) } return { fontFamily: t, aliases: n } } getFontAliasBySelector(e) { return this.fontAliasBySelector.get(e) || null } getFontSelectorByAlias(e) { return this.fontAliases.get(e) || null } isFontFamilyAlias(e) { return !!(e && /^__.*__$/u.exec(e)) } }, Fk = { 100: "Thin", 200: "Extra Light", 300: "Light", 400: "Normal", 500: "Medium", 600: "Semi Bold", 700: "Bold", 800: "Extra Bold", 900: "Black" };

 function d6(e, t) { let n = t === "normal" ? "Regular" : "Italic";

 return e === 400 ? n : t !== "normal" ? `${Fk[e]} ${n}` : `${Fk[e]}` } function oE(e) { return !!e.variationAxes } function Rm(e) { return oE(e) && e.family.source !== "custom" ? ig(e.family.name) : e.family.name } function ig(e) { return `${e} Variable` } function Vu(e) { return !!(e && Array.isArray(e)) } function sE(e) { if (!e || !Array.isArray(e)) return;

 let t = [];

 for (let n of e) h6(n) && t.push({ tag: n.tag, name: n.name, minValue: n.minValue, maxValue: n.maxValue, defaultValue: n.defaultValue });

 return t } function aE(e) { return !(typeof e != "object" || e === null || !("tag" in e) || typeof e.tag != "string" || "coverage" in e && typeof e.coverage < "u" && !Array.isArray(e.coverage)) } function h6(e) { return !(typeof e != "object" || e === null || !("tag" in e) || typeof e.tag != "string" || "name" in e && typeof e.name != "string" || !("minValue" in e) || typeof e.minValue != "number" || !("maxValue" in e) || typeof e.maxValue != "number" || !("defaultValue" in e) || typeof e.defaultValue != "number") } var Su = "BI;", Pk = class { constructor() { T(this, "name", "builtIn"), T(this, "fontFamilies", []), T(this, "byFamilyName", new Map), T(this, "assetsByFamily", new Map) } importFonts(e) { this.fontFamilies.length = 0, this.byFamilyName.clear(), this.assetsByFamily.clear();

 let t = [];

 for (let n of e) { if (!this.isValidBuiltInFont(n)) continue;

 let { properties: r } = n, i = r.font.preferredFamily || r.font.fontFamily, o = this.createFontFamily(i, r.font.foundryName, r.font.fontVersion), s = r.font.openTypeData, a = r.font.variationAxes, c = Array.isArray(a) ? "variable" : r.font.preferredSubFamily || r.font.fontSubFamily || "regular", u = { family: o, selector: this.createSelector(i, c, r.font.fontVersion), variant: c, file: n.url, hasOpenTypeFeatures: Vu(s), variationAxes: sE(a), category: r.font.fontCategory, weight: Tm(c), style: Ik(c) };

 o.fonts.push(u), this.assetsByFamily.set(i, n), t.push(u) } for (let n of this.fontFamilies) n.fonts.sort((r, i) => { let o = Tm(r.variant), s = Tm(i.variant);

 return !o || !s ? 1 : o - s });

 return t } static parseVariant(e) { let t = cE(e), n = lE[t], r = Ik(e);

 return { weight: n, style: r } } getFontBySelector(e, t = !0) { let n = this.parseSelector(e);

 if (!n || !t && !this.byFamilyName.get(n.name)) return;

 let r = this.getFontFamilyByName(n.name);

 if (r) return r.fonts.find(i => i.selector === e) } getFontFamilyByName(e) { return this.byFamilyName.get(e) ?? null } createFontFamily(e, t, n) { let r = this.byFamilyName.get(e);

 if (r && r.version === n) return r;

 let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };

 return this.addFontFamily(i), i } getOpenTypeFeatures(e) { var t, n;

 let r = this.assetsByFamily.get(e), i = (n = (t = r?.properties) == null ? void 0 : t.font) == null ? void 0 : n.openTypeData;

 return Vu(i) ? i?.map(o => { if (aE(o)) return { tag: o.tag, coverage: o.coverage } }) : [] } isValidBuiltInFont(e) { var t;

 return !e.mimeType.startsWith("font/") || ((t = e.properties) == null ? void 0 : t.kind) !== "font" || !e.properties.font || !e.properties.font.fontVersion || !e.properties.font.fontFamily ? !1 : "fontFamily" in e.properties.font } createSelector(e, t, n) { return `${Su}${e}/${t}/${n}` } parseSelector(e) { if (!e.startsWith(Su)) return null;

 let [t, n] = e.split(Su);

 if (n === void 0) return null;

 let [r, i, o] = n.split("/");

 return !r || !i || !o ? null : { name: r, variant: i, source: this.name, isVariable: i.toLowerCase().includes("variable") } } addFontFamily(e) { this.fontFamilies.push(e), this.byFamilyName.set(e.name, e) } }, lE = { ultralight: 100, "ultralight-italic": 100, thin: 200, "thin-italic": 200, demi: 200, light: 300, "light-italic": 300, normal: 350, base: 400, regular: 400, classic: 400, "regular-slanted": 400, italic: 400, oblique: 400, dense: 400, brukt: 300, book: 400, "book-italic": 400, text: 400, "text-italic": 400, medium: 500, solid: 500, "medium-oblique": 500, "medium-italic": 500, mittel: 500, semibold: 600, "semibold-italic": 600, bold: 700, "bold-italic": 700, "bold-oblique": 700, fett: 700, ultrabold: 800, "ultrabold-italic": 800, extrabold: 800, "extrabold-italic": 800, black: 900, "black-italic": 900, "extra-italic": 900, "extra-italic-bold": 900, satt: 900, heavy: 900, "heavy-italic": 900, serif: 100, school: 200, expanded: 300, gothique: 500, "dense-light": 200, "dense-regular": 300, "dense-medium": 400, "dense-bold": 500, "solid-light": 600, "solid-regular": 700, "solid-medium": 800, "solid-bold": 900, 53: 400, 55: 600, variable: 1e3, "variable-italic": 1e3 };

 function Tm(e) { let t = cE(e);

 return lE[t] } function cE(e) { return e.toLowerCase().replace(/\s+/gu, "-") } function Ik(e) { return e = e.toLowerCase(), e.includes("italic") || e.includes("oblique") || e.includes("slanted") ? "italic" : "normal" } var es = "CUSTOM;";

 function p6(e, t) { if (!t) return e.substring(0, e.lastIndexOf("."));

 let { font: n } = t, r = n.preferredFamily || n.fontFamily, i = Array.isArray(n.variationAxes);

 if (i && r.toLowerCase().includes("variable")) return r;

 let o = i ? "Variable" : (n.preferredSubFamily || n.fontSubFamily).trim();

 return o === "" ? r : `${r} ${o}` } var m6 = class { constructor() { T(this, "name", "custom"), T(this, "fontFamilies", []), T(this, "byFamilyName", new Map), T(this, "assetsByFamily", new Map) } importFonts(e) { var t, n, r;

 this.fontFamilies.length = 0, this.byFamilyName.clear(), this.assetsByFamily.clear();

 let i = [];

 for (let o of e) { if (!this.isValidCustomFontAsset(o)) continue;

 let s = (t = o.properties) == null ? void 0 : t.font.variationAxes, a = Array.isArray(s), l = p6(o.name, o.properties), c = this.createFontFamily(l), u = (n = o.properties) == null ? void 0 : n.font.openTypeData, f = a ? "variable" : this.inferVariantName(l), d = { family: c, selector: `${es}${l}`, variant: f, postscriptName: (r = o.properties) == null ? void 0 : r.font.postscriptName, file: o.url, hasOpenTypeFeatures: Vu(u), variationAxes: sE(s) };

 c.fonts.push(d), c.owner = o.ownerType === "team" ? "team" : "project", this.assetsByFamily.set(l, o), i.push(...c.fonts) } return i } isValidCustomFontAsset(e) { var t;

 return !e.mimeType.startsWith("font/") || ((t = e.properties) == null ? void 0 : t.kind) !== "font" || !e.properties.font ? !1 : "fontFamily" in e.properties.font } getOpenTypeFeatures(e) { var t, n;

 let r = this.assetsByFamily.get(e), i = (n = (t = r?.properties) == null ? void 0 : t.font) == null ? void 0 : n.openTypeData;

 return Vu(i) ? i?.map(o => { if (aE(o)) return { tag: o.tag, coverage: o.coverage } }) : [] } inferVariantName(e) { let t = ["thin", "ultra light", "extra light", "light", "normal", "medium", "semi bold", "bold", "extra bold", "black"], n = [...t.map(s => `${s} italic`), ...t], r = e.toLowerCase(), i = [...r.split(" "), ...r.split("-"), ...r.split("_")], o = n.find(s => i.includes(s) || i.includes(s.replace(/\s+/gu, "")));

 return o ? o.replace(/^\w|\s\w/gu, s => s.toUpperCase()) : "Regular" } createFontFamily(e) { let t = this.byFamilyName.get(e);

 if (t) return t;

 let n = { source: this.name, name: e, fonts: [] };

 return this.addFontFamily(n), n } addFontFamily(e) { this.fontFamilies.push(e), this.byFamilyName.set(e.name, e) } parseSelector(e) { if (!e.startsWith(es)) return null;

 let t = e.split(es);

 return t[1] === void 0 ? null : { source: "custom", name: t[1] } } getFontBySelector(e, t = !0) { let n = this.parseSelector(e);

 if (!n || !t && !this.byFamilyName.get(n.name)) return;

 let r = this.getFontFamilyByName(n.name).fonts;

 return r.find(o => { var s;

 return (s = o.file) == null ? void 0 : s.endsWith(".woff2") }) || r[0] } getFontFamilyByName(e) { let t = this.byFamilyName.get(e);

 if (t) return t;

 let n = { source: "custom", name: e, fonts: [] };

 return n.fonts.push({ selector: `${es}${e}`, variant: this.inferVariantName(e), family: n }), n } };

 function uE(e, t) { return { ...g6(e, t), ...v6(e, t) } } function g6(e, t) { if (t.length === 0) return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };

 let { weight: n, style: r } = e, i = new Map, o = new Map;

 for (let u of t) u.isVariable === e.isVariable && (i.set(`${u.weight}-${u.style}`, u), !(u.weight <= n) && (o.has(u.style) || o.set(u.style, u)));

 let s = o.get(r), a = o.get("italic"), l = e.weight;

 l <= 300 ? (s = i.get(`400-${r}`) ?? s, a = i.get("400-italic") ?? a) : l <= 500 ? (s = i.get(`700-${r}`) ?? s, a = i.get("700-italic") ?? a) : (s = i.get(`900-${r}`) ?? s, a = i.get("900-italic") ?? a);

 let c = i.get(`${n}-italic`);

 return { variantBold: s, variantItalic: c, variantBoldItalic: a } } function v6(e, t) { if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };

 let n = new Map;

 for (let r of t) r.isVariable && n.set(`${r.weight}-${r.style}`, r);

 return { variantVariable: n.get(`${e.weight}-normal`) ?? n.get("400-normal") ?? void 0, variantVariableItalic: n.get(`${e.weight}-italic`) ?? n.get("400-italic") ?? void 0 } } async function fE(e) { switch (e) { case "google": { let t = await import("./google-LHIHIYDX-HEWX5T7R.mjs");

 return t?.default } case "fontshare": { let t = await import("./fontshare-G3KSKQMF-BIERCMIN.mjs");

 return t?.default } default: throw new Error(`Unknown font source: ${e}`) } } async function $g(e) { switch (e) { case "google": { let t = await import("./google-3GQMHAEU-XEAJQDAT.mjs");

 return t?.default } case "fontshare": { let t = await import("./fontshare-PSV545VO-DLF34JHG.mjs");

 return t?.default } case "framer": { let t = await import("./framer-font-TNC5DMGA-2BTIWRIH.mjs");

 return t?.default } default: throw new Error(`Unknown font source: ${e}`) } } var y6 = ["display", "sans", "serif", "slab", "handwritten", "script"];

 function b6(e) { return e.split(",").map(t => t.trim().toLowerCase()).filter(x6) } function x6(e) { return y6.includes(e) } var La = "FS;", dE = { thin: 100, hairline: 100, extralight: 200, light: 300, regular: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800, ultra: 800, black: 900, heavy: 900 }, hE = Object.keys(dE), S6 = new RegExp(`^(?:${[...hE, "italic", "variable"].join("|")})`, "u"), _k = class Qo { constructor() { T(this, "name", "fontshare"), T(this, "fontFamilies", []), T(this, "byFamilyName", new Map) } getFontFamilyByName(t) { return this.byFamilyName.get(t) ?? null } static parseVariant(t) { let n = t.toLowerCase().split(" "), r = hE.find(a => n.includes(a)), i = t.toLowerCase().includes("italic") ? "italic" : "normal";

 return { weight: r && dE[r] || 400, style: i === "italic" ? i : "normal" } } parseSelector(t) { if (!t.startsWith(La)) return null;

 let n = t.split("-");

 if (n.length !== 2) return null;

 let [r, i] = n;

 return !r || !i ? null : { name: r.replace(La, ""), variant: i, source: this.name, isVariable: i.toLowerCase().includes("variable") } } static createSelector(t, n) { return `${La}${t}-${n.toLowerCase()}` } static createMetadataSelector(t) { return `${La}${t}` } addFontFamily(t) { this.fontFamilies.push(t), this.byFamilyName.set(t.name, t) } async importFonts(t, n) { this.fontFamilies.length = 0, this.byFamilyName.clear();

 let r = await fE("fontshare"), i = [];

 for (let o of t) { let a = o.font_styles.filter(p => { let v = p.name.toLowerCase();

 return !(!S6.exec(v) || v.split(" ").includes("wide")) }).map(p => ({ ...Qo.parseVariant(p.name), selector: Qo.createSelector(o.name, p.name), isVariable: p.is_variable, fontshareVariantName: p.name, file: p.file })), l = Qo.createMetadataSelector(o.name), c = n?.[l], u = o.name, f = this.getFontFamilyByName(u);

 f || (f = { name: u, fonts: [], source: this.name }, this.addFontFamily(f));

 let d = Qo.createMetadataSelector(o.name), h = r[d];

 for (let p of a) { let { variantBold: v, variantBoldItalic: b, variantItalic: g, variantVariable: m, variantVariableItalic: y } = uE(p, a), x = { family: f, variant: p.fontshareVariantName.toLowerCase(), selector: p.selector, selectorBold: v?.selector, selectorBoldItalic: b?.selector, selectorItalic: g?.selector, selectorVariable: m?.selector, selectorVariableItalic: y?.selector, weight: p.weight, style: p.style, file: p.file, category: w6(o.category), hasOpenTypeFeatures: h, variationAxes: p.isVariable ? c : void 0 };

 f.fonts.push(x), i.push(x) } } return i } async getOpenTypeFeatures(t) { let n = await $g("fontshare"), r = Qo.createMetadataSelector(t);

 return n[r] } };

 function w6(e) { let t = { serif: "serif", sans: "sans-serif", slab: "slab", display: "display", handwritten: "handwriting", script: "handwriting" }, n = b6(e)[0];

 return n && t[n] } var k6 = "Inter", Mk = "FR;", C6 = { Thin: 100, ExtraLight: 200, Light: 300, "": 400, Medium: 500, SemiBold: 600, Bold: 700, ExtraBold: 800, Black: 900 }, Ok = class og { constructor() { T(this, "name", "framer"), T(this, "fontFamilies", []), T(this, "byFamilyName", new Map) } getFontFamilyByName(t) { return this.byFamilyName.get(t) ?? null } addFontFamily(t) { let n = { name: t, fonts: [], source: this.name };

 return this.fontFamilies.push(n), this.byFamilyName.set(n.name, n), n } static getDraftFontPropertiesBySelector(t) { if (!t.startsWith(Mk) && !t.startsWith(k6)) return null;

 let n = t.split("-"), [r, i = ""] = n;

 if (!r) return null;

 let o = i.includes("Italic") ? "italic" : "normal", s = i.replace("Italic", ""), a = s && C6[s] || 400;

 return { family: r, style: o, weight: a, source: "framer", variant: void 0, category: "sans-serif" } } static createMetadataSelector(t) { return `${Mk}${t}` } importFonts(t, n) { this.fontFamilies.length = 0, this.byFamilyName.clear();

 let r = [];

 return t.forEach(i => { let { familyName: o, ...s } = i, a = og.createMetadataSelector(i.familyName), l = n?.[a], c = this.getFontFamilyByName(o);

 c || (c = this.addFontFamily(o));

 let u = i.selector === i.selectorVariable || i.selector === i.selectorVariableItalic, f = { ...s, family: c, variationAxes: u ? l : void 0 };

 c.fonts.push(f), r.push(f) }), r } async getOpenTypeFeatures(t) { let n = await $g("framer"), r = og.createMetadataSelector(t);

 return n[r] } }, Va = "GF;", Lk = class hi { constructor() { T(this, "name", "google"), T(this, "fontFamilies", []), T(this, "byFamilyName", new Map) } getFontFamilyByName(t) { return this.byFamilyName.get(t) ?? null } static parseVariant(t) { if (t === "regular") return { style: "normal", weight: 400 };

 let n = /(\d*)(normal|italic)?/u.exec(t);

 if (!n) return {};

 let r = parseInt(n[1] || "400"), i = n[2] === "italic" ? "italic" : "normal";

 return { weight: r, style: i } } parseSelector(t) { if (!t.startsWith(Va)) return null;

 let n = t.includes("-variable-"), r = n ? t.split("-variable-") : t.split("-");

 if (r.length !== 2) return null;

 let [i, o] = r;

 return !i || !o ? null : { name: i.replace(Va, ""), variant: o, source: this.name, isVariable: n } } static createSelector(t, n, r) { return `${Va}${t}-${r ? "variable-" : ""}${n}` } static createMetadataSelector(t) { return `${Va}${t}` } addFontFamily(t) { let n = { name: t, fonts: [], source: this.name };

 return this.fontFamilies.push(n), this.byFamilyName.set(n.name, n), n } async importFonts(t, n, r) { var i;

 this.fontFamilies.length = 0, this.byFamilyName.clear();

 let o = await fE("google"), s = [], a = Vk(t, c => c.family), l = Vk(n, c => c.family);

 for (let c in a) { let u = a[c];

 if (!u) continue;

 let f = this.getFontFamilyByName(u.family);

 f || (f = this.addFontFamily(u.family));

 let h = u.variants.map(w => ({ ...hi.parseVariant(w), googleFontsVariantName: w, selector: hi.createSelector(c, w, !1), isVariable: !1, file: u.files[w] })), p = l[c], v = p?.axes ? p.variants.map(w => ({ ...hi.parseVariant(w), googleFontsVariantName: w, selector: hi.createSelector(c, w, !0), isVariable: !0, file: p.files[w] })) : [], b = hi.createMetadataSelector(u.family), g = r?.[b], m = [...h, ...v], y = m.filter(Na), x = hi.createMetadataSelector(c), C = o[x];

 for (let w of m) { let { weight: R, style: E, selector: I, googleFontsVariantName: P } = w, z = Na(w) ? uE(w, y) : void 0, { variantBold: H, variantItalic: O, variantBoldItalic: X, variantVariable: W, variantVariableItalic: ie } = z ?? {}, U = { family: f, variant: P, selector: I, selectorBold: H?.selector, selectorBoldItalic: X?.selector, selectorItalic: O?.selector, selectorVariable: W?.selector, selectorVariableItalic: ie?.selector, weight: R, style: E, category: R6(u.category), file: (i = w.file) == null ? void 0 : i.replace("http://", "https://"), variationAxes: w.isVariable ? g : void 0, hasOpenTypeFeatures: C };

 f.fonts.push(U), s.push(U) } } return s } async getOpenTypeFeatures(t) { let n = await $g("google"), r = hi.createMetadataSelector(t);

 return n[r] } };

 function R6(e) { let t = { serif: "serif", "sans-serif": "sans-serif", display: "display", handwriting: "handwriting", monospace: "monospace" };

 if (e) return t[e] } function Vk(e, t) { return e.reduce((n, r) => (n[t(r)] = r, n), {}) } var T6 = eo(QL(), 1), Ak = 5e3, E6 = 3, pE = class extends Error { constructor(e) { super(e), this.name = "FontLoadingError" } }, Em = new Map, Fm = new Map, Dk = (e, t) => mE(e, t);

 async function mE(e, t, n = 0) { let { family: r, url: i, stretch: o, unicodeRange: s, isVariableFont: a } = e, l = a ? e.weight : e.weight || 500, c = e.style || "normal", u = `${r}-${c}-${l}-${i}`;

 if (!Em.has(u) || n > 0) { let f = new FontFace(r, `url(${i})`, { weight: re(l) ? l : l?.toString(), style: c, stretch: o, unicodeRange: s }), d = f.load().then(() => (t.fonts.add(f), gE(r, c, l))).catch(h => { if (h.name !== "NetworkError") throw h;

 if (n < E6) return mE(e, t, n + 1);

 throw new pE(`Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: l, url: i, stretch: o, unicodeRange: s })}`) });

 Em.set(u, d) } await Em.get(u) } async function gE(e, t, n) { let r = `${e}-${t}-${n}`;

 if (!Fm.has(r)) { let o = new T6.default(e, { style: t, weight: n }).load(null, Ak);

 Fm.set(r, o) } try { await Fm.get(r) } catch { throw new pE(`Failed to check if font is ready (${Ak}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`) } } var zk = { "FR;Inter": [{ tag: "opsz", minValue: 14, maxValue: 32, defaultValue: 14, name: "Optical size" }, { tag: "wght", minValue: 100, maxValue: 900, defaultValue: 400, name: "Weight" }] };

 function Pm(e) { try { if (e === "framer") return Bk(zk) ? zk : void 0;

 { let t = (async () => { switch (e) { case "google": return (await import("./google-LMM7WH6E-GLH52XOM.mjs")).default;

 case "fontshare": return (await import("./fontshare-YYTAVKI7-OH5DUV2U.mjs")).default;

 default: Ce(e) } })();

 return Bk(t) ? t : void 0 } } catch (t) { console.error(t);

 return } } function Bk(e) { return ue(e) && Object.values(e).every(P6) } function F6(e) { return ue(e) && re(e.tag) } function P6(e) { return Array.isArray(e) && e.every(F6) } var I6 = class { constructor() { T(this, "enabled", !1), T(this, "bySelector", new Map), T(this, "getGoogleFontsListPromise"), T(this, "getFontshareFontsListPromise"), T(this, "getBuiltInFontsListPromise"), T(this, "loadedSelectors", new Set), T(this, "local"), T(this, "google"), T(this, "fontshare"), T(this, "builtIn"), T(this, "framer"), T(this, "custom"), this.local = new f6, this.google = new Lk, this.fontshare = new _k, this.framer = new Ok, this.custom = new m6, this.builtIn = new Pk, this.bySelector = new Map, this.importLocalFonts() } addFont(e) { this.bySelector.set(e.selector, e) } getAvailableFonts() { return Array.from(this.bySelector.values()) } importLocalFonts() { for (let e of this.local.importFonts()) this.addFont(e), this.loadFont(e) } async importGoogleFonts() { return this.getGoogleFontsListPromise || (this.getGoogleFontsListPromise = Promise.resolve().then(async () => { let { staticFonts: e, variableFonts: t } = await lt.fetchGoogleFontsList(), n = await Pm("google");

 for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);

 return { staticFonts: e, variableFonts: t } })), this.getGoogleFontsListPromise } async importFontshareFonts() { if (!this.getFontshareFontsListPromise) { this.getFontshareFontsListPromise = lt.fetchFontshareFontsList();

 let e = await this.getFontshareFontsListPromise, t = await Pm("fontshare");

 for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n) } return this.getFontshareFontsListPromise } async importBuiltInFonts() { if (!this.getBuiltInFontsListPromise) { this.getBuiltInFontsListPromise = lt.fetchBuiltInFontsList();

 let e = await this.getBuiltInFontsListPromise;

 for (let t of await this.builtIn.importFonts(e)) this.addFont(t) } return this.getBuiltInFontsListPromise } importFramerFonts(e) { let t = Pm("framer");

 this.framer.importFonts(e, t).forEach(n => { this.addFont(n) }) } importCustomFonts(e) { this.bySelector.forEach((t, n) => { n.startsWith(es) && this.bySelector.delete(n) });

 for (let t of this.custom.importFonts(e)) this.addFont(t) } getFontFamily(e) { return this[e.source].getFontFamilyByName(e.name) } getFontBySelector(e, t = !0) { if (e) return e.startsWith(es) ? this.custom.getFontBySelector(e, t) : this.bySelector.get(e) } getDraftPropertiesBySelector(e) { let t = this.getFontBySelector(e);

 if (t) return { style: t.style, weight: t.weight, variant: t.variant, family: Rm(t), source: t.family.source, category: t.category };

 let n = this.google.parseSelector(e);

 if (n) { let s = Lk.parseVariant(n.variant);

 if (Na(s)) { let a = n.isVariable ? ig(n.name) : n.name;

 return { style: s.style, weight: s.weight, variant: n.variant, family: a, source: "google", category: void 0 } } } let r = this.fontshare.parseSelector(e);

 if (r) { let s = _k.parseVariant(r.variant);

 if (Na(s)) { let a = r.isVariable ? ig(r.name) : r.name;

 return { style: s.style, weight: s.weight, variant: r.variant, family: a, source: "fontshare", category: void 0 } } } let i = this.builtIn.parseSelector(e);

 if (i) { let s = Pk.parseVariant(i.variant);

 if (Na(s)) return { style: s.style, weight: s.weight, variant: i.variant, family: i.name, source: "builtIn", category: void 0 } } let o = Ok.getDraftFontPropertiesBySelector(e);

 return o || null } isSelectorLoaded(e) { return this.loadedSelectors.has(e) } async loadFont(e) { if (this.isSelectorLoaded(e.selector)) return 0;

 let t = e.family.source, n = oE(e);

 switch (t) { case "local": return this.loadedSelectors.add(e.selector), 1;

 case "framer": if (yg() || await gE(e.family.name, e.style, e.weight), n) { if (!e.file) return Promise.reject(`Unable to load font: ${e.selector}`);

 await Dk({ family: Rm(e), url: e.file, weight: e.weight, style: e.style, isVariableFont: n }, document) } return this.loadedSelectors.add(e.selector), 1;

 case "google": case "fontshare": case "builtIn": case "custom": return e.file ? (await Dk({ family: Rm(e), url: e.file, weight: e.weight, style: e.style, isVariableFont: n }, document), this.loadedSelectors.add(e.selector), 1) : Promise.reject(`Unable to load font: ${e.selector}`);

 default: Ce(t) } } async loadFontsFromSelectors(e) { if (!this.enabled) return [];

 let t = [];

 e.some(s => s.startsWith(La)) && t.push(this.importFontshareFonts().catch(s => { ns("Failed to load Fontshare fonts:", s) })), e.some(s => s.startsWith(Va)) && t.push(this.importGoogleFonts().catch(s => { ns("Failed to load Google fonts:", s) })), e.some(s => s.startsWith(Su)) && t.push(this.importBuiltInFonts().catch(s => { ns("Failed to load built-in fonts:", s) })), t.length > 0 && await Promise.all(t);

 let o = e.map(s => this.bySelector.get(s)).filter(s => !!s);

 return Promise.allSettled(o.map(s => this.loadFont(s))) } async loadFonts(e) { return { newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(r => r.status === "fulfilled" && r.value === 1).length } } async loadMissingFonts(e, t) { let n = e.filter(i => !wu.isSelectorLoaded(i));

 if (n.length === 0) return;

 await wu.loadWebFontsFromSelectors(n), n.every(i => wu.isSelectorLoaded(i)) && t && t() } async loadWebFontsFromSelectors(e) { return this.loadFontsFromSelectors(e) } get defaultFont() { let e = this.getFontBySelector("Inter");

 return A(e, "Can\u2019t find Inter font"), e } }, wu = new I6;

 var OG = S.forwardRef(function (t, n) { let { background: r, children: i, alt: o, draggable: s, ...a } = t, l = { ...a.style };

 r && delete l.background;

 let c = cs(t.as);

 return de(c, { ...a, style: l, ref: n, children: [r && k(nR, { image: r, alt: o, draggable: s }), i] }) }), _6 = /[^\p{Letter}\p{Number}()]+/gu, M6 = /^-+|-+$/gu;

 function O6(e) { return e.toLowerCase().replace(_6, "-").replace(M6, "") } var L6 = /[&<>'"]/gu, V6 = e => e.replace(L6, t => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[t] || t), A6 = /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;

 function D6(e, t, n, r) { return e.replace(A6, (i, o, s, a, l, c, u) => { var f, d;

 if (s.toLowerCase() !== "a") return i;

 let h = l || c, p = Og(h.replace(/&amp;/gu, "&"));

 if (!p || !p.target) return i;

 let v = t(p.target);

 if (!wk(v) || !wk(n)) return i;

 let b = v.path, g = n.path;

 if (!b || !g) return i;

 let m = ` data-framer-page-link-target="${p.target}"`, y = Bu(v, p.element ?? void 0);

 y && (m += ` data-framer-page-link-element="${p.element}"`);

 let x = os(h);

 if (!x || re(x)) return i;

 oT(n, x, r) && (m += " data-framer-page-link-current");

 let C = b, w = Object.assign({}, r, (f = p.collectionItem) == null ? void 0 : f.pathVariables);

 if (Object.keys(w).length > 0 && (C = C.replace(rT, (R, E) => "" + w[E])), (d = p.collectionItem) != null && d.pathVariables) { let R = new URLSearchParams(p.collectionItem.pathVariables);

 m += ` data-framer-page-link-path-variables="${R}"` } return C = Om(g, C), o + a + `"${V6(C + (y ? `#${y}` : ""))}"` + m + u }) } function z6(e, t) { return e.length === t.length && e.every((n, r) => n === t[r]) } var B6 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, vE = /[&<>"']/gu, $6 = new RegExp(vE.source);

 function $k(e) { return e && $6.test(e) ? e.replace(vE, t => B6[t] ?? "") : e || "" } var Nk = "{{ text-placeholder }}", N6 = "rich-text-wrapper", j6 = xe(function (t, n) { let { id: r, name: i, html: o, htmlFromDesign: s, text: a, textFromDesign: l, fonts: c = [], width: u, height: f, left: d, right: h, top: p, bottom: v, center: b, className: g, stylesPresetsClassName: m, visible: y = !0, opacity: x, rotation: C = 0, verticalAlignment: w = "top", isEditable: R = !1, environment: E = se.current, withExternalLayout: I = !1, positionSticky: P, positionStickyTop: z, positionStickyRight: H, positionStickyBottom: O, positionStickyLeft: X, __htmlStructure: W, __fromCanvasComponent: ie = !1, _forwardedOverrideId: U, _forwardedOverrides: Y, _usesDOMRect: le, children: me, ...B } = t, K = Ya(), Z = us(t), Fe = _(null), we = n ?? Fe, { navigate: Ie, getRoute: _e } = Qi(), Re = gi();

 mV(t.preload ?? []), Gu(t, we);

 let Bt = L(fs), kt = Ku(), fr = a, oe = U ?? r;

 if (oe && Y) { let $t = Y[oe];

 typeof $t == "string" && (fr = $t) } let Zt = "";

 if (fr) { let $t = $k(fr);

 Zt = W ? W.replace(Nk, $t) : `<p>${$t}</p>` } else if (o) Zt = o;

 else if (l) { let $t = $k(l);

 Zt = W ? W.replace(Nk, $t) : `<p>${$t}</p>` } else s && (Zt = s);

 let En = iT(), hn = q(() => kt || !_e || !Re ? Zt : D6(Zt, _e, Re, En), [Zt, _e, Re, En]);

 if (V(() => { let $t = we.current;

 if ($t === null) return;

 function Hg(Zu) { let Ju = Yu(Zu.target, we.current);

 if (Zu.metaKey || !Ie || !Ju || Ju.getAttribute("target") === "_blank") return;

 MB(Ie, Ju, En) && Zu.preventDefault() } return $t.addEventListener("click", Hg), () => { $t.removeEventListener("click", Hg) } }, [Ie, En]), bE(c, ie, we), et(() => { Ka() }, []), !y) return null;

 let Ja = R && E() === se.canvas, De = { outline: "none", display: "flex", flexDirection: "column", justifyContent: yE(w), opacity: Ja ? 0 : x, flexShrink: 0 }, Ji = se.hasRestrictions(), Hn = Ha(t, K || 0, !1), jg = le && (u === "auto" || f === "auto"), TE = !!t.transformTemplate || !Hn || !Ji || ie || jg ? t.transformTemplate ?? Wu(b) : void 0;

 if (!I) { if (Hn && Ji && !jg) { let $t = at.getNumber(C).toFixed(4);

 De.transform = `translate(${Hn.x}px, ${Hn.y}px) rotate(${$t}deg)`, De.width = Hn.width, De.minWidth = Hn.width, De.height = Hn.height } else De.left = d, De.right = h, De.top = p, De.bottom = v, De.width = u, De.height = f, De.rotate = C;

 P ? (!kt || Bt) && (De.position = "sticky", De.willChange = "transform", De.zIndex = 1, De.top = z, De.right = H, De.bottom = O, De.left = X) : kt && (t.positionFixed || t.positionAbsolute) && (De.position = "absolute") } return Cg(t, De), yR(t, De), Object.assign(De, t.style), k(Ht.div, { id: r, ref: we, ...B, style: De, layoutId: Z, "data-framer-name": i, "data-framer-component-type": "DeprecatedRichText", "data-center": b, className: Eu(g, m, N6), transformTemplate: TE, dangerouslySetInnerHTML: { __html: hn } }) });

 function yE(e) { switch (e) { case "top": return "flex-start";

 case "center": return "center";

 case "bottom": return "flex-end" } } function bE(e, t, n) { let r = _([]);

 z6(r.current, e) || (r.current = e, wu.loadFonts(e).then(({ newlyLoadedFontCount: i }) => { !t || !n.current || se.current() !== se.canvas || i > 0 && s4(n.current) })) } function sg() { return { current: null } } async function xE(e, t) { let n = e.current;

 if (n) return n;

 let r, i = new Promise((o, s) => { r = o, t.signal.addEventListener("abort", () => s()) });

 return Object.defineProperty(e, "current", { get() { return n }, set(o) { if (n = o, o === null) { t.abort();

 return } r(o) }, configurable: !0 }), i } var SE = { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0, rotateX: 0, rotateY: 0, skewX: 0, skewY: 0, filter: "none" };

 function H6(e) { return e in SE } function W6(e) { let t = {};

 for (let n in e) { if (!H6(n)) continue;

 let r = e[n], i = SE[n];

 ut(r) || ut(i) || (t[n] = [r, i]) } return t } var U6 = new RegExp("\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.", "gu");

 function G6(e, t = "character", n, r) { switch (t) { case "character": case "line": { let i = e.split(" "), o = i.length - 1;

 return i.map((s, a) => { var l;

 let c = a === o, u = s.length <= 12;

 return de(pn, { children: [k("span", { style: { whiteSpace: u ? "nowrap" : "unset" }, children: (l = s.match(U6)) == null ? void 0 : l.map((f, d) => { let h = sg();

 return n.add(h), k("span", { ref: h, style: r, children: f }, f + d) }) }), c ? null : " "] }, s + a + c) }) } case "word": { let i = e.split(" "), o = i.length - 1;

 return i.map((s, a) => { let l = a === o, c = sg();

 return n.add(c), de(pn, { children: [k("span", { ref: c, style: r, children: s }), l ? null : " "] }, s + a + l) }) } case "element": default: return e } } function q6(e) { let t = e.type;

 switch (t) { case "appear": return e.tokenization ?? "character";

 default: Ce(t) } } function jk(e) { let t = [];

 return Ee(e.x) && t.push(`translateX(${e.x}px)`), Ee(e.y) && t.push(`translateY(${e.y}px)`), Ee(e.scale) && t.push(`scale(${e.scale})`), Ee(e.rotate) && t.push(`rotate(${e.rotate}deg)`), Ee(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`), Ee(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`), Ee(e.skewX) && t.push(`skewX(${e.skewX}deg)`), Ee(e.skewY) && t.push(`skewY(${e.skewY}deg)`), t.join(" ") } function X6(e, t, n) { if (!n || !n.effect) return;

 let r = n.type;

 switch (r) { case "appear": switch (n.tokenization) { case "element": return !e || !t ? void 0 : { opacity: n.effect.opacity, filter: n.effect.filter, transform: jk(n.effect) };

 case "line": case "word": case "character": default: return !e || !t ? { display: "inline-block" } : { display: "inline-block", opacity: n.effect.opacity, filter: n.effect.filter, transform: jk(n.effect) } }default: Ce(r) } } function Y6(e, t, n) { let r = ct(() => new Set), i = Qa(), o = n || !i, s = _({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });

 s.current.effect = e;

 let a = e?.trigger ?? "onMount", l = e?.target, c = e?.threshold;

 V(() => { if (!o || n) return;

 s.current.hasMounted = !0;

 function d() { let { effect: h } = s.current;

 if (!o || !h || h?.repeat !== !0 && s.current.hasAnimatedOnce || h?.type === "appear" && s.current.isAnimating) return;

 Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });

 let p = h.type;

 switch (p) { case "appear": { let { transition: v, startDelay: b, repeat: g, tokenization: m } = h, y = { current: void 0 };

 return Hk(m, h.effect, r, v, b, g, () => { Object.assign(s.current, { isAnimating: !1 }) }, y), () => { var x;

 return (x = y.current) == null ? void 0 : x.call(y) } } default: Ce(p) } } switch (a) { case "onMount": d();

 return;

 case "onInView": { let h = t?.current;

 return h ? Al(h, d, { amount: c ?? 0 }) : void 0 } case "onScrollTarget": { let h = l?.ref.current;

 return h ? Al(h, d, { amount: c ?? 0, root: document, margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0 }) : void 0 } default: Ce(a) } }, [o, r, n, t, l, c, a]);

 let u = !!e, f = e ? q6(e) : void 0;

 return q(() => ({ getTokenizer: () => { if (r.clear(), !u) return;

 let { hasMounted: d, hasAnimatedOnce: h, effect: p } = s.current, v = X6(o, n || K6(d, h, p), s.current.effect);

 return { text: b => G6(b, f, r, v), props: b => { if (p?.tokenization !== "element") return;

 let g = sg();

 return r.add(g), { ref: g, style: { ...b, ...v } } } } }, play: () => { let { effect: d } = s.current;

 if (!d) return;

 let h = d.type;

 switch (h) { case "appear": { let { transition: p, startDelay: v } = d;

 Hk(f, d.effect, r, p, v);

 break } default: Ce(h) } } }), [o, u, r, n, f]) } function K6(e, t, n) { return !(e && n?.trigger === "onMount" || t && !n?.repeat && (n?.trigger === "onInView" || n?.trigger === "onScrollTarget")) } async function Hk(e = "character", t, n, r, i = 0, o = !1, s, a) { let l = W6(t), c = new AbortController;

 switch (a && (a.current = () => c.abort()), e) { case "character": case "element": case "word": { let u = await Q6(n, c);

 if (u === null || (er(u, l, { ...r, restDelta: .001, delay: Nd(r?.delay ?? 0, { startDelay: i }) }).then(() => s?.()), !o || !a)) return;

 a.current = () => void er(u, t, { ...r, restDelta: .001, delay: Nd(r?.delay ?? 0, { startDelay: i }) });

 return } case "line": { try { for (let f of n) await xE(f, c) } catch { return } let u;

 if (Q.read(() => { u = Z6(n), u.length !== 0 && Q.update(() => { let f = u.map((d, h) => er(d, l, { ...r, restDelta: .001, delay: i + h * (r?.delay ?? 0) }));

 Promise.all(f).then(() => s?.()) }) }), !o || !a) return;

 a.current = () => { u.length !== 0 && u.forEach((f, d) => { er(f, t, { ...r, restDelta: .001, delay: i + d * (r?.delay ?? 0) }) }) };

 return } default: Ce(e) } } async function Q6(e, t) { if (e.size === 0) return null;

 let n = [];

 for (let r of e) try { let i = await xE(r, t);

 i && n.push(i) } catch { return null } return n } function Z6(e) { let t = [], n = [], r = null;

 for (let i of e) { if (!i.current) continue;

 let o = i.current.offsetTop, s = i.current.offsetHeight;

 !s || r === null || o === r ? n.push(i.current) : (t.push(n), n = [i.current]), s && (r = o) } return t.push(n), t } var Wk = xe(({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) => k(Ht.svg, { ref: i, ...r, viewBox: t, children: k(Ht.foreignObject, { width: "100%", height: "100%", className: "framer-fit-text", transform: `scale(${e})`, style: { overflow: "visible", transformOrigin: "center center" }, children: n }) })), J6 = xe(function (t, n) { let { __fromCanvasComponent: r = !1, _forwardedOverrideId: i, _forwardedOverrides: o, _usesDOMRect: s, anchorLinkOffsetY: a, as: l, bottom: c, center: u, children: f, environment: d = se.current, fonts: h = [], height: p, isEditable: v = !1, left: b, name: g, opacity: m, positionSticky: y, positionStickyBottom: x, positionStickyLeft: C, positionStickyRight: w, positionStickyTop: R, right: E, rotation: I = 0, style: P, _initialStyle: z, stylesPresetsClassNames: H, text: O, top: X, verticalAlignment: W = "top", visible: ie = !0, width: U, withExternalLayout: Y = !1, viewBox: le, viewBoxScale: me = 1, effect: B, ...K } = t, Z = Ya(), Fe = Ku(), we = L(fs), Ie = us(t), _e = _(null), Re = n ?? _e;

 Gu(t, Re), bE(h, r, Re), et(() => { Ka() }, []);

 let Bt = Y6(B, Re), kt = q(() => { if (f) return wE(f, H, O, a, void 0, Bt.getTokenizer()) }, [f, H, O, a, Bt]);

 if (!ie) return null;

 let fr = v && d() === se.canvas, oe = { outline: "none", display: "flex", flexDirection: "column", justifyContent: yE(W), opacity: fr ? 0 : m, flexShrink: 0 }, Zt = {}, En = se.hasRestrictions(), hn = Ha(t, Z || 0, !1), Ja = s && (U === "auto" || p === "auto"), Ji = !!t.transformTemplate || !hn || !En || r || Ja ? t.transformTemplate ?? Wu(u) : void 0;

 Y || (hn && En && !Ja ? (Zt.x = hn.x + (Ee(P?.x) ? P.x : 0), Zt.y = hn.y + (Ee(P?.y) ? P.y : 0), oe.rotate = at.getNumber(I), oe.width = hn.width, oe.minWidth = hn.width, oe.height = hn.height) : (oe.left = b, oe.right = E, oe.top = X, oe.bottom = c, oe.width = U, oe.height = p, oe.rotate = I), y ? (!Fe || we) && (oe.position = "sticky", oe.willChange = "transform", oe.zIndex = 1, oe.top = R, oe.right = w, oe.bottom = x, oe.left = C) : Fe && (t.positionFixed || t.positionAbsolute) && (oe.position = "absolute")), Cg(t, oe), yR(t, oe), Object.assign(oe, z, P, Zt), Ie && (K.layout = "preserve-aspect");

 let Hn = cs(t.as);

 return re(t.viewBox) ? t.as !== void 0 ? k(Hn, { ...K, ref: Re, style: oe, layoutId: Ie, transformTemplate: Ji, "data-framer-name": K["data-framer-name"] ?? g, "data-framer-component-type": "RichTextContainer", children: k(Wk, { viewBox: le, viewBoxScale: me, style: { width: "100%", height: "100%" }, children: kt }) }) : k(Wk, { ...K, ref: Re, style: oe, layoutId: Ie, viewBox: le, viewBoxScale: me, transformTemplate: Ji, "data-framer-name": K["data-framer-name"] ?? g, "data-framer-component-type": "RichTextContainer", children: kt }) : k(Hn, { ...K, ref: Re, style: oe, layoutId: Ie, transformTemplate: Ji, "data-framer-name": K["data-framer-name"] ?? g, "data-framer-component-type": "RichTextContainer", children: kt }) });

 function e8(e) { return e.type === pn } function t8(e) { return e.type === "br" } function wE(e, t, n, r, i = {}, o, s = e8(e) ? -1 : 0) { let a = Jt.toArray(e.props.children);

 re(n) && (a = a.slice(0, 1));

 let l = !0;

 a = a.map(f => { if ((!ht(f) || !t8(f)) && (l = !1), ht(f)) return wE(f, t, n, r, i, o, s + 1);

 let d = re(n) ? n : f;

 return re(d) && o ? o.text(d) : d });

 let { ["data-preset-tag"]: c, ...u } = e.props;

 if (re(e.type) || Dl(e.type)) { let f = Bd(e.type) || e.type, d = c || f, h = re(d) ? t?.[d] : void 0;

 u.className = Eu("framer-text", u.className, h), o && s === 0 && !l && Object.assign(u, o.props(u.style));

 let p = f === "h1" || f === "h2" || f === "h3" || f === "h4" || f === "h5" || f === "h6", v = t?.anchor;

 if (p && v) { let b = n8(a, i);

 u.id = b;

 let g = Eu("framer-text", v), m = k("a", { href: `#${b}`, className: g, children: a });

 u.style = { ...u.style ?? {}, scrollMarginTop: r }, a = [m] } } return dr(e, u, ...a) } function n8(e, t) { let n = e.map(ag).join(""), r = O6(n), i = t[r] ?? 0;

 return i > 0 && (r += `-${i}`), t[r] = i + 1, r } function ag(e) { return re(e) || Ee(e) ? e.toString() : ht(e) ? ag(e.props.children) : Array.isArray(e) ? e.map(ag).join("") : "" } var BG = xe(function ({ children: t, html: n, htmlFromDesign: r, ...i }, o) { let s = n || t || r;

 if (re(s)) { !i.stylesPresetsClassName && ue(i.stylesPresetsClassNames) && (i.stylesPresetsClassName = Object.values(i.stylesPresetsClassNames).join(" "));

 let a = { [re(n) ? "html" : "htmlFromDesign"]: s };

 return k(j6, { ...i, ...a, ref: o }) } if (!i.stylesPresetsClassNames && re(i.stylesPresetsClassName)) { let [a, l, c, u, f] = i.stylesPresetsClassName.split(" ");

 a === void 0 || l === void 0 || c === void 0 || u === void 0 || f === void 0 ? console.warn(`Encountered invalid stylesPresetsClassNames: ${i.stylesPresetsClassNames}`) : i.stylesPresetsClassNames = { h1: a, h2: l, h3: c, p: u, a: f } } return k(J6, { ...i, ref: o, children: ht(s) ? s : void 0 }) });

 function r8(e) { var t, n;

 let r = e * Math.PI / 180, i = { x: -Math.sin(r) * 100, y: Math.cos(r) * 100 }, o = fn(i.x, i.y), s = Cn(fn(.5, .5), o), a = ne.points({ x: 0, y: 0, width: 1, height: 1 }), l = a.map(v => ({ point: v, distance: fn.distance(o, v) })).sort((v, b) => v.distance - b.distance), c = (t = l[0]) == null ? void 0 : t.point, u = (n = l[1]) == null ? void 0 : n.point;

 A(c && u, "linearGradientLine: Must have 2 closest points.");

 let [f, d] = a.filter(v => !fn.isEqual(v, c) && !fn.isEqual(v, u));

 A(f && d, "linearGradientLine: Must have 2 opposing points.");

 let h = Cn.intersection(s, Cn(c, u)), p = Cn.intersection(s, Cn(f, d));

 return A(h && p, "linearGradientLine: Must have a start and end point."), Cn(h, p) } function i8(e, t) { var n, r;

 let i = r8(e.angle), o = Za(e), s = ((n = o[0]) == null ? void 0 : n.position) ?? 0, a = ((r = o[o.length - 1]) == null ? void 0 : r.position) ?? 1, l = Cn.pointAtPercentDistance(i, s), c = Cn.pointAtPercentDistance(i, a), u = go([s, a], [0, 1]);

 return { id: `id${t}g${Wa.hash(e)}`, x1: l.x, y1: l.y, x2: c.x, y2: c.y, stops: o.map(f => ({ color: f.value, alpha: xg.getAlpha(f.value) * e.alpha, position: u(f.position) })) } } function o8(e, t) { return { id: `id${t}g${Ua.hash(e)}`, widthFactor: e.widthFactor, heightFactor: e.heightFactor, centerAnchorX: e.centerAnchorX, centerAnchorY: e.centerAnchorY, stops: Za(e).map(n => ({ color: n.value, alpha: xg.getAlpha(n.value) * e.alpha, position: n.position })) } } function kE(e) { if (!re(e) || e.charAt(e.length - 1) !== "%") return !1;

 let n = e.slice(0, -1), r = parseFloat(n);

 return Ee(r) } function CE(e) { let t = e.slice(0, -1), n = parseFloat(t);

 return Ee(n) ? n : 50 } function Uk(e) { return kE(e) ? CE(e) / 100 : e === "left" ? 0 : e === "right" ? 1 : .5 } function Gk(e) { return kE(e) ? CE(e) / 100 : e === "top" ? 0 : e === "bottom" ? 1 : .5 } function s8(e, t, n, r) { if (e = at.get(e, "#09F"), !Wi.isImageObject(e) || !e.pixelWidth || !e.pixelHeight) return;

 let i = e.pixelWidth, o = e.pixelHeight, s, { fit: a } = e, l = 1, c = 1, u = 0, f = 0;

 if (a === "fill" || a === "fit" || a === "tile" || !a) { let h = 1, p = 1, v = i / o, b = t.height * v, g = t.width / v, m = b / t.width, y = g / t.height;

 if (a === "tile") { e.backgroundSize ??= 1, l = Math.round(e.backgroundSize * (i / 2)), c = Math.round(e.backgroundSize * (o / 2));

 let x = t.x ?? 0, C = t.y ?? 0, w = 0, R = 0;

 r && (w = x, R = C), u = (t.width - l) * Uk(e.positionX) + w, f = (t.height - c) * Gk(e.positionY) + R, s = `translate(${u + x}, ${f + C})` } else (a === "fill" || !a ? y > m : y < m) ? (p = y, f = (1 - y) * Gk(e.positionY)) : (h = m, u = (1 - m) * Uk(e.positionX)), s = `translate(${u}, ${f}) scale(${h}, ${p})` } return { id: `id${n}g-fillImage`, path: e.src ?? "", transform: s, width: l, height: c, offsetX: u, offsetY: f } } var a8 = "framer/asset-reference,";

 function l8(e) { return e.startsWith(`data:${a8}`) } function c8(e, t) { if (/^\w+:/u.test(e) && !l8(e)) return e;

 typeof t != "number" ? t = void 0 : t <= 512 ? t = 512 : t <= 1024 ? t = 1024 : t <= 2048 ? t = 2048 : t = 4096;

 let n = se.current() === se.export;

 return lt.assetResolver(e, { pixelSize: t, isExport: n }) ?? "" } var u8 = ({ id: e, path: t, transform: n, repeat: r, width: i, height: o, offsetX: s, offsetY: a }) => { let l = c8(t);

 return k("pattern", { id: e, width: r ? i : "100%", height: r ? o : "100%", patternContentUnits: r ? void 0 : "objectBoundingBox", patternUnits: r ? "userSpaceOnUse" : void 0, x: r ? s : void 0, y: r ? a : void 0, children: k("image", { width: r ? i : 1, height: r ? o : 1, href: l, preserveAspectRatio: "none", transform: r ? void 0 : n, x: r ? 0 : void 0, y: r ? 0 : void 0 }, l) }) };

 var qk, f8 = !K3() && typeof Document < "u" && typeof Document.parseHTMLUnsafe == "function";

 function d8(e, t) { return f8 && !t ? Document.parseHTMLUnsafe(e) : (qk ??= new DOMParser, qk.parseFromString(e, t ?? "text/html")) } var Im = Or(), h8 = class { constructor(e, t, n, r, i = 0) { this.id = e, this.svg = t, this.innerHTML = n, this.viewBox = r, this.count = i } }, Xk = "position: absolute;overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict", p8 = class {
    constructor() { T(this, "entries", new Map), T(this, "vectorSetItems", new Map) } debugGetEntries() { return this.entries } subscribe(e, t, n) { if (!e || e === "") return "";

 let r = this.entries.get(e);

 if (!r) { n || (n = `svg${String(uR(e))}_${String(e.length)}`);

 let i = e, o, s = m8(e);

 s && (t && g8(s, n), s.id = n, o = x8(s), s.removeAttribute("xmlns"), s.removeAttribute("xlink"), s.removeAttribute("xmlns:xlink"), i = s.outerHTML), r = this.createDOMElementFor(i, n, o), this.entries.set(e, r) } return r.count += 1, r.innerHTML } getViewBox(e) { if (!e || e === "") return;

 let t = this.entries.get(e);

 return t?.viewBox } unsubscribe(e) { if (!e || e === "") return;

 let t = this.entries.get(e);

 t && (t.count -= 1, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3)) } maybeRemoveEntry(e) { let t = this.entries.get(e);

 t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t))) } removeDOMElement(e) { if (Im) { let t = document?.getElementById(e.id);

 t?.remove() } } getOrCreateTemplateContainer() { let e = document.getElementById("svg-templates");

 if (e) return e;

 let t = document.createElement("div");

 return t.id = "svg-templates", t.ariaHidden = "true", t.style.cssText = Xk, document.body.appendChild(t), t } maybeAppendTemplate(e, t) { if (document.getElementById(e)) return;

 let n = document.createElement("div");

 n.innerHTML = t;

 let r = n.firstElementChild;

 r && (r.id = e, this.getOrCreateTemplateContainer().appendChild(r)) } createDOMElementFor(e, t, n) { Im && this.maybeAppendTemplate(t, e);

 let r = n ? `0 0 ${n.width} ${n.height}` : void 0, o = `<svg style="width:100%;

height:100%"${r ? ` viewBox="${r}"` : ""}><use href="#${t}"/></svg>`;

 return new h8(t, e, o, r) } template(e, t) { let n = this.vectorSetItems.get(t);

 return n ? `#${n.id}` : (this.vectorSetItems.set(e, { id: e, svg: t }), Im ? (this.maybeAppendTemplate(e, t), `#${e}`) : `#${e}`) } clear() { this.entries.clear() } generateTemplates() {
        let e = [];

 return e.push(`<div id="svg-templates" style="${Xk}" aria-hidden="true">`), this.entries.forEach(t => e.push(t.svg)), this.vectorSetItems.forEach(t => e.push(t.svg)), e.push("</div>"), e.join(`
`)
    }
}, Zo = new p8;

 function m8(e) { try { let n = d8(e).getElementsByTagName("svg")[0];

 if (!n) throw Error("no svg element found");

 return n } catch { return } } function g8(e, t) { let n = v8(t);

 RE(e, n) } function v8(e) { return e.replace(/[^\w\-:.]|^[^a-z]+/gi, "") } function RE(e, t) { y8(e, t), Array.from(e.children).forEach(r => { RE(r, t) }) } function y8(e, t) { e.getAttributeNames().forEach(r => { let i = e.getAttribute(r);

 if (!i) return;

 if (r === "id" && e.setAttribute(r, `${t}_${i}`), r === "href" || r === "xlink:href") { let [s, a] = i.split("#");

 if (s) return;

 e.setAttribute(r, `#${t}_${a}`);

 return } let o = "url(#";

 if (i.includes(o)) { let s = i.replace(o, `${o}${t}_`);

 e.setAttribute(r, s) } }) } var b8 = { cm: 96 / 2.54, mm: 96 / 2.54 / 10, Q: 96 / 2.54 / 40, in: 96, pc: 96 / 6, pt: 96 / 72, px: 1, em: 16, ex: 8, ch: 8, rem: 16 };

 function Yk(e) { var t;

 if (!e) return;

 let n = /(-?[\d.]+)([a-z%]*)/u.exec(e);

 if (!(n?.[1] === void 0 || n?.[2] === void 0) && !((t = n[2]) != null && t.startsWith("%"))) return Math.round(parseFloat(n[1]) * (b8[n[2]] || 1)) } function x8(e) { let t = Yk(e.getAttribute("width")), n = Yk(e.getAttribute("height"));

 if (!(typeof t != "number" || typeof n != "number") && !(t <= 0 || n <= 0)) return { width: t, height: n } } var HG = xe(function (t, n) { let r = Ya(), i = us(t), o = S.useRef(null), s = n ?? o, a = a6();

 return Gu(t, o), k(T8, { ...t, innerRef: s, parentSize: r, layoutId: i, providedWindow: a }) }), S8 = 5e4;

 function w8(e) { return e.indexOf("image") >= 0 } function k8(e) { return e.indexOf("var(--") >= 0 } function C8(e) { return !!(e.borderRadius || e.borderBottomLeftRadius || e.borderBottomRightRadius || e.borderTopLeftRadius || e.borderTopRightRadius) } function Kk(e, t) { var n, r;

 let i = e.current;

 if (!i) return;

 let o = t.providedWindow ?? be, s = i.firstElementChild;

 if (!s || !(s instanceof o.SVGSVGElement)) return;

 if (!s.getAttribute("viewBox")) { let h = Zo.getViewBox(t.svg);

 h && s.setAttribute("viewBox", h) } let { withExternalLayout: a, parentSize: l } = t;

 if (!a && ls(t) && l !== 1 && l !== 2) return;

 let { intrinsicWidth: u, intrinsicHeight: f, _constraints: d } = t;

 ((n = s.viewBox.baseVal) == null ? void 0 : n.width) === 0 && ((r = s.viewBox.baseVal) == null ? void 0 : r.height) === 0 && ee(u) && ee(f) && s.setAttribute("viewBox", `0 0 ${u} ${f}`), d && d.aspectRatio ? s.setAttribute("preserveAspectRatio", "") : s.setAttribute("preserveAspectRatio", "none"), s.setAttribute("width", "100%"), s.setAttribute("height", "100%") } function R8() { return S.useInsertionEffect(() => { Ka() }, []), null } var T8 = (() => { var e;

 return e = class extends Ba { constructor() { super(...arguments), T(this, "container", S.createRef()), T(this, "svgElement", null), T(this, "setSVGElement", t => { this.svgElement = t, this.setLayerElement(t) }), T(this, "previouslyRenderedSVG", ""), T(this, "unmountedSVG", "") } static frame(t) { return Ha(t, t.parentSize || 0) } get frame() { return Ha(this.props, this.props.parentSize || 0) } componentDidMount() { if (this.unmountedSVG) { let { svgContentId: t } = this.props, n = t ? `svg${t}` : null;

 Zo.subscribe(this.unmountedSVG, !t, n), this.previouslyRenderedSVG = this.unmountedSVG } this.props.svgContentId || Kk(this.container, this.props) } componentWillUnmount() { Zo.unsubscribe(this.previouslyRenderedSVG), this.unmountedSVG = this.previouslyRenderedSVG, this.previouslyRenderedSVG = "" } componentDidUpdate(t) { if (super.componentDidUpdate(t), this.props.svgContentId) return;

 let { fill: n } = this.props;

 Wi.isImageObject(n) && Wi.isImageObject(t.fill) && n.src !== t.fill.src && cR(this.svgElement, "fill", null, !1), Kk(this.container, this.props) } collectLayout(t, n) { if (this.props.withExternalLayout) { n.width = "100%", n.height = "100%", n.aspectRatio = "inherit";

 return } let r = this.frame, { rotation: i, intrinsicWidth: o, intrinsicHeight: s, width: a, height: l } = this.props, c = at.getNumber(i);

 if (t.opacity = ee(this.props.opacity) ? this.props.opacity : 1, se.hasRestrictions() && r) { Object.assign(t, { transform: `translate(${r.x}px, ${r.y}px) rotate(${c.toFixed(4)}deg)`, width: `${r.width}px`, height: `${r.height}px` }), ls(this.props) && (t.position = "absolute");

 let p = r.width / (o || 1), v = r.height / (s || 1);

 n.transformOrigin = "top left";

 let { zoom: b, target: g } = $m;

 if (g === se.export) { let m = b > 1 ? b : 1;

 n.transform = `scale(${p * m}, ${v * m})`, n.zoom = 1 / m } else n.transform = `scale(${p}, ${v})`;

 o && s && (n.width = o, n.height = s);

 return } let { left: u, right: f, top: d, bottom: h } = this.props;

 Object.assign(t, { left: u, right: f, top: d, bottom: h, width: a, height: l, rotate: c }), Object.assign(n, { left: 0, top: 0, bottom: 0, right: 0, position: "absolute" }) } render() { let { id: t, visible: n, style: r, fill: i, svg: o, intrinsicHeight: s, intrinsicWidth: a, title: l, description: c, layoutId: u, className: f, variants: d, withExternalLayout: h, innerRef: p, svgContentId: v, height: b, opacity: g, width: m, ...y } = this.props;

 if (!h && (!n || !t)) return null;

 let x = t ?? u ?? "svg", C = this.frame, w = C || { width: a || 100, height: s || 100 }, R = { ...r, imageRendering: "pixelated", flexShrink: 0 }, E = {};

 this.collectLayout(R, E), Y4(this.props, R), Cg(this.props, R), Ba.applyWillChange(this.props, R, !1);

 let I = null;

 if (typeof i == "string" || j.isColorObject(i)) { let B = j.isColorObject(i) ? i.initialValue || j.toRgbString(i) : i;

 R.fill = B, R.color = B } else if (Wa.isLinearGradient(i)) { let B = i, K = `${encodeURI(t || "")}g${Wa.hash(B)}`;

 R.fill = `url(#${K})`;

 let { stops: Z, x1: Fe, x2: we, y1: Ie, y2: _e } = i8(B, x);

 I = k("svg", { ref: this.setSVGElement, width: "100%", height: "100%", style: { position: "absolute" }, role: "presentation", children: k("linearGradient", { id: K, x1: Fe, x2: we, y1: Ie, y2: _e, children: Z.map((Re, Bt) => k("stop", { offset: Re.position, stopColor: Re.color, stopOpacity: Re.alpha }, Bt)) }) }) } else if (Ua.isRadialGradient(i)) { let B = i, K = `${encodeURI(t || "")}g${Ua.hash(B)}`;

 R.fill = `url(#${K})`;

 let Z = o8(B, x);

 I = k("svg", { ref: this.setSVGElement, width: "100%", height: "100%", style: { position: "absolute" }, role: "presentation", children: k("radialGradient", { id: K, cy: B.centerAnchorY, cx: B.centerAnchorX, r: B.widthFactor, children: Z.stops.map((Fe, we) => k("stop", { offset: Fe.position, stopColor: Fe.color, stopOpacity: Fe.alpha }, we)) }) }) } else if (Wi.isImageObject(i)) { let B = s8(i, w, x);

 B && (R.fill = `url(#${B.id})`, I = k("svg", { ref: this.setSVGElement, width: "100%", height: "100%", style: { position: "absolute" }, role: "presentation", children: k("defs", { children: k(u8, { ...B }) }) })) } let P = { "data-framer-component-type": "SVG" }, z = !C;

 z && Object.assign(P, rR(this.props.center));

 let H = !I && !R.fill && !R.background && !R.backgroundImage && o.length < S8 && !w8(o) && !k8(o), O = null;

 if (H) R.backgroundSize = "100% 100%", R.backgroundImage = `url('data:image/svg+xml;

utf8,${encodeURIComponent(o)}')`, Zo.unsubscribe(this.previouslyRenderedSVG), this.previouslyRenderedSVG = "";

 else { let B = v ? `svg${v}` : null, K = Zo.subscribe(o, !v, B);

 Zo.unsubscribe(this.previouslyRenderedSVG), this.previouslyRenderedSVG = o, C8(R) && (R.overflow = "hidden"), O = de(rt, { children: [I, k("div", { className: "svgContainer", style: E, ref: this.container, dangerouslySetInnerHTML: { __html: K } }, Wi.isImageObject(i) ? i.src : "")] }) } let X = cs(this.props.as), { href: W, target: ie, rel: U, onClick: Y, onTap: le } = this.props, me = l || c;

 return de(X, { ...P, ...y, layoutId: u, transformTemplate: z ? Wu(this.props.center) : void 0, id: t, ref: p, style: R, className: f, variants: d, tabIndex: this.props.tabIndex, role: me ? "img" : void 0, "aria-label": l, "aria-description": c, "aria-hidden": me ? void 0 : "true", onTap: le, onClick: Y, href: W, target: ie, rel: U, children: [O, k(R8, {})] }) } }, T(e, "supportsConstraints", !0), T(e, "defaultSVGProps", { left: void 0, right: void 0, top: void 0, bottom: void 0, style: void 0, _constraints: { enabled: !0, aspectRatio: null }, parentSize: 0, rotation: 0, visible: !0, svg: "", shadows: [] }), T(e, "defaultProps", { ...Ba.defaultProps, ...e.defaultSVGProps }), e })();

 var E8 = 1e3;

 function JG(e) { return e > E8 ? "lazy" : void 0 } function eq(e, t, n) { let r = Ng(t);

 !n?.supportsExplicitInterCodegen && !r.some(i => i.explicitInter === !1) && r.push({ explicitInter: !1, fonts: [] }), Object.assign(e, { fonts: r }) } function tq(e) { return e.fonts ?? [] } function nq(e) { return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Ng(e) } function rq(e) { return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Ng(e) } function Ng(e) { let t = { explicitInter: !1, fonts: [] }, n = [];

 for (let r of e) P8(r) ? n.push(r) : t.fonts.push(I8(r));

 return t.fonts.length > 0 && n.push(t), n } var F8 = "explicitInter";

 function P8(e) { return F8 in e } function I8(e) { let t;

 return e.url.startsWith("https://fonts.gstatic.com/s/") ? t = "google" : e.url.startsWith("/framerusercontent.com/third-party-assets/fontshare/") ? t = "fontshare" : t = "custom", { ...e, source: t } } function iq(e, t) { let n = `${e}-start`;

 performance.mark(n), t();

 let r = `${e}-end`;

 performance.mark(r), performance.measure(e, n, r) } Tl.prototype.addChild = function ({ transformer: e = t => t }) { let t = Ye(e(this.get()));

 return this.onChange(n => t.set(e(n))), t };

//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *//*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/export { S as a, Jt as b, pn as c, dr as d, no as e, iv as f, xe as g, rl as h, Ze as i, $ as j, L as k, V as l, hr as m, et as n, q as o, _ as p, Se as q, Ct as r, rt as s, k as t, de as u, Q as v, Kn as w, Ht as x, Ld as y, hb as z, Jn as A, Ot as B, O2 as C, Sb as D, kb as E, tM as F, YS as G, VL as H, GL as I, KH as J, Qi as K, gi as L, oW as M, sW as N, hW as O, ju as P, vW as Q, bW as R, SW as S, kW as T, cA as U, DC as V, EW as W, se as X, LW as Y, xD as Z, BW as _, w3 as $, F3 as aa, P3 as ba, GU as ca, Eu as da, Y5 as ea, _R as fa, iz as ga, MR as ha, T9 as ia, fz as ja, F9 as ka, dz as la, hz as ma, P9 as na, z9 as oa, N9 as pa, W9 as qa, U9 as ra, s7 as sa, a7 as ta, u7 as ua, g7 as va, y7 as wa, mB as xa, gB as ya, LB as za, AB as Aa, Ku as Ba, E7 as Ca, z7 as Da, $7 as Ea, ON as Fa, j7 as Ga, zN as Ha, U7 as Ia, G7 as Ja, Z7 as Ka, eG as La, rG as Ma, iG as Na, JN as Oa, lG as Pa, fG as Qa, vG as Ra, wu as Sa, OG as Ta, BG as Ua, Zo as Va, HG as Wa, JG as Xa, eq as Ya, tq as Za, nq as _a, rq as $a, iq as ab };


//# sourceMappingURL=chunk-3RSKXDIB.mjs.map
