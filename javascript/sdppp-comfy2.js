var Fn = Object.defineProperty;
var Nn = (i, x, t) => x in i ? Fn(i, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[x] = t;
var h0 = (i, x, t) => Nn(i, typeof x != "symbol" ? x + "" : x, t);
const r = B;
(function(i, x) {
  const t = B, a = i();
  for (; ; )
    try {
      if (-parseInt(t(2499)) / 1 + parseInt(t(769)) / 2 * (-parseInt(t(2283)) / 3) + -parseInt(t(1473)) / 4 + parseInt(t(2106)) / 5 + parseInt(t(2474)) / 6 + parseInt(t(1130)) / 7 * (parseInt(t(1622)) / 8) + -parseInt(t(361)) / 9 * (-parseInt(t(533)) / 10) === x) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Fx, 566835);
const F0 = window.comfyAPI[r(2144)][r(2144)];
window[r(1908)].ui[r(2611)];
const Oe = window[r(1908)][r(1836)][r(1836)];
var Xa;
class qn {
  constructor(x) {
    h0(this, Xa);
    const t = r;
    this.definition = x;
    const a = this[t(1485)]();
    if (!a[t(481)]) throw new Error(t(544) + a.errors[t(1804)](", "));
  }
  validate() {
    const x = r, t = [];
    (!this[x(2321)][x(740)] || Object[x(1574)](this[x(2321)][x(740)])[x(520)] === 0) && t.push(x(1204));
    for (const [e, s] of this[x(2321)].edges)
      !this.definition[x(740)][e] && t.push(x(2206) + e), !this[x(2321)][x(740)][s] && t[x(1131)]("Edge references unknown target node: " + s);
    const a = this[x(1654)]();
    return !a.valid && t[x(1131)](...a.errors), { valid: t[x(520)] === 0, errors: t };
  }
  [(Xa = r(2321), r(818))]() {
    const x = r, t = /* @__PURE__ */ new Map();
    for (const a of Object[x(1574)](this.definition[x(740)]))
      t.set(a, []);
    for (const [a, e] of this[x(2321)].edges) {
      const s = t[x(2311)](a) || [];
      s[x(1131)](e), t[x(2525)](a, s);
    }
    return t;
  }
  [r(1654)]() {
    const x = r, t = [], a = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), s = this.buildDirectedAdjacencyList(), n = (o, c) => {
      const u = B;
      if (e[u(399)](o)) {
        const f = c.indexOf(o), l = c[u(1597)](f).concat(o);
        return t[u(1131)](u(2605) + l[u(1804)](u(408))), !0;
      }
      if (a[u(399)](o)) return !1;
      a[u(2279)](o), e[u(2279)](o);
      const d = s[u(2311)](o) || [];
      for (const f of d)
        if (n(f, [...c, o])) return !0;
      return e[u(292)](o), !1;
    };
    for (const o of Object[x(1574)](this[x(2321)][x(740)]))
      !a[x(399)](o) && n(o, []);
    return { valid: t[x(520)] === 0, errors: t };
  }
  buildAdjacencyList() {
    const x = r, t = /* @__PURE__ */ new Map();
    for (const a of Object[x(1574)](this[x(2321)][x(740)]))
      t[x(2525)](a, []);
    for (const [a, e] of this.definition[x(123)]) {
      const s = t.get(a) || [];
      s[x(1131)](e), t[x(2525)](a, s);
      const n = t.get(e) || [];
      n[x(1131)](a), t.set(e, n);
    }
    return t;
  }
  [r(2433)](x) {
    const t = r;
    return this[t(1853)]()[t(2311)](x) || [];
  }
  [r(1154)](x) {
    const t = r;
    return this[t(2321)][t(740)][x];
  }
  [r(2125)]() {
    const x = r;
    return Object[x(1574)](this[x(2321)][x(740)]);
  }
  [r(369)](x, t) {
    const a = r;
    return this.definition.edges[a(409)](([e, s]) => e === x && s === t || e === t && s === x);
  }
  [r(1387)](x, t) {
    const a = r;
    if (x === t) return [x];
    const e = this.buildAdjacencyList(), s = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; s[a(520)] > 0; ) {
      const { nodeId: o, path: c } = s[a(579)]();
      if (n[a(399)](o)) continue;
      if (n[a(2279)](o), o === t) return c;
      const u = e[a(2311)](o) || [];
      for (const d of u)
        !n[a(399)](d) && s.push({ nodeId: d, path: [...c, d] });
    }
    return null;
  }
  [r(778)](x, t) {
    return this[r(1387)](x, t) !== null;
  }
  getDefinition() {
    return { ...this[r(2321)] };
  }
}
const kr = (i) => {
  let x;
  const t = /* @__PURE__ */ new Set(), a = (u, d) => {
    const f = B, l = typeof u == "function" ? u(x) : u;
    if (!Object.is(l, x)) {
      const g = x;
      x = d ?? (typeof l !== f(1791) || l === null) ? l : Object[f(1885)]({}, x, l), t[f(1634)]((h) => h(x, g));
    }
  }, e = () => x, s = () => c, n = (u) => {
    const d = B;
    return t[d(2279)](u), () => t[d(292)](u);
  }, o = { setState: a, getState: e, getInitialState: s, subscribe: n }, c = x = i(a, e, o);
  return o;
}, Tn = (i) => i ? kr(i) : kr;
var C0;
(function(i) {
  const x = r;
  i[x(1971)] = (s) => {
  };
  function t(s) {
  }
  i[x(1843)] = t;
  function a(s) {
    throw new Error();
  }
  i[x(357)] = a, i[x(1677)] = (s) => {
    const n = {};
    for (const o of s)
      n[o] = o;
    return n;
  }, i[x(1705)] = (s) => {
    const n = x, o = i[n(1077)](s)[n(333)]((u) => typeof s[s[u]] !== n(191)), c = {};
    for (const u of o)
      c[u] = s[u];
    return i[n(1676)](c);
  }, i[x(1676)] = (s) => {
    const n = x;
    return i[n(1077)](s)[n(2388)](function(o) {
      return s[o];
    });
  }, i[x(1077)] = typeof Object[x(1574)] === x(1538) ? (s) => Object[x(1574)](s) : (s) => {
    const n = x, o = [];
    for (const c in s)
      Object.prototype[n(711)][n(422)](s, c) && o[n(1131)](c);
    return o;
  }, i[x(1837)] = (s, n) => {
    for (const o of s)
      if (n(o)) return o;
  }, i[x(365)] = typeof Number[x(365)] === x(1538) ? (s) => Number[x(365)](s) : (s) => typeof s === x(191) && Number.isFinite(s) && Math.floor(s) === s;
  function e(s, n = " | ") {
    const o = x;
    return s.map((c) => typeof c == "string" ? "'" + c + "'" : c)[o(1804)](n);
  }
  i[x(829)] = e, i.jsonStringifyReplacer = (s, n) => {
    const o = x;
    return typeof n === o(323) ? n[o(696)]() : n;
  };
})(C0 || (C0 = {}));
var Er;
(function(i) {
  const x = r;
  i[x(110)] = (t, a) => ({ ...t, ...a });
})(Er || (Er = {}));
const t0 = C0[r(1677)]([r(718), r(198), r(191), r(1395), r(991), "boolean", "date", r(323), r(2147), "function", r(2550), r(1237), r(1912), "object", "unknown", r(1623), r(472), r(1965), r(2388), "set"]), Ie = (i) => {
  const x = r;
  switch (typeof i) {
    case "undefined":
      return t0.undefined;
    case x(718):
      return t0[x(718)];
    case x(191):
      return Number[x(774)](i) ? t0[x(198)] : t0[x(191)];
    case x(1488):
      return t0[x(1488)];
    case "function":
      return t0[x(1538)];
    case "bigint":
      return t0.bigint;
    case x(2147):
      return t0[x(2147)];
    case x(1791):
      return Array.isArray(i) ? t0.array : i === null ? t0[x(1237)] : i[x(1124)] && typeof i.then == "function" && i[x(666)] && typeof i.catch === x(1538) ? t0[x(1623)] : typeof Map < "u" && i instanceof Map ? t0.map : typeof Set < "u" && i instanceof Set ? t0[x(2525)] : typeof Date !== x(2550) && i instanceof Date ? t0[x(662)] : t0[x(1791)];
    default:
      return t0[x(1561)];
  }
}, J = C0.arrayToEnum(["invalid_type", r(2371), r(194), r(1673), r(1905), r(2273), r(1200), r(2506), r(470), r(1944), r(1203), "too_small", r(306), r(2635), r(1294), r(656)]);
class Se extends Error {
  get errors() {
    return this[r(2208)];
  }
  constructor(x) {
    const t = r;
    super(), this[t(2208)] = [], this[t(1801)] = (e) => {
      const s = t;
      this[s(2208)] = [...this.issues, e];
    }, this[t(2022)] = (e = []) => {
      this.issues = [...this.issues, ...e];
    };
    const a = new.target[t(672)];
    Object[t(618)] ? Object[t(618)](this, a) : this[t(2577)] = a, this.name = t(2231), this[t(2208)] = x;
  }
  [r(1089)](x) {
    const t = x || function(s) {
      return s[B(2235)];
    }, a = { _errors: [] }, e = (s) => {
      const n = B;
      for (const o of s[n(2208)])
        if (o.code === n(1673)) o.unionErrors[n(2388)](e);
        else if (o[n(1277)] === n(470)) e(o.returnTypeError);
        else if (o[n(1277)] === "invalid_arguments") e(o[n(2054)]);
        else if (o.path[n(520)] === 0) a[n(2633)].push(t(o));
        else {
          let c = a, u = 0;
          for (; u < o[n(2483)][n(520)]; ) {
            const d = o[n(2483)][u];
            u === o[n(2483)][n(520)] - 1 ? (c[d] = c[d] || { _errors: [] }, c[d][n(2633)][n(1131)](t(o))) : c[d] = c[d] || { _errors: [] }, c = c[d], u++;
          }
        }
    };
    return e(this), a;
  }
  static [r(1876)](x) {
    const t = r;
    if (!(x instanceof Se)) throw new Error(t(1486) + x);
  }
  [r(696)]() {
    return this[r(2235)];
  }
  get [r(2235)]() {
    const x = r;
    return JSON.stringify(this[x(2208)], C0[x(1495)], 2);
  }
  get [r(1453)]() {
    const x = r;
    return this[x(2208)][x(520)] === 0;
  }
  [r(195)](x = (t) => t.message) {
    const t = r, a = {}, e = [];
    for (const s of this[t(2208)])
      if (s[t(2483)][t(520)] > 0) {
        const n = s.path[0];
        a[n] = a[n] || [], a[n][t(1131)](x(s));
      } else e.push(x(s));
    return { formErrors: e, fieldErrors: a };
  }
  get [r(1166)]() {
    return this.flatten();
  }
}
Se[r(799)] = (i) => new Se(i);
const jt = (i, x) => {
  const t = r;
  let a;
  switch (i[t(1277)]) {
    case J[t(2146)]:
      i[t(2331)] === t0[t(2550)] ? a = "Required" : a = t(1248) + i.expected + t(236) + i[t(2331)];
      break;
    case J[t(2371)]:
      a = "Invalid literal value, expected " + JSON[t(2403)](i[t(2436)], C0.jsonStringifyReplacer);
      break;
    case J[t(1200)]:
      a = t(268) + C0[t(829)](i[t(1574)], ", ");
      break;
    case J[t(1673)]:
      a = t(575);
      break;
    case J[t(1905)]:
      a = t(2383) + C0[t(829)](i[t(1287)]);
      break;
    case J[t(2273)]:
      a = "Invalid enum value. Expected " + C0[t(829)](i.options) + t(492) + i[t(2331)] + "'";
      break;
    case J.invalid_arguments:
      a = t(1649);
      break;
    case J[t(470)]:
      a = t(924);
      break;
    case J.invalid_date:
      a = t(892);
      break;
    case J[t(1203)]:
      typeof i[t(2176)] == "object" ? "includes" in i[t(2176)] ? (a = t(1509) + i.validation[t(578)] + '"', typeof i[t(2176)][t(1437)] === t(191) && (a = a + " at one or more positions greater than or equal to " + i.validation[t(1437)])) : t(243) in i[t(2176)] ? a = t(690) + i.validation[t(243)] + '"' : t(282) in i[t(2176)] ? a = t(596) + i[t(2176)][t(282)] + '"' : C0.assertNever(i[t(2176)]) : i.validation !== t(2185) ? a = t(810) + i[t(2176)] : a = t(1648);
      break;
    case J[t(785)]:
      i[t(2043)] === t(1912) ? a = t(2623) + (i[t(1333)] ? t(221) : i.inclusive ? t(1959) : t(2468)) + " " + i.minimum + t(2405) : i.type === t(718) ? a = t(1227) + (i[t(1333)] ? "exactly" : i[t(310)] ? t(1959) : t(344)) + " " + i[t(1691)] + t(961) : i[t(2043)] === t(191) ? a = t(1302) + (i[t(1333)] ? t(766) : i[t(310)] ? t(702) : t(235)) + i[t(1691)] : i[t(2043)] === t(323) ? a = t(1302) + (i[t(1333)] ? t(766) : i.inclusive ? "greater than or equal to " : t(235)) + i[t(1691)] : i.type === t(662) ? a = "Date must be " + (i[t(1333)] ? t(766) : i.inclusive ? t(702) : t(235)) + new Date(Number(i[t(1691)])) : a = t(575);
      break;
    case J[t(306)]:
      i[t(2043)] === t(1912) ? a = t(2623) + (i[t(1333)] ? t(221) : i[t(310)] ? t(861) : t(2136)) + " " + i[t(2061)] + t(2405) : i[t(2043)] === "string" ? a = t(1227) + (i.exact ? t(221) : i[t(310)] ? t(861) : "under") + " " + i[t(2061)] + t(961) : i[t(2043)] === t(191) ? a = "Number must be " + (i[t(1333)] ? t(221) : i.inclusive ? "less than or equal to" : t(2136)) + " " + i[t(2061)] : i.type === "bigint" ? a = t(1521) + (i[t(1333)] ? t(221) : i[t(310)] ? t(2274) : t(2136)) + " " + i[t(2061)] : i[t(2043)] === t(662) ? a = "Date must be " + (i[t(1333)] ? "exactly" : i[t(310)] ? t(1116) : t(1564)) + " " + new Date(Number(i.maximum)) : a = t(575);
      break;
    case J.custom:
      a = t(575);
      break;
    case J.invalid_intersection_types:
      a = t(1713);
      break;
    case J[t(1294)]:
      a = "Number must be a multiple of " + i[t(2019)];
      break;
    case J[t(656)]:
      a = "Number must be finite";
      break;
    default:
      a = x[t(2025)], C0.assertNever(i);
  }
  return { message: a };
};
let An = jt;
function On() {
  return An;
}
const Dn = (i) => {
  const x = r, { data: t, path: a, errorMaps: e, issueData: s } = i, n = [...a, ...s[x(2483)] || []], o = { ...s, path: n };
  if (s[x(2235)] !== void 0) return { ...s, path: n, message: s.message };
  let c = "";
  const u = e[x(333)]((d) => !!d).slice()[x(1845)]();
  for (const d of u)
    c = d(o, { data: t, defaultError: c })[x(2235)];
  return { ...s, path: n, message: c };
};
function _(i, x) {
  const t = r, a = On(), e = Dn({ issueData: x, data: i.data, path: i.path, errorMaps: [i[t(176)][t(2205)], i[t(1046)], a, a === jt ? void 0 : jt].filter((s) => !!s) });
  i[t(176)][t(2208)][t(1131)](e);
}
class _0 {
  constructor() {
    const x = r;
    this[x(2615)] = x(481);
  }
  [r(1083)]() {
    const x = r;
    this[x(2615)] === x(481) && (this[x(2615)] = x(1083));
  }
  abort() {
    const x = r;
    this.value !== x(2602) && (this.value = "aborted");
  }
  static [r(260)](x, t) {
    const a = r, e = [];
    for (const s of t) {
      if (s.status === "aborted") return f0;
      s.status === a(1083) && x.dirty(), e[a(1131)](s[a(2615)]);
    }
    return { status: x[a(2615)], value: e };
  }
  static async [r(2549)](x, t) {
    const a = r, e = [];
    for (const s of t) {
      const n = await s.key, o = await s[a(2615)];
      e.push({ key: n, value: o });
    }
    return _0.mergeObjectSync(x, e);
  }
  static [r(2517)](x, t) {
    const a = r, e = {};
    for (const s of t) {
      const { key: n, value: o } = s;
      if (n[a(1345)] === a(2602) || o[a(1345)] === a(2602)) return f0;
      n[a(1345)] === a(1083) && x[a(1083)](), o.status === a(1083) && x.dirty(), n[a(2615)] !== a(2577) && (typeof o[a(2615)] < "u" || s[a(2259)]) && (e[n[a(2615)]] = o[a(2615)]);
    }
    return { status: x[a(2615)], value: e };
  }
}
const f0 = Object.freeze({ status: r(2602) }), Qe = (i) => ({ status: r(1083), value: i }), re = (i) => ({ status: r(481), value: i }), Ir = (i) => i[r(1345)] === "aborted", Pr = (i) => i[r(1345)] === r(1083), Ue = (i) => i.status === r(481), px = (i) => typeof Promise !== r(2550) && i instanceof Promise;
var r0;
(function(i) {
  const x = r;
  i.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, i[x(696)] = (t) => typeof t == "string" ? t : t == null ? void 0 : t[x(2235)];
})(r0 || (r0 = {}));
class he {
  constructor(x, t, a, e) {
    const s = r;
    this[s(2044)] = [], this.parent = x, this[s(1021)] = t, this[s(2507)] = a, this[s(2308)] = e;
  }
  get [r(2483)]() {
    const x = r;
    return !this._cachedPath.length && (Array[x(1396)](this[x(2308)]) ? this[x(2044)][x(1131)](...this[x(2507)], ...this[x(2308)]) : this[x(2044)][x(1131)](...this[x(2507)], this[x(2308)])), this._cachedPath;
  }
}
const Rr = (i, x) => {
  const t = r;
  if (Ue(x)) return { success: !0, data: x[t(2615)] };
  if (!i[t(176)][t(2208)][t(520)]) throw new Error(t(534));
  return { success: !1, get error() {
    const a = t;
    if (this[a(168)]) return this[a(168)];
    const e = new Se(i[a(176)].issues);
    return this._error = e, this[a(168)];
  } };
};
function y0(i) {
  const x = r;
  if (!i) return {};
  const { errorMap: t, invalid_type_error: a, required_error: e, description: s } = i;
  if (t && (a || e)) throw new Error(x(570));
  return t ? { errorMap: t, description: s } : { errorMap: (o, c) => {
    const u = x, { message: d } = i;
    return o[u(1277)] === u(2273) ? { message: d ?? c[u(2025)] } : typeof c[u(1021)] === u(2550) ? { message: d ?? e ?? c[u(2025)] } : o.code !== u(2146) ? { message: c[u(2025)] } : { message: d ?? a ?? c.defaultError };
  }, description: s };
}
class P0 {
  get [r(1378)]() {
    return this[r(2110)].description;
  }
  [r(1460)](x) {
    return Ie(x[r(1021)]);
  }
  [r(597)](x, t) {
    const a = r;
    return t || { common: x[a(1177)][a(176)], data: x[a(1021)], parsedType: Ie(x[a(1021)]), schemaErrorMap: this[a(2110)][a(1568)], path: x[a(2483)], parent: x[a(1177)] };
  }
  [r(843)](x) {
    const t = r;
    return { status: new _0(), ctx: { common: x[t(1177)][t(176)], data: x[t(1021)], parsedType: Ie(x[t(1021)]), schemaErrorMap: this[t(2110)].errorMap, path: x[t(2483)], parent: x[t(1177)] } };
  }
  [r(671)](x) {
    const t = r, a = this[t(2270)](x);
    if (px(a)) throw new Error(t(1234));
    return a;
  }
  [r(741)](x) {
    const t = r, a = this[t(2270)](x);
    return Promise[t(772)](a);
  }
  [r(686)](x, t) {
    const a = r, e = this.safeParse(x, t);
    if (e[a(2290)]) return e.data;
    throw e.error;
  }
  [r(1278)](x, t) {
    const a = r, e = { common: { issues: [], async: (t == null ? void 0 : t.async) ?? !1, contextualErrorMap: t == null ? void 0 : t[a(1568)] }, path: (t == null ? void 0 : t[a(2483)]) || [], schemaErrorMap: this[a(2110)][a(1568)], parent: null, data: x, parsedType: Ie(x) }, s = this[a(671)]({ data: x, path: e.path, parent: e });
    return Rr(e, s);
  }
  [r(223)](x) {
    var e, s;
    const t = r, a = { common: { issues: [], async: !!this[t(2341)][t(2591)] }, path: [], schemaErrorMap: this._def[t(1568)], parent: null, data: x, parsedType: Ie(x) };
    if (!this["~standard"].async) try {
      const n = this._parseSync({ data: x, path: [], parent: a });
      return Ue(n) ? { value: n[t(2615)] } : { issues: a[t(176)][t(2208)] };
    } catch (n) {
      (s = (e = n == null ? void 0 : n[t(2235)]) == null ? void 0 : e[t(798)]()) != null && s[t(578)](t(1394)) && (this[t(2341)][t(2591)] = !0), a.common = { issues: [], async: !0 };
    }
    return this[t(741)]({ data: x, path: [], parent: a }).then((n) => Ue(n) ? { value: n.value } : { issues: a[t(176)][t(2208)] });
  }
  async [r(1743)](x, t) {
    const a = r, e = await this.safeParseAsync(x, t);
    if (e[a(2290)]) return e[a(1021)];
    throw e.error;
  }
  async [r(1254)](x, t) {
    const a = r, e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[a(1568)], async: !0 }, path: (t == null ? void 0 : t[a(2483)]) || [], schemaErrorMap: this[a(2110)][a(1568)], parent: null, data: x, parsedType: Ie(x) }, s = this[a(2270)]({ data: x, path: e.path, parent: e }), n = await (px(s) ? s : Promise.resolve(s));
    return Rr(e, n);
  }
  [r(181)](x, t) {
    const a = r, e = (s) => {
      const n = B;
      return typeof t === n(718) || typeof t === n(2550) ? { message: t } : typeof t === n(1538) ? t(s) : t;
    };
    return this[a(564)]((s, n) => {
      const o = a, c = x(s), u = () => n[o(1801)]({ code: J[o(194)], ...e(s) });
      return typeof Promise !== o(2550) && c instanceof Promise ? c[o(1124)]((d) => d ? !0 : (u(), !1)) : c ? !0 : (u(), !1);
    });
  }
  refinement(x, t) {
    const a = r;
    return this[a(564)]((e, s) => {
      const n = a;
      return x(e) ? !0 : (s[n(1801)](typeof t === n(1538) ? t(e, s) : t), !1);
    });
  }
  _refinement(x) {
    const t = r;
    return new Te({ schema: this, typeName: l0.ZodEffects, effect: { type: t(2051), refinement: x } });
  }
  [r(592)](x) {
    return this[r(564)](x);
  }
  constructor(x) {
    const t = r;
    this[t(1895)] = this.safeParseAsync, this[t(2110)] = x, this[t(686)] = this[t(686)].bind(this), this[t(1278)] = this.safeParse.bind(this), this.parseAsync = this[t(1743)].bind(this), this[t(1254)] = this[t(1254)][t(1489)](this), this[t(1895)] = this[t(1895)][t(1489)](this), this.refine = this[t(181)][t(1489)](this), this[t(2051)] = this.refinement.bind(this), this[t(592)] = this[t(592)][t(1489)](this), this[t(965)] = this.optional.bind(this), this[t(1859)] = this[t(1859)][t(1489)](this), this.nullish = this[t(189)].bind(this), this[t(1912)] = this.array[t(1489)](this), this[t(1623)] = this.promise[t(1489)](this), this.or = this.or[t(1489)](this), this[t(901)] = this.and[t(1489)](this), this[t(159)] = this.transform[t(1489)](this), this[t(1698)] = this.brand.bind(this), this[t(1535)] = this[t(1535)][t(1489)](this), this[t(666)] = this.catch.bind(this), this.describe = this[t(928)][t(1489)](this), this.pipe = this.pipe[t(1489)](this), this.readonly = this.readonly.bind(this), this[t(1748)] = this[t(1748)].bind(this), this[t(1304)] = this.isOptional[t(1489)](this), this[t(2341)] = { version: 1, vendor: t(2365), validate: (a) => this[t(223)](a) };
  }
  [r(965)]() {
    const x = r;
    return we[x(799)](this, this[x(2110)]);
  }
  [r(1859)]() {
    const x = r;
    return Me.create(this, this[x(2110)]);
  }
  [r(189)]() {
    return this[r(1859)]().optional();
  }
  [r(1912)]() {
    return le.create(this);
  }
  [r(1623)]() {
    const x = r;
    return wx[x(799)](this, this[x(2110)]);
  }
  or(x) {
    const t = r;
    return gx[t(799)]([this, x], this[t(2110)]);
  }
  and(x) {
    const t = r;
    return bx[t(799)](this, x, this[t(2110)]);
  }
  [r(159)](x) {
    const t = r;
    return new Te({ ...y0(this._def), schema: this, typeName: l0.ZodEffects, effect: { type: t(159), transform: x } });
  }
  [r(1535)](x) {
    const t = r, a = typeof x === t(1538) ? x : () => x;
    return new Sx({ ...y0(this[t(2110)]), innerType: this, defaultValue: a, typeName: l0[t(2e3)] });
  }
  [r(1698)]() {
    const x = r;
    return new Ds({ typeName: l0[x(634)], type: this, ...y0(this[x(2110)]) });
  }
  [r(666)](x) {
    const t = r, a = typeof x === t(1538) ? x : () => x;
    return new kx({ ...y0(this[t(2110)]), innerType: this, catchValue: a, typeName: l0[t(1370)] });
  }
  [r(928)](x) {
    const t = r, a = this.constructor;
    return new a({ ...this[t(2110)], description: x });
  }
  [r(2513)](x) {
    return tr[r(799)](this, x);
  }
  [r(552)]() {
    return Ex[r(799)](this);
  }
  [r(1304)]() {
    const x = r;
    return this[x(1278)](void 0)[x(2290)];
  }
  [r(1748)]() {
    const x = r;
    return this[x(1278)](null)[x(2290)];
  }
}
const jn = /^c[^\s-]{8,}$/i, Mn = /^[0-9a-z]+$/, Ln = /^[0-9A-HJKMNP-TV-Z]{26}$/i, $n = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, zn = /^[a-z0-9_-]{21}$/i, Hn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Un = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Vn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Wn = r(2074);
let Lx;
const Zn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Bn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Kn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Gn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Jn = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Qn = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ts = r(1076), Xn = new RegExp("^" + Ts + "$");
function As(i) {
  const x = r;
  let t = x(2382);
  i[x(1550)] ? t = t + x(2402) + i[x(1550)] + "}" : i[x(1550)] == null && (t = t + "(\\.\\d+)?");
  const a = i.precision ? "+" : "?";
  return "([01]\\d|2[0-3]):[0-5]\\d(:" + t + ")" + a;
}
function Yn(i) {
  return new RegExp("^" + As(i) + "$");
}
function _n(i) {
  const x = r;
  let t = Ts + "T" + As(i);
  const a = [];
  return a[x(1131)](i[x(2075)] ? "Z?" : "Z"), i[x(1255)] && a[x(1131)](x(2544)), t = t + "(" + a[x(1804)]("|") + ")", new RegExp("^" + t + "$");
}
function ei(i, x) {
  return !!((x === "v4" || !x) && Zn.test(i) || (x === "v6" || !x) && Kn.test(i));
}
function xi(i, x) {
  const t = r;
  if (!Hn[t(706)](i)) return !1;
  try {
    const [a] = i[t(2068)](".");
    if (!a) return !1;
    const e = a[t(1927)](/-/g, "+")[t(1927)](/_/g, "/").padEnd(a[t(520)] + (4 - a[t(520)] % 4) % 4, "="), s = JSON.parse(atob(e));
    return !(typeof s !== t(1791) || s === null || t(1366) in s && (s == null ? void 0 : s[t(1366)]) !== t(842) || !s[t(1472)] || x && s.alg !== x);
  } catch {
    return !1;
  }
}
function ti(i, x) {
  return !!((x === "v4" || !x) && Bn[r(706)](i) || (x === "v6" || !x) && Gn.test(i));
}
class ve extends P0 {
  _parse(x) {
    const t = r;
    if (this[t(2110)][t(1019)] && (x[t(1021)] = String(x[t(1021)])), this[t(1460)](x) !== t0.string) {
      const n = this[t(597)](x);
      return _(n, { code: J.invalid_type, expected: t0[t(718)], received: n[t(2055)] }), f0;
    }
    const e = new _0();
    let s;
    for (const n of this[t(2110)][t(1599)])
      if (n[t(475)] === "min") x[t(1021)][t(520)] < n[t(2615)] && (s = this[t(597)](x, s), _(s, { code: J[t(785)], minimum: n[t(2615)], type: t(718), inclusive: !0, exact: !1, message: n[t(2235)] }), e[t(1083)]());
      else if (n[t(475)] === "max") x.data[t(520)] > n[t(2615)] && (s = this[t(597)](x, s), _(s, { code: J.too_big, maximum: n[t(2615)], type: t(718), inclusive: !0, exact: !1, message: n[t(2235)] }), e[t(1083)]());
      else if (n[t(475)] === "length") {
        const o = x[t(1021)][t(520)] > n[t(2615)], c = x[t(1021)][t(520)] < n[t(2615)];
        (o || c) && (s = this[t(597)](x, s), o ? _(s, { code: J[t(306)], maximum: n[t(2615)], type: t(718), inclusive: !0, exact: !0, message: n.message }) : c && _(s, { code: J[t(785)], minimum: n[t(2615)], type: t(718), inclusive: !0, exact: !0, message: n[t(2235)] }), e[t(1083)]());
      } else if (n.kind === t(439)) !Vn[t(706)](x[t(1021)]) && (s = this._getOrReturnCtx(x, s), _(s, { validation: t(439), code: J[t(1203)], message: n[t(2235)] }), e[t(1083)]());
      else if (n[t(475)] === "emoji") !Lx && (Lx = new RegExp(Wn, "u")), !Lx[t(706)](x[t(1021)]) && (s = this[t(597)](x, s), _(s, { validation: t(2087), code: J.invalid_string, message: n[t(2235)] }), e.dirty());
      else if (n[t(475)] === t(1663)) !$n[t(706)](x[t(1021)]) && (s = this[t(597)](x, s), _(s, { validation: "uuid", code: J[t(1203)], message: n[t(2235)] }), e[t(1083)]());
      else if (n[t(475)] === "nanoid") !zn[t(706)](x.data) && (s = this[t(597)](x, s), _(s, { validation: t(1007), code: J[t(1203)], message: n[t(2235)] }), e.dirty());
      else if (n.kind === t(2604)) !jn.test(x[t(1021)]) && (s = this[t(597)](x, s), _(s, { validation: t(2604), code: J.invalid_string, message: n[t(2235)] }), e[t(1083)]());
      else if (n[t(475)] === t(770)) !Mn[t(706)](x[t(1021)]) && (s = this[t(597)](x, s), _(s, { validation: t(770), code: J[t(1203)], message: n[t(2235)] }), e[t(1083)]());
      else if (n[t(475)] === t(919)) !Ln.test(x.data) && (s = this[t(597)](x, s), _(s, { validation: t(919), code: J[t(1203)], message: n[t(2235)] }), e[t(1083)]());
      else if (n[t(475)] === t(1783)) try {
        new URL(x[t(1021)]);
      } catch {
        s = this[t(597)](x, s), _(s, { validation: "url", code: J[t(1203)], message: n.message }), e.dirty();
      }
      else
        n[t(475)] === t(2185) ? (n[t(2185)][t(1613)] = 0, !n[t(2185)][t(706)](x[t(1021)]) && (s = this[t(597)](x, s), _(s, { validation: t(2185), code: J[t(1203)], message: n.message }), e[t(1083)]())) : n[t(475)] === "trim" ? x[t(1021)] = x[t(1021)][t(1996)]() : n[t(475)] === t(578) ? !x[t(1021)][t(578)](n[t(2615)], n.position) && (s = this[t(597)](x, s), _(s, { code: J.invalid_string, validation: { includes: n[t(2615)], position: n[t(1437)] }, message: n[t(2235)] }), e[t(1083)]()) : n[t(475)] === "toLowerCase" ? x.data = x[t(1021)][t(798)]() : n[t(475)] === "toUpperCase" ? x[t(1021)] = x[t(1021)][t(1318)]() : n[t(475)] === t(243) ? !x[t(1021)][t(243)](n.value) && (s = this._getOrReturnCtx(x, s), _(s, { code: J[t(1203)], validation: { startsWith: n[t(2615)] }, message: n[t(2235)] }), e[t(1083)]()) : n[t(475)] === t(282) ? !x[t(1021)].endsWith(n[t(2615)]) && (s = this[t(597)](x, s), _(s, { code: J[t(1203)], validation: { endsWith: n.value }, message: n[t(2235)] }), e.dirty()) : n[t(475)] === "datetime" ? !_n(n)[t(706)](x.data) && (s = this._getOrReturnCtx(x, s), _(s, { code: J[t(1203)], validation: t(896), message: n.message }), e.dirty()) : n[t(475)] === "date" ? !Xn[t(706)](x[t(1021)]) && (s = this[t(597)](x, s), _(s, { code: J[t(1203)], validation: t(662), message: n[t(2235)] }), e[t(1083)]()) : n[t(475)] === t(1718) ? !Yn(n)[t(706)](x[t(1021)]) && (s = this[t(597)](x, s), _(s, { code: J.invalid_string, validation: t(1718), message: n[t(2235)] }), e.dirty()) : n.kind === t(633) ? !Un[t(706)](x.data) && (s = this[t(597)](x, s), _(s, { validation: t(633), code: J[t(1203)], message: n[t(2235)] }), e[t(1083)]()) : n[t(475)] === "ip" ? !ei(x.data, n[t(1157)]) && (s = this._getOrReturnCtx(x, s), _(s, { validation: "ip", code: J.invalid_string, message: n[t(2235)] }), e[t(1083)]()) : n[t(475)] === t(245) ? !xi(x[t(1021)], n[t(1472)]) && (s = this._getOrReturnCtx(x, s), _(s, { validation: t(245), code: J.invalid_string, message: n[t(2235)] }), e.dirty()) : n[t(475)] === t(2184) ? !ti(x[t(1021)], n[t(1157)]) && (s = this[t(597)](x, s), _(s, { validation: "cidr", code: J[t(1203)], message: n[t(2235)] }), e[t(1083)]()) : n[t(475)] === t(1325) ? !Jn[t(706)](x[t(1021)]) && (s = this[t(597)](x, s), _(s, { validation: "base64", code: J[t(1203)], message: n[t(2235)] }), e[t(1083)]()) : n[t(475)] === t(2232) ? !Qn[t(706)](x[t(1021)]) && (s = this._getOrReturnCtx(x, s), _(s, { validation: "base64url", code: J[t(1203)], message: n[t(2235)] }), e[t(1083)]()) : C0[t(357)](n);
    return { status: e[t(2615)], value: x.data };
  }
  _regex(x, t, a) {
    const e = r;
    return this[e(2051)]((s) => x[e(706)](s), { validation: t, code: J.invalid_string, ...r0[e(542)](a) });
  }
  [r(2190)](x) {
    const t = r;
    return new ve({ ...this[t(2110)], checks: [...this[t(2110)][t(1599)], x] });
  }
  [r(439)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(439), ...r0[t(542)](x) });
  }
  [r(1783)](x) {
    const t = r;
    return this._addCheck({ kind: t(1783), ...r0.errToObj(x) });
  }
  [r(2087)](x) {
    const t = r;
    return this[t(2190)]({ kind: "emoji", ...r0[t(542)](x) });
  }
  uuid(x) {
    const t = r;
    return this[t(2190)]({ kind: t(1663), ...r0[t(542)](x) });
  }
  [r(1007)](x) {
    const t = r;
    return this._addCheck({ kind: t(1007), ...r0[t(542)](x) });
  }
  [r(2604)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(2604), ...r0.errToObj(x) });
  }
  [r(770)](x) {
    const t = r;
    return this._addCheck({ kind: t(770), ...r0[t(542)](x) });
  }
  [r(919)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(919), ...r0[t(542)](x) });
  }
  base64(x) {
    const t = r;
    return this[t(2190)]({ kind: "base64", ...r0[t(542)](x) });
  }
  [r(2232)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(2232), ...r0.errToObj(x) });
  }
  [r(245)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(245), ...r0[t(542)](x) });
  }
  ip(x) {
    return this[r(2190)]({ kind: "ip", ...r0.errToObj(x) });
  }
  [r(2184)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(2184), ...r0[t(542)](x) });
  }
  datetime(x) {
    const t = r;
    return typeof x === t(718) ? this._addCheck({ kind: "datetime", precision: null, offset: !1, local: !1, message: x }) : this._addCheck({ kind: t(896), precision: typeof (x == null ? void 0 : x.precision) === t(2550) ? null : x == null ? void 0 : x[t(1550)], offset: (x == null ? void 0 : x[t(1255)]) ?? !1, local: (x == null ? void 0 : x[t(2075)]) ?? !1, ...r0.errToObj(x == null ? void 0 : x[t(2235)]) });
  }
  [r(662)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(662), message: x });
  }
  [r(1718)](x) {
    const t = r;
    return typeof x == "string" ? this[t(2190)]({ kind: t(1718), precision: null, message: x }) : this[t(2190)]({ kind: t(1718), precision: typeof (x == null ? void 0 : x[t(1550)]) === t(2550) ? null : x == null ? void 0 : x[t(1550)], ...r0[t(542)](x == null ? void 0 : x[t(2235)]) });
  }
  [r(633)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(633), ...r0.errToObj(x) });
  }
  [r(2185)](x, t) {
    const a = r;
    return this._addCheck({ kind: a(2185), regex: x, ...r0[a(542)](t) });
  }
  [r(578)](x, t) {
    const a = r;
    return this[a(2190)]({ kind: "includes", value: x, position: t == null ? void 0 : t[a(1437)], ...r0[a(542)](t == null ? void 0 : t[a(2235)]) });
  }
  [r(243)](x, t) {
    const a = r;
    return this[a(2190)]({ kind: a(243), value: x, ...r0.errToObj(t) });
  }
  [r(282)](x, t) {
    const a = r;
    return this._addCheck({ kind: a(282), value: x, ...r0[a(542)](t) });
  }
  [r(1150)](x, t) {
    const a = r;
    return this[a(2190)]({ kind: "min", value: x, ...r0[a(542)](t) });
  }
  max(x, t) {
    const a = r;
    return this._addCheck({ kind: a(2428), value: x, ...r0[a(542)](t) });
  }
  [r(520)](x, t) {
    const a = r;
    return this[a(2190)]({ kind: a(520), value: x, ...r0.errToObj(t) });
  }
  [r(1602)](x) {
    const t = r;
    return this[t(1150)](1, r0[t(542)](x));
  }
  trim() {
    const x = r;
    return new ve({ ...this[x(2110)], checks: [...this._def[x(1599)], { kind: x(1996) }] });
  }
  [r(798)]() {
    const x = r;
    return new ve({ ...this[x(2110)], checks: [...this[x(2110)][x(1599)], { kind: x(798) }] });
  }
  [r(1318)]() {
    const x = r;
    return new ve({ ...this[x(2110)], checks: [...this[x(2110)][x(1599)], { kind: x(1318) }] });
  }
  get [r(448)]() {
    const x = r;
    return !!this[x(2110)][x(1599)][x(1837)]((t) => t.kind === x(896));
  }
  get [r(2631)]() {
    const x = r;
    return !!this._def[x(1599)][x(1837)]((t) => t[x(475)] === x(662));
  }
  get [r(1158)]() {
    const x = r;
    return !!this[x(2110)][x(1599)][x(1837)]((t) => t.kind === x(1718));
  }
  get [r(2198)]() {
    const x = r;
    return !!this[x(2110)][x(1599)][x(1837)]((t) => t[x(475)] === "duration");
  }
  get [r(1414)]() {
    const x = r;
    return !!this[x(2110)][x(1599)][x(1837)]((t) => t[x(475)] === x(439));
  }
  get [r(469)]() {
    const x = r;
    return !!this[x(2110)][x(1599)][x(1837)]((t) => t[x(475)] === x(1783));
  }
  get [r(574)]() {
    const x = r;
    return !!this[x(2110)].checks[x(1837)]((t) => t.kind === x(2087));
  }
  get isUUID() {
    const x = r;
    return !!this[x(2110)][x(1599)][x(1837)]((t) => t[x(475)] === x(1663));
  }
  get [r(1714)]() {
    const x = r;
    return !!this._def[x(1599)][x(1837)]((t) => t[x(475)] === x(1007));
  }
  get [r(1332)]() {
    const x = r;
    return !!this[x(2110)][x(1599)][x(1837)]((t) => t[x(475)] === x(2604));
  }
  get [r(2291)]() {
    const x = r;
    return !!this[x(2110)][x(1599)][x(1837)]((t) => t.kind === x(770));
  }
  get [r(1635)]() {
    const x = r;
    return !!this[x(2110)][x(1599)][x(1837)]((t) => t.kind === "ulid");
  }
  get [r(2182)]() {
    const x = r;
    return !!this[x(2110)].checks.find((t) => t[x(475)] === "ip");
  }
  get [r(1848)]() {
    const x = r;
    return !!this[x(2110)][x(1599)].find((t) => t[x(475)] === x(2184));
  }
  get [r(1715)]() {
    const x = r;
    return !!this._def[x(1599)].find((t) => t.kind === x(1325));
  }
  get [r(914)]() {
    const x = r;
    return !!this._def[x(1599)][x(1837)]((t) => t[x(475)] === "base64url");
  }
  get [r(884)]() {
    const x = r;
    let t = null;
    for (const a of this[x(2110)][x(1599)])
      a[x(475)] === "min" && (t === null || a[x(2615)] > t) && (t = a[x(2615)]);
    return t;
  }
  get [r(1736)]() {
    const x = r;
    let t = null;
    for (const a of this._def[x(1599)])
      a.kind === x(2428) && (t === null || a.value < t) && (t = a[x(2615)]);
    return t;
  }
}
ve[r(799)] = (i) => {
  const x = r;
  return new ve({ checks: [], typeName: l0[x(932)], coerce: (i == null ? void 0 : i[x(1019)]) ?? !1, ...y0(i) });
};
function ri(i, x) {
  const t = r, a = (i[t(696)]()[t(2068)](".")[1] || "")[t(520)], e = (x.toString()[t(2068)](".")[1] || "").length, s = a > e ? a : e, n = Number[t(1525)](i[t(1275)](s)[t(1927)](".", "")), o = Number[t(1525)](x[t(1275)](s)[t(1927)](".", ""));
  return n % o / 10 ** s;
}
class Ve extends P0 {
  constructor() {
    const x = r;
    super(...arguments), this.min = this[x(169)], this.max = this[x(806)], this[x(2083)] = this.multipleOf;
  }
  [r(2270)](x) {
    const t = r;
    if (this[t(2110)][t(1019)] && (x[t(1021)] = Number(x[t(1021)])), this[t(1460)](x) !== t0[t(191)]) {
      const n = this._getOrReturnCtx(x);
      return _(n, { code: J[t(2146)], expected: t0[t(191)], received: n.parsedType }), f0;
    }
    let e;
    const s = new _0();
    for (const n of this[t(2110)].checks)
      n.kind === "int" ? !C0[t(365)](x[t(1021)]) && (e = this[t(597)](x, e), _(e, { code: J[t(2146)], expected: t(1395), received: t(991), message: n[t(2235)] }), s.dirty()) : n[t(475)] === t(1150) ? (n[t(310)] ? x[t(1021)] < n.value : x[t(1021)] <= n[t(2615)]) && (e = this._getOrReturnCtx(x, e), _(e, { code: J[t(785)], minimum: n[t(2615)], type: t(191), inclusive: n.inclusive, exact: !1, message: n[t(2235)] }), s[t(1083)]()) : n[t(475)] === t(2428) ? (n.inclusive ? x[t(1021)] > n[t(2615)] : x[t(1021)] >= n[t(2615)]) && (e = this[t(597)](x, e), _(e, { code: J[t(306)], maximum: n[t(2615)], type: "number", inclusive: n[t(310)], exact: !1, message: n.message }), s.dirty()) : n[t(475)] === t(2019) ? ri(x.data, n.value) !== 0 && (e = this[t(597)](x, e), _(e, { code: J[t(1294)], multipleOf: n.value, message: n[t(2235)] }), s[t(1083)]()) : n[t(475)] === "finite" ? !Number[t(647)](x[t(1021)]) && (e = this[t(597)](x, e), _(e, { code: J[t(656)], message: n[t(2235)] }), s[t(1083)]()) : C0[t(357)](n);
    return { status: s.value, value: x[t(1021)] };
  }
  gte(x, t) {
    const a = r;
    return this[a(2351)](a(1150), x, !0, r0[a(696)](t));
  }
  gt(x, t) {
    const a = r;
    return this[a(2351)](a(1150), x, !1, r0.toString(t));
  }
  lte(x, t) {
    const a = r;
    return this[a(2351)]("max", x, !0, r0[a(696)](t));
  }
  lt(x, t) {
    const a = r;
    return this[a(2351)](a(2428), x, !1, r0.toString(t));
  }
  [r(2351)](x, t, a, e) {
    const s = r;
    return new Ve({ ...this._def, checks: [...this[s(2110)][s(1599)], { kind: x, value: t, inclusive: a, message: r0[s(696)](e) }] });
  }
  [r(2190)](x) {
    const t = r;
    return new Ve({ ...this._def, checks: [...this[t(2110)].checks, x] });
  }
  [r(1245)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(1245), message: r0[t(696)](x) });
  }
  [r(238)](x) {
    return this[r(2190)]({ kind: "min", value: 0, inclusive: !1, message: r0.toString(x) });
  }
  [r(2123)](x) {
    const t = r;
    return this._addCheck({ kind: t(2428), value: 0, inclusive: !1, message: r0[t(696)](x) });
  }
  [r(1563)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(2428), value: 0, inclusive: !0, message: r0[t(696)](x) });
  }
  [r(1531)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(1150), value: 0, inclusive: !0, message: r0[t(696)](x) });
  }
  [r(2019)](x, t) {
    const a = r;
    return this[a(2190)]({ kind: a(2019), value: x, message: r0[a(696)](t) });
  }
  finite(x) {
    const t = r;
    return this[t(2190)]({ kind: t(2375), message: r0[t(696)](x) });
  }
  [r(2191)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(1150), inclusive: !0, value: Number[t(1900)], message: r0[t(696)](x) })._addCheck({ kind: t(2428), inclusive: !0, value: Number[t(837)], message: r0.toString(x) });
  }
  get [r(819)]() {
    const x = r;
    let t = null;
    for (const a of this[x(2110)][x(1599)])
      a[x(475)] === x(1150) && (t === null || a.value > t) && (t = a.value);
    return t;
  }
  get [r(823)]() {
    const x = r;
    let t = null;
    for (const a of this._def[x(1599)])
      a[x(475)] === x(2428) && (t === null || a[x(2615)] < t) && (t = a[x(2615)]);
    return t;
  }
  get [r(2469)]() {
    const x = r;
    return !!this[x(2110)][x(1599)][x(1837)]((t) => t[x(475)] === "int" || t[x(475)] === x(2019) && C0[x(365)](t[x(2615)]));
  }
  get isFinite() {
    const x = r;
    let t = null, a = null;
    for (const e of this._def[x(1599)]) {
      if (e[x(475)] === "finite" || e[x(475)] === x(1245) || e[x(475)] === x(2019)) return !0;
      e[x(475)] === "min" ? (a === null || e[x(2615)] > a) && (a = e.value) : e[x(475)] === "max" && (t === null || e[x(2615)] < t) && (t = e[x(2615)]);
    }
    return Number[x(647)](a) && Number.isFinite(t);
  }
}
Ve[r(799)] = (i) => {
  const x = r;
  return new Ve({ checks: [], typeName: l0[x(1916)], coerce: (i == null ? void 0 : i[x(1019)]) || !1, ...y0(i) });
};
class xx extends P0 {
  constructor() {
    const x = r;
    super(...arguments), this[x(1150)] = this.gte, this.max = this[x(806)];
  }
  [r(2270)](x) {
    const t = r;
    if (this[t(2110)][t(1019)]) try {
      x[t(1021)] = BigInt(x.data);
    } catch {
      return this[t(197)](x);
    }
    if (this[t(1460)](x) !== t0.bigint) return this[t(197)](x);
    let e;
    const s = new _0();
    for (const n of this[t(2110)][t(1599)])
      n.kind === t(1150) ? (n[t(310)] ? x.data < n[t(2615)] : x[t(1021)] <= n[t(2615)]) && (e = this[t(597)](x, e), _(e, { code: J.too_small, type: t(323), minimum: n[t(2615)], inclusive: n[t(310)], message: n[t(2235)] }), s.dirty()) : n.kind === t(2428) ? (n[t(310)] ? x[t(1021)] > n.value : x[t(1021)] >= n[t(2615)]) && (e = this[t(597)](x, e), _(e, { code: J[t(306)], type: "bigint", maximum: n.value, inclusive: n.inclusive, message: n[t(2235)] }), s[t(1083)]()) : n[t(475)] === t(2019) ? x.data % n[t(2615)] !== BigInt(0) && (e = this[t(597)](x, e), _(e, { code: J[t(1294)], multipleOf: n[t(2615)], message: n.message }), s[t(1083)]()) : C0[t(357)](n);
    return { status: s[t(2615)], value: x.data };
  }
  _getInvalidInput(x) {
    const t = r, a = this[t(597)](x);
    return _(a, { code: J.invalid_type, expected: t0[t(323)], received: a[t(2055)] }), f0;
  }
  gte(x, t) {
    const a = r;
    return this[a(2351)](a(1150), x, !0, r0.toString(t));
  }
  gt(x, t) {
    const a = r;
    return this[a(2351)](a(1150), x, !1, r0[a(696)](t));
  }
  [r(806)](x, t) {
    const a = r;
    return this[a(2351)](a(2428), x, !0, r0[a(696)](t));
  }
  lt(x, t) {
    return this[r(2351)]("max", x, !1, r0.toString(t));
  }
  [r(2351)](x, t, a, e) {
    const s = r;
    return new xx({ ...this[s(2110)], checks: [...this[s(2110)][s(1599)], { kind: x, value: t, inclusive: a, message: r0[s(696)](e) }] });
  }
  _addCheck(x) {
    const t = r;
    return new xx({ ...this[t(2110)], checks: [...this[t(2110)][t(1599)], x] });
  }
  [r(238)](x) {
    const t = r;
    return this._addCheck({ kind: t(1150), value: BigInt(0), inclusive: !1, message: r0[t(696)](x) });
  }
  [r(2123)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(2428), value: BigInt(0), inclusive: !1, message: r0[t(696)](x) });
  }
  nonpositive(x) {
    const t = r;
    return this._addCheck({ kind: t(2428), value: BigInt(0), inclusive: !0, message: r0[t(696)](x) });
  }
  [r(1531)](x) {
    const t = r;
    return this[t(2190)]({ kind: t(1150), value: BigInt(0), inclusive: !0, message: r0[t(696)](x) });
  }
  [r(2019)](x, t) {
    const a = r;
    return this[a(2190)]({ kind: a(2019), value: x, message: r0[a(696)](t) });
  }
  get minValue() {
    const x = r;
    let t = null;
    for (const a of this[x(2110)][x(1599)])
      a[x(475)] === x(1150) && (t === null || a[x(2615)] > t) && (t = a[x(2615)]);
    return t;
  }
  get [r(823)]() {
    const x = r;
    let t = null;
    for (const a of this._def[x(1599)])
      a[x(475)] === x(2428) && (t === null || a.value < t) && (t = a[x(2615)]);
    return t;
  }
}
xx[r(799)] = (i) => {
  const x = r;
  return new xx({ checks: [], typeName: l0[x(199)], coerce: (i == null ? void 0 : i.coerce) ?? !1, ...y0(i) });
};
class Mt extends P0 {
  _parse(x) {
    const t = r;
    if (this[t(2110)].coerce && (x[t(1021)] = !!x[t(1021)]), this._getType(x) !== t0[t(1488)]) {
      const e = this[t(597)](x);
      return _(e, { code: J[t(2146)], expected: t0[t(1488)], received: e[t(2055)] }), f0;
    }
    return re(x[t(1021)]);
  }
}
Mt[r(799)] = (i) => {
  const x = r;
  return new Mt({ typeName: l0[x(883)], coerce: (i == null ? void 0 : i[x(1019)]) || !1, ...y0(i) });
};
class mx extends P0 {
  [r(2270)](x) {
    const t = r;
    if (this._def[t(1019)] && (x.data = new Date(x.data)), this[t(1460)](x) !== t0.date) {
      const n = this[t(597)](x);
      return _(n, { code: J[t(2146)], expected: t0[t(662)], received: n[t(2055)] }), f0;
    }
    if (Number[t(774)](x.data[t(1319)]())) {
      const n = this[t(597)](x);
      return _(n, { code: J[t(1944)] }), f0;
    }
    const e = new _0();
    let s;
    for (const n of this[t(2110)][t(1599)])
      n[t(475)] === "min" ? x[t(1021)][t(1319)]() < n.value && (s = this[t(597)](x, s), _(s, { code: J[t(785)], message: n[t(2235)], inclusive: !0, exact: !1, minimum: n[t(2615)], type: t(662) }), e[t(1083)]()) : n[t(475)] === t(2428) ? x[t(1021)][t(1319)]() > n[t(2615)] && (s = this[t(597)](x, s), _(s, { code: J[t(306)], message: n[t(2235)], inclusive: !0, exact: !1, maximum: n.value, type: t(662) }), e.dirty()) : C0[t(357)](n);
    return { status: e[t(2615)], value: new Date(x.data[t(1319)]()) };
  }
  [r(2190)](x) {
    const t = r;
    return new mx({ ...this[t(2110)], checks: [...this[t(2110)][t(1599)], x] });
  }
  [r(1150)](x, t) {
    const a = r;
    return this[a(2190)]({ kind: a(1150), value: x[a(1319)](), message: r0[a(696)](t) });
  }
  [r(2428)](x, t) {
    const a = r;
    return this._addCheck({ kind: a(2428), value: x[a(1319)](), message: r0.toString(t) });
  }
  get [r(2621)]() {
    const x = r;
    let t = null;
    for (const a of this[x(2110)][x(1599)])
      a[x(475)] === x(1150) && (t === null || a[x(2615)] > t) && (t = a[x(2615)]);
    return t != null ? new Date(t) : null;
  }
  get [r(1244)]() {
    const x = r;
    let t = null;
    for (const a of this[x(2110)][x(1599)])
      a[x(475)] === "max" && (t === null || a[x(2615)] < t) && (t = a[x(2615)]);
    return t != null ? new Date(t) : null;
  }
}
mx[r(799)] = (i) => {
  const x = r;
  return new mx({ checks: [], coerce: (i == null ? void 0 : i[x(1019)]) || !1, typeName: l0[x(1779)], ...y0(i) });
};
class Cr extends P0 {
  [r(2270)](x) {
    const t = r;
    if (this._getType(x) !== t0[t(2147)]) {
      const e = this[t(597)](x);
      return _(e, { code: J.invalid_type, expected: t0.symbol, received: e[t(2055)] }), f0;
    }
    return re(x[t(1021)]);
  }
}
Cr.create = (i) => {
  const x = r;
  return new Cr({ typeName: l0[x(1824)], ...y0(i) });
};
class Lt extends P0 {
  [r(2270)](x) {
    const t = r;
    if (this[t(1460)](x) !== t0[t(2550)]) {
      const e = this[t(597)](x);
      return _(e, { code: J.invalid_type, expected: t0[t(2550)], received: e.parsedType }), f0;
    }
    return re(x[t(1021)]);
  }
}
Lt[r(799)] = (i) => new Lt({ typeName: l0.ZodUndefined, ...y0(i) });
class $t extends P0 {
  [r(2270)](x) {
    const t = r;
    if (this._getType(x) !== t0.null) {
      const e = this[t(597)](x);
      return _(e, { code: J[t(2146)], expected: t0[t(1237)], received: e[t(2055)] }), f0;
    }
    return re(x[t(1021)]);
  }
}
$t.create = (i) => new $t({ typeName: l0.ZodNull, ...y0(i) });
class zt extends P0 {
  constructor() {
    const x = r;
    super(...arguments), this[x(2142)] = !0;
  }
  [r(2270)](x) {
    return re(x[r(1021)]);
  }
}
zt.create = (i) => {
  const x = r;
  return new zt({ typeName: l0[x(1389)], ...y0(i) });
};
class Ht extends P0 {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  [r(2270)](x) {
    return re(x[r(1021)]);
  }
}
Ht[r(799)] = (i) => {
  const x = r;
  return new Ht({ typeName: l0[x(2504)], ...y0(i) });
};
class Pe extends P0 {
  [r(2270)](x) {
    const t = r, a = this[t(597)](x);
    return _(a, { code: J[t(2146)], expected: t0[t(1965)], received: a[t(2055)] }), f0;
  }
}
Pe.create = (i) => new Pe({ typeName: l0.ZodNever, ...y0(i) });
class Ut extends P0 {
  _parse(x) {
    const t = r;
    if (this[t(1460)](x) !== t0[t(2550)]) {
      const e = this[t(597)](x);
      return _(e, { code: J[t(2146)], expected: t0.void, received: e[t(2055)] }), f0;
    }
    return re(x[t(1021)]);
  }
}
Ut[r(799)] = (i) => new Ut({ typeName: l0.ZodVoid, ...y0(i) });
class le extends P0 {
  [r(2270)](x) {
    const t = r, { ctx: a, status: e } = this[t(843)](x), s = this._def;
    if (a[t(2055)] !== t0[t(1912)]) return _(a, { code: J[t(2146)], expected: t0[t(1912)], received: a[t(2055)] }), f0;
    if (s[t(2027)] !== null) {
      const o = a[t(1021)][t(520)] > s.exactLength[t(2615)], c = a[t(1021)].length < s[t(2027)][t(2615)];
      (o || c) && (_(a, { code: o ? J[t(306)] : J[t(785)], minimum: c ? s[t(2027)][t(2615)] : void 0, maximum: o ? s[t(2027)][t(2615)] : void 0, type: "array", inclusive: !0, exact: !0, message: s[t(2027)].message }), e[t(1083)]());
    }
    if (s.minLength !== null && a[t(1021)][t(520)] < s.minLength[t(2615)] && (_(a, { code: J[t(785)], minimum: s.minLength[t(2615)], type: t(1912), inclusive: !0, exact: !1, message: s.minLength[t(2235)] }), e[t(1083)]()), s[t(1736)] !== null && a[t(1021)][t(520)] > s[t(1736)].value && (_(a, { code: J[t(306)], maximum: s.maxLength[t(2615)], type: "array", inclusive: !0, exact: !1, message: s.maxLength[t(2235)] }), e[t(1083)]()), a.common[t(2591)]) return Promise[t(1068)]([...a[t(1021)]][t(2388)]((o, c) => {
      const u = t;
      return s[u(2043)][u(741)](new he(a, o, a[u(2483)], c));
    }))[t(1124)]((o) => _0[t(260)](e, o));
    const n = [...a[t(1021)]][t(2388)]((o, c) => {
      const u = t;
      return s.type[u(671)](new he(a, o, a[u(2483)], c));
    });
    return _0[t(260)](e, n);
  }
  get [r(2572)]() {
    const x = r;
    return this._def[x(2043)];
  }
  min(x, t) {
    const a = r;
    return new le({ ...this[a(2110)], minLength: { value: x, message: r0[a(696)](t) } });
  }
  [r(2428)](x, t) {
    const a = r;
    return new le({ ...this._def, maxLength: { value: x, message: r0[a(696)](t) } });
  }
  [r(520)](x, t) {
    const a = r;
    return new le({ ...this._def, exactLength: { value: x, message: r0[a(696)](t) } });
  }
  [r(1602)](x) {
    return this[r(1150)](1, x);
  }
}
le[r(799)] = (i, x) => {
  const t = r;
  return new le({ type: i, minLength: null, maxLength: null, exactLength: null, typeName: l0[t(1175)], ...y0(x) });
};
function He(i) {
  const x = r;
  if (i instanceof G0) {
    const t = {};
    for (const a in i[x(467)]) {
      const e = i[x(467)][a];
      t[a] = we[x(799)](He(e));
    }
    return new G0({ ...i[x(2110)], shape: () => t });
  } else
    return i instanceof le ? new le({ ...i[x(2110)], type: He(i[x(2572)]) }) : i instanceof we ? we[x(799)](He(i.unwrap())) : i instanceof Me ? Me[x(799)](He(i[x(271)]())) : i instanceof De ? De[x(799)](i[x(2386)][x(2388)]((t) => He(t))) : i;
}
class G0 extends P0 {
  constructor() {
    const x = r;
    super(...arguments), this[x(677)] = null, this[x(2443)] = this[x(816)], this.augment = this.extend;
  }
  [r(2149)]() {
    const x = r;
    if (this[x(677)] !== null) return this._cached;
    const t = this[x(2110)][x(467)](), a = C0[x(1077)](t);
    return this[x(677)] = { shape: t, keys: a }, this[x(677)];
  }
  [r(2270)](x) {
    const t = r;
    if (this[t(1460)](x) !== t0[t(1791)]) {
      const d = this[t(597)](x);
      return _(d, { code: J[t(2146)], expected: t0[t(1791)], received: d[t(2055)] }), f0;
    }
    const { status: e, ctx: s } = this[t(843)](x), { shape: n, keys: o } = this[t(2149)](), c = [];
    if (!(this[t(2110)][t(996)] instanceof Pe && this[t(2110)].unknownKeys === "strip")) for (const d in s[t(1021)])
      !o[t(578)](d) && c[t(1131)](d);
    const u = [];
    for (const d of o) {
      const f = n[d], l = s[t(1021)][d];
      u[t(1131)]({ key: { status: t(481), value: d }, value: f[t(2270)](new he(s, l, s[t(2483)], d)), alwaysSet: d in s.data });
    }
    if (this[t(2110)][t(996)] instanceof Pe) {
      const d = this[t(2110)][t(969)];
      if (d === t(816)) for (const f of c)
        u[t(1131)]({ key: { status: t(481), value: f }, value: { status: t(481), value: s[t(1021)][f] } });
      else if (d === "strict") c[t(520)] > 0 && (_(s, { code: J.unrecognized_keys, keys: c }), e.dirty());
      else if (d !== "strip") throw new Error(t(2161));
    } else {
      const d = this[t(2110)][t(996)];
      for (const f of c) {
        const l = s[t(1021)][f];
        u.push({ key: { status: t(481), value: f }, value: d[t(2270)](new he(s, l, s[t(2483)], f)), alwaysSet: f in s.data });
      }
    }
    return s[t(176)][t(2591)] ? Promise[t(772)]()[t(1124)](async () => {
      const d = t, f = [];
      for (const l of u) {
        const g = await l[d(594)], h = await l[d(2615)];
        f[d(1131)]({ key: g, value: h, alwaysSet: l[d(2259)] });
      }
      return f;
    })[t(1124)]((d) => _0[t(2517)](e, d)) : _0[t(2517)](e, u);
  }
  get [r(467)]() {
    return this[r(2110)].shape();
  }
  strict(x) {
    const t = r;
    return r0.errToObj, new G0({ ...this[t(2110)], unknownKeys: t(744), ...x !== void 0 ? { errorMap: (a, e) => {
      var o, c;
      const s = t, n = ((c = (o = this[s(2110)])[s(1568)]) == null ? void 0 : c.call(o, a, e).message) ?? e[s(2025)];
      return a[s(1277)] === s(1200) ? { message: r0[s(542)](x)[s(2235)] ?? n } : { message: n };
    } } : {} });
  }
  strip() {
    const x = r;
    return new G0({ ...this[x(2110)], unknownKeys: "strip" });
  }
  [r(816)]() {
    const x = r;
    return new G0({ ...this[x(2110)], unknownKeys: x(816) });
  }
  [r(1478)](x) {
    const t = r;
    return new G0({ ...this[t(2110)], shape: () => ({ ...this._def[t(467)](), ...x }) });
  }
  merge(x) {
    const t = r;
    return new G0({ unknownKeys: x[t(2110)][t(969)], catchall: x._def[t(996)], shape: () => ({ ...this[t(2110)][t(467)](), ...x._def[t(467)]() }), typeName: l0.ZodObject });
  }
  [r(1942)](x, t) {
    return this[r(1932)]({ [x]: t });
  }
  [r(996)](x) {
    const t = r;
    return new G0({ ...this[t(2110)], catchall: x });
  }
  [r(2567)](x) {
    const t = r, a = {};
    for (const e of C0[t(1077)](x))
      x[e] && this[t(467)][e] && (a[e] = this.shape[e]);
    return new G0({ ...this[t(2110)], shape: () => a });
  }
  omit(x) {
    const t = r, a = {};
    for (const e of C0[t(1077)](this[t(467)]))
      !x[e] && (a[e] = this[t(467)][e]);
    return new G0({ ...this[t(2110)], shape: () => a });
  }
  [r(877)]() {
    return He(this);
  }
  [r(815)](x) {
    const t = r, a = {};
    for (const e of C0.objectKeys(this[t(467)])) {
      const s = this[t(467)][e];
      x && !x[e] ? a[e] = s : a[e] = s[t(965)]();
    }
    return new G0({ ...this._def, shape: () => a });
  }
  [r(2344)](x) {
    const t = r, a = {};
    for (const e of C0[t(1077)](this[t(467)]))
      if (x && !x[e]) a[e] = this[t(467)][e];
      else {
        let n = this[t(467)][e];
        for (; n instanceof we; )
          n = n[t(2110)][t(156)];
        a[e] = n;
      }
    return new G0({ ...this[t(2110)], shape: () => a });
  }
  [r(305)]() {
    return Os(C0[r(1077)](this.shape));
  }
}
G0[r(799)] = (i, x) => {
  const t = r;
  return new G0({ shape: () => i, unknownKeys: t(1863), catchall: Pe.create(), typeName: l0[t(2210)], ...y0(x) });
}, G0[r(2519)] = (i, x) => {
  const t = r;
  return new G0({ shape: () => i, unknownKeys: t(744), catchall: Pe.create(), typeName: l0[t(2210)], ...y0(x) });
}, G0[r(297)] = (i, x) => {
  const t = r;
  return new G0({ shape: i, unknownKeys: t(1863), catchall: Pe[t(799)](), typeName: l0.ZodObject, ...y0(x) });
};
class gx extends P0 {
  [r(2270)](x) {
    const t = r, { ctx: a } = this[t(843)](x), e = this._def[t(1287)];
    function s(n) {
      const o = t;
      for (const u of n)
        if (u[o(2202)][o(1345)] === o(481)) return u[o(2202)];
      for (const u of n)
        if (u[o(2202)][o(1345)] === o(1083)) return a[o(176)][o(2208)][o(1131)](...u[o(586)][o(176)][o(2208)]), u[o(2202)];
      const c = n[o(2388)]((u) => new Se(u[o(586)][o(176)][o(2208)]));
      return _(a, { code: J[o(1673)], unionErrors: c }), f0;
    }
    if (a[t(176)][t(2591)]) return Promise.all(e[t(2388)](async (n) => {
      const o = t, c = { ...a, common: { ...a[o(176)], issues: [] }, parent: null };
      return { result: await n[o(741)]({ data: a.data, path: a[o(2483)], parent: c }), ctx: c };
    }))[t(1124)](s);
    {
      let n;
      const o = [];
      for (const u of e) {
        const d = { ...a, common: { ...a[t(176)], issues: [] }, parent: null }, f = u[t(671)]({ data: a[t(1021)], path: a[t(2483)], parent: d });
        if (f[t(1345)] === t(481)) return f;
        f[t(1345)] === "dirty" && !n && (n = { result: f, ctx: d }), d[t(176)][t(2208)].length && o[t(1131)](d.common[t(2208)]);
      }
      if (n) return a[t(176)].issues[t(1131)](...n[t(586)][t(176)][t(2208)]), n[t(2202)];
      const c = o[t(2388)]((u) => new Se(u));
      return _(a, { code: J[t(1673)], unionErrors: c }), f0;
    }
  }
  get [r(1287)]() {
    const x = r;
    return this[x(2110)][x(1287)];
  }
}
gx.create = (i, x) => {
  const t = r;
  return new gx({ options: i, typeName: l0[t(2543)], ...y0(x) });
};
const be = (i) => {
  const x = r;
  return i instanceof Wt ? be(i[x(1548)]) : i instanceof Te ? be(i.innerType()) : i instanceof vx ? [i[x(2615)]] : i instanceof je ? i[x(1287)] : i instanceof Zt ? C0.objectValues(i[x(1497)]) : i instanceof Sx ? be(i[x(2110)][x(156)]) : i instanceof Lt ? [void 0] : i instanceof $t ? [null] : i instanceof we ? [void 0, ...be(i[x(271)]())] : i instanceof Me ? [null, ...be(i[x(271)]())] : i instanceof Ds ? be(i[x(271)]()) : i instanceof Ex ? be(i.unwrap()) : i instanceof kx ? be(i[x(2110)][x(156)]) : [];
};
class xr extends P0 {
  _parse(x) {
    const t = r, { ctx: a } = this._processInputParams(x);
    if (a[t(2055)] !== t0[t(1791)]) return _(a, { code: J[t(2146)], expected: t0[t(1791)], received: a[t(2055)] }), f0;
    const e = this.discriminator, s = a[t(1021)][e], n = this[t(1225)].get(s);
    return n ? a[t(176)].async ? n[t(741)]({ data: a[t(1021)], path: a[t(2483)], parent: a }) : n[t(671)]({ data: a.data, path: a[t(2483)], parent: a }) : (_(a, { code: J[t(1905)], options: Array[t(1210)](this.optionsMap[t(1574)]()), path: [e] }), f0);
  }
  get discriminator() {
    const x = r;
    return this[x(2110)][x(1065)];
  }
  get [r(1287)]() {
    const x = r;
    return this[x(2110)][x(1287)];
  }
  get [r(1225)]() {
    const x = r;
    return this[x(2110)][x(1225)];
  }
  static [r(799)](x, t, a) {
    const e = r, s = /* @__PURE__ */ new Map();
    for (const n of t) {
      const o = be(n[e(467)][x]);
      if (!o.length) throw new Error(e(2466) + x + e(1710));
      for (const c of o) {
        if (s[e(399)](c)) throw new Error("Discriminator property " + String(x) + e(879) + String(c));
        s.set(c, n);
      }
    }
    return new xr({ typeName: l0.ZodDiscriminatedUnion, discriminator: x, options: t, optionsMap: s, ...y0(a) });
  }
}
function Vt(i, x) {
  const t = r, a = Ie(i), e = Ie(x);
  if (i === x) return { valid: !0, data: i };
  if (a === t0[t(1791)] && e === t0[t(1791)]) {
    const s = C0.objectKeys(x), n = C0[t(1077)](i)[t(333)]((c) => s[t(417)](c) !== -1), o = { ...i, ...x };
    for (const c of n) {
      const u = Vt(i[c], x[c]);
      if (!u[t(481)]) return { valid: !1 };
      o[c] = u[t(1021)];
    }
    return { valid: !0, data: o };
  } else if (a === t0[t(1912)] && e === t0[t(1912)]) {
    if (i.length !== x.length) return { valid: !1 };
    const s = [];
    for (let n = 0; n < i[t(520)]; n++) {
      const o = i[n], c = x[n], u = Vt(o, c);
      if (!u[t(481)]) return { valid: !1 };
      s.push(u.data);
    }
    return { valid: !0, data: s };
  } else return a === t0[t(662)] && e === t0[t(662)] && +i == +x ? { valid: !0, data: i } : { valid: !1 };
}
class bx extends P0 {
  _parse(x) {
    const t = r, { status: a, ctx: e } = this[t(843)](x), s = (n, o) => {
      const c = t;
      if (Ir(n) || Ir(o)) return f0;
      const u = Vt(n[c(2615)], o[c(2615)]);
      return u.valid ? ((Pr(n) || Pr(o)) && a[c(1083)](), { status: a[c(2615)], value: u.data }) : (_(e, { code: J[c(2635)] }), f0);
    };
    return e[t(176)][t(2591)] ? Promise.all([this[t(2110)][t(1653)]._parseAsync({ data: e[t(1021)], path: e.path, parent: e }), this._def[t(1238)][t(741)]({ data: e[t(1021)], path: e[t(2483)], parent: e })])[t(1124)](([n, o]) => s(n, o)) : s(this[t(2110)].left._parseSync({ data: e[t(1021)], path: e[t(2483)], parent: e }), this._def[t(1238)][t(671)]({ data: e[t(1021)], path: e[t(2483)], parent: e }));
  }
}
bx[r(799)] = (i, x, t) => {
  const a = r;
  return new bx({ left: i, right: x, typeName: l0[a(2189)], ...y0(t) });
};
class De extends P0 {
  [r(2270)](x) {
    const t = r, { status: a, ctx: e } = this[t(843)](x);
    if (e[t(2055)] !== t0[t(1912)]) return _(e, { code: J[t(2146)], expected: t0[t(1912)], received: e[t(2055)] }), f0;
    if (e[t(1021)].length < this[t(2110)].items.length) return _(e, { code: J[t(785)], minimum: this._def.items[t(520)], inclusive: !0, exact: !1, type: t(1912) }), f0;
    !this[t(2110)].rest && e.data[t(520)] > this[t(2110)][t(2386)][t(520)] && (_(e, { code: J[t(306)], maximum: this[t(2110)][t(2386)][t(520)], inclusive: !0, exact: !1, type: t(1912) }), a[t(1083)]());
    const n = [...e[t(1021)]][t(2388)]((o, c) => {
      const u = t, d = this._def.items[c] || this[u(2110)][u(703)];
      return d ? d[u(2270)](new he(e, o, e[u(2483)], c)) : null;
    }).filter((o) => !!o);
    return e[t(176)][t(2591)] ? Promise[t(1068)](n).then((o) => _0[t(260)](a, o)) : _0[t(260)](a, n);
  }
  get [r(2386)]() {
    return this[r(2110)].items;
  }
  [r(703)](x) {
    const t = r;
    return new De({ ...this[t(2110)], rest: x });
  }
}
De[r(799)] = (i, x) => {
  const t = r;
  if (!Array[t(1396)](i)) throw new Error(t(1239));
  return new De({ items: i, typeName: l0.ZodTuple, rest: null, ...y0(x) });
};
class yx extends P0 {
  get [r(1445)]() {
    const x = r;
    return this[x(2110)][x(2495)];
  }
  get [r(2395)]() {
    const x = r;
    return this[x(2110)][x(1408)];
  }
  [r(2270)](x) {
    const t = r, { status: a, ctx: e } = this[t(843)](x);
    if (e.parsedType !== t0[t(1791)]) return _(e, { code: J[t(2146)], expected: t0[t(1791)], received: e[t(2055)] }), f0;
    const s = [], n = this[t(2110)][t(2495)], o = this[t(2110)][t(1408)];
    for (const c in e.data)
      s[t(1131)]({ key: n._parse(new he(e, c, e.path, c)), value: o[t(2270)](new he(e, e[t(1021)][c], e[t(2483)], c)), alwaysSet: c in e[t(1021)] });
    return e[t(176)][t(2591)] ? _0.mergeObjectAsync(a, s) : _0[t(2517)](a, s);
  }
  get element() {
    const x = r;
    return this[x(2110)][x(1408)];
  }
  static [r(799)](x, t, a) {
    const e = r;
    return t instanceof P0 ? new yx({ keyType: x, valueType: t, typeName: l0[e(836)], ...y0(a) }) : new yx({ keyType: ve[e(799)](), valueType: x, typeName: l0[e(836)], ...y0(t) });
  }
}
class Fr extends P0 {
  get [r(1445)]() {
    const x = r;
    return this[x(2110)][x(2495)];
  }
  get [r(2395)]() {
    const x = r;
    return this._def[x(1408)];
  }
  _parse(x) {
    const t = r, { status: a, ctx: e } = this[t(843)](x);
    if (e.parsedType !== t0[t(2388)]) return _(e, { code: J[t(2146)], expected: t0.map, received: e[t(2055)] }), f0;
    const s = this[t(2110)][t(2495)], n = this[t(2110)][t(1408)], o = [...e[t(1021)].entries()].map(([c, u], d) => {
      const f = t;
      return { key: s._parse(new he(e, c, e[f(2483)], [d, "key"])), value: n[f(2270)](new he(e, u, e[f(2483)], [d, f(2615)])) };
    });
    if (e.common[t(2591)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise[t(772)]()[t(1124)](async () => {
        const u = t;
        for (const d of o) {
          const f = await d[u(594)], l = await d.value;
          if (f[u(1345)] === u(2602) || l.status === u(2602)) return f0;
          (f[u(1345)] === u(1083) || l[u(1345)] === u(1083)) && a[u(1083)](), c[u(2525)](f[u(2615)], l[u(2615)]);
        }
        return { status: a[u(2615)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of o) {
        const d = u[t(594)], f = u[t(2615)];
        if (d[t(1345)] === "aborted" || f[t(1345)] === t(2602)) return f0;
        (d.status === t(1083) || f[t(1345)] === t(1083)) && a[t(1083)](), c.set(d[t(2615)], f.value);
      }
      return { status: a[t(2615)], value: c };
    }
  }
}
Fr[r(799)] = (i, x, t) => {
  const a = r;
  return new Fr({ valueType: x, keyType: i, typeName: l0[a(2126)], ...y0(t) });
};
class tx extends P0 {
  [r(2270)](x) {
    const t = r, { status: a, ctx: e } = this[t(843)](x);
    if (e[t(2055)] !== t0[t(2525)]) return _(e, { code: J[t(2146)], expected: t0[t(2525)], received: e.parsedType }), f0;
    const s = this[t(2110)];
    s.minSize !== null && e[t(1021)][t(1644)] < s[t(1317)].value && (_(e, { code: J[t(785)], minimum: s[t(1317)][t(2615)], type: t(2525), inclusive: !0, exact: !1, message: s[t(1317)][t(2235)] }), a.dirty()), s.maxSize !== null && e[t(1021)][t(1644)] > s[t(916)][t(2615)] && (_(e, { code: J[t(306)], maximum: s.maxSize[t(2615)], type: "set", inclusive: !0, exact: !1, message: s[t(916)][t(2235)] }), a.dirty());
    const n = this[t(2110)][t(1408)];
    function o(u) {
      const d = t, f = /* @__PURE__ */ new Set();
      for (const l of u) {
        if (l[d(1345)] === d(2602)) return f0;
        l[d(1345)] === "dirty" && a[d(1083)](), f[d(2279)](l.value);
      }
      return { status: a[d(2615)], value: f };
    }
    const c = [...e[t(1021)].values()][t(2388)]((u, d) => n._parse(new he(e, u, e.path, d)));
    return e[t(176)][t(2591)] ? Promise[t(1068)](c)[t(1124)]((u) => o(u)) : o(c);
  }
  [r(1150)](x, t) {
    const a = r;
    return new tx({ ...this[a(2110)], minSize: { value: x, message: r0[a(696)](t) } });
  }
  [r(2428)](x, t) {
    const a = r;
    return new tx({ ...this._def, maxSize: { value: x, message: r0[a(696)](t) } });
  }
  [r(1644)](x, t) {
    const a = r;
    return this.min(x, t)[a(2428)](x, t);
  }
  [r(1602)](x) {
    return this[r(1150)](1, x);
  }
}
tx[r(799)] = (i, x) => new tx({ valueType: i, minSize: null, maxSize: null, typeName: l0.ZodSet, ...y0(x) });
class Wt extends P0 {
  get [r(1548)]() {
    const x = r;
    return this[x(2110)][x(808)]();
  }
  [r(2270)](x) {
    const t = r, { ctx: a } = this._processInputParams(x);
    return this._def[t(808)]()[t(2270)]({ data: a.data, path: a[t(2483)], parent: a });
  }
}
Wt[r(799)] = (i, x) => {
  const t = r;
  return new Wt({ getter: i, typeName: l0[t(747)], ...y0(x) });
};
class vx extends P0 {
  _parse(x) {
    const t = r;
    if (x.data !== this[t(2110)][t(2615)]) {
      const a = this._getOrReturnCtx(x);
      return _(a, { received: a[t(1021)], code: J[t(2371)], expected: this._def.value }), f0;
    }
    return { status: "valid", value: x[t(1021)] };
  }
  get [r(2615)]() {
    const x = r;
    return this[x(2110)][x(2615)];
  }
}
vx[r(799)] = (i, x) => {
  const t = r;
  return new vx({ value: i, typeName: l0[t(1288)], ...y0(x) });
};
function Os(i, x) {
  const t = r;
  return new je({ values: i, typeName: l0[t(906)], ...y0(x) });
}
class je extends P0 {
  _parse(x) {
    const t = r;
    if (typeof x[t(1021)] != "string") {
      const a = this[t(597)](x), e = this[t(2110)].values;
      return _(a, { expected: C0[t(829)](e), received: a[t(2055)], code: J[t(2146)] }), f0;
    }
    if (!this[t(1074)] && (this[t(1074)] = new Set(this[t(2110)][t(2226)])), !this[t(1074)].has(x.data)) {
      const a = this[t(597)](x), e = this[t(2110)][t(2226)];
      return _(a, { received: a[t(1021)], code: J[t(2273)], options: e }), f0;
    }
    return re(x[t(1021)]);
  }
  get options() {
    return this._def.values;
  }
  get [r(1497)]() {
    const x = r, t = {};
    for (const a of this._def[x(2226)])
      t[a] = a;
    return t;
  }
  get [r(142)]() {
    const x = r, t = {};
    for (const a of this[x(2110)][x(2226)])
      t[a] = a;
    return t;
  }
  get [r(1784)]() {
    const x = r, t = {};
    for (const a of this[x(2110)][x(2226)])
      t[a] = a;
    return t;
  }
  [r(1906)](x, t = this._def) {
    return je.create(x, { ...this._def, ...t });
  }
  [r(1928)](x, t = this[r(2110)]) {
    const a = r;
    return je.create(this.options.filter((e) => !x.includes(e)), { ...this[a(2110)], ...t });
  }
}
je.create = Os;
class Zt extends P0 {
  [r(2270)](x) {
    const t = r, a = C0.getValidEnumValues(this[t(2110)][t(2226)]), e = this[t(597)](x);
    if (e[t(2055)] !== t0[t(718)] && e[t(2055)] !== t0[t(191)]) {
      const s = C0[t(1676)](a);
      return _(e, { expected: C0[t(829)](s), received: e[t(2055)], code: J[t(2146)] }), f0;
    }
    if (!this._cache && (this[t(1074)] = new Set(C0[t(1705)](this[t(2110)].values))), !this._cache[t(399)](x[t(1021)])) {
      const s = C0[t(1676)](a);
      return _(e, { received: e[t(1021)], code: J[t(2273)], options: s }), f0;
    }
    return re(x.data);
  }
  get enum() {
    const x = r;
    return this[x(2110)][x(2226)];
  }
}
Zt[r(799)] = (i, x) => {
  const t = r;
  return new Zt({ values: i, typeName: l0[t(1267)], ...y0(x) });
};
class wx extends P0 {
  [r(271)]() {
    const x = r;
    return this[x(2110)][x(2043)];
  }
  [r(2270)](x) {
    const t = r, { ctx: a } = this[t(843)](x);
    if (a[t(2055)] !== t0[t(1623)] && a[t(176)][t(2591)] === !1) return _(a, { code: J[t(2146)], expected: t0.promise, received: a[t(2055)] }), f0;
    const e = a.parsedType === t0[t(1623)] ? a[t(1021)] : Promise[t(772)](a[t(1021)]);
    return re(e[t(1124)]((s) => {
      const n = t;
      return this[n(2110)].type[n(1743)](s, { path: a[n(2483)], errorMap: a[n(176)][n(2205)] });
    }));
  }
}
wx[r(799)] = (i, x) => new wx({ type: i, typeName: l0.ZodPromise, ...y0(x) });
class Te extends P0 {
  [r(156)]() {
    return this._def.schema;
  }
  [r(2262)]() {
    const x = r;
    return this[x(2110)][x(1548)][x(2110)][x(1838)] === l0.ZodEffects ? this[x(2110)][x(1548)][x(2262)]() : this[x(2110)].schema;
  }
  [r(2270)](x) {
    const t = r, { status: a, ctx: e } = this[t(843)](x), s = this[t(2110)][t(2548)] || null, n = { addIssue: (o) => {
      const c = t;
      _(e, o), o[c(955)] ? a.abort() : a[c(1083)]();
    }, get path() {
      return e[t(2483)];
    } };
    if (n[t(1801)] = n[t(1801)].bind(n), s[t(2043)] === "preprocess") {
      const o = s[t(159)](e.data, n);
      if (e.common[t(2591)]) return Promise[t(772)](o)[t(1124)](async (c) => {
        const u = t;
        if (a[u(2615)] === "aborted") return f0;
        const d = await this[u(2110)].schema[u(741)]({ data: c, path: e[u(2483)], parent: e });
        return d[u(1345)] === u(2602) ? f0 : d[u(1345)] === u(1083) ? Qe(d[u(2615)]) : a[u(2615)] === u(1083) ? Qe(d.value) : d;
      });
      {
        if (a[t(2615)] === t(2602)) return f0;
        const c = this[t(2110)][t(1548)]._parseSync({ data: o, path: e[t(2483)], parent: e });
        return c.status === t(2602) ? f0 : c[t(1345)] === t(1083) || a.value === t(1083) ? Qe(c[t(2615)]) : c;
      }
    }
    if (s.type === t(2051)) {
      const o = (c) => {
        const u = t, d = s[u(2051)](c, n);
        if (e.common[u(2591)]) return Promise[u(772)](d);
        if (d instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return c;
      };
      if (e.common[t(2591)] === !1) {
        const c = this._def[t(1548)][t(671)]({ data: e[t(1021)], path: e.path, parent: e });
        return c[t(1345)] === t(2602) ? f0 : (c.status === "dirty" && a[t(1083)](), o(c[t(2615)]), { status: a.value, value: c[t(2615)] });
      } else return this[t(2110)][t(1548)][t(741)]({ data: e.data, path: e.path, parent: e })[t(1124)]((c) => {
        const u = t;
        return c[u(1345)] === u(2602) ? f0 : (c[u(1345)] === u(1083) && a[u(1083)](), o(c[u(2615)])[u(1124)](() => {
          const d = u;
          return { status: a[d(2615)], value: c[d(2615)] };
        }));
      });
    }
    if (s[t(2043)] === t(159))
      if (e[t(176)][t(2591)] === !1) {
        const o = this[t(2110)][t(1548)]._parseSync({ data: e[t(1021)], path: e[t(2483)], parent: e });
        if (!Ue(o)) return f0;
        const c = s[t(159)](o.value, n);
        if (c instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: a[t(2615)], value: c };
      } else return this[t(2110)].schema._parseAsync({ data: e.data, path: e[t(2483)], parent: e }).then((o) => {
        const c = t;
        return Ue(o) ? Promise[c(772)](s[c(159)](o.value, n))[c(1124)]((u) => ({ status: a[c(2615)], value: u })) : f0;
      });
    C0.assertNever(s);
  }
}
Te[r(799)] = (i, x, t) => new Te({ schema: i, typeName: l0.ZodEffects, effect: x, ...y0(t) }), Te[r(2196)] = (i, x, t) => {
  const a = r;
  return new Te({ schema: x, effect: { type: a(2437), transform: i }, typeName: l0[a(127)], ...y0(t) });
};
class we extends P0 {
  _parse(x) {
    const t = r;
    return this[t(1460)](x) === t0.undefined ? re(void 0) : this[t(2110)][t(156)][t(2270)](x);
  }
  [r(271)]() {
    const x = r;
    return this._def[x(156)];
  }
}
we[r(799)] = (i, x) => {
  const t = r;
  return new we({ innerType: i, typeName: l0[t(167)], ...y0(x) });
};
class Me extends P0 {
  [r(2270)](x) {
    const t = r;
    return this[t(1460)](x) === t0[t(1237)] ? re(null) : this[t(2110)][t(156)][t(2270)](x);
  }
  [r(271)]() {
    const x = r;
    return this[x(2110)][x(156)];
  }
}
Me[r(799)] = (i, x) => new Me({ innerType: i, typeName: l0.ZodNullable, ...y0(x) });
class Sx extends P0 {
  _parse(x) {
    const t = r, { ctx: a } = this[t(843)](x);
    let e = a[t(1021)];
    return a[t(2055)] === t0[t(2550)] && (e = this[t(2110)][t(1191)]()), this._def[t(156)][t(2270)]({ data: e, path: a.path, parent: a });
  }
  [r(1146)]() {
    const x = r;
    return this._def[x(156)];
  }
}
Sx[r(799)] = (i, x) => {
  const t = r;
  return new Sx({ innerType: i, typeName: l0[t(2e3)], defaultValue: typeof x[t(1535)] === t(1538) ? x[t(1535)] : () => x[t(1535)], ...y0(x) });
};
class kx extends P0 {
  [r(2270)](x) {
    const t = r, { ctx: a } = this[t(843)](x), e = { ...a, common: { ...a[t(176)], issues: [] } }, s = this._def[t(156)]._parse({ data: e[t(1021)], path: e[t(2483)], parent: { ...e } });
    return px(s) ? s[t(1124)]((n) => {
      const o = t;
      return { status: "valid", value: n[o(1345)] === o(481) ? n[o(2615)] : this._def[o(1998)]({ get error() {
        const c = o;
        return new Se(e.common[c(2208)]);
      }, input: e[o(1021)] }) };
    }) : { status: "valid", value: s[t(1345)] === t(481) ? s[t(2615)] : this._def[t(1998)]({ get error() {
      const n = t;
      return new Se(e.common[n(2208)]);
    }, input: e[t(1021)] }) };
  }
  [r(320)]() {
    const x = r;
    return this[x(2110)][x(156)];
  }
}
kx[r(799)] = (i, x) => {
  const t = r;
  return new kx({ innerType: i, typeName: l0[t(1370)], catchValue: typeof x[t(666)] === t(1538) ? x.catch : () => x[t(666)], ...y0(x) });
};
class Nr extends P0 {
  [r(2270)](x) {
    const t = r;
    if (this[t(1460)](x) !== t0.nan) {
      const e = this[t(597)](x);
      return _(e, { code: J[t(2146)], expected: t0[t(198)], received: e.parsedType }), f0;
    }
    return { status: t(481), value: x.data };
  }
}
Nr[r(799)] = (i) => {
  const x = r;
  return new Nr({ typeName: l0[x(1384)], ...y0(i) });
};
class Ds extends P0 {
  _parse(x) {
    const t = r, { ctx: a } = this._processInputParams(x), e = a[t(1021)];
    return this[t(2110)][t(2043)][t(2270)]({ data: e, path: a.path, parent: a });
  }
  [r(271)]() {
    return this[r(2110)].type;
  }
}
class tr extends P0 {
  [r(2270)](x) {
    const t = r, { status: a, ctx: e } = this._processInputParams(x);
    if (e[t(176)].async)
      return (async () => {
        const n = t, o = await this[n(2110)].in._parseAsync({ data: e.data, path: e.path, parent: e });
        return o[n(1345)] === n(2602) ? f0 : o.status === "dirty" ? (a[n(1083)](), Qe(o[n(2615)])) : this[n(2110)][n(2340)]._parseAsync({ data: o[n(2615)], path: e[n(2483)], parent: e });
      })();
    {
      const s = this._def.in[t(671)]({ data: e[t(1021)], path: e[t(2483)], parent: e });
      return s[t(1345)] === t(2602) ? f0 : s[t(1345)] === t(1083) ? (a[t(1083)](), { status: t(1083), value: s[t(2615)] }) : this[t(2110)][t(2340)][t(671)]({ data: s[t(2615)], path: e[t(2483)], parent: e });
    }
  }
  static [r(799)](x, t) {
    const a = r;
    return new tr({ in: x, out: t, typeName: l0[a(1155)] });
  }
}
class Ex extends P0 {
  _parse(x) {
    const t = r, a = this[t(2110)][t(156)][t(2270)](x), e = (s) => {
      const n = t;
      return Ue(s) && (s.value = Object[n(612)](s[n(2615)])), s;
    };
    return px(a) ? a.then((s) => e(s)) : e(a);
  }
  [r(271)]() {
    return this[r(2110)].innerType;
  }
}
Ex[r(799)] = (i, x) => {
  const t = r;
  return new Ex({ innerType: i, typeName: l0[t(482)], ...y0(x) });
};
var l0;
(function(i) {
  const x = r;
  i[x(932)] = x(932), i[x(1916)] = x(1916), i[x(1384)] = x(1384), i.ZodBigInt = x(199), i.ZodBoolean = x(883), i[x(1779)] = x(1779), i[x(1824)] = x(1824), i[x(1357)] = x(1357), i[x(1004)] = x(1004), i[x(1389)] = x(1389), i[x(2504)] = x(2504), i[x(1990)] = "ZodNever", i[x(240)] = x(240), i[x(1175)] = x(1175), i[x(2210)] = x(2210), i[x(2543)] = x(2543), i[x(926)] = x(926), i[x(2189)] = x(2189), i[x(1675)] = x(1675), i[x(836)] = x(836), i.ZodMap = "ZodMap", i.ZodSet = x(990), i.ZodFunction = "ZodFunction", i[x(747)] = x(747), i[x(1288)] = x(1288), i.ZodEnum = x(906), i[x(127)] = x(127), i[x(1267)] = x(1267), i[x(167)] = x(167), i[x(2178)] = x(2178), i[x(2e3)] = "ZodDefault", i[x(1370)] = "ZodCatch", i[x(1402)] = "ZodPromise", i.ZodBranded = x(634), i[x(1155)] = x(1155), i[x(482)] = x(482);
})(l0 || (l0 = {}));
const v = ve[r(799)], X = Ve[r(799)], e0 = Mt.create, N0 = zt.create, We = Ht[r(799)];
Pe[r(799)];
const $x = Ut[r(799)], v0 = le.create, k = G0[r(799)], J0 = gx[r(799)], js = xr[r(799)];
bx[r(799)], De[r(799)];
const U0 = yx[r(799)], x0 = vx.create, E0 = je.create;
wx[r(799)];
const K = we[r(799)];
Me[r(799)];
var Ya;
class ai {
  constructor(x, t) {
    h0(this, Ya);
    h0(this, "nodeId");
    const a = r;
    this[a(1903)] = x, this[a(1955)] = t;
  }
  get store() {
    const x = r, t = this[x(1903)][x(141)](this[x(1955)]);
    if (!t) throw new Error("No store found for node " + this.nodeId);
    return t;
  }
  get actions() {
    const x = r, t = this[x(1903)][x(1066)]()[x(1154)](this[x(1955)]);
    if (!t) throw new Error(x(316) + this[x(1955)]);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s !== n(718)) return;
      const o = t[n(528)][s], c = s[n(243)](n(1376));
      if (!o && !c) throw new Error(n(903) + s + " not found for node " + this[n(1955)]);
      return async (u, d) => {
        const f = n, l = this[f(1269)]();
        if (!l) throw new Error(f(2584) + this[f(1955)]);
        const { transport: g, path: h } = l, m = this[f(1903)][f(1598)]();
        if (!(o != null && o[f(697)])) {
          const S = N0();
          let E;
          if (h[f(520)] === 2) E = await g[f(2300)]({ method: f(1207), params: { action: s, data: u, sourceNodeId: m } }, S);
          else try {
            E = await g.request({ method: f(1207), params: { action: f(791), data: { targetNodeId: this.nodeId, targetAction: s, targetData: u, forwardPath: h.slice(1) }, sourceNodeId: m } }, S);
          } catch (O) {
            throw console[f(259)](f(1537) + s + ":", O), console[f(259)]({ targetNodeId: this[f(1955)], targetAction: s, targetData: u, forwardPath: h[f(1597)](1) }), O;
          }
          return E;
        }
        let y;
        return h[f(520)] === 2 ? y = g[f(208)]({ action: s, data: u, sourceNodeId: m }, o[f(2303)], d) : y = g[f(208)]({ action: f(791), data: { targetNodeId: this[f(1955)], targetAction: s, targetData: u, forwardPath: h[f(1597)](1) }, sourceNodeId: m }, o[f(2303)], d), y;
      };
    } });
  }
  [(Ya = r(1903), r(1269))]() {
    const x = r;
    return this[x(1903)][x(1284)](this[x(1955)]);
  }
}
var _a, es;
class Ms {
  constructor(x) {
    h0(this, es);
    h0(this, "actionManager");
    h0(this, _a);
    const t = r;
    this.graphInstance = x, this[t(2128)] = x[t(2128)], this.broadcastManager = x[t(1921)];
  }
  [(es = r(1903), _a = r(1921), r(2390))]({ store: x, storeName: t, onStateUpdate: a, requestInitialState: e }) {
    const s = r;
    this[s(1921)][s(1023)](s(285) + t, (n) => {
      const o = s;
      try {
        n[o(526)] !== this[o(1903)][o(1598)]() && a(n[o(2007)]);
      } catch (c) {
        console[o(259)](o(2035) + t + ":", c);
      }
    });
  }
  [r(739)]({ store: x, storeName: t, sendStateUpdate: a, onInitialStateRequested: e }) {
    const s = r, n = this[s(1903)].getCurrentNodeId(), o = async (d, f = !1) => {
      const l = s;
      if (this[l(1918)]()) try {
        await this.broadcastManager[l(1696)](l(285) + t, { storeName: t, sourceNodeId: n, stateUpdate: d, isInitialState: f });
      } catch (h) {
        console.error(l(1751) + t + ":", h);
      }
    }, c = x.subscribe((d) => {
      o(d, !1);
    });
    e(() => {
      o(x[s(1323)](), !0);
    });
    const u = "__internal_requestInitialState_" + t;
    return this[s(2128)][s(389)](u, async () => {
      const d = s, f = x[d(1323)]();
      return await o(f, !0), { success: !0 };
    }), this[s(1921)][s(1023)](s(2268), async (d) => {
      const f = s;
      try {
        (d[f(275)] === n || d[f(1584)] === n) && await o(x[f(1323)](), !0);
      } catch {
      }
    }), () => {
      var f;
      const d = s;
      c(), (f = this[d(2128)][d(1734)]) == null || f[d(292)](u);
    };
  }
  [r(1918)]() {
    var t;
    const x = r;
    try {
      const a = this[x(1903)][x(251)], e = a && a[x(915)]() > 0, s = ((t = this[x(1921)].mountedEndpoints) == null ? void 0 : t[x(1644)]) > 0;
      return e || s;
    } catch {
      return !!this[x(1921)];
    }
  }
  async broadcastCurrentState(x, t) {
    const a = r, e = this[a(1903)][a(1598)]();
    if (this.isTransportReady()) try {
      await this[a(1921)][a(1696)](a(285) + t, { storeName: t, sourceNodeId: e, stateUpdate: x.getState(), isInitialState: !0 });
    } catch {
    }
  }
}
function si({ graphInstance: i, store: x, name: t }) {
  const a = r, e = new Ms(i), s = (o) => {
    const c = B, u = x[c(1323)](), d = { ...u, ...o };
    x[c(1657)](d);
  }, n = async () => {
    const o = B, c = "__internal_requestInitialState_" + t;
    try {
      const u = i[o(1154)](t);
      u && u[o(528)] && u[o(528)][c] && await u[o(528)][c]();
    } catch (u) {
      console[o(183)](o(444) + t + ":", u);
    }
  };
  e[a(2390)]({ store: x, storeName: t, onStateUpdate: s, requestInitialState: n });
}
function ni({ graphInstance: i, store: x, name: t }) {
  const a = r, e = new Ms(i), s = async (o) => {
  }, n = (o) => {
  };
  return e[a(739)]({ store: x, storeName: t, sendStateUpdate: s, onInitialStateRequested: n });
}
var xs, ts, rs;
class ii {
  constructor(x) {
    h0(this, rs, /* @__PURE__ */ new Map());
    h0(this, ts, /* @__PURE__ */ new Map());
    h0(this, xs, /* @__PURE__ */ new Set());
    h0(this, "currentNodeId");
    this.currentNodeId = x;
  }
  [(rs = r(416), ts = r(1931), xs = r(1958), r(1097))](x) {
    return (t) => {
      const a = B;
      if (t && t[a(607)] === this[a(2195)]) return;
      const e = this[a(416)][a(2311)](x);
      if (e) {
        const { __origin: s, forwarded: n, ...o } = t || {};
        for (const c of e)
          try {
            c(o);
          } catch (u) {
            console[a(259)]("Error in broadcast handler for " + x + ":", u);
          }
      }
      !t.forwarded && this[a(1436)](x, t);
    };
  }
  async [r(1436)](x, t) {
    const a = r;
    try {
      const e = { ...t, forwarded: !0 }, s = [...Array.from(this[a(1931)][a(2226)]()), ...Array.from(this.mountedTransports)], n = s[a(2388)]((o) => {
        const c = a;
        return o[c(1104)]({ method: "sdppp/broadcast", params: { messageType: x, message: e } })[c(666)]((u) => {
          console[c(259)]("[BroadcastManager] Error forwarding " + x + ":", u);
        });
      });
      await Promise.all(n);
    } catch (e) {
      console[a(259)]("[BroadcastManager] Error forwarding broadcast:", e);
    }
  }
  [r(1023)](x, t) {
    const a = r;
    !this[a(416)][a(399)](x) && this[a(416)][a(2525)](x, /* @__PURE__ */ new Set()), this[a(416)].get(x)[a(2279)](t);
  }
  setupTransportHandlers(x) {
    this[r(1141)](x);
  }
  [r(1141)](x) {
    const t = r, a = k({ method: x0(t(2289)), params: k({ messageType: v(), message: N0() }) });
    x[t(1108)](a, async (e) => {
      const s = t, n = e[s(2179)][s(717)];
      this[s(1097)](n)(e[s(2179)][s(2235)]);
    });
  }
  addMiddleware(x, t) {
    this[r(1931)].set(x, t), this.setupTransportHandlers(t);
  }
  removeMiddleware(x) {
    this[r(1931)].delete(x);
  }
  async [r(1696)](x, t) {
    const a = r, e = [...Array.from(this.transports[a(2226)]()), ...Array.from(this[a(1958)])], s = e[a(2388)]((n) => {
      const o = a;
      return n[o(1104)]({ method: o(2289), params: { messageType: x, message: t } });
    });
    await Promise.all(s);
  }
  [r(398)](x) {
    const t = r;
    this[t(1958)][t(2279)](x), this[t(1493)](x);
  }
  getHandlerTypes() {
    const x = r;
    return Array.from(this[x(416)][x(1574)]());
  }
  clear() {
    const x = r;
    this.broadcastHandlers[x(447)](), this.transports[x(447)](), this[x(1958)][x(447)]();
  }
}
var as, ss, ns;
class oi {
  constructor(x, t, a) {
    h0(this, "actionHandlers", /* @__PURE__ */ new Map());
    h0(this, ns);
    h0(this, ss);
    h0(this, as);
    const e = r;
    this.definition = x, this.currentNodeId = t, this[e(841)] = a;
  }
  [(ns = r(2321), ss = r(2195), as = r(841), r(324))](x, t) {
    const a = r, e = this[a(2321)][a(1154)](this[a(2195)]);
    if (!e) throw new Error(a(316) + this[a(2195)]);
    const s = e[a(528)][x];
    if (!s) throw new Error(a(903) + String(x) + " not found for node " + this[a(2195)]);
    this[a(2120)](x, t, s), this[a(1734)].set(x, t);
  }
  validateHandlerType(x, t, a) {
    a[r(697)];
  }
  [r(389)](x, t) {
    this.actionHandlers.set(x, t);
  }
  [r(398)](x) {
    const t = r;
    for (const [a, e] of this.actionHandlers) {
      const s = this.definition[t(1154)](this.currentNodeId), n = s == null ? void 0 : s[t(528)][a];
      if (a.startsWith(t(1376)) ? !1 : (n == null ? void 0 : n[t(697)]) === !0) {
        const u = k({ action: x0(a) });
        x.registerStreamRequestorHandler(u, async function* (d, f, l) {
          const g = t, h = d[g(1021)] || d, m = e(h, f, l);
          if (m && typeof m === g(1791) && Symbol[g(2108)] in m) for await (const y of m)
            yield y === void 0 ? {} : y;
          else {
            const y = await m;
            yield y === void 0 ? {} : y;
          }
        });
      }
    }
    this[t(882)](x), this[t(2322)](x);
  }
  [r(882)](x) {
    const t = r, a = k({ action: x0(t(791)) }), e = this;
    x.registerStreamRequestorHandler(a, async function* (s, n, o) {
      const c = t, u = s.data || s, { targetNodeId: d, targetAction: f, targetData: l, forwardPath: g } = u;
      if (!g || g[c(520)] === 0) throw new Error(c(1050));
      const h = g[0], m = g[c(1597)](1);
      if (m.length === 0 && h === e[c(2195)]) {
        const y = e[c(1734)][c(2311)](f);
        if (!y) throw new Error(c(903) + f + c(2413) + e[c(2195)]);
        const S = y(l, n, o);
        if (S && typeof S === c(1791) && Symbol[c(2108)] in S) for await (const E of S)
          yield E === void 0 ? {} : E;
        else {
          const E = await S;
          yield E === void 0 ? {} : E;
        }
        return;
      }
      if (h === e.currentNodeId && m[c(520)] > 0) {
        const y = m[0], S = e.getTransport(y);
        if (S) {
          const E = await S.streamRequest({ action: "__proxy_forward", data: { targetNodeId: d, targetAction: f, targetData: l, forwardPath: m } }, k({}), o);
          for await (const O of E)
            yield O === void 0 ? {} : O;
          return;
        }
        throw new Error(c(1752) + y + c(267));
      }
      throw new Error(c(1078) + e[c(2195)] + c(1670) + g);
    });
  }
  getRegisteredActions() {
    const x = r;
    return Array[x(1210)](this.actionHandlers[x(1574)]());
  }
  [r(325)](x) {
    const t = r;
    return this[t(1734)][t(399)](x);
  }
  getHandler(x) {
    const t = r;
    return this[t(1734)][t(2311)](x);
  }
  [r(447)]() {
    const x = r;
    this[x(1734)][x(447)]();
  }
  [r(1481)](x, t, a) {
  }
  [r(2322)](x) {
    const t = r, a = k({ method: x0("sdppp/directRequest"), params: k({ action: v(), data: N0().optional() }) }), e = this;
    x[t(2134)](a, async (s, n) => {
      const o = t, { action: c, data: u } = s.params;
      if (c === o(791)) return await e[o(1776)](u, n);
      const d = e[o(1734)][o(2311)](c);
      if (!d) throw new Error(o(903) + c + o(2413) + e.currentNodeId);
      const f = d(u, n), l = await f;
      return l === void 0 ? {} : l;
    });
  }
  async [r(1776)](x, t) {
    const a = r, { targetNodeId: e, targetAction: s, targetData: n, forwardPath: o } = x;
    if (!o || o.length === 0) throw new Error("Invalid forward path for proxy action");
    const c = o[0], u = o[a(1597)](1);
    if (u[a(520)] === 0 && c === this[a(2195)]) {
      const d = this[a(1734)][a(2311)](s);
      if (!d) throw new Error(a(903) + s + a(2413) + this[a(2195)]);
      const f = d(n, t), l = await f;
      return l === void 0 ? {} : l;
    }
    if (c === this[a(2195)] && u[a(520)] > 0) {
      const d = u[0], f = this[a(841)](d);
      if (f) return await f[a(2300)]({ method: a(1207), params: { action: a(791), data: { targetNodeId: e, targetAction: s, targetData: n, forwardPath: u } } }, N0());
      throw new Error("Cannot forward to node " + d + a(267));
    }
    throw new Error(a(1078) + this[a(2195)] + a(1670) + o);
  }
}
var is, os, cs;
class ci {
  constructor(x, t) {
    h0(this, cs);
    h0(this, os);
    h0(this, is, /* @__PURE__ */ new Set());
    const a = r;
    this[a(2321)] = x, this.currentNodeId = t;
  }
  [(cs = r(2321), os = r(2195), is = r(338), r(1777))](x) {
    const t = r;
    this[t(338)][t(2279)](x);
  }
  [r(499)](x) {
    const t = r;
    this[t(338)][t(292)](x);
  }
  [r(1415)](x) {
    return this.connectedNodes.has(x);
  }
  findPath(x, t) {
    const a = r;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), s = [{ nodeId: x, path: [x] }];
    for (; s.length > 0; ) {
      const { nodeId: n, path: o } = s[a(579)]();
      if (e[a(399)](n)) continue;
      e[a(2279)](n);
      const c = this[a(2321)][a(2433)](n);
      for (const u of c) {
        if (u === t) return [...o, u];
        !e.has(u) && s[a(1131)]({ nodeId: u, path: [...o, u] });
      }
    }
  }
  getConnectedNodeIds() {
    const x = r;
    return Array.from(this[x(338)]);
  }
  [r(915)]() {
    const x = r;
    return this[x(338)][x(1644)];
  }
  getAllReachableNodes() {
    const x = r, t = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), e = [this[x(2195)]];
    for (a[x(2279)](this.currentNodeId); e[x(520)] > 0; ) {
      const s = e.shift(), n = this[x(2321)].getNeighbors(s);
      for (const o of n)
        !a[x(399)](o) && (a[x(2279)](o), (this[x(338)].has(o) || this[x(630)](o, a)) && (t.add(o), e[x(1131)](o)));
    }
    return Array.from(t);
  }
  [r(630)](x, t) {
    const a = r, e = this[a(1387)](this.currentNodeId, x);
    if (!e || e.length <= 1) return !1;
    for (let s = 1; s < e.length - 1; s++)
      if (!this[a(338)].has(e[s])) return !1;
    return !0;
  }
  [r(447)]() {
    this[r(338)].clear();
  }
}
var us, ds, fs, ls, hs;
class ui {
  constructor(x, t) {
    h0(this, hs);
    h0(this, ls);
    h0(this, "nodeStores", /* @__PURE__ */ new Map());
    h0(this, fs, /* @__PURE__ */ new Map());
    h0(this, "broadcastManager");
    h0(this, ds);
    h0(this, "connectionManager");
    h0(this, us, /* @__PURE__ */ new Map());
    const a = r;
    this.definition = x, this[a(2195)] = t, this[a(583)](), this.broadcastManager = new ii(t), this.actionManager = new oi(x, t, (e) => this.getTransportInternal(e)), this[a(251)] = new ci(x, t), this.setupGraphStoreSync();
  }
  [(hs = r(2321), ls = r(2195), fs = r(1014), ds = r(2128), us = r(1756), r(583))]() {
    const x = r;
    for (const t of this[x(2321)][x(2125)]()) {
      const a = this[x(2321)][x(1154)](t);
      if (a && a[x(2336)]) {
        const e = this[x(1605)](a[x(2336)]), s = Tn(() => e);
        this.nodeStores[x(2525)](t, s);
      }
    }
  }
  [r(1605)](x) {
    const t = r;
    if (!x) return {};
    try {
      return x[t(686)]({});
    } catch {
      return this[t(1820)](x);
    }
  }
  [r(1820)](x) {
    const t = r;
    if (!x || !x[t(889)]) return {};
    if (x[t(889)][t(2043)] === t(1535)) {
      const a = x[t(889)][t(1191)];
      return typeof a === t(1538) ? a() : a;
    }
    if (x[t(889)][t(2043)] === "object") {
      const a = {};
      let e;
      try {
        e = x.def.shape;
      } catch {
        return {};
      }
      if (e) for (const [s, n] of Object.entries(e)) {
        const o = this[t(1954)](n);
        o !== void 0 && (a[s] = o);
      }
      return a;
    }
    return {};
  }
  [r(1954)](x) {
    const t = r;
    if (x)
      try {
        return x.parse(void 0);
      } catch {
        return this[t(1820)](x);
      }
  }
  async [r(1098)](x, t) {
    const a = r;
    if (!this.definition.hasEdge(this[a(2195)], x)) throw new Error(a(2112) + this[a(2195)] + " to " + x);
    if (this[a(1756)][a(399)](x)) throw new Error(a(1993) + x);
    try {
      this[a(1756)][a(2525)](x, t), this.connectionManager[a(1777)](x), this.setupNodeBindings(x, t), await this[a(1658)](x), await this.requestInitialStateForNode(x);
    } catch (e) {
      throw this[a(2347)](x), e;
    }
  }
  [r(2288)](x) {
    this[r(2347)](x);
  }
  async [r(1658)](x) {
    const t = r;
    await new Promise((a) => setTimeout(a, 100));
    for (const [a, e] of this[t(2424)])
      if (a === this[t(2195)]) try {
        await this.broadcastManager[t(1696)](t(285) + a, { storeName: a, sourceNodeId: this.currentNodeId, stateUpdate: e[t(1323)](), isInitialState: !0 });
      } catch {
      }
    try {
      await this[t(1921)][t(1696)](t(2268), { fromNode: this[t(2195)], toNode: x });
    } catch {
    }
  }
  async [r(1399)](x) {
    const t = r;
    try {
      const a = this.connectionManager[t(1358)]();
      for (const e of a)
        try {
          const s = t(1828) + e, n = this[t(1154)](e);
          if (n && n[t(528)] && n.actions[s]) {
            const o = n[t(528)][s]({});
            await Promise[t(342)]([o, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (s) {
          console[t(811)]("Failed to request initial state for " + e + ":", s);
        }
    } catch (a) {
      console[t(811)](t(1192) + x + ":", a);
    }
  }
  [r(2347)](x) {
    const t = r, a = this[t(1756)].get(x);
    this[t(1756)][t(292)](x), this[t(251)].markDisconnected(x), this.broadcastManager[t(927)](x), a && a.cleanup();
  }
  [r(1896)](x, t) {
    const a = r;
    if (!this[a(2424)].get(this.currentNodeId)) throw new Error("Store not found for " + this.currentNodeId);
    this[a(2128)][a(398)](t), this[a(1921)].addMiddleware(x, t);
  }
  [r(1821)]() {
    const x = r;
    for (const [t, a] of this[x(2424)])
      t === this.currentNodeId ? ni({ graphInstance: this, store: a, name: t }) : si({ graphInstance: this, store: a, name: t });
  }
  [r(1154)](x) {
    const t = r;
    if (!this[t(1014)][t(399)](x)) {
      const a = new ai(this, x);
      this[t(1014)].set(x, a);
    }
    return this[t(1014)][t(2311)](x);
  }
  [r(1458)](x) {
    return this[r(1756)].get(x);
  }
  [r(1284)](x) {
    const t = r, a = this[t(1756)][t(2311)](x);
    if (a) return { transport: a, path: [this[t(2195)], x] };
    const e = this[t(2319)](this[t(2195)], x);
    if (e && e[t(520)] > 1) {
      const s = e[1], n = this[t(1756)][t(2311)](s);
      if (n) return { transport: n, path: e };
    }
  }
  [r(141)](x) {
    const t = r;
    return this[t(2424)][t(2311)](x);
  }
  get [r(2336)]() {
    const x = r, t = this[x(2424)][x(2311)](this[x(2195)]);
    if (!t) throw new Error(x(1261) + this.currentNodeId);
    return t;
  }
  get actions() {
    const x = r, t = this[x(2321)][x(1154)](this[x(2195)]);
    if (!t) throw new Error(x(692) + this[x(2195)]);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s !== n(718)) return;
      const o = t[n(528)][s];
      if (!o) throw new Error(n(903) + s + " not found for current node " + this.currentNodeId);
      return (c, u) => {
        const d = n, f = this[d(2128)][d(1471)](s);
        if (!f) throw new Error(d(582) + s + d(283) + this[d(2195)]);
        const l = { nodeId: this[d(2195)] };
        if (o[d(697)] === !0) {
          const g = f(c, l, u);
          return g && typeof g === d(1791) && Symbol.asyncIterator in g ? async function* () {
            for await (const h of g)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await g;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          const g = d, h = f(c, l, u);
          if (h && typeof h === g(1791) && Symbol[g(2108)] in h) {
            const m = h[Symbol[g(2108)]](), y = await m[g(1737)]();
            return y[g(2615)] === void 0 ? {} : y[g(2615)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [r(1066)]() {
    return this[r(2321)];
  }
  [r(1598)]() {
    return this[r(2195)];
  }
  [r(1807)](x) {
    return this[r(1284)](x);
  }
  implementAction(x, t) {
    this.actionManager.implementAction(x, t);
  }
  [r(1477)]() {
    const x = r, t = Array[x(1210)](this[x(1756)].keys());
    for (const a of t)
      this[x(2347)](a);
    this[x(1921)][x(447)](), this.actionManager[x(447)](), this.connectionManager[x(447)]();
  }
  [r(2319)](x, t) {
    return this[r(251)].findPath(x, t);
  }
  [r(1387)](x, t) {
    return this[r(2319)](x, t);
  }
  async [r(1696)](x, t) {
    const a = r, e = { ...t, __origin: this[a(2195)] };
    return this.broadcastManager[a(1696)](x, e);
  }
  broadcastReceived(x, t) {
    this[r(1921)].registerHandler(x, t);
  }
}
function di(i) {
  const x = new qn(i);
  return { joinAs(t) {
    const a = B;
    if (!x.getNode(t)) throw new Error(a(1092) + String(t) + a(1351));
    return new ui(x, t);
  }, getDefinition() {
    return i;
  }, getNodeIds() {
    return x[B(2125)]();
  }, getNeighbors(t) {
    return x.getNeighbors(t);
  }, hasEdge(t, a) {
    return x[B(369)](t, a);
  }, hasPath(t, a) {
    return x[B(778)](t, a);
  }, findPath(t, a) {
    return x[B(1387)](t, a);
  } };
}
const qr = { INTERCEPTOR_ERROR: "interceptor_error" };
var ps, ms, gs, bs;
class Tr extends (bs = Error, gs = r(2043), ms = r(1231), ps = r(2489), bs) {
  constructor(t, a, e, s) {
    const n = r;
    super(e);
    h0(this, gs);
    h0(this, ms);
    h0(this, ps);
    this.name = "MiddlewareError", this[n(2043)] = t, this[n(1231)] = a, this[n(2489)] = s;
  }
}
var ys, vs, ws, Ss, ks, Es, Is, Ps;
class fi {
  constructor(x, t = {}) {
    h0(this, Ps);
    h0(this, Is, null);
    h0(this, "options");
    h0(this, "requestHandlers", /* @__PURE__ */ new Map());
    h0(this, Es, /* @__PURE__ */ new Map());
    h0(this, "outgoingRequestInterceptors", /* @__PURE__ */ new Map());
    h0(this, ks, /* @__PURE__ */ new Map());
    h0(this, Ss, []);
    h0(this, ws, []);
    h0(this, vs, []);
    h0(this, ys, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    const a = r;
    this[a(567)] = x, this.options = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async [(Ps = r(567), Is = r(1858), Es = r(1314), ks = r(1176), Ss = r(2306), ws = r(2121), vs = r(152), ys = r(1562), r(1098))](x) {
    const t = r;
    this.realTransport = x, x[t(2613)] = (a) => {
      this[t(1047)](a);
    }, x[t(2180)] = () => {
      const a = t;
      this.closeHandlers[a(1634)]((e) => e());
    }, x[t(2320)] = (a) => {
      this.errorHandlers.forEach((e) => e(a));
    }, await this[t(567)].connect(this);
  }
  async handleIncomingMessage(x) {
    const t = r;
    this[t(811)]("debug", "Incoming message:", x);
    try {
      if (this[t(1796)](x) && await this[t(1122)](x) || this[t(1794)](x) && await this.handleIncomingNotification(x))
        return;
      this[t(2306)][t(1634)]((a) => a(x));
    } catch (a) {
      this[t(1562)][t(502)]++, this.log(t(259), t(1862), a), this[t(2306)][t(1634)]((e) => e(x));
    }
  }
  async handleIncomingRequest(x) {
    const t = r, a = this[t(2109)][t(2311)](x[t(1231)]);
    if (!a) return !1;
    try {
      this[t(1562)][t(1202)]++;
      const e = await a(x, {});
      return this[t(1858)] && "id" in x && await this[t(1858)][t(1373)]({ jsonrpc: t(2216), id: x.id, result: e }), !0;
    } catch (e) {
      return this[t(1562)].errors++, this.realTransport && "id" in x && await this.realTransport[t(1373)]({ jsonrpc: t(2216), id: x.id, error: { code: -32603, message: t(1963) + JSON[t(2403)](x[t(2179)]) + " " + e[t(2235)] } }), !0;
    }
  }
  async handleIncomingNotification(x) {
    const t = r, a = this[t(1314)][t(2311)](x[t(1231)]);
    if (!a) return !1;
    try {
      return this.stats.notificationsHandled++, await a(x), !0;
    } catch (e) {
      return this[t(1562)].errors++, this[t(811)](t(259), t(1606) + x.method + ":", e), !0;
    }
  }
  async [r(1373)](x) {
    const t = r;
    this[t(811)](t(953), t(1541), x);
    try {
      if (this[t(1796)](x)) {
        const a = await this[t(1073)](x);
        if (a[t(2290)]) {
          if (a[t(2202)] === null) return;
          a[t(2202)] && (x = { ...a.result, jsonrpc: t(2216) }, this[t(1562)][t(1289)]++);
        } else if (this[t(1287)].continueOnInterceptorError) this[t(811)](t(183), "Request interceptor failed for " + x.method + ":", a.error);
        else throw a.error;
      }
      if (this[t(1794)](x)) {
        const a = await this.executeOutgoingNotificationInterceptor(x);
        if (a.success) {
          if (a.result === null) return;
          a[t(2202)] && (x = { ...a[t(2202)], jsonrpc: t(2216) }, this[t(1562)].notificationsIntercepted++);
        } else if (this[t(1287)].continueOnInterceptorError) this[t(811)](t(183), t(1293) + x[t(1231)] + ":", a[t(259)]);
        else throw a[t(259)];
      }
      this[t(1858)] && await this.realTransport[t(1373)](x);
    } catch (a) {
      throw this[t(1562)][t(502)]++, a;
    }
  }
  async [r(742)]() {
    const x = r;
    this[x(1858)] && await this.realTransport[x(742)]();
  }
  async [r(491)]() {
    this[r(1858)] && await this.realTransport.close();
  }
  set [r(2613)](x) {
    this.messageHandlers = [x];
  }
  set [r(2180)](x) {
    const t = r;
    this[t(2121)] = [x];
  }
  set [r(2320)](x) {
    const t = r;
    this[t(152)] = [x];
  }
  async [r(1073)](x) {
    const t = r, a = this[t(2137)][t(2311)](x[t(1231)]);
    if (!a) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(850)](a(x), this[t(1287)].interceptorTimeout) };
    } catch (e) {
      return this.stats.errors++, { success: !1, error: new Tr(qr.INTERCEPTOR_ERROR, x[t(1231)], t(1690) + e.message, e) };
    }
  }
  async [r(1034)](x) {
    const t = r, a = this[t(1176)][t(2311)](x[t(1231)]);
    if (!a) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(850)](a(x), this[t(1287)][t(1276)]) };
    } catch (e) {
      return this[t(1562)].errors++, { success: !1, error: new Tr(qr[t(184)], x[t(1231)], t(1817) + e[t(2235)], e) };
    }
  }
  async [r(2300)](x, t) {
    return await this[r(567)].request(x, t, { timeout: 36e5 });
  }
  async [r(1104)](x) {
    const t = r;
    return await this[t(567)][t(1104)](x);
  }
  [r(2134)](x, t) {
    const a = r, e = x[a(467)][a(1231)][a(2615)];
    this.requestHandlers[a(2525)](e, t);
  }
  [r(1108)](x, t) {
    const a = r, e = x[a(467)][a(1231)].value;
    this[a(1314)][a(2525)](e, t);
  }
  [r(290)](x, t) {
    const a = r, e = x[a(467)][a(1231)][a(2615)];
    this.outgoingRequestInterceptors[a(2525)](e, t);
  }
  [r(1628)](x, t) {
    const a = r, e = x[a(467)][a(1231)][a(2615)];
    this[a(1176)][a(2525)](e, t);
  }
  [r(2264)](x) {
    this[r(2109)].delete(x);
  }
  [r(1135)](x) {
    const t = r;
    this[t(1314)][t(292)](x);
  }
  unsetOutgoingRequestInterceptor(x) {
    this[r(2137)].delete(x);
  }
  [r(1923)](x) {
    const t = r;
    this[t(1176)][t(292)](x);
  }
  [r(1022)](x) {
    const t = r;
    return this[t(2109)][t(399)](x);
  }
  [r(383)](x) {
    return this[r(1314)].has(x);
  }
  [r(1072)](x) {
    const t = r;
    return this[t(2137)][t(399)](x);
  }
  [r(1193)](x) {
    return this[r(1176)].has(x);
  }
  getStats() {
    return { ...this[r(1562)] };
  }
  [r(873)]() {
    const x = r;
    this[x(1562)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  getProtocol() {
    return this.protocol;
  }
  [r(1344)]() {
    const x = r;
    this[x(2109)][x(447)](), this[x(1314)][x(447)](), this[x(2137)][x(447)](), this.outgoingNotificationInterceptors[x(447)]();
  }
  [r(1796)](x) {
    const t = r;
    return x.jsonrpc === "2.0" && t(1231) in x && "id" in x;
  }
  [r(1794)](x) {
    const t = r;
    return x.jsonrpc === t(2216) && t(1231) in x && !("id" in x);
  }
  async withTimeout(x, t) {
    const a = r, e = new Promise((s, n) => {
      setTimeout(() => n(new Error("Timeout")), t);
    });
    return await Promise[a(342)]([x, e]);
  }
  [r(811)](x, t, ...a) {
    const e = r;
    if (!this.options[e(953)] && x === "debug") return;
    const s = "[MCPMiddleware]";
    switch (x) {
      case e(953):
        console[e(953)](s, t, ...a);
        break;
      case e(1976):
        console[e(1976)](s, t, ...a);
        break;
      case e(183):
        console[e(183)](s, t, ...a);
        break;
      case "error":
        console[e(259)](s, t, ...a);
        break;
    }
  }
}
k({ method: x0("sdppp/streamResponse"), params: k({ requestId: v(), data: N0(), error: v()[r(1859)](), finished: e0() }) }), k({ method: x0(r(1753)), params: k({ action: v(), data: N0() }) }), k({ method: x0(r(476)), params: k({ requestId: v() }) });
const li = k({ method: x0(r(440)), params: k({ requestId: v(), data: N0(), error: v()[r(1859)](), finished: e0() }) }), hi = k({ method: x0(r(1753)), params: k({ action: v(), data: N0() }) }), pi = k({ method: x0("sdppp/abort"), params: k({ requestId: v() }) });
var Rs, Cs;
class mi {
  constructor() {
    h0(this, Cs, /* @__PURE__ */ new Map());
    h0(this, Rs, /* @__PURE__ */ new Map());
  }
  [(Cs = r(1886), Rs = r(1936), r(1131))](x) {
    const t = r, { requestId: a } = x.params, e = this[t(1886)][t(2311)](a) || [], s = this[t(1936)][t(2311)](a) || [];
    s[t(520)] > 0 ? s[t(579)]()(x[t(2179)]) : (e[t(1131)](x.params), this[t(1886)][t(2525)](a, e));
  }
  async [r(1533)](x) {
    const t = r, a = this.queues[t(2311)](x) || [];
    return a.length > 0 ? a[t(579)]() : new Promise((e) => {
      const s = t, n = this[s(1936)][s(2311)](x) || [];
      n[s(1131)](e), this[s(1936)][s(2525)](x, n);
    });
  }
  [r(1344)](x) {
    const t = r;
    this[t(1886)][t(292)](x), this[t(1936)].delete(x);
  }
}
var Fs, Ns, qs;
class gi extends fi {
  constructor(t, a = {}) {
    const e = r;
    super(t, a);
    h0(this, "streamRequestorHandlers", /* @__PURE__ */ new Map());
    h0(this, qs, 1);
    h0(this, Ns, /* @__PURE__ */ new Map());
    h0(this, Fs, new mi());
    this[e(904)]();
  }
  [(qs = r(130), Ns = r(894), Fs = r(2490), r(904))]() {
    const t = r;
    this[t(279)](), this[t(616)](), this[t(1446)]();
  }
  [r(279)]() {
    this.setNotificationHandler(li, async (t) => {
      const a = B;
      this[a(2490)][a(1131)](t);
    });
  }
  [r(616)]() {
    const t = r;
    this[t(2134)](pi, async (a, e) => {
      const s = t, { requestId: n } = a[s(2179)], o = this[s(894)][s(2311)](n);
      return o && (o.abort(), this[s(894)][s(292)](n)), { success: !0 };
    });
  }
  setupStreamRequestHandler() {
    const t = r;
    this[t(2134)](hi, async (a, e) => {
      const s = t, n = "req_" + this[s(130)]++, o = this.streamRequestorHandlers[s(2311)](a[s(2179)][s(851)]);
      if (!o) throw new Error(s(2040) + a.params[s(851)]);
      const c = new AbortController();
      return this[s(894)].set(n, c), this[s(161)](n, o, a.params, e, c), { requestId: n };
    });
  }
  async [r(161)](t, a, e, s, n) {
    const o = r;
    try {
      const c = a(e, s, n[o(962)]);
      for await (const u of c) {
        if (n.signal[o(2602)]) break;
        await this.notification({ method: o(440), params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !n[o(962)][o(2602)] && await this[o(1104)]({ method: o(440), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n[o(962)][o(2602)] && await this[o(1104)]({ method: o(440), params: { requestId: t, data: null, error: c[o(2235)], finished: !0 } });
    } finally {
      this.runningRequests.delete(t);
    }
  }
  [r(200)](t, a) {
    const e = r;
    this.streamRequestorHandlers.set(t[e(467)][e(851)][e(2615)], a);
  }
  async [r(208)](t, a, e) {
    const s = r;
    this[s(803)](e);
    const n = await this[s(2456)](t), o = this[s(660)](n), c = this[s(1983)]();
    return this.createAsyncIterator(o, c, n, e);
  }
  [r(803)](t) {
    const a = r;
    if (t && t[a(2602)]) throw new Error(a(2150));
  }
  async sendStreamRequestorRequest(t) {
    const a = r;
    return (await this[a(2300)]({ method: a(1753), params: { action: t[a(851)], data: t.data } }, k({ requestId: v() })))[a(1624)];
  }
  [r(660)](t) {
    return this[r(2490)];
  }
  [r(1983)]() {
    return { finished: !1, error: null };
  }
  [r(1299)](t, a, e, s) {
    const n = r, o = this;
    return { async *[Symbol[n(2108)]]() {
      const c = n;
      try {
        for (; !a[c(2309)] && !a[c(259)]; ) {
          if (s && s.aborted)
            throw await o[c(2300)]({ method: "sdppp/abort", params: { requestId: e } }, k({ success: e0() })), new Error("Aborted");
          const u = await t.pop(e);
          if (u[c(259)])
            throw a.error = u[c(259)], new Error(u[c(259)]);
          if (u.finished) {
            a[c(2309)] = !0;
            break;
          }
          u.data !== null && (yield u[c(1021)]);
        }
      } finally {
        t.cleanup(e);
      }
    } };
  }
  [r(1991)]() {
    const t = r;
    return this.runningRequests[t(1644)];
  }
  async [r(1349)](t) {
    const a = r, e = this[a(894)][a(2311)](t);
    return e ? (e[a(2159)](), this.runningRequests[a(292)](t), !0) : !1;
  }
  [r(2101)]() {
    const t = r;
    for (const [a, e] of this[t(894)])
      e[t(2159)]();
    this[t(894)][t(447)]();
  }
  [r(1344)]() {
    const t = r;
    super[t(1344)](), this[t(2101)](), this[t(1907)].clear();
  }
}
k({ id: v(), method: v(), params: N0()[r(965)](), traceId: v()[r(965)]() }), k({ id: v(), result: N0()[r(965)](), error: k({ code: X(), message: v(), data: N0()[r(965)]() })[r(965)]() }), k({ method: v(), params: N0()[r(965)]() }), k({ method: x0(r(1753)), params: k({ action: v(), data: N0() }) }), k({ method: x0(r(440)), params: k({ requestId: v(), data: N0()[r(965)](), error: v()[r(1859)]()[r(965)](), finished: e0().default(!1) }) }), k({ method: x0(r(476)), params: k({ requestId: v() }) }), k({ method: x0(r(2289)), params: k({ messageType: v(), message: N0() }) });
function Ls(i) {
  const x = r;
  return i && i[x(1320)] && Object[x(672)][x(711)][x(422)](i, x(1535)) ? i[x(1535)] : i;
}
const Ne = k({ leftDistance: X(), topDistance: X(), rightDistance: X(), bottomDistance: X(), width: X(), height: X() }), Ce = { name: v(), uiWeight: X() }, bi = k({ ...Ce, outputType: x0("images"), options: k({ required: e0(), maxCount: X()[r(965)](), maskMode: e0()[r(965)]() }) }), yi = k({ ...Ce, outputType: x0(r(781)), options: k({ required: e0() }) }), vi = k({ ...Ce, outputType: x0("string"), options: k({ required: e0() }) }), wi = k({ ...Ce, outputType: x0(r(1488)), options: k({ required: e0() }) }), Si = k({ ...Ce, outputType: x0("number"), options: k({ required: e0(), min: X().optional(), max: X()[r(965)](), step: X()[r(965)](), random: e0().optional(), slider: e0()[r(965)]() }) }), ki = k({ ...Ce, outputType: x0(r(1567)), options: k({ required: e0(), values: v0(v()), labels: v0(v()).optional() }) }), Ei = k({ ...Ce, outputType: x0(r(1230)), options: k({ required: e0(), values: v0(v()) }) }), Ii = k({ ...Ce, outputType: x0("video"), options: k({ required: e0() }) }), Pi = js(r(929), [bi, yi, vi, wi, Si, ki, Ei, Ii]), Ri = k({ id: v(), title: v(), widgets: v0(Pi), uiWeightSum: X() }), Ci = k({ widgetableID: v(), widgetablePath: v(), nodes: U0(v(), Ri), nodeIndexes: v0(v()), note: v()[r(965)](), options: U0(v(), N0()) }), Fi = k({ widgetableStructure: Ci[r(1535)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: U0(v(), v0(N0())).default({}), widgetableErrors: U0(v(), v())[r(1535)]({}), queueSize: X()[r(1535)](0), lastError: v().default(""), progress: X()[r(1535)](0), executingNodeTitle: v()[r(1535)](""), executingNodeID: v()[r(1535)](""), graphProgress: X()[r(1535)](0), comfyUserToken: v()[r(1535)](""), comfyOrgLoggedIn: e0().default(!1), comfyOrgAPIKey: v()[r(1535)](""), comfyWSState: E0([r(993), r(170)])[r(1535)]("connected"), lastRunTime: X()[r(1535)](0) }), Ni = k({ bannerData: N0()[r(965)](), refreshable: e0()[r(1535)](!1), backwardable: e0().default(!1), loginable: e0().default(!1), runnable: e0()[r(1535)](!1), workBoundaries: U0(X(), Ne)[r(1535)]({}), workBoundaryMaxSizes: U0(X(), X()).default({}) }), qi = k({ uname: v()[r(1535)](""), activeDocumentID: X()[r(1535)](0), layers: v0(k({ id: X(), name: v(), identify: v() }))[r(1535)]([]), actions: v0(v()).default([]), theme: v()[r(1535)](r(1371)), sdpppX: U0(v(), N0())[r(1535)]({}), locale: E0([r(857), r(992)])[r(1535)](r(992)), comfyWebviewConnectStatus: E0(["connecting", r(993), "disconnected"])[r(1535)](r(2439)), comfyWebviewLoadError: v()[r(1535)](""), comfyWebviewLoading: e0()[r(1535)](!1), comfyWebviewVersion: v().default(""), comfyHTTPCode: X().default(200), comfyURL: v()[r(1535)](""), sdkWebviewFocusing: e0()[r(1535)](!1), sdkWebviewConnectStatus: E0([r(2461), r(993), "disconnected"])[r(1535)](r(2439)), isLogin: e0()[r(1535)](!1), isGuest: e0()[r(1535)](!1), requestingLogin: e0()[r(1535)](!1), loginMessage: v().default(""), token: v()[r(1535)](""), userInfo: U0(v(), N0()).default({}), taskLastRun: X()[r(1535)](0), canvasStateID: X()[r(965)](), selectionStateID: v().optional(), selectionBoundary: Ne[r(1859)]()[r(965)](), canvasThumbnail: v().default(""), curlayerThumbnail: v()[r(1535)]("") }), Ti = { setNodeTitle: { requestSchema: k({ node_id: v(), title: v() }), responseSchema: k({ success: e0() }) }, reboot: { requestSchema: k({}), responseSchema: k({ success: e0(), error: v()[r(965)]() }) }, setComfyOrgAPIKey: { requestSchema: k({ api_key: v() }), responseSchema: k({ success: e0() }) }, logout: { requestSchema: k({}), responseSchema: k({ success: e0() }) }, uploadComfyImageFromUXP: { requestSchema: k({ fileName: v(), overwrite: e0().optional(), mimeType: v()[r(965)](), dataBase64: v() }), responseSchema: k({ name: v() }) }, sdpppHandshake: { requestSchema: k({ hostVersion: v()[r(965)]() }), responseSchema: k({ comfyVersion: v(), hostVersion: v()[r(965)]() }) } }, Ai = k({ workflows: v0(v()), error: v()[r(965)]() }), Oi = k({ success: e0(), nodeErrors: U0(v()).optional(), prompt_ids: v0(v())[r(965)](), images: v0(k({ url: v(), thumbnail: v() }))[r(965)]() }), Di = { setWidgetValue: { requestSchema: k({ values: v0(k({ nodeID: v(), widgetIndex: X(), value: U0(v(), N0()).or(v()).or(X()).or(e0()).or(v0(N0())) })) }), responseSchema: k({ success: e0() }) }, openWorkflow: { requestSchema: k({ workflow_path: v(), reset: e0()[r(1535)](!1) }), responseSchema: k({ success: e0() }) }, openWorkflowJSON: { requestSchema: k({ workflow_content: U0(N0()), workflow_path: v() }), responseSchema: k({ success: e0() }) }, listWorkflows: { requestSchema: k({ listMode: v().optional(), sdpppID: v()[r(965)](), sdpppToken: v()[r(965)]() }), responseSchema: Ai }, saveWorkflow: { requestSchema: k({ workflow_path: v(), from_sid: v()[r(965)]() }), responseSchema: k({ success: e0() }) }, run: { requestSchema: k({ size: X() }), responseSchema: Oi, stream: !0 }, stopAll: { requestSchema: k({}), responseSchema: k({ success: e0() }) } }, ji = { backward: { requestSchema: $x(), responseSchema: k({ success: e0() }) }, refresh: { requestSchema: $x(), responseSchema: k({ success: e0() }) }, run: { requestSchema: $x(), responseSchema: k({ success: e0() }) } }, Mi = k({ passwordPayload: k({ username: v(), password: v() }).or(k({ email: v(), password: v() })).or(k({ phone: v(), password: v() })).or(k({ identifier: v(), password: v() })) }).or(k({ passcodePayload: k({ phone: v(), code: v() }).or(k({ email: v(), code: v() })) })), Li = k({ passwordPayload: k({ username: v(), password: v() }).or(k({ email: v(), password: v() })).or(k({ phone: v(), password: v() })).or(k({ identifier: v(), password: v() })) }).or(k({ passcodePayload: k({ phone: v(), code: v() }).or(k({ email: v(), code: v() })) })), $i = { register: { requestSchema: Mi, responseSchema: k({}) }, login: { requestSchema: Li, responseSchema: k({}) }, sendPassCode: { requestSchema: k({ phone: v().optional(), email: v()[r(965)]() }), responseSchema: k({}) }, logout: { requestSchema: k({}), responseSchema: k({}) }, guestLogin: { requestSchema: k({}), responseSchema: k({}) } };
k({ resource: v()[r(965)](), thumbnail: v()[r(965)](), width: X().optional(), height: X()[r(965)](), mimeType: v()[r(965)](), source: v().optional(), error: v()[r(965)]() }), k({ boundary: E0([r(2090), r(2332), r(2540)]), content: E0([r(2090), r(2332), r(2540)]).or(v()), imageSize: X(), imageQuality: X(), cropBySelection: E0(["no", r(238), "negative"]), layer_identify: v()[r(1859)]()[r(965)]() }), k({ content: E0([r(2090), r(2332), r(2540)]), reverse: e0(), imageSize: X(), layer_identify: v()[r(1859)]()[r(965)]() }), k({ selection: E0([r(1036), "newlayer_canvas", "newlayer_curlayer", r(216), r(2086), r(418), r(2060), r(1036)]), url: v(), source: v(), cropBySelection: E0(["no", "positive", r(2123)]) });
const zi = { downloadImage: { requestSchema: k({ url: v() }), responseSchema: k({ thumbnail: v().optional(), resource: v()[r(965)](), width: X()[r(965)](), height: X()[r(965)](), error: v()[r(965)]() }) }, getThumbnail: { requestSchema: k({ resource: v(), maxSize: X()[r(965)]() }), responseSchema: k({ thumbnail: v()[r(965)](), width: X().optional(), height: X()[r(965)](), error: v()[r(965)]() }) }, deleteDownloadedImage: { requestSchema: k({ resources: v0(v()) }), responseSchema: k({ error: v().optional() }) }, requestAndDoSaveImage: { requestSchema: k({ resources: v0(v()) }), responseSchema: k({ error: v()[r(965)]() }) } }, Hi = { manageGuides: { requestSchema: k({ action: E0(["create", r(447)]), rect: Ne[r(965)]() }), responseSchema: k({ success: e0() }) }, getBoundary: { requestSchema: k({ type: E0([r(2332), "selection"]) }), responseSchema: Ne }, getImage: { requestSchema: k({ boundary: J0([E0([r(2090), r(2332), "selection"]), Ne]), content: J0([E0([r(2090), r(2332)]), v()]), imageSize: X(), imageQuality: X(), cropBySelection: E0(["no", r(238), r(2123)]), SkipNonNormalLayer: e0(), layer_identify: v()[r(1859)]().optional() }), responseSchema: k({ resource: v()[r(965)](), thumbnail: v()[r(965)](), width: X()[r(965)](), height: X().optional(), mimeType: v().optional(), source: v().optional(), error: v()[r(965)]() }) }, getMask: { requestSchema: k({ boundary: J0([E0([r(2090), "curlayer", r(2540)]), Ne]), content: E0([r(2090), "curlayer", r(2540)]), reverse: e0(), imageSize: X(), layer_identify: v()[r(1859)]()[r(965)]() }), responseSchema: k({ resource: v()[r(965)](), thumbnail: v()[r(965)](), width: X()[r(965)](), height: X()[r(965)](), mimeType: v().optional(), source: v()[r(965)](), error: v().optional() }) }, getCurrentLayerIdentify: { requestSchema: k({}), responseSchema: k({ layer_identify: v()[r(1859)]() }) }, importImage: { requestSchema: k({ resource: v(), boundary: J0([E0([r(2090), "curlayer", r(2540)]), Ne])[r(965)](), type: E0([r(2090), r(2332), r(2626), r(1252)]), sourceWidth: X()[r(965)](), sourceHeight: X()[r(965)]() }), responseSchema: k({ success: e0(), layers: v0(k({ identify: v() }))[r(965)](), message: v()[r(965)](), error: v()[r(965)]() }) }, applyMaskToImage: { requestSchema: k({ imageResource: v(), maskResource: v(), invertMask: e0().optional() }), responseSchema: k({ resource: v(), thumbnail: v().optional(), width: X(), height: X(), mimeType: v() }) }, showBoundarySelectionDialog: { requestSchema: k({ additionalData: U0(N0())[r(965)]() }), responseSchema: k({ boundary: E0([r(2090), r(2332), r(2540)]).optional(), cancelled: e0()[r(965)]() }) }, selectImageSource: { requestSchema: k({ additionalData: U0(N0())[r(965)]() }), responseSchema: k({ action: E0([r(825), r(2059)]).optional(), params: N0()[r(965)](), cancelled: e0()[r(965)]() }) }, selectContentSource: { requestSchema: k({ additionalData: U0(N0())[r(965)]() }).optional(), responseSchema: k({ resource: v()[r(965)](), fileName: v().optional(), mimeType: v()[r(965)](), size: X()[r(965)](), layerIdentify: v()[r(965)](), cancelled: e0()[r(965)]() }) } }, zx = k({ taskId: v(), taskName: v(), status: E0([r(1096), r(1335), r(1286), "cancelled"]), currentStep: X()[r(965)](), totalSteps: X()[r(965)](), stepDescription: v()[r(965)](), progressPercentage: X()[r(1150)](0)[r(2428)](100)[r(965)](), startTime: v(), endTime: v()[r(965)](), error: v()[r(965)](), errorCode: v()[r(965)](), result: N0().optional(), metadata: U0(N0())[r(965)]() }), Hx = k({ success: e0(), error: v()[r(965)]() }), Ui = { taskAdd: { requestSchema: zx, responseSchema: Hx }, taskUpdate: { requestSchema: zx[r(815)]()[r(2344)]({ taskId: !0 }), responseSchema: Hx }, taskRemove: { requestSchema: zx[r(2567)]({ taskId: !0 }), responseSchema: Hx } }, Vi = { log: { requestSchema: k({ level: E0([r(811), r(1976), "warn", r(259)]), messages: v0(v()) }), responseSchema: k({}) }, openExternalLink: { requestSchema: k({ url: v() }), responseSchema: k({ error: v()[r(965)]() }) }, getStorage: { requestSchema: k({ key: v() }), responseSchema: k({ value: v(), error: v().optional() }) }, setStorage: { requestSchema: k({ key: v(), value: v() }), responseSchema: k({ error: v()[r(965)]() }) }, removeStorage: { requestSchema: k({ key: v() }), responseSchema: k({ error: v()[r(965)]() }) }, keyboardAction: { requestSchema: k({ keycode: v() }), responseSchema: k({}) }, setComfyWebviewURL: { requestSchema: k({ url: v() }), responseSchema: k({}) }, getImageBase64: { requestSchema: k({ token: v() }), responseSchema: k({ base64: v()[r(965)](), mimeType: v()[r(965)](), error: v()[r(965)]() }) }, uploadComfyImage: { requestSchema: k({ uploadInput: k({ type: J0([x0(r(524)), x0(r(1133)), x0(r(830))]), resource: N0(), fileName: v(), mimeType: v()[r(965)](), resourceId: v().optional() }), overwrite: e0()[r(965)]()[r(1535)](!0) }), responseSchema: k({ name: v() }) }, pickLocalFile: { requestSchema: k({ acceptExtensions: v0(v())[r(965)](), kind: E0([r(1534), r(907)]).optional() })[r(965)](), responseSchema: k({ cancelled: e0()[r(965)](), resource: v()[r(965)](), fileName: v()[r(965)](), mimeType: v().optional(), size: X()[r(965)](), error: v()[r(965)]() }) }, proxiedFetch: { requestSchema: k({ url: v(), method: v()[r(965)](), headers: U0(v()).optional(), body: N0()[r(965)](), bodyType: E0([r(1367), r(315), r(2297)])[r(965)]() }), responseSchema: k({ success: e0(), status: X().optional(), statusText: v()[r(965)](), headers: U0(v()).optional(), data: N0().optional(), error: v()[r(965)]() }) }, openaiImageEdit: { requestSchema: k({ apiKey: v(), baseURL: v(), imageToken: v(), prompt: v(), model: v() }), responseSchema: k({ success: e0(), imageUrl: v()[r(965)](), apiTime: X()[r(965)](), error: v()[r(965)]() }) }, geminiImageGenerate: { requestSchema: k({ apiKey: v(), baseURL: v()[r(965)](), imageInputs: v0(v()).optional(), imageInput: v()[r(965)](), imageInputType: E0([r(1133), r(1325)]), prompt: v() }), responseSchema: k({ success: e0(), imageUrl: v()[r(965)](), apiTime: X().optional(), error: v()[r(965)]() }) } }, Wi = { "fileResource.createFromExternal": { requestSchema: k({ url: v() }), responseSchema: k({ resource: v()[r(965)](), thumbnail: v()[r(965)](), width: X()[r(965)](), height: X()[r(965)](), mime: v().optional(), mimeType: v()[r(965)](), error: v()[r(965)]() }) }, "fileResource.createFromLocal": { requestSchema: k({ types: v0(k({ description: v()[r(965)](), extensions: v0(v()).optional() }))[r(965)]() }), responseSchema: k({ resource: v()[r(965)](), thumbnail: v()[r(965)](), width: X()[r(965)](), height: X().optional(), mime: v()[r(965)](), error: v()[r(965)]() }) }, "fileResource.createFromCBM": { requestSchema: k({ contentUri: v()[r(965)](), boundaryUri: v()[r(965)](), maskUri: v()[r(965)](), options: U0(We())[r(965)]() }), responseSchema: k({ resource: v()[r(965)](), thumbnail: v()[r(965)](), width: X()[r(965)](), height: X().optional(), mime: v()[r(965)](), error: v()[r(965)]() }) }, "fileResource.delete": { requestSchema: k({ resources: v0(v()) }), responseSchema: k({ error: v()[r(965)]() }) }, "fileResource.thumbnail": { requestSchema: k({ resource: v(), maxSize: X()[r(965)]() }), responseSchema: k({ thumbnail: v().optional(), width: X().optional(), height: X()[r(965)](), error: v()[r(965)]() }) }, "fileResource.saveAs": { requestSchema: k({ resources: v0(v()) }), responseSchema: k({ error: v()[r(965)]() }) }, "boundary.normalize": { requestSchema: k({ boundary: v() }), responseSchema: k({ boundary: v()[r(965)](), error: v().optional() }) }, "layer.resolve": { requestSchema: k({ uri: v(), type: E0(["content", "mask"]) }), responseSchema: k({ uri: v()[r(965)](), error: v().optional() }) } }, Zi = di({ nodes: { sdk: { store: Ni, actions: { ...ji } }, uxp: { store: qi, actions: { ...zi, ...Wi, ...Vi, ...$i, ...Ui, ...Hi } }, comfy: { store: Fi, actions: { ...Di, ...Ti } } }, edges: [["sdk", "uxp"], ["comfy", r(2256)]] }), I0 = Zi[r(1386)](r(2114));
globalThis[r(303)] = I0;
var dx = { exports: {} }, Ux, Ar;
function Bi() {
  if (Ar) return Ux;
  Ar = 1;
  var i = 1e3, x = i * 60, t = x * 60, a = t * 24, e = a * 7, s = a * 365.25;
  Ux = function(d, f) {
    const l = B;
    f = f || {};
    var g = typeof d;
    if (g === l(718) && d[l(520)] > 0) return n(d);
    if (g === l(191) && isFinite(d)) return f[l(956)] ? c(d) : o(d);
    throw new Error(l(1573) + JSON[l(2403)](d));
  };
  function n(d) {
    const f = B;
    if (d = String(d), !(d[f(520)] > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[f(1966)](d);
      if (l) {
        var g = parseFloat(l[1]), h = (l[2] || "ms")[f(798)]();
        switch (h) {
          case f(443):
          case f(457):
          case f(280):
          case "yr":
          case "y":
            return g * s;
          case f(977):
          case "week":
          case "w":
            return g * e;
          case f(2278):
          case f(949):
          case "d":
            return g * a;
          case f(2597):
          case f(2447):
          case "hrs":
          case "hr":
          case "h":
            return g * t;
          case f(1053):
          case "minute":
          case "mins":
          case f(1150):
          case "m":
            return g * x;
          case "seconds":
          case f(1113):
          case f(1924):
          case f(1407):
          case "s":
            return g * i;
          case f(1129):
          case f(256):
          case f(1831):
          case "msec":
          case "ms":
            return g;
          default:
            return;
        }
      }
    }
  }
  function o(d) {
    const f = B;
    var l = Math.abs(d);
    return l >= a ? Math[f(489)](d / a) + "d" : l >= t ? Math[f(489)](d / t) + "h" : l >= x ? Math[f(489)](d / x) + "m" : l >= i ? Math[f(489)](d / i) + "s" : d + "ms";
  }
  function c(d) {
    const f = B;
    var l = Math[f(759)](d);
    return l >= a ? u(d, l, a, f(949)) : l >= t ? u(d, l, t, "hour") : l >= x ? u(d, l, x, f(1233)) : l >= i ? u(d, l, i, f(1113)) : d + " ms";
  }
  function u(d, f, l, g) {
    const h = B;
    var m = f >= l * 1.5;
    return Math[h(489)](d / l) + " " + g + (m ? "s" : "");
  }
  return Ux;
}
var Vx, Or;
function Ki() {
  if (Or) return Vx;
  Or = 1;
  function i(x) {
    const t = B;
    e[t(953)] = e, e.default = e, e[t(1019)] = d, e[t(620)] = c, e.enable = n, e.enabled = u, e[t(1400)] = Bi(), e[t(1477)] = f, Object.keys(x)[t(1634)]((l) => {
      e[l] = x[l];
    }), e[t(2415)] = [], e[t(263)] = [], e.formatters = {};
    function a(l) {
      const g = t;
      let h = 0;
      for (let m = 0; m < l.length; m++)
        h = (h << 5) - h + l[g(2257)](m), h |= 0;
      return e[g(2609)][Math.abs(h) % e[g(2609)].length];
    }
    e[t(1969)] = a;
    function e(l) {
      const g = t;
      let h, m = null, y, S;
      function E(...O) {
        const q = B;
        if (!E.enabled) return;
        const I = E, P = Number(/* @__PURE__ */ new Date()), T = P - (h || P);
        I[q(817)] = T, I[q(2100)] = h, I[q(265)] = P, h = P, O[0] = e[q(1019)](O[0]), typeof O[0] != "string" && O[q(1951)]("%O");
        let D = 0;
        O[0] = O[0][q(1927)](/%([a-zA-Z%])/g, (M, F) => {
          const C = q;
          if (M === "%%") return "%";
          D++;
          const U = e[C(2565)][F];
          if (typeof U === C(1538)) {
            const H = O[D];
            M = U[C(422)](I, H), O[C(925)](D, 1), D--;
          }
          return M;
        }), e[q(2618)].call(I, O), (I[q(811)] || e.log)[q(560)](I, O);
      }
      return E[g(611)] = l, E[g(1860)] = e[g(1860)](), E.color = e[g(1969)](l), E[g(1478)] = s, E.destroy = e[g(1477)], Object[g(2157)](E, g(445), { enumerable: !0, configurable: !1, get: () => {
        const O = g;
        return m !== null ? m : (y !== e[O(2299)] && (y = e.namespaces, S = e[O(445)](l)), S);
      }, set: (O) => {
        m = O;
      } }), typeof e[g(1766)] == "function" && e[g(1766)](E), E;
    }
    function s(l, g) {
      const h = t, m = e(this.namespace + (typeof g === h(2550) ? ":" : g) + l);
      return m[h(811)] = this.log, m;
    }
    function n(l) {
      const g = t;
      e[g(1324)](l), e.namespaces = l, e[g(2415)] = [], e.skips = [];
      const h = (typeof l == "string" ? l : "").trim()[g(1927)](/\s+/g, ",")[g(2068)](",").filter(Boolean);
      for (const m of h)
        m[0] === "-" ? e[g(263)][g(1131)](m[g(1597)](1)) : e[g(2415)].push(m);
    }
    function o(l, g) {
      const h = t;
      let m = 0, y = 0, S = -1, E = 0;
      for (; m < l[h(520)]; )
        if (y < g[h(520)] && (g[y] === l[m] || g[y] === "*")) g[y] === "*" ? (S = y, E = m, y++) : (m++, y++);
        else if (S !== -1) y = S + 1, E++, m = E;
        else return !1;
      for (; y < g[h(520)] && g[y] === "*"; )
        y++;
      return y === g[h(520)];
    }
    function c() {
      const l = t, g = [...e[l(2415)], ...e[l(263)][l(2388)]((h) => "-" + h)].join(",");
      return e[l(966)](""), g;
    }
    function u(l) {
      const g = t;
      for (const h of e[g(263)])
        if (o(l, h)) return !1;
      for (const h of e[g(2415)])
        if (o(l, h)) return !0;
      return !1;
    }
    function d(l) {
      const g = t;
      return l instanceof Error ? l[g(2015)] || l[g(2235)] : l;
    }
    function f() {
      const l = t;
      console[l(183)](l(1099));
    }
    return e[t(966)](e[t(1510)]()), e;
  }
  return Vx = i, Vx;
}
var Dr;
function Gi() {
  const i = r;
  return Dr || (Dr = 1, function(x, t) {
    const a = i;
    t.formatArgs = s, t[a(1324)] = n, t.load = o, t[a(1860)] = e, t[a(1633)] = c(), t[a(1477)] = /* @__PURE__ */ (() => {
      let d = !1;
      return () => {
        const f = B;
        !d && (d = !0, console[f(183)](f(1099)));
      };
    })(), t[a(2609)] = [a(860), a(2038), a(1435), "#0033FF", a(358), "#0066FF", a(375), a(2358), a(2021), "#00CC33", "#00CC66", a(204), "#00CCCC", a(1164), a(2318), a(2440), a(624), a(381), a(239), a(2281), a(1833), a(2556), a(487), a(978), a(1844), a(1902), "#33CCCC", a(2446), a(1451), a(1057), a(610), a(1119), a(1196), a(784), a(931), a(2049), "#9933CC", a(726), a(1095), a(835), a(1974), a(1107), a(354), a(2276), a(1679), a(1707), a(1105), a(1575), a(771), "#CC3399", a(458), "#CC33FF", a(1937), a(2401), a(2280), a(1101), a(1499), a(2512), a(1754), a(133), a(2310), "#FF0099", a(2020), a(196), a(1839), a(1159), a(289), "#FF3399", "#FF33CC", a(1846), a(1775), a(577), a(1985), "#FF9933", a(2168), a(2092)];
    function e() {
      const d = a;
      if (typeof window !== d(2550) && window.process && (window[d(2271)][d(2043)] === d(1818) || window[d(2271)][d(1616)])) return !0;
      if (typeof navigator < "u" && navigator[d(1682)] && navigator[d(1682)].toLowerCase()[d(508)](/(edge|trident)\/(\d+)/)) return !1;
      let f;
      return typeof document !== d(2550) && document[d(1544)] && document[d(1544)][d(872)] && document.documentElement[d(872)][d(2462)] || typeof window !== d(2550) && window.console && (window.console[d(1309)] || window.console.exception && window[d(374)][d(1417)]) || typeof navigator !== d(2550) && navigator[d(1682)] && (f = navigator.userAgent[d(798)]()[d(508)](/firefox\/(\d+)/)) && parseInt(f[1], 10) >= 31 || typeof navigator < "u" && navigator[d(1682)] && navigator.userAgent.toLowerCase()[d(508)](/applewebkit\/(\d+)/);
    }
    function s(d) {
      const f = a;
      if (d[0] = (this[f(1860)] ? "%c" : "") + this[f(611)] + (this.useColors ? f(1379) : " ") + d[0] + (this[f(1860)] ? f(407) : " ") + "+" + x[f(1005)][f(1400)](this.diff), !this[f(1860)]) return;
      const l = f(1636) + this[f(2368)];
      d[f(925)](1, 0, l, f(1081));
      let g = 0, h = 0;
      d[0][f(1927)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (g++, m === "%c" && (h = g));
      }), d[f(925)](h, 0, l);
    }
    t[a(811)] = console[a(953)] || console[a(811)] || (() => {
    });
    function n(d) {
      const f = a;
      try {
        d ? t[f(1633)][f(1425)](f(953), d) : t[f(1633)][f(2078)](f(953));
      } catch {
      }
    }
    function o() {
      const d = a;
      let f;
      try {
        f = t[d(1633)][d(301)]("debug") || t.storage[d(301)]("DEBUG");
      } catch {
      }
      return !f && typeof process < "u" && d(478) in process && (f = process.env.DEBUG), f;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x[a(1005)] = Ki()(t);
    const { formatters: u } = x[a(1005)];
    u.j = function(d) {
      const f = a;
      try {
        return JSON[f(2403)](d);
      } catch (l) {
        return f(2494) + l.message;
      }
    };
  }(dx, dx[i(1005)])), dx[i(1005)];
}
var Ji = Gi();
const $s = Ls(Ji);
$s[r(966)]("*");
function Qi(i, x) {
  const t = r, a = $s(i), e = (s, n) => async function(...o) {
    try {
      await x({ level: s, messages: o });
    } catch {
    }
  };
  return a[t(811)] = e(t(811)), a;
}
const sx = Qi(r(1361), async ({ level: i, messages: x }) => {
  const t = r, { mcpMesh: a } = await Promise.resolve()[t(1124)](() => Mc);
  await a[t(1154)]("uxp")[t(528)].log({ level: i, messages: x });
});
globalThis[r(2234)] = globalThis.sdpppX2 || {};
const _e = globalThis[r(2234)], Xi = { "preview.show": r(2228), "gateway.select_ai_service": r(479), "provider.select.title": r(1212), "provider.comfyui.description": r(288), "provider.replicate.description": "海量模型，稳定服务", "provider.runninghub.description": r(1749), "provider.google.description": r(1194), "task.waiting_upload": r(2079), "task.creating_task": r(1026), "task.running_duration": r(117), "task.cancelled": r(1528), "task.cancel_failed": r(138), "comfy.connect": "连接", "comfy.load_failed": r(1020), "comfy.loading": r(496), "comfy.channel_connecting": r(1419), "comfy.server_reconnecting": r(185), "comfy.version_mismatch": "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "comfy.cloud_recommend": r(2449), "comfy.your_workflows": r(939), "comfy.refresh_workflows": "刷新工作流列表", "comfy.queue_progress": r(270), "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": r(2455), "comfy.stop_auto_run": r(378), "comfy.start_auto_run": "画布变动后自动运行", "comfy.auto_run_status": r(1977), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": r(329), "comfy.help_tooltip": r(737), "comfy.no_workflow_selected": r(2527), "boundary.title": r(2350), "boundary.tooltip": "AI使用的区域与最大尺寸控制", "boundary.current_canvas": r(125), "boundary.current_layer": "当前图层", "boundary.current_selection": "当前选区", "boundary.set_as_canvas": "设为画布", "boundary.set_as_layer": r(2452), "boundary.set_as_selection": r(912), "http.404": r(1043), "http.401": r(343), "http.403": r(2024), "http.408": r(493), "http.500": r(1761), "http.501": r(1826), "http.502": r(254), "http.503": r(1687), "http.504": r(984), "http.unknown": r(1300), "runninghub.get_apikey": r(1187), "runninghub.apikey_placeholder": r(1529), "runninghub.app_id": r(308), "runninghub.webapp_id_placeholder": "此处粘贴 WebApp ID", "runninghub.open_app": "按回车打开应用： {{appName}}", "runninghub.execute": "执行", "runninghub.running": r(698), "runninghub.rh_coins": r(1490), "runninghub.current_tasks": r(600), "runninghub.help_tooltip": "使用教程", "runninghub.stop_all": r(1588), "runninghub.status.waiting": r(728), "runninghub.status.running": "正在运行", "runninghub.status.failed": r(2467), "runninghub.status.success": r(1910), "image.auto_refetch": r(1e3), "runninghub.error.get_result_failed": r(1059), "runninghub.error.task_failed": r(2558), "runninghub.error.task_incomplete": r(813), "replicate.get_apikey": r(1206), "replicate.apikey_placeholder": r(2240), "replicate.execute": "执行", "replicate.model_placeholder": r(1587), "replicate.help_tooltip": r(737), "replicate.loading": "加载中...", "replicate.running": r(698), "replicate.stop": "停止", "liblib.get_apikey": r(839), "liblib.execute": "执行", "common.close": "关闭", "common.save": "保存", "common.save_and_run": r(2636), "common.loading": r(1669), "common.error": "错误", "common.success": "成功", "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": r(709), webviewInForeground: r(2183), webviewInForeground2: r(2237), "auth.login_success": "登录成功", "auth.username_label": r(1517), "auth.email_label": r(767), "auth.logout": r(729), "auth.login_required": r(2064), "image.send.select_position": r(2140), "image.send.sending": "正在发送图像...", "image.layer.new": r(2559), "image.layer.current": "当前图层", "image.layer.fit_to_current": r(1183), "image.layer.fit_to_selection": r(935), "image.layer.fit_to_canvas": "适配至画布", "image.shortcut_auth_required": r(1459), "image.shortcut_focus_required": r(2493), "image.get.select_image": r(898), "image.get.entire_canvas": r(125), "image.get.canvas": "画布", "image.get.current_layer": r(1514), "image.get.current_layer_bounds": "仅当前图层范围", "image.get.selection_bounds": r(237), "image.get.canvas_bounds": r(1899), "image.crop_by_selection": r(972), "image.limit_size": "限制图片尺寸", "image.crop.none": r(827), "image.crop.inpaint": r(386), "image.crop.outpaint": r(2261), "image.send_all": r(2510), "image.save_all": r(1554), "image.save_current": "保存当前", "image.delete_current": r(716), "image.more_actions": "更多操作", "image.jump_to_last": r(2588), "image.clear_all": "清空所有", "image.send_to_ps": r(902), "image.download": "下载", "image.copy": "复制", "image.sending": "正在发送...", "image.sending_all": r(1947), "mask.get.select_mask": r(119), "mask.selection": "选区", "mask.current_layer_bounds": r(1091), "mask.all": "全部", "mask.selection_exclude": r(730), "mask.current_layer_exclude": r(395), "mask.empty": "空", "document {{0}} not found": r(1671), "create document for preview": r(490), "resize document for preview": r(2369), "create document for sent images": r(2528), "show sent images": "显示发送的图片", "create layer failed": r(869), "layer not found {{0}}": "找不到图层: {{0}}", "layer not found: {{0}}": r(495), "layer {{0}} is not a group": r(2547), "no linked layer for {{0}}": r(2505), "no first related layer in {{0}}": r(1619), "merge group failed": r(1243), "get content of layer {{0}}": r(2399), "get layer info": r(1024), "get_layer_info: layer_identify required": r(753), "get pixel of {{0}} failed": r(1032), "get selection failed": r(144), "invalid name: {{0}}": r(1469), "desire bounds is null": "目标边界为空", "intersect or scaledDesire is null": "交集或缩放目标为空", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': r(1781), "select layer": r(2409), "run Photoshop Action": r(1684), "Action {{0}} not found": r(2175), "Action set {{0}} not found": r(461), "set text to layer": "设置图层的文本", "ComfyManager not found, cannot reboot": "Comfy Manager未安装，无法重启", "Failed to reboot ComfyUI": "重启ComfyUI失败", "image.upload.from_canvas": "画布", "image.upload.from_curlayer": "当前图层", "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": r(2554), "image.upload.no_images": "暂无图片", "image.upload.error": r(2374), "image.upload.tooltip.more_options_hint": r(1013), "image.upload.tooltip.alt.crop": r(1311), "image.upload.tooltip.alt.reverse": r(1631), "image.upload.tooltip.image.canvas": r(952), "image.upload.tooltip.image.curlayer": r(1422), "image.upload.tooltip.mask.curlayer": "从 当前图层 获取遮罩", "image.upload.tooltip.mask.selection": r(215), "image.upload.tooltip.mask.canvas": r(201), "image.upload.tooltip.cut_action": r(2056), "image.upload.tooltip.scan_action": r(2429), "image.upload.tooltip.autosync.on": r(1786), "image.upload.tooltip.autosync.off": "自动同步: 关闭", "image.upload.autosync.fetching": r(793), "image.upload.tooltip.current.canvas": r(858), "image.upload.tooltip.current.layer": r(2498), "image.upload.tooltip.current.layer_named": r(441), "image.upload.tooltip.current.file": r(1111), "image.upload.retry": "重试", "image.pack.local.button": r(1989), "image.pack.local.empty": r(1420), "image.auto_send_enabled": r(1792), "image.auto_send_disabled": r(146), "image.upload.primary.auto": "自动取图中…", "image.upload.primary.manual": r(714), "image.upload.primary.hint": r(566), "image.upload.primary.cut": "裁剪", "image.upload.primary.scan": "扫描", "image.upload.primary.hint.line1": r(421), "image.upload.primary.hint.line2": "主图", "workflow.output.destination.title": "输出至：", "workflow.output.destination.canvas": "全图", "image.upload.primary.advanced": r(1354), "image.upload.primary.advanced.modify": "修改", "image.upload.primary.advanced.reset": "重置", "image.upload.primary.advanced.local_file": r(1424), "image.upload.primary.advanced.content.canvas": "画布", "image.upload.primary.advanced.content.curlayer": "当前图层", "image.upload.primary.advanced.content.selection": "选区", "image.upload.primary.advanced.boundary.canvas": r(2003), "image.upload.primary.advanced.boundary.curlayer": "当前图层边界", "image.upload.primary.advanced.boundary.selection": "选区边界", "image.upload.primary.advanced.boundary.primary": r(1780), "image.upload.mask.button": "选区遮罩", "image.upload.mask.selection": r(1988), "image.upload.mask.layer": r(532), "image.upload.remove_slot": r(2376), "image.upload.add_slot": "新增槽位", "video.local.button": r(255), "video.local.empty": r(1532), "video.local.remove": r(2014), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": r(2233), "source.ps_mask": "PS遮罩", "source.canvas": r(125), "source.current_layer": "当前图层", "source.selection": "选区", "source.quality_percent": "质量{{percent}}%", "source.crop.positive": r(776), "source.crop.negative": "反向裁剪", "source.reverse": "反转", "send_images.create_document": r(337), "send_images.create_document_failed": r(980), "photoshop.no_active_document": r(946), "photoshop.rectangle_coordinates_required": "创建操作需要矩形坐标", "photoshop.create_guide_frame": "创建参考线框架", "photoshop.clear_guide_frame": r(2546), "photoshop.invalid_action": r(615), "photoshop.file_not_found": r(250), "photoshop.failed_to_open_file_as_document": r(377), "photoshop.invalid_boundary": r(2551), "photoshop.failed_to_open_image_file": r(1997), "photoshop.open_images_from_file": "从文件打开图像", "photoshop.failed_to_create_document_from_file": "无法从文件创建文档", "google.field.image_input": "输入图像", "google.field.prompt": r(2387), "google.field.batch_count": r(1412), "google.field.images_per_batch": r(2046), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": r(2315), "google.apikey_placeholder": r(2204), "google.baseurl_placeholder": r(363), "google.get_apikey": "获取 API Key", "google.help_tooltip": r(905), "google.model_name": r(1430), "google.model_label": "模型", "google.model_placeholder": r(917), "google.stop": "停止", "google.loading": r(1669), "google.generating": "生成中...", "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": r(1327), "image.import_as_newdoc": r(2073), "image.boundary": "边界", "image.import_tip": r(1708), "auth.guest_login_success": r(2407), "boundary.canvas": "画布", "boundary.select_boundary": "选择边界", "boundary.selection": "选区", "boundary.max_size": r(1984), "boundary.max_size_error": "请输入大于 0 的像素值", "boundary.max_size_hint": "留空表示不限", "boundary.max_size_placeholder": r(1003), "boundary.no_limit": "不限", "boundary.image_quality": r(2162), "boundary.image_quality_required": r(2532), "boundary.image_quality_range": r(353), "boundary.preview_main_image": r(619), "boundary.preview_select": r(831), "boundary.preview_alt": r(427), "boundary.preview_placeholder": r(1892), "boundary.settings": r(622), "convert widget {0} failed:": "控件 {0} 转换失败：", "document {0} not found": r(1552), "image.document.new": r(2473), "image.layer.smart_object": r(118), "layer not found {0}": r(1570), "photoshop.invalid_boundary_type": r(555), "photoshop.no_active_layer": "当前没有活动图层", "dialog.image_source.title": "选择图像来源", "dialog.image_source.primary_canvas": r(1964), "dialog.image_source.primary_curlayer": r(1359), "dialog.image_source.canvas_canvas": r(1835), "dialog.image_source.canvas_curlayer": r(786), "dialog.image_source.curlayer_canvas": r(1056), "dialog.image_source.curlayer_curlayer": r(1711), "dialog.image_source.local_file": r(1424), "dialog.simple_source.title": r(1913), "dialog.simple_source.canvas": "画布", "dialog.simple_source.current_layer": r(1514), "dialog.simple_source.local_file": r(658), "dialog.simple_source.no_active_layer": r(1385), "dialog.simple_source.pick_error": "选择文件失败，请重试" }, Yi = { "preview.show": "Show Preview ({{count}} images)", "gateway.select_ai_service": r(1220), "provider.select.title": "Select AI Service Provider", "provider.comfyui.description": r(1934), "provider.replicate.description": r(787), "provider.runninghub.description": r(1058), "provider.google.description": r(1689), "task.waiting_upload": r(595), "task.creating_task": r(563), "task.running_duration": r(862), "task.cancelled": r(1857), "task.cancel_failed": r(507), "comfy.connect": r(1126), "comfy.load_failed": r(1134), "comfy.loading": r(2304), "comfy.channel_connecting": "Channel connecting...", "comfy.server_reconnecting": "ComfyUI server reconnecting", "comfy.version_mismatch": r(1578), "comfy.cloud_recommend": r(2225), "comfy.your_workflows": "Your Workflows", "comfy.refresh_workflows": r(1999), "comfy.queue_progress": r(1816), "comfy.save": r(433), "comfy.refresh": r(788), "comfy.stop_cancel_all": "Stop and cancel all", "comfy.stop_auto_run": "Stop auto run", "comfy.start_auto_run": "Auto run after canvas change", "comfy.auto_run_status": r(941), "comfy.run": r(773), "comfy.back": "Back", "comfy.uploading": "Uploading...", "comfy.help_tooltip": r(2398), "comfy.no_workflow_selected": "No workflow selected", "boundary.title": r(1579), "boundary.tooltip": "Area AI reads from; controls max image size", "boundary.current_canvas": r(2307), "boundary.current_layer": r(2614), "boundary.current_selection": r(675), "boundary.set_as_canvas": "Set as Canvas", "boundary.set_as_layer": "Set as Current Layer", "boundary.set_as_selection": r(219), "http.404": r(2589), "http.401": "Unauthorized (401)", "http.403": r(1362), "http.408": r(1674), "http.500": r(1015), "http.501": r(1455), "http.502": "Gateway error (502)", "http.503": r(2103), "http.504": "Gateway timeout (504)", "http.unknown": "Unknown error ({{code}})", "runninghub.get_apikey": "Click to get RunningHub APIKey", "runninghub.apikey_placeholder": r(1160), "runninghub.app_id": r(2478), "runninghub.webapp_id_placeholder": r(2039), "runninghub.open_app": r(1810), "runninghub.execute": r(1607), "runninghub.running": r(468), "runninghub.rh_coins": r(1482), "runninghub.current_tasks": r(1608), "runninghub.help_tooltip": "Tutorial", "runninghub.stop_all": r(593), "runninghub.status.waiting": r(213), "runninghub.status.running": r(2171), "runninghub.status.failed": r(947), "runninghub.status.success": "Success", "image.auto_refetch": r(247), "runninghub.error.get_result_failed": r(122), "runninghub.error.task_failed": "Task execution failed: {{error}}", "runninghub.error.task_incomplete": "Task incomplete, current status: {{status}}", "replicate.get_apikey": r(982), "replicate.apikey_placeholder": r(2129), "replicate.execute": "Execute", "replicate.model_placeholder": "Paste your model name", "replicate.help_tooltip": r(2398), "replicate.loading": r(287), "replicate.running": "Running...", "replicate.stop": r(945), "liblib.get_apikey": r(938), "liblib.execute": "Execute", "common.close": r(2154), "common.save": r(433), "common.save_and_run": "Save and run immediately", "common.loading": "Loading...", "common.error": r(370), "common.success": r(1930), "common.cancel": r(2244), "common.confirm": r(1290), "common.options": r(1010), "common.options_separator": r(2453), webviewInForeground: r(2384), webviewInForeground2: r(900), "auth.login_success": r(1051), "auth.username_label": "Username: {{username}}", "auth.email_label": r(112), "auth.logout": r(1957), "auth.login_required": "Please login to use the plugin", "image.send.select_position": "Please select the position to send image", "image.send.sending": "Sending image...", "image.layer.new": "New Layer", "image.layer.current": r(2614), "image.layer.fit_to_current": "Fit to current layer", "image.layer.fit_to_selection": r(757), "image.layer.fit_to_canvas": r(1662), "image.shortcut_auth_required": "Shortcut selection feature requires login", "image.shortcut_focus_required": "Plugin window focused required to use keyboard shortcut", "image.get.select_image": "Please select the image to get", "image.get.entire_canvas": "Entire Canvas", "image.get.canvas": r(278), "image.get.current_layer": r(2614), "image.get.current_layer_bounds": r(1873), "image.get.selection_bounds": r(455), "image.get.canvas_bounds": "Canvas bounds", "image.crop_by_selection": r(1591), "image.limit_size": r(2156), "image.crop.none": r(864), "image.crop.inpaint": "Inpaint (reverse crop)", "image.crop.outpaint": r(2590), "image.send_all": r(2143), "image.save_all": r(820), "image.save_current": r(1593), "image.delete_current": r(1941), "image.more_actions": r(211), "image.jump_to_last": r(1063), "image.clear_all": r(975), "image.send_to_ps": "Send to PS", "image.download": r(1645), "image.copy": r(870), "image.sending": r(809), "image.sending_all": r(334), "mask.get.select_mask": r(165), "mask.selection": r(2102), "mask.current_layer_bounds": r(1329), "mask.all": r(1355), "mask.selection_exclude": r(768), "mask.current_layer_exclude": r(1442), "mask.empty": r(1524), "document {{0}} not found": r(1496), "create document for preview": "Create document for preview", "resize document for preview": "Resize document for preview", "create document for sent images": r(446), "show sent images": r(664), "create layer failed": r(523), "layer not found {{0}}": r(1184), "layer not found: {{0}}": "Layer not found: {{0}}", "layer {{0}} is not a group": r(2360), "no linked layer for {{0}}": r(846), "no first related layer in {{0}}": r(1555), "merge group failed": r(2164), "get content of layer {{0}}": "Get content of layer {{0}}", "get layer info": r(2229), "get_layer_info: layer_identify required": r(1630), "get pixel of {{0}} failed": r(685), "get selection failed": "Get selection failed", "invalid name: {{0}}": r(2253), "desire bounds is null": r(2486), "intersect or scaledDesire is null": "Intersect or scaledDesire is null", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': r(1774), "select layer": r(749), "run Photoshop Action": r(1809), "Action {{0}} not found": "Action {{0}} was not found", "Action set {{0}} not found": r(1208), "set text to layer": "Set text to layer", "ComfyManager not found, cannot reboot": "Cannot reboot because ComfyManager is missing", "Failed to reboot ComfyUI": r(650), "image.upload.from_canvas": r(278), "image.upload.from_curlayer": r(2614), "image.upload.from_selection": r(2102), "image.upload.from_harddisk": r(1147), "image.upload.clear": r(558), "image.upload.uploading": "Uploading, if the image too large, may be lag...", "image.upload.no_images": r(1009), "image.upload.error": r(2349), "image.upload.tooltip.alt.crop": r(748), "image.upload.tooltip.alt.reverse": r(429), "image.upload.tooltip.image.canvas": r(503), "image.upload.tooltip.image.curlayer": r(214), "image.upload.tooltip.mask.canvas": r(2600), "image.upload.tooltip.mask.curlayer": r(1600), "image.upload.tooltip.mask.selection": r(606), "image.upload.tooltip.cut_action": `Get image &
Crop selection mask`, "image.upload.tooltip.scan_action": `Get image &
Limit image boundary`, "image.upload.tooltip.autosync.on": r(845), "image.upload.tooltip.autosync.off": r(226), "image.upload.tooltip.more_options_hint": r(529), "image.upload.tooltip.current.canvas": "Current option: Canvas", "image.upload.tooltip.current.layer": r(509), "image.upload.tooltip.current.layer_named": "Current option: Layer {{layerName}}", "image.upload.tooltip.current.file": r(743), "image.upload.autosync.fetching": r(115), "image.upload.retry": "Retry", "image.pack.local.button": r(1627), "image.pack.local.empty": r(1540), "image.auto_send_enabled": "Auto send enabled", "image.auto_send_disabled": r(2423), "image.upload.primary.auto": r(115), "image.upload.primary.manual": r(192), "image.upload.primary.cut": r(126), "image.upload.primary.scan": r(734), "image.upload.primary.hint": r(135), "image.upload.primary.hint.line1": "Defaults using", "image.upload.primary.hint.line2": r(821), "workflow.output.destination.title": "Output to:", "workflow.output.destination.canvas": r(2460), "image.upload.primary.advanced": r(1643), "image.upload.primary.advanced.modify": r(2637), "image.upload.primary.advanced.reset": "Reset", "image.upload.primary.advanced.local_file": r(1549), "image.upload.primary.advanced.content.canvas": "Canvas", "image.upload.primary.advanced.content.curlayer": "Current layer", "image.upload.primary.advanced.content.selection": r(2102), "image.upload.primary.advanced.boundary.canvas": r(1881), "image.upload.primary.advanced.boundary.curlayer": r(546), "image.upload.primary.advanced.boundary.selection": r(430), "image.upload.primary.advanced.boundary.primary": r(396), "image.upload.mask.button": r(2508), "image.upload.mask.selection": r(2508), "image.upload.mask.layer": r(789), "image.upload.remove_slot": r(332), "image.upload.add_slot": r(2620), "video.local.button": r(1949), "video.local.empty": r(605), "video.local.remove": "Remove video", "source.source": "Source", "source.content": "Content", "source.boundary": r(108), "source.mask": "Mask", "source.disk": r(1147), "source.remote": "Remote", "source.unknown": r(2096), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": r(278), "source.current_layer": r(1898), "source.selection": r(2102), "source.quality_percent": "Quality {{percent}}%", "source.crop.positive": r(1475), "source.crop.negative": r(2434), "source.reverse": r(973), "send_images.create_document": r(2408), "send_images.create_document_failed": r(1523), "photoshop.no_active_document": r(1265), "photoshop.rectangle_coordinates_required": r(276), "photoshop.create_guide_frame": r(1190), "photoshop.clear_guide_frame": r(485), "photoshop.invalid_action": r(2285), "photoshop.file_not_found": "File not found: {{path}}", "photoshop.failed_to_open_file_as_document": r(1612), "photoshop.invalid_boundary": r(765), "photoshop.failed_to_open_image_file": r(1085), "photoshop.open_images_from_file": "Open images from file", "photoshop.failed_to_create_document_from_file": r(2313), "google.field.image_input": r(1322), "google.field.prompt": "Prompt", "google.field.batch_count": "Batch Count", "google.field.images_per_batch": r(1926), "google.status.success": r(1930), "google.status.failed": r(947), "google.status.generating": r(2105), "google.apikey_placeholder": "Enter Google API Key", "google.get_apikey": r(302), "google.baseurl_placeholder": r(1922), "google.help_tooltip": r(2066), "google.model_name": r(2533), "google.model_label": r(2366), "google.model_placeholder": "Select a model", "google.stop": r(945), "google.loading": r(287), "google.generating": r(2581), "google.generate": r(934), "image.auto_toggle": r(510), "image.import_as_smartobject": r(269), "image.import_as_newdoc": r(1738), "image.boundary": "Boundary", "image.import_tip": r(2501), "auth.guest_login_success": r(1735), "boundary.canvas": "Canvas", "boundary.select_boundary": r(1803), "boundary.selection": r(2102), "boundary.max_size": r(1100), "boundary.max_size_error": "Enter a pixel value greater than 0", "boundary.max_size_hint": "Leave empty for no limit", "boundary.max_size_placeholder": r(1249), "boundary.no_limit": "No limit", "boundary.image_quality": "Image quality (%)", "boundary.image_quality_required": r(498), "boundary.image_quality_range": r(940), "boundary.preview_main_image": r(2381), "boundary.preview_select": r(1725), "boundary.preview_alt": r(158), "boundary.preview_placeholder": r(2491), "boundary.settings": "Adjust input settings", "convert widget {0} failed:": r(438), "document {0} not found": r(376), "image.document.new": "New Document", "image.layer.smart_object": r(2480), "layer not found {0}": "Layer {0} not found", "photoshop.invalid_boundary_type": r(516), "photoshop.no_active_layer": r(1893), "dialog.image_source.title": r(1731), "dialog.image_source.primary_canvas": r(970), "dialog.image_source.primary_curlayer": r(653), "dialog.image_source.canvas_canvas": r(1800), "dialog.image_source.canvas_curlayer": "Fetch current layer with canvas boundary", "dialog.image_source.curlayer_canvas": r(2523), "dialog.image_source.curlayer_curlayer": r(1726), "dialog.image_source.local_file": r(1611), "dialog.simple_source.title": r(2173), "dialog.simple_source.canvas": r(278), "dialog.simple_source.current_layer": "Current Layer", "dialog.simple_source.local_file": r(1590), "dialog.simple_source.no_active_layer": r(149), "dialog.simple_source.pick_error": r(1706) }, p0 = (i) => typeof i === r(718), Je = () => {
  const i = r;
  let x, t;
  const a = new Promise((e, s) => {
    x = e, t = s;
  });
  return a[i(772)] = x, a[i(699)] = t, a;
}, jr = (i) => i == null ? "" : "" + i, _i = (i, x, t) => {
  i[r(1634)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, eo = /###/g, Mr = (i) => i && i[r(417)]("###") > -1 ? i[r(1927)](eo, ".") : i, Lr = (i) => !i || p0(i), ex = (i, x, t) => {
  const a = r, e = p0(x) ? x.split(".") : x;
  let s = 0;
  for (; s < e[a(520)] - 1; ) {
    if (Lr(i)) return {};
    const n = Mr(e[s]);
    !i[n] && t && (i[n] = new t()), Object[a(672)].hasOwnProperty.call(i, n) ? i = i[n] : i = {}, ++s;
  }
  return Lr(i) ? {} : { obj: i, k: Mr(e[s]) };
}, $r = (i, x, t) => {
  const a = r, { obj: e, k: s } = ex(i, x, Object);
  if (e !== void 0 || x[a(520)] === 1) {
    e[s] = t;
    return;
  }
  let n = x[x.length - 1], o = x[a(1597)](0, x[a(520)] - 1), c = ex(i, o, Object);
  for (; c[a(2138)] === void 0 && o.length; )
    n = o[o[a(520)] - 1] + "." + n, o = o[a(1597)](0, o.length - 1), c = ex(i, o, Object), c != null && c[a(2138)] && typeof c.obj[c.k + "." + n] < "u" && (c.obj = void 0);
  c[a(2138)][c.k + "." + n] = t;
}, xo = (i, x, t, a) => {
  const e = r, { obj: s, k: n } = ex(i, x, Object);
  s[n] = s[n] || [], s[n][e(1131)](t);
}, Ix = (i, x) => {
  const t = r, { obj: a, k: e } = ex(i, x);
  if (a && Object[t(672)][t(711)].call(a, e))
    return a[e];
}, to = (i, x, t) => {
  const a = Ix(i, t);
  return a !== void 0 ? a : Ix(x, t);
}, zs = (i, x, t) => {
  const a = r;
  for (const e in x)
    e !== a(2577) && e !== a(319) && (e in i ? p0(i[e]) || i[e] instanceof String || p0(x[e]) || x[e] instanceof String ? t && (i[e] = x[e]) : zs(i[e], x[e], t) : i[e] = x[e]);
  return i;
}, ze = (i) => i[r(1927)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, r(2625));
var ro = { "&": r(2063), "<": "&lt;", ">": r(313), '"': r(951), "'": "&#39;", "/": r(643) };
const ao = (i) => {
  const x = r;
  return p0(i) ? i[x(1927)](/[&<>"'\/]/g, (t) => ro[t]) : i;
};
class so {
  constructor(x) {
    const t = r;
    this[t(2241)] = x, this[t(2034)] = /* @__PURE__ */ new Map(), this[t(676)] = [];
  }
  [r(796)](x) {
    const t = r, a = this[t(2034)][t(2311)](x);
    if (a !== void 0) return a;
    const e = new RegExp(x);
    return this[t(676)][t(520)] === this[t(2241)] && this[t(2034)][t(292)](this[t(676)][t(579)]()), this.regExpMap[t(2525)](x, e), this[t(676)][t(1131)](x), e;
  }
}
const no = [" ", ",", "?", "!", ";"], io = new so(20), oo = (i, x, t) => {
  const a = r;
  x = x || "", t = t || "";
  const e = no[a(333)]((o) => x[a(417)](o) < 0 && t.indexOf(o) < 0);
  if (e.length === 0) return !0;
  const s = io.getRegExp("(" + e[a(2388)]((o) => o === "?" ? "\\?" : o)[a(1804)]("|") + ")");
  let n = !s[a(706)](i);
  if (!n) {
    const o = i[a(417)](t);
    o > 0 && !s[a(706)](i[a(2444)](0, o)) && (n = !0);
  }
  return n;
}, Bt = (i, x, t = ".") => {
  const a = r;
  if (!i) return;
  if (i[x])
    return Object[a(672)][a(711)][a(422)](i, x) ? i[x] : void 0;
  const e = x.split(t);
  let s = i;
  for (let n = 0; n < e[a(520)]; ) {
    if (!s || typeof s != "object") return;
    let o, c = "";
    for (let u = n; u < e[a(520)]; ++u)
      if (u !== n && (c += t), c += e[u], o = s[c], o !== void 0) {
        if ([a(718), "number", a(1488)][a(417)](typeof o) > -1 && u < e[a(520)] - 1) continue;
        n += u - n + 1;
        break;
      }
    s = o;
  }
  return s;
}, rx = (i) => i == null ? void 0 : i[r(1927)]("_", "-"), co = { type: r(891), log(i) {
  this[r(2287)]("log", i);
}, warn(i) {
  const x = r;
  this.output(x(183), i);
}, error(i) {
  const x = r;
  this[x(2287)](x(259), i);
}, output(i, x) {
  var a, e;
  const t = r;
  (e = (a = console == null ? void 0 : console[i]) == null ? void 0 : a[t(560)]) == null || e.call(a, console, x);
} };
class Px {
  constructor(x, t = {}) {
    this.init(x, t);
  }
  [r(1766)](x, t = {}) {
    const a = r;
    this[a(371)] = t[a(371)] || a(1667), this.logger = x || co, this.options = t, this[a(953)] = t[a(953)];
  }
  [r(811)](...x) {
    const t = r;
    return this[t(735)](x, t(811), "", !0);
  }
  [r(183)](...x) {
    const t = r;
    return this[t(735)](x, t(183), "", !0);
  }
  error(...x) {
    const t = r;
    return this[t(735)](x, t(259), "");
  }
  [r(621)](...x) {
    return this[r(735)](x, "warn", "WARNING DEPRECATED: ", !0);
  }
  [r(735)](x, t, a, e) {
    const s = r;
    return e && !this.debug ? null : (p0(x[0]) && (x[0] = "" + a + this.prefix + " " + x[0]), this[s(891)][t](x));
  }
  [r(799)](x) {
    const t = r;
    return new Px(this.logger, { prefix: this[t(371)] + ":" + x + ":", ...this.options });
  }
  [r(1519)](x) {
    const t = r;
    return x = x || this[t(1287)], x[t(371)] = x[t(371)] || this.prefix, new Px(this[t(891)], x);
  }
}
var fe = new Px();
class Nx {
  constructor() {
    this.observers = {};
  }
  on(x, t) {
    const a = r;
    return x[a(2068)](" ")[a(1634)]((e) => {
      const s = a;
      this[s(2211)][e] || (this.observers[e] = /* @__PURE__ */ new Map());
      const n = this.observers[e][s(2311)](t) || 0;
      this[s(2211)][e][s(2525)](t, n + 1);
    }), this;
  }
  off(x, t) {
    const a = r;
    if (this[a(2211)][x]) {
      if (!t) {
        delete this[a(2211)][x];
        return;
      }
      this[a(2211)][x][a(292)](t);
    }
  }
  [r(1945)](x, ...t) {
    const a = r;
    this.observers[x] && Array[a(1210)](this[a(2211)][x][a(964)]()).forEach(([s, n]) => {
      for (let o = 0; o < n; o++)
        s(...t);
    }), this.observers["*"] && Array[a(1210)](this[a(2211)]["*"][a(964)]())[a(1634)](([s, n]) => {
      const o = a;
      for (let c = 0; c < n; c++)
        s[o(560)](s, [x, ...t]);
    });
  }
}
class zr extends Nx {
  constructor(x, t = { ns: [r(1186)], defaultNS: r(1186) }) {
    const a = r;
    super(), this[a(1021)] = x || {}, this[a(1287)] = t, this[a(1287)].keySeparator === void 0 && (this.options[a(989)] = "."), this.options[a(2427)] === void 0 && (this.options[a(2427)] = !0);
  }
  addNamespaces(x) {
    const t = r;
    this.options.ns[t(417)](x) < 0 && this.options.ns[t(1131)](x);
  }
  removeNamespaces(x) {
    const t = r, a = this[t(1287)].ns[t(417)](x);
    a > -1 && this[t(1287)].ns[t(925)](a, 1);
  }
  [r(157)](x, t, a, e = {}) {
    var d, f;
    const s = r, n = e.keySeparator !== void 0 ? e[s(989)] : this[s(1287)].keySeparator, o = e.ignoreJSONStructure !== void 0 ? e[s(2427)] : this.options[s(2427)];
    let c;
    x[s(417)](".") > -1 ? c = x.split(".") : (c = [x, t], a && (Array[s(1396)](a) ? c[s(1131)](...a) : p0(a) && n ? c[s(1131)](...a[s(2068)](n)) : c[s(1131)](a)));
    const u = Ix(this[s(1021)], c);
    return !u && !t && !a && x[s(417)](".") > -1 && (x = c[0], t = c[1], a = c[s(1597)](2)[s(1804)](".")), u || !o || !p0(a) ? u : Bt((f = (d = this[s(1021)]) == null ? void 0 : d[x]) == null ? void 0 : f[t], a, n);
  }
  [r(2628)](x, t, a, e, s = { silent: !1 }) {
    const n = r, o = s[n(989)] !== void 0 ? s.keySeparator : this[n(1287)][n(989)];
    let c = [x, t];
    a && (c = c[n(874)](o ? a[n(2068)](o) : a)), x.indexOf(".") > -1 && (c = x[n(2068)]("."), e = t, t = c[1]), this[n(2151)](t), $r(this.data, c, e), s[n(1042)] || this[n(1945)](n(2378), x, t, a, e);
  }
  addResources(x, t, a, e = { silent: !1 }) {
    const s = r;
    for (const n in a)
      (p0(a[n]) || Array[s(1396)](a[n])) && this.addResource(x, t, n, a[n], { silent: !0 });
    e[s(1042)] || this.emit(s(2378), x, t, a);
  }
  [r(2610)](x, t, a, e, s, n = { silent: !1, skipCopy: !1 }) {
    const o = r;
    let c = [x, t];
    x[o(417)](".") > -1 && (c = x[o(2068)]("."), e = a, a = t, t = c[1]), this[o(2151)](t);
    let u = Ix(this[o(1021)], c) || {};
    n[o(1218)] || (a = JSON.parse(JSON.stringify(a))), e ? zs(u, a, s) : u = { ...u, ...a }, $r(this[o(1021)], c, u), n.silent || this[o(1945)](o(2378), x, t, a);
  }
  [r(1659)](x, t) {
    const a = r;
    this[a(954)](x, t) && delete this[a(1021)][x][t], this[a(568)](t), this.emit(a(253), x, t);
  }
  [r(954)](x, t) {
    return this.getResource(x, t) !== void 0;
  }
  [r(410)](x, t) {
    const a = r;
    return t || (t = this[a(1287)].defaultNS), this[a(157)](x, t);
  }
  getDataByLanguage(x) {
    return this[r(1021)][x];
  }
  [r(2418)](x) {
    const t = r, a = this[t(764)](x);
    return !!(a && Object[t(1574)](a) || [])[t(1837)]((s) => a[s] && Object.keys(a[s]).length > 0);
  }
  [r(2339)]() {
    return this[r(1021)];
  }
}
var Hs = { processors: {}, addPostProcessor(i) {
  const x = r;
  this.processors[i[x(307)]] = i;
}, handle(i, x, t, a, e) {
  const s = r;
  return i[s(1634)]((n) => {
    var c;
    const o = s;
    x = ((c = this[o(826)][n]) == null ? void 0 : c[o(2271)](x, t, a, e)) ?? x;
  }), x;
} };
const Hr = {}, Ur = (i) => !p0(i) && typeof i != "boolean" && typeof i !== r(191);
class Rx extends Nx {
  constructor(x, t = {}) {
    const a = r;
    super(), _i([a(751), a(890), a(1744), a(1982), a(425), a(2362), a(1666)], x, this), this[a(1287)] = t, this[a(1287)].keySeparator === void 0 && (this[a(1287)].keySeparator = "."), this[a(891)] = fe[a(799)]("translator");
  }
  changeLanguage(x) {
    x && (this.language = x);
  }
  [r(1917)](x, t = { interpolation: {} }) {
    const a = r, e = { ...t };
    if (x == null) return !1;
    const s = this[a(772)](x, e);
    return (s == null ? void 0 : s.res) !== void 0;
  }
  extractFromKey(x, t) {
    const a = r;
    let e = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    e === void 0 && (e = ":");
    const s = t[a(989)] !== void 0 ? t[a(989)] : this[a(1287)][a(989)];
    let n = t.ns || this[a(1287)][a(1868)] || [];
    const o = e && x[a(417)](e) > -1, c = !this[a(1287)][a(1431)] && !t[a(989)] && !this.options[a(2578)] && !t[a(1688)] && !oo(x, e, s);
    if (o && !c) {
      const u = x[a(508)](this[a(1982)][a(1518)]);
      if (u && u.length > 0) return { key: x, namespaces: p0(n) ? [n] : n };
      const d = x[a(2068)](e);
      (e !== s || e === s && this[a(1287)].ns[a(417)](d[0]) > -1) && (n = d[a(579)]()), x = d[a(1804)](s);
    }
    return { key: x, namespaces: p0(n) ? [n] : n };
  }
  translate(x, t, a) {
    const e = r;
    let s = typeof t == "object" ? { ...t } : t;
    if (typeof s !== e(1791) && this[e(1287)].overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), typeof options === e(1791) && (s = { ...s }), s || (s = {}), x == null) return "";
    Array[e(1396)](x) || (x = [String(x)]);
    const n = s[e(464)] !== void 0 ? s[e(464)] : this.options[e(464)], o = s[e(989)] !== void 0 ? s[e(989)] : this.options[e(989)], { key: c, namespaces: u } = this.extractFromKey(x[x[e(520)] - 1], s), d = u[u[e(520)] - 1];
    let f = s.nsSeparator !== void 0 ? s[e(1688)] : this.options[e(1688)];
    f === void 0 && (f = ":");
    const l = s[e(2364)] || this[e(2160)], g = s[e(1513)] || this[e(1287)][e(1513)];
    if ((l == null ? void 0 : l[e(798)]()) === e(1625))
      return g ? n ? { res: "" + d + f + c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: d, usedParams: this[e(2312)](s) } : "" + d + f + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: d, usedParams: this[e(2312)](s) } : c;
    const h = this[e(772)](x, s);
    let m = h == null ? void 0 : h[e(588)];
    const y = (h == null ? void 0 : h[e(2435)]) || c, S = (h == null ? void 0 : h[e(1291)]) || c, E = [e(1660), e(1973), e(779)], O = s[e(1940)] !== void 0 ? s[e(1940)] : this.options[e(1940)], q = !this[e(2362)] || this[e(2362)][e(2193)], I = s[e(2251)] !== void 0 && !p0(s[e(2251)]), P = Rx[e(1393)](s), T = I ? this[e(1744)].getSuffix(l, s[e(2251)], s) : "", D = s.ordinal && I ? this[e(1744)].getSuffix(l, s[e(2251)], { ordinal: !1 }) : "", j = I && !s[e(2410)] && s[e(2251)] === 0, M = j && s[e(1191) + this[e(1287)][e(2245)] + e(1120)] || s[e(1191) + T] || s[e(1191) + D] || s[e(1191)];
    let F = m;
    q && !m && P && (F = M);
    const C = Ur(F), U = Object[e(672)][e(696)][e(560)](F);
    if (q && F && C && E[e(417)](U) < 0 && !(p0(O) && Array[e(1396)](F))) {
      if (!s[e(2077)] && !this.options.returnObjects) {
        !this[e(1287)][e(871)] && this[e(891)][e(183)]("accessing an object - but returnObjects options is not enabled!");
        const H = this[e(1287)][e(871)] ? this[e(1287)][e(871)](y, F, { ...s, ns: u }) : e(530) + c + " (" + this[e(2160)] + ")' returned an object instead of string.";
        return n ? (h.res = H, h[e(2585)] = this.getUsedParamsDetails(s), h) : H;
      }
      if (o) {
        const H = Array[e(1396)](F), V = H ? [] : {}, Q = H ? S : y;
        for (const c0 in F)
          if (Object[e(672)][e(711)][e(422)](F, c0)) {
            const u0 = "" + Q + o + c0;
            P && !m ? V[c0] = this[e(758)](u0, { ...s, defaultValue: Ur(M) ? M[c0] : void 0, joinArrays: !1, ns: u }) : V[c0] = this[e(758)](u0, { ...s, joinArrays: !1, ns: u }), V[c0] === u0 && (V[c0] = F[c0]);
          }
        m = V;
      }
    } else if (q && p0(O) && Array.isArray(m))
      m = m[e(1804)](O), m && (m = this[e(2058)](m, x, s, a));
    else {
      let H = !1, V = !1;
      !this[e(222)](m) && P && (H = !0, m = M), !this[e(222)](m) && (V = !0, m = c);
      const Q = s[e(406)] || this[e(1287)][e(406)], c0 = Q && V ? void 0 : m, u0 = P && M !== m && this[e(1287)][e(2065)];
      if (V || H || u0) {
        if (this[e(891)].log(e(u0 ? 1236 : 1103), l, d, c, u0 ? M : m), o) {
          const w0 = this[e(772)](c, { ...s, keySeparator: !1 });
          w0 && w0[e(588)] && this[e(891)].warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let s0 = [];
        const n0 = this[e(890)].getFallbackCodes(this[e(1287)][e(2118)], s[e(2364)] || this[e(2160)]);
        if (this.options[e(2050)] === e(1037) && n0 && n0[0]) for (let w0 = 0; w0 < n0[e(520)]; w0++)
          s0[e(1131)](n0[w0]);
        else this.options[e(2050)] === "all" ? s0 = this.languageUtils[e(335)](s.lng || this[e(2160)]) : s0[e(1131)](s[e(2364)] || this[e(2160)]);
        const m0 = (w0, b0, D0) => {
          var A;
          const R0 = e, Q0 = P && D0 !== m ? D0 : c0;
          this.options[R0(2457)] ? this[R0(1287)][R0(2457)](w0, d, b0, Q0, u0, s) : (A = this[R0(425)]) != null && A[R0(1888)] && this[R0(425)][R0(1888)](w0, d, b0, Q0, u0, s), this.emit(R0(1103), w0, d, b0, m);
        };
        this[e(1287)][e(1888)] && (this.options[e(1745)] && I ? s0[e(1634)]((w0) => {
          const b0 = e, D0 = this[b0(1744)].getSuffixes(w0, s);
          j && s[b0(1191) + this[b0(1287)][b0(2245)] + b0(1120)] && D0[b0(417)](this[b0(1287)][b0(2245)] + b0(1120)) < 0 && D0[b0(1131)](this.options[b0(2245)] + b0(1120)), D0[b0(1634)]((R0) => {
            const Q0 = b0;
            m0([w0], c + R0, s[Q0(1191) + R0] || M);
          });
        }) : m0(s0, c, M));
      }
      m = this[e(2058)](m, x, s, h, a), V && m === c && this[e(1287)][e(2152)] && (m = "" + d + f + c), (V || H) && this[e(1287)].parseMissingKeyHandler && (m = this[e(1287)][e(1878)](this[e(1287)][e(2152)] ? "" + d + f + c : c, H ? m : void 0, s));
    }
    return n ? (h[e(588)] = m, h[e(2585)] = this[e(2312)](s), h) : m;
  }
  [r(2058)](x, t, a, e, s) {
    var u, d;
    const n = r;
    if ((u = this.i18nFormat) != null && u.parse) x = this[n(2362)][n(686)](x, { ...this[n(1287)].interpolation.defaultVariables, ...a }, a[n(2364)] || this[n(2160)] || e[n(414)], e.usedNS, e[n(2435)], { resolved: e });
    else if (!a[n(1064)]) {
      a[n(1339)] && this.interpolator[n(1766)]({ ...a, interpolation: { ...this[n(1287)][n(1339)], ...a.interpolation } });
      const f = p0(x) && (((d = a == null ? void 0 : a[n(1339)]) == null ? void 0 : d[n(187)]) !== void 0 ? a[n(1339)][n(187)] : this.options.interpolation.skipOnVariables);
      let l;
      if (f) {
        const h = x.match(this[n(1982)][n(1518)]);
        l = h && h.length;
      }
      let g = a[n(1927)] && !p0(a[n(1927)]) ? a[n(1927)] : a;
      if (this[n(1287)].interpolation[n(1739)] && (g = { ...this.options[n(1339)].defaultVariables, ...g }), x = this.interpolator[n(2352)](x, g, a.lng || this.language || e[n(414)], a), f) {
        const h = x.match(this[n(1982)][n(1518)]), m = h && h[n(520)];
        l < m && (a[n(1466)] = !1);
      }
      !a[n(2364)] && e && e.res && (a[n(2364)] = this[n(2160)] || e[n(414)]), a[n(1466)] !== !1 && (x = this[n(1982)].nest(x, (...h) => {
        const m = n;
        return (s == null ? void 0 : s[0]) === h[0] && !a[m(2135)] ? (this.logger[m(183)](m(511) + h[0] + m(330) + t[0]), null) : this[m(758)](...h, t);
      }, a)), a[n(1339)] && this[n(1982)][n(1109)]();
    }
    const o = a.postProcess || this[n(1287)][n(887)], c = p0(o) ? [o] : o;
    return x != null && (c != null && c[n(520)]) && a[n(1929)] !== !1 && (x = Hs[n(1292)](c, x, t, this[n(1287)] && this.options[n(488)] ? { i18nResolved: { ...e, usedParams: this[n(2312)](a) }, ...a } : a, this)), x;
  }
  [r(772)](x, t = {}) {
    let a, e, s, n, o;
    return p0(x) && (x = [x]), x.forEach((c) => {
      const u = B;
      if (this[u(222)](a)) return;
      const d = this[u(362)](c, t), f = d[u(594)];
      e = f;
      let l = d[u(2299)];
      this[u(1287)][u(1543)] && (l = l[u(874)](this.options.fallbackNS));
      const g = t[u(2251)] !== void 0 && !p0(t[u(2251)]), h = g && !t[u(2410)] && t[u(2251)] === 0, m = t[u(2135)] !== void 0 && (p0(t[u(2135)]) || typeof t[u(2135)] === u(191)) && t[u(2135)] !== "", y = t[u(404)] ? t[u(404)] : this[u(890)].toResolveHierarchy(t[u(2364)] || this.language, t[u(2118)]);
      l.forEach((S) => {
        var O, q;
        const E = u;
        this[E(222)](a) || (o = S, !Hr[y[0] + "-" + S] && ((O = this[E(1666)]) != null && O[E(2325)]) && !((q = this[E(1666)]) != null && q[E(2325)](o)) && (Hr[y[0] + "-" + S] = !0, this[E(891)][E(183)]('key "' + e + '" for languages "' + y[E(1804)](", ") + E(1464) + o + E(1950), E(328))), y[E(1634)]((I) => {
          var j;
          const P = E;
          if (this[P(222)](a)) return;
          n = I;
          const T = [f];
          if ((j = this[P(2362)]) != null && j[P(2062)]) this[P(2362)][P(2062)](T, f, I, S, t);
          else {
            let M;
            g && (M = this[P(1744)][P(2277)](I, t.count, t));
            const F = this[P(1287)][P(2245)] + "zero", C = this.options[P(2245)] + P(2410) + this[P(1287)][P(2245)];
            if (g && (T[P(1131)](f + M), t[P(2410)] && M[P(417)](C) === 0 && T.push(f + M[P(1927)](C, this[P(1287)].pluralSeparator)), h && T[P(1131)](f + F)), m) {
              const U = "" + f + this[P(1287)].contextSeparator + t[P(2135)];
              T[P(1131)](U), g && (T[P(1131)](U + M), t[P(2410)] && M[P(417)](C) === 0 && T.push(U + M.replace(C, this.options.pluralSeparator)), h && T[P(1131)](U + F));
            }
          }
          let D;
          for (; D = T[P(1533)](); )
            !this.isValidLookup(a) && (s = D, a = this[P(157)](I, S, D, t));
        }));
      });
    }), { res: a, usedKey: e, exactUsedKey: s, usedLng: n, usedNS: o };
  }
  [r(222)](x) {
    const t = r;
    return x !== void 0 && !(!this[t(1287)].returnNull && x === null) && !(!this[t(1287)][t(2463)] && x === "");
  }
  getResource(x, t, a, e = {}) {
    var n;
    const s = r;
    return (n = this.i18nFormat) != null && n[s(157)] ? this[s(2362)][s(157)](x, t, a, e) : this.resourceStore.getResource(x, t, a, e);
  }
  getUsedParamsDetails(x = {}) {
    const t = r, a = [t(1191), t(2410), "context", t(1927), t(2364), "lngs", t(2118), "ns", t(989), "nsSeparator", t(2077), t(464), "joinArrays", "postProcess", t(1339)], e = x[t(1927)] && !p0(x[t(1927)]);
    let s = e ? x[t(1927)] : x;
    if (e && typeof x[t(2251)] !== t(2550) && (s.count = x.count), this[t(1287)][t(1339)][t(1739)] && (s = { ...this[t(1287)][t(1339)][t(1739)], ...s }), !e) {
      s = { ...s };
      for (const n of a)
        delete s[n];
    }
    return s;
  }
  static [r(1393)](x) {
    const t = r, a = t(1191);
    for (const e in x)
      if (Object[t(672)][t(711)][t(422)](x, e) && a === e[t(2444)](0, a[t(520)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Vr {
  constructor(x) {
    const t = r;
    this[t(1287)] = x, this[t(1953)] = this[t(1287)][t(1953)] || !1, this[t(891)] = fe[t(799)](t(890));
  }
  getScriptPartFromCode(x) {
    const t = r;
    if (x = rx(x), !x || x[t(417)]("-") < 0) return null;
    const a = x[t(2068)]("-");
    return a.length === 2 || (a[t(1533)](), a[a.length - 1][t(798)]() === "x") ? null : this[t(2419)](a[t(1804)]("-"));
  }
  [r(1044)](x) {
    const t = r;
    if (x = rx(x), !x || x[t(417)]("-") < 0) return x;
    const a = x[t(2068)]("-");
    return this[t(2419)](a[0]);
  }
  [r(2419)](x) {
    const t = r;
    if (p0(x) && x[t(417)]("-") > -1) {
      let a;
      try {
        a = Intl[t(1720)](x)[0];
      } catch {
      }
      return a && this[t(1287)][t(145)] && (a = a[t(798)]()), a || (this[t(1287)][t(145)] ? x[t(798)]() : x);
    }
    return this.options[t(2391)] || this.options.lowerCaseLng ? x[t(798)]() : x;
  }
  [r(173)](x) {
    const t = r;
    return (this[t(1287)].load === t(783) || this[t(1287)][t(1336)]) && (x = this[t(1044)](x)), !this[t(1953)] || !this.supportedLngs[t(520)] || this[t(1953)][t(417)](x) > -1;
  }
  [r(591)](x) {
    const t = r;
    if (!x) return null;
    let a;
    return x.forEach((e) => {
      const s = B;
      if (a) return;
      const n = this[s(2419)](e);
      (!this[s(1287)].supportedLngs || this[s(173)](n)) && (a = n);
    }), !a && this[t(1287)][t(1953)] && x[t(1634)]((e) => {
      const s = t;
      if (a) return;
      const n = this[s(1410)](e);
      if (this[s(173)](n)) return a = n;
      const o = this[s(1044)](e);
      if (this[s(173)](o)) return a = o;
      a = this.options[s(1953)].find((c) => {
        const u = s;
        if (c === o) return c;
        if (!(c[u(417)]("-") < 0 && o[u(417)]("-") < 0) && (c[u(417)]("-") > 0 && o[u(417)]("-") < 0 && c.substring(0, c[u(417)]("-")) === o || c[u(417)](o) === 0 && o.length > 1))
          return c;
      });
    }), a || (a = this[t(182)](this[t(1287)][t(2118)])[0]), a;
  }
  [r(182)](x, t) {
    const a = r;
    if (!x) return [];
    if (typeof x == "function" && (x = x(t)), p0(x) && (x = [x]), Array[a(1396)](x)) return x;
    if (!t) return x[a(1535)] || [];
    let e = x[t];
    return e || (e = x[this[a(1410)](t)]), e || (e = x[this[a(2419)](t)]), e || (e = x[this[a(1044)](t)]), e || (e = x[a(1535)]), e || [];
  }
  [r(335)](x, t) {
    const a = r, e = this[a(182)]((t === !1 ? [] : t) || this.options[a(2118)] || [], x), s = [], n = (o) => {
      const c = a;
      o && (this[c(173)](o) ? s[c(1131)](o) : this.logger[c(183)]("rejecting language code not found in supportedLngs: " + o));
    };
    return p0(x) && (x[a(417)]("-") > -1 || x.indexOf("_") > -1) ? (this[a(1287)].load !== a(783) && n(this[a(2419)](x)), this[a(1287)].load !== a(783) && this[a(1287)].load !== a(517) && n(this[a(1410)](x)), this.options.load !== a(517) && n(this[a(1044)](x))) : p0(x) && n(this[a(2419)](x)), e[a(1634)]((o) => {
      const c = a;
      s[c(417)](o) < 0 && n(this[c(2419)](o));
    }), s;
  }
}
const Wr = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Zr = { select: (i) => r(i === 1 ? 1610 : 1874), resolvedOptions: () => ({ pluralCategories: [r(1610), r(1874)] }) };
class uo {
  constructor(x, t = {}) {
    const a = r;
    this.languageUtils = x, this[a(1287)] = t, this[a(891)] = fe[a(799)](a(1744)), this[a(1787)] = {};
  }
  addRule(x, t) {
    this.rules[x] = t;
  }
  [r(518)]() {
    this.pluralRulesCache = {};
  }
  getRule(x, t = {}) {
    const a = r, e = rx(x === "dev" ? "en" : x), s = t[a(2410)] ? a(2410) : a(674), n = JSON[a(2403)]({ cleanedCode: e, type: s });
    if (n in this[a(1787)]) return this[a(1787)][n];
    let o;
    try {
      o = new Intl.PluralRules(e, { type: s });
    } catch {
      if (!Intl) return this[a(891)][a(259)]("No Intl support, please use an Intl polyfill!"), Zr;
      if (!x[a(508)](/-|_/)) return Zr;
      const u = this.languageUtils[a(1044)](x);
      o = this[a(1281)](u, t);
    }
    return this[a(1787)][n] = o, o;
  }
  needsPlural(x, t = {}) {
    const a = r;
    let e = this[a(1281)](x, t);
    return e || (e = this.getRule("dev", t)), (e == null ? void 0 : e[a(1609)]()[a(1943)][a(520)]) > 1;
  }
  [r(163)](x, t, a = {}) {
    const e = r;
    return this[e(2284)](x, a)[e(2388)]((s) => "" + t + s);
  }
  [r(2284)](x, t = {}) {
    const a = r;
    let e = this[a(1281)](x, t);
    return e || (e = this[a(1281)]("dev", t)), e ? e[a(1609)]()[a(1943)].sort((s, n) => Wr[s] - Wr[n])[a(2388)]((s) => "" + this[a(1287)].prepend + (t[a(2410)] ? "ordinal" + this.options[a(463)] : "") + s) : [];
  }
  [r(2277)](x, t, a = {}) {
    const e = r, s = this[e(1281)](x, a);
    return s ? "" + this[e(1287)][e(463)] + (a.ordinal ? e(2410) + this[e(1287)][e(463)] : "") + s.select(t) : (this[e(891)][e(183)]("no plural rule found for: " + x), this.getSuffix(e(1980), t, a));
  }
}
const Br = (i, x, t, a = ".", e = !0) => {
  let s = to(i, x, t);
  return !s && e && p0(t) && (s = Bt(i, t, a), s === void 0 && (s = Bt(x, t, a))), s;
}, Wx = (i) => i.replace(/\$/g, r(1470));
class fo {
  constructor(x = {}) {
    var a;
    const t = r;
    this.logger = fe[t(799)]("interpolator"), this.options = x, this[t(1089)] = ((a = x == null ? void 0 : x[t(1339)]) == null ? void 0 : a[t(1089)]) || ((e) => e), this[t(1766)](x);
  }
  init(x = {}) {
    const t = r;
    x[t(1339)] || (x[t(1339)] = { escapeValue: !0 });
    const { escape: a, escapeValue: e, useRawValueToEscape: s, prefix: n, prefixEscaped: o, suffix: c, suffixEscaped: u, formatSeparator: d, unescapeSuffix: f, unescapePrefix: l, nestingPrefix: g, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: y, nestingOptionsSeparator: S, maxReplaces: E, alwaysFormat: O } = x[t(1339)];
    this.escape = a !== void 0 ? a : ao, this[t(1693)] = e !== void 0 ? e : !0, this[t(1030)] = s !== void 0 ? s : !1, this[t(371)] = n ? ze(n) : o || "{{", this.suffix = c ? ze(c) : u || "}}", this[t(731)] = d || ",", this[t(1029)] = f ? "" : l || "-", this[t(1250)] = this[t(1029)] ? "" : f || "", this[t(1310)] = g ? ze(g) : h || ze("$t("), this[t(981)] = m ? ze(m) : y || ze(")"), this[t(957)] = S || ",", this[t(175)] = E || 1e3, this[t(1307)] = O !== void 0 ? O : !1, this.resetRegExp();
  }
  [r(1109)]() {
    const x = r;
    this[x(1287)] && this[x(1766)](this[x(1287)]);
  }
  [r(1502)]() {
    const x = r, t = (a, e) => {
      const s = B;
      return (a == null ? void 0 : a[s(824)]) === e ? (a.lastIndex = 0, a) : new RegExp(e, "g");
    };
    this[x(1522)] = t(this[x(1522)], this.prefix + x(2212) + this[x(1253)]), this[x(2239)] = t(this.regexpUnescape, "" + this.prefix + this[x(1029)] + "(.+?)" + this[x(1250)] + this[x(1253)]), this[x(1518)] = t(this[x(1518)], this[x(1310)] + x(2212) + this.nestingSuffix);
  }
  [r(2352)](x, t, a, e) {
    var h;
    const s = r;
    let n, o, c;
    const u = this[s(1287)] && this[s(1287)].interpolation && this[s(1287)][s(1339)][s(1739)] || {}, d = (m) => {
      const y = s;
      if (m[y(417)](this[y(731)]) < 0) {
        const q = Br(t, u, m, this[y(1287)][y(989)], this[y(1287)][y(2427)]);
        return this[y(1307)] ? this[y(1089)](q, void 0, a, { ...e, ...t, interpolationkey: m }) : q;
      }
      const S = m[y(2068)](this[y(731)]), E = S[y(579)]().trim(), O = S[y(1804)](this[y(731)])[y(1996)]();
      return this.format(Br(t, u, E, this.options[y(989)], this[y(1287)][y(2427)]), O, a, { ...e, ...t, interpolationkey: E });
    };
    this.resetRegExp();
    const f = (e == null ? void 0 : e[s(1052)]) || this[s(1287)][s(1052)], l = ((h = e == null ? void 0 : e[s(1339)]) == null ? void 0 : h[s(187)]) !== void 0 ? e.interpolation[s(187)] : this[s(1287)][s(1339)].skipOnVariables;
    return [{ regex: this[s(2239)], safeValue: (m) => Wx(m) }, { regex: this[s(1522)], safeValue: (m) => this[s(1693)] ? Wx(this[s(1211)](m)) : Wx(m) }].forEach((m) => {
      const y = s;
      for (c = 0; n = m.regex[y(1966)](x); ) {
        const S = n[1].trim();
        if (o = d(S), o === void 0)
          if (typeof f === y(1538)) {
            const O = f(x, n, e);
            o = p0(O) ? O : "";
          } else if (e && Object[y(672)][y(711)][y(422)](e, S)) o = "";
          else if (l) {
            o = n[0];
            continue;
          } else this[y(891)].warn(y(1214) + S + y(2502) + x), o = "";
        else !p0(o) && !this[y(1030)] && (o = jr(o));
        const E = m.safeValue(o);
        if (x = x[y(1927)](n[0], E), l ? (m[y(2185)].lastIndex += o[y(520)], m[y(2185)].lastIndex -= n[0][y(520)]) : m[y(2185)][y(1613)] = 0, c++, c >= this.maxReplaces) break;
      }
    }), x;
  }
  [r(1466)](x, t, a = {}) {
    const e = r;
    let s, n, o;
    const c = (u, d) => {
      const f = B, l = this[f(957)];
      if (u[f(417)](l) < 0) return u;
      const g = u[f(2068)](new RegExp(l + f(1138)));
      let h = "{" + g[1];
      u = g[0], h = this[f(2352)](h, o);
      const m = h[f(508)](/'/g), y = h[f(508)](/"/g);
      (((m == null ? void 0 : m.length) ?? 0) % 2 === 0 && !y || y.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        o = JSON[f(686)](h), d && (o = { ...d, ...o });
      } catch (S) {
        return this[f(891)][f(183)](f(473) + u, S), "" + u + l + h;
      }
      return o[f(1191)] && o[f(1191)][f(417)](this[f(371)]) > -1 && delete o[f(1191)], u;
    };
    for (; s = this[e(1518)][e(1966)](x); ) {
      let u = [];
      o = { ...a }, o = o[e(1927)] && !p0(o[e(1927)]) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      let d = !1;
      if (s[0][e(417)](this[e(731)]) !== -1 && !/{.*}/[e(706)](s[1])) {
        const f = s[1][e(2068)](this.formatSeparator)[e(2388)]((l) => l[e(1996)]());
        s[1] = f[e(579)](), u = f, d = !0;
      }
      if (n = t(c[e(422)](this, s[1][e(1996)](), o), o), n && s[0] === x && !p0(n)) return n;
      p0(n) || (n = jr(n)), !n && (this[e(891)][e(183)](e(233) + s[1] + e(1733) + x), n = ""), d && (n = u.reduce((f, l) => this[e(1089)](f, l, a[e(2364)], { ...a, interpolationkey: s[1].trim() }), n[e(1996)]())), x = x[e(1927)](s[0], n), this[e(1522)].lastIndex = 0;
    }
    return x;
  }
}
const lo = (i) => {
  const x = r;
  let t = i[x(798)]()[x(1996)]();
  const a = {};
  if (i[x(417)]("(") > -1) {
    const e = i[x(2068)]("(");
    t = e[0][x(798)]()[x(1996)]();
    const s = e[1][x(2444)](0, e[1][x(520)] - 1);
    t === "currency" && s.indexOf(":") < 0 ? a.currency || (a.currency = s[x(1996)]()) : t === x(1580) && s[x(417)](":") < 0 ? a[x(1849)] || (a[x(1849)] = s[x(1996)]()) : s[x(2068)](";")[x(1634)]((o) => {
      const c = x;
      if (o) {
        const [u, ...d] = o.split(":"), f = d[c(1804)](":")[c(1996)]()[c(1927)](/^'+|'+$/g, ""), l = u[c(1996)]();
        a[l] || (a[l] = f), f === c(971) && (a[l] = !1), f === c(1545) && (a[l] = !0), isNaN(f) || (a[l] = parseInt(f, 10));
      }
    });
  }
  return { formatName: t, formatOptions: a };
}, Kr = (i) => {
  const x = {};
  return (t, a, e) => {
    const s = B;
    let n = e;
    e && e[s(2587)] && e[s(2538)] && e[s(2538)][e.interpolationkey] && e[e[s(2587)]] && (n = { ...n, [e[s(2587)]]: void 0 });
    const o = a + JSON.stringify(n);
    let c = x[o];
    return !c && (c = i(rx(a), e), x[o] = c), c(t);
  };
}, ho = (i) => (x, t, a) => i(rx(t), a)(x);
class po {
  constructor(x = {}) {
    const t = r;
    this[t(891)] = fe[t(799)](t(1228)), this[t(1287)] = x, this.init(x);
  }
  init(x, t = { interpolation: {} }) {
    const a = r;
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const e = t.cacheInBuiltFormats ? Kr : ho;
    this[a(2071)] = { number: e((s, n) => {
      const o = a, c = new Intl[o(2052)](s, { ...n });
      return (u) => c.format(u);
    }), currency: e((s, n) => {
      const o = a, c = new Intl[o(2052)](s, { ...n, style: o(2492) });
      return (u) => c[o(1089)](u);
    }), datetime: e((s, n) => {
      const o = a, c = new Intl[o(1880)](s, { ...n });
      return (u) => c.format(u);
    }), relativetime: e((s, n) => {
      const o = a, c = new Intl.RelativeTimeFormat(s, { ...n });
      return (u) => c.format(u, n[o(1849)] || o(949));
    }), list: e((s, n) => {
      const o = a, c = new Intl[o(205)](s, { ...n });
      return (u) => c[o(1089)](u);
    }) };
  }
  [r(2279)](x, t) {
    const a = r;
    this.formats[x[a(798)]()[a(1996)]()] = t;
  }
  addCached(x, t) {
    const a = r;
    this[a(2071)][x[a(798)]()[a(1996)]()] = Kr(t);
  }
  [r(1089)](x, t, a, e = {}) {
    const s = r, n = t[s(2068)](this[s(731)]);
    if (n[s(520)] > 1 && n[0][s(417)]("(") > 1 && n[0].indexOf(")") < 0 && n[s(1837)]((c) => c[s(417)](")") > -1)) {
      const c = n[s(1462)]((u) => u[s(417)](")") > -1);
      n[0] = [n[0], ...n[s(925)](1, c)][s(1804)](this[s(731)]);
    }
    return n[s(2404)]((c, u) => {
      var g;
      const d = s, { formatName: f, formatOptions: l } = lo(u);
      if (this[d(2071)][f]) {
        let h = c;
        try {
          const m = ((g = e == null ? void 0 : e[d(2538)]) == null ? void 0 : g[e[d(2587)]]) || {}, y = m[d(2036)] || m[d(2364)] || e.locale || e.lng || a;
          h = this[d(2071)][f](c, y, { ...l, ...e, ...m });
        } catch (m) {
          this[d(891)][d(183)](m);
        }
        return h;
      } else this[d(891)][d(183)]("there was no format function for " + f);
      return c;
    }, x);
  }
}
const mo = (i, x) => {
  const t = r;
  i.pending[x] !== void 0 && (delete i[t(477)][x], i[t(480)]--);
};
class go extends Nx {
  constructor(x, t, a, e = {}) {
    var n, o;
    const s = r;
    super(), this.backend = x, this[s(2336)] = t, this.services = a, this[s(890)] = a[s(890)], this.options = e, this[s(891)] = fe[s(799)]("backendConnector"), this.waitingReads = [], this[s(2249)] = e[s(2249)] || 10, this[s(754)] = 0, this[s(339)] = e[s(339)] >= 0 ? e[s(339)] : 5, this.retryTimeout = e[s(431)] >= 1 ? e[s(431)] : 350, this[s(959)] = {}, this[s(1577)] = [], (o = (n = this[s(1449)]) == null ? void 0 : n[s(1766)]) == null || o.call(n, a, e[s(1449)], e);
  }
  [r(2247)](x, t, a, e) {
    const s = r, n = {}, o = {}, c = {}, u = {};
    return x.forEach((d) => {
      const f = B;
      let l = !0;
      t[f(1634)]((g) => {
        const h = f, m = d + "|" + g;
        !a.reload && this[h(2336)][h(954)](d, g) ? this[h(959)][m] = 2 : this[h(959)][m] < 0 || (this.state[m] === 1 ? o[m] === void 0 && (o[m] = !0) : (this[h(959)][m] = 1, l = !1, o[m] === void 0 && (o[m] = !0), n[m] === void 0 && (n[m] = !0), u[g] === void 0 && (u[g] = !0)));
      }), l || (c[d] = !0);
    }), (Object.keys(n).length || Object[s(1574)](o)[s(520)]) && this[s(1577)][s(1131)]({ pending: o, pendingCount: Object.keys(o)[s(520)], loaded: {}, errors: [], callback: e }), { toLoad: Object[s(1574)](n), pending: Object[s(1574)](o), toLoadLanguages: Object[s(1574)](c), toLoadNamespaces: Object[s(1574)](u) };
  }
  [r(1760)](x, t, a) {
    const e = r, s = x[e(2068)]("|"), n = s[0], o = s[1];
    t && this[e(1945)](e(1832), n, o, t), !t && a && this[e(2336)][e(2610)](n, o, a, void 0, void 0, { skipCopy: !0 }), this.state[x] = t ? -1 : 2, t && a && (this.state[x] = 0);
    const c = {};
    this[e(1577)][e(1634)]((u) => {
      const d = e;
      xo(u[d(1760)], [n], o), mo(u, x), t && u.errors[d(1131)](t), u[d(480)] === 0 && !u[d(1347)] && (Object[d(1574)](u[d(1760)]).forEach((f) => {
        const l = d;
        c[f] || (c[f] = {});
        const g = u[l(1760)][f];
        g[l(520)] && g[l(1634)]((h) => {
          c[f][h] === void 0 && (c[f][h] = !0);
        });
      }), u[d(1347)] = !0, u.errors[d(520)] ? u[d(2471)](u[d(502)]) : u[d(2471)]());
    }), this[e(1945)]("loaded", c), this[e(1577)] = this[e(1577)].filter((u) => !u[e(1347)]);
  }
  [r(1935)](x, t, a, e = 0, s = this.retryTimeout, n) {
    const o = r;
    if (!x.length) return n(null, {});
    if (this[o(754)] >= this[o(2249)]) {
      this[o(733)].push({ lng: x, ns: t, fcName: a, tried: e, wait: s, callback: n });
      return;
    }
    this.readingCalls++;
    const c = (d, f) => {
      const l = o;
      if (this.readingCalls--, this[l(733)].length > 0) {
        const g = this[l(733)][l(579)]();
        this[l(1935)](g[l(2364)], g.ns, g[l(109)], g[l(1695)], g[l(172)], g.callback);
      }
      if (d && f && e < this[l(339)]) {
        setTimeout(() => {
          const g = l;
          this[g(1935)][g(422)](this, x, t, a, e + 1, s * 2, n);
        }, s);
        return;
      }
      n(d, f);
    }, u = this.backend[a][o(1489)](this[o(1449)]);
    if (u[o(520)] === 2) {
      try {
        const d = u(x, t);
        d && typeof d[o(1124)] == "function" ? d[o(1124)]((f) => c(null, f))[o(666)](c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return u(x, t, c);
  }
  prepareLoading(x, t, a = {}, e) {
    const s = r;
    if (!this.backend) return this[s(891)].warn(s(1219)), e && e();
    p0(x) && (x = this.languageUtils[s(335)](x)), p0(t) && (t = [t]);
    const n = this[s(2247)](x, t, a, e);
    if (!n[s(134)].length)
      return n.pending[s(520)] || e(), null;
    n[s(134)][s(1634)]((o) => {
      this[s(294)](o);
    });
  }
  [r(1510)](x, t, a) {
    this[r(1595)](x, t, {}, a);
  }
  [r(1285)](x, t, a) {
    this.prepareLoading(x, t, { reload: !0 }, a);
  }
  [r(294)](x, t = "") {
    const a = r, e = x.split("|"), s = e[0], n = e[1];
    this.read(s, n, a(1935), void 0, void 0, (o, c) => {
      const u = a;
      o && this[u(891)][u(183)](t + "loading namespace " + n + u(587) + s + u(1132), o), !o && c && this[u(891)].log(t + u(580) + n + u(587) + s, c), this[u(1760)](x, o, c);
    });
  }
  [r(1888)](x, t, a, e, s, n = {}, o = () => {
  }) {
    var u, d, f, l, g;
    const c = r;
    if ((d = (u = this[c(1006)]) == null ? void 0 : u[c(1666)]) != null && d[c(2325)] && !((l = (f = this[c(1006)]) == null ? void 0 : f[c(1666)]) != null && l[c(2325)](t))) {
      this[c(891)][c(183)](c(1827) + a + c(1970) + t + '" was not yet loaded', c(328));
      return;
    }
    if (!(a == null || a === "")) {
      if ((g = this[c(1449)]) != null && g[c(799)]) {
        const h = { ...n, isUpdate: s }, m = this[c(1449)][c(799)].bind(this[c(1449)]);
        if (m[c(520)] < 6) try {
          let y;
          m[c(520)] === 5 ? y = m(x, t, a, e, h) : y = m(x, t, a, e), y && typeof y[c(1124)] === c(1538) ? y[c(1124)]((S) => o(null, S))[c(666)](o) : o(null, y);
        } catch (y) {
          o(y);
        }
        else m(x, t, a, e, o, h);
      }
      !x || !x[0] || this.store.addResource(x[0], t, a, e);
    }
  }
}
const Gr = () => ({ debug: !1, initAsync: !0, ns: ["translation"], defaultNS: [r(1186)], fallbackLng: [r(1980)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: r(1068), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: r(1037), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (i) => {
  const x = r;
  let t = {};
  if (typeof i[1] == "object" && (t = i[1]), p0(i[1]) && (t[x(1191)] = i[1]), p0(i[2]) && (t.tDescription = i[2]), typeof i[2] === x(1791) || typeof i[3] == "object") {
    const a = i[3] || i[2];
    Object.keys(a).forEach((e) => {
      t[e] = a[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (i) => i, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: r(994), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), Jr = (i) => {
  var t, a;
  const x = r;
  return p0(i.ns) && (i.ns = [i.ns]), p0(i[x(2118)]) && (i[x(2118)] = [i[x(2118)]]), p0(i[x(1543)]) && (i.fallbackNS = [i[x(1543)]]), ((a = (t = i[x(1953)]) == null ? void 0 : t.indexOf) == null ? void 0 : a.call(t, "cimode")) < 0 && (i[x(1953)] = i[x(1953)][x(874)](["cimode"])), typeof i.initImmediate == "boolean" && (i[x(2221)] = i[x(983)]), i;
}, fx = () => {
}, bo = (i) => {
  const x = r;
  Object[x(540)](Object.getPrototypeOf(i))[x(1634)]((a) => {
    const e = x;
    typeof i[a] === e(1538) && (i[a] = i[a][e(1489)](i));
  });
};
class ax extends Nx {
  constructor(x = {}, t) {
    const a = r;
    if (super(), this.options = Jr(x), this.services = {}, this[a(891)] = fe, this.modules = { external: [] }, bo(this), t && !this.isInitialized && !x[a(456)]) {
      if (!this[a(1287)][a(2221)]) return this[a(1766)](x, t), this;
      setTimeout(() => {
        this[a(1766)](x, t);
      }, 0);
    }
  }
  [r(1766)](x = {}, t) {
    const a = r;
    this.isInitializing = !0, typeof x === a(1538) && (t = x, x = {}), x[a(1868)] == null && x.ns && (p0(x.ns) ? x[a(1868)] = x.ns : x.ns.indexOf(a(1186)) < 0 && (x[a(1868)] = x.ns[0]));
    const e = Gr();
    this.options = { ...e, ...this[a(1287)], ...Jr(x) }, this.options[a(1339)] = { ...e[a(1339)], ...this[a(1287)][a(1339)] }, x[a(989)] !== void 0 && (this[a(1287)].userDefinedKeySeparator = x[a(989)]), x[a(1688)] !== void 0 && (this.options[a(2578)] = x[a(1688)]);
    const s = (d) => {
      const f = a;
      return d ? typeof d === f(1538) ? new d() : d : null;
    };
    if (!this[a(1287)][a(456)]) {
      this[a(241)][a(891)] ? fe[a(1766)](s(this[a(241)].logger), this[a(1287)]) : fe[a(1766)](null, this[a(1287)]);
      let d;
      this[a(241)][a(1228)] ? d = this.modules[a(1228)] : d = po;
      const f = new Vr(this[a(1287)]);
      this[a(2336)] = new zr(this.options[a(565)], this.options);
      const l = this.services;
      l[a(891)] = fe, l[a(751)] = this[a(2336)], l.languageUtils = f, l[a(1744)] = new uo(f, { prepend: this[a(1287)][a(2245)], simplifyPluralSuffix: this[a(1287)][a(1342)] }), d && (!this[a(1287)][a(1339)][a(1089)] || this[a(1287)][a(1339)][a(1089)] === e[a(1339)][a(1089)]) && (l[a(1228)] = s(d), l[a(1228)][a(1766)](l, this.options), this.options[a(1339)][a(1089)] = l[a(1228)][a(1089)].bind(l[a(1228)])), l[a(1982)] = new fo(this.options), l[a(1666)] = { hasLoadedNamespace: this[a(2325)][a(1489)](this) }, l[a(425)] = new go(s(this[a(241)][a(1449)]), l[a(751)], l, this.options), l[a(425)].on("*", (g, ...h) => {
        this[a(1945)](g, ...h);
      }), this.modules[a(1297)] && (l[a(1297)] = s(this[a(241)][a(1297)]), l.languageDetector[a(1766)] && l[a(1297)][a(1766)](l, this[a(1287)][a(859)], this[a(1287)])), this[a(241)][a(2362)] && (l[a(2362)] = s(this[a(241)][a(2362)]), l[a(2362)][a(1766)] && l[a(2362)][a(1766)](this)), this.translator = new Rx(this.services, this[a(1287)]), this.translator.on("*", (g, ...h) => {
        this.emit(g, ...h);
      }), this[a(241)][a(1247)][a(1634)]((g) => {
        g[a(1766)] && g.init(this);
      });
    }
    if (this[a(1089)] = this[a(1287)][a(1339)][a(1089)], t || (t = fx), this[a(1287)][a(2118)] && !this.services.languageDetector && !this[a(1287)][a(2364)]) {
      const d = this[a(1006)][a(890)][a(182)](this[a(1287)][a(2118)]);
      d.length > 0 && d[0] !== a(1980) && (this[a(1287)][a(2364)] = d[0]);
    }
    !this[a(1006)].languageDetector && !this[a(1287)].lng && this[a(891)][a(183)](a(2041)), ["getResource", a(954), a(410), a(764)].forEach((d) => {
      const f = a;
      this[d] = (...l) => this[f(2336)][d](...l);
    }), [a(2628), a(1337), a(2610), a(1659)][a(1634)]((d) => {
      this[d] = (...f) => (this.store[d](...f), this);
    });
    const c = Je(), u = () => {
      const d = a, f = (l, g) => {
        const h = B;
        this.isInitializing = !1, this[h(401)] && !this[h(1274)] && this[h(891)][h(183)](h(2115)), this[h(401)] = !0, this[h(1287)].isClone || this.logger[h(811)](h(613), this.options), this[h(1945)](h(613), this[h(1287)]), c[h(772)](g), t(l, g);
      };
      if (this[d(1017)] && !this[d(401)]) return f(null, this.t[d(1489)](this));
      this[d(1825)](this.options[d(2364)], f);
    };
    return this[a(1287)][a(565)] || !this[a(1287)][a(2221)] ? u() : setTimeout(u, 0), c;
  }
  loadResources(x, t = fx) {
    var n, o;
    const a = r;
    let e = t;
    const s = p0(x) ? x : this[a(2160)];
    if (typeof x === a(1538) && (e = x), !this[a(1287)].resources || this[a(1287)].partialBundledLanguages) {
      if ((s == null ? void 0 : s[a(798)]()) === "cimode" && (!this[a(1287)][a(1201)] || this[a(1287)][a(1201)].length === 0)) return e();
      const c = [], u = (d) => {
        const f = a;
        if (!d || d === f(1625)) return;
        this[f(1006)][f(890)][f(335)](d)[f(1634)]((g) => {
          const h = f;
          g !== "cimode" && c[h(417)](g) < 0 && c[h(1131)](g);
        });
      };
      s ? u(s) : this[a(1006)].languageUtils.getFallbackCodes(this[a(1287)][a(2118)]).forEach((f) => u(f)), (o = (n = this[a(1287)][a(1201)]) == null ? void 0 : n[a(1634)]) == null || o.call(n, (d) => u(d)), this[a(1006)].backendConnector[a(1510)](c, this[a(1287)].ns, (d) => {
        const f = a;
        !d && !this[f(1925)] && this[f(2160)] && this[f(2380)](this.language), e(d);
      });
    } else e(null);
  }
  [r(2155)](x, t, a) {
    const e = r, s = Je();
    return typeof x === e(1538) && (a = x, x = void 0), typeof t === e(1538) && (a = t, t = void 0), x || (x = this[e(1017)]), t || (t = this[e(1287)].ns), a || (a = fx), this[e(1006)][e(425)].reload(x, t, (n) => {
      s[e(772)](), a(n);
    }), s;
  }
  [r(1165)](x) {
    const t = r;
    if (!x) throw new Error(t(1454));
    if (!x[t(2043)]) throw new Error(t(2085));
    return x[t(2043)] === "backend" && (this.modules.backend = x), (x.type === "logger" || x.log && x[t(183)] && x[t(259)]) && (this.modules.logger = x), x[t(2043)] === t(1297) && (this[t(241)][t(1297)] = x), x[t(2043)] === t(2362) && (this[t(241)][t(2362)] = x), x.type === "postProcessor" && Hs.addPostProcessor(x), x[t(2043)] === "formatter" && (this[t(241)][t(1228)] = x), x[t(2043)] === t(626) && this[t(241)][t(1247)].push(x), this;
  }
  [r(2380)](x) {
    const t = r;
    if (!(!x || !this[t(1017)]) && !([t(1625), "dev"][t(417)](x) > -1)) {
      for (let a = 0; a < this[t(1017)][t(520)]; a++) {
        const e = this.languages[a];
        if (!(["cimode", "dev"][t(417)](e) > -1) && this.store[t(2418)](e)) {
          this[t(1925)] = e;
          break;
        }
      }
      !this[t(1925)] && this[t(1017)].indexOf(x) < 0 && this[t(2336)][t(2418)](x) && (this[t(1925)] = x, this[t(1017)][t(1951)](x));
    }
  }
  changeLanguage(x, t) {
    const a = r;
    this[a(1256)] = x;
    const e = Je();
    this[a(1945)](a(521), x);
    const s = (c) => {
      const u = a;
      this[u(2160)] = c, this[u(1017)] = this[u(1006)][u(890)].toResolveHierarchy(c), this[u(1925)] = void 0, this[u(2380)](c);
    }, n = (c, u) => {
      const d = a;
      u ? this[d(1256)] === x && (s(u), this.translator[d(1825)](u), this[d(1256)] = void 0, this.emit("languageChanged", u), this[d(891)].log(d(2400), u)) : this.isLanguageChangingTo = void 0, e[d(772)]((...f) => this.t(...f)), t && t(c, (...f) => this.t(...f));
    }, o = (c) => {
      var l, g;
      const u = a;
      !x && !c && this[u(1006)][u(1297)] && (c = []);
      const d = p0(c) ? c : c && c[0], f = this[u(2336)][u(2418)](d) ? d : this.services.languageUtils[u(591)](p0(c) ? [c] : c);
      f && (!this[u(2160)] && s(f), this[u(2445)][u(2160)] || this[u(2445)][u(1825)](f), (g = (l = this[u(1006)].languageDetector) == null ? void 0 : l[u(1161)]) == null || g.call(l, f)), this[u(1025)](f, (h) => {
        n(h, f);
      });
    };
    return !x && this[a(1006)][a(1297)] && !this[a(1006)].languageDetector[a(2591)] ? o(this.services[a(1297)].detect()) : !x && this[a(1006)][a(1297)] && this[a(1006)][a(1297)][a(2591)] ? this.services[a(1297)].detect[a(520)] === 0 ? this.services[a(1297)][a(1747)]()[a(1124)](o) : this[a(1006)][a(1297)].detect(o) : o(x), e;
  }
  [r(1198)](x, t, a) {
    const e = r, s = (n, o, ...c) => {
      const u = B;
      let d;
      typeof o !== u(1791) ? d = this[u(1287)][u(129)]([n, o].concat(c)) : d = { ...o }, d[u(2364)] = d.lng || s.lng, d[u(404)] = d.lngs || s.lngs, d.ns = d.ns || s.ns, d[u(756)] !== "" && (d[u(756)] = d[u(756)] || a || s[u(756)]);
      const f = this[u(1287)][u(989)] || ".";
      let l;
      return d[u(756)] && Array.isArray(n) ? l = n[u(2388)]((g) => "" + d[u(756)] + f + g) : l = d[u(756)] ? "" + d[u(756)] + f + n : n, this.t(l, d);
    };
    return p0(x) ? s[e(2364)] = x : s[e(404)] = x, s.ns = t, s[e(756)] = a, s;
  }
  t(...x) {
    var a;
    const t = r;
    return (a = this.translator) == null ? void 0 : a[t(758)](...x);
  }
  [r(1917)](...x) {
    var a;
    const t = r;
    return (a = this.translator) == null ? void 0 : a[t(1917)](...x);
  }
  setDefaultNamespace(x) {
    const t = r;
    this[t(1287)][t(1868)] = x;
  }
  [r(2325)](x, t = {}) {
    const a = r;
    if (!this[a(401)]) return this[a(891)][a(183)](a(174), this.languages), !1;
    if (!this[a(1017)] || !this[a(1017)][a(520)]) return this[a(891)][a(183)](a(2018), this.languages), !1;
    const e = t[a(2364)] || this.resolvedLanguage || this[a(1017)][0], s = this[a(1287)] ? this[a(1287)][a(2118)] : !1, n = this[a(1017)][this.languages[a(520)] - 1];
    if (e.toLowerCase() === a(1625)) return !0;
    const o = (c, u) => {
      const d = a, f = this[d(1006)].backendConnector.state[c + "|" + u];
      return f === -1 || f === 0 || f === 2;
    };
    if (t.precheck) {
      const c = t[a(1755)](this, o);
      if (c !== void 0) return c;
    }
    return !!(this[a(954)](e, x) || !this[a(1006)].backendConnector[a(1449)] || this[a(1287)][a(565)] && !this[a(1287)][a(694)] || o(e, x) && (!s || o(n, x)));
  }
  [r(1346)](x, t) {
    const a = r, e = Je();
    return this[a(1287)].ns ? (p0(x) && (x = [x]), x[a(1634)]((s) => {
      const n = a;
      this[n(1287)].ns[n(417)](s) < 0 && this[n(1287)].ns.push(s);
    }), this[a(1025)]((s) => {
      e.resolve(), t && t(s);
    }), e) : (t && t(), Promise[a(772)]());
  }
  [r(2165)](x, t) {
    const a = r, e = Je();
    p0(x) && (x = [x]);
    const s = this[a(1287)][a(1201)] || [], n = x[a(333)]((o) => s[a(417)](o) < 0 && this.services[a(890)][a(173)](o));
    return n[a(520)] ? (this[a(1287)][a(1201)] = s[a(874)](n), this[a(1025)]((o) => {
      e[a(772)](), t && t(o);
    }), e) : (t && t(), Promise[a(772)]());
  }
  [r(2337)](x) {
    var s, n;
    const t = r;
    if (x || (x = this.resolvedLanguage || (((s = this.languages) == null ? void 0 : s.length) > 0 ? this[t(1017)][0] : this[t(2160)])), !x) return t(1012);
    const a = ["ar", t(1416), "sqr", "ssh", t(986), t(700), t(2139), t(515), "abh", t(2464), t(2017), t(642), t(775), t(1992), t(604), t(636), "ads", "aeb", t(1054), t(1560), t(1773), t(1448), t(1785), t(1423), t(2213), t(1242), t(573), t(1764), t(296), t(2186), t(2167), t(2080), t(1652), t(853), t(1592), t(849), "he", "iw", "ps", t(1933), "pbu", "pst", t(1883), t(2243), "ug", "ur", t(2047), "yds", t(1655), "ji", "yi", "hbo", "men", t(1306), "fa", t(274), t(1483), t(2023), t(462), "dv", t(2421), "ckb"], e = ((n = this.services) == null ? void 0 : n.languageUtils) || new Vr(Gr());
    return a[t(417)](e[t(1044)](x)) > -1 || x.toLowerCase()[t(417)](t(1170)) > 1 ? t(1012) : t(687);
  }
  static [r(426)](x = {}, t) {
    return new ax(x, t);
  }
  cloneInstance(x = {}, t = fx) {
    const a = r, e = x[a(2503)];
    e && delete x[a(2503)];
    const s = { ...this[a(1287)], ...x, isClone: !0 }, n = new ax(s);
    if ((x[a(953)] !== void 0 || x.prefix !== void 0) && (n[a(891)] = n.logger[a(1519)](x)), ["store", "services", a(2160)][a(1634)]((c) => {
      n[c] = this[c];
    }), n[a(1006)] = { ...this.services }, n[a(1006)].utils = { hasLoadedNamespace: n.hasLoadedNamespace[a(1489)](n) }, e) {
      const c = Object[a(1574)](this[a(2336)][a(1021)])[a(2404)]((u, d) => {
        const f = a;
        return u[d] = { ...this.store[f(1021)][d] }, u[d] = Object[f(1574)](u[d])[f(2404)]((l, g) => (l[g] = { ...u[d][g] }, l), u[d]), u;
      }, {});
      n[a(2336)] = new zr(c, s), n[a(1006)].resourceStore = n.store;
    }
    return n[a(2445)] = new Rx(n.services, s), n[a(2445)].on("*", (c, ...u) => {
      n[a(1945)](c, ...u);
    }), n.init(s, t), n[a(2445)].options = s, n[a(2445)][a(425)][a(1006)][a(1666)] = { hasLoadedNamespace: n[a(2325)][a(1489)](n) }, n;
  }
  [r(2339)]() {
    const x = r;
    return { options: this[x(1287)], store: this[x(2336)], language: this[x(2160)], languages: this.languages, resolvedLanguage: this[x(1925)] };
  }
}
const X0 = ax.createInstance();
X0[r(426)] = ax[r(426)], X0[r(426)], X0[r(2337)], X0.init, X0[r(1025)], X0.reloadResources, X0[r(1165)], X0.changeLanguage, X0[r(1198)], X0.t, X0[r(1917)], X0[r(1920)], X0[r(2325)], X0[r(1346)], X0.loadLanguages;
function yo() {
  const i = r;
  if (typeof navigator !== i(2550) && navigator[i(2160)]) return navigator[i(2160)] === i(857) ? "zh-CN" : i(992);
  try {
    const x = typeof require !== i(2550) ? require : void 0;
    if (x)
      return x(i(2256)).host.uiLocale[i(243)]("zh") ? i(857) : "en-US";
  } catch {
  }
  return i(992);
}
let Us = yo();
const vo = { "zh-CN": {}, "en-US": {} };
function Kt(i) {
  const x = i === "zh-CN" ? Xi : Yi, t = vo[i];
  return { ...x, ...t };
}
function wo() {
  return Us;
}
function Gt(i, x = {}) {
  const t = r;
  let e = Kt(Us)[i];
  return e ? typeof e == "string" ? e[t(1927)](/\{\{(\w+)\}\}/g, (s, n) => x[n] !== void 0 ? String(x[n]) : s) : e : i;
}
const So = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, ko = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, Eo = (i) => ko[i], Io = (i) => i.replace(So, Eo);
let Qr = { bindI18n: r(2400), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", r(814), "i", "p"], useSuspense: !0, unescape: Io };
const Po = (i = {}) => {
  Qr = { ...Qr, ...i };
}, Ro = { type: "3rdParty", init(i) {
  const x = r;
  Po(i[x(1287)][x(1372)]);
} };
!X0[r(401)] && X0[r(1165)](Ro)[r(1766)]({ resources: { "zh-CN": { translation: Kt("zh-CN") }, "en-US": { translation: Kt(r(992)) } }, lng: wo(), fallbackLng: r(992), interpolation: { escapeValue: !1 } });
const Re = [];
_e[r(437)] = _e.widgetable || {}, _e[r(437)][r(2279)] = function(i, x) {
  const t = r;
  typeof x === t(1538) ? Re[t(1131)]([i, { formatter: x, setter: null }]) : Re[t(1131)]([i, x]);
};
function Co(i, x, t) {
  var c, u, d;
  const a = r, e = Re[a(1837)](([f]) => f == a(356)), s = Re[a(1837)](([f]) => rr(f, i[a(2043)])) || e;
  let n = !1;
  if (s) {
    const f = s[1][a(2524)];
    f && (n = !!f(i, x, t));
  }
  !n && (i[a(1864)][x][a(2615)] = t, (u = (c = i.widgets[x])[a(2471)]) == null || u.call(c, t)), (d = (F0[a(1740)] || F0.extensionManager[a(1559)])[a(609)]) == null || d[a(2082)].checkState();
}
function Cx(i) {
  const x = r, t = {}, a = Re.find(([e]) => e == B(356));
  return i[x(740)][x(1634)]((e) => {
    const s = x;
    if (!e[s(1864)] || e[s(1864)][s(520)] == 0) return;
    const n = Re.find(([o]) => rr(o, e[s(2043)])) || a;
    if (n) try {
      const o = n[1][s(1228)](e);
      o && (t[e.id] = o[s(1864)][s(2388)]((c) => c.value));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function Jt(i, x) {
  var s, n, o;
  const t = r;
  if (!i) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const a = i[t(740)].map((c) => {
    const u = t;
    if (c[u(494)] != 0) return;
    const d = hx(c);
    if (!d || d.startsWith(".") || !c[u(1864)] || c[u(1864)].length == 0) return;
    let f = Re[u(1837)](([m]) => rr(m, c.type));
    if (f) try {
      const m = f[1][u(1228)](c);
      if (m) return m.id = c.id, m[u(1506)] = m[u(1864)][u(2404)]((y, S) => y + (S[u(908)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: d, uiWeightSum: 12, widgets: [{ outputType: u(259), value: Gt(u(147), f[0]) + (m.message || m || ""), name: "", options: {} }] };
    }
    if (!d[u(243)]("#")) return null;
    let l = c[u(1864)];
    const g = Re[u(1837)](([m]) => m == "__DEFAULT__");
    if (g) {
      const m = g[1][u(1228)](c);
      if (m) return Object[u(1885)](m, { uiWeightSum: m[u(1864)][u(2404)]((y, S) => y + (S.uiWeight || 12), 0) });
    }
    const h = { id: c.id, title: d, widgets: l.map((m) => ({ name: m[u(2269)] || m[u(307)], outputType: m[u(2043)] || u(718), value: m.value, options: m[u(1287)] })) };
    return Object[u(1885)](h, { uiWeightSum: h[u(1864)].reduce((m, y) => m + (y[u(908)] || 12), 0) });
  })[t(333)](Boolean)[t(2482)]((c, u) => {
    const d = t;
    let f = hx(c), l = hx(u);
    return f = f[d(243)]("#") ? f.slice(1)[d(1996)]() : f.trim(), l = l[d(243)]("#") ? l[d(1597)](1)[d(1996)]() : l[d(1996)](), f[d(113)](l);
  }), e = ((n = (s = i[t(740)][t(1837)]((c) => c[t(2043)] == t(1632) && c[t(2353)].match(/SD-?PPP/i))) == null ? void 0 : s[t(1864)][0]) == null ? void 0 : n[t(2615)]) || "";
  return { widgetablePath: ((o = x[t(1140)].extra) == null ? void 0 : o[t(1093)]) || x[t(2483)], widgetableID: x.activeState.id, nodes: a[t(2404)]((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: a.map((c) => c.id), options: {} };
}
function rr(i, x) {
  const t = r, a = i[t(1927)](/[.+^${}()|[\]\\]/g, t(2625))[t(1927)](/\*/g, ".*")[t(1927)](/\?/g, ".");
  return new RegExp("^" + a + "$")[t(706)](x);
}
function hx(i, x = "") {
  var e;
  const t = r;
  let a = x || i[t(2353)] || "";
  return i[t(1409)] && (a.startsWith("#") || a.startsWith(".")) ? i[t(1409)](t(2119), a) : a = ((e = i[t(402)]) == null ? void 0 : e[t(2119)]) || a, a;
}
_e[r(795)] = hx;
const Qt = sx.extend(r(1224)), Xr = /* @__PURE__ */ new Set();
I0.implementAction(r(2560), async (i) => {
  const x = r;
  return i.values[x(1634)](({ nodeID: t, widgetIndex: a, value: e }) => {
    const s = x, n = F0[s(1952)].nodes[s(1837)]((o) => o.id == t);
    Co(n, a, e);
  }), { success: !0 };
}), I0[r(324)](r(661), async (i) => {
  const x = r, { workflow_path: t } = i, a = !Xr[x(399)](t), e = i.reset || a;
  Xr[x(2279)](t);
  const s = F0.extensionManager[x(1559)] || F0[x(1740)], n = s[x(500)][x(1837)]((c) => c[x(2016)] === t || c.path === t || c[x(2483)] === "workflows/" + t);
  if (!e) {
    const c = await Fo(s, n);
    if (Qt(x(1812) + c), c) await Zx(s, n);
    else try {
      await o(s, n);
    } catch {
      await Zx(s, n);
    }
    return { success: !0 };
  }
  return await Zx(s, n), { success: !0 };
  async function o(c, u) {
    const d = x;
    Qt(d(2163) + u.path, u[d(2201)]), F0[d(1740)] == c ? await u[d(1510)]() : (await c[d(661)](u), await F0[d(1429)](JSON.parse(JSON[d(2403)](u[d(2201)])), !0, !0, u, {}));
  }
}), I0[r(324)](r(128), async function(i) {
  const x = r;
  let { workflow_content: t, workflow_path: a } = i;
  return t[x(1795)] = { ...t.extra || {}, sdppp_workflow_alias: a }, await F0.loadGraphData(t), { success: !0 };
}), I0[r(324)](r(2013), async (i) => {
  var s;
  const x = r, t = F0.workflowManager || F0[x(2472)].workflow;
  (s = t.syncWorkflows) == null || s.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t[x(500)].map((n) => n.path[x(1927)](x(1620), ""));
  try {
    const n = new Headers(), o = localStorage.getItem(x(1650));
    o && n.set(x(264), o);
    const c = await fetch(x(1511), { headers: n });
    let u = [];
    c.ok && (u = (await c[x(1367)]()).favorites[x(2388)]((f) => f[x(1927)](x(1620), ""))), e[x(2482)]((d, f) => {
      const l = x, g = u.includes(d), h = u.includes(f);
      return g && !h ? -1 : !g && h ? 1 : d[l(113)](f);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), I0[r(324)](r(1603), async (i) => {
  var n;
  const x = r, { workflow_path: t, from_sid: a } = i, e = F0[x(1740)] || F0[x(2472)].workflow, s = e[x(500)][x(1837)]((o) => o[x(2016)] === t || o.path === t || o.path === "workflows/" + t);
  if (!s) throw new Error(x(2426));
  return ((n = e[x(609)]) == null ? void 0 : n.id) != s.id && await F0[x(661)](t, a, !1), s[x(2082)][x(899)](), await e.saveWorkflow(s), { success: !0 };
});
async function Fo(i, x) {
  var e, s, n;
  const t = r;
  if (!x || !(((e = i[t(609)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((s = x.changeTracker) != null && s[t(899)]) try {
    x[t(2082)][t(899)]();
  } catch (o) {
    console[t(183)]("Failed to check workflow changeTracker state:", o);
  }
  try {
    const o = (n = F0.graph) == null ? void 0 : n[t(1972)](), c = x[t(1140)];
    if (!o || !c) return !1;
    const u = JSON.stringify(o), d = JSON[t(2403)](c);
    return u !== d;
  } catch (o) {
    return console.warn(t(2084), o), !1;
  }
}
async function Zx(i, x) {
  var e;
  const t = r;
  Qt("performWorkflowReset: " + x.path);
  async function a(s, n) {
    const o = B;
    F0[o(1740)] == s ? await n[o(1510)]() : (await s[o(661)](n), await F0.loadGraphData(JSON[o(686)](JSON[o(2403)](n[o(1140)])), !0, !0, n, {}));
  }
  if ((x[t(298)] || (e = i.isOpen) != null && e.call(i, x)) && i[t(979)].length === 1) {
    const s = i[t(2334)]();
    i[t(661)](s);
  } else await a(i, i[t(979)][0] == x ? i[t(979)][1] : i[t(979)][0]);
  await i[t(1727)](x, !1), await new Promise((s) => requestAnimationFrame(s)), await a(i, x);
}
const Xe = sx[r(1478)](r(1757)), qe = /* @__PURE__ */ new Map();
function No(i, x) {
  const t = r, a = qe[t(2311)](i);
  Xe(t(1139), i, x, a, qe), a && a[t(1334)](x);
}
I0[r(324)](r(1505), async function* (i) {
  const x = r;
  let t = !1, a = [];
  function e() {
    const l = B;
    if (t) return;
    const g = Oe[l(151)];
    Oe[l(151)] = async (...h) => {
      const m = l;
      try {
        const y = await g.call(Oe, ...h);
        return a[m(1131)]({ error: null, result: y, prompt_id: y[m(1246)] }), y;
      } catch (y) {
        throw a.push({ error: y, result: null, prompt_id: "" }), y;
      }
    }, t = !0;
  }
  t || e();
  const s = i[x(1644)];
  let n = !1, o = {}, c = [];
  I0[x(2336)].setState({ lastError: "", widgetableErrors: {} });
  try {
    a = [], await F0.queuePrompt(1, s), a[x(1634)]((l) => {
      var h, m;
      const g = x;
      if (l[g(259)]) n = !0, o = l[g(259)][g(1084)] ? f(l.error[g(1084)][g(454)]) : {}, Object[g(1885)](o, { "-1": ((m = (h = l[g(259)][g(1084)]) == null ? void 0 : h[g(259)]) == null ? void 0 : m.message) || l[g(259)][g(2235)] });
      else {
        const y = l[g(2202)][g(1246)];
        c.push(y);
        let S, E;
        const O = new Promise((I, P) => {
          S = I, E = P;
        }), q = { promise: O, resolveImage: S, rejectImage: E };
        qe.set(y, q);
      }
    });
  } catch (l) {
    Xe("app.queuePrompt caught", l.stack), n = !0, o = { "-1": l[x(2235)] || l[x(696)]() };
  }
  Xe("after app.queuePrompt errors: ", n, o, x(1174), c), n && I0[x(2336)].setState({ widgetableErrors: o });
  let u = [];
  const d = /* @__PURE__ */ new Map();
  for (const l of c) {
    const g = qe.get(l);
    g && d[x(2525)](l, g[x(1623)]);
  }
  for (Xe(x(218)); d[x(1644)] > 0; ) {
    const l = Array[x(1210)](d[x(964)]()), g = l[x(2388)](([y, S]) => S[x(1124)]((E) => ({ prompt_id: y, images: E }))), { prompt_id: h, images: m } = await Promise[x(342)](g);
    Xe(x(314), h), u[x(1131)](...m), d[x(292)](h), qe[x(292)](h), yield { success: !0, prompt_ids: [h], images: m };
  }
  function f(l) {
    const g = x, h = {};
    return Object[g(1574)](l)[g(1634)]((m) => {
      const y = g, S = m[y(2068)](":")[0], E = F0[y(1952)].nodes[y(1837)]((O) => O.id == S);
      h[S] = "[" + ((E == null ? void 0 : E.title) || S) + "]" + l[m][y(502)][y(2388)](JSON[y(2403)])[y(1804)](`
`);
    }), h;
  }
}), I0[r(324)](r(1615), async () => {
  const i = r;
  await F0.api[i(1771)](i(1577)), await F0.api[i(1363)]();
  const x = Array[i(1210)](qe.values());
  qe[i(447)]();
  for (const t of x)
    try {
      t.rejectImage(new Error(i(249)));
    } catch {
    }
  return { success: !0 };
});
const qo = sx[r(1478)](r(1356));
I0.implementAction(r(1411), async (i) => {
  const x = r;
  return i != null && i[x(1216)] && qo(x(2470), i[x(1216)]), { comfyVersion: x(1392), hostVersion: (i == null ? void 0 : i.hostVersion) ?? "" };
}), I0[r(324)](r(2098), async (i) => {
  const x = r, { node_id: t, title: a } = i, e = F0.graph[x(740)].find((s) => s.id == t);
  if (!e) throw new Error("Node not found");
  return e.title = a, e.setProperty(x(2119), a), { success: !0 };
}), I0.implementAction(r(1282), async () => {
  const i = r, x = await fetch(i(2515));
  return x.status == 404 ? { error: Gt(i(2045)), success: !1 } : x[i(1345)] == 200 ? { success: !0 } : { error: Gt(i(506)) + x.statusText, success: !1 };
}), I0[r(324)]("setComfyOrgAPIKey", async (i) => {
  const x = r, { api_key: t } = i;
  return localStorage[x(1425)](x(415), t), location.reload(), { success: !0 };
}), I0[r(324)]("logout", async () => {
  const i = r;
  return document[i(1270)](i(822)).parentElement[i(637)](), { success: !0 };
});
function To(i) {
  const x = atob(i), t = x.length, a = new Uint8Array(t);
  for (let e = 0; e < t; e++)
    a[e] = x.charCodeAt(e);
  return a;
}
I0[r(324)]("uploadComfyImageFromUXP", async (i, x, t) => {
  const a = r, { fileName: e, overwrite: s = !0, mimeType: n = a(930), dataBase64: o } = i;
  if (t != null && t[a(2602)]) throw new DOMException(a(1106), a(2093));
  const c = To(o), u = new Blob([c], { type: n }), d = new FormData();
  d[a(721)](a(1534), u), d[a(721)](a(2166), e), d[a(721)](a(2345), s ? "true" : a(971));
  const f = await fetch(a(1262), { method: "POST", body: d, signal: t });
  if (!f.ok) throw new Error(a(1797) + f[a(2442)]);
  const l = await f[a(1367)]();
  return { name: l[a(987)] + "/" + l.name };
});
const Vs = "2025-06-18", Ao = [Vs, r(623), r(2575), r(465)], qx = r(2216), Ws = J0([v(), X().int()]), Zs = v(), Oo = k({ progressToken: K(Ws) })[r(816)](), ae = k({ _meta: K(Oo) })[r(816)](), ee = k({ method: v(), params: K(ae) }), nx = k({ _meta: K(k({})[r(816)]()) }).passthrough(), pe = k({ method: v(), params: K(nx) }), se = k({ _meta: K(k({})[r(816)]()) })[r(816)](), Tx = J0([v(), X()[r(1245)]()]), Bs = k({ jsonrpc: x0(qx), id: Tx })[r(1213)](ee)[r(744)](), Do = (i) => Bs[r(1278)](i).success, Ks = k({ jsonrpc: x0(qx) })[r(1213)](pe).strict(), jo = (i) => Ks.safeParse(i).success, Gs = k({ jsonrpc: x0(qx), id: Tx, result: se })[r(744)](), Yr = (i) => Gs.safeParse(i)[r(2290)];
var ye;
(function(i) {
  const x = r;
  i[i[x(1694)] = -32e3] = x(1694), i[i[x(504)] = -32001] = x(504), i[i[x(257)] = -32700] = x(257), i[i[x(2200)] = -32600] = x(2200), i[i[x(1271)] = -32601] = x(1271), i[i[x(1061)] = -32602] = x(1061), i[i[x(629)] = -32603] = "InternalError";
})(ye || (ye = {}));
const Js = k({ jsonrpc: x0(qx), id: Tx, error: k({ code: X()[r(1245)](), message: v(), data: K(We()) }) })[r(744)](), Mo = (i) => Js[r(1278)](i)[r(2290)];
J0([Bs, Ks, Gs, Js]);
const Xt = se[r(744)](), Yt = pe[r(1478)]({ method: x0(r(2227)), params: nx[r(1478)]({ requestId: Tx, reason: v()[r(965)]() }) }), ix = k({ name: v(), title: K(v()) })[r(816)](), Qs = ix[r(1478)]({ version: v() }), Lo = k({ experimental: K(k({})[r(816)]()), sampling: K(k({}).passthrough()), elicitation: K(k({})[r(816)]()), roots: K(k({ listChanged: K(e0()) })[r(816)]()) })[r(816)](), Xs = ee.extend({ method: x0(r(1814)), params: ae[r(1478)]({ protocolVersion: v(), capabilities: Lo, clientInfo: Qs }) }), $o = k({ experimental: K(k({})[r(816)]()), logging: K(k({})[r(816)]()), completions: K(k({})[r(816)]()), prompts: K(k({ listChanged: K(e0()) }).passthrough()), resources: K(k({ subscribe: K(e0()), listChanged: K(e0()) }).passthrough()), tools: K(k({ listChanged: K(e0()) }).passthrough()) })[r(816)](), zo = se[r(1478)]({ protocolVersion: v(), capabilities: $o, serverInfo: Qs, instructions: K(v()) }), Ys = pe[r(1478)]({ method: x0("notifications/initialized") }), _t = ee[r(1478)]({ method: x0(r(1841)) }), Ho = k({ progress: X(), total: K(X()), message: K(v()) })[r(816)](), er = pe[r(1478)]({ method: x0(r(1144)), params: nx[r(1213)](Ho)[r(1478)]({ progressToken: Ws }) }), Ax = ee[r(1478)]({ params: ae[r(1478)]({ cursor: K(Zs) })[r(965)]() }), Ox = se[r(1478)]({ nextCursor: K(Zs) }), _s = k({ uri: v(), mimeType: K(v()), _meta: K(k({})[r(816)]()) })[r(816)](), en = _s[r(1478)]({ text: v() }), xn = _s.extend({ blob: v()[r(1325)]() }), tn = ix.extend({ uri: v(), description: K(v()), mimeType: K(v()), _meta: K(k({})[r(816)]()) }), Uo = ix[r(1478)]({ uriTemplate: v(), description: K(v()), mimeType: K(v()), _meta: K(k({})[r(816)]()) }), Vo = Ax[r(1478)]({ method: x0(r(266)) }), Wo = Ox.extend({ resources: v0(tn) }), Zo = Ax[r(1478)]({ method: x0("resources/templates/list") }), Bo = Ox[r(1478)]({ resourceTemplates: v0(Uo) }), Ko = ee[r(1478)]({ method: x0(r(1142)), params: ae[r(1478)]({ uri: v() }) }), Go = se.extend({ contents: v0(J0([en, xn])) }), Jo = pe[r(1478)]({ method: x0("notifications/resources/list_changed") }), Qo = ee[r(1478)]({ method: x0("resources/subscribe"), params: ae[r(1478)]({ uri: v() }) }), Xo = ee[r(1478)]({ method: x0(r(1045)), params: ae.extend({ uri: v() }) }), Yo = pe[r(1478)]({ method: x0(r(2596)), params: nx[r(1478)]({ uri: v() }) }), _o = k({ name: v(), description: K(v()), required: K(e0()) })[r(816)](), e2 = ix[r(1478)]({ description: K(v()), arguments: K(v0(_o)), _meta: K(k({}).passthrough()) }), x2 = Ax[r(1478)]({ method: x0(r(380)) }), t2 = Ox[r(1478)]({ prompts: v0(e2) }), r2 = ee[r(1478)]({ method: x0("prompts/get"), params: ae[r(1478)]({ name: v(), arguments: K(U0(v())) }) }), ar = k({ type: x0("text"), text: v(), _meta: K(k({})[r(816)]()) }).passthrough(), sr = k({ type: x0(r(1534)), data: v()[r(1325)](), mimeType: v(), _meta: K(k({}).passthrough()) })[r(816)](), nr = k({ type: x0(r(1697)), data: v()[r(1325)](), mimeType: v(), _meta: K(k({}).passthrough()) })[r(816)](), a2 = k({ type: x0(r(830)), resource: J0([en, xn]), _meta: K(k({})[r(816)]()) })[r(816)](), s2 = tn[r(1478)]({ type: x0(r(2612)) }), rn = J0([ar, sr, nr, s2, a2]), n2 = k({ role: E0([r(514), r(1128)]), content: rn })[r(816)](), i2 = se.extend({ description: K(v()), messages: v0(n2) }), o2 = pe[r(1478)]({ method: x0("notifications/prompts/list_changed") }), c2 = k({ title: K(v()), readOnlyHint: K(e0()), destructiveHint: K(e0()), idempotentHint: K(e0()), openWorldHint: K(e0()) })[r(816)](), u2 = ix.extend({ description: K(v()), inputSchema: k({ type: x0(r(1791)), properties: K(k({})[r(816)]()), required: K(v0(v())) })[r(816)](), outputSchema: K(k({ type: x0(r(1791)), properties: K(k({})[r(816)]()), required: K(v0(v())) }).passthrough()), annotations: K(c2), _meta: K(k({})[r(816)]()) }), d2 = Ax[r(1478)]({ method: x0(r(639)) }), f2 = Ox[r(1478)]({ tools: v0(u2) }), an = se[r(1478)]({ content: v0(rn)[r(1535)]([]), structuredContent: k({})[r(816)]().optional(), isError: K(e0()) });
an.or(se[r(1478)]({ toolResult: We() }));
const l2 = ee[r(1478)]({ method: x0(r(548)), params: ae[r(1478)]({ name: v(), arguments: K(U0(We())) }) }), h2 = pe[r(1478)]({ method: x0(r(1199)) }), sn = E0([r(953), r(1976), "notice", r(617), r(259), r(1701), "alert", "emergency"]), p2 = ee[r(1478)]({ method: x0(r(2127)), params: ae[r(1478)]({ level: sn }) }), m2 = pe.extend({ method: x0(r(2500)), params: nx[r(1478)]({ level: sn, logger: K(v()), data: We() }) }), g2 = k({ name: v()[r(965)]() })[r(816)](), b2 = k({ hints: K(v0(g2)), costPriority: K(X()[r(1150)](0)[r(2428)](1)), speedPriority: K(X().min(0)[r(2428)](1)), intelligencePriority: K(X()[r(1150)](0)[r(2428)](1)) })[r(816)](), y2 = k({ role: E0([r(514), "assistant"]), content: J0([ar, sr, nr]) })[r(816)](), v2 = ee[r(1478)]({ method: x0(r(400)), params: ae[r(1478)]({ messages: v0(y2), systemPrompt: K(v()), includeContext: K(E0([r(1060), r(1055), r(1678)])), temperature: K(X()), maxTokens: X()[r(1245)](), stopSequences: K(v0(v())), metadata: K(k({})[r(816)]()), modelPreferences: K(b2) }) }), nn = se[r(1478)]({ model: v(), stopReason: K(E0([r(1719), r(937), r(336)]).or(v())), role: E0([r(514), r(1128)]), content: js(r(2043), [ar, sr, nr]) }), w2 = k({ type: x0(r(1488)), title: K(v()), description: K(v()), default: K(e0()) })[r(816)](), S2 = k({ type: x0(r(718)), title: K(v()), description: K(v()), minLength: K(X()), maxLength: K(X()), format: K(E0([r(439), r(2632), r(662), r(669)])) })[r(816)](), k2 = k({ type: E0(["number", r(1395)]), title: K(v()), description: K(v()), minimum: K(X()), maximum: K(X()) })[r(816)](), E2 = k({ type: x0("string"), title: K(v()), description: K(v()), enum: v0(v()), enumNames: K(v0(v())) }).passthrough(), I2 = J0([w2, S2, k2, E2]), P2 = ee[r(1478)]({ method: x0("elicitation/create"), params: ae[r(1478)]({ message: v(), requestedSchema: k({ type: x0(r(1791)), properties: U0(v(), I2), required: K(v0(v())) }).passthrough() }) }), on = se[r(1478)]({ action: E0([r(670), r(2067), r(217)]), content: K(U0(v(), We())) }), R2 = k({ type: x0("ref/resource"), uri: v() })[r(816)](), C2 = k({ type: x0("ref/prompt"), name: v() })[r(816)](), F2 = ee[r(1478)]({ method: x0(r(2536)), params: ae[r(1478)]({ ref: J0([C2, R2]), argument: k({ name: v(), value: v() })[r(816)](), context: K(k({ arguments: K(U0(v(), v())) })) }) }), N2 = se.extend({ completion: k({ values: v0(v())[r(2428)](100), total: K(X()[r(1245)]()), hasMore: K(e0()) })[r(816)]() }), q2 = k({ uri: v().startsWith(r(1811)), name: K(v()), _meta: K(k({}).passthrough()) })[r(816)](), T2 = ee.extend({ method: x0(r(2009)) }), cn = se[r(1478)]({ roots: v0(q2) }), A2 = pe[r(1478)]({ method: x0(r(1891)) });
J0([_t, Xs, F2, p2, r2, x2, Vo, Zo, Ko, Qo, Xo, l2, d2]), J0([Yt, er, Ys, A2]), J0([Xt, nn, on, cn]), J0([_t, v2, P2, T2]), J0([Yt, er, m2, Yo, Jo, h2, o2]), J0([Xt, zo, N2, i2, t2, Wo, Bo, Go, an, f2]);
class Ae extends Error {
  constructor(x, t, a) {
    const e = r;
    super(e(1452) + x + ": " + t), this[e(1277)] = x, this[e(1021)] = a, this[e(307)] = e(2081);
  }
}
const O2 = 6e4;
class D2 {
  constructor(x) {
    const t = r;
    this[t(710)] = x, this[t(2579)] = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this[t(2107)] = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this[t(2314)] = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this[t(1209)] = /* @__PURE__ */ new Map(), this[t(725)] = /* @__PURE__ */ new Set(), this.setNotificationHandler(Yt, (a) => {
      const e = t, s = this._requestHandlerAbortControllers[e(2311)](a.params[e(1624)]);
      s == null || s.abort(a.params[e(1353)]);
    }), this[t(1108)](er, (a) => {
      this[t(2487)](a);
    }), this.setRequestHandler(_t, (a) => ({}));
  }
  [r(2094)](x, t, a, e, s = !1) {
    const n = r;
    this[n(1209)][n(2525)](x, { timeoutId: setTimeout(e, t), startTime: Date[n(1491)](), timeout: t, maxTotalTimeout: a, resetTimeoutOnProgress: s, onTimeout: e });
  }
  _resetTimeout(x) {
    const t = r, a = this[t(1209)][t(2311)](x);
    if (!a) return !1;
    const e = Date[t(1491)]() - a.startTime;
    if (a.maxTotalTimeout && e >= a[t(1328)])
      throw this[t(1209)][t(292)](x), new Ae(ye[t(504)], t(875), { maxTotalTimeout: a[t(1328)], totalElapsed: e });
    return clearTimeout(a.timeoutId), a[t(2111)] = setTimeout(a[t(553)], a[t(2130)]), !0;
  }
  _cleanupTimeout(x) {
    const t = r, a = this._timeoutInfo.get(x);
    a && (clearTimeout(a[t(2111)]), this[t(1209)][t(292)](x));
  }
  async [r(1098)](x) {
    const t = r;
    var a, e, s;
    this._transport = x;
    const n = (a = this[t(655)]) === null || a === void 0 ? void 0 : a[t(2180)];
    this[t(1872)][t(2180)] = () => {
      const u = t;
      n == null || n(), this[u(1182)]();
    };
    const o = (e = this[t(655)]) === null || e === void 0 ? void 0 : e[t(2320)];
    this[t(1872)][t(2320)] = (u) => {
      o == null || o(u), this._onerror(u);
    };
    const c = (s = this[t(1872)]) === null || s === void 0 ? void 0 : s[t(2613)];
    this[t(1872)][t(2613)] = (u, d) => {
      const f = t;
      c == null || c(u, d), Yr(u) || Mo(u) ? this._onresponse(u) : Do(u) ? this._onrequest(u, d) : jo(u) ? this[f(985)](u) : this._onerror(new Error(f(1413) + JSON.stringify(u)));
    }, await this._transport[t(742)]();
  }
  [r(1182)]() {
    const x = r;
    var t;
    const a = this._responseHandlers;
    this[x(2314)] = /* @__PURE__ */ new Map(), this[x(2002)].clear(), this._pendingDebouncedNotifications[x(447)](), this[x(1872)] = void 0, (t = this.onclose) === null || t === void 0 || t[x(422)](this);
    const e = new Ae(ye[x(1694)], x(988));
    for (const s of a[x(2226)]())
      s(e);
  }
  _onerror(x) {
    const t = r;
    var a;
    (a = this[t(2320)]) === null || a === void 0 || a[t(422)](this, x);
  }
  [r(985)](x) {
    const t = r;
    var a;
    const e = (a = this[t(727)].get(x.method)) !== null && a !== void 0 ? a : this[t(1235)];
    e !== void 0 && Promise[t(772)]()[t(1124)](() => e(x))[t(666)]((s) => this[t(2417)](new Error("Uncaught error in notification handler: " + s)));
  }
  [r(1404)](x, t) {
    const a = r;
    var e, s, n, o;
    const c = (e = this._requestHandlers[a(2311)](x[a(1231)])) !== null && e !== void 0 ? e : this[a(2568)];
    if (c === void 0) {
      (s = this[a(1872)]) === null || s === void 0 || s.send({ jsonrpc: a(2216), id: x.id, error: { code: ye[a(1271)], message: "Method not found" } })[a(666)]((f) => this[a(2417)](new Error(a(1295) + f)));
      return;
    }
    const u = new AbortController();
    this[a(2107)][a(2525)](x.id, u);
    const d = { signal: u[a(962)], sessionId: (n = this[a(1872)]) === null || n === void 0 ? void 0 : n[a(1315)], _meta: (o = x[a(2179)]) === null || o === void 0 ? void 0 : o[a(561)], sendNotification: (f) => this[a(1104)](f, { relatedRequestId: x.id }), sendRequest: (f, l, g) => this[a(2300)](f, l, { ...g, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t[a(1041)], requestId: x.id, requestInfo: t == null ? void 0 : t[a(2236)] };
    Promise[a(772)]()[a(1124)](() => c(x, d))[a(1124)]((f) => {
      const l = a;
      var g;
      if (!u[l(962)].aborted)
        return (g = this[l(1872)]) === null || g === void 0 ? void 0 : g[l(1373)]({ result: f, jsonrpc: l(2216), id: x.id });
    }, (f) => {
      const l = a;
      var g, h;
      if (!u.signal[l(2602)])
        return (g = this[l(1872)]) === null || g === void 0 ? void 0 : g[l(1373)]({ jsonrpc: l(2216), id: x.id, error: { code: Number.isSafeInteger(f.code) ? f[l(1277)] : ye[l(629)], message: (h = f[l(2235)]) !== null && h !== void 0 ? h : "Internal error" } });
    }).catch((f) => this[a(2417)](new Error(a(1312) + f)))[a(722)](() => {
      this[a(2107)].delete(x.id);
    });
  }
  [r(2487)](x) {
    const t = r, { progressToken: a, ...e } = x[t(2179)], s = Number(a), n = this[t(2002)][t(2311)](s);
    if (!n) {
      this[t(2417)](new Error(t(2260) + JSON[t(2403)](x)));
      return;
    }
    const o = this._responseHandlers[t(2311)](s), c = this[t(1209)][t(2311)](s);
    if (c && o && c.resetTimeoutOnProgress) try {
      this[t(2511)](s);
    } catch (u) {
      o(u);
      return;
    }
    n(e);
  }
  [r(2367)](x) {
    const t = r, a = Number(x.id), e = this[t(2314)][t(2311)](a);
    if (e === void 0) {
      this[t(2417)](new Error(t(1343) + JSON[t(2403)](x)));
      return;
    }
    if (this[t(2314)][t(292)](a), this[t(2002)][t(292)](a), this[t(680)](a), Yr(x)) e(x);
    else {
      const s = new Ae(x[t(259)][t(1277)], x[t(259)][t(2235)], x[t(259)].data);
      e(s);
    }
  }
  get [r(655)]() {
    return this[r(1872)];
  }
  async [r(491)]() {
    const x = r;
    var t;
    await ((t = this[x(1872)]) === null || t === void 0 ? void 0 : t[x(491)]());
  }
  [r(2300)](x, t, a) {
    const { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n } = a ?? {};
    return new Promise((o, c) => {
      const u = B;
      var d, f, l, g, h, m;
      if (!this._transport) {
        c(new Error(u(1125)));
        return;
      }
      ((d = this[u(710)]) === null || d === void 0 ? void 0 : d[u(1601)]) === !0 && this[u(229)](x[u(1231)]), (f = a == null ? void 0 : a[u(962)]) === null || f === void 0 || f[u(1789)]();
      const y = this[u(2579)]++, S = { ...x, jsonrpc: u(2216), id: y };
      a != null && a[u(2218)] && (this[u(2002)].set(y, a.onprogress), S.params = { ...x.params, _meta: { ...((l = x[u(2179)]) === null || l === void 0 ? void 0 : l[u(561)]) || {}, progressToken: y } });
      const E = (I) => {
        const P = u;
        var T;
        this._responseHandlers.delete(y), this[P(2002)].delete(y), this[P(680)](y), (T = this[P(1872)]) === null || T === void 0 || T.send({ jsonrpc: P(2216), method: P(2227), params: { requestId: y, reason: String(I) } }, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n })[P(666)]((D) => this[P(2417)](new Error(P(1870) + D))), c(I);
      };
      this[u(2314)][u(2525)](y, (I) => {
        const P = u;
        var T;
        if (!(!((T = a == null ? void 0 : a[P(962)]) === null || T === void 0) && T[P(2602)])) {
          if (I instanceof Error) return c(I);
          try {
            const D = t[P(686)](I[P(2202)]);
            o(D);
          } catch (D) {
            c(D);
          }
        }
      }), (g = a == null ? void 0 : a[u(962)]) === null || g === void 0 || g.addEventListener(u(2159), () => {
        const I = u;
        var P;
        E((P = a == null ? void 0 : a.signal) === null || P === void 0 ? void 0 : P[I(1353)]);
      });
      const O = (h = a == null ? void 0 : a[u(2130)]) !== null && h !== void 0 ? h : O2, q = () => E(new Ae(ye[u(504)], u(1589), { timeout: O }));
      this[u(2094)](y, O, a == null ? void 0 : a[u(1328)], q, (m = a == null ? void 0 : a[u(419)]) !== null && m !== void 0 ? m : !1), this[u(1872)].send(S, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n }).catch((I) => {
        this[u(680)](y), c(I);
      });
    });
  }
  async [r(1104)](x, t) {
    const a = r;
    var e, s;
    if (!this[a(1872)]) throw new Error(a(1125));
    if (this[a(976)](x[a(1231)]), ((s = (e = this[a(710)]) === null || e === void 0 ? void 0 : e[a(1179)]) !== null && s !== void 0 ? s : [])[a(578)](x[a(1231)]) && !x[a(2179)] && !(t != null && t[a(638)])) {
      if (this[a(725)].has(x[a(1231)])) return;
      this._pendingDebouncedNotifications[a(2279)](x[a(1231)]), Promise[a(772)]()[a(1124)](() => {
        const u = a;
        var d;
        if (this._pendingDebouncedNotifications[u(292)](x.method), !this[u(1872)]) return;
        const f = { ...x, jsonrpc: u(2216) };
        (d = this._transport) === null || d === void 0 || d[u(1373)](f, t).catch((l) => this[u(2417)](l));
      });
      return;
    }
    const c = { ...x, jsonrpc: a(2216) };
    await this._transport[a(1373)](c, t);
  }
  setRequestHandler(x, t) {
    const a = r, e = x[a(467)][a(1231)][a(2615)];
    this[a(1604)](e), this[a(679)].set(e, (s, n) => {
      const o = a;
      return Promise[o(772)](t(x[o(686)](s), n));
    });
  }
  [r(545)](x) {
    const t = r;
    this._requestHandlers[t(292)](x);
  }
  [r(2534)](x) {
    const t = r;
    if (this[t(679)][t(399)](x)) throw new Error(t(1260) + x + " already exists, which would be overridden");
  }
  [r(1108)](x, t) {
    const a = r;
    this[a(727)].set(x[a(467)][a(1231)].value, (e) => Promise[a(772)](t(x.parse(e))));
  }
  [r(2411)](x) {
    this[r(727)].delete(x);
  }
}
function j2(i, x) {
  const t = r;
  return Object[t(964)](x).reduce((a, [e, s]) => (s && typeof s === t(1791) ? a[e] = a[e] ? { ...a[e], ...s } : s : a[e] = s, a), { ...i });
}
var Ye = { exports: {} }, M2 = Ye[r(1005)], _r;
function L2() {
  const i = r;
  return _r ? Ye[i(1005)] : (_r = 1, function(x, t) {
    (function(a, e) {
      e(t);
    })(M2, function(a) {
      const e = B;
      function s() {
        const R = B;
        for (var p = arguments[R(520)], b = Array(p), w = 0; w < p; w++)
          b[w] = arguments[w];
        if (b[R(520)] > 1) {
          b[0] = b[0][R(1597)](0, -1);
          for (var $ = b.length - 1, z = 1; z < $; ++z)
            b[z] = b[z].slice(1, -1);
          return b[$] = b[$][R(1597)](1), b.join("");
        } else return b[0];
      }
      function n(R) {
        return B(1433) + R + ")";
      }
      function o(R) {
        const p = B;
        return R === void 0 ? "undefined" : R === null ? p(1237) : Object[p(672)][p(696)].call(R)[p(2068)](" ")[p(1533)]().split("]")[p(579)]()[p(798)]();
      }
      function c(R) {
        return R[B(1318)]();
      }
      function u(R) {
        const p = B;
        return R != null ? R instanceof Array ? R : typeof R[p(520)] != "number" || R[p(2068)] || R[p(2242)] || R[p(422)] ? [R] : Array[p(672)][p(1597)][p(422)](R) : [];
      }
      function d(R, p) {
        var b = R;
        if (p) for (var w in p)
          b[w] = p[w];
        return b;
      }
      function f(R) {
        const p = B;
        var b = p(340), w = p(2254), $ = s(w, p(1960)), z = n(n(p(910) + $ + "%" + $ + $ + "%" + $ + $) + "|" + n(p(1585) + $ + "%" + $ + $) + "|" + n("%" + $ + $)), a0 = p(2224), d0 = p(2346), S0 = s(a0, d0), j0 = R ? p(412) : "[]", Z0 = R ? "[\\uE000-\\uF8FF]" : "[]", k0 = s(b, w, p(1847), j0);
        n(b + s(b, w, "[\\+\\-\\.]") + "*"), n(n(z + "|" + s(k0, d0, "[\\:]")) + "*");
        var O0 = n(n(p(936)) + "|" + n(p(2531) + w) + "|" + n("1" + w + w) + "|" + n(p(304) + w) + p(373) + w), B0 = n(O0 + "\\." + O0 + "\\." + O0 + "\\." + O0), g0 = n($ + p(244)), z0 = n(n(g0 + "\\:" + g0) + "|" + B0), K0 = n(n(g0 + "\\:") + "{6}" + z0), H0 = n("\\:\\:" + n(g0 + "\\:") + "{5}" + z0), ke = n(n(g0) + p(154) + n(g0 + "\\:") + "{4}" + z0), ie = n(n(n(g0 + "\\:") + "{0,1}" + g0) + "?\\:\\:" + n(g0 + "\\:") + p(1919) + z0), oe = n(n(n(g0 + "\\:") + p(2412) + g0) + p(154) + n(g0 + "\\:") + p(2576) + z0), $e = n(n(n(g0 + "\\:") + p(2324) + g0) + p(154) + g0 + "\\:" + z0), Fe = n(n(n(g0 + "\\:") + p(225) + g0) + p(154) + z0), te = n(n(n(g0 + "\\:") + "{0,5}" + g0) + p(154) + g0), ce = n(n(n(g0 + "\\:") + p(1778) + g0) + p(154)), ue = n([K0, H0, ke, ie, oe, $e, Fe, te, ce][p(1804)]("|")), Ee = n(n(k0 + "|" + z) + "+");
        n(p(2431) + $ + p(513) + s(k0, d0, "[\\:]") + "+"), n(n(z + "|" + s(k0, d0)) + "*");
        var de = n(z + "|" + s(k0, d0, p(847)));
        return n(n(z + "|" + s(k0, d0, p(190))) + "+"), n(n(de + "|" + s(p(641), Z0)) + "*"), { NOT_SCHEME: new RegExp(s(p(2356), b, w, p(246)), "g"), NOT_USERINFO: new RegExp(s(p(538), k0, d0), "g"), NOT_HOST: new RegExp(s(p(1962), k0, d0), "g"), NOT_PATH: new RegExp(s(p(838), k0, d0), "g"), NOT_PATH_NOSCHEME: new RegExp(s(p(2031), k0, d0), "g"), NOT_QUERY: new RegExp(s(p(1553), k0, d0, "[\\:\\@\\/\\?]", Z0), "g"), NOT_FRAGMENT: new RegExp(s(p(1553), k0, d0, p(1703)), "g"), ESCAPE: new RegExp(s(p(2356), k0, d0), "g"), UNRESERVED: new RegExp(k0, "g"), OTHER_CHARS: new RegExp(s(p(1553), k0, S0), "g"), PCT_ENCODED: new RegExp(z, "g"), IPV4ADDRESS: new RegExp("^(" + B0 + ")$"), IPV6ADDRESS: new RegExp(p(1961) + ue + ")" + n(n(p(1172) + $ + "{2})") + "(" + Ee + ")") + p(1427)) };
      }
      var l = f(!1), g = f(!0), h = /* @__PURE__ */ function() {
        function R(p, b) {
          const w = B;
          var $ = [], z = !0, a0 = !1, d0 = void 0;
          try {
            for (var S0 = p[Symbol[w(312)]](), j0; !(z = (j0 = S0[w(1737)]()).done) && ($[w(1131)](j0[w(2615)]), !(b && $[w(520)] === b)); z = !0)
              ;
          } catch (Z0) {
            a0 = !0, d0 = Z0;
          } finally {
            try {
              !z && S0[w(614)] && S0[w(614)]();
            } finally {
              if (a0) throw d0;
            }
          }
          return $;
        }
        return function(p, b) {
          const w = B;
          if (Array[w(1396)](p)) return p;
          if (Symbol[w(312)] in Object(p)) return R(p, b);
          throw new TypeError(w(2385));
        };
      }(), m = function(R) {
        const p = B;
        if (Array[p(1396)](R)) {
          for (var b = 0, w = Array(R[p(520)]); b < R[p(520)]; b++) w[b] = R[b];
          return w;
        } else return Array[p(1210)](R);
      }, y = 2147483647, S = 36, E = 1, O = 26, q = 38, I = 700, P = 72, T = 128, D = "-", j = /^xn--/, M = /[^\0-\x7E]/, F = /[\x2E\u3002\uFF0E\uFF61]/g, C = { overflow: e(1438), "not-basic": e(424), "invalid-input": e(575) }, U = S - E, H = Math[e(750)], V = String[e(1188)];
      function Q(R) {
        throw new RangeError(C[R]);
      }
      function c0(R, p) {
        const b = e;
        for (var w = [], $ = R[b(520)]; $--; )
          w[$] = p(R[$]);
        return w;
      }
      function u0(R, p) {
        const b = e;
        var w = R[b(2068)]("@"), $ = "";
        w[b(520)] > 1 && ($ = w[0] + "@", R = w[1]), R = R[b(1927)](F, ".");
        var z = R[b(2068)]("."), a0 = c0(z, p).join(".");
        return $ + a0;
      }
      function s0(R) {
        const p = e;
        for (var b = [], w = 0, $ = R.length; w < $; ) {
          var z = R.charCodeAt(w++);
          if (z >= 55296 && z <= 56319 && w < $) {
            var a0 = R[p(2257)](w++);
            (a0 & 64512) == 56320 ? b[p(1131)](((z & 1023) << 10) + (a0 & 1023) + 65536) : (b.push(z), w--);
          } else b[p(1131)](z);
        }
        return b;
      }
      var n0 = function(p) {
        const b = e;
        return String[b(2097)][b(560)](String, m(p));
      }, m0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : S;
      }, w0 = function(p, b) {
        return p + 22 + 75 * (p < 26) - ((b != 0) << 5);
      }, b0 = function(p, b, w) {
        var $ = 0;
        for (p = w ? H(p / I) : p >> 1, p += H(p / b); p > U * O >> 1; $ += S)
          p = H(p / U);
        return H($ + (U + 1) * p / (p + q));
      }, D0 = function(p) {
        const b = e;
        var w = [], $ = p[b(520)], z = 0, a0 = T, d0 = P, S0 = p[b(2263)](D);
        S0 < 0 && (S0 = 0);
        for (var j0 = 0; j0 < S0; ++j0)
          p[b(2257)](j0) >= 128 && Q(b(572)), w[b(1131)](p[b(2257)](j0));
        for (var Z0 = S0 > 0 ? S0 + 1 : 0; Z0 < $; ) {
          for (var k0 = z, O0 = 1, B0 = S; ; B0 += S) {
            Z0 >= $ && Q(b(2158));
            var g0 = m0(p[b(2257)](Z0++));
            (g0 >= S || g0 > H((y - z) / O0)) && Q(b(1566)), z += g0 * O0;
            var z0 = B0 <= d0 ? E : B0 >= d0 + O ? O : B0 - d0;
            if (g0 < z0) break;
            var K0 = S - z0;
            O0 > H(y / K0) && Q(b(1566)), O0 *= K0;
          }
          var H0 = w[b(520)] + 1;
          d0 = b0(z - k0, H0, k0 == 0), H(z / H0) > y - a0 && Q("overflow"), a0 += H(z / H0), z %= H0, w[b(925)](z++, 0, a0);
        }
        return String[b(2097)][b(560)](String, w);
      }, R0 = function(p) {
        const b = e;
        var w = [];
        p = s0(p);
        var $ = p[b(520)], z = T, a0 = 0, d0 = P, S0 = !0, j0 = !1, Z0 = void 0;
        try {
          for (var k0 = p[Symbol.iterator](), O0; !(S0 = (O0 = k0[b(1737)]()).done); S0 = !0) {
            var B0 = O0[b(2615)];
            B0 < 128 && w[b(1131)](V(B0));
          }
        } catch (Ge) {
          j0 = !0, Z0 = Ge;
        } finally {
          try {
            !S0 && k0[b(614)] && k0[b(614)]();
          } finally {
            if (j0) throw Z0;
          }
        }
        var g0 = w[b(520)], z0 = g0;
        for (g0 && w[b(1131)](D); z0 < $; ) {
          var K0 = y, H0 = !0, ke = !1, ie = void 0;
          try {
            for (var oe = p[Symbol[b(312)]](), $e; !(H0 = ($e = oe.next())[b(1347)]); H0 = !0) {
              var Fe = $e[b(2615)];
              Fe >= z && Fe < K0 && (K0 = Fe);
            }
          } catch (Ge) {
            ke = !0, ie = Ge;
          } finally {
            try {
              !H0 && oe[b(614)] && oe.return();
            } finally {
              if (ke) throw ie;
            }
          }
          var te = z0 + 1;
          K0 - z > H((y - a0) / te) && Q("overflow"), a0 += (K0 - z) * te, z = K0;
          var ce = !0, ue = !1, Ee = void 0;
          try {
            for (var de = p[Symbol[b(312)]](), yr; !(ce = (yr = de.next())[b(1347)]); ce = !0) {
              var vr = yr.value;
              if (vr < z && ++a0 > y && Q(b(1566)), vr == z) {
                for (var ox = a0, cx = S; ; cx += S) {
                  var ux = cx <= d0 ? E : cx >= d0 + O ? O : cx - d0;
                  if (ox < ux) break;
                  var wr = ox - ux, Sr = S - ux;
                  w[b(1131)](V(w0(ux + wr % Sr, 0))), ox = H(wr / Sr);
                }
                w[b(1131)](V(w0(ox, 0))), d0 = b0(a0, te, z0 == g0), a0 = 0, ++z0;
              }
            }
          } catch (Ge) {
            ue = !0, Ee = Ge;
          } finally {
            try {
              !ce && de[b(614)] && de.return();
            } finally {
              if (ue) throw Ee;
            }
          }
          ++a0, ++z;
        }
        return w[b(1804)]("");
      }, Q0 = function(p) {
        return u0(p, function(b) {
          const w = B;
          return j[w(706)](b) ? D0(b[w(1597)](4)[w(798)]()) : b;
        });
      }, A = function(p) {
        return u0(p, function(b) {
          const w = B;
          return M.test(b) ? w(654) + R0(b) : b;
        });
      }, N = { version: "2.1.0", ucs2: { decode: s0, encode: n0 }, decode: D0, encode: R0, toASCII: A, toUnicode: Q0 }, L = {};
      function Y(R) {
        const p = e;
        var b = R[p(2257)](0), w = void 0;
        return b < 16 ? w = "%0" + b[p(696)](16)[p(1318)]() : b < 128 ? w = "%" + b.toString(16)[p(1318)]() : b < 2048 ? w = "%" + (b >> 6 | 192)[p(696)](16)[p(1318)]() + "%" + (b & 63 | 128)[p(696)](16)[p(1318)]() : w = "%" + (b >> 12 | 224).toString(16)[p(1318)]() + "%" + (b >> 6 & 63 | 128)[p(696)](16).toUpperCase() + "%" + (b & 63 | 128)[p(696)](16)[p(1318)](), w;
      }
      function W(R) {
        const p = e;
        for (var b = "", w = 0, $ = R[p(520)]; w < $; ) {
          var z = parseInt(R.substr(w + 1, 2), 16);
          if (z < 128) b += String.fromCharCode(z), w += 3;
          else if (z >= 194 && z < 224) {
            if ($ - w >= 6) {
              var a0 = parseInt(R[p(963)](w + 4, 2), 16);
              b += String[p(1188)]((z & 31) << 6 | a0 & 63);
            } else b += R.substr(w, 6);
            w += 6;
          } else if (z >= 224) {
            if ($ - w >= 9) {
              var d0 = parseInt(R[p(963)](w + 4, 2), 16), S0 = parseInt(R.substr(w + 7, 2), 16);
              b += String.fromCharCode((z & 15) << 12 | (d0 & 63) << 6 | S0 & 63);
            } else b += R[p(963)](w, 9);
            w += 9;
          } else b += R.substr(w, 3), w += 3;
        }
        return b;
      }
      function Z(R, p) {
        const b = e;
        function w($) {
          const z = B;
          var a0 = W($);
          return a0.match(p[z(1732)]) ? a0 : $;
        }
        return R[b(792)] && (R[b(792)] = String(R[b(792)])[b(1927)](p[b(2561)], w)[b(798)]()[b(1927)](p[b(2207)], "")), R[b(1038)] !== void 0 && (R[b(1038)] = String(R[b(1038)])[b(1927)](p[b(2561)], w)[b(1927)](p[b(1882)], Y)[b(1927)](p[b(2561)], c)), R[b(1226)] !== void 0 && (R[b(1226)] = String(R[b(1226)])[b(1927)](p[b(2561)], w)[b(798)]()[b(1927)](p.NOT_HOST, Y)[b(1927)](p[b(2561)], c)), R[b(2483)] !== void 0 && (R[b(2483)] = String(R[b(2483)])[b(1927)](p[b(2561)], w)[b(1927)](R[b(792)] ? p[b(1465)] : p[b(1033)], Y)[b(1927)](p[b(2561)], c)), R.query !== void 0 && (R[b(2343)] = String(R.query).replace(p[b(2561)], w)[b(1927)](p[b(2099)], Y).replace(p.PCT_ENCODED, c)), R[b(1494)] !== void 0 && (R.fragment = String(R[b(1494)]).replace(p[b(2561)], w).replace(p[b(2574)], Y)[b(1927)](p.PCT_ENCODED, c)), R;
      }
      function i0(R) {
        return R[e(1927)](/^0*(.*)/, "$1") || "0";
      }
      function o0(R, p) {
        const b = e;
        var w = R[b(508)](p.IPV4ADDRESS) || [], $ = h(w, 2), z = $[1];
        return z ? z[b(2068)](".")[b(2388)](i0)[b(1804)](".") : R;
      }
      function G(R, p) {
        const b = e;
        var w = R.match(p.IPV6ADDRESS) || [], $ = h(w, 3), z = $[1], a0 = $[2];
        if (z) {
          for (var d0 = z.toLowerCase().split("::")[b(1845)](), S0 = h(d0, 2), j0 = S0[0], Z0 = S0[1], k0 = Z0 ? Z0[b(2068)](":")[b(2388)](i0) : [], O0 = j0.split(":")[b(2388)](i0), B0 = p[b(665)].test(O0[O0[b(520)] - 1]), g0 = B0 ? 7 : 8, z0 = O0[b(520)] - g0, K0 = Array(g0), H0 = 0; H0 < g0; ++H0)
            K0[H0] = k0[H0] || O0[z0 + H0] || "";
          B0 && (K0[g0 - 1] = o0(K0[g0 - 1], p));
          var ke = K0[b(2404)](function(te, ce, ue) {
            const Ee = b;
            if (!ce || ce === "0") {
              var de = te[te[Ee(520)] - 1];
              de && de[Ee(1721)] + de.length === ue ? de.length++ : te[Ee(1131)]({ index: ue, length: 1 });
            }
            return te;
          }, []), ie = ke[b(2482)](function(te, ce) {
            const ue = b;
            return ce[ue(520)] - te[ue(520)];
          })[0], oe = void 0;
          if (ie && ie[b(520)] > 1) {
            var $e = K0[b(1597)](0, ie.index), Fe = K0[b(1597)](ie[b(1721)] + ie[b(520)]);
            oe = $e.join(":") + "::" + Fe[b(1804)](":");
          } else oe = K0[b(1804)](":");
          return a0 && (oe += "%" + a0), oe;
        } else return R;
      }
      var M0 = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, L0 = ""[e(508)](/(){0}/)[1] === void 0;
      function T0(R) {
        const p = e;
        var b = arguments[p(520)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = {}, $ = b.iri !== !1 ? g : l;
        b[p(1360)] === p(1253) && (R = (b[p(792)] ? b[p(792)] + ":" : "") + "//" + R);
        var z = R[p(508)](M0);
        if (z) {
          L0 ? (w[p(792)] = z[1], w[p(1038)] = z[3], w.host = z[4], w.port = parseInt(z[5], 10), w[p(2483)] = z[6] || "", w[p(2343)] = z[7], w[p(1494)] = z[8], isNaN(w.port) && (w[p(1388)] = z[5])) : (w[p(792)] = z[1] || void 0, w.userinfo = R.indexOf("@") !== -1 ? z[3] : void 0, w[p(1226)] = R[p(417)]("//") !== -1 ? z[4] : void 0, w[p(1388)] = parseInt(z[5], 10), w[p(2483)] = z[6] || "", w.query = R[p(417)]("?") !== -1 ? z[7] : void 0, w[p(1494)] = R.indexOf("#") !== -1 ? z[8] : void 0, isNaN(w[p(1388)]) && (w[p(1388)] = R.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? z[4] : void 0)), w[p(1226)] && (w[p(1226)] = G(o0(w[p(1226)], $), $)), w[p(792)] === void 0 && w[p(1038)] === void 0 && w[p(1226)] === void 0 && w[p(1388)] === void 0 && !w[p(2483)] && w[p(2343)] === void 0 ? w[p(1360)] = p(794) : w[p(792)] === void 0 ? w[p(1360)] = "relative" : w.fragment === void 0 ? w[p(1360)] = "absolute" : w[p(1360)] = p(2632), b[p(1360)] && b[p(1360)] !== p(1253) && b[p(1360)] !== w[p(1360)] && (w[p(259)] = w[p(259)] || p(1978) + b[p(1360)] + p(801));
          var a0 = L[(b[p(792)] || w[p(792)] || "")[p(798)]()];
          if (!b[p(2595)] && (!a0 || !a0[p(2595)])) {
            if (w[p(1226)] && (b[p(1909)] || a0 && a0[p(1909)])) try {
              w[p(1226)] = N[p(2266)](w[p(1226)][p(1927)]($.PCT_ENCODED, W)[p(798)]());
            } catch (d0) {
              w[p(259)] = w[p(259)] || "Host's domain name can not be converted to ASCII via punycode: " + d0;
            }
            Z(w, l);
          } else Z(w, $);
          a0 && a0.parse && a0[p(686)](w, b);
        } else w[p(259)] = w[p(259)] || "URI can not be parsed.";
        return w;
      }
      function q0(R, p) {
        const b = e;
        var w = p[b(893)] !== !1 ? g : l, $ = [];
        return R.userinfo !== void 0 && ($[b(1131)](R.userinfo), $[b(1131)]("@")), R.host !== void 0 && $[b(1131)](G(o0(String(R[b(1226)]), w), w)[b(1927)](w[b(2153)], function(z, a0, d0) {
          const S0 = b;
          return "[" + a0 + (d0 ? S0(449) + d0 : "") + "]";
        })), (typeof R.port === b(191) || typeof R[b(1388)] === b(718)) && ($[b(1131)](":"), $[b(1131)](String(R[b(1388)]))), $[b(520)] ? $[b(1804)]("") : void 0;
      }
      var A0 = /^\.\.?\//, xe = /^\/\.(\/|$)/, me = /^\/\.\.(\/|$)/, $0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function W0(R) {
        const p = e;
        for (var b = []; R[p(520)]; )
          if (R.match(A0)) R = R[p(1927)](A0, "");
          else if (R[p(508)](xe)) R = R[p(1927)](xe, "/");
          else if (R[p(508)](me)) R = R[p(1927)](me, "/"), b.pop();
          else if (R === "." || R === "..") R = "";
          else {
            var w = R[p(508)]($0);
            if (w) {
              var $ = w[0];
              R = R.slice($[p(520)]), b[p(1131)]($);
            } else throw new Error(p(1390));
          }
        return b[p(1804)]("");
      }
      function V0(R) {
        const p = e;
        var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = b[p(893)] ? g : l, $ = [], z = L[(b.scheme || R.scheme || "").toLowerCase()];
        if (z && z[p(1972)] && z[p(1972)](R, b), R[p(1226)] && !w.IPV6ADDRESS[p(706)](R.host)) {
          if (b[p(1909)] || z && z[p(1909)]) try {
            R[p(1226)] = b[p(893)] ? N[p(1582)](R[p(1226)]) : N[p(2266)](R.host[p(1927)](w[p(2561)], W)[p(798)]());
          } catch (S0) {
            R[p(259)] = R[p(259)] || "Host's domain name can not be converted to " + (b[p(893)] ? p(1365) : p(1272)) + p(745) + S0;
          }
        }
        Z(R, w), b.reference !== p(1253) && R.scheme && ($.push(R[p(792)]), $[p(1131)](":"));
        var a0 = q0(R, b);
        if (a0 !== void 0 && (b[p(1360)] !== p(1253) && $.push("//"), $[p(1131)](a0), R[p(2483)] && R[p(2483)][p(1240)](0) !== "/" && $[p(1131)]("/")), R[p(2483)] !== void 0) {
          var d0 = R[p(2483)];
          !b[p(1557)] && (!z || !z[p(1557)]) && (d0 = W0(d0)), a0 === void 0 && (d0 = d0.replace(/^\/\//, p(1621))), $.push(d0);
        }
        return R.query !== void 0 && ($[p(1131)]("?"), $[p(1131)](R[p(2343)])), R.fragment !== void 0 && ($[p(1131)]("#"), $[p(1131)](R.fragment)), $[p(1804)]("");
      }
      function Y0(R, p) {
        const b = e;
        var w = arguments[b(520)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, $ = arguments[3], z = {};
        return !$ && (R = T0(V0(R, w), w), p = T0(V0(p, w), w)), w = w || {}, !w[b(2316)] && p[b(792)] ? (z[b(792)] = p[b(792)], z[b(1038)] = p[b(1038)], z[b(1226)] = p[b(1226)], z[b(1388)] = p.port, z[b(2483)] = W0(p.path || ""), z[b(2343)] = p[b(2343)]) : (p[b(1038)] !== void 0 || p[b(1226)] !== void 0 || p[b(1388)] !== void 0 ? (z[b(1038)] = p[b(1038)], z[b(1226)] = p[b(1226)], z[b(1388)] = p[b(1388)], z[b(2483)] = W0(p.path || ""), z[b(2343)] = p[b(2343)]) : (p[b(2483)] ? (p[b(2483)][b(1240)](0) === "/" ? z[b(2483)] = W0(p[b(2483)]) : ((R[b(1038)] !== void 0 || R.host !== void 0 || R[b(1388)] !== void 0) && !R[b(2483)] ? z[b(2483)] = "/" + p.path : R.path ? z.path = R[b(2483)][b(1597)](0, R[b(2483)][b(2263)]("/") + 1) + p[b(2483)] : z.path = p.path, z[b(2483)] = W0(z[b(2483)])), z[b(2343)] = p.query) : (z.path = R[b(2483)], p[b(2343)] !== void 0 ? z[b(2343)] = p[b(2343)] : z[b(2343)] = R[b(2343)]), z[b(1038)] = R.userinfo, z[b(1226)] = R.host, z.port = R[b(1388)]), z[b(792)] = R.scheme), z[b(1494)] = p[b(1494)], z;
      }
      function Dx(R, p, b) {
        var $ = d({ scheme: e(1237) }, b);
        return V0(Y0(T0(R, $), T0(p, $), $, !0), $);
      }
      function jx(R, p) {
        const b = e;
        return typeof R === b(718) ? R = V0(T0(R, p), p) : o(R) === b(1791) && (R = T0(V0(R, p), p)), R;
      }
      function ur(R, p, b) {
        const w = e;
        return typeof R === w(718) ? R = V0(T0(R, b), b) : o(R) === w(1791) && (R = V0(R, b)), typeof p === w(718) ? p = V0(T0(p, b), b) : o(p) === w(1791) && (p = V0(p, b)), R === p;
      }
      function gn(R, p) {
        const b = e;
        return R && R[b(696)]()[b(1927)](!p || !p.iri ? l[b(1769)] : g[b(1769)], Y);
      }
      function ge(R, p) {
        const b = e;
        return R && R[b(696)]()[b(1927)](!p || !p[b(893)] ? l[b(2561)] : g[b(2561)], W);
      }
      var Be = { scheme: e(1369), domainHost: !0, parse: function(p, b) {
        const w = e;
        return !p[w(1226)] && (p[w(259)] = p[w(259)] || "HTTP URIs must have a host."), p;
      }, serialize: function(p, b) {
        const w = e;
        var $ = String(p.scheme)[w(798)]() === "https";
        return (p[w(1388)] === ($ ? 443 : 80) || p[w(1388)] === "") && (p[w(1388)] = void 0), !p[w(2483)] && (p[w(2483)] = "/"), p;
      } }, dr = { scheme: e(1840), domainHost: Be.domainHost, parse: Be[e(686)], serialize: Be[e(1972)] };
      function fr(R) {
        const p = e;
        return typeof R[p(911)] === p(1488) ? R[p(911)] : String(R[p(792)])[p(798)]() === p(188);
      }
      var Ke = { scheme: "ws", domainHost: !0, parse: function(p, b) {
        const w = e;
        var $ = p;
        return $[w(911)] = fr($), $[w(800)] = ($[w(2483)] || "/") + ($.query ? "?" + $[w(2343)] : ""), $[w(2483)] = void 0, $[w(2343)] = void 0, $;
      }, serialize: function(p, b) {
        const w = e;
        if ((p[w(1388)] === (fr(p) ? 443 : 80) || p[w(1388)] === "") && (p[w(1388)] = void 0), typeof p[w(911)] === w(1488) && (p[w(792)] = p[w(911)] ? w(188) : "ws", p[w(911)] = void 0), p[w(800)]) {
          var $ = p[w(800)][w(2068)]("?"), z = h($, 2), a0 = z[0], d0 = z[1];
          p.path = a0 && a0 !== "/" ? a0 : void 0, p[w(2343)] = d0, p[w(800)] = void 0;
        }
        return p[w(1494)] = void 0, p;
      } }, lr = { scheme: e(188), domainHost: Ke[e(1909)], parse: Ke[e(686)], serialize: Ke.serialize }, bn = {}, hr = e(2357) + "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", ne = e(1504), yn = n(n(e(910) + ne + "%" + ne + ne + "%" + ne + ne) + "|" + n(e(1585) + ne + "%" + ne + ne) + "|" + n("%" + ne + ne)), vn = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", wn = e(2450), Sn = s(wn, '[\\"\\\\]'), kn = e(331), En = new RegExp(hr, "g"), Le = new RegExp(yn, "g"), In = new RegExp(s(e(2356), vn, "[\\.]", e(387), Sn), "g"), pr = new RegExp(s(e(2356), hr, kn), "g"), Pn = pr;
      function Mx(R) {
        const p = e;
        var b = W(R);
        return b[p(508)](En) ? b : R;
      }
      var mr = { scheme: e(1480), parse: function(p, b) {
        const w = e;
        var $ = p, z = $.to = $[w(2483)] ? $[w(2483)][w(2068)](",") : [];
        if ($[w(2483)] = void 0, $[w(2343)]) {
          for (var a0 = !1, d0 = {}, S0 = $[w(2343)][w(2068)]("&"), j0 = 0, Z0 = S0[w(520)]; j0 < Z0; ++j0) {
            var k0 = S0[j0][w(2068)]("=");
            switch (k0[0]) {
              case "to":
                for (var O0 = k0[1][w(2068)](","), B0 = 0, g0 = O0[w(520)]; B0 < g0; ++B0)
                  z.push(O0[B0]);
                break;
              case w(1526):
                $.subject = ge(k0[1], b);
                break;
              case w(1259):
                $[w(1259)] = ge(k0[1], b);
                break;
              default:
                a0 = !0, d0[ge(k0[0], b)] = ge(k0[1], b);
                break;
            }
          }
          a0 && ($[w(909)] = d0);
        }
        $[w(2343)] = void 0;
        for (var z0 = 0, K0 = z[w(520)]; z0 < K0; ++z0) {
          var H0 = z[z0][w(2068)]("@");
          if (H0[0] = ge(H0[0]), b[w(2595)]) H0[1] = ge(H0[1], b).toLowerCase();
          else try {
            H0[1] = N[w(2266)](ge(H0[1], b).toLowerCase());
          } catch (ke) {
            $[w(259)] = $[w(259)] || w(1011) + ke;
          }
          z[z0] = H0[w(1804)]("@");
        }
        return $;
      }, serialize: function(p, b) {
        const w = e;
        var $ = p, z = u(p.to);
        if (z) {
          for (var a0 = 0, d0 = z[w(520)]; a0 < d0; ++a0) {
            var S0 = String(z[a0]), j0 = S0[w(2263)]("@"), Z0 = S0[w(1597)](0, j0)[w(1927)](Le, Mx)[w(1927)](Le, c)[w(1927)](In, Y), k0 = S0[w(1597)](j0 + 1);
            try {
              k0 = b.iri ? N[w(1582)](k0) : N[w(2266)](ge(k0, b)[w(798)]());
            } catch (z0) {
              $[w(259)] = $[w(259)] || "Email address's domain name can not be converted to " + (b[w(893)] ? w(1365) : w(1272)) + " via punycode: " + z0;
            }
            z[a0] = Z0 + "@" + k0;
          }
          $[w(2483)] = z[w(1804)](",");
        }
        var O0 = p[w(909)] = p.headers || {};
        p[w(1526)] && (O0[w(1526)] = p[w(1526)]), p[w(1259)] && (O0.body = p[w(1259)]);
        var B0 = [];
        for (var g0 in O0)
          O0[g0] !== bn[g0] && B0[w(1131)](g0[w(1927)](Le, Mx)[w(1927)](Le, c)[w(1927)](pr, Y) + "=" + O0[g0][w(1927)](Le, Mx).replace(Le, c).replace(Pn, Y));
        return B0[w(520)] && ($[w(2343)] = B0[w(1804)]("&")), $;
      } }, Rn = /^([^\:]+)\:(.*)/, gr = { scheme: "urn", parse: function(p, b) {
        const w = e;
        var $ = p[w(2483)] && p[w(2483)][w(508)](Rn), z = p;
        if ($) {
          var a0 = b[w(792)] || z[w(792)] || "urn", d0 = $[1].toLowerCase(), S0 = $[2], j0 = a0 + ":" + (b[w(1712)] || d0), Z0 = L[j0];
          z.nid = d0, z[w(1647)] = S0, z.path = void 0, Z0 && (z = Z0[w(686)](z, b));
        } else z[w(259)] = z[w(259)] || w(207);
        return z;
      }, serialize: function(p, b) {
        const w = e;
        var $ = b[w(792)] || p.scheme || w(1729), z = p[w(1712)], a0 = $ + ":" + (b[w(1712)] || z), d0 = L[a0];
        d0 && (p = d0[w(1972)](p, b));
        var S0 = p, j0 = p[w(1647)];
        return S0.path = (z || b[w(1712)]) + ":" + j0, S0;
      } }, Cn = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, br = { scheme: "urn:uuid", parse: function(p, b) {
        const w = e;
        var $ = p;
        return $.uuid = $[w(1647)], $[w(1647)] = void 0, !b[w(2316)] && (!$[w(1663)] || !$[w(1663)].match(Cn)) && ($[w(259)] = $.error || w(1806)), $;
      }, serialize: function(p, b) {
        const w = e;
        var $ = p;
        return $.nss = (p[w(1663)] || "")[w(798)](), $;
      } };
      L[Be[e(792)]] = Be, L[dr.scheme] = dr, L[Ke.scheme] = Ke, L[lr[e(792)]] = lr, L[mr[e(792)]] = mr, L[gr[e(792)]] = gr, L[br[e(792)]] = br, a[e(2509)] = L, a.pctEncChar = Y, a[e(2252)] = W, a[e(686)] = T0, a[e(1692)] = W0, a[e(1972)] = V0, a[e(1205)] = Y0, a.resolve = Dx, a.normalize = jx, a[e(153)] = ur, a.escapeComponent = gn, a[e(948)] = ge, Object[e(2157)](a, "__esModule", { value: !0 });
    });
  }(Ye, Ye[i(1005)]), Ye.exports);
}
var Bx, ea;
function ir() {
  return ea || (ea = 1, Bx = function i(x, t) {
    const a = B;
    if (x === t) return !0;
    if (x && t && typeof x == "object" && typeof t == "object") {
      if (x[a(319)] !== t[a(319)]) return !1;
      var e, s, n;
      if (Array[a(1396)](x)) {
        if (e = x[a(520)], e != t[a(520)]) return !1;
        for (s = e; s-- !== 0; ) if (!i(x[s], t[s])) return !1;
        return !0;
      }
      if (x[a(319)] === RegExp) return x[a(824)] === t.source && x[a(746)] === t[a(746)];
      if (x[a(453)] !== Object[a(672)][a(453)]) return x[a(453)]() === t[a(453)]();
      if (x[a(696)] !== Object[a(672)].toString) return x.toString() === t[a(696)]();
      if (n = Object[a(1574)](x), e = n.length, e !== Object[a(1574)](t).length) return !1;
      for (s = e; s-- !== 0; ) if (!Object[a(672)][a(711)][a(422)](t, n[s])) return !1;
      for (s = e; s-- !== 0; ) {
        var o = n[s];
        if (!i(x[o], t[o])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), Bx;
}
var Kx, xa;
function $2() {
  return xa || (xa = 1, Kx = function(x) {
    const t = B;
    for (var a = 0, e = x[t(520)], s = 0, n; s < e; )
      a++, n = x.charCodeAt(s++), n >= 55296 && n <= 56319 && s < e && (n = x.charCodeAt(s), (n & 64512) == 56320 && s++);
    return a;
  }), Kx;
}
var Gx, ta;
function Ze() {
  const i = r;
  if (ta) return Gx;
  ta = 1, Gx = { copy: x, checkDataType: t, checkDataTypes: a, coerceToTypes: s, toHash: n, getProperty: u, escapeQuotes: d, equal: ir(), ucs2length: $2(), varOccurences: f, varReplace: l, schemaHasRules: g, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: y, getPathExpr: S, getPath: E, getData: I, unescapeFragment: T, unescapeJsonPointer: M, escapeFragment: D, escapeJsonPointer: j };
  function x(F, C) {
    C = C || {};
    for (var U in F) C[U] = F[U];
    return C;
  }
  function t(F, C, U, H) {
    const V = B;
    var Q = V(H ? 763 : 569), c0 = V(H ? 2616 : 2005), u0 = H ? "!" : "", s0 = H ? "" : "!";
    switch (F) {
      case V(1237):
        return C + Q + V(1237);
      case V(1912):
        return u0 + V(1661) + C + ")";
      case V(1791):
        return "(" + u0 + C + c0 + "typeof " + C + Q + V(550) + c0 + s0 + V(1661) + C + "))";
      case V(1395):
        return V(483) + C + Q + '"number"' + c0 + s0 + "(" + C + V(2458) + c0 + C + Q + C + (U ? c0 + u0 + V(1152) + C + ")" : "") + ")";
      case "number":
        return V(483) + C + Q + '"' + F + '"' + (U ? c0 + u0 + V(1152) + C + ")" : "") + ")";
      default:
        return V(1642) + C + Q + '"' + F + '"';
    }
  }
  function a(F, C, U) {
    const H = B;
    switch (F[H(520)]) {
      case 1:
        return t(F[0], C, U, !0);
      default:
        var V = "", Q = n(F);
        Q[H(1912)] && Q[H(1791)] && (V = Q[H(1237)] ? "(" : "(!" + C + " || ", V += H(1642) + C + H(227), delete Q.null, delete Q[H(1912)], delete Q[H(1791)]), Q.number && delete Q[H(1395)];
        for (var c0 in Q) V += (V ? H(2005) : "") + t(c0, C, U, !0);
        return V;
    }
  }
  var e = n([i(718), i(191), "integer", "boolean", i(1237)]);
  function s(F, C) {
    const U = i;
    if (Array.isArray(C)) {
      for (var H = [], V = 0; V < C[U(520)]; V++) {
        var Q = C[V];
        e[Q] ? H[H.length] = Q : F === U(1912) && Q === U(1912) && (H[H[U(520)]] = Q);
      }
      if (H[U(520)]) return H;
    } else {
      if (e[C]) return [C];
      if (F === U(1912) && C === U(1912)) return [U(1912)];
    }
  }
  function n(F) {
    const C = i;
    for (var U = {}, H = 0; H < F[C(520)]; H++) U[F[H]] = !0;
    return U;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(F) {
    return typeof F == "number" ? "[" + F + "]" : o.test(F) ? "." + F : "['" + d(F) + "']";
  }
  function d(F) {
    const C = i;
    return F[C(1927)](c, C(2625)).replace(/\n/g, "\\n").replace(/\r/g, "\\r")[C(1927)](/\f/g, "\\f")[C(1927)](/\t/g, "\\t");
  }
  function f(F, C) {
    const U = i;
    C += "[^0-9]";
    var H = F[U(508)](new RegExp(C, "g"));
    return H ? H.length : 0;
  }
  function l(F, C, U) {
    const H = i;
    return C += "([^0-9])", U = U[H(1927)](/\$/g, H(1470)), F[H(1927)](new RegExp(C, "g"), U + "$1");
  }
  function g(F, C) {
    if (typeof F == i(1488)) return !F;
    for (var H in F) if (C[H]) return !0;
  }
  function h(F, C, U) {
    const H = i;
    if (typeof F == H(1488)) return !F && U != H(923);
    for (var V in F) if (V != U && C[V]) return !0;
  }
  function m(F, C) {
    if (typeof F != i(1488)) {
      for (var H in F) if (!C[H]) return H;
    }
  }
  function y(F) {
    return "'" + d(F) + "'";
  }
  function S(F, C, U, H) {
    const V = i;
    var Q = U ? V(1215) + C + (H ? "" : V(1115)) : H ? V(1855) + C + V(812) : V(2214) + C + V(484);
    return P(F, Q);
  }
  function E(F, C, U) {
    var H = y(U ? "/" + j(C) : u(C));
    return P(F, H);
  }
  var O = /^\/(?:[^~]|~0|~1)*$/, q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function I(F, C, U) {
    const H = i;
    var V, Q, c0, u0;
    if (F === "") return H(2223);
    if (F[0] == "/") {
      if (!O.test(F)) throw new Error(H(2608) + F);
      Q = F, c0 = H(2223);
    } else {
      if (u0 = F.match(q), !u0) throw new Error(H(2608) + F);
      if (V = +u0[1], Q = u0[2], Q == "#") {
        if (V >= C) throw new Error(H(1090) + V + H(997) + C);
        return U[C - V];
      }
      if (V > C) throw new Error(H(2220) + V + H(997) + C);
      if (c0 = H(1021) + (C - V || ""), !Q) return c0;
    }
    for (var s0 = c0, n0 = Q[H(2068)]("/"), m0 = 0; m0 < n0[H(520)]; m0++) {
      var w0 = n0[m0];
      w0 && (c0 += u(M(w0)), s0 += " && " + c0);
    }
    return s0;
  }
  function P(F, C) {
    return F == '""' ? C : (F + " + " + C).replace(/([^\\])' \+ '/g, "$1");
  }
  function T(F) {
    return M(decodeURIComponent(F));
  }
  function D(F) {
    return encodeURIComponent(j(F));
  }
  function j(F) {
    return F[i(1927)](/~/g, "~0").replace(/\//g, "~1");
  }
  function M(F) {
    return F[i(1927)](/~1/g, "/").replace(/~0/g, "~");
  }
  return Gx;
}
var Jx, ra;
function un() {
  if (ra) return Jx;
  ra = 1;
  var i = Ze();
  Jx = x;
  function x(t) {
    i[B(2601)](t, this);
  }
  return Jx;
}
var Qx = { exports: {} }, aa;
function Fx() {
  const i = [" var startErrs", "strictCreate", " for (var ", " === undefined) ", " || ! Object.prototype.hasOwnProperty.call(", "Fetch canvas with current-layer boundary", "setter", "set", "defaults", "未选择工作流", "给发送的图片创建文档", "=0; ", "verbose", "2[0-4]", "请输入质量百分比", "Gemini 2.5 Flash Image", "assertCanSetRequestHandler", " , schemaPath: ", "completion/complete", " var validate = ", "formatParams", " = 0; ", "selection", '$ref: keywords ignored in schema at path "', "customRules", "ZodUnion", "([+-]\\d{2}:?\\d{2})", "', depsCount: ", "清除参考线框架", "图层 {{0}} 不是一个组", "effect", "mergeObjectAsync", "undefined", "无效边界: 左边必须小于右边，上边必须小于下边", " is present' ", ".type", "上传中，如果图片过大，可能会卡顿...", "/then", "#3399FF", "mcp-mesh-router", "任务执行失败: {{error}}", "新图层", "setWidgetValue", "PCT_ENCODED", `" keyword validation' `, "getPath", "   var err =   ", "formatters", " ? '", "pick", "fallbackRequestHandler", '.schemaPath = "', " var ", "elicitation/create", "element", "; } catch (e) { ", "NOT_FRAGMENT", "2024-11-05", "{2}", "__proto__", "userDefinedNsSeparator", "_requestMessageId", " = errors;", "Generating...", "fast", "missingRef", "No connection available for node ", "usedParams", "unicode", "interpolationkey", "跳转到最后一个", "SDPPP may not be installed or version mismatch (404)", "Outpaint (positive crop)", "async", "Error compiling schema, function code:", "Server does not support sampling (required for ", "messageQueue", "unicodeSupport", "notifications/resources/updated", "hours", "/*# sourceURL=", "readOnly", "Get mask from Canvas", "copy", "aborted", "comfy-entry", "cuid", "Cycle detected: ", "; else vErrors = null; }  ", " throw new ValidationError([", "Invalid JSON-pointer: ", "colors", "addResourceBundle", "$el", "resource_link", "onmessage", "Current Layer", "value", " || ", "sdppp_assets", "formatArgs", "] = ", "Add slot", "minDate", "]] === undefined ", "Array must contain ", " } else if ( ", "\\$&", "newdoc", " && !(", "addResource", "auto", "schema $id is different from id", "isDate", "uri", "_errors", " = 'else'; ", "invalid_intersection_types", "保存并立即执行", "Modify", "Bounds", "fcName", "mergeShapes", "propertyNames", "Email: {{email}}", "localeCompare", " is loaded but ", "Auto fetching…", "registerCapabilities", "运行了 {{duration}} 秒，{{message}}", "智能对象图层", "请选择要获取的遮罩", "escapeFragment", " = ''; ", "Failed to get result: {{error}}", "edges", "removeKeyword", "整个画布", "Crop", "ZodEffects", "openWorkflowJSON", "overloadTranslationOptionHandler", "requestIdSeq", '" resolves to more than one schema', "getPathExpr", "#FF0033", "toLoad", "This node defaults to current layer + mask", "shared", " || validate.schema", "任务取消失败: {{error}}", "dataVar", "_instructions", "getNodeStore", "Values", "uniqueItems", "获取选区失败", "lowerCaseLng", "自动填入画布关闭", "convert widget {0} failed:", " } else { ", "No active layer available", " == 'boolean') ", "queuePrompt", "errorHandlers", "equal", "?\\:\\:", "[i]; ", "innerType", "getResource", "Boundary preview", "transform", " = +", "executeHandlerAsync", "normalizeId", "getPluralFormsOfKey", ", validate.root.schema);", "Please select the mask to get", " items' ", "ZodOptional", "_error", "gte", "reconnecting", "$async", "wait", "isSupportedCode", "hasLoadedNamespace: i18next was not initialized", "maxReplaces", "common", "content", ".patternProperties", "maxProperties", "MissingRefError", "refine", "getFallbackCodes", "warn", "INTERCEPTOR_ERROR", "ComfyUI服务器重连中", "_addSchema", "skipOnVariables", "wss", "nullish", "[\\@]", "number", "Get Image", "useDefaults", "custom", "flatten", "#FF00FF", "_getInvalidInput", "nan", "ZodBigInt", "registerStreamRequestorHandler", "从 画布 获取遮罩", " ? await ", "notifications/resources/list_changed", "#00CC99", "ListFormat", "async format in sync schema", "URN can not be parsed.", "streamRequest", "; else vErrors = null; } ", "default is ignored in the schema root", "More actions", ".validate; var ", "Waiting in queue", "Get image from Current Layer", "从 选区 获取遮罩", "newlayer_selection", "cancel", "waiting for queue prompt", "Set as Current Selection", " = errors;  ", "exactly", "isValidLookup", "~validate", " , validate.schema", "{0,4}", "Auto Sync: off", ' !== "object")', "  } ", "assertCapabilityForMethod", "full", "can't resolve reference ", "coerceToTypes", "missed to resolve ", "minItems", "greater than ", ", received ", "仅选区范围", "positive", "#3366CC", "ZodVoid", "modules", "validateKeyword", "startsWith", "{1,4}", "jwt", "[\\+\\-\\.]", "Auto repick from PS", "].propertyName = ", "Workflow stopped by user", "文件未找到: {{path}}", "connectionManager", "posterIdentifier", "removed", "网关错误 (502)", "本地视频", "millisecond", "ParseError", "\\' is invalid' ", "error", "mergeArray", " var errs_", "if ( ", "skips", "comfy-user", "curr", "resources/list", " - no connection available", "Unrecognized key(s) in object: ", "Import as Smart Object", "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "unwrap", "heartbeatInterval", "='; ", "jpr", "toNode", "Rectangle coordinates required for create action", " } else {  for (var ", "Canvas", "setupStreamResponseHandler", "yrs", "MissingRef", "endsWith", " not implemented for node ", " var isAdditional", "store:update:", "addSchema", "Loading...", "自定义AI工作流引擎", "#FF3366", "setOutgoingRequestInterceptor", " = equal(", "delete", ") vErrors.length = ", "loadOne", "strictDefaults", "auz", "lazycreate", "isOpen", " === true) ? ", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", "getItem", "Get API Key", "mcpMesh", "0?[1-9]", "keyof", "too_big", "name", "应用ID:", "this", "inclusive", "./sdppp-custom.js", "iterator", "&gt;", "resolved promise for", "formData", "Node definition not found for ", " }; return validate; ", "_fragments", "constructor", "removeCatch", " !== parseInt(division", ") break; ", "bigint", "implementAction", "hasAction", "await ", ` if (typeof item == 'string') item = '"' + item; `, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "正在上传...", " in key: ", "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", "Remove slot", "filter", "Sending all images...", "toResolveHierarchy", "maxTokens", "创建文档", "connectedNodes", "maxRetries", "[A-Za-z]", "anyOf", "race", "未授权 (401)", "over", "Server does not support resources (required for ", "Client does not support sampling (required for ", "else", ".length == 0) {", " = true; if ( ", "allOf", "Meta-schema for $data reference (JSON Schema extension proposal)", "remove", "范围 1-100", "#CC0066", "isRoot", "__DEFAULT__", "assertNever", "#0066CC", "++) { ", " = defaults[", "1737WHlOrE", "extractFromKey", "基础 URL", ".validate", "isInteger", "/type", " = errors , ", "_formats", "hasEdge", "Error", "prefix", " return errors === 0;       ", "|0?0?", "console", "#0099CC", "Document {0} not found", "无法将文件作为文档打开: {{path}}", "停止自动运行", "]) ", "prompts/list", "#3333FF", "graphChanged", "hasNotificationHandler", " = formats[", "cycles", "反向裁剪(Inpaint)", '[\\"]', "]; return false; ", "implementInternalAction", "skipKeywords", "getClientCapabilities", "patternProperties", "_serverInfo", " != 'number') || ", "当前图层除外", "Primary boundary", " , params: { missingProperty: '", "mountTo", "has", "sampling/createMessage", "isInitialized", "properties", " = errors; var ", "lngs", "compileAsync", "missingKeyNoValueFallbackToKey", "%c ", " -> ", "some", "getResourceBundle", "' : '", "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", "roots", "usedLng", "comfy_api_key", "broadcastHandlers", "indexOf", "curlayer_curlayer", "resetTimeoutOnProgress", "executing", "本节点默认继承:", "call", "_compilations", "Illegal input >= 0x80 (not a basic code point)", "backendConnector", "createInstance", "边界预览", " = false; ", "+Alt reversed mask", "Selection boundary", "retryTimeout", " === undefined ", "Save", ".schemaPath === undefined) { ", "unescapeFragment", "_schemas", "widgetable", "Failed to convert widget {0}:", "email", "sdppp/streamResponse", "当前选项：图层 {{layerName}}", ", rootData)  ", "years", "Failed to request initial state for ", "enabled", "Create document for sent images", "clear", "isDatetime", "%25", "Server does not support logging (required for ", ") {  ", ".errors", "valueOf", "node_errors", "Selection bounds only", "isClone", "year", "#CC33CC", "errSchemaPath", "missingSchema", "ActionSet {{0}} 未找到", "prs", "prepend", "returnDetails", "2024-10-07", "uxpHost", "shape", "Running...", "isURL", "invalid_return_type", "_metaOpts", "void", "failed parsing options string in nesting for key ", " = typeof ", "kind", "sdppp/abort", "pending", "env", "请选择AI服务", "pendingCount", "valid", "ZodReadonly", "(typeof ", " + '\\']'", "Clear guide frame", "oninitialized", "#33CC00", "postProcessPassResolved", "round", "创建预览文档", "close", ", received '", "请求超时 (408)", "mode", "找不到图层: {{0}}", "ComfyUI加载中...", ") ? ", "Enter a quality percentage", "markDisconnected", "workflows", " validate.errors = vErrors; return false; ", "errors", "Get image from Canvas", "RequestTimeout", ` + '" schema' `, "Failed to reboot ComfyUI", "Task cancel failed: {{error}}", "match", "Current option: Layer", "AUTO", "It seems you are nesting recursively key: ", "  for (var ", "+\\.", "user", "aao", "Invalid boundary type: {{type}}", "currentOnly", "clearCache", "heartbeatTimer", "length", "languageChanging", " === false) ", "Create layer failed", "buffer", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "sourceNodeId", "comfyAPI is not initialized, maybe comfyUI is too old", "actions", "Hold Shift for more options; Ctrl for single fetch", "key '", "if (!", "图层遮罩", "50810lGxKpU", "Validation failed but no issues detected.", " (async", "execution_success", "images", "[^\\%\\:]", " , data: ", "getOwnPropertyNames", "missing", "errToObj", " if (schema", "Invalid graph definition: ", "removeRequestHandler", "Current layer boundary", "compile", "tools/call", " if (true) { ", '"object"', "strictKeywords", "readonly", "onTimeout", "capabilities", "无效的边界类型: {{type}}", " , params: { type: '", "removeMessageEventListener", "Clear", "/additionalItems", "apply", "_meta", "$id", "Creating task...", "_refinement", "resources", "该节点默认继承当前图层与遮罩", "protocol", "removeNamespaces", " === ", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, ") {   ", "not-basic", "ary", "isEmoji", "Invalid input", "; } ", "#FF6633", "includes", "shift", "loaded namespace ", " ( ", "Action handler ", "initializeNodeStores", "macro", `"' `, "ctx", " for language ", "res", "Server does not support tools (required for ", "_errorDataPathProperty", "getBestMatchFromCodes", "superRefine", "Stop all", "key", "Waiting for image upload...", 'Invalid input: must end with "', "_getOrReturnCtx", " == ", " , message: 'should NOT have more than ", "当前任务数:", "meta-schema not available", '"; } ', "Server does not support notifying of prompt list changes (required for ", "acy", "No videos yet", "Get mask from Selection", "__origin", "dataType", "activeWorkflow", "#6633CC", "namespace", "freeze", "initialized", "return", "无效操作: {{action}}", "setupAbortHandler", "warning", "setPrototypeOf", "输出区域", "disable", "deprecate", "调整输入设置", "2025-03-26", "#3333CC", " = false , ", "3rdParty", "requestedSchema", " characters' ", "InternalError", "canReachThroughConnectedNodes", "loadSchema", "exception_message", "duration", "ZodBranded", "removeEventListener", "adf", "click", "relatedRequestId", "tools/list", 'no schema with key or ref "', "[\\/\\?]", "acq", "&#x2F;", "util", "' } ", "sendResourceListChanged", "isFinite", " } if (", " Math.abs(Math.round(division", "Unable to reboot ComfyUI", " = false; if (e instanceof ValidationError) ", " , message: 'should NOT be valid' ", "Fetch current layer with primary boundary", "xn--", "transport", "not_finite", " , params: { propertyName: '", "选择文件", "nodeIndexes", "initializeResponseQueue", "openWorkflow", "date", "exclType", "Show sent images", "IPV4ADDRESS", "catch", ", deps: '", " ); if (isAdditional", "date-time", "accept", "_parseSync", "prototype", " validate.errors = [", "cardinal", "Current Selection", "regExpQueue", "_cached", "') ", "_requestHandlers", "_cleanupTimeout", "put", "#/definitions/nonNegativeIntegerDefault0", ".test(", "(new RegExp(", "Get pixel of {{0}} failed", "parse", "ltr", ` , message: 'should pass "`, "level", 'Invalid input: must start with "', " + '", "Node definition not found for current node ", " = errors === errs_", "partialBundledLanguages", "unknown keyword: ", "toString", "stream", "运行中...", "reject", "yhd", " } ", "greater than or equal to ", "rest", "schemaHasRules", "refVal[", "test", "  var err =   ", " !== undefined ", "=== 选项 ===", "_options", "hasOwnProperty", "sampling", ", '", "获取图片", ", schema", "删除当前", "messageType", "string", ".then", "checkDataTypes", "append", "finally", "customErrors", "ignore", "_pendingDebouncedNotifications", "#9933FF", "_notificationHandlers", "排队等待", "退出登录", "选区除外", "formatSeparator", "is an invalid additional property", "waitingReads", "Scan", "forward", " = RULES.custom['", "使用教程", ".data = ", "initializeProducer", "nodes", "_parseAsync", "start", "Current option: File", "strict", " via punycode: ", "flags", "ZodLazy", "+Alt crop by selection", "Select layer", "floor", "resourceStore", " !== undefined)", "get_layer_info: 需要 layer_identify", "readingCalls", "dataPath", "keyPrefix", "Fit to selection", "translate", "abs", "var ", "addUsedSchema", " { keyword: '", " !== ", "getDataByLanguage", "Invalid boundary: left must be less than right, top must be less than bottom", "exactly equal to ", "邮箱: {{email}}", "Exclude selection", "8MopjYG", "cuid2", "#CC3366", "resolve", "Run", "isNaN", "acw", "正向裁剪", "schema id must be string", "hasPath", "[object RegExp]", "ruleErr", "masks", ")) ", "languageOnly", "#66CC33", "too_small", "以画布边界获取当前图层", "Cloud-based model service platform", "Refresh", "Layer mask", "notifications/prompts/list_changed", "__proxy_forward", "scheme", "自动获取中…", "same-document", "getNodeTitle", "getRegExp", "order", "toLowerCase", "create", "resourceName", " reference.", "should NOT have additional properties", "validateStreamRequestorRequest", "); errors = vErrors.length;  for (var ", "' + ", "lte", " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ", "getter", "Sending...", "Invalid ", "log", " + ']'", "任务未完成，当前状态: {{status}}", "strong", "partial", "passthrough", "diff", "buildDirectedAdjacencyList", "minValue", "Save all", "Main Image", ".pi-sign-out", "maxValue", "source", "getImage", "processors", "不裁剪", "minProperties", "joinValues", "resource", "设为选区", "keyword", "passContext", " = true;  ", "#99CC33", "ZodRecord", "MAX_SAFE_INTEGER", "[^\\%\\/\\:\\@]", "如何获取APIKey和API Secret", " } else {  errors = ", "getTransport", "JWT", "_processInputParams", "formatType", "Auto Sync: on", "No linked layer for {{0}}", "[\\:\\@]", ".schema = ", "pga", "withTimeout", "action", "node_id", "ayp", " && !Array.isArray(", "_limitProperties", "sourceCode", "zh-CN", "当前选项：画布", "detection", "#0000CC", "at most", "Running for {{duration}} secs, {{message}}", ") break; } ", "No crop", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "detail", "escapeQuotes", "instructions", "创建图层失败", "Copy", "returnedObjectHandler", "style", "resetStats", "concat", "Maximum total timeout exceeded", "types", "deepPartial", " } } else { ", " has duplicate value ", " if (errors === 0) return data;           ", "; }   var err =   ", "registerProxyForwardHandler", "ZodBoolean", "minLength", "$comment", "Cannot register capabilities after connecting to transport", "postProcess", " = false; for (var ", "def", "languageUtils", "logger", "Invalid date", "iri", "runningRequests", "should have required property \\'", "datetime", " !== undefined) ; ", "请选择要获取的图像", "checkState", "click to restore", "and", "发送到PS", "Action ", "setupStreamProtocolHandlers", "Google Gemini 图像生成器", "ZodEnum", "file", "uiWeight", "headers", "%[EFef]", "secure", "设为当前选区", "  }  ", "isBase64url", "getConnectionCount", "maxSize", "选择模型", " = errors;var ", "ulid", " is not a valid identifier", "ajv", "processCode", "not", "Invalid function return type", "splice", "ZodDiscriminatedUnion", "removeMiddleware", "describe", "outputType", "image/png", "#9900CC", "ZodString", "} else {  errors = ", "Generate", "适配至选区", "25[0-5]", "stopSequence", "How to get APIKey and API Secret", "你的工作流", "Range 1-100", "Auto-run workflow after changes...", "exec_info", "shorter", " , schema: validate.schema", "Stop", "没有活动文档", "Failed", "unescapeComponent", "day", " var missing", "&quot;", "从 画布 获取图像", "debug", "hasResourceBundle", "fatal", "long", "nestingOptionsSeparator", "isTop", "state", "origin", " character(s)", "signal", "substr", "entries", "optional", "enable", "Module", " = true;", "unknownKeys", "Fetch canvas with primary boundary", "false", "按选区裁剪", "Reverse", " = false; else if (", "Clear all", "assertNotificationCapability", "weeks", "#33CC33", "openWorkflows", "创建文档失败", "nestingSuffix", "How to get APIKey", "initImmediate", "网关超时 (504)", "_onnotification", "xaa", "subfolder", "Connection closed", "keySeparator", "ZodSet", "float", "en-US", "connected", "$t(", "contains", "catchall", " levels up, current level is ", "/additionalProperties", "tools", "自动从PS重新获取", "var pattern", "empty", "留空表示不限", "ZodNull", "exports", "services", "nanoid", ".type || 'string'; if (", "No images", "Options", "Email address's domain name can not be converted to ASCII via punycode: ", "rtl", "+Shift 调整更多选项；Ctrl 单次获取。", "nodeProxies", "Server error (500)", " === null || (", "languages", "messages", "coerce", "ComfyUI加载失败，HTTP状态码：{{code}}", "data", "hasRequestHandler", "registerHandler", "获取图层信息", "loadResources", "正在创建任务...", " }; return validate;", "dataLevel", "unescapePrefix", "useRawValueToEscape", " === 1) ", "获取像素失败: {{0}}", "NOT_PATH_NOSCHEME", "executeOutgoingNotificationInterceptor", "is a required property", "newdoc_canvas", "fallback", "userinfo", "_clientVersion", "messagePoster", "authInfo", "silent", "SDPPP可能未安装或和插件版本不匹配 (404)", "getLanguagePartFromCode", "resources/unsubscribe", "schemaErrorMap", "handleIncomingMessage", "errs_", "$schema", "Invalid forward path for proxy action", "Login Successful", "missingInterpolationHandler", "minutes", "aec", "thisServer", "以当前图层边界获取画布", "#6600FF", "Model with affordable price, abundant community applications", "获取结果失败: {{error}}", "none", "InvalidParams", "removeAdditional", "Jump to last", "skipInterpolation", "discriminator", "getDefinition", " if (!", "all", "extendRefs", ") : ", " == +", "hasOutgoingRequestInterceptor", "executeOutgoingRequestInterceptor", "_cache", " = null; ", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "objectKeys", "Invalid proxy forwarding: current node ", " : ", " properties' ", "color: inherit", "propsKeywords", "dirty", "response", "Failed to open image file: {{error}}", "=startErrs", " !== undefined && ( typeof ", "$data", "format", "Cannot access property/index ", "当前图层范围", "Node ", "sdppp_workflow_alias", "execution_error", "#99CC00", "running", "createGlobalDispatcherForType", "connect", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "Max size (px)", "#CC9933", " throw new ValidationError(vErrors); ", "missingKey", "notification", "#CC3300", "Upload aborted", "#CC0033", "setNotificationHandler", "reset", ".dataPath === undefined) ", "当前选项：文件", ` , message: 'should match format "`, "second", "Client does not support listing roots (required for ", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "smaller than or equal to", " == errors) {", "getSchema", "#6633FF", "zero", "execution_start", "handleIncomingRequest", "_capabilities", "then", "Not connected", "Connect", "_opts", "assistant", "milliseconds", "82831cJRiux", "push", " failed", "token", "ComfyUI failed to load, HTTP status code: {{code}}", "unsetNotificationHandler", " !== undefined && typeof ", "++) if (equal(", "[ ]*{", "resolveRunImages", "activeState", "setupGeneralBroadcastHandler", "resources/read", "/patternProperties/", "notifications/progress", " != 'boolean') ", "removeDefault", "Disk", "useDefault", "); if (", "min", "ids", "isFinite(", "_refs", "getNode", "ZodPipeline", "varOccurences", "version", "isTime", "#FF3333", "Enter your RunningHub API Key", "cacheUserLanguage", ") {  var err =   ", "Client does not support elicitation (required for ", "#00CCFF", "use", "formErrors", "' && !(typeof ", "#/definitions/schemaArray", " === null || ", "-arab", "sendResourceUpdated", "\\%25|\\%(?!", " else { ", "prompt_ids: ", "ZodArray", "outgoingNotificationInterceptors", "parent", ") { errors = ", "debouncedNotificationMethods", " if (true) {", "executed", "_onclose", "适配至当前图层", "Layer not found {{0}}", ".dataPath = (dataPath || '') + ", "translation", "点此获取RunningHub APIKey", "fromCharCode", "schema $id ignored", "Create guide frame", "defaultValue", "Failed to request initial states after connecting to ", "hasOutgoingNotificationInterceptor", "OpenAI/Google 格式API", "ownProperties", "#66CC00", ".length ", "getFixedT", "notifications/tools/list_changed", "unrecognized_keys", "preload", "requestsHandled", "invalid_string", "Graph must have at least one node", "resolveComponents", "如何获取APIKey", "sdppp/directRequest", "Action set {{0}} was not found", "_timeoutInfo", "from", "escape", "选择 AI 服务提供商", "merge", "missed to pass in variable ", "'/' + ", "hostVersion", ", limit: ", "skipCopy", "No backend was added via i18next.use. Will not load resources.", "Please select AI service", " cannot be resolved", "clientInfo", ") ) ", "mesh:workflow", "optionsMap", "host", "String must contain ", "formatter", "Core schema meta-schema", "segment", "method", "' , dataPath: (dataPath || '') + ", "minute", "Synchronous parse encountered promise.", "fallbackNotificationHandler", "updateKey", "null", "right", "You must pass an array of schemas to z.tuple([ ... ])", "charAt", " != 'boolean' && ", "ars", "合并组失败", "maxDate", "int", "prompt_id", "external", "Expected ", "Leave empty for no limit", "unescapeSuffix", " after ", "smartobject", "suffix", "safeParseAsync", "offset", "isLanguageChangingTo", " try { await ", "if (", "body", "A request handler for ", "Store not found for current node ", "./sdppp_upload2", " != 'string') || ", " = errors; ", "No active document", "[i], ", "ZodNativeEnum", " ) {   ", "getConnectionInfo", "querySelector", "MethodNotFound", "ASCII", ".validateSchema(", "initializedStoreOnce", "toFixed", "interceptorTimeout", "code", "safeParse", " = false;  ", "addKeyword", "getRule", "reboot", ` , message: 'should match pattern "`, "getTransportToNode", "reload", "failed", "options", "ZodLiteral", "requestsIntercepted", "Confirm", "exactUsedKey", "handle", "Notification interceptor failed for ", "not_multiple_of", "Failed to send an error response: ", " , message: 'should be multiple of ", "languageDetector", "]; ", "createAsyncIterator", "未知错误（{{code}}）", " ) || ", "Number must be ", " , schema: ", "isOptional", " var schema", "xmn", "alwaysFormat", " , schema: false , parentSchema: validate.schema", "firebug", "nestingPrefix", "+Alt 按选区裁剪", "Failed to send response: ", "[0]; ", "notificationHandlers", "sessionId", " === 'true' || ", "minSize", "toUpperCase", "getTime", "__esModule", "_getId", "Input Image", "getState", "save", "base64", "arrayKeywords", "作为智能对象导入", "maxTotalTimeout", "Current layer bounds", "; if (vErrors !== null) { if (", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "isCUID", "exact", "resolveImage", "completed", "nonExplicitSupportedLngs", "addResources", "exclusive", "interpolation", " validate.errors = null; return true; ", " than ", "simplifyPluralSuffix", "Received a response for an unknown message ID: ", "cleanup", "status", "loadNamespaces", "done", "RULES", "abortRequest", "sendPromptListChanged", " not found in graph definition", " , params: { multipleOf: ", "reason", "高级选图", "All", "actions:util", "ZodUndefined", "getAllReachableNodes", "以主图边界获取当前图层", "reference", "mesh:comfy", "Forbidden (403)", "interrupt", "opts", "Unicode", "typ", "json", 'unknown format "', "http", "ZodCatch", "kPanelBrightnessMediumGray", "react", "send", "inlineRefs", " = validate.schema", "__internal_", "'then'", "description", " %c", " instanceof RegExp) && ", ") { ", " , message: 'should contain a valid item' ", "definitions", "ZodNaN", "当前没有可用图层", "joinAs", "findPath", "port", "ZodAny", "Unexpected dot segment condition", "compositeRule", "510", "hasDefaultValue", "encountered", "integer", "isArray", "del", "pong", "requestInitialStateForNode", "humanize", "payload", "ZodPromise", " , params: { keyword: '", "_onrequest", "inlineRef", "_oninitialize", "sec", "valueType", "setProperty", "getScriptPartFromCode", "sdpppHandshake", "批次数量", "Unknown message type: ", "isEmail", "isConnected", "shu", "table", "schema is invalid: ", "通道连接中...", "暂无图片", "property ", "从 当前图层 获取图像", "arb", "从磁盘获取", "setItem", "additionalItems", "?\\]?$", " == 'function' ? ", "loadGraphData", "Gemini 2.5 Flash 图像", "userDefinedKeySeparator", " , params: {} ", "(?:", "isObject", "#0033CC", "forwardBroadcast", "position", "Overflow: input needs wider integers to process", " ) : ( (", " , params: { allowedValues: schema", " = !(false ", "Exclude current layer", " !== undefined) {  ", "execution_interrupted", "keySchema", "setupStreamRequestHandler", " , parentSchema: validate.schema", "apc", "backend", " != 'number' || ", "#6600CC", "MCP error ", "isEmpty", "You are passing an undefined module! Please check the object you are passing to i18next.use()", "Not implemented (501)", ".length == 1) { ", "; else vErrors = vErrors.concat(", "getTransportInternal", "快捷键选图功能仅登陆后可用", "_getType", "json-pointer", "findIndex", " === '' || ", `" won't get resolved as namespace "`, "NOT_PATH", "nest", "Validation", "var customRule", "非法的名称: {{0}}", "$$$$", "getHandler", "alg", "4466944TdGkPa", " , params: { comparison: ", "Positive Crop", ".call( ", "destroy", "extend", "         , parentSchema: validate.schema", "mailto", "registerDirectRequestHandler", "RH Coins:", "peo", "errorPath", "validate", "Not a ZodError: ", "_loadingSchemas", "boolean", "bind", "RH币:", "now", " else ", "setupTransportHandlers", "fragment", "jsonStringifyReplacer", "Document {{0}} not found", "enum", "more", "#CCCC00", " == 'boolean' || ", " var i = ", "resetRegExp", "localRefs", "[0-9A-Fa-f]", "run", "uiWeightSum", "refVal", "_validateKeyword", 'Invalid input: must include "', "load", "./api/userdata/workflows%2F.index.json", "root", "appendNamespaceToCIMode", "当前图层", ".async; ", " == 'string' && ", "用户名: {{username}}", "nestingRegexp", "clone", '"failed to compile', "BigInt must be ", "regexp", "Create document failed", "Empty", "parseInt", "subject", ".validate;", "任务已取消", "请输入您的RunningHub API Key", " && Object.prototype.hasOwnProperty.call(", "nonnegative", "暂无视频", "pop", "image", "default", "coerceTypes", "Error in direct request ", "function", " when property ", "No images yet", "Outgoing message:", " var err = ", "fallbackNS", "documentElement", "true", "]; } else { ", "schemaId", "schema", "Local file", "precision", "validate.schema", "未找到文档 {0}", "[^\\%]", "保存所有", "No first related layer in {{0}}", " , schema:  ", "absolutePath", "ValidationError", "workflow", "afb", "unknown", "stats", "nonpositive", "smaller than", "]; var ", "overflow", "combo", "errorMap", "getProperty", "未找到图层 {0}", "refs", " = ", "val is not a non-empty string or a valid number. val=", "keys", "#CC3333", "postMessage", "queue", "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "Input Setting", "relativetime", " == 'string' || ", "toUnicode", "prompts", "fromNode", "%[89A-Fa-f]", ".additionalProperties", "粘贴你的模型名称", "停止全部", "Request timed out", "Choose File", "Crop by selection", "bbz", "Save current", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "prepareLoading", "meta", "slice", "getCurrentNodeId", "checks", "Get mask from Current Layer", "enforceStrictCapabilities", "nonempty", "saveWorkflow", "assertRequestHandlerCapability", "getDefaultValuesFromSchema", "Notification handler failed for ", "Execute", "Current Tasks:", "resolvedOptions", "one", "Import from disk", "Failed to open file as document: {{path}}", "lastIndex", "heartbeatTimeout", "stopAll", "__nwjs", "async schema in sync schema", "listenMessageCallback", "组 {{0}} 中没有第一个相关图层", "workflows/", "/%2F", "672FSooeC", "promise", "requestId", "cimode", "'].definition; var ", "Local image pack", "setOutgoingNotificationInterceptor", "errs__", "get_layer_info requires layer_identify", "+Alt 反转遮罩", "Note", "storage", "forEach", "isULID", "color: ", " / ", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "schemaUnknownRules", "schemaPath", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", "typeof ", "Advanced selection", "size", "Download", "$ref", "nss", "Invalid", "Invalid function arguments", "Comfy.userId", " if (rootData === undefined) rootData = data; ", "ayn", "left", "detectCycles", "yih", "addEventListener", "setState", "syncStoresToNewConnection", "removeResourceBundle", "[object Number]", "Array.isArray(", "Fit to canvas", "uuid", " = await ", "custom keyword definition is invalid: ", "utils", "i18next:", "toQuotedString", "加载中...", " not in path ", "找不到文档: {{0}}", "uri-reference", "invalid_union", "Request timeout (408)", "ZodTuple", "objectValues", "arrayToEnum", "allServers", "#CC00CC", "); for (var ", "sdppp", "userAgent", "fail", "sdppp 运行 Photoshop Action", "useCustomRule", " else {   ", "服务不可用 (503)", "nsSeparator", "OpenAI/Google format API", "Outgoing request interceptor failed: ", "minimum", "removeDotSegments", "escapeValue", "ConnectionClosed", "tried", "broadcast", "audio", "brand", "lastPongReceived", "usePattern", "critical", " var async", "[\\:\\@\\/\\?]", "getCapabilities", "getValidEnumValues", "Failed to pick file. Please try again.", "#CC00FF", "按住 Shift 键以新文档方式导入", "pattern", "` could not be extracted from all schema options", "以当前图层边界获取当前图层", "nid", "Intersection results could not be merged", "isNANOID", "isBase64", " = false; else { ", "pathname", "time", "endTurn", "getCanonicalLocales", "index", "resolveRef", "exclIsNumber", ";  ", "Get selection", "Fetch current layer with current-layer boundary", "closeWorkflow", " = customRules[", "urn", " if (! ", "Select Image Source", "UNRESERVED", " for nesting ", "actionHandlers", "Guest login successful", "maxLength", "next", "Import as New Document", "defaultVariables", "workflowManager", " = false; else {", "validateSchema", "parseAsync", "pluralResolver", "saveMissingPlurals", ") {", "detect", "isNullable", "模型物美价廉，海量社区应用", '" is used in schema at path "', "[GraphStoreSynchronizer] Error broadcasting state update for ", "Cannot forward to node ", "sdppp/streamRequest", "#FF0000", "precheck", "nodeTransports", "workflow-run", "modifying", " , params: { passingSchemas: ", "loaded", "服务器错误 (500)", " if (", " = true; else if (!Array.isArray(schema", "arz", " , params: { ref: '", "init", " if (errors === ", "elicitation", "ESCAPE", "++) { vErrors[", "clearItems", "errorDataPath", "ajp", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "#FF6600", "handleDirectProxyForward", "markConnected", "{0,6}", "ZodDate", "主图边界", "不支持非文本图层: {{0}}", " + ", "url", "Enum", "apd", "自动同步: 开启", "pluralRulesCache", " , message: 'should be ", "throwIfAborted", "compiling", "object", "自动填入画布开启", " must be number", "isNotification", "extra", "isRequest", "Upload failed: ", "logging", "http://json-schema.org/draft-07/schema", "Fetch canvas with canvas boundary", "addIssue", ".additionalItems", "Select boundary", "join", " , params: { failingKeyword: ", "UUID is not valid.", "getConnectionToNodeInternal", "/required", "Run Photoshop Action", "Press Enter to open app: {{appName}}", "file://", "reset=false but needsReset: ", "; var ", "initialize", " ) ", "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "Outgoing notification interceptor failed: ", "renderer", "graph update cost ", "manuallyExtractDefaults", "setupGraphStoreSync", "_clientCapabilities", " } if (errors === ", "ZodSymbol", "changeLanguage", "未实现 (501)", 'did not save key "', "__internal_requestInitialState_", " , message: 'should be equal to constant' ", "_limitLength", "msecs", "failedLoading", "#3399CC", "inline", "以画布边界获取画布", "api", "find", "typeName", "#FF3300", "https", "ping", "Heartbeat timeout for poster ", "assertIs", "#33CC66", "reverse", "#FF33FF", "[\\-\\.\\_\\~]", "isCIDR", "range", "customRule", "options.loadSchema should be a function", "Converting circular structure to JSON", "buildAdjacencyList", " = refVal[", "'[' + ", "strictNumbers", "Task cancelled", "realTransport", "nullable", "useColors", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "Error handling incoming message:", "strip", "widgets", ") && (missing", " === undefined || ", " = true; } else { ", "defaultNS", "schemas", "Failed to send cancellation: ", " is already defined", "_transport", "Current layer bounds only", "other", "  )  ", "assert", "dataProperties", "parseMissingKeyHandler", " ? ", "DateTimeFormat", "Canvas boundary", "NOT_USERINFO", "prp", " , params: { pattern:  ", "assign", "queues", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "saveMissing", " = e.errors; else throw e; } ", '" ignored in schema at path "', "notifications/roots/list_changed", "点击使用当前选区", "No active layer", ") {   var err =   ", "spa", "setupNodeBindings", "sendToolListChanged", "CurLayer", "画布范围", "MIN_SAFE_INTEGER", "rules", "#33CC99", "graphInstance", "jsonPointers", "invalid_union_discriminator", "extract", "streamRequestorHandlers", "comfyAPI", "domainHost", "执行成功", "var division", "array", "选择素材来源", "sdppp-heartbeat", " = null; try { ", "ZodNumber", "exists", "isTransportReady", "{3}", "setDefaultNamespace", "broadcastManager", "Base URL", "unsetOutgoingNotificationInterceptor", "secs", "resolvedLanguage", "Images Per Batch", "replace", "exclude", "applyPostProcessor", "Success", "transports", "augment", "pbt", "Your powerful node-based workflow engine", "read", "waiters", "#CC6600", "var refVal", "metaSchema", "joinArrays", "Delete current", "setKey", "pluralCategories", "invalid_date", "emit", "fullPath", "正在发送所有图片...", "debugDisableHeartbeatResponse", "Local video", '" was not yet loaded', "unshift", "graph", "supportedLngs", "getDefaultValueFromField", "nodeId", ".length > ", "Logout", "mountedTransports", "at least", "[A-Fa-f]", "^\\[?(", "[^\\%\\[\\]\\:]", "Request handler failed: ", "以主图边界获取画布", "never", "exec", "async keyword in sync schema", " , ", "selectColor", '" as the namespace "', "assertEqual", "serialize", "[object Function]", "#CC0000", " == 'object' && !(", "info", "画布变更后自动运行工作流", "URI is not a ", "allKeys", "dev", ".call(this, ", "interpolator", "createStreamState", "尺寸限制 (px)", "#FF9900", "); if (!", "createErrors", "选区遮罩", "本地图片包", "ZodNever", "getRunningRequestsCount", "acx", "Already connected to node ", "<errors; ", "defaultMeta", "trim", "无法打开图像文件: {{error}}", "catchValue", "Refresh workflow list", "ZodDefault", "#/definitions/simpleTypes", "_progressHandlers", "画布边界", " , message: '", " && ", "self", "stateUpdate", "ifClause", "roots/list", "timestamp", "baseId", "parentData", "listWorkflows", "清除视频", "stack", "fullFilename", "acm", "hasLoadedNamespace: i18n.languages were undefined or empty", "multipleOf", "#FF00CC", "#00CC00", "addIssues", "pes", "禁止访问 (403)", "defaultError", '" already exists', "exactLength", "cacheKey", "  if (!", "externalListenMessageCallback", "[^\\%\\/\\@]", "const", "var missing", "regExpMap", "[GraphStoreSynchronizer] Error processing store update for ", "locale", "]; if (", "#0000FF", "Paste WebApp ID here", "No handler for streamRequestor: ", "init: no languageDetector is used and no lng is defined", " = 'then'; ", "type", "_cachedPath", "ComfyManager not found, cannot reboot", "每批图像数", "ydd", "removeSchema", "#9900FF", "saveMissingTo", "refinement", "NumberFormat", "; if (", "argumentsError", "parsedType", `获取图像 &
裁剪选区遮罩`, " && self._opts.unknownFormats.indexOf(", "extendTranslation", "pickLocalFile", "curlayer_selection", "maximum", "addLookupKeys", "&amp;", "请登陆后使用插件", "updateMissing", "Google Gemini Image Generator", "decline", "split", "keywords", ".else", "formats", "addMetaSchema", "作为新文档导入", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "local", "', missingProperty: '", "returnObjects", "removeItem", "正在等待图片上传...", "ayl", "McpError", "changeTracker", "step", "Failed to check workflow state changes:", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "curlayer_canvas", "emoji", "validation failed", "parentDataProperty", "canvas", " ) { ", "#FFCC33", "AbortError", "_setupTimeout", ").length ", "Unknown", "fromCodePoint", "setNodeTitle", "NOT_QUERY", "prev", "abortAllRequests", "Selection", "Service unavailable (503)", " < ", "Generating", "223620QQCGFF", "_requestHandlerAbortControllers", "asyncIterator", "requestHandlers", "_def", "timeoutId", "No edge defined from ", "getClientVersion", "comfy", "init: i18next is already initialized. You should call init just once!", "])) { ", ") { var op", "fallbackLng", "sdppp_widgetable_title", "validateHandlerType", "closeHandlers", " = false;for (var ", "negative", "#/definitions/nonNegativeInteger", "getNodeIds", "ZodMap", "logging/setLevel", "actionManager", "Enter your Replicate API Key", "timeout", "fewer", "comfy side transport.onerror", "errorsText", "setRequestHandler", "context", "less than", "outgoingRequestInterceptors", "obj", "yud", "请选择要发送图像的位置", " = true; if (", "_any", "Send all", "app", "separator", "invalid_type", "symbol", " delete ", "_getCached", "AbortSignal is already aborted", "addNamespaces", "appendNamespaceToMissingKey", "IPV6ADDRESS", "Close", "reloadResources", "Limit image size", "defineProperty", "invalid-input", "abort", "language", "Internal ZodObject error: invalid unknownKeys value.", "图像质量 (%)", "openWorkflow: ", "Merge group failed", "loadLanguages", "filename", "ayh", "#FFCC00", ") { if (vErrors === null) vErrors = ", "_compile", "Running", " in ", "Select Source", " = vErrors[", "Action {{0}} 未找到", "validation", "checkDataType", "ZodNullable", "params", "onclose", "addMessageEventListener", "isIP", "插件可能正在拦截 PS 快捷键... ", "cidr", "regex", "avl", "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ", "callValidate", "ZodIntersection", "_addCheck", "safe", " &&   Object.prototype.hasOwnProperty.call(", "handleAsObject", " != 'number') { ", "currentNodeId", "createWithPreprocess", " console.log(", "isDuration", ") > 1e-", "InvalidRequest", "initialState", "result", " }   ", "请输入您的 Google API Key", "contextualErrorMap", "Edge references unknown source node: ", "NOT_SCHEME", "issues", " , params: { allowedValue: schema", "ZodObject", "observers", "(.+?)", "arq", "'[\\'' + ", "]] !== undefined ", "2.0", "exclusiveMinimum", "onprogress", " , message: 'should NOT have ", "Cannot access data ", "initAsync", "oneOf", "rootData", "[\\:\\/\\?\\#\\[\\]\\@]", "Cloud:", "values", "notifications/cancelled", "显示预览框 ({{count}}张图片)", "Get layer info", "implements", "ZodError", "base64url", "PS图片", "sdpppX2", "message", "requestInfo", "点我恢复", " === 0 || ", "regexpUnescape", "请输入您的Replicate API Key", "capacity", "setInterval", "prd", "Cancel", "pluralSeparator", "&filename=", "queueLoad", "http://json-schema.org/schema", "maxParallelReads", "Server does not support notifying about resources (required for ", "count", "pctDecChars", "Invalid name: {{0}}", "[0-9]", "dependencies", "uxp", "charCodeAt", "coerced", "alwaysSet", "Received a progress notification for an unknown token: ", "正向裁剪(Outpaint)", "sourceType", "lastIndexOf", "unsetRequestHandler", " = '' + ", "toASCII", "heartbeatTimeoutTimer", "__connection_established", "label", "_parse", "process", "prevValid", "invalid_enum_value", "less than or equal to", "multipleOfPrecision", "#CC0099", "getSuffix", "days", "add", "#CC9900", "#3366FF", "getKeyword", "621807zfxtne", "getSuffixes", "Invalid action: {{action}}", "post", "output", "disconnect", "sdppp/broadcast", "success", "isCUID2", " == null) ", 'custom keyword "', "[j])) { ", "missingRefs", "&subfolder=", "text", " if ( ", "namespaces", "request", " !== undefined) { ", "unknownFormats", "responseSchema", "ComfyUI loading...", "dataPathArr", "messageHandlers", "Entire Canvas", "_key", "finished", "#FF0066", "get", "getUsedParamsDetails", "Failed to create document from file", "_responseHandlers", "生成中", "tolerant", ") {  for (var ", "#3300CC", "findPathInternal", "onerror", "definition", "registerDirectRequestHandlerGeneric", "comfy-uxp", "{0,3}", "hasLoadedNamespace", " == errors) { ", " === null) ", " }  ", "root.refVal[0]", " , params: { property: '", "received", "curlayer", " , message: 'boolean schema is false' ", "createTemporary", ") == -1 ", "store", "dir", "; if (!", "toJSON", "out", "~standard", "keywordValidate", "query", "required", "overwrite", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "cleanupConnection", "getData", "Upload failed, please try again", "输入设置", "setLimit", "interpolate", "title", " } }  ", "exclusiveMaximum", "[^]", "[A-Za-z0-9\\-\\.\\_\\~", "#0099FF", "schema should be object or boolean", "Layer {{0}} is not a group", "contentMediaType", "i18nFormat", "toHash", "lng", "zod", "Model", "_onresponse", "color", "调整预览文档尺寸", "cmp", "invalid_literal", "var default", "No errors", "上传失败，请重试", "finite", "移除槽位", "addFormat", "added", " ( ( ", "setResolvedLanguage", "Output to", "[0-5]\\d", "Invalid discriminator value. Expected ", "PS shortcuts may be blocked by plugin...", "Invalid attempt to destructure non-iterable instance", "items", "提示词", "map", " , message: 'should match some schema in anyOf' ", "initializeConsumer", "cleanCode", "channel", "   ", " else if (", "valueSchema", " || Object.keys(", "protocolVersion", "Tutorial", "获取图层 {{0}} 的内容", "languageChanged", "#CC6633", "\\.\\d{", "stringify", "reduce", " element(s)", " = true; ", "访客登录成功", "Create document", "sdppp 选中图层", "ordinal", "removeNotificationHandler", "{0,2}", " not found on node ", " break; ", "names", " should be boolean' ", "_onerror", "hasLanguageSomeTranslations", "formatLanguageCode", " = [", "sam", "resources/templates/list", "Auto send disabled", "nodeStores", ".validate; } if (  ", "Workflow not found", "ignoreJSONStructure", "max", `获取图像 &
限制图像范围`, " = true; else if (typeof ", "[vV]", "additionalProperties", "getNeighbors", "Negative Crop", "usedKey", "expected", "preprocess", "; else if (", "disconnected", "#3300FF", "#/definitions/stringArray", "statusText", "nonstrict", "substring", "translator", "#33CCFF", "hour", "allErrors", "云端推荐：", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "http://json-schema.org/draft-07/schema#", "设为当前图层", "=== Options ===", " {} ", "停止并取消全部", "sendStreamRequestorRequest", "missingKeyHandler", " % 1)", "prompts/get", "Full Canvas", "connecting", "WebkitAppearance", "returnEmptyString", "abv", "++) { var ", "A discriminator value for key `", "执行失败", "more than", "isInt", "Received host version from UXP:", "callback", "extensionManager", "新建文档", "5340348ULRxuu", " , params: { limit: ", "Error validating elicitation response: ", ".length; ", "App ID:", "properties ", "Smart Object Layer", "varReplace", "sort", "path", "false schema", "maxItems", "Desire bounds is null", "_onprogress", "]); ", "originalError", "notificationQueue", "Click to use current selection", "currency", "快捷键选图功能仅在插件窗口聚焦时可用", "[UnexpectedJSONParseError]: ", "keyType", "Keyword ", " = true , j; if (i > 1) { ", "当前选项：图层", "396740FWjtDr", "notifications/message", "Hold Shift key to import as new document", " for interpolating ", "forkResourceStore", "ZodUnknown", "没有链接图层: {{0}}", "invalid_arguments", "_path", "Selection mask", "SCHEMES", "发送所有", "_resetTimeout", "#CCCC33", "pipe", "loopRequired", "./api/manager/reboot", 'schema with key or id "', "mergeObjectSync"];
  return Fx = function() {
    return i;
  }, Fx();
}
function z2() {
  const i = r;
  if (aa) return Qx[i(1005)];
  aa = 1;
  var x = Qx.exports = function(e, s, n) {
    const o = i;
    typeof s == o(1538) && (n = s, s = {}), n = s.cb || n;
    var c = typeof n == o(1538) ? n : n.pre || function() {
    }, u = n[o(2286)] || function() {
    };
    t(s, c, u, e, "", e);
  };
  x[i(2069)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[i(1326)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[i(1082)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[i(390)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, s, n, o, c, u, d, f, l, g) {
    const h = i;
    if (o && typeof o == h(1791) && !Array.isArray(o)) {
      s(o, c, u, d, f, l, g);
      for (var m in o) {
        var y = o[m];
        if (Array[h(1396)](y)) {
          if (m in x[h(1326)])
            for (var S = 0; S < y[h(520)]; S++) t(e, s, n, y[S], c + "/" + m + "/" + S, u, c, m, o, S);
        } else if (m in x[h(1082)]) {
          if (y && typeof y == "object")
            for (var E in y) t(e, s, n, y[E], c + "/" + m + "/" + a(E), u, c, m, o, E);
        } else (m in x[h(2069)] || e[h(1979)] && !(m in x.skipKeywords)) && t(e, s, n, y, c + "/" + m, u, c, m, o);
      }
      n(o, c, u, d, f, l, g);
    }
  }
  function a(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Qx[i(1005)];
}
var Xx, sa;
function or() {
  const i = r;
  if (sa) return Xx;
  sa = 1;
  var x = L2(), t = ir(), a = Ze(), e = un(), s = z2();
  Xx = n, n[i(162)] = E, n[i(1946)] = m, n[i(1783)] = O, n[i(1151)] = q, n[i(1405)] = l, n[i(1548)] = o;
  function n(I, P, T) {
    const D = i;
    var j = this[D(1153)][T];
    if (typeof j == D(718))
      if (this[D(1153)][j]) j = this[D(1153)][j];
      else return n[D(422)](this, I, P, j);
    if (j = j || this._schemas[T], j instanceof e) return l(j[D(1548)], this[D(1127)][D(1374)]) ? j.schema : j[D(1485)] || this[D(2170)](j);
    var M = o[D(422)](this, P, T), F, C, U;
    return M && (F = M[D(1548)], P = M.root, U = M[D(2011)]), F instanceof e ? C = F[D(1485)] || I[D(422)](this, F[D(1548)], P, void 0, U) : F !== void 0 && (C = l(F, this[D(1127)][D(1374)]) ? F : I[D(422)](this, F, P, void 0, U)), C;
  }
  function o(I, P) {
    const T = i;
    var D = x[T(686)](P), j = y(D), M = m(this._getId(I[T(1548)]));
    if (Object[T(1574)](I[T(1548)])[T(520)] === 0 || j !== M) {
      var F = E(j), C = this._refs[F];
      if (typeof C == T(718)) return c.call(this, I, C, D);
      if (C instanceof e)
        C[T(1485)] || this[T(2170)](C), I = C;
      else if (C = this[T(436)][F], C instanceof e) {
        if (C[T(1485)] || this[T(2170)](C), F == E(P)) return { schema: C, root: I, baseId: M };
        I = C;
      } else return;
      if (!I.schema) return;
      M = m(this[T(1321)](I.schema));
    }
    return d[T(422)](this, D, M, I[T(1548)], I);
  }
  function c(I, P, T) {
    const D = i;
    var j = o[D(422)](this, I, P);
    if (j) {
      var M = j.schema, F = j[D(2011)];
      I = j[D(1512)];
      var C = this._getId(M);
      return C && (F = O(F, C)), d[D(422)](this, T, F, M, I);
    }
  }
  var u = a[i(2363)]([i(402), "patternProperties", i(1497), i(2255), i(1383)]);
  function d(I, P, T, D) {
    const j = i;
    if (I[j(1494)] = I[j(1494)] || "", I.fragment[j(1597)](0, 1) == "/") {
      for (var M = I[j(1494)][j(2068)]("/"), F = 1; F < M[j(520)]; F++) {
        var C = M[F];
        if (C) {
          if (C = a[j(435)](C), T = T[C], T === void 0) break;
          var U;
          if (!u[C] && (U = this[j(1321)](T), U && (P = O(P, U)), T.$ref)) {
            var H = O(P, T[j(1646)]), V = o[j(422)](this, D, H);
            V && (T = V[j(1548)], D = V[j(1512)], P = V[j(2011)]);
          }
        }
      }
      if (T !== void 0 && T !== D[j(1548)]) return { schema: T, root: D, baseId: P };
    }
  }
  var f = a[i(2363)](["type", i(1089), i(1709), "maxLength", "minLength", i(179), "minProperties", i(2485), i(234), i(2061), "minimum", "uniqueItems", i(2019), "required", i(1497)]);
  function l(I, P) {
    if (P === !1) return !1;
    if (P === void 0 || P === !0) return g(I);
    if (P) return h(I) <= P;
  }
  function g(I) {
    const P = i;
    var T;
    if (Array[P(1396)](I)) {
      for (var D = 0; D < I[P(520)]; D++)
        if (T = I[D], typeof T == "object" && !g(T)) return !1;
    } else for (var j in I)
      if (j == P(1646) || (T = I[j], typeof T == P(1791) && !g(T))) return !1;
    return !0;
  }
  function h(I) {
    const P = i;
    var T = 0, D;
    if (Array[P(1396)](I)) {
      for (var j = 0; j < I[P(520)]; j++)
        if (D = I[j], typeof D == "object" && (T += h(D)), T == 1 / 0) return 1 / 0;
    } else for (var M in I) {
      if (M == P(1646)) return 1 / 0;
      if (f[M]) T++;
      else if (D = I[M], typeof D == "object" && (T += h(D) + 1), T == 1 / 0) return 1 / 0;
    }
    return T;
  }
  function m(I, P) {
    const T = i;
    P !== !1 && (I = E(I));
    var D = x[T(686)](I);
    return y(D);
  }
  function y(I) {
    const P = i;
    return x.serialize(I)[P(2068)]("#")[0] + "#";
  }
  var S = /#\/?$/;
  function E(I) {
    return I ? I[i(1927)](S, "") : "";
  }
  function O(I, P) {
    const T = i;
    return P = E(P), x[T(772)](I, P);
  }
  function q(I) {
    const P = i;
    var T = E(this[P(1321)](I)), D = { "": T }, j = { "": m(T, !1) }, M = {}, F = this;
    return s(I, { allKeys: !0 }, function(C, U, H, V, Q, c0, u0) {
      const s0 = P;
      if (U !== "") {
        var n0 = F[s0(1321)](C), m0 = D[V], w0 = j[V] + "/" + Q;
        if (u0 !== void 0 && (w0 += "/" + (typeof u0 == s0(191) ? u0 : a[s0(120)](u0))), typeof n0 == s0(718)) {
          n0 = m0 = E(m0 ? x.resolve(m0, n0) : n0);
          var b0 = F[s0(1153)][n0];
          if (typeof b0 == s0(718) && (b0 = F[s0(1153)][b0]), b0 && b0[s0(1548)]) {
            if (!t(C, b0[s0(1548)])) throw new Error('id "' + n0 + s0(131));
          } else if (n0 != E(w0))
            if (n0[0] == "#") {
              if (M[n0] && !t(C, M[n0])) throw new Error('id "' + n0 + s0(131));
              M[n0] = C;
            } else F[s0(1153)][n0] = w0;
        }
        D[U] = m0, j[U] = w0;
      }
    }), M;
  }
  return Xx;
}
var Yx, na;
function cr() {
  const i = r;
  if (na) return Yx;
  na = 1;
  var x = or();
  Yx = { Validation: e(t), MissingRef: e(a) };
  function t(s) {
    const n = B;
    this[n(2235)] = n(2088), this.errors = s, this[n(921)] = this[n(2176)] = !0;
  }
  a[i(2235)] = function(s, n) {
    return i(231) + n + " from id " + s;
  };
  function a(s, n, o) {
    const c = i;
    this.message = o || a[c(2235)](s, n), this[c(2583)] = x[c(1783)](s, n), this[c(460)] = x.normalizeId(x.fullPath(this[c(2583)]));
  }
  function e(s) {
    const n = i;
    return s[n(672)] = Object.create(Error.prototype), s[n(672)][n(319)] = s, s;
  }
  return Yx;
}
var _x, ia;
function dn() {
  return ia || (ia = 1, _x = function(i, x) {
    const t = B;
    x || (x = {}), typeof x == "function" && (x = { cmp: x });
    var a = typeof x[t(385)] === t(1488) ? x.cycles : !1, e = x.cmp && /* @__PURE__ */ function(n) {
      return function(o) {
        return function(c, u) {
          var d = { key: c, value: o[c] }, f = { key: u, value: o[u] };
          return n(d, f);
        };
      };
    }(x[t(2370)]), s = [];
    return function n(o) {
      const c = t;
      if (o && o.toJSON && typeof o[c(2339)] === c(1538) && (o = o[c(2339)]()), o !== void 0) {
        if (typeof o == "number") return isFinite(o) ? "" + o : c(1237);
        if (typeof o !== c(1791)) return JSON[c(2403)](o);
        var u, d;
        if (Array[c(1396)](o)) {
          for (d = "[", u = 0; u < o[c(520)]; u++)
            u && (d += ","), d += n(o[u]) || c(1237);
          return d + "]";
        }
        if (o === null) return "null";
        if (s[c(417)](o) !== -1) {
          if (a) return JSON[c(2403)]("__cycle__");
          throw new TypeError(c(1852));
        }
        var f = s[c(1131)](o) - 1, l = Object[c(1574)](o)[c(2482)](e && e(o));
        for (d = "", u = 0; u < l.length; u++) {
          var g = l[u], h = n(o[g]);
          h && (d && (d += ","), d += JSON.stringify(g) + ":" + h);
        }
        return s.splice(f, 1), "{" + d + "}";
      }
    }(i);
  }), _x;
}
var et, oa;
function B(i, x) {
  const t = Fx();
  return B = function(a, e) {
    return a = a - 108, t[a];
  }, B(i, x);
}
function fn() {
  return oa || (oa = 1, et = function(x, t, a) {
    const e = B;
    var s = "", n = x[e(1548)][e(171)] === !0, o = x[e(644)].schemaHasRulesExcept(x[e(1548)], x[e(1348)][e(1068)], "$ref"), c = x[e(2006)]._getId(x[e(1548)]);
    if (x[e(1364)][e(551)]) {
      var u = x.util[e(1639)](x[e(1548)], x.RULES[e(2069)]);
      if (u) {
        var d = e(695) + u;
        if (x[e(1364)].strictKeywords === e(811)) x.logger[e(183)](d);
        else throw new Error(d);
      }
    }
    if (x[e(958)] && (s += e(2537), n && (x[e(2591)] = !0, s += "async "), s += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", c && (x[e(1364)][e(856)] || x[e(1364)][e(922)]) && (s += " " + (e(2598) + c + " */") + " ")), typeof x[e(1548)] == e(1488) || !(o || x[e(1548)][e(1646)])) {
      var t = e(2484), f = x[e(689)], l = x[e(1028)], g = x[e(1548)][t], h = x[e(1640)] + x[e(644)][e(1569)](t), m = x[e(459)] + "/" + t, P = !x[e(1364)][e(2448)], j, y = e(1021) + (l || ""), I = e(481) + f;
      if (x[e(1548)] === !1) {
        x[e(958)] ? P = !0 : s += e(2570) + I + " = false; ";
        var S = S || [];
        S.push(s), s = "", x.createErrors !== !1 ? (s += e(762) + (j || e(2484)) + e(1232) + x[e(1484)] + " , schemaPath: " + x[e(644)].toQuotedString(m) + e(1432), x[e(1364)][e(1018)] !== !1 && (s += e(2333)), x[e(1364)][e(2530)] && (s += e(1308) + x[e(1640)] + e(539) + y + " "), s += e(701)) : s += e(2454);
        var E = s;
        s = S.pop(), !x[e(1391)] && P ? x[e(2591)] ? s += e(2607) + E + e(2488) : s += " validate.errors = [" + E + "]; return false; " : s += e(1542) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else x.isTop ? n ? s += " return data; " : s += e(1340) : s += " var " + I + e(2406);
      return x[e(958)] && (s += e(317)), s;
    }
    if (x[e(958)]) {
      var O = x[e(958)], f = x[e(689)] = 0, l = x[e(1028)] = 0, y = e(1021);
      if (x.rootId = x[e(772)][e(1946)](x[e(2006)][e(1321)](x[e(1512)][e(1548)])), x[e(2011)] = x[e(2011)] || x.rootId, delete x[e(958)], x[e(2305)] = [""], x[e(1548)][e(1535)] !== void 0 && x.opts[e(193)] && x[e(1364)].strictDefaults) {
        var q = e(210);
        if (x.opts[e(295)] === e(811)) x[e(891)][e(183)](q);
        else throw new Error(q);
      }
      s += " var vErrors = null; ", s += " var errors = 0;     ", s += e(1651);
    } else {
      var f = x.level, l = x[e(1028)], y = e(1021) + (l || "");
      if (c && (x[e(2011)] = x[e(772)][e(1783)](x.baseId, c)), n && !x.async) throw new Error(e(1617));
      s += e(261) + f + e(2580);
    }
    var I = e(481) + f, P = !x.opts[e(2448)], T = "", D = "", j, M = x.schema[e(2043)], F = Array[e(1396)](M);
    if (M && x[e(1364)][e(1859)] && x[e(1548)][e(1859)] === !0 && (F ? M.indexOf("null") == -1 && (M = M.concat("null")) : M != e(1237) && (M = [M, "null"], F = !0)), F && M[e(520)] == 1 && (M = M[0], F = !1), x[e(1548)][e(1646)] && o) {
      if (x.opts.extendRefs == e(1683)) throw new Error('$ref: validation keywords used in schema at path "' + x.errSchemaPath + '" (see option extendRefs)');
      x[e(1364)][e(1069)] !== !0 && (o = !1, x[e(891)][e(183)](e(2541) + x[e(459)] + '"'));
    }
    if (x[e(1548)][e(885)] && x.opts[e(885)] && (s += " " + x[e(1348)][e(1068)][e(885)][e(1277)](x, e(885))), M) {
      if (x[e(1364)][e(1536)]) var C = x[e(644)][e(232)](x.opts.coerceTypes, M);
      var U = x[e(1348)][e(876)][M];
      if (C || F || U === !0 || U && !A0(U)) {
        var h = x.schemaPath + e(2553), m = x[e(459)] + e(366), h = x[e(1640)] + e(2553), m = x.errSchemaPath + e(366), H = e(F ? 720 : 2177);
        if (s += " if (" + x[e(644)][H](M, y, x[e(1364)].strictNumbers, !0) + e(1381), C) {
          var V = e(608) + f, Q = e(2258) + f;
          s += e(2570) + V + e(474) + y + e(1813) + Q + " = undefined; ", x.opts[e(1536)] == e(1912) && (s += e(1762) + V + " == 'object' && Array.isArray(" + y + ") && " + y + e(1456) + y + " = " + y + e(1313) + V + e(474) + y + e(2053) + x[e(644)][e(2177)](x[e(1548)].type, y, x[e(1364)].strictNumbers) + ") " + Q + e(1572) + y + e(576)), s += e(1762) + Q + e(897);
          var c0 = C;
          if (c0)
            for (var u0, s0 = -1, n0 = c0[e(520)] - 1; s0 < n0; )
              u0 = c0[s0 += 1], u0 == e(718) ? s += e(2394) + V + " == 'number' || " + V + e(150) + Q + e(2265) + y + e(2438) + y + e(2327) + Q + e(121) : u0 == e(191) || u0 == e(1395) ? (s += e(2394) + V + e(1500) + y + e(1016) + V + e(1516) + y + e(2005) + y + e(1071) + y + " ", u0 == "integer" && (s += e(2627) + y + e(2458)), s += e(782) + Q + e(160) + y + "; ") : u0 == "boolean" ? s += e(2394) + y + " === 'false' || " + y + e(2238) + y + e(2327) + Q + e(974) + y + e(1316) + y + e(1031) + Q + e(2406) : u0 == "null" ? s += e(2394) + y + e(1463) + y + e(2238) + y + e(522) + Q + e(1075) : x.opts[e(1536)] == "array" && u0 == e(1912) && (s += " else if (" + V + e(1581) + V + " == 'number' || " + V + e(1500) + y + e(2292) + Q + e(2420) + y + e(1298));
          s += e(1686);
          var S = S || [];
          S[e(1131)](s), s = "", x[e(1987)] !== !1 ? (s += e(762) + (j || "type") + e(1232) + x.errorPath + e(2535) + x[e(644)][e(1668)](m) + e(556), F ? s += "" + M[e(1804)](",") : s += "" + M, s += e(645), x[e(1364)][e(1018)] !== !1 && (s += " , message: 'should be ", F ? s += "" + M[e(1804)](",") : s += "" + M, s += "' "), x[e(1364)][e(2530)] && (s += e(944) + h + e(1447) + x.schemaPath + " , data: " + y + " "), s += e(701)) : s += e(2454);
          var E = s;
          s = S[e(1533)](), !x[e(1391)] && P ? x[e(2591)] ? s += e(2607) + E + e(2488) : s += e(673) + E + "]; return false; " : s += e(1542) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(648) + Q + e(1443);
          var m0 = l ? "data" + (l - 1 || "") : e(2012), w0 = l ? x[e(2305)][l] : "parentDataProperty";
          s += " " + y + " = " + Q + "; ", !l && (s += e(1258) + m0 + e(752)), s += " " + m0 + "[" + w0 + e(2619) + Q + e(576);
        } else {
          var S = S || [];
          S[e(1131)](s), s = "", x.createErrors !== !1 ? (s += e(762) + (j || "type") + e(1232) + x[e(1484)] + e(2535) + x[e(644)][e(1668)](m) + e(556), F ? s += "" + M[e(1804)](",") : s += "" + M, s += e(645), x[e(1364)][e(1018)] !== !1 && (s += " , message: 'should be ", F ? s += "" + M.join(",") : s += "" + M, s += "' "), x[e(1364)][e(2530)] && (s += e(944) + h + e(1447) + x[e(1640)] + e(539) + y + " "), s += " } ") : s += " {} ";
          var E = s;
          s = S[e(1533)](), !x[e(1391)] && P ? x.async ? s += e(2607) + E + e(2488) : s += e(673) + E + e(388) : s += e(1542) + E + e(1638);
        }
        s += e(701);
      }
    }
    if (x[e(1548)][e(1646)] && !o) s += " " + x[e(1348)][e(1068)][e(1646)][e(1277)](x, e(1646)) + " ", P && (s += e(1823), O ? s += "0" : s += e(1048) + f, s += e(1381), D += "}");
    else {
      var b0 = x.RULES;
      if (b0) {
        for (var U, D0 = -1, R0 = b0[e(520)] - 1; D0 < R0; )
          if (U = b0[D0 += 1], A0(U)) {
            if (U[e(2043)] && (s += e(1762) + x.util[e(2177)](U[e(2043)], y, x[e(1364)][e(1856)]) + e(1381)), x.opts.useDefaults) {
              if (U[e(2043)] == "object" && x[e(1548)][e(402)]) {
                var g = x.schema.properties, Q0 = Object[e(1574)](g), A = Q0;
                if (A)
                  for (var N, L = -1, Y = A.length - 1; L < Y; ) {
                    N = A[L += 1];
                    var W = g[N];
                    if (W[e(1535)] !== void 0) {
                      var Z = y + x.util[e(1569)](N);
                      if (x[e(1391)]) {
                        if (x[e(1364)][e(295)]) {
                          var q = "default is ignored for: " + Z;
                          if (x[e(1364)][e(295)] === e(811)) x.logger[e(183)](q);
                          else throw new Error(q);
                        }
                      } else s += e(1762) + Z + e(432), x[e(1364)].useDefaults == e(1002) && (s += e(2616) + Z + " === null || " + Z + " === '' "), s += e(1815) + Z + e(1572), x[e(1364)][e(193)] == e(136) ? s += " " + x[e(1148)](W[e(1535)]) + " " : s += " " + JSON[e(2403)](W[e(1535)]) + " ", s += "; ";
                    }
                  }
              } else if (U[e(2043)] == e(1912) && Array.isArray(x.schema.items)) {
                var i0 = x.schema.items;
                if (i0) {
                  for (var W, s0 = -1, o0 = i0[e(520)] - 1; s0 < o0; )
                    if (W = i0[s0 += 1], W[e(1535)] !== void 0) {
                      var Z = y + "[" + s0 + "]";
                      if (x.compositeRule) {
                        if (x[e(1364)][e(295)]) {
                          var q = "default is ignored for: " + Z;
                          if (x.opts[e(295)] === e(811)) x[e(891)][e(183)](q);
                          else throw new Error(q);
                        }
                      } else s += e(1762) + Z + e(432), x.opts[e(193)] == e(1002) && (s += e(2616) + Z + e(1169) + Z + " === '' "), s += e(1815) + Z + " = ", x.opts[e(193)] == e(136) ? s += " " + x[e(1148)](W[e(1535)]) + " " : s += " " + JSON[e(2403)](W[e(1535)]) + " ", s += "; ";
                    }
                }
              }
            }
            var G = U[e(1901)];
            if (G) {
              for (var M0, L0 = -1, T0 = G[e(520)] - 1; L0 < T0; )
                if (M0 = G[L0 += 1], xe(M0)) {
                  var q0 = M0[e(1277)](x, M0[e(832)], U.type);
                  q0 && (s += " " + q0 + " ", P && (T += "}"));
                }
            }
            if (P && (s += " " + T + " ", T = ""), U.type && (s += e(701), M && M === U[e(2043)] && !C)) {
              s += e(1173);
              var h = x[e(1640)] + e(2553), m = x[e(459)] + e(366), S = S || [];
              S[e(1131)](s), s = "", x.createErrors !== !1 ? (s += e(762) + (j || e(2043)) + "' , dataPath: (dataPath || '') + " + x.errorPath + " , schemaPath: " + x[e(644)].toQuotedString(m) + " , params: { type: '", F ? s += "" + M[e(1804)](",") : s += "" + M, s += e(645), x[e(1364)].messages !== !1 && (s += e(1788), F ? s += "" + M[e(1804)](",") : s += "" + M, s += "' "), x.opts[e(2530)] && (s += e(944) + h + " , parentSchema: validate.schema" + x[e(1640)] + " , data: " + y + " "), s += e(701)) : s += e(2454);
              var E = s;
              s = S[e(1533)](), !x[e(1391)] && P ? x[e(2591)] ? s += " throw new ValidationError([" + E + "]); " : s += e(673) + E + "]; return false; " : s += e(1542) + E + e(1638), s += e(701);
            }
            P && (s += e(1767), O ? s += "0" : s += "errs_" + f, s += e(1381), D += "}");
          }
      }
    }
    P && (s += " " + D + " "), O ? (n ? (s += e(880), s += " else throw new ValidationError(vErrors); ") : (s += " validate.errors = vErrors; ", s += e(372)), s += e(1027)) : s += e(2570) + I + e(693) + f + ";";
    function A0($0) {
      const W0 = e;
      for (var V0 = $0[W0(1901)], Y0 = 0; Y0 < V0[W0(520)]; Y0++) if (xe(V0[Y0])) return !0;
    }
    function xe($0) {
      const W0 = e;
      return x[W0(1548)][$0[W0(832)]] !== void 0 || $0.implements && me($0);
    }
    function me($0) {
      const W0 = e;
      for (var V0 = $0[W0(2230)], Y0 = 0; Y0 < V0[W0(520)]; Y0++) if (x.schema[V0[Y0]] !== void 0) return !0;
    }
    return s;
  }), et;
}
var xt, ca;
function H2() {
  if (ca) return xt;
  ca = 1;
  var i = or(), x = Ze(), t = cr(), a = dn(), e = fn(), s = x.ucs2length, n = ir(), o = t.Validation;
  xt = c;
  function c(S, E, O, q) {
    const I = B;
    var P = this, T = this[I(1127)], D = [void 0], j = {}, M = [], F = {}, C = [], U = {}, H = [];
    E = E || { schema: S, refVal: D, refs: j };
    var V = u[I(422)](this, S, E, q), Q = this._compilations[V.index];
    if (V[I(1790)]) return Q.callValidate = m0;
    var c0 = this[I(368)], u0 = this[I(1348)];
    try {
      var s0 = w0(S, E, O, q);
      Q[I(1485)] = s0;
      var n0 = Q[I(2188)];
      return n0 && (n0.schema = s0.schema, n0[I(502)] = null, n0[I(1571)] = s0[I(1571)], n0[I(1507)] = s0.refVal, n0[I(1512)] = s0[I(1512)], n0[I(171)] = s0[I(171)], T[I(856)] && (n0[I(824)] = s0[I(824)])), s0;
    } finally {
      d[I(422)](this, S, E, q);
    }
    function m0() {
      const W = I;
      var Z = Q[W(1485)], i0 = Z[W(560)](this, arguments);
      return m0[W(502)] = Z[W(502)], i0;
    }
    function w0(W, Z, i0, o0) {
      const G = I;
      var M0 = !Z || Z && Z[G(1548)] == W;
      if (Z[G(1548)] != E[G(1548)]) return c[G(422)](P, W, Z, i0, o0);
      var L0 = W.$async === !0, T0 = e({ isTop: !0, schema: W, isRoot: M0, baseId: o0, root: Z, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: t[G(281)], RULES: u0, validate: e, util: x, resolve: i, resolveRef: b0, usePattern: N, useDefault: L, useCustomRule: Y, opts: T, formats: c0, logger: P.logger, self: P });
      T0 = y(D, h) + y(M, l) + y(C, g) + y(H, m) + T0, T[G(922)] && (T0 = T[G(922)](T0, W));
      var q0;
      try {
        var A0 = new Function(G(2006), G(1348), G(2071), G(1512), G(1507), G(2526), G(2542), "equal", "ucs2length", G(1558), T0);
        q0 = A0(P, u0, c0, E, D, C, H, n, s, o), D[0] = q0;
      } catch (xe) {
        throw P[G(891)][G(259)](G(2592), T0), xe;
      }
      return q0[G(1548)] = W, q0[G(502)] = null, q0[G(1571)] = j, q0[G(1507)] = D, q0[G(1512)] = M0 ? q0 : Z, L0 && (q0[G(171)] = !0), T.sourceCode === !0 && (q0[G(824)] = { code: T0, patterns: M, defaults: C }), q0;
    }
    function b0(W, Z, i0) {
      const o0 = I;
      Z = i[o0(1783)](W, Z);
      var G = j[Z], M0, L0;
      if (G !== void 0) return M0 = D[G], L0 = o0(705) + G + "]", A(M0, L0);
      if (!i0 && E.refs) {
        var T0 = E[o0(1571)][Z];
        if (T0 !== void 0) return M0 = E[o0(1507)][T0], L0 = D0(Z, M0), A(M0, L0);
      }
      L0 = D0(Z);
      var q0 = i[o0(422)](P, w0, E, Z);
      if (q0 === void 0) {
        var A0 = O && O[Z];
        A0 && (q0 = i[o0(1405)](A0, T[o0(1374)]) ? A0 : c[o0(422)](P, A0, E, O, W));
      }
      if (q0 === void 0) R0(Z);
      else return Q0(Z, q0), A(q0, L0);
    }
    function D0(W, Z) {
      const i0 = I;
      var o0 = D[i0(520)];
      return D[o0] = Z, j[W] = o0, i0(1507) + o0;
    }
    function R0(W) {
      delete j[W];
    }
    function Q0(W, Z) {
      var i0 = j[W];
      D[i0] = Z;
    }
    function A(W, Z) {
      const i0 = I;
      return typeof W == i0(1791) || typeof W == i0(1488) ? { code: Z, schema: W, inline: !0 } : { code: Z, $async: W && !!W.$async };
    }
    function N(W) {
      const Z = I;
      var i0 = F[W];
      return i0 === void 0 && (i0 = F[W] = M[Z(520)], M[i0] = W), Z(1709) + i0;
    }
    function L(W) {
      const Z = I;
      switch (typeof W) {
        case Z(1488):
        case "number":
          return "" + W;
        case Z(718):
          return x.toQuotedString(W);
        case Z(1791):
          if (W === null) return "null";
          var i0 = a(W), o0 = U[i0];
          return o0 === void 0 && (o0 = U[i0] = C[Z(520)], C[o0] = W), Z(1535) + o0;
      }
    }
    function Y(W, Z, i0, o0) {
      const G = I;
      if (P[G(1127)][G(1742)] !== !1) {
        var M0 = W[G(2321)].dependencies;
        if (M0 && !M0.every(function(V0) {
          const Y0 = G;
          return Object.prototype[Y0(711)][Y0(422)](i0, V0);
        })) throw new Error("parent schema must have all required keywords: " + M0.join(","));
        var L0 = W[G(2321)][G(1742)];
        if (L0) {
          var T0 = L0(Z);
          if (!T0) {
            var q0 = "keyword schema is invalid: " + P[G(2133)](L0[G(502)]);
            if (P[G(1127)][G(1742)] == "log") P[G(891)][G(259)](q0);
            else throw new Error(q0);
          }
        }
      }
      var A0 = W[G(2321)][G(547)], xe = W[G(2321)][G(1834)], me = W[G(2321)][G(584)], $0;
      if (A0) $0 = A0[G(422)](P, Z, i0, o0);
      else if (me)
        $0 = me.call(P, Z, i0, o0), T.validateSchema !== !1 && P.validateSchema($0, !0);
      else if (xe) $0 = xe[G(422)](P, o0, W[G(832)], Z, i0);
      else if ($0 = W.definition.validate, !$0) return;
      if ($0 === void 0) throw new Error(G(2293) + W[G(832)] + G(1520));
      var W0 = H[G(520)];
      return H[W0] = $0, { code: G(1850) + W0, validate: $0 };
    }
  }
  function u(S, E, O) {
    const q = B;
    var I = f[q(422)](this, S, E, O);
    return I >= 0 ? { index: I, compiling: !0 } : (I = this[q(423)][q(520)], this[q(423)][I] = { schema: S, root: E, baseId: O }, { index: I, compiling: !1 });
  }
  function d(S, E, O) {
    const q = B;
    var I = f[q(422)](this, S, E, O);
    I >= 0 && this[q(423)].splice(I, 1);
  }
  function f(S, E, O) {
    const q = B;
    for (var I = 0; I < this[q(423)][q(520)]; I++) {
      var P = this._compilations[I];
      if (P.schema == S && P[q(1512)] == E && P[q(2011)] == O) return I;
    }
    return -1;
  }
  function l(S, E) {
    return B(1001) + S + " = new RegExp(" + x.toQuotedString(E[S]) + ");";
  }
  function g(S) {
    const E = B;
    return E(2372) + S + E(360) + S + "];";
  }
  function h(S, E) {
    const O = B;
    return E[S] === void 0 ? "" : O(1938) + S + O(1854) + S + "];";
  }
  function m(S) {
    const E = B;
    return E(1468) + S + E(1728) + S + "];";
  }
  function y(S, E) {
    const O = B;
    if (!S[O(520)]) return "";
    for (var q = "", I = 0; I < S[O(520)]; I++) q += E(I, S);
    return q;
  }
  return xt;
}
var tt = { exports: {} }, ua;
function U2() {
  const i = r;
  if (ua) return tt[i(1005)];
  ua = 1;
  var x = tt[i(1005)] = function() {
    const a = i;
    this[a(1074)] = {};
  };
  return x[i(672)][i(681)] = function(a, e) {
    this._cache[a] = e;
  }, x[i(672)].get = function(a) {
    return this[i(1074)][a];
  }, x[i(672)][i(1397)] = function(a) {
    const e = i;
    delete this[e(1074)][a];
  }, x[i(672)][i(447)] = function() {
    this._cache = {};
  }, tt.exports;
}
var rt, da;
function V2() {
  const i = r;
  if (da) return rt;
  da = 1;
  var x = Ze(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, s = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, d = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, f = /^(?:\/(?:[^~/]|~0|~1)*)*$/, l = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, g = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  rt = h;
  function h(D) {
    const j = B;
    return D = D == j(230) ? "full" : j(2582), x[j(2601)](h[D]);
  }
  h[i(2582)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: T, uuid: d, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": g }, h[i(230)] = { date: y, time: S, "date-time": O, uri: I, "uri-reference": o, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: T, uuid: d, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": g };
  function m(D) {
    return D % 4 === 0 && (D % 100 !== 0 || D % 400 === 0);
  }
  function y(D) {
    var M = D[i(508)](t);
    if (!M) return !1;
    var F = +M[1], C = +M[2], U = +M[3];
    return C >= 1 && C <= 12 && U >= 1 && U <= (C == 2 && m(F) ? 29 : a[C]);
  }
  function S(D, j) {
    var F = D[i(508)](e);
    if (!F) return !1;
    var C = F[1], U = F[2], H = F[3], V = F[5];
    return (C <= 23 && U <= 59 && H <= 59 || C == 23 && U == 59 && H == 60) && (!j || V);
  }
  var E = /t|\s/i;
  function O(D) {
    const j = i;
    var M = D[j(2068)](E);
    return M[j(520)] == 2 && y(M[0]) && S(M[1], !0);
  }
  var q = /\/|:/;
  function I(D) {
    const j = i;
    return q[j(706)](D) && n[j(706)](D);
  }
  var P = /[^\\]\\Z/;
  function T(D) {
    if (P[i(706)](D)) return !1;
    try {
      return new RegExp(D), !0;
    } catch {
      return !1;
    }
  }
  return rt;
}
var at, fa;
function W2() {
  return fa || (fa = 1, at = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x[e(459)] + "/" + t, d = !x[e(1364)][e(2448)], f = e(1021) + (o || ""), l = e(481) + n, g, h;
    if (c == "#" || c == "#/") x[e(355)] ? (g = x.async, h = e(1485)) : (g = x.root[e(1548)][e(171)] === !0, h = e(2329));
    else {
      var m = x[e(1722)](x[e(2011)], c, x[e(355)]);
      if (m === void 0) {
        var y = x[e(180)].message(x[e(2011)], c);
        if (x.opts[e(2295)] == e(1683)) {
          x[e(891)][e(259)](y);
          var S = S || [];
          S.push(s), s = "", x[e(1987)] !== !1 ? (s += e(762) + e(1646) + e(1232) + x[e(1484)] + e(2535) + x[e(644)][e(1668)](u) + e(1765) + x[e(644)][e(867)](c) + "' } ", x[e(1364)][e(1018)] !== !1 && (s += " , message: 'can\\'t resolve reference " + x[e(644)][e(867)](c) + "' "), x[e(1364)][e(2530)] && (s += e(1303) + x[e(644)].toQuotedString(c) + e(1447) + x.schemaPath + e(539) + f + " "), s += e(701)) : s += " {} ";
          var E = s;
          s = S[e(1533)](), !x[e(1391)] && d ? x[e(2591)] ? s += " throw new ValidationError([" + E + e(2488) : s += e(673) + E + "]; return false; " : s += e(1542) + E + e(1638), d && (s += " if (false) { ");
        } else if (x[e(1364)][e(2295)] == e(724)) x.logger[e(183)](y), d && (s += e(549));
        else throw new x[e(180)](x.baseId, c, y);
      } else if (m.inline) {
        var O = x[e(644)].copy(x);
        O[e(689)]++;
        var q = e(481) + O[e(689)];
        O.schema = m[e(1548)], O[e(1640)] = "", O[e(459)] = c;
        var I = x.validate(O).replace(/validate\.schema/g, m[e(1277)]);
        s += " " + I + " ", d && (s += " if (" + q + ") { ");
      } else g = m[e(171)] === !0 || x[e(2591)] && m[e(171)] !== !1, h = m[e(1277)];
    }
    if (h) {
      var S = S || [];
      S[e(1131)](s), s = "", x.opts[e(833)] ? s += " " + h + e(1981) : s += " " + h + "( ", s += " " + f + ", (dataPath || '')", x[e(1484)] != '""' && (s += e(1782) + x[e(1484)]);
      var P = o ? e(1021) + (o - 1 || "") : e(2012), T = o ? x[e(2305)][o] : e(2089);
      s += e(1968) + P + " , " + T + e(442);
      var D = s;
      if (s = S[e(1533)](), g) {
        if (!x[e(2591)]) throw new Error("async schema referenced by sync schema");
        d && (s += " var " + l + "; "), s += e(1257) + D + "; ", d && (s += " " + l + " = true; "), s += e(1887), d && (s += " " + l + e(428)), s += e(701), d && (s += e(1762) + l + e(1381));
      } else s += e(1067) + D + e(2169) + h + ".errors; else vErrors = vErrors.concat(" + h + ".errors); errors = vErrors.length; } ", d && (s += e(1173));
    }
    return s;
  }), at;
}
var st, la;
function Z2() {
  return la || (la = 1, st = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(1548)][t], o = x[e(1640)] + x[e(644)][e(1569)](t), c = x[e(459)] + "/" + t, u = !x.opts.allErrors, d = x[e(644)][e(2601)](x), f = "";
    d[e(689)]++;
    var l = e(481) + d[e(689)], g = d[e(2011)], h = !0, m = n;
    if (m)
      for (var y, S = -1, E = m.length - 1; S < E; )
        y = m[S += 1], (x[e(1364)].strictKeywords ? typeof y == e(1791) && Object[e(1574)](y)[e(520)] > 0 || y === !1 : x[e(644)][e(704)](y, x[e(1348)][e(1068)])) && (h = !1, d[e(1548)] = y, d[e(1640)] = o + "[" + S + "]", d[e(459)] = c + "/" + S, s += "  " + x[e(1485)](d) + " ", d.baseId = g, u && (s += e(1762) + l + ") { ", f += "}"));
    return u && (h ? s += " if (true) { " : s += " " + f[e(1597)](0, -1) + " "), s;
  }), st;
}
var nt, ha;
function B2() {
  return ha || (ha = 1, nt = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x.schemaPath + x[e(644)].getProperty(t), d = x.errSchemaPath + "/" + t, f = !x[e(1364)][e(2448)], l = e(1021) + (o || ""), g = "valid" + n, h = e(1629) + n, m = x[e(644)][e(2601)](x), y = "";
    m.level++;
    var S = e(481) + m.level, E = c.every(function(j) {
      const M = e;
      return x[M(1364)].strictKeywords ? typeof j == M(1791) && Object[M(1574)](j).length > 0 || j === !1 : x[M(644)][M(704)](j, x[M(1348)][M(1068)]);
    });
    if (E) {
      var O = m.baseId;
      s += e(2570) + h + e(403) + g + e(1279);
      var q = x[e(1391)];
      x[e(1391)] = m.compositeRule = !0;
      var I = c;
      if (I)
        for (var P, T = -1, D = I[e(520)] - 1; T < D; )
          P = I[T += 1], m[e(1548)] = P, m[e(1640)] = u + "[" + T + "]", m[e(459)] = d + "/" + T, s += "  " + x[e(1485)](m) + " ", m.baseId = O, s += " " + g + e(1572) + g + " || " + S + e(2338) + g + ") { ", y += "}";
      x.compositeRule = m.compositeRule = q, s += " " + y + " if (!" + g + ") {   var err =   ", x[e(1987)] !== !1 ? (s += " { keyword: '" + e(341) + e(1232) + x[e(1484)] + e(2535) + x[e(644)].toQuotedString(d) + e(1432), x[e(1364)][e(1018)] !== !1 && (s += e(2389)), x.opts.verbose && (s += e(944) + u + e(1447) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += " {} ", s += e(1638), !x[e(1391)] && f && (x.async ? s += e(1102) : s += e(501)), s += e(840) + h + "; if (vErrors !== null) { if (" + h + e(293) + h + e(209), x[e(1364)][e(2448)] && (s += e(701));
    } else f && (s += e(549));
    return s;
  }), nt;
}
var it, pa;
function K2() {
  return pa || (pa = 1, it = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(1548)][t], o = x[e(459)] + "/" + t;
    x[e(1364)][e(2448)];
    var c = x[e(644)].toQuotedString(n);
    return x.opts[e(885)] === !0 ? s += e(2197) + c + ");" : typeof x[e(1364)][e(885)] == e(1538) && (s += " self._opts.$comment(" + c + ", " + x[e(644)][e(1668)](o) + e(164)), s;
  }), it;
}
var ot, ma;
function G2() {
  return ma || (ma = 1, ot = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x[e(1640)] + x[e(644)][e(1569)](t), d = x[e(459)] + "/" + t, f = !x[e(1364)].allErrors, l = e(1021) + (o || ""), g = "valid" + n, h = x.opts[e(1088)] && c && c[e(1088)];
    h && (s += " var schema" + n + e(1572) + x[e(644)][e(2348)](c[e(1088)], o, x[e(2305)]) + "; "), !h && (s += e(1305) + n + e(1375) + u + ";"), s += e(760) + g + e(291) + l + e(715) + n + e(1986) + g + e(571);
    var m = m || [];
    m[e(1131)](s), s = "", x.createErrors !== !1 ? (s += e(762) + e(2032) + e(1232) + x[e(1484)] + e(2535) + x[e(644)][e(1668)](d) + e(2209) + n + " } ", x[e(1364)][e(1018)] !== !1 && (s += e(1829)), x.opts.verbose && (s += e(944) + u + e(1447) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += " {} ";
    var y = s;
    return s = m[e(1533)](), !x[e(1391)] && f ? x[e(2591)] ? s += e(2607) + y + e(2488) : s += e(673) + y + "]; return false; " : s += e(1542) + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " }", f && (s += e(1173)), s;
  }), ot;
}
var ct, ga;
function J2() {
  return ga || (ga = 1, ct = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x[e(1640)] + x.util.getProperty(t), d = x[e(459)] + "/" + t, f = !x[e(1364)][e(2448)], l = e(1021) + (o || ""), g = e(481) + n, h = "errs__" + n, m = x.util.copy(x), y = "";
    m[e(689)]++;
    var S = "valid" + m[e(689)], E = "i" + n, O = m.dataLevel = x[e(1028)] + 1, q = "data" + O, I = x.baseId, P = x[e(1364)][e(551)] ? typeof c == "object" && Object[e(1574)](c)[e(520)] > 0 || c === !1 : x[e(644)].schemaHasRules(c, x[e(1348)][e(1068)]);
    if (s += "var " + h + e(918) + g + ";", P) {
      var T = x.compositeRule;
      x[e(1391)] = m[e(1391)] = !0, m.schema = c, m[e(1640)] = u, m[e(459)] = d, s += " var " + S + e(888) + E + e(2539) + E + " < " + l + e(2477) + E + e(359), m.errorPath = x[e(644)][e(132)](x[e(1484)], E, x.opts.jsonPointers, !0);
      var D = l + "[" + E + "]";
      m[e(2305)][O] = E;
      var j = x[e(1485)](m);
      m[e(2011)] = I, x[e(644)][e(1156)](j, q) < 2 ? s += " " + x[e(644)][e(2481)](j, q, D) + " " : s += e(2570) + q + " = " + D + "; " + j + " ", s += e(1762) + S + ") break; }  ", x[e(1391)] = m[e(1391)] = T, s += " " + y + e(1067) + S + e(1746);
    } else s += e(1762) + l + e(348);
    var M = M || [];
    M.push(s), s = "", x[e(1987)] !== !1 ? (s += e(762) + "contains' , dataPath: (dataPath || '') + " + x[e(1484)] + " , schemaPath: " + x.util[e(1668)](d) + " , params: {} ", x[e(1364)][e(1018)] !== !1 && (s += e(1382)), x.opts[e(2530)] && (s += e(944) + u + e(1447) + x.schemaPath + e(539) + l + " "), s += e(701)) : s += e(2454);
    var F = s;
    return s = M[e(1533)](), !x[e(1391)] && f ? x[e(2591)] ? s += e(2607) + F + e(2488) : s += e(673) + F + e(388) : s += e(1542) + F + e(1638), s += e(148), P && (s += "  errors = " + h + e(1330) + h + e(293) + h + e(209)), x[e(1364)][e(2448)] && (s += " } "), s;
  }), ct;
}
var ut, ba;
function Q2() {
  return ba || (ba = 1, ut = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x[e(1640)] + x.util[e(1569)](t), d = x[e(459)] + "/" + t, f = !x[e(1364)][e(2448)], l = e(1021) + (o || ""), g = e(1629) + n, h = x[e(644)].copy(x), m = "";
    h[e(689)]++;
    var y = e(481) + h.level, S = {}, E = {}, O = x[e(1364)].ownProperties;
    for (T in c)
      if (T != e(2577)) {
        var q = c[T], I = Array.isArray(q) ? E : S;
        I[T] = q;
      }
    s += e(760) + g + e(2580);
    var P = x[e(1484)];
    s += e(2033) + n + ";";
    for (var T in E)
      if (I = E[T], I[e(520)]) {
        if (s += " if ( " + l + x.util.getProperty(T) + e(708), O && (s += e(1530) + l + ", '" + x[e(644)][e(867)](T) + e(678)), f) {
          s += " && ( ";
          var D = I;
          if (D)
            for (var j, M = -1, F = D[e(520)] - 1; M < F; ) {
              j = D[M += 1], M && (s += e(2616));
              var C = x[e(644)][e(1569)](j), U = l + C;
              s += e(2379) + U + e(432), O && (s += e(2522) + l + e(713) + x[e(644)][e(867)](j) + "') "), s += e(1865) + n + " = " + x[e(644)][e(1668)](x[e(1364)][e(1904)] ? j : C) + e(1223);
            }
          s += ")) {  ";
          var H = "missing" + n, V = "' + " + H + e(691);
          x[e(1364)][e(590)] && (x[e(1484)] = x[e(1364)][e(1904)] ? x[e(644)][e(132)](P, H, !0) : P + e(1782) + H);
          var Q = Q || [];
          Q[e(1131)](s), s = "", x[e(1987)] !== !1 ? (s += e(762) + e(2255) + e(1232) + x.errorPath + e(2535) + x[e(644)][e(1668)](d) + e(2330) + x[e(644)][e(867)](T) + "', missingProperty: '" + V + e(2545) + I[e(520)] + e(667) + x[e(644)][e(867)](I[e(520)] == 1 ? I[0] : I[e(1804)](", ")) + "' } ", x[e(1364)].messages !== !1 && (s += " , message: 'should have ", I[e(520)] == 1 ? s += e(1421) + x[e(644)][e(867)](I[0]) : s += e(2479) + x[e(644)][e(867)](I.join(", ")), s += e(1539) + x[e(644)][e(867)](T) + e(2552)), x[e(1364)][e(2530)] && (s += e(944) + u + e(1447) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += e(2454);
          var c0 = s;
          s = Q.pop(), !x.compositeRule && f ? x[e(2591)] ? s += e(2607) + c0 + "]); " : s += e(673) + c0 + "]; return false; " : s += e(1542) + c0 + e(1638);
        } else {
          s += e(2091);
          var u0 = I;
          if (u0)
            for (var j, s0 = -1, n0 = u0[e(520)] - 1; s0 < n0; ) {
              j = u0[s0 += 1];
              var C = x.util[e(1569)](j), V = x[e(644)][e(867)](j), U = l + C;
              x[e(1364)][e(590)] && (x[e(1484)] = x[e(644)][e(2563)](P, j, x[e(1364)][e(1904)])), s += e(2298) + U + e(432), O && (s += e(2522) + l + ", '" + x.util.escapeQuotes(j) + "') "), s += ") {  var err =   ", x[e(1987)] !== !1 ? (s += e(762) + e(2255) + e(1232) + x[e(1484)] + e(2535) + x.util.toQuotedString(d) + e(2330) + x[e(644)].escapeQuotes(T) + e(2076) + V + "', depsCount: " + I[e(520)] + e(667) + x[e(644)][e(867)](I.length == 1 ? I[0] : I[e(1804)](", ")) + e(645), x.opts[e(1018)] !== !1 && (s += " , message: 'should have ", I.length == 1 ? s += e(1421) + x[e(644)].escapeQuotes(I[0]) : s += e(2479) + x[e(644)][e(867)](I[e(1804)](", ")), s += e(1539) + x[e(644)][e(867)](T) + e(2552)), x[e(1364)][e(2530)] && (s += e(944) + u + e(1447) + x[e(1640)] + e(539) + l + " "), s += " } ") : s += e(2454), s += e(1331);
            }
        }
        s += e(2203), f && (m += "}", s += e(1173));
      }
    x.errorPath = P;
    var m0 = h[e(2011)];
    for (var T in S) {
      var q = S[T];
      (x[e(1364)].strictKeywords ? typeof q == e(1791) && Object[e(1574)](q).length > 0 || q === !1 : x[e(644)].schemaHasRules(q, x.RULES[e(1068)])) && (s += " " + y + e(349) + l + x[e(644)][e(1569)](T) + e(708), O && (s += e(1530) + l + e(713) + x[e(644)].escapeQuotes(T) + e(678)), s += ") { ", h[e(1548)] = q, h[e(1640)] = u + x[e(644)][e(1569)](T), h[e(459)] = d + "/" + x[e(644)][e(120)](T), s += "  " + x.validate(h) + " ", h[e(2011)] = m0, s += e(2328), f && (s += e(1762) + y + e(1381), m += "}"));
    }
    return f && (s += e(2393) + m + e(1762) + g + e(1117)), s;
  }), ut;
}
var dt, ya;
function X2() {
  return ya || (ya = 1, dt = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x.dataLevel, c = x.schema[t], u = x.schemaPath + x.util[e(1569)](t), d = x[e(459)] + "/" + t, f = !x[e(1364)][e(2448)], l = "data" + (o || ""), g = e(481) + n, h = x.opts[e(1088)] && c && c[e(1088)];
    h && (s += e(1305) + n + e(1572) + x[e(644)][e(2348)](c[e(1088)], o, x[e(2305)]) + "; ");
    var m = "i" + n, y = e(1548) + n;
    !h && (s += " var " + y + e(1375) + u + ";"), s += e(760) + g + ";", h && (s += e(543) + n + e(2521) + g + e(1763) + n + e(782) + g + " = false; else {"), s += "" + g + e(2122) + m + e(2529) + m + "<" + y + e(2477) + m + e(1137) + l + ", " + y + "[" + m + e(2116) + g + " = true; break; }", h && (s += e(913)), s += " if (!" + g + ") {   ";
    var S = S || [];
    S.push(s), s = "", x[e(1987)] !== !1 ? (s += e(762) + e(1497) + e(1232) + x[e(1484)] + e(2535) + x.util.toQuotedString(d) + e(1440) + n + e(701), x[e(1364)][e(1018)] !== !1 && (s += " , message: 'should be equal to one of the allowed values' "), x[e(1364)][e(2530)] && (s += " , schema: validate.schema" + u + e(1447) + x[e(1640)] + " , data: " + l + " "), s += e(701)) : s += e(2454);
    var E = s;
    return s = S[e(1533)](), !x[e(1391)] && f ? x[e(2591)] ? s += e(2607) + E + e(2488) : s += e(673) + E + e(388) : s += e(1542) + E + e(1638), s += " }", f && (s += e(1173)), s;
  }), dt;
}
var ft, va;
function Y2() {
  return va || (va = 1, ft = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x[e(1640)] + x[e(644)][e(1569)](t), d = x[e(459)] + "/" + t, f = !x.opts[e(2448)], l = e(1021) + (o || "");
    if (x[e(1364)][e(1089)] === !1) return f && (s += e(549)), s;
    var g = x[e(1364)][e(1088)] && c && c.$data, h;
    g ? (s += e(1305) + n + e(1572) + x[e(644)][e(2348)](c[e(1088)], o, x[e(2305)]) + "; ", h = e(1548) + n) : h = c;
    var m = x[e(1364)][e(2302)], y = Array.isArray(m);
    if (g) {
      var S = e(1089) + n, E = e(1434) + n, O = e(844) + n;
      s += " var " + S + e(384) + h + e(1565) + E + e(474) + S + e(1975) + S + e(1380) + S + e(212) + O + e(1572) + E + e(2005) + S + e(1008) + E + ") { ", x[e(2591)] && (s += e(1702) + n + e(1572) + S + e(1515)), s += " " + S + e(1572) + S + e(2425), g && (s += " (" + h + " !== undefined && typeof " + h + " != 'string') || "), s += " (", m != e(724) && (s += " (" + h + " && !" + S + " ", y && (s += e(2057) + h + e(2335)), s += ") || "), s += " (" + S + e(2005) + O + " == '" + a + e(1167) + S + e(1428), x.async ? s += e(535) + n + e(202) + S + "(" + l + e(1070) + S + "(" + l + e(782) : s += " " + S + "(" + l + ") ", s += e(1079) + S + e(683) + l + "))))) {";
    } else {
      var S = x.formats[c];
      if (!S) {
        if (m == e(724)) return x[e(891)].warn(e(1368) + c + e(1890) + x.errSchemaPath + '"'), f && (s += e(549)), s;
        if (y && m[e(417)](c) >= 0) return f && (s += e(549)), s;
        throw new Error('unknown format "' + c + e(1750) + x[e(459)] + '"');
      }
      var E = typeof S == e(1791) && !(S instanceof RegExp) && S[e(1485)], O = E && S.type || "string";
      if (E) {
        var q = S[e(2591)] === !0;
        S = S[e(1485)];
      }
      if (O != a) return f && (s += e(549)), s;
      if (q) {
        if (!x.async) throw new Error(e(206));
        var I = e(2071) + x[e(644)][e(1569)](c) + ".validate";
        s += " if (!(await " + I + "(" + l + "))) { ";
      } else {
        s += e(1730);
        var I = e(2071) + x[e(644)].getProperty(c);
        E && (I += e(364)), typeof S == e(1538) ? s += " " + I + "(" + l + ") " : s += " " + I + e(683) + l + ") ", s += ") { ";
      }
    }
    var P = P || [];
    P.push(s), s = "", x[e(1987)] !== !1 ? (s += e(762) + e(1089) + e(1232) + x[e(1484)] + e(2535) + x[e(644)][e(1668)](d) + " , params: { format:  ", g ? s += "" + h : s += "" + x[e(644)].toQuotedString(c), s += e(228), x.opts.messages !== !1 && (s += e(1112), g ? s += e(805) + h + e(691) : s += "" + x.util[e(867)](c), s += e(585)), x[e(1364)].verbose && (s += e(1556), g ? s += "validate.schema" + u : s += "" + x[e(644)].toQuotedString(c), s += e(1479) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += e(2454);
    var T = s;
    return s = P[e(1533)](), !x[e(1391)] && f ? x.async ? s += e(2607) + T + e(2488) : s += e(673) + T + e(388) : s += e(1542) + T + e(1638), s += e(701), f && (s += " else { "), s;
  }), ft;
}
var lt, wa;
function _2() {
  return wa || (wa = 1, lt = function(x, t, a) {
    const e = B;
    var s = " ", n = x.level, o = x[e(1028)], c = x[e(1548)][t], u = x[e(1640)] + x[e(644)][e(1569)](t), d = x.errSchemaPath + "/" + t, f = !x.opts[e(2448)], l = e(1021) + (o || ""), g = e(481) + n, h = e(1629) + n, m = x[e(644)][e(2601)](x);
    m[e(689)]++;
    var y = e(481) + m[e(689)], S = x[e(1548)][e(1124)], E = x[e(1548)][e(347)], O = S !== void 0 && (x[e(1364)][e(551)] ? typeof S == e(1791) && Object[e(1574)](S).length > 0 || S === !1 : x[e(644)][e(704)](S, x[e(1348)].all)), q = E !== void 0 && (x.opts.strictKeywords ? typeof E == e(1791) && Object.keys(E)[e(520)] > 0 || E === !1 : x[e(644)][e(704)](E, x[e(1348)][e(1068)])), I = m[e(2011)];
    if (O || q) {
      var P;
      m.createErrors = !1, m[e(1548)] = c, m[e(1640)] = u, m.errSchemaPath = d, s += e(2570) + h + e(403) + g + e(834);
      var T = x[e(1391)];
      x[e(1391)] = m[e(1391)] = !0, s += "  " + x[e(1485)](m) + " ", m.baseId = I, m[e(1987)] = !0, s += "  errors = " + h + e(1330) + h + e(293) + h + e(2606), x[e(1391)] = m.compositeRule = T, O ? (s += e(1762) + y + ") {  ", m.schema = x[e(1548)].then, m[e(1640)] = x[e(1640)] + e(719), m[e(459)] = x[e(459)] + e(2555), s += "  " + x[e(1485)](m) + " ", m[e(2011)] = I, s += " " + g + e(1572) + y + "; ", O && q ? (P = "ifClause" + n, s += e(2570) + P + e(2042)) : P = e(1377), s += " } ", q && (s += e(1173))) : s += e(1067) + y + e(1381), q && (m[e(1548)] = x[e(1548)][e(347)], m.schemaPath = x.schemaPath + e(2070), m.errSchemaPath = x[e(459)] + "/else", s += "  " + x[e(1485)](m) + " ", m.baseId = I, s += " " + g + e(1572) + y + "; ", O && q ? (P = e(2008) + n, s += e(2570) + P + e(2634)) : P = "'else'", s += " } "), s += e(1067) + g + e(1894), x[e(1987)] !== !1 ? (s += e(762) + "if" + e(1232) + x[e(1484)] + e(2535) + x.util[e(1668)](d) + e(1805) + P + e(701), x[e(1364)][e(1018)] !== !1 && (s += ` , message: 'should match "' + ` + P + e(505)), x[e(1364)][e(2530)] && (s += e(944) + u + e(1447) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += " {} ", s += e(1638), !x[e(1391)] && f && (x[e(2591)] ? s += " throw new ValidationError(vErrors); " : s += e(501)), s += " }   ", f && (s += e(1173));
    } else f && (s += " if (true) { ");
    return s;
  }), lt;
}
var ht, Sa;
function ec() {
  return Sa || (Sa = 1, ht = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x[e(1640)] + x[e(644)].getProperty(t), d = x[e(459)] + "/" + t, f = !x[e(1364)].allErrors, l = e(1021) + (o || ""), g = e(481) + n, h = e(1629) + n, m = x[e(644)][e(2601)](x), y = "";
    m[e(689)]++;
    var S = e(481) + m[e(689)], E = "i" + n, O = m[e(1028)] = x.dataLevel + 1, q = e(1021) + O, I = x[e(2011)];
    if (s += e(760) + h + e(918) + g + ";", Array[e(1396)](c)) {
      var P = x[e(1548)].additionalItems;
      if (P === !1) {
        s += " " + g + e(1572) + l + ".length <= " + c[e(520)] + "; ";
        var T = d;
        d = x[e(459)] + "/additionalItems", s += e(2029) + g + e(571);
        var D = D || [];
        D[e(1131)](s), s = "", x[e(1987)] !== !1 ? (s += e(762) + e(1426) + "' , dataPath: (dataPath || '') + " + x[e(1484)] + e(2535) + x[e(644)][e(1668)](d) + " , params: { limit: " + c.length + e(701), x.opts[e(1018)] !== !1 && (s += e(599) + c[e(520)] + e(166)), x[e(1364)][e(2530)] && (s += " , schema: false , parentSchema: validate.schema" + x[e(1640)] + " , data: " + l + " "), s += e(701)) : s += " {} ";
        var j = s;
        s = D[e(1533)](), !x.compositeRule && f ? x[e(2591)] ? s += e(2607) + j + e(2488) : s += e(673) + j + e(388) : s += e(1542) + j + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(701), d = T, f && (y += "}", s += e(1173));
      }
      var M = c;
      if (M) {
        for (var F, C = -1, U = M.length - 1; C < U; )
          if (F = M[C += 1], x[e(1364)].strictKeywords ? typeof F == e(1791) && Object.keys(F)[e(520)] > 0 || F === !1 : x[e(644)].schemaHasRules(F, x[e(1348)][e(1068)])) {
            s += " " + S + e(2141) + l + e(1956) + C + e(1381);
            var H = l + "[" + C + "]";
            m[e(1548)] = F, m.schemaPath = u + "[" + C + "]", m.errSchemaPath = d + "/" + C, m[e(1484)] = x[e(644)][e(132)](x[e(1484)], C, x[e(1364)][e(1904)], !0), m[e(2305)][O] = C;
            var V = x[e(1485)](m);
            m[e(2011)] = I, x.util[e(1156)](V, q) < 2 ? s += " " + x[e(644)][e(2481)](V, q, H) + " " : s += " var " + q + e(1572) + H + "; " + V + " ", s += e(2328), f && (s += e(1762) + S + e(1381), y += "}");
          }
      }
      if (typeof P == e(1791) && (x[e(1364)][e(551)] ? typeof P == e(1791) && Object[e(1574)](P)[e(520)] > 0 || P === !1 : x[e(644)][e(704)](P, x[e(1348)][e(1068)]))) {
        m[e(1548)] = P, m[e(1640)] = x.schemaPath + e(1802), m[e(459)] = x.errSchemaPath + e(559), s += " " + S + " = true; if (" + l + e(1956) + c.length + e(2317) + E + e(1572) + c[e(520)] + "; " + E + e(2104) + l + ".length; " + E + "++) { ", m[e(1484)] = x[e(644)][e(132)](x.errorPath, E, x[e(1364)][e(1904)], !0);
        var H = l + "[" + E + "]";
        m[e(2305)][O] = E;
        var V = x[e(1485)](m);
        m.baseId = I, x[e(644)][e(1156)](V, q) < 2 ? s += " " + x[e(644)][e(2481)](V, q, H) + " " : s += " var " + q + e(1572) + H + "; " + V + " ", f && (s += e(1067) + S + e(322)), s += e(2354), f && (s += e(1762) + S + e(1381), y += "}");
      }
    } else if (x[e(1364)][e(551)] ? typeof c == e(1791) && Object[e(1574)](c)[e(520)] > 0 || c === !1 : x[e(644)].schemaHasRules(c, x[e(1348)][e(1068)])) {
      m.schema = c, m[e(1640)] = u, m[e(459)] = d, s += e(512) + E + " = 0; " + E + e(2104) + l + e(2477) + E + "++) { ", m[e(1484)] = x[e(644)].getPathExpr(x[e(1484)], E, x[e(1364)].jsonPointers, !0);
      var H = l + "[" + E + "]";
      m[e(2305)][O] = E;
      var V = x[e(1485)](m);
      m[e(2011)] = I, x.util[e(1156)](V, q) < 2 ? s += " " + x[e(644)][e(2481)](V, q, H) + " " : s += " var " + q + e(1572) + H + "; " + V + " ", f && (s += e(1067) + S + ") break; "), s += " }";
    }
    return f && (s += " " + y + e(1762) + h + e(1117)), s;
  }), ht;
}
var pt, ka;
function Ea() {
  return ka || (ka = 1, pt = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x[e(1640)] + x[e(644)].getProperty(t), d = x[e(459)] + "/" + t, f = !x[e(1364)][e(2448)], I, l = e(1021) + (o || ""), g = x[e(1364)][e(1088)] && c && c[e(1088)], h;
    g ? (s += " var schema" + n + e(1572) + x.util[e(2348)](c[e(1088)], o, x.dataPathArr) + "; ", h = "schema" + n) : h = c;
    var m = t == e(2061), y = e(m ? 2355 : 2217), S = x[e(1548)][y], E = x.opts[e(1088)] && S && S[e(1088)], O = m ? "<" : ">", q = m ? ">" : "<", I = void 0;
    if (!(g || typeof c == e(191) || c === void 0)) throw new Error(t + e(1793));
    if (!(E || S === void 0 || typeof S == e(191) || typeof S == e(1488))) throw new Error(y + " must be number or boolean");
    if (E) {
      var P = x[e(644)][e(2348)](S[e(1088)], o, x[e(2305)]), T = e(1338) + n, D = e(663) + n, j = e(1723) + n, M = "op" + n, F = e(805) + M + " + '";
      s += " var schemaExcl" + n + " = " + P + "; ", P = "schemaExcl" + n, s += " var " + T + "; var " + D + e(474) + P + e(2053) + D + e(1241) + D + " != 'undefined' && " + D + e(2194);
      var I = y, C = C || [];
      C[e(1131)](s), s = "", x.createErrors !== !1 ? (s += e(762) + (I || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + x.errorPath + e(2535) + x.util[e(1668)](d) + e(1432), x[e(1364)][e(1018)] !== !1 && (s += e(2004) + y + e(2416)), x.opts[e(2530)] && (s += " , schema: validate.schema" + u + e(1447) + x.schemaPath + e(539) + l + " "), s += e(701)) : s += e(2454);
      var U = s;
      s = C[e(1533)](), !x.compositeRule && f ? x[e(2591)] ? s += e(2607) + U + "]); " : s += e(673) + U + e(388) : s += " var err = " + U + e(1638), s += e(2624), g && (s += " (" + h + e(1136) + h + e(394)), s += " " + D + " == 'number' ? ( (" + T + e(1572) + h + " === undefined || " + P + " " + O + "= " + h + e(497) + l + " " + q + "= " + P + " : " + l + " " + q + " " + h + e(1439) + T + e(1572) + P + e(299) + l + " " + q + "= " + h + e(1079) + l + " " + q + " " + h + e(1301) + l + e(763) + l + e(2117) + n + e(1572) + T + e(2566) + O + e(411) + O + e(273), c === void 0 && (I = y, d = x[e(459)] + "/" + y, h = P, g = E);
    } else {
      var j = typeof S == e(191), F = O;
      if (j && g) {
        var M = "'" + F + "'";
        s += e(2298), g && (s += " (" + h + " !== undefined && typeof " + h + e(394)), s += e(581) + h + e(1866) + S + " " + O + "= " + h + e(1879) + l + " " + q + "= " + S + e(1079) + l + " " + q + " " + h + e(1301) + l + e(763) + l + e(1381);
      } else {
        j && c === void 0 ? (T = !0, I = y, d = x[e(459)] + "/" + y, h = S, q += "=") : (j && (h = Math[e(m ? 1150 : 2428)](S, c)), S === (j ? h : !0) ? (T = !0, I = y, d = x[e(459)] + "/" + y, q += "=") : (T = !1, F += "="));
        var M = "'" + F + "'";
        s += " if ( ", g && (s += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), s += " " + l + " " + q + " " + h + e(2616) + l + e(763) + l + e(1381);
      }
    }
    I = I || t;
    var C = C || [];
    C[e(1131)](s), s = "", x[e(1987)] !== !1 ? (s += e(762) + (I || "_limit") + e(1232) + x[e(1484)] + e(2535) + x[e(644)][e(1668)](d) + e(1474) + M + e(1217) + h + ", exclusive: " + T + e(701), x[e(1364)][e(1018)] !== !1 && (s += e(1788) + F + " ", g ? s += e(805) + h : s += "" + h + "'"), x.opts[e(2530)] && (s += " , schema:  ", g ? s += e(1551) + u : s += "" + c, s += e(1479) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += e(2454);
    var U = s;
    return s = C[e(1533)](), !x[e(1391)] && f ? x[e(2591)] ? s += e(2607) + U + "]); " : s += " validate.errors = [" + U + e(388) : s += " var err = " + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(701), f && (s += " else { "), s;
  }), pt;
}
var mt, Ia;
function Pa() {
  return Ia || (Ia = 1, mt = function(x, t, a) {
    const e = B;
    var s = " ", n = x.level, o = x[e(1028)], c = x.schema[t], u = x.schemaPath + x[e(644)][e(1569)](t), d = x.errSchemaPath + "/" + t, f = !x[e(1364)][e(2448)], y, l = "data" + (o || ""), g = x.opts[e(1088)] && c && c.$data, h;
    if (g ? (s += e(1305) + n + e(1572) + x[e(644)][e(2348)](c[e(1088)], o, x[e(2305)]) + "; ", h = e(1548) + n) : h = c, !(g || typeof c == e(191))) throw new Error(t + e(1793));
    var m = t == "maxItems" ? ">" : "<";
    s += e(262), g && (s += " (" + h + " !== undefined && typeof " + h + e(394)), s += " " + l + e(1197) + m + " " + h + ") { ";
    var y = t, S = S || [];
    S[e(1131)](s), s = "", x[e(1987)] !== !1 ? (s += e(762) + (y || "_limitItems") + e(1232) + x[e(1484)] + e(2535) + x[e(644)][e(1668)](d) + e(2475) + h + e(701), x[e(1364)][e(1018)] !== !1 && (s += e(2219), t == e(2485) ? s += e(1498) : s += e(2131), s += " than ", g ? s += e(805) + h + e(691) : s += "" + c, s += e(166)), x[e(1364)][e(2530)] && (s += " , schema:  ", g ? s += "validate.schema" + u : s += "" + c, s += e(1479) + x.schemaPath + e(539) + l + " "), s += " } ") : s += e(2454);
    var E = s;
    return s = S[e(1533)](), !x[e(1391)] && f ? x[e(2591)] ? s += e(2607) + E + "]); " : s += e(673) + E + e(388) : s += e(1542) + E + e(1638), s += "} ", f && (s += e(1173)), s;
  }), mt;
}
var gt, Ra;
function Ca() {
  return Ra || (Ra = 1, gt = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x[e(1640)] + x[e(644)].getProperty(t), d = x[e(459)] + "/" + t, f = !x[e(1364)][e(2448)], y, l = e(1021) + (o || ""), g = x.opts[e(1088)] && c && c[e(1088)], h;
    if (g ? (s += e(1305) + n + e(1572) + x[e(644)][e(2348)](c[e(1088)], o, x[e(2305)]) + "; ", h = e(1548) + n) : h = c, !(g || typeof c == e(191))) throw new Error(t + " must be number");
    var m = t == e(1736) ? ">" : "<";
    s += e(262), g && (s += " (" + h + e(1136) + h + e(394)), x.opts[e(2586)] === !1 ? s += " " + l + ".length " : s += " ucs2length(" + l + ") ", s += " " + m + " " + h + e(1381);
    var y = t, S = S || [];
    S[e(1131)](s), s = "", x[e(1987)] !== !1 ? (s += e(762) + (y || e(1830)) + e(1232) + x[e(1484)] + e(2535) + x.util[e(1668)](d) + e(2475) + h + e(701), x[e(1364)].messages !== !1 && (s += " , message: 'should NOT be ", t == e(1736) ? s += "longer" : s += e(943), s += e(1341), g ? s += e(805) + h + e(691) : s += "" + c, s += e(628)), x[e(1364)][e(2530)] && (s += e(1556), g ? s += e(1551) + u : s += "" + c, s += e(1479) + x.schemaPath + e(539) + l + " "), s += " } ") : s += " {} ";
    var E = s;
    return s = S[e(1533)](), !x.compositeRule && f ? x[e(2591)] ? s += e(2607) + E + e(2488) : s += e(673) + E + e(388) : s += e(1542) + E + e(1638), s += "} ", f && (s += e(1173)), s;
  }), gt;
}
var bt, Fa;
function Na() {
  return Fa || (Fa = 1, bt = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x[e(1640)] + x[e(644)][e(1569)](t), d = x[e(459)] + "/" + t, f = !x[e(1364)][e(2448)], y, l = e(1021) + (o || ""), g = x[e(1364)][e(1088)] && c && c[e(1088)], h;
    if (g ? (s += e(1305) + n + e(1572) + x[e(644)][e(2348)](c[e(1088)], o, x.dataPathArr) + "; ", h = e(1548) + n) : h = c, !(g || typeof c == e(191))) throw new Error(t + " must be number");
    var m = t == "maxProperties" ? ">" : "<";
    s += e(262), g && (s += " (" + h + e(1136) + h + e(394)), s += " Object.keys(" + l + e(2095) + m + " " + h + e(1381);
    var y = t, S = S || [];
    S[e(1131)](s), s = "", x[e(1987)] !== !1 ? (s += e(762) + (y || e(855)) + e(1232) + x[e(1484)] + e(2535) + x[e(644)][e(1668)](d) + e(2475) + h + " } ", x.opts.messages !== !1 && (s += e(2219), t == e(179) ? s += e(1498) : s += e(2131), s += " than ", g ? s += e(805) + h + e(691) : s += "" + c, s += e(1080)), x.opts.verbose && (s += " , schema:  ", g ? s += e(1551) + u : s += "" + c, s += e(1479) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += e(2454);
    var E = s;
    return s = S[e(1533)](), !x[e(1391)] && f ? x.async ? s += e(2607) + E + e(2488) : s += e(673) + E + e(388) : s += e(1542) + E + e(1638), s += "} ", f && (s += e(1173)), s;
  }), bt;
}
var yt, qa;
function xc() {
  return qa || (qa = 1, yt = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x[e(1640)] + x[e(644)].getProperty(t), d = x[e(459)] + "/" + t, f = !x[e(1364)].allErrors, l = "data" + (o || ""), g = x.opts[e(1088)] && c && c.$data, h;
    if (g ? (s += e(1305) + n + " = " + x[e(644)].getData(c[e(1088)], o, x.dataPathArr) + "; ", h = e(1548) + n) : h = c, !(g || typeof c == e(191))) throw new Error(t + " must be number");
    s += e(1911) + n + ";if (", g && (s += " " + h + e(1087) + h + e(1450)), s += " (division" + n + e(1572) + l + e(1637) + h + ", ", x.opts[e(2275)] ? s += e(649) + n + ") - division" + n + e(2199) + x.opts[e(2275)] + " " : s += " division" + n + e(321) + n + ") ", s += " ) ", g && (s += e(1875)), s += e(1268);
    var m = m || [];
    m[e(1131)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + e(2019) + e(1232) + x.errorPath + e(2535) + x[e(644)][e(1668)](d) + e(1352) + h + e(701), x[e(1364)][e(1018)] !== !1 && (s += e(1296), g ? s += e(805) + h : s += "" + h + "'"), x[e(1364)][e(2530)] && (s += " , schema:  ", g ? s += e(1551) + u : s += "" + c, s += e(1479) + x[e(1640)] + e(539) + l + " "), s += " } ") : s += e(2454);
    var y = s;
    return s = m[e(1533)](), !x[e(1391)] && f ? x[e(2591)] ? s += e(2607) + y + e(2488) : s += " validate.errors = [" + y + e(388) : s += e(1542) + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", f && (s += e(1173)), s;
  }), yt;
}
var vt, Ta;
function tc() {
  return Ta || (Ta = 1, vt = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x.schemaPath + x[e(644)].getProperty(t), d = x.errSchemaPath + "/" + t, f = !x[e(1364)].allErrors, l = e(1021) + (o || ""), g = e(1629) + n, h = x.util[e(2601)](x);
    h[e(689)]++;
    var m = e(481) + h[e(689)];
    if (x[e(1364)][e(551)] ? typeof c == e(1791) && Object[e(1574)](c)[e(520)] > 0 || c === !1 : x[e(644)][e(704)](c, x[e(1348)][e(1068)])) {
      h[e(1548)] = c, h.schemaPath = u, h[e(459)] = d, s += e(2570) + g + e(220);
      var y = x.compositeRule;
      x[e(1391)] = h[e(1391)] = !0, h[e(1987)] = !1;
      var S;
      h[e(1364)].allErrors && (S = h.opts[e(2448)], h[e(1364)][e(2448)] = !1), s += " " + x.validate(h) + " ", h.createErrors = !0, S && (h[e(1364)][e(2448)] = S), x[e(1391)] = h.compositeRule = y, s += e(1762) + m + e(571);
      var E = E || [];
      E[e(1131)](s), s = "", x[e(1987)] !== !1 ? (s += e(762) + e(923) + e(1232) + x[e(1484)] + " , schemaPath: " + x[e(644)].toQuotedString(d) + " , params: {} ", x[e(1364)].messages !== !1 && (s += e(652)), x[e(1364)][e(2530)] && (s += " , schema: validate.schema" + u + e(1447) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += e(2454);
      var O = s;
      s = E[e(1533)](), !x[e(1391)] && f ? x[e(2591)] ? s += e(2607) + O + "]); " : s += e(673) + O + "]; return false; " : s += " var err = " + O + e(1638), s += e(840) + g + "; if (vErrors !== null) { if (" + g + ") vErrors.length = " + g + e(209), x[e(1364)][e(2448)] && (s += e(701));
    } else s += e(707), x[e(1987)] !== !1 ? (s += e(762) + e(923) + e(1232) + x[e(1484)] + e(2535) + x.util[e(1668)](d) + e(1432), x.opts[e(1018)] !== !1 && (s += e(652)), x[e(1364)][e(2530)] && (s += e(944) + u + e(1447) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += e(2454), s += e(1638), f && (s += " if (false) { ");
    return s;
  }), vt;
}
var wt, Aa;
function rc() {
  return Aa || (Aa = 1, wt = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x[e(1640)] + x[e(644)][e(1569)](t), d = x[e(459)] + "/" + t, f = !x[e(1364)][e(2448)], l = e(1021) + (o || ""), g = e(481) + n, h = "errs__" + n, m = x[e(644)][e(2601)](x), y = "";
    m[e(689)]++;
    var S = e(481) + m[e(689)], E = m.baseId, O = e(2272) + n, q = "passingSchemas" + n;
    s += "var " + h + e(367) + O + " = false , " + g + e(625) + q + e(1075);
    var I = x[e(1391)];
    x[e(1391)] = m[e(1391)] = !0;
    var P = c;
    if (P)
      for (var T, D = -1, j = P.length - 1; D < j; )
        T = P[D += 1], (x[e(1364)][e(551)] ? typeof T == e(1791) && Object[e(1574)](T)[e(520)] > 0 || T === !1 : x[e(644)][e(704)](T, x[e(1348)][e(1068)])) ? (m[e(1548)] = T, m.schemaPath = u + "[" + D + "]", m[e(459)] = d + "/" + D, s += "  " + x[e(1485)](m) + " ", m.baseId = E) : s += " var " + S + e(2406), D && (s += e(1762) + S + e(2005) + O + e(1381) + g + e(428) + q + e(2420) + q + ", " + D + e(1546), y += "}"), s += e(1762) + S + e(1381) + g + " = " + O + e(2406) + q + " = " + D + "; }";
    return x.compositeRule = m[e(1391)] = I, s += "" + y + e(531) + g + ") {   var err =   ", x[e(1987)] !== !1 ? (s += e(762) + e(2222) + e(1232) + x[e(1484)] + " , schemaPath: " + x.util[e(1668)](d) + e(1759) + q + e(701), x[e(1364)][e(1018)] !== !1 && (s += " , message: 'should match exactly one schema in oneOf' "), x.opts[e(2530)] && (s += e(944) + u + e(1447) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += e(2454), s += e(1638), !x[e(1391)] && f && (x[e(2591)] ? s += e(1102) : s += " validate.errors = vErrors; return false; "), s += e(933) + h + e(1330) + h + e(293) + h + "; else vErrors = null; }", x[e(1364)][e(2448)] && (s += e(701)), s;
  }), wt;
}
var St, Oa;
function ac() {
  return Oa || (Oa = 1, St = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x[e(1640)] + x[e(644)][e(1569)](t), d = x[e(459)] + "/" + t, f = !x[e(1364)][e(2448)], l = e(1021) + (o || ""), g = x[e(1364)][e(1088)] && c && c[e(1088)], h;
    g ? (s += " var schema" + n + e(1572) + x[e(644)][e(2348)](c[e(1088)], o, x[e(2305)]) + "; ", h = e(1548) + n) : h = c;
    var m = g ? e(684) + h + "))" : x[e(1700)](c);
    s += e(262), g && (s += " (" + h + e(1136) + h + e(1263)), s += " !" + m + e(683) + l + ") ) {   ";
    var y = y || [];
    y[e(1131)](s), s = "", x.createErrors !== !1 ? (s += e(762) + "pattern" + e(1232) + x.errorPath + e(2535) + x[e(644)].toQuotedString(d) + e(1884), g ? s += "" + h : s += "" + x[e(644)][e(1668)](c), s += e(228), x[e(1364)][e(1018)] !== !1 && (s += e(1283), g ? s += "' + " + h + e(691) : s += "" + x[e(644)][e(867)](c), s += e(585)), x.opts[e(2530)] && (s += e(1556), g ? s += "validate.schema" + u : s += "" + x[e(644)][e(1668)](c), s += e(1479) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += " {} ";
    var S = s;
    return s = y[e(1533)](), !x[e(1391)] && f ? x[e(2591)] ? s += " throw new ValidationError([" + S + "]); " : s += e(673) + S + e(388) : s += e(1542) + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", f && (s += e(1173)), s;
  }), St;
}
var kt, Da;
function sc() {
  return Da || (Da = 1, kt = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x.schemaPath + x[e(644)][e(1569)](t), d = x[e(459)] + "/" + t, f = !x.opts[e(2448)], l = e(1021) + (o || ""), g = e(1629) + n, h = x.util.copy(x), m = "";
    h[e(689)]++;
    var y = e(481) + h[e(689)], S = e(594) + n, E = "idx" + n, O = h[e(1028)] = x[e(1028)] + 1, q = e(1021) + O, I = e(1877) + n, P = Object[e(1574)](c || {})[e(333)](s0), T = x.schema[e(392)] || {}, D = Object.keys(T)[e(333)](s0), j = x[e(1548)][e(2432)], M = P.length || D[e(520)], F = j === !1, C = typeof j == e(1791) && Object.keys(j)[e(520)], U = x[e(1364)][e(1062)], H = F || C || U, V = x[e(1364)][e(1195)], Q = x[e(2011)], c0 = x[e(1548)][e(2344)];
    if (c0 && !(x[e(1364)][e(1088)] && c0[e(1088)]) && c0[e(520)] < x.opts[e(2514)]) var u0 = x.util.toHash(c0);
    function s0(jx) {
      return jx !== e(2577);
    }
    if (s += e(760) + g + e(918) + y + e(968), V && (s += " var " + I + " = undefined;"), H) {
      if (V ? s += " " + I + e(1572) + I + e(2396) + l + "); for (var " + E + e(2529) + E + "<" + I + ".length; " + E + e(2465) + S + e(1572) + I + "[" + E + "]; " : s += e(2520) + S + e(2172) + l + ") { ", M) {
        if (s += e(284) + n + e(1441), P[e(520)])
          if (P[e(520)] > 8) s += e(137) + u + ".hasOwnProperty(" + S + ") ";
          else {
            var n0 = P;
            if (n0)
              for (var m0, w0 = -1, b0 = n0.length - 1; w0 < b0; )
                m0 = n0[w0 += 1], s += e(2616) + S + e(598) + x.util[e(1668)](m0) + " ";
          }
        if (D[e(520)]) {
          var D0 = D;
          if (D0)
            for (var R0, Q0 = -1, A = D0[e(520)] - 1; Q0 < A; )
              R0 = D0[Q0 += 1], s += e(2616) + x[e(1700)](R0) + e(683) + S + ") ";
        }
        s += e(668) + n + ") { ";
      }
      if (U == e(1068)) s += e(2148) + l + "[" + S + "]; ";
      else {
        var N = x[e(1484)], L = e(805) + S + e(691);
        if (x[e(1364)][e(590)] && (x[e(1484)] = x.util.getPathExpr(x[e(1484)], S, x[e(1364)][e(1904)])), F)
          if (U) s += e(2148) + l + "[" + S + "]; ";
          else {
            s += " " + y + e(428);
            var Y = d;
            d = x[e(459)] + "/additionalProperties";
            var W = W || [];
            W[e(1131)](s), s = "", x[e(1987)] !== !1 ? (s += e(762) + e(2432) + e(1232) + x[e(1484)] + e(2535) + x[e(644)][e(1668)](d) + " , params: { additionalProperty: '" + L + e(645), x.opts.messages !== !1 && (s += e(2004), x[e(1364)][e(590)] ? s += e(732) : s += e(802), s += "' "), x.opts[e(2530)] && (s += e(1308) + x[e(1640)] + e(539) + l + " "), s += " } ") : s += e(2454);
            var Z = s;
            s = W[e(1533)](), !x[e(1391)] && f ? x.async ? s += e(2607) + Z + e(2488) : s += " validate.errors = [" + Z + "]; return false; " : s += e(1542) + Z + e(1638), d = Y, f && (s += " break; ");
          }
        else if (C)
          if (U == "failing") {
            s += e(2570) + g + e(220);
            var i0 = x.compositeRule;
            x[e(1391)] = h[e(1391)] = !0, h[e(1548)] = j, h[e(1640)] = x[e(1640)] + ".additionalProperties", h[e(459)] = x[e(459)] + e(998), h.errorPath = x.opts[e(590)] ? x[e(1484)] : x[e(644)][e(132)](x[e(1484)], S, x[e(1364)][e(1904)]);
            var o0 = l + "[" + S + "]";
            h[e(2305)][O] = S;
            var G = x[e(1485)](h);
            h[e(2011)] = Q, x[e(644)][e(1156)](G, q) < 2 ? s += " " + x[e(644)][e(2481)](G, q, o0) + " " : s += " var " + q + e(1572) + o0 + "; " + G + " ", s += e(1067) + y + e(1178) + g + e(2187) + l + "[" + S + "]; }  ", x[e(1391)] = h.compositeRule = i0;
          } else {
            h[e(1548)] = j, h.schemaPath = x[e(1640)] + e(1586), h[e(459)] = x.errSchemaPath + e(998), h.errorPath = x.opts[e(590)] ? x[e(1484)] : x.util[e(132)](x[e(1484)], S, x[e(1364)][e(1904)]);
            var o0 = l + "[" + S + "]";
            h[e(2305)][O] = S;
            var G = x[e(1485)](h);
            h[e(2011)] = Q, x[e(644)][e(1156)](G, q) < 2 ? s += " " + x[e(644)][e(2481)](G, q, o0) + " " : s += e(2570) + q + " = " + o0 + "; " + G + " ", f && (s += " if (!" + y + e(322));
          }
        x[e(1484)] = N;
      }
      M && (s += e(701)), s += " }  ", f && (s += " if (" + y + ") { ", m += "}");
    }
    var M0 = x[e(1364)][e(193)] && !x[e(1391)];
    if (P[e(520)]) {
      var L0 = P;
      if (L0)
        for (var m0, T0 = -1, q0 = L0.length - 1; T0 < q0; ) {
          m0 = L0[T0 += 1];
          var A0 = c[m0];
          if (x.opts[e(551)] ? typeof A0 == "object" && Object[e(1574)](A0)[e(520)] > 0 || A0 === !1 : x[e(644)].schemaHasRules(A0, x[e(1348)][e(1068)])) {
            var xe = x[e(644)].getProperty(m0), o0 = l + xe, me = M0 && A0[e(1535)] !== void 0;
            h.schema = A0, h.schemaPath = u + xe, h[e(459)] = d + "/" + x[e(644)][e(120)](m0), h[e(1484)] = x[e(644)][e(2563)](x[e(1484)], m0, x[e(1364)][e(1904)]), h.dataPathArr[O] = x[e(644)][e(1668)](m0);
            var G = x[e(1485)](h);
            if (h[e(2011)] = Q, x[e(644)].varOccurences(G, q) < 2) {
              G = x[e(644)][e(2481)](G, q, o0);
              var $0 = o0;
            } else {
              var $0 = q;
              s += e(2570) + q + e(1572) + o0 + "; ";
            }
            if (me) s += " " + G + " ";
            else {
              if (u0 && u0[m0]) {
                s += " if ( " + $0 + " === undefined ", V && (s += e(2522) + l + e(713) + x[e(644)][e(867)](m0) + e(678)), s += e(1381) + y + e(428);
                var N = x.errorPath, Y = d, W0 = x[e(644)][e(867)](m0);
                x.opts[e(590)] && (x[e(1484)] = x[e(644)].getPath(N, m0, x[e(1364)].jsonPointers)), d = x.errSchemaPath + e(1808);
                var W = W || [];
                W[e(1131)](s), s = "", x.createErrors !== !1 ? (s += e(762) + "required" + e(1232) + x.errorPath + e(2535) + x.util[e(1668)](d) + e(397) + W0 + e(645), x[e(1364)][e(1018)] !== !1 && (s += e(2004), x[e(1364)]._errorDataPathProperty ? s += e(1035) : s += e(895) + W0 + "\\'", s += "' "), x.opts.verbose && (s += e(944) + u + " , parentSchema: validate.schema" + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += e(2454);
                var Z = s;
                s = W[e(1533)](), !x[e(1391)] && f ? x[e(2591)] ? s += e(2607) + Z + e(2488) : s += e(673) + Z + e(388) : s += e(1542) + Z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = Y, x[e(1484)] = N, s += e(148);
              } else f ? (s += " if ( " + $0 + e(432), V && (s += e(2522) + l + ", '" + x[e(644)][e(867)](m0) + e(678)), s += ") { " + y + e(1867)) : (s += e(1762) + $0 + e(708), V && (s += e(2192) + l + e(713) + x[e(644)][e(867)](m0) + "') "), s += " ) { ");
              s += " " + G + e(701);
            }
          }
          f && (s += " if (" + y + e(1381), m += "}");
        }
    }
    if (D.length) {
      var V0 = D;
      if (V0)
        for (var R0, Y0 = -1, Dx = V0[e(520)] - 1; Y0 < Dx; ) {
          R0 = V0[Y0 += 1];
          var A0 = T[R0];
          if (x[e(1364)][e(551)] ? typeof A0 == e(1791) && Object[e(1574)](A0).length > 0 || A0 === !1 : x[e(644)][e(704)](A0, x[e(1348)][e(1068)])) {
            h.schema = A0, h[e(1640)] = x[e(1640)] + e(178) + x.util[e(1569)](R0), h[e(459)] = x[e(459)] + e(1143) + x[e(644)].escapeFragment(R0), V ? s += " " + I + " = " + I + e(2396) + l + e(1680) + E + "=0; " + E + "<" + I + e(2477) + E + e(2465) + S + e(1572) + I + "[" + E + e(1298) : s += e(2520) + S + e(2172) + l + e(1381), s += e(1762) + x.usePattern(R0) + ".test(" + S + ")) { ", h[e(1484)] = x.util[e(132)](x[e(1484)], S, x[e(1364)][e(1904)]);
            var o0 = l + "[" + S + "]";
            h[e(2305)][O] = S;
            var G = x.validate(h);
            h.baseId = Q, x[e(644)].varOccurences(G, q) < 2 ? s += " " + x[e(644)].varReplace(G, q, o0) + " " : s += e(2570) + q + e(1572) + o0 + "; " + G + " ", f && (s += e(1067) + y + e(322)), s += e(701), f && (s += e(1492) + y + e(2406)), s += e(2328), f && (s += e(1762) + y + e(1381), m += "}");
          }
        }
    }
    return f && (s += " " + m + e(1762) + g + e(1117)), s;
  }), kt;
}
var Et, ja;
function nc() {
  return ja || (ja = 1, Et = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x.dataLevel, c = x[e(1548)][t], u = x[e(1640)] + x[e(644)].getProperty(t), d = x[e(459)] + "/" + t, f = !x.opts[e(2448)], l = "data" + (o || ""), g = e(1629) + n, h = x[e(644)].copy(x), m = "";
    h.level++;
    var y = e(481) + h[e(689)];
    if (s += "var " + g + e(2580), x[e(1364)].strictKeywords ? typeof c == e(1791) && Object[e(1574)](c).length > 0 || c === !1 : x[e(644)][e(704)](c, x[e(1348)][e(1068)])) {
      h.schema = c, h[e(1640)] = u, h[e(459)] = d;
      var S = e(594) + n, E = "idx" + n, O = "i" + n, q = "' + " + S + e(691), I = h[e(1028)] = x[e(1028)] + 1, P = "data" + I, T = e(1877) + n, D = x[e(1364)][e(1195)], j = x.baseId;
      D && (s += e(2570) + T + " = undefined; "), D ? s += " " + T + e(1572) + T + e(2396) + l + e(1680) + E + "=0; " + E + "<" + T + e(2477) + E + e(2465) + S + " = " + T + "[" + E + e(1298) : s += e(2520) + S + e(2172) + l + e(1381), s += e(2518) + n + e(1264);
      var M = S, F = x.compositeRule;
      x.compositeRule = h[e(1391)] = !0;
      var C = x[e(1485)](h);
      h[e(2011)] = j, x[e(644)][e(1156)](C, P) < 2 ? s += " " + x[e(644)][e(2481)](C, P, M) + " " : s += e(2570) + P + e(1572) + M + "; " + C + " ", x[e(1391)] = h[e(1391)] = F, s += " if (!" + y + ") { for (var " + O + e(1086) + n + "; " + O + e(1994) + O + e(1770) + O + e(248) + S + e(881), x.createErrors !== !1 ? (s += e(762) + e(111) + e(1232) + x.errorPath + e(2535) + x.util[e(1668)](d) + e(657) + q + e(645), x[e(1364)][e(1018)] !== !1 && (s += " , message: 'property name \\'" + q + e(258)), x.opts[e(2530)] && (s += e(944) + u + e(1447) + x[e(1640)] + e(539) + l + " "), s += " } ") : s += e(2454), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(1391)] && f && (x.async ? s += e(1102) : s += e(501)), f && (s += e(2414)), s += " } }";
    }
    return f && (s += " " + m + " if (" + g + " == errors) {"), s;
  }), Et;
}
var It, Ma;
function ic() {
  return Ma || (Ma = 1, It = function(x, t, a) {
    const e = B;
    var s = " ", n = x[e(689)], o = x[e(1028)], c = x[e(1548)][t], u = x[e(1640)] + x.util[e(1569)](t), d = x[e(459)] + "/" + t, f = !x.opts[e(2448)], l = "data" + (o || ""), g = e(481) + n, h = x[e(1364)][e(1088)] && c && c[e(1088)];
    h && (s += " var schema" + n + e(1572) + x[e(644)].getData(c[e(1088)], o, x[e(2305)]) + "; ");
    var m = e(1548) + n;
    if (!h)
      if (c[e(520)] < x.opts[e(2514)] && x[e(1548)][e(402)] && Object[e(1574)](x[e(1548)][e(402)]).length) {
        var I = [], y = c;
        if (y)
          for (var S, E = -1, O = y[e(520)] - 1; E < O; ) {
            S = y[E += 1];
            var q = x[e(1548)].properties[S];
            !(q && (x[e(1364)][e(551)] ? typeof q == e(1791) && Object[e(1574)](q).length > 0 || q === !1 : x[e(644)][e(704)](q, x.RULES.all))) && (I[I.length] = S);
          }
      } else var I = c;
    if (h || I[e(520)]) {
      var P = x.errorPath, T = h || I[e(520)] >= x.opts[e(2514)], D = x[e(1364)][e(1195)];
      if (f)
        if (s += e(950) + n + "; ", T) {
          !h && (s += e(2570) + m + e(1375) + u + "; ");
          var j = "i" + n, M = "schema" + n + "[" + j + "]", F = e(805) + M + " + '";
          x[e(1364)][e(590)] && (x.errorPath = x[e(644)][e(132)](P, M, x[e(1364)][e(1904)])), s += " var " + g + " = true; ", h && (s += e(543) + n + e(2521) + g + e(1763) + n + ")) " + g + e(1741)), s += e(2520) + j + " = 0; " + j + e(2104) + m + ".length; " + j + e(359) + g + e(1572) + l + "[" + m + "[" + j + e(2215), D && (s += e(2192) + l + ", " + m + "[" + j + e(379)), s += "; if (!" + g + e(863), h && (s += e(913)), s += "  if (!" + g + e(571);
          var C = C || [];
          C.push(s), s = "", x[e(1987)] !== !1 ? (s += e(762) + e(2344) + e(1232) + x.errorPath + e(2535) + x.util.toQuotedString(d) + e(397) + F + e(645), x.opts.messages !== !1 && (s += e(2004), x[e(1364)]._errorDataPathProperty ? s += "is a required property" : s += e(895) + F + "\\'", s += "' "), x[e(1364)][e(2530)] && (s += e(944) + u + " , parentSchema: validate.schema" + x.schemaPath + e(539) + l + " "), s += e(701)) : s += " {} ";
          var U = s;
          s = C.pop(), !x[e(1391)] && f ? x[e(2591)] ? s += e(2607) + U + e(2488) : s += e(673) + U + e(388) : s += e(1542) + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(148);
        } else {
          s += " if ( ";
          var H = I;
          if (H)
            for (var V, j = -1, Q = H[e(520)] - 1; j < Q; ) {
              V = H[j += 1], j && (s += " || ");
              var c0 = x.util[e(1569)](V), u0 = l + c0;
              s += e(2379) + u0 + e(432), D && (s += " || ! Object.prototype.hasOwnProperty.call(" + l + e(713) + x.util[e(867)](V) + e(678)), s += ") && (missing" + n + " = " + x[e(644)][e(1668)](x[e(1364)].jsonPointers ? V : c0) + e(1223);
            }
          s += e(451);
          var M = e(541) + n, F = e(805) + M + e(691);
          x.opts[e(590)] && (x.errorPath = x[e(1364)].jsonPointers ? x.util[e(132)](P, M, !0) : P + e(1782) + M);
          var C = C || [];
          C[e(1131)](s), s = "", x[e(1987)] !== !1 ? (s += e(762) + e(2344) + e(1232) + x[e(1484)] + e(2535) + x[e(644)][e(1668)](d) + e(397) + F + e(645), x[e(1364)][e(1018)] !== !1 && (s += " , message: '", x[e(1364)][e(590)] ? s += e(1035) : s += e(895) + F + "\\'", s += "' "), x[e(1364)][e(2530)] && (s += " , schema: validate.schema" + u + e(1447) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += " {} ";
          var U = s;
          s = C[e(1533)](), !x[e(1391)] && f ? x[e(2591)] ? s += e(2607) + U + "]); " : s += e(673) + U + "]; return false; " : s += e(1542) + U + e(1638), s += " } else { ";
        }
      else if (T) {
        !h && (s += " var " + m + e(1375) + u + "; ");
        var j = "i" + n, M = "schema" + n + "[" + j + "]", F = "' + " + M + e(691);
        x.opts[e(590)] && (x.errorPath = x[e(644)].getPathExpr(P, M, x[e(1364)][e(1904)])), h && (s += e(1762) + m + e(854) + m + ")) {  var err =   ", x[e(1987)] !== !1 ? (s += e(762) + e(2344) + e(1232) + x[e(1484)] + " , schemaPath: " + x[e(644)][e(1668)](d) + e(397) + F + e(645), x.opts[e(1018)] !== !1 && (s += e(2004), x[e(1364)][e(590)] ? s += e(1035) : s += e(895) + F + "\\'", s += "' "), x.opts[e(2530)] && (s += e(944) + u + e(1447) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += e(2454), s += e(1641) + m + e(2301)), s += e(2520) + j + e(2539) + j + e(2104) + m + ".length; " + j + "++) { if (" + l + "[" + m + "[" + j + e(2622), D && (s += e(2522) + l + ", " + m + "[" + j + e(379)), s += e(1162), x[e(1987)] !== !1 ? (s += " { keyword: '" + e(2344) + e(1232) + x[e(1484)] + " , schemaPath: " + x[e(644)][e(1668)](d) + e(397) + F + e(645), x[e(1364)][e(1018)] !== !1 && (s += e(2004), x[e(1364)]._errorDataPathProperty ? s += "is a required property" : s += e(895) + F + "\\'", s += "' "), x[e(1364)][e(2530)] && (s += e(944) + u + " , parentSchema: validate.schema" + x[e(1640)] + " , data: " + l + " "), s += e(701)) : s += e(2454), s += e(1594), h && (s += e(913));
      } else {
        var s0 = I;
        if (s0)
          for (var V, n0 = -1, m0 = s0[e(520)] - 1; n0 < m0; ) {
            V = s0[n0 += 1];
            var c0 = x[e(644)][e(1569)](V), F = x[e(644)][e(867)](V), u0 = l + c0;
            x[e(1364)][e(590)] && (x[e(1484)] = x[e(644)][e(2563)](P, V, x[e(1364)].jsonPointers)), s += e(2298) + u0 + e(432), D && (s += e(2522) + l + ", '" + x.util[e(867)](V) + e(678)), s += e(1162), x[e(1987)] !== !1 ? (s += e(762) + "required" + e(1232) + x.errorPath + e(2535) + x[e(644)].toQuotedString(d) + e(397) + F + e(645), x.opts.messages !== !1 && (s += " , message: '", x[e(1364)][e(590)] ? s += "is a required property" : s += e(895) + F + "\\'", s += "' "), x[e(1364)][e(2530)] && (s += e(944) + u + e(1447) + x[e(1640)] + e(539) + l + " "), s += e(701)) : s += e(2454), s += e(1331);
          }
      }
      x[e(1484)] = P;
    } else f && (s += e(1180));
    return s;
  }), It;
}
var Pt, La;
function oc() {
  return La || (La = 1, Pt = function(x, t, a) {
    const e = B;
    var s = " ", n = x.level, o = x.dataLevel, c = x[e(1548)][t], u = x[e(1640)] + x[e(644)].getProperty(t), d = x[e(459)] + "/" + t, f = !x[e(1364)][e(2448)], l = "data" + (o || ""), g = e(481) + n, h = x[e(1364)][e(1088)] && c && c.$data, m;
    if (h ? (s += e(1305) + n + e(1572) + x[e(644)].getData(c[e(1088)], o, x[e(2305)]) + "; ", m = e(1548) + n) : m = c, (c || h) && x[e(1364)][e(143)] !== !1) {
      h && (s += e(2570) + g + e(2053) + m + " === false || " + m + e(2521) + g + e(2430) + m + e(1145) + g + e(1716)), s += e(1501) + l + ".length , " + g + e(2497);
      var y = x[e(1548)].items && x.schema[e(2386)][e(2043)], S = Array[e(1396)](y);
      if (!y || y == "object" || y == e(1912) || S && (y[e(417)](e(1791)) >= 0 || y[e(417)](e(1912)) >= 0)) s += e(525) + l + e(1266) + l + e(2294) + g + " = false; break outer; } } } ";
      else {
        s += " var itemIndices = {}, item; for (;i--;) { var item = " + l + e(155);
        var E = e(2177) + (S ? "s" : "");
        s += e(1762) + x.util[E](y, "item", x[e(1364)][e(1856)], !0) + ") continue; ", S && (s += e(327)), s += " if (typeof itemIndices[item] == 'number') { " + g + e(865);
      }
      s += e(701), h && (s += e(913)), s += e(1067) + g + e(571);
      var O = O || [];
      O.push(s), s = "", x.createErrors !== !1 ? (s += e(762) + e(143) + e(1232) + x[e(1484)] + " , schemaPath: " + x[e(644)][e(1668)](d) + " , params: { i: i, j: j } ", x[e(1364)][e(1018)] !== !1 && (s += e(807)), x[e(1364)][e(2530)] && (s += " , schema:  ", h ? s += "validate.schema" + u : s += "" + c, s += e(1479) + x[e(1640)] + e(539) + l + " "), s += " } ") : s += e(2454);
      var q = s;
      s = O.pop(), !x.compositeRule && f ? x[e(2591)] ? s += e(2607) + q + e(2488) : s += " validate.errors = [" + q + e(388) : s += e(1542) + q + e(1638), s += e(701), f && (s += " else { ");
    } else f && (s += e(549));
    return s;
  }), Pt;
}
var Rt, $a;
function cc() {
  return $a || ($a = 1, Rt = { $ref: W2(), allOf: Z2(), anyOf: B2(), $comment: K2(), const: G2(), contains: J2(), dependencies: Q2(), enum: X2(), format: Y2(), if: _2(), items: ec(), maximum: Ea(), minimum: Ea(), maxItems: Pa(), minItems: Pa(), maxLength: Ca(), minLength: Ca(), maxProperties: Na(), minProperties: Na(), multipleOf: xc(), not: tc(), oneOf: rc(), pattern: ac(), properties: sc(), propertyNames: nc(), required: ic(), uniqueItems: oc(), validate: fn() }), Rt;
}
var Ct, za;
function uc() {
  if (za) return Ct;
  za = 1;
  var i = cc(), x = Ze().toHash;
  return Ct = function() {
    const a = B;
    var e = [{ type: "number", rules: [{ maximum: [a(2355)] }, { minimum: [a(2217)] }, a(2019), a(1089)] }, { type: a(718), rules: [a(1736), "minLength", "pattern", a(1089)] }, { type: a(1912), rules: [a(2485), a(234), a(2386), a(995), a(143)] }, { type: a(1791), rules: [a(179), a(828), a(2344), a(2255), a(111), { properties: ["additionalProperties", a(392)] }] }, { rules: ["$ref", a(2032), a(1497), a(923), a(341), a(2222), a(350), "if"] }], s = ["type", a(885)], n = [a(1049), a(562), "id", a(1088), a(171), a(2353), a(1378), a(1535), a(1383), "examples", a(2599), "writeOnly", a(2361), "contentEncoding", a(1426), a(1124), a(347)], o = [a(191), a(1395), "string", a(1912), a(1791), a(1488), a(1237)];
    return e[a(1068)] = x(s), e[a(876)] = x(o), e.forEach(function(c) {
      const u = a;
      c[u(1901)] = c[u(1901)][u(2388)](function(d) {
        const f = u;
        var l;
        if (typeof d == f(1791)) {
          var g = Object[f(1574)](d)[0];
          l = d[g], d = g, l[f(1634)](function(m) {
            const y = f;
            s[y(1131)](m), e[y(1068)][m] = !0;
          });
        }
        s.push(d);
        var h = e[f(1068)][d] = { keyword: d, code: i[d], implements: l };
        return h;
      }), e.all[u(885)] = { keyword: "$comment", code: i[u(885)] }, c[u(2043)] && (e[u(876)][c.type] = c);
    }), e[a(2069)] = x(s.concat(n)), e[a(194)] = {}, e;
  }, Ct;
}
var Ft, Ha;
function dc() {
  const i = r;
  if (Ha) return Ft;
  Ha = 1;
  var x = [i(2019), i(2061), i(2355), i(1691), i(2217), i(1736), "minLength", i(1709), i(1426), i(2485), i(234), i(143), i(179), "minProperties", "required", i(2432), "enum", "format", i(2032)];
  return Ft = function(t, a) {
    const e = i;
    for (var s = 0; s < a[e(520)]; s++) {
      t = JSON[e(686)](JSON.stringify(t));
      var n = a[s][e(2068)]("/"), o = t, c;
      for (c = 1; c < n[e(520)]; c++) o = o[n[c]];
      for (c = 0; c < x[e(520)]; c++) {
        var u = x[c], d = o[u];
        d && (o[u] = { anyOf: [d, { $ref: e(1861) }] });
      }
    }
    return t;
  }, Ft;
}
var Nt, Ua;
function fc() {
  const i = r;
  if (Ua) return Nt;
  Ua = 1;
  var x = cr()[i(281)];
  Nt = t;
  function t(a, e, s) {
    const n = i;
    var o = this;
    if (typeof this[n(1127)][n(631)] != "function") throw new Error(n(1851));
    typeof e == "function" && (s = e, e = void 0);
    var c = u(a)[n(1124)](function() {
      const f = n;
      var l = o[f(186)](a, void 0, e);
      return l[f(1485)] || d(l);
    });
    return s && c[n(1124)](function(f) {
      s(null, f);
    }, s), c;
    function u(f) {
      const l = n;
      var g = f[l(1049)];
      return g && !o.getSchema(g) ? t.call(o, { $ref: g }, !0) : Promise[l(772)]();
    }
    function d(f) {
      const l = n;
      try {
        return o[l(2170)](f);
      } catch (h) {
        if (h instanceof x) return g(h);
        throw h;
      }
      function g(h) {
        const m = l;
        var y = h[m(460)];
        if (O(y)) throw new Error("Schema " + y + m(114) + h.missingRef + m(1221));
        var S = o[m(1487)][y];
        return !S && (S = o._loadingSchemas[y] = o._opts[m(631)](y), S[m(1124)](E, E)), S[m(1124)](function(q) {
          const I = m;
          if (!O(y)) return u(q)[I(1124)](function() {
            O(y) || o.addSchema(q, y, void 0, e);
          });
        }).then(function() {
          return d(f);
        });
        function E() {
          delete o._loadingSchemas[y];
        }
        function O(q) {
          const I = m;
          return o[I(1153)][q] || o[I(436)][q];
        }
      }
    }
  }
  return Nt;
}
var qt, Va;
function lc() {
  return Va || (Va = 1, qt = function(x, t, a) {
    const e = B;
    var s = " ", n = x.level, o = x[e(1028)], c = x.schema[t], u = x[e(1640)] + x[e(644)][e(1569)](t), d = x.errSchemaPath + "/" + t, f = !x[e(1364)].allErrors, l, g = e(1021) + (o || ""), h = e(481) + n, m = "errs__" + n, y = x[e(1364)][e(1088)] && c && c[e(1088)], S;
    y ? (s += e(1305) + n + " = " + x[e(644)][e(2348)](c[e(1088)], o, x.dataPathArr) + "; ", S = e(1548) + n) : S = c;
    var E = this, O = e(2321) + n, q = E[e(2321)], I = "", P, T, D, j, M;
    if (y && q[e(1088)]) {
      M = e(2342) + n;
      var F = q[e(1742)];
      s += " var " + O + e(736) + t + e(1626) + M + e(1572) + O + e(1527);
    } else {
      if (j = x[e(1685)](E, c, x[e(1548)], x), !j) return;
      S = "validate.schema" + u, M = j[e(1277)], P = q[e(547)], T = q[e(1834)], D = q[e(584)];
    }
    var C = M + e(452), U = "i" + n, H = e(780) + n, V = q[e(2591)];
    if (V && !x.async) throw new Error(e(1967));
    if (!(T || D) && (s += "" + C + " = null;"), s += "var " + m + " = errors;var " + h + ";", y && q.$data && (I += "}", s += e(1762) + S + " === undefined) { " + h + e(1867), F && (I += "}", s += " " + h + e(1572) + O + e(1273) + S + e(1149) + h + e(1381))), T) q.statements ? s += " " + j[e(1485)] + " " : s += " " + h + e(1572) + j[e(1485)] + "; ";
    else if (D) {
      var Q = x.util[e(2601)](x), I = "";
      Q[e(689)]++;
      var c0 = "valid" + Q.level;
      Q.schema = j[e(1485)], Q[e(1640)] = "";
      var u0 = x.compositeRule;
      x[e(1391)] = Q[e(1391)] = !0;
      var s0 = x[e(1485)](Q).replace(/validate\.schema/g, M);
      x[e(1391)] = Q[e(1391)] = u0, s += " " + s0;
    } else {
      var n0 = n0 || [];
      n0[e(1131)](s), s = "", s += "  " + M + e(1476), x.opts[e(833)] ? s += e(309) : s += e(2006), P || q[e(1548)] === !1 ? s += e(1968) + g + " " : s += e(1968) + S + " , " + g + e(224) + x[e(1640)] + " ", s += " , (dataPath || '')", x[e(1484)] != '""' && (s += e(1782) + x[e(1484)]);
      var m0 = o ? e(1021) + (o - 1 || "") : e(2012), w0 = o ? x.dataPathArr[o] : e(2089);
      s += e(1968) + m0 + e(1968) + w0 + " , rootData )  ";
      var b0 = s;
      s = n0[e(1533)](), q.errors === !1 ? (s += " " + h + e(1572), V && (s += e(326)), s += "" + b0 + "; ") : V ? (C = e(723) + n, s += e(2570) + C + e(1915) + h + e(1664) + b0 + e(2573) + h + e(651) + C + e(1889)) : s += " " + C + e(1075) + h + e(1572) + b0 + "; ";
    }
    if (q[e(1758)] && (s += " if (" + m0 + ") " + g + e(1572) + m0 + "[" + w0 + "];"), s += "" + I, q.valid) f && (s += e(549));
    else {
      s += e(2298), q.valid === void 0 ? (s += " !", D ? s += "" + c0 : s += "" + h) : s += " " + !q.valid + " ", s += ") { ", l = E[e(832)];
      var n0 = n0 || [];
      n0[e(1131)](s), s = "";
      var n0 = n0 || [];
      n0[e(1131)](s), s = "", x.createErrors !== !1 ? (s += e(762) + (l || e(194)) + e(1232) + x.errorPath + e(2535) + x.util.toQuotedString(d) + e(1403) + E[e(832)] + e(645), x.opts.messages !== !1 && (s += e(688) + E.keyword + `" keyword validation' `), x[e(1364)][e(2530)] && (s += e(944) + u + " , parentSchema: validate.schema" + x[e(1640)] + e(539) + g + " "), s += e(701)) : s += " {} ";
      var D0 = s;
      s = n0[e(1533)](), !x[e(1391)] && f ? x[e(2591)] ? s += e(2607) + D0 + e(2488) : s += e(673) + D0 + e(388) : s += e(1542) + D0 + e(1638);
      var R0 = s;
      s = n0[e(1533)](), T ? q[e(502)] ? q[e(502)] != e(230) && (s += e(512) + U + "=" + m + "; " + U + e(1994) + U + "++) { var " + H + e(2174) + U + e(2037) + H + e(1110) + H + e(1185) + x[e(1484)] + "; if (" + H + e(434) + H + e(2569) + d + e(602), x[e(1364)][e(2530)] && (s += " " + H + e(848) + S + "; " + H + e(738) + g + "; "), s += e(701)) : q[e(502)] === !1 ? s += " " + R0 + " " : (s += e(1762) + m + e(2326) + R0 + e(277) + U + "=" + m + "; " + U + e(1994) + U + e(2465) + H + " = vErrors[" + U + e(2037) + H + e(1110) + H + e(1185) + x[e(1484)] + e(2053) + H + e(434) + H + e(2569) + d + e(602), x[e(1364)][e(2530)] && (s += " " + H + ".schema = " + S + "; " + H + e(738) + g + "; "), s += " } } ") : D ? (s += e(2564), x[e(1987)] !== !1 ? (s += e(762) + (l || e(194)) + e(1232) + x[e(1484)] + e(2535) + x.util[e(1668)](d) + e(1403) + E[e(832)] + e(645), x.opts[e(1018)] !== !1 && (s += e(688) + E.keyword + e(2562)), x.opts[e(2530)] && (s += e(944) + u + e(1447) + x[e(1640)] + " , data: " + g + " "), s += e(701)) : s += e(2454), s += e(1638), !x[e(1391)] && f && (x.async ? s += e(1102) : s += e(501))) : q[e(502)] === !1 ? s += " " + R0 + " " : (s += " if (Array.isArray(" + C + ")) { if (vErrors === null) vErrors = " + C + e(1457) + C + e(804) + U + "=" + m + "; " + U + "<errors; " + U + e(2465) + H + e(2174) + U + e(2037) + H + ".dataPath === undefined) " + H + e(1185) + x[e(1484)] + e(1724) + H + e(2569) + d + '";  ', x[e(1364)].verbose && (s += " " + H + e(848) + S + "; " + H + e(738) + g + "; "), s += e(878) + R0 + e(701)), s += e(701), f && (s += " else { ");
    }
    return s;
  }), qt;
}
const hc = r(2451), pc = r(2451), mc = r(1229), gc = { schemaArray: { type: r(1912), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: r(1395), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: [r(1912), r(1488), r(1395), "null", r(191), r(1791), r(718)] }, stringArray: { type: r(1912), items: { type: "string" }, uniqueItems: !0, default: [] } }, bc = [r(1791), "boolean"], yc = { $id: { type: r(718), format: r(1672) }, $schema: { type: r(718), format: r(2632) }, $ref: { type: r(718), format: r(1672) }, $comment: { type: r(718) }, title: { type: r(718) }, description: { type: "string" }, default: !0, readOnly: { type: r(1488), default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: r(191) }, exclusiveMaximum: { type: r(191) }, minimum: { type: "number" }, exclusiveMinimum: { type: r(191) }, maxLength: { $ref: r(2124) }, minLength: { $ref: r(682) }, pattern: { type: "string", format: r(2185) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: r(1168) }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: r(682) }, uniqueItems: { type: r(1488), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: r(2124) }, minProperties: { $ref: r(682) }, required: { $ref: r(2441) }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: r(1791), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: r(1791), additionalProperties: { $ref: "#" }, propertyNames: { format: r(2185) }, default: {} }, dependencies: { type: r(1791), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: r(2441) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: r(1912), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: r(2001) }, { type: r(1912), items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: r(718) }, contentMediaType: { type: "string" }, contentEncoding: { type: r(718) }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: r(1168) }, anyOf: { $ref: r(1168) }, oneOf: { $ref: r(1168) }, not: { $ref: "#" } }, ln = { $schema: hc, $id: pc, title: mc, definitions: gc, type: bc, properties: yc, default: !0 };
var Tt, Wa;
function vc() {
  const i = r;
  if (Wa) return Tt;
  Wa = 1;
  var x = ln;
  return Tt = { $id: i(300), definitions: { simpleTypes: x[i(1383)].simpleTypes }, type: i(1791), dependencies: { schema: [i(1485)], $data: [i(1485)], statements: [i(1834)], valid: { not: { required: [i(584)] } } }, properties: { type: x[i(402)].type, schema: { type: i(1488) }, statements: { type: i(1488) }, dependencies: { type: "array", items: { type: "string" } }, metaSchema: { type: i(1791) }, modifying: { type: i(1488) }, valid: { type: i(1488) }, $data: { type: i(1488) }, async: { type: i(1488) }, errors: { anyOf: [{ type: i(1488) }, { const: i(230) }] } } }, Tt;
}
var At, Za;
function wc() {
  if (Za) return At;
  Za = 1;
  var i = /^[a-z_$][a-z0-9_$-]*$/i, x = lc(), t = vc();
  At = { add: a, get: e, remove: s, validate: n };
  function a(o, c) {
    const u = B;
    var d = this.RULES;
    if (d[u(2069)][o]) throw new Error(u(2496) + o + u(1871));
    if (!i[u(706)](o)) throw new Error(u(2496) + o + u(920));
    if (c) {
      this[u(242)](c, !0);
      var f = c[u(2043)];
      if (Array[u(1396)](f))
        for (var l = 0; l < f[u(520)]; l++) h(o, f[l], c);
      else h(o, f, c);
      var g = c[u(1939)];
      g && (c[u(1088)] && this[u(1127)].$data && (g = { anyOf: [g, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] }), c.validateSchema = this[u(547)](g, !0));
    }
    d.keywords[o] = d[u(1068)][o] = !0;
    function h(m, y, S) {
      const E = u;
      for (var O, q = 0; q < d[E(520)]; q++) {
        var I = d[q];
        if (I[E(2043)] == y) {
          O = I;
          break;
        }
      }
      !O && (O = { type: y, rules: [] }, d[E(1131)](O));
      var P = { keyword: m, definition: S, custom: !0, code: x, implements: S[E(2230)] };
      O[E(1901)][E(1131)](P), d[E(194)][m] = P;
    }
    return this;
  }
  function e(o) {
    const c = B;
    var u = this[c(1348)][c(194)][o];
    return u ? u[c(2321)] : this.RULES[c(2069)][o] || !1;
  }
  function s(o) {
    const c = B;
    var u = this[c(1348)];
    delete u[c(2069)][o], delete u[c(1068)][o], delete u[c(194)][o];
    for (var d = 0; d < u[c(520)]; d++)
      for (var f = u[d].rules, l = 0; l < f.length; l++)
        if (f[l][c(832)] == o) {
          f[c(925)](l, 1);
          break;
        }
    return this;
  }
  function n(o, c) {
    const u = B;
    n[u(502)] = null;
    var d = this[u(1508)] = this[u(1508)] || this.compile(t, !0);
    if (d(o)) return !0;
    if (n.errors = d[u(502)], c) throw new Error(u(1665) + this[u(2133)](d[u(502)]));
    return !1;
  }
  return At;
}
const Sc = "http://json-schema.org/draft-07/schema#", kc = r(1861), Ec = r(351), Ic = "object", Pc = [r(1088)], Rc = { $data: { type: r(718), anyOf: [{ format: "relative-json-pointer" }, { format: r(1461) }] } }, Cc = !1, Fc = { $schema: Sc, $id: kc, description: Ec, type: Ic, required: Pc, properties: Rc, additionalProperties: Cc };
var Ot, Ba;
function Nc() {
  const i = r;
  if (Ba) return Ot;
  Ba = 1;
  var x = H2(), t = or(), a = U2(), e = un(), s = dn(), n = V2(), o = uc(), c = dc(), u = Ze();
  Ot = m, m[i(672)].validate = y, m[i(672)].compile = S, m[i(672)].addSchema = E, m[i(672)][i(2072)] = O, m[i(672)][i(1742)] = q, m[i(672)][i(1118)] = P, m[i(672)][i(2048)] = j, m[i(672)][i(2377)] = u0, m[i(672)][i(2133)] = c0, m.prototype[i(186)] = F, m[i(672)][i(2170)] = C, m[i(672)][i(405)] = fc();
  var d = wc();
  m.prototype.addKeyword = d.add, m[i(672)][i(2282)] = d.get, m[i(672)][i(124)] = d[i(352)], m.prototype[i(242)] = d[i(1485)];
  var f = cr();
  m[i(1558)] = f[i(1467)], m.MissingRefError = f[i(281)], m.$dataMetaSchema = c;
  var l = i(1799), g = ["removeAdditional", i(193), i(1536), i(295)], h = ["/properties"];
  function m(A) {
    const N = i;
    if (!(this instanceof m)) return new m(A);
    A = this._opts = u[N(2601)](A) || {}, R0(this), this[N(436)] = {}, this[N(1153)] = {}, this[N(318)] = {}, this._formats = n(A.format), this[N(1074)] = A.cache || new a(), this[N(1487)] = {}, this[N(423)] = [], this[N(1348)] = o(), this[N(1321)] = U(A), A.loopRequired = A.loopRequired || 1 / 0, A[N(1772)] == "property" && (A[N(590)] = !0), A[N(1972)] === void 0 && (A[N(1972)] = s), this._metaOpts = D0(this), A.formats && m0(this), A[N(2069)] && w0(this), s0(this), typeof A[N(1596)] == N(1791) && this[N(2072)](A[N(1596)]), A[N(1859)] && this[N(1280)](N(1859), { metaSchema: { type: N(1488) } }), n0(this);
  }
  function y(A, N) {
    const L = i;
    var Y;
    if (typeof A == "string") {
      if (Y = this[L(1118)](A), !Y) throw new Error(L(640) + A + '"');
    } else {
      var W = this[L(186)](A);
      Y = W[L(1485)] || this[L(2170)](W);
    }
    var Z = Y(N);
    return Y[L(171)] !== !0 && (this.errors = Y.errors), Z;
  }
  function S(A, N) {
    const L = i;
    var Y = this[L(186)](A, void 0, N);
    return Y[L(1485)] || this[L(2170)](Y);
  }
  function E(A, N, L, Y) {
    const W = i;
    if (Array[W(1396)](A)) {
      for (var Z = 0; Z < A[W(520)]; Z++) this[W(286)](A[Z], void 0, L, Y);
      return this;
    }
    var i0 = this._getId(A);
    if (i0 !== void 0 && typeof i0 != W(718)) throw new Error(W(777));
    return N = t.normalizeId(N || i0), b0(this, N), this[W(436)][N] = this[W(186)](A, L, Y, !0), this;
  }
  function O(A, N, L) {
    return this[i(286)](A, N, L, !0), this;
  }
  function q(A, N) {
    const L = i;
    var Y = A.$schema;
    if (Y !== void 0 && typeof Y != L(718)) throw new Error("$schema must be a string");
    if (Y = Y || this._opts[L(1995)] || I(this), !Y) return this.logger.warn(L(601)), this[L(502)] = null, !0;
    var W = this[L(1485)](Y, A);
    if (!W && N) {
      var Z = L(1418) + this[L(2133)]();
      if (this[L(1127)][L(1742)] == L(811)) this[L(891)][L(259)](Z);
      else throw new Error(Z);
    }
    return W;
  }
  function I(A) {
    const N = i;
    var L = A._opts[N(1596)];
    return A[N(1127)][N(1995)] = typeof L == N(1791) ? A[N(1321)](L) || L : A.getSchema(l) ? l : void 0, A[N(1127)][N(1995)];
  }
  function P(A) {
    const N = i;
    var L = D(this, A);
    switch (typeof L) {
      case "object":
        return L[N(1485)] || this[N(2170)](L);
      case N(718):
        return this[N(1118)](L);
      case N(2550):
        return T(this, A);
    }
  }
  function T(A, N) {
    const L = i;
    var Y = t[L(1548)][L(422)](A, { schema: {} }, N);
    if (Y) {
      var W = Y[L(1548)], Z = Y[L(1512)], i0 = Y[L(2011)], o0 = x.call(A, W, Z, void 0, i0);
      return A._fragments[N] = new e({ ref: N, fragment: !0, schema: W, root: Z, baseId: i0, validate: o0 }), o0;
    }
  }
  function D(A, N) {
    const L = i;
    return N = t.normalizeId(N), A[L(436)][N] || A[L(1153)][N] || A[L(318)][N];
  }
  function j(A) {
    const N = i;
    if (A instanceof RegExp) return M(this, this[N(436)], A), M(this, this[N(1153)], A), this;
    switch (typeof A) {
      case N(2550):
        return M(this, this[N(436)]), M(this, this[N(1153)]), this[N(1074)].clear(), this;
      case N(718):
        var L = D(this, A);
        return L && this[N(1074)][N(1397)](L.cacheKey), delete this[N(436)][A], delete this[N(1153)][A], this;
      case "object":
        var Y = this[N(1127)].serialize, W = Y ? Y(A) : A;
        this._cache.del(W);
        var Z = this[N(1321)](A);
        Z && (Z = t[N(162)](Z), delete this[N(436)][Z], delete this[N(1153)][Z]);
    }
    return this;
  }
  function M(A, N, L) {
    const Y = i;
    for (var W in N) {
      var Z = N[W];
      !Z[Y(1596)] && (!L || L[Y(706)](W)) && (A[Y(1074)][Y(1397)](Z[Y(2028)]), delete N[W]);
    }
  }
  function F(A, N, L, Y) {
    const W = i;
    if (typeof A != W(1791) && typeof A != "boolean") throw new Error(W(2359));
    var Z = this._opts[W(1972)], i0 = Z ? Z(A) : A, o0 = this[W(1074)][W(2311)](i0);
    if (o0) return o0;
    Y = Y || this[W(1127)][W(761)] !== !1;
    var G = t[W(162)](this[W(1321)](A));
    G && Y && b0(this, G);
    var M0 = this[W(1127)].validateSchema !== !1 && !N, L0;
    M0 && !(L0 = G && G == t[W(162)](A[W(1049)])) && this[W(1742)](A, !0);
    var T0 = t[W(1151)][W(422)](this, A), q0 = new e({ id: G, schema: A, localRefs: T0, cacheKey: i0, meta: L });
    return G[0] != "#" && Y && (this._refs[G] = q0), this._cache[W(681)](i0, q0), M0 && L0 && this[W(1742)](A, !0), q0;
  }
  function C(A, N) {
    const L = i;
    if (A.compiling)
      return A.validate = Z, Z.schema = A.schema, Z.errors = null, Z[L(1512)] = N || Z, A[L(1548)][L(171)] === !0 && (Z.$async = !0), Z;
    A[L(1790)] = !0;
    var Y;
    A.meta && (Y = this[L(1127)], this[L(1127)] = this[L(471)]);
    var W;
    try {
      W = x[L(422)](this, A[L(1548)], N, A[L(1503)]);
    } catch (i0) {
      throw delete A[L(1485)], i0;
    } finally {
      A[L(1790)] = !1, A[L(1596)] && (this._opts = Y);
    }
    return A[L(1485)] = W, A[L(1571)] = W[L(1571)], A[L(1507)] = W[L(1507)], A.root = W[L(1512)], W;
    function Z() {
      const i0 = L;
      var o0 = A.validate, G = o0[i0(560)](this, arguments);
      return Z[i0(502)] = o0.errors, G;
    }
  }
  function U(A) {
    const N = i;
    switch (A[N(1547)]) {
      case N(2629):
        return Q;
      case "id":
        return H;
      default:
        return V;
    }
  }
  function H(A) {
    const N = i;
    return A[N(562)] && this.logger.warn(N(1189), A[N(562)]), A.id;
  }
  function V(A) {
    const N = i;
    return A.id && this[N(891)][N(183)]("schema id ignored", A.id), A.$id;
  }
  function Q(A) {
    const N = i;
    if (A[N(562)] && A.id && A[N(562)] != A.id) throw new Error(N(2630));
    return A[N(562)] || A.id;
  }
  function c0(A, N) {
    const L = i;
    if (A = A || this[L(502)], !A) return L(2373);
    N = N || {};
    for (var Y = N.separator === void 0 ? ", " : N[L(2145)], W = N.dataVar === void 0 ? L(1021) : N[L(139)], Z = "", i0 = 0; i0 < A.length; i0++) {
      var o0 = A[i0];
      o0 && (Z += W + o0[L(755)] + " " + o0.message + Y);
    }
    return Z[L(1597)](0, -Y[L(520)]);
  }
  function u0(A, N) {
    const L = i;
    return typeof N == "string" && (N = new RegExp(N)), this[L(368)][A] = N, this;
  }
  function s0(A) {
    const N = i;
    var L;
    if (A[N(1127)][N(1088)] && (L = Fc, A[N(2072)](L, L.$id, !0)), A._opts[N(1596)] !== !1) {
      var Y = ln;
      A[N(1127)][N(1088)] && (Y = c(Y, h)), A.addMetaSchema(Y, l, !0), A[N(1153)][N(2248)] = l;
    }
  }
  function n0(A) {
    const N = i;
    var L = A[N(1127)][N(1869)];
    if (L)
      if (Array[N(1396)](L)) A[N(286)](L);
      else
        for (var Y in L) A.addSchema(L[Y], Y);
  }
  function m0(A) {
    const N = i;
    for (var L in A[N(1127)][N(2071)]) {
      var Y = A[N(1127)][N(2071)][L];
      A[N(2377)](L, Y);
    }
  }
  function w0(A) {
    const N = i;
    for (var L in A[N(1127)].keywords) {
      var Y = A[N(1127)][N(2069)][L];
      A[N(1280)](L, Y);
    }
  }
  function b0(A, N) {
    const L = i;
    if (A[L(436)][N] || A[L(1153)][N]) throw new Error(L(2516) + N + L(2026));
  }
  function D0(A) {
    const N = i;
    for (var L = u[N(2601)](A._opts), Y = 0; Y < g[N(520)]; Y++) delete L[g[Y]];
    return L;
  }
  function R0(A) {
    const N = i;
    var L = A[N(1127)][N(891)];
    if (L === !1) A[N(891)] = { log: Q0, warn: Q0, error: Q0 };
    else {
      if (L === void 0 && (L = console), !(typeof L == N(1791) && L[N(811)] && L[N(183)] && L.error)) throw new Error("logger must implement log, warn and error methods");
      A[N(891)] = L;
    }
  }
  function Q0() {
  }
  return Ot;
}
var qc = Nc();
const Tc = Ls(qc);
class Ac extends D2 {
  constructor(x, t) {
    const a = r;
    var e;
    super(t), this[a(393)] = x, this[a(1123)] = (e = t == null ? void 0 : t[a(554)]) !== null && e !== void 0 ? e : {}, this[a(140)] = t == null ? void 0 : t[a(868)], this[a(2134)](Xs, (s) => this._oninitialize(s)), this[a(1108)](Ys, () => {
      const s = a;
      var n;
      return (n = this[s(486)]) === null || n === void 0 ? void 0 : n[s(422)](this);
    });
  }
  [r(116)](x) {
    const t = r;
    if (this[t(655)]) throw new Error(t(886));
    this[t(1123)] = j2(this[t(1123)], x);
  }
  assertCapabilityForMethod(x) {
    const t = r;
    var a, e, s;
    switch (x) {
      case t(400):
        if (!(!((a = this[t(1822)]) === null || a === void 0) && a.sampling)) throw new Error(t(346) + x + ")");
        break;
      case t(2571):
        if (!(!((e = this[t(1822)]) === null || e === void 0) && e[t(1768)])) throw new Error(t(1163) + x + ")");
        break;
      case t(2009):
        if (!(!((s = this._clientCapabilities) === null || s === void 0) && s[t(413)])) throw new Error(t(1114) + x + ")");
        break;
    }
  }
  assertNotificationCapability(x) {
    const t = r;
    switch (x) {
      case t(2500):
        if (!this[t(1123)][t(1798)]) throw new Error(t(450) + x + ")");
        break;
      case "notifications/resources/updated":
      case t(203):
        if (!this[t(1123)].resources) throw new Error(t(2250) + x + ")");
        break;
      case t(1199):
        if (!this._capabilities.tools) throw new Error("Server does not support notifying of tool list changes (required for " + x + ")");
        break;
      case t(790):
        if (!this[t(1123)][t(1583)]) throw new Error(t(603) + x + ")");
        break;
    }
  }
  [r(1604)](x) {
    const t = r;
    switch (x) {
      case t(400):
        if (!this[t(1123)][t(712)]) throw new Error(t(2593) + x + ")");
        break;
      case t(2127):
        if (!this._capabilities[t(1798)]) throw new Error(t(450) + x + ")");
        break;
      case t(2459):
      case t(380):
        if (!this._capabilities.prompts) throw new Error("Server does not support prompts (required for " + x + ")");
        break;
      case t(266):
      case t(2422):
      case t(1142):
        if (!this[t(1123)][t(565)]) throw new Error(t(345) + x + ")");
        break;
      case t(548):
      case "tools/list":
        if (!this[t(1123)][t(999)]) throw new Error(t(589) + x + ")");
        break;
    }
  }
  async [r(1406)](x) {
    const t = r, a = x[t(2179)][t(2397)];
    return this._clientCapabilities = x[t(2179)][t(554)], this[t(1039)] = x[t(2179)][t(1222)], { protocolVersion: Ao.includes(a) ? a : Vs, capabilities: this[t(1704)](), serverInfo: this[t(393)], ...this[t(140)] && { instructions: this[t(140)] } };
  }
  [r(391)]() {
    return this[r(1822)];
  }
  [r(2113)]() {
    return this[r(1039)];
  }
  getCapabilities() {
    return this._capabilities;
  }
  async [r(1841)]() {
    const x = r;
    return this.request({ method: x(1841) }, Xt);
  }
  async createMessage(x, t) {
    const a = r;
    return this[a(2300)]({ method: a(400), params: x }, nn, t);
  }
  async elicitInput(x, t) {
    const a = r, e = await this[a(2300)]({ method: a(2571), params: x }, on, t);
    if (e.action === a(670) && e[a(177)]) try {
      const s = new Tc(), n = s.compile(x[a(627)]);
      if (!n(e.content)) throw new Ae(ye[a(1061)], "Elicitation response content does not match requested schema: " + s.errorsText(n[a(502)]));
    } catch (s) {
      throw s instanceof Ae ? s : new Ae(ye.InternalError, a(2476) + s);
    }
    return e;
  }
  async listRoots(x, t) {
    const a = r;
    return this[a(2300)]({ method: a(2009), params: x }, cn, t);
  }
  async sendLoggingMessage(x) {
    const t = r;
    return this.notification({ method: t(2500), params: x });
  }
  async [r(1171)](x) {
    const t = r;
    return this[t(1104)]({ method: t(2596), params: x });
  }
  async [r(646)]() {
    const x = r;
    return this.notification({ method: x(203) });
  }
  async [r(1897)]() {
    const x = r;
    return this[x(1104)]({ method: x(1199) });
  }
  async [r(1350)]() {
    const x = r;
    return this[x(1104)]({ method: x(790) });
  }
}
class Oc extends Error {
  constructor(x, t) {
    const a = r;
    super(a(1842) + x + a(1251) + t + "ms"), this[a(307)] = "HeartbeatTimeoutError";
  }
}
const lx = /* @__PURE__ */ new Map();
class Dc {
  constructor(x) {
    const t = r;
    if (this.messageQueue = [], this.lastPongReceived = Date[t(1491)](), lx.has(x[t(252)])) {
      const a = lx[t(2311)](x[t(252)]);
      a && a[t(491)]();
    }
    this[t(252)] = x.posterIdentifier, this[t(1040)] = x[t(1040)], this.addMessageEventListener = x.addMessageEventListener, this[t(557)] = x[t(557)], this.heartbeatInterval = x[t(272)] ?? 5e3, this[t(1614)] = x.heartbeatTimeout ?? 5e3, this[t(1948)] = x[t(1948)] ?? !1, lx.set(this[t(252)], this), this.listenMessageCallback = this.listenMessageCallback.bind(this), this[t(2030)] = this[t(2181)](this[t(1618)]);
  }
  [r(1618)](x) {
    const t = r;
    if (x[t(252)] === this.posterIdentifier) {
      if (x[t(2392)] === t(1914)) {
        x[t(2043)] === t(1841) && !this[t(1948)] ? this[t(1040)]({ channel: t(1914), posterIdentifier: this[t(252)], type: t(1398), timestamp: x[t(2010)] }) : x.type === t(1398) && (this[t(1699)] = Date[t(1491)](), this.heartbeatTimeoutTimer && (clearTimeout(this[t(2267)]), this[t(2267)] = void 0));
        return;
      }
      x[t(2392)] === t(1681) && (this.onmessage && t(1401) in x ? this[t(2613)](x[t(1401)]) : t(1401) in x && this[t(2594)].push(x.payload));
    }
  }
  async [r(742)]() {
    const x = r;
    for (; this[x(2594)][x(520)] > 0; ) {
      const t = this[x(2594)][x(579)]();
      t && this[x(2613)] && this.onmessage(t);
    }
    this.startHeartbeat();
  }
  startHeartbeat() {
    const x = r;
    this[x(519)] = setInterval(() => {
      const t = x, a = Date[t(1491)]();
      this.messagePoster({ channel: "sdppp-heartbeat", posterIdentifier: this[t(252)], type: t(1841), timestamp: a }), this.heartbeatTimeoutTimer = setTimeout(() => {
        const e = t, s = new Oc(this.posterIdentifier, this[e(1614)]);
        this.onerror && this[e(2320)](s);
      }, this[t(1614)]);
    }, this.heartbeatInterval);
  }
  async [r(1373)](x, t) {
    const a = r;
    this[a(1040)]({ channel: "sdppp", posterIdentifier: this[a(252)], payload: x });
  }
  async close() {
    const x = r;
    this[x(519)] && (clearInterval(this[x(519)]), this[x(519)] = void 0), this[x(2267)] && (clearTimeout(this.heartbeatTimeoutTimer), this.heartbeatTimeoutTimer = void 0), lx[x(292)](this.posterIdentifier), this[x(557)](this[x(2030)]);
  }
}
const jc = sx[r(1478)]("mesh");
async function hn() {
  const i = r;
  if (!window[i(466)]) return;
  const x = new Dc({ posterIdentifier: i(2323), messagePoster: (e) => {
    const s = i;
    window[s(466)][s(1576)](e, "*");
  }, addMessageEventListener: (e) => {
    const s = i, n = (o) => {
      e(o[B(1021)]);
    };
    return window[s(1656)](s(2235), n), n;
  }, removeMessageEventListener: (e) => {
    window[i(635)]("message", e);
  } });
  x[i(2320)] = (e) => {
    jc(i(2132), e);
  };
  const t = new Ac({ name: i(2323), version: "1.0.0" }, {}), a = new gi(t);
  return await a[i(1098)](x), window[i(466)][i(1576)]({ channel: i(2557), meshName: "comfy", action: i(1098), version: "510" }, "*"), await I0.connect(i(2256), a);
}
const Mc = Object[r(612)](Object[r(2157)]({ __proto__: null, connectUXP: hn, mcpMesh: I0 }, Symbol.toStringTag, { value: r(967) }));
Oe[r(1656)](r(382), (i) => {
  const x = r, t = F0.workflowManager || F0[x(2472)].workflow, a = t[x(609)];
  if (i[x(866)].id !== a.activeState.id) return;
  const e = I0[x(2336)][x(1323)]().widgetableStructure, s = Jt(F0[x(1952)], a);
  mn(s, e) && I0[x(2336)][x(1657)]({ widgetableStructure: s }), I0[x(2336)][x(1657)]({ widgetableValues: Cx(F0[x(1952)]) });
}), Oe[r(1656)](r(1181), () => {
  const i = r;
  I0[i(2336)][i(1657)]({ widgetableValues: Cx(F0[i(1952)]) });
});
let Ka = 0, Ga = !0, Ja = "";
function pn() {
  const i = r;
  requestAnimationFrame(pn);
  const x = F0[i(1740)] || F0.extensionManager.workflow, t = x[i(609)], a = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t.path) || "", s = (t == null ? void 0 : t.isPersisted) || !0;
  if (a === Ka && e === Ja && s === Ga) return;
  const n = Date.now();
  Ka = a, Ja = e, Ga = s;
  const o = Jt(F0[i(1952)], t), c = Cx(F0[i(1952)]);
  I0.store.setState({ widgetableStructure: o, widgetableValues: c }), console[i(811)](i(1819) + (Date[i(1491)]() - n) + "ms"), setTimeout(() => {
    const u = i;
    if (t !== x[u(609)]) return;
    const d = Jt(F0.graph, t), f = Cx(F0[u(1952)]);
    mn(d, o) && I0[u(2336)][u(1657)]({ widgetableStructure: d }), I0.store[u(1657)]({ widgetableValues: f });
  }, 800);
}
requestAnimationFrame(pn);
function mn(i, x) {
  const t = r;
  return i[t(659)].length !== x[t(659)].length || JSON[t(2403)](i[t(659)]) !== JSON[t(2403)](x[t(659)]) || JSON[t(2403)](i.nodes) !== JSON.stringify(x[t(740)]);
}
let Qa = !1;
async function Lc() {
  const i = r;
  if (Qa) return Promise.resolve();
  Oe[i(514)] && I0[i(2336)][i(1657)]({ comfyUserToken: Oe[i(514)] }), Qa = !0;
}
sx.extend(r(2603));
async function $c(i, x, t) {
  const a = r;
  x.addEventListener("progress", ({ detail: n }) => {
    const o = B;
    if (!n) return;
    let c = 0, u = 0;
    !isNaN(n[o(2615)] / n.max) && (c = Math[o(489)](n[o(2615)] / n[o(2428)] * 100));
    const d = n.node, f = graph[o(740)][o(1837)]((l) => l.id == d);
    if (f && f.order) {
      const l = 100 / graph[o(740)][o(520)];
      u = Math[o(489)](f[o(797)] * l) + (c ? c / 100 * l : 0);
    }
    I0[o(2336)][o(1657)]({ progress: c, graphProgress: u });
  }), x[a(1656)](a(1345), (n) => {
    var c;
    const o = a;
    (c = n[o(866)]) != null && c[o(942)] && I0.store.setState({ queueSize: n[o(866)][o(942)].queue_remaining });
  }), x.addEventListener(a(1094), ({ detail: n }) => {
    const o = a;
    if (I0[o(2336)][o(1657)]({ executingNodeTitle: "", executingNodeID: "", lastError: n[o(632)] }), n[o(852)]) {
      const c = i[o(1952)][o(740)][o(1837)]((u) => u.id == n[o(852)]);
      I0[o(2336)].setState({ widgetableErrors: { [n[o(852)]]: "[" + ((c == null ? void 0 : c.title) || n[o(852)]) + "]" + n[o(632)] } });
    }
  }), x[a(1656)](a(420), (n) => {
    const o = a, c = n[o(866)], u = graph[o(740)].find((d) => d.id == c);
    if (u) {
      const d = 100 / graph.nodes[o(520)];
      I0[o(2336)][o(1657)]({ executingNodeTitle: u.title, executingNodeID: u.id, graphProgress: Math.round(u[o(797)] * d) });
    }
  }), x[a(1656)](a(1444), () => {
    I0.store.setState({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x[a(1656)](a(1121), ({ detail: n }) => {
    const o = a;
    I0[o(2336)].setState({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date[o(1491)]() });
  });
  const e = /* @__PURE__ */ new Map();
  x.addEventListener(a(536), (n) => {
    const o = a;
    I0[o(2336)][o(1657)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e.get(n.detail[o(1246)]) || [])[o(2388)]((u) => ({ url: u, thumbnail: u }));
    No(n[o(866)][o(1246)], c), e[o(292)](n.detail[o(1246)]);
  }), x[a(1656)](a(1181), (n) => {
    const o = a, c = e[o(2311)](n.detail.prompt_id) || [];
    n[o(866)][o(2287)] && Array.isArray(n.detail[o(2287)][o(537)]) && n[o(866)].output[o(537)][o(520)] > 0 && c[o(1131)](...n[o(866)][o(2287)].images.filter((u) => u[o(2043)] == o(2287))[o(2388)]((u) => {
      const d = o;
      return location[d(960)] + location[d(1717)] + "api/view?type=" + u.type + d(2246) + encodeURIComponent(u[d(2166)]) + (u[d(987)] ? d(2296) + encodeURIComponent(u[d(987)]) : "");
    })), n[o(866)][o(2287)] && Array[o(1396)](n[o(866)][o(2287)][o(2617)]) && n[o(866)][o(2287)][o(2617)][o(520)] > 0 && c[o(1131)](...n[o(866)][o(2287)][o(2617)][o(2388)]((u) => location.origin + location.pathname + "sd-ppp-static/sdppp_images/" + encodeURIComponent(u))), e[o(2525)](n[o(866)][o(1246)], c);
  });
  let s = null;
  x.addEventListener(a(170), (n) => {
    s = setTimeout(() => {
      const o = B;
      I0[o(2336)][o(1657)]({ comfyWSState: "reconnecting" });
    }, 1e3);
  }), x.addEventListener("reconnected", (n) => {
    const o = a;
    I0[o(2336)][o(1657)]({ comfyWSState: o(993) }), clearTimeout(s);
  });
}
let Dt = [];
(async function() {
  var x, t, a, e, s, n;
  const i = r;
  if (typeof gradioApp == i(2550)) {
    try {
      const o = (t = (x = window.comfyAPI) == null ? void 0 : x[i(2144)]) == null ? void 0 : t.app, c = (e = (a = window[i(1908)]) == null ? void 0 : a.ui) == null ? void 0 : e[i(2611)], u = (n = (s = window.comfyAPI) == null ? void 0 : s[i(1836)]) == null ? void 0 : n[i(1836)];
      if (!o || !u || !c) throw new Error(i(527));
      await Lc(), await hn(), await $c(o, u, c), import(i(311))[i(1124)]((d) => {
        d[i(1535)](_e, 2);
      });
    } catch (o) {
      Dt[i(1131)](o.stack || o[i(2235)] || o);
    }
    await new Promise((o) => setTimeout(o, 2e3)), Dt[i(520)] && console[i(259)](Dt[0]);
  }
})();
