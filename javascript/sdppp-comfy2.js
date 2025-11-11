var Tn = Object.defineProperty;
var On = (i, x, t) => x in i ? Tn(i, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[x] = t;
var m0 = (i, x, t) => On(i, typeof x != "symbol" ? x + "" : x, t);
const a = K;
(function(i, x) {
  const t = K, s = i();
  for (; ; )
    try {
      if (parseInt(t(2254)) / 1 + -parseInt(t(792)) / 2 + parseInt(t(1502)) / 3 * (parseInt(t(2796)) / 4) + -parseInt(t(817)) / 5 + parseInt(t(675)) / 6 + parseInt(t(2280)) / 7 + -parseInt(t(2264)) / 8 * (parseInt(t(1853)) / 9) === x) break;
      s.push(s.shift());
    } catch {
      s.push(s.shift());
    }
})(bx, 865775);
const q0 = window[a(968)][a(1461)][a(1461)];
window.comfyAPI.ui.$el;
const Ae = window[a(968)][a(2691)][a(2691)];
var Xr;
class An {
  constructor(x) {
    m0(this, Xr);
    const t = a;
    this.definition = x;
    const s = this.validate();
    if (!s[t(1016)]) throw new Error("Invalid graph definition: " + s[t(862)].join(", "));
  }
  validate() {
    const x = a, t = [];
    (!this[x(2596)].nodes || Object.keys(this[x(2596)].nodes)[x(1492)] === 0) && t[x(893)](x(1479));
    for (const [e, r] of this[x(2596)][x(2846)])
      !this[x(2596)][x(832)][e] && t.push(x(2234) + e), !this[x(2596)][x(832)][r] && t[x(893)]("Edge references unknown target node: " + r);
    const s = this.detectCycles();
    return !s[x(1016)] && t.push(...s[x(862)]), { valid: t[x(1492)] === 0, errors: t };
  }
  [(Xr = a(2596), a(957))]() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const s of Object.keys(this.definition[x(832)]))
      t[x(2296)](s, []);
    for (const [s, e] of this[x(2596)][x(2846)]) {
      const r = t[x(1919)](s) || [];
      r.push(e), t[x(2296)](s, r);
    }
    return t;
  }
  [a(2576)]() {
    const x = a, t = [], s = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), r = this[x(957)](), n = (o, c) => {
      const d = x;
      if (e[d(901)](o)) {
        const f = c[d(2098)](o), l = c[d(1981)](f).concat(o);
        return t[d(893)](d(1924) + l[d(727)](d(2588))), !0;
      }
      if (s[d(901)](o)) return !1;
      s[d(911)](o), e[d(911)](o);
      const u = r[d(1919)](o) || [];
      for (const f of u)
        if (n(f, [...c, o])) return !0;
      return e[d(1186)](o), !1;
    };
    for (const o of Object[x(2693)](this[x(2596)][x(832)]))
      !s[x(901)](o) && n(o, []);
    return { valid: t[x(1492)] === 0, errors: t };
  }
  buildAdjacencyList() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const s of Object.keys(this.definition[x(832)]))
      t[x(2296)](s, []);
    for (const [s, e] of this.definition[x(2846)]) {
      const r = t.get(s) || [];
      r.push(e), t.set(s, r);
      const n = t[x(1919)](e) || [];
      n.push(s), t.set(e, n);
    }
    return t;
  }
  [a(1533)](x) {
    const t = a;
    return this[t(1344)]()[t(1919)](x) || [];
  }
  [a(2552)](x) {
    const t = a;
    return this[t(2596)][t(832)][x];
  }
  [a(536)]() {
    const x = a;
    return Object.keys(this[x(2596)][x(832)]);
  }
  [a(1604)](x, t) {
    const s = a;
    return this[s(2596)].edges[s(2416)](([e, r]) => e === x && r === t || e === t && r === x);
  }
  [a(1872)](x, t) {
    const s = a;
    if (x === t) return [x];
    const e = this[s(1344)](), r = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; r[s(1492)] > 0; ) {
      const { nodeId: o, path: c } = r[s(2388)]();
      if (n[s(901)](o)) continue;
      if (n[s(911)](o), o === t) return c;
      const d = e[s(1919)](o) || [];
      for (const u of d)
        !n[s(901)](u) && r[s(893)]({ nodeId: u, path: [...c, u] });
    }
    return null;
  }
  hasPath(x, t) {
    return this[a(1872)](x, t) !== null;
  }
  [a(1558)]() {
    return { ...this.definition };
  }
}
const ka = (i) => {
  let x;
  const t = /* @__PURE__ */ new Set(), s = (d, u) => {
    const f = K, l = typeof d === f(621) ? d(x) : d;
    if (!Object.is(l, x)) {
      const g = x;
      x = u ?? (typeof l !== f(2535) || l === null) ? l : Object[f(1352)]({}, x, l), t[f(1615)]((h) => h(x, g));
    }
  }, e = () => x, r = () => c, n = (d) => (t[K(911)](d), () => t.delete(d)), o = { setState: s, getState: e, getInitialState: r, subscribe: n }, c = x = i(s, e, o);
  return o;
}, Dn = (i) => i ? ka(i) : ka;
var N0;
(function(i) {
  const x = a;
  i[x(2331)] = (r) => {
  };
  function t(r) {
  }
  i[x(1209)] = t;
  function s(r) {
    throw new Error();
  }
  i[x(1902)] = s, i.arrayToEnum = (r) => {
    const n = {};
    for (const o of r)
      n[o] = o;
    return n;
  }, i[x(2811)] = (r) => {
    const n = x, o = i[n(1923)](r)[n(861)]((d) => typeof r[r[d]] !== n(1120)), c = {};
    for (const d of o)
      c[d] = r[d];
    return i[n(532)](c);
  }, i[x(532)] = (r) => {
    const n = x;
    return i[n(1923)](r)[n(1790)](function(o) {
      return r[o];
    });
  }, i[x(1923)] = typeof Object.keys == "function" ? (r) => Object[x(2693)](r) : (r) => {
    const n = x, o = [];
    for (const c in r)
      Object[n(757)][n(2472)].call(r, c) && o[n(893)](c);
    return o;
  }, i.find = (r, n) => {
    for (const o of r)
      if (n(o)) return o;
  }, i[x(1111)] = typeof Number[x(1111)] == "function" ? (r) => Number[x(1111)](r) : (r) => typeof r === x(1120) && Number[x(565)](r) && Math.floor(r) === r;
  function e(r, n = x(2261)) {
    const o = x;
    return r[o(1790)]((c) => typeof c == "string" ? "'" + c + "'" : c)[o(727)](n);
  }
  i[x(1131)] = e, i[x(2105)] = (r, n) => {
    const o = x;
    return typeof n == "bigint" ? n[o(2643)]() : n;
  };
})(N0 || (N0 = {}));
var Pa;
(function(i) {
  i.mergeShapes = (x, t) => ({ ...x, ...t });
})(Pa || (Pa = {}));
const t0 = N0[a(2581)]([a(1346), a(664), a(1120), a(2656), "float", a(2173), a(1470), "bigint", a(2473), "function", "undefined", a(693), a(1355), a(2535), a(2067), a(1472), a(1188), a(502), a(1790), "set"]), Ee = (i) => {
  const x = a;
  switch (typeof i) {
    case x(633):
      return t0[x(633)];
    case x(1346):
      return t0[x(1346)];
    case "number":
      return Number.isNaN(i) ? t0[x(664)] : t0[x(1120)];
    case x(2173):
      return t0[x(2173)];
    case x(621):
      return t0.function;
    case x(2428):
      return t0.bigint;
    case "symbol":
      return t0[x(2473)];
    case x(2535):
      return Array[x(1320)](i) ? t0[x(1355)] : i === null ? t0[x(693)] : i[x(2139)] && typeof i[x(2139)] === x(621) && i[x(2678)] && typeof i[x(2678)] == "function" ? t0[x(1472)] : typeof Map !== x(633) && i instanceof Map ? t0.map : typeof Set < "u" && i instanceof Set ? t0[x(2296)] : typeof Date !== x(633) && i instanceof Date ? t0[x(1470)] : t0[x(2535)];
    default:
      return t0.unknown;
  }
}, W = N0[a(2581)]([a(2542), a(761), a(2789), a(1680), a(1368), a(758), "unrecognized_keys", "invalid_arguments", a(2925), a(1299), "invalid_string", a(1787), "too_big", "invalid_intersection_types", a(2373), a(2739)]);
class ke extends Error {
  get errors() {
    return this[a(708)];
  }
  constructor(x) {
    const t = a;
    super(), this[t(708)] = [], this[t(582)] = (e) => {
      const r = t;
      this[r(708)] = [...this[r(708)], e];
    }, this[t(2923)] = (e = []) => {
      const r = t;
      this[r(708)] = [...this[r(708)], ...e];
    };
    const s = new.target[t(757)];
    Object.setPrototypeOf ? Object[t(1034)](this, s) : this.__proto__ = s, this.name = t(2312), this[t(708)] = x;
  }
  [a(2503)](x) {
    const t = x || function(r) {
      return r.message;
    }, s = { _errors: [] }, e = (r) => {
      const n = K;
      for (const o of r[n(708)])
        if (o[n(2952)] === n(1680)) o[n(2243)][n(1790)](e);
        else if (o[n(2952)] === n(2925)) e(o[n(2450)]);
        else if (o.code === "invalid_arguments") e(o.argumentsError);
        else if (o[n(1522)][n(1492)] === 0) s[n(1263)].push(t(o));
        else {
          let c = s, d = 0;
          for (; d < o[n(1522)][n(1492)]; ) {
            const u = o[n(1522)][d];
            d === o[n(1522)].length - 1 ? (c[u] = c[u] || { _errors: [] }, c[u][n(1263)][n(893)](t(o))) : c[u] = c[u] || { _errors: [] }, c = c[u], d++;
          }
        }
    };
    return e(this), s;
  }
  static assert(x) {
    const t = a;
    if (!(x instanceof ke)) throw new Error(t(840) + x);
  }
  toString() {
    return this[a(1261)];
  }
  get [a(1261)]() {
    const x = a;
    return JSON.stringify(this.issues, N0[x(2105)], 2);
  }
  get isEmpty() {
    const x = a;
    return this.issues[x(1492)] === 0;
  }
  [a(2496)](x = (t) => t[a(1261)]) {
    const t = a, s = {}, e = [];
    for (const r of this.issues)
      if (r[t(1522)][t(1492)] > 0) {
        const n = r.path[0];
        s[n] = s[n] || [], s[n].push(x(r));
      } else e[t(893)](x(r));
    return { formErrors: e, fieldErrors: s };
  }
  get [a(2536)]() {
    return this[a(2496)]();
  }
}
ke[a(2587)] = (i) => new ke(i);
const jt = (i, x) => {
  const t = a;
  let s;
  switch (i[t(2952)]) {
    case W[t(2542)]:
      i.received === t0.undefined ? s = t(2910) : s = t(711) + i.expected + t(2920) + i[t(1149)];
      break;
    case W[t(761)]:
      s = t(1365) + JSON[t(2149)](i[t(2703)], N0[t(2105)]);
      break;
    case W.unrecognized_keys:
      s = t(1619) + N0[t(1131)](i[t(2693)], ", ");
      break;
    case W.invalid_union:
      s = t(2710);
      break;
    case W[t(1368)]:
      s = t(694) + N0[t(1131)](i[t(2308)]);
      break;
    case W[t(758)]:
      s = t(1450) + N0.joinValues(i[t(2308)]) + t(1317) + i[t(1149)] + "'";
      break;
    case W.invalid_arguments:
      s = "Invalid function arguments";
      break;
    case W[t(2925)]:
      s = t(2976);
      break;
    case W[t(1299)]:
      s = t(2075);
      break;
    case W[t(572)]:
      typeof i.validation === t(2535) ? t(2583) in i[t(2883)] ? (s = t(1860) + i[t(2883)].includes + '"', typeof i[t(2883)][t(2853)] == "number" && (s = s + t(1740) + i[t(2883)][t(2853)])) : t(1701) in i[t(2883)] ? s = 'Invalid input: must start with "' + i[t(2883)][t(1701)] + '"' : "endsWith" in i.validation ? s = t(1343) + i.validation[t(2192)] + '"' : N0[t(1902)](i[t(2883)]) : i.validation !== t(1910) ? s = t(2272) + i[t(2883)] : s = t(835);
      break;
    case W[t(1787)]:
      i[t(2417)] === "array" ? s = "Array must contain " + (i[t(575)] ? "exactly" : i[t(1371)] ? t(2651) : t(923)) + " " + i[t(2551)] + t(1691) : i[t(2417)] === t(1346) ? s = "String must contain " + (i[t(575)] ? t(2882) : i[t(1371)] ? "at least" : t(1788)) + " " + i[t(2551)] + t(2638) : i.type === t(1120) ? s = "Number must be " + (i[t(575)] ? t(1183) : i[t(1371)] ? t(1282) : "greater than ") + i[t(2551)] : i[t(2417)] === t(2428) ? s = t(2244) + (i.exact ? t(1183) : i.inclusive ? t(1282) : t(2046)) + i[t(2551)] : i[t(2417)] === t(1470) ? s = t(1725) + (i[t(575)] ? t(1183) : i[t(1371)] ? "greater than or equal to " : "greater than ") + new Date(Number(i[t(2551)])) : s = t(2710);
      break;
    case W.too_big:
      i[t(2417)] === t(1355) ? s = t(985) + (i.exact ? t(2882) : i[t(1371)] ? t(1025) : t(2180)) + " " + i[t(2717)] + " element(s)" : i[t(2417)] === "string" ? s = "String must contain " + (i[t(575)] ? t(2882) : i[t(1371)] ? t(1025) : t(1157)) + " " + i[t(2717)] + t(2638) : i.type === t(1120) ? s = t(2244) + (i.exact ? t(2882) : i[t(1371)] ? t(2440) : t(2180)) + " " + i[t(2717)] : i[t(2417)] === t(2428) ? s = t(873) + (i[t(575)] ? t(2882) : i[t(1371)] ? "less than or equal to" : t(2180)) + " " + i.maximum : i[t(2417)] === "date" ? s = t(1725) + (i[t(575)] ? t(2882) : i[t(1371)] ? "smaller than or equal to" : "smaller than") + " " + new Date(Number(i[t(2717)])) : s = t(2710);
      break;
    case W[t(2789)]:
      s = t(2710);
      break;
    case W[t(1524)]:
      s = t(659);
      break;
    case W[t(2373)]:
      s = "Number must be a multiple of " + i[t(1683)];
      break;
    case W.not_finite:
      s = t(2128);
      break;
    default:
      s = x.defaultError, N0.assertNever(i);
  }
  return { message: s };
};
let jn = jt;
function Mn() {
  return jn;
}
const Ln = (i) => {
  const x = a, { data: t, path: s, errorMaps: e, issueData: r } = i, n = [...s, ...r[x(1522)] || []], o = { ...r, path: n };
  if (r[x(1261)] !== void 0) return { ...r, path: n, message: r.message };
  let c = "";
  const d = e.filter((u) => !!u).slice()[x(2092)]();
  for (const u of d)
    c = u(o, { data: t, defaultError: c })[x(1261)];
  return { ...r, path: n, message: c };
};
function Y(i, x) {
  const t = a, s = Mn(), e = Ln({ issueData: x, data: i[t(1369)], path: i[t(1522)], errorMaps: [i[t(521)][t(1791)], i[t(1178)], s, s === jt ? void 0 : jt][t(861)]((r) => !!r) });
  i[t(521)][t(708)][t(893)](e);
}
class ee {
  constructor() {
    const x = a;
    this[x(1454)] = "valid";
  }
  [a(1407)]() {
    const x = a;
    this[x(1454)] === x(1016) && (this[x(1454)] = x(1407));
  }
  [a(661)]() {
    const x = a;
    this[x(1454)] !== x(2699) && (this[x(1454)] = x(2699));
  }
  static [a(1513)](x, t) {
    const s = a, e = [];
    for (const r of t) {
      if (r[s(2666)] === s(2699)) return h0;
      r[s(2666)] === "dirty" && x[s(1407)](), e[s(893)](r[s(1454)]);
    }
    return { status: x[s(1454)], value: e };
  }
  static async mergeObjectAsync(x, t) {
    const s = a, e = [];
    for (const r of t) {
      const n = await r[s(771)], o = await r[s(1454)];
      e[s(893)]({ key: n, value: o });
    }
    return ee[s(2833)](x, e);
  }
  static [a(2833)](x, t) {
    const s = a, e = {};
    for (const r of t) {
      const { key: n, value: o } = r;
      if (n[s(2666)] === s(2699) || o.status === s(2699)) return h0;
      n[s(2666)] === s(1407) && x[s(1407)](), o.status === s(1407) && x[s(1407)](), n[s(1454)] !== s(2469) && (typeof o[s(1454)] !== s(633) || r[s(2313)]) && (e[n[s(1454)]] = o[s(1454)]);
    }
    return { status: x.value, value: e };
  }
}
const h0 = Object.freeze({ status: "aborted" }), Xe = (i) => ({ status: a(1407), value: i }), ae = (i) => ({ status: a(1016), value: i }), Ea = (i) => i.status === a(2699), Ia = (i) => i[a(2666)] === a(1407), Ve = (i) => i[a(2666)] === a(1016), mx = (i) => typeof Promise !== a(633) && i instanceof Promise;
var r0;
(function(i) {
  const x = a;
  i.errToObj = (t) => typeof t === x(1346) ? { message: t } : t || {}, i[x(2643)] = (t) => typeof t == "string" ? t : t == null ? void 0 : t[x(1261)];
})(r0 || (r0 = {}));
class he {
  constructor(x, t, s, e) {
    const r = a;
    this._cachedPath = [], this.parent = x, this[r(1369)] = t, this[r(1578)] = s, this[r(1652)] = e;
  }
  get [a(1522)]() {
    const x = a;
    return !this[x(2731)].length && (Array[x(1320)](this._key) ? this._cachedPath[x(893)](...this[x(1578)], ...this._key) : this[x(2731)].push(...this._path, this[x(1652)])), this[x(2731)];
  }
}
const Ra = (i, x) => {
  const t = a;
  if (Ve(x)) return { success: !0, data: x.value };
  if (!i.common[t(708)][t(1492)]) throw new Error(t(2017));
  return { success: !1, get error() {
    const s = t;
    if (this[s(2160)]) return this[s(2160)];
    const e = new ke(i.common[s(708)]);
    return this[s(2160)] = e, this._error;
  } };
};
function v0(i) {
  const x = a;
  if (!i) return {};
  const { errorMap: t, invalid_type_error: s, required_error: e, description: r } = i;
  if (t && (s || e)) throw new Error(x(763));
  return t ? { errorMap: t, description: r } : { errorMap: (o, c) => {
    const d = x, { message: u } = i;
    return o.code === "invalid_enum_value" ? { message: u ?? c[d(2622)] } : typeof c[d(1369)] > "u" ? { message: u ?? e ?? c[d(2622)] } : o[d(2952)] !== d(2542) ? { message: c.defaultError } : { message: u ?? s ?? c[d(2622)] };
  }, description: r };
}
class C0 {
  get [a(2023)]() {
    const x = a;
    return this[x(2454)][x(2023)];
  }
  [a(975)](x) {
    return Ee(x[a(1369)]);
  }
  _getOrReturnCtx(x, t) {
    const s = a;
    return t || { common: x[s(1220)].common, data: x[s(1369)], parsedType: Ee(x[s(1369)]), schemaErrorMap: this._def[s(2618)], path: x[s(1522)], parent: x[s(1220)] };
  }
  _processInputParams(x) {
    const t = a;
    return { status: new ee(), ctx: { common: x[t(1220)][t(521)], data: x.data, parsedType: Ee(x.data), schemaErrorMap: this[t(2454)][t(2618)], path: x[t(1522)], parent: x[t(1220)] } };
  }
  _parseSync(x) {
    const t = a, s = this[t(769)](x);
    if (mx(s)) throw new Error(t(2598));
    return s;
  }
  [a(1808)](x) {
    const t = a, s = this[t(769)](x);
    return Promise[t(1362)](s);
  }
  [a(1205)](x, t) {
    const s = a, e = this[s(2525)](x, t);
    if (e[s(1058)]) return e.data;
    throw e[s(1978)];
  }
  safeParse(x, t) {
    const s = a, e = { common: { issues: [], async: (t == null ? void 0 : t[s(687)]) ?? !1, contextualErrorMap: t == null ? void 0 : t[s(2618)] }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this[s(2454)].errorMap, parent: null, data: x, parsedType: Ee(x) }, r = this[s(1935)]({ data: x, path: e[s(1522)], parent: e });
    return Ra(e, r);
  }
  [a(2954)](x) {
    var e, r;
    const t = a, s = { common: { issues: [], async: !!this[t(1781)][t(687)] }, path: [], schemaErrorMap: this._def[t(2618)], parent: null, data: x, parsedType: Ee(x) };
    if (!this[t(1781)][t(687)]) try {
      const n = this._parseSync({ data: x, path: [], parent: s });
      return Ve(n) ? { value: n[t(1454)] } : { issues: s[t(521)][t(708)] };
    } catch (n) {
      (r = (e = n == null ? void 0 : n[t(1261)]) == null ? void 0 : e[t(1861)]()) != null && r[t(2583)]("encountered") && (this[t(1781)][t(687)] = !0), s[t(521)] = { issues: [], async: !0 };
    }
    return this[t(1808)]({ data: x, path: [], parent: s })[t(2139)]((n) => Ve(n) ? { value: n[t(1454)] } : { issues: s.common.issues });
  }
  async [a(2141)](x, t) {
    const s = a, e = await this[s(2147)](x, t);
    if (e[s(1058)]) return e.data;
    throw e[s(1978)];
  }
  async [a(2147)](x, t) {
    const s = a, e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[s(2618)], async: !0 }, path: (t == null ? void 0 : t[s(1522)]) || [], schemaErrorMap: this[s(2454)].errorMap, parent: null, data: x, parsedType: Ee(x) }, r = this[s(769)]({ data: x, path: e[s(1522)], parent: e }), n = await (mx(r) ? r : Promise[s(1362)](r));
    return Ra(e, n);
  }
  [a(2233)](x, t) {
    const s = a, e = (r) => {
      const n = K;
      return typeof t === n(1346) || typeof t === n(633) ? { message: t } : typeof t === n(621) ? t(r) : t;
    };
    return this[s(1739)]((r, n) => {
      const o = s, c = x(r), d = () => n[o(582)]({ code: W[o(2789)], ...e(r) });
      return typeof Promise < "u" && c instanceof Promise ? c[o(2139)]((u) => u ? !0 : (d(), !1)) : c ? !0 : (d(), !1);
    });
  }
  [a(2549)](x, t) {
    const s = a;
    return this[s(1739)]((e, r) => {
      const n = s;
      return x(e) ? !0 : (r[n(582)](typeof t === n(621) ? t(e, r) : t), !1);
    });
  }
  [a(1739)](x) {
    const t = a;
    return new Te({ schema: this, typeName: p0[t(1647)], effect: { type: t(2549), refinement: x } });
  }
  [a(1060)](x) {
    return this._refinement(x);
  }
  constructor(x) {
    const t = a;
    this[t(1783)] = this[t(2147)], this[t(2454)] = x, this.parse = this[t(1205)].bind(this), this[t(2525)] = this[t(2525)][t(2654)](this), this[t(2141)] = this[t(2141)][t(2654)](this), this.safeParseAsync = this[t(2147)][t(2654)](this), this[t(1783)] = this[t(1783)][t(2654)](this), this[t(2233)] = this.refine[t(2654)](this), this.refinement = this[t(2549)].bind(this), this[t(1060)] = this[t(1060)].bind(this), this[t(793)] = this[t(793)].bind(this), this[t(2093)] = this[t(2093)].bind(this), this[t(2344)] = this[t(2344)][t(2654)](this), this.array = this[t(1355)][t(2654)](this), this[t(1472)] = this[t(1472)][t(2654)](this), this.or = this.or[t(2654)](this), this[t(1156)] = this[t(1156)][t(2654)](this), this[t(999)] = this[t(999)].bind(this), this.brand = this.brand[t(2654)](this), this[t(1753)] = this[t(1753)].bind(this), this[t(2678)] = this.catch.bind(this), this.describe = this.describe[t(2654)](this), this[t(1300)] = this[t(1300)][t(2654)](this), this.readonly = this.readonly[t(2654)](this), this[t(1055)] = this[t(1055)][t(2654)](this), this[t(1328)] = this[t(1328)][t(2654)](this), this["~standard"] = { version: 1, vendor: "zod", validate: (s) => this[t(2954)](s) };
  }
  [a(793)]() {
    return Se[a(2587)](this, this._def);
  }
  [a(2093)]() {
    const x = a;
    return Me[x(2587)](this, this[x(2454)]);
  }
  nullish() {
    const x = a;
    return this.nullable()[x(793)]();
  }
  [a(1355)]() {
    return le.create(this);
  }
  [a(1472)]() {
    return kx.create(this, this._def);
  }
  or(x) {
    const t = a;
    return yx[t(2587)]([this, x], this[t(2454)]);
  }
  and(x) {
    const t = a;
    return vx[t(2587)](this, x, this[t(2454)]);
  }
  [a(999)](x) {
    const t = a;
    return new Te({ ...v0(this[t(2454)]), schema: this, typeName: p0[t(1647)], effect: { type: t(999), transform: x } });
  }
  default(x) {
    const t = a, s = typeof x === t(621) ? x : () => x;
    return new Px({ ...v0(this[t(2454)]), innerType: this, defaultValue: s, typeName: p0.ZodDefault });
  }
  [a(2592)]() {
    const x = a;
    return new Ls({ typeName: p0.ZodBranded, type: this, ...v0(this[x(2454)]) });
  }
  [a(2678)](x) {
    const t = a, s = typeof x === t(621) ? x : () => x;
    return new Ex({ ...v0(this._def), innerType: this, catchValue: s, typeName: p0[t(1811)] });
  }
  [a(1658)](x) {
    const t = a, s = this[t(2527)];
    return new s({ ...this[t(2454)], description: x });
  }
  [a(1300)](x) {
    return ta[a(2587)](this, x);
  }
  [a(2055)]() {
    return Ix[a(2587)](this);
  }
  [a(1328)]() {
    const x = a;
    return this.safeParse(void 0)[x(1058)];
  }
  isNullable() {
    return this[a(2525)](null).success;
  }
}
const $n = /^c[^\s-]{8,}$/i, zn = /^[0-9a-z]+$/, Un = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Hn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Vn = /^[a-z0-9_-]{21}$/i, Zn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Bn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Wn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Kn = a(1501);
let Lx;
const Gn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Jn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Qn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Xn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Yn = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, _n = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ds = a(615), ei = new RegExp("^" + Ds + "$");
function K(i, x) {
  const t = bx();
  return K = function(s, e) {
    return s = s - 497, t[s];
  }, K(i, x);
}
function js(i) {
  const x = a;
  let t = x(2301);
  i.precision ? t = t + "\\.\\d{" + i[x(1599)] + "}" : i[x(1599)] == null && (t = t + x(750));
  const s = i.precision ? "+" : "?";
  return x(2770) + t + ")" + s;
}
function xi(i) {
  return new RegExp("^" + js(i) + "$");
}
function ti(i) {
  const x = a;
  let t = Ds + "T" + js(i);
  const s = [];
  return s[x(893)](i[x(1065)] ? "Z?" : "Z"), i[x(2806)] && s.push(x(2716)), t = t + "(" + s[x(727)]("|") + ")", new RegExp("^" + t + "$");
}
function ai(i, x) {
  const t = a;
  return !!((x === "v4" || !x) && Gn[t(2553)](i) || (x === "v6" || !x) && Qn[t(2553)](i));
}
function ri(i, x) {
  const t = a;
  if (!Zn[t(2553)](i)) return !1;
  try {
    const [s] = i[t(2889)](".");
    if (!s) return !1;
    const e = s[t(499)](/-/g, "+").replace(/_/g, "/")[t(652)](s.length + (4 - s[t(1492)] % 4) % 4, "="), r = JSON[t(1205)](atob(e));
    return !(typeof r !== t(2535) || r === null || t(2599) in r && (r == null ? void 0 : r[t(2599)]) !== t(1127) || !r.alg || x && r[t(2420)] !== x);
  } catch {
    return !1;
  }
}
function si(i, x) {
  const t = a;
  return !!((x === "v4" || !x) && Jn[t(2553)](i) || (x === "v6" || !x) && Xn[t(2553)](i));
}
class we extends C0 {
  [a(769)](x) {
    const t = a;
    if (this[t(2454)][t(2869)] && (x.data = String(x[t(1369)])), this[t(975)](x) !== t0[t(1346)]) {
      const n = this[t(1733)](x);
      return Y(n, { code: W[t(2542)], expected: t0[t(1346)], received: n.parsedType }), h0;
    }
    const e = new ee();
    let r;
    for (const n of this._def[t(590)])
      if (n[t(1925)] === t(1012)) x[t(1369)].length < n[t(1454)] && (r = this[t(1733)](x, r), Y(r, { code: W.too_small, minimum: n[t(1454)], type: t(1346), inclusive: !0, exact: !1, message: n.message }), e[t(1407)]());
      else if (n[t(1925)] === t(731)) x[t(1369)][t(1492)] > n.value && (r = this[t(1733)](x, r), Y(r, { code: W[t(511)], maximum: n[t(1454)], type: t(1346), inclusive: !0, exact: !1, message: n[t(1261)] }), e[t(1407)]());
      else if (n[t(1925)] === "length") {
        const o = x.data[t(1492)] > n[t(1454)], c = x.data[t(1492)] < n.value;
        (o || c) && (r = this[t(1733)](x, r), o ? Y(r, { code: W[t(511)], maximum: n[t(1454)], type: t(1346), inclusive: !0, exact: !0, message: n.message }) : c && Y(r, { code: W[t(1787)], minimum: n[t(1454)], type: t(1346), inclusive: !0, exact: !0, message: n[t(1261)] }), e[t(1407)]());
      } else if (n[t(1925)] === t(753)) !Wn[t(2553)](x.data) && (r = this[t(1733)](x, r), Y(r, { validation: t(753), code: W[t(572)], message: n[t(1261)] }), e[t(1407)]());
      else if (n[t(1925)] === t(1734)) !Lx && (Lx = new RegExp(Kn, "u")), !Lx[t(2553)](x[t(1369)]) && (r = this[t(1733)](x, r), Y(r, { validation: t(1734), code: W[t(572)], message: n[t(1261)] }), e[t(1407)]());
      else if (n[t(1925)] === "uuid") !Hn[t(2553)](x.data) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: t(1805), code: W[t(572)], message: n[t(1261)] }), e[t(1407)]());
      else if (n[t(1925)] === t(743)) !Vn[t(2553)](x[t(1369)]) && (r = this[t(1733)](x, r), Y(r, { validation: t(743), code: W.invalid_string, message: n.message }), e[t(1407)]());
      else if (n[t(1925)] === t(926)) !$n[t(2553)](x[t(1369)]) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: t(926), code: W[t(572)], message: n.message }), e.dirty());
      else if (n[t(1925)] === t(712)) !zn.test(x[t(1369)]) && (r = this[t(1733)](x, r), Y(r, { validation: t(712), code: W[t(572)], message: n[t(1261)] }), e[t(1407)]());
      else if (n[t(1925)] === t(1139)) !Un[t(2553)](x[t(1369)]) && (r = this[t(1733)](x, r), Y(r, { validation: t(1139), code: W[t(572)], message: n.message }), e[t(1407)]());
      else if (n[t(1925)] === t(1144)) try {
        new URL(x[t(1369)]);
      } catch {
        r = this[t(1733)](x, r), Y(r, { validation: "url", code: W[t(572)], message: n[t(1261)] }), e[t(1407)]();
      }
      else
        n[t(1925)] === t(1910) ? (n[t(1910)][t(2897)] = 0, !n[t(1910)][t(2553)](x[t(1369)]) && (r = this[t(1733)](x, r), Y(r, { validation: t(1910), code: W[t(572)], message: n.message }), e[t(1407)]())) : n[t(1925)] === t(2040) ? x[t(1369)] = x[t(1369)][t(2040)]() : n[t(1925)] === t(2583) ? !x.data[t(2583)](n[t(1454)], n[t(2853)]) && (r = this._getOrReturnCtx(x, r), Y(r, { code: W[t(572)], validation: { includes: n[t(1454)], position: n[t(2853)] }, message: n.message }), e[t(1407)]()) : n[t(1925)] === t(1861) ? x[t(1369)] = x[t(1369)][t(1861)]() : n[t(1925)] === t(1176) ? x[t(1369)] = x[t(1369)].toUpperCase() : n.kind === t(1701) ? !x.data[t(1701)](n[t(1454)]) && (r = this._getOrReturnCtx(x, r), Y(r, { code: W[t(572)], validation: { startsWith: n.value }, message: n[t(1261)] }), e[t(1407)]()) : n.kind === t(2192) ? !x.data.endsWith(n[t(1454)]) && (r = this[t(1733)](x, r), Y(r, { code: W[t(572)], validation: { endsWith: n[t(1454)] }, message: n[t(1261)] }), e[t(1407)]()) : n[t(1925)] === t(1950) ? !ti(n)[t(2553)](x[t(1369)]) && (r = this._getOrReturnCtx(x, r), Y(r, { code: W[t(572)], validation: "datetime", message: n[t(1261)] }), e[t(1407)]()) : n[t(1925)] === t(1470) ? !ei.test(x.data) && (r = this[t(1733)](x, r), Y(r, { code: W.invalid_string, validation: "date", message: n[t(1261)] }), e[t(1407)]()) : n[t(1925)] === t(2391) ? !xi(n).test(x[t(1369)]) && (r = this._getOrReturnCtx(x, r), Y(r, { code: W[t(572)], validation: "time", message: n[t(1261)] }), e.dirty()) : n[t(1925)] === t(1511) ? !Bn[t(2553)](x[t(1369)]) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: t(1511), code: W[t(572)], message: n[t(1261)] }), e.dirty()) : n[t(1925)] === "ip" ? !ai(x[t(1369)], n.version) && (r = this[t(1733)](x, r), Y(r, { validation: "ip", code: W[t(572)], message: n[t(1261)] }), e[t(1407)]()) : n[t(1925)] === t(1858) ? !ri(x[t(1369)], n.alg) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: "jwt", code: W.invalid_string, message: n[t(1261)] }), e[t(1407)]()) : n[t(1925)] === t(2574) ? !si(x[t(1369)], n.version) && (r = this[t(1733)](x, r), Y(r, { validation: t(2574), code: W.invalid_string, message: n[t(1261)] }), e[t(1407)]()) : n[t(1925)] === "base64" ? !Yn[t(2553)](x[t(1369)]) && (r = this[t(1733)](x, r), Y(r, { validation: t(1490), code: W.invalid_string, message: n[t(1261)] }), e[t(1407)]()) : n[t(1925)] === t(2879) ? !_n[t(2553)](x[t(1369)]) && (r = this[t(1733)](x, r), Y(r, { validation: t(2879), code: W[t(572)], message: n[t(1261)] }), e[t(1407)]()) : N0[t(1902)](n);
    return { status: e.value, value: x[t(1369)] };
  }
  [a(2479)](x, t, s) {
    const e = a;
    return this.refinement((r) => x[e(2553)](r), { validation: t, code: W[e(572)], ...r0[e(830)](s) });
  }
  [a(2284)](x) {
    const t = a;
    return new we({ ...this._def, checks: [...this[t(2454)][t(590)], x] });
  }
  email(x) {
    const t = a;
    return this[t(2284)]({ kind: t(753), ...r0[t(830)](x) });
  }
  url(x) {
    const t = a;
    return this[t(2284)]({ kind: t(1144), ...r0.errToObj(x) });
  }
  [a(1734)](x) {
    const t = a;
    return this[t(2284)]({ kind: t(1734), ...r0[t(830)](x) });
  }
  [a(1805)](x) {
    const t = a;
    return this[t(2284)]({ kind: "uuid", ...r0[t(830)](x) });
  }
  [a(743)](x) {
    const t = a;
    return this._addCheck({ kind: t(743), ...r0[t(830)](x) });
  }
  [a(926)](x) {
    const t = a;
    return this[t(2284)]({ kind: "cuid", ...r0[t(830)](x) });
  }
  [a(712)](x) {
    const t = a;
    return this[t(2284)]({ kind: t(712), ...r0[t(830)](x) });
  }
  [a(1139)](x) {
    const t = a;
    return this._addCheck({ kind: t(1139), ...r0.errToObj(x) });
  }
  base64(x) {
    const t = a;
    return this[t(2284)]({ kind: t(1490), ...r0[t(830)](x) });
  }
  [a(2879)](x) {
    return this[a(2284)]({ kind: "base64url", ...r0.errToObj(x) });
  }
  [a(1858)](x) {
    return this[a(2284)]({ kind: "jwt", ...r0.errToObj(x) });
  }
  ip(x) {
    return this[a(2284)]({ kind: "ip", ...r0.errToObj(x) });
  }
  [a(2574)](x) {
    const t = a;
    return this._addCheck({ kind: t(2574), ...r0[t(830)](x) });
  }
  datetime(x) {
    const t = a;
    return typeof x == "string" ? this[t(2284)]({ kind: t(1950), precision: null, offset: !1, local: !1, message: x }) : this[t(2284)]({ kind: "datetime", precision: typeof (x == null ? void 0 : x[t(1599)]) === t(633) ? null : x == null ? void 0 : x[t(1599)], offset: (x == null ? void 0 : x[t(2806)]) ?? !1, local: (x == null ? void 0 : x.local) ?? !1, ...r0[t(830)](x == null ? void 0 : x[t(1261)]) });
  }
  [a(1470)](x) {
    const t = a;
    return this._addCheck({ kind: t(1470), message: x });
  }
  time(x) {
    const t = a;
    return typeof x === t(1346) ? this[t(2284)]({ kind: t(2391), precision: null, message: x }) : this._addCheck({ kind: t(2391), precision: typeof (x == null ? void 0 : x[t(1599)]) === t(633) ? null : x == null ? void 0 : x[t(1599)], ...r0.errToObj(x == null ? void 0 : x[t(1261)]) });
  }
  duration(x) {
    const t = a;
    return this[t(2284)]({ kind: t(1511), ...r0[t(830)](x) });
  }
  [a(1910)](x, t) {
    const s = a;
    return this[s(2284)]({ kind: s(1910), regex: x, ...r0[s(830)](t) });
  }
  [a(2583)](x, t) {
    const s = a;
    return this._addCheck({ kind: "includes", value: x, position: t == null ? void 0 : t[s(2853)], ...r0[s(830)](t == null ? void 0 : t[s(1261)]) });
  }
  [a(1701)](x, t) {
    const s = a;
    return this[s(2284)]({ kind: s(1701), value: x, ...r0[s(830)](t) });
  }
  [a(2192)](x, t) {
    const s = a;
    return this[s(2284)]({ kind: "endsWith", value: x, ...r0[s(830)](t) });
  }
  [a(1012)](x, t) {
    const s = a;
    return this[s(2284)]({ kind: s(1012), value: x, ...r0[s(830)](t) });
  }
  max(x, t) {
    const s = a;
    return this._addCheck({ kind: "max", value: x, ...r0[s(830)](t) });
  }
  [a(1492)](x, t) {
    const s = a;
    return this[s(2284)]({ kind: s(1492), value: x, ...r0[s(830)](t) });
  }
  [a(1526)](x) {
    const t = a;
    return this[t(1012)](1, r0[t(830)](x));
  }
  [a(2040)]() {
    const x = a;
    return new we({ ...this[x(2454)], checks: [...this._def.checks, { kind: "trim" }] });
  }
  [a(1861)]() {
    const x = a;
    return new we({ ...this._def, checks: [...this[x(2454)][x(590)], { kind: x(1861) }] });
  }
  [a(1176)]() {
    const x = a;
    return new we({ ...this[x(2454)], checks: [...this[x(2454)][x(590)], { kind: "toUpperCase" }] });
  }
  get [a(890)]() {
    const x = a;
    return !!this._def.checks[x(1284)]((t) => t[x(1925)] === x(1950));
  }
  get [a(989)]() {
    const x = a;
    return !!this[x(2454)][x(590)].find((t) => t[x(1925)] === "date");
  }
  get [a(2808)]() {
    const x = a;
    return !!this[x(2454)][x(590)][x(1284)]((t) => t[x(1925)] === x(2391));
  }
  get isDuration() {
    const x = a;
    return !!this._def[x(590)][x(1284)]((t) => t[x(1925)] === "duration");
  }
  get isEmail() {
    const x = a;
    return !!this[x(2454)][x(590)][x(1284)]((t) => t[x(1925)] === x(753));
  }
  get [a(742)]() {
    const x = a;
    return !!this[x(2454)].checks.find((t) => t[x(1925)] === x(1144));
  }
  get isEmoji() {
    const x = a;
    return !!this[x(2454)].checks[x(1284)]((t) => t[x(1925)] === x(1734));
  }
  get isUUID() {
    const x = a;
    return !!this[x(2454)][x(590)].find((t) => t[x(1925)] === "uuid");
  }
  get [a(2988)]() {
    const x = a;
    return !!this[x(2454)].checks[x(1284)]((t) => t[x(1925)] === x(743));
  }
  get isCUID() {
    const x = a;
    return !!this[x(2454)][x(590)].find((t) => t[x(1925)] === x(926));
  }
  get isCUID2() {
    const x = a;
    return !!this[x(2454)].checks[x(1284)]((t) => t.kind === x(712));
  }
  get [a(1307)]() {
    const x = a;
    return !!this[x(2454)].checks.find((t) => t[x(1925)] === x(1139));
  }
  get [a(961)]() {
    const x = a;
    return !!this._def[x(590)][x(1284)]((t) => t[x(1925)] === "ip");
  }
  get [a(2027)]() {
    return !!this[a(2454)].checks.find((t) => t.kind === "cidr");
  }
  get [a(1419)]() {
    const x = a;
    return !!this[x(2454)].checks.find((t) => t.kind === x(1490));
  }
  get [a(2950)]() {
    const x = a;
    return !!this[x(2454)].checks[x(1284)]((t) => t[x(1925)] === "base64url");
  }
  get [a(908)]() {
    const x = a;
    let t = null;
    for (const s of this[x(2454)][x(590)])
      s[x(1925)] === x(1012) && (t === null || s[x(1454)] > t) && (t = s[x(1454)]);
    return t;
  }
  get maxLength() {
    const x = a;
    let t = null;
    for (const s of this[x(2454)][x(590)])
      s.kind === x(731) && (t === null || s[x(1454)] < t) && (t = s.value);
    return t;
  }
}
we[a(2587)] = (i) => {
  const x = a;
  return new we({ checks: [], typeName: p0[x(1517)], coerce: (i == null ? void 0 : i[x(2869)]) ?? !1, ...v0(i) });
};
function ni(i, x) {
  const t = a, s = (i[t(2643)]()[t(2889)](".")[1] || "").length, e = (x.toString().split(".")[1] || "")[t(1492)], r = s > e ? s : e, n = Number.parseInt(i.toFixed(r).replace(".", "")), o = Number[t(1153)](x.toFixed(r)[t(499)](".", ""));
  return n % o / 10 ** r;
}
class Ze extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(1012)] = this[x(2028)], this[x(731)] = this.lte, this[x(515)] = this[x(1683)];
  }
  [a(769)](x) {
    const t = a;
    if (this[t(2454)][t(2869)] && (x[t(1369)] = Number(x[t(1369)])), this[t(975)](x) !== t0[t(1120)]) {
      const n = this[t(1733)](x);
      return Y(n, { code: W[t(2542)], expected: t0[t(1120)], received: n.parsedType }), h0;
    }
    let e;
    const r = new ee();
    for (const n of this[t(2454)][t(590)])
      n[t(1925)] === t(1443) ? !N0[t(1111)](x.data) && (e = this[t(1733)](x, e), Y(e, { code: W.invalid_type, expected: t(2656), received: t(1939), message: n.message }), r[t(1407)]()) : n.kind === t(1012) ? (n[t(1371)] ? x[t(1369)] < n[t(1454)] : x[t(1369)] <= n[t(1454)]) && (e = this[t(1733)](x, e), Y(e, { code: W[t(1787)], minimum: n[t(1454)], type: "number", inclusive: n[t(1371)], exact: !1, message: n[t(1261)] }), r.dirty()) : n[t(1925)] === t(731) ? (n[t(1371)] ? x[t(1369)] > n[t(1454)] : x.data >= n[t(1454)]) && (e = this[t(1733)](x, e), Y(e, { code: W[t(511)], maximum: n[t(1454)], type: "number", inclusive: n[t(1371)], exact: !1, message: n[t(1261)] }), r[t(1407)]()) : n[t(1925)] === t(1683) ? ni(x[t(1369)], n[t(1454)]) !== 0 && (e = this[t(1733)](x, e), Y(e, { code: W[t(2373)], multipleOf: n[t(1454)], message: n[t(1261)] }), r[t(1407)]()) : n[t(1925)] === t(1364) ? !Number.isFinite(x.data) && (e = this[t(1733)](x, e), Y(e, { code: W.not_finite, message: n.message }), r.dirty()) : N0[t(1902)](n);
    return { status: r[t(1454)], value: x[t(1369)] };
  }
  [a(2028)](x, t) {
    const s = a;
    return this[s(1278)](s(1012), x, !0, r0[s(2643)](t));
  }
  gt(x, t) {
    const s = a;
    return this[s(1278)](s(1012), x, !1, r0[s(2643)](t));
  }
  [a(2838)](x, t) {
    const s = a;
    return this.setLimit("max", x, !0, r0[s(2643)](t));
  }
  lt(x, t) {
    const s = a;
    return this[s(1278)](s(731), x, !1, r0[s(2643)](t));
  }
  [a(1278)](x, t, s, e) {
    const r = a;
    return new Ze({ ...this[r(2454)], checks: [...this[r(2454)][r(590)], { kind: x, value: t, inclusive: s, message: r0.toString(e) }] });
  }
  [a(2284)](x) {
    const t = a;
    return new Ze({ ...this._def, checks: [...this[t(2454)][t(590)], x] });
  }
  [a(1443)](x) {
    const t = a;
    return this._addCheck({ kind: t(1443), message: r0[t(2643)](x) });
  }
  [a(877)](x) {
    const t = a;
    return this[t(2284)]({ kind: t(1012), value: 0, inclusive: !1, message: r0[t(2643)](x) });
  }
  [a(2498)](x) {
    const t = a;
    return this._addCheck({ kind: t(731), value: 0, inclusive: !1, message: r0.toString(x) });
  }
  [a(2158)](x) {
    const t = a;
    return this._addCheck({ kind: t(731), value: 0, inclusive: !0, message: r0[t(2643)](x) });
  }
  [a(688)](x) {
    const t = a;
    return this[t(2284)]({ kind: t(1012), value: 0, inclusive: !0, message: r0.toString(x) });
  }
  [a(1683)](x, t) {
    const s = a;
    return this._addCheck({ kind: "multipleOf", value: x, message: r0[s(2643)](t) });
  }
  [a(1364)](x) {
    const t = a;
    return this[t(2284)]({ kind: t(1364), message: r0[t(2643)](x) });
  }
  safe(x) {
    const t = a;
    return this[t(2284)]({ kind: "min", inclusive: !0, value: Number[t(2836)], message: r0.toString(x) })._addCheck({ kind: t(731), inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: r0[t(2643)](x) });
  }
  get [a(1514)]() {
    const x = a;
    let t = null;
    for (const s of this[x(2454)][x(590)])
      s[x(1925)] === "min" && (t === null || s[x(1454)] > t) && (t = s[x(1454)]);
    return t;
  }
  get [a(2132)]() {
    const x = a;
    let t = null;
    for (const s of this[x(2454)][x(590)])
      s[x(1925)] === x(731) && (t === null || s[x(1454)] < t) && (t = s[x(1454)]);
    return t;
  }
  get isInt() {
    const x = a;
    return !!this[x(2454)][x(590)][x(1284)]((t) => t.kind === x(1443) || t[x(1925)] === x(1683) && N0.isInteger(t.value));
  }
  get [a(565)]() {
    const x = a;
    let t = null, s = null;
    for (const e of this._def.checks) {
      if (e[x(1925)] === x(1364) || e[x(1925)] === x(1443) || e[x(1925)] === x(1683)) return !0;
      e[x(1925)] === x(1012) ? (s === null || e[x(1454)] > s) && (s = e[x(1454)]) : e[x(1925)] === x(731) && (t === null || e[x(1454)] < t) && (t = e[x(1454)]);
    }
    return Number[x(565)](s) && Number[x(565)](t);
  }
}
Ze[a(2587)] = (i) => {
  const x = a;
  return new Ze({ checks: [], typeName: p0[x(2199)], coerce: (i == null ? void 0 : i[x(2869)]) || !1, ...v0(i) });
};
class tx extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(1012)] = this[x(2028)], this.max = this[x(2838)];
  }
  [a(769)](x) {
    const t = a;
    if (this._def[t(2869)]) try {
      x[t(1369)] = BigInt(x.data);
    } catch {
      return this[t(1729)](x);
    }
    if (this[t(975)](x) !== t0.bigint) return this[t(1729)](x);
    let e;
    const r = new ee();
    for (const n of this[t(2454)][t(590)])
      n[t(1925)] === t(1012) ? (n[t(1371)] ? x.data < n.value : x[t(1369)] <= n[t(1454)]) && (e = this[t(1733)](x, e), Y(e, { code: W[t(1787)], type: t(2428), minimum: n[t(1454)], inclusive: n[t(1371)], message: n[t(1261)] }), r[t(1407)]()) : n.kind === t(731) ? (n[t(1371)] ? x[t(1369)] > n[t(1454)] : x[t(1369)] >= n[t(1454)]) && (e = this._getOrReturnCtx(x, e), Y(e, { code: W[t(511)], type: "bigint", maximum: n[t(1454)], inclusive: n[t(1371)], message: n[t(1261)] }), r[t(1407)]()) : n[t(1925)] === t(1683) ? x[t(1369)] % n[t(1454)] !== BigInt(0) && (e = this._getOrReturnCtx(x, e), Y(e, { code: W[t(2373)], multipleOf: n[t(1454)], message: n[t(1261)] }), r[t(1407)]()) : N0[t(1902)](n);
    return { status: r[t(1454)], value: x[t(1369)] };
  }
  [a(1729)](x) {
    const t = a, s = this._getOrReturnCtx(x);
    return Y(s, { code: W[t(2542)], expected: t0[t(2428)], received: s[t(1819)] }), h0;
  }
  gte(x, t) {
    const s = a;
    return this.setLimit(s(1012), x, !0, r0[s(2643)](t));
  }
  gt(x, t) {
    const s = a;
    return this[s(1278)](s(1012), x, !1, r0[s(2643)](t));
  }
  [a(2838)](x, t) {
    const s = a;
    return this[s(1278)](s(731), x, !0, r0[s(2643)](t));
  }
  lt(x, t) {
    const s = a;
    return this[s(1278)]("max", x, !1, r0[s(2643)](t));
  }
  setLimit(x, t, s, e) {
    const r = a;
    return new tx({ ...this[r(2454)], checks: [...this[r(2454)][r(590)], { kind: x, value: t, inclusive: s, message: r0[r(2643)](e) }] });
  }
  [a(2284)](x) {
    const t = a;
    return new tx({ ...this._def, checks: [...this[t(2454)][t(590)], x] });
  }
  [a(877)](x) {
    const t = a;
    return this[t(2284)]({ kind: t(1012), value: BigInt(0), inclusive: !1, message: r0[t(2643)](x) });
  }
  negative(x) {
    const t = a;
    return this[t(2284)]({ kind: t(731), value: BigInt(0), inclusive: !1, message: r0.toString(x) });
  }
  [a(2158)](x) {
    const t = a;
    return this[t(2284)]({ kind: t(731), value: BigInt(0), inclusive: !0, message: r0.toString(x) });
  }
  [a(688)](x) {
    const t = a;
    return this._addCheck({ kind: t(1012), value: BigInt(0), inclusive: !0, message: r0[t(2643)](x) });
  }
  multipleOf(x, t) {
    const s = a;
    return this[s(2284)]({ kind: "multipleOf", value: x, message: r0[s(2643)](t) });
  }
  get minValue() {
    const x = a;
    let t = null;
    for (const s of this[x(2454)][x(590)])
      s[x(1925)] === x(1012) && (t === null || s[x(1454)] > t) && (t = s[x(1454)]);
    return t;
  }
  get [a(2132)]() {
    const x = a;
    let t = null;
    for (const s of this[x(2454)].checks)
      s[x(1925)] === x(731) && (t === null || s.value < t) && (t = s[x(1454)]);
    return t;
  }
}
tx.create = (i) => {
  const x = a;
  return new tx({ checks: [], typeName: p0[x(1002)], coerce: (i == null ? void 0 : i.coerce) ?? !1, ...v0(i) });
};
class Mt extends C0 {
  [a(769)](x) {
    const t = a;
    if (this[t(2454)][t(2869)] && (x[t(1369)] = !!x.data), this[t(975)](x) !== t0[t(2173)]) {
      const e = this[t(1733)](x);
      return Y(e, { code: W[t(2542)], expected: t0[t(2173)], received: e.parsedType }), h0;
    }
    return ae(x.data);
  }
}
Mt[a(2587)] = (i) => {
  const x = a;
  return new Mt({ typeName: p0.ZodBoolean, coerce: (i == null ? void 0 : i[x(2869)]) || !1, ...v0(i) });
};
class gx extends C0 {
  [a(769)](x) {
    const t = a;
    if (this[t(2454)][t(2869)] && (x[t(1369)] = new Date(x[t(1369)])), this[t(975)](x) !== t0[t(1470)]) {
      const n = this[t(1733)](x);
      return Y(n, { code: W.invalid_type, expected: t0[t(1470)], received: n[t(1819)] }), h0;
    }
    if (Number.isNaN(x[t(1369)][t(2368)]())) {
      const n = this._getOrReturnCtx(x);
      return Y(n, { code: W[t(1299)] }), h0;
    }
    const e = new ee();
    let r;
    for (const n of this[t(2454)][t(590)])
      n.kind === t(1012) ? x[t(1369)][t(2368)]() < n[t(1454)] && (r = this[t(1733)](x, r), Y(r, { code: W[t(1787)], message: n.message, inclusive: !0, exact: !1, minimum: n[t(1454)], type: t(1470) }), e[t(1407)]()) : n[t(1925)] === t(731) ? x[t(1369)][t(2368)]() > n[t(1454)] && (r = this[t(1733)](x, r), Y(r, { code: W.too_big, message: n.message, inclusive: !0, exact: !1, maximum: n[t(1454)], type: t(1470) }), e[t(1407)]()) : N0[t(1902)](n);
    return { status: e[t(1454)], value: new Date(x.data[t(2368)]()) };
  }
  [a(2284)](x) {
    const t = a;
    return new gx({ ...this._def, checks: [...this[t(2454)].checks, x] });
  }
  [a(1012)](x, t) {
    const s = a;
    return this[s(2284)]({ kind: s(1012), value: x[s(2368)](), message: r0[s(2643)](t) });
  }
  [a(731)](x, t) {
    const s = a;
    return this[s(2284)]({ kind: s(731), value: x[s(2368)](), message: r0[s(2643)](t) });
  }
  get [a(1068)]() {
    const x = a;
    let t = null;
    for (const s of this[x(2454)][x(590)])
      s[x(1925)] === "min" && (t === null || s.value > t) && (t = s[x(1454)]);
    return t != null ? new Date(t) : null;
  }
  get [a(1389)]() {
    const x = a;
    let t = null;
    for (const s of this._def[x(590)])
      s[x(1925)] === x(731) && (t === null || s[x(1454)] < t) && (t = s[x(1454)]);
    return t != null ? new Date(t) : null;
  }
}
gx[a(2587)] = (i) => {
  const x = a;
  return new gx({ checks: [], coerce: (i == null ? void 0 : i[x(2869)]) || !1, typeName: p0[x(1804)], ...v0(i) });
};
class Ca extends C0 {
  _parse(x) {
    const t = a;
    if (this[t(975)](x) !== t0[t(2473)]) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: W.invalid_type, expected: t0.symbol, received: e[t(1819)] }), h0;
    }
    return ae(x.data);
  }
}
Ca[a(2587)] = (i) => {
  const x = a;
  return new Ca({ typeName: p0[x(1632)], ...v0(i) });
};
class Lt extends C0 {
  [a(769)](x) {
    const t = a;
    if (this[t(975)](x) !== t0[t(633)]) {
      const e = this[t(1733)](x);
      return Y(e, { code: W.invalid_type, expected: t0[t(633)], received: e[t(1819)] }), h0;
    }
    return ae(x[t(1369)]);
  }
}
Lt[a(2587)] = (i) => {
  const x = a;
  return new Lt({ typeName: p0[x(2200)], ...v0(i) });
};
class $t extends C0 {
  [a(769)](x) {
    const t = a;
    if (this._getType(x) !== t0.null) {
      const e = this[t(1733)](x);
      return Y(e, { code: W.invalid_type, expected: t0[t(693)], received: e[t(1819)] }), h0;
    }
    return ae(x.data);
  }
}
$t[a(2587)] = (i) => new $t({ typeName: p0.ZodNull, ...v0(i) });
class zt extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(1795)] = !0;
  }
  [a(769)](x) {
    return ae(x[a(1369)]);
  }
}
zt[a(2587)] = (i) => {
  const x = a;
  return new zt({ typeName: p0[x(2052)], ...v0(i) });
};
class Ut extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(1138)] = !0;
  }
  _parse(x) {
    return ae(x.data);
  }
}
Ut[a(2587)] = (i) => new Ut({ typeName: p0.ZodUnknown, ...v0(i) });
class Ie extends C0 {
  _parse(x) {
    const t = a, s = this[t(1733)](x);
    return Y(s, { code: W.invalid_type, expected: t0[t(502)], received: s[t(1819)] }), h0;
  }
}
Ie[a(2587)] = (i) => new Ie({ typeName: p0.ZodNever, ...v0(i) });
class Ht extends C0 {
  [a(769)](x) {
    const t = a;
    if (this[t(975)](x) !== t0[t(633)]) {
      const e = this[t(1733)](x);
      return Y(e, { code: W.invalid_type, expected: t0[t(1188)], received: e[t(1819)] }), h0;
    }
    return ae(x[t(1369)]);
  }
}
Ht[a(2587)] = (i) => new Ht({ typeName: p0.ZodVoid, ...v0(i) });
class le extends C0 {
  [a(769)](x) {
    const t = a, { ctx: s, status: e } = this._processInputParams(x), r = this[t(2454)];
    if (s[t(1819)] !== t0[t(1355)]) return Y(s, { code: W.invalid_type, expected: t0[t(1355)], received: s[t(1819)] }), h0;
    if (r.exactLength !== null) {
      const o = s.data[t(1492)] > r.exactLength[t(1454)], c = s[t(1369)][t(1492)] < r[t(1137)][t(1454)];
      (o || c) && (Y(s, { code: o ? W[t(511)] : W.too_small, minimum: c ? r[t(1137)][t(1454)] : void 0, maximum: o ? r[t(1137)][t(1454)] : void 0, type: t(1355), inclusive: !0, exact: !0, message: r[t(1137)][t(1261)] }), e[t(1407)]());
    }
    if (r[t(908)] !== null && s.data[t(1492)] < r[t(908)][t(1454)] && (Y(s, { code: W.too_small, minimum: r.minLength[t(1454)], type: "array", inclusive: !0, exact: !1, message: r.minLength[t(1261)] }), e.dirty()), r[t(1080)] !== null && s[t(1369)].length > r[t(1080)].value && (Y(s, { code: W.too_big, maximum: r[t(1080)].value, type: "array", inclusive: !0, exact: !1, message: r[t(1080)][t(1261)] }), e[t(1407)]()), s.common.async) return Promise[t(2380)]([...s[t(1369)]][t(1790)]((o, c) => {
      const d = t;
      return r.type._parseAsync(new he(s, o, s[d(1522)], c));
    })).then((o) => ee.mergeArray(e, o));
    const n = [...s[t(1369)]][t(1790)]((o, c) => {
      const d = t;
      return r[d(2417)][d(1935)](new he(s, o, s[d(1522)], c));
    });
    return ee[t(1513)](e, n);
  }
  get [a(943)]() {
    const x = a;
    return this._def[x(2417)];
  }
  min(x, t) {
    const s = a;
    return new le({ ...this._def, minLength: { value: x, message: r0[s(2643)](t) } });
  }
  [a(731)](x, t) {
    return new le({ ...this._def, maxLength: { value: x, message: r0.toString(t) } });
  }
  length(x, t) {
    const s = a;
    return new le({ ...this[s(2454)], exactLength: { value: x, message: r0[s(2643)](t) } });
  }
  [a(1526)](x) {
    return this[a(1012)](1, x);
  }
}
le.create = (i, x) => new le({ type: i, minLength: null, maxLength: null, exactLength: null, typeName: p0.ZodArray, ...v0(x) });
function He(i) {
  const x = a;
  if (i instanceof K0) {
    const t = {};
    for (const s in i.shape) {
      const e = i[x(1286)][s];
      t[s] = Se.create(He(e));
    }
    return new K0({ ...i._def, shape: () => t });
  } else
    return i instanceof le ? new le({ ...i[x(2454)], type: He(i[x(943)]) }) : i instanceof Se ? Se[x(2587)](He(i[x(948)]())) : i instanceof Me ? Me.create(He(i[x(948)]())) : i instanceof De ? De[x(2587)](i[x(2756)][x(1790)]((t) => He(t))) : i;
}
function bx() {
  const i = ["SDPPP may not be installed or version mismatch (404)", " + '", "#3366CC", "__origin", "]; return false; ", "removeMiddleware", "initImmediate", "以当前图层边界获取画布", "' , dataPath: (dataPath || '') + ", "_transport", "cidr", "saveWorkflow", "detectCycles", "__nwjs", "parentElement", "_onprogress", "addFormat", "arrayToEnum", ".async; ", "includes", "Delete current", "keywords", "ZodNaN", "create", " -> ", "自动同步: 关闭", "#9933FF", " reference.", "brand", " } } else { ", "nodeTransports", "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF", "definition", "没有活动文档", "Synchronous parse encountered promise.", "typ", "Enter your RunningHub API Key", "rtl", "curlayer_canvas", "notifications/roots/list_changed", "IPV6ADDRESS", " = undefined; ", "resolved promise for", "当前图层边界", "setRequestHandler", "exec_info", "self", "[\\uE000-\\uF8FF]", " && !", "getConnectedNodeIds", "Cannot forward to node ", "Crop", ") ) ", "./api/manager/reboot", "errorMap", "needsPlural", "partial", "connecting", "defaultError", "curlayer_curlayer", "ZodObject", "]; var ", "msecs", " = errors;  ", "console", "/additionalProperties", "uri-reference", "selectColor", "relativetime", "reconnecting", "executeHandlerAsync", "#3366FF", "', depsCount: ", "Error in direct request ", " character(s)", "returnEmptyString", " items' ", "当前任务数:", ") && (missing", "toString", "resetTimeoutOnProgress", "Set as Current Layer", " self._opts.$comment(", "sdppp/broadcast", "should NOT have additional properties", " !== undefined && typeof ", "missingInterpolationHandler", "at least", "MethodNotFound", "precheck", "bind", "normalizeId", "integer", "implementAction", "origin", "getCapabilities", "2024-11-05", "Create document for sent images", "execution_start", "closeWorkflow", "仅当前图层范围", "onerror", "status", "is a required property", "Hold Shift for more options; Ctrl for single fetch", " , params: { missingProperty: '", "setupStreamRequestHandler", "AbortSignal is already aborted", "Advanced selection", "#CC9933", "邮箱: {{email}}", "uri", "exec", "[\\:]", "catch", "_limit", "keyType", "schemas", "missingSchema", "valueOf", "notificationQueue", ".replace(/~/g, '~0').replace(/\\//g, '~1')", " != 'boolean') ", "async format in sync schema", "notificationHandlers", "ZodBoolean", " for language ", "api", " not in path ", "keys", "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", " != 'string') || ", "unicodeSupport", "var customRule", "sampling", "aborted", "exception", "isClone", "comfy-uxp", "expected", "abortAllRequests", " } ", "sdpppX2", "#FF33FF", "requestHandlers", "mesh:workflow", "Invalid input", "useCustomRule", '" is used in schema at path "', "hasDefaultValue", "  var err =   ", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "([+-]\\d{2}:?\\d{2})", "maximum", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", "not", "Fetch current layer with current-layer boundary", "getLanguagePartFromCode", "sdppp_widgetable_title", "language", "getNodeTitle", "URN can not be parsed.", "dataVar", "formData", " if (true) {", "$comment", " = !(false ", "_cachedPath", ")) {  var err =   ", ".validate", "__esModule", "Remove slot", "ZodUnion", "defaultVariables", "hasNotificationHandler", "not_finite", "ref/prompt", "Cannot access data ", "save", "setOutgoingNotificationInterceptor", "token", "maxRetries", "  } ", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "escapeComponent", "implements", "getRegisteredActions", "找不到图层: {{0}}", "Quality {{percent}}%", "exclusive", "#00CC66", "); if (", "items", "Resize document for preview", "off", "lngs", "getCanonicalLocales", "peo", "Current option: Layer", "localeCompare", "_compile", " == 'string' && ", "tools/call", "NOT_FRAGMENT", "click to restore", "Your Workflows", "([01]\\d|2[0-3]):[0-5]\\d(:", "execution_success", "服务器错误 (500)", "任务已取消", "uxpHost", "text", " } else {  errors = ", "自动从PS重新获取", "comfy_api_key", "more", "interpolationkey", ".length == 1) { ", "_schemas", " + '\\']'", "secure", "findIndex", "running", "apc", " return data; ", "custom", "Import from disk", "timeoutId", "cleanupConnection", "Save", "catchValue", "Not connected", "364FZCEpj", "ZodEnum", "%[EFef]", "Logout", "syncStoresToNewConnection", "subject", "cacheInBuiltFormats", "refVal", "optionsMap", "catchall", "offset", "useDefault", "isTime", ") : ", "uxp", "getValidEnumValues", "prepareLoading", "__proxy_forward", "Get mask from Selection", ") {   var err =   ", "remove", "skipOnVariables", "protocol", "))) { ", "abs", "prefix", "Server does not support notifying about resources (required for ", "Model", " || validate.schema", " has duplicate value ", "快捷键选图功能仅在插件窗口聚焦时可用", "Rectangle coordinates required for create action", "loading namespace ", "enable", "Method not found", "没有链接图层: {{0}}", "apply", "mergeObjectSync", "prd", "errorHandlers", "MIN_SAFE_INTEGER", "customRule", "lte", "resourceName", "Selection bounds only", "'else'", "#3300FF", "sdppp/directRequest", "get_layer_info: 需要 layer_identify", " = 'then'; ", "edges", "#FF3333", "connectedNodes", " (division", "getResource", "notificationsHandled", " levels up, current level is ", "position", "toJSON", " from id ", "适配至选区", "Output to:", "maxItems", "从 画布 获取图像", "#CCCC33", " = errors;", "addNamespaces", " != 'number') || ", "resetStats", "保存所有", "setter", "copy", "val is not a non-empty string or a valid number. val=", "coerce", " , params: {} ", " && !(", "Failed to get result: {{error}}", "_onresponse", "_compilations", "arq", "wss", " = false; break outer; } } } ", "&filename=", "base64url", ` , message: 'should match "' + `, "statements", "exactly", "validation", "   ", "rules", "#3300CC", ` + '" schema' `, "#FF33CC", "split", "getConnectionInfo", "fromNode", "progress", "ZodSet", "oninitialized", "hbo", "画布边界", "lastIndex", "Outgoing request interceptor failed: ", "[^\\%\\/\\:\\@]", "coerced", "[\\/\\?]", "You must pass an array of schemas to z.tuple([ ... ])", " {} ", "prs", "Received a progress notification for an unknown token: ", "ZodNull", "hasResourceBundle", "Retry", "Client does not support listing roots (required for ", "Required", ".length , ", " var vErrors = null; ", "Cancel", "_requestHandlerAbortControllers", " !== undefined ", "_instructions", "cimode", "pctDecChars", "ZodUnknown", ", received ", " == 'boolean' || ", ".additionalProperties", "addIssues", "originalError", "invalid_return_type", " }  ", "getData", "No images", "自动同步: 开启", "host", "sendToolListChanged", "toResolveHierarchy", " */", "resetRegExp", "No handler for streamRequestor: ", "2025-06-18", "Get mask from Current Layer", "xmn", "Converting circular structure to JSON", "initializedStoreOnce", "await ", "readOnly", '" as the namespace "', "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "Local image pack", "select", "范围 1-100", "#CC0066", "returnObjects", "isBase64url", "ZodDefault", "code", "getPluralFormsOfKey", "~validate", "Elicitation response content does not match requested schema: ", "missing", "comfy", ".dataPath = (dataPath || '') + ", "errorsText", "未实现 (501)", ".type || 'string'; if (", "[GraphStoreSynchronizer] Error processing store update for ", " , message: 'property name \\'", "handle", "compositeRule", "无效边界: 左边必须小于右边，上边必须小于下边", " return errors === 0;       ", "currentNodeId", "_setupTimeout", "schema is invalid: ", "defaults", "pluralSeparator", "<errors; ", "usedParams", "getItem", "Invalid function return type", "values", "?\\]?$", "Sending all images...", "reset", "getNodeStore", " && ", "initAsync", "hasLanguageSomeTranslations", "_capabilities", "zero", " when property ", "isNANOID", "=== Options ===", "画布变更后自动运行工作流", "#00CC33", "types", "ZodPipeline", "replace", "processCode", "\\%25|\\%(?!", "never", "jsonrpc", "]; ", "InvalidParams", "setProperty", "找不到文档: {{0}}", " = false , ", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "Your powerful node-based workflow engine", "too_big", "OpenAI/Google format API", "sourceType", "getDataByLanguage", "step", "errorDataPath", "isFinite(", "?\\:\\:", " = [", "++) { ", "common", "createWithPreprocess", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", ") vErrors.length = ", "#66CC00", "Run", "obj", "dataLevel", "yud", "varOccurences", "dataPathArr", "objectValues", "clearItems", ".schemaPath === undefined) { ", " to ", "getNodeIds", "Boundary preview", "getSuffixes", " === false || ", "给发送的图片创建文档", "More actions", "valueType", "清除参考线框架", "ayn", "root.refVal[0]", "#9900CC", "Failed to check workflow state changes:", "logout", "keywordValidate", "hasPath", "strictKeywords", "Empty", "; if (!", " === '' ", " not found for current node ", "millisecond", "适配至画布", "baseId", "prompt_id", "ZodTuple", "logging/setLevel", "nestingSuffix", " == +", "renderer", "isFinite", "store:update:", "listenMessageCallback", "Failed", "; var ", "supportedLngs", " , params: { passingSchemas: ", "invalid_string", "curlayer", "自动填入画布关闭", "exact", "method", "checkState", "sdppp", "文件未找到: {{path}}", "should have required property \\'", " || ! Object.prototype.hasOwnProperty.call(", "addIssue", "设为画布", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "[^\\%]", "#/definitions/simpleTypes", " = errors; ", "Current option: File", "Get pixel of {{0}} failed", "checks", "[A-Fa-f]", "if ( ", " ucs2length(", "Execute", "#CC3333", "ListFormat", "[i]; ", "Full Canvas", "hasRequestHandler", " = errors === errs_", "当前没有可用图层", ` , message: 'should match pattern "`, "outgoingRequestInterceptors", "限制图片尺寸", "refVal[", " if (errors === ", "rest", "Reverse", "comfyAPI is not initialized, maybe comfyUI is too old", "sort", "自动填入画布开启", "ctx", "Gateway error (502)", "New Document", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "Local file", "rejectImage", "minItems", "waitingReads", "removeCatch", "function", "$$$$", "contentMediaType", "整个画布", "context", "当前选区", "prev", "defaultNS", "startHeartbeat", " , params: { property: '", "服务不可用 (503)", "nodeIndexes", "undefined", "patternProperties", "; else vErrors = null; }", "returnNull", "ZodIntersection", ") || ", "PCT_ENCODED", "点此获取RunningHub APIKey", " === 'false' || ", "setupGeneralBroadcastHandler", "entries", "endTurn", "#6633CC", "roots", "sdppp 运行 Photoshop Action", "relative-json-pointer", " not found in graph definition", "Generate", "loadOne", "padEnd", "选区除外", "nest", "nodeProxies", "ComfyUI服务器重连中", "Positive Crop", "backend", "Intersection results could not be merged", ", schema", "abort", "Clear all", "extensionManager", "nan", ") && ", "AI使用的区域与最大尺寸控制", "Layer not found {{0}}", ".length <= ", '" ignored in schema at path "', "/properties", "Fit to selection", "Batch Count", "ActionSet {{0}} 未找到", "isValidLookup", "5627562UkgABH", "abv", "IPV4ADDRESS", "safeValue", "Email address's domain name can not be converted to ASCII via punycode: ", "&subfolder=", "graphChanged", "https", "Select boundary", "No active layer available", "streamRequest", "Smart Object Layer", "async", "nonnegative", "broadcastManager", "var refVal", " === undefined) ", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", "null", "Invalid discriminator value. Expected ", ".dataPath === undefined) ", "Choose File", "removeRequestHandler", " via punycode: ", "isSafeInteger", "getPathExpr", "appendNamespaceToCIMode", "dataProperties", "新图层", "requestId", "graph update cost ", "range", "registerHandler", "issues", "Selection", "Meta-schema for $data reference (JSON Schema extension proposal)", "Expected ", "cuid2", ".length > ", "fallbackNS", "正在发送所有图片...", "callValidate", "close", "_getId", ") { for (var ", "isRequest", "other", "ZodNullable", "Enter Google API Key", " validate.errors = [", "#0066CC", " !== parseInt(division", "join", "applyPostProcessor", "initializeNodeStores", "以主图边界获取当前图层", "max", "ssh", "Inpaint (reverse crop)", "暂无图片", "Select AI Service Provider", "requestInfo", "channel", "Values", "Back", " if (!", "keySchema", "isURL", "nanoid", " else throw new ValidationError(vErrors); ", "RequestTimeout", "addPostProcessor", "interpolate", "getKeyword", "正在发送图像...", "(\\.\\d+)?", "Timeout", "image", "email", "joinArrays", "transports", "loadNamespaces", "prototype", "invalid_enum_value", "cleanup", "清空所有", "invalid_literal", "return", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, " = +", "maxSize", "simpleTypes", ".type", ".validate; } if (  ", "_parse", "保存当前", "key", "process", " === 'true' || ", "%c ", " }; return validate; ", ".data = ", "#66CC33", "lastIndexOf", "setDefaultNamespace", "innerType", " = true;", "ComfyManager not found, cannot reboot", "newdoc", "forward", "fromCharCode", "Select a model", "reduce", "startTime", "退出登录", "customErrors", "left", "1992354bcBSHf", "optional", "Unexpected dot segment condition", "cmp", "augment", "removeResourceBundle", "获取图层 {{0}} 的内容", ".length; ", "%25", "node_errors", "strictDefaults", "queue_remaining", "Core schema meta-schema", "addSchema", " else {   ", "{4}", "Enter a pixel value greater than 0", "openWorkflow: ", "firebug", " = formats[", "notifications/resources/list_changed", "date-time", "asyncIterator", "mountedTransports", "$schema must be a string", "5571145YlHjDm", "It seems you are nesting recursively key: ", "tolerant", "Confirm", "exclType", " cannot be resolved", " : ", "reason", "statusText", "#CC0033", "No limit", ".errors); errors = vErrors.length; } ", "&quot;", "errToObj", "i18nFormat", "nodes", "params", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "Invalid", "Server does not support resources (required for ", "customRules", "pick", "right", "Not a ZodError: ", "sampling/createMessage", "当前图层除外", ".length == 0) {", "setComfyOrgAPIKey", "sdppp-heartbeat", "state", "meta-schema not available", " (async", "sdk", "__cycle__", "disconnected", "#33CC00", "outgoingNotificationInterceptors", "minutes", "pre", "_cleanupTimeout", "workflows/", "setResolvedLanguage", "#CC00FF", "req_", "filter", "errors", "请求超时 (408)", "headers", "definitions", " ? await ", "pop", "logger must implement log, warn and error methods", "load", "setupAbortHandler", "Outgoing message:", "Keyword ", "BigInt must be ", "isRoot", "setupNodeBindings", "findPathInternal", "positive", "toHash", "按回车打开应用： {{appName}}", "#0033FF", "isLanguageChangingTo", "init: no languageDetector is used and no lng is defined", "shorter", "is an invalid additional property", "No images yet", "action", "execution_interrupted", "INTERCEPTOR_ERROR", "合并组失败", "isDatetime", "fewer", "newdoc_canvas", "push", "Action set {{0}} was not found", "2024-10-07", "validate", " instanceof RegExp) && ", "跳转到最后一个", "iri", "exclusiveMinimum", "has", ") > 1e-", "Received host version from UXP:", "missingRefs", ' !== "object")', "parentData", "colors", "minLength", "#FF0033", ".test(", "add", "删除当前", "loaded", "PS图片", "zh-CN", ".errors; else vErrors = vErrors.concat(", "failed", "loadLanguages", "validation failed", "adf", "[MCPMiddleware]", "dir", "more than", "[\\+\\-\\.]", "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "cuid", `获取图像 &
限制图像范围`, "errSchemaPath", "选择模型", "var ", "Primary boundary", "regExpMap", "extendTranslation", "put", "主图边界", " if (schema", "Invalid boundary type: {{type}}", "+\\.", "` could not be extracted from all schema options", "prompts/list", "选择文件失败，请重试", "color", "element", "isOpen", "realTransport", "arb", "ZodFunction", "unwrap", "acy", "fallback", "Cannot access property/index ", "Forbidden (403)", " , schema: validate.schema", "comfy side transport.onerror", " in key: ", " = validate.schema", "buildDirectedAdjacencyList", "emit", "PS shortcuts may be blocked by plugin...", "isInitialized", "isIP", "queuePrompt", "ZodNativeEnum", "updateKey", "var division", "decline", "Press Enter to open app: {{appName}}", "comfyAPI", "++) if (equal(", "ruleErr", " && !Array.isArray(", "partialBundledLanguages", "postProcess", "#FF00CC", "_getType", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "RULES", "选择图像来源", "result", "storage", " == 'number' || ", "getOwnPropertyNames", "call", " = vErrors[", "Array must contain ", "getRule", "Send to PS", "opts", "isDate", "从 当前图层 获取遮罩", "_options", "maxTotalTimeout", "ZodMap", "Copy", " , message: 'should NOT have ", "modifying", "Refresh", "Error", "transform", "Client does not support elicitation (required for ", "fullFilename", "ZodBigInt", "async schema in sync schema", "port", "Action {{0}} was not found", "[A-Za-z]", "正在创建任务...", "contextSeparator", "unescapePrefix", "assertRequestHandlerCapability", "tDescription", "min", "prompt_ids: ", "urn", "relatedRequestId", "valid", "log", "Please select AI service", "Create document", "round", "every", "停止自动运行", "留空表示不限", "获取结果失败: {{error}}", "at most", "waiters", "getFallbackCodes", "createGlobalDispatcherForType", "interceptor_error", "[0]; ", "任务取消失败: {{error}}", "toQuotedString", "mcpMesh", "setPrototypeOf", "skipInterpolation", "utils", "Auto repick from PS", "throwIfAborted", "strictNumbers", "运行了 {{duration}} 秒，{{message}}", "localRefs", "formatSeparator", "setupStreamProtocolHandlers", "InvalidRequest", "_loadingSchemas", "uniqueItems", "Failed to request initial states after connecting to ", " !== undefined)", "Upload failed: ", "Create layer failed", "acm", "Running for {{duration}} secs, {{message}}", "ASCII", "Schema ", "isNullable", "interpolation", "days", "success", "assertCanSetRequestHandler", "superRefine", "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "Scan", "保存并立即执行", "#6633FF", "local", "图层 {{0}} 不是一个组", "Save current", "minDate", " , message: 'should be multiple of ", ") continue; ", "ZodDiscriminatedUnion", "loadGraphData", "discriminator", `获取图像 &
裁剪选区遮罩`, ` , message: 'should pass "`, "appendNamespaceToMissingKey", "validateSchema", "Jump to last", "快捷键选图功能仅登陆后可用", "maxLength", " validate.errors = vErrors; ", "registerDirectRequestHandlerGeneric", ")) ", "comfy-user", " for interpolating ", ` if (typeof item == 'string') item = '"' + item; `, "_notificationHandlers", "modules", "properties", "run", "missingRef", "ltr", " , params: { comparison: ", "errs_", "Overflow: input needs wider integers to process", "interpolator", "del", "Host's domain name can not be converted to ", " , params: { keyword: '", "clone", "#FF3366", "curr", "order", "$ref", "ZodBranded", "正向裁剪(Outpaint)", "contentEncoding", "sec", " ( ( ", "Exclude selection", "isInteger", "生成中...", "_metaOpts", "'[' + ", "Username: {{username}}", "allErrors", "1.0.0", "Request handler failed: ", " !== ", "number", "getConnectionCount", "_limitLength", "openWorkflows", "#/definitions/schemaArray", "completion/complete", "validate.schema", "JWT", "执行成功", "week", "namespace", "joinValues", "/then", "更多操作", " = false; else { ", "properties ", "上传中，如果图片过大，可能会卡顿...", "exactLength", "_unknown", "ulid", "send", "aao", "Output to", "Unknown message type: ", "url", "ayp", "Sending image...", "Current layer", "[UnexpectedJSONParseError]: ", "received", "msec", "getClientCapabilities", " , parentSchema: validate.schema", "parseInt", "names", "禁止访问 (403)", "and", "under", " if (typeof itemIndices[item] == 'number') { ", "{2})", "dataPath", "interrupt", "addResources", ".call( ", "userAgent", "  for (var ", "dependencies", "hasLoadedNamespace: i18next was not initialized", "destroy", "assertNotificationCapability", " delete ", " , (dataPath || '')", "/%2F", "implementInternalAction", "passthrough", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "toUpperCase", "Fit to current layer", "schemaErrorMap", "_onerror", "选择边界", "You are passing an undefined module! Please check the object you are passing to i18next.use()", "usedLng", "exactly equal to ", "Range 1-100", "#CC6600", "delete", "unknownFormats", "void", "#FF0000", "formatParams", "usePattern", "Fetch canvas with primary boundary", " ? '", "基础 URL", "请输入大于 0 的像素值", "exclusiveMaximum", "[ ]*{", "app.queuePrompt caught", "missingKeyHandler", "exclIsNumber", " == null) ", "var default", "#00CCCC", "initialState", "parse", "resources", "Validation", "markDisconnected", "assertIs", " % 1)", "].propertyName = ", ".schema = ", "regexp", "Google Gemini Image Generator", "setInterval", "__DEFAULT__", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "getImage", "Local video", "parent", " , params: { allowedValue: schema", "请输入您的 Google API Key", "file", "disconnect", "getFixedT", "escapeValue", "isTop", "_clientVersion", "workflow", "; else vErrors = null; }  ", "second", " = true; if (", "ZodNever", "strict", " for nesting ", "dev", "InternalError", "Exclude current layer", "[object Function]", '" was not yet loaded', "###", " must be number", "meta", "Get selection", "canReachThroughConnectedNodes", " === '' || ", "userDefinedKeySeparator", "DEBUG", "Failed to create document from file", "Images Per Batch", "_refs", "resource", "ayh", "additionalItems", "No errors", "getRunningRequestsCount", " , message: 'should NOT have more than ", "#CC00CC", "withTimeout", "sam", "message", "#/definitions/nonNegativeInteger", "_errors", " ) || ", "floor", "querySelector", "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "pong", "以画布边界获取当前图层", "equal", ", limit: ", "[\\@]", "messages", "='; ", "toASCII", "defaultValue", " var validate = ", "setLimit", "saveMissing", "Current Selection", "适配至当前图层", "greater than or equal to ", 'id "', "find", "No backend was added via i18next.use. Will not load resources.", "shape", " var errors = 0;     ", " + ']'", "afb", "Auto run after canvas change", "Current Layer", "反向裁剪(Inpaint)", "jpr", "{0,5}", " already exists, which would be overridden", "jsonPointers", "', missingProperty: '", "使用教程", "invalid_date", "pipe", "nonExplicitSupportedLngs", " , schema:  ", " === false) ", "Node definition not found for ", "resolvedOptions", '" for languages "', "isULID", " != 'number') { ", "idx", " else ", "WebkitAppearance", "输入设置", "3rdParty", "getBestMatchFromCodes", "[0-9A-Fa-f]", "Please login to use the plugin", ", received '", "组 {{0}} 中没有第一个相关图层", ")' returned an object instead of string.", "isArray", "getProtocol", " characters' ", "发送所有", "messageHandlers", "lazycreate", "request", "addResource", "isOptional", "./sdppp_upload2", "请输入质量百分比", '$ref: validation keywords used in schema at path "', "_limitProperties", "extend", "pending", "initializeResponseQueue", "hasLoadedNamespace", "react", "cleanCode", "Invalid forward path for proxy action", "newlayer_curlayer", "exports", "Desire bounds is null", 'Invalid input: must end with "', "buildAdjacencyList", "CurLayer", "string", "Uploading...", "Sending...", " break; ", "coerceToTypes", "加载中...", "assign", "metaSchema", "[^\\%\\[\\]\\:]", "array", "messageType", "Crop by selection", "closeHandlers", "Current Tasks:", "res", "Unknown", "resolve", "getAllReachableNodes", "finite", "Invalid literal value, expected ", "MissingRefError", "nestingPrefix", "invalid_union_discriminator", "data", "registerProxyForwardHandler", "inclusive", "oneOf", "pbt", "Array.isArray(", " - no connection available", "'then'", ") == -1 ", "Comfy Manager未安装，无法重启", "[BroadcastManager] Error forwarding ", "Options", "正在上传...", "发送到PS", " throw new ValidationError([", "ids", "#6600CC", "正向裁剪", "createStreamState", "Remove video", "maxDate", "removeMessageEventListener", "processors", "response", "aeb", ` , message: 'should match format "`, "OpenAI/Google 格式API", 'unknown format "', "./sdppp-custom.js", "' : '", "nss", "sdppp_assets", "splice", "transport", "critical", "initializeConsumer", "pga", "NOT_SCHEME", "dirty", "added", "registerCapabilities", "ESCAPE", "Fetch canvas with canvas boundary", "Boundary", " + ", "schemaHasRules", "schema $id is different from id", "All", "./api/userdata/workflows%2F.index.json", "observers", "isBase64", "resolveImage", "#0099FF", " if ( ", "comfy-entry", "setKey", "Comfy.userId", "无法打开图像文件: {{error}}", "Click to use current selection", "Defaults using", "def", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "tried", '"; } ', " var schemaExcl", "Import as Smart Object", "errs__", "requestsHandled", " var isAdditional", "schemaPath", "maxParallelReads", "hours", "skips", "Waiting for image upload...", "int", "schema id must be string", "nestingOptionsSeparator", "从 画布 获取遮罩", "actions", "Gemini 2.5 Flash Image", "Shortcut selection feature requires login", "Invalid enum value. Expected ", "Creating task...", "nodeStores", "removeNamespaces", "value", "Email: {{email}}", "executeOutgoingNotificationInterceptor", "Content", "strip", "本地视频", "domainHost", "app", " = false;  ", "notifications/prompts/list_changed", "there was no format function for ", "Fit to canvas", "Base URL", "defineProperty", "addMetaSchema", "minProperties", "date", "exactUsedKey", "promise", "获取像素失败: {{0}}", "No crop", "hour", "logger", "checkDataTypes", "Request interceptor failed for ", "Graph must have at least one node", "separator", "{3}", '" resolves to more than one schema', " for (var ", "user", "exception_message", ") break; ", "stream", "ZodArray", "Get Image", "base64", " !== undefined && ( typeof ", "length", "query", "Layer mask", "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", "pluralResolver", "#99CC33", "createErrors", "formatLanguageCode", "_responseHandlers", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "16743EojMPQ", "_cache", "userinfo", "masks", "node_id", "absolutePath", "out", "accept", "(?:", "duration", "overflow", "mergeArray", "minValue", "pluralRulesCache", "next", "ZodString", "清除视频", "output", "isSupportedCode", '"object"', "path", " === undefined) { ", "invalid_intersection_types", "waiting for queue prompt", "nonempty", " === undefined || ", "failing", "keyPrefix", "util", "missed to resolve ", " = 'else'; ", "getNeighbors", "hasOutgoingNotificationInterceptor", '.schemaPath = "', "custom keyword definition is invalid: ", "Failed to open file as document: {{path}}", "translator", " , params: { type: '", "http", "empty", "任务执行失败: {{error}}", "connected", "NOT_USERINFO", "Server does not support notifying of tool list changes (required for ", "Connect", "resources/subscribe", "escapeFragment", "compileAsync", "json", ".call(this, ", "获取图片", "elicitInput", "Get content of layer {{0}}", " && self._opts.unknownFormats.indexOf(", "broadcast", "Outgoing notification interceptor failed: ", "getDefinition", " , message: '", "activeWorkflow", "isPersisted", "loaded namespace ", "debug", "Input Image", "Current layer boundary", "propsKeywords", " else if (", "fragment", "#FF6600", " , message: 'should match exactly one schema in oneOf' ", "任务未完成，当前状态: {{status}}", " ms", "skipCopy", " , data: ", "请选择AI服务", "http://json-schema.org/draft-07/schema#", "en-US", "_path", `"' `, "invalid-input", " = true; else if (!Array.isArray(schema", "' && !(typeof ", "onclose", "defaultMeta", "Request timed out", "[object Number]", "enabled", "posterIdentifier", "Get image from Current Layer", "网关错误 (502)", " = true; ", "getPrototypeOf", "unescapeSuffix", "getCurrentNodeId", "authInfo", "Select Image Source", "ckb", ".validate;", "precision", "done", "loadResources", 'schema with key or id "', "{0,2}", "hasEdge", "ZodLazy", "2.0", "queueLoad", "missingKeyNoValueFallbackToKey", "当前选项：图层", "Hold Shift key to import as new document", "#FF00FF", "abh", "property ", "选区遮罩", "forEach", "ignore", "当前没有活动图层", "regexpUnescape", "Unrecognized key(s) in object: ", " != 'undefined' && ", "deprecate", "Task execution failed: {{error}}", "finished", "namespaces", "true", "#0099CC", " = customRules[", "'/' + ", "你的工作流", "hasAction", "failedLoading", "ZodSymbol", "propertyNames", "#00CCFF", "instructions", "responseSchema", " === null || (", "graph", "__internal_requestInitialState_", "fcName", "requestedSchema", " console.log(", "required", "count", "MissingRef", "高级选图", "ZodEffects", "pst", "未选择工作流", "start", "ZodLiteral", "_key", " ) { ", `" keyword validation' `, "options.loadSchema should be a function", " validate.errors = vErrors; return false; ", "strong", "describe", "Save all", "missingKey", "_onnotification", "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "execution_error", "图层遮罩", " , schema: false , parentSchema: validate.schema", "_requestHandlers", "不裁剪", " !== undefined) { ", "isObject", "Module", "从 当前图层 获取图像", "Stop auto run", " = new RegExp(", "exclude", "men", "未授权 (401)", " = e.errors; else throw e; } ", "charCodeAt", '[\\"]', "invalid_union", "favorites", "#3399FF", "multipleOf", "subscribe", " throw new ValidationError(vErrors); ", "assistant", ") { errors = ", "addMessageEventListener", "_processInputParams", "auz", " element(s)", "$t(", "按选区裁剪", "continueOnInterceptorError", "languageChanged", "_timeoutInfo", " = null; ", "languageUtils", "No videos yet", "heartbeatTimer", "startsWith", "checkDataType", "getter", " , schema: ", "syncWorkflows", "avl", "]; if (", "#CC33CC", "append", "longer", "resources/list", " if (! ", "default is ignored in the schema root", "当前图层", "executed", "刷新工作流列表", "ignoreJSONStructure", "stats", "name", "Action ", "} else {  errors = ", "clearCache", "one", "clear", "Date must be ", "deepPartial", ";if (", "[^\\%\\:]", "_getInvalidInput", "#33CC99", "Server does not support prompts (required for ", " if (", "_getOrReturnCtx", "emoji", "从磁盘获取", "detection", "addResourceBundle", "flags", "_refinement", " at one or more positions greater than or equal to ", "minSize", "sqr", "_addSchema", "如何获取APIKey和API Secret", " == ", ")) { if (vErrors === null) vErrors = ", "changeTracker", "unknownKeys", " == 'function' ? ", "years", "saveMissingPlurals", "wait", "default", "preprocess", "anyOf", "xn--", "画布范围", "Disk", "index", "addRule", "full", "从 选区 获取遮罩", "_onclose", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "handleIncomingRequest", "video", "_progressHandlers", "performWorkflowReset: ", " != 'number' || ", "#CC3300", "sdppp/streamResponse", "interceptorTimeout", "property", "images", "detail", "+Alt 按选区裁剪", " } if (", "getSchema", "Action handler ", "regExpQueue", "~standard", "%[89A-Fa-f]", "spa", "fullPath", "#FFCC33", "[BroadcastManager] Error forwarding broadcast:", "too_small", "over", "services", "map", "contextualErrorMap", "minute", "reload", "useRawValueToEscape", "_any", "; else vErrors = null; } ", "image/png", "languageDetector", "fail", "本地图片包", "substr", "executeOutgoingRequestInterceptor", " is present' ", "ZodDate", "uuid", "setNodeTitle", "Source", "_parseAsync", "preload", "broadcastReceived", "ZodCatch", "initialized", "addEventListener", "heartbeatTimeoutTimer", " , ", "filename", "multipleOfPrecision", "#6600FF", "parsedType", "Model with affordable price, abundant community applications", "source", "]) ", "]); ", "ajp", "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", "removeNotificationHandler", "workflows", "setupGraphStoreSync", "postMessage", "maxProperties", " = await ", "pickLocalFile", "roots/list", ") {  var err =   ", "Bounds", " , params: { additionalProperty: '", "ydd", "mask", " { keyword: '", "compile", " == 'object' && Array.isArray(", "pluralCategories", "; }   var err =   ", "#FF3399", "$data", "质量{{percent}}%", "retryTimeout", "Layer not found: {{0}}", "tools/list", "notifications/cancelled", "table", "Enter a quality percentage", "1994661EQmOEw", "ComfyUI loading...", "#CC6633", "shared", "shu", "jwt", "510", 'Invalid input: must include "', "toLowerCase", "Clear guide frame", "saveMissingTo", " ) ", "diff", "Failed to check workflow changeTracker state:", "No linked layer for {{0}}", "SDPPP可能未安装或和插件版本不匹配 (404)", "overloadTranslationOptionHandler", "自动获取中…", "unsetOutgoingRequestInterceptor", "findPath", "resolvedLanguage", "abortRequest", "以主图边界获取画布", "onprogress", "loadSchema", "getSuffix", "+Alt crop by selection", "ucs2length", "RelativeTimeFormat", "addKeyword", "onmessage", "unrecognized_keys", "allOf", "setupStreamResponseHandler", ", validate.root.schema);", "McpError", "inline", "nestingRegexp", " , message: 'should be ", "var pattern", "createAsyncIterator", "[\\:\\/\\?\\#\\[\\]\\@]", "toUnicode", "removeItem", "Document {{0}} not found", "typeof ", "readingCalls", "Success", " , validate.schema", "assertNever", "cancel", "         , parentSchema: validate.schema", "exists", "Received a response for an unknown message ID: ", "protocolVersion", "自定义AI工作流引擎", " = typeof ", "regex", "#9933CC", "Store not found for current node ", "' + ", "getRegExp", "node", "weeks", " = null; try { ", "requestIdSeq", "get", "ref/resource", "[vV]", ", '", "objectKeys", "Cycle detected: ", "kind", "errorPath", "arrayKeywords", "forwardBroadcast", "云端推荐：", "schemaUnknownRules", "Paste WebApp ID here", "substring", "mergeObjectAsync", "race", "_parseSync", " = refVal[", "ary", " , params: { pattern:  ", "float", " , params: { format:  ", "{1,4}", "postProcessor", "maxTokens", "parent schema must have all required keywords: ", "getTransportInternal", "Action {{0}} 未找到", "设置图层的文本", "none", "以当前图层边界获取当前图层", "datetime", "#0000FF", "changeLanguage", " || Object.keys(", "from", "[^]", "graphInstance", " == 'string' || ", " }; return validate;", "key '", "Select Source", "#00CC00", "messagePoster", "elicitation/create", "Uncaught error in notification handler: ", "lastPongReceived", "请输入您的RunningHub API Key", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "Remote", "else", "serialize", "translation", "智能对象图层", "currency", "charAt", " , message: 'can\\'t resolve reference ", "default is ignored for: ", "Get selection failed", "error", "timestamp", ", exclusive: ", "slice", "No edge defined from ", " if (false) { ", "ConnectionClosed", ".patternProperties", "此处粘贴 WebApp ID", "pctEncChar", ") { ", "mcp-mesh-router", "yrs", "sdppp 选中图层", "Upload failed, please try again", ".then", "创建文档失败", "timeout", "\\$&", "heartbeatTimeout", "handleDirectProxyForward", "merge", "extract", "Stop", "/*# sourceURL=", "usedNS", "concat", "api/view?type=", "{6}", "completed", "输入图像", "画布变动后自动运行", "Invalid action: {{action}}", " } }  ", "canvas", "Enum", "#0000CC", "Please select the mask to get", "SCHEMES", "Validation failed but no issues detected.", "#33CC66", " not found for node ", "registerStreamRequestorHandler", "   var err =   ", "http://json-schema.org/draft-07/schema", "description", "未找到文档 {0}", " = '' + ", "passContext", "isCIDR", "gte", "_oninitialize", "NOT_PATH", "调整输入设置", "/additionalItems", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "useDefaults", "Cloud:", "_formats", "notice", "createInstance", "actionHandlers", "trim", "resourceStore", "_pendingDebouncedNotifications", "+Alt 反转遮罩", ") - division", "mode", "greater than ", "No active layer", "上传失败，请重试", "stopAll", "++) { if (", "getResourceBundle", "ZodAny", "markConnected", "Merge group failed", "readonly", "combo", "stack", "#33CC33", "]] === undefined ", "notificationsIntercepted", "contains", "day", "] = ", "now", "; else if (", "Canvas", "unknown", "Auto send disabled", "broadcastHandlers", "' } ", "signal", " ); if (isAdditional", "__connection_established", "创建文档", "Invalid date", "pathname", " if (true) { ", " , rootData )  ", " == 'object' && !(", "HTTP URIs must have a host.", "get_layer_info requires layer_identify", "pendingCount", "_getCached", "Note", "Current option: Canvas", "点击使用当前选区", " } if (errors === ", "新建文档", "relative", " = ''; ", "returnDetails", "reverse", "nullable", "; if (vErrors !== null) { if (", "forkResourceStore", "No workflow selected", `Get image &
Crop selection mask`, "indexOf", "escapeQuotes", "未知错误（{{code}}）", " = true; if ( ", "fast", "; if (", "alwaysFormat", "jsonStringifyReplacer", "模型物美价廉，海量社区应用", "nsSeparator", "forwarded", "无效操作: {{action}}", " , message: 'should be equal to constant' ", "cancelled", "获取选区失败", "getState", " = false; for (var ", "streamRequestorHandlers", "bbz", "manuallyExtractDefaults", "runningRequests", "widgets", " ? ", ") {   ", "async schema referenced by sync schema", "Server does not support sampling (required for ", " failed", "isNotification", "Invalid proxy forwarding: current node ", "locale", "Number must be finite", "reset=false but needsReset: ", "maxReplaces", "/required", "maxValue", "ZodOptional", "#3333CC", "actionManager", "未找到图层 {0}", "UNRESERVED", " }   ", "then", "_requestMessageId", "parseAsync", "label", "Not implemented (501)", "用户名: {{username}}", "_errorDataPathProperty", "Set as Current Selection", "safeParseAsync", "') ", "stringify", "onTimeout", "设为当前选区", "disable", " var ", "[\\:\\@\\/\\?]", "loopRequired", " = false; else if (", "#FF0099", "nonpositive", "use", "_error", "sendPromptListChanged", "sdppp/streamRequest", "translate", "addUsedSchema", " || ", "debugDisableHeartbeatResponse", "missed to pass in variable ", "AbortError", "queues", "removeEventListener", "content", "点我恢复", "boolean", "RH Coins:", "warn", "_onrequest", " , message: 'should NOT be valid' ", "Leave empty for no limit", "reference", "less than", " = false;for (var ", "queue", "ads", " var missing", ".length ", "当前选项：图层 {{layerName}}", " = null;", "Modify", "Enter your Replicate API Key", "_clientCapabilities", "size", "endsWith", "ownProperties", "backendConnector", "重启ComfyUI失败", "mesh", 'no schema with key or ref "', "Client does not support sampling (required for ", "ZodNumber", "ZodUndefined", "ping", "validateStreamRequestorRequest", "#CC9900", "Email address's domain name can not be converted to ", "输出区域", "suffix", "keyword schema is invalid: ", "root", "No active document", " = false; ", "mountTo", "prompts", "Reset", "Failed to pick file. Please try again.", "compiling", "New Layer", "setNotificationHandler", "extendRefs", "Close", "formatter", "color: ", "read", "WARNING DEPRECATED: ", "body", "documentElement", "resource_link", "level", "thisServer", "cacheKey", "validateKeyword", "); for (var ", " , params: { limit: ", "refine", "Edge references unknown source node: ", `Get image &
Limit image boundary`, "#FF9933", "year", " in ", "++) { vErrors[", "ZodPromise", "externalListenMessageCallback", "verbose", "unionErrors", "Number must be ", "var missing", "getPath", "notifications/resources/updated", "Auto Sync: off", "选择 AI 服务提供商", "init", "false", "getStats", "isInitializing", "885933LytNVD", "2[0-4]", " == errors) {", " %c", "Tutorial", "userDefinedNsSeparator", "创建图层失败", " | ", " , message: 'should have ", "style", "8syMfta", "Task incomplete, current status: {{status}}", " var schema", "nodeId", "_serverInfo", "hasOutgoingRequestInterceptor", "[^\\%\\/\\@]", "网关超时 (504)", "Invalid ", "schemaId", "sendStreamRequestorRequest", "schema id ignored", "tools", "absolute", "uiWeight", " === undefined ", "6062553kekcRZ", "Current layer bounds", "yds", " = ", "_addCheck", " not implemented for node ", "Send all", "Task cancelled", "Gemini 2.5 Flash 图像", "ordinal", "作为新文档导入", "仅选区范围", "选择素材来源", " Math.abs(Math.round(division", "Host's domain name can not be converted to ASCII via punycode: ", "openWorkflowJSON", "set", "info", "_meta", "$id", "#/definitions/nonNegativeIntegerDefault0", "[0-5]\\d", "addCached", " = true;  ", "enum", "])) { ", "postProcessPassResolved", ", deps: '", "options", "$dataMetaSchema", " var errs_", "Connection closed", "ZodError", "alwaysSet", "(typeof ", "additionalProperties", "writeOnly", "activeState", 'did not save key "', "#FFCC00", " &&   Object.prototype.hasOwnProperty.call(", "Fetch current layer with canvas boundary", "_validateKeyword", "notification", "[A-Za-z0-9\\-\\.\\_\\~", "scheme", '" (see option extendRefs)', "heartbeatInterval", "_fragments", " var err = ", "Clear", "assertEqual", "  }  ", "validateHandlerType", "ComfyUI server reconnecting", "Failed to reboot ComfyUI", "languages", "detect", 'custom keyword "', " ) : ( (", "dataType", " } else { ", "logging", "rootData", "nullish", "actions:util", "formatters", "]] !== undefined ", "inlineRef", "handleIncomingMessage", "Negative Crop", "#99CC00", "iterator", "=0; ", "_cached", "{0,4}", "i18next:", " = errors; var ", "当前选项：文件", "Generating", '$ref: keywords ignored in schema at path "', "uiWeightSum", " && Object.prototype.hasOwnProperty.call(", " is not a valid identifier", "keyof", "prompts/get", " else { ", "Incoming message:", "getTime", "callback", "removeKeyword", "rootId", "  )  ", "not_multiple_of", "removed", "assertCapabilityForMethod", " Object.keys(", "varReplace", "当前选项：画布", "_resetTimeout", "all", "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ", " , message: 'should contain a valid item' ", "valueSchema", "getDefaultValuesFromSchema", "effect", "getConnectionToNodeInternal", "ZodReadonly", "shift", "acw", "store", "time", "_opts", " < ", " === null) ", "Auto fetching…", "resources/templates/list", "connectionManager", "请选择要获取的图像", "removeDefault", ") ? ", "$el", "#CC3366", "调整预览文档尺寸", "请选择要获取的遮罩", " , params: { multipleOf: ", "  errors = ", "pattern", " , params: { propertyName: '", '";  ', "getProperty", "keySeparator", "How to get APIKey", "Set text to layer", "macro", "nid", "some", "type", "createMessage", " = false; else {", "alg", "requestInitialStateForNode", "hostVersion", ") break; } ", " = 0; ", " , schemaPath: ", "PluralRules", "Fetch canvas with current-layer boundary", "bigint", "capabilities", "创建操作需要矩形坐标", "unshift", "#CC0000", "refs", "Limit image size", "normalize", "如何获取APIKey", "No Intl support, please use an Intl polyfill!", "尺寸限制 (px)", "/type", "less than or equal to", "获取 API Key", "debouncedNotificationMethods", "widgetable", "this", "getTransportToNode", "Google Gemini 图像生成器", "__internal_", "HeartbeatTimeoutError", "setupTransportHandlers", "returnTypeError", "++) { var ", "notifications/message", "returnedObjectHandler", "_def", "No connection available for node ", "isTransportReady", "freeze", "parentDataProperty", "stopSequence", "simplifyPluralSuffix", "Outpaint (positive crop)", "Invalid JSON-pointer: ", "formats", " !== undefined) {  ", "silent", "无法从文件创建文档", "match", "lowerCaseLng", "__proto__", "selection", "extractFromKey", "hasOwnProperty", "symbol", "lng", "prevValid", "URI can not be parsed.", "sdppp/abort", "No first related layer in {{0}}", "_regex", " var startErrs", "Unicode", "yhd", "#0033CC", "目标边界为空", "schema", "Server error (500)", "创建参考线框架", "messageQueue", "[0-9]", " = errors;var ", ") {  ", "getScriptPartFromCode", "allKeys", "coerceTypes", "openWorkflow", "flatten", "); if (!", "negative", "$async", "setState", "workflowManager", "acq", "format", "Current option: Layer {{layerName}}", "以画布边界获取画布", "reboot", "formatArgs", " , message: 'boolean schema is false' ", " , params: { i: i, j: j } ", "Workflow not found", "external", "([^0-9])", "title", "Generating...", "capacity", "getHandlerTypes", "通道连接中...", "Selection mask", "(.+?)", "init: i18next is already initialized. You should call init just once!", "languageOnly", "keyword", "uploadComfyImageFromUXP", "$schema", "safeParse", "ZodRecord", "constructor", "输出至：", "prepend", "Server does not support tools (required for ", "fallbackLng", "ZodVoid", "Running...", "交集或缩放目标为空", "object", "formErrors", "if (", "getUsedParamsDetails", "fallbackRequestHandler", "extra", "finally", "invalid_type", "resources/read", " = undefined;", "payload", " } } ", "0?[1-9]", "Illegal input >= 0x80 (not a basic code point)", "refinement", "escape", "minimum", "getNode", "test", "executing", "Current layer bounds only", "addMiddleware", "useColors", "getTransport", " = equal(", "Loading...", " should be boolean' ", "connect", "Canvas boundary"];
  return bx = function() {
    return i;
  }, bx();
}
class K0 extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this[x(796)] = this[x(1333)];
  }
  [a(2083)]() {
    const x = a;
    if (this[x(2354)] !== null) return this._cached;
    const t = this[x(2454)][x(1286)](), s = N0.objectKeys(t);
    return this[x(2354)] = { shape: t, keys: s }, this._cached;
  }
  _parse(x) {
    const t = a;
    if (this[t(975)](x) !== t0[t(2535)]) {
      const u = this._getOrReturnCtx(x);
      return Y(u, { code: W[t(2542)], expected: t0[t(2535)], received: u[t(1819)] }), h0;
    }
    const { status: e, ctx: r } = this[t(1689)](x), { shape: n, keys: o } = this[t(2083)](), c = [];
    if (!(this[t(2454)][t(2805)] instanceof Ie && this[t(2454)].unknownKeys === t(1458))) for (const u in r[t(1369)])
      !o[t(2583)](u) && c[t(893)](u);
    const d = [];
    for (const u of o) {
      const f = n[u], l = r[t(1369)][u];
      d[t(893)]({ key: { status: t(1016), value: u }, value: f._parse(new he(r, l, r[t(1522)], u)), alwaysSet: u in r[t(1369)] });
    }
    if (this[t(2454)].catchall instanceof Ie) {
      const u = this[t(2454)].unknownKeys;
      if (u === "passthrough") for (const f of c)
        d[t(893)]({ key: { status: t(1016), value: f }, value: { status: t(1016), value: r[t(1369)][f] } });
      else if (u === "strict") c[t(1492)] > 0 && (Y(r, { code: W[t(1884)], keys: c }), e.dirty());
      else if (u !== t(1458)) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def[t(2805)];
      for (const f of c) {
        const l = r.data[f];
        d[t(893)]({ key: { status: t(1016), value: f }, value: u[t(769)](new he(r, l, r[t(1522)], f)), alwaysSet: f in r[t(1369)] });
      }
    }
    return r[t(521)][t(687)] ? Promise[t(1362)]().then(async () => {
      const u = t, f = [];
      for (const l of d) {
        const g = await l[u(771)], h = await l[u(1454)];
        f[u(893)]({ key: g, value: h, alwaysSet: l[u(2313)] });
      }
      return f;
    }).then((u) => ee.mergeObjectSync(e, u)) : ee[t(2833)](e, d);
  }
  get [a(1286)]() {
    const x = a;
    return this[x(2454)][x(1286)]();
  }
  strict(x) {
    const t = a;
    return r0[t(830)], new K0({ ...this._def, unknownKeys: t(1234), ...x !== void 0 ? { errorMap: (s, e) => {
      var o, c;
      const r = t, n = ((c = (o = this[r(2454)])[r(2618)]) == null ? void 0 : c.call(o, s, e)[r(1261)]) ?? e[r(2622)];
      return s[r(2952)] === "unrecognized_keys" ? { message: r0[r(830)](x)[r(1261)] ?? n } : { message: n };
    } } : {} });
  }
  [a(1458)]() {
    const x = a;
    return new K0({ ...this[x(2454)], unknownKeys: x(1458) });
  }
  [a(1174)]() {
    const x = a;
    return new K0({ ...this[x(2454)], unknownKeys: x(1174) });
  }
  [a(1333)](x) {
    const t = a;
    return new K0({ ...this[t(2454)], shape: () => ({ ...this[t(2454)].shape(), ...x }) });
  }
  [a(1999)](x) {
    const t = a;
    return new K0({ unknownKeys: x[t(2454)][t(1748)], catchall: x[t(2454)].catchall, shape: () => ({ ...this[t(2454)][t(1286)](), ...x[t(2454)][t(1286)]() }), typeName: p0[t(2624)] });
  }
  [a(1424)](x, t) {
    return this[a(796)]({ [x]: t });
  }
  [a(2805)](x) {
    const t = a;
    return new K0({ ...this[t(2454)], catchall: x });
  }
  [a(838)](x) {
    const t = a, s = {};
    for (const e of N0[t(1923)](x))
      x[e] && this[t(1286)][e] && (s[e] = this[t(1286)][e]);
    return new K0({ ...this[t(2454)], shape: () => s });
  }
  omit(x) {
    const t = a, s = {};
    for (const e of N0[t(1923)](this.shape))
      !x[e] && (s[e] = this[t(1286)][e]);
    return new K0({ ...this._def, shape: () => s });
  }
  [a(1726)]() {
    return He(this);
  }
  [a(2620)](x) {
    const t = a, s = {};
    for (const e of N0[t(1923)](this[t(1286)])) {
      const r = this[t(1286)][e];
      x && !x[e] ? s[e] = r : s[e] = r[t(793)]();
    }
    return new K0({ ...this._def, shape: () => s });
  }
  required(x) {
    const t = a, s = {};
    for (const e of N0[t(1923)](this[t(1286)]))
      if (x && !x[e]) s[e] = this[t(1286)][e];
      else {
        let n = this[t(1286)][e];
        for (; n instanceof Se; )
          n = n._def[t(780)];
        s[e] = n;
      }
    return new K0({ ...this[t(2454)], shape: () => s });
  }
  [a(2364)]() {
    const x = a;
    return Ms(N0[x(1923)](this[x(1286)]));
  }
}
K0[a(2587)] = (i, x) => {
  const t = a;
  return new K0({ shape: () => i, unknownKeys: t(1458), catchall: Ie.create(), typeName: p0[t(2624)], ...v0(x) });
}, K0.strictCreate = (i, x) => {
  const t = a;
  return new K0({ shape: () => i, unknownKeys: "strict", catchall: Ie[t(2587)](), typeName: p0.ZodObject, ...v0(x) });
}, K0[a(1325)] = (i, x) => {
  const t = a;
  return new K0({ shape: i, unknownKeys: t(1458), catchall: Ie[t(2587)](), typeName: p0.ZodObject, ...v0(x) });
};
class yx extends C0 {
  [a(769)](x) {
    const t = a, { ctx: s } = this[t(1689)](x), e = this[t(2454)][t(2308)];
    function r(n) {
      const o = t;
      for (const d of n)
        if (d.result[o(2666)] === o(1016)) return d[o(979)];
      for (const d of n)
        if (d[o(979)][o(2666)] === o(1407)) return s.common[o(708)][o(893)](...d[o(612)][o(521)].issues), d[o(979)];
      const c = n[o(1790)]((d) => new ke(d.ctx[o(521)][o(708)]));
      return Y(s, { code: W[o(1680)], unionErrors: c }), h0;
    }
    if (s[t(521)].async) return Promise[t(2380)](e[t(1790)](async (n) => {
      const o = t, c = { ...s, common: { ...s.common, issues: [] }, parent: null };
      return { result: await n._parseAsync({ data: s.data, path: s[o(1522)], parent: c }), ctx: c };
    }))[t(2139)](r);
    {
      let n;
      const o = [];
      for (const d of e) {
        const u = { ...s, common: { ...s[t(521)], issues: [] }, parent: null }, f = d[t(1935)]({ data: s.data, path: s[t(1522)], parent: u });
        if (f[t(2666)] === t(1016)) return f;
        f.status === t(1407) && !n && (n = { result: f, ctx: u }), u[t(521)][t(708)][t(1492)] && o.push(u[t(521)][t(708)]);
      }
      if (n) return s[t(521)][t(708)][t(893)](...n[t(612)][t(521)][t(708)]), n[t(979)];
      const c = o[t(1790)]((d) => new ke(d));
      return Y(s, { code: W.invalid_union, unionErrors: c }), h0;
    }
  }
  get options() {
    const x = a;
    return this[x(2454)][x(2308)];
  }
}
yx[a(2587)] = (i, x) => {
  const t = a;
  return new yx({ options: i, typeName: p0[t(2736)], ...v0(x) });
};
const ye = (i) => {
  const x = a;
  return i instanceof Zt ? ye(i[x(2485)]) : i instanceof Te ? ye(i[x(780)]()) : i instanceof Sx ? [i[x(1454)]] : i instanceof je ? i[x(2308)] : i instanceof Bt ? N0.objectValues(i[x(2304)]) : i instanceof Px ? ye(i[x(2454)][x(780)]) : i instanceof Lt ? [void 0] : i instanceof $t ? [null] : i instanceof Se ? [void 0, ...ye(i[x(948)]())] : i instanceof Me ? [null, ...ye(i.unwrap())] : i instanceof Ls || i instanceof Ix ? ye(i.unwrap()) : i instanceof Ex ? ye(i[x(2454)][x(780)]) : [];
};
class xa extends C0 {
  [a(769)](x) {
    const t = a, { ctx: s } = this[t(1689)](x);
    if (s[t(1819)] !== t0[t(2535)]) return Y(s, { code: W[t(2542)], expected: t0[t(2535)], received: s.parsedType }), h0;
    const e = this[t(1073)], r = s.data[e], n = this[t(2804)].get(r);
    return n ? s[t(521)][t(687)] ? n[t(1808)]({ data: s[t(1369)], path: s.path, parent: s }) : n[t(1935)]({ data: s.data, path: s[t(1522)], parent: s }) : (Y(s, { code: W[t(1368)], options: Array[t(1954)](this[t(2804)][t(2693)]()), path: [e] }), h0);
  }
  get [a(1073)]() {
    const x = a;
    return this[x(2454)][x(1073)];
  }
  get [a(2308)]() {
    const x = a;
    return this[x(2454)][x(2308)];
  }
  get [a(2804)]() {
    const x = a;
    return this[x(2454)][x(2804)];
  }
  static [a(2587)](x, t, s) {
    const e = a, r = /* @__PURE__ */ new Map();
    for (const n of t) {
      const o = ye(n.shape[x]);
      if (!o[e(1492)]) throw new Error("A discriminator value for key `" + x + e(939));
      for (const c of o) {
        if (r.has(c)) throw new Error("Discriminator property " + String(x) + e(2825) + String(c));
        r[e(2296)](c, n);
      }
    }
    return new xa({ typeName: p0[e(1071)], discriminator: x, options: t, optionsMap: r, ...v0(s) });
  }
}
function Vt(i, x) {
  const t = a, s = Ee(i), e = Ee(x);
  if (i === x) return { valid: !0, data: i };
  if (s === t0[t(2535)] && e === t0[t(2535)]) {
    const r = N0.objectKeys(x), n = N0[t(1923)](i).filter((c) => r[t(2098)](c) !== -1), o = { ...i, ...x };
    for (const c of n) {
      const d = Vt(i[c], x[c]);
      if (!d[t(1016)]) return { valid: !1 };
      o[c] = d[t(1369)];
    }
    return { valid: !0, data: o };
  } else if (s === t0[t(1355)] && e === t0[t(1355)]) {
    if (i.length !== x[t(1492)]) return { valid: !1 };
    const r = [];
    for (let n = 0; n < i.length; n++) {
      const o = i[n], c = x[n], d = Vt(o, c);
      if (!d[t(1016)]) return { valid: !1 };
      r[t(893)](d[t(1369)]);
    }
    return { valid: !0, data: r };
  } else return s === t0[t(1470)] && e === t0.date && +i == +x ? { valid: !0, data: i } : { valid: !1 };
}
class vx extends C0 {
  [a(769)](x) {
    const t = a, { status: s, ctx: e } = this[t(1689)](x), r = (n, o) => {
      const c = t;
      if (Ea(n) || Ea(o)) return h0;
      const d = Vt(n[c(1454)], o.value);
      return d[c(1016)] ? ((Ia(n) || Ia(o)) && s.dirty(), { status: s[c(1454)], value: d[c(1369)] }) : (Y(e, { code: W.invalid_intersection_types }), h0);
    };
    return e[t(521)].async ? Promise[t(2380)]([this[t(2454)][t(791)][t(1808)]({ data: e[t(1369)], path: e.path, parent: e }), this[t(2454)].right._parseAsync({ data: e[t(1369)], path: e.path, parent: e })])[t(2139)](([n, o]) => r(n, o)) : r(this[t(2454)][t(791)][t(1935)]({ data: e[t(1369)], path: e[t(1522)], parent: e }), this._def[t(839)][t(1935)]({ data: e.data, path: e[t(1522)], parent: e }));
  }
}
vx[a(2587)] = (i, x, t) => {
  const s = a;
  return new vx({ left: i, right: x, typeName: p0[s(637)], ...v0(t) });
};
class De extends C0 {
  [a(769)](x) {
    const t = a, { status: s, ctx: e } = this._processInputParams(x);
    if (e[t(1819)] !== t0[t(1355)]) return Y(e, { code: W[t(2542)], expected: t0.array, received: e[t(1819)] }), h0;
    if (e[t(1369)][t(1492)] < this[t(2454)][t(2756)][t(1492)]) return Y(e, { code: W[t(1787)], minimum: this._def.items.length, inclusive: !0, exact: !1, type: t(1355) }), h0;
    !this._def[t(607)] && e[t(1369)][t(1492)] > this[t(2454)].items.length && (Y(e, { code: W[t(511)], maximum: this[t(2454)].items[t(1492)], inclusive: !0, exact: !1, type: t(1355) }), s[t(1407)]());
    const n = [...e[t(1369)]][t(1790)]((o, c) => {
      const d = t, u = this[d(2454)][d(2756)][c] || this[d(2454)][d(607)];
      return u ? u[d(769)](new he(e, o, e[d(1522)], c)) : null;
    })[t(861)]((o) => !!o);
    return e[t(521)][t(687)] ? Promise.all(n)[t(2139)]((o) => ee.mergeArray(s, o)) : ee[t(1513)](s, n);
  }
  get [a(2756)]() {
    return this._def.items;
  }
  [a(607)](x) {
    const t = a;
    return new De({ ...this[t(2454)], rest: x });
  }
}
De[a(2587)] = (i, x) => {
  const t = a;
  if (!Array.isArray(i)) throw new Error(t(2902));
  return new De({ items: i, typeName: p0[t(560)], rest: null, ...v0(x) });
};
class wx extends C0 {
  get [a(741)]() {
    const x = a;
    return this[x(2454)][x(2680)];
  }
  get [a(2383)]() {
    const x = a;
    return this[x(2454)][x(542)];
  }
  _parse(x) {
    const t = a, { status: s, ctx: e } = this[t(1689)](x);
    if (e[t(1819)] !== t0.object) return Y(e, { code: W[t(2542)], expected: t0[t(2535)], received: e[t(1819)] }), h0;
    const r = [], n = this[t(2454)][t(2680)], o = this[t(2454)][t(542)];
    for (const c in e.data)
      r[t(893)]({ key: n[t(769)](new he(e, c, e[t(1522)], c)), value: o[t(769)](new he(e, e[t(1369)][c], e[t(1522)], c)), alwaysSet: c in e.data });
    return e.common[t(687)] ? ee[t(1933)](s, r) : ee.mergeObjectSync(s, r);
  }
  get [a(943)]() {
    return this[a(2454)].valueType;
  }
  static [a(2587)](x, t, s) {
    const e = a;
    return t instanceof C0 ? new wx({ keyType: x, valueType: t, typeName: p0[e(2526)], ...v0(s) }) : new wx({ keyType: we[e(2587)](), valueType: x, typeName: p0[e(2526)], ...v0(t) });
  }
}
class Fa extends C0 {
  get [a(741)]() {
    const x = a;
    return this._def[x(2680)];
  }
  get [a(2383)]() {
    const x = a;
    return this[x(2454)][x(542)];
  }
  [a(769)](x) {
    const t = a, { status: s, ctx: e } = this[t(1689)](x);
    if (e[t(1819)] !== t0[t(1790)]) return Y(e, { code: W[t(2542)], expected: t0[t(1790)], received: e[t(1819)] }), h0;
    const r = this[t(2454)].keyType, n = this[t(2454)][t(542)], o = [...e[t(1369)].entries()][t(1790)](([c, d], u) => {
      const f = t;
      return { key: r[f(769)](new he(e, c, e[f(1522)], [u, "key"])), value: n[f(769)](new he(e, d, e[f(1522)], [u, "value"])) };
    });
    if (e[t(521)].async) {
      const c = /* @__PURE__ */ new Map();
      return Promise[t(1362)]()[t(2139)](async () => {
        const d = t;
        for (const u of o) {
          const f = await u.key, l = await u.value;
          if (f[d(2666)] === "aborted" || l[d(2666)] === d(2699)) return h0;
          (f[d(2666)] === "dirty" || l.status === "dirty") && s.dirty(), c[d(2296)](f[d(1454)], l[d(1454)]);
        }
        return { status: s[d(1454)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const d of o) {
        const u = d.key, f = d.value;
        if (u.status === "aborted" || f[t(2666)] === t(2699)) return h0;
        (u.status === t(1407) || f[t(2666)] === t(1407)) && s[t(1407)](), c[t(2296)](u.value, f[t(1454)]);
      }
      return { status: s[t(1454)], value: c };
    }
  }
}
Fa[a(2587)] = (i, x, t) => {
  const s = a;
  return new Fa({ valueType: x, keyType: i, typeName: p0[s(993)], ...v0(t) });
};
class ax extends C0 {
  [a(769)](x) {
    const t = a, { status: s, ctx: e } = this._processInputParams(x);
    if (e[t(1819)] !== t0.set) return Y(e, { code: W[t(2542)], expected: t0.set, received: e[t(1819)] }), h0;
    const r = this[t(2454)];
    r[t(1741)] !== null && e[t(1369)][t(2191)] < r[t(1741)][t(1454)] && (Y(e, { code: W[t(1787)], minimum: r[t(1741)][t(1454)], type: "set", inclusive: !0, exact: !1, message: r[t(1741)].message }), s[t(1407)]()), r[t(765)] !== null && e[t(1369)][t(2191)] > r.maxSize[t(1454)] && (Y(e, { code: W.too_big, maximum: r[t(765)][t(1454)], type: t(2296), inclusive: !0, exact: !1, message: r[t(765)][t(1261)] }), s[t(1407)]());
    const n = this[t(2454)][t(542)];
    function o(d) {
      const u = t, f = /* @__PURE__ */ new Set();
      for (const l of d) {
        if (l[u(2666)] === "aborted") return h0;
        l.status === u(1407) && s[u(1407)](), f[u(911)](l[u(1454)]);
      }
      return { status: s.value, value: f };
    }
    const c = [...e[t(1369)].values()].map((d, u) => n[t(769)](new he(e, d, e[t(1522)], u)));
    return e[t(521)][t(687)] ? Promise.all(c).then((d) => o(d)) : o(c);
  }
  [a(1012)](x, t) {
    const s = a;
    return new ax({ ...this[s(2454)], minSize: { value: x, message: r0[s(2643)](t) } });
  }
  [a(731)](x, t) {
    const s = a;
    return new ax({ ...this._def, maxSize: { value: x, message: r0[s(2643)](t) } });
  }
  [a(2191)](x, t) {
    const s = a;
    return this.min(x, t)[s(731)](x, t);
  }
  [a(1526)](x) {
    return this[a(1012)](1, x);
  }
}
ax[a(2587)] = (i, x) => new ax({ valueType: i, minSize: null, maxSize: null, typeName: p0.ZodSet, ...v0(x) });
class Zt extends C0 {
  get schema() {
    const x = a;
    return this[x(2454)][x(1703)]();
  }
  [a(769)](x) {
    const t = a, { ctx: s } = this[t(1689)](x);
    return this[t(2454)][t(1703)]()._parse({ data: s[t(1369)], path: s.path, parent: s });
  }
}
Zt[a(2587)] = (i, x) => new Zt({ getter: i, typeName: p0.ZodLazy, ...v0(x) });
class Sx extends C0 {
  _parse(x) {
    const t = a;
    if (x.data !== this._def[t(1454)]) {
      const s = this[t(1733)](x);
      return Y(s, { received: s[t(1369)], code: W.invalid_literal, expected: this[t(2454)][t(1454)] }), h0;
    }
    return { status: "valid", value: x.data };
  }
  get [a(1454)]() {
    const x = a;
    return this[x(2454)][x(1454)];
  }
}
Sx[a(2587)] = (i, x) => new Sx({ value: i, typeName: p0.ZodLiteral, ...v0(x) });
function Ms(i, x) {
  const t = a;
  return new je({ values: i, typeName: p0[t(2797)], ...v0(x) });
}
class je extends C0 {
  [a(769)](x) {
    const t = a;
    if (typeof x[t(1369)] !== t(1346)) {
      const s = this[t(1733)](x), e = this[t(2454)][t(2977)];
      return Y(s, { expected: N0[t(1131)](e), received: s.parsedType, code: W[t(2542)] }), h0;
    }
    if (!this[t(1503)] && (this[t(1503)] = new Set(this[t(2454)].values)), !this._cache.has(x.data)) {
      const s = this[t(1733)](x), e = this[t(2454)].values;
      return Y(s, { received: s[t(1369)], code: W[t(758)], options: e }), h0;
    }
    return ae(x[t(1369)]);
  }
  get options() {
    return this[a(2454)].values;
  }
  get [a(2304)]() {
    const x = a, t = {};
    for (const s of this[x(2454)].values)
      t[s] = s;
    return t;
  }
  get [a(738)]() {
    const x = a, t = {};
    for (const s of this[x(2454)][x(2977)])
      t[s] = s;
    return t;
  }
  get [a(2013)]() {
    const x = a, t = {};
    for (const s of this._def[x(2977)])
      t[s] = s;
    return t;
  }
  [a(2e3)](x, t = this[a(2454)]) {
    const s = a;
    return je[s(2587)](x, { ...this[s(2454)], ...t });
  }
  [a(1674)](x, t = this[a(2454)]) {
    const s = a;
    return je.create(this[s(2308)][s(861)]((e) => !x[s(2583)](e)), { ...this[s(2454)], ...t });
  }
}
je[a(2587)] = Ms;
class Bt extends C0 {
  [a(769)](x) {
    const t = a, s = N0[t(2811)](this[t(2454)][t(2977)]), e = this[t(1733)](x);
    if (e[t(1819)] !== t0[t(1346)] && e[t(1819)] !== t0[t(1120)]) {
      const r = N0.objectValues(s);
      return Y(e, { expected: N0[t(1131)](r), received: e[t(1819)], code: W[t(2542)] }), h0;
    }
    if (!this[t(1503)] && (this[t(1503)] = new Set(N0[t(2811)](this._def[t(2977)]))), !this._cache.has(x[t(1369)])) {
      const r = N0[t(532)](s);
      return Y(e, { received: e[t(1369)], code: W.invalid_enum_value, options: r }), h0;
    }
    return ae(x[t(1369)]);
  }
  get [a(2304)]() {
    const x = a;
    return this[x(2454)][x(2977)];
  }
}
Bt[a(2587)] = (i, x) => {
  const t = a;
  return new Bt({ values: i, typeName: p0[t(963)], ...v0(x) });
};
class kx extends C0 {
  [a(948)]() {
    const x = a;
    return this[x(2454)][x(2417)];
  }
  [a(769)](x) {
    const t = a, { ctx: s } = this[t(1689)](x);
    if (s.parsedType !== t0[t(1472)] && s[t(521)].async === !1) return Y(s, { code: W.invalid_type, expected: t0[t(1472)], received: s[t(1819)] }), h0;
    const e = s[t(1819)] === t0.promise ? s[t(1369)] : Promise[t(1362)](s[t(1369)]);
    return ae(e.then((r) => {
      const n = t;
      return this[n(2454)][n(2417)][n(2141)](r, { path: s[n(1522)], errorMap: s[n(521)][n(1791)] });
    }));
  }
}
kx[a(2587)] = (i, x) => {
  const t = a;
  return new kx({ type: i, typeName: p0[t(2240)], ...v0(x) });
};
class Te extends C0 {
  [a(780)]() {
    const x = a;
    return this[x(2454)][x(2485)];
  }
  [a(513)]() {
    const x = a;
    return this[x(2454)][x(2485)]._def.typeName === p0[x(1647)] ? this[x(2454)][x(2485)][x(513)]() : this[x(2454)][x(2485)];
  }
  [a(769)](x) {
    const t = a, { status: s, ctx: e } = this[t(1689)](x), r = this._def[t(2385)] || null, n = { addIssue: (o) => {
      const c = t;
      Y(e, o), o.fatal ? s[c(661)]() : s[c(1407)]();
    }, get path() {
      return e[t(1522)];
    } };
    if (n[t(582)] = n.addIssue[t(2654)](n), r[t(2417)] === t(1754)) {
      const o = r[t(999)](e[t(1369)], n);
      if (e[t(521)].async) return Promise[t(1362)](o)[t(2139)](async (c) => {
        const d = t;
        if (s.value === d(2699)) return h0;
        const u = await this[d(2454)].schema[d(1808)]({ data: c, path: e[d(1522)], parent: e });
        return u.status === d(2699) ? h0 : u[d(2666)] === d(1407) || s.value === d(1407) ? Xe(u[d(1454)]) : u;
      });
      {
        if (s[t(1454)] === t(2699)) return h0;
        const c = this[t(2454)].schema[t(1935)]({ data: o, path: e[t(1522)], parent: e });
        return c[t(2666)] === t(2699) ? h0 : c[t(2666)] === t(1407) ? Xe(c[t(1454)]) : s[t(1454)] === t(1407) ? Xe(c.value) : c;
      }
    }
    if (r.type === t(2549)) {
      const o = (c) => {
        const d = t, u = r[d(2549)](c, n);
        if (e.common[d(687)]) return Promise[d(1362)](u);
        if (u instanceof Promise) throw new Error(d(925));
        return c;
      };
      if (e[t(521)].async === !1) {
        const c = this[t(2454)][t(2485)][t(1935)]({ data: e.data, path: e[t(1522)], parent: e });
        return c[t(2666)] === t(2699) ? h0 : (c[t(2666)] === t(1407) && s[t(1407)](), o(c[t(1454)]), { status: s[t(1454)], value: c[t(1454)] });
      } else return this[t(2454)][t(2485)][t(1808)]({ data: e[t(1369)], path: e[t(1522)], parent: e })[t(2139)]((c) => {
        const d = t;
        return c[d(2666)] === "aborted" ? h0 : (c.status === "dirty" && s[d(1407)](), o(c.value).then(() => ({ status: s.value, value: c.value })));
      });
    }
    if (r[t(2417)] === t(999))
      if (e.common.async === !1) {
        const o = this[t(2454)][t(2485)][t(1935)]({ data: e[t(1369)], path: e.path, parent: e });
        if (!Ve(o)) return h0;
        const c = r.transform(o[t(1454)], n);
        if (c instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: s.value, value: c };
      } else return this[t(2454)].schema[t(1808)]({ data: e[t(1369)], path: e[t(1522)], parent: e })[t(2139)]((o) => {
        const c = t;
        return Ve(o) ? Promise[c(1362)](r[c(999)](o[c(1454)], n))[c(2139)]((d) => ({ status: s.value, value: d })) : h0;
      });
    N0.assertNever(r);
  }
}
Te.create = (i, x, t) => {
  const s = a;
  return new Te({ schema: i, typeName: p0[s(1647)], effect: x, ...v0(t) });
}, Te[a(522)] = (i, x, t) => {
  const s = a;
  return new Te({ schema: x, effect: { type: s(1754), transform: i }, typeName: p0[s(1647)], ...v0(t) });
};
class Se extends C0 {
  _parse(x) {
    const t = a;
    return this[t(975)](x) === t0[t(633)] ? ae(void 0) : this._def[t(780)]._parse(x);
  }
  [a(948)]() {
    return this[a(2454)].innerType;
  }
}
Se.create = (i, x) => {
  const t = a;
  return new Se({ innerType: i, typeName: p0[t(2133)], ...v0(x) });
};
class Me extends C0 {
  [a(769)](x) {
    const t = a;
    return this[t(975)](x) === t0[t(693)] ? ae(null) : this[t(2454)][t(780)][t(769)](x);
  }
  unwrap() {
    const x = a;
    return this[x(2454)][x(780)];
  }
}
Me[a(2587)] = (i, x) => {
  const t = a;
  return new Me({ innerType: i, typeName: p0[t(722)], ...v0(x) });
};
class Px extends C0 {
  _parse(x) {
    const t = a, { ctx: s } = this._processInputParams(x);
    let e = s[t(1369)];
    return s[t(1819)] === t0[t(633)] && (e = this[t(2454)][t(1276)]()), this._def[t(780)][t(769)]({ data: e, path: s[t(1522)], parent: s });
  }
  [a(2399)]() {
    const x = a;
    return this[x(2454)][x(780)];
  }
}
Px[a(2587)] = (i, x) => {
  const t = a;
  return new Px({ innerType: i, typeName: p0[t(2951)], defaultValue: typeof x[t(1753)] === t(621) ? x[t(1753)] : () => x[t(1753)], ...v0(x) });
};
class Ex extends C0 {
  [a(769)](x) {
    const t = a, { ctx: s } = this._processInputParams(x), e = { ...s, common: { ...s.common, issues: [] } }, r = this._def[t(780)]._parse({ data: e[t(1369)], path: e[t(1522)], parent: { ...e } });
    return mx(r) ? r[t(2139)]((n) => {
      const o = t;
      return { status: o(1016), value: n.status === o(1016) ? n.value : this[o(2454)][o(2794)]({ get error() {
        const c = o;
        return new ke(e[c(521)].issues);
      }, input: e[o(1369)] }) };
    }) : { status: t(1016), value: r[t(2666)] === t(1016) ? r[t(1454)] : this._def[t(2794)]({ get error() {
      const n = t;
      return new ke(e.common[n(708)]);
    }, input: e[t(1369)] }) };
  }
  [a(620)]() {
    const x = a;
    return this[x(2454)][x(780)];
  }
}
Ex[a(2587)] = (i, x) => {
  const t = a;
  return new Ex({ innerType: i, typeName: p0.ZodCatch, catchValue: typeof x.catch == "function" ? x[t(2678)] : () => x[t(2678)], ...v0(x) });
};
class Na extends C0 {
  [a(769)](x) {
    const t = a;
    if (this._getType(x) !== t0[t(664)]) {
      const e = this[t(1733)](x);
      return Y(e, { code: W.invalid_type, expected: t0[t(664)], received: e.parsedType }), h0;
    }
    return { status: t(1016), value: x[t(1369)] };
  }
}
Na[a(2587)] = (i) => {
  const x = a;
  return new Na({ typeName: p0[x(2586)], ...v0(i) });
};
class Ls extends C0 {
  _parse(x) {
    const t = a, { ctx: s } = this[t(1689)](x), e = s.data;
    return this[t(2454)][t(2417)][t(769)]({ data: e, path: s[t(1522)], parent: s });
  }
  [a(948)]() {
    const x = a;
    return this._def[x(2417)];
  }
}
class ta extends C0 {
  [a(769)](x) {
    const t = a, { status: s, ctx: e } = this[t(1689)](x);
    if (e[t(521)][t(687)])
      return (async () => {
        const n = t, o = await this[n(2454)].in[n(1808)]({ data: e[n(1369)], path: e[n(1522)], parent: e });
        return o[n(2666)] === n(2699) ? h0 : o[n(2666)] === n(1407) ? (s[n(1407)](), Xe(o.value)) : this[n(2454)][n(1508)][n(1808)]({ data: o[n(1454)], path: e[n(1522)], parent: e });
      })();
    {
      const r = this[t(2454)].in[t(1935)]({ data: e[t(1369)], path: e[t(1522)], parent: e });
      return r[t(2666)] === t(2699) ? h0 : r[t(2666)] === t(1407) ? (s[t(1407)](), { status: "dirty", value: r[t(1454)] }) : this._def.out._parseSync({ data: r[t(1454)], path: e[t(1522)], parent: e });
    }
  }
  static create(x, t) {
    const s = a;
    return new ta({ in: x, out: t, typeName: p0[s(498)] });
  }
}
class Ix extends C0 {
  _parse(x) {
    const t = a, s = this._def[t(780)][t(769)](x), e = (r) => {
      const n = t;
      return Ve(r) && (r[n(1454)] = Object.freeze(r[n(1454)])), r;
    };
    return mx(s) ? s[t(2139)]((r) => e(r)) : e(s);
  }
  [a(948)]() {
    const x = a;
    return this[x(2454)][x(780)];
  }
}
Ix[a(2587)] = (i, x) => {
  const t = a;
  return new Ix({ innerType: i, typeName: p0[t(2387)], ...v0(x) });
};
var p0;
(function(i) {
  const x = a;
  i[x(1517)] = "ZodString", i.ZodNumber = x(2199), i[x(2586)] = x(2586), i.ZodBigInt = x(1002), i[x(2689)] = x(2689), i[x(1804)] = x(1804), i[x(1632)] = "ZodSymbol", i[x(2200)] = x(2200), i.ZodNull = x(2906), i[x(2052)] = x(2052), i[x(2919)] = x(2919), i.ZodNever = x(1233), i[x(2532)] = "ZodVoid", i.ZodArray = x(1488), i.ZodObject = x(2624), i[x(2736)] = x(2736), i[x(1071)] = x(1071), i[x(637)] = x(637), i[x(560)] = x(560), i.ZodRecord = "ZodRecord", i[x(993)] = x(993), i.ZodSet = x(2893), i[x(947)] = x(947), i[x(1605)] = x(1605), i[x(1651)] = x(1651), i[x(2797)] = x(2797), i[x(1647)] = x(1647), i[x(963)] = x(963), i[x(2133)] = x(2133), i[x(722)] = x(722), i[x(2951)] = "ZodDefault", i[x(1811)] = x(1811), i[x(2240)] = x(2240), i[x(1105)] = x(1105), i[x(498)] = x(498), i[x(2387)] = "ZodReadonly";
})(p0 || (p0 = {}));
const y = we.create, J = Ze[a(2587)], e0 = Mt[a(2587)], T0 = zt[a(2587)], Be = Ut[a(2587)];
Ie[a(2587)];
const $x = Ht[a(2587)], w0 = le[a(2587)], k = K0[a(2587)], G0 = yx[a(2587)], $s = xa[a(2587)];
vx[a(2587)], De[a(2587)];
const V0 = wx.create, x0 = Sx[a(2587)], I0 = je[a(2587)];
kx[a(2587)];
const B = Se[a(2587)];
Me.create;
var Yr, _r;
class ii {
  constructor(x, t) {
    m0(this, _r);
    m0(this, Yr);
    const s = a;
    this[s(1956)] = x, this.nodeId = t;
  }
  get [(_r = a(1956), Yr = a(2267), a(2390))]() {
    const x = a, t = this[x(1956)].getNodeStore(this[x(2267)]);
    if (!t) throw new Error("No store found for node " + this.nodeId);
    return t;
  }
  get [a(1447)]() {
    const x = a, t = this[x(1956)][x(1558)]()[x(2552)](this[x(2267)]);
    if (!t) throw new Error(x(1304) + this[x(2267)]);
    return new Proxy({}, { get: (e, r) => {
      const n = x;
      if (typeof r !== n(1346)) return;
      const o = t[n(1447)][r], c = r.startsWith(n(2447));
      if (!o && !c) throw new Error(n(1720) + r + " not found for node " + this[n(2267)]);
      return async (d, u) => {
        const f = n, l = this[f(2890)]();
        if (!l) throw new Error(f(2455) + this.nodeId);
        const { transport: g, path: h } = l, m = this[f(1956)][f(1594)]();
        if (!(o != null && o.stream)) {
          const S = T0();
          let P;
          if (h[f(1492)] === 2) P = await g[f(1326)]({ method: f(2843), params: { action: r, data: d, sourceNodeId: m } }, S);
          else try {
            P = await g[f(1326)]({ method: f(2843), params: { action: f(2813), data: { targetNodeId: this[f(2267)], targetAction: r, targetData: d, forwardPath: h.slice(1) }, sourceNodeId: m } }, S);
          } catch (F) {
            throw console[f(1978)](f(2637) + r + ":", F), console[f(1978)]({ targetNodeId: this[f(2267)], targetAction: r, targetData: d, forwardPath: h[f(1981)](1) }), F;
          }
          return P;
        }
        let v;
        return h.length === 2 ? v = g[f(685)]({ action: r, data: d, sourceNodeId: m }, o[f(1636)], u) : v = g[f(685)]({ action: f(2813), data: { targetNodeId: this[f(2267)], targetAction: r, targetData: d, forwardPath: h[f(1981)](1) }, sourceNodeId: m }, o.responseSchema, u), v;
      };
    } });
  }
  getConnectionInfo() {
    const x = a;
    return this[x(1956)][x(2445)](this[x(2267)]);
  }
}
var es, xs, ts;
class zs {
  constructor(x) {
    m0(this, ts);
    m0(this, xs);
    m0(this, es);
    const t = a;
    this[t(1956)] = x, this[t(2135)] = x[t(2135)], this.broadcastManager = x[t(689)];
  }
  [(ts = a(1956), xs = a(2135), es = a(689), a(1404))]({ store: x, storeName: t, onStateUpdate: s, requestInitialState: e }) {
    const r = a;
    this.broadcastManager[r(707)](r(566) + t, (n) => {
      const o = r;
      try {
        n.sourceNodeId !== this[o(1956)][o(1594)]() && s(n.stateUpdate);
      } catch (c) {
        console.error(o(2962) + t + ":", c);
      }
    });
  }
  initializeProducer({ store: x, storeName: t, sendStateUpdate: s, onInitialStateRequested: e }) {
    const r = a, n = this[r(1956)][r(1594)](), o = async (u, f = !1) => {
      const l = r;
      if (this[l(2456)]()) try {
        await this[l(689)][l(1556)](l(566) + t, { storeName: t, sourceNodeId: n, stateUpdate: u, isInitialState: f });
      } catch (h) {
        console[l(1978)]("[GraphStoreSynchronizer] Error broadcasting state update for " + t + ":", h);
      }
    }, c = x[r(1684)]((u) => {
      o(u, !1);
    });
    e(() => {
      o(x[r(2113)](), !0);
    });
    const d = r(1639) + t;
    return this[r(2135)][r(1173)](d, async () => {
      const u = r, f = x[u(2113)]();
      return await o(f, !0), { success: !0 };
    }), this[r(689)][r(707)](r(2073), async (u) => {
      const f = r;
      try {
        (u.toNode === n || u[f(2891)] === n) && await o(x[f(2113)](), !0);
      } catch {
      }
    }), () => {
      var f;
      const u = r;
      c(), (f = this.actionManager[u(2039)]) == null || f[u(1186)](d);
    };
  }
  [a(2456)]() {
    var t;
    const x = a;
    try {
      const s = this[x(1956)][x(2397)], e = s && s.getConnectionCount() > 0, r = ((t = this[x(689)].mountedEndpoints) == null ? void 0 : t[x(2191)]) > 0;
      return e || r;
    } catch {
      return !!this[x(689)];
    }
  }
  async broadcastCurrentState(x, t) {
    const s = a, e = this[s(1956)].getCurrentNodeId();
    if (this[s(2456)]()) try {
      await this[s(689)][s(1556)]("store:update:" + t, { storeName: t, sourceNodeId: e, stateUpdate: x[s(2113)](), isInitialState: !0 });
    } catch {
    }
  }
}
function oi({ graphInstance: i, store: x, name: t }) {
  const s = a, e = new zs(i), r = (o) => {
    const c = x.getState(), d = { ...c, ...o };
    x.setState(d);
  }, n = async () => {
    const o = K, c = o(1639) + t;
    try {
      const d = i[o(2552)](t);
      d && d[o(1447)] && d[o(1447)][c] && await d[o(1447)][c]();
    } catch (d) {
      console[o(2175)]("Failed to request initial state for " + t + ":", d);
    }
  };
  e[s(1404)]({ store: x, storeName: t, onStateUpdate: r, requestInitialState: n });
}
function ci({ graphInstance: i, store: x, name: t }) {
  const s = new zs(i), e = async (n) => {
  }, r = (n) => {
  };
  return s.initializeProducer({ store: x, storeName: t, sendStateUpdate: e, onInitialStateRequested: r });
}
var as, rs;
class di {
  constructor(x) {
    m0(this, rs, /* @__PURE__ */ new Map());
    m0(this, "transports", /* @__PURE__ */ new Map());
    m0(this, as, /* @__PURE__ */ new Set());
    m0(this, "currentNodeId");
    this.currentNodeId = x;
  }
  createGlobalDispatcherForType(x) {
    return (t) => {
      const s = K;
      if (t && t[s(2567)] === this.currentNodeId) return;
      const e = this.broadcastHandlers[s(1919)](x);
      if (e) {
        const { __origin: r, forwarded: n, ...o } = t || {};
        for (const c of e)
          try {
            c(o);
          } catch (d) {
            console.error("Error in broadcast handler for " + x + ":", d);
          }
      }
      !t[s(2108)] && this[s(1928)](x, t);
    };
  }
  async [(rs = a(2069), as = a(815), a(1928))](x, t) {
    const s = a;
    try {
      const e = { ...t, forwarded: !0 }, r = [...Array[s(1954)](this[s(755)][s(2977)]()), ...Array.from(this[s(815)])], n = r.map((o) => {
        const c = s;
        return o[c(2323)]({ method: "sdppp/broadcast", params: { messageType: x, message: e } })[c(2678)]((d) => {
          const u = c;
          console[u(1978)](u(1379) + x + ":", d);
        });
      });
      await Promise[s(2380)](n);
    } catch (e) {
      console.error(s(1786), e);
    }
  }
  [a(707)](x, t) {
    const s = a;
    !this[s(2069)][s(901)](x) && this.broadcastHandlers.set(x, /* @__PURE__ */ new Set()), this[s(2069)][s(1919)](x).add(t);
  }
  [a(2449)](x) {
    this[a(642)](x);
  }
  setupGeneralBroadcastHandler(x) {
    const t = k({ method: x0("sdppp/broadcast"), params: k({ messageType: y(), message: T0() }) });
    x.setNotificationHandler(t, async (s) => {
      const e = K, r = s[e(833)][e(1356)];
      this[e(1028)](r)(s.params[e(1261)]);
    });
  }
  addMiddleware(x, t) {
    const s = a;
    this[s(755)][s(2296)](x, t), this.setupTransportHandlers(t);
  }
  [a(2569)](x) {
    const t = a;
    this[t(755)][t(1186)](x);
  }
  async [a(1556)](x, t) {
    const s = a, e = [...Array[s(1954)](this[s(755)].values()), ...Array[s(1954)](this.mountedTransports)], r = e[s(1790)]((n) => {
      const o = s;
      return n[o(2323)]({ method: o(2647), params: { messageType: x, message: t } });
    });
    await Promise[s(2380)](r);
  }
  [a(2211)](x) {
    const t = a;
    this[t(815)][t(911)](x), this[t(2449)](x);
  }
  [a(2516)]() {
    const x = a;
    return Array[x(1954)](this[x(2069)][x(2693)]());
  }
  [a(1724)]() {
    const x = a;
    this[x(2069)][x(1724)](), this[x(755)].clear(), this[x(815)].clear();
  }
}
var ss, ns, is;
class ui {
  constructor(x, t, s) {
    m0(this, is, /* @__PURE__ */ new Map());
    m0(this, ns);
    m0(this, ss);
    m0(this, "getTransport");
    const e = a;
    this[e(2596)] = x, this[e(2968)] = t, this[e(2558)] = s;
  }
  [(is = a(2039), ns = a(2596), ss = a(2968), a(2657))](x, t) {
    const s = a, e = this.definition[s(2552)](this[s(2968)]);
    if (!e) throw new Error("Node definition not found for " + this[s(2968)]);
    const r = e[s(1447)][x];
    if (!r) throw new Error(s(1720) + String(x) + s(2019) + this[s(2968)]);
    this[s(2333)](x, t, r), this.actionHandlers[s(2296)](x, t);
  }
  [a(2333)](x, t, s) {
    s.stream;
  }
  [a(1173)](x, t) {
    const s = a;
    this[s(2039)][s(2296)](x, t);
  }
  [a(2211)](x) {
    const t = a;
    for (const [s, e] of this[t(2039)]) {
      const r = this[t(2596)][t(2552)](this[t(2968)]), n = r == null ? void 0 : r[t(1447)][s];
      if (s[t(1701)](t(2447)) ? !1 : (n == null ? void 0 : n[t(1487)]) === !0) {
        const d = k({ action: x0(s) });
        x[t(2020)](d, async function* (u, f, l) {
          const g = t, h = u.data || u, m = e(h, f, l);
          if (m && typeof m === g(2535) && Symbol[g(814)] in m) for await (const v of m)
            yield v === void 0 ? {} : v;
          else {
            const v = await m;
            yield v === void 0 ? {} : v;
          }
        });
      }
    }
    this[t(1370)](x), this[t(1082)](x);
  }
  [a(1370)](x) {
    const t = a, s = k({ action: x0(t(2813)) }), e = this;
    x.registerStreamRequestorHandler(s, async function* (r, n, o) {
      const c = t, d = r[c(1369)] || r, { targetNodeId: u, targetAction: f, targetData: l, forwardPath: g } = d;
      if (!g || g[c(1492)] === 0) throw new Error("Invalid forward path for proxy action");
      const h = g[0], m = g[c(1981)](1);
      if (m[c(1492)] === 0 && h === e[c(2968)]) {
        const v = e[c(2039)][c(1919)](f);
        if (!v) throw new Error(c(1720) + f + " not found on node " + e[c(2968)]);
        const S = v(l, n, o);
        if (S && typeof S === c(2535) && Symbol[c(814)] in S) for await (const P of S)
          yield P === void 0 ? {} : P;
        else {
          const P = await S;
          yield P === void 0 ? {} : P;
        }
        return;
      }
      if (h === e.currentNodeId && m[c(1492)] > 0) {
        const v = m[0], S = e[c(2558)](v);
        if (S) {
          const P = await S[c(685)]({ action: c(2813), data: { targetNodeId: u, targetAction: f, targetData: l, forwardPath: m } }, k({}), o);
          for await (const F of P)
            yield F === void 0 ? {} : F;
          return;
        }
        throw new Error(c(2614) + v + c(1375));
      }
      throw new Error("Invalid proxy forwarding: current node " + e[c(2968)] + c(2692) + g);
    });
  }
  [a(2750)]() {
    const x = a;
    return Array[x(1954)](this[x(2039)][x(2693)]());
  }
  [a(1630)](x) {
    const t = a;
    return this[t(2039)][t(901)](x);
  }
  getHandler(x) {
    return this[a(2039)].get(x);
  }
  clear() {
    this[a(2039)].clear();
  }
  registerDirectRequestHandler(x, t, s) {
  }
  [a(1082)](x) {
    const t = a, s = k({ method: x0(t(2843)), params: k({ action: y(), data: T0()[t(793)]() }) }), e = this;
    x[t(2608)](s, async (r, n) => {
      const o = t, { action: c, data: d } = r[o(833)];
      if (c === "__proxy_forward") return await e.handleDirectProxyForward(d, n);
      const u = e[o(2039)][o(1919)](c);
      if (!u) throw new Error("Action " + c + " not found on node " + e.currentNodeId);
      const f = u(d, n), l = await f;
      return l === void 0 ? {} : l;
    });
  }
  async [a(1998)](x, t) {
    const s = a, { targetNodeId: e, targetAction: r, targetData: n, forwardPath: o } = x;
    if (!o || o[s(1492)] === 0) throw new Error(s(1339));
    const c = o[0], d = o[s(1981)](1);
    if (d[s(1492)] === 0 && c === this[s(2968)]) {
      const u = this.actionHandlers.get(r);
      if (!u) throw new Error(s(1720) + r + " not found on node " + this[s(2968)]);
      const f = u(n, t), l = await f;
      return l === void 0 ? {} : l;
    }
    if (c === this[s(2968)] && d[s(1492)] > 0) {
      const u = d[0], f = this.getTransport(u);
      if (f) return await f.request({ method: s(2843), params: { action: "__proxy_forward", data: { targetNodeId: e, targetAction: r, targetData: n, forwardPath: d } } }, T0());
      throw new Error(s(2614) + u + s(1375));
    }
    throw new Error(s(2126) + this.currentNodeId + " not in path " + o);
  }
}
var os, cs;
class fi {
  constructor(x, t) {
    m0(this, cs);
    m0(this, os);
    m0(this, "connectedNodes", /* @__PURE__ */ new Set());
    const s = a;
    this[s(2596)] = x, this[s(2968)] = t;
  }
  [(cs = a(2596), os = a(2968), a(2053))](x) {
    const t = a;
    this.connectedNodes[t(911)](x);
  }
  [a(1208)](x) {
    this.connectedNodes.delete(x);
  }
  isConnected(x) {
    const t = a;
    return this.connectedNodes[t(901)](x);
  }
  [a(1872)](x, t) {
    const s = a;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), r = [{ nodeId: x, path: [x] }];
    for (; r.length > 0; ) {
      const { nodeId: n, path: o } = r[s(2388)]();
      if (e[s(901)](n)) continue;
      e.add(n);
      const c = this[s(2596)][s(1533)](n);
      for (const d of c) {
        if (d === t) return [...o, d];
        !e[s(901)](d) && r[s(893)]({ nodeId: d, path: [...o, d] });
      }
    }
  }
  [a(2613)]() {
    const x = a;
    return Array[x(1954)](this[x(2848)]);
  }
  [a(1121)]() {
    const x = a;
    return this[x(2848)][x(2191)];
  }
  [a(1363)]() {
    const x = a, t = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), e = [this[x(2968)]];
    for (s[x(911)](this[x(2968)]); e[x(1492)] > 0; ) {
      const r = e[x(2388)](), n = this.definition[x(1533)](r);
      for (const o of n)
        !s[x(901)](o) && (s.add(o), (this[x(2848)].has(o) || this[x(1245)](o, s)) && (t[x(911)](o), e[x(893)](o)));
    }
    return Array[x(1954)](t);
  }
  [a(1245)](x, t) {
    const s = a, e = this[s(1872)](this.currentNodeId, x);
    if (!e || e[s(1492)] <= 1) return !1;
    for (let r = 1; r < e[s(1492)] - 1; r++)
      if (!this.connectedNodes[s(901)](e[r])) return !1;
    return !0;
  }
  [a(1724)]() {
    const x = a;
    this[x(2848)][x(1724)]();
  }
}
var ds, us, fs, ls, hs;
class li {
  constructor(x, t) {
    m0(this, "definition");
    m0(this, "currentNodeId");
    m0(this, hs, /* @__PURE__ */ new Map());
    m0(this, ls, /* @__PURE__ */ new Map());
    m0(this, fs);
    m0(this, us);
    m0(this, "connectionManager");
    m0(this, ds, /* @__PURE__ */ new Map());
    const s = a;
    this.definition = x, this[s(2968)] = t, this[s(729)](), this.broadcastManager = new di(t), this.actionManager = new ui(x, t, (e) => this[s(1945)](e)), this[s(2397)] = new fi(x, t), this[s(1828)]();
  }
  [(hs = a(1452), ls = a(655), fs = a(689), us = a(2135), ds = a(2594), a(729))]() {
    const x = a;
    for (const t of this[x(2596)][x(536)]()) {
      const s = this[x(2596)][x(2552)](t);
      if (s && s[x(2390)]) {
        const e = this[x(2384)](s[x(2390)]), r = Dn(() => e);
        this.nodeStores[x(2296)](t, r);
      }
    }
  }
  [a(2384)](x) {
    const t = a;
    if (!x) return {};
    try {
      return x[t(1205)]({});
    } catch {
      return this.manuallyExtractDefaults(x);
    }
  }
  [a(2117)](x) {
    const t = a;
    if (!x || !x.def) return {};
    if (x[t(1429)][t(2417)] === t(1753)) {
      const s = x[t(1429)][t(1276)];
      return typeof s === t(621) ? s() : s;
    }
    if (x[t(1429)].type === t(2535)) {
      const s = {};
      let e;
      try {
        e = x.def[t(1286)];
      } catch {
        return {};
      }
      if (e) for (const [r, n] of Object[t(643)](e)) {
        const o = this.getDefaultValueFromField(n);
        o !== void 0 && (s[r] = o);
      }
      return s;
    }
    return {};
  }
  getDefaultValueFromField(x) {
    const t = a;
    if (x)
      try {
        return x[t(1205)](void 0);
      } catch {
        return this[t(2117)](x);
      }
  }
  async connect(x, t) {
    const s = a;
    if (!this[s(2596)][s(1604)](this.currentNodeId, x)) throw new Error(s(1982) + this.currentNodeId + s(535) + x);
    if (this.nodeTransports[s(901)](x)) throw new Error("Already connected to node " + x);
    try {
      this[s(2594)][s(2296)](x, t), this[s(2397)][s(2053)](x), this[s(875)](x, t), await this[s(2800)](x), await this.requestInitialStateForNode(x);
    } catch (e) {
      throw this.cleanupConnection(x), e;
    }
  }
  [a(1224)](x) {
    this[a(2792)](x);
  }
  async [a(2800)](x) {
    const t = a;
    await new Promise((s) => setTimeout(s, 100));
    for (const [s, e] of this[t(1452)])
      if (s === this.currentNodeId) try {
        await this.broadcastManager[t(1556)](t(566) + s, { storeName: s, sourceNodeId: this[t(2968)], stateUpdate: e[t(2113)](), isInitialState: !0 });
      } catch {
      }
    try {
      await this[t(689)].broadcast(t(2073), { fromNode: this.currentNodeId, toNode: x });
    } catch {
    }
  }
  async [a(2421)](x) {
    const t = a;
    try {
      const s = this[t(2397)].getAllReachableNodes();
      for (const e of s)
        try {
          const r = t(1639) + e, n = this.getNode(e);
          if (n && n[t(1447)] && n[t(1447)][r]) {
            const o = n[t(1447)][r]({});
            await Promise[t(1934)]([o, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (r) {
          console[t(1017)]("Failed to request initial state for " + e + ":", r);
        }
    } catch (s) {
      console[t(1017)](t(1047) + x + ":", s);
    }
  }
  [a(2792)](x) {
    const t = a, s = this[t(2594)].get(x);
    this.nodeTransports[t(1186)](x), this[t(2397)].markDisconnected(x), this[t(689)][t(2569)](x), s && s.cleanup();
  }
  [a(875)](x, t) {
    const s = a;
    if (!this.nodeStores[s(1919)](this.currentNodeId)) throw new Error("Store not found for " + this[s(2968)]);
    this[s(2135)][s(2211)](t), this[s(689)][s(2556)](x, t);
  }
  [a(1828)]() {
    const x = a;
    for (const [t, s] of this[x(1452)])
      t === this[x(2968)] ? ci({ graphInstance: this, store: s, name: t }) : oi({ graphInstance: this, store: s, name: t });
  }
  [a(2552)](x) {
    const t = a;
    if (!this.nodeProxies[t(901)](x)) {
      const s = new ii(this, x);
      this[t(655)][t(2296)](x, s);
    }
    return this.nodeProxies.get(x);
  }
  [a(1945)](x) {
    const t = a;
    return this[t(2594)][t(1919)](x);
  }
  [a(2445)](x) {
    const t = a, s = this[t(2594)].get(x);
    if (s) return { transport: s, path: [this[t(2968)], x] };
    const e = this[t(876)](this[t(2968)], x);
    if (e && e[t(1492)] > 1) {
      const r = e[1], n = this[t(2594)][t(1919)](r);
      if (n) return { transport: n, path: e };
    }
  }
  [a(2981)](x) {
    return this[a(1452)].get(x);
  }
  get [a(2390)]() {
    const x = a, t = this.nodeStores[x(1919)](this[x(2968)]);
    if (!t) throw new Error(x(1912) + this[x(2968)]);
    return t;
  }
  get [a(1447)]() {
    const x = a, t = this[x(2596)][x(2552)](this[x(2968)]);
    if (!t) throw new Error("Node definition not found for current node " + this.currentNodeId);
    return new Proxy({}, { get: (e, r) => {
      const n = x;
      if (typeof r != "string") return;
      const o = t[n(1447)][r];
      if (!o) throw new Error(n(1720) + r + n(555) + this[n(2968)]);
      return (c, d) => {
        const u = n, f = this[u(2135)].getHandler(r);
        if (!f) throw new Error(u(1779) + r + u(2285) + this[u(2968)]);
        const l = { nodeId: this[u(2968)] };
        if (o.stream === !0) {
          const g = f(c, l, d);
          return g && typeof g === u(2535) && Symbol[u(814)] in g ? async function* () {
            for await (const h of g)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await g;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          const g = u, h = f(c, l, d);
          if (h && typeof h == "object" && Symbol.asyncIterator in h) {
            const m = h[Symbol[g(814)]](), v = await m[g(1516)]();
            return v[g(1454)] === void 0 ? {} : v[g(1454)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [a(1558)]() {
    return this.definition;
  }
  [a(1594)]() {
    return this[a(2968)];
  }
  [a(2386)](x) {
    return this[a(2445)](x);
  }
  [a(2657)](x, t) {
    const s = a;
    this[s(2135)][s(2657)](x, t);
  }
  [a(1168)]() {
    const x = a, t = Array[x(1954)](this[x(2594)][x(2693)]());
    for (const s of t)
      this.cleanupConnection(s);
    this[x(689)][x(1724)](), this[x(2135)][x(1724)](), this[x(2397)][x(1724)]();
  }
  [a(876)](x, t) {
    const s = a;
    return this.connectionManager[s(1872)](x, t);
  }
  [a(1872)](x, t) {
    return this[a(876)](x, t);
  }
  async broadcast(x, t) {
    const s = a, e = { ...t, __origin: this[s(2968)] };
    return this[s(689)][s(1556)](x, e);
  }
  [a(1810)](x, t) {
    const s = a;
    this.broadcastManager[s(707)](x, t);
  }
}
function hi(i) {
  const x = new An(i);
  return { joinAs(t) {
    const s = K;
    if (!x[s(2552)](t)) throw new Error("Node " + String(t) + s(649));
    return new li(x, t);
  }, getDefinition() {
    return i;
  }, getNodeIds() {
    return x[K(536)]();
  }, getNeighbors(t) {
    return x[K(1533)](t);
  }, hasEdge(t, s) {
    return x[K(1604)](t, s);
  }, hasPath(t, s) {
    return x[K(550)](t, s);
  }, findPath(t, s) {
    return x.findPath(t, s);
  } };
}
const qa = { INTERCEPTOR_ERROR: a(1029) };
var ps, ms, gs, bs;
class Ta extends (bs = Error, gs = a(2417), ms = a(576), ps = a(2924), bs) {
  constructor(t, s, e, r) {
    const n = a;
    super(e);
    m0(this, gs);
    m0(this, ms);
    m0(this, ps);
    this[n(1719)] = "MiddlewareError", this[n(2417)] = t, this.method = s, this.originalError = r;
  }
}
var ys, vs, ws, Ss, ks, Ps, Es, Is, Rs, Cs, Fs;
class pi {
  constructor(x, t = {}) {
    m0(this, Fs);
    m0(this, Cs, null);
    m0(this, Rs);
    m0(this, Is, /* @__PURE__ */ new Map());
    m0(this, Es, /* @__PURE__ */ new Map());
    m0(this, Ps, /* @__PURE__ */ new Map());
    m0(this, ks, /* @__PURE__ */ new Map());
    m0(this, Ss, []);
    m0(this, ws, []);
    m0(this, vs, []);
    m0(this, ys, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    const s = a;
    this[s(2818)] = x, this[s(2308)] = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async connect(x) {
    const t = a;
    this[t(945)] = x, x[t(1883)] = (s) => {
      this[t(2349)](s);
    }, x[t(1583)] = () => {
      this[t(1358)].forEach((e) => e());
    }, x[t(2665)] = (s) => {
      const e = t;
      this[e(2835)][e(1615)]((r) => r(s));
    }, await this[t(2818)][t(2562)](this);
  }
  async [(Fs = a(2818), Cs = a(945), Rs = a(2308), Is = a(2708), Es = a(2688), Ps = a(603), ks = a(853), Ss = a(1324), ws = a(1358), vs = a(2835), ys = a(1718), a(2349))](x) {
    const t = a;
    this[t(1017)]("debug", t(2367), x);
    try {
      if (this[t(720)](x) && await this.handleIncomingRequest(x) || this[t(2125)](x) && await this.handleIncomingNotification(x))
        return;
      this[t(1324)].forEach((s) => s(x));
    } catch (s) {
      this[t(1718)][t(862)]++, this[t(1017)](t(1978), "Error handling incoming message:", s), this[t(1324)][t(1615)]((e) => e(x));
    }
  }
  async [a(1765)](x) {
    const t = a, s = this.requestHandlers[t(1919)](x[t(576)]);
    if (!s) return !1;
    try {
      this[t(1718)][t(1436)]++;
      const e = await s(x, {});
      return this.realTransport && "id" in x && await this.realTransport[t(1140)]({ jsonrpc: "2.0", id: x.id, result: e }), !0;
    } catch (e) {
      return this.stats[t(862)]++, this[t(945)] && "id" in x && await this[t(945)][t(1140)]({ jsonrpc: "2.0", id: x.id, error: { code: -32603, message: t(1118) + JSON.stringify(x.params) + " " + e[t(1261)] } }), !0;
    }
  }
  async handleIncomingNotification(x) {
    const t = a, s = this[t(2688)][t(1919)](x.method);
    if (!s) return !1;
    try {
      return this[t(1718)][t(2851)]++, await s(x), !0;
    } catch (e) {
      return this[t(1718)][t(862)]++, this[t(1017)](t(1978), "Notification handler failed for " + x[t(576)] + ":", e), !0;
    }
  }
  async [a(1140)](x) {
    const t = a;
    this[t(1017)](t(1563), t(871), x);
    try {
      if (this.isRequest(x)) {
        const s = await this[t(1802)](x);
        if (s[t(1058)]) {
          if (s[t(979)] === null) return;
          s[t(979)] && (x = { ...s[t(979)], jsonrpc: "2.0" }, this[t(1718)].requestsIntercepted++);
        } else if (this.options[t(1694)]) this.log("warn", t(1478) + x.method + ":", s[t(1978)]);
        else throw s[t(1978)];
      }
      if (this[t(2125)](x)) {
        const s = await this[t(1456)](x);
        if (s[t(1058)]) {
          if (s[t(979)] === null) return;
          s[t(979)] && (x = { ...s.result, jsonrpc: t(1606) }, this[t(1718)][t(2060)]++);
        } else if (this[t(2308)].continueOnInterceptorError) this.log("warn", "Notification interceptor failed for " + x[t(576)] + ":", s[t(1978)]);
        else throw s[t(1978)];
      }
      this[t(945)] && await this[t(945)].send(x);
    } catch (s) {
      throw this[t(1718)][t(862)]++, s;
    }
  }
  async [a(1650)]() {
    const x = a;
    this[x(945)] && await this[x(945)].start();
  }
  async close() {
    this[a(945)] && await this.realTransport.close();
  }
  set [a(1883)](x) {
    const t = a;
    this[t(1324)] = [x];
  }
  set onclose(x) {
    const t = a;
    this[t(1358)] = [x];
  }
  set [a(2665)](x) {
    this.errorHandlers = [x];
  }
  async executeOutgoingRequestInterceptor(x) {
    const t = a, s = this[t(603)][t(1919)](x[t(576)]);
    if (!s) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1259)](s(x), this[t(2308)].interceptorTimeout) };
    } catch (e) {
      return this[t(1718)][t(862)]++, { success: !1, error: new Ta(qa[t(888)], x[t(576)], t(2898) + e[t(1261)], e) };
    }
  }
  async executeOutgoingNotificationInterceptor(x) {
    const t = a, s = this[t(853)][t(1919)](x[t(576)]);
    if (!s) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1259)](s(x), this[t(2308)][t(1772)]) };
    } catch (e) {
      return this.stats[t(862)]++, { success: !1, error: new Ta(qa[t(888)], x[t(576)], t(1557) + e.message, e) };
    }
  }
  async [a(1326)](x, t) {
    const s = a;
    return await this[s(2818)][s(1326)](x, t, { timeout: 36e5 });
  }
  async [a(2323)](x) {
    const t = a;
    return await this[t(2818)][t(2323)](x);
  }
  [a(2608)](x, t) {
    const s = a, e = x[s(1286)][s(576)].value;
    this.requestHandlers[s(2296)](e, t);
  }
  setNotificationHandler(x, t) {
    const s = a, e = x[s(1286)][s(576)].value;
    this[s(2688)][s(2296)](e, t);
  }
  setOutgoingRequestInterceptor(x, t) {
    const s = a, e = x.shape.method.value;
    this.outgoingRequestInterceptors[s(2296)](e, t);
  }
  [a(2743)](x, t) {
    const s = a, e = x[s(1286)][s(576)][s(1454)];
    this[s(853)].set(e, t);
  }
  unsetRequestHandler(x) {
    this[a(2708)].delete(x);
  }
  unsetNotificationHandler(x) {
    const t = a;
    this.notificationHandlers[t(1186)](x);
  }
  [a(1871)](x) {
    const t = a;
    this[t(603)][t(1186)](x);
  }
  unsetOutgoingNotificationInterceptor(x) {
    const t = a;
    this[t(853)][t(1186)](x);
  }
  [a(599)](x) {
    const t = a;
    return this[t(2708)][t(901)](x);
  }
  [a(2738)](x) {
    const t = a;
    return this[t(2688)][t(901)](x);
  }
  [a(2269)](x) {
    const t = a;
    return this.outgoingRequestInterceptors[t(901)](x);
  }
  [a(1534)](x) {
    return this[a(853)].has(x);
  }
  [a(2252)]() {
    return { ...this[a(1718)] };
  }
  [a(2864)]() {
    const x = a;
    this[x(1718)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [a(1321)]() {
    return this.protocol;
  }
  [a(759)]() {
    const x = a;
    this[x(2708)][x(1724)](), this[x(2688)][x(1724)](), this[x(603)][x(1724)](), this[x(853)][x(1724)]();
  }
  [a(720)](x) {
    const t = a;
    return x[t(503)] === t(1606) && "method" in x && "id" in x;
  }
  [a(2125)](x) {
    const t = a;
    return x[t(503)] === t(1606) && t(576) in x && !("id" in x);
  }
  async [a(1259)](x, t) {
    const s = a, e = new Promise((r, n) => {
      const o = K;
      setTimeout(() => n(new Error(o(751))), t);
    });
    return await Promise[s(1934)]([x, e]);
  }
  [a(1017)](x, t, ...s) {
    const e = a;
    if (!this[e(2308)][e(1563)] && x === e(1563)) return;
    const r = e(921);
    switch (x) {
      case e(1563):
        console[e(1563)](r, t, ...s);
        break;
      case "info":
        console.info(r, t, ...s);
        break;
      case e(2175):
        console[e(2175)](r, t, ...s);
        break;
      case e(1978):
        console[e(1978)](r, t, ...s);
        break;
    }
  }
}
k({ method: x0(a(1771)), params: k({ requestId: y(), data: T0(), error: y()[a(2093)](), finished: e0() }) }), k({ method: x0("sdppp/streamRequest"), params: k({ action: y(), data: T0() }) }), k({ method: x0(a(2477)), params: k({ requestId: y() }) });
const mi = k({ method: x0("sdppp/streamResponse"), params: k({ requestId: y(), data: T0(), error: y()[a(2093)](), finished: e0() }) }), gi = k({ method: x0(a(2162)), params: k({ action: y(), data: T0() }) }), bi = k({ method: x0(a(2477)), params: k({ requestId: y() }) });
var Ns, qs;
class yi {
  constructor() {
    m0(this, qs, /* @__PURE__ */ new Map());
    m0(this, Ns, /* @__PURE__ */ new Map());
  }
  [(qs = a(2169), Ns = a(1026), a(893))](x) {
    const t = a, { requestId: s } = x[t(833)], e = this[t(2169)][t(1919)](s) || [], r = this[t(1026)][t(1919)](s) || [];
    r.length > 0 ? r[t(2388)]()(x[t(833)]) : (e[t(893)](x[t(833)]), this[t(2169)][t(2296)](s, e));
  }
  async pop(x) {
    const t = a, s = this[t(2169)].get(x) || [];
    return s[t(1492)] > 0 ? s[t(2388)]() : new Promise((e) => {
      const r = t, n = this[r(1026)][r(1919)](x) || [];
      n[r(893)](e), this[r(1026)][r(2296)](x, n);
    });
  }
  [a(759)](x) {
    const t = a;
    this[t(2169)][t(1186)](x), this.waiters[t(1186)](x);
  }
}
var Ts, Os, As;
class vi extends pi {
  constructor(t, s = {}) {
    super(t, s);
    m0(this, As, /* @__PURE__ */ new Map());
    m0(this, "requestIdSeq", 1);
    m0(this, Os, /* @__PURE__ */ new Map());
    m0(this, Ts, new yi());
    this.setupStreamProtocolHandlers();
  }
  [(As = a(2115), Os = a(2118), Ts = a(2684), a(1043))]() {
    const t = a;
    this.setupStreamResponseHandler(), this[t(870)](), this[t(2670)]();
  }
  [a(1886)]() {
    const t = a;
    this[t(2217)](mi, async (s) => {
      const e = t;
      this[e(2684)][e(893)](s);
    });
  }
  [a(870)]() {
    const t = a;
    this[t(2608)](bi, async (s, e) => {
      const r = t, { requestId: n } = s[r(833)], o = this.runningRequests[r(1919)](n);
      return o && (o[r(661)](), this[r(2118)][r(1186)](n)), { success: !0 };
    });
  }
  [a(2670)]() {
    const t = a;
    this[t(2608)](gi, async (s, e) => {
      const r = t, n = r(860) + this[r(1918)]++, o = this.streamRequestorHandlers.get(s.params.action);
      if (!o) throw new Error(r(2935) + s[r(833)][r(886)]);
      const c = new AbortController();
      return this[r(2118)][r(2296)](n, c), this[r(2634)](n, o, s.params, e, c), { requestId: n };
    });
  }
  async [a(2634)](t, s, e, r, n) {
    const o = a;
    try {
      const c = s(e, r, n.signal);
      for await (const d of c) {
        if (n[o(2071)][o(2699)]) break;
        await this.notification({ method: "sdppp/streamResponse", params: { requestId: t, data: d, error: null, finished: !1 } });
      }
      !n[o(2071)][o(2699)] && await this[o(2323)]({ method: o(1771), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n.signal[o(2699)] && await this[o(2323)]({ method: "sdppp/streamResponse", params: { requestId: t, data: null, error: c.message, finished: !0 } });
    } finally {
      this.runningRequests[o(1186)](t);
    }
  }
  [a(2020)](t, s) {
    const e = a;
    this.streamRequestorHandlers[e(2296)](t[e(1286)].action[e(1454)], s);
  }
  async [a(685)](t, s, e) {
    const r = a;
    this[r(2202)](e);
    const n = await this[r(2274)](t), o = this[r(1335)](n), c = this[r(1387)]();
    return this[r(1893)](o, c, n, e);
  }
  [a(2202)](t) {
    const s = a;
    if (t && t[s(2699)]) throw new Error(s(2671));
  }
  async [a(2274)](t) {
    const s = a;
    return (await this[s(1326)]({ method: s(2162), params: { action: t[s(886)], data: t[s(1369)] } }, k({ requestId: y() })))[s(704)];
  }
  [a(1335)](t) {
    return this[a(2684)];
  }
  [a(1387)]() {
    return { finished: !1, error: null };
  }
  [a(1893)](t, s, e, r) {
    const n = a, o = this;
    return { async *[Symbol[n(814)]]() {
      const c = n;
      try {
        for (; !s[c(1623)] && !s[c(1978)]; ) {
          if (r && r[c(2699)])
            throw await o[c(1326)]({ method: c(2477), params: { requestId: e } }, k({ success: e0() })), new Error("Aborted");
          const d = await t[c(867)](e);
          if (d.error)
            throw s.error = d.error, new Error(d.error);
          if (d[c(1623)]) {
            s.finished = !0;
            break;
          }
          d[c(1369)] !== null && (yield d[c(1369)]);
        }
      } finally {
        t.cleanup(e);
      }
    } };
  }
  [a(1256)]() {
    const t = a;
    return this[t(2118)][t(2191)];
  }
  async [a(1874)](t) {
    const s = a, e = this[s(2118)][s(1919)](t);
    return e ? (e[s(661)](), this.runningRequests[s(1186)](t), !0) : !1;
  }
  [a(2704)]() {
    const t = a;
    for (const [s, e] of this[t(2118)])
      e[t(661)]();
    this[t(2118)].clear();
  }
  [a(759)]() {
    const t = a;
    super[t(759)](), this[t(2704)](), this[t(2115)][t(1724)]();
  }
}
k({ id: y(), method: y(), params: T0()[a(793)](), traceId: y()[a(793)]() }), k({ id: y(), result: T0().optional(), error: k({ code: J(), message: y(), data: T0()[a(793)]() })[a(793)]() }), k({ method: y(), params: T0()[a(793)]() }), k({ method: x0(a(2162)), params: k({ action: y(), data: T0() }) }), k({ method: x0("sdppp/streamResponse"), params: k({ requestId: y(), data: T0().optional(), error: y()[a(2093)]()[a(793)](), finished: e0().default(!1) }) }), k({ method: x0(a(2477)), params: k({ requestId: y() }) }), k({ method: x0(a(2647)), params: k({ messageType: y(), message: T0() }) });
function Us(i) {
  const x = a;
  return i && i[x(2734)] && Object.prototype[x(2472)][x(983)](i, x(1753)) ? i[x(1753)] : i;
}
const Ne = k({ leftDistance: J(), topDistance: J(), rightDistance: J(), bottomDistance: J(), width: J(), height: J() }), Ce = { name: y(), uiWeight: J() }, wi = k({ ...Ce, outputType: x0("images"), options: k({ required: e0(), maxCount: J().optional(), maskMode: e0()[a(793)]() }) }), Si = k({ ...Ce, outputType: x0(a(1505)), options: k({ required: e0() }) }), ki = k({ ...Ce, outputType: x0(a(1346)), options: k({ required: e0() }) }), Pi = k({ ...Ce, outputType: x0("boolean"), options: k({ required: e0() }) }), Ei = k({ ...Ce, outputType: x0(a(1120)), options: k({ required: e0(), min: J()[a(793)](), max: J()[a(793)](), step: J()[a(793)](), random: e0()[a(793)](), slider: e0()[a(793)]() }) }), Ii = k({ ...Ce, outputType: x0(a(2056)), options: k({ required: e0(), values: w0(y()), labels: w0(y())[a(793)]() }) }), Ri = k({ ...Ce, outputType: x0("segment"), options: k({ required: e0(), values: w0(y()) }) }), Ci = k({ ...Ce, outputType: x0(a(1766)), options: k({ required: e0() }) }), Fi = $s("outputType", [wi, Si, ki, Pi, Ei, Ii, Ri, Ci]), Ni = k({ id: y(), title: y(), widgets: w0(Fi), uiWeightSum: J() }), qi = k({ widgetableID: y(), widgetablePath: y(), nodes: V0(y(), Ni), nodeIndexes: w0(y()), note: y()[a(793)](), options: V0(y(), T0()) }), Ti = k({ widgetableStructure: qi[a(1753)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: V0(y(), w0(T0()))[a(1753)]({}), widgetableErrors: V0(y(), y())[a(1753)]({}), queueSize: J()[a(1753)](0), lastError: y()[a(1753)](""), progress: J().default(0), executingNodeTitle: y()[a(1753)](""), executingNodeID: y()[a(1753)](""), graphProgress: J()[a(1753)](0), comfyUserToken: y()[a(1753)](""), comfyOrgLoggedIn: e0()[a(1753)](!1), comfyOrgAPIKey: y()[a(1753)](""), comfyWSState: I0([a(1543), a(2633)]).default(a(1543)), lastRunTime: J()[a(1753)](0) }), Oi = k({ bannerData: T0()[a(793)](), refreshable: e0()[a(1753)](!1), backwardable: e0()[a(1753)](!1), loginable: e0().default(!1), runnable: e0()[a(1753)](!1), workBoundaries: V0(J(), Ne)[a(1753)]({}), workBoundaryMaxSizes: V0(J(), J()).default({}) }), Ai = k({ uname: y()[a(1753)](""), activeDocumentID: J()[a(1753)](0), layers: w0(k({ id: J(), name: y(), identify: y() }))[a(1753)]([]), actions: w0(y()).default([]), theme: y()[a(1753)]("kPanelBrightnessMediumGray"), sdpppX: V0(y(), T0()).default({}), locale: I0(["zh-CN", "en-US"])[a(1753)](a(1577)), comfyWebviewConnectStatus: I0([a(2621), a(1543), a(851)])[a(1753)]("disconnected"), comfyWebviewLoadError: y()[a(1753)](""), comfyWebviewLoading: e0()[a(1753)](!1), comfyWebviewVersion: y()[a(1753)](""), comfyHTTPCode: J()[a(1753)](200), comfyURL: y()[a(1753)](""), sdkWebviewFocusing: e0().default(!1), sdkWebviewConnectStatus: I0([a(2621), a(1543), a(851)])[a(1753)](a(851)), isLogin: e0()[a(1753)](!1), isGuest: e0()[a(1753)](!1), requestingLogin: e0()[a(1753)](!1), loginMessage: y().default(""), token: y()[a(1753)](""), userInfo: V0(y(), T0()).default({}), taskLastRun: J()[a(1753)](0), canvasStateID: J()[a(793)](), selectionStateID: y()[a(793)](), selectionBoundary: Ne[a(2093)]()[a(793)](), canvasThumbnail: y()[a(1753)](""), curlayerThumbnail: y().default("") }), Di = { setNodeTitle: { requestSchema: k({ node_id: y(), title: y() }), responseSchema: k({ success: e0() }) }, reboot: { requestSchema: k({}), responseSchema: k({ success: e0(), error: y()[a(793)]() }) }, setComfyOrgAPIKey: { requestSchema: k({ api_key: y() }), responseSchema: k({ success: e0() }) }, logout: { requestSchema: k({}), responseSchema: k({ success: e0() }) }, uploadComfyImageFromUXP: { requestSchema: k({ fileName: y(), overwrite: e0()[a(793)](), mimeType: y().optional(), dataBase64: y() }), responseSchema: k({ name: y() }) }, sdpppHandshake: { requestSchema: k({ hostVersion: y()[a(793)]() }), responseSchema: k({ comfyVersion: y(), hostVersion: y()[a(793)]() }) } }, ji = k({ workflows: w0(y()), error: y()[a(793)]() }), Mi = k({ success: e0(), nodeErrors: V0(y())[a(793)](), prompt_ids: w0(y())[a(793)](), images: w0(k({ url: y(), thumbnail: y() }))[a(793)]() }), Li = { setWidgetValue: { requestSchema: k({ values: w0(k({ nodeID: y(), widgetIndex: J(), value: V0(y(), T0()).or(y()).or(J()).or(e0()).or(w0(T0())) })) }), responseSchema: k({ success: e0() }) }, openWorkflow: { requestSchema: k({ workflow_path: y(), reset: e0()[a(1753)](!1) }), responseSchema: k({ success: e0() }) }, openWorkflowJSON: { requestSchema: k({ workflow_content: V0(T0()), workflow_path: y() }), responseSchema: k({ success: e0() }) }, listWorkflows: { requestSchema: k({ listMode: y()[a(793)](), sdpppID: y().optional(), sdpppToken: y().optional() }), responseSchema: ji }, saveWorkflow: { requestSchema: k({ workflow_path: y(), from_sid: y().optional() }), responseSchema: k({ success: e0() }) }, run: { requestSchema: k({ size: J() }), responseSchema: Mi, stream: !0 }, stopAll: { requestSchema: k({}), responseSchema: k({ success: e0() }) } }, $i = { backward: { requestSchema: $x(), responseSchema: k({ success: e0() }) }, refresh: { requestSchema: $x(), responseSchema: k({ success: e0() }) }, run: { requestSchema: $x(), responseSchema: k({ success: e0() }) } }, zi = k({ passwordPayload: k({ username: y(), password: y() }).or(k({ email: y(), password: y() })).or(k({ phone: y(), password: y() })).or(k({ identifier: y(), password: y() })) }).or(k({ passcodePayload: k({ phone: y(), code: y() }).or(k({ email: y(), code: y() })) })), Ui = k({ passwordPayload: k({ username: y(), password: y() }).or(k({ email: y(), password: y() })).or(k({ phone: y(), password: y() })).or(k({ identifier: y(), password: y() })) }).or(k({ passcodePayload: k({ phone: y(), code: y() }).or(k({ email: y(), code: y() })) })), Hi = { register: { requestSchema: zi, responseSchema: k({}) }, login: { requestSchema: Ui, responseSchema: k({}) }, sendPassCode: { requestSchema: k({ phone: y()[a(793)](), email: y()[a(793)]() }), responseSchema: k({}) }, logout: { requestSchema: k({}), responseSchema: k({}) }, guestLogin: { requestSchema: k({}), responseSchema: k({}) } };
k({ resource: y()[a(793)](), thumbnail: y().optional(), width: J()[a(793)](), height: J()[a(793)](), mimeType: y().optional(), source: y()[a(793)](), error: y()[a(793)]() }), k({ boundary: I0([a(2012), a(573), a(2470)]), content: I0([a(2012), a(573), "selection"]).or(y()), imageSize: J(), imageQuality: J(), cropBySelection: I0(["no", a(877), a(2498)]), layer_identify: y()[a(2093)]().optional() }), k({ content: I0(["canvas", "curlayer", "selection"]), reverse: e0(), imageSize: J(), layer_identify: y().nullable()[a(793)]() }), k({ selection: I0([a(892), "newlayer_canvas", a(1340), "newlayer_selection", a(2602), a(2623), "curlayer_selection", a(892)]), url: y(), source: y(), cropBySelection: I0(["no", "positive", a(2498)]) });
const Vi = { downloadImage: { requestSchema: k({ url: y() }), responseSchema: k({ thumbnail: y()[a(793)](), resource: y()[a(793)](), width: J()[a(793)](), height: J().optional(), error: y().optional() }) }, getThumbnail: { requestSchema: k({ resource: y(), maxSize: J()[a(793)]() }), responseSchema: k({ thumbnail: y()[a(793)](), width: J().optional(), height: J()[a(793)](), error: y()[a(793)]() }) }, deleteDownloadedImage: { requestSchema: k({ resources: w0(y()) }), responseSchema: k({ error: y()[a(793)]() }) }, requestAndDoSaveImage: { requestSchema: k({ resources: w0(y()) }), responseSchema: k({ error: y().optional() }) } }, Zi = { manageGuides: { requestSchema: k({ action: I0([a(2587), a(1724)]), rect: Ne[a(793)]() }), responseSchema: k({ success: e0() }) }, getBoundary: { requestSchema: k({ type: I0([a(573), a(2470)]) }), responseSchema: Ne }, getImage: { requestSchema: k({ boundary: G0([I0([a(2012), "curlayer", "selection"]), Ne]), content: G0([I0([a(2012), "curlayer"]), y()]), imageSize: J(), imageQuality: J(), cropBySelection: I0(["no", "positive", a(2498)]), SkipNonNormalLayer: e0(), layer_identify: y().nullable()[a(793)]() }), responseSchema: k({ resource: y()[a(793)](), thumbnail: y().optional(), width: J().optional(), height: J()[a(793)](), mimeType: y()[a(793)](), source: y().optional(), error: y()[a(793)]() }) }, getMask: { requestSchema: k({ boundary: G0([I0([a(2012), a(573), a(2470)]), Ne]), content: I0([a(2012), a(573), a(2470)]), reverse: e0(), imageSize: J(), layer_identify: y().nullable()[a(793)]() }), responseSchema: k({ resource: y().optional(), thumbnail: y()[a(793)](), width: J().optional(), height: J()[a(793)](), mimeType: y().optional(), source: y()[a(793)](), error: y()[a(793)]() }) }, getCurrentLayerIdentify: { requestSchema: k({}), responseSchema: k({ layer_identify: y()[a(2093)]() }) }, importImage: { requestSchema: k({ resource: y(), boundary: G0([I0(["canvas", a(573), "selection"]), Ne])[a(793)](), type: I0(["canvas", a(573), a(783), "smartobject"]), sourceWidth: J().optional(), sourceHeight: J()[a(793)]() }), responseSchema: k({ success: e0(), layers: w0(k({ identify: y() })).optional(), message: y()[a(793)](), error: y()[a(793)]() }) }, applyMaskToImage: { requestSchema: k({ imageResource: y(), maskResource: y(), invertMask: e0()[a(793)]() }), responseSchema: k({ resource: y(), thumbnail: y().optional(), width: J(), height: J(), mimeType: y() }) }, showBoundarySelectionDialog: { requestSchema: k({ additionalData: V0(T0()).optional() }), responseSchema: k({ boundary: I0([a(2012), a(573), a(2470)])[a(793)](), cancelled: e0()[a(793)]() }) }, selectImageSource: { requestSchema: k({ additionalData: V0(T0())[a(793)]() }), responseSchema: k({ action: I0([a(1218), a(1832)])[a(793)](), params: T0()[a(793)](), cancelled: e0()[a(793)]() }) }, selectContentSource: { requestSchema: k({ additionalData: V0(T0()).optional() })[a(793)](), responseSchema: k({ resource: y()[a(793)](), fileName: y()[a(793)](), mimeType: y()[a(793)](), size: J()[a(793)](), layerIdentify: y()[a(793)](), cancelled: e0()[a(793)]() }) } }, zx = k({ taskId: y(), taskName: y(), status: I0([a(2786), a(2007), a(917), a(2111)]), currentStep: J()[a(793)](), totalSteps: J()[a(793)](), stepDescription: y()[a(793)](), progressPercentage: J()[a(1012)](0)[a(731)](100)[a(793)](), startTime: y(), endTime: y()[a(793)](), error: y()[a(793)](), errorCode: y()[a(793)](), result: T0()[a(793)](), metadata: V0(T0())[a(793)]() }), Ux = k({ success: e0(), error: y()[a(793)]() }), Bi = { taskAdd: { requestSchema: zx, responseSchema: Ux }, taskUpdate: { requestSchema: zx[a(2620)]().required({ taskId: !0 }), responseSchema: Ux }, taskRemove: { requestSchema: zx[a(838)]({ taskId: !0 }), responseSchema: Ux } }, Wi = { log: { requestSchema: k({ level: I0([a(1017), a(2297), "warn", a(1978)]), messages: w0(y()) }), responseSchema: k({}) }, openExternalLink: { requestSchema: k({ url: y() }), responseSchema: k({ error: y()[a(793)]() }) }, getStorage: { requestSchema: k({ key: y() }), responseSchema: k({ value: y(), error: y()[a(793)]() }) }, setStorage: { requestSchema: k({ key: y(), value: y() }), responseSchema: k({ error: y().optional() }) }, removeStorage: { requestSchema: k({ key: y() }), responseSchema: k({ error: y()[a(793)]() }) }, keyboardAction: { requestSchema: k({ keycode: y() }), responseSchema: k({}) }, setComfyWebviewURL: { requestSchema: k({ url: y() }), responseSchema: k({}) }, getImageBase64: { requestSchema: k({ token: y() }), responseSchema: k({ base64: y()[a(793)](), mimeType: y()[a(793)](), error: y().optional() }) }, uploadComfyImage: { requestSchema: k({ uploadInput: k({ type: G0([x0("buffer"), x0(a(2744)), x0(a(1252))]), resource: T0(), fileName: y(), mimeType: y().optional(), resourceId: y()[a(793)]() }), overwrite: e0().optional()[a(1753)](!0) }), responseSchema: k({ name: y() }) }, pickLocalFile: { requestSchema: k({ acceptExtensions: w0(y()).optional(), kind: I0([a(752), a(1223)]).optional() })[a(793)](), responseSchema: k({ cancelled: e0()[a(793)](), resource: y()[a(793)](), fileName: y()[a(793)](), mimeType: y()[a(793)](), size: J()[a(793)](), error: y()[a(793)]() }) }, proxiedFetch: { requestSchema: k({ url: y(), method: y().optional(), headers: V0(y())[a(793)](), body: T0()[a(793)](), bodyType: I0([a(1550), a(2727), "text"])[a(793)]() }), responseSchema: k({ success: e0(), status: J().optional(), statusText: y()[a(793)](), headers: V0(y())[a(793)](), data: T0()[a(793)](), error: y()[a(793)]() }) }, openaiImageEdit: { requestSchema: k({ apiKey: y(), baseURL: y(), imageToken: y(), prompt: y(), model: y() }), responseSchema: k({ success: e0(), imageUrl: y().optional(), apiTime: J()[a(793)](), error: y()[a(793)]() }) }, geminiImageGenerate: { requestSchema: k({ apiKey: y(), baseURL: y().optional(), imageInputs: w0(y())[a(793)](), imageInput: y()[a(793)](), imageInputType: I0([a(2744), a(1490)]), prompt: y() }), responseSchema: k({ success: e0(), imageUrl: y().optional(), apiTime: J()[a(793)](), error: y().optional() }) } }, Ki = { "fileResource.createFromExternal": { requestSchema: k({ url: y() }), responseSchema: k({ resource: y()[a(793)](), thumbnail: y()[a(793)](), width: J()[a(793)](), height: J().optional(), mime: y()[a(793)](), mimeType: y().optional(), error: y().optional() }) }, "fileResource.createFromLocal": { requestSchema: k({ types: w0(k({ description: y()[a(793)](), extensions: w0(y())[a(793)]() })).optional() }), responseSchema: k({ resource: y()[a(793)](), thumbnail: y()[a(793)](), width: J()[a(793)](), height: J()[a(793)](), mime: y()[a(793)](), error: y()[a(793)]() }) }, "fileResource.createFromCBM": { requestSchema: k({ contentUri: y()[a(793)](), boundaryUri: y()[a(793)](), maskUri: y()[a(793)](), options: V0(Be())[a(793)]() }), responseSchema: k({ resource: y()[a(793)](), thumbnail: y()[a(793)](), width: J()[a(793)](), height: J().optional(), mime: y()[a(793)](), error: y()[a(793)]() }) }, "fileResource.delete": { requestSchema: k({ resources: w0(y()) }), responseSchema: k({ error: y().optional() }) }, "fileResource.thumbnail": { requestSchema: k({ resource: y(), maxSize: J()[a(793)]() }), responseSchema: k({ thumbnail: y()[a(793)](), width: J()[a(793)](), height: J()[a(793)](), error: y()[a(793)]() }) }, "fileResource.saveAs": { requestSchema: k({ resources: w0(y()) }), responseSchema: k({ error: y()[a(793)]() }) }, "boundary.normalize": { requestSchema: k({ boundary: y() }), responseSchema: k({ boundary: y()[a(793)](), error: y()[a(793)]() }) }, "layer.resolve": { requestSchema: k({ uri: y(), type: I0([a(2171), a(1838)]) }), responseSchema: k({ uri: y()[a(793)](), error: y().optional() }) } }, Gi = hi({ nodes: { sdk: { store: Oi, actions: { ...$i } }, uxp: { store: Ai, actions: { ...Vi, ...Ki, ...Wi, ...Hi, ...Bi, ...Zi } }, comfy: { store: Ti, actions: { ...Li, ...Di } } }, edges: [[a(849), a(2810)], [a(2957), "uxp"]] }), R0 = Gi.joinAs("comfy");
globalThis[a(1033)] = R0;
var fx = { exports: {} }, Hx, Oa;
function Ji() {
  if (Oa) return Hx;
  Oa = 1;
  var i = 1e3, x = i * 60, t = x * 60, s = t * 24, e = s * 7, r = s * 365.25;
  Hx = function(u, f) {
    const l = K;
    f = f || {};
    var g = typeof u;
    if (g === l(1346) && u[l(1492)] > 0) return n(u);
    if (g === l(1120) && isFinite(u)) return f.long ? c(u) : o(u);
    throw new Error(l(2868) + JSON[l(2149)](u));
  };
  function n(u) {
    const f = K;
    if (u = String(u), !(u.length > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[f(2676)](u);
      if (l) {
        var g = parseFloat(l[1]), h = (l[2] || "ms").toLowerCase();
        switch (h) {
          case f(1750):
          case f(2237):
          case f(1990):
          case "yr":
          case "y":
            return g * r;
          case f(1916):
          case f(1129):
          case "w":
            return g * e;
          case f(1057):
          case f(2062):
          case "d":
            return g * s;
          case f(1440):
          case f(1475):
          case "hrs":
          case "hr":
          case "h":
            return g * t;
          case f(854):
          case f(1792):
          case "mins":
          case f(1012):
          case "m":
            return g * x;
          case "seconds":
          case f(1231):
          case "secs":
          case f(1108):
          case "s":
            return g * i;
          case "milliseconds":
          case f(556):
          case f(2626):
          case f(1150):
          case "ms":
            return g;
          default:
            return;
        }
      }
    }
  }
  function o(u) {
    const f = K;
    var l = Math[f(2820)](u);
    return l >= s ? Math.round(u / s) + "d" : l >= t ? Math[f(1020)](u / t) + "h" : l >= x ? Math[f(1020)](u / x) + "m" : l >= i ? Math.round(u / i) + "s" : u + "ms";
  }
  function c(u) {
    const f = K;
    var l = Math[f(2820)](u);
    return l >= s ? d(u, l, s, f(2062)) : l >= t ? d(u, l, t, f(1475)) : l >= x ? d(u, l, x, "minute") : l >= i ? d(u, l, i, f(1231)) : u + f(1572);
  }
  function d(u, f, l, g) {
    const h = K;
    var m = f >= l * 1.5;
    return Math[h(1020)](u / l) + " " + g + (m ? "s" : "");
  }
  return Hx;
}
var Vx, Aa;
function Qi() {
  if (Aa) return Vx;
  Aa = 1;
  function i(x) {
    const t = K;
    e.debug = e, e.default = e, e[t(2869)] = u, e[t(2152)] = c, e[t(2829)] = n, e[t(1587)] = d, e.humanize = Ji(), e.destroy = f, Object[t(2693)](x).forEach((l) => {
      e[l] = x[l];
    }), e[t(1154)] = [], e[t(1441)] = [], e[t(2346)] = {};
    function s(l) {
      const g = t;
      let h = 0;
      for (let m = 0; m < l[g(1492)]; m++)
        h = (h << 5) - h + l[g(1678)](m), h |= 0;
      return e[g(907)][Math.abs(h) % e.colors[g(1492)]];
    }
    e[t(2631)] = s;
    function e(l) {
      const g = t;
      let h, m = null, v, S;
      function P(...F) {
        const O = K;
        if (!P.enabled) return;
        const R = P, I = Number(/* @__PURE__ */ new Date()), C = I - (h || I);
        R[O(1865)] = C, R[O(627)] = h, R[O(1102)] = I, h = I, F[0] = e[O(2869)](F[0]), typeof F[0] != "string" && F[O(2431)]("%O");
        let A = 0;
        F[0] = F[0][O(499)](/%([a-zA-Z%])/g, (L, q) => {
          const N = O;
          if (L === "%%") return "%";
          A++;
          const $ = e.formatters[q];
          if (typeof $ === N(621)) {
            const H = F[A];
            L = $[N(983)](R, H), F[N(1401)](A, 1), A--;
          }
          return L;
        }), e[O(2507)][O(983)](R, F), (R[O(1017)] || e[O(1017)]).apply(R, F);
      }
      return P[g(1130)] = l, P.useColors = e[g(2557)](), P.color = e[g(2631)](l), P.extend = r, P[g(1168)] = e[g(1168)], Object[g(1467)](P, g(1587), { enumerable: !0, configurable: !1, get: () => {
        const F = g;
        return m !== null ? m : (v !== e[F(1624)] && (v = e.namespaces, S = e[F(1587)](l)), S);
      }, set: (F) => {
        m = F;
      } }), typeof e.init === g(621) && e[g(2250)](P), P;
    }
    function r(l, g) {
      const h = t, m = e(this.namespace + (typeof g === h(633) ? ":" : g) + l);
      return m[h(1017)] = this.log, m;
    }
    function n(l) {
      const g = t;
      e[g(2742)](l), e[g(1624)] = l, e[g(1154)] = [], e[g(1441)] = [];
      const h = (typeof l === g(1346) ? l : "").trim()[g(499)](/\s+/g, ",").split(",")[g(861)](Boolean);
      for (const m of h)
        m[0] === "-" ? e[g(1441)][g(893)](m.slice(1)) : e[g(1154)][g(893)](m);
    }
    function o(l, g) {
      const h = t;
      let m = 0, v = 0, S = -1, P = 0;
      for (; m < l[h(1492)]; )
        if (v < g[h(1492)] && (g[v] === l[m] || g[v] === "*")) g[v] === "*" ? (S = v, P = m, v++) : (m++, v++);
        else if (S !== -1) v = S + 1, P++, m = P;
        else return !1;
      for (; v < g[h(1492)] && g[v] === "*"; )
        v++;
      return v === g[h(1492)];
    }
    function c() {
      const l = t, g = [...e[l(1154)], ...e.skips[l(1790)]((h) => "-" + h)].join(",");
      return e.enable(""), g;
    }
    function d(l) {
      const g = t;
      for (const h of e[g(1441)])
        if (o(l, h)) return !1;
      for (const h of e[g(1154)])
        if (o(l, h)) return !0;
      return !1;
    }
    function u(l) {
      const g = t;
      return l instanceof Error ? l[g(2057)] || l[g(1261)] : l;
    }
    function f() {
      const l = t;
      console[l(2175)](l(2944));
    }
    return e[t(2829)](e[t(869)]()), e;
  }
  return Vx = i, Vx;
}
var Da;
function Xi() {
  const i = a;
  return Da ? fx[i(1341)] : (Da = 1, function(x, t) {
    const s = i;
    t[s(2507)] = r, t[s(2742)] = n, t[s(869)] = o, t[s(2557)] = e, t[s(980)] = c(), t[s(1168)] = /* @__PURE__ */ (() => {
      let u = !1;
      return () => {
        const f = K;
        !u && (u = !0, console[f(2175)](f(2944)));
      };
    })(), t[s(907)] = [s(2014), s(1951), s(2483), s(880), s(725), "#0066FF", s(1626), s(1421), s(1961), s(2991), s(2754), "#00CC99", s(1203), s(1634), s(2886), s(2842), s(2134), "#3333FF", s(2566), s(2635), "#3399CC", s(1682), s(852), s(2058), s(2018), s(1730), "#33CCCC", "#33CCFF", s(1385), s(1818), s(645), s(1064), s(525), s(777), s(546), "#9900FF", s(1911), s(2590), s(2351), s(1497), s(2432), s(826), s(2948), "#CC0099", s(1258), s(859), s(1770), s(595), s(2402), "#CC3399", s(1708), "#CC33FF", s(1185), s(1855), s(2203), s(2673), "#CCCC00", s(2860), s(1189), s(909), "#FF0066", s(2157), s(974), s(1611), "#FF3300", s(2847), s(1101), s(1844), s(2888), s(2707), s(1569), "#FF6633", "#FF9900", s(2236), s(2319), s(1785)];
    function e() {
      const u = s;
      if (typeof window !== u(633) && window[u(772)] && (window[u(772)][u(2417)] === u(564) || window.process[u(2577)])) return !0;
      if (typeof navigator !== u(633) && navigator[u(1164)] && navigator[u(1164)][u(1861)]()[u(2467)](/(edge|trident)\/(\d+)/)) return !1;
      let f;
      return typeof document !== u(633) && document.documentElement && document[u(2225)].style && document.documentElement[u(2263)][u(1311)] || typeof window !== u(633) && window[u(2628)] && (window.console[u(810)] || window[u(2628)][u(2700)] && window.console[u(1851)]) || typeof navigator !== u(633) && navigator[u(1164)] && (f = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(f[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent[u(1861)]()[u(2467)](/applewebkit\/(\d+)/);
    }
    function r(u) {
      const f = s;
      if (u[0] = (this[f(2557)] ? "%c" : "") + this[f(1130)] + (this[f(2557)] ? f(2257) : " ") + u[0] + (this.useColors ? f(774) : " ") + "+" + x[f(1341)].humanize(this[f(1865)]), !this[f(2557)]) return;
      const l = f(2221) + this[f(942)];
      u[f(1401)](1, 0, l, "color: inherit");
      let g = 0, h = 0;
      u[0][f(499)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (g++, m === "%c" && (h = g));
      }), u[f(1401)](h, 0, l);
    }
    t.log = console.debug || console.log || (() => {
    });
    function n(u) {
      const f = s;
      try {
        u ? t[f(980)].setItem(f(1563), u) : t[f(980)][f(1896)](f(1563));
      } catch {
      }
    }
    function o() {
      const u = s;
      let f;
      try {
        f = t[u(980)][u(2975)]("debug") || t.storage[u(2975)](u(1248));
      } catch {
      }
      return !f && typeof process !== u(633) && "env" in process && (f = process.env.DEBUG), f;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x[s(1341)] = Qi()(t);
    const { formatters: d } = x[s(1341)];
    d.j = function(u) {
      const f = s;
      try {
        return JSON[f(2149)](u);
      } catch (l) {
        return f(1148) + l[f(1261)];
      }
    };
  }(fx, fx[i(1341)]), fx.exports);
}
var Yi = Xi();
const Hs = Us(Yi);
Hs[a(2829)]("*");
function _i(i, x) {
  const t = a, s = Hs(i), e = (r, n) => async function(...o) {
    try {
      await x({ level: r, messages: o });
    } catch {
    }
  };
  return s[t(1017)] = e(t(1017)), s;
}
const nx = _i("mesh:comfy", async ({ level: i, messages: x }) => {
  const t = a, { mcpMesh: s } = await Promise[t(1362)]()[t(2139)](() => zc);
  await s[t(2552)](t(2810))[t(1447)][t(1017)]({ level: i, messages: x });
});
globalThis[a(2706)] = globalThis[a(2706)] || {};
const ex = globalThis[a(2706)], eo = { "preview.show": "显示预览框 ({{count}}张图片)", "gateway.select_ai_service": a(1575), "provider.select.title": a(2249), "provider.comfyui.description": a(1908), "provider.replicate.description": "海量模型，稳定服务", "provider.runninghub.description": a(2106), "provider.google.description": a(1395), "task.waiting_upload": "正在等待图片上传...", "task.creating_task": a(1007), "task.running_duration": a(1040), "task.cancelled": a(2773), "task.cancel_failed": a(1031), "comfy.connect": "连接", "comfy.load_failed": "ComfyUI加载失败，HTTP状态码：{{code}}", "comfy.loading": "ComfyUI加载中...", "comfy.channel_connecting": a(2517), "comfy.server_reconnecting": a(656), "comfy.version_mismatch": a(1267), "comfy.cloud_recommend": a(1929), "comfy.your_workflows": a(1629), "comfy.refresh_workflows": a(1716), "comfy.queue_progress": a(1662), "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": "停止并取消全部", "comfy.stop_auto_run": a(1022), "comfy.start_auto_run": a(2009), "comfy.auto_run_status": a(2990), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": a(1381), "comfy.help_tooltip": "使用教程", "comfy.no_workflow_selected": a(1649), "boundary.title": a(1312), "boundary.tooltip": a(666), "boundary.current_canvas": a(624), "boundary.current_layer": "当前图层", "boundary.current_selection": a(626), "boundary.set_as_canvas": a(583), "boundary.set_as_layer": "设为当前图层", "boundary.set_as_selection": a(2151), "http.404": a(1868), "http.401": a(1676), "http.403": a(1155), "http.408": a(863), "http.500": a(2772), "http.501": a(2960), "http.502": a(1590), "http.503": a(631), "http.504": a(2271), "http.unknown": a(2100), "runninghub.get_apikey": a(640), "runninghub.apikey_placeholder": a(1966), "runninghub.app_id": "应用ID:", "runninghub.webapp_id_placeholder": a(1986), "runninghub.open_app": a(879), "runninghub.execute": "执行", "runninghub.running": "运行中...", "runninghub.rh_coins": "RH币:", "runninghub.current_tasks": a(2641), "runninghub.help_tooltip": a(1298), "runninghub.stop_all": "停止全部", "runninghub.status.waiting": "排队等待", "runninghub.status.running": "正在运行", "runninghub.status.failed": "执行失败", "runninghub.status.success": a(1128), "image.auto_refetch": a(2777), "runninghub.error.get_result_failed": a(1024), "runninghub.error.task_failed": a(1542), "runninghub.error.task_incomplete": a(1571), "replicate.get_apikey": a(2436), "replicate.apikey_placeholder": "请输入您的Replicate API Key", "replicate.execute": "执行", "replicate.model_placeholder": "粘贴你的模型名称", "replicate.help_tooltip": "使用教程", "replicate.loading": a(1351), "replicate.running": "运行中...", "replicate.stop": "停止", "liblib.get_apikey": a(1744), "liblib.execute": "执行", "common.close": "关闭", "common.save": "保存", "common.save_and_run": a(1063), "common.loading": "加载中...", "common.error": "错误", "common.success": "成功", "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": "=== 选项 ===", webviewInForeground: "插件可能正在拦截 PS 快捷键... ", webviewInForeground2: a(2172), "auth.login_success": "登录成功", "auth.username_label": a(2144), "auth.email_label": a(2674), "auth.logout": a(789), "auth.login_required": "请登陆后使用插件", "image.send.select_position": "请选择要发送图像的位置", "image.send.sending": a(749), "image.layer.new": a(703), "image.layer.current": a(1714), "image.layer.fit_to_current": a(1281), "image.layer.fit_to_selection": a(2856), "image.layer.fit_to_canvas": a(557), "image.shortcut_auth_required": a(1079), "image.shortcut_focus_required": a(2826), "image.get.select_image": a(2398), "image.get.entire_canvas": a(624), "image.get.canvas": "画布", "image.get.current_layer": a(1714), "image.get.current_layer_bounds": a(2664), "image.get.selection_bounds": a(2291), "image.get.canvas_bounds": a(1757), "image.crop_by_selection": a(1693), "image.limit_size": a(604), "image.crop.none": a(1667), "image.crop.inpaint": a(1292), "image.crop.outpaint": a(1106), "image.send_all": a(1323), "image.save_all": a(2865), "image.save_current": a(770), "image.delete_current": a(912), "image.more_actions": a(1133), "image.jump_to_last": a(898), "image.clear_all": a(760), "image.send_to_ps": a(1382), "image.download": "下载", "image.copy": "复制", "image.sending": "正在发送...", "image.sending_all": a(715), "mask.get.select_mask": a(2404), "mask.selection": "选区", "mask.current_layer_bounds": "当前图层范围", "mask.all": "全部", "mask.selection_exclude": a(653), "mask.current_layer_exclude": a(842), "mask.empty": "空", "document {{0}} not found": a(507), "create document for preview": "创建预览文档", "resize document for preview": a(2403), "create document for sent images": a(540), "show sent images": "显示发送的图片", "create layer failed": a(2260), "layer not found {{0}}": a(2751), "layer not found: {{0}}": "找不到图层: {{0}}", "layer {{0}} is not a group": a(1066), "no linked layer for {{0}}": a(2831), "no first related layer in {{0}}": a(1318), "merge group failed": a(889), "get content of layer {{0}}": a(798), "get layer info": "获取图层信息", "get_layer_info: layer_identify required": a(2844), "get pixel of {{0}} failed": a(1473), "get selection failed": a(2112), "invalid name: {{0}}": "非法的名称: {{0}}", "desire bounds is null": a(2484), "intersect or scaledDesire is null": a(2534), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': "不支持非文本图层: {{0}}", "select layer": a(1991), "run Photoshop Action": a(647), "Action {{0}} not found": a(1946), "Action set {{0}} not found": a(673), "set text to layer": a(1947), "ComfyManager not found, cannot reboot": a(1378), "Failed to reboot ComfyUI": a(2195), "image.upload.from_canvas": "画布", "image.upload.from_curlayer": a(1714), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": a(1136), "image.upload.no_images": a(734), "image.upload.error": a(2048), "image.upload.tooltip.more_options_hint": "+Shift 调整更多选项；Ctrl 单次获取。", "image.upload.tooltip.alt.crop": a(1776), "image.upload.tooltip.alt.reverse": a(2043), "image.upload.tooltip.image.canvas": a(2859), "image.upload.tooltip.image.curlayer": a(1671), "image.upload.tooltip.mask.curlayer": a(990), "image.upload.tooltip.mask.selection": a(1762), "image.upload.tooltip.mask.canvas": a(1446), "image.upload.tooltip.cut_action": a(1074), "image.upload.tooltip.scan_action": a(927), "image.upload.tooltip.autosync.on": a(2929), "image.upload.tooltip.autosync.off": a(2589), "image.upload.autosync.fetching": a(1870), "image.upload.tooltip.current.canvas": a(2378), "image.upload.tooltip.current.layer": a(1609), "image.upload.tooltip.current.layer_named": a(2186), "image.upload.tooltip.current.file": a(2358), "image.upload.retry": "重试", "image.pack.local.button": a(1800), "image.pack.local.empty": a(734), "image.auto_send_enabled": a(611), "image.auto_send_disabled": a(574), "image.upload.primary.auto": "自动取图中…", "image.upload.primary.manual": a(1552), "image.upload.primary.hint": "该节点默认继承当前图层与遮罩", "image.upload.primary.cut": "裁剪", "image.upload.primary.scan": "扫描", "image.upload.primary.hint.line1": "本节点默认继承:", "image.upload.primary.hint.line2": "主图", "workflow.output.destination.title": a(2528), "workflow.output.destination.canvas": "全图", "image.upload.primary.advanced": a(1646), "image.upload.primary.advanced.modify": "修改", "image.upload.primary.advanced.reset": "重置", "image.upload.primary.advanced.local_file": a(1735), "image.upload.primary.advanced.content.canvas": "画布", "image.upload.primary.advanced.content.curlayer": "当前图层", "image.upload.primary.advanced.content.selection": "选区", "image.upload.primary.advanced.boundary.canvas": a(2896), "image.upload.primary.advanced.boundary.curlayer": a(2607), "image.upload.primary.advanced.boundary.selection": "选区边界", "image.upload.primary.advanced.boundary.primary": a(935), "image.upload.mask.button": a(1614), "image.upload.mask.selection": a(1614), "image.upload.mask.layer": a(1664), "image.upload.remove_slot": "移除槽位", "image.upload.add_slot": "新增槽位", "video.local.button": a(1459), "video.local.empty": "暂无视频", "video.local.remove": a(1518), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": a(914), "source.ps_mask": "PS遮罩", "source.canvas": a(624), "source.current_layer": a(1714), "source.selection": "选区", "source.quality_percent": a(1846), "source.crop.positive": a(1386), "source.crop.negative": "反向裁剪", "source.reverse": "反转", "send_images.create_document": a(2074), "send_images.create_document_failed": a(1994), "photoshop.no_active_document": a(2597), "photoshop.rectangle_coordinates_required": a(2430), "photoshop.create_guide_frame": a(2487), "photoshop.clear_guide_frame": a(543), "photoshop.invalid_action": a(2109), "photoshop.file_not_found": a(579), "photoshop.failed_to_open_file_as_document": "无法将文件作为文档打开: {{path}}", "photoshop.invalid_boundary": a(2966), "photoshop.failed_to_open_image_file": a(1426), "photoshop.open_images_from_file": "从文件打开图像", "photoshop.failed_to_create_document_from_file": a(2466), "google.field.image_input": a(2008), "google.field.prompt": "提示词", "google.field.batch_count": "批次数量", "google.field.images_per_batch": "每批图像数", "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": "生成中", "google.apikey_placeholder": a(1222), "google.baseurl_placeholder": a(1194), "google.get_apikey": a(2441), "google.help_tooltip": a(2446), "google.model_name": a(2288), "google.model_label": "模型", "google.model_placeholder": a(929), "google.stop": "停止", "google.loading": "加载中...", "google.generating": a(1112), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": "作为智能对象导入", "image.import_as_newdoc": a(2290), "image.boundary": "边界", "image.import_tip": "按住 Shift 键以新文档方式导入", "auth.guest_login_success": "访客登录成功", "boundary.canvas": "画布", "boundary.select_boundary": a(1180), "boundary.selection": "选区", "boundary.max_size": a(2438), "boundary.max_size_error": a(1195), "boundary.max_size_hint": a(1023), "boundary.max_size_placeholder": a(1023), "boundary.no_limit": "不限", "boundary.image_quality": "图像质量 (%)", "boundary.image_quality_required": a(1330), "boundary.image_quality_range": a(2947), "boundary.preview_main_image": a(2205), "boundary.preview_select": "设为选区", "boundary.preview_alt": "边界预览", "boundary.preview_placeholder": a(2086), "boundary.settings": a(2031), "convert widget {0} failed:": "控件 {0} 转换失败：", "document {0} not found": a(2024), "image.document.new": a(2088), "image.layer.smart_object": a(1972), "layer not found {0}": a(2136), "photoshop.invalid_boundary_type": "无效的边界类型: {{type}}", "photoshop.no_active_layer": a(1617), "dialog.image_source.title": a(978), "dialog.image_source.primary_canvas": a(1875), "dialog.image_source.primary_curlayer": a(730), "dialog.image_source.canvas_canvas": a(2505), "dialog.image_source.canvas_curlayer": a(1269), "dialog.image_source.curlayer_canvas": a(2571), "dialog.image_source.curlayer_curlayer": a(1949), "dialog.image_source.local_file": "从磁盘获取", "dialog.simple_source.title": a(2292), "dialog.simple_source.canvas": "画布", "dialog.simple_source.current_layer": "当前图层", "dialog.simple_source.local_file": "选择文件", "dialog.simple_source.no_active_layer": a(601), "dialog.simple_source.pick_error": a(941) }, xo = { "preview.show": "Show Preview ({{count}} images)", "gateway.select_ai_service": a(1018), "provider.select.title": a(735), "provider.comfyui.description": a(510), "provider.replicate.description": "Cloud-based model service platform", "provider.runninghub.description": a(1820), "provider.google.description": a(512), "task.waiting_upload": a(1442), "task.creating_task": a(1451), "task.running_duration": a(1052), "task.cancelled": a(2287), "task.cancel_failed": "Task cancel failed: {{error}}", "comfy.connect": a(1546), "comfy.load_failed": "ComfyUI failed to load, HTTP status code: {{code}}", "comfy.loading": a(1854), "comfy.channel_connecting": "Channel connecting...", "comfy.server_reconnecting": a(2334), "comfy.version_mismatch": a(2694), "comfy.cloud_recommend": a(2035), "comfy.your_workflows": a(2769), "comfy.refresh_workflows": "Refresh workflow list", "comfy.queue_progress": "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "comfy.save": a(2793), "comfy.refresh": a(997), "comfy.stop_cancel_all": "Stop and cancel all", "comfy.stop_auto_run": a(1672), "comfy.start_auto_run": a(1290), "comfy.auto_run_status": "Auto-run workflow after changes...", "comfy.run": a(526), "comfy.back": a(739), "comfy.uploading": a(1347), "comfy.help_tooltip": a(2258), "comfy.no_workflow_selected": a(2096), "boundary.title": "Input Setting", "boundary.tooltip": "Area AI reads from; controls max image size", "boundary.current_canvas": "Entire Canvas", "boundary.current_layer": a(1291), "boundary.current_selection": a(1280), "boundary.set_as_canvas": "Set as Canvas", "boundary.set_as_layer": a(2645), "boundary.set_as_selection": a(2146), "http.404": a(2564), "http.401": "Unauthorized (401)", "http.403": a(952), "http.408": "Request timeout (408)", "http.500": a(2486), "http.501": a(2143), "http.502": a(613), "http.503": "Service unavailable (503)", "http.504": "Gateway timeout (504)", "http.unknown": "Unknown error ({{code}})", "runninghub.get_apikey": "Click to get RunningHub APIKey", "runninghub.apikey_placeholder": a(2600), "runninghub.app_id": "App ID:", "runninghub.webapp_id_placeholder": a(1931), "runninghub.open_app": a(967), "runninghub.execute": a(594), "runninghub.running": a(2533), "runninghub.rh_coins": a(2174), "runninghub.current_tasks": a(1359), "runninghub.help_tooltip": a(2258), "runninghub.stop_all": "Stop all", "runninghub.status.waiting": "Waiting in queue", "runninghub.status.running": "Running", "runninghub.status.failed": a(568), "runninghub.status.success": a(1900), "image.auto_refetch": a(1037), "runninghub.error.get_result_failed": a(2872), "runninghub.error.task_failed": a(1622), "runninghub.error.task_incomplete": a(2265), "replicate.get_apikey": a(2412), "replicate.apikey_placeholder": a(2189), "replicate.execute": "Execute", "replicate.model_placeholder": "Paste your model name", "replicate.help_tooltip": a(2258), "replicate.loading": a(2560), "replicate.running": a(2533), "replicate.stop": a(2001), "liblib.get_apikey": "How to get APIKey and API Secret", "liblib.execute": a(594), "common.close": a(2219), "common.save": a(2793), "common.save_and_run": "Save and run immediately", "common.loading": a(2560), "common.error": a(998), "common.success": a(1900), "common.cancel": a(2913), "common.confirm": a(820), "common.options": a(1380), "common.options_separator": a(2989), webviewInForeground: a(959), webviewInForeground2: a(2768), "auth.login_success": "Login Successful", "auth.username_label": a(1115), "auth.email_label": a(1455), "auth.logout": a(2799), "auth.login_required": a(1316), "image.send.select_position": "Please select the position to send image", "image.send.sending": a(1146), "image.layer.new": a(2216), "image.layer.current": a(1291), "image.layer.fit_to_current": a(1177), "image.layer.fit_to_selection": a(671), "image.layer.fit_to_canvas": a(1465), "image.shortcut_auth_required": a(1449), "image.shortcut_focus_required": "Plugin window focused required to use keyboard shortcut", "image.get.select_image": "Please select the image to get", "image.get.entire_canvas": "Entire Canvas", "image.get.canvas": a(2066), "image.get.current_layer": a(1291), "image.get.current_layer_bounds": a(2555), "image.get.selection_bounds": a(2840), "image.get.canvas_bounds": "Canvas bounds", "image.crop_by_selection": a(1357), "image.limit_size": a(2434), "image.crop.none": a(1474), "image.crop.inpaint": a(733), "image.crop.outpaint": a(2461), "image.send_all": a(2286), "image.save_all": a(1659), "image.save_current": a(1067), "image.delete_current": a(2584), "image.more_actions": a(541), "image.jump_to_last": a(1078), "image.clear_all": a(662), "image.send_to_ps": a(987), "image.download": "Download", "image.copy": a(994), "image.sending": a(1348), "image.sending_all": a(2979), "mask.get.select_mask": a(2015), "mask.selection": "Selection", "mask.current_layer_bounds": a(2281), "mask.all": a(1416), "mask.selection_exclude": a(1110), "mask.current_layer_exclude": a(1238), "mask.empty": a(552), "document {{0}} not found": a(1897), "create document for preview": "Create document for preview", "resize document for preview": a(2757), "create document for sent images": a(2661), "show sent images": "Show sent images", "create layer failed": a(1050), "layer not found {{0}}": a(667), "layer not found: {{0}}": a(1848), "layer {{0}} is not a group": "Layer {{0}} is not a group", "no linked layer for {{0}}": a(1867), "no first related layer in {{0}}": a(2478), "merge group failed": a(2054), "get content of layer {{0}}": a(1554), "get layer info": "Get layer info", "get_layer_info: layer_identify required": a(2081), "get pixel of {{0}} failed": a(589), "get selection failed": a(1977), "invalid name: {{0}}": "Invalid name: {{0}}", "desire bounds is null": a(1342), "intersect or scaledDesire is null": "Intersect or scaledDesire is null", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': a(509), "select layer": "Select layer", "run Photoshop Action": "Run Photoshop Action", "Action {{0}} not found": a(1005), "Action set {{0}} not found": a(894), "set text to layer": a(2413), "ComfyManager not found, cannot reboot": "Cannot reboot because ComfyManager is missing", "Failed to reboot ComfyUI": "Unable to reboot ComfyUI", "image.upload.from_canvas": "Canvas", "image.upload.from_curlayer": a(1291), "image.upload.from_selection": a(709), "image.upload.from_harddisk": a(1758), "image.upload.clear": a(2330), "image.upload.uploading": "Uploading, if the image too large, may be lag...", "image.upload.no_images": a(2928), "image.upload.error": a(1992), "image.upload.tooltip.alt.crop": a(1879), "image.upload.tooltip.alt.reverse": "+Alt reversed mask", "image.upload.tooltip.image.canvas": "Get image from Canvas", "image.upload.tooltip.image.curlayer": a(1589), "image.upload.tooltip.mask.canvas": "Get mask from Canvas", "image.upload.tooltip.mask.curlayer": a(2937), "image.upload.tooltip.mask.selection": a(2814), "image.upload.tooltip.cut_action": a(2097), "image.upload.tooltip.scan_action": a(2235), "image.upload.tooltip.autosync.on": "Auto Sync: on", "image.upload.tooltip.autosync.off": a(2248), "image.upload.tooltip.more_options_hint": a(2668), "image.upload.tooltip.current.canvas": a(2085), "image.upload.tooltip.current.layer": a(2762), "image.upload.tooltip.current.layer_named": a(2504), "image.upload.tooltip.current.file": a(588), "image.upload.autosync.fetching": a(2395), "image.upload.retry": a(2908), "image.pack.local.button": a(2945), "image.pack.local.empty": a(885), "image.auto_send_enabled": "Auto send enabled", "image.auto_send_disabled": a(2068), "image.upload.primary.auto": "Auto fetching…", "image.upload.primary.manual": a(1489), "image.upload.primary.cut": a(2615), "image.upload.primary.scan": a(1062), "image.upload.primary.hint": "This node defaults to current layer + mask", "image.upload.primary.hint.line1": a(1428), "image.upload.primary.hint.line2": "Main Image", "workflow.output.destination.title": a(2857), "workflow.output.destination.canvas": a(598), "image.upload.primary.advanced": a(2672), "image.upload.primary.advanced.modify": a(2188), "image.upload.primary.advanced.reset": a(2213), "image.upload.primary.advanced.local_file": a(616), "image.upload.primary.advanced.content.canvas": a(2066), "image.upload.primary.advanced.content.curlayer": a(1147), "image.upload.primary.advanced.content.selection": a(709), "image.upload.primary.advanced.boundary.canvas": a(2563), "image.upload.primary.advanced.boundary.curlayer": a(1565), "image.upload.primary.advanced.boundary.selection": "Selection boundary", "image.upload.primary.advanced.boundary.primary": a(931), "image.upload.mask.button": "Selection mask", "image.upload.mask.selection": a(2518), "image.upload.mask.layer": a(1494), "image.upload.remove_slot": a(2735), "image.upload.add_slot": "Add slot", "video.local.button": a(1219), "video.local.empty": a(1699), "video.local.remove": a(1388), "source.source": a(1807), "source.content": a(1457), "source.boundary": a(1835), "source.mask": "Mask", "source.disk": a(1758), "source.remote": a(1968), "source.unknown": a(1361), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": "Canvas", "source.current_layer": a(1345), "source.selection": a(709), "source.quality_percent": a(2752), "source.crop.positive": a(657), "source.crop.negative": a(2350), "source.reverse": a(608), "send_images.create_document": a(1019), "send_images.create_document_failed": "Create document failed", "photoshop.no_active_document": a(2209), "photoshop.rectangle_coordinates_required": a(2827), "photoshop.create_guide_frame": "Create guide frame", "photoshop.clear_guide_frame": a(1862), "photoshop.invalid_action": a(2010), "photoshop.file_not_found": "File not found: {{path}}", "photoshop.failed_to_open_file_as_document": a(1537), "photoshop.invalid_boundary": "Invalid boundary: left must be less than right, top must be less than bottom", "photoshop.failed_to_open_image_file": "Failed to open image file: {{error}}", "photoshop.open_images_from_file": "Open images from file", "photoshop.failed_to_create_document_from_file": a(1249), "google.field.image_input": a(1564), "google.field.prompt": "Prompt", "google.field.batch_count": a(672), "google.field.images_per_batch": a(1250), "google.status.success": a(1900), "google.status.failed": a(568), "google.status.generating": a(2359), "google.apikey_placeholder": a(723), "google.get_apikey": "Get API Key", "google.baseurl_placeholder": a(1466), "google.help_tooltip": a(1214), "google.model_name": a(1448), "google.model_label": a(2823), "google.model_placeholder": a(786), "google.stop": "Stop", "google.loading": a(2560), "google.generating": a(2514), "google.generate": a(650), "image.auto_toggle": "AUTO", "image.import_as_smartobject": a(1434), "image.import_as_newdoc": "Import as New Document", "image.boundary": a(1412), "image.import_tip": a(1610), "auth.guest_login_success": "Guest login successful", "boundary.canvas": a(2066), "boundary.select_boundary": a(683), "boundary.selection": "Selection", "boundary.max_size": "Max size (px)", "boundary.max_size_error": a(808), "boundary.max_size_hint": a(2178), "boundary.max_size_placeholder": a(2178), "boundary.no_limit": a(827), "boundary.image_quality": "Image quality (%)", "boundary.image_quality_required": a(1852), "boundary.image_quality_range": a(1184), "boundary.preview_main_image": a(1142), "boundary.preview_select": a(1244), "boundary.preview_alt": a(537), "boundary.preview_placeholder": a(1427), "boundary.settings": "Adjust input settings", "convert widget {0} failed:": "Failed to convert widget {0}:", "document {0} not found": "Document {0} not found", "image.document.new": a(614), "image.layer.smart_object": a(686), "layer not found {0}": "Layer {0} not found", "photoshop.invalid_boundary_type": a(937), "photoshop.no_active_layer": a(2047), "dialog.image_source.title": a(1596), "dialog.image_source.primary_canvas": a(1192), "dialog.image_source.primary_curlayer": "Fetch current layer with primary boundary", "dialog.image_source.canvas_canvas": a(1411), "dialog.image_source.canvas_curlayer": a(2321), "dialog.image_source.curlayer_canvas": a(2427), "dialog.image_source.curlayer_curlayer": a(2720), "dialog.image_source.local_file": a(2790), "dialog.simple_source.title": a(1960), "dialog.simple_source.canvas": a(2066), "dialog.simple_source.current_layer": "Current Layer", "dialog.simple_source.local_file": a(696), "dialog.simple_source.no_active_layer": a(684), "dialog.simple_source.pick_error": a(2214) }, g0 = (i) => typeof i == "string", Qe = () => {
  const i = a;
  let x, t;
  const s = new Promise((e, r) => {
    x = e, t = r;
  });
  return s[i(1362)] = x, s.reject = t, s;
}, ja = (i) => i == null ? "" : "" + i, to = (i, x, t) => {
  i[a(1615)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, ao = /###/g, Ma = (i) => i && i[a(2098)](a(1241)) > -1 ? i[a(499)](ao, ".") : i, La = (i) => !i || g0(i), xx = (i, x, t) => {
  const s = a, e = g0(x) ? x[s(2889)](".") : x;
  let r = 0;
  for (; r < e[s(1492)] - 1; ) {
    if (La(i)) return {};
    const n = Ma(e[r]);
    !i[n] && t && (i[n] = new t()), Object[s(757)].hasOwnProperty[s(983)](i, n) ? i = i[n] : i = {}, ++r;
  }
  return La(i) ? {} : { obj: i, k: Ma(e[r]) };
}, $a = (i, x, t) => {
  const s = a, { obj: e, k: r } = xx(i, x, Object);
  if (e !== void 0 || x[s(1492)] === 1) {
    e[r] = t;
    return;
  }
  let n = x[x[s(1492)] - 1], o = x.slice(0, x.length - 1), c = xx(i, o, Object);
  for (; c[s(527)] === void 0 && o[s(1492)]; )
    n = o[o[s(1492)] - 1] + "." + n, o = o.slice(0, o[s(1492)] - 1), c = xx(i, o, Object), c != null && c[s(527)] && typeof c[s(527)][c.k + "." + n] < "u" && (c[s(527)] = void 0);
  c.obj[c.k + "." + n] = t;
}, ro = (i, x, t, s) => {
  const { obj: e, k: r } = xx(i, x, Object);
  e[r] = e[r] || [], e[r].push(t);
}, Rx = (i, x) => {
  const t = a, { obj: s, k: e } = xx(i, x);
  if (s && Object[t(757)][t(2472)][t(983)](s, e))
    return s[e];
}, so = (i, x, t) => {
  const s = Rx(i, t);
  return s !== void 0 ? s : Rx(x, t);
}, Vs = (i, x, t) => {
  const s = a;
  for (const e in x)
    e !== s(2469) && e !== s(2527) && (e in i ? g0(i[e]) || i[e] instanceof String || g0(x[e]) || x[e] instanceof String ? t && (i[e] = x[e]) : Vs(i[e], x[e], t) : i[e] = x[e]);
  return i;
}, Ue = (i) => i[a(499)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, a(1996));
var no = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': a(829), "'": "&#39;", "/": "&#x2F;" };
const io = (i) => {
  const x = a;
  return g0(i) ? i[x(499)](/[&<>"'\/]/g, (t) => no[t]) : i;
};
class oo {
  constructor(x) {
    const t = a;
    this[t(2515)] = x, this.regExpMap = /* @__PURE__ */ new Map(), this[t(1780)] = [];
  }
  [a(1914)](x) {
    const t = a, s = this[t(932)][t(1919)](x);
    if (s !== void 0) return s;
    const e = new RegExp(x);
    return this[t(1780)][t(1492)] === this[t(2515)] && this[t(932)].delete(this.regExpQueue[t(2388)]()), this[t(932)][t(2296)](x, e), this[t(1780)][t(893)](x), e;
  }
}
const co = [" ", ",", "?", "!", ";"], uo = new oo(20), fo = (i, x, t) => {
  const s = a;
  x = x || "", t = t || "";
  const e = co.filter((o) => x.indexOf(o) < 0 && t[s(2098)](o) < 0);
  if (e[s(1492)] === 0) return !0;
  const r = uo[s(1914)]("(" + e[s(1790)]((o) => o === "?" ? "\\?" : o)[s(727)]("|") + ")");
  let n = !r[s(2553)](i);
  if (!n) {
    const o = i[s(2098)](t);
    o > 0 && !r[s(2553)](i[s(1932)](0, o)) && (n = !0);
  }
  return n;
}, Wt = (i, x, t = ".") => {
  const s = a;
  if (!i) return;
  if (i[x])
    return Object.prototype[s(2472)][s(983)](i, x) ? i[x] : void 0;
  const e = x[s(2889)](t);
  let r = i;
  for (let n = 0; n < e.length; ) {
    if (!r || typeof r !== s(2535)) return;
    let o, c = "";
    for (let d = n; d < e[s(1492)]; ++d)
      if (d !== n && (c += t), c += e[d], o = r[c], o !== void 0) {
        if ([s(1346), s(1120), s(2173)].indexOf(typeof o) > -1 && d < e[s(1492)] - 1) continue;
        n += d - n + 1;
        break;
      }
    r = o;
  }
  return r;
}, rx = (i) => i == null ? void 0 : i[a(499)]("_", "-"), lo = { type: a(1476), log(i) {
  this.output("log", i);
}, warn(i) {
  const x = a;
  this[x(1519)](x(2175), i);
}, error(i) {
  const x = a;
  this.output(x(1978), i);
}, output(i, x) {
  var s, e;
  const t = a;
  (e = (s = console == null ? void 0 : console[i]) == null ? void 0 : s[t(2832)]) == null || e.call(s, console, x);
} };
class Cx {
  constructor(x, t = {}) {
    this[a(2250)](x, t);
  }
  init(x, t = {}) {
    const s = a;
    this[s(2821)] = t[s(2821)] || s(2356), this.logger = x || lo, this[s(2308)] = t, this[s(1563)] = t[s(1563)];
  }
  [a(1017)](...x) {
    return this[a(784)](x, "log", "", !0);
  }
  [a(2175)](...x) {
    const t = a;
    return this.forward(x, t(2175), "", !0);
  }
  error(...x) {
    const t = a;
    return this.forward(x, t(1978), "");
  }
  [a(1621)](...x) {
    const t = a;
    return this.forward(x, "warn", t(2223), !0);
  }
  [a(784)](x, t, s, e) {
    const r = a;
    return e && !this[r(1563)] ? null : (g0(x[0]) && (x[0] = "" + s + this[r(2821)] + " " + x[0]), this[r(1476)][t](x));
  }
  [a(2587)](x) {
    const t = a;
    return new Cx(this[t(1476)], { prefix: this[t(2821)] + ":" + x + ":", ...this.options });
  }
  [a(1100)](x) {
    const t = a;
    return x = x || this[t(2308)], x.prefix = x[t(2821)] || this[t(2821)], new Cx(this.logger, x);
  }
}
var fe = new Cx();
class qx {
  constructor() {
    const x = a;
    this[x(1418)] = {};
  }
  on(x, t) {
    const s = a;
    return x[s(2889)](" ")[s(1615)]((e) => {
      const r = s;
      this[r(1418)][e] || (this.observers[e] = /* @__PURE__ */ new Map());
      const n = this[r(1418)][e][r(1919)](t) || 0;
      this[r(1418)][e][r(2296)](t, n + 1);
    }), this;
  }
  [a(2758)](x, t) {
    const s = a;
    if (this[s(1418)][x]) {
      if (!t) {
        delete this.observers[x];
        return;
      }
      this[s(1418)][x].delete(t);
    }
  }
  [a(958)](x, ...t) {
    const s = a;
    this[s(1418)][x] && Array[s(1954)](this.observers[x][s(643)]())[s(1615)](([r, n]) => {
      for (let o = 0; o < n; o++)
        r(...t);
    }), this[s(1418)]["*"] && Array[s(1954)](this[s(1418)]["*"][s(643)]()).forEach(([r, n]) => {
      const o = s;
      for (let c = 0; c < n; c++)
        r[o(2832)](r, [x, ...t]);
    });
  }
}
class za extends qx {
  constructor(x, t = { ns: [a(1971)], defaultNS: a(1971) }) {
    const s = a;
    super(), this[s(1369)] = x || {}, this[s(2308)] = t, this[s(2308)][s(2411)] === void 0 && (this.options[s(2411)] = "."), this.options[s(1717)] === void 0 && (this[s(2308)][s(1717)] = !0);
  }
  [a(2862)](x) {
    const t = a;
    this[t(2308)].ns[t(2098)](x) < 0 && this.options.ns[t(893)](x);
  }
  removeNamespaces(x) {
    const t = a, s = this[t(2308)].ns[t(2098)](x);
    s > -1 && this[t(2308)].ns[t(1401)](s, 1);
  }
  [a(2850)](x, t, s, e = {}) {
    var u, f;
    const r = a, n = e.keySeparator !== void 0 ? e.keySeparator : this[r(2308)][r(2411)], o = e.ignoreJSONStructure !== void 0 ? e[r(1717)] : this[r(2308)].ignoreJSONStructure;
    let c;
    x[r(2098)](".") > -1 ? c = x[r(2889)](".") : (c = [x, t], s && (Array[r(1320)](s) ? c[r(893)](...s) : g0(s) && n ? c[r(893)](...s.split(n)) : c.push(s)));
    const d = Rx(this[r(1369)], c);
    return !d && !t && !s && x[r(2098)](".") > -1 && (x = c[0], t = c[1], s = c[r(1981)](2)[r(727)](".")), d || !o || !g0(s) ? d : Wt((f = (u = this.data) == null ? void 0 : u[x]) == null ? void 0 : f[t], s, n);
  }
  [a(1327)](x, t, s, e, r = { silent: !1 }) {
    const n = a, o = r[n(2411)] !== void 0 ? r.keySeparator : this.options[n(2411)];
    let c = [x, t];
    s && (c = c[n(2004)](o ? s.split(o) : s)), x.indexOf(".") > -1 && (c = x.split("."), e = t, t = c[1]), this[n(2862)](t), $a(this[n(1369)], c, e), r[n(2465)] || this[n(958)]("added", x, t, s, e);
  }
  [a(1162)](x, t, s, e = { silent: !1 }) {
    const r = a;
    for (const n in s)
      (g0(s[n]) || Array[r(1320)](s[n])) && this[r(1327)](x, t, n, s[n], { silent: !0 });
    e[r(2465)] || this.emit(r(1408), x, t, s);
  }
  addResourceBundle(x, t, s, e, r, n = { silent: !1, skipCopy: !1 }) {
    const o = a;
    let c = [x, t];
    x.indexOf(".") > -1 && (c = x[o(2889)]("."), e = s, s = t, t = c[1]), this[o(2862)](t);
    let d = Rx(this.data, c) || {};
    n[o(1573)] || (s = JSON.parse(JSON[o(2149)](s))), e ? Vs(d, s, r) : d = { ...d, ...s }, $a(this[o(1369)], c, d), n[o(2465)] || this.emit(o(1408), x, t, s);
  }
  removeResourceBundle(x, t) {
    const s = a;
    this[s(2907)](x, t) && delete this.data[x][t], this[s(1453)](t), this[s(958)](s(2374), x, t);
  }
  [a(2907)](x, t) {
    return this[a(2850)](x, t) !== void 0;
  }
  [a(2051)](x, t) {
    const s = a;
    return t || (t = this[s(2308)][s(628)]), this[s(2850)](x, t);
  }
  [a(514)](x) {
    return this[a(1369)][x];
  }
  [a(2984)](x) {
    const t = a, s = this[t(514)](x);
    return !!(s && Object[t(2693)](s) || [])[t(1284)]((r) => s[r] && Object[t(2693)](s[r]).length > 0);
  }
  [a(2854)]() {
    return this[a(1369)];
  }
}
var Zs = { processors: {}, addPostProcessor(i) {
  const x = a;
  this[x(1391)][i.name] = i;
}, handle(i, x, t, s, e) {
  return i.forEach((r) => {
    var o;
    const n = K;
    x = ((o = this[n(1391)][r]) == null ? void 0 : o[n(772)](x, t, s, e)) ?? x;
  }), x;
} };
const Ua = {}, Ha = (i) => !g0(i) && typeof i !== a(2173) && typeof i !== a(1120);
class Fx extends qx {
  constructor(x, t = {}) {
    const s = a;
    super(), to(["resourceStore", s(1698), s(1496), s(1096), s(2194), s(831), s(1036)], x, this), this[s(2308)] = t, this[s(2308)][s(2411)] === void 0 && (this[s(2308)][s(2411)] = "."), this[s(1476)] = fe[s(2587)]("translator");
  }
  [a(1952)](x) {
    const t = a;
    x && (this[t(2723)] = x);
  }
  [a(1905)](x, t = { interpolation: {} }) {
    const s = a, e = { ...t };
    if (x == null) return !1;
    const r = this[s(1362)](x, e);
    return (r == null ? void 0 : r[s(1360)]) !== void 0;
  }
  extractFromKey(x, t) {
    const s = a;
    let e = t[s(2107)] !== void 0 ? t.nsSeparator : this[s(2308)][s(2107)];
    e === void 0 && (e = ":");
    const r = t[s(2411)] !== void 0 ? t[s(2411)] : this[s(2308)][s(2411)];
    let n = t.ns || this.options[s(628)] || [];
    const o = e && x[s(2098)](e) > -1, c = !this[s(2308)][s(1247)] && !t[s(2411)] && !this[s(2308)][s(2259)] && !t[s(2107)] && !fo(x, e, r);
    if (o && !c) {
      const d = x[s(2467)](this[s(1096)][s(1890)]);
      if (d && d[s(1492)] > 0) return { key: x, namespaces: g0(n) ? [n] : n };
      const u = x.split(e);
      (e !== r || e === r && this[s(2308)].ns[s(2098)](u[0]) > -1) && (n = u[s(2388)]()), x = u.join(r);
    }
    return { key: x, namespaces: g0(n) ? [n] : n };
  }
  translate(x, t, s) {
    const e = a;
    let r = typeof t == "object" ? { ...t } : t;
    if (typeof r !== e(2535) && this[e(2308)].overloadTranslationOptionHandler && (r = this[e(2308)].overloadTranslationOptionHandler(arguments)), typeof options === e(2535) && (r = { ...r }), r || (r = {}), x == null) return "";
    Array[e(1320)](x) || (x = [String(x)]);
    const n = r[e(2091)] !== void 0 ? r[e(2091)] : this.options[e(2091)], o = r[e(2411)] !== void 0 ? r[e(2411)] : this[e(2308)][e(2411)], { key: c, namespaces: d } = this[e(2471)](x[x[e(1492)] - 1], r), u = d[d[e(1492)] - 1];
    let f = r[e(2107)] !== void 0 ? r.nsSeparator : this.options[e(2107)];
    f === void 0 && (f = ":");
    const l = r.lng || this.language, g = r[e(701)] || this[e(2308)][e(701)];
    if ((l == null ? void 0 : l[e(1861)]()) === e(2917))
      return g ? n ? { res: "" + u + f + c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: u, usedParams: this.getUsedParamsDetails(r) } : "" + u + f + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: u, usedParams: this.getUsedParamsDetails(r) } : c;
    const h = this[e(1362)](x, r);
    let m = h == null ? void 0 : h[e(1360)];
    const v = (h == null ? void 0 : h.usedKey) || c, S = (h == null ? void 0 : h[e(1471)]) || c, P = [e(1586), e(1239), "[object RegExp]"], F = r.joinArrays !== void 0 ? r[e(754)] : this[e(2308)][e(754)], O = !this[e(831)] || this.i18nFormat.handleAsObject, R = r[e(1644)] !== void 0 && !g0(r[e(1644)]), I = Fx.hasDefaultValue(r), C = R ? this[e(1496)][e(1878)](l, r[e(1644)], r) : "", A = r[e(2289)] && R ? this.pluralResolver.getSuffix(l, r[e(1644)], { ordinal: !1 }) : "", j = R && !r[e(2289)] && r[e(1644)] === 0, L = j && r[e(1276) + this.options[e(2972)] + "zero"] || r["defaultValue" + C] || r["defaultValue" + A] || r[e(1276)];
    let q = m;
    O && !m && I && (q = L);
    const N = Ha(q), $ = Object[e(757)][e(2643)][e(2832)](q);
    if (O && q && N && P[e(2098)]($) < 0 && !(g0(F) && Array[e(1320)](q))) {
      if (!r[e(2949)] && !this[e(2308)][e(2949)]) {
        !this.options[e(2453)] && this[e(1476)].warn("accessing an object - but returnObjects options is not enabled!");
        const H = this[e(2308)][e(2453)] ? this[e(2308)][e(2453)](v, q, { ...r, ns: d }) : e(1959) + c + " (" + this.language + e(1319);
        return n ? (h[e(1360)] = H, h[e(2974)] = this[e(2538)](r), h) : H;
      }
      if (o) {
        const H = Array[e(1320)](q), V = H ? [] : {}, G = H ? S : v;
        for (const c0 in q)
          if (Object[e(757)].hasOwnProperty[e(983)](q, c0)) {
            const d0 = "" + G + o + c0;
            I && !m ? V[c0] = this[e(2163)](d0, { ...r, defaultValue: Ha(L) ? L[c0] : void 0, joinArrays: !1, ns: d }) : V[c0] = this[e(2163)](d0, { ...r, joinArrays: !1, ns: d }), V[c0] === d0 && (V[c0] = q[c0]);
          }
        m = V;
      }
    } else if (O && g0(F) && Array[e(1320)](m))
      m = m[e(727)](F), m && (m = this[e(933)](m, x, r, s));
    else {
      let H = !1, V = !1;
      !this[e(674)](m) && I && (H = !0, m = L), !this[e(674)](m) && (V = !0, m = c);
      const G = r[e(1608)] || this.options.missingKeyNoValueFallbackToKey, c0 = G && V ? void 0 : m, d0 = I && L !== m && this[e(2308)].updateMissing;
      if (V || H || d0) {
        if (this[e(1476)].log(e(d0 ? 964 : 1660), l, u, c, d0 ? L : m), o) {
          const k0 = this[e(1362)](c, { ...r, keySeparator: !1 });
          k0 && k0[e(1360)] && this.logger[e(2175)](e(1061));
        }
        let l0 = [];
        const o0 = this.languageUtils.getFallbackCodes(this[e(2308)].fallbackLng, r[e(2474)] || this[e(2723)]);
        if (this[e(2308)][e(1863)] === e(950) && o0 && o0[0]) for (let k0 = 0; k0 < o0[e(1492)]; k0++)
          l0[e(893)](o0[k0]);
        else this[e(2308)][e(1863)] === e(2380) ? l0 = this[e(1698)].toResolveHierarchy(r[e(2474)] || this[e(2723)]) : l0[e(893)](r[e(2474)] || this[e(2723)]);
        const f0 = (k0, y0, M0) => {
          var D;
          const F0 = e, Y0 = I && M0 !== m ? M0 : c0;
          this[F0(2308)].missingKeyHandler ? this[F0(2308)][F0(1199)](k0, u, y0, Y0, d0, r) : (D = this[F0(2194)]) != null && D[F0(1279)] && this[F0(2194)][F0(1279)](k0, u, y0, Y0, d0, r), this.emit("missingKey", k0, u, y0, m);
        };
        this[e(2308)].saveMissing && (this[e(2308)][e(1751)] && R ? l0[e(1615)]((k0) => {
          const y0 = e, M0 = this[y0(1496)].getSuffixes(k0, r);
          j && r[y0(1276) + this[y0(2308)].pluralSeparator + y0(2986)] && M0[y0(2098)](this[y0(2308)][y0(2972)] + y0(2986)) < 0 && M0[y0(893)](this[y0(2308)].pluralSeparator + y0(2986)), M0[y0(1615)]((F0) => {
            f0([k0], c + F0, r["defaultValue" + F0] || L);
          });
        }) : f0(l0, c, L));
      }
      m = this[e(933)](m, x, r, h, s), V && m === c && this.options[e(1076)] && (m = "" + u + f + c), (V || H) && this[e(2308)].parseMissingKeyHandler && (m = this.options.parseMissingKeyHandler(this[e(2308)][e(1076)] ? "" + u + f + c : c, H ? m : void 0, r));
    }
    return n ? (h[e(1360)] = m, h[e(2974)] = this.getUsedParamsDetails(r), h) : m;
  }
  [a(933)](x, t, s, e, r) {
    var d, u;
    const n = a;
    if ((d = this[n(831)]) != null && d[n(1205)]) x = this[n(831)][n(1205)](x, { ...this[n(2308)][n(1056)].defaultVariables, ...s }, s[n(2474)] || this[n(2723)] || e[n(1182)], e[n(2003)], e.usedKey, { resolved: e });
    else if (!s[n(1035)]) {
      s[n(1056)] && this.interpolator.init({ ...s, interpolation: { ...this[n(2308)][n(1056)], ...s[n(1056)] } });
      const f = g0(x) && (((u = s == null ? void 0 : s[n(1056)]) == null ? void 0 : u[n(2817)]) !== void 0 ? s[n(1056)][n(2817)] : this[n(2308)].interpolation.skipOnVariables);
      let l;
      if (f) {
        const h = x.match(this[n(1096)][n(1890)]);
        l = h && h[n(1492)];
      }
      let g = s.replace && !g0(s[n(499)]) ? s[n(499)] : s;
      if (this[n(2308)][n(1056)][n(2737)] && (g = { ...this[n(2308)].interpolation[n(2737)], ...g }), x = this.interpolator[n(747)](x, g, s[n(2474)] || this[n(2723)] || e[n(1182)], s), f) {
        const h = x[n(2467)](this[n(1096)][n(1890)]), m = h && h[n(1492)];
        l < m && (s[n(654)] = !1);
      }
      !s[n(2474)] && e && e.res && (s[n(2474)] = this.language || e.usedLng), s[n(654)] !== !1 && (x = this.interpolator[n(654)](x, (...h) => {
        const m = n;
        return (r == null ? void 0 : r[0]) === h[0] && !s[m(625)] ? (this.logger[m(2175)](m(818) + h[0] + m(955) + t[0]), null) : this[m(2163)](...h, t);
      }, s)), s.interpolation && this[n(1096)].reset();
    }
    const o = s[n(973)] || this[n(2308)].postProcess, c = g0(o) ? [o] : o;
    return x != null && (c != null && c[n(1492)]) && s.applyPostProcessor !== !1 && (x = Zs[n(2964)](c, x, t, this[n(2308)] && this[n(2308)][n(2306)] ? { i18nResolved: { ...e, usedParams: this.getUsedParamsDetails(s) }, ...s } : s, this)), x;
  }
  [a(1362)](x, t = {}) {
    const s = a;
    let e, r, n, o, c;
    return g0(x) && (x = [x]), x[s(1615)]((d) => {
      const u = s;
      if (this.isValidLookup(e)) return;
      const f = this.extractFromKey(d, t), l = f[u(771)];
      r = l;
      let g = f[u(1624)];
      this[u(2308)][u(714)] && (g = g.concat(this[u(2308)][u(714)]));
      const h = t[u(1644)] !== void 0 && !g0(t.count), m = h && !t[u(2289)] && t[u(1644)] === 0, v = t[u(625)] !== void 0 && (g0(t[u(625)]) || typeof t[u(625)] === u(1120)) && t[u(625)] !== "", S = t[u(2759)] ? t.lngs : this[u(1698)].toResolveHierarchy(t.lng || this.language, t[u(2531)]);
      g[u(1615)]((P) => {
        var O, R;
        const F = u;
        this[F(674)](e) || (c = P, !Ua[S[0] + "-" + P] && ((O = this[F(1036)]) != null && O[F(1336)]) && !((R = this[F(1036)]) != null && R.hasLoadedNamespace(c)) && (Ua[S[0] + "-" + P] = !0, this[F(1476)][F(2175)]('key "' + r + F(1306) + S[F(727)](", ") + `" won't get resolved as namespace "` + c + F(1240), F(584))), S.forEach((I) => {
          var L;
          const C = F;
          if (this[C(674)](e)) return;
          o = I;
          const A = [l];
          if ((L = this.i18nFormat) != null && L.addLookupKeys) this[C(831)].addLookupKeys(A, l, I, P, t);
          else {
            let q;
            h && (q = this[C(1496)][C(1878)](I, t.count, t));
            const N = this[C(2308)][C(2972)] + C(2986), $ = this[C(2308)].pluralSeparator + C(2289) + this[C(2308)][C(2972)];
            if (h && (A[C(893)](l + q), t[C(2289)] && q[C(2098)]($) === 0 && A.push(l + q.replace($, this.options[C(2972)])), m && A[C(893)](l + N)), v) {
              const H = "" + l + this[C(2308)][C(1008)] + t[C(625)];
              A[C(893)](H), h && (A[C(893)](H + q), t[C(2289)] && q[C(2098)]($) === 0 && A[C(893)](H + q[C(499)]($, this.options[C(2972)])), m && A[C(893)](H + N));
            }
          }
          let j;
          for (; j = A.pop(); )
            !this[C(674)](e) && (n = j, e = this[C(2850)](I, P, j, t));
        }));
      });
    }), { res: e, usedKey: r, exactUsedKey: n, usedLng: o, usedNS: c };
  }
  isValidLookup(x) {
    const t = a;
    return x !== void 0 && !(!this[t(2308)][t(636)] && x === null) && !(!this[t(2308)][t(2639)] && x === "");
  }
  [a(2850)](x, t, s, e = {}) {
    var n;
    const r = a;
    return (n = this.i18nFormat) != null && n[r(2850)] ? this[r(831)].getResource(x, t, s, e) : this.resourceStore[r(2850)](x, t, s, e);
  }
  [a(2538)](x = {}) {
    const t = a, s = [t(1276), t(2289), t(625), t(499), t(2474), t(2759), "fallbackLng", "ns", "keySeparator", t(2107), t(2949), "returnDetails", t(754), "postProcess", "interpolation"], e = x[t(499)] && !g0(x[t(499)]);
    let r = e ? x.replace : x;
    if (e && typeof x[t(1644)] < "u" && (r[t(1644)] = x[t(1644)]), this.options.interpolation[t(2737)] && (r = { ...this[t(2308)][t(1056)].defaultVariables, ...r }), !e) {
      r = { ...r };
      for (const n of s)
        delete r[n];
    }
    return r;
  }
  static [a(2713)](x) {
    const t = a, s = "defaultValue";
    for (const e in x)
      if (Object.prototype[t(2472)][t(983)](x, e) && s === e[t(1932)](0, s[t(1492)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Va {
  constructor(x) {
    const t = a;
    this[t(2308)] = x, this[t(570)] = this[t(2308)][t(570)] || !1, this[t(1476)] = fe[t(2587)](t(1698));
  }
  getScriptPartFromCode(x) {
    const t = a;
    if (x = rx(x), !x || x[t(2098)]("-") < 0) return null;
    const s = x[t(2889)]("-");
    return s.length === 2 || (s[t(867)](), s[s[t(1492)] - 1][t(1861)]() === "x") ? null : this[t(1499)](s[t(727)]("-"));
  }
  [a(2721)](x) {
    const t = a;
    if (x = rx(x), !x || x[t(2098)]("-") < 0) return x;
    const s = x[t(2889)]("-");
    return this[t(1499)](s[0]);
  }
  formatLanguageCode(x) {
    const t = a;
    if (g0(x) && x.indexOf("-") > -1) {
      let s;
      try {
        s = Intl[t(2760)](x)[0];
      } catch {
      }
      return s && this.options.lowerCaseLng && (s = s[t(1861)]()), s || (this[t(2308)][t(2468)] ? x[t(1861)]() : x);
    }
    return this[t(2308)][t(1338)] || this.options[t(2468)] ? x[t(1861)]() : x;
  }
  [a(1520)](x) {
    const t = a;
    return (this[t(2308)][t(869)] === "languageOnly" || this.options[t(1301)]) && (x = this[t(2721)](x)), !this[t(570)] || !this[t(570)][t(1492)] || this[t(570)].indexOf(x) > -1;
  }
  getBestMatchFromCodes(x) {
    const t = a;
    if (!x) return null;
    let s;
    return x[t(1615)]((e) => {
      const r = t;
      if (s) return;
      const n = this[r(1499)](e);
      (!this.options[r(570)] || this.isSupportedCode(n)) && (s = n);
    }), !s && this.options[t(570)] && x.forEach((e) => {
      const r = t;
      if (s) return;
      const n = this.getScriptPartFromCode(e);
      if (this[r(1520)](n)) return s = n;
      const o = this[r(2721)](e);
      if (this[r(1520)](o)) return s = o;
      s = this[r(2308)][r(570)].find((c) => {
        const d = r;
        if (c === o) return c;
        if (!(c[d(2098)]("-") < 0 && o[d(2098)]("-") < 0) && (c.indexOf("-") > 0 && o[d(2098)]("-") < 0 && c.substring(0, c[d(2098)]("-")) === o || c[d(2098)](o) === 0 && o[d(1492)] > 1))
          return c;
      });
    }), s || (s = this[t(1027)](this[t(2308)][t(2531)])[0]), s;
  }
  [a(1027)](x, t) {
    const s = a;
    if (!x) return [];
    if (typeof x == "function" && (x = x(t)), g0(x) && (x = [x]), Array.isArray(x)) return x;
    if (!t) return x.default || [];
    let e = x[t];
    return e || (e = x[this[s(2492)](t)]), e || (e = x[this.formatLanguageCode(t)]), e || (e = x[this[s(2721)](t)]), e || (e = x.default), e || [];
  }
  [a(2932)](x, t) {
    const s = a, e = this[s(1027)]((t === !1 ? [] : t) || this.options[s(2531)] || [], x), r = [], n = (o) => {
      const c = s;
      o && (this[c(1520)](o) ? r[c(893)](o) : this.logger.warn("rejecting language code not found in supportedLngs: " + o));
    };
    return g0(x) && (x.indexOf("-") > -1 || x[s(2098)]("_") > -1) ? (this[s(2308)][s(869)] !== s(2521) && n(this[s(1499)](x)), this.options[s(869)] !== s(2521) && this[s(2308)].load !== "currentOnly" && n(this[s(2492)](x)), this[s(2308)][s(869)] !== "currentOnly" && n(this.getLanguagePartFromCode(x))) : g0(x) && n(this.formatLanguageCode(x)), e[s(1615)]((o) => {
      const c = s;
      r[c(2098)](o) < 0 && n(this[c(1499)](o));
    }), r;
  }
}
const Za = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Ba = { select: (i) => a(i === 1 ? 1723 : 721), resolvedOptions: () => ({ pluralCategories: [a(1723), a(721)] }) };
class ho {
  constructor(x, t = {}) {
    const s = a;
    this.languageUtils = x, this[s(2308)] = t, this[s(1476)] = fe[s(2587)](s(1496)), this[s(1515)] = {};
  }
  [a(1760)](x, t) {
    const s = a;
    this[s(2885)][x] = t;
  }
  [a(1722)]() {
    const x = a;
    this[x(1515)] = {};
  }
  [a(986)](x, t = {}) {
    const s = a, e = rx(x === s(1236) ? "en" : x), r = t[s(2289)] ? s(2289) : "cardinal", n = JSON.stringify({ cleanedCode: e, type: r });
    if (n in this[s(1515)]) return this.pluralRulesCache[n];
    let o;
    try {
      o = new Intl[s(2426)](e, { type: r });
    } catch {
      if (!Intl) return this[s(1476)][s(1978)](s(2437)), Ba;
      if (!x[s(2467)](/-|_/)) return Ba;
      const d = this.languageUtils.getLanguagePartFromCode(x);
      o = this[s(986)](d, t);
    }
    return this[s(1515)][n] = o, o;
  }
  [a(2619)](x, t = {}) {
    const s = a;
    let e = this[s(986)](x, t);
    return e || (e = this[s(986)]("dev", t)), (e == null ? void 0 : e[s(1305)]()[s(1842)].length) > 1;
  }
  [a(2953)](x, t, s = {}) {
    return this[a(538)](x, s).map((r) => "" + t + r);
  }
  [a(538)](x, t = {}) {
    const s = a;
    let e = this[s(986)](x, t);
    return e || (e = this.getRule("dev", t)), e ? e.resolvedOptions()[s(1842)].sort((r, n) => Za[r] - Za[n])[s(1790)]((r) => "" + this[s(2308)][s(2529)] + (t[s(2289)] ? s(2289) + this.options.prepend : "") + r) : [];
  }
  getSuffix(x, t, s = {}) {
    const e = a, r = this[e(986)](x, s);
    return r ? "" + this.options[e(2529)] + (s[e(2289)] ? e(2289) + this.options.prepend : "") + r[e(2946)](t) : (this.logger[e(2175)]("no plural rule found for: " + x), this[e(1878)]("dev", t, s));
  }
}
const Wa = (i, x, t, s = ".", e = !0) => {
  let r = so(i, x, t);
  return !r && e && g0(t) && (r = Wt(i, t, s), r === void 0 && (r = Wt(x, t, s))), r;
}, Zx = (i) => i[a(499)](/\$/g, a(622));
class po {
  constructor(x = {}) {
    var s;
    const t = a;
    this[t(1476)] = fe[t(2587)](t(1096)), this[t(2308)] = x, this[t(2503)] = ((s = x == null ? void 0 : x[t(1056)]) == null ? void 0 : s[t(2503)]) || ((e) => e), this.init(x);
  }
  [a(2250)](x = {}) {
    const t = a;
    x.interpolation || (x[t(1056)] = { escapeValue: !0 });
    const { escape: s, escapeValue: e, useRawValueToEscape: r, prefix: n, prefixEscaped: o, suffix: c, suffixEscaped: d, formatSeparator: u, unescapeSuffix: f, unescapePrefix: l, nestingPrefix: g, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: v, nestingOptionsSeparator: S, maxReplaces: P, alwaysFormat: F } = x.interpolation;
    this[t(2550)] = s !== void 0 ? s : io, this[t(1226)] = e !== void 0 ? e : !0, this[t(1794)] = r !== void 0 ? r : !1, this.prefix = n ? Ue(n) : o || "{{", this[t(2206)] = c ? Ue(c) : d || "}}", this[t(1042)] = u || ",", this[t(1009)] = f ? "" : l || "-", this[t(1593)] = this[t(1009)] ? "" : f || "", this[t(1367)] = g ? Ue(g) : h || Ue(t(1692)), this.nestingSuffix = m ? Ue(m) : v || Ue(")"), this[t(1445)] = S || ",", this.maxReplaces = P || 1e3, this[t(2104)] = F !== void 0 ? F : !1, this.resetRegExp();
  }
  [a(2980)]() {
    const x = a;
    this[x(2308)] && this[x(2250)](this.options);
  }
  [a(2934)]() {
    const x = a, t = (s, e) => {
      const r = K;
      return (s == null ? void 0 : s.source) === e ? (s[r(2897)] = 0, s) : new RegExp(e, "g");
    };
    this[x(1213)] = t(this[x(1213)], this[x(2821)] + x(2519) + this[x(2206)]), this[x(1618)] = t(this[x(1618)], "" + this[x(2821)] + this[x(1009)] + "(.+?)" + this[x(1593)] + this.suffix), this.nestingRegexp = t(this[x(1890)], this.nestingPrefix + x(2519) + this[x(562)]);
  }
  [a(747)](x, t, s, e) {
    var h;
    const r = a;
    let n, o, c;
    const d = this[r(2308)] && this.options[r(1056)] && this[r(2308)].interpolation[r(2737)] || {}, u = (m) => {
      const v = r;
      if (m.indexOf(this.formatSeparator) < 0) {
        const O = Wa(t, d, m, this[v(2308)].keySeparator, this.options[v(1717)]);
        return this[v(2104)] ? this.format(O, void 0, s, { ...e, ...t, interpolationkey: m }) : O;
      }
      const S = m.split(this.formatSeparator), P = S[v(2388)]().trim(), F = S[v(727)](this[v(1042)])[v(2040)]();
      return this.format(Wa(t, d, P, this[v(2308)].keySeparator, this[v(2308)][v(1717)]), F, s, { ...e, ...t, interpolationkey: P });
    };
    this[r(2934)]();
    const f = (e == null ? void 0 : e[r(2650)]) || this[r(2308)][r(2650)], l = ((h = e == null ? void 0 : e.interpolation) == null ? void 0 : h.skipOnVariables) !== void 0 ? e[r(1056)].skipOnVariables : this[r(2308)][r(1056)][r(2817)];
    return [{ regex: this.regexpUnescape, safeValue: (m) => Zx(m) }, { regex: this[r(1213)], safeValue: (m) => this[r(1226)] ? Zx(this.escape(m)) : Zx(m) }][r(1615)]((m) => {
      const v = r;
      for (c = 0; n = m[v(1910)][v(2676)](x); ) {
        const S = n[1][v(2040)]();
        if (o = u(S), o === void 0)
          if (typeof f === v(621)) {
            const F = f(x, n, e);
            o = g0(F) ? F : "";
          } else if (e && Object.prototype[v(2472)][v(983)](e, S)) o = "";
          else if (l) {
            o = n[0];
            continue;
          } else this[v(1476)].warn(v(2167) + S + v(1085) + x), o = "";
        else !g0(o) && !this.useRawValueToEscape && (o = ja(o));
        const P = m[v(678)](o);
        if (x = x[v(499)](n[0], P), l ? (m[v(1910)][v(2897)] += o.length, m[v(1910)][v(2897)] -= n[0].length) : m.regex.lastIndex = 0, c++, c >= this[v(2130)]) break;
      }
    }), x;
  }
  nest(x, t, s = {}) {
    const e = a;
    let r, n, o;
    const c = (d, u) => {
      const f = K, l = this[f(1445)];
      if (d[f(2098)](l) < 0) return d;
      const g = d.split(new RegExp(l + f(1197)));
      let h = "{" + g[1];
      d = g[0], h = this.interpolate(h, o);
      const m = h.match(/'/g), v = h.match(/"/g);
      (((m == null ? void 0 : m[f(1492)]) ?? 0) % 2 === 0 && !v || v[f(1492)] % 2 !== 0) && (h = h[f(499)](/'/g, '"'));
      try {
        o = JSON[f(1205)](h), u && (o = { ...u, ...o });
      } catch (S) {
        return this[f(1476)][f(2175)]("failed parsing options string in nesting for key " + d, S), "" + d + l + h;
      }
      return o[f(1276)] && o[f(1276)][f(2098)](this[f(2821)]) > -1 && delete o[f(1276)], d;
    };
    for (; r = this.nestingRegexp.exec(x); ) {
      let d = [];
      o = { ...s }, o = o.replace && !g0(o[e(499)]) ? o[e(499)] : o, o[e(728)] = !1, delete o[e(1276)];
      let u = !1;
      if (r[0][e(2098)](this[e(1042)]) !== -1 && !/{.*}/[e(2553)](r[1])) {
        const f = r[1][e(2889)](this[e(1042)])[e(1790)]((l) => l[e(2040)]());
        r[1] = f[e(2388)](), d = f, u = !0;
      }
      if (n = t(c.call(this, r[1][e(2040)](), o), o), n && r[0] === x && !g0(n)) return n;
      g0(n) || (n = ja(n)), !n && (this[e(1476)].warn(e(1531) + r[1] + e(1235) + x), n = ""), u && (n = d.reduce((f, l) => this[e(2503)](f, l, s[e(2474)], { ...s, interpolationkey: r[1].trim() }), n[e(2040)]())), x = x.replace(r[0], n), this.regexp[e(2897)] = 0;
    }
    return x;
  }
}
const mo = (i) => {
  const x = a;
  let t = i.toLowerCase()[x(2040)]();
  const s = {};
  if (i[x(2098)]("(") > -1) {
    const e = i[x(2889)]("(");
    t = e[0][x(1861)]()[x(2040)]();
    const r = e[1].substring(0, e[1].length - 1);
    t === x(1973) && r.indexOf(":") < 0 ? s[x(1973)] || (s.currency = r.trim()) : t === x(2632) && r[x(2098)](":") < 0 ? s[x(706)] || (s[x(706)] = r[x(2040)]()) : r[x(2889)](";").forEach((o) => {
      const c = x;
      if (o) {
        const [d, ...u] = o.split(":"), f = u[c(727)](":")[c(2040)]()[c(499)](/^'+|'+$/g, ""), l = d[c(2040)]();
        s[l] || (s[l] = f), f === c(2251) && (s[l] = !1), f === c(1625) && (s[l] = !0), isNaN(f) || (s[l] = parseInt(f, 10));
      }
    });
  }
  return { formatName: t, formatOptions: s };
}, Ka = (i) => {
  const x = {};
  return (t, s, e) => {
    const r = K;
    let n = e;
    e && e[r(2780)] && e[r(1190)] && e[r(1190)][e[r(2780)]] && e[e[r(2780)]] && (n = { ...n, [e[r(2780)]]: void 0 });
    const o = s + JSON.stringify(n);
    let c = x[o];
    return !c && (c = i(rx(s), e), x[o] = c), c(t);
  };
}, go = (i) => (x, t, s) => i(rx(t), s)(x);
class bo {
  constructor(x = {}) {
    const t = a;
    this.logger = fe[t(2587)](t(2220)), this.options = x, this[t(2250)](x);
  }
  [a(2250)](x, t = { interpolation: {} }) {
    const s = a;
    this[s(1042)] = t.interpolation.formatSeparator || ",";
    const e = t[s(2802)] ? Ka : go;
    this.formats = { number: e((r, n) => {
      const o = s, c = new Intl.NumberFormat(r, { ...n });
      return (d) => c[o(2503)](d);
    }), currency: e((r, n) => {
      const o = s, c = new Intl.NumberFormat(r, { ...n, style: o(1973) });
      return (d) => c[o(2503)](d);
    }), datetime: e((r, n) => {
      const o = new Intl.DateTimeFormat(r, { ...n });
      return (c) => o.format(c);
    }), relativetime: e((r, n) => {
      const o = s, c = new Intl[o(1881)](r, { ...n });
      return (d) => c[o(2503)](d, n[o(706)] || "day");
    }), list: e((r, n) => {
      const o = s, c = new Intl[o(596)](r, { ...n });
      return (d) => c[o(2503)](d);
    }) };
  }
  [a(911)](x, t) {
    const s = a;
    this.formats[x[s(1861)]()[s(2040)]()] = t;
  }
  [a(2302)](x, t) {
    const s = a;
    this.formats[x.toLowerCase()[s(2040)]()] = Ka(t);
  }
  [a(2503)](x, t, s, e = {}) {
    const r = a, n = t.split(this[r(1042)]);
    if (n.length > 1 && n[0][r(2098)]("(") > 1 && n[0][r(2098)](")") < 0 && n[r(1284)]((c) => c[r(2098)](")") > -1)) {
      const c = n[r(2785)]((d) => d[r(2098)](")") > -1);
      n[0] = [n[0], ...n[r(1401)](1, c)][r(727)](this[r(1042)]);
    }
    return n[r(787)]((c, d) => {
      var g;
      const u = r, { formatName: f, formatOptions: l } = mo(d);
      if (this[u(2463)][f]) {
        let h = c;
        try {
          const m = ((g = e == null ? void 0 : e.formatParams) == null ? void 0 : g[e[u(2780)]]) || {}, v = m[u(2127)] || m[u(2474)] || e.locale || e[u(2474)] || s;
          h = this.formats[f](c, v, { ...l, ...e, ...m });
        } catch (m) {
          this[u(1476)].warn(m);
        }
        return h;
      } else this.logger[u(2175)](u(1464) + f);
      return c;
    }, x);
  }
}
const yo = (i, x) => {
  const t = a;
  i[t(1334)][x] !== void 0 && (delete i[t(1334)][x], i[t(2082)]--);
};
class vo extends qx {
  constructor(x, t, s, e = {}) {
    var n, o;
    const r = a;
    super(), this[r(658)] = x, this[r(2390)] = t, this[r(1789)] = s, this[r(1698)] = s[r(1698)], this[r(2308)] = e, this[r(1476)] = fe.create(r(2194)), this[r(619)] = [], this.maxParallelReads = e[r(1439)] || 10, this[r(1899)] = 0, this[r(2745)] = e[r(2745)] >= 0 ? e.maxRetries : 5, this[r(1847)] = e.retryTimeout >= 1 ? e[r(1847)] : 350, this[r(846)] = {}, this[r(2182)] = [], (o = (n = this.backend) == null ? void 0 : n[r(2250)]) == null || o.call(n, s, e[r(658)], e);
  }
  [a(1607)](x, t, s, e) {
    const r = a, n = {}, o = {}, c = {}, d = {};
    return x[r(1615)]((u) => {
      let f = !0;
      t.forEach((l) => {
        const g = K, h = u + "|" + l;
        !s[g(1793)] && this.store[g(2907)](u, l) ? this[g(846)][h] = 2 : this.state[h] < 0 || (this[g(846)][h] === 1 ? o[h] === void 0 && (o[h] = !0) : (this[g(846)][h] = 1, f = !1, o[h] === void 0 && (o[h] = !0), n[h] === void 0 && (n[h] = !0), d[l] === void 0 && (d[l] = !0)));
      }), f || (c[u] = !0);
    }), (Object.keys(n)[r(1492)] || Object[r(2693)](o)[r(1492)]) && this.queue[r(893)]({ pending: o, pendingCount: Object[r(2693)](o)[r(1492)], loaded: {}, errors: [], callback: e }), { toLoad: Object[r(2693)](n), pending: Object[r(2693)](o), toLoadLanguages: Object[r(2693)](c), toLoadNamespaces: Object[r(2693)](d) };
  }
  loaded(x, t, s) {
    const e = a, r = x[e(2889)]("|"), n = r[0], o = r[1];
    t && this.emit(e(1631), n, o, t), !t && s && this[e(2390)][e(1737)](n, o, s, void 0, void 0, { skipCopy: !0 }), this[e(846)][x] = t ? -1 : 2, t && s && (this.state[x] = 0);
    const c = {};
    this[e(2182)][e(1615)]((d) => {
      const u = e;
      ro(d.loaded, [n], o), yo(d, x), t && d[u(862)].push(t), d[u(2082)] === 0 && !d.done && (Object[u(2693)](d[u(913)]).forEach((f) => {
        const l = u;
        c[f] || (c[f] = {});
        const g = d[l(913)][f];
        g[l(1492)] && g[l(1615)]((h) => {
          c[f][h] === void 0 && (c[f][h] = !0);
        });
      }), d[u(1600)] = !0, d.errors[u(1492)] ? d[u(2369)](d.errors) : d[u(2369)]());
    }), this[e(958)](e(913), c), this[e(2182)] = this[e(2182)][e(861)]((d) => !d[e(1600)]);
  }
  [a(2222)](x, t, s, e = 0, r = this[a(1847)], n) {
    const o = a;
    if (!x.length) return n(null, {});
    if (this[o(1899)] >= this.maxParallelReads) {
      this.waitingReads[o(893)]({ lng: x, ns: t, fcName: s, tried: e, wait: r, callback: n });
      return;
    }
    this[o(1899)]++;
    const c = (u, f) => {
      const l = o;
      if (this[l(1899)]--, this.waitingReads[l(1492)] > 0) {
        const g = this[l(619)][l(2388)]();
        this[l(2222)](g[l(2474)], g.ns, g[l(1640)], g[l(1431)], g[l(1752)], g[l(2369)]);
      }
      if (u && f && e < this.maxRetries) {
        setTimeout(() => {
          const g = l;
          this[g(2222)][g(983)](this, x, t, s, e + 1, r * 2, n);
        }, r);
        return;
      }
      n(u, f);
    }, d = this.backend[s][o(2654)](this[o(658)]);
    if (d[o(1492)] === 2) {
      try {
        const u = d(x, t);
        u && typeof u[o(2139)] === o(621) ? u.then((f) => c(null, f))[o(2678)](c) : c(null, u);
      } catch (u) {
        c(u);
      }
      return;
    }
    return d(x, t, c);
  }
  prepareLoading(x, t, s = {}, e) {
    const r = a;
    if (!this.backend) return this.logger[r(2175)](r(1285)), e && e();
    g0(x) && (x = this.languageUtils[r(2932)](x)), g0(t) && (t = [t]);
    const n = this.queueLoad(x, t, s, e);
    if (!n.toLoad.length)
      return n[r(1334)][r(1492)] || e(), null;
    n.toLoad[r(1615)]((o) => {
      this[r(651)](o);
    });
  }
  [a(869)](x, t, s) {
    this[a(2812)](x, t, {}, s);
  }
  reload(x, t, s) {
    this[a(2812)](x, t, { reload: !0 }, s);
  }
  [a(651)](x, t = "") {
    const s = a, e = x[s(2889)]("|"), r = e[0], n = e[1];
    this[s(2222)](r, n, s(2222), void 0, void 0, (o, c) => {
      const d = s;
      o && this[d(1476)][d(2175)](t + d(2828) + n + d(2690) + r + d(2124), o), !o && c && this[d(1476)][d(1017)](t + d(1562) + n + d(2690) + r, c), this[d(913)](x, o, c);
    });
  }
  [a(1279)](x, t, s, e, r, n = {}, o = () => {
  }) {
    var d, u, f, l, g;
    const c = a;
    if ((u = (d = this.services) == null ? void 0 : d[c(1036)]) != null && u.hasLoadedNamespace && !((l = (f = this[c(1789)]) == null ? void 0 : f[c(1036)]) != null && l[c(1336)](t))) {
      this[c(1476)][c(2175)](c(2318) + s + c(2943) + t + c(1240), c(584));
      return;
    }
    if (!(s == null || s === "")) {
      if ((g = this[c(658)]) != null && g[c(2587)]) {
        const h = { ...n, isUpdate: r }, m = this[c(658)][c(2587)].bind(this[c(658)]);
        if (m.length < 6) try {
          let v;
          m[c(1492)] === 5 ? v = m(x, t, s, e, h) : v = m(x, t, s, e), v && typeof v[c(2139)] === c(621) ? v.then((S) => o(null, S))[c(2678)](o) : o(null, v);
        } catch (v) {
          o(v);
        }
        else m(x, t, s, e, o, h);
      }
      !x || !x[0] || this[c(2390)].addResource(x[0], t, s, e);
    }
  }
}
const Ga = () => ({ debug: !1, initAsync: !0, ns: [a(1971)], defaultNS: [a(1971)], fallbackLng: [a(1236)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: a(2380), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: a(950), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (i) => {
  const x = a;
  let t = {};
  if (typeof i[1] === x(2535) && (t = i[1]), g0(i[1]) && (t[x(1276)] = i[1]), g0(i[2]) && (t[x(1011)] = i[2]), typeof i[2] == "object" || typeof i[3] === x(2535)) {
    const s = i[3] || i[2];
    Object[x(2693)](s)[x(1615)]((e) => {
      t[e] = s[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (i) => i, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: a(1692), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), Ja = (i) => {
  var t, s;
  const x = a;
  return g0(i.ns) && (i.ns = [i.ns]), g0(i[x(2531)]) && (i[x(2531)] = [i[x(2531)]]), g0(i[x(714)]) && (i.fallbackNS = [i[x(714)]]), ((s = (t = i[x(570)]) == null ? void 0 : t.indexOf) == null ? void 0 : s.call(t, x(2917))) < 0 && (i[x(570)] = i[x(570)][x(2004)](["cimode"])), typeof i[x(2570)] === x(2173) && (i.initAsync = i[x(2570)]), i;
}, lx = () => {
}, wo = (i) => {
  const x = a;
  Object[x(982)](Object[x(1592)](i))[x(1615)]((s) => {
    const e = x;
    typeof i[s] == "function" && (i[s] = i[s][e(2654)](i));
  });
};
class sx extends qx {
  constructor(x = {}, t) {
    const s = a;
    if (super(), this[s(2308)] = Ja(x), this[s(1789)] = {}, this.logger = fe, this[s(1088)] = { external: [] }, wo(this), t && !this[s(960)] && !x[s(2701)]) {
      if (!this[s(2308)][s(2983)]) return this[s(2250)](x, t), this;
      setTimeout(() => {
        this[s(2250)](x, t);
      }, 0);
    }
  }
  init(x = {}, t) {
    const s = a;
    this[s(2253)] = !0, typeof x === s(621) && (t = x, x = {}), x[s(628)] == null && x.ns && (g0(x.ns) ? x.defaultNS = x.ns : x.ns[s(2098)](s(1971)) < 0 && (x[s(628)] = x.ns[0]));
    const e = Ga();
    this.options = { ...e, ...this[s(2308)], ...Ja(x) }, this[s(2308)][s(1056)] = { ...e[s(1056)], ...this.options[s(1056)] }, x[s(2411)] !== void 0 && (this[s(2308)].userDefinedKeySeparator = x[s(2411)]), x[s(2107)] !== void 0 && (this[s(2308)][s(2259)] = x.nsSeparator);
    const r = (u) => {
      const f = s;
      return u ? typeof u === f(621) ? new u() : u : null;
    };
    if (!this[s(2308)][s(2701)]) {
      this[s(1088)].logger ? fe[s(2250)](r(this[s(1088)][s(1476)]), this.options) : fe[s(2250)](null, this[s(2308)]);
      let u;
      this[s(1088)][s(2220)] ? u = this[s(1088)][s(2220)] : u = bo;
      const f = new Va(this.options);
      this[s(2390)] = new za(this[s(2308)].resources, this[s(2308)]);
      const l = this[s(1789)];
      l[s(1476)] = fe, l[s(2041)] = this.store, l[s(1698)] = f, l[s(1496)] = new ho(f, { prepend: this[s(2308)].pluralSeparator, simplifyPluralSuffix: this[s(2308)][s(2460)] }), u && (!this.options[s(1056)][s(2503)] || this[s(2308)][s(1056)][s(2503)] === e[s(1056)][s(2503)]) && (l[s(2220)] = r(u), l[s(2220)][s(2250)](l, this[s(2308)]), this[s(2308)][s(1056)][s(2503)] = l.formatter[s(2503)][s(2654)](l[s(2220)])), l[s(1096)] = new po(this[s(2308)]), l[s(1036)] = { hasLoadedNamespace: this.hasLoadedNamespace[s(2654)](this) }, l.backendConnector = new vo(r(this[s(1088)][s(658)]), l[s(2041)], l, this[s(2308)]), l[s(2194)].on("*", (g, ...h) => {
        this[s(958)](g, ...h);
      }), this[s(1088)][s(1798)] && (l[s(1798)] = r(this[s(1088)].languageDetector), l.languageDetector[s(2250)] && l[s(1798)][s(2250)](l, this.options[s(1736)], this.options)), this[s(1088)].i18nFormat && (l[s(831)] = r(this.modules[s(831)]), l.i18nFormat[s(2250)] && l[s(831)][s(2250)](this)), this[s(1538)] = new Fx(this[s(1789)], this.options), this.translator.on("*", (g, ...h) => {
        this[s(958)](g, ...h);
      }), this[s(1088)].external[s(1615)]((g) => {
        const h = s;
        g[h(2250)] && g[h(2250)](this);
      });
    }
    if (this[s(2503)] = this[s(2308)][s(1056)][s(2503)], t || (t = lx), this[s(2308)][s(2531)] && !this.services[s(1798)] && !this[s(2308)][s(2474)]) {
      const u = this[s(1789)].languageUtils[s(1027)](this.options[s(2531)]);
      u[s(1492)] > 0 && u[0] !== s(1236) && (this[s(2308)][s(2474)] = u[0]);
    }
    !this[s(1789)][s(1798)] && !this[s(2308)].lng && this[s(1476)][s(2175)](s(882)), ["getResource", s(2907), s(2051), s(514)][s(1615)]((u) => {
      this[u] = (...f) => this.store[u](...f);
    }), [s(1327), s(1162), s(1737), s(797)].forEach((u) => {
      this[u] = (...f) => (this[K(2390)][u](...f), this);
    });
    const c = Qe(), d = () => {
      const u = s, f = (l, g) => {
        const h = K;
        this[h(2253)] = !1, this.isInitialized && !this[h(2940)] && this[h(1476)][h(2175)](h(2520)), this[h(960)] = !0, this.options[h(2701)] || this[h(1476)][h(1017)](h(1812), this[h(2308)]), this[h(958)](h(1812), this.options), c[h(1362)](g), t(l, g);
      };
      if (this[u(2336)] && !this.isInitialized) return f(null, this.t[u(2654)](this));
      this.changeLanguage(this[u(2308)].lng, f);
    };
    return this[s(2308)][s(1206)] || !this[s(2308)][s(2983)] ? d() : setTimeout(d, 0), c;
  }
  [a(1601)](x, t = lx) {
    var n, o;
    const s = a;
    let e = t;
    const r = g0(x) ? x : this.language;
    if (typeof x === s(621) && (e = x), !this[s(2308)][s(1206)] || this.options.partialBundledLanguages) {
      if ((r == null ? void 0 : r[s(1861)]()) === s(2917) && (!this.options[s(1809)] || this[s(2308)][s(1809)][s(1492)] === 0)) return e();
      const c = [], d = (u) => {
        const f = s;
        if (!u || u === "cimode") return;
        this.services[f(1698)].toResolveHierarchy(u)[f(1615)]((g) => {
          const h = f;
          g !== "cimode" && c[h(2098)](g) < 0 && c[h(893)](g);
        });
      };
      r ? d(r) : this.services.languageUtils[s(1027)](this[s(2308)][s(2531)])[s(1615)]((f) => d(f)), (o = (n = this.options[s(1809)]) == null ? void 0 : n[s(1615)]) == null || o.call(n, (u) => d(u)), this[s(1789)][s(2194)][s(869)](c, this[s(2308)].ns, (u) => {
        const f = s;
        !u && !this[f(1873)] && this[f(2723)] && this[f(858)](this[f(2723)]), e(u);
      });
    } else e(null);
  }
  reloadResources(x, t, s) {
    const e = a, r = Qe();
    return typeof x === e(621) && (s = x, x = void 0), typeof t === e(621) && (s = t, t = void 0), x || (x = this.languages), t || (t = this.options.ns), s || (s = lx), this[e(1789)][e(2194)][e(1793)](x, t, (n) => {
      r.resolve(), s(n);
    }), r;
  }
  [a(2159)](x) {
    const t = a;
    if (!x) throw new Error(t(1181));
    if (!x[t(2417)]) throw new Error(t(834));
    return x[t(2417)] === t(658) && (this[t(1088)][t(658)] = x), (x[t(2417)] === t(1476) || x[t(1017)] && x[t(2175)] && x[t(1978)]) && (this.modules[t(1476)] = x), x[t(2417)] === t(1798) && (this[t(1088)].languageDetector = x), x[t(2417)] === "i18nFormat" && (this[t(1088)][t(831)] = x), x[t(2417)] === t(1942) && Zs[t(746)](x), x[t(2417)] === "formatter" && (this[t(1088)][t(2220)] = x), x[t(2417)] === t(1313) && this.modules[t(2511)][t(893)](x), this;
  }
  [a(858)](x) {
    const t = a;
    if (!(!x || !this[t(2336)]) && !([t(2917), t(1236)][t(2098)](x) > -1)) {
      for (let s = 0; s < this[t(2336)][t(1492)]; s++) {
        const e = this[t(2336)][s];
        if (!([t(2917), "dev"][t(2098)](e) > -1) && this[t(2390)].hasLanguageSomeTranslations(e)) {
          this[t(1873)] = e;
          break;
        }
      }
      !this[t(1873)] && this[t(2336)][t(2098)](x) < 0 && this.store[t(2984)](x) && (this[t(1873)] = x, this.languages.unshift(x));
    }
  }
  [a(1952)](x, t) {
    const s = a;
    this[s(881)] = x;
    const e = Qe();
    this.emit("languageChanging", x);
    const r = (c) => {
      const d = s;
      this[d(2723)] = c, this[d(2336)] = this[d(1789)][d(1698)][d(2932)](c), this[d(1873)] = void 0, this[d(858)](c);
    }, n = (c, d) => {
      const u = s;
      d ? this[u(881)] === x && (r(d), this[u(1538)][u(1952)](d), this[u(881)] = void 0, this.emit("languageChanged", d), this[u(1476)][u(1017)]("languageChanged", d)) : this[u(881)] = void 0, e.resolve((...f) => this.t(...f)), t && t(c, (...f) => this.t(...f));
    }, o = (c) => {
      var l, g;
      const d = s;
      !x && !c && this[d(1789)].languageDetector && (c = []);
      const u = g0(c) ? c : c && c[0], f = this[d(2390)][d(2984)](u) ? u : this[d(1789)][d(1698)][d(1314)](g0(c) ? [c] : c);
      f && (!this.language && r(f), this.translator[d(2723)] || this[d(1538)][d(1952)](f), (g = (l = this[d(1789)][d(1798)]) == null ? void 0 : l.cacheUserLanguage) == null || g.call(l, f)), this[d(1601)](f, (h) => {
        n(h, f);
      });
    };
    return !x && this[s(1789)][s(1798)] && !this[s(1789)][s(1798)][s(687)] ? o(this[s(1789)][s(1798)].detect()) : !x && this.services[s(1798)] && this[s(1789)][s(1798)][s(687)] ? this[s(1789)].languageDetector[s(2337)][s(1492)] === 0 ? this[s(1789)][s(1798)][s(2337)]().then(o) : this[s(1789)].languageDetector[s(2337)](o) : o(x), e;
  }
  [a(1225)](x, t, s) {
    const e = a, r = (n, o, ...c) => {
      const d = K;
      let u;
      typeof o !== d(2535) ? u = this[d(2308)][d(1869)]([n, o][d(2004)](c)) : u = { ...o }, u[d(2474)] = u.lng || r[d(2474)], u[d(2759)] = u[d(2759)] || r.lngs, u.ns = u.ns || r.ns, u[d(1529)] !== "" && (u.keyPrefix = u[d(1529)] || s || r[d(1529)]);
      const f = this[d(2308)][d(2411)] || ".";
      let l;
      return u[d(1529)] && Array[d(1320)](n) ? l = n[d(1790)]((g) => "" + u.keyPrefix + f + g) : l = u[d(1529)] ? "" + u[d(1529)] + f + n : n, this.t(l, u);
    };
    return g0(x) ? r.lng = x : r[e(2759)] = x, r.ns = t, r[e(1529)] = s, r;
  }
  t(...x) {
    var s;
    const t = a;
    return (s = this[t(1538)]) == null ? void 0 : s[t(2163)](...x);
  }
  [a(1905)](...x) {
    var s;
    const t = a;
    return (s = this[t(1538)]) == null ? void 0 : s[t(1905)](...x);
  }
  setDefaultNamespace(x) {
    const t = a;
    this.options[t(628)] = x;
  }
  hasLoadedNamespace(x, t = {}) {
    const s = a;
    if (!this[s(960)]) return this[s(1476)][s(2175)](s(1167), this.languages), !1;
    if (!this[s(2336)] || !this[s(2336)][s(1492)]) return this[s(1476)].warn("hasLoadedNamespace: i18n.languages were undefined or empty", this[s(2336)]), !1;
    const e = t[s(2474)] || this.resolvedLanguage || this[s(2336)][0], r = this[s(2308)] ? this[s(2308)].fallbackLng : !1, n = this[s(2336)][this[s(2336)][s(1492)] - 1];
    if (e[s(1861)]() === s(2917)) return !0;
    const o = (c, d) => {
      const u = s, f = this[u(1789)][u(2194)][u(846)][c + "|" + d];
      return f === -1 || f === 0 || f === 2;
    };
    if (t[s(2653)]) {
      const c = t[s(2653)](this, o);
      if (c !== void 0) return c;
    }
    return !!(this[s(2907)](e, x) || !this[s(1789)][s(2194)][s(658)] || this[s(2308)].resources && !this.options[s(972)] || o(e, x) && (!r || o(n, x)));
  }
  [a(756)](x, t) {
    const s = a, e = Qe();
    return this.options.ns ? (g0(x) && (x = [x]), x[s(1615)]((r) => {
      const n = s;
      this[n(2308)].ns.indexOf(r) < 0 && this.options.ns[n(893)](r);
    }), this[s(1601)]((r) => {
      e.resolve(), t && t(r);
    }), e) : (t && t(), Promise[s(1362)]());
  }
  [a(918)](x, t) {
    const s = a, e = Qe();
    g0(x) && (x = [x]);
    const r = this[s(2308)][s(1809)] || [], n = x[s(861)]((o) => r.indexOf(o) < 0 && this[s(1789)][s(1698)][s(1520)](o));
    return n[s(1492)] ? (this[s(2308)][s(1809)] = r[s(2004)](n), this[s(1601)]((o) => {
      e[s(1362)](), t && t(o);
    }), e) : (t && t(), Promise[s(1362)]());
  }
  dir(x) {
    var r, n;
    const t = a;
    if (x || (x = this[t(1873)] || (((r = this[t(2336)]) == null ? void 0 : r[t(1492)]) > 0 ? this.languages[0] : this[t(2723)])), !x) return "rtl";
    const s = ["ar", t(1857), t(1742), t(732), "xaa", t(2482), t(529), t(1141), t(1612), t(676), t(1051), t(2502), t(2389), "acx", t(949), t(920), t(2183), t(1393), "aec", t(1289), t(1824), t(2787), "apd", t(946), t(2875), "ars", t(1937), "arz", t(1690), t(1706), t(1253), "ayl", t(544), t(1145), t(2116), t(1405), "he", "iw", "ps", t(1373), "pbu", t(1648), "prp", t(2834), "ug", "ur", t(1837), t(2282), "yih", "ji", "yi", t(2895), t(1675), t(2938), "fa", t(1293), t(2761), "pes", t(2904), "dv", t(1260), t(1597)], e = ((n = this[t(1789)]) == null ? void 0 : n.languageUtils) || new Va(Ga());
    return s[t(2098)](e[t(2721)](x)) > -1 || x[t(1861)]()[t(2098)]("-arab") > 1 ? t(2601) : t(1092);
  }
  static [a(2038)](x = {}, t) {
    return new sx(x, t);
  }
  cloneInstance(x = {}, t = lx) {
    const s = a, e = x[s(2095)];
    e && delete x.forkResourceStore;
    const r = { ...this[s(2308)], ...x, isClone: !0 }, n = new sx(r);
    if ((x[s(1563)] !== void 0 || x[s(2821)] !== void 0) && (n.logger = n.logger[s(1100)](x)), [s(2390), s(1789), s(2723)][s(1615)]((c) => {
      n[c] = this[c];
    }), n.services = { ...this[s(1789)] }, n[s(1789)][s(1036)] = { hasLoadedNamespace: n[s(1336)].bind(n) }, e) {
      const c = Object[s(2693)](this[s(2390)][s(1369)]).reduce((d, u) => {
        const f = s;
        return d[u] = { ...this[f(2390)][f(1369)][u] }, d[u] = Object[f(2693)](d[u])[f(787)]((l, g) => (l[g] = { ...d[u][g] }, l), d[u]), d;
      }, {});
      n[s(2390)] = new za(c, r), n[s(1789)].resourceStore = n[s(2390)];
    }
    return n.translator = new Fx(n[s(1789)], r), n[s(1538)].on("*", (c, ...d) => {
      n[s(958)](c, ...d);
    }), n.init(r, t), n[s(1538)].options = r, n[s(1538)][s(2194)].services[s(1036)] = { hasLoadedNamespace: n[s(1336)].bind(n) }, n;
  }
  [a(2854)]() {
    const x = a;
    return { options: this[x(2308)], store: this[x(2390)], language: this[x(2723)], languages: this.languages, resolvedLanguage: this[x(1873)] };
  }
}
const X0 = sx[a(2038)]();
X0[a(2038)] = sx[a(2038)], X0[a(2038)], X0[a(922)], X0[a(2250)], X0[a(1601)], X0.reloadResources, X0[a(2159)], X0[a(1952)], X0.getFixedT, X0.t, X0.exists, X0[a(779)], X0[a(1336)], X0[a(756)], X0[a(918)];
function So() {
  const i = a;
  if (typeof navigator !== i(633) && navigator.language) return navigator[i(2723)] === i(915) ? i(915) : i(1577);
  try {
    const x = typeof require !== i(633) ? require : void 0;
    if (x)
      return x("uxp")[i(2930)].uiLocale[i(1701)]("zh") ? i(915) : i(1577);
  } catch {
  }
  return "en-US";
}
let Bs = So();
const ko = { "zh-CN": {}, "en-US": {} };
function Kt(i) {
  const x = a, t = i === x(915) ? eo : xo, s = ko[i];
  return { ...t, ...s };
}
function Po() {
  return Bs;
}
function Gt(i, x = {}) {
  const t = a;
  let e = Kt(Bs)[i];
  return e ? typeof e === t(1346) ? e[t(499)](/\{\{(\w+)\}\}/g, (r, n) => x[n] !== void 0 ? String(x[n]) : r) : e : i;
}
const Eo = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Io = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, Ro = (i) => Io[i], Co = (i) => i[a(499)](Eo, Ro);
let Qa = { bindI18n: a(1695), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", a(1657), "i", "p"], useSuspense: !0, unescape: Co };
const Fo = (i = {}) => {
  Qa = { ...Qa, ...i };
}, No = { type: a(1313), init(i) {
  const x = a;
  Fo(i[x(2308)][x(1337)]);
} };
!X0.isInitialized && X0[a(2159)](No)[a(2250)]({ resources: { "zh-CN": { translation: Kt("zh-CN") }, "en-US": { translation: Kt(a(1577)) } }, lng: Po(), fallbackLng: a(1577), interpolation: { escapeValue: !1 } });
const Re = [];
ex[a(2443)] = ex[a(2443)] || {}, ex.widgetable[a(911)] = function(i, x) {
  const t = a;
  typeof x == "function" ? Re[t(893)]([i, { formatter: x, setter: null }]) : Re[t(893)]([i, x]);
};
function qo(i, x, t) {
  var c, d, u;
  const s = a, e = Re.find(([f]) => f == K(1216)), r = Re[s(1284)](([f]) => aa(f, i[s(2417)])) || e;
  let n = !1;
  if (r) {
    const f = r[1][s(2866)];
    f && (n = !!f(i, x, t));
  }
  !n && (i[s(2119)][x][s(1454)] = t, (d = (c = i[s(2119)][x])[s(2369)]) == null || d.call(c, t)), (u = (q0[s(2501)] || q0[s(663)][s(1229)])[s(1560)]) == null || u[s(1747)][s(577)]();
}
function Nx(i) {
  const x = a, t = {}, s = Re[x(1284)](([e]) => e == "__DEFAULT__");
  return i[x(832)].forEach((e) => {
    const r = x;
    if (!e.widgets || e[r(2119)][r(1492)] == 0) return;
    const n = Re[r(1284)](([o]) => aa(o, e[r(2417)])) || s;
    if (n) try {
      const o = n[1].formatter(e);
      o && (t[e.id] = o[r(2119)][r(1790)]((c) => c.value));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function Jt(i, x) {
  var r, n, o;
  const t = a;
  if (!i) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const s = i.nodes.map((c) => {
    const d = K;
    if (c[d(2045)] != 0) return;
    const u = px(c);
    if (!u || u[d(1701)](".") || !c[d(2119)] || c[d(2119)][d(1492)] == 0) return;
    let f = Re[d(1284)](([m]) => aa(m, c[d(2417)]));
    if (f) try {
      const m = f[1][d(2220)](c);
      if (m) return m.id = c.id, m[d(2361)] = m.widgets[d(787)]((v, S) => v + (S.uiWeight || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: u, uiWeightSum: 12, widgets: [{ outputType: d(1978), value: Gt("convert widget {0} failed:", f[0]) + (m.message || m || ""), name: "", options: {} }] };
    }
    if (!u[d(1701)]("#")) return null;
    let l = c[d(2119)];
    const g = Re[d(1284)](([m]) => m == d(1216));
    if (g) {
      const m = g[1][d(2220)](c);
      if (m) return Object[d(1352)](m, { uiWeightSum: m[d(2119)][d(787)]((v, S) => v + (S[d(2278)] || 12), 0) });
    }
    const h = { id: c.id, title: u, widgets: l[d(1790)]((m) => ({ name: m[d(2142)] || m[d(1719)], outputType: m[d(2417)] || d(1346), value: m[d(1454)], options: m[d(2308)] })) };
    return Object[d(1352)](h, { uiWeightSum: h[d(2119)][d(787)]((m, v) => m + (v[d(2278)] || 12), 0) });
  })[t(861)](Boolean)[t(610)]((c, d) => {
    const u = t;
    let f = px(c), l = px(d);
    return f = f[u(1701)]("#") ? f[u(1981)](1)[u(2040)]() : f[u(2040)](), l = l[u(1701)]("#") ? l.slice(1)[u(2040)]() : l[u(2040)](), f[u(2763)](l);
  }), e = ((n = (r = i[t(832)][t(1284)]((c) => c[t(2417)] == t(2084) && c.title[t(2467)](/SD-?PPP/i))) == null ? void 0 : r[t(2119)][0]) == null ? void 0 : n[t(1454)]) || "";
  return { widgetablePath: ((o = x[t(2317)][t(2540)]) == null ? void 0 : o.sdppp_workflow_alias) || x[t(1522)], widgetableID: x[t(2317)].id, nodes: s[t(787)]((c, d) => (c[d.id] = d, c), {}), note: e, nodeIndexes: s[t(1790)]((c) => c.id), options: {} };
}
function aa(i, x) {
  const t = a, s = i[t(499)](/[.+^${}()|[\]\\]/g, t(1996)).replace(/\*/g, ".*").replace(/\?/g, ".");
  return new RegExp("^" + s + "$")[t(2553)](x);
}
function px(i, x = "") {
  var e;
  const t = a;
  let s = x || i[t(2513)] || "";
  return i[t(506)] && (s.startsWith("#") || s[t(1701)](".")) ? i[t(506)](t(2722), s) : s = ((e = i[t(1089)]) == null ? void 0 : e[t(2722)]) || s, s;
}
ex[a(2724)] = px;
const Qt = nx.extend(a(2709)), Xa = /* @__PURE__ */ new Set();
R0[a(2657)]("setWidgetValue", async (i) => {
  const x = a;
  return i[x(2977)][x(1615)](({ nodeID: t, widgetIndex: s, value: e }) => {
    const r = x, n = q0[r(1638)][r(832)].find((o) => o.id == t);
    qo(n, s, e);
  }), { success: !0 };
}), R0[a(2657)](a(2495), async (i) => {
  const x = a, { workflow_path: t } = i, s = !Xa[x(901)](t), e = i[x(2980)] || s;
  Xa[x(911)](t);
  const r = q0[x(663)][x(1229)] || q0[x(2501)], n = r[x(1827)][x(1284)]((c) => c[x(1001)] === t || c.path === t || c[x(1522)] === x(857) + t);
  if (!e) {
    const c = await To(r, n);
    if (Qt(x(2129) + c), c) await Bx(r, n);
    else try {
      await o(r, n);
    } catch {
      await Bx(r, n);
    }
    return { success: !0 };
  }
  return await Bx(r, n), { success: !0 };
  async function o(c, d) {
    const u = x;
    Qt(u(809) + d[u(1522)], d[u(1204)]), q0[u(2501)] == c ? await d[u(869)]() : (await c[u(2495)](d), await q0[u(1072)](JSON[u(1205)](JSON[u(2149)](d[u(1204)])), !0, !0, d, {}));
  }
}), R0[a(2657)](a(2295), async function(i) {
  const x = a;
  let { workflow_content: t, workflow_path: s } = i;
  return t[x(2540)] = { ...t[x(2540)] || {}, sdppp_workflow_alias: s }, await q0.loadGraphData(t), { success: !0 };
}), R0[a(2657)]("listWorkflows", async (i) => {
  var r;
  const x = a, t = q0[x(2501)] || q0[x(663)][x(1229)];
  (r = t[x(1705)]) == null || r.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t[x(1827)][x(1790)]((n) => n.path[x(499)](x(857), ""));
  try {
    const n = new Headers(), o = localStorage[x(2975)](x(1425));
    o && n[x(2296)](x(1084), o);
    const c = await fetch(x(1417), { headers: n });
    let d = [];
    c.ok && (d = (await c[x(1550)]())[x(1681)][x(1790)]((f) => f[x(499)](x(857), ""))), e[x(610)]((u, f) => {
      const l = x, g = d[l(2583)](u), h = d[l(2583)](f);
      return g && !h ? -1 : !g && h ? 1 : u[l(2763)](f);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), R0.implementAction(a(2575), async (i) => {
  var n;
  const x = a, { workflow_path: t, from_sid: s } = i, e = q0[x(2501)] || q0[x(663)][x(1229)], r = e[x(1827)][x(1284)]((o) => o.fullFilename === t || o.path === t || o.path === x(857) + t);
  if (!r) throw new Error(x(2510));
  return ((n = e[x(1560)]) == null ? void 0 : n.id) != r.id && await q0[x(2495)](t, s, !1), r[x(1747)].checkState(), await e[x(2575)](r), { success: !0 };
});
async function To(i, x) {
  var e, r, n;
  const t = a;
  if (!x || !(((e = i[t(1560)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((r = x[t(1747)]) != null && r[t(577)]) try {
    x[t(1747)][t(577)]();
  } catch (o) {
    console[t(2175)](t(1866), o);
  }
  try {
    const o = (n = q0[t(1638)]) == null ? void 0 : n.serialize(), c = x[t(2317)];
    if (!o || !c) return !1;
    const d = JSON[t(2149)](o), u = JSON[t(2149)](c);
    return d !== u;
  } catch (o) {
    return console.warn(t(547), o), !1;
  }
}
async function Bx(i, x) {
  var e;
  const t = a;
  Qt(t(1768) + x.path);
  async function s(r, n) {
    const o = t;
    q0.workflowManager == r ? await n[o(869)]() : (await r[o(2495)](n), await q0.loadGraphData(JSON[o(1205)](JSON[o(2149)](n[o(2317)])), !0, !0, n, {}));
  }
  if ((x[t(944)] || (e = i[t(944)]) != null && e.call(i, x)) && i[t(1123)][t(1492)] === 1) {
    const r = i.createTemporary();
    i[t(2495)](r);
  } else await s(i, i.openWorkflows[0] == x ? i[t(1123)][1] : i[t(1123)][0]);
  await i[t(2663)](x, !1), await new Promise((r) => requestAnimationFrame(r)), await s(i, x);
}
const Ye = nx.extend("workflow-run"), qe = /* @__PURE__ */ new Map();
function Oo(i, x) {
  const t = a, s = qe[t(1919)](i);
  Ye("resolveRunImages", i, x, s, qe), s && s[t(1420)](x);
}
R0[a(2657)](a(1090), async function* (i) {
  const x = a;
  let t = !1, s = [];
  function e() {
    const l = K;
    if (t) return;
    const g = Ae[l(962)];
    Ae[l(962)] = async (...h) => {
      const m = l;
      try {
        const v = await g[m(983)](Ae, ...h);
        return s[m(893)]({ error: null, result: v, prompt_id: v[m(559)] }), v;
      } catch (v) {
        throw s[m(893)]({ error: v, result: null, prompt_id: "" }), v;
      }
    }, t = !0;
  }
  t || e();
  const r = i[x(2191)];
  let n = !1, o = {}, c = [];
  R0[x(2390)][x(2500)]({ lastError: "", widgetableErrors: {} });
  try {
    s = [], await q0[x(962)](1, r), s[x(1615)]((l) => {
      var h, m;
      const g = x;
      if (l.error) n = !0, o = l[g(1978)].response ? f(l[g(1978)][g(1392)][g(801)]) : {}, Object.assign(o, { "-1": ((m = (h = l.error[g(1392)]) == null ? void 0 : h[g(1978)]) == null ? void 0 : m[g(1261)]) || l[g(1978)][g(1261)] });
      else {
        const v = l[g(979)].prompt_id;
        c[g(893)](v);
        let S, P;
        const F = new Promise((R, I) => {
          S = R, P = I;
        }), O = { promise: F, resolveImage: S, rejectImage: P };
        qe[g(2296)](v, O);
      }
    });
  } catch (l) {
    Ye(x(1198), l[x(2057)]), n = !0, o = { "-1": l.message || l[x(2643)]() };
  }
  Ye("after app.queuePrompt errors: ", n, o, x(1013), c), n && R0[x(2390)][x(2500)]({ widgetableErrors: o });
  let d = [];
  const u = /* @__PURE__ */ new Map();
  for (const l of c) {
    const g = qe[x(1919)](l);
    g && u[x(2296)](l, g[x(1472)]);
  }
  for (Ye(x(1525)); u[x(2191)] > 0; ) {
    const l = Array[x(1954)](u[x(643)]()), g = l[x(1790)](([v, S]) => S[x(2139)]((P) => ({ prompt_id: v, images: P }))), { prompt_id: h, images: m } = await Promise[x(1934)](g);
    Ye(x(2606), h), d[x(893)](...m), u.delete(h), qe.delete(h), yield { success: !0, prompt_ids: [h], images: m };
  }
  function f(l) {
    const g = x, h = {};
    return Object[g(2693)](l).forEach((m) => {
      const v = g, S = m[v(2889)](":")[0], P = q0.graph[v(832)][v(1284)]((F) => F.id == S);
      h[S] = "[" + ((P == null ? void 0 : P[v(2513)]) || S) + "]" + l[m][v(862)][v(1790)](JSON.stringify).join(`
`);
    }), h;
  }
}), R0[a(2657)](a(2049), async () => {
  const i = a;
  await q0[i(2691)][i(533)](i(2182)), await q0.api[i(1161)]();
  const x = Array[i(1954)](qe[i(2977)]());
  qe[i(1724)]();
  for (const t of x)
    try {
      t[i(617)](new Error("Workflow stopped by user"));
    } catch {
    }
  return { success: !0 };
});
const Ao = nx[a(1333)](a(2345));
R0[a(2657)]("sdpppHandshake", async (i) => {
  const x = a;
  return i != null && i[x(2422)] && Ao(x(903), i[x(2422)]), { comfyVersion: x(1859), hostVersion: (i == null ? void 0 : i[x(2422)]) ?? "" };
}), R0[a(2657)](a(1806), async (i) => {
  const x = a, { node_id: t, title: s } = i, e = q0[x(1638)][x(832)].find((r) => r.id == t);
  if (!e) throw new Error("Node not found");
  return e[x(2513)] = s, e[x(506)](x(2722), s), { success: !0 };
}), R0[a(2657)](a(2506), async () => {
  const i = a, x = await fetch(i(2617));
  return x.status == 404 ? { error: Gt(i(782)), success: !1 } : x[i(2666)] == 200 ? { success: !0 } : { error: Gt(i(2335)) + x[i(825)], success: !1 };
}), R0[a(2657)](a(844), async (i) => {
  const x = a, { api_key: t } = i;
  return localStorage.setItem(x(2778), t), location[x(1793)](), { success: !0 };
}), R0[a(2657)](a(548), async () => {
  const i = a;
  return document[i(1266)](".pi-sign-out")[i(2578)].click(), { success: !0 };
});
function Do(i) {
  const x = a, t = atob(i), s = t[x(1492)], e = new Uint8Array(s);
  for (let r = 0; r < s; r++)
    e[r] = t[x(1678)](r);
  return e;
}
R0[a(2657)](a(2523), async (i, x, t) => {
  const s = a, { fileName: e, overwrite: r = !0, mimeType: n = s(1797), dataBase64: o } = i;
  if (t != null && t[s(2699)]) throw new DOMException("Upload aborted", s(2168));
  const c = Do(o), d = new Blob([c], { type: n }), u = new FormData();
  u.append(s(752), d), u[s(1709)](s(1816), e), u[s(1709)]("overwrite", s(r ? 1625 : 2251));
  const f = await fetch(s(1329), { method: "POST", body: u, signal: t });
  if (!f.ok) throw new Error(s(1049) + f[s(825)]);
  const l = await f[s(1550)]();
  return { name: l.subfolder + "/" + l[s(1719)] };
});
const Ws = a(2936), jo = [Ws, "2025-03-26", a(2660), a(895)], Tx = a(1606), Ks = G0([y(), J()[a(1443)]()]), Gs = y(), Mo = k({ progressToken: B(Ks) })[a(1174)](), re = k({ _meta: B(Mo) })[a(1174)](), xe = k({ method: y(), params: B(re) }), ix = k({ _meta: B(k({})[a(1174)]()) })[a(1174)](), pe = k({ method: y(), params: B(ix) }), se = k({ _meta: B(k({}).passthrough()) })[a(1174)](), Ox = G0([y(), J()[a(1443)]()]), Js = k({ jsonrpc: x0(Tx), id: Ox })[a(1999)](xe)[a(1234)](), Lo = (i) => Js[a(2525)](i)[a(1058)], Qs = k({ jsonrpc: x0(Tx) })[a(1999)](pe)[a(1234)](), $o = (i) => Qs[a(2525)](i)[a(1058)], Xs = k({ jsonrpc: x0(Tx), id: Ox, result: se }).strict(), Ya = (i) => Xs[a(2525)](i)[a(1058)];
var ve;
(function(i) {
  const x = a;
  i[i.ConnectionClosed = -32e3] = x(1984), i[i[x(745)] = -32001] = x(745), i[i.ParseError = -32700] = "ParseError", i[i.InvalidRequest = -32600] = x(1044), i[i[x(2652)] = -32601] = x(2652), i[i[x(505)] = -32602] = x(505), i[i[x(1237)] = -32603] = x(1237);
})(ve || (ve = {}));
const Ys = k({ jsonrpc: x0(Tx), id: Ox, error: k({ code: J()[a(1443)](), message: y(), data: B(Be()) }) })[a(1234)](), zo = (i) => Ys[a(2525)](i)[a(1058)];
G0([Js, Qs, Xs, Ys]);
const Xt = se.strict(), Yt = pe.extend({ method: x0(a(1850)), params: ix[a(1333)]({ requestId: Ox, reason: y().optional() }) }), ox = k({ name: y(), title: B(y()) }).passthrough(), _s = ox.extend({ version: y() }), Uo = k({ experimental: B(k({})[a(1174)]()), sampling: B(k({})[a(1174)]()), elicitation: B(k({})[a(1174)]()), roots: B(k({ listChanged: B(e0()) })[a(1174)]()) })[a(1174)](), en = xe[a(1333)]({ method: x0("initialize"), params: re[a(1333)]({ protocolVersion: y(), capabilities: Uo, clientInfo: _s }) }), Ho = k({ experimental: B(k({})[a(1174)]()), logging: B(k({})[a(1174)]()), completions: B(k({}).passthrough()), prompts: B(k({ listChanged: B(e0()) })[a(1174)]()), resources: B(k({ subscribe: B(e0()), listChanged: B(e0()) })[a(1174)]()), tools: B(k({ listChanged: B(e0()) })[a(1174)]()) }).passthrough(), Vo = se.extend({ protocolVersion: y(), capabilities: Ho, serverInfo: _s, instructions: B(y()) }), xn = pe[a(1333)]({ method: x0("notifications/initialized") }), _t = xe.extend({ method: x0(a(2201)) }), Zo = k({ progress: J(), total: B(J()), message: B(y()) }).passthrough(), ea = pe[a(1333)]({ method: x0("notifications/progress"), params: ix[a(1999)](Zo)[a(1333)]({ progressToken: Ks }) }), Ax = xe[a(1333)]({ params: re[a(1333)]({ cursor: B(Gs) }).optional() }), Dx = se[a(1333)]({ nextCursor: B(Gs) }), tn = k({ uri: y(), mimeType: B(y()), _meta: B(k({})[a(1174)]()) }).passthrough(), an = tn[a(1333)]({ text: y() }), rn = tn.extend({ blob: y()[a(1490)]() }), sn = ox[a(1333)]({ uri: y(), description: B(y()), mimeType: B(y()), _meta: B(k({})[a(1174)]()) }), Bo = ox[a(1333)]({ uriTemplate: y(), description: B(y()), mimeType: B(y()), _meta: B(k({})[a(1174)]()) }), Wo = Ax[a(1333)]({ method: x0(a(1711)) }), Ko = Dx[a(1333)]({ resources: w0(sn) }), Go = Ax.extend({ method: x0(a(2396)) }), Jo = Dx[a(1333)]({ resourceTemplates: w0(Bo) }), Qo = xe.extend({ method: x0(a(2543)), params: re[a(1333)]({ uri: y() }) }), Xo = se[a(1333)]({ contents: w0(G0([an, rn])) }), Yo = pe.extend({ method: x0(a(812)) }), _o = xe[a(1333)]({ method: x0(a(1547)), params: re[a(1333)]({ uri: y() }) }), e2 = xe[a(1333)]({ method: x0("resources/unsubscribe"), params: re.extend({ uri: y() }) }), x2 = pe[a(1333)]({ method: x0("notifications/resources/updated"), params: ix[a(1333)]({ uri: y() }) }), t2 = k({ name: y(), description: B(y()), required: B(e0()) })[a(1174)](), a2 = ox[a(1333)]({ description: B(y()), arguments: B(w0(t2)), _meta: B(k({}).passthrough()) }), r2 = Ax[a(1333)]({ method: x0(a(940)) }), s2 = Dx[a(1333)]({ prompts: w0(a2) }), n2 = xe.extend({ method: x0("prompts/get"), params: re[a(1333)]({ name: y(), arguments: B(V0(y())) }) }), ra = k({ type: x0(a(2775)), text: y(), _meta: B(k({})[a(1174)]()) })[a(1174)](), sa = k({ type: x0(a(752)), data: y().base64(), mimeType: y(), _meta: B(k({})[a(1174)]()) })[a(1174)](), na = k({ type: x0("audio"), data: y()[a(1490)](), mimeType: y(), _meta: B(k({}).passthrough()) })[a(1174)](), i2 = k({ type: x0("resource"), resource: G0([an, rn]), _meta: B(k({})[a(1174)]()) })[a(1174)](), o2 = sn.extend({ type: x0(a(2226)) }), nn = G0([ra, sa, na, o2, i2]), c2 = k({ role: I0([a(1484), "assistant"]), content: nn })[a(1174)](), d2 = se[a(1333)]({ description: B(y()), messages: w0(c2) }), u2 = pe[a(1333)]({ method: x0(a(1463)) }), f2 = k({ title: B(y()), readOnlyHint: B(e0()), destructiveHint: B(e0()), idempotentHint: B(e0()), openWorldHint: B(e0()) })[a(1174)](), l2 = ox[a(1333)]({ description: B(y()), inputSchema: k({ type: x0(a(2535)), properties: B(k({}).passthrough()), required: B(w0(y())) })[a(1174)](), outputSchema: B(k({ type: x0(a(2535)), properties: B(k({})[a(1174)]()), required: B(w0(y())) })[a(1174)]()), annotations: B(f2), _meta: B(k({}).passthrough()) }), h2 = Ax[a(1333)]({ method: x0(a(1849)) }), p2 = Dx[a(1333)]({ tools: w0(l2) }), on = se.extend({ content: w0(nn).default([]), structuredContent: k({})[a(1174)]()[a(793)](), isError: B(e0()) });
on.or(se[a(1333)]({ toolResult: Be() }));
const m2 = xe[a(1333)]({ method: x0(a(2766)), params: re[a(1333)]({ name: y(), arguments: B(V0(Be())) }) }), g2 = pe[a(1333)]({ method: x0("notifications/tools/list_changed") }), cn = I0(["debug", a(2297), a(2037), "warning", a(1978), a(1403), "alert", "emergency"]), b2 = xe[a(1333)]({ method: x0("logging/setLevel"), params: re[a(1333)]({ level: cn }) }), y2 = pe[a(1333)]({ method: x0("notifications/message"), params: ix[a(1333)]({ level: cn, logger: B(y()), data: Be() }) }), v2 = k({ name: y()[a(793)]() })[a(1174)](), w2 = k({ hints: B(w0(v2)), costPriority: B(J()[a(1012)](0)[a(731)](1)), speedPriority: B(J()[a(1012)](0)[a(731)](1)), intelligencePriority: B(J()[a(1012)](0)[a(731)](1)) }).passthrough(), S2 = k({ role: I0([a(1484), a(1686)]), content: G0([ra, sa, na]) }).passthrough(), k2 = xe[a(1333)]({ method: x0("sampling/createMessage"), params: re[a(1333)]({ messages: w0(S2), systemPrompt: B(y()), includeContext: B(I0([a(1948), a(2228), "allServers"])), temperature: B(J()), maxTokens: J()[a(1443)](), stopSequences: B(w0(y())), metadata: B(k({})[a(1174)]()), modelPreferences: B(w2) }) }), dn = se[a(1333)]({ model: y(), stopReason: B(I0([a(644), a(2459), a(1943)]).or(y())), role: I0([a(1484), a(1686)]), content: $s(a(2417), [ra, sa, na]) }), P2 = k({ type: x0(a(2173)), title: B(y()), description: B(y()), default: B(e0()) }).passthrough(), E2 = k({ type: x0("string"), title: B(y()), description: B(y()), minLength: B(J()), maxLength: B(J()), format: B(I0(["email", a(2675), a(1470), a(813)])) })[a(1174)](), I2 = k({ type: I0([a(1120), a(2656)]), title: B(y()), description: B(y()), minimum: B(J()), maximum: B(J()) })[a(1174)](), R2 = k({ type: x0(a(1346)), title: B(y()), description: B(y()), enum: w0(y()), enumNames: B(w0(y())) }).passthrough(), C2 = G0([P2, E2, I2, R2]), F2 = xe[a(1333)]({ method: x0("elicitation/create"), params: re[a(1333)]({ message: y(), requestedSchema: k({ type: x0("object"), properties: V0(y(), C2), required: B(w0(y())) }).passthrough() }) }), un = se[a(1333)]({ action: I0([a(1509), a(966), a(1903)]), content: B(V0(y(), Be())) }), N2 = k({ type: x0(a(1920)), uri: y() }).passthrough(), q2 = k({ type: x0(a(2740)), name: y() }).passthrough(), T2 = xe.extend({ method: x0(a(1125)), params: re.extend({ ref: G0([q2, N2]), argument: k({ name: y(), value: y() })[a(1174)](), context: B(k({ arguments: B(V0(y(), y())) })) }) }), O2 = se[a(1333)]({ completion: k({ values: w0(y()).max(100), total: B(J()[a(1443)]()), hasMore: B(e0()) })[a(1174)]() }), A2 = k({ uri: y()[a(1701)]("file://"), name: B(y()), _meta: B(k({})[a(1174)]()) })[a(1174)](), D2 = xe[a(1333)]({ method: x0(a(1833)) }), fn = se[a(1333)]({ roots: w0(A2) }), j2 = pe.extend({ method: x0(a(2603)) });
G0([_t, en, T2, b2, n2, r2, Wo, Go, Qo, _o, e2, m2, h2]), G0([Yt, ea, xn, j2]), G0([Xt, dn, un, fn]), G0([_t, k2, F2, D2]), G0([Yt, ea, y2, x2, Yo, g2, u2]), G0([Xt, Vo, O2, d2, s2, Ko, Jo, Xo, on, p2]);
class Oe extends Error {
  constructor(x, t, s) {
    const e = a;
    super("MCP error " + x + ": " + t), this[e(2952)] = x, this[e(1369)] = s, this[e(1719)] = e(1888);
  }
}
const M2 = 6e4;
class L2 {
  constructor(x) {
    const t = a;
    this[t(991)] = x, this[t(2140)] = 0, this[t(1666)] = /* @__PURE__ */ new Map(), this[t(2914)] = /* @__PURE__ */ new Map(), this[t(1087)] = /* @__PURE__ */ new Map(), this[t(1500)] = /* @__PURE__ */ new Map(), this[t(1767)] = /* @__PURE__ */ new Map(), this[t(1696)] = /* @__PURE__ */ new Map(), this[t(2042)] = /* @__PURE__ */ new Set(), this.setNotificationHandler(Yt, (s) => {
      const e = t, r = this[e(2914)][e(1919)](s[e(833)].requestId);
      r == null || r[e(661)](s.params[e(824)]);
    }), this.setNotificationHandler(ea, (s) => {
      this._onprogress(s);
    }), this[t(2608)](_t, (s) => ({}));
  }
  _setupTimeout(x, t, s, e, r = !1) {
    const n = a;
    this[n(1696)].set(x, { timeoutId: setTimeout(e, t), startTime: Date[n(2064)](), timeout: t, maxTotalTimeout: s, resetTimeoutOnProgress: r, onTimeout: e });
  }
  [a(2379)](x) {
    const t = a, s = this[t(1696)][t(1919)](x);
    if (!s) return !1;
    const e = Date[t(2064)]() - s[t(788)];
    if (s.maxTotalTimeout && e >= s.maxTotalTimeout)
      throw this[t(1696)][t(1186)](x), new Oe(ve[t(745)], "Maximum total timeout exceeded", { maxTotalTimeout: s[t(992)], totalElapsed: e });
    return clearTimeout(s[t(2791)]), s[t(2791)] = setTimeout(s[t(2150)], s.timeout), !0;
  }
  [a(856)](x) {
    const t = a, s = this[t(1696)][t(1919)](x);
    s && (clearTimeout(s[t(2791)]), this[t(1696)][t(1186)](x));
  }
  async [a(2562)](x) {
    const t = a;
    var s, e, r;
    this[t(2573)] = x;
    const n = (s = this[t(1402)]) === null || s === void 0 ? void 0 : s[t(1583)];
    this[t(2573)].onclose = () => {
      const d = t;
      n == null || n(), this[d(1763)]();
    };
    const o = (e = this[t(1402)]) === null || e === void 0 ? void 0 : e[t(2665)];
    this[t(2573)][t(2665)] = (d) => {
      const u = t;
      o == null || o(d), this[u(1179)](d);
    };
    const c = (r = this._transport) === null || r === void 0 ? void 0 : r[t(1883)];
    this[t(2573)].onmessage = (d, u) => {
      const f = t;
      c == null || c(d, u), Ya(d) || zo(d) ? this[f(2873)](d) : Lo(d) ? this[f(2176)](d, u) : $o(d) ? this[f(1661)](d) : this[f(1179)](new Error(f(1143) + JSON[f(2149)](d)));
    }, await this[t(2573)].start();
  }
  [a(1763)]() {
    const x = a;
    var t;
    const s = this[x(1500)];
    this[x(1500)] = /* @__PURE__ */ new Map(), this[x(1767)].clear(), this[x(2042)].clear(), this[x(2573)] = void 0, (t = this[x(1583)]) === null || t === void 0 || t[x(983)](this);
    const e = new Oe(ve[x(1984)], x(2311));
    for (const r of s[x(2977)]())
      r(e);
  }
  _onerror(x) {
    var t;
    (t = this.onerror) === null || t === void 0 || t.call(this, x);
  }
  [a(1661)](x) {
    const t = a;
    var s;
    const e = (s = this._notificationHandlers.get(x[t(576)])) !== null && s !== void 0 ? s : this.fallbackNotificationHandler;
    e !== void 0 && Promise[t(1362)]()[t(2139)](() => e(x))[t(2678)]((r) => this._onerror(new Error(t(1964) + r)));
  }
  _onrequest(x, t) {
    const s = a;
    var e, r, n, o;
    const c = (e = this[s(1666)][s(1919)](x[s(576)])) !== null && e !== void 0 ? e : this[s(2539)];
    if (c === void 0) {
      (r = this[s(2573)]) === null || r === void 0 || r[s(1140)]({ jsonrpc: s(1606), id: x.id, error: { code: ve.MethodNotFound, message: s(2830) } }).catch((f) => this[s(1179)](new Error("Failed to send an error response: " + f)));
      return;
    }
    const d = new AbortController();
    this[s(2914)].set(x.id, d);
    const u = { signal: d[s(2071)], sessionId: (n = this._transport) === null || n === void 0 ? void 0 : n.sessionId, _meta: (o = x[s(833)]) === null || o === void 0 ? void 0 : o[s(2298)], sendNotification: (f) => this[s(2323)](f, { relatedRequestId: x.id }), sendRequest: (f, l, g) => this[s(1326)](f, l, { ...g, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t[s(1595)], requestId: x.id, requestInfo: t == null ? void 0 : t[s(736)] };
    Promise[s(1362)]()[s(2139)](() => c(x, u))[s(2139)]((f) => {
      const l = s;
      var g;
      if (!d[l(2071)].aborted)
        return (g = this[l(2573)]) === null || g === void 0 ? void 0 : g[l(1140)]({ result: f, jsonrpc: "2.0", id: x.id });
    }, (f) => {
      const l = s;
      var g, h;
      if (!d[l(2071)].aborted)
        return (g = this[l(2573)]) === null || g === void 0 ? void 0 : g[l(1140)]({ jsonrpc: l(1606), id: x.id, error: { code: Number[l(699)](f[l(2952)]) ? f[l(2952)] : ve[l(1237)], message: (h = f[l(1261)]) !== null && h !== void 0 ? h : "Internal error" } });
    })[s(2678)]((f) => this[s(1179)](new Error("Failed to send response: " + f)))[s(2541)](() => {
      const f = s;
      this[f(2914)][f(1186)](x.id);
    });
  }
  [a(2579)](x) {
    const t = a, { progressToken: s, ...e } = x[t(833)], r = Number(s), n = this._progressHandlers.get(r);
    if (!n) {
      this._onerror(new Error(t(2905) + JSON[t(2149)](x)));
      return;
    }
    const o = this[t(1500)][t(1919)](r), c = this[t(1696)][t(1919)](r);
    if (c && o && c[t(2644)]) try {
      this[t(2379)](r);
    } catch (d) {
      o(d);
      return;
    }
    n(e);
  }
  _onresponse(x) {
    const t = a, s = Number(x.id), e = this[t(1500)][t(1919)](s);
    if (e === void 0) {
      this[t(1179)](new Error(t(1906) + JSON[t(2149)](x)));
      return;
    }
    if (this[t(1500)].delete(s), this[t(1767)].delete(s), this[t(856)](s), Ya(x)) e(x);
    else {
      const r = new Oe(x[t(1978)][t(2952)], x[t(1978)].message, x[t(1978)][t(1369)]);
      e(r);
    }
  }
  get [a(1402)]() {
    return this[a(2573)];
  }
  async close() {
    const x = a;
    var t;
    await ((t = this[x(2573)]) === null || t === void 0 ? void 0 : t[x(717)]());
  }
  [a(1326)](x, t, s) {
    const { relatedRequestId: e, resumptionToken: r, onresumptiontoken: n } = s ?? {};
    return new Promise((o, c) => {
      const d = K;
      var u, f, l, g, h, m;
      if (!this[d(2573)]) {
        c(new Error("Not connected"));
        return;
      }
      ((u = this[d(991)]) === null || u === void 0 ? void 0 : u.enforceStrictCapabilities) === !0 && this[d(2375)](x[d(576)]), (f = s == null ? void 0 : s[d(2071)]) === null || f === void 0 || f[d(1038)]();
      const v = this[d(2140)]++, S = { ...x, jsonrpc: d(1606), id: v };
      s != null && s[d(1876)] && (this[d(1767)][d(2296)](v, s.onprogress), S[d(833)] = { ...x[d(833)], _meta: { ...((l = x[d(833)]) === null || l === void 0 ? void 0 : l[d(2298)]) || {}, progressToken: v } });
      const P = (R) => {
        const I = d;
        var C;
        this._responseHandlers.delete(v), this[I(1767)][I(1186)](v), this._cleanupTimeout(v), (C = this._transport) === null || C === void 0 || C.send({ jsonrpc: I(1606), method: I(1850), params: { requestId: v, reason: String(R) } }, { relatedRequestId: e, resumptionToken: r, onresumptiontoken: n })[I(2678)]((A) => this[I(1179)](new Error("Failed to send cancellation: " + A))), c(R);
      };
      this[d(1500)][d(2296)](v, (R) => {
        const I = d;
        var C;
        if (!(!((C = s == null ? void 0 : s.signal) === null || C === void 0) && C[I(2699)])) {
          if (R instanceof Error) return c(R);
          try {
            const A = t[I(1205)](R[I(979)]);
            o(A);
          } catch (A) {
            c(A);
          }
        }
      }), (g = s == null ? void 0 : s[d(2071)]) === null || g === void 0 || g[d(1813)](d(661), () => {
        const R = d;
        var I;
        P((I = s == null ? void 0 : s[R(2071)]) === null || I === void 0 ? void 0 : I[R(824)]);
      });
      const F = (h = s == null ? void 0 : s[d(1995)]) !== null && h !== void 0 ? h : M2, O = () => P(new Oe(ve[d(745)], d(1585), { timeout: F }));
      this[d(2969)](v, F, s == null ? void 0 : s[d(992)], O, (m = s == null ? void 0 : s.resetTimeoutOnProgress) !== null && m !== void 0 ? m : !1), this[d(2573)][d(1140)](S, { relatedRequestId: e, resumptionToken: r, onresumptiontoken: n })[d(2678)]((R) => {
        this[d(856)](v), c(R);
      });
    });
  }
  async notification(x, t) {
    const s = a;
    var e, r;
    if (!this[s(2573)]) throw new Error(s(2795));
    if (this[s(1169)](x[s(576)]), ((r = (e = this[s(991)]) === null || e === void 0 ? void 0 : e[s(2442)]) !== null && r !== void 0 ? r : [])[s(2583)](x.method) && !x.params && !(t != null && t[s(1015)])) {
      if (this[s(2042)].has(x[s(576)])) return;
      this[s(2042)][s(911)](x.method), Promise.resolve().then(() => {
        const d = s;
        var u;
        if (this[d(2042)][d(1186)](x.method), !this._transport) return;
        const f = { ...x, jsonrpc: d(1606) };
        (u = this._transport) === null || u === void 0 || u[d(1140)](f, t)[d(2678)]((l) => this[d(1179)](l));
      });
      return;
    }
    const c = { ...x, jsonrpc: "2.0" };
    await this._transport[s(1140)](c, t);
  }
  [a(2608)](x, t) {
    const s = a, e = x[s(1286)].method[s(1454)];
    this[s(1010)](e), this._requestHandlers.set(e, (r, n) => {
      const o = s;
      return Promise.resolve(t(x[o(1205)](r), n));
    });
  }
  [a(697)](x) {
    const t = a;
    this[t(1666)][t(1186)](x);
  }
  [a(1059)](x) {
    const t = a;
    if (this[t(1666)].has(x)) throw new Error("A request handler for " + x + t(1295));
  }
  [a(2217)](x, t) {
    const s = a;
    this._notificationHandlers[s(2296)](x.shape[s(576)].value, (e) => Promise[s(1362)](t(x.parse(e))));
  }
  [a(1826)](x) {
    const t = a;
    this._notificationHandlers[t(1186)](x);
  }
}
function $2(i, x) {
  const t = a;
  return Object.entries(x)[t(787)]((s, [e, r]) => (r && typeof r == "object" ? s[e] = s[e] ? { ...s[e], ...r } : r : s[e] = r, s), { ...i });
}
var _e = { exports: {} }, z2 = _e[a(1341)], _a;
function U2() {
  const i = a;
  return _a || (_a = 1, function(x, t) {
    (function(s, e) {
      e(t);
    })(z2, function(s) {
      const e = K;
      function r() {
        const E = K;
        for (var p = arguments[E(1492)], b = Array(p), w = 0; w < p; w++)
          b[w] = arguments[w];
        if (b.length > 1) {
          b[0] = b[0][E(1981)](0, -1);
          for (var U = b[E(1492)] - 1, z = 1; z < U; ++z)
            b[z] = b[z][E(1981)](1, -1);
          return b[U] = b[U][E(1981)](1), b[E(727)]("");
        } else return b[0];
      }
      function n(E) {
        return K(1510) + E + ")";
      }
      function o(E) {
        const p = K;
        return E === void 0 ? p(633) : E === null ? "null" : Object[p(757)][p(2643)][p(983)](E)[p(2889)](" ")[p(867)]()[p(2889)]("]")[p(2388)]()[p(1861)]();
      }
      function c(E) {
        return E[K(1176)]();
      }
      function d(E) {
        const p = K;
        return E != null ? E instanceof Array ? E : typeof E.length !== p(1120) || E[p(2889)] || E[p(1215)] || E[p(983)] ? [E] : Array[p(757)][p(1981)][p(983)](E) : [];
      }
      function u(E, p) {
        var b = E;
        if (p) for (var w in p)
          b[w] = p[w];
        return b;
      }
      function f(E) {
        const p = K;
        var b = p(1006), w = p(2489), U = r(w, p(591)), z = n(n("%[EFef]" + U + "%" + U + U + "%" + U + U) + "|" + n(p(1782) + U + "%" + U + U) + "|" + n("%" + U + U)), n0 = p(1894), u0 = p(2747), P0 = r(n0, u0), j0 = E ? p(1495) : "[]", Z0 = E ? p(2611) : "[]", E0 = r(b, w, "[\\-\\.\\_\\~]", j0);
        n(b + r(b, w, p(924)) + "*"), n(n(z + "|" + r(E0, u0, p(2677))) + "*");
        var D0 = n(n("25[0-5]") + "|" + n(p(2255) + w) + "|" + n("1" + w + w) + "|" + n(p(2547) + w) + "|0?0?" + w), B0 = n(D0 + "\\." + D0 + "\\." + D0 + "\\." + D0), b0 = n(U + p(1941)), $0 = n(n(b0 + "\\:" + b0) + "|" + B0), W0 = n(n(b0 + "\\:") + p(2006) + $0), z0 = n("\\:\\:" + n(b0 + "\\:") + "{5}" + $0), Pe = n(n(b0) + "?\\:\\:" + n(b0 + "\\:") + p(807) + $0), oe = n(n(n(b0 + "\\:") + "{0,1}" + b0) + p(518) + n(b0 + "\\:") + p(1481) + $0), ce = n(n(n(b0 + "\\:") + p(1603) + b0) + "?\\:\\:" + n(b0 + "\\:") + "{2}" + $0), ze = n(n(n(b0 + "\\:") + "{0,3}" + b0) + p(518) + b0 + "\\:" + $0), Fe = n(n(n(b0 + "\\:") + p(2355) + b0) + p(518) + $0), te = n(n(n(b0 + "\\:") + p(1294) + b0) + p(518) + b0), de = n(n(n(b0 + "\\:") + "{0,6}" + b0) + p(518)), ge = n([W0, z0, Pe, oe, ce, ze, Fe, te, de][p(727)]("|")), be = n(n(E0 + "|" + z) + "+");
        n(p(1921) + U + p(938) + r(E0, u0, p(2677)) + "+"), n(n(z + "|" + r(E0, u0)) + "*");
        var ue = n(z + "|" + r(E0, u0, "[\\:\\@]"));
        return n(n(z + "|" + r(E0, u0, p(1272))) + "+"), n(n(ue + "|" + r(p(2901), Z0)) + "*"), { NOT_SCHEME: new RegExp(r(p(1955), b, w, "[\\+\\-\\.]"), "g"), NOT_USERINFO: new RegExp(r(p(1728), E0, u0), "g"), NOT_HOST: new RegExp(r(p(1354), E0, u0), "g"), NOT_PATH: new RegExp(r(p(2899), E0, u0), "g"), NOT_PATH_NOSCHEME: new RegExp(r(p(2270), E0, u0), "g"), NOT_QUERY: new RegExp(r("[^\\%]", E0, u0, "[\\:\\@\\/\\?]", Z0), "g"), NOT_FRAGMENT: new RegExp(r(p(585), E0, u0, p(2154)), "g"), ESCAPE: new RegExp(r(p(1955), E0, u0), "g"), UNRESERVED: new RegExp(E0, "g"), OTHER_CHARS: new RegExp(r(p(585), E0, P0), "g"), PCT_ENCODED: new RegExp(z, "g"), IPV4ADDRESS: new RegExp("^(" + B0 + ")$"), IPV6ADDRESS: new RegExp("^\\[?(" + ge + ")" + n(n(p(501) + U + p(1159)) + "(" + be + ")") + p(2978)) };
      }
      var l = f(!1), g = f(!0), h = /* @__PURE__ */ function() {
        function E(p, b) {
          const w = K;
          var U = [], z = !0, n0 = !1, u0 = void 0;
          try {
            for (var P0 = p[Symbol.iterator](), j0; !(z = (j0 = P0[w(1516)]())[w(1600)]) && (U[w(893)](j0.value), !(b && U.length === b)); z = !0)
              ;
          } catch (Z0) {
            n0 = !0, u0 = Z0;
          } finally {
            try {
              !z && P0[w(762)] && P0.return();
            } finally {
              if (n0) throw u0;
            }
          }
          return U;
        }
        return function(p, b) {
          if (Array[K(1320)](p)) return p;
          if (Symbol.iterator in Object(p)) return E(p, b);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(), m = function(E) {
        const p = K;
        if (Array[p(1320)](E)) {
          for (var b = 0, w = Array(E[p(1492)]); b < E[p(1492)]; b++) w[b] = E[b];
          return w;
        } else return Array[p(1954)](E);
      }, v = 2147483647, S = 36, P = 1, F = 26, O = 38, R = 700, I = 72, C = 128, A = "-", j = /^xn--/, L = /[^\0-\x7E]/, q = /[\x2E\u3002\uFF0E\uFF61]/g, N = { overflow: e(1095), "not-basic": e(2548), "invalid-input": e(2710) }, $ = S - P, H = Math[e(1265)], V = String[e(785)];
      function G(E) {
        throw new RangeError(N[E]);
      }
      function c0(E, p) {
        const b = e;
        for (var w = [], U = E[b(1492)]; U--; )
          w[U] = p(E[U]);
        return w;
      }
      function d0(E, p) {
        const b = e;
        var w = E[b(2889)]("@"), U = "";
        w[b(1492)] > 1 && (U = w[0] + "@", E = w[1]), E = E[b(499)](q, ".");
        var z = E.split("."), n0 = c0(z, p)[b(727)](".");
        return U + n0;
      }
      function l0(E) {
        const p = e;
        for (var b = [], w = 0, U = E.length; w < U; ) {
          var z = E.charCodeAt(w++);
          if (z >= 55296 && z <= 56319 && w < U) {
            var n0 = E[p(1678)](w++);
            (n0 & 64512) == 56320 ? b.push(((z & 1023) << 10) + (n0 & 1023) + 65536) : (b[p(893)](z), w--);
          } else b[p(893)](z);
        }
        return b;
      }
      var o0 = function(p) {
        const b = e;
        return String.fromCodePoint[b(2832)](String, m(p));
      }, f0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : S;
      }, k0 = function(p, b) {
        return p + 22 + 75 * (p < 26) - ((b != 0) << 5);
      }, y0 = function(p, b, w) {
        var U = 0;
        for (p = w ? H(p / R) : p >> 1, p += H(p / b); p > $ * F >> 1; U += S)
          p = H(p / $);
        return H(U + ($ + 1) * p / (p + O));
      }, M0 = function(p) {
        const b = e;
        var w = [], U = p[b(1492)], z = 0, n0 = C, u0 = I, P0 = p[b(778)](A);
        P0 < 0 && (P0 = 0);
        for (var j0 = 0; j0 < P0; ++j0)
          p[b(1678)](j0) >= 128 && G("not-basic"), w.push(p[b(1678)](j0));
        for (var Z0 = P0 > 0 ? P0 + 1 : 0; Z0 < U; ) {
          for (var E0 = z, D0 = 1, B0 = S; ; B0 += S) {
            Z0 >= U && G(b(1580));
            var b0 = f0(p.charCodeAt(Z0++));
            (b0 >= S || b0 > H((v - z) / D0)) && G(b(1512)), z += b0 * D0;
            var $0 = B0 <= u0 ? P : B0 >= u0 + F ? F : B0 - u0;
            if (b0 < $0) break;
            var W0 = S - $0;
            D0 > H(v / W0) && G(b(1512)), D0 *= W0;
          }
          var z0 = w.length + 1;
          u0 = y0(z - E0, z0, E0 == 0), H(z / z0) > v - n0 && G(b(1512)), n0 += H(z / z0), z %= z0, w[b(1401)](z++, 0, n0);
        }
        return String.fromCodePoint[b(2832)](String, w);
      }, F0 = function(p) {
        const b = e;
        var w = [];
        p = l0(p);
        var U = p[b(1492)], z = C, n0 = 0, u0 = I, P0 = !0, j0 = !1, Z0 = void 0;
        try {
          for (var E0 = p[Symbol[b(2352)]](), D0; !(P0 = (D0 = E0.next())[b(1600)]); P0 = !0) {
            var B0 = D0[b(1454)];
            B0 < 128 && w[b(893)](V(B0));
          }
        } catch (Je) {
          j0 = !0, Z0 = Je;
        } finally {
          try {
            !P0 && E0.return && E0[b(762)]();
          } finally {
            if (j0) throw Z0;
          }
        }
        var b0 = w[b(1492)], $0 = b0;
        for (b0 && w.push(A); $0 < U; ) {
          var W0 = v, z0 = !0, Pe = !1, oe = void 0;
          try {
            for (var ce = p[Symbol[b(2352)]](), ze; !(z0 = (ze = ce[b(1516)]()).done); z0 = !0) {
              var Fe = ze[b(1454)];
              Fe >= z && Fe < W0 && (W0 = Fe);
            }
          } catch (Je) {
            Pe = !0, oe = Je;
          } finally {
            try {
              !z0 && ce.return && ce[b(762)]();
            } finally {
              if (Pe) throw oe;
            }
          }
          var te = $0 + 1;
          W0 - z > H((v - n0) / te) && G(b(1512)), n0 += (W0 - z) * te, z = W0;
          var de = !0, ge = !1, be = void 0;
          try {
            for (var ue = p[Symbol[b(2352)]](), ya; !(de = (ya = ue.next()).done); de = !0) {
              var va = ya[b(1454)];
              if (va < z && ++n0 > v && G("overflow"), va == z) {
                for (var cx = n0, dx = S; ; dx += S) {
                  var ux = dx <= u0 ? P : dx >= u0 + F ? F : dx - u0;
                  if (cx < ux) break;
                  var wa = cx - ux, Sa = S - ux;
                  w[b(893)](V(k0(ux + wa % Sa, 0))), cx = H(wa / Sa);
                }
                w.push(V(k0(cx, 0))), u0 = y0(n0, te, $0 == b0), n0 = 0, ++$0;
              }
            }
          } catch (Je) {
            ge = !0, be = Je;
          } finally {
            try {
              !de && ue[b(762)] && ue.return();
            } finally {
              if (ge) throw be;
            }
          }
          ++n0, ++z;
        }
        return w.join("");
      }, Y0 = function(p) {
        return d0(p, function(b) {
          const w = K;
          return j[w(2553)](b) ? M0(b[w(1981)](4)[w(1861)]()) : b;
        });
      }, D = function(p) {
        return d0(p, function(b) {
          const w = K;
          return L.test(b) ? w(1756) + F0(b) : b;
        });
      }, T = { version: "2.1.0", ucs2: { decode: l0, encode: o0 }, decode: M0, encode: F0, toASCII: D, toUnicode: Y0 }, M = {};
      function X(E) {
        const p = e;
        var b = E[p(1678)](0), w = void 0;
        return b < 16 ? w = "%0" + b[p(2643)](16)[p(1176)]() : b < 128 ? w = "%" + b[p(2643)](16).toUpperCase() : b < 2048 ? w = "%" + (b >> 6 | 192)[p(2643)](16)[p(1176)]() + "%" + (b & 63 | 128)[p(2643)](16)[p(1176)]() : w = "%" + (b >> 12 | 224)[p(2643)](16)[p(1176)]() + "%" + (b >> 6 & 63 | 128)[p(2643)](16)[p(1176)]() + "%" + (b & 63 | 128)[p(2643)](16).toUpperCase(), w;
      }
      function _(E) {
        const p = e;
        for (var b = "", w = 0, U = E.length; w < U; ) {
          var z = parseInt(E[p(1801)](w + 1, 2), 16);
          if (z < 128) b += String[p(785)](z), w += 3;
          else if (z >= 194 && z < 224) {
            if (U - w >= 6) {
              var n0 = parseInt(E[p(1801)](w + 4, 2), 16);
              b += String[p(785)]((z & 31) << 6 | n0 & 63);
            } else b += E.substr(w, 6);
            w += 6;
          } else if (z >= 224) {
            if (U - w >= 9) {
              var u0 = parseInt(E[p(1801)](w + 4, 2), 16), P0 = parseInt(E.substr(w + 7, 2), 16);
              b += String[p(785)]((z & 15) << 12 | (u0 & 63) << 6 | P0 & 63);
            } else b += E[p(1801)](w, 9);
            w += 9;
          } else b += E[p(1801)](w, 3), w += 3;
        }
        return b;
      }
      function Z(E, p) {
        const b = e;
        function w(U) {
          const z = K;
          var n0 = _(U);
          return n0[z(2467)](p[z(2137)]) ? n0 : U;
        }
        return E[b(2325)] && (E[b(2325)] = String(E[b(2325)]).replace(p[b(639)], w).toLowerCase()[b(499)](p[b(1406)], "")), E.userinfo !== void 0 && (E[b(1504)] = String(E[b(1504)])[b(499)](p[b(639)], w)[b(499)](p[b(1544)], X)[b(499)](p[b(639)], c)), E[b(2930)] !== void 0 && (E[b(2930)] = String(E[b(2930)])[b(499)](p[b(639)], w)[b(1861)]()[b(499)](p.NOT_HOST, X).replace(p[b(639)], c)), E[b(1522)] !== void 0 && (E[b(1522)] = String(E[b(1522)]).replace(p[b(639)], w)[b(499)](E[b(2325)] ? p[b(2030)] : p.NOT_PATH_NOSCHEME, X)[b(499)](p[b(639)], c)), E[b(1493)] !== void 0 && (E[b(1493)] = String(E.query)[b(499)](p[b(639)], w)[b(499)](p.NOT_QUERY, X)[b(499)](p[b(639)], c)), E[b(1568)] !== void 0 && (E[b(1568)] = String(E[b(1568)])[b(499)](p.PCT_ENCODED, w)[b(499)](p[b(2767)], X)[b(499)](p[b(639)], c)), E;
      }
      function Q(E) {
        return E[e(499)](/^0*(.*)/, "$1") || "0";
      }
      function s0(E, p) {
        const b = e;
        var w = E[b(2467)](p.IPV4ADDRESS) || [], U = h(w, 2), z = U[1];
        return z ? z[b(2889)](".")[b(1790)](Q)[b(727)](".") : E;
      }
      function i0(E, p) {
        const b = e;
        var w = E[b(2467)](p[b(2604)]) || [], U = h(w, 3), z = U[1], n0 = U[2];
        if (z) {
          for (var u0 = z.toLowerCase()[b(2889)]("::")[b(2092)](), P0 = h(u0, 2), j0 = P0[0], Z0 = P0[1], E0 = Z0 ? Z0[b(2889)](":")[b(1790)](Q) : [], D0 = j0[b(2889)](":")[b(1790)](Q), B0 = p[b(677)][b(2553)](D0[D0[b(1492)] - 1]), b0 = B0 ? 7 : 8, $0 = D0.length - b0, W0 = Array(b0), z0 = 0; z0 < b0; ++z0)
            W0[z0] = E0[z0] || D0[$0 + z0] || "";
          B0 && (W0[b0 - 1] = s0(W0[b0 - 1], p));
          var Pe = W0[b(787)](function(te, de, ge) {
            const be = b;
            if (!de || de === "0") {
              var ue = te[te[be(1492)] - 1];
              ue && ue.index + ue[be(1492)] === ge ? ue[be(1492)]++ : te[be(893)]({ index: ge, length: 1 });
            }
            return te;
          }, []), oe = Pe[b(610)](function(te, de) {
            const ge = b;
            return de.length - te[ge(1492)];
          })[0], ce = void 0;
          if (oe && oe.length > 1) {
            var ze = W0[b(1981)](0, oe[b(1759)]), Fe = W0[b(1981)](oe.index + oe[b(1492)]);
            ce = ze[b(727)](":") + "::" + Fe.join(":");
          } else ce = W0[b(727)](":");
          return n0 && (ce += "%" + n0), ce;
        } else return E;
      }
      var a0 = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, L0 = ""[e(2467)](/(){0}/)[1] === void 0;
      function O0(E) {
        const p = e;
        var b = arguments[p(1492)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = {}, U = b[p(899)] !== !1 ? g : l;
        b[p(2179)] === p(2206) && (E = (b[p(2325)] ? b.scheme + ":" : "") + "//" + E);
        var z = E[p(2467)](a0);
        if (z) {
          L0 ? (w.scheme = z[1], w[p(1504)] = z[3], w[p(2930)] = z[4], w.port = parseInt(z[5], 10), w.path = z[6] || "", w[p(1493)] = z[7], w[p(1568)] = z[8], isNaN(w[p(1004)]) && (w[p(1004)] = z[5])) : (w[p(2325)] = z[1] || void 0, w[p(1504)] = E[p(2098)]("@") !== -1 ? z[3] : void 0, w.host = E[p(2098)]("//") !== -1 ? z[4] : void 0, w[p(1004)] = parseInt(z[5], 10), w[p(1522)] = z[6] || "", w[p(1493)] = E[p(2098)]("?") !== -1 ? z[7] : void 0, w[p(1568)] = E[p(2098)]("#") !== -1 ? z[8] : void 0, isNaN(w[p(1004)]) && (w[p(1004)] = E.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? z[4] : void 0)), w.host && (w.host = i0(s0(w.host, U), U)), w[p(2325)] === void 0 && w[p(1504)] === void 0 && w[p(2930)] === void 0 && w.port === void 0 && !w[p(1522)] && w.query === void 0 ? w.reference = "same-document" : w[p(2325)] === void 0 ? w[p(2179)] = p(2089) : w[p(1568)] === void 0 ? w[p(2179)] = p(2277) : w[p(2179)] = "uri", b.reference && b[p(2179)] !== p(2206) && b[p(2179)] !== w[p(2179)] && (w[p(1978)] = w[p(1978)] || "URI is not a " + b[p(2179)] + p(2591));
          var n0 = M[(b.scheme || w[p(2325)] || "")[p(1861)]()];
          if (!b[p(2696)] && (!n0 || !n0[p(2696)])) {
            if (w[p(2930)] && (b[p(1460)] || n0 && n0[p(1460)])) try {
              w[p(2930)] = T[p(1275)](w[p(2930)][p(499)](U[p(639)], _)[p(1861)]());
            } catch (u0) {
              w[p(1978)] = w.error || p(2294) + u0;
            }
            Z(w, l);
          } else Z(w, U);
          n0 && n0[p(1205)] && n0[p(1205)](w, b);
        } else w[p(1978)] = w[p(1978)] || p(2476);
        return w;
      }
      function U0(E, p) {
        const b = e;
        var w = p[b(899)] !== !1 ? g : l, U = [];
        return E.userinfo !== void 0 && (U.push(E[b(1504)]), U[b(893)]("@")), E.host !== void 0 && U[b(893)](i0(s0(String(E.host), w), w)[b(499)](w[b(2604)], function(z, n0, u0) {
          const P0 = b;
          return "[" + n0 + (u0 ? P0(800) + u0 : "") + "]";
        })), (typeof E[b(1004)] === b(1120) || typeof E[b(1004)] == "string") && (U[b(893)](":"), U[b(893)](String(E[b(1004)]))), U.length ? U.join("") : void 0;
      }
      var S0 = /^\.\.?\//, J0 = /^\/\.(\/|$)/, ne = /^\/\.\.(\/|$)/, Q0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function A0(E) {
        const p = e;
        for (var b = []; E[p(1492)]; )
          if (E[p(2467)](S0)) E = E[p(499)](S0, "");
          else if (E[p(2467)](J0)) E = E[p(499)](J0, "/");
          else if (E[p(2467)](ne)) E = E[p(499)](ne, "/"), b[p(867)]();
          else if (E === "." || E === "..") E = "";
          else {
            var w = E[p(2467)](Q0);
            if (w) {
              var U = w[0];
              E = E[p(1981)](U[p(1492)]), b[p(893)](U);
            } else throw new Error(p(794));
          }
        return b[p(727)]("");
      }
      function H0(E) {
        const p = e;
        var b = arguments[p(1492)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = b[p(899)] ? g : l, U = [], z = M[(b[p(2325)] || E[p(2325)] || "")[p(1861)]()];
        if (z && z[p(1970)] && z[p(1970)](E, b), E.host && !w[p(2604)][p(2553)](E[p(2930)])) {
          if (b.domainHost || z && z[p(1460)]) try {
            E[p(2930)] = b.iri ? T.toUnicode(E.host) : T[p(1275)](E[p(2930)][p(499)](w[p(639)], _).toLowerCase());
          } catch (P0) {
            E[p(1978)] = E.error || p(1098) + (b[p(899)] ? p(2481) : p(1053)) + p(698) + P0;
          }
        }
        Z(E, w), b[p(2179)] !== p(2206) && E[p(2325)] && (U[p(893)](E[p(2325)]), U[p(893)](":"));
        var n0 = U0(E, b);
        if (n0 !== void 0 && (b.reference !== "suffix" && U[p(893)]("//"), U[p(893)](n0), E[p(1522)] && E.path[p(1974)](0) !== "/" && U.push("/")), E[p(1522)] !== void 0) {
          var u0 = E.path;
          !b.absolutePath && (!z || !z[p(1507)]) && (u0 = A0(u0)), n0 === void 0 && (u0 = u0[p(499)](/^\/\//, p(1172))), U[p(893)](u0);
        }
        return E[p(1493)] !== void 0 && (U[p(893)]("?"), U.push(E[p(1493)])), E.fragment !== void 0 && (U[p(893)]("#"), U[p(893)](E[p(1568)])), U.join("");
      }
      function _0(E, p) {
        const b = e;
        var w = arguments[b(1492)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, U = arguments[3], z = {};
        return !U && (E = O0(H0(E, w), w), p = O0(H0(p, w), w)), w = w || {}, !w[b(819)] && p[b(2325)] ? (z[b(2325)] = p[b(2325)], z[b(1504)] = p.userinfo, z[b(2930)] = p[b(2930)], z.port = p.port, z.path = A0(p[b(1522)] || ""), z[b(1493)] = p[b(1493)]) : (p[b(1504)] !== void 0 || p[b(2930)] !== void 0 || p[b(1004)] !== void 0 ? (z[b(1504)] = p.userinfo, z.host = p[b(2930)], z[b(1004)] = p.port, z[b(1522)] = A0(p[b(1522)] || ""), z[b(1493)] = p[b(1493)]) : (p[b(1522)] ? (p.path.charAt(0) === "/" ? z[b(1522)] = A0(p[b(1522)]) : ((E[b(1504)] !== void 0 || E.host !== void 0 || E[b(1004)] !== void 0) && !E.path ? z.path = "/" + p[b(1522)] : E[b(1522)] ? z[b(1522)] = E[b(1522)][b(1981)](0, E[b(1522)][b(778)]("/") + 1) + p[b(1522)] : z[b(1522)] = p.path, z[b(1522)] = A0(z[b(1522)])), z.query = p[b(1493)]) : (z[b(1522)] = E[b(1522)], p[b(1493)] !== void 0 ? z[b(1493)] = p.query : z[b(1493)] = E.query), z[b(1504)] = E[b(1504)], z[b(2930)] = E[b(2930)], z[b(1004)] = E[b(1004)]), z[b(2325)] = E[b(2325)]), z[b(1568)] = p[b(1568)], z;
      }
      function Le(E, p, b) {
        var U = u({ scheme: e(693) }, b);
        return H0(_0(O0(E, U), O0(p, U), U, !0), U);
      }
      function jx(E, p) {
        return typeof E == "string" ? E = H0(O0(E, p), p) : o(E) === "object" && (E = O0(H0(E, p), p)), E;
      }
      function da(E, p, b) {
        const w = e;
        return typeof E === w(1346) ? E = H0(O0(E, b), b) : o(E) === "object" && (E = H0(E, b)), typeof p === w(1346) ? p = H0(O0(p, b), b) : o(p) === w(2535) && (p = H0(p, b)), E === p;
      }
      function vn(E, p) {
        const b = e;
        return E && E[b(2643)]()[b(499)](!p || !p.iri ? l[b(1410)] : g[b(1410)], X);
      }
      function me(E, p) {
        const b = e;
        return E && E[b(2643)]()[b(499)](!p || !p[b(899)] ? l[b(639)] : g.PCT_ENCODED, _);
      }
      var Ke = { scheme: e(1540), domainHost: !0, parse: function(p, b) {
        const w = e;
        return !p.host && (p[w(1978)] = p[w(1978)] || w(2080)), p;
      }, serialize: function(p, b) {
        const w = e;
        var U = String(p[w(2325)])[w(1861)]() === w(682);
        return (p[w(1004)] === (U ? 443 : 80) || p[w(1004)] === "") && (p[w(1004)] = void 0), !p[w(1522)] && (p[w(1522)] = "/"), p;
      } }, ua = { scheme: e(682), domainHost: Ke.domainHost, parse: Ke[e(1205)], serialize: Ke[e(1970)] };
      function fa(E) {
        const p = e;
        return typeof E.secure === p(2173) ? E[p(2784)] : String(E[p(2325)])[p(1861)]() === p(2876);
      }
      var Ge = { scheme: "ws", domainHost: !0, parse: function(p, b) {
        const w = e;
        var U = p;
        return U[w(2784)] = fa(U), U[w(2839)] = (U.path || "/") + (U[w(1493)] ? "?" + U.query : ""), U[w(1522)] = void 0, U[w(1493)] = void 0, U;
      }, serialize: function(p, b) {
        const w = e;
        if ((p[w(1004)] === (fa(p) ? 443 : 80) || p[w(1004)] === "") && (p[w(1004)] = void 0), typeof p.secure === w(2173) && (p[w(2325)] = p[w(2784)] ? "wss" : "ws", p[w(2784)] = void 0), p[w(2839)]) {
          var U = p[w(2839)][w(2889)]("?"), z = h(U, 2), n0 = z[0], u0 = z[1];
          p[w(1522)] = n0 && n0 !== "/" ? n0 : void 0, p[w(1493)] = u0, p.resourceName = void 0;
        }
        return p[w(1568)] = void 0, p;
      } }, la = { scheme: e(2876), domainHost: Ge[e(1460)], parse: Ge[e(1205)], serialize: Ge[e(1970)] }, wn = {}, ha = e(2324) + e(2595) + "]", ie = e(1315), Sn = n(n(e(2798) + ie + "%" + ie + ie + "%" + ie + ie) + "|" + n("%[89A-Fa-f]" + ie + "%" + ie + ie) + "|" + n("%" + ie + ie)), kn = e(523), Pn = e(2715), En = r(Pn, '[\\"\\\\]'), In = e(1825), Rn = new RegExp(ha, "g"), $e = new RegExp(Sn, "g"), Cn = new RegExp(r(e(1955), kn, "[\\.]", e(1679), En), "g"), pa = new RegExp(r("[^]", ha, In), "g"), Fn = pa;
      function Mx(E) {
        const p = e;
        var b = _(E);
        return b[p(2467)](Rn) ? b : E;
      }
      var ma = { scheme: "mailto", parse: function(p, b) {
        const w = e;
        var U = p, z = U.to = U.path ? U[w(1522)][w(2889)](",") : [];
        if (U[w(1522)] = void 0, U[w(1493)]) {
          for (var n0 = !1, u0 = {}, P0 = U[w(1493)][w(2889)]("&"), j0 = 0, Z0 = P0[w(1492)]; j0 < Z0; ++j0) {
            var E0 = P0[j0][w(2889)]("=");
            switch (E0[0]) {
              case "to":
                for (var D0 = E0[1][w(2889)](","), B0 = 0, b0 = D0[w(1492)]; B0 < b0; ++B0)
                  z[w(893)](D0[B0]);
                break;
              case "subject":
                U.subject = me(E0[1], b);
                break;
              case w(2224):
                U[w(2224)] = me(E0[1], b);
                break;
              default:
                n0 = !0, u0[me(E0[0], b)] = me(E0[1], b);
                break;
            }
          }
          n0 && (U[w(864)] = u0);
        }
        U[w(1493)] = void 0;
        for (var $0 = 0, W0 = z.length; $0 < W0; ++$0) {
          var z0 = z[$0][w(2889)]("@");
          if (z0[0] = me(z0[0]), b[w(2696)]) z0[1] = me(z0[1], b).toLowerCase();
          else try {
            z0[1] = T[w(1275)](me(z0[1], b)[w(1861)]());
          } catch (Pe) {
            U[w(1978)] = U[w(1978)] || w(679) + Pe;
          }
          z[$0] = z0[w(727)]("@");
        }
        return U;
      }, serialize: function(p, b) {
        const w = e;
        var U = p, z = d(p.to);
        if (z) {
          for (var n0 = 0, u0 = z[w(1492)]; n0 < u0; ++n0) {
            var P0 = String(z[n0]), j0 = P0[w(778)]("@"), Z0 = P0[w(1981)](0, j0)[w(499)]($e, Mx)[w(499)]($e, c)[w(499)](Cn, X), E0 = P0.slice(j0 + 1);
            try {
              E0 = b[w(899)] ? T[w(1895)](E0) : T[w(1275)](me(E0, b)[w(1861)]());
            } catch ($0) {
              U[w(1978)] = U[w(1978)] || w(2204) + (b[w(899)] ? w(2481) : w(1053)) + w(698) + $0;
            }
            z[n0] = Z0 + "@" + E0;
          }
          U[w(1522)] = z.join(",");
        }
        var D0 = p[w(864)] = p[w(864)] || {};
        p[w(2801)] && (D0[w(2801)] = p.subject), p[w(2224)] && (D0.body = p.body);
        var B0 = [];
        for (var b0 in D0)
          D0[b0] !== wn[b0] && B0[w(893)](b0[w(499)]($e, Mx)[w(499)]($e, c).replace(pa, X) + "=" + D0[b0][w(499)]($e, Mx)[w(499)]($e, c)[w(499)](Fn, X));
        return B0[w(1492)] && (U[w(1493)] = B0.join("&")), U;
      } }, Nn = /^([^\:]+)\:(.*)/, ga = { scheme: e(1014), parse: function(p, b) {
        const w = e;
        var U = p[w(1522)] && p[w(1522)].match(Nn), z = p;
        if (U) {
          var n0 = b[w(2325)] || z[w(2325)] || w(1014), u0 = U[1][w(1861)](), P0 = U[2], j0 = n0 + ":" + (b.nid || u0), Z0 = M[j0];
          z[w(2415)] = u0, z[w(1399)] = P0, z[w(1522)] = void 0, Z0 && (z = Z0[w(1205)](z, b));
        } else z[w(1978)] = z.error || w(2725);
        return z;
      }, serialize: function(p, b) {
        const w = e;
        var U = b[w(2325)] || p[w(2325)] || w(1014), z = p.nid, n0 = U + ":" + (b[w(2415)] || z), u0 = M[n0];
        u0 && (p = u0.serialize(p, b));
        var P0 = p, j0 = p.nss;
        return P0[w(1522)] = (z || b[w(2415)]) + ":" + j0, P0;
      } }, qn = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, ba = { scheme: "urn:uuid", parse: function(p, b) {
        const w = e;
        var U = p;
        return U[w(1805)] = U[w(1399)], U[w(1399)] = void 0, !b[w(819)] && (!U[w(1805)] || !U[w(1805)][w(2467)](qn)) && (U[w(1978)] = U.error || "UUID is not valid."), U;
      }, serialize: function(p, b) {
        const w = e;
        var U = p;
        return U[w(1399)] = (p[w(1805)] || "").toLowerCase(), U;
      } };
      M[Ke[e(2325)]] = Ke, M[ua[e(2325)]] = ua, M[Ge[e(2325)]] = Ge, M[la[e(2325)]] = la, M[ma.scheme] = ma, M[ga.scheme] = ga, M[ba.scheme] = ba, s[e(2016)] = M, s[e(1987)] = X, s[e(2918)] = _, s[e(1205)] = O0, s.removeDotSegments = A0, s[e(1970)] = H0, s.resolveComponents = _0, s[e(1362)] = Le, s[e(2435)] = jx, s[e(1270)] = da, s[e(2748)] = vn, s.unescapeComponent = me, Object[e(1467)](s, e(2734), { value: !0 });
    });
  }(_e, _e.exports)), _e[i(1341)];
}
var Wx, er;
function ia() {
  return er || (er = 1, Wx = function i(x, t) {
    const s = K;
    if (x === t) return !0;
    if (x && t && typeof x == s(2535) && typeof t == "object") {
      if (x[s(2527)] !== t[s(2527)]) return !1;
      var e, r, n;
      if (Array[s(1320)](x)) {
        if (e = x[s(1492)], e != t[s(1492)]) return !1;
        for (r = e; r-- !== 0; ) if (!i(x[r], t[r])) return !1;
        return !0;
      }
      if (x[s(2527)] === RegExp) return x[s(1821)] === t[s(1821)] && x[s(1738)] === t[s(1738)];
      if (x[s(2683)] !== Object[s(757)].valueOf) return x[s(2683)]() === t.valueOf();
      if (x[s(2643)] !== Object[s(757)][s(2643)]) return x[s(2643)]() === t[s(2643)]();
      if (n = Object.keys(x), e = n[s(1492)], e !== Object[s(2693)](t).length) return !1;
      for (r = e; r-- !== 0; ) if (!Object[s(757)][s(2472)][s(983)](t, n[r])) return !1;
      for (r = e; r-- !== 0; ) {
        var o = n[r];
        if (!i(x[o], t[o])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), Wx;
}
var Kx, xr;
function H2() {
  return xr || (xr = 1, Kx = function(x) {
    const t = K;
    for (var s = 0, e = x[t(1492)], r = 0, n; r < e; )
      s++, n = x[t(1678)](r++), n >= 55296 && n <= 56319 && r < e && (n = x[t(1678)](r), (n & 64512) == 56320 && r++);
    return s;
  }), Kx;
}
var Gx, tr;
function We() {
  const i = a;
  if (tr) return Gx;
  tr = 1, Gx = { copy: x, checkDataType: t, checkDataTypes: s, coerceToTypes: r, toHash: n, getProperty: d, escapeQuotes: u, equal: ia(), ucs2length: H2(), varOccurences: f, varReplace: l, schemaHasRules: g, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: v, getPathExpr: S, getPath: P, getData: R, unescapeFragment: C, unescapeJsonPointer: L, escapeFragment: A, escapeJsonPointer: j };
  function x(q, N) {
    N = N || {};
    for (var $ in q) N[$] = q[$];
    return N;
  }
  function t(q, N, $, H) {
    const V = K;
    var G = H ? V(1119) : " === ", c0 = H ? " || " : V(2982), d0 = H ? "!" : "", l0 = H ? "" : "!";
    switch (q) {
      case V(693):
        return N + G + V(693);
      case "array":
        return d0 + V(1374) + N + ")";
      case V(2535):
        return "(" + d0 + N + c0 + V(1898) + N + G + V(1521) + c0 + l0 + "Array.isArray(" + N + "))";
      case V(2656):
        return "(typeof " + N + G + '"number"' + c0 + l0 + "(" + N + V(1210) + c0 + N + G + N + ($ ? c0 + d0 + "isFinite(" + N + ")" : "") + ")";
      case "number":
        return V(2314) + N + G + '"' + q + '"' + ($ ? c0 + d0 + V(517) + N + ")" : "") + ")";
      default:
        return V(1898) + N + G + '"' + q + '"';
    }
  }
  function s(q, N, $) {
    const H = K;
    switch (q.length) {
      case 1:
        return t(q[0], N, $, !0);
      default:
        var V = "", G = n(q);
        G[H(1355)] && G[H(2535)] && (V = G.null ? "(" : "(!" + N + H(2165), V += H(1898) + N + H(905), delete G[H(693)], delete G.array, delete G[H(2535)]), G[H(1120)] && delete G[H(2656)];
        for (var c0 in G) V += (V ? H(2982) : "") + t(c0, N, $, !0);
        return V;
    }
  }
  var e = n([i(1346), "number", i(2656), i(2173), i(693)]);
  function r(q, N) {
    const $ = i;
    if (Array[$(1320)](N)) {
      for (var H = [], V = 0; V < N[$(1492)]; V++) {
        var G = N[V];
        (e[G] || q === $(1355) && G === $(1355)) && (H[H[$(1492)]] = G);
      }
      if (H[$(1492)]) return H;
    } else {
      if (e[N]) return [N];
      if (q === $(1355) && N === $(1355)) return ["array"];
    }
  }
  function n(q) {
    for (var N = {}, $ = 0; $ < q.length; $++) N[q[$]] = !0;
    return N;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function d(q) {
    const N = i;
    return typeof q == N(1120) ? "[" + q + "]" : o[N(2553)](q) ? "." + q : "['" + u(q) + "']";
  }
  function u(q) {
    const N = i;
    return q[N(499)](c, "\\$&").replace(/\n/g, "\\n")[N(499)](/\r/g, "\\r")[N(499)](/\f/g, "\\f")[N(499)](/\t/g, "\\t");
  }
  function f(q, N) {
    const $ = i;
    N += "[^0-9]";
    var H = q[$(2467)](new RegExp(N, "g"));
    return H ? H[$(1492)] : 0;
  }
  function l(q, N, $) {
    const H = i;
    return N += H(2512), $ = $[H(499)](/\$/g, H(622)), q[H(499)](new RegExp(N, "g"), $ + "$1");
  }
  function g(q, N) {
    if (typeof q == "boolean") return !q;
    for (var $ in q) if (N[$]) return !0;
  }
  function h(q, N, $) {
    const H = i;
    if (typeof q == H(2173)) return !q && $ != H(2719);
    for (var V in q) if (V != $ && N[V]) return !0;
  }
  function m(q, N) {
    if (typeof q != i(2173)) {
      for (var H in q) if (!N[H]) return H;
    }
  }
  function v(q) {
    return "'" + u(q) + "'";
  }
  function S(q, N, $, H) {
    const V = i;
    var G = $ ? V(1628) + N + (H ? "" : V(2685)) : H ? V(1114) + N + V(1288) : "'[\\'' + " + N + V(2783);
    return I(q, G);
  }
  function P(q, N, $) {
    var H = v($ ? "/" + j(N) : d(N));
    return I(q, H);
  }
  var F = /^\/(?:[^~]|~0|~1)*$/, O = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function R(q, N, $) {
    const H = i;
    var V, G, c0, d0;
    if (q === "") return "rootData";
    if (q[0] == "/") {
      if (!F[H(2553)](q)) throw new Error(H(2462) + q);
      G = q, c0 = H(2343);
    } else {
      if (d0 = q[H(2467)](O), !d0) throw new Error(H(2462) + q);
      if (V = +d0[1], G = d0[2], G == "#") {
        if (V >= N) throw new Error(H(951) + V + " levels up, current level is " + N);
        return $[N - V];
      }
      if (V > N) throw new Error(H(2741) + V + H(2852) + N);
      if (c0 = H(1369) + (N - V || ""), !G) return c0;
    }
    for (var l0 = c0, o0 = G[H(2889)]("/"), f0 = 0; f0 < o0[H(1492)]; f0++) {
      var k0 = o0[f0];
      k0 && (c0 += d(L(k0)), l0 += H(2982) + c0);
    }
    return l0;
  }
  function I(q, N) {
    const $ = i;
    return q == '""' ? N : (q + $(1413) + N)[$(499)](/([^\\])' \+ '/g, "$1");
  }
  function C(q) {
    return L(decodeURIComponent(q));
  }
  function A(q) {
    return encodeURIComponent(j(q));
  }
  function j(q) {
    const N = i;
    return q[N(499)](/~/g, "~0")[N(499)](/\//g, "~1");
  }
  function L(q) {
    const N = i;
    return q[N(499)](/~1/g, "/")[N(499)](/~0/g, "~");
  }
  return Gx;
}
var Jx, ar;
function ln() {
  if (ar) return Jx;
  ar = 1;
  var i = We();
  Jx = x;
  function x(t) {
    i[K(2867)](t, this);
  }
  return Jx;
}
var Qx = { exports: {} }, rr;
function V2() {
  const i = a;
  if (rr) return Qx[i(1341)];
  rr = 1;
  var x = Qx[i(1341)] = function(e, r, n) {
    const o = i;
    typeof r == o(621) && (n = r, r = {}), n = r.cb || n;
    var c = typeof n == o(621) ? n : n[o(855)] || function() {
    }, d = n.post || function() {
    };
    t(r, c, d, e, "", e);
  };
  x[i(2585)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[i(1927)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x.propsKeywords = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x.skipKeywords = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, r, n, o, c, d, u, f, l, g) {
    const h = i;
    if (o && typeof o == h(2535) && !Array[h(1320)](o)) {
      r(o, c, d, u, f, l, g);
      for (var m in o) {
        var v = o[m];
        if (Array[h(1320)](v)) {
          if (m in x[h(1927)])
            for (var S = 0; S < v[h(1492)]; S++) t(e, r, n, v[S], c + "/" + m + "/" + S, d, c, m, o, S);
        } else if (m in x[h(1566)]) {
          if (v && typeof v == h(2535))
            for (var P in v) t(e, r, n, v[P], c + "/" + m + "/" + s(P), d, c, m, o, P);
        } else (m in x[h(2585)] || e[h(2493)] && !(m in x.skipKeywords)) && t(e, r, n, v, c + "/" + m, d, c, m, o);
      }
      n(o, c, d, u, f, l, g);
    }
  }
  function s(e) {
    const r = i;
    return e[r(499)](/~/g, "~0")[r(499)](/\//g, "~1");
  }
  return Qx.exports;
}
var Xx, sr;
function oa() {
  const i = a;
  if (sr) return Xx;
  sr = 1;
  var x = U2(), t = ia(), s = We(), e = ln(), r = V2();
  Xx = n, n[i(2655)] = P, n[i(1784)] = m, n[i(1144)] = F, n[i(1384)] = O, n[i(2348)] = l, n[i(2485)] = o;
  function n(R, I, C) {
    const A = i;
    var j = this[A(1251)][C];
    if (typeof j == A(1346))
      if (this._refs[j]) j = this[A(1251)][j];
      else return n[A(983)](this, R, I, j);
    if (j = j || this[A(2782)][C], j instanceof e) return l(j[A(2485)], this[A(2392)].inlineRefs) ? j[A(2485)] : j[A(896)] || this[A(2764)](j);
    var L = o[A(983)](this, I, C), q, N, $;
    return L && (q = L[A(2485)], I = L.root, $ = L.baseId), q instanceof e ? N = q[A(896)] || R.call(this, q[A(2485)], I, void 0, $) : q !== void 0 && (N = l(q, this[A(2392)].inlineRefs) ? q : R[A(983)](this, q, I, void 0, $)), N;
  }
  function o(R, I) {
    const C = i;
    var A = x.parse(I), j = v(A), L = m(this._getId(R[C(2485)]));
    if (Object[C(2693)](R[C(2485)])[C(1492)] === 0 || j !== L) {
      var q = P(j), N = this[C(1251)][q];
      if (typeof N == C(1346)) return c[C(983)](this, R, N, A);
      if (N instanceof e)
        N[C(896)] || this._compile(N), R = N;
      else if (N = this[C(2782)][q], N instanceof e) {
        if (N[C(896)] || this._compile(N), q == P(I)) return { schema: N, root: R, baseId: L };
        R = N;
      } else return;
      if (!R[C(2485)]) return;
      L = m(this._getId(R.schema));
    }
    return u[C(983)](this, A, L, R.schema, R);
  }
  function c(R, I, C) {
    const A = i;
    var j = o.call(this, R, I);
    if (j) {
      var L = j[A(2485)], q = j[A(558)];
      R = j[A(2208)];
      var N = this[A(718)](L);
      return N && (q = F(q, N)), u[A(983)](this, C, q, L, R);
    }
  }
  var d = s[i(878)](["properties", i(634), "enum", "dependencies", i(865)]);
  function u(R, I, C, A) {
    const j = i;
    if (R[j(1568)] = R[j(1568)] || "", R[j(1568)][j(1981)](0, 1) == "/") {
      for (var L = R[j(1568)][j(2889)]("/"), q = 1; q < L[j(1492)]; q++) {
        var N = L[q];
        if (N) {
          if (N = s.unescapeFragment(N), C = C[N], C === void 0) break;
          var $;
          if (!d[N] && ($ = this[j(718)](C), $ && (I = F(I, $)), C.$ref)) {
            var H = F(I, C[j(1104)]), V = o.call(this, A, H);
            V && (C = V[j(2485)], A = V[j(2208)], I = V[j(558)]);
          }
        }
      }
      if (C !== void 0 && C !== A[j(2485)]) return { schema: C, root: A, baseId: I };
    }
  }
  var f = s[i(878)]([i(2417), "format", i(2407), i(1080), i(908), i(1830), i(1469), i(2858), "minItems", i(2717), i(2551), "uniqueItems", "multipleOf", "required", i(2304)]);
  function l(R, I) {
    if (I === !1) return !1;
    if (I === void 0 || I === !0) return g(R);
    if (I) return h(R) <= I;
  }
  function g(R) {
    const I = i;
    var C;
    if (Array[I(1320)](R)) {
      for (var A = 0; A < R[I(1492)]; A++)
        if (C = R[A], typeof C == I(2535) && !g(C)) return !1;
    } else for (var j in R)
      if (j == I(1104) || (C = R[j], typeof C == "object" && !g(C))) return !1;
    return !0;
  }
  function h(R) {
    const I = i;
    var C = 0, A;
    if (Array[I(1320)](R)) {
      for (var j = 0; j < R[I(1492)]; j++)
        if (A = R[j], typeof A == "object" && (C += h(A)), C == 1 / 0) return 1 / 0;
    } else for (var L in R) {
      if (L == "$ref") return 1 / 0;
      if (f[L]) C++;
      else if (A = R[L], typeof A == "object" && (C += h(A) + 1), C == 1 / 0) return 1 / 0;
    }
    return C;
  }
  function m(R, I) {
    const C = i;
    I !== !1 && (R = P(R));
    var A = x[C(1205)](R);
    return v(A);
  }
  function v(R) {
    const I = i;
    return x[I(1970)](R)[I(2889)]("#")[0] + "#";
  }
  var S = /#\/?$/;
  function P(R) {
    return R ? R[i(499)](S, "") : "";
  }
  function F(R, I) {
    const C = i;
    return I = P(I), x[C(1362)](R, I);
  }
  function O(R) {
    const I = i;
    var C = P(this[I(718)](R)), A = { "": C }, j = { "": m(C, !1) }, L = {}, q = this;
    return r(R, { allKeys: !0 }, function(N, $, H, V, G, c0, d0) {
      const l0 = I;
      if ($ !== "") {
        var o0 = q[l0(718)](N), f0 = A[V], k0 = j[V] + "/" + G;
        if (d0 !== void 0 && (k0 += "/" + (typeof d0 == "number" ? d0 : s.escapeFragment(d0))), typeof o0 == "string") {
          o0 = f0 = P(f0 ? x[l0(1362)](f0, o0) : o0);
          var y0 = q[l0(1251)][o0];
          if (typeof y0 == l0(1346) && (y0 = q[l0(1251)][y0]), y0 && y0[l0(2485)]) {
            if (!t(N, y0.schema)) throw new Error(l0(1283) + o0 + l0(1482));
          } else if (o0 != P(k0))
            if (o0[0] == "#") {
              if (L[o0] && !t(N, L[o0])) throw new Error(l0(1283) + o0 + l0(1482));
              L[o0] = N;
            } else q._refs[o0] = k0;
        }
        A[$] = f0, j[$] = k0;
      }
    }), L;
  }
  return Xx;
}
var Yx, nr;
function ca() {
  const i = a;
  if (nr) return Yx;
  nr = 1;
  var x = oa();
  Yx = { Validation: e(t), MissingRef: e(s) };
  function t(r) {
    const n = K;
    this[n(1261)] = n(919), this[n(862)] = r, this.ajv = this[n(2883)] = !0;
  }
  s[i(1261)] = function(r, n) {
    const o = i;
    return "can't resolve reference " + n + o(2855) + r;
  };
  function s(r, n, o) {
    const c = i;
    this.message = o || s.message(r, n), this[c(1091)] = x[c(1144)](r, n), this[c(2682)] = x[c(2655)](x[c(1784)](this.missingRef));
  }
  function e(r) {
    const n = i;
    return r[n(757)] = Object.create(Error[n(757)]), r[n(757)][n(2527)] = r, r;
  }
  return Yx;
}
var _x, ir;
function hn() {
  return ir || (ir = 1, _x = function(i, x) {
    const t = K;
    x || (x = {}), typeof x == "function" && (x = { cmp: x });
    var s = typeof x.cycles == "boolean" ? x.cycles : !1, e = x[t(795)] && /* @__PURE__ */ function(n) {
      return function(o) {
        return function(c, d) {
          var u = { key: c, value: o[c] }, f = { key: d, value: o[d] };
          return n(u, f);
        };
      };
    }(x[t(795)]), r = [];
    return function n(o) {
      const c = t;
      if (o && o.toJSON && typeof o[c(2854)] == "function" && (o = o[c(2854)]()), o !== void 0) {
        if (typeof o == c(1120)) return isFinite(o) ? "" + o : c(693);
        if (typeof o !== c(2535)) return JSON[c(2149)](o);
        var d, u;
        if (Array[c(1320)](o)) {
          for (u = "[", d = 0; d < o[c(1492)]; d++)
            d && (u += ","), u += n(o[d]) || c(693);
          return u + "]";
        }
        if (o === null) return c(693);
        if (r.indexOf(o) !== -1) {
          if (s) return JSON[c(2149)](c(850));
          throw new TypeError(c(2939));
        }
        var f = r[c(893)](o) - 1, l = Object[c(2693)](o).sort(e && e(o));
        for (u = "", d = 0; d < l[c(1492)]; d++) {
          var g = l[d], h = n(o[g]);
          h && (u && (u += ","), u += JSON.stringify(g) + ":" + h);
        }
        return r.splice(f, 1), "{" + u + "}";
      }
    }(i);
  }), _x;
}
var et, or;
function pn() {
  return or || (or = 1, et = function(x, t, s) {
    const e = K;
    var r = "", n = x.schema[e(2499)] === !0, o = x[e(1530)].schemaHasRulesExcept(x[e(2485)], x[e(977)][e(2380)], e(1104)), c = x.self._getId(x.schema);
    if (x[e(988)][e(551)]) {
      var d = x[e(1530)][e(1930)](x[e(2485)], x.RULES[e(2585)]);
      if (d) {
        var u = "unknown keyword: " + d;
        if (x.opts[e(551)] === "log") x[e(1476)][e(2175)](u);
        else throw new Error(u);
      }
    }
    if (x[e(1227)] && (r += e(1277), n && (x[e(687)] = !0, r += "async "), r += e(1430), c && (x[e(988)].sourceCode || x[e(988)].processCode) && (r += " " + (e(2002) + c + e(2933)) + " ")), typeof x[e(2485)] == e(2173) || !(o || x[e(2485)].$ref)) {
      var t = "false schema", f = x[e(2227)], l = x[e(528)], g = x[e(2485)][t], h = x.schemaPath + x.util[e(2410)](t), m = x[e(928)] + "/" + t, I = !x[e(988)][e(1116)], j, v = e(1369) + (l || ""), R = e(1016) + f;
      if (x[e(2485)] === !1) {
        x[e(1227)] ? I = !0 : r += e(2153) + R + e(2210);
        var S = S || [];
        S[e(893)](r), r = "", x.createErrors !== !1 ? (r += " { keyword: '" + (j || "false schema") + e(2572) + x[e(1926)] + " , schemaPath: " + x[e(1530)][e(1032)](m) + e(2870), x.opts.messages !== !1 && (r += e(2508)), x[e(988)][e(2242)] && (r += e(1665) + x[e(1438)] + e(1574) + v + " "), r += e(2705)) : r += e(2903);
        var P = r;
        r = S.pop(), !x.compositeRule && I ? x[e(687)] ? r += e(1383) + P + e(1823) : r += e(724) + P + "]; return false; " : r += e(2329) + P + e(1217);
      } else x[e(1227)] ? n ? r += e(2788) : r += " validate.errors = null; return true; " : r += " var " + R + e(1591);
      return x[e(1227)] && (r += e(775)), r;
    }
    if (x.isTop) {
      var F = x[e(1227)], f = x[e(2227)] = 0, l = x[e(528)] = 0, v = e(1369);
      if (x.rootId = x[e(1362)][e(1784)](x.self[e(718)](x[e(2208)][e(2485)])), x[e(558)] = x[e(558)] || x[e(2371)], delete x.isTop, x[e(531)] = [""], x[e(2485)][e(1753)] !== void 0 && x.opts[e(2034)] && x.opts.strictDefaults) {
        var O = e(1713);
        if (x[e(988)][e(802)] === e(1017)) x.logger[e(2175)](O);
        else throw new Error(O);
      }
      r += e(2912), r += e(1287), r += " if (rootData === undefined) rootData = data; ";
    } else {
      var f = x[e(2227)], l = x[e(528)], v = e(1369) + (l || "");
      if (c && (x[e(558)] = x[e(1362)][e(1144)](x[e(558)], c)), n && !x[e(687)]) throw new Error(e(1003));
      r += e(2310) + f + e(2861);
    }
    var R = e(1016) + f, I = !x[e(988)][e(1116)], C = "", A = "", j, L = x.schema[e(2417)], q = Array[e(1320)](L);
    if (L && x[e(988)].nullable && x[e(2485)][e(2093)] === !0 && (q ? L[e(2098)](e(693)) == -1 && (L = L[e(2004)](e(693))) : L != e(693) && (L = [L, e(693)], q = !0)), q && L[e(1492)] == 1 && (L = L[0], q = !1), x[e(2485)][e(1104)] && o) {
      if (x[e(988)].extendRefs == "fail") throw new Error(e(1331) + x[e(928)] + e(2326));
      x.opts[e(2218)] !== !0 && (o = !1, x[e(1476)][e(2175)](e(2360) + x[e(928)] + '"'));
    }
    if (x.schema[e(2729)] && x[e(988)][e(2729)] && (r += " " + x[e(977)].all[e(2729)][e(2952)](x, e(2729))), L) {
      if (x.opts[e(2494)]) var N = x.util[e(1350)](x[e(988)][e(2494)], L);
      var $ = x[e(977)].types[L];
      if (N || q || $ === !0 || $ && !S0($)) {
        var h = x[e(1438)] + e(767), m = x[e(928)] + e(2439), h = x[e(1438)] + ".type", m = x[e(928)] + e(2439), H = e(q ? 1477 : 1702);
        if (r += e(1732) + x[e(1530)][H](L, v, x[e(988)][e(1039)], !0) + ") { ", N) {
          var V = e(2340) + f, G = e(2900) + f;
          r += e(2153) + V + e(1909) + v + e(569) + G + e(2605), x[e(988)][e(2494)] == e(1355) && (r += e(1732) + V + e(1841) + v + e(665) + v + e(2781) + v + e(2283) + v + e(1030) + V + e(1909) + v + e(2103) + x[e(1530)][e(1702)](x.schema.type, v, x[e(988)].strictNumbers) + ") " + G + " = " + v + "; } "), r += e(1732) + G + " !== undefined) ; ";
          var c0 = N;
          if (c0)
            for (var d0, l0 = -1, o0 = c0[e(1492)] - 1; l0 < o0; )
              d0 = c0[l0 += 1], d0 == e(1346) ? r += e(1567) + V + e(981) + V + " == 'boolean') " + G + e(2025) + v + e(2065) + v + e(2394) + G + e(2090) : d0 == "number" || d0 == e(2656) ? (r += e(1567) + V + e(2921) + v + e(1637) + V + e(2765) + v + e(2982) + v + e(563) + v + " ", d0 == e(2656) && (r += e(2871) + v + e(1210)), r += ")) " + G + e(764) + v + "; ") : d0 == e(2173) ? r += " else if (" + v + e(641) + v + " === 0 || " + v + e(2394) + G + e(2156) + v + e(773) + v + " === 1) " + G + e(1591) : d0 == e(693) ? r += e(1567) + v + e(1246) + v + " === 0 || " + v + e(1303) + G + " = null; " : x[e(988)].coerceTypes == "array" && d0 == e(1355) && (r += e(1567) + V + e(1957) + V + e(981) + V + e(2921) + v + e(1201) + G + e(519) + v + e(504));
          r += e(806);
          var S = S || [];
          S[e(893)](r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + (j || e(2417)) + "' , dataPath: (dataPath || '') + " + x[e(1926)] + " , schemaPath: " + x[e(1530)][e(1032)](m) + e(1539), q ? r += "" + L[e(727)](",") : r += "" + L, r += "' } ", x[e(988)].messages !== !1 && (r += e(1891), q ? r += "" + L[e(727)](",") : r += "" + L, r += "' "), x[e(988)][e(2242)] && (r += " , schema: validate.schema" + h + e(1152) + x[e(1438)] + e(1574) + v + " "), r += e(2705)) : r += " {} ";
          var P = r;
          r = S[e(867)](), !x[e(2965)] && I ? x[e(687)] ? r += e(1383) + P + "]); " : r += e(724) + P + e(2568) : r += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += e(1777) + G + e(2464);
          var f0 = l ? "data" + (l - 1 || "") : "parentData", k0 = l ? x.dataPathArr[l] : e(2458);
          r += " " + v + e(2283) + G + "; ", !l && (r += e(2537) + f0 + e(1048)), r += " " + f0 + "[" + k0 + e(2063) + G + "; } ";
        } else {
          var S = S || [];
          S.push(r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + (j || e(2417)) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(2425) + x[e(1530)][e(1032)](m) + e(1539), q ? r += "" + L[e(727)](",") : r += "" + L, r += e(2070), x[e(988)].messages !== !1 && (r += e(1891), q ? r += "" + L[e(727)](",") : r += "" + L, r += "' "), x[e(988)][e(2242)] && (r += e(953) + h + e(1152) + x[e(1438)] + " , data: " + v + " "), r += e(2705)) : r += e(2903);
          var P = r;
          r = S[e(867)](), !x[e(2965)] && I ? x[e(687)] ? r += e(1383) + P + e(1823) : r += " validate.errors = [" + P + e(2568) : r += e(2329) + P + e(1217);
        }
        r += e(2705);
      }
    }
    if (x[e(2485)][e(1104)] && !o) r += " " + x[e(977)][e(2380)][e(1104)].code(x, e(1104)) + " ", I && (r += e(2087), F ? r += "0" : r += e(1094) + f, r += e(1988), A += "}");
    else {
      var y0 = x[e(977)];
      if (y0) {
        for (var $, M0 = -1, F0 = y0.length - 1; M0 < F0; )
          if ($ = y0[M0 += 1], S0($)) {
            if ($.type && (r += e(1732) + x.util[e(1702)]($[e(2417)], v, x[e(988)][e(1039)]) + e(1988)), x[e(988)][e(2034)]) {
              if ($[e(2417)] == "object" && x[e(2485)][e(1089)]) {
                var g = x[e(2485)][e(1089)], Y0 = Object[e(2693)](g), D = Y0;
                if (D)
                  for (var T, M = -1, X = D[e(1492)] - 1; M < X; ) {
                    T = D[M += 1];
                    var _ = g[T];
                    if (_.default !== void 0) {
                      var Z = v + x.util[e(2410)](T);
                      if (x[e(2965)]) {
                        if (x.opts[e(802)]) {
                          var O = e(1976) + Z;
                          if (x[e(988)][e(802)] === "log") x[e(1476)][e(2175)](O);
                          else throw new Error(O);
                        }
                      } else r += " if (" + Z + e(2279), x[e(988)].useDefaults == e(1541) && (r += " || " + Z + " === null || " + Z + e(554)), r += e(1864) + Z + e(2283), x.opts[e(2034)] == e(1856) ? r += " " + x[e(2807)](_.default) + " " : r += " " + JSON[e(2149)](_.default) + " ", r += "; ";
                    }
                  }
              } else if ($[e(2417)] == e(1355) && Array.isArray(x.schema[e(2756)])) {
                var Q = x.schema[e(2756)];
                if (Q) {
                  for (var _, l0 = -1, s0 = Q[e(1492)] - 1; l0 < s0; )
                    if (_ = Q[l0 += 1], _[e(1753)] !== void 0) {
                      var Z = v + "[" + l0 + "]";
                      if (x[e(2965)]) {
                        if (x[e(988)][e(802)]) {
                          var O = e(1976) + Z;
                          if (x.opts[e(802)] === "log") x.logger[e(2175)](O);
                          else throw new Error(O);
                        }
                      } else r += " if (" + Z + " === undefined ", x[e(988)][e(2034)] == e(1541) && (r += e(2165) + Z + " === null || " + Z + e(554)), r += " ) " + Z + e(2283), x.opts.useDefaults == e(1856) ? r += " " + x[e(2807)](_[e(1753)]) + " " : r += " " + JSON.stringify(_[e(1753)]) + " ", r += "; ";
                    }
                }
              }
            }
            var i0 = $[e(2885)];
            if (i0) {
              for (var a0, L0 = -1, O0 = i0[e(1492)] - 1; L0 < O0; )
                if (a0 = i0[L0 += 1], J0(a0)) {
                  var U0 = a0[e(2952)](x, a0[e(2522)], $[e(2417)]);
                  U0 && (r += " " + U0 + " ", I && (C += "}"));
                }
            }
            if (I && (r += " " + C + " ", C = ""), $[e(2417)] && (r += e(2705), L && L === $[e(2417)] && !N)) {
              r += " else { ";
              var h = x[e(1438)] + ".type", m = x[e(928)] + "/type", S = S || [];
              S[e(893)](r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + (j || e(2417)) + e(2572) + x.errorPath + " , schemaPath: " + x.util[e(1032)](m) + e(1539), q ? r += "" + L.join(",") : r += "" + L, r += e(2070), x[e(988)][e(1273)] !== !1 && (r += e(1891), q ? r += "" + L[e(727)](",") : r += "" + L, r += "' "), x[e(988)].verbose && (r += e(953) + h + e(1152) + x[e(1438)] + e(1574) + v + " "), r += e(2705)) : r += e(2903);
              var P = r;
              r = S[e(867)](), !x[e(2965)] && I ? x[e(687)] ? r += " throw new ValidationError([" + P + e(1823) : r += " validate.errors = [" + P + "]; return false; " : r += " var err = " + P + e(1217), r += " } ";
            }
            I && (r += e(606), F ? r += "0" : r += e(1094) + f, r += e(1988), A += "}");
          }
      }
    }
    I && (r += " " + A + " "), F ? (n ? (r += " if (errors === 0) return data;           ", r += e(744)) : (r += e(1081), r += e(2967)), r += e(1958)) : r += e(2153) + R + e(600) + f + ";";
    function S0(Q0) {
      for (var H0 = Q0[e(2885)], _0 = 0; _0 < H0.length; _0++) if (J0(H0[_0])) return !0;
    }
    function J0(Q0) {
      const A0 = e;
      return x[A0(2485)][Q0[A0(2522)]] !== void 0 || Q0[A0(2749)] && ne(Q0);
    }
    function ne(Q0) {
      const A0 = e;
      for (var H0 = Q0[A0(2749)], _0 = 0; _0 < H0[A0(1492)]; _0++) if (x.schema[H0[_0]] !== void 0) return !0;
    }
    return r;
  }), et;
}
var xt, cr;
function Z2() {
  const i = a;
  if (cr) return xt;
  cr = 1;
  var x = oa(), t = We(), s = ca(), e = hn(), r = pn(), n = t[i(1880)], o = ia(), c = s[i(1207)];
  xt = d;
  function d(P, F, O, R) {
    const I = i;
    var C = this, A = this[I(2392)], j = [void 0], L = {}, q = [], N = {}, $ = [], H = {}, V = [];
    F = F || { schema: P, refVal: j, refs: L };
    var G = u[I(983)](this, P, F, R), c0 = this[I(2874)][G[I(1759)]];
    if (G[I(2215)]) return c0[I(716)] = k0;
    var d0 = this[I(2036)], l0 = this.RULES;
    try {
      var o0 = y0(P, F, O, R);
      c0[I(896)] = o0;
      var f0 = c0[I(716)];
      return f0 && (f0[I(2485)] = o0.schema, f0[I(862)] = null, f0[I(2433)] = o0.refs, f0.refVal = o0.refVal, f0.root = o0[I(2208)], f0[I(2499)] = o0[I(2499)], A.sourceCode && (f0[I(1821)] = o0[I(1821)])), o0;
    } finally {
      f.call(this, P, F, R);
    }
    function k0() {
      const Z = I;
      var Q = c0[Z(896)], s0 = Q[Z(2832)](this, arguments);
      return k0.errors = Q[Z(862)], s0;
    }
    function y0(Z, Q, s0, i0) {
      const a0 = I;
      var L0 = !Q || Q && Q[a0(2485)] == Z;
      if (Q.schema != F[a0(2485)]) return d[a0(983)](C, Z, Q, s0, i0);
      var O0 = Z.$async === !0, U0 = r({ isTop: !0, schema: Z, isRoot: L0, baseId: i0, root: Q, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: s.MissingRef, RULES: l0, validate: r, util: t, resolve: x, resolveRef: M0, usePattern: M, useDefault: X, useCustomRule: _, opts: A, formats: d0, logger: C[a0(1476)], self: C });
      U0 = S(j, m) + S(q, g) + S($, h) + S(V, v) + U0, A[a0(500)] && (U0 = A.processCode(U0, Z));
      var S0;
      try {
        var J0 = new Function(a0(2610), a0(977), a0(2463), a0(2208), a0(2803), a0(2971), a0(837), a0(1270), a0(1880), "ValidationError", U0);
        S0 = J0(C, l0, d0, F, j, $, V, o, n, c), j[0] = S0;
      } catch (ne) {
        throw C[a0(1476)][a0(1978)]("Error compiling schema, function code:", U0), ne;
      }
      return S0.schema = Z, S0.errors = null, S0[a0(2433)] = L, S0[a0(2803)] = j, S0[a0(2208)] = L0 ? S0 : Q, O0 && (S0[a0(2499)] = !0), A.sourceCode === !0 && (S0.source = { code: U0, patterns: q, defaults: $ }), S0;
    }
    function M0(Z, Q, s0) {
      const i0 = I;
      Q = x[i0(1144)](Z, Q);
      var a0 = L[Q], L0, O0;
      if (a0 !== void 0) return L0 = j[a0], O0 = i0(605) + a0 + "]", T(L0, O0);
      if (!s0 && F[i0(2433)]) {
        var U0 = F[i0(2433)][Q];
        if (U0 !== void 0) return L0 = F[i0(2803)][U0], O0 = F0(Q, L0), T(L0, O0);
      }
      O0 = F0(Q);
      var S0 = x.call(C, y0, F, Q);
      if (S0 === void 0) {
        var J0 = O && O[Q];
        J0 && (S0 = x[i0(2348)](J0, A.inlineRefs) ? J0 : d[i0(983)](C, J0, F, O, Z));
      }
      if (S0 === void 0) Y0(Q);
      else return D(Q, S0), T(S0, O0);
    }
    function F0(Z, Q) {
      const s0 = I;
      var i0 = j[s0(1492)];
      return j[i0] = Q, L[Z] = i0, s0(2803) + i0;
    }
    function Y0(Z) {
      delete L[Z];
    }
    function D(Z, Q) {
      var s0 = L[Z];
      j[s0] = Q;
    }
    function T(Z, Q) {
      const s0 = I;
      return typeof Z == s0(2535) || typeof Z == s0(2173) ? { code: Q, schema: Z, inline: !0 } : { code: Q, $async: Z && !!Z[s0(2499)] };
    }
    function M(Z) {
      const Q = I;
      var s0 = N[Z];
      return s0 === void 0 && (s0 = N[Z] = q[Q(1492)], q[s0] = Z), Q(2407) + s0;
    }
    function X(Z) {
      const Q = I;
      switch (typeof Z) {
        case Q(2173):
        case Q(1120):
          return "" + Z;
        case Q(1346):
          return t[Q(1032)](Z);
        case Q(2535):
          if (Z === null) return Q(693);
          var s0 = e(Z), i0 = H[s0];
          return i0 === void 0 && (i0 = H[s0] = $[Q(1492)], $[i0] = Z), Q(1753) + i0;
      }
    }
    function _(Z, Q, s0, i0) {
      const a0 = I;
      if (C[a0(2392)][a0(1077)] !== !1) {
        var L0 = Z[a0(2596)].dependencies;
        if (L0 && !L0[a0(1021)](function(_0) {
          const Le = a0;
          return Object[Le(757)].hasOwnProperty[Le(983)](s0, _0);
        })) throw new Error(a0(1944) + L0[a0(727)](","));
        var O0 = Z.definition[a0(1077)];
        if (O0) {
          var U0 = O0(Q);
          if (!U0) {
            var S0 = a0(2207) + C[a0(2959)](O0[a0(862)]);
            if (C[a0(2392)][a0(1077)] == a0(1017)) C[a0(1476)][a0(1978)](S0);
            else throw new Error(S0);
          }
        }
      }
      var J0 = Z[a0(2596)].compile, ne = Z[a0(2596)].inline, Q0 = Z[a0(2596)][a0(2414)], A0;
      if (J0) A0 = J0[a0(983)](C, Q, s0, i0);
      else if (Q0)
        A0 = Q0[a0(983)](C, Q, s0, i0), A[a0(1077)] !== !1 && C[a0(1077)](A0, !0);
      else if (ne) A0 = ne[a0(983)](C, i0, Z.keyword, Q, s0);
      else if (A0 = Z.definition.validate, !A0) return;
      if (A0 === void 0) throw new Error(a0(2338) + Z[a0(2522)] + '"failed to compile');
      var H0 = V.length;
      return V[H0] = A0, { code: a0(2837) + H0, validate: A0 };
    }
  }
  function u(P, F, O) {
    var I = l[i(983)](this, P, F, O);
    return I >= 0 ? { index: I, compiling: !0 } : (I = this._compilations.length, this._compilations[I] = { schema: P, root: F, baseId: O }, { index: I, compiling: !1 });
  }
  function f(P, F, O) {
    const R = i;
    var I = l.call(this, P, F, O);
    I >= 0 && this[R(2874)][R(1401)](I, 1);
  }
  function l(P, F, O) {
    const R = i;
    for (var I = 0; I < this[R(2874)].length; I++) {
      var C = this._compilations[I];
      if (C.schema == P && C[R(2208)] == F && C[R(558)] == O) return I;
    }
    return -1;
  }
  function g(P, F) {
    const O = i;
    return O(1892) + P + O(1673) + t[O(1032)](F[P]) + ");";
  }
  function h(P) {
    return i(1202) + P + " = defaults[" + P + "];";
  }
  function m(P, F) {
    const O = i;
    return F[P] === void 0 ? "" : O(690) + P + O(1936) + P + "];";
  }
  function v(P) {
    const F = i;
    return F(2697) + P + F(1627) + P + "];";
  }
  function S(P, F) {
    if (!P[i(1492)]) return "";
    for (var R = "", I = 0; I < P.length; I++) R += F(I, P);
    return R;
  }
  return xt;
}
var tt = { exports: {} }, dr;
function B2() {
  const i = a;
  if (dr) return tt[i(1341)];
  dr = 1;
  var x = tt[i(1341)] = function() {
    this._cache = {};
  };
  return x.prototype[i(934)] = function(s, e) {
    const r = i;
    this[r(1503)][s] = e;
  }, x.prototype[i(1919)] = function(s) {
    return this[i(1503)][s];
  }, x.prototype.del = function(s) {
    const e = i;
    delete this[e(1503)][s];
  }, x[i(757)][i(1724)] = function() {
    const s = i;
    this[s(1503)] = {};
  }, tt.exports;
}
var at, ur;
function W2() {
  const i = a;
  if (ur) return at;
  ur = 1;
  var x = We(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, s = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, r = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, d = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, u = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, f = /^(?:\/(?:[^~/]|~0|~1)*)*$/, l = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, g = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  at = h;
  function h(A) {
    const j = K;
    return A = A == "full" ? j(1761) : "fast", x[j(2867)](h[A]);
  }
  h[i(2102)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: d, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: u, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": g }, h[i(1761)] = { date: v, time: S, "date-time": F, uri: R, "uri-reference": o, "uri-template": c, url: d, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: u, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": g };
  function m(A) {
    return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0);
  }
  function v(A) {
    var L = A[i(2467)](t);
    if (!L) return !1;
    var q = +L[1], N = +L[2], $ = +L[3];
    return N >= 1 && N <= 12 && $ >= 1 && $ <= (N == 2 && m(q) ? 29 : s[N]);
  }
  function S(A, j) {
    var q = A[i(2467)](e);
    if (!q) return !1;
    var N = q[1], $ = q[2], H = q[3], V = q[5];
    return (N <= 23 && $ <= 59 && H <= 59 || N == 23 && $ == 59 && H == 60) && (!j || V);
  }
  var P = /t|\s/i;
  function F(A) {
    var L = A[i(2889)](P);
    return L.length == 2 && v(L[0]) && S(L[1], !0);
  }
  var O = /\/|:/;
  function R(A) {
    const j = i;
    return O[j(2553)](A) && n[j(2553)](A);
  }
  var I = /[^\\]\\Z/;
  function C(A) {
    if (I[i(2553)](A)) return !1;
    try {
      return new RegExp(A), !0;
    } catch {
      return !1;
    }
  }
  return at;
}
var rt, fr;
function K2() {
  return fr || (fr = 1, rt = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x[e(2485)][t], d = x[e(928)] + "/" + t, u = !x[e(988)][e(1116)], f = "data" + (o || ""), l = e(1016) + n, g, h;
    if (c == "#" || c == "#/") x.isRoot ? (g = x.async, h = e(896)) : (g = x.root[e(2485)].$async === !0, h = e(545));
    else {
      var m = x.resolveRef(x[e(558)], c, x[e(874)]);
      if (m === void 0) {
        var v = x[e(1366)][e(1261)](x.baseId, c);
        if (x.opts[e(904)] == e(1799)) {
          x[e(1476)][e(1978)](v);
          var S = S || [];
          S[e(893)](r), r = "", x[e(1498)] !== !1 ? (r += " { keyword: '" + e(1104) + e(2572) + x[e(1926)] + e(2425) + x.util[e(1032)](d) + " , params: { ref: '" + x[e(1530)].escapeQuotes(c) + e(2070), x[e(988)].messages !== !1 && (r += e(1975) + x.util[e(2099)](c) + "' "), x.opts[e(2242)] && (r += e(1704) + x.util.toQuotedString(c) + e(1152) + x[e(1438)] + e(1574) + f + " "), r += e(2705)) : r += e(2903);
          var P = r;
          r = S[e(867)](), !x[e(2965)] && u ? x[e(687)] ? r += " throw new ValidationError([" + P + "]); " : r += " validate.errors = [" + P + e(2568) : r += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", u && (r += e(1983));
        } else if (x[e(988)][e(904)] == e(1616)) x[e(1476)][e(2175)](v), u && (r += e(2077));
        else throw new x[e(1366)](x.baseId, c, v);
      } else if (m[e(1889)]) {
        var F = x.util[e(2867)](x);
        F[e(2227)]++;
        var O = e(1016) + F[e(2227)];
        F[e(2485)] = m.schema, F[e(1438)] = "", F.errSchemaPath = c;
        var R = x[e(896)](F)[e(499)](/validate\.schema/g, m[e(2952)]);
        r += " " + R + " ", u && (r += " if (" + O + ") { ");
      } else g = m[e(2499)] === !0 || x[e(687)] && m[e(2499)] !== !1, h = m.code;
    }
    if (h) {
      var S = S || [];
      S[e(893)](r), r = "", x[e(988)][e(2026)] ? r += " " + h + e(1551) : r += " " + h + "( ", r += " " + f + ", (dataPath || '')", x.errorPath != '""' && (r += e(1413) + x.errorPath);
      var I = o ? "data" + (o - 1 || "") : e(906), C = o ? x.dataPathArr[o] : "parentDataProperty";
      r += " , " + I + e(1815) + C + ", rootData)  ";
      var A = r;
      if (r = S[e(867)](), g) {
        if (!x[e(687)]) throw new Error(e(2122));
        u && (r += e(2153) + l + "; "), r += " try { await " + A + "; ", u && (r += " " + l + e(1591)), r += e(2033), u && (r += " " + l + e(2210)), r += e(2705), u && (r += e(1732) + l + ") { ");
      } else r += e(740) + A + ") { if (vErrors === null) vErrors = " + h + e(916) + h + e(828), u && (r += " else { ");
    }
    return r;
  }), rt;
}
var st, lr;
function G2() {
  return lr || (lr = 1, st = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2485)][t], o = x[e(1438)] + x[e(1530)][e(2410)](t), c = x[e(928)] + "/" + t, d = !x[e(988)][e(1116)], u = x.util[e(2867)](x), f = "";
    u[e(2227)]++;
    var l = "valid" + u[e(2227)], g = u[e(558)], h = !0, m = n;
    if (m)
      for (var v, S = -1, P = m[e(1492)] - 1; S < P; )
        v = m[S += 1], (x[e(988)][e(551)] ? typeof v == e(2535) && Object.keys(v)[e(1492)] > 0 || v === !1 : x[e(1530)][e(1414)](v, x.RULES[e(2380)])) && (h = !1, u[e(2485)] = v, u[e(1438)] = o + "[" + S + "]", u.errSchemaPath = c + "/" + S, r += "  " + x[e(896)](u) + " ", u.baseId = g, d && (r += e(1732) + l + e(1988), f += "}"));
    return d && (h ? r += e(2077) : r += " " + f[e(1981)](0, -1) + " "), r;
  }), st;
}
var nt, hr;
function J2() {
  return hr || (hr = 1, nt = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x[e(2485)][t], d = x[e(1438)] + x[e(1530)][e(2410)](t), u = x.errSchemaPath + "/" + t, f = !x[e(988)].allErrors, l = "data" + (o || ""), g = e(1016) + n, h = e(1435) + n, m = x[e(1530)].copy(x), v = "";
    m[e(2227)]++;
    var S = "valid" + m[e(2227)], P = c[e(1021)](function(j) {
      const L = e;
      return x[L(988)][L(551)] ? typeof j == "object" && Object[L(2693)](j)[L(1492)] > 0 || j === !1 : x[L(1530)].schemaHasRules(j, x[L(977)][L(2380)]);
    });
    if (P) {
      var F = m[e(558)];
      r += e(2153) + h + e(2357) + g + e(1462);
      var O = x[e(2965)];
      x[e(2965)] = m.compositeRule = !0;
      var R = c;
      if (R)
        for (var I, C = -1, A = R[e(1492)] - 1; C < A; )
          I = R[C += 1], m[e(2485)] = I, m[e(1438)] = d + "[" + C + "]", m[e(928)] = u + "/" + C, r += "  " + x[e(896)](m) + " ", m.baseId = F, r += " " + g + e(2283) + g + e(2165) + S + e(553) + g + ") { ", v += "}";
      x[e(2965)] = m[e(2965)] = O, r += " " + v + e(740) + g + ") {   var err =   ", x[e(1498)] !== !1 ? (r += " { keyword: '" + e(1755) + e(2572) + x[e(1926)] + e(2425) + x[e(1530)].toQuotedString(u) + e(2870), x[e(988)].messages !== !1 && (r += " , message: 'should match some schema in anyOf' "), x[e(988)][e(2242)] && (r += e(953) + d + e(1152) + x.schemaPath + e(1574) + l + " "), r += e(2705)) : r += e(2903), r += e(1217), !x.compositeRule && f && (x[e(687)] ? r += e(1685) : r += " validate.errors = vErrors; return false; "), r += e(2776) + h + e(2094) + h + e(524) + h + e(1796), x[e(988)][e(1116)] && (r += e(2705));
    } else f && (r += e(2077));
    return r;
  }), nt;
}
var it, pr;
function Q2() {
  return pr || (pr = 1, it = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2485)][t], o = x[e(928)] + "/" + t;
    x[e(988)][e(1116)];
    var c = x[e(1530)][e(1032)](n);
    return x.opts[e(2729)] === !0 ? r += e(1642) + c + ");" : typeof x[e(988)][e(2729)] == "function" && (r += e(2646) + c + ", " + x[e(1530)][e(1032)](o) + e(1887)), r;
  }), it;
}
var ot, mr;
function X2() {
  return mr || (mr = 1, ot = function(x, t, s) {
    const e = K;
    var r = " ", n = x.level, o = x[e(528)], c = x.schema[t], d = x[e(1438)] + x[e(1530)][e(2410)](t), u = x.errSchemaPath + "/" + t, f = !x[e(988)][e(1116)], l = e(1369) + (o || ""), g = e(1016) + n, h = x[e(988)][e(1845)] && c && c[e(1845)];
    h && (r += e(2266) + n + e(2283) + x.util[e(2927)](c[e(1845)], o, x[e(531)]) + "; "), !h && (r += " var schema" + n + e(956) + d + ";"), r += e(930) + g + e(2559) + l + e(660) + n + e(2497) + g + e(2121);
    var m = m || [];
    m[e(893)](r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + "const" + e(2572) + x[e(1926)] + e(2425) + x[e(1530)][e(1032)](u) + e(1221) + n + " } ", x.opts[e(1273)] !== !1 && (r += e(2110)), x.opts[e(2242)] && (r += e(953) + d + e(1152) + x[e(1438)] + e(1574) + l + " "), r += e(2705)) : r += e(2903);
    var v = r;
    return r = m[e(867)](), !x[e(2965)] && f ? x[e(687)] ? r += e(1383) + v + e(1823) : r += e(724) + v + e(2568) : r += " var err = " + v + e(1217), r += " }", f && (r += e(2366)), r;
  }), ot;
}
var ct, gr;
function Y2() {
  return gr || (gr = 1, ct = function(x, t, s) {
    const e = K;
    var r = " ", n = x.level, o = x[e(528)], c = x[e(2485)][t], d = x[e(1438)] + x[e(1530)][e(2410)](t), u = x.errSchemaPath + "/" + t, f = !x.opts[e(1116)], l = e(1369) + (o || ""), g = e(1016) + n, h = e(1435) + n, m = x[e(1530)][e(2867)](x), v = "";
    m[e(2227)]++;
    var S = e(1016) + m[e(2227)], P = "i" + n, F = m[e(528)] = x[e(528)] + 1, O = "data" + F, R = x[e(558)], I = x[e(988)][e(551)] ? typeof c == e(2535) && Object.keys(c)[e(1492)] > 0 || c === !1 : x[e(1530)][e(1414)](c, x[e(977)][e(2380)]);
    if (r += e(930) + h + e(2490) + g + ";", I) {
      var C = x.compositeRule;
      x[e(2965)] = m.compositeRule = !0, m[e(2485)] = c, m[e(1438)] = d, m.errSchemaPath = u, r += e(2153) + S + e(2114) + P + e(2424) + P + e(2393) + l + e(799) + P + e(520), m.errorPath = x[e(1530)][e(700)](x[e(1926)], P, x[e(988)][e(1296)], !0);
      var A = l + "[" + P + "]";
      m[e(531)][F] = P;
      var j = x.validate(m);
      m[e(558)] = R, x.util.varOccurences(j, O) < 2 ? r += " " + x[e(1530)][e(2377)](j, O, A) + " " : r += e(2153) + O + e(2283) + A + "; " + j + " ", r += e(1732) + S + ") break; }  ", x[e(2965)] = m[e(2965)] = C, r += " " + v + " if (!" + S + ") {";
    } else r += " if (" + l + e(843);
    var L = L || [];
    L[e(893)](r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + e(2061) + "' , dataPath: (dataPath || '') + " + x[e(1926)] + " , schemaPath: " + x[e(1530)][e(1032)](u) + e(2870), x[e(988)].messages !== !1 && (r += e(2382)), x.opts.verbose && (r += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + x[e(1438)] + e(1574) + l + " "), r += e(2705)) : r += e(2903);
    var q = r;
    return r = L.pop(), !x[e(2965)] && f ? x[e(687)] ? r += e(1383) + q + "]); " : r += e(724) + q + e(2568) : r += e(2329) + q + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += e(2341), I && (r += e(2406) + h + e(2094) + h + e(524) + h + e(1796)), x[e(988)][e(1116)] && (r += " } "), r;
  }), ct;
}
var dt, br;
function _2() {
  return br || (br = 1, dt = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x.schema[t], d = x[e(1438)] + x[e(1530)][e(2410)](t), u = x[e(928)] + "/" + t, f = !x[e(988)][e(1116)], l = e(1369) + (o || ""), g = e(1435) + n, h = x[e(1530)][e(2867)](x), m = "";
    h.level++;
    var v = e(1016) + h[e(2227)], S = {}, P = {}, F = x[e(988)].ownProperties;
    for (C in c)
      if (C != e(2469)) {
        var O = c[C], R = Array[e(1320)](O) ? P : S;
        R[C] = O;
      }
    r += e(930) + g + e(2861);
    var I = x[e(1926)];
    r += e(2245) + n + ";";
    for (var C in P)
      if (R = P[C], R[e(1492)]) {
        if (r += e(1422) + l + x[e(1530)][e(2410)](C) + e(2915), F && (r += e(2362) + l + e(1922) + x[e(1530)][e(2099)](C) + e(2148)), f) {
          r += " && ( ";
          var A = R;
          if (A)
            for (var j, L = -1, q = A.length - 1; L < q; ) {
              j = A[L += 1], L && (r += " || ");
              var N = x[e(1530)][e(2410)](j), $ = l + N;
              r += e(1109) + $ + e(2279), F && (r += e(581) + l + e(1922) + x[e(1530)][e(2099)](j) + e(2148)), r += e(2642) + n + e(2283) + x[e(1530)][e(1032)](x[e(988)][e(1296)] ? j : N) + e(2616);
            }
          r += ")) {  ";
          var H = "missing" + n, V = e(1913) + H + " + '";
          x[e(988)][e(2145)] && (x[e(1926)] = x[e(988)][e(1296)] ? x[e(1530)][e(700)](I, H, !0) : I + e(1413) + H);
          var G = G || [];
          G.push(r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + e(1166) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(2425) + x.util[e(1032)](u) + e(630) + x[e(1530)][e(2099)](C) + e(1297) + V + "', depsCount: " + R[e(1492)] + e(2307) + x[e(1530)].escapeQuotes(R.length == 1 ? R[0] : R[e(727)](", ")) + e(2070), x[e(988)][e(1273)] !== !1 && (r += " , message: 'should have ", R[e(1492)] == 1 ? r += e(1613) + x[e(1530)][e(2099)](R[0]) : r += "properties " + x[e(1530)].escapeQuotes(R[e(727)](", ")), r += e(2987) + x[e(1530)][e(2099)](C) + e(1803)), x[e(988)][e(2242)] && (r += e(953) + d + e(1152) + x[e(1438)] + e(1574) + l + " "), r += e(2705)) : r += " {} ";
          var c0 = r;
          r = G[e(867)](), !x[e(2965)] && f ? x[e(687)] ? r += e(1383) + c0 + e(1823) : r += e(724) + c0 + e(2568) : r += e(2329) + c0 + e(1217);
        } else {
          r += e(1653);
          var d0 = R;
          if (d0)
            for (var j, l0 = -1, o0 = d0[e(1492)] - 1; l0 < o0; ) {
              j = d0[l0 += 1];
              var N = x.util[e(2410)](j), V = x[e(1530)].escapeQuotes(j), $ = l + N;
              x[e(988)][e(2145)] && (x[e(1926)] = x[e(1530)].getPath(I, j, x[e(988)][e(1296)])), r += " if ( " + $ + e(2279), F && (r += e(581) + l + e(1922) + x[e(1530)][e(2099)](j) + "') "), r += e(1834), x[e(1498)] !== !1 ? (r += e(1839) + e(1166) + e(2572) + x[e(1926)] + e(2425) + x[e(1530)][e(1032)](u) + e(630) + x[e(1530)][e(2099)](C) + e(1297) + V + e(2636) + R.length + e(2307) + x.util[e(2099)](R[e(1492)] == 1 ? R[0] : R[e(727)](", ")) + e(2070), x[e(988)][e(1273)] !== !1 && (r += e(2262), R[e(1492)] == 1 ? r += e(1613) + x[e(1530)][e(2099)](R[0]) : r += e(1135) + x[e(1530)][e(2099)](R.join(", ")), r += e(2987) + x[e(1530)][e(2099)](C) + e(1803)), x.opts[e(2242)] && (r += e(953) + d + e(1152) + x[e(1438)] + " , data: " + l + " "), r += e(2705)) : r += e(2903), r += e(1764);
            }
        }
        r += e(2138), f && (m += "}", r += e(2366));
      }
    x[e(1926)] = I;
    var f0 = h[e(558)];
    for (var C in S) {
      var O = S[C];
      (x[e(988)].strictKeywords ? typeof O == "object" && Object[e(2693)](O).length > 0 || O === !1 : x.util[e(1414)](O, x[e(977)][e(2380)])) && (r += " " + v + e(2101) + l + x[e(1530)][e(2410)](C) + e(2915), F && (r += e(2362) + l + e(1922) + x[e(1530)][e(2099)](C) + e(2148)), r += e(1988), h[e(2485)] = O, h[e(1438)] = d + x.util[e(2410)](C), h[e(928)] = u + "/" + x[e(1530)][e(1548)](C), r += "  " + x.validate(h) + " ", h[e(558)] = f0, r += e(2926), f && (r += e(1732) + v + e(1988), m += "}"));
    }
    return f && (r += e(2884) + m + e(1732) + g + e(2256)), r;
  }), dt;
}
var ut, yr;
function ec() {
  return yr || (yr = 1, ut = function(x, t, s) {
    const e = K;
    var r = " ", n = x.level, o = x[e(528)], c = x[e(2485)][t], d = x[e(1438)] + x[e(1530)].getProperty(t), u = x[e(928)] + "/" + t, f = !x[e(988)][e(1116)], l = e(1369) + (o || ""), g = "valid" + n, h = x[e(988)][e(1845)] && c && c[e(1845)];
    h && (r += e(2266) + n + e(2283) + x[e(1530)][e(2927)](c[e(1845)], o, x[e(531)]) + "; ");
    var m = "i" + n, v = e(2485) + n;
    !h && (r += e(2153) + v + e(956) + d + ";"), r += e(930) + g + ";", h && (r += e(936) + n + e(691) + g + e(1581) + n + ")) " + g + e(2419)), r += "" + g + e(2181) + m + e(2353) + m + "<" + v + ".length; " + m + e(969) + l + ", " + v + "[" + m + e(2305) + g + " = true; break; }", h && (r += "  }  "), r += e(740) + g + ") {   ";
    var S = S || [];
    S[e(893)](r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + e(2304) + e(2572) + x[e(1926)] + e(2425) + x.util[e(1032)](u) + " , params: { allowedValues: schema" + n + " } ", x[e(988)].messages !== !1 && (r += " , message: 'should be equal to one of the allowed values' "), x[e(988)][e(2242)] && (r += " , schema: validate.schema" + d + e(1152) + x[e(1438)] + e(1574) + l + " "), r += e(2705)) : r += e(2903);
    var P = r;
    return r = S[e(867)](), !x[e(2965)] && f ? x.async ? r += e(1383) + P + "]); " : r += e(724) + P + "]; return false; " : r += e(2329) + P + e(1217), r += " }", f && (r += e(2366)), r;
  }), ut;
}
var ft, vr;
function xc() {
  return vr || (vr = 1, ft = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x[e(2485)][t], d = x[e(1438)] + x[e(1530)].getProperty(t), u = x[e(928)] + "/" + t, f = !x[e(988)][e(1116)], l = e(1369) + (o || "");
    if (x[e(988)][e(2503)] === !1) return f && (r += e(2077)), r;
    var g = x.opts[e(1845)] && c && c[e(1845)], h;
    g ? (r += e(2266) + n + " = " + x[e(1530)][e(2927)](c[e(1845)], o, x.dataPathArr) + "; ", h = "schema" + n) : h = c;
    var m = x[e(988)][e(1187)], v = Array[e(1320)](m);
    if (g) {
      var S = e(2503) + n, P = e(1669) + n, F = "formatType" + n;
      r += e(2153) + S + e(811) + h + e(2625) + P + e(1909) + S + e(2079) + S + e(897) + S + ".validate; var " + F + e(2283) + P + e(2982) + S + e(2961) + P + e(1988), x.async && (r += " var async" + n + " = " + S + e(2582)), r += " " + S + e(2283) + S + e(768), g && (r += " (" + h + " !== undefined && typeof " + h + e(2695)), r += " (", m != e(1616) && (r += " (" + h + e(2612) + S + " ", v && (r += e(1555) + h + e(1377)), r += e(638)), r += " (" + S + e(2982) + F + " == '" + s + e(1582) + S + e(1749), x[e(687)] ? r += e(848) + n + e(866) + S + "(" + l + e(2809) + S + "(" + l + e(1083) : r += " " + S + "(" + l + ") ", r += e(823) + S + e(910) + l + "))))) {";
    } else {
      var S = x[e(2463)][c];
      if (!S) {
        if (m == e(1616)) return x[e(1476)][e(2175)](e(1396) + c + e(669) + x[e(928)] + '"'), f && (r += e(2077)), r;
        if (v && m[e(2098)](c) >= 0) return f && (r += e(2077)), r;
        throw new Error(e(1396) + c + e(2712) + x[e(928)] + '"');
      }
      var P = typeof S == e(2535) && !(S instanceof RegExp) && S[e(896)], F = P && S[e(2417)] || e(1346);
      if (P) {
        var O = S[e(687)] === !0;
        S = S[e(896)];
      }
      if (F != s) return f && (r += e(2077)), r;
      if (O) {
        if (!x[e(687)]) throw new Error(e(2687));
        var R = e(2463) + x.util[e(2410)](c) + e(2733);
        r += " if (!(await " + R + "(" + l + e(2819);
      } else {
        r += e(1712);
        var R = e(2463) + x[e(1530)][e(2410)](c);
        P && (R += e(2733)), typeof S == "function" ? r += " " + R + "(" + l + ") " : r += " " + R + e(910) + l + ") ", r += e(1988);
      }
    }
    var I = I || [];
    I[e(893)](r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + e(2503) + e(2572) + x.errorPath + " , schemaPath: " + x[e(1530)][e(1032)](u) + e(1940), g ? r += "" + h : r += "" + x[e(1530)][e(1032)](c), r += e(2746), x.opts[e(1273)] !== !1 && (r += e(1394), g ? r += e(1913) + h + e(2565) : r += "" + x[e(1530)][e(2099)](c), r += `"' `), x[e(988)][e(2242)] && (r += e(1302), g ? r += e(1126) + d : r += "" + x.util[e(1032)](c), r += e(1904) + x[e(1438)] + e(1574) + l + " "), r += " } ") : r += " {} ";
    var C = r;
    return r = I[e(867)](), !x.compositeRule && f ? x[e(687)] ? r += e(1383) + C + "]); " : r += e(724) + C + e(2568) : r += " var err = " + C + e(1217), r += e(2705), f && (r += " else { "), r;
  }), ft;
}
var lt, wr;
function tc() {
  return wr || (wr = 1, lt = function(x, t, s) {
    const e = K;
    var r = " ", n = x.level, o = x[e(528)], c = x.schema[t], d = x[e(1438)] + x[e(1530)].getProperty(t), u = x[e(928)] + "/" + t, f = !x[e(988)][e(1116)], l = e(1369) + (o || ""), g = e(1016) + n, h = e(1435) + n, m = x[e(1530)][e(2867)](x);
    m.level++;
    var v = e(1016) + m[e(2227)], S = x[e(2485)].then, P = x[e(2485)][e(1969)], F = S !== void 0 && (x[e(988)][e(551)] ? typeof S == e(2535) && Object[e(2693)](S)[e(1492)] > 0 || S === !1 : x[e(1530)][e(1414)](S, x[e(977)][e(2380)])), O = P !== void 0 && (x.opts[e(551)] ? typeof P == e(2535) && Object[e(2693)](P)[e(1492)] > 0 || P === !1 : x.util[e(1414)](P, x[e(977)][e(2380)])), R = m.baseId;
    if (F || O) {
      var I;
      m[e(1498)] = !1, m[e(2485)] = c, m[e(1438)] = d, m[e(928)] = u, r += e(2153) + h + " = errors; var " + g + e(2303);
      var C = x[e(2965)];
      x.compositeRule = m[e(2965)] = !0, r += "  " + x[e(896)](m) + " ", m[e(558)] = R, m.createErrors = !0, r += e(2406) + h + e(2094) + h + ") vErrors.length = " + h + e(1230), x[e(2965)] = m[e(2965)] = C, F ? (r += " if (" + v + e(2491), m[e(2485)] = x[e(2485)][e(2139)], m[e(1438)] = x[e(1438)] + e(1993), m[e(928)] = x[e(928)] + e(1132), r += "  " + x[e(896)](m) + " ", m[e(558)] = R, r += " " + g + e(2283) + v + "; ", F && O ? (I = "ifClause" + n, r += " var " + I + e(2845)) : I = e(1376), r += e(2705), O && (r += e(2366))) : r += e(740) + v + e(1988), O && (m[e(2485)] = x[e(2485)][e(1969)], m[e(1438)] = x[e(1438)] + ".else", m[e(928)] = x[e(928)] + "/else", r += "  " + x[e(896)](m) + " ", m[e(558)] = R, r += " " + g + " = " + v + "; ", F && O ? (I = "ifClause" + n, r += e(2153) + I + e(1532)) : I = e(2841), r += " } "), r += e(740) + g + e(2815), x[e(1498)] !== !1 ? (r += e(1839) + "if" + e(2572) + x[e(1926)] + e(2425) + x.util[e(1032)](u) + " , params: { failingKeyword: " + I + e(2705), x[e(988)][e(1273)] !== !1 && (r += e(2880) + I + e(2887)), x.opts.verbose && (r += " , schema: validate.schema" + d + e(1152) + x[e(1438)] + e(1574) + l + " "), r += e(2705)) : r += e(2903), r += e(1217), !x[e(2965)] && f && (x[e(687)] ? r += " throw new ValidationError(vErrors); " : r += e(1656)), r += e(2138), f && (r += e(2366));
    } else f && (r += e(2077));
    return r;
  }), lt;
}
var ht, Sr;
function ac() {
  return Sr || (Sr = 1, ht = function(x, t, s) {
    const e = K;
    var r = " ", n = x.level, o = x[e(528)], c = x[e(2485)][t], d = x[e(1438)] + x[e(1530)].getProperty(t), u = x[e(928)] + "/" + t, f = !x.opts[e(1116)], l = e(1369) + (o || ""), g = e(1016) + n, h = e(1435) + n, m = x.util.copy(x), v = "";
    m.level++;
    var S = "valid" + m[e(2227)], P = "i" + n, F = m[e(528)] = x[e(528)] + 1, O = e(1369) + F, R = x[e(558)];
    if (r += e(930) + h + " = errors;var " + g + ";", Array[e(1320)](c)) {
      var I = x[e(2485)].additionalItems;
      if (I === !1) {
        r += " " + g + " = " + l + e(668) + c.length + "; ";
        var C = u;
        u = x[e(928)] + e(2032), r += "  if (!" + g + ") {   ";
        var A = A || [];
        A.push(r), r = "", x.createErrors !== !1 ? (r += e(1839) + e(1254) + e(2572) + x[e(1926)] + e(2425) + x[e(1530)][e(1032)](u) + e(2232) + c[e(1492)] + e(2705), x[e(988)][e(1273)] !== !1 && (r += e(1257) + c.length + e(2640)), x.opts[e(2242)] && (r += e(1665) + x[e(1438)] + " , data: " + l + " "), r += e(2705)) : r += " {} ";
        var j = r;
        r = A[e(867)](), !x[e(2965)] && f ? x[e(687)] ? r += " throw new ValidationError([" + j + e(1823) : r += e(724) + j + e(2568) : r += e(2329) + j + e(1217), r += " } ", u = C, f && (v += "}", r += e(2366));
      }
      var L = c;
      if (L) {
        for (var q, N = -1, $ = L.length - 1; N < $; )
          if (q = L[N += 1], x[e(988)][e(551)] ? typeof q == "object" && Object[e(2693)](q).length > 0 || q === !1 : x.util[e(1414)](q, x[e(977)][e(2380)])) {
            r += " " + S + e(1232) + l + e(713) + N + e(1988);
            var H = l + "[" + N + "]";
            m[e(2485)] = q, m.schemaPath = d + "[" + N + "]", m.errSchemaPath = u + "/" + N, m[e(1926)] = x[e(1530)][e(700)](x[e(1926)], N, x[e(988)][e(1296)], !0), m[e(531)][F] = N;
            var V = x[e(896)](m);
            m[e(558)] = R, x.util[e(530)](V, O) < 2 ? r += " " + x[e(1530)][e(2377)](V, O, H) + " " : r += " var " + O + e(2283) + H + "; " + V + " ", r += e(2926), f && (r += " if (" + S + e(1988), v += "}");
          }
      }
      if (typeof I == e(2535) && (x.opts[e(551)] ? typeof I == "object" && Object.keys(I).length > 0 || I === !1 : x[e(1530)][e(1414)](I, x[e(977)][e(2380)]))) {
        m.schema = I, m[e(1438)] = x[e(1438)] + ".additionalItems", m[e(928)] = x.errSchemaPath + e(2032), r += " " + S + e(1232) + l + e(713) + c.length + ") {  for (var " + P + " = " + c.length + "; " + P + e(2393) + l + e(799) + P + e(520), m.errorPath = x.util[e(700)](x[e(1926)], P, x[e(988)].jsonPointers, !0);
        var H = l + "[" + P + "]";
        m[e(531)][F] = P;
        var V = x.validate(m);
        m[e(558)] = R, x[e(1530)][e(530)](V, O) < 2 ? r += " " + x.util[e(2377)](V, O, H) + " " : r += e(2153) + O + e(2283) + H + "; " + V + " ", f && (r += e(740) + S + e(1486)), r += e(2011), f && (r += e(1732) + S + e(1988), v += "}");
      }
    } else if (x[e(988)].strictKeywords ? typeof c == "object" && Object[e(2693)](c).length > 0 || c === !1 : x[e(1530)][e(1414)](c, x[e(977)].all)) {
      m.schema = c, m.schemaPath = d, m[e(928)] = u, r += e(1165) + P + e(2283) + 0 + "; " + P + e(2393) + l + e(799) + P + e(520), m.errorPath = x.util[e(700)](x[e(1926)], P, x.opts.jsonPointers, !0);
      var H = l + "[" + P + "]";
      m[e(531)][F] = P;
      var V = x[e(896)](m);
      m[e(558)] = R, x[e(1530)][e(530)](V, O) < 2 ? r += " " + x[e(1530)][e(2377)](V, O, H) + " " : r += " var " + O + e(2283) + H + "; " + V + " ", f && (r += e(740) + S + ") break; "), r += " }";
    }
    return f && (r += " " + v + " if (" + h + e(2256)), r;
  }), ht;
}
var pt, kr;
function Pr() {
  return kr || (kr = 1, pt = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x[e(2485)][t], d = x[e(1438)] + x[e(1530)][e(2410)](t), u = x[e(928)] + "/" + t, f = !x[e(988)][e(1116)], R, l = e(1369) + (o || ""), g = x[e(988)].$data && c && c[e(1845)], h;
    g ? (r += " var schema" + n + " = " + x[e(1530)][e(2927)](c[e(1845)], o, x[e(531)]) + "; ", h = e(2485) + n) : h = c;
    var m = t == e(2717), v = m ? e(1196) : "exclusiveMinimum", S = x[e(2485)][v], P = x[e(988)][e(1845)] && S && S.$data, F = m ? "<" : ">", O = m ? ">" : "<", R = void 0;
    if (!(g || typeof c == e(1120) || c === void 0)) throw new Error(t + e(1242));
    if (!(P || S === void 0 || typeof S == "number" || typeof S == e(2173))) throw new Error(v + " must be number or boolean");
    if (P) {
      var I = x[e(1530)][e(2927)](S[e(1845)], o, x[e(531)]), C = e(2753) + n, A = e(821) + n, j = e(1200) + n, L = "op" + n, q = e(1913) + L + e(2565);
      r += e(1433) + n + e(2283) + I + "; ", I = "schemaExcl" + n, r += " var " + C + e(569) + A + " = typeof " + I + e(2103) + A + " != 'boolean' && " + A + e(1620) + A + e(1308);
      var R = v, N = N || [];
      N.push(r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + (R || "_exclusiveLimit") + e(2572) + x[e(1926)] + e(2425) + x[e(1530)][e(1032)](u) + " , params: {} ", x.opts.messages !== !1 && (r += e(1559) + v + e(2561)), x[e(988)][e(2242)] && (r += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + x[e(1438)] + " , data: " + l + " "), r += e(2705)) : r += e(2903);
      var $ = r;
      r = N[e(867)](), !x.compositeRule && f ? x.async ? r += e(1383) + $ + e(1823) : r += e(724) + $ + e(2568) : r += " var err = " + $ + e(1217), r += " } else if ( ", g && (r += " (" + h + e(2649) + h + e(2863)), r += " " + A + " == 'number' ? ( (" + C + " = " + h + e(1527) + I + " " + F + "= " + h + e(2400) + l + " " + O + "= " + I + e(823) + l + " " + O + " " + h + e(2339) + C + e(2283) + I + " === true) ? " + l + " " + O + "= " + h + e(823) + l + " " + O + " " + h + e(1264) + l + " !== " + l + ") { var op" + n + e(2283) + C + e(1193) + F + e(1398) + F + e(1274), c === void 0 && (R = v, u = x[e(928)] + "/" + v, h = I, g = P);
    } else {
      var j = typeof S == e(1120), q = F;
      if (j && g) {
        var L = "'" + q + "'";
        r += " if ( ", g && (r += " (" + h + e(2649) + h + e(2863)), r += " ( " + h + " === undefined || " + S + " " + F + "= " + h + e(2120) + l + " " + O + "= " + S + e(823) + l + " " + O + " " + h + e(1264) + l + e(1119) + l + e(1988);
      } else {
        j && c === void 0 ? (C = !0, R = v, u = x.errSchemaPath + "/" + v, h = S, O += "=") : (j && (h = Math[m ? "min" : e(731)](S, c)), S === (j ? h : !0) ? (C = !0, R = v, u = x.errSchemaPath + "/" + v, O += "=") : (C = !1, q += "="));
        var L = "'" + q + "'";
        r += " if ( ", g && (r += " (" + h + e(2649) + h + e(2863)), r += " " + l + " " + O + " " + h + " || " + l + e(1119) + l + ") { ";
      }
    }
    R = R || t;
    var N = N || [];
    N[e(893)](r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + (R || e(2679)) + "' , dataPath: (dataPath || '') + " + x[e(1926)] + e(2425) + x[e(1530)][e(1032)](u) + e(1093) + L + e(1271) + h + e(1980) + C + e(2705), x[e(988)][e(1273)] !== !1 && (r += e(1891) + q + " ", g ? r += e(1913) + h : r += "" + h + "'"), x[e(988)].verbose && (r += e(1302), g ? r += e(1126) + d : r += "" + c, r += e(1904) + x[e(1438)] + " , data: " + l + " "), r += e(2705)) : r += " {} ";
    var $ = r;
    return r = N[e(867)](), !x[e(2965)] && f ? x[e(687)] ? r += e(1383) + $ + "]); " : r += e(724) + $ + "]; return false; " : r += e(2329) + $ + e(1217), r += e(2705), f && (r += " else { "), r;
  }), pt;
}
var mt, Er;
function Ir() {
  return Er || (Er = 1, mt = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x[e(2485)][t], d = x[e(1438)] + x.util.getProperty(t), u = x[e(928)] + "/" + t, f = !x[e(988)][e(1116)], v, l = "data" + (o || ""), g = x[e(988)][e(1845)] && c && c[e(1845)], h;
    if (g ? (r += e(2266) + n + e(2283) + x[e(1530)].getData(c[e(1845)], o, x[e(531)]) + "; ", h = e(2485) + n) : h = c, !(g || typeof c == e(1120))) throw new Error(t + " must be number");
    var m = t == e(2858) ? ">" : "<";
    r += e(592), g && (r += " (" + h + " !== undefined && typeof " + h + e(2863)), r += " " + l + e(2185) + m + " " + h + e(1988);
    var v = t, S = S || [];
    S.push(r), r = "", x.createErrors !== !1 ? (r += e(1839) + (v || "_limitItems") + e(2572) + x[e(1926)] + e(2425) + x[e(1530)][e(1032)](u) + e(2232) + h + e(2705), x[e(988)].messages !== !1 && (r += e(995), t == e(2858) ? r += "more" : r += "fewer", r += " than ", g ? r += e(1913) + h + " + '" : r += "" + c, r += e(2640)), x[e(988)].verbose && (r += e(1302), g ? r += e(1126) + d : r += "" + c, r += e(1904) + x[e(1438)] + " , data: " + l + " "), r += e(2705)) : r += e(2903);
    var P = r;
    return r = S[e(867)](), !x[e(2965)] && f ? x[e(687)] ? r += e(1383) + P + e(1823) : r += " validate.errors = [" + P + e(2568) : r += " var err = " + P + e(1217), r += "} ", f && (r += e(2366)), r;
  }), mt;
}
var gt, Rr;
function Cr() {
  return Rr || (Rr = 1, gt = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x.schema[t], d = x[e(1438)] + x[e(1530)][e(2410)](t), u = x[e(928)] + "/" + t, f = !x[e(988)][e(1116)], v, l = e(1369) + (o || ""), g = x[e(988)][e(1845)] && c && c.$data, h;
    if (g ? (r += " var schema" + n + e(2283) + x[e(1530)][e(2927)](c[e(1845)], o, x[e(531)]) + "; ", h = "schema" + n) : h = c, !(g || typeof c == "number")) throw new Error(t + " must be number");
    var m = t == e(1080) ? ">" : "<";
    r += e(592), g && (r += " (" + h + e(2649) + h + " != 'number') || "), x[e(988)].unicode === !1 ? r += " " + l + e(2185) : r += e(593) + l + ") ", r += " " + m + " " + h + e(1988);
    var v = t, S = S || [];
    S.push(r), r = "", x[e(1498)] !== !1 ? (r += " { keyword: '" + (v || e(1122)) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(2425) + x[e(1530)][e(1032)](u) + e(2232) + h + e(2705), x[e(988)].messages !== !1 && (r += " , message: 'should NOT be ", t == e(1080) ? r += e(1710) : r += e(883), r += " than ", g ? r += e(1913) + h + e(2565) : r += "" + c, r += e(1322)), x[e(988)].verbose && (r += e(1302), g ? r += e(1126) + d : r += "" + c, r += e(1904) + x[e(1438)] + " , data: " + l + " "), r += " } ") : r += " {} ";
    var P = r;
    return r = S.pop(), !x[e(2965)] && f ? x[e(687)] ? r += e(1383) + P + e(1823) : r += " validate.errors = [" + P + "]; return false; " : r += " var err = " + P + e(1217), r += "} ", f && (r += e(2366)), r;
  }), gt;
}
var bt, Fr;
function Nr() {
  return Fr || (Fr = 1, bt = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x[e(2485)][t], d = x.schemaPath + x[e(1530)][e(2410)](t), u = x[e(928)] + "/" + t, f = !x.opts[e(1116)], v, l = e(1369) + (o || ""), g = x.opts[e(1845)] && c && c.$data, h;
    if (g ? (r += " var schema" + n + " = " + x[e(1530)][e(2927)](c[e(1845)], o, x[e(531)]) + "; ", h = e(2485) + n) : h = c, !(g || typeof c == e(1120))) throw new Error(t + e(1242));
    var m = t == e(1830) ? ">" : "<";
    r += "if ( ", g && (r += " (" + h + e(2649) + h + e(2863)), r += e(2376) + l + ").length " + m + " " + h + ") { ";
    var v = t, S = S || [];
    S.push(r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + (v || e(1332)) + "' , dataPath: (dataPath || '') + " + x[e(1926)] + " , schemaPath: " + x[e(1530)].toQuotedString(u) + e(2232) + h + e(2705), x[e(988)].messages !== !1 && (r += e(995), t == "maxProperties" ? r += e(2779) : r += e(891), r += " than ", g ? r += e(1913) + h + e(2565) : r += "" + c, r += " properties' "), x[e(988)].verbose && (r += e(1302), g ? r += e(1126) + d : r += "" + c, r += e(1904) + x.schemaPath + " , data: " + l + " "), r += e(2705)) : r += e(2903);
    var P = r;
    return r = S[e(867)](), !x.compositeRule && f ? x.async ? r += " throw new ValidationError([" + P + e(1823) : r += " validate.errors = [" + P + e(2568) : r += e(2329) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", f && (r += e(2366)), r;
  }), bt;
}
var yt, qr;
function rc() {
  return qr || (qr = 1, yt = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x[e(2485)][t], d = x.schemaPath + x[e(1530)][e(2410)](t), u = x.errSchemaPath + "/" + t, f = !x.opts[e(1116)], l = e(1369) + (o || ""), g = x[e(988)].$data && c && c[e(1845)], h;
    if (g ? (r += e(2266) + n + e(2283) + x[e(1530)][e(2927)](c[e(1845)], o, x[e(531)]) + "; ", h = e(2485) + n) : h = c, !(g || typeof c == "number")) throw new Error(t + e(1242));
    r += e(965) + n + e(1727), g && (r += " " + h + e(1491) + h + e(1769)), r += e(2849) + n + " = " + l + " / " + h + ", ", x[e(988)][e(1817)] ? r += e(2293) + n + e(2044) + n + e(902) + x.opts.multipleOfPrecision + " " : r += " division" + n + e(726) + n + ") ", r += e(1864), g && (r += e(2372)), r += " ) {   ";
    var m = m || [];
    m[e(893)](r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + "multipleOf" + e(2572) + x[e(1926)] + e(2425) + x[e(1530)].toQuotedString(u) + e(2405) + h + e(2705), x[e(988)][e(1273)] !== !1 && (r += e(1069), g ? r += e(1913) + h : r += "" + h + "'"), x.opts.verbose && (r += e(1302), g ? r += e(1126) + d : r += "" + c, r += "         , parentSchema: validate.schema" + x[e(1438)] + " , data: " + l + " "), r += " } ") : r += " {} ";
    var v = r;
    return r = m.pop(), !x[e(2965)] && f ? x[e(687)] ? r += e(1383) + v + "]); " : r += e(724) + v + e(2568) : r += e(2329) + v + e(1217), r += "} ", f && (r += e(2366)), r;
  }), yt;
}
var vt, Tr;
function sc() {
  return Tr || (Tr = 1, vt = function(x, t, s) {
    const e = K;
    var r = " ", n = x.level, o = x[e(528)], c = x[e(2485)][t], d = x.schemaPath + x[e(1530)][e(2410)](t), u = x[e(928)] + "/" + t, f = !x[e(988)].allErrors, l = "data" + (o || ""), g = "errs__" + n, h = x[e(1530)][e(2867)](x);
    h[e(2227)]++;
    var m = e(1016) + h[e(2227)];
    if (x[e(988)].strictKeywords ? typeof c == "object" && Object[e(2693)](c).length > 0 || c === !1 : x[e(1530)][e(1414)](c, x[e(977)].all)) {
      h[e(2485)] = c, h[e(1438)] = d, h[e(928)] = u, r += e(2153) + g + " = errors;  ";
      var v = x[e(2965)];
      x[e(2965)] = h[e(2965)] = !0, h[e(1498)] = !1;
      var S;
      h.opts[e(1116)] && (S = h[e(988)][e(1116)], h[e(988)][e(1116)] = !1), r += " " + x[e(896)](h) + " ", h.createErrors = !0, S && (h[e(988)].allErrors = S), x[e(2965)] = h[e(2965)] = v, r += e(1732) + m + e(2121);
      var P = P || [];
      P[e(893)](r), r = "", x[e(1498)] !== !1 ? (r += " { keyword: 'not' , dataPath: (dataPath || '') + " + x.errorPath + " , schemaPath: " + x.util[e(1032)](u) + " , params: {} ", x.opts.messages !== !1 && (r += e(2177)), x[e(988)][e(2242)] && (r += " , schema: validate.schema" + d + e(1152) + x[e(1438)] + e(1574) + l + " "), r += " } ") : r += e(2903);
      var F = r;
      r = P.pop(), !x.compositeRule && f ? x.async ? r += e(1383) + F + e(1823) : r += e(724) + F + "]; return false; " : r += e(2329) + F + e(1217), r += e(2776) + g + "; if (vErrors !== null) { if (" + g + ") vErrors.length = " + g + e(1796), x[e(988)].allErrors && (r += e(2705));
    } else r += e(2714), x[e(1498)] !== !1 ? (r += e(1839) + e(2719) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(2425) + x.util.toQuotedString(u) + " , params: {} ", x.opts[e(1273)] !== !1 && (r += e(2177)), x[e(988)][e(2242)] && (r += " , schema: validate.schema" + d + e(1152) + x[e(1438)] + e(1574) + l + " "), r += e(2705)) : r += e(2903), r += e(1217), f && (r += " if (false) { ");
    return r;
  }), vt;
}
var wt, Or;
function nc() {
  return Or || (Or = 1, wt = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x.schema[t], d = x[e(1438)] + x[e(1530)][e(2410)](t), u = x[e(928)] + "/" + t, f = !x[e(988)][e(1116)], l = e(1369) + (o || ""), g = e(1016) + n, h = "errs__" + n, m = x[e(1530)][e(2867)](x), v = "";
    m[e(2227)]++;
    var S = e(1016) + m[e(2227)], P = m.baseId, F = e(2475) + n, O = "passingSchemas" + n;
    r += "var " + h + " = errors , " + F + e(508) + g + e(508) + O + e(1697);
    var R = x[e(2965)];
    x.compositeRule = m.compositeRule = !0;
    var I = c;
    if (I)
      for (var C, A = -1, j = I[e(1492)] - 1; A < j; )
        C = I[A += 1], (x.opts.strictKeywords ? typeof C == "object" && Object[e(2693)](C)[e(1492)] > 0 || C === !1 : x[e(1530)][e(1414)](C, x[e(977)][e(2380)])) ? (m.schema = C, m[e(1438)] = d + "[" + A + "]", m[e(928)] = u + "/" + A, r += "  " + x[e(896)](m) + " ", m[e(558)] = P) : r += e(2153) + S + e(1591), A && (r += e(1732) + S + e(2982) + F + e(1988) + g + " = false; " + O + e(519) + O + ", " + A + "]; } else { ", v += "}"), r += e(1732) + S + e(1988) + g + e(2283) + F + e(1591) + O + e(2283) + A + "; }";
    return x[e(2965)] = m[e(2965)] = R, r += "" + v + "if (!" + g + e(2815), x[e(1498)] !== !1 ? (r += e(1839) + e(1372) + e(2572) + x[e(1926)] + e(2425) + x[e(1530)][e(1032)](u) + e(571) + O + e(2705), x[e(988)][e(1273)] !== !1 && (r += e(1570)), x.opts[e(2242)] && (r += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + x[e(1438)] + e(1574) + l + " "), r += " } ") : r += e(2903), r += e(1217), !x[e(2965)] && f && (x[e(687)] ? r += e(1685) : r += e(1656)), r += e(1721) + h + e(2094) + h + e(524) + h + e(635), x[e(988)][e(1116)] && (r += " } "), r;
  }), wt;
}
var St, Ar;
function ic() {
  return Ar || (Ar = 1, St = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x[e(2485)][t], d = x.schemaPath + x[e(1530)][e(2410)](t), u = x[e(928)] + "/" + t, f = !x[e(988)].allErrors, l = e(1369) + (o || ""), g = x[e(988)][e(1845)] && c && c[e(1845)], h;
    g ? (r += e(2266) + n + e(2283) + x.util[e(2927)](c.$data, o, x[e(531)]) + "; ", h = e(2485) + n) : h = c;
    var m = g ? "(new RegExp(" + h + "))" : x[e(1191)](c);
    r += e(592), g && (r += " (" + h + e(2649) + h + e(2695)), r += " !" + m + e(910) + l + ") ) {   ";
    var v = v || [];
    v.push(r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + "pattern" + e(2572) + x.errorPath + " , schemaPath: " + x[e(1530)][e(1032)](u) + e(1938), g ? r += "" + h : r += "" + x[e(1530)][e(1032)](c), r += e(2746), x[e(988)].messages !== !1 && (r += e(602), g ? r += e(1913) + h + " + '" : r += "" + x[e(1530)][e(2099)](c), r += e(1579)), x.opts.verbose && (r += e(1302), g ? r += e(1126) + d : r += "" + x[e(1530)].toQuotedString(c), r += e(1904) + x[e(1438)] + e(1574) + l + " "), r += e(2705)) : r += e(2903);
    var S = r;
    return r = v[e(867)](), !x[e(2965)] && f ? x[e(687)] ? r += e(1383) + S + e(1823) : r += e(724) + S + e(2568) : r += e(2329) + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", f && (r += " else { "), r;
  }), St;
}
var kt, Dr;
function oc() {
  return Dr || (Dr = 1, kt = function(x, t, s) {
    const e = K;
    var r = " ", n = x.level, o = x[e(528)], c = x[e(2485)][t], d = x[e(1438)] + x[e(1530)][e(2410)](t), u = x[e(928)] + "/" + t, f = !x[e(988)].allErrors, l = e(1369) + (o || ""), g = e(1435) + n, h = x[e(1530)].copy(x), m = "";
    h[e(2227)]++;
    var v = e(1016) + h[e(2227)], S = e(771) + n, P = "idx" + n, F = h[e(528)] = x.dataLevel + 1, O = e(1369) + F, R = e(702) + n, I = Object[e(2693)](c || {}).filter(l0), C = x[e(2485)][e(634)] || {}, A = Object[e(2693)](C)[e(861)](l0), j = x[e(2485)].additionalProperties, L = I[e(1492)] || A[e(1492)], q = j === !1, N = typeof j == e(2535) && Object[e(2693)](j)[e(1492)], $ = x[e(988)].removeAdditional, H = q || N || $, V = x.opts[e(2193)], G = x.baseId, c0 = x.schema[e(1643)];
    if (c0 && !(x[e(988)][e(1845)] && c0[e(1845)]) && c0[e(1492)] < x[e(988)][e(2155)]) var d0 = x[e(1530)].toHash(c0);
    function l0(jx) {
      return jx !== e(2469);
    }
    if (r += e(930) + g + e(2490) + v + e(781), V && (r += " var " + R + e(2544)), H) {
      if (V ? r += " " + R + e(2283) + R + e(1953) + l + e(2231) + P + e(2353) + P + "<" + R + e(799) + P + e(2451) + S + e(2283) + R + "[" + P + e(504) : r += e(1483) + S + e(2238) + l + ") { ", L) {
        if (r += e(1437) + n + e(2730), I[e(1492)])
          if (I[e(1492)] > 8) r += e(2824) + d + ".hasOwnProperty(" + S + ") ";
          else {
            var o0 = I;
            if (o0)
              for (var f0, k0 = -1, y0 = o0[e(1492)] - 1; k0 < y0; )
                f0 = o0[k0 += 1], r += " || " + S + e(1745) + x[e(1530)][e(1032)](f0) + " ";
          }
        if (A[e(1492)]) {
          var M0 = A;
          if (M0)
            for (var F0, Y0 = -1, D = M0[e(1492)] - 1; Y0 < D; )
              F0 = M0[Y0 += 1], r += e(2165) + x[e(1191)](F0) + ".test(" + S + ") ";
        }
        r += e(2072) + n + ") { ";
      }
      if ($ == "all") r += e(1170) + l + "[" + S + e(504);
      else {
        var T = x[e(1926)], M = e(1913) + S + e(2565);
        if (x.opts[e(2145)] && (x[e(1926)] = x.util[e(700)](x.errorPath, S, x[e(988)].jsonPointers)), q)
          if ($) r += e(1170) + l + "[" + S + "]; ";
          else {
            r += " " + v + e(2210);
            var X = u;
            u = x.errSchemaPath + "/additionalProperties";
            var _ = _ || [];
            _[e(893)](r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + e(2315) + e(2572) + x[e(1926)] + e(2425) + x.util[e(1032)](u) + e(1836) + M + e(2070), x.opts[e(1273)] !== !1 && (r += " , message: '", x[e(988)][e(2145)] ? r += e(884) : r += e(2648), r += "' "), x[e(988)][e(2242)] && (r += " , schema: false , parentSchema: validate.schema" + x[e(1438)] + e(1574) + l + " "), r += " } ") : r += e(2903);
            var Z = r;
            r = _[e(867)](), !x[e(2965)] && f ? x[e(687)] ? r += " throw new ValidationError([" + Z + "]); " : r += e(724) + Z + e(2568) : r += e(2329) + Z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", u = X, f && (r += " break; ");
          }
        else if (N)
          if ($ == e(1528)) {
            r += e(2153) + g + e(2627);
            var Q = x[e(2965)];
            x[e(2965)] = h[e(2965)] = !0, h[e(2485)] = j, h[e(1438)] = x[e(1438)] + ".additionalProperties", h[e(928)] = x[e(928)] + "/additionalProperties", h[e(1926)] = x[e(988)][e(2145)] ? x[e(1926)] : x[e(1530)][e(700)](x.errorPath, S, x[e(988)][e(1296)]);
            var s0 = l + "[" + S + "]";
            h.dataPathArr[F] = S;
            var i0 = x.validate(h);
            h.baseId = G, x[e(1530)].varOccurences(i0, O) < 2 ? r += " " + x[e(1530)][e(2377)](i0, O, s0) + " " : r += " var " + O + e(2283) + s0 + "; " + i0 + " ", r += e(740) + v + e(1687) + g + e(2381) + l + "[" + S + "]; }  ", x[e(2965)] = h.compositeRule = Q;
          } else {
            h[e(2485)] = j, h[e(1438)] = x.schemaPath + e(2922), h[e(928)] = x.errSchemaPath + e(2629), h[e(1926)] = x[e(988)]._errorDataPathProperty ? x[e(1926)] : x[e(1530)][e(700)](x[e(1926)], S, x[e(988)][e(1296)]);
            var s0 = l + "[" + S + "]";
            h[e(531)][F] = S;
            var i0 = x.validate(h);
            h.baseId = G, x[e(1530)][e(530)](i0, O) < 2 ? r += " " + x[e(1530)].varReplace(i0, O, s0) + " " : r += e(2153) + O + e(2283) + s0 + "; " + i0 + " ", f && (r += e(740) + v + e(1486));
          }
        x[e(1926)] = T;
      }
      L && (r += e(2705)), r += e(2926), f && (r += e(1732) + v + e(1988), m += "}");
    }
    var a0 = x[e(988)][e(2034)] && !x[e(2965)];
    if (I[e(1492)]) {
      var L0 = I;
      if (L0)
        for (var f0, O0 = -1, U0 = L0[e(1492)] - 1; O0 < U0; ) {
          f0 = L0[O0 += 1];
          var S0 = c[f0];
          if (x.opts[e(551)] ? typeof S0 == e(2535) && Object.keys(S0)[e(1492)] > 0 || S0 === !1 : x[e(1530)][e(1414)](S0, x.RULES.all)) {
            var J0 = x[e(1530)][e(2410)](f0), s0 = l + J0, ne = a0 && S0[e(1753)] !== void 0;
            h[e(2485)] = S0, h.schemaPath = d + J0, h[e(928)] = u + "/" + x.util[e(1548)](f0), h.errorPath = x[e(1530)][e(2246)](x[e(1926)], f0, x.opts[e(1296)]), h[e(531)][F] = x.util[e(1032)](f0);
            var i0 = x[e(896)](h);
            if (h[e(558)] = G, x[e(1530)][e(530)](i0, O) < 2) {
              i0 = x[e(1530)][e(2377)](i0, O, s0);
              var Q0 = s0;
            } else {
              var Q0 = O;
              r += " var " + O + " = " + s0 + "; ";
            }
            if (ne) r += " " + i0 + " ";
            else {
              if (d0 && d0[f0]) {
                r += e(1422) + Q0 + e(2279), V && (r += e(581) + l + e(1922) + x[e(1530)][e(2099)](f0) + e(2148)), r += ") { " + v + " = false; ";
                var T = x.errorPath, X = u, A0 = x[e(1530)][e(2099)](f0);
                x[e(988)][e(2145)] && (x[e(1926)] = x[e(1530)][e(2246)](T, f0, x[e(988)][e(1296)])), u = x.errSchemaPath + e(2131);
                var _ = _ || [];
                _[e(893)](r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + e(1643) + "' , dataPath: (dataPath || '') + " + x[e(1926)] + e(2425) + x.util.toQuotedString(u) + " , params: { missingProperty: '" + A0 + e(2070), x.opts[e(1273)] !== !1 && (r += e(1559), x[e(988)]._errorDataPathProperty ? r += e(2667) : r += e(580) + A0 + "\\'", r += "' "), x[e(988)][e(2242)] && (r += " , schema: validate.schema" + d + e(1152) + x[e(1438)] + e(1574) + l + " "), r += e(2705)) : r += e(2903);
                var Z = r;
                r = _[e(867)](), !x[e(2965)] && f ? x[e(687)] ? r += e(1383) + Z + e(1823) : r += e(724) + Z + "]; return false; " : r += e(2329) + Z + e(1217), u = X, x[e(1926)] = T, r += e(2341);
              } else f ? (r += e(1422) + Q0 + e(2279), V && (r += e(581) + l + e(1922) + x[e(1530)][e(2099)](f0) + e(2148)), r += e(1988) + v + " = true; } else { ") : (r += " if (" + Q0 + " !== undefined ", V && (r += e(2320) + l + e(1922) + x[e(1530)][e(2099)](f0) + e(2148)), r += e(1653));
              r += " " + i0 + e(2705);
            }
          }
          f && (r += e(1732) + v + e(1988), m += "}");
        }
    }
    if (A[e(1492)]) {
      var H0 = A;
      if (H0)
        for (var F0, _0 = -1, Le = H0[e(1492)] - 1; _0 < Le; ) {
          F0 = H0[_0 += 1];
          var S0 = C[F0];
          if (x.opts[e(551)] ? typeof S0 == e(2535) && Object.keys(S0).length > 0 || S0 === !1 : x[e(1530)][e(1414)](S0, x[e(977)][e(2380)])) {
            h.schema = S0, h[e(1438)] = x[e(1438)] + e(1985) + x[e(1530)][e(2410)](F0), h[e(928)] = x[e(928)] + "/patternProperties/" + x[e(1530)][e(1548)](F0), V ? r += " " + R + " = " + R + e(1953) + l + e(2231) + P + e(2353) + P + "<" + R + e(799) + P + e(2451) + S + " = " + R + "[" + P + e(504) : r += e(1483) + S + e(2238) + l + ") { ", r += e(1732) + x.usePattern(F0) + ".test(" + S + ")) { ", h[e(1926)] = x.util.getPathExpr(x[e(1926)], S, x[e(988)][e(1296)]);
            var s0 = l + "[" + S + "]";
            h[e(531)][F] = S;
            var i0 = x.validate(h);
            h.baseId = G, x[e(1530)][e(530)](i0, O) < 2 ? r += " " + x.util[e(2377)](i0, O, s0) + " " : r += e(2153) + O + e(2283) + s0 + "; " + i0 + " ", f && (r += e(740) + v + e(1486)), r += e(2705), f && (r += e(1310) + v + e(1591)), r += e(2926), f && (r += e(1732) + v + ") { ", m += "}");
          }
        }
    }
    return f && (r += " " + m + e(1732) + g + " == errors) {"), r;
  }), kt;
}
var Pt, jr;
function cc() {
  return jr || (jr = 1, Pt = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x[e(2485)][t], d = x[e(1438)] + x[e(1530)].getProperty(t), u = x[e(928)] + "/" + t, f = !x[e(988)][e(1116)], l = e(1369) + (o || ""), g = "errs__" + n, h = x[e(1530)].copy(x), m = "";
    h[e(2227)]++;
    var v = e(1016) + h[e(2227)];
    if (r += e(930) + g + e(2861), x[e(988)][e(551)] ? typeof c == e(2535) && Object[e(2693)](c)[e(1492)] > 0 || c === !1 : x[e(1530)][e(1414)](c, x[e(977)].all)) {
      h[e(2485)] = c, h[e(1438)] = d, h[e(928)] = u;
      var S = e(771) + n, P = e(1309) + n, F = "i" + n, O = e(1913) + S + e(2565), R = h[e(528)] = x[e(528)] + 1, I = e(1369) + R, C = e(702) + n, A = x[e(988)][e(2193)], j = x[e(558)];
      A && (r += e(2153) + C + e(2605)), A ? r += " " + C + e(2283) + C + e(1953) + l + "); for (var " + P + e(2353) + P + "<" + C + e(799) + P + "++) { var " + S + " = " + C + "[" + P + e(504) : r += e(1483) + S + e(2238) + l + e(1988), r += e(2480) + n + e(587);
      var L = S, q = x[e(2965)];
      x[e(2965)] = h.compositeRule = !0;
      var N = x[e(896)](h);
      h[e(558)] = j, x[e(1530)].varOccurences(N, I) < 2 ? r += " " + x[e(1530)].varReplace(N, I, L) + " " : r += e(2153) + I + e(2283) + L + "; " + N + " ", x[e(2965)] = h[e(2965)] = q, r += e(740) + v + e(719) + F + "=startErrs" + n + "; " + F + e(2973) + F + e(2239) + F + e(1211) + S + e(1843), x[e(1498)] !== !1 ? (r += e(1839) + "propertyNames" + e(2572) + x[e(1926)] + " , schemaPath: " + x[e(1530)].toQuotedString(u) + e(2408) + O + e(2070), x[e(988)][e(1273)] !== !1 && (r += e(2963) + O + "\\' is invalid' "), x.opts.verbose && (r += e(953) + d + " , parentSchema: validate.schema" + x[e(1438)] + e(1574) + l + " "), r += e(2705)) : r += e(2903), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x.compositeRule && f && (x.async ? r += " throw new ValidationError(vErrors); " : r += e(1656)), f && (r += e(1349)), r += " } }";
    }
    return f && (r += " " + m + " if (" + g + e(2256)), r;
  }), Pt;
}
var Et, Mr;
function dc() {
  return Mr || (Mr = 1, Et = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x.dataLevel, c = x.schema[t], d = x[e(1438)] + x[e(1530)][e(2410)](t), u = x.errSchemaPath + "/" + t, f = !x[e(988)][e(1116)], l = "data" + (o || ""), g = e(1016) + n, h = x[e(988)][e(1845)] && c && c.$data;
    h && (r += e(2266) + n + e(2283) + x.util[e(2927)](c[e(1845)], o, x[e(531)]) + "; ");
    var m = "schema" + n;
    if (!h)
      if (c[e(1492)] < x[e(988)][e(2155)] && x[e(2485)][e(1089)] && Object[e(2693)](x.schema[e(1089)])[e(1492)]) {
        var R = [], v = c;
        if (v)
          for (var S, P = -1, F = v[e(1492)] - 1; P < F; ) {
            S = v[P += 1];
            var O = x.schema[e(1089)][S];
            !(O && (x[e(988)][e(551)] ? typeof O == e(2535) && Object[e(2693)](O)[e(1492)] > 0 || O === !1 : x[e(1530)].schemaHasRules(O, x[e(977)][e(2380)]))) && (R[R[e(1492)]] = S);
          }
      } else var R = c;
    if (h || R[e(1492)]) {
      var I = x[e(1926)], C = h || R[e(1492)] >= x.opts[e(2155)], A = x[e(988)][e(2193)];
      if (f)
        if (r += e(2184) + n + "; ", C) {
          !h && (r += e(2153) + m + " = validate.schema" + d + "; ");
          var j = "i" + n, L = e(2485) + n + "[" + j + "]", q = "' + " + L + e(2565);
          x[e(988)][e(2145)] && (x[e(1926)] = x[e(1530)][e(700)](I, L, x[e(988)][e(1296)])), r += e(2153) + g + e(1591), h && (r += " if (schema" + n + e(691) + g + e(1581) + n + e(1083) + g + e(2419)), r += e(1483) + j + " = 0; " + j + " < " + m + e(799) + j + e(520) + g + e(2283) + l + "[" + m + "[" + j + e(2347), A && (r += e(2320) + l + ", " + m + "[" + j + e(1822)), r += "; if (!" + g + e(2423), h && (r += e(2332)), r += "  if (!" + g + ") {   ";
          var N = N || [];
          N[e(893)](r), r = "", x.createErrors !== !1 ? (r += " { keyword: '" + e(1643) + e(2572) + x[e(1926)] + e(2425) + x[e(1530)].toQuotedString(u) + e(2669) + q + "' } ", x[e(988)][e(1273)] !== !1 && (r += " , message: '", x.opts[e(2145)] ? r += "is a required property" : r += e(580) + q + "\\'", r += "' "), x[e(988)][e(2242)] && (r += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + x.schemaPath + e(1574) + l + " "), r += e(2705)) : r += e(2903);
          var $ = r;
          r = N[e(867)](), !x[e(2965)] && f ? x[e(687)] ? r += " throw new ValidationError([" + $ + e(1823) : r += e(724) + $ + e(2568) : r += e(2329) + $ + e(1217), r += e(2341);
        } else {
          r += " if ( ";
          var H = R;
          if (H)
            for (var V, j = -1, G = H[e(1492)] - 1; j < G; ) {
              V = H[j += 1], j && (r += e(2165));
              var c0 = x.util[e(2410)](V), d0 = l + c0;
              r += e(1109) + d0 + e(2279), A && (r += " || ! Object.prototype.hasOwnProperty.call(" + l + e(1922) + x.util[e(2099)](V) + e(2148)), r += ") && (missing" + n + e(2283) + x.util[e(1032)](x[e(988)].jsonPointers ? V : c0) + e(2616);
            }
          r += e(2491);
          var L = e(2956) + n, q = "' + " + L + " + '";
          x[e(988)][e(2145)] && (x[e(1926)] = x.opts[e(1296)] ? x[e(1530)][e(700)](I, L, !0) : I + e(1413) + L);
          var N = N || [];
          N[e(893)](r), r = "", x.createErrors !== !1 ? (r += " { keyword: '" + e(1643) + e(2572) + x.errorPath + e(2425) + x[e(1530)][e(1032)](u) + e(2669) + q + e(2070), x[e(988)].messages !== !1 && (r += e(1559), x[e(988)]._errorDataPathProperty ? r += e(2667) : r += e(580) + q + "\\'", r += "' "), x.opts.verbose && (r += e(953) + d + e(1152) + x[e(1438)] + e(1574) + l + " "), r += e(2705)) : r += " {} ";
          var $ = r;
          r = N[e(867)](), !x[e(2965)] && f ? x[e(687)] ? r += e(1383) + $ + e(1823) : r += e(724) + $ + e(2568) : r += e(2329) + $ + e(1217), r += e(2341);
        }
      else if (C) {
        !h && (r += " var " + m + " = validate.schema" + d + "; ");
        var j = "i" + n, L = e(2485) + n + "[" + j + "]", q = e(1913) + L + e(2565);
        x[e(988)][e(2145)] && (x[e(1926)] = x.util[e(700)](I, L, x[e(988)][e(1296)])), h && (r += e(1732) + m + e(971) + m + e(2732), x[e(1498)] !== !1 ? (r += e(1839) + e(1643) + "' , dataPath: (dataPath || '') + " + x[e(1926)] + e(2425) + x[e(1530)].toQuotedString(u) + e(2669) + q + e(2070), x.opts[e(1273)] !== !1 && (r += e(1559), x[e(988)][e(2145)] ? r += e(2667) : r += e(580) + q + "\\'", r += "' "), x[e(988)][e(2242)] && (r += e(953) + d + e(1152) + x[e(1438)] + e(1574) + l + " "), r += e(2705)) : r += " {} ", r += e(2718) + m + e(1668)), r += e(1483) + j + e(2424) + j + e(2393) + m + e(799) + j + e(2050) + l + "[" + m + "[" + j + e(2059), A && (r += e(581) + l + ", " + m + "[" + j + "]) "), r += ") {  var err =   ", x[e(1498)] !== !1 ? (r += e(1839) + e(1643) + e(2572) + x[e(1926)] + e(2425) + x[e(1530)][e(1032)](u) + e(2669) + q + e(2070), x[e(988)][e(1273)] !== !1 && (r += e(1559), x[e(988)][e(2145)] ? r += e(2667) : r += e(580) + q + "\\'", r += "' "), x.opts[e(2242)] && (r += e(953) + d + e(1152) + x.schemaPath + e(1574) + l + " "), r += " } ") : r += e(2903), r += e(1175), h && (r += e(2332));
      } else {
        var l0 = R;
        if (l0)
          for (var V, o0 = -1, f0 = l0[e(1492)] - 1; o0 < f0; ) {
            V = l0[o0 += 1];
            var c0 = x[e(1530)][e(2410)](V), q = x.util[e(2099)](V), d0 = l + c0;
            x.opts._errorDataPathProperty && (x.errorPath = x.util.getPath(I, V, x.opts[e(1296)])), r += e(1422) + d0 + " === undefined ", A && (r += e(581) + l + e(1922) + x.util[e(2099)](V) + e(2148)), r += e(1834), x[e(1498)] !== !1 ? (r += " { keyword: '" + e(1643) + "' , dataPath: (dataPath || '') + " + x[e(1926)] + " , schemaPath: " + x.util[e(1032)](u) + e(2669) + q + "' } ", x.opts.messages !== !1 && (r += e(1559), x.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + q + "\\'", r += "' "), x.opts[e(2242)] && (r += e(953) + d + " , parentSchema: validate.schema" + x.schemaPath + e(1574) + l + " "), r += " } ") : r += e(2903), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
          }
      }
      x.errorPath = I;
    } else f && (r += e(2728));
    return r;
  }), Et;
}
var It, Lr;
function uc() {
  return Lr || (Lr = 1, It = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x[e(2485)][t], d = x[e(1438)] + x[e(1530)][e(2410)](t), u = x[e(928)] + "/" + t, f = !x.opts[e(1116)], l = "data" + (o || ""), g = e(1016) + n, h = x[e(988)][e(1845)] && c && c[e(1845)], m;
    if (h ? (r += e(2266) + n + e(2283) + x[e(1530)].getData(c[e(1845)], o, x[e(531)]) + "; ", m = e(2485) + n) : m = c, (c || h) && x[e(988)][e(1046)] !== !1) {
      h && (r += " var " + g + e(2103) + m + e(539) + m + e(691) + g + " = true; else if (typeof " + m + e(2686) + g + e(1134)), r += " var i = " + l + e(2911) + g + " = true , j; if (i > 1) { ";
      var v = x.schema[e(2756)] && x[e(2485)][e(2756)].type, S = Array.isArray(v);
      if (!v || v == e(2535) || v == e(1355) || S && (v[e(2098)](e(2535)) >= 0 || v.indexOf(e(1355)) >= 0)) r += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + l + "[i], " + l + "[j])) { " + g + e(2877);
      else {
        r += " var itemIndices = {}, item; for (;i--;) { var item = " + l + e(597);
        var P = e(1702) + (S ? "s" : "");
        r += e(1732) + x.util[P](v, "item", x[e(988)].strictNumbers, !0) + e(1070), S && (r += e(1086)), r += e(1158) + g + e(976);
      }
      r += e(2705), h && (r += "  }  "), r += e(740) + g + e(2121);
      var F = F || [];
      F.push(r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + e(1046) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(2425) + x[e(1530)][e(1032)](u) + e(2509), x[e(988)].messages !== !1 && (r += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), x[e(988)][e(2242)] && (r += e(1302), h ? r += e(1126) + d : r += "" + c, r += e(1904) + x[e(1438)] + e(1574) + l + " "), r += e(2705)) : r += e(2903);
      var O = r;
      r = F[e(867)](), !x.compositeRule && f ? x[e(687)] ? r += e(1383) + O + e(1823) : r += e(724) + O + e(2568) : r += e(2329) + O + e(1217), r += " } ", f && (r += e(2366));
    } else f && (r += e(2077));
    return r;
  }), It;
}
var Rt, $r;
function fc() {
  return $r || ($r = 1, Rt = { $ref: K2(), allOf: G2(), anyOf: J2(), $comment: Q2(), const: X2(), contains: Y2(), dependencies: _2(), enum: ec(), format: xc(), if: tc(), items: ac(), maximum: Pr(), minimum: Pr(), maxItems: Ir(), minItems: Ir(), maxLength: Cr(), minLength: Cr(), maxProperties: Nr(), minProperties: Nr(), multipleOf: rc(), not: sc(), oneOf: nc(), pattern: ic(), properties: oc(), propertyNames: cc(), required: dc(), uniqueItems: uc(), validate: pn() }), Rt;
}
var Ct, zr;
function lc() {
  const i = a;
  if (zr) return Ct;
  zr = 1;
  var x = fc(), t = We()[i(878)];
  return Ct = function() {
    const e = i;
    var r = [{ type: e(1120), rules: [{ maximum: [e(1196)] }, { minimum: [e(900)] }, "multipleOf", "format"] }, { type: e(1346), rules: [e(1080), e(908), e(2407), e(2503)] }, { type: e(1355), rules: [e(2858), e(618), e(2756), e(2061), e(1046)] }, { type: e(2535), rules: [e(1830), "minProperties", e(1643), "dependencies", e(1633), { properties: [e(2315), e(634)] }] }, { rules: [e(1104), "const", e(2304), e(2719), e(1755), "oneOf", e(1885), "if"] }], n = [e(2417), "$comment"], o = [e(2524), e(2299), "id", e(1845), e(2499), "title", "description", e(1753), e(865), "examples", e(2942), e(2316), e(623), e(1107), e(1254), e(2139), "else"], c = ["number", e(2656), e(1346), e(1355), e(2535), e(2173), "null"];
    return r.all = t(n), r[e(497)] = t(c), r[e(1615)](function(d) {
      const u = e;
      d[u(2885)] = d[u(2885)].map(function(f) {
        const l = u;
        var g;
        if (typeof f == l(2535)) {
          var h = Object.keys(f)[0];
          g = f[h], f = h, g[l(1615)](function(v) {
            const S = l;
            n[S(893)](v), r[S(2380)][v] = !0;
          });
        }
        n[l(893)](f);
        var m = r[l(2380)][f] = { keyword: f, code: x[f], implements: g };
        return m;
      }), r[u(2380)][u(2729)] = { keyword: u(2729), code: x[u(2729)] }, d[u(2417)] && (r[u(497)][d[u(2417)]] = d);
    }), r[e(2585)] = t(n.concat(o)), r[e(2789)] = {}, r;
  }, Ct;
}
var Ft, Ur;
function hc() {
  const i = a;
  if (Ur) return Ft;
  Ur = 1;
  var x = [i(1683), i(2717), i(1196), i(2551), "exclusiveMinimum", i(1080), i(908), "pattern", i(1254), i(2858), i(618), i(1046), "maxProperties", "minProperties", i(1643), i(2315), i(2304), i(2503), "const"];
  return Ft = function(t, s) {
    const e = i;
    for (var r = 0; r < s.length; r++) {
      t = JSON[e(1205)](JSON[e(2149)](t));
      var n = s[r][e(2889)]("/"), o = t, c;
      for (c = 1; c < n[e(1492)]; c++) o = o[n[c]];
      for (c = 0; c < x[e(1492)]; c++) {
        var d = x[c], u = o[d];
        u && (o[d] = { anyOf: [u, { $ref: e(1967) }] });
      }
    }
    return t;
  }, Ft;
}
var Nt, Hr;
function pc() {
  const i = a;
  if (Hr) return Nt;
  Hr = 1;
  var x = ca()[i(1645)];
  Nt = t;
  function t(s, e, r) {
    const n = i;
    var o = this;
    if (typeof this[n(2392)][n(1877)] != "function") throw new Error(n(1655));
    typeof e == n(621) && (r = e, e = void 0);
    var c = d(s)[n(2139)](function() {
      const f = n;
      var l = o[f(1743)](s, void 0, e);
      return l[f(896)] || u(l);
    });
    return r && c[n(2139)](function(f) {
      r(null, f);
    }, r), c;
    function d(f) {
      const l = n;
      var g = f.$schema;
      return g && !o[l(1778)](g) ? t[l(983)](o, { $ref: g }, !0) : Promise[l(1362)]();
    }
    function u(f) {
      try {
        return o._compile(f);
      } catch (g) {
        if (g instanceof x) return l(g);
        throw g;
      }
      function l(g) {
        const h = K;
        var m = g[h(2682)];
        if (P(m)) throw new Error(h(1054) + m + " is loaded but " + g[h(1091)] + h(822));
        var v = o._loadingSchemas[m];
        return !v && (v = o[h(1045)][m] = o[h(2392)].loadSchema(m), v[h(2139)](S, S)), v[h(2139)](function(F) {
          const O = h;
          if (!P(m)) return d(F)[O(2139)](function() {
            const R = O;
            P(m) || o[R(805)](F, m, void 0, e);
          });
        }).then(function() {
          return u(f);
        });
        function S() {
          delete o._loadingSchemas[m];
        }
        function P(F) {
          return o[h(1251)][F] || o._schemas[F];
        }
      }
    }
  }
  return Nt;
}
var qt, Vr;
function mc() {
  return Vr || (Vr = 1, qt = function(x, t, s) {
    const e = K;
    var r = " ", n = x[e(2227)], o = x[e(528)], c = x[e(2485)][t], d = x[e(1438)] + x[e(1530)][e(2410)](t), u = x.errSchemaPath + "/" + t, f = !x[e(988)][e(1116)], l, g = e(1369) + (o || ""), h = "valid" + n, m = e(1435) + n, v = x.opts[e(1845)] && c && c[e(1845)], S;
    v ? (r += " var schema" + n + e(2283) + x.util[e(2927)](c[e(1845)], o, x[e(531)]) + "; ", S = e(2485) + n) : S = c;
    var P = this, F = e(2596) + n, O = P[e(2596)], R = "", I, C, A, j, L;
    if (v && O[e(1845)]) {
      L = e(549) + n;
      var q = O.validateSchema;
      r += " var " + F + " = RULES.custom['" + t + "'].definition; var " + L + e(2283) + F + e(1598);
    } else {
      if (j = x[e(2711)](P, c, x.schema, x), !j) return;
      S = e(1126) + d, L = j[e(2952)], I = O.compile, C = O[e(1889)], A = O[e(2414)];
    }
    var N = L + ".errors", $ = "i" + n, H = e(970) + n, V = O[e(687)];
    if (V && !x[e(687)]) throw new Error("async keyword in sync schema");
    if (!(C || A) && (r += "" + N + e(2187)), r += e(930) + m + e(2490) + h + ";", v && O.$data && (R += "}", r += " if (" + S + e(1523) + h + " = true; } else { ", q && (R += "}", r += " " + h + e(2283) + F + ".validateSchema(" + S + e(2755) + h + ") { ")), C) O[e(2881)] ? r += " " + j[e(896)] + " " : r += " " + h + e(2283) + j.validate + "; ";
    else if (A) {
      var G = x[e(1530)].copy(x), R = "";
      G[e(2227)]++;
      var c0 = e(1016) + G[e(2227)];
      G[e(2485)] = j[e(896)], G[e(1438)] = "";
      var d0 = x[e(2965)];
      x[e(2965)] = G[e(2965)] = !0;
      var l0 = x.validate(G)[e(499)](/validate\.schema/g, L);
      x[e(2965)] = G[e(2965)] = d0, r += " " + l0;
    } else {
      var o0 = o0 || [];
      o0[e(893)](r), r = "", r += "  " + L + e(1163), x[e(988)][e(2026)] ? r += e(2444) : r += "self", I || O[e(2485)] === !1 ? r += e(1815) + g + " " : r += e(1815) + S + e(1815) + g + e(1901) + x[e(1438)] + " ", r += e(1171), x[e(1926)] != '""' && (r += e(1413) + x.errorPath);
      var f0 = o ? e(1369) + (o - 1 || "") : e(906), k0 = o ? x[e(531)][o] : e(2458);
      r += e(1815) + f0 + e(1815) + k0 + e(2078);
      var y0 = r;
      r = o0.pop(), O[e(862)] === !1 ? (r += " " + h + e(2283), V && (r += e(2941)), r += "" + y0 + "; ") : V ? (N = e(790) + n, r += e(2153) + N + e(1917) + h + e(1831) + y0 + "; } catch (e) { " + h + " = false; if (e instanceof ValidationError) " + N + e(1677)) : r += " " + N + " = null; " + h + e(2283) + y0 + "; ";
    }
    if (O[e(996)] && (r += e(1732) + f0 + ") " + g + e(2283) + f0 + "[" + k0 + "];"), r += "" + R, O[e(1016)]) f && (r += e(2077));
    else {
      r += e(1422), O[e(1016)] === void 0 ? (r += " !", A ? r += "" + c0 : r += "" + h) : r += " " + !O.valid + " ", r += ") { ", l = P.keyword;
      var o0 = o0 || [];
      o0[e(893)](r), r = "";
      var o0 = o0 || [];
      o0[e(893)](r), r = "", x[e(1498)] !== !1 ? (r += e(1839) + (l || e(2789)) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(2425) + x[e(1530)][e(1032)](u) + e(1099) + P[e(2522)] + e(2070), x[e(988)][e(1273)] !== !1 && (r += e(1075) + P[e(2522)] + e(1654)), x.opts[e(2242)] && (r += e(953) + d + e(1152) + x[e(1438)] + " , data: " + g + " "), r += e(2705)) : r += e(2903);
      var M0 = r;
      r = o0[e(867)](), !x.compositeRule && f ? x[e(687)] ? r += e(1383) + M0 + e(1823) : r += e(724) + M0 + e(2568) : r += " var err = " + M0 + e(1217);
      var F0 = r;
      r = o0[e(867)](), C ? O[e(862)] ? O.errors != e(1761) && (r += e(1165) + $ + "=" + m + "; " + $ + "<errors; " + $ + "++) { var " + H + " = vErrors[" + $ + e(1707) + H + e(695) + H + ".dataPath = (dataPath || '') + " + x[e(1926)] + e(2103) + H + e(534) + H + e(1535) + u + e(1432), x[e(988)][e(2242)] && (r += " " + H + e(1212) + S + "; " + H + ".data = " + g + "; "), r += e(2705)) : O[e(862)] === !1 ? r += " " + F0 + " " : (r += e(1732) + m + " == errors) { " + F0 + " } else {  for (var " + $ + "=" + m + "; " + $ + e(2973) + $ + e(2451) + H + e(984) + $ + e(1707) + H + e(695) + H + ".dataPath = (dataPath || '') + " + x[e(1926)] + e(2103) + H + ".schemaPath === undefined) { " + H + e(1535) + u + e(1432), x.opts[e(2242)] && (r += " " + H + e(1212) + S + "; " + H + e(776) + g + "; "), r += e(2546)) : A ? (r += e(2021), x[e(1498)] !== !1 ? (r += e(1839) + (l || e(2789)) + e(2572) + x[e(1926)] + e(2425) + x[e(1530)][e(1032)](u) + e(1099) + P[e(2522)] + e(2070), x[e(988)][e(1273)] !== !1 && (r += e(1075) + P.keyword + e(1654)), x.opts[e(2242)] && (r += e(953) + d + e(1152) + x[e(1438)] + e(1574) + g + " "), r += e(2705)) : r += e(2903), r += e(1217), !x[e(2965)] && f && (x.async ? r += " throw new ValidationError(vErrors); " : r += e(1656))) : O[e(862)] === !1 ? r += " " + F0 + " " : (r += " if (Array.isArray(" + N + e(1746) + N + "; else vErrors = vErrors.concat(" + N + "); errors = vErrors.length;  for (var " + $ + "=" + m + "; " + $ + e(2973) + $ + e(2451) + H + e(984) + $ + e(1707) + H + ".dataPath === undefined) " + H + e(2958) + x[e(1926)] + ";  " + H + '.schemaPath = "' + u + e(2409), x[e(988)][e(2242)] && (r += " " + H + e(1212) + S + "; " + H + e(776) + g + "; "), r += e(2593) + F0 + " } "), r += " } ", f && (r += e(2366));
    }
    return r;
  }), qt;
}
const gc = a(1576), bc = a(1576), yc = a(804), vc = { schemaArray: { type: a(1355), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: a(2656), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: [a(1355), "boolean", a(2656), a(693), a(1120), a(2535), a(1346)] }, stringArray: { type: "array", items: { type: a(1346) }, uniqueItems: !0, default: [] } }, wc = ["object", "boolean"], Sc = { $id: { type: a(1346), format: a(2630) }, $schema: { type: a(1346), format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: a(1346) }, title: { type: "string" }, description: { type: a(1346) }, default: !0, readOnly: { type: a(2173), default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: a(1120), exclusiveMinimum: 0 }, maximum: { type: a(1120) }, exclusiveMaximum: { type: "number" }, minimum: { type: a(1120) }, exclusiveMinimum: { type: a(1120) }, maxLength: { $ref: a(1262) }, minLength: { $ref: a(2300) }, pattern: { type: a(1346), format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: a(1124) }], default: !0 }, maxItems: { $ref: a(1262) }, minItems: { $ref: a(2300) }, uniqueItems: { type: a(2173), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: a(1262) }, minProperties: { $ref: a(2300) }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: a(2535), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: a(2535), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: a(1910) }, default: {} }, dependencies: { type: a(2535), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: a(1355), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: a(586) }, { type: "array", items: { $ref: a(586) }, minItems: 1, uniqueItems: !0 }] }, format: { type: a(1346) }, contentMediaType: { type: "string" }, contentEncoding: { type: a(1346) }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: a(1124) }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: a(1124) }, not: { $ref: "#" } }, mn = { $schema: gc, $id: bc, title: yc, definitions: vc, type: wc, properties: Sc, default: !0 };
var Tt, Zr;
function kc() {
  const i = a;
  if (Zr) return Tt;
  Zr = 1;
  var x = mn;
  return Tt = { $id: i(692), definitions: { simpleTypes: x[i(865)][i(766)] }, type: "object", dependencies: { schema: [i(896)], $data: [i(896)], statements: [i(1889)], valid: { not: { required: [i(2414)] } } }, properties: { type: x[i(1089)].type, schema: { type: "boolean" }, statements: { type: "boolean" }, dependencies: { type: "array", items: { type: "string" } }, metaSchema: { type: i(2535) }, modifying: { type: i(2173) }, valid: { type: i(2173) }, $data: { type: i(2173) }, async: { type: i(2173) }, errors: { anyOf: [{ type: i(2173) }, { const: "full" }] } } }, Tt;
}
var Ot, Br;
function Pc() {
  if (Br) return Ot;
  Br = 1;
  var i = /^[a-z_$][a-z0-9_$-]*$/i, x = mc(), t = kc();
  Ot = { add: s, get: e, remove: r, validate: n };
  function s(o, c) {
    const d = K;
    var u = this[d(977)];
    if (u.keywords[o]) throw new Error(d(872) + o + " is already defined");
    if (!i.test(o)) throw new Error(d(872) + o + d(2363));
    if (c) {
      this[d(2230)](c, !0);
      var f = c[d(2417)];
      if (Array[d(1320)](f))
        for (var l = 0; l < f.length; l++) h(o, f[l], c);
      else h(o, f, c);
      var g = c[d(1353)];
      g && (c[d(1845)] && this[d(2392)][d(1845)] && (g = { anyOf: [g, { $ref: d(1967) }] }), c[d(1077)] = this[d(1840)](g, !0));
    }
    u[d(2585)][o] = u[d(2380)][o] = !0;
    function h(m, v, S) {
      const P = d;
      for (var F, O = 0; O < u.length; O++) {
        var R = u[O];
        if (R[P(2417)] == v) {
          F = R;
          break;
        }
      }
      !F && (F = { type: v, rules: [] }, u.push(F));
      var I = { keyword: m, definition: S, custom: !0, code: x, implements: S[P(2749)] };
      F[P(2885)][P(893)](I), u[P(2789)][m] = I;
    }
    return this;
  }
  function e(o) {
    const c = K;
    var d = this[c(977)].custom[o];
    return d ? d.definition : this[c(977)][c(2585)][o] || !1;
  }
  function r(o) {
    const c = K;
    var d = this.RULES;
    delete d[c(2585)][o], delete d[c(2380)][o], delete d[c(2789)][o];
    for (var u = 0; u < d.length; u++)
      for (var f = d[u].rules, l = 0; l < f.length; l++)
        if (f[l][c(2522)] == o) {
          f[c(1401)](l, 1);
          break;
        }
    return this;
  }
  function n(o, c) {
    const d = K;
    n.errors = null;
    var u = this[d(2322)] = this[d(2322)] || this[d(1840)](t, !0);
    if (u(o)) return !0;
    if (n[d(862)] = u.errors, c) throw new Error(d(1536) + this[d(2959)](u[d(862)]));
    return !1;
  }
  return Ot;
}
const Ec = a(1576), Ic = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Rc = a(710), Cc = "object", Fc = [a(1845)], Nc = { $data: { type: "string", anyOf: [{ format: a(648) }, { format: "json-pointer" }] } }, qc = !1, Tc = { $schema: Ec, $id: Ic, description: Rc, type: Cc, required: Fc, properties: Nc, additionalProperties: qc };
var At, Wr;
function Oc() {
  const i = a;
  if (Wr) return At;
  Wr = 1;
  var x = Z2(), t = oa(), s = B2(), e = ln(), r = hn(), n = W2(), o = lc(), c = hc(), d = We();
  At = m, m.prototype[i(896)] = v, m[i(757)][i(1840)] = S, m[i(757)].addSchema = P, m[i(757)].addMetaSchema = F, m[i(757)].validateSchema = O, m[i(757)][i(1778)] = I, m[i(757)].removeSchema = j, m.prototype[i(2580)] = d0, m.prototype[i(2959)] = c0, m.prototype._addSchema = q, m[i(757)][i(2764)] = N, m[i(757)][i(1549)] = pc();
  var u = Pc();
  m[i(757)][i(1882)] = u[i(911)], m[i(757)][i(748)] = u[i(1919)], m[i(757)][i(2370)] = u[i(2816)], m.prototype[i(2230)] = u[i(896)];
  var f = ca();
  m.ValidationError = f.Validation, m[i(1366)] = f[i(1645)], m[i(2309)] = c;
  var l = i(2022), g = ["removeAdditional", i(2034), "coerceTypes", i(802)], h = [i(670)];
  function m(D) {
    const T = i;
    if (!(this instanceof m)) return new m(D);
    D = this[T(2392)] = d.copy(D) || {}, F0(this), this[T(2782)] = {}, this[T(1251)] = {}, this[T(2328)] = {}, this[T(2036)] = n(D[T(2503)]), this._cache = D.cache || new s(), this[T(1045)] = {}, this[T(2874)] = [], this[T(977)] = o(), this._getId = $(D), D[T(2155)] = D[T(2155)] || 1 / 0, D[T(516)] == T(1773) && (D[T(2145)] = !0), D[T(1970)] === void 0 && (D[T(1970)] = r), this[T(1113)] = M0(this), D.formats && f0(this), D.keywords && k0(this), l0(this), typeof D[T(1243)] == T(2535) && this[T(1468)](D[T(1243)]), D[T(2093)] && this[T(1882)](T(2093), { metaSchema: { type: T(2173) } }), o0(this);
  }
  function v(D, T) {
    const M = i;
    var X;
    if (typeof D == M(1346)) {
      if (X = this[M(1778)](D), !X) throw new Error(M(2197) + D + '"');
    } else {
      var _ = this[M(1743)](D);
      X = _[M(896)] || this[M(2764)](_);
    }
    var Z = X(T);
    return X[M(2499)] !== !0 && (this[M(862)] = X[M(862)]), Z;
  }
  function S(D, T) {
    const M = i;
    var X = this[M(1743)](D, void 0, T);
    return X[M(896)] || this._compile(X);
  }
  function P(D, T, M, X) {
    const _ = i;
    if (Array[_(1320)](D)) {
      for (var Z = 0; Z < D[_(1492)]; Z++) this.addSchema(D[Z], void 0, M, X);
      return this;
    }
    var Q = this._getId(D);
    if (Q !== void 0 && typeof Q != _(1346)) throw new Error(_(1444));
    return T = t[_(2655)](T || Q), y0(this, T), this[_(2782)][T] = this[_(1743)](D, M, X, !0), this;
  }
  function F(D, T, M) {
    return this.addSchema(D, T, M, !0), this;
  }
  function O(D, T) {
    const M = i;
    var X = D[M(2524)];
    if (X !== void 0 && typeof X != "string") throw new Error(M(816));
    if (X = X || this[M(2392)].defaultMeta || R(this), !X) return this[M(1476)][M(2175)](M(847)), this[M(862)] = null, !0;
    var _ = this.validate(X, D);
    if (!_ && T) {
      var Z = M(2970) + this[M(2959)]();
      if (this[M(2392)][M(1077)] == M(1017)) this[M(1476)][M(1978)](Z);
      else throw new Error(Z);
    }
    return _;
  }
  function R(D) {
    const T = i;
    var M = D[T(2392)][T(1243)];
    return D[T(2392)][T(1584)] = typeof M == T(2535) ? D._getId(M) || M : D[T(1778)](l) ? l : void 0, D[T(2392)][T(1584)];
  }
  function I(D) {
    const T = i;
    var M = A(this, D);
    switch (typeof M) {
      case T(2535):
        return M[T(896)] || this._compile(M);
      case T(1346):
        return this.getSchema(M);
      case "undefined":
        return C(this, D);
    }
  }
  function C(D, T) {
    const M = i;
    var X = t[M(2485)][M(983)](D, { schema: {} }, T);
    if (X) {
      var _ = X[M(2485)], Z = X[M(2208)], Q = X.baseId, s0 = x[M(983)](D, _, Z, void 0, Q);
      return D[M(2328)][T] = new e({ ref: T, fragment: !0, schema: _, root: Z, baseId: Q, validate: s0 }), s0;
    }
  }
  function A(D, T) {
    const M = i;
    return T = t[M(2655)](T), D[M(2782)][T] || D._refs[T] || D[M(2328)][T];
  }
  function j(D) {
    const T = i;
    if (D instanceof RegExp) return L(this, this[T(2782)], D), L(this, this[T(1251)], D), this;
    switch (typeof D) {
      case T(633):
        return L(this, this[T(2782)]), L(this, this[T(1251)]), this[T(1503)][T(1724)](), this;
      case T(1346):
        var M = A(this, D);
        return M && this[T(1503)].del(M[T(2229)]), delete this[T(2782)][D], delete this[T(1251)][D], this;
      case T(2535):
        var X = this[T(2392)][T(1970)], _ = X ? X(D) : D;
        this[T(1503)].del(_);
        var Z = this[T(718)](D);
        Z && (Z = t[T(2655)](Z), delete this[T(2782)][Z], delete this[T(1251)][Z]);
    }
    return this;
  }
  function L(D, T, M) {
    const X = i;
    for (var _ in T) {
      var Z = T[_];
      !Z.meta && (!M || M[X(2553)](_)) && (D[X(1503)][X(1097)](Z.cacheKey), delete T[_]);
    }
  }
  function q(D, T, M, X) {
    const _ = i;
    if (typeof D != _(2535) && typeof D != _(2173)) throw new Error("schema should be object or boolean");
    var Z = this[_(2392)][_(1970)], Q = Z ? Z(D) : D, s0 = this[_(1503)].get(Q);
    if (s0) return s0;
    X = X || this[_(2392)][_(2164)] !== !1;
    var i0 = t.normalizeId(this[_(718)](D));
    i0 && X && y0(this, i0);
    var a0 = this._opts[_(1077)] !== !1 && !T, L0;
    a0 && !(L0 = i0 && i0 == t.normalizeId(D[_(2524)])) && this[_(1077)](D, !0);
    var O0 = t[_(1384)].call(this, D), U0 = new e({ id: i0, schema: D, localRefs: O0, cacheKey: Q, meta: M });
    return i0[0] != "#" && X && (this[_(1251)][i0] = U0), this._cache.put(Q, U0), a0 && L0 && this[_(1077)](D, !0), U0;
  }
  function N(D, T) {
    const M = i;
    if (D.compiling)
      return D.validate = Z, Z[M(2485)] = D[M(2485)], Z[M(862)] = null, Z[M(2208)] = T || Z, D[M(2485)][M(2499)] === !0 && (Z[M(2499)] = !0), Z;
    D[M(2215)] = !0;
    var X;
    D[M(1243)] && (X = this._opts, this[M(2392)] = this[M(1113)]);
    var _;
    try {
      _ = x[M(983)](this, D[M(2485)], T, D[M(1041)]);
    } catch (Q) {
      throw delete D[M(896)], Q;
    } finally {
      D[M(2215)] = !1, D[M(1243)] && (this[M(2392)] = X);
    }
    return D[M(896)] = _, D[M(2433)] = _[M(2433)], D[M(2803)] = _[M(2803)], D[M(2208)] = _[M(2208)], _;
    function Z() {
      const Q = M;
      var s0 = D[Q(896)], i0 = s0[Q(2832)](this, arguments);
      return Z[Q(862)] = s0[Q(862)], i0;
    }
  }
  function $(D) {
    switch (D[i(2273)]) {
      case "auto":
        return G;
      case "id":
        return H;
      default:
        return V;
    }
  }
  function H(D) {
    const T = i;
    return D.$id && this.logger[T(2175)]("schema $id ignored", D[T(2299)]), D.id;
  }
  function V(D) {
    const T = i;
    return D.id && this.logger[T(2175)](T(2275), D.id), D[T(2299)];
  }
  function G(D) {
    const T = i;
    if (D[T(2299)] && D.id && D.$id != D.id) throw new Error(T(1415));
    return D[T(2299)] || D.id;
  }
  function c0(D, T) {
    const M = i;
    if (D = D || this[M(862)], !D) return M(1255);
    T = T || {};
    for (var X = T[M(1480)] === void 0 ? ", " : T[M(1480)], _ = T[M(2726)] === void 0 ? "data" : T[M(2726)], Z = "", Q = 0; Q < D[M(1492)]; Q++) {
      var s0 = D[Q];
      s0 && (Z += _ + s0[M(1160)] + " " + s0.message + X);
    }
    return Z.slice(0, -X[M(1492)]);
  }
  function d0(D, T) {
    const M = i;
    return typeof T == M(1346) && (T = new RegExp(T)), this[M(2036)][D] = T, this;
  }
  function l0(D) {
    const T = i;
    var M;
    if (D._opts[T(1845)] && (M = Tc, D[T(1468)](M, M[T(2299)], !0)), D[T(2392)][T(1243)] !== !1) {
      var X = mn;
      D[T(2392)][T(1845)] && (X = c(X, h)), D[T(1468)](X, l, !0), D._refs["http://json-schema.org/schema"] = l;
    }
  }
  function o0(D) {
    const T = i;
    var M = D._opts[T(2681)];
    if (M)
      if (Array.isArray(M)) D[T(805)](M);
      else
        for (var X in M) D.addSchema(M[X], X);
  }
  function f0(D) {
    const T = i;
    for (var M in D._opts.formats) {
      var X = D[T(2392)][T(2463)][M];
      D[T(2580)](M, X);
    }
  }
  function k0(D) {
    const T = i;
    for (var M in D[T(2392)][T(2585)]) {
      var X = D[T(2392)][T(2585)][M];
      D[T(1882)](M, X);
    }
  }
  function y0(D, T) {
    const M = i;
    if (D[M(2782)][T] || D[M(1251)][T]) throw new Error(M(1602) + T + '" already exists');
  }
  function M0(D) {
    const T = i;
    for (var M = d[T(2867)](D[T(2392)]), X = 0; X < g[T(1492)]; X++) delete M[g[X]];
    return M;
  }
  function F0(D) {
    const T = i;
    var M = D._opts.logger;
    if (M === !1) D[T(1476)] = { log: Y0, warn: Y0, error: Y0 };
    else {
      if (M === void 0 && (M = console), !(typeof M == "object" && M[T(1017)] && M[T(2175)] && M.error)) throw new Error(T(868));
      D[T(1476)] = M;
    }
  }
  function Y0() {
  }
  return At;
}
var Ac = Oc();
const Dc = Us(Ac);
class jc extends L2 {
  constructor(x, t) {
    const s = a;
    var e;
    super(t), this[s(2268)] = x, this[s(2985)] = (e = t == null ? void 0 : t.capabilities) !== null && e !== void 0 ? e : {}, this[s(2916)] = t == null ? void 0 : t[s(1635)], this[s(2608)](en, (r) => this[s(2029)](r)), this.setNotificationHandler(xn, () => {
      const r = s;
      var n;
      return (n = this[r(2894)]) === null || n === void 0 ? void 0 : n.call(this);
    });
  }
  [a(1409)](x) {
    const t = a;
    if (this[t(1402)]) throw new Error("Cannot register capabilities after connecting to transport");
    this[t(2985)] = $2(this[t(2985)], x);
  }
  [a(2375)](x) {
    const t = a;
    var s, e, r;
    switch (x) {
      case "sampling/createMessage":
        if (!(!((s = this[t(2190)]) === null || s === void 0) && s.sampling)) throw new Error(t(2198) + x + ")");
        break;
      case t(1963):
        if (!(!((e = this[t(2190)]) === null || e === void 0) && e.elicitation)) throw new Error(t(1e3) + x + ")");
        break;
      case t(1833):
        if (!(!((r = this[t(2190)]) === null || r === void 0) && r[t(646)])) throw new Error(t(2909) + x + ")");
        break;
    }
  }
  [a(1169)](x) {
    const t = a;
    switch (x) {
      case "notifications/message":
        if (!this[t(2985)][t(2342)]) throw new Error("Server does not support logging (required for " + x + ")");
        break;
      case t(2247):
      case t(812):
        if (!this[t(2985)][t(1206)]) throw new Error(t(2822) + x + ")");
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities[t(2276)]) throw new Error(t(1545) + x + ")");
        break;
      case t(1463):
        if (!this[t(2985)][t(2212)]) throw new Error("Server does not support notifying of prompt list changes (required for " + x + ")");
        break;
    }
  }
  [a(1010)](x) {
    const t = a;
    switch (x) {
      case t(841):
        if (!this[t(2985)][t(2698)]) throw new Error(t(2123) + x + ")");
        break;
      case t(561):
        if (!this[t(2985)][t(2342)]) throw new Error("Server does not support logging (required for " + x + ")");
        break;
      case t(2365):
      case t(940):
        if (!this[t(2985)].prompts) throw new Error(t(1731) + x + ")");
        break;
      case t(1711):
      case t(2396):
      case t(2543):
        if (!this[t(2985)].resources) throw new Error(t(836) + x + ")");
        break;
      case t(2766):
      case t(1849):
        if (!this[t(2985)][t(2276)]) throw new Error(t(2530) + x + ")");
        break;
    }
  }
  async [a(2029)](x) {
    const t = a, s = x[t(833)][t(1907)];
    return this[t(2190)] = x.params[t(2429)], this[t(1228)] = x[t(833)].clientInfo, { protocolVersion: jo[t(2583)](s) ? s : Ws, capabilities: this[t(2659)](), serverInfo: this[t(2268)], ...this._instructions && { instructions: this[t(2916)] } };
  }
  [a(1151)]() {
    return this[a(2190)];
  }
  getClientVersion() {
    return this[a(1228)];
  }
  [a(2659)]() {
    return this[a(2985)];
  }
  async ping() {
    const x = a;
    return this[x(1326)]({ method: x(2201) }, Xt);
  }
  async [a(2418)](x, t) {
    const s = a;
    return this[s(1326)]({ method: s(841), params: x }, dn, t);
  }
  async [a(1553)](x, t) {
    const s = a, e = await this[s(1326)]({ method: s(1963), params: x }, un, t);
    if (e[s(886)] === s(1509) && e[s(2171)]) try {
      const r = new Dc(), n = r[s(1840)](x[s(1641)]);
      if (!n(e[s(2171)])) throw new Oe(ve[s(505)], s(2955) + r[s(2959)](n[s(862)]));
    } catch (r) {
      throw r instanceof Oe ? r : new Oe(ve[s(1237)], "Error validating elicitation response: " + r);
    }
    return e;
  }
  async listRoots(x, t) {
    return this[a(1326)]({ method: "roots/list", params: x }, fn, t);
  }
  async sendLoggingMessage(x) {
    const t = a;
    return this[t(2323)]({ method: t(2452), params: x });
  }
  async sendResourceUpdated(x) {
    const t = a;
    return this.notification({ method: t(2247), params: x });
  }
  async sendResourceListChanged() {
    const x = a;
    return this[x(2323)]({ method: x(812) });
  }
  async [a(2931)]() {
    return this[a(2323)]({ method: "notifications/tools/list_changed" });
  }
  async [a(2161)]() {
    const x = a;
    return this[x(2323)]({ method: x(1463) });
  }
}
class Mc extends Error {
  constructor(x, t) {
    const s = a;
    super("Heartbeat timeout for poster " + x + " after " + t + "ms"), this[s(1719)] = s(2448);
  }
}
const hx = /* @__PURE__ */ new Map();
class Lc {
  constructor(x) {
    const t = a;
    if (this[t(2488)] = [], this.lastPongReceived = Date.now(), hx[t(901)](x[t(1588)])) {
      const s = hx.get(x[t(1588)]);
      s && s[t(717)]();
    }
    this.posterIdentifier = x[t(1588)], this[t(1962)] = x[t(1962)], this[t(1688)] = x.addMessageEventListener, this[t(1390)] = x[t(1390)], this[t(2327)] = x[t(2327)] ?? 5e3, this.heartbeatTimeout = x[t(1997)] ?? 5e3, this[t(2166)] = x.debugDisableHeartbeatResponse ?? !1, hx.set(this.posterIdentifier, this), this[t(567)] = this.listenMessageCallback[t(2654)](this), this[t(2241)] = this.addMessageEventListener(this[t(567)]);
  }
  [a(567)](x) {
    const t = a;
    if (x[t(1588)] === this[t(1588)]) {
      if (x[t(737)] === t(845)) {
        x[t(2417)] === t(2201) && !this.debugDisableHeartbeatResponse ? this[t(1962)]({ channel: t(845), posterIdentifier: this[t(1588)], type: t(1268), timestamp: x[t(1979)] }) : x[t(2417)] === t(1268) && (this[t(1965)] = Date[t(2064)](), this.heartbeatTimeoutTimer && (clearTimeout(this[t(1814)]), this[t(1814)] = void 0));
        return;
      }
      x.channel === t(578) && (this[t(1883)] && t(2545) in x ? this[t(1883)](x[t(2545)]) : t(2545) in x && this[t(2488)].push(x[t(2545)]));
    }
  }
  async [a(1650)]() {
    const x = a;
    for (; this.messageQueue[x(1492)] > 0; ) {
      const t = this[x(2488)][x(2388)]();
      t && this[x(1883)] && this.onmessage(t);
    }
    this[x(629)]();
  }
  [a(629)]() {
    const x = a;
    this[x(1700)] = setInterval(() => {
      const t = x, s = Date[t(2064)]();
      this[t(1962)]({ channel: t(845), posterIdentifier: this[t(1588)], type: "ping", timestamp: s }), this[t(1814)] = setTimeout(() => {
        const e = t, r = new Mc(this[e(1588)], this[e(1997)]);
        this[e(2665)] && this[e(2665)](r);
      }, this.heartbeatTimeout);
    }, this[x(2327)]);
  }
  async [a(1140)](x, t) {
    const s = a;
    this[s(1962)]({ channel: s(578), posterIdentifier: this[s(1588)], payload: x });
  }
  async [a(717)]() {
    const x = a;
    this[x(1700)] && (clearInterval(this[x(1700)]), this.heartbeatTimer = void 0), this[x(1814)] && (clearTimeout(this[x(1814)]), this.heartbeatTimeoutTimer = void 0), hx[x(1186)](this[x(1588)]), this[x(1390)](this[x(2241)]);
  }
}
const $c = nx.extend(a(2196));
async function gn() {
  const i = a;
  if (!window[i(2774)]) return;
  const x = new Lc({ posterIdentifier: i(2702), messagePoster: (e) => {
    window.uxpHost.postMessage(e, "*");
  }, addMessageEventListener: (e) => {
    const r = i, n = (o) => {
      e(o[K(1369)]);
    };
    return window[r(1813)](r(1261), n), n;
  }, removeMessageEventListener: (e) => {
    window[i(2170)]("message", e);
  } });
  x[i(2665)] = (e) => {
    $c(i(954), e);
  };
  const t = new jc({ name: i(2702), version: i(1117) }, {}), s = new vi(t);
  return await s[i(2562)](x), window[i(2774)][i(1829)]({ channel: i(1989), meshName: i(2957), action: i(2562), version: i(1859) }, "*"), await R0[i(2562)]("uxp", s);
}
const zc = Object[a(2457)](Object[a(1467)]({ __proto__: null, connectUXP: gn, mcpMesh: R0 }, Symbol.toStringTag, { value: a(1670) }));
Ae.addEventListener(a(681), (i) => {
  const x = a, t = q0[x(2501)] || q0.extensionManager.workflow, s = t[x(1560)];
  if (i[x(1775)].id !== s[x(2317)].id) return;
  const e = R0[x(2390)][x(2113)]().widgetableStructure, r = Jt(q0[x(1638)], s);
  yn(r, e) && R0.store[x(2500)]({ widgetableStructure: r }), R0.store[x(2500)]({ widgetableValues: Nx(q0.graph) });
}), Ae.addEventListener(a(1715), () => {
  const i = a;
  R0[i(2390)][i(2500)]({ widgetableValues: Nx(q0[i(1638)]) });
});
let Kr = 0, Gr = !0, Jr = "";
function bn() {
  const i = a;
  requestAnimationFrame(bn);
  const x = q0[i(2501)] || q0[i(663)][i(1229)], t = x.activeWorkflow, s = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[i(1522)]) || "", r = (t == null ? void 0 : t[i(1561)]) || !0;
  if (s === Kr && e === Jr && r === Gr) return;
  const n = Date.now();
  Kr = s, Jr = e, Gr = r;
  const o = Jt(q0[i(1638)], t), c = Nx(q0[i(1638)]);
  R0[i(2390)].setState({ widgetableStructure: o, widgetableValues: c }), console[i(1017)](i(705) + (Date.now() - n) + "ms"), setTimeout(() => {
    const d = i;
    if (t !== x[d(1560)]) return;
    const u = Jt(q0[d(1638)], t), f = Nx(q0[d(1638)]);
    yn(u, o) && R0[d(2390)].setState({ widgetableStructure: u }), R0.store.setState({ widgetableValues: f });
  }, 800);
}
requestAnimationFrame(bn);
function yn(i, x) {
  const t = a;
  return i.nodeIndexes[t(1492)] !== x.nodeIndexes[t(1492)] || JSON.stringify(i[t(632)]) !== JSON[t(2149)](x[t(632)]) || JSON[t(2149)](i[t(832)]) !== JSON.stringify(x[t(832)]);
}
let Qr = !1;
async function Uc() {
  const i = a;
  if (Qr) return Promise.resolve();
  Ae[i(1484)] && R0[i(2390)][i(2500)]({ comfyUserToken: Ae[i(1484)] }), Qr = !0;
}
nx[a(1333)](a(1423));
async function Hc(i, x, t) {
  const s = a;
  x[s(1813)](s(2892), ({ detail: n }) => {
    const o = s;
    if (!n) return;
    let c = 0, d = 0;
    !isNaN(n.value / n[o(731)]) && (c = Math[o(1020)](n[o(1454)] / n[o(731)] * 100));
    const u = n[o(1915)], f = graph[o(832)][o(1284)]((l) => l.id == u);
    if (f && f[o(1103)]) {
      const l = 100 / graph.nodes[o(1492)];
      d = Math.round(f.order * l) + (c ? c / 100 * l : 0);
    }
    R0[o(2390)][o(2500)]({ progress: c, graphProgress: d });
  }), x.addEventListener(s(2666), (n) => {
    var c;
    const o = s;
    (c = n[o(1775)]) != null && c[o(2609)] && R0[o(2390)][o(2500)]({ queueSize: n[o(1775)][o(2609)][o(803)] });
  }), x[s(1813)](s(1663), ({ detail: n }) => {
    const o = s;
    if (R0[o(2390)][o(2500)]({ executingNodeTitle: "", executingNodeID: "", lastError: n[o(1485)] }), n[o(1506)]) {
      const c = i[o(1638)][o(832)].find((d) => d.id == n[o(1506)]);
      R0[o(2390)].setState({ widgetableErrors: { [n[o(1506)]]: "[" + ((c == null ? void 0 : c[o(2513)]) || n.node_id) + "]" + n[o(1485)] } });
    }
  }), x[s(1813)](s(2554), (n) => {
    const o = s, c = n[o(1775)], d = graph[o(832)][o(1284)]((u) => u.id == c);
    if (d) {
      const u = 100 / graph.nodes[o(1492)];
      R0[o(2390)][o(2500)]({ executingNodeTitle: d[o(2513)], executingNodeID: d.id, graphProgress: Math[o(1020)](d[o(1103)] * u) });
    }
  }), x[s(1813)](s(887), () => {
    R0[s(2390)].setState({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x[s(1813)](s(2662), ({ detail: n }) => {
    const o = s;
    R0[o(2390)].setState({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date[o(2064)]() });
  });
  const e = /* @__PURE__ */ new Map();
  x[s(1813)](s(2771), (n) => {
    const o = s;
    R0[o(2390)][o(2500)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[o(1919)](n.detail[o(559)]) || [])[o(1790)]((d) => ({ url: d, thumbnail: d }));
    Oo(n[o(1775)][o(559)], c), e[o(1186)](n[o(1775)][o(559)]);
  }), x[s(1813)](s(1715), (n) => {
    const o = s, c = e.get(n[o(1775)].prompt_id) || [];
    n.detail[o(1519)] && Array.isArray(n[o(1775)].output[o(1774)]) && n[o(1775)].output[o(1774)][o(1492)] > 0 && c.push(...n[o(1775)][o(1519)][o(1774)][o(861)]((d) => d[o(2417)] == o(1519))[o(1790)]((d) => {
      const u = o;
      return location[u(2658)] + location[u(2076)] + u(2005) + d[u(2417)] + u(2878) + encodeURIComponent(d.filename) + (d.subfolder ? u(680) + encodeURIComponent(d.subfolder) : "");
    })), n.detail[o(1519)] && Array[o(1320)](n[o(1775)][o(1519)][o(1400)]) && n[o(1775)][o(1519)][o(1400)][o(1492)] > 0 && c[o(893)](...n[o(1775)][o(1519)][o(1400)][o(1790)]((d) => {
      const u = o;
      return location[u(2658)] + location[u(2076)] + "sd-ppp-static/sdppp_images/" + encodeURIComponent(d);
    })), e[o(2296)](n.detail[o(559)], c);
  });
  let r = null;
  x.addEventListener(s(2633), (n) => {
    r = setTimeout(() => {
      const o = K;
      R0[o(2390)][o(2500)]({ comfyWSState: o(2633) });
    }, 1e3);
  }), x[s(1813)]("reconnected", (n) => {
    const o = s;
    R0[o(2390)].setState({ comfyWSState: o(1543) }), clearTimeout(r);
  });
}
let Dt = [];
(async function() {
  var x, t, s, e, r, n;
  const i = a;
  if (typeof gradioApp == i(633)) {
    try {
      const o = (t = (x = window[i(968)]) == null ? void 0 : x[i(1461)]) == null ? void 0 : t[i(1461)], c = (e = (s = window.comfyAPI) == null ? void 0 : s.ui) == null ? void 0 : e[i(2401)], d = (n = (r = window[i(968)]) == null ? void 0 : r.api) == null ? void 0 : n[i(2691)];
      if (!o || !d || !c) throw new Error(i(609));
      await Uc(), await gn(), await Hc(o, d, c), import(i(1397))[i(2139)]((u) => {
        u.default(ex, 2);
      });
    } catch (o) {
      Dt[i(893)](o.stack || o[i(1261)] || o);
    }
    await new Promise((o) => setTimeout(o, 2e3)), Dt[i(1492)] && console[i(1978)](Dt[0]);
  }
})();
