var Nn = Object.defineProperty;
var qn = (o, x, t) => x in o ? Nn(o, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[x] = t;
var m0 = (o, x, t) => qn(o, typeof x != "symbol" ? x + "" : x, t);
const r = B;
(function(o, x) {
  const t = B, s = o();
  for (; ; )
    try {
      if (-parseInt(t(2874)) / 1 + -parseInt(t(1796)) / 2 + -parseInt(t(786)) / 3 + -parseInt(t(2819)) / 4 * (parseInt(t(814)) / 5) + parseInt(t(1269)) / 6 + -parseInt(t(2773)) / 7 + parseInt(t(2706)) / 8 * (parseInt(t(2040)) / 9) === x) break;
      s.push(s.shift());
    } catch {
      s.push(s.shift());
    }
})(qx, 954424);
const q0 = window[r(1407)][r(2265)][r(2265)];
window.comfyAPI.ui[r(543)];
const Oe = window[r(1407)].api.api;
var Xa;
class Tn {
  constructor(x) {
    m0(this, Xa);
    const t = r;
    this[t(1623)] = x;
    const s = this[t(2162)]();
    if (!s.valid) throw new Error(t(639) + s[t(1137)][t(2131)](", "));
  }
  [(Xa = r(1623), r(2162))]() {
    const x = r, t = [];
    (!this[x(1623)][x(2330)] || Object.keys(this[x(1623)].nodes)[x(1726)] === 0) && t.push(x(695));
    for (const [e, a] of this.definition[x(477)])
      !this[x(1623)].nodes[e] && t.push(x(2384) + e), !this[x(1623)][x(2330)][a] && t[x(1072)](x(2488) + a);
    const s = this[x(1568)]();
    return !s.valid && t[x(1072)](...s[x(1137)]), { valid: t[x(1726)] === 0, errors: t };
  }
  [r(1183)]() {
    const x = r, t = /* @__PURE__ */ new Map();
    for (const s of Object[x(2023)](this[x(1623)][x(2330)]))
      t.set(s, []);
    for (const [s, e] of this.definition.edges) {
      const a = t[x(1502)](s) || [];
      a[x(1072)](e), t[x(1019)](s, a);
    }
    return t;
  }
  detectCycles() {
    const x = r, t = [], s = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), a = this.buildDirectedAdjacencyList(), n = (i, c) => {
      const u = B;
      if (e.has(i)) {
        const l = c[u(1602)](i), f = c[u(483)](l)[u(1100)](i);
        return t[u(1072)](u(1182) + f.join(u(888))), !0;
      }
      if (s.has(i)) return !1;
      s[u(2341)](i), e[u(2341)](i);
      const d = a.get(i) || [];
      for (const l of d)
        if (n(l, [...c, i])) return !0;
      return e[u(2059)](i), !1;
    };
    for (const i of Object[x(2023)](this[x(1623)][x(2330)]))
      !s[x(731)](i) && n(i, []);
    return { valid: t[x(1726)] === 0, errors: t };
  }
  [r(1280)]() {
    const x = r, t = /* @__PURE__ */ new Map();
    for (const s of Object[x(2023)](this.definition[x(2330)]))
      t[x(1019)](s, []);
    for (const [s, e] of this[x(1623)][x(477)]) {
      const a = t[x(1502)](s) || [];
      a.push(e), t[x(1019)](s, a);
      const n = t[x(1502)](e) || [];
      n.push(s), t[x(1019)](e, n);
    }
    return t;
  }
  [r(2502)](x) {
    const t = r;
    return this[t(1280)]()[t(1502)](x) || [];
  }
  getNode(x) {
    const t = r;
    return this.definition[t(2330)][x];
  }
  [r(2634)]() {
    const x = r;
    return Object[x(2023)](this[x(1623)].nodes);
  }
  [r(2087)](x, t) {
    const s = r;
    return this.definition.edges[s(669)](([e, a]) => e === x && a === t || e === t && a === x);
  }
  [r(554)](x, t) {
    const s = r;
    if (x === t) return [x];
    const e = this[s(1280)](), a = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; a[s(1726)] > 0; ) {
      const { nodeId: i, path: c } = a.shift();
      if (n.has(i)) continue;
      if (n[s(2341)](i), i === t) return c;
      const u = e.get(i) || [];
      for (const d of u)
        !n.has(d) && a[s(1072)]({ nodeId: d, path: [...c, d] });
    }
    return null;
  }
  [r(964)](x, t) {
    return this[r(554)](x, t) !== null;
  }
  getDefinition() {
    return { ...this[r(1623)] };
  }
}
const kr = (o) => {
  let x;
  const t = /* @__PURE__ */ new Set(), s = (u, d) => {
    const l = B, f = typeof u === l(975) ? u(x) : u;
    if (!Object.is(f, x)) {
      const b = x;
      x = d ?? (typeof f !== l(1694) || f === null) ? f : Object[l(2644)]({}, x, f), t.forEach((h) => h(x, b));
    }
  }, e = () => x, a = () => c, n = (u) => {
    const d = B;
    return t[d(2341)](u), () => t[d(2059)](u);
  }, i = { setState: s, getState: e, getInitialState: a, subscribe: n }, c = x = o(s, e, i);
  return i;
}, An = (o) => o ? kr(o) : kr;
var F0;
(function(o) {
  const x = r;
  o[x(1078)] = (a) => {
  };
  function t(a) {
  }
  o[x(1825)] = t;
  function s(a) {
    throw new Error();
  }
  o.assertNever = s, o[x(2418)] = (a) => {
    const n = {};
    for (const i of a)
      n[i] = i;
    return n;
  }, o[x(1278)] = (a) => {
    const n = x, i = o[n(2252)](a)[n(2783)]((u) => typeof a[a[u]] != "number"), c = {};
    for (const u of i)
      c[u] = a[u];
    return o.objectValues(c);
  }, o[x(2263)] = (a) => {
    const n = x;
    return o[n(2252)](a)[n(2086)](function(i) {
      return a[i];
    });
  }, o[x(2252)] = typeof Object[x(2023)] === x(975) ? (a) => Object[x(2023)](a) : (a) => {
    const n = x, i = [];
    for (const c in a)
      Object.prototype[n(610)].call(a, c) && i[n(1072)](c);
    return i;
  }, o[x(1379)] = (a, n) => {
    for (const i of a)
      if (n(i)) return i;
  }, o[x(2288)] = typeof Number[x(2288)] === x(975) ? (a) => Number.isInteger(a) : (a) => typeof a === x(1455) && Number.isFinite(a) && Math[x(1450)](a) === a;
  function e(a, n = " | ") {
    return a[x(2086)]((c) => typeof c == "string" ? "'" + c + "'" : c).join(n);
  }
  o[x(2558)] = e, o.jsonStringifyReplacer = (a, n) => typeof n == "bigint" ? n.toString() : n;
})(F0 || (F0 = {}));
var Pr;
(function(o) {
  o.mergeShapes = (x, t) => ({ ...x, ...t });
})(Pr || (Pr = {}));
const r0 = F0[r(2418)](["string", r(2238), "number", "integer", r(2594), r(2788), r(1637), r(987), r(699), "function", r(662), "null", r(2241), r(1694), r(860), "promise", "void", r(1791), r(2086), r(1019)]), Ie = (o) => {
  const x = r;
  switch (typeof o) {
    case x(662):
      return r0[x(662)];
    case x(360):
      return r0.string;
    case "number":
      return Number.isNaN(o) ? r0[x(2238)] : r0[x(1455)];
    case x(2788):
      return r0.boolean;
    case x(975):
      return r0[x(975)];
    case x(987):
      return r0[x(987)];
    case "symbol":
      return r0[x(699)];
    case x(1694):
      return Array[x(344)](o) ? r0[x(2241)] : o === null ? r0.null : o.then && typeof o.then === x(975) && o[x(1307)] && typeof o[x(1307)] === x(975) ? r0[x(775)] : typeof Map !== x(662) && o instanceof Map ? r0.map : typeof Set !== x(662) && o instanceof Set ? r0[x(1019)] : typeof Date !== x(662) && o instanceof Date ? r0[x(1637)] : r0[x(1694)];
    default:
      return r0[x(860)];
  }
}, K = F0[r(2418)](["invalid_type", r(1681), r(1974), r(2290), r(1360), r(2547), r(1896), r(2088), r(2723), r(2335), "invalid_string", r(2652), r(2010), r(769), r(1292), r(2532)]);
class Se extends Error {
  get errors() {
    return this.issues;
  }
  constructor(x) {
    const t = r;
    super(), this[t(2360)] = [], this.addIssue = (e) => {
      const a = t;
      this[a(2360)] = [...this[a(2360)], e];
    }, this.addIssues = (e = []) => {
      const a = t;
      this[a(2360)] = [...this[a(2360)], ...e];
    };
    const s = new.target[t(2250)];
    Object[t(1499)] ? Object[t(1499)](this, s) : this.__proto__ = s, this[t(707)] = "ZodError", this[t(2360)] = x;
  }
  format(x) {
    const t = x || function(a) {
      return a[B(2462)];
    }, s = { _errors: [] }, e = (a) => {
      const n = B;
      for (const i of a[n(2360)])
        if (i[n(2776)] === n(2290)) i[n(1497)].map(e);
        else if (i[n(2776)] === n(2723)) e(i[n(1612)]);
        else if (i[n(2776)] === n(2088)) e(i[n(2563)]);
        else if (i[n(2920)][n(1726)] === 0) s._errors[n(1072)](t(i));
        else {
          let c = s, u = 0;
          for (; u < i[n(2920)][n(1726)]; ) {
            const d = i[n(2920)][u];
            u === i[n(2920)][n(1726)] - 1 ? (c[d] = c[d] || { _errors: [] }, c[d][n(1649)][n(1072)](t(i))) : c[d] = c[d] || { _errors: [] }, c = c[d], u++;
          }
        }
    };
    return e(this), s;
  }
  static [r(1282)](x) {
    const t = r;
    if (!(x instanceof Se)) throw new Error(t(1252) + x);
  }
  [r(1860)]() {
    return this[r(2462)];
  }
  get [r(2462)]() {
    const x = r;
    return JSON[x(2848)](this[x(2360)], F0[x(963)], 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(x = (t) => t[r(2462)]) {
    const t = r, s = {}, e = [];
    for (const a of this[t(2360)])
      if (a[t(2920)].length > 0) {
        const n = a.path[0];
        s[n] = s[n] || [], s[n].push(x(a));
      } else e[t(1072)](x(a));
    return { formErrors: e, fieldErrors: s };
  }
  get [r(2516)]() {
    return this[r(2693)]();
  }
}
Se[r(800)] = (o) => new Se(o);
const Lt = (o, x) => {
  const t = r;
  let s;
  switch (o[t(2776)]) {
    case K.invalid_type:
      o[t(586)] === r0[t(662)] ? s = t(2210) : s = "Expected " + o[t(1245)] + t(670) + o[t(586)];
      break;
    case K[t(1681)]:
      s = "Invalid literal value, expected " + JSON.stringify(o[t(1245)], F0[t(963)]);
      break;
    case K[t(1896)]:
      s = t(1220) + F0[t(2558)](o.keys, ", ");
      break;
    case K[t(2290)]:
      s = t(2032);
      break;
    case K[t(1360)]:
      s = t(559) + F0[t(2558)](o[t(2747)]);
      break;
    case K[t(2547)]:
      s = "Invalid enum value. Expected " + F0[t(2558)](o[t(2747)]) + ", received '" + o[t(586)] + "'";
      break;
    case K[t(2088)]:
      s = "Invalid function arguments";
      break;
    case K[t(2723)]:
      s = "Invalid function return type";
      break;
    case K.invalid_date:
      s = t(1090);
      break;
    case K.invalid_string:
      typeof o.validation === t(1694) ? t(1127) in o.validation ? (s = t(2025) + o.validation[t(1127)] + '"', typeof o[t(2534)][t(386)] == "number" && (s = s + " at one or more positions greater than or equal to " + o[t(2534)][t(386)])) : t(2508) in o[t(2534)] ? s = t(999) + o.validation.startsWith + '"' : t(2390) in o.validation ? s = t(1550) + o.validation.endsWith + '"' : F0.assertNever(o[t(2534)]) : o[t(2534)] !== "regex" ? s = t(1226) + o[t(2534)] : s = "Invalid";
      break;
    case K[t(2652)]:
      o[t(1655)] === t(2241) ? s = t(1734) + (o[t(2745)] ? t(413) : o[t(447)] ? t(2410) : t(600)) + " " + o[t(2701)] + t(2019) : o[t(1655)] === t(360) ? s = t(348) + (o[t(2745)] ? "exactly" : o[t(447)] ? t(2410) : t(431)) + " " + o[t(2701)] + t(617) : o[t(1655)] === t(1455) ? s = t(996) + (o[t(2745)] ? "exactly equal to " : o[t(447)] ? t(2597) : t(1851)) + o[t(2701)] : o[t(1655)] === t(987) ? s = "Number must be " + (o[t(2745)] ? t(2307) : o[t(447)] ? t(2597) : t(1851)) + o[t(2701)] : o.type === t(1637) ? s = t(593) + (o.exact ? "exactly equal to " : o[t(447)] ? t(2597) : t(1851)) + new Date(Number(o[t(2701)])) : s = t(2032);
      break;
    case K.too_big:
      o[t(1655)] === t(2241) ? s = t(1734) + (o[t(2745)] ? t(413) : o[t(447)] ? "at most" : t(649)) + " " + o.maximum + t(2019) : o[t(1655)] === "string" ? s = t(348) + (o[t(2745)] ? t(413) : o[t(447)] ? "at most" : t(1968)) + " " + o[t(2774)] + t(617) : o.type === t(1455) ? s = t(996) + (o[t(2745)] ? t(413) : o.inclusive ? "less than or equal to" : "less than") + " " + o[t(2774)] : o[t(1655)] === "bigint" ? s = "BigInt must be " + (o.exact ? "exactly" : o.inclusive ? t(1376) : t(649)) + " " + o[t(2774)] : o.type === t(1637) ? s = t(593) + (o.exact ? "exactly" : o.inclusive ? t(2740) : t(1923)) + " " + new Date(Number(o[t(2774)])) : s = "Invalid input";
      break;
    case K[t(1974)]:
      s = t(2032);
      break;
    case K[t(769)]:
      s = t(2845);
      break;
    case K.not_multiple_of:
      s = t(515) + o.multipleOf;
      break;
    case K[t(2532)]:
      s = t(732);
      break;
    default:
      s = x[t(534)], F0[t(951)](o);
  }
  return { message: s };
};
let On = Lt;
function Dn() {
  return On;
}
const jn = (o) => {
  const x = r, { data: t, path: s, errorMaps: e, issueData: a } = o, n = [...s, ...a.path || []], i = { ...a, path: n };
  if (a[x(2462)] !== void 0) return { ...a, path: n, message: a[x(2462)] };
  let c = "";
  const u = e[x(2783)]((d) => !!d)[x(483)]()[x(1351)]();
  for (const d of u)
    c = d(i, { data: t, defaultError: c })[x(2462)];
  return { ...a, path: n, message: c };
};
function Y(o, x) {
  const t = r, s = Dn(), e = jn({ issueData: x, data: o.data, path: o.path, errorMaps: [o[t(1982)][t(1704)], o.schemaErrorMap, s, s === Lt ? void 0 : Lt].filter((a) => !!a) });
  o[t(1982)][t(2360)][t(1072)](e);
}
class ee {
  constructor() {
    const x = r;
    this.value = x(1056);
  }
  [r(774)]() {
    const x = r;
    this[x(1163)] === "valid" && (this[x(1163)] = x(774));
  }
  [r(369)]() {
    const x = r;
    this[x(1163)] !== x(2377) && (this[x(1163)] = x(2377));
  }
  static [r(2672)](x, t) {
    const s = r, e = [];
    for (const a of t) {
      if (a[s(1254)] === s(2377)) return h0;
      a[s(1254)] === s(774) && x.dirty(), e.push(a[s(1163)]);
    }
    return { status: x[s(1163)], value: e };
  }
  static async [r(1698)](x, t) {
    const s = r, e = [];
    for (const a of t) {
      const n = await a[s(2444)], i = await a.value;
      e[s(1072)]({ key: n, value: i });
    }
    return ee[s(1035)](x, e);
  }
  static [r(1035)](x, t) {
    const s = r, e = {};
    for (const a of t) {
      const { key: n, value: i } = a;
      if (n[s(1254)] === s(2377) || i[s(1254)] === s(2377)) return h0;
      n[s(1254)] === s(774) && x[s(774)](), i[s(1254)] === "dirty" && x[s(774)](), n[s(1163)] !== s(908) && (typeof i[s(1163)] !== s(662) || a[s(2436)]) && (e[n[s(1163)]] = i[s(1163)]);
    }
    return { status: x[s(1163)], value: e };
  }
}
const h0 = Object[r(2802)]({ status: r(2377) }), Qe = (o) => ({ status: "dirty", value: o }), re = (o) => ({ status: r(1056), value: o }), Ir = (o) => o[r(1254)] === r(2377), Er = (o) => o[r(1254)] === r(774), We = (o) => o[r(1254)] === r(1056), bx = (o) => typeof Promise < "u" && o instanceof Promise;
var a0;
(function(o) {
  const x = r;
  o[x(2213)] = (t) => typeof t === x(360) ? { message: t } : t || {}, o[x(1860)] = (t) => typeof t === x(360) ? t : t == null ? void 0 : t.message;
})(a0 || (a0 = {}));
class he {
  constructor(x, t, s, e) {
    const a = r;
    this._cachedPath = [], this[a(407)] = x, this[a(2171)] = t, this[a(1872)] = s, this[a(2129)] = e;
  }
  get [r(2920)]() {
    const x = r;
    return !this[x(894)][x(1726)] && (Array.isArray(this[x(2129)]) ? this[x(894)][x(1072)](...this[x(1872)], ...this[x(2129)]) : this[x(894)][x(1072)](...this[x(1872)], this[x(2129)])), this[x(894)];
  }
}
const Rr = (o, x) => {
  const t = r;
  if (We(x)) return { success: !0, data: x.value };
  if (!o[t(1982)][t(2360)][t(1726)]) throw new Error(t(2572));
  return { success: !1, get error() {
    const s = t;
    if (this[s(931)]) return this[s(931)];
    const e = new Se(o[s(1982)][s(2360)]);
    return this[s(931)] = e, this[s(931)];
  } };
};
function w0(o) {
  if (!o) return {};
  const { errorMap: x, invalid_type_error: t, required_error: s, description: e } = o;
  if (x && (t || s)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return x ? { errorMap: x, description: e } : { errorMap: (n, i) => {
    const c = B, { message: u } = o;
    return n[c(2776)] === c(2547) ? { message: u ?? i[c(534)] } : typeof i[c(2171)] === c(662) ? { message: u ?? s ?? i[c(534)] } : n.code !== "invalid_type" ? { message: i[c(534)] } : { message: u ?? t ?? i[c(534)] };
  }, description: e };
}
class C0 {
  get [r(444)]() {
    return this[r(2507)].description;
  }
  [r(401)](x) {
    return Ie(x[r(2171)]);
  }
  [r(646)](x, t) {
    const s = r;
    return t || { common: x.parent[s(1982)], data: x[s(2171)], parsedType: Ie(x[s(2171)]), schemaErrorMap: this[s(2507)][s(2049)], path: x[s(2920)], parent: x.parent };
  }
  _processInputParams(x) {
    const t = r;
    return { status: new ee(), ctx: { common: x[t(407)].common, data: x.data, parsedType: Ie(x[t(2171)]), schemaErrorMap: this._def[t(2049)], path: x[t(2920)], parent: x.parent } };
  }
  [r(609)](x) {
    const t = r, s = this[t(443)](x);
    if (bx(s)) throw new Error(t(331));
    return s;
  }
  [r(2260)](x) {
    const t = r, s = this[t(443)](x);
    return Promise[t(422)](s);
  }
  [r(1724)](x, t) {
    const s = r, e = this[s(1444)](x, t);
    if (e[s(656)]) return e[s(2171)];
    throw e[s(795)];
  }
  safeParse(x, t) {
    const s = r, e = { common: { issues: [], async: (t == null ? void 0 : t.async) ?? !1, contextualErrorMap: t == null ? void 0 : t[s(2049)] }, path: (t == null ? void 0 : t[s(2920)]) || [], schemaErrorMap: this[s(2507)].errorMap, parent: null, data: x, parsedType: Ie(x) }, a = this[s(609)]({ data: x, path: e[s(2920)], parent: e });
    return Rr(e, a);
  }
  [r(556)](x) {
    var e, a;
    const t = r, s = { common: { issues: [], async: !!this[t(2698)][t(2247)] }, path: [], schemaErrorMap: this[t(2507)][t(2049)], parent: null, data: x, parsedType: Ie(x) };
    if (!this[t(2698)][t(2247)]) try {
      const n = this[t(609)]({ data: x, path: [], parent: s });
      return We(n) ? { value: n.value } : { issues: s[t(1982)][t(2360)] };
    } catch (n) {
      (a = (e = n == null ? void 0 : n.message) == null ? void 0 : e[t(1132)]()) != null && a[t(1127)](t(881)) && (this[t(2698)].async = !0), s[t(1982)] = { issues: [], async: !0 };
    }
    return this._parseAsync({ data: x, path: [], parent: s })[t(1227)]((n) => We(n) ? { value: n[t(1163)] } : { issues: s[t(1982)][t(2360)] });
  }
  async [r(484)](x, t) {
    const s = r, e = await this[s(541)](x, t);
    if (e[s(656)]) return e[s(2171)];
    throw e[s(795)];
  }
  async [r(541)](x, t) {
    const s = r, e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[s(2049)], async: !0 }, path: (t == null ? void 0 : t[s(2920)]) || [], schemaErrorMap: this[s(2507)][s(2049)], parent: null, data: x, parsedType: Ie(x) }, a = this[s(443)]({ data: x, path: e.path, parent: e }), n = await (bx(a) ? a : Promise.resolve(a));
    return Rr(e, n);
  }
  refine(x, t) {
    const s = r, e = (a) => {
      const n = B;
      return typeof t == "string" || typeof t > "u" ? { message: t } : typeof t === n(975) ? t(a) : t;
    };
    return this[s(502)]((a, n) => {
      const i = s, c = x(a), u = () => n[i(1938)]({ code: K[i(1974)], ...e(a) });
      return typeof Promise !== i(662) && c instanceof Promise ? c[i(1227)]((d) => d ? !0 : (u(), !1)) : c ? !0 : (u(), !1);
    });
  }
  [r(2306)](x, t) {
    const s = r;
    return this[s(502)]((e, a) => {
      const n = s;
      return x(e) ? !0 : (a[n(1938)](typeof t === n(975) ? t(e, a) : t), !1);
    });
  }
  [r(502)](x) {
    const t = r;
    return new Te({ schema: this, typeName: p0[t(576)], effect: { type: t(2306), refinement: x } });
  }
  [r(1874)](x) {
    return this[r(502)](x);
  }
  constructor(x) {
    const t = r;
    this.spa = this[t(541)], this[t(2507)] = x, this.parse = this.parse[t(1826)](this), this.safeParse = this[t(1444)][t(1826)](this), this[t(484)] = this.parseAsync[t(1826)](this), this[t(541)] = this[t(541)][t(1826)](this), this.spa = this[t(1967)][t(1826)](this), this[t(1532)] = this.refine[t(1826)](this), this.refinement = this[t(2306)][t(1826)](this), this[t(1874)] = this[t(1874)].bind(this), this[t(773)] = this[t(773)][t(1826)](this), this[t(2662)] = this[t(2662)][t(1826)](this), this.nullish = this[t(2358)][t(1826)](this), this.array = this[t(2241)][t(1826)](this), this[t(775)] = this[t(775)][t(1826)](this), this.or = this.or[t(1826)](this), this[t(1911)] = this[t(1911)][t(1826)](this), this[t(587)] = this[t(587)][t(1826)](this), this[t(2729)] = this[t(2729)][t(1826)](this), this[t(1200)] = this[t(1200)][t(1826)](this), this[t(1307)] = this[t(1307)][t(1826)](this), this[t(2670)] = this[t(2670)][t(1826)](this), this.pipe = this[t(409)][t(1826)](this), this.readonly = this[t(2751)][t(1826)](this), this[t(1352)] = this.isNullable[t(1826)](this), this.isOptional = this[t(403)][t(1826)](this), this[t(2698)] = { version: 1, vendor: t(1784), validate: (s) => this["~validate"](s) };
  }
  optional() {
    const x = r;
    return we[x(800)](this, this[x(2507)]);
  }
  nullable() {
    const x = r;
    return Me[x(800)](this, this[x(2507)]);
  }
  [r(2358)]() {
    const x = r;
    return this.nullable()[x(773)]();
  }
  [r(2241)]() {
    return fe[r(800)](this);
  }
  [r(775)]() {
    const x = r;
    return kx[x(800)](this, this[x(2507)]);
  }
  or(x) {
    const t = r;
    return yx[t(800)]([this, x], this[t(2507)]);
  }
  and(x) {
    const t = r;
    return vx.create(this, x, this[t(2507)]);
  }
  transform(x) {
    return new Te({ ...w0(this._def), schema: this, typeName: p0.ZodEffects, effect: { type: "transform", transform: x } });
  }
  [r(1200)](x) {
    const t = r, s = typeof x == "function" ? x : () => x;
    return new Px({ ...w0(this[t(2507)]), innerType: this, defaultValue: s, typeName: p0[t(988)] });
  }
  [r(2729)]() {
    const x = r;
    return new Os({ typeName: p0[x(1697)], type: this, ...w0(this[x(2507)]) });
  }
  [r(1307)](x) {
    const t = r, s = typeof x === t(975) ? x : () => x;
    return new Ix({ ...w0(this[t(2507)]), innerType: this, catchValue: s, typeName: p0[t(2278)] });
  }
  [r(2670)](x) {
    const t = r, s = this[t(2617)];
    return new s({ ...this[t(2507)], description: x });
  }
  pipe(x) {
    return rr.create(this, x);
  }
  [r(2751)]() {
    return Ex.create(this);
  }
  [r(403)]() {
    const x = r;
    return this[x(1444)](void 0)[x(656)];
  }
  [r(1352)]() {
    const x = r;
    return this.safeParse(null)[x(656)];
  }
}
const Mn = /^c[^\s-]{8,}$/i, Ln = /^[0-9a-z]+$/, $n = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Hn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, zn = /^[a-z0-9_-]{21}$/i, Un = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Vn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Wn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Zn = r(1965);
let $x;
const Bn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Kn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, _n = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Gn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Jn = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Qn = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, qs = r(2334), Xn = new RegExp("^" + qs + "$");
function Ts(o) {
  const x = r;
  let t = x(2400);
  o[x(1378)] ? t = t + x(1016) + o[x(1378)] + "}" : o[x(1378)] == null && (t = t + x(2345));
  const s = o[x(1378)] ? "+" : "?";
  return x(495) + t + ")" + s;
}
function Yn(o) {
  return new RegExp("^" + Ts(o) + "$");
}
function eo(o) {
  const x = r;
  let t = qs + "T" + Ts(o);
  const s = [];
  return s[x(1072)](o.local ? "Z?" : "Z"), o[x(2141)] && s.push(x(1017)), t = t + "(" + s[x(2131)]("|") + ")", new RegExp("^" + t + "$");
}
function xo(o, x) {
  const t = r;
  return !!((x === "v4" || !x) && Bn[t(1723)](o) || (x === "v6" || !x) && _n[t(1723)](o));
}
function to(o, x) {
  const t = r;
  if (!Un[t(1723)](o)) return !1;
  try {
    const [s] = o[t(1821)](".");
    if (!s) return !1;
    const e = s[t(521)](/-/g, "+").replace(/_/g, "/")[t(1445)](s[t(1726)] + (4 - s[t(1726)] % 4) % 4, "="), a = JSON[t(1724)](atob(e));
    return !(typeof a !== t(1694) || a === null || t(2361) in a && (a == null ? void 0 : a[t(2361)]) !== t(1097) || !a[t(2786)] || x && a[t(2786)] !== x);
  } catch {
    return !1;
  }
}
function ro(o, x) {
  return !!((x === "v4" || !x) && Kn.test(o) || (x === "v6" || !x) && Gn.test(o));
}
class ve extends C0 {
  [r(443)](x) {
    const t = r;
    if (this._def[t(2543)] && (x[t(2171)] = String(x[t(2171)])), this._getType(x) !== r0[t(360)]) {
      const n = this._getOrReturnCtx(x);
      return Y(n, { code: K[t(2900)], expected: r0[t(360)], received: n.parsedType }), h0;
    }
    const e = new ee();
    let a;
    for (const n of this[t(2507)][t(2509)])
      if (n[t(1325)] === t(2742)) x[t(2171)][t(1726)] < n[t(1163)] && (a = this[t(646)](x, a), Y(a, { code: K.too_small, minimum: n.value, type: t(360), inclusive: !0, exact: !1, message: n[t(2462)] }), e[t(774)]());
      else if (n[t(1325)] === t(2650)) x[t(2171)][t(1726)] > n[t(1163)] && (a = this._getOrReturnCtx(x, a), Y(a, { code: K[t(2010)], maximum: n[t(1163)], type: "string", inclusive: !0, exact: !1, message: n[t(2462)] }), e[t(774)]());
      else if (n[t(1325)] === t(1726)) {
        const i = x.data[t(1726)] > n[t(1163)], c = x.data[t(1726)] < n[t(1163)];
        (i || c) && (a = this._getOrReturnCtx(x, a), i ? Y(a, { code: K[t(2010)], maximum: n[t(1163)], type: t(360), inclusive: !0, exact: !0, message: n.message }) : c && Y(a, { code: K[t(2652)], minimum: n.value, type: t(360), inclusive: !0, exact: !0, message: n.message }), e[t(774)]());
      } else if (n[t(1325)] === t(1099)) !Wn[t(1723)](x.data) && (a = this._getOrReturnCtx(x, a), Y(a, { validation: t(1099), code: K[t(1440)], message: n[t(2462)] }), e[t(774)]());
      else if (n[t(1325)] === "emoji") !$x && ($x = new RegExp(Zn, "u")), !$x.test(x.data) && (a = this[t(646)](x, a), Y(a, { validation: "emoji", code: K[t(1440)], message: n[t(2462)] }), e[t(774)]());
      else if (n[t(1325)] === t(2434)) !Hn.test(x[t(2171)]) && (a = this._getOrReturnCtx(x, a), Y(a, { validation: t(2434), code: K[t(1440)], message: n[t(2462)] }), e[t(774)]());
      else if (n[t(1325)] === "nanoid") !zn[t(1723)](x[t(2171)]) && (a = this[t(646)](x, a), Y(a, { validation: t(1659), code: K.invalid_string, message: n.message }), e[t(774)]());
      else if (n.kind === t(618)) !Mn.test(x[t(2171)]) && (a = this._getOrReturnCtx(x, a), Y(a, { validation: t(618), code: K[t(1440)], message: n[t(2462)] }), e[t(774)]());
      else if (n[t(1325)] === t(2840)) !Ln[t(1723)](x.data) && (a = this[t(646)](x, a), Y(a, { validation: "cuid2", code: K[t(1440)], message: n[t(2462)] }), e[t(774)]());
      else if (n[t(1325)] === t(478)) !$n.test(x.data) && (a = this[t(646)](x, a), Y(a, { validation: t(478), code: K.invalid_string, message: n[t(2462)] }), e[t(774)]());
      else if (n.kind === t(2173)) try {
        new URL(x[t(2171)]);
      } catch {
        a = this[t(646)](x, a), Y(a, { validation: t(2173), code: K.invalid_string, message: n[t(2462)] }), e[t(774)]();
      }
      else
        n[t(1325)] === t(463) ? (n[t(463)][t(1274)] = 0, !n[t(463)][t(1723)](x[t(2171)]) && (a = this[t(646)](x, a), Y(a, { validation: t(463), code: K[t(1440)], message: n[t(2462)] }), e.dirty())) : n[t(1325)] === "trim" ? x[t(2171)] = x[t(2171)][t(425)]() : n.kind === "includes" ? !x[t(2171)].includes(n.value, n[t(386)]) && (a = this[t(646)](x, a), Y(a, { code: K.invalid_string, validation: { includes: n[t(1163)], position: n[t(386)] }, message: n.message }), e[t(774)]()) : n[t(1325)] === "toLowerCase" ? x[t(2171)] = x.data[t(1132)]() : n[t(1325)] === t(1006) ? x.data = x[t(2171)][t(1006)]() : n.kind === "startsWith" ? !x[t(2171)][t(2508)](n[t(1163)]) && (a = this[t(646)](x, a), Y(a, { code: K[t(1440)], validation: { startsWith: n[t(1163)] }, message: n[t(2462)] }), e[t(774)]()) : n[t(1325)] === t(2390) ? !x[t(2171)][t(2390)](n[t(1163)]) && (a = this[t(646)](x, a), Y(a, { code: K.invalid_string, validation: { endsWith: n[t(1163)] }, message: n[t(2462)] }), e[t(774)]()) : n[t(1325)] === t(2769) ? !eo(n)[t(1723)](x[t(2171)]) && (a = this[t(646)](x, a), Y(a, { code: K[t(1440)], validation: t(2769), message: n[t(2462)] }), e[t(774)]()) : n.kind === t(1637) ? !Xn[t(1723)](x[t(2171)]) && (a = this[t(646)](x, a), Y(a, { code: K[t(1440)], validation: t(1637), message: n[t(2462)] }), e[t(774)]()) : n[t(1325)] === t(1542) ? !Yn(n)[t(1723)](x.data) && (a = this[t(646)](x, a), Y(a, { code: K[t(1440)], validation: t(1542), message: n[t(2462)] }), e[t(774)]()) : n[t(1325)] === t(1024) ? !Vn.test(x[t(2171)]) && (a = this[t(646)](x, a), Y(a, { validation: "duration", code: K[t(1440)], message: n[t(2462)] }), e[t(774)]()) : n[t(1325)] === "ip" ? !xo(x[t(2171)], n[t(1684)]) && (a = this[t(646)](x, a), Y(a, { validation: "ip", code: K[t(1440)], message: n[t(2462)] }), e[t(774)]()) : n[t(1325)] === t(549) ? !to(x[t(2171)], n[t(2786)]) && (a = this[t(646)](x, a), Y(a, { validation: t(549), code: K[t(1440)], message: n.message }), e[t(774)]()) : n.kind === t(2435) ? !ro(x.data, n[t(1684)]) && (a = this[t(646)](x, a), Y(a, { validation: t(2435), code: K[t(1440)], message: n[t(2462)] }), e[t(774)]()) : n.kind === t(578) ? !Jn[t(1723)](x.data) && (a = this[t(646)](x, a), Y(a, { validation: t(578), code: K[t(1440)], message: n[t(2462)] }), e.dirty()) : n[t(1325)] === t(1486) ? !Qn[t(1723)](x[t(2171)]) && (a = this[t(646)](x, a), Y(a, { validation: "base64url", code: K.invalid_string, message: n.message }), e[t(774)]()) : F0[t(951)](n);
    return { status: e[t(1163)], value: x[t(2171)] };
  }
  _regex(x, t, s) {
    const e = r;
    return this[e(2306)]((a) => x[e(1723)](a), { validation: t, code: K[e(1440)], ...a0.errToObj(s) });
  }
  [r(1029)](x) {
    const t = r;
    return new ve({ ...this[t(2507)], checks: [...this[t(2507)].checks, x] });
  }
  [r(1099)](x) {
    const t = r;
    return this._addCheck({ kind: t(1099), ...a0[t(2213)](x) });
  }
  [r(2173)](x) {
    const t = r;
    return this[t(1029)]({ kind: "url", ...a0[t(2213)](x) });
  }
  [r(1657)](x) {
    const t = r;
    return this._addCheck({ kind: "emoji", ...a0[t(2213)](x) });
  }
  [r(2434)](x) {
    const t = r;
    return this[t(1029)]({ kind: t(2434), ...a0[t(2213)](x) });
  }
  [r(1659)](x) {
    const t = r;
    return this[t(1029)]({ kind: t(1659), ...a0.errToObj(x) });
  }
  [r(618)](x) {
    const t = r;
    return this._addCheck({ kind: t(618), ...a0[t(2213)](x) });
  }
  [r(2840)](x) {
    const t = r;
    return this[t(1029)]({ kind: "cuid2", ...a0[t(2213)](x) });
  }
  [r(478)](x) {
    const t = r;
    return this[t(1029)]({ kind: "ulid", ...a0[t(2213)](x) });
  }
  [r(578)](x) {
    const t = r;
    return this[t(1029)]({ kind: t(578), ...a0[t(2213)](x) });
  }
  base64url(x) {
    const t = r;
    return this[t(1029)]({ kind: t(1486), ...a0.errToObj(x) });
  }
  jwt(x) {
    const t = r;
    return this[t(1029)]({ kind: t(549), ...a0.errToObj(x) });
  }
  ip(x) {
    const t = r;
    return this[t(1029)]({ kind: "ip", ...a0[t(2213)](x) });
  }
  [r(2435)](x) {
    const t = r;
    return this[t(1029)]({ kind: t(2435), ...a0[t(2213)](x) });
  }
  [r(2769)](x) {
    const t = r;
    return typeof x === t(360) ? this[t(1029)]({ kind: "datetime", precision: null, offset: !1, local: !1, message: x }) : this[t(1029)]({ kind: t(2769), precision: typeof (x == null ? void 0 : x.precision) === t(662) ? null : x == null ? void 0 : x[t(1378)], offset: (x == null ? void 0 : x.offset) ?? !1, local: (x == null ? void 0 : x[t(2811)]) ?? !1, ...a0[t(2213)](x == null ? void 0 : x[t(2462)]) });
  }
  [r(1637)](x) {
    const t = r;
    return this._addCheck({ kind: t(1637), message: x });
  }
  [r(1542)](x) {
    const t = r;
    return typeof x === t(360) ? this._addCheck({ kind: t(1542), precision: null, message: x }) : this._addCheck({ kind: t(1542), precision: typeof (x == null ? void 0 : x[t(1378)]) === t(662) ? null : x == null ? void 0 : x[t(1378)], ...a0[t(2213)](x == null ? void 0 : x[t(2462)]) });
  }
  [r(1024)](x) {
    const t = r;
    return this[t(1029)]({ kind: t(1024), ...a0[t(2213)](x) });
  }
  [r(463)](x, t) {
    return this[r(1029)]({ kind: "regex", regex: x, ...a0.errToObj(t) });
  }
  [r(1127)](x, t) {
    const s = r;
    return this[s(1029)]({ kind: "includes", value: x, position: t == null ? void 0 : t[s(386)], ...a0[s(2213)](t == null ? void 0 : t[s(2462)]) });
  }
  [r(2508)](x, t) {
    const s = r;
    return this[s(1029)]({ kind: s(2508), value: x, ...a0[s(2213)](t) });
  }
  [r(2390)](x, t) {
    const s = r;
    return this._addCheck({ kind: s(2390), value: x, ...a0.errToObj(t) });
  }
  [r(2742)](x, t) {
    const s = r;
    return this[s(1029)]({ kind: "min", value: x, ...a0[s(2213)](t) });
  }
  [r(2650)](x, t) {
    const s = r;
    return this[s(1029)]({ kind: "max", value: x, ...a0[s(2213)](t) });
  }
  [r(1726)](x, t) {
    return this[r(1029)]({ kind: "length", value: x, ...a0.errToObj(t) });
  }
  [r(1394)](x) {
    const t = r;
    return this.min(1, a0[t(2213)](x));
  }
  [r(425)]() {
    const x = r;
    return new ve({ ...this[x(2507)], checks: [...this[x(2507)][x(2509)], { kind: "trim" }] });
  }
  [r(1132)]() {
    const x = r;
    return new ve({ ...this[x(2507)], checks: [...this[x(2507)][x(2509)], { kind: "toLowerCase" }] });
  }
  [r(1006)]() {
    const x = r;
    return new ve({ ...this[x(2507)], checks: [...this[x(2507)][x(2509)], { kind: "toUpperCase" }] });
  }
  get [r(2519)]() {
    const x = r;
    return !!this[x(2507)][x(2509)][x(1379)]((t) => t[x(1325)] === "datetime");
  }
  get [r(1709)]() {
    const x = r;
    return !!this[x(2507)][x(2509)][x(1379)]((t) => t[x(1325)] === x(1637));
  }
  get [r(1124)]() {
    const x = r;
    return !!this[x(2507)][x(2509)][x(1379)]((t) => t.kind === x(1542));
  }
  get [r(967)]() {
    const x = r;
    return !!this[x(2507)][x(2509)][x(1379)]((t) => t[x(1325)] === "duration");
  }
  get isEmail() {
    const x = r;
    return !!this[x(2507)][x(2509)][x(1379)]((t) => t[x(1325)] === "email");
  }
  get [r(558)]() {
    const x = r;
    return !!this[x(2507)][x(2509)][x(1379)]((t) => t.kind === x(2173));
  }
  get [r(2437)]() {
    const x = r;
    return !!this[x(2507)][x(2509)].find((t) => t[x(1325)] === x(1657));
  }
  get [r(1857)]() {
    const x = r;
    return !!this[x(2507)][x(2509)].find((t) => t[x(1325)] === x(2434));
  }
  get [r(449)]() {
    const x = r;
    return !!this._def[x(2509)][x(1379)]((t) => t.kind === x(1659));
  }
  get [r(1956)]() {
    const x = r;
    return !!this[x(2507)][x(2509)].find((t) => t[x(1325)] === x(618));
  }
  get [r(2412)]() {
    const x = r;
    return !!this[x(2507)].checks.find((t) => t[x(1325)] === "cuid2");
  }
  get [r(2486)]() {
    const x = r;
    return !!this._def[x(2509)][x(1379)]((t) => t.kind === x(478));
  }
  get [r(1431)]() {
    const x = r;
    return !!this._def[x(2509)][x(1379)]((t) => t[x(1325)] === "ip");
  }
  get [r(1083)]() {
    const x = r;
    return !!this._def[x(2509)][x(1379)]((t) => t[x(1325)] === x(2435));
  }
  get [r(1355)]() {
    const x = r;
    return !!this._def.checks[x(1379)]((t) => t[x(1325)] === x(578));
  }
  get [r(436)]() {
    const x = r;
    return !!this[x(2507)][x(2509)].find((t) => t[x(1325)] === x(1486));
  }
  get [r(1586)]() {
    const x = r;
    let t = null;
    for (const s of this[x(2507)][x(2509)])
      s.kind === "min" && (t === null || s.value > t) && (t = s[x(1163)]);
    return t;
  }
  get maxLength() {
    const x = r;
    let t = null;
    for (const s of this._def.checks)
      s[x(1325)] === "max" && (t === null || s.value < t) && (t = s[x(1163)]);
    return t;
  }
}
ve[r(800)] = (o) => {
  const x = r;
  return new ve({ checks: [], typeName: p0[x(1942)], coerce: (o == null ? void 0 : o[x(2543)]) ?? !1, ...w0(o) });
};
function ao(o, x) {
  const t = r, s = (o[t(1860)]()[t(1821)](".")[1] || "")[t(1726)], e = (x[t(1860)]().split(".")[1] || "")[t(1726)], a = s > e ? s : e, n = Number.parseInt(o[t(2830)](a)[t(521)](".", "")), i = Number[t(416)](x[t(2830)](a)[t(521)](".", ""));
  return n % i / 10 ** a;
}
class Ze extends C0 {
  constructor() {
    const x = r;
    super(...arguments), this.min = this.gte, this.max = this[x(594)], this.step = this.multipleOf;
  }
  _parse(x) {
    const t = r;
    if (this[t(2507)][t(2543)] && (x[t(2171)] = Number(x[t(2171)])), this[t(401)](x) !== r0[t(1455)]) {
      const n = this[t(646)](x);
      return Y(n, { code: K[t(2900)], expected: r0[t(1455)], received: n[t(2181)] }), h0;
    }
    let e;
    const a = new ee();
    for (const n of this[t(2507)][t(2509)])
      n[t(1325)] === "int" ? !F0[t(2288)](x[t(2171)]) && (e = this[t(646)](x, e), Y(e, { code: K[t(2900)], expected: t(1046), received: t(2594), message: n.message }), a.dirty()) : n[t(1325)] === t(2742) ? (n.inclusive ? x[t(2171)] < n[t(1163)] : x[t(2171)] <= n[t(1163)]) && (e = this[t(646)](x, e), Y(e, { code: K[t(2652)], minimum: n[t(1163)], type: t(1455), inclusive: n[t(447)], exact: !1, message: n[t(2462)] }), a[t(774)]()) : n[t(1325)] === t(2650) ? (n[t(447)] ? x[t(2171)] > n.value : x.data >= n[t(1163)]) && (e = this[t(646)](x, e), Y(e, { code: K[t(2010)], maximum: n[t(1163)], type: t(1455), inclusive: n[t(447)], exact: !1, message: n.message }), a[t(774)]()) : n[t(1325)] === "multipleOf" ? ao(x.data, n[t(1163)]) !== 0 && (e = this[t(646)](x, e), Y(e, { code: K[t(1292)], multipleOf: n[t(1163)], message: n[t(2462)] }), a[t(774)]()) : n[t(1325)] === t(582) ? !Number.isFinite(x[t(2171)]) && (e = this[t(646)](x, e), Y(e, { code: K[t(2532)], message: n[t(2462)] }), a[t(774)]()) : F0[t(951)](n);
    return { status: a[t(1163)], value: x.data };
  }
  gte(x, t) {
    const s = r;
    return this[s(748)](s(2742), x, !0, a0[s(1860)](t));
  }
  gt(x, t) {
    return this[r(748)]("min", x, !1, a0.toString(t));
  }
  [r(594)](x, t) {
    const s = r;
    return this[s(748)](s(2650), x, !0, a0[s(1860)](t));
  }
  lt(x, t) {
    const s = r;
    return this[s(748)](s(2650), x, !1, a0[s(1860)](t));
  }
  [r(748)](x, t, s, e) {
    const a = r;
    return new Ze({ ...this[a(2507)], checks: [...this[a(2507)][a(2509)], { kind: x, value: t, inclusive: s, message: a0[a(1860)](e) }] });
  }
  [r(1029)](x) {
    const t = r;
    return new Ze({ ...this._def, checks: [...this._def[t(2509)], x] });
  }
  int(x) {
    const t = r;
    return this[t(1029)]({ kind: t(561), message: a0[t(1860)](x) });
  }
  positive(x) {
    const t = r;
    return this._addCheck({ kind: t(2742), value: 0, inclusive: !1, message: a0[t(1860)](x) });
  }
  [r(1131)](x) {
    const t = r;
    return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: a0[t(1860)](x) });
  }
  nonpositive(x) {
    const t = r;
    return this._addCheck({ kind: t(2650), value: 0, inclusive: !0, message: a0[t(1860)](x) });
  }
  nonnegative(x) {
    const t = r;
    return this[t(1029)]({ kind: "min", value: 0, inclusive: !0, message: a0[t(1860)](x) });
  }
  [r(1172)](x, t) {
    const s = r;
    return this[s(1029)]({ kind: s(1172), value: x, message: a0[s(1860)](t) });
  }
  [r(582)](x) {
    const t = r;
    return this._addCheck({ kind: t(582), message: a0.toString(x) });
  }
  [r(1236)](x) {
    const t = r;
    return this[t(1029)]({ kind: t(2742), inclusive: !0, value: Number[t(1989)], message: a0[t(1860)](x) })[t(1029)]({ kind: t(2650), inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: a0[t(1860)](x) });
  }
  get [r(1975)]() {
    const x = r;
    let t = null;
    for (const s of this[x(2507)].checks)
      s[x(1325)] === x(2742) && (t === null || s[x(1163)] > t) && (t = s[x(1163)]);
    return t;
  }
  get maxValue() {
    const x = r;
    let t = null;
    for (const s of this[x(2507)][x(2509)])
      s[x(1325)] === x(2650) && (t === null || s[x(1163)] < t) && (t = s[x(1163)]);
    return t;
  }
  get [r(2514)]() {
    const x = r;
    return !!this[x(2507)][x(2509)][x(1379)]((t) => t.kind === "int" || t.kind === x(1172) && F0.isInteger(t[x(1163)]));
  }
  get isFinite() {
    const x = r;
    let t = null, s = null;
    for (const e of this[x(2507)][x(2509)]) {
      if (e[x(1325)] === x(582) || e[x(1325)] === x(561) || e.kind === x(1172)) return !0;
      e[x(1325)] === x(2742) ? (s === null || e.value > s) && (s = e[x(1163)]) : e.kind === "max" && (t === null || e.value < t) && (t = e[x(1163)]);
    }
    return Number[x(1881)](s) && Number[x(1881)](t);
  }
}
Ze[r(800)] = (o) => {
  const x = r;
  return new Ze({ checks: [], typeName: p0[x(1386)], coerce: (o == null ? void 0 : o[x(2543)]) || !1, ...w0(o) });
};
class tx extends C0 {
  constructor() {
    const x = r;
    super(...arguments), this[x(2742)] = this.gte, this[x(2650)] = this.lte;
  }
  _parse(x) {
    const t = r;
    if (this[t(2507)].coerce) try {
      x.data = BigInt(x[t(2171)]);
    } catch {
      return this[t(1928)](x);
    }
    if (this[t(401)](x) !== r0[t(987)]) return this[t(1928)](x);
    let e;
    const a = new ee();
    for (const n of this[t(2507)][t(2509)])
      n[t(1325)] === t(2742) ? (n[t(447)] ? x[t(2171)] < n.value : x[t(2171)] <= n[t(1163)]) && (e = this[t(646)](x, e), Y(e, { code: K[t(2652)], type: "bigint", minimum: n[t(1163)], inclusive: n[t(447)], message: n[t(2462)] }), a[t(774)]()) : n[t(1325)] === t(2650) ? (n[t(447)] ? x[t(2171)] > n[t(1163)] : x[t(2171)] >= n[t(1163)]) && (e = this[t(646)](x, e), Y(e, { code: K[t(2010)], type: t(987), maximum: n[t(1163)], inclusive: n.inclusive, message: n[t(2462)] }), a.dirty()) : n[t(1325)] === t(1172) ? x.data % n[t(1163)] !== BigInt(0) && (e = this._getOrReturnCtx(x, e), Y(e, { code: K[t(1292)], multipleOf: n[t(1163)], message: n[t(2462)] }), a[t(774)]()) : F0.assertNever(n);
    return { status: a[t(1163)], value: x[t(2171)] };
  }
  [r(1928)](x) {
    const t = r, s = this[t(646)](x);
    return Y(s, { code: K[t(2900)], expected: r0[t(987)], received: s[t(2181)] }), h0;
  }
  [r(1889)](x, t) {
    const s = r;
    return this[s(748)](s(2742), x, !0, a0.toString(t));
  }
  gt(x, t) {
    const s = r;
    return this[s(748)](s(2742), x, !1, a0[s(1860)](t));
  }
  [r(594)](x, t) {
    const s = r;
    return this[s(748)](s(2650), x, !0, a0.toString(t));
  }
  lt(x, t) {
    const s = r;
    return this[s(748)]("max", x, !1, a0[s(1860)](t));
  }
  setLimit(x, t, s, e) {
    const a = r;
    return new tx({ ...this[a(2507)], checks: [...this[a(2507)][a(2509)], { kind: x, value: t, inclusive: s, message: a0[a(1860)](e) }] });
  }
  [r(1029)](x) {
    const t = r;
    return new tx({ ...this[t(2507)], checks: [...this._def.checks, x] });
  }
  [r(1205)](x) {
    const t = r;
    return this[t(1029)]({ kind: t(2742), value: BigInt(0), inclusive: !1, message: a0[t(1860)](x) });
  }
  [r(1131)](x) {
    const t = r;
    return this[t(1029)]({ kind: t(2650), value: BigInt(0), inclusive: !1, message: a0[t(1860)](x) });
  }
  nonpositive(x) {
    const t = r;
    return this._addCheck({ kind: t(2650), value: BigInt(0), inclusive: !0, message: a0[t(1860)](x) });
  }
  [r(1530)](x) {
    const t = r;
    return this._addCheck({ kind: t(2742), value: BigInt(0), inclusive: !0, message: a0[t(1860)](x) });
  }
  [r(1172)](x, t) {
    const s = r;
    return this[s(1029)]({ kind: s(1172), value: x, message: a0[s(1860)](t) });
  }
  get [r(1975)]() {
    const x = r;
    let t = null;
    for (const s of this[x(2507)][x(2509)])
      s.kind === x(2742) && (t === null || s[x(1163)] > t) && (t = s[x(1163)]);
    return t;
  }
  get [r(498)]() {
    const x = r;
    let t = null;
    for (const s of this[x(2507)][x(2509)])
      s[x(1325)] === x(2650) && (t === null || s[x(1163)] < t) && (t = s[x(1163)]);
    return t;
  }
}
tx[r(800)] = (o) => {
  const x = r;
  return new tx({ checks: [], typeName: p0[x(2056)], coerce: (o == null ? void 0 : o[x(2543)]) ?? !1, ...w0(o) });
};
class $t extends C0 {
  [r(443)](x) {
    const t = r;
    if (this[t(2507)].coerce && (x[t(2171)] = !!x[t(2171)]), this._getType(x) !== r0[t(2788)]) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: K[t(2900)], expected: r0[t(2788)], received: e[t(2181)] }), h0;
    }
    return re(x[t(2171)]);
  }
}
$t.create = (o) => {
  const x = r;
  return new $t({ typeName: p0[x(1267)], coerce: (o == null ? void 0 : o[x(2543)]) || !1, ...w0(o) });
};
class gx extends C0 {
  [r(443)](x) {
    const t = r;
    if (this[t(2507)][t(2543)] && (x[t(2171)] = new Date(x.data)), this[t(401)](x) !== r0[t(1637)]) {
      const n = this._getOrReturnCtx(x);
      return Y(n, { code: K[t(2900)], expected: r0[t(1637)], received: n[t(2181)] }), h0;
    }
    if (Number[t(2015)](x[t(2171)][t(822)]())) {
      const n = this._getOrReturnCtx(x);
      return Y(n, { code: K[t(2335)] }), h0;
    }
    const e = new ee();
    let a;
    for (const n of this[t(2507)][t(2509)])
      n[t(1325)] === t(2742) ? x[t(2171)].getTime() < n.value && (a = this._getOrReturnCtx(x, a), Y(a, { code: K[t(2652)], message: n[t(2462)], inclusive: !0, exact: !1, minimum: n[t(1163)], type: t(1637) }), e[t(774)]()) : n.kind === t(2650) ? x[t(2171)][t(822)]() > n[t(1163)] && (a = this._getOrReturnCtx(x, a), Y(a, { code: K[t(2010)], message: n.message, inclusive: !0, exact: !1, maximum: n[t(1163)], type: t(1637) }), e[t(774)]()) : F0[t(951)](n);
    return { status: e[t(1163)], value: new Date(x.data[t(822)]()) };
  }
  _addCheck(x) {
    const t = r;
    return new gx({ ...this[t(2507)], checks: [...this[t(2507)][t(2509)], x] });
  }
  [r(2742)](x, t) {
    const s = r;
    return this._addCheck({ kind: s(2742), value: x.getTime(), message: a0.toString(t) });
  }
  [r(2650)](x, t) {
    const s = r;
    return this[s(1029)]({ kind: s(2650), value: x[s(822)](), message: a0[s(1860)](t) });
  }
  get [r(764)]() {
    const x = r;
    let t = null;
    for (const s of this._def[x(2509)])
      s.kind === x(2742) && (t === null || s.value > t) && (t = s[x(1163)]);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    const x = r;
    let t = null;
    for (const s of this[x(2507)][x(2509)])
      s[x(1325)] === x(2650) && (t === null || s[x(1163)] < t) && (t = s[x(1163)]);
    return t != null ? new Date(t) : null;
  }
}
gx[r(800)] = (o) => {
  const x = r;
  return new gx({ checks: [], coerce: (o == null ? void 0 : o[x(2543)]) || !1, typeName: p0[x(2609)], ...w0(o) });
};
class Cr extends C0 {
  [r(443)](x) {
    const t = r;
    if (this[t(401)](x) !== r0.symbol) {
      const e = this[t(646)](x);
      return Y(e, { code: K[t(2900)], expected: r0[t(699)], received: e.parsedType }), h0;
    }
    return re(x[t(2171)]);
  }
}
Cr[r(800)] = (o) => new Cr({ typeName: p0.ZodSymbol, ...w0(o) });
class Ht extends C0 {
  [r(443)](x) {
    const t = r;
    if (this[t(401)](x) !== r0.undefined) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: K[t(2900)], expected: r0[t(662)], received: e[t(2181)] }), h0;
    }
    return re(x.data);
  }
}
Ht[r(800)] = (o) => new Ht({ typeName: p0.ZodUndefined, ...w0(o) });
class zt extends C0 {
  [r(443)](x) {
    const t = r;
    if (this[t(401)](x) !== r0[t(833)]) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: K[t(2900)], expected: r0[t(833)], received: e[t(2181)] }), h0;
    }
    return re(x[t(2171)]);
  }
}
zt[r(800)] = (o) => {
  const x = r;
  return new zt({ typeName: p0[x(2020)], ...w0(o) });
};
class rx extends C0 {
  constructor() {
    const x = r;
    super(...arguments), this[x(687)] = !0;
  }
  [r(443)](x) {
    return re(x[r(2171)]);
  }
}
rx[r(800)] = (o) => {
  const x = r;
  return new rx({ typeName: p0[x(1570)], ...w0(o) });
};
class Ut extends C0 {
  constructor() {
    const x = r;
    super(...arguments), this[x(2397)] = !0;
  }
  [r(443)](x) {
    return re(x[r(2171)]);
  }
}
Ut[r(800)] = (o) => new Ut({ typeName: p0.ZodUnknown, ...w0(o) });
class Ee extends C0 {
  [r(443)](x) {
    const t = r, s = this._getOrReturnCtx(x);
    return Y(s, { code: K[t(2900)], expected: r0.never, received: s.parsedType }), h0;
  }
}
Ee[r(800)] = (o) => {
  const x = r;
  return new Ee({ typeName: p0[x(892)], ...w0(o) });
};
class Vt extends C0 {
  _parse(x) {
    const t = r;
    if (this[t(401)](x) !== r0[t(662)]) {
      const e = this[t(646)](x);
      return Y(e, { code: K[t(2900)], expected: r0[t(812)], received: e[t(2181)] }), h0;
    }
    return re(x.data);
  }
}
Vt.create = (o) => {
  const x = r;
  return new Vt({ typeName: p0[x(2871)], ...w0(o) });
};
class fe extends C0 {
  _parse(x) {
    const t = r, { ctx: s, status: e } = this[t(1243)](x), a = this[t(2507)];
    if (s[t(2181)] !== r0[t(2241)]) return Y(s, { code: K[t(2900)], expected: r0[t(2241)], received: s[t(2181)] }), h0;
    if (a[t(1026)] !== null) {
      const i = s.data[t(1726)] > a[t(1026)].value, c = s[t(2171)].length < a.exactLength[t(1163)];
      (i || c) && (Y(s, { code: i ? K[t(2010)] : K[t(2652)], minimum: c ? a.exactLength[t(1163)] : void 0, maximum: i ? a[t(1026)][t(1163)] : void 0, type: t(2241), inclusive: !0, exact: !0, message: a[t(1026)][t(2462)] }), e.dirty());
    }
    if (a[t(1586)] !== null && s[t(2171)].length < a[t(1586)][t(1163)] && (Y(s, { code: K.too_small, minimum: a[t(1586)][t(1163)], type: t(2241), inclusive: !0, exact: !1, message: a[t(1586)].message }), e.dirty()), a[t(2501)] !== null && s[t(2171)][t(1726)] > a[t(2501)][t(1163)] && (Y(s, { code: K[t(2010)], maximum: a.maxLength.value, type: "array", inclusive: !0, exact: !1, message: a[t(2501)].message }), e[t(774)]()), s[t(1982)][t(2247)]) return Promise[t(1348)]([...s[t(2171)]][t(2086)]((i, c) => {
      const u = t;
      return a[u(1655)][u(2260)](new he(s, i, s[u(2920)], c));
    }))[t(1227)]((i) => ee.mergeArray(e, i));
    const n = [...s[t(2171)]][t(2086)]((i, c) => {
      const u = t;
      return a[u(1655)][u(609)](new he(s, i, s[u(2920)], c));
    });
    return ee[t(2672)](e, n);
  }
  get [r(1203)]() {
    const x = r;
    return this[x(2507)][x(1655)];
  }
  min(x, t) {
    return new fe({ ...this._def, minLength: { value: x, message: a0.toString(t) } });
  }
  max(x, t) {
    const s = r;
    return new fe({ ...this[s(2507)], maxLength: { value: x, message: a0.toString(t) } });
  }
  [r(1726)](x, t) {
    const s = r;
    return new fe({ ...this[s(2507)], exactLength: { value: x, message: a0[s(1860)](t) } });
  }
  nonempty(x) {
    return this.min(1, x);
  }
}
fe[r(800)] = (o, x) => {
  const t = r;
  return new fe({ type: o, minLength: null, maxLength: null, exactLength: null, typeName: p0[t(497)], ...w0(x) });
};
function Ve(o) {
  const x = r;
  if (o instanceof _0) {
    const t = {};
    for (const s in o[x(1423)]) {
      const e = o[x(1423)][s];
      t[s] = we.create(Ve(e));
    }
    return new _0({ ...o[x(2507)], shape: () => t });
  } else
    return o instanceof fe ? new fe({ ...o._def, type: Ve(o.element) }) : o instanceof we ? we[x(800)](Ve(o[x(1618)]())) : o instanceof Me ? Me[x(800)](Ve(o[x(1618)]())) : o instanceof De ? De[x(800)](o.items.map((t) => Ve(t))) : o;
}
class _0 extends C0 {
  constructor() {
    const x = r;
    super(...arguments), this[x(2857)] = null, this[x(961)] = this[x(1054)], this.augment = this[x(1228)];
  }
  [r(811)]() {
    const x = r;
    if (this._cached !== null) return this[x(2857)];
    const t = this._def[x(1423)](), s = F0[x(2252)](t);
    return this._cached = { shape: t, keys: s }, this._cached;
  }
  [r(443)](x) {
    const t = r;
    if (this[t(401)](x) !== r0[t(1694)]) {
      const d = this._getOrReturnCtx(x);
      return Y(d, { code: K[t(2900)], expected: r0.object, received: d.parsedType }), h0;
    }
    const { status: e, ctx: a } = this[t(1243)](x), { shape: n, keys: i } = this[t(811)](), c = [];
    if (!(this[t(2507)][t(580)] instanceof Ee && this[t(2507)][t(1184)] === t(2347))) for (const d in a[t(2171)])
      !i.includes(d) && c.push(d);
    const u = [];
    for (const d of i) {
      const l = n[d], f = a[t(2171)][d];
      u[t(1072)]({ key: { status: t(1056), value: d }, value: l._parse(new he(a, f, a[t(2920)], d)), alwaysSet: d in a.data });
    }
    if (this[t(2507)][t(580)] instanceof Ee) {
      const d = this._def[t(1184)];
      if (d === t(1054)) for (const l of c)
        u[t(1072)]({ key: { status: t(1056), value: l }, value: { status: t(1056), value: a[t(2171)][l] } });
      else if (d === t(464)) c[t(1726)] > 0 && (Y(a, { code: K.unrecognized_keys, keys: c }), e[t(774)]());
      else if (d !== t(2347)) throw new Error(t(1092));
    } else {
      const d = this[t(2507)][t(580)];
      for (const l of c) {
        const f = a[t(2171)][l];
        u[t(1072)]({ key: { status: t(1056), value: l }, value: d._parse(new he(a, f, a[t(2920)], l)), alwaysSet: l in a[t(2171)] });
      }
    }
    return a[t(1982)][t(2247)] ? Promise.resolve().then(async () => {
      const d = t, l = [];
      for (const f of u) {
        const b = await f[d(2444)], h = await f[d(1163)];
        l[d(1072)]({ key: b, value: h, alwaysSet: f[d(2436)] });
      }
      return l;
    }).then((d) => ee[t(1035)](e, d)) : ee[t(1035)](e, u);
  }
  get shape() {
    return this[r(2507)].shape();
  }
  [r(464)](x) {
    const t = r;
    return a0[t(2213)], new _0({ ...this[t(2507)], unknownKeys: t(464), ...x !== void 0 ? { errorMap: (s, e) => {
      var i, c;
      const a = t, n = ((c = (i = this._def)[a(2049)]) == null ? void 0 : c.call(i, s, e)[a(2462)]) ?? e[a(534)];
      return s[a(2776)] === a(1896) ? { message: a0[a(2213)](x)[a(2462)] ?? n } : { message: n };
    } } : {} });
  }
  [r(2347)]() {
    const x = r;
    return new _0({ ...this[x(2507)], unknownKeys: x(2347) });
  }
  [r(1054)]() {
    const x = r;
    return new _0({ ...this[x(2507)], unknownKeys: x(1054) });
  }
  [r(1228)](x) {
    const t = r;
    return new _0({ ...this[t(2507)], shape: () => ({ ...this[t(2507)].shape(), ...x }) });
  }
  [r(2127)](x) {
    const t = r;
    return new _0({ unknownKeys: x[t(2507)][t(1184)], catchall: x[t(2507)].catchall, shape: () => ({ ...this[t(2507)][t(1423)](), ...x[t(2507)][t(1423)]() }), typeName: p0[t(2696)] });
  }
  [r(788)](x, t) {
    return this[r(1042)]({ [x]: t });
  }
  [r(580)](x) {
    const t = r;
    return new _0({ ...this[t(2507)], catchall: x });
  }
  pick(x) {
    const t = r, s = {};
    for (const e of F0[t(2252)](x))
      x[e] && this.shape[e] && (s[e] = this[t(1423)][e]);
    return new _0({ ...this[t(2507)], shape: () => s });
  }
  omit(x) {
    const t = r, s = {};
    for (const e of F0.objectKeys(this[t(1423)]))
      !x[e] && (s[e] = this.shape[e]);
    return new _0({ ...this._def, shape: () => s });
  }
  [r(734)]() {
    return Ve(this);
  }
  [r(2540)](x) {
    const t = r, s = {};
    for (const e of F0[t(2252)](this[t(1423)])) {
      const a = this[t(1423)][e];
      x && !x[e] ? s[e] = a : s[e] = a[t(773)]();
    }
    return new _0({ ...this[t(2507)], shape: () => s });
  }
  [r(2134)](x) {
    const t = r, s = {};
    for (const e of F0[t(2252)](this[t(1423)]))
      if (x && !x[e]) s[e] = this[t(1423)][e];
      else {
        let n = this.shape[e];
        for (; n instanceof we; )
          n = n[t(2507)][t(1089)];
        s[e] = n;
      }
    return new _0({ ...this._def, shape: () => s });
  }
  [r(2372)]() {
    const x = r;
    return As(F0[x(2252)](this[x(1423)]));
  }
}
_0[r(800)] = (o, x) => {
  const t = r;
  return new _0({ shape: () => o, unknownKeys: t(2347), catchall: Ee[t(800)](), typeName: p0[t(2696)], ...w0(x) });
}, _0[r(2903)] = (o, x) => {
  const t = r;
  return new _0({ shape: () => o, unknownKeys: t(464), catchall: Ee[t(800)](), typeName: p0.ZodObject, ...w0(x) });
}, _0[r(2622)] = (o, x) => {
  const t = r;
  return new _0({ shape: o, unknownKeys: t(2347), catchall: Ee[t(800)](), typeName: p0.ZodObject, ...w0(x) });
};
class yx extends C0 {
  [r(443)](x) {
    const t = r, { ctx: s } = this[t(1243)](x), e = this[t(2507)][t(2747)];
    function a(n) {
      const i = t;
      for (const u of n)
        if (u[i(2904)][i(1254)] === i(1056)) return u[i(2904)];
      for (const u of n)
        if (u[i(2904)][i(1254)] === i(774)) return s.common.issues.push(...u.ctx[i(1982)].issues), u[i(2904)];
      const c = n[i(2086)]((u) => new Se(u[i(2791)].common[i(2360)]));
      return Y(s, { code: K[i(2290)], unionErrors: c }), h0;
    }
    if (s[t(1982)][t(2247)]) return Promise[t(1348)](e[t(2086)](async (n) => {
      const i = t, c = { ...s, common: { ...s.common, issues: [] }, parent: null };
      return { result: await n[i(2260)]({ data: s[i(2171)], path: s[i(2920)], parent: c }), ctx: c };
    }))[t(1227)](a);
    {
      let n;
      const i = [];
      for (const u of e) {
        const d = { ...s, common: { ...s[t(1982)], issues: [] }, parent: null }, l = u[t(609)]({ data: s[t(2171)], path: s.path, parent: d });
        if (l.status === "valid") return l;
        l[t(1254)] === t(774) && !n && (n = { result: l, ctx: d }), d[t(1982)].issues[t(1726)] && i[t(1072)](d[t(1982)].issues);
      }
      if (n) return s[t(1982)][t(2360)][t(1072)](...n[t(2791)][t(1982)].issues), n[t(2904)];
      const c = i[t(2086)]((u) => new Se(u));
      return Y(s, { code: K[t(2290)], unionErrors: c }), h0;
    }
  }
  get [r(2747)]() {
    const x = r;
    return this._def[x(2747)];
  }
}
yx[r(800)] = (o, x) => new yx({ options: o, typeName: p0.ZodUnion, ...w0(x) });
const ge = (o) => {
  const x = r;
  return o instanceof Zt ? ge(o[x(1898)]) : o instanceof Te ? ge(o[x(1089)]()) : o instanceof Sx ? [o[x(1163)]] : o instanceof je ? o[x(2747)] : o instanceof Bt ? F0[x(2263)](o[x(2115)]) : o instanceof Px ? ge(o[x(2507)][x(1089)]) : o instanceof Ht ? [void 0] : o instanceof zt ? [null] : o instanceof we ? [void 0, ...ge(o[x(1618)]())] : o instanceof Me ? [null, ...ge(o.unwrap())] : o instanceof Os ? ge(o.unwrap()) : o instanceof Ex ? ge(o[x(1618)]()) : o instanceof Ix ? ge(o[x(2507)][x(1089)]) : [];
};
class tr extends C0 {
  [r(443)](x) {
    const t = r, { ctx: s } = this._processInputParams(x);
    if (s[t(2181)] !== r0[t(1694)]) return Y(s, { code: K[t(2900)], expected: r0[t(1694)], received: s[t(2181)] }), h0;
    const e = this[t(2246)], a = s.data[e], n = this[t(1941)][t(1502)](a);
    return n ? s[t(1982)][t(2247)] ? n[t(2260)]({ data: s[t(2171)], path: s[t(2920)], parent: s }) : n[t(609)]({ data: s[t(2171)], path: s.path, parent: s }) : (Y(s, { code: K.invalid_union_discriminator, options: Array[t(1082)](this[t(1941)][t(2023)]()), path: [e] }), h0);
  }
  get [r(2246)]() {
    const x = r;
    return this[x(2507)][x(2246)];
  }
  get [r(2747)]() {
    const x = r;
    return this[x(2507)][x(2747)];
  }
  get [r(1941)]() {
    return this[r(2507)].optionsMap;
  }
  static [r(800)](x, t, s) {
    const e = r, a = /* @__PURE__ */ new Map();
    for (const n of t) {
      const i = ge(n.shape[x]);
      if (!i[e(1726)]) throw new Error("A discriminator value for key `" + x + e(1088));
      for (const c of i) {
        if (a[e(731)](c)) throw new Error(e(1264) + String(x) + e(1585) + String(c));
        a[e(1019)](c, n);
      }
    }
    return new tr({ typeName: p0[e(1433)], discriminator: x, options: t, optionsMap: a, ...w0(s) });
  }
}
function Wt(o, x) {
  const t = r, s = Ie(o), e = Ie(x);
  if (o === x) return { valid: !0, data: o };
  if (s === r0[t(1694)] && e === r0[t(1694)]) {
    const a = F0.objectKeys(x), n = F0[t(2252)](o)[t(2783)]((c) => a[t(1602)](c) !== -1), i = { ...o, ...x };
    for (const c of n) {
      const u = Wt(o[c], x[c]);
      if (!u[t(1056)]) return { valid: !1 };
      i[c] = u[t(2171)];
    }
    return { valid: !0, data: i };
  } else if (s === r0[t(2241)] && e === r0.array) {
    if (o[t(1726)] !== x[t(1726)]) return { valid: !1 };
    const a = [];
    for (let n = 0; n < o.length; n++) {
      const i = o[n], c = x[n], u = Wt(i, c);
      if (!u[t(1056)]) return { valid: !1 };
      a[t(1072)](u[t(2171)]);
    }
    return { valid: !0, data: a };
  } else return s === r0[t(1637)] && e === r0[t(1637)] && +o == +x ? { valid: !0, data: o } : { valid: !1 };
}
class vx extends C0 {
  [r(443)](x) {
    const t = r, { status: s, ctx: e } = this._processInputParams(x), a = (n, i) => {
      const c = B;
      if (Ir(n) || Ir(i)) return h0;
      const u = Wt(n[c(1163)], i[c(1163)]);
      return u[c(1056)] ? ((Er(n) || Er(i)) && s[c(774)](), { status: s[c(1163)], value: u[c(2171)] }) : (Y(e, { code: K[c(769)] }), h0);
    };
    return e[t(1982)][t(2247)] ? Promise[t(1348)]([this[t(2507)][t(1831)][t(2260)]({ data: e[t(2171)], path: e[t(2920)], parent: e }), this[t(2507)].right[t(2260)]({ data: e[t(2171)], path: e.path, parent: e })])[t(1227)](([n, i]) => a(n, i)) : a(this[t(2507)][t(1831)][t(609)]({ data: e[t(2171)], path: e[t(2920)], parent: e }), this[t(2507)][t(1787)]._parseSync({ data: e[t(2171)], path: e[t(2920)], parent: e }));
  }
}
vx[r(800)] = (o, x, t) => {
  const s = r;
  return new vx({ left: o, right: x, typeName: p0[s(2274)], ...w0(t) });
};
class De extends C0 {
  [r(443)](x) {
    const t = r, { status: s, ctx: e } = this[t(1243)](x);
    if (e.parsedType !== r0[t(2241)]) return Y(e, { code: K[t(2900)], expected: r0[t(2241)], received: e[t(2181)] }), h0;
    if (e[t(2171)][t(1726)] < this[t(2507)][t(2480)][t(1726)]) return Y(e, { code: K.too_small, minimum: this[t(2507)][t(2480)][t(1726)], inclusive: !0, exact: !1, type: t(2241) }), h0;
    !this[t(2507)][t(2780)] && e.data[t(1726)] > this[t(2507)][t(2480)][t(1726)] && (Y(e, { code: K[t(2010)], maximum: this[t(2507)][t(2480)][t(1726)], inclusive: !0, exact: !1, type: t(2241) }), s[t(774)]());
    const n = [...e[t(2171)]][t(2086)]((i, c) => {
      const u = t, d = this[u(2507)][u(2480)][c] || this[u(2507)][u(2780)];
      return d ? d._parse(new he(e, i, e.path, c)) : null;
    }).filter((i) => !!i);
    return e[t(1982)].async ? Promise[t(1348)](n).then((i) => ee[t(2672)](s, i)) : ee.mergeArray(s, n);
  }
  get items() {
    return this[r(2507)].items;
  }
  rest(x) {
    return new De({ ...this._def, rest: x });
  }
}
De.create = (o, x) => {
  const t = r;
  if (!Array[t(344)](o)) throw new Error(t(1688));
  return new De({ items: o, typeName: p0.ZodTuple, rest: null, ...w0(x) });
};
class wx extends C0 {
  get [r(496)]() {
    const x = r;
    return this[x(2507)][x(2399)];
  }
  get [r(532)]() {
    return this[r(2507)].valueType;
  }
  [r(443)](x) {
    const t = r, { status: s, ctx: e } = this[t(1243)](x);
    if (e[t(2181)] !== r0[t(1694)]) return Y(e, { code: K[t(2900)], expected: r0[t(1694)], received: e[t(2181)] }), h0;
    const a = [], n = this._def[t(2399)], i = this._def.valueType;
    for (const c in e[t(2171)])
      a[t(1072)]({ key: n._parse(new he(e, c, e[t(2920)], c)), value: i[t(443)](new he(e, e[t(2171)][c], e[t(2920)], c)), alwaysSet: c in e[t(2171)] });
    return e.common[t(2247)] ? ee[t(1698)](s, a) : ee[t(1035)](s, a);
  }
  get [r(1203)]() {
    const x = r;
    return this[x(2507)][x(1708)];
  }
  static [r(800)](x, t, s) {
    const e = r;
    return t instanceof C0 ? new wx({ keyType: x, valueType: t, typeName: p0[e(2469)], ...w0(s) }) : new wx({ keyType: ve.create(), valueType: x, typeName: p0.ZodRecord, ...w0(t) });
  }
}
class Fr extends C0 {
  get [r(496)]() {
    const x = r;
    return this[x(2507)][x(2399)];
  }
  get valueSchema() {
    return this[r(2507)].valueType;
  }
  [r(443)](x) {
    const t = r, { status: s, ctx: e } = this._processInputParams(x);
    if (e.parsedType !== r0[t(2086)]) return Y(e, { code: K[t(2900)], expected: r0.map, received: e.parsedType }), h0;
    const a = this._def[t(2399)], n = this[t(2507)][t(1708)], i = [...e.data[t(2735)]()].map(([c, u], d) => {
      const l = t;
      return { key: a[l(443)](new he(e, c, e.path, [d, l(2444)])), value: n[l(443)](new he(e, u, e[l(2920)], [d, l(1163)])) };
    });
    if (e[t(1982)][t(2247)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise.resolve()[t(1227)](async () => {
        const u = t;
        for (const d of i) {
          const l = await d.key, f = await d[u(1163)];
          if (l.status === u(2377) || f[u(1254)] === u(2377)) return h0;
          (l[u(1254)] === u(774) || f[u(1254)] === u(774)) && s.dirty(), c[u(1019)](l[u(1163)], f[u(1163)]);
        }
        return { status: s[u(1163)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of i) {
        const d = u.key, l = u.value;
        if (d[t(1254)] === t(2377) || l[t(1254)] === t(2377)) return h0;
        (d[t(1254)] === t(774) || l[t(1254)] === t(774)) && s[t(774)](), c[t(1019)](d[t(1163)], l[t(1163)]);
      }
      return { status: s[t(1163)], value: c };
    }
  }
}
Fr[r(800)] = (o, x, t) => {
  const s = r;
  return new Fr({ valueType: x, keyType: o, typeName: p0[s(950)], ...w0(t) });
};
class ax extends C0 {
  [r(443)](x) {
    const t = r, { status: s, ctx: e } = this[t(1243)](x);
    if (e[t(2181)] !== r0.set) return Y(e, { code: K[t(2900)], expected: r0[t(1019)], received: e[t(2181)] }), h0;
    const a = this._def;
    a[t(2721)] !== null && e[t(2171)][t(2732)] < a.minSize[t(1163)] && (Y(e, { code: K.too_small, minimum: a.minSize.value, type: t(1019), inclusive: !0, exact: !1, message: a[t(2721)][t(2462)] }), s[t(774)]()), a.maxSize !== null && e[t(2171)].size > a[t(1953)].value && (Y(e, { code: K.too_big, maximum: a[t(1953)][t(1163)], type: t(1019), inclusive: !0, exact: !1, message: a[t(1953)][t(2462)] }), s[t(774)]());
    const n = this[t(2507)][t(1708)];
    function i(u) {
      const d = t, l = /* @__PURE__ */ new Set();
      for (const f of u) {
        if (f[d(1254)] === d(2377)) return h0;
        f[d(1254)] === d(774) && s[d(774)](), l.add(f[d(1163)]);
      }
      return { status: s.value, value: l };
    }
    const c = [...e[t(2171)][t(2282)]()][t(2086)]((u, d) => n._parse(new he(e, u, e.path, d)));
    return e[t(1982)][t(2247)] ? Promise[t(1348)](c)[t(1227)]((u) => i(u)) : i(c);
  }
  min(x, t) {
    const s = r;
    return new ax({ ...this._def, minSize: { value: x, message: a0[s(1860)](t) } });
  }
  [r(2650)](x, t) {
    const s = r;
    return new ax({ ...this[s(2507)], maxSize: { value: x, message: a0[s(1860)](t) } });
  }
  size(x, t) {
    const s = r;
    return this[s(2742)](x, t)[s(2650)](x, t);
  }
  [r(1394)](x) {
    return this[r(2742)](1, x);
  }
}
ax[r(800)] = (o, x) => {
  const t = r;
  return new ax({ valueType: o, minSize: null, maxSize: null, typeName: p0[t(903)], ...w0(x) });
};
class Zt extends C0 {
  get [r(1898)]() {
    const x = r;
    return this._def[x(471)]();
  }
  [r(443)](x) {
    const t = r, { ctx: s } = this._processInputParams(x);
    return this._def[t(471)]()[t(443)]({ data: s.data, path: s[t(2920)], parent: s });
  }
}
Zt[r(800)] = (o, x) => {
  const t = r;
  return new Zt({ getter: o, typeName: p0[t(2376)], ...w0(x) });
};
class Sx extends C0 {
  _parse(x) {
    const t = r;
    if (x[t(2171)] !== this._def.value) {
      const s = this._getOrReturnCtx(x);
      return Y(s, { received: s[t(2171)], code: K.invalid_literal, expected: this._def[t(1163)] }), h0;
    }
    return { status: "valid", value: x[t(2171)] };
  }
  get [r(1163)]() {
    const x = r;
    return this[x(2507)][x(1163)];
  }
}
Sx[r(800)] = (o, x) => {
  const t = r;
  return new Sx({ value: o, typeName: p0[t(1326)], ...w0(x) });
};
function As(o, x) {
  const t = r;
  return new je({ values: o, typeName: p0[t(1217)], ...w0(x) });
}
class je extends C0 {
  [r(443)](x) {
    const t = r;
    if (typeof x[t(2171)] !== t(360)) {
      const s = this[t(646)](x), e = this[t(2507)][t(2282)];
      return Y(s, { expected: F0[t(2558)](e), received: s[t(2181)], code: K[t(2900)] }), h0;
    }
    if (!this._cache && (this._cache = new Set(this[t(2507)][t(2282)])), !this[t(629)][t(731)](x[t(2171)])) {
      const s = this._getOrReturnCtx(x), e = this._def[t(2282)];
      return Y(s, { received: s[t(2171)], code: K[t(2547)], options: e }), h0;
    }
    return re(x[t(2171)]);
  }
  get options() {
    const x = r;
    return this[x(2507)][x(2282)];
  }
  get [r(2115)]() {
    const x = r, t = {};
    for (const s of this[x(2507)].values)
      t[s] = s;
    return t;
  }
  get [r(1079)]() {
    const x = r, t = {};
    for (const s of this[x(2507)][x(2282)])
      t[s] = s;
    return t;
  }
  get [r(1333)]() {
    const x = r, t = {};
    for (const s of this[x(2507)][x(2282)])
      t[s] = s;
    return t;
  }
  extract(x, t = this[r(2507)]) {
    const s = r;
    return je.create(x, { ...this[s(2507)], ...t });
  }
  [r(842)](x, t = this[r(2507)]) {
    const s = r;
    return je.create(this[s(2747)].filter((e) => !x[s(1127)](e)), { ...this._def, ...t });
  }
}
je.create = As;
class Bt extends C0 {
  _parse(x) {
    const t = r, s = F0.getValidEnumValues(this._def[t(2282)]), e = this[t(646)](x);
    if (e[t(2181)] !== r0[t(360)] && e[t(2181)] !== r0[t(1455)]) {
      const a = F0.objectValues(s);
      return Y(e, { expected: F0.joinValues(a), received: e[t(2181)], code: K[t(2900)] }), h0;
    }
    if (!this[t(629)] && (this[t(629)] = new Set(F0[t(1278)](this[t(2507)][t(2282)]))), !this[t(629)][t(731)](x.data)) {
      const a = F0[t(2263)](s);
      return Y(e, { received: e[t(2171)], code: K[t(2547)], options: a }), h0;
    }
    return re(x[t(2171)]);
  }
  get [r(2115)]() {
    return this[r(2507)].values;
  }
}
Bt.create = (o, x) => {
  const t = r;
  return new Bt({ values: o, typeName: p0[t(1141)], ...w0(x) });
};
class kx extends C0 {
  [r(1618)]() {
    return this[r(2507)].type;
  }
  [r(443)](x) {
    const t = r, { ctx: s } = this[t(1243)](x);
    if (s.parsedType !== r0[t(775)] && s[t(1982)][t(2247)] === !1) return Y(s, { code: K[t(2900)], expected: r0[t(775)], received: s[t(2181)] }), h0;
    const e = s[t(2181)] === r0[t(775)] ? s[t(2171)] : Promise[t(422)](s[t(2171)]);
    return re(e[t(1227)]((a) => {
      const n = t;
      return this._def.type[n(484)](a, { path: s[n(2920)], errorMap: s[n(1982)][n(1704)] });
    }));
  }
}
kx[r(800)] = (o, x) => {
  const t = r;
  return new kx({ type: o, typeName: p0[t(1947)], ...w0(x) });
};
class Te extends C0 {
  [r(1089)]() {
    const x = r;
    return this[x(2507)][x(1898)];
  }
  [r(353)]() {
    const x = r;
    return this[x(2507)][x(1898)][x(2507)].typeName === p0.ZodEffects ? this._def[x(1898)][x(353)]() : this[x(2507)].schema;
  }
  [r(443)](x) {
    const t = r, { status: s, ctx: e } = this[t(1243)](x), a = this[t(2507)].effect || null, n = { addIssue: (i) => {
      const c = t;
      Y(e, i), i[c(2817)] ? s.abort() : s[c(774)]();
    }, get path() {
      return e[t(2920)];
    } };
    if (n.addIssue = n[t(1938)][t(1826)](n), a.type === t(1949)) {
      const i = a[t(587)](e[t(2171)], n);
      if (e.common.async) return Promise[t(422)](i)[t(1227)](async (c) => {
        const u = t;
        if (s[u(1163)] === "aborted") return h0;
        const d = await this[u(2507)].schema[u(2260)]({ data: c, path: e.path, parent: e });
        return d[u(1254)] === u(2377) ? h0 : d.status === u(774) || s[u(1163)] === u(774) ? Qe(d[u(1163)]) : d;
      });
      {
        if (s[t(1163)] === t(2377)) return h0;
        const c = this[t(2507)][t(1898)][t(609)]({ data: i, path: e[t(2920)], parent: e });
        return c[t(1254)] === "aborted" ? h0 : c[t(1254)] === t(774) ? Qe(c.value) : s[t(1163)] === "dirty" ? Qe(c[t(1163)]) : c;
      }
    }
    if (a[t(1655)] === "refinement") {
      const i = (c) => {
        const u = t, d = a[u(2306)](c, n);
        if (e[u(1982)].async) return Promise[u(422)](d);
        if (d instanceof Promise) throw new Error(u(1511));
        return c;
      };
      if (e[t(1982)][t(2247)] === !1) {
        const c = this[t(2507)][t(1898)]._parseSync({ data: e[t(2171)], path: e[t(2920)], parent: e });
        return c.status === t(2377) ? h0 : (c[t(1254)] === "dirty" && s[t(774)](), i(c[t(1163)]), { status: s[t(1163)], value: c[t(1163)] });
      } else return this[t(2507)][t(1898)][t(2260)]({ data: e[t(2171)], path: e.path, parent: e })[t(1227)]((c) => {
        const u = t;
        return c.status === u(2377) ? h0 : (c.status === "dirty" && s.dirty(), i(c[u(1163)]).then(() => {
          const d = u;
          return { status: s[d(1163)], value: c[d(1163)] };
        }));
      });
    }
    if (a[t(1655)] === t(587))
      if (e.common.async === !1) {
        const i = this[t(2507)][t(1898)][t(609)]({ data: e[t(2171)], path: e[t(2920)], parent: e });
        if (!We(i)) return h0;
        const c = a[t(587)](i.value, n);
        if (c instanceof Promise) throw new Error(t(522));
        return { status: s[t(1163)], value: c };
      } else return this._def.schema[t(2260)]({ data: e[t(2171)], path: e[t(2920)], parent: e })[t(1227)]((i) => {
        const c = t;
        return We(i) ? Promise[c(422)](a[c(587)](i[c(1163)], n))[c(1227)]((u) => ({ status: s.value, value: u })) : h0;
      });
    F0[t(951)](a);
  }
}
Te[r(800)] = (o, x, t) => new Te({ schema: o, typeName: p0.ZodEffects, effect: x, ...w0(t) }), Te.createWithPreprocess = (o, x, t) => {
  const s = r;
  return new Te({ schema: x, effect: { type: s(1949), transform: o }, typeName: p0[s(576)], ...w0(t) });
};
class we extends C0 {
  [r(443)](x) {
    const t = r;
    return this._getType(x) === r0[t(662)] ? re(void 0) : this._def.innerType._parse(x);
  }
  [r(1618)]() {
    const x = r;
    return this[x(2507)][x(1089)];
  }
}
we[r(800)] = (o, x) => {
  const t = r;
  return new we({ innerType: o, typeName: p0[t(1599)], ...w0(x) });
};
class Me extends C0 {
  _parse(x) {
    const t = r;
    return this[t(401)](x) === r0.null ? re(null) : this[t(2507)][t(1089)]._parse(x);
  }
  [r(1618)]() {
    const x = r;
    return this._def[x(1089)];
  }
}
Me[r(800)] = (o, x) => {
  const t = r;
  return new Me({ innerType: o, typeName: p0[t(1460)], ...w0(x) });
};
class Px extends C0 {
  _parse(x) {
    const t = r, { ctx: s } = this._processInputParams(x);
    let e = s[t(2171)];
    return s[t(2181)] === r0[t(662)] && (e = this[t(2507)][t(335)]()), this[t(2507)].innerType[t(443)]({ data: e, path: s[t(2920)], parent: s });
  }
  [r(905)]() {
    const x = r;
    return this[x(2507)][x(1089)];
  }
}
Px.create = (o, x) => {
  const t = r;
  return new Px({ innerType: o, typeName: p0[t(988)], defaultValue: typeof x.default == "function" ? x[t(1200)] : () => x[t(1200)], ...w0(x) });
};
class Ix extends C0 {
  [r(443)](x) {
    const t = r, { ctx: s } = this[t(1243)](x), e = { ...s, common: { ...s[t(1982)], issues: [] } }, a = this[t(2507)].innerType[t(443)]({ data: e.data, path: e[t(2920)], parent: { ...e } });
    return bx(a) ? a.then((n) => {
      const i = t;
      return { status: i(1056), value: n.status === i(1056) ? n.value : this[i(2507)][i(1651)]({ get error() {
        const c = i;
        return new Se(e[c(1982)][c(2360)]);
      }, input: e[i(2171)] }) };
    }) : { status: t(1056), value: a.status === "valid" ? a[t(1163)] : this[t(2507)][t(1651)]({ get error() {
      const n = t;
      return new Se(e[n(1982)][n(2360)]);
    }, input: e[t(2171)] }) };
  }
  [r(745)]() {
    const x = r;
    return this._def[x(1089)];
  }
}
Ix[r(800)] = (o, x) => {
  const t = r;
  return new Ix({ innerType: o, typeName: p0[t(2278)], catchValue: typeof x[t(1307)] === t(975) ? x.catch : () => x[t(1307)], ...w0(x) });
};
class Nr extends C0 {
  [r(443)](x) {
    const t = r;
    if (this[t(401)](x) !== r0[t(2238)]) {
      const e = this[t(646)](x);
      return Y(e, { code: K[t(2900)], expected: r0.nan, received: e[t(2181)] }), h0;
    }
    return { status: t(1056), value: x.data };
  }
}
Nr[r(800)] = (o) => new Nr({ typeName: p0.ZodNaN, ...w0(o) });
class Os extends C0 {
  _parse(x) {
    const t = r, { ctx: s } = this[t(1243)](x), e = s[t(2171)];
    return this[t(2507)][t(1655)][t(443)]({ data: e, path: s.path, parent: s });
  }
  [r(1618)]() {
    const x = r;
    return this._def[x(1655)];
  }
}
class rr extends C0 {
  [r(443)](x) {
    const t = r, { status: s, ctx: e } = this._processInputParams(x);
    if (e.common[t(2247)])
      return (async () => {
        const n = t, i = await this._def.in[n(2260)]({ data: e[n(2171)], path: e[n(2920)], parent: e });
        return i.status === n(2377) ? h0 : i.status === n(774) ? (s[n(774)](), Qe(i[n(1163)])) : this[n(2507)].out[n(2260)]({ data: i[n(1163)], path: e[n(2920)], parent: e });
      })();
    {
      const a = this[t(2507)].in._parseSync({ data: e[t(2171)], path: e[t(2920)], parent: e });
      return a[t(1254)] === t(2377) ? h0 : a[t(1254)] === t(774) ? (s[t(774)](), { status: t(774), value: a[t(1163)] }) : this[t(2507)][t(367)]._parseSync({ data: a[t(1163)], path: e.path, parent: e });
    }
  }
  static create(x, t) {
    return new rr({ in: x, out: t, typeName: p0.ZodPipeline });
  }
}
class Ex extends C0 {
  [r(443)](x) {
    const t = r, s = this[t(2507)][t(1089)][t(443)](x), e = (a) => {
      const n = t;
      return We(a) && (a[n(1163)] = Object[n(2802)](a.value)), a;
    };
    return bx(s) ? s[t(1227)]((a) => e(a)) : e(s);
  }
  unwrap() {
    const x = r;
    return this[x(2507)][x(1089)];
  }
}
Ex[r(800)] = (o, x) => {
  const t = r;
  return new Ex({ innerType: o, typeName: p0[t(1028)], ...w0(x) });
};
function qr(o, x) {
  const t = r, s = typeof o === t(975) ? o(x) : typeof o === t(360) ? { message: o } : o;
  return typeof s == "string" ? { message: s } : s;
}
function so(o, x = {}, t) {
  const s = r;
  return o ? rx.create()[s(1874)]((e, a) => {
    const n = s, i = o(e);
    if (i instanceof Promise) return i.then((c) => {
      const u = B;
      if (!c) {
        const d = qr(x, e), l = d[u(2817)] ?? t ?? !0;
        a[u(1938)]({ code: "custom", ...d, fatal: l });
      }
    });
    if (!i) {
      const c = qr(x, e), u = c[n(2817)] ?? t ?? !0;
      a.addIssue({ code: "custom", ...c, fatal: u });
    }
  }) : rx[s(800)]();
}
var p0;
(function(o) {
  const x = r;
  o[x(1942)] = x(1942), o.ZodNumber = x(1386), o.ZodNaN = x(2344), o[x(2056)] = x(2056), o[x(1267)] = x(1267), o.ZodDate = x(2609), o.ZodSymbol = x(796), o[x(2431)] = x(2431), o[x(2020)] = x(2020), o[x(1570)] = x(1570), o.ZodUnknown = "ZodUnknown", o.ZodNever = x(892), o[x(2871)] = x(2871), o[x(497)] = x(497), o[x(2696)] = x(2696), o.ZodUnion = "ZodUnion", o[x(1433)] = x(1433), o[x(2274)] = x(2274), o[x(1435)] = x(1435), o[x(2469)] = "ZodRecord", o[x(950)] = "ZodMap", o[x(903)] = "ZodSet", o[x(1405)] = x(1405), o.ZodLazy = x(2376), o[x(1326)] = x(1326), o.ZodEnum = x(1217), o[x(576)] = x(576), o.ZodNativeEnum = x(1141), o[x(1599)] = x(1599), o[x(1460)] = x(1460), o[x(988)] = x(988), o[x(2278)] = "ZodCatch", o[x(1947)] = x(1947), o[x(1697)] = x(1697), o[x(2839)] = x(2839), o[x(1028)] = x(1028);
})(p0 || (p0 = {}));
function B(o, x) {
  const t = qx();
  return B = function(s, e) {
    return s = s - 331, t[s];
  }, B(o, x);
}
const Hx = (o, x = { message: r(2255) + o[r(707)] }) => so((t) => t instanceof o, x), y = ve[r(800)], _ = Ze[r(800)], e0 = $t[r(800)], T0 = rx.create, Le = Ut[r(800)];
Ee[r(800)];
const zx = Vt.create, v0 = fe[r(800)], k = _0[r(800)], B0 = yx[r(800)], Ds = tr[r(800)];
vx.create, De[r(800)];
const z0 = wx[r(800)], x0 = Sx.create, E0 = je.create;
kx.create;
const Z = we.create;
Me[r(800)];
var Ya;
class no {
  constructor(x, t) {
    m0(this, "graphInstance");
    m0(this, Ya);
    const s = r;
    this[s(2623)] = x, this[s(1123)] = t;
  }
  get [(Ya = r(1123), r(1219))]() {
    const x = r, t = this[x(2623)].getNodeStore(this[x(1123)]);
    if (!t) throw new Error(x(2712) + this[x(1123)]);
    return t;
  }
  get [r(2082)]() {
    const x = r, t = this[x(2623)][x(2703)]().getNode(this[x(1123)]);
    if (!t) throw new Error(x(1696) + this[x(1123)]);
    return new Proxy({}, { get: (e, a) => {
      const n = x;
      if (typeof a !== n(360)) return;
      const i = t.actions[a], c = a[n(2508)](n(755));
      if (!i && !c) throw new Error("Action " + a + n(1053) + this[n(1123)]);
      return async (u, d) => {
        const l = n, f = this[l(536)]();
        if (!f) throw new Error("No connection available for node " + this[l(1123)]);
        const { transport: b, path: h } = f, m = this[l(2623)][l(2185)]();
        if (!(i != null && i.stream)) {
          const S = T0();
          let P;
          if (h[l(1726)] === 2) P = await b.request({ method: l(663), params: { action: a, data: u, sourceNodeId: m } }, S);
          else try {
            P = await b[l(1332)]({ method: l(663), params: { action: "__proxy_forward", data: { targetNodeId: this[l(1123)], targetAction: a, targetData: u, forwardPath: h[l(483)](1) }, sourceNodeId: m } }, S);
          } catch (F) {
            throw console.error(l(2193) + a + ":", F), console[l(795)]({ targetNodeId: this[l(1123)], targetAction: a, targetData: u, forwardPath: h.slice(1) }), F;
          }
          return P;
        }
        let v;
        return h[l(1726)] === 2 ? v = b[l(930)]({ action: a, data: u, sourceNodeId: m }, i[l(2767)], d) : v = b[l(930)]({ action: l(2546), data: { targetNodeId: this[l(1123)], targetAction: a, targetData: u, forwardPath: h.slice(1) }, sourceNodeId: m }, i[l(2767)], d), v;
      };
    } });
  }
  [r(536)]() {
    const x = r;
    return this[x(2623)][x(851)](this.nodeId);
  }
}
var es, xs;
class js {
  constructor(x) {
    m0(this, "graphInstance");
    m0(this, xs);
    m0(this, es);
    const t = r;
    this[t(2623)] = x, this[t(1075)] = x[t(1075)], this.broadcastManager = x.broadcastManager;
  }
  [(xs = r(1075), es = r(718), r(389))]({ store: x, storeName: t, onStateUpdate: s, requestInitialState: e }) {
    const a = r;
    this.broadcastManager[a(454)](a(1346) + t, (n) => {
      const i = a;
      try {
        n[i(2586)] !== this.graphInstance[i(2185)]() && s(n[i(2391)]);
      } catch (c) {
        console[i(795)]("[GraphStoreSynchronizer] Error processing store update for " + t + ":", c);
      }
    });
  }
  [r(601)]({ store: x, storeName: t, sendStateUpdate: s, onInitialStateRequested: e }) {
    const a = r, n = this[a(2623)][a(2185)](), i = async (d, l = !1) => {
      const f = a;
      if (this[f(2526)]()) try {
        await this.broadcastManager[f(2562)](f(1346) + t, { storeName: t, sourceNodeId: n, stateUpdate: d, isInitialState: l });
      } catch (h) {
        console[f(795)]("[GraphStoreSynchronizer] Error broadcasting state update for " + t + ":", h);
      }
    }, c = x[a(715)]((d) => {
      i(d, !1);
    });
    e(() => {
      i(x[a(947)](), !0);
    });
    const u = a(1901) + t;
    return this.actionManager[a(1323)](u, async () => {
      const d = a, l = x[d(947)]();
      return await i(l, !0), { success: !0 };
    }), this[a(718)][a(454)]("__connection_established", async (d) => {
      const l = a;
      try {
        (d[l(760)] === n || d[l(2894)] === n) && await i(x[l(947)](), !0);
      } catch {
      }
    }), () => {
      var l;
      const d = a;
      c(), (l = this[d(1075)][d(2743)]) == null || l.delete(u);
    };
  }
  [r(2526)]() {
    var t;
    const x = r;
    try {
      const s = this[x(2623)][x(677)], e = s && s.getConnectionCount() > 0, a = ((t = this.broadcastManager[x(1223)]) == null ? void 0 : t.size) > 0;
      return e || a;
    } catch {
      return !!this[x(718)];
    }
  }
  async [r(2175)](x, t) {
    const s = r, e = this[s(2623)][s(2185)]();
    if (this[s(2526)]()) try {
      await this.broadcastManager[s(2562)]("store:update:" + t, { storeName: t, sourceNodeId: e, stateUpdate: x[s(947)](), isInitialState: !0 });
    } catch {
    }
  }
}
function oo({ graphInstance: o, store: x, name: t }) {
  const s = r, e = new js(o), a = (i) => {
    const c = B, u = x[c(947)](), d = { ...u, ...i };
    x[c(924)](d);
  }, n = async () => {
    const i = B, c = i(1901) + t;
    try {
      const u = o[i(1920)](t);
      u && u[i(2082)] && u[i(2082)][c] && await u[i(2082)][c]();
    } catch (u) {
      console.warn(i(2542) + t + ":", u);
    }
  };
  e[s(389)]({ store: x, storeName: t, onStateUpdate: a, requestInitialState: n });
}
function io({ graphInstance: o, store: x, name: t }) {
  const s = r, e = new js(o), a = async (i) => {
  }, n = (i) => {
  };
  return e[s(601)]({ store: x, storeName: t, sendStateUpdate: a, onInitialStateRequested: n });
}
var ts, rs;
class co {
  constructor(x) {
    m0(this, rs, /* @__PURE__ */ new Map());
    m0(this, "transports", /* @__PURE__ */ new Map());
    m0(this, ts, /* @__PURE__ */ new Set());
    m0(this, "currentNodeId");
    const t = r;
    this[t(1479)] = x;
  }
  [(rs = r(1197), ts = r(685), r(2449))](x) {
    return (t) => {
      const s = B;
      if (t && t[s(1516)] === this[s(1479)]) return;
      const e = this[s(1197)][s(1502)](x);
      if (e) {
        const { __origin: a, forwarded: n, ...i } = t || {};
        for (const c of e)
          try {
            c(i);
          } catch (u) {
            console[s(795)](s(637) + x + ":", u);
          }
      }
      !t[s(2394)] && this.forwardBroadcast(x, t);
    };
  }
  async [r(2124)](x, t) {
    const s = r;
    try {
      const e = { ...t, forwarded: !0 }, a = [...Array[s(1082)](this.transports[s(2282)]()), ...Array[s(1082)](this[s(685)])], n = a.map((i) => {
        const c = s;
        return i[c(2915)]({ method: c(362), params: { messageType: x, message: e } })[c(1307)]((u) => {
          const d = c;
          console[d(795)](d(1828) + x + ":", u);
        });
      });
      await Promise[s(1348)](n);
    } catch (e) {
      console[s(795)](s(871), e);
    }
  }
  [r(454)](x, t) {
    const s = r;
    !this[s(1197)][s(731)](x) && this.broadcastHandlers.set(x, /* @__PURE__ */ new Set()), this.broadcastHandlers[s(1502)](x).add(t);
  }
  [r(1661)](x) {
    this.setupGeneralBroadcastHandler(x);
  }
  setupGeneralBroadcastHandler(x) {
    const t = r, s = k({ method: x0(t(362)), params: k({ messageType: y(), message: T0() }) });
    x.setNotificationHandler(s, async (e) => {
      const a = t, n = e.params.messageType;
      this[a(2449)](n)(e[a(1383)][a(2462)]);
    });
  }
  addMiddleware(x, t) {
    const s = r;
    this.transports.set(x, t), this[s(1661)](t);
  }
  [r(1844)](x) {
    this[r(928)].delete(x);
  }
  async broadcast(x, t) {
    const s = r, e = [...Array[s(1082)](this[s(928)][s(2282)]()), ...Array[s(1082)](this[s(685)])], a = e.map((n) => {
      const i = s;
      return n.notification({ method: i(362), params: { messageType: x, message: t } });
    });
    await Promise[s(1348)](a);
  }
  [r(438)](x) {
    const t = r;
    this[t(685)][t(2341)](x), this[t(1661)](x);
  }
  [r(980)]() {
    const x = r;
    return Array[x(1082)](this[x(1197)][x(2023)]());
  }
  [r(2368)]() {
    const x = r;
    this.broadcastHandlers[x(2368)](), this[x(928)][x(2368)](), this[x(685)].clear();
  }
}
var as, ss, ns;
class uo {
  constructor(x, t, s) {
    m0(this, ns, /* @__PURE__ */ new Map());
    m0(this, "definition");
    m0(this, ss);
    m0(this, as);
    const e = r;
    this.definition = x, this[e(1479)] = t, this[e(2637)] = s;
  }
  implementAction(x, t) {
    const s = r, e = this[s(1623)][s(1920)](this.currentNodeId);
    if (!e) throw new Error("Node definition not found for " + this[s(1479)]);
    const a = e[s(2082)][x];
    if (!a) throw new Error(s(1517) + String(x) + s(1053) + this[s(1479)]);
    this[s(702)](x, t, a), this[s(2743)][s(1019)](x, t);
  }
  [(ns = r(2743), ss = r(1479), as = r(2637), r(702))](x, t, s) {
    s.stream;
  }
  [r(1323)](x, t) {
    const s = r;
    this[s(2743)][s(1019)](x, t);
  }
  mountTo(x) {
    const t = r;
    for (const [s, e] of this[t(2743)]) {
      const a = this[t(1623)][t(1920)](this[t(1479)]), n = a == null ? void 0 : a[t(2082)][s];
      if (s[t(2508)](t(755)) ? !1 : (n == null ? void 0 : n[t(636)]) === !0) {
        const u = k({ action: x0(s) });
        x[t(1208)](u, async function* (d, l, f) {
          const b = t, h = d[b(2171)] || d, m = e(h, l, f);
          if (m && typeof m == "object" && Symbol[b(1628)] in m) for await (const v of m)
            yield v === void 0 ? {} : v;
          else {
            const v = await m;
            yield v === void 0 ? {} : v;
          }
        });
      }
    }
    this.registerProxyForwardHandler(x), this[t(2411)](x);
  }
  [r(2560)](x) {
    const t = r, s = k({ action: x0(t(2546)) }), e = this;
    x[t(1208)](s, async function* (a, n, i) {
      const c = t, u = a[c(2171)] || a, { targetNodeId: d, targetAction: l, targetData: f, forwardPath: b } = u;
      if (!b || b[c(1726)] === 0) throw new Error(c(2730));
      const h = b[0], m = b[c(483)](1);
      if (m[c(1726)] === 0 && h === e[c(1479)]) {
        const v = e[c(2743)].get(l);
        if (!v) throw new Error(c(1517) + l + " not found on node " + e[c(1479)]);
        const S = v(f, n, i);
        if (S && typeof S === c(1694) && Symbol[c(1628)] in S) for await (const P of S)
          yield P === void 0 ? {} : P;
        else {
          const P = await S;
          yield P === void 0 ? {} : P;
        }
        return;
      }
      if (h === e.currentNodeId && m[c(1726)] > 0) {
        const v = m[0], S = e.getTransport(v);
        if (S) {
          const P = await S[c(930)]({ action: c(2546), data: { targetNodeId: d, targetAction: l, targetData: f, forwardPath: m } }, k({}), i);
          for await (const F of P)
            yield F === void 0 ? {} : F;
          return;
        }
        throw new Error("Cannot forward to node " + v + c(1806));
      }
      throw new Error(c(1805) + e[c(1479)] + c(1157) + b);
    });
  }
  getRegisteredActions() {
    const x = r;
    return Array[x(1082)](this[x(2743)][x(2023)]());
  }
  [r(614)](x) {
    const t = r;
    return this[t(2743)][t(731)](x);
  }
  getHandler(x) {
    const t = r;
    return this[t(2743)][t(1502)](x);
  }
  clear() {
    const x = r;
    this[x(2743)][x(2368)]();
  }
  registerDirectRequestHandler(x, t, s) {
  }
  registerDirectRequestHandlerGeneric(x) {
    const t = r, s = k({ method: x0(t(663)), params: k({ action: y(), data: T0()[t(773)]() }) }), e = this;
    x.setRequestHandler(s, async (a, n) => {
      const i = t, { action: c, data: u } = a[i(1383)];
      if (c === i(2546)) return await e[i(952)](u, n);
      const d = e.actionHandlers[i(1502)](c);
      if (!d) throw new Error("Action " + c + i(2921) + e.currentNodeId);
      const l = d(u, n), f = await l;
      return f === void 0 ? {} : f;
    });
  }
  async [r(952)](x, t) {
    const s = r, { targetNodeId: e, targetAction: a, targetData: n, forwardPath: i } = x;
    if (!i || i.length === 0) throw new Error("Invalid forward path for proxy action");
    const c = i[0], u = i[s(483)](1);
    if (u[s(1726)] === 0 && c === this.currentNodeId) {
      const d = this[s(2743)][s(1502)](a);
      if (!d) throw new Error("Action " + a + " not found on node " + this[s(1479)]);
      const l = d(n, t), f = await l;
      return f === void 0 ? {} : f;
    }
    if (c === this[s(1479)] && u[s(1726)] > 0) {
      const d = u[0], l = this[s(2637)](d);
      if (l) return await l[s(1332)]({ method: s(663), params: { action: s(2546), data: { targetNodeId: e, targetAction: a, targetData: n, forwardPath: u } } }, T0());
      throw new Error("Cannot forward to node " + d + " - no connection available");
    }
    throw new Error("Invalid proxy forwarding: current node " + this.currentNodeId + s(1157) + i);
  }
}
var os, is;
class lo {
  constructor(x, t) {
    m0(this, is);
    m0(this, os);
    m0(this, "connectedNodes", /* @__PURE__ */ new Set());
    this.definition = x, this.currentNodeId = t;
  }
  [(is = r(1623), os = r(1479), r(2224))](x) {
    this.connectedNodes.add(x);
  }
  [r(1705)](x) {
    const t = r;
    this[t(546)][t(2059)](x);
  }
  [r(2472)](x) {
    const t = r;
    return this[t(546)][t(731)](x);
  }
  [r(554)](x, t) {
    const s = r;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), a = [{ nodeId: x, path: [x] }];
    for (; a.length > 0; ) {
      const { nodeId: n, path: i } = a[s(1080)]();
      if (e[s(731)](n)) continue;
      e.add(n);
      const c = this.definition[s(2502)](n);
      for (const u of c) {
        if (u === t) return [...i, u];
        !e[s(731)](u) && a[s(1072)]({ nodeId: u, path: [...i, u] });
      }
    }
  }
  [r(387)]() {
    const x = r;
    return Array.from(this[x(546)]);
  }
  [r(434)]() {
    const x = r;
    return this[x(546)][x(2732)];
  }
  [r(1032)]() {
    const x = r, t = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), e = [this.currentNodeId];
    for (s[x(2341)](this.currentNodeId); e[x(1726)] > 0; ) {
      const a = e[x(1080)](), n = this[x(1623)][x(2502)](a);
      for (const i of n)
        !s[x(731)](i) && (s[x(2341)](i), (this[x(546)][x(731)](i) || this[x(945)](i, s)) && (t[x(2341)](i), e.push(i)));
    }
    return Array[x(1082)](t);
  }
  [r(945)](x, t) {
    const s = r, e = this.findPath(this[s(1479)], x);
    if (!e || e[s(1726)] <= 1) return !1;
    for (let a = 1; a < e.length - 1; a++)
      if (!this.connectedNodes[s(731)](e[a])) return !1;
    return !0;
  }
  [r(2368)]() {
    const x = r;
    this[x(546)][x(2368)]();
  }
}
var cs, us, ds, ls, fs, hs, ps;
class fo {
  constructor(x, t) {
    m0(this, ps);
    m0(this, "currentNodeId");
    m0(this, hs, /* @__PURE__ */ new Map());
    m0(this, fs, /* @__PURE__ */ new Map());
    m0(this, ls);
    m0(this, ds);
    m0(this, us);
    m0(this, cs, /* @__PURE__ */ new Map());
    const s = r;
    this[s(1623)] = x, this[s(1479)] = t, this[s(423)](), this.broadcastManager = new co(t), this[s(1075)] = new uo(x, t, (e) => this[s(2342)](e)), this[s(677)] = new lo(x, t), this[s(393)]();
  }
  [(ps = r(1623), hs = r(2228), fs = r(2266), ls = r(718), ds = r(1075), us = r(677), cs = r(1207), r(423))]() {
    const x = r;
    for (const t of this[x(1623)][x(2634)]()) {
      const s = this[x(1623)].getNode(t);
      if (s && s[x(1219)]) {
        const e = this[x(2570)](s.store), a = An(() => e);
        this.nodeStores[x(1019)](t, a);
      }
    }
  }
  [r(2570)](x) {
    const t = r;
    if (!x) return {};
    try {
      return x[t(1724)]({});
    } catch {
      return this[t(1645)](x);
    }
  }
  manuallyExtractDefaults(x) {
    const t = r;
    if (!x || !x.def) return {};
    if (x.def[t(1655)] === t(1200)) {
      const s = x[t(2221)][t(335)];
      return typeof s === t(975) ? s() : s;
    }
    if (x[t(2221)][t(1655)] === t(1694)) {
      const s = {};
      let e;
      try {
        e = x[t(2221)][t(1423)];
      } catch {
        return {};
      }
      if (e) for (const [a, n] of Object[t(2735)](e)) {
        const i = this[t(1009)](n);
        i !== void 0 && (s[a] = i);
      }
      return s;
    }
    return {};
  }
  [r(1009)](x) {
    const t = r;
    if (x)
      try {
        return x[t(1724)](void 0);
      } catch {
        return this.manuallyExtractDefaults(x);
      }
  }
  async [r(2511)](x, t) {
    const s = r;
    if (!this[s(1623)][s(2087)](this[s(1479)], x)) throw new Error("No edge defined from " + this[s(1479)] + s(2157) + x);
    if (this[s(1207)].has(x)) throw new Error("Already connected to node " + x);
    try {
      this[s(1207)][s(1019)](x, t), this[s(677)].markConnected(x), this[s(810)](x, t), await this[s(627)](x), await this.requestInitialStateForNode(x);
    } catch (e) {
      throw this[s(789)](x), e;
    }
  }
  [r(1057)](x) {
    this[r(789)](x);
  }
  async [r(627)](x) {
    const t = r;
    await new Promise((s) => setTimeout(s, 100));
    for (const [s, e] of this.nodeStores)
      if (s === this.currentNodeId) try {
        await this[t(718)].broadcast(t(1346) + s, { storeName: s, sourceNodeId: this[t(1479)], stateUpdate: e.getState(), isInitialState: !0 });
      } catch {
      }
    try {
      await this[t(718)].broadcast(t(2231), { fromNode: this[t(1479)], toNode: x });
    } catch {
    }
  }
  async [r(1142)](x) {
    const t = r;
    try {
      const s = this[t(677)][t(1032)]();
      for (const e of s)
        try {
          const a = t(1901) + e, n = this[t(1920)](e);
          if (n && n.actions && n[t(2082)][a]) {
            const i = n[t(2082)][a]({});
            await Promise[t(2304)]([i, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (a) {
          console.log(t(2542) + e + ":", a);
        }
    } catch (s) {
      console[t(429)](t(1766) + x + ":", s);
    }
  }
  [r(789)](x) {
    const t = r, s = this.nodeTransports[t(1502)](x);
    this[t(1207)][t(2059)](x), this[t(677)][t(1705)](x), this[t(718)][t(1844)](x), s && s[t(794)]();
  }
  [r(810)](x, t) {
    const s = r;
    if (!this.nodeStores[s(1502)](this[s(1479)])) throw new Error(s(1509) + this.currentNodeId);
    this[s(1075)].mountTo(t), this.broadcastManager[s(1456)](x, t);
  }
  [r(393)]() {
    const x = r;
    for (const [t, s] of this[x(2228)])
      t === this[x(1479)] ? io({ graphInstance: this, store: s, name: t }) : oo({ graphInstance: this, store: s, name: t });
  }
  [r(1920)](x) {
    const t = r;
    if (!this[t(2266)][t(731)](x)) {
      const s = new no(this, x);
      this[t(2266)][t(1019)](x, s);
    }
    return this.nodeProxies.get(x);
  }
  [r(2342)](x) {
    const t = r;
    return this.nodeTransports[t(1502)](x);
  }
  [r(851)](x) {
    const t = r, s = this[t(1207)][t(1502)](x);
    if (s) return { transport: s, path: [this[t(1479)], x] };
    const e = this[t(1742)](this[t(1479)], x);
    if (e && e[t(1726)] > 1) {
      const a = e[1], n = this.nodeTransports.get(a);
      if (n) return { transport: n, path: e };
    }
  }
  [r(2220)](x) {
    const t = r;
    return this[t(2228)][t(1502)](x);
  }
  get [r(1219)]() {
    const x = r, t = this[x(2228)].get(this[x(1479)]);
    if (!t) throw new Error(x(370) + this[x(1479)]);
    return t;
  }
  get [r(2082)]() {
    const x = r, t = this[x(1623)][x(1920)](this[x(1479)]);
    if (!t) throw new Error("Node definition not found for current node " + this.currentNodeId);
    return new Proxy({}, { get: (e, a) => {
      const n = x;
      if (typeof a !== n(360)) return;
      const i = t[n(2082)][a];
      if (!i) throw new Error(n(1517) + a + n(1296) + this[n(1479)]);
      return (c, u) => {
        const d = n, l = this[d(1075)][d(780)](a);
        if (!l) throw new Error(d(479) + a + " not implemented for node " + this[d(1479)]);
        const f = { nodeId: this[d(1479)] };
        if (i[d(636)] === !0) {
          const b = l(c, f, u);
          return b && typeof b === d(1694) && Symbol[d(1628)] in b ? async function* () {
            for await (const h of b)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await b;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          const b = d, h = l(c, f, u);
          if (h && typeof h === b(1694) && Symbol[b(1628)] in h) {
            const m = h[Symbol[b(1628)]](), v = await m.next();
            return v[b(1163)] === void 0 ? {} : v[b(1163)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [r(2703)]() {
    return this[r(1623)];
  }
  [r(2185)]() {
    return this[r(1479)];
  }
  [r(2208)](x) {
    return this[r(851)](x);
  }
  [r(1918)](x, t) {
    const s = r;
    this[s(1075)][s(1918)](x, t);
  }
  [r(459)]() {
    const x = r, t = Array[x(1082)](this[x(1207)].keys());
    for (const s of t)
      this[x(789)](s);
    this.broadcastManager[x(2368)](), this[x(1075)][x(2368)](), this[x(677)][x(2368)]();
  }
  [r(1742)](x, t) {
    const s = r;
    return this[s(677)][s(554)](x, t);
  }
  [r(554)](x, t) {
    return this[r(1742)](x, t);
  }
  async [r(2562)](x, t) {
    const s = r, e = { ...t, __origin: this.currentNodeId };
    return this.broadcastManager[s(2562)](x, e);
  }
  broadcastReceived(x, t) {
    const s = r;
    this[s(718)][s(454)](x, t);
  }
}
function ho(o) {
  const x = new Tn(o);
  return { joinAs(t) {
    const s = B;
    if (!x.getNode(t)) throw new Error(s(2515) + String(t) + s(676));
    return new fo(x, t);
  }, getDefinition() {
    return o;
  }, getNodeIds() {
    return x[B(2634)]();
  }, getNeighbors(t) {
    return x.getNeighbors(t);
  }, hasEdge(t, s) {
    return x[B(2087)](t, s);
  }, hasPath(t, s) {
    return x[B(964)](t, s);
  }, findPath(t, s) {
    return x.findPath(t, s);
  } };
}
const Tr = { INTERCEPTOR_ERROR: r(2138) };
var ms, bs;
class Ar extends (bs = Error, ms = r(382), bs) {
  constructor(t, s, e, a) {
    const n = r;
    super(e);
    m0(this, "type");
    m0(this, ms);
    m0(this, "originalError");
    this.name = n(2476), this[n(1655)] = t, this[n(382)] = s, this[n(1150)] = a;
  }
}
var gs, ys, vs, ws, Ss, ks, Ps, Is, Es;
class po {
  constructor(x, t = {}) {
    m0(this, Es);
    m0(this, Is, null);
    m0(this, Ps);
    m0(this, ks, /* @__PURE__ */ new Map());
    m0(this, Ss, /* @__PURE__ */ new Map());
    m0(this, "outgoingRequestInterceptors", /* @__PURE__ */ new Map());
    m0(this, ws, /* @__PURE__ */ new Map());
    m0(this, vs, []);
    m0(this, ys, []);
    m0(this, "errorHandlers", []);
    m0(this, gs, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    const s = r;
    this[s(664)] = x, this[s(2747)] = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async [(Es = r(664), Is = r(2150), Ps = r(2747), ks = r(2470), Ss = r(2575), ws = r(2e3), vs = r(1695), ys = r(2160), gs = r(527), r(2511))](x) {
    const t = r;
    this[t(2150)] = x, x[t(2143)] = (s) => {
      this.handleIncomingMessage(s);
    }, x[t(2054)] = () => {
      const s = t;
      this.closeHandlers[s(785)]((e) => e());
    }, x[t(375)] = (s) => {
      const e = t;
      this[e(2556)][e(785)]((a) => a(s));
    }, await this[t(664)][t(2511)](this);
  }
  async [r(1610)](x) {
    const t = r;
    this.log("debug", t(1402), x);
    try {
      if (this.isRequest(x) && await this[t(1187)](x) || this[t(1342)](x) && await this[t(2395)](x))
        return;
      this.messageHandlers[t(785)]((s) => s(x));
    } catch (s) {
      this[t(527)][t(1137)]++, this.log(t(795), "Error handling incoming message:", s), this.messageHandlers.forEach((e) => e(x));
    }
  }
  async [r(1187)](x) {
    const t = r, s = this[t(2470)][t(1502)](x[t(382)]);
    if (!s) return !1;
    try {
      this[t(527)][t(507)]++;
      const e = await s(x, {});
      return this[t(2150)] && "id" in x && await this[t(2150)][t(838)]({ jsonrpc: t(1416), id: x.id, result: e }), !0;
    } catch (e) {
      return this[t(527)][t(1137)]++, this[t(2150)] && "id" in x && await this[t(2150)][t(838)]({ jsonrpc: "2.0", id: x.id, error: { code: -32603, message: t(766) + JSON[t(2848)](x[t(1383)]) + " " + e[t(2462)] } }), !0;
    }
  }
  async [r(2395)](x) {
    const t = r, s = this[t(2575)].get(x[t(382)]);
    if (!s) return !1;
    try {
      return this[t(527)].notificationsHandled++, await s(x), !0;
    } catch (e) {
      return this[t(527)][t(1137)]++, this[t(429)]("error", t(361) + x[t(382)] + ":", e), !0;
    }
  }
  async send(x) {
    const t = r;
    this[t(429)](t(1311), t(740), x);
    try {
      if (this[t(2438)](x)) {
        const s = await this[t(2892)](x);
        if (s[t(656)]) {
          if (s[t(2904)] === null) return;
          s[t(2904)] && (x = { ...s[t(2904)], jsonrpc: t(1416) }, this.stats.requestsIntercepted++);
        } else if (this[t(2747)][t(1381)]) this.log("warn", t(692) + x[t(382)] + ":", s[t(795)]);
        else throw s[t(795)];
      }
      if (this[t(1342)](x)) {
        const s = await this.executeOutgoingNotificationInterceptor(x);
        if (s[t(656)]) {
          if (s[t(2904)] === null) return;
          s[t(2904)] && (x = { ...s.result, jsonrpc: t(1416) }, this.stats[t(1143)]++);
        } else if (this.options[t(1381)]) this[t(429)]("warn", "Notification interceptor failed for " + x[t(382)] + ":", s[t(795)]);
        else throw s[t(795)];
      }
      this.realTransport && await this[t(2150)][t(838)](x);
    } catch (s) {
      throw this[t(527)][t(1137)]++, s;
    }
  }
  async [r(2212)]() {
    const x = r;
    this.realTransport && await this[x(2150)][x(2212)]();
  }
  async [r(2371)]() {
    const x = r;
    this[x(2150)] && await this[x(2150)][x(2371)]();
  }
  set onmessage(x) {
    this.messageHandlers = [x];
  }
  set [r(2054)](x) {
    this.closeHandlers = [x];
  }
  set [r(375)](x) {
    const t = r;
    this[t(2556)] = [x];
  }
  async [r(2892)](x) {
    const t = r, s = this[t(1794)][t(1502)](x.method);
    if (!s) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1162)](s(x), this[t(2747)].interceptorTimeout) };
    } catch (e) {
      return this[t(527)][t(1137)]++, { success: !1, error: new Ar(Tr[t(1192)], x[t(382)], t(500) + e[t(2462)], e) };
    }
  }
  async executeOutgoingNotificationInterceptor(x) {
    const t = r, s = this[t(2e3)][t(1502)](x.method);
    if (!s) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1162)](s(x), this[t(2747)][t(603)]) };
    } catch (e) {
      return this[t(527)][t(1137)]++, { success: !1, error: new Ar(Tr[t(1192)], x.method, t(2683) + e[t(2462)], e) };
    }
  }
  async [r(1332)](x, t) {
    const s = r;
    return await this[s(664)][s(1332)](x, t, { timeout: 36e5 });
  }
  async notification(x) {
    const t = r;
    return await this[t(664)][t(2915)](x);
  }
  setRequestHandler(x, t) {
    const s = r, e = x[s(1423)][s(382)][s(1163)];
    this[s(2470)][s(1019)](e, t);
  }
  [r(787)](x, t) {
    const s = r, e = x[s(1423)][s(382)][s(1163)];
    this.notificationHandlers.set(e, t);
  }
  [r(2744)](x, t) {
    const s = r, e = x.shape[s(382)][s(1163)];
    this[s(1794)][s(1019)](e, t);
  }
  [r(2585)](x, t) {
    const s = r, e = x[s(1423)][s(382)][s(1163)];
    this[s(2e3)].set(e, t);
  }
  [r(2481)](x) {
    const t = r;
    this.requestHandlers[t(2059)](x);
  }
  [r(1005)](x) {
    this[r(2575)].delete(x);
  }
  unsetOutgoingRequestInterceptor(x) {
    this[r(1794)].delete(x);
  }
  [r(886)](x) {
    const t = r;
    this.outgoingNotificationInterceptors[t(2059)](x);
  }
  [r(1065)](x) {
    const t = r;
    return this.requestHandlers[t(731)](x);
  }
  [r(690)](x) {
    const t = r;
    return this.notificationHandlers[t(731)](x);
  }
  [r(2606)](x) {
    const t = r;
    return this[t(1794)][t(731)](x);
  }
  [r(2071)](x) {
    const t = r;
    return this[t(2e3)][t(731)](x);
  }
  [r(1636)]() {
    return { ...this[r(527)] };
  }
  [r(394)]() {
    const x = r;
    this[x(527)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [r(1672)]() {
    return this.protocol;
  }
  [r(794)]() {
    const x = r;
    this[x(2470)].clear(), this[x(2575)][x(2368)](), this.outgoingRequestInterceptors[x(2368)](), this[x(2e3)][x(2368)]();
  }
  [r(2438)](x) {
    const t = r;
    return x[t(921)] === "2.0" && t(382) in x && "id" in x;
  }
  [r(1342)](x) {
    const t = r;
    return x[t(921)] === t(1416) && "method" in x && !("id" in x);
  }
  async [r(1162)](x, t) {
    const s = r, e = new Promise((a, n) => {
      const i = B;
      setTimeout(() => n(new Error(i(635))), t);
    });
    return await Promise[s(2304)]([x, e]);
  }
  [r(429)](x, t, ...s) {
    const e = r;
    if (!this.options[e(1311)] && x === e(1311)) return;
    const a = "[MCPMiddleware]";
    switch (x) {
      case e(1311):
        console[e(1311)](a, t, ...s);
        break;
      case e(1665):
        console[e(1665)](a, t, ...s);
        break;
      case e(2850):
        console[e(2850)](a, t, ...s);
        break;
      case e(795):
        console[e(795)](a, t, ...s);
        break;
    }
  }
}
k({ method: x0(r(1980)), params: k({ requestId: y(), data: T0(), error: y()[r(2662)](), finished: e0() }) }), k({ method: x0(r(452)), params: k({ action: y(), data: T0() }) }), k({ method: x0("sdppp/abort"), params: k({ requestId: y() }) });
const mo = k({ method: x0(r(1980)), params: k({ requestId: y(), data: T0(), error: y()[r(2662)](), finished: e0() }) }), bo = k({ method: x0(r(452)), params: k({ action: y(), data: T0() }) }), go = k({ method: x0(r(2458)), params: k({ requestId: y() }) });
var Rs, Cs;
class yo {
  constructor() {
    m0(this, Cs, /* @__PURE__ */ new Map());
    m0(this, Rs, /* @__PURE__ */ new Map());
  }
  push(x) {
    const t = r, { requestId: s } = x[t(1383)], e = this[t(1561)].get(s) || [], a = this.waiters[t(1502)](s) || [];
    a[t(1726)] > 0 ? a.shift()(x[t(1383)]) : (e[t(1072)](x[t(1383)]), this.queues[t(1019)](s, e));
  }
  async [(Cs = r(1561), Rs = r(1973), r(435))](x) {
    const t = r, s = this.queues.get(x) || [];
    return s[t(1726)] > 0 ? s[t(1080)]() : new Promise((e) => {
      const a = t, n = this[a(1973)][a(1502)](x) || [];
      n[a(1072)](e), this.waiters[a(1019)](x, n);
    });
  }
  cleanup(x) {
    const t = r;
    this[t(1561)][t(2059)](x), this[t(1973)][t(2059)](x);
  }
}
var Fs, Ns;
class vo extends po {
  constructor(t, s = {}) {
    const e = r;
    super(t, s);
    m0(this, "streamRequestorHandlers", /* @__PURE__ */ new Map());
    m0(this, Ns, 1);
    m0(this, "runningRequests", /* @__PURE__ */ new Map());
    m0(this, Fs, new yo());
    this[e(1957)]();
  }
  [(Ns = r(364), Fs = r(1998), r(1957))]() {
    const t = r;
    this[t(2663)](), this[t(1988)](), this[t(2144)]();
  }
  setupStreamResponseHandler() {
    this.setNotificationHandler(mo, async (t) => {
      const s = B;
      this[s(1998)][s(1072)](t);
    });
  }
  [r(1988)]() {
    const t = r;
    this[t(2156)](go, async (s, e) => {
      const a = t, { requestId: n } = s.params, i = this[a(651)][a(1502)](n);
      return i && (i.abort(), this.runningRequests.delete(n)), { success: !0 };
    });
  }
  [r(2144)]() {
    const t = r;
    this[t(2156)](bo, async (s, e) => {
      const a = t, n = a(778) + this[a(364)]++, i = this[a(985)][a(1502)](s.params.action);
      if (!i) throw new Error("No handler for streamRequestor: " + s.params[a(1758)]);
      const c = new AbortController();
      return this[a(651)].set(n, c), this[a(1385)](n, i, s.params, e, c), { requestId: n };
    });
  }
  async [r(1385)](t, s, e, a, n) {
    const i = r;
    try {
      const c = s(e, a, n[i(652)]);
      for await (const u of c) {
        if (n[i(652)][i(2377)]) break;
        await this[i(2915)]({ method: i(1980), params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !n[i(652)].aborted && await this[i(2915)]({ method: i(1980), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n.signal[i(2377)] && await this[i(2915)]({ method: i(1980), params: { requestId: t, data: null, error: c[i(2462)], finished: !0 } });
    } finally {
      this[i(651)][i(2059)](t);
    }
  }
  registerStreamRequestorHandler(t, s) {
    const e = r;
    this[e(985)][e(1019)](t[e(1423)].action[e(1163)], s);
  }
  async streamRequest(t, s, e) {
    const a = r;
    this[a(1880)](e);
    const n = await this.sendStreamRequestorRequest(t), i = this[a(1008)](n), c = this[a(516)]();
    return this.createAsyncIterator(i, c, n, e);
  }
  [r(1880)](t) {
    const s = r;
    if (t && t[s(2377)]) throw new Error(s(1149));
  }
  async [r(797)](t) {
    const s = r;
    return (await this[s(1332)]({ method: s(452), params: { action: t[s(1758)], data: t[s(2171)] } }, k({ requestId: y() }))).requestId;
  }
  [r(1008)](t) {
    return this[r(1998)];
  }
  [r(516)]() {
    return { finished: !1, error: null };
  }
  [r(925)](t, s, e, a) {
    const n = r, i = this;
    return { async *[Symbol[n(1628)]]() {
      const c = n;
      try {
        for (; !s.finished && !s[c(795)]; ) {
          if (a && a.aborted)
            throw await i[c(1332)]({ method: "sdppp/abort", params: { requestId: e } }, k({ success: e0() })), new Error(c(1113));
          const u = await t[c(435)](e);
          if (u[c(795)])
            throw s.error = u[c(795)], new Error(u[c(795)]);
          if (u.finished) {
            s[c(2669)] = !0;
            break;
          }
          u[c(2171)] !== null && (yield u.data);
        }
      } finally {
        t.cleanup(e);
      }
    } };
  }
  [r(1950)]() {
    const t = r;
    return this[t(651)][t(2732)];
  }
  async [r(2096)](t) {
    const s = r, e = this.runningRequests[s(1502)](t);
    return e ? (e[s(369)](), this[s(651)][s(2059)](t), !0) : !1;
  }
  [r(904)]() {
    const t = r;
    for (const [s, e] of this[t(651)])
      e.abort();
    this[t(651)].clear();
  }
  [r(794)]() {
    const t = r;
    super[t(794)](), this[t(904)](), this[t(985)][t(2368)]();
  }
}
k({ id: y(), method: y(), params: T0()[r(773)](), traceId: y()[r(773)]() }), k({ id: y(), result: T0()[r(773)](), error: k({ code: _(), message: y(), data: T0()[r(773)]() })[r(773)]() }), k({ method: y(), params: T0()[r(773)]() }), k({ method: x0(r(452)), params: k({ action: y(), data: T0() }) }), k({ method: x0("sdppp/streamResponse"), params: k({ requestId: y(), data: T0().optional(), error: y().nullable().optional(), finished: e0()[r(1200)](!1) }) }), k({ method: x0("sdppp/abort"), params: k({ requestId: y() }) }), k({ method: x0(r(362)), params: k({ messageType: y(), message: T0() }) });
function Ms(o) {
  const x = r;
  return o && o[x(2417)] && Object[x(2250)].hasOwnProperty[x(1297)](o, x(1200)) ? o[x(1200)] : o;
}
const Ne = k({ leftDistance: _(), topDistance: _(), rightDistance: _(), bottomDistance: _(), width: _(), height: _() }), Ce = { name: y(), uiWeight: _() }, wo = k({ ...Ce, outputType: x0("images"), options: k({ required: e0(), maxCount: _().optional(), maskMode: e0()[r(773)]() }) }), So = k({ ...Ce, outputType: x0(r(2148)), options: k({ required: e0() }) }), ko = k({ ...Ce, outputType: x0(r(360)), options: k({ required: e0() }) }), Po = k({ ...Ce, outputType: x0("boolean"), options: k({ required: e0() }) }), Io = k({ ...Ce, outputType: x0(r(1455)), options: k({ required: e0(), min: _()[r(773)](), max: _().optional(), step: _().optional(), random: e0()[r(773)](), slider: e0()[r(773)]() }) }), Eo = k({ ...Ce, outputType: x0(r(1897)), options: k({ required: e0(), values: v0(y()), labels: v0(y())[r(773)]() }) }), Ro = k({ ...Ce, outputType: x0(r(1660)), options: k({ required: e0(), values: v0(y()) }) }), Co = k({ ...Ce, outputType: x0("video"), options: k({ required: e0() }) }), Fo = Ds(r(849), [wo, So, ko, Po, Io, Eo, Ro, Co]), No = k({ id: y(), title: y(), widgets: v0(Fo), uiWeightSum: _() }), qo = k({ widgetableID: y(), widgetablePath: y(), nodes: z0(y(), No), nodeIndexes: v0(y()), note: y()[r(773)](), options: z0(y(), T0()) }), To = k({ widgetableStructure: qo[r(1200)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: z0(y(), v0(T0())).default({}), widgetableErrors: z0(y(), y())[r(1200)]({}), queueSize: _()[r(1200)](0), lastError: y().default(""), progress: _()[r(1200)](0), executingNodeTitle: y().default(""), executingNodeID: y()[r(1200)](""), graphProgress: _()[r(1200)](0), comfyUserToken: y().default(""), comfyOrgLoggedIn: e0()[r(1200)](!1), comfyOrgAPIKey: y()[r(1200)](""), comfyWSState: E0([r(2209), r(2326)])[r(1200)](r(2209)), lastRunTime: _().default(0) }), Ao = k({ bannerData: T0().optional(), refreshable: e0()[r(1200)](!1), backwardable: e0()[r(1200)](!1), loginable: e0()[r(1200)](!1), runnable: e0().default(!1), workBoundaries: z0(_(), Ne).default({}), workBoundaryMaxSizes: z0(_(), _())[r(1200)]({}) }), Oo = k({ uname: y()[r(1200)](""), activeDocumentID: _()[r(1200)](0), layers: v0(k({ id: _(), name: y(), identify: y() }))[r(1200)]([]), actions: v0(y())[r(1200)]([]), theme: y().default(r(1085)), sdpppX: z0(y(), T0()).default({}), locale: E0([r(2736), "en-US"])[r(1200)](r(708)), comfyWebviewConnectStatus: E0(["connecting", r(2209), r(647)])[r(1200)](r(647)), comfyWebviewLoadError: y().default(""), comfyWebviewLoading: e0()[r(1200)](!1), comfyWebviewVersion: y()[r(1200)](""), comfyHTTPCode: _()[r(1200)](200), comfyURL: y()[r(1200)](""), sdkWebviewFocusing: e0()[r(1200)](!1), sdkWebviewConnectStatus: E0(["connecting", r(2209), r(647)])[r(1200)](r(647)), isLogin: e0()[r(1200)](!1), isGuest: e0().default(!1), requestingLogin: e0()[r(1200)](!1), loginMessage: y()[r(1200)](""), token: y()[r(1200)](""), userInfo: z0(y(), T0())[r(1200)]({}), taskLastRun: _().default(0), canvasStateID: _()[r(773)](), selectionStateID: y().optional(), selectionBoundary: Ne.nullable()[r(773)](), canvasThumbnail: y()[r(1200)](""), curlayerThumbnail: y()[r(1200)]("") }), Do = { setNodeTitle: { requestSchema: k({ node_id: y(), title: y() }), responseSchema: k({ success: e0() }) }, reboot: { requestSchema: k({}), responseSchema: k({ success: e0(), error: y()[r(773)]() }) }, setComfyOrgAPIKey: { requestSchema: k({ api_key: y() }), responseSchema: k({ success: e0() }) }, logout: { requestSchema: k({}), responseSchema: k({ success: e0() }) }, uploadComfyImageFromUXP: { requestSchema: k({ fileName: y(), overwrite: e0().optional(), mimeType: y()[r(773)](), dataBase64: y() }), responseSchema: k({ name: y() }) }, sdpppHandshake: { requestSchema: k({ hostVersion: y().optional() }), responseSchema: k({ comfyVersion: y(), hostVersion: y()[r(773)]() }) } }, jo = k({ workflows: v0(y()), error: y()[r(773)]() }), Mo = k({ success: e0(), nodeErrors: z0(y()).optional(), prompt_ids: v0(y())[r(773)](), images: v0(k({ url: y(), thumbnail: y() }))[r(773)]() }), Lo = { setWidgetValue: { requestSchema: k({ values: v0(k({ nodeID: y(), widgetIndex: _(), value: z0(y(), T0()).or(y()).or(_()).or(e0()).or(v0(T0())) })) }), responseSchema: k({ success: e0() }) }, openWorkflow: { requestSchema: k({ workflow_path: y(), reset: e0()[r(1200)](!1) }), responseSchema: k({ success: e0() }) }, openWorkflowJSON: { requestSchema: k({ workflow_content: z0(T0()), workflow_path: y() }), responseSchema: k({ success: e0() }) }, listWorkflows: { requestSchema: k({ listMode: y()[r(773)](), sdpppID: y().optional(), sdpppToken: y()[r(773)]() }), responseSchema: jo }, saveWorkflow: { requestSchema: k({ workflow_path: y(), from_sid: y()[r(773)]() }), responseSchema: k({ success: e0() }) }, run: { requestSchema: k({ size: _() }), responseSchema: Mo, stream: !0 }, stopAll: { requestSchema: k({}), responseSchema: k({ success: e0() }) } }, $o = { backward: { requestSchema: zx(), responseSchema: k({ success: e0() }) }, refresh: { requestSchema: zx(), responseSchema: k({ success: e0() }) }, run: { requestSchema: zx(), responseSchema: k({ success: e0() }) } }, Ho = k({ passwordPayload: k({ username: y(), password: y() }).or(k({ email: y(), password: y() })).or(k({ phone: y(), password: y() })).or(k({ identifier: y(), password: y() })) }).or(k({ passcodePayload: k({ phone: y(), code: y() }).or(k({ email: y(), code: y() })) })), zo = k({ passwordPayload: k({ username: y(), password: y() }).or(k({ email: y(), password: y() })).or(k({ phone: y(), password: y() })).or(k({ identifier: y(), password: y() })) }).or(k({ passcodePayload: k({ phone: y(), code: y() }).or(k({ email: y(), code: y() })) })), Uo = { register: { requestSchema: Ho, responseSchema: k({}) }, login: { requestSchema: zo, responseSchema: k({}) }, sendPassCode: { requestSchema: k({ phone: y().optional(), email: y().optional() }), responseSchema: k({}) }, logout: { requestSchema: k({}), responseSchema: k({}) }, guestLogin: { requestSchema: k({}), responseSchema: k({}) } };
k({ resource: y()[r(773)](), thumbnail: y()[r(773)](), width: _().optional(), height: _()[r(773)](), mimeType: y()[r(773)](), source: y().optional(), error: y()[r(773)]() }), k({ boundary: E0([r(1374), r(632), r(1611)]), content: E0([r(1374), r(632), r(1611)]).or(y()), imageSize: _(), imageQuality: _(), cropBySelection: E0(["no", r(1205), r(1131)]), layer_identify: y()[r(2662)]().optional() }), k({ content: E0([r(1374), r(632), "selection"]), reverse: e0(), imageSize: _(), layer_identify: y().nullable()[r(773)]() }), k({ selection: E0([r(1755), r(1339), r(1658), r(1775), r(550), r(2821), r(2647), r(1755)]), url: y(), source: y(), cropBySelection: E0(["no", r(1205), r(1131)]) });
const Vo = { downloadImage: { requestSchema: k({ url: y() }), responseSchema: k({ thumbnail: y()[r(773)](), resource: y()[r(773)](), width: _().optional(), height: _()[r(773)](), error: y()[r(773)]() }) }, getThumbnail: { requestSchema: k({ resource: y(), maxSize: _()[r(773)]() }), responseSchema: k({ thumbnail: y()[r(773)](), width: _()[r(773)](), height: _()[r(773)](), error: y()[r(773)]() }) }, deleteDownloadedImage: { requestSchema: k({ resources: v0(y()) }), responseSchema: k({ error: y().optional() }) }, requestAndDoSaveImage: { requestSchema: k({ resources: v0(y()) }), responseSchema: k({ error: y()[r(773)]() }) } }, Wo = { manageGuides: { requestSchema: k({ action: E0([r(800), "clear"]), rect: Ne.optional() }), responseSchema: k({ success: e0() }) }, getBoundary: { requestSchema: k({ type: E0(["curlayer", "selection"]) }), responseSchema: Ne }, getImage: { requestSchema: k({ boundary: B0([E0([r(1374), r(632), r(1611)]), Ne]), content: B0([E0([r(1374), "curlayer"]), y()]), imageSize: _(), imageQuality: _(), cropBySelection: E0(["no", "positive", "negative"]), SkipNonNormalLayer: e0(), layer_identify: y()[r(2662)]()[r(773)]() }), responseSchema: k({ resource: y()[r(773)](), thumbnail: y()[r(773)](), width: _()[r(773)](), height: _()[r(773)](), mimeType: y()[r(773)](), source: y().optional(), error: y()[r(773)]() }) }, getMask: { requestSchema: k({ boundary: B0([E0([r(1374), r(632), r(1611)]), Ne]), content: E0([r(1374), "curlayer", "selection"]), reverse: e0(), imageSize: _(), layer_identify: y()[r(2662)]()[r(773)]() }), responseSchema: k({ resource: y().optional(), thumbnail: y()[r(773)](), width: _()[r(773)](), height: _()[r(773)](), mimeType: y()[r(773)](), source: y()[r(773)](), error: y()[r(773)]() }) }, getCurrentLayerIdentify: { requestSchema: k({}), responseSchema: k({ layer_identify: y()[r(2662)]() }) }, importImage: { requestSchema: k({ resource: y(), boundary: B0([E0([r(1374), r(632), r(1611)]), Ne]).optional(), type: E0([r(1374), "curlayer", r(2042), r(959)]), sourceWidth: _()[r(773)](), sourceHeight: _()[r(773)]() }), responseSchema: k({ success: e0(), layers: v0(k({ identify: y() }))[r(773)](), message: y()[r(773)](), error: y()[r(773)]() }) }, applyMaskToImage: { requestSchema: k({ imageResource: y(), maskResource: y(), invertMask: e0()[r(773)]() }), responseSchema: k({ resource: y(), thumbnail: y()[r(773)](), width: _(), height: _(), mimeType: y() }) }, showBoundarySelectionDialog: { requestSchema: k({ additionalData: z0(T0())[r(773)]() }), responseSchema: k({ boundary: E0([r(1374), "curlayer", r(1611)])[r(773)](), cancelled: e0()[r(773)]() }) }, selectImageSource: { requestSchema: k({ additionalData: z0(T0())[r(773)]() }), responseSchema: k({ action: E0([r(2720), r(2658)])[r(773)](), params: T0()[r(773)](), cancelled: e0().optional() }) }, selectContentSource: { requestSchema: k({ additionalData: z0(T0()).optional() })[r(773)](), responseSchema: k({ resource: y()[r(773)](), fileName: y().optional(), mimeType: y()[r(773)](), size: _()[r(773)](), layerIdentify: y()[r(773)](), cancelled: e0()[r(773)]() }) } }, Ux = k({ taskId: y(), taskName: y(), status: E0([r(2833), r(332), r(2655), "cancelled"]), currentStep: _()[r(773)](), totalSteps: _()[r(773)](), stepDescription: y()[r(773)](), progressPercentage: _()[r(2742)](0)[r(2650)](100).optional(), startTime: y(), endTime: y()[r(773)](), error: y()[r(773)](), errorCode: y()[r(773)](), result: T0()[r(773)](), metadata: z0(T0()).optional() }), Vx = k({ success: e0(), error: y().optional() }), Zo = { taskAdd: { requestSchema: Ux, responseSchema: Vx }, taskUpdate: { requestSchema: Ux[r(2540)]().required({ taskId: !0 }), responseSchema: Vx }, taskRemove: { requestSchema: Ux[r(533)]({ taskId: !0 }), responseSchema: Vx } }, Bo = { log: { requestSchema: k({ level: E0([r(429), "info", r(2850), r(795)]), messages: v0(y()) }), responseSchema: k({}) }, openExternalLink: { requestSchema: k({ url: y() }), responseSchema: k({ error: y()[r(773)]() }) }, getStorage: { requestSchema: k({ key: y() }), responseSchema: k({ value: y(), error: y().optional() }) }, setStorage: { requestSchema: k({ key: y(), value: y() }), responseSchema: k({ error: y()[r(773)]() }) }, removeStorage: { requestSchema: k({ key: y() }), responseSchema: k({ error: y()[r(773)]() }) }, keyboardAction: { requestSchema: k({ keycode: y() }), responseSchema: k({}) }, setComfyWebviewURL: { requestSchema: k({ url: y() }), responseSchema: k({}) }, getImageBase64: { requestSchema: k({ token: y() }), responseSchema: k({ base64: y().optional(), mimeType: y()[r(773)](), error: y()[r(773)]() }) }, uploadComfyImage: { requestSchema: k({ uploadInput: k({ type: B0([x0(r(1279)), x0(r(2631)), x0(r(2750))]), resource: T0(), fileName: y(), mimeType: y()[r(773)](), resourceId: y()[r(773)]() }), overwrite: e0()[r(773)]()[r(1200)](!0) }), responseSchema: k({ name: y() }) }, pickLocalFile: { requestSchema: k({ acceptExtensions: v0(y()).optional(), kind: E0([r(1060), r(2003)])[r(773)]() })[r(773)](), responseSchema: k({ cancelled: e0().optional(), resource: y()[r(773)](), fileName: y().optional(), mimeType: y()[r(773)](), size: _()[r(773)](), error: y()[r(773)]() }) }, proxiedFetch: { requestSchema: k({ url: y(), method: y().optional(), headers: z0(y())[r(773)](), body: T0().optional(), bodyType: E0(["json", r(917), "text"]).optional() }), responseSchema: k({ success: e0(), status: _()[r(773)](), statusText: y().optional(), headers: z0(y())[r(773)](), data: T0().optional(), error: y().optional() }) }, openaiImageEdit: { requestSchema: k({ apiKey: y(), baseURL: y(), imageToken: y(), prompt: y(), model: y() }), responseSchema: k({ success: e0(), imageUrl: y()[r(773)](), apiTime: _().optional(), error: y().optional() }) }, geminiImageGenerate: { requestSchema: k({ apiKey: y(), baseURL: y()[r(773)](), imageInputs: v0(y()).optional(), imageInput: y()[r(773)](), imageInputType: E0([r(2631), r(578)]), prompt: y() }), responseSchema: k({ success: e0(), imageUrl: y()[r(773)](), apiTime: _()[r(773)](), error: y()[r(773)]() }) } }, Ko = B0([y(), Hx(Uint8Array), Hx(ArrayBuffer), Hx(DataView)]), _o = k({ buffer: Ko, name: y().nullable()[r(773)](), mime: y()[r(2662)]()[r(773)](), width: _()[r(2662)]()[r(773)](), height: _()[r(2662)]()[r(773)](), thumbnail: y().nullable().optional(), meta: z0(Le()).optional() }), Go = { "fileResource.createFromExternal": { requestSchema: k({ url: y() }), responseSchema: k({ resource: y()[r(773)](), thumbnail: y()[r(773)](), width: _()[r(773)](), height: _()[r(773)](), mime: y().optional(), mimeType: y()[r(773)](), error: y().optional() }) }, "fileResource.createFromLocal": { requestSchema: k({ types: v0(k({ description: y().optional(), extensions: v0(y())[r(773)]() }))[r(773)]() }), responseSchema: k({ resource: y()[r(773)](), thumbnail: y().optional(), width: _()[r(773)](), height: _().optional(), mime: y()[r(773)](), error: y()[r(773)]() }) }, "fileResource.createFromBuffer": { requestSchema: k({ files: v0(_o).min(1) }), responseSchema: k({ resource: y()[r(773)](), thumbnail: y()[r(773)](), width: _()[r(773)](), height: _().optional(), mime: y()[r(773)](), error: y().optional() }) }, "fileResource.createFromCBM": { requestSchema: k({ contentUri: y().optional(), boundaryUri: y()[r(773)](), maskUri: y()[r(773)](), options: z0(Le())[r(773)]() }), responseSchema: k({ resource: y().optional(), thumbnail: y()[r(773)](), width: _()[r(773)](), height: _()[r(773)](), mime: y()[r(773)](), error: y()[r(773)]() }) }, "fileResource.delete": { requestSchema: k({ resources: v0(y()) }), responseSchema: k({ error: y()[r(773)]() }) }, "fileResource.thumbnail": { requestSchema: k({ resource: y(), maxSize: _().optional() }), responseSchema: k({ thumbnail: y()[r(773)](), width: _()[r(773)](), height: _()[r(773)](), error: y()[r(773)]() }) }, "fileResource.saveAs": { requestSchema: k({ resources: v0(y()) }), responseSchema: k({ error: y()[r(773)]() }) }, "boundary.normalize": { requestSchema: k({ boundary: y() }), responseSchema: k({ boundary: y().optional(), error: y().optional() }) }, "layer.resolve": { requestSchema: k({ uri: y(), type: E0([r(1034), r(2386)]) }), responseSchema: k({ uri: y()[r(773)](), error: y().optional() }) } }, Jo = ho({ nodes: { sdk: { store: Ao, actions: { ...$o } }, uxp: { store: Oo, actions: { ...Vo, ...Go, ...Bo, ...Uo, ...Zo, ...Wo } }, comfy: { store: To, actions: { ...Lo, ...Do } } }, edges: [[r(1722), r(568)], [r(2820), "uxp"]] }), R0 = Jo.joinAs(r(2820));
globalThis[r(1037)] = R0;
var fx = { exports: {} }, Wx, Or;
function Qo() {
  if (Or) return Wx;
  Or = 1;
  var o = 1e3, x = o * 60, t = x * 60, s = t * 24, e = s * 7, a = s * 365.25;
  Wx = function(d, l) {
    const f = B;
    l = l || {};
    var b = typeof d;
    if (b === "string" && d[f(1726)] > 0) return n(d);
    if (b === "number" && isFinite(d)) return l[f(644)] ? c(d) : i(d);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON[f(2848)](d));
  };
  function n(d) {
    const l = B;
    if (d = String(d), !(d[l(1726)] > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[l(398)](d);
      if (f) {
        var b = parseFloat(f[1]), h = (f[2] || "ms")[l(1132)]();
        switch (h) {
          case l(1904):
          case l(1397):
          case l(457):
          case "yr":
          case "y":
            return b * a;
          case l(768):
          case l(976):
          case "w":
            return b * e;
          case l(579):
          case "day":
          case "d":
            return b * s;
          case l(1193):
          case l(383):
          case l(1293):
          case "hr":
          case "h":
            return b * t;
          case l(801):
          case l(1683):
          case "mins":
          case l(2742):
          case "m":
            return b * x;
          case "seconds":
          case "second":
          case l(1400):
          case "sec":
          case "s":
            return b * o;
          case l(545):
          case l(2005):
          case "msecs":
          case l(1140):
          case "ms":
            return b;
          default:
            return;
        }
      }
    }
  }
  function i(d) {
    const l = B;
    var f = Math[l(1091)](d);
    return f >= s ? Math.round(d / s) + "d" : f >= t ? Math.round(d / t) + "h" : f >= x ? Math[l(982)](d / x) + "m" : f >= o ? Math[l(982)](d / o) + "s" : d + "ms";
  }
  function c(d) {
    const l = B;
    var f = Math.abs(d);
    return f >= s ? u(d, f, s, "day") : f >= t ? u(d, f, t, l(383)) : f >= x ? u(d, f, x, l(1683)) : f >= o ? u(d, f, o, l(392)) : d + l(1823);
  }
  function u(d, l, f, b) {
    const h = B;
    var m = l >= f * 1.5;
    return Math[h(982)](d / f) + " " + b + (m ? "s" : "");
  }
  return Wx;
}
var Zx, Dr;
function Xo() {
  if (Dr) return Zx;
  Dr = 1;
  function o(x) {
    const t = B;
    e[t(1311)] = e, e.default = e, e[t(2543)] = d, e[t(1792)] = c, e[t(1964)] = n, e.enabled = u, e[t(929)] = Qo(), e[t(459)] = l, Object[t(2023)](x).forEach((f) => {
      e[f] = x[f];
    }), e.names = [], e[t(1556)] = [], e[t(2884)] = {};
    function s(f) {
      const b = t;
      let h = 0;
      for (let m = 0; m < f.length; m++)
        h = (h << 5) - h + f[b(682)](m), h |= 0;
      return e.colors[Math[b(1091)](h) % e.colors[b(1726)]];
    }
    e[t(1166)] = s;
    function e(f) {
      const b = t;
      let h, m = null, v, S;
      function P(...F) {
        const A = B;
        if (!P[A(2382)]) return;
        const R = P, E = Number(/* @__PURE__ */ new Date()), C = E - (h || E);
        R[A(2690)] = C, R[A(2336)] = h, R[A(1985)] = E, h = E, F[0] = e[A(2543)](F[0]), typeof F[0] !== A(360) && F.unshift("%O");
        let D = 0;
        F[0] = F[0][A(521)](/%([a-zA-Z%])/g, (M, N) => {
          const q = A;
          if (M === "%%") return "%";
          D++;
          const U = e[q(2884)][N];
          if (typeof U == "function") {
            const $ = F[D];
            M = U[q(1297)](R, $), F[q(1719)](D, 1), D--;
          }
          return M;
        }), e[A(2104)][A(1297)](R, F), (R[A(429)] || e[A(429)])[A(847)](R, F);
      }
      return P.namespace = f, P[b(2443)] = e[b(2443)](), P[b(1230)] = e.selectColor(f), P.extend = a, P.destroy = e[b(459)], Object[b(2491)](P, b(2382), { enumerable: !0, configurable: !1, get: () => {
        const F = b;
        return m !== null ? m : (v !== e[F(1084)] && (v = e[F(1084)], S = e[F(2382)](f)), S);
      }, set: (F) => {
        m = F;
      } }), typeof e[b(1106)] === b(975) && e.init(P), P;
    }
    function a(f, b) {
      const h = t, m = e(this.namespace + (typeof b === h(662) ? ":" : b) + f);
      return m[h(429)] = this.log, m;
    }
    function n(f) {
      const b = t;
      e[b(1474)](f), e[b(1084)] = f, e[b(648)] = [], e[b(1556)] = [];
      const h = (typeof f === b(360) ? f : "")[b(425)]().replace(/\s+/g, ",")[b(1821)](",")[b(2783)](Boolean);
      for (const m of h)
        m[0] === "-" ? e[b(1556)].push(m[b(483)](1)) : e[b(648)][b(1072)](m);
    }
    function i(f, b) {
      const h = t;
      let m = 0, v = 0, S = -1, P = 0;
      for (; m < f.length; )
        if (v < b[h(1726)] && (b[v] === f[m] || b[v] === "*")) b[v] === "*" ? (S = v, P = m, v++) : (m++, v++);
        else if (S !== -1) v = S + 1, P++, m = P;
        else return !1;
      for (; v < b[h(1726)] && b[v] === "*"; )
        v++;
      return v === b[h(1726)];
    }
    function c() {
      const f = t, b = [...e[f(648)], ...e[f(1556)][f(2086)]((h) => "-" + h)][f(2131)](",");
      return e.enable(""), b;
    }
    function u(f) {
      const b = t;
      for (const h of e[b(1556)])
        if (i(f, h)) return !1;
      for (const h of e[b(648)])
        if (i(f, h)) return !0;
      return !1;
    }
    function d(f) {
      const b = t;
      return f instanceof Error ? f[b(1116)] || f[b(2462)] : f;
    }
    function l() {
      const f = t;
      console[f(2850)](f(2660));
    }
    return e[t(1964)](e[t(2327)]()), e;
  }
  return Zx = o, Zx;
}
var jr;
function Yo() {
  const o = r;
  return jr ? fx.exports : (jr = 1, function(x, t) {
    const s = B;
    t[s(2104)] = a, t[s(1474)] = n, t[s(2327)] = i, t[s(2443)] = e, t[s(1641)] = c(), t[s(459)] = /* @__PURE__ */ (() => {
      let d = !1;
      return () => {
        const l = B;
        !d && (d = !0, console[l(2850)](l(2660)));
      };
    })(), t[s(1129)] = [s(1837), s(1955), s(2673), s(2530), s(1249), s(872), s(2026), s(744), s(374), s(771), s(2423), "#00CC99", s(1700), s(2363), s(595), s(2679), s(1357), s(1305), "#3366CC", s(877), s(1040), s(1098), s(2467), s(573), s(1436), s(1495), "#33CCCC", s(2513), s(1626), "#6600FF", s(2603), "#6633FF", s(1492), s(1314), s(896), s(1023), s(665), "#9933FF", s(1994), "#99CC33", s(2574), s(1733), s(671), "#CC0099", s(1877), s(2060), "#CC3300", s(709), s(2186), "#CC3399", s(2276), s(1983), s(2495), s(1277), s(2715), s(2868), s(1603), s(411), s(1238), s(1608), "#FF0066", "#FF0099", s(1520), "#FF00FF", s(1976), s(1265), "#FF3366", "#FF3399", s(1548), s(2538), s(2388), s(954), s(1151), s(2695), s(737), s(1464)];
    function e() {
      const d = s;
      if (typeof window < "u" && window[d(2021)] && (window.process[d(1655)] === d(1579) || window[d(2021)][d(583)])) return !0;
      if (typeof navigator !== d(662) && navigator.userAgent && navigator[d(2226)].toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
      let l;
      return typeof document < "u" && document.documentElement && document[d(1031)][d(2230)] && document[d(1031)].style[d(347)] || typeof window !== d(662) && window[d(977)] && (window[d(977)][d(1145)] || window[d(977)].exception && window[d(977)][d(1020)]) || typeof navigator !== d(662) && navigator[d(2226)] && (l = navigator[d(2226)][d(1132)]()[d(1074)](/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || typeof navigator !== d(662) && navigator[d(2226)] && navigator.userAgent.toLowerCase()[d(1074)](/applewebkit\/(\d+)/);
    }
    function a(d) {
      const l = s;
      if (d[0] = (this[l(2443)] ? "%c" : "") + this.namespace + (this[l(2443)] ? l(1803) : " ") + d[0] + (this[l(2443)] ? l(1939) : " ") + "+" + x[l(684)][l(929)](this[l(2690)]), !this[l(2443)]) return;
      const f = l(850) + this[l(1230)];
      d[l(1719)](1, 0, f, l(380));
      let b = 0, h = 0;
      d[0][l(521)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (b++, m === "%c" && (h = b));
      }), d.splice(h, 0, f);
    }
    t[s(429)] = console[s(1311)] || console[s(429)] || (() => {
    });
    function n(d) {
      const l = s;
      try {
        d ? t.storage[l(499)](l(1311), d) : t[l(1641)].removeItem(l(1311));
      } catch {
      }
    }
    function i() {
      const d = s;
      let l;
      try {
        l = t[d(1641)][d(2682)]("debug") || t[d(1641)][d(2682)](d(848));
      } catch {
      }
      return !l && typeof process !== d(662) && d(2258) in process && (l = process[d(2258)][d(848)]), l;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x.exports = Xo()(t);
    const { formatters: u } = x.exports;
    u.j = function(d) {
      try {
        return JSON.stringify(d);
      } catch (l) {
        return "[UnexpectedJSONParseError]: " + l.message;
      }
    };
  }(fx, fx[o(684)]), fx[o(684)]);
}
var ei = Yo();
const Ls = Ms(ei);
Ls[r(1964)]("*");
function xi(o, x) {
  const t = r, s = Ls(o), e = (a, n) => async function(...i) {
    try {
      await x({ level: a, messages: i });
    } catch {
    }
  };
  return s[t(429)] = e(t(429)), s;
}
const ox = xi("mesh:comfy", async ({ level: o, messages: x }) => {
  const t = r, { mcpMesh: s } = await Promise[t(422)]().then(() => zc);
  await s[t(1920)](t(568))[t(2082)][t(429)]({ level: o, messages: x });
});
globalThis.sdpppX2 = globalThis[r(552)] || {};
const ex = globalThis.sdpppX2, ti = { "preview.show": r(640), "gateway.select_ai_service": r(1439), "provider.select.title": "选择 AI 服务提供商", "provider.comfyui.description": "自定义AI工作流引擎", "provider.replicate.description": r(790), "provider.runninghub.description": r(453), "provider.google.description": r(1165), "task.waiting_upload": "正在等待图片上传...", "task.creating_task": r(834), "task.running_duration": r(1584), "task.cancelled": r(1437), "task.cancel_failed": "任务取消失败: {{error}}", "task.default_name": r(1503), "comfy.connect": "连接", "comfy.load_failed": r(531), "comfy.loading": r(388), "comfy.channel_connecting": r(432), "comfy.server_reconnecting": r(486), "comfy.version_mismatch": "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "comfy.cloud_recommend": "云端推荐：", "comfy.your_workflows": r(1144), "comfy.refresh_workflows": r(2702), "comfy.queue_progress": r(1273), "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": r(1867), "comfy.stop_auto_run": "停止自动运行", "comfy.start_auto_run": "画布变动后自动运行", "comfy.auto_run_status": "画布变更后自动运行工作流", "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": "正在上传...", "comfy.task.name": r(857), "comfy.error.task_cancelled": "任务已取消", "comfy.task.processing_progress": r(1559), "comfy.help_tooltip": r(2299), "comfy.no_workflow_selected": r(1921), "boundary.title": "输入设置", "boundary.tooltip": r(2688), "boundary.current_canvas": r(1622), "boundary.current_layer": r(2497), "boundary.current_selection": r(1619), "boundary.set_as_canvas": r(716), "boundary.set_as_layer": "设为当前图层", "boundary.set_as_selection": r(2858), "http.404": "SDPPP可能未安装或和插件版本不匹配 (404)", "http.401": r(2389), "http.403": "禁止访问 (403)", "http.408": r(2849), "http.500": "服务器错误 (500)", "http.501": r(2433), "http.502": "网关错误 (502)", "http.503": r(1732), "http.504": r(1852), "http.unknown": "未知错误（{{code}}）", "runninghub.get_apikey": r(2618), "runninghub.apikey_placeholder": r(1930), "runninghub.app_id": r(2837), "runninghub.webapp_id_placeholder": "此处粘贴 WebApp ID", "runninghub.open_app": r(989), "runninghub.execute": "执行", "runninghub.running": "运行中...", "runninghub.rh_coins": "RH币:", "runninghub.current_tasks": r(1972), "runninghub.help_tooltip": r(2299), "runninghub.stop_all": r(2561), "runninghub.status.waiting": r(2738), "runninghub.status.running": "正在运行", "runninghub.status.failed": r(2760), "runninghub.status.success": r(720), "image.auto_refetch": "自动从PS重新获取", "local_resource.selection.images": "图片", "runninghub.error.get_result_failed": r(841), "runninghub.error.task_failed": r(1589), "runninghub.error.task_incomplete": r(2214), "runninghub.error.account_status_http": r(1229), "runninghub.error.account_status_reason_unknown": r(2505), "runninghub.error.account_status_failed": r(2076), "runninghub.error.form_data_http": r(2191), "runninghub.error.form_data_reason_unknown": r(2887), "runninghub.error.form_data_failed": r(622), "runninghub.error.node_info_missing": r(470), "runninghub.error.run_http": r(758), "runninghub.error.run_reason_default": "任务执行失败", "runninghub.error.run_failed": "run API 调用失败 - {{reason}}", "runninghub.error.status_http": r(1554), "runninghub.error.status_reason_unknown": r(2577), "runninghub.error.status_failed": r(2671), "runninghub.error.outputs_http": r(343), "runninghub.error.outputs_failed": r(879), "runninghub.task.title": "RunningHub - {{webappId}}", "runninghub.error.upload_http": r(1686), "runninghub.error.upload_reason_unknown": r(1544), "runninghub.error.upload_failed": "uploadImage API 调用失败 - {{reason}}", "customapi.error.no_image_returned": "未返回图片", "customapi.error.openai_api": r(2815), "customapi.error.input_required": "需要提供图像和提示词", "customapi.error.generation_failed": r(2667), "customapi.task.name.google": r(2664), "customapi.task.name.openai": r(1963), "customapi.error.unsupported_image_input": "不支持的图像输入类型", "replicate.get_apikey": r(2352), "replicate.apikey_placeholder": r(1244), "replicate.execute": "执行", "replicate.model_placeholder": r(638), "replicate.help_tooltip": r(2299), "replicate.loading": r(1631), "replicate.running": r(2523), "replicate.stop": "停止", "liblib.get_apikey": r(2218), "liblib.execute": "执行", "common.close": "关闭", "common.save": "保存", "common.save_and_run": r(1025), "common.loading": r(1631), "common.error": "错误", "common.error.unknown": r(1022), "common.error.task_creation_aborted": "任务创建已中止", "common.error.status_check_aborted": "状态检查已中止", "common.error.result_fetch_aborted": r(599), "common.error.upload_aborted": r(2777), "common.success": "成功", "common.failed": "失败", "common.generating": r(1449), "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": r(1798), "upload_pass.error.unsupported_type": r(1477), "upload_pass.error.uploader_missing": r(1676), webviewInForeground: "插件可能正在拦截 PS 快捷键... ", webviewInForeground2: "点我恢复", "auth.login_success": r(1692), "auth.username_label": r(1595), "auth.email_label": r(984), "auth.logout": r(2828), "auth.login_required": "请登陆后使用插件", "image.send.select_position": "请选择要发送图像的位置", "image.send.sending": r(2349), "image.layer.new": r(2656), "image.layer.current": "当前图层", "image.layer.fit_to_current": "适配至当前图层", "image.layer.fit_to_selection": r(1614), "image.layer.fit_to_canvas": r(2460), "image.shortcut_auth_required": "快捷键选图功能仅登陆后可用", "image.shortcut_focus_required": "快捷键选图功能仅在插件窗口聚焦时可用", "image.get.select_image": r(1077), "image.get.entire_canvas": r(1622), "image.get.canvas": "画布", "image.get.current_layer": r(2497), "image.get.current_layer_bounds": r(1662), "image.get.selection_bounds": r(2822), "image.get.canvas_bounds": r(2217), "image.crop_by_selection": r(2442), "image.limit_size": r(1764), "image.crop.none": r(2918), "image.crop.inpaint": "反向裁剪(Inpaint)", "image.crop.outpaint": "正向裁剪(Outpaint)", "image.send_all": r(2378), "image.save_all": r(1406), "image.save_current": r(481), "image.delete_current": r(1063), "image.more_actions": r(557), "image.jump_to_last": "跳转到最后一个", "image.clear_all": "清空所有", "image.send_to_ps": "发送到PS", "image.download": "下载", "image.copy": "复制", "image.sending": r(2303), "image.sending_all": r(462), "mask.get.select_mask": r(461), "mask.selection": "选区", "mask.current_layer_bounds": "当前图层范围", "mask.all": "全部", "mask.selection_exclude": "选区除外", "mask.current_layer_exclude": r(564), "mask.empty": "空", "widgetable.photoshop.deprecated_node": r(1893), "work_boundary.error.empty_selection_mask": r(1349), "work_boundary.error.primary_resource_missing": r(2301), "work_boundary.error.mask_resource_missing": "缺少遮罩资源", "work_boundary.error.mask_apply_empty": r(919), "document {{0}} not found": "找不到文档: {{0}}", "create document for preview": r(827), "resize document for preview": r(1018), "create document for sent images": "给发送的图片创建文档", "show sent images": "显示发送的图片", "create layer failed": r(751), "layer not found {{0}}": r(524), "layer not found: {{0}}": "找不到图层: {{0}}", "layer {{0}} is not a group": r(2569), "no linked layer for {{0}}": "没有链接图层: {{0}}", "no first related layer in {{0}}": r(2620), "merge group failed": r(2624), "get content of layer {{0}}": "获取图层 {{0}} 的内容", "get layer info": r(1590), "get_layer_info: layer_identify required": "get_layer_info: 需要 layer_identify", "get pixel of {{0}} failed": r(2771), "get selection failed": "获取选区失败", "invalid name: {{0}}": r(1081), "desire bounds is null": r(2876), "intersect or scaledDesire is null": "交集或缩放目标为空", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': r(2578), "select layer": r(1493), "run Photoshop Action": "sdppp 运行 Photoshop Action", "Action {{0}} not found": r(2273), "Action set {{0}} not found": r(2632), "set text to layer": r(753), "ComfyManager not found, cannot reboot": r(1067), "Failed to reboot ComfyUI": r(2859), "image.upload.from_canvas": "画布", "image.upload.from_curlayer": r(2497), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": r(1104), "image.upload.no_images": "暂无图片", "image.upload.error": r(887), "image.upload.tooltip.more_options_hint": r(2244), "image.upload.tooltip.alt.crop": "+Alt 按选区裁剪", "image.upload.tooltip.alt.reverse": r(2639), "image.upload.tooltip.image.canvas": "从 画布 获取图像", "image.upload.tooltip.image.curlayer": "从 当前图层 获取图像", "image.upload.tooltip.mask.curlayer": "从 当前图层 获取遮罩", "image.upload.tooltip.mask.selection": r(705), "image.upload.tooltip.mask.canvas": r(2105), "image.upload.tooltip.cut_action": r(2675), "image.upload.tooltip.scan_action": r(1366), "image.upload.tooltip.autosync.on": r(2527), "image.upload.tooltip.autosync.off": "自动同步: 关闭", "image.upload.autosync.fetching": r(440), "image.upload.tooltip.current.canvas": r(970), "image.upload.tooltip.current.layer": "当前选项：图层", "image.upload.tooltip.current.layer_named": r(1971), "image.upload.tooltip.current.file": r(1702), "image.upload.retry": "重试", "image.pack.local.button": r(2654), "image.pack.local.empty": r(1271), "image.auto_send_enabled": r(756), "image.auto_send_disabled": r(735), "image.upload.primary.auto": r(2179), "image.upload.primary.manual": "获取图片", "image.upload.primary.hint": "该节点默认继承当前图层与遮罩", "image.upload.primary.cut": "裁剪", "image.upload.primary.scan": "扫描", "image.upload.primary.hint.line1": r(2350), "image.upload.primary.hint.line2": "主图", "workflow.output.destination.title": r(2610), "workflow.output.destination.canvas": "全图", "image.upload.primary.advanced": "高级选图", "image.upload.primary.advanced.modify": "修改", "image.upload.primary.advanced.reset": "重置", "image.upload.primary.advanced.local_file": r(612), "image.upload.primary.advanced.content.canvas": "画布", "image.upload.primary.advanced.content.curlayer": r(2497), "image.upload.primary.advanced.content.selection": "选区", "image.upload.primary.advanced.boundary.canvas": r(2408), "image.upload.primary.advanced.boundary.curlayer": r(1558), "image.upload.primary.advanced.boundary.selection": "选区边界", "image.upload.primary.advanced.boundary.primary": r(2270), "image.upload.source.file.tooltip": r(2090), "image.upload.source.layer.tooltip": r(2044), "image.upload.source.canvas.tooltip": r(2608), "image.upload.dropHint": r(346), "image.upload.status.layer.short_named": r(1270), "image.upload.status.layer.short": "图层", "image.upload.status.file.short": r(2192), "image.upload.status.canvas.short": "画布", "image.upload.mask.button": r(650), "image.upload.mask.selection": "选区遮罩", "image.upload.mask.layer": r(1761), "image.upload.remove_slot": r(2602), "image.upload.add_slot": r(2790), "video.local.button": "本地视频", "video.local.empty": r(1353), "video.local.remove": "清除视频", "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": r(820), "source.ps_mask": r(475), "source.canvas": r(1622), "source.current_layer": r(2497), "source.selection": "选区", "source.quality_percent": "质量{{percent}}%", "source.crop.positive": r(2234), "source.crop.negative": r(1625), "source.reverse": "反转", "send_images.create_document": "创建文档", "send_images.create_document_failed": r(539), "photoshop.no_active_document": "没有活动文档", "photoshop.rectangle_coordinates_required": r(2710), "photoshop.create_guide_frame": r(1777), "photoshop.clear_guide_frame": r(1569), "photoshop.invalid_action": r(1533), "photoshop.file_not_found": r(922), "photoshop.failed_to_open_file_as_document": r(1993), "photoshop.invalid_boundary": r(1417), "photoshop.failed_to_open_image_file": r(2440), "photoshop.open_images_from_file": r(1164), "photoshop.failed_to_create_document_from_file": r(1807), "google.field.image_input": r(1992), "google.field.prompt": r(1540), "google.field.batch_count": r(1371), "google.field.images_per_batch": r(1833), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": r(565), "google.apikey_placeholder": r(2844), "google.baseurl_placeholder": r(2533), "google.get_apikey": r(717), "google.help_tooltip": "Google Gemini 图像生成器", "google.model_name": r(2726), "google.model_label": "模型", "google.model_placeholder": r(1105), "google.stop": "停止", "google.loading": r(1631), "google.generating": "生成中...", "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": r(2004), "image.import_as_newdoc": r(2731), "image.boundary": "边界", "image.import_tip": r(488), "auth.guest_login_success": "访客登录成功", "boundary.canvas": "画布", "boundary.select_boundary": r(1117), "boundary.selection": "选区", "boundary.max_size": r(1186), "boundary.max_size_error": r(2207), "boundary.max_size_hint": r(1268), "boundary.max_size_placeholder": r(1268), "boundary.no_limit": "不限", "boundary.image_quality": r(2092), "boundary.image_quality_required": r(2170), "boundary.image_quality_range": "范围 1-100", "boundary.preview_main_image": r(2846), "boundary.preview_select": "设为选区", "boundary.preview_alt": "边界预览", "boundary.preview_placeholder": "点击使用当前选区", "boundary.settings": r(2651), "convert widget {0} failed:": r(1256), "document {0} not found": "未找到文档 {0}", "image.document.new": r(520), "image.layer.smart_object": r(480), "layer not found {0}": r(746), "photoshop.invalid_boundary_type": "无效的边界类型: {{type}}", "photoshop.no_active_layer": r(1168), "dialog.image_source.title": r(1442), "dialog.image_source.primary_canvas": r(1262), "dialog.image_source.primary_curlayer": r(2167), "dialog.image_source.canvas_canvas": "以画布边界获取画布", "dialog.image_source.canvas_curlayer": r(803), "dialog.image_source.curlayer_canvas": r(379), "dialog.image_source.curlayer_curlayer": r(1783), "dialog.image_source.local_file": "从磁盘获取", "dialog.simple_source.title": r(1996), "dialog.simple_source.canvas": "画布", "dialog.simple_source.current_layer": r(2497), "dialog.simple_source.local_file": "选择文件", "dialog.simple_source.no_active_layer": r(869), "dialog.simple_source.pick_error": r(2579) }, ri = { "preview.show": "Show Preview ({{count}} images)", "gateway.select_ai_service": r(2007), "provider.select.title": r(2653), "provider.comfyui.description": "Your powerful node-based workflow engine", "provider.replicate.description": r(1933), "provider.runninghub.description": r(2756), "provider.google.description": "OpenAI/Google format API", "task.waiting_upload": r(2553), "task.creating_task": "Creating task...", "task.running_duration": "Running for {{duration}} secs, {{message}}", "task.cancelled": "Task cancelled", "task.cancel_failed": r(2064), "task.default_name": r(1616), "comfy.connect": r(2615), "comfy.load_failed": r(417), "comfy.loading": r(1675), "comfy.channel_connecting": r(2550), "comfy.server_reconnecting": r(1007), "comfy.version_mismatch": r(2759), "comfy.cloud_recommend": r(2792), "comfy.your_workflows": r(2168), "comfy.refresh_workflows": r(2798), "comfy.queue_progress": r(938), "comfy.save": "Save", "comfy.refresh": "Refresh", "comfy.stop_cancel_all": r(1171), "comfy.stop_auto_run": r(1765), "comfy.start_auto_run": r(1507), "comfy.auto_run_status": r(1716), "comfy.run": r(2029), "comfy.back": r(1215), "comfy.uploading": r(1879), "comfy.task.name": r(857), "comfy.error.task_cancelled": r(2809), "comfy.task.processing_progress": r(555), "comfy.help_tooltip": "Tutorial", "comfy.no_workflow_selected": r(2841), "boundary.title": r(2485), "boundary.tooltip": "Area AI reads from; controls max image size", "boundary.current_canvas": r(1524), "boundary.current_layer": r(743), "boundary.current_selection": r(1466), "boundary.set_as_canvas": r(979), "boundary.set_as_layer": r(615), "boundary.set_as_selection": r(1471), "http.404": r(456), "http.401": r(2805), "http.403": r(571), "http.408": "Request timeout (408)", "http.500": r(1762), "http.501": r(1793), "http.502": "Gateway error (502)", "http.503": r(2763), "http.504": r(1428), "http.unknown": "Unknown error ({{code}})", "runninghub.get_apikey": r(865), "runninghub.apikey_placeholder": r(2396), "runninghub.app_id": r(341), "runninghub.webapp_id_placeholder": "Paste WebApp ID here", "runninghub.open_app": r(630), "runninghub.execute": r(2862), "runninghub.running": r(2235), "runninghub.rh_coins": r(1839), "runninghub.current_tasks": "Current Tasks:", "runninghub.help_tooltip": r(1522), "runninghub.stop_all": r(1735), "runninghub.status.waiting": r(2504), "runninghub.status.running": r(1712), "runninghub.status.failed": "Failed", "runninghub.status.success": r(2754), "image.auto_refetch": r(2633), "local_resource.selection.images": "Images", "runninghub.error.get_result_failed": r(1191), "runninghub.error.task_failed": r(354), "runninghub.error.task_incomplete": r(1242), "runninghub.error.account_status_http": "getAccountStatus API failed - HTTP error! status: {{status}}", "runninghub.error.account_status_reason_unknown": r(2681), "runninghub.error.account_status_failed": "getAccountStatus API failed - {{reason}}", "runninghub.error.form_data_http": r(2414), "runninghub.error.form_data_reason_unknown": r(937), "runninghub.error.form_data_failed": r(2877), "runninghub.error.node_info_missing": r(1272), "runninghub.error.run_http": r(1899), "runninghub.error.run_reason_default": r(2897), "runninghub.error.run_failed": "run API failed - {{reason}}", "runninghub.error.status_http": r(1913), "runninghub.error.status_reason_unknown": r(2118), "runninghub.error.status_failed": r(679), "runninghub.error.outputs_http": "outputs API failed - HTTP error! status: {{status}}", "runninghub.error.outputs_failed": "outputs API failed - {{reason}}", "runninghub.task.title": r(2163), "runninghub.error.upload_http": "uploadImage API failed - HTTP error! status: {{status}}", "runninghub.error.upload_reason_unknown": "File upload failed", "runninghub.error.upload_failed": r(2030), "customapi.error.no_image_returned": r(1960), "customapi.error.openai_api": r(759), "customapi.error.input_required": r(1039), "customapi.error.generation_failed": r(563), "customapi.task.name.google": "Google Gemini - Image Generation", "customapi.task.name.openai": r(880), "customapi.error.unsupported_image_input": r(867), "replicate.get_apikey": r(2017), "replicate.apikey_placeholder": r(1447), "replicate.execute": "Execute", "replicate.model_placeholder": r(1139), "replicate.help_tooltip": "Tutorial", "replicate.loading": r(736), "replicate.running": r(2235), "replicate.stop": r(1258), "liblib.get_apikey": r(336), "liblib.execute": r(2862), "common.close": r(544), "common.save": "Save", "common.save_and_run": "Save and run immediately", "common.loading": r(736), "common.error": r(597), "common.error.unknown": r(2816), "common.error.task_creation_aborted": r(1856), "common.error.status_check_aborted": r(1146), "common.error.result_fetch_aborted": r(2700), "common.error.upload_aborted": r(2583), "common.success": "Success", "common.failed": "Failed", "common.generating": r(2659), "common.cancel": r(1811), "common.confirm": r(2147), "common.options": "Options", "common.options_separator": r(1030), "upload_pass.error.unsupported_type": r(445), "upload_pass.error.uploader_missing": r(2387), webviewInForeground: r(2793), webviewInForeground2: r(1302), "auth.login_success": r(2404), "auth.username_label": r(2807), "auth.email_label": "Email: {{email}}", "auth.logout": r(2259), "auth.login_required": r(2101), "image.send.select_position": r(956), "image.send.sending": r(437), "image.layer.new": r(824), "image.layer.current": r(743), "image.layer.fit_to_current": r(2136), "image.layer.fit_to_selection": r(2188), "image.layer.fit_to_canvas": r(2420), "image.shortcut_auth_required": r(2122), "image.shortcut_focus_required": r(2621), "image.get.select_image": r(859), "image.get.entire_canvas": r(1524), "image.get.canvas": r(1706), "image.get.current_layer": r(743), "image.get.current_layer_bounds": r(1420), "image.get.selection_bounds": "Selection bounds only", "image.get.canvas_bounds": "Canvas bounds", "image.crop_by_selection": r(1929), "image.limit_size": "Limit image size", "image.crop.none": r(1118), "image.crop.inpaint": r(974), "image.crop.outpaint": "Outpaint (positive crop)", "image.send_all": r(345), "image.save_all": r(2018), "image.save_current": r(673), "image.delete_current": r(1693), "image.more_actions": "More actions", "image.jump_to_last": r(1201), "image.clear_all": "Clear all", "image.send_to_ps": r(2768), "image.download": r(741), "image.copy": r(817), "image.sending": r(2741), "image.sending_all": "Sending all images...", "mask.get.select_mask": r(1043), "mask.selection": "Selection", "mask.current_layer_bounds": r(365), "mask.all": "All", "mask.selection_exclude": r(1817), "mask.current_layer_exclude": r(757), "mask.empty": r(1849), "widgetable.photoshop.deprecated_node": r(1475), "work_boundary.error.empty_selection_mask": r(2737), "work_boundary.error.primary_resource_missing": "Primary image resource is missing", "work_boundary.error.mask_resource_missing": "Mask resource is missing", "work_boundary.error.mask_apply_empty": "Mask apply returned empty resource", "document {{0}} not found": r(1401), "create document for preview": r(1646), "resize document for preview": r(2297), "create document for sent images": r(1485), "show sent images": "Show sent images", "create layer failed": r(1779), "layer not found {{0}}": r(1664), "layer not found: {{0}}": r(1600), "layer {{0}} is not a group": r(1365), "no linked layer for {{0}}": r(2545), "no first related layer in {{0}}": r(606), "merge group failed": r(1925), "get content of layer {{0}}": r(1093), "get layer info": r(1551), "get_layer_info: layer_identify required": "get_layer_info requires layer_identify", "get pixel of {{0}} failed": r(1288), "get selection failed": "Get selection failed", "invalid name: {{0}}": r(2346), "desire bounds is null": r(1120), "intersect or scaledDesire is null": r(2567), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "select layer": r(2379), "run Photoshop Action": "Run Photoshop Action", "Action {{0}} not found": r(1689), "Action set {{0}} not found": r(1537), "set text to layer": r(1504), "ComfyManager not found, cannot reboot": "Cannot reboot because ComfyManager is missing", "Failed to reboot ComfyUI": r(1855), "image.upload.from_canvas": r(1706), "image.upload.from_curlayer": "Current Layer", "image.upload.from_selection": r(492), "image.upload.from_harddisk": "Disk", "image.upload.clear": r(1392), "image.upload.uploading": r(482), "image.upload.no_images": r(538), "image.upload.error": r(1185), "image.upload.tooltip.alt.crop": "+Alt crop by selection", "image.upload.tooltip.alt.reverse": r(2832), "image.upload.tooltip.image.canvas": "Get image from Canvas", "image.upload.tooltip.image.curlayer": r(2119), "image.upload.tooltip.mask.canvas": r(2321), "image.upload.tooltip.mask.curlayer": r(570), "image.upload.tooltip.mask.selection": r(2685), "image.upload.tooltip.cut_action": r(1275), "image.upload.tooltip.scan_action": r(385), "image.upload.tooltip.autosync.on": r(2300), "image.upload.tooltip.autosync.off": r(2052), "image.upload.tooltip.more_options_hint": r(1488), "image.upload.tooltip.current.canvas": r(1135), "image.upload.tooltip.current.layer": r(1490), "image.upload.tooltip.current.layer_named": r(1027), "image.upload.tooltip.current.file": r(1907), "image.upload.autosync.fetching": r(1469), "image.upload.retry": r(451), "image.pack.local.button": "Local image pack", "image.pack.local.empty": "No images yet", "image.auto_send_enabled": "Auto send enabled", "image.auto_send_disabled": r(427), "image.upload.primary.auto": r(1469), "image.upload.primary.manual": r(1121), "image.upload.primary.cut": "Crop", "image.upload.primary.scan": "Scan", "image.upload.primary.hint": "This node defaults to current layer + mask", "image.upload.primary.hint.line1": r(713), "image.upload.primary.hint.line2": "Main Image", "workflow.output.destination.title": r(2120), "workflow.output.destination.canvas": r(2146), "image.upload.primary.advanced": "Advanced selection", "image.upload.primary.advanced.modify": "Modify", "image.upload.primary.advanced.reset": "Reset", "image.upload.primary.advanced.local_file": r(2489), "image.upload.primary.advanced.content.canvas": r(1706), "image.upload.primary.advanced.content.curlayer": "Current layer", "image.upload.primary.advanced.content.selection": r(492), "image.upload.primary.advanced.boundary.canvas": "Canvas boundary", "image.upload.primary.advanced.boundary.curlayer": r(1286), "image.upload.primary.advanced.boundary.selection": "Selection boundary", "image.upload.primary.advanced.boundary.primary": "Primary boundary", "image.upload.source.file.tooltip": r(513), "image.upload.source.layer.tooltip": r(1170), "image.upload.source.canvas.tooltip": "Use entire canvas", "image.upload.dropHint": r(1627), "image.upload.status.layer.short_named": r(2484), "image.upload.status.layer.short": "Layer", "image.upload.status.file.short": r(2489), "image.upload.status.canvas.short": r(1706), "image.upload.mask.button": r(1943), "image.upload.mask.selection": r(1943), "image.upload.mask.layer": r(2626), "image.upload.remove_slot": r(2039), "image.upload.add_slot": r(739), "video.local.button": r(1110), "video.local.empty": "No videos yet", "video.local.remove": "Remove video", "source.source": r(1501), "source.content": r(2211), "source.boundary": r(1773), "source.mask": r(816), "source.disk": "Disk", "source.remote": r(2668), "source.unknown": r(1845), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": r(1706), "source.current_layer": "CurLayer", "source.selection": r(492), "source.quality_percent": "Quality {{percent}}%", "source.crop.positive": r(1838), "source.crop.negative": r(944), "source.reverse": r(2199), "send_images.create_document": "Create document", "send_images.create_document_failed": r(1873), "photoshop.no_active_document": "No active document", "photoshop.rectangle_coordinates_required": r(1362), "photoshop.create_guide_frame": r(2847), "photoshop.clear_guide_frame": r(1717), "photoshop.invalid_action": r(1679), "photoshop.file_not_found": r(2198), "photoshop.failed_to_open_file_as_document": "Failed to open file as document: {{path}}", "photoshop.invalid_boundary": r(2778), "photoshop.failed_to_open_image_file": r(2426), "photoshop.open_images_from_file": r(2289), "photoshop.failed_to_create_document_from_file": r(1375), "google.field.image_input": "Input Image", "google.field.prompt": r(941), "google.field.batch_count": "Batch Count", "google.field.images_per_batch": "Images Per Batch", "google.status.success": r(2754), "google.status.failed": "Failed", "google.status.generating": "Generating", "google.apikey_placeholder": r(528), "google.get_apikey": r(1250), "google.baseurl_placeholder": "Base URL", "google.help_tooltip": r(918), "google.model_name": r(1432), "google.model_label": r(1399), "google.model_placeholder": r(1003), "google.stop": "Stop", "google.loading": r(736), "google.generating": r(2659), "google.generate": r(1715), "image.auto_toggle": "AUTO", "image.import_as_smartobject": r(1786), "image.import_as_newdoc": r(2856), "image.boundary": r(2254), "image.import_tip": "Hold Shift key to import as new document", "auth.guest_login_success": r(2686), "boundary.canvas": r(1706), "boundary.select_boundary": r(1536), "boundary.selection": r(492), "boundary.max_size": r(420), "boundary.max_size_error": r(1234), "boundary.max_size_hint": r(1799), "boundary.max_size_placeholder": r(1799), "boundary.no_limit": r(1605), "boundary.image_quality": r(1473), "boundary.image_quality_required": r(1878), "boundary.image_quality_range": "Range 1-100", "boundary.preview_main_image": r(1424), "boundary.preview_select": r(1461), "boundary.preview_alt": r(1055), "boundary.preview_placeholder": "Click to use current selection", "boundary.settings": r(1776), "convert widget {0} failed:": "Failed to convert widget {0}:", "document {0} not found": r(2584), "image.document.new": "New Document", "image.layer.smart_object": r(2826), "layer not found {0}": r(352), "photoshop.invalid_boundary_type": r(2875), "photoshop.no_active_layer": r(1390), "dialog.image_source.title": r(2694), "dialog.image_source.primary_canvas": "Fetch canvas with primary boundary", "dialog.image_source.primary_curlayer": r(836), "dialog.image_source.canvas_canvas": "Fetch canvas with canvas boundary", "dialog.image_source.canvas_curlayer": r(1179), "dialog.image_source.curlayer_canvas": r(946), "dialog.image_source.curlayer_curlayer": r(932), "dialog.image_source.local_file": r(1747), "dialog.simple_source.title": r(689), "dialog.simple_source.canvas": "Canvas", "dialog.simple_source.current_layer": "Current Layer", "dialog.simple_source.local_file": "Choose File", "dialog.simple_source.no_active_layer": "No active layer available", "dialog.simple_source.pick_error": r(1519) }, b0 = (o) => typeof o === r(360), Je = () => {
  const o = r;
  let x, t;
  const s = new Promise((e, a) => {
    x = e, t = a;
  });
  return s[o(422)] = x, s[o(943)] = t, s;
}, Mr = (o) => o == null ? "" : "" + o, ai = (o, x, t) => {
  o[r(785)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, si = /###/g, Lr = (o) => o && o[r(1602)](r(1330)) > -1 ? o.replace(si, ".") : o, $r = (o) => !o || b0(o), xx = (o, x, t) => {
  const s = r, e = b0(x) ? x[s(1821)](".") : x;
  let a = 0;
  for (; a < e[s(1726)] - 1; ) {
    if ($r(o)) return {};
    const n = Lr(e[a]);
    !o[n] && t && (o[n] = new t()), Object[s(2250)][s(610)][s(1297)](o, n) ? o = o[n] : o = {}, ++a;
  }
  return $r(o) ? {} : { obj: o, k: Lr(e[a]) };
}, Hr = (o, x, t) => {
  const s = r, { obj: e, k: a } = xx(o, x, Object);
  if (e !== void 0 || x.length === 1) {
    e[a] = t;
    return;
  }
  let n = x[x[s(1726)] - 1], i = x.slice(0, x[s(1726)] - 1), c = xx(o, i, Object);
  for (; c[s(560)] === void 0 && i.length; )
    n = i[i[s(1726)] - 1] + "." + n, i = i[s(483)](0, i[s(1726)] - 1), c = xx(o, i, Object), c != null && c[s(560)] && typeof c.obj[c.k + "." + n] !== s(662) && (c[s(560)] = void 0);
  c[s(560)][c.k + "." + n] = t;
}, ni = (o, x, t, s) => {
  const e = r, { obj: a, k: n } = xx(o, x, Object);
  a[n] = a[n] || [], a[n][e(1072)](t);
}, Rx = (o, x) => {
  const t = r, { obj: s, k: e } = xx(o, x);
  if (s && Object[t(2250)].hasOwnProperty[t(1297)](s, e))
    return s[e];
}, oi = (o, x, t) => {
  const s = Rx(o, t);
  return s !== void 0 ? s : Rx(x, t);
}, $s = (o, x, t) => {
  const s = r;
  for (const e in x)
    e !== s(908) && e !== "constructor" && (e in o ? b0(o[e]) || o[e] instanceof String || b0(x[e]) || x[e] instanceof String ? t && (o[e] = x[e]) : $s(o[e], x[e], t) : o[e] = x[e]);
  return o;
}, Ue = (o) => o[r(521)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, r(1531));
var ii = { "&": r(588), "<": r(2604), ">": r(1320), '"': r(1204), "'": r(1510), "/": r(875) };
const ci = (o) => {
  const x = r;
  return b0(o) ? o[x(521)](/[&<>"'\/]/g, (t) => ii[t]) : o;
};
class ui {
  constructor(x) {
    const t = r;
    this[t(505)] = x, this[t(1577)] = /* @__PURE__ */ new Map(), this[t(2110)] = [];
  }
  getRegExp(x) {
    const t = r, s = this[t(1577)][t(1502)](x);
    if (s !== void 0) return s;
    const e = new RegExp(x);
    return this[t(2110)][t(1726)] === this.capacity && this[t(1577)].delete(this[t(2110)][t(1080)]()), this[t(1577)][t(1019)](x, e), this[t(2110)][t(1072)](x), e;
  }
}
const di = [" ", ",", "?", "!", ";"], li = new ui(20), fi = (o, x, t) => {
  const s = r;
  x = x || "", t = t || "";
  const e = di[s(2783)]((i) => x[s(1602)](i) < 0 && t[s(1602)](i) < 0);
  if (e[s(1726)] === 0) return !0;
  const a = li[s(2219)]("(" + e[s(2086)]((i) => i === "?" ? "\\?" : i)[s(2131)]("|") + ")");
  let n = !a[s(1723)](o);
  if (!n) {
    const i = o.indexOf(t);
    i > 0 && !a[s(1723)](o[s(2405)](0, i)) && (n = !0);
  }
  return n;
}, Kt = (o, x, t = ".") => {
  const s = r;
  if (!o) return;
  if (o[x])
    return Object[s(2250)].hasOwnProperty[s(1297)](o, x) ? o[x] : void 0;
  const e = x[s(1821)](t);
  let a = o;
  for (let n = 0; n < e[s(1726)]; ) {
    if (!a || typeof a !== s(1694)) return;
    let i, c = "";
    for (let u = n; u < e[s(1726)]; ++u)
      if (u !== n && (c += t), c += e[u], i = a[c], i !== void 0) {
        if ([s(360), s(1455), s(2788)].indexOf(typeof i) > -1 && u < e[s(1726)] - 1) continue;
        n += u - n + 1;
        break;
      }
    a = i;
  }
  return a;
}, sx = (o) => o == null ? void 0 : o.replace("_", "-"), hi = { type: r(2413), log(o) {
  const x = r;
  this[x(1635)](x(429), o);
}, warn(o) {
  this[r(1635)]("warn", o);
}, error(o) {
  const x = r;
  this[x(1635)](x(795), o);
}, output(o, x) {
  var s, e;
  const t = r;
  (e = (s = console == null ? void 0 : console[o]) == null ? void 0 : s[t(847)]) == null || e.call(s, console, x);
} };
class Cx {
  constructor(x, t = {}) {
    this[r(1106)](x, t);
  }
  [r(1106)](x, t = {}) {
    const s = r;
    this[s(412)] = t[s(412)] || "i18next:", this[s(2413)] = x || hi, this[s(2747)] = t, this.debug = t[s(1311)];
  }
  [r(429)](...x) {
    const t = r;
    return this.forward(x, t(429), "", !0);
  }
  [r(2850)](...x) {
    const t = r;
    return this.forward(x, t(2850), "", !0);
  }
  error(...x) {
    const t = r;
    return this[t(508)](x, t(795), "");
  }
  deprecate(...x) {
    return this[r(508)](x, "warn", "WARNING DEPRECATED: ", !0);
  }
  [r(508)](x, t, s, e) {
    const a = r;
    return e && !this[a(1311)] ? null : (b0(x[0]) && (x[0] = "" + s + this.prefix + " " + x[0]), this[a(2413)][t](x));
  }
  [r(800)](x) {
    const t = r;
    return new Cx(this.logger, { prefix: this[t(412)] + ":" + x + ":", ...this[t(2747)] });
  }
  [r(1887)](x) {
    const t = r;
    return x = x || this[t(2747)], x[t(412)] = x[t(412)] || this[t(412)], new Cx(this[t(2413)], x);
  }
}
var le = new Cx();
class Tx {
  constructor() {
    const x = r;
    this[x(2521)] = {};
  }
  on(x, t) {
    const s = r;
    return x[s(1821)](" ")[s(785)]((e) => {
      const a = s;
      this[a(2521)][e] || (this.observers[e] = /* @__PURE__ */ new Map());
      const n = this[a(2521)][e].get(t) || 0;
      this[a(2521)][e][a(1019)](t, n + 1);
    }), this;
  }
  [r(722)](x, t) {
    const s = r;
    if (this.observers[x]) {
      if (!t) {
        delete this[s(2521)][x];
        return;
      }
      this.observers[x].delete(t);
    }
  }
  [r(1291)](x, ...t) {
    const s = r;
    this.observers[x] && Array[s(1082)](this[s(2521)][x].entries())[s(785)](([a, n]) => {
      for (let i = 0; i < n; i++)
        a(...t);
    }), this[s(2521)]["*"] && Array[s(1082)](this[s(2521)]["*"][s(2735)]())[s(785)](([a, n]) => {
      for (let i = 0; i < n; i++)
        a.apply(a, [x, ...t]);
    });
  }
}
class zr extends Tx {
  constructor(x, t = { ns: [r(1731)], defaultNS: "translation" }) {
    const s = r;
    super(), this.data = x || {}, this[s(2747)] = t, this[s(2747)][s(891)] === void 0 && (this[s(2747)].keySeparator = "."), this[s(2747)][s(793)] === void 0 && (this[s(2747)][s(793)] = !0);
  }
  [r(658)](x) {
    const t = r;
    this[t(2747)].ns[t(1602)](x) < 0 && this.options.ns[t(1072)](x);
  }
  [r(2264)](x) {
    const t = r, s = this.options.ns[t(1602)](x);
    s > -1 && this.options.ns[t(1719)](s, 1);
  }
  [r(861)](x, t, s, e = {}) {
    var d, l;
    const a = r, n = e.keySeparator !== void 0 ? e[a(891)] : this.options[a(891)], i = e[a(793)] !== void 0 ? e[a(793)] : this[a(2747)][a(793)];
    let c;
    x[a(1602)](".") > -1 ? c = x[a(1821)](".") : (c = [x, t], s && (Array[a(344)](s) ? c[a(1072)](...s) : b0(s) && n ? c[a(1072)](...s[a(1821)](n)) : c[a(1072)](s)));
    const u = Rx(this[a(2171)], c);
    return !u && !t && !s && x.indexOf(".") > -1 && (x = c[0], t = c[1], s = c[a(483)](2).join(".")), u || !i || !b0(s) ? u : Kt((l = (d = this.data) == null ? void 0 : d[x]) == null ? void 0 : l[t], s, n);
  }
  [r(994)](x, t, s, e, a = { silent: !1 }) {
    const n = r, i = a[n(891)] !== void 0 ? a.keySeparator : this.options.keySeparator;
    let c = [x, t];
    s && (c = c[n(1100)](i ? s.split(i) : s)), x.indexOf(".") > -1 && (c = x.split("."), e = t, t = c[1]), this.addNamespaces(t), Hr(this[n(2171)], c, e), a.silent || this.emit("added", x, t, s, e);
  }
  addResources(x, t, s, e = { silent: !1 }) {
    const a = r;
    for (const n in s)
      (b0(s[n]) || Array[a(344)](s[n])) && this[a(994)](x, t, n, s[n], { silent: !0 });
    e[a(728)] || this[a(1291)](a(2085), x, t, s);
  }
  [r(585)](x, t, s, e, a, n = { silent: !1, skipCopy: !1 }) {
    const i = r;
    let c = [x, t];
    x[i(1602)](".") > -1 && (c = x[i(1821)]("."), e = s, s = t, t = c[1]), this[i(658)](t);
    let u = Rx(this[i(2171)], c) || {};
    n[i(1785)] || (s = JSON.parse(JSON.stringify(s))), e ? $s(u, s, a) : u = { ...u, ...s }, Hr(this[i(2171)], c, u), n[i(728)] || this[i(1291)](i(2085), x, t, s);
  }
  [r(1036)](x, t) {
    const s = r;
    this[s(1916)](x, t) && delete this[s(2171)][x][t], this[s(2264)](t), this.emit(s(418), x, t);
  }
  [r(1916)](x, t) {
    return this.getResource(x, t) !== void 0;
  }
  getResourceBundle(x, t) {
    const s = r;
    return t || (t = this.options[s(619)]), this[s(861)](x, t);
  }
  [r(2665)](x) {
    return this[r(2171)][x];
  }
  hasLanguageSomeTranslations(x) {
    const t = r, s = this[t(2665)](x);
    return !!(s && Object[t(2023)](s) || [])[t(1379)]((a) => s[a] && Object[t(2023)](s[a])[t(1726)] > 0);
  }
  [r(1563)]() {
    return this[r(2171)];
  }
}
var Hs = { processors: {}, addPostProcessor(o) {
  const x = r;
  this[x(2804)][o[x(707)]] = o;
}, handle(o, x, t, s, e) {
  const a = r;
  return o[a(785)]((n) => {
    var c;
    const i = a;
    x = ((c = this[i(2804)][n]) == null ? void 0 : c[i(2021)](x, t, s, e)) ?? x;
  }), x;
} };
const Ur = {}, Vr = (o) => !b0(o) && typeof o != "boolean" && typeof o !== r(1455);
class Fx extends Tx {
  constructor(x, t = {}) {
    const s = r;
    super(), ai(["resourceStore", s(1246), s(2248), s(667), s(2280), s(602), s(2852)], x, this), this[s(2747)] = t, this[s(2747)].keySeparator === void 0 && (this[s(2747)][s(891)] = "."), this[s(2413)] = le[s(800)](s(1181));
  }
  changeLanguage(x) {
    x && (this.language = x);
  }
  [r(2022)](x, t = { interpolation: {} }) {
    const s = r, e = { ...t };
    if (x == null) return !1;
    const a = this.resolve(x, e);
    return (a == null ? void 0 : a[s(655)]) !== void 0;
  }
  [r(426)](x, t) {
    const s = r;
    let e = t[s(915)] !== void 0 ? t.nsSeparator : this[s(2747)].nsSeparator;
    e === void 0 && (e = ":");
    const a = t[s(891)] !== void 0 ? t.keySeparator : this[s(2747)][s(891)];
    let n = t.ns || this[s(2747)].defaultNS || [];
    const i = e && x[s(1602)](e) > -1, c = !this.options.userDefinedKeySeparator && !t.keySeparator && !this[s(2747)][s(1850)] && !t[s(915)] && !fi(x, e, a);
    if (i && !c) {
      const u = x[s(1074)](this[s(667)][s(1283)]);
      if (u && u[s(1726)] > 0) return { key: x, namespaces: b0(n) ? [n] : n };
      const d = x[s(1821)](e);
      (e !== a || e === a && this.options.ns[s(1602)](d[0]) > -1) && (n = d[s(1080)]()), x = d[s(2131)](a);
    }
    return { key: x, namespaces: b0(n) ? [n] : n };
  }
  [r(2917)](x, t, s) {
    const e = r;
    let a = typeof t === e(1694) ? { ...t } : t;
    if (typeof a !== e(1694) && this[e(2747)].overloadTranslationOptionHandler && (a = this[e(2747)][e(2353)](arguments)), typeof options === e(1694) && (a = { ...a }), a || (a = {}), x == null) return "";
    Array[e(344)](x) || (x = [String(x)]);
    const n = a.returnDetails !== void 0 ? a[e(1478)] : this[e(2747)].returnDetails, i = a[e(891)] !== void 0 ? a[e(891)] : this[e(2747)].keySeparator, { key: c, namespaces: u } = this[e(426)](x[x[e(1726)] - 1], a), d = u[u[e(1726)] - 1];
    let l = a[e(915)] !== void 0 ? a[e(915)] : this[e(2747)].nsSeparator;
    l === void 0 && (l = ":");
    const f = a[e(2359)] || this.language, b = a.appendNamespaceToCIMode || this[e(2747)].appendNamespaceToCIMode;
    if ((f == null ? void 0 : f[e(1132)]()) === "cimode")
      return b ? n ? { res: "" + d + l + c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: d, usedParams: this[e(1429)](a) } : "" + d + l + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: d, usedParams: this[e(1429)](a) } : c;
    const h = this[e(422)](x, a);
    let m = h == null ? void 0 : h[e(655)];
    const v = (h == null ? void 0 : h[e(2035)]) || c, S = (h == null ? void 0 : h[e(1408)]) || c, P = [e(2677), "[object Function]", e(2286)], F = a.joinArrays !== void 0 ? a[e(1260)] : this[e(2747)][e(1260)], A = !this[e(602)] || this[e(602)][e(698)], R = a[e(2302)] !== void 0 && !b0(a[e(2302)]), E = Fx[e(2024)](a), C = R ? this[e(2248)][e(1324)](f, a[e(2302)], a) : "", D = a.ordinal && R ? this.pluralResolver.getSuffix(f, a[e(2302)], { ordinal: !1 }) : "", j = R && !a[e(703)] && a[e(2302)] === 0, M = j && a["defaultValue" + this[e(2747)][e(1415)] + e(2466)] || a[e(335) + C] || a[e(335) + D] || a[e(335)];
    let N = m;
    A && !m && E && (N = M);
    const q = Vr(N), U = Object.prototype[e(1860)][e(847)](N);
    if (A && N && q && P[e(1602)](U) < 0 && !(b0(F) && Array[e(344)](N))) {
      if (!a.returnObjects && !this[e(2747)][e(1547)]) {
        !this[e(2747)][e(504)] && this[e(2413)][e(2850)](e(485));
        const $ = this[e(2747)][e(504)] ? this[e(2747)][e(504)](v, N, { ...a, ns: u }) : "key '" + c + " (" + this[e(487)] + e(2757);
        return n ? (h[e(655)] = $, h[e(2709)] = this[e(1429)](a), h) : $;
      }
      if (i) {
        const $ = Array[e(344)](N), V = $ ? [] : {}, G = $ ? S : v;
        for (const c0 in N)
          if (Object.prototype.hasOwnProperty.call(N, c0)) {
            const u0 = "" + G + i + c0;
            E && !m ? V[c0] = this[e(2917)](u0, { ...a, defaultValue: Vr(M) ? M[c0] : void 0, joinArrays: !1, ns: u }) : V[c0] = this[e(2917)](u0, { ...a, joinArrays: !1, ns: u }), V[c0] === u0 && (V[c0] = N[c0]);
          }
        m = V;
      }
    } else if (A && b0(F) && Array[e(344)](m))
      m = m[e(2131)](F), m && (m = this[e(430)](m, x, a, s));
    else {
      let $ = !1, V = !1;
      !this[e(633)](m) && E && ($ = !0, m = M), !this[e(633)](m) && (V = !0, m = c);
      const G = a.missingKeyNoValueFallbackToKey || this.options[e(1836)], c0 = G && V ? void 0 : m, u0 = E && M !== m && this[e(2747)][e(2206)];
      if (V || $ || u0) {
        if (this[e(2413)][e(429)](e(u0 ? 828 : 2196), f, d, c, u0 ? M : m), i) {
          const k0 = this.resolve(c, { ...a, keySeparator: !1 });
          k0 && k0[e(655)] && this[e(2413)][e(2850)](e(962));
        }
        let l0 = [];
        const o0 = this[e(1246)][e(1451)](this.options[e(1984)], a[e(2359)] || this[e(487)]);
        if (this.options[e(2873)] === e(509) && o0 && o0[0]) for (let k0 = 0; k0 < o0[e(1726)]; k0++)
          l0.push(o0[k0]);
        else this.options[e(2873)] === e(1348) ? l0 = this[e(1246)][e(621)](a[e(2359)] || this[e(487)]) : l0.push(a[e(2359)] || this.language);
        const f0 = (k0, y0, M0) => {
          var O;
          const N0 = e, J0 = E && M0 !== m ? M0 : c0;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(k0, d, y0, J0, u0, a) : (O = this[N0(2280)]) != null && O.saveMissing && this[N0(2280)][N0(1308)](k0, d, y0, J0, u0, a), this[N0(1291)](N0(2196), k0, d, y0, m);
        };
        this.options[e(1308)] && (this[e(2747)][e(2164)] && R ? l0.forEach((k0) => {
          const y0 = e, M0 = this[y0(2248)].getSuffixes(k0, a);
          j && a["defaultValue" + this.options[y0(1415)] + y0(2466)] && M0[y0(1602)](this[y0(2747)][y0(1415)] + y0(2466)) < 0 && M0.push(this[y0(2747)][y0(1415)] + y0(2466)), M0[y0(785)]((N0) => {
            const J0 = y0;
            f0([k0], c + N0, a[J0(335) + N0] || M);
          });
        }) : f0(l0, c, M));
      }
      m = this[e(430)](m, x, a, h, s), V && m === c && this[e(2747)][e(2057)] && (m = "" + d + l + c), (V || $) && this.options[e(1629)] && (m = this[e(2747)][e(1629)](this[e(2747)][e(2057)] ? "" + d + l + c : c, $ ? m : void 0, a));
    }
    return n ? (h.res = m, h[e(2709)] = this.getUsedParamsDetails(a), h) : m;
  }
  [r(430)](x, t, s, e, a) {
    var u, d;
    const n = r;
    if ((u = this[n(602)]) != null && u[n(1724)]) x = this[n(602)][n(1724)](x, { ...this[n(2747)][n(530)][n(1812)], ...s }, s[n(2359)] || this[n(487)] || e.usedLng, e[n(2316)], e[n(2035)], { resolved: e });
    else if (!s[n(2581)]) {
      s[n(530)] && this[n(667)].init({ ...s, interpolation: { ...this[n(2747)][n(530)], ...s[n(530)] } });
      const l = b0(x) && (((d = s == null ? void 0 : s[n(530)]) == null ? void 0 : d[n(402)]) !== void 0 ? s[n(530)].skipOnVariables : this.options[n(530)][n(402)]);
      let f;
      if (l) {
        const h = x[n(1074)](this[n(667)][n(1283)]);
        f = h && h.length;
      }
      let b = s[n(521)] && !b0(s[n(521)]) ? s[n(521)] : s;
      if (this[n(2747)][n(530)][n(1812)] && (b = { ...this[n(2747)][n(530)].defaultVariables, ...b }), x = this[n(667)].interpolate(x, b, s[n(2359)] || this[n(487)] || e.usedLng, s), l) {
        const h = x[n(1074)](this.interpolator.nestingRegexp), m = h && h.length;
        f < m && (s[n(395)] = !1);
      }
      !s[n(2359)] && e && e[n(655)] && (s[n(2359)] = this[n(487)] || e.usedLng), s[n(395)] !== !1 && (x = this[n(667)].nest(x, (...h) => {
        const m = n;
        return (a == null ? void 0 : a[0]) === h[0] && !s[m(2237)] ? (this.logger[m(2850)](m(2108) + h[0] + m(1944) + t[0]), null) : this.translate(...h, t);
      }, s)), s.interpolation && this[n(667)][n(2098)]();
    }
    const i = s[n(2428)] || this[n(2747)][n(2428)], c = b0(i) ? [i] : i;
    return x != null && (c != null && c[n(1726)]) && s.applyPostProcessor !== !1 && (x = Hs[n(1868)](c, x, t, this[n(2747)] && this.options[n(1862)] ? { i18nResolved: { ...e, usedParams: this[n(1429)](s) }, ...s } : s, this)), x;
  }
  [r(422)](x, t = {}) {
    const s = r;
    let e, a, n, i, c;
    return b0(x) && (x = [x]), x[s(785)]((u) => {
      const d = s;
      if (this[d(633)](e)) return;
      const l = this[d(426)](u, t), f = l[d(2444)];
      a = f;
      let b = l.namespaces;
      this[d(2747)][d(2812)] && (b = b[d(1100)](this[d(2747)][d(2812)]));
      const h = t.count !== void 0 && !b0(t[d(2302)]), m = h && !t[d(703)] && t[d(2302)] === 0, v = t[d(2237)] !== void 0 && (b0(t.context) || typeof t[d(2237)] === d(1455)) && t[d(2237)] !== "", S = t[d(2614)] ? t[d(2614)] : this[d(1246)].toResolveHierarchy(t[d(2359)] || this.language, t[d(1984)]);
      b[d(785)]((P) => {
        var A, R;
        const F = d;
        this[F(633)](e) || (c = P, !Ur[S[0] + "-" + P] && ((A = this[F(2852)]) != null && A.hasLoadedNamespace) && !((R = this[F(2852)]) != null && R[F(2398)](c)) && (Ur[S[0] + "-" + P] = !0, this.logger[F(2850)]('key "' + a + F(939) + S[F(2131)](", ") + F(1161) + c + '" was not yet loaded', F(355))), S[F(785)]((E) => {
          var M;
          const C = F;
          if (this[C(633)](e)) return;
          i = E;
          const D = [f];
          if ((M = this[C(602)]) != null && M[C(1891)]) this[C(602)].addLookupKeys(D, f, E, P, t);
          else {
            let N;
            h && (N = this.pluralResolver[C(1324)](E, t[C(2302)], t));
            const q = this[C(2747)][C(1415)] + C(2466), U = this[C(2747)][C(1415)] + "ordinal" + this[C(2747)][C(1415)];
            if (h && (D[C(1072)](f + N), t[C(703)] && N[C(1602)](U) === 0 && D[C(1072)](f + N[C(521)](U, this[C(2747)][C(1415)])), m && D.push(f + q)), v) {
              const $ = "" + f + this[C(2747)][C(2374)] + t[C(2237)];
              D[C(1072)]($), h && (D[C(1072)]($ + N), t[C(703)] && N.indexOf(U) === 0 && D.push($ + N[C(521)](U, this[C(2747)].pluralSeparator)), m && D[C(1072)]($ + q));
            }
          }
          let j;
          for (; j = D.pop(); )
            !this[C(633)](e) && (n = j, e = this[C(861)](E, P, j, t));
        }));
      });
    }), { res: e, usedKey: a, exactUsedKey: n, usedLng: i, usedNS: c };
  }
  [r(633)](x) {
    const t = r;
    return x !== void 0 && !(!this[t(2747)].returnNull && x === null) && !(!this.options[t(1847)] && x === "");
  }
  getResource(x, t, s, e = {}) {
    var n;
    const a = r;
    return (n = this[a(602)]) != null && n[a(861)] ? this[a(602)][a(861)](x, t, s, e) : this[a(2539)].getResource(x, t, s, e);
  }
  [r(1429)](x = {}) {
    const t = r, s = ["defaultValue", t(703), t(2237), t(521), t(2359), t(2614), "fallbackLng", "ns", t(891), t(915), t(1547), "returnDetails", t(1260), t(2428), t(530)], e = x[t(521)] && !b0(x[t(521)]);
    let a = e ? x.replace : x;
    if (e && typeof x[t(2302)] !== t(662) && (a[t(2302)] = x[t(2302)]), this[t(2747)][t(530)][t(1812)] && (a = { ...this[t(2747)][t(530)][t(1812)], ...a }), !e) {
      a = { ...a };
      for (const n of s)
        delete a[n];
    }
    return a;
  }
  static [r(2024)](x) {
    const t = r, s = "defaultValue";
    for (const e in x)
      if (Object[t(2250)][t(610)][t(1297)](x, e) && s === e[t(2405)](0, s[t(1726)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Wr {
  constructor(x) {
    const t = r;
    this[t(2747)] = x, this.supportedLngs = this[t(2747)][t(2107)] || !1, this[t(2413)] = le[t(800)](t(1246));
  }
  [r(1312)](x) {
    const t = r;
    if (x = sx(x), !x || x[t(1602)]("-") < 0) return null;
    const s = x[t(1821)]("-");
    return s.length === 2 || (s[t(435)](), s[s[t(1726)] - 1][t(1132)]() === "x") ? null : this.formatLanguageCode(s[t(2131)]("-"));
  }
  getLanguagePartFromCode(x) {
    const t = r;
    if (x = sx(x), !x || x[t(1602)]("-") < 0) return x;
    const s = x[t(1821)]("-");
    return this[t(2267)](s[0]);
  }
  [r(2267)](x) {
    const t = r;
    if (b0(x) && x[t(1602)]("-") > -1) {
      let s;
      try {
        s = Intl.getCanonicalLocales(x)[0];
      } catch {
      }
      return s && this[t(2747)][t(1751)] && (s = s[t(1132)]()), s || (this[t(2747)][t(1751)] ? x[t(1132)]() : x);
    }
    return this[t(2747)][t(1044)] || this.options.lowerCaseLng ? x[t(1132)]() : x;
  }
  isSupportedCode(x) {
    const t = r;
    return (this.options[t(2327)] === "languageOnly" || this[t(2747)][t(876)]) && (x = this[t(2366)](x)), !this.supportedLngs || !this[t(2107)].length || this[t(2107)][t(1602)](x) > -1;
  }
  [r(1840)](x) {
    const t = r;
    if (!x) return null;
    let s;
    return x[t(785)]((e) => {
      const a = t;
      if (s) return;
      const n = this[a(2267)](e);
      (!this[a(2747)][a(2107)] || this.isSupportedCode(n)) && (s = n);
    }), !s && this[t(2747)][t(2107)] && x[t(785)]((e) => {
      const a = t;
      if (s) return;
      const n = this.getScriptPartFromCode(e);
      if (this[a(1285)](n)) return s = n;
      const i = this.getLanguagePartFromCode(e);
      if (this.isSupportedCode(i)) return s = i;
      s = this[a(2747)][a(2107)].find((c) => {
        const u = a;
        if (c === i) return c;
        if (!(c[u(1602)]("-") < 0 && i[u(1602)]("-") < 0) && (c[u(1602)]("-") > 0 && i[u(1602)]("-") < 0 && c[u(2405)](0, c[u(1602)]("-")) === i || c.indexOf(i) === 0 && i[u(1726)] > 1))
          return c;
      });
    }), s || (s = this[t(1451)](this.options[t(1984)])[0]), s;
  }
  [r(1451)](x, t) {
    const s = r;
    if (!x) return [];
    if (typeof x === s(975) && (x = x(t)), b0(x) && (x = [x]), Array[s(344)](x)) return x;
    if (!t) return x.default || [];
    let e = x[t];
    return e || (e = x[this[s(1312)](t)]), e || (e = x[this[s(2267)](t)]), e || (e = x[this[s(2366)](t)]), e || (e = x[s(1200)]), e || [];
  }
  [r(621)](x, t) {
    const s = r, e = this.getFallbackCodes((t === !1 ? [] : t) || this[s(2747)][s(1984)] || [], x), a = [], n = (i) => {
      const c = s;
      i && (this[c(1285)](i) ? a[c(1072)](i) : this.logger[c(2850)](c(1369) + i));
    };
    return b0(x) && (x.indexOf("-") > -1 || x[s(1602)]("_") > -1) ? (this[s(2747)][s(2327)] !== s(1237) && n(this.formatLanguageCode(x)), this[s(2747)][s(2327)] !== s(1237) && this[s(2747)][s(2327)] !== s(1261) && n(this[s(1312)](x)), this[s(2747)][s(2327)] !== s(1261) && n(this.getLanguagePartFromCode(x))) : b0(x) && n(this[s(2267)](x)), e[s(785)]((i) => {
      a[s(1602)](i) < 0 && n(this.formatLanguageCode(i));
    }), a;
  }
}
const Zr = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Br = { select: (o) => r(o === 1 ? 1373 : 1574), resolvedOptions: () => ({ pluralCategories: [r(1373), "other"] }) };
class pi {
  constructor(x, t = {}) {
    const s = r;
    this[s(1246)] = x, this[s(2747)] = t, this.logger = le[s(800)](s(2248)), this[s(1854)] = {};
  }
  [r(1345)](x, t) {
    const s = r;
    this[s(1202)][x] = t;
  }
  clearCache() {
    const x = r;
    this[x(1854)] = {};
  }
  [r(1210)](x, t = {}) {
    const s = r, e = sx(x === s(2493) ? "en" : x), a = t[s(703)] ? s(703) : s(1500), n = JSON.stringify({ cleanedCode: e, type: a });
    if (n in this.pluralRulesCache) return this[s(1854)][n];
    let i;
    try {
      i = new Intl[s(1832)](e, { type: a });
    } catch {
      if (!Intl) return this.logger[s(795)](s(2008)), Br;
      if (!x[s(1074)](/-|_/)) return Br;
      const u = this[s(1246)].getLanguagePartFromCode(x);
      i = this[s(1210)](u, t);
    }
    return this[s(1854)][n] = i, i;
  }
  [r(2866)](x, t = {}) {
    const s = r;
    let e = this.getRule(x, t);
    return e || (e = this[s(1210)](s(2493), t)), (e == null ? void 0 : e[s(2549)]().pluralCategories[s(1726)]) > 1;
  }
  getPluralFormsOfKey(x, t, s = {}) {
    const e = r;
    return this[e(1209)](x, s)[e(2086)]((a) => "" + t + a);
  }
  [r(1209)](x, t = {}) {
    const s = r;
    let e = this[s(1210)](x, t);
    return e || (e = this[s(1210)](s(2493), t)), e ? e.resolvedOptions()[s(2158)][s(1240)]((a, n) => Zr[a] - Zr[n]).map((a) => "" + this[s(2747)][s(2666)] + (t[s(703)] ? s(703) + this.options[s(2666)] : "") + a) : [];
  }
  getSuffix(x, t, s = {}) {
    const e = r, a = this[e(1210)](x, s);
    return a ? "" + this[e(2747)][e(2666)] + (s[e(703)] ? e(703) + this[e(2747)].prepend : "") + a[e(1068)](t) : (this[e(2413)][e(2850)]("no plural rule found for: " + x), this[e(1324)](e(2493), t, s));
  }
}
const Kr = (o, x, t, s = ".", e = !0) => {
  let a = oi(o, x, t);
  return !a && e && b0(t) && (a = Kt(o, t, s), a === void 0 && (a = Kt(x, t, s))), a;
}, Bx = (o) => o[r(521)](/\$/g, "$$$$");
class mi {
  constructor(x = {}) {
    var s;
    const t = r;
    this[t(2413)] = le[t(800)](t(667)), this[t(2747)] = x, this[t(839)] = ((s = x == null ? void 0 : x.interpolation) == null ? void 0 : s[t(839)]) || ((e) => e), this[t(1106)](x);
  }
  init(x = {}) {
    const t = r;
    x[t(530)] || (x[t(530)] = { escapeValue: !0 });
    const { escape: s, escapeValue: e, useRawValueToEscape: a, prefix: n, prefixEscaped: i, suffix: c, suffixEscaped: u, formatSeparator: d, unescapeSuffix: l, unescapePrefix: f, nestingPrefix: b, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: v, nestingOptionsSeparator: S, maxReplaces: P, alwaysFormat: F } = x[t(530)];
    this[t(893)] = s !== void 0 ? s : ci, this[t(2099)] = e !== void 0 ? e : !0, this[t(911)] = a !== void 0 ? a : !1, this[t(412)] = n ? Ue(n) : i || "{{", this[t(525)] = c ? Ue(c) : u || "}}", this[t(2784)] = d || ",", this[t(1885)] = l ? "" : f || "-", this[t(574)] = this[t(1885)] ? "" : l || "", this[t(2155)] = b ? Ue(b) : h || Ue("$t("), this[t(935)] = m ? Ue(m) : v || Ue(")"), this[t(733)] = S || ",", this[t(1909)] = P || 1e3, this[t(1673)] = F !== void 0 ? F : !1, this[t(390)]();
  }
  [r(2098)]() {
    const x = r;
    this[x(2747)] && this[x(1106)](this[x(2747)]);
  }
  [r(390)]() {
    const x = r, t = (s, e) => {
      const a = B;
      return (s == null ? void 0 : s[a(2752)]) === e ? (s[a(1274)] = 0, s) : new RegExp(e, "g");
    };
    this.regexp = t(this[x(2628)], this[x(412)] + x(680) + this[x(525)]), this[x(2782)] = t(this[x(2782)], "" + this[x(412)] + this[x(1885)] + x(680) + this[x(574)] + this[x(525)]), this[x(1283)] = t(this[x(1283)], this[x(2155)] + x(680) + this[x(935)]);
  }
  [r(1050)](x, t, s, e) {
    var h;
    const a = r;
    let n, i, c;
    const u = this.options && this[a(2747)][a(530)] && this[a(2747)][a(530)].defaultVariables || {}, d = (m) => {
      const v = a;
      if (m[v(1602)](this[v(2784)]) < 0) {
        const A = Kr(t, u, m, this.options[v(891)], this.options[v(793)]);
        return this[v(1673)] ? this[v(839)](A, void 0, s, { ...e, ...t, interpolationkey: m }) : A;
      }
      const S = m[v(1821)](this[v(2784)]), P = S.shift()[v(425)](), F = S[v(2131)](this[v(2784)])[v(425)]();
      return this[v(839)](Kr(t, u, P, this[v(2747)].keySeparator, this[v(2747)][v(793)]), F, s, { ...e, ...t, interpolationkey: P });
    };
    this[a(390)]();
    const l = (e == null ? void 0 : e.missingInterpolationHandler) || this[a(2747)][a(1870)], f = ((h = e == null ? void 0 : e.interpolation) == null ? void 0 : h[a(402)]) !== void 0 ? e[a(530)][a(402)] : this[a(2747)][a(530)].skipOnVariables;
    return [{ regex: this.regexpUnescape, safeValue: (m) => Bx(m) }, { regex: this[a(2628)], safeValue: (m) => this.escapeValue ? Bx(this.escape(m)) : Bx(m) }][a(785)]((m) => {
      const v = a;
      for (c = 0; n = m[v(463)][v(398)](x); ) {
        const S = n[1].trim();
        if (i = d(S), i === void 0)
          if (typeof l === v(975)) {
            const F = l(x, n, e);
            i = b0(F) ? F : "";
          } else if (e && Object[v(2250)][v(610)][v(1297)](e, S)) i = "";
          else if (f) {
            i = n[0];
            continue;
          } else this.logger[v(2850)](v(978) + S + v(1126) + x), i = "";
        else !b0(i) && !this[v(911)] && (i = Mr(i));
        const P = m[v(1778)](i);
        if (x = x.replace(n[0], P), f ? (m[v(463)][v(1274)] += i[v(1726)], m[v(463)][v(1274)] -= n[0][v(1726)]) : m.regex[v(1274)] = 0, c++, c >= this[v(1909)]) break;
      }
    }), x;
  }
  nest(x, t, s = {}) {
    const e = r;
    let a, n, i;
    const c = (u, d) => {
      const l = B, f = this[l(733)];
      if (u[l(1602)](f) < 0) return u;
      const b = u[l(1821)](new RegExp(f + "[ ]*{"));
      let h = "{" + b[1];
      u = b[0], h = this[l(1050)](h, i);
      const m = h.match(/'/g), v = h[l(1074)](/"/g);
      (((m == null ? void 0 : m[l(1726)]) ?? 0) % 2 === 0 && !v || v.length % 2 !== 0) && (h = h[l(521)](/'/g, '"'));
      try {
        i = JSON.parse(h), d && (i = { ...d, ...i });
      } catch (S) {
        return this[l(2413)][l(2850)](l(1667) + u, S), "" + u + f + h;
      }
      return i[l(335)] && i.defaultValue[l(1602)](this.prefix) > -1 && delete i[l(335)], u;
    };
    for (; a = this[e(1283)].exec(x); ) {
      let u = [];
      i = { ...s }, i = i[e(521)] && !b0(i[e(521)]) ? i[e(521)] : i, i[e(694)] = !1, delete i[e(335)];
      let d = !1;
      if (a[0][e(1602)](this[e(2784)]) !== -1 && !/{.*}/[e(1723)](a[1])) {
        const l = a[1][e(1821)](this[e(2784)])[e(2086)]((f) => f[e(425)]());
        a[1] = l[e(1080)](), u = l, d = !0;
      }
      if (n = t(c[e(1297)](this, a[1].trim(), i), i), n && a[0] === x && !b0(n)) return n;
      b0(n) || (n = Mr(n)), !n && (this[e(2413)][e(2850)](e(1398) + a[1] + e(1281) + x), n = ""), d && (n = u[e(2568)]((l, f) => this[e(839)](l, f, s[e(2359)], { ...s, interpolationkey: a[1][e(425)]() }), n[e(425)]())), x = x[e(521)](a[0], n), this[e(2628)][e(1274)] = 0;
    }
    return x;
  }
}
const bi = (o) => {
  const x = r;
  let t = o[x(1132)]()[x(425)]();
  const s = {};
  if (o[x(1602)]("(") > -1) {
    const e = o.split("(");
    t = e[0][x(1132)]()[x(425)]();
    const a = e[1][x(2405)](0, e[1][x(1726)] - 1);
    t === x(968) && a[x(1602)](":") < 0 ? s[x(968)] || (s[x(968)] = a[x(425)]()) : t === "relativetime" && a[x(1602)](":") < 0 ? s.range || (s.range = a[x(425)]()) : a[x(1821)](";")[x(785)]((i) => {
      const c = x;
      if (i) {
        const [u, ...d] = i[c(1821)](":"), l = d[c(2131)](":")[c(425)]().replace(/^'+|'+$/g, ""), f = u[c(425)]();
        s[f] || (s[f] = l), l === c(2886) && (s[f] = !1), l === "true" && (s[f] = !0), isNaN(l) || (s[f] = parseInt(l, 10));
      }
    });
  }
  return { formatName: t, formatOptions: s };
}, _r = (o) => {
  const x = {};
  return (t, s, e) => {
    const a = B;
    let n = e;
    e && e.interpolationkey && e[a(2298)] && e[a(2298)][e[a(2595)]] && e[e[a(2595)]] && (n = { ...n, [e[a(2595)]]: void 0 });
    const i = s + JSON[a(2848)](n);
    let c = x[i];
    return !c && (c = o(sx(s), e), x[i] = c), c(t);
  };
}, gi = (o) => (x, t, s) => o(sx(t), s)(x);
class yi {
  constructor(x = {}) {
    const t = r;
    this[t(2413)] = le.create(t(2277)), this[t(2747)] = x, this[t(1106)](x);
  }
  [r(1106)](x, t = { interpolation: {} }) {
    const s = r;
    this[s(2784)] = t.interpolation.formatSeparator || ",";
    const e = t[s(2479)] ? _r : gi;
    this[s(853)] = { number: e((a, n) => {
      const i = s, c = new Intl[i(466)](a, { ...n });
      return (u) => c[i(839)](u);
    }), currency: e((a, n) => {
      const i = s, c = new Intl[i(466)](a, { ...n, style: i(968) });
      return (u) => c[i(839)](u);
    }), datetime: e((a, n) => {
      const i = s, c = new Intl[i(1310)](a, { ...n });
      return (u) => c[i(839)](u);
    }), relativetime: e((a, n) => {
      const i = s, c = new Intl[i(2142)](a, { ...n });
      return (u) => c[i(839)](u, n.range || i(2487));
    }), list: e((a, n) => {
      const i = s, c = new Intl.ListFormat(a, { ...n });
      return (u) => c[i(839)](u);
    }) };
  }
  add(x, t) {
    const s = r;
    this.formats[x[s(1132)]()[s(425)]()] = t;
  }
  addCached(x, t) {
    const s = r;
    this[s(853)][x[s(1132)]()[s(425)]()] = _r(t);
  }
  [r(839)](x, t, s, e = {}) {
    const a = r, n = t[a(1821)](this[a(2784)]);
    if (n[a(1726)] > 1 && n[0].indexOf("(") > 1 && n[0][a(1602)](")") < 0 && n[a(1379)]((c) => c.indexOf(")") > -1)) {
      const c = n.findIndex((u) => u.indexOf(")") > -1);
      n[0] = [n[0], ...n[a(1719)](1, c)][a(2131)](this[a(2784)]);
    }
    return n[a(2568)]((c, u) => {
      var b;
      const d = a, { formatName: l, formatOptions: f } = bi(u);
      if (this[d(853)][l]) {
        let h = c;
        try {
          const m = ((b = e == null ? void 0 : e[d(2298)]) == null ? void 0 : b[e[d(2595)]]) || {}, v = m[d(1e3)] || m[d(2359)] || e[d(1e3)] || e[d(2359)] || s;
          h = this[d(853)][l](c, v, { ...f, ...e, ...m });
        } catch (m) {
          this[d(2413)][d(2850)](m);
        }
        return h;
      } else this[d(2413)][d(2850)]("there was no format function for " + l);
      return c;
    }, x);
  }
}
const vi = (o, x) => {
  const t = r;
  o.pending[x] !== void 0 && (delete o[t(2109)][x], o[t(1774)]--);
};
class wi extends Tx {
  constructor(x, t, s, e = {}) {
    var n, i;
    const a = r;
    super(), this[a(2151)] = x, this[a(1219)] = t, this[a(1259)] = s, this[a(1246)] = s[a(1246)], this[a(2747)] = e, this[a(2413)] = le.create(a(2280)), this[a(2883)] = [], this.maxParallelReads = e.maxParallelReads || 10, this[a(2643)] = 0, this[a(1905)] = e[a(1905)] >= 0 ? e[a(1905)] : 5, this.retryTimeout = e[a(547)] >= 1 ? e[a(547)] : 350, this[a(2825)] = {}, this[a(907)] = [], (i = (n = this[a(2151)]) == null ? void 0 : n[a(1106)]) == null || i.call(n, s, e[a(2151)], e);
  }
  queueLoad(x, t, s, e) {
    const a = r, n = {}, i = {}, c = {}, u = {};
    return x.forEach((d) => {
      let l = !0;
      t.forEach((f) => {
        const b = B, h = d + "|" + f;
        !s[b(660)] && this[b(1219)][b(1916)](d, f) ? this[b(2825)][h] = 2 : this[b(2825)][h] < 0 || (this[b(2825)][h] === 1 ? i[h] === void 0 && (i[h] = !0) : (this[b(2825)][h] = 1, l = !1, i[h] === void 0 && (i[h] = !0), n[h] === void 0 && (n[h] = !0), u[f] === void 0 && (u[f] = !0)));
      }), l || (c[d] = !0);
    }), (Object[a(2023)](n)[a(1726)] || Object[a(2023)](i)[a(1726)]) && this[a(907)][a(1072)]({ pending: i, pendingCount: Object[a(2023)](i)[a(1726)], loaded: {}, errors: [], callback: e }), { toLoad: Object[a(2023)](n), pending: Object[a(2023)](i), toLoadLanguages: Object[a(2023)](c), toLoadNamespaces: Object[a(2023)](u) };
  }
  [r(626)](x, t, s) {
    const e = r, a = x[e(1821)]("|"), n = a[0], i = a[1];
    t && this[e(1291)](e(1529), n, i, t), !t && s && this[e(1219)][e(585)](n, i, s, void 0, void 0, { skipCopy: !0 }), this[e(2825)][x] = t ? -1 : 2, t && s && (this[e(2825)][x] = 0);
    const c = {};
    this[e(907)].forEach((u) => {
      const d = e;
      ni(u.loaded, [n], i), vi(u, x), t && u[d(1137)].push(t), u.pendingCount === 0 && !u[d(2075)] && (Object[d(2023)](u[d(626)])[d(785)]((l) => {
        const f = d;
        c[l] || (c[l] = {});
        const b = u.loaded[l];
        b.length && b[f(785)]((h) => {
          c[l][h] === void 0 && (c[l][h] = !0);
        });
      }), u[d(2075)] = !0, u[d(1137)].length ? u[d(2718)](u.errors) : u[d(2718)]());
    }), this[e(1291)]("loaded", c), this[e(907)] = this[e(907)].filter((u) => !u[e(2075)]);
  }
  [r(1069)](x, t, s, e = 0, a = this[r(547)], n) {
    const i = r;
    if (!x[i(1726)]) return n(null, {});
    if (this[i(2643)] >= this.maxParallelReads) {
      this[i(2883)][i(1072)]({ lng: x, ns: t, fcName: s, tried: e, wait: a, callback: n });
      return;
    }
    this[i(2643)]++;
    const c = (d, l) => {
      const f = i;
      if (this[f(2643)]--, this.waitingReads.length > 0) {
        const b = this.waitingReads.shift();
        this[f(1069)](b[f(2359)], b.ns, b[f(1780)], b[f(1640)], b[f(467)], b.callback);
      }
      if (d && l && e < this[f(1905)]) {
        setTimeout(() => {
          this[f(1069)].call(this, x, t, s, e + 1, a * 2, n);
        }, a);
        return;
      }
      n(d, l);
    }, u = this[i(2151)][s][i(1826)](this[i(2151)]);
    if (u[i(1726)] === 2) {
      try {
        const d = u(x, t);
        d && typeof d.then === i(975) ? d[i(1227)]((l) => c(null, l))[i(1307)](c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return u(x, t, c);
  }
  [r(933)](x, t, s = {}, e) {
    const a = r;
    if (!this[a(2151)]) return this[a(2413)][a(2850)](a(548)), e && e();
    b0(x) && (x = this[a(1246)][a(621)](x)), b0(t) && (t = [t]);
    const n = this.queueLoad(x, t, s, e);
    if (!n[a(519)].length)
      return n[a(2109)].length || e(), null;
    n[a(519)][a(785)]((i) => {
      this[a(957)](i);
    });
  }
  [r(2327)](x, t, s) {
    this[r(933)](x, t, {}, s);
  }
  [r(660)](x, t, s) {
    this[r(933)](x, t, { reload: !0 }, s);
  }
  loadOne(x, t = "") {
    const s = r, e = x[s(1821)]("|"), a = e[0], n = e[1];
    this[s(1069)](a, n, s(1069), void 0, void 0, (i, c) => {
      const u = s;
      i && this[u(2413)].warn(t + u(575) + n + " for language " + a + " failed", i), !i && c && this[u(2413)][u(429)](t + u(2619) + n + u(1900) + a, c), this[u(626)](x, i, c);
    });
  }
  [r(1308)](x, t, s, e, a, n = {}, i = () => {
  }) {
    var u, d, l, f, b;
    const c = r;
    if ((d = (u = this.services) == null ? void 0 : u[c(2852)]) != null && d[c(2398)] && !((f = (l = this[c(1259)]) == null ? void 0 : l[c(2852)]) != null && f[c(2398)](t))) {
      this.logger[c(2850)](c(1699) + s + c(1331) + t + c(1148), c(355));
      return;
    }
    if (!(s == null || s === "")) {
      if ((b = this[c(2151)]) != null && b[c(800)]) {
        const h = { ...n, isUpdate: a }, m = this[c(2151)][c(800)].bind(this.backend);
        if (m.length < 6) try {
          let v;
          m[c(1726)] === 5 ? v = m(x, t, s, e, h) : v = m(x, t, s, e), v && typeof v[c(1227)] == "function" ? v[c(1227)]((S) => i(null, S))[c(1307)](i) : i(null, v);
        } catch (v) {
          i(v);
        }
        else m(x, t, s, e, i, h);
      }
      !x || !x[0] || this[c(1219)][c(994)](x[0], t, s, e);
    }
  }
}
const Gr = () => ({ debug: !1, initAsync: !0, ns: [r(1731)], defaultNS: ["translation"], fallbackLng: [r(2493)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: r(1348), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: "fallback", saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (o) => {
  const x = r;
  let t = {};
  if (typeof o[1] === x(1694) && (t = o[1]), b0(o[1]) && (t.defaultValue = o[1]), b0(o[2]) && (t[x(472)] = o[2]), typeof o[2] == "object" || typeof o[3] === x(1694)) {
    const s = o[3] || o[2];
    Object[x(2023)](s).forEach((e) => {
      t[e] = s[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (o) => o, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), Jr = (o) => {
  var t, s;
  const x = r;
  return b0(o.ns) && (o.ns = [o.ns]), b0(o[x(1984)]) && (o.fallbackLng = [o[x(1984)]]), b0(o.fallbackNS) && (o[x(2812)] = [o[x(2812)]]), ((s = (t = o[x(2107)]) == null ? void 0 : t[x(1602)]) == null ? void 0 : s.call(t, x(1597))) < 0 && (o[x(2107)] = o[x(2107)][x(1100)]([x(1597)])), typeof o[x(1045)] == "boolean" && (o[x(1814)] = o.initImmediate), o;
}, hx = () => {
}, Si = (o) => {
  const x = r;
  Object[x(359)](Object[x(2272)](o)).forEach((s) => {
    const e = x;
    typeof o[s] === e(975) && (o[s] = o[s][e(1826)](o));
  });
};
class nx extends Tx {
  constructor(x = {}, t) {
    const s = r;
    if (super(), this.options = Jr(x), this[s(1259)] = {}, this[s(2413)] = le, this[s(2380)] = { external: [] }, Si(this), t && !this[s(442)] && !x[s(2013)]) {
      if (!this.options[s(1814)]) return this[s(1106)](x, t), this;
      setTimeout(() => {
        this[s(1106)](x, t);
      }, 0);
    }
  }
  [r(1106)](x = {}, t) {
    const s = r;
    this[s(2836)] = !0, typeof x === s(975) && (t = x, x = {}), x[s(619)] == null && x.ns && (b0(x.ns) ? x[s(619)] = x.ns : x.ns[s(1602)]("translation") < 0 && (x[s(619)] = x.ns[0]));
    const e = Gr();
    this.options = { ...e, ...this[s(2747)], ...Jr(x) }, this[s(2747)][s(530)] = { ...e[s(530)], ...this[s(2747)][s(530)] }, x.keySeparator !== void 0 && (this[s(2747)][s(2036)] = x[s(891)]), x[s(915)] !== void 0 && (this.options[s(1850)] = x[s(915)]);
    const a = (d) => {
      const l = s;
      return d ? typeof d === l(975) ? new d() : d : null;
    };
    if (!this[s(2747)][s(2013)]) {
      this[s(2380)][s(2413)] ? le[s(1106)](a(this.modules[s(2413)]), this[s(2747)]) : le[s(1106)](null, this.options);
      let d;
      this[s(2380)].formatter ? d = this[s(2380)][s(2277)] : d = yi;
      const l = new Wr(this[s(2747)]);
      this[s(1219)] = new zr(this[s(2747)][s(725)], this[s(2747)]);
      const f = this[s(1259)];
      f[s(2413)] = le, f[s(2539)] = this.store, f[s(1246)] = l, f[s(2248)] = new pi(l, { prepend: this.options.pluralSeparator, simplifyPluralSuffix: this[s(2747)][s(2269)] }), d && (!this[s(2747)].interpolation[s(839)] || this[s(2747)][s(530)][s(839)] === e[s(530)][s(839)]) && (f[s(2277)] = a(d), f.formatter[s(1106)](f, this.options), this[s(2747)][s(530)].format = f.formatter[s(839)].bind(f[s(2277)])), f[s(667)] = new mi(this[s(2747)]), f[s(2852)] = { hasLoadedNamespace: this[s(2398)].bind(this) }, f.backendConnector = new wi(a(this[s(2380)][s(2151)]), f.resourceStore, f, this[s(2747)]), f[s(2280)].on("*", (b, ...h) => {
        this[s(1291)](b, ...h);
      }), this[s(2380)].languageDetector && (f.languageDetector = a(this[s(2380)][s(1846)]), f[s(1846)][s(1106)] && f[s(1846)][s(1106)](f, this[s(2747)][s(1001)], this[s(2747)])), this[s(2380)][s(602)] && (f[s(602)] = a(this[s(2380)].i18nFormat), f[s(602)][s(1106)] && f[s(602)][s(1106)](this)), this[s(1181)] = new Fx(this[s(1259)], this.options), this[s(1181)].on("*", (b, ...h) => {
        this[s(1291)](b, ...h);
      }), this[s(2380)][s(2510)].forEach((b) => {
        const h = s;
        b[h(1106)] && b[h(1106)](this);
      });
    }
    if (this[s(839)] = this[s(2747)][s(530)][s(839)], t || (t = hx), this[s(2747)].fallbackLng && !this.services[s(1846)] && !this.options.lng) {
      const d = this.services[s(1246)].getFallbackCodes(this[s(2747)][s(1984)]);
      d[s(1726)] > 0 && d[0] !== s(2493) && (this[s(2747)].lng = d[0]);
    }
    !this[s(1259)][s(1846)] && !this[s(2747)][s(2359)] && this[s(2413)][s(2850)](s(2240)), [s(861), "hasResourceBundle", s(1301), s(2665)].forEach((d) => {
      this[d] = (...l) => this.store[d](...l);
    }), [s(994), s(1012), s(585), s(1036)][s(785)]((d) => {
      this[d] = (...l) => (this[B(1219)][d](...l), this);
    });
    const c = Je(), u = () => {
      const d = s, l = (f, b) => {
        const h = B;
        this[h(2836)] = !1, this[h(442)] && !this.initializedStoreOnce && this[h(2413)].warn(h(1155)), this[h(442)] = !0, this[h(2747)][h(2013)] || this[h(2413)][h(429)](h(2002), this[h(2747)]), this.emit(h(2002), this.options), c[h(422)](b), t(f, b);
      };
      if (this[d(421)] && !this[d(442)]) return l(null, this.t[d(1826)](this));
      this[d(1287)](this[d(2747)][d(2359)], l);
    };
    return this[s(2747)][s(725)] || !this[s(2747)][s(1814)] ? u() : setTimeout(u, 0), c;
  }
  [r(1247)](x, t = hx) {
    var n, i;
    const s = r;
    let e = t;
    const a = b0(x) ? x : this[s(487)];
    if (typeof x == "function" && (e = x), !this[s(2747)].resources || this[s(2747)][s(1188)]) {
      if ((a == null ? void 0 : a[s(1132)]()) === s(1597) && (!this.options[s(2878)] || this[s(2747)][s(2878)][s(1726)] === 0)) return e();
      const c = [], u = (d) => {
        const l = s;
        if (!d || d === l(1597)) return;
        this[l(1259)][l(1246)][l(621)](d)[l(785)]((b) => {
          const h = l;
          b !== h(1597) && c[h(1602)](b) < 0 && c.push(b);
        });
      };
      a ? u(a) : this.services[s(1246)][s(1451)](this.options[s(1984)])[s(785)]((l) => u(l)), (i = (n = this[s(2747)][s(2878)]) == null ? void 0 : n[s(785)]) == null || i.call(n, (d) => u(d)), this[s(1259)][s(2280)][s(2327)](c, this[s(2747)].ns, (d) => {
        const l = s;
        !d && !this[l(1863)] && this[l(487)] && this[l(912)](this[l(487)]), e(d);
      });
    } else e(null);
  }
  [r(1744)](x, t, s) {
    const e = r, a = Je();
    return typeof x === e(975) && (s = x, x = void 0), typeof t === e(975) && (s = t, t = void 0), x || (x = this[e(421)]), t || (t = this.options.ns), s || (s = hx), this.services[e(2280)][e(660)](x, t, (n) => {
      a[e(422)](), s(n);
    }), a;
  }
  [r(2494)](x) {
    const t = r;
    if (!x) throw new Error(t(934));
    if (!x[t(1655)]) throw new Error(t(2911));
    return x.type === t(2151) && (this.modules[t(2151)] = x), (x[t(1655)] === "logger" || x.log && x[t(2850)] && x.error) && (this[t(2380)][t(2413)] = x), x[t(1655)] === t(1846) && (this.modules.languageDetector = x), x[t(1655)] === t(602) && (this[t(2380)][t(602)] = x), x[t(1655)] === t(553) && Hs[t(1737)](x), x[t(1655)] === t(2277) && (this[t(2380)][t(2277)] = x), x[t(1655)] === t(2338) && this[t(2380)][t(2510)][t(1072)](x), this;
  }
  [r(912)](x) {
    const t = r;
    if (!(!x || !this[t(421)]) && !(["cimode", t(2493)][t(1602)](x) > -1)) {
      for (let s = 0; s < this[t(421)][t(1726)]; s++) {
        const e = this.languages[s];
        if (!([t(1597), "dev"][t(1602)](e) > -1) && this[t(1219)][t(2309)](e)) {
          this[t(1863)] = e;
          break;
        }
      }
      !this.resolvedLanguage && this.languages[t(1602)](x) < 0 && this[t(1219)][t(2309)](x) && (this[t(1863)] = x, this[t(421)].unshift(x));
    }
  }
  [r(1287)](x, t) {
    const s = r;
    this[s(2646)] = x;
    const e = Je();
    this[s(1291)](s(1865), x);
    const a = (c) => {
      const u = s;
      this.language = c, this[u(421)] = this.services.languageUtils[u(621)](c), this[u(1863)] = void 0, this.setResolvedLanguage(c);
    }, n = (c, u) => {
      const d = s;
      u ? this[d(2646)] === x && (a(u), this[d(1181)][d(1287)](u), this[d(2646)] = void 0, this[d(1291)]("languageChanged", u), this.logger[d(429)](d(1573), u)) : this.isLanguageChangingTo = void 0, e[d(422)]((...l) => this.t(...l)), t && t(c, (...l) => this.t(...l));
    }, i = (c) => {
      var f, b;
      const u = s;
      !x && !c && this.services.languageDetector && (c = []);
      const d = b0(c) ? c : c && c[0], l = this[u(1219)][u(2309)](d) ? d : this[u(1259)].languageUtils[u(1840)](b0(c) ? [c] : c);
      l && (!this.language && a(l), this.translator[u(487)] || this.translator[u(1287)](l), (b = (f = this[u(1259)][u(1846)]) == null ? void 0 : f[u(1677)]) == null || b.call(f, l)), this[u(1247)](l, (h) => {
        n(h, l);
      });
    };
    return !x && this[s(1259)].languageDetector && !this[s(1259)][s(1846)][s(2247)] ? i(this[s(1259)][s(1846)].detect()) : !x && this[s(1259)][s(1846)] && this[s(1259)].languageDetector[s(2247)] ? this.services[s(1846)][s(1970)][s(1726)] === 0 ? this[s(1259)].languageDetector.detect().then(i) : this[s(1259)][s(1846)][s(1970)](i) : i(x), e;
  }
  getFixedT(x, t, s) {
    const e = r, a = (n, i, ...c) => {
      const u = B;
      let d;
      typeof i !== u(1694) ? d = this[u(2747)][u(2353)]([n, i][u(1100)](c)) : d = { ...i }, d[u(2359)] = d[u(2359)] || a.lng, d[u(2614)] = d.lngs || a.lngs, d.ns = d.ns || a.ns, d[u(1760)] !== "" && (d[u(1760)] = d[u(1760)] || s || a[u(1760)]);
      const l = this[u(2747)].keySeparator || ".";
      let f;
      return d[u(1760)] && Array.isArray(n) ? f = n[u(2086)]((b) => "" + d[u(1760)] + l + b) : f = d[u(1760)] ? "" + d[u(1760)] + l + n : n, this.t(f, d);
    };
    return b0(x) ? a[e(2359)] = x : a[e(2614)] = x, a.ns = t, a.keyPrefix = s, a;
  }
  t(...x) {
    var s;
    const t = r;
    return (s = this[t(1181)]) == null ? void 0 : s[t(2917)](...x);
  }
  [r(2022)](...x) {
    var s;
    const t = r;
    return (s = this[t(1181)]) == null ? void 0 : s[t(2022)](...x);
  }
  setDefaultNamespace(x) {
    const t = r;
    this[t(2747)].defaultNS = x;
  }
  hasLoadedNamespace(x, t = {}) {
    const s = r;
    if (!this[s(442)]) return this[s(2413)][s(2850)](s(2337), this[s(421)]), !1;
    if (!this[s(421)] || !this[s(421)].length) return this[s(2413)][s(2850)]("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const e = t[s(2359)] || this[s(1863)] || this[s(421)][0], a = this[s(2747)] ? this.options[s(1984)] : !1, n = this[s(421)][this[s(421)].length - 1];
    if (e[s(1132)]() === s(1597)) return !0;
    const i = (c, u) => {
      const d = s, l = this[d(1259)][d(2280)][d(2825)][c + "|" + u];
      return l === -1 || l === 0 || l === 2;
    };
    if (t[s(2490)]) {
      const c = t.precheck(this, i);
      if (c !== void 0) return c;
    }
    return !!(this[s(1916)](e, x) || !this[s(1259)][s(2280)][s(2151)] || this.options.resources && !this[s(2747)][s(1188)] || i(e, x) && (!a || i(n, x)));
  }
  [r(2050)](x, t) {
    const s = r, e = Je();
    return this.options.ns ? (b0(x) && (x = [x]), x[s(785)]((a) => {
      const n = s;
      this[n(2747)].ns[n(1602)](a) < 0 && this[n(2747)].ns[n(1072)](a);
    }), this[s(1247)]((a) => {
      e[s(422)](), t && t(a);
    }), e) : (t && t(), Promise.resolve());
  }
  [r(1004)](x, t) {
    const s = r, e = Je();
    b0(x) && (x = [x]);
    const a = this[s(2747)][s(2878)] || [], n = x[s(2783)]((i) => a[s(1602)](i) < 0 && this[s(1259)].languageUtils.isSupportedCode(i));
    return n.length ? (this[s(2747)].preload = a[s(1100)](n), this.loadResources((i) => {
      e[s(422)](), t && t(i);
    }), e) : (t && t(), Promise[s(422)]());
  }
  [r(1902)](x) {
    var a, n;
    const t = r;
    if (x || (x = this[t(1863)] || (((a = this.languages) == null ? void 0 : a[t(1726)]) > 0 ? this[t(421)][0] : this[t(487)])), !x) return t(404);
    const s = ["ar", t(598), "sqr", t(493), t(2393), t(654), t(819), t(2077), t(1781), t(2629), "acm", t(1564), "acw", t(767), "acy", "adf", "ads", t(1822), "aec", "afb", t(342), t(2174), "apd", t(2031), "arq", t(1467), t(1454), t(424), t(2475), "avl", t(2066), t(2838), t(1138), t(1830), t(2165), t(2080), "he", "iw", "ps", t(1494), t(866), "pst", t(2638), t(1425), "ug", "ur", "ydd", t(2236), t(642), "ji", "yi", t(2133), t(1601), t(503), "fa", t(1718), t(1789), "pes", t(2524), "dv", "sam", t(469)], e = ((n = this[t(1259)]) == null ? void 0 : n[t(1246)]) || new Wr(Gr());
    return s.indexOf(e[t(2366)](x)) > -1 || x[t(1132)]().indexOf(t(396)) > 1 ? t(404) : t(772);
  }
  static [r(1582)](x = {}, t) {
    return new nx(x, t);
  }
  [r(727)](x = {}, t = hx) {
    const s = r, e = x[s(1359)];
    e && delete x.forkResourceStore;
    const a = { ...this[s(2747)], ...x, isClone: !0 }, n = new nx(a);
    if ((x[s(1311)] !== void 0 || x.prefix !== void 0) && (n[s(2413)] = n[s(2413)].clone(x)), [s(1219), s(1259), "language"][s(785)]((c) => {
      n[c] = this[c];
    }), n[s(1259)] = { ...this[s(1259)] }, n.services[s(2852)] = { hasLoadedNamespace: n[s(2398)][s(1826)](n) }, e) {
      const c = Object[s(2023)](this[s(1219)][s(2171)])[s(2568)]((u, d) => {
        const l = s;
        return u[d] = { ...this[l(1219)].data[d] }, u[d] = Object[l(2023)](u[d])[l(2568)]((f, b) => (f[b] = { ...u[d][b] }, f), u[d]), u;
      }, {});
      n.store = new zr(c, a), n[s(1259)].resourceStore = n[s(1219)];
    }
    return n[s(1181)] = new Fx(n[s(1259)], a), n.translator.on("*", (c, ...u) => {
      n[s(1291)](c, ...u);
    }), n[s(1106)](a, t), n[s(1181)][s(2747)] = a, n[s(1181)].backendConnector.services[s(2852)] = { hasLoadedNamespace: n[s(2398)][s(1826)](n) }, n;
  }
  toJSON() {
    const x = r;
    return { options: this[x(2747)], store: this[x(1219)], language: this[x(487)], languages: this[x(421)], resolvedLanguage: this.resolvedLanguage };
  }
}
const X0 = nx[r(1582)]();
X0.createInstance = nx[r(1582)], X0.createInstance, X0[r(1902)], X0[r(1106)], X0[r(1247)], X0[r(1744)], X0.use, X0.changeLanguage, X0[r(1377)], X0.t, X0[r(2022)], X0[r(2103)], X0[r(2398)], X0.loadNamespaces, X0[r(1004)];
function ki() {
  const o = r;
  if (typeof navigator !== o(662) && navigator.language) return navigator.language === o(2736) ? "zh-CN" : o(708);
  try {
    const x = typeof require < "u" ? require : void 0;
    if (x)
      return x(o(568)).host.uiLocale[o(2508)]("zh") ? o(2736) : o(708);
  } catch {
  }
  return o(708);
}
let zs = ki();
const Pi = { "zh-CN": {}, "en-US": {} };
function _t(o) {
  const x = r, t = o === x(2736) ? ti : ri, s = Pi[o];
  return { ...t, ...s };
}
function Ii() {
  return zs;
}
function Gt(o, x = {}) {
  const t = r;
  let e = _t(zs)[o];
  return e ? typeof e === t(360) ? e.replace(/\{\{(\w+)\}\}/g, (a, n) => x[n] !== void 0 ? String(x[n]) : a) : e : o;
}
const Ei = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Ri = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, Ci = (o) => Ri[o], Fi = (o) => o.replace(Ei, Ci);
let Qr = { bindI18n: r(1573), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", r(1934), "i", "p"], useSuspense: !0, unescape: Fi };
const Ni = (o = {}) => {
  Qr = { ...Qr, ...o };
}, qi = { type: "3rdParty", init(o) {
  const x = r;
  Ni(o[x(2747)][x(843)]);
} };
!X0[r(442)] && X0[r(2494)](qi)[r(1106)]({ resources: { "zh-CN": { translation: _t(r(2736)) }, "en-US": { translation: _t(r(708)) } }, lng: Ii(), fallbackLng: r(708), interpolation: { escapeValue: !1 } });
const Re = [];
ex[r(2913)] = ex[r(2913)] || {}, ex.widgetable.add = function(o, x) {
  const t = r;
  typeof x === t(975) ? Re.push([o, { formatter: x, setter: null }]) : Re[t(1072)]([o, x]);
};
function Ti(o, x, t) {
  var c, u, d;
  const s = r, e = Re[s(1379)](([l]) => l == "__DEFAULT__"), a = Re[s(1379)](([l]) => ar(l, o[s(1655)])) || e;
  let n = !1;
  if (a) {
    const l = a[1][s(1173)];
    l && (n = !!l(o, x, t));
  }
  !n && (o[s(2912)][x][s(1163)] = t, (u = (c = o[s(2912)][x])[s(2718)]) == null || u.call(c, t)), (d = (q0[s(2535)] || q0[s(1315)][s(433)])[s(2348)]) == null || d[s(1356)][s(1743)]();
}
function Nx(o) {
  const x = r, t = {}, s = Re[x(1379)](([e]) => e == x(1518));
  return o.nodes[x(785)]((e) => {
    const a = x;
    if (!e[a(2912)] || e[a(2912)][a(1726)] == 0) return;
    const n = Re[a(1379)](([i]) => ar(i, e[a(1655)])) || s;
    if (n) try {
      const i = n[1][a(2277)](e);
      i && (t[e.id] = i[a(2912)][a(2086)]((c) => c.value));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function Jt(o, x) {
  var a, n, i;
  const t = r;
  if (!o) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const s = o[t(2330)][t(2086)]((c) => {
    const u = t;
    if (c[u(995)] != 0) return;
    const d = mx(c);
    if (!d || d[u(2508)](".") || !c.widgets || c[u(2912)].length == 0) return;
    let l = Re[u(1379)](([m]) => ar(m, c[u(1655)]));
    if (l) try {
      const m = l[1][u(2277)](c);
      if (m) return m.id = c.id, m.uiWeightSum = m.widgets[u(2568)]((v, S) => v + (S[u(1395)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: d, uiWeightSum: 12, widgets: [{ outputType: u(795), value: Gt(u(714), l[0]) + (m[u(2462)] || m || ""), name: "", options: {} }] };
    }
    if (!d[u(2508)]("#")) return null;
    let f = c.widgets;
    const b = Re.find(([m]) => m == u(1518));
    if (b) {
      const m = b[1][u(2277)](c);
      if (m) return Object[u(2644)](m, { uiWeightSum: m[u(2912)].reduce((v, S) => v + (S.uiWeight || 12), 0) });
    }
    const h = { id: c.id, title: d, widgets: f[u(2086)]((m) => ({ name: m[u(410)] || m.name, outputType: m[u(1655)] || u(360), value: m[u(1163)], options: m[u(2747)] })) };
    return Object[u(2644)](h, { uiWeightSum: h.widgets[u(2568)]((m, v) => m + (v.uiWeight || 12), 0) });
  }).filter(Boolean)[t(1240)]((c, u) => {
    const d = t;
    let l = mx(c), f = mx(u);
    return l = l.startsWith("#") ? l.slice(1)[d(425)]() : l[d(425)](), f = f.startsWith("#") ? f[d(483)](1).trim() : f[d(425)](), l.localeCompare(f);
  }), e = ((n = (a = o[t(2330)].find((c) => c[t(1655)] == "Note" && c.title.match(/SD-?PPP/i))) == null ? void 0 : a[t(2912)][0]) == null ? void 0 : n[t(1163)]) || "";
  return { widgetablePath: ((i = x[t(2692)][t(1380)]) == null ? void 0 : i[t(645)]) || x[t(2920)], widgetableID: x[t(2692)].id, nodes: s[t(2568)]((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: s.map((c) => c.id), options: {} };
}
function ar(o, x) {
  const t = r, s = o[t(521)](/[.+^${}()|[\]\\]/g, t(1531))[t(521)](/\*/g, ".*")[t(521)](/\?/g, ".");
  return new RegExp("^" + s + "$").test(x);
}
function mx(o, x = "") {
  var e;
  const t = r;
  let s = x || o[t(1924)] || "";
  return o[t(2314)] && (s[t(2508)]("#") || s[t(2508)](".")) ? o.setProperty("sdppp_widgetable_title", s) : s = ((e = o.properties) == null ? void 0 : e[t(2573)]) || s, s;
}
ex[r(986)] = mx;
const Qt = ox.extend(r(1954)), Xr = /* @__PURE__ */ new Set();
R0[r(1918)](r(1598), async (o) => {
  const x = r;
  return requestAnimationFrame(hn), o[x(2282)].forEach(({ nodeID: t, widgetIndex: s, value: e }) => {
    const a = x, n = q0[a(1364)].nodes[a(1379)]((i) => i.id == t);
    Ti(n, s, e);
  }), { success: !0 };
}), R0[r(1918)](r(1232), async (o) => {
  const x = r, { workflow_path: t } = o, s = !Xr[x(731)](t), e = o[x(2098)] || s;
  Xr.add(t);
  const a = q0.extensionManager[x(433)] || q0[x(2535)], n = a[x(2447)][x(1379)]((c) => c[x(2649)] === t || c[x(2920)] === t || c[x(2920)] === x(2333) + t);
  if (!e) {
    const c = await Ai(a, n);
    if (Qt(x(1462) + c), c) await Kx(a, n);
    else try {
      await i(a, n);
    } catch {
      await Kx(a, n);
    }
    return { success: !0 };
  }
  return await Kx(a, n), { success: !0 };
  async function i(c, u) {
    const d = x;
    Qt(d(711) + u[d(2920)], u.initialState), q0[d(2535)] == c ? await u[d(2327)]() : (await c[d(1232)](u), await q0.loadGraphData(JSON[d(1724)](JSON[d(2848)](u.initialState)), !0, !0, u, {}));
  }
}), R0.implementAction(r(2566), async function(o) {
  const x = r;
  let { workflow_content: t, workflow_path: s } = o;
  return t[x(1380)] = { ...t[x(1380)] || {}, sdppp_workflow_alias: s }, await q0[x(2708)](t), { success: !0 };
}), R0[r(1918)](r(2601), async (o) => {
  var a;
  const x = r, t = q0[x(2535)] || q0[x(1315)][x(433)];
  (a = t[x(2522)]) == null || a.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t.workflows.map((n) => n[x(2920)].replace(x(2333), ""));
  try {
    const n = new Headers(), i = localStorage[x(2682)](x(1690));
    i && n[x(1019)](x(900), i);
    const c = await fetch(x(2719), { headers: n });
    let u = [];
    c.ok && (u = (await c[x(992)]())[x(668)][x(2086)]((l) => l[x(521)](x(2333), ""))), e.sort((d, l) => {
      const f = x, b = u[f(1127)](d), h = u[f(1127)](l);
      return b && !h ? -1 : !b && h ? 1 : d[f(2332)](l);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), R0[r(1918)]("saveWorkflow", async (o) => {
  var n;
  const x = r, { workflow_path: t, from_sid: s } = o, e = q0[x(2535)] || q0[x(1315)][x(433)], a = e.workflows[x(1379)]((i) => i.fullFilename === t || i.path === t || i[x(2920)] === x(2333) + t);
  if (!a) throw new Error(x(350));
  return ((n = e[x(2348)]) == null ? void 0 : n.id) != a.id && await q0[x(1232)](t, s, !1), a[x(1356)][x(1743)](), await e[x(730)](a), { success: !0 };
});
async function Ai(o, x) {
  var e, a, n;
  const t = r;
  if (!x || !(((e = o.activeWorkflow) == null ? void 0 : e.id) === x.id)) return !1;
  if ((a = x.changeTracker) != null && a.checkState) try {
    x[t(1356)][t(1743)]();
  } catch (i) {
    console[t(2850)](t(2559), i);
  }
  try {
    const i = (n = q0[t(1364)]) == null ? void 0 : n[t(1387)](), c = x.activeState;
    if (!i || !c) return !1;
    const u = JSON[t(2848)](i), d = JSON[t(2848)](c);
    return u !== d;
  } catch (i) {
    return console.warn("Failed to check workflow state changes:", i), !1;
  }
}
async function Kx(o, x) {
  var e;
  const t = r;
  Qt(t(2095) + x[t(2920)]);
  async function s(a, n) {
    const i = t;
    q0[i(2535)] == a ? await n.load() : (await a[i(1232)](n), await q0[i(2708)](JSON[i(1724)](JSON[i(2848)](n.activeState)), !0, !0, n, {}));
  }
  if ((x[t(2401)] || (e = o[t(2401)]) != null && e.call(o, x)) && o.openWorkflows[t(1726)] === 1) {
    const a = o.createTemporary();
    o[t(1232)](a);
  } else await s(o, o[t(1790)][0] == x ? o[t(1790)][1] : o.openWorkflows[0]);
  await o[t(991)](x, !1), await new Promise((a) => requestAnimationFrame(a)), await s(o, x);
}
const Xe = ox[r(1228)](r(2329)), qe = /* @__PURE__ */ new Map();
function Oi(o, x) {
  const t = r, s = qe[t(1502)](o);
  Xe(t(1604), o, x, s, qe), s && s[t(2827)](x);
}
R0.implementAction(r(2135), async function* (o) {
  const x = r;
  let t = !1, s = [];
  function e() {
    const f = B;
    if (t) return;
    const b = Oe[f(2813)];
    Oe[f(2813)] = async (...h) => {
      const m = f;
      try {
        const v = await b.call(Oe, ...h);
        return s.push({ error: null, result: v, prompt_id: v.prompt_id }), v;
      } catch (v) {
        throw s[m(1072)]({ error: v, result: null, prompt_id: "" }), v;
      }
    }, t = !0;
  }
  t || e();
  const a = o[x(2732)];
  let n = !1, i = {}, c = [];
  R0[x(1219)][x(924)]({ lastError: "", widgetableErrors: {} });
  try {
    s = [], await q0[x(2813)](1, a), s.forEach((f) => {
      var h, m;
      const b = x;
      if (f[b(795)]) n = !0, i = f[b(795)][b(1936)] ? l(f[b(795)][b(1936)][b(494)]) : {}, Object[b(2644)](i, { "-1": ((m = (h = f[b(795)].response) == null ? void 0 : h[b(795)]) == null ? void 0 : m[b(2462)]) || f[b(795)][b(2462)] });
      else {
        const v = f[b(2904)][b(2855)];
        c[b(1072)](v);
        let S, P;
        const F = new Promise((R, E) => {
          S = R, P = E;
        }), A = { promise: F, resolveImage: S, rejectImage: P };
        qe[b(1019)](v, A);
      }
    });
  } catch (f) {
    Xe(x(2823), f.stack), n = !0, i = { "-1": f[x(2462)] || f[x(1860)]() };
  }
  Xe(x(2340), n, i, x(460), c), n && R0[x(1219)][x(924)]({ widgetableErrors: i });
  let u = [];
  const d = /* @__PURE__ */ new Map();
  for (const f of c) {
    const b = qe.get(f);
    b && d[x(1019)](f, b[x(775)]);
  }
  for (Xe(x(2814)); d[x(2732)] > 0; ) {
    const f = Array[x(1082)](d[x(2735)]()), b = f.map(([v, S]) => S[x(1227)]((P) => ({ prompt_id: v, images: P }))), { prompt_id: h, images: m } = await Promise[x(2304)](b);
    Xe(x(1125), h), u.push(...m), d[x(2059)](h), qe[x(2059)](h), yield { success: !0, prompt_ids: [h], images: m };
  }
  function l(f) {
    const b = x, h = {};
    return Object[b(2023)](f)[b(785)]((m) => {
      const v = b, S = m.split(":")[0], P = q0.graph[v(2330)][v(1379)]((F) => F.id == S);
      h[S] = "[" + ((P == null ? void 0 : P.title) || S) + "]" + f[m][v(1137)][v(2086)](JSON[v(2848)]).join(`
`);
    }), h;
  }
}), R0.implementAction(r(2427), async () => {
  const o = r;
  await q0.api[o(1962)](o(907)), await q0[o(2592)].interrupt();
  const x = Array.from(qe[o(2282)]());
  qe[o(2368)]();
  for (const t of x)
    try {
      t.rejectImage(new Error("Workflow stopped by user"));
    } catch {
    }
  return { success: !0 };
});
const Di = ox[r(1228)]("actions:util");
R0[r(1918)]("sdpppHandshake", async (o) => {
  const x = r;
  return o != null && o[x(1064)] && Di(x(1468), o[x(1064)]), { comfyVersion: "510", hostVersion: (o == null ? void 0 : o[x(1064)]) ?? "" };
}), R0[r(1918)](r(2728), async (o) => {
  const x = r, { node_id: t, title: s } = o, e = q0[x(1364)][x(2330)][x(1379)]((a) => a.id == t);
  if (!e) throw new Error("Node not found");
  return e[x(1924)] = s, e.setProperty(x(2573), s), { success: !0 };
}), R0[r(1918)](r(2872), async () => {
  const o = r, x = await fetch(o(1884));
  return x[o(1254)] == 404 ? { error: Gt(o(1711)), success: !1 } : x[o(1254)] == 200 ? { success: !0 } : { error: Gt(o(683)) + x.statusText, success: !1 };
}), R0[r(1918)](r(1248), async (o) => {
  const x = r, { api_key: t } = o;
  return localStorage[x(499)](x(2222), t), location.reload(), { success: !0 };
}), R0[r(1918)](r(2576), async () => {
  const o = r;
  return document.querySelector(o(2149)).parentElement[o(1829)](), { success: !0 };
});
function ji(o) {
  const x = r, t = atob(o), s = t[x(1726)], e = new Uint8Array(s);
  for (let a = 0; a < s; a++)
    e[a] = t[x(682)](a);
  return e;
}
R0[r(1918)](r(1710), async (o, x, t) => {
  const s = r, { fileName: e, overwrite: a = !0, mimeType: n = s(2324), dataBase64: i } = o;
  if (t != null && t.aborted) throw new DOMException(s(2583), "AbortError");
  const c = ji(i), u = new Blob([c], { type: n }), d = new FormData();
  d[s(1634)](s(1060), u), d[s(1634)](s(1810), e), d[s(1634)]("overwrite", a ? "true" : "false");
  const l = await fetch(s(1313), { method: s(620), body: d, signal: t });
  if (!l.ok) throw new Error(s(2037) + l.statusText);
  const f = await l[s(992)]();
  return { name: f[s(2734)] + "/" + f[s(707)] };
});
const Us = r(1521), Mi = [Us, r(675), r(2465), r(2725)], Ax = r(1416), Vs = B0([y(), _()[r(561)]()]), Ws = y(), Li = k({ progressToken: Z(Vs) }).passthrough(), ae = k({ _meta: Z(Li) })[r(1054)](), xe = k({ method: y(), params: Z(ae) }), ix = k({ _meta: Z(k({})[r(1054)]()) })[r(1054)](), pe = k({ method: y(), params: Z(ix) }), se = k({ _meta: Z(k({}).passthrough()) })[r(1054)](), Ox = B0([y(), _().int()]), Zs = k({ jsonrpc: x0(Ax), id: Ox })[r(2127)](xe)[r(464)](), $i = (o) => Zs[r(1444)](o)[r(656)], Bs = k({ jsonrpc: x0(Ax) })[r(2127)](pe)[r(464)](), Hi = (o) => Bs[r(1444)](o)[r(656)], Ks = k({ jsonrpc: x0(Ax), id: Ox, result: se })[r(464)](), Yr = (o) => Ks.safeParse(o)[r(656)];
var ye;
(function(o) {
  const x = r;
  o[o[x(2854)] = -32e3] = x(2854), o[o[x(2733)] = -32001] = x(2733), o[o[x(1508)] = -32700] = x(1508), o[o[x(1757)] = -32600] = x(1757), o[o[x(1108)] = -32601] = x(1108), o[o[x(1752)] = -32602] = x(1752), o[o.InternalError = -32603] = "InternalError";
})(ye || (ye = {}));
const _s = k({ jsonrpc: x0(Ax), id: Ox, error: k({ code: _().int(), message: y(), data: Z(Le()) }) }).strict(), zi = (o) => _s[r(1444)](o)[r(656)];
B0([Zs, Bs, Ks, _s]);
const Xt = se.strict(), Yt = pe[r(1228)]({ method: x0(r(1979)), params: ix[r(1228)]({ requestId: Ox, reason: y()[r(773)]() }) }), cx = k({ name: y(), title: Z(y()) })[r(1054)](), Gs = cx[r(1228)]({ version: y() }), Ui = k({ experimental: Z(k({}).passthrough()), sampling: Z(k({})[r(1054)]()), elicitation: Z(k({})[r(1054)]()), roots: Z(k({ listChanged: Z(e0()) })[r(1054)]()) }).passthrough(), Js = xe[r(1228)]({ method: x0("initialize"), params: ae[r(1228)]({ protocolVersion: y(), capabilities: Ui, clientInfo: Gs }) }), Vi = k({ experimental: Z(k({})[r(1054)]()), logging: Z(k({})[r(1054)]()), completions: Z(k({}).passthrough()), prompts: Z(k({ listChanged: Z(e0()) })[r(1054)]()), resources: Z(k({ subscribe: Z(e0()), listChanged: Z(e0()) }).passthrough()), tools: Z(k({ listChanged: Z(e0()) }).passthrough()) })[r(1054)](), Wi = se[r(1228)]({ protocolVersion: y(), capabilities: Vi, serverInfo: Gs, instructions: Z(y()) }), Qs = pe[r(1228)]({ method: x0("notifications/initialized") }), er = xe[r(1228)]({ method: x0(r(899)) }), Zi = k({ progress: _(), total: Z(_()), message: Z(y()) })[r(1054)](), xr = pe[r(1228)]({ method: x0("notifications/progress"), params: ix[r(2127)](Zi)[r(1228)]({ progressToken: Vs }) }), Dx = xe[r(1228)]({ params: ae[r(1228)]({ cursor: Z(Ws) }).optional() }), jx = se[r(1228)]({ nextCursor: Z(Ws) }), Xs = k({ uri: y(), mimeType: Z(y()), _meta: Z(k({})[r(1054)]()) })[r(1054)](), Ys = Xs[r(1228)]({ text: y() }), en = Xs[r(1228)]({ blob: y()[r(578)]() }), xn = cx[r(1228)]({ uri: y(), description: Z(y()), mimeType: Z(y()), _meta: Z(k({})[r(1054)]()) }), Bi = cx[r(1228)]({ uriTemplate: y(), description: Z(y()), mimeType: Z(y()), _meta: Z(k({})[r(1054)]()) }), Ki = Dx[r(1228)]({ method: x0("resources/list") }), _i = jx[r(1228)]({ resources: v0(xn) }), Gi = Dx[r(1228)]({ method: x0("resources/templates/list") }), Ji = jx[r(1228)]({ resourceTemplates: v0(Bi) }), Qi = xe[r(1228)]({ method: x0(r(535)), params: ae.extend({ uri: y() }) }), Xi = se[r(1228)]({ contents: v0(B0([Ys, en])) }), Yi = pe[r(1228)]({ method: x0(r(2779)) }), e2 = xe[r(1228)]({ method: x0(r(1038)), params: ae.extend({ uri: y() }) }), x2 = xe[r(1228)]({ method: x0(r(2189)), params: ae[r(1228)]({ uri: y() }) }), t2 = pe[r(1228)]({ method: x0(r(529)), params: ix[r(1228)]({ uri: y() }) }), r2 = k({ name: y(), description: Z(y()), required: Z(e0()) })[r(1054)](), a2 = cx[r(1228)]({ description: Z(y()), arguments: Z(v0(r2)), _meta: Z(k({})[r(1054)]()) }), s2 = Dx[r(1228)]({ method: x0("prompts/list") }), n2 = jx.extend({ prompts: v0(a2) }), o2 = xe.extend({ method: x0(r(2256)), params: ae[r(1228)]({ name: y(), arguments: Z(z0(y())) }) }), sr = k({ type: x0(r(2308)), text: y(), _meta: Z(k({})[r(1054)]()) })[r(1054)](), nr = k({ type: x0(r(1060)), data: y()[r(578)](), mimeType: y(), _meta: Z(k({}).passthrough()) })[r(1054)](), or = k({ type: x0(r(2914)), data: y()[r(578)](), mimeType: y(), _meta: Z(k({})[r(1054)]()) })[r(1054)](), i2 = k({ type: x0("resource"), resource: B0([Ys, en]), _meta: Z(k({})[r(1054)]()) }).passthrough(), c2 = xn[r(1228)]({ type: x0(r(2100)) }), tn = B0([sr, nr, or, c2, i2]), u2 = k({ role: E0(["user", "assistant"]), content: tn })[r(1054)](), d2 = se[r(1228)]({ description: Z(y()), messages: v0(u2) }), l2 = pe[r(1228)]({ method: x0("notifications/prompts/list_changed") }), f2 = k({ title: Z(y()), readOnlyHint: Z(e0()), destructiveHint: Z(e0()), idempotentHint: Z(e0()), openWorldHint: Z(e0()) })[r(1054)](), h2 = cx.extend({ description: Z(y()), inputSchema: k({ type: x0(r(1694)), properties: Z(k({})[r(1054)]()), required: Z(v0(y())) }).passthrough(), outputSchema: Z(k({ type: x0("object"), properties: Z(k({})[r(1054)]()), required: Z(v0(y())) })[r(1054)]()), annotations: Z(f2), _meta: Z(k({}).passthrough()) }), p2 = Dx[r(1228)]({ method: x0("tools/list") }), m2 = jx[r(1228)]({ tools: v0(h2) }), rn = se[r(1228)]({ content: v0(tn).default([]), structuredContent: k({})[r(1054)]()[r(773)](), isError: Z(e0()) });
rn.or(se.extend({ toolResult: Le() }));
const b2 = xe[r(1228)]({ method: x0(r(1073)), params: ae.extend({ name: y(), arguments: Z(z0(Le())) }) }), g2 = pe[r(1228)]({ method: x0(r(2588)) }), an = E0(["debug", r(1665), r(1736), r(2318), r(795), r(1213), r(2881), r(468)]), y2 = xe[r(1228)]({ method: x0(r(2842)), params: ae[r(1228)]({ level: an }) }), v2 = pe[r(1228)]({ method: x0(r(1147)), params: ix[r(1228)]({ level: an, logger: Z(y()), data: Le() }) }), w2 = k({ name: y()[r(773)]() })[r(1054)](), S2 = k({ hints: Z(v0(w2)), costPriority: Z(_()[r(2742)](0).max(1)), speedPriority: Z(_()[r(2742)](0)[r(2650)](1)), intelligencePriority: Z(_().min(0).max(1)) })[r(1054)](), k2 = k({ role: E0([r(1656), "assistant"]), content: B0([sr, nr, or]) })[r(1054)](), P2 = xe[r(1228)]({ method: x0("sampling/createMessage"), params: ae[r(1228)]({ messages: v0(k2), systemPrompt: Z(y()), includeContext: Z(E0([r(465), r(2362), "allServers"])), temperature: Z(_()), maxTokens: _().int(), stopSequences: Z(v0(y())), metadata: Z(k({})[r(1054)]()), modelPreferences: Z(S2) }) }), sn = se.extend({ model: y(), stopReason: Z(E0(["endTurn", r(590), r(1112)]).or(y())), role: E0([r(1656), r(1251)]), content: Ds(r(1655), [sr, nr, or]) }), I2 = k({ type: x0("boolean"), title: Z(y()), description: Z(y()), default: Z(e0()) })[r(1054)](), E2 = k({ type: x0(r(360)), title: Z(y()), description: Z(y()), minLength: Z(_()), maxLength: Z(_()), format: Z(E0([r(1099), r(666), r(1637), r(1894)])) })[r(1054)](), R2 = k({ type: E0([r(1455), r(1046)]), title: Z(y()), description: Z(y()), minimum: Z(_()), maximum: Z(_()) }).passthrough(), C2 = k({ type: x0("string"), title: Z(y()), description: Z(y()), enum: v0(y()), enumNames: Z(v0(y())) })[r(1054)](), F2 = B0([I2, E2, R2, C2]), N2 = xe[r(1228)]({ method: x0(r(1801)), params: ae.extend({ message: y(), requestedSchema: k({ type: x0("object"), properties: z0(y(), F2), required: Z(v0(y())) })[r(1054)]() }) }), nn = se[r(1228)]({ action: E0([r(2126), r(1768), "cancel"]), content: Z(z0(y(), Le())) }), q2 = k({ type: x0(r(2172)), uri: y() })[r(1054)](), T2 = k({ type: x0(r(776)), name: y() })[r(1054)](), A2 = xe.extend({ method: x0("completion/complete"), params: ae[r(1228)]({ ref: B0([T2, q2]), argument: k({ name: y(), value: y() })[r(1054)](), context: Z(k({ arguments: Z(z0(y(), y())) })) }) }), O2 = se[r(1228)]({ completion: k({ values: v0(y()).max(100), total: Z(_()[r(561)]()), hasMore: Z(e0()) })[r(1054)]() }), D2 = k({ uri: y().startsWith("file://"), name: Z(y()), _meta: Z(k({})[r(1054)]()) })[r(1054)](), j2 = xe[r(1228)]({ method: x0(r(2590)) }), on = se[r(1228)]({ roots: v0(D2) }), M2 = pe[r(1228)]({ method: x0("notifications/roots/list_changed") });
B0([er, Js, A2, y2, o2, s2, Ki, Gi, Qi, e2, x2, b2, p2]), B0([Yt, xr, Qs, M2]), B0([Xt, sn, nn, on]), B0([er, P2, N2, j2]), B0([Yt, xr, v2, t2, Yi, g2, l2]), B0([Xt, Wi, O2, d2, n2, _i, Ji, Xi, rn, m2]);
class Ae extends Error {
  constructor(x, t, s) {
    const e = r;
    super(e(747) + x + ": " + t), this[e(2776)] = x, this[e(2171)] = s, this[e(707)] = e(1263);
  }
}
const L2 = 6e4;
class $2 {
  constructor(x) {
    const t = r;
    this[t(672)] = x, this[t(2132)] = 0, this[t(2063)] = /* @__PURE__ */ new Map(), this[t(2183)] = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this[t(2645)] = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this[t(2293)] = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this.setNotificationHandler(Yt, (s) => {
      const e = t, a = this[e(2183)].get(s[e(1383)][e(2062)]);
      a == null || a[e(369)](s[e(1383)].reason);
    }), this[t(787)](xr, (s) => {
      this._onprogress(s);
    }), this[t(2156)](er, (s) => ({}));
  }
  [r(448)](x, t, s, e, a = !1) {
    const n = r;
    this._timeoutInfo[n(1019)](x, { timeoutId: setTimeout(e, t), startTime: Date[n(2310)](), timeout: t, maxTotalTimeout: s, resetTimeoutOnProgress: a, onTimeout: e });
  }
  [r(1430)](x) {
    const t = r, s = this[t(2293)].get(x);
    if (!s) return !1;
    const e = Date.now() - s.startTime;
    if (s[t(831)] && e >= s[t(831)])
      throw this[t(2293)].delete(x), new Ae(ye.RequestTimeout, t(704), { maxTotalTimeout: s[t(831)], totalElapsed: e });
    return clearTimeout(s[t(688)]), s.timeoutId = setTimeout(s[t(1515)], s[t(1990)]), !0;
  }
  [r(2201)](x) {
    const t = r, s = this._timeoutInfo.get(x);
    s && (clearTimeout(s[t(688)]), this[t(2293)][t(2059)](x));
  }
  async [r(2511)](x) {
    const t = r;
    var s, e, a;
    this[t(2564)] = x;
    const n = (s = this[t(1111)]) === null || s === void 0 ? void 0 : s[t(2054)];
    this[t(2564)][t(2054)] = () => {
      const u = t;
      n == null || n(), this[u(1354)]();
    };
    const i = (e = this[t(1111)]) === null || e === void 0 ? void 0 : e.onerror;
    this[t(2564)][t(375)] = (u) => {
      const d = t;
      i == null || i(u), this[d(874)](u);
    };
    const c = (a = this._transport) === null || a === void 0 ? void 0 : a.onmessage;
    this[t(2564)][t(2143)] = (u, d) => {
      const l = t;
      c == null || c(u, d), Yr(u) || zi(u) ? this[l(474)](u) : $i(u) ? this[l(363)](u, d) : Hi(u) ? this._onnotification(u) : this[l(874)](new Error("Unknown message type: " + JSON.stringify(u)));
    }, await this[t(2564)][t(2212)]();
  }
  [r(1354)]() {
    const x = r;
    var t;
    const s = this[x(2645)];
    this[x(2645)] = /* @__PURE__ */ new Map(), this._progressHandlers[x(2368)](), this[x(1190)][x(2368)](), this[x(2564)] = void 0, (t = this[x(2054)]) === null || t === void 0 || t.call(this);
    const e = new Ae(ye[x(2854)], "Connection closed");
    for (const a of s[x(2282)]())
      a(e);
  }
  _onerror(x) {
    var t;
    (t = this.onerror) === null || t === void 0 || t.call(this, x);
  }
  [r(2789)](x) {
    const t = r;
    var s;
    const e = (s = this[t(1336)][t(1502)](x[t(382)])) !== null && s !== void 0 ? s : this[t(2287)];
    e !== void 0 && Promise[t(422)]().then(() => e(x))[t(1307)]((a) => this._onerror(new Error(t(749) + a)));
  }
  [r(363)](x, t) {
    const s = r;
    var e, a, n, i;
    const c = (e = this._requestHandlers[s(1502)](x.method)) !== null && e !== void 0 ? e : this.fallbackRequestHandler;
    if (c === void 0) {
      (a = this[s(2564)]) === null || a === void 0 || a[s(838)]({ jsonrpc: s(1416), id: x.id, error: { code: ye[s(1108)], message: s(691) } })[s(1307)]((l) => this[s(874)](new Error("Failed to send an error response: " + l)));
      return;
    }
    const u = new AbortController();
    this[s(2183)][s(1019)](x.id, u);
    const d = { signal: u[s(652)], sessionId: (n = this[s(2564)]) === null || n === void 0 ? void 0 : n[s(1596)], _meta: (i = x[s(1383)]) === null || i === void 0 ? void 0 : i[s(1480)], sendNotification: (l) => this.notification(l, { relatedRequestId: x.id }), sendRequest: (l, f, b) => this[s(1332)](l, f, { ...b, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t[s(1257)], requestId: x.id, requestInfo: t == null ? void 0 : t[s(1109)] };
    Promise.resolve()[s(1227)](() => c(x, d))[s(1227)]((l) => {
      const f = s;
      var b;
      if (!u[f(652)].aborted)
        return (b = this[f(2564)]) === null || b === void 0 ? void 0 : b[f(838)]({ result: l, jsonrpc: f(1416), id: x.id });
    }, (l) => {
      const f = s;
      var b, h;
      if (!u[f(652)].aborted)
        return (b = this[f(2564)]) === null || b === void 0 ? void 0 : b[f(838)]({ jsonrpc: f(1416), id: x.id, error: { code: Number.isSafeInteger(l[f(2776)]) ? l[f(2776)] : ye[f(1997)], message: (h = l.message) !== null && h !== void 0 ? h : f(1642) } });
    })[s(1307)]((l) => this[s(874)](new Error(s(1158) + l)))[s(966)](() => {
      const l = s;
      this[l(2183)][l(2059)](x.id);
    });
  }
  [r(1388)](x) {
    const t = r, { progressToken: s, ...e } = x[t(1383)], a = Number(s), n = this[t(1945)][t(1502)](a);
    if (!n) {
      this._onerror(new Error(t(2746) + JSON.stringify(x)));
      return;
    }
    const i = this[t(2645)][t(1502)](a), c = this._timeoutInfo.get(a);
    if (c && i && c.resetTimeoutOnProgress) try {
      this[t(1430)](a);
    } catch (u) {
      i(u);
      return;
    }
    n(e);
  }
  [r(474)](x) {
    const t = r, s = Number(x.id), e = this[t(2645)][t(1502)](s);
    if (e === void 0) {
      this._onerror(new Error(t(2130) + JSON[t(2848)](x)));
      return;
    }
    if (this[t(2645)][t(2059)](s), this[t(1945)].delete(s), this[t(2201)](s), Yr(x)) e(x);
    else {
      const a = new Ae(x[t(795)][t(2776)], x[t(795)][t(2462)], x.error[t(2171)]);
      e(a);
    }
  }
  get [r(1111)]() {
    return this[r(2564)];
  }
  async [r(2371)]() {
    var x;
    await ((x = this._transport) === null || x === void 0 ? void 0 : x.close());
  }
  [r(1332)](x, t, s) {
    const { relatedRequestId: e, resumptionToken: a, onresumptiontoken: n } = s ?? {};
    return new Promise((i, c) => {
      const u = B;
      var d, l, f, b, h, m;
      if (!this[u(2564)]) {
        c(new Error(u(802)));
        return;
      }
      ((d = this[u(672)]) === null || d === void 0 ? void 0 : d[u(1910)]) === !0 && this[u(784)](x[u(382)]), (l = s == null ? void 0 : s[u(652)]) === null || l === void 0 || l[u(2402)]();
      const v = this[u(2132)]++, S = { ...x, jsonrpc: u(1416), id: v };
      s != null && s[u(1115)] && (this[u(1945)][u(1019)](v, s[u(1115)]), S[u(1383)] = { ...x.params, _meta: { ...((f = x.params) === null || f === void 0 ? void 0 : f[u(1480)]) || {}, progressToken: v } });
      const P = (R) => {
        const E = u;
        var C;
        this[E(2645)][E(2059)](v), this[E(1945)][E(2059)](v), this[E(2201)](v), (C = this._transport) === null || C === void 0 || C.send({ jsonrpc: "2.0", method: "notifications/cancelled", params: { requestId: v, reason: String(R) } }, { relatedRequestId: e, resumptionToken: a, onresumptiontoken: n })[E(1307)]((D) => this[E(874)](new Error(E(854) + D))), c(R);
      };
      this[u(2645)][u(1019)](v, (R) => {
        const E = u;
        var C;
        if (!(!((C = s == null ? void 0 : s[E(652)]) === null || C === void 0) && C[E(2377)])) {
          if (R instanceof Error) return c(R);
          try {
            const D = t[E(1724)](R[E(2904)]);
            i(D);
          } catch (D) {
            c(D);
          }
        }
      }), (b = s == null ? void 0 : s[u(652)]) === null || b === void 0 || b.addEventListener(u(369), () => {
        var R;
        P((R = s == null ? void 0 : s.signal) === null || R === void 0 ? void 0 : R.reason);
      });
      const F = (h = s == null ? void 0 : s.timeout) !== null && h !== void 0 ? h : L2, A = () => P(new Ae(ye[u(2733)], u(762), { timeout: F }));
      this[u(448)](v, F, s == null ? void 0 : s[u(831)], A, (m = s == null ? void 0 : s[u(2229)]) !== null && m !== void 0 ? m : !1), this[u(2564)][u(838)](S, { relatedRequestId: e, resumptionToken: a, onresumptiontoken: n })[u(1307)]((R) => {
        this._cleanupTimeout(v), c(R);
      });
    });
  }
  async [r(2915)](x, t) {
    const s = r;
    var e, a;
    if (!this[s(2564)]) throw new Error(s(802));
    if (this[s(2474)](x[s(382)]), ((a = (e = this[s(672)]) === null || e === void 0 ? void 0 : e[s(2251)]) !== null && a !== void 0 ? a : [])[s(1127)](x[s(382)]) && !x[s(1383)] && !(t != null && t[s(1687)])) {
      if (this[s(1190)][s(731)](x[s(382)])) return;
      this[s(1190)][s(2341)](x[s(382)]), Promise[s(422)]()[s(1227)](() => {
        const u = s;
        var d;
        if (this[u(1190)][u(2059)](x[u(382)]), !this[u(2564)]) return;
        const l = { ...x, jsonrpc: u(1416) };
        (d = this[u(2564)]) === null || d === void 0 || d.send(l, t).catch((f) => this._onerror(f));
      });
      return;
    }
    const c = { ...x, jsonrpc: s(1416) };
    await this[s(2564)].send(c, t);
  }
  setRequestHandler(x, t) {
    const s = r, e = x[s(1423)][s(382)][s(1163)];
    this[s(2895)](e), this[s(2063)][s(1019)](e, (a, n) => {
      const i = s;
      return Promise[i(422)](t(x[i(1724)](a), n));
    });
  }
  [r(942)](x) {
    const t = r;
    this[t(2063)][t(2059)](x);
  }
  [r(2448)](x) {
    const t = r;
    if (this[t(2063)][t(731)](x)) throw new Error(t(1804) + x + t(2034));
  }
  [r(787)](x, t) {
    const s = r;
    this[s(1336)][s(1019)](x[s(1423)].method.value, (e) => Promise[s(422)](t(x[s(1724)](e))));
  }
  removeNotificationHandler(x) {
    this[r(1336)].delete(x);
  }
}
function H2(o, x) {
  const t = r;
  return Object[t(2735)](x)[t(2568)]((s, [e, a]) => (a && typeof a == "object" ? s[e] = s[e] ? { ...s[e], ...a } : a : s[e] = a, s), { ...o });
}
var Ye = { exports: {} }, z2 = Ye.exports, ea;
function U2() {
  const o = r;
  return ea || (ea = 1, function(x, t) {
    (function(s, e) {
      e(t);
    })(z2, function(s) {
      const e = B;
      function a() {
        const I = B;
        for (var p = arguments.length, g = Array(p), w = 0; w < p; w++)
          g[w] = arguments[w];
        if (g[I(1726)] > 1) {
          g[0] = g[0][I(483)](0, -1);
          for (var H = g[I(1726)] - 1, z = 1; z < H; ++z)
            g[z] = g[z][I(483)](1, -1);
          return g[H] = g[H][I(483)](1), g[I(2131)]("");
        } else return g[0];
      }
      function n(I) {
        return B(2687) + I + ")";
      }
      function i(I) {
        const p = B;
        return I === void 0 ? p(662) : I === null ? p(833) : Object.prototype[p(1860)].call(I)[p(1821)](" ")[p(435)]()[p(1821)]("]")[p(1080)]()[p(1132)]();
      }
      function c(I) {
        return I.toUpperCase();
      }
      function u(I) {
        const p = B;
        return I != null ? I instanceof Array ? I : typeof I[p(1726)] !== p(1455) || I[p(1821)] || I[p(2102)] || I[p(1297)] ? [I] : Array[p(2250)][p(483)][p(1297)](I) : [];
      }
      function d(I, p) {
        var g = I;
        if (p) for (var w in p)
          g[w] = p[w];
        return g;
      }
      function l(I) {
        const p = B;
        var g = p(2548), w = p(2727), H = a(w, "[A-Fa-f]"), z = n(n("%[EFef]" + H + "%" + H + H + "%" + H + H) + "|" + n(p(512) + H + "%" + H + H) + "|" + n("%" + H + H)), n0 = p(1211), d0 = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", P0 = a(n0, d0), j0 = I ? p(808) : "[]", W0 = I ? p(1496) : "[]", I0 = a(g, w, p(1827), j0);
        n(g + a(g, w, "[\\+\\-\\.]") + "*"), n(n(z + "|" + a(I0, d0, p(1512))) + "*");
        var D0 = n(n(p(1961)) + "|" + n(p(2187) + w) + "|" + n("1" + w + w) + "|" + n(p(898) + w) + p(2641) + w), Z0 = n(D0 + "\\." + D0 + "\\." + D0 + "\\." + D0), g0 = n(H + p(2169)), $0 = n(n(g0 + "\\:" + g0) + "|" + Z0), K0 = n(n(g0 + "\\:") + p(1713) + $0), H0 = n(p(1087) + n(g0 + "\\:") + p(333) + $0), ke = n(n(g0) + p(1770) + n(g0 + "\\:") + p(1482) + $0), ie = n(n(n(g0 + "\\:") + p(1615) + g0) + "?\\:\\:" + n(g0 + "\\:") + p(1685) + $0), ce = n(n(n(g0 + "\\:") + p(1728) + g0) + p(1770) + n(g0 + "\\:") + p(2083) + $0), ze = n(n(n(g0 + "\\:") + p(2441) + g0) + p(1770) + g0 + "\\:" + $0), Fe = n(n(n(g0 + "\\:") + p(1654) + g0) + p(1770) + $0), te = n(n(n(g0 + "\\:") + p(1070) + g0) + p(1770) + g0), ue = n(n(n(g0 + "\\:") + p(2081) + g0) + p(1770)), be = n([K0, H0, ke, ie, ce, ze, Fe, te, ue][p(2131)]("|")), Pe = n(n(I0 + "|" + z) + "+");
        n(p(2275) + H + "+\\." + a(I0, d0, "[\\:]") + "+"), n(n(z + "|" + a(I0, d0)) + "*");
        var de = n(z + "|" + a(I0, d0, p(2432)));
        return n(n(z + "|" + a(I0, d0, "[\\@]")) + "+"), n(n(de + "|" + a(p(2106), W0)) + "*"), { NOT_SCHEME: new RegExp(a(p(2722), g, w, p(901)), "g"), NOT_USERINFO: new RegExp(a("[^\\%\\:]", I0, d0), "g"), NOT_HOST: new RegExp(a(p(1819), I0, d0), "g"), NOT_PATH: new RegExp(a("[^\\%\\/\\:\\@]", I0, d0), "g"), NOT_PATH_NOSCHEME: new RegExp(a("[^\\%\\/\\@]", I0, d0), "g"), NOT_QUERY: new RegExp(a("[^\\%]", I0, d0, p(2200), W0), "g"), NOT_FRAGMENT: new RegExp(a(p(1562), I0, d0, "[\\:\\@\\/\\?]"), "g"), ESCAPE: new RegExp(a("[^]", I0, d0), "g"), UNRESERVED: new RegExp(I0, "g"), OTHER_CHARS: new RegExp(a("[^\\%]", I0, P0), "g"), PCT_ENCODED: new RegExp(z, "g"), IPV4ADDRESS: new RegExp("^(" + Z0 + ")$"), IPV6ADDRESS: new RegExp(p(2517) + be + ")" + n(n(p(339) + H + p(1414)) + "(" + Pe + ")") + p(2843)) };
      }
      var f = l(!1), b = l(!0), h = /* @__PURE__ */ function() {
        function I(p, g) {
          const w = B;
          var H = [], z = !0, n0 = !1, d0 = void 0;
          try {
            for (var P0 = p[Symbol[w(2139)]](), j0; !(z = (j0 = P0.next()).done) && (H[w(1072)](j0[w(1163)]), !(g && H[w(1726)] === g)); z = !0)
              ;
          } catch (W0) {
            n0 = !0, d0 = W0;
          } finally {
            try {
              !z && P0[w(1746)] && P0[w(1746)]();
            } finally {
              if (n0) throw d0;
            }
          }
          return H;
        }
        return function(p, g) {
          const w = B;
          if (Array.isArray(p)) return p;
          if (Symbol.iterator in Object(p)) return I(p, g);
          throw new TypeError(w(540));
        };
      }(), m = function(I) {
        const p = B;
        if (Array.isArray(I)) {
          for (var g = 0, w = Array(I.length); g < I[p(1726)]; g++) w[g] = I[g];
          return w;
        } else return Array[p(1082)](I);
      }, v = 2147483647, S = 36, P = 1, F = 26, A = 38, R = 700, E = 72, C = 128, D = "-", j = /^xn--/, M = /[^\0-\x7E]/, N = /[\x2E\u3002\uFF0E\uFF61]/g, q = { overflow: e(2281), "not-basic": e(1066), "invalid-input": e(2032) }, U = S - P, $ = Math[e(1450)], V = String[e(1241)];
      function G(I) {
        throw new RangeError(q[I]);
      }
      function c0(I, p) {
        const g = e;
        for (var w = [], H = I[g(1726)]; H--; )
          w[H] = p(I[H]);
        return w;
      }
      function u0(I, p) {
        const g = e;
        var w = I[g(1821)]("@"), H = "";
        w[g(1726)] > 1 && (H = w[0] + "@", I = w[1]), I = I[g(521)](N, ".");
        var z = I.split("."), n0 = c0(z, p)[g(2131)](".");
        return H + n0;
      }
      function l0(I) {
        const p = e;
        for (var g = [], w = 0, H = I[p(1726)]; w < H; ) {
          var z = I.charCodeAt(w++);
          if (z >= 55296 && z <= 56319 && w < H) {
            var n0 = I[p(682)](w++);
            (n0 & 64512) == 56320 ? g[p(1072)](((z & 1023) << 10) + (n0 & 1023) + 65536) : (g.push(z), w--);
          } else g[p(1072)](z);
        }
        return g;
      }
      var o0 = function(p) {
        return String[e(537)].apply(String, m(p));
      }, f0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : S;
      }, k0 = function(p, g) {
        return p + 22 + 75 * (p < 26) - ((g != 0) << 5);
      }, y0 = function(p, g, w) {
        var H = 0;
        for (p = w ? $(p / R) : p >> 1, p += $(p / g); p > U * F >> 1; H += S)
          p = $(p / U);
        return $(H + (U + 1) * p / (p + A));
      }, M0 = function(p) {
        const g = e;
        var w = [], H = p.length, z = 0, n0 = C, d0 = E, P0 = p.lastIndexOf(D);
        P0 < 0 && (P0 = 0);
        for (var j0 = 0; j0 < P0; ++j0)
          p[g(682)](j0) >= 128 && G(g(2320)), w[g(1072)](p[g(682)](j0));
        for (var W0 = P0 > 0 ? P0 + 1 : 0; W0 < H; ) {
          for (var I0 = z, D0 = 1, Z0 = S; ; Z0 += S) {
            W0 >= H && G(g(2616));
            var g0 = f0(p.charCodeAt(W0++));
            (g0 >= S || g0 > $((v - z) / D0)) && G("overflow"), z += g0 * D0;
            var $0 = Z0 <= d0 ? P : Z0 >= d0 + F ? F : Z0 - d0;
            if (g0 < $0) break;
            var K0 = S - $0;
            D0 > $(v / K0) && G("overflow"), D0 *= K0;
          }
          var H0 = w[g(1726)] + 1;
          d0 = y0(z - I0, H0, I0 == 0), $(z / H0) > v - n0 && G(g(2835)), n0 += $(z / H0), z %= H0, w[g(1719)](z++, 0, n0);
        }
        return String.fromCodePoint[g(847)](String, w);
      }, N0 = function(p) {
        const g = e;
        var w = [];
        p = l0(p);
        var H = p.length, z = C, n0 = 0, d0 = E, P0 = !0, j0 = !1, W0 = void 0;
        try {
          for (var I0 = p[Symbol[g(2139)]](), D0; !(P0 = (D0 = I0[g(2787)]())[g(2075)]); P0 = !0) {
            var Z0 = D0[g(1163)];
            Z0 < 128 && w[g(1072)](V(Z0));
          }
        } catch (Ge) {
          j0 = !0, W0 = Ge;
        } finally {
          try {
            !P0 && I0[g(1746)] && I0[g(1746)]();
          } finally {
            if (j0) throw W0;
          }
        }
        var g0 = w[g(1726)], $0 = g0;
        for (g0 && w[g(1072)](D); $0 < H; ) {
          var K0 = v, H0 = !0, ke = !1, ie = void 0;
          try {
            for (var ce = p[Symbol[g(2139)]](), ze; !(H0 = (ze = ce[g(2787)]())[g(2075)]); H0 = !0) {
              var Fe = ze[g(1163)];
              Fe >= z && Fe < K0 && (K0 = Fe);
            }
          } catch (Ge) {
            ke = !0, ie = Ge;
          } finally {
            try {
              !H0 && ce[g(1746)] && ce[g(1746)]();
            } finally {
              if (ke) throw ie;
            }
          }
          var te = $0 + 1;
          K0 - z > $((v - n0) / te) && G(g(2835)), n0 += (K0 - z) * te, z = K0;
          var ue = !0, be = !1, Pe = void 0;
          try {
            for (var de = p[Symbol.iterator](), yr; !(ue = (yr = de[g(2787)]())[g(2075)]); ue = !0) {
              var vr = yr[g(1163)];
              if (vr < z && ++n0 > v && G(g(2835)), vr == z) {
                for (var ux = n0, dx = S; ; dx += S) {
                  var lx = dx <= d0 ? P : dx >= d0 + F ? F : dx - d0;
                  if (ux < lx) break;
                  var wr = ux - lx, Sr = S - lx;
                  w[g(1072)](V(k0(lx + wr % Sr, 0))), ux = $(wr / Sr);
                }
                w.push(V(k0(ux, 0))), d0 = y0(n0, te, $0 == g0), n0 = 0, ++$0;
              }
            }
          } catch (Ge) {
            be = !0, Pe = Ge;
          } finally {
            try {
              !ue && de[g(1746)] && de[g(1746)]();
            } finally {
              if (be) throw Pe;
            }
          }
          ++n0, ++z;
        }
        return w.join("");
      }, J0 = function(p) {
        return u0(p, function(g) {
          const w = B;
          return j[w(1723)](g) ? M0(g[w(483)](4).toLowerCase()) : g;
        });
      }, O = function(p) {
        return u0(p, function(g) {
          return M[B(1723)](g) ? "xn--" + N0(g) : g;
        });
      }, T = { version: e(2879), ucs2: { decode: l0, encode: o0 }, decode: M0, encode: N0, toASCII: O, toUnicode: J0 }, L = {};
      function J(I) {
        const p = e;
        var g = I[p(682)](0), w = void 0;
        return g < 16 ? w = "%0" + g[p(1860)](16)[p(1006)]() : g < 128 ? w = "%" + g[p(1860)](16).toUpperCase() : g < 2048 ? w = "%" + (g >> 6 | 192).toString(16).toUpperCase() + "%" + (g & 63 | 128)[p(1860)](16)[p(1006)]() : w = "%" + (g >> 12 | 224).toString(16)[p(1006)]() + "%" + (g >> 6 & 63 | 128)[p(1860)](16).toUpperCase() + "%" + (g & 63 | 128)[p(1860)](16)[p(1006)](), w;
      }
      function X(I) {
        const p = e;
        for (var g = "", w = 0, H = I[p(1726)]; w < H; ) {
          var z = parseInt(I[p(2047)](w + 1, 2), 16);
          if (z < 128) g += String[p(1241)](z), w += 3;
          else if (z >= 194 && z < 224) {
            if (H - w >= 6) {
              var n0 = parseInt(I[p(2047)](w + 4, 2), 16);
              g += String[p(1241)]((z & 31) << 6 | n0 & 63);
            } else g += I[p(2047)](w, 6);
            w += 6;
          } else if (z >= 224) {
            if (H - w >= 9) {
              var d0 = parseInt(I[p(2047)](w + 4, 2), 16), P0 = parseInt(I[p(2047)](w + 7, 2), 16);
              g += String.fromCharCode((z & 15) << 12 | (d0 & 63) << 6 | P0 & 63);
            } else g += I[p(2047)](w, 9);
            w += 9;
          } else g += I[p(2047)](w, 3), w += 3;
        }
        return g;
      }
      function W(I, p) {
        const g = e;
        function w(H) {
          const z = B;
          var n0 = X(H);
          return n0[z(1074)](p.UNRESERVED) ? n0 : H;
        }
        return I[g(2223)] && (I[g(2223)] = String(I.scheme)[g(521)](p[g(491)], w).toLowerCase()[g(521)](p[g(1609)], "")), I[g(1871)] !== void 0 && (I[g(1871)] = String(I[g(1871)])[g(521)](p[g(491)], w)[g(521)](p[g(983)], J)[g(521)](p[g(491)], c)), I[g(1347)] !== void 0 && (I[g(1347)] = String(I[g(1347)]).replace(p.PCT_ENCODED, w)[g(1132)]()[g(521)](p[g(2492)], J)[g(521)](p[g(491)], c)), I[g(2920)] !== void 0 && (I.path = String(I[g(2920)])[g(521)](p[g(491)], w).replace(I[g(2223)] ? p[g(1937)] : p.NOT_PATH_NOSCHEME, J)[g(521)](p[g(491)], c)), I[g(2642)] !== void 0 && (I[g(2642)] = String(I.query).replace(p[g(491)], w)[g(521)](p.NOT_QUERY, J)[g(521)](p[g(491)], c)), I[g(2205)] !== void 0 && (I[g(2205)] = String(I[g(2205)]).replace(p[g(491)], w).replace(p[g(2074)], J)[g(521)](p[g(491)], c)), I;
      }
      function Q(I) {
        return I.replace(/^0*(.*)/, "$1") || "0";
      }
      function i0(I, p) {
        const g = e;
        var w = I[g(1074)](p[g(1483)]) || [], H = h(w, 2), z = H[1];
        return z ? z[g(1821)](".")[g(2086)](Q)[g(2131)](".") : I;
      }
      function s0(I, p) {
        const g = e;
        var w = I[g(1074)](p[g(1061)]) || [], H = h(w, 3), z = H[1], n0 = H[2];
        if (z) {
          for (var d0 = z.toLowerCase()[g(1821)]("::")[g(1351)](), P0 = h(d0, 2), j0 = P0[0], W0 = P0[1], I0 = W0 ? W0.split(":")[g(2086)](Q) : [], D0 = j0[g(1821)](":")[g(2086)](Q), Z0 = p.IPV4ADDRESS[g(1723)](D0[D0.length - 1]), g0 = Z0 ? 7 : 8, $0 = D0.length - g0, K0 = Array(g0), H0 = 0; H0 < g0; ++H0)
            K0[H0] = I0[H0] || D0[$0 + H0] || "";
          Z0 && (K0[g0 - 1] = i0(K0[g0 - 1], p));
          var ke = K0[g(2568)](function(te, ue, be) {
            const Pe = g;
            if (!ue || ue === "0") {
              var de = te[te[Pe(1726)] - 1];
              de && de.index + de[Pe(1726)] === be ? de[Pe(1726)]++ : te.push({ index: be, length: 1 });
            }
            return te;
          }, []), ie = ke[g(1240)](function(te, ue) {
            const be = g;
            return ue.length - te[be(1726)];
          })[0], ce = void 0;
          if (ie && ie.length > 1) {
            var ze = K0[g(483)](0, ie.index), Fe = K0[g(483)](ie.index + ie.length);
            ce = ze[g(2131)](":") + "::" + Fe.join(":");
          } else ce = K0[g(2131)](":");
          return n0 && (ce += "%" + n0), ce;
        } else return I;
      }
      var t0 = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, L0 = ""[e(1074)](/(){0}/)[1] === void 0;
      function A0(I) {
        const p = e;
        var g = arguments[p(1726)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = {}, H = g.iri !== !1 ? b : f;
        g.reference === p(525) && (I = (g.scheme ? g.scheme + ":" : "") + "//" + I);
        var z = I.match(t0);
        if (z) {
          L0 ? (w[p(2223)] = z[1], w[p(1871)] = z[3], w[p(1347)] = z[4], w[p(405)] = parseInt(z[5], 10), w.path = z[6] || "", w.query = z[7], w[p(2205)] = z[8], isNaN(w[p(405)]) && (w[p(405)] = z[5])) : (w[p(2223)] = z[1] || void 0, w[p(1871)] = I[p(1602)]("@") !== -1 ? z[3] : void 0, w[p(1347)] = I[p(1602)]("//") !== -1 ? z[4] : void 0, w.port = parseInt(z[5], 10), w[p(2920)] = z[6] || "", w[p(2642)] = I[p(1602)]("?") !== -1 ? z[7] : void 0, w[p(2205)] = I[p(1602)]("#") !== -1 ? z[8] : void 0, isNaN(w[p(405)]) && (w[p(405)] = I.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? z[4] : void 0)), w[p(1347)] && (w[p(1347)] = s0(i0(w[p(1347)], H), H)), w[p(2223)] === void 0 && w[p(1871)] === void 0 && w[p(1347)] === void 0 && w.port === void 0 && !w[p(2920)] && w[p(2642)] === void 0 ? w[p(1266)] = p(1303) : w[p(2223)] === void 0 ? w[p(1266)] = p(1363) : w[p(2205)] === void 0 ? w[p(1266)] = "absolute" : w[p(1266)] = p(666), g.reference && g[p(1266)] !== p(525) && g[p(1266)] !== w.reference && (w.error = w[p(795)] || p(960) + g[p(1266)] + p(2739));
          var n0 = L[(g.scheme || w[p(2223)] || "")[p(1132)]()];
          if (!g[p(2284)] && (!n0 || !n0[p(2284)])) {
            if (w[p(1347)] && (g.domainHost || n0 && n0.domainHost)) try {
              w[p(1347)] = T[p(2885)](w.host[p(521)](H[p(491)], X)[p(1132)]());
            } catch (d0) {
              w[p(795)] = w[p(795)] || "Host's domain name can not be converted to ASCII via punycode: " + d0;
            }
            W(w, f);
          } else W(w, H);
          n0 && n0.parse && n0.parse(w, g);
        } else w.error = w.error || p(2058);
        return w;
      }
      function U0(I, p) {
        const g = e;
        var w = p[g(567)] !== !1 ? b : f, H = [];
        return I[g(1871)] !== void 0 && (H[g(1072)](I[g(1871)]), H[g(1072)]("@")), I.host !== void 0 && H[g(1072)](s0(i0(String(I[g(1347)]), w), w)[g(521)](w[g(1061)], function(z, n0, d0) {
          const P0 = g;
          return "[" + n0 + (d0 ? P0(1294) + d0 : "") + "]";
        })), (typeof I[g(405)] == "number" || typeof I.port === g(360)) && (H[g(1072)](":"), H[g(1072)](String(I[g(405)]))), H.length ? H[g(2131)]("") : void 0;
      }
      var S0 = /^\.\.?\//, G0 = /^\/\.(\/|$)/, ne = /^\/\.\.(\/|$)/, Q0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function O0(I) {
        const p = e;
        for (var g = []; I[p(1726)]; )
          if (I[p(1074)](S0)) I = I[p(521)](S0, "");
          else if (I[p(1074)](G0)) I = I[p(521)](G0, "/");
          else if (I[p(1074)](ne)) I = I[p(521)](ne, "/"), g[p(435)]();
          else if (I === "." || I === "..") I = "";
          else {
            var w = I[p(1074)](Q0);
            if (w) {
              var H = w[0];
              I = I[p(483)](H[p(1726)]), g[p(1072)](H);
            } else throw new Error(p(913));
          }
        return g[p(2131)]("");
      }
      function V0(I) {
        const p = e;
        var g = arguments[p(1726)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = g[p(567)] ? b : f, H = [], z = L[(g[p(2223)] || I[p(2223)] || "")[p(1132)]()];
        if (z && z[p(1387)] && z[p(1387)](I, g), I[p(1347)] && !w[p(1061)][p(1723)](I.host)) {
          if (g.domainHost || z && z[p(2319)]) try {
            I[p(1347)] = g[p(567)] ? T[p(2233)](I.host) : T[p(2885)](I[p(1347)][p(521)](w[p(491)], X)[p(1132)]());
          } catch (P0) {
            I[p(795)] = I.error || p(1489) + (g[p(567)] ? p(1864) : p(2795)) + p(806) + P0;
          }
        }
        W(I, w), g[p(1266)] !== p(525) && I[p(2223)] && (H[p(1072)](I.scheme), H.push(":"));
        var n0 = U0(I, g);
        if (n0 !== void 0 && (g[p(1266)] !== p(525) && H[p(1072)]("//"), H[p(1072)](n0), I.path && I[p(2920)].charAt(0) !== "/" && H[p(1072)]("/")), I.path !== void 0) {
          var d0 = I[p(2920)];
          !g[p(2762)] && (!z || !z[p(2762)]) && (d0 = O0(d0)), n0 === void 0 && (d0 = d0[p(521)](/^\/\//, p(1372))), H[p(1072)](d0);
        }
        return I[p(2642)] !== void 0 && (H[p(1072)]("?"), H[p(1072)](I[p(2642)])), I[p(2205)] !== void 0 && (H[p(1072)]("#"), H[p(1072)](I[p(2205)])), H[p(2131)]("");
      }
      function Y0(I, p) {
        const g = e;
        var w = arguments[g(1726)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, H = arguments[3], z = {};
        return !H && (I = A0(V0(I, w), w), p = A0(V0(p, w), w)), w = w || {}, !w.tolerant && p[g(2223)] ? (z[g(2223)] = p.scheme, z[g(1871)] = p.userinfo, z[g(1347)] = p[g(1347)], z[g(405)] = p[g(405)], z[g(2920)] = O0(p[g(2920)] || ""), z[g(2642)] = p[g(2642)]) : (p[g(1871)] !== void 0 || p[g(1347)] !== void 0 || p[g(405)] !== void 0 ? (z[g(1871)] = p[g(1871)], z.host = p.host, z.port = p.port, z[g(2920)] = O0(p[g(2920)] || ""), z.query = p[g(2642)]) : (p[g(2920)] ? (p[g(2920)][g(2204)](0) === "/" ? z[g(2920)] = O0(p[g(2920)]) : ((I[g(1871)] !== void 0 || I[g(1347)] !== void 0 || I[g(405)] !== void 0) && !I[g(2920)] ? z[g(2920)] = "/" + p[g(2920)] : I[g(2920)] ? z.path = I.path[g(483)](0, I[g(2920)][g(1321)]("/") + 1) + p[g(2920)] : z[g(2920)] = p[g(2920)], z[g(2920)] = O0(z.path)), z.query = p[g(2642)]) : (z[g(2920)] = I[g(2920)], p[g(2642)] !== void 0 ? z[g(2642)] = p[g(2642)] : z[g(2642)] = I[g(2642)]), z[g(1871)] = I[g(1871)], z[g(1347)] = I.host, z[g(405)] = I[g(405)]), z[g(2223)] = I[g(2223)]), z[g(2205)] = p[g(2205)], z;
      }
      function $e(I, p, g) {
        var H = d({ scheme: e(833) }, g);
        return V0(Y0(A0(I, H), A0(p, H), H, !0), H);
      }
      function Mx(I, p) {
        const g = e;
        return typeof I === g(360) ? I = V0(A0(I, p), p) : i(I) === g(1694) && (I = A0(V0(I, p), p)), I;
      }
      function bn(I, p, g) {
        const w = e;
        return typeof I == "string" ? I = V0(A0(I, g), g) : i(I) === w(1694) && (I = V0(I, g)), typeof p === w(360) ? p = V0(A0(p, g), g) : i(p) === w(1694) && (p = V0(p, g)), I === p;
      }
      function gn(I, p) {
        const g = e;
        return I && I[g(1860)]()[g(521)](!p || !p[g(567)] ? f[g(2758)] : b[g(2758)], J);
      }
      function me(I, p) {
        const g = e;
        return I && I[g(1860)]().replace(!p || !p.iri ? f[g(491)] : b[g(491)], X);
      }
      var Ke = { scheme: "http", domainHost: !0, parse: function(p, g) {
        const w = e;
        return !p.host && (p.error = p[w(795)] || w(1340)), p;
      }, serialize: function(p, g) {
        const w = e;
        var H = String(p.scheme)[w(1132)]() === w(2216);
        return (p[w(405)] === (H ? 443 : 80) || p[w(405)] === "") && (p.port = void 0), !p[w(2920)] && (p[w(2920)] = "/"), p;
      } }, dr = { scheme: e(2216), domainHost: Ke[e(2319)], parse: Ke.parse, serialize: Ke[e(1387)] };
      function lr(I) {
        const p = e;
        return typeof I[p(1638)] == "boolean" ? I.secure : String(I[p(2223)]).toLowerCase() === p(958);
      }
      var _e = { scheme: "ws", domainHost: !0, parse: function(p, g) {
        const w = e;
        var H = p;
        return H[w(1638)] = lr(H), H[w(2916)] = (H[w(2920)] || "/") + (H[w(2642)] ? "?" + H[w(2642)] : ""), H.path = void 0, H[w(2642)] = void 0, H;
      }, serialize: function(p, g) {
        const w = e;
        if ((p[w(405)] === (lr(p) ? 443 : 80) || p[w(405)] === "") && (p[w(405)] = void 0), typeof p[w(1638)] === w(2788) && (p[w(2223)] = p[w(1638)] ? w(958) : "ws", p[w(1638)] = void 0), p[w(2916)]) {
          var H = p[w(2916)][w(1821)]("?"), z = h(H, 2), n0 = z[0], d0 = z[1];
          p[w(2920)] = n0 && n0 !== "/" ? n0 : void 0, p[w(2642)] = d0, p[w(2916)] = void 0;
        }
        return p[w(2205)] = void 0, p;
      } }, fr = { scheme: "wss", domainHost: _e[e(2319)], parse: _e[e(1724)], serialize: _e[e(1387)] }, yn = {}, hr = e(2797) + "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", oe = "[0-9A-Fa-f]", vn = n(n("%[EFef]" + oe + "%" + oe + oe + "%" + oe + oe) + "|" + n(e(512) + oe + "%" + oe + oe) + "|" + n("%" + oe + oe)), wn = e(1448), Sn = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", kn = a(Sn, e(1329)), Pn = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", In = new RegExp(hr, "g"), He = new RegExp(vn, "g"), En = new RegExp(a("[^]", wn, e(1914), e(2799), kn), "g"), pr = new RegExp(a("[^]", hr, Pn), "g"), Rn = pr;
      function Lx(I) {
        const p = e;
        var g = X(I);
        return g[p(1074)](In) ? g : I;
      }
      var mr = { scheme: e(2520), parse: function(p, g) {
        const w = e;
        var H = p, z = H.to = H[w(2920)] ? H[w(2920)].split(",") : [];
        if (H[w(2920)] = void 0, H[w(2642)]) {
          for (var n0 = !1, d0 = {}, P0 = H[w(2642)][w(1821)]("&"), j0 = 0, W0 = P0[w(1726)]; j0 < W0; ++j0) {
            var I0 = P0[j0][w(1821)]("=");
            switch (I0[0]) {
              case "to":
                for (var D0 = I0[1][w(1821)](","), Z0 = 0, g0 = D0[w(1726)]; Z0 < g0; ++Z0)
                  z[w(1072)](D0[Z0]);
                break;
              case w(1666):
                H.subject = me(I0[1], g);
                break;
              case "body":
                H[w(2295)] = me(I0[1], g);
                break;
              default:
                n0 = !0, d0[me(I0[0], g)] = me(I0[1], g);
                break;
            }
          }
          n0 && (H[w(1328)] = d0);
        }
        H[w(2642)] = void 0;
        for (var $0 = 0, K0 = z.length; $0 < K0; ++$0) {
          var H0 = z[$0][w(1821)]("@");
          if (H0[0] = me(H0[0]), g[w(2284)]) H0[1] = me(H0[1], g)[w(1132)]();
          else try {
            H0[1] = T[w(2885)](me(H0[1], g)[w(1132)]());
          } catch (ke) {
            H.error = H[w(795)] || w(1130) + ke;
          }
          z[$0] = H0.join("@");
        }
        return H;
      }, serialize: function(p, g) {
        const w = e;
        var H = p, z = u(p.to);
        if (z) {
          for (var n0 = 0, d0 = z[w(1726)]; n0 < d0; ++n0) {
            var P0 = String(z[n0]), j0 = P0[w(1321)]("@"), W0 = P0[w(483)](0, j0)[w(521)](He, Lx)[w(521)](He, c)[w(521)](En, J), I0 = P0[w(483)](j0 + 1);
            try {
              I0 = g.iri ? T[w(2233)](I0) : T[w(2885)](me(I0, g)[w(1132)]());
            } catch ($0) {
              H.error = H[w(795)] || "Email address's domain name can not be converted to " + (g[w(567)] ? w(1864) : w(2795)) + w(806) + $0;
            }
            z[n0] = W0 + "@" + I0;
          }
          H.path = z[w(2131)](",");
        }
        var D0 = p[w(1328)] = p[w(1328)] || {};
        p[w(1666)] && (D0[w(1666)] = p[w(1666)]), p[w(2295)] && (D0[w(2295)] = p.body);
        var Z0 = [];
        for (var g0 in D0)
          D0[g0] !== yn[g0] && Z0[w(1072)](g0[w(521)](He, Lx).replace(He, c)[w(521)](pr, J) + "=" + D0[g0][w(521)](He, Lx)[w(521)](He, c).replace(Rn, J));
        return Z0[w(1726)] && (H[w(2642)] = Z0[w(2131)]("&")), H;
      } }, Cn = /^([^\:]+)\:(.*)/, br = { scheme: e(792), parse: function(p, g) {
        const w = e;
        var H = p[w(2920)] && p[w(2920)].match(Cn), z = p;
        if (H) {
          var n0 = g[w(2223)] || z[w(2223)] || w(792), d0 = H[1][w(1132)](), P0 = H[2], j0 = n0 + ":" + (g[w(2072)] || d0), W0 = L[j0];
          z[w(2072)] = d0, z[w(1453)] = P0, z[w(2920)] = void 0, W0 && (z = W0.parse(z, g));
        } else z[w(795)] = z[w(795)] || w(501);
        return z;
      }, serialize: function(p, g) {
        const w = e;
        var H = g[w(2223)] || p.scheme || w(792), z = p[w(2072)], n0 = H + ":" + (g[w(2072)] || z), d0 = L[n0];
        d0 && (p = d0[w(1387)](p, g));
        var P0 = p, j0 = p[w(1453)];
        return P0.path = (z || g[w(2072)]) + ":" + j0, P0;
      } }, Fn = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, gr = { scheme: e(1194), parse: function(p, g) {
        const w = e;
        var H = p;
        return H.uuid = H.nss, H[w(1453)] = void 0, !g.tolerant && (!H[w(2434)] || !H[w(2434)].match(Fn)) && (H[w(795)] = H.error || w(2053)), H;
      }, serialize: function(p, g) {
        const w = e;
        var H = p;
        return H[w(1453)] = (p[w(2434)] || "").toLowerCase(), H;
      } };
      L[Ke[e(2223)]] = Ke, L[dr[e(2223)]] = dr, L[_e[e(2223)]] = _e, L[fr[e(2223)]] = fr, L[mr[e(2223)]] = mr, L[br[e(2223)]] = br, L[gr[e(2223)]] = gr, s.SCHEMES = L, s.pctEncChar = J, s[e(2803)] = X, s.parse = A0, s[e(2888)] = O0, s[e(1387)] = V0, s[e(1276)] = Y0, s[e(422)] = $e, s[e(2831)] = Mx, s[e(700)] = bn, s.escapeComponent = gn, s[e(1721)] = me, Object.defineProperty(s, e(2417), { value: !0 });
    });
  }(Ye, Ye[o(684)])), Ye[o(684)];
}
var _x, xa;
function ir() {
  return xa || (xa = 1, _x = function o(x, t) {
    const s = B;
    if (x === t) return !0;
    if (x && t && typeof x == "object" && typeof t == s(1694)) {
      if (x[s(2617)] !== t.constructor) return !1;
      var e, a, n;
      if (Array[s(344)](x)) {
        if (e = x[s(1726)], e != t[s(1726)]) return !1;
        for (a = e; a-- !== 0; ) if (!o(x[a], t[a])) return !1;
        return !0;
      }
      if (x[s(2617)] === RegExp) return x[s(2752)] === t[s(2752)] && x.flags === t[s(1180)];
      if (x[s(1886)] !== Object[s(2250)][s(1886)]) return x[s(1886)]() === t[s(1886)]();
      if (x[s(1860)] !== Object[s(2250)][s(1860)]) return x[s(1860)]() === t[s(1860)]();
      if (n = Object[s(2023)](x), e = n[s(1726)], e !== Object.keys(t)[s(1726)]) return !1;
      for (a = e; a-- !== 0; ) if (!Object[s(2250)].hasOwnProperty.call(t, n[a])) return !1;
      for (a = e; a-- !== 0; ) {
        var i = n[a];
        if (!o(x[i], t[i])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), _x;
}
var Gx, ta;
function V2() {
  return ta || (ta = 1, Gx = function(x) {
    const t = B;
    for (var s = 0, e = x[t(1726)], a = 0, n; a < e; )
      s++, n = x[t(682)](a++), n >= 55296 && n <= 56319 && a < e && (n = x[t(682)](a), (n & 64512) == 56320 && a++);
    return s;
  }), Gx;
}
var Jx, ra;
function Be() {
  const o = r;
  if (ra) return Jx;
  ra = 1, Jx = { copy: x, checkDataType: t, checkDataTypes: s, coerceToTypes: a, toHash: n, getProperty: u, escapeQuotes: d, equal: ir(), ucs2length: V2(), varOccurences: l, varReplace: f, schemaHasRules: b, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: v, getPathExpr: S, getPath: P, getData: R, unescapeFragment: C, unescapeJsonPointer: M, escapeFragment: D, escapeJsonPointer: j };
  function x(N, q) {
    q = q || {};
    for (var U in N) q[U] = N[U];
    return q;
  }
  function t(N, q, U, $) {
    const V = B;
    var G = V($ ? 2011 : 2279), c0 = $ ? V(2452) : " && ", u0 = $ ? "!" : "", l0 = $ ? "" : "!";
    switch (N) {
      case V(833):
        return q + G + V(833);
      case V(2241):
        return u0 + V(377) + q + ")";
      case V(1694):
        return "(" + u0 + q + c0 + "typeof " + q + G + V(1525) + c0 + l0 + V(377) + q + "))";
      case V(1046):
        return V(1552) + q + G + '"number"' + c0 + l0 + "(" + q + V(1795) + c0 + q + G + q + (U ? c0 + u0 + "isFinite(" + q + ")" : "") + ")";
      case V(1455):
        return V(1552) + q + G + '"' + N + '"' + (U ? c0 + u0 + "isFinite(" + q + ")" : "") + ")";
      default:
        return V(1058) + q + G + '"' + N + '"';
    }
  }
  function s(N, q, U) {
    const $ = B;
    switch (N[$(1726)]) {
      case 1:
        return t(N[0], q, U, !0);
      default:
        var V = "", G = n(N);
        G[$(2241)] && G[$(1694)] && (V = G[$(833)] ? "(" : "(!" + q + " || ", V += "typeof " + q + $(1239), delete G[$(833)], delete G[$(2241)], delete G.object), G[$(1455)] && delete G[$(1046)];
        for (var c0 in G) V += (V ? " && " : "") + t(c0, q, U, !0);
        return V;
    }
  }
  var e = n([o(360), o(1455), "integer", o(2788), o(833)]);
  function a(N, q) {
    const U = o;
    if (Array[U(344)](q)) {
      for (var $ = [], V = 0; V < q.length; V++) {
        var G = q[V];
        (e[G] || N === U(2241) && G === U(2241)) && ($[$[U(1726)]] = G);
      }
      if ($[U(1726)]) return $;
    } else {
      if (e[q]) return [q];
      if (N === "array" && q === U(2241)) return ["array"];
    }
  }
  function n(N) {
    const q = o;
    for (var U = {}, $ = 0; $ < N[q(1726)]; $++) U[N[$]] = !0;
    return U;
  }
  var i = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(N) {
    const q = o;
    return typeof N == q(1455) ? "[" + N + "]" : i[q(1723)](N) ? "." + N : "['" + d(N) + "']";
  }
  function d(N) {
    const q = o;
    return N[q(521)](c, q(1531))[q(521)](/\n/g, "\\n")[q(521)](/\r/g, "\\r")[q(521)](/\f/g, "\\f")[q(521)](/\t/g, "\\t");
  }
  function l(N, q) {
    const U = o;
    q += U(1114);
    var $ = N[U(1074)](new RegExp(q, "g"));
    return $ ? $[U(1726)] : 0;
  }
  function f(N, q, U) {
    const $ = o;
    return q += "([^0-9])", U = U[$(521)](/\$/g, $(2818)), N[$(521)](new RegExp(q, "g"), U + "$1");
  }
  function b(N, q) {
    if (typeof N == o(2788)) return !N;
    for (var $ in N) if (q[$]) return !0;
  }
  function h(N, q, U) {
    const $ = o;
    if (typeof N == $(2788)) return !N && U != $(356);
    for (var V in N) if (V != U && q[V]) return !0;
  }
  function m(N, q) {
    if (typeof N != "boolean") {
      for (var U in N) if (!q[U]) return U;
    }
  }
  function v(N) {
    return "'" + d(N) + "'";
  }
  function S(N, q, U, $) {
    const V = o;
    var G = U ? V(2343) + q + ($ ? "" : V(1549)) : $ ? V(2239) + q + V(2910) : "'[\\'' + " + q + V(1409);
    return E(N, G);
  }
  function P(N, q, U) {
    var $ = v(U ? "/" + j(q) : u(q));
    return E(N, $);
  }
  var F = /^\/(?:[^~]|~0|~1)*$/, A = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function R(N, q, U) {
    const $ = o;
    var V, G, c0, u0;
    if (N === "") return $(2291);
    if (N[0] == "/") {
      if (!F[$(1723)](N)) throw new Error($(889) + N);
      G = N, c0 = $(2291);
    } else {
      if (u0 = N[$(1074)](A), !u0) throw new Error($(889) + N);
      if (V = +u0[1], G = u0[2], G == "#") {
        if (V >= q) throw new Error($(1952) + V + $(1754) + q);
        return U[q - V];
      }
      if (V > q) throw new Error($(1048) + V + $(1754) + q);
      if (c0 = $(2171) + (q - V || ""), !G) return c0;
    }
    for (var l0 = c0, o0 = G[$(1821)]("/"), f0 = 0; f0 < o0[$(1726)]; f0++) {
      var k0 = o0[f0];
      k0 && (c0 += u(M(k0)), l0 += $(1175) + c0);
    }
    return l0;
  }
  function E(N, q) {
    const U = o;
    return N == '""' ? q : (N + " + " + q)[U(521)](/([^\\])' \+ '/g, "$1");
  }
  function C(N) {
    return M(decodeURIComponent(N));
  }
  function D(N) {
    return encodeURIComponent(j(N));
  }
  function j(N) {
    const q = o;
    return N[q(521)](/~/g, "~0")[q(521)](/\//g, "~1");
  }
  function M(N) {
    return N[o(521)](/~1/g, "/").replace(/~0/g, "~");
  }
  return Jx;
}
var Qx, aa;
function cn() {
  if (aa) return Qx;
  aa = 1;
  var o = Be();
  Qx = x;
  function x(t) {
    o[B(2554)](t, this);
  }
  return Qx;
}
var Xx = { exports: {} }, sa;
function W2() {
  const o = r;
  if (sa) return Xx[o(684)];
  sa = 1;
  var x = Xx[o(684)] = function(e, a, n) {
    const i = o;
    typeof a == i(975) && (n = a, a = {}), n = a.cb || n;
    var c = typeof n == i(975) ? n : n[i(750)] || function() {
    }, u = n[i(2748)] || function() {
    };
    t(a, c, u, e, "", e);
  };
  x[o(910)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[o(742)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[o(777)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[o(1678)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, a, n, i, c, u, d, l, f, b) {
    const h = o;
    if (i && typeof i == h(1694) && !Array.isArray(i)) {
      a(i, c, u, d, l, f, b);
      for (var m in i) {
        var v = i[m];
        if (Array[h(344)](v)) {
          if (m in x[h(742)])
            for (var S = 0; S < v[h(1726)]; S++) t(e, a, n, v[S], c + "/" + m + "/" + S, u, c, m, i, S);
        } else if (m in x.propsKeywords) {
          if (v && typeof v == h(1694))
            for (var P in v) t(e, a, n, v[P], c + "/" + m + "/" + s(P), u, c, m, i, P);
        } else (m in x[h(910)] || e[h(1198)] && !(m in x[h(1678)])) && t(e, a, n, v, c + "/" + m, u, c, m, i);
      }
      n(i, c, u, d, l, f, b);
    }
  }
  function s(e) {
    return e[o(521)](/~/g, "~0").replace(/\//g, "~1");
  }
  return Xx[o(684)];
}
var Yx, na;
function cr() {
  const o = r;
  if (na) return Yx;
  na = 1;
  var x = U2(), t = ir(), s = Be(), e = cn(), a = W2();
  Yx = n, n[o(878)] = P, n[o(1668)] = m, n[o(2173)] = F, n[o(2834)] = A, n[o(1643)] = f, n[o(1898)] = i;
  function n(R, E, C) {
    const D = o;
    var j = this[D(1411)][C];
    if (typeof j == "string")
      if (this[D(1411)][j]) j = this._refs[j];
      else return n.call(this, R, E, j);
    if (j = j || this[D(2357)][C], j instanceof e) return f(j[D(1898)], this._opts[D(2445)]) ? j[D(1898)] : j.validate || this[D(2551)](j);
    var M = i[D(1297)](this, E, C), N, q, U;
    return M && (N = M[D(1898)], E = M[D(1749)], U = M.baseId), N instanceof e ? q = N.validate || R[D(1297)](this, N[D(1898)], E, void 0, U) : N !== void 0 && (q = f(N, this[D(1644)][D(2445)]) ? N : R[D(1297)](this, N, E, void 0, U)), q;
  }
  function i(R, E) {
    const C = o;
    var D = x[C(1724)](E), j = v(D), M = m(this[C(542)](R[C(1898)]));
    if (Object[C(2023)](R[C(1898)]).length === 0 || j !== M) {
      var N = P(j), q = this._refs[N];
      if (typeof q == C(360)) return c[C(1297)](this, R, q, D);
      if (q instanceof e)
        q[C(2162)] || this[C(2551)](q), R = q;
      else if (q = this._schemas[N], q instanceof e) {
        if (q.validate || this[C(2551)](q), N == P(E)) return { schema: q, root: R, baseId: M };
        R = q;
      } else return;
      if (!R[C(1898)]) return;
      M = m(this._getId(R[C(1898)]));
    }
    return d[C(1297)](this, D, M, R[C(1898)], R);
  }
  function c(R, E, C) {
    const D = o;
    var j = i[D(1297)](this, R, E);
    if (j) {
      var M = j[D(1898)], N = j[D(1393)];
      R = j[D(1749)];
      var q = this[D(542)](M);
      return q && (N = F(N, q)), d[D(1297)](this, C, N, M, R);
    }
  }
  var u = s[o(1134)](["properties", o(2714), "enum", o(1566), o(1295)]);
  function d(R, E, C, D) {
    const j = o;
    if (R[j(2205)] = R[j(2205)] || "", R[j(2205)].slice(0, 1) == "/") {
      for (var M = R[j(2205)][j(1821)]("/"), N = 1; N < M[j(1726)]; N++) {
        var q = M[N];
        if (q) {
          if (q = s[j(1815)](q), C = C[q], C === void 0) break;
          var U;
          if (!u[q] && (U = this._getId(C), U && (E = F(E, U)), C[j(1800)])) {
            var $ = F(E, C[j(1800)]), V = i[j(1297)](this, D, $);
            V && (C = V[j(1898)], D = V[j(1749)], E = V[j(1393)]);
          }
        }
      }
      if (C !== void 0 && C !== D[j(1898)]) return { schema: C, root: D, baseId: E };
    }
  }
  var l = s.toHash(["type", o(839), o(2067), o(2501), o(1586), "maxProperties", o(489), o(936), o(1176), o(2774), o(2701), "uniqueItems", "multipleOf", o(2134), o(2115)]);
  function f(R, E) {
    if (E === !1) return !1;
    if (E === void 0 || E === !0) return b(R);
    if (E) return h(R) <= E;
  }
  function b(R) {
    const E = o;
    var C;
    if (Array[E(344)](R)) {
      for (var D = 0; D < R[E(1726)]; D++)
        if (C = R[D], typeof C == "object" && !b(C)) return !1;
    } else for (var j in R)
      if (j == E(1800) || (C = R[j], typeof C == "object" && !b(C))) return !1;
    return !0;
  }
  function h(R) {
    const E = o;
    var C = 0, D;
    if (Array[E(344)](R)) {
      for (var j = 0; j < R.length; j++)
        if (D = R[j], typeof D == E(1694) && (C += h(D)), C == 1 / 0) return 1 / 0;
    } else for (var M in R) {
      if (M == "$ref") return 1 / 0;
      if (l[M]) C++;
      else if (D = R[M], typeof D == E(1694) && (C += h(D) + 1), C == 1 / 0) return 1 / 0;
    }
    return C;
  }
  function m(R, E) {
    E !== !1 && (R = P(R));
    var C = x.parse(R);
    return v(C);
  }
  function v(R) {
    const E = o;
    return x.serialize(R)[E(1821)]("#")[0] + "#";
  }
  var S = /#\/?$/;
  function P(R) {
    return R ? R[o(521)](S, "") : "";
  }
  function F(R, E) {
    const C = o;
    return E = P(E), x[C(422)](R, E);
  }
  function A(R) {
    const E = o;
    var C = P(this[E(542)](R)), D = { "": C }, j = { "": m(C, !1) }, M = {}, N = this;
    return a(R, { allKeys: !0 }, function(q, U, $, V, G, c0, u0) {
      const l0 = E;
      if (U !== "") {
        var o0 = N[l0(542)](q), f0 = D[V], k0 = j[V] + "/" + G;
        if (u0 !== void 0 && (k0 += "/" + (typeof u0 == l0(1455) ? u0 : s[l0(2565)](u0))), typeof o0 == "string") {
          o0 = f0 = P(f0 ? x[l0(422)](f0, o0) : o0);
          var y0 = N[l0(1411)][o0];
          if (typeof y0 == l0(360) && (y0 = N[l0(1411)][y0]), y0 && y0[l0(1898)]) {
            if (!t(q, y0[l0(1898)])) throw new Error(l0(2596) + o0 + '" resolves to more than one schema');
          } else if (o0 != P(k0))
            if (o0[0] == "#") {
              if (M[o0] && !t(q, M[o0])) throw new Error(l0(2596) + o0 + l0(517));
              M[o0] = q;
            } else N[l0(1411)][o0] = k0;
        }
        D[U] = f0, j[U] = k0;
      }
    }), M;
  }
  return Yx;
}
var et, oa;
function ur() {
  if (oa) return et;
  oa = 1;
  var o = cr();
  et = { Validation: s(x), MissingRef: s(t) };
  function x(e) {
    const a = B;
    this.message = a(1546), this[a(1137)] = e, this.ajv = this[a(2534)] = !0;
  }
  t.message = function(e, a) {
    const n = B;
    return n(686) + a + n(2292) + e;
  };
  function t(e, a, n) {
    const i = B;
    this[i(2462)] = n || t[i(2462)](e, a), this[i(909)] = o[i(2173)](e, a), this[i(2552)] = o[i(878)](o[i(1668)](this[i(909)]));
  }
  function s(e) {
    const a = B;
    return e[a(2250)] = Object.create(Error[a(2250)]), e.prototype[a(2617)] = e, e;
  }
  return et;
}
var xt, ia;
function un() {
  return ia || (ia = 1, xt = function(o, x) {
    const t = B;
    x || (x = {}), typeof x === t(975) && (x = { cmp: x });
    var s = typeof x[t(1225)] === t(2788) ? x[t(1225)] : !1, e = x[t(2312)] && /* @__PURE__ */ function(n) {
      return function(i) {
        return function(c, u) {
          var d = { key: c, value: i[c] }, l = { key: u, value: i[u] };
          return n(d, l);
        };
      };
    }(x[t(2312)]), a = [];
    return function n(i) {
      const c = t;
      if (i && i[c(1563)] && typeof i[c(1563)] === c(975) && (i = i.toJSON()), i !== void 0) {
        if (typeof i == "number") return isFinite(i) ? "" + i : c(833);
        if (typeof i !== c(1694)) return JSON[c(2848)](i);
        var u, d;
        if (Array[c(344)](i)) {
          for (d = "[", u = 0; u < i[c(1726)]; u++)
            u && (d += ","), d += n(i[u]) || c(833);
          return d + "]";
        }
        if (i === null) return c(833);
        if (a.indexOf(i) !== -1) {
          if (s) return JSON[c(2848)](c(972));
          throw new TypeError(c(1071));
        }
        var l = a[c(1072)](i) - 1, f = Object[c(2023)](i).sort(e && e(i));
        for (d = "", u = 0; u < f[c(1726)]; u++) {
          var b = f[u], h = n(i[b]);
          h && (d && (d += ","), d += JSON[c(2848)](b) + ":" + h);
        }
        return a[c(1719)](l, 1), "{" + d + "}";
      }
    }(o);
  }), xt;
}
var tt, ca;
function dn() {
  return ca || (ca = 1, tt = function(x, t, s) {
    const e = B;
    var a = "", n = x[e(1898)][e(2905)] === !0, i = x[e(2113)][e(1344)](x.schema, x.RULES[e(1348)], e(1800)), c = x[e(2755)][e(542)](x[e(1898)]);
    if (x[e(1459)].strictKeywords) {
      var u = x.util[e(2184)](x[e(1898)], x.RULES[e(910)]);
      if (u) {
        var d = e(2177) + u;
        if (x.opts[e(2305)] === e(429)) x[e(2413)][e(2850)](d);
        else throw new Error(d);
      }
    }
    if (x[e(2589)] && (a += e(1214), n && (x.async = !0, a += e(1999)), a += e(914), c && (x[e(1459)][e(2128)] || x[e(1459)][e(1119)]) && (a += " " + (e(1753) + c + " */") + " ")), typeof x[e(1898)] == e(2788) || !(i || x[e(1898)][e(1800)])) {
      var t = "false schema", l = x[e(2676)], f = x[e(1633)], b = x[e(1898)][t], h = x[e(2111)] + x.util[e(2182)](t), m = x[e(2294)] + "/" + t, E = !x[e(1459)][e(2421)], j, v = e(2171) + (f || ""), R = e(1056) + l;
      if (x[e(1898)] === !1) {
        x[e(2589)] ? E = !0 : a += e(1481) + R + e(2154);
        var S = S || [];
        S[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += e(2478) + (j || e(2450)) + e(2896) + x.errorPath + e(2794) + x[e(2113)][e(2137)](m) + " , params: {} ", x[e(1459)][e(2473)] !== !1 && (a += e(2699)), x[e(1459)][e(1418)] && (a += e(1298) + x[e(2111)] + e(1592) + v + " "), a += e(625)) : a += e(368);
        var P = a;
        a = S[e(435)](), !x[e(1539)] && E ? x[e(2247)] ? a += e(782) + P + "]); " : a += e(2197) + P + e(678) : a += e(1858) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else x.isTop ? n ? a += " return data; " : a += e(2009) : a += e(1481) + R + " = true; ";
      return x.isTop && (a += e(2716)), a;
    }
    if (x[e(2589)]) {
      var F = x.isTop, l = x[e(2676)] = 0, f = x[e(1633)] = 0, v = e(2171);
      if (x.rootId = x[e(422)][e(1668)](x[e(2755)]._getId(x[e(1749)][e(1898)])), x[e(1393)] = x[e(1393)] || x[e(1484)], delete x.isTop, x.dataPathArr = [""], x[e(1898)].default !== void 0 && x[e(1459)][e(623)] && x[e(1459)][e(2785)]) {
        var A = e(1103);
        if (x.opts[e(2785)] === e(429)) x[e(2413)].warn(A);
        else throw new Error(A);
      }
      a += e(2529), a += e(2313), a += e(2245);
    } else {
      var l = x[e(2676)], f = x[e(1633)], v = e(2171) + (f || "");
      if (c && (x[e(1393)] = x[e(422)][e(2173)](x[e(1393)], c)), n && !x[e(2247)]) throw new Error(e(2889));
      a += e(1882) + l + e(883);
    }
    var R = e(1056) + l, E = !x[e(1459)][e(2421)], C = "", D = "", j, M = x[e(1898)].type, N = Array.isArray(M);
    if (M && x[e(1459)].nullable && x.schema[e(2662)] === !0 && (N ? M[e(1602)](e(833)) == -1 && (M = M.concat(e(833))) : M != e(833) && (M = [M, e(833)], N = !0)), N && M[e(1726)] == 1 && (M = M[0], N = !1), x[e(1898)].$ref && i) {
      if (x[e(1459)][e(2409)] == "fail") throw new Error(e(2711) + x[e(2294)] + e(1404));
      x[e(1459)].extendRefs !== !0 && (i = !1, x.logger[e(2850)](e(2557) + x[e(2294)] + '"'));
    }
    if (x[e(1898)][e(1802)] && x.opts.$comment && (a += " " + x[e(2117)][e(1348)][e(1802)][e(2776)](x, e(1802))), M) {
      if (x.opts[e(1033)]) var q = x[e(2113)][e(1835)](x[e(1459)][e(1033)], M);
      var U = x[e(2117)][e(608)][M];
      if (q || N || U === !0 || U && !S0(U)) {
        var h = x[e(2111)] + e(1306), m = x[e(2294)] + e(2367), h = x.schemaPath + e(1306), m = x[e(2294)] + e(2367), $ = N ? "checkDataTypes" : e(697);
        if (a += e(1341) + x[e(2113)][$](M, v, x[e(1459)].strictNumbers, !0) + e(1908), q) {
          var V = "dataType" + l, G = "coerced" + l;
          a += " var " + V + e(2528) + v + e(2919) + G + e(1853), x.opts[e(1033)] == e(2241) && (a += e(1341) + V + e(1463) + v + e(1848) + v + e(2800) + v + e(681) + v + "[0]; " + V + e(2528) + v + e(643) + x[e(2113)][e(697)](x[e(1898)][e(1655)], v, x[e(1459)][e(1946)]) + ") " + G + " = " + v + e(1235)), a += e(1341) + G + e(596);
          var c0 = q;
          if (c0)
            for (var u0, l0 = -1, o0 = c0[e(1726)] - 1; l0 < o0; )
              u0 = c0[l0 += 1], u0 == e(360) ? a += " else if (" + V + e(2202) + V + " == 'boolean') " + G + e(791) + v + e(2093) + v + e(1797) + G + e(2453) : u0 == e(1455) || u0 == e(1046) ? (a += " else if (" + V + e(2065) + v + e(2323) + V + e(2027) + v + e(1175) + v + " == +" + v + " ", u0 == e(1046) && (a += " && !(" + v + e(1795)), a += e(1813) + G + e(1966) + v + "; ") : u0 == e(2788) ? a += e(1128) + v + e(2227) + v + " === 0 || " + v + e(1797) + G + e(2370) + v + " === 'true' || " + v + e(2079) + G + e(1350) : u0 == "null" ? a += e(1128) + v + e(2605) + v + e(2580) + v + " === false) " + G + e(1487) : x[e(1459)][e(1033)] == e(2241) && u0 == e(2241) && (a += " else if (" + V + " == 'string' || " + V + e(2202) + V + e(2065) + v + e(868) + G + e(2689) + v + e(1222));
          a += e(2463);
          var S = S || [];
          S[e(1072)](a), a = "", x.createErrors !== !1 ? (a += " { keyword: '" + (j || e(1655)) + e(2896) + x[e(381)] + e(2794) + x[e(2113)][e(2137)](m) + e(2457), N ? a += "" + M[e(2131)](",") : a += "" + M, a += "' } ", x[e(1459)][e(2473)] !== !1 && (a += e(821), N ? a += "" + M[e(2131)](",") : a += "" + M, a += "' "), x[e(1459)][e(1418)] && (a += e(1534) + h + e(706) + x[e(2111)] + e(1592) + v + " "), a += e(625)) : a += e(368);
          var P = a;
          a = S[e(435)](), !x[e(1539)] && E ? x[e(2247)] ? a += e(782) + P + "]); " : a += e(2197) + P + e(678) : a += " var err = " + P + e(2898), a += e(1756) + G + e(1154);
          var f0 = f ? "data" + (f - 1 || "") : "parentData", k0 = f ? x[e(2500)][f] : e(1727);
          a += " " + v + e(681) + G + "; ", !f && (a += e(1096) + f0 + e(2525)), a += " " + f0 + "[" + k0 + e(1977) + G + e(1235);
        } else {
          var S = S || [];
          S[e(1072)](a), a = "", x.createErrors !== !1 ? (a += e(2478) + (j || e(1655)) + "' , dataPath: (dataPath || '') + " + x[e(381)] + " , schemaPath: " + x[e(2113)][e(2137)](m) + " , params: { type: '", N ? a += "" + M.join(",") : a += "" + M, a += "' } ", x[e(1459)][e(2473)] !== !1 && (a += e(821), N ? a += "" + M.join(",") : a += "" + M, a += "' "), x[e(1459)].verbose && (a += e(1534) + h + e(706) + x.schemaPath + e(1592) + v + " "), a += e(625)) : a += e(368);
          var P = a;
          a = S[e(435)](), !x[e(1539)] && E ? x[e(2247)] ? a += " throw new ValidationError([" + P + "]); " : a += e(2197) + P + e(678) : a += " var err = " + P + e(2898);
        }
        a += e(625);
      }
    }
    if (x.schema[e(1800)] && !i) a += " " + x[e(2117)][e(1348)][e(1800)][e(2776)](x, "$ref") + " ", E && (a += " } if (errors === ", F ? a += "0" : a += e(2089) + l, a += e(1908), D += "}");
    else {
      var y0 = x[e(2117)];
      if (y0) {
        for (var U, M0 = -1, N0 = y0[e(1726)] - 1; M0 < N0; )
          if (U = y0[M0 += 1], S0(U)) {
            if (U[e(1655)] && (a += e(1341) + x[e(2113)][e(697)](U.type, v, x[e(1459)].strictNumbers) + e(1908)), x.opts[e(623)]) {
              if (U.type == e(1694) && x[e(1898)].properties) {
                var b = x.schema.properties, J0 = Object[e(2023)](b), O = J0;
                if (O)
                  for (var T, L = -1, J = O[e(1726)] - 1; L < J; ) {
                    T = O[L += 1];
                    var X = b[T];
                    if (X[e(1200)] !== void 0) {
                      var W = v + x[e(2113)].getProperty(T);
                      if (x[e(1539)]) {
                        if (x.opts.strictDefaults) {
                          var A = e(2591) + W;
                          if (x[e(1459)].strictDefaults === e(429)) x[e(2413)].warn(A);
                          else throw new Error(A);
                        }
                      } else a += e(1341) + W + e(830), x[e(1459)].useDefaults == "empty" && (a += e(2452) + W + e(2369) + W + e(2863)), a += e(1701) + W + e(681), x[e(1459)][e(623)] == e(1133) ? a += " " + x[e(1981)](X.default) + " " : a += " " + JSON[e(2848)](X.default) + " ", a += "; ";
                    }
                  }
              } else if (U[e(1655)] == "array" && Array[e(344)](x[e(1898)].items)) {
                var Q = x[e(1898)].items;
                if (Q) {
                  for (var X, l0 = -1, i0 = Q.length - 1; l0 < i0; )
                    if (X = Q[l0 += 1], X[e(1200)] !== void 0) {
                      var W = v + "[" + l0 + "]";
                      if (x[e(1539)]) {
                        if (x.opts[e(2785)]) {
                          var A = "default is ignored for: " + W;
                          if (x[e(1459)][e(2785)] === "log") x[e(2413)][e(2850)](A);
                          else throw new Error(A);
                        }
                      } else a += " if (" + W + e(830), x[e(1459)][e(623)] == e(1545) && (a += " || " + W + e(2369) + W + e(2863)), a += e(1701) + W + e(681), x.opts.useDefaults == e(1133) ? a += " " + x[e(1981)](X[e(1200)]) + " " : a += " " + JSON.stringify(X[e(1200)]) + " ", a += "; ";
                    }
                }
              }
            }
            var s0 = U[e(1202)];
            if (s0) {
              for (var t0, L0 = -1, A0 = s0[e(1726)] - 1; L0 < A0; )
                if (t0 = s0[L0 += 1], G0(t0)) {
                  var U0 = t0[e(2776)](x, t0[e(1725)], U[e(1655)]);
                  U0 && (a += " " + U0 + " ", E && (C += "}"));
                }
            }
            if (E && (a += " " + C + " ", C = ""), U[e(1655)] && (a += e(625), M && M === U[e(1655)] && !q)) {
              a += " else { ";
              var h = x[e(2111)] + e(1306), m = x[e(2294)] + e(2367), S = S || [];
              S[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += e(2478) + (j || e(1655)) + e(2896) + x.errorPath + " , schemaPath: " + x[e(2113)].toQuotedString(m) + e(2457), N ? a += "" + M[e(2131)](",") : a += "" + M, a += e(2140), x[e(1459)].messages !== !1 && (a += e(821), N ? a += "" + M[e(2131)](",") : a += "" + M, a += "' "), x[e(1459)][e(1418)] && (a += e(1534) + h + e(706) + x[e(2111)] + e(1592) + v + " "), a += e(625)) : a += e(368);
              var P = a;
              a = S[e(435)](), !x[e(1539)] && E ? x[e(2247)] ? a += e(782) + P + e(2328) : a += e(2197) + P + "]; return false; " : a += e(1858) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += e(625);
            }
            E && (a += e(1538), F ? a += "0" : a += e(2089) + l, a += e(1908), D += "}");
          }
      }
    }
    E && (a += " " + D + " "), F ? (n ? (a += e(701), a += e(1309)) : (a += e(2893), a += e(2829)), a += e(2899)) : a += " var " + R + e(2456) + l + ";";
    function S0(Q0) {
      const O0 = e;
      for (var V0 = Q0[O0(1202)], Y0 = 0; Y0 < V0[O0(1726)]; Y0++) if (G0(V0[Y0])) return !0;
    }
    function G0(Q0) {
      const O0 = e;
      return x[O0(1898)][Q0.keyword] !== void 0 || Q0[O0(2657)] && ne(Q0);
    }
    function ne(Q0) {
      const O0 = e;
      for (var V0 = Q0[O0(2657)], Y0 = 0; Y0 < V0[O0(1726)]; Y0++) if (x[O0(1898)][V0[Y0]] !== void 0) return !0;
    }
    return a;
  }), tt;
}
var rt, ua;
function Z2() {
  const o = r;
  if (ua) return rt;
  ua = 1;
  var x = cr(), t = Be(), s = ur(), e = un(), a = dn(), n = t[o(1523)], i = ir(), c = s.Validation;
  rt = u;
  function u(P, F, A, R) {
    const E = o;
    var C = this, D = this[E(1644)], j = [void 0], M = {}, N = [], q = {}, U = [], $ = {}, V = [];
    F = F || { schema: P, refVal: j, refs: M };
    var G = d[E(1297)](this, P, F, R), c0 = this._compilations[G[E(1535)]];
    if (G[E(1816)]) return c0[E(1630)] = k0;
    var u0 = this[E(1255)], l0 = this[E(2117)];
    try {
      var o0 = y0(P, F, A, R);
      c0[E(2162)] = o0;
      var f0 = c0.callValidate;
      return f0 && (f0[E(1898)] = o0[E(1898)], f0.errors = null, f0[E(1895)] = o0.refs, f0[E(2429)] = o0.refVal, f0[E(1749)] = o0[E(1749)], f0[E(2905)] = o0[E(2905)], D.sourceCode && (f0.source = o0[E(2752)])), o0;
    } finally {
      l[E(1297)](this, P, F, R);
    }
    function k0() {
      const W = E;
      var Q = c0[W(2162)], i0 = Q[W(847)](this, arguments);
      return k0[W(1137)] = Q[W(1137)], i0;
    }
    function y0(W, Q, i0, s0) {
      const t0 = E;
      var L0 = !Q || Q && Q[t0(1898)] == W;
      if (Q.schema != F[t0(1898)]) return u[t0(1297)](C, W, Q, i0, s0);
      var A0 = W[t0(2905)] === !0, U0 = a({ isTop: !0, schema: W, isRoot: L0, baseId: s0, root: Q, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: s.MissingRef, RULES: l0, validate: a, util: t, resolve: x, resolveRef: M0, usePattern: L, useDefault: J, useCustomRule: X, opts: D, formats: u0, logger: C.logger, self: C });
      U0 = S(j, m) + S(N, b) + S(U, h) + S(V, v) + U0, D.processCode && (U0 = D[t0(1119)](U0, W));
      var S0;
      try {
        var G0 = new Function(t0(2755), t0(2117), "formats", t0(1749), t0(2429), t0(2068), t0(1224), "equal", "ucs2length", t0(1769), U0);
        S0 = G0(C, l0, u0, F, j, U, V, i, n, c), j[0] = S0;
      } catch (ne) {
        throw C[t0(2413)][t0(795)](t0(2416), U0), ne;
      }
      return S0[t0(1898)] = W, S0.errors = null, S0[t0(1895)] = M, S0[t0(2429)] = j, S0[t0(1749)] = L0 ? S0 : Q, A0 && (S0[t0(2905)] = !0), D[t0(2128)] === !0 && (S0[t0(2752)] = { code: U0, patterns: N, defaults: U }), S0;
    }
    function M0(W, Q, i0) {
      const s0 = E;
      Q = x[s0(2173)](W, Q);
      var t0 = M[Q], L0, A0;
      if (t0 !== void 0) return L0 = j[t0], A0 = s0(1669) + t0 + "]", T(L0, A0);
      if (!i0 && F[s0(1895)]) {
        var U0 = F.refs[Q];
        if (U0 !== void 0) return L0 = F[s0(2429)][U0], A0 = N0(Q, L0), T(L0, A0);
      }
      A0 = N0(Q);
      var S0 = x[s0(1297)](C, y0, F, Q);
      if (S0 === void 0) {
        var G0 = A && A[Q];
        G0 && (S0 = x[s0(1643)](G0, D[s0(2445)]) ? G0 : u[s0(1297)](C, G0, F, A, W));
      }
      if (S0 === void 0) J0(Q);
      else return O(Q, S0), T(S0, A0);
    }
    function N0(W, Q) {
      var s0 = j[E(1726)];
      return j[s0] = Q, M[W] = s0, "refVal" + s0;
    }
    function J0(W) {
      delete M[W];
    }
    function O(W, Q) {
      var i0 = M[W];
      j[i0] = Q;
    }
    function T(W, Q) {
      const i0 = E;
      return typeof W == i0(1694) || typeof W == i0(2788) ? { code: Q, schema: W, inline: !0 } : { code: Q, $async: W && !!W[i0(2905)] };
    }
    function L(W) {
      const Q = E;
      var i0 = q[W];
      return i0 === void 0 && (i0 = q[W] = N[Q(1726)], N[i0] = W), Q(2067) + i0;
    }
    function J(W) {
      const Q = E;
      switch (typeof W) {
        case Q(2788):
        case Q(1455):
          return "" + W;
        case Q(360):
          return t[Q(2137)](W);
        case Q(1694):
          if (W === null) return "null";
          var i0 = e(W), s0 = $[i0];
          return s0 === void 0 && (s0 = $[i0] = U[Q(1726)], U[s0] = W), Q(1200) + s0;
      }
    }
    function X(W, Q, i0, s0) {
      const t0 = E;
      if (C[t0(1644)][t0(1958)] !== !1) {
        var L0 = W[t0(1623)][t0(1566)];
        if (L0 && !L0.every(function(Y0) {
          const $e = t0;
          return Object.prototype[$e(610)][$e(1297)](i0, Y0);
        })) throw new Error(t0(1368) + L0[t0(2131)](","));
        var A0 = W[t0(1623)][t0(1958)];
        if (A0) {
          var U0 = A0(Q);
          if (!U0) {
            var S0 = "keyword schema is invalid: " + C[t0(2070)](A0[t0(1137)]);
            if (C[t0(1644)][t0(1958)] == "log") C[t0(2413)].error(S0);
            else throw new Error(S0);
          }
        }
      }
      var G0 = W[t0(1623)][t0(973)], ne = W[t0(1623)][t0(2544)], Q0 = W[t0(1623)].macro, O0;
      if (G0) O0 = G0[t0(1297)](C, Q, i0, s0);
      else if (Q0)
        O0 = Q0[t0(1297)](C, Q, i0, s0), D.validateSchema !== !1 && C[t0(1958)](O0, !0);
      else if (ne) O0 = ne[t0(1297)](C, s0, W.keyword, Q, i0);
      else if (O0 = W[t0(1623)].validate, !O0) return;
      if (O0 === void 0) throw new Error('custom keyword "' + W.keyword + t0(2351));
      var V0 = V[t0(1726)];
      return V[V0] = O0, { code: t0(337) + V0, validate: O0 };
    }
  }
  function d(P, F, A) {
    const R = o;
    var E = f[R(1297)](this, P, F, A);
    return E >= 0 ? { index: E, compiling: !0 } : (E = this[R(2678)][R(1726)], this[R(2678)][E] = { schema: P, root: F, baseId: A }, { index: E, compiling: !1 });
  }
  function l(P, F, A) {
    const R = o;
    var E = f.call(this, P, F, A);
    E >= 0 && this._compilations[R(1719)](E, 1);
  }
  function f(P, F, A) {
    const R = o;
    for (var E = 0; E < this[R(2678)][R(1726)]; E++) {
      var C = this[R(2678)][E];
      if (C[R(1898)] == P && C.root == F && C[R(1393)] == A) return E;
    }
    return -1;
  }
  function b(P, F) {
    const A = o;
    return A(613) + P + A(1682) + t[A(2137)](F[P]) + ");";
  }
  function h(P) {
    const F = o;
    return "var default" + P + F(807) + P + "];";
  }
  function m(P, F) {
    const A = o;
    return F[P] === void 0 ? "" : "var refVal" + P + A(2339) + P + "];";
  }
  function v(P) {
    return o(1233) + P + " = customRules[" + P + "];";
  }
  function S(P, F) {
    if (!P[o(1726)]) return "";
    for (var R = "", E = 0; E < P.length; E++) R += F(E, P);
    return R;
  }
  return rt;
}
var at = { exports: {} }, da;
function B2() {
  const o = r;
  if (da) return at[o(684)];
  da = 1;
  var x = at.exports = function() {
    const s = o;
    this[s(629)] = {};
  };
  return x[o(2250)][o(2613)] = function(s, e) {
    const a = o;
    this[a(629)][s] = e;
  }, x[o(2250)].get = function(s) {
    return this[o(629)][s];
  }, x[o(2250)][o(1571)] = function(s) {
    const e = o;
    delete this[e(629)][s];
  }, x[o(2250)][o(2368)] = function() {
    const s = o;
    this[s(629)] = {};
  }, at[o(684)];
}
var st, la;
function K2() {
  const o = r;
  if (la) return st;
  la = 1;
  var x = Be(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, s = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, a = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, i = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, d = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, l = /^(?:\/(?:[^~/]|~0|~1)*)*$/, f = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, b = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  st = h;
  function h(D) {
    const j = B;
    return D = D == j(2761) ? j(2761) : "fast", x.copy(h[D]);
  }
  h[o(813)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: a, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: d, "json-pointer": l, "json-pointer-uri-fragment": f, "relative-json-pointer": b }, h.full = { date: v, time: S, "date-time": F, uri: R, "uri-reference": i, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: a, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: d, "json-pointer": l, "json-pointer-uri-fragment": f, "relative-json-pointer": b };
  function m(D) {
    return D % 4 === 0 && (D % 100 !== 0 || D % 400 === 0);
  }
  function v(D) {
    var M = D[o(1074)](t);
    if (!M) return !1;
    var N = +M[1], q = +M[2], U = +M[3];
    return q >= 1 && q <= 12 && U >= 1 && U <= (q == 2 && m(N) ? 29 : s[q]);
  }
  function S(D, j) {
    var N = D[o(1074)](e);
    if (!N) return !1;
    var q = N[1], U = N[2], $ = N[3], V = N[5];
    return (q <= 23 && U <= 59 && $ <= 59 || q == 23 && U == 59 && $ == 60) && (!j || V);
  }
  var P = /t|\s/i;
  function F(D) {
    var j = D.split(P);
    return j.length == 2 && v(j[0]) && S(j[1], !0);
  }
  var A = /\/|:/;
  function R(D) {
    return A[o(1723)](D) && n.test(D);
  }
  var E = /[^\\]\\Z/;
  function C(D) {
    if (E[o(1723)](D)) return !1;
    try {
      return new RegExp(D), !0;
    } catch {
      return !1;
    }
  }
  return st;
}
var nt, fa;
function _2() {
  return fa || (fa = 1, nt = function(x, t, s) {
    const e = B;
    var a = " ", n = x[e(2676)], i = x[e(1633)], c = x.schema[t], u = x[e(2294)] + "/" + t, d = !x[e(1459)].allErrors, l = e(2171) + (i || ""), f = "valid" + n, b, h;
    if (c == "#" || c == "#/") x[e(1607)] ? (b = x[e(2247)], h = e(2162)) : (b = x[e(1749)][e(1898)][e(2905)] === !0, h = e(1959));
    else {
      var m = x[e(1919)](x[e(1393)], c, x.isRoot);
      if (m === void 0) {
        var v = x[e(1951)].message(x[e(1393)], c);
        if (x[e(1459)][e(2424)] == e(1820)) {
          x[e(2413)][e(795)](v);
          var S = S || [];
          S[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += e(2478) + e(1800) + "' , dataPath: (dataPath || '') + " + x[e(381)] + e(2794) + x[e(2113)][e(2137)](u) + e(2180) + x.util[e(1922)](c) + "' } ", x.opts[e(2473)] !== !1 && (a += e(1505) + x.util.escapeQuotes(c) + "' "), x[e(1459)][e(1418)] && (a += e(506) + x.util[e(2137)](c) + e(706) + x[e(2111)] + e(1592) + l + " "), a += e(625)) : a += e(368);
          var P = a;
          a = S[e(435)](), !x[e(1539)] && d ? x[e(2247)] ? a += " throw new ValidationError([" + P + e(2328) : a += e(2197) + P + e(678) : a += " var err = " + P + e(2898), d && (a += e(2373));
        } else if (x[e(1459)].missingRefs == e(2051)) x[e(2413)][e(2850)](v), d && (a += e(844));
        else throw new x[e(1951)](x[e(1393)], c, v);
      } else if (m.inline) {
        var F = x[e(2113)][e(2554)](x);
        F[e(2676)]++;
        var A = e(1056) + F[e(2676)];
        F[e(1898)] = m[e(1898)], F.schemaPath = "", F[e(2294)] = c;
        var R = x[e(2162)](F)[e(521)](/validate\.schema/g, m[e(2776)]);
        a += " " + R + " ", d && (a += e(1341) + A + e(1908));
      } else b = m[e(2905)] === !0 || x[e(2247)] && m.$async !== !1, h = m[e(2776)];
    }
    if (h) {
      var S = S || [];
      S[e(1072)](a), a = "", x[e(1459)][e(2464)] ? a += " " + h + e(738) : a += " " + h + "( ", a += " " + l + e(2406), x.errorPath != '""' && (a += e(723) + x[e(381)]);
      var E = i ? e(2171) + (i - 1 || "") : e(510), C = i ? x[e(2500)][i] : e(1727);
      a += " , " + E + e(693) + C + e(1969);
      var D = a;
      if (a = S[e(435)](), b) {
        if (!x[e(2247)]) throw new Error("async schema referenced by sync schema");
        d && (a += e(1481) + f + "; "), a += e(376) + D + "; ", d && (a += " " + f + e(1350)), a += e(1358), d && (a += " " + f + e(2154)), a += " } ", d && (a += e(1341) + f + ") { ");
      } else a += " if (!" + D + e(1052) + h + e(1159) + h + e(852), d && (a += e(2262));
    }
    return a;
  }), nt;
}
var ot, ha;
function G2() {
  return ha || (ha = 1, ot = function(x, t, s) {
    const e = B;
    var a = " ", n = x.schema[t], i = x[e(2111)] + x.util.getProperty(t), c = x[e(2294)] + "/" + t, u = !x[e(1459)][e(2421)], d = x[e(2113)][e(2554)](x), l = "";
    d[e(2676)]++;
    var f = e(1056) + d[e(2676)], b = d.baseId, h = !0, m = n;
    if (m)
      for (var v, S = -1, P = m[e(1726)] - 1; S < P; )
        v = m[S += 1], (x[e(1459)].strictKeywords ? typeof v == "object" && Object[e(2023)](v)[e(1726)] > 0 || v === !1 : x[e(2113)].schemaHasRules(v, x[e(2117)][e(1348)])) && (h = !1, d[e(1898)] = v, d[e(2111)] = i + "[" + S + "]", d[e(2294)] = c + "/" + S, a += "  " + x[e(2162)](d) + " ", d.baseId = b, u && (a += e(1341) + f + e(1908), l += "}"));
    return u && (h ? a += e(844) : a += " " + l[e(483)](0, -1) + " "), a;
  }), ot;
}
var it, pa;
function J2() {
  return pa || (pa = 1, it = function(x, t, s) {
    const e = B;
    var a = " ", n = x.level, i = x[e(1633)], c = x[e(1898)][t], u = x[e(2111)] + x[e(2113)][e(2182)](t), d = x.errSchemaPath + "/" + t, l = !x.opts[e(2421)], f = e(2171) + (i || ""), b = e(1056) + n, h = e(825) + n, m = x[e(2113)][e(2554)](x), v = "";
    m[e(2676)]++;
    var S = "valid" + m[e(2676)], P = c.every(function(j) {
      const M = e;
      return x.opts[M(2305)] ? typeof j == "object" && Object.keys(j)[M(1726)] > 0 || j === !1 : x[M(2113)][M(2038)](j, x[M(2117)].all);
    });
    if (P) {
      var F = m.baseId;
      a += e(1481) + h + e(2766) + b + e(826);
      var A = x[e(1539)];
      x[e(1539)] = m.compositeRule = !0;
      var R = c;
      if (R)
        for (var E, C = -1, D = R.length - 1; C < D; )
          E = R[C += 1], m.schema = E, m[e(2111)] = u + "[" + C + "]", m.errSchemaPath = d + "/" + C, a += "  " + x[e(2162)](m) + " ", m.baseId = F, a += " " + b + " = " + b + e(2452) + S + "; if (!" + b + ") { ", v += "}";
      x[e(1539)] = m.compositeRule = A, a += " " + v + e(2061) + b + e(1674), x[e(592)] !== !1 ? (a += " { keyword: 'anyOf" + e(2896) + x[e(381)] + e(2794) + x[e(2113)][e(2137)](d) + e(661), x[e(1459)].messages !== !1 && (a += e(1648)), x.opts[e(1418)] && (a += e(1534) + u + e(706) + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += e(368), a += e(2898), !x[e(1539)] && l && (x[e(2247)] ? a += e(2705) : a += e(1720)), a += e(604) + h + e(1653) + h + e(1576) + h + e(835), x[e(1459)][e(2421)] && (a += e(625));
    } else l && (a += " if (true) { ");
    return a;
  }), it;
}
var ct, ma;
function Q2() {
  return ma || (ma = 1, ct = function(x, t, s) {
    const e = B;
    var a = " ", n = x.schema[t], i = x[e(2294)] + "/" + t;
    x[e(1459)][e(2421)];
    var c = x.util[e(2137)](n);
    return x[e(1459)].$comment === !0 ? a += " console.log(" + c + ");" : typeof x[e(1459)][e(1802)] == e(975) && (a += e(551) + c + ", " + x[e(2113)][e(2137)](i) + e(1021)), a;
  }), ct;
}
var ut, ba;
function X2() {
  return ba || (ba = 1, ut = function(x, t, s) {
    const e = B;
    var a = " ", n = x[e(2676)], i = x[e(1633)], c = x.schema[t], u = x[e(2111)] + x[e(2113)][e(2182)](t), d = x[e(2294)] + "/" + t, l = !x[e(1459)][e(2421)], f = e(2171) + (i || ""), b = e(1056) + n, h = x[e(1459)][e(1995)] && c && c[e(1995)];
    h && (a += " var schema" + n + e(681) + x.util[e(862)](c[e(1995)], i, x[e(2500)]) + "; "), !h && (a += e(2902) + n + e(366) + u + ";"), a += e(1707) + b + e(855) + f + ", schema" + n + "); if (!" + b + e(1318);
    var m = m || [];
    m[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += e(2478) + e(1167) + e(2896) + x[e(381)] + e(2794) + x[e(2113)][e(2137)](d) + e(1809) + n + " } ", x[e(1459)][e(2473)] !== !1 && (a += e(2194)), x[e(1459)][e(1418)] && (a += " , schema: validate.schema" + u + e(706) + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += " {} ";
    var v = a;
    return a = m.pop(), !x[e(1539)] && l ? x.async ? a += e(782) + v + "]); " : a += " validate.errors = [" + v + e(678) : a += e(1858) + v + e(2898), a += " }", l && (a += e(2262)), a;
  }), ut;
}
var dt, ga;
function Y2() {
  return ga || (ga = 1, dt = function(x, t, s) {
    const e = B;
    var a = " ", n = x[e(2676)], i = x[e(1633)], c = x[e(1898)][t], u = x.schemaPath + x[e(2113)].getProperty(t), d = x[e(2294)] + "/" + t, l = !x.opts[e(2421)], f = e(2171) + (i || ""), b = e(1056) + n, h = e(825) + n, m = x[e(2113)][e(2554)](x), v = "";
    m[e(2676)]++;
    var S = e(1056) + m[e(2676)], P = "i" + n, F = m.dataLevel = x[e(1633)] + 1, A = "data" + F, R = x[e(1393)], E = x.opts[e(2305)] ? typeof c == e(1694) && Object[e(2023)](c)[e(1726)] > 0 || c === !1 : x.util[e(2038)](c, x[e(2117)][e(1348)]);
    if (a += e(1707) + h + e(628) + b + ";", E) {
      var C = x[e(1539)];
      x.compositeRule = m[e(1539)] = !0, m.schema = c, m[e(2111)] = u, m.errSchemaPath = d, a += e(1481) + S + e(2625) + P + " = 0; " + P + e(948) + f + e(1403) + P + e(1741), m[e(381)] = x[e(2113)][e(997)](x[e(381)], P, x[e(1459)][e(2890)], !0);
      var D = f + "[" + P + "]";
      m[e(2500)][F] = P;
      var j = x[e(2162)](m);
      m[e(1393)] = R, x[e(2113)].varOccurences(j, A) < 2 ? a += " " + x[e(2113)][e(2385)](j, A, D) + " " : a += e(1481) + A + e(681) + D + "; " + j + " ", a += e(1341) + S + e(779), x[e(1539)] = m[e(1539)] = C, a += " " + v + e(2061) + S + e(1498);
    } else a += " if (" + f + e(2598);
    var M = M || [];
    M.push(a), a = "", x.createErrors !== !1 ? (a += e(2478) + e(846) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(2794) + x[e(2113)][e(2137)](d) + e(661), x[e(1459)][e(2473)] !== !1 && (a += e(2636)), x[e(1459)].verbose && (a += " , schema: validate.schema" + u + e(706) + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += e(368);
    var N = a;
    return a = M[e(435)](), !x[e(1539)] && l ? x.async ? a += e(782) + N + e(2328) : a += e(2197) + N + e(678) : a += e(1858) + N + e(2898), a += e(1824), E && (a += e(1289) + h + e(1653) + h + e(1576) + h + e(835)), x[e(1459)][e(2421)] && (a += e(625)), a;
  }), dt;
}
var lt, ya;
function ec() {
  return ya || (ya = 1, lt = function(x, t, s) {
    const e = B;
    var a = " ", n = x[e(2676)], i = x[e(1633)], c = x[e(1898)][t], u = x[e(2111)] + x[e(2113)][e(2182)](t), d = x[e(2294)] + "/" + t, l = !x[e(1459)][e(2421)], f = e(2171) + (i || ""), b = "errs__" + n, h = x[e(2113)][e(2554)](x), m = "";
    h[e(2676)]++;
    var v = e(1056) + h.level, S = {}, P = {}, F = x[e(1459)][e(1572)];
    for (C in c)
      if (C != e(908)) {
        var A = c[C], R = Array[e(344)](A) ? P : S;
        R[C] = A;
      }
    a += "var " + b + e(883);
    var E = x[e(381)];
    a += e(885) + n + ";";
    for (var C in P)
      if (R = P[C], R.length) {
        if (a += e(2043) + f + x[e(2113)][e(2182)](C) + " !== undefined ", F && (a += e(397) + f + ", '" + x[e(2113)][e(1922)](C) + "') "), l) {
          a += e(1745);
          var D = R;
          if (D)
            for (var j, M = -1, N = D[e(1726)] - 1; M < N; ) {
              j = D[M += 1], M && (a += " || ");
              var q = x[e(2113)][e(2182)](j), U = f + q;
              a += " ( ( " + U + e(830), F && (a += e(804) + f + ", '" + x[e(2113)][e(1922)](j) + e(2446)), a += ") && (missing" + n + e(681) + x[e(2113)][e(2137)](x[e(1459)].jsonPointers ? j : q) + e(923);
            }
          a += e(2203);
          var $ = "missing" + n, V = e(2635) + $ + e(858);
          x.opts[e(1730)] && (x[e(381)] = x[e(1459)][e(2890)] ? x[e(2113)][e(997)](E, $, !0) : E + e(723) + $);
          var G = G || [];
          G[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += e(2478) + e(1566) + e(2896) + x[e(381)] + e(2794) + x[e(2113)].toQuotedString(d) + e(1107) + x[e(2113)][e(1922)](C) + e(2499) + V + e(1195) + R.length + ", deps: '" + x[e(2113)][e(1922)](R[e(1726)] == 1 ? R[0] : R[e(2131)](", ")) + e(2140), x[e(1459)][e(2473)] !== !1 && (a += " , message: 'should have ", R[e(1726)] == 1 ? a += e(1932) + x.util.escapeQuotes(R[0]) : a += e(2425) + x[e(2113)].escapeQuotes(R[e(2131)](", ")), a += e(2724) + x[e(2113)][e(1922)](C) + e(1763)), x[e(1459)][e(1418)] && (a += e(1534) + u + e(706) + x.schemaPath + e(1592) + f + " "), a += " } ") : a += " {} ";
          var c0 = a;
          a = G[e(435)](), !x[e(1539)] && l ? x[e(2247)] ? a += e(782) + c0 + e(2328) : a += e(2197) + c0 + "]; return false; " : a += " var err = " + c0 + e(2898);
        } else {
          a += " ) { ";
          var u0 = R;
          if (u0)
            for (var j, l0 = -1, o0 = u0.length - 1; l0 < o0; ) {
              j = u0[l0 += 1];
              var q = x[e(2113)][e(2182)](j), V = x.util[e(1922)](j), U = f + q;
              x[e(1459)][e(1730)] && (x.errorPath = x.util[e(2261)](E, j, x[e(1459)][e(2890)])), a += e(2043) + U + e(830), F && (a += " || ! Object.prototype.hasOwnProperty.call(" + f + e(856) + x[e(2113)][e(1922)](j) + e(2446)), a += e(2455), x[e(592)] !== !1 ? (a += e(2478) + e(1566) + e(2896) + x[e(381)] + e(2794) + x[e(2113)][e(2137)](d) + " , params: { property: '" + x[e(2113)][e(1922)](C) + e(2499) + V + e(1195) + R[e(1726)] + e(2242) + x[e(2113)][e(1922)](R[e(1726)] == 1 ? R[0] : R[e(2131)](", ")) + e(2140), x[e(1459)].messages !== !1 && (a += e(2555), R[e(1726)] == 1 ? a += e(1932) + x[e(2113)][e(1922)](R[0]) : a += e(2425) + x[e(2113)].escapeQuotes(R[e(2131)](", ")), a += " when property " + x[e(2113)][e(1922)](C) + " is present' "), x[e(1459)][e(1418)] && (a += e(1534) + u + e(706) + x[e(2111)] + e(1592) + f + " "), a += " } ") : a += e(368), a += e(1196);
            }
        }
        a += " }   ", l && (m += "}", a += e(2262));
      }
    x[e(381)] = E;
    var f0 = h[e(1393)];
    for (var C in S) {
      var A = S[C];
      (x.opts[e(2305)] ? typeof A == e(1694) && Object[e(2023)](A)[e(1726)] > 0 || A === !1 : x[e(2113)][e(2038)](A, x[e(2117)].all)) && (a += " " + v + " = true; if ( " + f + x[e(2113)][e(2182)](C) + e(2906), F && (a += e(397) + f + ", '" + x.util.escapeQuotes(C) + e(2446)), a += ") { ", h[e(1898)] = A, h[e(2111)] = u + x[e(2113)].getProperty(C), h[e(2294)] = d + "/" + x[e(2113)][e(2565)](C), a += "  " + x[e(2162)](h) + " ", h.baseId = f0, a += e(990), l && (a += e(1341) + v + ") { ", m += "}"));
    }
    return l && (a += "   " + m + e(1341) + b + e(763)), a;
  }), lt;
}
var ft, va;
function xc() {
  return va || (va = 1, ft = function(x, t, s) {
    const e = B;
    var a = " ", n = x.level, i = x[e(1633)], c = x[e(1898)][t], u = x[e(2111)] + x[e(2113)][e(2182)](t), d = x[e(2294)] + "/" + t, l = !x[e(1459)][e(2421)], f = e(2171) + (i || ""), b = e(1056) + n, h = x[e(1459)][e(1995)] && c && c.$data;
    h && (a += e(2902) + n + e(681) + x.util[e(862)](c[e(1995)], i, x[e(2500)]) + "; ");
    var m = "i" + n, v = e(1898) + n;
    !h && (a += " var " + v + e(366) + u + ";"), a += e(1707) + b + ";", h && (a += e(1578) + n + " === undefined) " + b + e(450) + n + e(1813) + b + e(1557)), a += "" + b + e(1284) + m + e(845) + m + "<" + v + e(1403) + m + e(1218) + f + ", " + v + "[" + m + e(340) + b + e(1624), h && (a += "  }  "), a += e(2061) + b + e(1318);
    var S = S || [];
    S[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += e(2478) + "enum' , dataPath: (dataPath || '') + " + x[e(381)] + e(2794) + x[e(2113)][e(2137)](d) + " , params: { allowedValues: schema" + n + e(625), x[e(1459)][e(2473)] !== !1 && (a += e(1319)), x.opts[e(1418)] && (a += " , schema: validate.schema" + u + e(706) + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += e(368);
    var P = a;
    return a = S[e(435)](), !x[e(1539)] && l ? x[e(2247)] ? a += " throw new ValidationError([" + P + e(2328) : a += e(2197) + P + "]; return false; " : a += e(1858) + P + e(2898), a += " }", l && (a += e(2262)), a;
  }), ft;
}
var ht, wa;
function tc() {
  return wa || (wa = 1, ht = function(x, t, s) {
    const e = B;
    var a = " ", n = x[e(2676)], i = x[e(1633)], c = x.schema[t], u = x[e(2111)] + x[e(2113)][e(2182)](t), d = x[e(2294)] + "/" + t, l = !x[e(1459)][e(2421)], f = "data" + (i || "");
    if (x[e(1459)][e(839)] === !1) return l && (a += e(844)), a;
    var b = x.opts[e(1995)] && c && c.$data, h;
    b ? (a += e(2902) + n + e(681) + x[e(2113)][e(862)](c[e(1995)], i, x[e(2500)]) + "; ", h = e(1898) + n) : h = c;
    var m = x[e(1459)][e(2468)], v = Array[e(344)](m);
    if (b) {
      var S = "format" + n, P = e(1567) + n, F = "formatType" + n;
      a += " var " + S + e(890) + h + e(2285) + P + e(2528) + S + e(1361) + S + e(870) + S + e(840) + F + e(681) + P + e(1175) + S + e(577) + P + ") { ", x[e(2247)] && (a += e(1370) + n + e(681) + S + e(1391)), a += " " + S + e(681) + S + e(1443), b && (a += " (" + h + e(1639) + h + " != 'string') || "), a += " (", m != e(2051) && (a += " (" + h + e(1553) + S + " ", v && (a += " && self._opts.unknownFormats.indexOf(" + h + e(1670)), a += e(2907)), a += " (" + S + e(1175) + F + e(965) + s + e(2781) + S + e(1446), x.async ? a += " (async" + n + e(971) + S + "(" + f + ") : " + S + "(" + f + e(1813) : a += " " + S + "(" + f + ") ", a += " : " + S + e(1927) + f + e(2882);
    } else {
      var S = x[e(853)][c];
      if (!S) {
        if (m == e(2051)) return x[e(2413)].warn(e(2190) + c + '" ignored in schema at path "' + x[e(2294)] + '"'), l && (a += e(844)), a;
        if (v && m[e(1602)](c) >= 0) return l && (a += " if (true) { "), a;
        throw new Error(e(2190) + c + '" is used in schema at path "' + x[e(2294)] + '"');
      }
      var P = typeof S == e(1694) && !(S instanceof RegExp) && S[e(2162)], F = P && S[e(1655)] || e(360);
      if (P) {
        var A = S[e(2247)] === !0;
        S = S[e(2162)];
      }
      if (F != s) return l && (a += e(844)), a;
      if (A) {
        if (!x.async) throw new Error("async format in sync schema");
        var R = e(853) + x[e(2113)][e(2182)](c) + ".validate";
        a += " if (!(await " + R + "(" + f + e(653);
      } else {
        a += e(2311);
        var R = e(853) + x[e(2113)][e(2182)](c);
        P && (R += e(1047)), typeof S == e(975) ? a += " " + R + "(" + f + ") " : a += " " + R + e(1927) + f + ") ", a += e(1908);
      }
    }
    var E = E || [];
    E[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += " { keyword: '" + e(839) + e(2896) + x.errorPath + e(2794) + x.util[e(2137)](d) + e(2869), b ? a += "" + h : a += "" + x[e(2113)][e(2137)](c), a += e(712), x.opts[e(2473)] !== !1 && (a += ` , message: 'should match format "`, b ? a += e(2635) + h + e(858) : a += "" + x[e(2113)][e(1922)](c), a += `"' `), x[e(1459)].verbose && (a += e(584), b ? a += e(1843) + u : a += "" + x.util[e(2137)](c), a += e(624) + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += e(368);
    var C = a;
    return a = E[e(435)](), !x.compositeRule && l ? x[e(2247)] ? a += e(782) + C + e(2328) : a += " validate.errors = [" + C + "]; return false; " : a += " var err = " + C + e(2898), a += e(625), l && (a += e(2262)), a;
  }), ht;
}
var pt, Sa;
function rc() {
  return Sa || (Sa = 1, pt = function(x, t, s) {
    const e = B;
    var a = " ", n = x[e(2676)], i = x[e(1633)], c = x[e(1898)][t], u = x.schemaPath + x[e(2113)].getProperty(t), d = x.errSchemaPath + "/" + t, l = !x[e(1459)].allErrors, f = e(2171) + (i || ""), b = e(1056) + n, h = e(825) + n, m = x.util[e(2554)](x);
    m[e(2676)]++;
    var v = e(1056) + m[e(2676)], S = x[e(1898)][e(1227)], P = x[e(1898)][e(1866)], F = S !== void 0 && (x[e(1459)][e(2305)] ? typeof S == e(1694) && Object[e(2023)](S)[e(1726)] > 0 || S === !1 : x[e(2113)].schemaHasRules(S, x[e(2117)].all)), A = P !== void 0 && (x[e(1459)].strictKeywords ? typeof P == e(1694) && Object.keys(P)[e(1726)] > 0 || P === !1 : x[e(2113)].schemaHasRules(P, x[e(2117)][e(1348)])), R = m[e(1393)];
    if (F || A) {
      var E;
      m[e(592)] = !1, m[e(1898)] = c, m.schemaPath = u, m[e(2294)] = d, a += e(1481) + h + e(2766) + b + e(1434);
      var C = x[e(1539)];
      x.compositeRule = m[e(1539)] = !0, a += "  " + x[e(2162)](m) + " ", m[e(1393)] = R, m[e(592)] = !0, a += e(1289) + h + e(1653) + h + ") vErrors.length = " + h + e(2600), x[e(1539)] = m[e(1539)] = C, F ? (a += " if (" + v + ") {  ", m[e(1898)] = x[e(1898)][e(1227)], m.schemaPath = x[e(2111)] + e(1343), m[e(2294)] = x.errSchemaPath + e(2016), a += "  " + x[e(2162)](m) + " ", m[e(1393)] = R, a += " " + b + e(681) + v + "; ", F && A ? (E = e(384) + n, a += e(1481) + E + e(657)) : E = e(2684), a += " } ", A && (a += e(2262))) : a += " if (!" + v + e(1908), A && (m[e(1898)] = x[e(1898)].else, m.schemaPath = x[e(2111)] + ".else", m.errSchemaPath = x[e(2294)] + e(2159), a += "  " + x.validate(m) + " ", m.baseId = R, a += " " + b + " = " + v + "; ", F && A ? (E = e(384) + n, a += e(1481) + E + e(1587)) : E = e(2073), a += e(625)), a += e(2061) + b + e(1674), x[e(592)] !== !1 ? (a += e(2478) + "if" + e(2896) + x[e(381)] + e(2794) + x.util[e(2137)](d) + e(441) + E + e(625), x[e(1459)][e(2473)] !== !1 && (a += e(1818) + E + e(1594)), x[e(1459)].verbose && (a += e(1534) + u + " , parentSchema: validate.schema" + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += e(368), a += e(2898), !x.compositeRule && l && (x[e(2247)] ? a += " throw new ValidationError(vErrors); " : a += " validate.errors = vErrors; return false; "), a += e(372), l && (a += e(2262));
    } else l && (a += e(844));
    return a;
  }), pt;
}
var mt, ka;
function ac() {
  return ka || (ka = 1, mt = function(x, t, s) {
    const e = B;
    var a = " ", n = x.level, i = x[e(1633)], c = x.schema[t], u = x.schemaPath + x[e(2113)][e(2182)](t), d = x.errSchemaPath + "/" + t, l = !x[e(1459)][e(2421)], f = e(2171) + (i || ""), b = e(1056) + n, h = e(825) + n, m = x[e(2113)][e(2554)](x), v = "";
    m[e(2676)]++;
    var S = "valid" + m.level, P = "i" + n, F = m[e(1633)] = x[e(1633)] + 1, A = e(2171) + F, R = x.baseId;
    if (a += e(1707) + h + " = errors;var " + b + ";", Array[e(344)](c)) {
      var E = x[e(1898)][e(2116)];
      if (E === !1) {
        a += " " + b + e(681) + f + ".length <= " + c[e(1726)] + "; ";
        var C = d;
        d = x[e(2294)] + e(2483), a += "  if (!" + b + e(1318);
        var D = D || [];
        D.push(a), a = "", x[e(592)] !== !1 ? (a += " { keyword: '" + e(2116) + e(2896) + x[e(381)] + e(2794) + x[e(2113)][e(2137)](d) + e(2808) + c.length + " } ", x[e(1459)][e(2473)] !== !1 && (a += e(2094) + c[e(1726)] + e(1940)), x[e(1459)][e(1418)] && (a += e(1298) + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += " {} ";
        var j = a;
        a = D[e(435)](), !x[e(1539)] && l ? x[e(2247)] ? a += e(782) + j + e(2328) : a += e(2197) + j + e(678) : a += " var err = " + j + e(2898), a += e(625), d = C, l && (v += "}", a += e(2262));
      }
      var M = c;
      if (M) {
        for (var N, q = -1, U = M[e(1726)] - 1; q < U; )
          if (N = M[q += 1], x[e(1459)].strictKeywords ? typeof N == e(1694) && Object.keys(N)[e(1726)] > 0 || N === !1 : x[e(2113)][e(2038)](N, x[e(2117)][e(1348)])) {
            a += " " + S + " = true; if (" + f + ".length > " + q + e(1908);
            var $ = f + "[" + q + "]";
            m[e(1898)] = N, m[e(2111)] = u + "[" + q + "]", m[e(2294)] = d + "/" + q, m[e(381)] = x[e(2113)][e(997)](x[e(381)], q, x.opts[e(2890)], !0), m[e(2500)][F] = q;
            var V = x.validate(m);
            m.baseId = R, x[e(2113)][e(2908)](V, A) < 2 ? a += " " + x[e(2113)][e(2385)](V, A, $) + " " : a += e(1481) + A + e(681) + $ + "; " + V + " ", a += e(990), l && (a += " if (" + S + e(1908), v += "}");
          }
      }
      if (typeof E == e(1694) && (x[e(1459)].strictKeywords ? typeof E == e(1694) && Object[e(2023)](E)[e(1726)] > 0 || E === !1 : x[e(2113)][e(2038)](E, x[e(2117)][e(1348)]))) {
        m[e(1898)] = E, m.schemaPath = x[e(2111)] + ".additionalItems", m.errSchemaPath = x[e(2294)] + e(2483), a += " " + S + e(1013) + f + ".length > " + c[e(1726)] + e(1422) + P + " = " + c.length + "; " + P + " < " + f + e(1403) + P + e(1741), m[e(381)] = x.util[e(997)](x[e(381)], P, x[e(1459)][e(2890)], !0);
        var $ = f + "[" + P + "]";
        m.dataPathArr[F] = P;
        var V = x[e(2162)](m);
        m[e(1393)] = R, x[e(2113)][e(2908)](V, A) < 2 ? a += " " + x[e(2113)][e(2385)](V, A, $) + " " : a += " var " + A + e(681) + $ + "; " + V + " ", l && (a += " if (!" + S + e(1767)), a += e(2582), l && (a += e(1341) + S + e(1908), v += "}");
      }
    } else if (x[e(1459)][e(2305)] ? typeof c == "object" && Object[e(2023)](c)[e(1726)] > 0 || c === !1 : x[e(2113)][e(2038)](c, x[e(2117)][e(1348)])) {
      m.schema = c, m[e(2111)] = u, m[e(2294)] = d, a += e(391) + P + " = 0; " + P + e(948) + f + e(1403) + P + e(1741), m[e(381)] = x[e(2113)][e(997)](x[e(381)], P, x[e(1459)][e(2890)], !0);
      var $ = f + "[" + P + "]";
      m[e(2500)][F] = P;
      var V = x[e(2162)](m);
      m[e(1393)] = R, x[e(2113)].varOccurences(V, A) < 2 ? a += " " + x[e(2113)].varReplace(V, A, $) + " " : a += e(1481) + A + e(681) + $ + "; " + V + " ", l && (a += e(2061) + S + ") break; "), a += " }";
    }
    return l && (a += " " + v + " if (" + h + " == errors) {"), a;
  }), mt;
}
var bt, Pa;
function Ia() {
  return Pa || (Pa = 1, bt = function(x, t, s) {
    const e = B;
    var a = " ", n = x.level, i = x[e(1633)], c = x[e(1898)][t], u = x[e(2111)] + x[e(2113)][e(2182)](t), d = x[e(2294)] + "/" + t, l = !x[e(1459)][e(2421)], R, f = "data" + (i || ""), b = x[e(1459)][e(1995)] && c && c.$data, h;
    b ? (a += e(2902) + n + e(681) + x[e(2113)][e(862)](c.$data, i, x[e(2500)]) + "; ", h = e(1898) + n) : h = c;
    var m = t == "maximum", v = m ? "exclusiveMaximum" : e(1152), S = x[e(1898)][v], P = x[e(1459)][e(1995)] && S && S[e(1995)], F = m ? "<" : ">", A = m ? ">" : "<", R = void 0;
    if (!(b || typeof c == "number" || c === void 0)) throw new Error(t + e(1002));
    if (!(P || S === void 0 || typeof S == e(1455) || typeof S == e(2788))) throw new Error(v + e(1729));
    if (P) {
      var E = x.util.getData(S[e(1995)], i, x[e(2500)]), C = e(1613) + n, D = e(2145) + n, j = e(1290) + n, M = "op" + n, N = e(2635) + M + e(858);
      a += e(2249) + n + e(681) + E + "; ", E = "schemaExcl" + n, a += e(1481) + C + "; var " + D + e(2528) + E + e(643) + D + " != 'boolean' && " + D + " != 'undefined' && " + D + " != 'number') { ";
      var R = v, q = q || [];
      q[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += " { keyword: '" + (R || e(1470)) + e(2896) + x[e(381)] + e(2794) + x[e(2113)].toQuotedString(d) + e(661), x[e(1459)][e(2473)] !== !1 && (a += e(2161) + v + e(752)), x.opts.verbose && (a += e(1534) + u + e(706) + x[e(2111)] + e(1592) + f + " "), a += " } ") : a += e(368);
      var U = a;
      a = q[e(435)](), !x.compositeRule && l ? x[e(2247)] ? a += e(782) + U + e(2328) : a += e(2197) + U + e(678) : a += e(1858) + U + e(2898), a += e(378), b && (a += " (" + h + e(1639) + h + e(1869)), a += " " + D + e(1986) + C + e(681) + h + " === undefined || " + E + " " + F + "= " + h + e(1304) + f + " " + A + "= " + E + e(2697) + f + " " + A + " " + h + e(719) + C + e(681) + E + " === true) ? " + f + " " + A + "= " + h + e(2697) + f + " " + A + " " + h + e(2356) + f + e(2011) + f + e(2454) + n + " = " + C + e(2178) + F + e(1842) + F + e(2315), c === void 0 && (R = v, d = x.errSchemaPath + "/" + v, h = E, b = P);
    } else {
      var j = typeof S == e(1455), N = F;
      if (j && b) {
        var M = "'" + N + "'";
        a += " if ( ", b && (a += " (" + h + e(1639) + h + e(1869)), a += e(1591) + h + e(523) + S + " " + F + "= " + h + e(981) + f + " " + A + "= " + S + " : " + f + " " + A + " " + h + e(2356) + f + " !== " + f + e(1908);
      } else {
        j && c === void 0 ? (C = !0, R = v, d = x[e(2294)] + "/" + v, h = S, A += "=") : (j && (h = Math[e(m ? 2742 : 2650)](S, c)), S === (j ? h : !0) ? (C = !0, R = v, d = x[e(2294)] + "/" + v, A += "=") : (C = !1, N += "="));
        var M = "'" + N + "'";
        a += e(2043), b && (a += " (" + h + e(1639) + h + e(1869)), a += " " + f + " " + A + " " + h + e(2452) + f + e(2011) + f + e(1908);
      }
    }
    R = R || t;
    var q = q || [];
    q[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += e(2478) + (R || e(2091)) + e(2896) + x[e(381)] + e(2794) + x[e(2113)][e(2137)](d) + e(1206) + M + e(1663) + h + e(1216) + C + " } ", x[e(1459)][e(2473)] !== !1 && (a += e(821) + N + " ", b ? a += "' + " + h : a += "" + h + "'"), x[e(1459)][e(1418)] && (a += e(584), b ? a += e(1843) + u : a += "" + c, a += e(624) + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += " {} ";
    var U = a;
    return a = q[e(435)](), !x[e(1539)] && l ? x[e(2247)] ? a += e(782) + U + e(2328) : a += " validate.errors = [" + U + e(678) : a += e(1858) + U + e(2898), a += e(625), l && (a += e(2262)), a;
  }), bt;
}
var gt, Ea;
function Ra() {
  return Ea || (Ea = 1, gt = function(x, t, s) {
    const e = B;
    var a = " ", n = x[e(2676)], i = x.dataLevel, c = x[e(1898)][t], u = x[e(2111)] + x[e(2113)][e(2182)](t), d = x[e(2294)] + "/" + t, l = !x[e(1459)].allErrors, v, f = e(2171) + (i || ""), b = x[e(1459)][e(1995)] && c && c[e(1995)], h;
    if (b ? (a += " var schema" + n + " = " + x.util[e(862)](c[e(1995)], i, x[e(2500)]) + "; ", h = e(1898) + n) : h = c, !(b || typeof c == e(1455))) throw new Error(t + " must be number");
    var m = t == e(936) ? ">" : "<";
    a += "if ( ", b && (a += " (" + h + e(1639) + h + e(1869)), a += " " + f + e(1526) + m + " " + h + e(1908);
    var v = t, S = S || [];
    S.push(a), a = "", x[e(592)] !== !1 ? (a += " { keyword: '" + (v || e(2152)) + e(2896) + x.errorPath + e(2794) + x[e(2113)].toQuotedString(d) + e(2808) + h + e(625), x[e(1459)][e(2473)] !== !1 && (a += e(373), t == e(936) ? a += "more" : a += e(1875), a += " than ", b ? a += e(2635) + h + e(858) : a += "" + c, a += " items' "), x[e(1459)].verbose && (a += e(584), b ? a += "validate.schema" + u : a += "" + c, a += e(624) + x.schemaPath + e(1592) + f + " "), a += e(625)) : a += e(368);
    var P = a;
    return a = S[e(435)](), !x.compositeRule && l ? x.async ? a += " throw new ValidationError([" + P + e(2328) : a += e(2197) + P + "]; return false; " : a += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += "} ", l && (a += e(2262)), a;
  }), gt;
}
var yt, Ca;
function Fa() {
  return Ca || (Ca = 1, yt = function(x, t, s) {
    const e = B;
    var a = " ", n = x.level, i = x[e(1633)], c = x[e(1898)][t], u = x[e(2111)] + x[e(2113)].getProperty(t), d = x.errSchemaPath + "/" + t, l = !x[e(1459)][e(2421)], v, f = e(2171) + (i || ""), b = x[e(1459)][e(1995)] && c && c[e(1995)], h;
    if (b ? (a += e(2902) + n + e(681) + x[e(2113)][e(862)](c[e(1995)], i, x[e(2500)]) + "; ", h = "schema" + n) : h = c, !(b || typeof c == "number")) throw new Error(t + e(1002));
    var m = t == e(2501) ? ">" : "<";
    a += "if ( ", b && (a += " (" + h + e(1639) + h + e(1869)), x[e(1459)][e(2069)] === !1 ? a += " " + f + e(1526) : a += e(589) + f + ") ", a += " " + m + " " + h + e(1908);
    var v = t, S = S || [];
    S.push(a), a = "", x.createErrors !== !1 ? (a += e(2478) + (v || e(2419)) + "' , dataPath: (dataPath || '') + " + x[e(381)] + e(2794) + x.util[e(2137)](d) + " , params: { limit: " + h + " } ", x[e(1459)][e(2473)] !== !1 && (a += e(1014), t == e(2501) ? a += e(2355) : a += e(1101), a += " than ", b ? a += e(2635) + h + e(858) : a += "" + c, a += e(1926)), x[e(1459)][e(1418)] && (a += " , schema:  ", b ? a += e(1843) + u : a += "" + c, a += "         , parentSchema: validate.schema" + x[e(2111)] + " , data: " + f + " "), a += e(625)) : a += e(368);
    var P = a;
    return a = S[e(435)](), !x[e(1539)] && l ? x.async ? a += e(782) + P + e(2328) : a += e(2197) + P + "]; return false; " : a += e(1858) + P + e(2898), a += "} ", l && (a += " else { "), a;
  }), yt;
}
var vt, Na;
function qa() {
  return Na || (Na = 1, vt = function(x, t, s) {
    const e = B;
    var a = " ", n = x.level, i = x[e(1633)], c = x[e(1898)][t], u = x.schemaPath + x[e(2113)][e(2182)](t), d = x.errSchemaPath + "/" + t, l = !x[e(1459)].allErrors, v, f = e(2171) + (i || ""), b = x.opts[e(1995)] && c && c[e(1995)], h;
    if (b ? (a += e(2902) + n + e(681) + x[e(2113)][e(862)](c[e(1995)], i, x[e(2500)]) + "; ", h = "schema" + n) : h = c, !(b || typeof c == e(1455))) throw new Error(t + e(1002));
    var m = t == "maxProperties" ? ">" : "<";
    a += e(2796), b && (a += " (" + h + " !== undefined && typeof " + h + e(1869)), a += " Object.keys(" + f + e(1457) + m + " " + h + e(1908);
    var v = t, S = S || [];
    S[e(1072)](a), a = "", x.createErrors !== !1 ? (a += e(2478) + (v || e(809)) + e(2896) + x[e(381)] + e(2794) + x.util[e(2137)](d) + e(2808) + h + e(625), x[e(1459)][e(2473)] !== !1 && (a += e(373), t == "maxProperties" ? a += e(1189) : a += e(1875), a += e(1076), b ? a += e(2635) + h + e(858) : a += "" + c, a += e(1620)), x.opts.verbose && (a += " , schema:  ", b ? a += e(1843) + u : a += "" + c, a += e(624) + x[e(2111)] + e(1592) + f + " "), a += " } ") : a += e(368);
    var P = a;
    return a = S[e(435)](), !x.compositeRule && l ? x[e(2247)] ? a += " throw new ValidationError([" + P + "]); " : a += e(2197) + P + e(678) : a += " var err = " + P + e(2898), a += "} ", l && (a += " else { "), a;
  }), vt;
}
var wt, Ta;
function sc() {
  return Ta || (Ta = 1, wt = function(x, t, s) {
    const e = B;
    var a = " ", n = x[e(2676)], i = x[e(1633)], c = x[e(1898)][t], u = x[e(2111)] + x[e(2113)].getProperty(t), d = x[e(2294)] + "/" + t, l = !x[e(1459)][e(2421)], f = e(2171) + (i || ""), b = x[e(1459)][e(1995)] && c && c[e(1995)], h;
    if (b ? (a += " var schema" + n + e(681) + x[e(2113)][e(862)](c[e(1995)], i, x[e(2500)]) + "; ", h = e(1898) + n) : h = c, !(b || typeof c == e(1455))) throw new Error(t + e(1002));
    a += e(2006) + n + e(634), b && (a += " " + h + e(2861) + h + e(969)), a += e(726) + n + e(681) + f + e(2166) + h + ", ", x[e(1459)][e(1102)] ? a += " Math.abs(Math.round(division" + n + e(616) + n + ") > 1e-" + x.opts[e(1102)] + " " : a += " division" + n + e(1199) + n + ") ", a += e(1701), b && (a += e(2593)), a += " ) {   ";
    var m = m || [];
    m[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += e(2478) + e(1172) + e(2896) + x.errorPath + e(2794) + x.util.toQuotedString(d) + e(927) + h + e(625), x[e(1459)][e(2473)] !== !1 && (a += " , message: 'should be multiple of ", b ? a += e(2635) + h : a += "" + h + "'"), x[e(1459)][e(1418)] && (a += e(584), b ? a += e(1843) + u : a += "" + c, a += e(624) + x[e(2111)] + e(1592) + f + " "), a += " } ") : a += e(368);
    var v = a;
    return a = m[e(435)](), !x[e(1539)] && l ? x.async ? a += " throw new ValidationError([" + v + "]); " : a += e(2197) + v + e(678) : a += e(1858) + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += "} ", l && (a += e(2262)), a;
  }), wt;
}
var St, Aa;
function nc() {
  return Aa || (Aa = 1, St = function(x, t, s) {
    const e = B;
    var a = " ", n = x.level, i = x[e(1633)], c = x[e(1898)][t], u = x[e(2111)] + x[e(2113)][e(2182)](t), d = x[e(2294)] + "/" + t, l = !x[e(1459)][e(2421)], f = "data" + (i || ""), b = e(825) + n, h = x.util[e(2554)](x);
    h[e(2676)]++;
    var m = e(1056) + h[e(2676)];
    if (x[e(1459)][e(2305)] ? typeof c == e(1694) && Object[e(2023)](c).length > 0 || c === !1 : x[e(2113)].schemaHasRules(c, x[e(2117)].all)) {
      h[e(1898)] = c, h[e(2111)] = u, h[e(2294)] = d, a += e(1481) + b + e(2801);
      var v = x[e(1539)];
      x[e(1539)] = h.compositeRule = !0, h[e(592)] = !1;
      var S;
      h[e(1459)][e(2421)] && (S = h.opts[e(2421)], h[e(1459)][e(2421)] = !1), a += " " + x[e(2162)](h) + " ", h.createErrors = !0, S && (h.opts.allErrors = S), x.compositeRule = h[e(1539)] = v, a += " if (" + m + e(1318);
      var P = P || [];
      P[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += e(2478) + e(356) + e(2896) + x[e(381)] + e(2794) + x.util.toQuotedString(d) + e(661), x.opts[e(2473)] !== !1 && (a += e(2482)), x[e(1459)][e(1418)] && (a += " , schema: validate.schema" + u + e(706) + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += " {} ";
      var F = a;
      a = P.pop(), !x[e(1539)] && l ? x.async ? a += e(782) + F + e(2328) : a += " validate.errors = [" + F + e(678) : a += e(1858) + F + e(2898), a += e(604) + b + "; if (vErrors !== null) { if (" + b + e(1576) + b + e(835), x[e(1459)][e(2421)] && (a += " } ");
    } else a += e(2770), x.createErrors !== !1 ? (a += e(2478) + e(356) + e(2896) + x.errorPath + e(2794) + x.util[e(2137)](d) + " , params: {} ", x[e(1459)][e(2473)] !== !1 && (a += e(2482)), x.opts.verbose && (a += " , schema: validate.schema" + u + e(706) + x[e(2111)] + " , data: " + f + " "), a += e(625)) : a += e(368), a += e(2898), l && (a += " if (false) { ");
    return a;
  }), St;
}
var kt, Oa;
function oc() {
  return Oa || (Oa = 1, kt = function(x, t, s) {
    const e = B;
    var a = " ", n = x[e(2676)], i = x[e(1633)], c = x[e(1898)][t], u = x.schemaPath + x[e(2113)].getProperty(t), d = x[e(2294)] + "/" + t, l = !x[e(1459)][e(2421)], f = e(2171) + (i || ""), b = e(1056) + n, h = "errs__" + n, m = x[e(2113)][e(2554)](x), v = "";
    m[e(2676)]++;
    var S = "valid" + m[e(2676)], P = m.baseId, F = e(863) + n, A = e(2880) + n;
    a += e(1707) + h + " = errors , " + F + e(1703) + b + e(1703) + A + " = null; ";
    var R = x[e(1539)];
    x.compositeRule = m.compositeRule = !0;
    var E = c;
    if (E)
      for (var C, D = -1, j = E[e(1726)] - 1; D < j; )
        C = E[D += 1], (x[e(1459)][e(2305)] ? typeof C == e(1694) && Object.keys(C)[e(1726)] > 0 || C === !1 : x[e(2113)][e(2038)](C, x.RULES[e(1348)])) ? (m.schema = C, m[e(2111)] = u + "[" + D + "]", m[e(2294)] = d + "/" + D, a += "  " + x[e(2162)](m) + " ", m[e(1393)] = P) : a += e(1481) + S + e(1350), D && (a += e(1341) + S + e(1175) + F + ") { " + b + e(2154) + A + e(2689) + A + ", " + D + e(1153), v += "}"), a += " if (" + S + e(1908) + b + e(681) + F + e(1350) + A + e(681) + D + e(2403);
    return x[e(1539)] = m[e(1539)] = R, a += "" + v + e(2810) + b + e(1674), x[e(592)] !== !1 ? (a += e(2478) + "oneOf" + e(2896) + x[e(381)] + e(2794) + x[e(2113)][e(2137)](d) + e(2028) + A + e(625), x.opts.messages !== !1 && (a += e(569)), x[e(1459)][e(1418)] && (a += " , schema: validate.schema" + u + e(706) + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += e(368), a += e(2898), !x[e(1539)] && l && (x.async ? a += e(2705) : a += " validate.errors = vErrors; return false; "), a += "} else {  errors = " + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + e(2498), x[e(1459)][e(2421)] && (a += e(625)), a;
  }), kt;
}
var Pt, Da;
function ic() {
  return Da || (Da = 1, Pt = function(x, t, s) {
    const e = B;
    var a = " ", n = x.level, i = x.dataLevel, c = x[e(1898)][t], u = x[e(2111)] + x.util[e(2182)](t), d = x[e(2294)] + "/" + t, l = !x[e(1459)][e(2421)], f = e(2171) + (i || ""), b = x[e(1459)].$data && c && c[e(1995)], h;
    b ? (a += e(2902) + n + " = " + x[e(2113)][e(862)](c.$data, i, x[e(2500)]) + "; ", h = e(1898) + n) : h = c;
    var m = b ? e(815) + h + "))" : x.usePattern(c);
    a += "if ( ", b && (a += " (" + h + e(1639) + h + e(926)), a += " !" + m + ".test(" + f + e(1912);
    var v = v || [];
    v[e(1072)](a), a = "", x.createErrors !== !1 ? (a += e(2478) + e(2067) + e(2896) + x[e(381)] + e(2794) + x[e(2113)].toQuotedString(d) + e(895), b ? a += "" + h : a += "" + x[e(2113)][e(2137)](c), a += "  } ", x[e(1459)][e(2473)] !== !1 && (a += ` , message: 'should match pattern "`, b ? a += "' + " + h + " + '" : a += "" + x[e(2113)].escapeQuotes(c), a += e(408)), x[e(1459)].verbose && (a += e(584), b ? a += e(1843) + u : a += "" + x[e(2113)].toQuotedString(c), a += "         , parentSchema: validate.schema" + x[e(2111)] + e(1592) + f + " "), a += " } ") : a += e(368);
    var S = a;
    return a = v[e(435)](), !x[e(1539)] && l ? x[e(2247)] ? a += e(782) + S + e(2328) : a += e(2197) + S + e(678) : a += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += "} ", l && (a += " else { "), a;
  }), Pt;
}
var It, ja;
function cc() {
  return ja || (ja = 1, It = function(x, t, s) {
    const e = B;
    var a = " ", n = x.level, i = x.dataLevel, c = x[e(1898)][t], u = x[e(2111)] + x[e(2113)][e(2182)](t), d = x[e(2294)] + "/" + t, l = !x.opts[e(2421)], f = e(2171) + (i || ""), b = e(825) + n, h = x.util[e(2554)](x), m = "";
    h[e(2676)]++;
    var v = e(1056) + h[e(2676)], S = e(2444) + n, P = e(1632) + n, F = h[e(1633)] = x.dataLevel + 1, A = e(2171) + F, R = e(446) + n, E = Object[e(2023)](c || {})[e(2783)](l0), C = x[e(1898)][e(2714)] || {}, D = Object[e(2023)](C)[e(2783)](l0), j = x[e(1898)][e(1367)], M = E.length || D.length, N = j === !1, q = typeof j == e(1694) && Object[e(2023)](j)[e(1726)], U = x[e(1459)].removeAdditional, $ = N || q || U, V = x[e(1459)][e(1572)], G = x.baseId, c0 = x[e(1898)][e(2134)];
    if (c0 && !(x[e(1459)][e(1995)] && c0[e(1995)]) && c0.length < x.opts[e(2048)]) var u0 = x[e(2113)].toHash(c0);
    function l0(Mx) {
      return Mx !== "__proto__";
    }
    if (a += e(1707) + b + " = errors;var " + v + " = true;", V && (a += e(1481) + R + " = undefined;"), $) {
      if (V ? a += " " + R + e(681) + R + e(2630) + f + e(2055) + P + "=0; " + P + "<" + R + e(1403) + P + e(1917) + S + " = " + R + "[" + P + e(1222) : a += e(1174) + S + e(2518) + f + ") { ", M) {
        if (a += e(1458) + n + e(2014), E[e(1726)])
          if (E[e(1726)] > 8) a += " || validate.schema" + u + ".hasOwnProperty(" + S + ") ";
          else {
            var o0 = E;
            if (o0)
              for (var f0, k0 = -1, y0 = o0[e(1726)] - 1; k0 < y0; )
                f0 = o0[k0 += 1], a += " || " + S + e(674) + x[e(2113)].toQuotedString(f0) + " ";
          }
        if (D[e(1726)]) {
          var M0 = D;
          if (M0)
            for (var N0, J0 = -1, O = M0[e(1726)] - 1; J0 < O; )
              N0 = M0[J0 += 1], a += e(2452) + x[e(439)](N0) + e(1927) + S + ") ";
        }
        a += e(428) + n + e(1908);
      }
      if (U == e(1348)) a += e(1691) + f + "[" + S + e(1222);
      else {
        var T = x[e(381)], L = e(2635) + S + " + '";
        if (x.opts[e(1730)] && (x[e(381)] = x.util[e(997)](x[e(381)], S, x[e(1459)][e(2890)])), N)
          if (U) a += e(1691) + f + "[" + S + e(1222);
          else {
            a += " " + v + e(2154);
            var J = d;
            d = x[e(2294)] + e(2477);
            var X = X || [];
            X[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += e(2478) + e(1367) + "' , dataPath: (dataPath || '') + " + x.errorPath + " , schemaPath: " + x[e(2113)][e(2137)](d) + " , params: { additionalProperty: '" + L + e(2140), x[e(1459)][e(2473)] !== !1 && (a += e(2161), x[e(1459)][e(1730)] ? a += e(761) : a += e(696), a += "' "), x[e(1459)][e(1418)] && (a += " , schema: false , parentSchema: validate.schema" + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += e(368);
            var W = a;
            a = X[e(435)](), !x[e(1539)] && l ? x[e(2247)] ? a += e(782) + W + e(2328) : a += e(2197) + W + e(678) : a += e(1858) + W + e(2898), d = J, l && (a += e(2496));
          }
        else if (q)
          if (U == e(2375)) {
            a += e(1481) + b + e(2801);
            var Q = x[e(1539)];
            x[e(1539)] = h.compositeRule = !0, h[e(1898)] = j, h.schemaPath = x.schemaPath + e(2439), h[e(2294)] = x.errSchemaPath + e(2477), h[e(381)] = x.opts[e(1730)] ? x[e(381)] : x[e(2113)][e(997)](x[e(381)], S, x[e(1459)][e(2890)]);
            var i0 = f + "[" + S + "]";
            h[e(2500)][F] = S;
            var s0 = x[e(2162)](h);
            h[e(1393)] = G, x[e(2113)].varOccurences(s0, A) < 2 ? a += " " + x[e(2113)][e(2385)](s0, A, i0) + " " : a += e(1481) + A + e(681) + i0 + "; " + s0 + " ", a += " if (!" + v + e(1935) + b + e(884) + f + "[" + S + "]; }  ", x[e(1539)] = h.compositeRule = Q;
          } else {
            h[e(1898)] = j, h[e(2111)] = x[e(2111)] + e(2439), h.errSchemaPath = x[e(2294)] + e(2477), h[e(381)] = x[e(1459)][e(1730)] ? x.errorPath : x[e(2113)][e(997)](x[e(381)], S, x.opts[e(2890)]);
            var i0 = f + "[" + S + "]";
            h[e(2500)][F] = S;
            var s0 = x.validate(h);
            h[e(1393)] = G, x[e(2113)][e(2908)](s0, A) < 2 ? a += " " + x.util[e(2385)](s0, A, i0) + " " : a += " var " + A + e(681) + i0 + "; " + s0 + " ", l && (a += e(2061) + v + e(1767));
          }
        x[e(381)] = T;
      }
      M && (a += e(625)), a += e(990), l && (a += e(1341) + v + ") { ", m += "}");
    }
    var t0 = x.opts.useDefaults && !x.compositeRule;
    if (E[e(1726)]) {
      var L0 = E;
      if (L0)
        for (var f0, A0 = -1, U0 = L0.length - 1; A0 < U0; ) {
          f0 = L0[A0 += 1];
          var S0 = c[f0];
          if (x.opts[e(2305)] ? typeof S0 == "object" && Object[e(2023)](S0).length > 0 || S0 === !1 : x[e(2113)][e(2038)](S0, x.RULES[e(1348)])) {
            var G0 = x.util.getProperty(f0), i0 = f + G0, ne = t0 && S0[e(1200)] !== void 0;
            h[e(1898)] = S0, h.schemaPath = u + G0, h[e(2294)] = d + "/" + x[e(2113)][e(2565)](f0), h[e(381)] = x.util[e(2261)](x.errorPath, f0, x[e(1459)][e(2890)]), h[e(2500)][F] = x[e(2113)][e(2137)](f0);
            var s0 = x[e(2162)](h);
            if (h[e(1393)] = G, x[e(2113)].varOccurences(s0, A) < 2) {
              s0 = x[e(2113)][e(2385)](s0, A, i0);
              var Q0 = i0;
            } else {
              var Q0 = A;
              a += e(1481) + A + e(681) + i0 + "; ";
            }
            if (ne) a += " " + s0 + " ";
            else {
              if (u0 && u0[f0]) {
                a += e(2043) + Q0 + e(830), V && (a += e(804) + f + ", '" + x[e(2113)][e(1922)](f0) + e(2446)), a += ") { " + v + e(2154);
                var T = x[e(381)], J = d, O0 = x[e(2113)][e(1922)](f0);
                x[e(1459)][e(1730)] && (x[e(381)] = x[e(2113)][e(2261)](T, f0, x[e(1459)][e(2890)])), d = x[e(2294)] + e(2012);
                var X = X || [];
                X[e(1072)](a), a = "", x.createErrors !== !1 ? (a += e(2478) + "required" + e(2896) + x[e(381)] + e(2794) + x[e(2113)][e(2137)](d) + " , params: { missingProperty: '" + O0 + e(2140), x[e(1459)][e(2473)] !== !1 && (a += " , message: '", x.opts._errorDataPathProperty ? a += e(371) : a += e(1991) + O0 + "\\'", a += "' "), x.opts[e(1418)] && (a += e(1534) + u + e(706) + x.schemaPath + e(1592) + f + " "), a += e(625)) : a += " {} ";
                var W = a;
                a = X[e(435)](), !x[e(1539)] && l ? x[e(2247)] ? a += e(782) + W + "]); " : a += e(2197) + W + e(678) : a += e(1858) + W + e(2898), d = J, x[e(381)] = T, a += e(1824);
              } else l ? (a += e(2043) + Q0 + e(830), V && (a += e(804) + f + e(856) + x[e(2113)].escapeQuotes(f0) + "') "), a += ") { " + v + " = true; } else { ") : (a += e(1341) + Q0 + e(2906), V && (a += e(1011) + f + ", '" + x.util.escapeQuotes(f0) + "') "), a += e(2506));
              a += " " + s0 + " } ";
            }
          }
          l && (a += " if (" + v + e(1908), m += "}");
        }
    }
    if (D[e(1726)]) {
      var V0 = D;
      if (V0)
        for (var N0, Y0 = -1, $e = V0.length - 1; Y0 < $e; ) {
          N0 = V0[Y0 += 1];
          var S0 = C[N0];
          if (x[e(1459)][e(2305)] ? typeof S0 == e(1694) && Object[e(2023)](S0)[e(1726)] > 0 || S0 === !1 : x[e(2113)][e(2038)](S0, x[e(2117)][e(1348)])) {
            h[e(1898)] = S0, h[e(2111)] = x[e(2111)] + e(1617) + x.util[e(2182)](N0), h[e(2294)] = x[e(2294)] + "/patternProperties/" + x[e(2113)].escapeFragment(N0), V ? a += " " + R + e(681) + R + e(2630) + f + "); for (var " + P + e(845) + P + "<" + R + e(1403) + P + e(1917) + S + " = " + R + "[" + P + e(1222) : a += e(1174) + S + e(2518) + f + e(1908), a += e(1341) + x[e(439)](N0) + e(1927) + S + e(1051), h[e(381)] = x[e(2113)][e(997)](x.errorPath, S, x[e(1459)][e(2890)]);
            var i0 = f + "[" + S + "]";
            h[e(2500)][F] = S;
            var s0 = x.validate(h);
            h[e(1393)] = G, x[e(2113)][e(2908)](s0, A) < 2 ? a += " " + x[e(2113)][e(2385)](s0, A, i0) + " " : a += e(1481) + A + e(681) + i0 + "; " + s0 + " ", l && (a += e(2061) + v + e(1767)), a += e(625), l && (a += e(1095) + v + e(1350)), a += " }  ", l && (a += " if (" + v + ") { ", m += "}");
          }
        }
    }
    return l && (a += " " + m + e(1341) + b + e(763)), a;
  }), It;
}
var Et, Ma;
function uc() {
  return Ma || (Ma = 1, Et = function(x, t, s) {
    const e = B;
    var a = " ", n = x.level, i = x[e(1633)], c = x[e(1898)][t], u = x[e(2111)] + x.util[e(2182)](t), d = x[e(2294)] + "/" + t, l = !x.opts.allErrors, f = e(2171) + (i || ""), b = e(825) + n, h = x[e(2113)][e(2554)](x), m = "";
    h[e(2676)]++;
    var v = e(1056) + h[e(2676)];
    if (a += e(1707) + b + e(883), x[e(1459)].strictKeywords ? typeof c == e(1694) && Object[e(2023)](c).length > 0 || c === !1 : x[e(2113)].schemaHasRules(c, x[e(2117)][e(1348)])) {
      h[e(1898)] = c, h[e(2111)] = u, h.errSchemaPath = d;
      var S = "key" + n, P = e(1632) + n, F = "i" + n, A = e(2635) + S + e(858), R = h[e(1633)] = x[e(1633)] + 1, E = e(2171) + R, C = e(446) + n, D = x.opts[e(1572)], j = x[e(1393)];
      D && (a += e(1481) + C + " = undefined; "), D ? a += " " + C + e(681) + C + e(2630) + f + e(2055) + P + e(845) + P + "<" + C + e(1403) + P + e(1917) + S + e(681) + C + "[" + P + e(1222) : a += e(1174) + S + " in " + f + e(1908), a += e(829) + n + e(458);
      var M = S, N = x[e(1539)];
      x[e(1539)] = h[e(1539)] = !0;
      var q = x[e(2162)](h);
      h[e(1393)] = j, x[e(2113)][e(2908)](q, E) < 2 ? a += " " + x[e(2113)].varReplace(q, E, M) + " " : a += e(1481) + E + " = " + M + "; " + q + " ", x[e(1539)] = h.compositeRule = N, a += e(2061) + v + e(591) + F + "=startErrs" + n + "; " + F + "<errors; " + F + e(2430) + F + e(1714) + S + e(2225), x[e(592)] !== !1 ? (a += e(2478) + e(1452) + e(2896) + x.errorPath + " , schemaPath: " + x[e(2113)].toQuotedString(d) + e(406) + A + "' } ", x.opts.messages !== !1 && (a += e(2640) + A + e(2365)), x[e(1459)][e(1418)] && (a += e(1534) + u + e(706) + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += e(368), a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(1539)] && l && (x[e(2247)] ? a += " throw new ValidationError(vErrors); " : a += e(1720)), l && (a += e(2496)), a += " } }";
    }
    return l && (a += " " + m + e(1341) + b + e(763)), a;
  }), Et;
}
var Rt, La;
function dc() {
  return La || (La = 1, Rt = function(x, t, s) {
    const e = B;
    var a = " ", n = x[e(2676)], i = x.dataLevel, c = x[e(1898)][t], u = x[e(2111)] + x[e(2113)][e(2182)](t), d = x.errSchemaPath + "/" + t, l = !x[e(1459)].allErrors, f = e(2171) + (i || ""), b = e(1056) + n, h = x[e(1459)][e(1995)] && c && c[e(1995)];
    h && (a += e(2902) + n + e(681) + x[e(2113)].getData(c.$data, i, x[e(2500)]) + "; ");
    var m = "schema" + n;
    if (!h)
      if (c[e(1726)] < x[e(1459)][e(2048)] && x[e(1898)][e(1606)] && Object[e(2023)](x[e(1898)][e(1606)])[e(1726)]) {
        var R = [], v = c;
        if (v)
          for (var S, P = -1, F = v.length - 1; P < F; ) {
            S = v[P += 1];
            var A = x[e(1898)][e(1606)][S];
            !(A && (x[e(1459)].strictKeywords ? typeof A == e(1694) && Object[e(2023)](A)[e(1726)] > 0 || A === !1 : x[e(2113)][e(2038)](A, x[e(2117)][e(1348)]))) && (R[R.length] = S);
          }
      } else var R = c;
    if (h || R[e(1726)]) {
      var E = x[e(381)], C = h || R[e(1726)] >= x[e(1459)][e(2048)], D = x.opts[e(1572)];
      if (l)
        if (a += e(1808) + n + "; ", C) {
          !h && (a += e(1481) + m + e(366) + u + "; ");
          var j = "i" + n, M = e(1898) + n + "[" + j + "]", N = "' + " + M + e(858);
          x[e(1459)]._errorDataPathProperty && (x[e(381)] = x[e(2113)][e(997)](E, M, x.opts[e(2890)])), a += " var " + b + e(1350), h && (a += e(1578) + n + " === undefined) " + b + e(450) + n + ")) " + b + e(1557)), a += e(1174) + j + e(1177) + j + e(948) + m + e(1403) + j + "++) { " + b + e(681) + f + "[" + m + "[" + j + e(2611), D && (a += e(1011) + f + ", " + m + "[" + j + e(2364)), a += "; if (!" + b + e(2097), h && (a += e(2775)), a += "  if (!" + b + e(1318);
          var q = q || [];
          q[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += e(2478) + e(2134) + "' , dataPath: (dataPath || '') + " + x[e(381)] + e(2794) + x.util[e(2137)](d) + " , params: { missingProperty: '" + N + e(2140), x[e(1459)][e(2473)] !== !1 && (a += e(2161), x[e(1459)][e(1730)] ? a += e(371) : a += e(1991) + N + "\\'", a += "' "), x[e(1459)][e(1418)] && (a += e(1534) + u + e(706) + x[e(2111)] + e(1592) + f + " "), a += " } ") : a += e(368);
          var U = a;
          a = q[e(435)](), !x[e(1539)] && l ? x[e(2247)] ? a += e(782) + U + e(2328) : a += e(2197) + U + "]; return false; " : a += e(1858) + U + e(2898), a += e(1824);
        } else {
          a += e(2043);
          var $ = R;
          if ($)
            for (var V, j = -1, G = $[e(1726)] - 1; j < G; ) {
              V = $[j += 1], j && (a += e(2452));
              var c0 = x[e(2113)].getProperty(V), u0 = f + c0;
              a += e(2451) + u0 + e(830), D && (a += e(804) + f + e(856) + x[e(2113)][e(1922)](V) + e(2446)), a += e(765) + n + e(681) + x[e(2113)].toQuotedString(x[e(1459)][e(2890)] ? V : c0) + e(923);
            }
          a += e(1491);
          var M = e(2853) + n, N = e(2635) + M + e(858);
          x[e(1459)]._errorDataPathProperty && (x[e(381)] = x[e(1459)][e(2890)] ? x[e(2113)][e(997)](E, M, !0) : E + " + " + M);
          var q = q || [];
          q[e(1072)](a), a = "", x.createErrors !== !1 ? (a += e(2478) + "required' , dataPath: (dataPath || '') + " + x.errorPath + " , schemaPath: " + x[e(2113)].toQuotedString(d) + " , params: { missingProperty: '" + N + e(2140), x[e(1459)][e(2473)] !== !1 && (a += " , message: '", x[e(1459)][e(1730)] ? a += e(371) : a += e(1991) + N + "\\'", a += "' "), x.opts.verbose && (a += " , schema: validate.schema" + u + e(706) + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += e(368);
          var U = a;
          a = q.pop(), !x[e(1539)] && l ? x[e(2247)] ? a += " throw new ValidationError([" + U + "]); " : a += e(2197) + U + e(678) : a += e(1858) + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += e(1824);
        }
      else if (C) {
        !h && (a += e(1481) + m + e(366) + u + "; ");
        var j = "i" + n, M = e(1898) + n + "[" + j + "]", N = e(2635) + M + e(858);
        x.opts[e(1730)] && (x[e(381)] = x[e(2113)][e(997)](E, M, x[e(1459)][e(2890)])), h && (a += e(1341) + m + " && !Array.isArray(" + m + e(2587), x.createErrors !== !1 ? (a += e(2478) + e(2134) + e(2896) + x[e(381)] + e(2794) + x[e(2113)][e(2137)](d) + " , params: { missingProperty: '" + N + e(2140), x.opts[e(2473)] !== !1 && (a += e(2161), x.opts[e(1730)] ? a += e(371) : a += "should have required property \\'" + N + "\\'", a += "' "), x[e(1459)].verbose && (a += e(1534) + u + e(706) + x[e(2111)] + " , data: " + f + " "), a += e(625)) : a += e(368), a += e(1212) + m + " !== undefined) { "), a += e(1174) + j + e(1177) + j + e(948) + m + e(1403) + j + e(2713) + f + "[" + m + "[" + j + e(2867), D && (a += " || ! Object.prototype.hasOwnProperty.call(" + f + ", " + m + "[" + j + e(2364)), a += e(2455), x[e(592)] !== !1 ? (a += e(2478) + e(2134) + e(2896) + x[e(381)] + e(2794) + x[e(2113)][e(2137)](d) + e(1419) + N + e(2140), x[e(1459)].messages !== !1 && (a += e(2161), x[e(1459)]._errorDataPathProperty ? a += e(371) : a += e(1991) + N + "\\'", a += "' "), x[e(1459)].verbose && (a += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x[e(2111)] + " , data: " + f + " "), a += e(625)) : a += e(368), a += e(2674), h && (a += e(2775));
      } else {
        var l0 = R;
        if (l0)
          for (var V, o0 = -1, f0 = l0[e(1726)] - 1; o0 < f0; ) {
            V = l0[o0 += 1];
            var c0 = x.util.getProperty(V), N = x[e(2113)][e(1922)](V), u0 = f + c0;
            x[e(1459)]._errorDataPathProperty && (x[e(381)] = x[e(2113)][e(2261)](E, V, x[e(1459)][e(2890)])), a += e(2043) + u0 + e(830), D && (a += " || ! Object.prototype.hasOwnProperty.call(" + f + ", '" + x[e(2113)][e(1922)](V) + e(2446)), a += e(2455), x[e(592)] !== !1 ? (a += e(2478) + e(2134) + "' , dataPath: (dataPath || '') + " + x[e(381)] + e(2794) + x.util[e(2137)](d) + e(1419) + N + e(2140), x.opts[e(2473)] !== !1 && (a += e(2161), x[e(1459)][e(1730)] ? a += "is a required property" : a += e(1991) + N + "\\'", a += "' "), x.opts[e(1418)] && (a += e(1534) + u + " , parentSchema: validate.schema" + x[e(2111)] + e(1592) + f + " "), a += e(625)) : a += e(368), a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
          }
      }
      x[e(381)] = E;
    } else l && (a += " if (true) {");
    return a;
  }), Rt;
}
var Ct, $a;
function lc() {
  return $a || ($a = 1, Ct = function(x, t, s) {
    const e = B;
    var a = " ", n = x.level, i = x.dataLevel, c = x[e(1898)][t], u = x.schemaPath + x.util[e(2182)](t), d = x[e(2294)] + "/" + t, l = !x[e(1459)][e(2421)], f = e(2171) + (i || ""), b = e(1056) + n, h = x[e(1459)][e(1995)] && c && c.$data, m;
    if (h ? (a += e(2902) + n + e(681) + x[e(2113)][e(862)](c[e(1995)], i, x[e(2500)]) + "; ", m = e(1898) + n) : m = c, (c || h) && x[e(1459)][e(2503)] !== !1) {
      h && (a += e(1481) + b + e(643) + m + " === false || " + m + e(2461) + b + e(832) + m + e(2772) + b + e(476)), a += e(2215) + f + e(2121) + b + e(1476);
      var v = x[e(1898)][e(2480)] && x.schema.items.type, S = Array[e(344)](v);
      if (!v || v == "object" || v == e(2241) || S && (v[e(1602)](e(1694)) >= 0 || v.indexOf(e(2241)) >= 0)) a += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + f + e(2325) + f + e(1575) + b + " = false; break outer; } } } ";
      else {
        a += e(490) + f + e(1987);
        var P = e(697) + (S ? "s" : "");
        a += e(1341) + x[e(2113)][P](v, e(798), x[e(1459)].strictNumbers, !0) + e(1426), S && (a += e(2901)), a += e(873) + b + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
      }
      a += " } ", h && (a += "  }  "), a += e(2061) + b + e(1318);
      var F = F || [];
      F[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += e(2478) + e(2503) + e(2896) + x[e(381)] + " , schemaPath: " + x[e(2113)][e(2137)](d) + e(1513), x[e(1459)].messages !== !1 && (a += e(2691)), x[e(1459)][e(1418)] && (a += " , schema:  ", h ? a += e(1843) + u : a += "" + c, a += "         , parentSchema: validate.schema" + x.schemaPath + " , data: " + f + " "), a += e(625)) : a += e(368);
      var A = a;
      a = F[e(435)](), !x[e(1539)] && l ? x[e(2247)] ? a += e(782) + A + e(2328) : a += e(2197) + A + e(678) : a += e(1858) + A + e(2898), a += e(625), l && (a += " else { ");
    } else l && (a += e(844));
    return a;
  }), Ct;
}
var Ft, Ha;
function fc() {
  return Ha || (Ha = 1, Ft = { $ref: _2(), allOf: G2(), anyOf: J2(), $comment: Q2(), const: X2(), contains: Y2(), dependencies: ec(), enum: xc(), format: tc(), if: rc(), items: ac(), maximum: Ia(), minimum: Ia(), maxItems: Ra(), minItems: Ra(), maxLength: Fa(), minLength: Fa(), maxProperties: qa(), minProperties: qa(), multipleOf: sc(), not: nc(), oneOf: oc(), pattern: ic(), properties: cc(), propertyNames: uc(), required: dc(), uniqueItems: lc(), validate: dn() }), Ft;
}
var Nt, za;
function hc() {
  const o = r;
  if (za) return Nt;
  za = 1;
  var x = fc(), t = Be()[o(1134)];
  return Nt = function() {
    const e = o;
    var a = [{ type: e(1455), rules: [{ maximum: [e(955)] }, { minimum: [e(1152)] }, e(1172), "format"] }, { type: e(360), rules: [e(2501), e(1586), e(2067), "format"] }, { type: "array", rules: [e(936), "minItems", e(2480), e(846), "uniqueItems"] }, { type: e(1694), rules: ["maxProperties", e(489), e(2134), e(1566), "propertyNames", { properties: [e(1367), e(2714)] }] }, { rules: [e(1800), "const", e(2115), e(356), "anyOf", e(1421), "allOf", "if"] }], n = [e(1655), e(1802)], i = [e(2257), e(2331), "id", e(1995), "$async", e(1924), e(444), e(1200), e(1295), e(1427), e(1389), e(721), e(2612), "contentEncoding", e(2116), e(1227), e(1866)], c = ["number", e(1046), "string", e(2241), e(1694), e(2788), e(833)];
    return a[e(1348)] = t(n), a.types = t(c), a[e(785)](function(u) {
      const d = e;
      u.rules = u[d(1202)].map(function(l) {
        const f = d;
        var b;
        if (typeof l == f(1694)) {
          var h = Object[f(2023)](l)[0];
          b = l[h], l = h, b[f(785)](function(v) {
            n[f(1072)](v), a.all[v] = !0;
          });
        }
        n[f(1072)](l);
        var m = a[f(1348)][l] = { keyword: l, code: x[l], implements: b };
        return m;
      }), a.all[d(1802)] = { keyword: d(1802), code: x.$comment }, u[d(1655)] && (a[d(608)][u[d(1655)]] = u);
    }), a[e(910)] = t(n[e(1100)](i)), a.custom = {}, a;
  }, Nt;
}
var qt, Ua;
function pc() {
  const o = r;
  if (Ua) return qt;
  Ua = 1;
  var x = ["multipleOf", o(2774), "exclusiveMaximum", o(2701), o(1152), o(2501), "minLength", o(2067), o(2116), o(936), "minItems", o(2503), "maxProperties", o(489), o(2134), o(1367), o(2115), o(839), o(1167)];
  return qt = function(t, s) {
    const e = o;
    for (var a = 0; a < s[e(1726)]; a++) {
      t = JSON[e(1724)](JSON[e(2848)](t));
      var n = s[a][e(1821)]("/"), i = t, c;
      for (c = 1; c < n[e(1726)]; c++) i = i[n[c]];
      for (c = 0; c < x[e(1726)]; c++) {
        var u = x[c], d = i[u];
        d && (i[u] = { anyOf: [d, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] });
      }
    }
    return t;
  }, qt;
}
var Tt, Va;
function mc() {
  if (Va) return Tt;
  Va = 1;
  var o = ur().MissingRef;
  Tt = x;
  function x(t, s, e) {
    const a = B;
    var n = this;
    if (typeof this._opts.loadSchema != a(975)) throw new Error(a(2870));
    typeof s == a(975) && (e = s, s = void 0);
    var i = c(t)[a(1227)](function() {
      const d = a;
      var l = n._addSchema(t, void 0, s);
      return l[d(2162)] || u(l);
    });
    return e && i[a(1227)](function(d) {
      e(null, d);
    }, e), i;
    function c(d) {
      const l = a;
      var f = d[l(2257)];
      return f && !n[l(1931)](f) ? x[l(1297)](n, { $ref: f }, !0) : Promise.resolve();
    }
    function u(d) {
      try {
        return n._compile(d);
      } catch (f) {
        if (f instanceof o) return l(f);
        throw f;
      }
      function l(f) {
        const b = B;
        var h = f[b(2552)];
        if (S(h)) throw new Error(b(1527) + h + b(2680) + f[b(909)] + " cannot be resolved");
        var m = n[b(1156)][h];
        return !m && (m = n._loadingSchemas[h] = n[b(1644)][b(2114)](h), m[b(1227)](v, v)), m[b(1227)](function(P) {
          const F = b;
          if (!S(h)) return c(P)[F(1227)](function() {
            S(h) || n.addSchema(P, h, void 0, s);
          });
        })[b(1227)](function() {
          return u(d);
        });
        function v() {
          const P = b;
          delete n[P(1156)][h];
        }
        function S(P) {
          const F = b;
          return n[F(1411)][P] || n[F(2357)][P];
        }
      }
    }
  }
  return Tt;
}
var At, Wa;
function bc() {
  return Wa || (Wa = 1, At = function(x, t, s) {
    const e = B;
    var a = " ", n = x.level, i = x[e(1633)], c = x[e(1898)][t], u = x.schemaPath + x[e(2113)].getProperty(t), d = x[e(2294)] + "/" + t, l = !x[e(1459)].allErrors, f, b = e(2171) + (i || ""), h = "valid" + n, m = e(825) + n, v = x[e(1459)].$data && c && c.$data, S;
    v ? (a += e(2902) + n + e(681) + x[e(2113)][e(862)](c[e(1995)], i, x.dataPathArr) + "; ", S = "schema" + n) : S = c;
    var P = this, F = e(1623) + n, A = P.definition, R = "", E, C, D, j, M;
    if (v && A.$data) {
      M = e(1650) + n;
      var N = A[e(1958)];
      a += e(1481) + F + e(783) + t + e(2176) + M + " = " + F + e(1859);
    } else {
      if (j = x[e(349)](P, c, x[e(1898)], x), !j) return;
      S = "validate.schema" + u, M = j[e(2776)], E = A[e(973)], C = A[e(2544)], D = A[e(2531)];
    }
    var q = M + e(1317), U = "i" + n, $ = "ruleErr" + n, V = A[e(2247)];
    if (V && !x[e(2247)]) throw new Error("async keyword in sync schema");
    if (!(C || D) && (a += "" + q + e(1410)), a += e(1707) + m + e(628) + h + ";", v && A[e(1995)] && (R += "}", a += e(1341) + S + e(949) + h + e(419), N && (R += "}", a += " " + h + " = " + F + e(1160) + S + e(940) + h + e(1908))), C) A[e(2317)] ? a += " " + j[e(2162)] + " " : a += " " + h + e(681) + j[e(2162)] + "; ";
    else if (D) {
      var G = x[e(2113)][e(2554)](x), R = "";
      G.level++;
      var c0 = e(1056) + G[e(2676)];
      G[e(1898)] = j[e(2162)], G.schemaPath = "";
      var u0 = x[e(1539)];
      x[e(1539)] = G.compositeRule = !0;
      var l0 = x[e(2162)](G).replace(/validate\.schema/g, M);
      x.compositeRule = G[e(1539)] = u0, a += " " + l0;
    } else {
      var o0 = o0 || [];
      o0.push(a), a = "", a += "  " + M + e(1948), x[e(1459)].passContext ? a += e(1506) : a += "self", E || A[e(1898)] === !1 ? a += e(693) + b + " " : a += " , " + S + e(693) + b + e(1892) + x[e(2111)] + " ", a += e(1010), x.errorPath != '""' && (a += " + " + x[e(381)]);
      var f0 = i ? "data" + (i - 1 || "") : e(510), k0 = i ? x[e(2500)][i] : e(1727);
      a += " , " + f0 + " , " + k0 + e(2922);
      var y0 = a;
      a = o0[e(435)](), A.errors === !1 ? (a += " " + h + e(681), V && (a += e(1583)), a += "" + y0 + "; ") : V ? (q = "customErrors" + n, a += e(1481) + q + " = null; try { " + h + " = await " + y0 + e(1771) + h + e(770) + q + " = e.errors; else throw e; } ") : a += " " + q + " = null; " + h + e(681) + y0 + "; ";
    }
    if (A[e(2253)] && (a += e(1341) + f0 + ") " + b + e(681) + f0 + "[" + k0 + "];"), a += "" + R, A.valid) l && (a += e(844));
    else {
      a += " if ( ", A[e(1056)] === void 0 ? (a += " !", D ? a += "" + c0 : a += "" + h) : a += " " + !A[e(1056)] + " ", a += e(1908), f = P[e(1725)];
      var o0 = o0 || [];
      o0[e(1072)](a), a = "";
      var o0 = o0 || [];
      o0[e(1072)](a), a = "", x[e(592)] !== !1 ? (a += " { keyword: '" + (f || e(1974)) + e(2896) + x[e(381)] + e(2794) + x.util[e(2137)](d) + e(1382) + P[e(1725)] + e(2140), x[e(1459)].messages !== !1 && (a += e(1978) + P[e(1725)] + e(1059)), x[e(1459)][e(1418)] && (a += e(1534) + u + " , parentSchema: validate.schema" + x[e(2111)] + e(1592) + b + " "), a += e(625)) : a += " {} ";
      var M0 = a;
      a = o0[e(435)](), !x[e(1539)] && l ? x[e(2247)] ? a += " throw new ValidationError([" + M0 + e(2328) : a += e(2197) + M0 + e(678) : a += e(1858) + M0 + e(2898);
      var N0 = a;
      a = o0[e(435)](), C ? A.errors ? A[e(1137)] != e(2761) && (a += e(391) + U + "=" + m + "; " + U + e(1738) + U + e(1917) + $ + " = vErrors[" + U + e(2383) + $ + ".dataPath === undefined) " + $ + e(2471) + x.errorPath + e(643) + $ + ".schemaPath === undefined) { " + $ + e(1671) + d + '"; } ', x[e(1459)][e(1418)] && (a += " " + $ + e(358) + S + "; " + $ + e(2806) + b + "; "), a += " } ") : A[e(1137)] === !1 ? a += " " + N0 + " " : (a += e(1341) + m + e(473) + N0 + e(2764) + U + "=" + m + "; " + U + "<errors; " + U + e(1917) + $ + e(2112) + U + e(2383) + $ + e(518) + $ + e(2471) + x[e(381)] + "; if (" + $ + ".schemaPath === undefined) { " + $ + e(1671) + d + e(2046), x[e(1459)][e(1418)] && (a += " " + $ + e(358) + S + "; " + $ + ".data = " + b + "; "), a += e(799)) : D ? (a += e(2084), x[e(592)] !== !1 ? (a += " { keyword: '" + (f || e(1974)) + e(2896) + x.errorPath + e(2794) + x.util[e(2137)](d) + e(1382) + P.keyword + e(2140), x[e(1459)][e(2473)] !== !1 && (a += ` , message: 'should pass "` + P[e(1725)] + e(1059)), x[e(1459)][e(1418)] && (a += " , schema: validate.schema" + u + e(706) + x[e(2111)] + " , data: " + b + " "), a += e(625)) : a += e(368), a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x.compositeRule && l && (x[e(2247)] ? a += e(2705) : a += " validate.errors = vErrors; return false; ")) : A[e(1137)] === !1 ? a += " " + N0 + " " : (a += " if (Array.isArray(" + q + e(2392) + q + e(2045) + q + e(1861) + U + "=" + m + "; " + U + "<errors; " + U + e(1917) + $ + e(2112) + U + "]; if (" + $ + e(518) + $ + ".dataPath = (dataPath || '') + " + x.errorPath + e(1647) + $ + e(1671) + d + e(2033), x[e(1459)][e(1418)] && (a += " " + $ + ".schema = " + S + "; " + $ + e(2806) + b + "; "), a += " } } else { " + N0 + e(625)), a += e(625), l && (a += e(2262));
    }
    return a;
  }), At;
}
const gc = r(1094), yc = r(1094), vc = r(754), wc = { schemaArray: { type: r(2241), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: r(1046), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: r(351) }, { default: 0 }] }, simpleTypes: { enum: [r(2241), r(2788), r(1046), r(833), "number", r(1694), "string"] }, stringArray: { type: r(2241), items: { type: r(360) }, uniqueItems: !0, default: [] } }, Sc = ["object", "boolean"], kc = { $id: { type: r(360), format: r(1338) }, $schema: { type: r(360), format: r(666) }, $ref: { type: r(360), format: r(1338) }, $comment: { type: r(360) }, title: { type: r(360) }, description: { type: r(360) }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: r(2241), items: !0 }, multipleOf: { type: r(1455), exclusiveMinimum: 0 }, maximum: { type: r(1455) }, exclusiveMaximum: { type: r(1455) }, minimum: { type: "number" }, exclusiveMinimum: { type: r(1455) }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: r(415) }, pattern: { type: r(360), format: r(463) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: r(1062) }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: r(2788), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: r(351) }, minProperties: { $ref: r(415) }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: r(1694), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: r(1694), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: r(1694), additionalProperties: { $ref: "#" }, propertyNames: { format: r(463) }, default: {} }, dependencies: { type: r(1694), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: r(2322) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: r(2241), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: r(1759) }, { type: r(2241), items: { $ref: r(1759) }, minItems: 1, uniqueItems: !0 }] }, format: { type: r(360) }, contentMediaType: { type: r(360) }, contentEncoding: { type: r(360) }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: r(1062) }, anyOf: { $ref: r(1062) }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, ln = { $schema: gc, $id: yc, title: vc, definitions: wc, type: Sc, properties: kc, default: !0 };
var Ot, Za;
function Pc() {
  const o = r;
  if (Za) return Ot;
  Za = 1;
  var x = ln;
  return Ot = { $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", definitions: { simpleTypes: x[o(1295)][o(1748)] }, type: o(1694), dependencies: { schema: [o(2162)], $data: ["validate"], statements: ["inline"], valid: { not: { required: [o(2531)] } } }, properties: { type: x[o(1606)][o(1655)], schema: { type: o(2788) }, statements: { type: o(2788) }, dependencies: { type: o(2241), items: { type: o(360) } }, metaSchema: { type: o(1694) }, modifying: { type: o(2788) }, valid: { type: o(2788) }, $data: { type: o(2788) }, async: { type: "boolean" }, errors: { anyOf: [{ type: o(2788) }, { const: "full" }] } } }, Ot;
}
var Dt, Ba;
function Ic() {
  if (Ba) return Dt;
  Ba = 1;
  var o = /^[a-z_$][a-z0-9_$-]*$/i, x = bc(), t = Pc();
  Dt = { add: s, get: e, remove: a, validate: n };
  function s(i, c) {
    const u = B;
    var d = this[u(2117)];
    if (d.keywords[i]) throw new Error(u(641) + i + " is already defined");
    if (!o[u(1723)](i)) throw new Error("Keyword " + i + u(611));
    if (c) {
      this[u(1739)](c, !0);
      var l = c.type;
      if (Array[u(344)](l))
        for (var f = 0; f < l[u(1726)]; f++) h(i, l[f], c);
      else h(i, l, c);
      var b = c.metaSchema;
      b && (c[u(1995)] && this[u(1644)][u(1995)] && (b = { anyOf: [b, { $ref: u(514) }] }), c.validateSchema = this.compile(b, !0));
    }
    d[u(910)][i] = d[u(1348)][i] = !0;
    function h(m, v, S) {
      const P = u;
      for (var F, A = 0; A < d.length; A++) {
        var R = d[A];
        if (R[P(1655)] == v) {
          F = R;
          break;
        }
      }
      !F && (F = { type: v, rules: [] }, d[P(1072)](F));
      var E = { keyword: m, definition: S, custom: !0, code: x, implements: S[P(2657)] };
      F[P(1202)].push(E), d[P(1974)][m] = E;
    }
    return this;
  }
  function e(i) {
    const c = B;
    var u = this.RULES[c(1974)][i];
    return u ? u[c(1623)] : this[c(2117)][c(910)][i] || !1;
  }
  function a(i) {
    const c = B;
    var u = this[c(2117)];
    delete u[c(910)][i], delete u.all[i], delete u[c(1974)][i];
    for (var d = 0; d < u.length; d++)
      for (var l = u[d][c(1202)], f = 0; f < l[c(1726)]; f++)
        if (l[f][c(1725)] == i) {
          l[c(1719)](f, 1);
          break;
        }
    return this;
  }
  function n(i, c) {
    const u = B;
    n[u(1137)] = null;
    var d = this[u(729)] = this[u(729)] || this[u(973)](t, !0);
    if (d(i)) return !0;
    if (n[u(1137)] = d[u(1137)], c) throw new Error(u(1528) + this[u(2070)](d[u(1137)]));
    return !1;
  }
  return Dt;
}
const Ec = r(1094), Rc = r(514), Cc = r(823), Fc = r(1694), Nc = [r(1995)], qc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: r(334) }] } }, Tc = !1, Ac = { $schema: Ec, $id: Rc, description: Cc, type: Fc, required: Nc, properties: qc, additionalProperties: Tc };
function qx() {
  const o = ["maximum", "  }  ", "code", "上传已中止", "Invalid boundary: left must be less than right, top must be less than bottom", "notifications/resources/list_changed", "rest", "' && !(typeof ", "regexpUnescape", "filter", "formatSeparator", "strictDefaults", "alg", "next", "boolean", "_onnotification", "新增槽位", "ctx", "Cloud:", "PS shortcuts may be blocked by plugin...", " , schemaPath: ", "ASCII", "if ( ", "[A-Za-z0-9\\-\\.\\_\\~", "Refresh workflow list", '[\\"]', ".length == 1) { ", " = errors;  ", "freeze", "pctDecChars", "processors", "Unauthorized (401)", ".data = ", "Username: {{username}}", " , params: { limit: ", "Task cancelled", "if (!", "local", "fallbackNS", "queuePrompt", "waiting for queue prompt", "OpenAI API 错误", "Unknown error", "fatal", "$$$$", "5330120vvDxDm", "comfy", "curlayer_curlayer", "仅选区范围", "app.queuePrompt caught", "http://json-schema.org/schema", "state", "Smart Object Layer", "resolveImage", "退出登录", " return errors === 0;       ", "toFixed", "normalize", "+Alt reversed mask", "running", "ids", "overflow", "isInitializing", "应用ID:", "ayl", "ZodPipeline", "cuid2", "No workflow selected", "logging/setLevel", "?\\]?$", "请输入您的 Google API Key", "Intersection results could not be merged", "输出区域", "Create guide frame", "stringify", "请求超时 (408)", "warn", "defaultMeta", "utils", "missing", "ConnectionClosed", "prompt_id", "Import as New Document", "_cached", "设为当前选区", "重启ComfyUI失败", "nodeIndexes", " !== undefined && ( typeof ", "Execute", " === '' ", "node_id", "listRoots", "needsPlural", "]] === undefined ", "#CC9933", " , params: { format:  ", "options.loadSchema should be a function", "ZodVoid", "reboot", "saveMissingTo", "224412YMyEes", "Invalid boundary type: {{type}}", "目标边界为空", "getNodes API failed - {{reason}}", "preload", "2.1.0", "passingSchemas", "alert", "))))) {", "waitingReads", "formatters", "toASCII", "false", "获取表单数据失败", "removeDotSegments", "async schema in sync schema", "jsonPointers", "dataVar", "executeOutgoingRequestInterceptor", " validate.errors = vErrors; ", "fromNode", "assertRequestHandlerCapability", "' , dataPath: (dataPath || '') + ", "Task execution failed", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", " }; return validate;", "invalid_type", ` if (typeof item == 'string') item = '"' + item; `, " var schema", "strictCreate", "result", "$async", " !== undefined ", ") || ", "varOccurences", "protocolVersion", " + ']'", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "widgets", "widgetable", "audio", "notification", "resourceName", "translate", "不裁剪", "; var ", "path", " not found on node ", " , rootData )  ", "Synchronous parse encountered promise.", "completed", "{5}", "json-pointer", "defaultValue", "How to get APIKey and API Secret", "customRule", "queue_remaining", "\\%25|\\%(?!", "])) { ", "App ID:", "ajp", "outputs API 调用失败 - HTTP 错误，状态: {{status}}", "isArray", "Send all", "拖拽图片到此处松开完成上传", "WebkitAppearance", "String must contain ", "useCustomRule", "Workflow not found", "#/definitions/nonNegativeInteger", "Layer {0} not found", "sourceType", "Task execution failed: {{error}}", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "not", "&subfolder=", ".schema = ", "getOwnPropertyNames", "string", "Notification handler failed for ", "sdppp/broadcast", "_onrequest", "requestIdSeq", "Current layer bounds", " = validate.schema", "out", " {} ", "abort", "Store not found for current node ", "is a required property", " }   ", " , message: 'should NOT have ", "#00CC00", "onerror", " try { await ", "Array.isArray(", " } else if ( ", "以当前图层边界获取画布", "color: inherit", "errorPath", "method", "hour", "ifClause", `Get image &
Limit image boundary`, "position", "getConnectedNodeIds", "ComfyUI加载中...", "initializeConsumer", "resetRegExp", "  for (var ", "second", "setupGraphStoreSync", "resetStats", "nest", "-arab", " && Object.prototype.hasOwnProperty.call(", "exec", "posterIdentifier", "requestedSchema", "_getType", "skipOnVariables", "isOptional", "rtl", "port", " , params: { propertyName: '", "parent", `"' `, "pipe", "label", "#CCCC33", "prefix", "exactly", "addKeyword", "#/definitions/nonNegativeIntegerDefault0", "parseInt", "ComfyUI failed to load, HTTP status code: {{code}}", "removed", " = true; } else { ", "Max size (px)", "languages", "resolve", "initializeNodeStores", "arz", "trim", "extractFromKey", "Auto send disabled", " ); if (isAdditional", "log", "extendTranslation", "over", "通道连接中...", "workflow", "getConnectionCount", "pop", "isBase64url", "Sending image...", "mountTo", "usePattern", "自动获取中…", " , params: { failingKeyword: ", "isInitialized", "_parse", "description", "Unsupported upload type: {{type}}", "dataProperties", "inclusive", "_setupTimeout", "isNANOID", " = true; else if (!Array.isArray(schema", "Retry", "sdppp/streamRequest", "模型物美价廉，海量社区应用", "registerHandler", "progress", "SDPPP may not be installed or version mismatch (404)", "yrs", " = errors; ", "destroy", "prompt_ids: ", "请选择要获取的遮罩", "正在发送所有图片...", "regex", "strict", "none", "NumberFormat", "wait", "emergency", "ckb", "运行失败 - 未获取到 nodeInfoList，请先执行 getNodes()。", "getter", "tDescription", " == errors) { ", "_onresponse", "PS遮罩", " = false; else { ", "edges", "ulid", "Action handler ", "智能对象图层", "保存当前", "Uploading, if the image too large, may be lag...", "slice", "parseAsync", "accessing an object - but returnObjects options is not enabled!", "ComfyUI服务器重连中", "language", "按住 Shift 键以新文档方式导入", "minProperties", " var itemIndices = {}, item; for (;i--;) { var item = ", "PCT_ENCODED", "Selection", "ssh", "node_errors", "([01]\\d|2[0-3]):[0-5]\\d(:", "keySchema", "ZodArray", "maxValue", "setItem", "Outgoing request interceptor failed: ", "URN can not be parsed.", "_refinement", "xmn", "returnedObjectHandler", "capacity", " , schema: ", "requestsHandled", "forward", "fallback", "parentData", "comfy side transport.onerror", "%[89A-Fa-f]", "Upload from disk", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "Number must be a multiple of ", "createStreamState", '" resolves to more than one schema', ".dataPath === undefined) ", "toLoad", "新建文档", "replace", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", " === undefined || ", "找不到图层: {{0}}", "suffix", "sampling/createMessage", "stats", "Enter Google API Key", "notifications/resources/updated", "interpolation", "ComfyUI加载失败，HTTP状态码：{{code}}", "valueSchema", "pick", "defaultError", "resources/read", "getConnectionInfo", "fromCodePoint", "No images", "创建文档失败", "Invalid attempt to destructure non-iterable instance", "safeParseAsync", "_getId", "$el", "Close", "milliseconds", "connectedNodes", "retryTimeout", "No backend was added via i18next.use. Will not load resources.", "jwt", "curlayer_canvas", " self._opts.$comment(", "sdpppX2", "postProcessor", "findPath", "Processing {{processed}}/{{total}}", "~validate", "更多操作", "isURL", "Invalid discriminator value. Expected ", "obj", "int", "sendResourceUpdated", "Generation failed", "当前图层除外", "生成中", "_metaOpts", "iri", "uxp", " , message: 'should match exactly one schema in oneOf' ", "Get mask from Current Layer", "Forbidden (403)", "removeEventListener", "#33CC33", "unescapeSuffix", "loading namespace ", "ZodEffects", ".type || 'string'; if (", "base64", "days", "catchall", "images", "finite", "__nwjs", " , schema:  ", "addResourceBundle", "received", "transform", "&amp;", " ucs2length(", "stopSequence", ") { for (var ", "createErrors", "Date must be ", "lte", "#3300CC", " !== undefined) ; ", "Error", "shu", "结果获取已中止", "more than", "initializeProducer", "i18nFormat", "interceptorTimeout", " } else {  errors = ", "heartbeatTimeoutTimer", "No first related layer in {{0}}", "cacheKey", "types", "_parseSync", "hasOwnProperty", " is not a valid identifier", "从磁盘获取", "var pattern", "hasAction", "Set as Current Layer", ") - division", " character(s)", "cuid", "defaultNS", "POST", "toResolveHierarchy", "getNodes API 调用失败 - {{reason}}", "useDefaults", "         , parentSchema: validate.schema", " } ", "loaded", "syncStoresToNewConnection", " = errors;var ", "_cache", "Press Enter to open app: {{appName}}", "resources/templates/list", "curlayer", "isValidLookup", ";if (", "Timeout", "stream", "Error in broadcast handler for ", "粘贴你的模型名称", "Invalid graph definition: ", "显示预览框 ({{count}}张图片)", "Keyword ", "yih", "; if (", "long", "sdppp_workflow_alias", "_getOrReturnCtx", "disconnected", "names", "less than", "选区遮罩", "runningRequests", "signal", "))) { ", "yhd", "res", "success", " = 'then'; ", "addNamespaces", "exec_info", "reload", " , params: {} ", "undefined", "sdppp/directRequest", "protocol", "#9933CC", "uri", "interpolator", "favorites", "some", ", received ", "#CC0066", "_options", "Save current", " == ", "2025-03-26", " not found in graph definition", "connectionManager", "]; return false; ", "status API failed - {{reason}}", "(.+?)", " = ", "charCodeAt", "Failed to reboot ComfyUI", "exports", "mountedTransports", "can't resolve reference ", "_any", "timeoutId", "Select Source", "hasNotificationHandler", "Method not found", "Request interceptor failed for ", " , ", "applyPostProcessor", "Graph must have at least one node", "should NOT have additional properties", "checkDataType", "handleAsObject", "symbol", "equal", " if (errors === 0) return data;           ", "validateHandlerType", "ordinal", "Maximum total timeout exceeded", "从 选区 获取遮罩", " , parentSchema: validate.schema", "name", "en-US", "#CC3333", "meta", "openWorkflow: ", "  } ", "Defaults using", "convert widget {0} failed:", "subscribe", "设为画布", "获取 API Key", "broadcastManager", " ) : ( (", "执行成功", "writeOnly", "off", " + ", "timestamp", "resources", " (division", "cloneInstance", "silent", "_validateKeyword", "saveWorkflow", "has", "Number must be finite", "nestingOptionsSeparator", "deepPartial", "自动填入画布关闭", "Loading...", "#FFCC00", ".call(this, ", "Add slot", "Outgoing message:", "Download", "arrayKeywords", "Current Layer", "#0099FF", "removeCatch", "未找到图层 {0}", "MCP error ", "setLimit", "Uncaught error in notification handler: ", "pre", "创建图层失败", " should be boolean' ", "设置图层的文本", "Core schema meta-schema", "__internal_", "自动填入画布开启", "Exclude current layer", "run API 调用失败 - HTTP 错误，状态: {{status}}", "OpenAI API error", "toNode", "is an invalid additional property", "Request timed out", " == errors) {", "minDate", ") && (missing", "Request handler failed: ", "acx", "weeks", "invalid_intersection_types", " = false; if (e instanceof ValidationError) ", "#00CC33", "ltr", "optional", "dirty", "promise", "ref/prompt", "propsKeywords", "req_", ") break; }  ", "getHandler", "sdppp_assets", " throw new ValidationError([", " = RULES.custom['", "assertCapabilityForMethod", "forEach", "5147988Ihapuj", "setNotificationHandler", "setKey", "cleanupConnection", "海量模型，稳定服务", " = '' + ", "urn", "ignoreJSONStructure", "cleanup", "error", "ZodSymbol", "sendStreamRequestorRequest", "item", " } } ", "create", "minutes", "Not connected", "以画布边界获取当前图层", " || ! Object.prototype.hasOwnProperty.call(", "1.0.0", " via punycode: ", " = defaults[", "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", "_limitProperties", "setupNodeBindings", "_getCached", "void", "fast", "5Hmedvb", "(new RegExp(", "Mask", "Copy", '" already exists', "yud", "PS图片", " , message: 'should be ", "getTime", "Meta-schema for $data reference (JSON Schema extension proposal)", "New Layer", "errs__", " = false;  ", "创建预览文档", "updateKey", " var startErrs", " === undefined ", "maxTotalTimeout", " = true; else if (typeof ", "null", "正在创建任务...", "; else vErrors = null; } ", "Fetch current layer with primary boundary", "mesh", "send", "format", ".validate; var ", "获取结果失败: {{error}}", "exclude", "react", " if (true) { ", "=0; ", "contains", "apply", "DEBUG", "outputType", "color: ", "getTransportToNode", ".errors); errors = vErrors.length; } ", "formats", "Failed to send cancellation: ", " = equal(", ", '", "ComfyUI - {{workflowName}}", " + '", "Please select the image to get", "unknown", "getResource", "getData", "prevValid", "graph update cost ", "Click to get RunningHub APIKey", "pbu", "Unsupported image input type", " == null) ", "当前没有可用图层", " instanceof RegExp) && ", "[BroadcastManager] Error forwarding broadcast:", "#0066FF", " if (typeof itemIndices[item] == 'number') { ", "_onerror", "&#x2F;", "nonExplicitSupportedLngs", "#3366FF", "normalizeId", "outputs API 调用失败 - {{reason}}", "OpenAI - Image Edit", "encountered", "comfy-uxp", " = errors;", "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ", "var missing", "unsetOutgoingNotificationInterceptor", "上传失败，请重试", " -> ", "Invalid JSON-pointer: ", " = formats[", "keySeparator", "ZodNever", "escape", "_cachedPath", " , params: { pattern:  ", "#9900CC", "Cannot register capabilities after connecting to transport", "0?[1-9]", "ping", "comfy-user", "[\\+\\-\\.]", "clientInfo", "ZodSet", "abortAllRequests", "removeDefault", "_serverInfo", "queue", "__proto__", "missingRef", "keywords", "useRawValueToEscape", "setResolvedLanguage", "Unexpected dot segment condition", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "nsSeparator", "Server does not support tools (required for ", "formData", "Google Gemini Image Generator", "遮罩应用后未得到资源", "addMessageEventListener", "jsonrpc", "文件未找到: {{path}}", ") ) ", "setState", "createAsyncIterator", " != 'string') || ", " , params: { multipleOf: ", "transports", "humanize", "streamRequest", "_error", "Fetch current layer with current-layer boundary", "prepareLoading", "You are passing an undefined module! Please check the object you are passing to i18next.use()", "nestingSuffix", "maxItems", "Failed to fetch form data", "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", '" for languages "', "); if (", "Prompt", "removeRequestHandler", "reject", "Negative Crop", "canReachThroughConnectedNodes", "Fetch canvas with current-layer boundary", "getState", " < ", " === undefined) { ", "ZodMap", "assertNever", "handleDirectProxyForward", "removeAdditional", "#FF6633", "exclusiveMaximum", "Please select the position to send image", "loadOne", "wss", "smartobject", "URI is not a ", "nonstrict", "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "jsonStringifyReplacer", "hasPath", " == '", "finally", "isDuration", "currency", " != 'number' || ", "当前选项：画布", " ? await ", "__cycle__", "compile", "Inpaint (reverse crop)", "function", "week", "console", "missed to pass in variable ", "Set as Canvas", "getHandlerTypes", " ? ", "round", "NOT_USERINFO", "邮箱: {{email}}", "streamRequestorHandlers", "getNodeTitle", "bigint", "ZodDefault", "按回车打开应用： {{appName}}", " }  ", "closeWorkflow", "json", "exception_message", "addResource", "mode", "Number must be ", "getPathExpr", "messageQueue", 'Invalid input: must start with "', "locale", "detection", " must be number", "Select a model", "loadLanguages", "unsetNotificationHandler", "toUpperCase", "ComfyUI server reconnecting", "initializeResponseQueue", "getDefaultValueFromField", " , (dataPath || '')", " &&   Object.prototype.hasOwnProperty.call(", "addResources", " = true; if (", " , message: 'should NOT be ", "isPersisted", "\\.\\d{", "([+-]\\d{2}:?\\d{2})", "调整预览文档尺寸", "set", "table", ", validate.root.schema);", "未知错误", "#9900FF", "duration", "保存并立即执行", "exactLength", "Current selection: Layer {{layerName}}", "ZodReadonly", "_addCheck", "=== Options ===", "documentElement", "getAllReachableNodes", "coerceTypes", "content", "mergeObjectSync", "removeResourceBundle", "mcpMesh", "resources/subscribe", "Image input and prompt are required", "#3399CC", "schema $id is different from id", "augment", "Please select the mask to get", "cleanCode", "initImmediate", "integer", ".validate", "Cannot access data ", "_capabilities", "interpolate", ")) { ", ") { if (vErrors === null) vErrors = ", " not found for node ", "passthrough", "Boundary preview", "valid", "disconnect", "typeof ", `" keyword validation' `, "image", "IPV6ADDRESS", "#/definitions/schemaArray", "删除当前", "hostVersion", "hasRequestHandler", "Illegal input >= 0x80 (not a basic code point)", "Comfy Manager未安装，无法重启", "select", "read", "{0,5}", "Converting circular structure to JSON", "push", "tools/call", "match", "actionManager", " than ", "请选择要获取的图像", "assertEqual", "Values", "shift", "非法的名称: {{0}}", "from", "isCIDR", "namespaces", "kPanelBrightnessMediumGray", "roots", "\\:\\:", "` could not be extracted from all schema options", "innerType", "Invalid date", "abs", "Internal ZodObject error: invalid unknownKeys value.", "Get content of layer {{0}}", "http://json-schema.org/draft-07/schema#", " else ", "if (", "JWT", "#3399FF", "email", "concat", "shorter", "multipleOfPrecision", "default is ignored in the schema root", "上传中，如果图片过大，可能会卡顿...", "选择模型", "init", " , params: { property: '", "MethodNotFound", "requestInfo", "Local video", "transport", "maxTokens", "Aborted", "[^0-9]", "onprogress", "stack", "选择边界", "No crop", "processCode", "Desire bounds is null", "Get Image", "removeMessageEventListener", "nodeId", "isTime", "resolved promise for", " for interpolating ", "includes", " else if (", "colors", "Email address's domain name can not be converted to ASCII via punycode: ", "negative", "toLowerCase", "shared", "toHash", "Current selection: Canvas", "messagePoster", "errors", "ayn", "Paste your model name", "msec", "ZodNativeEnum", "requestInitialStateForNode", "notificationsIntercepted", "你的工作流", "firebug", "Status check aborted", "notifications/message", '" was not yet loaded', "AbortSignal is already aborted", "originalError", "#FF9900", "exclusiveMinimum", "]; } else { ", " !== undefined) {  ", "init: i18next is already initialized. You should call init just once!", "_loadingSchemas", " not in path ", "Failed to send response: ", ".errors; else vErrors = vErrors.concat(", ".validateSchema(", `" won't get resolved as namespace "`, "withTimeout", "value", "从文件打开图像", "OpenAI/Google 格式API", "selectColor", "const", "当前没有活动图层", "cache", "Use current layer", "Stop and cancel all", "multipleOf", "setter", " for (var ", " && ", "minItems", " = 0; ", "schema $id ignored", "Fetch current layer with canvas boundary", "flags", "translator", "Cycle detected: ", "buildDirectedAdjacencyList", "unknownKeys", "Upload failed, please try again", "尺寸限制 (px)", "handleIncomingRequest", "partialBundledLanguages", "more", "_pendingDebouncedNotifications", "Failed to get result: {{error}}", "INTERCEPTOR_ERROR", "hours", "urn:uuid", "', depsCount: ", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "broadcastHandlers", "allKeys", " !== parseInt(division", "default", "Jump to last", "rules", "element", "&quot;", "positive", " , params: { comparison: ", "nodeTransports", "registerStreamRequestorHandler", "getSuffixes", "getRule", "[\\:\\/\\?\\#\\[\\]\\@]", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", "critical", " var validate = ", "Back", ", exclusive: ", "ZodEnum", "++) if (equal(", "store", "Unrecognized key(s) in object: ", "removeKeyword", "]; ", "mountedEndpoints", "customRules", "cycles", "Invalid ", "then", "extend", "getAccountStatus API 调用失败 - HTTP 错误，状态: {{status}}", "color", "logging", "openWorkflow", "var customRule", "Enter a pixel value greater than 0", "; } ", "safe", "languageOnly", "#FF0000", ' !== "object")', "sort", "fromCharCode", "Task incomplete, current status: {{status}}", "_processInputParams", "请输入您的Replicate API Key", "expected", "languageUtils", "loadResources", "setComfyOrgAPIKey", "#0066CC", "Get API Key", "assistant", "Not a ZodError: ", "_instructions", "status", "_formats", "控件 {0} 转换失败：", "authInfo", "Stop", "services", "joinArrays", "currentOnly", "以主图边界获取画布", "McpError", "Discriminator property ", "#FF3333", "reference", "ZodBoolean", "留空表示不限", "5807694ubGeQQ", "图层 {{layerName}}", "暂无图片", "run API failed - nodeInfoList unavailable. Please call getNodes() first.", "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "lastIndex", `Get image &
Crop selection mask`, "resolveComponents", "#CC6633", "getValidEnumValues", "buffer", "buildAdjacencyList", " for nesting ", "assert", "nestingRegexp", " = false;for (var ", "isSupportedCode", "Current layer boundary", "changeLanguage", "Get pixel of {{0}} failed", "  errors = ", "exclIsNumber", "emit", "not_multiple_of", "hrs", "%25", "definitions", " not found for current node ", "call", " , schema: false , parentSchema: validate.schema", "addEventListener", "postMessage", "getResourceBundle", "click to restore", "same-document", ") ? ", "#3333FF", ".type", "catch", "saveMissing", " else throw new ValidationError(vErrors); ", "DateTimeFormat", "debug", "getScriptPartFromCode", "./sdppp_upload2", "#66CC33", "extensionManager", "api/view?type=", ".errors", ") {   ", " , message: 'should be equal to one of the allowed values' ", "&gt;", "lastIndexOf", "_clientCapabilities", "implementInternalAction", "getSuffix", "kind", "ZodLiteral", "No errors", "headers", '[\\"\\\\]', "###", '" as the namespace "', "request", "Enum", "510", "sendToolListChanged", "_notificationHandlers", "execution_success", "uri-reference", "newlayer_canvas", "HTTP URIs must have a host.", " if (", "isNotification", ".then", "schemaHasRulesExcept", "addRule", "store:update:", "host", "all", "选区遮罩为空", " = true; ", "reverse", "isNullable", "暂无视频", "_onclose", "isBase64", "changeTracker", "#3333CC", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "forkResourceStore", "invalid_union_discriminator", " == 'object' && !(", "Rectangle coordinates required for create action", "relative", "graph", "Layer {{0}} is not a group", `获取图像 &
限制图像范围`, "additionalProperties", "parent schema must have all required keywords: ", "rejecting language code not found in supportedLngs: ", " var async", "批次数量", "/%2F", "one", "canvas", "Failed to create document from file", "less than or equal to", "getFixedT", "precision", "find", "extra", "continueOnInterceptorError", " , params: { keyword: '", "params", "Module", "executeHandlerAsync", "ZodNumber", "serialize", "_onprogress", "readOnly", "No active layer", ".async; ", "Clear", "baseId", "nonempty", "uiWeight", "addMetaSchema", "year", "missed to resolve ", "Model", "secs", "Document {{0}} not found", "Incoming message:", ".length; ", '" (see option extendRefs)', "ZodFunction", "保存所有", "comfyAPI", "exactUsedKey", " + '\\']'", " = null;", "_refs", "Server does not support logging (required for ", "getClientCapabilities", "{2})", "pluralSeparator", "2.0", "无效边界: 左边必须小于右边，上边必须小于下边", "verbose", " , params: { missingProperty: '", "Current layer bounds only", "oneOf", ") {  for (var ", "shape", "Output to", "prd", ") continue; ", "examples", "Gateway timeout (504)", "getUsedParamsDetails", "_resetTimeout", "isIP", "Gemini 2.5 Flash Image", "ZodDiscriminatedUnion", " = true;  ", "ZodTuple", "#33CC66", "任务已取消", "debugDisableHeartbeatResponse", "请选择AI服务", "invalid_string", "externalListenMessageCallback", "选择图像来源", ".validate; } if (  ", "safeParse", "padEnd", " == 'function' ? ", "Enter your Replicate API Key", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "生成中...", "floor", "getFallbackCodes", "propertyNames", "nss", "ary", "number", "addMiddleware", ").length ", " var isAdditional", "opts", "ZodNullable", "Get selection", "reset=false but needsReset: ", " == 'object' && Array.isArray(", "#FFCC33", "mcp-mesh-router", "Current Selection", "ars", "Received host version from UXP:", "Auto fetching…", "_exclusiveLimit", "Set as Current Selection", "sdppp", "Image quality (%)", "save", "SDPPP 2.0 no longer needs this node", " = true , j; if (i > 1) { ", "不支持的上传类型：{{type}}", "returnDetails", "currentNodeId", "_meta", " var ", "{4}", "IPV4ADDRESS", "rootId", "Create document for sent images", "base64url", " = null; ", "Hold Shift for more options; Ctrl for single fetch", "Host's domain name can not be converted to ", "Current selection: Layer", ") {  ", "#66CC00", "sdppp 选中图层", "pbt", "#33CC99", "[\\uE000-\\uF8FF]", "unionErrors", ") {", "setPrototypeOf", "cardinal", "Source", "get", "AI 生成任务", "Set text to layer", " , message: 'can\\'t resolve reference ", "this", "Auto run after canvas change", "ParseError", "Store not found for ", "&#39;", "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "[\\:]", " , params: { i: i, j: j } ", "prompts", "onTimeout", "__origin", "Action ", "__DEFAULT__", "Failed to pick file. Please try again.", "#FF00CC", "2025-06-18", "Tutorial", "ucs2length", "Entire Canvas", '"object"', ".length ", "Schema ", "custom keyword definition is invalid: ", "failedLoading", "nonnegative", "\\$&", "refine", "无效操作: {{action}}", " , schema: validate.schema", "index", "Select boundary", "Action set {{0}} was not found", " if (errors === ", "compositeRule", "提示词", "lastPongReceived", "time", "_clientVersion", "文件上传失败", "empty", "validation failed", "returnObjects", "#FF33CC", ".replace(/~/g, '~0').replace(/\\//g, '~1')", 'Invalid input: must end with "', "Get layer info", "(typeof ", " && !", "status API 调用失败 - HTTP 错误，状态: {{status}}", "$schema must be a string", "skips", " = false; else {", "当前图层边界", "处理进度 {{processed}}/{{total}}", "execution_interrupted", "queues", "[^\\%]", "toJSON", "acq", "payload", "dependencies", "isObject", "detectCycles", "清除参考线框架", "ZodAny", "del", "ownProperties", "languageChanged", "other", "[j])) { ", ") vErrors.length = ", "regExpMap", " if (schema", "renderer", "tools", "remove", "createInstance", "await ", "运行了 {{duration}} 秒，{{message}}", " has duplicate value ", "minLength", " = 'else'; ", "_fragments", "任务执行失败: {{error}}", "获取图层信息", " ( ", " , data: ", "heartbeatInterval", ` + '" schema' `, "用户名: {{username}}", "sessionId", "cimode", "setWidgetValue", "ZodOptional", "Layer not found: {{0}}", "men", "indexOf", "#CCCC00", "resolveRunImages", "No limit", "properties", "isRoot", "#FF0033", "NOT_SCHEME", "handleIncomingMessage", "selection", "returnTypeError", "exclusive", "适配至选区", "{0,1}", "AI Generation Task", ".patternProperties", "unwrap", "当前选区", " properties' ", "uxpHost", "整个画布", "definition", " = true; break; }", "反向裁剪", "#6600CC", "Drag images here and release to upload", "asyncIterator", "parseMissingKeyHandler", "callValidate", "加载中...", "idx", "dataLevel", "append", "output", "getStats", "date", "secure", " !== undefined && typeof ", "tried", "storage", "Internal error", "inlineRef", "_opts", "manuallyExtractDefaults", "Create document for preview", ";  ", " , message: 'should match some schema in anyOf' ", "_errors", "keywordValidate", "catchValue", "listenMessageCallback", "; if (vErrors !== null) { if (", "{0,4}", "type", "user", "emoji", "newlayer_curlayer", "nanoid", "segment", "setupTransportHandlers", "仅当前图层范围", ", limit: ", "Layer not found {{0}}", "info", "subject", "failed parsing options string in nesting for key ", "fullPath", "refVal[", ") == -1 ", '.schemaPath = "', "getProtocol", "alwaysFormat", ") {   var err =   ", "ComfyUI loading...", "未配置上传器", "cacheUserLanguage", "skipKeywords", "Invalid action: {{action}}", "executing", "invalid_literal", " = new RegExp(", "minute", "version", "{3}", "uploadImage API 调用失败 - HTTP 错误，状态: {{status}}", "relatedRequestId", "You must pass an array of schemas to z.tuple([ ... ])", "Action {{0}} was not found", "Comfy.userId", " delete ", "登录成功", "Delete current", "object", "messageHandlers", "Node definition not found for ", "ZodBranded", "mergeObjectAsync", 'did not save key "', "#00CCCC", " ) ", "当前选项：文件", " = false , ", "contextualErrorMap", "markDisconnected", "Canvas", "var ", "valueType", "isDate", "uploadComfyImageFromUXP", "ComfyManager not found, cannot reboot", "Running", "{6}", "].propertyName = ", "Generate", "Auto-run workflow after changes...", "Clear guide frame", "jpr", "splice", " validate.errors = vErrors; return false; ", "unescapeComponent", "sdk", "test", "parse", "keyword", "length", "parentDataProperty", "{0,2}", " must be number or boolean", "_errorDataPathProperty", "translation", "服务不可用 (503)", "#CC0033", "Array must contain ", "Stop all", "notice", "addPostProcessor", "<errors; ", "validateKeyword", "pong", "++) { ", "findPathInternal", "checkState", "reloadResources", " && ( ", "return", "Import from disk", "simpleTypes", "root", "sendResourceListChanged", "lowerCaseLng", "InvalidParams", "/*# sourceURL=", " levels up, current level is ", "newdoc_canvas", " } if (", "InvalidRequest", "action", "#/definitions/simpleTypes", "keyPrefix", "图层遮罩", "Server error (500)", " is present' ", "限制图片尺寸", "Stop auto run", "Failed to request initial states after connecting to ", ") break; ", "decline", "ValidationError", "?\\:\\:", "; } catch (e) { ", "comfyAPI is not initialized, maybe comfyUI is too old", "Bounds", "pendingCount", "newlayer_selection", "Adjust input settings", "创建参考线框架", "safeValue", "Create layer failed", "fcName", "abh", "errorDataPath", "以当前图层边界获取当前图层", "zod", "skipCopy", "Import as Smart Object", "right", "origin", "peo", "openWorkflows", "never", "disable", "Not implemented (501)", "outgoingRequestInterceptors", " % 1)", "2690664BkGjLh", " === null) ", "=== 选项 ===", "Leave empty for no limit", "$ref", "elicitation/create", "$comment", " %c", "A request handler for ", "Invalid proxy forwarding: current node ", " - no connection available", "无法从文件创建文档", " var missing", " , params: { allowedValue: schema", "filename", "Cancel", "defaultVariables", ")) ", "initAsync", "unescapeFragment", "compiling", "Exclude selection", ` , message: 'should match "' + `, "[^\\%\\[\\]\\:]", "fail", "split", "aeb", " ms", " } else { ", "assertIs", "bind", "[\\-\\.\\_\\~]", "[BroadcastManager] Error forwarding ", "click", "ayp", "left", "PluralRules", "每批图像数", "notifications/prompts/list_changed", "coerceToTypes", "missingKeyNoValueFallbackToKey", "#0000CC", "Positive Crop", "RH Coins:", "getBestMatchFromCodes", "meta-schema not available", "' : '", "validate.schema", "removeMiddleware", "Unknown", "languageDetector", "returnEmptyString", ") && ", "Empty", "userDefinedNsSeparator", "greater than ", "网关超时 (504)", " = undefined; ", "pluralRulesCache", "Unable to reboot ComfyUI", "Task creation aborted", "isUUID", " var err = ", ".validate;", "toString", "); errors = vErrors.length;  for (var ", "postProcessPassResolved", "resolvedLanguage", "Unicode", "languageChanging", "else", "停止并取消全部", "handle", " != 'number') || ", "missingInterpolationHandler", "userinfo", "_path", "Create document failed", "superRefine", "fewer", "order", "#CC00CC", "Enter a quality percentage", "Uploading...", "validateStreamRequestorRequest", "isFinite", " var errs_", "Heartbeat timeout for poster ", "./api/manager/reboot", "unescapePrefix", "valueOf", "clone", "reconnected", "gte", "Client does not support elicitation (required for ", "addLookupKeys", " , validate.schema", "SDPPP 2.0 不再需要此节点", "date-time", "refs", "unrecognized_keys", "combo", "schema", "run API failed - HTTP error! status: {{status}}", " for language ", "__internal_requestInitialState_", "dir", "Server does not support sampling (required for ", "years", "maxRetries", "prompts/list", "Current option: File", ") { ", "maxReplaces", "enforceStrictCapabilities", "and", ") ) {   ", "status API failed - HTTP error! status: {{status}}", "[\\.]", "addSchema", "hasResourceBundle", "++) { var ", "implementAction", "resolveRef", "getNode", "未选择工作流", "escapeQuotes", "smaller than", "title", "Merge group failed", " characters' ", ".test(", "_getInvalidInput", "Crop by selection", "请输入您的RunningHub API Key", "getSchema", "property ", "Cloud-based model service platform", "strong", ") { errors = ", "response", "NOT_PATH", "addIssue", "%c ", " items' ", "optionsMap", "ZodString", "Selection mask", " in key: ", "_progressHandlers", "strictNumbers", "ZodPromise", ".call( ", "preprocess", "getRunningRequestsCount", "MissingRefError", "Cannot access property/index ", "maxSize", "mesh:workflow", "#0000FF", "isCUID", "setupStreamProtocolHandlers", "validateSchema", "root.refVal[0]", "No image returned", "25[0-5]", "clearItems", "OpenAI - 图片编辑", "enable", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", " = +", "spa", "under", ", rootData)  ", "detect", "当前选项：图层 {{layerName}}", "当前任务数:", "waiters", "custom", "minValue", "#FF3300", "] = ", ` , message: 'should pass "`, "notifications/cancelled", "sdppp/streamResponse", "useDefault", "common", "#CC33FF", "fallbackLng", "curr", " == 'number' ? ( (", "[i]; ", "setupAbortHandler", "MIN_SAFE_INTEGER", "timeout", "should have required property \\'", "输入图像", "无法将文件作为文档打开: {{path}}", "#99CC00", "$data", "选择素材来源", "InternalError", "notificationQueue", "async ", "outgoingNotificationInterceptors", "detail", "initialized", "file", "作为智能对象导入", "millisecond", "var division", "Please select AI service", "No Intl support, please use an Intl polyfill!", " validate.errors = null; return true; ", "too_big", " !== ", "/required", "isClone", " = !(false ", "isNaN", "/then", "How to get APIKey", "Save all", " element(s)", "ZodNull", "process", "exists", "keys", "hasDefaultValue", 'Invalid input: must include "', "#0099CC", " == 'string' && ", " , params: { passingSchemas: ", "Run", "uploadImage API failed - {{reason}}", "arb", "Invalid input", '";  ', " already exists, which would be overridden", "usedKey", "userDefinedKeySeparator", "Upload failed: ", "schemaHasRules", "Remove slot", "17487aRwCcB", "oninitialized", "newdoc", " if ( ", "使用当前图层", "; else vErrors = vErrors.concat(", '"; } ', "substr", "loopRequired", "errorMap", "loadNamespaces", "ignore", "Auto Sync: off", "UUID is not valid.", "onclose", "); for (var ", "ZodBigInt", "appendNamespaceToMissingKey", "URI can not be parsed.", "delete", "#CC00FF", " if (!", "requestId", "_requestHandlers", "Task cancel failed: {{error}}", " == 'boolean' || ", "ayh", "pattern", "defaults", "unicode", "errorsText", "hasOutgoingNotificationInterceptor", "nid", "'else'", "NOT_FRAGMENT", "done", "getAccountStatus API 调用失败 - {{reason}}", "aao", "capabilities", " === 1) ", "pga", "{0,6}", "actions", "{2}", "   var err =   ", "added", "map", "hasEdge", "invalid_arguments", "errs_", "从磁盘上传", "_limit", "图像质量 (%)", "; else if (", " , message: 'should NOT have more than ", "performWorkflowReset: ", "abortRequest", ") break; } ", "reset", "escapeValue", "resource_link", "Please login to use the plugin", "setInterval", "setDefaultNamespace", "formatArgs", "从 画布 获取遮罩", "[\\/\\?]", "supportedLngs", "It seems you are nesting recursively key: ", "pending", "regExpQueue", "schemaPath", " = vErrors[", "util", "loadSchema", "enum", "additionalItems", "RULES", "Failed to get task status", "Get image from Current Layer", "Output to:", ".length , ", "Shortcut selection feature requires login", "sampling", "forwardBroadcast", "_addSchema", "accept", "merge", "sourceCode", "_key", "Received a response for an unknown message ID: ", "join", "_requestMessageId", "hbo", "required", "run", "Fit to current layer", "toQuotedString", "interceptor_error", "iterator", "' } ", "offset", "RelativeTimeFormat", "onmessage", "setupStreamRequestHandler", "exclType", "Full Canvas", "Confirm", "masks", ".pi-sign-out", "realTransport", "backend", "_limitItems", "comfy-entry", " = false; ", "nestingPrefix", "setRequestHandler", " to ", "pluralCategories", "/else", "closeHandlers", " , message: '", "validate", "RunningHub - {{webappId}}", "saveMissingPlurals", "bbz", " / ", "以主图边界获取当前图层", "Your Workflows", "{1,4}", "请输入质量百分比", "data", "ref/resource", "url", "apc", "broadcastCurrentState", "'].definition; var ", "unknown keyword: ", " ? '", "自动取图中…", " , params: { ref: '", "parsedType", "getProperty", "_requestHandlerAbortControllers", "schemaUnknownRules", "getCurrentNodeId", "#CC3366", "2[0-4]", "Fit to selection", "resources/unsubscribe", 'unknown format "', "getNodes API 调用失败 - HTTP 错误，状态: {{status}}", "本地文件", "Error in direct request ", " , message: 'should be equal to constant' ", "logger must implement log, warn and error methods", "missingKey", " validate.errors = [", "File not found: {{path}}", "Reverse", "[\\:\\@\\/\\?]", "_cleanupTimeout", " == 'number' || ", ")) {  ", "charAt", "fragment", "updateMissing", "请输入大于 0 的像素值", "getConnectionToNodeInternal", "connected", "Required", "Content", "start", "errToObj", "任务未完成，当前状态: {{status}}", " var i = ", "https", "画布范围", "如何获取APIKey和API Secret", "getRegExp", "getNodeStore", "def", "comfy_api_key", "scheme", "markConnected", "; }   var err =   ", "userAgent", " === 'false' || ", "nodeStores", "resetTimeoutOnProgress", "style", "__connection_established", "sendPromptListChanged", "toUnicode", "正向裁剪", "Running...", "yds", "context", "nan", "'[' + ", "init: no languageDetector is used and no lng is defined", "array", ", deps: '", "heartbeatTimeout", "+Shift 调整更多选项；Ctrl 单次获取。", " if (rootData === undefined) rootData = data; ", "discriminator", "async", "pluralResolver", " var schemaExcl", "prototype", "debouncedNotificationMethods", "objectKeys", "modifying", "Boundary", "Input not instance of ", "prompts/get", "$schema", "env", "Logout", "_parseAsync", "getPath", " else { ", "objectValues", "removeNamespaces", "app", "nodeProxies", "formatLanguageCode", "getCapabilities", "simplifyPluralSuffix", "主图边界", "auto", "getPrototypeOf", "Action {{0}} 未找到", "ZodIntersection", "[vV]", "#CC33CC", "formatter", "ZodCatch", " === ", "backendConnector", "Overflow: input needs wider integers to process", "values", "addUsedSchema", "unicodeSupport", "]; var ", "[object RegExp]", "fallbackNotificationHandler", "isInteger", "Open images from file", "invalid_union", "rootData", " from id ", "_timeoutInfo", "errSchemaPath", "body", "sdppp-heartbeat", "Resize document for preview", "formatParams", "使用教程", "Auto Sync: on", "缺少主图资源", "count", "正在发送...", "race", "strictKeywords", "refinement", "exactly equal to ", "text", "hasLanguageSomeTranslations", "now", " if (! ", "cmp", " var errors = 0;     ", "setProperty", "='; ", "usedNS", "statements", "warning", "domainHost", "not-basic", "Get mask from Canvas", "#/definitions/stringArray", " === null || (", "image/png", "[i], ", "reconnecting", "load", "]); ", "workflow-run", "nodes", "$id", "localeCompare", "workflows/", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "invalid_date", "prev", "hasLoadedNamespace: i18next was not initialized", "3rdParty", " = refVal[", "after app.queuePrompt errors: ", "add", "getTransportInternal", "'/' + ", "ZodNaN", "(\\.\\d+)?", "Invalid name: {{0}}", "strip", "activeWorkflow", "正在发送图像...", "本节点默认继承:", '"failed to compile', "如何获取APIKey", "overloadTranslationOptionHandler", "tools/list", "longer", " ) || ", "_schemas", "nullish", "lng", "issues", "typ", "thisServer", "#00CCFF", "]) ", "\\' is invalid' ", "getLanguagePartFromCode", "/type", "clear", " === null || ", " = false; else if (", "close", "keyof", " if (false) { ", "contextSeparator", "failing", "ZodLazy", "aborted", "发送所有", "Select layer", "modules", "/properties", "enabled", "]; if (", "Edge references unknown source node: ", "varReplace", "mask", "Uploader not set", "#FF6600", "未授权 (401)", "endsWith", "stateUpdate", ")) { if (vErrors === null) vErrors = ", "xaa", "forwarded", "handleIncomingNotification", "Enter your RunningHub API Key", "_unknown", "hasLoadedNamespace", "keyType", "[0-5]\\d", "isOpen", "throwIfAborted", "; }", "Login Successful", "substring", ", (dataPath || '')", "elicitation", "画布边界", "extendRefs", "at least", "registerDirectRequestHandlerGeneric", "isCUID2", "logger", "getNodes API failed - HTTP error! status: {{status}}", "MissingRef", "Error compiling schema, function code:", "__esModule", "arrayToEnum", "_limitLength", "Fit to canvas", "allErrors", "heartbeatTimer", "#00CC66", "missingRefs", "properties ", "Failed to open image file: {{error}}", "stopAll", "postProcess", "refVal", "++) { vErrors[", "ZodUndefined", "[\\:\\@]", "未实现 (501)", "uuid", "cidr", "alwaysSet", "isEmoji", "isRequest", ".additionalProperties", "无法打开图像文件: {{error}}", "{0,3}", "按选区裁剪", "useColors", "key", "inlineRefs", "') ", "workflows", "assertCanSetRequestHandler", "createGlobalDispatcherForType", "false schema", " ( ( ", " || ", " = ''; ", ") { var op", ") {  var err =   ", " = errors === errs_", " , params: { type: '", "sdppp/abort", "separator", "适配至画布", " === undefined) ", "message", " else {   ", "passContext", "2024-11-05", "zero", "#33CC00", "unknownFormats", "ZodRecord", "requestHandlers", ".dataPath = (dataPath || '') + ", "isConnected", "messages", "assertNotificationCapability", "auz", "MiddlewareError", "/additionalProperties", " { keyword: '", "cacheInBuiltFormats", "items", "unsetRequestHandler", " , message: 'should NOT be valid' ", "/additionalItems", "Layer {{layerName}}", "Input Setting", "isULID", "day", "Edge references unknown target node: ", "Local file", "precheck", "defineProperty", "NOT_HOST", "dev", "use", "#CC6600", " break; ", "当前图层", "; else vErrors = null; }", "', missingProperty: '", "dataPathArr", "maxLength", "getNeighbors", "uniqueItems", "Waiting in queue", "获取账户信息失败", " ) { ", "_def", "startsWith", "checks", "external", "connect", "addFormat", "#33CCFF", "isInt", "Node ", "formErrors", "^\\[?(", " in ", "isDatetime", "mailto", "observers", "syncWorkflows", "运行中...", "prs", " !== undefined)", "isTransportReady", "自动同步: 开启", " = typeof ", " var vErrors = null; ", "#0033FF", "macro", "not_finite", "基础 URL", "validation", "workflowManager", "elicitInput", "getClientVersion", "#FF33FF", "resourceStore", "partial", "startHeartbeat", "Failed to request initial state for ", "coerce", "inline", "No linked layer for {{0}}", "__proxy_forward", "invalid_enum_value", "[A-Za-z]", "resolvedOptions", "Channel connecting...", "_compile", "missingSchema", "Waiting for image upload...", "copy", " , message: 'should have ", "errorHandlers", '$ref: keywords ignored in schema at path "', "joinValues", "Failed to check workflow changeTracker state:", "registerProxyForwardHandler", "停止全部", "broadcast", "argumentsError", "_transport", "escapeFragment", "openWorkflowJSON", "Intersect or scaledDesire is null", "reduce", "图层 {{0}} 不是一个组", "getDefaultValuesFromSchema", "getKeyword", "Validation failed but no issues detected.", "sdppp_widgetable_title", "#CC0000", "notificationHandlers", "logout", "获取任务状态失败", "不支持非文本图层: {{0}}", "选择文件失败，请重试", " === 0 || ", "skipInterpolation", " } }  ", "Upload aborted", "Document {0} not found", "setOutgoingNotificationInterceptor", "sourceNodeId", ")) {  var err =   ", "notifications/tools/list_changed", "isTop", "roots/list", "default is ignored for: ", "api", "  )  ", "float", "interpolationkey", 'id "', "greater than or equal to ", ".length == 0) {", "executed", "; else vErrors = null; }  ", "listWorkflows", "移除槽位", "#6633CC", "&lt;", " === '' || ", "hasOutgoingRequestInterceptor", "HeartbeatTimeoutError", "使用整个画布", "ZodDate", "输出至：", "]] !== undefined ", "contentMediaType", "put", "lngs", "Connect", "invalid-input", "constructor", "点此获取RunningHub APIKey", "loaded namespace ", "组 {{0}} 中没有第一个相关图层", "Plugin window focused required to use keyboard shortcut", "lazycreate", "graphInstance", "合并组失败", " = false; for (var ", "Layer mask", "_oninitialize", "regexp", "abv", " || Object.keys(", "token", "ActionSet {{0}} 未找到", "Auto repick from PS", "getNodeIds", "' + ", " , message: 'should contain a valid item' ", "getTransport", "prp", "+Alt 反转遮罩", " , message: 'property name \\'", "|0?0?", "query", "readingCalls", "assign", "_responseHandlers", "isLanguageChangingTo", "curlayer_selection", "node", "fullFilename", "max", "调整输入设置", "too_small", "Select AI Service Provider", "本地图片包", "failed", "新图层", "implements", "pickLocalFile", "Generating...", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "Server does not support prompts (required for ", "nullable", "setupStreamResponseHandler", "Google Gemini - 图片生成", "getDataByLanguage", "prepend", "生成失败", "Remote", "finished", "describe", "status API 调用失败 - {{reason}}", "mergeArray", "#0033CC", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", `获取图像 &
裁剪选区遮罩`, "level", "[object Number]", "_compilations", "#3300FF", " is loaded but ", "Failed to fetch account status", "getItem", "Outgoing notification interceptor failed: ", "'then'", "Get mask from Selection", "Guest login successful", "(?:", "AI使用的区域与最大尺寸控制", " = [", "diff", " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ", "activeState", "flatten", "Select Image Source", "#FF9933", "ZodObject", " : ", "~standard", " , message: 'boolean schema is false' ", "Result fetch aborted", "minimum", "刷新工作流列表", "getDefinition", "schemas", " throw new ValidationError(vErrors); ", "19640OFkTGq", "Server does not support resources (required for ", "loadGraphData", "usedParams", "创建操作需要矩形坐标", '$ref: validation keywords used in schema at path "', "No store found for node ", "++) { if (", "patternProperties", "#CC9900", " }; return validate; ", "channel", "callback", "./api/userdata/workflows%2F.index.json", "getImage", "minSize", "[^]", "invalid_return_type", " when property ", "2024-10-07", "Gemini 2.5 Flash 图像", "[0-9]", "setNodeTitle", "brand", "Invalid forward path for proxy action", "作为新文档导入", "size", "RequestTimeout", "subfolder", "entries", "zh-CN", "Empty selection mask", "排队等待", " reference.", "smaller than or equal to", "Sending...", "min", "actionHandlers", "setOutgoingRequestInterceptor", "exact", "Received a progress notification for an unknown token: ", "options", "post", "./sdppp-custom.js", "resource", "readonly", "source", "execution_start", "Success", "self", "Model with affordable price, abundant community applications", ")' returned an object instead of string.", "ESCAPE", "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "执行失败", "full", "absolutePath", "Service unavailable (503)", " } else {  for (var ", "pathname", " = errors; var ", "responseSchema", "Send to PS", "datetime", "  var err =   ", "获取像素失败: {{0}}", " != 'boolean') ", "1157240jvHhtl"];
  return qx = function() {
    return o;
  }, qx();
}
var jt, Ka;
function Oc() {
  const o = r;
  if (Ka) return jt;
  Ka = 1;
  var x = Z2(), t = cr(), s = B2(), e = cn(), a = un(), n = K2(), i = hc(), c = pc(), u = Be();
  jt = m, m[o(2250)].validate = v, m[o(2250)][o(973)] = S, m.prototype[o(1915)] = P, m.prototype[o(1396)] = F, m[o(2250)][o(1958)] = A, m[o(2250)].getSchema = E, m[o(2250)].removeSchema = j, m.prototype[o(2512)] = u0, m[o(2250)][o(2070)] = c0, m[o(2250)][o(2125)] = N, m[o(2250)]._compile = q, m.prototype.compileAsync = mc();
  var d = Ic();
  m.prototype.addKeyword = d.add, m[o(2250)][o(2571)] = d[o(1502)], m[o(2250)][o(1221)] = d[o(1581)], m.prototype.validateKeyword = d[o(2162)];
  var l = ur();
  m[o(1769)] = l.Validation, m[o(1951)] = l[o(2415)], m.$dataMetaSchema = c;
  var f = "http://json-schema.org/draft-07/schema", b = [o(953), o(623), o(1033), o(2785)], h = [o(2381)];
  function m(O) {
    const T = o;
    if (!(this instanceof m)) return new m(O);
    O = this[T(1644)] = u[T(2554)](O) || {}, N0(this), this[T(2357)] = {}, this[T(1411)] = {}, this._fragments = {}, this[T(1255)] = n(O.format), this[T(629)] = O[T(1169)] || new s(), this._loadingSchemas = {}, this[T(2678)] = [], this[T(2117)] = i(), this[T(542)] = U(O), O.loopRequired = O.loopRequired || 1 / 0, O[T(1782)] == "property" && (O[T(1730)] = !0), O[T(1387)] === void 0 && (O[T(1387)] = a), this[T(566)] = M0(this), O[T(853)] && f0(this), O[T(910)] && k0(this), l0(this), typeof O.meta == T(1694) && this.addMetaSchema(O[T(710)]), O[T(2662)] && this[T(414)]("nullable", { metaSchema: { type: T(2788) } }), o0(this);
  }
  function v(O, T) {
    const L = o;
    var J;
    if (typeof O == L(360)) {
      if (J = this.getSchema(O), !J) throw new Error('no schema with key or ref "' + O + '"');
    } else {
      var X = this[L(2125)](O);
      J = X[L(2162)] || this[L(2551)](X);
    }
    var W = J(T);
    return J[L(2905)] !== !0 && (this[L(1137)] = J[L(1137)]), W;
  }
  function S(O, T) {
    const L = o;
    var J = this[L(2125)](O, void 0, T);
    return J[L(2162)] || this[L(2551)](J);
  }
  function P(O, T, L, J) {
    const X = o;
    if (Array[X(344)](O)) {
      for (var W = 0; W < O[X(1726)]; W++) this.addSchema(O[W], void 0, L, J);
      return this;
    }
    var Q = this._getId(O);
    if (Q !== void 0 && typeof Q != "string") throw new Error("schema id must be string");
    return T = t.normalizeId(T || Q), y0(this, T), this[X(2357)][T] = this[X(2125)](O, L, J, !0), this;
  }
  function F(O, T, L) {
    return this.addSchema(O, T, L, !0), this;
  }
  function A(O, T) {
    const L = o;
    var J = O[L(2257)];
    if (J !== void 0 && typeof J != L(360)) throw new Error(L(1555));
    if (J = J || this[L(1644)].defaultMeta || R(this), !J) return this[L(2413)][L(2850)](L(1841)), this[L(1137)] = null, !0;
    var X = this[L(2162)](J, O);
    if (!X && T) {
      var W = "schema is invalid: " + this[L(2070)]();
      if (this[L(1644)][L(1958)] == L(429)) this.logger.error(W);
      else throw new Error(W);
    }
    return X;
  }
  function R(O) {
    const T = o;
    var L = O[T(1644)][T(710)];
    return O._opts[T(2851)] = typeof L == T(1694) ? O[T(542)](L) || L : O[T(1931)](f) ? f : void 0, O[T(1644)][T(2851)];
  }
  function E(O) {
    const T = o;
    var L = D(this, O);
    switch (typeof L) {
      case T(1694):
        return L[T(2162)] || this[T(2551)](L);
      case T(360):
        return this[T(1931)](L);
      case T(662):
        return C(this, O);
    }
  }
  function C(O, T) {
    const L = o;
    var J = t[L(1898)].call(O, { schema: {} }, T);
    if (J) {
      var X = J[L(1898)], W = J[L(1749)], Q = J[L(1393)], i0 = x[L(1297)](O, X, W, void 0, Q);
      return O[L(1588)][T] = new e({ ref: T, fragment: !0, schema: X, root: W, baseId: Q, validate: i0 }), i0;
    }
  }
  function D(O, T) {
    const L = o;
    return T = t[L(878)](T), O._schemas[T] || O[L(1411)][T] || O[L(1588)][T];
  }
  function j(O) {
    const T = o;
    if (O instanceof RegExp) return M(this, this[T(2357)], O), M(this, this[T(1411)], O), this;
    switch (typeof O) {
      case T(662):
        return M(this, this[T(2357)]), M(this, this[T(1411)]), this[T(629)][T(2368)](), this;
      case T(360):
        var L = D(this, O);
        return L && this[T(629)][T(1571)](L[T(607)]), delete this[T(2357)][O], delete this._refs[O], this;
      case T(1694):
        var J = this[T(1644)][T(1387)], X = J ? J(O) : O;
        this[T(629)][T(1571)](X);
        var W = this[T(542)](O);
        W && (W = t.normalizeId(W), delete this._schemas[W], delete this[T(1411)][W]);
    }
    return this;
  }
  function M(O, T, L) {
    const J = o;
    for (var X in T) {
      var W = T[X];
      !W[J(710)] && (!L || L[J(1723)](X)) && (O[J(629)][J(1571)](W[J(607)]), delete T[X]);
    }
  }
  function N(O, T, L, J) {
    const X = o;
    if (typeof O != X(1694) && typeof O != X(2788)) throw new Error("schema should be object or boolean");
    var W = this[X(1644)][X(1387)], Q = W ? W(O) : O, i0 = this[X(629)][X(1502)](Q);
    if (i0) return i0;
    J = J || this[X(1644)][X(2283)] !== !1;
    var s0 = t[X(878)](this[X(542)](O));
    s0 && J && y0(this, s0);
    var t0 = this._opts[X(1958)] !== !1 && !T, L0;
    t0 && !(L0 = s0 && s0 == t[X(878)](O.$schema)) && this[X(1958)](O, !0);
    var A0 = t[X(2834)][X(1297)](this, O), U0 = new e({ id: s0, schema: O, localRefs: A0, cacheKey: Q, meta: L });
    return s0[0] != "#" && J && (this._refs[s0] = U0), this[X(629)][X(2613)](Q, U0), t0 && L0 && this[X(1958)](O, !0), U0;
  }
  function q(O, T) {
    const L = o;
    if (O[L(1816)])
      return O[L(2162)] = W, W[L(1898)] = O[L(1898)], W.errors = null, W[L(1749)] = T || W, O[L(1898)].$async === !0 && (W.$async = !0), W;
    O[L(1816)] = !0;
    var J;
    O[L(710)] && (J = this._opts, this[L(1644)] = this._metaOpts);
    var X;
    try {
      X = x.call(this, O[L(1898)], T, O.localRefs);
    } catch (Q) {
      throw delete O[L(2162)], Q;
    } finally {
      O[L(1816)] = !1, O[L(710)] && (this[L(1644)] = J);
    }
    return O.validate = X, O.refs = X[L(1895)], O[L(2429)] = X[L(2429)], O.root = X[L(1749)], X;
    function W() {
      const Q = L;
      var i0 = O[Q(2162)], s0 = i0[Q(847)](this, arguments);
      return W[Q(1137)] = i0[Q(1137)], s0;
    }
  }
  function U(O) {
    const T = o;
    switch (O.schemaId) {
      case T(2271):
        return G;
      case "id":
        return $;
      default:
        return V;
    }
  }
  function $(O) {
    const T = o;
    return O[T(2331)] && this[T(2413)][T(2850)](T(1178), O[T(2331)]), O.id;
  }
  function V(O) {
    const T = o;
    return O.id && this[T(2413)][T(2850)]("schema id ignored", O.id), O[T(2331)];
  }
  function G(O) {
    const T = o;
    if (O[T(2331)] && O.id && O[T(2331)] != O.id) throw new Error(T(1041));
    return O[T(2331)] || O.id;
  }
  function c0(O, T) {
    const L = o;
    if (O = O || this[L(1137)], !O) return L(1327);
    T = T || {};
    for (var J = T.separator === void 0 ? ", " : T[L(2459)], X = T.dataVar === void 0 ? L(2171) : T[L(2891)], W = "", Q = 0; Q < O[L(1726)]; Q++) {
      var i0 = O[Q];
      i0 && (W += X + i0.dataPath + " " + i0.message + J);
    }
    return W.slice(0, -J[L(1726)]);
  }
  function u0(O, T) {
    const L = o;
    return typeof T == L(360) && (T = new RegExp(T)), this[L(1255)][O] = T, this;
  }
  function l0(O) {
    const T = o;
    var L;
    if (O[T(1644)][T(1995)] && (L = Ac, O[T(1396)](L, L.$id, !0)), O[T(1644)][T(710)] !== !1) {
      var J = ln;
      O[T(1644)].$data && (J = c(J, h)), O[T(1396)](J, f, !0), O[T(1411)][T(2824)] = f;
    }
  }
  function o0(O) {
    const T = o;
    var L = O[T(1644)][T(2704)];
    if (L)
      if (Array[T(344)](L)) O[T(1915)](L);
      else
        for (var J in L) O.addSchema(L[J], J);
  }
  function f0(O) {
    const T = o;
    for (var L in O[T(1644)][T(853)]) {
      var J = O[T(1644)][T(853)][L];
      O.addFormat(L, J);
    }
  }
  function k0(O) {
    const T = o;
    for (var L in O[T(1644)][T(910)]) {
      var J = O._opts.keywords[L];
      O[T(414)](L, J);
    }
  }
  function y0(O, T) {
    const L = o;
    if (O._schemas[T] || O[L(1411)][T]) throw new Error('schema with key or id "' + T + L(818));
  }
  function M0(O) {
    const T = o;
    for (var L = u[T(2554)](O[T(1644)]), J = 0; J < b[T(1726)]; J++) delete L[b[J]];
    return L;
  }
  function N0(O) {
    const T = o;
    var L = O[T(1644)].logger;
    if (L === !1) O[T(2413)] = { log: J0, warn: J0, error: J0 };
    else {
      if (L === void 0 && (L = console), !(typeof L == T(1694) && L[T(429)] && L[T(2850)] && L[T(795)])) throw new Error(T(2195));
      O.logger = L;
    }
  }
  function J0() {
  }
  return jt;
}
var Dc = Oc();
const jc = Ms(Dc);
class Mc extends $2 {
  constructor(x, t) {
    const s = r;
    var e;
    super(t), this._serverInfo = x, this._capabilities = (e = t == null ? void 0 : t[s(2078)]) !== null && e !== void 0 ? e : {}, this[s(1253)] = t == null ? void 0 : t.instructions, this[s(2156)](Js, (a) => this[s(2627)](a)), this[s(787)](Qs, () => {
      const a = s;
      var n;
      return (n = this[a(2041)]) === null || n === void 0 ? void 0 : n[a(1297)](this);
    });
  }
  registerCapabilities(x) {
    const t = r;
    if (this[t(1111)]) throw new Error(t(897));
    this[t(1049)] = H2(this[t(1049)], x);
  }
  assertCapabilityForMethod(x) {
    const t = r;
    var s, e, a;
    switch (x) {
      case t(526):
        if (!(!((s = this[t(1322)]) === null || s === void 0) && s[t(2123)])) throw new Error("Client does not support sampling (required for " + x + ")");
        break;
      case t(1801):
        if (!(!((e = this[t(1322)]) === null || e === void 0) && e[t(2407)])) throw new Error(t(1890) + x + ")");
        break;
      case t(2590):
        if (!(!((a = this._clientCapabilities) === null || a === void 0) && a[t(1086)])) throw new Error("Client does not support listing roots (required for " + x + ")");
        break;
    }
  }
  [r(2474)](x) {
    const t = r;
    switch (x) {
      case t(1147):
        if (!this._capabilities[t(1231)]) throw new Error(t(1412) + x + ")");
        break;
      case t(529):
      case t(2779):
        if (!this._capabilities[t(725)]) throw new Error("Server does not support notifying about resources (required for " + x + ")");
        break;
      case t(2588):
        if (!this[t(1049)].tools) throw new Error("Server does not support notifying of tool list changes (required for " + x + ")");
        break;
      case t(1834):
        if (!this[t(1049)].prompts) throw new Error("Server does not support notifying of prompt list changes (required for " + x + ")");
        break;
    }
  }
  [r(2895)](x) {
    const t = r;
    switch (x) {
      case t(526):
        if (!this[t(1049)][t(2123)]) throw new Error(t(1903) + x + ")");
        break;
      case t(2842):
        if (!this[t(1049)][t(1231)]) throw new Error("Server does not support logging (required for " + x + ")");
        break;
      case t(2256):
      case t(1906):
        if (!this[t(1049)][t(1514)]) throw new Error(t(2661) + x + ")");
        break;
      case "resources/list":
      case t(631):
      case t(535):
        if (!this[t(1049)][t(725)]) throw new Error(t(2707) + x + ")");
        break;
      case t(1073):
      case t(2354):
        if (!this[t(1049)][t(1580)]) throw new Error(t(916) + x + ")");
        break;
    }
  }
  async [r(2627)](x) {
    const t = r, s = x[t(1383)][t(2909)];
    return this._clientCapabilities = x[t(1383)][t(2078)], this[t(1543)] = x.params[t(902)], { protocolVersion: Mi[t(1127)](s) ? s : Us, capabilities: this[t(2268)](), serverInfo: this[t(906)], ...this[t(1253)] && { instructions: this[t(1253)] } };
  }
  [r(1413)]() {
    return this[r(1322)];
  }
  [r(2537)]() {
    return this[r(1543)];
  }
  [r(2268)]() {
    return this[r(1049)];
  }
  async [r(899)]() {
    return this.request({ method: "ping" }, Xt);
  }
  async createMessage(x, t) {
    const s = r;
    return this[s(1332)]({ method: s(526), params: x }, sn, t);
  }
  async [r(2536)](x, t) {
    const s = r, e = await this[s(1332)]({ method: s(1801), params: x }, nn, t);
    if (e[s(1758)] === "accept" && e[s(1034)]) try {
      const a = new jc(), n = a[s(973)](x[s(400)]);
      if (!n(e[s(1034)])) throw new Ae(ye[s(1752)], "Elicitation response content does not match requested schema: " + a[s(2070)](n[s(1137)]));
    } catch (a) {
      throw a instanceof Ae ? a : new Ae(ye.InternalError, "Error validating elicitation response: " + a);
    }
    return e;
  }
  async [r(2865)](x, t) {
    const s = r;
    return this[s(1332)]({ method: s(2590), params: x }, on, t);
  }
  async sendLoggingMessage(x) {
    const t = r;
    return this[t(2915)]({ method: t(1147), params: x });
  }
  async [r(562)](x) {
    const t = r;
    return this[t(2915)]({ method: t(529), params: x });
  }
  async [r(1750)]() {
    const x = r;
    return this.notification({ method: x(2779) });
  }
  async [r(1335)]() {
    const x = r;
    return this[x(2915)]({ method: x(2588) });
  }
  async [r(2232)]() {
    const x = r;
    return this.notification({ method: x(1834) });
  }
}
class Lc extends Error {
  constructor(x, t) {
    const s = r;
    super(s(1883) + x + " after " + t + "ms"), this[s(707)] = s(2607);
  }
}
const px = /* @__PURE__ */ new Map();
class $c {
  constructor(x) {
    const t = r;
    if (this[t(998)] = [], this.lastPongReceived = Date[t(2310)](), px.has(x[t(399)])) {
      const s = px[t(1502)](x[t(399)]);
      s && s[t(2371)]();
    }
    this.posterIdentifier = x[t(399)], this[t(1136)] = x[t(1136)], this[t(920)] = x.addMessageEventListener, this.removeMessageEventListener = x[t(1122)], this[t(1593)] = x[t(1593)] ?? 5e3, this[t(2243)] = x[t(2243)] ?? 5e3, this[t(1438)] = x.debugDisableHeartbeatResponse ?? !1, px[t(1019)](this[t(399)], this), this[t(1652)] = this.listenMessageCallback[t(1826)](this), this[t(1441)] = this[t(920)](this.listenMessageCallback);
  }
  [r(1652)](x) {
    const t = r;
    if (x.posterIdentifier === this[t(399)]) {
      if (x[t(2717)] === t(2296)) {
        x[t(1655)] === "ping" && !this[t(1438)] ? this[t(1136)]({ channel: t(2296), posterIdentifier: this[t(399)], type: t(1740), timestamp: x[t(724)] }) : x[t(1655)] === t(1740) && (this[t(1541)] = Date[t(2310)](), this[t(605)] && (clearTimeout(this.heartbeatTimeoutTimer), this.heartbeatTimeoutTimer = void 0));
        return;
      }
      x[t(2717)] === t(1472) && (this[t(2143)] && "payload" in x ? this[t(2143)](x[t(1565)]) : t(1565) in x && this[t(998)][t(1072)](x[t(1565)]));
    }
  }
  async [r(2212)]() {
    const x = r;
    for (; this[x(998)].length > 0; ) {
      const t = this[x(998)].shift();
      t && this[x(2143)] && this[x(2143)](t);
    }
    this[x(2541)]();
  }
  startHeartbeat() {
    const x = r;
    this[x(2422)] = setInterval(() => {
      const t = x, s = Date[t(2310)]();
      this[t(1136)]({ channel: t(2296), posterIdentifier: this[t(399)], type: "ping", timestamp: s }), this[t(605)] = setTimeout(() => {
        const e = t, a = new Lc(this[e(399)], this[e(2243)]);
        this.onerror && this[e(375)](a);
      }, this[t(2243)]);
    }, this[x(1593)]);
  }
  async [r(838)](x, t) {
    const s = r;
    this[s(1136)]({ channel: "sdppp", posterIdentifier: this[s(399)], payload: x });
  }
  async close() {
    const x = r;
    this[x(2422)] && (clearInterval(this[x(2422)]), this[x(2422)] = void 0), this[x(605)] && (clearTimeout(this[x(605)]), this[x(605)] = void 0), px[x(2059)](this[x(399)]), this[x(1122)](this[x(1441)]);
  }
}
const Hc = ox[r(1228)](r(837));
async function fn() {
  const o = r;
  if (!window[o(1621)]) return;
  const x = new $c({ posterIdentifier: "comfy-uxp", messagePoster: (e) => {
    const a = o;
    window.uxpHost[a(1300)](e, "*");
  }, addMessageEventListener: (e) => {
    const a = o, n = (i) => {
      e(i.data);
    };
    return window[a(1299)]("message", n), n;
  }, removeMessageEventListener: (e) => {
    window[o(572)]("message", e);
  } });
  x[o(375)] = (e) => {
    Hc(o(511), e);
  };
  const t = new Mc({ name: o(882), version: o(805) }, {}), s = new vo(t);
  return await s[o(2511)](x), window.uxpHost[o(1300)]({ channel: o(1465), meshName: o(2820), action: o(2511), version: o(1334) }, "*"), await R0[o(2511)]("uxp", s);
}
const zc = Object[r(2802)](Object.defineProperty({ __proto__: null, connectUXP: fn, mcpMesh: R0 }, Symbol.toStringTag, { value: r(1384) }));
function hn(o) {
  const x = r, t = q0[x(2535)] || q0[x(1315)][x(433)], s = t.activeWorkflow;
  if (o && o[x(2001)] && o[x(2001)].id !== s.activeState.id) return;
  const e = R0.store[x(947)]().widgetableStructure, a = Jt(q0[x(1364)], s);
  mn(a, e) && R0.store.setState({ widgetableStructure: a }), R0[x(1219)][x(924)]({ widgetableValues: Nx(q0[x(1364)]) });
}
Oe[r(1299)]("graphChanged", hn), Oe[r(1299)]("executed", () => {
  const o = r;
  R0.store[o(924)]({ widgetableValues: Nx(q0[o(1364)]) });
});
let _a = 0, Ga = !0, Ja = "";
function pn() {
  const o = r;
  requestAnimationFrame(pn);
  const x = q0[o(2535)] || q0[o(1315)].workflow, t = x.activeWorkflow, s = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[o(2920)]) || "", a = (t == null ? void 0 : t[o(1015)]) || !0;
  if (s === _a && e === Ja && a === Ga) return;
  const n = Date.now();
  _a = s, Ja = e, Ga = a;
  const i = Jt(q0[o(1364)], t), c = Nx(q0[o(1364)]);
  R0[o(1219)][o(924)]({ widgetableStructure: i, widgetableValues: c }), console[o(429)](o(864) + (Date.now() - n) + "ms"), setTimeout(() => {
    const u = o;
    if (t !== x[u(2348)]) return;
    const d = Jt(q0.graph, t), l = Nx(q0[u(1364)]);
    mn(d, i) && R0[u(1219)].setState({ widgetableStructure: d }), R0.store.setState({ widgetableValues: l });
  }, 800);
}
requestAnimationFrame(pn);
function mn(o, x) {
  const t = r;
  return o[t(2860)].length !== x[t(2860)].length || JSON[t(2848)](o[t(2860)]) !== JSON.stringify(x[t(2860)]) || JSON[t(2848)](o[t(2330)]) !== JSON[t(2848)](x.nodes);
}
let Qa = !1;
async function Uc() {
  const o = r;
  if (Qa) return Promise.resolve();
  Oe[o(1656)] && R0[o(1219)].setState({ comfyUserToken: Oe[o(1656)] }), Qa = !0;
}
ox[r(1228)](r(2153));
async function Vc(o, x, t) {
  const s = r;
  x[s(1299)](s(455), ({ detail: n }) => {
    const i = s;
    if (!n) return;
    let c = 0, u = 0;
    !isNaN(n.value / n[i(2650)]) && (c = Math.round(n[i(1163)] / n.max * 100));
    const d = n[i(2648)], l = graph.nodes[i(1379)]((f) => f.id == d);
    if (l && l.order) {
      const f = 100 / graph[i(2330)].length;
      u = Math[i(982)](l[i(1876)] * f) + (c ? c / 100 * f : 0);
    }
    R0[i(1219)][i(924)]({ progress: c, graphProgress: u });
  }), x[s(1299)](s(1254), (n) => {
    var c;
    const i = s;
    (c = n[i(2001)]) != null && c[i(659)] && R0[i(1219)].setState({ queueSize: n[i(2001)][i(659)][i(338)] });
  }), x[s(1299)]("execution_error", ({ detail: n }) => {
    const i = s;
    if (R0[i(1219)][i(924)]({ executingNodeTitle: "", executingNodeID: "", lastError: n[i(993)] }), n[i(2864)]) {
      const c = o[i(1364)].nodes[i(1379)]((u) => u.id == n.node_id);
      R0[i(1219)][i(924)]({ widgetableErrors: { [n[i(2864)]]: "[" + ((c == null ? void 0 : c.title) || n[i(2864)]) + "]" + n[i(993)] } });
    }
  }), x.addEventListener(s(1680), (n) => {
    const i = s, c = n[i(2001)], u = graph[i(2330)][i(1379)]((d) => d.id == c);
    if (u) {
      const d = 100 / graph[i(2330)][i(1726)];
      R0[i(1219)][i(924)]({ executingNodeTitle: u[i(1924)], executingNodeID: u.id, graphProgress: Math.round(u.order * d) });
    }
  }), x.addEventListener(s(1560), () => {
    const n = s;
    R0.store[n(924)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x.addEventListener(s(2753), ({ detail: n }) => {
    const i = s;
    R0[i(1219)][i(924)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date[i(2310)]() });
  });
  const e = /* @__PURE__ */ new Map();
  x[s(1299)](s(1337), (n) => {
    const i = s;
    R0[i(1219)][i(924)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e.get(n[i(2001)][i(2855)]) || [])[i(2086)]((u) => ({ url: u, thumbnail: u }));
    Oi(n[i(2001)][i(2855)], c), e.delete(n[i(2001)][i(2855)]);
  }), x[s(1299)](s(2599), (n) => {
    const i = s, c = e.get(n[i(2001)][i(2855)]) || [];
    n[i(2001)][i(1635)] && Array[i(344)](n[i(2001)].output[i(581)]) && n[i(2001)][i(1635)][i(581)][i(1726)] > 0 && c[i(1072)](...n[i(2001)].output[i(581)][i(2783)]((u) => u.type == i(1635)).map((u) => {
      const d = i;
      return location[d(1788)] + location[d(2765)] + d(1316) + u[d(1655)] + "&filename=" + encodeURIComponent(u.filename) + (u[d(2734)] ? d(357) + encodeURIComponent(u[d(2734)]) : "");
    })), n[i(2001)][i(1635)] && Array[i(344)](n[i(2001)].output[i(781)]) && n[i(2001)][i(1635)][i(781)][i(1726)] > 0 && c[i(1072)](...n[i(2001)][i(1635)][i(781)][i(2086)]((u) => {
      const d = i;
      return location[d(1788)] + location[d(2765)] + "sd-ppp-static/sdppp_images/" + encodeURIComponent(u);
    })), e.set(n[i(2001)][i(2855)], c);
  });
  let a = null;
  x[s(1299)](s(2326), (n) => {
    a = setTimeout(() => {
      const i = B;
      R0.store[i(924)]({ comfyWSState: i(2326) });
    }, 1e3);
  }), x.addEventListener(s(1888), (n) => {
    const i = s;
    R0[i(1219)][i(924)]({ comfyWSState: i(2209) }), clearTimeout(a);
  });
}
let Mt = [];
(async function() {
  var x, t, s, e, a, n;
  const o = r;
  if (!(typeof gradioApp < "u")) {
    try {
      const i = (t = (x = window[o(1407)]) == null ? void 0 : x[o(2265)]) == null ? void 0 : t[o(2265)], c = (e = (s = window[o(1407)]) == null ? void 0 : s.ui) == null ? void 0 : e[o(543)], u = (n = (a = window.comfyAPI) == null ? void 0 : a[o(2592)]) == null ? void 0 : n.api;
      if (!i || !u || !c) throw new Error(o(1772));
      await Uc(), await fn(), await Vc(i, u, c), import(o(2749)).then((d) => {
        d[o(1200)](ex, 2);
      });
    } catch (i) {
      Mt.push(i[o(1116)] || i[o(2462)] || i);
    }
    await new Promise((i) => setTimeout(i, 2e3)), Mt[o(1726)] && console[o(795)](Mt[0]);
  }
})();
