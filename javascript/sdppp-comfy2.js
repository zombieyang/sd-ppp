var qs = Object.defineProperty;
var As = (i, x, t) => x in i ? qs(i, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[x] = t;
var m0 = (i, x, t) => As(i, typeof x != "symbol" ? x + "" : x, t);
const a = W;
(function(i, x) {
  const t = W, n = i();
  for (; ; )
    try {
      if (parseInt(t(414)) / 1 * (-parseInt(t(599)) / 2) + -parseInt(t(911)) / 3 + -parseInt(t(2353)) / 4 + parseInt(t(2315)) / 5 * (-parseInt(t(689)) / 6) + parseInt(t(1530)) / 7 * (-parseInt(t(776)) / 8) + -parseInt(t(2081)) / 9 * (-parseInt(t(1901)) / 10) + parseInt(t(2115)) / 11 === x) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(qx, 633577);
const q0 = window[a(1877)][a(595)].app;
window[a(1877)].ui[a(2138)];
const Oe = window.comfyAPI[a(2679)][a(2679)];
var Yr;
class Ts {
  constructor(x) {
    m0(this, Yr);
    const t = a;
    this[t(2093)] = x;
    const n = this.validate();
    if (!n[t(238)]) throw new Error(t(2323) + n[t(836)][t(1825)](", "));
  }
  [(Yr = a(2093), a(1981))]() {
    const x = a, t = [];
    (!this[x(2093)][x(1870)] || Object.keys(this[x(2093)][x(1870)])[x(1028)] === 0) && t[x(2037)]("Graph must have at least one node");
    for (const [e, r] of this[x(2093)][x(645)])
      !this[x(2093)].nodes[e] && t[x(2037)](x(2022) + e), !this[x(2093)][x(1870)][r] && t[x(2037)](x(1298) + r);
    const n = this[x(1041)]();
    return !n.valid && t[x(2037)](...n[x(836)]), { valid: t[x(1028)] === 0, errors: t };
  }
  [a(2599)]() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const n of Object.keys(this.definition.nodes))
      t.set(n, []);
    for (const [n, e] of this.definition[x(645)]) {
      const r = t[x(474)](n) || [];
      r.push(e), t[x(2663)](n, r);
    }
    return t;
  }
  [a(1041)]() {
    const x = a, t = [], n = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), r = this[x(2599)](), s = (o, c) => {
      const u = x;
      if (e.has(o)) {
        const f = c[u(2775)](o), l = c[u(2460)](f).concat(o);
        return t[u(2037)](u(2769) + l.join(u(721))), !0;
      }
      if (n[u(341)](o)) return !1;
      n.add(o), e.add(o);
      const d = r.get(o) || [];
      for (const f of d)
        if (s(f, [...c, o])) return !0;
      return e[u(243)](o), !1;
    };
    for (const o of Object[x(2459)](this.definition[x(1870)]))
      !n.has(o) && s(o, []);
    return { valid: t[x(1028)] === 0, errors: t };
  }
  buildAdjacencyList() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const n of Object.keys(this.definition[x(1870)]))
      t[x(2663)](n, []);
    for (const [n, e] of this[x(2093)][x(645)]) {
      const r = t[x(474)](n) || [];
      r[x(2037)](e), t[x(2663)](n, r);
      const s = t[x(474)](e) || [];
      s[x(2037)](n), t[x(2663)](e, s);
    }
    return t;
  }
  [a(2474)](x) {
    const t = a;
    return this.buildAdjacencyList()[t(474)](x) || [];
  }
  [a(1540)](x) {
    const t = a;
    return this[t(2093)][t(1870)][x];
  }
  [a(1504)]() {
    const x = a;
    return Object[x(2459)](this[x(2093)][x(1870)]);
  }
  [a(2807)](x, t) {
    return this[a(2093)].edges.some(([e, r]) => e === x && r === t || e === t && r === x);
  }
  [a(1985)](x, t) {
    const n = a;
    if (x === t) return [x];
    const e = this[n(912)](), r = [{ nodeId: x, path: [x] }], s = /* @__PURE__ */ new Set();
    for (; r[n(1028)] > 0; ) {
      const { nodeId: o, path: c } = r[n(966)]();
      if (s[n(341)](o)) continue;
      if (s[n(1323)](o), o === t) return c;
      const u = e[n(474)](o) || [];
      for (const d of u)
        !s[n(341)](d) && r[n(2037)]({ nodeId: d, path: [...c, d] });
    }
    return null;
  }
  [a(2094)](x, t) {
    return this[a(1985)](x, t) !== null;
  }
  [a(796)]() {
    return { ...this[a(2093)] };
  }
}
const Pa = (i) => {
  let x;
  const t = /* @__PURE__ */ new Set(), n = (u, d) => {
    const f = W, l = typeof u == "function" ? u(x) : u;
    if (!Object.is(l, x)) {
      const g = x;
      x = d ?? (typeof l !== f(513) || l === null) ? l : Object[f(2596)]({}, x, l), t[f(442)]((h) => h(x, g));
    }
  }, e = () => x, r = () => c, s = (u) => {
    const d = W;
    return t[d(1323)](u), () => t[d(243)](u);
  }, o = { setState: n, getState: e, getInitialState: r, subscribe: s }, c = x = i(n, e, o);
  return o;
}, Os = (i) => i ? Pa(i) : Pa;
var F0;
(function(i) {
  const x = a;
  i[x(348)] = (r) => {
  };
  function t(r) {
  }
  i.assertIs = t;
  function n(r) {
    throw new Error();
  }
  i[x(2352)] = n, i[x(577)] = (r) => {
    const s = {};
    for (const o of r)
      s[o] = o;
    return s;
  }, i.getValidEnumValues = (r) => {
    const s = x, o = i[s(712)](r)[s(1001)]((u) => typeof r[r[u]] !== s(536)), c = {};
    for (const u of o)
      c[u] = r[u];
    return i.objectValues(c);
  }, i.objectValues = (r) => {
    const s = x;
    return i[s(712)](r)[s(2348)](function(o) {
      return r[o];
    });
  }, i[x(712)] = typeof Object.keys == "function" ? (r) => Object.keys(r) : (r) => {
    const s = x, o = [];
    for (const c in r)
      Object[s(983)].hasOwnProperty[s(1138)](r, c) && o[s(2037)](c);
    return o;
  }, i[x(647)] = (r, s) => {
    for (const o of r)
      if (s(o)) return o;
  }, i[x(2297)] = typeof Number[x(2297)] === x(2189) ? (r) => Number[x(2297)](r) : (r) => typeof r === x(536) && Number[x(1571)](r) && Math[x(2521)](r) === r;
  function e(r, s = x(2516)) {
    const o = x;
    return r[o(2348)]((c) => typeof c === o(654) ? "'" + c + "'" : c)[o(1825)](s);
  }
  i[x(2815)] = e, i[x(1417)] = (r, s) => {
    const o = x;
    return typeof s === o(941) ? s[o(1707)]() : s;
  };
})(F0 || (F0 = {}));
var Ia;
(function(i) {
  const x = a;
  i[x(403)] = (t, n) => ({ ...t, ...n });
})(Ia || (Ia = {}));
const t0 = F0[a(577)]([a(654), "nan", a(536), a(999), a(534), a(781), a(268), "bigint", "symbol", "function", a(1210), a(2672), "array", a(513), a(1786), a(1411), a(1729), "never", a(2348), "set"]), Ie = (i) => {
  const x = a;
  switch (typeof i) {
    case x(1210):
      return t0[x(1210)];
    case x(654):
      return t0.string;
    case "number":
      return Number[x(1442)](i) ? t0[x(484)] : t0[x(536)];
    case x(781):
      return t0[x(781)];
    case x(2189):
      return t0[x(2189)];
    case x(941):
      return t0.bigint;
    case x(2745):
      return t0[x(2745)];
    case x(513):
      return Array.isArray(i) ? t0[x(743)] : i === null ? t0[x(2672)] : i[x(1463)] && typeof i.then === x(2189) && i[x(950)] && typeof i[x(950)] === x(2189) ? t0[x(1411)] : typeof Map !== x(1210) && i instanceof Map ? t0[x(2348)] : typeof Set !== x(1210) && i instanceof Set ? t0[x(2663)] : typeof Date !== x(1210) && i instanceof Date ? t0[x(268)] : t0[x(513)];
    default:
      return t0[x(1786)];
  }
}, B = F0[a(577)]([a(2757), a(794), a(1446), a(952), a(1074), a(2506), a(2391), "invalid_arguments", "invalid_return_type", a(421), a(970), a(847), a(1389), a(1577), "not_multiple_of", a(1935)]);
class ke extends Error {
  get [a(836)]() {
    return this[a(2714)];
  }
  constructor(x) {
    const t = a;
    super(), this[t(2714)] = [], this[t(663)] = (e) => {
      const r = t;
      this[r(2714)] = [...this[r(2714)], e];
    }, this[t(2046)] = (e = []) => {
      const r = t;
      this[r(2714)] = [...this.issues, ...e];
    };
    const n = new.target.prototype;
    Object[t(2287)] ? Object[t(2287)](this, n) : this[t(1855)] = n, this[t(2409)] = t(1395), this[t(2714)] = x;
  }
  [a(1477)](x) {
    const t = x || function(r) {
      return r[W(705)];
    }, n = { _errors: [] }, e = (r) => {
      const s = W;
      for (const o of r[s(2714)])
        if (o[s(1744)] === s(952)) o[s(1871)][s(2348)](e);
        else if (o.code === "invalid_return_type") e(o.returnTypeError);
        else if (o[s(1744)] === s(1075)) e(o[s(1354)]);
        else if (o[s(1055)].length === 0) n._errors[s(2037)](t(o));
        else {
          let c = n, u = 0;
          for (; u < o.path[s(1028)]; ) {
            const d = o[s(1055)][u];
            u === o[s(1055)].length - 1 ? (c[d] = c[d] || { _errors: [] }, c[d][s(1515)][s(2037)](t(o))) : c[d] = c[d] || { _errors: [] }, c = c[d], u++;
          }
        }
    };
    return e(this), n;
  }
  static assert(x) {
    const t = a;
    if (!(x instanceof ke)) throw new Error(t(786) + x);
  }
  [a(1707)]() {
    return this.message;
  }
  get message() {
    const x = a;
    return JSON[x(956)](this[x(2714)], F0[x(1417)], 2);
  }
  get [a(1612)]() {
    return this[a(2714)].length === 0;
  }
  flatten(x = (t) => t[a(705)]) {
    const t = a, n = {}, e = [];
    for (const r of this[t(2714)])
      if (r[t(1055)].length > 0) {
        const s = r[t(1055)][0];
        n[s] = n[s] || [], n[s].push(x(r));
      } else e[t(2037)](x(r));
    return { formErrors: e, fieldErrors: n };
  }
  get [a(1113)]() {
    return this[a(2630)]();
  }
}
ke.create = (i) => new ke(i);
const Mt = (i, x) => {
  const t = a;
  let n;
  switch (i[t(1744)]) {
    case B[t(2757)]:
      i[t(2331)] === t0.undefined ? n = "Required" : n = t(860) + i[t(1231)] + t(1895) + i.received;
      break;
    case B[t(794)]:
      n = t(2027) + JSON[t(956)](i[t(1231)], F0[t(1417)]);
      break;
    case B[t(2391)]:
      n = t(2681) + F0[t(2815)](i.keys, ", ");
      break;
    case B.invalid_union:
      n = "Invalid input";
      break;
    case B.invalid_union_discriminator:
      n = "Invalid discriminator value. Expected " + F0[t(2815)](i.options);
      break;
    case B[t(2506)]:
      n = t(2543) + F0[t(2815)](i[t(2393)]) + t(1061) + i[t(2331)] + "'";
      break;
    case B[t(1075)]:
      n = t(1968);
      break;
    case B.invalid_return_type:
      n = t(402);
      break;
    case B[t(421)]:
      n = "Invalid date";
      break;
    case B.invalid_string:
      typeof i[t(396)] === t(513) ? t(2147) in i.validation ? (n = t(699) + i[t(396)][t(2147)] + '"', typeof i.validation[t(292)] == "number" && (n = n + t(1439) + i.validation.position)) : t(2354) in i[t(396)] ? n = t(2294) + i[t(396)][t(2354)] + '"' : t(765) in i[t(396)] ? n = 'Invalid input: must end with "' + i[t(396)][t(765)] + '"' : F0[t(2352)](i[t(396)]) : i[t(396)] !== t(1759) ? n = t(2798) + i.validation : n = t(1625);
      break;
    case B[t(847)]:
      i[t(2299)] === "array" ? n = "Array must contain " + (i[t(411)] ? t(1959) : i[t(2527)] ? t(2653) : "more than") + " " + i[t(319)] + t(1505) : i[t(2299)] === t(654) ? n = "String must contain " + (i[t(411)] ? t(1959) : i[t(2527)] ? t(2653) : t(613)) + " " + i.minimum + t(336) : i[t(2299)] === t(536) ? n = "Number must be " + (i.exact ? "exactly equal to " : i[t(2527)] ? t(2547) : "greater than ") + i[t(319)] : i[t(2299)] === t(941) ? n = t(1567) + (i[t(411)] ? t(1129) : i[t(2527)] ? "greater than or equal to " : t(1251)) + i[t(319)] : i.type === t(268) ? n = t(1916) + (i.exact ? t(1129) : i.inclusive ? t(2547) : t(1251)) + new Date(Number(i[t(319)])) : n = t(1970);
      break;
    case B[t(1389)]:
      i[t(2299)] === t(743) ? n = t(2041) + (i[t(411)] ? t(1959) : i[t(2527)] ? t(1051) : t(2206)) + " " + i.maximum + t(1505) : i[t(2299)] === t(654) ? n = t(1556) + (i[t(411)] ? t(1959) : i[t(2527)] ? t(1051) : t(1225)) + " " + i[t(1984)] + t(336) : i[t(2299)] === t(536) ? n = t(1567) + (i[t(411)] ? t(1959) : i[t(2527)] ? t(1110) : t(2206)) + " " + i[t(1984)] : i[t(2299)] === t(941) ? n = t(2329) + (i[t(411)] ? "exactly" : i[t(2527)] ? t(1110) : t(2206)) + " " + i[t(1984)] : i.type === t(268) ? n = t(1916) + (i[t(411)] ? "exactly" : i[t(2527)] ? "smaller than or equal to" : t(642)) + " " + new Date(Number(i[t(1984)])) : n = t(1970);
      break;
    case B[t(1446)]:
      n = t(1970);
      break;
    case B[t(1577)]:
      n = t(349);
      break;
    case B[t(2045)]:
      n = "Number must be a multiple of " + i[t(1557)];
      break;
    case B[t(1935)]:
      n = t(586);
      break;
    default:
      n = x[t(406)], F0[t(2352)](i);
  }
  return { message: n };
};
let Ds = Mt;
function js() {
  return Ds;
}
const Ls = (i) => {
  const x = a, { data: t, path: n, errorMaps: e, issueData: r } = i, s = [...n, ...r[x(1055)] || []], o = { ...r, path: s };
  if (r[x(705)] !== void 0) return { ...r, path: s, message: r.message };
  let c = "";
  const u = e[x(1001)]((d) => !!d)[x(2460)]()[x(1056)]();
  for (const d of u)
    c = d(o, { data: t, defaultError: c }).message;
  return { ...r, path: s, message: c };
};
function Q(i, x) {
  const t = a, n = js(), e = Ls({ issueData: x, data: i[t(2584)], path: i[t(1055)], errorMaps: [i.common[t(1606)], i[t(1431)], n, n === Mt ? void 0 : Mt][t(1001)]((r) => !!r) });
  i[t(2805)][t(2714)][t(2037)](e);
}
class ee {
  constructor() {
    const x = a;
    this[x(1135)] = x(238);
  }
  [a(1787)]() {
    const x = a;
    this[x(1135)] === x(238) && (this[x(1135)] = x(1787));
  }
  [a(1607)]() {
    const x = a;
    this.value !== x(1452) && (this[x(1135)] = x(1452));
  }
  static [a(393)](x, t) {
    const n = a, e = [];
    for (const r of t) {
      if (r[n(1444)] === n(1452)) return h0;
      r[n(1444)] === n(1787) && x[n(1787)](), e[n(2037)](r[n(1135)]);
    }
    return { status: x.value, value: e };
  }
  static async [a(1033)](x, t) {
    const n = a, e = [];
    for (const r of t) {
      const s = await r[n(507)], o = await r[n(1135)];
      e[n(2037)]({ key: s, value: o });
    }
    return ee[n(877)](x, e);
  }
  static [a(877)](x, t) {
    const n = a, e = {};
    for (const r of t) {
      const { key: s, value: o } = r;
      if (s[n(1444)] === n(1452) || o[n(1444)] === "aborted") return h0;
      s[n(1444)] === "dirty" && x.dirty(), o[n(1444)] === n(1787) && x.dirty(), s[n(1135)] !== n(1855) && (typeof o[n(1135)] < "u" || r.alwaysSet) && (e[s[n(1135)]] = o.value);
    }
    return { status: x[n(1135)], value: e };
  }
}
const h0 = Object.freeze({ status: "aborted" }), Je = (i) => ({ status: a(1787), value: i }), ae = (i) => ({ status: a(238), value: i }), Ea = (i) => i[a(1444)] === a(1452), Ra = (i) => i[a(1444)] === "dirty", Ve = (i) => i.status === a(238), gx = (i) => typeof Promise !== a(1210) && i instanceof Promise;
var r0;
(function(i) {
  const x = a;
  i.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, i[x(1707)] = (t) => typeof t == "string" ? t : t == null ? void 0 : t[x(705)];
})(r0 || (r0 = {}));
class pe {
  constructor(x, t, n, e) {
    const r = a;
    this[r(1079)] = [], this[r(306)] = x, this.data = t, this._path = n, this[r(1163)] = e;
  }
  get [a(1055)]() {
    const x = a;
    return !this[x(1079)][x(1028)] && (Array.isArray(this[x(1163)]) ? this._cachedPath[x(2037)](...this[x(2172)], ...this[x(1163)]) : this._cachedPath.push(...this[x(2172)], this[x(1163)])), this._cachedPath;
  }
}
const Ca = (i, x) => {
  const t = a;
  if (Ve(x)) return { success: !0, data: x[t(1135)] };
  if (!i.common[t(2714)][t(1028)]) throw new Error(t(901));
  return { success: !1, get error() {
    const n = t;
    if (this._error) return this[n(1997)];
    const e = new ke(i[n(2805)][n(2714)]);
    return this._error = e, this[n(1997)];
  } };
};
function w0(i) {
  const x = a;
  if (!i) return {};
  const { errorMap: t, invalid_type_error: n, required_error: e, description: r } = i;
  if (t && (n || e)) throw new Error(x(2768));
  return t ? { errorMap: t, description: r } : { errorMap: (o, c) => {
    const u = x, { message: d } = i;
    return o.code === u(2506) ? { message: d ?? c.defaultError } : typeof c[u(2584)] === u(1210) ? { message: d ?? e ?? c[u(406)] } : o[u(1744)] !== u(2757) ? { message: c[u(406)] } : { message: d ?? n ?? c[u(406)] };
  }, description: r };
}
class R0 {
  get description() {
    const x = a;
    return this[x(1802)][x(1647)];
  }
  [a(1197)](x) {
    return Ie(x[a(2584)]);
  }
  _getOrReturnCtx(x, t) {
    const n = a;
    return t || { common: x.parent[n(2805)], data: x[n(2584)], parsedType: Ie(x[n(2584)]), schemaErrorMap: this._def[n(1862)], path: x[n(1055)], parent: x[n(306)] };
  }
  [a(691)](x) {
    const t = a;
    return { status: new ee(), ctx: { common: x[t(306)][t(2805)], data: x[t(2584)], parsedType: Ie(x[t(2584)]), schemaErrorMap: this[t(1802)][t(1862)], path: x[t(1055)], parent: x[t(306)] } };
  }
  [a(2375)](x) {
    const t = this._parse(x);
    if (gx(t)) throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  [a(529)](x) {
    const t = a, n = this[t(2296)](x);
    return Promise[t(2272)](n);
  }
  [a(861)](x, t) {
    const n = a, e = this[n(270)](x, t);
    if (e[n(1868)]) return e[n(2584)];
    throw e.error;
  }
  [a(270)](x, t) {
    const n = a, e = { common: { issues: [], async: (t == null ? void 0 : t.async) ?? !1, contextualErrorMap: t == null ? void 0 : t.errorMap }, path: (t == null ? void 0 : t[n(1055)]) || [], schemaErrorMap: this._def[n(1862)], parent: null, data: x, parsedType: Ie(x) }, r = this._parseSync({ data: x, path: e[n(1055)], parent: e });
    return Ca(e, r);
  }
  [a(2307)](x) {
    var e, r;
    const t = a, n = { common: { issues: [], async: !!this[t(1741)][t(682)] }, path: [], schemaErrorMap: this[t(1802)][t(1862)], parent: null, data: x, parsedType: Ie(x) };
    if (!this[t(1741)][t(682)]) try {
      const s = this[t(2375)]({ data: x, path: [], parent: n });
      return Ve(s) ? { value: s[t(1135)] } : { issues: n[t(2805)][t(2714)] };
    } catch (s) {
      (r = (e = s == null ? void 0 : s[t(705)]) == null ? void 0 : e[t(1268)]()) != null && r[t(2147)]("encountered") && (this[t(1741)][t(682)] = !0), n.common = { issues: [], async: !0 };
    }
    return this[t(529)]({ data: x, path: [], parent: n })[t(1463)]((s) => Ve(s) ? { value: s[t(1135)] } : { issues: n[t(2805)][t(2714)] });
  }
  async [a(578)](x, t) {
    const n = a, e = await this.safeParseAsync(x, t);
    if (e[n(1868)]) return e[n(2584)];
    throw e.error;
  }
  async [a(980)](x, t) {
    const n = a, e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[n(1862)], async: !0 }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this[n(1802)][n(1862)], parent: null, data: x, parsedType: Ie(x) }, r = this[n(2296)]({ data: x, path: e[n(1055)], parent: e }), s = await (gx(r) ? r : Promise[n(2272)](r));
    return Ca(e, s);
  }
  [a(1956)](x, t) {
    const n = a, e = (r) => {
      const s = W;
      return typeof t === s(654) || typeof t === s(1210) ? { message: t } : typeof t === s(2189) ? t(r) : t;
    };
    return this[n(1283)]((r, s) => {
      const o = n, c = x(r), u = () => s[o(663)]({ code: B[o(1446)], ...e(r) });
      return typeof Promise !== o(1210) && c instanceof Promise ? c[o(1463)]((d) => d ? !0 : (u(), !1)) : c ? !0 : (u(), !1);
    });
  }
  [a(1076)](x, t) {
    const n = a;
    return this[n(1283)]((e, r) => {
      const s = n;
      return x(e) ? !0 : (r[s(663)](typeof t === s(2189) ? t(e, r) : t), !1);
    });
  }
  [a(1283)](x) {
    const t = a;
    return new Ae({ schema: this, typeName: p0.ZodEffects, effect: { type: t(1076), refinement: x } });
  }
  [a(1119)](x) {
    return this[a(1283)](x);
  }
  constructor(x) {
    const t = a;
    this[t(2389)] = this.safeParseAsync, this[t(1802)] = x, this[t(861)] = this[t(861)][t(885)](this), this[t(270)] = this[t(270)][t(885)](this), this[t(578)] = this[t(578)][t(885)](this), this.safeParseAsync = this[t(980)].bind(this), this[t(2389)] = this[t(2389)][t(885)](this), this[t(1956)] = this[t(1956)][t(885)](this), this.refinement = this[t(1076)][t(885)](this), this.superRefine = this[t(1119)][t(885)](this), this[t(612)] = this[t(612)][t(885)](this), this[t(1300)] = this[t(1300)][t(885)](this), this[t(1455)] = this.nullish[t(885)](this), this[t(743)] = this[t(743)].bind(this), this.promise = this[t(1411)].bind(this), this.or = this.or[t(885)](this), this[t(1579)] = this.and[t(885)](this), this.transform = this.transform.bind(this), this[t(1857)] = this.brand[t(885)](this), this[t(574)] = this.default.bind(this), this[t(950)] = this[t(950)].bind(this), this[t(2464)] = this[t(2464)][t(885)](this), this[t(353)] = this[t(353)][t(885)](this), this[t(644)] = this.readonly[t(885)](this), this[t(2097)] = this[t(2097)][t(885)](this), this.isOptional = this[t(2026)].bind(this), this[t(1741)] = { version: 1, vendor: "zod", validate: (n) => this[t(2307)](n) };
  }
  [a(612)]() {
    const x = a;
    return Se.create(this, this[x(1802)]);
  }
  nullable() {
    const x = a;
    return Le[x(1644)](this, this[x(1802)]);
  }
  [a(1455)]() {
    const x = a;
    return this[x(1300)]()[x(612)]();
  }
  [a(743)]() {
    return he[a(1644)](this);
  }
  promise() {
    const x = a;
    return kx.create(this, this[x(1802)]);
  }
  or(x) {
    const t = a;
    return vx[t(1644)]([this, x], this[t(1802)]);
  }
  and(x) {
    const t = a;
    return bx.create(this, x, this[t(1802)]);
  }
  [a(1361)](x) {
    const t = a;
    return new Ae({ ...w0(this[t(1802)]), schema: this, typeName: p0.ZodEffects, effect: { type: t(1361), transform: x } });
  }
  [a(574)](x) {
    const t = a, n = typeof x == "function" ? x : () => x;
    return new Px({ ...w0(this[t(1802)]), innerType: this, defaultValue: n, typeName: p0[t(2326)] });
  }
  [a(1857)]() {
    return new Ln({ typeName: p0.ZodBranded, type: this, ...w0(this._def) });
  }
  [a(950)](x) {
    const t = a, n = typeof x === t(2189) ? x : () => x;
    return new Ix({ ...w0(this[t(1802)]), innerType: this, catchValue: n, typeName: p0[t(2318)] });
  }
  [a(2464)](x) {
    const t = a, n = this[t(1114)];
    return new n({ ...this[t(1802)], description: x });
  }
  [a(353)](x) {
    return aa[a(1644)](this, x);
  }
  [a(644)]() {
    return Ex[a(1644)](this);
  }
  [a(2026)]() {
    const x = a;
    return this[x(270)](void 0)[x(1868)];
  }
  isNullable() {
    const x = a;
    return this[x(270)](null)[x(1868)];
  }
}
const Ms = /^c[^\s-]{8,}$/i, $s = /^[0-9a-z]+$/, zs = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Hs = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Us = /^[a-z0-9_-]{21}$/i, Vs = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Zs = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, _s = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Bs = a(2668);
let $x;
const Ws = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ks = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Gs = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Js = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Qs = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Xs = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, On = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Ys = new RegExp("^" + On + "$");
function Dn(i) {
  const x = a;
  let t = "[0-5]\\d";
  i.precision ? t = t + x(1489) + i[x(1668)] + "}" : i[x(1668)] == null && (t = t + "(\\.\\d+)?");
  const n = i[x(1668)] ? "+" : "?";
  return "([01]\\d|2[0-3]):[0-5]\\d(:" + t + ")" + n;
}
function ei(i) {
  return new RegExp("^" + Dn(i) + "$");
}
function xi(i) {
  const x = a;
  let t = On + "T" + Dn(i);
  const n = [];
  return n[x(2037)](i.local ? "Z?" : "Z"), i[x(1962)] && n.push(x(851)), t = t + "(" + n.join("|") + ")", new RegExp("^" + t + "$");
}
function ti(i, x) {
  const t = a;
  return !!((x === "v4" || !x) && Ws.test(i) || (x === "v6" || !x) && Gs[t(551)](i));
}
function ai(i, x) {
  const t = a;
  if (!Vs[t(551)](i)) return !1;
  try {
    const [n] = i[t(2742)](".");
    if (!n) return !1;
    const e = n[t(2735)](/-/g, "+")[t(2735)](/_/g, "/")[t(665)](n[t(1028)] + (4 - n[t(1028)] % 4) % 4, "="), r = JSON[t(861)](atob(e));
    return !(typeof r !== t(513) || r === null || t(2451) in r && (r == null ? void 0 : r.typ) !== t(1873) || !r.alg || x && r[t(2817)] !== x);
  } catch {
    return !1;
  }
}
function ri(i, x) {
  const t = a;
  return !!((x === "v4" || !x) && Ks[t(551)](i) || (x === "v6" || !x) && Js[t(551)](i));
}
class we extends R0 {
  [a(2296)](x) {
    const t = a;
    if (this[t(1802)][t(2101)] && (x[t(2584)] = String(x[t(2584)])), this._getType(x) !== t0.string) {
      const s = this[t(2682)](x);
      return Q(s, { code: B[t(2757)], expected: t0[t(654)], received: s[t(1763)] }), h0;
    }
    const e = new ee();
    let r;
    for (const s of this._def[t(788)])
      if (s[t(1836)] === t(1482)) x[t(2584)][t(1028)] < s.value && (r = this[t(2682)](x, r), Q(r, { code: B.too_small, minimum: s[t(1135)], type: t(654), inclusive: !0, exact: !1, message: s[t(705)] }), e.dirty());
      else if (s[t(1836)] === t(1828)) x[t(2584)][t(1028)] > s[t(1135)] && (r = this[t(2682)](x, r), Q(r, { code: B[t(1389)], maximum: s[t(1135)], type: t(654), inclusive: !0, exact: !1, message: s[t(705)] }), e.dirty());
      else if (s.kind === t(1028)) {
        const o = x[t(2584)][t(1028)] > s[t(1135)], c = x.data[t(1028)] < s.value;
        (o || c) && (r = this[t(2682)](x, r), o ? Q(r, { code: B[t(1389)], maximum: s.value, type: "string", inclusive: !0, exact: !0, message: s.message }) : c && Q(r, { code: B[t(847)], minimum: s[t(1135)], type: t(654), inclusive: !0, exact: !0, message: s[t(705)] }), e[t(1787)]());
      } else if (s[t(1836)] === t(425)) !_s.test(x.data) && (r = this[t(2682)](x, r), Q(r, { validation: "email", code: B[t(970)], message: s[t(705)] }), e[t(1787)]());
      else if (s[t(1836)] === "emoji") !$x && ($x = new RegExp(Bs, "u")), !$x.test(x.data) && (r = this[t(2682)](x, r), Q(r, { validation: t(450), code: B.invalid_string, message: s[t(705)] }), e[t(1787)]());
      else if (s[t(1836)] === t(2471)) !Hs.test(x[t(2584)]) && (r = this[t(2682)](x, r), Q(r, { validation: t(2471), code: B[t(970)], message: s.message }), e[t(1787)]());
      else if (s[t(1836)] === "nanoid") !Us[t(551)](x.data) && (r = this[t(2682)](x, r), Q(r, { validation: "nanoid", code: B[t(970)], message: s.message }), e[t(1787)]());
      else if (s[t(1836)] === t(538)) !Ms[t(551)](x[t(2584)]) && (r = this._getOrReturnCtx(x, r), Q(r, { validation: t(538), code: B[t(970)], message: s.message }), e[t(1787)]());
      else if (s.kind === "cuid2") !$s[t(551)](x[t(2584)]) && (r = this[t(2682)](x, r), Q(r, { validation: t(483), code: B[t(970)], message: s[t(705)] }), e[t(1787)]());
      else if (s[t(1836)] === t(2573)) !zs[t(551)](x[t(2584)]) && (r = this[t(2682)](x, r), Q(r, { validation: "ulid", code: B[t(970)], message: s[t(705)] }), e.dirty());
      else if (s[t(1836)] === t(1693)) try {
        new URL(x[t(2584)]);
      } catch {
        r = this[t(2682)](x, r), Q(r, { validation: t(1693), code: B[t(970)], message: s[t(705)] }), e[t(1787)]();
      }
      else
        s.kind === t(1759) ? (s[t(1759)][t(1615)] = 0, !s.regex[t(551)](x[t(2584)]) && (r = this[t(2682)](x, r), Q(r, { validation: t(1759), code: B[t(970)], message: s[t(705)] }), e[t(1787)]())) : s[t(1836)] === t(977) ? x[t(2584)] = x[t(2584)][t(977)]() : s[t(1836)] === "includes" ? !x.data[t(2147)](s.value, s[t(292)]) && (r = this[t(2682)](x, r), Q(r, { code: B[t(970)], validation: { includes: s[t(1135)], position: s[t(292)] }, message: s[t(705)] }), e.dirty()) : s.kind === t(1268) ? x[t(2584)] = x.data[t(1268)]() : s[t(1836)] === t(392) ? x[t(2584)] = x[t(2584)][t(392)]() : s[t(1836)] === t(2354) ? !x[t(2584)][t(2354)](s[t(1135)]) && (r = this._getOrReturnCtx(x, r), Q(r, { code: B[t(970)], validation: { startsWith: s[t(1135)] }, message: s[t(705)] }), e.dirty()) : s.kind === t(765) ? !x[t(2584)][t(765)](s.value) && (r = this[t(2682)](x, r), Q(r, { code: B.invalid_string, validation: { endsWith: s.value }, message: s[t(705)] }), e.dirty()) : s[t(1836)] === t(1941) ? !xi(s)[t(551)](x[t(2584)]) && (r = this[t(2682)](x, r), Q(r, { code: B.invalid_string, validation: t(1941), message: s[t(705)] }), e[t(1787)]()) : s[t(1836)] === "date" ? !Ys.test(x.data) && (r = this[t(2682)](x, r), Q(r, { code: B[t(970)], validation: t(268), message: s[t(705)] }), e[t(1787)]()) : s.kind === t(468) ? !ei(s)[t(551)](x[t(2584)]) && (r = this._getOrReturnCtx(x, r), Q(r, { code: B[t(970)], validation: t(468), message: s[t(705)] }), e[t(1787)]()) : s[t(1836)] === t(2790) ? !Zs.test(x[t(2584)]) && (r = this[t(2682)](x, r), Q(r, { validation: t(2790), code: B[t(970)], message: s.message }), e[t(1787)]()) : s[t(1836)] === "ip" ? !ti(x[t(2584)], s.version) && (r = this[t(2682)](x, r), Q(r, { validation: "ip", code: B[t(970)], message: s.message }), e.dirty()) : s[t(1836)] === t(683) ? !ai(x.data, s[t(2817)]) && (r = this._getOrReturnCtx(x, r), Q(r, { validation: t(683), code: B[t(970)], message: s[t(705)] }), e.dirty()) : s[t(1836)] === t(906) ? !ri(x[t(2584)], s[t(379)]) && (r = this._getOrReturnCtx(x, r), Q(r, { validation: "cidr", code: B[t(970)], message: s[t(705)] }), e[t(1787)]()) : s[t(1836)] === t(1595) ? !Qs[t(551)](x[t(2584)]) && (r = this[t(2682)](x, r), Q(r, { validation: "base64", code: B.invalid_string, message: s.message }), e[t(1787)]()) : s[t(1836)] === t(1674) ? !Xs.test(x[t(2584)]) && (r = this[t(2682)](x, r), Q(r, { validation: t(1674), code: B.invalid_string, message: s[t(705)] }), e.dirty()) : F0[t(2352)](s);
    return { status: e[t(1135)], value: x[t(2584)] };
  }
  [a(2047)](x, t, n) {
    const e = a;
    return this[e(1076)]((r) => x[e(551)](r), { validation: t, code: B.invalid_string, ...r0[e(358)](n) });
  }
  _addCheck(x) {
    const t = a;
    return new we({ ...this[t(1802)], checks: [...this[t(1802)][t(788)], x] });
  }
  [a(425)](x) {
    const t = a;
    return this[t(2699)]({ kind: t(425), ...r0[t(358)](x) });
  }
  [a(1693)](x) {
    const t = a;
    return this._addCheck({ kind: t(1693), ...r0[t(358)](x) });
  }
  emoji(x) {
    const t = a;
    return this[t(2699)]({ kind: "emoji", ...r0[t(358)](x) });
  }
  [a(2471)](x) {
    const t = a;
    return this[t(2699)]({ kind: t(2471), ...r0.errToObj(x) });
  }
  [a(2357)](x) {
    const t = a;
    return this[t(2699)]({ kind: "nanoid", ...r0[t(358)](x) });
  }
  [a(538)](x) {
    const t = a;
    return this[t(2699)]({ kind: t(538), ...r0[t(358)](x) });
  }
  [a(483)](x) {
    const t = a;
    return this._addCheck({ kind: t(483), ...r0[t(358)](x) });
  }
  ulid(x) {
    const t = a;
    return this[t(2699)]({ kind: t(2573), ...r0[t(358)](x) });
  }
  base64(x) {
    const t = a;
    return this._addCheck({ kind: t(1595), ...r0.errToObj(x) });
  }
  [a(1674)](x) {
    const t = a;
    return this[t(2699)]({ kind: "base64url", ...r0[t(358)](x) });
  }
  [a(683)](x) {
    const t = a;
    return this[t(2699)]({ kind: t(683), ...r0[t(358)](x) });
  }
  ip(x) {
    const t = a;
    return this[t(2699)]({ kind: "ip", ...r0[t(358)](x) });
  }
  cidr(x) {
    const t = a;
    return this._addCheck({ kind: t(906), ...r0[t(358)](x) });
  }
  [a(1941)](x) {
    const t = a;
    return typeof x === t(654) ? this[t(2699)]({ kind: t(1941), precision: null, offset: !1, local: !1, message: x }) : this._addCheck({ kind: t(1941), precision: typeof (x == null ? void 0 : x[t(1668)]) === t(1210) ? null : x == null ? void 0 : x.precision, offset: (x == null ? void 0 : x[t(1962)]) ?? !1, local: (x == null ? void 0 : x[t(1486)]) ?? !1, ...r0[t(358)](x == null ? void 0 : x[t(705)]) });
  }
  [a(268)](x) {
    const t = a;
    return this[t(2699)]({ kind: t(268), message: x });
  }
  [a(468)](x) {
    const t = a;
    return typeof x === t(654) ? this[t(2699)]({ kind: t(468), precision: null, message: x }) : this._addCheck({ kind: t(468), precision: typeof (x == null ? void 0 : x[t(1668)]) === t(1210) ? null : x == null ? void 0 : x[t(1668)], ...r0[t(358)](x == null ? void 0 : x.message) });
  }
  [a(2790)](x) {
    const t = a;
    return this[t(2699)]({ kind: t(2790), ...r0[t(358)](x) });
  }
  [a(1759)](x, t) {
    const n = a;
    return this[n(2699)]({ kind: n(1759), regex: x, ...r0[n(358)](t) });
  }
  [a(2147)](x, t) {
    const n = a;
    return this[n(2699)]({ kind: "includes", value: x, position: t == null ? void 0 : t[n(292)], ...r0[n(358)](t == null ? void 0 : t[n(705)]) });
  }
  [a(2354)](x, t) {
    const n = a;
    return this._addCheck({ kind: n(2354), value: x, ...r0[n(358)](t) });
  }
  [a(765)](x, t) {
    const n = a;
    return this._addCheck({ kind: n(765), value: x, ...r0.errToObj(t) });
  }
  [a(1482)](x, t) {
    const n = a;
    return this[n(2699)]({ kind: n(1482), value: x, ...r0[n(358)](t) });
  }
  max(x, t) {
    const n = a;
    return this._addCheck({ kind: n(1828), value: x, ...r0.errToObj(t) });
  }
  [a(1028)](x, t) {
    const n = a;
    return this._addCheck({ kind: n(1028), value: x, ...r0[n(358)](t) });
  }
  [a(2494)](x) {
    return this.min(1, r0.errToObj(x));
  }
  [a(977)]() {
    const x = a;
    return new we({ ...this[x(1802)], checks: [...this._def[x(788)], { kind: x(977) }] });
  }
  [a(1268)]() {
    const x = a;
    return new we({ ...this[x(1802)], checks: [...this[x(1802)][x(788)], { kind: x(1268) }] });
  }
  [a(392)]() {
    const x = a;
    return new we({ ...this[x(1802)], checks: [...this[x(1802)].checks, { kind: x(392) }] });
  }
  get [a(882)]() {
    const x = a;
    return !!this[x(1802)][x(788)][x(647)]((t) => t.kind === x(1941));
  }
  get [a(953)]() {
    const x = a;
    return !!this[x(1802)][x(788)].find((t) => t[x(1836)] === x(268));
  }
  get [a(1963)]() {
    const x = a;
    return !!this[x(1802)][x(788)][x(647)]((t) => t[x(1836)] === x(468));
  }
  get isDuration() {
    const x = a;
    return !!this[x(1802)][x(788)][x(647)]((t) => t[x(1836)] === x(2790));
  }
  get [a(1833)]() {
    const x = a;
    return !!this._def[x(788)][x(647)]((t) => t[x(1836)] === "email");
  }
  get [a(2802)]() {
    const x = a;
    return !!this[x(1802)][x(788)].find((t) => t.kind === x(1693));
  }
  get isEmoji() {
    const x = a;
    return !!this._def[x(788)].find((t) => t[x(1836)] === x(450));
  }
  get [a(1242)]() {
    const x = a;
    return !!this[x(1802)].checks[x(647)]((t) => t[x(1836)] === "uuid");
  }
  get isNANOID() {
    const x = a;
    return !!this[x(1802)].checks[x(647)]((t) => t[x(1836)] === x(2357));
  }
  get [a(2054)]() {
    const x = a;
    return !!this[x(1802)][x(788)].find((t) => t[x(1836)] === x(538));
  }
  get [a(1255)]() {
    const x = a;
    return !!this[x(1802)][x(788)][x(647)]((t) => t[x(1836)] === x(483));
  }
  get [a(660)]() {
    const x = a;
    return !!this[x(1802)][x(788)][x(647)]((t) => t[x(1836)] === x(2573));
  }
  get [a(1831)]() {
    const x = a;
    return !!this._def[x(788)][x(647)]((t) => t[x(1836)] === "ip");
  }
  get [a(2694)]() {
    const x = a;
    return !!this[x(1802)][x(788)].find((t) => t[x(1836)] === x(906));
  }
  get [a(1275)]() {
    const x = a;
    return !!this[x(1802)][x(788)][x(647)]((t) => t[x(1836)] === x(1595));
  }
  get [a(2708)]() {
    const x = a;
    return !!this[x(1802)][x(788)][x(647)]((t) => t[x(1836)] === "base64url");
  }
  get minLength() {
    const x = a;
    let t = null;
    for (const n of this[x(1802)][x(788)])
      n[x(1836)] === x(1482) && (t === null || n[x(1135)] > t) && (t = n.value);
    return t;
  }
  get [a(1203)]() {
    const x = a;
    let t = null;
    for (const n of this._def[x(788)])
      n[x(1836)] === x(1828) && (t === null || n[x(1135)] < t) && (t = n[x(1135)]);
    return t;
  }
}
we[a(1644)] = (i) => {
  const x = a;
  return new we({ checks: [], typeName: p0[x(2581)], coerce: (i == null ? void 0 : i[x(2101)]) ?? !1, ...w0(i) });
};
function ni(i, x) {
  const t = a, n = (i.toString()[t(2742)](".")[1] || "")[t(1028)], e = (x.toString()[t(2742)](".")[1] || "")[t(1028)], r = n > e ? n : e, s = Number[t(1894)](i[t(1326)](r)[t(2735)](".", "")), o = Number.parseInt(x.toFixed(r).replace(".", ""));
  return s % o / 10 ** r;
}
class Ze extends R0 {
  constructor() {
    const x = a;
    super(...arguments), this.min = this.gte, this[x(1828)] = this[x(2725)], this[x(1869)] = this[x(1557)];
  }
  [a(2296)](x) {
    const t = a;
    if (this[t(1802)].coerce && (x[t(2584)] = Number(x[t(2584)])), this[t(1197)](x) !== t0[t(536)]) {
      const s = this._getOrReturnCtx(x);
      return Q(s, { code: B.invalid_type, expected: t0.number, received: s.parsedType }), h0;
    }
    let e;
    const r = new ee();
    for (const s of this[t(1802)][t(788)])
      s.kind === t(2648) ? !F0[t(2297)](x.data) && (e = this._getOrReturnCtx(x, e), Q(e, { code: B[t(2757)], expected: t(999), received: "float", message: s[t(705)] }), r.dirty()) : s[t(1836)] === t(1482) ? (s.inclusive ? x.data < s[t(1135)] : x[t(2584)] <= s[t(1135)]) && (e = this[t(2682)](x, e), Q(e, { code: B[t(847)], minimum: s.value, type: t(536), inclusive: s[t(2527)], exact: !1, message: s[t(705)] }), r.dirty()) : s[t(1836)] === t(1828) ? (s[t(2527)] ? x[t(2584)] > s[t(1135)] : x[t(2584)] >= s[t(1135)]) && (e = this[t(2682)](x, e), Q(e, { code: B[t(1389)], maximum: s[t(1135)], type: t(536), inclusive: s.inclusive, exact: !1, message: s[t(705)] }), r[t(1787)]()) : s[t(1836)] === t(1557) ? ni(x[t(2584)], s[t(1135)]) !== 0 && (e = this[t(2682)](x, e), Q(e, { code: B[t(2045)], multipleOf: s[t(1135)], message: s[t(705)] }), r[t(1787)]()) : s[t(1836)] === t(1874) ? !Number[t(1571)](x[t(2584)]) && (e = this[t(2682)](x, e), Q(e, { code: B[t(1935)], message: s.message }), r[t(1787)]()) : F0[t(2352)](s);
    return { status: r[t(1135)], value: x.data };
  }
  gte(x, t) {
    const n = a;
    return this[n(2341)](n(1482), x, !0, r0[n(1707)](t));
  }
  gt(x, t) {
    const n = a;
    return this[n(2341)](n(1482), x, !1, r0[n(1707)](t));
  }
  [a(2725)](x, t) {
    const n = a;
    return this[n(2341)]("max", x, !0, r0[n(1707)](t));
  }
  lt(x, t) {
    const n = a;
    return this.setLimit(n(1828), x, !1, r0[n(1707)](t));
  }
  [a(2341)](x, t, n, e) {
    const r = a;
    return new Ze({ ...this[r(1802)], checks: [...this[r(1802)][r(788)], { kind: x, value: t, inclusive: n, message: r0[r(1707)](e) }] });
  }
  [a(2699)](x) {
    const t = a;
    return new Ze({ ...this[t(1802)], checks: [...this[t(1802)][t(788)], x] });
  }
  [a(2648)](x) {
    const t = a;
    return this[t(2699)]({ kind: t(2648), message: r0[t(1707)](x) });
  }
  [a(1502)](x) {
    const t = a;
    return this[t(2699)]({ kind: t(1482), value: 0, inclusive: !1, message: r0[t(1707)](x) });
  }
  [a(282)](x) {
    const t = a;
    return this[t(2699)]({ kind: t(1828), value: 0, inclusive: !1, message: r0[t(1707)](x) });
  }
  nonpositive(x) {
    const t = a;
    return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: r0[t(1707)](x) });
  }
  [a(2210)](x) {
    const t = a;
    return this._addCheck({ kind: t(1482), value: 0, inclusive: !0, message: r0[t(1707)](x) });
  }
  [a(1557)](x, t) {
    return this._addCheck({ kind: "multipleOf", value: x, message: r0.toString(t) });
  }
  finite(x) {
    const t = a;
    return this[t(2699)]({ kind: t(1874), message: r0[t(1707)](x) });
  }
  [a(1175)](x) {
    const t = a;
    return this[t(2699)]({ kind: t(1482), inclusive: !0, value: Number.MIN_SAFE_INTEGER, message: r0[t(1707)](x) })[t(2699)]({ kind: "max", inclusive: !0, value: Number[t(1737)], message: r0[t(1707)](x) });
  }
  get [a(1536)]() {
    const x = a;
    let t = null;
    for (const n of this[x(1802)][x(788)])
      n[x(1836)] === x(1482) && (t === null || n[x(1135)] > t) && (t = n[x(1135)]);
    return t;
  }
  get [a(2262)]() {
    const x = a;
    let t = null;
    for (const n of this[x(1802)][x(788)])
      n[x(1836)] === x(1828) && (t === null || n[x(1135)] < t) && (t = n[x(1135)]);
    return t;
  }
  get [a(1514)]() {
    const x = a;
    return !!this[x(1802)][x(788)][x(647)]((t) => t.kind === x(2648) || t[x(1836)] === x(1557) && F0[x(2297)](t.value));
  }
  get isFinite() {
    const x = a;
    let t = null, n = null;
    for (const e of this._def[x(788)]) {
      if (e.kind === "finite" || e.kind === x(2648) || e[x(1836)] === x(1557)) return !0;
      e.kind === "min" ? (n === null || e[x(1135)] > n) && (n = e[x(1135)]) : e.kind === x(1828) && (t === null || e.value < t) && (t = e[x(1135)]);
    }
    return Number[x(1571)](n) && Number[x(1571)](t);
  }
}
Ze[a(1644)] = (i) => {
  const x = a;
  return new Ze({ checks: [], typeName: p0.ZodNumber, coerce: (i == null ? void 0 : i[x(2101)]) || !1, ...w0(i) });
};
class xx extends R0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(1482)] = this[x(1965)], this[x(1828)] = this.lte;
  }
  [a(2296)](x) {
    const t = a;
    if (this._def[t(2101)]) try {
      x.data = BigInt(x[t(2584)]);
    } catch {
      return this._getInvalidInput(x);
    }
    if (this[t(1197)](x) !== t0[t(941)]) return this[t(1492)](x);
    let e;
    const r = new ee();
    for (const s of this._def[t(788)])
      s[t(1836)] === "min" ? (s[t(2527)] ? x.data < s[t(1135)] : x[t(2584)] <= s.value) && (e = this[t(2682)](x, e), Q(e, { code: B.too_small, type: t(941), minimum: s.value, inclusive: s[t(2527)], message: s.message }), r[t(1787)]()) : s.kind === t(1828) ? (s.inclusive ? x[t(2584)] > s[t(1135)] : x[t(2584)] >= s[t(1135)]) && (e = this[t(2682)](x, e), Q(e, { code: B[t(1389)], type: "bigint", maximum: s[t(1135)], inclusive: s[t(2527)], message: s[t(705)] }), r[t(1787)]()) : s[t(1836)] === t(1557) ? x.data % s[t(1135)] !== BigInt(0) && (e = this[t(2682)](x, e), Q(e, { code: B[t(2045)], multipleOf: s.value, message: s[t(705)] }), r[t(1787)]()) : F0[t(2352)](s);
    return { status: r[t(1135)], value: x[t(2584)] };
  }
  [a(1492)](x) {
    const t = a, n = this._getOrReturnCtx(x);
    return Q(n, { code: B[t(2757)], expected: t0[t(941)], received: n[t(1763)] }), h0;
  }
  [a(1965)](x, t) {
    return this[a(2341)]("min", x, !0, r0.toString(t));
  }
  gt(x, t) {
    const n = a;
    return this.setLimit(n(1482), x, !1, r0.toString(t));
  }
  [a(2725)](x, t) {
    const n = a;
    return this[n(2341)](n(1828), x, !0, r0[n(1707)](t));
  }
  lt(x, t) {
    const n = a;
    return this[n(2341)](n(1828), x, !1, r0[n(1707)](t));
  }
  setLimit(x, t, n, e) {
    const r = a;
    return new xx({ ...this[r(1802)], checks: [...this._def[r(788)], { kind: x, value: t, inclusive: n, message: r0[r(1707)](e) }] });
  }
  [a(2699)](x) {
    const t = a;
    return new xx({ ...this[t(1802)], checks: [...this[t(1802)][t(788)], x] });
  }
  positive(x) {
    const t = a;
    return this[t(2699)]({ kind: t(1482), value: BigInt(0), inclusive: !1, message: r0[t(1707)](x) });
  }
  [a(282)](x) {
    const t = a;
    return this[t(2699)]({ kind: "max", value: BigInt(0), inclusive: !1, message: r0[t(1707)](x) });
  }
  [a(2811)](x) {
    const t = a;
    return this[t(2699)]({ kind: t(1828), value: BigInt(0), inclusive: !0, message: r0[t(1707)](x) });
  }
  [a(2210)](x) {
    const t = a;
    return this[t(2699)]({ kind: t(1482), value: BigInt(0), inclusive: !0, message: r0[t(1707)](x) });
  }
  multipleOf(x, t) {
    const n = a;
    return this[n(2699)]({ kind: n(1557), value: x, message: r0.toString(t) });
  }
  get [a(1536)]() {
    const x = a;
    let t = null;
    for (const n of this[x(1802)].checks)
      n[x(1836)] === x(1482) && (t === null || n[x(1135)] > t) && (t = n[x(1135)]);
    return t;
  }
  get [a(2262)]() {
    const x = a;
    let t = null;
    for (const n of this._def[x(788)])
      n[x(1836)] === "max" && (t === null || n[x(1135)] < t) && (t = n[x(1135)]);
    return t;
  }
}
xx[a(1644)] = (i) => {
  const x = a;
  return new xx({ checks: [], typeName: p0[x(843)], coerce: (i == null ? void 0 : i[x(2101)]) ?? !1, ...w0(i) });
};
class $t extends R0 {
  _parse(x) {
    const t = a;
    if (this[t(1802)].coerce && (x[t(2584)] = !!x[t(2584)]), this._getType(x) !== t0[t(781)]) {
      const e = this[t(2682)](x);
      return Q(e, { code: B.invalid_type, expected: t0[t(781)], received: e[t(1763)] }), h0;
    }
    return ae(x[t(2584)]);
  }
}
$t[a(1644)] = (i) => {
  const x = a;
  return new $t({ typeName: p0[x(1638)], coerce: (i == null ? void 0 : i[x(2101)]) || !1, ...w0(i) });
};
class yx extends R0 {
  _parse(x) {
    const t = a;
    if (this._def.coerce && (x.data = new Date(x.data)), this[t(1197)](x) !== t0.date) {
      const s = this[t(2682)](x);
      return Q(s, { code: B[t(2757)], expected: t0[t(268)], received: s.parsedType }), h0;
    }
    if (Number[t(1442)](x[t(2584)][t(2486)]())) {
      const s = this[t(2682)](x);
      return Q(s, { code: B[t(421)] }), h0;
    }
    const e = new ee();
    let r;
    for (const s of this[t(1802)][t(788)])
      s[t(1836)] === t(1482) ? x.data[t(2486)]() < s[t(1135)] && (r = this[t(2682)](x, r), Q(r, { code: B[t(847)], message: s[t(705)], inclusive: !0, exact: !1, minimum: s[t(1135)], type: t(268) }), e[t(1787)]()) : s[t(1836)] === t(1828) ? x.data[t(2486)]() > s.value && (r = this[t(2682)](x, r), Q(r, { code: B[t(1389)], message: s[t(705)], inclusive: !0, exact: !1, maximum: s.value, type: t(268) }), e.dirty()) : F0[t(2352)](s);
    return { status: e[t(1135)], value: new Date(x[t(2584)].getTime()) };
  }
  _addCheck(x) {
    const t = a;
    return new yx({ ...this[t(1802)], checks: [...this[t(1802)][t(788)], x] });
  }
  [a(1482)](x, t) {
    const n = a;
    return this[n(2699)]({ kind: n(1482), value: x[n(2486)](), message: r0[n(1707)](t) });
  }
  [a(1828)](x, t) {
    const n = a;
    return this[n(2699)]({ kind: "max", value: x[n(2486)](), message: r0.toString(t) });
  }
  get [a(1122)]() {
    const x = a;
    let t = null;
    for (const n of this[x(1802)][x(788)])
      n[x(1836)] === x(1482) && (t === null || n[x(1135)] > t) && (t = n[x(1135)]);
    return t != null ? new Date(t) : null;
  }
  get [a(670)]() {
    const x = a;
    let t = null;
    for (const n of this[x(1802)][x(788)])
      n[x(1836)] === x(1828) && (t === null || n[x(1135)] < t) && (t = n[x(1135)]);
    return t != null ? new Date(t) : null;
  }
}
yx[a(1644)] = (i) => {
  const x = a;
  return new yx({ checks: [], coerce: (i == null ? void 0 : i.coerce) || !1, typeName: p0[x(2013)], ...w0(i) });
};
class Fa extends R0 {
  [a(2296)](x) {
    const t = a;
    if (this[t(1197)](x) !== t0[t(2745)]) {
      const e = this[t(2682)](x);
      return Q(e, { code: B[t(2757)], expected: t0[t(2745)], received: e[t(1763)] }), h0;
    }
    return ae(x[t(2584)]);
  }
}
Fa[a(1644)] = (i) => {
  const x = a;
  return new Fa({ typeName: p0[x(1790)], ...w0(i) });
};
class zt extends R0 {
  [a(2296)](x) {
    const t = a;
    if (this[t(1197)](x) !== t0[t(1210)]) {
      const e = this[t(2682)](x);
      return Q(e, { code: B.invalid_type, expected: t0[t(1210)], received: e[t(1763)] }), h0;
    }
    return ae(x.data);
  }
}
zt[a(1644)] = (i) => {
  const x = a;
  return new zt({ typeName: p0[x(257)], ...w0(i) });
};
class Ht extends R0 {
  _parse(x) {
    const t = a;
    if (this[t(1197)](x) !== t0.null) {
      const e = this[t(2682)](x);
      return Q(e, { code: B[t(2757)], expected: t0[t(2672)], received: e[t(1763)] }), h0;
    }
    return ae(x[t(2584)]);
  }
}
Ht.create = (i) => new Ht({ typeName: p0.ZodNull, ...w0(i) });
class tx extends R0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(2198)] = !0;
  }
  [a(2296)](x) {
    return ae(x[a(2584)]);
  }
}
tx[a(1644)] = (i) => {
  const x = a;
  return new tx({ typeName: p0[x(1539)], ...w0(i) });
};
class Ut extends R0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(1414)] = !0;
  }
  [a(2296)](x) {
    return ae(x.data);
  }
}
Ut.create = (i) => new Ut({ typeName: p0.ZodUnknown, ...w0(i) });
class Ee extends R0 {
  [a(2296)](x) {
    const t = a, n = this[t(2682)](x);
    return Q(n, { code: B.invalid_type, expected: t0[t(873)], received: n[t(1763)] }), h0;
  }
}
Ee[a(1644)] = (i) => {
  const x = a;
  return new Ee({ typeName: p0[x(1872)], ...w0(i) });
};
class Vt extends R0 {
  [a(2296)](x) {
    const t = a;
    if (this[t(1197)](x) !== t0[t(1210)]) {
      const e = this._getOrReturnCtx(x);
      return Q(e, { code: B[t(2757)], expected: t0.void, received: e[t(1763)] }), h0;
    }
    return ae(x[t(2584)]);
  }
}
Vt[a(1644)] = (i) => new Vt({ typeName: p0.ZodVoid, ...w0(i) });
class he extends R0 {
  [a(2296)](x) {
    const t = a, { ctx: n, status: e } = this[t(691)](x), r = this._def;
    if (n[t(1763)] !== t0.array) return Q(n, { code: B.invalid_type, expected: t0.array, received: n[t(1763)] }), h0;
    if (r[t(1437)] !== null) {
      const o = n.data[t(1028)] > r[t(1437)].value, c = n[t(2584)][t(1028)] < r.exactLength[t(1135)];
      (o || c) && (Q(n, { code: o ? B[t(1389)] : B[t(847)], minimum: c ? r.exactLength.value : void 0, maximum: o ? r[t(1437)][t(1135)] : void 0, type: t(743), inclusive: !0, exact: !0, message: r.exactLength[t(705)] }), e[t(1787)]());
    }
    if (r.minLength !== null && n.data[t(1028)] < r.minLength.value && (Q(n, { code: B[t(847)], minimum: r[t(1272)].value, type: t(743), inclusive: !0, exact: !1, message: r.minLength[t(705)] }), e.dirty()), r[t(1203)] !== null && n[t(2584)][t(1028)] > r.maxLength[t(1135)] && (Q(n, { code: B[t(1389)], maximum: r.maxLength.value, type: t(743), inclusive: !0, exact: !1, message: r.maxLength[t(705)] }), e[t(1787)]()), n.common[t(682)]) return Promise[t(972)]([...n[t(2584)]].map((o, c) => {
      const u = t;
      return r[u(2299)][u(529)](new pe(n, o, n.path, c));
    }))[t(1463)]((o) => ee[t(393)](e, o));
    const s = [...n[t(2584)]][t(2348)]((o, c) => {
      const u = t;
      return r[u(2299)]._parseSync(new pe(n, o, n[u(1055)], c));
    });
    return ee[t(393)](e, s);
  }
  get [a(2452)]() {
    const x = a;
    return this._def[x(2299)];
  }
  min(x, t) {
    const n = a;
    return new he({ ...this[n(1802)], minLength: { value: x, message: r0[n(1707)](t) } });
  }
  [a(1828)](x, t) {
    const n = a;
    return new he({ ...this[n(1802)], maxLength: { value: x, message: r0.toString(t) } });
  }
  [a(1028)](x, t) {
    return new he({ ...this._def, exactLength: { value: x, message: r0.toString(t) } });
  }
  [a(2494)](x) {
    return this[a(1482)](1, x);
  }
}
he[a(1644)] = (i, x) => new he({ type: i, minLength: null, maxLength: null, exactLength: null, typeName: p0.ZodArray, ...w0(x) });
function Ue(i) {
  const x = a;
  if (i instanceof K0) {
    const t = {};
    for (const n in i[x(1559)]) {
      const e = i[x(1559)][n];
      t[n] = Se[x(1644)](Ue(e));
    }
    return new K0({ ...i[x(1802)], shape: () => t });
  } else
    return i instanceof he ? new he({ ...i._def, type: Ue(i.element) }) : i instanceof Se ? Se.create(Ue(i[x(1185)]())) : i instanceof Le ? Le[x(1644)](Ue(i[x(1185)]())) : i instanceof De ? De.create(i[x(2159)][x(2348)]((t) => Ue(t))) : i;
}
class K0 extends R0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(802)] = null, this[x(1906)] = this.passthrough, this.augment = this[x(2761)];
  }
  [a(1928)]() {
    const x = a;
    if (this[x(802)] !== null) return this[x(802)];
    const t = this[x(1802)][x(1559)](), n = F0[x(712)](t);
    return this[x(802)] = { shape: t, keys: n }, this[x(802)];
  }
  [a(2296)](x) {
    const t = a;
    if (this[t(1197)](x) !== t0.object) {
      const d = this._getOrReturnCtx(x);
      return Q(d, { code: B.invalid_type, expected: t0.object, received: d.parsedType }), h0;
    }
    const { status: e, ctx: r } = this._processInputParams(x), { shape: s, keys: o } = this[t(1928)](), c = [];
    if (!(this[t(1802)][t(693)] instanceof Ee && this[t(1802)][t(1098)] === t(1840))) for (const d in r[t(2584)])
      !o.includes(d) && c[t(2037)](d);
    const u = [];
    for (const d of o) {
      const f = s[d], l = r.data[d];
      u.push({ key: { status: t(238), value: d }, value: f[t(2296)](new pe(r, l, r[t(1055)], d)), alwaysSet: d in r[t(2584)] });
    }
    if (this[t(1802)][t(693)] instanceof Ee) {
      const d = this._def[t(1098)];
      if (d === t(259)) for (const f of c)
        u[t(2037)]({ key: { status: "valid", value: f }, value: { status: t(238), value: r[t(2584)][f] } });
      else if (d === "strict") c[t(1028)] > 0 && (Q(r, { code: B[t(2391)], keys: c }), e.dirty());
      else if (d !== t(1840)) throw new Error(t(895));
    } else {
      const d = this[t(1802)][t(693)];
      for (const f of c) {
        const l = r[t(2584)][f];
        u[t(2037)]({ key: { status: t(238), value: f }, value: d[t(2296)](new pe(r, l, r[t(1055)], f)), alwaysSet: f in r[t(2584)] });
      }
    }
    return r[t(2805)][t(682)] ? Promise[t(2272)]()[t(1463)](async () => {
      const d = t, f = [];
      for (const l of u) {
        const g = await l[d(507)], h = await l.value;
        f.push({ key: g, value: h, alwaysSet: l[d(2485)] });
      }
      return f;
    })[t(1463)]((d) => ee[t(877)](e, d)) : ee[t(877)](e, u);
  }
  get [a(1559)]() {
    const x = a;
    return this[x(1802)][x(1559)]();
  }
  [a(521)](x) {
    const t = a;
    return r0[t(358)], new K0({ ...this[t(1802)], unknownKeys: "strict", ...x !== void 0 ? { errorMap: (n, e) => {
      var o, c;
      const r = t, s = ((c = (o = this[r(1802)])[r(1862)]) == null ? void 0 : c.call(o, n, e)[r(705)]) ?? e[r(406)];
      return n[r(1744)] === r(2391) ? { message: r0[r(358)](x)[r(705)] ?? s } : { message: s };
    } } : {} });
  }
  strip() {
    const x = a;
    return new K0({ ...this[x(1802)], unknownKeys: x(1840) });
  }
  [a(259)]() {
    const x = a;
    return new K0({ ...this[x(1802)], unknownKeys: "passthrough" });
  }
  extend(x) {
    const t = a;
    return new K0({ ...this[t(1802)], shape: () => ({ ...this[t(1802)][t(1559)](), ...x }) });
  }
  [a(2234)](x) {
    const t = a;
    return new K0({ unknownKeys: x[t(1802)][t(1098)], catchall: x[t(1802)][t(693)], shape: () => ({ ...this[t(1802)][t(1559)](), ...x[t(1802)].shape() }), typeName: p0[t(1546)] });
  }
  [a(373)](x, t) {
    return this.augment({ [x]: t });
  }
  [a(693)](x) {
    const t = a;
    return new K0({ ...this[t(1802)], catchall: x });
  }
  [a(472)](x) {
    const t = a, n = {};
    for (const e of F0[t(712)](x))
      x[e] && this[t(1559)][e] && (n[e] = this[t(1559)][e]);
    return new K0({ ...this[t(1802)], shape: () => n });
  }
  [a(298)](x) {
    const t = a, n = {};
    for (const e of F0[t(712)](this.shape))
      !x[e] && (n[e] = this[t(1559)][e]);
    return new K0({ ...this[t(1802)], shape: () => n });
  }
  deepPartial() {
    return Ue(this);
  }
  partial(x) {
    const t = a, n = {};
    for (const e of F0.objectKeys(this[t(1559)])) {
      const r = this[t(1559)][e];
      x && !x[e] ? n[e] = r : n[e] = r[t(612)]();
    }
    return new K0({ ...this[t(1802)], shape: () => n });
  }
  required(x) {
    const t = a, n = {};
    for (const e of F0[t(712)](this[t(1559)]))
      if (x && !x[e]) n[e] = this[t(1559)][e];
      else {
        let s = this[t(1559)][e];
        for (; s instanceof Se; )
          s = s._def[t(1684)];
        n[e] = s;
      }
    return new K0({ ...this[t(1802)], shape: () => n });
  }
  [a(1760)]() {
    return jn(F0[a(712)](this.shape));
  }
}
K0[a(1644)] = (i, x) => {
  const t = a;
  return new K0({ shape: () => i, unknownKeys: t(1840), catchall: Ee[t(1644)](), typeName: p0[t(1546)], ...w0(x) });
}, K0.strictCreate = (i, x) => {
  const t = a;
  return new K0({ shape: () => i, unknownKeys: t(521), catchall: Ee[t(1644)](), typeName: p0.ZodObject, ...w0(x) });
}, K0.lazycreate = (i, x) => {
  const t = a;
  return new K0({ shape: i, unknownKeys: t(1840), catchall: Ee[t(1644)](), typeName: p0.ZodObject, ...w0(x) });
};
class vx extends R0 {
  [a(2296)](x) {
    const t = a, { ctx: n } = this[t(691)](x), e = this._def[t(2393)];
    function r(s) {
      const o = t;
      for (const u of s)
        if (u[o(1924)][o(1444)] === o(238)) return u[o(1924)];
      for (const u of s)
        if (u[o(1924)][o(1444)] === o(1787)) return n[o(2805)][o(2714)].push(...u.ctx[o(2805)][o(2714)]), u[o(1924)];
      const c = s[o(2348)]((u) => new ke(u[o(606)][o(2805)][o(2714)]));
      return Q(n, { code: B[o(952)], unionErrors: c }), h0;
    }
    if (n[t(2805)][t(682)]) return Promise[t(972)](e[t(2348)](async (s) => {
      const o = t, c = { ...n, common: { ...n[o(2805)], issues: [] }, parent: null };
      return { result: await s[o(529)]({ data: n.data, path: n[o(1055)], parent: c }), ctx: c };
    }))[t(1463)](r);
    {
      let s;
      const o = [];
      for (const u of e) {
        const d = { ...n, common: { ...n[t(2805)], issues: [] }, parent: null }, f = u._parseSync({ data: n[t(2584)], path: n[t(1055)], parent: d });
        if (f[t(1444)] === t(238)) return f;
        f[t(1444)] === t(1787) && !s && (s = { result: f, ctx: d }), d.common[t(2714)][t(1028)] && o[t(2037)](d.common[t(2714)]);
      }
      if (s) return n.common[t(2714)][t(2037)](...s.ctx[t(2805)][t(2714)]), s[t(1924)];
      const c = o.map((u) => new ke(u));
      return Q(n, { code: B[t(952)], unionErrors: c }), h0;
    }
  }
  get options() {
    const x = a;
    return this[x(1802)][x(2393)];
  }
}
vx[a(1644)] = (i, x) => {
  const t = a;
  return new vx({ options: i, typeName: p0[t(1942)], ...w0(x) });
};
const ve = (i) => {
  const x = a;
  return i instanceof _t ? ve(i[x(1004)]) : i instanceof Ae ? ve(i.innerType()) : i instanceof Sx ? [i.value] : i instanceof je ? i[x(2393)] : i instanceof Bt ? F0[x(290)](i[x(2050)]) : i instanceof Px ? ve(i[x(1802)][x(1684)]) : i instanceof zt ? [void 0] : i instanceof Ht ? [null] : i instanceof Se ? [void 0, ...ve(i.unwrap())] : i instanceof Le ? [null, ...ve(i.unwrap())] : i instanceof Ln ? ve(i.unwrap()) : i instanceof Ex ? ve(i[x(1185)]()) : i instanceof Ix ? ve(i[x(1802)][x(1684)]) : [];
};
class ta extends R0 {
  [a(2296)](x) {
    const t = a, { ctx: n } = this[t(691)](x);
    if (n[t(1763)] !== t0[t(513)]) return Q(n, { code: B[t(2757)], expected: t0.object, received: n[t(1763)] }), h0;
    const e = this[t(2624)], r = n.data[e], s = this[t(2024)][t(474)](r);
    return s ? n[t(2805)][t(682)] ? s[t(529)]({ data: n[t(2584)], path: n[t(1055)], parent: n }) : s[t(2375)]({ data: n[t(2584)], path: n[t(1055)], parent: n }) : (Q(n, { code: B.invalid_union_discriminator, options: Array[t(871)](this[t(2024)][t(2459)]()), path: [e] }), h0);
  }
  get discriminator() {
    const x = a;
    return this[x(1802)][x(2624)];
  }
  get [a(2393)]() {
    const x = a;
    return this[x(1802)][x(2393)];
  }
  get [a(2024)]() {
    const x = a;
    return this[x(1802)][x(2024)];
  }
  static create(x, t, n) {
    const e = a, r = /* @__PURE__ */ new Map();
    for (const s of t) {
      const o = ve(s.shape[x]);
      if (!o[e(1028)]) throw new Error(e(1440) + x + e(2490));
      for (const c of o) {
        if (r[e(341)](c)) throw new Error(e(2625) + String(x) + e(1660) + String(c));
        r[e(2663)](c, s);
      }
    }
    return new ta({ typeName: p0.ZodDiscriminatedUnion, discriminator: x, options: t, optionsMap: r, ...w0(n) });
  }
}
function Zt(i, x) {
  const t = a, n = Ie(i), e = Ie(x);
  if (i === x) return { valid: !0, data: i };
  if (n === t0.object && e === t0[t(513)]) {
    const r = F0[t(712)](x), s = F0[t(712)](i).filter((c) => r[t(2775)](c) !== -1), o = { ...i, ...x };
    for (const c of s) {
      const u = Zt(i[c], x[c]);
      if (!u[t(238)]) return { valid: !1 };
      o[c] = u[t(2584)];
    }
    return { valid: !0, data: o };
  } else if (n === t0[t(743)] && e === t0[t(743)]) {
    if (i[t(1028)] !== x[t(1028)]) return { valid: !1 };
    const r = [];
    for (let s = 0; s < i.length; s++) {
      const o = i[s], c = x[s], u = Zt(o, c);
      if (!u.valid) return { valid: !1 };
      r.push(u.data);
    }
    return { valid: !0, data: r };
  } else return n === t0.date && e === t0[t(268)] && +i == +x ? { valid: !0, data: i } : { valid: !1 };
}
class bx extends R0 {
  [a(2296)](x) {
    const t = a, { status: n, ctx: e } = this[t(691)](x), r = (s, o) => {
      const c = t;
      if (Ea(s) || Ea(o)) return h0;
      const u = Zt(s[c(1135)], o[c(1135)]);
      return u[c(238)] ? ((Ra(s) || Ra(o)) && n[c(1787)](), { status: n.value, value: u[c(2584)] }) : (Q(e, { code: B[c(1577)] }), h0);
    };
    return e[t(2805)][t(682)] ? Promise[t(972)]([this[t(1802)].left[t(529)]({ data: e[t(2584)], path: e[t(1055)], parent: e }), this[t(1802)][t(2421)][t(529)]({ data: e[t(2584)], path: e[t(1055)], parent: e })])[t(1463)](([s, o]) => r(s, o)) : r(this[t(1802)][t(1923)][t(2375)]({ data: e[t(2584)], path: e.path, parent: e }), this[t(1802)][t(2421)][t(2375)]({ data: e[t(2584)], path: e[t(1055)], parent: e }));
  }
}
bx[a(1644)] = (i, x, t) => {
  const n = a;
  return new bx({ left: i, right: x, typeName: p0[n(1318)], ...w0(t) });
};
class De extends R0 {
  [a(2296)](x) {
    const t = a, { status: n, ctx: e } = this[t(691)](x);
    if (e.parsedType !== t0[t(743)]) return Q(e, { code: B.invalid_type, expected: t0[t(743)], received: e[t(1763)] }), h0;
    if (e.data[t(1028)] < this[t(1802)][t(2159)][t(1028)]) return Q(e, { code: B.too_small, minimum: this[t(1802)].items[t(1028)], inclusive: !0, exact: !1, type: t(743) }), h0;
    !this[t(1802)][t(2247)] && e.data[t(1028)] > this[t(1802)][t(2159)][t(1028)] && (Q(e, { code: B[t(1389)], maximum: this[t(1802)][t(2159)][t(1028)], inclusive: !0, exact: !1, type: "array" }), n[t(1787)]());
    const s = [...e[t(2584)]][t(2348)]((o, c) => {
      const u = t, d = this._def[u(2159)][c] || this[u(1802)][u(2247)];
      return d ? d[u(2296)](new pe(e, o, e[u(1055)], c)) : null;
    }).filter((o) => !!o);
    return e[t(2805)].async ? Promise[t(972)](s)[t(1463)]((o) => ee[t(393)](n, o)) : ee[t(393)](n, s);
  }
  get [a(2159)]() {
    return this[a(1802)].items;
  }
  [a(2247)](x) {
    const t = a;
    return new De({ ...this[t(1802)], rest: x });
  }
}
De.create = (i, x) => {
  const t = a;
  if (!Array.isArray(i)) throw new Error(t(667));
  return new De({ items: i, typeName: p0.ZodTuple, rest: null, ...w0(x) });
};
class wx extends R0 {
  get [a(374)]() {
    const x = a;
    return this[x(1802)][x(940)];
  }
  get valueSchema() {
    const x = a;
    return this[x(1802)][x(629)];
  }
  [a(2296)](x) {
    const t = a, { status: n, ctx: e } = this[t(691)](x);
    if (e.parsedType !== t0[t(513)]) return Q(e, { code: B[t(2757)], expected: t0[t(513)], received: e[t(1763)] }), h0;
    const r = [], s = this._def[t(940)], o = this[t(1802)].valueType;
    for (const c in e.data)
      r.push({ key: s._parse(new pe(e, c, e.path, c)), value: o[t(2296)](new pe(e, e[t(2584)][c], e.path, c)), alwaysSet: c in e[t(2584)] });
    return e[t(2805)][t(682)] ? ee.mergeObjectAsync(n, r) : ee.mergeObjectSync(n, r);
  }
  get [a(2452)]() {
    const x = a;
    return this[x(1802)][x(629)];
  }
  static [a(1644)](x, t, n) {
    const e = a;
    return t instanceof R0 ? new wx({ keyType: x, valueType: t, typeName: p0[e(1945)], ...w0(n) }) : new wx({ keyType: we[e(1644)](), valueType: x, typeName: p0[e(1945)], ...w0(t) });
  }
}
class Na extends R0 {
  get [a(374)]() {
    const x = a;
    return this._def[x(940)];
  }
  get [a(2350)]() {
    const x = a;
    return this[x(1802)][x(629)];
  }
  [a(2296)](x) {
    const t = a, { status: n, ctx: e } = this[t(691)](x);
    if (e[t(1763)] !== t0[t(2348)]) return Q(e, { code: B.invalid_type, expected: t0.map, received: e.parsedType }), h0;
    const r = this._def.keyType, s = this._def[t(629)], o = [...e[t(2584)][t(1500)]()].map(([c, u], d) => {
      const f = t;
      return { key: r._parse(new pe(e, c, e.path, [d, f(507)])), value: s._parse(new pe(e, u, e[f(1055)], [d, f(1135)])) };
    });
    if (e[t(2805)][t(682)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise[t(2272)]().then(async () => {
        const u = t;
        for (const d of o) {
          const f = await d[u(507)], l = await d[u(1135)];
          if (f[u(1444)] === u(1452) || l.status === "aborted") return h0;
          (f[u(1444)] === u(1787) || l.status === u(1787)) && n[u(1787)](), c[u(2663)](f[u(1135)], l[u(1135)]);
        }
        return { status: n.value, value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of o) {
        const d = u[t(507)], f = u[t(1135)];
        if (d[t(1444)] === t(1452) || f[t(1444)] === t(1452)) return h0;
        (d.status === t(1787) || f[t(1444)] === t(1787)) && n[t(1787)](), c[t(2663)](d.value, f[t(1135)]);
      }
      return { status: n[t(1135)], value: c };
    }
  }
}
Na[a(1644)] = (i, x, t) => {
  const n = a;
  return new Na({ valueType: x, keyType: i, typeName: p0[n(1281)], ...w0(t) });
};
class ax extends R0 {
  [a(2296)](x) {
    const t = a, { status: n, ctx: e } = this[t(691)](x);
    if (e.parsedType !== t0[t(2663)]) return Q(e, { code: B[t(2757)], expected: t0[t(2663)], received: e[t(1763)] }), h0;
    const r = this[t(1802)];
    r.minSize !== null && e[t(2584)][t(524)] < r.minSize[t(1135)] && (Q(e, { code: B[t(847)], minimum: r[t(2645)][t(1135)], type: "set", inclusive: !0, exact: !1, message: r[t(2645)][t(705)] }), n[t(1787)]()), r.maxSize !== null && e[t(2584)][t(524)] > r[t(1771)][t(1135)] && (Q(e, { code: B[t(1389)], maximum: r[t(1771)][t(1135)], type: t(2663), inclusive: !0, exact: !1, message: r[t(1771)][t(705)] }), n[t(1787)]());
    const s = this._def[t(629)];
    function o(u) {
      const d = t, f = /* @__PURE__ */ new Set();
      for (const l of u) {
        if (l[d(1444)] === d(1452)) return h0;
        l.status === d(1787) && n[d(1787)](), f[d(1323)](l[d(1135)]);
      }
      return { status: n[d(1135)], value: f };
    }
    const c = [...e[t(2584)].values()][t(2348)]((u, d) => s._parse(new pe(e, u, e[t(1055)], d)));
    return e.common[t(682)] ? Promise[t(972)](c)[t(1463)]((u) => o(u)) : o(c);
  }
  min(x, t) {
    const n = a;
    return new ax({ ...this[n(1802)], minSize: { value: x, message: r0[n(1707)](t) } });
  }
  [a(1828)](x, t) {
    const n = a;
    return new ax({ ...this[n(1802)], maxSize: { value: x, message: r0[n(1707)](t) } });
  }
  [a(524)](x, t) {
    const n = a;
    return this[n(1482)](x, t)[n(1828)](x, t);
  }
  [a(2494)](x) {
    return this[a(1482)](1, x);
  }
}
ax.create = (i, x) => {
  const t = a;
  return new ax({ valueType: i, minSize: null, maxSize: null, typeName: p0[t(841)], ...w0(x) });
};
class _t extends R0 {
  get [a(1004)]() {
    return this[a(1802)].getter();
  }
  [a(2296)](x) {
    const t = a, { ctx: n } = this[t(691)](x);
    return this[t(1802)][t(2439)]()[t(2296)]({ data: n[t(2584)], path: n[t(1055)], parent: n });
  }
}
_t[a(1644)] = (i, x) => new _t({ getter: i, typeName: p0.ZodLazy, ...w0(x) });
class Sx extends R0 {
  [a(2296)](x) {
    const t = a;
    if (x[t(2584)] !== this[t(1802)].value) {
      const n = this[t(2682)](x);
      return Q(n, { received: n[t(2584)], code: B[t(794)], expected: this[t(1802)][t(1135)] }), h0;
    }
    return { status: t(238), value: x[t(2584)] };
  }
  get [a(1135)]() {
    const x = a;
    return this[x(1802)][x(1135)];
  }
}
Sx.create = (i, x) => {
  const t = a;
  return new Sx({ value: i, typeName: p0[t(1754)], ...w0(x) });
};
function jn(i, x) {
  const t = a;
  return new je({ values: i, typeName: p0[t(1598)], ...w0(x) });
}
class je extends R0 {
  [a(2296)](x) {
    const t = a;
    if (typeof x[t(2584)] !== t(654)) {
      const n = this._getOrReturnCtx(x), e = this[t(1802)][t(1652)];
      return Q(n, { expected: F0.joinValues(e), received: n[t(1763)], code: B[t(2757)] }), h0;
    }
    if (!this[t(2619)] && (this[t(2619)] = new Set(this[t(1802)][t(1652)])), !this[t(2619)][t(341)](x[t(2584)])) {
      const n = this._getOrReturnCtx(x), e = this._def[t(1652)];
      return Q(n, { received: n[t(2584)], code: B[t(2506)], options: e }), h0;
    }
    return ae(x[t(2584)]);
  }
  get [a(2393)]() {
    return this._def.values;
  }
  get enum() {
    const x = a, t = {};
    for (const n of this[x(1802)][x(1652)])
      t[n] = n;
    return t;
  }
  get [a(568)]() {
    const x = a, t = {};
    for (const n of this[x(1802)][x(1652)])
      t[n] = n;
    return t;
  }
  get [a(291)]() {
    const x = a, t = {};
    for (const n of this[x(1802)][x(1652)])
      t[n] = n;
    return t;
  }
  extract(x, t = this[a(1802)]) {
    const n = a;
    return je[n(1644)](x, { ...this[n(1802)], ...t });
  }
  [a(1978)](x, t = this[a(1802)]) {
    const n = a;
    return je.create(this[n(2393)][n(1001)]((e) => !x[n(2147)](e)), { ...this[n(1802)], ...t });
  }
}
je[a(1644)] = jn;
class Bt extends R0 {
  [a(2296)](x) {
    const t = a, n = F0[t(2215)](this._def[t(1652)]), e = this[t(2682)](x);
    if (e[t(1763)] !== t0[t(654)] && e.parsedType !== t0[t(536)]) {
      const r = F0[t(290)](n);
      return Q(e, { expected: F0[t(2815)](r), received: e.parsedType, code: B.invalid_type }), h0;
    }
    if (!this[t(2619)] && (this._cache = new Set(F0[t(2215)](this[t(1802)].values))), !this[t(2619)][t(341)](x[t(2584)])) {
      const r = F0[t(290)](n);
      return Q(e, { received: e.data, code: B[t(2506)], options: r }), h0;
    }
    return ae(x[t(2584)]);
  }
  get enum() {
    const x = a;
    return this._def[x(1652)];
  }
}
Bt[a(1644)] = (i, x) => {
  const t = a;
  return new Bt({ values: i, typeName: p0[t(1980)], ...w0(x) });
};
class kx extends R0 {
  [a(1185)]() {
    const x = a;
    return this[x(1802)][x(2299)];
  }
  _parse(x) {
    const t = a, { ctx: n } = this[t(691)](x);
    if (n[t(1763)] !== t0[t(1411)] && n.common.async === !1) return Q(n, { code: B[t(2757)], expected: t0[t(1411)], received: n[t(1763)] }), h0;
    const e = n[t(1763)] === t0[t(1411)] ? n[t(2584)] : Promise[t(2272)](n[t(2584)]);
    return ae(e[t(1463)]((r) => {
      const s = t;
      return this[s(1802)][s(2299)].parseAsync(r, { path: n.path, errorMap: n[s(2805)][s(1606)] });
    }));
  }
}
kx[a(1644)] = (i, x) => new kx({ type: i, typeName: p0.ZodPromise, ...w0(x) });
class Ae extends R0 {
  [a(1684)]() {
    const x = a;
    return this._def[x(1004)];
  }
  [a(2010)]() {
    const x = a;
    return this._def.schema._def[x(942)] === p0[x(679)] ? this[x(1802)].schema[x(2010)]() : this[x(1802)][x(1004)];
  }
  _parse(x) {
    const t = a, { status: n, ctx: e } = this._processInputParams(x), r = this[t(1802)].effect || null, s = { addIssue: (o) => {
      const c = t;
      Q(e, o), o[c(2007)] ? n.abort() : n[c(1787)]();
    }, get path() {
      return e[t(1055)];
    } };
    if (s.addIssue = s[t(663)][t(885)](s), r[t(2299)] === t(920)) {
      const o = r[t(1361)](e[t(2584)], s);
      if (e.common.async) return Promise.resolve(o).then(async (c) => {
        const u = t;
        if (n[u(1135)] === "aborted") return h0;
        const d = await this[u(1802)][u(1004)][u(529)]({ data: c, path: e[u(1055)], parent: e });
        return d[u(1444)] === u(1452) ? h0 : d[u(1444)] === "dirty" || n[u(1135)] === u(1787) ? Je(d[u(1135)]) : d;
      });
      {
        if (n[t(1135)] === t(1452)) return h0;
        const c = this[t(1802)][t(1004)]._parseSync({ data: o, path: e[t(1055)], parent: e });
        return c.status === "aborted" ? h0 : c[t(1444)] === t(1787) || n[t(1135)] === t(1787) ? Je(c[t(1135)]) : c;
      }
    }
    if (r[t(2299)] === t(1076)) {
      const o = (c) => {
        const u = t, d = r[u(1076)](c, s);
        if (e[u(2805)].async) return Promise[u(2272)](d);
        if (d instanceof Promise) throw new Error(u(1086));
        return c;
      };
      if (e.common[t(682)] === !1) {
        const c = this[t(1802)].schema._parseSync({ data: e[t(2584)], path: e.path, parent: e });
        return c.status === t(1452) ? h0 : (c[t(1444)] === t(1787) && n.dirty(), o(c[t(1135)]), { status: n.value, value: c.value });
      } else return this[t(1802)][t(1004)][t(529)]({ data: e[t(2584)], path: e.path, parent: e })[t(1463)]((c) => {
        const u = t;
        return c.status === u(1452) ? h0 : (c[u(1444)] === u(1787) && n[u(1787)](), o(c[u(1135)])[u(1463)](() => {
          const d = u;
          return { status: n.value, value: c[d(1135)] };
        }));
      });
    }
    if (r[t(2299)] === t(1361))
      if (e[t(2805)][t(682)] === !1) {
        const o = this._def[t(1004)]._parseSync({ data: e[t(2584)], path: e[t(1055)], parent: e });
        if (!Ve(o)) return h0;
        const c = r[t(1361)](o.value, s);
        if (c instanceof Promise) throw new Error(t(573));
        return { status: n[t(1135)], value: c };
      } else return this[t(1802)].schema[t(529)]({ data: e[t(2584)], path: e[t(1055)], parent: e })[t(1463)]((o) => {
        const c = t;
        return Ve(o) ? Promise[c(2272)](r[c(1361)](o[c(1135)], s))[c(1463)]((u) => ({ status: n[c(1135)], value: u })) : h0;
      });
    F0[t(2352)](r);
  }
}
Ae.create = (i, x, t) => {
  const n = a;
  return new Ae({ schema: i, typeName: p0[n(679)], effect: x, ...w0(t) });
}, Ae[a(2237)] = (i, x, t) => {
  const n = a;
  return new Ae({ schema: x, effect: { type: n(920), transform: i }, typeName: p0[n(679)], ...w0(t) });
};
class Se extends R0 {
  _parse(x) {
    const t = a;
    return this[t(1197)](x) === t0[t(1210)] ? ae(void 0) : this[t(1802)][t(1684)]._parse(x);
  }
  [a(1185)]() {
    const x = a;
    return this[x(1802)][x(1684)];
  }
}
Se[a(1644)] = (i, x) => {
  const t = a;
  return new Se({ innerType: i, typeName: p0[t(963)], ...w0(x) });
};
class Le extends R0 {
  [a(2296)](x) {
    const t = a;
    return this[t(1197)](x) === t0.null ? ae(null) : this[t(1802)][t(1684)]._parse(x);
  }
  [a(1185)]() {
    const x = a;
    return this._def[x(1684)];
  }
}
Le[a(1644)] = (i, x) => new Le({ innerType: i, typeName: p0.ZodNullable, ...w0(x) });
class Px extends R0 {
  [a(2296)](x) {
    const t = a, { ctx: n } = this._processInputParams(x);
    let e = n[t(2584)];
    return n[t(1763)] === t0.undefined && (e = this[t(1802)][t(454)]()), this[t(1802)][t(1684)][t(2296)]({ data: e, path: n.path, parent: n });
  }
  [a(2433)]() {
    const x = a;
    return this[x(1802)][x(1684)];
  }
}
Px.create = (i, x) => {
  const t = a;
  return new Px({ innerType: i, typeName: p0.ZodDefault, defaultValue: typeof x[t(574)] === t(2189) ? x[t(574)] : () => x[t(574)], ...w0(x) });
};
class Ix extends R0 {
  _parse(x) {
    const t = a, { ctx: n } = this._processInputParams(x), e = { ...n, common: { ...n.common, issues: [] } }, r = this[t(1802)][t(1684)]._parse({ data: e[t(2584)], path: e.path, parent: { ...e } });
    return gx(r) ? r[t(1463)]((s) => {
      const o = t;
      return { status: "valid", value: s[o(1444)] === o(238) ? s[o(1135)] : this[o(1802)][o(1428)]({ get error() {
        const c = o;
        return new ke(e[c(2805)][c(2714)]);
      }, input: e[o(2584)] }) };
    }) : { status: t(238), value: r[t(1444)] === t(238) ? r[t(1135)] : this._def[t(1428)]({ get error() {
      const s = t;
      return new ke(e[s(2805)][s(2714)]);
    }, input: e[t(2584)] }) };
  }
  [a(2376)]() {
    const x = a;
    return this[x(1802)][x(1684)];
  }
}
Ix[a(1644)] = (i, x) => {
  const t = a;
  return new Ix({ innerType: i, typeName: p0.ZodCatch, catchValue: typeof x[t(950)] === t(2189) ? x.catch : () => x[t(950)], ...w0(x) });
};
class qa extends R0 {
  [a(2296)](x) {
    const t = a;
    if (this[t(1197)](x) !== t0[t(484)]) {
      const e = this._getOrReturnCtx(x);
      return Q(e, { code: B[t(2757)], expected: t0.nan, received: e[t(1763)] }), h0;
    }
    return { status: t(238), value: x[t(2584)] };
  }
}
qa[a(1644)] = (i) => {
  const x = a;
  return new qa({ typeName: p0[x(892)], ...w0(i) });
};
class Ln extends R0 {
  [a(2296)](x) {
    const t = a, { ctx: n } = this[t(691)](x), e = n[t(2584)];
    return this._def[t(2299)][t(2296)]({ data: e, path: n[t(1055)], parent: n });
  }
  [a(1185)]() {
    const x = a;
    return this[x(1802)][x(2299)];
  }
}
class aa extends R0 {
  [a(2296)](x) {
    const t = a, { status: n, ctx: e } = this._processInputParams(x);
    if (e[t(2805)][t(682)])
      return (async () => {
        const s = t, o = await this[s(1802)].in[s(529)]({ data: e[s(2584)], path: e[s(1055)], parent: e });
        return o[s(1444)] === s(1452) ? h0 : o[s(1444)] === "dirty" ? (n[s(1787)](), Je(o[s(1135)])) : this._def.out._parseAsync({ data: o[s(1135)], path: e[s(1055)], parent: e });
      })();
    {
      const r = this[t(1802)].in[t(2375)]({ data: e[t(2584)], path: e[t(1055)], parent: e });
      return r[t(1444)] === t(1452) ? h0 : r.status === t(1787) ? (n[t(1787)](), { status: t(1787), value: r[t(1135)] }) : this[t(1802)][t(2475)][t(2375)]({ data: r[t(1135)], path: e[t(1055)], parent: e });
    }
  }
  static [a(1644)](x, t) {
    return new aa({ in: x, out: t, typeName: p0.ZodPipeline });
  }
}
class Ex extends R0 {
  [a(2296)](x) {
    const t = a, n = this[t(1802)].innerType[t(2296)](x), e = (r) => {
      const s = t;
      return Ve(r) && (r[s(1135)] = Object[s(1352)](r[s(1135)])), r;
    };
    return gx(n) ? n[t(1463)]((r) => e(r)) : e(n);
  }
  [a(1185)]() {
    const x = a;
    return this[x(1802)][x(1684)];
  }
}
Ex[a(1644)] = (i, x) => {
  const t = a;
  return new Ex({ innerType: i, typeName: p0[t(2605)], ...w0(x) });
};
function Aa(i, x) {
  const t = a, n = typeof i === t(2189) ? i(x) : typeof i === t(654) ? { message: i } : i;
  return typeof n === t(654) ? { message: n } : n;
}
function si(i, x = {}, t) {
  const n = a;
  return i ? tx[n(1644)]()[n(1119)]((e, r) => {
    const s = n, o = i(e);
    if (o instanceof Promise) return o.then((c) => {
      const u = W;
      if (!c) {
        const d = Aa(x, e), f = d[u(2007)] ?? t ?? !0;
        r.addIssue({ code: u(1446), ...d, fatal: f });
      }
    });
    if (!o) {
      const c = Aa(x, e), u = c[s(2007)] ?? t ?? !0;
      r[s(663)]({ code: "custom", ...c, fatal: u });
    }
  }) : tx[n(1644)]();
}
var p0;
(function(i) {
  const x = a;
  i[x(2581)] = "ZodString", i[x(1765)] = x(1765), i.ZodNaN = x(892), i[x(843)] = x(843), i[x(1638)] = x(1638), i.ZodDate = x(2013), i.ZodSymbol = x(1790), i[x(257)] = x(257), i[x(1261)] = x(1261), i[x(1539)] = x(1539), i[x(1456)] = x(1456), i[x(1872)] = x(1872), i[x(1542)] = x(1542), i[x(435)] = x(435), i[x(1546)] = "ZodObject", i[x(1942)] = "ZodUnion", i[x(1847)] = x(1847), i[x(1318)] = x(1318), i.ZodTuple = x(2401), i[x(1945)] = x(1945), i[x(1281)] = x(1281), i.ZodSet = x(841), i[x(2390)] = "ZodFunction", i[x(2358)] = "ZodLazy", i[x(1754)] = x(1754), i.ZodEnum = x(1598), i[x(679)] = x(679), i[x(1980)] = x(1980), i[x(963)] = x(963), i[x(448)] = x(448), i[x(2326)] = x(2326), i.ZodCatch = x(2318), i.ZodPromise = x(1875), i.ZodBranded = x(1181), i[x(1019)] = x(1019), i[x(2605)] = x(2605);
})(p0 || (p0 = {}));
const zx = (i, x = { message: a(858) + i[a(2409)] }) => si((t) => t instanceof i, x), y = we[a(1644)], K = Ze[a(1644)], e0 = $t[a(1644)], A0 = tx[a(1644)], Me = Ut.create;
Ee[a(1644)];
const Hx = Vt[a(1644)], b0 = he.create, k = K0.create, B0 = vx[a(1644)], Mn = ta[a(1644)];
bx.create, De.create;
const H0 = wx[a(1644)], x0 = Sx.create, I0 = je[a(1644)];
kx[a(1644)];
const _ = Se[a(1644)];
Le.create;
var en, xn;
class ii {
  constructor(x, t) {
    m0(this, xn);
    m0(this, en);
    const n = a;
    this[n(1024)] = x, this[n(1372)] = t;
  }
  get [(xn = a(1024), en = a(1372), a(768))]() {
    const x = a, t = this[x(1024)][x(896)](this.nodeId);
    if (!t) throw new Error("No store found for node " + this[x(1372)]);
    return t;
  }
  get [a(430)]() {
    const x = a, t = this[x(1024)][x(796)]().getNode(this[x(1372)]);
    if (!t) throw new Error(x(543) + this[x(1372)]);
    return new Proxy({}, { get: (e, r) => {
      const s = x;
      if (typeof r !== s(654)) return;
      const o = t[s(430)][r], c = r[s(2354)]("__internal_");
      if (!o && !c) throw new Error("Action " + r + s(2368) + this.nodeId);
      return async (u, d) => {
        const f = s, l = this[f(769)]();
        if (!l) throw new Error("No connection available for node " + this.nodeId);
        const { transport: g, path: h } = l, m = this[f(1024)][f(2704)]();
        if (!(o != null && o[f(2571)])) {
          const S = A0();
          let P;
          if (h[f(1028)] === 2) P = await g[f(2698)]({ method: f(1462), params: { action: r, data: u, sourceNodeId: m } }, S);
          else try {
            P = await g[f(2698)]({ method: f(1462), params: { action: f(2557), data: { targetNodeId: this[f(1372)], targetAction: r, targetData: u, forwardPath: h.slice(1) }, sourceNodeId: m } }, S);
          } catch (q) {
            throw console.error(f(310) + r + ":", q), console[f(1314)]({ targetNodeId: this[f(1372)], targetAction: r, targetData: u, forwardPath: h[f(2460)](1) }), q;
          }
          return P;
        }
        let b;
        return h[f(1028)] === 2 ? b = g[f(1152)]({ action: r, data: u, sourceNodeId: m }, o.responseSchema, d) : b = g.streamRequest({ action: f(2557), data: { targetNodeId: this[f(1372)], targetAction: r, targetData: u, forwardPath: h.slice(1) }, sourceNodeId: m }, o.responseSchema, d), b;
      };
    } });
  }
  [a(769)]() {
    const x = a;
    return this[x(1024)][x(2520)](this[x(1372)]);
  }
}
var tn, an, rn;
class $n {
  constructor(x) {
    m0(this, rn);
    m0(this, an);
    m0(this, tn);
    const t = a;
    this[t(1024)] = x, this.actionManager = x[t(1315)], this[t(2082)] = x[t(2082)];
  }
  initializeConsumer({ store: x, storeName: t, onStateUpdate: n, requestInitialState: e }) {
    const r = a;
    this[r(2082)][r(658)](r(1311) + t, (s) => {
      const o = r;
      try {
        s[o(1742)] !== this[o(1024)][o(2704)]() && n(s[o(384)]);
      } catch (c) {
        console[o(1314)](o(1084) + t + ":", c);
      }
    });
  }
  [(rn = a(1024), an = a(1315), tn = a(2082), a(1288))]({ store: x, storeName: t, sendStateUpdate: n, onInitialStateRequested: e }) {
    const r = a, s = this[r(1024)][r(2704)](), o = async (d, f = !1) => {
      const l = r;
      if (this[l(2563)]()) try {
        await this.broadcastManager[l(2500)](l(1311) + t, { storeName: t, sourceNodeId: s, stateUpdate: d, isInitialState: f });
      } catch (h) {
        console.error(l(656) + t + ":", h);
      }
    }, c = x.subscribe((d) => {
      o(d, !1);
    });
    e(() => {
      o(x[r(409)](), !0);
    });
    const u = "__internal_requestInitialState_" + t;
    return this[r(1315)][r(2136)](u, async () => {
      const d = r, f = x[d(409)]();
      return await o(f, !0), { success: !0 };
    }), this[r(2082)].registerHandler(r(1053), async (d) => {
      const f = r;
      try {
        (d[f(1229)] === s || d[f(1795)] === s) && await o(x[f(409)](), !0);
      } catch {
      }
    }), () => {
      var f;
      const d = r;
      c(), (f = this[d(1315)][d(528)]) == null || f.delete(u);
    };
  }
  [a(2563)]() {
    var t;
    const x = a;
    try {
      const n = this.graphInstance[x(2203)], e = n && n[x(1988)]() > 0, r = ((t = this.broadcastManager[x(2688)]) == null ? void 0 : t[x(524)]) > 0;
      return e || r;
    } catch {
      return !!this[x(2082)];
    }
  }
  async broadcastCurrentState(x, t) {
    const n = a, e = this[n(1024)].getCurrentNodeId();
    if (this.isTransportReady()) try {
      await this[n(2082)][n(2500)](n(1311) + t, { storeName: t, sourceNodeId: e, stateUpdate: x[n(409)](), isInitialState: !0 });
    } catch {
    }
  }
}
function oi({ graphInstance: i, store: x, name: t }) {
  const n = a, e = new $n(i), r = (o) => {
    const c = W, u = x.getState(), d = { ...u, ...o };
    x[c(2248)](d);
  }, s = async () => {
    const o = W, c = o(2361) + t;
    try {
      const u = i[o(1540)](t);
      u && u[o(430)] && u[o(430)][c] && await u[o(430)][c]();
    } catch (u) {
      console[o(2791)](o(1118) + t + ":", u);
    }
  };
  e[n(1914)]({ store: x, storeName: t, onStateUpdate: r, requestInitialState: s });
}
function ci({ graphInstance: i, store: x, name: t }) {
  const n = a, e = new $n(i), r = async (o) => {
  }, s = (o) => {
  };
  return e[n(1288)]({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: s });
}
var nn, sn, on;
class ui {
  constructor(x) {
    m0(this, on, /* @__PURE__ */ new Map());
    m0(this, sn, /* @__PURE__ */ new Map());
    m0(this, "mountedTransports", /* @__PURE__ */ new Set());
    m0(this, nn);
    const t = a;
    this[t(1805)] = x;
  }
  [(on = a(2269), sn = a(2154), nn = a(1805), a(2036))](x) {
    return (t) => {
      const n = W;
      if (t && t[n(669)] === this[n(1805)]) return;
      const e = this[n(2269)][n(474)](x);
      if (e) {
        const { __origin: r, forwarded: s, ...o } = t || {};
        for (const c of e)
          try {
            c(o);
          } catch (u) {
            console[n(1314)]("Error in broadcast handler for " + x + ":", u);
          }
      }
      !t[n(275)] && this.forwardBroadcast(x, t);
    };
  }
  async forwardBroadcast(x, t) {
    const n = a;
    try {
      const e = { ...t, forwarded: !0 }, r = [...Array[n(871)](this[n(2154)][n(1652)]()), ...Array[n(871)](this.mountedTransports)], s = r[n(2348)]((o) => {
        const c = n;
        return o[c(2336)]({ method: c(2593), params: { messageType: x, message: e } })[c(950)]((u) => {
          const d = c;
          console[d(1314)](d(545) + x + ":", u);
        });
      });
      await Promise[n(972)](s);
    } catch (e) {
      console.error(n(664), e);
    }
  }
  [a(658)](x, t) {
    const n = a;
    !this.broadcastHandlers.has(x) && this[n(2269)].set(x, /* @__PURE__ */ new Set()), this.broadcastHandlers[n(474)](x)[n(1323)](t);
  }
  [a(783)](x) {
    this.setupGeneralBroadcastHandler(x);
  }
  setupGeneralBroadcastHandler(x) {
    const t = a, n = k({ method: x0("sdppp/broadcast"), params: k({ messageType: y(), message: A0() }) });
    x[t(1078)](n, async (e) => {
      const r = t, s = e[r(1675)][r(2444)];
      this[r(2036)](s)(e.params[r(705)]);
    });
  }
  [a(2545)](x, t) {
    const n = a;
    this[n(2154)].set(x, t), this[n(783)](t);
  }
  [a(2292)](x) {
    const t = a;
    this.transports[t(243)](x);
  }
  async [a(2500)](x, t) {
    const n = a, e = [...Array[n(871)](this.transports[n(1652)]()), ...Array[n(871)](this[n(1798)])], r = e[n(2348)]((s) => s.notification({ method: "sdppp/broadcast", params: { messageType: x, message: t } }));
    await Promise[n(972)](r);
  }
  [a(449)](x) {
    const t = a;
    this[t(1798)][t(1323)](x), this[t(783)](x);
  }
  getHandlerTypes() {
    const x = a;
    return Array[x(871)](this.broadcastHandlers[x(2459)]());
  }
  clear() {
    const x = a;
    this[x(2269)][x(817)](), this.transports.clear(), this[x(1798)].clear();
  }
}
var cn, un;
class di {
  constructor(x, t, n) {
    m0(this, un, /* @__PURE__ */ new Map());
    m0(this, "definition");
    m0(this, "currentNodeId");
    m0(this, cn);
    const e = a;
    this.definition = x, this[e(1805)] = t, this[e(829)] = n;
  }
  [(un = a(528), cn = a(829), a(1695))](x, t) {
    const n = a, e = this[n(2093)][n(1540)](this.currentNodeId);
    if (!e) throw new Error(n(543) + this[n(1805)]);
    const r = e[n(430)][x];
    if (!r) throw new Error(n(1243) + String(x) + n(2368) + this[n(1805)]);
    this[n(283)](x, t, r), this[n(528)][n(2663)](x, t);
  }
  [a(283)](x, t, n) {
    n[a(2571)];
  }
  [a(2136)](x, t) {
    const n = a;
    this[n(528)][n(2663)](x, t);
  }
  [a(449)](x) {
    const t = a;
    for (const [n, e] of this[t(528)]) {
      const r = this[t(2093)][t(1540)](this.currentNodeId), s = r == null ? void 0 : r[t(430)][n];
      if (n.startsWith("__internal_") ? !1 : (s == null ? void 0 : s[t(2571)]) === !0) {
        const u = k({ action: x0(n) });
        x[t(2212)](u, async function* (d, f, l) {
          const g = t, h = d.data || d, m = e(h, f, l);
          if (m && typeof m === g(513) && Symbol.asyncIterator in m) for await (const b of m)
            yield b === void 0 ? {} : b;
          else {
            const b = await m;
            yield b === void 0 ? {} : b;
          }
        });
      }
    }
    this[t(2088)](x), this[t(1040)](x);
  }
  [a(2088)](x) {
    const t = a, n = k({ action: x0(t(2557)) }), e = this;
    x[t(2212)](n, async function* (r, s, o) {
      const c = t, u = r[c(2584)] || r, { targetNodeId: d, targetAction: f, targetData: l, forwardPath: g } = u;
      if (!g || g[c(1028)] === 0) throw new Error(c(736));
      const h = g[0], m = g.slice(1);
      if (m[c(1028)] === 0 && h === e.currentNodeId) {
        const b = e[c(528)][c(474)](f);
        if (!b) throw new Error(c(1243) + f + c(251) + e[c(1805)]);
        const S = b(l, s, o);
        if (S && typeof S === c(513) && Symbol[c(1516)] in S) for await (const P of S)
          yield P === void 0 ? {} : P;
        else {
          const P = await S;
          yield P === void 0 ? {} : P;
        }
        return;
      }
      if (h === e[c(1805)] && m[c(1028)] > 0) {
        const b = m[0], S = e.getTransport(b);
        if (S) {
          const P = await S[c(1152)]({ action: c(2557), data: { targetNodeId: d, targetAction: f, targetData: l, forwardPath: m } }, k({}), o);
          for await (const q of P)
            yield q === void 0 ? {} : q;
          return;
        }
        throw new Error(c(423) + b + c(1416));
      }
      throw new Error(c(2529) + e[c(1805)] + c(362) + g);
    });
  }
  [a(518)]() {
    const x = a;
    return Array.from(this[x(528)][x(2459)]());
  }
  [a(625)](x) {
    const t = a;
    return this[t(528)][t(341)](x);
  }
  [a(2052)](x) {
    const t = a;
    return this[t(528)][t(474)](x);
  }
  [a(817)]() {
    this.actionHandlers.clear();
  }
  [a(1573)](x, t, n) {
  }
  [a(1040)](x) {
    const t = a, n = k({ method: x0(t(1462)), params: k({ action: y(), data: A0()[t(612)]() }) }), e = this;
    x[t(936)](n, async (r, s) => {
      const o = t, { action: c, data: u } = r[o(1675)];
      if (c === o(2557)) return await e[o(2457)](u, s);
      const d = e[o(528)][o(474)](c);
      if (!d) throw new Error(o(1243) + c + o(251) + e[o(1805)]);
      const f = d(u, s), l = await f;
      return l === void 0 ? {} : l;
    });
  }
  async [a(2457)](x, t) {
    const n = a, { targetNodeId: e, targetAction: r, targetData: s, forwardPath: o } = x;
    if (!o || o[n(1028)] === 0) throw new Error(n(736));
    const c = o[0], u = o[n(2460)](1);
    if (u.length === 0 && c === this[n(1805)]) {
      const d = this[n(528)].get(r);
      if (!d) throw new Error(n(1243) + r + n(251) + this[n(1805)]);
      const f = d(s, t), l = await f;
      return l === void 0 ? {} : l;
    }
    if (c === this.currentNodeId && u[n(1028)] > 0) {
      const d = u[0], f = this.getTransport(d);
      if (f) return await f[n(2698)]({ method: "sdppp/directRequest", params: { action: n(2557), data: { targetNodeId: e, targetAction: r, targetData: s, forwardPath: u } } }, A0());
      throw new Error(n(423) + d + n(1416));
    }
    throw new Error("Invalid proxy forwarding: current node " + this[n(1805)] + n(362) + o);
  }
}
var dn, fn;
class fi {
  constructor(x, t) {
    m0(this, fn);
    m0(this, dn);
    m0(this, "connectedNodes", /* @__PURE__ */ new Set());
    const n = a;
    this[n(2093)] = x, this[n(1805)] = t;
  }
  markConnected(x) {
    const t = a;
    this[t(1740)][t(1323)](x);
  }
  [(fn = a(2093), dn = a(1805), a(1885))](x) {
    const t = a;
    this[t(1740)][t(243)](x);
  }
  [a(1821)](x) {
    const t = a;
    return this[t(1740)][t(341)](x);
  }
  [a(1985)](x, t) {
    const n = a;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), r = [{ nodeId: x, path: [x] }];
    for (; r.length > 0; ) {
      const { nodeId: s, path: o } = r[n(966)]();
      if (e[n(341)](s)) continue;
      e[n(1323)](s);
      const c = this.definition[n(2474)](s);
      for (const u of c) {
        if (u === t) return [...o, u];
        !e[n(341)](u) && r[n(2037)]({ nodeId: u, path: [...o, u] });
      }
    }
  }
  [a(771)]() {
    return Array[a(871)](this.connectedNodes);
  }
  [a(1988)]() {
    const x = a;
    return this.connectedNodes[x(524)];
  }
  [a(1716)]() {
    const x = a, t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), e = [this[x(1805)]];
    for (n[x(1323)](this[x(1805)]); e[x(1028)] > 0; ) {
      const r = e[x(966)](), s = this[x(2093)].getNeighbors(r);
      for (const o of s)
        !n[x(341)](o) && (n[x(1323)](o), (this[x(1740)][x(341)](o) || this.canReachThroughConnectedNodes(o, n)) && (t[x(1323)](o), e[x(2037)](o)));
    }
    return Array[x(871)](t);
  }
  canReachThroughConnectedNodes(x, t) {
    const n = a, e = this[n(1985)](this[n(1805)], x);
    if (!e || e[n(1028)] <= 1) return !1;
    for (let r = 1; r < e.length - 1; r++)
      if (!this[n(1740)][n(341)](e[r])) return !1;
    return !0;
  }
  [a(817)]() {
    const x = a;
    this[x(1740)][x(817)]();
  }
}
var ln, hn, pn, mn, gn, yn;
class li {
  constructor(x, t) {
    m0(this, yn);
    m0(this, "currentNodeId");
    m0(this, gn, /* @__PURE__ */ new Map());
    m0(this, mn, /* @__PURE__ */ new Map());
    m0(this, "broadcastManager");
    m0(this, pn);
    m0(this, hn);
    m0(this, ln, /* @__PURE__ */ new Map());
    const n = a;
    this.definition = x, this[n(1805)] = t, this[n(1295)](), this[n(2082)] = new ui(t), this[n(1315)] = new di(x, t, (e) => this[n(2066)](e)), this[n(2203)] = new fi(x, t), this[n(2592)]();
  }
  initializeNodeStores() {
    const x = a;
    for (const t of this[x(2093)].getNodeIds()) {
      const n = this[x(2093)][x(1540)](t);
      if (n && n[x(768)]) {
        const e = this[x(639)](n[x(768)]), r = Os(() => e);
        this[x(2369)][x(2663)](t, r);
      }
    }
  }
  [(yn = a(2093), gn = a(2369), mn = a(763), pn = a(1315), hn = a(2203), ln = a(846), a(639))](x) {
    const t = a;
    if (!x) return {};
    try {
      return x.parse({});
    } catch {
      return this[t(271)](x);
    }
  }
  [a(271)](x) {
    const t = a;
    if (!x || !x[t(2473)]) return {};
    if (x.def[t(2299)] === t(574)) {
      const n = x[t(2473)][t(454)];
      return typeof n == "function" ? n() : n;
    }
    if (x.def[t(2299)] === t(513)) {
      const n = {};
      let e;
      try {
        e = x.def[t(1559)];
      } catch {
        return {};
      }
      if (e) for (const [r, s] of Object[t(1500)](e)) {
        const o = this[t(2363)](s);
        o !== void 0 && (n[r] = o);
      }
      return n;
    }
    return {};
  }
  [a(2363)](x) {
    const t = a;
    if (x)
      try {
        return x.parse(void 0);
      } catch {
        return this[t(271)](x);
      }
  }
  async [a(515)](x, t) {
    const n = a;
    if (!this[n(2093)][n(2807)](this[n(1805)], x)) throw new Error(n(300) + this[n(1805)] + n(2646) + x);
    if (this[n(846)][n(341)](x)) throw new Error("Already connected to node " + x);
    try {
      this.nodeTransports.set(x, t), this[n(2203)][n(2583)](x), this[n(254)](x, t), await this[n(1614)](x), await this[n(1100)](x);
    } catch (e) {
      throw this[n(1404)](x), e;
    }
  }
  [a(1807)](x) {
    this.cleanupConnection(x);
  }
  async [a(1614)](x) {
    const t = a;
    await new Promise((n) => setTimeout(n, 100));
    for (const [n, e] of this[t(2369)])
      if (n === this[t(1805)]) try {
        await this[t(2082)][t(2500)](t(1311) + n, { storeName: n, sourceNodeId: this[t(1805)], stateUpdate: e.getState(), isInitialState: !0 });
      } catch {
      }
    try {
      await this.broadcastManager[t(2500)](t(1053), { fromNode: this[t(1805)], toNode: x });
    } catch {
    }
  }
  async [a(1100)](x) {
    const t = a;
    try {
      const n = this.connectionManager[t(1716)]();
      for (const e of n)
        try {
          const r = t(2361) + e, s = this[t(1540)](e);
          if (s && s[t(430)] && s.actions[r]) {
            const o = s[t(430)][r]({});
            await Promise.race([o, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (r) {
          console[t(1263)](t(1118) + e + ":", r);
        }
    } catch (n) {
      console[t(1263)](t(1013) + x + ":", n);
    }
  }
  [a(1404)](x) {
    const t = a, n = this[t(846)][t(474)](x);
    this[t(846)].delete(x), this[t(2203)][t(1885)](x), this[t(2082)][t(2292)](x), n && n.cleanup();
  }
  [a(254)](x, t) {
    const n = a;
    if (!this[n(2369)][n(474)](this[n(1805)])) throw new Error(n(467) + this[n(1805)]);
    this[n(1315)][n(449)](t), this[n(2082)].addMiddleware(x, t);
  }
  setupGraphStoreSync() {
    for (const [x, t] of this.nodeStores)
      x === this.currentNodeId ? ci({ graphInstance: this, store: t, name: x }) : oi({ graphInstance: this, store: t, name: x });
  }
  [a(1540)](x) {
    const t = a;
    if (!this.nodeProxies[t(341)](x)) {
      const n = new ii(this, x);
      this.nodeProxies[t(2663)](x, n);
    }
    return this[t(763)][t(474)](x);
  }
  getTransportInternal(x) {
    const t = a;
    return this[t(846)][t(474)](x);
  }
  [a(2520)](x) {
    const t = a, n = this[t(846)][t(474)](x);
    if (n) return { transport: n, path: [this[t(1805)], x] };
    const e = this[t(597)](this[t(1805)], x);
    if (e && e[t(1028)] > 1) {
      const r = e[1], s = this[t(846)][t(474)](r);
      if (s) return { transport: s, path: e };
    }
  }
  [a(896)](x) {
    return this[a(2369)].get(x);
  }
  get [a(768)]() {
    const x = a, t = this[x(2369)][x(474)](this.currentNodeId);
    if (!t) throw new Error(x(1107) + this.currentNodeId);
    return t;
  }
  get [a(430)]() {
    const x = a, t = this[x(2093)][x(1540)](this[x(1805)]);
    if (!t) throw new Error(x(939) + this[x(1805)]);
    return new Proxy({}, { get: (e, r) => {
      const s = x;
      if (typeof r !== s(654)) return;
      const o = t[s(430)][r];
      if (!o) throw new Error("Action " + r + s(2733) + this[s(1805)]);
      return (c, u) => {
        const d = s, f = this[d(1315)][d(2052)](r);
        if (!f) throw new Error("Action handler " + r + d(1952) + this[d(1805)]);
        const l = { nodeId: this.currentNodeId };
        if (o[d(2571)] === !0) {
          const g = f(c, l, u);
          return g && typeof g === d(513) && Symbol[d(1516)] in g ? async function* () {
            for await (const h of g)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await g;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          const g = d, h = f(c, l, u);
          if (h && typeof h === g(513) && Symbol.asyncIterator in h) {
            const m = h[Symbol[g(1516)]](), b = await m.next();
            return b[g(1135)] === void 0 ? {} : b[g(1135)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [a(796)]() {
    return this[a(2093)];
  }
  [a(2704)]() {
    return this[a(1805)];
  }
  getConnectionToNodeInternal(x) {
    return this[a(2520)](x);
  }
  [a(1695)](x, t) {
    const n = a;
    this[n(1315)][n(1695)](x, t);
  }
  destroy() {
    const x = a, t = Array[x(871)](this.nodeTransports[x(2459)]());
    for (const n of t)
      this.cleanupConnection(n);
    this[x(2082)][x(817)](), this[x(1315)].clear(), this.connectionManager[x(817)]();
  }
  findPathInternal(x, t) {
    const n = a;
    return this[n(2203)][n(1985)](x, t);
  }
  [a(1985)](x, t) {
    return this[a(597)](x, t);
  }
  async [a(2500)](x, t) {
    const n = a, e = { ...t, __origin: this.currentNodeId };
    return this.broadcastManager[n(2500)](x, e);
  }
  [a(560)](x, t) {
    this[a(2082)].registerHandler(x, t);
  }
}
function hi(i) {
  const x = new Ts(i);
  return { joinAs(t) {
    const n = W;
    if (!x.getNode(t)) throw new Error(n(770) + String(t) + " not found in graph definition");
    return new li(x, t);
  }, getDefinition() {
    return i;
  }, getNodeIds() {
    return x[W(1504)]();
  }, getNeighbors(t) {
    return x[W(2474)](t);
  }, hasEdge(t, n) {
    return x[W(2807)](t, n);
  }, hasPath(t, n) {
    return x[W(2094)](t, n);
  }, findPath(t, n) {
    return x[W(1985)](t, n);
  } };
}
const Ta = { INTERCEPTOR_ERROR: a(1658) };
var vn, bn, wn;
class Oa extends (wn = Error, bn = a(2244), vn = a(1306), wn) {
  constructor(t, n, e, r) {
    const s = a;
    super(e);
    m0(this, "type");
    m0(this, bn);
    m0(this, vn);
    this[s(2409)] = s(1749), this[s(2299)] = t, this[s(2244)] = n, this[s(1306)] = r;
  }
}
var Sn, kn, Pn, In, En, Rn, Cn;
class pi {
  constructor(x, t = {}) {
    m0(this, "protocol");
    m0(this, Cn, null);
    m0(this, Rn);
    m0(this, En, /* @__PURE__ */ new Map());
    m0(this, In, /* @__PURE__ */ new Map());
    m0(this, "outgoingRequestInterceptors", /* @__PURE__ */ new Map());
    m0(this, Pn, /* @__PURE__ */ new Map());
    m0(this, "messageHandlers", []);
    m0(this, "closeHandlers", []);
    m0(this, kn, []);
    m0(this, Sn, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    const n = a;
    this[n(2686)] = x, this[n(2393)] = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async connect(x) {
    const t = a;
    this[t(2162)] = x, x[t(2463)] = (n) => {
      this[t(2690)](n);
    }, x[t(1773)] = () => {
      const n = t;
      this[n(1635)][n(442)]((e) => e());
    }, x[t(887)] = (n) => {
      const e = t;
      this.errorHandlers[e(442)]((r) => r(n));
    }, await this.protocol.connect(this);
  }
  async handleIncomingMessage(x) {
    const t = a;
    this[t(1263)](t(1752), t(1425), x);
    try {
      if (this[t(2524)](x) && await this[t(2256)](x) || this[t(881)](x) && await this.handleIncomingNotification(x))
        return;
      this[t(719)][t(442)]((n) => n(x));
    } catch (n) {
      this[t(2818)][t(836)]++, this[t(1263)](t(1314), t(1728), n), this[t(719)].forEach((e) => e(x));
    }
  }
  async [(Cn = a(2162), Rn = a(2393), En = a(2116), In = a(1498), Pn = a(1241), kn = a(2537), Sn = a(2818), a(2256))](x) {
    const t = a, n = this.requestHandlers[t(474)](x[t(2244)]);
    if (!n) return !1;
    try {
      this[t(2818)][t(764)]++;
      const e = await n(x, {});
      return this[t(2162)] && "id" in x && await this.realTransport[t(1200)]({ jsonrpc: t(587), id: x.id, result: e }), !0;
    } catch (e) {
      return this.stats[t(836)]++, this[t(2162)] && "id" in x && await this[t(2162)][t(1200)]({ jsonrpc: t(587), id: x.id, error: { code: -32603, message: t(1312) + JSON[t(956)](x.params) + " " + e.message } }), !0;
    }
  }
  async handleIncomingNotification(x) {
    const t = a, n = this[t(1498)][t(474)](x[t(2244)]);
    if (!n) return !1;
    try {
      return this.stats[t(1908)]++, await n(x), !0;
    } catch (e) {
      return this[t(2818)][t(836)]++, this[t(1263)](t(1314), t(1903) + x.method + ":", e), !0;
    }
  }
  async [a(1200)](x) {
    const t = a;
    this[t(1263)](t(1752), "Outgoing message:", x);
    try {
      if (this[t(2524)](x)) {
        const n = await this[t(2031)](x);
        if (n[t(1868)]) {
          if (n[t(1924)] === null) return;
          n[t(1924)] && (x = { ...n[t(1924)], jsonrpc: t(587) }, this.stats.requestsIntercepted++);
        } else if (this[t(2393)][t(1770)]) this[t(1263)](t(2791), t(759) + x[t(2244)] + ":", n.error);
        else throw n[t(1314)];
      }
      if (this.isNotification(x)) {
        const n = await this[t(1689)](x);
        if (n[t(1868)]) {
          if (n[t(1924)] === null) return;
          n[t(1924)] && (x = { ...n.result, jsonrpc: t(587) }, this[t(2818)][t(2199)]++);
        } else if (this.options[t(1770)]) this[t(1263)](t(2791), t(653) + x.method + ":", n[t(1314)]);
        else throw n.error;
      }
      this.realTransport && await this[t(2162)][t(1200)](x);
    } catch (n) {
      throw this[t(2818)][t(836)]++, n;
    }
  }
  async [a(2558)]() {
    const x = a;
    this[x(2162)] && await this[x(2162)][x(2558)]();
  }
  async [a(1841)]() {
    const x = a;
    this[x(2162)] && await this[x(2162)].close();
  }
  set [a(2463)](x) {
    const t = a;
    this[t(719)] = [x];
  }
  set [a(1773)](x) {
    const t = a;
    this[t(1635)] = [x];
  }
  set [a(887)](x) {
    this.errorHandlers = [x];
  }
  async [a(2031)](x) {
    const t = a, n = this[t(2556)][t(474)](x[t(2244)]);
    if (!n) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1508)](n(x), this[t(2393)][t(1671)]) };
    } catch (e) {
      return this[t(2818)][t(836)]++, { success: !1, error: new Oa(Ta[t(2143)], x[t(2244)], t(1594) + e[t(705)], e) };
    }
  }
  async [a(1689)](x) {
    const t = a, n = this[t(1241)][t(474)](x.method);
    if (!n) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1508)](n(x), this[t(2393)].interceptorTimeout) };
    } catch (e) {
      return this[t(2818)].errors++, { success: !1, error: new Oa(Ta[t(2143)], x.method, t(2752) + e[t(705)], e) };
    }
  }
  async request(x, t) {
    const n = a;
    return await this[n(2686)][n(2698)](x, t, { timeout: 36e5 });
  }
  async [a(2336)](x) {
    const t = a;
    return await this[t(2686)][t(2336)](x);
  }
  [a(936)](x, t) {
    const n = a, e = x[n(1559)][n(2244)].value;
    this[n(2116)][n(2663)](e, t);
  }
  [a(1078)](x, t) {
    const n = a, e = x.shape[n(2244)].value;
    this[n(1498)].set(e, t);
  }
  [a(2795)](x, t) {
    const n = a, e = x[n(1559)].method[n(1135)];
    this.outgoingRequestInterceptors.set(e, t);
  }
  [a(955)](x, t) {
    const n = a, e = x[n(1559)][n(2244)][n(1135)];
    this[n(1241)].set(e, t);
  }
  [a(1087)](x) {
    const t = a;
    this.requestHandlers[t(243)](x);
  }
  [a(2442)](x) {
    this[a(1498)].delete(x);
  }
  [a(666)](x) {
    this[a(2556)].delete(x);
  }
  [a(315)](x) {
    const t = a;
    this[t(1241)][t(243)](x);
  }
  [a(1371)](x) {
    const t = a;
    return this[t(2116)][t(341)](x);
  }
  [a(2180)](x) {
    const t = a;
    return this[t(1498)][t(341)](x);
  }
  hasOutgoingRequestInterceptor(x) {
    return this.outgoingRequestInterceptors.has(x);
  }
  [a(522)](x) {
    const t = a;
    return this[t(1241)][t(341)](x);
  }
  [a(1313)]() {
    return { ...this[a(2818)] };
  }
  [a(1722)]() {
    const x = a;
    this[x(2818)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [a(787)]() {
    return this[a(2686)];
  }
  [a(2594)]() {
    const x = a;
    this[x(2116)][x(817)](), this[x(1498)].clear(), this.outgoingRequestInterceptors[x(817)](), this[x(1241)][x(817)]();
  }
  [a(2524)](x) {
    const t = a;
    return x.jsonrpc === t(587) && t(2244) in x && "id" in x;
  }
  [a(881)](x) {
    const t = a;
    return x.jsonrpc === t(587) && "method" in x && !("id" in x);
  }
  async [a(1508)](x, t) {
    const n = a, e = new Promise((r, s) => {
      const o = W;
      setTimeout(() => s(new Error(o(2289))), t);
    });
    return await Promise[n(2104)]([x, e]);
  }
  log(x, t, ...n) {
    const e = a;
    if (!this[e(2393)].debug && x === e(1752)) return;
    const r = e(1553);
    switch (x) {
      case e(1752):
        console[e(1752)](r, t, ...n);
        break;
      case "info":
        console[e(2320)](r, t, ...n);
        break;
      case e(2791):
        console[e(2791)](r, t, ...n);
        break;
      case e(1314):
        console.error(r, t, ...n);
        break;
    }
  }
}
k({ method: x0(a(2207)), params: k({ requestId: y(), data: A0(), error: y()[a(1300)](), finished: e0() }) }), k({ method: x0(a(948)), params: k({ action: y(), data: A0() }) }), k({ method: x0(a(2803)), params: k({ requestId: y() }) });
const mi = k({ method: x0("sdppp/streamResponse"), params: k({ requestId: y(), data: A0(), error: y()[a(1300)](), finished: e0() }) }), gi = k({ method: x0(a(948)), params: k({ action: y(), data: A0() }) }), yi = k({ method: x0("sdppp/abort"), params: k({ requestId: y() }) });
var Fn, Nn;
class vi {
  constructor() {
    m0(this, Nn, /* @__PURE__ */ new Map());
    m0(this, Fn, /* @__PURE__ */ new Map());
  }
  push(x) {
    const t = a, { requestId: n } = x.params, e = this[t(2040)][t(474)](n) || [], r = this[t(725)][t(474)](n) || [];
    r[t(1028)] > 0 ? r[t(966)]()(x.params) : (e[t(2037)](x.params), this[t(2040)][t(2663)](n, e));
  }
  async [(Nn = a(2040), Fn = a(725), a(1454))](x) {
    const t = a, n = this.queues.get(x) || [];
    return n[t(1028)] > 0 ? n[t(966)]() : new Promise((e) => {
      const r = t, s = this[r(725)][r(474)](x) || [];
      s[r(2037)](e), this[r(725)].set(x, s);
    });
  }
  [a(2594)](x) {
    const t = a;
    this[t(2040)][t(243)](x), this.waiters[t(243)](x);
  }
}
var qn, An, Tn;
class bi extends pi {
  constructor(t, n = {}) {
    const e = a;
    super(t, n);
    m0(this, Tn, /* @__PURE__ */ new Map());
    m0(this, An, 1);
    m0(this, qn, /* @__PURE__ */ new Map());
    m0(this, "notificationQueue", new vi());
    this[e(2784)]();
  }
  [(Tn = a(1762), An = a(1493), qn = a(2549), a(2784))]() {
    const t = a;
    this.setupStreamResponseHandler(), this[t(2378)](), this[t(868)]();
  }
  [a(1792)]() {
    const t = a;
    this[t(1078)](mi, async (n) => {
      const e = t;
      this[e(1476)][e(2037)](n);
    });
  }
  [a(2378)]() {
    const t = a;
    this[t(936)](yi, async (n, e) => {
      const r = t, { requestId: s } = n[r(1675)], o = this.runningRequests[r(474)](s);
      return o && (o[r(1607)](), this[r(2549)][r(243)](s)), { success: !0 };
    });
  }
  [a(868)]() {
    const t = a;
    this[t(936)](gi, async (n, e) => {
      const r = t, s = "req_" + this.requestIdSeq++, o = this[r(1762)][r(474)](n[r(1675)][r(1678)]);
      if (!o) throw new Error(r(2531) + n.params[r(1678)]);
      const c = new AbortController();
      return this.runningRequests.set(s, c), this[r(549)](s, o, n[r(1675)], e, c), { requestId: s };
    });
  }
  async [a(549)](t, n, e, r, s) {
    const o = a;
    try {
      const c = n(e, r, s[o(1347)]);
      for await (const u of c) {
        if (s[o(1347)][o(1452)]) break;
        await this[o(2336)]({ method: o(2207), params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !s.signal[o(1452)] && await this.notification({ method: "sdppp/streamResponse", params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !s.signal[o(1452)] && await this[o(2336)]({ method: o(2207), params: { requestId: t, data: null, error: c[o(705)], finished: !0 } });
    } finally {
      this[o(2549)][o(243)](t);
    }
  }
  [a(2212)](t, n) {
    const e = a;
    this[e(1762)][e(2663)](t[e(1559)][e(1678)].value, n);
  }
  async streamRequest(t, n, e) {
    const r = a;
    this[r(1789)](e);
    const s = await this[r(2249)](t), o = this[r(1849)](s), c = this[r(2337)]();
    return this[r(2478)](o, c, s, e);
  }
  [a(1789)](t) {
    if (t && t.aborted) throw new Error("AbortSignal is already aborted");
  }
  async [a(2249)](t) {
    const n = a;
    return (await this.request({ method: n(948), params: { action: t.action, data: t[n(2584)] } }, k({ requestId: y() }))).requestId;
  }
  [a(1849)](t) {
    return this[a(1476)];
  }
  [a(2337)]() {
    return { finished: !1, error: null };
  }
  createAsyncIterator(t, n, e, r) {
    const s = a, o = this;
    return { async *[Symbol[s(1516)]]() {
      const c = s;
      try {
        for (; !n[c(2561)] && !n[c(1314)]; ) {
          if (r && r[c(1452)])
            throw await o[c(2698)]({ method: c(2803), params: { requestId: e } }, k({ success: e0() })), new Error(c(2213));
          const u = await t[c(1454)](e);
          if (u[c(1314)])
            throw n[c(1314)] = u[c(1314)], new Error(u[c(1314)]);
          if (u.finished) {
            n[c(2561)] = !0;
            break;
          }
          u[c(2584)] !== null && (yield u[c(2584)]);
        }
      } finally {
        t[c(2594)](e);
      }
    } };
  }
  [a(1269)]() {
    const t = a;
    return this[t(2549)][t(524)];
  }
  async [a(1826)](t) {
    const n = a, e = this[n(2549)].get(t);
    return e ? (e[n(1607)](), this.runningRequests[n(243)](t), !0) : !1;
  }
  [a(451)]() {
    const t = a;
    for (const [n, e] of this[t(2549)])
      e[t(1607)]();
    this.runningRequests[t(817)]();
  }
  [a(2594)]() {
    const t = a;
    super.cleanup(), this.abortAllRequests(), this.streamRequestorHandlers[t(817)]();
  }
}
k({ id: y(), method: y(), params: A0().optional(), traceId: y()[a(612)]() }), k({ id: y(), result: A0()[a(612)](), error: k({ code: K(), message: y(), data: A0()[a(612)]() })[a(612)]() }), k({ method: y(), params: A0().optional() }), k({ method: x0(a(948)), params: k({ action: y(), data: A0() }) }), k({ method: x0(a(2207)), params: k({ requestId: y(), data: A0()[a(612)](), error: y().nullable()[a(612)](), finished: e0()[a(574)](!1) }) }), k({ method: x0(a(2803)), params: k({ requestId: y() }) }), k({ method: x0(a(2593)), params: k({ messageType: y(), message: A0() }) });
function zn(i) {
  const x = a;
  return i && i.__esModule && Object[x(983)][x(894)][x(1138)](i, "default") ? i[x(574)] : i;
}
const Ne = k({ leftDistance: K(), topDistance: K(), rightDistance: K(), bottomDistance: K(), width: K(), height: K() }), Ce = { name: y(), uiWeight: K() }, wi = k({ ...Ce, outputType: x0("images"), options: k({ required: e0(), maxCount: K()[a(612)](), maskMode: e0().optional() }) }), Si = k({ ...Ce, outputType: x0(a(2739)), options: k({ required: e0() }) }), ki = k({ ...Ce, outputType: x0("string"), options: k({ required: e0() }) }), Pi = k({ ...Ce, outputType: x0(a(781)), options: k({ required: e0() }) }), Ii = k({ ...Ce, outputType: x0(a(536)), options: k({ required: e0(), min: K()[a(612)](), max: K()[a(612)](), step: K().optional(), random: e0()[a(612)](), slider: e0()[a(612)]() }) }), Ei = k({ ...Ce, outputType: x0(a(1187)), options: k({ required: e0(), values: b0(y()), labels: b0(y())[a(612)]() }) }), Ri = k({ ...Ce, outputType: x0(a(1939)), options: k({ required: e0(), values: b0(y()) }) }), Ci = k({ ...Ce, outputType: x0(a(2285)), options: k({ required: e0() }) }), Fi = Mn(a(875), [wi, Si, ki, Pi, Ii, Ei, Ri, Ci]), Ni = k({ id: y(), title: y(), widgets: b0(Fi), uiWeightSum: K() }), qi = k({ widgetableID: y(), widgetablePath: y(), nodes: H0(y(), Ni), nodeIndexes: b0(y()), note: y()[a(612)](), options: H0(y(), A0()) }), Ai = k({ widgetableStructure: qi[a(574)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: H0(y(), b0(A0()))[a(574)]({}), widgetableErrors: H0(y(), y())[a(574)]({}), queueSize: K().default(0), lastError: y()[a(574)](""), progress: K().default(0), executingNodeTitle: y().default(""), executingNodeID: y().default(""), graphProgress: K()[a(574)](0), comfyUserToken: y().default(""), comfyOrgLoggedIn: e0()[a(574)](!1), comfyOrgAPIKey: y()[a(574)](""), comfyWSState: I0([a(2265), "reconnecting"])[a(574)](a(2265)), lastRunTime: K()[a(574)](0) }), Ti = k({ bannerData: A0().optional(), refreshable: e0()[a(574)](!1), backwardable: e0()[a(574)](!1), loginable: e0()[a(574)](!1), runnable: e0()[a(574)](!1), workBoundaries: H0(K(), Ne).default({}), workBoundaryMaxSizes: H0(K(), K())[a(574)]({}) }), Oi = k({ uname: y().default(""), activeDocumentID: K()[a(574)](0), layers: b0(k({ id: K(), name: y(), identify: y() })).default([]), actions: b0(y()).default([]), theme: y()[a(574)](a(2305)), sdpppX: H0(y(), A0())[a(574)]({}), locale: I0([a(1131), a(944)])[a(574)]("en-US"), comfyWebviewConnectStatus: I0([a(1714), a(2265), a(2379)])[a(574)](a(2379)), comfyWebviewLoadError: y()[a(574)](""), comfyWebviewLoading: e0()[a(574)](!1), comfyWebviewVersion: y()[a(574)](""), comfyHTTPCode: K().default(200), comfyURL: y()[a(574)](""), sdkWebviewFocusing: e0().default(!1), sdkWebviewConnectStatus: I0([a(1714), a(2265), "disconnected"])[a(574)]("disconnected"), isLogin: e0()[a(574)](!1), isGuest: e0().default(!1), requestingLogin: e0().default(!1), loginMessage: y().default(""), token: y()[a(574)](""), userInfo: H0(y(), A0())[a(574)]({}), taskLastRun: K().default(0), canvasStateID: K()[a(612)](), selectionStateID: y()[a(612)](), selectionBoundary: Ne.nullable()[a(612)](), canvasThumbnail: y()[a(574)](""), curlayerThumbnail: y()[a(574)]("") }), Di = { setNodeTitle: { requestSchema: k({ node_id: y(), title: y() }), responseSchema: k({ success: e0() }) }, reboot: { requestSchema: k({}), responseSchema: k({ success: e0(), error: y()[a(612)]() }) }, setComfyOrgAPIKey: { requestSchema: k({ api_key: y() }), responseSchema: k({ success: e0() }) }, logout: { requestSchema: k({}), responseSchema: k({ success: e0() }) }, uploadComfyImageFromUXP: { requestSchema: k({ fileName: y(), overwrite: e0()[a(612)](), mimeType: y().optional(), dataBase64: y() }), responseSchema: k({ name: y() }) }, sdpppHandshake: { requestSchema: k({ hostVersion: y().optional() }), responseSchema: k({ comfyVersion: y(), hostVersion: y()[a(612)]() }) } }, ji = k({ workflows: b0(y()), error: y().optional() }), Li = k({ success: e0(), nodeErrors: H0(y()).optional(), prompt_ids: b0(y())[a(612)](), images: b0(k({ url: y(), thumbnail: y() }))[a(612)]() }), Mi = { setWidgetValue: { requestSchema: k({ values: b0(k({ nodeID: y(), widgetIndex: K(), value: H0(y(), A0()).or(y()).or(K()).or(e0()).or(b0(A0())) })) }), responseSchema: k({ success: e0() }) }, openWorkflow: { requestSchema: k({ workflow_path: y(), reset: e0()[a(574)](!1) }), responseSchema: k({ success: e0() }) }, openWorkflowJSON: { requestSchema: k({ workflow_content: H0(A0()), workflow_path: y() }), responseSchema: k({ success: e0() }) }, listWorkflows: { requestSchema: k({ listMode: y()[a(612)](), sdpppID: y()[a(612)](), sdpppToken: y().optional() }), responseSchema: ji }, saveWorkflow: { requestSchema: k({ workflow_path: y(), from_sid: y()[a(612)]() }), responseSchema: k({ success: e0() }) }, run: { requestSchema: k({ size: K() }), responseSchema: Li, stream: !0 }, stopAll: { requestSchema: k({}), responseSchema: k({ success: e0() }) } }, $i = { backward: { requestSchema: Hx(), responseSchema: k({ success: e0() }) }, refresh: { requestSchema: Hx(), responseSchema: k({ success: e0() }) }, run: { requestSchema: Hx(), responseSchema: k({ success: e0() }) } }, zi = k({ passwordPayload: k({ username: y(), password: y() }).or(k({ email: y(), password: y() })).or(k({ phone: y(), password: y() })).or(k({ identifier: y(), password: y() })) }).or(k({ passcodePayload: k({ phone: y(), code: y() }).or(k({ email: y(), code: y() })) })), Hi = k({ passwordPayload: k({ username: y(), password: y() }).or(k({ email: y(), password: y() })).or(k({ phone: y(), password: y() })).or(k({ identifier: y(), password: y() })) }).or(k({ passcodePayload: k({ phone: y(), code: y() }).or(k({ email: y(), code: y() })) })), Ui = { register: { requestSchema: zi, responseSchema: k({}) }, login: { requestSchema: Hi, responseSchema: k({}) }, sendPassCode: { requestSchema: k({ phone: y()[a(612)](), email: y()[a(612)]() }), responseSchema: k({}) }, logout: { requestSchema: k({}), responseSchema: k({}) }, guestLogin: { requestSchema: k({}), responseSchema: k({}) } };
k({ resource: y()[a(612)](), thumbnail: y().optional(), width: K()[a(612)](), height: K().optional(), mimeType: y()[a(612)](), source: y()[a(612)](), error: y()[a(612)]() }), k({ boundary: I0([a(408), a(1278), a(255)]), content: I0(["canvas", a(1278), a(255)]).or(y()), imageSize: K(), imageQuality: K(), cropBySelection: I0(["no", a(1502), "negative"]), layer_identify: y()[a(1300)]().optional() }), k({ content: I0([a(408), a(1278), a(255)]), reverse: e0(), imageSize: K(), layer_identify: y()[a(1300)]().optional() }), k({ selection: I0(["newdoc_canvas", "newlayer_canvas", a(1520), a(1909), "curlayer_canvas", a(1645), a(957), "newdoc_canvas"]), url: y(), source: y(), cropBySelection: I0(["no", a(1502), a(282)]) });
const Vi = { downloadImage: { requestSchema: k({ url: y() }), responseSchema: k({ thumbnail: y()[a(612)](), resource: y()[a(612)](), width: K()[a(612)](), height: K()[a(612)](), error: y()[a(612)]() }) }, getThumbnail: { requestSchema: k({ resource: y(), maxSize: K()[a(612)]() }), responseSchema: k({ thumbnail: y().optional(), width: K()[a(612)](), height: K()[a(612)](), error: y().optional() }) }, deleteDownloadedImage: { requestSchema: k({ resources: b0(y()) }), responseSchema: k({ error: y().optional() }) }, requestAndDoSaveImage: { requestSchema: k({ resources: b0(y()) }), responseSchema: k({ error: y()[a(612)]() }) } }, Zi = { manageGuides: { requestSchema: k({ action: I0([a(1644), "clear"]), rect: Ne[a(612)]() }), responseSchema: k({ success: e0() }) }, getBoundary: { requestSchema: k({ type: I0(["curlayer", "selection"]) }), responseSchema: Ne }, getImage: { requestSchema: k({ boundary: B0([I0([a(408), "curlayer", a(255)]), Ne]), content: B0([I0([a(408), a(1278)]), y()]), imageSize: K(), imageQuality: K(), cropBySelection: I0(["no", a(1502), a(282)]), SkipNonNormalLayer: e0(), layer_identify: y()[a(1300)]()[a(612)]() }), responseSchema: k({ resource: y().optional(), thumbnail: y()[a(612)](), width: K()[a(612)](), height: K()[a(612)](), mimeType: y()[a(612)](), source: y().optional(), error: y()[a(612)]() }) }, getMask: { requestSchema: k({ boundary: B0([I0(["canvas", a(1278), a(255)]), Ne]), content: I0(["canvas", a(1278), a(255)]), reverse: e0(), imageSize: K(), layer_identify: y()[a(1300)]().optional() }), responseSchema: k({ resource: y().optional(), thumbnail: y()[a(612)](), width: K()[a(612)](), height: K()[a(612)](), mimeType: y()[a(612)](), source: y()[a(612)](), error: y()[a(612)]() }) }, getCurrentLayerIdentify: { requestSchema: k({}), responseSchema: k({ layer_identify: y()[a(1300)]() }) }, importImage: { requestSchema: k({ resource: y(), boundary: B0([I0(["canvas", a(1278), a(255)]), Ne]).optional(), type: I0([a(408), a(1278), "newdoc", a(1624)]), sourceWidth: K().optional(), sourceHeight: K()[a(612)]() }), responseSchema: k({ success: e0(), layers: b0(k({ identify: y() })).optional(), message: y()[a(612)](), error: y()[a(612)]() }) }, applyMaskToImage: { requestSchema: k({ imageResource: y(), maskResource: y(), invertMask: e0()[a(612)]() }), responseSchema: k({ resource: y(), thumbnail: y()[a(612)](), width: K(), height: K(), mimeType: y() }) }, showBoundarySelectionDialog: { requestSchema: k({ additionalData: H0(A0()).optional() }), responseSchema: k({ boundary: I0(["canvas", "curlayer", a(255)])[a(612)](), cancelled: e0()[a(612)]() }) }, selectImageSource: { requestSchema: k({ additionalData: H0(A0()).optional() }), responseSchema: k({ action: I0([a(340), a(2218)])[a(612)](), params: A0().optional(), cancelled: e0().optional() }) }, selectContentSource: { requestSchema: k({ additionalData: H0(A0())[a(612)]() })[a(612)](), responseSchema: k({ resource: y().optional(), fileName: y()[a(612)](), mimeType: y().optional(), size: K()[a(612)](), layerIdentify: y()[a(612)](), cancelled: e0()[a(612)]() }) } }, Ux = k({ taskId: y(), taskName: y(), status: I0(["running", "completed", "failed", a(1069)]), currentStep: K().optional(), totalSteps: K().optional(), stepDescription: y()[a(612)](), progressPercentage: K().min(0)[a(1828)](100)[a(612)](), startTime: y(), endTime: y()[a(612)](), error: y()[a(612)](), errorCode: y()[a(612)](), result: A0()[a(612)](), metadata: H0(A0())[a(612)]() }), Vx = k({ success: e0(), error: y()[a(612)]() }), _i = { taskAdd: { requestSchema: Ux, responseSchema: Vx }, taskUpdate: { requestSchema: Ux[a(1230)]()[a(1370)]({ taskId: !0 }), responseSchema: Vx }, taskRemove: { requestSchema: Ux[a(472)]({ taskId: !0 }), responseSchema: Vx } }, Bi = { log: { requestSchema: k({ level: I0([a(1263), "info", a(2791), a(1314)]), messages: b0(y()) }), responseSchema: k({}) }, openExternalLink: { requestSchema: k({ url: y() }), responseSchema: k({ error: y()[a(612)]() }) }, getStorage: { requestSchema: k({ key: y() }), responseSchema: k({ value: y(), error: y()[a(612)]() }) }, setStorage: { requestSchema: k({ key: y(), value: y() }), responseSchema: k({ error: y()[a(612)]() }) }, removeStorage: { requestSchema: k({ key: y() }), responseSchema: k({ error: y()[a(612)]() }) }, keyboardAction: { requestSchema: k({ keycode: y() }), responseSchema: k({}) }, setComfyWebviewURL: { requestSchema: k({ url: y() }), responseSchema: k({}) }, getImageBase64: { requestSchema: k({ token: y() }), responseSchema: k({ base64: y()[a(612)](), mimeType: y()[a(612)](), error: y()[a(612)]() }) }, uploadComfyImage: { requestSchema: k({ uploadInput: k({ type: B0([x0(a(1824)), x0(a(2124)), x0(a(335))]), resource: A0(), fileName: y(), mimeType: y()[a(612)](), resourceId: y()[a(612)]() }), overwrite: e0()[a(612)]()[a(574)](!0) }), responseSchema: k({ name: y() }) }, pickLocalFile: { requestSchema: k({ acceptExtensions: b0(y())[a(612)](), kind: I0([a(1957), a(742)])[a(612)]() })[a(612)](), responseSchema: k({ cancelled: e0().optional(), resource: y().optional(), fileName: y()[a(612)](), mimeType: y()[a(612)](), size: K()[a(612)](), error: y().optional() }) }, proxiedFetch: { requestSchema: k({ url: y(), method: y()[a(612)](), headers: H0(y())[a(612)](), body: A0().optional(), bodyType: I0([a(1335), a(1143), a(1990)])[a(612)]() }), responseSchema: k({ success: e0(), status: K()[a(612)](), statusText: y().optional(), headers: H0(y())[a(612)](), data: A0().optional(), error: y().optional() }) }, openaiImageEdit: { requestSchema: k({ apiKey: y(), baseURL: y(), imageToken: y(), prompt: y(), model: y() }), responseSchema: k({ success: e0(), imageUrl: y().optional(), apiTime: K()[a(612)](), error: y()[a(612)]() }) }, geminiImageGenerate: { requestSchema: k({ apiKey: y(), baseURL: y()[a(612)](), imageInputs: b0(y())[a(612)](), imageInput: y()[a(612)](), imageInputType: I0([a(2124), a(1595)]), prompt: y() }), responseSchema: k({ success: e0(), imageUrl: y().optional(), apiTime: K().optional(), error: y()[a(612)]() }) } }, Wi = B0([y(), zx(Uint8Array), zx(ArrayBuffer), zx(DataView)]), Ki = k({ buffer: Wi, name: y().nullable()[a(612)](), mime: y()[a(1300)]().optional(), width: K()[a(1300)]()[a(612)](), height: K()[a(1300)]()[a(612)](), thumbnail: y()[a(1300)]().optional(), meta: H0(Me()).optional() }), Gi = { "fileResource.createFromExternal": { requestSchema: k({ url: y() }), responseSchema: k({ resource: y()[a(612)](), thumbnail: y()[a(612)](), width: K().optional(), height: K()[a(612)](), mime: y()[a(612)](), mimeType: y()[a(612)](), error: y()[a(612)]() }) }, "fileResource.createFromLocal": { requestSchema: k({ types: b0(k({ description: y().optional(), extensions: b0(y())[a(612)]() }))[a(612)]() }), responseSchema: k({ resource: y()[a(612)](), thumbnail: y()[a(612)](), width: K().optional(), height: K()[a(612)](), mime: y()[a(612)](), error: y()[a(612)]() }) }, "fileResource.createFromBuffer": { requestSchema: k({ files: b0(Ki)[a(1482)](1) }), responseSchema: k({ resource: y().optional(), thumbnail: y().optional(), width: K().optional(), height: K()[a(612)](), mime: y()[a(612)](), error: y()[a(612)]() }) }, "fileResource.createFromCBM": { requestSchema: k({ contentUri: y()[a(612)](), boundaryUri: y()[a(612)](), maskUri: y()[a(612)](), options: H0(Me())[a(612)]() }), responseSchema: k({ resource: y().optional(), thumbnail: y()[a(612)](), width: K().optional(), height: K()[a(612)](), mime: y()[a(612)](), error: y()[a(612)]() }) }, "fileResource.delete": { requestSchema: k({ resources: b0(y()) }), responseSchema: k({ error: y()[a(612)]() }) }, "fileResource.thumbnail": { requestSchema: k({ resource: y(), maxSize: K().optional() }), responseSchema: k({ thumbnail: y().optional(), width: K()[a(612)](), height: K()[a(612)](), error: y()[a(612)]() }) }, "fileResource.saveAs": { requestSchema: k({ resources: b0(y()) }), responseSchema: k({ error: y()[a(612)]() }) }, "boundary.normalize": { requestSchema: k({ boundary: y() }), responseSchema: k({ boundary: y()[a(612)](), error: y()[a(612)]() }) }, "layer.resolve": { requestSchema: k({ uri: y(), type: I0(["content", "mask"]) }), responseSchema: k({ uri: y()[a(612)](), error: y().optional() }) } }, Ji = hi({ nodes: { sdk: { store: Ti, actions: { ...$i } }, uxp: { store: Oi, actions: { ...Vi, ...Gi, ...Bi, ...Ui, ..._i, ...Zi } }, comfy: { store: Ai, actions: { ...Mi, ...Di } } }, edges: [[a(2313), a(510)], [a(2783), a(510)]] }), E0 = Ji[a(922)](a(2783));
globalThis.mcpMesh = E0;
var lx = { exports: {} }, Zx, Da;
function Qi() {
  if (Da) return Zx;
  Da = 1;
  var i = 1e3, x = i * 60, t = x * 60, n = t * 24, e = n * 7, r = n * 365.25;
  Zx = function(d, f) {
    const l = W;
    f = f || {};
    var g = typeof d;
    if (g === l(654) && d[l(1028)] > 0) return s(d);
    if (g === l(536) && isFinite(d)) return f.long ? c(d) : o(d);
    throw new Error(l(1162) + JSON[l(956)](d));
  };
  function s(d) {
    const f = W;
    if (d = String(d), !(d[f(1028)] > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[f(1878)](d);
      if (l) {
        var g = parseFloat(l[1]), h = (l[2] || "ms")[f(1268)]();
        switch (h) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return g * r;
          case f(2049):
          case "week":
          case "w":
            return g * e;
          case f(2671):
          case f(2447):
          case "d":
            return g * n;
          case f(416):
          case f(2324):
          case "hrs":
          case "hr":
          case "h":
            return g * t;
          case f(1648):
          case f(356):
          case f(434):
          case f(1482):
          case "m":
            return g * x;
          case f(2061):
          case "second":
          case f(2607):
          case f(1043):
          case "s":
            return g * i;
          case f(2652):
          case f(1204):
          case f(1994):
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
    const f = W;
    var l = Math[f(1382)](d);
    return l >= n ? Math[f(626)](d / n) + "d" : l >= t ? Math[f(626)](d / t) + "h" : l >= x ? Math[f(626)](d / x) + "m" : l >= i ? Math[f(626)](d / i) + "s" : d + "ms";
  }
  function c(d) {
    const f = W;
    var l = Math[f(1382)](d);
    return l >= n ? u(d, l, n, f(2447)) : l >= t ? u(d, l, t, f(2324)) : l >= x ? u(d, l, x, f(356)) : l >= i ? u(d, l, i, f(1362)) : d + f(1316);
  }
  function u(d, f, l, g) {
    var h = f >= l * 1.5;
    return Math.round(d / l) + " " + g + (h ? "s" : "");
  }
  return Zx;
}
var _x, ja;
function Xi() {
  if (ja) return _x;
  ja = 1;
  function i(x) {
    const t = W;
    e[t(1752)] = e, e[t(574)] = e, e[t(2101)] = d, e[t(2111)] = c, e[t(696)] = s, e[t(273)] = u, e[t(1776)] = Qi(), e[t(1499)] = f, Object[t(2459)](x).forEach((l) => {
      e[l] = x[l];
    }), e[t(1003)] = [], e[t(288)] = [], e.formatters = {};
    function n(l) {
      const g = t;
      let h = 0;
      for (let m = 0; m < l[g(1028)]; m++)
        h = (h << 5) - h + l[g(1235)](m), h |= 0;
      return e[g(1276)][Math[g(1382)](h) % e.colors.length];
    }
    e.selectColor = n;
    function e(l) {
      const g = t;
      let h, m = null, b, S;
      function P(...q) {
        const A = W;
        if (!P[A(273)]) return;
        const R = P, I = Number(/* @__PURE__ */ new Date()), C = I - (h || I);
        R[A(2290)] = C, R[A(470)] = h, R.curr = I, h = I, q[0] = e[A(2101)](q[0]), typeof q[0] !== A(654) && q.unshift("%O");
        let O = 0;
        q[0] = q[0][A(2735)](/%([a-zA-Z%])/g, (M, F) => {
          const N = A;
          if (M === "%%") return "%";
          O++;
          const z = e[N(1176)][F];
          if (typeof z == "function") {
            const U = q[O];
            M = z[N(1138)](R, U), q[N(2406)](O, 1), O--;
          }
          return M;
        }), e[A(795)][A(1138)](R, q), (R[A(1263)] || e.log)[A(1104)](R, q);
      }
      return P.namespace = l, P[g(604)] = e[g(604)](), P[g(446)] = e.selectColor(l), P[g(2761)] = r, P[g(1499)] = e[g(1499)], Object.defineProperty(P, "enabled", { enumerable: !0, configurable: !1, get: () => {
        const q = g;
        return m !== null ? m : (b !== e.namespaces && (b = e[q(264)], S = e[q(273)](l)), S);
      }, set: (q) => {
        m = q;
      } }), typeof e[g(2012)] === g(2189) && e.init(P), P;
    }
    function r(l, g) {
      const h = t, m = e(this[h(2359)] + (typeof g > "u" ? ":" : g) + l);
      return m[h(1263)] = this[h(1263)], m;
    }
    function s(l) {
      const g = t;
      e[g(2072)](l), e[g(264)] = l, e[g(1003)] = [], e[g(288)] = [];
      const h = (typeof l == "string" ? l : "")[g(977)]()[g(2735)](/\s+/g, ",")[g(2742)](",")[g(1001)](Boolean);
      for (const m of h)
        m[0] === "-" ? e.skips.push(m[g(2460)](1)) : e[g(1003)][g(2037)](m);
    }
    function o(l, g) {
      const h = t;
      let m = 0, b = 0, S = -1, P = 0;
      for (; m < l[h(1028)]; )
        if (b < g[h(1028)] && (g[b] === l[m] || g[b] === "*")) g[b] === "*" ? (S = b, P = m, b++) : (m++, b++);
        else if (S !== -1) b = S + 1, P++, m = P;
        else return !1;
      for (; b < g[h(1028)] && g[b] === "*"; )
        b++;
      return b === g[h(1028)];
    }
    function c() {
      const l = t, g = [...e.names, ...e[l(288)][l(2348)]((h) => "-" + h)].join(",");
      return e[l(696)](""), g;
    }
    function u(l) {
      const g = t;
      for (const h of e[g(288)])
        if (o(l, h)) return !1;
      for (const h of e[g(1003)])
        if (o(l, h)) return !0;
      return !1;
    }
    function d(l) {
      const g = t;
      return l instanceof Error ? l[g(2304)] || l[g(705)] : l;
    }
    function f() {
      console.warn(t(2226));
    }
    return e[t(696)](e[t(2747)]()), e;
  }
  return _x = i, _x;
}
function W(i, x) {
  const t = qx();
  return W = function(n, e) {
    return n = n - 235, t[n];
  }, W(i, x);
}
var La;
function Yi() {
  const i = a;
  return La || (La = 1, function(x, t) {
    const n = i;
    t[n(795)] = r, t[n(2072)] = s, t[n(2747)] = o, t.useColors = e, t.storage = c(), t[n(1499)] = /* @__PURE__ */ (() => {
      let d = !1;
      return () => {
        const f = W;
        !d && (d = !0, console[f(2791)](f(2226)));
      };
    })(), t.colors = [n(1334), "#0000FF", n(593), "#0033FF", n(2264), n(2130), "#0099CC", n(433), n(1904), n(1360), n(2011), n(1232), n(1125), "#00CCFF", n(1254), "#3300FF", "#3333CC", n(2534), n(975), "#3366FF", n(378), n(2355), n(2574), "#33CC33", n(1302), n(1519), n(838), n(756), n(1433), "#6600FF", n(2788), n(1757), "#66CC00", n(2610), n(2602), n(676), n(2002), n(1922), "#99CC00", n(569), n(2018), n(2660), "#CC0066", "#CC0099", n(1459), n(1735), n(369), "#CC3333", n(1011), n(1109), n(989), n(1863), "#CC6600", n(2099), n(880), n(2562), n(2711), "#CCCC33", "#FF0000", n(2718), n(1128), n(828), "#FF00CC", n(2762), "#FF3300", n(2621), n(2495), "#FF3399", n(2519), n(1700), n(754), n(2667), "#FF9900", n(1322), n(1699), "#FFCC33"];
    function e() {
      const d = n;
      if (typeof window < "u" && window[d(2670)] && (window[d(2670)][d(2299)] === d(681) || window.process[d(1123)])) return !0;
      if (typeof navigator !== d(1210) && navigator[d(1070)] && navigator.userAgent.toLowerCase()[d(1325)](/(edge|trident)\/(\d+)/)) return !1;
      let f;
      return typeof document !== d(1210) && document[d(1015)] && document[d(1015)][d(1890)] && document[d(1015)].style.WebkitAppearance || typeof window !== d(1210) && window[d(2126)] && (window[d(2126)][d(350)] || window.console.exception && window[d(2126)][d(1292)]) || typeof navigator < "u" && navigator[d(1070)] && (f = navigator[d(1070)][d(1268)]()[d(1325)](/firefox\/(\d+)/)) && parseInt(f[1], 10) >= 31 || typeof navigator !== d(1210) && navigator[d(1070)] && navigator[d(1070)][d(1268)]()[d(1325)](/applewebkit\/(\d+)/);
    }
    function r(d) {
      const f = n;
      if (d[0] = (this[f(604)] ? "%c" : "") + this.namespace + (this[f(604)] ? " %c" : " ") + d[0] + (this.useColors ? "%c " : " ") + "+" + x[f(1949)][f(1776)](this[f(2290)]), !this[f(604)]) return;
      const l = "color: " + this[f(446)];
      d[f(2406)](1, 0, l, f(486));
      let g = 0, h = 0;
      d[0][f(2735)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (g++, m === "%c" && (h = g));
      }), d[f(2406)](h, 0, l);
    }
    t[n(1263)] = console.debug || console.log || (() => {
    });
    function s(d) {
      const f = n;
      try {
        d ? t[f(380)].setItem(f(1752), d) : t.storage[f(2577)]("debug");
      } catch {
      }
    }
    function o() {
      const d = n;
      let f;
      try {
        f = t[d(380)].getItem(d(1752)) || t.storage.getItem(d(305));
      } catch {
      }
      return !f && typeof process !== d(1210) && "env" in process && (f = process[d(1213)][d(305)]), f;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x[n(1949)] = Xi()(t);
    const { formatters: u } = x[n(1949)];
    u.j = function(d) {
      const f = n;
      try {
        return JSON[f(956)](d);
      } catch (l) {
        return f(1286) + l.message;
      }
    };
  }(lx, lx[i(1949)])), lx[i(1949)];
}
var eo = Yi();
const Hn = zn(eo);
Hn[a(696)]("*");
function xo(i, x) {
  const t = Hn(i), n = (e, r) => async function(...s) {
    try {
      await x({ level: e, messages: s });
    } catch {
    }
  };
  return t.log = n("log"), t;
}
const sx = xo(a(2309), async ({ level: i, messages: x }) => {
  const t = a, { mcpMesh: n } = await Promise[t(2272)]()[t(1463)](() => Uc);
  await n.getNode(t(510))[t(430)].log({ level: i, messages: x });
});
globalThis[a(508)] = globalThis[a(508)] || {};
const Ye = globalThis[a(508)], to = { "preview.show": a(2241), "gateway.select_ai_service": a(1267), "provider.select.title": a(575), "provider.comfyui.description": a(649), "provider.replicate.description": a(1093), "provider.runninghub.description": "模型物美价廉，海量社区应用", "provider.google.description": "OpenAI/Google 格式API", "task.waiting_upload": a(1049), "task.creating_task": a(1083), "task.running_duration": "运行了 {{duration}} 秒，{{message}}", "task.cancelled": a(2160), "task.cancel_failed": a(1199), "task.default_name": a(727), "comfy.connect": "连接", "comfy.load_failed": "ComfyUI加载失败，HTTP状态码：{{code}}", "comfy.loading": a(2635), "comfy.channel_connecting": a(864), "comfy.server_reconnecting": a(571), "comfy.version_mismatch": a(2759), "comfy.cloud_recommend": a(1139), "comfy.your_workflows": "你的工作流", "comfy.refresh_workflows": a(372), "comfy.queue_progress": "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": "停止并取消全部", "comfy.stop_auto_run": a(1626), "comfy.start_auto_run": a(2077), "comfy.auto_run_status": a(278), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": "正在上传...", "comfy.task.name": a(1705), "comfy.error.task_cancelled": a(2160), "comfy.task.processing_progress": a(1767), "comfy.help_tooltip": "使用教程", "comfy.no_workflow_selected": "未选择工作流", "boundary.title": a(1524), "boundary.tooltip": a(1603), "boundary.current_canvas": a(623), "boundary.current_layer": a(1224), "boundary.current_selection": "当前选区", "boundary.set_as_canvas": a(2251), "boundary.set_as_layer": a(2620), "boundary.set_as_selection": a(2095), "http.404": a(1112), "http.401": "未授权 (401)", "http.403": a(2155), "http.408": a(1010), "http.500": a(1680), "http.501": a(1304), "http.502": a(361), "http.503": a(2572), "http.504": "网关超时 (504)", "http.unknown": "未知错误（{{code}}）", "runninghub.get_apikey": a(1130), "runninghub.apikey_placeholder": a(2055), "runninghub.app_id": a(469), "runninghub.webapp_id_placeholder": a(1753), "runninghub.open_app": "按回车打开应用： {{appName}}", "runninghub.execute": "执行", "runninghub.running": "运行中...", "runninghub.rh_coins": a(2216), "runninghub.current_tasks": "当前任务数:", "runninghub.help_tooltip": a(2071), "runninghub.stop_all": "停止全部", "runninghub.status.waiting": a(2497), "runninghub.status.running": a(1465), "runninghub.status.failed": "执行失败", "runninghub.status.success": a(2317), "image.auto_refetch": a(662), "local_resource.selection.images": "图片", "runninghub.error.get_result_failed": a(1992), "runninghub.error.task_failed": "任务执行失败: {{error}}", "runninghub.error.task_incomplete": a(1672), "runninghub.error.account_status_http": a(1432), "runninghub.error.account_status_reason_unknown": "获取账户信息失败", "runninghub.error.account_status_failed": "getAccountStatus API 调用失败 - {{reason}}", "runninghub.error.form_data_http": a(2461), "runninghub.error.form_data_reason_unknown": a(2609), "runninghub.error.form_data_failed": a(1717), "runninghub.error.node_info_missing": a(1701), "runninghub.error.run_http": "run API 调用失败 - HTTP 错误，状态: {{status}}", "runninghub.error.run_reason_default": a(855), "runninghub.error.run_failed": a(1173), "runninghub.error.status_http": "status API 调用失败 - HTTP 错误，状态: {{status}}", "runninghub.error.status_reason_unknown": "获取任务状态失败", "runninghub.error.status_failed": "status API 调用失败 - {{reason}}", "runninghub.error.outputs_http": a(1178), "runninghub.error.outputs_failed": a(447), "runninghub.task.title": a(1188), "runninghub.error.upload_http": a(709), "runninghub.error.upload_reason_unknown": a(1393), "runninghub.error.upload_failed": a(556), "customapi.error.no_image_returned": "未返回图片", "customapi.error.openai_api": a(240), "customapi.error.input_required": a(716), "customapi.error.generation_failed": a(256), "customapi.task.name.google": a(2419), "customapi.task.name.openai": a(1408), "customapi.error.unsupported_image_input": a(489), "replicate.get_apikey": a(926), "replicate.apikey_placeholder": a(812), "replicate.execute": "执行", "replicate.model_placeholder": a(337), "replicate.help_tooltip": a(2071), "replicate.loading": a(2400), "replicate.running": a(1933), "replicate.stop": "停止", "liblib.get_apikey": a(2117), "liblib.execute": "执行", "common.close": "关闭", "common.save": "保存", "common.save_and_run": "保存并立即执行", "common.loading": "加载中...", "common.error": "错误", "common.error.unknown": a(1115), "common.error.task_creation_aborted": a(1310), "common.error.status_check_aborted": a(1260), "common.error.result_fetch_aborted": a(2617), "common.error.upload_aborted": a(1447), "common.success": "成功", "common.failed": "失败", "common.generating": a(360), "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": a(2492), "upload_pass.error.unsupported_type": "不支持的上传类型：{{type}}", "upload_pass.error.uploader_missing": a(2004), webviewInForeground: a(2614), webviewInForeground2: a(1375), "auth.login_success": a(1379), "auth.username_label": a(1384), "auth.email_label": a(1785), "auth.logout": a(1038), "auth.login_required": a(724), "image.send.select_position": a(1145), "image.send.sending": a(1816), "image.layer.new": a(2440), "image.layer.current": a(1224), "image.layer.fit_to_current": a(1713), "image.layer.fit_to_selection": a(2268), "image.layer.fit_to_canvas": a(749), "image.shortcut_auth_required": a(495), "image.shortcut_focus_required": a(1478), "image.get.select_image": a(2171), "image.get.entire_canvas": a(623), "image.get.canvas": "画布", "image.get.current_layer": a(1224), "image.get.current_layer_bounds": a(2695), "image.get.selection_bounds": a(976), "image.get.canvas_bounds": a(951), "image.crop_by_selection": a(2816), "image.limit_size": "限制图片尺寸", "image.crop.none": a(1405), "image.crop.inpaint": a(755), "image.crop.outpaint": a(1160), "image.send_all": a(1406), "image.save_all": a(323), "image.save_current": a(751), "image.delete_current": a(1611), "image.more_actions": a(863), "image.jump_to_last": "跳转到最后一个", "image.clear_all": a(1209), "image.send_to_ps": "发送到PS", "image.download": "下载", "image.copy": "复制", "image.sending": a(1719), "image.sending_all": "正在发送所有图片...", "mask.get.select_mask": a(2028), "mask.selection": "选区", "mask.current_layer_bounds": a(561), "mask.all": "全部", "mask.selection_exclude": a(1343), "mask.current_layer_exclude": a(703), "mask.empty": "空", "widgetable.photoshop.deprecated_node": a(1351), "work_boundary.error.empty_selection_mask": a(2661), "work_boundary.error.primary_resource_missing": a(1725), "work_boundary.error.mask_resource_missing": a(550), "work_boundary.error.mask_apply_empty": a(289), "document {{0}} not found": "找不到文档: {{0}}", "create document for preview": "创建预览文档", "resize document for preview": a(1944), "create document for sent images": "给发送的图片创建文档", "show sent images": "显示发送的图片", "create layer failed": a(2280), "layer not found {{0}}": a(1848), "layer not found: {{0}}": a(1848), "layer {{0}} is not a group": a(2301), "no linked layer for {{0}}": "没有链接图层: {{0}}", "no first related layer in {{0}}": a(1045), "merge group failed": a(242), "get content of layer {{0}}": a(2186), "get layer info": a(964), "get_layer_info: layer_identify required": a(1561), "get pixel of {{0}} failed": a(2174), "get selection failed": a(1720), "invalid name: {{0}}": a(1022), "desire bounds is null": "目标边界为空", "intersect or scaledDesire is null": a(1340), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': "不支持非文本图层: {{0}}", "select layer": a(1920), "run Photoshop Action": a(2410), "Action {{0}} not found": a(2513), "Action set {{0}} not found": a(2723), "set text to layer": "设置图层的文本", "ComfyManager not found, cannot reboot": a(1346), "Failed to reboot ComfyUI": a(1617), "image.upload.from_canvas": "画布", "image.upload.from_curlayer": a(1224), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": a(1564), "image.upload.no_images": a(471), "image.upload.error": a(1132), "image.upload.tooltip.more_options_hint": a(680), "image.upload.tooltip.alt.crop": a(1943), "image.upload.tooltip.alt.reverse": a(889), "image.upload.tooltip.image.canvas": "从 画布 获取图像", "image.upload.tooltip.image.curlayer": a(711), "image.upload.tooltip.mask.curlayer": "从 当前图层 获取遮罩", "image.upload.tooltip.mask.selection": a(1574), "image.upload.tooltip.mask.canvas": "从 画布 获取遮罩", "image.upload.tooltip.cut_action": a(1377), "image.upload.tooltip.scan_action": a(2737), "image.upload.tooltip.autosync.on": a(1426), "image.upload.tooltip.autosync.off": a(1986), "image.upload.autosync.fetching": "自动获取中…", "image.upload.tooltip.current.canvas": a(1643), "image.upload.tooltip.current.layer": "当前选项：图层", "image.upload.tooltip.current.layer_named": a(1099), "image.upload.tooltip.current.file": a(987), "image.upload.retry": "重试", "image.pack.local.button": a(339), "image.pack.local.empty": a(471), "image.auto_send_enabled": a(405), "image.auto_send_disabled": a(1421), "image.upload.primary.auto": a(2382), "image.upload.primary.manual": a(2567), "image.upload.primary.hint": a(1593), "image.upload.primary.cut": "裁剪", "image.upload.primary.scan": "扫描", "image.upload.primary.hint.line1": "本节点默认继承:", "image.upload.primary.hint.line2": "主图", "workflow.output.destination.title": a(1353), "workflow.output.destination.canvas": "全图", "image.upload.primary.advanced": a(878), "image.upload.primary.advanced.modify": "修改", "image.upload.primary.advanced.reset": "重置", "image.upload.primary.advanced.local_file": a(791), "image.upload.primary.advanced.content.canvas": "画布", "image.upload.primary.advanced.content.curlayer": "当前图层", "image.upload.primary.advanced.content.selection": "选区", "image.upload.primary.advanced.boundary.canvas": "画布边界", "image.upload.primary.advanced.boundary.curlayer": a(2435), "image.upload.primary.advanced.boundary.selection": a(2416), "image.upload.primary.advanced.boundary.primary": a(2453), "image.upload.source.file.tooltip": a(576), "image.upload.source.layer.tooltip": a(269), "image.upload.source.canvas.tooltip": a(2298), "image.upload.dropHint": a(902), "image.upload.status.layer.short_named": a(1460), "image.upload.status.layer.short": "图层", "image.upload.status.file.short": a(2092), "image.upload.status.canvas.short": "画布", "image.upload.mask.button": a(2257), "image.upload.mask.selection": a(2257), "image.upload.mask.layer": a(2233), "image.upload.remove_slot": a(1971), "image.upload.add_slot": a(404), "video.local.button": a(2181), "video.local.empty": "暂无视频", "video.local.remove": a(641), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": a(797), "source.ps_mask": "PS遮罩", "source.canvas": a(623), "source.current_layer": a(1224), "source.selection": "选区", "source.quality_percent": a(1781), "source.crop.positive": a(1651), "source.crop.negative": a(1653), "source.reverse": "反转", "send_images.create_document": a(2058), "send_images.create_document_failed": a(2108), "photoshop.no_active_document": a(2809), "photoshop.rectangle_coordinates_required": a(1842), "photoshop.create_guide_frame": a(1396), "photoshop.clear_guide_frame": a(2142), "photoshop.invalid_action": "无效操作: {{action}}", "photoshop.file_not_found": a(1558), "photoshop.failed_to_open_file_as_document": a(728), "photoshop.invalid_boundary": a(2719), "photoshop.failed_to_open_image_file": a(698), "photoshop.open_images_from_file": a(567), "photoshop.failed_to_create_document_from_file": a(2570), "google.field.image_input": "输入图像", "google.field.prompt": a(2576), "google.field.batch_count": "批次数量", "google.field.images_per_batch": a(1467), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": a(2227), "google.apikey_placeholder": a(731), "google.baseurl_placeholder": "基础 URL", "google.get_apikey": "获取 API Key", "google.help_tooltip": a(1475), "google.model_name": a(2245), "google.model_label": "模型", "google.model_placeholder": a(2236), "google.stop": "停止", "google.loading": a(2400), "google.generating": a(360), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": a(2466), "image.import_as_newdoc": a(2065), "image.boundary": "边界", "image.import_tip": a(1860), "auth.guest_login_success": "访客登录成功", "boundary.canvas": "画布", "boundary.select_boundary": a(1487), "boundary.selection": "选区", "boundary.max_size": "尺寸限制 (px)", "boundary.max_size_error": a(985), "boundary.max_size_hint": a(1609), "boundary.max_size_placeholder": "留空表示不限", "boundary.no_limit": "不限", "boundary.image_quality": "图像质量 (%)", "boundary.image_quality_required": a(1974), "boundary.image_quality_range": a(2015), "boundary.preview_main_image": a(850), "boundary.preview_select": a(1172), "boundary.preview_alt": a(580), "boundary.preview_placeholder": a(2659), "boundary.settings": "调整输入设置", "convert widget {0} failed:": "控件 {0} 转换失败：", "document {0} not found": a(1829), "image.document.new": "新建文档", "image.layer.smart_object": "智能对象图层", "layer not found {0}": a(598), "photoshop.invalid_boundary_type": a(1250), "photoshop.no_active_layer": a(2295), "dialog.image_source.title": "选择图像来源", "dialog.image_source.primary_canvas": a(636), "dialog.image_source.primary_curlayer": a(1240), "dialog.image_source.canvas_canvas": a(1484), "dialog.image_source.canvas_curlayer": a(2780), "dialog.image_source.curlayer_canvas": a(1708), "dialog.image_source.curlayer_curlayer": "以当前图层边界获取当前图层", "dialog.image_source.local_file": a(791), "dialog.simple_source.title": a(862), "dialog.simple_source.canvas": "画布", "dialog.simple_source.current_layer": a(1224), "dialog.simple_source.local_file": a(694), "dialog.simple_source.no_active_layer": a(2727), "dialog.simple_source.pick_error": a(1026) }, ao = { "preview.show": a(488), "gateway.select_ai_service": a(1494), "provider.select.title": "Select AI Service Provider", "provider.comfyui.description": a(661), "provider.replicate.description": a(784), "provider.runninghub.description": a(884), "provider.google.description": a(2335), "task.waiting_upload": a(512), "task.creating_task": a(1483), "task.running_duration": a(1221), "task.cancelled": a(634), "task.cancel_failed": a(343), "task.default_name": a(1853), "comfy.connect": a(646), "comfy.load_failed": "ComfyUI failed to load, HTTP status code: {{code}}", "comfy.loading": a(462), "comfy.channel_connecting": a(1050), "comfy.server_reconnecting": a(1565), "comfy.version_mismatch": a(525), "comfy.cloud_recommend": a(547), "comfy.your_workflows": a(2487), "comfy.refresh_workflows": a(772), "comfy.queue_progress": a(903), "comfy.save": a(1727), "comfy.refresh": a(2235), "comfy.stop_cancel_all": "Stop and cancel all", "comfy.stop_auto_run": a(1319), "comfy.start_auto_run": a(2509), "comfy.auto_run_status": a(1784), "comfy.run": a(2465), "comfy.back": "Back", "comfy.uploading": a(385), "comfy.task.name": a(1705), "comfy.error.task_cancelled": a(634), "comfy.task.processing_progress": a(960), "comfy.help_tooltip": a(2314), "comfy.no_workflow_selected": a(535), "boundary.title": a(1016), "boundary.tooltip": "Area AI reads from; controls max image size", "boundary.current_canvas": a(1402), "boundary.current_layer": a(929), "boundary.current_selection": a(1641), "boundary.set_as_canvas": a(2129), "boundary.set_as_layer": a(1436), "boundary.set_as_selection": a(2771), "http.404": a(1987), "http.401": a(1891), "http.403": "Forbidden (403)", "http.408": "Request timeout (408)", "http.500": a(308), "http.501": a(2628), "http.502": a(899), "http.503": a(502), "http.504": a(607), "http.unknown": a(388), "runninghub.get_apikey": a(988), "runninghub.apikey_placeholder": a(1954), "runninghub.app_id": a(1537), "runninghub.webapp_id_placeholder": "Paste WebApp ID here", "runninghub.open_app": a(2300), "runninghub.execute": a(506), "runninghub.running": a(1207), "runninghub.rh_coins": a(2059), "runninghub.current_tasks": a(2647), "runninghub.help_tooltip": "Tutorial", "runninghub.stop_all": a(1023), "runninghub.status.waiting": a(2662), "runninghub.status.running": a(1457), "runninghub.status.failed": a(1121), "runninghub.status.success": a(2089), "image.auto_refetch": a(2179), "local_resource.selection.images": a(2820), "runninghub.error.get_result_failed": a(2075), "runninghub.error.task_failed": a(1692), "runninghub.error.task_incomplete": a(608), "runninghub.error.account_status_http": "getAccountStatus API failed - HTTP error! status: {{status}}", "runninghub.error.account_status_reason_unknown": a(1867), "runninghub.error.account_status_failed": "getAccountStatus API failed - {{reason}}", "runninghub.error.form_data_http": a(261), "runninghub.error.form_data_reason_unknown": a(1670), "runninghub.error.form_data_failed": a(811), "runninghub.error.node_info_missing": "run API failed - nodeInfoList unavailable. Please call getNodes() first.", "runninghub.error.run_http": a(715), "runninghub.error.run_reason_default": a(1780), "runninghub.error.run_failed": a(1856), "runninghub.error.status_http": a(1687), "runninghub.error.status_reason_unknown": "Failed to get task status", "runninghub.error.status_failed": "status API failed - {{reason}}", "runninghub.error.outputs_http": a(2030), "runninghub.error.outputs_failed": a(1656), "runninghub.task.title": "RunningHub - {{webappId}}", "runninghub.error.upload_http": a(1012), "runninghub.error.upload_reason_unknown": a(2001), "runninghub.error.upload_failed": a(1291), "customapi.error.no_image_returned": a(1380), "customapi.error.openai_api": a(918), "customapi.error.input_required": "Image input and prompt are required", "customapi.error.generation_failed": a(949), "customapi.task.name.google": a(2091), "customapi.task.name.openai": a(1208), "customapi.error.unsupported_image_input": a(579), "replicate.get_apikey": a(2656), "replicate.apikey_placeholder": a(2664), "replicate.execute": a(506), "replicate.model_placeholder": "Paste your model name", "replicate.help_tooltip": a(2314), "replicate.loading": a(2736), "replicate.running": "Running...", "replicate.stop": a(1808), "liblib.get_apikey": "How to get APIKey and API Secret", "liblib.execute": "Execute", "common.close": a(1576), "common.save": a(1727), "common.save_and_run": a(910), "common.loading": a(2736), "common.error": a(1925), "common.error.unknown": a(2469), "common.error.task_creation_aborted": "Task creation aborted", "common.error.status_check_aborted": a(2578), "common.error.result_fetch_aborted": a(2612), "common.error.upload_aborted": a(619), "common.success": "Success", "common.failed": a(1121), "common.generating": a(2770), "common.cancel": "Cancel", "common.confirm": a(1902), "common.options": a(2782), "common.options_separator": a(1284), "upload_pass.error.unsupported_type": a(2546), "upload_pass.error.uploader_missing": a(1772), webviewInForeground: "PS shortcuts may be blocked by plugin...", webviewInForeground2: a(302), "auth.login_success": a(780), "auth.username_label": a(747), "auth.email_label": a(2157), "auth.logout": a(869), "auth.login_required": a(1522), "image.send.select_position": a(1549), "image.send.sending": a(2398), "image.layer.new": a(601), "image.layer.current": a(929), "image.layer.fit_to_current": "Fit to current layer", "image.layer.fit_to_selection": "Fit to selection", "image.layer.fit_to_canvas": a(1803), "image.shortcut_auth_required": a(344), "image.shortcut_focus_required": a(552), "image.get.select_image": a(2760), "image.get.entire_canvas": a(1402), "image.get.canvas": "Canvas", "image.get.current_layer": a(929), "image.get.current_layer_bounds": a(2343), "image.get.selection_bounds": a(1879), "image.get.canvas_bounds": "Canvas bounds", "image.crop_by_selection": a(1657), "image.limit_size": "Limit image size", "image.crop.none": "No crop", "image.crop.inpaint": a(914), "image.crop.outpaint": a(748), "image.send_all": a(2498), "image.save_all": a(260), "image.save_current": "Save current", "image.delete_current": "Delete current", "image.more_actions": a(1887), "image.jump_to_last": a(523), "image.clear_all": a(509), "image.send_to_ps": a(2804), "image.download": a(1917), "image.copy": "Copy", "image.sending": a(2123), "image.sending_all": a(1691), "mask.get.select_mask": a(253), "mask.selection": "Selection", "mask.current_layer_bounds": a(741), "mask.all": a(982), "mask.selection_exclude": a(410), "mask.current_layer_exclude": "Exclude current layer", "mask.empty": a(1912), "widgetable.photoshop.deprecated_node": a(303), "work_boundary.error.empty_selection_mask": a(2564), "work_boundary.error.primary_resource_missing": a(1264), "work_boundary.error.mask_resource_missing": a(2640), "work_boundary.error.mask_apply_empty": a(2135), "document {{0}} not found": a(1386), "create document for preview": a(659), "resize document for preview": a(2394), "create document for sent images": a(2267), "show sent images": a(617), "create layer failed": "Create layer failed", "layer not found {{0}}": a(1503), "layer not found: {{0}}": a(2774), "layer {{0}} is not a group": a(713), "no linked layer for {{0}}": a(1153), "no first related layer in {{0}}": a(1509), "merge group failed": "Merge group failed", "get content of layer {{0}}": a(1183), "get layer info": a(2362), "get_layer_info: layer_identify required": a(1642), "get pixel of {{0}} failed": a(2330), "get selection failed": a(1368), "invalid name: {{0}}": a(286), "desire bounds is null": a(2532), "intersect or scaledDesire is null": "Intersect or scaledDesire is null", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': a(998), "select layer": "Select layer", "run Photoshop Action": a(357), "Action {{0}} not found": a(1297), "Action set {{0}} not found": a(886), "set text to layer": "Set text to layer", "ComfyManager not found, cannot reboot": a(2615), "Failed to reboot ComfyUI": a(2164), "image.upload.from_canvas": a(1845), "image.upload.from_curlayer": a(929), "image.upload.from_selection": a(1008), "image.upload.from_harddisk": a(2019), "image.upload.clear": a(1048), "image.upload.uploading": a(2282), "image.upload.no_images": a(1470), "image.upload.error": a(692), "image.upload.tooltip.alt.crop": a(1589), "image.upload.tooltip.alt.reverse": "+Alt reversed mask", "image.upload.tooltip.image.canvas": a(701), "image.upload.tooltip.image.curlayer": a(1843), "image.upload.tooltip.mask.canvas": a(2709), "image.upload.tooltip.mask.curlayer": a(539), "image.upload.tooltip.mask.selection": a(2384), "image.upload.tooltip.cut_action": a(2113), "image.upload.tooltip.scan_action": a(730), "image.upload.tooltip.autosync.on": a(1819), "image.upload.tooltip.autosync.off": a(605), "image.upload.tooltip.more_options_hint": a(1271), "image.upload.tooltip.current.canvas": a(1301), "image.upload.tooltip.current.layer": a(2342), "image.upload.tooltip.current.layer_named": a(2255), "image.upload.tooltip.current.file": a(2163), "image.upload.autosync.fetching": a(2250), "image.upload.retry": a(1305), "image.pack.local.button": a(1158), "image.pack.local.empty": a(907), "image.auto_send_enabled": "Auto send enabled", "image.auto_send_disabled": a(582), "image.upload.primary.auto": a(2250), "image.upload.primary.manual": "Get Image", "image.upload.primary.cut": a(1020), "image.upload.primary.scan": a(890), "image.upload.primary.hint": a(2673), "image.upload.primary.hint.line1": a(969), "image.upload.primary.hint.line2": "Main Image", "workflow.output.destination.title": a(263), "workflow.output.destination.canvas": a(967), "image.upload.primary.advanced": a(1523), "image.upload.primary.advanced.modify": a(1412), "image.upload.primary.advanced.reset": "Reset", "image.upload.primary.advanced.local_file": a(1532), "image.upload.primary.advanced.content.canvas": a(1845), "image.upload.primary.advanced.content.curlayer": a(1167), "image.upload.primary.advanced.content.selection": a(1008), "image.upload.primary.advanced.boundary.canvas": "Canvas boundary", "image.upload.primary.advanced.boundary.curlayer": a(1279), "image.upload.primary.advanced.boundary.selection": "Selection boundary", "image.upload.primary.advanced.boundary.primary": a(2051), "image.upload.source.file.tooltip": "Upload from disk", "image.upload.source.layer.tooltip": a(417), "image.upload.source.canvas.tooltip": a(2665), "image.upload.dropHint": a(565), "image.upload.status.layer.short_named": a(307), "image.upload.status.layer.short": "Layer", "image.upload.status.file.short": a(1532), "image.upload.status.canvas.short": a(1845), "image.upload.mask.button": a(322), "image.upload.mask.selection": a(322), "image.upload.mask.layer": "Layer mask", "image.upload.remove_slot": a(2140), "image.upload.add_slot": a(2310), "video.local.button": a(2808), "video.local.empty": "No videos yet", "video.local.remove": a(1234), "source.source": a(690), "source.content": a(1966), "source.boundary": a(678), "source.mask": a(2158), "source.disk": a(2019), "source.remote": a(2484), "source.unknown": a(465), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": a(1845), "source.current_layer": a(2507), "source.selection": "Selection", "source.quality_percent": a(2064), "source.crop.positive": a(853), "source.crop.negative": a(2096), "source.reverse": a(677), "send_images.create_document": a(1423), "send_images.create_document_failed": a(674), "photoshop.no_active_document": a(1698), "photoshop.rectangle_coordinates_required": a(1047), "photoshop.create_guide_frame": a(2076), "photoshop.clear_guide_frame": a(1758), "photoshop.invalid_action": a(387), "photoshop.file_not_found": a(1449), "photoshop.failed_to_open_file_as_document": a(313), "photoshop.invalid_boundary": a(296), "photoshop.failed_to_open_image_file": a(1063), "photoshop.open_images_from_file": a(1830), "photoshop.failed_to_create_document_from_file": a(2148), "google.field.image_input": a(2493), "google.field.prompt": a(732), "google.field.batch_count": a(700), "google.field.images_per_batch": a(1664), "google.status.success": a(2089), "google.status.failed": a(1121), "google.status.generating": "Generating", "google.apikey_placeholder": "Enter Google API Key", "google.get_apikey": a(1227), "google.baseurl_placeholder": a(2627), "google.help_tooltip": a(1616), "google.model_name": "Gemini 2.5 Flash Image", "google.model_label": a(1496), "google.model_placeholder": a(814), "google.stop": "Stop", "google.loading": a(2736), "google.generating": a(2770), "google.generate": a(531), "image.auto_toggle": a(602), "image.import_as_smartobject": a(2540), "image.import_as_newdoc": a(2242), "image.boundary": a(624), "image.import_tip": a(1287), "auth.guest_login_success": a(285), "boundary.canvas": a(1845), "boundary.select_boundary": a(1927), "boundary.selection": "Selection", "boundary.max_size": a(1120), "boundary.max_size_error": a(1082), "boundary.max_size_hint": a(813), "boundary.max_size_placeholder": a(813), "boundary.no_limit": a(1155), "boundary.image_quality": a(532), "boundary.image_quality_required": a(327), "boundary.image_quality_range": "Range 1-100", "boundary.preview_main_image": "Output to", "boundary.preview_select": "Get selection", "boundary.preview_alt": a(1418), "boundary.preview_placeholder": "Click to use current selection", "boundary.settings": a(2412), "convert widget {0} failed:": "Failed to convert widget {0}:", "document {0} not found": a(1629), "image.document.new": "New Document", "image.layer.smart_object": a(937), "layer not found {0}": a(1196), "photoshop.invalid_boundary_type": "Invalid boundary type: {{type}}", "photoshop.no_active_layer": "No active layer", "dialog.image_source.title": a(809), "dialog.image_source.primary_canvas": "Fetch canvas with primary boundary", "dialog.image_source.primary_curlayer": a(1355), "dialog.image_source.canvas_canvas": a(1551), "dialog.image_source.canvas_curlayer": a(2191), "dialog.image_source.curlayer_canvas": "Fetch canvas with current-layer boundary", "dialog.image_source.curlayer_curlayer": a(2334), "dialog.image_source.local_file": "Import from disk", "dialog.simple_source.title": a(1071), "dialog.simple_source.canvas": a(1845), "dialog.simple_source.current_layer": a(929), "dialog.simple_source.local_file": a(825), "dialog.simple_source.no_active_layer": "No active layer available", "dialog.simple_source.pick_error": a(424) }, g0 = (i) => typeof i === a(654), Ge = () => {
  const i = a;
  let x, t;
  const n = new Promise((e, r) => {
    x = e, t = r;
  });
  return n[i(2272)] = x, n[i(865)] = t, n;
}, Ma = (i) => i == null ? "" : "" + i, ro = (i, x, t) => {
  i[a(442)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, no = /###/g, $a = (i) => i && i[a(2775)](a(1182)) > -1 ? i.replace(no, ".") : i, za = (i) => !i || g0(i), ex = (i, x, t) => {
  const n = a, e = g0(x) ? x[n(2742)](".") : x;
  let r = 0;
  for (; r < e[n(1028)] - 1; ) {
    if (za(i)) return {};
    const s = $a(e[r]);
    !i[s] && t && (i[s] = new t()), Object[n(983)][n(894)][n(1138)](i, s) ? i = i[s] : i = {}, ++r;
  }
  return za(i) ? {} : { obj: i, k: $a(e[r]) };
}, Ha = (i, x, t) => {
  const n = a, { obj: e, k: r } = ex(i, x, Object);
  if (e !== void 0 || x.length === 1) {
    e[r] = t;
    return;
  }
  let s = x[x[n(1028)] - 1], o = x[n(2460)](0, x.length - 1), c = ex(i, o, Object);
  for (; c[n(2616)] === void 0 && o[n(1028)]; )
    s = o[o[n(1028)] - 1] + "." + s, o = o[n(2460)](0, o.length - 1), c = ex(i, o, Object), c != null && c[n(2616)] && typeof c[n(2616)][c.k + "." + s] < "u" && (c[n(2616)] = void 0);
  c[n(2616)][c.k + "." + s] = t;
}, so = (i, x, t, n) => {
  const e = a, { obj: r, k: s } = ex(i, x, Object);
  r[s] = r[s] || [], r[s][e(2037)](t);
}, Rx = (i, x) => {
  const t = a, { obj: n, k: e } = ex(i, x);
  if (n && Object[t(983)][t(894)][t(1138)](n, e))
    return n[e];
}, io = (i, x, t) => {
  const n = Rx(i, t);
  return n !== void 0 ? n : Rx(x, t);
}, Un = (i, x, t) => {
  const n = a;
  for (const e in x)
    e !== n(1855) && e !== "constructor" && (e in i ? g0(i[e]) || i[e] instanceof String || g0(x[e]) || x[e] instanceof String ? t && (i[e] = x[e]) : Un(i[e], x[e], t) : i[e] = x[e]);
  return i;
}, He = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, a(1293));
var oo = { "&": a(746), "<": "&lt;", ">": a(706), '"': "&quot;", "'": a(750), "/": a(2038) };
const co = (i) => {
  const x = a;
  return g0(i) ? i[x(2735)](/[&<>"'\/]/g, (t) => oo[t]) : i;
};
class uo {
  constructor(x) {
    const t = a;
    this[t(2100)] = x, this[t(281)] = /* @__PURE__ */ new Map(), this[t(324)] = [];
  }
  [a(267)](x) {
    const t = a, n = this[t(281)].get(x);
    if (n !== void 0) return n;
    const e = new RegExp(x);
    return this[t(324)][t(1028)] === this[t(2100)] && this.regExpMap.delete(this[t(324)][t(966)]()), this.regExpMap.set(x, e), this[t(324)][t(2037)](x), e;
  }
}
const fo = [" ", ",", "?", "!", ";"], lo = new uo(20), ho = (i, x, t) => {
  const n = a;
  x = x || "", t = t || "";
  const e = fo[n(1001)]((o) => x.indexOf(o) < 0 && t[n(2775)](o) < 0);
  if (e[n(1028)] === 0) return !0;
  const r = lo[n(267)]("(" + e.map((o) => o === "?" ? "\\?" : o)[n(1825)]("|") + ")");
  let s = !r[n(551)](i);
  if (!s) {
    const o = i[n(2775)](t);
    o > 0 && !r[n(551)](i[n(1466)](0, o)) && (s = !0);
  }
  return s;
}, Wt = (i, x, t = ".") => {
  const n = a;
  if (!i) return;
  if (i[x])
    return Object.prototype[n(894)][n(1138)](i, x) ? i[x] : void 0;
  const e = x[n(2742)](t);
  let r = i;
  for (let s = 0; s < e[n(1028)]; ) {
    if (!r || typeof r != "object") return;
    let o, c = "";
    for (let u = s; u < e[n(1028)]; ++u)
      if (u !== s && (c += t), c += e[u], o = r[c], o !== void 0) {
        if ([n(654), n(536), n(781)].indexOf(typeof o) > -1 && u < e[n(1028)] - 1) continue;
        s += u - s + 1;
        break;
      }
    r = o;
  }
  return r;
}, rx = (i) => i == null ? void 0 : i[a(2735)]("_", "-"), po = { type: "logger", log(i) {
  this[a(2364)]("log", i);
}, warn(i) {
  const x = a;
  this[x(2364)](x(2791), i);
}, error(i) {
  const x = a;
  this[x(2364)](x(1314), i);
}, output(i, x) {
  var n, e;
  const t = a;
  (e = (n = console == null ? void 0 : console[i]) == null ? void 0 : n[t(1104)]) == null || e.call(n, console, x);
} };
class Cx {
  constructor(x, t = {}) {
    this[a(2012)](x, t);
  }
  [a(2012)](x, t = {}) {
    const n = a;
    this[n(1794)] = t[n(1794)] || "i18next:", this[n(1597)] = x || po, this[n(2393)] = t, this[n(1752)] = t[n(1752)];
  }
  [a(1263)](...x) {
    const t = a;
    return this.forward(x, t(1263), "", !0);
  }
  [a(2791)](...x) {
    const t = a;
    return this[t(2525)](x, t(2791), "", !0);
  }
  [a(1314)](...x) {
    const t = a;
    return this[t(2525)](x, t(1314), "");
  }
  [a(2797)](...x) {
    const t = a;
    return this[t(2525)](x, t(2791), t(965), !0);
  }
  [a(2525)](x, t, n, e) {
    const r = a;
    return e && !this[r(1752)] ? null : (g0(x[0]) && (x[0] = "" + n + this[r(1794)] + " " + x[0]), this[r(1597)][t](x));
  }
  [a(1644)](x) {
    const t = a;
    return new Cx(this[t(1597)], { prefix: this[t(1794)] + ":" + x + ":", ...this[t(2393)] });
  }
  clone(x) {
    const t = a;
    return x = x || this[t(2393)], x[t(1794)] = x[t(1794)] || this[t(1794)], new Cx(this[t(1597)], x);
  }
}
var le = new Cx();
class Ax {
  constructor() {
    const x = a;
    this[x(415)] = {};
  }
  on(x, t) {
    const n = a;
    return x[n(2742)](" ").forEach((e) => {
      const r = n;
      this.observers[e] || (this[r(415)][e] = /* @__PURE__ */ new Map());
      const s = this[r(415)][e].get(t) || 0;
      this[r(415)][e][r(2663)](t, s + 1);
    }), this;
  }
  [a(1186)](x, t) {
    const n = a;
    if (this[n(415)][x]) {
      if (!t) {
        delete this[n(415)][x];
        return;
      }
      this.observers[x][n(243)](t);
    }
  }
  emit(x, ...t) {
    const n = a;
    this[n(415)][x] && Array[n(871)](this[n(415)][x].entries()).forEach(([r, s]) => {
      for (let o = 0; o < s; o++)
        r(...t);
    }), this[n(415)]["*"] && Array.from(this[n(415)]["*"][n(1500)]())[n(442)](([r, s]) => {
      for (let o = 0; o < s; o++)
        r.apply(r, [x, ...t]);
    });
  }
}
class Ua extends Ax {
  constructor(x, t = { ns: [a(849)], defaultNS: a(849) }) {
    const n = a;
    super(), this[n(2584)] = x || {}, this.options = t, this.options[n(2678)] === void 0 && (this[n(2393)][n(2678)] = "."), this[n(2393)][n(1064)] === void 0 && (this[n(2393)][n(1064)] = !0);
  }
  [a(1102)](x) {
    const t = a;
    this.options.ns.indexOf(x) < 0 && this.options.ns[t(2037)](x);
  }
  [a(2114)](x) {
    const t = a, n = this.options.ns[t(2775)](x);
    n > -1 && this[t(2393)].ns[t(2406)](n, 1);
  }
  [a(2454)](x, t, n, e = {}) {
    var d, f;
    const r = a, s = e[r(2678)] !== void 0 ? e[r(2678)] : this[r(2393)].keySeparator, o = e[r(1064)] !== void 0 ? e[r(1064)] : this[r(2393)][r(1064)];
    let c;
    x.indexOf(".") > -1 ? c = x[r(2742)](".") : (c = [x, t], n && (Array[r(1265)](n) ? c.push(...n) : g0(n) && s ? c.push(...n.split(s)) : c[r(2037)](n)));
    const u = Rx(this[r(2584)], c);
    return !u && !t && !n && x[r(2775)](".") > -1 && (x = c[0], t = c[1], n = c.slice(2)[r(1825)](".")), u || !o || !g0(n) ? u : Wt((f = (d = this.data) == null ? void 0 : d[x]) == null ? void 0 : f[t], n, s);
  }
  [a(311)](x, t, n, e, r = { silent: !1 }) {
    const s = a, o = r[s(2678)] !== void 0 ? r.keySeparator : this[s(2393)].keySeparator;
    let c = [x, t];
    n && (c = c[s(2133)](o ? n[s(2742)](o) : n)), x[s(2775)](".") > -1 && (c = x[s(2742)]("."), e = t, t = c[1]), this[s(1102)](t), Ha(this[s(2584)], c, e), r[s(1146)] || this[s(962)](s(1897), x, t, n, e);
  }
  addResources(x, t, n, e = { silent: !1 }) {
    const r = a;
    for (const s in n)
      (g0(n[s]) || Array[r(1265)](n[s])) && this[r(311)](x, t, s, n[s], { silent: !0 });
    e[r(1146)] || this[r(962)]("added", x, t, n);
  }
  [a(1995)](x, t, n, e, r, s = { silent: !1, skipCopy: !1 }) {
    const o = a;
    let c = [x, t];
    x[o(2775)](".") > -1 && (c = x.split("."), e = n, n = t, t = c[1]), this[o(1102)](t);
    let u = Rx(this[o(2584)], c) || {};
    s.skipCopy || (n = JSON[o(861)](JSON[o(956)](n))), e ? Un(u, n, r) : u = { ...u, ...n }, Ha(this[o(2584)], c, u), s.silent || this[o(962)]("added", x, t, n);
  }
  removeResourceBundle(x, t) {
    const n = a;
    this[n(1709)](x, t) && delete this[n(2584)][x][t], this.removeNamespaces(t), this[n(962)](n(1374), x, t);
  }
  [a(1709)](x, t) {
    return this.getResource(x, t) !== void 0;
  }
  [a(2510)](x, t) {
    const n = a;
    return t || (t = this.options.defaultNS), this[n(2454)](x, t);
  }
  [a(1793)](x) {
    return this[a(2584)][x];
  }
  [a(2070)](x) {
    const t = a, n = this[t(1793)](x);
    return !!(n && Object[t(2459)](n) || [])[t(647)]((r) => n[r] && Object[t(2459)](n[r])[t(1028)] > 0);
  }
  [a(2751)]() {
    return this[a(2584)];
  }
}
var Vn = { processors: {}, addPostProcessor(i) {
  const x = a;
  this.processors[i[x(2409)]] = i;
}, handle(i, x, t, n, e) {
  const r = a;
  return i[r(442)]((s) => {
    var c;
    const o = r;
    x = ((c = this[o(740)][s]) == null ? void 0 : c[o(2670)](x, t, n, e)) ?? x;
  }), x;
} };
const Va = {}, Za = (i) => !g0(i) && typeof i !== a(781) && typeof i !== a(536);
class Fx extends Ax {
  constructor(x, t = {}) {
    const n = a;
    super(), ro([n(2281), n(1604), n(2491), "interpolator", n(1751), n(2559), n(1400)], x, this), this[n(2393)] = t, this[n(2393)][n(2678)] === void 0 && (this.options[n(2678)] = "."), this[n(1597)] = le[n(1644)](n(702));
  }
  [a(309)](x) {
    const t = a;
    x && (this[t(2347)] = x);
  }
  exists(x, t = { interpolation: {} }) {
    const n = a, e = { ...t };
    if (x == null) return !1;
    const r = this[n(2272)](x, e);
    return (r == null ? void 0 : r[n(2756)]) !== void 0;
  }
  [a(1096)](x, t) {
    const n = a;
    let e = t[n(1640)] !== void 0 ? t.nsSeparator : this[n(2393)][n(1640)];
    e === void 0 && (e = ":");
    const r = t[n(2678)] !== void 0 ? t[n(2678)] : this[n(2393)].keySeparator;
    let s = t.ns || this[n(2393)][n(2253)] || [];
    const o = e && x.indexOf(e) > -1, c = !this[n(2393)].userDefinedKeySeparator && !t[n(2678)] && !this.options.userDefinedNsSeparator && !t[n(1640)] && !ho(x, e, r);
    if (o && !c) {
      const u = x[n(1325)](this.interpolator[n(1527)]);
      if (u && u[n(1028)] > 0) return { key: x, namespaces: g0(s) ? [s] : s };
      const d = x.split(e);
      (e !== r || e === r && this[n(2393)].ns[n(2775)](d[0]) > -1) && (s = d[n(966)]()), x = d[n(1825)](r);
    }
    return { key: x, namespaces: g0(s) ? [s] : s };
  }
  [a(480)](x, t, n) {
    const e = a;
    let r = typeof t === e(513) ? { ...t } : t;
    if (typeof r !== e(513) && this[e(2393)].overloadTranslationOptionHandler && (r = this.options[e(2773)](arguments)), typeof options === e(513) && (r = { ...r }), r || (r = {}), x == null) return "";
    Array.isArray(x) || (x = [String(x)]);
    const s = r.returnDetails !== void 0 ? r.returnDetails : this[e(2393)].returnDetails, o = r[e(2678)] !== void 0 ? r[e(2678)] : this.options.keySeparator, { key: c, namespaces: u } = this.extractFromKey(x[x[e(1028)] - 1], r), d = u[u[e(1028)] - 1];
    let f = r.nsSeparator !== void 0 ? r[e(1640)] : this[e(2393)][e(1640)];
    f === void 0 && (f = ":");
    const l = r[e(1094)] || this[e(2347)], g = r[e(1184)] || this.options[e(1184)];
    if ((l == null ? void 0 : l[e(1268)]()) === e(1073))
      return g ? s ? { res: "" + d + f + c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: d, usedParams: this[e(499)](r) } : "" + d + f + c : s ? { res: c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: d, usedParams: this[e(499)](r) } : c;
    const h = this[e(2272)](x, r);
    let m = h == null ? void 0 : h[e(2756)];
    const b = (h == null ? void 0 : h[e(630)]) || c, S = (h == null ? void 0 : h[e(359)]) || c, P = ["[object Number]", e(1961), e(2365)], q = r[e(2432)] !== void 0 ? r[e(2432)] : this[e(2393)][e(2432)], A = !this.i18nFormat || this[e(2559)][e(1332)], R = r.count !== void 0 && !g0(r[e(650)]), I = Fx[e(992)](r), C = R ? this[e(2491)][e(2544)](l, r[e(650)], r) : "", O = r[e(2600)] && R ? this.pluralResolver[e(2544)](l, r[e(650)], { ordinal: !1 }) : "", j = R && !r[e(2600)] && r[e(650)] === 0, M = j && r[e(454) + this.options[e(1471)] + e(2799)] || r["defaultValue" + C] || r["defaultValue" + O] || r[e(454)];
    let F = m;
    A && !m && I && (F = M);
    const N = Za(F), z = Object[e(983)].toString[e(1104)](F);
    if (A && F && N && P[e(2775)](z) < 0 && !(g0(q) && Array[e(1265)](F))) {
      if (!r[e(1511)] && !this[e(2393)].returnObjects) {
        !this.options[e(2246)] && this.logger.warn(e(2312));
        const U = this[e(2393)].returnedObjectHandler ? this[e(2393)][e(2246)](b, F, { ...r, ns: u }) : "key '" + c + " (" + this.language + e(2057);
        return s ? (h[e(2756)] = U, h[e(1438)] = this.getUsedParamsDetails(r), h) : U;
      }
      if (o) {
        const U = Array.isArray(F), V = U ? [] : {}, G = U ? S : b;
        for (const o0 in F)
          if (Object[e(983)].hasOwnProperty[e(1138)](F, o0)) {
            const u0 = "" + G + o + o0;
            I && !m ? V[o0] = this[e(480)](u0, { ...r, defaultValue: Za(M) ? M[o0] : void 0, joinArrays: !1, ns: u }) : V[o0] = this[e(480)](u0, { ...r, joinArrays: !1, ns: u }), V[o0] === u0 && (V[o0] = F[o0]);
          }
        m = V;
      }
    } else if (A && g0(q) && Array.isArray(m))
      m = m[e(1825)](q), m && (m = this[e(2144)](m, x, r, n));
    else {
      let U = !1, V = !1;
      !this[e(638)](m) && I && (U = !0, m = M), !this.isValidLookup(m) && (V = !0, m = c);
      const G = r[e(2502)] || this[e(2393)][e(2502)], o0 = G && V ? void 0 : m, u0 = I && M !== m && this[e(2393)][e(753)];
      if (V || U || u0) {
        if (this[e(1597)][e(1263)](e(u0 ? 1964 : 1718), l, d, c, u0 ? M : m), o) {
          const k0 = this[e(2272)](c, { ...r, keySeparator: !1 });
          k0 && k0.res && this[e(1597)].warn(e(824));
        }
        let f0 = [];
        const i0 = this[e(1604)][e(2225)](this[e(2393)][e(1526)], r[e(1094)] || this[e(2347)]);
        if (this[e(2393)].saveMissingTo === e(1501) && i0 && i0[0]) for (let k0 = 0; k0 < i0[e(1028)]; k0++)
          f0[e(2037)](i0[k0]);
        else this.options[e(2086)] === e(972) ? f0 = this[e(1604)][e(1032)](r.lng || this[e(2347)]) : f0[e(2037)](r[e(1094)] || this[e(2347)]);
        const l0 = (k0, v0, L0) => {
          var D;
          const N0 = e, J0 = I && L0 !== m ? L0 : o0;
          this.options[N0(371)] ? this[N0(2393)].missingKeyHandler(k0, d, v0, J0, u0, r) : (D = this.backendConnector) != null && D[N0(444)] && this[N0(1751)].saveMissing(k0, d, v0, J0, u0, r), this[N0(962)]("missingKey", k0, d, v0, m);
        };
        this[e(2393)].saveMissing && (this[e(2393)][e(908)] && R ? f0[e(442)]((k0) => {
          const v0 = e, L0 = this[v0(2491)][v0(395)](k0, r);
          j && r["defaultValue" + this[v0(2393)][v0(1471)] + v0(2799)] && L0.indexOf(this[v0(2393)][v0(1471)] + v0(2799)) < 0 && L0[v0(2037)](this[v0(2393)][v0(1471)] + v0(2799)), L0.forEach((N0) => {
            const J0 = v0;
            l0([k0], c + N0, r[J0(454) + N0] || M);
          });
        }) : l0(f0, c, M));
      }
      m = this[e(2144)](m, x, r, h, n), V && m === c && this[e(2393)].appendNamespaceToMissingKey && (m = "" + d + f + c), (V || U) && this[e(2393)][e(2103)] && (m = this[e(2393)][e(2103)](this[e(2393)].appendNamespaceToMissingKey ? "" + d + f + c : c, U ? m : void 0, r));
    }
    return s ? (h[e(2756)] = m, h.usedParams = this.getUsedParamsDetails(r), h) : m;
  }
  [a(2144)](x, t, n, e, r) {
    var u, d;
    const s = a;
    if ((u = this[s(2559)]) != null && u[s(861)]) x = this[s(2559)][s(861)](x, { ...this[s(2393)].interpolation[s(2536)], ...n }, n[s(1094)] || this.language || e[s(1169)], e[s(1409)], e.usedKey, { resolved: e });
    else if (!n.skipInterpolation) {
      n[s(1497)] && this[s(818)][s(2012)]({ ...n, interpolation: { ...this.options[s(1497)], ...n.interpolation } });
      const f = g0(x) && (((d = n == null ? void 0 : n[s(1497)]) == null ? void 0 : d[s(1639)]) !== void 0 ? n[s(1497)].skipOnVariables : this[s(2393)][s(1497)].skipOnVariables);
      let l;
      if (f) {
        const h = x[s(1325)](this[s(818)].nestingRegexp);
        l = h && h[s(1028)];
      }
      let g = n.replace && !g0(n.replace) ? n[s(2735)] : n;
      if (this[s(2393)].interpolation[s(2536)] && (g = { ...this.options[s(1497)].defaultVariables, ...g }), x = this[s(818)][s(808)](x, g, n.lng || this[s(2347)] || e[s(1169)], n), f) {
        const h = x.match(this[s(818)][s(1527)]), m = h && h[s(1028)];
        l < m && (n[s(854)] = !1);
      }
      !n[s(1094)] && e && e[s(2756)] && (n[s(1094)] = this[s(2347)] || e.usedLng), n[s(854)] !== !1 && (x = this[s(818)][s(854)](x, (...h) => {
        const m = s;
        return (r == null ? void 0 : r[0]) === h[0] && !n[m(476)] ? (this.logger[m(2791)]("It seems you are nesting recursively key: " + h[0] + m(321) + t[0]), null) : this[m(480)](...h, t);
      }, n)), n[s(1497)] && this[s(818)][s(1702)]();
    }
    const o = n[s(900)] || this[s(2393)][s(900)], c = g0(o) ? [o] : o;
    return x != null && (c != null && c.length) && n[s(2539)] !== !1 && (x = Vn[s(498)](c, x, t, this[s(2393)] && this[s(2393)].postProcessPassResolved ? { i18nResolved: { ...e, usedParams: this[s(499)](n) }, ...n } : n, this)), x;
  }
  resolve(x, t = {}) {
    const n = a;
    let e, r, s, o, c;
    return g0(x) && (x = [x]), x[n(442)]((u) => {
      const d = n;
      if (this[d(638)](e)) return;
      const f = this[d(1096)](u, t), l = f[d(507)];
      r = l;
      let g = f[d(264)];
      this[d(2393)].fallbackNS && (g = g[d(2133)](this[d(2393)][d(400)]));
      const h = t.count !== void 0 && !g0(t[d(650)]), m = h && !t[d(2600)] && t[d(650)] === 0, b = t[d(476)] !== void 0 && (g0(t[d(476)]) || typeof t[d(476)] === d(536)) && t[d(476)] !== "", S = t.lngs ? t[d(277)] : this[d(1604)].toResolveHierarchy(t[d(1094)] || this[d(2347)], t[d(1526)]);
      g[d(442)]((P) => {
        var A, R;
        const q = d;
        this[q(638)](e) || (c = P, !Va[S[0] + "-" + P] && ((A = this.utils) != null && A[q(1688)]) && !((R = this[q(1400)]) != null && R[q(1688)](c)) && (Va[S[0] + "-" + P] = !0, this[q(1597)][q(2791)]('key "' + r + '" for languages "' + S.join(", ") + q(779) + c + '" was not yet loaded', q(1622))), S.forEach((I) => {
          var M;
          const C = q;
          if (this.isValidLookup(e)) return;
          o = I;
          const O = [l];
          if ((M = this[C(2559)]) != null && M[C(2023)]) this[C(2559)][C(2023)](O, l, I, P, t);
          else {
            let F;
            h && (F = this.pluralResolver[C(2544)](I, t[C(650)], t));
            const N = this[C(2393)][C(1471)] + C(2799), z = this[C(2393)][C(1471)] + "ordinal" + this[C(2393)].pluralSeparator;
            if (h && (O[C(2037)](l + F), t.ordinal && F.indexOf(z) === 0 && O[C(2037)](l + F.replace(z, this[C(2393)][C(1471)])), m && O[C(2037)](l + N)), b) {
              const U = "" + l + this[C(2393)][C(807)] + t[C(476)];
              O[C(2037)](U), h && (O[C(2037)](U + F), t[C(2600)] && F.indexOf(z) === 0 && O[C(2037)](U + F[C(2735)](z, this.options[C(1471)])), m && O[C(2037)](U + N));
            }
          }
          let j;
          for (; j = O.pop(); )
            !this[C(638)](e) && (s = j, e = this[C(2454)](I, P, j, t));
        }));
      });
    }), { res: e, usedKey: r, exactUsedKey: s, usedLng: o, usedNS: c };
  }
  [a(638)](x) {
    const t = a;
    return x !== void 0 && !(!this[t(2393)][t(1002)] && x === null) && !(!this[t(2393)][t(1443)] && x === "");
  }
  [a(2454)](x, t, n, e = {}) {
    var s;
    const r = a;
    return (s = this[r(2559)]) != null && s.getResource ? this[r(2559)].getResource(x, t, n, e) : this[r(2281)].getResource(x, t, n, e);
  }
  getUsedParamsDetails(x = {}) {
    const t = a, n = [t(454), t(2600), t(476), t(2735), t(1094), t(277), t(1526), "ns", "keySeparator", t(1640), t(1511), t(1619), "joinArrays", t(900), "interpolation"], e = x[t(2735)] && !g0(x[t(2735)]);
    let r = e ? x.replace : x;
    if (e && typeof x.count !== t(1210) && (r[t(650)] = x.count), this[t(2393)][t(1497)].defaultVariables && (r = { ...this[t(2393)][t(1497)][t(2536)], ...r }), !e) {
      r = { ...r };
      for (const s of n)
        delete r[s];
    }
    return r;
  }
  static [a(992)](x) {
    const t = a, n = t(454);
    for (const e in x)
      if (Object[t(983)][t(894)][t(1138)](x, e) && n === e[t(1466)](0, n[t(1028)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class _a {
  constructor(x) {
    const t = a;
    this[t(2393)] = x, this[t(2193)] = this[t(2393)][t(2193)] || !1, this[t(1597)] = le[t(1644)](t(1604));
  }
  [a(2356)](x) {
    const t = a;
    if (x = rx(x), !x || x[t(2775)]("-") < 0) return null;
    const n = x[t(2742)]("-");
    return n[t(1028)] === 2 || (n[t(1454)](), n[n[t(1028)] - 1][t(1268)]() === "x") ? null : this.formatLanguageCode(n[t(1825)]("-"));
  }
  getLanguagePartFromCode(x) {
    const t = a;
    if (x = rx(x), !x || x[t(2775)]("-") < 0) return x;
    const n = x.split("-");
    return this[t(2161)](n[0]);
  }
  [a(2161)](x) {
    const t = a;
    if (g0(x) && x[t(2775)]("-") > -1) {
      let n;
      try {
        n = Intl[t(1141)](x)[0];
      } catch {
      }
      return n && this[t(2393)].lowerCaseLng && (n = n[t(1268)]()), n || (this.options[t(806)] ? x.toLowerCase() : x);
    }
    return this.options[t(2786)] || this[t(2393)].lowerCaseLng ? x[t(1268)]() : x;
  }
  [a(2407)](x) {
    const t = a;
    return (this[t(2393)][t(2747)] === "languageOnly" || this[t(2393)][t(1605)]) && (x = this[t(1898)](x)), !this[t(2193)] || !this[t(2193)][t(1028)] || this[t(2193)][t(2775)](x) > -1;
  }
  [a(366)](x) {
    const t = a;
    if (!x) return null;
    let n;
    return x.forEach((e) => {
      const r = W;
      if (n) return;
      const s = this.formatLanguageCode(e);
      (!this.options[r(2193)] || this[r(2407)](s)) && (n = s);
    }), !n && this[t(2393)][t(2193)] && x[t(442)]((e) => {
      const r = t;
      if (n) return;
      const s = this[r(2356)](e);
      if (this.isSupportedCode(s)) return n = s;
      const o = this[r(1898)](e);
      if (this[r(2407)](o)) return n = o;
      n = this[r(2393)].supportedLngs.find((c) => {
        const u = r;
        if (c === o) return c;
        if (!(c[u(2775)]("-") < 0 && o.indexOf("-") < 0) && (c.indexOf("-") > 0 && o.indexOf("-") < 0 && c[u(1466)](0, c[u(2775)]("-")) === o || c[u(2775)](o) === 0 && o[u(1028)] > 1))
          return c;
      });
    }), n || (n = this[t(2225)](this[t(2393)][t(1526)])[0]), n;
  }
  [a(2225)](x, t) {
    const n = a;
    if (!x) return [];
    if (typeof x === n(2189) && (x = x(t)), g0(x) && (x = [x]), Array[n(1265)](x)) return x;
    if (!t) return x.default || [];
    let e = x[t];
    return e || (e = x[this[n(2356)](t)]), e || (e = x[this.formatLanguageCode(t)]), e || (e = x[this[n(1898)](t)]), e || (e = x[n(574)]), e || [];
  }
  [a(1032)](x, t) {
    const n = a, e = this.getFallbackCodes((t === !1 ? [] : t) || this[n(2393)][n(1526)] || [], x), r = [], s = (o) => {
      const c = n;
      o && (this[c(2407)](o) ? r[c(2037)](o) : this[c(1597)][c(2791)](c(1e3) + o));
    };
    return g0(x) && (x[n(2775)]("-") > -1 || x.indexOf("_") > -1) ? (this[n(2393)][n(2747)] !== n(893) && s(this.formatLanguageCode(x)), this[n(2393)][n(2747)] !== "languageOnly" && this.options[n(2747)] !== n(2674) && s(this[n(2356)](x)), this[n(2393)][n(2747)] !== "currentOnly" && s(this[n(1898)](x))) : g0(x) && s(this[n(2161)](x)), e[n(442)]((o) => {
      const c = n;
      r[c(2775)](o) < 0 && s(this[c(2161)](o));
    }), r;
  }
}
const Ba = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Wa = { select: (i) => a(i === 1 ? 872 : 2481), resolvedOptions: () => ({ pluralCategories: [a(872), a(2481)] }) };
class mo {
  constructor(x, t = {}) {
    const n = a;
    this[n(1604)] = x, this[n(2393)] = t, this[n(1597)] = le.create(n(2491)), this.pluralRulesCache = {};
  }
  addRule(x, t) {
    this.rules[x] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  [a(1989)](x, t = {}) {
    const n = a, e = rx(x === "dev" ? "en" : x), r = t[n(2600)] ? n(2600) : n(761), s = JSON[n(956)]({ cleanedCode: e, type: r });
    if (s in this.pluralRulesCache) return this.pluralRulesCache[s];
    let o;
    try {
      o = new Intl[n(2372)](e, { type: r });
    } catch {
      if (!Intl) return this[n(1597)].error("No Intl support, please use an Intl polyfill!"), Wa;
      if (!x[n(1325)](/-|_/)) return Wa;
      const u = this.languageUtils.getLanguagePartFromCode(x);
      o = this.getRule(u, t);
    }
    return this.pluralRulesCache[s] = o, o;
  }
  needsPlural(x, t = {}) {
    const n = a;
    let e = this[n(1989)](x, t);
    return e || (e = this[n(1989)](n(2134), t)), (e == null ? void 0 : e.resolvedOptions()[n(1201)].length) > 1;
  }
  [a(505)](x, t, n = {}) {
    const e = a;
    return this[e(395)](x, n)[e(2348)]((r) => "" + t + r);
  }
  [a(395)](x, t = {}) {
    const n = a;
    let e = this[n(1989)](x, t);
    return e || (e = this[n(1989)](n(2134), t)), e ? e[n(2767)]().pluralCategories[n(1572)]((r, s) => Ba[r] - Ba[s]).map((r) => "" + this[n(2393)].prepend + (t[n(2600)] ? n(2600) + this[n(2393)][n(1464)] : "") + r) : [];
  }
  [a(2544)](x, t, n = {}) {
    const e = a, r = this.getRule(x, n);
    return r ? "" + this[e(2393)].prepend + (n.ordinal ? "ordinal" + this[e(2393)][e(1464)] : "") + r[e(2589)](t) : (this[e(1597)][e(2791)](e(542) + x), this[e(2544)]("dev", t, n));
  }
}
const Ka = (i, x, t, n = ".", e = !0) => {
  let r = io(i, x, t);
  return !r && e && g0(t) && (r = Wt(i, t, n), r === void 0 && (r = Wt(x, t, n))), r;
}, Bx = (i) => i.replace(/\$/g, a(1884));
class go {
  constructor(x = {}) {
    var n;
    const t = a;
    this.logger = le[t(1644)]("interpolator"), this.options = x, this[t(1477)] = ((n = x == null ? void 0 : x[t(1497)]) == null ? void 0 : n[t(1477)]) || ((e) => e), this[t(2012)](x);
  }
  [a(2012)](x = {}) {
    const t = a;
    x.interpolation || (x[t(1497)] = { escapeValue: !0 });
    const { escape: n, escapeValue: e, useRawValueToEscape: r, prefix: s, prefixEscaped: o, suffix: c, suffixEscaped: u, formatSeparator: d, unescapeSuffix: f, unescapePrefix: l, nestingPrefix: g, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: b, nestingOptionsSeparator: S, maxReplaces: P, alwaysFormat: q } = x[t(1497)];
    this[t(1982)] = n !== void 0 ? n : co, this[t(1998)] = e !== void 0 ? e : !0, this[t(932)] = r !== void 0 ? r : !1, this[t(1794)] = s ? He(s) : o || "{{", this[t(1991)] = c ? He(c) : u || "}}", this.formatSeparator = d || ",", this[t(2430)] = f ? "" : l || "-", this.unescapeSuffix = this[t(2430)] ? "" : f || "", this[t(2689)] = g ? He(g) : h || He(t(473)), this.nestingSuffix = m ? He(m) : b || He(")"), this[t(1191)] = S || ",", this.maxReplaces = P || 1e3, this[t(2083)] = q !== void 0 ? q : !1, this[t(287)]();
  }
  [a(1702)]() {
    const x = a;
    this[x(2393)] && this.init(this[x(2393)]);
  }
  [a(287)]() {
    const x = a, t = (n, e) => {
      const r = W;
      return (n == null ? void 0 : n[r(443)]) === e ? (n[r(1615)] = 0, n) : new RegExp(e, "g");
    };
    this[x(1591)] = t(this[x(1591)], this[x(1794)] + x(1039) + this[x(1991)]), this[x(1931)] = t(this[x(1931)], "" + this[x(1794)] + this[x(2430)] + "(.+?)" + this[x(1637)] + this.suffix), this[x(1527)] = t(this[x(1527)], this[x(2689)] + "(.+?)" + this[x(2349)]);
  }
  [a(808)](x, t, n, e) {
    var h;
    const r = a;
    let s, o, c;
    const u = this.options && this[r(2393)][r(1497)] && this[r(2393)][r(1497)].defaultVariables || {}, d = (m) => {
      const b = r;
      if (m.indexOf(this.formatSeparator) < 0) {
        const A = Ka(t, u, m, this[b(2393)][b(2678)], this[b(2393)][b(1064)]);
        return this[b(2083)] ? this[b(1477)](A, void 0, n, { ...e, ...t, interpolationkey: m }) : A;
      }
      const S = m.split(this[b(1880)]), P = S[b(966)]().trim(), q = S[b(1825)](this[b(1880)]).trim();
      return this.format(Ka(t, u, P, this[b(2393)][b(2678)], this[b(2393)][b(1064)]), q, n, { ...e, ...t, interpolationkey: P });
    };
    this[r(287)]();
    const f = (e == null ? void 0 : e[r(1694)]) || this.options[r(1694)], l = ((h = e == null ? void 0 : e.interpolation) == null ? void 0 : h[r(1639)]) !== void 0 ? e[r(1497)][r(1639)] : this[r(2393)][r(1497)][r(1639)];
    return [{ regex: this.regexpUnescape, safeValue: (m) => Bx(m) }, { regex: this[r(1591)], safeValue: (m) => this.escapeValue ? Bx(this[r(1982)](m)) : Bx(m) }][r(442)]((m) => {
      const b = r;
      for (c = 0; s = m[b(1759)][b(1878)](x); ) {
        const S = s[1][b(977)]();
        if (o = d(S), o === void 0)
          if (typeof f === b(2189)) {
            const q = f(x, s, e);
            o = g0(q) ? q : "";
          } else if (e && Object[b(983)][b(894)][b(1138)](e, S)) o = "";
          else if (l) {
            o = s[0];
            continue;
          } else this[b(1597)][b(2791)](b(928) + S + b(971) + x), o = "";
        else !g0(o) && !this[b(932)] && (o = Ma(o));
        const P = m[b(2654)](o);
        if (x = x[b(2735)](s[0], P), l ? (m[b(1759)][b(1615)] += o[b(1028)], m.regex[b(1615)] -= s[0][b(1028)]) : m[b(1759)][b(1615)] = 0, c++, c >= this.maxReplaces) break;
      }
    }), x;
  }
  [a(854)](x, t, n = {}) {
    const e = a;
    let r, s, o;
    const c = (u, d) => {
      const f = W, l = this[f(1191)];
      if (u[f(2775)](l) < 0) return u;
      const g = u[f(2742)](new RegExp(l + "[ ]*{"));
      let h = "{" + g[1];
      u = g[0], h = this[f(808)](h, o);
      const m = h[f(1325)](/'/g), b = h.match(/"/g);
      (((m == null ? void 0 : m[f(1028)]) ?? 0) % 2 === 0 && !b || b.length % 2 !== 0) && (h = h[f(2735)](/'/g, '"'));
      try {
        o = JSON.parse(h), d && (o = { ...d, ...o });
      } catch (S) {
        return this[f(1597)][f(2791)]("failed parsing options string in nesting for key " + u, S), "" + u + l + h;
      }
      return o[f(454)] && o[f(454)].indexOf(this[f(1794)]) > -1 && delete o[f(454)], u;
    };
    for (; r = this[e(1527)][e(1878)](x); ) {
      let u = [];
      o = { ...n }, o = o[e(2735)] && !g0(o.replace) ? o[e(2735)] : o, o[e(2539)] = !1, delete o[e(454)];
      let d = !1;
      if (r[0].indexOf(this[e(1880)]) !== -1 && !/{.*}/[e(551)](r[1])) {
        const f = r[1][e(2742)](this.formatSeparator)[e(2348)]((l) => l[e(977)]());
        r[1] = f[e(966)](), u = f, d = !0;
      }
      if (s = t(c[e(1138)](this, r[1].trim(), o), o), s && r[0] === x && !g0(s)) return s;
      g0(s) || (s = Ma(s)), !s && (this[e(1597)].warn("missed to resolve " + r[1] + " for nesting " + x), s = ""), d && (s = u[e(1950)]((f, l) => this[e(1477)](f, l, n[e(1094)], { ...n, interpolationkey: r[1][e(977)]() }), s[e(977)]())), x = x[e(2735)](r[0], s), this[e(1591)].lastIndex = 0;
    }
    return x;
  }
}
const yo = (i) => {
  const x = a;
  let t = i[x(1268)]().trim();
  const n = {};
  if (i[x(2775)]("(") > -1) {
    const e = i[x(2742)]("(");
    t = e[0].toLowerCase()[x(977)]();
    const r = e[1][x(1466)](0, e[1][x(1028)] - 1);
    t === x(503) && r[x(2775)](":") < 0 ? n[x(503)] || (n.currency = r.trim()) : t === x(2079) && r[x(2775)](":") < 0 ? n[x(1756)] || (n.range = r.trim()) : r.split(";")[x(442)]((o) => {
      const c = x;
      if (o) {
        const [u, ...d] = o[c(2742)](":"), f = d[c(1825)](":")[c(977)]()[c(2735)](/^'+|'+$/g, ""), l = u[c(977)]();
        n[l] || (n[l] = f), f === "false" && (n[l] = !1), f === c(420) && (n[l] = !0), isNaN(f) || (n[l] = parseInt(f, 10));
      }
    });
  }
  return { formatName: t, formatOptions: n };
}, Ga = (i) => {
  const x = {};
  return (t, n, e) => {
    const r = W;
    let s = e;
    e && e[r(2655)] && e[r(2781)] && e[r(2781)][e[r(2655)]] && e[e.interpolationkey] && (s = { ...s, [e[r(2655)]]: void 0 });
    const o = n + JSON[r(956)](s);
    let c = x[o];
    return !c && (c = i(rx(n), e), x[o] = c), c(t);
  };
}, vo = (i) => (x, t, n) => i(rx(t), n)(x);
class bo {
  constructor(x = {}) {
    const t = a;
    this[t(1597)] = le[t(1644)](t(2458)), this[t(2393)] = x, this.init(x);
  }
  [a(2012)](x, t = { interpolation: {} }) {
    const n = a;
    this.formatSeparator = t[n(1497)][n(1880)] || ",";
    const e = t[n(2e3)] ? Ga : vo;
    this[n(2219)] = { number: e((r, s) => {
      const o = n, c = new Intl.NumberFormat(r, { ...s });
      return (u) => c[o(1477)](u);
    }), currency: e((r, s) => {
      const o = n, c = new Intl.NumberFormat(r, { ...s, style: o(503) });
      return (u) => c[o(1477)](u);
    }), datetime: e((r, s) => {
      const o = n, c = new Intl[o(1206)](r, { ...s });
      return (u) => c[o(1477)](u);
    }), relativetime: e((r, s) => {
      const o = n, c = new Intl[o(2566)](r, { ...s });
      return (u) => c[o(1477)](u, s[o(1756)] || o(2447));
    }), list: e((r, s) => {
      const o = n, c = new Intl[o(834)](r, { ...s });
      return (u) => c[o(1477)](u);
    }) };
  }
  [a(1323)](x, t) {
    const n = a;
    this[n(2219)][x[n(1268)]()[n(977)]()] = t;
  }
  [a(1391)](x, t) {
    const n = a;
    this[n(2219)][x.toLowerCase().trim()] = Ga(t);
  }
  [a(1477)](x, t, n, e = {}) {
    const r = a, s = t[r(2742)](this.formatSeparator);
    if (s[r(1028)] > 1 && s[0][r(2775)]("(") > 1 && s[0][r(2775)](")") < 0 && s.find((c) => c.indexOf(")") > -1)) {
      const c = s.findIndex((u) => u[r(2775)](")") > -1);
      s[0] = [s[0], ...s.splice(1, c)][r(1825)](this[r(1880)]);
    }
    return s[r(1950)]((c, u) => {
      var g;
      const d = r, { formatName: f, formatOptions: l } = yo(u);
      if (this.formats[f]) {
        let h = c;
        try {
          const m = ((g = e == null ? void 0 : e[d(2781)]) == null ? void 0 : g[e[d(2655)]]) || {}, b = m[d(2258)] || m.lng || e[d(2258)] || e.lng || n;
          h = this[d(2219)][f](c, b, { ...l, ...e, ...m });
        } catch (m) {
          this[d(1597)][d(2791)](m);
        }
        return h;
      } else this.logger.warn(d(2819) + f);
      return c;
    }, x);
  }
}
const wo = (i, x) => {
  const t = a;
  i[t(1308)][x] !== void 0 && (delete i[t(1308)][x], i[t(428)]--);
};
class So extends Ax {
  constructor(x, t, n, e = {}) {
    var s, o;
    const r = a;
    super(), this[r(464)] = x, this[r(768)] = t, this[r(774)] = n, this.languageUtils = n[r(1604)], this.options = e, this.logger = le.create(r(1751)), this[r(2701)] = [], this.maxParallelReads = e[r(1458)] || 10, this[r(867)] = 0, this[r(299)] = e.maxRetries >= 0 ? e.maxRetries : 5, this[r(923)] = e.retryTimeout >= 1 ? e[r(923)] : 350, this[r(2032)] = {}, this.queue = [], (o = (s = this.backend) == null ? void 0 : s[r(2012)]) == null || o.call(s, n, e[r(464)], e);
  }
  [a(2056)](x, t, n, e) {
    const r = a, s = {}, o = {}, c = {}, u = {};
    return x.forEach((d) => {
      const f = W;
      let l = !0;
      t[f(442)]((g) => {
        const h = f, m = d + "|" + g;
        !n[h(2476)] && this[h(768)][h(1709)](d, g) ? this.state[m] = 2 : this[h(2032)][m] < 0 || (this[h(2032)][m] === 1 ? o[m] === void 0 && (o[m] = !0) : (this.state[m] = 1, l = !1, o[m] === void 0 && (o[m] = !0), s[m] === void 0 && (s[m] = !0), u[g] === void 0 && (u[g] = !0)));
      }), l || (c[d] = !0);
    }), (Object[r(2459)](s).length || Object[r(2459)](o).length) && this[r(382)][r(2037)]({ pending: o, pendingCount: Object[r(2459)](o).length, loaded: {}, errors: [], callback: e }), { toLoad: Object[r(2459)](s), pending: Object[r(2459)](o), toLoadLanguages: Object.keys(c), toLoadNamespaces: Object.keys(u) };
  }
  [a(1550)](x, t, n) {
    const e = a, r = x[e(2742)]("|"), s = r[0], o = r[1];
    t && this[e(962)](e(2651), s, o, t), !t && n && this[e(768)][e(1995)](s, o, n, void 0, void 0, { skipCopy: !0 }), this[e(2032)][x] = t ? -1 : 2, t && n && (this.state[x] = 0);
    const c = {};
    this.queue[e(442)]((u) => {
      const d = e;
      so(u.loaded, [s], o), wo(u, x), t && u[d(836)][d(2037)](t), u[d(428)] === 0 && !u[d(585)] && (Object[d(2459)](u[d(1550)])[d(442)]((f) => {
        const l = d;
        c[f] || (c[f] = {});
        const g = u.loaded[f];
        g[l(1028)] && g.forEach((h) => {
          c[f][h] === void 0 && (c[f][h] = !0);
        });
      }), u[d(585)] = !0, u[d(836)][d(1028)] ? u[d(1621)](u[d(836)]) : u[d(1621)]());
    }), this[e(962)]("loaded", c), this[e(382)] = this[e(382)][e(1001)]((u) => !u[e(585)]);
  }
  [a(1057)](x, t, n, e = 0, r = this[a(923)], s) {
    const o = a;
    if (!x[o(1028)]) return s(null, {});
    if (this[o(867)] >= this[o(1458)]) {
      this[o(2701)][o(2037)]({ lng: x, ns: t, fcName: n, tried: e, wait: r, callback: s });
      return;
    }
    this[o(867)]++;
    const c = (d, f) => {
      const l = o;
      if (this[l(867)]--, this[l(2701)][l(1028)] > 0) {
        const g = this.waitingReads[l(966)]();
        this[l(1057)](g[l(1094)], g.ns, g[l(455)], g[l(1161)], g[l(628)], g[l(1621)]);
      }
      if (d && f && e < this[l(299)]) {
        setTimeout(() => {
          const g = l;
          this[g(1057)][g(1138)](this, x, t, n, e + 1, r * 2, s);
        }, r);
        return;
      }
      s(d, f);
    }, u = this[o(464)][n][o(885)](this[o(464)]);
    if (u[o(1028)] === 2) {
      try {
        const d = u(x, t);
        d && typeof d[o(1463)] === o(2189) ? d[o(1463)]((f) => c(null, f))[o(950)](c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return u(x, t, c);
  }
  [a(1864)](x, t, n = {}, e) {
    const r = a;
    if (!this[r(464)]) return this.logger[r(2791)]("No backend was added via i18next.use. Will not load resources."), e && e();
    g0(x) && (x = this[r(1604)][r(1032)](x)), g0(t) && (t = [t]);
    const s = this[r(2056)](x, t, n, e);
    if (!s[r(2220)][r(1028)])
      return s.pending[r(1028)] || e(), null;
    s[r(2220)][r(442)]((o) => {
      this[r(1388)](o);
    });
  }
  [a(2747)](x, t, n) {
    this[a(1864)](x, t, {}, n);
  }
  [a(2476)](x, t, n) {
    this[a(1864)](x, t, { reload: !0 }, n);
  }
  [a(1388)](x, t = "") {
    const n = a, e = x.split("|"), r = e[0], s = e[1];
    this[n(1057)](r, s, "read", void 0, void 0, (o, c) => {
      const u = n;
      o && this.logger[u(2791)](t + "loading namespace " + s + u(990) + r + " failed", o), !o && c && this[u(1597)][u(1263)](t + u(611) + s + u(990) + r, c), this.loaded(x, o, c);
    });
  }
  [a(444)](x, t, n, e, r, s = {}, o = () => {
  }) {
    var u, d, f, l, g;
    const c = a;
    if ((d = (u = this[c(774)]) == null ? void 0 : u[c(1400)]) != null && d[c(1688)] && !((l = (f = this[c(774)]) == null ? void 0 : f[c(1400)]) != null && l.hasLoadedNamespace(t))) {
      this.logger[c(2791)](c(739) + n + c(1783) + t + '" was not yet loaded', c(1622));
      return;
    }
    if (!(n == null || n === "")) {
      if ((g = this.backend) != null && g[c(1644)]) {
        const h = { ...s, isUpdate: r }, m = this[c(464)].create[c(885)](this.backend);
        if (m.length < 6) try {
          let b;
          m[c(1028)] === 5 ? b = m(x, t, n, e, h) : b = m(x, t, n, e), b && typeof b[c(1463)] === c(2189) ? b.then((S) => o(null, S)).catch(o) : o(null, b);
        } catch (b) {
          o(b);
        }
        else m(x, t, n, e, o, h);
      }
      !x || !x[0] || this[c(768)][c(311)](x[0], t, n, e);
    }
  }
}
const Ja = () => ({ debug: !1, initAsync: !0, ns: ["translation"], defaultNS: [a(849)], fallbackLng: [a(2134)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: a(972), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: a(1501), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (i) => {
  const x = a;
  let t = {};
  if (typeof i[1] == "object" && (t = i[1]), g0(i[1]) && (t[x(454)] = i[1]), g0(i[2]) && (t[x(1357)] = i[2]), typeof i[2] === x(513) || typeof i[3] === x(513)) {
    const n = i[3] || i[2];
    Object[x(2459)](n).forEach((e) => {
      t[e] = n[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (i) => i, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: a(473), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), Qa = (i) => {
  var t, n;
  const x = a;
  return g0(i.ns) && (i.ns = [i.ns]), g0(i[x(1526)]) && (i.fallbackLng = [i.fallbackLng]), g0(i[x(400)]) && (i.fallbackNS = [i[x(400)]]), ((n = (t = i.supportedLngs) == null ? void 0 : t.indexOf) == null ? void 0 : n.call(t, x(1073))) < 0 && (i[x(2193)] = i.supportedLngs[x(2133)]([x(1073)])), typeof i[x(2373)] === x(781) && (i[x(616)] = i[x(2373)]), i;
}, hx = () => {
}, ko = (i) => {
  const x = a;
  Object[x(1468)](Object[x(557)](i))[x(442)]((n) => {
    const e = x;
    typeof i[n] === e(2189) && (i[n] = i[n][e(885)](i));
  });
};
class nx extends Ax {
  constructor(x = {}, t) {
    const n = a;
    if (super(), this[n(2393)] = Qa(x), this[n(774)] = {}, this[n(1597)] = le, this[n(2618)] = { external: [] }, ko(this), t && !this[n(1180)] && !x[n(1228)]) {
      if (!this[n(2393)].initAsync) return this.init(x, t), this;
      setTimeout(() => {
        this[n(2012)](x, t);
      }, 0);
    }
  }
  [a(2012)](x = {}, t) {
    const n = a;
    this[n(1101)] = !0, typeof x === n(2189) && (t = x, x = {}), x.defaultNS == null && x.ns && (g0(x.ns) ? x[n(2253)] = x.ns : x.ns.indexOf(n(849)) < 0 && (x[n(2253)] = x.ns[0]));
    const e = Ja();
    this[n(2393)] = { ...e, ...this[n(2393)], ...Qa(x) }, this[n(2393)][n(1497)] = { ...e[n(1497)], ...this[n(2393)][n(1497)] }, x[n(2678)] !== void 0 && (this.options.userDefinedKeySeparator = x[n(2678)]), x[n(1640)] !== void 0 && (this[n(2393)].userDefinedNsSeparator = x.nsSeparator);
    const r = (d) => {
      const f = n;
      return d ? typeof d === f(2189) ? new d() : d : null;
    };
    if (!this[n(2393)][n(1228)]) {
      this[n(2618)][n(1597)] ? le[n(2012)](r(this[n(2618)][n(1597)]), this[n(2393)]) : le[n(2012)](null, this.options);
      let d;
      this[n(2618)][n(2458)] ? d = this.modules[n(2458)] : d = bo;
      const f = new _a(this.options);
      this[n(768)] = new Ua(this[n(2393)][n(1627)], this[n(2393)]);
      const l = this[n(774)];
      l[n(1597)] = le, l[n(2281)] = this[n(768)], l[n(1604)] = f, l[n(2491)] = new mo(f, { prepend: this.options.pluralSeparator, simplifyPluralSuffix: this[n(2393)][n(995)] }), d && (!this[n(2393)].interpolation.format || this[n(2393)][n(1497)][n(1477)] === e[n(1497)].format) && (l[n(2458)] = r(d), l[n(2458)][n(2012)](l, this.options), this[n(2393)].interpolation[n(1477)] = l.formatter[n(1477)].bind(l[n(2458)])), l[n(818)] = new go(this[n(2393)]), l[n(1400)] = { hasLoadedNamespace: this[n(1688)][n(885)](this) }, l[n(1751)] = new So(r(this[n(2618)][n(464)]), l[n(2281)], l, this.options), l[n(1751)].on("*", (g, ...h) => {
        this[n(962)](g, ...h);
      }), this[n(2618)][n(2765)] && (l[n(2765)] = r(this[n(2618)][n(2765)]), l[n(2765)][n(2012)] && l[n(2765)][n(2012)](l, this[n(2393)][n(1834)], this.options)), this.modules.i18nFormat && (l.i18nFormat = r(this[n(2618)].i18nFormat), l[n(2559)][n(2012)] && l[n(2559)][n(2012)](this)), this[n(702)] = new Fx(this.services, this[n(2393)]), this[n(702)].on("*", (g, ...h) => {
        this[n(962)](g, ...h);
      }), this[n(2618)][n(2073)][n(442)]((g) => {
        const h = n;
        g[h(2012)] && g[h(2012)](this);
      });
    }
    if (this[n(1477)] = this[n(2393)].interpolation[n(1477)], t || (t = hx), this[n(2393)].fallbackLng && !this[n(774)][n(2765)] && !this[n(2393)][n(1094)]) {
      const d = this.services[n(1604)].getFallbackCodes(this[n(2393)][n(1526)]);
      d[n(1028)] > 0 && d[0] !== "dev" && (this[n(2393)][n(1094)] = d[0]);
    }
    !this.services.languageDetector && !this[n(2393)][n(1094)] && this[n(1597)].warn(n(2109)), [n(2454), n(1709), "getResourceBundle", n(1793)][n(442)]((d) => {
      this[d] = (...f) => this.store[d](...f);
    }), [n(311), n(648), "addResourceBundle", "removeResourceBundle"][n(442)]((d) => {
      this[d] = (...f) => (this[W(768)][d](...f), this);
    });
    const c = Ge(), u = () => {
      const d = n, f = (l, g) => {
        const h = W;
        this[h(1101)] = !1, this.isInitialized && !this.initializedStoreOnce && this[h(1597)][h(2791)]("init: i18next is already initialized. You should call init just once!"), this[h(1180)] = !0, this.options[h(1228)] || this[h(1597)][h(1263)]("initialized", this[h(2393)]), this.emit("initialized", this[h(2393)]), c[h(2272)](g), t(l, g);
      };
      if (this[d(2107)] && !this[d(1180)]) return f(null, this.t[d(885)](this));
      this[d(309)](this[d(2393)].lng, f);
    };
    return this[n(2393)][n(1627)] || !this[n(2393)].initAsync ? u() : setTimeout(u, 0), c;
  }
  [a(2085)](x, t = hx) {
    var s, o;
    const n = a;
    let e = t;
    const r = g0(x) ? x : this[n(2347)];
    if (typeof x === n(2189) && (e = x), !this[n(2393)][n(1627)] || this[n(2393)][n(1390)]) {
      if ((r == null ? void 0 : r.toLowerCase()) === n(1073) && (!this[n(2393)].preload || this[n(2393)][n(1665)][n(1028)] === 0)) return e();
      const c = [], u = (d) => {
        const f = n;
        if (!d || d === f(1073)) return;
        this.services[f(1604)][f(1032)](d)[f(442)]((g) => {
          const h = f;
          g !== "cimode" && c.indexOf(g) < 0 && c[h(2037)](g);
        });
      };
      r ? u(r) : this[n(774)][n(1604)][n(2225)](this[n(2393)][n(1526)]).forEach((f) => u(f)), (o = (s = this[n(2393)].preload) == null ? void 0 : s[n(442)]) == null || o.call(s, (d) => u(d)), this[n(774)][n(1751)][n(2747)](c, this[n(2393)].ns, (d) => {
        const f = n;
        !d && !this[f(857)] && this[f(2347)] && this[f(2404)](this[f(2347)]), e(d);
      });
    } else e(null);
  }
  reloadResources(x, t, n) {
    const e = a, r = Ge();
    return typeof x == "function" && (n = x, x = void 0), typeof t == "function" && (n = t, t = void 0), x || (x = this[e(2107)]), t || (t = this[e(2393)].ns), n || (n = hx), this[e(774)][e(1751)][e(2476)](x, t, (s) => {
      r[e(2272)](), n(s);
    }), r;
  }
  use(x) {
    const t = a;
    if (!x) throw new Error(t(1947));
    if (!x[t(2299)]) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return x[t(2299)] === "backend" && (this[t(2618)].backend = x), (x.type === t(1597) || x[t(1263)] && x[t(2791)] && x.error) && (this[t(2618)].logger = x), x[t(2299)] === "languageDetector" && (this[t(2618)][t(2765)] = x), x[t(2299)] === "i18nFormat" && (this[t(2618)][t(2559)] = x), x.type === t(710) && Vn[t(708)](x), x[t(2299)] === t(2458) && (this[t(2618)].formatter = x), x.type === t(1948) && this[t(2618)][t(2073)][t(2037)](x), this;
  }
  [a(2404)](x) {
    const t = a;
    if (!(!x || !this[t(2107)]) && !([t(1073), t(2134)].indexOf(x) > -1)) {
      for (let n = 0; n < this[t(2107)][t(1028)]; n++) {
        const e = this[t(2107)][n];
        if (!([t(1073), t(2134)][t(2775)](e) > -1) && this[t(768)].hasLanguageSomeTranslations(e)) {
          this[t(857)] = e;
          break;
        }
      }
      !this.resolvedLanguage && this[t(2107)][t(2775)](x) < 0 && this[t(768)][t(2070)](x) && (this[t(857)] = x, this.languages[t(1967)](x));
    }
  }
  [a(309)](x, t) {
    const n = a;
    this.isLanguageChangingTo = x;
    const e = Ge();
    this[n(962)](n(377), x);
    const r = (c) => {
      const u = n;
      this[u(2347)] = c, this[u(2107)] = this[u(774)][u(1604)].toResolveHierarchy(c), this.resolvedLanguage = void 0, this.setResolvedLanguage(c);
    }, s = (c, u) => {
      const d = n;
      u ? this.isLanguageChangingTo === x && (r(u), this[d(702)].changeLanguage(u), this[d(2380)] = void 0, this[d(962)](d(426), u), this[d(1597)][d(1263)](d(426), u)) : this[d(2380)] = void 0, e[d(2272)]((...f) => this.t(...f)), t && t(c, (...f) => this.t(...f));
    }, o = (c) => {
      var l, g;
      const u = n;
      !x && !c && this[u(774)][u(2765)] && (c = []);
      const d = g0(c) ? c : c && c[0], f = this[u(768)][u(2070)](d) ? d : this.services[u(1604)][u(366)](g0(c) ? [c] : c);
      f && (!this[u(2347)] && r(f), this[u(702)][u(2347)] || this[u(702)][u(309)](f), (g = (l = this[u(774)][u(2765)]) == null ? void 0 : l.cacheUserLanguage) == null || g.call(l, f)), this[u(2085)](f, (h) => {
        s(h, f);
      });
    };
    return !x && this[n(774)][n(2765)] && !this[n(774)][n(2765)].async ? o(this[n(774)].languageDetector[n(1817)]()) : !x && this[n(774)][n(2765)] && this.services.languageDetector.async ? this[n(774)].languageDetector[n(1817)][n(1028)] === 0 ? this[n(774)][n(2765)][n(1817)]()[n(1463)](o) : this[n(774)][n(2765)][n(1817)](o) : o(x), e;
  }
  [a(2633)](x, t, n) {
    const e = a, r = (s, o, ...c) => {
      const u = W;
      let d;
      typeof o !== u(513) ? d = this[u(2393)].overloadTranslationOptionHandler([s, o][u(2133)](c)) : d = { ...o }, d.lng = d.lng || r.lng, d[u(277)] = d[u(277)] || r.lngs, d.ns = d.ns || r.ns, d[u(800)] !== "" && (d.keyPrefix = d[u(800)] || n || r[u(800)]);
      const f = this.options[u(2678)] || ".";
      let l;
      return d.keyPrefix && Array[u(1265)](s) ? l = s.map((g) => "" + d.keyPrefix + f + g) : l = d[u(800)] ? "" + d[u(800)] + f + s : s, this.t(l, d);
    };
    return g0(x) ? r[e(1094)] = x : r[e(277)] = x, r.ns = t, r[e(800)] = n, r;
  }
  t(...x) {
    var n;
    const t = a;
    return (n = this.translator) == null ? void 0 : n[t(480)](...x);
  }
  [a(2755)](...x) {
    var n;
    return (n = this[a(702)]) == null ? void 0 : n.exists(...x);
  }
  setDefaultNamespace(x) {
    const t = a;
    this[t(2393)][t(2253)] = x;
  }
  [a(1688)](x, t = {}) {
    const n = a;
    if (!this[n(1180)]) return this[n(1597)][n(2791)](n(413), this.languages), !1;
    if (!this[n(2107)] || !this[n(2107)][n(1028)]) return this[n(1597)][n(2791)](n(2505), this[n(2107)]), !1;
    const e = t[n(1094)] || this[n(857)] || this[n(2107)][0], r = this[n(2393)] ? this[n(2393)][n(1526)] : !1, s = this.languages[this[n(2107)].length - 1];
    if (e[n(1268)]() === "cimode") return !0;
    const o = (c, u) => {
      const d = n, f = this[d(774)][d(1751)].state[c + "|" + u];
      return f === -1 || f === 0 || f === 2;
    };
    if (t.precheck) {
      const c = t[n(1429)](this, o);
      if (c !== void 0) return c;
    }
    return !!(this[n(1709)](e, x) || !this[n(774)].backendConnector[n(464)] || this.options[n(1627)] && !this[n(2393)].partialBundledLanguages || o(e, x) && (!r || o(s, x)));
  }
  [a(876)](x, t) {
    const n = a, e = Ge();
    return this[n(2393)].ns ? (g0(x) && (x = [x]), x[n(442)]((r) => {
      const s = n;
      this[s(2393)].ns.indexOf(r) < 0 && this[s(2393)].ns[s(2037)](r);
    }), this[n(2085)]((r) => {
      e[n(2272)](), t && t(r);
    }), e) : (t && t(), Promise[n(2272)]());
  }
  [a(1690)](x, t) {
    const n = a, e = Ge();
    g0(x) && (x = [x]);
    const r = this[n(2393)][n(1665)] || [], s = x.filter((o) => r[n(2775)](o) < 0 && this[n(774)][n(1604)][n(2407)](o));
    return s[n(1028)] ? (this[n(2393)].preload = r.concat(s), this[n(2085)]((o) => {
      e.resolve(), t && t(o);
    }), e) : (t && t(), Promise[n(2272)]());
  }
  [a(2697)](x) {
    var r, s;
    const t = a;
    if (x || (x = this[t(857)] || (((r = this[t(2107)]) == null ? void 0 : r[t(1028)]) > 0 ? this[t(2107)][0] : this.language)), !x) return t(2586);
    const n = ["ar", "shu", t(456), t(376), t(994), t(2128), t(1696), t(1560), t(2763), t(1166), "acm", "acq", t(2277), t(1383), "acy", "adf", t(673), t(840), t(2523), t(330), t(2687), "apc", "apd", t(2431), t(1937), t(1667), t(2441), "arz", t(2713), t(820), "ayh", "ayl", "ayn", t(258), t(517), t(945), "he", "iw", "ps", t(1661), t(819), t(1538), t(2741), "prd", "ug", "ur", "ydd", "yds", t(866), "ji", "yi", t(1174), t(2182), "xmn", "fa", t(563), t(1223), t(672), t(1034), "dv", "sam", t(722)], e = ((s = this[t(774)]) == null ? void 0 : s[t(1604)]) || new _a(Ja());
    return n[t(2775)](e[t(1898)](x)) > -1 || x[t(1268)]().indexOf(t(2291)) > 1 ? t(2586) : t(620);
  }
  static [a(1387)](x = {}, t) {
    return new nx(x, t);
  }
  [a(492)](x = {}, t = hx) {
    const n = a, e = x[n(1936)];
    e && delete x.forkResourceStore;
    const r = { ...this[n(2393)], ...x, isClone: !0 }, s = new nx(r);
    if ((x.debug !== void 0 || x[n(1794)] !== void 0) && (s[n(1597)] = s[n(1597)][n(1473)](x)), [n(768), n(774), n(2347)][n(442)]((c) => {
      s[c] = this[c];
    }), s.services = { ...this[n(774)] }, s[n(774)][n(1400)] = { hasLoadedNamespace: s.hasLoadedNamespace[n(885)](s) }, e) {
      const c = Object[n(2459)](this[n(768)][n(2584)]).reduce((u, d) => {
        const f = n;
        return u[d] = { ...this[f(768)][f(2584)][d] }, u[d] = Object[f(2459)](u[d])[f(1950)]((l, g) => (l[g] = { ...u[d][g] }, l), u[d]), u;
      }, {});
      s[n(768)] = new Ua(c, r), s.services[n(2281)] = s.store;
    }
    return s.translator = new Fx(s.services, r), s[n(702)].on("*", (c, ...u) => {
      s[n(962)](c, ...u);
    }), s[n(2012)](r, t), s[n(702)][n(2393)] = r, s.translator[n(1751)][n(774)][n(1400)] = { hasLoadedNamespace: s.hasLoadedNamespace[n(885)](s) }, s;
  }
  [a(2751)]() {
    const x = a;
    return { options: this.options, store: this.store, language: this[x(2347)], languages: this[x(2107)], resolvedLanguage: this[x(857)] };
  }
}
const X0 = nx.createInstance();
X0.createInstance = nx.createInstance, X0[a(1387)], X0[a(2697)], X0[a(2012)], X0[a(2085)], X0[a(1677)], X0[a(1036)], X0[a(309)], X0[a(2633)], X0.t, X0[a(2755)], X0.setDefaultNamespace, X0[a(1688)], X0[a(876)], X0[a(1690)];
function Po() {
  const i = a;
  if (typeof navigator !== i(1210) && navigator[i(2347)]) return navigator[i(2347)] === i(1131) ? i(1131) : "en-US";
  try {
    const x = typeof require < "u" ? require : void 0;
    if (x)
      return x("uxp")[i(2445)][i(1669)][i(2354)]("zh") ? i(1131) : i(944);
  } catch {
  }
  return i(944);
}
let Zn = Po();
const Io = { "zh-CN": {}, "en-US": {} };
function Kt(i) {
  const x = a, t = i === x(1131) ? to : ao, n = Io[i];
  return { ...t, ...n };
}
function Eo() {
  return Zn;
}
function Gt(i, x = {}) {
  const t = a;
  let e = Kt(Zn)[i];
  return e ? typeof e === t(654) ? e.replace(/\{\{(\w+)\}\}/g, (r, s) => x[s] !== void 0 ? String(x[s]) : r) : e : i;
}
const Ro = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Co = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, Fo = (i) => Co[i], No = (i) => i[a(2735)](Ro, Fo);
let Xa = { bindI18n: a(426), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", a(2482), "i", "p"], useSuspense: !0, unescape: No };
const qo = (i = {}) => {
  Xa = { ...Xa, ...i };
}, Ao = { type: a(1948), init(i) {
  const x = a;
  qo(i[x(2393)][x(1407)]);
} };
!X0[a(1180)] && X0[a(1036)](Ao)[a(2012)]({ resources: { "zh-CN": { translation: Kt(a(1131)) }, "en-US": { translation: Kt("en-US") } }, lng: Eo(), fallbackLng: a(944), interpolation: { escapeValue: !1 } });
const Re = [];
Ye[a(2044)] = Ye[a(2044)] || {}, Ye[a(2044)].add = function(i, x) {
  const t = a;
  typeof x === t(2189) ? Re[t(2037)]([i, { formatter: x, setter: null }]) : Re[t(2037)]([i, x]);
};
function To(i, x, t) {
  var c, u, d;
  const n = a, e = Re[n(647)](([f]) => f == n(460)), r = Re.find(([f]) => ra(f, i.type)) || e;
  let s = !1;
  if (r) {
    const f = r[1].setter;
    f && (s = !!f(i, x, t));
  }
  !s && (i[n(1480)][x][n(1135)] = t, (u = (c = i[n(1480)][x]).callback) == null || u.call(c, t)), (d = (q0.workflowManager || q0[n(1150)][n(2043)])[n(2530)]) == null || d[n(1896)][n(1806)]();
}
function Nx(i) {
  const x = a, t = {}, n = Re[x(647)](([e]) => e == "__DEFAULT__");
  return i[x(1870)][x(442)]((e) => {
    const r = x;
    if (!e[r(1480)] || e[r(1480)][r(1028)] == 0) return;
    const s = Re[r(647)](([o]) => ra(o, e[r(2299)])) || n;
    if (s) try {
      const o = s[1][r(2458)](e);
      o && (t[e.id] = o[r(1480)][r(2348)]((c) => c.value));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function Jt(i, x) {
  var r, s, o;
  const t = a;
  if (!i) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const n = i[t(1870)].map((c) => {
    const u = t;
    if (c[u(2591)] != 0) return;
    const d = mx(c);
    if (!d || d[u(2354)](".") || !c[u(1480)] || c[u(1480)].length == 0) return;
    let f = Re[u(647)](([m]) => ra(m, c[u(2299)]));
    if (f) try {
      const m = f[1][u(2458)](c);
      if (m) return m.id = c.id, m[u(2184)] = m.widgets.reduce((b, S) => b + (S[u(2029)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: d, uiWeightSum: 12, widgets: [{ outputType: u(1314), value: Gt(u(2806), f[0]) + (m[u(705)] || m || ""), name: "", options: {} }] };
    }
    if (!d[u(2354)]("#")) return null;
    let l = c[u(1480)];
    const g = Re[u(647)](([m]) => m == u(460));
    if (g) {
      const m = g[1][u(2458)](c);
      if (m) return Object[u(2596)](m, { uiWeightSum: m[u(1480)][u(1950)]((b, S) => b + (S[u(2029)] || 12), 0) });
    }
    const h = { id: c.id, title: d, widgets: l.map((m) => ({ name: m[u(1348)] || m[u(2409)], outputType: m.type || u(654), value: m.value, options: m[u(2393)] })) };
    return Object.assign(h, { uiWeightSum: h[u(1480)][u(1950)]((m, b) => m + (b[u(2029)] || 12), 0) });
  }).filter(Boolean)[t(1572)]((c, u) => {
    const d = t;
    let f = mx(c), l = mx(u);
    return f = f[d(2354)]("#") ? f.slice(1)[d(977)]() : f.trim(), l = l[d(2354)]("#") ? l[d(2460)](1)[d(977)]() : l.trim(), f[d(2649)](l);
  }), e = ((s = (r = i[t(1870)][t(647)]((c) => c.type == t(2345) && c[t(2374)][t(1325)](/SD-?PPP/i))) == null ? void 0 : r.widgets[0]) == null ? void 0 : s[t(1135)]) || "";
  return { widgetablePath: ((o = x[t(2448)][t(2190)]) == null ? void 0 : o[t(441)]) || x[t(1055)], widgetableID: x.activeState.id, nodes: n[t(1950)]((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: n[t(2348)]((c) => c.id), options: {} };
}
function ra(i, x) {
  const t = a, n = i[t(2735)](/[.+^${}()|[\]\\]/g, t(1293))[t(2735)](/\*/g, ".*")[t(2735)](/\?/g, ".");
  return new RegExp("^" + n + "$").test(x);
}
function mx(i, x = "") {
  var e;
  const t = a;
  let n = x || i.title || "";
  return i[t(2515)] && (n[t(2354)]("#") || n[t(2354)](".")) ? i[t(2515)](t(1239), n) : n = ((e = i[t(1683)]) == null ? void 0 : e[t(1239)]) || n, n;
}
Ye[a(1189)] = mx;
const Qt = sx[a(2761)](a(1262)), Ya = /* @__PURE__ */ new Set();
E0.implementAction(a(466), async (i) => {
  const x = a;
  return requestAnimationFrame(ms), i[x(1652)][x(442)](({ nodeID: t, widgetIndex: n, value: e }) => {
    const r = x, s = q0[r(1252)][r(1870)][r(647)]((o) => o.id == t);
    To(s, n, e);
  }), { success: !0 };
}), E0[a(1695)]("openWorkflow", async (i) => {
  const x = a, { workflow_path: t } = i, n = !Ya.has(t), e = i[x(1702)] || n;
  Ya[x(1323)](t);
  const r = q0[x(1150)][x(2043)] || q0[x(2538)], s = r[x(1921)][x(647)]((c) => c[x(1165)] === t || c.path === t || c[x(1055)] === "workflows/" + t);
  if (!e) {
    const c = await Oo(r, s);
    if (Qt("reset=false but needsReset: " + c), c) await Wx(r, s);
    else try {
      await o(r, s);
    } catch {
      await Wx(r, s);
    }
    return { success: !0 };
  }
  return await Wx(r, s), { success: !0 };
  async function o(c, u) {
    const d = x;
    Qt(d(317) + u.path, u[d(2429)]), q0[d(2538)] == c ? await u[d(2747)]() : (await c[d(973)](u), await q0[d(657)](JSON.parse(JSON.stringify(u[d(2429)])), !0, !0, u, {}));
  }
}), E0[a(1695)](a(1031), async function(i) {
  const x = a;
  let { workflow_content: t, workflow_path: n } = i;
  return t[x(2190)] = { ...t[x(2190)] || {}, sdppp_workflow_alias: n }, await q0[x(657)](t), { success: !0 };
}), E0[a(1695)](a(2118), async (i) => {
  var r;
  const x = a, t = q0[x(2538)] || q0[x(1150)].workflow;
  (r = t[x(688)]) == null || r.call(t), await new Promise((s) => requestAnimationFrame(s));
  let e = t[x(1921)].map((s) => s[x(1055)][x(2735)](x(252), ""));
  try {
    const s = new Headers(), o = localStorage.getItem(x(338));
    o && s[x(2663)](x(1711), o);
    const c = await fetch(x(1568), { headers: s });
    let u = [];
    c.ok && (u = (await c[x(1335)]())[x(2785)][x(2348)]((f) => f[x(2735)](x(252), ""))), e.sort((d, f) => {
      const l = x, g = u[l(2147)](d), h = u[l(2147)](f);
      return g && !h ? -1 : !g && h ? 1 : d[l(2649)](f);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), E0[a(1695)](a(1066), async (i) => {
  var s;
  const x = a, { workflow_path: t, from_sid: n } = i, e = q0[x(2538)] || q0[x(1150)][x(2043)], r = e[x(1921)][x(647)]((o) => o.fullFilename === t || o[x(1055)] === t || o[x(1055)] === x(252) + t);
  if (!r) throw new Error(x(1214));
  return ((s = e[x(2530)]) == null ? void 0 : s.id) != r.id && await q0[x(973)](t, n, !1), r[x(1896)].checkState(), await e.saveWorkflow(r), { success: !0 };
});
async function Oo(i, x) {
  var e, r, s;
  const t = a;
  if (!x || !(((e = i[t(2530)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((r = x.changeTracker) != null && r.checkState) try {
    x[t(1896)][t(1806)]();
  } catch (o) {
    console[t(2791)](t(2333), o);
  }
  try {
    const o = (s = q0[t(1252)]) == null ? void 0 : s[t(1072)](), c = x.activeState;
    if (!o || !c) return !1;
    const u = JSON[t(956)](o), d = JSON[t(956)](c);
    return u !== d;
  } catch (o) {
    return console.warn(t(494), o), !1;
  }
}
async function Wx(i, x) {
  var e;
  const t = a;
  Qt(t(2254) + x.path);
  async function n(r, s) {
    const o = t;
    q0[o(2538)] == r ? await s[o(2747)]() : (await r[o(973)](s), await q0.loadGraphData(JSON[o(861)](JSON.stringify(s[o(2448)])), !0, !0, s, {}));
  }
  if ((x[t(1599)] || (e = i[t(1599)]) != null && e.call(i, x)) && i[t(2712)][t(1028)] === 1) {
    const r = i.createTemporary();
    i[t(973)](r);
  } else await n(i, i.openWorkflows[0] == x ? i[t(2712)][1] : i.openWorkflows[0]);
  await i[t(459)](x, !1), await new Promise((r) => requestAnimationFrame(r)), await n(i, x);
}
const Qe = sx[a(2761)](a(478)), qe = /* @__PURE__ */ new Map();
function Do(i, x) {
  const t = a, n = qe[t(474)](i);
  Qe(t(2680), i, x, n, qe), n && n[t(686)](x);
}
E0.implementAction(a(1628), async function* (i) {
  const x = a;
  let t = !1, n = [];
  function e() {
    const l = W;
    if (t) return;
    const g = Oe[l(1144)];
    Oe[l(1144)] = async (...h) => {
      const m = l;
      try {
        const b = await g.call(Oe, ...h);
        return n[m(2037)]({ error: null, result: b, prompt_id: b[m(2121)] }), b;
      } catch (b) {
        throw n[m(2037)]({ error: b, result: null, prompt_id: "" }), b;
      }
    }, t = !0;
  }
  t || e();
  const r = i[x(524)];
  let s = !1, o = {}, c = [];
  E0.store.setState({ lastError: "", widgetableErrors: {} });
  try {
    n = [], await q0[x(1144)](1, r), n[x(442)]((l) => {
      var h, m;
      const g = x;
      if (l[g(1314)]) s = !0, o = l.error[g(1369)] ? f(l.error[g(1369)][g(831)]) : {}, Object[g(2596)](o, { "-1": ((m = (h = l[g(1314)][g(1369)]) == null ? void 0 : h[g(1314)]) == null ? void 0 : m[g(705)]) || l[g(1314)][g(705)] });
      else {
        const b = l.result[g(2121)];
        c[g(2037)](b);
        let S, P;
        const q = new Promise((R, I) => {
          S = R, P = I;
        }), A = { promise: q, resolveImage: S, rejectImage: P };
        qe.set(b, A);
      }
    });
  } catch (l) {
    Qe("app.queuePrompt caught", l[x(2304)]), s = !0, o = { "-1": l[x(705)] || l.toString() };
  }
  Qe(x(1673), s, o, x(2821), c), s && E0[x(768)][x(2248)]({ widgetableErrors: o });
  let u = [];
  const d = /* @__PURE__ */ new Map();
  for (const l of c) {
    const g = qe[x(474)](l);
    g && d.set(l, g[x(1411)]);
  }
  for (Qe("waiting for queue prompt"); d[x(524)] > 0; ) {
    const l = Array[x(871)](d[x(1500)]()), g = l[x(2348)](([b, S]) => S.then((P) => ({ prompt_id: b, images: P }))), { prompt_id: h, images: m } = await Promise[x(2104)](g);
    Qe(x(695), h), u[x(2037)](...m), d[x(243)](h), qe.delete(h), yield { success: !0, prompt_ids: [h], images: m };
  }
  function f(l) {
    const g = x, h = {};
    return Object[g(2459)](l).forEach((m) => {
      const b = g, S = m[b(2742)](":")[0], P = q0[b(1252)].nodes[b(647)]((q) => q.id == S);
      h[S] = "[" + ((P == null ? void 0 : P[b(2374)]) || S) + "]" + l[m][b(836)][b(2348)](JSON[b(956)])[b(1825)](`
`);
    }), h;
  }
}), E0.implementAction(a(401), async () => {
  const i = a;
  await q0[i(2679)].clearItems(i(382)), await q0[i(2679)][i(383)]();
  const x = Array[i(871)](qe[i(1652)]());
  qe.clear();
  for (const t of x)
    try {
      t[i(2222)](new Error(i(1290)));
    } catch {
    }
  return { success: !0 };
});
const jo = sx.extend("actions:util");
E0.implementAction("sdpppHandshake", async (i) => {
  const x = a;
  return i != null && i[x(2644)] && jo("Received host version from UXP:", i[x(2644)]), { comfyVersion: x(1915), hostVersion: (i == null ? void 0 : i[x(2644)]) ?? "" };
}), E0[a(1695)](a(789), async (i) => {
  const x = a, { node_id: t, title: n } = i, e = q0[x(1252)][x(1870)][x(647)]((r) => r.id == t);
  if (!e) throw new Error(x(2146));
  return e[x(2374)] = n, e.setProperty("sdppp_widgetable_title", n), { success: !0 };
}), E0[a(1695)]("reboot", async () => {
  const i = a, x = await fetch(i(921));
  return x[i(1444)] == 404 ? { error: Gt(i(1127)), success: !1 } : x[i(1444)] == 200 ? { success: !0 } : { error: Gt(i(1697)) + x.statusText, success: !1 };
}), E0[a(1695)](a(2388), async (i) => {
  const x = a, { api_key: t } = i;
  return localStorage[x(775)]("comfy_api_key", t), location[x(2476)](), { success: !0 };
}), E0.implementAction(a(2200), async () => {
  const i = a;
  return document[i(1472)](i(823))[i(1663)][i(714)](), { success: !0 };
});
function Lo(i) {
  const x = a, t = atob(i), n = t[x(1028)], e = new Uint8Array(n);
  for (let r = 0; r < n; r++)
    e[r] = t[x(1235)](r);
  return e;
}
E0[a(1695)](a(2183), async (i, x, t) => {
  const n = a, { fileName: e, overwrite: r = !0, mimeType: s = n(2302), dataBase64: o } = i;
  if (t != null && t.aborted) throw new DOMException("Upload aborted", n(934));
  const c = Lo(o), u = new Blob([c], { type: s }), d = new FormData();
  d.append(n(1957), u), d[n(1827)](n(1850), e), d.append(n(1134), r ? "true" : n(477));
  const f = await fetch(n(367), { method: n(2170), body: d, signal: t });
  if (!f.ok) throw new Error(n(394) + f.statusText);
  const l = await f[n(1335)]();
  return { name: l.subfolder + "/" + l[n(2409)] };
});
const _n = a(1133), Mo = [_n, a(364), a(1585), a(461)], Tx = a(587), Bn = B0([y(), K()[a(2648)]()]), Wn = y(), $o = k({ progressToken: _(Bn) }).passthrough(), re = k({ _meta: _($o) })[a(259)](), xe = k({ method: y(), params: _(re) }), ix = k({ _meta: _(k({}).passthrough()) })[a(259)](), me = k({ method: y(), params: _(ix) }), ne = k({ _meta: _(k({})[a(259)]()) }).passthrough(), Ox = B0([y(), K()[a(2648)]()]), Kn = k({ jsonrpc: x0(Tx), id: Ox })[a(2234)](xe)[a(521)](), zo = (i) => Kn.safeParse(i).success, Gn = k({ jsonrpc: x0(Tx) })[a(2234)](me).strict(), Ho = (i) => Gn[a(270)](i)[a(1868)], Jn = k({ jsonrpc: x0(Tx), id: Ox, result: ne }).strict(), er = (i) => Jn[a(270)](i)[a(1868)];
var be;
(function(i) {
  const x = a;
  i[i[x(2308)] = -32e3] = "ConnectionClosed", i[i[x(1528)] = -32001] = "RequestTimeout", i[i[x(2125)] = -32700] = x(2125), i[i[x(2740)] = -32600] = x(2740), i[i[x(1685)] = -32601] = x(1685), i[i[x(2707)] = -32602] = x(2707), i[i[x(904)] = -32603] = x(904);
})(be || (be = {}));
const Qn = k({ jsonrpc: x0(Tx), id: Ox, error: k({ code: K().int(), message: y(), data: _(Me()) }) }).strict(), Uo = (i) => Qn.safeParse(i).success;
B0([Kn, Gn, Jn, Qn]);
const Xt = ne[a(521)](), Yt = me[a(2761)]({ method: x0(a(432)), params: ix[a(2761)]({ requestId: Ox, reason: y()[a(612)]() }) }), ox = k({ name: y(), title: _(y()) }).passthrough(), Xn = ox[a(2761)]({ version: y() }), Vo = k({ experimental: _(k({})[a(259)]()), sampling: _(k({}).passthrough()), elicitation: _(k({})[a(259)]()), roots: _(k({ listChanged: _(e0()) })[a(259)]()) })[a(259)](), Yn = xe[a(2761)]({ method: x0(a(1018)), params: re.extend({ protocolVersion: y(), capabilities: Vo, clientInfo: Xn }) }), Zo = k({ experimental: _(k({}).passthrough()), logging: _(k({})[a(259)]()), completions: _(k({})[a(259)]()), prompts: _(k({ listChanged: _(e0()) })[a(259)]()), resources: _(k({ subscribe: _(e0()), listChanged: _(e0()) }).passthrough()), tools: _(k({ listChanged: _(e0()) }).passthrough()) })[a(259)](), _o = ne[a(2761)]({ protocolVersion: y(), capabilities: Zo, serverInfo: Xn, instructions: _(y()) }), es = me[a(2761)]({ method: x0(a(2638)) }), ea = xe[a(2761)]({ method: x0("ping") }), Bo = k({ progress: K(), total: _(K()), message: _(y()) }).passthrough(), xa = me[a(2761)]({ method: x0(a(1266)), params: ix[a(2234)](Bo)[a(2761)]({ progressToken: Bn }) }), Dx = xe[a(2761)]({ params: re.extend({ cursor: _(Wn) }).optional() }), jx = ne[a(2761)]({ nextCursor: _(Wn) }), xs = k({ uri: y(), mimeType: _(y()), _meta: _(k({})[a(259)]()) }).passthrough(), ts = xs[a(2761)]({ text: y() }), as = xs[a(2761)]({ blob: y()[a(1595)]() }), rs = ox[a(2761)]({ uri: y(), description: _(y()), mimeType: _(y()), _meta: _(k({})[a(259)]()) }), Wo = ox[a(2761)]({ uriTemplate: y(), description: _(y()), mimeType: _(y()), _meta: _(k({})[a(259)]()) }), Ko = Dx[a(2761)]({ method: x0(a(1259)) }), Go = jx[a(2761)]({ resources: b0(rs) }), Jo = Dx[a(2761)]({ method: x0(a(2677)) }), Qo = jx[a(2761)]({ resourceTemplates: b0(Wo) }), Xo = xe.extend({ method: x0(a(1117)), params: re[a(2761)]({ uri: y() }) }), Yo = ne[a(2761)]({ contents: b0(B0([ts, as])) }), e2 = me[a(2761)]({ method: x0(a(1435)) }), x2 = xe[a(2761)]({ method: x0(a(1932)), params: re[a(2761)]({ uri: y() }) }), t2 = xe[a(2761)]({ method: x0("resources/unsubscribe"), params: re[a(2761)]({ uri: y() }) }), a2 = me[a(2761)]({ method: x0("notifications/resources/updated"), params: ix[a(2761)]({ uri: y() }) }), r2 = k({ name: y(), description: _(y()), required: _(e0()) })[a(259)](), n2 = ox[a(2761)]({ description: _(y()), arguments: _(b0(r2)), _meta: _(k({})[a(259)]()) }), s2 = Dx.extend({ method: x0(a(1679)) }), i2 = jx[a(2761)]({ prompts: b0(n2) }), o2 = xe[a(2761)]({ method: x0(a(821)), params: re[a(2761)]({ name: y(), arguments: _(H0(y())) }) }), na = k({ type: x0(a(1990)), text: y(), _meta: _(k({})[a(259)]()) }).passthrough(), sa = k({ type: x0(a(1957)), data: y()[a(1595)](), mimeType: y(), _meta: _(k({})[a(259)]()) })[a(259)](), ia = k({ type: x0(a(1544)), data: y()[a(1595)](), mimeType: y(), _meta: _(k({})[a(259)]()) })[a(259)](), c2 = k({ type: x0("resource"), resource: B0([ts, as]), _meta: _(k({}).passthrough()) })[a(259)](), u2 = rs[a(2761)]({ type: x0(a(1495)) }), ns = B0([na, sa, ia, u2, c2]), d2 = k({ role: I0([a(2231), "assistant"]), content: ns })[a(259)](), f2 = ne[a(2761)]({ description: _(y()), messages: b0(d2) }), l2 = me[a(2761)]({ method: x0(a(2387)) }), h2 = k({ title: _(y()), readOnlyHint: _(e0()), destructiveHint: _(e0()), idempotentHint: _(e0()), openWorldHint: _(e0()) })[a(259)](), p2 = ox[a(2761)]({ description: _(y()), inputSchema: k({ type: x0(a(513)), properties: _(k({})[a(259)]()), required: _(b0(y())) })[a(259)](), outputSchema: _(k({ type: x0(a(513)), properties: _(k({})[a(259)]()), required: _(b0(y())) }).passthrough()), annotations: _(h2), _meta: _(k({})[a(259)]()) }), m2 = Dx[a(2761)]({ method: x0(a(1892)) }), g2 = jx[a(2761)]({ tools: b0(p2) }), ss = ne[a(2761)]({ content: b0(ns)[a(574)]([]), structuredContent: k({})[a(259)]()[a(612)](), isError: _(e0()) });
ss.or(ne[a(2761)]({ toolResult: Me() }));
const y2 = xe[a(2761)]({ method: x0(a(1555)), params: re.extend({ name: y(), arguments: _(H0(Me())) }) }), v2 = me[a(2761)]({ method: x0("notifications/tools/list_changed") }), is = I0(["debug", a(2320), "notice", a(1385), a(1314), a(2119), a(2489), a(1521)]), b2 = xe[a(2761)]({ method: x0(a(745)), params: re.extend({ level: is }) }), w2 = me[a(2761)]({ method: x0("notifications/message"), params: ix[a(2761)]({ level: is, logger: _(y()), data: Me() }) }), S2 = k({ name: y()[a(612)]() })[a(259)](), k2 = k({ hints: _(b0(S2)), costPriority: _(K()[a(1482)](0)[a(1828)](1)), speedPriority: _(K()[a(1482)](0).max(1)), intelligencePriority: _(K()[a(1482)](0)[a(1828)](1)) })[a(259)](), P2 = k({ role: I0([a(2231), a(651)]), content: B0([na, sa, ia]) }).passthrough(), I2 = xe.extend({ method: x0(a(297)), params: re[a(2761)]({ messages: b0(P2), systemPrompt: _(y()), includeContext: _(I0(["none", a(354), a(2194)])), temperature: _(K()), maxTokens: K()[a(2648)](), stopSequences: _(b0(y())), metadata: _(k({}).passthrough()), modelPreferences: _(k2) }) }), os = ne[a(2761)]({ model: y(), stopReason: _(I0([a(1192), "stopSequence", a(516)]).or(y())), role: I0([a(2231), "assistant"]), content: Mn(a(2299), [na, sa, ia]) }), E2 = k({ type: x0(a(781)), title: _(y()), description: _(y()), default: _(e0()) }).passthrough(), R2 = k({ type: x0(a(654)), title: _(y()), description: _(y()), minLength: _(K()), maxLength: _(K()), format: _(I0([a(425), a(1373), a(268), "date-time"])) }).passthrough(), C2 = k({ type: I0([a(536), a(999)]), title: _(y()), description: _(y()), minimum: _(K()), maximum: _(K()) })[a(259)](), F2 = k({ type: x0(a(654)), title: _(y()), description: _(y()), enum: b0(y()), enumNames: _(b0(y())) })[a(259)](), N2 = B0([E2, R2, C2, F2]), q2 = xe.extend({ method: x0(a(631)), params: re[a(2761)]({ message: y(), requestedSchema: k({ type: x0(a(513)), properties: H0(y(), N2), required: _(b0(y())) })[a(259)]() }) }), cs = ne.extend({ action: I0([a(2332), "decline", "cancel"]), content: _(H0(y(), Me())) }), A2 = k({ type: x0(a(1907)), uri: y() })[a(259)](), T2 = k({ type: x0(a(2426)), name: y() })[a(259)](), O2 = xe[a(2761)]({ method: x0(a(1365)), params: re[a(2761)]({ ref: B0([T2, A2]), argument: k({ name: y(), value: y() })[a(259)](), context: _(k({ arguments: _(H0(y(), y())) })) }) }), D2 = ne[a(2761)]({ completion: k({ values: b0(y()).max(100), total: _(K()[a(2648)]()), hasMore: _(e0()) })[a(259)]() }), j2 = k({ uri: y().startsWith("file://"), name: _(y()), _meta: _(k({})[a(259)]()) }).passthrough(), L2 = xe[a(2761)]({ method: x0(a(427)) }), us = ne[a(2761)]({ roots: b0(j2) }), M2 = me[a(2761)]({ method: x0("notifications/roots/list_changed") });
B0([ea, Yn, O2, b2, o2, s2, Ko, Jo, Xo, x2, t2, y2, m2]), B0([Yt, xa, es, M2]), B0([Xt, os, cs, us]), B0([ea, I2, q2, L2]), B0([Yt, xa, w2, a2, e2, v2, l2]), B0([Xt, _o, D2, f2, i2, Go, Qo, Yo, ss, g2]);
class Te extends Error {
  constructor(x, t, n) {
    const e = a;
    super(e(1219) + x + ": " + t), this[e(1744)] = x, this[e(2584)] = n, this[e(2409)] = e(1253);
  }
}
const $2 = 6e4;
class z2 {
  constructor(x) {
    const t = a;
    this[t(1065)] = x, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this[t(1147)] = /* @__PURE__ */ new Map(), this[t(1866)] = /* @__PURE__ */ new Map(), this[t(1164)] = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this[t(2555)] = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this[t(1078)](Yt, (n) => {
      const e = t, r = this[e(1147)][e(474)](n[e(1675)].requestId);
      r == null || r[e(1607)](n[e(1675)][e(2080)]);
    }), this.setNotificationHandler(xa, (n) => {
      this[t(804)](n);
    }), this.setRequestHandler(ea, (n) => ({}));
  }
  _setupTimeout(x, t, n, e, r = !1) {
    const s = a;
    this[s(2555)][s(2663)](x, { timeoutId: setTimeout(e, t), startTime: Date[s(391)](), timeout: t, maxTotalTimeout: n, resetTimeoutOnProgress: r, onTimeout: e });
  }
  [a(1410)](x) {
    const t = a, n = this[t(2555)][t(474)](x);
    if (!n) return !1;
    const e = Date[t(391)]() - n[t(707)];
    if (n[t(2366)] && e >= n.maxTotalTimeout)
      throw this._timeoutInfo[t(243)](x), new Te(be[t(1528)], t(2748), { maxTotalTimeout: n[t(2366)], totalElapsed: e });
    return clearTimeout(n[t(2327)]), n[t(2327)] = setTimeout(n[t(445)], n.timeout), !0;
  }
  [a(2020)](x) {
    const t = a, n = this[t(2555)][t(474)](x);
    n && (clearTimeout(n[t(2327)]), this._timeoutInfo.delete(x));
  }
  async [a(515)](x) {
    const t = a;
    var n, e, r;
    this[t(1676)] = x;
    const s = (n = this[t(637)]) === null || n === void 0 ? void 0 : n.onclose;
    this[t(1676)][t(1773)] = () => {
      s == null || s(), this._onclose();
    };
    const o = (e = this[t(637)]) === null || e === void 0 ? void 0 : e[t(887)];
    this[t(1676)][t(887)] = (u) => {
      const d = t;
      o == null || o(u), this[d(1587)](u);
    };
    const c = (r = this._transport) === null || r === void 0 ? void 0 : r.onmessage;
    this._transport[t(2463)] = (u, d) => {
      const f = t;
      c == null || c(u, d), er(u) || Uo(u) ? this[f(1999)](u) : zo(u) ? this[f(1062)](u, d) : Ho(u) ? this[f(803)](u) : this[f(1587)](new Error("Unknown message type: " + JSON[f(956)](u)));
    }, await this[t(1676)][t(2558)]();
  }
  [a(2637)]() {
    const x = a;
    var t;
    const n = this._responseHandlers;
    this[x(1164)] = /* @__PURE__ */ new Map(), this[x(1578)][x(817)](), this[x(2449)][x(817)](), this[x(1676)] = void 0, (t = this[x(1773)]) === null || t === void 0 || t[x(1138)](this);
    const e = new Te(be.ConnectionClosed, "Connection closed");
    for (const r of n[x(1652)]())
      r(e);
  }
  _onerror(x) {
    const t = a;
    var n;
    (n = this[t(887)]) === null || n === void 0 || n[t(1138)](this, x);
  }
  [a(803)](x) {
    const t = a;
    var n;
    const e = (n = this[t(1866)][t(474)](x[t(2244)])) !== null && n !== void 0 ? n : this[t(888)];
    e !== void 0 && Promise[t(2272)]()[t(1463)](() => e(x)).catch((r) => this[t(1587)](new Error(t(2587) + r)));
  }
  _onrequest(x, t) {
    const n = a;
    var e, r, s, o;
    const c = (e = this[n(555)][n(474)](x[n(2244)])) !== null && e !== void 0 ? e : this[n(782)];
    if (c === void 0) {
      (r = this[n(1676)]) === null || r === void 0 || r.send({ jsonrpc: "2.0", id: x.id, error: { code: be.MethodNotFound, message: "Method not found" } }).catch((f) => this[n(1587)](new Error(n(1106) + f)));
      return;
    }
    const u = new AbortController();
    this._requestHandlerAbortControllers[n(2663)](x.id, u);
    const d = { signal: u[n(1347)], sessionId: (s = this[n(1676)]) === null || s === void 0 ? void 0 : s[n(2293)], _meta: (o = x[n(1675)]) === null || o === void 0 ? void 0 : o._meta, sendNotification: (f) => this[n(2336)](f, { relatedRequestId: x.id }), sendRequest: (f, l, g) => this[n(2698)](f, l, { ...g, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t[n(2675)], requestId: x.id, requestInfo: t == null ? void 0 : t[n(1900)] };
    Promise[n(2272)]()[n(1463)](() => c(x, d))[n(1463)]((f) => {
      const l = n;
      var g;
      if (!u.signal[l(1452)])
        return (g = this._transport) === null || g === void 0 ? void 0 : g.send({ result: f, jsonrpc: l(587), id: x.id });
    }, (f) => {
      const l = n;
      var g, h;
      if (!u[l(1347)][l(1452)])
        return (g = this[l(1676)]) === null || g === void 0 ? void 0 : g.send({ jsonrpc: l(587), id: x.id, error: { code: Number.isSafeInteger(f[l(1744)]) ? f.code : be.InternalError, message: (h = f.message) !== null && h !== void 0 ? h : l(2777) } });
    })[n(950)]((f) => this._onerror(new Error(n(1154) + f)))[n(2705)](() => {
      const f = n;
      this[f(1147)][f(243)](x.id);
    });
  }
  [a(804)](x) {
    const t = a, { progressToken: n, ...e } = x[t(1675)], r = Number(n), s = this[t(1578)][t(474)](r);
    if (!s) {
      this[t(1587)](new Error(t(603) + JSON[t(956)](x)));
      return;
    }
    const o = this[t(1164)][t(474)](r), c = this[t(2555)].get(r);
    if (c && o && c[t(332)]) try {
      this[t(1410)](r);
    } catch (u) {
      o(u);
      return;
    }
    s(e);
  }
  [a(1999)](x) {
    const t = a, n = Number(x.id), e = this[t(1164)].get(n);
    if (e === void 0) {
      this._onerror(new Error(t(718) + JSON[t(956)](x)));
      return;
    }
    if (this._responseHandlers[t(243)](n), this[t(1578)][t(243)](n), this[t(2020)](n), er(x)) e(x);
    else {
      const r = new Te(x[t(1314)][t(1744)], x.error[t(705)], x.error[t(2584)]);
      e(r);
    }
  }
  get [a(637)]() {
    return this[a(1676)];
  }
  async [a(1841)]() {
    const x = a;
    var t;
    await ((t = this[x(1676)]) === null || t === void 0 ? void 0 : t.close());
  }
  request(x, t, n) {
    const { relatedRequestId: e, resumptionToken: r, onresumptiontoken: s } = n ?? {};
    return new Promise((o, c) => {
      const u = W;
      var d, f, l, g, h, m;
      if (!this[u(1676)]) {
        c(new Error(u(266)));
        return;
      }
      ((d = this[u(1065)]) === null || d === void 0 ? void 0 : d[u(1359)]) === !0 && this[u(958)](x.method), (f = n == null ? void 0 : n[u(1347)]) === null || f === void 0 || f[u(1195)]();
      const b = this._requestMessageId++, S = { ...x, jsonrpc: u(587), id: b };
      n != null && n.onprogress && (this[u(1578)].set(b, n[u(2137)]), S.params = { ...x[u(1675)], _meta: { ...((l = x[u(1675)]) === null || l === void 0 ? void 0 : l._meta) || {}, progressToken: b } });
      const P = (R) => {
        const I = u;
        var C;
        this[I(1164)][I(243)](b), this[I(1578)][I(243)](b), this._cleanupTimeout(b), (C = this[I(1676)]) === null || C === void 0 || C[I(1200)]({ jsonrpc: I(587), method: "notifications/cancelled", params: { requestId: b, reason: String(R) } }, { relatedRequestId: e, resumptionToken: r, onresumptiontoken: s })[I(950)]((O) => this[I(1587)](new Error(I(2319) + O))), c(R);
      };
      this[u(1164)][u(2663)](b, (R) => {
        const I = u;
        var C;
        if (!(!((C = n == null ? void 0 : n.signal) === null || C === void 0) && C[I(1452)])) {
          if (R instanceof Error) return c(R);
          try {
            const O = t[I(861)](R.result);
            o(O);
          } catch (O) {
            c(O);
          }
        }
      }), (g = n == null ? void 0 : n[u(1347)]) === null || g === void 0 || g.addEventListener(u(1607), () => {
        const R = u;
        var I;
        P((I = n == null ? void 0 : n[R(1347)]) === null || I === void 0 ? void 0 : I.reason);
      });
      const q = (h = n == null ? void 0 : n[u(2204)]) !== null && h !== void 0 ? h : $2, A = () => P(new Te(be.RequestTimeout, u(2167), { timeout: q }));
      this[u(801)](b, q, n == null ? void 0 : n[u(2366)], A, (m = n == null ? void 0 : n[u(332)]) !== null && m !== void 0 ? m : !1), this[u(1676)][u(1200)](S, { relatedRequestId: e, resumptionToken: r, onresumptiontoken: s })[u(950)]((R) => {
        this._cleanupTimeout(b), c(R);
      });
    });
  }
  async [a(2336)](x, t) {
    const n = a;
    var e, r;
    if (!this._transport) throw new Error(n(266));
    if (this[n(632)](x[n(2244)]), ((r = (e = this[n(1065)]) === null || e === void 0 ? void 0 : e[n(2279)]) !== null && r !== void 0 ? r : []).includes(x.method) && !x[n(1675)] && !(t != null && t[n(2726)])) {
      if (this._pendingDebouncedNotifications[n(341)](x[n(2244)])) return;
      this._pendingDebouncedNotifications.add(x[n(2244)]), Promise[n(2272)]().then(() => {
        const u = n;
        var d;
        if (this._pendingDebouncedNotifications.delete(x.method), !this[u(1676)]) return;
        const f = { ...x, jsonrpc: u(587) };
        (d = this._transport) === null || d === void 0 || d.send(f, t)[u(950)]((l) => this[u(1587)](l));
      });
      return;
    }
    const c = { ...x, jsonrpc: n(587) };
    await this[n(1676)][n(1200)](c, t);
  }
  [a(936)](x, t) {
    const n = a, e = x[n(1559)].method.value;
    this[n(1441)](e), this._requestHandlers[n(2663)](e, (r, s) => {
      const o = n;
      return Promise[o(2272)](t(x[o(861)](r), s));
    });
  }
  [a(438)](x) {
    const t = a;
    this[t(555)][t(243)](x);
  }
  [a(2098)](x) {
    const t = a;
    if (this._requestHandlers[t(341)](x)) throw new Error(t(2165) + x + t(1734));
  }
  [a(1078)](x, t) {
    const n = a;
    this._notificationHandlers[n(2663)](x[n(1559)][n(2244)][n(1135)], (e) => Promise[n(2272)](t(x[n(861)](e))));
  }
  [a(2691)](x) {
    this[a(1866)].delete(x);
  }
}
function H2(i, x) {
  const t = a;
  return Object.entries(x)[t(1950)]((n, [e, r]) => (r && typeof r === t(513) ? n[e] = n[e] ? { ...n[e], ...r } : r : n[e] = r, n), { ...i });
}
var Xe = { exports: {} }, U2 = Xe[a(1949)], xr;
function V2() {
  const i = a;
  return xr || (xr = 1, function(x, t) {
    (function(n, e) {
      e(t);
    })(U2, function(n) {
      const e = W;
      function r() {
        const E = W;
        for (var p = arguments[E(1028)], v = Array(p), w = 0; w < p; w++)
          v[w] = arguments[w];
        if (v[E(1028)] > 1) {
          v[0] = v[0].slice(0, -1);
          for (var H = v[E(1028)] - 1, $ = 1; $ < H; ++$)
            v[$] = v[$][E(2460)](1, -1);
          return v[H] = v[H].slice(1), v[E(1825)]("");
        } else return v[0];
      }
      function s(E) {
        return W(1103) + E + ")";
      }
      function o(E) {
        const p = W;
        return E === void 0 ? "undefined" : E === null ? p(2672) : Object[p(983)][p(1707)][p(1138)](E)[p(2742)](" ").pop()[p(2742)]("]")[p(966)]()[p(1268)]();
      }
      function c(E) {
        return E[W(392)]();
      }
      function u(E) {
        const p = W;
        return E != null ? E instanceof Array ? E : typeof E[p(1028)] !== p(536) || E.split || E[p(2346)] || E[p(1138)] ? [E] : Array.prototype[p(2460)][p(1138)](E) : [];
      }
      function d(E, p) {
        var v = E;
        if (p) for (var w in p)
          v[w] = p[w];
        return v;
      }
      function f(E) {
        const p = W;
        var v = p(2411), w = p(1320), H = r(w, p(766)), $ = s(s(p(1479) + H + "%" + H + H + "%" + H + H) + "|" + s(p(1358) + H + "%" + H + H) + "|" + s("%" + H + H)), s0 = p(1960), d0 = p(1453), C0 = r(s0, d0), j0 = E ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", Z0 = E ? "[\\uE000-\\uF8FF]" : "[]", P0 = r(v, w, p(326), j0);
        s(v + r(v, w, p(1052)) + "*"), s(s($ + "|" + r(P0, d0, p(1021))) + "*");
        var D0 = s(s("25[0-5]") + "|" + s(p(931) + w) + "|" + s("1" + w + w) + "|" + s(p(1157) + w) + "|0?0?" + w), _0 = s(D0 + "\\." + D0 + "\\." + D0 + "\\." + D0), y0 = s(H + p(1245)), $0 = s(s(y0 + "\\:" + y0) + "|" + _0), W0 = s(s(y0 + "\\:") + p(600) + $0), z0 = s(p(2738) + s(y0 + "\\:") + p(1080) + $0), Pe = s(s(y0) + "?\\:\\:" + s(y0 + "\\:") + p(2462) + $0), oe = s(s(s(y0 + "\\:") + p(572) + y0) + p(2669) + s(y0 + "\\:") + p(1852) + $0), ce = s(s(s(y0 + "\\:") + "{0,2}" + y0) + "?\\:\\:" + s(y0 + "\\:") + p(2156) + $0), ze = s(s(s(y0 + "\\:") + p(520) + y0) + "?\\:\\:" + y0 + "\\:" + $0), Fe = s(s(s(y0 + "\\:") + p(235) + y0) + p(2669) + $0), te = s(s(s(y0 + "\\:") + "{0,5}" + y0) + p(2669) + y0), ue = s(s(s(y0 + "\\:") + "{0,6}" + y0) + p(2669)), de = s([W0, z0, Pe, oe, ce, ze, Fe, te, ue][p(1825)]("|")), ye = s(s(P0 + "|" + $) + "+");
        s(p(2175) + H + p(1800) + r(P0, d0, p(1021)) + "+"), s(s($ + "|" + r(P0, d0)) + "*");
        var fe = s($ + "|" + r(P0, d0, p(2173)));
        return s(s($ + "|" + r(P0, d0, "[\\@]")) + "+"), s(s(fe + "|" + r("[\\/\\?]", Z0)) + "*"), { NOT_SCHEME: new RegExp(r(p(685), v, w, "[\\+\\-\\.]"), "g"), NOT_USERINFO: new RegExp(r("[^\\%\\:]", P0, d0), "g"), NOT_HOST: new RegExp(r("[^\\%\\[\\]\\:]", P0, d0), "g"), NOT_PATH: new RegExp(r(p(1535), P0, d0), "g"), NOT_PATH_NOSCHEME: new RegExp(r(p(1085), P0, d0), "g"), NOT_QUERY: new RegExp(r(p(1274), P0, d0, p(1450), Z0), "g"), NOT_FRAGMENT: new RegExp(r(p(1274), P0, d0, "[\\:\\@\\/\\?]"), "g"), ESCAPE: new RegExp(r(p(685), P0, d0), "g"), UNRESERVED: new RegExp(P0, "g"), OTHER_CHARS: new RegExp(r(p(1274), P0, C0), "g"), PCT_ENCODED: new RegExp($, "g"), IPV4ADDRESS: new RegExp("^(" + _0 + ")$"), IPV6ADDRESS: new RegExp("^\\[?(" + de + ")" + s(s(p(2657) + H + p(527)) + "(" + ye + ")") + "?\\]?$") };
      }
      var l = f(!1), g = f(!0), h = /* @__PURE__ */ function() {
        function E(p, v) {
          const w = W;
          var H = [], $ = !0, s0 = !1, d0 = void 0;
          try {
            for (var C0 = p[Symbol.iterator](), j0; !($ = (j0 = C0[w(762)]())[w(585)]) && (H.push(j0[w(1135)]), !(v && H[w(1028)] === v)); $ = !0)
              ;
          } catch (Z0) {
            s0 = !0, d0 = Z0;
          } finally {
            try {
              !$ && C0[w(1733)] && C0[w(1733)]();
            } finally {
              if (s0) throw d0;
            }
          }
          return H;
        }
        return function(p, v) {
          const w = W;
          if (Array[w(1265)](p)) return p;
          if (Symbol[w(1007)] in Object(p)) return E(p, v);
          throw new TypeError(w(1769));
        };
      }(), m = function(E) {
        const p = W;
        if (Array.isArray(E)) {
          for (var v = 0, w = Array(E[p(1028)]); v < E[p(1028)]; v++) w[v] = E[v];
          return w;
        } else return Array[p(871)](E);
      }, b = 2147483647, S = 36, P = 1, q = 26, A = 38, R = 700, I = 72, C = 128, O = "-", j = /^xn--/, M = /[^\0-\x7E]/, F = /[\x2E\u3002\uFF0E\uFF61]/g, N = { overflow: e(1434), "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": e(1970) }, z = S - P, U = Math[e(2521)], V = String.fromCharCode;
      function G(E) {
        throw new RangeError(N[E]);
      }
      function o0(E, p) {
        const v = e;
        for (var w = [], H = E[v(1028)]; H--; )
          w[H] = p(E[H]);
        return w;
      }
      function u0(E, p) {
        const v = e;
        var w = E.split("@"), H = "";
        w[v(1028)] > 1 && (H = w[0] + "@", E = w[1]), E = E[v(2735)](F, ".");
        var $ = E[v(2742)]("."), s0 = o0($, p)[v(1825)](".");
        return H + s0;
      }
      function f0(E) {
        const p = e;
        for (var v = [], w = 0, H = E[p(1028)]; w < H; ) {
          var $ = E[p(1235)](w++);
          if ($ >= 55296 && $ <= 56319 && w < H) {
            var s0 = E[p(1235)](w++);
            (s0 & 64512) == 56320 ? v[p(2037)]((($ & 1023) << 10) + (s0 & 1023) + 65536) : (v[p(2037)]($), w--);
          } else v[p(2037)]($);
        }
        return v;
      }
      var i0 = function(p) {
        const v = e;
        return String[v(1975)][v(1104)](String, m(p));
      }, l0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : S;
      }, k0 = function(p, v) {
        return p + 22 + 75 * (p < 26) - ((v != 0) << 5);
      }, v0 = function(p, v, w) {
        var H = 0;
        for (p = w ? U(p / R) : p >> 1, p += U(p / v); p > z * q >> 1; H += S)
          p = U(p / z);
        return U(H + (z + 1) * p / (p + A));
      }, L0 = function(p) {
        const v = e;
        var w = [], H = p[v(1028)], $ = 0, s0 = C, d0 = I, C0 = p.lastIndexOf(O);
        C0 < 0 && (C0 = 0);
        for (var j0 = 0; j0 < C0; ++j0)
          p.charCodeAt(j0) >= 128 && G(v(1282)), w[v(2037)](p.charCodeAt(j0));
        for (var Z0 = C0 > 0 ? C0 + 1 : 0; Z0 < H; ) {
          for (var P0 = $, D0 = 1, _0 = S; ; _0 += S) {
            Z0 >= H && G(v(2424));
            var y0 = l0(p[v(1235)](Z0++));
            (y0 >= S || y0 > U((b - $) / D0)) && G("overflow"), $ += y0 * D0;
            var $0 = _0 <= d0 ? P : _0 >= d0 + q ? q : _0 - d0;
            if (y0 < $0) break;
            var W0 = S - $0;
            D0 > U(b / W0) && G("overflow"), D0 *= W0;
          }
          var z0 = w[v(1028)] + 1;
          d0 = v0($ - P0, z0, P0 == 0), U($ / z0) > b - s0 && G(v(778)), s0 += U($ / z0), $ %= z0, w[v(2406)]($++, 0, s0);
        }
        return String[v(1975)][v(1104)](String, w);
      }, N0 = function(p) {
        const v = e;
        var w = [];
        p = f0(p);
        var H = p[v(1028)], $ = C, s0 = 0, d0 = I, C0 = !0, j0 = !1, Z0 = void 0;
        try {
          for (var P0 = p[Symbol[v(1007)]](), D0; !(C0 = (D0 = P0[v(762)]())[v(585)]); C0 = !0) {
            var _0 = D0[v(1135)];
            _0 < 128 && w.push(V(_0));
          }
        } catch (Ke) {
          j0 = !0, Z0 = Ke;
        } finally {
          try {
            !C0 && P0.return && P0[v(1733)]();
          } finally {
            if (j0) throw Z0;
          }
        }
        var y0 = w[v(1028)], $0 = y0;
        for (y0 && w[v(2037)](O); $0 < H; ) {
          var W0 = b, z0 = !0, Pe = !1, oe = void 0;
          try {
            for (var ce = p[Symbol[v(1007)]](), ze; !(z0 = (ze = ce[v(762)]())[v(585)]); z0 = !0) {
              var Fe = ze.value;
              Fe >= $ && Fe < W0 && (W0 = Fe);
            }
          } catch (Ke) {
            Pe = !0, oe = Ke;
          } finally {
            try {
              !z0 && ce.return && ce[v(1733)]();
            } finally {
              if (Pe) throw oe;
            }
          }
          var te = $0 + 1;
          W0 - $ > U((b - s0) / te) && G(v(778)), s0 += (W0 - $) * te, $ = W0;
          var ue = !0, de = !1, ye = void 0;
          try {
            for (var fe = p[Symbol.iterator](), ba; !(ue = (ba = fe[v(762)]())[v(585)]); ue = !0) {
              var wa = ba.value;
              if (wa < $ && ++s0 > b && G("overflow"), wa == $) {
                for (var ux = s0, dx = S; ; dx += S) {
                  var fx = dx <= d0 ? P : dx >= d0 + q ? q : dx - d0;
                  if (ux < fx) break;
                  var Sa = ux - fx, ka = S - fx;
                  w.push(V(k0(fx + Sa % ka, 0))), ux = U(Sa / ka);
                }
                w[v(2037)](V(k0(ux, 0))), d0 = v0(s0, te, $0 == y0), s0 = 0, ++$0;
              }
            }
          } catch (Ke) {
            de = !0, ye = Ke;
          } finally {
            try {
              !ue && fe.return && fe.return();
            } finally {
              if (de) throw ye;
            }
          }
          ++s0, ++$;
        }
        return w[v(1825)]("");
      }, J0 = function(p) {
        return u0(p, function(v) {
          const w = W;
          return j[w(551)](v) ? L0(v[w(2460)](4)[w(1268)]()) : v;
        });
      }, D = function(p) {
        return u0(p, function(v) {
          return M[W(551)](v) ? "xn--" + N0(v) : v;
        });
      }, T = { version: e(1820), ucs2: { decode: f0, encode: i0 }, decode: L0, encode: N0, toASCII: D, toUnicode: J0 }, L = {};
      function J(E) {
        const p = e;
        var v = E[p(1235)](0), w = void 0;
        return v < 16 ? w = "%0" + v[p(1707)](16)[p(392)]() : v < 128 ? w = "%" + v[p(1707)](16)[p(392)]() : v < 2048 ? w = "%" + (v >> 6 | 192)[p(1707)](16)[p(392)]() + "%" + (v & 63 | 128)[p(1707)](16)[p(392)]() : w = "%" + (v >> 12 | 224)[p(1707)](16)[p(392)]() + "%" + (v >> 6 & 63 | 128)[p(1707)](16)[p(392)]() + "%" + (v & 63 | 128)[p(1707)](16).toUpperCase(), w;
      }
      function X(E) {
        const p = e;
        for (var v = "", w = 0, H = E[p(1028)]; w < H; ) {
          var $ = parseInt(E[p(2434)](w + 1, 2), 16);
          if ($ < 128) v += String[p(2259)]($), w += 3;
          else if ($ >= 194 && $ < 224) {
            if (H - w >= 6) {
              var s0 = parseInt(E[p(2434)](w + 4, 2), 16);
              v += String[p(2259)](($ & 31) << 6 | s0 & 63);
            } else v += E[p(2434)](w, 6);
            w += 6;
          } else if ($ >= 224) {
            if (H - w >= 9) {
              var d0 = parseInt(E[p(2434)](w + 4, 2), 16), C0 = parseInt(E.substr(w + 7, 2), 16);
              v += String[p(2259)](($ & 15) << 12 | (d0 & 63) << 6 | C0 & 63);
            } else v += E[p(2434)](w, 9);
            w += 9;
          } else v += E[p(2434)](w, 3), w += 3;
        }
        return v;
      }
      function Z(E, p) {
        const v = e;
        function w(H) {
          const $ = W;
          var s0 = X(H);
          return s0[$(1325)](p[$(2552)]) ? s0 : H;
        }
        return E.scheme && (E[v(2303)] = String(E[v(2303)])[v(2735)](p[v(1331)], w)[v(1268)]()[v(2735)](p[v(2541)], "")), E[v(2017)] !== void 0 && (E[v(2017)] = String(E[v(2017)]).replace(p[v(1331)], w)[v(2735)](p[v(723)], J).replace(p.PCT_ENCODED, c)), E.host !== void 0 && (E[v(2445)] = String(E.host)[v(2735)](p[v(1331)], w).toLowerCase()[v(2735)](p[v(1194)], J)[v(2735)](p[v(1331)], c)), E[v(1055)] !== void 0 && (E[v(1055)] = String(E[v(1055)])[v(2735)](p[v(1331)], w)[v(2735)](E.scheme ? p.NOT_PATH : p[v(2196)], J).replace(p[v(1331)], c)), E.query !== void 0 && (E[v(609)] = String(E.query).replace(p[v(1331)], w).replace(p[v(581)], J)[v(2735)](p[v(1331)], c)), E[v(1681)] !== void 0 && (E[v(1681)] = String(E[v(1681)])[v(2735)](p[v(1331)], w)[v(2735)](p[v(2423)], J).replace(p[v(1331)], c)), E;
      }
      function Y(E) {
        return E[e(2735)](/^0*(.*)/, "$1") || "0";
      }
      function c0(E, p) {
        const v = e;
        var w = E[v(1325)](p.IPV4ADDRESS) || [], H = h(w, 2), $ = H[1];
        return $ ? $[v(2742)](".")[v(2348)](Y)[v(1825)](".") : E;
      }
      function n0(E, p) {
        const v = e;
        var w = E.match(p[v(1321)]) || [], H = h(w, 3), $ = H[1], s0 = H[2];
        if ($) {
          for (var d0 = $.toLowerCase().split("::")[v(1056)](), C0 = h(d0, 2), j0 = C0[0], Z0 = C0[1], P0 = Z0 ? Z0.split(":")[v(2348)](Y) : [], D0 = j0[v(2742)](":")[v(2348)](Y), _0 = p[v(704)][v(551)](D0[D0.length - 1]), y0 = _0 ? 7 : 8, $0 = D0[v(1028)] - y0, W0 = Array(y0), z0 = 0; z0 < y0; ++z0)
            W0[z0] = P0[z0] || D0[$0 + z0] || "";
          _0 && (W0[y0 - 1] = c0(W0[y0 - 1], p));
          var Pe = W0[v(1950)](function(te, ue, de) {
            const ye = v;
            if (!ue || ue === "0") {
              var fe = te[te[ye(1028)] - 1];
              fe && fe[ye(777)] + fe[ye(1028)] === de ? fe[ye(1028)]++ : te.push({ index: de, length: 1 });
            }
            return te;
          }, []), oe = Pe.sort(function(te, ue) {
            const de = v;
            return ue[de(1028)] - te[de(1028)];
          })[0], ce = void 0;
          if (oe && oe.length > 1) {
            var ze = W0[v(2460)](0, oe[v(777)]), Fe = W0[v(2460)](oe[v(777)] + oe[v(1028)]);
            ce = ze[v(1825)](":") + "::" + Fe[v(1825)](":");
          } else ce = W0[v(1825)](":");
          return s0 && (ce += "%" + s0), ce;
        } else return E;
      }
      var a0 = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, M0 = ""[e(1325)](/(){0}/)[1] === void 0;
      function T0(E) {
        const p = e;
        var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = {}, H = v[p(1378)] !== !1 ? g : l;
        v[p(566)] === p(1991) && (E = (v.scheme ? v.scheme + ":" : "") + "//" + E);
        var $ = E[p(1325)](a0);
        if ($) {
          M0 ? (w[p(2303)] = $[1], w[p(2017)] = $[3], w[p(2445)] = $[4], w.port = parseInt($[5], 10), w[p(1055)] = $[6] || "", w.query = $[7], w[p(1681)] = $[8], isNaN(w[p(1590)]) && (w[p(1590)] = $[5])) : (w[p(2303)] = $[1] || void 0, w[p(2017)] = E.indexOf("@") !== -1 ? $[3] : void 0, w[p(2445)] = E[p(2775)]("//") !== -1 ? $[4] : void 0, w[p(1590)] = parseInt($[5], 10), w.path = $[6] || "", w[p(609)] = E.indexOf("?") !== -1 ? $[7] : void 0, w[p(1681)] = E.indexOf("#") !== -1 ? $[8] : void 0, isNaN(w[p(1590)]) && (w[p(1590)] = E.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? $[4] : void 0)), w[p(2445)] && (w.host = n0(c0(w[p(2445)], H), H)), w[p(2303)] === void 0 && w.userinfo === void 0 && w[p(2445)] === void 0 && w.port === void 0 && !w[p(1055)] && w[p(609)] === void 0 ? w.reference = p(2533) : w[p(2303)] === void 0 ? w.reference = p(1910) : w.fragment === void 0 ? w[p(566)] = p(294) : w[p(566)] = "uri", v[p(566)] && v[p(566)] !== p(1991) && v[p(566)] !== w[p(566)] && (w.error = w[p(1314)] || p(1563) + v[p(566)] + p(2025));
          var s0 = L[(v[p(2303)] || w[p(2303)] || "")[p(1268)]()];
          if (!v[p(241)] && (!s0 || !s0[p(241)])) {
            if (w[p(2445)] && (v[p(419)] || s0 && s0[p(419)])) try {
              w.host = T[p(1715)](w.host[p(2735)](H[p(1331)], X)[p(1268)]());
            } catch (d0) {
              w[p(1314)] = w.error || p(2120) + d0;
            }
            Z(w, l);
          } else Z(w, H);
          s0 && s0[p(861)] && s0[p(861)](w, v);
        } else w[p(1314)] = w[p(1314)] || p(1636);
        return w;
      }
      function U0(E, p) {
        const v = e;
        var w = p[v(1378)] !== !1 ? g : l, H = [];
        return E[v(2017)] !== void 0 && (H[v(2037)](E[v(2017)]), H[v(2037)]("@")), E[v(2445)] !== void 0 && H[v(2037)](n0(c0(String(E[v(2445)]), w), w).replace(w[v(1321)], function($, s0, d0) {
          return "[" + s0 + (d0 ? "%25" + d0 : "") + "]";
        })), (typeof E[v(1590)] === v(536) || typeof E[v(1590)] === v(654)) && (H[v(2037)](":"), H[v(2037)](String(E[v(1590)]))), H[v(1028)] ? H[v(1825)]("") : void 0;
      }
      var S0 = /^\.\.?\//, G0 = /^\/\.(\/|$)/, se = /^\/\.\.(\/|$)/, Q0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function O0(E) {
        const p = e;
        for (var v = []; E.length; )
          if (E[p(1325)](S0)) E = E.replace(S0, "");
          else if (E[p(1325)](G0)) E = E[p(2735)](G0, "/");
          else if (E[p(1325)](se)) E = E[p(2735)](se, "/"), v.pop();
          else if (E === "." || E === "..") E = "";
          else {
            var w = E[p(1325)](Q0);
            if (w) {
              var H = w[0];
              E = E[p(2460)](H[p(1028)]), v[p(2037)](H);
            } else throw new Error("Unexpected dot segment condition");
          }
        return v[p(1825)]("");
      }
      function V0(E) {
        const p = e;
        var v = arguments[p(1028)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = v[p(1378)] ? g : l, H = [], $ = L[(v.scheme || E[p(2303)] || "")[p(1268)]()];
        if ($ && $[p(1072)] && $[p(1072)](E, v), E[p(2445)] && !w.IPV6ADDRESS.test(E[p(2445)])) {
          if (v[p(419)] || $ && $[p(419)]) try {
            E[p(2445)] = v[p(1378)] ? T.toUnicode(E[p(2445)]) : T.toASCII(E[p(2445)][p(2735)](w.PCT_ENCODED, X)[p(1268)]());
          } catch (C0) {
            E[p(1314)] = E[p(1314)] || p(1236) + (v[p(1378)] ? p(2223) : p(490)) + p(1137) + C0;
          }
        }
        Z(E, w), v[p(566)] !== p(1991) && E.scheme && (H[p(2037)](E[p(2303)]), H[p(2037)](":"));
        var s0 = U0(E, v);
        if (s0 !== void 0 && (v.reference !== p(1991) && H[p(2037)]("//"), H[p(2037)](s0), E.path && E[p(1055)][p(1659)](0) !== "/" && H[p(2037)]("/")), E[p(1055)] !== void 0) {
          var d0 = E[p(1055)];
          !v.absolutePath && (!$ || !$[p(1582)]) && (d0 = O0(d0)), s0 === void 0 && (d0 = d0.replace(/^\/\//, p(1739))), H[p(2037)](d0);
        }
        return E[p(609)] !== void 0 && (H[p(2037)]("?"), H[p(2037)](E.query)), E[p(1681)] !== void 0 && (H[p(2037)]("#"), H.push(E.fragment)), H.join("");
      }
      function Y0(E, p) {
        const v = e;
        var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, H = arguments[3], $ = {};
        return !H && (E = T0(V0(E, w), w), p = T0(V0(p, w), w)), w = w || {}, !w[v(1220)] && p[v(2303)] ? ($[v(2303)] = p[v(2303)], $[v(2017)] = p[v(2017)], $[v(2445)] = p.host, $.port = p.port, $[v(1055)] = O0(p[v(1055)] || ""), $[v(609)] = p.query) : (p[v(2017)] !== void 0 || p[v(2445)] !== void 0 || p[v(1590)] !== void 0 ? ($[v(2017)] = p[v(2017)], $[v(2445)] = p[v(2445)], $[v(1590)] = p.port, $.path = O0(p[v(1055)] || ""), $[v(609)] = p[v(609)]) : (p.path ? (p[v(1055)].charAt(0) === "/" ? $.path = O0(p[v(1055)]) : ((E[v(2017)] !== void 0 || E[v(2445)] !== void 0 || E[v(1590)] !== void 0) && !E[v(1055)] ? $[v(1055)] = "/" + p.path : E.path ? $.path = E[v(1055)].slice(0, E[v(1055)][v(790)]("/") + 1) + p[v(1055)] : $[v(1055)] = p.path, $[v(1055)] = O0($[v(1055)])), $[v(609)] = p[v(609)]) : ($[v(1055)] = E[v(1055)], p[v(609)] !== void 0 ? $[v(609)] = p[v(609)] : $[v(609)] = E[v(609)]), $.userinfo = E[v(2017)], $[v(2445)] = E[v(2445)], $.port = E.port), $[v(2303)] = E[v(2303)]), $[v(1681)] = p.fragment, $;
      }
      function cx(E, p, v) {
        var w = d({ scheme: "null" }, v);
        return V0(Y0(T0(E, w), T0(p, w), w, !0), w);
      }
      function Lx(E, p) {
        return typeof E == "string" ? E = V0(T0(E, p), p) : o(E) === "object" && (E = T0(V0(E, p), p)), E;
      }
      function da(E, p, v) {
        const w = e;
        return typeof E === w(654) ? E = V0(T0(E, v), v) : o(E) === w(513) && (E = V0(E, v)), typeof p == "string" ? p = V0(T0(p, v), v) : o(p) === w(513) && (p = V0(p, v)), E === p;
      }
      function vs(E, p) {
        const v = e;
        return E && E[v(1707)]()[v(2735)](!p || !p[v(1378)] ? l[v(2483)] : g[v(2483)], J);
      }
      function ge(E, p) {
        const v = e;
        return E && E[v(1707)]().replace(!p || !p.iri ? l[v(1331)] : g[v(1331)], X);
      }
      var Be = { scheme: "http", domainHost: !0, parse: function(p, v) {
        const w = e;
        return !p.host && (p[w(1314)] = p[w(1314)] || "HTTP URIs must have a host."), p;
      }, serialize: function(p, v) {
        const w = e;
        var H = String(p[w(2303)])[w(1268)]() === w(2003);
        return (p[w(1590)] === (H ? 443 : 80) || p[w(1590)] === "") && (p[w(1590)] = void 0), !p[w(1055)] && (p[w(1055)] = "/"), p;
      } }, fa = { scheme: e(2003), domainHost: Be.domainHost, parse: Be[e(861)], serialize: Be[e(1072)] };
      function la(E) {
        const p = e;
        return typeof E[p(1126)] === p(781) ? E[p(1126)] : String(E[p(2303)])[p(1268)]() === p(2102);
      }
      var We = { scheme: "ws", domainHost: !0, parse: function(p, v) {
        const w = e;
        var H = p;
        return H[w(1126)] = la(H), H.resourceName = (H[w(1055)] || "/") + (H[w(609)] ? "?" + H[w(609)] : ""), H[w(1055)] = void 0, H[w(609)] = void 0, H;
      }, serialize: function(p, v) {
        const w = e;
        if ((p[w(1590)] === (la(p) ? 443 : 80) || p.port === "") && (p[w(1590)] = void 0), typeof p[w(1126)] === w(781) && (p.scheme = p[w(1126)] ? w(2102) : "ws", p.secure = void 0), p[w(1420)]) {
          var H = p[w(1420)].split("?"), $ = h(H, 2), s0 = $[0], d0 = $[1];
          p[w(1055)] = s0 && s0 !== "/" ? s0 : void 0, p[w(609)] = d0, p[w(1420)] = void 0;
        }
        return p[w(1681)] = void 0, p;
      } }, ha = { scheme: e(2102), domainHost: We.domainHost, parse: We[e(861)], serialize: We[e(1072)] }, bs = {}, pa = "[A-Za-z0-9\\-\\.\\_\\~" + e(475) + "]", ie = e(1249), ws = s(s(e(1479) + ie + "%" + ie + ie + "%" + ie + ie) + "|" + s("%[89A-Fa-f]" + ie + "%" + ie + ie) + "|" + s("%" + ie + ie)), Ss = e(668), ks = e(331), Ps = r(ks, e(312)), Is = e(1289), Es = new RegExp(pa, "g"), $e = new RegExp(ws, "g"), Rs = new RegExp(r(e(685), Ss, "[\\.]", '[\\"]', Ps), "g"), ma = new RegExp(r(e(685), pa, Is), "g"), Cs = ma;
      function Mx(E) {
        const p = e;
        var v = X(E);
        return v[p(1325)](Es) ? v : E;
      }
      var ga = { scheme: e(1913), parse: function(p, v) {
        const w = e;
        var H = p, $ = H.to = H[w(1055)] ? H[w(1055)][w(2742)](",") : [];
        if (H.path = void 0, H[w(609)]) {
          for (var s0 = !1, d0 = {}, C0 = H.query[w(2742)]("&"), j0 = 0, Z0 = C0[w(1028)]; j0 < Z0; ++j0) {
            var P0 = C0[j0][w(2742)]("=");
            switch (P0[0]) {
              case "to":
                for (var D0 = P0[1][w(2742)](","), _0 = 0, y0 = D0.length; _0 < y0; ++_0)
                  $[w(2037)](D0[_0]);
                break;
              case w(2150):
                H.subject = ge(P0[1], v);
                break;
              case w(2595):
                H[w(2595)] = ge(P0[1], v);
                break;
              default:
                s0 = !0, d0[ge(P0[0], v)] = ge(P0[1], v);
                break;
            }
          }
          s0 && (H[w(1566)] = d0);
        }
        H[w(609)] = void 0;
        for (var $0 = 0, W0 = $.length; $0 < W0; ++$0) {
          var z0 = $[$0][w(2742)]("@");
          if (z0[0] = ge(z0[0]), v[w(241)]) z0[1] = ge(z0[1], v)[w(1268)]();
          else try {
            z0[1] = T[w(1715)](ge(z0[1], v).toLowerCase());
          } catch (Pe) {
            H[w(1314)] = H[w(1314)] || "Email address's domain name can not be converted to ASCII via punycode: " + Pe;
          }
          $[$0] = z0[w(1825)]("@");
        }
        return H;
      }, serialize: function(p, v) {
        const w = e;
        var H = p, $ = u(p.to);
        if ($) {
          for (var s0 = 0, d0 = $[w(1028)]; s0 < d0; ++s0) {
            var C0 = String($[s0]), j0 = C0[w(790)]("@"), Z0 = C0.slice(0, j0)[w(2735)]($e, Mx)[w(2735)]($e, c).replace(Rs, J), P0 = C0.slice(j0 + 1);
            try {
              P0 = v.iri ? T.toUnicode(P0) : T[w(1715)](ge(P0, v)[w(1268)]());
            } catch ($0) {
              H.error = H[w(1314)] || w(1613) + (v[w(1378)] ? w(2223) : w(490)) + " via punycode: " + $0;
            }
            $[s0] = Z0 + "@" + P0;
          }
          H.path = $.join(",");
        }
        var D0 = p[w(1566)] = p[w(1566)] || {};
        p[w(2150)] && (D0[w(2150)] = p[w(2150)]), p[w(2595)] && (D0[w(2595)] = p.body);
        var _0 = [];
        for (var y0 in D0)
          D0[y0] !== bs[y0] && _0[w(2037)](y0.replace($e, Mx)[w(2735)]($e, c)[w(2735)](ma, J) + "=" + D0[y0][w(2735)]($e, Mx).replace($e, c)[w(2735)](Cs, J));
        return _0[w(1028)] && (H.query = _0[w(1825)]("&")), H;
      } }, Fs = /^([^\:]+)\:(.*)/, ya = { scheme: e(2328), parse: function(p, v) {
        const w = e;
        var H = p[w(1055)] && p[w(1055)][w(1325)](Fs), $ = p;
        if (H) {
          var s0 = v[w(2303)] || $[w(2303)] || "urn", d0 = H[1].toLowerCase(), C0 = H[2], j0 = s0 + ":" + (v.nid || d0), Z0 = L[j0];
          $.nid = d0, $[w(1632)] = C0, $[w(1055)] = void 0, Z0 && ($ = Z0[w(861)]($, v));
        } else $[w(1314)] = $[w(1314)] || "URN can not be parsed.";
        return $;
      }, serialize: function(p, v) {
        const w = e;
        var H = v[w(2303)] || p[w(2303)] || w(2328), $ = p.nid, s0 = H + ":" + (v[w(2360)] || $), d0 = L[s0];
        d0 && (p = d0[w(1072)](p, v));
        var C0 = p, j0 = p[w(1632)];
        return C0[w(1055)] = ($ || v[w(2360)]) + ":" + j0, C0;
      } }, Ns = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, va = { scheme: "urn:uuid", parse: function(p, v) {
        const w = e;
        var H = p;
        return H[w(2471)] = H[w(1632)], H[w(1632)] = void 0, !v[w(1220)] && (!H[w(2471)] || !H.uuid[w(1325)](Ns)) && (H[w(1314)] = H[w(1314)] || w(2749)), H;
      }, serialize: function(p, v) {
        const w = e;
        var H = p;
        return H[w(1632)] = (p.uuid || "").toLowerCase(), H;
      } };
      L[Be[e(2303)]] = Be, L[fa[e(2303)]] = fa, L[We.scheme] = We, L[ha.scheme] = ha, L[ga[e(2303)]] = ga, L[ya[e(2303)]] = ya, L[va.scheme] = va, n.SCHEMES = L, n.pctEncChar = J, n.pctDecChars = X, n.parse = T0, n[e(346)] = O0, n[e(1072)] = V0, n[e(2383)] = Y0, n.resolve = cx, n[e(2666)] = Lx, n.equal = da, n.escapeComponent = vs, n[e(2188)] = ge, Object[e(1730)](n, e(697), { value: !0 });
    });
  }(Xe, Xe[i(1949)])), Xe[i(1949)];
}
var Kx, tr;
function oa() {
  return tr || (tr = 1, Kx = function i(x, t) {
    const n = W;
    if (x === t) return !0;
    if (x && t && typeof x == "object" && typeof t == n(513)) {
      if (x[n(1114)] !== t[n(1114)]) return !1;
      var e, r, s;
      if (Array[n(1265)](x)) {
        if (e = x.length, e != t[n(1028)]) return !1;
        for (r = e; r-- !== 0; ) if (!i(x[r], t[r])) return !1;
        return !0;
      }
      if (x[n(1114)] === RegExp) return x[n(443)] === t[n(443)] && x[n(1810)] === t[n(1810)];
      if (x.valueOf !== Object[n(983)][n(1237)]) return x[n(1237)]() === t.valueOf();
      if (x[n(1707)] !== Object[n(983)][n(1707)]) return x[n(1707)]() === t.toString();
      if (s = Object[n(2459)](x), e = s.length, e !== Object[n(2459)](t).length) return !1;
      for (r = e; r-- !== 0; ) if (!Object[n(983)][n(894)].call(t, s[r])) return !1;
      for (r = e; r-- !== 0; ) {
        var o = s[r];
        if (!i(x[o], t[o])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), Kx;
}
var Gx, ar;
function Z2() {
  return ar || (ar = 1, Gx = function(x) {
    const t = W;
    for (var n = 0, e = x[t(1028)], r = 0, s; r < e; )
      n++, s = x[t(1235)](r++), s >= 55296 && s <= 56319 && r < e && (s = x.charCodeAt(r), (s & 64512) == 56320 && r++);
    return n;
  }), Gx;
}
var Jx, rr;
function _e() {
  const i = a;
  if (rr) return Jx;
  rr = 1, Jx = { copy: x, checkDataType: t, checkDataTypes: n, coerceToTypes: r, toHash: s, getProperty: u, escapeQuotes: d, equal: oa(), ucs2length: Z2(), varOccurences: f, varReplace: l, schemaHasRules: g, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: b, getPathExpr: S, getPath: P, getData: R, unescapeFragment: C, unescapeJsonPointer: M, escapeFragment: O, escapeJsonPointer: j };
  function x(F, N) {
    N = N || {};
    for (var z in F) N[z] = F[z];
    return N;
  }
  function t(F, N, z, U) {
    const V = W;
    var G = V(U ? 1899 : 2560), o0 = U ? " || " : V(1461), u0 = U ? "!" : "", f0 = U ? "" : "!";
    switch (F) {
      case "null":
        return N + G + V(2672);
      case V(743):
        return u0 + V(684) + N + ")";
      case V(513):
        return "(" + u0 + N + o0 + V(250) + N + G + V(1413) + o0 + f0 + V(684) + N + "))";
      case V(999):
        return V(2414) + N + G + '"number"' + o0 + f0 + "(" + N + V(272) + o0 + N + G + N + (z ? o0 + u0 + V(1014) + N + ")" : "") + ")";
      case "number":
        return V(2414) + N + G + '"' + F + '"' + (z ? o0 + u0 + V(1014) + N + ")" : "") + ")";
      default:
        return "typeof " + N + G + '"' + F + '"';
    }
  }
  function n(F, N, z) {
    const U = W;
    switch (F[U(1028)]) {
      case 1:
        return t(F[0], N, z, !0);
      default:
        var V = "", G = s(F);
        G[U(743)] && G[U(513)] && (V = G.null ? "(" : "(!" + N + U(2395), V += U(250) + N + U(318), delete G.null, delete G.array, delete G[U(513)]), G[U(536)] && delete G[U(999)];
        for (var o0 in G) V += (V ? U(1461) : "") + t(o0, N, z, !0);
        return V;
    }
  }
  var e = s([i(654), i(536), i(999), "boolean", i(2672)]);
  function r(F, N) {
    const z = i;
    if (Array[z(1265)](N)) {
      for (var U = [], V = 0; V < N[z(1028)]; V++) {
        var G = N[V];
        (e[G] || F === z(743) && G === "array") && (U[U[z(1028)]] = G);
      }
      if (U[z(1028)]) return U;
    } else {
      if (e[N]) return [N];
      if (F === z(743) && N === "array") return ["array"];
    }
  }
  function s(F) {
    const N = i;
    for (var z = {}, U = 0; U < F[N(1028)]; U++) z[F[U]] = !0;
    return z;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(F) {
    const N = i;
    return typeof F == N(536) ? "[" + F + "]" : o[N(551)](F) ? "." + F : "['" + d(F) + "']";
  }
  function d(F) {
    const N = i;
    return F[N(2735)](c, "\\$&")[N(2735)](/\n/g, "\\n")[N(2735)](/\r/g, "\\r")[N(2735)](/\f/g, "\\f").replace(/\t/g, "\\t");
  }
  function f(F, N) {
    N += i(1801);
    var U = F.match(new RegExp(N, "g"));
    return U ? U.length : 0;
  }
  function l(F, N, z) {
    const U = i;
    return N += "([^0-9])", z = z[U(2735)](/\$/g, U(1884)), F.replace(new RegExp(N, "g"), z + "$1");
  }
  function g(F, N) {
    if (typeof F == i(781)) return !F;
    for (var U in F) if (N[U]) return !0;
  }
  function h(F, N, z) {
    if (typeof F == i(781)) return !F && z != "not";
    for (var V in F) if (V != z && N[V]) return !0;
  }
  function m(F, N) {
    if (typeof F != "boolean") {
      for (var z in F) if (!N[z]) return z;
    }
  }
  function b(F) {
    return "'" + d(F) + "'";
  }
  function S(F, N, z, U) {
    const V = i;
    var G = z ? V(2526) + N + (U ? "" : V(431)) : U ? V(2613) + N + V(2060) : V(633) + N + V(1799);
    return I(F, G);
  }
  function P(F, N, z) {
    var U = b(z ? "/" + j(N) : u(N));
    return I(F, U);
  }
  var q = /^\/(?:[^~]|~0|~1)*$/, A = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function R(F, N, z) {
    const U = i;
    var V, G, o0, u0;
    if (F === "") return U(930);
    if (F[0] == "/") {
      if (!q.test(F)) throw new Error("Invalid JSON-pointer: " + F);
      G = F, o0 = U(930);
    } else {
      if (u0 = F.match(A), !u0) throw new Error(U(2283) + F);
      if (V = +u0[1], G = u0[2], G == "#") {
        if (V >= N) throw new Error("Cannot access property/index " + V + U(835) + N);
        return z[N - V];
      }
      if (V > N) throw new Error("Cannot access data " + V + U(835) + N);
      if (o0 = "data" + (N - V || ""), !G) return o0;
    }
    for (var f0 = o0, i0 = G[U(2742)]("/"), l0 = 0; l0 < i0[U(1028)]; l0++) {
      var k0 = i0[l0];
      k0 && (o0 += u(M(k0)), f0 += U(1461) + o0);
    }
    return f0;
  }
  function I(F, N) {
    const z = i;
    return F == '""' ? N : (F + z(1336) + N)[z(2735)](/([^\\])' \+ '/g, "$1");
  }
  function C(F) {
    return M(decodeURIComponent(F));
  }
  function O(F) {
    return encodeURIComponent(j(F));
  }
  function j(F) {
    const N = i;
    return F[N(2735)](/~/g, "~0")[N(2735)](/\//g, "~1");
  }
  function M(F) {
    return F.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  return Jx;
}
var Qx, nr;
function ds() {
  if (nr) return Qx;
  nr = 1;
  var i = _e();
  Qx = x;
  function x(t) {
    i[W(1217)](t, this);
  }
  return Qx;
}
var Xx = { exports: {} }, sr;
function _2() {
  const i = a;
  if (sr) return Xx.exports;
  sr = 1;
  var x = Xx.exports = function(e, r, s) {
    const o = W;
    typeof r == o(2189) && (s = r, r = {}), s = r.cb || s;
    var c = typeof s == o(2189) ? s : s[o(1534)] || function() {
    }, u = s[o(284)] || function() {
    };
    t(r, c, u, e, "", e);
  };
  x[i(1136)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[i(365)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x.propsKeywords = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[i(328)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, r, s, o, c, u, d, f, l, g) {
    const h = i;
    if (o && typeof o == h(513) && !Array[h(1265)](o)) {
      r(o, c, u, d, f, l, g);
      for (var m in o) {
        var b = o[m];
        if (Array[h(1265)](b)) {
          if (m in x[h(365)])
            for (var S = 0; S < b[h(1028)]; S++) t(e, r, s, b[S], c + "/" + m + "/" + S, u, c, m, o, S);
        } else if (m in x.propsKeywords) {
          if (b && typeof b == h(513))
            for (var P in b) t(e, r, s, b[P], c + "/" + m + "/" + n(P), u, c, m, o, P);
        } else (m in x[h(1136)] || e.allKeys && !(m in x[h(328)])) && t(e, r, s, b, c + "/" + m, u, c, m, o);
      }
      s(o, c, u, d, f, l, g);
    }
  }
  function n(e) {
    const r = i;
    return e.replace(/~/g, "~0")[r(2735)](/\//g, "~1");
  }
  return Xx[i(1949)];
}
var Yx, ir;
function ca() {
  const i = a;
  if (ir) return Yx;
  ir = 1;
  var x = V2(), t = oa(), n = _e(), e = ds(), r = _2();
  Yx = s, s[i(1650)] = P, s[i(2396)] = m, s[i(1693)] = q, s[i(2794)] = A, s[i(1655)] = l, s[i(1004)] = o;
  function s(R, I, C) {
    const O = i;
    var j = this[O(1726)][C];
    if (typeof j == O(654))
      if (this[O(1726)][j]) j = this[O(1726)][j];
      else return s[O(1138)](this, R, I, j);
    if (j = j || this[O(798)][C], j instanceof e) return l(j[O(1004)], this[O(2074)][O(2550)]) ? j[O(1004)] : j[O(1981)] || this[O(2746)](j);
    var M = o[O(1138)](this, I, C), F, N, z;
    return M && (F = M[O(1004)], I = M[O(1562)], z = M.baseId), F instanceof e ? N = F[O(1981)] || R[O(1138)](this, F[O(1004)], I, void 0, z) : F !== void 0 && (N = l(F, this._opts.inlineRefs) ? F : R[O(1138)](this, F, I, void 0, z)), N;
  }
  function o(R, I) {
    const C = i;
    var O = x[C(861)](I), j = b(O), M = m(this[C(511)](R[C(1004)]));
    if (Object[C(2459)](R.schema).length === 0 || j !== M) {
      var F = P(j), N = this._refs[F];
      if (typeof N == C(654)) return c[C(1138)](this, R, N, O);
      if (N instanceof e)
        N[C(1981)] || this[C(2746)](N), R = N;
      else if (N = this._schemas[F], N instanceof e) {
        if (N[C(1981)] || this[C(2746)](N), F == P(I)) return { schema: N, root: R, baseId: M };
        R = N;
      } else return;
      if (!R.schema) return;
      M = m(this[C(511)](R[C(1004)]));
    }
    return d.call(this, O, M, R.schema, R);
  }
  function c(R, I, C) {
    const O = i;
    var j = o[O(1138)](this, R, I);
    if (j) {
      var M = j[O(1004)], F = j[O(2764)];
      R = j[O(1562)];
      var N = this._getId(M);
      return N && (F = q(F, N)), d.call(this, C, F, M, R);
    }
  }
  var u = n[i(916)]([i(1683), i(2551), "enum", i(2192), i(2288)]);
  function d(R, I, C, O) {
    const j = i;
    if (R[j(1681)] = R[j(1681)] || "", R[j(1681)][j(2460)](0, 1) == "/") {
      for (var M = R[j(1681)][j(2742)]("/"), F = 1; F < M.length; F++) {
        var N = M[F];
        if (N) {
          if (N = n[j(1299)](N), C = C[N], C === void 0) break;
          var z;
          if (!u[N] && (z = this._getId(C), z && (I = q(I, z)), C.$ref)) {
            var U = q(I, C[j(1570)]), V = o.call(this, O, U);
            V && (C = V[j(1004)], O = V[j(1562)], I = V.baseId);
          }
        }
      }
      if (C !== void 0 && C !== O.schema) return { schema: C, root: O, baseId: I };
    }
  }
  var f = n[i(916)]([i(2299), i(1477), i(1958), i(1203), i(1272), "maxProperties", "minProperties", i(1608), i(1814), "maximum", i(319), "uniqueItems", i(1557), "required", "enum"]);
  function l(R, I) {
    if (I === !1) return !1;
    if (I === void 0 || I === !0) return g(R);
    if (I) return h(R) <= I;
  }
  function g(R) {
    const I = i;
    var C;
    if (Array[I(1265)](R)) {
      for (var O = 0; O < R.length; O++)
        if (C = R[O], typeof C == I(513) && !g(C)) return !1;
    } else for (var j in R)
      if (j == "$ref" || (C = R[j], typeof C == I(513) && !g(C))) return !1;
    return !0;
  }
  function h(R) {
    const I = i;
    var C = 0, O;
    if (Array[I(1265)](R)) {
      for (var j = 0; j < R[I(1028)]; j++)
        if (O = R[j], typeof O == I(513) && (C += h(O)), C == 1 / 0) return 1 / 0;
    } else for (var M in R) {
      if (M == I(1570)) return 1 / 0;
      if (f[M]) C++;
      else if (O = R[M], typeof O == "object" && (C += h(O) + 1), C == 1 / 0) return 1 / 0;
    }
    return C;
  }
  function m(R, I) {
    const C = i;
    I !== !1 && (R = P(R));
    var O = x[C(861)](R);
    return b(O);
  }
  function b(R) {
    const I = i;
    return x.serialize(R)[I(2742)]("#")[0] + "#";
  }
  var S = /#\/?$/;
  function P(R) {
    return R ? R[i(2735)](S, "") : "";
  }
  function q(R, I) {
    const C = i;
    return I = P(I), x[C(2272)](R, I);
  }
  function A(R) {
    const I = i;
    var C = P(this[I(511)](R)), O = { "": C }, j = { "": m(C, !1) }, M = {}, F = this;
    return r(R, { allKeys: !0 }, function(N, z, U, V, G, o0, u0) {
      const f0 = I;
      if (z !== "") {
        var i0 = F[f0(511)](N), l0 = O[V], k0 = j[V] + "/" + G;
        if (u0 !== void 0 && (k0 += "/" + (typeof u0 == "number" ? u0 : n[f0(2240)](u0))), typeof i0 == f0(654)) {
          i0 = l0 = P(l0 ? x[f0(2272)](l0, i0) : i0);
          var v0 = F[f0(1726)][i0];
          if (typeof v0 == f0(654) && (v0 = F[f0(1726)][v0]), v0 && v0[f0(1004)]) {
            if (!t(N, v0[f0(1004)])) throw new Error(f0(1059) + i0 + f0(2386));
          } else if (i0 != P(k0))
            if (i0[0] == "#") {
              if (M[i0] && !t(N, M[i0])) throw new Error('id "' + i0 + f0(2386));
              M[i0] = N;
            } else F[f0(1726)][i0] = k0;
        }
        O[z] = l0, j[z] = k0;
      }
    }), M;
  }
  return Yx;
}
var et, or;
function ua() {
  const i = a;
  if (or) return et;
  or = 1;
  var x = ca();
  et = { Validation: e(t), MissingRef: e(n) };
  function t(r) {
    const s = W;
    this[s(705)] = s(248), this[s(836)] = r, this[s(1865)] = this.validation = !0;
  }
  n[i(705)] = function(r, s) {
    const o = i;
    return "can't resolve reference " + s + o(304) + r;
  };
  function n(r, s, o) {
    const c = i;
    this.message = o || n[c(705)](r, s), this[c(2796)] = x[c(1693)](r, s), this.missingSchema = x[c(1650)](x[c(2396)](this[c(2796)]));
  }
  function e(r) {
    const s = i;
    return r.prototype = Object[s(1644)](Error.prototype), r[s(983)][s(1114)] = r, r;
  }
  return et;
}
var xt, cr;
function fs() {
  return cr || (cr = 1, xt = function(i, x) {
    const t = W;
    x || (x = {}), typeof x === t(2189) && (x = { cmp: x });
    var n = typeof x[t(2185)] === t(781) ? x[t(2185)] : !1, e = x.cmp && /* @__PURE__ */ function(s) {
      return function(o) {
        return function(c, u) {
          var d = { key: c, value: o[c] }, f = { key: u, value: o[u] };
          return s(d, f);
        };
      };
    }(x.cmp), r = [];
    return function s(o) {
      const c = t;
      if (o && o[c(2751)] && typeof o.toJSON === c(2189) && (o = o.toJSON()), o !== void 0) {
        if (typeof o == c(536)) return isFinite(o) ? "" + o : "null";
        if (typeof o !== c(513)) return JSON.stringify(o);
        var u, d;
        if (Array[c(1265)](o)) {
          for (d = "[", u = 0; u < o[c(1028)]; u++)
            u && (d += ","), d += s(o[u]) || c(2672);
          return d + "]";
        }
        if (o === null) return c(2672);
        if (r[c(2775)](o) !== -1) {
          if (n) return JSON.stringify(c(1588));
          throw new TypeError("Converting circular structure to JSON");
        }
        var f = r[c(2037)](o) - 1, l = Object[c(2459)](o)[c(1572)](e && e(o));
        for (d = "", u = 0; u < l[c(1028)]; u++) {
          var g = l[u], h = s(o[g]);
          h && (d && (d += ","), d += JSON[c(956)](g) + ":" + h);
        }
        return r[c(2406)](f, 1), "{" + d + "}";
      }
    }(i);
  }), xt;
}
var tt, ur;
function ls() {
  return ur || (ur = 1, tt = function(x, t, n) {
    const e = W;
    var r = "", s = x[e(1004)][e(1233)] === !0, o = x[e(986)][e(898)](x.schema, x.RULES[e(972)], e(1570)), c = x[e(2703)][e(511)](x.schema);
    if (x[e(342)][e(1610)]) {
      var u = x[e(986)][e(1710)](x.schema, x[e(1946)][e(1136)]);
      if (u) {
        var d = e(1088) + u;
        if (x[e(342)].strictKeywords === e(1263)) x[e(1597)][e(2791)](d);
        else throw new Error(d);
      }
    }
    if (x[e(1973)] && (r += e(1930), s && (x[e(682)] = !0, r += e(1111)), r += e(805), c && (x[e(342)][e(2428)] || x[e(342)][e(2517)]) && (r += " " + (e(1774) + c + e(1091)) + " ")), typeof x[e(1004)] == "boolean" || !(o || x.schema[e(1570)])) {
      var t = e(1747), f = x[e(2554)], l = x[e(2575)], g = x[e(1004)][t], h = x[e(553)] + x[e(986)][e(1485)](t), m = x[e(610)] + "/" + t, I = !x[e(342)].allErrors, j, b = e(2584) + (l || ""), R = e(238) + f;
      if (x.schema === !1) {
        x[e(1973)] ? I = !0 : r += " var " + R + e(2420);
        var S = S || [];
        S.push(r), r = "", x[e(1397)] !== !1 ? (r += e(546) + (j || e(1747)) + e(2813) + x.errorPath + " , schemaPath: " + x[e(986)][e(562)](m) + " , params: {} ", x[e(342)][e(1376)] !== !1 && (r += e(2598)), x[e(342)][e(2221)] && (r += e(2106) + x[e(553)] + e(386) + b + " "), r += e(1712)) : r += e(589);
        var P = r;
        r = S[e(1454)](), !x.compositeRule && I ? x[e(682)] ? r += e(826) + P + "]); " : r += e(879) + P + e(558) : r += e(1171) + P + e(1303);
      } else x.isTop ? s ? r += e(635) : r += " validate.errors = null; return true; " : r += " var " + R + " = true; ";
      return x[e(1973)] && (r += " }; return validate; "), r;
    }
    if (x[e(1973)]) {
      var q = x[e(1973)], f = x[e(2554)] = 0, l = x[e(2575)] = 0, b = e(2584);
      if (x[e(1592)] = x[e(2272)].fullPath(x[e(2703)][e(511)](x[e(1562)].schema)), x[e(2764)] = x[e(2764)] || x[e(1592)], delete x[e(1973)], x[e(2338)] = [""], x.schema[e(574)] !== void 0 && x[e(342)][e(993)] && x[e(342)][e(2634)]) {
        var A = e(621);
        if (x.opts.strictDefaults === e(1263)) x[e(1597)].warn(A);
        else throw new Error(A);
      }
      r += e(1366), r += " var errors = 0;     ", r += e(760);
    } else {
      var f = x[e(2554)], l = x[e(2575)], b = "data" + (l || "");
      if (c && (x[e(2764)] = x.resolve[e(1693)](x.baseId, c)), s && !x[e(682)]) throw new Error(e(2518));
      r += e(2403) + f + e(500);
    }
    var R = e(238) + f, I = !x[e(342)][e(1095)], C = "", O = "", j, M = x[e(1004)][e(2299)], F = Array[e(1265)](M);
    if (M && x.opts[e(1300)] && x[e(1004)][e(1300)] === !0 && (F ? M[e(2775)](e(2672)) == -1 && (M = M[e(2133)]("null")) : M != "null" && (M = [M, e(2672)], F = !0)), F && M[e(1028)] == 1 && (M = M[0], F = !1), x[e(1004)].$ref && o) {
      if (x[e(342)][e(2732)] == "fail") throw new Error(e(1620) + x.errSchemaPath + e(845));
      x[e(342)][e(2732)] !== !0 && (o = !1, x[e(1597)][e(2791)](e(347) + x.errSchemaPath + '"'));
    }
    if (x[e(1004)][e(274)] && x.opts[e(274)] && (r += " " + x[e(1946)][e(972)][e(274)].code(x, e(274))), M) {
      if (x[e(342)][e(2168)]) var N = x[e(986)][e(530)](x[e(342)][e(2168)], M);
      var z = x[e(1946)][e(2152)][M];
      if (N || F || z === !0 || z && !S0(z)) {
        var h = x.schemaPath + e(429), m = x[e(610)] + e(1244), h = x[e(553)] + e(429), m = x[e(610)] + e(1244), U = F ? e(541) : "checkDataType";
        if (r += e(2321) + x[e(986)][U](M, b, x.opts[e(1345)], !0) + ") { ", N) {
          var V = e(236) + f, G = e(2810) + f;
          r += e(2078) + V + e(1823) + b + "; var " + G + e(2636), x.opts.coerceTypes == e(743) && (r += e(2321) + V + e(1399) + b + e(1491) + b + e(1430) + b + e(1951) + b + e(1686) + V + " = typeof " + b + e(2239) + x[e(986)][e(1329)](x[e(1004)][e(2299)], b, x[e(342)][e(1345)]) + ") " + G + e(1951) + b + e(544)), r += e(2321) + G + e(1510);
          var o0 = N;
          if (o0)
            for (var u0, f0 = -1, i0 = o0.length - 1; f0 < i0; )
              u0 = o0[f0 += 1], u0 == e(654) ? r += e(1976) + V + e(559) + V + e(2232) + G + e(325) + b + "; else if (" + b + e(2311) + G + e(279) : u0 == e(536) || u0 == "integer" ? (r += " else if (" + V + e(1294) + b + e(981) + V + e(1202) + b + e(1461) + b + e(1704) + b + " ", u0 == "integer" && (r += e(856) + b + e(272)), r += e(412) + G + " = +" + b + "; ") : u0 == "boolean" ? r += " else if (" + b + e(2437) + b + " === 0 || " + b + e(2311) + G + e(2371) + b + e(1419) + b + " === 1) " + G + " = true; " : u0 == "null" ? r += e(1976) + b + " === '' || " + b + " === 0 || " + b + e(2793) + G + " = null; " : x[e(342)].coerceTypes == "array" && u0 == e(743) && (r += e(1976) + V + " == 'string' || " + V + e(559) + V + e(1294) + b + e(1804) + G + " = [" + b + e(537));
          r += e(244);
          var S = S || [];
          S[e(2037)](r), r = "", x.createErrors !== !1 ? (r += e(546) + (j || e(2299)) + e(2813) + x.errorPath + e(1883) + x[e(986)].toQuotedString(m) + e(1027), F ? r += "" + M[e(1825)](",") : r += "" + M, r += "' } ", x[e(342)][e(1376)] !== !1 && (r += e(1602), F ? r += "" + M[e(1825)](",") : r += "" + M, r += "' "), x.opts[e(2221)] && (r += e(979) + h + e(2201) + x[e(553)] + e(386) + b + " "), r += e(1712)) : r += e(589);
          var P = r;
          r = S[e(1454)](), !x[e(917)] && I ? x[e(682)] ? r += e(826) + P + "]); " : r += e(879) + P + e(558) : r += e(1171) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += e(1529) + G + " !== undefined) {  ";
          var l0 = l ? "data" + (l - 1 || "") : "parentData", k0 = l ? x.dataPathArr[l] : e(2580);
          r += " " + b + e(1951) + G + "; ", !l && (r += "if (" + l0 + e(933)), r += " " + l0 + "[" + k0 + e(1838) + G + e(544);
        } else {
          var S = S || [];
          S[e(2037)](r), r = "", x[e(1397)] !== !1 ? (r += " { keyword: '" + (j || e(2299)) + "' , dataPath: (dataPath || '') + " + x[e(1929)] + e(1883) + x[e(986)].toQuotedString(m) + e(1027), F ? r += "" + M[e(1825)](",") : r += "" + M, r += e(596), x.opts[e(1376)] !== !1 && (r += e(1602), F ? r += "" + M.join(",") : r += "" + M, r += "' "), x[e(342)][e(2221)] && (r += e(979) + h + e(2201) + x[e(553)] + e(386) + b + " "), r += e(1712)) : r += e(589);
          var P = r;
          r = S.pop(), !x.compositeRule && I ? x[e(682)] ? r += e(826) + P + e(1796) : r += e(879) + P + e(558) : r += e(1171) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        r += " } ";
      }
    }
    if (x[e(1004)][e(1570)] && !o) r += " " + x[e(1946)].all[e(1570)][e(1744)](x, e(1570)) + " ", I && (r += e(738), q ? r += "0" : r += e(614) + f, r += e(2270), O += "}");
    else {
      var v0 = x[e(1946)];
      if (v0) {
        for (var z, L0 = -1, N0 = v0[e(1028)] - 1; L0 < N0; )
          if (z = v0[L0 += 1], S0(z)) {
            if (z[e(2299)] && (r += e(2321) + x.util[e(1329)](z[e(2299)], b, x[e(342)][e(1345)]) + e(2270)), x[e(342)].useDefaults) {
              if (z[e(2299)] == e(513) && x.schema.properties) {
                var g = x[e(1004)][e(1683)], J0 = Object[e(2459)](g), D = J0;
                if (D)
                  for (var T, L = -1, J = D.length - 1; L < J; ) {
                    T = D[L += 1];
                    var X = g[T];
                    if (X.default !== void 0) {
                      var Z = b + x[e(986)].getProperty(T);
                      if (x[e(917)]) {
                        if (x[e(342)].strictDefaults) {
                          var A = e(991) + Z;
                          if (x[e(342)].strictDefaults === e(1263)) x.logger[e(2791)](A);
                          else throw new Error(A);
                        }
                      } else r += " if (" + Z + e(2127), x[e(342)][e(993)] == "empty" && (r += e(2395) + Z + " === null || " + Z + " === '' "), r += " ) " + Z + e(1951), x[e(342)].useDefaults == e(2744) ? r += " " + x[e(792)](X[e(574)]) + " " : r += " " + JSON[e(956)](X[e(574)]) + " ", r += "; ";
                    }
                  }
              } else if (z.type == e(743) && Array[e(1265)](x[e(1004)].items)) {
                var Y = x[e(1004)].items;
                if (Y) {
                  for (var X, f0 = -1, c0 = Y[e(1028)] - 1; f0 < c0; )
                    if (X = Y[f0 += 1], X[e(574)] !== void 0) {
                      var Z = b + "[" + f0 + "]";
                      if (x.compositeRule) {
                        if (x[e(342)][e(2634)]) {
                          var A = e(991) + Z;
                          if (x[e(342)][e(2634)] === e(1263)) x[e(1597)][e(2791)](A);
                          else throw new Error(A);
                        }
                      } else r += " if (" + Z + " === undefined ", x[e(342)].useDefaults == "empty" && (r += e(2395) + Z + e(2717) + Z + e(978)), r += e(293) + Z + e(1951), x[e(342)][e(993)] == e(2744) ? r += " " + x.useDefault(X[e(574)]) + " " : r += " " + JSON[e(956)](X.default) + " ", r += "; ";
                    }
                }
              }
            }
            var n0 = z[e(345)];
            if (n0) {
              for (var a0, M0 = -1, T0 = n0[e(1028)] - 1; M0 < T0; )
                if (a0 = n0[M0 += 1], G0(a0)) {
                  var U0 = a0[e(1744)](x, a0.keyword, z[e(2299)]);
                  U0 && (r += " " + U0 + " ", I && (C += "}"));
                }
            }
            if (I && (r += " " + C + " ", C = ""), z[e(2299)] && (r += " } ", M && M === z[e(2299)] && !N)) {
              r += e(398);
              var h = x[e(553)] + e(429), m = x[e(610)] + e(1244), S = S || [];
              S[e(2037)](r), r = "", x.createErrors !== !1 ? (r += e(546) + (j || e(2299)) + "' , dataPath: (dataPath || '') + " + x[e(1929)] + " , schemaPath: " + x[e(986)][e(562)](m) + " , params: { type: '", F ? r += "" + M.join(",") : r += "" + M, r += "' } ", x.opts[e(1376)] !== !1 && (r += e(1602), F ? r += "" + M[e(1825)](",") : r += "" + M, r += "' "), x[e(342)][e(2221)] && (r += e(979) + h + " , parentSchema: validate.schema" + x[e(553)] + e(386) + b + " "), r += " } ") : r += " {} ";
              var P = r;
              r = S.pop(), !x[e(917)] && I ? x[e(682)] ? r += " throw new ValidationError([" + P + e(1796) : r += " validate.errors = [" + P + e(558) : r += e(1171) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ";
            }
            I && (r += " if (errors === ", q ? r += "0" : r += e(614) + f, r += ") { ", O += "}");
          }
      }
    }
    I && (r += " " + O + " "), q ? (s ? (r += " if (errors === 0) return data;           ", r += e(1009)) : (r += " validate.errors = vErrors; ", r += e(2590)), r += " }; return validate;") : r += " var " + R + e(1596) + f + ";";
    function S0(Q0) {
      const O0 = e;
      for (var V0 = Q0[O0(345)], Y0 = 0; Y0 < V0[O0(1028)]; Y0++) if (G0(V0[Y0])) return !0;
    }
    function G0(Q0) {
      const O0 = e;
      return x[O0(1004)][Q0[O0(2169)]] !== void 0 || Q0.implements && se(Q0);
    }
    function se(Q0) {
      const O0 = e;
      for (var V0 = Q0.implements, Y0 = 0; Y0 < V0[O0(1028)]; Y0++) if (x[O0(1004)][V0[Y0]] !== void 0) return !0;
    }
    return r;
  }), tt;
}
var at, dr;
function B2() {
  const i = a;
  if (dr) return at;
  dr = 1;
  var x = ca(), t = _e(), n = ua(), e = fs(), r = ls(), s = t[i(2405)], o = oa(), c = n[i(1736)];
  at = u;
  function u(P, q, A, R) {
    const I = i;
    var C = this, O = this[I(2074)], j = [void 0], M = {}, F = [], N = {}, z = [], U = {}, V = [];
    q = q || { schema: P, refVal: j, refs: M };
    var G = d[I(1138)](this, P, q, R), o0 = this[I(1938)][G[I(777)]];
    if (G[I(2503)]) return o0[I(2603)] = k0;
    var u0 = this[I(2789)], f0 = this[I(1946)];
    try {
      var i0 = v0(P, q, A, R);
      o0[I(1981)] = i0;
      var l0 = o0[I(2603)];
      return l0 && (l0[I(1004)] = i0.schema, l0[I(836)] = null, l0.refs = i0[I(1706)], l0[I(1198)] = i0[I(1198)], l0[I(1562)] = i0[I(1562)], l0[I(1233)] = i0[I(1233)], O[I(2428)] && (l0.source = i0[I(443)])), i0;
    } finally {
      f.call(this, P, q, R);
    }
    function k0() {
      const Z = I;
      var Y = o0[Z(1981)], c0 = Y[Z(1104)](this, arguments);
      return k0.errors = Y.errors, c0;
    }
    function v0(Z, Y, c0, n0) {
      const a0 = I;
      var M0 = !Y || Y && Y[a0(1004)] == Z;
      if (Y[a0(1004)] != q[a0(1004)]) return u[a0(1138)](C, Z, Y, c0, n0);
      var T0 = Z[a0(1233)] === !0, U0 = r({ isTop: !0, schema: Z, isRoot: M0, baseId: n0, root: Y, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: n[a0(564)], RULES: f0, validate: r, util: t, resolve: x, resolveRef: L0, usePattern: L, useDefault: J, useCustomRule: X, opts: O, formats: u0, logger: C[a0(1597)], self: C });
      U0 = S(j, m) + S(F, g) + S(z, h) + S(V, b) + U0, O.processCode && (U0 = O.processCode(U0, Z));
      var S0;
      try {
        var G0 = new Function(a0(2703), "RULES", a0(2219), a0(1562), a0(1198), a0(1977), a0(793), "equal", a0(2405), a0(1344), U0);
        S0 = G0(C, f0, u0, q, j, z, V, o, s, c), j[0] = S0;
      } catch (se) {
        throw C[a0(1597)][a0(1314)](a0(2351), U0), se;
      }
      return S0.schema = Z, S0.errors = null, S0[a0(1706)] = M, S0[a0(1198)] = j, S0.root = M0 ? S0 : Y, T0 && (S0.$async = !0), O[a0(2428)] === !0 && (S0.source = { code: U0, patterns: F, defaults: z }), S0;
    }
    function L0(Z, Y, c0) {
      const n0 = I;
      Y = x[n0(1693)](Z, Y);
      var a0 = M[Y], M0, T0;
      if (a0 !== void 0) return M0 = j[a0], T0 = n0(2779) + a0 + "]", T(M0, T0);
      if (!c0 && q[n0(1706)]) {
        var U0 = q[n0(1706)][Y];
        if (U0 !== void 0) return M0 = q[n0(1198)][U0], T0 = N0(Y, M0), T(M0, T0);
      }
      T0 = N0(Y);
      var S0 = x[n0(1138)](C, v0, q, Y);
      if (S0 === void 0) {
        var G0 = A && A[Y];
        G0 && (S0 = x[n0(1655)](G0, O.inlineRefs) ? G0 : u[n0(1138)](C, G0, q, A, Z));
      }
      if (S0 === void 0) J0(Y);
      else return D(Y, S0), T(S0, T0);
    }
    function N0(Z, Y) {
      const c0 = I;
      var n0 = j.length;
      return j[n0] = Y, M[Z] = n0, c0(1198) + n0;
    }
    function J0(Z) {
      delete M[Z];
    }
    function D(Z, Y) {
      var c0 = M[Z];
      j[c0] = Y;
    }
    function T(Z, Y) {
      return typeof Z == "object" || typeof Z == I(781) ? { code: Y, schema: Z, inline: !0 } : { code: Y, $async: Z && !!Z.$async };
    }
    function L(Z) {
      const Y = I;
      var c0 = N[Z];
      return c0 === void 0 && (c0 = N[Z] = F[Y(1028)], F[c0] = Z), Y(1958) + c0;
    }
    function J(Z) {
      const Y = I;
      switch (typeof Z) {
        case "boolean":
        case "number":
          return "" + Z;
        case Y(654):
          return t.toQuotedString(Z);
        case "object":
          if (Z === null) return Y(2672);
          var c0 = e(Z), n0 = U[c0];
          return n0 === void 0 && (n0 = U[c0] = z[Y(1028)], z[n0] = Z), Y(574) + n0;
      }
    }
    function X(Z, Y, c0, n0) {
      const a0 = I;
      if (C[a0(2074)][a0(618)] !== !1) {
        var M0 = Z.definition[a0(2192)];
        if (M0 && !M0.every(function(Y0) {
          return Object[a0(983)].hasOwnProperty.call(c0, Y0);
        })) throw new Error(a0(2585) + M0.join(","));
        var T0 = Z[a0(2093)][a0(618)];
        if (T0) {
          var U0 = T0(Y);
          if (!U0) {
            var S0 = a0(1738) + C[a0(2650)](T0[a0(836)]);
            if (C[a0(2074)][a0(618)] == "log") C[a0(1597)][a0(1314)](S0);
            else throw new Error(S0);
          }
        }
      }
      var G0 = Z[a0(2093)].compile, se = Z[a0(2093)][a0(1926)], Q0 = Z[a0(2093)][a0(1791)], O0;
      if (G0) O0 = G0[a0(1138)](C, Y, c0, n0);
      else if (Q0)
        O0 = Q0[a0(1138)](C, Y, c0, n0), O[a0(618)] !== !1 && C[a0(618)](O0, !0);
      else if (se) O0 = se.call(C, n0, Z.keyword, Y, c0);
      else if (O0 = Z.definition[a0(1981)], !O0) return;
      if (O0 === void 0) throw new Error('custom keyword "' + Z[a0(2169)] + a0(457));
      var V0 = V[a0(1028)];
      return V[V0] = O0, { code: "customRule" + V0, validate: O0 };
    }
  }
  function d(P, q, A) {
    const R = i;
    var I = l[R(1138)](this, P, q, A);
    return I >= 0 ? { index: I, compiling: !0 } : (I = this[R(1938)][R(1028)], this[R(1938)][I] = { schema: P, root: q, baseId: A }, { index: I, compiling: !1 });
  }
  function f(P, q, A) {
    var I = l[i(1138)](this, P, q, A);
    I >= 0 && this._compilations.splice(I, 1);
  }
  function l(P, q, A) {
    const R = i;
    for (var I = 0; I < this[R(1938)][R(1028)]; I++) {
      var C = this[R(1938)][I];
      if (C[R(1004)] == P && C[R(1562)] == q && C.baseId == A) return I;
    }
    return -1;
  }
  function g(P, q) {
    const A = i;
    return A(1338) + P + A(1882) + t[A(562)](q[P]) + ");";
  }
  function h(P) {
    return i(2243) + P + " = defaults[" + P + "];";
  }
  function m(P, q) {
    const A = i;
    return q[P] === void 0 ? "" : A(2467) + P + A(1215) + P + "];";
  }
  function b(P) {
    const q = i;
    return "var customRule" + P + q(1662) + P + "];";
  }
  function S(P, q) {
    const A = i;
    if (!P[A(1028)]) return "";
    for (var R = "", I = 0; I < P[A(1028)]; I++) R += q(I, P);
    return R;
  }
  return at;
}
var rt = { exports: {} }, fr;
function W2() {
  const i = a;
  if (fr) return rt.exports;
  fr = 1;
  var x = rt[i(1949)] = function() {
    const n = i;
    this[n(2619)] = {};
  };
  return x[i(983)][i(2325)] = function(n, e) {
    this._cache[n] = e;
  }, x[i(983)][i(474)] = function(n) {
    return this[i(2619)][n];
  }, x[i(983)].del = function(n) {
    const e = i;
    delete this[e(2619)][n];
  }, x.prototype[i(817)] = function() {
    this._cache = {};
  }, rt.exports;
}
var nt, lr;
function K2() {
  const i = a;
  if (lr) return nt;
  lr = 1;
  var x = _e(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, n = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, r = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, s = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, d = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, f = /^(?:\/(?:[^~/]|~0|~1)*)*$/, l = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, g = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  nt = h;
  function h(O) {
    const j = W;
    return O = O == j(2090) ? j(2090) : j(2422), x[j(1217)](h[O]);
  }
  h[i(2422)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: d, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": g }, h[i(2090)] = { date: b, time: S, "date-time": q, uri: R, "uri-reference": o, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: d, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": g };
  function m(O) {
    return O % 4 === 0 && (O % 100 !== 0 || O % 400 === 0);
  }
  function b(O) {
    var M = O[i(1325)](t);
    if (!M) return !1;
    var F = +M[1], N = +M[2], z = +M[3];
    return N >= 1 && N <= 12 && z >= 1 && z <= (N == 2 && m(F) ? 29 : n[N]);
  }
  function S(O, j) {
    var F = O[i(1325)](e);
    if (!F) return !1;
    var N = F[1], z = F[2], U = F[3], V = F[5];
    return (N <= 23 && z <= 59 && U <= 59 || N == 23 && z == 59 && U == 60) && (!j || V);
  }
  var P = /t|\s/i;
  function q(O) {
    const j = i;
    var M = O[j(2742)](P);
    return M[j(1028)] == 2 && b(M[0]) && S(M[1], !0);
  }
  var A = /\/|:/;
  function R(O) {
    const j = i;
    return A.test(O) && s[j(551)](O);
  }
  var I = /[^\\]\\Z/;
  function C(O) {
    if (I[i(551)](O)) return !1;
    try {
      return new RegExp(O), !0;
    } catch {
      return !1;
    }
  }
  return nt;
}
var st, hr;
function G2() {
  return hr || (hr = 1, st = function(x, t, n) {
    const e = W;
    var r = " ", s = x.level, o = x[e(2575)], c = x[e(1004)][t], u = x[e(610)] + "/" + t, d = !x.opts.allErrors, f = e(2584) + (o || ""), l = e(238) + s, g, h;
    if (c == "#" || c == "#/") x[e(397)] ? (g = x[e(682)], h = e(1981)) : (g = x.root[e(1004)].$async === !0, h = e(1748));
    else {
      var m = x.resolveRef(x.baseId, c, x[e(397)]);
      if (m === void 0) {
        var b = x.MissingRefError[e(705)](x[e(2764)], c);
        if (x[e(342)][e(1732)] == e(946)) {
          x[e(1597)][e(1314)](b);
          var S = S || [];
          S[e(2037)](r), r = "", x[e(1397)] !== !1 ? (r += e(546) + e(1570) + e(2813) + x[e(1929)] + e(1883) + x.util[e(562)](u) + e(479) + x.util[e(1517)](c) + "' } ", x[e(342)][e(1376)] !== !1 && (r += e(1721) + x[e(986)].escapeQuotes(c) + "' "), x[e(342)][e(2221)] && (r += " , schema: " + x.util.toQuotedString(c) + " , parentSchema: validate.schema" + x[e(553)] + " , data: " + f + " "), r += " } ") : r += e(589);
          var P = r;
          r = S[e(1454)](), !x[e(917)] && d ? x.async ? r += e(826) + P + e(1796) : r += " validate.errors = [" + P + e(558) : r += e(1171) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d && (r += " if (false) { ");
        } else if (x[e(342)][e(1732)] == "ignore") x[e(1597)][e(2791)](b), d && (r += " if (true) { ");
        else throw new x[e(1216)](x[e(2764)], c, b);
      } else if (m.inline) {
        var q = x[e(986)][e(1217)](x);
        q[e(2554)]++;
        var A = e(238) + q[e(2554)];
        q[e(1004)] = m.schema, q.schemaPath = "", q[e(610)] = c;
        var R = x[e(1981)](q).replace(/validate\.schema/g, m[e(1744)]);
        r += " " + R + " ", d && (r += e(2321) + A + e(2270));
      } else g = m[e(1233)] === !0 || x[e(682)] && m.$async !== !1, h = m[e(1744)];
    }
    if (h) {
      var S = S || [];
      S.push(r), r = "", x[e(342)][e(485)] ? r += " " + h + e(1324) : r += " " + h + "( ", r += " " + f + e(2470), x[e(1929)] != '""' && (r += e(1336) + x[e(1929)]);
      var I = o ? e(2584) + (o - 1 || "") : e(733), C = o ? x[e(2338)][o] : e(2580);
      r += e(1507) + I + e(1507) + C + ", rootData)  ";
      var O = r;
      if (r = S.pop(), g) {
        if (!x[e(682)]) throw new Error(e(482));
        d && (r += e(2078) + l + "; "), r += e(2187) + O + "; ", d && (r += " " + l + e(1545)), r += e(744), d && (r += " " + l + e(2420)), r += " } ", d && (r += e(2321) + l + e(2270));
      } else r += e(370) + O + ") { if (vErrors === null) vErrors = " + h + ".errors; else vErrors = vErrors.concat(" + h + e(2455), d && (r += e(398));
    }
    return r;
  }), st;
}
var it, pr;
function J2() {
  return pr || (pr = 1, it = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(1004)][t], o = x[e(553)] + x.util[e(1485)](t), c = x[e(610)] + "/" + t, u = !x[e(342)][e(1095)], d = x[e(986)].copy(x), f = "";
    d[e(2554)]++;
    var l = e(238) + d[e(2554)], g = d[e(2764)], h = !0, m = s;
    if (m)
      for (var b, S = -1, P = m[e(1028)] - 1; S < P; )
        b = m[S += 1], (x[e(342)][e(1610)] ? typeof b == e(513) && Object.keys(b)[e(1028)] > 0 || b === !1 : x.util[e(1238)](b, x[e(1946)][e(972)])) && (h = !1, d[e(1004)] = b, d[e(553)] = o + "[" + S + "]", d[e(610)] = c + "/" + S, r += "  " + x.validate(d) + " ", d[e(2764)] = g, u && (r += e(2321) + l + ") { ", f += "}"));
    return u && (h ? r += " if (true) { " : r += " " + f.slice(0, -1) + " "), r;
  }), it;
}
var ot, mr;
function Q2() {
  return mr || (mr = 1, ot = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x[e(1004)][t], u = x[e(553)] + x[e(986)].getProperty(t), d = x[e(610)] + "/" + t, f = !x[e(342)][e(1095)], l = e(2584) + (o || ""), g = e(238) + s, h = e(2706) + s, m = x.util[e(1217)](x), b = "";
    m[e(2554)]++;
    var S = e(238) + m[e(2554)], P = c[e(1646)](function(j) {
      const M = e;
      return x.opts[M(1610)] ? typeof j == "object" && Object[M(2459)](j)[M(1028)] > 0 || j === !1 : x[M(986)][M(1238)](j, x[M(1946)][M(972)]);
    });
    if (P) {
      var q = m.baseId;
      r += " var " + h + e(2611) + g + e(389);
      var A = x[e(917)];
      x[e(917)] = m[e(917)] = !0;
      var R = c;
      if (R)
        for (var I, C = -1, O = R[e(1028)] - 1; C < O; )
          I = R[C += 1], m[e(1004)] = I, m[e(553)] = u + "[" + C + "]", m[e(610)] = d + "/" + C, r += "  " + x[e(1981)](m) + " ", m[e(2764)] = q, r += " " + g + e(1951) + g + " || " + S + e(2397) + g + ") { ", b += "}";
      x[e(917)] = m[e(917)] = A, r += " " + b + e(370) + g + e(2413), x[e(1397)] !== !1 ? (r += " { keyword: '" + e(1124) + e(2813) + x[e(1929)] + e(1883) + x[e(986)][e(562)](d) + e(2145), x[e(342)].messages !== !1 && (r += e(2601)), x[e(342)][e(2221)] && (r += e(979) + u + e(2201) + x[e(553)] + e(386) + l + " "), r += e(1712)) : r += e(589), r += e(1303), !x[e(917)] && f && (x[e(682)] ? r += e(247) : r += e(2715)), r += e(627) + h + "; if (vErrors !== null) { if (" + h + e(2132) + h + e(1424), x[e(342)][e(1095)] && (r += " } ");
    } else f && (r += " if (true) { ");
    return r;
  }), ot;
}
var ct, gr;
function X2() {
  return gr || (gr = 1, ct = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(1004)][t], o = x[e(610)] + "/" + t;
    x[e(342)].allErrors;
    var c = x[e(986)][e(562)](s);
    return x[e(342)][e(274)] === !0 ? r += e(2522) + c + ");" : typeof x[e(342)][e(274)] == "function" && (r += " self._opts.$comment(" + c + ", " + x[e(986)][e(562)](o) + e(1363)), r;
  }), ct;
}
var ut, yr;
function Y2() {
  return yr || (yr = 1, ut = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x.schema[t], u = x[e(553)] + x.util[e(1485)](t), d = x.errSchemaPath + "/" + t, f = !x[e(342)][e(1095)], l = e(2584) + (o || ""), g = e(238) + s, h = x[e(342)].$data && c && c.$data;
    h && (r += " var schema" + s + e(1951) + x.util.getData(c[e(375)], o, x[e(2338)]) + "; "), !h && (r += " var schema" + s + e(2177) + u + ";"), r += e(974) + g + e(540) + l + ", schema" + s + e(2275) + g + e(463);
    var m = m || [];
    m.push(r), r = "", x[e(1397)] !== !1 ? (r += e(546) + "const" + e(2813) + x[e(1929)] + e(1883) + x[e(986)].toQuotedString(d) + " , params: { allowedValue: schema" + s + e(1712), x[e(342)][e(1376)] !== !1 && (r += e(1513)), x[e(342)].verbose && (r += e(979) + u + e(2201) + x[e(553)] + " , data: " + l + " "), r += e(1712)) : r += " {} ";
    var b = r;
    return r = m[e(1454)](), !x[e(917)] && f ? x.async ? r += e(826) + b + e(1796) : r += e(879) + b + "]; return false; " : r += " var err = " + b + e(1303), r += " }", f && (r += e(398)), r;
  }), ut;
}
var dt, vr;
function ec() {
  return vr || (vr = 1, dt = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x[e(1004)][t], u = x.schemaPath + x[e(986)][e(1485)](t), d = x.errSchemaPath + "/" + t, f = !x[e(342)][e(1095)], l = "data" + (o || ""), g = e(238) + s, h = e(2706) + s, m = x[e(986)].copy(x), b = "";
    m.level++;
    var S = e(238) + m[e(2554)], P = "i" + s, q = m[e(2575)] = x[e(2575)] + 1, A = "data" + q, R = x[e(2764)], I = x[e(342)][e(1610)] ? typeof c == e(513) && Object[e(2459)](c)[e(1028)] > 0 || c === !1 : x.util[e(1238)](c, x[e(1946)].all);
    if (r += e(974) + h + e(2528) + g + ";", I) {
      var C = x[e(917)];
      x[e(917)] = m[e(917)] = !0, m.schema = c, m.schemaPath = u, m[e(610)] = d, r += " var " + S + e(874) + P + e(935) + P + e(1042) + l + e(927) + P + "++) { ", m[e(1929)] = x[e(986)][e(2658)](x[e(1929)], P, x[e(342)][e(2568)], !0);
      var O = l + "[" + P + "]";
      m[e(2338)][q] = P;
      var j = x[e(1981)](m);
      m.baseId = R, x[e(986)].varOccurences(j, A) < 2 ? r += " " + x.util.varReplace(j, A, O) + " " : r += " var " + A + e(1951) + O + "; " + j + " ", r += e(2321) + S + ") break; }  ", x[e(917)] = m[e(917)] = C, r += " " + b + " if (!" + S + e(493);
    } else r += e(2321) + l + e(1724);
    var M = M || [];
    M[e(2037)](r), r = "", x[e(1397)] !== !1 ? (r += " { keyword: 'contains" + e(2813) + x[e(1929)] + e(1883) + x[e(986)][e(562)](d) + e(2145), x[e(342)][e(1376)] !== !1 && (r += e(1277)), x[e(342)][e(2221)] && (r += e(979) + u + e(2201) + x.schemaPath + e(386) + l + " "), r += e(1712)) : r += e(589);
    var F = r;
    return r = M[e(1454)](), !x[e(917)] && f ? x[e(682)] ? r += e(826) + F + e(1796) : r += e(879) + F + e(558) : r += e(1171) + F + e(1303), r += e(671), I && (r += "  errors = " + h + "; if (vErrors !== null) { if (" + h + e(2132) + h + e(1424)), x[e(342)][e(1095)] && (r += e(1712)), r;
  }), dt;
}
var ft, br;
function xc() {
  return br || (br = 1, ft = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x.schema[t], u = x[e(553)] + x[e(986)][e(1485)](t), d = x[e(610)] + "/" + t, f = !x[e(342)][e(1095)], l = e(2584) + (o || ""), g = e(2706) + s, h = x.util[e(1217)](x), m = "";
    h.level++;
    var b = "valid" + h.level, S = {}, P = {}, q = x[e(342)].ownProperties;
    for (C in c)
      if (C != "__proto__") {
        var A = c[C], R = Array.isArray(A) ? P : S;
        R[C] = A;
      }
    r += "var " + g + " = errors;";
    var I = x[e(1929)];
    r += e(1703) + s + ";";
    for (var C in P)
      if (R = P[C], R[e(1028)]) {
        if (r += e(2005) + l + x[e(986)][e(1485)](C) + e(554), q && (r += e(1854) + l + e(2344) + x.util.escapeQuotes(C) + e(301)), f) {
          r += e(2016);
          var O = R;
          if (O)
            for (var j, M = -1, F = O[e(1028)] - 1; M < F; ) {
              j = O[M += 1], M && (r += e(2395));
              var N = x[e(986)].getProperty(j), z = l + N;
              r += " ( ( " + z + e(2127), q && (r += e(1893) + l + ", '" + x.util[e(1517)](j) + "') "), r += e(2273) + s + e(1951) + x.util[e(562)](x[e(342)][e(2568)] ? j : N) + e(1844);
            }
          r += e(2034);
          var U = e(1750) + s, V = "' + " + U + e(1330);
          x[e(342)][e(2322)] && (x[e(1929)] = x[e(342)].jsonPointers ? x[e(986)][e(2658)](I, U, !0) : I + " + " + U);
          var G = G || [];
          G[e(2037)](r), r = "", x.createErrors !== !1 ? (r += e(546) + e(2192) + e(2813) + x[e(1929)] + e(1883) + x.util[e(562)](d) + e(2776) + x[e(986)][e(1517)](C) + e(1600) + V + "', depsCount: " + R[e(1028)] + e(1888) + x[e(986)][e(1517)](R[e(1028)] == 1 ? R[0] : R[e(1825)](", ")) + e(596), x[e(342)][e(1376)] !== !1 && (r += e(1858), R[e(1028)] == 1 ? r += e(2683) + x[e(986)][e(1517)](R[0]) : r += "properties " + x[e(986)].escapeQuotes(R[e(1825)](", ")), r += e(2252) + x[e(986)][e(1517)](C) + e(2385)), x[e(342)].verbose && (r += e(979) + u + e(2201) + x[e(553)] + e(386) + l + " "), r += e(1712)) : r += e(589);
          var o0 = r;
          r = G[e(1454)](), !x.compositeRule && f ? x[e(682)] ? r += " throw new ValidationError([" + o0 + e(1796) : r += e(879) + o0 + "]; return false; " : r += " var err = " + o0 + e(1303);
        } else {
          r += e(832);
          var u0 = R;
          if (u0)
            for (var j, f0 = -1, i0 = u0.length - 1; f0 < i0; ) {
              j = u0[f0 += 1];
              var N = x[e(986)][e(1485)](j), V = x[e(986)][e(1517)](j), z = l + N;
              x.opts._errorDataPathProperty && (x[e(1929)] = x[e(986)].getPath(I, j, x[e(342)].jsonPointers)), r += e(2005) + z + e(2127), q && (r += " || ! Object.prototype.hasOwnProperty.call(" + l + e(2344) + x[e(986)].escapeQuotes(j) + "') "), r += e(1859), x[e(1397)] !== !1 ? (r += e(546) + e(2192) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(1883) + x[e(986)][e(562)](d) + e(2776) + x[e(986)][e(1517)](C) + e(1600) + V + "', depsCount: " + R.length + e(1888) + x[e(986)][e(1517)](R[e(1028)] == 1 ? R[0] : R[e(1825)](", ")) + e(596), x[e(342)].messages !== !1 && (r += e(1858), R.length == 1 ? r += e(2683) + x[e(986)].escapeQuotes(R[0]) : r += e(2700) + x[e(986)].escapeQuotes(R[e(1825)](", ")), r += e(2252) + x.util[e(1517)](C) + " is present' "), x[e(342)].verbose && (r += e(979) + u + " , parentSchema: validate.schema" + x[e(553)] + " , data: " + l + " "), r += " } ") : r += e(589), r += e(2508);
            }
        }
        r += e(2569), f && (m += "}", r += e(398));
      }
    x[e(1929)] = I;
    var l0 = h[e(2764)];
    for (var C in S) {
      var A = S[C];
      (x[e(342)][e(1610)] ? typeof A == e(513) && Object[e(2459)](A)[e(1028)] > 0 || A === !1 : x[e(986)][e(1238)](A, x.RULES[e(972)])) && (r += " " + b + " = true; if ( " + l + x[e(986)][e(1485)](C) + e(554), q && (r += e(1854) + l + e(2344) + x[e(986)].escapeQuotes(C) + e(301)), r += e(2270), h[e(1004)] = A, h.schemaPath = u + x[e(986)][e(1485)](C), h[e(610)] = d + "/" + x[e(986)][e(2240)](C), r += "  " + x.validate(h) + " ", h.baseId = l0, r += e(2814), f && (r += " if (" + b + e(2270), m += "}"));
    }
    return f && (r += e(1525) + m + " if (" + g + e(2316)), r;
  }), ft;
}
var lt, wr;
function tc() {
  return wr || (wr = 1, lt = function(x, t, n) {
    const e = W;
    var r = " ", s = x.level, o = x[e(2575)], c = x.schema[t], u = x.schemaPath + x[e(986)].getProperty(t), d = x[e(610)] + "/" + t, f = !x[e(342)][e(1095)], l = e(2584) + (o || ""), g = e(238) + s, h = x[e(342)][e(375)] && c && c.$data;
    h && (r += e(1835) + s + " = " + x.util[e(583)](c[e(375)], o, x.dataPathArr) + "; ");
    var m = "i" + s, b = e(1004) + s;
    !h && (r += e(2078) + b + e(2177) + u + ";"), r += e(974) + g + ";", h && (r += e(453) + s + e(2271) + g + e(1723) + s + e(412) + g + e(1631)), r += "" + g + e(1333) + m + "=0; " + m + "<" + b + e(927) + m + e(2696) + l + ", " + b + "[" + m + e(276) + g + e(2501), h && (r += e(848)), r += " if (!" + g + e(463);
    var S = S || [];
    S[e(2037)](r), r = "", x[e(1397)] !== !1 ? (r += " { keyword: '" + e(2050) + e(2813) + x[e(1929)] + e(1883) + x[e(986)][e(562)](d) + " , params: { allowedValues: schema" + s + e(1712), x[e(342)][e(1376)] !== !1 && (r += e(2729)), x[e(342)][e(2221)] && (r += e(979) + u + " , parentSchema: validate.schema" + x[e(553)] + e(386) + l + " "), r += e(1712)) : r += " {} ";
    var P = r;
    return r = S[e(1454)](), !x[e(917)] && f ? x[e(682)] ? r += e(826) + P + e(1796) : r += e(879) + P + e(558) : r += e(1171) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " }", f && (r += " else { "), r;
  }), lt;
}
var ht, Sr;
function ac() {
  return Sr || (Sr = 1, ht = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x[e(1004)][t], u = x[e(553)] + x.util[e(1485)](t), d = x[e(610)] + "/" + t, f = !x[e(342)][e(1095)], l = e(2584) + (o || "");
    if (x.opts.format === !1) return f && (r += e(1918)), r;
    var g = x[e(342)][e(375)] && c && c[e(375)], h;
    g ? (r += " var schema" + s + e(1951) + x[e(986)][e(583)](c.$data, o, x.dataPathArr) + "; ", h = e(1004) + s) : h = c;
    var m = x[e(342)][e(2479)], b = Array.isArray(m);
    if (g) {
      var S = e(1477) + s, P = e(1876) + s, q = e(2062) + s;
      r += e(2078) + S + e(2693) + h + "]; var " + P + e(1823) + S + " == 'object' && !(" + S + " instanceof RegExp) && " + S + ".validate; var " + q + e(1951) + P + " && " + S + e(1552) + P + ") { ", x[e(682)] && (r += e(1846) + s + e(1951) + S + e(481)), r += " " + S + e(1951) + S + e(938), g && (r += " (" + h + " !== undefined && typeof " + h + e(2408)), r += " (", m != "ignore" && (r += " (" + h + e(2436) + S + " ", b && (r += " && self._opts.unknownFormats.indexOf(" + h + e(2228)), r += e(2812)), r += " (" + S + " && " + q + e(1586) + n + e(519) + S + e(1060), x[e(682)] ? r += " (async" + s + " ? await " + S + "(" + l + e(491) + S + "(" + l + e(412) : r += " " + S + "(" + l + ") ", r += e(437) + S + e(501) + l + e(1256);
    } else {
      var S = x[e(2219)][c];
      if (!S) {
        if (m == e(487)) return x.logger[e(2791)]('unknown format "' + c + e(883) + x[e(610)] + '"'), f && (r += e(1918)), r;
        if (b && m[e(2775)](c) >= 0) return f && (r += e(1918)), r;
        throw new Error(e(1258) + c + '" is used in schema at path "' + x[e(610)] + '"');
      }
      var P = typeof S == e(513) && !(S instanceof RegExp) && S[e(1981)], q = P && S[e(2299)] || "string";
      if (P) {
        var A = S[e(682)] === !0;
        S = S[e(1981)];
      }
      if (q != n) return f && (r += e(1918)), r;
      if (A) {
        if (!x[e(682)]) throw new Error(e(2306));
        var R = e(2219) + x.util.getProperty(c) + e(1745);
        r += e(1148) + R + "(" + l + "))) { ";
      } else {
        r += " if (! ";
        var R = "formats" + x[e(986)][e(1485)](c);
        P && (R += e(1745)), typeof S == "function" ? r += " " + R + "(" + l + ") " : r += " " + R + e(501) + l + ") ", r += e(2270);
      }
    }
    var I = I || [];
    I.push(r), r = "", x[e(1397)] !== !1 ? (r += e(546) + e(1477) + e(2813) + x[e(1929)] + " , schemaPath: " + x[e(986)].toQuotedString(d) + e(1979), g ? r += "" + h : r += "" + x.util[e(562)](c), r += e(2730), x.opts[e(1376)] !== !1 && (r += ` , message: 'should match format "`, g ? r += e(1889) + h + e(1330) : r += "" + x[e(986)][e(1517)](c), r += e(1881)), x.opts.verbose && (r += e(687), g ? r += e(2743) + u : r += "" + x[e(986)][e(562)](c), r += e(2488) + x[e(553)] + e(386) + l + " "), r += " } ") : r += e(589);
    var C = r;
    return r = I.pop(), !x[e(917)] && f ? x.async ? r += e(826) + C + e(1796) : r += e(879) + C + "]; return false; " : r += e(1171) + C + e(1303), r += e(1712), f && (r += e(398)), r;
  }), ht;
}
var pt, kr;
function rc() {
  return kr || (kr = 1, pt = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x[e(1004)][t], u = x.schemaPath + x[e(986)][e(1485)](t), d = x[e(610)] + "/" + t, f = !x.opts[e(1095)], l = e(2584) + (o || ""), g = e(238) + s, h = e(2706) + s, m = x.util[e(1217)](x);
    m[e(2554)]++;
    var b = e(238) + m[e(2554)], S = x[e(1004)][e(1463)], P = x[e(1004)][e(968)], q = S !== void 0 && (x[e(342)].strictKeywords ? typeof S == "object" && Object[e(2459)](S).length > 0 || S === !1 : x.util.schemaHasRules(S, x[e(1946)][e(972)])), A = P !== void 0 && (x.opts[e(1610)] ? typeof P == e(513) && Object.keys(P)[e(1028)] > 0 || P === !1 : x[e(986)][e(1238)](P, x[e(1946)][e(972)])), R = m[e(2764)];
    if (q || A) {
      var I;
      m[e(1397)] = !1, m[e(1004)] = c, m[e(553)] = u, m.errSchemaPath = d, r += e(2078) + h + " = errors; var " + g + e(2284);
      var C = x.compositeRule;
      x.compositeRule = m[e(917)] = !0, r += "  " + x[e(1981)](m) + " ", m[e(2764)] = R, m[e(1397)] = !0, r += e(2008) + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; }  ", x[e(917)] = m.compositeRule = C, q ? (r += e(2321) + b + e(652), m[e(1004)] = x.schema[e(1463)], m.schemaPath = x[e(553)] + e(2443), m.errSchemaPath = x[e(610)] + "/then", r += "  " + x[e(1981)](m) + " ", m.baseId = R, r += " " + g + e(1951) + b + "; ", q && A ? (I = e(1809) + s, r += e(2078) + I + e(295)) : I = e(2208), r += " } ", A && (r += e(398))) : r += " if (!" + b + ") { ", A && (m[e(1004)] = x.schema[e(968)], m[e(553)] = x.schemaPath + e(1955), m[e(610)] = x.errSchemaPath + e(1044), r += "  " + x[e(1981)](m) + " ", m[e(2764)] = R, r += " " + g + " = " + b + "; ", q && A ? (I = e(1809) + s, r += " var " + I + e(924)) : I = e(1583), r += e(1712)), r += e(370) + g + ") {   var err =   ", x[e(1397)] !== !1 ? (r += " { keyword: 'if' , dataPath: (dataPath || '') + " + x.errorPath + " , schemaPath: " + x[e(986)][e(562)](d) + e(1248) + I + e(1712), x[e(342)][e(1376)] !== !1 && (r += e(830) + I + e(1886)), x[e(342)].verbose && (r += " , schema: validate.schema" + u + e(2201) + x[e(553)] + e(386) + l + " "), r += e(1712)) : r += " {} ", r += e(1303), !x[e(917)] && f && (x.async ? r += e(247) : r += e(2715)), r += e(2569), f && (r += e(398));
    } else f && (r += e(1918));
    return r;
  }), pt;
}
var mt, Pr;
function nc() {
  return Pr || (Pr = 1, mt = function(x, t, n) {
    const e = W;
    var r = " ", s = x.level, o = x[e(2575)], c = x[e(1004)][t], u = x[e(553)] + x[e(986)][e(1485)](t), d = x[e(610)] + "/" + t, f = !x[e(342)][e(1095)], l = e(2584) + (o || ""), g = e(238) + s, h = e(2706) + s, m = x[e(986)].copy(x), b = "";
    m.level++;
    var S = e(238) + m[e(2554)], P = "i" + s, q = m[e(2575)] = x[e(2575)] + 1, A = "data" + q, R = x[e(2764)];
    if (r += e(974) + h + e(2528) + g + ";", Array[e(1265)](c)) {
      var I = x[e(1004)].additionalItems;
      if (I === !1) {
        r += " " + g + e(1951) + l + e(1766) + c[e(1028)] + "; ";
        var C = d;
        d = x.errSchemaPath + e(2149), r += "  if (!" + g + e(463);
        var O = O || [];
        O[e(2037)](r), r = "", x[e(1397)] !== !1 ? (r += e(546) + e(954) + e(2813) + x[e(1929)] + e(1883) + x[e(986)][e(562)](d) + e(591) + c.length + e(1712), x[e(342)].messages !== !1 && (r += e(1764) + c[e(1028)] + e(333)), x.opts[e(2221)] && (r += e(2106) + x.schemaPath + e(386) + l + " "), r += e(1712)) : r += e(589);
        var j = r;
        r = O[e(1454)](), !x[e(917)] && f ? x[e(682)] ? r += " throw new ValidationError([" + j + e(1796) : r += e(879) + j + e(558) : r += e(1171) + j + e(1303), r += e(1712), d = C, f && (b += "}", r += e(398));
      }
      var M = c;
      if (M) {
        for (var F, N = -1, z = M.length - 1; N < z; )
          if (F = M[N += 1], x.opts[e(1610)] ? typeof F == "object" && Object[e(2459)](F)[e(1028)] > 0 || F === !1 : x[e(986)][e(1238)](F, x[e(1946)][e(972)])) {
            r += " " + S + e(1356) + l + e(2238) + N + e(2270);
            var U = l + "[" + N + "]";
            m[e(1004)] = F, m.schemaPath = u + "[" + N + "]", m[e(610)] = d + "/" + N, m.errorPath = x[e(986)][e(2658)](x[e(1929)], N, x.opts[e(2568)], !0), m.dataPathArr[q] = N;
            var V = x[e(1981)](m);
            m[e(2764)] = R, x[e(986)].varOccurences(V, A) < 2 ? r += " " + x[e(986)][e(984)](V, A, U) + " " : r += e(2078) + A + e(1951) + U + "; " + V + " ", r += " }  ", f && (r += " if (" + S + e(2270), b += "}");
          }
      }
      if (typeof I == e(513) && (x[e(342)].strictKeywords ? typeof I == "object" && Object.keys(I)[e(1028)] > 0 || I === !1 : x[e(986)][e(1238)](I, x[e(1946)][e(972)]))) {
        m[e(1004)] = I, m[e(553)] = x[e(553)] + e(1089), m[e(610)] = x[e(610)] + e(2149), r += " " + S + e(1356) + l + e(2238) + c.length + e(1533) + P + " = " + c[e(1028)] + "; " + P + e(1042) + l + ".length; " + P + e(1996), m[e(1929)] = x[e(986)][e(2658)](x[e(1929)], P, x[e(342)][e(2568)], !0);
        var U = l + "[" + P + "]";
        m[e(2338)][q] = P;
        var V = x.validate(m);
        m[e(2764)] = R, x[e(986)][e(1140)](V, A) < 2 ? r += " " + x[e(986)][e(984)](V, A, U) + " " : r += e(2078) + A + e(1951) + U + "; " + V + " ", f && (r += e(370) + S + ") break; "), r += e(1364), f && (r += e(2321) + S + e(2270), b += "}");
      }
    } else if (x[e(342)][e(1610)] ? typeof c == e(513) && Object[e(2459)](c)[e(1028)] > 0 || c === !1 : x[e(986)][e(1238)](c, x[e(1946)][e(972)])) {
      m[e(1004)] = c, m[e(553)] = u, m[e(610)] = d, r += e(2565) + P + e(1951) + 0 + "; " + P + e(1042) + l + ".length; " + P + e(1996), m[e(1929)] = x[e(986)][e(2658)](x[e(1929)], P, x[e(342)][e(2568)], !0);
      var U = l + "[" + P + "]";
      m[e(2338)][q] = P;
      var V = x[e(1981)](m);
      m.baseId = R, x[e(986)][e(1140)](V, A) < 2 ? r += " " + x[e(986)].varReplace(V, A, U) + " " : r += e(2078) + A + " = " + U + "; " + V + " ", f && (r += e(370) + S + e(351)), r += " }";
    }
    return f && (r += " " + b + " if (" + h + " == errors) {"), r;
  }), mt;
}
var gt, Ir;
function Er() {
  return Ir || (Ir = 1, gt = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x.schema[t], u = x[e(553)] + x[e(986)].getProperty(t), d = x[e(610)] + "/" + t, f = !x[e(342)][e(1095)], R, l = "data" + (o || ""), g = x.opts.$data && c && c[e(375)], h;
    g ? (r += e(1835) + s + e(1951) + x[e(986)][e(583)](c[e(375)], o, x.dataPathArr) + "; ", h = e(1004) + s) : h = c;
    var m = t == "maximum", b = e(m ? 316 : 1159), S = x[e(1004)][b], P = x[e(342)][e(375)] && S && S[e(375)], q = m ? "<" : ">", A = m ? ">" : "<", R = void 0;
    if (!(g || typeof c == e(536) || c === void 0)) throw new Error(t + e(2067));
    if (!(P || S === void 0 || typeof S == e(536) || typeof S == "boolean")) throw new Error(b + e(2787));
    if (P) {
      var I = x.util.getData(S[e(375)], o, x.dataPathArr), C = e(1116) + s, O = e(2801) + s, j = e(548) + s, M = "op" + s, F = "' + " + M + e(1330);
      r += e(1548) + s + e(1951) + I + "; ", I = e(2415) + s, r += e(2078) + C + e(844) + O + e(1823) + I + e(2239) + O + e(2195) + O + " != 'undefined' && " + O + e(752);
      var R = b, N = N || [];
      N[e(2037)](r), r = "", x[e(1397)] !== !1 ? (r += e(546) + (R || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + x.errorPath + e(1883) + x[e(986)][e(562)](d) + " , params: {} ", x.opts[e(1376)] !== !1 && (r += e(1630) + b + e(1905)), x.opts[e(2221)] && (r += e(979) + u + " , parentSchema: validate.schema" + x[e(553)] + e(386) + l + " "), r += e(1712)) : r += " {} ";
      var z = r;
      r = N[e(1454)](), !x.compositeRule && f ? x[e(682)] ? r += e(826) + z + e(1796) : r += " validate.errors = [" + z + e(558) : r += e(1171) + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += e(1222), g && (r += " (" + h + " !== undefined && typeof " + h + e(2229)), r += " " + O + " == 'number' ? ( (" + C + e(1951) + h + e(2606) + I + " " + q + "= " + h + e(1401) + l + " " + A + "= " + I + e(437) + l + " " + A + " " + h + " ) : ( (" + C + e(1951) + I + e(399) + l + " " + A + "= " + h + e(437) + l + " " + A + " " + h + " ) || " + l + e(1899) + l + ") { var op" + s + e(1951) + C + e(1451) + q + e(1077) + q + e(2641), c === void 0 && (R = b, d = x[e(610)] + "/" + b, h = I, g = P);
    } else {
      var j = typeof S == e(536), F = q;
      if (j && g) {
        var M = "'" + F + "'";
        r += " if ( ", g && (r += " (" + h + e(2496) + h + e(2229)), r += " ( " + h + e(2606) + S + " " + q + "= " + h + e(2417) + l + " " + A + "= " + S + e(437) + l + " " + A + " " + h + e(2139) + l + " !== " + l + e(2270);
      } else {
        j && c === void 0 ? (C = !0, R = b, d = x.errSchemaPath + "/" + b, h = S, A += "=") : (j && (h = Math[e(m ? 1482 : 1828)](S, c)), S === (j ? h : !0) ? (C = !0, R = b, d = x[e(610)] + "/" + b, A += "=") : (C = !1, F += "="));
        var M = "'" + F + "'";
        r += " if ( ", g && (r += " (" + h + " !== undefined && typeof " + h + e(2229)), r += " " + l + " " + A + " " + h + " || " + l + e(1899) + l + ") { ";
      }
    }
    R = R || t;
    var N = N || [];
    N.push(r), r = "", x[e(1397)] !== !1 ? (r += " { keyword: '" + (R || "_limit") + "' , dataPath: (dataPath || '') + " + x[e(1929)] + " , schemaPath: " + x[e(986)][e(562)](d) + e(1068) + M + e(913) + h + e(1337) + C + " } ", x[e(342)].messages !== !1 && (r += e(1602) + F + " ", g ? r += e(1889) + h : r += "" + h + "'"), x[e(342)].verbose && (r += e(687), g ? r += e(2743) + u : r += "" + c, r += "         , parentSchema: validate.schema" + x[e(553)] + e(386) + l + " "), r += e(1712)) : r += e(589);
    var z = r;
    return r = N[e(1454)](), !x[e(917)] && f ? x[e(682)] ? r += e(826) + z + e(1796) : r += e(879) + z + e(558) : r += " var err = " + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += e(1712), f && (r += e(398)), r;
  }), gt;
}
var yt, Rr;
function Cr() {
  return Rr || (Rr = 1, yt = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x[e(1004)][t], u = x[e(553)] + x.util[e(1485)](t), d = x[e(610)] + "/" + t, f = !x[e(342)][e(1095)], b, l = "data" + (o || ""), g = x[e(342)][e(375)] && c && c[e(375)], h;
    if (g ? (r += e(1835) + s + e(1951) + x[e(986)][e(583)](c[e(375)], o, x.dataPathArr) + "; ", h = e(1004) + s) : h = c, !(g || typeof c == e(536))) throw new Error(t + e(2067));
    var m = t == e(1608) ? ">" : "<";
    r += e(2084), g && (r += " (" + h + e(2496) + h + e(2229)), r += " " + l + e(496) + m + " " + h + e(2270);
    var b = t, S = S || [];
    S[e(2037)](r), r = "", x[e(1397)] !== !1 ? (r += e(546) + (b || e(870)) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(1883) + x[e(986)][e(562)](d) + " , params: { limit: " + h + " } ", x[e(342)][e(1376)] !== !1 && (r += e(280), t == "maxItems" ? r += "more" : r += "fewer", r += e(2063), g ? r += e(1889) + h + " + '" : r += "" + c, r += e(333)), x[e(342)][e(2221)] && (r += e(687), g ? r += e(2743) + u : r += "" + c, r += e(2488) + x.schemaPath + " , data: " + l + " "), r += e(1712)) : r += e(589);
    var P = r;
    return r = S[e(1454)](), !x.compositeRule && f ? x[e(682)] ? r += e(826) + P + e(1796) : r += e(879) + P + e(558) : r += e(1171) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", f && (r += e(398)), r;
  }), yt;
}
var vt, Fr;
function Nr() {
  return Fr || (Fr = 1, vt = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x[e(1004)][t], u = x[e(553)] + x[e(986)].getProperty(t), d = x.errSchemaPath + "/" + t, f = !x.opts[e(1095)], b, l = e(2584) + (o || ""), g = x.opts[e(375)] && c && c[e(375)], h;
    if (g ? (r += e(1835) + s + e(1951) + x[e(986)][e(583)](c.$data, o, x[e(2338)]) + "; ", h = e(1004) + s) : h = c, !(g || typeof c == "number")) throw new Error(t + " must be number");
    var m = t == "maxLength" ? ">" : "<";
    r += e(2084), g && (r += " (" + h + e(2496) + h + e(2229)), x[e(342)].unicode === !1 ? r += " " + l + e(496) : r += e(2446) + l + ") ", r += " " + m + " " + h + e(2270);
    var b = t, S = S || [];
    S.push(r), r = "", x.createErrors !== !1 ? (r += e(546) + (b || e(1541)) + e(2813) + x[e(1929)] + e(1883) + x[e(986)][e(562)](d) + " , params: { limit: " + h + e(1712), x.opts.messages !== !1 && (r += e(1934), t == e(1203) ? r += e(2151) : r += "shorter", r += e(2063), g ? r += e(1889) + h + e(1330) : r += "" + c, r += " characters' "), x[e(342)].verbose && (r += e(687), g ? r += "validate.schema" + u : r += "" + c, r += e(2488) + x[e(553)] + e(386) + l + " "), r += " } ") : r += e(589);
    var P = r;
    return r = S.pop(), !x[e(917)] && f ? x[e(682)] ? r += " throw new ValidationError([" + P + e(1796) : r += " validate.errors = [" + P + e(558) : r += e(1171) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", f && (r += e(398)), r;
  }), vt;
}
var bt, qr;
function Ar() {
  return qr || (qr = 1, bt = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x.schema[t], u = x[e(553)] + x[e(986)][e(1485)](t), d = x[e(610)] + "/" + t, f = !x.opts[e(1095)], b, l = e(2584) + (o || ""), g = x.opts.$data && c && c[e(375)], h;
    if (g ? (r += e(1835) + s + e(1951) + x.util[e(583)](c[e(375)], o, x[e(2338)]) + "; ", h = e(1004) + s) : h = c, !(g || typeof c == e(536))) throw new Error(t + e(2067));
    var m = t == e(584) ? ">" : "<";
    r += e(2084), g && (r += " (" + h + e(2496) + h + " != 'number') || "), r += " Object.keys(" + l + ").length " + m + " " + h + e(2270);
    var b = t, S = S || [];
    S.push(r), r = "", x[e(1397)] !== !1 ? (r += " { keyword: '" + (b || e(2702)) + e(2813) + x.errorPath + " , schemaPath: " + x[e(986)].toQuotedString(d) + e(591) + h + e(1712), x[e(342)][e(1376)] !== !1 && (r += " , message: 'should NOT have ", t == e(584) ? r += e(2278) : r += e(947), r += e(2063), g ? r += e(1889) + h + e(1330) : r += "" + c, r += " properties' "), x.opts[e(2221)] && (r += " , schema:  ", g ? r += e(2743) + u : r += "" + c, r += e(2488) + x.schemaPath + e(386) + l + " "), r += e(1712)) : r += e(589);
    var P = r;
    return r = S[e(1454)](), !x[e(917)] && f ? x[e(682)] ? r += " throw new ValidationError([" + P + "]); " : r += e(879) + P + e(558) : r += " var err = " + P + e(1303), r += "} ", f && (r += e(398)), r;
  }), bt;
}
var wt, Tr;
function sc() {
  return Tr || (Tr = 1, wt = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x.dataLevel, c = x[e(1004)][t], u = x[e(553)] + x[e(986)][e(1485)](t), d = x.errSchemaPath + "/" + t, f = !x.opts[e(1095)], l = e(2584) + (o || ""), g = x.opts[e(375)] && c && c[e(375)], h;
    if (g ? (r += " var schema" + s + e(1951) + x[e(986)][e(583)](c[e(375)], o, x[e(2338)]) + "; ", h = "schema" + s) : h = c, !(g || typeof c == e(536))) throw new Error(t + e(2067));
    r += e(1851) + s + e(526), g && (r += " " + h + e(2772) + h + " != 'number' || "), r += e(1797) + s + e(1951) + l + e(1940) + h + ", ", x.opts.multipleOfPrecision ? r += e(570) + s + ") - division" + s + e(590) + x[e(342)][e(1623)] + " " : r += e(1105) + s + e(1212) + s + ") ", r += " ) ", g && (r += e(452)), r += e(2068);
    var m = m || [];
    m[e(2037)](r), r = "", x[e(1397)] !== !1 ? (r += " { keyword: 'multipleOf" + e(2813) + x[e(1929)] + e(1883) + x[e(986)][e(562)](d) + e(810) + h + " } ", x[e(342)][e(1376)] !== !1 && (r += " , message: 'should be multiple of ", g ? r += e(1889) + h : r += "" + h + "'"), x[e(342)][e(2221)] && (r += " , schema:  ", g ? r += "validate.schema" + u : r += "" + c, r += e(2488) + x[e(553)] + e(386) + l + " "), r += e(1712)) : r += e(589);
    var b = r;
    return r = m[e(1454)](), !x[e(917)] && f ? x.async ? r += e(826) + b + e(1796) : r += e(879) + b + "]; return false; " : r += " var err = " + b + e(1303), r += "} ", f && (r += e(398)), r;
  }), wt;
}
var St, Or;
function ic() {
  return Or || (Or = 1, St = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x[e(1004)][t], u = x[e(553)] + x.util[e(1485)](t), d = x.errSchemaPath + "/" + t, f = !x[e(342)].allErrors, l = e(2584) + (o || ""), g = e(2706) + s, h = x[e(986)].copy(x);
    h[e(2554)]++;
    var m = e(238) + h[e(2554)];
    if (x[e(342)].strictKeywords ? typeof c == "object" && Object[e(2459)](c)[e(1028)] > 0 || c === !1 : x.util[e(1238)](c, x[e(1946)][e(972)])) {
      h[e(1004)] = c, h[e(553)] = u, h[e(610)] = d, r += " var " + g + " = errors;  ";
      var b = x[e(917)];
      x[e(917)] = h.compositeRule = !0, h[e(1397)] = !1;
      var S;
      h[e(342)][e(1095)] && (S = h[e(342)].allErrors, h[e(342)].allErrors = !1), r += " " + x.validate(h) + " ", h[e(1397)] = !0, S && (h[e(342)].allErrors = S), x.compositeRule = h[e(917)] = b, r += e(2321) + m + e(463);
      var P = P || [];
      P[e(2037)](r), r = "", x.createErrors !== !1 ? (r += " { keyword: '" + e(1474) + e(2813) + x[e(1929)] + e(1883) + x.util[e(562)](d) + e(2145), x[e(342)][e(1376)] !== !1 && (r += e(2766)), x[e(342)].verbose && (r += e(979) + u + e(2201) + x.schemaPath + " , data: " + l + " "), r += " } ") : r += " {} ";
      var q = r;
      r = P[e(1454)](), !x[e(917)] && f ? x[e(682)] ? r += e(826) + q + e(1796) : r += e(879) + q + e(558) : r += " var err = " + q + e(1303), r += " } else {  errors = " + g + e(2716) + g + e(2132) + g + "; else vErrors = null; } ", x.opts[e(1095)] && (r += e(1712));
    } else r += "  var err =   ", x[e(1397)] !== !1 ? (r += e(546) + e(1474) + "' , dataPath: (dataPath || '') + " + x[e(1929)] + " , schemaPath: " + x[e(986)][e(562)](d) + e(2145), x[e(342)][e(1376)] !== !1 && (r += e(2766)), x[e(342)].verbose && (r += " , schema: validate.schema" + u + e(2201) + x[e(553)] + e(386) + l + " "), r += " } ") : r += e(589), r += e(1303), f && (r += " if (false) { ");
    return r;
  }), St;
}
var kt, Dr;
function oc() {
  return Dr || (Dr = 1, kt = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x.schema[t], u = x[e(553)] + x[e(986)].getProperty(t), d = x[e(610)] + "/" + t, f = !x[e(342)][e(1095)], l = e(2584) + (o || ""), g = "valid" + s, h = e(2706) + s, m = x[e(986)].copy(x), b = "";
    m[e(2554)]++;
    var S = e(238) + m[e(2554)], P = m.baseId, q = "prevValid" + s, A = "passingSchemas" + s;
    r += "var " + h + e(1427) + q + e(897) + g + e(897) + A + e(2511);
    var R = x.compositeRule;
    x.compositeRule = m[e(917)] = !0;
    var I = c;
    if (I)
      for (var C, O = -1, j = I.length - 1; O < j; )
        C = I[O += 1], (x[e(342)][e(1610)] ? typeof C == "object" && Object[e(2459)](C)[e(1028)] > 0 || C === !1 : x[e(986)][e(1238)](C, x.RULES[e(972)])) ? (m[e(1004)] = C, m[e(553)] = u + "[" + O + "]", m[e(610)] = d + "/" + O, r += "  " + x[e(1981)](m) + " ", m.baseId = P) : r += e(2078) + S + e(1545), O && (r += e(2321) + S + e(1461) + q + e(2270) + g + e(2420) + A + e(2214) + A + ", " + O + "]; } else { ", b += "}"), r += e(2321) + S + e(2270) + g + e(1951) + q + " = true; " + A + e(1951) + O + "; }";
    return x[e(917)] = m[e(917)] = R, r += "" + b + e(799) + g + e(2413), x[e(1397)] !== !1 ? (r += e(546) + e(2209) + e(2813) + x.errorPath + " , schemaPath: " + x[e(986)].toQuotedString(d) + e(852) + A + e(1712), x[e(342)][e(1376)] !== !1 && (r += " , message: 'should match exactly one schema in oneOf' "), x.opts[e(2221)] && (r += e(979) + u + e(2201) + x.schemaPath + e(386) + l + " "), r += e(1712)) : r += " {} ", r += e(1303), !x.compositeRule && f && (x[e(682)] ? r += e(247) : r += e(2715)), r += e(1092) + h + e(2716) + h + ") vErrors.length = " + h + "; else vErrors = null; }", x[e(342)][e(1095)] && (r += e(1712)), r;
  }), kt;
}
var Pt, jr;
function cc() {
  return jr || (jr = 1, Pt = function(x, t, n) {
    const e = W;
    var r = " ", s = x.level, o = x[e(2575)], c = x[e(1004)][t], u = x[e(553)] + x.util[e(1485)](t), d = x[e(610)] + "/" + t, f = !x[e(342)][e(1095)], l = e(2584) + (o || ""), g = x[e(342)][e(375)] && c && c.$data, h;
    g ? (r += e(1835) + s + e(1951) + x[e(986)][e(583)](c[e(375)], o, x[e(2338)]) + "; ", h = e(1004) + s) : h = c;
    var m = g ? "(new RegExp(" + h + "))" : x.usePattern(c);
    r += e(2084), g && (r += " (" + h + e(2496) + h + e(2408)), r += " !" + m + ".test(" + l + ") ) {   ";
    var b = b || [];
    b[e(2037)](r), r = "", x[e(1397)] !== !1 ? (r += e(546) + e(1958) + e(2813) + x[e(1929)] + " , schemaPath: " + x.util[e(562)](d) + e(1448), g ? r += "" + h : r += "" + x[e(986)].toQuotedString(c), r += e(2730), x[e(342)].messages !== !1 && (r += e(2754), g ? r += e(1889) + h + e(1330) : r += "" + x[e(986)][e(1517)](c), r += e(1881)), x.opts[e(2221)] && (r += " , schema:  ", g ? r += "validate.schema" + u : r += "" + x[e(986)][e(562)](c), r += e(2488) + x[e(553)] + e(386) + l + " "), r += " } ") : r += e(589);
    var S = r;
    return r = b[e(1454)](), !x[e(917)] && f ? x[e(682)] ? r += e(826) + S + "]); " : r += e(879) + S + e(558) : r += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", f && (r += " else { "), r;
  }), Pt;
}
var It, Lr;
function uc() {
  return Lr || (Lr = 1, It = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x[e(1004)][t], u = x[e(553)] + x[e(986)][e(1485)](t), d = x.errSchemaPath + "/" + t, f = !x.opts[e(1095)], l = e(2584) + (o || ""), g = "errs__" + s, h = x.util[e(1217)](x), m = "";
    h[e(2554)]++;
    var b = e(238) + h[e(2554)], S = e(507) + s, P = "idx" + s, q = h[e(2575)] = x[e(2575)] + 1, A = "data" + q, R = e(1778) + s, I = Object[e(2459)](c || {})[e(1001)](f0), C = x[e(1004)][e(2551)] || {}, O = Object[e(2459)](C)[e(1001)](f0), j = x[e(1004)][e(1054)], M = I[e(1028)] || O[e(1028)], F = j === !1, N = typeof j == e(513) && Object.keys(j)[e(1028)], z = x[e(342)][e(1815)], U = F || N || z, V = x[e(342)][e(320)], G = x[e(2764)], o0 = x[e(1004)][e(1370)];
    if (o0 && !(x[e(342)][e(375)] && o0[e(375)]) && o0[e(1028)] < x[e(342)][e(2274)]) var u0 = x[e(986)].toHash(o0);
    function f0(Lx) {
      return Lx !== e(1855);
    }
    if (r += e(974) + g + e(2528) + b + e(2758), V && (r += e(2078) + R + " = undefined;"), U) {
      if (V ? r += " " + R + e(1951) + R + " || Object.keys(" + l + e(757) + P + e(1307) + P + "<" + R + e(927) + P + e(2217) + S + e(1951) + R + "[" + P + "]; " : r += e(592) + S + e(245) + l + e(2270), M) {
        if (r += e(1575) + s + e(1983), I.length)
          if (I[e(1028)] > 8) r += e(734) + u + ".hasOwnProperty(" + S + ") ";
          else {
            var i0 = I;
            if (i0)
              for (var l0, k0 = -1, v0 = i0[e(1028)] - 1; k0 < v0; )
                l0 = i0[k0 += 1], r += " || " + S + e(440) + x.util[e(562)](l0) + " ";
          }
        if (O.length) {
          var L0 = O;
          if (L0)
            for (var N0, J0 = -1, D = L0[e(1028)] - 1; J0 < D; )
              N0 = L0[J0 += 1], r += e(2395) + x.usePattern(N0) + e(501) + S + ") ";
        }
        r += " ); if (isAdditional" + s + e(2270);
      }
      if (z == e(972)) r += e(2381) + l + "[" + S + e(537);
      else {
        var T = x[e(1929)], L = e(1889) + S + " + '";
        if (x[e(342)]._errorDataPathProperty && (x.errorPath = x.util.getPathExpr(x[e(1929)], S, x[e(342)][e(2568)])), F)
          if (z) r += " delete " + l + "[" + S + e(537);
          else {
            r += " " + b + " = false; ";
            var J = d;
            d = x[e(610)] + e(1755);
            var X = X || [];
            X.push(r), r = "", x[e(1397)] !== !1 ? (r += " { keyword: '" + e(1054) + "' , dataPath: (dataPath || '') + " + x[e(1929)] + e(1883) + x.util.toQuotedString(d) + e(246) + L + e(596), x[e(342)][e(1376)] !== !1 && (r += e(1630), x[e(342)]._errorDataPathProperty ? r += e(785) : r += e(329), r += "' "), x[e(342)][e(2221)] && (r += e(2106) + x[e(553)] + " , data: " + l + " "), r += e(1712)) : r += " {} ";
            var Z = r;
            r = X[e(1454)](), !x.compositeRule && f ? x[e(682)] ? r += e(826) + Z + e(1796) : r += e(879) + Z + "]; return false; " : r += e(1171) + Z + e(1303), d = J, f && (r += " break; ");
          }
        else if (N)
          if (z == "failing") {
            r += " var " + g + e(2399);
            var Y = x[e(917)];
            x[e(917)] = h[e(917)] = !0, h[e(1004)] = j, h[e(553)] = x[e(553)] + e(1811), h[e(610)] = x[e(610)] + e(1755), h[e(1929)] = x[e(342)][e(2322)] ? x[e(1929)] : x[e(986)][e(2658)](x[e(1929)], S, x.opts[e(2568)]);
            var c0 = l + "[" + S + "]";
            h[e(2338)][q] = S;
            var n0 = x.validate(h);
            h[e(2764)] = G, x[e(986)].varOccurences(n0, A) < 2 ? r += " " + x.util[e(984)](n0, A, c0) + " " : r += e(2078) + A + e(1951) + c0 + "; " + n0 + " ", r += " if (!" + b + e(2009) + g + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + l + "[" + S + "]; }  ", x[e(917)] = h[e(917)] = Y;
          } else {
            h[e(1004)] = j, h[e(553)] = x[e(553)] + e(1811), h[e(610)] = x[e(610)] + "/additionalProperties", h[e(1929)] = x[e(342)][e(2322)] ? x[e(1929)] : x.util.getPathExpr(x[e(1929)], S, x[e(342)][e(2568)]);
            var c0 = l + "[" + S + "]";
            h.dataPathArr[q] = S;
            var n0 = x.validate(h);
            h[e(2764)] = G, x.util[e(1140)](n0, A) < 2 ? r += " " + x[e(986)].varReplace(n0, A, c0) + " " : r += e(2078) + A + e(1951) + c0 + "; " + n0 + " ", f && (r += e(370) + b + e(351));
          }
        x[e(1929)] = T;
      }
      M && (r += e(1712)), r += " }  ", f && (r += e(2321) + b + e(2270), m += "}");
    }
    var a0 = x.opts.useDefaults && !x[e(917)];
    if (I[e(1028)]) {
      var M0 = I;
      if (M0)
        for (var l0, T0 = -1, U0 = M0.length - 1; T0 < U0; ) {
          l0 = M0[T0 += 1];
          var S0 = c[l0];
          if (x[e(342)][e(1610)] ? typeof S0 == "object" && Object.keys(S0)[e(1028)] > 0 || S0 === !1 : x.util.schemaHasRules(S0, x[e(1946)].all)) {
            var G0 = x.util[e(1485)](l0), c0 = l + G0, se = a0 && S0[e(574)] !== void 0;
            h[e(1004)] = S0, h[e(553)] = u + G0, h[e(610)] = d + "/" + x[e(986)].escapeFragment(l0), h.errorPath = x[e(986)][e(915)](x[e(1929)], l0, x.opts[e(2568)]), h[e(2338)][q] = x[e(986)][e(562)](l0);
            var n0 = x[e(1981)](h);
            if (h.baseId = G, x[e(986)][e(1140)](n0, A) < 2) {
              n0 = x.util[e(984)](n0, A, c0);
              var Q0 = c0;
            } else {
              var Q0 = A;
              r += " var " + A + e(1951) + c0 + "; ";
            }
            if (se) r += " " + n0 + " ";
            else {
              if (u0 && u0[l0]) {
                r += " if ( " + Q0 + " === undefined ", V && (r += " || ! Object.prototype.hasOwnProperty.call(" + l + e(2344) + x.util.escapeQuotes(l0) + "') "), r += e(2270) + b + " = false; ";
                var T = x.errorPath, J = d, O0 = x.util[e(1517)](l0);
                x.opts._errorDataPathProperty && (x[e(1929)] = x[e(986)][e(915)](T, l0, x.opts.jsonPointers)), d = x[e(610)] + e(2377);
                var X = X || [];
                X.push(r), r = "", x[e(1397)] !== !1 ? (r += e(546) + e(1370) + e(2813) + x[e(1929)] + " , schemaPath: " + x[e(986)][e(562)](d) + e(1813) + O0 + e(596), x[e(342)].messages !== !1 && (r += e(1630), x.opts[e(2322)] ? r += e(2626) : r += e(2039) + O0 + "\\'", r += "' "), x.opts[e(2221)] && (r += e(979) + u + e(2201) + x[e(553)] + " , data: " + l + " "), r += e(1712)) : r += e(589);
                var Z = r;
                r = X[e(1454)](), !x[e(917)] && f ? x[e(682)] ? r += e(826) + Z + e(1796) : r += e(879) + Z + e(558) : r += " var err = " + Z + e(1303), d = J, x[e(1929)] = T, r += e(671);
              } else f ? (r += e(2005) + Q0 + e(2127), V && (r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + x[e(986)][e(1517)](l0) + "') "), r += ") { " + b + e(815)) : (r += e(2321) + Q0 + e(554), V && (r += e(1731) + l + e(2344) + x.util[e(1517)](l0) + "') "), r += e(832));
              r += " " + n0 + e(1712);
            }
          }
          f && (r += e(2321) + b + e(2270), m += "}");
        }
    }
    if (O[e(1028)]) {
      var V0 = O;
      if (V0)
        for (var N0, Y0 = -1, cx = V0[e(1028)] - 1; Y0 < cx; ) {
          N0 = V0[Y0 += 1];
          var S0 = C[N0];
          if (x[e(342)].strictKeywords ? typeof S0 == e(513) && Object.keys(S0).length > 0 || S0 === !1 : x[e(986)].schemaHasRules(S0, x[e(1946)][e(972)])) {
            h.schema = S0, h[e(553)] = x.schemaPath + e(1168) + x[e(986)].getProperty(N0), h[e(610)] = x[e(610)] + e(2753) + x[e(986)].escapeFragment(N0), V ? r += " " + R + e(1951) + R + e(436) + l + e(757) + P + "=0; " + P + "<" + R + e(927) + P + e(2217) + S + " = " + R + "[" + P + "]; " : r += e(592) + S + " in " + l + e(2270), r += e(2321) + x.usePattern(N0) + e(501) + S + e(2472), h[e(1929)] = x[e(986)][e(2658)](x[e(1929)], S, x.opts.jsonPointers);
            var c0 = l + "[" + S + "]";
            h[e(2338)][q] = S;
            var n0 = x[e(1981)](h);
            h[e(2764)] = G, x[e(986)][e(1140)](n0, A) < 2 ? r += " " + x[e(986)][e(984)](n0, A, c0) + " " : r += e(2078) + A + e(1951) + c0 + "; " + n0 + " ", f && (r += e(370) + b + e(351)), r += " } ", f && (r += e(1046) + b + e(1545)), r += e(2814), f && (r += e(2321) + b + e(2270), m += "}");
          }
        }
    }
    return f && (r += " " + m + e(2321) + g + e(2316)), r;
  }), It;
}
var Et, Mr;
function dc() {
  return Mr || (Mr = 1, Et = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x.schema[t], u = x[e(553)] + x[e(986)].getProperty(t), d = x.errSchemaPath + "/" + t, f = !x[e(342)][e(1095)], l = e(2584) + (o || ""), g = e(2706) + s, h = x[e(986)][e(1217)](x), m = "";
    h.level++;
    var b = e(238) + h[e(2554)];
    if (r += e(974) + g + e(500), x[e(342)][e(1610)] ? typeof c == e(513) && Object.keys(c)[e(1028)] > 0 || c === !1 : x[e(986)][e(1238)](c, x[e(1946)][e(972)])) {
      h[e(1004)] = c, h[e(553)] = u, h.errSchemaPath = d;
      var S = "key" + s, P = e(729) + s, q = "i" + s, A = e(1889) + S + e(1330), R = h[e(2575)] = x[e(2575)] + 1, I = e(2584) + R, C = e(1778) + s, O = x[e(342)][e(320)], j = x[e(2764)];
      O && (r += e(2078) + C + e(2636)), O ? r += " " + C + " = " + C + e(436) + l + e(757) + P + e(1307) + P + "<" + C + ".length; " + P + e(2217) + S + e(1951) + C + "[" + P + "]; " : r += e(592) + S + e(245) + l + e(2270), r += e(355) + s + e(2224);
      var M = S, F = x[e(917)];
      x[e(917)] = h.compositeRule = !0;
      var N = x.validate(h);
      h[e(2764)] = j, x.util.varOccurences(N, I) < 2 ? r += " " + x.util[e(984)](N, I, M) + " " : r += e(2078) + I + e(1951) + M + "; " + N + " ", x[e(917)] = h[e(917)] = F, r += " if (!" + b + e(2456) + q + e(497) + s + "; " + q + e(925) + q + "++) { vErrors[" + q + "].propertyName = " + S + e(2286), x[e(1397)] !== !1 ? (r += " { keyword: '" + e(2014) + "' , dataPath: (dataPath || '') + " + x[e(1929)] + e(1883) + x[e(986)][e(562)](d) + " , params: { propertyName: '" + A + e(596), x[e(342)][e(1376)] !== !1 && (r += e(2639) + A + e(1403)), x.opts.verbose && (r += " , schema: validate.schema" + u + e(2201) + x[e(553)] + " , data: " + l + " "), r += e(1712)) : r += e(589), r += e(1303), !x[e(917)] && f && (x.async ? r += " throw new ValidationError(vErrors); " : r += e(2715)), f && (r += " break; "), r += " } }";
    }
    return f && (r += " " + m + e(2321) + g + e(2316)), r;
  }), Et;
}
var Rt, $r;
function fc() {
  return $r || ($r = 1, Rt = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x.schema[t], u = x[e(553)] + x[e(986)][e(1485)](t), d = x[e(610)] + "/" + t, f = !x.opts.allErrors, l = e(2584) + (o || ""), g = e(238) + s, h = x.opts[e(375)] && c && c.$data;
    h && (r += " var schema" + s + " = " + x[e(986)].getData(c[e(375)], o, x[e(2338)]) + "; ");
    var m = e(1004) + s;
    if (!h)
      if (c[e(1028)] < x[e(342)][e(2274)] && x.schema[e(1683)] && Object[e(2459)](x[e(1004)][e(1683)])[e(1028)]) {
        var R = [], b = c;
        if (b)
          for (var S, P = -1, q = b[e(1028)] - 1; P < q; ) {
            S = b[P += 1];
            var A = x[e(1004)].properties[S];
            !(A && (x[e(342)][e(1610)] ? typeof A == e(513) && Object[e(2459)](A)[e(1028)] > 0 || A === !1 : x[e(986)].schemaHasRules(A, x[e(1946)][e(972)]))) && (R[R[e(1028)]] = S);
          }
      } else var R = c;
    if (h || R[e(1028)]) {
      var I = x.errorPath, C = h || R[e(1028)] >= x[e(342)].loopRequired, O = x.opts[e(320)];
      if (f)
        if (r += " var missing" + s + "; ", C) {
          !h && (r += e(2078) + m + e(2177) + u + "; ");
          var j = "i" + s, M = e(1004) + s + "[" + j + "]", F = e(1889) + M + " + '";
          x.opts._errorDataPathProperty && (x[e(1929)] = x[e(986)][e(2658)](I, M, x[e(342)][e(2568)])), r += e(2078) + g + e(1545), h && (r += " if (schema" + s + e(2271) + g + e(1723) + s + e(412) + g + e(1631)), r += e(592) + j + e(935) + j + e(1042) + m + e(927) + j + e(1996) + g + e(1951) + l + "[" + m + "[" + j + e(1743), O && (r += e(1731) + l + ", " + m + "[" + j + "]) "), r += e(2397) + g + e(1837), h && (r += e(848)), r += "  if (!" + g + ") {   ";
          var N = N || [];
          N[e(2037)](r), r = "", x[e(1397)] !== !1 ? (r += e(546) + "required" + e(2813) + x[e(1929)] + e(1883) + x.util[e(562)](d) + e(1813) + F + "' } ", x.opts[e(1376)] !== !1 && (r += e(1630), x.opts[e(2322)] ? r += e(2626) : r += e(2039) + F + "\\'", r += "' "), x[e(342)][e(2221)] && (r += e(979) + u + e(2201) + x.schemaPath + e(386) + l + " "), r += " } ") : r += e(589);
          var z = r;
          r = N.pop(), !x[e(917)] && f ? x[e(682)] ? r += " throw new ValidationError([" + z + e(1796) : r += e(879) + z + e(558) : r += e(1171) + z + e(1303), r += e(671);
        } else {
          r += e(2005);
          var U = R;
          if (U)
            for (var V, j = -1, G = U[e(1028)] - 1; j < G; ) {
              V = U[j += 1], j && (r += " || ");
              var o0 = x[e(986)][e(1485)](V), u0 = l + o0;
              r += e(2548) + u0 + e(2127), O && (r += e(1893) + l + e(2344) + x[e(986)][e(1517)](V) + e(301)), r += e(2273) + s + e(1951) + x.util.toQuotedString(x[e(342)][e(2568)] ? V : o0) + e(1844);
            }
          r += e(652);
          var M = e(1750) + s, F = e(1889) + M + e(1330);
          x.opts[e(2322)] && (x.errorPath = x[e(342)][e(2568)] ? x[e(986)][e(2658)](I, M, !0) : I + e(1336) + M);
          var N = N || [];
          N.push(r), r = "", x[e(1397)] !== !1 ? (r += " { keyword: 'required" + e(2813) + x[e(1929)] + e(1883) + x.util[e(562)](d) + e(1813) + F + e(596), x[e(342)].messages !== !1 && (r += e(1630), x.opts._errorDataPathProperty ? r += e(2626) : r += e(2039) + F + "\\'", r += "' "), x[e(342)][e(2221)] && (r += e(979) + u + e(2201) + x.schemaPath + e(386) + l + " "), r += e(1712)) : r += " {} ";
          var z = r;
          r = N[e(1454)](), !x[e(917)] && f ? x[e(682)] ? r += e(826) + z + e(1796) : r += e(879) + z + e(558) : r += e(1171) + z + e(1303), r += " } else { ";
        }
      else if (C) {
        !h && (r += e(2078) + m + e(2177) + u + "; ");
        var j = "i" + s, M = e(1004) + s + "[" + j + "]", F = e(1889) + M + e(1330);
        x[e(342)][e(2322)] && (x[e(1929)] = x[e(986)].getPathExpr(I, M, x[e(342)][e(2568)])), h && (r += e(2321) + m + e(2692) + m + ")) {  var err =   ", x[e(1397)] !== !1 ? (r += e(546) + e(1370) + e(2813) + x.errorPath + e(1883) + x.util[e(562)](d) + e(1813) + F + e(596), x[e(342)][e(1376)] !== !1 && (r += e(1630), x[e(342)][e(2322)] ? r += e(2626) : r += e(2039) + F + "\\'", r += "' "), x[e(342)][e(2221)] && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x[e(553)] + e(386) + l + " "), r += e(1712)) : r += e(589), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + m + e(996)), r += e(592) + j + e(935) + j + e(1042) + m + e(927) + j + e(1190) + l + "[" + m + "[" + j + e(1270), O && (r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", " + m + "[" + j + e(773)), r += e(1859), x.createErrors !== !1 ? (r += e(546) + e(1370) + e(2813) + x[e(1929)] + " , schemaPath: " + x[e(986)][e(562)](d) + e(1813) + F + e(596), x[e(342)].messages !== !1 && (r += " , message: '", x[e(342)][e(2322)] ? r += e(2626) : r += e(2039) + F + "\\'", r += "' "), x[e(342)][e(2221)] && (r += e(979) + u + e(2201) + x[e(553)] + " , data: " + l + " "), r += e(1712)) : r += e(589), r += e(2048), h && (r += e(848));
      } else {
        var f0 = R;
        if (f0)
          for (var V, i0 = -1, l0 = f0.length - 1; i0 < l0; ) {
            V = f0[i0 += 1];
            var o0 = x[e(986)][e(1485)](V), F = x.util[e(1517)](V), u0 = l + o0;
            x.opts[e(2322)] && (x.errorPath = x[e(986)].getPath(I, V, x.opts[e(2568)])), r += " if ( " + u0 + e(2127), O && (r += e(1893) + l + ", '" + x[e(986)].escapeQuotes(V) + e(301)), r += e(1859), x[e(1397)] !== !1 ? (r += " { keyword: '" + e(1370) + e(2813) + x[e(1929)] + " , schemaPath: " + x[e(986)][e(562)](d) + e(1813) + F + "' } ", x[e(342)][e(1376)] !== !1 && (r += e(1630), x[e(342)]._errorDataPathProperty ? r += e(2626) : r += "should have required property \\'" + F + "\\'", r += "' "), x.opts.verbose && (r += e(979) + u + e(2201) + x[e(553)] + e(386) + l + " "), r += e(1712)) : r += e(589), r += e(2508);
          }
      }
      x[e(1929)] = I;
    } else f && (r += e(1649));
    return r;
  }), Rt;
}
var Ct, zr;
function lc() {
  return zr || (zr = 1, Ct = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x[e(2575)], c = x[e(1004)][t], u = x[e(553)] + x[e(986)].getProperty(t), d = x[e(610)] + "/" + t, f = !x[e(342)].allErrors, l = e(2584) + (o || ""), g = e(238) + s, h = x[e(342)].$data && c && c[e(375)], m;
    if (h ? (r += e(1835) + s + e(1951) + x[e(986)][e(583)](c[e(375)], o, x[e(2338)]) + "; ", m = e(1004) + s) : m = c, (c || h) && x[e(342)][e(1367)] !== !1) {
      h && (r += e(2078) + g + e(2239) + m + e(2582) + m + e(2271) + g + " = true; else if (typeof " + m + e(363) + g + e(837)), r += e(2425) + l + ".length , " + g + e(735);
      var b = x[e(1004)][e(2159)] && x[e(1004)][e(2159)][e(2299)], S = Array.isArray(b);
      if (!b || b == e(513) || b == "array" || S && (b.indexOf("object") >= 0 || b[e(2775)]("array") >= 0)) r += e(1193) + l + "[i], " + l + "[j])) { " + g + e(1919);
      else {
        r += e(594) + l + "[i]; ";
        var P = e(1329) + (S ? "s" : "");
        r += e(2321) + x[e(986)][P](b, "item", x[e(342)].strictNumbers, !0) + ") continue; ", S && (r += e(717)), r += e(1777) + g + e(640);
      }
      r += e(1712), h && (r += "  }  "), r += e(370) + g + e(463);
      var q = q || [];
      q.push(r), r = "", x.createErrors !== !1 ? (r += " { keyword: '" + e(1367) + "' , dataPath: (dataPath || '') + " + x[e(1929)] + " , schemaPath: " + x.util[e(562)](d) + " , params: { i: i, j: j } ", x[e(342)][e(1376)] !== !1 && (r += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), x[e(342)][e(2221)] && (r += e(687), h ? r += e(2743) + u : r += "" + c, r += "         , parentSchema: validate.schema" + x[e(553)] + e(386) + l + " "), r += e(1712)) : r += e(589);
      var A = r;
      r = q[e(1454)](), !x[e(917)] && f ? x.async ? r += e(826) + A + e(1796) : r += e(879) + A + e(558) : r += e(1171) + A + e(1303), r += e(1712), f && (r += " else { ");
    } else f && (r += " if (true) { ");
    return r;
  }), Ct;
}
var Ft, Hr;
function hc() {
  return Hr || (Hr = 1, Ft = { $ref: G2(), allOf: J2(), anyOf: Q2(), $comment: X2(), const: Y2(), contains: ec(), dependencies: xc(), enum: tc(), format: ac(), if: rc(), items: nc(), maximum: Er(), minimum: Er(), maxItems: Cr(), minItems: Cr(), maxLength: Nr(), minLength: Nr(), maxProperties: Ar(), minProperties: Ar(), multipleOf: sc(), not: ic(), oneOf: oc(), pattern: cc(), properties: uc(), propertyNames: dc(), required: fc(), uniqueItems: lc(), validate: ls() }), Ft;
}
var Nt, Ur;
function pc() {
  const i = a;
  if (Ur) return Nt;
  Ur = 1;
  var x = hc(), t = _e()[i(916)];
  return Nt = function() {
    const e = i;
    var r = [{ type: e(536), rules: [{ maximum: [e(316)] }, { minimum: ["exclusiveMinimum"] }, e(1557), e(1477)] }, { type: e(654), rules: [e(1203), e(1272), "pattern", e(1477)] }, { type: "array", rules: [e(1608), "minItems", e(2159), e(643), e(1367)] }, { type: e(513), rules: [e(584), e(1581), e(1370), e(2192), e(2014), { properties: [e(1054), e(2551)] }] }, { rules: [e(1570), e(2205), "enum", "not", e(1124), e(2209), "allOf", "if"] }], s = ["type", e(274)], o = [e(2035), e(533), "id", e(375), "$async", "title", e(1647), e(574), "definitions", e(314), e(2750), "writeOnly", e(334), e(2608), e(954), e(1463), e(968)], c = ["number", e(999), e(654), "array", e(513), e(781), e(2672)];
    return r.all = t(s), r[e(2152)] = t(c), r[e(442)](function(u) {
      const d = e;
      u[d(345)] = u[d(345)][d(2348)](function(f) {
        const l = d;
        var g;
        if (typeof f == "object") {
          var h = Object.keys(f)[0];
          g = f[h], f = h, g[l(442)](function(b) {
            const S = l;
            s[S(2037)](b), r[S(972)][b] = !0;
          });
        }
        s[l(2037)](f);
        var m = r.all[f] = { keyword: f, code: x[f], implements: g };
        return m;
      }), r[d(972)].$comment = { keyword: d(274), code: x.$comment }, u[d(2299)] && (r[d(2152)][u[d(2299)]] = u);
    }), r.keywords = t(s[e(2133)](o)), r[e(1446)] = {}, r;
  }, Nt;
}
var qt, Vr;
function mc() {
  const i = a;
  if (Vr) return qt;
  Vr = 1;
  var x = [i(1557), i(1984), "exclusiveMaximum", i(319), i(1159), "maxLength", i(1272), i(1958), i(954), i(1608), i(1814), "uniqueItems", "maxProperties", "minProperties", "required", i(1054), i(2050), i(1477), i(2205)];
  return qt = function(t, n) {
    const e = i;
    for (var r = 0; r < n.length; r++) {
      t = JSON.parse(JSON[e(956)](t));
      var s = n[r][e(2742)]("/"), o = t, c;
      for (c = 1; c < s.length; c++) o = o[s[c]];
      for (c = 0; c < x[e(1028)]; c++) {
        var u = x[c], d = o[u];
        d && (o[u] = { anyOf: [d, { $ref: e(2579) }] });
      }
    }
    return t;
  }, qt;
}
var At, Zr;
function gc() {
  if (Zr) return At;
  Zr = 1;
  var i = ua().MissingRef;
  At = x;
  function x(t, n, e) {
    const r = W;
    var s = this;
    if (typeof this[r(2074)].loadSchema != r(2189)) throw new Error("options.loadSchema should be a function");
    typeof n == r(2189) && (e = n, n = void 0);
    var o = c(t)[r(1463)](function() {
      const d = r;
      var f = s[d(1392)](t, void 0, n);
      return f[d(1981)] || u(f);
    });
    return e && o[r(1463)](function(d) {
      e(null, d);
    }, e), o;
    function c(d) {
      const f = r;
      var l = d[f(2035)];
      return l && !s[f(1317)](l) ? x[f(1138)](s, { $ref: l }, !0) : Promise[f(2272)]();
    }
    function u(d) {
      try {
        return s._compile(d);
      } catch (l) {
        if (l instanceof i) return f(l);
        throw l;
      }
      function f(l) {
        const g = W;
        var h = l[g(458)];
        if (S(h)) throw new Error(g(2166) + h + g(1273) + l[g(2796)] + g(1953));
        var m = s[g(1972)][h];
        return !m && (m = s[g(1972)][h] = s[g(2074)][g(1554)](h), m[g(1463)](b, b)), m.then(function(P) {
          const q = g;
          if (!S(h)) return c(P)[q(1463)](function() {
            const A = q;
            S(h) || s[A(842)](P, h, void 0, n);
          });
        })[g(1463)](function() {
          return u(d);
        });
        function b() {
          delete s._loadingSchemas[h];
        }
        function S(P) {
          return s._refs[P] || s._schemas[P];
        }
      }
    }
  }
  return At;
}
var Tt, _r;
function yc() {
  return _r || (_r = 1, Tt = function(x, t, n) {
    const e = W;
    var r = " ", s = x[e(2554)], o = x.dataLevel, c = x.schema[t], u = x.schemaPath + x[e(986)][e(1485)](t), d = x[e(610)] + "/" + t, f = !x.opts.allErrors, l, g = e(2584) + (o || ""), h = e(238) + s, m = e(2706) + s, b = x.opts[e(375)] && c && c[e(375)], S;
    b ? (r += e(1835) + s + e(1951) + x[e(986)][e(583)](c[e(375)], o, x[e(2338)]) + "; ", S = e(1004) + s) : S = c;
    var P = this, q = "definition" + s, A = P[e(2093)], R = "", I, C, O, j, M;
    if (b && A[e(375)]) {
      M = "keywordValidate" + s;
      var F = A[e(618)];
      r += e(2078) + q + e(839) + t + "'].definition; var " + M + e(1951) + q + e(997);
    } else {
      if (j = x[e(2153)](P, c, x[e(1004)], x), !j) return;
      S = "validate.schema" + u, M = j.code, I = A[e(514)], C = A[e(1926)], O = A[e(1791)];
    }
    var N = M + e(262), z = "i" + s, U = e(2710) + s, V = A.async;
    if (V && !x[e(682)]) throw new Error(e(265));
    if (!(C || O) && (r += "" + N + e(2105)), r += "var " + m + e(2528) + h + ";", b && A[e(375)] && (R += "}", r += e(2321) + S + e(1349) + h + " = true; } else { ", F && (R += "}", r += " " + h + e(1951) + q + ".validateSchema(" + S + e(822) + h + e(2270))), C) A[e(2033)] ? r += " " + j[e(1981)] + " " : r += " " + h + e(1951) + j[e(1981)] + "; ";
    else if (O) {
      var G = x.util.copy(x), R = "";
      G[e(2554)]++;
      var o0 = e(238) + G.level;
      G[e(1004)] = j[e(1981)], G[e(553)] = "";
      var u0 = x[e(917)];
      x.compositeRule = G[e(917)] = !0;
      var f0 = x.validate(G)[e(2735)](/validate\.schema/g, M);
      x[e(917)] = G[e(917)] = u0, r += " " + f0;
    } else {
      var i0 = i0 || [];
      i0[e(2037)](r), r = "", r += "  " + M + e(1029), x[e(342)][e(485)] ? r += "this" : r += "self", I || A[e(1004)] === !1 ? r += e(1507) + g + " " : r += e(1507) + S + e(1507) + g + e(1601) + x.schemaPath + " ", r += e(2053), x[e(1929)] != '""' && (r += e(1336) + x.errorPath);
      var l0 = o ? e(2584) + (o - 1 || "") : e(733), k0 = o ? x[e(2338)][o] : e(2580);
      r += e(1507) + l0 + e(1507) + k0 + " , rootData )  ";
      var v0 = r;
      r = i0[e(1454)](), A.errors === !1 ? (r += " " + h + e(1951), V && (r += e(1005)), r += "" + v0 + "; ") : V ? (N = e(2734) + s, r += e(2078) + N + e(1666) + h + e(1339) + v0 + "; } catch (e) { " + h + e(827) + N + e(1328)) : r += " " + N + e(2511) + h + e(1951) + v0 + "; ";
    }
    if (A[e(2792)] && (r += " if (" + l0 + ") " + g + e(1951) + l0 + "[" + k0 + "];"), r += "" + R, A[e(238)]) f && (r += e(1918));
    else {
      r += e(2005), A.valid === void 0 ? (r += " !", O ? r += "" + o0 : r += "" + h) : r += " " + !A[e(238)] + " ", r += ") { ", l = P[e(2169)];
      var i0 = i0 || [];
      i0[e(2037)](r), r = "";
      var i0 = i0 || [];
      i0[e(2037)](r), r = "", x[e(1397)] !== !1 ? (r += e(546) + (l || e(1446)) + e(2813) + x[e(1929)] + e(1883) + x[e(986)][e(562)](d) + e(1768) + P.keyword + e(596), x[e(342)][e(1376)] !== !1 && (r += ` , message: 'should pass "` + P.keyword + e(1518)), x[e(342)][e(2221)] && (r += " , schema: validate.schema" + u + e(2201) + x[e(553)] + e(386) + g + " "), r += e(1712)) : r += " {} ";
      var L0 = r;
      r = i0.pop(), !x[e(917)] && f ? x.async ? r += e(826) + L0 + "]); " : r += " validate.errors = [" + L0 + e(558) : r += e(1171) + L0 + e(1303);
      var N0 = r;
      r = i0[e(1454)](), C ? A.errors ? A[e(836)] != "full" && (r += e(2565) + z + "=" + m + "; " + z + e(925) + z + "++) { var " + U + " = vErrors[" + z + e(2499) + U + ".dataPath === undefined) " + U + e(2504) + x[e(1929)] + e(2239) + U + e(1257) + U + '.schemaPath = "' + d + e(2438), x[e(342)][e(2221)] && (r += " " + U + e(2402) + S + "; " + U + e(588) + g + "; "), r += e(1712)) : A[e(836)] === !1 ? r += " " + N0 + " " : (r += " if (" + m + " == errors) { " + N0 + e(2197) + z + "=" + m + "; " + z + e(925) + z + e(2217) + U + e(1779) + z + e(2499) + U + ".dataPath === undefined) " + U + e(2504) + x[e(1929)] + e(2239) + U + e(1257) + U + e(1634) + d + e(2438), x[e(342)].verbose && (r += " " + U + e(2402) + S + "; " + U + e(588) + g + "; "), r += e(2367)) : O ? (r += e(1422), x.createErrors !== !1 ? (r += e(546) + (l || e(1446)) + "' , dataPath: (dataPath || '') + " + x[e(1929)] + e(1883) + x.util[e(562)](d) + e(1768) + P[e(2169)] + e(596), x[e(342)][e(1376)] !== !1 && (r += e(1993) + P[e(2169)] + e(1518)), x[e(342)][e(2221)] && (r += e(979) + u + e(2201) + x[e(553)] + e(386) + g + " "), r += e(1712)) : r += " {} ", r += e(1303), !x[e(917)] && f && (x[e(682)] ? r += e(247) : r += e(2715))) : A[e(836)] === !1 ? r += " " + N0 + " " : (r += " if (Array.isArray(" + N + e(2676) + N + e(2623) + N + e(1006) + z + "=" + m + "; " + z + e(925) + z + e(2217) + U + " = vErrors[" + z + e(2499) + U + ".dataPath === undefined) " + U + ".dataPath = (dataPath || '') + " + x[e(1929)] + e(1247) + U + '.schemaPath = "' + d + '";  ', x[e(342)].verbose && (r += " " + U + e(2402) + S + "; " + U + e(588) + g + "; "), r += e(2006) + N0 + e(1712)), r += " } ", f && (r += e(398));
    }
    return r;
  }), Tt;
}
const vc = a(1285), bc = a(1285), wc = a(2266), Sc = { schemaArray: { type: a(743), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: a(999), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: a(905) }, { default: 0 }] }, simpleTypes: { enum: [a(743), a(781), "integer", a(2672), a(536), a(513), a(654)] }, stringArray: { type: "array", items: { type: a(654) }, uniqueItems: !0, default: [] } }, kc = ["object", a(781)], Pc = { $id: { type: a(654), format: a(1218) }, $schema: { type: a(654), format: "uri" }, $ref: { type: a(654), format: a(1218) }, $comment: { type: a(654) }, title: { type: a(654) }, description: { type: "string" }, default: !0, readOnly: { type: a(781), default: !1 }, examples: { type: a(743), items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: a(536) }, exclusiveMaximum: { type: a(536) }, minimum: { type: a(536) }, exclusiveMinimum: { type: a(536) }, maxLength: { $ref: a(905) }, minLength: { $ref: a(1017) }, pattern: { type: a(654), format: a(1759) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: a(675) }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: a(1017) }, uniqueItems: { type: a(781), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: a(1017) }, required: { $ref: a(1818) }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: a(1759) }, default: {} }, dependencies: { type: a(513), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: a(1818) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: a(743), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: a(2643) }, { type: a(743), items: { $ref: a(2643) }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: a(654) }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: a(675) }, not: { $ref: "#" } }, hs = { $schema: vc, $id: bc, title: wc, definitions: Sc, type: kc, properties: Pc, default: !0 };
var Ot, Br;
function Ic() {
  const i = a;
  if (Br) return Ot;
  Br = 1;
  var x = hs;
  return Ot = { $id: i(422), definitions: { simpleTypes: x[i(2288)][i(2276)] }, type: i(513), dependencies: { schema: [i(1981)], $data: [i(1981)], statements: [i(1926)], valid: { not: { required: ["macro"] } } }, properties: { type: x[i(1683)][i(2299)], schema: { type: i(781) }, statements: { type: i(781) }, dependencies: { type: i(743), items: { type: i(654) } }, metaSchema: { type: i(513) }, modifying: { type: "boolean" }, valid: { type: i(781) }, $data: { type: "boolean" }, async: { type: i(781) }, errors: { anyOf: [{ type: i(781) }, { const: i(2090) }] } } }, Ot;
}
function qx() {
  const i = ["Auto run after canvas change", "getResourceBundle", " = null; ", "messagePoster", "Action {{0}} 未找到", "getClientVersion", "setProperty", " | ", "processCode", "async schema in sync schema", "#FF33CC", "getTransportToNode", "floor", " console.log(", "aec", "isRequest", "forward", "'/' + ", "inclusive", " = errors;var ", "Invalid proxy forwarding: current node ", "activeWorkflow", "No handler for streamRequestor: ", "Desire bounds is null", "same-document", "#3333FF", "sendLoggingMessage", "defaultVariables", "errorHandlers", "workflowManager", "applyPostProcessor", "Import as Smart Object", "NOT_SCHEME", "metaSchema", "Invalid enum value. Expected ", "getSuffix", "addMiddleware", "Unsupported upload type: {{type}}", "greater than or equal to ", " ( ( ", "runningRequests", "inlineRefs", "patternProperties", "UNRESERVED", "dataVar", "level", "_timeoutInfo", "outgoingRequestInterceptors", "__proxy_forward", "start", "i18nFormat", " === ", "finished", "#CC9933", "isTransportReady", "Empty selection mask", "  for (var ", "RelativeTimeFormat", "获取图片", "jsonPointers", " }   ", "无法从文件创建文档", "stream", "服务不可用 (503)", "ulid", "#33CC00", "dataLevel", "提示词", "removeItem", "Status check aborted", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "parentDataProperty", "ZodString", " === false || ", "markConnected", "data", "parent schema must have all required keywords: ", "rtl", "Uncaught error in notification handler: ", "schema is invalid: ", "select", " return errors === 0;       ", "mode", "setupGraphStoreSync", "sdppp/broadcast", "cleanup", "body", "assign", "reconnecting", " , message: 'boolean schema is false' ", "buildDirectedAdjacencyList", "ordinal", " , message: 'should match some schema in anyOf' ", "#9900CC", "callValidate", "clientInfo", "ZodReadonly", " === undefined || ", "secs", "contentEncoding", "获取表单数据失败", "#66CC33", " = errors; var ", "Result fetch aborted", "'[' + ", "插件可能正在拦截 PS 快捷键... ", "Cannot reboot because ComfyManager is missing", "obj", "结果获取已中止", "modules", "_cache", "设为当前图层", "#FF3333", "channel", "; else vErrors = vErrors.concat(", "discriminator", "Discriminator property ", "is a required property", "Base URL", "Not implemented (501)", "sampling", "flatten", "sdppp-heartbeat", "externalListenMessageCallback", "getFixedT", "strictDefaults", "ComfyUI加载中...", " = undefined; ", "_onclose", "notifications/initialized", " , message: 'property name \\'", "Mask resource is missing", "='; ", "origin", "#/definitions/simpleTypes", "hostVersion", "minSize", " to ", "Current Tasks:", "int", "localeCompare", "errorsText", "failedLoading", "milliseconds", "at least", "safeValue", "interpolationkey", "How to get APIKey", "\\%25|\\%(?!", "getPathExpr", "点击使用当前选区", "#CC0033", "选区遮罩为空", "Waiting in queue", "set", "Enter your Replicate API Key", "Use entire canvas", "normalize", "#FF6633", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "?\\:\\:", "process", "days", "null", "This node defaults to current layer + mask", "currentOnly", "authInfo", ")) { if (vErrors === null) vErrors = ", "resources/templates/list", "keySeparator", "api", "resolveRunImages", "Unrecognized key(s) in object: ", "_getOrReturnCtx", "property ", "listenMessageCallback", " is not a valid identifier", "protocol", "ajp", "mountedEndpoints", "nestingPrefix", "handleIncomingMessage", "removeNotificationHandler", " && !Array.isArray(", " = formats[", "isCIDR", "仅当前图层范围", "++) if (equal(", "dir", "request", "_addCheck", "properties ", "waitingReads", "_limitProperties", "self", "getCurrentNodeId", "finally", "errs__", "InvalidParams", "isBase64url", "Get mask from Canvas", "ruleErr", "#CCCC00", "openWorkflows", "auz", "issues", " validate.errors = vErrors; return false; ", "; if (vErrors !== null) { if (", " === null || ", "#FF0033", "无效边界: 左边必须小于右边，上边必须小于下边", "_fragments", "schema id must be string", "execution_start", "ActionSet {{0}} 未找到", "comfy side transport.onerror", "lte", "relatedRequestId", "当前没有可用图层", "validateKeyword", " , message: 'should be equal to one of the allowed values' ", "  } ", "listRoots", "extendRefs", " not found for current node ", "customErrors", "replace", "Loading...", `获取图像 &
限制图像范围`, "\\:\\:", "masks", "InvalidRequest", "prp", "split", "validate.schema", "shared", "symbol", "_compile", "load", "Maximum total timeout exceeded", "UUID is not valid.", "readOnly", "toJSON", "Outgoing notification interceptor failed: ", "/patternProperties/", ` , message: 'should match pattern "`, "exists", "res", "invalid_type", " = true;", "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "Please select the image to get", "extend", "#FF00FF", "abh", "baseId", "languageDetector", " , message: 'should NOT be valid' ", "resolvedOptions", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, "Cycle detected: ", "Generating...", "Set as Current Selection", " !== undefined && ( typeof ", "overloadTranslationOptionHandler", "Layer not found: {{0}}", "indexOf", " , params: { property: '", "Internal error", "addMessageEventListener", "refVal[", "以画布边界获取当前图层", "formatParams", "Options", "comfy", "setupStreamProtocolHandlers", "favorites", "cleanCode", " must be number or boolean", "#6633CC", "_formats", "duration", "warn", "modifying", " === false) ", "ids", "setOutgoingRequestInterceptor", "missingRef", "deprecate", "Invalid ", "zero", "posterIdentifier", "exclType", "isURL", "sdppp/abort", "Send to PS", "common", "convert widget {0} failed:", "hasEdge", "Local video", "没有活动文档", "coerced", "nonpositive", ") || ", "' , dataPath: (dataPath || '') + ", " }  ", "joinValues", "按选区裁剪", "alg", "stats", "there was no format function for ", "Images", "prompt_ids: ", "{0,4}", "dataType", "sendPromptListChanged", "valid", "Server does not support sampling (required for ", "OpenAI API 错误", "unicodeSupport", "合并组失败", "delete", " else {   ", " in ", " , params: { additionalProperty: '", " throw new ValidationError(vErrors); ", "validation failed", "1.0.0", "typeof ", " not found on node ", "workflows/", "Please select the mask to get", "setupNodeBindings", "selection", "生成失败", "ZodUndefined", "ayp", "passthrough", "Save all", "getNodes API failed - HTTP error! status: {{status}}", ".errors", "Output to:", "namespaces", "async keyword in sync schema", "Not connected", "getRegExp", "date", "使用当前图层", "safeParse", "manuallyExtractDefaults", " % 1)", "enabled", "$comment", "forwarded", "])) { ", "lngs", "画布变更后自动运行工作流", " = ''; ", " , message: 'should NOT have ", "regExpMap", "negative", "validateHandlerType", "post", "Guest login successful", "Invalid name: {{0}}", "resetRegExp", "skips", "遮罩应用后未得到资源", "objectValues", "Enum", "position", " ) ", "absolute", " = 'then'; ", "Invalid boundary: left must be less than right, top must be less than bottom", "sampling/createMessage", "omit", "maxRetries", "No edge defined from ", "') ", "click to restore", "SDPPP 2.0 no longer needs this node", " from id ", "DEBUG", "parent", "Layer {{layerName}}", "Server error (500)", "changeLanguage", "Error in direct request ", "addResource", '[\\"\\\\]', "Failed to open file as document: {{path}}", "examples", "unsetOutgoingNotificationInterceptor", "exclusiveMaximum", "openWorkflow: ", ' !== "object")', "minimum", "ownProperties", " in key: ", "Selection mask", "保存所有", "regExpQueue", " = '' + ", "[\\-\\.\\_\\~]", "Enter a quality percentage", "skipKeywords", "should NOT have additional properties", "afb", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "resetTimeoutOnProgress", " items' ", "contentMediaType", "resource", " character(s)", "粘贴你的模型名称", "Comfy.userId", "本地图片包", "getImage", "has", "opts", "Task cancel failed: {{error}}", "Shortcut selection feature requires login", "rules", "removeDotSegments", '$ref: keywords ignored in schema at path "', "assertEqual", "Intersection results could not be merged", "firebug", ") break; ", "No errors", "pipe", "thisServer", " var startErrs", "minute", "Run Photoshop Action", "errToObj", "exactUsedKey", "生成中...", "网关错误 (502)", " not in path ", " != 'boolean') ", "2025-03-26", "arrayKeywords", "getBestMatchFromCodes", "./sdppp_upload2", "getCapabilities", "#CC3300", " if (!", "missingKeyHandler", "刷新工作流列表", "setKey", "keySchema", "$data", "ssh", "languageChanging", "#3399CC", "version", "storage", "debugDisableHeartbeatResponse", "queue", "interrupt", "stateUpdate", "Uploading...", " , data: ", "Invalid action: {{action}}", "Unknown error ({{code}})", " = false;  ", "detail", "now", "toUpperCase", "mergeArray", "Upload failed: ", "getSuffixes", "validation", "isRoot", " else { ", " === true) ? ", "fallbackNS", "stopAll", "Invalid function return type", "mergeShapes", "新增槽位", "自动填入画布开启", "defaultError", "logging", "canvas", "getState", "Exclude selection", "exact", ")) ", "hasLoadedNamespace: i18next was not initialized", "1EpGPZv", "observers", "hours", "Use current layer", "elicitation", "domainHost", "true", "invalid_date", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", "Cannot forward to node ", "Failed to pick file. Please try again.", "email", "languageChanged", "roots/list", "pendingCount", ".type", "actions", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "notifications/cancelled", "#0099FF", "mins", "ZodArray", " || Object.keys(", " : ", "removeRequestHandler", "cache", " == ", "sdppp_workflow_alias", "forEach", "source", "saveMissing", "onTimeout", "color", "outputs API 调用失败 - {{reason}}", "ZodNullable", "mountTo", "emoji", "abortAllRequests", "  )  ", " if (schema", "defaultValue", "fcName", "sqr", '"failed to compile', "missingSchema", "closeWorkflow", "__DEFAULT__", "2024-10-07", "ComfyUI loading...", ") {   ", "backend", "Unknown", "setWidgetValue", "Store not found for ", "time", "应用ID:", "prev", "暂无图片", "pick", "$t(", "get", "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF", "context", "false", "workflow-run", " , params: { ref: '", "translate", ".async; ", "async schema referenced by sync schema", "cuid2", "nan", "passContext", "color: inherit", "ignore", "Show Preview ({{count}} images)", "不支持的图像输入类型", "ASCII", ") : ", "cloneInstance", ") {", "Failed to check workflow state changes:", "快捷键选图功能仅登陆后可用", ".length ", "=startErrs", "handle", "getUsedParamsDetails", " = errors;", ".test(", "Service unavailable (503)", "currency", "meta-schema not available", "getPluralFormsOfKey", "Execute", "key", "sdpppX2", "Clear all", "uxp", "_getId", "Waiting for image upload...", "object", "compile", "connect", "maxTokens", "bbz", "getRegisteredActions", "' && !(typeof ", "{0,3}", "strict", "hasOutgoingNotificationInterceptor", "Jump to last", "size", "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", ";if (", "{2})", "actionHandlers", "_parseAsync", "coerceToTypes", "Generate", "Image quality (%)", "$id", "float", "No workflow selected", "number", "]; ", "cuid", "Get mask from Current Layer", " = equal(", "checkDataTypes", "no plural rule found for: ", "Node definition not found for ", "; } ", "[BroadcastManager] Error forwarding ", " { keyword: '", "Cloud:", "exclIsNumber", "executeHandlerAsync", "缺少遮罩资源", "test", "Plugin window focused required to use keyboard shortcut", "schemaPath", " !== undefined ", "_requestHandlers", "uploadImage API 调用失败 - {{reason}}", "getPrototypeOf", "]; return false; ", " == 'number' || ", "broadcastReceived", "当前图层范围", "toQuotedString", "jpr", "MissingRef", "Drag images here and release to upload", "reference", "从文件打开图像", "Values", "#99CC33", " Math.abs(Math.round(division", "ComfyUI服务器重连中", "{0,1}", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", "default", "选择 AI 服务提供商", "从磁盘上传", "arrayToEnum", "parseAsync", "Unsupported image input type", "边界预览", "NOT_QUERY", "Auto send disabled", "getData", "maxProperties", "done", "Number must be finite", "2.0", ".data = ", " {} ", ") > 1e-", " , params: { limit: ", " for (var ", "#0033CC", " var itemIndices = {}, item; for (;i--;) { var item = ", "app", "' } ", "findPathInternal", "未找到图层 {0}", "2468464uFLVAs", "{6}", "New Layer", "AUTO", "Received a progress notification for an unknown token: ", "useColors", "Auto Sync: off", "ctx", "Gateway timeout (504)", "Task incomplete, current status: {{status}}", "query", "errSchemaPath", "loaded namespace ", "optional", "over", "errs_", "Server does not support notifying of prompt list changes (required for ", "initAsync", "Show sent images", "validateSchema", "Upload aborted", "ltr", "default is ignored in the schema root", " is already defined", "整个画布", "Boundary", "hasAction", "round", " } else {  errors = ", "wait", "valueType", "usedKey", "elicitation/create", "assertNotificationCapability", "'[\\'' + ", "Task cancelled", " return data; ", "以主图边界获取画布", "transport", "isValidLookup", "getDefaultValuesFromSchema", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "清除视频", "smaller than", "contains", "readonly", "edges", "Connect", "find", "addResources", "自定义AI工作流引擎", "count", "assistant", ") {  ", "Notification interceptor failed for ", "string", "_oninitialize", "[GraphStoreSynchronizer] Error broadcasting state update for ", "loadGraphData", "registerHandler", "Create document for preview", "isULID", "Your powerful node-based workflow engine", "自动从PS重新获取", "addIssue", "[BroadcastManager] Error forwarding broadcast:", "padEnd", "unsetOutgoingRequestInterceptor", "You must pass an array of schemas to z.tuple([ ... ])", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "__origin", "maxDate", " } else { ", "pes", "ads", "Create document failed", "#/definitions/schemaArray", "#9900FF", "Reverse", "Bounds", "ZodEffects", "+Shift 调整更多选项；Ctrl 单次获取。", "renderer", "async", "jwt", "Array.isArray(", "[^]", "resolveImage", " , schema:  ", "syncWorkflows", "11166CxHtjY", "Source", "_processInputParams", "Upload failed, please try again", "catchall", "选择文件", "resolved promise for", "enable", "__esModule", "无法打开图像文件: {{error}}", 'Invalid input: must include "', "Batch Count", "Get image from Canvas", "translator", "当前图层除外", "IPV4ADDRESS", "message", "&gt;", "startTime", "addPostProcessor", "uploadImage API 调用失败 - HTTP 错误，状态: {{status}}", "postProcessor", "从 当前图层 获取图像", "objectKeys", "Layer {{0}} is not a group", "click", "run API failed - HTTP error! status: {{status}}", "需要提供图像和提示词", ` if (typeof item == 'string') item = '"' + item; `, "Received a response for an unknown message ID: ", "messageHandlers", "node_id", " -> ", "ckb", "NOT_USERINFO", "请登陆后使用插件", "waiters", "comfyAPI is not initialized, maybe comfyUI is too old", "AI 生成任务", "无法将文件作为文档打开: {{path}}", "idx", `Get image &
Limit image boundary`, "请输入您的 Google API Key", "Prompt", "parentData", " || validate.schema", " = true , j; if (i > 1) { ", "Invalid forward path for proxy action", "pathname", " } if (errors === ", 'did not save key "', "processors", "Current layer bounds", "file", "array", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "logging/setLevel", "&amp;", "Username: {{username}}", "Outpaint (positive crop)", "适配至画布", "&#39;", "保存当前", " != 'number') { ", "updateMissing", "#FF6600", "反向裁剪(Inpaint)", "#33CCFF", "); for (var ", "http://json-schema.org/draft-07/schema", "Request interceptor failed for ", " if (rootData === undefined) rootData = data; ", "cardinal", "next", "nodeProxies", "requestsHandled", "endsWith", "[A-Fa-f]", "mesh", "store", "getConnectionInfo", "Node ", "getConnectedNodeIds", "Refresh workflow list", "]) ", "services", "setItem", "6479080aTkOyZ", "index", "overflow", `" won't get resolved as namespace "`, "Login Successful", "boolean", "fallbackRequestHandler", "setupTransportHandlers", "Cloud-based model service platform", "is an invalid additional property", "Not a ZodError: ", "getProtocol", "checks", "setNodeTitle", "lastIndexOf", "从磁盘获取", "useDefault", "customRules", "invalid_literal", "formatArgs", "getDefinition", "PS图片", "_schemas", "if (!", "keyPrefix", "_setupTimeout", "_cached", "_onnotification", "_onprogress", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "lowerCaseLng", "contextSeparator", "interpolate", "Select Image Source", " , params: { multipleOf: ", "getNodes API failed - {{reason}}", "请输入您的Replicate API Key", "Leave empty for no limit", "Select a model", " = true; } else { ", "_capabilities", "clear", "interpolator", "pbu", "avl", "prompts/get", "); if (", ".pi-sign-out", "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "Choose File", " throw new ValidationError([", " = false; if (e instanceof ValidationError) ", "#FF0099", "getTransport", ` , message: 'should match "' + `, "node_errors", " ) { ", "dataPath", "ListFormat", " levels up, current level is ", "errors", " = false; else { ", "#33CCCC", " = RULES.custom['", "aeb", "ZodSet", "addSchema", "ZodBigInt", "; var ", '" (see option extendRefs)', "nodeTransports", "too_small", "  }  ", "translation", "输出区域", "([+-]\\d{2}:?\\d{2})", " , params: { passingSchemas: ", "Positive Crop", "nest", "任务执行失败", " && !(", "resolvedLanguage", "Input not instance of ", "protocolVersion", "Expected ", "parse", "选择素材来源", "更多操作", "通道连接中...", "reject", "yih", "readingCalls", "setupStreamRequestHandler", "Logout", "_limitItems", "from", "one", "never", " = false; for (var ", "outputType", "loadNamespaces", "mergeObjectSync", "高级选图", " validate.errors = [", "#CC9900", "isNotification", "isDatetime", '" ignored in schema at path "', "Model with affordable price, abundant community applications", "bind", "Action set {{0}} was not found", "onerror", "fallbackNotificationHandler", "+Alt 反转遮罩", "Scan", "exec_info", "ZodNaN", "languageOnly", "hasOwnProperty", "Internal ZodObject error: invalid unknownKeys value.", "getNodeStore", " = false , ", "schemaHasRulesExcept", "Gateway error (502)", "postProcess", "Validation failed but no issues detected.", "拖拽图片到此处松开完成上传", "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "InternalError", "#/definitions/nonNegativeInteger", "cidr", "No images yet", "saveMissingPlurals", "_clientVersion", "Save and run immediately", "2019597fvaZFO", "buildAdjacencyList", ", limit: ", "Inpaint (reverse crop)", "getPath", "toHash", "compositeRule", "OpenAI API error", "notifications/tools/list_changed", "preprocess", "./api/manager/reboot", "joinAs", "retryTimeout", " = 'else'; ", "<errors; ", "如何获取APIKey", ".length; ", "missed to pass in variable ", "Current Layer", "rootData", "2[0-4]", "useRawValueToEscape", " !== undefined)", "AbortError", " = 0; ", "setRequestHandler", "Smart Object Layer", ".validate; } if (  ", "Node definition not found for current node ", "keyType", "bigint", "typeName", "heartbeatInterval", "en-US", "pga", "fail", "fewer", "sdppp/streamRequest", "Generation failed", "catch", "画布范围", "invalid_union", "isDate", "additionalItems", "setOutgoingNotificationInterceptor", "stringify", "curlayer_selection", "assertCapabilityForMethod", "./sdppp-custom.js", "Processing {{processed}}/{{total}}", "capabilities", "emit", "ZodOptional", "获取图层信息", "WARNING DEPRECATED: ", "shift", "Full Canvas", "else", "Defaults using", "invalid_string", " for interpolating ", "all", "openWorkflow", "var ", "#3366CC", "仅选区范围", "trim", " === '' ", " , schema: validate.schema", "safeParseAsync", " === null || (", "All", "prototype", "varReplace", "请输入大于 0 的像素值", "util", "当前选项：文件", "Click to get RunningHub APIKey", "#CC33CC", " for language ", "default is ignored for: ", "hasDefaultValue", "useDefaults", "xaa", "simplifyPluralSuffix", " !== undefined) { ", ".validate;", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "integer", "rejecting language code not found in supportedLngs: ", "filter", "returnNull", "names", "schema", "await ", "); errors = vErrors.length;  for (var ", "iterator", "Selection", " else throw new ValidationError(vErrors); ", "请求超时 (408)", "#CC3366", "uploadImage API failed - HTTP error! status: {{status}}", "Failed to request initial states after connecting to ", "isFinite(", "documentElement", "Input Setting", "#/definitions/nonNegativeIntegerDefault0", "initialize", "ZodPipeline", "Crop", "[\\:]", "非法的名称: {{0}}", "Stop all", "graphInstance", "localRefs", "选择文件失败，请重试", " , params: { type: '", "length", ".call( ", "&subfolder=", "openWorkflowJSON", "toResolveHierarchy", "mergeObjectAsync", "prs", "getKeyword", "use", "notifications/resources/updated", "退出登录", "(.+?)", "registerDirectRequestHandlerGeneric", "detectCycles", " < ", "sec", "/else", "组 {{0}} 中没有第一个相关图层", " else ", "Rectangle coordinates required for create action", "Clear", "正在等待图片上传...", "Channel connecting...", "at most", "[\\+\\-\\.]", "__connection_established", "additionalProperties", "path", "reverse", "read", "reconnected", 'id "', " == 'function' ? ", ", received '", "_onrequest", "Failed to open image file: {{error}}", "ignoreJSONStructure", "_options", "saveWorkflow", "toStringTag", " , params: { comparison: ", "cancelled", "userAgent", "Select Source", "serialize", "cimode", "invalid_union_discriminator", "invalid_arguments", "refinement", "' : '", "setNotificationHandler", "_cachedPath", "{5}", " after ", "Enter a pixel value greater than 0", "正在创建任务...", "[GraphStoreSynchronizer] Error processing store update for ", "[^\\%\\/\\@]", "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "unsetRequestHandler", "unknown keyword: ", ".additionalItems", "sendResourceUpdated", " */", "} else {  errors = ", "海量模型，稳定服务", "lng", "allErrors", "extractFromKey", "Meta-schema for $data reference (JSON Schema extension proposal)", "unknownKeys", "当前选项：图层 {{layerName}}", "requestInitialStateForNode", "isInitializing", "addNamespaces", "(?:", "apply", " division", "Failed to send an error response: ", "Store not found for current node ", 'schema with key or id "', "#CC3399", "less than or equal to", "async ", "SDPPP可能未安装或和插件版本不匹配 (404)", "formErrors", "constructor", "未知错误", "exclusive", "resources/read", "Failed to request initial state for ", "superRefine", "Max size (px)", "Failed", "minDate", "__nwjs", "anyOf", "#00CCCC", "secure", "ComfyManager not found, cannot reboot", "#FF0066", "exactly equal to ", "点此获取RunningHub APIKey", "zh-CN", "上传失败，请重试", "2025-06-18", "overwrite", "value", "keywords", " via punycode: ", "call", "云端推荐：", "varOccurences", "getCanonicalLocales", "_serverInfo", "formData", "queuePrompt", "请选择要发送图像的位置", "silent", "_requestHandlerAbortControllers", " if (!(await ", "&filename=", "extensionManager", "subfolder", "streamRequest", "No linked layer for {{0}}", "Failed to send response: ", "No limit", "elicitInput", "0?[1-9]", "Local image pack", "exclusiveMinimum", "正向裁剪(Outpaint)", "tried", "val is not a non-empty string or a valid number. val=", "_key", "_responseHandlers", "fullFilename", "abv", "Current layer", ".patternProperties", "usedLng", "del", " var err = ", "设为选区", "run API 调用失败 - {{reason}}", "hbo", "safe", "formatters", "/properties", "outputs API 调用失败 - HTTP 错误，状态: {{status}}", "roots", "isInitialized", "ZodBranded", "###", "Get content of layer {{0}}", "appendNamespaceToCIMode", "unwrap", "off", "combo", "RunningHub - {{webappId}}", "getNodeTitle", "++) { if (", "nestingOptionsSeparator", "endTurn", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "NOT_HOST", "throwIfAborted", "Layer {0} not found", "_getType", "refVal", "任务取消失败: {{error}}", "send", "pluralCategories", " == 'string' && ", "maxLength", "millisecond", "heartbeatTimeoutTimer", "DateTimeFormat", "Running...", "OpenAI - Image Edit", "清空所有", "undefined", "Error validating elicitation response: ", " !== parseInt(division", "env", "Workflow not found", " = refVal[", "MissingRefError", "copy", "uri-reference", "MCP error ", "tolerant", "Running for {{duration}} secs, {{message}}", " } else if ( ", "peo", "当前图层", "under", '" already exists', "Get API Key", "isClone", "toNode", "partial", "expected", "#00CC99", "$async", "Remove video", "charCodeAt", "Host's domain name can not be converted to ", "valueOf", "schemaHasRules", "sdppp_widgetable_title", "以主图边界获取当前图层", "outgoingNotificationInterceptors", "isUUID", "Action ", "/type", "{1,4}", "exception_message", ";  ", " , params: { failingKeyword: ", "[0-9A-Fa-f]", "无效的边界类型: {{type}}", "greater than ", "graph", "McpError", "#3300CC", "isCUID2", "))))) {", ".schemaPath === undefined) { ", 'unknown format "', "resources/list", "状态检查已中止", "ZodNull", "mesh:workflow", "log", "Primary image resource is missing", "isArray", "notifications/progress", "请选择AI服务", "toLowerCase", "getRunningRequestsCount", "]] === undefined ", "Hold Shift for more options; Ctrl for single fetch", "minLength", " is loaded but ", "[^\\%]", "isBase64", "colors", " , message: 'should contain a valid item' ", "curlayer", "Current layer boundary", "defaultMeta", "ZodMap", "not-basic", "_refinement", "=== Options ===", "http://json-schema.org/draft-07/schema#", "[UnexpectedJSONParseError]: ", "Hold Shift key to import as new document", "initializeProducer", "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", "Workflow stopped by user", "uploadImage API failed - {{reason}}", "table", "\\$&", " == 'boolean' || ", "initializeNodeStores", "images", "Action {{0}} was not found", "Edge references unknown target node: ", "unescapeFragment", "nullable", "Current selection: Canvas", "#33CC66", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "未实现 (501)", "Retry", "originalError", "=0; ", "pending", "HeartbeatTimeoutError", "任务创建已中止", "store:update:", "Request handler failed: ", "getStats", "error", "actionManager", " ms", "getSchema", "ZodIntersection", "Stop auto run", "[0-9]", "IPV6ADDRESS", "#FF9933", "add", ".call(this, ", "match", "toFixed", "addUsedSchema", " = e.errors; else throw e; } ", "checkDataType", " + '", "PCT_ENCODED", "handleAsObject", " = false;for (var ", "#0000CC", "json", " + ", ", exclusive: ", "var pattern", " = await ", "交集或缩放目标为空", "sdppp_assets", "json-pointer", "选区除外", "ValidationError", "strictNumbers", "Comfy Manager未安装，无法重启", "signal", "label", " === undefined) { ", "_clientCapabilities", "SDPPP 2.0 不再需要此节点", "freeze", "输出至：", "argumentsError", "Fetch current layer with primary boundary", " = true; if (", "tDescription", "%[89A-Fa-f]", "enforceStrictCapabilities", "#00CC33", "transform", "second", ", validate.root.schema);", " } }  ", "completion/complete", " var vErrors = null; ", "uniqueItems", "Get selection failed", "response", "required", "hasRequestHandler", "nodeId", "uri", "removed", "点我恢复", "messages", `获取图像 &
裁剪选区遮罩`, "iri", "登录成功", "No image returned", "Client does not support sampling (required for ", "abs", "acx", "用户名: {{username}}", "warning", "Document {{0}} not found", "createInstance", "loadOne", "too_big", "partialBundledLanguages", "addCached", "_addSchema", "文件上传失败", "lastPongReceived", "ZodError", "创建参考线框架", "createErrors", "createMessage", " == 'object' && Array.isArray(", "utils", ") ? ", "Entire Canvas", "\\' is invalid' ", "cleanupConnection", "不裁剪", "发送所有", "react", "OpenAI - 图片编辑", "usedNS", "_resetTimeout", "promise", "Modify", '"object"', "_unknown", "heartbeatTimer", " - no connection available", "jsonStringifyReplacer", "Boundary preview", " === 'true' || ", "resourceName", "自动填入画布关闭", "   var err =   ", "Create document", "; else vErrors = null; } ", "Incoming message:", "自动同步: 开启", " = errors , ", "catchValue", "precheck", ".length == 1) { ", "schemaErrorMap", "getAccountStatus API 调用失败 - HTTP 错误，状态: {{status}}", "#6600CC", "Overflow: input needs wider integers to process", "notifications/resources/list_changed", "Set as Current Layer", "exactLength", "usedParams", " at one or more positions greater than or equal to ", "A discriminator value for key `", "assertRequestHandlerCapability", "isNaN", "returnEmptyString", "status", "sendToolListChanged", "custom", "上传已中止", " , params: { pattern:  ", "File not found: {{path}}", "[\\:\\@\\/\\?]", " ? '", "aborted", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "pop", "nullish", "ZodUnknown", "Running", "maxParallelReads", "#CC00CC", "图层 {{layerName}}", " && ", "sdppp/directRequest", "then", "prepend", "正在运行", "substring", "每批图像数", "getOwnPropertyNames", "schema id ignored", "No images", "pluralSeparator", "querySelector", "clone", "not", "Google Gemini 图像生成器", "notificationQueue", "format", "快捷键选图功能仅在插件窗口聚焦时可用", "%[EFef]", "widgets", "order", "min", "Creating task...", "以画布边界获取画布", "getProperty", "local", "选择边界", "errorDataPath", "\\.\\d{", "api/view?type=", ") && ", "_getInvalidInput", "requestIdSeq", "Please select AI service", "resource_link", "Model", "interpolation", "notificationHandlers", "destroy", "entries", "fallback", "positive", "Layer not found {{0}}", "getNodeIds", " element(s)", "meta", " , ", "withTimeout", "No first related layer in {{0}}", " !== undefined) ; ", "returnObjects", "Module", " , message: 'should be equal to constant' ", "isInt", "_errors", "asyncIterator", "escapeQuotes", `" keyword validation' `, "#33CC99", "newlayer_curlayer", "emergency", "Please login to use the plugin", "Advanced selection", "输入设置", "   ", "fallbackLng", "nestingRegexp", "RequestTimeout", " } if (", "7rBWNyg", "addEventListener", "Local file", ") {  for (var ", "pre", "[^\\%\\/\\:\\@]", "minValue", "App ID:", "pst", "ZodAny", "getNode", "_limitLength", "ZodVoid", "heartbeatTimeout", "audio", " = true; ", "ZodObject", "comfy-uxp", " var schemaExcl", "Please select the position to send image", "loaded", "Fetch canvas with canvas boundary", ".type || 'string'; if (", "[MCPMiddleware]", "loadSchema", "tools/call", "String must contain ", "multipleOf", "文件未找到: {{path}}", "shape", "aao", "get_layer_info: 需要 layer_identify", "root", "URI is not a ", "上传中，如果图片过大，可能会卡顿...", "ComfyUI server reconnecting", "headers", "Number must be ", "./api/userdata/workflows%2F.index.json", "removeSchema", "$ref", "isFinite", "sort", "registerDirectRequestHandler", "从 选区 获取遮罩", " var isAdditional", "Close", "invalid_intersection_types", "_progressHandlers", "and", "oninitialized", "minProperties", "absolutePath", "'else'", "cacheKey", "2024-11-05", " == '", "_onerror", "__cycle__", "+Alt crop by selection", "port", "regexp", "rootId", "该节点默认继承当前图层与遮罩", "Outgoing request interceptor failed: ", "base64", " = errors === errs_", "logger", "ZodEnum", "isOpen", "', missingProperty: '", " , validate.schema", " , message: 'should be ", "AI使用的区域与最大尺寸控制", "languageUtils", "nonExplicitSupportedLngs", "contextualErrorMap", "abort", "maxItems", "留空表示不限", "strictKeywords", "删除当前", "isEmpty", "Email address's domain name can not be converted to ", "syncStoresToNewConnection", "lastIndex", "Google Gemini Image Generator", "重启ComfyUI失败", "content", "returnDetails", '$ref: validation keywords used in schema at path "', "callback", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "multipleOfPrecision", "smartobject", "Invalid", "停止自动运行", "resources", "run", "Document {0} not found", " , message: '", " = false; else {", "nss", "prompts", '.schemaPath = "', "closeHandlers", "URI can not be parsed.", "unescapeSuffix", "ZodBoolean", "skipOnVariables", "nsSeparator", "Current Selection", "get_layer_info requires layer_identify", "当前选项：画布", "create", "curlayer_curlayer", "every", "description", "minutes", " if (true) {", "normalizeId", "正向裁剪", "values", "反向裁剪", "notifications/message", "inlineRef", "outputs API failed - {{reason}}", "Crop by selection", "interceptor_error", "charAt", " has duplicate value ", "pbt", " = customRules[", "parentElement", "Images Per Batch", "preload", " = null; try { ", "ars", "precision", "uiLocale", "Failed to fetch form data", "interceptorTimeout", "任务未完成，当前状态: {{status}}", "after app.queuePrompt errors: ", "base64url", "params", "_transport", "reloadResources", "action", "prompts/list", "服务器错误 (500)", "fragment", "postMessage", "properties", "innerType", "MethodNotFound", "[0]; ", "status API failed - HTTP error! status: {{status}}", "hasLoadedNamespace", "executeOutgoingNotificationInterceptor", "loadLanguages", "Sending all images...", "Task execution failed: {{error}}", "url", "missingInterpolationHandler", "implementAction", "yud", "Failed to reboot ComfyUI", "No active document", "#FFCC00", "#FF33FF", "运行失败 - 未获取到 nodeInfoList，请先执行 getNodes()。", "reset", "var missing", " == +", "ComfyUI - {{workflowName}}", "refs", "toString", "以当前图层边界获取画布", "hasResourceBundle", "schemaUnknownRules", "comfy-user", " } ", "适配至当前图层", "connecting", "toASCII", "getAllReachableNodes", "getNodes API 调用失败 - {{reason}}", "missingKey", "正在发送...", "获取选区失败", " , message: 'can\\'t resolve reference ", "resetStats", " = true; else if (!Array.isArray(schema", ".length == 0) {", "缺少主图资源", "_refs", "Save", "Error handling incoming message:", "void", "defineProperty", " &&   Object.prototype.hasOwnProperty.call(", "missingRefs", "return", " already exists, which would be overridden", "#CC00FF", "Validation", "MAX_SAFE_INTEGER", "keyword schema is invalid: ", "/%2F", "connectedNodes", "~standard", "sourceNodeId", "]] !== undefined ", "code", ".validate", "execution_error", "false schema", "root.refVal[0]", "MiddlewareError", "missing", "backendConnector", "debug", "此处粘贴 WebApp ID", "ZodLiteral", "/additionalProperties", "range", "#6633FF", "Clear guide frame", "regex", "keyof", "addFormat", "streamRequestorHandlers", "parsedType", " , message: 'should NOT have more than ", "ZodNumber", ".length <= ", "处理进度 {{processed}}/{{total}}", " , params: { keyword: '", "Invalid attempt to destructure non-iterable instance", "continueOnInterceptorError", "maxSize", "Uploader not set", "onclose", "/*# sourceURL=", "messageQueue", "humanize", " if (typeof itemIndices[item] == 'number') { ", "dataProperties", " = vErrors[", "Task execution failed", "质量{{percent}}%", "payload", '" as the namespace "', "Auto-run workflow after changes...", "邮箱: {{email}}", "unknown", "dirty", "Client does not support listing roots (required for ", "validateStreamRequestorRequest", "ZodSymbol", "macro", "setupStreamResponseHandler", "getDataByLanguage", "prefix", "fromNode", "]); ", " (division", "mountedTransports", " + '\\']'", "+\\.", "[^0-9]", "_def", "Fit to canvas", " == null) ", "currentNodeId", "checkState", "disconnect", "Stop", "ifClause", "flags", ".additionalProperties", "mcp-mesh-router", " , params: { missingProperty: '", "minItems", "removeAdditional", "正在发送图像...", "detect", "#/definitions/stringArray", "Auto Sync: on", "2.1.0", "isConnected", "executed", " = typeof ", "buffer", "join", "abortRequest", "append", "max", "未找到文档 {0}", "Open images from file", "isIP", 'no schema with key or ref "', "isEmail", "detection", " var schema", "kind", ") break; } ", "] = ", "schemas", "strip", "close", "创建操作需要矩形坐标", "Get image from Current Layer", ") ) ", "Canvas", " var async", "ZodDiscriminatedUnion", "找不到图层: {{0}}", "initializeResponseQueue", "filename", "var division", "{3}", "AI Generation Task", " && Object.prototype.hasOwnProperty.call(", "__proto__", "run API failed - {{reason}}", "brand", " , message: 'should have ", ") {  var err =   ", "按住 Shift 键以新文档方式导入", "execution_interrupted", "errorMap", "#CC33FF", "prepareLoading", "ajv", "_notificationHandlers", "Failed to fetch account status", "success", "step", "nodes", "unionErrors", "ZodNever", "JWT", "finite", "ZodPromise", "isObject", "comfyAPI", "exec", "Selection bounds only", "formatSeparator", `"' `, " = new RegExp(", " , schemaPath: ", "$$$$", "markDisconnected", ` + '" schema' `, "More actions", ", deps: '", "' + ", "style", "Unauthorized (401)", "tools/list", " || ! Object.prototype.hasOwnProperty.call(", "parseInt", ", received ", "changeTracker", "added", "getLanguagePartFromCode", " !== ", "requestInfo", "60plQsnY", "Confirm", "Notification handler failed for ", "#00CC00", " should be boolean' ", "nonstrict", "ref/resource", "notificationsHandled", "newlayer_selection", "relative", "_instructions", "Empty", "mailto", "initializeConsumer", "510", "Date must be ", "Download", " if (true) { ", " = false; break outer; } } } ", "sdppp 选中图层", "workflows", "#9933FF", "left", "result", "Error", "inline", "Select boundary", "_getCached", "errorPath", " var validate = ", "regexpUnescape", "resources/subscribe", "运行中...", " , message: 'should NOT be ", "not_finite", "forkResourceStore", "arq", "_compilations", "segment", " / ", "datetime", "ZodUnion", "+Alt 按选区裁剪", "调整预览文档尺寸", "ZodRecord", "RULES", "You are passing an undefined module! Please check the object you are passing to i18next.use()", "3rdParty", "exports", "reduce", " = ", " not implemented for node ", " cannot be resolved", "Enter your RunningHub API Key", ".else", "refine", "image", "pattern", "exactly", "[\\:\\/\\?\\#\\[\\]\\@]", "[object Function]", "offset", "isTime", "updateKey", "gte", "Content", "unshift", "Invalid function arguments", "schema should be object or boolean", "Invalid input", "移除槽位", "_loadingSchemas", "isTop", "请输入质量百分比", "fromCodePoint", " else if (", "defaults", "exclude", " , params: { format:  ", "ZodNativeEnum", "validate", "escape", " = !(false ", "maximum", "findPath", "自动同步: 关闭", "SDPPP may not be installed or version mismatch (404)", "getConnectionCount", "getRule", "text", "suffix", "获取结果失败: {{error}}", ` , message: 'should pass "`, "msecs", "addResourceBundle", "++) { ", "_error", "escapeValue", "_onresponse", "cacheInBuiltFormats", "File upload failed", "#9933CC", "https", "未配置上传器", " if ( ", " } } else { ", "fatal", "  errors = ", ") { errors = ", "sourceType", "#00CC66", "init", "ZodDate", "propertyNames", "范围 1-100", " && ( ", "userinfo", "#CC0000", "Disk", "_cleanupTimeout", "node", "Edge references unknown source node: ", "addLookupKeys", "optionsMap", " reference.", "isOptional", "Invalid literal value, expected ", "请选择要获取的遮罩", "uiWeight", "outputs API failed - HTTP error! status: {{status}}", "executeOutgoingRequestInterceptor", "state", "statements", ")) {  ", "$schema", "createGlobalDispatcherForType", "push", "&#x2F;", "should have required property \\'", "queues", "Array must contain ", "removeEventListener", "workflow", "widgetable", "not_multiple_of", "addIssues", "_regex", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "weeks", "enum", "Primary boundary", "getHandler", " , (dataPath || '')", "isCUID", "请输入您的RunningHub API Key", "queueLoad", ")' returned an object instead of string.", "创建文档", "RH Coins:", " + ']'", "seconds", "formatType", " than ", "Quality {{percent}}%", "作为新文档导入", "getTransportInternal", " must be number", " ) {   ", "_validateKeyword", "hasLanguageSomeTranslations", "使用教程", "save", "external", "_opts", "Failed to get result: {{error}}", "Create guide frame", "画布变动后自动运行", " var ", "relativetime", "reason", "1321389jxrNiZ", "broadcastManager", "alwaysFormat", "if ( ", "loadResources", "saveMissingTo", "startHeartbeat", "registerProxyForwardHandler", "Success", "full", "Google Gemini - Image Generation", "本地文件", "definition", "hasPath", "设为当前选区", "Negative Crop", "isNullable", "assertCanSetRequestHandler", "#CC6633", "capacity", "coerce", "wss", "parseMissingKeyHandler", "race", " = null;", " , schema: false , parentSchema: validate.schema", "languages", "创建文档失败", "init: no languageDetector is used and no lng is defined", "$dataMetaSchema", "disable", "Elicitation response content does not match requested schema: ", `Get image &
Crop selection mask`, "removeNamespaces", "45250227iuKvrm", "requestHandlers", "如何获取APIKey和API Secret", "listWorkflows", "critical", "Host's domain name can not be converted to ASCII via punycode: ", "prompt_id", "Server does not support logging (required for ", "Sending...", "token", "ParseError", "console", " === undefined ", "yhd", "Set as Canvas", "#0066FF", "comfy-entry", ") vErrors.length = ", "concat", "dev", "Mask apply returned empty resource", "implementInternalAction", "onprogress", "$el", " ) || ", "Remove slot", "execution_success", "清除参考线框架", "INTERCEPTOR_ERROR", "extendTranslation", " , params: {} ", "Node not found", "includes", "Failed to create document from file", "/additionalItems", "subject", "longer", "types", "useCustomRule", "transports", "禁止访问 (403)", "{2}", "Email: {{email}}", "Mask", "items", "任务已取消", "formatLanguageCode", "realTransport", "Current option: File", "Unable to reboot ComfyUI", "A request handler for ", "Schema ", "Request timed out", "coerceTypes", "keyword", "POST", "请选择要获取的图像", "_path", "[\\:\\@]", "获取像素失败: {{0}}", "[vV]", "sdppp", " = validate.schema", "uxpHost", "Auto repick from PS", "hasNotificationHandler", "本地视频", "men", "uploadComfyImageFromUXP", "uiWeightSum", "cycles", "获取图层 {{0}} 的内容", " try { await ", "unescapeComponent", "function", "extra", "Fetch current layer with canvas boundary", "dependencies", "supportedLngs", "allServers", " != 'boolean' && ", "NOT_PATH_NOSCHEME", " } else {  for (var ", "_any", "notificationsIntercepted", "logout", " , parentSchema: validate.schema", "Cannot register capabilities after connecting to transport", "connectionManager", "timeout", "const", "less than", "sdppp/streamResponse", "'then'", "oneOf", "nonnegative", "isPersisted", "registerStreamRequestorHandler", "Aborted", " = [", "getValidEnumValues", "RH币:", "++) { var ", "pickLocalFile", "formats", "toLoad", "verbose", "rejectImage", "Unicode", " = errors; ", "getFallbackCodes", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "生成中", ") == -1 ", " != 'number') || ", "removeMessageEventListener", "user", " == 'boolean') ", "图层遮罩", "merge", "Refresh", "选择模型", "createWithPreprocess", ".length > ", "; if (", "escapeFragment", "显示预览框 ({{count}}张图片)", "Import as New Document", "var default", "method", "Gemini 2.5 Flash 图像", "returnedObjectHandler", "rest", "setState", "sendStreamRequestorRequest", "Auto fetching…", "设为画布", " when property ", "defaultNS", "performWorkflowReset: ", "Current selection: Layer {{layerName}}", "handleIncomingRequest", "选区遮罩", "locale", "fromCharCode", "timestamp", "schema $id ignored", "maxValue", "_metaOpts", "#0066CC", "connected", "Core schema meta-schema", "Create document for sent images", "适配至选区", "broadcastHandlers", ") { ", " === undefined) ", "resolve", ") && (missing", "loopRequired", "); if (!", "simpleTypes", "acw", "more", "debouncedNotificationMethods", "创建图层失败", "resourceStore", "Uploading, if the image too large, may be lag...", "Invalid JSON-pointer: ", " = true;  ", "video", "; }   var err =   ", "setPrototypeOf", "definitions", "Timeout", "diff", "-arab", "removeMiddleware", "sessionId", 'Invalid input: must start with "', "当前没有活动图层", "_parse", "isInteger", "使用整个画布", "type", "Press Enter to open app: {{appName}}", "图层 {{0}} 不是一个组", "image/png", "scheme", "stack", "kPanelBrightnessMediumGray", "async format in sync schema", "~validate", "ConnectionClosed", "mesh:comfy", "Add slot", " === null) ", "accessing an object - but returnObjects options is not enabled!", "sdk", "Tutorial", "2220CCmPeR", " == errors) {", "执行成功", "ZodCatch", "Failed to send cancellation: ", "info", " if (", "_errorDataPathProperty", "Invalid graph definition: ", "hour", "put", "ZodDefault", "timeoutId", "urn", "BigInt must be ", "Get pixel of {{0}} failed", "received", "accept", "Failed to check workflow changeTracker state:", "Fetch current layer with current-layer boundary", "OpenAI/Google format API", "notification", "createStreamState", "dataPathArr", "nodeIndexes", "ping", "setLimit", "Current selection: Layer", "Current layer bounds only", ", '", "Note", "setInterval", "language", "map", "nestingSuffix", "valueSchema", "Error compiling schema, function code:", "assertNever", "3269624NYaXUX", "startsWith", "#3399FF", "getScriptPartFromCode", "nanoid", "ZodLazy", "namespace", "nid", "__internal_requestInitialState_", "Get layer info", "getDefaultValueFromField", "output", "[object RegExp]", "maxTotalTimeout", " } } ", " not found for node ", "nodeStores", "separator", " = false; else if (", "PluralRules", "initImmediate", "title", "_parseSync", "removeCatch", "/required", "setupAbortHandler", "disconnected", "isLanguageChangingTo", " delete ", "自动取图中…", "resolveComponents", "Get mask from Selection", " is present' ", '" resolves to more than one schema', "notifications/prompts/list_changed", "setComfyOrgAPIKey", "spa", "ZodFunction", "unrecognized_keys", "registerCapabilities", "options", "Resize document for preview", " || ", "fullPath", "; if (!", "Sending image...", " = errors;  ", "加载中...", "ZodTuple", ".schema = ", " var errs_", "setResolvedLanguage", "ucs2length", "splice", "isSupportedCode", " != 'string') || ", "name", "sdppp 运行 Photoshop Action", "[A-Za-z]", "Adjust input settings", ") {   var err =   ", "(typeof ", "schemaExcl", "选区边界", " ? ", "executing", "Google Gemini - 图片生成", " = false; ", "right", "fast", "NOT_FRAGMENT", "invalid-input", " var i = ", "ref/prompt", "pong", "sourceCode", "initialState", "unescapePrefix", "arb", "joinArrays", "removeDefault", "substr", "当前图层边界", " && !", " === 'false' || ", '"; } ', "getter", "新图层", "ary", "unsetNotificationHandler", ".then", "messageType", "host", " ucs2length(", "day", "activeState", "_pendingDebouncedNotifications", "addKeyword", "typ", "element", "主图边界", "getResource", ".errors); errors = vErrors.length; } ", ") { for (var ", "handleDirectProxyForward", "formatter", "keys", "slice", "getNodes API 调用失败 - HTTP 错误，状态: {{status}}", "{4}", "onmessage", "describe", "Run", "作为智能对象导入", "var refVal", "removeKeyword", "Unknown error", ", (dataPath || '')", "uuid", ")) { ", "def", "getNeighbors", "out", "reload", "auto", "createAsyncIterator", "unknownFormats", "Keyword ", "other", "strong", "ESCAPE", "Remote", "alwaysSet", "getTime", "Your Workflows", "         , parentSchema: validate.schema", "alert", "` could not be extracted from all schema options", "pluralResolver", "=== 选项 ===", "Input Image", "nonempty", "#FF3366", " !== undefined && typeof ", "排队等待", "Send all", "]; if (", "broadcast", " = true; break; }", "missingKeyNoValueFallbackToKey", "compiling", ".dataPath = (dataPath || '') + ", "hasLoadedNamespace: i18n.languages were undefined or empty", "invalid_enum_value", "CurLayer", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "];
  return qx = function() {
    return i;
  }, qx();
}
var Dt, Wr;
function Ec() {
  if (Wr) return Dt;
  Wr = 1;
  var i = /^[a-z_$][a-z0-9_$-]*$/i, x = yc(), t = Ic();
  Dt = { add: n, get: e, remove: r, validate: s };
  function n(o, c) {
    const u = W;
    var d = this[u(1946)];
    if (d.keywords[o]) throw new Error(u(2480) + o + u(622));
    if (!i[u(551)](o)) throw new Error(u(2480) + o + u(2685));
    if (c) {
      this[u(2728)](c, !0);
      var f = c[u(2299)];
      if (Array[u(1265)](f))
        for (var l = 0; l < f[u(1028)]; l++) h(o, f[l], c);
      else h(o, f, c);
      var g = c[u(2542)];
      g && (c.$data && this[u(2074)][u(375)] && (g = { anyOf: [g, { $ref: u(2579) }] }), c.validateSchema = this.compile(g, !0));
    }
    d[u(1136)][o] = d[u(972)][o] = !0;
    function h(m, b, S) {
      const P = u;
      for (var q, A = 0; A < d[P(1028)]; A++) {
        var R = d[A];
        if (R[P(2299)] == b) {
          q = R;
          break;
        }
      }
      !q && (q = { type: b, rules: [] }, d[P(2037)](q));
      var I = { keyword: m, definition: S, custom: !0, code: x, implements: S.implements };
      q[P(345)][P(2037)](I), d[P(1446)][m] = I;
    }
    return this;
  }
  function e(o) {
    const c = W;
    var u = this[c(1946)][c(1446)][o];
    return u ? u.definition : this[c(1946)][c(1136)][o] || !1;
  }
  function r(o) {
    const c = W;
    var u = this[c(1946)];
    delete u.keywords[o], delete u[c(972)][o], delete u[c(1446)][o];
    for (var d = 0; d < u.length; d++)
      for (var f = u[d].rules, l = 0; l < f[c(1028)]; l++)
        if (f[l].keyword == o) {
          f.splice(l, 1);
          break;
        }
    return this;
  }
  function s(o, c) {
    const u = W;
    s.errors = null;
    var d = this[u(2069)] = this[u(2069)] || this[u(514)](t, !0);
    if (d(o)) return !0;
    if (s.errors = d[u(836)], c) throw new Error("custom keyword definition is invalid: " + this[u(2650)](d[u(836)]));
    return !1;
  }
  return Dt;
}
const Rc = "http://json-schema.org/draft-07/schema#", Cc = a(2579), Fc = a(1097), Nc = a(513), qc = [a(375)], Ac = { $data: { type: a(654), anyOf: [{ format: "relative-json-pointer" }, { format: a(1342) }] } }, Tc = !1, Oc = { $schema: Rc, $id: Cc, description: Fc, type: Nc, required: qc, properties: Ac, additionalProperties: Tc };
var jt, Kr;
function Dc() {
  const i = a;
  if (Kr) return jt;
  Kr = 1;
  var x = B2(), t = ca(), n = W2(), e = ds(), r = fs(), s = K2(), o = pc(), c = mc(), u = _e();
  jt = m, m.prototype[i(1981)] = b, m[i(983)].compile = S, m[i(983)].addSchema = P, m[i(983)].addMetaSchema = q, m[i(983)].validateSchema = A, m.prototype[i(1317)] = I, m[i(983)][i(1569)] = j, m[i(983)][i(1761)] = u0, m[i(983)][i(2650)] = o0, m.prototype[i(1392)] = F, m.prototype[i(2746)] = N, m[i(983)].compileAsync = gc();
  var d = Ec();
  m[i(983)][i(2450)] = d[i(1323)], m[i(983)][i(1035)] = d[i(474)], m.prototype[i(2468)] = d.remove, m[i(983)][i(2728)] = d.validate;
  var f = ua();
  m[i(1344)] = f[i(1736)], m[i(1216)] = f[i(564)], m[i(2110)] = c;
  var l = i(758), g = [i(1815), i(993), i(2168), i(2634)], h = [i(1177)];
  function m(D) {
    const T = i;
    if (!(this instanceof m)) return new m(D);
    D = this._opts = u.copy(D) || {}, N0(this), this._schemas = {}, this._refs = {}, this[T(2720)] = {}, this[T(2789)] = s(D[T(1477)]), this[T(2619)] = D[T(439)] || new n(), this[T(1972)] = {}, this[T(1938)] = [], this[T(1946)] = o(), this[T(511)] = z(D), D[T(2274)] = D[T(2274)] || 1 / 0, D[T(1488)] == "property" && (D[T(2322)] = !0), D[T(1072)] === void 0 && (D.serialize = r), this[T(2263)] = L0(this), D[T(2219)] && l0(this), D[T(1136)] && k0(this), f0(this), typeof D[T(1506)] == T(513) && this.addMetaSchema(D[T(1506)]), D[T(1300)] && this[T(2450)](T(1300), { metaSchema: { type: T(781) } }), i0(this);
  }
  function b(D, T) {
    const L = i;
    var J;
    if (typeof D == L(654)) {
      if (J = this[L(1317)](D), !J) throw new Error(L(1832) + D + '"');
    } else {
      var X = this[L(1392)](D);
      J = X[L(1981)] || this[L(2746)](X);
    }
    var Z = J(T);
    return J[L(1233)] !== !0 && (this[L(836)] = J[L(836)]), Z;
  }
  function S(D, T) {
    const L = i;
    var J = this[L(1392)](D, void 0, T);
    return J[L(1981)] || this[L(2746)](J);
  }
  function P(D, T, L, J) {
    const X = i;
    if (Array[X(1265)](D)) {
      for (var Z = 0; Z < D[X(1028)]; Z++) this[X(842)](D[Z], void 0, L, J);
      return this;
    }
    var Y = this[X(511)](D);
    if (Y !== void 0 && typeof Y != "string") throw new Error(X(2721));
    return T = t.normalizeId(T || Y), v0(this, T), this[X(798)][T] = this._addSchema(D, L, J, !0), this;
  }
  function q(D, T, L) {
    return this[i(842)](D, T, L, !0), this;
  }
  function A(D, T) {
    const L = i;
    var J = D[L(2035)];
    if (J !== void 0 && typeof J != L(654)) throw new Error("$schema must be a string");
    if (J = J || this[L(2074)][L(1280)] || R(this), !J) return this.logger[L(2791)](L(504)), this[L(836)] = null, !0;
    var X = this.validate(J, D);
    if (!X && T) {
      var Z = L(2588) + this[L(2650)]();
      if (this[L(2074)].validateSchema == L(1263)) this[L(1597)].error(Z);
      else throw new Error(Z);
    }
    return X;
  }
  function R(D) {
    const T = i;
    var L = D[T(2074)].meta;
    return D[T(2074)][T(1280)] = typeof L == T(513) ? D._getId(L) || L : D[T(1317)](l) ? l : void 0, D[T(2074)][T(1280)];
  }
  function I(D) {
    const T = i;
    var L = O(this, D);
    switch (typeof L) {
      case T(513):
        return L[T(1981)] || this[T(2746)](L);
      case T(654):
        return this[T(1317)](L);
      case T(1210):
        return C(this, D);
    }
  }
  function C(D, T) {
    const L = i;
    var J = t[L(1004)][L(1138)](D, { schema: {} }, T);
    if (J) {
      var X = J[L(1004)], Z = J.root, Y = J[L(2764)], c0 = x[L(1138)](D, X, Z, void 0, Y);
      return D[L(2720)][T] = new e({ ref: T, fragment: !0, schema: X, root: Z, baseId: Y, validate: c0 }), c0;
    }
  }
  function O(D, T) {
    const L = i;
    return T = t.normalizeId(T), D._schemas[T] || D[L(1726)][T] || D[L(2720)][T];
  }
  function j(D) {
    const T = i;
    if (D instanceof RegExp) return M(this, this[T(798)], D), M(this, this[T(1726)], D), this;
    switch (typeof D) {
      case T(1210):
        return M(this, this[T(798)]), M(this, this[T(1726)]), this._cache[T(817)](), this;
      case "string":
        var L = O(this, D);
        return L && this[T(2619)].del(L[T(1584)]), delete this[T(798)][D], delete this._refs[D], this;
      case T(513):
        var J = this[T(2074)][T(1072)], X = J ? J(D) : D;
        this._cache[T(1170)](X);
        var Z = this[T(511)](D);
        Z && (Z = t[T(1650)](Z), delete this[T(798)][Z], delete this._refs[Z]);
    }
    return this;
  }
  function M(D, T, L) {
    const J = i;
    for (var X in T) {
      var Z = T[X];
      !Z[J(1506)] && (!L || L[J(551)](X)) && (D[J(2619)][J(1170)](Z[J(1584)]), delete T[X]);
    }
  }
  function F(D, T, L, J) {
    const X = i;
    if (typeof D != X(513) && typeof D != X(781)) throw new Error(X(1969));
    var Z = this._opts[X(1072)], Y = Z ? Z(D) : D, c0 = this._cache[X(474)](Y);
    if (c0) return c0;
    J = J || this._opts[X(1327)] !== !1;
    var n0 = t.normalizeId(this._getId(D));
    n0 && J && v0(this, n0);
    var a0 = this[X(2074)][X(618)] !== !1 && !T, M0;
    a0 && !(M0 = n0 && n0 == t[X(1650)](D[X(2035)])) && this.validateSchema(D, !0);
    var T0 = t[X(2794)].call(this, D), U0 = new e({ id: n0, schema: D, localRefs: T0, cacheKey: Y, meta: L });
    return n0[0] != "#" && J && (this[X(1726)][n0] = U0), this[X(2619)][X(2325)](Y, U0), a0 && M0 && this[X(618)](D, !0), U0;
  }
  function N(D, T) {
    const L = i;
    if (D[L(2503)])
      return D[L(1981)] = Z, Z.schema = D[L(1004)], Z.errors = null, Z[L(1562)] = T || Z, D[L(1004)][L(1233)] === !0 && (Z[L(1233)] = !0), Z;
    D[L(2503)] = !0;
    var J;
    D[L(1506)] && (J = this[L(2074)], this[L(2074)] = this[L(2263)]);
    var X;
    try {
      X = x[L(1138)](this, D[L(1004)], T, D[L(1025)]);
    } catch (Y) {
      throw delete D[L(1981)], Y;
    } finally {
      D[L(2503)] = !1, D[L(1506)] && (this[L(2074)] = J);
    }
    return D[L(1981)] = X, D[L(1706)] = X[L(1706)], D[L(1198)] = X[L(1198)], D[L(1562)] = X[L(1562)], X;
    function Z() {
      const Y = L;
      var c0 = D.validate, n0 = c0[Y(1104)](this, arguments);
      return Z.errors = c0[Y(836)], n0;
    }
  }
  function z(D) {
    const T = i;
    switch (D.schemaId) {
      case T(2477):
        return G;
      case "id":
        return U;
      default:
        return V;
    }
  }
  function U(D) {
    const T = i;
    return D[T(533)] && this.logger.warn(T(2261), D[T(533)]), D.id;
  }
  function V(D) {
    const T = i;
    return D.id && this.logger[T(2791)](T(1469), D.id), D.$id;
  }
  function G(D) {
    const T = i;
    if (D[T(533)] && D.id && D.$id != D.id) throw new Error("schema $id is different from id");
    return D[T(533)] || D.id;
  }
  function o0(D, T) {
    const L = i;
    if (D = D || this[L(836)], !D) return L(352);
    T = T || {};
    for (var J = T.separator === void 0 ? ", " : T[L(2370)], X = T[L(2553)] === void 0 ? "data" : T[L(2553)], Z = "", Y = 0; Y < D.length; Y++) {
      var c0 = D[Y];
      c0 && (Z += X + c0[L(833)] + " " + c0[L(705)] + J);
    }
    return Z.slice(0, -J[L(1028)]);
  }
  function u0(D, T) {
    const L = i;
    return typeof T == L(654) && (T = new RegExp(T)), this[L(2789)][D] = T, this;
  }
  function f0(D) {
    const T = i;
    var L;
    if (D[T(2074)][T(375)] && (L = Oc, D.addMetaSchema(L, L.$id, !0)), D[T(2074)].meta !== !1) {
      var J = hs;
      D[T(2074)][T(375)] && (J = c(J, h)), D.addMetaSchema(J, l, !0), D[T(1726)]["http://json-schema.org/schema"] = l;
    }
  }
  function i0(D) {
    const T = i;
    var L = D[T(2074)][T(1839)];
    if (L)
      if (Array.isArray(L)) D.addSchema(L);
      else
        for (var J in L) D.addSchema(L[J], J);
  }
  function l0(D) {
    const T = i;
    for (var L in D[T(2074)][T(2219)]) {
      var J = D[T(2074)][T(2219)][L];
      D[T(1761)](L, J);
    }
  }
  function k0(D) {
    const T = i;
    for (var L in D[T(2074)].keywords) {
      var J = D[T(2074)].keywords[L];
      D[T(2450)](L, J);
    }
  }
  function v0(D, T) {
    const L = i;
    if (D[L(798)][T] || D[L(1726)][T]) throw new Error(L(1108) + T + L(1226));
  }
  function L0(D) {
    const T = i;
    for (var L = u[T(1217)](D[T(2074)]), J = 0; J < g.length; J++) delete L[g[J]];
    return L;
  }
  function N0(D) {
    const T = i;
    var L = D[T(2074)][T(1597)];
    if (L === !1) D[T(1597)] = { log: J0, warn: J0, error: J0 };
    else {
      if (L === void 0 && (L = console), !(typeof L == T(513) && L[T(1263)] && L[T(2791)] && L[T(1314)])) throw new Error("logger must implement log, warn and error methods");
      D[T(1597)] = L;
    }
  }
  function J0() {
  }
  return jt;
}
var jc = Dc();
const Lc = zn(jc);
class Mc extends z2 {
  constructor(x, t) {
    const n = a;
    var e;
    super(t), this[n(1142)] = x, this[n(816)] = (e = t == null ? void 0 : t[n(961)]) !== null && e !== void 0 ? e : {}, this[n(1911)] = t == null ? void 0 : t.instructions, this[n(936)](Yn, (r) => this[n(655)](r)), this.setNotificationHandler(es, () => {
      const r = n;
      var s;
      return (s = this[r(1580)]) === null || s === void 0 ? void 0 : s.call(this);
    });
  }
  [a(2392)](x) {
    const t = a;
    if (this.transport) throw new Error(t(2202));
    this[t(816)] = H2(this[t(816)], x);
  }
  assertCapabilityForMethod(x) {
    const t = a;
    var n, e, r;
    switch (x) {
      case "sampling/createMessage":
        if (!(!((n = this[t(1350)]) === null || n === void 0) && n[t(2629)])) throw new Error(t(1381) + x + ")");
        break;
      case t(631):
        if (!(!((e = this[t(1350)]) === null || e === void 0) && e[t(418)])) throw new Error("Client does not support elicitation (required for " + x + ")");
        break;
      case t(427):
        if (!(!((r = this[t(1350)]) === null || r === void 0) && r[t(1179)])) throw new Error(t(1788) + x + ")");
        break;
    }
  }
  [a(632)](x) {
    const t = a;
    switch (x) {
      case t(1654):
        if (!this[t(816)][t(407)]) throw new Error("Server does not support logging (required for " + x + ")");
        break;
      case t(1037):
      case t(1435):
        if (!this[t(816)].resources) throw new Error("Server does not support notifying about resources (required for " + x + ")");
        break;
      case t(919):
        if (!this[t(816)].tools) throw new Error("Server does not support notifying of tool list changes (required for " + x + ")");
        break;
      case t(2387):
        if (!this._capabilities[t(1633)]) throw new Error(t(615) + x + ")");
        break;
    }
  }
  [a(1441)](x) {
    const t = a;
    switch (x) {
      case t(297):
        if (!this[t(816)][t(2629)]) throw new Error(t(239) + x + ")");
        break;
      case "logging/setLevel":
        if (!this[t(816)][t(407)]) throw new Error(t(2122) + x + ")");
        break;
      case t(821):
      case t(1679):
        if (!this[t(816)][t(1633)]) throw new Error("Server does not support prompts (required for " + x + ")");
        break;
      case t(1259):
      case "resources/templates/list":
      case "resources/read":
        if (!this[t(816)][t(1627)]) throw new Error("Server does not support resources (required for " + x + ")");
        break;
      case t(1555):
      case t(1892):
        if (!this._capabilities.tools) throw new Error("Server does not support tools (required for " + x + ")");
        break;
    }
  }
  async [a(655)](x) {
    const t = a, n = x[t(1675)][t(859)];
    return this[t(1350)] = x.params.capabilities, this[t(909)] = x[t(1675)][t(2604)], { protocolVersion: Mo[t(2147)](n) ? n : _n, capabilities: this[t(368)](), serverInfo: this[t(1142)], ...this[t(1911)] && { instructions: this[t(1911)] } };
  }
  getClientCapabilities() {
    return this[a(1350)];
  }
  [a(2514)]() {
    return this._clientVersion;
  }
  getCapabilities() {
    return this[a(816)];
  }
  async [a(2340)]() {
    const x = a;
    return this[x(2698)]({ method: x(2340) }, Xt);
  }
  async [a(1398)](x, t) {
    const n = a;
    return this.request({ method: n(297), params: x }, os, t);
  }
  async [a(1156)](x, t) {
    const n = a, e = await this[n(2698)]({ method: n(631), params: x }, cs, t);
    if (e[n(1678)] === "accept" && e[n(1618)]) try {
      const r = new Lc(), s = r[n(514)](x.requestedSchema);
      if (!s(e[n(1618)])) throw new Te(be[n(2707)], n(2112) + r[n(2650)](s[n(836)]));
    } catch (r) {
      throw r instanceof Te ? r : new Te(be[n(904)], n(1211) + r);
    }
    return e;
  }
  async [a(2731)](x, t) {
    return this[a(2698)]({ method: "roots/list", params: x }, us, t);
  }
  async [a(2535)](x) {
    const t = a;
    return this.notification({ method: t(1654), params: x });
  }
  async [a(1090)](x) {
    const t = a;
    return this.notification({ method: t(1037), params: x });
  }
  async sendResourceListChanged() {
    return this[a(2336)]({ method: "notifications/resources/list_changed" });
  }
  async [a(1445)]() {
    const x = a;
    return this[x(2336)]({ method: x(919) });
  }
  async [a(237)]() {
    const x = a;
    return this[x(2336)]({ method: x(2387) });
  }
}
class $c extends Error {
  constructor(x, t) {
    const n = a;
    super("Heartbeat timeout for poster " + x + n(1081) + t + "ms"), this[n(2409)] = n(1309);
  }
}
const px = /* @__PURE__ */ new Map();
class zc {
  constructor(x) {
    const t = a;
    if (this[t(1775)] = [], this[t(1394)] = Date[t(391)](), px[t(341)](x[t(2800)])) {
      const n = px[t(474)](x[t(2800)]);
      n && n[t(1841)]();
    }
    this.posterIdentifier = x[t(2800)], this[t(2512)] = x[t(2512)], this[t(2778)] = x.addMessageEventListener, this.removeMessageEventListener = x[t(2230)], this[t(943)] = x[t(943)] ?? 5e3, this[t(1543)] = x[t(1543)] ?? 5e3, this[t(381)] = x.debugDisableHeartbeatResponse ?? !1, px[t(2663)](this[t(2800)], this), this[t(2684)] = this[t(2684)][t(885)](this), this.externalListenMessageCallback = this[t(2778)](this[t(2684)]);
  }
  listenMessageCallback(x) {
    const t = a;
    if (x[t(2800)] === this[t(2800)]) {
      if (x[t(2622)] === t(2631)) {
        x[t(2299)] === t(2340) && !this[t(381)] ? this[t(2512)]({ channel: t(2631), posterIdentifier: this[t(2800)], type: t(2427), timestamp: x[t(2260)] }) : x[t(2299)] === "pong" && (this.lastPongReceived = Date[t(391)](), this[t(1205)] && (clearTimeout(this.heartbeatTimeoutTimer), this[t(1205)] = void 0));
        return;
      }
      x[t(2622)] === t(2176) && (this[t(2463)] && "payload" in x ? this.onmessage(x[t(1782)]) : t(1782) in x && this.messageQueue[t(2037)](x[t(1782)]));
    }
  }
  async [a(2558)]() {
    const x = a;
    for (; this[x(1775)].length > 0; ) {
      const t = this.messageQueue[x(966)]();
      t && this[x(2463)] && this[x(2463)](t);
    }
    this[x(2087)]();
  }
  [a(2087)]() {
    const x = a;
    this[x(1415)] = setInterval(() => {
      const t = x, n = Date[t(391)]();
      this[t(2512)]({ channel: t(2631), posterIdentifier: this[t(2800)], type: t(2340), timestamp: n }), this[t(1205)] = setTimeout(() => {
        const e = t, r = new $c(this[e(2800)], this[e(1543)]);
        this[e(887)] && this.onerror(r);
      }, this[t(1543)]);
    }, this[x(943)]);
  }
  async [a(1200)](x, t) {
    const n = a;
    this[n(2512)]({ channel: "sdppp", posterIdentifier: this[n(2800)], payload: x });
  }
  async close() {
    const x = a;
    this[x(1415)] && (clearInterval(this[x(1415)]), this[x(1415)] = void 0), this[x(1205)] && (clearTimeout(this[x(1205)]), this.heartbeatTimeoutTimer = void 0), px[x(243)](this[x(2800)]), this[x(2230)](this[x(2632)]);
  }
}
const Hc = sx[a(2761)](a(767));
async function ps() {
  const i = a;
  if (!window[i(2178)]) return;
  const x = new zc({ posterIdentifier: "comfy-uxp", messagePoster: (e) => {
    const r = i;
    window[r(2178)][r(1682)](e, "*");
  }, addMessageEventListener: (e) => {
    const r = i, s = (o) => {
      e(o.data);
    };
    return window[r(1531)](r(705), s), s;
  }, removeMessageEventListener: (e) => {
    window[i(2042)]("message", e);
  } });
  x[i(887)] = (e) => {
    Hc(i(2724), e);
  };
  const t = new Mc({ name: i(1547), version: i(249) }, {}), n = new bi(t);
  return await n[i(515)](x), window[i(2178)][i(1682)]({ channel: i(1812), meshName: i(2783), action: i(515), version: i(1915) }, "*"), await E0[i(515)](i(510), n);
}
const Uc = Object[a(1352)](Object[a(1730)]({ __proto__: null, connectUXP: ps, mcpMesh: E0 }, Symbol[a(1067)], { value: a(1512) }));
function ms(i) {
  const x = a, t = q0.workflowManager || q0[x(1150)].workflow, n = t[x(2530)];
  if (i && i[x(390)] && i[x(390)].id !== n.activeState.id) return;
  const e = E0[x(768)][x(409)]().widgetableStructure, r = Jt(q0[x(1252)], n);
  ys(r, e) && E0[x(768)][x(2248)]({ widgetableStructure: r }), E0[x(768)][x(2248)]({ widgetableValues: Nx(q0.graph) });
}
Oe[a(1531)]("graphChanged", ms), Oe.addEventListener(a(1822), () => {
  E0[a(768)].setState({ widgetableValues: Nx(q0.graph) });
});
let Gr = 0, Jr = !0, Qr = "";
function gs() {
  const i = a;
  requestAnimationFrame(gs);
  const x = q0[i(2538)] || q0[i(1150)].workflow, t = x.activeWorkflow, n = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t.path) || "", r = (t == null ? void 0 : t[i(2211)]) || !0;
  if (n === Gr && e === Qr && r === Jr) return;
  const s = Date.now();
  Gr = n, Qr = e, Jr = r;
  const o = Jt(q0[i(1252)], t), c = Nx(q0[i(1252)]);
  E0[i(768)][i(2248)]({ widgetableStructure: o, widgetableValues: c }), console.log("graph update cost " + (Date[i(391)]() - s) + "ms"), setTimeout(() => {
    const u = i;
    if (t !== x[u(2530)]) return;
    const d = Jt(q0.graph, t), f = Nx(q0[u(1252)]);
    ys(d, o) && E0[u(768)][u(2248)]({ widgetableStructure: d }), E0.store[u(2248)]({ widgetableValues: f });
  }, 800);
}
requestAnimationFrame(gs);
function ys(i, x) {
  const t = a;
  return i.nodeIndexes[t(1028)] !== x[t(2339)][t(1028)] || JSON[t(956)](i[t(2339)]) !== JSON[t(956)](x[t(2339)]) || JSON[t(956)](i[t(1870)]) !== JSON[t(956)](x.nodes);
}
let Xr = !1;
async function Vc() {
  const i = a;
  if (Xr) return Promise.resolve();
  Oe[i(2231)] && E0[i(768)][i(2248)]({ comfyUserToken: Oe[i(2231)] }), Xr = !0;
}
sx[a(2761)](a(2131));
async function Zc(i, x, t) {
  const n = a;
  x[n(1531)]("progress", ({ detail: s }) => {
    const o = n;
    if (!s) return;
    let c = 0, u = 0;
    !isNaN(s.value / s[o(1828)]) && (c = Math[o(626)](s.value / s[o(1828)] * 100));
    const d = s[o(2021)], f = graph[o(1870)][o(647)]((l) => l.id == d);
    if (f && f.order) {
      const l = 100 / graph[o(1870)].length;
      u = Math.round(f[o(1481)] * l) + (c ? c / 100 * l : 0);
    }
    E0.store[o(2248)]({ progress: c, graphProgress: u });
  }), x.addEventListener("status", (s) => {
    var c;
    const o = n;
    (c = s[o(390)]) != null && c[o(891)] && E0[o(768)][o(2248)]({ queueSize: s[o(390)][o(891)].queue_remaining });
  }), x[n(1531)](n(1746), ({ detail: s }) => {
    const o = n;
    if (E0[o(768)].setState({ executingNodeTitle: "", executingNodeID: "", lastError: s[o(1246)] }), s.node_id) {
      const c = i[o(1252)][o(1870)][o(647)]((u) => u.id == s.node_id);
      E0[o(768)].setState({ widgetableErrors: { [s[o(720)]]: "[" + ((c == null ? void 0 : c.title) || s.node_id) + "]" + s[o(1246)] } });
    }
  }), x[n(1531)](n(2418), (s) => {
    const o = n, c = s[o(390)], u = graph[o(1870)].find((d) => d.id == c);
    if (u) {
      const d = 100 / graph[o(1870)][o(1028)];
      E0.store[o(2248)]({ executingNodeTitle: u.title, executingNodeID: u.id, graphProgress: Math[o(626)](u.order * d) });
    }
  }), x[n(1531)](n(1861), () => {
    const s = n;
    E0.store[s(2248)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x.addEventListener(n(2722), ({ detail: s }) => {
    const o = n;
    E0[o(768)].setState({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date[o(391)]() });
  });
  const e = /* @__PURE__ */ new Map();
  x[n(1531)](n(2141), (s) => {
    const o = n;
    E0[o(768)][o(2248)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[o(474)](s[o(390)][o(2121)]) || [])[o(2348)]((u) => ({ url: u, thumbnail: u }));
    Do(s[o(390)][o(2121)], c), e[o(243)](s[o(390)][o(2121)]);
  }), x.addEventListener(n(1822), (s) => {
    const o = n, c = e[o(474)](s[o(390)].prompt_id) || [];
    s.detail[o(2364)] && Array.isArray(s[o(390)][o(2364)][o(1296)]) && s[o(390)][o(2364)][o(1296)][o(1028)] > 0 && c[o(2037)](...s[o(390)][o(2364)].images[o(1001)]((u) => u[o(2299)] == "output")[o(2348)]((u) => {
      const d = o;
      return location[d(2642)] + location[d(737)] + d(1490) + u[d(2299)] + d(1149) + encodeURIComponent(u[d(1850)]) + (u.subfolder ? d(1030) + encodeURIComponent(u[d(1151)]) : "");
    })), s[o(390)][o(2364)] && Array.isArray(s[o(390)][o(2364)][o(1341)]) && s[o(390)][o(2364)][o(1341)][o(1028)] > 0 && c.push(...s[o(390)].output[o(1341)][o(2348)]((u) => {
      const d = o;
      return location[d(2642)] + location[d(737)] + "sd-ppp-static/sdppp_images/" + encodeURIComponent(u);
    })), e[o(2663)](s.detail[o(2121)], c);
  });
  let r = null;
  x[n(1531)](n(2597), (s) => {
    r = setTimeout(() => {
      const o = W;
      E0[o(768)][o(2248)]({ comfyWSState: o(2597) });
    }, 1e3);
  }), x.addEventListener(n(1058), (s) => {
    const o = n;
    E0.store.setState({ comfyWSState: o(2265) }), clearTimeout(r);
  });
}
let Lt = [];
(async function() {
  var x, t, n, e, r, s;
  const i = a;
  if (!(typeof gradioApp < "u")) {
    try {
      const o = (t = (x = window[i(1877)]) == null ? void 0 : x[i(595)]) == null ? void 0 : t[i(595)], c = (e = (n = window[i(1877)]) == null ? void 0 : n.ui) == null ? void 0 : e[i(2138)], u = (s = (r = window.comfyAPI) == null ? void 0 : r[i(2679)]) == null ? void 0 : s[i(2679)];
      if (!o || !u || !c) throw new Error(i(726));
      await Vc(), await ps(), await Zc(o, u, c), import(i(959)).then((d) => {
        d[i(574)](Ye, 2);
      });
    } catch (o) {
      Lt[i(2037)](o[i(2304)] || o[i(705)] || o);
    }
    await new Promise((o) => setTimeout(o, 2e3)), Lt[i(1028)] && console[i(1314)](Lt[0]);
  }
})();
