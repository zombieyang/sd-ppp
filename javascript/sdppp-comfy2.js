var Na = Object.defineProperty;
var qa = (i, x, t) => x in i ? Na(i, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[x] = t;
var m0 = (i, x, t) => qa(i, typeof x != "symbol" ? x + "" : x, t);
const n = K;
(function(i, x) {
  const t = K, r = i();
  for (; ; )
    try {
      if (-parseInt(t(2066)) / 1 * (parseInt(t(2486)) / 2) + parseInt(t(2411)) / 3 + parseInt(t(1770)) / 4 + parseInt(t(603)) / 5 * (-parseInt(t(342)) / 6) + -parseInt(t(294)) / 7 * (-parseInt(t(635)) / 8) + -parseInt(t(715)) / 9 + parseInt(t(2509)) / 10 * (parseInt(t(1545)) / 11) === x) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Nx, 682449);
const T0 = window.comfyAPI[n(1614)][n(1614)];
window[n(1751)].ui[n(2560)];
const Oe = window[n(1751)][n(574)][n(574)];
var _s;
class Ta {
  constructor(x) {
    m0(this, _s);
    const t = n;
    this[t(779)] = x;
    const r = this[t(1974)]();
    if (!r.valid) throw new Error(t(555) + r[t(2121)][t(261)](", "));
  }
  [(_s = n(779), n(1974))]() {
    const x = n, t = [];
    (!this[x(779)][x(481)] || Object[x(2109)](this[x(779)][x(481)])[x(1396)] === 0) && t[x(757)](x(517));
    for (const [e, s] of this.definition[x(2293)])
      !this.definition[x(481)][e] && t.push(x(699) + e), !this[x(779)][x(481)][s] && t.push(x(1773) + s);
    const r = this[x(830)]();
    return !r[x(1352)] && t[x(757)](...r[x(2121)]), { valid: t.length === 0, errors: t };
  }
  [n(771)]() {
    const x = n, t = /* @__PURE__ */ new Map();
    for (const r of Object[x(2109)](this.definition[x(481)]))
      t[x(933)](r, []);
    for (const [r, e] of this[x(779)][x(2293)]) {
      const s = t[x(1364)](r) || [];
      s.push(e), t[x(933)](r, s);
    }
    return t;
  }
  [n(830)]() {
    const x = n, t = [], r = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), s = this.buildDirectedAdjacencyList(), a = (o, c) => {
      const u = K;
      if (e[u(879)](o)) {
        const f = c[u(651)](o), l = c[u(1012)](f).concat(o);
        return t[u(757)](u(397) + l[u(261)](u(2539))), !0;
      }
      if (r[u(879)](o)) return !1;
      r.add(o), e[u(2062)](o);
      const d = s[u(1364)](o) || [];
      for (const f of d)
        if (a(f, [...c, o])) return !0;
      return e[u(381)](o), !1;
    };
    for (const o of Object[x(2109)](this.definition[x(481)]))
      !r[x(879)](o) && a(o, []);
    return { valid: t[x(1396)] === 0, errors: t };
  }
  [n(1323)]() {
    const x = n, t = /* @__PURE__ */ new Map();
    for (const r of Object[x(2109)](this[x(779)][x(481)]))
      t[x(933)](r, []);
    for (const [r, e] of this.definition[x(2293)]) {
      const s = t[x(1364)](r) || [];
      s.push(e), t[x(933)](r, s);
      const a = t[x(1364)](e) || [];
      a.push(r), t[x(933)](e, a);
    }
    return t;
  }
  getNeighbors(x) {
    const t = n;
    return this.buildAdjacencyList()[t(1364)](x) || [];
  }
  [n(1787)](x) {
    const t = n;
    return this.definition[t(481)][x];
  }
  [n(1272)]() {
    return Object.keys(this[n(779)].nodes);
  }
  hasEdge(x, t) {
    const r = n;
    return this[r(779)].edges[r(1359)](([e, s]) => e === x && s === t || e === t && s === x);
  }
  [n(500)](x, t) {
    const r = n;
    if (x === t) return [x];
    const e = this[r(1323)](), s = [{ nodeId: x, path: [x] }], a = /* @__PURE__ */ new Set();
    for (; s[r(1396)] > 0; ) {
      const { nodeId: o, path: c } = s[r(2225)]();
      if (a[r(879)](o)) continue;
      if (a[r(2062)](o), o === t) return c;
      const u = e[r(1364)](o) || [];
      for (const d of u)
        !a.has(d) && s[r(757)]({ nodeId: d, path: [...c, d] });
    }
    return null;
  }
  hasPath(x, t) {
    return this.findPath(x, t) !== null;
  }
  getDefinition() {
    return { ...this[n(779)] };
  }
}
const kr = (i) => {
  let x;
  const t = /* @__PURE__ */ new Set(), r = (u, d) => {
    const f = K, l = typeof u == "function" ? u(x) : u;
    if (!Object.is(l, x)) {
      const g = x;
      x = d ?? (typeof l !== f(1507) || l === null) ? l : Object[f(1088)]({}, x, l), t[f(2228)]((h) => h(x, g));
    }
  }, e = () => x, s = () => c, a = (u) => (t.add(u), () => t.delete(u)), o = { setState: r, getState: e, getInitialState: s, subscribe: a }, c = x = i(r, e, o);
  return o;
}, Oa = (i) => i ? kr(i) : kr;
var q0;
(function(i) {
  const x = n;
  i.assertEqual = (s) => {
  };
  function t(s) {
  }
  i[x(432)] = t;
  function r(s) {
    throw new Error();
  }
  i[x(2277)] = r, i[x(1781)] = (s) => {
    const a = {};
    for (const o of s)
      a[o] = o;
    return a;
  }, i[x(1547)] = (s) => {
    const a = x, o = i.objectKeys(s).filter((u) => typeof s[s[u]] !== a(1985)), c = {};
    for (const u of o)
      c[u] = s[u];
    return i[a(2482)](c);
  }, i[x(2482)] = (s) => {
    const a = x;
    return i.objectKeys(s)[a(1227)](function(o) {
      return s[o];
    });
  }, i[x(681)] = typeof Object[x(2109)] === x(1856) ? (s) => Object[x(2109)](s) : (s) => {
    const a = x, o = [];
    for (const c in s)
      Object[a(2498)][a(2165)].call(s, c) && o.push(c);
    return o;
  }, i[x(950)] = (s, a) => {
    for (const o of s)
      if (a(o)) return o;
  }, i[x(995)] = typeof Number[x(995)] === x(1856) ? (s) => Number[x(995)](s) : (s) => typeof s === x(1985) && Number[x(952)](s) && Math[x(1026)](s) === s;
  function e(s, a = x(2377)) {
    const o = x;
    return s[o(1227)]((c) => typeof c === o(1401) ? "'" + c + "'" : c)[o(261)](a);
  }
  i[x(1815)] = e, i[x(2315)] = (s, a) => {
    const o = x;
    return typeof a === o(264) ? a[o(1090)]() : a;
  };
})(q0 || (q0 = {}));
var Er;
(function(i) {
  const x = n;
  i[x(682)] = (t, r) => ({ ...t, ...r });
})(Er || (Er = {}));
const x0 = q0.arrayToEnum([n(1401), n(1247), n(1985), n(1910), "float", n(1588), "date", "bigint", n(2471), "function", n(654), n(417), n(633), n(1507), n(1804), n(601), "void", n(1665), n(1227), n(933)]), Pe = (i) => {
  const x = n;
  switch (typeof i) {
    case x(654):
      return x0[x(654)];
    case x(1401):
      return x0[x(1401)];
    case x(1985):
      return Number[x(1101)](i) ? x0[x(1247)] : x0.number;
    case x(1588):
      return x0[x(1588)];
    case x(1856):
      return x0[x(1856)];
    case "bigint":
      return x0[x(264)];
    case x(2471):
      return x0[x(2471)];
    case "object":
      return Array[x(1606)](i) ? x0[x(633)] : i === null ? x0[x(417)] : i[x(1947)] && typeof i.then === x(1856) && i.catch && typeof i.catch === x(1856) ? x0[x(601)] : typeof Map !== x(654) && i instanceof Map ? x0[x(1227)] : typeof Set !== x(654) && i instanceof Set ? x0.set : typeof Date !== x(654) && i instanceof Date ? x0[x(1813)] : x0[x(1507)];
    default:
      return x0[x(1804)];
  }
}, B = q0[n(1781)]([n(410), n(1605), "custom", "invalid_union", "invalid_union_discriminator", n(1634), "unrecognized_keys", "invalid_arguments", "invalid_return_type", n(629), "invalid_string", n(1039), "too_big", n(2515), "not_multiple_of", n(1521)]);
class Se extends Error {
  get [n(2121)]() {
    return this.issues;
  }
  constructor(x) {
    const t = n;
    super(), this[t(648)] = [], this.addIssue = (e) => {
      const s = t;
      this[s(648)] = [...this[s(648)], e];
    }, this[t(1363)] = (e = []) => {
      const s = t;
      this[s(648)] = [...this[s(648)], ...e];
    };
    const r = new.target[t(2498)];
    Object[t(1454)] ? Object[t(1454)](this, r) : this[t(2048)] = r, this[t(2581)] = t(2299), this[t(648)] = x;
  }
  [n(2330)](x) {
    const t = x || function(s) {
      return s[K(1717)];
    }, r = { _errors: [] }, e = (s) => {
      const a = K;
      for (const o of s[a(648)])
        if (o.code === a(2185)) o[a(491)][a(1227)](e);
        else if (o[a(939)] === a(1416)) e(o.returnTypeError);
        else if (o.code === a(1103)) e(o[a(2414)]);
        else if (o[a(1225)][a(1396)] === 0) r[a(917)][a(757)](t(o));
        else {
          let c = r, u = 0;
          for (; u < o[a(1225)][a(1396)]; ) {
            const d = o[a(1225)][u];
            u === o[a(1225)][a(1396)] - 1 ? (c[d] = c[d] || { _errors: [] }, c[d][a(917)].push(t(o))) : c[d] = c[d] || { _errors: [] }, c = c[d], u++;
          }
        }
    };
    return e(this), r;
  }
  static [n(1664)](x) {
    if (!(x instanceof Se)) throw new Error("Not a ZodError: " + x);
  }
  [n(1090)]() {
    return this[n(1717)];
  }
  get [n(1717)]() {
    const x = n;
    return JSON[x(328)](this.issues, q0[x(2315)], 2);
  }
  get [n(1240)]() {
    const x = n;
    return this[x(648)][x(1396)] === 0;
  }
  [n(1214)](x = (t) => t[n(1717)]) {
    const t = n, r = {}, e = [];
    for (const s of this[t(648)])
      if (s[t(1225)][t(1396)] > 0) {
        const a = s.path[0];
        r[a] = r[a] || [], r[a][t(757)](x(s));
      } else e[t(757)](x(s));
    return { formErrors: e, fieldErrors: r };
  }
  get [n(837)]() {
    return this[n(1214)]();
  }
}
Se[n(2201)] = (i) => new Se(i);
const jt = (i, x) => {
  const t = n;
  let r;
  switch (i[t(939)]) {
    case B[t(410)]:
      i[t(823)] === x0[t(654)] ? r = t(2163) : r = t(374) + i[t(2244)] + t(2171) + i[t(823)];
      break;
    case B.invalid_literal:
      r = "Invalid literal value, expected " + JSON.stringify(i[t(2244)], q0[t(2315)]);
      break;
    case B[t(2429)]:
      r = t(1210) + q0[t(1815)](i.keys, ", ");
      break;
    case B.invalid_union:
      r = t(1799);
      break;
    case B[t(559)]:
      r = t(2321) + q0.joinValues(i[t(2546)]);
      break;
    case B[t(1634)]:
      r = t(1571) + q0[t(1815)](i[t(2546)]) + t(1115) + i[t(823)] + "'";
      break;
    case B.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case B.invalid_return_type:
      r = "Invalid function return type";
      break;
    case B[t(629)]:
      r = t(1131);
      break;
    case B.invalid_string:
      typeof i.validation == "object" ? t(1334) in i.validation ? (r = t(2472) + i.validation[t(1334)] + '"', typeof i[t(1074)][t(2441)] === t(1985) && (r = r + t(1342) + i[t(1074)].position)) : t(2534) in i[t(1074)] ? r = 'Invalid input: must start with "' + i[t(1074)][t(2534)] + '"' : t(2350) in i.validation ? r = t(1715) + i[t(1074)][t(2350)] + '"' : q0.assertNever(i.validation) : i[t(1074)] !== t(2237) ? r = t(1431) + i[t(1074)] : r = t(634);
      break;
    case B[t(1039)]:
      i.type === t(633) ? r = t(848) + (i[t(2407)] ? t(2454) : i.inclusive ? t(780) : t(2212)) + " " + i[t(1699)] + " element(s)" : i[t(1087)] === t(1401) ? r = "String must contain " + (i[t(2407)] ? "exactly" : i.inclusive ? t(780) : t(1972)) + " " + i[t(1699)] + t(914) : i[t(1087)] === t(1985) ? r = t(1695) + (i[t(2407)] ? "exactly equal to " : i.inclusive ? t(1818) : t(2599)) + i[t(1699)] : i[t(1087)] === "bigint" ? r = t(1695) + (i.exact ? t(903) : i[t(2215)] ? t(1818) : t(2599)) + i[t(1699)] : i.type === t(1813) ? r = t(2003) + (i.exact ? t(903) : i[t(2215)] ? "greater than or equal to " : t(2599)) + new Date(Number(i[t(1699)])) : r = t(1799);
      break;
    case B[t(1844)]:
      i[t(1087)] === t(633) ? r = t(848) + (i.exact ? t(2454) : i[t(2215)] ? "at most" : t(753)) + " " + i.maximum + t(1042) : i.type === t(1401) ? r = t(645) + (i[t(2407)] ? t(2454) : i.inclusive ? t(661) : "under") + " " + i[t(2489)] + t(914) : i[t(1087)] === t(1985) ? r = t(1695) + (i[t(2407)] ? t(2454) : i.inclusive ? t(1535) : "less than") + " " + i[t(2489)] : i[t(1087)] === "bigint" ? r = "BigInt must be " + (i.exact ? t(2454) : i[t(2215)] ? "less than or equal to" : "less than") + " " + i[t(2489)] : i.type === t(1813) ? r = t(2003) + (i[t(2407)] ? t(2454) : i[t(2215)] ? t(588) : t(1619)) + " " + new Date(Number(i[t(2489)])) : r = "Invalid input";
      break;
    case B.custom:
      r = t(1799);
      break;
    case B[t(2515)]:
      r = "Intersection results could not be merged";
      break;
    case B.not_multiple_of:
      r = "Number must be a multiple of " + i[t(819)];
      break;
    case B[t(1521)]:
      r = t(393);
      break;
    default:
      r = x[t(2602)], q0[t(2277)](i);
  }
  return { message: r };
};
let Aa = jt;
function Da() {
  return Aa;
}
const ja = (i) => {
  const x = n, { data: t, path: r, errorMaps: e, issueData: s } = i, a = [...r, ...s.path || []], o = { ...s, path: a };
  if (s.message !== void 0) return { ...s, path: a, message: s[x(1717)] };
  let c = "";
  const u = e[x(254)]((d) => !!d)[x(1012)]()[x(1909)]();
  for (const d of u)
    c = d(o, { data: t, defaultError: c }).message;
  return { ...s, path: a, message: c };
};
function Y(i, x) {
  const t = n, r = Da(), e = ja({ issueData: x, data: i.data, path: i[t(1225)], errorMaps: [i[t(2275)].contextualErrorMap, i[t(989)], r, r === jt ? void 0 : jt].filter((s) => !!s) });
  i[t(2275)].issues.push(e);
}
class ee {
  constructor() {
    const x = n;
    this[x(2425)] = x(1352);
  }
  [n(2334)]() {
    const x = n;
    this[x(2425)] === x(1352) && (this[x(2425)] = "dirty");
  }
  [n(680)]() {
    const x = n;
    this[x(2425)] !== x(814) && (this.value = x(814));
  }
  static [n(2416)](x, t) {
    const r = n, e = [];
    for (const s of t) {
      if (s[r(454)] === "aborted") return h0;
      s[r(454)] === r(2334) && x.dirty(), e[r(757)](s[r(2425)]);
    }
    return { status: x[r(2425)], value: e };
  }
  static async [n(565)](x, t) {
    const r = n, e = [];
    for (const s of t) {
      const a = await s[r(2022)], o = await s[r(2425)];
      e[r(757)]({ key: a, value: o });
    }
    return ee[r(2514)](x, e);
  }
  static [n(2514)](x, t) {
    const r = n, e = {};
    for (const s of t) {
      const { key: a, value: o } = s;
      if (a[r(454)] === r(814) || o[r(454)] === "aborted") return h0;
      a[r(454)] === r(2334) && x[r(2334)](), o[r(454)] === r(2334) && x[r(2334)](), a[r(2425)] !== r(2048) && (typeof o.value < "u" || s[r(462)]) && (e[a.value] = o[r(2425)]);
    }
    return { status: x[r(2425)], value: e };
  }
}
const h0 = Object.freeze({ status: "aborted" }), Qe = (i) => ({ status: n(2334), value: i }), re = (i) => ({ status: n(1352), value: i }), Pr = (i) => i[n(454)] === n(814), Ir = (i) => i[n(454)] === n(2334), Ve = (i) => i[n(454)] === n(1352), mx = (i) => typeof Promise < "u" && i instanceof Promise;
var n0;
(function(i) {
  const x = n;
  i[x(1432)] = (t) => typeof t == "string" ? { message: t } : t || {}, i[x(1090)] = (t) => typeof t === x(1401) ? t : t == null ? void 0 : t[x(1717)];
})(n0 || (n0 = {}));
class pe {
  constructor(x, t, r, e) {
    const s = n;
    this._cachedPath = [], this.parent = x, this[s(2197)] = t, this[s(1645)] = r, this[s(1159)] = e;
  }
  get [n(1225)]() {
    const x = n;
    return !this[x(2336)][x(1396)] && (Array[x(1606)](this[x(1159)]) ? this[x(2336)][x(757)](...this[x(1645)], ...this[x(1159)]) : this._cachedPath[x(757)](...this._path, this[x(1159)])), this[x(2336)];
  }
}
const Rr = (i, x) => {
  const t = n;
  if (Ve(x)) return { success: !0, data: x[t(2425)] };
  if (!i[t(2275)][t(648)][t(1396)]) throw new Error(t(2265));
  return { success: !1, get error() {
    const r = t;
    if (this[r(1430)]) return this[r(1430)];
    const e = new Se(i[r(2275)][r(648)]);
    return this._error = e, this._error;
  } };
};
function v0(i) {
  const x = n;
  if (!i) return {};
  const { errorMap: t, invalid_type_error: r, required_error: e, description: s } = i;
  if (t && (r || e)) throw new Error(x(449));
  return t ? { errorMap: t, description: s } : { errorMap: (o, c) => {
    const u = x, { message: d } = i;
    return o.code === u(1634) ? { message: d ?? c[u(2602)] } : typeof c[u(2197)] > "u" ? { message: d ?? e ?? c[u(2602)] } : o[u(939)] !== u(410) ? { message: c.defaultError } : { message: d ?? r ?? c[u(2602)] };
  }, description: s };
}
class I0 {
  get description() {
    return this._def.description;
  }
  [n(1660)](x) {
    return Pe(x[n(2197)]);
  }
  [n(1807)](x, t) {
    const r = n;
    return t || { common: x[r(1391)][r(2275)], data: x[r(2197)], parsedType: Pe(x[r(2197)]), schemaErrorMap: this[r(2198)].errorMap, path: x[r(1225)], parent: x[r(1391)] };
  }
  [n(534)](x) {
    const t = n;
    return { status: new ee(), ctx: { common: x[t(1391)][t(2275)], data: x[t(2197)], parsedType: Pe(x[t(2197)]), schemaErrorMap: this[t(2198)][t(1045)], path: x.path, parent: x[t(1391)] } };
  }
  [n(1097)](x) {
    const t = n, r = this[t(2549)](x);
    if (mx(r)) throw new Error(t(1615));
    return r;
  }
  _parseAsync(x) {
    const t = n, r = this[t(2549)](x);
    return Promise[t(1315)](r);
  }
  [n(2517)](x, t) {
    const r = n, e = this.safeParse(x, t);
    if (e[r(2217)]) return e[r(2197)];
    throw e[r(2281)];
  }
  safeParse(x, t) {
    const r = n, e = { common: { issues: [], async: (t == null ? void 0 : t[r(2448)]) ?? !1, contextualErrorMap: t == null ? void 0 : t.errorMap }, path: (t == null ? void 0 : t[r(1225)]) || [], schemaErrorMap: this._def[r(1045)], parent: null, data: x, parsedType: Pe(x) }, s = this[r(1097)]({ data: x, path: e[r(1225)], parent: e });
    return Rr(e, s);
  }
  "~validate"(x) {
    var e, s;
    const t = n, r = { common: { issues: [], async: !!this[t(1753)][t(2448)] }, path: [], schemaErrorMap: this[t(2198)][t(1045)], parent: null, data: x, parsedType: Pe(x) };
    if (!this[t(1753)][t(2448)]) try {
      const a = this._parseSync({ data: x, path: [], parent: r });
      return Ve(a) ? { value: a.value } : { issues: r.common[t(648)] };
    } catch (a) {
      (s = (e = a == null ? void 0 : a.message) == null ? void 0 : e[t(2162)]()) != null && s[t(1334)](t(1653)) && (this[t(1753)].async = !0), r.common = { issues: [], async: !0 };
    }
    return this[t(1346)]({ data: x, path: [], parent: r }).then((a) => Ve(a) ? { value: a[t(2425)] } : { issues: r[t(2275)][t(648)] });
  }
  async [n(2601)](x, t) {
    const r = n, e = await this.safeParseAsync(x, t);
    if (e[r(2217)]) return e[r(2197)];
    throw e[r(2281)];
  }
  async safeParseAsync(x, t) {
    const r = n, e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[r(1045)], async: !0 }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this[r(2198)][r(1045)], parent: null, data: x, parsedType: Pe(x) }, s = this[r(2549)]({ data: x, path: e[r(1225)], parent: e }), a = await (mx(s) ? s : Promise[r(1315)](s));
    return Rr(e, a);
  }
  [n(860)](x, t) {
    const r = n, e = (s) => {
      const a = K;
      return typeof t === a(1401) || typeof t > "u" ? { message: t } : typeof t === a(1856) ? t(s) : t;
    };
    return this[r(600)]((s, a) => {
      const o = r, c = x(s), u = () => a[o(1226)]({ code: B[o(1161)], ...e(s) });
      return typeof Promise !== o(654) && c instanceof Promise ? c[o(1947)]((d) => d ? !0 : (u(), !1)) : c ? !0 : (u(), !1);
    });
  }
  refinement(x, t) {
    const r = n;
    return this[r(600)]((e, s) => {
      const a = r;
      return x(e) ? !0 : (s[a(1226)](typeof t === a(1856) ? t(e, s) : t), !1);
    });
  }
  _refinement(x) {
    const t = n;
    return new qe({ schema: this, typeName: p0[t(1829)], effect: { type: t(763), refinement: x } });
  }
  superRefine(x) {
    return this._refinement(x);
  }
  constructor(x) {
    const t = n;
    this[t(2034)] = this[t(1011)], this._def = x, this[t(2517)] = this.parse[t(2045)](this), this[t(2349)] = this[t(2349)][t(2045)](this), this[t(2601)] = this.parseAsync[t(2045)](this), this[t(1011)] = this[t(1011)][t(2045)](this), this[t(2034)] = this[t(2034)][t(2045)](this), this[t(860)] = this[t(860)][t(2045)](this), this.refinement = this[t(763)][t(2045)](this), this[t(1672)] = this[t(1672)].bind(this), this[t(2262)] = this[t(2262)][t(2045)](this), this[t(1944)] = this[t(1944)][t(2045)](this), this[t(1075)] = this[t(1075)][t(2045)](this), this[t(633)] = this[t(633)][t(2045)](this), this[t(601)] = this[t(601)].bind(this), this.or = this.or.bind(this), this[t(1589)] = this.and[t(2045)](this), this[t(1503)] = this[t(1503)].bind(this), this[t(1497)] = this.brand.bind(this), this.default = this.default[t(2045)](this), this.catch = this[t(340)][t(2045)](this), this.describe = this.describe[t(2045)](this), this[t(1325)] = this.pipe.bind(this), this[t(1657)] = this[t(1657)][t(2045)](this), this[t(764)] = this[t(764)][t(2045)](this), this[t(1444)] = this[t(1444)][t(2045)](this), this[t(1753)] = { version: 1, vendor: t(1314), validate: (r) => this[t(1536)](r) };
  }
  [n(2262)]() {
    const x = n;
    return we[x(2201)](this, this[x(2198)]);
  }
  [n(1944)]() {
    const x = n;
    return je.create(this, this[x(2198)]);
  }
  nullish() {
    const x = n;
    return this[x(1944)]()[x(2262)]();
  }
  [n(633)]() {
    return he[n(2201)](this);
  }
  [n(601)]() {
    const x = n;
    return Sx[x(2201)](this, this[x(2198)]);
  }
  or(x) {
    const t = n;
    return bx[t(2201)]([this, x], this[t(2198)]);
  }
  [n(1589)](x) {
    const t = n;
    return vx[t(2201)](this, x, this[t(2198)]);
  }
  [n(1503)](x) {
    const t = n;
    return new qe({ ...v0(this[t(2198)]), schema: this, typeName: p0.ZodEffects, effect: { type: t(1503), transform: x } });
  }
  default(x) {
    const t = n, r = typeof x === t(1856) ? x : () => x;
    return new kx({ ...v0(this._def), innerType: this, defaultValue: r, typeName: p0[t(1917)] });
  }
  [n(1497)]() {
    const x = n;
    return new Mn({ typeName: p0[x(1433)], type: this, ...v0(this[x(2198)]) });
  }
  [n(340)](x) {
    const t = n, r = typeof x == "function" ? x : () => x;
    return new Ex({ ...v0(this[t(2198)]), innerType: this, catchValue: r, typeName: p0[t(590)] });
  }
  [n(2080)](x) {
    const t = n, r = this[t(2568)];
    return new r({ ...this._def, description: x });
  }
  [n(1325)](x) {
    return tr.create(this, x);
  }
  [n(1657)]() {
    return Px[n(2201)](this);
  }
  [n(1444)]() {
    const x = n;
    return this[x(2349)](void 0)[x(2217)];
  }
  [n(764)]() {
    const x = n;
    return this[x(2349)](null)[x(2217)];
  }
}
const Ma = /^c[^\s-]{8,}$/i, La = /^[0-9a-z]+$/, $a = /^[0-9A-HJKMNP-TV-Z]{26}$/i, za = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Ha = /^[a-z0-9_-]{21}$/i, Ua = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Va = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Wa = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Za = n(623);
let Lx;
const Ba = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ka = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Ja = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Ga = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Qa = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Xa = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, An = n(759), Ya = new RegExp("^" + An + "$");
function Dn(i) {
  const x = n;
  let t = x(562);
  i[x(1608)] ? t = t + "\\.\\d{" + i[x(1608)] + "}" : i[x(1608)] == null && (t = t + x(549));
  const r = i.precision ? "+" : "?";
  return "([01]\\d|2[0-3]):[0-5]\\d(:" + t + ")" + r;
}
function _a(i) {
  return new RegExp("^" + Dn(i) + "$");
}
function ei(i) {
  const x = n;
  let t = An + "T" + Dn(i);
  const r = [];
  return r[x(757)](i.local ? "Z?" : "Z"), i[x(1123)] && r.push(x(749)), t = t + "(" + r[x(261)]("|") + ")", new RegExp("^" + t + "$");
}
function xi(i, x) {
  return !!((x === "v4" || !x) && Ba[n(323)](i) || (x === "v6" || !x) && Ja.test(i));
}
function ti(i, x) {
  const t = n;
  if (!Ua[t(323)](i)) return !1;
  try {
    const [r] = i[t(1031)](".");
    if (!r) return !1;
    const e = r[t(1783)](/-/g, "+")[t(1783)](/_/g, "/").padEnd(r[t(1396)] + (4 - r[t(1396)] % 4) % 4, "="), s = JSON[t(2517)](atob(e));
    return !(typeof s !== t(1507) || s === null || t(1741) in s && (s == null ? void 0 : s[t(1741)]) !== t(1849) || !s[t(1245)] || x && s[t(1245)] !== x);
  } catch {
    return !1;
  }
}
function ri(i, x) {
  const t = n;
  return !!((x === "v4" || !x) && Ka.test(i) || (x === "v6" || !x) && Ga[t(323)](i));
}
class ye extends I0 {
  [n(2549)](x) {
    const t = n;
    if (this[t(2198)][t(1047)] && (x.data = String(x[t(2197)])), this[t(1660)](x) !== x0[t(1401)]) {
      const a = this[t(1807)](x);
      return Y(a, { code: B[t(410)], expected: x0[t(1401)], received: a.parsedType }), h0;
    }
    const e = new ee();
    let s;
    for (const a of this[t(2198)][t(2033)])
      if (a.kind === t(1865)) x.data.length < a[t(2425)] && (s = this._getOrReturnCtx(x, s), Y(s, { code: B.too_small, minimum: a[t(2425)], type: "string", inclusive: !0, exact: !1, message: a.message }), e[t(2334)]());
      else if (a.kind === t(550)) x.data.length > a[t(2425)] && (s = this._getOrReturnCtx(x, s), Y(s, { code: B.too_big, maximum: a[t(2425)], type: t(1401), inclusive: !0, exact: !1, message: a[t(1717)] }), e[t(2334)]());
      else if (a[t(427)] === t(1396)) {
        const o = x[t(2197)][t(1396)] > a[t(2425)], c = x[t(2197)][t(1396)] < a[t(2425)];
        (o || c) && (s = this[t(1807)](x, s), o ? Y(s, { code: B[t(1844)], maximum: a[t(2425)], type: t(1401), inclusive: !0, exact: !0, message: a[t(1717)] }) : c && Y(s, { code: B.too_small, minimum: a[t(2425)], type: t(1401), inclusive: !0, exact: !0, message: a[t(1717)] }), e.dirty());
      } else if (a[t(427)] === "email") !Wa[t(323)](x[t(2197)]) && (s = this._getOrReturnCtx(x, s), Y(s, { validation: "email", code: B[t(984)], message: a[t(1717)] }), e[t(2334)]());
      else if (a[t(427)] === t(856)) !Lx && (Lx = new RegExp(Za, "u")), !Lx.test(x[t(2197)]) && (s = this._getOrReturnCtx(x, s), Y(s, { validation: t(856), code: B.invalid_string, message: a[t(1717)] }), e[t(2334)]());
      else if (a.kind === t(2460)) !za[t(323)](x[t(2197)]) && (s = this[t(1807)](x, s), Y(s, { validation: "uuid", code: B[t(984)], message: a[t(1717)] }), e[t(2334)]());
      else if (a[t(427)] === "nanoid") !Ha[t(323)](x[t(2197)]) && (s = this[t(1807)](x, s), Y(s, { validation: t(1659), code: B.invalid_string, message: a[t(1717)] }), e.dirty());
      else if (a[t(427)] === t(1517)) !Ma[t(323)](x[t(2197)]) && (s = this[t(1807)](x, s), Y(s, { validation: "cuid", code: B[t(984)], message: a[t(1717)] }), e[t(2334)]());
      else if (a[t(427)] === t(479)) !La[t(323)](x[t(2197)]) && (s = this[t(1807)](x, s), Y(s, { validation: t(479), code: B[t(984)], message: a[t(1717)] }), e.dirty());
      else if (a[t(427)] === t(2370)) !$a[t(323)](x[t(2197)]) && (s = this._getOrReturnCtx(x, s), Y(s, { validation: t(2370), code: B[t(984)], message: a[t(1717)] }), e[t(2334)]());
      else if (a[t(427)] === t(428)) try {
        new URL(x.data);
      } catch {
        s = this[t(1807)](x, s), Y(s, { validation: t(428), code: B[t(984)], message: a[t(1717)] }), e.dirty();
      }
      else
        a[t(427)] === t(2237) ? (a[t(2237)][t(1712)] = 0, !a[t(2237)].test(x[t(2197)]) && (s = this[t(1807)](x, s), Y(s, { validation: t(2237), code: B.invalid_string, message: a[t(1717)] }), e[t(2334)]())) : a[t(427)] === t(893) ? x[t(2197)] = x.data.trim() : a.kind === t(1334) ? !x[t(2197)][t(1334)](a[t(2425)], a[t(2441)]) && (s = this[t(1807)](x, s), Y(s, { code: B.invalid_string, validation: { includes: a[t(2425)], position: a[t(2441)] }, message: a[t(1717)] }), e[t(2334)]()) : a[t(427)] === "toLowerCase" ? x[t(2197)] = x[t(2197)][t(2162)]() : a[t(427)] === t(2119) ? x[t(2197)] = x[t(2197)][t(2119)]() : a.kind === t(2534) ? !x.data[t(2534)](a[t(2425)]) && (s = this[t(1807)](x, s), Y(s, { code: B[t(984)], validation: { startsWith: a[t(2425)] }, message: a[t(1717)] }), e.dirty()) : a[t(427)] === "endsWith" ? !x[t(2197)][t(2350)](a[t(2425)]) && (s = this._getOrReturnCtx(x, s), Y(s, { code: B[t(984)], validation: { endsWith: a[t(2425)] }, message: a.message }), e.dirty()) : a.kind === t(2419) ? !ei(a)[t(323)](x.data) && (s = this._getOrReturnCtx(x, s), Y(s, { code: B[t(984)], validation: "datetime", message: a[t(1717)] }), e.dirty()) : a[t(427)] === t(1813) ? !Ya[t(323)](x.data) && (s = this[t(1807)](x, s), Y(s, { code: B[t(984)], validation: "date", message: a.message }), e[t(2334)]()) : a[t(427)] === t(1094) ? !_a(a)[t(323)](x[t(2197)]) && (s = this[t(1807)](x, s), Y(s, { code: B[t(984)], validation: t(1094), message: a[t(1717)] }), e[t(2334)]()) : a[t(427)] === "duration" ? !Va[t(323)](x[t(2197)]) && (s = this[t(1807)](x, s), Y(s, { validation: "duration", code: B[t(984)], message: a[t(1717)] }), e.dirty()) : a[t(427)] === "ip" ? !xi(x.data, a.version) && (s = this[t(1807)](x, s), Y(s, { validation: "ip", code: B[t(984)], message: a[t(1717)] }), e[t(2334)]()) : a[t(427)] === "jwt" ? !ti(x.data, a[t(1245)]) && (s = this[t(1807)](x, s), Y(s, { validation: t(2060), code: B.invalid_string, message: a[t(1717)] }), e.dirty()) : a.kind === t(1927) ? !ri(x[t(2197)], a[t(1262)]) && (s = this[t(1807)](x, s), Y(s, { validation: t(1927), code: B[t(984)], message: a.message }), e[t(2334)]()) : a.kind === t(1734) ? !Qa[t(323)](x[t(2197)]) && (s = this[t(1807)](x, s), Y(s, { validation: t(1734), code: B[t(984)], message: a.message }), e[t(2334)]()) : a.kind === "base64url" ? !Xa[t(323)](x[t(2197)]) && (s = this._getOrReturnCtx(x, s), Y(s, { validation: t(308), code: B.invalid_string, message: a[t(1717)] }), e[t(2334)]()) : q0[t(2277)](a);
    return { status: e[t(2425)], value: x[t(2197)] };
  }
  [n(446)](x, t, r) {
    const e = n;
    return this[e(763)]((s) => x.test(s), { validation: t, code: B[e(984)], ...n0[e(1432)](r) });
  }
  [n(878)](x) {
    const t = n;
    return new ye({ ...this._def, checks: [...this[t(2198)][t(2033)], x] });
  }
  email(x) {
    const t = n;
    return this[t(878)]({ kind: t(687), ...n0[t(1432)](x) });
  }
  [n(428)](x) {
    const t = n;
    return this._addCheck({ kind: t(428), ...n0[t(1432)](x) });
  }
  emoji(x) {
    const t = n;
    return this[t(878)]({ kind: "emoji", ...n0[t(1432)](x) });
  }
  [n(2460)](x) {
    const t = n;
    return this[t(878)]({ kind: t(2460), ...n0.errToObj(x) });
  }
  nanoid(x) {
    const t = n;
    return this[t(878)]({ kind: t(1659), ...n0.errToObj(x) });
  }
  [n(1517)](x) {
    const t = n;
    return this._addCheck({ kind: t(1517), ...n0[t(1432)](x) });
  }
  cuid2(x) {
    return this[n(878)]({ kind: "cuid2", ...n0.errToObj(x) });
  }
  [n(2370)](x) {
    const t = n;
    return this[t(878)]({ kind: t(2370), ...n0[t(1432)](x) });
  }
  base64(x) {
    const t = n;
    return this[t(878)]({ kind: t(1734), ...n0[t(1432)](x) });
  }
  [n(308)](x) {
    const t = n;
    return this[t(878)]({ kind: "base64url", ...n0[t(1432)](x) });
  }
  jwt(x) {
    const t = n;
    return this[t(878)]({ kind: t(2060), ...n0[t(1432)](x) });
  }
  ip(x) {
    const t = n;
    return this[t(878)]({ kind: "ip", ...n0[t(1432)](x) });
  }
  cidr(x) {
    const t = n;
    return this[t(878)]({ kind: "cidr", ...n0[t(1432)](x) });
  }
  [n(2419)](x) {
    const t = n;
    return typeof x === t(1401) ? this._addCheck({ kind: t(2419), precision: null, offset: !1, local: !1, message: x }) : this[t(878)]({ kind: "datetime", precision: typeof (x == null ? void 0 : x[t(1608)]) === t(654) ? null : x == null ? void 0 : x[t(1608)], offset: (x == null ? void 0 : x.offset) ?? !1, local: (x == null ? void 0 : x.local) ?? !1, ...n0.errToObj(x == null ? void 0 : x[t(1717)]) });
  }
  date(x) {
    const t = n;
    return this[t(878)]({ kind: t(1813), message: x });
  }
  [n(1094)](x) {
    const t = n;
    return typeof x === t(1401) ? this[t(878)]({ kind: "time", precision: null, message: x }) : this[t(878)]({ kind: t(1094), precision: typeof (x == null ? void 0 : x[t(1608)]) === t(654) ? null : x == null ? void 0 : x[t(1608)], ...n0.errToObj(x == null ? void 0 : x[t(1717)]) });
  }
  duration(x) {
    const t = n;
    return this[t(878)]({ kind: t(1466), ...n0[t(1432)](x) });
  }
  [n(2237)](x, t) {
    const r = n;
    return this[r(878)]({ kind: r(2237), regex: x, ...n0.errToObj(t) });
  }
  [n(1334)](x, t) {
    const r = n;
    return this[r(878)]({ kind: r(1334), value: x, position: t == null ? void 0 : t[r(2441)], ...n0[r(1432)](t == null ? void 0 : t[r(1717)]) });
  }
  [n(2534)](x, t) {
    const r = n;
    return this._addCheck({ kind: r(2534), value: x, ...n0.errToObj(t) });
  }
  [n(2350)](x, t) {
    const r = n;
    return this[r(878)]({ kind: "endsWith", value: x, ...n0[r(1432)](t) });
  }
  min(x, t) {
    const r = n;
    return this[r(878)]({ kind: r(1865), value: x, ...n0[r(1432)](t) });
  }
  [n(550)](x, t) {
    const r = n;
    return this[r(878)]({ kind: r(550), value: x, ...n0.errToObj(t) });
  }
  length(x, t) {
    const r = n;
    return this[r(878)]({ kind: r(1396), value: x, ...n0[r(1432)](t) });
  }
  [n(636)](x) {
    const t = n;
    return this.min(1, n0[t(1432)](x));
  }
  [n(893)]() {
    const x = n;
    return new ye({ ...this[x(2198)], checks: [...this[x(2198)][x(2033)], { kind: x(893) }] });
  }
  [n(2162)]() {
    const x = n;
    return new ye({ ...this[x(2198)], checks: [...this._def[x(2033)], { kind: x(2162) }] });
  }
  [n(2119)]() {
    const x = n;
    return new ye({ ...this._def, checks: [...this[x(2198)][x(2033)], { kind: x(2119) }] });
  }
  get [n(2125)]() {
    const x = n;
    return !!this._def.checks.find((t) => t[x(427)] === x(2419));
  }
  get [n(969)]() {
    const x = n;
    return !!this._def[x(2033)][x(950)]((t) => t[x(427)] === x(1813));
  }
  get [n(719)]() {
    const x = n;
    return !!this[x(2198)][x(2033)][x(950)]((t) => t.kind === x(1094));
  }
  get [n(1621)]() {
    const x = n;
    return !!this[x(2198)][x(2033)].find((t) => t.kind === x(1466));
  }
  get isEmail() {
    const x = n;
    return !!this[x(2198)].checks[x(950)]((t) => t[x(427)] === "email");
  }
  get [n(1156)]() {
    const x = n;
    return !!this[x(2198)].checks[x(950)]((t) => t[x(427)] === "url");
  }
  get isEmoji() {
    const x = n;
    return !!this[x(2198)][x(2033)][x(950)]((t) => t.kind === x(856));
  }
  get [n(1798)]() {
    const x = n;
    return !!this._def.checks.find((t) => t[x(427)] === "uuid");
  }
  get [n(1742)]() {
    const x = n;
    return !!this[x(2198)][x(2033)].find((t) => t[x(427)] === "nanoid");
  }
  get [n(1650)]() {
    const x = n;
    return !!this[x(2198)][x(2033)][x(950)]((t) => t[x(427)] === x(1517));
  }
  get [n(1194)]() {
    const x = n;
    return !!this[x(2198)].checks[x(950)]((t) => t[x(427)] === x(479));
  }
  get isULID() {
    const x = n;
    return !!this[x(2198)][x(2033)][x(950)]((t) => t[x(427)] === x(2370));
  }
  get [n(1165)]() {
    const x = n;
    return !!this._def[x(2033)].find((t) => t[x(427)] === "ip");
  }
  get [n(2031)]() {
    const x = n;
    return !!this[x(2198)][x(2033)].find((t) => t[x(427)] === x(1927));
  }
  get [n(505)]() {
    const x = n;
    return !!this[x(2198)][x(2033)][x(950)]((t) => t.kind === x(1734));
  }
  get [n(1195)]() {
    const x = n;
    return !!this[x(2198)].checks[x(950)]((t) => t[x(427)] === x(308));
  }
  get [n(1539)]() {
    const x = n;
    let t = null;
    for (const r of this[x(2198)][x(2033)])
      r[x(427)] === x(1865) && (t === null || r[x(2425)] > t) && (t = r[x(2425)]);
    return t;
  }
  get maxLength() {
    const x = n;
    let t = null;
    for (const r of this._def.checks)
      r[x(427)] === x(550) && (t === null || r[x(2425)] < t) && (t = r[x(2425)]);
    return t;
  }
}
ye[n(2201)] = (i) => {
  const x = n;
  return new ye({ checks: [], typeName: p0.ZodString, coerce: (i == null ? void 0 : i[x(1047)]) ?? !1, ...v0(i) });
};
function si(i, x) {
  const t = n, r = (i[t(1090)]()[t(1031)](".")[1] || "")[t(1396)], e = (x[t(1090)]()[t(1031)](".")[1] || "")[t(1396)], s = r > e ? r : e, a = Number.parseInt(i[t(1873)](s)[t(1783)](".", "")), o = Number[t(2331)](x[t(1873)](s).replace(".", ""));
  return a % o / 10 ** s;
}
class We extends I0 {
  constructor() {
    const x = n;
    super(...arguments), this[x(1865)] = this[x(2332)], this[x(550)] = this[x(2298)], this[x(1279)] = this.multipleOf;
  }
  _parse(x) {
    const t = n;
    if (this[t(2198)][t(1047)] && (x[t(2197)] = Number(x[t(2197)])), this[t(1660)](x) !== x0.number) {
      const a = this[t(1807)](x);
      return Y(a, { code: B.invalid_type, expected: x0[t(1985)], received: a[t(619)] }), h0;
    }
    let e;
    const s = new ee();
    for (const a of this[t(2198)][t(2033)])
      a[t(427)] === "int" ? !q0[t(995)](x[t(2197)]) && (e = this[t(1807)](x, e), Y(e, { code: B[t(410)], expected: t(1910), received: "float", message: a[t(1717)] }), s[t(2334)]()) : a.kind === t(1865) ? (a.inclusive ? x.data < a[t(2425)] : x[t(2197)] <= a.value) && (e = this._getOrReturnCtx(x, e), Y(e, { code: B[t(1039)], minimum: a[t(2425)], type: t(1985), inclusive: a[t(2215)], exact: !1, message: a[t(1717)] }), s[t(2334)]()) : a.kind === t(550) ? (a[t(2215)] ? x[t(2197)] > a[t(2425)] : x[t(2197)] >= a.value) && (e = this[t(1807)](x, e), Y(e, { code: B[t(1844)], maximum: a[t(2425)], type: t(1985), inclusive: a[t(2215)], exact: !1, message: a[t(1717)] }), s.dirty()) : a.kind === t(819) ? si(x.data, a[t(2425)]) !== 0 && (e = this[t(1807)](x, e), Y(e, { code: B[t(650)], multipleOf: a[t(2425)], message: a[t(1717)] }), s[t(2334)]()) : a[t(427)] === t(564) ? !Number[t(952)](x[t(2197)]) && (e = this._getOrReturnCtx(x, e), Y(e, { code: B[t(1521)], message: a.message }), s[t(2334)]()) : q0[t(2277)](a);
    return { status: s.value, value: x[t(2197)] };
  }
  gte(x, t) {
    const r = n;
    return this[r(778)](r(1865), x, !0, n0[r(1090)](t));
  }
  gt(x, t) {
    const r = n;
    return this[r(778)]("min", x, !1, n0[r(1090)](t));
  }
  [n(2298)](x, t) {
    const r = n;
    return this[r(778)](r(550), x, !0, n0[r(1090)](t));
  }
  lt(x, t) {
    const r = n;
    return this[r(778)](r(550), x, !1, n0[r(1090)](t));
  }
  setLimit(x, t, r, e) {
    const s = n;
    return new We({ ...this[s(2198)], checks: [...this[s(2198)][s(2033)], { kind: x, value: t, inclusive: r, message: n0[s(1090)](e) }] });
  }
  [n(878)](x) {
    const t = n;
    return new We({ ...this[t(2198)], checks: [...this[t(2198)].checks, x] });
  }
  [n(2088)](x) {
    const t = n;
    return this[t(878)]({ kind: "int", message: n0[t(1090)](x) });
  }
  [n(2021)](x) {
    const t = n;
    return this[t(878)]({ kind: t(1865), value: 0, inclusive: !1, message: n0.toString(x) });
  }
  negative(x) {
    const t = n;
    return this[t(878)]({ kind: t(550), value: 0, inclusive: !1, message: n0[t(1090)](x) });
  }
  nonpositive(x) {
    const t = n;
    return this[t(878)]({ kind: t(550), value: 0, inclusive: !0, message: n0[t(1090)](x) });
  }
  nonnegative(x) {
    const t = n;
    return this._addCheck({ kind: t(1865), value: 0, inclusive: !0, message: n0[t(1090)](x) });
  }
  multipleOf(x, t) {
    return this._addCheck({ kind: "multipleOf", value: x, message: n0.toString(t) });
  }
  [n(564)](x) {
    const t = n;
    return this[t(878)]({ kind: t(564), message: n0[t(1090)](x) });
  }
  [n(785)](x) {
    const t = n;
    return this[t(878)]({ kind: t(1865), inclusive: !0, value: Number[t(1063)], message: n0[t(1090)](x) })._addCheck({ kind: t(550), inclusive: !0, value: Number[t(1867)], message: n0[t(1090)](x) });
  }
  get [n(630)]() {
    const x = n;
    let t = null;
    for (const r of this[x(2198)][x(2033)])
      r[x(427)] === x(1865) && (t === null || r.value > t) && (t = r[x(2425)]);
    return t;
  }
  get [n(2339)]() {
    const x = n;
    let t = null;
    for (const r of this[x(2198)][x(2033)])
      r.kind === x(550) && (t === null || r[x(2425)] < t) && (t = r[x(2425)]);
    return t;
  }
  get [n(1675)]() {
    const x = n;
    return !!this[x(2198)][x(2033)].find((t) => t[x(427)] === x(2088) || t[x(427)] === x(819) && q0[x(995)](t[x(2425)]));
  }
  get isFinite() {
    const x = n;
    let t = null, r = null;
    for (const e of this._def[x(2033)]) {
      if (e.kind === x(564) || e[x(427)] === x(2088) || e[x(427)] === x(819)) return !0;
      e[x(427)] === x(1865) ? (r === null || e.value > r) && (r = e[x(2425)]) : e[x(427)] === x(550) && (t === null || e[x(2425)] < t) && (t = e.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
We[n(2201)] = (i) => {
  const x = n;
  return new We({ checks: [], typeName: p0[x(2089)], coerce: (i == null ? void 0 : i[x(1047)]) || !1, ...v0(i) });
};
class xx extends I0 {
  constructor() {
    const x = n;
    super(...arguments), this.min = this[x(2332)], this[x(550)] = this[x(2298)];
  }
  [n(2549)](x) {
    const t = n;
    if (this[t(2198)][t(1047)]) try {
      x[t(2197)] = BigInt(x.data);
    } catch {
      return this[t(2307)](x);
    }
    if (this._getType(x) !== x0.bigint) return this[t(2307)](x);
    let e;
    const s = new ee();
    for (const a of this[t(2198)].checks)
      a[t(427)] === "min" ? (a.inclusive ? x[t(2197)] < a[t(2425)] : x.data <= a[t(2425)]) && (e = this[t(1807)](x, e), Y(e, { code: B[t(1039)], type: t(264), minimum: a[t(2425)], inclusive: a.inclusive, message: a[t(1717)] }), s[t(2334)]()) : a.kind === "max" ? (a.inclusive ? x[t(2197)] > a[t(2425)] : x.data >= a[t(2425)]) && (e = this[t(1807)](x, e), Y(e, { code: B[t(1844)], type: t(264), maximum: a[t(2425)], inclusive: a[t(2215)], message: a[t(1717)] }), s.dirty()) : a.kind === t(819) ? x[t(2197)] % a[t(2425)] !== BigInt(0) && (e = this[t(1807)](x, e), Y(e, { code: B[t(650)], multipleOf: a[t(2425)], message: a[t(1717)] }), s[t(2334)]()) : q0[t(2277)](a);
    return { status: s[t(2425)], value: x[t(2197)] };
  }
  [n(2307)](x) {
    const t = n, r = this[t(1807)](x);
    return Y(r, { code: B[t(410)], expected: x0.bigint, received: r[t(619)] }), h0;
  }
  [n(2332)](x, t) {
    const r = n;
    return this[r(778)](r(1865), x, !0, n0[r(1090)](t));
  }
  gt(x, t) {
    const r = n;
    return this[r(778)](r(1865), x, !1, n0[r(1090)](t));
  }
  [n(2298)](x, t) {
    return this.setLimit("max", x, !0, n0.toString(t));
  }
  lt(x, t) {
    const r = n;
    return this[r(778)](r(550), x, !1, n0.toString(t));
  }
  [n(778)](x, t, r, e) {
    const s = n;
    return new xx({ ...this._def, checks: [...this[s(2198)][s(2033)], { kind: x, value: t, inclusive: r, message: n0.toString(e) }] });
  }
  _addCheck(x) {
    const t = n;
    return new xx({ ...this._def, checks: [...this._def[t(2033)], x] });
  }
  [n(2021)](x) {
    const t = n;
    return this._addCheck({ kind: t(1865), value: BigInt(0), inclusive: !1, message: n0.toString(x) });
  }
  [n(1060)](x) {
    return this[n(878)]({ kind: "max", value: BigInt(0), inclusive: !1, message: n0.toString(x) });
  }
  nonpositive(x) {
    const t = n;
    return this[t(878)]({ kind: t(550), value: BigInt(0), inclusive: !0, message: n0[t(1090)](x) });
  }
  nonnegative(x) {
    const t = n;
    return this[t(878)]({ kind: t(1865), value: BigInt(0), inclusive: !0, message: n0.toString(x) });
  }
  [n(819)](x, t) {
    const r = n;
    return this[r(878)]({ kind: r(819), value: x, message: n0[r(1090)](t) });
  }
  get [n(630)]() {
    const x = n;
    let t = null;
    for (const r of this[x(2198)][x(2033)])
      r.kind === x(1865) && (t === null || r[x(2425)] > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    const x = n;
    let t = null;
    for (const r of this[x(2198)][x(2033)])
      r[x(427)] === x(550) && (t === null || r.value < t) && (t = r[x(2425)]);
    return t;
  }
}
xx.create = (i) => {
  const x = n;
  return new xx({ checks: [], typeName: p0[x(2210)], coerce: (i == null ? void 0 : i[x(1047)]) ?? !1, ...v0(i) });
};
class Mt extends I0 {
  _parse(x) {
    const t = n;
    if (this._def[t(1047)] && (x[t(2197)] = !!x.data), this._getType(x) !== x0[t(1588)]) {
      const e = this[t(1807)](x);
      return Y(e, { code: B.invalid_type, expected: x0[t(1588)], received: e[t(619)] }), h0;
    }
    return re(x[t(2197)]);
  }
}
Mt[n(2201)] = (i) => {
  const x = n;
  return new Mt({ typeName: p0.ZodBoolean, coerce: (i == null ? void 0 : i[x(1047)]) || !1, ...v0(i) });
};
class gx extends I0 {
  [n(2549)](x) {
    const t = n;
    if (this[t(2198)][t(1047)] && (x.data = new Date(x[t(2197)])), this[t(1660)](x) !== x0[t(1813)]) {
      const a = this[t(1807)](x);
      return Y(a, { code: B[t(410)], expected: x0[t(1813)], received: a.parsedType }), h0;
    }
    if (Number[t(1101)](x[t(2197)][t(987)]())) {
      const a = this._getOrReturnCtx(x);
      return Y(a, { code: B[t(629)] }), h0;
    }
    const e = new ee();
    let s;
    for (const a of this[t(2198)][t(2033)])
      a.kind === "min" ? x[t(2197)][t(987)]() < a.value && (s = this[t(1807)](x, s), Y(s, { code: B[t(1039)], message: a.message, inclusive: !0, exact: !1, minimum: a.value, type: "date" }), e[t(2334)]()) : a[t(427)] === t(550) ? x[t(2197)][t(987)]() > a[t(2425)] && (s = this[t(1807)](x, s), Y(s, { code: B.too_big, message: a[t(1717)], inclusive: !0, exact: !1, maximum: a[t(2425)], type: t(1813) }), e[t(2334)]()) : q0[t(2277)](a);
    return { status: e.value, value: new Date(x[t(2197)][t(987)]()) };
  }
  [n(878)](x) {
    const t = n;
    return new gx({ ...this[t(2198)], checks: [...this._def[t(2033)], x] });
  }
  [n(1865)](x, t) {
    const r = n;
    return this[r(878)]({ kind: r(1865), value: x[r(987)](), message: n0[r(1090)](t) });
  }
  [n(550)](x, t) {
    const r = n;
    return this[r(878)]({ kind: r(550), value: x[r(987)](), message: n0[r(1090)](t) });
  }
  get minDate() {
    const x = n;
    let t = null;
    for (const r of this[x(2198)].checks)
      r.kind === x(1865) && (t === null || r[x(2425)] > t) && (t = r[x(2425)]);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    const x = n;
    let t = null;
    for (const r of this[x(2198)][x(2033)])
      r[x(427)] === "max" && (t === null || r[x(2425)] < t) && (t = r[x(2425)]);
    return t != null ? new Date(t) : null;
  }
}
gx[n(2201)] = (i) => {
  const x = n;
  return new gx({ checks: [], coerce: (i == null ? void 0 : i[x(1047)]) || !1, typeName: p0[x(2481)], ...v0(i) });
};
class Cr extends I0 {
  [n(2549)](x) {
    const t = n;
    if (this._getType(x) !== x0[t(2471)]) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: B[t(410)], expected: x0[t(2471)], received: e[t(619)] }), h0;
    }
    return re(x[t(2197)]);
  }
}
Cr[n(2201)] = (i) => {
  const x = n;
  return new Cr({ typeName: p0[x(1663)], ...v0(i) });
};
class Lt extends I0 {
  [n(2549)](x) {
    const t = n;
    if (this._getType(x) !== x0[t(654)]) {
      const e = this[t(1807)](x);
      return Y(e, { code: B[t(410)], expected: x0[t(654)], received: e[t(619)] }), h0;
    }
    return re(x[t(2197)]);
  }
}
Lt.create = (i) => {
  const x = n;
  return new Lt({ typeName: p0[x(1731)], ...v0(i) });
};
class $t extends I0 {
  [n(2549)](x) {
    const t = n;
    if (this[t(1660)](x) !== x0[t(417)]) {
      const e = this[t(1807)](x);
      return Y(e, { code: B[t(410)], expected: x0[t(417)], received: e[t(619)] }), h0;
    }
    return re(x[t(2197)]);
  }
}
$t[n(2201)] = (i) => {
  const x = n;
  return new $t({ typeName: p0[x(1378)], ...v0(i) });
};
class zt extends I0 {
  constructor() {
    const x = n;
    super(...arguments), this[x(2604)] = !0;
  }
  [n(2549)](x) {
    return re(x.data);
  }
}
zt[n(2201)] = (i) => {
  const x = n;
  return new zt({ typeName: p0[x(613)], ...v0(i) });
};
class Ht extends I0 {
  constructor() {
    const x = n;
    super(...arguments), this[x(1411)] = !0;
  }
  [n(2549)](x) {
    return re(x[n(2197)]);
  }
}
Ht[n(2201)] = (i) => new Ht({ typeName: p0.ZodUnknown, ...v0(i) });
class Ie extends I0 {
  [n(2549)](x) {
    const t = n, r = this[t(1807)](x);
    return Y(r, { code: B[t(410)], expected: x0[t(1665)], received: r[t(619)] }), h0;
  }
}
Ie.create = (i) => {
  const x = n;
  return new Ie({ typeName: p0[x(2041)], ...v0(i) });
};
class Ut extends I0 {
  [n(2549)](x) {
    const t = n;
    if (this[t(1660)](x) !== x0[t(654)]) {
      const e = this[t(1807)](x);
      return Y(e, { code: B[t(410)], expected: x0.void, received: e[t(619)] }), h0;
    }
    return re(x[t(2197)]);
  }
}
Ut[n(2201)] = (i) => {
  const x = n;
  return new Ut({ typeName: p0[x(338)], ...v0(i) });
};
class he extends I0 {
  [n(2549)](x) {
    const t = n, { ctx: r, status: e } = this[t(534)](x), s = this[t(2198)];
    if (r[t(619)] !== x0[t(633)]) return Y(r, { code: B[t(410)], expected: x0[t(633)], received: r[t(619)] }), h0;
    if (s[t(2152)] !== null) {
      const o = r[t(2197)][t(1396)] > s[t(2152)].value, c = r[t(2197)][t(1396)] < s[t(2152)][t(2425)];
      (o || c) && (Y(r, { code: o ? B[t(1844)] : B[t(1039)], minimum: c ? s.exactLength[t(2425)] : void 0, maximum: o ? s.exactLength[t(2425)] : void 0, type: t(633), inclusive: !0, exact: !0, message: s[t(2152)][t(1717)] }), e.dirty());
    }
    if (s[t(1539)] !== null && r[t(2197)][t(1396)] < s.minLength[t(2425)] && (Y(r, { code: B[t(1039)], minimum: s[t(1539)].value, type: t(633), inclusive: !0, exact: !1, message: s[t(1539)].message }), e.dirty()), s.maxLength !== null && r[t(2197)][t(1396)] > s[t(2170)][t(2425)] && (Y(r, { code: B[t(1844)], maximum: s.maxLength[t(2425)], type: t(633), inclusive: !0, exact: !1, message: s[t(2170)][t(1717)] }), e[t(2334)]()), r[t(2275)][t(2448)]) return Promise.all([...r[t(2197)]][t(1227)]((o, c) => {
      const u = t;
      return s[u(1087)][u(1346)](new pe(r, o, r[u(1225)], c));
    }))[t(1947)]((o) => ee.mergeArray(e, o));
    const a = [...r[t(2197)]][t(1227)]((o, c) => {
      const u = t;
      return s[u(1087)][u(1097)](new pe(r, o, r[u(1225)], c));
    });
    return ee[t(2416)](e, a);
  }
  get [n(520)]() {
    const x = n;
    return this[x(2198)][x(1087)];
  }
  min(x, t) {
    const r = n;
    return new he({ ...this[r(2198)], minLength: { value: x, message: n0[r(1090)](t) } });
  }
  [n(550)](x, t) {
    const r = n;
    return new he({ ...this[r(2198)], maxLength: { value: x, message: n0[r(1090)](t) } });
  }
  [n(1396)](x, t) {
    const r = n;
    return new he({ ...this[r(2198)], exactLength: { value: x, message: n0[r(1090)](t) } });
  }
  [n(636)](x) {
    return this[n(1865)](1, x);
  }
}
he[n(2201)] = (i, x) => {
  const t = n;
  return new he({ type: i, minLength: null, maxLength: null, exactLength: null, typeName: p0[t(1373)], ...v0(x) });
};
function Ue(i) {
  const x = n;
  if (i instanceof K0) {
    const t = {};
    for (const r in i[x(809)]) {
      const e = i.shape[r];
      t[r] = we[x(2201)](Ue(e));
    }
    return new K0({ ...i[x(2198)], shape: () => t });
  } else
    return i instanceof he ? new he({ ...i[x(2198)], type: Ue(i[x(520)]) }) : i instanceof we ? we[x(2201)](Ue(i.unwrap())) : i instanceof je ? je.create(Ue(i.unwrap())) : i instanceof Ae ? Ae[x(2201)](i[x(509)][x(1227)]((t) => Ue(t))) : i;
}
class K0 extends I0 {
  constructor() {
    const x = n;
    super(...arguments), this[x(284)] = null, this.nonstrict = this[x(1716)], this.augment = this[x(748)];
  }
  [n(1212)]() {
    const x = n;
    if (this[x(284)] !== null) return this[x(284)];
    const t = this[x(2198)][x(809)](), r = q0[x(681)](t);
    return this[x(284)] = { shape: t, keys: r }, this[x(284)];
  }
  [n(2549)](x) {
    const t = n;
    if (this._getType(x) !== x0[t(1507)]) {
      const d = this[t(1807)](x);
      return Y(d, { code: B[t(410)], expected: x0[t(1507)], received: d[t(619)] }), h0;
    }
    const { status: e, ctx: s } = this[t(534)](x), { shape: a, keys: o } = this[t(1212)](), c = [];
    if (!(this[t(2198)][t(330)] instanceof Ie && this[t(2198)][t(1499)] === "strip")) for (const d in s.data)
      !o.includes(d) && c[t(757)](d);
    const u = [];
    for (const d of o) {
      const f = a[d], l = s[t(2197)][d];
      u[t(757)]({ key: { status: "valid", value: d }, value: f[t(2549)](new pe(s, l, s[t(1225)], d)), alwaysSet: d in s[t(2197)] });
    }
    if (this[t(2198)][t(330)] instanceof Ie) {
      const d = this[t(2198)][t(1499)];
      if (d === t(1716)) for (const f of c)
        u[t(757)]({ key: { status: t(1352), value: f }, value: { status: t(1352), value: s.data[f] } });
      else if (d === t(2579)) c[t(1396)] > 0 && (Y(s, { code: B[t(2429)], keys: c }), e[t(2334)]());
      else if (d !== t(2586)) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this[t(2198)][t(330)];
      for (const f of c) {
        const l = s[t(2197)][f];
        u[t(757)]({ key: { status: t(1352), value: f }, value: d[t(2549)](new pe(s, l, s[t(1225)], f)), alwaysSet: f in s[t(2197)] });
      }
    }
    return s[t(2275)][t(2448)] ? Promise[t(1315)]()[t(1947)](async () => {
      const d = t, f = [];
      for (const l of u) {
        const g = await l.key, h = await l[d(2425)];
        f.push({ key: g, value: h, alwaysSet: l[d(462)] });
      }
      return f;
    })[t(1947)]((d) => ee[t(2514)](e, d)) : ee.mergeObjectSync(e, u);
  }
  get shape() {
    const x = n;
    return this._def[x(809)]();
  }
  [n(2579)](x) {
    const t = n;
    return n0.errToObj, new K0({ ...this[t(2198)], unknownKeys: t(2579), ...x !== void 0 ? { errorMap: (r, e) => {
      var o, c;
      const s = t, a = ((c = (o = this[s(2198)])[s(1045)]) == null ? void 0 : c.call(o, r, e)[s(1717)]) ?? e[s(2602)];
      return r[s(939)] === s(2429) ? { message: n0.errToObj(x)[s(1717)] ?? a } : { message: a };
    } } : {} });
  }
  [n(2586)]() {
    const x = n;
    return new K0({ ...this[x(2198)], unknownKeys: x(2586) });
  }
  passthrough() {
    const x = n;
    return new K0({ ...this[x(2198)], unknownKeys: x(1716) });
  }
  [n(748)](x) {
    const t = n;
    return new K0({ ...this[t(2198)], shape: () => ({ ...this._def[t(809)](), ...x }) });
  }
  merge(x) {
    const t = n;
    return new K0({ unknownKeys: x[t(2198)][t(1499)], catchall: x[t(2198)][t(330)], shape: () => ({ ...this[t(2198)][t(809)](), ...x[t(2198)].shape() }), typeName: p0[t(1728)] });
  }
  setKey(x, t) {
    return this.augment({ [x]: t });
  }
  [n(330)](x) {
    const t = n;
    return new K0({ ...this[t(2198)], catchall: x });
  }
  [n(1970)](x) {
    const t = n, r = {};
    for (const e of q0[t(681)](x))
      x[e] && this[t(809)][e] && (r[e] = this.shape[e]);
    return new K0({ ...this[t(2198)], shape: () => r });
  }
  omit(x) {
    const t = n, r = {};
    for (const e of q0[t(681)](this.shape))
      !x[e] && (r[e] = this[t(809)][e]);
    return new K0({ ...this[t(2198)], shape: () => r });
  }
  deepPartial() {
    return Ue(this);
  }
  partial(x) {
    const t = n, r = {};
    for (const e of q0[t(681)](this.shape)) {
      const s = this[t(809)][e];
      x && !x[e] ? r[e] = s : r[e] = s[t(2262)]();
    }
    return new K0({ ...this[t(2198)], shape: () => r });
  }
  [n(1830)](x) {
    const t = n, r = {};
    for (const e of q0.objectKeys(this[t(809)]))
      if (x && !x[e]) r[e] = this[t(809)][e];
      else {
        let a = this[t(809)][e];
        for (; a instanceof we; )
          a = a[t(2198)][t(1598)];
        r[e] = a;
      }
    return new K0({ ...this[t(2198)], shape: () => r });
  }
  keyof() {
    const x = n;
    return jn(q0[x(681)](this[x(809)]));
  }
}
K0[n(2201)] = (i, x) => {
  const t = n;
  return new K0({ shape: () => i, unknownKeys: t(2586), catchall: Ie[t(2201)](), typeName: p0[t(1728)], ...v0(x) });
}, K0[n(1551)] = (i, x) => {
  const t = n;
  return new K0({ shape: () => i, unknownKeys: t(2579), catchall: Ie[t(2201)](), typeName: p0[t(1728)], ...v0(x) });
}, K0[n(1059)] = (i, x) => {
  const t = n;
  return new K0({ shape: i, unknownKeys: t(2586), catchall: Ie[t(2201)](), typeName: p0[t(1728)], ...v0(x) });
};
class bx extends I0 {
  [n(2549)](x) {
    const t = n, { ctx: r } = this._processInputParams(x), e = this._def.options;
    function s(a) {
      const o = K;
      for (const u of a)
        if (u.result[o(454)] === o(1352)) return u[o(540)];
      for (const u of a)
        if (u[o(540)][o(454)] === o(2334)) return r[o(2275)].issues[o(757)](...u[o(1607)][o(2275)][o(648)]), u[o(540)];
      const c = a[o(1227)]((u) => new Se(u[o(1607)][o(2275)][o(648)]));
      return Y(r, { code: B[o(2185)], unionErrors: c }), h0;
    }
    if (r[t(2275)][t(2448)]) return Promise.all(e.map(async (a) => {
      const o = t, c = { ...r, common: { ...r.common, issues: [] }, parent: null };
      return { result: await a[o(1346)]({ data: r[o(2197)], path: r.path, parent: c }), ctx: c };
    }))[t(1947)](s);
    {
      let a;
      const o = [];
      for (const u of e) {
        const d = { ...r, common: { ...r[t(2275)], issues: [] }, parent: null }, f = u[t(1097)]({ data: r[t(2197)], path: r[t(1225)], parent: d });
        if (f.status === "valid") return f;
        f[t(454)] === t(2334) && !a && (a = { result: f, ctx: d }), d.common[t(648)][t(1396)] && o[t(757)](d[t(2275)][t(648)]);
      }
      if (a) return r[t(2275)].issues.push(...a[t(1607)].common.issues), a.result;
      const c = o[t(1227)]((u) => new Se(u));
      return Y(r, { code: B.invalid_union, unionErrors: c }), h0;
    }
  }
  get options() {
    return this[n(2198)].options;
  }
}
bx[n(2201)] = (i, x) => {
  const t = n;
  return new bx({ options: i, typeName: p0[t(2288)], ...v0(x) });
};
const be = (i) => {
  const x = n;
  return i instanceof Wt ? be(i[x(595)]) : i instanceof qe ? be(i[x(1598)]()) : i instanceof wx ? [i[x(2425)]] : i instanceof De ? i[x(2546)] : i instanceof Zt ? q0[x(2482)](i.enum) : i instanceof kx ? be(i[x(2198)][x(1598)]) : i instanceof Lt ? [void 0] : i instanceof $t ? [null] : i instanceof we ? [void 0, ...be(i[x(582)]())] : i instanceof je ? [null, ...be(i.unwrap())] : i instanceof Mn || i instanceof Px ? be(i[x(582)]()) : i instanceof Ex ? be(i[x(2198)][x(1598)]) : [];
};
class xr extends I0 {
  [n(2549)](x) {
    const t = n, { ctx: r } = this[t(534)](x);
    if (r[t(619)] !== x0.object) return Y(r, { code: B[t(410)], expected: x0[t(1507)], received: r[t(619)] }), h0;
    const e = this.discriminator, s = r[t(2197)][e], a = this[t(372)][t(1364)](s);
    return a ? r.common.async ? a._parseAsync({ data: r[t(2197)], path: r[t(1225)], parent: r }) : a[t(1097)]({ data: r.data, path: r[t(1225)], parent: r }) : (Y(r, { code: B[t(559)], options: Array[t(2371)](this[t(372)].keys()), path: [e] }), h0);
  }
  get [n(2263)]() {
    const x = n;
    return this._def[x(2263)];
  }
  get options() {
    const x = n;
    return this[x(2198)][x(2546)];
  }
  get [n(372)]() {
    return this[n(2198)].optionsMap;
  }
  static [n(2201)](x, t, r) {
    const e = n, s = /* @__PURE__ */ new Map();
    for (const a of t) {
      const o = be(a[e(809)][x]);
      if (!o[e(1396)]) throw new Error(e(2405) + x + "` could not be extracted from all schema options");
      for (const c of o) {
        if (s[e(879)](c)) throw new Error(e(575) + String(x) + e(1271) + String(c));
        s[e(933)](c, a);
      }
    }
    return new xr({ typeName: p0[e(437)], discriminator: x, options: t, optionsMap: s, ...v0(r) });
  }
}
function Vt(i, x) {
  const t = n, r = Pe(i), e = Pe(x);
  if (i === x) return { valid: !0, data: i };
  if (r === x0[t(1507)] && e === x0[t(1507)]) {
    const s = q0[t(681)](x), a = q0[t(681)](i)[t(254)]((c) => s.indexOf(c) !== -1), o = { ...i, ...x };
    for (const c of a) {
      const u = Vt(i[c], x[c]);
      if (!u[t(1352)]) return { valid: !1 };
      o[c] = u[t(2197)];
    }
    return { valid: !0, data: o };
  } else if (r === x0.array && e === x0[t(633)]) {
    if (i[t(1396)] !== x[t(1396)]) return { valid: !1 };
    const s = [];
    for (let a = 0; a < i[t(1396)]; a++) {
      const o = i[a], c = x[a], u = Vt(o, c);
      if (!u.valid) return { valid: !1 };
      s[t(757)](u[t(2197)]);
    }
    return { valid: !0, data: s };
  } else return r === x0.date && e === x0[t(1813)] && +i == +x ? { valid: !0, data: i } : { valid: !1 };
}
class vx extends I0 {
  [n(2549)](x) {
    const t = n, { status: r, ctx: e } = this[t(534)](x), s = (a, o) => {
      const c = t;
      if (Pr(a) || Pr(o)) return h0;
      const u = Vt(a.value, o[c(2425)]);
      return u.valid ? ((Ir(a) || Ir(o)) && r.dirty(), { status: r[c(2425)], value: u[c(2197)] }) : (Y(e, { code: B[c(2515)] }), h0);
    };
    return e.common.async ? Promise.all([this._def.left._parseAsync({ data: e[t(2197)], path: e[t(1225)], parent: e }), this._def.right._parseAsync({ data: e[t(2197)], path: e[t(1225)], parent: e })]).then(([a, o]) => s(a, o)) : s(this[t(2198)][t(842)][t(1097)]({ data: e.data, path: e[t(1225)], parent: e }), this[t(2198)].right._parseSync({ data: e[t(2197)], path: e[t(1225)], parent: e }));
  }
}
vx[n(2201)] = (i, x, t) => {
  const r = n;
  return new vx({ left: i, right: x, typeName: p0[r(2401)], ...v0(t) });
};
class Ae extends I0 {
  _parse(x) {
    const t = n, { status: r, ctx: e } = this[t(534)](x);
    if (e[t(619)] !== x0[t(633)]) return Y(e, { code: B[t(410)], expected: x0.array, received: e[t(619)] }), h0;
    if (e[t(2197)][t(1396)] < this[t(2198)].items[t(1396)]) return Y(e, { code: B.too_small, minimum: this._def[t(509)].length, inclusive: !0, exact: !1, type: t(633) }), h0;
    !this[t(2198)][t(2090)] && e[t(2197)][t(1396)] > this[t(2198)][t(509)][t(1396)] && (Y(e, { code: B[t(1844)], maximum: this[t(2198)][t(509)][t(1396)], inclusive: !0, exact: !1, type: t(633) }), r[t(2334)]());
    const a = [...e[t(2197)]].map((o, c) => {
      const u = t, d = this[u(2198)][u(509)][c] || this[u(2198)][u(2090)];
      return d ? d[u(2549)](new pe(e, o, e[u(1225)], c)) : null;
    }).filter((o) => !!o);
    return e[t(2275)].async ? Promise[t(1413)](a)[t(1947)]((o) => ee[t(2416)](r, o)) : ee[t(2416)](r, a);
  }
  get [n(509)]() {
    const x = n;
    return this[x(2198)][x(509)];
  }
  [n(2090)](x) {
    const t = n;
    return new Ae({ ...this[t(2198)], rest: x });
  }
}
Ae[n(2201)] = (i, x) => {
  const t = n;
  if (!Array[t(1606)](i)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ae({ items: i, typeName: p0[t(2195)], rest: null, ...v0(x) });
};
class yx extends I0 {
  get [n(441)]() {
    const x = n;
    return this._def[x(532)];
  }
  get valueSchema() {
    const x = n;
    return this[x(2198)][x(765)];
  }
  [n(2549)](x) {
    const t = n, { status: r, ctx: e } = this[t(534)](x);
    if (e[t(619)] !== x0[t(1507)]) return Y(e, { code: B[t(410)], expected: x0[t(1507)], received: e[t(619)] }), h0;
    const s = [], a = this[t(2198)].keyType, o = this[t(2198)].valueType;
    for (const c in e[t(2197)])
      s[t(757)]({ key: a[t(2549)](new pe(e, c, e[t(1225)], c)), value: o[t(2549)](new pe(e, e[t(2197)][c], e.path, c)), alwaysSet: c in e[t(2197)] });
    return e[t(2275)][t(2448)] ? ee[t(565)](r, s) : ee.mergeObjectSync(r, s);
  }
  get [n(520)]() {
    return this[n(2198)].valueType;
  }
  static [n(2201)](x, t, r) {
    const e = n;
    return t instanceof I0 ? new yx({ keyType: x, valueType: t, typeName: p0.ZodRecord, ...v0(r) }) : new yx({ keyType: ye[e(2201)](), valueType: x, typeName: p0[e(1372)], ...v0(t) });
  }
}
class Fr extends I0 {
  get [n(441)]() {
    return this[n(2198)].keyType;
  }
  get [n(2269)]() {
    const x = n;
    return this[x(2198)][x(765)];
  }
  [n(2549)](x) {
    const t = n, { status: r, ctx: e } = this._processInputParams(x);
    if (e[t(619)] !== x0.map) return Y(e, { code: B[t(410)], expected: x0[t(1227)], received: e.parsedType }), h0;
    const s = this._def.keyType, a = this[t(2198)][t(765)], o = [...e[t(2197)].entries()][t(1227)](([c, u], d) => {
      const f = t;
      return { key: s[f(2549)](new pe(e, c, e[f(1225)], [d, f(2022)])), value: a[f(2549)](new pe(e, u, e[f(1225)], [d, "value"])) };
    });
    if (e[t(2275)][t(2448)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise[t(1315)]()[t(1947)](async () => {
        const u = t;
        for (const d of o) {
          const f = await d[u(2022)], l = await d.value;
          if (f[u(454)] === u(814) || l[u(454)] === u(814)) return h0;
          (f.status === u(2334) || l[u(454)] === u(2334)) && r[u(2334)](), c[u(933)](f[u(2425)], l[u(2425)]);
        }
        return { status: r.value, value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of o) {
        const d = u.key, f = u[t(2425)];
        if (d[t(454)] === t(814) || f[t(454)] === t(814)) return h0;
        (d.status === t(2334) || f.status === t(2334)) && r[t(2334)](), c[t(933)](d[t(2425)], f[t(2425)]);
      }
      return { status: r[t(2425)], value: c };
    }
  }
}
Fr[n(2201)] = (i, x, t) => {
  const r = n;
  return new Fr({ valueType: x, keyType: i, typeName: p0[r(1905)], ...v0(t) });
};
class tx extends I0 {
  _parse(x) {
    const t = n, { status: r, ctx: e } = this[t(534)](x);
    if (e[t(619)] !== x0[t(933)]) return Y(e, { code: B.invalid_type, expected: x0[t(933)], received: e[t(619)] }), h0;
    const s = this[t(2198)];
    s[t(584)] !== null && e[t(2197)][t(1232)] < s[t(584)][t(2425)] && (Y(e, { code: B.too_small, minimum: s[t(584)].value, type: t(933), inclusive: !0, exact: !1, message: s[t(584)][t(1717)] }), r[t(2334)]()), s.maxSize !== null && e[t(2197)][t(1232)] > s.maxSize[t(2425)] && (Y(e, { code: B[t(1844)], maximum: s.maxSize[t(2425)], type: t(933), inclusive: !0, exact: !1, message: s.maxSize[t(1717)] }), r.dirty());
    const a = this._def[t(765)];
    function o(u) {
      const d = t, f = /* @__PURE__ */ new Set();
      for (const l of u) {
        if (l.status === d(814)) return h0;
        l[d(454)] === d(2334) && r[d(2334)](), f[d(2062)](l.value);
      }
      return { status: r[d(2425)], value: f };
    }
    const c = [...e[t(2197)].values()].map((u, d) => a._parse(new pe(e, u, e.path, d)));
    return e[t(2275)][t(2448)] ? Promise[t(1413)](c)[t(1947)]((u) => o(u)) : o(c);
  }
  [n(1865)](x, t) {
    const r = n;
    return new tx({ ...this[r(2198)], minSize: { value: x, message: n0[r(1090)](t) } });
  }
  [n(550)](x, t) {
    const r = n;
    return new tx({ ...this[r(2198)], maxSize: { value: x, message: n0[r(1090)](t) } });
  }
  size(x, t) {
    const r = n;
    return this[r(1865)](x, t)[r(550)](x, t);
  }
  [n(636)](x) {
    return this[n(1865)](1, x);
  }
}
tx[n(2201)] = (i, x) => {
  const t = n;
  return new tx({ valueType: i, minSize: null, maxSize: null, typeName: p0[t(1301)], ...v0(x) });
};
class Wt extends I0 {
  get [n(595)]() {
    const x = n;
    return this[x(2198)][x(857)]();
  }
  [n(2549)](x) {
    const t = n, { ctx: r } = this[t(534)](x);
    return this[t(2198)].getter()[t(2549)]({ data: r[t(2197)], path: r[t(1225)], parent: r });
  }
}
Wt[n(2201)] = (i, x) => {
  const t = n;
  return new Wt({ getter: i, typeName: p0[t(2183)], ...v0(x) });
};
class wx extends I0 {
  [n(2549)](x) {
    const t = n;
    if (x[t(2197)] !== this[t(2198)].value) {
      const r = this[t(1807)](x);
      return Y(r, { received: r[t(2197)], code: B[t(1605)], expected: this[t(2198)][t(2425)] }), h0;
    }
    return { status: t(1352), value: x[t(2197)] };
  }
  get [n(2425)]() {
    const x = n;
    return this._def[x(2425)];
  }
}
wx.create = (i, x) => new wx({ value: i, typeName: p0.ZodLiteral, ...v0(x) });
function jn(i, x) {
  const t = n;
  return new De({ values: i, typeName: p0[t(655)], ...v0(x) });
}
class De extends I0 {
  [n(2549)](x) {
    const t = n;
    if (typeof x[t(2197)] != "string") {
      const r = this[t(1807)](x), e = this[t(2198)][t(1950)];
      return Y(r, { expected: q0.joinValues(e), received: r[t(619)], code: B[t(410)] }), h0;
    }
    if (!this[t(516)] && (this[t(516)] = new Set(this[t(2198)][t(1950)])), !this._cache[t(879)](x[t(2197)])) {
      const r = this[t(1807)](x), e = this[t(2198)][t(1950)];
      return Y(r, { received: r.data, code: B.invalid_enum_value, options: e }), h0;
    }
    return re(x.data);
  }
  get [n(2546)]() {
    return this[n(2198)].values;
  }
  get [n(1587)]() {
    const x = n, t = {};
    for (const r of this._def[x(1950)])
      t[r] = r;
    return t;
  }
  get [n(2190)]() {
    const x = n, t = {};
    for (const r of this._def[x(1950)])
      t[r] = r;
    return t;
  }
  get [n(2005)]() {
    const x = n, t = {};
    for (const r of this[x(2198)].values)
      t[r] = r;
    return t;
  }
  [n(810)](x, t = this[n(2198)]) {
    const r = n;
    return De[r(2201)](x, { ...this[r(2198)], ...t });
  }
  exclude(x, t = this._def) {
    const r = n;
    return De[r(2201)](this.options[r(254)]((e) => !x[r(1334)](e)), { ...this[r(2198)], ...t });
  }
}
De[n(2201)] = jn;
class Zt extends I0 {
  [n(2549)](x) {
    const t = n, r = q0[t(1547)](this._def.values), e = this[t(1807)](x);
    if (e[t(619)] !== x0[t(1401)] && e.parsedType !== x0[t(1985)]) {
      const s = q0[t(2482)](r);
      return Y(e, { expected: q0.joinValues(s), received: e[t(619)], code: B[t(410)] }), h0;
    }
    if (!this._cache && (this[t(516)] = new Set(q0[t(1547)](this._def[t(1950)]))), !this[t(516)][t(879)](x.data)) {
      const s = q0[t(2482)](r);
      return Y(e, { received: e[t(2197)], code: B[t(1634)], options: s }), h0;
    }
    return re(x[t(2197)]);
  }
  get [n(1587)]() {
    return this[n(2198)].values;
  }
}
Zt[n(2201)] = (i, x) => {
  const t = n;
  return new Zt({ values: i, typeName: p0[t(1052)], ...v0(x) });
};
class Sx extends I0 {
  unwrap() {
    return this[n(2198)].type;
  }
  _parse(x) {
    const t = n, { ctx: r } = this._processInputParams(x);
    if (r[t(619)] !== x0[t(601)] && r[t(2275)][t(2448)] === !1) return Y(r, { code: B[t(410)], expected: x0[t(601)], received: r[t(619)] }), h0;
    const e = r.parsedType === x0.promise ? r.data : Promise[t(1315)](r[t(2197)]);
    return re(e[t(1947)]((s) => {
      const a = t;
      return this[a(2198)][a(1087)].parseAsync(s, { path: r[a(1225)], errorMap: r[a(2275)][a(2505)] });
    }));
  }
}
Sx[n(2201)] = (i, x) => {
  const t = n;
  return new Sx({ type: i, typeName: p0[t(783)], ...v0(x) });
};
class qe extends I0 {
  innerType() {
    return this._def.schema;
  }
  [n(1785)]() {
    const x = n;
    return this._def[x(595)][x(2198)].typeName === p0[x(1829)] ? this[x(2198)][x(595)].sourceType() : this[x(2198)][x(595)];
  }
  [n(2549)](x) {
    const t = n, { status: r, ctx: e } = this[t(534)](x), s = this[t(2198)][t(1184)] || null, a = { addIssue: (o) => {
      const c = t;
      Y(e, o), o[c(2072)] ? r[c(680)]() : r[c(2334)]();
    }, get path() {
      return e.path;
    } };
    if (a[t(1226)] = a[t(1226)][t(2045)](a), s.type === t(818)) {
      const o = s[t(1503)](e[t(2197)], a);
      if (e[t(2275)][t(2448)]) return Promise[t(1315)](o)[t(1947)](async (c) => {
        const u = t;
        if (r.value === u(814)) return h0;
        const d = await this._def.schema[u(1346)]({ data: c, path: e[u(1225)], parent: e });
        return d[u(454)] === u(814) ? h0 : d[u(454)] === u(2334) ? Qe(d.value) : r[u(2425)] === u(2334) ? Qe(d[u(2425)]) : d;
      });
      {
        if (r[t(2425)] === t(814)) return h0;
        const c = this[t(2198)].schema[t(1097)]({ data: o, path: e.path, parent: e });
        return c[t(454)] === "aborted" ? h0 : c.status === t(2334) ? Qe(c[t(2425)]) : r.value === "dirty" ? Qe(c.value) : c;
      }
    }
    if (s[t(1087)] === "refinement") {
      const o = (c) => {
        const u = t, d = s[u(763)](c, a);
        if (e.common[u(2448)]) return Promise[u(1315)](d);
        if (d instanceof Promise) throw new Error(u(1886));
        return c;
      };
      if (e[t(2275)].async === !1) {
        const c = this._def.schema[t(1097)]({ data: e[t(2197)], path: e[t(1225)], parent: e });
        return c[t(454)] === t(814) ? h0 : (c[t(454)] === "dirty" && r.dirty(), o(c[t(2425)]), { status: r.value, value: c.value });
      } else return this[t(2198)][t(595)][t(1346)]({ data: e.data, path: e[t(1225)], parent: e }).then((c) => {
        const u = t;
        return c.status === u(814) ? h0 : (c.status === u(2334) && r[u(2334)](), o(c[u(2425)])[u(1947)](() => ({ status: r[u(2425)], value: c.value })));
      });
    }
    if (s[t(1087)] === "transform")
      if (e[t(2275)][t(2448)] === !1) {
        const o = this[t(2198)][t(595)][t(1097)]({ data: e[t(2197)], path: e[t(1225)], parent: e });
        if (!Ve(o)) return h0;
        const c = s[t(1503)](o[t(2425)], a);
        if (c instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r[t(2425)], value: c };
      } else return this[t(2198)].schema[t(1346)]({ data: e.data, path: e[t(1225)], parent: e })[t(1947)]((o) => {
        const c = t;
        return Ve(o) ? Promise[c(1315)](s[c(1503)](o[c(2425)], a))[c(1947)]((u) => ({ status: r[c(2425)], value: u })) : h0;
      });
    q0[t(2277)](s);
  }
}
qe[n(2201)] = (i, x, t) => {
  const r = n;
  return new qe({ schema: i, typeName: p0[r(1829)], effect: x, ...v0(t) });
}, qe[n(1701)] = (i, x, t) => {
  const r = n;
  return new qe({ schema: x, effect: { type: "preprocess", transform: i }, typeName: p0[r(1829)], ...v0(t) });
};
class we extends I0 {
  [n(2549)](x) {
    const t = n;
    return this._getType(x) === x0[t(654)] ? re(void 0) : this[t(2198)][t(1598)][t(2549)](x);
  }
  unwrap() {
    return this[n(2198)].innerType;
  }
}
we[n(2201)] = (i, x) => {
  const t = n;
  return new we({ innerType: i, typeName: p0[t(992)], ...v0(x) });
};
class je extends I0 {
  [n(2549)](x) {
    const t = n;
    return this[t(1660)](x) === x0[t(417)] ? re(null) : this[t(2198)].innerType[t(2549)](x);
  }
  [n(582)]() {
    return this[n(2198)].innerType;
  }
}
je[n(2201)] = (i, x) => {
  const t = n;
  return new je({ innerType: i, typeName: p0[t(371)], ...v0(x) });
};
class kx extends I0 {
  [n(2549)](x) {
    const t = n, { ctx: r } = this._processInputParams(x);
    let e = r[t(2197)];
    return r[t(619)] === x0[t(654)] && (e = this[t(2198)].defaultValue()), this[t(2198)].innerType[t(2549)]({ data: e, path: r.path, parent: r });
  }
  [n(378)]() {
    const x = n;
    return this[x(2198)][x(1598)];
  }
}
kx[n(2201)] = (i, x) => {
  const t = n;
  return new kx({ innerType: i, typeName: p0[t(1917)], defaultValue: typeof x[t(906)] === t(1856) ? x.default : () => x[t(906)], ...v0(x) });
};
class Ex extends I0 {
  [n(2549)](x) {
    const t = n, { ctx: r } = this._processInputParams(x), e = { ...r, common: { ...r[t(2275)], issues: [] } }, s = this[t(2198)][t(1598)]._parse({ data: e[t(2197)], path: e.path, parent: { ...e } });
    return mx(s) ? s[t(1947)]((a) => {
      const o = t;
      return { status: o(1352), value: a.status === o(1352) ? a[o(2425)] : this[o(2198)][o(537)]({ get error() {
        const c = o;
        return new Se(e[c(2275)][c(648)]);
      }, input: e[o(2197)] }) };
    }) : { status: t(1352), value: s[t(454)] === "valid" ? s[t(2425)] : this[t(2198)][t(537)]({ get error() {
      const a = t;
      return new Se(e.common[a(648)]);
    }, input: e[t(2197)] }) };
  }
  [n(1005)]() {
    return this[n(2198)].innerType;
  }
}
Ex.create = (i, x) => {
  const t = n;
  return new Ex({ innerType: i, typeName: p0.ZodCatch, catchValue: typeof x.catch == "function" ? x[t(340)] : () => x[t(340)], ...v0(x) });
};
class Nr extends I0 {
  [n(2549)](x) {
    const t = n;
    if (this[t(1660)](x) !== x0.nan) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: B.invalid_type, expected: x0.nan, received: e.parsedType }), h0;
    }
    return { status: t(1352), value: x[t(2197)] };
  }
}
Nr[n(2201)] = (i) => {
  const x = n;
  return new Nr({ typeName: p0[x(606)], ...v0(i) });
};
class Mn extends I0 {
  _parse(x) {
    const t = n, { ctx: r } = this[t(534)](x), e = r[t(2197)];
    return this[t(2198)][t(1087)][t(2549)]({ data: e, path: r[t(1225)], parent: r });
  }
  [n(582)]() {
    const x = n;
    return this[x(2198)][x(1087)];
  }
}
class tr extends I0 {
  [n(2549)](x) {
    const t = n, { status: r, ctx: e } = this._processInputParams(x);
    if (e.common[t(2448)])
      return (async () => {
        const a = t, o = await this[a(2198)].in[a(1346)]({ data: e.data, path: e[a(1225)], parent: e });
        return o[a(454)] === a(814) ? h0 : o[a(454)] === "dirty" ? (r[a(2334)](), Qe(o[a(2425)])) : this[a(2198)][a(249)][a(1346)]({ data: o.value, path: e[a(1225)], parent: e });
      })();
    {
      const s = this[t(2198)].in[t(1097)]({ data: e.data, path: e[t(1225)], parent: e });
      return s.status === t(814) ? h0 : s.status === t(2334) ? (r[t(2334)](), { status: t(2334), value: s[t(2425)] }) : this._def[t(249)]._parseSync({ data: s[t(2425)], path: e.path, parent: e });
    }
  }
  static create(x, t) {
    return new tr({ in: x, out: t, typeName: p0.ZodPipeline });
  }
}
class Px extends I0 {
  [n(2549)](x) {
    const t = n, r = this[t(2198)][t(1598)][t(2549)](x), e = (s) => {
      const a = t;
      return Ve(s) && (s[a(2425)] = Object[a(519)](s[a(2425)])), s;
    };
    return mx(r) ? r.then((s) => e(s)) : e(r);
  }
  [n(582)]() {
    const x = n;
    return this[x(2198)][x(1598)];
  }
}
Px[n(2201)] = (i, x) => {
  const t = n;
  return new Px({ innerType: i, typeName: p0[t(676)], ...v0(x) });
};
var p0;
(function(i) {
  const x = n;
  i[x(1943)] = x(1943), i[x(2089)] = x(2089), i.ZodNaN = x(606), i[x(2210)] = x(2210), i[x(898)] = "ZodBoolean", i[x(2481)] = "ZodDate", i[x(1663)] = x(1663), i[x(1731)] = x(1731), i[x(1378)] = x(1378), i[x(613)] = "ZodAny", i.ZodUnknown = "ZodUnknown", i[x(2041)] = "ZodNever", i.ZodVoid = "ZodVoid", i[x(1373)] = x(1373), i[x(1728)] = x(1728), i[x(2288)] = x(2288), i[x(437)] = x(437), i[x(2401)] = x(2401), i[x(2195)] = x(2195), i[x(1372)] = x(1372), i.ZodMap = "ZodMap", i[x(1301)] = x(1301), i[x(1353)] = x(1353), i[x(2183)] = x(2183), i.ZodLiteral = x(1797), i[x(655)] = x(655), i[x(1829)] = "ZodEffects", i[x(1052)] = x(1052), i[x(992)] = x(992), i[x(371)] = "ZodNullable", i[x(1917)] = x(1917), i.ZodCatch = x(590), i[x(783)] = x(783), i.ZodBranded = "ZodBranded", i[x(2042)] = x(2042), i[x(676)] = "ZodReadonly";
})(p0 || (p0 = {}));
const w = ye[n(2201)], r0 = We.create, _ = Mt.create, N0 = zt[n(2201)], nx = Ht[n(2201)];
Ie[n(2201)];
const $x = Ut[n(2201)], R0 = he.create, k = K0.create, J0 = bx.create, Ln = xr[n(2201)];
vx[n(2201)], Ae[n(2201)];
const H0 = yx[n(2201)], t0 = wx.create, F0 = De.create;
Sx[n(2201)];
const Z = we[n(2201)];
je.create;
var en;
class ni {
  constructor(x, t) {
    m0(this, en);
    m0(this, "nodeId");
    const r = n;
    this[r(292)] = x, this[r(322)] = t;
  }
  get [(en = n(292), n(845))]() {
    const x = n, t = this[x(292)].getNodeStore(this.nodeId);
    if (!t) throw new Error("No store found for node " + this[x(322)]);
    return t;
  }
  get actions() {
    const x = n, t = this[x(292)][x(440)]()[x(1787)](this[x(322)]);
    if (!t) throw new Error(x(2421) + this[x(322)]);
    return new Proxy({}, { get: (e, s) => {
      const a = x;
      if (typeof s != "string") return;
      const o = t[a(2282)][s], c = s[a(2534)](a(2606));
      if (!o && !c) throw new Error("Action " + s + a(2047) + this.nodeId);
      return async (u, d) => {
        const f = a, l = this.getConnectionInfo();
        if (!l) throw new Error(f(2261) + this[f(322)]);
        const { transport: g, path: h } = l, m = this.graphInstance[f(1683)]();
        if (!(o != null && o.stream)) {
          const S = N0();
          let E;
          if (h[f(1396)] === 2) E = await g.request({ method: f(1636), params: { action: s, data: u, sourceNodeId: m } }, S);
          else try {
            E = await g[f(365)]({ method: f(1636), params: { action: f(958), data: { targetNodeId: this.nodeId, targetAction: s, targetData: u, forwardPath: h[f(1012)](1) }, sourceNodeId: m } }, S);
          } catch (N) {
            throw console[f(2281)](f(355) + s + ":", N), console.error({ targetNodeId: this.nodeId, targetAction: s, targetData: u, forwardPath: h[f(1012)](1) }), N;
          }
          return E;
        }
        let v;
        return h[f(1396)] === 2 ? v = g.streamRequest({ action: s, data: u, sourceNodeId: m }, o[f(2181)], d) : v = g.streamRequest({ action: f(958), data: { targetNodeId: this[f(322)], targetAction: s, targetData: u, forwardPath: h[f(1012)](1) }, sourceNodeId: m }, o.responseSchema, d), v;
      };
    } });
  }
  [n(1058)]() {
    const x = n;
    return this.graphInstance[x(2193)](this[x(322)]);
  }
}
var xn, tn;
class $n {
  constructor(x) {
    m0(this, "graphInstance");
    m0(this, tn);
    m0(this, xn);
    const t = n;
    this[t(292)] = x, this[t(640)] = x[t(640)], this.broadcastManager = x.broadcastManager;
  }
  [(tn = n(640), xn = n(1290), n(2329))]({ store: x, storeName: t, onStateUpdate: r, requestInitialState: e }) {
    const s = n;
    this[s(1290)][s(943)](s(1366) + t, (a) => {
      const o = s;
      try {
        a.sourceNodeId !== this.graphInstance[o(1683)]() && r(a[o(1124)]);
      } catch (c) {
        console[o(2281)](o(1051) + t + ":", c);
      }
    });
  }
  [n(1592)]({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: e }) {
    const s = n, a = this[s(292)][s(1683)](), o = async (d, f = !1) => {
      const l = s;
      if (this[l(1069)]()) try {
        await this[l(1290)][l(1840)](l(1366) + t, { storeName: t, sourceNodeId: a, stateUpdate: d, isInitialState: f });
      } catch (h) {
        console[l(2281)](l(2496) + t + ":", h);
      }
    }, c = x[s(2213)]((d) => {
      o(d, !1);
    });
    e(() => {
      o(x[s(1298)](), !0);
    });
    const u = "__internal_requestInitialState_" + t;
    return this[s(640)][s(347)](u, async () => {
      const d = s, f = x[d(1298)]();
      return await o(f, !0), { success: !0 };
    }), this.broadcastManager[s(943)](s(666), async (d) => {
      const f = s;
      try {
        (d[f(488)] === a || d[f(852)] === a) && await o(x.getState(), !0);
      } catch {
      }
    }), () => {
      var f;
      const d = s;
      c(), (f = this[d(640)].actionHandlers) == null || f.delete(u);
    };
  }
  isTransportReady() {
    var t;
    const x = n;
    try {
      const r = this[x(292)].connectionManager, e = r && r[x(1239)]() > 0, s = ((t = this[x(1290)][x(1028)]) == null ? void 0 : t.size) > 0;
      return e || s;
    } catch {
      return !!this[x(1290)];
    }
  }
  async broadcastCurrentState(x, t) {
    const r = n, e = this[r(292)][r(1683)]();
    if (this[r(1069)]()) try {
      await this[r(1290)][r(1840)](r(1366) + t, { storeName: t, sourceNodeId: e, stateUpdate: x[r(1298)](), isInitialState: !0 });
    } catch {
    }
  }
}
function ai({ graphInstance: i, store: x, name: t }) {
  const r = new $n(i), e = (a) => {
    const o = K, c = x[o(1298)](), u = { ...c, ...a };
    x[o(847)](u);
  }, s = async () => {
    const a = K, o = a(321) + t;
    try {
      const c = i.getNode(t);
      c && c[a(2282)] && c[a(2282)][o] && await c.actions[o]();
    } catch (c) {
      console[a(2512)](a(978) + t + ":", c);
    }
  };
  r.initializeConsumer({ store: x, storeName: t, onStateUpdate: e, requestInitialState: s });
}
function ii({ graphInstance: i, store: x, name: t }) {
  const r = n, e = new $n(i), s = async (o) => {
  }, a = (o) => {
  };
  return e[r(1592)]({ store: x, storeName: t, sendStateUpdate: s, onInitialStateRequested: a });
}
var rn, sn, nn;
class oi {
  constructor(x) {
    m0(this, nn, /* @__PURE__ */ new Map());
    m0(this, sn, /* @__PURE__ */ new Map());
    m0(this, rn, /* @__PURE__ */ new Set());
    m0(this, "currentNodeId");
    const t = n;
    this[t(2120)] = x;
  }
  [(nn = n(1345), sn = n(622), rn = n(1451), n(269))](x) {
    return (t) => {
      const r = K;
      if (t && t.__origin === this[r(2120)]) return;
      const e = this[r(1345)][r(1364)](x);
      if (e) {
        const { __origin: s, forwarded: a, ...o } = t || {};
        for (const c of e)
          try {
            c(o);
          } catch (u) {
            console[r(2281)](r(366) + x + ":", u);
          }
      }
      !t[r(304)] && this[r(2044)](x, t);
    };
  }
  async [n(2044)](x, t) {
    const r = n;
    try {
      const e = { ...t, forwarded: !0 }, s = [...Array[r(2371)](this[r(622)].values()), ...Array.from(this[r(1451)])], a = s[r(1227)]((o) => {
        const c = r;
        return o[c(614)]({ method: c(2582), params: { messageType: x, message: e } })[c(340)]((u) => {
          console[c(2281)]("[BroadcastManager] Error forwarding " + x + ":", u);
        });
      });
      await Promise.all(a);
    } catch (e) {
      console.error(r(288), e);
    }
  }
  [n(943)](x, t) {
    const r = n;
    !this[r(1345)][r(879)](x) && this[r(1345)][r(933)](x, /* @__PURE__ */ new Set()), this[r(1345)][r(1364)](x)[r(2062)](t);
  }
  [n(478)](x) {
    this[n(1014)](x);
  }
  [n(1014)](x) {
    const t = n, r = k({ method: t0(t(2582)), params: k({ messageType: w(), message: N0() }) });
    x[t(560)](r, async (e) => {
      const s = t, a = e[s(665)][s(260)];
      this[s(269)](a)(e[s(665)][s(1717)]);
    });
  }
  addMiddleware(x, t) {
    const r = n;
    this[r(622)][r(933)](x, t), this[r(478)](t);
  }
  [n(843)](x) {
    this.transports.delete(x);
  }
  async [n(1840)](x, t) {
    const r = n, e = [...Array[r(2371)](this[r(622)][r(1950)]()), ...Array[r(2371)](this[r(1451)])], s = e[r(1227)]((a) => a[r(614)]({ method: "sdppp/broadcast", params: { messageType: x, message: t } }));
    await Promise.all(s);
  }
  [n(1805)](x) {
    const t = n;
    this[t(1451)][t(2062)](x), this[t(478)](x);
  }
  getHandlerTypes() {
    const x = n;
    return Array[x(2371)](this[x(1345)][x(2109)]());
  }
  [n(238)]() {
    const x = n;
    this[x(1345)][x(238)](), this[x(622)][x(238)](), this[x(1451)][x(238)]();
  }
}
var an;
class ci {
  constructor(x, t, r) {
    m0(this, "actionHandlers", /* @__PURE__ */ new Map());
    m0(this, an);
    m0(this, "currentNodeId");
    m0(this, "getTransport");
    const e = n;
    this[e(779)] = x, this[e(2120)] = t, this.getTransport = r;
  }
  [(an = n(779), n(2576))](x, t) {
    const r = n, e = this[r(779)][r(1787)](this.currentNodeId);
    if (!e) throw new Error("Node definition not found for " + this[r(2120)]);
    const s = e[r(2282)][x];
    if (!s) throw new Error(r(2153) + String(x) + r(2047) + this[r(2120)]);
    this[r(1639)](x, t, s), this[r(1802)][r(933)](x, t);
  }
  [n(1639)](x, t, r) {
    r[n(1407)];
  }
  [n(347)](x, t) {
    const r = n;
    this[r(1802)][r(933)](x, t);
  }
  [n(1805)](x) {
    const t = n;
    for (const [r, e] of this.actionHandlers) {
      const s = this[t(779)].getNode(this[t(2120)]), a = s == null ? void 0 : s[t(2282)][r];
      if (r[t(2534)](t(2606)) ? !1 : (a == null ? void 0 : a[t(1407)]) === !0) {
        const u = k({ action: t0(r) });
        x.registerStreamRequestorHandler(u, async function* (d, f, l) {
          const g = t, h = d[g(2197)] || d, m = e(h, f, l);
          if (m && typeof m === g(1507) && Symbol[g(836)] in m) for await (const v of m)
            yield v === void 0 ? {} : v;
          else {
            const v = await m;
            yield v === void 0 ? {} : v;
          }
        });
      }
    }
    this[t(1151)](x), this[t(2440)](x);
  }
  registerProxyForwardHandler(x) {
    const t = n, r = k({ action: t0(t(958)) }), e = this;
    x[t(2238)](r, async function* (s, a, o) {
      const c = t, u = s.data || s, { targetNodeId: d, targetAction: f, targetData: l, forwardPath: g } = u;
      if (!g || g[c(1396)] === 0) throw new Error(c(2297));
      const h = g[0], m = g.slice(1);
      if (m[c(1396)] === 0 && h === e[c(2120)]) {
        const v = e[c(1802)][c(1364)](f);
        if (!v) throw new Error(c(2153) + f + c(2037) + e.currentNodeId);
        const S = v(l, a, o);
        if (S && typeof S == "object" && Symbol[c(836)] in S) for await (const E of S)
          yield E === void 0 ? {} : E;
        else {
          const E = await S;
          yield E === void 0 ? {} : E;
        }
        return;
      }
      if (h === e[c(2120)] && m.length > 0) {
        const v = m[0], S = e.getTransport(v);
        if (S) {
          const E = await S[c(791)]({ action: c(958), data: { targetNodeId: d, targetAction: f, targetData: l, forwardPath: m } }, k({}), o);
          for await (const N of E)
            yield N === void 0 ? {} : N;
          return;
        }
        throw new Error(c(1467) + v + c(1158));
      }
      throw new Error(c(367) + e[c(2120)] + " not in path " + g);
    });
  }
  [n(493)]() {
    const x = n;
    return Array.from(this.actionHandlers[x(2109)]());
  }
  hasAction(x) {
    const t = n;
    return this.actionHandlers[t(879)](x);
  }
  getHandler(x) {
    const t = n;
    return this[t(1802)][t(1364)](x);
  }
  [n(238)]() {
    const x = n;
    this[x(1802)][x(238)]();
  }
  [n(1490)](x, t, r) {
  }
  [n(2440)](x) {
    const t = n, r = k({ method: t0(t(1636)), params: k({ action: w(), data: N0().optional() }) }), e = this;
    x[t(815)](r, async (s, a) => {
      const o = t, { action: c, data: u } = s.params;
      if (c === "__proxy_forward") return await e.handleDirectProxyForward(u, a);
      const d = e[o(1802)].get(c);
      if (!d) throw new Error("Action " + c + o(2037) + e[o(2120)]);
      const f = d(u, a), l = await f;
      return l === void 0 ? {} : l;
    });
  }
  async handleDirectProxyForward(x, t) {
    const r = n, { targetNodeId: e, targetAction: s, targetData: a, forwardPath: o } = x;
    if (!o || o[r(1396)] === 0) throw new Error(r(2297));
    const c = o[0], u = o[r(1012)](1);
    if (u.length === 0 && c === this[r(2120)]) {
      const d = this.actionHandlers[r(1364)](s);
      if (!d) throw new Error(r(2153) + s + r(2037) + this.currentNodeId);
      const f = d(a, t), l = await f;
      return l === void 0 ? {} : l;
    }
    if (c === this[r(2120)] && u[r(1396)] > 0) {
      const d = u[0], f = this[r(1915)](d);
      if (f) return await f[r(365)]({ method: "sdppp/directRequest", params: { action: r(958), data: { targetNodeId: e, targetAction: s, targetData: a, forwardPath: u } } }, N0());
      throw new Error(r(1467) + d + r(1158));
    }
    throw new Error(r(367) + this[r(2120)] + r(1604) + o);
  }
}
var on, cn, un;
class ui {
  constructor(x, t) {
    m0(this, un);
    m0(this, cn);
    m0(this, on, /* @__PURE__ */ new Set());
    const r = n;
    this[r(779)] = x, this.currentNodeId = t;
  }
  markConnected(x) {
    const t = n;
    this[t(1076)][t(2062)](x);
  }
  [(un = n(779), cn = n(2120), on = n(1076), n(2318))](x) {
    const t = n;
    this[t(1076)][t(381)](x);
  }
  [n(1242)](x) {
    const t = n;
    return this.connectedNodes[t(879)](x);
  }
  findPath(x, t) {
    const r = n;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), s = [{ nodeId: x, path: [x] }];
    for (; s[r(1396)] > 0; ) {
      const { nodeId: a, path: o } = s[r(2225)]();
      if (e[r(879)](a)) continue;
      e.add(a);
      const c = this.definition[r(772)](a);
      for (const u of c) {
        if (u === t) return [...o, u];
        !e[r(879)](u) && s[r(757)]({ nodeId: u, path: [...o, u] });
      }
    }
  }
  [n(2363)]() {
    const x = n;
    return Array.from(this[x(1076)]);
  }
  getConnectionCount() {
    return this.connectedNodes.size;
  }
  [n(431)]() {
    const x = n, t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), e = [this[x(2120)]];
    for (r[x(2062)](this[x(2120)]); e[x(1396)] > 0; ) {
      const s = e.shift(), a = this.definition[x(772)](s);
      for (const o of a)
        !r[x(879)](o) && (r[x(2062)](o), (this[x(1076)].has(o) || this.canReachThroughConnectedNodes(o, r)) && (t.add(o), e[x(757)](o)));
    }
    return Array[x(2371)](t);
  }
  [n(744)](x, t) {
    const r = n, e = this[r(500)](this[r(2120)], x);
    if (!e || e[r(1396)] <= 1) return !1;
    for (let s = 1; s < e[r(1396)] - 1; s++)
      if (!this[r(1076)].has(e[s])) return !1;
    return !0;
  }
  clear() {
    const x = n;
    this[x(1076)][x(238)]();
  }
}
var dn, fn, ln, hn, pn, mn, gn, bn;
class di {
  constructor(x, t) {
    m0(this, bn);
    m0(this, gn);
    m0(this, mn, /* @__PURE__ */ new Map());
    m0(this, pn, /* @__PURE__ */ new Map());
    m0(this, hn);
    m0(this, ln);
    m0(this, fn);
    m0(this, dn, /* @__PURE__ */ new Map());
    const r = n;
    this[r(779)] = x, this[r(2120)] = t, this[r(439)](), this.broadcastManager = new oi(t), this[r(640)] = new ci(x, t, (e) => this[r(1344)](e)), this[r(1404)] = new ui(x, t), this[r(2243)]();
  }
  [(bn = n(779), gn = n(2120), mn = n(485), pn = n(1756), hn = n(1290), ln = n(640), fn = n(1404), dn = n(2554), n(439))]() {
    const x = n;
    for (const t of this[x(779)][x(1272)]()) {
      const r = this[x(779)][x(1787)](t);
      if (r && r[x(845)]) {
        const e = this[x(1394)](r.store), s = Oa(() => e);
        this[x(485)][x(933)](t, s);
      }
    }
  }
  [n(1394)](x) {
    const t = n;
    if (!x) return {};
    try {
      return x[t(2517)]({});
    } catch {
      return this[t(1599)](x);
    }
  }
  [n(1599)](x) {
    const t = n;
    if (!x || !x[t(382)]) return {};
    if (x[t(382)].type === "default") {
      const r = x.def.defaultValue;
      return typeof r === t(1856) ? r() : r;
    }
    if (x[t(382)].type === "object") {
      const r = {};
      let e;
      try {
        e = x[t(382)][t(809)];
      } catch {
        return {};
      }
      if (e) for (const [s, a] of Object[t(394)](e)) {
        const o = this[t(723)](a);
        o !== void 0 && (r[s] = o);
      }
      return r;
    }
    return {};
  }
  [n(723)](x) {
    const t = n;
    if (x)
      try {
        return x[t(2517)](void 0);
      } catch {
        return this[t(1599)](x);
      }
  }
  async [n(543)](x, t) {
    const r = n;
    if (!this[r(779)][r(1611)](this[r(2120)], x)) throw new Error("No edge defined from " + this[r(2120)] + r(2271) + x);
    if (this.nodeTransports[r(879)](x)) throw new Error(r(1336) + x);
    try {
      this[r(2554)][r(933)](x, t), this[r(1404)][r(1482)](x), this[r(553)](x, t), await this[r(2294)](x), await this.requestInitialStateForNode(x);
    } catch (e) {
      throw this[r(2196)](x), e;
    }
  }
  [n(1984)](x) {
    this.cleanupConnection(x);
  }
  async [n(2294)](x) {
    const t = n;
    await new Promise((r) => setTimeout(r, 100));
    for (const [r, e] of this.nodeStores)
      if (r === this[t(2120)]) try {
        await this[t(1290)][t(1840)](t(1366) + r, { storeName: r, sourceNodeId: this[t(2120)], stateUpdate: e[t(1298)](), isInitialState: !0 });
      } catch {
      }
    try {
      await this[t(1290)][t(1840)](t(666), { fromNode: this.currentNodeId, toNode: x });
    } catch {
    }
  }
  async [n(404)](x) {
    const t = n;
    try {
      const r = this.connectionManager[t(431)]();
      for (const e of r)
        try {
          const s = "__internal_requestInitialState_" + e, a = this[t(1787)](e);
          if (a && a.actions && a[t(2282)][s]) {
            const o = a.actions[s]({});
            await Promise[t(2289)]([o, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (s) {
          console[t(624)](t(978) + e + ":", s);
        }
    } catch (r) {
      console[t(624)](t(2382) + x + ":", r);
    }
  }
  [n(2196)](x) {
    const t = n, r = this[t(2554)][t(1364)](x);
    this.nodeTransports[t(381)](x), this[t(1404)].markDisconnected(x), this.broadcastManager.removeMiddleware(x), r && r.cleanup();
  }
  setupNodeBindings(x, t) {
    const r = n;
    if (!this[r(485)].get(this.currentNodeId)) throw new Error("Store not found for " + this[r(2120)]);
    this[r(640)][r(1805)](t), this.broadcastManager[r(2402)](x, t);
  }
  [n(2243)]() {
    const x = n;
    for (const [t, r] of this[x(485)])
      t === this.currentNodeId ? ii({ graphInstance: this, store: r, name: t }) : ai({ graphInstance: this, store: r, name: t });
  }
  [n(1787)](x) {
    const t = n;
    if (!this[t(1756)][t(879)](x)) {
      const r = new ni(this, x);
      this[t(1756)][t(933)](x, r);
    }
    return this[t(1756)][t(1364)](x);
  }
  [n(1344)](x) {
    const t = n;
    return this[t(2554)][t(1364)](x);
  }
  [n(2193)](x) {
    const t = n, r = this.nodeTransports[t(1364)](x);
    if (r) return { transport: r, path: [this[t(2120)], x] };
    const e = this[t(1057)](this[t(2120)], x);
    if (e && e[t(1396)] > 1) {
      const s = e[1], a = this[t(2554)][t(1364)](s);
      if (a) return { transport: a, path: e };
    }
  }
  [n(1202)](x) {
    return this[n(485)].get(x);
  }
  get store() {
    const x = n, t = this.nodeStores.get(this[x(2120)]);
    if (!t) throw new Error(x(2341) + this.currentNodeId);
    return t;
  }
  get [n(2282)]() {
    const x = n, t = this[x(779)][x(1787)](this[x(2120)]);
    if (!t) throw new Error("Node definition not found for current node " + this[x(2120)]);
    return new Proxy({}, { get: (e, s) => {
      const a = x;
      if (typeof s != "string") return;
      const o = t[a(2282)][s];
      if (!o) throw new Error(a(2153) + s + a(580) + this[a(2120)]);
      return (c, u) => {
        const d = a, f = this[d(640)].getHandler(s);
        if (!f) throw new Error(d(1786) + s + d(2157) + this.currentNodeId);
        const l = { nodeId: this.currentNodeId };
        if (o[d(1407)] === !0) {
          const g = f(c, l, u);
          return g && typeof g === d(1507) && Symbol[d(836)] in g ? async function* () {
            for await (const h of g)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await g;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          const g = d, h = f(c, l, u);
          if (h && typeof h === g(1507) && Symbol[g(836)] in h) {
            const m = h[Symbol[g(836)]](), v = await m[g(319)]();
            return v[g(2425)] === void 0 ? {} : v[g(2425)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [n(440)]() {
    return this[n(779)];
  }
  getCurrentNodeId() {
    return this[n(2120)];
  }
  getConnectionToNodeInternal(x) {
    return this[n(2193)](x);
  }
  [n(2576)](x, t) {
    this[n(640)].implementAction(x, t);
  }
  [n(569)]() {
    const x = n, t = Array.from(this[x(2554)][x(2109)]());
    for (const r of t)
      this[x(2196)](r);
    this.broadcastManager.clear(), this[x(640)].clear(), this[x(1404)].clear();
  }
  findPathInternal(x, t) {
    const r = n;
    return this[r(1404)][r(500)](x, t);
  }
  [n(500)](x, t) {
    return this[n(1057)](x, t);
  }
  async broadcast(x, t) {
    const r = n, e = { ...t, __origin: this.currentNodeId };
    return this.broadcastManager[r(1840)](x, e);
  }
  broadcastReceived(x, t) {
    const r = n;
    this[r(1290)][r(943)](x, t);
  }
}
function fi(i) {
  const x = new Ta(i);
  return { joinAs(t) {
    const r = K;
    if (!x[r(1787)](t)) throw new Error(r(2323) + String(t) + " not found in graph definition");
    return new di(x, t);
  }, getDefinition() {
    return i;
  }, getNodeIds() {
    return x.getNodeIds();
  }, getNeighbors(t) {
    return x[K(772)](t);
  }, hasEdge(t, r) {
    return x[K(1611)](t, r);
  }, hasPath(t, r) {
    return x[K(1868)](t, r);
  }, findPath(t, r) {
    return x[K(500)](t, r);
  } };
}
const qr = { INTERCEPTOR_ERROR: n(1145) };
var vn, yn, wn, Sn;
class Tr extends (Sn = Error, wn = n(1087), yn = n(862), vn = n(1654), Sn) {
  constructor(t, r, e, s) {
    const a = n;
    super(e);
    m0(this, wn);
    m0(this, yn);
    m0(this, vn);
    this[a(2581)] = "MiddlewareError", this[a(1087)] = t, this[a(862)] = r, this[a(1654)] = s;
  }
}
var kn, En, Pn, In, Rn, Cn;
class li {
  constructor(x, t = {}) {
    m0(this, Cn);
    m0(this, "realTransport", null);
    m0(this, Rn);
    m0(this, "requestHandlers", /* @__PURE__ */ new Map());
    m0(this, In, /* @__PURE__ */ new Map());
    m0(this, "outgoingRequestInterceptors", /* @__PURE__ */ new Map());
    m0(this, "outgoingNotificationInterceptors", /* @__PURE__ */ new Map());
    m0(this, Pn, []);
    m0(this, En, []);
    m0(this, kn, []);
    m0(this, "stats", { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    const r = n;
    this[r(1899)] = x, this[r(2546)] = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async connect(x) {
    const t = n;
    this[t(1412)] = x, x[t(882)] = (r) => {
      this[t(303)](r);
    }, x[t(1078)] = () => {
      const r = t;
      this[r(2154)][r(2228)]((e) => e());
    }, x[t(2309)] = (r) => {
      const e = t;
      this[e(1153)][e(2228)]((s) => s(r));
    }, await this[t(1899)].connect(this);
  }
  async [(Cn = n(1899), Rn = n(2546), In = n(557), Pn = n(1249), En = n(2154), kn = n(1153), n(303))](x) {
    const t = n;
    this.log(t(1676), t(1112), x);
    try {
      if (this.isRequest(x) && await this[t(1582)](x) || this[t(1360)](x) && await this[t(1652)](x))
        return;
      this.messageHandlers.forEach((r) => r(x));
    } catch (r) {
      this.stats[t(2121)]++, this[t(624)](t(2281), t(472), r), this[t(1249)][t(2228)]((e) => e(x));
    }
  }
  async [n(1582)](x) {
    const t = n, r = this[t(544)][t(1364)](x[t(862)]);
    if (!r) return !1;
    try {
      this[t(801)][t(985)]++;
      const e = await r(x, {});
      return this[t(1412)] && "id" in x && await this[t(1412)].send({ jsonrpc: t(2115), id: x.id, result: e }), !0;
    } catch (e) {
      return this[t(801)].errors++, this[t(1412)] && "id" in x && await this[t(1412)][t(2246)]({ jsonrpc: t(2115), id: x.id, error: { code: -32603, message: "Request handler failed: " + JSON[t(328)](x.params) + " " + e[t(1717)] } }), !0;
    }
  }
  async [n(1652)](x) {
    const t = n, r = this[t(557)][t(1364)](x[t(862)]);
    if (!r) return !1;
    try {
      return this[t(801)][t(2e3)]++, await r(x), !0;
    } catch (e) {
      return this[t(801)][t(2121)]++, this[t(624)](t(2281), t(2058) + x[t(862)] + ":", e), !0;
    }
  }
  async send(x) {
    const t = n;
    this[t(624)](t(1676), t(2563), x);
    try {
      if (this[t(2455)](x)) {
        const r = await this[t(1655)](x);
        if (r[t(2217)]) {
          if (r[t(540)] === null) return;
          r[t(540)] && (x = { ...r.result, jsonrpc: "2.0" }, this[t(801)][t(465)]++);
        } else if (this.options[t(1248)]) this[t(624)](t(2512), t(1965) + x.method + ":", r[t(2281)]);
        else throw r[t(2281)];
      }
      if (this[t(1360)](x)) {
        const r = await this.executeOutgoingNotificationInterceptor(x);
        if (r[t(2217)]) {
          if (r.result === null) return;
          r[t(540)] && (x = { ...r[t(540)], jsonrpc: t(2115) }, this.stats[t(1083)]++);
        } else if (this[t(2546)][t(1248)]) this[t(624)]("warn", t(279) + x[t(862)] + ":", r[t(2281)]);
        else throw r[t(2281)];
      }
      this[t(1412)] && await this[t(1412)][t(2246)](x);
    } catch (r) {
      throw this[t(801)].errors++, r;
    }
  }
  async [n(2328)]() {
    const x = n;
    this[x(1412)] && await this[x(1412)][x(2328)]();
  }
  async [n(679)]() {
    const x = n;
    this[x(1412)] && await this[x(1412)][x(679)]();
  }
  set [n(882)](x) {
    const t = n;
    this[t(1249)] = [x];
  }
  set onclose(x) {
    const t = n;
    this[t(2154)] = [x];
  }
  set [n(2309)](x) {
    const t = n;
    this[t(1153)] = [x];
  }
  async [n(1655)](x) {
    const t = n, r = this[t(867)][t(1364)](x[t(862)]);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1105)](r(x), this.options.interceptorTimeout) };
    } catch (e) {
      return this.stats[t(2121)]++, { success: !1, error: new Tr(qr[t(389)], x[t(862)], "Outgoing request interceptor failed: " + e[t(1717)], e) };
    }
  }
  async [n(1719)](x) {
    const t = n, r = this[t(1002)][t(1364)](x[t(862)]);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1105)](r(x), this[t(2546)][t(2074)]) };
    } catch (e) {
      return this[t(801)].errors++, { success: !1, error: new Tr(qr[t(389)], x[t(862)], t(2025) + e[t(1717)], e) };
    }
  }
  async request(x, t) {
    const r = n;
    return await this.protocol[r(365)](x, t, { timeout: 36e5 });
  }
  async [n(614)](x) {
    const t = n;
    return await this.protocol[t(614)](x);
  }
  setRequestHandler(x, t) {
    const r = n, e = x[r(809)][r(862)][r(2425)];
    this[r(544)][r(933)](e, t);
  }
  [n(560)](x, t) {
    const r = n, e = x[r(809)][r(862)][r(2425)];
    this[r(557)].set(e, t);
  }
  [n(929)](x, t) {
    const r = n, e = x[r(809)][r(862)][r(2425)];
    this[r(867)][r(933)](e, t);
  }
  setOutgoingNotificationInterceptor(x, t) {
    const r = n, e = x[r(809)][r(862)][r(2425)];
    this.outgoingNotificationInterceptors[r(933)](e, t);
  }
  unsetRequestHandler(x) {
    const t = n;
    this[t(544)][t(381)](x);
  }
  unsetNotificationHandler(x) {
    const t = n;
    this[t(557)][t(381)](x);
  }
  [n(364)](x) {
    const t = n;
    this.outgoingRequestInterceptors[t(381)](x);
  }
  unsetOutgoingNotificationInterceptor(x) {
    this.outgoingNotificationInterceptors.delete(x);
  }
  hasRequestHandler(x) {
    const t = n;
    return this[t(544)][t(879)](x);
  }
  [n(2503)](x) {
    const t = n;
    return this[t(557)][t(879)](x);
  }
  [n(2073)](x) {
    const t = n;
    return this[t(867)][t(879)](x);
  }
  [n(1491)](x) {
    return this[n(1002)].has(x);
  }
  getStats() {
    return { ...this[n(801)] };
  }
  [n(1727)]() {
    const x = n;
    this[x(801)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [n(638)]() {
    return this[n(1899)];
  }
  [n(647)]() {
    const x = n;
    this.requestHandlers.clear(), this.notificationHandlers[x(238)](), this[x(867)][x(238)](), this[x(1002)][x(238)]();
  }
  [n(2455)](x) {
    const t = n;
    return x[t(2030)] === "2.0" && t(862) in x && "id" in x;
  }
  [n(1360)](x) {
    const t = n;
    return x[t(2030)] === "2.0" && t(862) in x && !("id" in x);
  }
  async [n(1105)](x, t) {
    const r = n, e = new Promise((s, a) => {
      const o = K;
      setTimeout(() => a(new Error(o(1790))), t);
    });
    return await Promise[r(2289)]([x, e]);
  }
  [n(624)](x, t, ...r) {
    const e = n;
    if (!this[e(2546)][e(1676)] && x === e(1676)) return;
    const s = e(2176);
    switch (x) {
      case e(1676):
        console.debug(s, t, ...r);
        break;
      case e(905):
        console[e(905)](s, t, ...r);
        break;
      case e(2512):
        console.warn(s, t, ...r);
        break;
      case e(2281):
        console[e(2281)](s, t, ...r);
        break;
    }
  }
}
k({ method: t0(n(1903)), params: k({ requestId: w(), data: N0(), error: w()[n(1944)](), finished: _() }) }), k({ method: t0(n(2357)), params: k({ action: w(), data: N0() }) }), k({ method: t0(n(1337)), params: k({ requestId: w() }) });
const hi = k({ method: t0(n(1903)), params: k({ requestId: w(), data: N0(), error: w()[n(1944)](), finished: _() }) }), pi = k({ method: t0("sdppp/streamRequest"), params: k({ action: w(), data: N0() }) }), mi = k({ method: t0(n(1337)), params: k({ requestId: w() }) });
var Fn, Nn;
class gi {
  constructor() {
    m0(this, Nn, /* @__PURE__ */ new Map());
    m0(this, Fn, /* @__PURE__ */ new Map());
  }
  push(x) {
    const t = n, { requestId: r } = x.params, e = this.queues[t(1364)](r) || [], s = this[t(1196)][t(1364)](r) || [];
    s.length > 0 ? s[t(2225)]()(x[t(665)]) : (e[t(757)](x.params), this.queues[t(933)](r, e));
  }
  async pop(x) {
    const t = n, r = this[t(2427)][t(1364)](x) || [];
    return r[t(1396)] > 0 ? r[t(2225)]() : new Promise((e) => {
      const s = t, a = this[s(1196)][s(1364)](x) || [];
      a.push(e), this[s(1196)][s(933)](x, a);
    });
  }
  [(Nn = n(2427), Fn = n(1196), n(647))](x) {
    const t = n;
    this.queues[t(381)](x), this[t(1196)][t(381)](x);
  }
}
var qn, Tn, On;
class bi extends li {
  constructor(t, r = {}) {
    const e = n;
    super(t, r);
    m0(this, "streamRequestorHandlers", /* @__PURE__ */ new Map());
    m0(this, On, 1);
    m0(this, Tn, /* @__PURE__ */ new Map());
    m0(this, qn, new gi());
    this[e(2188)]();
  }
  [(On = n(1752), Tn = n(2319), qn = n(2324), n(2188))]() {
    const t = n;
    this.setupStreamResponseHandler(), this.setupAbortHandler(), this[t(684)]();
  }
  [n(2173)]() {
    this.setNotificationHandler(hi, async (t) => {
      const r = K;
      this[r(2324)][r(757)](t);
    });
  }
  [n(1544)]() {
    const t = n;
    this[t(815)](mi, async (r, e) => {
      const s = t, { requestId: a } = r.params, o = this.runningRequests[s(1364)](a);
      return o && (o.abort(), this[s(2319)].delete(a)), { success: !0 };
    });
  }
  [n(684)]() {
    const t = n;
    this[t(815)](pi, async (r, e) => {
      const s = t, a = s(2523) + this[s(1752)]++, o = this.streamRequestorHandlers[s(1364)](r.params[s(876)]);
      if (!o) throw new Error(s(583) + r[s(665)][s(876)]);
      const c = new AbortController();
      return this[s(2319)][s(933)](a, c), this[s(658)](a, o, r[s(665)], e, c), { requestId: a };
    });
  }
  async executeHandlerAsync(t, r, e, s, a) {
    const o = n;
    try {
      const c = r(e, s, a[o(2494)]);
      for await (const u of c) {
        if (a[o(2494)][o(814)]) break;
        await this[o(614)]({ method: "sdppp/streamResponse", params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !a[o(2494)].aborted && await this[o(614)]({ method: "sdppp/streamResponse", params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !a[o(2494)][o(814)] && await this[o(614)]({ method: o(1903), params: { requestId: t, data: null, error: c[o(1717)], finished: !0 } });
    } finally {
      this[o(2319)].delete(t);
    }
  }
  registerStreamRequestorHandler(t, r) {
    const e = n;
    this[e(1629)][e(933)](t.shape[e(876)][e(2425)], r);
  }
  async [n(791)](t, r, e) {
    const s = n;
    this[s(2070)](e);
    const a = await this[s(1859)](t), o = this[s(276)](a), c = this.createStreamState();
    return this.createAsyncIterator(o, c, a, e);
  }
  [n(2070)](t) {
    const r = n;
    if (t && t.aborted) throw new Error(r(453));
  }
  async sendStreamRequestorRequest(t) {
    return (await this[n(365)]({ method: "sdppp/streamRequest", params: { action: t.action, data: t.data } }, k({ requestId: w() }))).requestId;
  }
  [n(276)](t) {
    return this[n(2324)];
  }
  [n(2364)]() {
    return { finished: !1, error: null };
  }
  createAsyncIterator(t, r, e, s) {
    const a = n, o = this;
    return { async *[Symbol[a(836)]]() {
      const c = a;
      try {
        for (; !r[c(2443)] && !r[c(2281)]; ) {
          if (s && s.aborted)
            throw await o[c(365)]({ method: "sdppp/abort", params: { requestId: e } }, k({ success: _() })), new Error(c(2311));
          const u = await t.pop(e);
          if (u[c(2281)])
            throw r[c(2281)] = u[c(2281)], new Error(u[c(2281)]);
          if (u[c(2443)]) {
            r[c(2443)] = !0;
            break;
          }
          u[c(2197)] !== null && (yield u[c(2197)]);
        }
      } finally {
        t[c(647)](e);
      }
    } };
  }
  getRunningRequestsCount() {
    const t = n;
    return this[t(2319)][t(1232)];
  }
  async [n(2391)](t) {
    const r = n, e = this.runningRequests.get(t);
    return e ? (e[r(680)](), this.runningRequests.delete(t), !0) : !1;
  }
  abortAllRequests() {
    const t = n;
    for (const [r, e] of this.runningRequests)
      e[t(680)]();
    this[t(2319)][t(238)]();
  }
  [n(647)]() {
    const t = n;
    super[t(647)](), this.abortAllRequests(), this.streamRequestorHandlers[t(238)]();
  }
}
k({ id: w(), method: w(), params: N0().optional(), traceId: w()[n(2262)]() }), k({ id: w(), result: N0()[n(2262)](), error: k({ code: r0(), message: w(), data: N0()[n(2262)]() })[n(2262)]() }), k({ method: w(), params: N0()[n(2262)]() }), k({ method: t0(n(2357)), params: k({ action: w(), data: N0() }) }), k({ method: t0(n(1903)), params: k({ requestId: w(), data: N0()[n(2262)](), error: w()[n(1944)]().optional(), finished: _().default(!1) }) }), k({ method: t0(n(1337)), params: k({ requestId: w() }) }), k({ method: t0(n(2582)), params: k({ messageType: w(), message: N0() }) });
function zn(i) {
  const x = n;
  return i && i[x(1472)] && Object[x(2498)][x(2165)][x(459)](i, x(906)) ? i.default : i;
}
const Fe = k({ leftDistance: r0(), topDistance: r0(), rightDistance: r0(), bottomDistance: r0(), width: r0(), height: r0() }), Me = { name: w(), uiWeight: r0() }, vi = k({ ...Me, outputType: t0("images"), options: k({ required: _(), maxCount: r0()[n(2262)](), maskMode: _()[n(2262)]() }) }), yi = k({ ...Me, outputType: t0("masks"), options: k({ required: _() }) }), wi = k({ ...Me, outputType: t0(n(1401)), options: k({ required: _() }) }), Si = k({ ...Me, outputType: t0(n(1588)), options: k({ required: _() }) }), ki = k({ ...Me, outputType: t0("number"), options: k({ required: _(), min: r0()[n(2262)](), max: r0()[n(2262)](), step: r0()[n(2262)](), random: _()[n(2262)](), slider: _()[n(2262)]() }) }), Ei = k({ ...Me, outputType: t0("combo"), options: k({ required: _(), values: R0(w()), labels: R0(w()).optional() }) }), Pi = k({ ...Me, outputType: t0(n(2273)), options: k({ required: _(), values: R0(w()) }) }), Ii = Ln("outputType", [vi, yi, wi, Si, ki, Ei, Pi]), Ri = k({ id: w(), title: w(), widgets: R0(Ii), uiWeightSum: r0() }), Ci = k({ widgetableID: w(), widgetablePath: w(), nodes: H0(w(), Ri), nodeIndexes: R0(w()), note: w()[n(2262)](), options: H0(w(), N0()) }), Fi = k({ bannerData: N0()[n(2262)](), refreshable: _()[n(906)](!1), backwardable: _()[n(906)](!1), loginable: _().default(!1), runnable: _()[n(906)](!1), workBoundaries: H0(r0(), Fe)[n(906)]({}), workBoundaryMaxSizes: H0(r0(), r0()).default({}) }), Ni = k({ uname: w()[n(906)](""), activeDocumentID: r0()[n(906)](0), layers: R0(k({ id: r0(), name: w(), identify: w() }))[n(906)]([]), actions: R0(w())[n(906)]([]), theme: w()[n(906)](n(2360)), sdpppX: H0(w(), N0())[n(906)]({}), locale: F0([n(1216), "en-US"])[n(906)](n(329)), comfyWebviewConnectStatus: F0([n(2254), n(970), n(2442)])[n(906)](n(2442)), comfyWebviewLoadError: w()[n(906)](""), comfyWebviewLoading: _()[n(906)](!1), comfyWebviewVersion: w().default(""), comfyHTTPCode: r0()[n(906)](200), comfyURL: w()[n(906)](""), sdkWebviewFocusing: _()[n(906)](!1), sdkWebviewConnectStatus: F0([n(2254), n(970), n(2442)])[n(906)](n(2442)), isLogin: _()[n(906)](!1), isGuest: _()[n(906)](!1), requestingLogin: _().default(!1), loginMessage: w()[n(906)](""), token: w()[n(906)](""), userInfo: H0(w(), N0()).default({}), taskLastRun: r0()[n(906)](0), canvasStateID: r0()[n(2262)](), selectionStateID: w()[n(2262)](), canvasThumbnail: w()[n(906)](""), curlayerThumbnail: w()[n(906)]("") }), qi = k({ widgetableStructure: Ci[n(906)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: H0(w(), R0(N0())).default({}), widgetableErrors: H0(w(), w())[n(906)]({}), queueSize: r0()[n(906)](0), lastError: w().default(""), progress: r0()[n(906)](0), executingNodeTitle: w()[n(906)](""), executingNodeID: w().default(""), graphProgress: r0()[n(906)](0), comfyUserToken: w()[n(906)](""), comfyOrgLoggedIn: _()[n(906)](!1), comfyOrgAPIKey: w().default(""), comfyWSState: F0([n(970), n(268)])[n(906)](n(970)), lastRunTime: r0()[n(906)](0) }), Ti = { backward: { requestSchema: $x(), responseSchema: k({ success: _() }) }, refresh: { requestSchema: $x(), responseSchema: k({ success: _() }) }, run: { requestSchema: $x(), responseSchema: k({ success: _() }) } }, Oi = { log: { requestSchema: k({ level: F0([n(624), "info", n(2512), n(2281)]), messages: R0(w()) }), responseSchema: k({}) }, openExternalLink: { requestSchema: k({ url: w() }), responseSchema: k({ error: w()[n(2262)]() }) }, getStorage: { requestSchema: k({ key: w() }), responseSchema: k({ value: w(), error: w()[n(2262)]() }) }, setStorage: { requestSchema: k({ key: w(), value: w() }), responseSchema: k({ error: w()[n(2262)]() }) }, removeStorage: { requestSchema: k({ key: w() }), responseSchema: k({ error: w()[n(2262)]() }) }, keyboardAction: { requestSchema: k({ keycode: w() }), responseSchema: k({}) }, setComfyWebviewURL: { requestSchema: k({ url: w() }), responseSchema: k({}) }, getImageBase64: { requestSchema: k({ token: w() }), responseSchema: k({ base64: w()[n(2262)](), mimeType: w()[n(2262)](), error: w()[n(2262)]() }) }, uploadComfyImage: { requestSchema: k({ uploadInput: k({ type: t0(n(768)).or(t0("token")), tokenOrBuffer: N0(), fileName: w() }), overwrite: _()[n(2262)]()[n(906)](!0) }), responseSchema: k({ name: w() }) }, proxiedFetch: { requestSchema: k({ url: w(), method: w()[n(2262)](), headers: H0(w()).optional(), body: N0()[n(2262)](), bodyType: F0([n(2333), n(1021), n(514)])[n(2262)]() }), responseSchema: k({ success: _(), status: r0()[n(2262)](), statusText: w()[n(2262)](), headers: H0(w())[n(2262)](), data: N0()[n(2262)](), error: w()[n(2262)]() }) }, openaiImageEdit: { requestSchema: k({ apiKey: w(), baseURL: w(), imageToken: w(), prompt: w(), model: w() }), responseSchema: k({ success: _(), imageUrl: w()[n(2262)](), apiTime: r0()[n(2262)](), error: w()[n(2262)]() }) }, geminiImageGenerate: { requestSchema: k({ apiKey: w(), baseURL: w().optional(), imageInputs: R0(w())[n(2262)](), imageInput: w()[n(2262)](), imageInputType: F0([n(1340), "base64"]), prompt: w() }), responseSchema: k({ success: _(), imageUrl: w().optional(), apiTime: r0()[n(2262)](), error: w()[n(2262)]() }) } };
k({ thumbnail_url: w()[n(2262)](), file_token: w()[n(2262)](), source: w()[n(2262)](), error: w().optional() });
const Or = k({ boundary: F0([n(1217), n(1794), n(1600)]), content: F0(["canvas", n(1794), n(1600)]).or(w()), imageSize: r0(), imageQuality: r0(), cropBySelection: F0(["no", n(2021), "negative"]), layer_identify: w()[n(1944)]().optional() }), Ar = k({ content: F0(["canvas", n(1794), n(1600)]), reverse: _(), imageSize: r0(), layer_identify: w().nullable().optional() });
k({ selection: F0([n(1199), n(1410), n(524), "newlayer_selection", "curlayer_canvas", n(1489), n(2008), n(1199)]), url: w(), source: w(), cropBySelection: F0(["no", n(2021), n(1060)]) });
const Ai = { downloadImage: { requestSchema: k({ url: w() }), responseSchema: k({ thumbnail_url: w()[n(2262)](), nativePath: w()[n(2262)](), width: r0()[n(2262)](), height: r0().optional(), error: w().optional() }) }, deleteDownloadedImage: { requestSchema: k({ nativePaths: R0(w()) }), responseSchema: k({ error: w()[n(2262)]() }) }, requestAndDoSaveImage: { requestSchema: k({ nativePaths: R0(w()) }), responseSchema: k({ error: w().optional() }) } }, Di = k({ passwordPayload: k({ username: w(), password: w() }).or(k({ email: w(), password: w() })).or(k({ phone: w(), password: w() })).or(k({ identifier: w(), password: w() })) }).or(k({ passcodePayload: k({ phone: w(), code: w() }).or(k({ email: w(), code: w() })) })), ji = k({ passwordPayload: k({ username: w(), password: w() }).or(k({ email: w(), password: w() })).or(k({ phone: w(), password: w() })).or(k({ identifier: w(), password: w() })) }).or(k({ passcodePayload: k({ phone: w(), code: w() }).or(k({ email: w(), code: w() })) })), Mi = { register: { requestSchema: Di, responseSchema: k({}) }, login: { requestSchema: ji, responseSchema: k({}) }, sendPassCode: { requestSchema: k({ phone: w()[n(2262)](), email: w().optional() }), responseSchema: k({}) }, logout: { requestSchema: k({}), responseSchema: k({}) }, guestLogin: { requestSchema: k({}), responseSchema: k({}) } }, zx = k({ taskId: w(), taskName: w(), status: F0([n(1562), n(1448), n(285), n(1822)]), currentStep: r0().optional(), totalSteps: r0().optional(), stepDescription: w()[n(2262)](), progressPercentage: r0().min(0)[n(550)](100)[n(2262)](), startTime: w(), endTime: w()[n(2262)](), error: w().optional(), errorCode: w().optional(), result: N0()[n(2262)](), metadata: H0(N0())[n(2262)]() }), Hx = k({ success: _(), error: w()[n(2262)]() }), Li = { taskAdd: { requestSchema: zx, responseSchema: Hx }, taskUpdate: { requestSchema: zx.partial()[n(1830)]({ taskId: !0 }), responseSchema: Hx }, taskRemove: { requestSchema: zx[n(1970)]({ taskId: !0 }), responseSchema: Hx } }, $i = { manageGuides: { requestSchema: k({ action: F0(["create", n(238)]), rect: Fe[n(2262)]() }), responseSchema: k({ success: _() }) }, openImagesFromFile: { requestSchema: k({ nativePath: w(), boundary: Fe[n(2262)]() }), responseSchema: k({ success: _(), documentId: r0(), documentName: w(), width: r0(), height: r0() }) }, getBoundary: { requestSchema: k({ type: F0(["curlayer", n(1600)]) }), responseSchema: Fe }, getImage: { requestSchema: k({ boundary: J0([F0(["canvas", "curlayer", n(1600)]), Fe]), content: J0([F0([n(1217), n(1794)]), w()]), imageSize: r0(), imageQuality: r0(), cropBySelection: F0(["no", "positive", n(1060)]), SkipNonNormalLayer: _(), layer_identify: w()[n(1944)]()[n(2262)]() }), responseSchema: k({ thumbnail_url: w()[n(2262)](), file_token: w().optional(), source: w().optional(), error: w()[n(2262)]() }) }, getMask: { requestSchema: k({ boundary: J0([F0([n(1217), n(1794), n(1600)]), Fe]), content: F0([n(1217), n(1794), n(1600)]), reverse: _(), imageSize: r0(), layer_identify: w()[n(1944)]()[n(2262)]() }), responseSchema: k({ thumbnail_url: w()[n(2262)](), file_token: w()[n(2262)](), source: w()[n(2262)](), error: w().optional() }) }, getCurrentLayerIdentify: { requestSchema: k({}), responseSchema: k({ layer_identify: w()[n(1944)]() }) }, importImage: { requestSchema: k({ nativePath: w(), boundary: J0([F0([n(1217), n(1794), n(1600)]), Fe])[n(2262)](), type: F0([n(1217), n(1794), "newdoc", n(1257)]), sourceWidth: r0()[n(2262)](), sourceHeight: r0()[n(2262)]() }), responseSchema: k({ success: _(), layers: R0(k({ identify: w() })).optional(), message: w()[n(2262)](), error: w().optional() }) }, showBoundarySelectionDialog: { requestSchema: k({ additionalData: H0(N0())[n(2262)]() }), responseSchema: k({ boundary: F0([n(1217), n(1794), n(1600)])[n(2262)](), cancelled: _().optional() }) }, selectCanvasImage: { requestSchema: k({ additionalData: H0(N0())[n(2262)]() }), responseSchema: k({ getImageParams: Or[n(2262)](), source: w().optional(), cancelled: _()[n(2262)]() }) }, selectLayerImage: { requestSchema: k({ additionalData: H0(N0())[n(2262)]() }), responseSchema: k({ getImageParams: Or[n(2262)](), source: w()[n(2262)](), cancelled: _().optional() }) }, selectLayerMask: { requestSchema: k({ additionalData: H0(N0()).optional() }), responseSchema: k({ getMaskParams: Ar[n(2262)](), source: w()[n(2262)](), cancelled: _()[n(2262)]() }) }, selectSelectionMask: { requestSchema: k({ additionalData: H0(N0())[n(2262)]() }), responseSchema: k({ getMaskParams: Ar[n(2262)](), source: w()[n(2262)](), cancelled: _()[n(2262)]() }) } }, zi = k({ workflows: R0(w()), error: w()[n(2262)]() }), Hi = k({ success: _(), nodeErrors: H0(w()).optional(), prompt_ids: R0(w())[n(2262)](), images: R0(k({ url: w(), thumbnail: w() }))[n(2262)]() }), Ui = { setWidgetValue: { requestSchema: k({ values: R0(k({ nodeID: w(), widgetIndex: r0(), value: H0(w(), N0()).or(w()).or(r0()).or(_()).or(R0(N0())) })) }), responseSchema: k({ success: _() }) }, openWorkflow: { requestSchema: k({ workflow_path: w(), reset: _()[n(906)](!1) }), responseSchema: k({ success: _() }) }, openWorkflowJSON: { requestSchema: k({ workflow_content: H0(N0()), workflow_path: w() }), responseSchema: k({ success: _() }) }, listWorkflows: { requestSchema: k({ listMode: w()[n(2262)](), sdpppID: w().optional(), sdpppToken: w()[n(2262)]() }), responseSchema: zi }, saveWorkflow: { requestSchema: k({ workflow_path: w(), from_sid: w()[n(2262)]() }), responseSchema: k({ success: _() }) }, run: { requestSchema: k({ size: r0() }), responseSchema: Hi, stream: !0 }, stopAll: { requestSchema: k({}), responseSchema: k({ success: _() }) } }, Vi = { setNodeTitle: { requestSchema: k({ node_id: w(), title: w() }), responseSchema: k({ success: _() }) }, reboot: { requestSchema: k({}), responseSchema: k({ success: _(), error: w()[n(2262)]() }) }, setComfyOrgAPIKey: { requestSchema: k({ api_key: w() }), responseSchema: k({ success: _() }) }, logout: { requestSchema: k({}), responseSchema: k({ success: _() }) }, uploadComfyImageFromUXP: { requestSchema: k({ fileName: w(), overwrite: _()[n(2262)](), mimeType: w().optional(), dataBase64: w() }), responseSchema: k({ name: w() }) }, sdpppHandshake: { requestSchema: k({ hostVersion: w()[n(2262)]() }), responseSchema: k({ comfyVersion: w(), hostVersion: w()[n(2262)]() }) } }, Wi = fi({ nodes: { sdk: { store: Fi, actions: { ...Ti } }, uxp: { store: Ni, actions: { ...Ai, ...Oi, ...Mi, ...Li, ...$i } }, comfy: { store: qi, actions: { ...Ui, ...Vi } } }, edges: [[n(940), n(1987)], [n(1725), n(1987)]] }), P0 = Wi[n(1925)]("comfy");
globalThis[n(797)] = P0, globalThis[n(881)] = globalThis.sdpppX2 || {};
const _e = globalThis[n(881)], Zi = { "preview.show": n(384), "gateway.select_ai_service": n(1261), "provider.select.title": n(471), "provider.comfyui.description": n(1281), "provider.replicate.description": n(1855), "provider.runninghub.description": "模型物美价廉，海量社区应用", "provider.google.description": n(2221), "task.waiting_upload": n(1748), "task.creating_task": n(730), "task.running_duration": n(1766), "task.cancelled": "任务已取消", "task.cancel_failed": n(608), "comfy.connect": "连接", "comfy.load_failed": n(909), "comfy.loading": n(781), "comfy.channel_connecting": n(1275), "comfy.server_reconnecting": n(1973), "comfy.version_mismatch": n(976), "comfy.cloud_recommend": n(1866), "comfy.your_workflows": n(2280), "comfy.refresh_workflows": "刷新工作流列表", "comfy.queue_progress": n(1986), "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": n(1710), "comfy.stop_auto_run": n(1814), "comfy.start_auto_run": n(1462), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": n(1148), "comfy.help_tooltip": n(1030), "boundary.title": n(1500), "boundary.tooltip": n(2040), "boundary.current_canvas": n(2218), "boundary.current_layer": n(1428), "boundary.current_selection": n(820), "boundary.set_as_canvas": n(262), "boundary.set_as_layer": n(2248), "boundary.set_as_selection": "设为当前选区", "http.404": n(761), "http.401": n(1231), "http.403": n(1222), "http.408": n(2352), "http.500": "服务器错误 (500)", "http.501": n(1400), "http.502": n(1760), "http.503": n(2094), "http.504": "网关超时 (504)", "http.unknown": "未知错误（{{code}}）", "runninghub.get_apikey": n(908), "runninghub.apikey_placeholder": n(2091), "runninghub.app_id": "应用ID:", "runninghub.webapp_id_placeholder": n(348), "runninghub.open_app": "按回车打开应用： {{appName}}", "runninghub.execute": "执行", "runninghub.rh_coins": n(1642), "runninghub.current_tasks": n(451), "runninghub.help_tooltip": n(1030), "runninghub.status.waiting": n(1720), "runninghub.status.running": "正在运行", "runninghub.status.failed": n(2002), "runninghub.status.success": "执行成功", "image.auto_refetch": "自动从PS重新获取", "runninghub.error.get_result_failed": n(2027), "runninghub.error.task_failed": n(1780), "runninghub.error.task_incomplete": "任务未完成，当前状态: {{status}}", "replicate.get_apikey": n(1520), "replicate.apikey_placeholder": "请输入您的Replicate API Key", "replicate.execute": "执行", "replicate.model_placeholder": "粘贴你的模型名称", "replicate.help_tooltip": n(1030), "liblib.get_apikey": "如何获取APIKey和API Secret", "liblib.execute": "执行", "common.close": "关闭", "common.save_and_run": n(2495), "common.loading": "加载中...", "common.error": "错误", "common.success": "成功", "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": "=== 选项 ===", webviewInForeground: n(657), webviewInForeground2: n(523), "auth.login_success": n(728), "auth.username_label": "用户名: {{username}}", "auth.email_label": "邮箱: {{email}}", "auth.logout": n(422), "auth.login_required": n(899), "image.send.select_position": n(874), "image.send.sending": n(1573), "image.layer.new": n(1567), "image.layer.current": "当前图层", "image.layer.fit_to_current": n(1100), "image.layer.fit_to_selection": n(1730), "image.layer.fit_to_canvas": "适配至画布", "image.shortcut_auth_required": "快捷键选图功能仅登陆后可用", "image.shortcut_focus_required": "快捷键选图功能仅在插件窗口聚焦时可用", "image.get.select_image": "请选择要获取的图像", "image.get.entire_canvas": n(2218), "image.get.canvas": "画布", "image.get.current_layer": "当前图层", "image.get.current_layer_bounds": n(1252), "image.get.selection_bounds": "仅选区范围", "image.get.canvas_bounds": n(1434), "image.crop_by_selection": n(1380), "image.limit_size": n(2108), "image.crop.none": n(1236), "image.crop.inpaint": n(2577), "image.crop.outpaint": n(1095), "image.send_all": "发送所有", "image.save_all": n(2279), "image.save_current": n(1082), "image.delete_current": n(1125), "image.more_actions": n(1285), "image.jump_to_last": n(1478), "image.clear_all": "清空所有", "image.send_to_ps": "发送到PS", "image.download": "下载", "image.copy": "复制", "image.sending": n(1350), "image.sending_all": "正在发送所有图片...", "mask.get.select_mask": n(1694), "mask.selection": "选区", "mask.current_layer_bounds": "当前图层范围", "mask.all": "全部", "mask.selection_exclude": n(1288), "mask.current_layer_exclude": "当前图层除外", "mask.empty": "空", "document {{0}} not found": n(2296), "create document for preview": n(2081), "resize document for preview": n(561), "create document for sent images": n(1447), "show sent images": n(2569), "create layer failed": n(1509), "layer not found {{0}}": n(346), "layer not found: {{0}}": "找不到图层: {{0}}", "layer {{0}} is not a group": n(626), "no linked layer for {{0}}": "没有链接图层: {{0}}", "no first related layer in {{0}}": n(2264), "merge group failed": n(1393), "get content of layer {{0}}": n(429), "get layer info": n(2306), "get_layer_info: layer_identify required": n(497), "get pixel of {{0}} failed": n(1286), "get selection failed": "获取选区失败", "invalid name: {{0}}": "非法的名称: {{0}}", "desire bounds is null": n(2591), "intersect or scaledDesire is null": n(1800), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': n(934), "select layer": n(873), "run Photoshop Action": "sdppp 运行 Photoshop Action", "Action {{0}} not found": n(298), "Action set {{0}} not found": "ActionSet {{0}} 未找到", "set text to layer": n(1362), "ComfyManager not found, cannot reboot": n(743), "Failed to reboot ComfyUI": n(403), "image.upload.from_canvas": "画布", "image.upload.from_curlayer": "当前图层", "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": n(332), "image.upload.no_images": n(605), "image.upload.tooltip.more_options_hint": n(1481), "image.upload.tooltip.alt.crop": "+Alt 按选区裁剪", "image.upload.tooltip.alt.reverse": n(1764), "image.upload.tooltip.image.canvas": n(1763), "image.upload.tooltip.image.curlayer": n(1684), "image.upload.tooltip.mask.curlayer": "从 当前图层 获取遮罩", "image.upload.tooltip.mask.selection": n(1133), "image.upload.tooltip.mask.canvas": "从 画布 获取遮罩", "image.upload.tooltip.autosync.on": n(2151), "image.upload.tooltip.autosync.off": n(727), "image.upload.autosync.fetching": n(1745), "image.auto_send_enabled": "自动填入画布开启", "image.auto_send_disabled": n(953), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": n(745), "source.ps_mask": n(331), "source.canvas": n(2218), "source.current_layer": "当前图层", "source.selection": "选区", "source.quality_percent": n(2476), "source.crop.positive": n(2385), "source.crop.negative": n(1126), "source.reverse": "反转", "send_images.create_document": n(1355), "send_images.create_document_failed": n(1700), "photoshop.no_active_document": n(546), "photoshop.rectangle_coordinates_required": n(1436), "photoshop.create_guide_frame": n(1488), "photoshop.clear_guide_frame": "清除参考线框架", "photoshop.invalid_action": n(1850), "photoshop.file_not_found": n(1318), "photoshop.failed_to_open_file_as_document": n(721), "photoshop.invalid_boundary": "无效边界: 左边必须小于右边，上边必须小于下边", "photoshop.failed_to_open_image_file": "无法打开图像文件: {{error}}", "photoshop.open_images_from_file": n(2107), "photoshop.failed_to_create_document_from_file": n(313), "google.field.image_input": n(1328), "google.field.prompt": n(464), "google.field.batch_count": n(2259), "google.field.images_per_batch": "每批图像数", "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": n(1546), "google.apikey_placeholder": n(1409), "google.baseurl_placeholder": n(499), "google.get_apikey": n(2071), "google.help_tooltip": n(443), "google.model_name": n(1528), "google.loading": n(1883), "google.generating": n(1186), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": n(1303), "image.import_as_newdoc": n(1928), "image.boundary": "边界", "image.import_tip": n(1015), "auth.guest_login_success": "", "boundary.canvas": "画布", "boundary.select_boundary": n(1989), "boundary.selection": "选区", "convert widget {0} failed:": "", "document {0} not found": "", "image.document.new": "", "image.layer.smart_object": "", "layer not found {0}": "", "photoshop.invalid_boundary_type": "", "photoshop.no_active_layer": "" }, Bi = { "preview.show": n(551), "gateway.select_ai_service": n(2381), "provider.select.title": n(961), "provider.comfyui.description": n(373), "provider.replicate.description": n(1999), "provider.runninghub.description": n(2147), "provider.google.description": n(2478), "task.waiting_upload": n(1784), "task.creating_task": n(1532), "task.running_duration": n(1170), "task.cancelled": n(1093), "task.cancel_failed": n(700), "comfy.connect": "Connect", "comfy.load_failed": n(1116), "comfy.loading": "ComfyUI loading...", "comfy.channel_connecting": n(1809), "comfy.server_reconnecting": n(1837), "comfy.version_mismatch": n(1374), "comfy.cloud_recommend": n(296), "comfy.your_workflows": n(1887), "comfy.refresh_workflows": n(1603), "comfy.queue_progress": n(1919), "comfy.save": n(965), "comfy.refresh": n(670), "comfy.stop_cancel_all": n(507), "comfy.stop_auto_run": "Stop auto run", "comfy.start_auto_run": n(973), "comfy.run": n(960), "comfy.back": n(554), "comfy.uploading": "Uploading...", "comfy.help_tooltip": n(1009), "boundary.title": n(1035), "boundary.tooltip": n(971), "boundary.current_canvas": n(1142), "boundary.current_layer": n(1847), "boundary.current_selection": "Current Selection", "boundary.set_as_canvas": "Set as Canvas", "boundary.set_as_layer": "Set as Current Layer", "boundary.set_as_selection": "Set as Current Selection", "http.404": "SDPPP may not be installed or version mismatch (404)", "http.401": n(2445), "http.403": n(1375), "http.408": n(1885), "http.500": n(932), "http.501": n(354), "http.502": "Gateway error (502)", "http.503": n(243), "http.504": n(2304), "http.unknown": n(1233), "runninghub.get_apikey": n(1778), "runninghub.apikey_placeholder": n(1862), "runninghub.app_id": n(2087), "runninghub.webapp_id_placeholder": n(1696), "runninghub.open_app": n(349), "runninghub.execute": n(1570), "runninghub.rh_coins": n(936), "runninghub.current_tasks": "Current Tasks:", "runninghub.help_tooltip": "Tutorial", "runninghub.status.waiting": n(2051), "runninghub.status.running": n(2086), "runninghub.status.failed": n(1050), "runninghub.status.success": n(1471), "image.auto_refetch": "Auto repick from PS", "runninghub.error.get_result_failed": n(2343), "runninghub.error.task_failed": "Task execution failed: {{error}}", "runninghub.error.task_incomplete": "Task incomplete, current status: {{status}}", "replicate.get_apikey": n(1834), "replicate.apikey_placeholder": "Enter your Replicate API Key", "replicate.execute": n(1570), "replicate.model_placeholder": n(2447), "replicate.help_tooltip": "Tutorial", "liblib.get_apikey": "How to get APIKey and API Secret", "liblib.execute": "Execute", "common.close": n(1276), "common.save_and_run": "Save and run immediately", "common.loading": "Loading...", "common.error": n(868), "common.success": "Success", "common.cancel": n(1894), "common.confirm": n(2209), "common.options": n(996), "common.options_separator": "=== Options ===", webviewInForeground: n(853), webviewInForeground2: n(610), "auth.login_success": n(244), "auth.username_label": "Username: {{username}}", "auth.email_label": n(1542), "auth.logout": n(1147), "auth.login_required": n(2462), "image.send.select_position": n(272), "image.send.sending": "Sending image...", "image.layer.new": n(1365), "image.layer.current": n(1847), "image.layer.fit_to_current": n(2362), "image.layer.fit_to_selection": "Fit to selection", "image.layer.fit_to_canvas": n(1686), "image.shortcut_auth_required": n(1759), "image.shortcut_focus_required": "Plugin window focused required to use keyboard shortcut", "image.get.select_image": n(1438), "image.get.entire_canvas": n(1142), "image.get.canvas": n(863), "image.get.current_layer": n(1847), "image.get.current_layer_bounds": "Current layer bounds only", "image.get.selection_bounds": "Selection bounds only", "image.get.canvas_bounds": n(2561), "image.crop_by_selection": "Crop by selection", "image.limit_size": n(695), "image.crop.none": "No crop", "image.crop.inpaint": n(2067), "image.crop.outpaint": n(2214), "image.send_all": n(1945), "image.save_all": n(2444), "image.save_current": n(2432), "image.delete_current": n(1081), "image.more_actions": n(302), "image.jump_to_last": n(1610), "image.clear_all": n(762), "image.send_to_ps": n(2451), "image.download": "Download", "image.copy": n(2203), "image.sending": "Sending...", "image.sending_all": "Sending all images...", "mask.get.select_mask": "Please select the mask to get", "mask.selection": "Selection", "mask.current_layer_bounds": n(1957), "mask.all": n(1644), "mask.selection_exclude": n(2540), "mask.current_layer_exclude": "Exclude current layer", "mask.empty": n(2290), "document {{0}} not found": n(2423), "create document for preview": n(306), "resize document for preview": "Resize document for preview", "create document for sent images": n(1932), "show sent images": n(678), "create layer failed": n(618), "layer not found {{0}}": n(1920), "layer not found: {{0}}": n(1341), "layer {{0}} is not a group": "Layer {{0}} is not a group", "no linked layer for {{0}}": n(563), "no first related layer in {{0}}": "No first related layer in {{0}}", "merge group failed": "Merge group failed", "get content of layer {{0}}": n(527), "get layer info": n(511), "get_layer_info: layer_identify required": n(1244), "get pixel of {{0}} failed": n(1166), "get selection failed": n(625), "invalid name: {{0}}": n(1674), "desire bounds is null": n(2278), "intersect or scaledDesire is null": n(1851), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': n(1079), "select layer": n(1155), "run Photoshop Action": n(2026), "Action {{0}} not found": n(738), "Action set {{0}} not found": n(1637), "set text to layer": n(1872), "ComfyManager not found, cannot reboot": n(1117), "Failed to reboot ComfyUI": n(790), "image.upload.from_canvas": n(863), "image.upload.from_curlayer": n(1847), "image.upload.from_selection": n(447), "image.upload.from_harddisk": "Disk", "image.upload.clear": n(2530), "image.upload.uploading": n(1343), "image.upload.no_images": "No images", "image.upload.tooltip.alt.crop": n(1933), "image.upload.tooltip.alt.reverse": n(1280), "image.upload.tooltip.image.canvas": "Get image from Canvas", "image.upload.tooltip.image.curlayer": n(2136), "image.upload.tooltip.mask.canvas": "Get mask from Canvas", "image.upload.tooltip.mask.curlayer": "Get mask from Current Layer", "image.upload.tooltip.mask.selection": "Get mask from Selection", "image.upload.tooltip.autosync.on": "Auto Sync: on", "image.upload.tooltip.autosync.off": n(792), "image.upload.autosync.fetching": n(2468), "image.auto_send_enabled": n(922), "image.auto_send_disabled": "Auto send disabled", "source.source": "Source", "source.content": "Content", "source.boundary": n(2474), "source.mask": n(1824), "source.disk": n(1327), "source.remote": n(1677), "source.unknown": n(2511), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": n(863), "source.current_layer": n(1441), "source.selection": n(447), "source.quality_percent": n(341), "source.crop.positive": n(405), "source.crop.negative": n(918), "source.reverse": "Reverse", "send_images.create_document": n(963), "send_images.create_document_failed": n(1402), "photoshop.no_active_document": "No active document", "photoshop.rectangle_coordinates_required": n(2524), "photoshop.create_guide_frame": n(861), "photoshop.clear_guide_frame": n(1518), "photoshop.invalid_action": n(609), "photoshop.file_not_found": "File not found: {{path}}", "photoshop.failed_to_open_file_as_document": n(1971), "photoshop.invalid_boundary": n(1122), "photoshop.failed_to_open_image_file": n(1339), "photoshop.open_images_from_file": n(886), "photoshop.failed_to_create_document_from_file": n(518), "google.field.image_input": n(290), "google.field.prompt": "Prompt", "google.field.batch_count": n(1229), "google.field.images_per_batch": n(692), "google.status.success": n(1471), "google.status.failed": n(1050), "google.status.generating": n(1235), "google.apikey_placeholder": "Enter Google API Key", "google.get_apikey": n(994), "google.baseurl_placeholder": "Base URL", "google.help_tooltip": n(1174), "google.model_name": "Gemini 2.5 Flash Image", "google.loading": n(1200), "google.generating": n(1841), "google.generate": n(1141), "image.auto_toggle": n(1688), "image.import_as_smartobject": "Import as Smart Object", "image.import_as_newdoc": n(2372), "image.boundary": n(2220), "image.import_tip": n(1324), "auth.guest_login_success": n(593), "boundary.canvas": "Canvas", "boundary.select_boundary": n(1564), "boundary.selection": n(447), "convert widget {0} failed:": "convert widget {0} failed:", "document {0} not found": n(1181), "image.document.new": "image.document.new", "image.layer.smart_object": n(766), "layer not found {0}": n(2233), "photoshop.invalid_boundary_type": n(1297), "photoshop.no_active_layer": n(369) }, g0 = (i) => typeof i === n(1401), Ge = () => {
  const i = n;
  let x, t;
  const r = new Promise((e, s) => {
    x = e, t = s;
  });
  return r[i(1315)] = x, r[i(955)] = t, r;
}, Dr = (i) => i == null ? "" : "" + i, Ki = (i, x, t) => {
  i.forEach((r) => {
    x[r] && (t[r] = x[r]);
  });
}, Ji = /###/g, jr = (i) => i && i[n(651)](n(333)) > -1 ? i.replace(Ji, ".") : i, Mr = (i) => !i || g0(i), ex = (i, x, t) => {
  const r = n, e = g0(x) ? x[r(1031)](".") : x;
  let s = 0;
  for (; s < e.length - 1; ) {
    if (Mr(i)) return {};
    const a = jr(e[s]);
    !i[a] && t && (i[a] = new t()), Object[r(2498)][r(2165)][r(459)](i, a) ? i = i[a] : i = {}, ++s;
  }
  return Mr(i) ? {} : { obj: i, k: jr(e[s]) };
}, Lr = (i, x, t) => {
  const r = n, { obj: e, k: s } = ex(i, x, Object);
  if (e !== void 0 || x.length === 1) {
    e[s] = t;
    return;
  }
  let a = x[x.length - 1], o = x[r(1012)](0, x[r(1396)] - 1), c = ex(i, o, Object);
  for (; c[r(1793)] === void 0 && o[r(1396)]; )
    a = o[o[r(1396)] - 1] + "." + a, o = o[r(1012)](0, o[r(1396)] - 1), c = ex(i, o, Object), c != null && c[r(1793)] && typeof c[r(1793)][c.k + "." + a] < "u" && (c[r(1793)] = void 0);
  c[r(1793)][c.k + "." + a] = t;
}, Gi = (i, x, t, r) => {
  const { obj: e, k: s } = ex(i, x, Object);
  e[s] = e[s] || [], e[s].push(t);
}, Ix = (i, x) => {
  const t = n, { obj: r, k: e } = ex(i, x);
  if (r && Object[t(2498)][t(2165)][t(459)](r, e))
    return r[e];
}, Qi = (i, x, t) => {
  const r = Ix(i, t);
  return r !== void 0 ? r : Ix(x, t);
}, Hn = (i, x, t) => {
  const r = n;
  for (const e in x)
    e !== r(2048) && e !== r(2568) && (e in i ? g0(i[e]) || i[e] instanceof String || g0(x[e]) || x[e] instanceof String ? t && (i[e] = x[e]) : Hn(i[e], x[e], t) : i[e] = x[e]);
  return i;
}, He = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, n(1935));
var Xi = { "&": "&amp;", "<": n(2458), ">": "&gt;", '"': n(1949), "'": n(492), "/": n(2206) };
const Yi = (i) => {
  const x = n;
  return g0(i) ? i[x(1783)](/[&<>"'\/]/g, (t) => Xi[t]) : i;
};
class _i {
  constructor(x) {
    const t = n;
    this[t(1737)] = x, this[t(579)] = /* @__PURE__ */ new Map(), this[t(1425)] = [];
  }
  [n(2179)](x) {
    const t = n, r = this[t(579)][t(1364)](x);
    if (r !== void 0) return r;
    const e = new RegExp(x);
    return this[t(1425)].length === this[t(1737)] && this[t(579)].delete(this[t(1425)][t(2225)]()), this[t(579)][t(933)](x, e), this[t(1425)][t(757)](x), e;
  }
}
const eo = [" ", ",", "?", "!", ";"], xo = new _i(20), to = (i, x, t) => {
  const r = n;
  x = x || "", t = t || "";
  const e = eo[r(254)]((o) => x[r(651)](o) < 0 && t[r(651)](o) < 0);
  if (e.length === 0) return !0;
  const s = xo.getRegExp("(" + e[r(1227)]((o) => o === "?" ? "\\?" : o).join("|") + ")");
  let a = !s[r(323)](i);
  if (!a) {
    const o = i[r(651)](t);
    o > 0 && !s.test(i[r(812)](0, o)) && (a = !0);
  }
  return a;
}, Bt = (i, x, t = ".") => {
  const r = n;
  if (!i) return;
  if (i[x])
    return Object[r(2498)][r(2165)][r(459)](i, x) ? i[x] : void 0;
  const e = x[r(1031)](t);
  let s = i;
  for (let a = 0; a < e[r(1396)]; ) {
    if (!s || typeof s !== r(1507)) return;
    let o, c = "";
    for (let u = a; u < e.length; ++u)
      if (u !== a && (c += t), c += e[u], o = s[c], o !== void 0) {
        if ([r(1401), r(1985), "boolean"].indexOf(typeof o) > -1 && u < e[r(1396)] - 1) continue;
        a += u - a + 1;
        break;
      }
    s = o;
  }
  return s;
}, rx = (i) => i == null ? void 0 : i[n(1783)]("_", "-"), ro = { type: n(1673), log(i) {
  const x = n;
  this.output(x(624), i);
}, warn(i) {
  this.output("warn", i);
}, error(i) {
  const x = n;
  this[x(2133)](x(2281), i);
}, output(i, x) {
  var r, e;
  const t = n;
  (e = (r = console == null ? void 0 : console[i]) == null ? void 0 : r[t(2598)]) == null || e.call(r, console, x);
} };
function K(i, x) {
  const t = Nx();
  return K = function(r, e) {
    return r = r - 236, t[r];
  }, K(i, x);
}
class Rx {
  constructor(x, t = {}) {
    this[n(752)](x, t);
  }
  init(x, t = {}) {
    const r = n;
    this[r(2449)] = t[r(2449)] || r(282), this[r(1673)] = x || ro, this.options = t, this[r(1676)] = t.debug;
  }
  log(...x) {
    return this[n(1750)](x, "log", "", !0);
  }
  [n(2512)](...x) {
    const t = n;
    return this[t(1750)](x, t(2512), "", !0);
  }
  error(...x) {
    return this.forward(x, "error", "");
  }
  deprecate(...x) {
    const t = n;
    return this.forward(x, t(2512), t(2335), !0);
  }
  [n(1750)](x, t, r, e) {
    const s = n;
    return e && !this[s(1676)] ? null : (g0(x[0]) && (x[0] = "" + r + this[s(2449)] + " " + x[0]), this.logger[t](x));
  }
  create(x) {
    const t = n;
    return new Rx(this[t(1673)], { prefix: this[t(2449)] + ":" + x + ":", ...this[t(2546)] });
  }
  clone(x) {
    const t = n;
    return x = x || this.options, x.prefix = x[t(2449)] || this[t(2449)], new Rx(this[t(1673)], x);
  }
}
var le = new Rx();
class qx {
  constructor() {
    const x = n;
    this[x(828)] = {};
  }
  on(x, t) {
    const r = n;
    return x[r(1031)](" ")[r(2228)]((e) => {
      const s = r;
      this.observers[e] || (this[s(828)][e] = /* @__PURE__ */ new Map());
      const a = this[s(828)][e][s(1364)](t) || 0;
      this[s(828)][e][s(933)](t, a + 1);
    }), this;
  }
  [n(2580)](x, t) {
    const r = n;
    if (this[r(828)][x]) {
      if (!t) {
        delete this.observers[x];
        return;
      }
      this.observers[x][r(381)](t);
    }
  }
  [n(1335)](x, ...t) {
    const r = n;
    this[r(828)][x] && Array[r(2371)](this.observers[x].entries())[r(2228)](([s, a]) => {
      for (let o = 0; o < a; o++)
        s(...t);
    }), this.observers["*"] && Array[r(2371)](this[r(828)]["*"][r(394)]())[r(2228)](([s, a]) => {
      for (let o = 0; o < a; o++)
        s.apply(s, [x, ...t]);
    });
  }
}
class $r extends qx {
  constructor(x, t = { ns: [n(2230)], defaultNS: "translation" }) {
    const r = n;
    super(), this[r(2197)] = x || {}, this[r(2546)] = t, this[r(2546)][r(2310)] === void 0 && (this[r(2546)][r(2310)] = "."), this[r(2546)].ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(x) {
    const t = n;
    this[t(2546)].ns[t(651)](x) < 0 && this[t(2546)].ns[t(757)](x);
  }
  [n(277)](x) {
    const t = n, r = this.options.ns[t(651)](x);
    r > -1 && this[t(2546)].ns[t(1209)](r, 1);
  }
  [n(1139)](x, t, r, e = {}) {
    var d, f;
    const s = n, a = e[s(2310)] !== void 0 ? e[s(2310)] : this[s(2546)][s(2310)], o = e.ignoreJSONStructure !== void 0 ? e[s(734)] : this[s(2546)][s(734)];
    let c;
    x.indexOf(".") > -1 ? c = x[s(1031)](".") : (c = [x, t], r && (Array[s(1606)](r) ? c.push(...r) : g0(r) && a ? c[s(757)](...r[s(1031)](a)) : c[s(757)](r)));
    const u = Ix(this[s(2197)], c);
    return !u && !t && !r && x[s(651)](".") > -1 && (x = c[0], t = c[1], r = c[s(1012)](2)[s(261)](".")), u || !o || !g0(r) ? u : Bt((f = (d = this[s(2197)]) == null ? void 0 : d[x]) == null ? void 0 : f[t], r, a);
  }
  [n(1843)](x, t, r, e, s = { silent: !1 }) {
    const a = n, o = s[a(2310)] !== void 0 ? s.keySeparator : this[a(2546)][a(2310)];
    let c = [x, t];
    r && (c = c[a(1118)](o ? r[a(1031)](o) : r)), x[a(651)](".") > -1 && (c = x[a(1031)]("."), e = t, t = c[1]), this[a(435)](t), Lr(this.data, c, e), s.silent || this[a(1335)](a(1697), x, t, r, e);
  }
  addResources(x, t, r, e = { silent: !1 }) {
    const s = n;
    for (const a in r)
      (g0(r[a]) || Array[s(1606)](r[a])) && this.addResource(x, t, a, r[a], { silent: !0 });
    e[s(2256)] || this.emit(s(1697), x, t, r);
  }
  [n(662)](x, t, r, e, s, a = { silent: !1, skipCopy: !1 }) {
    const o = n;
    let c = [x, t];
    x.indexOf(".") > -1 && (c = x[o(1031)]("."), e = r, r = t, t = c[1]), this.addNamespaces(t);
    let u = Ix(this[o(2197)], c) || {};
    a[o(1185)] || (r = JSON[o(2517)](JSON[o(328)](r))), e ? Hn(u, r, s) : u = { ...u, ...r }, Lr(this[o(2197)], c, u), a.silent || this.emit(o(1697), x, t, r);
  }
  [n(2397)](x, t) {
    const r = n;
    this[r(1993)](x, t) && delete this.data[x][t], this[r(277)](t), this[r(1335)](r(1475), x, t);
  }
  hasResourceBundle(x, t) {
    return this[n(1139)](x, t) !== void 0;
  }
  [n(803)](x, t) {
    const r = n;
    return t || (t = this.options.defaultNS), this[r(1139)](x, t);
  }
  [n(2480)](x) {
    return this.data[x];
  }
  hasLanguageSomeTranslations(x) {
    const t = n, r = this[t(2480)](x);
    return !!(r && Object.keys(r) || []).find((s) => r[s] && Object[t(2109)](r[s])[t(1396)] > 0);
  }
  toJSON() {
    return this[n(2197)];
  }
}
var Un = { processors: {}, addPostProcessor(i) {
  const x = n;
  this[x(2404)][i[x(2581)]] = i;
}, handle(i, x, t, r, e) {
  const s = n;
  return i[s(2228)]((a) => {
    var c;
    const o = s;
    x = ((c = this[o(2404)][a]) == null ? void 0 : c[o(1018)](x, t, r, e)) ?? x;
  }), x;
} };
const zr = {}, Hr = (i) => !g0(i) && typeof i !== n(1588) && typeof i !== n(1985);
class Cx extends qx {
  constructor(x, t = {}) {
    const r = n;
    super(), Ki([r(849), "languageUtils", r(711), r(2276), "backendConnector", r(2457), r(2342)], x, this), this[r(2546)] = t, this[r(2546)][r(2310)] === void 0 && (this[r(2546)][r(2310)] = "."), this[r(1673)] = le.create("translator");
  }
  [n(1828)](x) {
    const t = n;
    x && (this[t(1740)] = x);
  }
  exists(x, t = { interpolation: {} }) {
    const r = n, e = { ...t };
    if (x == null) return !1;
    const s = this[r(1315)](x, e);
    return (s == null ? void 0 : s.res) !== void 0;
  }
  extractFromKey(x, t) {
    const r = n;
    let e = t[r(1089)] !== void 0 ? t[r(1089)] : this[r(2546)][r(1089)];
    e === void 0 && (e = ":");
    const s = t[r(2310)] !== void 0 ? t[r(2310)] : this.options[r(2310)];
    let a = t.ns || this.options[r(1176)] || [];
    const o = e && x.indexOf(e) > -1, c = !this[r(2546)][r(1632)] && !t.keySeparator && !this[r(2546)][r(1792)] && !t[r(1089)] && !to(x, e, s);
    if (o && !c) {
      const u = x[r(1722)](this.interpolator[r(2134)]);
      if (u && u.length > 0) return { key: x, namespaces: g0(a) ? [a] : a };
      const d = x.split(e);
      (e !== s || e === s && this[r(2546)].ns[r(651)](d[0]) > -1) && (a = d[r(2225)]()), x = d[r(261)](s);
    }
    return { key: x, namespaces: g0(a) ? [a] : a };
  }
  translate(x, t, r) {
    const e = n;
    let s = typeof t == "object" ? { ...t } : t;
    if (typeof s !== e(1507) && this[e(2546)][e(1690)] && (s = this[e(2546)][e(1690)](arguments)), typeof options === e(1507) && (s = { ...s }), s || (s = {}), x == null) return "";
    Array.isArray(x) || (x = [String(x)]);
    const a = s[e(570)] !== void 0 ? s[e(570)] : this.options.returnDetails, o = s[e(2310)] !== void 0 ? s[e(2310)] : this.options[e(2310)], { key: c, namespaces: u } = this[e(2156)](x[x[e(1396)] - 1], s), d = u[u[e(1396)] - 1];
    let f = s[e(1089)] !== void 0 ? s[e(1089)] : this[e(2546)][e(1089)];
    f === void 0 && (f = ":");
    const l = s[e(1647)] || this.language, g = s[e(1956)] || this[e(2546)][e(1956)];
    if ((l == null ? void 0 : l[e(2162)]()) === e(1525))
      return g ? a ? { res: "" + d + f + c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: d, usedParams: this.getUsedParamsDetails(s) } : "" + d + f + c : a ? { res: c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: d, usedParams: this[e(1918)](s) } : c;
    const h = this[e(1315)](x, s);
    let m = h == null ? void 0 : h.res;
    const v = (h == null ? void 0 : h[e(993)]) || c, S = (h == null ? void 0 : h[e(921)]) || c, E = [e(1330), e(2566), "[object RegExp]"], N = s.joinArrays !== void 0 ? s[e(2596)] : this[e(2546)].joinArrays, O = !this[e(2457)] || this[e(2457)].handleAsObject, R = s[e(1223)] !== void 0 && !g0(s[e(1223)]), P = Cx[e(696)](s), C = R ? this[e(711)][e(2077)](l, s.count, s) : "", A = s[e(2522)] && R ? this.pluralResolver.getSuffix(l, s[e(1223)], { ordinal: !1 }) : "", D = R && !s[e(2522)] && s[e(1223)] === 0, M = D && s[e(1641) + this[e(2546)].pluralSeparator + e(1160)] || s["defaultValue" + C] || s[e(1641) + A] || s.defaultValue;
    let F = m;
    O && !m && P && (F = M);
    const q = Hr(F), U = Object.prototype.toString.apply(F);
    if (O && F && q && E[e(651)](U) < 0 && !(g0(N) && Array[e(1606)](F))) {
      if (!s.returnObjects && !this.options[e(776)]) {
        !this[e(2546)].returnedObjectHandler && this[e(1673)][e(2512)]("accessing an object - but returnObjects options is not enabled!");
        const $ = this[e(2546)][e(2287)] ? this[e(2546)][e(2287)](v, F, { ...s, ns: u }) : e(1791) + c + " (" + this[e(1740)] + ")' returned an object instead of string.";
        return a ? (h[e(846)] = $, h.usedParams = this.getUsedParamsDetails(s), h) : $;
      }
      if (o) {
        const $ = Array[e(1606)](F), V = $ ? [] : {}, J = $ ? S : v;
        for (const s0 in F)
          if (Object[e(2498)][e(2165)].call(F, s0)) {
            const i0 = "" + J + o + s0;
            P && !m ? V[s0] = this.translate(i0, { ...s, defaultValue: Hr(M) ? M[s0] : void 0, joinArrays: !1, ns: u }) : V[s0] = this.translate(i0, { ...s, joinArrays: !1, ns: u }), V[s0] === i0 && (V[s0] = F[s0]);
          }
        m = V;
      }
    } else if (O && g0(N) && Array[e(1606)](m))
      m = m[e(261)](N), m && (m = this[e(2479)](m, x, s, r));
    else {
      let $ = !1, V = !1;
      !this[e(1250)](m) && P && ($ = !0, m = M), !this[e(1250)](m) && (V = !0, m = c);
      const J = s[e(1916)] || this[e(2546)][e(1916)], s0 = J && V ? void 0 : m, i0 = P && M !== m && this[e(2546)][e(278)];
      if (V || $ || i0) {
        if (this[e(1673)][e(624)](e(i0 ? 1680 : 866), l, d, c, i0 ? M : m), o) {
          const y0 = this[e(1315)](c, { ...s, keySeparator: !1 });
          y0 && y0[e(846)] && this[e(1673)][e(2512)](e(1449));
        }
        let d0 = [];
        const l0 = this[e(1860)][e(1446)](this[e(2546)].fallbackLng, s[e(1647)] || this[e(1740)]);
        if (this[e(2546)][e(377)] === e(1811) && l0 && l0[0]) for (let y0 = 0; y0 < l0[e(1396)]; y0++)
          d0.push(l0[y0]);
        else this[e(2546)][e(377)] === e(1413) ? d0 = this.languageUtils[e(2493)](s[e(1647)] || this[e(1740)]) : d0[e(757)](s.lng || this.language);
        const f0 = (y0, S0, M0) => {
          var j;
          const C0 = e, Q0 = P && M0 !== m ? M0 : s0;
          this[C0(2546)][C0(1392)] ? this[C0(2546)].missingKeyHandler(y0, d, S0, Q0, i0, s) : (j = this.backendConnector) != null && j[C0(1667)] && this[C0(1182)][C0(1667)](y0, d, S0, Q0, i0, s), this[C0(1335)](C0(866), y0, d, S0, m);
        };
        this.options[e(1667)] && (this[e(2546)][e(2508)] && R ? d0[e(2228)]((y0) => {
          const S0 = e, M0 = this.pluralResolver[S0(1237)](y0, s);
          D && s[S0(1641) + this[S0(2546)][S0(452)] + S0(1160)] && M0.indexOf(this[S0(2546)][S0(452)] + S0(1160)) < 0 && M0[S0(757)](this[S0(2546)][S0(452)] + S0(1160)), M0[S0(2228)]((C0) => {
            const Q0 = S0;
            f0([y0], c + C0, s[Q0(1641) + C0] || M);
          });
        }) : f0(d0, c, M));
      }
      m = this[e(2479)](m, x, s, h, r), V && m === c && this[e(2546)][e(2139)] && (m = "" + d + f + c), (V || $) && this[e(2546)].parseMissingKeyHandler && (m = this[e(2546)][e(489)](this[e(2546)][e(2139)] ? "" + d + f + c : c, $ ? m : void 0, s));
    }
    return a ? (h[e(846)] = m, h[e(2116)] = this.getUsedParamsDetails(s), h) : m;
  }
  [n(2479)](x, t, r, e, s) {
    var u, d;
    const a = n;
    if ((u = this.i18nFormat) != null && u[a(2517)]) x = this.i18nFormat[a(2517)](x, { ...this[a(2546)][a(2571)][a(2464)], ...r }, r[a(1647)] || this.language || e[a(850)], e[a(1522)], e.usedKey, { resolved: e });
    else if (!r[a(1643)]) {
      r[a(2571)] && this[a(2276)].init({ ...r, interpolation: { ...this.options[a(2571)], ...r.interpolation } });
      const f = g0(x) && (((d = r == null ? void 0 : r[a(2571)]) == null ? void 0 : d.skipOnVariables) !== void 0 ? r[a(2571)][a(831)] : this[a(2546)][a(2571)].skipOnVariables);
      let l;
      if (f) {
        const h = x.match(this.interpolator[a(2134)]);
        l = h && h[a(1396)];
      }
      let g = r[a(1783)] && !g0(r[a(1783)]) ? r.replace : r;
      if (this.options[a(2571)][a(2464)] && (g = { ...this[a(2546)][a(2571)][a(2464)], ...g }), x = this[a(2276)][a(1121)](x, g, r[a(1647)] || this[a(1740)] || e[a(850)], r), f) {
        const h = x[a(1722)](this[a(2276)][a(2134)]), m = h && h.length;
        l < m && (r[a(1975)] = !1);
      }
      !r[a(1647)] && e && e[a(846)] && (r[a(1647)] = this.language || e[a(850)]), r[a(1975)] !== !1 && (x = this[a(2276)][a(1975)](x, (...h) => {
        const m = a;
        return (s == null ? void 0 : s[0]) === h[0] && !r[m(2354)] ? (this[m(1673)][m(2512)](m(1733) + h[0] + m(350) + t[0]), null) : this.translate(...h, t);
      }, r)), r[a(2571)] && this.interpolator[a(2348)]();
    }
    const o = r.postProcess || this[a(2546)][a(1803)], c = g0(o) ? [o] : o;
    return x != null && (c != null && c[a(1396)]) && r[a(2583)] !== !1 && (x = Un[a(911)](c, x, t, this[a(2546)] && this[a(2546)][a(1144)] ? { i18nResolved: { ...e, usedParams: this[a(1918)](r) }, ...r } : r, this)), x;
  }
  [n(1315)](x, t = {}) {
    const r = n;
    let e, s, a, o, c;
    return g0(x) && (x = [x]), x[r(2228)]((u) => {
      const d = r;
      if (this[d(1250)](e)) return;
      const f = this[d(2156)](u, t), l = f[d(2022)];
      s = l;
      let g = f[d(2578)];
      this.options.fallbackNS && (g = g[d(1118)](this[d(2546)][d(777)]));
      const h = t[d(1223)] !== void 0 && !g0(t.count), m = h && !t[d(2522)] && t.count === 0, v = t.context !== void 0 && (g0(t.context) || typeof t[d(2354)] === d(1985)) && t[d(2354)] !== "", S = t[d(1001)] ? t[d(1001)] : this.languageUtils.toResolveHierarchy(t[d(1647)] || this[d(1740)], t[d(948)]);
      g[d(2228)]((E) => {
        var O, R;
        const N = d;
        this.isValidLookup(e) || (c = E, !zr[S[0] + "-" + E] && ((O = this.utils) != null && O.hasLoadedNamespace) && !((R = this[N(2342)]) != null && R[N(2393)](c)) && (zr[S[0] + "-" + E] = !0, this.logger[N(2512)](N(949) + s + N(1113) + S[N(261)](", ") + N(1981) + c + N(2129), N(1465))), S[N(2228)]((P) => {
          var M;
          const C = N;
          if (this.isValidLookup(e)) return;
          o = P;
          const A = [l];
          if ((M = this.i18nFormat) != null && M.addLookupKeys) this[C(2457)][C(1104)](A, l, P, E, t);
          else {
            let F;
            h && (F = this[C(711)].getSuffix(P, t.count, t));
            const q = this[C(2546)][C(452)] + C(1160), U = this.options[C(452)] + C(2522) + this.options[C(452)];
            if (h && (A.push(l + F), t.ordinal && F[C(651)](U) === 0 && A[C(757)](l + F[C(1783)](U, this[C(2546)].pluralSeparator)), m && A[C(757)](l + q)), v) {
              const $ = "" + l + this[C(2546)].contextSeparator + t[C(2354)];
              A[C(757)]($), h && (A[C(757)]($ + F), t.ordinal && F[C(651)](U) === 0 && A[C(757)]($ + F.replace(U, this[C(2546)][C(452)])), m && A[C(757)]($ + q));
            }
          }
          let D;
          for (; D = A[C(1832)](); )
            !this[C(1250)](e) && (a = D, e = this.getResource(P, E, D, t));
        }));
      });
    }), { res: e, usedKey: s, exactUsedKey: a, usedLng: o, usedNS: c };
  }
  [n(1250)](x) {
    const t = n;
    return x !== void 0 && !(!this[t(2546)].returnNull && x === null) && !(!this[t(2546)][t(476)] && x === "");
  }
  [n(1139)](x, t, r, e = {}) {
    var a;
    const s = n;
    return (a = this[s(2457)]) != null && a.getResource ? this[s(2457)][s(1139)](x, t, r, e) : this[s(849)][s(1139)](x, t, r, e);
  }
  [n(1918)](x = {}) {
    const t = n, r = [t(1641), t(2522), t(2354), t(1783), "lng", t(1001), t(948), "ns", t(2310), t(1089), "returnObjects", t(570), t(2596), t(1803), t(2571)], e = x.replace && !g0(x[t(1783)]);
    let s = e ? x[t(1783)] : x;
    if (e && typeof x.count !== t(654) && (s.count = x[t(1223)]), this[t(2546)].interpolation[t(2464)] && (s = { ...this[t(2546)][t(2571)][t(2464)], ...s }), !e) {
      s = { ...s };
      for (const a of r)
        delete s[a];
    }
    return s;
  }
  static [n(696)](x) {
    const t = n, r = "defaultValue";
    for (const e in x)
      if (Object[t(2498)][t(2165)][t(459)](x, e) && r === e[t(812)](0, r[t(1396)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Ur {
  constructor(x) {
    const t = n;
    this[t(2546)] = x, this.supportedLngs = this[t(2546)][t(2257)] || !1, this.logger = le.create(t(1860));
  }
  [n(2069)](x) {
    const t = n;
    if (x = rx(x), !x || x.indexOf("-") < 0) return null;
    const r = x[t(1031)]("-");
    return r.length === 2 || (r[t(1832)](), r[r.length - 1][t(2162)]() === "x") ? null : this[t(587)](r[t(261)]("-"));
  }
  [n(2499)](x) {
    const t = n;
    if (x = rx(x), !x || x.indexOf("-") < 0) return x;
    const r = x[t(1031)]("-");
    return this[t(587)](r[0]);
  }
  [n(587)](x) {
    const t = n;
    if (g0(x) && x[t(651)]("-") > -1) {
      let r;
      try {
        r = Intl[t(1708)](x)[0];
      } catch {
      }
      return r && this.options[t(1382)] && (r = r[t(2162)]()), r || (this[t(2546)].lowerCaseLng ? x[t(2162)]() : x);
    }
    return this[t(2546)][t(1526)] || this[t(2546)][t(1382)] ? x[t(2162)]() : x;
  }
  isSupportedCode(x) {
    const t = n;
    return (this[t(2546)].load === t(1538) || this[t(2546)][t(832)]) && (x = this[t(2499)](x)), !this.supportedLngs || !this[t(2257)][t(1396)] || this[t(2257)][t(651)](x) > -1;
  }
  [n(545)](x) {
    const t = n;
    if (!x) return null;
    let r;
    return x[t(2228)]((e) => {
      const s = t;
      if (r) return;
      const a = this[s(587)](e);
      (!this.options[s(2257)] || this[s(1902)](a)) && (r = a);
    }), !r && this[t(2546)][t(2257)] && x[t(2228)]((e) => {
      const s = t;
      if (r) return;
      const a = this[s(2069)](e);
      if (this[s(1902)](a)) return r = a;
      const o = this[s(2499)](e);
      if (this.isSupportedCode(o)) return r = o;
      r = this[s(2546)].supportedLngs[s(950)]((c) => {
        const u = s;
        if (c === o) return c;
        if (!(c.indexOf("-") < 0 && o.indexOf("-") < 0) && (c[u(651)]("-") > 0 && o[u(651)]("-") < 0 && c[u(812)](0, c[u(651)]("-")) === o || c.indexOf(o) === 0 && o[u(1396)] > 1))
          return c;
      });
    }), r || (r = this.getFallbackCodes(this[t(2546)][t(948)])[0]), r;
  }
  [n(1446)](x, t) {
    const r = n;
    if (!x) return [];
    if (typeof x === r(1856) && (x = x(t)), g0(x) && (x = [x]), Array[r(1606)](x)) return x;
    if (!t) return x[r(906)] || [];
    let e = x[t];
    return e || (e = x[this[r(2069)](t)]), e || (e = x[this[r(587)](t)]), e || (e = x[this[r(2499)](t)]), e || (e = x.default), e || [];
  }
  [n(2493)](x, t) {
    const r = n, e = this.getFallbackCodes((t === !1 ? [] : t) || this[r(2546)][r(948)] || [], x), s = [], a = (o) => {
      const c = r;
      o && (this[c(1902)](o) ? s[c(757)](o) : this.logger[c(2512)](c(1557) + o));
    };
    return g0(x) && (x[r(651)]("-") > -1 || x[r(651)]("_") > -1) ? (this[r(2546)][r(2082)] !== r(1538) && a(this[r(587)](x)), this.options[r(2082)] !== r(1538) && this.options[r(2082)] !== r(1016) && a(this[r(2069)](x)), this[r(2546)][r(2082)] !== r(1016) && a(this[r(2499)](x))) : g0(x) && a(this.formatLanguageCode(x)), e[r(2228)]((o) => {
      const c = r;
      s[c(651)](o) < 0 && a(this[c(587)](o));
    }), s;
  }
}
const Vr = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Wr = { select: (i) => n(i === 1 ? 2035 : 941), resolvedOptions: () => ({ pluralCategories: ["one", n(941)] }) };
class so {
  constructor(x, t = {}) {
    const r = n;
    this[r(1860)] = x, this.options = t, this[r(1673)] = le[r(2201)](r(711)), this[r(920)] = {};
  }
  [n(2292)](x, t) {
    this.rules[x] = t;
  }
  [n(1817)]() {
    const x = n;
    this[x(920)] = {};
  }
  [n(793)](x, t = {}) {
    const r = n, e = rx(x === r(1207) ? "en" : x), s = t[r(2522)] ? "ordinal" : "cardinal", a = JSON[r(328)]({ cleanedCode: e, type: s });
    if (a in this[r(920)]) return this[r(920)][a];
    let o;
    try {
      o = new Intl[r(1514)](e, { type: s });
    } catch {
      if (!Intl) return this[r(1673)].error(r(2528)), Wr;
      if (!x[r(1722)](/-|_/)) return Wr;
      const u = this[r(1860)][r(2499)](x);
      o = this[r(793)](u, t);
    }
    return this.pluralRulesCache[a] = o, o;
  }
  needsPlural(x, t = {}) {
    const r = n;
    let e = this[r(793)](x, t);
    return e || (e = this.getRule(r(1207), t)), (e == null ? void 0 : e.resolvedOptions()[r(380)][r(1396)]) > 1;
  }
  getPluralFormsOfKey(x, t, r = {}) {
    return this[n(1237)](x, r).map((s) => "" + t + s);
  }
  getSuffixes(x, t = {}) {
    const r = n;
    let e = this[r(793)](x, t);
    return e || (e = this[r(793)](r(1207), t)), e ? e[r(1995)]()[r(380)][r(1662)]((s, a) => Vr[s] - Vr[a]).map((s) => "" + this[r(2546)][r(962)] + (t[r(2522)] ? "ordinal" + this[r(2546)][r(962)] : "") + s) : [];
  }
  [n(2077)](x, t, r = {}) {
    const e = n, s = this[e(793)](x, r);
    return s ? "" + this[e(2546)].prepend + (r[e(2522)] ? e(2522) + this.options[e(962)] : "") + s[e(1549)](t) : (this[e(1673)][e(2512)](e(2548) + x), this[e(2077)](e(1207), t, r));
  }
}
const Zr = (i, x, t, r = ".", e = !0) => {
  let s = Qi(i, x, t);
  return !s && e && g0(t) && (s = Bt(i, t, r), s === void 0 && (s = Bt(x, t, r))), s;
}, Ux = (i) => i.replace(/\$/g, n(495));
class no {
  constructor(x = {}) {
    var r;
    const t = n;
    this[t(1673)] = le[t(2201)]("interpolator"), this[t(2546)] = x, this.format = ((r = x == null ? void 0 : x.interpolation) == null ? void 0 : r.format) || ((e) => e), this[t(752)](x);
  }
  [n(752)](x = {}) {
    const t = n;
    x[t(2571)] || (x.interpolation = { escapeValue: !0 });
    const { escape: r, escapeValue: e, useRawValueToEscape: s, prefix: a, prefixEscaped: o, suffix: c, suffixEscaped: u, formatSeparator: d, unescapeSuffix: f, unescapePrefix: l, nestingPrefix: g, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: v, nestingOptionsSeparator: S, maxReplaces: E, alwaysFormat: N } = x.interpolation;
    this.escape = r !== void 0 ? r : Yi, this[t(746)] = e !== void 0 ? e : !0, this[t(1631)] = s !== void 0 ? s : !1, this[t(2449)] = a ? He(a) : o || "{{", this.suffix = c ? He(c) : u || "}}", this.formatSeparator = d || ",", this[t(1065)] = f ? "" : l || "-", this.unescapeSuffix = this[t(1065)] ? "" : f || "", this[t(2118)] = g ? He(g) : h || He(t(2076)), this[t(1964)] = m ? He(m) : v || He(")"), this.nestingOptionsSeparator = S || ",", this[t(253)] = E || 1e3, this.alwaysFormat = N !== void 0 ? N : !1, this[t(1543)]();
  }
  [n(2348)]() {
    const x = n;
    this[x(2546)] && this[x(752)](this.options);
  }
  [n(1543)]() {
    const x = n, t = (r, e) => {
      const s = K;
      return (r == null ? void 0 : r[s(2538)]) === e ? (r[s(1712)] = 0, r) : new RegExp(e, "g");
    };
    this[x(737)] = t(this[x(737)], this.prefix + x(1534) + this.suffix), this[x(1437)] = t(this[x(1437)], "" + this[x(2449)] + this[x(1065)] + "(.+?)" + this[x(1456)] + this[x(2014)]), this[x(2134)] = t(this[x(2134)], this.nestingPrefix + "(.+?)" + this.nestingSuffix);
  }
  [n(1121)](x, t, r, e) {
    var h;
    const s = n;
    let a, o, c;
    const u = this[s(2546)] && this.options[s(2571)] && this.options[s(2571)].defaultVariables || {}, d = (m) => {
      const v = s;
      if (m[v(651)](this[v(1399)]) < 0) {
        const O = Zr(t, u, m, this.options[v(2310)], this[v(2546)][v(734)]);
        return this[v(423)] ? this[v(2330)](O, void 0, r, { ...e, ...t, interpolationkey: m }) : O;
      }
      const S = m.split(this[v(1399)]), E = S[v(2225)]()[v(893)](), N = S.join(this.formatSeparator)[v(893)]();
      return this[v(2330)](Zr(t, u, E, this[v(2546)][v(2310)], this[v(2546)][v(734)]), N, r, { ...e, ...t, interpolationkey: E });
    };
    this[s(1543)]();
    const f = (e == null ? void 0 : e.missingInterpolationHandler) || this[s(2546)].missingInterpolationHandler, l = ((h = e == null ? void 0 : e[s(2571)]) == null ? void 0 : h[s(831)]) !== void 0 ? e[s(2571)].skipOnVariables : this[s(2546)][s(2571)][s(831)];
    return [{ regex: this[s(1437)], safeValue: (m) => Ux(m) }, { regex: this.regexp, safeValue: (m) => this[s(746)] ? Ux(this.escape(m)) : Ux(m) }].forEach((m) => {
      const v = s;
      for (c = 0; a = m[v(2237)][v(889)](x); ) {
        const S = a[1][v(893)]();
        if (o = d(S), o === void 0)
          if (typeof f == "function") {
            const N = f(x, a, e);
            o = g0(N) ? N : "";
          } else if (e && Object[v(2498)][v(2165)][v(459)](e, S)) o = "";
          else if (l) {
            o = a[0];
            continue;
          } else this[v(1673)].warn("missed to pass in variable " + S + " for interpolating " + x), o = "";
        else !g0(o) && !this[v(1631)] && (o = Dr(o));
        const E = m[v(1990)](o);
        if (x = x[v(1783)](a[0], E), l ? (m.regex[v(1712)] += o[v(1396)], m[v(2237)][v(1712)] -= a[0][v(1396)]) : m.regex.lastIndex = 0, c++, c >= this[v(253)]) break;
      }
    }), x;
  }
  [n(1975)](x, t, r = {}) {
    const e = n;
    let s, a, o;
    const c = (u, d) => {
      const f = K, l = this.nestingOptionsSeparator;
      if (u[f(651)](l) < 0) return u;
      const g = u[f(1031)](new RegExp(l + f(1383)));
      let h = "{" + g[1];
      u = g[0], h = this[f(1121)](h, o);
      const m = h.match(/'/g), v = h[f(1722)](/"/g);
      (((m == null ? void 0 : m[f(1396)]) ?? 0) % 2 === 0 && !v || v[f(1396)] % 2 !== 0) && (h = h[f(1783)](/'/g, '"'));
      try {
        o = JSON[f(2517)](h), d && (o = { ...d, ...o });
      } catch (S) {
        return this.logger.warn(f(1578) + u, S), "" + u + l + h;
      }
      return o[f(1641)] && o[f(1641)].indexOf(this[f(2449)]) > -1 && delete o.defaultValue, u;
    };
    for (; s = this.nestingRegexp[e(889)](x); ) {
      let u = [];
      o = { ...r }, o = o[e(1783)] && !g0(o[e(1783)]) ? o[e(1783)] : o, o[e(2583)] = !1, delete o.defaultValue;
      let d = !1;
      if (s[0][e(651)](this[e(1399)]) !== -1 && !/{.*}/[e(323)](s[1])) {
        const f = s[1][e(1031)](this[e(1399)])[e(1227)]((l) => l[e(893)]());
        s[1] = f.shift(), u = f, d = !0;
      }
      if (a = t(c[e(459)](this, s[1].trim(), o), o), a && s[0] === x && !g0(a)) return a;
      g0(a) || (a = Dr(a)), !a && (this.logger.warn(e(1453) + s[1] + e(884) + x), a = ""), d && (a = u.reduce((f, l) => this.format(f, l, r.lng, { ...r, interpolationkey: s[1].trim() }), a[e(893)]())), x = x.replace(s[0], a), this.regexp[e(1712)] = 0;
    }
    return x;
  }
}
const ao = (i) => {
  const x = n;
  let t = i[x(2162)]()[x(893)]();
  const r = {};
  if (i[x(651)]("(") > -1) {
    const e = i[x(1031)]("(");
    t = e[0][x(2162)]()[x(893)]();
    const s = e[1][x(812)](0, e[1].length - 1);
    t === x(1540) && s.indexOf(":") < 0 ? r[x(1540)] || (r[x(1540)] = s.trim()) : t === x(1304) && s[x(651)](":") < 0 ? r.range || (r[x(1595)] = s[x(893)]()) : s[x(1031)](";")[x(2228)]((o) => {
      const c = x;
      if (o) {
        const [u, ...d] = o[c(1031)](":"), f = d[c(261)](":")[c(893)]().replace(/^'+|'+$/g, ""), l = u[c(893)]();
        r[l] || (r[l] = f), f === c(273) && (r[l] = !1), f === "true" && (r[l] = !0), isNaN(f) || (r[l] = parseInt(f, 10));
      }
    });
  }
  return { formatName: t, formatOptions: r };
}, Br = (i) => {
  const x = {};
  return (t, r, e) => {
    const s = K;
    let a = e;
    e && e[s(325)] && e[s(2295)] && e[s(2295)][e[s(325)]] && e[e.interpolationkey] && (a = { ...a, [e[s(325)]]: void 0 });
    const o = r + JSON[s(328)](a);
    let c = x[o];
    return !c && (c = i(rx(r), e), x[o] = c), c(t);
  };
}, io = (i) => (x, t, r) => i(rx(t), r)(x);
class oo {
  constructor(x = {}) {
    const t = n;
    this[t(1673)] = le[t(2201)](t(713)), this[t(2546)] = x, this[t(752)](x);
  }
  [n(752)](x, t = { interpolation: {} }) {
    const r = n;
    this[r(1399)] = t.interpolation[r(1399)] || ",";
    const e = t[r(2450)] ? Br : io;
    this[r(1575)] = { number: e((s, a) => {
      const o = r, c = new Intl[o(1332)](s, { ...a });
      return (u) => c[o(2330)](u);
    }), currency: e((s, a) => {
      const o = r, c = new Intl[o(1332)](s, { ...a, style: o(1540) });
      return (u) => c.format(u);
    }), datetime: e((s, a) => {
      const o = new Intl.DateTimeFormat(s, { ...a });
      return (c) => o.format(c);
    }), relativetime: e((s, a) => {
      const o = r, c = new Intl.RelativeTimeFormat(s, { ...a });
      return (u) => c[o(2330)](u, a[o(1595)] || o(2222));
    }), list: e((s, a) => {
      const o = r, c = new Intl[o(817)](s, { ...a });
      return (u) => c[o(2330)](u);
    }) };
  }
  [n(2062)](x, t) {
    const r = n;
    this[r(1575)][x.toLowerCase()[r(893)]()] = t;
  }
  addCached(x, t) {
    const r = n;
    this[r(1575)][x[r(2162)]().trim()] = Br(t);
  }
  format(x, t, r, e = {}) {
    const s = n, a = t.split(this.formatSeparator);
    if (a[s(1396)] > 1 && a[0][s(651)]("(") > 1 && a[0][s(651)](")") < 0 && a.find((c) => c[s(651)](")") > -1)) {
      const c = a.findIndex((u) => u[s(651)](")") > -1);
      a[0] = [a[0], ...a[s(1209)](1, c)][s(261)](this.formatSeparator);
    }
    return a[s(1900)]((c, u) => {
      var g;
      const d = s, { formatName: f, formatOptions: l } = ao(u);
      if (this[d(1575)][f]) {
        let h = c;
        try {
          const m = ((g = e == null ? void 0 : e[d(2295)]) == null ? void 0 : g[e[d(325)]]) || {}, v = m[d(2167)] || m[d(1647)] || e.locale || e.lng || r;
          h = this[d(1575)][f](c, v, { ...l, ...e, ...m });
        } catch (m) {
          this[d(1673)][d(2512)](m);
        }
        return h;
      } else this[d(1673)][d(2512)](d(512) + f);
      return c;
    }, x);
  }
}
const co = (i, x) => {
  const t = n;
  i[t(359)][x] !== void 0 && (delete i[t(359)][x], i[t(390)]--);
};
class uo extends qx {
  constructor(x, t, r, e = {}) {
    var a, o;
    const s = n;
    super(), this[s(352)] = x, this[s(845)] = t, this[s(2465)] = r, this[s(1860)] = r[s(1860)], this[s(2546)] = e, this[s(1673)] = le.create("backendConnector"), this.waitingReads = [], this[s(2532)] = e[s(2532)] || 10, this[s(1398)] = 0, this[s(1638)] = e[s(1638)] >= 0 ? e[s(1638)] : 5, this[s(2065)] = e[s(2065)] >= 1 ? e[s(2065)] : 350, this[s(2374)] = {}, this.queue = [], (o = (a = this[s(352)]) == null ? void 0 : a[s(752)]) == null || o.call(a, r, e[s(352)], e);
  }
  [n(1566)](x, t, r, e) {
    const s = n, a = {}, o = {}, c = {}, u = {};
    return x[s(2228)]((d) => {
      let f = !0;
      t.forEach((l) => {
        const g = K, h = d + "|" + l;
        !r[g(576)] && this[g(845)][g(1993)](d, l) ? this[g(2374)][h] = 2 : this[g(2374)][h] < 0 || (this[g(2374)][h] === 1 ? o[h] === void 0 && (o[h] = !0) : (this[g(2374)][h] = 1, f = !1, o[h] === void 0 && (o[h] = !0), a[h] === void 0 && (a[h] = !0), u[l] === void 0 && (u[l] = !0)));
      }), f || (c[d] = !0);
    }), (Object[s(2109)](a)[s(1396)] || Object.keys(o)[s(1396)]) && this.queue[s(757)]({ pending: o, pendingCount: Object.keys(o).length, loaded: {}, errors: [], callback: e }), { toLoad: Object.keys(a), pending: Object[s(2109)](o), toLoadLanguages: Object.keys(c), toLoadNamespaces: Object.keys(u) };
  }
  [n(1268)](x, t, r) {
    const e = n, s = x[e(1031)]("|"), a = s[0], o = s[1];
    t && this[e(1335)](e(784), a, o, t), !t && r && this.store[e(662)](a, o, r, void 0, void 0, { skipCopy: !0 }), this.state[x] = t ? -1 : 2, t && r && (this[e(2374)][x] = 0);
    const c = {};
    this[e(2452)][e(2228)]((u) => {
      const d = e;
      Gi(u[d(1268)], [a], o), co(u, x), t && u[d(2121)][d(757)](t), u[d(390)] === 0 && !u[d(930)] && (Object[d(2109)](u.loaded)[d(2228)]((f) => {
        const l = d;
        c[f] || (c[f] = {});
        const g = u.loaded[f];
        g[l(1396)] && g[l(2228)]((h) => {
          c[f][h] === void 0 && (c[f][h] = !0);
        });
      }), u[d(930)] = !0, u[d(2121)][d(1396)] ? u[d(1255)](u.errors) : u[d(1255)]());
    }), this.emit("loaded", c), this[e(2452)] = this.queue[e(254)]((u) => !u.done);
  }
  read(x, t, r, e = 0, s = this[n(2065)], a) {
    const o = n;
    if (!x[o(1396)]) return a(null, {});
    if (this[o(1398)] >= this[o(2532)]) {
      this[o(782)][o(757)]({ lng: x, ns: t, fcName: r, tried: e, wait: s, callback: a });
      return;
    }
    this.readingCalls++;
    const c = (d, f) => {
      const l = o;
      if (this[l(1398)]--, this[l(782)][l(1396)] > 0) {
        const g = this.waitingReads[l(2225)]();
        this[l(257)](g.lng, g.ns, g.fcName, g[l(1548)], g.wait, g[l(1255)]);
      }
      if (d && f && e < this[l(1638)]) {
        setTimeout(() => {
          const g = l;
          this[g(257)][g(459)](this, x, t, r, e + 1, s * 2, a);
        }, s);
        return;
      }
      a(d, f);
    }, u = this[o(352)][r].bind(this[o(352)]);
    if (u[o(1396)] === 2) {
      try {
        const d = u(x, t);
        d && typeof d[o(1947)] == "function" ? d[o(1947)]((f) => c(null, f))[o(340)](c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return u(x, t, c);
  }
  prepareLoading(x, t, r = {}, e) {
    const s = n;
    if (!this[s(352)]) return this[s(1673)].warn(s(599)), e && e();
    g0(x) && (x = this[s(1860)][s(2493)](x)), g0(t) && (t = [t]);
    const a = this.queueLoad(x, t, r, e);
    if (!a[s(915)][s(1396)])
      return a[s(359)].length || e(), null;
    a[s(915)][s(2228)]((o) => {
      this[s(2594)](o);
    });
  }
  [n(2082)](x, t, r) {
    this[n(2556)](x, t, {}, r);
  }
  [n(576)](x, t, r) {
    this[n(2556)](x, t, { reload: !0 }, r);
  }
  loadOne(x, t = "") {
    const r = n, e = x[r(1031)]("|"), s = e[0], a = e[1];
    this[r(257)](s, a, r(257), void 0, void 0, (o, c) => {
      const u = r;
      o && this[u(1673)].warn(t + u(1006) + a + u(293) + s + u(586), o), !o && c && this[u(1673)][u(624)](t + u(1040) + a + u(293) + s, c), this.loaded(x, o, c);
    });
  }
  [n(1667)](x, t, r, e, s, a = {}, o = () => {
  }) {
    var u, d, f, l, g;
    const c = n;
    if ((d = (u = this[c(2465)]) == null ? void 0 : u[c(2342)]) != null && d.hasLoadedNamespace && !((l = (f = this[c(2465)]) == null ? void 0 : f[c(2342)]) != null && l.hasLoadedNamespace(t))) {
      this[c(1673)].warn('did not save key "' + r + c(1884) + t + c(2129), c(1465));
      return;
    }
    if (!(r == null || r === "")) {
      if ((g = this[c(352)]) != null && g[c(2201)]) {
        const h = { ...a, isUpdate: s }, m = this[c(352)].create[c(2045)](this[c(352)]);
        if (m.length < 6) try {
          let v;
          m.length === 5 ? v = m(x, t, r, e, h) : v = m(x, t, r, e), v && typeof v.then == "function" ? v[c(1947)]((S) => o(null, S))[c(340)](o) : o(null, v);
        } catch (v) {
          o(v);
        }
        else m(x, t, r, e, o, h);
      }
      !x || !x[0] || this.store.addResource(x[0], t, r, e);
    }
  }
}
const Kr = () => ({ debug: !1, initAsync: !0, ns: [n(2230)], defaultNS: ["translation"], fallbackLng: [n(1207)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: n(1811), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (i) => {
  const x = n;
  let t = {};
  if (typeof i[1] === x(1507) && (t = i[1]), g0(i[1]) && (t[x(1641)] = i[1]), g0(i[2]) && (t[x(1055)] = i[2]), typeof i[2] == "object" || typeof i[3] === x(1507)) {
    const r = i[3] || i[2];
    Object[x(2109)](r)[x(2228)]((e) => {
      t[e] = r[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (i) => i, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), Jr = (i) => {
  var t, r;
  const x = n;
  return g0(i.ns) && (i.ns = [i.ns]), g0(i.fallbackLng) && (i[x(948)] = [i[x(948)]]), g0(i[x(777)]) && (i[x(777)] = [i[x(777)]]), ((r = (t = i[x(2257)]) == null ? void 0 : t[x(651)]) == null ? void 0 : r.call(t, "cimode")) < 0 && (i.supportedLngs = i[x(2257)].concat([x(1525)])), typeof i[x(1681)] == "boolean" && (i[x(1895)] = i[x(1681)]), i;
}, fx = () => {
}, fo = (i) => {
  const x = n;
  Object.getOwnPropertyNames(Object.getPrototypeOf(i))[x(2228)]((r) => {
    const e = x;
    typeof i[r] === e(1856) && (i[r] = i[r][e(2045)](i));
  });
};
class sx extends qx {
  constructor(x = {}, t) {
    const r = n;
    if (super(), this[r(2546)] = Jr(x), this[r(2465)] = {}, this[r(1673)] = le, this[r(1898)] = { external: [] }, fo(this), t && !this[r(360)] && !x[r(2043)]) {
      if (!this[r(2546)].initAsync) return this[r(752)](x, t), this;
      setTimeout(() => {
        this[r(752)](x, t);
      }, 0);
    }
  }
  [n(752)](x = {}, t) {
    const r = n;
    this[r(286)] = !0, typeof x === r(1856) && (t = x, x = {}), x[r(1176)] == null && x.ns && (g0(x.ns) ? x[r(1176)] = x.ns : x.ns[r(651)](r(2230)) < 0 && (x[r(1176)] = x.ns[0]));
    const e = Kr();
    this.options = { ...e, ...this.options, ...Jr(x) }, this[r(2546)][r(2571)] = { ...e[r(2571)], ...this[r(2546)].interpolation }, x.keySeparator !== void 0 && (this[r(2546)][r(1632)] = x[r(2310)]), x[r(1089)] !== void 0 && (this[r(2546)][r(1792)] = x[r(1089)]);
    const s = (d) => {
      const f = r;
      return d ? typeof d === f(1856) ? new d() : d : null;
    };
    if (!this[r(2546)][r(2043)]) {
      this[r(1898)][r(1673)] ? le[r(752)](s(this.modules[r(1673)]), this[r(2546)]) : le[r(752)](null, this[r(2546)]);
      let d;
      this[r(1898)].formatter ? d = this.modules[r(713)] : d = oo;
      const f = new Ur(this[r(2546)]);
      this[r(845)] = new $r(this[r(2546)][r(2050)], this.options);
      const l = this[r(2465)];
      l[r(1673)] = le, l[r(849)] = this[r(845)], l.languageUtils = f, l[r(711)] = new so(f, { prepend: this[r(2546)][r(452)], simplifyPluralSuffix: this[r(2546)][r(1167)] }), d && (!this[r(2546)][r(2571)].format || this[r(2546)][r(2571)][r(2330)] === e[r(2571)][r(2330)]) && (l[r(713)] = s(d), l[r(713)][r(752)](l, this[r(2546)]), this[r(2546)].interpolation.format = l.formatter.format[r(2045)](l[r(713)])), l[r(2276)] = new no(this[r(2546)]), l[r(2342)] = { hasLoadedNamespace: this[r(2393)][r(2045)](this) }, l[r(1182)] = new uo(s(this[r(1898)][r(352)]), l[r(849)], l, this[r(2546)]), l[r(1182)].on("*", (g, ...h) => {
        this[r(1335)](g, ...h);
      }), this.modules[r(1969)] && (l[r(1969)] = s(this[r(1898)][r(1969)]), l.languageDetector[r(752)] && l[r(1969)][r(752)](l, this[r(2546)].detection, this[r(2546)])), this.modules[r(2457)] && (l[r(2457)] = s(this[r(1898)][r(2457)]), l[r(2457)][r(752)] && l[r(2457)][r(752)](this)), this.translator = new Cx(this.services, this[r(2546)]), this.translator.on("*", (g, ...h) => {
        this[r(1335)](g, ...h);
      }), this.modules[r(716)][r(2228)]((g) => {
        g.init && g.init(this);
      });
    }
    if (this[r(2330)] = this[r(2546)].interpolation[r(2330)], t || (t = fx), this[r(2546)].fallbackLng && !this[r(2465)][r(1969)] && !this[r(2546)].lng) {
      const d = this[r(2465)][r(1860)][r(1446)](this.options[r(948)]);
      d[r(1396)] > 0 && d[0] !== "dev" && (this[r(2546)][r(1647)] = d[0]);
    }
    !this[r(2465)].languageDetector && !this.options[r(1647)] && this.logger[r(2512)](r(1137)), ["getResource", r(1993), r(803), r(2480)][r(2228)]((d) => {
      const f = r;
      this[d] = (...l) => this[f(845)][d](...l);
    }), ["addResource", r(2453), r(662), r(2397)][r(2228)]((d) => {
      this[d] = (...f) => (this[K(845)][d](...f), this);
    });
    const c = Ge(), u = () => {
      const d = r, f = (l, g) => {
        const h = K;
        this[h(286)] = !1, this[h(360)] && !this[h(320)] && this[h(1673)][h(2512)](h(1492)), this.isInitialized = !0, this.options.isClone || this[h(1673)].log(h(1294), this[h(2546)]), this[h(1335)](h(1294), this[h(2546)]), c[h(1315)](g), t(l, g);
      };
      if (this[d(894)] && !this[d(360)]) return f(null, this.t.bind(this));
      this[d(1828)](this.options[d(1647)], f);
    };
    return this[r(2546)][r(2050)] || !this.options[r(1895)] ? u() : setTimeout(u, 0), c;
  }
  [n(2224)](x, t = fx) {
    var a, o;
    const r = n;
    let e = t;
    const s = g0(x) ? x : this[r(1740)];
    if (typeof x == "function" && (e = x), !this[r(2546)][r(2050)] || this[r(2546)][r(1959)]) {
      if ((s == null ? void 0 : s[r(2162)]()) === "cimode" && (!this.options[r(864)] || this.options.preload.length === 0)) return e();
      const c = [], u = (d) => {
        const f = r;
        if (!d || d === f(1525)) return;
        this.services[f(1860)][f(2493)](d).forEach((g) => {
          const h = f;
          g !== h(1525) && c[h(651)](g) < 0 && c.push(g);
        });
      };
      s ? u(s) : this.services[r(1860)][r(1446)](this.options[r(948)])[r(2228)]((f) => u(f)), (o = (a = this[r(2546)].preload) == null ? void 0 : a[r(2228)]) == null || o.call(a, (d) => u(d)), this.services.backendConnector.load(c, this[r(2546)].ns, (d) => {
        const f = r;
        !d && !this[f(1495)] && this[f(1740)] && this[f(2575)](this[f(1740)]), e(d);
      });
    } else e(null);
  }
  [n(1827)](x, t, r) {
    const e = n, s = Ge();
    return typeof x === e(1856) && (r = x, x = void 0), typeof t === e(1856) && (r = t, t = void 0), x || (x = this.languages), t || (t = this[e(2546)].ns), r || (r = fx), this[e(2465)][e(1182)][e(576)](x, t, (a) => {
      s.resolve(), r(a);
    }), s;
  }
  use(x) {
    const t = n;
    if (!x) throw new Error(t(1109));
    if (!x[t(1087)]) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return x[t(1087)] === t(352) && (this[t(1898)].backend = x), (x[t(1087)] === t(1673) || x[t(624)] && x[t(2512)] && x[t(2281)]) && (this[t(1898)][t(1673)] = x), x[t(1087)] === t(1969) && (this[t(1898)][t(1969)] = x), x[t(1087)] === t(2457) && (this[t(1898)][t(2457)] = x), x[t(1087)] === t(2375) && Un[t(1238)](x), x[t(1087)] === "formatter" && (this[t(1898)][t(713)] = x), x.type === t(2466) && this[t(1898)][t(716)][t(757)](x), this;
  }
  [n(2575)](x) {
    const t = n;
    if (!(!x || !this[t(894)]) && !(["cimode", t(1207)][t(651)](x) > -1)) {
      for (let r = 0; r < this[t(894)][t(1396)]; r++) {
        const e = this.languages[r];
        if (!([t(1525), "dev"][t(651)](e) > -1) && this.store.hasLanguageSomeTranslations(e)) {
          this[t(1495)] = e;
          break;
        }
      }
      !this.resolvedLanguage && this.languages[t(651)](x) < 0 && this[t(845)].hasLanguageSomeTranslations(x) && (this[t(1495)] = x, this[t(894)].unshift(x));
    }
  }
  [n(1828)](x, t) {
    const r = n;
    this[r(2592)] = x;
    const e = Ge();
    this[r(1335)](r(2227), x);
    const s = (c) => {
      const u = r;
      this.language = c, this[u(894)] = this[u(2465)][u(1860)][u(2493)](c), this[u(1495)] = void 0, this[u(2575)](c);
    }, a = (c, u) => {
      const d = r;
      u ? this[d(2592)] === x && (s(u), this[d(935)][d(1828)](u), this[d(2592)] = void 0, this.emit(d(1256), u), this.logger[d(624)](d(1256), u)) : this[d(2592)] = void 0, e[d(1315)]((...f) => this.t(...f)), t && t(c, (...f) => this.t(...f));
    }, o = (c) => {
      var l, g;
      const u = r;
      !x && !c && this[u(2465)].languageDetector && (c = []);
      const d = g0(c) ? c : c && c[0], f = this[u(845)].hasLanguageSomeTranslations(d) ? d : this[u(2465)][u(1860)][u(545)](g0(c) ? [c] : c);
      f && (!this[u(1740)] && s(f), this[u(935)][u(1740)] || this[u(935)].changeLanguage(f), (g = (l = this[u(2465)].languageDetector) == null ? void 0 : l[u(1477)]) == null || g.call(l, f)), this[u(2224)](f, (h) => {
        a(h, f);
      });
    };
    return !x && this[r(2465)][r(1969)] && !this[r(2465)].languageDetector[r(2448)] ? o(this[r(2465)][r(1969)][r(1473)]()) : !x && this[r(2465)][r(1969)] && this.services[r(1969)][r(2448)] ? this[r(2465)][r(1969)].detect[r(1396)] === 0 ? this.services.languageDetector[r(1473)]().then(o) : this[r(2465)][r(1969)][r(1473)](o) : o(x), e;
  }
  [n(1906)](x, t, r) {
    const e = n, s = (a, o, ...c) => {
      const u = K;
      let d;
      typeof o != "object" ? d = this.options.overloadTranslationOptionHandler([a, o].concat(c)) : d = { ...o }, d[u(1647)] = d[u(1647)] || s[u(1647)], d[u(1001)] = d[u(1001)] || s[u(1001)], d.ns = d.ns || s.ns, d[u(974)] !== "" && (d[u(974)] = d[u(974)] || r || s.keyPrefix);
      const f = this[u(2546)][u(2310)] || ".";
      let l;
      return d[u(974)] && Array.isArray(a) ? l = a[u(1227)]((g) => "" + d[u(974)] + f + g) : l = d.keyPrefix ? "" + d.keyPrefix + f + a : a, this.t(l, d);
    };
    return g0(x) ? s[e(1647)] = x : s.lngs = x, s.ns = t, s.keyPrefix = r, s;
  }
  t(...x) {
    var r;
    return (r = this[n(935)]) == null ? void 0 : r.translate(...x);
  }
  [n(1661)](...x) {
    var r;
    return (r = this[n(935)]) == null ? void 0 : r.exists(...x);
  }
  [n(1749)](x) {
    const t = n;
    this[t(2546)].defaultNS = x;
  }
  [n(2393)](x, t = {}) {
    const r = n;
    if (!this[r(360)]) return this[r(1673)][r(2512)]("hasLoadedNamespace: i18next was not initialized", this[r(894)]), !1;
    if (!this[r(894)] || !this[r(894)][r(1396)]) return this[r(1673)][r(2512)](r(642), this[r(894)]), !1;
    const e = t.lng || this[r(1495)] || this.languages[0], s = this[r(2546)] ? this.options[r(948)] : !1, a = this[r(894)][this.languages.length - 1];
    if (e[r(2162)]() === "cimode") return !0;
    const o = (c, u) => {
      const d = r, f = this[d(2465)][d(1182)].state[c + "|" + u];
      return f === -1 || f === 0 || f === 2;
    };
    if (t[r(326)]) {
      const c = t.precheck(this, o);
      if (c !== void 0) return c;
    }
    return !!(this[r(1993)](e, x) || !this[r(2465)][r(1182)][r(352)] || this[r(2546)][r(2050)] && !this[r(2546)][r(1959)] || o(e, x) && (!s || o(a, x)));
  }
  [n(1e3)](x, t) {
    const r = n, e = Ge();
    return this[r(2546)].ns ? (g0(x) && (x = [x]), x[r(2228)]((s) => {
      const a = r;
      this[a(2546)].ns[a(651)](s) < 0 && this[a(2546)].ns.push(s);
    }), this[r(2224)]((s) => {
      e[r(1315)](), t && t(s);
    }), e) : (t && t(), Promise[r(1315)]());
  }
  [n(2413)](x, t) {
    const r = n, e = Ge();
    g0(x) && (x = [x]);
    const s = this[r(2546)][r(864)] || [], a = x[r(254)]((o) => s[r(651)](o) < 0 && this.services[r(1860)].isSupportedCode(o));
    return a[r(1396)] ? (this[r(2546)][r(864)] = s[r(1118)](a), this[r(2224)]((o) => {
      e[r(1315)](), t && t(o);
    }), e) : (t && t(), Promise[r(1315)]());
  }
  [n(1908)](x) {
    var s, a;
    const t = n;
    if (x || (x = this[t(1495)] || (((s = this[t(894)]) == null ? void 0 : s.length) > 0 ? this.languages[0] : this.language)), !x) return t(742);
    const r = ["ar", t(295), "sqr", t(2553), t(871), "yhd", t(419), t(822), "abh", t(2564), t(1755), t(1056), "acw", t(1911), "acy", "adf", "ads", t(1508), "aec", t(1469), "ajp", t(1994), t(2149), t(786), t(2390), t(1682), t(1228), t(526), "auz", t(1702), t(1960), t(1036), t(425), "ayp", t(1561), t(1463), "he", "iw", "ps", "pbt", t(311), t(1381), "prp", t(2409), "ug", "ur", t(854), t(1954), t(270), "ji", "yi", t(1485), t(795), t(368), "fa", t(628), t(1260), "pes", "prs", "dv", t(1331), t(2205)], e = ((a = this.services) == null ? void 0 : a.languageUtils) || new Ur(Kr());
    return r[t(651)](e[t(2499)](x)) > -1 || x[t(2162)]()[t(651)](t(2169)) > 1 ? "rtl" : t(1580);
  }
  static [n(274)](x = {}, t) {
    return new sx(x, t);
  }
  [n(811)](x = {}, t = fx) {
    const r = n, e = x.forkResourceStore;
    e && delete x.forkResourceStore;
    const s = { ...this[r(2546)], ...x, isClone: !0 }, a = new sx(s);
    if ((x[r(1676)] !== void 0 || x[r(2449)] !== void 0) && (a[r(1673)] = a[r(1673)][r(2438)](x)), [r(845), "services", r(1740)].forEach((c) => {
      a[c] = this[c];
    }), a[r(2465)] = { ...this[r(2465)] }, a[r(2465)][r(2342)] = { hasLoadedNamespace: a[r(2393)][r(2045)](a) }, e) {
      const c = Object[r(2109)](this[r(845)][r(2197)]).reduce((u, d) => {
        const f = r;
        return u[d] = { ...this[f(845)].data[d] }, u[d] = Object[f(2109)](u[d]).reduce((l, g) => (l[g] = { ...u[d][g] }, l), u[d]), u;
      }, {});
      a.store = new $r(c, s), a[r(2465)][r(849)] = a.store;
    }
    return a[r(935)] = new Cx(a[r(2465)], s), a[r(935)].on("*", (c, ...u) => {
      a[r(1335)](c, ...u);
    }), a.init(s, t), a[r(935)][r(2546)] = s, a.translator[r(1182)][r(2465)].utils = { hasLoadedNamespace: a[r(2393)][r(2045)](a) }, a;
  }
  toJSON() {
    const x = n;
    return { options: this[x(2546)], store: this[x(845)], language: this[x(1740)], languages: this.languages, resolvedLanguage: this[x(1495)] };
  }
}
const Y0 = sx[n(274)]();
Y0[n(274)] = sx[n(274)], Y0.createInstance, Y0[n(1908)], Y0[n(752)], Y0[n(2224)], Y0[n(1827)], Y0.use, Y0[n(1828)], Y0.getFixedT, Y0.t, Y0[n(1661)], Y0[n(1749)], Y0[n(2393)], Y0[n(1e3)], Y0[n(2413)];
function lo() {
  const i = n;
  if (typeof navigator !== i(654) && navigator[i(1740)]) return navigator[i(1740)] === i(1216) ? i(1216) : "en-US";
  try {
    const x = typeof require !== i(654) ? require : void 0;
    if (x)
      return x(i(1987)).host[i(2068)][i(2534)]("zh") ? "zh-CN" : i(329);
  } catch {
  }
  return i(329);
}
let Vn = lo();
const ho = { "zh-CN": {}, "en-US": {} };
function Kt(i) {
  const x = n, t = i === x(1216) ? Zi : Bi, r = ho[i];
  return { ...t, ...r };
}
function po() {
  return Vn;
}
function Jt(i, x = {}) {
  const t = n;
  let e = Kt(Vn)[i];
  return e ? typeof e === t(1401) ? e[t(1783)](/\{\{(\w+)\}\}/g, (s, a) => x[a] !== void 0 ? String(x[a]) : s) : e : i;
}
const mo = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, go = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, bo = (i) => go[i], vo = (i) => i[n(1783)](mo, bo);
let Gr = { bindI18n: n(1256), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", n(2096), "i", "p"], useSuspense: !0, unescape: vo };
const yo = (i = {}) => {
  Gr = { ...Gr, ...i };
}, wo = { type: n(2466), init(i) {
  const x = n;
  yo(i.options[x(1502)]);
} };
!Y0.isInitialized && Y0.use(wo)[n(752)]({ resources: { "zh-CN": { translation: Kt(n(1216)) }, "en-US": { translation: Kt(n(329)) } }, lng: po(), fallbackLng: n(329), interpolation: { escapeValue: !1 } });
const Re = [];
_e[n(1172)] = _e[n(1172)] || {}, _e.widgetable[n(2062)] = function(i, x) {
  typeof x == "function" ? Re.push([i, { formatter: x, setter: null }]) : Re[n(757)]([i, x]);
};
function So(i, x, t) {
  var c, u, d;
  const r = n, e = Re[r(950)](([f]) => f == r(1218)), s = Re[r(950)](([f]) => rr(f, i[r(1087)])) || e;
  let a = !1;
  if (s) {
    const f = s[1][r(2039)];
    f && (a = !!f(i, x, t));
  }
  !a && (i[r(1027)][x][r(2425)] = t, (u = (c = i[r(1027)][x])[r(1255)]) == null || u.call(c, t)), (d = (T0[r(2431)] || T0[r(733)][r(1479)]).activeWorkflow) == null || d[r(840)].checkState();
}
function Fx(i) {
  const x = n, t = {}, r = Re[x(950)](([e]) => e == x(1218));
  return i[x(481)].forEach((e) => {
    const s = x;
    if (!e[s(1027)] || e.widgets.length == 0) return;
    const a = Re[s(950)](([o]) => rr(o, e[s(1087)])) || r;
    if (a) try {
      const o = a[1][s(713)](e);
      o && (t[e.id] = o[s(1027)][s(1227)]((c) => c[s(2425)]));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function Gt(i, x) {
  var s, a, o;
  const t = n;
  if (!i) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const r = i[t(481)][t(1227)]((c) => {
    const u = t;
    if (c[u(386)] != 0) return;
    const d = px(c);
    if (!d || d[u(2534)](".") || !c.widgets || c[u(1027)].length == 0) return;
    let f = Re[u(950)](([m]) => rr(m, c[u(1087)]));
    if (f) try {
      const m = f[1][u(713)](c);
      if (m) return m.id = c.id, m[u(2603)] = m.widgets.reduce((v, S) => v + (S[u(2148)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: d, uiWeightSum: 12, widgets: [{ outputType: u(2281), value: Jt(u(912), f[0]) + (m[u(1717)] || m || ""), name: "", options: {} }] };
    }
    if (!d[u(2534)]("#")) return null;
    let l = c[u(1027)];
    const g = Re[u(950)](([m]) => m == u(1218));
    if (g) {
      const m = g[1][u(713)](c);
      if (m) return Object[u(1088)](m, { uiWeightSum: m[u(1027)].reduce((v, S) => v + (S.uiWeight || 12), 0) });
    }
    const h = { id: c.id, title: d, widgets: l[u(1227)]((m) => ({ name: m[u(980)] || m[u(2581)], outputType: m.type || u(1401), value: m.value, options: m.options })) };
    return Object[u(1088)](h, { uiWeightSum: h[u(1027)][u(1900)]((m, v) => m + (v.uiWeight || 12), 0) });
  })[t(254)](Boolean).sort((c, u) => {
    const d = t;
    let f = px(c), l = px(u);
    return f = f[d(2534)]("#") ? f[d(1012)](1)[d(893)]() : f[d(893)](), l = l.startsWith("#") ? l[d(1012)](1)[d(893)]() : l.trim(), f[d(2418)](l);
  }), e = ((a = (s = i.nodes[t(950)]((c) => c[t(1087)] == "Note" && c[t(1406)][t(1722)](/SD-?PPP/i))) == null ? void 0 : s[t(1027)][0]) == null ? void 0 : a.value) || "";
  return { widgetablePath: ((o = x[t(420)][t(751)]) == null ? void 0 : o[t(1385)]) || x[t(1225)], widgetableID: x.activeState.id, nodes: r.reduce((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: r[t(1227)]((c) => c.id), options: {} };
}
function rr(i, x) {
  const t = n, r = i[t(1783)](/[.+^${}()|[\]\\]/g, t(1935)).replace(/\*/g, ".*")[t(1783)](/\?/g, ".");
  return new RegExp("^" + r + "$").test(x);
}
function px(i, x = "") {
  var e;
  const t = n;
  let r = x || i[t(1406)] || "";
  return i[t(1568)] && (r.startsWith("#") || r.startsWith(".")) ? i[t(1568)](t(824), r) : r = ((e = i[t(892)]) == null ? void 0 : e[t(824)]) || r, r;
}
_e.getNodeTitle = px;
var lx = { exports: {} }, Vx, Qr;
function ko() {
  if (Qr) return Vx;
  Qr = 1;
  var i = 1e3, x = i * 60, t = x * 60, r = t * 24, e = r * 7, s = r * 365.25;
  Vx = function(d, f) {
    const l = K;
    f = f || {};
    var g = typeof d;
    if (g === l(1401) && d[l(1396)] > 0) return a(d);
    if (g === l(1985) && isFinite(d)) return f[l(1774)] ? c(d) : o(d);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON[l(328)](d));
  };
  function a(d) {
    const f = K;
    if (d = String(d), !(d[f(1396)] > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[f(889)](d);
      if (l) {
        var g = parseFloat(l[1]), h = (l[2] || "ms").toLowerCase();
        switch (h) {
          case f(2361):
          case "year":
          case f(2570):
          case "yr":
          case "y":
            return g * s;
          case "weeks":
          case f(1746):
          case "w":
            return g * e;
          case f(395):
          case "day":
          case "d":
            return g * r;
          case f(1311):
          case "hour":
          case f(1747):
          case "hr":
          case "h":
            return g * t;
          case "minutes":
          case f(2199):
          case f(241):
          case f(1865):
          case "m":
            return g * x;
          case f(1501):
          case f(2131):
          case f(2178):
          case f(1852):
          case "s":
            return g * i;
          case f(2098):
          case "millisecond":
          case f(880):
          case f(400):
          case "ms":
            return g;
          default:
            return;
        }
      }
    }
  }
  function o(d) {
    const f = K;
    var l = Math[f(1010)](d);
    return l >= r ? Math[f(2520)](d / r) + "d" : l >= t ? Math[f(2520)](d / t) + "h" : l >= x ? Math.round(d / x) + "m" : l >= i ? Math[f(2520)](d / i) + "s" : d + "ms";
  }
  function c(d) {
    const f = K;
    var l = Math[f(1010)](d);
    return l >= r ? u(d, l, r, f(2222)) : l >= t ? u(d, l, t, f(1439)) : l >= x ? u(d, l, x, "minute") : l >= i ? u(d, l, i, "second") : d + f(2234);
  }
  function u(d, f, l, g) {
    var h = f >= l * 1.5;
    return Math.round(d / l) + " " + g + (h ? "s" : "");
  }
  return Vx;
}
var Wx, Xr;
function Eo() {
  if (Xr) return Wx;
  Xr = 1;
  function i(x) {
    const t = K;
    e[t(1676)] = e, e[t(906)] = e, e[t(1047)] = d, e[t(2426)] = c, e.enable = a, e[t(2106)] = u, e[t(1046)] = ko(), e[t(569)] = f, Object.keys(x).forEach((l) => {
      e[l] = x[l];
    }), e[t(2049)] = [], e[t(1171)] = [], e[t(2144)] = {};
    function r(l) {
      const g = t;
      let h = 0;
      for (let m = 0; m < l[g(1396)]; m++)
        h = (h << 5) - h + l[g(631)](m), h |= 0;
      return e.colors[Math.abs(h) % e[g(2056)][g(1396)]];
    }
    e[t(1857)] = r;
    function e(l) {
      const g = t;
      let h, m = null, v, S;
      function E(...N) {
        const O = K;
        if (!E[O(2106)]) return;
        const R = E, P = Number(/* @__PURE__ */ new Date()), C = P - (h || P);
        R.diff = C, R[O(1560)] = h, R[O(2013)] = P, h = P, N[0] = e[O(1047)](N[0]), typeof N[0] !== O(1401) && N.unshift("%O");
        let A = 0;
        N[0] = N[0][O(1783)](/%([a-zA-Z%])/g, (M, F) => {
          const q = O;
          if (M === "%%") return "%";
          A++;
          const U = e[q(2144)][F];
          if (typeof U == "function") {
            const $ = N[A];
            M = U[q(459)](R, $), N[q(1209)](A, 1), A--;
          }
          return M;
        }), e[O(2079)][O(459)](R, N), (R[O(624)] || e[O(624)])[O(2598)](R, N);
      }
      return E[g(1308)] = l, E.useColors = e[g(1831)](), E[g(2099)] = e.selectColor(l), E[g(748)] = s, E[g(569)] = e[g(569)], Object[g(414)](E, "enabled", { enumerable: !0, configurable: !1, get: () => {
        const N = g;
        return m !== null ? m : (v !== e.namespaces && (v = e[N(2578)], S = e[N(2106)](l)), S);
      }, set: (N) => {
        m = N;
      } }), typeof e.init === g(1856) && e[g(752)](E), E;
    }
    function s(l, g) {
      const h = t, m = e(this[h(1308)] + (typeof g === h(654) ? ":" : g) + l);
      return m.log = this[h(624)], m;
    }
    function a(l) {
      const g = t;
      e.save(l), e[g(2578)] = l, e[g(2049)] = [], e[g(1171)] = [];
      const h = (typeof l === g(1401) ? l : "")[g(893)]()[g(1783)](/\s+/g, ",")[g(1031)](",")[g(254)](Boolean);
      for (const m of h)
        m[0] === "-" ? e[g(1171)][g(757)](m[g(1012)](1)) : e[g(2049)][g(757)](m);
    }
    function o(l, g) {
      const h = t;
      let m = 0, v = 0, S = -1, E = 0;
      for (; m < l[h(1396)]; )
        if (v < g[h(1396)] && (g[v] === l[m] || g[v] === "*")) g[v] === "*" ? (S = v, E = m, v++) : (m++, v++);
        else if (S !== -1) v = S + 1, E++, m = E;
        else return !1;
      for (; v < g[h(1396)] && g[v] === "*"; )
        v++;
      return v === g[h(1396)];
    }
    function c() {
      const l = t, g = [...e.names, ...e.skips[l(1227)]((h) => "-" + h)][l(261)](",");
      return e[l(1305)](""), g;
    }
    function u(l) {
      const g = t;
      for (const h of e[g(1171)])
        if (o(l, h)) return !1;
      for (const h of e[g(2049)])
        if (o(l, h)) return !0;
      return !1;
    }
    function d(l) {
      const g = t;
      return l instanceof Error ? l.stack || l[g(1717)] : l;
    }
    function f() {
      console[t(2512)]("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return e[t(1305)](e[t(2082)]()), e;
  }
  return Wx = i, Wx;
}
var Yr;
function Po() {
  const i = n;
  return Yr || (Yr = 1, function(x, t) {
    const r = i;
    t[r(2079)] = s, t.save = a, t[r(2082)] = o, t[r(1831)] = e, t[r(415)] = c(), t[r(569)] = /* @__PURE__ */ (() => {
      let d = !1;
      return () => {
        const f = K;
        !d && (d = !0, console.warn(f(474)));
      };
    })(), t[r(2056)] = ["#0000CC", "#0000FF", r(1565), r(1053), "#0066CC", r(327), r(316), r(2314), "#00CC00", "#00CC33", r(2422), "#00CC99", r(1203), r(1651), r(473), r(758), "#3333CC", r(1623), r(2174), "#3366FF", "#3399CC", "#3399FF", r(1376), r(2018), r(2552), "#33CC99", r(1140), r(1574), r(1220), r(1955), r(916), "#6633FF", r(2267), r(1563), "#9900CC", r(2308), r(672), r(1253), r(838), "#99CC33", r(1879), "#CC0033", "#CC0066", r(1062), "#CC00CC", "#CC00FF", r(1187), r(353), "#CC3366", r(1529), r(725), r(407), r(1106), r(718), r(1494), "#CC9933", r(1193), r(363), r(1205), r(2597), "#FF0066", r(314), r(2389), r(1023), r(1368), r(1219), r(2161), r(2355), "#FF33CC", r(1302), r(1423), r(1923), r(1646), r(525), "#FFCC00", "#FFCC33"];
    function e() {
      const d = r;
      if (typeof window !== d(654) && window.process && (window[d(1018)][d(1087)] === "renderer" || window[d(1018)][d(741)])) return !0;
      if (typeof navigator !== d(654) && navigator.userAgent && navigator[d(1435)][d(2162)]().match(/(edge|trident)\/(\d+)/)) return !1;
      let f;
      return typeof document !== d(654) && document[d(659)] && document.documentElement.style && document[d(659)].style[d(1270)] || typeof window < "u" && window[d(2226)] && (window[d(2226)].firebug || window.console.exception && window[d(2226)].table) || typeof navigator < "u" && navigator[d(1435)] && (f = navigator[d(1435)].toLowerCase()[d(1722)](/firefox\/(\d+)/)) && parseInt(f[1], 10) >= 31 || typeof navigator !== d(654) && navigator[d(1435)] && navigator[d(1435)][d(2162)]()[d(1722)](/applewebkit\/(\d+)/);
    }
    function s(d) {
      const f = r;
      if (d[0] = (this[f(1831)] ? "%c" : "") + this.namespace + (this[f(1831)] ? f(1213) : " ") + d[0] + (this.useColors ? f(240) : " ") + "+" + x.exports.humanize(this[f(2525)]), !this[f(1831)]) return;
      const l = "color: " + this[f(2099)];
      d.splice(1, 0, l, f(789));
      let g = 0, h = 0;
      d[0][f(1783)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (g++, m === "%c" && (h = g));
      }), d.splice(h, 0, l);
    }
    t[r(624)] = console[r(1676)] || console[r(624)] || (() => {
    });
    function a(d) {
      const f = r;
      try {
        d ? t.storage[f(2122)](f(1676), d) : t[f(415)][f(267)](f(1676));
      } catch {
      }
    }
    function o() {
      const d = r;
      let f;
      try {
        f = t[d(415)][d(1914)](d(1676)) || t[d(415)][d(1914)](d(2053));
      } catch {
      }
      return !f && typeof process < "u" && d(1150) in process && (f = process[d(1150)].DEBUG), f;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x.exports = Eo()(t);
    const { formatters: u } = x[r(370)];
    u.j = function(d) {
      const f = r;
      try {
        return JSON[f(328)](d);
      } catch (l) {
        return "[UnexpectedJSONParseError]: " + l[f(1717)];
      }
    };
  }(lx, lx.exports)), lx[i(370)];
}
var Io = Po();
const Wn = zn(Io);
Wn[n(1305)]("*");
function Ro(i, x) {
  const t = n, r = Wn(i), e = (s, a) => async function(...o) {
    try {
      await x({ level: s, messages: o });
    } catch {
    }
  };
  return r[t(624)] = e("log"), r;
}
const ax = Ro(n(2105), async ({ level: i, messages: x }) => {
  const t = n, { mcpMesh: r } = await Promise[t(1315)]()[t(1947)](() => jc);
  await r.getNode(t(1987))[t(2282)][t(624)]({ level: i, messages: x });
}), Qt = ax[n(748)](n(460)), _r = /* @__PURE__ */ new Set();
P0.implementAction(n(477), async (i) => {
  const x = n;
  return i[x(1950)][x(2228)](({ nodeID: t, widgetIndex: r, value: e }) => {
    const s = x, a = T0[s(1620)][s(481)][s(950)]((o) => o.id == t);
    !a || e == a.widgets[r][s(2425)] || So(a, r, e);
  }), { success: !0 };
}), P0.implementAction("openWorkflow", async (i) => {
  const x = n, { workflow_path: t } = i, r = !_r[x(879)](t), e = i[x(2348)] || r;
  _r[x(2062)](t);
  const s = T0[x(733)][x(1479)] || T0[x(2431)], a = s[x(379)][x(950)]((c) => c[x(1370)] === t || c[x(1225)] === t || c[x(1225)] === x(1951) + t);
  if (!e) {
    const c = await Co(s, a);
    if (Qt(x(2373) + c), c) await Zx(s, a);
    else try {
      await o(s, a);
    } catch {
      await Zx(s, a);
    }
    return { success: !0 };
  }
  return await Zx(s, a), { success: !0 };
  async function o(c, u) {
    const d = x;
    Qt(d(259) + u.path, u[d(255)]), T0[d(2431)] == c ? await u[d(2082)]() : (await c[d(1612)](u), await T0[d(931)](JSON[d(2517)](JSON.stringify(u[d(255)])), !0, !0, u, {}));
  }
}), P0[n(2576)](n(1246), async function(i) {
  const x = n;
  let { workflow_content: t, workflow_path: r } = i;
  return t[x(751)] = { ...t[x(751)] || {}, sdppp_workflow_alias: r }, await T0[x(931)](t), { success: !0 };
}), P0[n(2576)](n(2475), async (i) => {
  var s;
  const x = n, t = T0[x(2431)] || T0[x(733)][x(1479)];
  (s = t[x(756)]) == null || s.call(t), await new Promise((a) => requestAnimationFrame(a));
  let e = t[x(379)][x(1227)]((a) => a[x(1225)][x(1783)](x(1951), ""));
  try {
    const a = new Headers(), o = localStorage.getItem(x(627));
    o && a[x(933)]("comfy-user", o);
    const c = await fetch("./api/userdata/workflows%2F.index.json", { headers: a });
    let u = [];
    c.ok && (u = (await c[x(2333)]())[x(1732)][x(1227)]((f) => f[x(1783)](x(1951), ""))), e[x(1662)]((d, f) => {
      const l = x, g = u[l(1334)](d), h = u[l(1334)](f);
      return g && !h ? -1 : !g && h ? 1 : d.localeCompare(f);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), P0[n(2576)](n(406), async (i) => {
  var a;
  const x = n, { workflow_path: t, from_sid: r } = i, e = T0[x(2431)] || T0[x(733)][x(1479)], s = e[x(379)][x(950)]((o) => o[x(1370)] === t || o.path === t || o[x(1225)] === x(1951) + t);
  if (!s) throw new Error("Workflow not found");
  return ((a = e[x(387)]) == null ? void 0 : a.id) != s.id && await T0[x(1612)](t, r, !1), s[x(840)][x(607)](), await e[x(406)](s), { success: !0 };
});
async function Co(i, x) {
  var e, s, a;
  const t = n;
  if (!x || !(((e = i[t(387)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((s = x[t(840)]) != null && s[t(607)]) try {
    x[t(840)].checkState();
  } catch (o) {
    console[t(2512)]("Failed to check workflow changeTracker state:", o);
  }
  try {
    const o = (a = T0[t(1620)]) == null ? void 0 : a[t(1480)](), c = x[t(420)];
    if (!o || !c) return !1;
    const u = JSON[t(328)](o), d = JSON[t(328)](c);
    return u !== d;
  } catch (o) {
    return console[t(2512)](t(2202), o), !1;
  }
}
async function Zx(i, x) {
  var e;
  const t = n;
  Qt(t(693) + x[t(1225)]);
  async function r(s, a) {
    const o = t;
    T0[o(2431)] == s ? await a.load() : (await s.openWorkflow(a), await T0.loadGraphData(JSON[o(2517)](JSON[o(328)](a[o(420)])), !0, !0, a, {}));
  }
  if ((x[t(2124)] || (e = i[t(2124)]) != null && e.call(i, x)) && i[t(673)].length === 1) {
    const s = i.createTemporary();
    i[t(1612)](s);
  } else await r(i, i[t(673)][0] == x ? i[t(673)][1] : i.openWorkflows[0]);
  await i[t(1744)](x, !1), await new Promise((s) => requestAnimationFrame(s)), await r(i, x);
}
const Xe = ax[n(748)]("workflow-run"), Ne = /* @__PURE__ */ new Map();
function Fo(i, x) {
  const t = n, r = Ne[t(1364)](i);
  Xe(t(1072), i, x, r, Ne), r && r.resolveImage(x);
}
P0[n(2576)](n(644), async function* (i) {
  const x = n;
  let t = !1, r = [];
  function e() {
    const l = K;
    if (t) return;
    const g = Oe[l(1017)];
    Oe[l(1017)] = async (...h) => {
      const m = l;
      try {
        const v = await g.call(Oe, ...h);
        return r[m(757)]({ error: null, result: v, prompt_id: v[m(1405)] }), v;
      } catch (v) {
        throw r[m(757)]({ error: v, result: null, prompt_id: "" }), v;
      }
    }, t = !0;
  }
  t || e();
  const s = i[x(1232)];
  let a = !1, o = {}, c = [];
  P0[x(845)].setState({ lastError: "", widgetableErrors: {} });
  try {
    r = [], await T0[x(1017)](1, s), r[x(2228)]((l) => {
      var h, m;
      const g = x;
      if (l[g(2281)]) a = !0, o = l[g(2281)][g(1038)] ? f(l[g(2281)][g(1038)].node_errors) : {}, Object[g(1088)](o, { "-1": ((m = (h = l[g(2281)].response) == null ? void 0 : h[g(2281)]) == null ? void 0 : m.message) || l[g(2281)][g(1717)] });
      else {
        const v = l[g(540)][g(1405)];
        c[g(757)](v);
        let S, E;
        const N = new Promise((R, P) => {
          S = R, E = P;
        }), O = { promise: N, resolveImage: S, rejectImage: E };
        Ne[g(933)](v, O);
      }
    });
  } catch (l) {
    Xe(x(714), l[x(2366)]), a = !0, o = { "-1": l[x(1717)] || l[x(1090)]() };
  }
  Xe(x(1854), a, o, x(1110), c), a && P0[x(845)][x(847)]({ widgetableErrors: o });
  let u = [];
  const d = /* @__PURE__ */ new Map();
  for (const l of c) {
    const g = Ne[x(1364)](l);
    g && d.set(l, g[x(601)]);
  }
  for (Xe(x(2241)); d[x(1232)] > 0; ) {
    const l = Array[x(2371)](d[x(394)]()), g = l[x(1227)](([v, S]) => S.then((E) => ({ prompt_id: v, images: E }))), { prompt_id: h, images: m } = await Promise.race(g);
    Xe(x(907), h), u.push(...m), d[x(381)](h), Ne[x(381)](h), yield { success: !0, prompt_ids: [h], images: m };
  }
  function f(l) {
    const g = x, h = {};
    return Object[g(2109)](l)[g(2228)]((m) => {
      const v = g, S = m[v(1031)](":")[0], E = T0[v(1620)][v(481)].find((N) => N.id == S);
      h[S] = "[" + ((E == null ? void 0 : E[v(1406)]) || S) + "]" + l[m].errors[v(1227)](JSON[v(328)])[v(261)](`
`);
    }), h;
  }
}), P0.implementAction(n(807), async () => {
  const i = n;
  await T0[i(574)][i(653)](i(2452)), await T0.api[i(1445)]();
  const x = Array[i(2371)](Ne[i(1950)]());
  Ne[i(238)]();
  for (const t of x)
    try {
      t[i(639)](new Error(i(897)));
    } catch {
    }
  return { success: !0 };
});
const No = ax[n(748)]("actions:util");
P0[n(2576)](n(1269), async (i) => {
  const x = n;
  return i != null && i[x(2368)] && No(x(392), i[x(2368)]), { comfyVersion: x(411), hostVersion: (i == null ? void 0 : i[x(2368)]) ?? "" };
}), P0[n(2576)]("setNodeTitle", async (i) => {
  const x = n, { node_id: t, title: r } = i, e = T0[x(1620)].nodes[x(950)]((s) => s.id == t);
  if (!e) throw new Error(x(717));
  return e.title = r, e[x(1568)]("sdppp_widgetable_title", r), { success: !0 };
}), P0.implementAction("reboot", async () => {
  const i = n, x = await fetch(i(612));
  return x.status == 404 ? { error: Jt(i(1117)), success: !1 } : x[i(454)] == 200 ? { success: !0 } : { error: Jt(i(790)) + x.statusText, success: !1 };
}), P0.implementAction(n(2175), async (i) => {
  const x = n, { api_key: t } = i;
  return localStorage[x(2122)](x(2286), t), location[x(576)](), { success: !0 };
}), P0[n(2576)]("logout", async () => {
  const i = n;
  return document[i(834)](i(450))[i(1826)][i(317)](), { success: !0 };
});
function qo(i) {
  const x = n, t = atob(i), r = t[x(1396)], e = new Uint8Array(r);
  for (let s = 0; s < r; s++)
    e[s] = t.charCodeAt(s);
  return e;
}
P0[n(2576)](n(2392), async (i, x, t) => {
  const r = n, { fileName: e, overwrite: s = !0, mimeType: a = r(1418), dataBase64: o } = i;
  if (t != null && t[r(814)]) throw new DOMException("Upload aborted", r(1762));
  const c = qo(o), u = new Blob([c], { type: a }), d = new FormData();
  d[r(466)](r(804), u), d[r(466)](r(1386), e), d.append(r(1524), r(s ? 508 : 273));
  const f = await fetch("./sdppp_upload2", { method: r(683), body: d, signal: t });
  if (!f.ok) throw new Error(r(988) + f[r(2284)]);
  const l = await f[r(2333)]();
  return { name: l.subfolder + "/" + l[r(2581)] };
});
const Zn = n(1801), To = [Zn, n(401), n(1054), "2024-10-07"], Tx = n(2115), Bn = J0([w(), r0()[n(2088)]()]), Kn = w(), Oo = k({ progressToken: Z(Bn) })[n(1716)](), se = k({ _meta: Z(Oo) })[n(1716)](), xe = k({ method: w(), params: Z(se) }), ix = k({ _meta: Z(k({})[n(1716)]()) })[n(1716)](), me = k({ method: w(), params: Z(ix) }), ne = k({ _meta: Z(k({})[n(1716)]()) })[n(1716)](), Ox = J0([w(), r0()[n(2088)]()]), Jn = k({ jsonrpc: t0(Tx), id: Ox })[n(339)](xe)[n(2579)](), Ao = (i) => Jn[n(2349)](i)[n(2217)], Gn = k({ jsonrpc: t0(Tx) }).merge(me)[n(2579)](), Do = (i) => Gn[n(2349)](i)[n(2217)], Qn = k({ jsonrpc: t0(Tx), id: Ox, result: ne }).strict(), es = (i) => Qn.safeParse(i)[n(2217)];
var ve;
(function(i) {
  const x = n;
  i[i.ConnectionClosed = -32e3] = "ConnectionClosed", i[i[x(2052)] = -32001] = "RequestTimeout", i[i.ParseError = -32700] = x(2313), i[i[x(875)] = -32600] = "InvalidRequest", i[i[x(2093)] = -32601] = "MethodNotFound", i[i[x(1806)] = -32602] = x(1806), i[i[x(1361)] = -32603] = x(1361);
})(ve || (ve = {}));
const Xn = k({ jsonrpc: t0(Tx), id: Ox, error: k({ code: r0()[n(2088)](), message: w(), data: Z(nx()) }) }).strict(), jo = (i) => Xn[n(2349)](i).success;
J0([Jn, Gn, Qn, Xn]);
const Xt = ne[n(2579)](), Yt = me[n(748)]({ method: t0(n(1967)), params: ix[n(748)]({ requestId: Ox, reason: w()[n(2262)]() }) }), ox = k({ name: w(), title: Z(w()) })[n(1716)](), Yn = ox[n(748)]({ version: w() }), Mo = k({ experimental: Z(k({})[n(1716)]()), sampling: Z(k({})[n(1716)]()), elicitation: Z(k({})[n(1716)]()), roots: Z(k({ listChanged: Z(_()) })[n(1716)]()) })[n(1716)](), _n = xe[n(748)]({ method: t0(n(1025)), params: se[n(748)]({ protocolVersion: w(), capabilities: Mo, clientInfo: Yn }) }), Lo = k({ experimental: Z(k({})[n(1716)]()), logging: Z(k({})[n(1716)]()), completions: Z(k({})[n(1716)]()), prompts: Z(k({ listChanged: Z(_()) })[n(1716)]()), resources: Z(k({ subscribe: Z(_()), listChanged: Z(_()) })[n(1716)]()), tools: Z(k({ listChanged: Z(_()) })[n(1716)]()) })[n(1716)](), $o = ne.extend({ protocolVersion: w(), capabilities: Lo, serverInfo: Yn, instructions: Z(w()) }), ea = me[n(748)]({ method: t0(n(1669)) }), _t = xe[n(748)]({ method: t0(n(959)) }), zo = k({ progress: r0(), total: Z(r0()), message: Z(w()) })[n(1716)](), er = me[n(748)]({ method: t0(n(775)), params: ix.merge(zo)[n(748)]({ progressToken: Bn }) }), Ax = xe[n(748)]({ params: se[n(748)]({ cursor: Z(Kn) })[n(2262)]() }), Dx = ne.extend({ nextCursor: Z(Kn) }), xa = k({ uri: w(), mimeType: Z(w()), _meta: Z(k({})[n(1716)]()) })[n(1716)](), ta = xa[n(748)]({ text: w() }), ra = xa[n(748)]({ blob: w()[n(1734)]() }), sa = ox.extend({ uri: w(), description: Z(w()), mimeType: Z(w()), _meta: Z(k({})[n(1716)]()) }), Ho = ox[n(748)]({ uriTemplate: w(), description: Z(w()), mimeType: Z(w()), _meta: Z(k({})[n(1716)]()) }), Uo = Ax[n(748)]({ method: t0(n(2155)) }), Vo = Dx[n(748)]({ resources: R0(sa) }), Wo = Ax[n(748)]({ method: t0(n(1292)) }), Zo = Dx[n(748)]({ resourceTemplates: R0(Ho) }), Bo = xe[n(748)]({ method: t0(n(1897)), params: se[n(748)]({ uri: w() }) }), Ko = ne[n(748)]({ contents: R0(J0([ta, ra])) }), Jo = me.extend({ method: t0("notifications/resources/list_changed") }), Go = xe[n(748)]({ method: t0("resources/subscribe"), params: se[n(748)]({ uri: w() }) }), Qo = xe.extend({ method: t0(n(1523)), params: se[n(748)]({ uri: w() }) }), Xo = me.extend({ method: t0(n(799)), params: ix[n(748)]({ uri: w() }) }), Yo = k({ name: w(), description: Z(w()), required: Z(_()) })[n(1716)](), _o = ox.extend({ description: Z(w()), arguments: Z(R0(Yo)), _meta: Z(k({})[n(1716)]()) }), e2 = Ax.extend({ method: t0(n(844)) }), x2 = Dx[n(748)]({ prompts: R0(_o) }), t2 = xe.extend({ method: t0(n(829)), params: se[n(748)]({ name: w(), arguments: Z(H0(w())) }) }), sr = k({ type: t0(n(514)), text: w(), _meta: Z(k({})[n(1716)]()) })[n(1716)](), nr = k({ type: t0("image"), data: w()[n(1734)](), mimeType: w(), _meta: Z(k({})[n(1716)]()) }).passthrough(), ar = k({ type: t0(n(1842)), data: w()[n(1734)](), mimeType: w(), _meta: Z(k({})[n(1716)]()) }).passthrough(), r2 = k({ type: t0("resource"), resource: J0([ta, ra]), _meta: Z(k({})[n(1716)]()) }).passthrough(), s2 = sa[n(748)]({ type: t0(n(1998)) }), na = J0([sr, nr, ar, s2, r2]), n2 = k({ role: F0([n(2024), n(1705)]), content: na }).passthrough(), a2 = ne[n(748)]({ description: Z(w()), messages: R0(n2) }), i2 = me.extend({ method: t0(n(578)) }), o2 = k({ title: Z(w()), readOnlyHint: Z(_()), destructiveHint: Z(_()), idempotentHint: Z(_()), openWorldHint: Z(_()) })[n(1716)](), c2 = ox[n(748)]({ description: Z(w()), inputSchema: k({ type: t0(n(1507)), properties: Z(k({})[n(1716)]()), required: Z(R0(w())) }).passthrough(), outputSchema: Z(k({ type: t0(n(1507)), properties: Z(k({})[n(1716)]()), required: Z(R0(w())) })[n(1716)]()), annotations: Z(o2), _meta: Z(k({})[n(1716)]()) }), u2 = Ax.extend({ method: t0("tools/list") }), d2 = Dx[n(748)]({ tools: R0(c2) }), aa = ne[n(748)]({ content: R0(na)[n(906)]([]), structuredContent: k({})[n(1716)]()[n(2262)](), isError: Z(_()) });
aa.or(ne.extend({ toolResult: nx() }));
const f2 = xe[n(748)]({ method: t0(n(632)), params: se.extend({ name: w(), arguments: Z(H0(nx())) }) }), l2 = me[n(748)]({ method: t0("notifications/tools/list_changed") }), ia = F0([n(1676), "info", n(813), n(2384), n(2281), "critical", "alert", "emergency"]), h2 = xe[n(748)]({ method: t0("logging/setLevel"), params: se[n(748)]({ level: ia }) }), p2 = me.extend({ method: t0(n(1706)), params: ix[n(748)]({ level: ia, logger: Z(w()), data: nx() }) }), m2 = k({ name: w()[n(2262)]() }).passthrough(), g2 = k({ hints: Z(R0(m2)), costPriority: Z(r0()[n(1865)](0)[n(550)](1)), speedPriority: Z(r0()[n(1865)](0)[n(550)](1)), intelligencePriority: Z(r0()[n(1865)](0)[n(550)](1)) }).passthrough(), b2 = k({ role: F0([n(2024), n(1705)]), content: J0([sr, nr, ar]) })[n(1716)](), v2 = xe[n(748)]({ method: t0("sampling/createMessage"), params: se[n(748)]({ messages: R0(b2), systemPrompt: Z(w()), includeContext: Z(F0([n(2316), n(1952), n(1937)])), temperature: Z(r0()), maxTokens: r0()[n(2088)](), stopSequences: Z(R0(w())), metadata: Z(k({})[n(1716)]()), modelPreferences: Z(g2) }) }), oa = ne[n(748)]({ model: w(), stopReason: Z(F0(["endTurn", n(2406), "maxTokens"]).or(w())), role: F0([n(2024), n(1705)]), content: Ln(n(1087), [sr, nr, ar]) }), y2 = k({ type: t0(n(1588)), title: Z(w()), description: Z(w()), default: Z(_()) })[n(1716)](), w2 = k({ type: t0("string"), title: Z(w()), description: Z(w()), minLength: Z(r0()), maxLength: Z(r0()), format: Z(F0([n(687), n(1099), n(1813), n(1758)])) })[n(1716)](), S2 = k({ type: F0([n(1985), n(1910)]), title: Z(w()), description: Z(w()), minimum: Z(r0()), maximum: Z(r0()) }).passthrough(), k2 = k({ type: t0("string"), title: Z(w()), description: Z(w()), enum: R0(w()), enumNames: Z(R0(w())) })[n(1716)](), E2 = J0([y2, w2, S2, k2]), P2 = xe[n(748)]({ method: t0(n(660)), params: se.extend({ message: w(), requestedSchema: k({ type: t0("object"), properties: H0(w(), E2), required: Z(R0(w())) })[n(1716)]() }) }), ca = ne[n(748)]({ action: F0([n(1948), n(2095), n(1163)]), content: Z(H0(w(), nx())) }), I2 = k({ type: t0("ref/resource"), uri: w() }).passthrough(), R2 = k({ type: t0(n(1037)), name: w() })[n(1716)](), C2 = xe[n(748)]({ method: t0(n(1626)), params: se[n(748)]({ ref: J0([R2, I2]), argument: k({ name: w(), value: w() }).passthrough(), context: Z(k({ arguments: Z(H0(w(), w())) })) }) }), F2 = ne[n(748)]({ completion: k({ values: R0(w())[n(550)](100), total: Z(r0().int()), hasMore: Z(_()) })[n(1716)]() }), N2 = k({ uri: w()[n(2534)](n(1624)), name: Z(w()), _meta: Z(k({})[n(1716)]()) })[n(1716)](), q2 = xe[n(748)]({ method: t0(n(1132)) }), ua = ne[n(748)]({ roots: R0(N2) }), T2 = me[n(748)]({ method: t0(n(280)) });
J0([_t, _n, C2, h2, t2, e2, Uo, Wo, Bo, Go, Qo, f2, u2]), J0([Yt, er, ea, T2]), J0([Xt, oa, ca, ua]), J0([_t, v2, P2, q2]), J0([Yt, er, p2, Xo, Jo, l2, i2]), J0([Xt, $o, F2, a2, x2, Vo, Zo, Ko, aa, d2]);
class Te extends Error {
  constructor(x, t, r) {
    const e = n;
    super(e(2501) + x + ": " + t), this[e(939)] = x, this[e(2197)] = r, this.name = "McpError";
  }
}
const O2 = 6e4;
class A2 {
  constructor(x) {
    const t = n;
    this._options = x, this[t(2245)] = 0, this[t(686)] = /* @__PURE__ */ new Map(), this[t(456)] = /* @__PURE__ */ new Map(), this[t(1369)] = /* @__PURE__ */ new Map(), this[t(1049)] = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this[t(1108)] = /* @__PURE__ */ new Map(), this[t(2344)] = /* @__PURE__ */ new Set(), this[t(560)](Yt, (r) => {
      const e = t, s = this[e(456)].get(r[e(665)].requestId);
      s == null || s[e(680)](r[e(665)].reason);
    }), this.setNotificationHandler(er, (r) => {
      this._onprogress(r);
    }), this[t(815)](_t, (r) => ({}));
  }
  [n(1881)](x, t, r, e, s = !1) {
    const a = n;
    this[a(1108)][a(933)](x, { timeoutId: setTimeout(e, t), startTime: Date[a(986)](), timeout: t, maxTotalTimeout: r, resetTimeoutOnProgress: s, onTimeout: e });
  }
  _resetTimeout(x) {
    const t = n, r = this[t(1108)][t(1364)](x);
    if (!r) return !1;
    const e = Date[t(986)]() - r[t(1426)];
    if (r[t(1211)] && e >= r[t(1211)])
      throw this[t(1108)].delete(x), new Te(ve[t(2052)], "Maximum total timeout exceeded", { maxTotalTimeout: r[t(1211)], totalElapsed: e });
    return clearTimeout(r[t(421)]), r[t(421)] = setTimeout(r[t(1685)], r.timeout), !0;
  }
  [n(1154)](x) {
    const t = n, r = this._timeoutInfo[t(1364)](x);
    r && (clearTimeout(r[t(421)]), this[t(1108)].delete(x));
  }
  async connect(x) {
    const t = n;
    var r, e, s;
    this._transport = x;
    const a = (r = this.transport) === null || r === void 0 ? void 0 : r[t(1078)];
    this[t(2521)][t(1078)] = () => {
      const u = t;
      a == null || a(), this[u(1938)]();
    };
    const o = (e = this[t(981)]) === null || e === void 0 ? void 0 : e[t(2309)];
    this[t(2521)].onerror = (u) => {
      o == null || o(u), this._onerror(u);
    };
    const c = (s = this[t(2521)]) === null || s === void 0 ? void 0 : s[t(882)];
    this[t(2521)][t(882)] = (u, d) => {
      const f = t;
      c == null || c(u, d), es(u) || jo(u) ? this[f(1968)](u) : Ao(u) ? this[f(703)](u, d) : Do(u) ? this[f(2536)](u) : this._onerror(new Error(f(2085) + JSON[f(328)](u)));
    }, await this[t(2521)].start();
  }
  _onclose() {
    const x = n;
    var t;
    const r = this[x(1049)];
    this[x(1049)] = /* @__PURE__ */ new Map(), this[x(2251)].clear(), this[x(2344)][x(238)](), this[x(2521)] = void 0, (t = this[x(1078)]) === null || t === void 0 || t[x(459)](this);
    const e = new Te(ve[x(2235)], x(2456));
    for (const s of r.values())
      s(e);
  }
  [n(2101)](x) {
    const t = n;
    var r;
    (r = this[t(2309)]) === null || r === void 0 || r[t(459)](this, x);
  }
  [n(2536)](x) {
    const t = n;
    var r;
    const e = (r = this[t(1369)][t(1364)](x[t(862)])) !== null && r !== void 0 ? r : this[t(1022)];
    e !== void 0 && Promise[t(1315)]()[t(1947)](() => e(x)).catch((s) => this[t(2101)](new Error(t(2111) + s)));
  }
  [n(703)](x, t) {
    const r = n;
    var e, s, a, o;
    const c = (e = this[r(686)][r(1364)](x[r(862)])) !== null && e !== void 0 ? e : this[r(1254)];
    if (c === void 0) {
      (s = this[r(2521)]) === null || s === void 0 || s[r(2246)]({ jsonrpc: "2.0", id: x.id, error: { code: ve[r(2093)], message: r(1820) } }).catch((f) => this[r(2101)](new Error("Failed to send an error response: " + f)));
      return;
    }
    const u = new AbortController();
    this[r(456)][r(933)](x.id, u);
    const d = { signal: u[r(2494)], sessionId: (a = this[r(2521)]) === null || a === void 0 ? void 0 : a.sessionId, _meta: (o = x.params) === null || o === void 0 ? void 0 : o._meta, sendNotification: (f) => this[r(614)](f, { relatedRequestId: x.id }), sendRequest: (f, l, g) => this[r(365)](f, l, { ...g, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t.authInfo, requestId: x.id, requestInfo: t == null ? void 0 : t[r(515)] };
    Promise[r(1315)]()[r(1947)](() => c(x, d)).then((f) => {
      const l = r;
      var g;
      if (!u[l(2494)][l(814)])
        return (g = this[l(2521)]) === null || g === void 0 ? void 0 : g[l(2246)]({ result: f, jsonrpc: "2.0", id: x.id });
    }, (f) => {
      const l = r;
      var g, h;
      if (!u[l(2494)][l(814)])
        return (g = this[l(2521)]) === null || g === void 0 ? void 0 : g.send({ jsonrpc: "2.0", id: x.id, error: { code: Number[l(739)](f[l(939)]) ? f[l(939)] : ve[l(1361)], message: (h = f[l(1717)]) !== null && h !== void 0 ? h : "Internal error" } });
    })[r(340)]((f) => this[r(2101)](new Error(r(1138) + f)))[r(674)](() => {
      const f = r;
      this[f(456)][f(381)](x.id);
    });
  }
  [n(376)](x) {
    const t = n, { progressToken: r, ...e } = x.params, s = Number(r), a = this[t(2251)][t(1364)](s);
    if (!a) {
      this._onerror(new Error(t(1711) + JSON[t(328)](x)));
      return;
    }
    const o = this[t(1049)][t(1364)](s), c = this[t(1108)].get(s);
    if (c && o && c.resetTimeoutOnProgress) try {
      this._resetTimeout(s);
    } catch (u) {
      o(u);
      return;
    }
    a(e);
  }
  [n(1968)](x) {
    const t = n, r = Number(x.id), e = this[t(1049)][t(1364)](r);
    if (e === void 0) {
      this._onerror(new Error(t(433) + JSON[t(328)](x)));
      return;
    }
    if (this._responseHandlers[t(381)](r), this[t(2251)][t(381)](r), this[t(1154)](r), es(x)) e(x);
    else {
      const s = new Te(x[t(2281)][t(939)], x.error[t(1717)], x[t(2281)][t(2197)]);
      e(s);
    }
  }
  get [n(981)]() {
    return this._transport;
  }
  async close() {
    const x = n;
    var t;
    await ((t = this[x(2521)]) === null || t === void 0 ? void 0 : t[x(679)]());
  }
  [n(365)](x, t, r) {
    const { relatedRequestId: e, resumptionToken: s, onresumptiontoken: a } = r ?? {};
    return new Promise((o, c) => {
      const u = K;
      var d, f, l, g, h, m;
      if (!this[u(2521)]) {
        c(new Error(u(1569)));
        return;
      }
      ((d = this[u(2542)]) === null || d === void 0 ? void 0 : d.enforceStrictCapabilities) === !0 && this.assertCapabilityForMethod(x[u(862)]), (f = r == null ? void 0 : r[u(2494)]) === null || f === void 0 || f[u(1284)]();
      const v = this[u(2245)]++, S = { ...x, jsonrpc: "2.0", id: v };
      r != null && r[u(2260)] && (this._progressHandlers[u(933)](v, r[u(2260)]), S[u(665)] = { ...x[u(665)], _meta: { ...((l = x[u(665)]) === null || l === void 0 ? void 0 : l[u(1692)]) || {}, progressToken: v } });
      const E = (R) => {
        const P = u;
        var C;
        this[P(1049)][P(381)](v), this._progressHandlers[P(381)](v), this[P(1154)](v), (C = this[P(2521)]) === null || C === void 0 || C[P(2246)]({ jsonrpc: P(2115), method: P(1967), params: { requestId: v, reason: String(R) } }, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: a }).catch((A) => this._onerror(new Error("Failed to send cancellation: " + A))), c(R);
      };
      this[u(1049)].set(v, (R) => {
        const P = u;
        var C;
        if (!(!((C = r == null ? void 0 : r[P(2494)]) === null || C === void 0) && C[P(814)])) {
          if (R instanceof Error) return c(R);
          try {
            const A = t[P(2517)](R[P(540)]);
            o(A);
          } catch (A) {
            c(A);
          }
        }
      }), (g = r == null ? void 0 : r.signal) === null || g === void 0 || g[u(2533)]("abort", () => {
        const R = u;
        var P;
        E((P = r == null ? void 0 : r.signal) === null || P === void 0 ? void 0 : P[R(1085)]);
      });
      const N = (h = r == null ? void 0 : r[u(2461)]) !== null && h !== void 0 ? h : O2, O = () => E(new Te(ve.RequestTimeout, u(501), { timeout: N }));
      this._setupTimeout(v, N, r == null ? void 0 : r[u(1211)], O, (m = r == null ? void 0 : r[u(1464)]) !== null && m !== void 0 ? m : !1), this[u(2521)][u(2246)](S, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: a })[u(340)]((R) => {
        this[u(1154)](v), c(R);
      });
    });
  }
  async [n(614)](x, t) {
    const r = n;
    var e, s;
    if (!this[r(2521)]) throw new Error("Not connected");
    if (this.assertNotificationCapability(x[r(862)]), ((s = (e = this._options) === null || e === void 0 ? void 0 : e[r(594)]) !== null && s !== void 0 ? s : []).includes(x[r(862)]) && !x.params && !(t != null && t[r(1531)])) {
      if (this[r(2344)].has(x[r(862)])) return;
      this._pendingDebouncedNotifications[r(2062)](x[r(862)]), Promise[r(1315)]()[r(1947)](() => {
        const u = r;
        var d;
        if (this._pendingDebouncedNotifications.delete(x[u(862)]), !this[u(2521)]) return;
        const f = { ...x, jsonrpc: u(2115) };
        (d = this[u(2521)]) === null || d === void 0 || d.send(f, t)[u(340)]((l) => this[u(2101)](l));
      });
      return;
    }
    const c = { ...x, jsonrpc: "2.0" };
    await this._transport[r(2246)](c, t);
  }
  [n(815)](x, t) {
    const r = n, e = x[r(809)][r(862)][r(2425)];
    this[r(1888)](e), this[r(686)][r(933)](e, (s, a) => {
      const o = r;
      return Promise.resolve(t(x[o(2517)](s), a));
    });
  }
  [n(615)](x) {
    const t = n;
    this[t(686)][t(381)](x);
  }
  [n(883)](x) {
    const t = n;
    if (this._requestHandlers[t(879)](x)) throw new Error("A request handler for " + x + t(1635));
  }
  setNotificationHandler(x, t) {
    const r = n;
    this._notificationHandlers.set(x[r(809)][r(862)][r(2425)], (e) => Promise.resolve(t(x[r(2517)](e))));
  }
  removeNotificationHandler(x) {
    const t = n;
    this[t(1369)][t(381)](x);
  }
}
function D2(i, x) {
  const t = n;
  return Object[t(394)](x).reduce((r, [e, s]) => (s && typeof s === t(1507) ? r[e] = r[e] ? { ...r[e], ...s } : s : r[e] = s, r), { ...i });
}
var Ye = { exports: {} }, j2 = Ye.exports, xs;
function M2() {
  const i = n;
  return xs ? Ye[i(370)] : (xs = 1, function(x, t) {
    (function(r, e) {
      e(t);
    })(j2, function(r) {
      const e = K;
      function s() {
        const I = K;
        for (var p = arguments[I(1396)], b = Array(p), y = 0; y < p; y++)
          b[y] = arguments[y];
        if (b[I(1396)] > 1) {
          b[0] = b[0].slice(0, -1);
          for (var H = b[I(1396)] - 1, z = 1; z < H; ++z)
            b[z] = b[z][I(1012)](1, -1);
          return b[H] = b[H].slice(1), b.join("");
        } else return b[0];
      }
      function a(I) {
        return "(?:" + I + ")";
      }
      function o(I) {
        const p = K;
        return I === void 0 ? p(654) : I === null ? p(417) : Object[p(2498)][p(1090)].call(I)[p(1031)](" ")[p(1832)]()[p(1031)]("]")[p(2225)]()[p(2162)]();
      }
      function c(I) {
        return I[K(2119)]();
      }
      function u(I) {
        const p = K;
        return I != null ? I instanceof Array ? I : typeof I[p(1396)] !== p(1985) || I[p(1031)] || I[p(2145)] || I[p(459)] ? [I] : Array[p(2498)][p(1012)][p(459)](I) : [];
      }
      function d(I, p) {
        var b = I;
        if (p) for (var y in p)
          b[y] = p[y];
        return b;
      }
      function f(I) {
        const p = K;
        var b = p(2565), y = p(1921), H = s(y, "[A-Fa-f]"), z = a(a(p(705) + H + "%" + H + H + "%" + H + H) + "|" + a(p(2097) + H + "%" + H + H) + "|" + a("%" + H + H)), a0 = p(398), u0 = p(1356), k0 = s(a0, u0), j0 = I ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", W0 = I ? "[\\uE000-\\uF8FF]" : "[]", E0 = s(b, y, p(1890), j0);
        a(b + s(b, y, p(1206)) + "*"), a(a(z + "|" + s(E0, u0, p(1504))) + "*");
        var D0 = a(a(p(1032)) + "|" + a(p(1689) + y) + "|" + a("1" + y + y) + "|" + a(p(2019) + y) + p(1221) + y), Z0 = a(D0 + "\\." + D0 + "\\." + D0 + "\\." + D0), b0 = a(H + p(1306)), $0 = a(a(b0 + "\\:" + b0) + "|" + Z0), B0 = a(a(b0 + "\\:") + p(1061) + $0), z0 = a(p(1487) + a(b0 + "\\:") + p(1162) + $0), ke = a(a(b0) + "?\\:\\:" + a(b0 + "\\:") + p(1041) + $0), oe = a(a(a(b0 + "\\:") + "{0,1}" + b0) + p(816) + a(b0 + "\\:") + p(806) + $0), ce = a(a(a(b0 + "\\:") + "{0,2}" + b0) + p(816) + a(b0 + "\\:") + p(2320) + $0), ze = a(a(a(b0 + "\\:") + p(1309) + b0) + p(816) + b0 + "\\:" + $0), Ce = a(a(a(b0 + "\\:") + p(923) + b0) + "?\\:\\:" + $0), te = a(a(a(b0 + "\\:") + p(2417) + b0) + "?\\:\\:" + b0), ue = a(a(a(b0 + "\\:") + p(1515) + b0) + p(816)), de = a([B0, z0, ke, oe, ce, ze, Ce, te, ue].join("|")), Ee = a(a(E0 + "|" + z) + "+");
        a(p(1590) + H + "+\\." + s(E0, u0, p(1504)) + "+"), a(a(z + "|" + s(E0, u0)) + "*");
        var fe = a(z + "|" + s(E0, u0, p(2420)));
        return a(a(z + "|" + s(E0, u0, "[\\@]")) + "+"), a(a(fe + "|" + s("[\\/\\?]", W0)) + "*"), { NOT_SCHEME: new RegExp(s(p(1457), b, y, p(1206)), "g"), NOT_USERINFO: new RegExp(s(p(1585), E0, u0), "g"), NOT_HOST: new RegExp(s(p(1958), E0, u0), "g"), NOT_PATH: new RegExp(s("[^\\%\\/\\:\\@]", E0, u0), "g"), NOT_PATH_NOSCHEME: new RegExp(s(p(821), E0, u0), "g"), NOT_QUERY: new RegExp(s(p(913), E0, u0, p(1188), W0), "g"), NOT_FRAGMENT: new RegExp(s("[^\\%]", E0, u0, p(1188)), "g"), ESCAPE: new RegExp(s(p(1457), E0, u0), "g"), UNRESERVED: new RegExp(E0, "g"), OTHER_CHARS: new RegExp(s("[^\\%]", E0, k0), "g"), PCT_ENCODED: new RegExp(z, "g"), IPV4ADDRESS: new RegExp("^(" + Z0 + ")$"), IPV6ADDRESS: new RegExp(p(1640) + de + ")" + a(a(p(1496) + H + "{2})") + "(" + Ee + ")") + p(1698)) };
      }
      var l = f(!1), g = f(!0), h = /* @__PURE__ */ function() {
        function I(p, b) {
          const y = K;
          var H = [], z = !0, a0 = !1, u0 = void 0;
          try {
            for (var k0 = p[Symbol[y(480)]](), j0; !(z = (j0 = k0.next())[y(930)]) && (H[y(757)](j0.value), !(b && H[y(1396)] === b)); z = !0)
              ;
          } catch (W0) {
            a0 = !0, u0 = W0;
          } finally {
            try {
              !z && k0[y(239)] && k0.return();
            } finally {
              if (a0) throw u0;
            }
          }
          return H;
        }
        return function(p, b) {
          const y = K;
          if (Array[y(1606)](p)) return p;
          if (Symbol[y(480)] in Object(p)) return I(p, b);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(), m = function(I) {
        const p = K;
        if (Array[p(1606)](I)) {
          for (var b = 0, y = Array(I.length); b < I[p(1396)]; b++) y[b] = I[b];
          return y;
        } else return Array.from(I);
      }, v = 2147483647, S = 36, E = 1, N = 26, O = 38, R = 700, P = 72, C = 128, A = "-", D = /^xn--/, M = /[^\0-\x7E]/, F = /[\x2E\u3002\uFF0E\uFF61]/g, q = { overflow: e(258), "not-basic": e(1767), "invalid-input": e(1799) }, U = S - E, $ = Math[e(1026)], V = String[e(2158)];
      function J(I) {
        throw new RangeError(q[I]);
      }
      function s0(I, p) {
        const b = e;
        for (var y = [], H = I[b(1396)]; H--; )
          y[H] = p(I[H]);
        return y;
      }
      function i0(I, p) {
        const b = e;
        var y = I[b(1031)]("@"), H = "";
        y[b(1396)] > 1 && (H = y[0] + "@", I = y[1]), I = I[b(1783)](F, ".");
        var z = I[b(1031)]("."), a0 = s0(z, p)[b(261)](".");
        return H + a0;
      }
      function d0(I) {
        const p = e;
        for (var b = [], y = 0, H = I[p(1396)]; y < H; ) {
          var z = I[p(631)](y++);
          if (z >= 55296 && z <= 56319 && y < H) {
            var a0 = I[p(631)](y++);
            (a0 & 64512) == 56320 ? b[p(757)](((z & 1023) << 10) + (a0 & 1023) + 65536) : (b[p(757)](z), y--);
          } else b[p(757)](z);
        }
        return b;
      }
      var l0 = function(p) {
        const b = e;
        return String.fromCodePoint[b(2598)](String, m(p));
      }, f0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : S;
      }, y0 = function(p, b) {
        return p + 22 + 75 * (p < 26) - ((b != 0) << 5);
      }, S0 = function(p, b, y) {
        var H = 0;
        for (p = y ? $(p / R) : p >> 1, p += $(p / b); p > U * N >> 1; H += S)
          p = $(p / U);
        return $(H + (U + 1) * p / (p + O));
      }, M0 = function(p) {
        const b = e;
        var y = [], H = p[b(1396)], z = 0, a0 = C, u0 = P, k0 = p[b(1833)](A);
        k0 < 0 && (k0 = 0);
        for (var j0 = 0; j0 < k0; ++j0)
          p[b(631)](j0) >= 128 && J(b(1204)), y[b(757)](p.charCodeAt(j0));
        for (var W0 = k0 > 0 ? k0 + 1 : 0; W0 < H; ) {
          for (var E0 = z, D0 = 1, Z0 = S; ; Z0 += S) {
            W0 >= H && J("invalid-input");
            var b0 = f0(p[b(631)](W0++));
            (b0 >= S || b0 > $((v - z) / D0)) && J(b(872)), z += b0 * D0;
            var $0 = Z0 <= u0 ? E : Z0 >= u0 + N ? N : Z0 - u0;
            if (b0 < $0) break;
            var B0 = S - $0;
            D0 > $(v / B0) && J(b(872)), D0 *= B0;
          }
          var z0 = y.length + 1;
          u0 = S0(z - E0, z0, E0 == 0), $(z / z0) > v - a0 && J(b(872)), a0 += $(z / z0), z %= z0, y[b(1209)](z++, 0, a0);
        }
        return String[b(1735)][b(2598)](String, y);
      }, C0 = function(p) {
        const b = e;
        var y = [];
        p = d0(p);
        var H = p[b(1396)], z = C, a0 = 0, u0 = P, k0 = !0, j0 = !1, W0 = void 0;
        try {
          for (var E0 = p[Symbol[b(480)]](), D0; !(k0 = (D0 = E0[b(319)]())[b(930)]); k0 = !0) {
            var Z0 = D0.value;
            Z0 < 128 && y[b(757)](V(Z0));
          }
        } catch (Je) {
          j0 = !0, W0 = Je;
        } finally {
          try {
            !k0 && E0.return && E0[b(239)]();
          } finally {
            if (j0) throw W0;
          }
        }
        var b0 = y[b(1396)], $0 = b0;
        for (b0 && y.push(A); $0 < H; ) {
          var B0 = v, z0 = !0, ke = !1, oe = void 0;
          try {
            for (var ce = p[Symbol[b(480)]](), ze; !(z0 = (ze = ce[b(319)]())[b(930)]); z0 = !0) {
              var Ce = ze[b(2425)];
              Ce >= z && Ce < B0 && (B0 = Ce);
            }
          } catch (Je) {
            ke = !0, oe = Je;
          } finally {
            try {
              !z0 && ce[b(239)] && ce[b(239)]();
            } finally {
              if (ke) throw oe;
            }
          }
          var te = $0 + 1;
          B0 - z > $((v - a0) / te) && J(b(872)), a0 += (B0 - z) * te, z = B0;
          var ue = !0, de = !1, Ee = void 0;
          try {
            for (var fe = p[Symbol.iterator](), vr; !(ue = (vr = fe[b(319)]())[b(930)]); ue = !0) {
              var yr = vr[b(2425)];
              if (yr < z && ++a0 > v && J(b(872)), yr == z) {
                for (var cx = a0, ux = S; ; ux += S) {
                  var dx = ux <= u0 ? E : ux >= u0 + N ? N : ux - u0;
                  if (cx < dx) break;
                  var wr = cx - dx, Sr = S - dx;
                  y.push(V(y0(dx + wr % Sr, 0))), cx = $(wr / Sr);
                }
                y.push(V(y0(cx, 0))), u0 = S0(a0, te, $0 == b0), a0 = 0, ++$0;
              }
            }
          } catch (Je) {
            de = !0, Ee = Je;
          } finally {
            try {
              !ue && fe[b(239)] && fe.return();
            } finally {
              if (de) throw Ee;
            }
          }
          ++a0, ++z;
        }
        return y[b(261)]("");
      }, Q0 = function(p) {
        return i0(p, function(b) {
          const y = K;
          return D[y(323)](b) ? M0(b[y(1012)](4).toLowerCase()) : b;
        });
      }, j = function(p) {
        return i0(p, function(b) {
          const y = K;
          return M[y(323)](b) ? y(656) + C0(b) : b;
        });
      }, T = { version: "2.1.0", ucs2: { decode: d0, encode: l0 }, decode: M0, encode: C0, toASCII: j, toUnicode: Q0 }, L = {};
      function G(I) {
        const p = e;
        var b = I[p(631)](0), y = void 0;
        return b < 16 ? y = "%0" + b[p(1090)](16)[p(2119)]() : b < 128 ? y = "%" + b[p(1090)](16)[p(2119)]() : b < 2048 ? y = "%" + (b >> 6 | 192)[p(1090)](16)[p(2119)]() + "%" + (b & 63 | 128)[p(1090)](16)[p(2119)]() : y = "%" + (b >> 12 | 224)[p(1090)](16).toUpperCase() + "%" + (b >> 6 & 63 | 128)[p(1090)](16)[p(2119)]() + "%" + (b & 63 | 128).toString(16)[p(2119)](), y;
      }
      function Q(I) {
        const p = e;
        for (var b = "", y = 0, H = I.length; y < H; ) {
          var z = parseInt(I[p(2379)](y + 1, 2), 16);
          if (z < 128) b += String[p(2158)](z), y += 3;
          else if (z >= 194 && z < 224) {
            if (H - y >= 6) {
              var a0 = parseInt(I[p(2379)](y + 4, 2), 16);
              b += String.fromCharCode((z & 31) << 6 | a0 & 63);
            } else b += I[p(2379)](y, 6);
            y += 6;
          } else if (z >= 224) {
            if (H - y >= 9) {
              var u0 = parseInt(I[p(2379)](y + 4, 2), 16), k0 = parseInt(I[p(2379)](y + 7, 2), 16);
              b += String[p(2158)]((z & 15) << 12 | (u0 & 63) << 6 | k0 & 63);
            } else b += I.substr(y, 9);
            y += 9;
          } else b += I[p(2379)](y, 3), y += 3;
        }
        return b;
      }
      function W(I, p) {
        const b = e;
        function y(H) {
          const z = K;
          var a0 = Q(H);
          return a0[z(1722)](p[z(412)]) ? a0 : H;
        }
        return I[b(1586)] && (I.scheme = String(I[b(1586)])[b(1783)](p[b(1775)], y)[b(2162)]().replace(p.NOT_SCHEME, "")), I.userinfo !== void 0 && (I.userinfo = String(I.userinfo).replace(p[b(1775)], y)[b(1783)](p[b(2435)], G)[b(1783)](p[b(1775)], c)), I[b(1953)] !== void 0 && (I[b(1953)] = String(I[b(1953)])[b(1783)](p[b(1775)], y)[b(2162)]()[b(1783)](p[b(1875)], G)[b(1783)](p.PCT_ENCODED, c)), I[b(1225)] !== void 0 && (I[b(1225)] = String(I[b(1225)]).replace(p.PCT_ENCODED, y)[b(1783)](I[b(1586)] ? p[b(391)] : p[b(291)], G)[b(1783)](p.PCT_ENCODED, c)), I.query !== void 0 && (I[b(833)] = String(I[b(833)]).replace(p[b(1775)], y)[b(1783)](p[b(2146)], G)[b(1783)](p.PCT_ENCODED, c)), I[b(788)] !== void 0 && (I.fragment = String(I.fragment)[b(1783)](p[b(1775)], y).replace(p.NOT_FRAGMENT, G)[b(1783)](p.PCT_ENCODED, c)), I;
      }
      function X(I) {
        return I[e(1783)](/^0*(.*)/, "$1") || "0";
      }
      function o0(I, p) {
        const b = e;
        var y = I.match(p[b(2223)]) || [], H = h(y, 2), z = H[1];
        return z ? z[b(1031)](".")[b(1227)](X)[b(261)](".") : I;
      }
      function c0(I, p) {
        const b = e;
        var y = I[b(1722)](p[b(385)]) || [], H = h(y, 3), z = H[1], a0 = H[2];
        if (z) {
          for (var u0 = z[b(2162)]()[b(1031)]("::").reverse(), k0 = h(u0, 2), j0 = k0[0], W0 = k0[1], E0 = W0 ? W0[b(1031)](":")[b(1227)](X) : [], D0 = j0[b(1031)](":")[b(1227)](X), Z0 = p[b(2223)][b(323)](D0[D0[b(1396)] - 1]), b0 = Z0 ? 7 : 8, $0 = D0.length - b0, B0 = Array(b0), z0 = 0; z0 < b0; ++z0)
            B0[z0] = E0[z0] || D0[$0 + z0] || "";
          Z0 && (B0[b0 - 1] = o0(B0[b0 - 1], p));
          var ke = B0.reduce(function(te, ue, de) {
            const Ee = b;
            if (!ue || ue === "0") {
              var fe = te[te.length - 1];
              fe && fe.index + fe[Ee(1396)] === de ? fe[Ee(1396)]++ : te[Ee(757)]({ index: de, length: 1 });
            }
            return te;
          }, []), oe = ke[b(1662)](function(te, ue) {
            const de = b;
            return ue[de(1396)] - te[de(1396)];
          })[0], ce = void 0;
          if (oe && oe.length > 1) {
            var ze = B0[b(1012)](0, oe[b(2160)]), Ce = B0.slice(oe[b(2160)] + oe[b(1396)]);
            ce = ze.join(":") + "::" + Ce.join(":");
          } else ce = B0[b(261)](":");
          return a0 && (ce += "%" + a0), ce;
        } else return I;
      }
      var e0 = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, L0 = "".match(/(){0}/)[1] === void 0;
      function O0(I) {
        const p = e;
        var b = arguments[p(1396)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = {}, H = b[p(1460)] !== !1 ? g : l;
        b[p(1869)] === p(2014) && (I = (b[p(1586)] ? b[p(1586)] + ":" : "") + "//" + I);
        var z = I[p(1722)](e0);
        if (z) {
          L0 ? (y[p(1586)] = z[1], y[p(1513)] = z[3], y[p(1953)] = z[4], y.port = parseInt(z[5], 10), y[p(1225)] = z[6] || "", y[p(833)] = z[7], y[p(788)] = z[8], isNaN(y[p(1134)]) && (y.port = z[5])) : (y[p(1586)] = z[1] || void 0, y[p(1513)] = I.indexOf("@") !== -1 ? z[3] : void 0, y.host = I[p(651)]("//") !== -1 ? z[4] : void 0, y[p(1134)] = parseInt(z[5], 10), y[p(1225)] = z[6] || "", y[p(833)] = I.indexOf("?") !== -1 ? z[7] : void 0, y[p(788)] = I[p(651)]("#") !== -1 ? z[8] : void 0, isNaN(y[p(1134)]) && (y.port = I[p(1722)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? z[4] : void 0)), y[p(1953)] && (y[p(1953)] = c0(o0(y[p(1953)], H), H)), y[p(1586)] === void 0 && y[p(1513)] === void 0 && y[p(1953)] === void 0 && y.port === void 0 && !y[p(1225)] && y[p(833)] === void 0 ? y[p(1869)] = p(2006) : y[p(1586)] === void 0 ? y[p(1869)] = "relative" : y.fragment === void 0 ? y[p(1869)] = "absolute" : y[p(1869)] = p(1099), b[p(1869)] && b[p(1869)] !== p(2014) && b[p(1869)] !== y.reference && (y.error = y[p(2281)] || p(998) + b[p(1869)] + " reference.");
          var a0 = L[(b[p(1586)] || y[p(1586)] || "")[p(2162)]()];
          if (!b[p(2007)] && (!a0 || !a0[p(2007)])) {
            if (y.host && (b[p(1743)] || a0 && a0[p(1743)])) try {
              y[p(1953)] = T[p(271)](y.host.replace(H[p(1775)], Q)[p(2162)]());
            } catch (u0) {
              y.error = y[p(2281)] || p(2141) + u0;
            }
            W(y, l);
          } else W(y, H);
          a0 && a0[p(2517)] && a0.parse(y, b);
        } else y.error = y[p(2281)] || p(1179);
        return y;
      }
      function U0(I, p) {
        const b = e;
        var y = p[b(1460)] !== !1 ? g : l, H = [];
        return I[b(1513)] !== void 0 && (H.push(I[b(1513)]), H[b(757)]("@")), I[b(1953)] !== void 0 && H[b(757)](c0(o0(String(I[b(1953)]), y), y).replace(y.IPV6ADDRESS, function(z, a0, u0) {
          const k0 = b;
          return "[" + a0 + (u0 ? k0(533) + u0 : "") + "]";
        })), (typeof I[b(1134)] === b(1985) || typeof I[b(1134)] == "string") && (H[b(757)](":"), H[b(757)](String(I.port))), H[b(1396)] ? H.join("") : void 0;
      }
      var w0 = /^\.\.?\//, G0 = /^\/\.(\/|$)/, ae = /^\/\.\.(\/|$)/, X0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function A0(I) {
        const p = e;
        for (var b = []; I[p(1396)]; )
          if (I[p(1722)](w0)) I = I.replace(w0, "");
          else if (I[p(1722)](G0)) I = I[p(1783)](G0, "/");
          else if (I[p(1722)](ae)) I = I.replace(ae, "/"), b[p(1832)]();
          else if (I === "." || I === "..") I = "";
          else {
            var y = I[p(1722)](X0);
            if (y) {
              var H = y[0];
              I = I.slice(H[p(1396)]), b[p(757)](H);
            } else throw new Error(p(2410));
          }
        return b[p(261)]("");
      }
      function V0(I) {
        const p = e;
        var b = arguments[p(1396)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = b[p(1460)] ? g : l, H = [], z = L[(b.scheme || I[p(1586)] || "").toLowerCase()];
        if (z && z[p(1480)] && z[p(1480)](I, b), I[p(1953)] && !y[p(385)][p(323)](I[p(1953)])) {
          if (b[p(1743)] || z && z[p(1743)]) try {
            I[p(1953)] = b[p(1460)] ? T.toUnicode(I[p(1953)]) : T.toASCII(I[p(1953)][p(1783)](y[p(1775)], Q)[p(2162)]());
          } catch (k0) {
            I.error = I[p(2281)] || p(1704) + (b[p(1460)] ? p(1596) : p(2433)) + " via punycode: " + k0;
          }
        }
        W(I, y), b[p(1869)] !== p(2014) && I[p(1586)] && (H[p(757)](I[p(1586)]), H.push(":"));
        var a0 = U0(I, b);
        if (a0 !== void 0 && (b[p(1869)] !== p(2014) && H[p(757)]("//"), H.push(a0), I.path && I[p(1225)][p(1358)](0) !== "/" && H[p(757)]("/")), I[p(1225)] !== void 0) {
          var u0 = I[p(1225)];
          !b.absolutePath && (!z || !z.absolutePath) && (u0 = A0(u0)), a0 === void 0 && (u0 = u0[p(1783)](/^\/\//, p(1474))), H[p(757)](u0);
        }
        return I.query !== void 0 && (H[p(757)]("?"), H[p(757)](I[p(833)])), I[p(788)] !== void 0 && (H[p(757)]("#"), H[p(757)](I[p(788)])), H.join("");
      }
      function _0(I, p) {
        const b = e;
        var y = arguments[b(1396)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, H = arguments[3], z = {};
        return !H && (I = O0(V0(I, y), y), p = O0(V0(p, y), y)), y = y || {}, !y[b(2415)] && p[b(1586)] ? (z[b(1586)] = p[b(1586)], z.userinfo = p.userinfo, z[b(1953)] = p[b(1953)], z[b(1134)] = p[b(1134)], z[b(1225)] = A0(p[b(1225)] || ""), z[b(833)] = p[b(833)]) : (p[b(1513)] !== void 0 || p[b(1953)] !== void 0 || p[b(1134)] !== void 0 ? (z[b(1513)] = p[b(1513)], z[b(1953)] = p[b(1953)], z[b(1134)] = p[b(1134)], z[b(1225)] = A0(p.path || ""), z[b(833)] = p.query) : (p[b(1225)] ? (p[b(1225)][b(1358)](0) === "/" ? z[b(1225)] = A0(p[b(1225)]) : ((I.userinfo !== void 0 || I.host !== void 0 || I[b(1134)] !== void 0) && !I.path ? z[b(1225)] = "/" + p[b(1225)] : I[b(1225)] ? z.path = I[b(1225)].slice(0, I.path[b(1833)]("/") + 1) + p[b(1225)] : z[b(1225)] = p.path, z[b(1225)] = A0(z[b(1225)])), z.query = p[b(833)]) : (z.path = I.path, p.query !== void 0 ? z[b(833)] = p[b(833)] : z[b(833)] = I.query), z.userinfo = I.userinfo, z.host = I[b(1953)], z[b(1134)] = I[b(1134)]), z[b(1586)] = I[b(1586)]), z[b(788)] = p[b(788)], z;
      }
      function Le(I, p, b) {
        var H = d({ scheme: e(417) }, b);
        return V0(_0(O0(I, H), O0(p, H), H, !0), H);
      }
      function jx(I, p) {
        return typeof I == "string" ? I = V0(O0(I, p), p) : o(I) === "object" && (I = O0(V0(I, p), p)), I;
      }
      function ur(I, p, b) {
        const y = e;
        return typeof I === y(1401) ? I = V0(O0(I, b), b) : o(I) === "object" && (I = V0(I, b)), typeof p === y(1401) ? p = V0(O0(p, b), b) : o(p) === y(1507) && (p = V0(p, b)), I === p;
      }
      function ba(I, p) {
        const b = e;
        return I && I[b(1090)]()[b(1783)](!p || !p[b(1460)] ? l.ESCAPE : g[b(1291)], G);
      }
      function ge(I, p) {
        const b = e;
        return I && I[b(1090)]().replace(!p || !p[b(1460)] ? l[b(1775)] : g[b(1775)], Q);
      }
      var Be = { scheme: e(1395), domainHost: !0, parse: function(p, b) {
        const y = e;
        return !p[y(1953)] && (p[y(2281)] = p[y(2281)] || y(888)), p;
      }, serialize: function(p, b) {
        const y = e;
        var H = String(p.scheme).toLowerCase() === y(2132);
        return (p[y(1134)] === (H ? 443 : 80) || p[y(1134)] === "") && (p[y(1134)] = void 0), !p[y(1225)] && (p.path = "/"), p;
      } }, dr = { scheme: e(2132), domainHost: Be.domainHost, parse: Be.parse, serialize: Be[e(1480)] };
      function fr(I) {
        const p = e;
        return typeof I[p(1442)] === p(1588) ? I[p(1442)] : String(I.scheme)[p(2162)]() === p(1579);
      }
      var Ke = { scheme: "ws", domainHost: !0, parse: function(p, b) {
        const y = e;
        var H = p;
        return H[y(1442)] = fr(H), H.resourceName = (H[y(1225)] || "/") + (H.query ? "?" + H[y(833)] : ""), H[y(1225)] = void 0, H[y(833)] = void 0, H;
      }, serialize: function(p, b) {
        const y = e;
        if ((p[y(1134)] === (fr(p) ? 443 : 80) || p[y(1134)] === "") && (p[y(1134)] = void 0), typeof p[y(1442)] === y(1588) && (p[y(1586)] = p[y(1442)] ? y(1579) : "ws", p[y(1442)] = void 0), p[y(2345)]) {
          var H = p[y(2345)][y(1031)]("?"), z = h(H, 2), a0 = z[0], u0 = z[1];
          p[y(1225)] = a0 && a0 !== "/" ? a0 : void 0, p[y(833)] = u0, p.resourceName = void 0;
        }
        return p[y(788)] = void 0, p;
      } }, lr = { scheme: e(1579), domainHost: Ke[e(1743)], parse: Ke[e(2517)], serialize: Ke[e(1480)] }, va = {}, hr = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", ie = "[0-9A-Fa-f]", ya = a(a(e(705) + ie + "%" + ie + ie + "%" + ie + ie) + "|" + a(e(2097) + ie + "%" + ie + ie) + "|" + a("%" + ie + ie)), wa = e(2400), Sa = e(1821), ka = s(Sa, '[\\"\\\\]'), Ea = e(1816), Pa = new RegExp(hr, "g"), $e = new RegExp(ya, "g"), Ia = new RegExp(s(e(1457), wa, e(266), '[\\"]', ka), "g"), pr = new RegExp(s(e(1457), hr, Ea), "g"), Ra = pr;
      function Mx(I) {
        const p = e;
        var b = Q(I);
        return b[p(1722)](Pa) ? b : I;
      }
      var mr = { scheme: e(755), parse: function(p, b) {
        const y = e;
        var H = p, z = H.to = H[y(1225)] ? H[y(1225)][y(1031)](",") : [];
        if (H[y(1225)] = void 0, H[y(833)]) {
          for (var a0 = !1, u0 = {}, k0 = H[y(833)][y(1031)]("&"), j0 = 0, W0 = k0.length; j0 < W0; ++j0) {
            var E0 = k0[j0][y(1031)]("=");
            switch (E0[0]) {
              case "to":
                for (var D0 = E0[1].split(","), Z0 = 0, b0 = D0[y(1396)]; Z0 < b0; ++Z0)
                  z[y(757)](D0[Z0]);
                break;
              case "subject":
                H[y(1071)] = ge(E0[1], b);
                break;
              case "body":
                H[y(2130)] = ge(E0[1], b);
                break;
              default:
                a0 = !0, u0[ge(E0[0], b)] = ge(E0[1], b);
                break;
            }
          }
          a0 && (H[y(1102)] = u0);
        }
        H[y(833)] = void 0;
        for (var $0 = 0, B0 = z.length; $0 < B0; ++$0) {
          var z0 = z[$0].split("@");
          if (z0[0] = ge(z0[0]), b.unicodeSupport) z0[1] = ge(z0[1], b).toLowerCase();
          else try {
            z0[1] = T[y(271)](ge(z0[1], b).toLowerCase());
          } catch (ke) {
            H.error = H[y(2281)] || y(2211) + ke;
          }
          z[$0] = z0[y(261)]("@");
        }
        return H;
      }, serialize: function(p, b) {
        const y = e;
        var H = p, z = u(p.to);
        if (z) {
          for (var a0 = 0, u0 = z[y(1396)]; a0 < u0; ++a0) {
            var k0 = String(z[a0]), j0 = k0[y(1833)]("@"), W0 = k0.slice(0, j0).replace($e, Mx)[y(1783)]($e, c)[y(1783)](Ia, G), E0 = k0[y(1012)](j0 + 1);
            try {
              E0 = b[y(1460)] ? T[y(2142)](E0) : T[y(271)](ge(E0, b)[y(2162)]());
            } catch ($0) {
              H[y(2281)] = H[y(2281)] || "Email address's domain name can not be converted to " + (b[y(1460)] ? y(1596) : "ASCII") + y(997) + $0;
            }
            z[a0] = W0 + "@" + E0;
          }
          H.path = z[y(261)](",");
        }
        var D0 = p[y(1102)] = p[y(1102)] || {};
        p[y(1071)] && (D0[y(1071)] = p[y(1071)]), p.body && (D0[y(2130)] = p[y(2130)]);
        var Z0 = [];
        for (var b0 in D0)
          D0[b0] !== va[b0] && Z0[y(757)](b0[y(1783)]($e, Mx)[y(1783)]($e, c)[y(1783)](pr, G) + "=" + D0[b0].replace($e, Mx)[y(1783)]($e, c)[y(1783)](Ra, G));
        return Z0.length && (H[y(833)] = Z0[y(261)]("&")), H;
      } }, Ca = /^([^\:]+)\:(.*)/, gr = { scheme: e(2100), parse: function(p, b) {
        const y = e;
        var H = p[y(1225)] && p[y(1225)].match(Ca), z = p;
        if (H) {
          var a0 = b[y(1586)] || z[y(1586)] || y(2100), u0 = H[1][y(2162)](), k0 = H[2], j0 = a0 + ":" + (b[y(2396)] || u0), W0 = L[j0];
          z[y(2396)] = u0, z[y(1527)] = k0, z[y(1225)] = void 0, W0 && (z = W0[y(2517)](z, b));
        } else z.error = z[y(2281)] || y(1516);
        return z;
      }, serialize: function(p, b) {
        const y = e;
        var H = b[y(1586)] || p[y(1586)] || "urn", z = p[y(2396)], a0 = H + ":" + (b[y(2396)] || z), u0 = L[a0];
        u0 && (p = u0[y(1480)](p, b));
        var k0 = p, j0 = p[y(1527)];
        return k0[y(1225)] = (z || b[y(2396)]) + ":" + j0, k0;
      } }, Fa = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, br = { scheme: e(2492), parse: function(p, b) {
        const y = e;
        var H = p;
        return H.uuid = H.nss, H[y(1527)] = void 0, !b[y(2415)] && (!H[y(2460)] || !H[y(2460)][y(1722)](Fa)) && (H[y(2281)] = H[y(2281)] || y(691)), H;
      }, serialize: function(p, b) {
        const y = e;
        var H = p;
        return H.nss = (p[y(2460)] || "")[y(2162)](), H;
      } };
      L[Be[e(1586)]] = Be, L[dr[e(1586)]] = dr, L[Ke[e(1586)]] = Ke, L[lr[e(1586)]] = lr, L[mr[e(1586)]] = mr, L[gr[e(1586)]] = gr, L[br[e(1586)]] = br, r.SCHEMES = L, r[e(275)] = G, r[e(1177)] = Q, r[e(2517)] = O0, r[e(1450)] = A0, r[e(1480)] = V0, r[e(247)] = _0, r[e(1315)] = Le, r[e(669)] = jx, r[e(910)] = ur, r[e(1939)] = ba, r[e(541)] = ge, Object.defineProperty(r, e(1472), { value: !0 });
    });
  }(Ye, Ye[i(370)]), Ye.exports);
}
var Bx, ts;
function ir() {
  return ts || (ts = 1, Bx = function i(x, t) {
    const r = K;
    if (x === t) return !0;
    if (x && t && typeof x == r(1507) && typeof t == r(1507)) {
      if (x[r(2568)] !== t[r(2568)]) return !1;
      var e, s, a;
      if (Array[r(1606)](x)) {
        if (e = x.length, e != t.length) return !1;
        for (s = e; s-- !== 0; ) if (!i(x[s], t[s])) return !1;
        return !0;
      }
      if (x[r(2568)] === RegExp) return x[r(2538)] === t[r(2538)] && x[r(1300)] === t[r(1300)];
      if (x[r(1067)] !== Object[r(2498)].valueOf) return x[r(1067)]() === t[r(1067)]();
      if (x[r(1090)] !== Object[r(2498)][r(1090)]) return x[r(1090)]() === t.toString();
      if (a = Object[r(2109)](x), e = a[r(1396)], e !== Object[r(2109)](t)[r(1396)]) return !1;
      for (s = e; s-- !== 0; ) if (!Object[r(2498)][r(2165)][r(459)](t, a[s])) return !1;
      for (s = e; s-- !== 0; ) {
        var o = a[s];
        if (!i(x[o], t[o])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), Bx;
}
var Kx, rs;
function L2() {
  return rs || (rs = 1, Kx = function(x) {
    const t = K;
    for (var r = 0, e = x[t(1396)], s = 0, a; s < e; )
      r++, a = x[t(631)](s++), a >= 55296 && a <= 56319 && s < e && (a = x[t(631)](s), (a & 64512) == 56320 && s++);
    return r;
  }), Kx;
}
var Jx, ss;
function Ze() {
  const i = n;
  if (ss) return Jx;
  ss = 1, Jx = { copy: x, checkDataType: t, checkDataTypes: r, coerceToTypes: s, toHash: a, getProperty: u, escapeQuotes: d, equal: ir(), ucs2length: L2(), varOccurences: f, varReplace: l, schemaHasRules: g, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: v, getPathExpr: S, getPath: E, getData: R, unescapeFragment: C, unescapeJsonPointer: M, escapeFragment: A, escapeJsonPointer: D };
  function x(F, q) {
    q = q || {};
    for (var U in F) q[U] = F[U];
    return q;
  }
  function t(F, q, U, $) {
    const V = K;
    var J = V($ ? 2010 : 399), s0 = V($ ? 1258 : 547), i0 = $ ? "!" : "", d0 = $ ? "" : "!";
    switch (F) {
      case "null":
        return q + J + "null";
      case V(633):
        return i0 + V(1029) + q + ")";
      case "object":
        return "(" + i0 + q + s0 + V(2439) + q + J + V(1461) + s0 + d0 + V(1029) + q + "))";
      case "integer":
        return V(2513) + q + J + '"number"' + s0 + d0 + "(" + q + " % 1)" + s0 + q + J + q + (U ? s0 + i0 + V(318) + q + ")" : "") + ")";
      case V(1985):
        return "(typeof " + q + J + '"' + F + '"' + (U ? s0 + i0 + "isFinite(" + q + ")" : "") + ")";
      default:
        return "typeof " + q + J + '"' + F + '"';
    }
  }
  function r(F, q, U) {
    const $ = K;
    switch (F.length) {
      case 1:
        return t(F[0], q, U, !0);
      default:
        var V = "", J = a(F);
        J[$(633)] && J.object && (V = J.null ? "(" : "(!" + q + " || ", V += $(2439) + q + ' !== "object")', delete J[$(417)], delete J[$(633)], delete J[$(1507)]), J[$(1985)] && delete J[$(1910)];
        for (var s0 in J) V += (V ? $(547) : "") + t(s0, q, U, !0);
        return V;
    }
  }
  var e = a([i(1401), i(1985), i(1910), i(1588), i(417)]);
  function s(F, q) {
    const U = i;
    if (Array.isArray(q)) {
      for (var $ = [], V = 0; V < q[U(1396)]; V++) {
        var J = q[V];
        (e[J] || F === "array" && J === U(633)) && ($[$[U(1396)]] = J);
      }
      if ($[U(1396)]) return $;
    } else {
      if (e[q]) return [q];
      if (F === U(633) && q === U(633)) return [U(633)];
    }
  }
  function a(F) {
    const q = i;
    for (var U = {}, $ = 0; $ < F[q(1396)]; $++) U[F[$]] = !0;
    return U;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(F) {
    return typeof F == i(1985) ? "[" + F + "]" : o.test(F) ? "." + F : "['" + d(F) + "']";
  }
  function d(F) {
    const q = i;
    return F[q(1783)](c, "\\$&")[q(1783)](/\n/g, "\\n")[q(1783)](/\r/g, "\\r")[q(1783)](/\f/g, "\\f")[q(1783)](/\t/g, "\\t");
  }
  function f(F, q) {
    const U = i;
    q += U(2322);
    var $ = F[U(1722)](new RegExp(q, "g"));
    return $ ? $[U(1396)] : 0;
  }
  function l(F, q, U) {
    const $ = i;
    return q += "([^0-9])", U = U[$(1783)](/\$/g, $(495)), F[$(1783)](new RegExp(q, "g"), U + "$1");
  }
  function g(F, q) {
    if (typeof F == i(1588)) return !F;
    for (var $ in F) if (q[$]) return !0;
  }
  function h(F, q, U) {
    const $ = i;
    if (typeof F == $(1588)) return !F && U != $(708);
    for (var V in F) if (V != U && q[V]) return !0;
  }
  function m(F, q) {
    if (typeof F != i(1588)) {
      for (var $ in F) if (!q[$]) return $;
    }
  }
  function v(F) {
    return "'" + d(F) + "'";
  }
  function S(F, q, U, $) {
    const V = i;
    var J = U ? V(928) + q + ($ ? "" : V(1086)) : $ ? V(2573) + q + V(690) : "'[\\'' + " + q + V(498);
    return P(F, J);
  }
  function E(F, q, U) {
    var $ = v(U ? "/" + D(q) : u(q));
    return P(F, $);
  }
  var N = /^\/(?:[^~]|~0|~1)*$/, O = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function R(F, q, U) {
    const $ = i;
    var V, J, s0, i0;
    if (F === "") return $(305);
    if (F[0] == "/") {
      if (!N[$(323)](F)) throw new Error($(967) + F);
      J = F, s0 = $(305);
    } else {
      if (i0 = F[$(1722)](O), !i0) throw new Error("Invalid JSON-pointer: " + F);
      if (V = +i0[1], J = i0[2], J == "#") {
        if (V >= q) throw new Error($(1768) + V + $(1823) + q);
        return U[q - V];
      }
      if (V > q) throw new Error("Cannot access data " + V + $(1823) + q);
      if (s0 = $(2197) + (q - V || ""), !J) return s0;
    }
    for (var d0 = s0, l0 = J[$(1031)]("/"), f0 = 0; f0 < l0[$(1396)]; f0++) {
      var y0 = l0[f0];
      y0 && (s0 += u(M(y0)), d0 += " && " + s0);
    }
    return d0;
  }
  function P(F, q) {
    const U = i;
    return F == '""' ? q : (F + U(2200) + q)[U(1783)](/([^\\])' \+ '/g, "$1");
  }
  function C(F) {
    return M(decodeURIComponent(F));
  }
  function A(F) {
    return encodeURIComponent(D(F));
  }
  function D(F) {
    const q = i;
    return F[q(1783)](/~/g, "~0")[q(1783)](/\//g, "~1");
  }
  function M(F) {
    const q = i;
    return F[q(1783)](/~1/g, "/")[q(1783)](/~0/g, "~");
  }
  return Jx;
}
var Gx, ns;
function da() {
  if (ns) return Gx;
  ns = 1;
  var i = Ze();
  Gx = x;
  function x(t) {
    i.copy(t, this);
  }
  return Gx;
}
var Qx = { exports: {} }, as;
function $2() {
  const i = n;
  if (as) return Qx.exports;
  as = 1;
  var x = Qx[i(370)] = function(e, s, a) {
    const o = i;
    typeof s == o(1856) && (a = s, s = {}), a = s.cb || a;
    var c = typeof a == "function" ? a : a[o(2467)] || function() {
    }, u = a[o(1962)] || function() {
    };
    t(s, c, u, e, "", e);
  };
  x.keywords = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x.arrayKeywords = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[i(409)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[i(383)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, s, a, o, c, u, d, f, l, g) {
    const h = i;
    if (o && typeof o == h(1507) && !Array[h(1606)](o)) {
      s(o, c, u, d, f, l, g);
      for (var m in o) {
        var v = o[m];
        if (Array[h(1606)](v)) {
          if (m in x[h(1835)])
            for (var S = 0; S < v[h(1396)]; S++) t(e, s, a, v[S], c + "/" + m + "/" + S, u, c, m, o, S);
        } else if (m in x[h(409)]) {
          if (v && typeof v == "object")
            for (var E in v) t(e, s, a, v[E], c + "/" + m + "/" + r(E), u, c, m, o, E);
        } else (m in x.keywords || e[h(735)] && !(m in x[h(383)])) && t(e, s, a, v, c + "/" + m, u, c, m, o);
      }
      a(o, c, u, d, f, l, g);
    }
  }
  function r(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Qx[i(370)];
}
var Xx, is;
function or() {
  const i = n;
  if (is) return Xx;
  is = 1;
  var x = M2(), t = ir(), r = Ze(), e = da(), s = $2();
  Xx = a, a[i(1484)] = E, a.fullPath = m, a[i(428)] = N, a.ids = O, a.inlineRef = l, a[i(595)] = o;
  function a(R, P, C) {
    const A = i;
    var D = this[A(506)][C];
    if (typeof D == A(1401))
      if (this[A(506)][D]) D = this[A(506)][D];
      else return a[A(459)](this, R, P, D);
    if (D = D || this[A(539)][C], D instanceof e) return l(D[A(595)], this._opts.inlineRefs) ? D[A(595)] : D[A(1974)] || this[A(1230)](D);
    var M = o.call(this, P, C), F, q, U;
    return M && (F = M[A(595)], P = M.root, U = M.baseId), F instanceof e ? q = F[A(1974)] || R[A(459)](this, F[A(595)], P, void 0, U) : F !== void 0 && (q = l(F, this[A(729)][A(1135)]) ? F : R[A(459)](this, F, P, void 0, U)), q;
  }
  function o(R, P) {
    const C = i;
    var A = x[C(2517)](P), D = v(A), M = m(this[C(617)](R.schema));
    if (Object[C(2109)](R[C(595)])[C(1396)] === 0 || D !== M) {
      var F = E(D), q = this[C(506)][F];
      if (typeof q == "string") return c.call(this, R, q, A);
      if (q instanceof e)
        q[C(1974)] || this[C(1230)](q), R = q;
      else if (q = this[C(539)][F], q instanceof e) {
        if (q[C(1974)] || this[C(1230)](q), F == E(P)) return { schema: q, root: R, baseId: M };
        R = q;
      } else return;
      if (!R[C(595)]) return;
      M = m(this._getId(R[C(595)]));
    }
    return d[C(459)](this, A, M, R.schema, R);
  }
  function c(R, P, C) {
    const A = i;
    var D = o[A(459)](this, R, P);
    if (D) {
      var M = D[A(595)], F = D[A(945)];
      R = D[A(667)];
      var q = this._getId(M);
      return q && (F = N(F, q)), d.call(this, C, F, M, R);
    }
  }
  var u = r[i(2541)]([i(892), i(2250), i(1587), i(2483), i(2127)]);
  function d(R, P, C, A) {
    const D = i;
    if (R[D(788)] = R[D(788)] || "", R[D(788)][D(1012)](0, 1) == "/") {
      for (var M = R[D(788)][D(1031)]("/"), F = 1; F < M[D(1396)]; F++) {
        var q = M[F];
        if (q) {
          if (q = r[D(1776)](q), C = C[q], C === void 0) break;
          var U;
          if (!u[q] && (U = this[D(617)](C), U && (P = N(P, U)), C[D(2009)])) {
            var $ = N(P, C[D(2009)]), V = o[D(459)](this, A, $);
            V && (C = V[D(595)], A = V[D(667)], P = V[D(945)]);
          }
        }
      }
      if (C !== void 0 && C !== A[D(595)]) return { schema: C, root: A, baseId: P };
    }
  }
  var f = r.toHash([i(1087), i(2330), "pattern", i(2170), i(1539), "maxProperties", i(2140), i(1241), "minItems", i(2489), i(1699), "uniqueItems", i(819), i(1830), i(1587)]);
  function l(R, P) {
    if (P === !1) return !1;
    if (P === void 0 || P === !0) return g(R);
    if (P) return h(R) <= P;
  }
  function g(R) {
    const P = i;
    var C;
    if (Array[P(1606)](R)) {
      for (var A = 0; A < R[P(1396)]; A++)
        if (C = R[A], typeof C == P(1507) && !g(C)) return !1;
    } else for (var D in R)
      if (D == "$ref" || (C = R[D], typeof C == "object" && !g(C))) return !1;
    return !0;
  }
  function h(R) {
    const P = i;
    var C = 0, A;
    if (Array[P(1606)](R)) {
      for (var D = 0; D < R[P(1396)]; D++)
        if (A = R[D], typeof A == P(1507) && (C += h(A)), C == 1 / 0) return 1 / 0;
    } else for (var M in R) {
      if (M == P(2009)) return 1 / 0;
      if (f[M]) C++;
      else if (A = R[M], typeof A == "object" && (C += h(A) + 1), C == 1 / 0) return 1 / 0;
    }
    return C;
  }
  function m(R, P) {
    const C = i;
    P !== !1 && (R = E(R));
    var A = x[C(2517)](R);
    return v(A);
  }
  function v(R) {
    const P = i;
    return x[P(1480)](R)[P(1031)]("#")[0] + "#";
  }
  var S = /#\/?$/;
  function E(R) {
    return R ? R[i(1783)](S, "") : "";
  }
  function N(R, P) {
    return P = E(P), x.resolve(R, P);
  }
  function O(R) {
    var P = E(this._getId(R)), C = { "": P }, A = { "": m(P, !1) }, D = {}, M = this;
    return s(R, { allKeys: !0 }, function(F, q, U, $, V, J, s0) {
      const i0 = K;
      if (q !== "") {
        var d0 = M._getId(F), l0 = C[$], f0 = A[$] + "/" + V;
        if (s0 !== void 0 && (f0 += "/" + (typeof s0 == i0(1985) ? s0 : r.escapeFragment(s0))), typeof d0 == "string") {
          d0 = l0 = E(l0 ? x[i0(1315)](l0, d0) : d0);
          var y0 = M._refs[d0];
          if (typeof y0 == "string" && (y0 = M._refs[y0]), y0 && y0.schema) {
            if (!t(F, y0[i0(595)])) throw new Error(i0(1555) + d0 + i0(895));
          } else if (d0 != E(f0))
            if (d0[0] == "#") {
              if (D[d0] && !t(F, D[d0])) throw new Error(i0(1555) + d0 + '" resolves to more than one schema');
              D[d0] = F;
            } else M[i0(506)][d0] = f0;
        }
        C[q] = l0, A[q] = f0;
      }
    }), D;
  }
  return Xx;
}
function Nx() {
  const i = ["keys", " (division", "Uncaught error in notification handler: ", "         , parentSchema: validate.schema", "cacheKey", ") { if (vErrors === null) vErrors = ", "2.0", "usedParams", "; }   var err =   ", "nestingPrefix", "toUpperCase", "currentNodeId", "errors", "setItem", ".length == 0) {", "isOpen", "isDatetime", " !== undefined) { ", "definitions", "additionalProperties", '" was not yet loaded', "body", "second", "https", "output", "nestingRegexp", " = null; try { ", "Get image from Current Layer", "removeEventListener", "coerceTypes", "appendNamespaceToMissingKey", "minProperties", "Host's domain name can not be converted to ASCII via punycode: ", "toUnicode", " ) { ", "formatters", "setInterval", "NOT_QUERY", "Model with affordable price, abundant community applications", "uiWeight", "apd", "lastPongReceived", "自动同步: 开启", "exactLength", "Action ", "closeHandlers", "resources/list", "extractFromKey", " not implemented for node ", "fromCharCode", " , params: { allowedValue: schema", "index", "#FF3366", "toLowerCase", "Required", "errorsText", "hasOwnProperty", "coerceToTypes", "locale", "#/definitions/simpleTypes", "-arab", "maxLength", ", received ", " , schema: ", "setupStreamResponseHandler", "#3366CC", "setComfyOrgAPIKey", "[MCPMiddleware]", " when property ", "secs", "getRegExp", " != 'string') || ", "responseSchema", " , validate.schema", "ZodLazy", " = RULES.custom['", "invalid_union", "addKeyword", "removeSchema", "setupStreamProtocolHandlers", "Meta-schema for $data reference (JSON Schema extension proposal)", "Values", ".length == 1) { ", ` , message: 'should pass "`, "getTransportToNode", " if (true) { ", "ZodTuple", "cleanupConnection", "data", "_def", "minute", " + ", "create", "Failed to check workflow state changes:", "Copy", "widgetableStructure", "ckb", "&#x2F;", "async keyword in sync schema", "fullPath", "Confirm", "ZodBigInt", "Email address's domain name can not be converted to ASCII via punycode: ", "more than", "subscribe", "Outpaint (positive crop)", "inclusive", "capabilities", "success", "整个画布", " }   ", "Boundary", "OpenAI/Google 格式API", "day", "IPV4ADDRESS", "loadResources", "shift", "console", "languageChanging", "forEach", "dataPathArr", "translation", "uniqueItems", "heartbeatTimeout", "layer not found {0}", " ms", "ConnectionClosed", " */", "regex", "registerStreamRequestorHandler", ".validateSchema(", "++) if (equal(", "waiting for queue prompt", ")) {  var err =   ", "setupGraphStoreSync", "expected", "_requestMessageId", "send", "__cycle__", "设为当前图层", "getProperty", "patternProperties", "_progressHandlers", ")) { ", "missingRef", "connecting", "dataProperties", "silent", "supportedLngs", "clientInfo", "批次数量", "onprogress", "No connection available for node ", "optional", "discriminator", "组 {{0}} 中没有第一个相关图层", "Validation failed but no issues detected.", "Server does not support logging (required for ", "#66CC00", " var itemIndices = {}, item; for (;i--;) { var item = ", "valueSchema", " ); if (isAdditional", " to ", "_serverInfo", "segment", "RULES", "common", "interpolator", "assertNever", "Desire bounds is null", "保存所有", "你的工作流", "error", "actions", "prevValid", "statusText", ") || ", "comfy_api_key", "returnedObjectHandler", "ZodUnion", "race", "Empty", '" (see option extendRefs)', "addRule", "edges", "syncStoresToNewConnection", "formatParams", "找不到文档: {{0}}", "Invalid forward path for proxy action", "lte", "ZodError", "subfolder", " = errors;", "validateSchema", " = vErrors[", "Gateway timeout (504)", "defaults", "获取图层信息", "_getInvalidInput", "#9900FF", "onerror", "keySeparator", "Aborted", "getCapabilities", "ParseError", "#0099FF", "jsonStringifyReplacer", "none", "/else", "markDisconnected", "runningRequests", "{2}", "Invalid discriminator value. Expected ", "[^0-9]", "Node ", "notificationQueue", "debugDisableHeartbeatResponse", "elicitInput", "]; if (", "start", "initializeConsumer", "format", "parseInt", "gte", "json", "dirty", "WARNING DEPRECATED: ", "_cachedPath", "strictKeywords", "rootId", "maxValue", ` , message: 'should match format "`, "Store not found for current node ", "utils", "Failed to get result: {{error}}", "_pendingDebouncedNotifications", "resourceName", "/required", " , params: { property: '", "reset", "safeParse", "endsWith", " , message: 'should be equal to one of the allowed values' ", "请求超时 (408)", " ) : ( (", "context", "#FF3399", "unicode", "sdppp/streamRequest", "self", "loadSchema", "kPanelBrightnessMediumGray", "years", "Fit to current layer", "getConnectedNodeIds", "createStreamState", ").length ", "stack", ") {  ", "hostVersion", "comfy side transport.onerror", "ulid", "from", "Import as New Document", "reset=false but needsReset: ", "state", "postProcessor", "$schema must be a string", " | ", "execution_success", "substr", "ajv", "Please select AI service", "Failed to request initial states after connecting to ", " , params: { type: '", "warning", "正向裁剪", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "postMessage", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "#FF00CC", "arq", "abortRequest", "uploadComfyImageFromUXP", "hasLoadedNamespace", "extendRefs", "   ", "nid", "removeResourceBundle", "oneOf", ") && ", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "ZodIntersection", "addMiddleware", " !== parseInt(division", "processors", "A discriminator value for key `", "stopSequence", "exact", ".dataPath === undefined) ", "prd", "Unexpected dot segment condition", "1460694TccbDe", " : ", "loadLanguages", "argumentsError", "tolerant", "mergeArray", "{0,5}", "localeCompare", "datetime", "[\\:\\@]", "Node definition not found for ", "#00CC66", "Document {{0}} not found", "var ", "value", "disable", "queues", "ifClause", "unrecognized_keys", "createMessage", "workflowManager", "Save current", "ASCII", "checkDataTypes", "NOT_USERINFO", " instanceof RegExp) && ", "]) ", "clone", "typeof ", "registerDirectRequestHandlerGeneric", "position", "disconnected", "finished", "Save all", "Unauthorized (401)", "exclusiveMinimum", "Paste your model name", "async", "prefix", "cacheInBuiltFormats", "Send to PS", "queue", "addResources", "exactly", "isRequest", "Connection closed", "i18nFormat", "&lt;", "instructions", "uuid", "timeout", "Please login to use the plugin", "await ", "defaultVariables", "services", "3rdParty", "pre", "Auto fetching…", "queue_remaining", " if (!", "symbol", 'Invalid input: must include "', " than ", "Bounds", "listWorkflows", "质量{{percent}}%", "should have required property \\'", "OpenAI/Google format API", "extendTranslation", "getDataByLanguage", "ZodDate", "objectValues", "dependencies", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "passingSchemas", "26TtZGVG", "order", "item", "maximum", "' + ", "_instructions", "urn:uuid", "toResolveHierarchy", "signal", "保存并立即执行", "[GraphStoreSynchronizer] Error broadcasting state update for ", " } else { ", "prototype", "getLanguagePartFromCode", " && !(", "MCP error ", "processCode", "hasNotificationHandler", ".validate", "contextualErrorMap", "fewer", " , params: { missingProperty: '", "saveMissingPlurals", "1918220NgJxkW", " in ", "Unknown", "warn", "(typeof ", "mergeObjectSync", "invalid_intersection_types", "coerced", "parse", " = 'then'; ", "payload", "round", "_transport", "ordinal", "req_", "Rectangle coordinates required for create action", "diff", " ( ( ", "Server does not support resources (required for ", "No Intl support, please use an Intl polyfill!", " , params: { limit: ", "Clear", "Server does not support notifying about resources (required for ", "maxParallelReads", "addEventListener", "startsWith", " validate.errors = null; return true; ", "_onnotification", " { keyword: '", "source", " -> ", "Exclude selection", "toHash", "_options", " != 'number') || ", " = false; for (var ", " , params: { additionalProperty: '", "options", "Heartbeat timeout for poster ", "no plural rule found for: ", "_parse", "_errorDataPathProperty", "parentData", "#33CC66", "ssh", "nodeTransports", "] = ", "prepareLoading", " for (var ", "exec_info", "removeMessageEventListener", "$el", "Canvas bounds", "if (", "Outgoing message:", "abv", "[A-Za-z]", "[object Function]", ".dataPath = (dataPath || '') + ", "constructor", "显示发送的图片", "yrs", "interpolation", ") vErrors.length = ", "'[' + ", " = equal(", "setResolvedLanguage", "implementAction", "反向裁剪(Inpaint)", "namespaces", "strict", "off", "name", "sdppp/broadcast", "applyPostProcessor", ") { for (var ", " = errors === errs_", "strip", " , message: 'should contain a valid item' ", " = typeof ", "schemaPath", "tools", "目标边界为空", "isLanguageChangingTo", " = errors;  ", "loadOne", " % 1)", "joinArrays", "#FF0033", "apply", "greater than ", "/then", "parseAsync", "defaultError", "uiWeightSum", "_any", "heartbeatTimer", "__internal_", " delete ", "#/definitions/schemaArray", " = ", "oninitialized", "clear", "return", "%c ", "mins", " else if (", "Service unavailable (503)", "Login Successful", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", " , params: {} ", "resolveComponents", "_limitItems", "out", "isRoot", ", deps: '", "false schema", "maxReplaces", "filter", "initialState", " var i = ", "read", "Overflow: input needs wider integers to process", "openWorkflow: ", "messageType", "join", "设为画布", ".validate; } if (  ", "bigint", " = errors;var ", "[\\.]", "removeItem", "reconnecting", "createGlobalDispatcherForType", "yih", "toASCII", "Please select the position to send image", "false", "createInstance", "pctEncChar", "initializeResponseQueue", "removeNamespaces", "updateMissing", "Notification interceptor failed for ", "notifications/roots/list_changed", "nodeIndexes", "i18next:", "  var err =   ", "_cached", "failed", "isInitializing", ";if (", "[BroadcastManager] Error forwarding broadcast:", "additionalItems", "Input Image", "NOT_PATH_NOSCHEME", "graphInstance", " for language ", "17465IpZeKn", "shu", "Cloud:", "http://json-schema.org/schema", "Action {{0}} 未找到", "defaultMeta", " var schema", " != 'boolean') ", "More actions", "handleIncomingMessage", "forwarded", "rootData", "Create document for preview", "Server does not support tools (required for ", "base64url", " || Object.keys(", 'schema with key or id "', "pbu", "origin", "无法从文件创建文档", "#FF0099", "keywords", "#0099CC", "click", "isFinite(", "next", "initializedStoreOnce", "__internal_requestInitialState_", "nodeId", "test", "$async", "interpolationkey", "precheck", "#0066FF", "stringify", "en-US", "catchall", "PS遮罩", "上传中，如果图片过大，可能会卡顿...", "###", "') ", " === 1) ", " ? await ", "$id", "ZodVoid", "merge", "catch", "Quality {{percent}}%", "12eVDCPf", ".errors); errors = vErrors.length; } ", "schemaHasRulesExcept", "exclIsNumber", "找不到图层: {{0}}", "implementInternalAction", "此处粘贴 WebApp ID", "Press Enter to open app: {{appName}}", " in key: ", ` , message: 'should match "' + `, "backend", "#CC3333", "Not implemented (501)", "Error in direct request ", " = errors; var ", " , params: { format:  ", "getClientCapabilities", "pending", "isInitialized", " if (! ", "', depsCount: ", "#CCCC33", "unsetOutgoingRequestInterceptor", "request", "Error in broadcast handler for ", "Invalid proxy forwarding: current node ", "xmn", "photoshop.no_active_layer", "exports", "ZodNullable", "optionsMap", "Your powerful node-based workflow engine", "Expected ", "/properties", "_onprogress", "saveMissingTo", "removeDefault", "workflows", "pluralCategories", "delete", "def", "skipKeywords", "显示预览框 ({{count}}张图片)", "IPV6ADDRESS", "mode", "activeWorkflow", "heartbeatInterval", "INTERCEPTOR_ERROR", "pendingCount", "NOT_PATH", "Received host version from UXP:", "Number must be finite", "entries", "days", "prompts", "Cycle detected: ", "[\\:\\/\\?\\#\\[\\]\\@]", " === ", "msec", "2025-03-26", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", "重启ComfyUI失败", "requestInitialStateForNode", "Positive Crop", "saveWorkflow", "#CC33FF", " = 'else'; ", "propsKeywords", "invalid_type", "510", "UNRESERVED", "copy", "defineProperty", "storage", " , schema: false , parentSchema: validate.schema", "null", ") {   ", "yud", "activeState", "timeoutId", "退出登录", "alwaysFormat", " throw new ValidationError([", "ayn", "sampling/createMessage", "kind", "url", "获取图层 {{0}} 的内容", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "getAllReachableNodes", "assertIs", "Received a response for an unknown message ID: ", " {} ", "addNamespaces", ")) { if (vErrors === null) vErrors = ", "ZodDiscriminatedUnion", "cycles", "initializeNodeStores", "getDefinition", "keySchema", " / ", "Google Gemini 图像生成器", "toQuotedString", " < ", "_regex", "Selection", " if (rootData === undefined) rootData = data; ", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, ".pi-sign-out", "当前任务数:", "pluralSeparator", "AbortSignal is already aborted", "status", " = validate.schema", "_requestHandlerAbortControllers", " if (true) {", "sampling", "call", "mesh:workflow", " var isAdditional", "alwaysSet", ".type || 'string'; if (", "提示词", "requestsIntercepted", "append", "  )  ", ") break; } ", "property", "resolveRef", "选择 AI 服务提供商", "Error handling incoming message:", "#3300CC", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", 'no schema with key or ref "', "returnEmptyString", "setWidgetValue", "setupTransportHandlers", "cuid2", "iterator", "nodes", "Server does not support notifying of tool list changes (required for ", " !== undefined && ( typeof ", ".errors; else vErrors = vErrors.concat(", "nodeStores", "; if (!", "compositeRule", "toNode", "parseMissingKeyHandler", "errs__", "unionErrors", "&#39;", "getRegisteredActions", "#/definitions/nonNegativeInteger", "$$$$", " var startErrs", "get_layer_info: 需要 layer_identify", " + '\\']'", "基础 URL", "findPath", "Request timed out", " && !Array.isArray(", " ) || ", ") - division", "isBase64", "_refs", "Stop and cancel all", "true", "items", " = true; ", "Get layer info", "there was no format function for ", "modifying", "text", "requestInfo", "_cache", "Graph must have at least one node", "Failed to create document from file", "freeze", "element", "exclusive", " = false , ", "点我恢复", "newlayer_curlayer", "#FF9933", "arz", "Get content of layer {{0}}", "ownProperties", "schema should be object or boolean", " if (false) { ", " = true; else if (!Array.isArray(schema", "keyType", "%25", "_processInputParams", "usePattern", "Schema ", "catchValue", " var err = ", "_schemas", "result", "unescapeComponent", ".async; ", "connect", "requestHandlers", "getBestMatchFromCodes", "没有活动文档", " && ", "custom keyword definition is invalid: ", "(\\.\\d+)?", "max", "Show Preview ({{count}} images)", "', missingProperty: '", "setupNodeBindings", "Back", "Invalid graph definition: ", " = [", "notificationHandlers", "); if (!", "invalid_union_discriminator", "setNotificationHandler", "调整预览文档尺寸", "[0-5]\\d", "No linked layer for {{0}}", "finite", "mergeObjectAsync", "requestedSchema", "' , dataPath: (dataPath || '') + ", "pattern", "destroy", "returnDetails", " = false; else if (", " var schemaExcl", "listRoots", "api", "Discriminator property ", "reload", " = true , j; if (i > 1) { ", "notifications/prompts/list_changed", "regExpMap", " not found for current node ", "const", "unwrap", "No handler for streamRequestor: ", "minSize", " ? '", " failed", "formatLanguageCode", "smaller than or equal to", "useCustomRule", "ZodCatch", "removeAdditional", "ids", "auth.guest_login_success", "debouncedNotificationMethods", "schema", "_loadingSchemas", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "sourceCode", "No backend was added via i18next.use. Will not load resources.", "_refinement", "promise", "_fragments", "2722290jnGDlU", "; }", "暂无图片", "ZodNaN", "checkState", "任务取消失败: {{error}}", "Invalid action: {{action}}", "click to restore", " else throw new ValidationError(vErrors); ", "./api/manager/reboot", "ZodAny", "notification", "removeRequestHandler", " = '' + ", "_getId", "Create layer failed", "parsedType", " validate.errors = vErrors; return false; ", " == ", "transports", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "log", "Get selection failed", "图层 {{0}} 不是一个组", "Comfy.userId", "jpr", "invalid_date", "minValue", "charCodeAt", "tools/call", "array", "Invalid", "3680LkbYUA", "nonempty", "shared", "getProtocol", "rejectImage", "actionManager", " = true; if (", "hasLoadedNamespace: i18n.languages were undefined or empty", "meta", "run", "String must contain ", " , message: 'should be ", "cleanup", "issues", " = customRules[", "not_multiple_of", "indexOf", " = false; else {", "clearItems", "undefined", "ZodEnum", "xn--", "插件可能正在拦截 PS 快捷键... ", "executeHandlerAsync", "documentElement", "elicitation/create", "at most", "addResourceBundle", " == errors) { ", " , message: 'can\\'t resolve reference ", "params", "__connection_established", "root", "async schema in sync schema", "normalize", "Refresh", "schema $id is different from id", "#9933CC", "openWorkflows", "finally", "); if (", "ZodReadonly", ", exclusive: ", "Show sent images", "close", "abort", "objectKeys", "mergeShapes", "POST", "setupStreamRequestHandler", "http://json-schema.org/draft-07/schema#", "_requestHandlers", "email", "json-pointer", "]] === undefined ", " + ']'", "UUID is not valid.", "Images Per Batch", "performWorkflowReset: ", " } else if ( ", "Limit image size", "hasDefaultValue", "async schema referenced by sync schema", " == 'object' && !(", "Edge references unknown source node: ", "Task cancel failed: {{error}}", "propertyNames", " = true; else if (typeof ", "_onrequest", "formatType", "%[EFef]", "\\' is invalid' ", " !== undefined && typeof ", "not", " === null) ", "logging", "pluralResolver", "http://json-schema.org/draft-07/schema", "formatter", "app.queuePrompt caught", "6052653jnGMxo", "external", "Node not found", "#CC6633", "isTime", "full", "无法将文件作为文档打开: {{path}}", " == 'function' ? ", "getDefaultValueFromField", "]; }  ", "#CC33CC", "parentDataProperty", "自动同步: 关闭", "登录成功", "_opts", "正在创建任务...", " = errors , ", " , message: 'should match exactly one schema in oneOf' ", "extensionManager", "ignoreJSONStructure", "allKeys", " } }", "regexp", "Action {{0}} not found", "isSafeInteger", "sendResourceUpdated", "__nwjs", "rtl", "Comfy Manager未安装，无法重启", "canReachThroughConnectedNodes", "PS图片", "escapeValue", "missingRefs", "extend", "([+-]\\d{2}:?\\d{2})", "; else vErrors = null; }  ", "extra", "init", "less than", '.schemaPath = "', "mailto", "syncWorkflows", "push", "#3300FF", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", ")) {  ", "SDPPP可能未安装或和插件版本不匹配 (404)", "Clear all", "refinement", "isNullable", "valueType", "image.layer.smart_object", " === 'false' || ", "buffer", "strictNumbers", '" ignored in schema at path "', "buildDirectedAdjacencyList", "getNeighbors", "useDefaults", "more", "notifications/progress", "returnObjects", "fallbackNS", "setLimit", "definition", "at least", "ComfyUI加载中...", "waitingReads", "ZodPromise", "failedLoading", "safe", "arb", " must be number or boolean", "fragment", "color: inherit", "Failed to reboot ComfyUI", "streamRequest", "Auto Sync: off", "getRule", "types", "men", " , data: ", "mcpMesh", " != 'number' || ", "notifications/resources/updated", "]; ", "stats", "_metaOpts", "getResourceBundle", "image", ".else", "{3}", "stopAll", ".length ", "shape", "extract", "cloneInstance", "substring", "notice", "aborted", "setRequestHandler", "?\\:\\:", "ListFormat", "preprocess", "multipleOf", "当前选区", "[^\\%\\/\\@]", "aao", "received", "sdppp_widgetable_title", ") {   var err =   ", "errSchemaPath", " } }  ", "observers", "prompts/get", "detectCycles", "skipOnVariables", "nonExplicitSupportedLngs", "query", "querySelector", "execution_start", "asyncIterator", "formErrors", "#99CC00", "errs_", "changeTracker", "ruleErr", "left", "removeMiddleware", "prompts/list", "store", "res", "setState", "Array must contain ", "resourceStore", "usedLng", "exclusiveMaximum", "fromNode", "PS shortcuts may be blocked by plugin...", "ydd", "dataVar", "emoji", "getter", "' } ", " self._opts.$comment(", "refine", "Create guide frame", "method", "Canvas", "preload", "description", "missingKey", "outgoingRequestInterceptors", "Error", "getClientVersion", ")) ", "xaa", "overflow", "sdppp 选中图层", "请选择要发送图像的位置", "InvalidRequest", "action", "Keyword ", "_addCheck", "has", "msecs", "sdpppX2", "onmessage", "assertCanSetRequestHandler", " for nesting ", "externalListenMessageCallback", "Open images from file", " && Object.prototype.hasOwnProperty.call(", "HTTP URIs must have a host.", "exec", "; if (", " ucs2length(", "properties", "trim", "languages", '" resolves to more than one schema', "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "Workflow stopped by user", "ZodBoolean", "请登陆后使用插件", ", '", ".length , ", "addSchema", "exactly equal to ", `"' `, "info", "default", "resolved promise for", "点此获取RunningHub APIKey", "ComfyUI加载失败，HTTP状态码：{{code}}", "equal", "handle", "convert widget {0} failed:", "[^\\%]", " character(s)", "toLoad", "#6633CC", "_errors", "Negative Crop", "comfy-uxp", "pluralRulesCache", "exactUsedKey", "Auto send enabled", "{0,4}", "getData", " characters' ", " = true; break; }", "sendPromptListChanged", "'/' + ", "setOutgoingRequestInterceptor", "done", "loadGraphData", "Server error (500)", "set", "不支持非文本图层: {{0}}", "translator", "RH Coins:", "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ", "_compilations", "code", "sdk", "other", "[0]; ", "registerHandler", " = false; if (e instanceof ValidationError) ", "baseId", " console.log(", "util", "fallbackLng", 'key "', "find", "sdppp_assets", "isFinite", "自动填入画布关闭", "schemaUnknownRules", "reject", "  }  ", " = null; ", "__proxy_forward", "ping", "Run", "Select AI Service Provider", "prepend", "Create document", " === false || ", "Save", ".test(", "Invalid JSON-pointer: ", "inline", "isDate", "connected", "Area AI reads from; controls max image size", " = undefined; ", "Auto run after canvas change", "keyPrefix", "level", "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", " = e.errors; else throw e; } ", "Failed to request initial state for ", " === 0 || ", "label", "transport", " , params: { ref: '", "schemaId", "invalid_string", "requestsHandled", "now", "getTime", "Upload failed: ", "schemaErrorMap", "schemaHasRules", " != 'number') { ", "ZodOptional", "usedKey", "Get API Key", "isInteger", "Options", " via punycode: ", "URI is not a ", "var default", "loadNamespaces", "lngs", "outgoingNotificationInterceptors", "Validation", ".validate;", "removeCatch", "loading namespace ", "graphChanged", ") && (missing", "Tutorial", "abs", "safeParseAsync", "slice", "macro", "setupGeneralBroadcastHandler", "按住 Shift 键以新文档方式导入", "currentOnly", "queuePrompt", "process", " == 'number' || ", "heartbeatTimeoutTimer", "formData", "fallbackNotificationHandler", "#FF00FF", ") continue; ", "initialize", "floor", "widgets", "mountedEndpoints", "Array.isArray(", "使用教程", "split", "25[0-5]", "ValidationError", "/additionalProperties", "Input Setting", "ayl", "ref/prompt", "response", "too_small", "loaded namespace ", "{4}", " element(s)", "missingSchema", "notifications/tools/list_changed", "errorMap", "humanize", "coerce", "errorPath", "_responseHandlers", "Failed", "[GraphStoreSynchronizer] Error processing store update for ", "ZodNativeEnum", "#0033FF", "2024-11-05", "tDescription", "acq", "findPathInternal", "getConnectionInfo", "lazycreate", "negative", "{6}", "#CC0099", "MIN_SAFE_INTEGER", ") { var op", "unescapePrefix", " var ", "valueOf", " ? ", "isTransportReady", "separator", "subject", "resolveRunImages", "removeKeyword", "validation", "nullish", "connectedNodes", "addMessageEventListener", "onclose", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "1.0.0", "Delete current", "保存当前", "notificationsIntercepted", "/additionalItems", "reason", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "type", "assign", "nsSeparator", "toString", " = +", "validateKeyword", "Task cancelled", "time", "正向裁剪(Outpaint)", "anyOf", "_parseSync", " = 0; ", "uri", "适配至当前图层", "isNaN", "headers", "invalid_arguments", "addLookupKeys", "withTimeout", "#CC6600", "empty", "_timeoutInfo", "You are passing an undefined module! Please check the object you are passing to i18next.use()", "prompt_ids: ", " , message: 'should be equal to constant' ", "Incoming message:", '" for languages "', "listenMessageCallback", ", received '", "ComfyUI failed to load, HTTP status code: {{code}}", "ComfyManager not found, cannot reboot", "concat", ".length > ", "escapeFragment", "interpolate", "Invalid boundary: left must be less than right, top must be less than bottom", "offset", "stateUpdate", "删除当前", "反向裁剪", " if (!(await ", ".schemaPath === undefined) { ", "refs", " else { ", "Invalid date", "roots/list", "从 选区 获取遮罩", "port", "inlineRefs", "multipleOfPrecision", "init: no languageDetector is used and no lng is defined", "Failed to send response: ", "getResource", "#33CCCC", "Generate", "Entire Canvas", " = false; ", "postProcessPassResolved", "interceptor_error", "exclType", "Logout", "正在上传...", ".validate; var ", "env", "registerProxyForwardHandler", " !== undefined) {  ", "errorHandlers", "_cleanupTimeout", "Select layer", "isURL", "put", " - no connection available", "_key", "zero", "custom", "{5}", "cancel", "contentEncoding", "isIP", "Get pixel of {{0}} failed", "simplifyPluralSuffix", "pong", " } } else { ", "Running for {{duration}} secs, {{message}}", "skips", "widgetable", "$comment", "Google Gemini Image Generator", "jsonPointers", "defaultNS", "pctDecChars", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "URI can not be parsed.", "detail", "document {0} not found", "backendConnector", "execution_error", "effect", "skipCopy", "生成中...", "#CC3300", "[\\:\\@\\/\\?]", "relative-json-pointer", " else {   ", "progress", ".length; ", "#CCCC00", "isCUID2", "isBase64url", "waiters", "_clientVersion", "escapeQuotes", "newdoc_canvas", "Loading...", '$ref: validation keywords used in schema at path "', "getNodeStore", "#00CCCC", "not-basic", "#FF0000", "[\\+\\-\\.]", "dev", " } else {  errors = ", "splice", "Unrecognized key(s) in object: ", "maxTotalTimeout", "_getCached", " %c", "flatten", " Math.abs(Math.round(division", "zh-CN", "canvas", "__DEFAULT__", "#FF3333", "#6600CC", "|0?0?", "禁止访问 (403)", "count", "validation failed", "path", "addIssue", "map", "ary", "Batch Count", "_compile", "未授权 (401)", "size", "Unknown error ({{code}})", " items' ", "Generating", "不裁剪", "getSuffixes", "addPostProcessor", "getConnectionCount", "isEmpty", "maxItems", "isConnected", "[i]; ", "get_layer_info: layer_identify required", "alg", "openWorkflowJSON", "nan", "continueOnInterceptorError", "messageHandlers", "isValidLookup", " if ( ", "仅当前图层范围", "#9933FF", "fallbackRequestHandler", "callback", "languageChanged", "smartobject", " || ", "logger must implement log, warn and error methods", "peo", "请选择AI服务", "version", "  for (var ", "; var ", " cannot be resolved", " , ", "$schema", "loaded", "sdpppHandshake", "WebkitAppearance", " has duplicate value ", "getNodeIds", "executing", "if ( ", "通道连接中...", "Close", " = false; break outer; } } } ", " , params: { passingSchemas: ", "step", "+Alt reversed mask", "自定义AI工作流引擎", " is already defined", "getSchema", "throwIfAborted", "更多操作", "获取像素失败: {{0}}", "; } catch (e) { ", "选区除外", "uxpHost", "broadcastManager", "ESCAPE", "resources/templates/list", "  } ", "initialized", "checkDataType", "parent schema must have all required keywords: ", "photoshop.invalid_boundary_type", "getState", "missing", "flags", "ZodSet", "#FF33FF", "作为智能对象导入", "relativetime", "enable", "{1,4}", "allOf", "namespace", "{0,3}", "rules", "hours", "unknown keyword: ", "_validateKeyword", "zod", "resolve", "isTop", " , params: { failingKeyword: ", "文件未找到: {{path}}", "fail", " = true; if ( ", "_clientCapabilities", " , message: 'should have ", "buildAdjacencyList", "Hold Shift key to import as new document", "pipe", " , message: 'should NOT be valid' ", "Disk", "输入图像", ") { errors = ", "[object Number]", "sam", "NumberFormat", "'then'", "includes", "emit", "Already connected to node ", "sdppp/abort", " from id ", "Failed to open image file: {{error}}", "token", "Layer not found: {{0}}", " at one or more positions greater than or equal to ", "Uploading, if the image too large, may be lag...", "getTransportInternal", "broadcastHandlers", "_parseAsync", ") {", "=0; ", "schema $id ignored", "正在发送...", "$data", "valid", "ZodFunction", "comfyAPI is not initialized, maybe comfyUI is too old", "创建文档", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "varOccurences", "charAt", "some", "isNotification", "InternalError", "设置图层的文本", "addIssues", "get", "New Layer", "store:update:", "startHeartbeat", "#FF3300", "_notificationHandlers", "fullFilename", "]; var ", "ZodRecord", "ZodArray", "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "Forbidden (403)", "#33CC00", " if (", "ZodNull", "contains", "按选区裁剪", "pst", "lowerCaseLng", "[ ]*{", "metaSchema", "sdppp_workflow_alias", "filename", "/patternProperties/", "compiling", "passContext", "[i], ", "parent", "missingKeyHandler", "合并组失败", "getDefaultValuesFromSchema", "http", "length", " var errors = 0;     ", "readingCalls", "formatSeparator", "未实现 (501)", "string", "Create document failed", "Client does not support listing roots (required for ", "connectionManager", "prompt_id", "title", "stream", " return errors === 0;       ", "请输入您的 Google API Key", "newlayer_canvas", "_unknown", "realTransport", "all", "root.refVal[0]", "dataType", "invalid_return_type", "#/definitions/nonNegativeIntegerDefault0", "image/png", " break; ", " && !", " == 'string' && ", "sendLoggingMessage", "#FF6600", "notifications/resources/list_changed", "regExpQueue", "startTime", " if (Array.isArray(", "当前图层", "verbose", "_error", "Invalid ", "errToObj", "ZodBranded", "画布范围", "userAgent", "创建操作需要矩形坐标", "regexpUnescape", "Please select the image to get", "hour", "  if (!", "CurLayer", "secure", "++) { vErrors[", "isOptional", "interrupt", "getFallbackCodes", "给发送的图片创建文档", "completed", "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "removeDotSegments", "mountedTransports", "++) { var ", "missed to resolve ", "setPrototypeOf", " , params: { pattern:  ", "unescapeSuffix", "[^]", "schema id ignored", " = false;for (var ", "iri", '"object"', "画布变动后自动运行", "pga", "resetTimeoutOnProgress", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "duration", "Cannot forward to node ", "<errors; ", "afb", ") ? ", "Success", "__esModule", "detect", "/%2F", "removed", "assertNotificationCapability", "cacheUserLanguage", "跳转到最后一个", "workflow", "serialize", "+Shift 调整更多选项；Ctrl 单次获取。", "markConnected", "customRule", "normalizeId", "hbo", "del", "\\:\\:", "创建参考线框架", "curlayer_curlayer", "registerDirectRequestHandler", "hasOutgoingNotificationInterceptor", "init: i18next is already initialized. You should call init just once!", "varReplace", "#CC9900", "resolvedLanguage", "\\%25|\\%(?!", "brand", " , params: { keyword: '", "unknownKeys", "输入设置", "seconds", "react", "transform", "[\\:]", "refVal", "sdppp", "object", "aeb", "创建图层失败", " == 'boolean' || ", "channel", "No errors", "userinfo", "PluralRules", "{0,6}", "URN can not be parsed.", "cuid", "Clear guide frame", "contentMediaType", "如何获取APIKey", "not_finite", "usedNS", "resources/unsubscribe", "overwrite", "cimode", "cleanCode", "nss", "Gemini 2.5 Flash 图像", "#CC3399", " === undefined ", "relatedRequestId", "Creating task...", "property ", "(.+?)", "less than or equal to", "~validate", ".data = ", "languageOnly", "minLength", "currency", " === '' || ", "Email: {{email}}", "resetRegExp", "setupAbortHandler", "44eEiTaT", "生成中", "getValidEnumValues", "tried", "select", "Client does not support elicitation (required for ", "strictCreate", ".schema = ", ".additionalItems", " === null || (", 'id "', " , schema:  ", "rejecting language code not found in supportedLngs: ", " } ", "ucs2length", "prev", "bbz", "running", "#66CC33", "Select boundary", "#0033CC", "queueLoad", "新图层", "setProperty", "Not connected", "Execute", "Invalid enum value. Expected ", "); for (var ", "正在发送图像...", "#33CCFF", "formats", "addUsedSchema", "strictDefaults", "failed parsing options string in nesting for key ", "wss", "ltr", "errorDataPath", "handleIncomingRequest", "roots", " &&   Object.prototype.hasOwnProperty.call(", "[^\\%\\:]", "scheme", "enum", "boolean", "and", "[vV]", "keywordValidate", "initializeProducer", "=startErrs", " , schemaPath: ", "range", "Unicode", " == 'number' ? ( (", "innerType", "manuallyExtractDefaults", "selection", "messagePoster", " validate.errors = [", "Refresh workflow list", " not in path ", "invalid_literal", "isArray", "ctx", "precision", "])) { ", "Jump to last", "hasEdge", "openWorkflow", " == +", "app", "Synchronous parse encountered promise.", "addMetaSchema", " var validate = ", " = true;  ", "smaller than", "graph", "isDuration", "' : '", "#3333FF", "file://", "fast", "completion/complete", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "protocolVersion", "streamRequestorHandlers", "MissingRef", "useRawValueToEscape", "userDefinedKeySeparator", "Cannot register capabilities after connecting to transport", "invalid_enum_value", " already exists, which would be overridden", "sdppp/directRequest", "Action set {{0}} not found", "maxRetries", "validateHandlerType", "^\\[?(", "defaultValue", "RH币:", "skipInterpolation", "All", "_path", "#FF9900", "lng", ".hasOwnProperty(", "keyword", "isCUID", "#00CCFF", "handleIncomingNotification", "encountered", "originalError", "executeOutgoingRequestInterceptor", "properties ", "readonly", '" is used in schema at path "', "nanoid", "_getType", "exists", "sort", "ZodSymbol", "assert", "never", "node_id", "saveMissing", " try { await ", "notifications/initialized", "schemaExcl", " == null) ", "superRefine", "logger", "Invalid name: {{0}}", "isInt", "debug", "Remote", "content", " === undefined || ", "updateKey", "initImmediate", "ars", "getCurrentNodeId", "从 当前图层 获取图像", "onTimeout", "Fit to canvas", "++) { ", "AUTO", "2[0-4]", "overloadTranslationOptionHandler", " must be number", "_meta", " !== undefined) ; ", "请选择要获取的遮罩", "Number must be ", "Paste WebApp ID here", "added", "?\\]?$", "minimum", "创建文档失败", "createWithPreprocess", "avl", " , message: 'property name \\'", "Host's domain name can not be converted to ", "assistant", "notifications/message", "_limitProperties", "getCanonicalLocales", "messages", "停止并取消全部", "Received a progress notification for an unknown token: ", "lastIndex", "isObject", " } else {  for (var ", 'Invalid input: must end with "', "passthrough", "message", " , schema: validate.schema", "executeOutgoingNotificationInterceptor", "排队等待", "schema is invalid: ", "match", "var pattern", "Module", "comfy", ".errors", "resetStats", "ZodObject", " throw new ValidationError(vErrors); ", "适配至选区", "ZodUndefined", "favorites", "It seems you are nesting recursively key: ", "base64", "fromCodePoint", "async ", "capacity", "images", "loopRequired", "language", "typ", "isNANOID", "domainHost", "closeWorkflow", "自动获取中…", "week", "hrs", "正在等待图片上传...", "setDefaultNamespace", "forward", "comfyAPI", "requestIdSeq", "~standard", " if (errors === ", "acm", "nodeProxies", ".then", "date-time", "Shortcut selection feature requires login", "网关错误 (502)", "messageQueue", "AbortError", "从 画布 获取图像", "+Alt 反转遮罩", "; else vErrors = null; } ", "运行了 {{duration}} 秒，{{message}}", "Illegal input >= 0x80 (not a basic code point)", "Cannot access property/index ", "Server does not support prompts (required for ", "397460gWLOGv", " !== undefined ", "ignore", "Edge references unknown target node: ", "long", "PCT_ENCODED", "unescapeFragment", "exception_message", "Click to get RunningHub APIKey", "mesh", "任务执行失败: {{error}}", "arrayToEnum", "cache", "replace", "Waiting for image upload...", "sourceType", "Action handler ", "getNode", "&subfolder=", "longer", "Timeout", "key '", "userDefinedNsSeparator", "obj", "curlayer", "addFormat", "idx", "ZodLiteral", "isUUID", "Invalid input", "交集或缩放目标为空", "2025-06-18", "actionHandlers", "postProcess", "unknown", "mountTo", "InvalidParams", "_getOrReturnCtx", "unknownFormats", "Channel connecting...", ") { ", "fallback", "readOnly", "date", "停止自动运行", "joinValues", "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", "clearCache", "greater than or equal to ", "callValidate", "Method not found", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "cancelled", " levels up, current level is ", "Mask", ".call(this, ", "parentElement", "reloadResources", "changeLanguage", "ZodEffects", "required", "useColors", "pop", "lastIndexOf", "How to get APIKey", "arrayKeywords", "getPath", "ComfyUI server reconnecting", "customErrors", "sdppp-heartbeat", "broadcast", "Generating...", "audio", "addResource", "too_big", "]; } else { ", ") {  var err =   ", "Current Layer", "$dataMetaSchema", "JWT", "无效操作: {{action}}", "Intersect or scaledDesire is null", "sec", "MissingRefError", "after app.queuePrompt errors: ", "海量模型，稳定服务", "function", "selectColor", "   var err =   ", "sendStreamRequestorRequest", "languageUtils", "_capabilities", "Enter your RunningHub API Key", "opts", " } if (errors === ", "min", "云端推荐：", "MAX_SAFE_INTEGER", "hasPath", "reference", "' && !(typeof ", "pathname", "Set text to layer", "toFixed", "allErrors", "NOT_HOST", "/type", " = formats[", " if (typeof itemIndices[item] == 'number') { ", "#CC0000", "_addSchema", "_setupTimeout", "; } ", "加载中...", '" as the namespace "', "Request timeout (408)", "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "Your Workflows", "assertRequestHandlerCapability", "]; return false; ", "[\\-\\.\\_\\~]", " + '", "cmp", " , message: 'should NOT have ", "Cancel", "initAsync", " = await ", "resources/read", "modules", "protocol", "reduce", "posterIdentifier", "isSupportedCode", "sdppp/streamResponse", "compile", "ZodMap", "getFixedT", " ) ", "dir", "reverse", "integer", "acx", "getPathExpr", "createErrors", "getItem", "getTransport", "missingKeyNoValueFallbackToKey", "ZodDefault", "getUsedParamsDetails", "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "Layer not found {{0}}", "[0-9]", " } } ", "#FF6633", "else", "joinAs", " === undefined) ", "cidr", "作为新文档导入", "toJSON", "toStringTag", " == 'string' || ", "Create document for sent images", "+Alt crop by selection", '$ref: keywords ignored in schema at path "', "\\$&", "implements", "allServers", "_onclose", "escapeComponent", "#/definitions/stringArray", 'unknown format "', "Server does not support notifying of prompt list changes (required for ", "ZodString", "nullable", "Send all", " , message: '", "then", "accept", "&quot;", "values", "workflows/", "thisServer", "host", "yds", "#6600FF", "appendNamespaceToCIMode", "Current layer bounds", "[^\\%\\[\\]\\:]", "partialBundledLanguages", "ayh", " (async", "post", " if (schema", "nestingSuffix", "Request interceptor failed for ", " is present' ", "notifications/cancelled", "_onresponse", "languageDetector", "pick", "Failed to open file as document: {{path}}", "over", "ComfyUI服务器重连中", "validate", "nest", "); errors = vErrors.length;  for (var ", "auto", " || ! Object.prototype.hasOwnProperty.call(", "is a required property", " }  ", `" won't get resolved as namespace "`, " var async", "dataLevel", "disconnect", "number", "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "uxp", "executed", "选择边界", "safeValue", "(new RegExp(", "sendToolListChanged", "hasResourceBundle", "apc", "resolvedOptions", "]); ", "Error compiling schema, function code:", "resource_link", "Cloud-based model service platform", "notificationsHandled", " var vErrors = null; ", "执行失败", "Date must be ", "options.loadSchema should be a function", "Enum", "same-document", "unicodeSupport", "curlayer_selection", "$ref", " !== ", ".length <= ", "default is ignored in the schema root", "curr", "suffix", " === null || ", "  errors = ", "useDefault", "#33CC33", "0?[1-9]", " || validate.schema", "positive", "key", "Elicitation response content does not match requested schema: ", "user", "Outgoing notification interceptor failed: ", "Run Photoshop Action", "获取结果失败: {{error}}", "maxProperties", ".additionalProperties", "jsonrpc", "isCIDR", "localRefs", "checks", "spa", "one", "minItems", " not found on node ", " === undefined) { ", "setter", "AI使用的区域与最大尺寸控制", "ZodNever", "ZodPipeline", "isClone", "forwardBroadcast", "bind", "++) { if (", " not found for node ", "__proto__", "names", "resources", "Waiting in queue", "RequestTimeout", "DEBUG", " == errors) {", ", validate.root.schema);", "colors", "keyword schema is invalid: ", "Notification handler failed for ", " , parentSchema: validate.schema", "jwt", " var missing", "add", "default is ignored for: ", " ) {   ", "retryTimeout", "4413AsAJlI", "Inpaint (reverse crop)", "uiLocale", "getScriptPartFromCode", "validateStreamRequestorRequest", "获取 API Key", "fatal", "hasOutgoingRequestInterceptor", "interceptorTimeout", "_formats", "$t(", "getSuffix", "; if (vErrors !== null) { if (", "formatArgs", "describe", "创建预览文档", "load", " , message: 'boolean schema is false' ", "validate.schema", "Unknown message type: ", "Running", "App ID:", "int", "ZodNumber", "rest", "请输入您的RunningHub API Key", '" already exists', "MethodNotFound", "服务不可用 (503)", "decline", "strong", "%[89A-Fa-f]", "milliseconds", "color", "urn", "_onerror", "comfy-entry", " should be boolean' ", ` , message: 'should match pattern "`, "mesh:comfy", "enabled", "从文件打开图像", "限制图片尺寸"];
  return Nx = function() {
    return i;
  }, Nx();
}
var Yx, os;
function cr() {
  if (os) return Yx;
  os = 1;
  var i = or();
  Yx = { Validation: r(x), MissingRef: r(t) };
  function x(e) {
    const s = K;
    this[s(1717)] = s(1224), this.errors = e, this[s(2380)] = this[s(1074)] = !0;
  }
  t.message = function(e, s) {
    const a = K;
    return "can't resolve reference " + s + a(1338) + e;
  };
  function t(e, s, a) {
    const o = K;
    this.message = a || t[o(1717)](e, s), this[o(2253)] = i[o(428)](e, s), this[o(1043)] = i[o(1484)](i[o(2208)](this[o(2253)]));
  }
  function r(e) {
    const s = K;
    return e[s(2498)] = Object[s(2201)](Error[s(2498)]), e[s(2498)].constructor = e, e;
  }
  return Yx;
}
var _x, cs;
function fa() {
  return cs || (cs = 1, _x = function(i, x) {
    const t = K;
    x || (x = {}), typeof x === t(1856) && (x = { cmp: x });
    var r = typeof x[t(438)] === t(1588) ? x[t(438)] : !1, e = x[t(1892)] && /* @__PURE__ */ function(a) {
      return function(o) {
        return function(c, u) {
          var d = { key: c, value: o[c] }, f = { key: u, value: o[u] };
          return a(d, f);
        };
      };
    }(x[t(1892)]), s = [];
    return function a(o) {
      const c = t;
      if (o && o[c(1929)] && typeof o[c(1929)] == "function" && (o = o.toJSON()), o !== void 0) {
        if (typeof o == c(1985)) return isFinite(o) ? "" + o : c(417);
        if (typeof o != "object") return JSON[c(328)](o);
        var u, d;
        if (Array[c(1606)](o)) {
          for (d = "[", u = 0; u < o[c(1396)]; u++)
            u && (d += ","), d += a(o[u]) || c(417);
          return d + "]";
        }
        if (o === null) return c(417);
        if (s.indexOf(o) !== -1) {
          if (r) return JSON[c(328)](c(2247));
          throw new TypeError("Converting circular structure to JSON");
        }
        var f = s[c(757)](o) - 1, l = Object.keys(o)[c(1662)](e && e(o));
        for (d = "", u = 0; u < l[c(1396)]; u++) {
          var g = l[u], h = a(o[g]);
          h && (d && (d += ","), d += JSON[c(328)](g) + ":" + h);
        }
        return s[c(1209)](f, 1), "{" + d + "}";
      }
    }(i);
  }), _x;
}
var et, us;
function la() {
  return us || (us = 1, et = function(x, t, r) {
    const e = K;
    var s = "", a = x.schema[e(324)] === !0, o = x[e(947)][e(344)](x.schema, x.RULES[e(1413)], e(2009)), c = x[e(2358)]._getId(x.schema);
    if (x.opts.strictKeywords) {
      var u = x.util[e(954)](x[e(595)], x[e(2274)].keywords);
      if (u) {
        var d = e(1312) + u;
        if (x[e(1863)][e(2337)] === "log") x[e(1673)][e(2512)](d);
        else throw new Error(d);
      }
    }
    if (x[e(1316)] && (s += e(1617), a && (x[e(2448)] = !0, s += e(1736)), s += e(597), c && (x[e(1863)][e(598)] || x[e(1863)].processCode) && (s += " " + ("/*# sourceURL=" + c + e(2236)) + " ")), typeof x[e(595)] == e(1588) || !(o || x[e(595)].$ref)) {
      var t = e(252), f = x[e(975)], l = x[e(1983)], g = x[e(595)][t], h = x.schemaPath + x[e(947)][e(2249)](t), m = x.errSchemaPath + "/" + t, P = !x[e(1863)][e(1874)], D, v = e(2197) + (l || ""), R = e(1352) + f;
      if (x.schema === !1) {
        x.isTop ? P = !0 : s += e(1066) + R + " = false; ";
        var S = S || [];
        S[e(757)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + (D || "false schema") + e(567) + x[e(1048)] + e(1594) + x.util[e(444)](m) + " , params: {} ", x[e(1863)].messages !== !1 && (s += e(2083)), x[e(1863)][e(1429)] && (s += e(416) + x[e(2589)] + e(796) + v + " "), s += e(1558)) : s += " {} ";
        var E = s;
        s = S[e(1832)](), !x.compositeRule && P ? x.async ? s += e(424) + E + "]); " : s += e(1602) + E + "]; return false; " : s += " var err = " + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else x[e(1316)] ? a ? s += " return data; " : s += e(2535) : s += e(1066) + R + e(510);
      return x.isTop && (s += " }; return validate; "), s;
    }
    if (x[e(1316)]) {
      var N = x[e(1316)], f = x[e(975)] = 0, l = x[e(1983)] = 0, v = e(2197);
      if (x[e(2338)] = x[e(1315)][e(2208)](x[e(2358)][e(617)](x.root.schema)), x[e(945)] = x[e(945)] || x[e(2338)], delete x.isTop, x[e(2229)] = [""], x[e(595)].default !== void 0 && x.opts[e(773)] && x[e(1863)][e(1577)]) {
        var O = e(2012);
        if (x[e(1863)][e(1577)] === e(624)) x[e(1673)].warn(O);
        else throw new Error(O);
      }
      s += e(2001), s += e(1397), s += e(448);
    } else {
      var f = x[e(975)], l = x.dataLevel, v = e(2197) + (l || "");
      if (c && (x[e(945)] = x[e(1315)].url(x.baseId, c)), a && !x[e(2448)]) throw new Error(e(668));
      s += " var errs_" + f + e(2301);
    }
    var R = e(1352) + f, P = !x[e(1863)].allErrors, C = "", A = "", D, M = x.schema.type, F = Array[e(1606)](M);
    if (M && x.opts.nullable && x[e(595)][e(1944)] === !0 && (F ? M.indexOf("null") == -1 && (M = M[e(1118)](e(417))) : M != e(417) && (M = [M, "null"], F = !0)), F && M[e(1396)] == 1 && (M = M[0], F = !1), x[e(595)][e(2009)] && o) {
      if (x.opts[e(2394)] == e(1319)) throw new Error(e(1201) + x[e(826)] + e(2291));
      x[e(1863)][e(2394)] !== !0 && (o = !1, x[e(1673)][e(2512)](e(1934) + x[e(826)] + '"'));
    }
    if (x.schema.$comment && x.opts[e(1173)] && (s += " " + x.RULES[e(1413)][e(1173)].code(x, e(1173))), M) {
      if (x[e(1863)][e(2138)]) var q = x[e(947)][e(2166)](x[e(1863)].coerceTypes, M);
      var U = x[e(2274)][e(794)][M];
      if (q || F || U === !0 || U && !w0(U)) {
        var h = x[e(2589)] + ".type", m = x[e(826)] + e(1876), h = x[e(2589)] + ".type", m = x[e(826)] + e(1876), $ = e(F ? 2434 : 1295);
        if (s += " if (" + x[e(947)][$](M, v, x[e(1863)].strictNumbers, !0) + e(1810), q) {
          var V = e(1415) + f, J = e(2516) + f;
          s += e(1066) + V + e(2588) + v + "; var " + J + e(972), x[e(1863)][e(2138)] == e(633) && (s += " if (" + V + " == 'object' && Array.isArray(" + v + e(2399) + v + e(2191) + v + e(236) + v + e(942) + V + e(2588) + v + e(890) + x.util[e(1295)](x.schema[e(1087)], v, x[e(1863)][e(769)]) + ") " + J + " = " + v + e(1882)), s += e(1377) + J + e(1693);
          var s0 = q;
          if (s0)
            for (var i0, d0 = -1, l0 = s0[e(1396)] - 1; d0 < l0; )
              i0 = s0[d0 += 1], i0 == e(1401) ? s += e(242) + V + e(1019) + V + " == 'boolean') " + J + e(616) + v + "; else if (" + v + e(709) + J + " = ''; " : i0 == e(1985) || i0 == e(1910) ? (s += " else if (" + V + e(1510) + v + e(1554) + V + e(1421) + v + e(547) + v + e(1613) + v + " ", i0 == e(1910) && (s += e(2500) + v + e(2595)), s += e(870) + J + e(1091) + v + "; ") : i0 == "boolean" ? s += " else if (" + v + e(767) + v + e(979) + v + e(709) + J + e(571) + v + " === 'true' || " + v + e(335) + J + e(510) : i0 == "null" ? s += e(242) + v + e(1541) + v + " === 0 || " + v + " === false) " + J + " = null; " : x.opts[e(2138)] == e(633) && i0 == e(633) && (s += " else if (" + V + e(1931) + V + e(1019) + V + e(1510) + v + e(1671) + J + e(556) + v + "]; ");
          s += e(1190);
          var S = S || [];
          S[e(757)](s), s = "", x.createErrors !== !1 ? (s += e(2537) + (D || e(1087)) + "' , dataPath: (dataPath || '') + " + x[e(1048)] + e(1594) + x[e(947)].toQuotedString(m) + " , params: { type: '", F ? s += "" + M[e(261)](",") : s += "" + M, s += e(858), x[e(1863)][e(1709)] !== !1 && (s += " , message: 'should be ", F ? s += "" + M[e(261)](",") : s += "" + M, s += "' "), x[e(1863)][e(1429)] && (s += e(1718) + h + e(2059) + x[e(2589)] + " , data: " + v + " "), s += e(1558)) : s += e(434);
          var E = s;
          s = S.pop(), !x[e(487)] && P ? x[e(2448)] ? s += e(424) + E + e(1996) : s += " validate.errors = [" + E + "]; return false; " : s += e(538) + E + e(430), s += " } if (" + J + e(1152);
          var f0 = l ? "data" + (l - 1 || "") : e(2551), y0 = l ? x[e(2229)][l] : e(726);
          s += " " + v + e(236) + J + "; ", !l && (s += e(2562) + f0 + " !== undefined)"), s += " " + f0 + "[" + y0 + e(2555) + J + "; } ";
        } else {
          var S = S || [];
          S[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += " { keyword: '" + (D || e(1087)) + e(567) + x[e(1048)] + e(1594) + x[e(947)][e(444)](m) + e(2383), F ? s += "" + M[e(261)](",") : s += "" + M, s += e(858), x[e(1863)][e(1709)] !== !1 && (s += e(646), F ? s += "" + M[e(261)](",") : s += "" + M, s += "' "), x.opts[e(1429)] && (s += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + x[e(2589)] + " , data: " + v + " "), s += " } ") : s += e(434);
          var E = s;
          s = S[e(1832)](), !x.compositeRule && P ? x[e(2448)] ? s += " throw new ValidationError([" + E + e(1996) : s += " validate.errors = [" + E + "]; return false; " : s += e(538) + E + e(430);
        }
        s += e(1558);
      }
    }
    if (x[e(595)][e(2009)] && !o) s += " " + x[e(2274)][e(1413)][e(2009)][e(939)](x, e(2009)) + " ", P && (s += e(1864), N ? s += "0" : s += e(839) + f, s += ") { ", A += "}");
    else {
      var S0 = x[e(2274)];
      if (S0) {
        for (var U, M0 = -1, C0 = S0.length - 1; M0 < C0; )
          if (U = S0[M0 += 1], w0(U)) {
            if (U[e(1087)] && (s += e(1377) + x[e(947)][e(1295)](U[e(1087)], v, x[e(1863)][e(769)]) + e(1810)), x[e(1863)][e(773)]) {
              if (U[e(1087)] == e(1507) && x[e(595)].properties) {
                var g = x[e(595)].properties, Q0 = Object.keys(g), j = Q0;
                if (j)
                  for (var T, L = -1, G = j[e(1396)] - 1; L < G; ) {
                    T = j[L += 1];
                    var Q = g[T];
                    if (Q[e(906)] !== void 0) {
                      var W = v + x[e(947)].getProperty(T);
                      if (x.compositeRule) {
                        if (x[e(1863)].strictDefaults) {
                          var O = e(2063) + W;
                          if (x[e(1863)][e(1577)] === e(624)) x[e(1673)][e(2512)](O);
                          else throw new Error(O);
                        }
                      } else s += e(1377) + W + e(1530), x[e(1863)][e(773)] == e(1107) && (s += e(1258) + W + " === null || " + W + " === '' "), s += e(1907) + W + e(236), x.opts[e(773)] == e(637) ? s += " " + x.useDefault(Q.default) + " " : s += " " + JSON[e(328)](Q.default) + " ", s += "; ";
                    }
                  }
              } else if (U[e(1087)] == e(633) && Array[e(1606)](x[e(595)][e(509)])) {
                var X = x[e(595)][e(509)];
                if (X) {
                  for (var Q, d0 = -1, o0 = X[e(1396)] - 1; d0 < o0; )
                    if (Q = X[d0 += 1], Q[e(906)] !== void 0) {
                      var W = v + "[" + d0 + "]";
                      if (x[e(487)]) {
                        if (x.opts[e(1577)]) {
                          var O = e(2063) + W;
                          if (x[e(1863)][e(1577)] === e(624)) x[e(1673)].warn(O);
                          else throw new Error(O);
                        }
                      } else s += " if (" + W + e(1530), x.opts.useDefaults == "empty" && (s += " || " + W + e(2015) + W + " === '' "), s += e(1907) + W + e(236), x[e(1863)][e(773)] == "shared" ? s += " " + x[e(2017)](Q[e(906)]) + " " : s += " " + JSON[e(328)](Q[e(906)]) + " ", s += "; ";
                    }
                }
              }
            }
            var c0 = U.rules;
            if (c0) {
              for (var e0, L0 = -1, O0 = c0[e(1396)] - 1; L0 < O0; )
                if (e0 = c0[L0 += 1], G0(e0)) {
                  var U0 = e0[e(939)](x, e0[e(1649)], U[e(1087)]);
                  U0 && (s += " " + U0 + " ", P && (C += "}"));
                }
            }
            if (P && (s += " " + C + " ", C = ""), U[e(1087)] && (s += e(1558), M && M === U[e(1087)] && !q)) {
              s += e(1130);
              var h = x[e(2589)] + ".type", m = x.errSchemaPath + "/type", S = S || [];
              S[e(757)](s), s = "", x.createErrors !== !1 ? (s += e(2537) + (D || e(1087)) + e(567) + x[e(1048)] + e(1594) + x.util[e(444)](m) + e(2383), F ? s += "" + M.join(",") : s += "" + M, s += e(858), x[e(1863)].messages !== !1 && (s += e(646), F ? s += "" + M[e(261)](",") : s += "" + M, s += "' "), x[e(1863)][e(1429)] && (s += e(1718) + h + e(2059) + x[e(2589)] + " , data: " + v + " "), s += e(1558)) : s += " {} ";
              var E = s;
              s = S[e(1832)](), !x[e(487)] && P ? x[e(2448)] ? s += e(424) + E + "]); " : s += e(1602) + E + e(1889) : s += e(538) + E + e(430), s += e(1558);
            }
            P && (s += e(1754), N ? s += "0" : s += e(839) + f, s += e(1810), A += "}");
          }
      }
    }
    P && (s += " " + A + " "), N ? (a ? (s += " if (errors === 0) return data;           ", s += e(611)) : (s += " validate.errors = vErrors; ", s += e(1408)), s += " }; return validate;") : s += e(1066) + R + e(2585) + f + ";";
    function w0(X0) {
      const A0 = e;
      for (var V0 = X0[A0(1310)], _0 = 0; _0 < V0[A0(1396)]; _0++) if (G0(V0[_0])) return !0;
    }
    function G0(X0) {
      const A0 = e;
      return x.schema[X0[A0(1649)]] !== void 0 || X0[A0(1936)] && ae(X0);
    }
    function ae(X0) {
      const A0 = e;
      for (var V0 = X0.implements, _0 = 0; _0 < V0[A0(1396)]; _0++) if (x[A0(595)][V0[_0]] !== void 0) return !0;
    }
    return s;
  }), et;
}
var xt, ds;
function z2() {
  const i = n;
  if (ds) return xt;
  ds = 1;
  var x = or(), t = Ze(), r = cr(), e = fa(), s = la(), a = t[i(1559)], o = ir(), c = r[i(1003)];
  xt = u;
  function u(E, N, O, R) {
    const P = i;
    var C = this, A = this[P(729)], D = [void 0], M = {}, F = [], q = {}, U = [], $ = {}, V = [];
    N = N || { schema: E, refVal: D, refs: M };
    var J = d[P(459)](this, E, N, R), s0 = this[P(938)][J[P(2160)]];
    if (J[P(1388)]) return s0[P(1819)] = y0;
    var i0 = this._formats, d0 = this.RULES;
    try {
      var l0 = S0(E, N, O, R);
      s0[P(1974)] = l0;
      var f0 = s0[P(1819)];
      return f0 && (f0.schema = l0[P(595)], f0[P(2121)] = null, f0[P(1129)] = l0.refs, f0[P(1505)] = l0[P(1505)], f0[P(667)] = l0[P(667)], f0[P(324)] = l0[P(324)], A[P(598)] && (f0[P(2538)] = l0[P(2538)])), l0;
    } finally {
      f.call(this, E, N, R);
    }
    function y0() {
      const W = P;
      var X = s0[W(1974)], o0 = X[W(2598)](this, arguments);
      return y0[W(2121)] = X[W(2121)], o0;
    }
    function S0(W, X, o0, c0) {
      const e0 = P;
      var L0 = !X || X && X[e0(595)] == W;
      if (X.schema != N[e0(595)]) return u[e0(459)](C, W, X, o0, c0);
      var O0 = W.$async === !0, U0 = s({ isTop: !0, schema: W, isRoot: L0, baseId: c0, root: X, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: r[e0(1630)], RULES: d0, validate: s, util: t, resolve: x, resolveRef: M0, usePattern: L, useDefault: G, useCustomRule: Q, opts: A, formats: i0, logger: C[e0(1673)], self: C });
      U0 = S(D, m) + S(F, g) + S(U, h) + S(V, v) + U0, A[e0(2502)] && (U0 = A[e0(2502)](U0, W));
      var w0;
      try {
        var G0 = new Function(e0(2358), e0(2274), e0(1575), e0(667), "refVal", e0(2305), "customRules", "equal", "ucs2length", "ValidationError", U0);
        w0 = G0(C, d0, i0, N, D, U, V, o, a, c), D[0] = w0;
      } catch (ae) {
        throw C[e0(1673)][e0(2281)](e0(1997), U0), ae;
      }
      return w0.schema = W, w0.errors = null, w0[e0(1129)] = M, w0[e0(1505)] = D, w0[e0(667)] = L0 ? w0 : X, O0 && (w0.$async = !0), A[e0(598)] === !0 && (w0[e0(2538)] = { code: U0, patterns: F, defaults: U }), w0;
    }
    function M0(W, X, o0) {
      const c0 = P;
      X = x.url(W, X);
      var e0 = M[X], L0, O0;
      if (e0 !== void 0) return L0 = D[e0], O0 = "refVal[" + e0 + "]", T(L0, O0);
      if (!o0 && N[c0(1129)]) {
        var U0 = N[c0(1129)][X];
        if (U0 !== void 0) return L0 = N[c0(1505)][U0], O0 = C0(X, L0), T(L0, O0);
      }
      O0 = C0(X);
      var w0 = x[c0(459)](C, S0, N, X);
      if (w0 === void 0) {
        var G0 = O && O[X];
        G0 && (w0 = x.inlineRef(G0, A.inlineRefs) ? G0 : u[c0(459)](C, G0, N, O, W));
      }
      if (w0 === void 0) Q0(X);
      else return j(X, w0), T(w0, O0);
    }
    function C0(W, X) {
      var c0 = D[P(1396)];
      return D[c0] = X, M[W] = c0, "refVal" + c0;
    }
    function Q0(W) {
      delete M[W];
    }
    function j(W, X) {
      var o0 = M[W];
      D[o0] = X;
    }
    function T(W, X) {
      const o0 = P;
      return typeof W == "object" || typeof W == o0(1588) ? { code: X, schema: W, inline: !0 } : { code: X, $async: W && !!W[o0(324)] };
    }
    function L(W) {
      const X = P;
      var o0 = q[W];
      return o0 === void 0 && (o0 = q[W] = F[X(1396)], F[o0] = W), X(568) + o0;
    }
    function G(W) {
      const X = P;
      switch (typeof W) {
        case X(1588):
        case "number":
          return "" + W;
        case "string":
          return t[X(444)](W);
        case "object":
          if (W === null) return X(417);
          var o0 = e(W), c0 = $[o0];
          return c0 === void 0 && (c0 = $[o0] = U[X(1396)], U[c0] = W), X(906) + c0;
      }
    }
    function Q(W, X, o0, c0) {
      const e0 = P;
      if (C[e0(729)][e0(2302)] !== !1) {
        var L0 = W[e0(779)][e0(2483)];
        if (L0 && !L0.every(function(_0) {
          const Le = e0;
          return Object[Le(2498)][Le(2165)].call(o0, _0);
        })) throw new Error(e0(1296) + L0[e0(261)](","));
        var O0 = W[e0(779)][e0(2302)];
        if (O0) {
          var U0 = O0(X);
          if (!U0) {
            var w0 = e0(2057) + C[e0(2164)](O0[e0(2121)]);
            if (C._opts[e0(2302)] == e0(624)) C[e0(1673)][e0(2281)](w0);
            else throw new Error(w0);
          }
        }
      }
      var G0 = W[e0(779)].compile, ae = W[e0(779)][e0(968)], X0 = W[e0(779)][e0(1013)], A0;
      if (G0) A0 = G0[e0(459)](C, X, o0, c0);
      else if (X0)
        A0 = X0.call(C, X, o0, c0), A[e0(2302)] !== !1 && C[e0(2302)](A0, !0);
      else if (ae) A0 = ae[e0(459)](C, c0, W.keyword, X, o0);
      else if (A0 = W[e0(779)].validate, !A0) return;
      if (A0 === void 0) throw new Error('custom keyword "' + W[e0(1649)] + '"failed to compile');
      var V0 = V[e0(1396)];
      return V[V0] = A0, { code: e0(1483) + V0, validate: A0 };
    }
  }
  function d(E, N, O) {
    const R = i;
    var P = l.call(this, E, N, O);
    return P >= 0 ? { index: P, compiling: !0 } : (P = this[R(938)][R(1396)], this[R(938)][P] = { schema: E, root: N, baseId: O }, { index: P, compiling: !1 });
  }
  function f(E, N, O) {
    const R = i;
    var P = l.call(this, E, N, O);
    P >= 0 && this[R(938)][R(1209)](P, 1);
  }
  function l(E, N, O) {
    const R = i;
    for (var P = 0; P < this[R(938)][R(1396)]; P++) {
      var C = this[R(938)][P];
      if (C[R(595)] == E && C[R(667)] == N && C[R(945)] == O) return P;
    }
    return -1;
  }
  function g(E, N) {
    return i(1723) + E + " = new RegExp(" + t.toQuotedString(N[E]) + ");";
  }
  function h(E) {
    return i(999) + E + " = defaults[" + E + "];";
  }
  function m(E, N) {
    return N[E] === void 0 ? "" : "var refVal" + E + " = refVal[" + E + "];";
  }
  function v(E) {
    const N = i;
    return "var customRule" + E + N(649) + E + "];";
  }
  function S(E, N) {
    const O = i;
    if (!E[O(1396)]) return "";
    for (var R = "", P = 0; P < E[O(1396)]; P++) R += N(P, E);
    return R;
  }
  return xt;
}
var tt = { exports: {} }, fs;
function H2() {
  const i = n;
  if (fs) return tt[i(370)];
  fs = 1;
  var x = tt.exports = function() {
    const r = i;
    this[r(516)] = {};
  };
  return x[i(2498)][i(1157)] = function(r, e) {
    const s = i;
    this[s(516)][r] = e;
  }, x[i(2498)].get = function(r) {
    return this[i(516)][r];
  }, x.prototype.del = function(r) {
    delete this._cache[r];
  }, x.prototype[i(238)] = function() {
    const r = i;
    this[r(516)] = {};
  }, tt[i(370)];
}
var rt, ls;
function U2() {
  const i = n;
  if (ls) return rt;
  ls = 1;
  var x = Ze(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, r = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, s = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, a = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, d = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, f = /^(?:\/(?:[^~/]|~0|~1)*)*$/, l = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, g = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  rt = h;
  function h(A) {
    const D = K;
    return A = A == D(720) ? "full" : D(1625), x[D(413)](h[A]);
  }
  h[i(1625)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: d, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": g }, h[i(720)] = { date: v, time: S, "date-time": N, uri: R, "uri-reference": o, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: d, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": g };
  function m(A) {
    return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0);
  }
  function v(A) {
    var M = A[i(1722)](t);
    if (!M) return !1;
    var F = +M[1], q = +M[2], U = +M[3];
    return q >= 1 && q <= 12 && U >= 1 && U <= (q == 2 && m(F) ? 29 : r[q]);
  }
  function S(A, D) {
    var F = A[i(1722)](e);
    if (!F) return !1;
    var q = F[1], U = F[2], $ = F[3], V = F[5];
    return (q <= 23 && U <= 59 && $ <= 59 || q == 23 && U == 59 && $ == 60) && (!D || V);
  }
  var E = /t|\s/i;
  function N(A) {
    const D = i;
    var M = A[D(1031)](E);
    return M[D(1396)] == 2 && v(M[0]) && S(M[1], !0);
  }
  var O = /\/|:/;
  function R(A) {
    const D = i;
    return O.test(A) && a[D(323)](A);
  }
  var P = /[^\\]\\Z/;
  function C(A) {
    if (P[i(323)](A)) return !1;
    try {
      return new RegExp(A), !0;
    } catch {
      return !1;
    }
  }
  return rt;
}
var st, hs;
function V2() {
  return hs || (hs = 1, st = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x[e(1983)], c = x[e(595)][t], u = x[e(826)] + "/" + t, d = !x[e(1863)][e(1874)], f = e(2197) + (o || ""), l = e(1352) + a, g, h;
    if (c == "#" || c == "#/") x[e(250)] ? (g = x[e(2448)], h = e(1974)) : (g = x[e(667)][e(595)][e(324)] === !0, h = e(1414));
    else {
      var m = x[e(470)](x[e(945)], c, x.isRoot);
      if (m === void 0) {
        var v = x[e(1853)][e(1717)](x[e(945)], c);
        if (x[e(1863)][e(747)] == e(1319)) {
          x[e(1673)].error(v);
          var S = S || [];
          S[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += e(2537) + e(2009) + e(567) + x[e(1048)] + e(1594) + x[e(947)][e(444)](u) + e(982) + x[e(947)].escapeQuotes(c) + e(858), x.opts.messages !== !1 && (s += e(664) + x[e(947)][e(1198)](c) + "' "), x[e(1863)][e(1429)] && (s += e(2172) + x[e(947)][e(444)](c) + " , parentSchema: validate.schema" + x[e(2589)] + e(796) + f + " "), s += e(1558)) : s += e(434);
          var E = s;
          s = S[e(1832)](), !x[e(487)] && d ? x[e(2448)] ? s += " throw new ValidationError([" + E + e(1996) : s += e(1602) + E + "]; return false; " : s += e(538) + E + e(430), d && (s += e(530));
        } else if (x[e(1863)][e(747)] == e(1772)) x[e(1673)][e(2512)](v), d && (s += e(2194));
        else throw new x[e(1853)](x[e(945)], c, v);
      } else if (m[e(968)]) {
        var N = x[e(947)].copy(x);
        N[e(975)]++;
        var O = e(1352) + N[e(975)];
        N[e(595)] = m.schema, N[e(2589)] = "", N[e(826)] = c;
        var R = x.validate(N).replace(/validate\.schema/g, m[e(939)]);
        s += " " + R + " ", d && (s += e(1377) + O + e(1810));
      } else g = m[e(324)] === !0 || x[e(2448)] && m[e(324)] !== !1, h = m.code;
    }
    if (h) {
      var S = S || [];
      S[e(757)](s), s = "", x[e(1863)][e(1389)] ? s += " " + h + e(1825) : s += " " + h + "( ", s += " " + f + ", (dataPath || '')", x[e(1048)] != '""' && (s += e(2200) + x[e(1048)]);
      var P = o ? e(2197) + (o - 1 || "") : e(2551), C = o ? x[e(2229)][o] : "parentDataProperty";
      s += " , " + P + " , " + C + ", rootData)  ";
      var A = s;
      if (s = S[e(1832)](), g) {
        if (!x.async) throw new Error(e(697));
        d && (s += e(1066) + l + "; "), s += e(1668) + A + "; ", d && (s += " " + l + " = true; "), s += e(2386), d && (s += " " + l + e(1143)), s += " } ", d && (s += e(1377) + l + ") { ");
      } else s += e(2470) + A + e(2114) + h + e(484) + h + e(343), d && (s += e(1130));
    }
    return s;
  }), st;
}
var nt, ps;
function W2() {
  return ps || (ps = 1, nt = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(595)][t], o = x[e(2589)] + x[e(947)][e(2249)](t), c = x[e(826)] + "/" + t, u = !x[e(1863)][e(1874)], d = x.util.copy(x), f = "";
    d[e(975)]++;
    var l = e(1352) + d[e(975)], g = d[e(945)], h = !0, m = a;
    if (m)
      for (var v, S = -1, E = m[e(1396)] - 1; S < E; )
        v = m[S += 1], (x[e(1863)][e(2337)] ? typeof v == e(1507) && Object[e(2109)](v)[e(1396)] > 0 || v === !1 : x[e(947)][e(990)](v, x[e(2274)][e(1413)])) && (h = !1, d[e(595)] = v, d.schemaPath = o + "[" + S + "]", d[e(826)] = c + "/" + S, s += "  " + x[e(1974)](d) + " ", d[e(945)] = g, u && (s += e(1377) + l + e(1810), f += "}"));
    return u && (h ? s += e(2194) : s += " " + f[e(1012)](0, -1) + " "), s;
  }), nt;
}
var at, ms;
function Z2() {
  return ms || (ms = 1, at = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x[e(1983)], c = x[e(595)][t], u = x[e(2589)] + x[e(947)].getProperty(t), d = x[e(826)] + "/" + t, f = !x[e(1863)][e(1874)], l = e(2197) + (o || ""), g = "valid" + a, h = e(490) + a, m = x[e(947)][e(413)](x), v = "";
    m[e(975)]++;
    var S = e(1352) + m[e(975)], E = c.every(function(D) {
      const M = e;
      return x[M(1863)][M(2337)] ? typeof D == M(1507) && Object[M(2109)](D).length > 0 || D === !1 : x[M(947)][M(990)](D, x.RULES[M(1413)]);
    });
    if (E) {
      var N = m.baseId;
      s += e(1066) + h + e(356) + g + " = false;  ";
      var O = x[e(487)];
      x[e(487)] = m.compositeRule = !0;
      var R = c;
      if (R)
        for (var P, C = -1, A = R[e(1396)] - 1; C < A; )
          P = R[C += 1], m.schema = P, m[e(2589)] = u + "[" + C + "]", m.errSchemaPath = d + "/" + C, s += "  " + x[e(1974)](m) + " ", m.baseId = N, s += " " + g + " = " + g + e(1258) + S + e(486) + g + e(1810), v += "}";
      x.compositeRule = m[e(487)] = O, s += " " + v + " if (!" + g + e(825), x.createErrors !== !1 ? (s += e(2537) + e(1096) + e(567) + x[e(1048)] + " , schemaPath: " + x.util[e(444)](d) + " , params: {} ", x.opts[e(1709)] !== !1 && (s += " , message: 'should match some schema in anyOf' "), x.opts[e(1429)] && (s += " , schema: validate.schema" + u + e(2059) + x[e(2589)] + " , data: " + l + " "), s += e(1558)) : s += e(434), s += e(430), !x[e(487)] && f && (x[e(2448)] ? s += e(1729) : s += e(620)), s += e(1208) + h + "; if (vErrors !== null) { if (" + h + e(2572) + h + "; else vErrors = null; } ", x[e(1863)][e(1874)] && (s += e(1558));
    } else f && (s += e(2194));
    return s;
  }), at;
}
var it, gs;
function B2() {
  return gs || (gs = 1, it = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(595)][t], o = x.errSchemaPath + "/" + t;
    x[e(1863)].allErrors;
    var c = x[e(947)][e(444)](a);
    return x.opts[e(1173)] === !0 ? s += e(946) + c + ");" : typeof x[e(1863)][e(1173)] == e(1856) && (s += e(859) + c + ", " + x[e(947)][e(444)](o) + e(2055)), s;
  }), it;
}
var ot, bs;
function K2() {
  return bs || (bs = 1, ot = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x[e(1983)], c = x[e(595)][t], u = x[e(2589)] + x[e(947)][e(2249)](t), d = x[e(826)] + "/" + t, f = !x[e(1863)].allErrors, l = e(2197) + (o || ""), g = "valid" + a, h = x[e(1863)][e(1351)] && c && c[e(1351)];
    h && (s += e(300) + a + e(236) + x.util[e(924)](c.$data, o, x[e(2229)]) + "; "), !h && (s += e(300) + a + " = validate.schema" + u + ";"), s += "var " + g + e(2574) + l + ", schema" + a + e(558) + g + e(418);
    var m = m || [];
    m[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += e(2537) + e(581) + e(567) + x[e(1048)] + " , schemaPath: " + x[e(947)].toQuotedString(d) + e(2159) + a + e(1558), x[e(1863)][e(1709)] !== !1 && (s += e(1111)), x[e(1863)][e(1429)] && (s += e(1718) + u + " , parentSchema: validate.schema" + x[e(2589)] + e(796) + l + " "), s += e(1558)) : s += e(434);
    var v = s;
    return s = m.pop(), !x[e(487)] && f ? x.async ? s += e(424) + v + e(1996) : s += e(1602) + v + e(1889) : s += " var err = " + v + e(430), s += " }", f && (s += e(1130)), s;
  }), ot;
}
var ct, vs;
function J2() {
  return vs || (vs = 1, ct = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x.dataLevel, c = x[e(595)][t], u = x[e(2589)] + x[e(947)][e(2249)](t), d = x[e(826)] + "/" + t, f = !x.opts[e(1874)], l = "data" + (o || ""), g = "valid" + a, h = e(490) + a, m = x[e(947)][e(413)](x), v = "";
    m[e(975)]++;
    var S = e(1352) + m[e(975)], E = "i" + a, N = m[e(1983)] = x[e(1983)] + 1, O = e(2197) + N, R = x[e(945)], P = x[e(1863)][e(2337)] ? typeof c == e(1507) && Object.keys(c).length > 0 || c === !1 : x.util.schemaHasRules(c, x.RULES.all);
    if (s += e(2424) + h + e(265) + g + ";", P) {
      var C = x[e(487)];
      x[e(487)] = m.compositeRule = !0, m[e(595)] = c, m[e(2589)] = u, m[e(826)] = d, s += e(1066) + S + e(2544) + E + e(1098) + E + e(445) + l + e(1192) + E + "++) { ", m[e(1048)] = x[e(947)][e(1912)](x[e(1048)], E, x[e(1863)][e(1175)], !0);
      var A = l + "[" + E + "]";
      m[e(2229)][N] = E;
      var D = x[e(1974)](m);
      m[e(945)] = R, x[e(947)][e(1357)](D, O) < 2 ? s += " " + x[e(947)][e(1493)](D, O, A) + " " : s += e(1066) + O + " = " + A + "; " + D + " ", s += e(1377) + S + ") break; }  ", x.compositeRule = m.compositeRule = C, s += " " + v + e(2470) + S + e(1347);
    } else s += e(1377) + l + e(2123);
    var M = M || [];
    M[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += " { keyword: '" + e(1379) + "' , dataPath: (dataPath || '') + " + x[e(1048)] + " , schemaPath: " + x[e(947)][e(444)](d) + e(246), x[e(1863)][e(1709)] !== !1 && (s += e(2587)), x[e(1863)][e(1429)] && (s += " , schema: validate.schema" + u + e(2059) + x[e(2589)] + e(796) + l + " "), s += e(1558)) : s += e(434);
    var F = s;
    return s = M[e(1832)](), !x[e(487)] && f ? x[e(2448)] ? s += e(424) + F + e(1996) : s += " validate.errors = [" + F + e(1889) : s += e(538) + F + e(430), s += e(2497), P && (s += e(2016) + h + "; if (vErrors !== null) { if (" + h + e(2572) + h + e(1765)), x[e(1863)].allErrors && (s += " } "), s;
  }), ct;
}
var ut, ys;
function G2() {
  return ys || (ys = 1, ut = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x.dataLevel, c = x[e(595)][t], u = x.schemaPath + x[e(947)][e(2249)](t), d = x[e(826)] + "/" + t, f = !x.opts.allErrors, l = e(2197) + (o || ""), g = "errs__" + a, h = x.util.copy(x), m = "";
    h[e(975)]++;
    var v = e(1352) + h[e(975)], S = {}, E = {}, N = x[e(1863)].ownProperties;
    for (C in c)
      if (C != "__proto__") {
        var O = c[C], R = Array[e(1606)](O) ? E : S;
        R[C] = O;
      }
    s += "var " + g + e(2301);
    var P = x[e(1048)];
    s += "var missing" + a + ";";
    for (var C in E)
      if (R = E[C], R[e(1396)]) {
        if (s += e(1251) + l + x[e(947)].getProperty(C) + e(1771), N && (s += e(887) + l + ", '" + x[e(947)][e(1198)](C) + e(334)), f) {
          s += " && ( ";
          var A = R;
          if (A)
            for (var D, M = -1, F = A[e(1396)] - 1; M < F; ) {
              D = A[M += 1], M && (s += e(1258));
              var q = x.util[e(2249)](D), U = l + q;
              s += e(2526) + U + " === undefined ", N && (s += e(1978) + l + e(900) + x.util.escapeQuotes(D) + e(334)), s += ") && (missing" + a + e(236) + x[e(947)][e(444)](x.opts[e(1175)] ? D : q) + ") ) ";
            }
          s += e(760);
          var $ = e(1299) + a, V = "' + " + $ + e(1891);
          x[e(1863)][e(2550)] && (x.errorPath = x[e(1863)][e(1175)] ? x.util[e(1912)](P, $, !0) : P + " + " + $);
          var J = J || [];
          J[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += e(2537) + "dependencies" + e(567) + x[e(1048)] + " , schemaPath: " + x[e(947)][e(444)](d) + e(2347) + x[e(947)][e(1198)](C) + e(552) + V + e(362) + R[e(1396)] + e(251) + x[e(947)][e(1198)](R[e(1396)] == 1 ? R[0] : R[e(261)](", ")) + "' } ", x[e(1863)][e(1709)] !== !1 && (s += e(1322), R[e(1396)] == 1 ? s += e(1533) + x.util[e(1198)](R[0]) : s += e(1656) + x[e(947)][e(1198)](R[e(261)](", ")), s += e(2177) + x[e(947)].escapeQuotes(C) + e(1966)), x[e(1863)][e(1429)] && (s += e(1718) + u + e(2059) + x[e(2589)] + e(796) + l + " "), s += " } ") : s += e(434);
          var s0 = s;
          s = J.pop(), !x[e(487)] && f ? x[e(2448)] ? s += e(424) + s0 + e(1996) : s += e(1602) + s0 + e(1889) : s += e(538) + s0 + e(430);
        } else {
          s += e(2143);
          var i0 = R;
          if (i0)
            for (var D, d0 = -1, l0 = i0[e(1396)] - 1; d0 < l0; ) {
              D = i0[d0 += 1];
              var q = x.util[e(2249)](D), V = x.util[e(1198)](D), U = l + q;
              x[e(1863)][e(2550)] && (x.errorPath = x[e(947)][e(1836)](P, D, x[e(1863)][e(1175)])), s += " if ( " + U + " === undefined ", N && (s += e(1978) + l + e(900) + x[e(947)][e(1198)](D) + e(334)), s += e(1846), x.createErrors !== !1 ? (s += " { keyword: '" + e(2483) + e(567) + x[e(1048)] + e(1594) + x[e(947)].toQuotedString(d) + e(2347) + x.util[e(1198)](C) + e(552) + V + e(362) + R[e(1396)] + e(251) + x[e(947)][e(1198)](R.length == 1 ? R[0] : R.join(", ")) + "' } ", x[e(1863)].messages !== !1 && (s += e(1322), R.length == 1 ? s += e(1533) + x[e(947)].escapeQuotes(R[0]) : s += e(1656) + x[e(947)][e(1198)](R[e(261)](", ")), s += e(2177) + x[e(947)][e(1198)](C) + e(1966)), x[e(1863)][e(1429)] && (s += " , schema: validate.schema" + u + e(2059) + x[e(2589)] + e(796) + l + " "), s += " } ") : s += e(434), s += e(1178);
            }
        }
        s += e(2219), f && (m += "}", s += " else { ");
      }
    x[e(1048)] = P;
    var f0 = h[e(945)];
    for (var C in S) {
      var O = S[C];
      (x[e(1863)].strictKeywords ? typeof O == "object" && Object.keys(O).length > 0 || O === !1 : x[e(947)].schemaHasRules(O, x[e(2274)][e(1413)])) && (s += " " + v + e(1320) + l + x[e(947)][e(2249)](C) + e(1771), N && (s += " && Object.prototype.hasOwnProperty.call(" + l + e(900) + x[e(947)][e(1198)](C) + e(334)), s += ") { ", h.schema = O, h[e(2589)] = u + x[e(947)][e(2249)](C), h[e(826)] = d + "/" + x.util[e(1120)](C), s += "  " + x[e(1974)](h) + " ", h[e(945)] = f0, s += e(1980), f && (s += e(1377) + v + e(1810), m += "}"));
    }
    return f && (s += e(2395) + m + e(1377) + g + e(2054)), s;
  }), ut;
}
var dt, ws;
function Q2() {
  return ws || (ws = 1, dt = function(x, t, r) {
    const e = K;
    var s = " ", a = x.level, o = x.dataLevel, c = x[e(595)][t], u = x[e(2589)] + x[e(947)][e(2249)](t), d = x.errSchemaPath + "/" + t, f = !x[e(1863)][e(1874)], l = e(2197) + (o || ""), g = e(1352) + a, h = x.opts[e(1351)] && c && c[e(1351)];
    h && (s += e(300) + a + e(236) + x[e(947)][e(924)](c[e(1351)], o, x[e(2229)]) + "; ");
    var m = "i" + a, v = e(595) + a;
    !h && (s += " var " + v + e(455) + u + ";"), s += e(2424) + g + ";", h && (s += e(1963) + a + e(1926) + g + e(531) + a + e(870) + g + e(652)), s += "" + g + e(1459) + m + "=0; " + m + "<" + v + e(1192) + m + e(2240) + l + ", " + v + "[" + m + e(1609) + g + e(926), h && (s += e(956)), s += e(2470) + g + e(418);
    var S = S || [];
    S[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += e(2537) + e(1587) + e(567) + x[e(1048)] + " , schemaPath: " + x[e(947)].toQuotedString(d) + " , params: { allowedValues: schema" + a + e(1558), x[e(1863)][e(1709)] !== !1 && (s += e(2351)), x[e(1863)].verbose && (s += e(1718) + u + e(2059) + x[e(2589)] + " , data: " + l + " "), s += e(1558)) : s += " {} ";
    var E = s;
    return s = S[e(1832)](), !x.compositeRule && f ? x[e(2448)] ? s += e(424) + E + e(1996) : s += e(1602) + E + e(1889) : s += " var err = " + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " }", f && (s += " else { "), s;
  }), dt;
}
var ft, Ss;
function X2() {
  return Ss || (Ss = 1, ft = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x[e(1983)], c = x.schema[t], u = x[e(2589)] + x[e(947)][e(2249)](t), d = x[e(826)] + "/" + t, f = !x[e(1863)][e(1874)], l = e(2197) + (o || "");
    if (x[e(1863)][e(2330)] === !1) return f && (s += " if (true) { "), s;
    var g = x[e(1863)].$data && c && c[e(1351)], h;
    g ? (s += e(300) + a + e(236) + x[e(947)][e(924)](c[e(1351)], o, x[e(2229)]) + "; ", h = "schema" + a) : h = c;
    var m = x[e(1863)][e(1808)], v = Array.isArray(m);
    if (g) {
      var S = "format" + a, E = e(1713) + a, N = e(704) + a;
      s += e(1066) + S + e(1877) + h + e(1371) + E + e(2588) + S + e(698) + S + e(2436) + S + e(1149) + N + e(236) + E + e(547) + S + e(463) + E + e(1810), x[e(2448)] && (s += e(1982) + a + e(236) + S + e(542)), s += " " + S + e(236) + S + e(263), g && (s += " (" + h + e(707) + h + e(2180)), s += " (", m != "ignore" && (s += " (" + h + e(1420) + S + " ", v && (s += " && self._opts.unknownFormats.indexOf(" + h + ") == -1 "), s += e(2285)), s += " (" + S + e(547) + N + " == '" + r + e(1870) + S + e(722), x[e(2448)] ? s += e(1961) + a + e(336) + S + "(" + l + ") : " + S + "(" + l + ")) " : s += " " + S + "(" + l + ") ", s += e(2412) + S + e(966) + l + "))))) {";
    } else {
      var S = x.formats[c];
      if (!S) {
        if (m == e(1772)) return x[e(1673)][e(2512)]('unknown format "' + c + e(770) + x.errSchemaPath + '"'), f && (s += e(2194)), s;
        if (v && m[e(651)](c) >= 0) return f && (s += e(2194)), s;
        throw new Error(e(1941) + c + e(1658) + x[e(826)] + '"');
      }
      var E = typeof S == e(1507) && !(S instanceof RegExp) && S[e(1974)], N = E && S[e(1087)] || e(1401);
      if (E) {
        var O = S[e(2448)] === !0;
        S = S[e(1974)];
      }
      if (N != r) return f && (s += e(2194)), s;
      if (O) {
        if (!x[e(2448)]) throw new Error("async format in sync schema");
        var R = "formats" + x[e(947)][e(2249)](c) + ".validate";
        s += e(1127) + R + "(" + l + "))) { ";
      } else {
        s += e(361);
        var R = e(1575) + x[e(947)][e(2249)](c);
        E && (R += e(2504)), typeof S == e(1856) ? s += " " + R + "(" + l + ") " : s += " " + R + ".test(" + l + ") ", s += ") { ";
      }
    }
    var P = P || [];
    P[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += e(2537) + e(2330) + e(567) + x[e(1048)] + e(1594) + x.util[e(444)](d) + e(357), g ? s += "" + h : s += "" + x[e(947)][e(444)](c), s += e(1293), x[e(1863)][e(1709)] !== !1 && (s += e(2340), g ? s += "' + " + h + e(1891) : s += "" + x[e(947)][e(1198)](c), s += `"' `), x[e(1863)][e(1429)] && (s += e(1556), g ? s += e(2084) + u : s += "" + x[e(947)][e(444)](c), s += e(2112) + x[e(2589)] + e(796) + l + " "), s += e(1558)) : s += " {} ";
    var C = s;
    return s = P[e(1832)](), !x[e(487)] && f ? x[e(2448)] ? s += e(424) + C + "]); " : s += " validate.errors = [" + C + e(1889) : s += e(538) + C + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(1558), f && (s += e(1130)), s;
  }), ft;
}
var lt, ks;
function Y2() {
  return ks || (ks = 1, lt = function(x, t, r) {
    const e = K;
    var s = " ", a = x.level, o = x.dataLevel, c = x[e(595)][t], u = x[e(2589)] + x.util[e(2249)](t), d = x[e(826)] + "/" + t, f = !x[e(1863)][e(1874)], l = "data" + (o || ""), g = e(1352) + a, h = e(490) + a, m = x[e(947)].copy(x);
    m[e(975)]++;
    var v = e(1352) + m[e(975)], S = x.schema[e(1947)], E = x[e(595)][e(1924)], N = S !== void 0 && (x.opts[e(2337)] ? typeof S == "object" && Object[e(2109)](S)[e(1396)] > 0 || S === !1 : x.util.schemaHasRules(S, x[e(2274)][e(1413)])), O = E !== void 0 && (x[e(1863)][e(2337)] ? typeof E == e(1507) && Object.keys(E)[e(1396)] > 0 || E === !1 : x[e(947)][e(990)](E, x[e(2274)].all)), R = m[e(945)];
    if (N || O) {
      var P;
      m[e(1913)] = !1, m[e(595)] = c, m.schemaPath = u, m[e(826)] = d, s += e(1066) + h + " = errors; var " + g + e(1618);
      var C = x[e(487)];
      x[e(487)] = m[e(487)] = !0, s += "  " + x[e(1974)](m) + " ", m.baseId = R, m[e(1913)] = !0, s += e(2016) + h + e(2078) + h + e(2572) + h + e(750), x.compositeRule = m[e(487)] = C, N ? (s += e(1377) + v + ") {  ", m[e(595)] = x[e(595)][e(1947)], m.schemaPath = x[e(2589)] + e(1757), m[e(826)] = x[e(826)] + e(2600), s += "  " + x[e(1974)](m) + " ", m.baseId = R, s += " " + g + " = " + v + "; ", N && O ? (P = "ifClause" + a, s += e(1066) + P + e(2518)) : P = e(1333), s += e(1558), O && (s += e(1130))) : s += e(2470) + v + e(1810), O && (m[e(595)] = x[e(595)][e(1924)], m[e(2589)] = x.schemaPath + e(805), m[e(826)] = x[e(826)] + e(2317), s += "  " + x[e(1974)](m) + " ", m[e(945)] = R, s += " " + g + e(236) + v + "; ", N && O ? (P = e(2428) + a, s += e(1066) + P + e(408)) : P = "'else'", s += " } "), s += e(2470) + g + e(825), x[e(1913)] !== !1 ? (s += e(2537) + "if" + e(567) + x[e(1048)] + e(1594) + x[e(947)][e(444)](d) + e(1317) + P + e(1558), x.opts[e(1709)] !== !1 && (s += e(351) + P + ` + '" schema' `), x[e(1863)][e(1429)] && (s += " , schema: validate.schema" + u + e(2059) + x[e(2589)] + e(796) + l + " "), s += e(1558)) : s += e(434), s += e(430), !x.compositeRule && f && (x[e(2448)] ? s += " throw new ValidationError(vErrors); " : s += e(620)), s += " }   ", f && (s += e(1130));
    } else f && (s += " if (true) { ");
    return s;
  }), lt;
}
var ht, Es;
function _2() {
  return Es || (Es = 1, ht = function(x, t, r) {
    const e = K;
    var s = " ", a = x.level, o = x[e(1983)], c = x[e(595)][t], u = x.schemaPath + x[e(947)][e(2249)](t), d = x[e(826)] + "/" + t, f = !x[e(1863)].allErrors, l = e(2197) + (o || ""), g = e(1352) + a, h = e(490) + a, m = x.util.copy(x), v = "";
    m.level++;
    var S = e(1352) + m[e(975)], E = "i" + a, N = m[e(1983)] = x[e(1983)] + 1, O = e(2197) + N, R = x[e(945)];
    if (s += e(2424) + h + e(265) + g + ";", Array[e(1606)](c)) {
      var P = x[e(595)][e(289)];
      if (P === !1) {
        s += " " + g + e(236) + l + e(2011) + c[e(1396)] + "; ";
        var C = d;
        d = x[e(826)] + e(1084), s += e(1440) + g + ") {   ";
        var A = A || [];
        A[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += " { keyword: '" + e(289) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(1594) + x[e(947)][e(444)](d) + e(2529) + c[e(1396)] + e(1558), x.opts[e(1709)] !== !1 && (s += " , message: 'should NOT have more than " + c[e(1396)] + e(1234)), x[e(1863)][e(1429)] && (s += e(416) + x[e(2589)] + e(796) + l + " "), s += e(1558)) : s += e(434);
        var D = s;
        s = A[e(1832)](), !x[e(487)] && f ? x[e(2448)] ? s += " throw new ValidationError([" + D + e(1996) : s += e(1602) + D + e(1889) : s += e(538) + D + e(430), s += " } ", d = C, f && (v += "}", s += e(1130));
      }
      var M = c;
      if (M) {
        for (var F, q = -1, U = M.length - 1; q < U; )
          if (F = M[q += 1], x[e(1863)].strictKeywords ? typeof F == "object" && Object[e(2109)](F)[e(1396)] > 0 || F === !1 : x.util[e(990)](F, x[e(2274)][e(1413)])) {
            s += " " + S + e(641) + l + e(1119) + q + ") { ";
            var $ = l + "[" + q + "]";
            m[e(595)] = F, m.schemaPath = u + "[" + q + "]", m[e(826)] = d + "/" + q, m[e(1048)] = x.util[e(1912)](x.errorPath, q, x.opts[e(1175)], !0), m[e(2229)][N] = q;
            var V = x[e(1974)](m);
            m.baseId = R, x[e(947)][e(1357)](V, O) < 2 ? s += " " + x[e(947)].varReplace(V, O, $) + " " : s += e(1066) + O + e(236) + $ + "; " + V + " ", s += e(1980), f && (s += e(1377) + S + ") { ", v += "}");
          }
      }
      if (typeof P == e(1507) && (x[e(1863)][e(2337)] ? typeof P == "object" && Object[e(2109)](P)[e(1396)] > 0 || P === !1 : x[e(947)][e(990)](P, x[e(2274)][e(1413)]))) {
        m[e(595)] = P, m[e(2589)] = x[e(2589)] + e(1553), m[e(826)] = x.errSchemaPath + e(1084), s += " " + S + e(641) + l + e(1119) + c[e(1396)] + ") {  for (var " + E + " = " + c[e(1396)] + "; " + E + e(445) + l + e(1192) + E + e(1687), m[e(1048)] = x[e(947)][e(1912)](x.errorPath, E, x.opts.jsonPointers, !0);
        var $ = l + "[" + E + "]";
        m[e(2229)][N] = E;
        var V = x[e(1974)](m);
        m[e(945)] = R, x[e(947)][e(1357)](V, O) < 2 ? s += " " + x[e(947)][e(1493)](V, O, $) + " " : s += e(1066) + O + e(236) + $ + "; " + V + " ", f && (s += e(2470) + S + ") break; "), s += e(827), f && (s += e(1377) + S + e(1810), v += "}");
      }
    } else if (x[e(1863)][e(2337)] ? typeof c == e(1507) && Object.keys(c).length > 0 || c === !1 : x[e(947)][e(990)](c, x.RULES[e(1413)])) {
      m[e(595)] = c, m[e(2589)] = u, m[e(826)] = d, s += e(1263) + E + e(236) + 0 + "; " + E + e(445) + l + e(1192) + E + e(1687), m[e(1048)] = x[e(947)][e(1912)](x.errorPath, E, x[e(1863)][e(1175)], !0);
      var $ = l + "[" + E + "]";
      m[e(2229)][N] = E;
      var V = x[e(1974)](m);
      m[e(945)] = R, x[e(947)][e(1357)](V, O) < 2 ? s += " " + x[e(947)][e(1493)](V, O, $) + " " : s += e(1066) + O + e(236) + $ + "; " + V + " ", f && (s += " if (!" + S + ") break; "), s += " }";
    }
    return f && (s += " " + v + e(1377) + h + e(2054)), s;
  }), ht;
}
var pt, Ps;
function Is() {
  return Ps || (Ps = 1, pt = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x[e(1983)], c = x[e(595)][t], u = x[e(2589)] + x[e(947)].getProperty(t), d = x[e(826)] + "/" + t, f = !x[e(1863)][e(1874)], R, l = e(2197) + (o || ""), g = x[e(1863)].$data && c && c.$data, h;
    g ? (s += e(300) + a + e(236) + x[e(947)][e(924)](c[e(1351)], o, x.dataPathArr) + "; ", h = e(595) + a) : h = c;
    var m = t == e(2489), v = e(m ? 851 : 2446), S = x[e(595)][v], E = x[e(1863)][e(1351)] && S && S[e(1351)], N = m ? "<" : ">", O = m ? ">" : "<", R = void 0;
    if (!(g || typeof c == "number" || c === void 0)) throw new Error(t + e(1691));
    if (!(E || S === void 0 || typeof S == e(1985) || typeof S == e(1588))) throw new Error(v + e(787));
    if (E) {
      var P = x.util[e(924)](S[e(1351)], o, x[e(2229)]), C = e(521) + a, A = e(1146) + a, D = e(345) + a, M = "op" + a, F = e(2490) + M + e(1891);
      s += e(572) + a + e(236) + P + "; ", P = e(1670) + a, s += e(1066) + C + e(1264) + A + e(2588) + P + e(890) + A + " != 'boolean' && " + A + " != 'undefined' && " + A + e(991);
      var R = v, q = q || [];
      q[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += " { keyword: '" + (R || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + x[e(1048)] + e(1594) + x[e(947)][e(444)](d) + e(246), x[e(1863)][e(1709)] !== !1 && (s += e(1946) + v + e(2103)), x[e(1863)][e(1429)] && (s += " , schema: validate.schema" + u + e(2059) + x[e(2589)] + e(796) + l + " "), s += e(1558)) : s += " {} ";
      var U = s;
      s = q.pop(), !x[e(487)] && f ? x.async ? s += " throw new ValidationError([" + U + e(1996) : s += e(1602) + U + e(1889) : s += e(538) + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(694), g && (s += " (" + h + e(707) + h + e(2543)), s += " " + A + e(1597) + C + " = " + h + e(1679) + P + " " + N + "= " + h + e(1470) + l + " " + O + "= " + P + e(2412) + l + " " + O + " " + h + e(2353) + C + e(236) + P + " === true) ? " + l + " " + O + "= " + h + e(2412) + l + " " + O + " " + h + " ) || " + l + e(2010) + l + e(1064) + a + e(236) + C + e(585) + N + e(1622) + N + "='; ", c === void 0 && (R = v, d = x[e(826)] + "/" + v, h = P, g = E);
    } else {
      var D = typeof S == "number", F = N;
      if (D && g) {
        var M = "'" + F + "'";
        s += e(1251), g && (s += " (" + h + e(707) + h + " != 'number') || "), s += " ( " + h + " === undefined || " + S + " " + N + "= " + h + e(1068) + l + " " + O + "= " + S + e(2412) + l + " " + O + " " + h + e(503) + l + e(2010) + l + e(1810);
      } else {
        D && c === void 0 ? (C = !0, R = v, d = x[e(826)] + "/" + v, h = S, O += "=") : (D && (h = Math[e(m ? 1865 : 550)](S, c)), S === (D ? h : !0) ? (C = !0, R = v, d = x[e(826)] + "/" + v, O += "=") : (C = !1, F += "="));
        var M = "'" + F + "'";
        s += e(1251), g && (s += " (" + h + e(707) + h + e(2543)), s += " " + l + " " + O + " " + h + e(1258) + l + e(2010) + l + e(1810);
      }
    }
    R = R || t;
    var q = q || [];
    q[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += e(2537) + (R || "_limit") + e(567) + x[e(1048)] + e(1594) + x[e(947)][e(444)](d) + " , params: { comparison: " + M + ", limit: " + h + e(677) + C + e(1558), x[e(1863)][e(1709)] !== !1 && (s += e(646) + F + " ", g ? s += e(2490) + h : s += "" + h + "'"), x.opts.verbose && (s += e(1556), g ? s += e(2084) + u : s += "" + c, s += e(2112) + x.schemaPath + e(796) + l + " "), s += e(1558)) : s += e(434);
    var U = s;
    return s = q.pop(), !x[e(487)] && f ? x[e(2448)] ? s += e(424) + U + e(1996) : s += e(1602) + U + e(1889) : s += e(538) + U + e(430), s += e(1558), f && (s += e(1130)), s;
  }), pt;
}
var mt, Rs;
function Cs() {
  return Rs || (Rs = 1, mt = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x.dataLevel, c = x[e(595)][t], u = x.schemaPath + x[e(947)][e(2249)](t), d = x[e(826)] + "/" + t, f = !x[e(1863)][e(1874)], v, l = e(2197) + (o || ""), g = x.opts[e(1351)] && c && c[e(1351)], h;
    if (g ? (s += e(300) + a + e(236) + x[e(947)][e(924)](c[e(1351)], o, x.dataPathArr) + "; ", h = e(595) + a) : h = c, !(g || typeof c == "number")) throw new Error(t + e(1691));
    var m = t == e(1241) ? ">" : "<";
    s += "if ( ", g && (s += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), s += " " + l + ".length " + m + " " + h + e(1810);
    var v = t, S = S || [];
    S[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += e(2537) + (v || e(248)) + e(567) + x[e(1048)] + e(1594) + x[e(947)].toQuotedString(d) + e(2529) + h + " } ", x[e(1863)].messages !== !1 && (s += " , message: 'should NOT have ", t == e(1241) ? s += e(774) : s += "fewer", s += e(2473), g ? s += "' + " + h + e(1891) : s += "" + c, s += e(1234)), x[e(1863)][e(1429)] && (s += e(1556), g ? s += e(2084) + u : s += "" + c, s += e(2112) + x.schemaPath + e(796) + l + " "), s += e(1558)) : s += e(434);
    var E = s;
    return s = S.pop(), !x.compositeRule && f ? x.async ? s += " throw new ValidationError([" + E + e(1996) : s += " validate.errors = [" + E + e(1889) : s += e(538) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", f && (s += e(1130)), s;
  }), mt;
}
var gt, Fs;
function Ns() {
  return Fs || (Fs = 1, gt = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x.dataLevel, c = x[e(595)][t], u = x.schemaPath + x[e(947)].getProperty(t), d = x[e(826)] + "/" + t, f = !x[e(1863)][e(1874)], v, l = "data" + (o || ""), g = x[e(1863)][e(1351)] && c && c.$data, h;
    if (g ? (s += e(300) + a + e(236) + x.util[e(924)](c[e(1351)], o, x.dataPathArr) + "; ", h = e(595) + a) : h = c, !(g || typeof c == "number")) throw new Error(t + e(1691));
    var m = t == e(2170) ? ">" : "<";
    s += "if ( ", g && (s += " (" + h + e(707) + h + e(2543)), x.opts[e(2356)] === !1 ? s += " " + l + e(808) : s += e(891) + l + ") ", s += " " + m + " " + h + e(1810);
    var v = t, S = S || [];
    S[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += " { keyword: '" + (v || "_limitLength") + e(567) + x.errorPath + e(1594) + x[e(947)].toQuotedString(d) + e(2529) + h + " } ", x[e(1863)][e(1709)] !== !1 && (s += " , message: 'should NOT be ", t == e(2170) ? s += e(1789) : s += "shorter", s += e(2473), g ? s += e(2490) + h + e(1891) : s += "" + c, s += e(925)), x[e(1863)][e(1429)] && (s += e(1556), g ? s += "validate.schema" + u : s += "" + c, s += e(2112) + x[e(2589)] + e(796) + l + " "), s += e(1558)) : s += e(434);
    var E = s;
    return s = S[e(1832)](), !x[e(487)] && f ? x[e(2448)] ? s += " throw new ValidationError([" + E + "]); " : s += e(1602) + E + e(1889) : s += e(538) + E + e(430), s += "} ", f && (s += " else { "), s;
  }), gt;
}
var bt, qs;
function Ts() {
  return qs || (qs = 1, bt = function(x, t, r) {
    const e = K;
    var s = " ", a = x.level, o = x[e(1983)], c = x[e(595)][t], u = x.schemaPath + x[e(947)].getProperty(t), d = x[e(826)] + "/" + t, f = !x[e(1863)][e(1874)], v, l = e(2197) + (o || ""), g = x[e(1863)][e(1351)] && c && c.$data, h;
    if (g ? (s += e(300) + a + e(236) + x.util[e(924)](c[e(1351)], o, x[e(2229)]) + "; ", h = "schema" + a) : h = c, !(g || typeof c == "number")) throw new Error(t + e(1691));
    var m = t == e(2028) ? ">" : "<";
    s += "if ( ", g && (s += " (" + h + e(707) + h + e(2543)), s += " Object.keys(" + l + e(2365) + m + " " + h + ") { ";
    var v = t, S = S || [];
    S.push(s), s = "", x[e(1913)] !== !1 ? (s += e(2537) + (v || e(1707)) + e(567) + x[e(1048)] + e(1594) + x[e(947)][e(444)](d) + e(2529) + h + e(1558), x[e(1863)].messages !== !1 && (s += e(1893), t == e(2028) ? s += e(774) : s += e(2506), s += " than ", g ? s += e(2490) + h + e(1891) : s += "" + c, s += " properties' "), x.opts.verbose && (s += e(1556), g ? s += e(2084) + u : s += "" + c, s += e(2112) + x[e(2589)] + e(796) + l + " "), s += e(1558)) : s += e(434);
    var E = s;
    return s = S[e(1832)](), !x[e(487)] && f ? x[e(2448)] ? s += " throw new ValidationError([" + E + e(1996) : s += e(1602) + E + "]; return false; " : s += e(538) + E + e(430), s += "} ", f && (s += e(1130)), s;
  }), bt;
}
var vt, Os;
function ec() {
  return Os || (Os = 1, vt = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x[e(1983)], c = x[e(595)][t], u = x.schemaPath + x[e(947)][e(2249)](t), d = x[e(826)] + "/" + t, f = !x[e(1863)].allErrors, l = e(2197) + (o || ""), g = x[e(1863)][e(1351)] && c && c[e(1351)], h;
    if (g ? (s += e(300) + a + e(236) + x.util[e(924)](c[e(1351)], o, x[e(2229)]) + "; ", h = e(595) + a) : h = c, !(g || typeof c == e(1985))) throw new Error(t + " must be number");
    s += "var division" + a + e(287), g && (s += " " + h + e(483) + h + e(798)), s += e(2110) + a + e(236) + l + e(442) + h + ", ", x[e(1863)][e(1136)] ? s += e(1215) + a + e(504) + a + ") > 1e-" + x[e(1863)][e(1136)] + " " : s += " division" + a + e(2403) + a + ") ", s += " ) ", g && (s += e(467)), s += e(2064);
    var m = m || [];
    m.push(s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + e(819) + e(567) + x[e(1048)] + e(1594) + x[e(947)][e(444)](d) + " , params: { multipleOf: " + h + e(1558), x[e(1863)][e(1709)] !== !1 && (s += " , message: 'should be multiple of ", g ? s += e(2490) + h : s += "" + h + "'"), x[e(1863)][e(1429)] && (s += e(1556), g ? s += e(2084) + u : s += "" + c, s += e(2112) + x[e(2589)] + e(796) + l + " "), s += " } ") : s += e(434);
    var v = s;
    return s = m[e(1832)](), !x[e(487)] && f ? x[e(2448)] ? s += e(424) + v + "]); " : s += e(1602) + v + "]; return false; " : s += e(538) + v + e(430), s += "} ", f && (s += " else { "), s;
  }), vt;
}
var yt, As;
function xc() {
  return As || (As = 1, yt = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x.dataLevel, c = x[e(595)][t], u = x[e(2589)] + x[e(947)][e(2249)](t), d = x[e(826)] + "/" + t, f = !x[e(1863)][e(1874)], l = e(2197) + (o || ""), g = e(490) + a, h = x.util[e(413)](x);
    h.level++;
    var m = e(1352) + h[e(975)];
    if (x[e(1863)][e(2337)] ? typeof c == e(1507) && Object[e(2109)](c)[e(1396)] > 0 || c === !1 : x[e(947)][e(990)](c, x.RULES[e(1413)])) {
      h[e(595)] = c, h[e(2589)] = u, h[e(826)] = d, s += " var " + g + e(2593);
      var v = x.compositeRule;
      x[e(487)] = h[e(487)] = !0, h[e(1913)] = !1;
      var S;
      h[e(1863)][e(1874)] && (S = h.opts[e(1874)], h[e(1863)][e(1874)] = !1), s += " " + x[e(1974)](h) + " ", h[e(1913)] = !0, S && (h[e(1863)][e(1874)] = S), x[e(487)] = h[e(487)] = v, s += " if (" + m + e(418);
      var E = E || [];
      E[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += e(2537) + e(708) + e(567) + x[e(1048)] + " , schemaPath: " + x[e(947)][e(444)](d) + e(246), x[e(1863)].messages !== !1 && (s += " , message: 'should NOT be valid' "), x[e(1863)][e(1429)] && (s += e(1718) + u + e(2059) + x[e(2589)] + e(796) + l + " "), s += e(1558)) : s += e(434);
      var N = s;
      s = E.pop(), !x[e(487)] && f ? x[e(2448)] ? s += " throw new ValidationError([" + N + e(1996) : s += " validate.errors = [" + N + "]; return false; " : s += e(538) + N + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(1208) + g + e(2078) + g + e(2572) + g + e(1765), x[e(1863)][e(1874)] && (s += e(1558));
    } else s += e(283), x[e(1913)] !== !1 ? (s += e(2537) + e(708) + e(567) + x.errorPath + e(1594) + x[e(947)].toQuotedString(d) + e(246), x[e(1863)][e(1709)] !== !1 && (s += e(1326)), x[e(1863)][e(1429)] && (s += e(1718) + u + " , parentSchema: validate.schema" + x[e(2589)] + " , data: " + l + " "), s += " } ") : s += e(434), s += e(430), f && (s += e(530));
    return s;
  }), yt;
}
var wt, Ds;
function tc() {
  return Ds || (Ds = 1, wt = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x[e(1983)], c = x.schema[t], u = x[e(2589)] + x[e(947)][e(2249)](t), d = x[e(826)] + "/" + t, f = !x[e(1863)][e(1874)], l = e(2197) + (o || ""), g = e(1352) + a, h = e(490) + a, m = x[e(947)].copy(x), v = "";
    m.level++;
    var S = "valid" + m[e(975)], E = m[e(945)], N = e(2283) + a, O = e(2485) + a;
    s += e(2424) + h + e(731) + N + " = false , " + g + e(522) + O + e(957);
    var R = x[e(487)];
    x[e(487)] = m.compositeRule = !0;
    var P = c;
    if (P)
      for (var C, A = -1, D = P[e(1396)] - 1; A < D; )
        C = P[A += 1], (x[e(1863)][e(2337)] ? typeof C == "object" && Object[e(2109)](C).length > 0 || C === !1 : x[e(947)][e(990)](C, x[e(2274)][e(1413)])) ? (m[e(595)] = C, m[e(2589)] = u + "[" + A + "]", m[e(826)] = d + "/" + A, s += "  " + x[e(1974)](m) + " ", m.baseId = E) : s += e(1066) + S + " = true; ", A && (s += e(1377) + S + e(547) + N + e(1810) + g + e(1143) + O + e(556) + O + ", " + A + e(1845), v += "}"), s += e(1377) + S + e(1810) + g + e(236) + N + " = true; " + O + " = " + A + e(604);
    return x[e(487)] = m.compositeRule = R, s += "" + v + "if (!" + g + ") {   var err =   ", x[e(1913)] !== !1 ? (s += e(2537) + e(2398) + e(567) + x[e(1048)] + " , schemaPath: " + x.util.toQuotedString(d) + e(1278) + O + " } ", x[e(1863)][e(1709)] !== !1 && (s += e(732)), x[e(1863)][e(1429)] && (s += " , schema: validate.schema" + u + e(2059) + x[e(2589)] + e(796) + l + " "), s += e(1558)) : s += e(434), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(487)] && f && (x[e(2448)] ? s += " throw new ValidationError(vErrors); " : s += e(620)), s += "} else {  errors = " + h + "; if (vErrors !== null) { if (" + h + e(2572) + h + "; else vErrors = null; }", x[e(1863)][e(1874)] && (s += e(1558)), s;
  }), wt;
}
var St, js;
function rc() {
  return js || (js = 1, St = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x[e(1983)], c = x[e(595)][t], u = x.schemaPath + x.util.getProperty(t), d = x.errSchemaPath + "/" + t, f = !x[e(1863)][e(1874)], l = e(2197) + (o || ""), g = x[e(1863)][e(1351)] && c && c[e(1351)], h;
    g ? (s += e(300) + a + e(236) + x.util[e(924)](c.$data, o, x[e(2229)]) + "; ", h = "schema" + a) : h = c;
    var m = g ? e(1991) + h + "))" : x.usePattern(c);
    s += e(1274), g && (s += " (" + h + e(707) + h + e(2180)), s += " !" + m + ".test(" + l + ") ) {   ";
    var v = v || [];
    v[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += e(2537) + e(568) + e(567) + x[e(1048)] + e(1594) + x[e(947)].toQuotedString(d) + e(1455), g ? s += "" + h : s += "" + x[e(947)].toQuotedString(c), s += e(1293), x[e(1863)][e(1709)] !== !1 && (s += e(2104), g ? s += e(2490) + h + " + '" : s += "" + x[e(947)][e(1198)](c), s += e(904)), x[e(1863)][e(1429)] && (s += " , schema:  ", g ? s += e(2084) + u : s += "" + x[e(947)].toQuotedString(c), s += e(2112) + x.schemaPath + e(796) + l + " "), s += e(1558)) : s += e(434);
    var S = s;
    return s = v[e(1832)](), !x[e(487)] && f ? x[e(2448)] ? s += e(424) + S + e(1996) : s += e(1602) + S + "]; return false; " : s += e(538) + S + e(430), s += "} ", f && (s += e(1130)), s;
  }), St;
}
var kt, Ms;
function sc() {
  return Ms || (Ms = 1, kt = function(x, t, r) {
    const e = K;
    var s = " ", a = x.level, o = x[e(1983)], c = x.schema[t], u = x[e(2589)] + x[e(947)][e(2249)](t), d = x[e(826)] + "/" + t, f = !x[e(1863)].allErrors, l = "data" + (o || ""), g = e(490) + a, h = x.util[e(413)](x), m = "";
    h[e(975)]++;
    var v = "valid" + h[e(975)], S = e(2022) + a, E = e(1796) + a, N = h[e(1983)] = x[e(1983)] + 1, O = "data" + N, R = e(2255) + a, P = Object[e(2109)](c || {})[e(254)](d0), C = x[e(595)][e(2250)] || {}, A = Object.keys(C)[e(254)](d0), D = x[e(595)].additionalProperties, M = P[e(1396)] || A[e(1396)], F = D === !1, q = typeof D == e(1507) && Object[e(2109)](D).length, U = x[e(1863)].removeAdditional, $ = F || q || U, V = x.opts[e(528)], J = x[e(945)], s0 = x[e(595)].required;
    if (s0 && !(x.opts[e(1351)] && s0[e(1351)]) && s0[e(1396)] < x.opts[e(1739)]) var i0 = x[e(947)][e(2541)](s0);
    function d0(jx) {
      return jx !== e(2048);
    }
    if (s += e(2424) + g + e(265) + v + " = true;", V && (s += e(1066) + R + " = undefined;"), $) {
      if (V ? s += " " + R + " = " + R + e(309) + l + e(1572) + E + e(1348) + E + "<" + R + ".length; " + E + e(1452) + S + " = " + R + "[" + E + e(800) : s += e(2557) + S + e(2510) + l + e(1810), M) {
        if (s += e(461) + a + " = !(false ", P[e(1396)])
          if (P[e(1396)] > 8) s += e(2020) + u + e(1648) + S + ") ";
          else {
            var l0 = P;
            if (l0)
              for (var f0, y0 = -1, S0 = l0[e(1396)] - 1; y0 < S0; )
                f0 = l0[y0 += 1], s += e(1258) + S + e(621) + x[e(947)][e(444)](f0) + " ";
          }
        if (A.length) {
          var M0 = A;
          if (M0)
            for (var C0, Q0 = -1, j = M0[e(1396)] - 1; Q0 < j; )
              C0 = M0[Q0 += 1], s += e(1258) + x[e(535)](C0) + e(966) + S + ") ";
        }
        s += e(2270) + a + e(1810);
      }
      if (U == e(1413)) s += e(2607) + l + "[" + S + e(800);
      else {
        var T = x[e(1048)], L = e(2490) + S + " + '";
        if (x[e(1863)][e(2550)] && (x.errorPath = x[e(947)][e(1912)](x.errorPath, S, x[e(1863)][e(1175)])), F)
          if (U) s += e(2607) + l + "[" + S + e(800);
          else {
            s += " " + v + e(1143);
            var G = d;
            d = x.errSchemaPath + e(1034);
            var Q = Q || [];
            Q.push(s), s = "", x[e(1913)] !== !1 ? (s += e(2537) + e(2128) + "' , dataPath: (dataPath || '') + " + x[e(1048)] + " , schemaPath: " + x.util[e(444)](d) + e(2545) + L + e(858), x[e(1863)][e(1709)] !== !1 && (s += " , message: '", x[e(1863)][e(2550)] ? s += "is an invalid additional property" : s += "should NOT have additional properties", s += "' "), x.opts[e(1429)] && (s += " , schema: false , parentSchema: validate.schema" + x[e(2589)] + e(796) + l + " "), s += " } ") : s += e(434);
            var W = s;
            s = Q.pop(), !x[e(487)] && f ? x[e(2448)] ? s += e(424) + W + e(1996) : s += e(1602) + W + e(1889) : s += e(538) + W + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = G, f && (s += e(1419));
          }
        else if (q)
          if (U == "failing") {
            s += " var " + g + " = errors;  ";
            var X = x[e(487)];
            x[e(487)] = h.compositeRule = !0, h.schema = D, h[e(2589)] = x[e(2589)] + e(2029), h[e(826)] = x[e(826)] + "/additionalProperties", h[e(1048)] = x[e(1863)][e(2550)] ? x[e(1048)] : x.util[e(1912)](x[e(1048)], S, x[e(1863)].jsonPointers);
            var o0 = l + "[" + S + "]";
            h[e(2229)][N] = S;
            var c0 = x.validate(h);
            h[e(945)] = J, x[e(947)][e(1357)](c0, O) < 2 ? s += " " + x.util[e(1493)](c0, O, o0) + " " : s += " var " + O + e(236) + o0 + "; " + c0 + " ", s += e(2470) + v + e(1329) + g + e(937) + l + "[" + S + e(724), x[e(487)] = h.compositeRule = X;
          } else {
            h[e(595)] = D, h[e(2589)] = x.schemaPath + e(2029), h.errSchemaPath = x[e(826)] + e(1034), h[e(1048)] = x[e(1863)][e(2550)] ? x[e(1048)] : x[e(947)][e(1912)](x[e(1048)], S, x[e(1863)][e(1175)]);
            var o0 = l + "[" + S + "]";
            h.dataPathArr[N] = S;
            var c0 = x[e(1974)](h);
            h[e(945)] = J, x[e(947)][e(1357)](c0, O) < 2 ? s += " " + x[e(947)][e(1493)](c0, O, o0) + " " : s += e(1066) + O + e(236) + o0 + "; " + c0 + " ", f && (s += e(2470) + v + ") break; ");
          }
        x.errorPath = T;
      }
      M && (s += e(1558)), s += " }  ", f && (s += " if (" + v + ") { ", m += "}");
    }
    var e0 = x[e(1863)].useDefaults && !x[e(487)];
    if (P[e(1396)]) {
      var L0 = P;
      if (L0)
        for (var f0, O0 = -1, U0 = L0[e(1396)] - 1; O0 < U0; ) {
          f0 = L0[O0 += 1];
          var w0 = c[f0];
          if (x.opts[e(2337)] ? typeof w0 == e(1507) && Object[e(2109)](w0).length > 0 || w0 === !1 : x.util[e(990)](w0, x[e(2274)][e(1413)])) {
            var G0 = x[e(947)].getProperty(f0), o0 = l + G0, ae = e0 && w0[e(906)] !== void 0;
            h[e(595)] = w0, h[e(2589)] = u + G0, h.errSchemaPath = d + "/" + x[e(947)][e(1120)](f0), h[e(1048)] = x.util[e(1836)](x.errorPath, f0, x[e(1863)].jsonPointers), h[e(2229)][N] = x.util[e(444)](f0);
            var c0 = x[e(1974)](h);
            if (h[e(945)] = J, x.util[e(1357)](c0, O) < 2) {
              c0 = x[e(947)].varReplace(c0, O, o0);
              var X0 = o0;
            } else {
              var X0 = O;
              s += e(1066) + O + e(236) + o0 + "; ";
            }
            if (ae) s += " " + c0 + " ";
            else {
              if (i0 && i0[f0]) {
                s += e(1251) + X0 + e(1530), V && (s += e(1978) + l + ", '" + x[e(947)][e(1198)](f0) + "') "), s += e(1810) + v + e(1143);
                var T = x.errorPath, G = d, A0 = x.util.escapeQuotes(f0);
                x[e(1863)][e(2550)] && (x.errorPath = x.util.getPath(T, f0, x[e(1863)][e(1175)])), d = x[e(826)] + e(2346);
                var Q = Q || [];
                Q[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += e(2537) + e(1830) + e(567) + x.errorPath + " , schemaPath: " + x.util.toQuotedString(d) + " , params: { missingProperty: '" + A0 + e(858), x[e(1863)][e(1709)] !== !1 && (s += e(1946), x[e(1863)][e(2550)] ? s += e(1979) : s += "should have required property \\'" + A0 + "\\'", s += "' "), x[e(1863)].verbose && (s += e(1718) + u + e(2059) + x.schemaPath + e(796) + l + " "), s += e(1558)) : s += " {} ";
                var W = s;
                s = Q[e(1832)](), !x[e(487)] && f ? x[e(2448)] ? s += e(424) + W + e(1996) : s += e(1602) + W + e(1889) : s += e(538) + W + e(430), d = G, x[e(1048)] = T, s += e(2497);
              } else f ? (s += e(1251) + X0 + e(1530), V && (s += e(1978) + l + e(900) + x[e(947)][e(1198)](f0) + e(334)), s += e(1810) + v + " = true; } else { ") : (s += e(1377) + X0 + " !== undefined ", V && (s += e(1584) + l + ", '" + x[e(947)][e(1198)](f0) + e(334)), s += e(2143));
              s += " " + c0 + e(1558);
            }
          }
          f && (s += e(1377) + v + e(1810), m += "}");
        }
    }
    if (A[e(1396)]) {
      var V0 = A;
      if (V0)
        for (var C0, _0 = -1, Le = V0[e(1396)] - 1; _0 < Le; ) {
          C0 = V0[_0 += 1];
          var w0 = C[C0];
          if (x.opts[e(2337)] ? typeof w0 == e(1507) && Object.keys(w0)[e(1396)] > 0 || w0 === !1 : x[e(947)][e(990)](w0, x[e(2274)][e(1413)])) {
            h[e(595)] = w0, h[e(2589)] = x[e(2589)] + ".patternProperties" + x[e(947)][e(2249)](C0), h[e(826)] = x[e(826)] + e(1387) + x[e(947)][e(1120)](C0), V ? s += " " + R + e(236) + R + " || Object.keys(" + l + e(1572) + E + "=0; " + E + "<" + R + e(1192) + E + "++) { var " + S + e(236) + R + "[" + E + "]; " : s += e(2557) + S + e(2510) + l + ") { ", s += " if (" + x[e(535)](C0) + e(966) + S + e(2252), h[e(1048)] = x[e(947)][e(1912)](x[e(1048)], S, x.opts[e(1175)]);
            var o0 = l + "[" + S + "]";
            h[e(2229)][N] = S;
            var c0 = x[e(1974)](h);
            h.baseId = J, x[e(947)][e(1357)](c0, O) < 2 ? s += " " + x.util[e(1493)](c0, O, o0) + " " : s += e(1066) + O + e(236) + o0 + "; " + c0 + " ", f && (s += e(2470) + v + ") break; "), s += e(1558), f && (s += " else " + v + e(510)), s += " }  ", f && (s += e(1377) + v + e(1810), m += "}");
          }
        }
    }
    return f && (s += " " + m + e(1377) + g + e(2054)), s;
  }), kt;
}
var Et, Ls;
function nc() {
  return Ls || (Ls = 1, Et = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x[e(1983)], c = x[e(595)][t], u = x.schemaPath + x[e(947)].getProperty(t), d = x.errSchemaPath + "/" + t, f = !x.opts[e(1874)], l = e(2197) + (o || ""), g = e(490) + a, h = x[e(947)][e(413)](x), m = "";
    h[e(975)]++;
    var v = e(1352) + h[e(975)];
    if (s += e(2424) + g + e(2301), x.opts.strictKeywords ? typeof c == e(1507) && Object[e(2109)](c)[e(1396)] > 0 || c === !1 : x[e(947)][e(990)](c, x[e(2274)][e(1413)])) {
      h[e(595)] = c, h[e(2589)] = u, h[e(826)] = d;
      var S = e(2022) + a, E = e(1796) + a, N = "i" + a, O = e(2490) + S + e(1891), R = h.dataLevel = x[e(1983)] + 1, P = e(2197) + R, C = e(2255) + a, A = x[e(1863)].ownProperties, D = x[e(945)];
      A && (s += e(1066) + C + " = undefined; "), A ? s += " " + C + e(236) + C + " || Object.keys(" + l + e(1572) + E + "=0; " + E + "<" + C + e(1192) + E + "++) { var " + S + e(236) + C + "[" + E + "]; " : s += e(2557) + S + e(2510) + l + e(1810), s += e(496) + a + " = errors; ";
      var M = S, F = x.compositeRule;
      x.compositeRule = h[e(487)] = !0;
      var q = x[e(1974)](h);
      h[e(945)] = D, x[e(947)][e(1357)](q, P) < 2 ? s += " " + x[e(947)].varReplace(q, P, M) + " " : s += e(1066) + P + e(236) + M + "; " + q + " ", x[e(487)] = h.compositeRule = F, s += e(2470) + v + e(2584) + N + e(1593) + a + "; " + N + "<errors; " + N + e(1443) + N + "].propertyName = " + S + e(2117), x[e(1913)] !== !1 ? (s += " { keyword: '" + e(701) + e(567) + x[e(1048)] + e(1594) + x[e(947)][e(444)](d) + " , params: { propertyName: '" + O + e(858), x[e(1863)][e(1709)] !== !1 && (s += e(1703) + O + e(706)), x[e(1863)][e(1429)] && (s += e(1718) + u + e(2059) + x[e(2589)] + e(796) + l + " "), s += e(1558)) : s += " {} ", s += e(430), !x.compositeRule && f && (x.async ? s += e(1729) : s += e(620)), f && (s += e(1419)), s += e(736);
    }
    return f && (s += " " + m + e(1377) + g + e(2054)), s;
  }), Et;
}
var Pt, $s;
function ac() {
  return $s || ($s = 1, Pt = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x[e(1983)], c = x[e(595)][t], u = x.schemaPath + x[e(947)][e(2249)](t), d = x[e(826)] + "/" + t, f = !x[e(1863)].allErrors, l = e(2197) + (o || ""), g = e(1352) + a, h = x[e(1863)][e(1351)] && c && c.$data;
    h && (s += e(300) + a + e(236) + x.util.getData(c.$data, o, x[e(2229)]) + "; ");
    var m = e(595) + a;
    if (!h)
      if (c[e(1396)] < x[e(1863)][e(1739)] && x[e(595)][e(892)] && Object[e(2109)](x[e(595)][e(892)])[e(1396)]) {
        var R = [], v = c;
        if (v)
          for (var S, E = -1, N = v[e(1396)] - 1; E < N; ) {
            S = v[E += 1];
            var O = x[e(595)][e(892)][S];
            !(O && (x.opts[e(2337)] ? typeof O == e(1507) && Object[e(2109)](O)[e(1396)] > 0 || O === !1 : x[e(947)].schemaHasRules(O, x[e(2274)].all))) && (R[R[e(1396)]] = S);
          }
      } else var R = c;
    if (h || R[e(1396)]) {
      var P = x[e(1048)], C = h || R[e(1396)] >= x[e(1863)][e(1739)], A = x[e(1863)][e(528)];
      if (f)
        if (s += e(2061) + a + "; ", C) {
          !h && (s += e(1066) + m + " = validate.schema" + u + "; ");
          var D = "i" + a, M = e(595) + a + "[" + D + "]", F = "' + " + M + " + '";
          x[e(1863)]._errorDataPathProperty && (x[e(1048)] = x[e(947)][e(1912)](P, M, x[e(1863)][e(1175)])), s += " var " + g + e(510), h && (s += e(1963) + a + e(1926) + g + e(531) + a + e(870) + g + e(652)), s += " for (var " + D + e(1098) + D + " < " + m + e(1192) + D + e(1687) + g + e(236) + l + "[" + m + "[" + D + "]] !== undefined ", A && (s += e(1584) + l + ", " + m + "[" + D + e(2437)), s += e(486) + g + e(468), h && (s += e(956)), s += e(1440) + g + e(418);
          var q = q || [];
          q[e(757)](s), s = "", x.createErrors !== !1 ? (s += e(2537) + e(1830) + e(567) + x.errorPath + e(1594) + x[e(947)].toQuotedString(d) + " , params: { missingProperty: '" + F + "' } ", x[e(1863)][e(1709)] !== !1 && (s += e(1946), x[e(1863)][e(2550)] ? s += "is a required property" : s += e(2477) + F + "\\'", s += "' "), x[e(1863)][e(1429)] && (s += e(1718) + u + " , parentSchema: validate.schema" + x[e(2589)] + e(796) + l + " "), s += e(1558)) : s += e(434);
          var U = s;
          s = q.pop(), !x[e(487)] && f ? x[e(2448)] ? s += e(424) + U + e(1996) : s += e(1602) + U + e(1889) : s += e(538) + U + e(430), s += " } else { ";
        } else {
          s += e(1251);
          var $ = R;
          if ($)
            for (var V, D = -1, J = $[e(1396)] - 1; D < J; ) {
              V = $[D += 1], D && (s += e(1258));
              var s0 = x[e(947)][e(2249)](V), i0 = l + s0;
              s += e(2526) + i0 + e(1530), A && (s += e(1978) + l + ", '" + x.util.escapeQuotes(V) + "') "), s += e(1008) + a + e(236) + x[e(947)].toQuotedString(x[e(1863)][e(1175)] ? V : s0) + ") ) ";
            }
          s += e(2367);
          var M = e(1299) + a, F = e(2490) + M + " + '";
          x[e(1863)][e(2550)] && (x[e(1048)] = x[e(1863)][e(1175)] ? x[e(947)].getPathExpr(P, M, !0) : P + " + " + M);
          var q = q || [];
          q[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += e(2537) + e(1830) + "' , dataPath: (dataPath || '') + " + x[e(1048)] + e(1594) + x[e(947)][e(444)](d) + e(2507) + F + e(858), x[e(1863)][e(1709)] !== !1 && (s += e(1946), x.opts[e(2550)] ? s += e(1979) : s += e(2477) + F + "\\'", s += "' "), x[e(1863)].verbose && (s += " , schema: validate.schema" + u + e(2059) + x.schemaPath + e(796) + l + " "), s += e(1558)) : s += e(434);
          var U = s;
          s = q[e(1832)](), !x[e(487)] && f ? x[e(2448)] ? s += e(424) + U + "]); " : s += e(1602) + U + "]; return false; " : s += e(538) + U + e(430), s += e(2497);
        }
      else if (C) {
        !h && (s += e(1066) + m + e(455) + u + "; ");
        var D = "i" + a, M = e(595) + a + "[" + D + "]", F = e(2490) + M + e(1891);
        x[e(1863)][e(2550)] && (x.errorPath = x[e(947)][e(1912)](P, M, x[e(1863)][e(1175)])), h && (s += e(1377) + m + e(502) + m + e(2242), x.createErrors !== !1 ? (s += " { keyword: '" + e(1830) + "' , dataPath: (dataPath || '') + " + x[e(1048)] + e(1594) + x[e(947)].toQuotedString(d) + e(2507) + F + "' } ", x.opts[e(1709)] !== !1 && (s += e(1946), x[e(1863)][e(2550)] ? s += e(1979) : s += e(2477) + F + "\\'", s += "' "), x[e(1863)][e(1429)] && (s += e(1718) + u + " , parentSchema: validate.schema" + x[e(2589)] + e(796) + l + " "), s += " } ") : s += e(434), s += e(245) + m + e(2126)), s += e(2557) + D + e(1098) + D + e(445) + m + ".length; " + D + e(2046) + l + "[" + m + "[" + D + e(689), A && (s += e(1978) + l + ", " + m + "[" + D + "]) "), s += e(1846), x.createErrors !== !1 ? (s += " { keyword: 'required" + e(567) + x[e(1048)] + e(1594) + x[e(947)].toQuotedString(d) + e(2507) + F + "' } ", x[e(1863)][e(1709)] !== !1 && (s += e(1946), x[e(1863)]._errorDataPathProperty ? s += "is a required property" : s += e(2477) + F + "\\'", s += "' "), x[e(1863)].verbose && (s += e(1718) + u + e(2059) + x[e(2589)] + e(796) + l + " "), s += e(1558)) : s += " {} ", s += e(2388), h && (s += "  }  ");
      } else {
        var d0 = R;
        if (d0)
          for (var V, l0 = -1, f0 = d0.length - 1; l0 < f0; ) {
            V = d0[l0 += 1];
            var s0 = x.util[e(2249)](V), F = x[e(947)].escapeQuotes(V), i0 = l + s0;
            x[e(1863)][e(2550)] && (x[e(1048)] = x[e(947)][e(1836)](P, V, x[e(1863)][e(1175)])), s += e(1251) + i0 + e(1530), A && (s += e(1978) + l + e(900) + x[e(947)][e(1198)](V) + e(334)), s += e(1846), x[e(1913)] !== !1 ? (s += e(2537) + e(1830) + e(567) + x.errorPath + e(1594) + x[e(947)][e(444)](d) + e(2507) + F + "' } ", x[e(1863)][e(1709)] !== !1 && (s += e(1946), x[e(1863)][e(2550)] ? s += "is a required property" : s += e(2477) + F + "\\'", s += "' "), x[e(1863)][e(1429)] && (s += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x.schemaPath + e(796) + l + " "), s += e(1558)) : s += e(434), s += e(1178);
          }
      }
      x[e(1048)] = P;
    } else f && (s += e(457));
    return s;
  }), Pt;
}
var It, zs;
function ic() {
  return zs || (zs = 1, It = function(x, t, r) {
    const e = K;
    var s = " ", a = x[e(975)], o = x[e(1983)], c = x[e(595)][t], u = x.schemaPath + x[e(947)][e(2249)](t), d = x[e(826)] + "/" + t, f = !x[e(1863)][e(1874)], l = e(2197) + (o || ""), g = e(1352) + a, h = x[e(1863)][e(1351)] && c && c.$data, m;
    if (h ? (s += e(300) + a + " = " + x.util[e(924)](c[e(1351)], o, x[e(2229)]) + "; ", m = e(595) + a) : m = c, (c || h) && x[e(1863)][e(2231)] !== !1) {
      h && (s += e(1066) + g + "; if (" + m + e(964) + m + e(1926) + g + e(702) + m + e(301) + g + " = false; else { "), s += e(256) + l + e(901) + g + e(577);
      var v = x[e(595)].items && x.schema[e(509)].type, S = Array[e(1606)](v);
      if (!v || v == e(1507) || v == e(633) || S && (v[e(651)]("object") >= 0 || v[e(651)](e(633)) >= 0)) s += e(1627) + l + e(1390) + l + "[j])) { " + g + e(1277);
      else {
        s += e(2268) + l + e(1243);
        var E = e(1295) + (S ? "s" : "");
        s += e(1377) + x[e(947)][E](v, e(2488), x[e(1863)][e(769)], !0) + e(1024), S && (s += ` if (typeof item == 'string') item = '"' + item; `), s += e(1878) + g + e(2484);
      }
      s += e(1558), h && (s += e(956)), s += e(2470) + g + e(418);
      var N = N || [];
      N[e(757)](s), s = "", x[e(1913)] !== !1 ? (s += " { keyword: '" + e(2231) + e(567) + x[e(1048)] + e(1594) + x.util.toQuotedString(d) + " , params: { i: i, j: j } ", x[e(1863)][e(1709)] !== !1 && (s += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), x[e(1863)][e(1429)] && (s += e(1556), h ? s += e(2084) + u : s += "" + c, s += "         , parentSchema: validate.schema" + x[e(2589)] + " , data: " + l + " "), s += e(1558)) : s += e(434);
      var O = s;
      s = N[e(1832)](), !x[e(487)] && f ? x[e(2448)] ? s += " throw new ValidationError([" + O + e(1996) : s += e(1602) + O + e(1889) : s += e(538) + O + e(430), s += e(1558), f && (s += e(1130));
    } else f && (s += e(2194));
    return s;
  }), It;
}
var Rt, Hs;
function oc() {
  return Hs || (Hs = 1, Rt = { $ref: V2(), allOf: W2(), anyOf: Z2(), $comment: B2(), const: K2(), contains: J2(), dependencies: G2(), enum: Q2(), format: X2(), if: Y2(), items: _2(), maximum: Is(), minimum: Is(), maxItems: Cs(), minItems: Cs(), maxLength: Ns(), minLength: Ns(), maxProperties: Ts(), minProperties: Ts(), multipleOf: ec(), not: xc(), oneOf: tc(), pattern: rc(), properties: sc(), propertyNames: nc(), required: ac(), uniqueItems: ic(), validate: la() }), Rt;
}
var Ct, Us;
function cc() {
  if (Us) return Ct;
  Us = 1;
  var i = oc(), x = Ze().toHash;
  return Ct = function() {
    const r = K;
    var e = [{ type: r(1985), rules: [{ maximum: [r(851)] }, { minimum: [r(2446)] }, r(819), r(2330)] }, { type: r(1401), rules: [r(2170), "minLength", r(568), r(2330)] }, { type: r(633), rules: [r(1241), r(2036), "items", "contains", r(2231)] }, { type: r(1507), rules: ["maxProperties", r(2140), r(1830), r(2483), r(701), { properties: [r(2128), r(2250)] }] }, { rules: [r(2009), r(581), r(1587), "not", r(1096), "oneOf", r(1307), "if"] }], s = ["type", r(1173)], a = [r(1267), r(337), "id", r(1351), r(324), r(1406), r(865), r(906), r(2127), "examples", r(1812), "writeOnly", r(1519), r(1164), r(289), "then", "else"], o = ["number", r(1910), r(1401), r(633), r(1507), r(1588), "null"];
    return e[r(1413)] = x(s), e[r(794)] = x(o), e[r(2228)](function(c) {
      const u = r;
      c[u(1310)] = c[u(1310)].map(function(d) {
        const f = u;
        var l;
        if (typeof d == f(1507)) {
          var g = Object.keys(d)[0];
          l = d[g], d = g, l[f(2228)](function(m) {
            s[f(757)](m), e.all[m] = !0;
          });
        }
        s.push(d);
        var h = e.all[d] = { keyword: d, code: i[d], implements: l };
        return h;
      }), e[u(1413)][u(1173)] = { keyword: u(1173), code: i.$comment }, c.type && (e[u(794)][c.type] = c);
    }), e[r(315)] = x(s[r(1118)](a)), e[r(1161)] = {}, e;
  }, Ct;
}
var Ft, Vs;
function uc() {
  const i = n;
  if (Vs) return Ft;
  Vs = 1;
  var x = [i(819), i(2489), i(851), i(1699), i(2446), i(2170), i(1539), i(568), i(289), "maxItems", i(2036), i(2231), i(2028), i(2140), i(1830), i(2128), i(1587), "format", i(581)];
  return Ft = function(t, r) {
    const e = i;
    for (var s = 0; s < r[e(1396)]; s++) {
      t = JSON[e(2517)](JSON.stringify(t));
      var a = r[s].split("/"), o = t, c;
      for (c = 1; c < a[e(1396)]; c++) o = o[a[c]];
      for (c = 0; c < x[e(1396)]; c++) {
        var u = x[c], d = o[u];
        d && (o[u] = { anyOf: [d, { $ref: e(896) }] });
      }
    }
    return t;
  }, Ft;
}
var Nt, Ws;
function dc() {
  const i = n;
  if (Ws) return Nt;
  Ws = 1;
  var x = cr()[i(1630)];
  Nt = t;
  function t(r, e, s) {
    const a = i;
    var o = this;
    if (typeof this._opts.loadSchema != a(1856)) throw new Error(a(2004));
    typeof e == a(1856) && (s = e, e = void 0);
    var c = u(r)[a(1947)](function() {
      const f = a;
      var l = o._addSchema(r, void 0, e);
      return l[f(1974)] || d(l);
    });
    return s && c[a(1947)](function(f) {
      s(null, f);
    }, s), c;
    function u(f) {
      const l = a;
      var g = f.$schema;
      return g && !o[l(1283)](g) ? t[l(459)](o, { $ref: g }, !0) : Promise[l(1315)]();
    }
    function d(f) {
      const l = a;
      try {
        return o[l(1230)](f);
      } catch (h) {
        if (h instanceof x) return g(h);
        throw h;
      }
      function g(h) {
        const m = l;
        var v = h[m(1043)];
        if (N(v)) throw new Error(m(536) + v + " is loaded but " + h[m(2253)] + m(1265));
        var S = o[m(596)][v];
        return !S && (S = o[m(596)][v] = o[m(729)][m(2359)](v), S[m(1947)](E, E)), S[m(1947)](function(O) {
          const R = m;
          if (!N(v)) return u(O)[R(1947)](function() {
            const P = R;
            N(v) || o[P(902)](O, v, void 0, e);
          });
        })[m(1947)](function() {
          return d(f);
        });
        function E() {
          const O = m;
          delete o[O(596)][v];
        }
        function N(O) {
          const R = m;
          return o[R(506)][O] || o[R(539)][O];
        }
      }
    }
  }
  return Nt;
}
var qt, Zs;
function fc() {
  return Zs || (Zs = 1, qt = function(x, t, r) {
    const e = K;
    var s = " ", a = x.level, o = x[e(1983)], c = x.schema[t], u = x[e(2589)] + x[e(947)][e(2249)](t), d = x[e(826)] + "/" + t, f = !x.opts.allErrors, l, g = e(2197) + (o || ""), h = e(1352) + a, m = e(490) + a, v = x[e(1863)][e(1351)] && c && c[e(1351)], S;
    v ? (s += " var schema" + a + e(236) + x[e(947)][e(924)](c[e(1351)], o, x[e(2229)]) + "; ", S = "schema" + a) : S = c;
    var E = this, N = e(779) + a, O = E.definition, R = "", P, C, A, D, M;
    if (v && O.$data) {
      M = e(1591) + a;
      var F = O[e(2302)];
      s += e(1066) + N + e(2184) + t + "'].definition; var " + M + " = " + N + e(1004);
    } else {
      if (D = x[e(589)](E, c, x.schema, x), !D) return;
      S = e(2084) + u, M = D[e(939)], P = O[e(1904)], C = O[e(968)], A = O[e(1013)];
    }
    var q = M + e(1726), U = "i" + a, $ = e(841) + a, V = O[e(2448)];
    if (V && !x.async) throw new Error(e(2207));
    if (!(C || A) && (s += "" + q + " = null;"), s += "var " + m + " = errors;var " + h + ";", v && O[e(1351)] && (R += "}", s += " if (" + S + e(2038) + h + " = true; } else { ", F && (R += "}", s += " " + h + e(236) + N + e(2239) + S + e(675) + h + e(1810))), C) O.statements ? s += " " + D[e(1974)] + " " : s += " " + h + e(236) + D[e(1974)] + "; ";
    else if (A) {
      var J = x[e(947)][e(413)](x), R = "";
      J.level++;
      var s0 = e(1352) + J[e(975)];
      J.schema = D[e(1974)], J.schemaPath = "";
      var i0 = x[e(487)];
      x.compositeRule = J[e(487)] = !0;
      var d0 = x[e(1974)](J)[e(1783)](/validate\.schema/g, M);
      x[e(487)] = J[e(487)] = i0, s += " " + d0;
    } else {
      var l0 = l0 || [];
      l0[e(757)](s), s = "", s += "  " + M + ".call( ", x.opts.passContext ? s += "this" : s += "self", P || O[e(595)] === !1 ? s += e(1266) + g + " " : s += e(1266) + S + e(1266) + g + e(2182) + x[e(2589)] + " ", s += " , (dataPath || '')", x[e(1048)] != '""' && (s += " + " + x.errorPath);
      var f0 = o ? e(2197) + (o - 1 || "") : e(2551), y0 = o ? x[e(2229)][o] : e(726);
      s += e(1266) + f0 + e(1266) + y0 + " , rootData )  ";
      var S0 = s;
      s = l0[e(1832)](), O[e(2121)] === !1 ? (s += " " + h + e(236), V && (s += e(2463)), s += "" + S0 + "; ") : V ? (q = e(1838) + a, s += e(1066) + q + e(2135) + h + e(1896) + S0 + e(1287) + h + e(944) + q + e(977)) : s += " " + q + e(957) + h + e(236) + S0 + "; ";
    }
    if (O[e(513)] && (s += " if (" + f0 + ") " + g + e(236) + f0 + "[" + y0 + "];"), s += "" + R, O[e(1352)]) f && (s += " if (true) { ");
    else {
      s += e(1251), O.valid === void 0 ? (s += " !", A ? s += "" + s0 : s += "" + h) : s += " " + !O[e(1352)] + " ", s += e(1810), l = E[e(1649)];
      var l0 = l0 || [];
      l0[e(757)](s), s = "";
      var l0 = l0 || [];
      l0[e(757)](s), s = "", x.createErrors !== !1 ? (s += e(2537) + (l || e(1161)) + "' , dataPath: (dataPath || '') + " + x[e(1048)] + e(1594) + x.util[e(444)](d) + e(1498) + E[e(1649)] + e(858), x[e(1863)][e(1709)] !== !1 && (s += e(2192) + E[e(1649)] + `" keyword validation' `), x[e(1863)][e(1429)] && (s += " , schema: validate.schema" + u + e(2059) + x[e(2589)] + e(796) + g + " "), s += e(1558)) : s += e(434);
      var M0 = s;
      s = l0[e(1832)](), !x.compositeRule && f ? x.async ? s += e(424) + M0 + e(1996) : s += e(1602) + M0 + e(1889) : s += " var err = " + M0 + e(430);
      var C0 = s;
      s = l0[e(1832)](), C ? O[e(2121)] ? O[e(2121)] != e(720) && (s += e(1263) + U + "=" + m + "; " + U + e(1468) + U + e(1452) + $ + " = vErrors[" + U + e(2327) + $ + e(2408) + $ + e(2567) + x[e(1048)] + e(890) + $ + e(1128) + $ + e(754) + d + '"; } ', x[e(1863)][e(1429)] && (s += " " + $ + e(1552) + S + "; " + $ + ".data = " + g + "; "), s += e(1558)) : O[e(2121)] === !1 ? s += " " + C0 + " " : (s += e(1377) + m + e(663) + C0 + e(1714) + U + "=" + m + "; " + U + e(1468) + U + e(1452) + $ + " = vErrors[" + U + e(2327) + $ + e(2408) + $ + e(2567) + x.errorPath + e(890) + $ + e(1128) + $ + e(754) + d + '"; } ', x[e(1863)][e(1429)] && (s += " " + $ + e(1552) + S + "; " + $ + e(1537) + g + "; "), s += e(1922)) : A ? (s += e(1858), x[e(1913)] !== !1 ? (s += e(2537) + (l || e(1161)) + e(567) + x[e(1048)] + e(1594) + x[e(947)][e(444)](d) + e(1498) + E[e(1649)] + e(858), x.opts[e(1709)] !== !1 && (s += e(2192) + E.keyword + `" keyword validation' `), x[e(1863)][e(1429)] && (s += e(1718) + u + e(2059) + x.schemaPath + e(796) + g + " "), s += e(1558)) : s += e(434), s += e(430), !x[e(487)] && f && (x[e(2448)] ? s += e(1729) : s += " validate.errors = vErrors; return false; ")) : O[e(2121)] === !1 ? s += " " + C0 + " " : (s += e(1427) + q + e(436) + q + "; else vErrors = vErrors.concat(" + q + e(1976) + U + "=" + m + "; " + U + e(1468) + U + e(1452) + $ + e(2303) + U + "]; if (" + $ + e(2408) + $ + ".dataPath = (dataPath || '') + " + x[e(1048)] + ";  " + $ + e(754) + d + '";  ', x[e(1863)][e(1429)] && (s += " " + $ + e(1552) + S + "; " + $ + e(1537) + g + "; "), s += e(1169) + C0 + " } "), s += e(1558), f && (s += e(1130));
    }
    return s;
  }), qt;
}
const lc = "http://json-schema.org/draft-07/schema#", hc = n(685), pc = "Core schema meta-schema", mc = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: n(1910), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: [n(633), n(1588), n(1910), "null", n(1985), "object", "string"] }, stringArray: { type: n(633), items: { type: "string" }, uniqueItems: !0, default: [] } }, gc = [n(1507), n(1588)], bc = { $id: { type: n(1401), format: "uri-reference" }, $schema: { type: "string", format: n(1099) }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: n(1401) }, title: { type: n(1401) }, description: { type: n(1401) }, default: !0, readOnly: { type: n(1588), default: !1 }, examples: { type: n(633), items: !0 }, multipleOf: { type: n(1985), exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: n(1985) }, minimum: { type: n(1985) }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: n(494) }, minLength: { $ref: n(1417) }, pattern: { type: n(1401), format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: n(2608) }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: n(1417) }, uniqueItems: { type: n(1588), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: n(1417) }, required: { $ref: n(1940) }, additionalProperties: { $ref: "#" }, definitions: { type: n(1507), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: n(1507), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: n(1507), additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: n(1507), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: n(1940) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: n(633), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: n(2168) }, { type: n(633), items: { $ref: n(2168) }, minItems: 1, uniqueItems: !0 }] }, format: { type: n(1401) }, contentMediaType: { type: n(1401) }, contentEncoding: { type: n(1401) }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: n(2608) }, anyOf: { $ref: n(2608) }, oneOf: { $ref: n(2608) }, not: { $ref: "#" } }, ha = { $schema: lc, $id: hc, title: pc, definitions: mc, type: gc, properties: bc, default: !0 };
var Tt, Bs;
function vc() {
  const i = n;
  if (Bs) return Tt;
  Bs = 1;
  var x = ha;
  return Tt = { $id: i(402), definitions: { simpleTypes: x[i(2127)].simpleTypes }, type: "object", dependencies: { schema: ["validate"], $data: ["validate"], statements: [i(968)], valid: { not: { required: [i(1013)] } } }, properties: { type: x[i(892)][i(1087)], schema: { type: i(1588) }, statements: { type: "boolean" }, dependencies: { type: i(633), items: { type: i(1401) } }, metaSchema: { type: i(1507) }, modifying: { type: i(1588) }, valid: { type: i(1588) }, $data: { type: i(1588) }, async: { type: "boolean" }, errors: { anyOf: [{ type: "boolean" }, { const: i(720) }] } } }, Tt;
}
var Ot, Ks;
function yc() {
  if (Ks) return Ot;
  Ks = 1;
  var i = /^[a-z_$][a-z0-9_$-]*$/i, x = fc(), t = vc();
  Ot = { add: r, get: e, remove: s, validate: a };
  function r(o, c) {
    const u = K;
    var d = this[u(2274)];
    if (d[u(315)][o]) throw new Error(u(877) + o + u(1282));
    if (!i[u(323)](o)) throw new Error("Keyword " + o + " is not a valid identifier");
    if (c) {
      this[u(1092)](c, !0);
      var f = c[u(1087)];
      if (Array[u(1606)](f))
        for (var l = 0; l < f.length; l++) h(o, f[l], c);
      else h(o, f, c);
      var g = c[u(1384)];
      g && (c[u(1351)] && this._opts.$data && (g = { anyOf: [g, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] }), c[u(2302)] = this[u(1904)](g, !0));
    }
    d[u(315)][o] = d.all[o] = !0;
    function h(m, v, S) {
      const E = u;
      for (var N, O = 0; O < d.length; O++) {
        var R = d[O];
        if (R.type == v) {
          N = R;
          break;
        }
      }
      !N && (N = { type: v, rules: [] }, d.push(N));
      var P = { keyword: m, definition: S, custom: !0, code: x, implements: S[E(1936)] };
      N[E(1310)][E(757)](P), d.custom[m] = P;
    }
    return this;
  }
  function e(o) {
    const c = K;
    var u = this[c(2274)].custom[o];
    return u ? u.definition : this.RULES[c(315)][o] || !1;
  }
  function s(o) {
    const c = K;
    var u = this[c(2274)];
    delete u[c(315)][o], delete u[c(1413)][o], delete u.custom[o];
    for (var d = 0; d < u[c(1396)]; d++)
      for (var f = u[d][c(1310)], l = 0; l < f[c(1396)]; l++)
        if (f[l].keyword == o) {
          f[c(1209)](l, 1);
          break;
        }
    return this;
  }
  function a(o, c) {
    const u = K;
    a[u(2121)] = null;
    var d = this[u(1313)] = this[u(1313)] || this.compile(t, !0);
    if (d(o)) return !0;
    if (a[u(2121)] = d.errors, c) throw new Error(u(548) + this[u(2164)](d[u(2121)]));
    return !1;
  }
  return Ot;
}
const wc = n(685), Sc = n(896), kc = n(2189), Ec = n(1507), Pc = [n(1351)], Ic = { $data: { type: n(1401), anyOf: [{ format: n(1189) }, { format: n(688) }] } }, Rc = !1, Cc = { $schema: wc, $id: Sc, description: kc, type: Ec, required: Pc, properties: Ic, additionalProperties: Rc };
var At, Js;
function Fc() {
  const i = n;
  if (Js) return At;
  Js = 1;
  var x = z2(), t = or(), r = H2(), e = da(), s = fa(), a = U2(), o = cc(), c = uc(), u = Ze();
  At = m, m[i(2498)][i(1974)] = v, m[i(2498)][i(1904)] = S, m[i(2498)][i(902)] = E, m.prototype[i(1616)] = N, m[i(2498)][i(2302)] = O, m[i(2498)][i(1283)] = P, m[i(2498)][i(2187)] = D, m.prototype[i(1795)] = i0, m[i(2498)].errorsText = s0, m.prototype[i(1880)] = F, m[i(2498)][i(1230)] = q, m.prototype.compileAsync = dc();
  var d = yc();
  m[i(2498)][i(2186)] = d[i(2062)], m[i(2498)].getKeyword = d[i(1364)], m[i(2498)][i(1073)] = d.remove, m[i(2498)][i(1092)] = d.validate;
  var f = cr();
  m[i(1033)] = f[i(1003)], m[i(1853)] = f.MissingRef, m[i(1848)] = c;
  var l = i(712), g = [i(591), i(773), i(2138), "strictDefaults"], h = [i(375)];
  function m(j) {
    const T = i;
    if (!(this instanceof m)) return new m(j);
    j = this[T(729)] = u[T(413)](j) || {}, C0(this), this._schemas = {}, this[T(506)] = {}, this[T(602)] = {}, this[T(2075)] = a(j[T(2330)]), this._cache = j[T(1782)] || new r(), this[T(596)] = {}, this[T(938)] = [], this.RULES = o(), this[T(617)] = U(j), j[T(1739)] = j[T(1739)] || 1 / 0, j[T(1581)] == T(469) && (j[T(2550)] = !0), j.serialize === void 0 && (j[T(1480)] = s), this[T(802)] = M0(this), j[T(1575)] && f0(this), j[T(315)] && y0(this), d0(this), typeof j[T(643)] == "object" && this[T(1616)](j[T(643)]), j[T(1944)] && this.addKeyword(T(1944), { metaSchema: { type: T(1588) } }), l0(this);
  }
  function v(j, T) {
    const L = i;
    var G;
    if (typeof j == "string") {
      if (G = this[L(1283)](j), !G) throw new Error(L(475) + j + '"');
    } else {
      var Q = this[L(1880)](j);
      G = Q[L(1974)] || this[L(1230)](Q);
    }
    var W = G(T);
    return G[L(324)] !== !0 && (this[L(2121)] = G[L(2121)]), W;
  }
  function S(j, T) {
    const L = i;
    var G = this[L(1880)](j, void 0, T);
    return G[L(1974)] || this[L(1230)](G);
  }
  function E(j, T, L, G) {
    const Q = i;
    if (Array[Q(1606)](j)) {
      for (var W = 0; W < j.length; W++) this[Q(902)](j[W], void 0, L, G);
      return this;
    }
    var X = this[Q(617)](j);
    if (X !== void 0 && typeof X != Q(1401)) throw new Error("schema id must be string");
    return T = t[Q(1484)](T || X), S0(this, T), this._schemas[T] = this[Q(1880)](j, L, G, !0), this;
  }
  function N(j, T, L) {
    return this[i(902)](j, T, L, !0), this;
  }
  function O(j, T) {
    const L = i;
    var G = j[L(1267)];
    if (G !== void 0 && typeof G != L(1401)) throw new Error(L(2376));
    if (G = G || this[L(729)][L(299)] || R(this), !G) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
    var Q = this[L(1974)](G, j);
    if (!Q && T) {
      var W = L(1721) + this[L(2164)]();
      if (this[L(729)][L(2302)] == L(624)) this[L(1673)][L(2281)](W);
      else throw new Error(W);
    }
    return Q;
  }
  function R(j) {
    const T = i;
    var L = j[T(729)][T(643)];
    return j[T(729)].defaultMeta = typeof L == T(1507) ? j._getId(L) || L : j[T(1283)](l) ? l : void 0, j[T(729)].defaultMeta;
  }
  function P(j) {
    const T = i;
    var L = A(this, j);
    switch (typeof L) {
      case T(1507):
        return L.validate || this[T(1230)](L);
      case "string":
        return this[T(1283)](L);
      case "undefined":
        return C(this, j);
    }
  }
  function C(j, T) {
    const L = i;
    var G = t[L(595)][L(459)](j, { schema: {} }, T);
    if (G) {
      var Q = G[L(595)], W = G[L(667)], X = G.baseId, o0 = x[L(459)](j, Q, W, void 0, X);
      return j._fragments[T] = new e({ ref: T, fragment: !0, schema: Q, root: W, baseId: X, validate: o0 }), o0;
    }
  }
  function A(j, T) {
    const L = i;
    return T = t.normalizeId(T), j[L(539)][T] || j[L(506)][T] || j[L(602)][T];
  }
  function D(j) {
    const T = i;
    if (j instanceof RegExp) return M(this, this[T(539)], j), M(this, this[T(506)], j), this;
    switch (typeof j) {
      case "undefined":
        return M(this, this._schemas), M(this, this[T(506)]), this._cache[T(238)](), this;
      case T(1401):
        var L = A(this, j);
        return L && this[T(516)][T(1486)](L[T(2113)]), delete this[T(539)][j], delete this[T(506)][j], this;
      case "object":
        var G = this[T(729)][T(1480)], Q = G ? G(j) : j;
        this[T(516)][T(1486)](Q);
        var W = this[T(617)](j);
        W && (W = t[T(1484)](W), delete this[T(539)][W], delete this[T(506)][W]);
    }
    return this;
  }
  function M(j, T, L) {
    const G = i;
    for (var Q in T) {
      var W = T[Q];
      !W.meta && (!L || L[G(323)](Q)) && (j[G(516)][G(1486)](W[G(2113)]), delete T[Q]);
    }
  }
  function F(j, T, L, G) {
    const Q = i;
    if (typeof j != Q(1507) && typeof j != "boolean") throw new Error(Q(529));
    var W = this._opts.serialize, X = W ? W(j) : j, o0 = this[Q(516)][Q(1364)](X);
    if (o0) return o0;
    G = G || this[Q(729)][Q(1576)] !== !1;
    var c0 = t[Q(1484)](this[Q(617)](j));
    c0 && G && S0(this, c0);
    var e0 = this[Q(729)][Q(2302)] !== !1 && !T, L0;
    e0 && !(L0 = c0 && c0 == t[Q(1484)](j.$schema)) && this[Q(2302)](j, !0);
    var O0 = t[Q(592)][Q(459)](this, j), U0 = new e({ id: c0, schema: j, localRefs: O0, cacheKey: X, meta: L });
    return c0[0] != "#" && G && (this[Q(506)][c0] = U0), this[Q(516)][Q(1157)](X, U0), e0 && L0 && this[Q(2302)](j, !0), U0;
  }
  function q(j, T) {
    const L = i;
    if (j.compiling)
      return j.validate = W, W.schema = j[L(595)], W[L(2121)] = null, W.root = T || W, j[L(595)].$async === !0 && (W.$async = !0), W;
    j[L(1388)] = !0;
    var G;
    j.meta && (G = this[L(729)], this[L(729)] = this._metaOpts);
    var Q;
    try {
      Q = x[L(459)](this, j[L(595)], T, j[L(2032)]);
    } catch (X) {
      throw delete j[L(1974)], X;
    } finally {
      j[L(1388)] = !1, j.meta && (this[L(729)] = G);
    }
    return j[L(1974)] = Q, j[L(1129)] = Q.refs, j[L(1505)] = Q[L(1505)], j.root = Q[L(667)], Q;
    function W() {
      const X = L;
      var o0 = j[X(1974)], c0 = o0[X(2598)](this, arguments);
      return W[X(2121)] = o0.errors, c0;
    }
  }
  function U(j) {
    const T = i;
    switch (j[T(983)]) {
      case T(1977):
        return J;
      case "id":
        return $;
      default:
        return V;
    }
  }
  function $(j) {
    const T = i;
    return j[T(337)] && this.logger[T(2512)](T(1349), j[T(337)]), j.id;
  }
  function V(j) {
    const T = i;
    return j.id && this[T(1673)][T(2512)](T(1458), j.id), j[T(337)];
  }
  function J(j) {
    const T = i;
    if (j[T(337)] && j.id && j[T(337)] != j.id) throw new Error(T(671));
    return j[T(337)] || j.id;
  }
  function s0(j, T) {
    const L = i;
    if (j = j || this[L(2121)], !j) return L(1512);
    T = T || {};
    for (var G = T[L(1070)] === void 0 ? ", " : T[L(1070)], Q = T[L(855)] === void 0 ? "data" : T[L(855)], W = "", X = 0; X < j[L(1396)]; X++) {
      var o0 = j[X];
      o0 && (W += Q + o0.dataPath + " " + o0[L(1717)] + G);
    }
    return W[L(1012)](0, -G.length);
  }
  function i0(j, T) {
    const L = i;
    return typeof T == L(1401) && (T = new RegExp(T)), this[L(2075)][j] = T, this;
  }
  function d0(j) {
    const T = i;
    var L;
    if (j[T(729)][T(1351)] && (L = Cc, j.addMetaSchema(L, L[T(337)], !0)), j._opts[T(643)] !== !1) {
      var G = ha;
      j[T(729)].$data && (G = c(G, h)), j[T(1616)](G, l, !0), j[T(506)][T(297)] = l;
    }
  }
  function l0(j) {
    const T = i;
    var L = j[T(729)].schemas;
    if (L)
      if (Array[T(1606)](L)) j[T(902)](L);
      else
        for (var G in L) j[T(902)](L[G], G);
  }
  function f0(j) {
    const T = i;
    for (var L in j._opts.formats) {
      var G = j[T(729)][T(1575)][L];
      j.addFormat(L, G);
    }
  }
  function y0(j) {
    const T = i;
    for (var L in j[T(729)][T(315)]) {
      var G = j[T(729)][T(315)][L];
      j[T(2186)](L, G);
    }
  }
  function S0(j, T) {
    const L = i;
    if (j._schemas[T] || j._refs[T]) throw new Error(L(310) + T + L(2092));
  }
  function M0(j) {
    const T = i;
    for (var L = u[T(413)](j[T(729)]), G = 0; G < g[T(1396)]; G++) delete L[g[G]];
    return L;
  }
  function C0(j) {
    const T = i;
    var L = j._opts[T(1673)];
    if (L === !1) j[T(1673)] = { log: Q0, warn: Q0, error: Q0 };
    else {
      if (L === void 0 && (L = console), !(typeof L == T(1507) && L[T(624)] && L[T(2512)] && L.error)) throw new Error(T(1259));
      j[T(1673)] = L;
    }
  }
  function Q0() {
  }
  return At;
}
var Nc = Fc();
const qc = zn(Nc);
class Tc extends A2 {
  constructor(x, t) {
    const r = n;
    var e;
    super(t), this[r(2272)] = x, this[r(1861)] = (e = t == null ? void 0 : t.capabilities) !== null && e !== void 0 ? e : {}, this[r(2491)] = t == null ? void 0 : t[r(2459)], this[r(815)](_n, (s) => this._oninitialize(s)), this[r(560)](ea, () => {
      const s = r;
      var a;
      return (a = this[s(237)]) === null || a === void 0 ? void 0 : a.call(this);
    });
  }
  registerCapabilities(x) {
    const t = n;
    if (this[t(981)]) throw new Error(t(1633));
    this[t(1861)] = D2(this._capabilities, x);
  }
  assertCapabilityForMethod(x) {
    const t = n;
    var r, e, s;
    switch (x) {
      case t(426):
        if (!(!((r = this[t(1321)]) === null || r === void 0) && r.sampling)) throw new Error("Client does not support sampling (required for " + x + ")");
        break;
      case t(660):
        if (!(!((e = this[t(1321)]) === null || e === void 0) && e.elicitation)) throw new Error(t(1550) + x + ")");
        break;
      case t(1132):
        if (!(!((s = this[t(1321)]) === null || s === void 0) && s[t(1583)])) throw new Error(t(1403) + x + ")");
        break;
    }
  }
  [n(1476)](x) {
    const t = n;
    switch (x) {
      case t(1706):
        if (!this[t(1861)][t(710)]) throw new Error(t(2266) + x + ")");
        break;
      case t(799):
      case "notifications/resources/list_changed":
        if (!this[t(1861)][t(2050)]) throw new Error(t(2531) + x + ")");
        break;
      case t(1044):
        if (!this._capabilities[t(2590)]) throw new Error(t(482) + x + ")");
        break;
      case t(578):
        if (!this._capabilities[t(396)]) throw new Error(t(1942) + x + ")");
        break;
    }
  }
  assertRequestHandlerCapability(x) {
    const t = n;
    switch (x) {
      case t(426):
        if (!this._capabilities[t(458)]) throw new Error("Server does not support sampling (required for " + x + ")");
        break;
      case "logging/setLevel":
        if (!this._capabilities[t(710)]) throw new Error(t(2266) + x + ")");
        break;
      case "prompts/get":
      case t(844):
        if (!this[t(1861)].prompts) throw new Error(t(1769) + x + ")");
        break;
      case t(2155):
      case t(1292):
      case t(1897):
        if (!this[t(1861)][t(2050)]) throw new Error(t(2527) + x + ")");
        break;
      case t(632):
      case "tools/list":
        if (!this[t(1861)][t(2590)]) throw new Error(t(307) + x + ")");
        break;
    }
  }
  async _oninitialize(x) {
    const t = n, r = x.params[t(1628)];
    return this._clientCapabilities = x[t(665)][t(2216)], this[t(1197)] = x[t(665)][t(2258)], { protocolVersion: To[t(1334)](r) ? r : Zn, capabilities: this.getCapabilities(), serverInfo: this[t(2272)], ...this[t(2491)] && { instructions: this[t(2491)] } };
  }
  [n(358)]() {
    return this[n(1321)];
  }
  [n(869)]() {
    return this._clientVersion;
  }
  [n(2312)]() {
    return this[n(1861)];
  }
  async [n(959)]() {
    const x = n;
    return this[x(365)]({ method: x(959) }, Xt);
  }
  async [n(2430)](x, t) {
    return this[n(365)]({ method: "sampling/createMessage", params: x }, oa, t);
  }
  async [n(2326)](x, t) {
    const r = n, e = await this[r(365)]({ method: r(660), params: x }, ca, t);
    if (e.action === r(1948) && e.content) try {
      const s = new qc(), a = s[r(1904)](x[r(566)]);
      if (!a(e[r(1678)])) throw new Te(ve.InvalidParams, r(2023) + s[r(2164)](a.errors));
    } catch (s) {
      throw s instanceof Te ? s : new Te(ve[r(1361)], "Error validating elicitation response: " + s);
    }
    return e;
  }
  async [n(573)](x, t) {
    const r = n;
    return this.request({ method: r(1132), params: x }, ua, t);
  }
  async [n(1422)](x) {
    const t = n;
    return this[t(614)]({ method: t(1706), params: x });
  }
  async [n(740)](x) {
    return this[n(614)]({ method: "notifications/resources/updated", params: x });
  }
  async sendResourceListChanged() {
    const x = n;
    return this[x(614)]({ method: x(1424) });
  }
  async [n(1992)]() {
    const x = n;
    return this.notification({ method: x(1044) });
  }
  async [n(927)]() {
    const x = n;
    return this[x(614)]({ method: x(578) });
  }
}
class Oc extends Error {
  constructor(x, t) {
    const r = n;
    super(r(2547) + x + " after " + t + "ms"), this.name = "HeartbeatTimeoutError";
  }
}
const hx = /* @__PURE__ */ new Map();
class Ac {
  constructor(x) {
    const t = n;
    if (this[t(1761)] = [], this[t(2150)] = Date[t(986)](), hx[t(879)](x[t(1901)])) {
      const r = hx[t(1364)](x.posterIdentifier);
      r && r[t(679)]();
    }
    this.posterIdentifier = x.posterIdentifier, this.messagePoster = x[t(1601)], this[t(1077)] = x.addMessageEventListener, this[t(2559)] = x[t(2559)], this[t(388)] = x[t(388)] ?? 5e3, this[t(2232)] = x[t(2232)] ?? 5e3, this[t(2325)] = x[t(2325)] ?? !1, hx.set(this.posterIdentifier, this), this.listenMessageCallback = this.listenMessageCallback.bind(this), this.externalListenMessageCallback = this[t(1077)](this.listenMessageCallback);
  }
  [n(1114)](x) {
    const t = n;
    if (x[t(1901)] === this[t(1901)]) {
      if (x.channel === "sdppp-heartbeat") {
        x[t(1087)] === t(959) && !this[t(2325)] ? this.messagePoster({ channel: t(1839), posterIdentifier: this.posterIdentifier, type: t(1168), timestamp: x.timestamp }) : x.type === "pong" && (this[t(2150)] = Date[t(986)](), this.heartbeatTimeoutTimer && (clearTimeout(this[t(1020)]), this.heartbeatTimeoutTimer = void 0));
        return;
      }
      x[t(1511)] === "sdppp" && (this.onmessage && t(2519) in x ? this[t(882)](x[t(2519)]) : t(2519) in x && this[t(1761)].push(x[t(2519)]));
    }
  }
  async [n(2328)]() {
    const x = n;
    for (; this[x(1761)][x(1396)] > 0; ) {
      const t = this.messageQueue[x(2225)]();
      t && this[x(882)] && this[x(882)](t);
    }
    this.startHeartbeat();
  }
  [n(1367)]() {
    const x = n;
    this[x(2605)] = setInterval(() => {
      const t = x, r = Date[t(986)]();
      this[t(1601)]({ channel: "sdppp-heartbeat", posterIdentifier: this.posterIdentifier, type: t(959), timestamp: r }), this[t(1020)] = setTimeout(() => {
        const e = t, s = new Oc(this[e(1901)], this.heartbeatTimeout);
        this[e(2309)] && this[e(2309)](s);
      }, this[t(2232)]);
    }, this[x(388)]);
  }
  async [n(2246)](x, t) {
    const r = n;
    this[r(1601)]({ channel: r(1506), posterIdentifier: this[r(1901)], payload: x });
  }
  async [n(679)]() {
    const x = n;
    this[x(2605)] && (clearInterval(this[x(2605)]), this[x(2605)] = void 0), this[x(1020)] && (clearTimeout(this[x(1020)]), this[x(1020)] = void 0), hx[x(381)](this[x(1901)]), this[x(2559)](this[x(885)]);
  }
}
const Dc = ax[n(748)](n(1779));
async function pa() {
  const i = n;
  if (!window[i(1289)]) return;
  const x = new Ac({ posterIdentifier: "comfy-uxp", messagePoster: (e) => {
    const s = i;
    window[s(1289)][s(2387)](e, "*");
  }, addMessageEventListener: (e) => {
    const s = i, a = (o) => {
      e(o[K(2197)]);
    };
    return window.addEventListener(s(1717), a), a;
  }, removeMessageEventListener: (e) => {
    const s = i;
    window[s(2137)](s(1717), e);
  } });
  x[i(2309)] = (e) => {
    Dc(i(2369), e);
  };
  const t = new Tc({ name: i(919), version: i(1080) }, {}), r = new bi(t);
  return await r[i(543)](x), window[i(1289)].postMessage({ channel: "mcp-mesh-router", meshName: i(1725), action: "connect", version: "510" }, "*"), await P0[i(543)](i(1987), r);
}
const jc = Object[n(519)](Object[n(414)]({ __proto__: null, connectUXP: pa, mcpMesh: P0 }, Symbol[n(1930)], { value: n(1724) }));
Oe[n(2533)](n(1007), (i) => {
  const x = n, t = T0[x(2431)] || T0[x(733)][x(1479)], r = t[x(387)];
  if (i[x(1180)].id !== r.activeState.id) return;
  const e = P0[x(845)][x(1298)]()[x(2204)], s = Gt(T0.graph, r);
  ga(s, e) && P0[x(845)].setState({ widgetableStructure: s }), P0.store.setState({ widgetableValues: Fx(T0[x(1620)]) });
}), Oe.addEventListener(n(1988), () => {
  const i = n;
  P0.store[i(847)]({ widgetableValues: Fx(T0[i(1620)]) });
});
let Gs = 0, Qs = !0, Xs = "";
function ma() {
  const i = n;
  requestAnimationFrame(ma);
  const x = T0[i(2431)] || T0[i(733)][i(1479)], t = x[i(387)], r = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[i(1225)]) || "", s = (t == null ? void 0 : t.isPersisted) || !0;
  if (r === Gs && e === Xs && s === Qs) return;
  Gs = r, Xs = e, Qs = s;
  const a = Gt(T0[i(1620)], t), o = Fx(T0.graph);
  P0.store[i(847)]({ widgetableStructure: a, widgetableValues: o }), setTimeout(() => {
    const c = i;
    if (t !== x[c(387)]) return;
    const u = Gt(T0[c(1620)], t), d = Fx(T0[c(1620)]);
    ga(u, a) && P0.store.setState({ widgetableStructure: u }), P0[c(845)][c(847)]({ widgetableValues: d });
  }, 800);
}
requestAnimationFrame(ma);
function ga(i, x) {
  const t = n;
  return i[t(281)].length !== x[t(281)][t(1396)] || JSON[t(328)](i[t(281)]) !== JSON.stringify(x[t(281)]) || JSON[t(328)](i.nodes) !== JSON[t(328)](x.nodes);
}
let Ys = !1;
async function Mc() {
  const i = n;
  if (Ys) return Promise[i(1315)]();
  Oe.user && P0.store[i(847)]({ comfyUserToken: Oe[i(2024)] }), Ys = !0;
}
ax[n(748)](n(2102));
async function Lc(i, x, t) {
  const r = n;
  x[r(2533)](r(1191), ({ detail: a }) => {
    const o = r;
    if (!a) return;
    let c = 0, u = 0;
    !isNaN(a[o(2425)] / a[o(550)]) && (c = Math[o(2520)](a[o(2425)] / a[o(550)] * 100));
    const d = a.node, f = graph.nodes[o(950)]((l) => l.id == d);
    if (f && f.order) {
      const l = 100 / graph[o(481)][o(1396)];
      u = Math[o(2520)](f[o(2487)] * l) + (c ? c / 100 * l : 0);
    }
    P0[o(845)][o(847)]({ progress: c, graphProgress: u });
  }), x[r(2533)]("status", (a) => {
    var c;
    const o = r;
    (c = a[o(1180)]) != null && c[o(2558)] && P0[o(845)].setState({ queueSize: a[o(1180)].exec_info[o(2469)] });
  }), x.addEventListener(r(1183), ({ detail: a }) => {
    const o = r;
    if (P0[o(845)].setState({ executingNodeTitle: "", executingNodeID: "", lastError: a[o(1777)] }), a[o(1666)]) {
      const c = i[o(1620)].nodes[o(950)]((u) => u.id == a.node_id);
      P0.store[o(847)]({ widgetableErrors: { [a[o(1666)]]: "[" + ((c == null ? void 0 : c.title) || a[o(1666)]) + "]" + a[o(1777)] } });
    }
  }), x[r(2533)](r(1273), (a) => {
    const o = r, c = a[o(1180)], u = graph[o(481)][o(950)]((d) => d.id == c);
    if (u) {
      const d = 100 / graph[o(481)][o(1396)];
      P0[o(845)][o(847)]({ executingNodeTitle: u[o(1406)], executingNodeID: u.id, graphProgress: Math[o(2520)](u[o(2487)] * d) });
    }
  }), x[r(2533)]("execution_interrupted", () => {
    const a = r;
    P0[a(845)][a(847)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x.addEventListener(r(835), ({ detail: a }) => {
    const o = r;
    P0.store.setState({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date[o(986)]() });
  });
  const e = /* @__PURE__ */ new Map();
  x[r(2533)](r(2378), (a) => {
    const o = r;
    P0[o(845)][o(847)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[o(1364)](a[o(1180)][o(1405)]) || [])[o(1227)]((u) => ({ url: u, thumbnail: u }));
    Fo(a[o(1180)][o(1405)], c), e[o(381)](a.detail[o(1405)]);
  }), x[r(2533)]("executed", (a) => {
    const o = r, c = e[o(1364)](a[o(1180)].prompt_id) || [];
    a.detail[o(2133)] && Array.isArray(a[o(1180)][o(2133)][o(1738)]) && a[o(1180)][o(2133)][o(1738)][o(1396)] > 0 && c[o(757)](...a[o(1180)][o(2133)][o(1738)][o(254)]((u) => u[o(1087)] == "output")[o(1227)]((u) => {
      const d = o;
      return location[d(312)] + location[d(1871)] + "api/view?type=" + u.type + "&filename=" + encodeURIComponent(u.filename) + (u[d(2300)] ? d(1788) + encodeURIComponent(u[d(2300)]) : "");
    })), a[o(1180)][o(2133)] && Array[o(1606)](a[o(1180)][o(2133)][o(951)]) && a[o(1180)][o(2133)].sdppp_assets.length > 0 && c.push(...a[o(1180)][o(2133)][o(951)][o(1227)]((u) => {
      const d = o;
      return location[d(312)] + location[d(1871)] + "sd-ppp-static/sdppp_images/" + encodeURIComponent(u);
    })), e[o(933)](a.detail[o(1405)], c);
  });
  let s = null;
  x[r(2533)]("reconnecting", (a) => {
    s = setTimeout(() => {
      const o = K;
      P0[o(845)].setState({ comfyWSState: o(268) });
    }, 1e3);
  }), x[r(2533)]("reconnected", (a) => {
    const o = r;
    P0[o(845)][o(847)]({ comfyWSState: o(970) }), clearTimeout(s);
  });
}
let Dt = [];
(async function() {
  var x, t, r, e, s, a;
  const i = n;
  if (typeof gradioApp == i(654)) {
    try {
      const o = (t = (x = window[i(1751)]) == null ? void 0 : x[i(1614)]) == null ? void 0 : t[i(1614)], c = (e = (r = window.comfyAPI) == null ? void 0 : r.ui) == null ? void 0 : e[i(2560)], u = (a = (s = window.comfyAPI) == null ? void 0 : s.api) == null ? void 0 : a[i(574)];
      if (!o || !u || !c) throw new Error(i(1354));
      await Mc(), await pa(), await Lc(o, u, c), import("./sdppp-custom.js").then((d) => {
        d[i(906)](_e, 2);
      });
    } catch (o) {
      Dt[i(757)](o[i(2366)] || o.message || o);
    }
    await new Promise((o) => setTimeout(o, 2e3)), Dt[i(1396)] && console[i(2281)](Dt[0]);
  }
})();
