import { X as O, Z as y, aa as Z, ha as ee, l as M, o as L, p as $, q, t as H, x as X } from "./chunk-3RSKXDIB.js";

 import { b as C, c as m, d as v } from "./chunk-XNQNUANK.js";

 function pe(r, t) { if (!(r instanceof t)) throw new TypeError("Cannot call a class as a function") } function te(r, t) { for (var e = 0;

 e < t.length;

 e++) { var n = t[e];

 n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n) } } function he(r, t, e) { return t && te(r.prototype, t), e && te(r, e), r } var re = typeof v < "u" && {}.toString.call(v) === "[object global]";

 function ne(r, t) { return r.indexOf(t.toLowerCase()) === 0 ? r : "".concat(t.toLowerCase()).concat(r.substr(0, 1).toUpperCase()).concat(r.substr(1)) } function ge(r) { return !!(r && r.nodeType === 1 && "nodeName" in r && r.ownerDocument && r.ownerDocument.defaultView) } function ve(r) { return !isNaN(parseFloat(r)) && isFinite(r) && Math.floor(r) == r } function z(r) { return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(r) } function oe() { var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = r.id, e = r.url, n = t || e;

 if (!n) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");

 if (ve(n)) return "https://vimeo.com/".concat(n);

 if (z(n)) return n.replace("http:", "https:");

 throw t ? new TypeError("\u201C".concat(t, "\u201D is not a valid video id.")) : new TypeError("\u201C".concat(n, "\u201D is not a vimeo.com url.")) } var ye = typeof Array.prototype.indexOf < "u", be = typeof m < "u" && typeof m.postMessage < "u";

 if (!re && (!ye || !be)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");

 var W = typeof globalThis < "u" ? globalThis : typeof m < "u" ? m : typeof v < "u" ? v : typeof self < "u" ? self : {};

 function Ce(r, t) {
    return t = { exports: {} }, r(t, t.exports), t.exports;

/*!
 * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */} (function (r) { if (!r.WeakMap) { var t = Object.prototype.hasOwnProperty, e = function (o, i, s) { Object.defineProperty ? Object.defineProperty(o, i, { configurable: !0, writable: !0, value: s }) : o[i] = s };

 r.WeakMap = function () { function o() { if (this === void 0) throw new TypeError("Constructor WeakMap requires 'new'");

 if (e(this, "_id", s("_WeakMap")), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported") } e(o.prototype, "delete", function (l) { if (i(this, "delete"), !n(l)) return !1;

 var h = l[this._id];

 return h && h[0] === l ? (delete l[this._id], !0) : !1 }), e(o.prototype, "get", function (l) { if (i(this, "get"), n(l)) { var h = l[this._id];

 return h && h[0] === l ? h[1] : void 0 } }), e(o.prototype, "has", function (l) { if (i(this, "has"), !n(l)) return !1;

 var h = l[this._id];

 return !(!h || h[0] !== l) }), e(o.prototype, "set", function (l, h) { if (i(this, "set"), !n(l)) throw new TypeError("Invalid value used as weak map key");

 var S = l[this._id];

 return S && S[0] === l ? (S[1] = h, this) : (e(l, this._id, [l, h]), this) });

 function i(l, h) { if (!n(l) || !t.call(l, "_id")) throw new TypeError(h + " method called on incompatible receiver " + typeof l) } function s(l) { return l + "_" + d() + "." + d() } function d() { return Math.random().toString().substring(2) } return e(o, "_polyfill", !0), o }() } function n(o) { return Object(o) === o } })(typeof self < "u" ? self : typeof m < "u" ? m : (typeof W < "u", W));

 var F = Ce(function (r) { (function (e, n, o) { n[e] = n[e] || o(), r.exports && (r.exports = n[e]) })("Promise", (typeof W < "u", W), function () { var e, n, o, i = Object.prototype.toString, s = typeof setImmediate < "u" ? function (a) { return setImmediate(a) } : setTimeout;

 try { Object.defineProperty({}, "x", {}), e = function (a, u, f, p) { return Object.defineProperty(a, u, { value: f, writable: !0, configurable: p !== !1 }) } } catch { e = function (u, f, p) { return u[f] = p, u } } o = function () { var a, u, f;

 function p(b, k) { this.fn = b, this.self = k, this.next = void 0 } return { add: function (k, V) { f = new p(k, V), u ? u.next = f : a = f, u = f, f = void 0 }, drain: function () { var k = a;

 for (a = u = n = void 0;

 k;

)k.fn.call(k.self), k = k.next } } }();

 function d(c, a) { o.add(c, a), n || (n = s(o.drain)) } function l(c) { var a, u = typeof c;

 return c == null || u != "object" && u != "function" || (a = c.then), typeof a == "function" && a } function h() { for (var c = 0;

 c < this.chain.length;

 c++)S(this, this.state === 1 ? this.chain[c].success : this.chain[c].failure, this.chain[c]);

 this.chain.length = 0 } function S(c, a, u) { var f, p;

 try { a === !1 ? u.reject(c.msg) : (f = a === !0 ? c.msg : a.call(void 0, c.msg), f === u.promise ? u.reject(TypeError("Promise-chain cycle")) : (p = l(f)) ? p.call(f, u.resolve, u.reject) : u.resolve(f)) } catch (b) { u.reject(b) } } function x(c) { var a, u = this;

 if (!u.triggered) { u.triggered = !0, u.def && (u = u.def);

 try { (a = l(c)) ? d(function () { var f = new T(u);

 try { a.call(c, function () { x.apply(f, arguments) }, function () { g.apply(f, arguments) }) } catch (p) { g.call(f, p) } }) : (u.msg = c, u.state = 1, u.chain.length > 0 && d(h, u)) } catch (f) { g.call(new T(u), f) } } } function g(c) { var a = this;

 a.triggered || (a.triggered = !0, a.def && (a = a.def), a.msg = c, a.state = 2, a.chain.length > 0 && d(h, a)) } function I(c, a, u, f) { for (var p = 0;

 p < a.length;

 p++)(function (k) { c.resolve(a[k]).then(function (P) { u(k, P) }, f) })(p) } function T(c) { this.def = c, this.triggered = !1 } function A(c) { this.promise = c, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0 } function E(c) { if (typeof c != "function") throw TypeError("Not a function");

 if (this.__NPO__ !== 0) throw TypeError("Not a promise");

 this.__NPO__ = 1;

 var a = new A(this);

 this.then = function (f, p) { var b = { success: typeof f != "function" || f, failure: typeof p == "function" && p };

 return b.promise = new this.constructor(function (V, P) { if (typeof V != "function" || typeof P != "function") throw TypeError("Not a function");

 b.resolve = V, b.reject = P }), a.chain.push(b), a.state !== 0 && d(h, a), b.promise }, this.catch = function (f) { return this.then(void 0, f) };

 try { c.call(void 0, function (f) { x.call(a, f) }, function (f) { g.call(a, f) }) } catch (u) { g.call(a, u) } } var R = e({}, "constructor", E, !1);

 return E.prototype = R, e(R, "__NPO__", 0, !1), e(E, "resolve", function (a) { var u = this;

 return a && typeof a == "object" && a.__NPO__ === 1 ? a : new u(function (p, b) { if (typeof p != "function" || typeof b != "function") throw TypeError("Not a function");

 p(a) }) }), e(E, "reject", function (a) { return new this(function (f, p) { if (typeof f != "function" || typeof p != "function") throw TypeError("Not a function");

 p(a) }) }), e(E, "all", function (a) { var u = this;

 return i.call(a) != "[object Array]" ? u.reject(TypeError("Not an array")) : a.length === 0 ? u.resolve([]) : new u(function (p, b) { if (typeof p != "function" || typeof b != "function") throw TypeError("Not a function");

 var k = a.length, V = Array(k), P = 0;

 I(u, a, function (de, me) { V[de] = me, ++P === k && p(V) }, b) }) }), e(E, "race", function (a) { var u = this;

 return i.call(a) != "[object Array]" ? u.reject(TypeError("Not an array")) : new u(function (p, b) { if (typeof p != "function" || typeof b != "function") throw TypeError("Not a function");

 I(u, a, function (V, P) { p(P) }, b) }) }), E }) }), _ = new WeakMap;

 function j(r, t, e) { var n = _.get(r.element) || {};

 t in n || (n[t] = []), n[t].push(e), _.set(r.element, n) } function D(r, t) { var e = _.get(r.element) || {};

 return e[t] || [] } function U(r, t, e) { var n = _.get(r.element) || {};

 if (!n[t]) return !0;

 if (!e) return n[t] = [], _.set(r.element, n), !0;

 var o = n[t].indexOf(e);

 return o !== -1 && n[t].splice(o, 1), _.set(r.element, n), n[t] && n[t].length === 0 } function ke(r, t) { var e = D(r, t);

 if (e.length < 1) return !1;

 var n = e.shift();

 return U(r, t, n), n } function we(r, t) { var e = _.get(r);

 _.set(t, e), _.delete(r) } var xe = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];

 function ae(r) { var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};

 return xe.reduce(function (e, n) { var o = r.getAttribute("data-vimeo-".concat(n));

 return (o || o === "") && (e[n] = o === "" ? 1 : o), e }, t) } function G(r, t) { var e = r.html;

 if (!t) throw new TypeError("An element must be provided");

 if (t.getAttribute("data-vimeo-initialized") !== null) return t.querySelector("iframe");

 var n = document.createElement("div");

 return n.innerHTML = e, t.appendChild(n.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe") } function ie(r) { var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = arguments.length > 2 ? arguments[2] : void 0;

 return new Promise(function (n, o) { if (!z(r)) throw new TypeError("\u201C".concat(r, "\u201D is not a vimeo.com url."));

//  var i = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(r));
 var i = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent("https://player.vimeo.com/video/1081966155?h=82d457eea2&badge=0&autopause=0&player_id=0&app_id=58479&playsinline=1&muted=1&title=0&badge=0&autopause=0&player_id=0")) + "&title=false";
var i = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent("https://player.vimeo.com/video/1081966155?h=82d457eea2&badge=0&autopause=0&player_id=0&app_id=58479&playsinline=1&muted=1&title=0&badge=0&autopause=0&player_id=0")}&title=false`;
t["title"] = false; 
for (var s in t) t.hasOwnProperty(s) && (i += "&".concat(s, "=").concat(encodeURIComponent(t[s])));

 var d = "XDomainRequest" in m ? new XDomainRequest : new XMLHttpRequest;

 d.open("GET", i, !0), d.onload = function () { if (d.status !== 404) if (d.status !== 403) try { var l = JSON.parse(d.responseText);

 if (l.domain_status_code === 403) { G(l, e), o(new Error("\u201C".concat(r, "\u201D is not embeddable.")));

 return } n(l) } catch (h) { o(h) } else o(new Error("\u201C".concat(r, "\u201D is not embeddable.")));

 else o(new Error("\u201C".concat(r, "\u201D was not found."))) }, d.onerror = function () { var l = d.status ? " (".concat(d.status, ")") : "";

 o(new Error("There was an error fetching the embed code from Vimeo".concat(l, "."))) }, d.send() }) } function Ee() { var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, t = [].slice.call(r.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")), e = function (o) { "console" in m && console.error && console.error("There was an error creating an embed: ".concat(o)) };

 t.forEach(function (n) { try { if (n.getAttribute("data-vimeo-defer") !== null) return;

 var o = ae(n), i = oe(o);

 ie(i, o, n).then(function (s) { return G(s, n) }).catch(e) } catch (s) { e(s) } }) } function Se() { var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;

 if (!m.VimeoPlayerResizeEmbeds_) { m.VimeoPlayerResizeEmbeds_ = !0;

 var t = function (n) { if (z(n.origin) && n.data && n.data.event === "spacechange") { for (var o = r.querySelectorAll("iframe"), i = 0;

 i < o.length;

 i++)if (o[i].contentWindow === n.source) { var s = o[i].parentElement;

 s.style.paddingBottom = "".concat(n.data.data[0].bottom, "px");

 break } } };

 m.addEventListener("message", t) } } function se(r) { if (typeof r == "string") try { r = JSON.parse(r) } catch (t) { return console.warn(t), {} } return r } function B(r, t, e) { if (r.element.contentWindow && r.element.contentWindow.postMessage) { var n = { method: t };

 e !== void 0 && (n.value = e);

 var o = parseFloat(C.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));

 o >= 8 && o < 10 && (n = JSON.stringify(n)), r.element.contentWindow.postMessage(n, r.origin) } } function Te(r, t) { t = se(t);

 var e = [], n;

 if (t.event) { if (t.event === "error") { var o = D(r, t.data.method);

 o.forEach(function (s) { var d = new Error(t.data.message);

 d.name = t.data.name, s.reject(d), U(r, t.data.method, s) }) } e = D(r, "event:".concat(t.event)), n = t.data } else if (t.method) { var i = ke(r, t.method);

 i && (e.push(i), n = t.value) } e.forEach(function (s) { try { if (typeof s == "function") { s.call(r, n);

 return } s.resolve(n) } catch { } }) } function Ve() { var r = function () { for (var n, o = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], i = 0, s = o.length, d = {};

 i < s;

 i++)if (n = o[i], n && n[1] in document) { for (i = 0;

 i < n.length;

 i++)d[o[0][i]] = n[i];

 return d } return !1 }(), t = { fullscreenchange: r.fullscreenchange, fullscreenerror: r.fullscreenerror }, e = { request: function (o) { return new Promise(function (i, s) { var d = function h() { e.off("fullscreenchange", h), i() };

 e.on("fullscreenchange", d), o = o || document.documentElement;

 var l = o[r.requestFullscreen]();

 l instanceof Promise && l.then(d).catch(s) }) }, exit: function () { return new Promise(function (o, i) { if (e.isFullscreen) { var s = function l() { e.off("fullscreenchange", l), o() };

 e.on("fullscreenchange", s);

 var d = document[r.exitFullscreen]();

 d instanceof Promise && d.then(s).catch(i) } else o() }) }, on: function (o, i) { var s = t[o];

 s && document.addEventListener(s, i) }, off: function (o, i) { var s = t[o];

 s && document.removeEventListener(s, i) } };

 return Object.defineProperties(e, { isFullscreen: { get: function () { return !!document[r.fullscreenElement] } }, element: { enumerable: !0, get: function () { return document[r.fullscreenElement] } }, isEnabled: { enumerable: !0, get: function () { return !!document[r.fullscreenEnabled] } } }), e } var N = new WeakMap, K = new WeakMap, w = {}, ue = function () { function r(t) { var e = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};

 if (pe(this, r), m.jQuery && t instanceof jQuery && (t.length > 1 && m.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), t = t[0]), typeof document < "u" && typeof t == "string" && (t = document.getElementById(t)), !ge(t)) throw new TypeError("You must pass either a valid element or a valid id.");

 if (t.nodeName !== "IFRAME") { var o = t.querySelector("iframe");

 o && (t = o) } if (t.nodeName === "IFRAME" && !z(t.getAttribute("src") || "")) throw new Error("The player element passed isn\u2019t a Vimeo embed.");

 if (N.has(t)) return N.get(t);

 this._window = t.ownerDocument.defaultView, this.element = t, this.origin = "*";

 var i = new F(function (d, l) { if (e._onMessage = function (x) { if (z(x.origin) && e.element.contentWindow === x.source) { e.origin === "*" && (e.origin = x.origin);

 var g = se(x.data), I = g && g.event === "error", T = I && g.data && g.data.method === "ready";

 if (T) { var A = new Error(g.data.message);

 A.name = g.data.name, l(A) } else { var E = g && g.event === "ready", R = g && g.method === "ping";

 E || R ? (e.element.setAttribute("data-ready", "true"), d()) : Te(e, g) } } }, e._window.addEventListener("message", e._onMessage), e.element.nodeName !== "IFRAME") { var h = ae(t, n), S = oe(h);

 ie(S, h, t).then(function (x) { var g = G(x, t);

 return e.element = g, e._originalElement = t, we(t, g), N.set(e.element, e), x }).catch(l) } });

 if (K.set(this, i), N.set(this.element, this), this.element.nodeName === "IFRAME" && B(this, "ping"), w.isEnabled) { var s = function () { return w.exit() };

 this.fullscreenchangeHandler = function () { w.isFullscreen ? j(e, "event:exitFullscreen", s) : U(e, "event:exitFullscreen", s), e.ready().then(function () { B(e, "fullscreenchange", w.isFullscreen) }) }, w.on("fullscreenchange", this.fullscreenchangeHandler) } return this } return he(r, [{ key: "callMethod", value: function (e) { var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};

 return new F(function (i, s) { return n.ready().then(function () { j(n, e, { resolve: i, reject: s }), B(n, e, o) }).catch(s) }) } }, { key: "get", value: function (e) { var n = this;

 return new F(function (o, i) { return e = ne(e, "get"), n.ready().then(function () { j(n, e, { resolve: o, reject: i }), B(n, e) }).catch(i) }) } }, { key: "set", value: function (e, n) { var o = this;

 return new F(function (i, s) { if (e = ne(e, "set"), n == null) throw new TypeError("There must be a value to set.");

 return o.ready().then(function () { j(o, e, { resolve: i, reject: s }), B(o, e, n) }).catch(s) }) } }, { key: "on", value: function (e, n) { if (!e) throw new TypeError("You must pass an event name.");

 if (!n) throw new TypeError("You must pass a callback function.");

 if (typeof n != "function") throw new TypeError("The callback must be a function.");

 var o = D(this, "event:".concat(e));

 o.length === 0 && this.callMethod("addEventListener", e).catch(function () { }), j(this, "event:".concat(e), n) } }, { key: "off", value: function (e, n) { if (!e) throw new TypeError("You must pass an event name.");

 if (n && typeof n != "function") throw new TypeError("The callback must be a function.");

 var o = U(this, "event:".concat(e), n);

 o && this.callMethod("removeEventListener", e).catch(function (i) { }) } }, { key: "loadVideo", value: function (e) { return this.callMethod("loadVideo", e) } }, { key: "ready", value: function () { var e = K.get(this) || new F(function (n, o) { o(new Error("Unknown player. Probably unloaded.")) });

 return F.resolve(e) } }, { key: "addCuePoint", value: function (e) { var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};

 return this.callMethod("addCuePoint", { time: e, data: n }) } }, { key: "removeCuePoint", value: function (e) { return this.callMethod("removeCuePoint", e) } }, { key: "enableTextTrack", value: function (e, n) { if (!e) throw new TypeError("You must pass a language.");

 return this.callMethod("enableTextTrack", { language: e, kind: n }) } }, { key: "disableTextTrack", value: function () { return this.callMethod("disableTextTrack") } }, { key: "pause", value: function () { return this.callMethod("pause") } }, { key: "play", value: function () { return this.callMethod("play") } }, { key: "requestFullscreen", value: function () { return w.isEnabled ? w.request(this.element) : this.callMethod("requestFullscreen") } }, { key: "exitFullscreen", value: function () { return w.isEnabled ? w.exit() : this.callMethod("exitFullscreen") } }, { key: "getFullscreen", value: function () { return w.isEnabled ? F.resolve(w.isFullscreen) : this.get("fullscreen") } }, { key: "requestPictureInPicture", value: function () { return this.callMethod("requestPictureInPicture") } }, { key: "exitPictureInPicture", value: function () { return this.callMethod("exitPictureInPicture") } }, { key: "getPictureInPicture", value: function () { return this.get("pictureInPicture") } }, { key: "unload", value: function () { return this.callMethod("unload") } }, { key: "destroy", value: function () { var e = this;

 return new F(function (n) { if (K.delete(e), N.delete(e.element), e._originalElement && (N.delete(e._originalElement), e._originalElement.removeAttribute("data-vimeo-initialized")), e.element && e.element.nodeName === "IFRAME" && e.element.parentNode && (e.element.parentNode.parentNode && e._originalElement && e._originalElement !== e.element.parentNode ? e.element.parentNode.parentNode.removeChild(e.element.parentNode) : e.element.parentNode.removeChild(e.element)), e.element && e.element.nodeName === "DIV" && e.element.parentNode) { e.element.removeAttribute("data-vimeo-initialized");

 var o = e.element.querySelector("iframe");

 o && o.parentNode && (o.parentNode.parentNode && e._originalElement && e._originalElement !== o.parentNode ? o.parentNode.parentNode.removeChild(o.parentNode) : o.parentNode.removeChild(o)) } e._window.removeEventListener("message", e._onMessage), w.isEnabled && w.off("fullscreenchange", e.fullscreenchangeHandler), n() }) } }, { key: "getAutopause", value: function () { return this.get("autopause") } }, { key: "setAutopause", value: function (e) { return this.set("autopause", e) } }, { key: "getBuffered", value: function () { return this.get("buffered") } }, { key: "getCameraProps", value: function () { return this.get("cameraProps") } }, { key: "setCameraProps", value: function (e) { return this.set("cameraProps", e) } }, { key: "getChapters", value: function () { return this.get("chapters") } }, { key: "getCurrentChapter", value: function () { return this.get("currentChapter") } }, { key: "getColor", value: function () { return this.get("color") } }, { key: "setColor", value: function (e) { return this.set("color", e) } }, { key: "getCuePoints", value: function () { return this.get("cuePoints") } }, { key: "getCurrentTime", value: function () { return this.get("currentTime") } }, { key: "setCurrentTime", value: function (e) { return this.set("currentTime", e) } }, { key: "getDuration", value: function () { return this.get("duration") } }, { key: "getEnded", value: function () { return this.get("ended") } }, { key: "getLoop", value: function () { return this.get("loop") } }, { key: "setLoop", value: function (e) { return this.set("loop", e) } }, { key: "setMuted", value: function (e) { return this.set("muted", e) } }, { key: "getMuted", value: function () { return this.get("muted") } }, { key: "getPaused", value: function () { return this.get("paused") } }, { key: "getPlaybackRate", value: function () { return this.get("playbackRate") } }, { key: "setPlaybackRate", value: function (e) { return this.set("playbackRate", e) } }, { key: "getPlayed", value: function () { return this.get("played") } }, { key: "getQualities", value: function () { return this.get("qualities") } }, { key: "getQuality", value: function () { return this.get("quality") } }, { key: "setQuality", value: function (e) { return this.set("quality", e) } }, { key: "getSeekable", value: function () { return this.get("seekable") } }, { key: "getSeeking", value: function () { return this.get("seeking") } }, { key: "getTextTracks", value: function () { return this.get("textTracks") } }, { key: "getVideoEmbedCode", value: function () { return this.get("videoEmbedCode") } }, { key: "getVideoId", value: function () { return this.get("videoId") } }, { key: "getVideoTitle", value: function () { return this.get("videoTitle") } }, { key: "getVideoWidth", value: function () { return this.get("videoWidth") } }, { key: "getVideoHeight", value: function () { return this.get("videoHeight") } }, { key: "getVideoUrl", value: function () { return this.get("videoUrl") } }, { key: "getVolume", value: function () { return this.get("volume") } }, { key: "setVolume", value: function (e) { return this.set("volume", e) } }]), r }();

 re || (w = Ve(), Ee(), Se());

 var le = { position: "relative", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, Me = { ...le, borderRadius: 6, background: "rgba(136, 85, 255, 0.3)", color: "#85F", border: "1px dashed #85F", flexDirection: "column" }, _e = { onClick: { type: y.EventHandler }, onMouseEnter: { type: y.EventHandler }, onMouseLeave: { type: y.EventHandler } }, Pe = { type: y.Number, title: "Font Size", min: 2, max: 200, step: 1, displayStepper: !0 }, Fe = { font: { type: y.Boolean, title: "Font", defaultValue: !1, disabledTitle: "Default", enabledTitle: "Custom" }, fontFamily: { type: y.String, title: "Family", placeholder: "Inter", hidden: ({ font: r }) => !r }, fontWeight: { type: y.Enum, title: "Weight", options: [100, 200, 300, 400, 500, 600, 700, 800, 900], optionTitles: ["Thin", "Extra-light", "Light", "Regular", "Medium", "Semi-bold", "Bold", "Extra-bold", "Black"], hidden: ({ font: r }) => !r } };

 function Q(r) { let { borderRadius: t, isMixedBorderRadius: e, topLeftRadius: n, topRightRadius: o, bottomRightRadius: i, bottomLeftRadius: s } = r;

 return L(() => e ? `${n}px ${o}px ${i}px ${s}px` : `${t}px`, [t, e, n, o, i, s]) } var Y = { borderRadius: { title: "Radius", type: y.FusedNumber, toggleKey: "isMixedBorderRadius", toggleTitles: ["Radius", "Radius per corner"], valueKeys: ["topLeftRadius", "topRightRadius", "bottomRightRadius", "bottomLeftRadius"], valueLabels: ["TL", "TR", "BR", "BL"], min: 0 } };

 var Ne = { padding: { type: y.FusedNumber, toggleKey: "paddingPerSide", toggleTitles: ["Padding", "Padding per side"], valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"], valueLabels: ["T", "R", "B", "L"], min: 0, title: "Padding" } };

 var fe = /^https?:\/\/vimeo\.com\/(\d+)/, J = ee(function ({ video: t, autoplay: e, mute: n, controls: o, loop: i, titles: s, backgroundColor: d, onPlay: l = () => { }, onEnd: h = () => { }, style: S, ...x }) { let [g, I] = q(0), T = $(), A = Q(x);

 return M(() => { if (!T.current) return;

 let [, E] = t.match(fe) ? t.match(fe) : [null, 0], R = new ue(T.current, { id: E, autopause: !1, autoplay: O.current() === O.canvas ? !1 : e, byline: s, controls: o, loop: i, title: s, muted: n, responsive: !0 });

 R.on("play", l), R.on("ended", h) }, [T, g]), M(() => { I(E => E + 1) }, [t, e, n, o, i, s]), H(X.div, { style: { background: d, ...S, borderRadius: A, position: "relative", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }, ...x, children: H("div", { className: "framer-vimeo", ref: T, style: { width: "100%", height: "100%" } }, g) }) }, [".framer-vimeo > div { padding: 0!important;width: 100%;height: 100%;}"]);

 J.defaultProps = { video: "https://vimeo.com/642263700", autoplay: !1, loop: !1, mute: !1, backgroundColor: "rgba(0, 0, 0, 0)", borderRadius: 0 };

 Z(J, { video: { title: "URL", type: y.String }, ...Y, controls: { title: "Controls", type: y.Boolean, enabledTitle: "Show", disabledTitle: "Hide" }, autoplay: { title: "Autoplay", type: y.Boolean, enabledTitle: "Yes", disabledTitle: "No" }, loop: { title: "Loop", type: y.Boolean, enabledTitle: "Yes", disabledTitle: "No" }, mute: { title: "Mute", type: y.Boolean, enabledTitle: "Yes", disabledTitle: "No" }, backgroundColor: { type: y.Color, title: "Background", defaultValue: "rgba(0, 0, 0, 0)" }, onPlay: { type: y.EventHandler }, onEnd: { type: y.EventHandler } });

 var jn = J;

 export { jn as a };


//# sourceMappingURL=chunk-6NWYSJ5X.js.map
