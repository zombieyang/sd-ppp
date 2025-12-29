var Hn = Object.defineProperty;
var zn = (o, x, t) => x in o ? Hn(o, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[x] = t;
var me = (o, x, t) => zn(o, typeof x != "symbol" ? x + "" : x, t);
const a = K;
(function(o, x) {
  const t = K, r = o();
  for (; ; )
    try {
      if (-parseInt(t(572)) / 1 * (parseInt(t(2974)) / 2) + -parseInt(t(2595)) / 3 + parseInt(t(767)) / 4 * (parseInt(t(2552)) / 5) + -parseInt(t(824)) / 6 + parseInt(t(582)) / 7 + parseInt(t(3048)) / 8 * (-parseInt(t(837)) / 9) + parseInt(t(2210)) / 10 === x) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Tx, 238766);
const Ne = window[a(2399)][a(2161)][a(2161)];
window[a(2399)].ui[a(1185)];
const E0 = window[a(2399)][a(1039)][a(1039)];
var ts;
class Vn {
  constructor(x) {
    me(this, ts);
    const t = a;
    this[t(1118)] = x;
    const r = this[t(2033)]();
    if (!r[t(1694)]) throw new Error(t(977) + r[t(2311)].join(", "));
  }
  [(ts = a(1118), a(2033))]() {
    const x = a, t = [];
    (!this[x(1118)].nodes || Object[x(548)](this[x(1118)][x(2066)])[x(2910)] === 0) && t[x(816)](x(1201));
    for (const [e, s] of this[x(1118)][x(2739)])
      !this.definition[x(2066)][e] && t.push(x(1744) + e), !this.definition[x(2066)][s] && t[x(816)](x(1832) + s);
    const r = this[x(963)]();
    return !r.valid && t[x(816)](...r.errors), { valid: t[x(2910)] === 0, errors: t };
  }
  [a(534)]() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const r of Object.keys(this[x(1118)].nodes))
      t.set(r, []);
    for (const [r, e] of this[x(1118)][x(2739)]) {
      const s = t.get(r) || [];
      s[x(816)](e), t.set(r, s);
    }
    return t;
  }
  [a(963)]() {
    const x = a, t = [], r = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), s = this[x(534)](), n = (i, c) => {
      const d = x;
      if (e[d(2239)](i)) {
        const l = c[d(1316)](i), f = c[d(2527)](l)[d(653)](i);
        return t[d(816)](d(2850) + f[d(952)](d(603))), !0;
      }
      if (r.has(i)) return !1;
      r[d(1604)](i), e[d(1604)](i);
      const u = s.get(i) || [];
      for (const l of u)
        if (n(l, [...c, i])) return !0;
      return e[d(1239)](i), !1;
    };
    for (const i of Object[x(548)](this.definition[x(2066)]))
      !r[x(2239)](i) && n(i, []);
    return { valid: t.length === 0, errors: t };
  }
  buildAdjacencyList() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const r of Object[x(548)](this.definition[x(2066)]))
      t[x(2454)](r, []);
    for (const [r, e] of this[x(1118)][x(2739)]) {
      const s = t.get(r) || [];
      s.push(e), t[x(2454)](r, s);
      const n = t[x(2620)](e) || [];
      n.push(r), t[x(2454)](e, n);
    }
    return t;
  }
  getNeighbors(x) {
    return this[a(1795)]().get(x) || [];
  }
  [a(2328)](x) {
    const t = a;
    return this[t(1118)][t(2066)][x];
  }
  [a(2823)]() {
    const x = a;
    return Object.keys(this[x(1118)][x(2066)]);
  }
  [a(923)](x, t) {
    const r = a;
    return this[r(1118)][r(2739)][r(445)](([e, s]) => e === x && s === t || e === t && s === x);
  }
  findPath(x, t) {
    const r = a;
    if (x === t) return [x];
    const e = this[r(1795)](), s = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; s.length > 0; ) {
      const { nodeId: i, path: c } = s[r(613)]();
      if (n[r(2239)](i)) continue;
      if (n[r(1604)](i), i === t) return c;
      const d = e[r(2620)](i) || [];
      for (const u of d)
        !n[r(2239)](u) && s.push({ nodeId: u, path: [...c, u] });
    }
    return null;
  }
  [a(2949)](x, t) {
    return this[a(1231)](x, t) !== null;
  }
  [a(1808)]() {
    return { ...this.definition };
  }
}
const Ca = (o) => {
  let x;
  const t = /* @__PURE__ */ new Set(), r = (d, u) => {
    const l = K, f = typeof d === l(2855) ? d(x) : d;
    if (!Object.is(f, x)) {
      const b = x;
      x = u ?? (typeof f !== l(2517) || f === null) ? f : Object[l(1841)]({}, x, f), t[l(1548)]((h) => h(x, b));
    }
  }, e = () => x, s = () => c, n = (d) => {
    const u = K;
    return t.add(d), () => t[u(1239)](d);
  }, i = { setState: r, getState: e, getInitialState: s, subscribe: n }, c = x = o(r, e, i);
  return i;
}, Bn = (o) => o ? Ca(o) : Ca;
var qe;
(function(o) {
  const x = a;
  o[x(1125)] = (s) => {
  };
  function t(s) {
  }
  o[x(1293)] = t;
  function r(s) {
    throw new Error();
  }
  o[x(696)] = r, o[x(1910)] = (s) => {
    const n = {};
    for (const i of s)
      n[i] = i;
    return n;
  }, o[x(944)] = (s) => {
    const n = x, i = o.objectKeys(s).filter((d) => typeof s[s[d]] !== n(1730)), c = {};
    for (const d of i)
      c[d] = s[d];
    return o[n(3070)](c);
  }, o.objectValues = (s) => o[x(2656)](s).map(function(i) {
    return s[i];
  }), o[x(2656)] = typeof Object[x(548)] === x(2855) ? (s) => Object.keys(s) : (s) => {
    const n = x, i = [];
    for (const c in s)
      Object[n(560)][n(938)][n(1175)](s, c) && i[n(816)](c);
    return i;
  }, o[x(1801)] = (s, n) => {
    for (const i of s)
      if (n(i)) return i;
  }, o.isInteger = typeof Number[x(2510)] === x(2855) ? (s) => Number[x(2510)](s) : (s) => typeof s === x(1730) && Number.isFinite(s) && Math[x(878)](s) === s;
  function e(s, n = x(2448)) {
    const i = x;
    return s.map((c) => typeof c === i(1443) ? "'" + c + "'" : c).join(n);
  }
  o.joinValues = e, o[x(692)] = (s, n) => typeof n === x(1540) ? n.toString() : n;
})(qe || (qe = {}));
var Ra;
(function(o) {
  const x = a;
  o[x(1790)] = (t, r) => ({ ...t, ...r });
})(Ra || (Ra = {}));
const ae = qe[a(1910)]([a(1443), a(2184), "number", "integer", "float", a(1964), "date", "bigint", a(1189), a(2855), a(1691), "null", a(1517), "object", a(543), "promise", a(2003), a(2631), "map", a(2454)]), I0 = (o) => {
  const x = a;
  switch (typeof o) {
    case x(1691):
      return ae.undefined;
    case x(1443):
      return ae[x(1443)];
    case x(1730):
      return Number[x(1497)](o) ? ae[x(2184)] : ae[x(1730)];
    case x(1964):
      return ae[x(1964)];
    case x(2855):
      return ae[x(2855)];
    case "bigint":
      return ae[x(1540)];
    case x(1189):
      return ae[x(1189)];
    case x(2517):
      return Array[x(2573)](o) ? ae[x(1517)] : o === null ? ae.null : o[x(857)] && typeof o[x(857)] == "function" && o[x(1508)] && typeof o[x(1508)] === x(2855) ? ae[x(545)] : typeof Map !== x(1691) && o instanceof Map ? ae[x(1429)] : typeof Set !== x(1691) && o instanceof Set ? ae[x(2454)] : typeof Date < "u" && o instanceof Date ? ae.date : ae[x(2517)];
    default:
      return ae[x(543)];
  }
}, Z = qe[a(1910)]([a(1947), a(1884), "custom", a(1967), a(1074), a(1207), a(1188), a(935), a(2326), a(1877), a(2128), a(2302), "too_big", a(2685), a(1826), a(2358)]);
class k0 extends Error {
  get [a(2311)]() {
    return this[a(1989)];
  }
  constructor(x) {
    const t = a;
    super(), this[t(1989)] = [], this[t(2643)] = (e) => {
      this.issues = [...this.issues, e];
    }, this[t(1414)] = (e = []) => {
      const s = t;
      this[s(1989)] = [...this[s(1989)], ...e];
    };
    const r = new.target.prototype;
    Object[t(784)] ? Object[t(784)](this, r) : this[t(888)] = r, this.name = t(2625), this.issues = x;
  }
  [a(1918)](x) {
    const t = x || function(s) {
      return s[K(2732)];
    }, r = { _errors: [] }, e = (s) => {
      const n = K;
      for (const i of s[n(1989)])
        if (i[n(3068)] === n(1967)) i[n(590)][n(1429)](e);
        else if (i[n(3068)] === n(2326)) e(i[n(2120)]);
        else if (i[n(3068)] === n(935)) e(i[n(2830)]);
        else if (i.path[n(2910)] === 0) r[n(701)][n(816)](t(i));
        else {
          let c = r, d = 0;
          for (; d < i.path[n(2910)]; ) {
            const u = i.path[d];
            d === i[n(2075)][n(2910)] - 1 ? (c[u] = c[u] || { _errors: [] }, c[u][n(701)].push(t(i))) : c[u] = c[u] || { _errors: [] }, c = c[u], d++;
          }
        }
    };
    return e(this), r;
  }
  static [a(2667)](x) {
    const t = a;
    if (!(x instanceof k0)) throw new Error(t(2537) + x);
  }
  [a(1725)]() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this[a(1989)], qe.jsonStringifyReplacer, 2);
  }
  get [a(2388)]() {
    const x = a;
    return this[x(1989)][x(2910)] === 0;
  }
  [a(2902)](x = (t) => t[a(2732)]) {
    const t = a, r = {}, e = [];
    for (const s of this[t(1989)])
      if (s[t(2075)].length > 0) {
        const n = s.path[0];
        r[n] = r[n] || [], r[n][t(816)](x(s));
      } else e[t(816)](x(s));
    return { formErrors: e, fieldErrors: r };
  }
  get formErrors() {
    return this[a(2902)]();
  }
}
k0[a(1468)] = (o) => new k0(o);
const Ut = (o, x) => {
  const t = a;
  let r;
  switch (o[t(3068)]) {
    case Z.invalid_type:
      o[t(942)] === ae[t(1691)] ? r = t(1300) : r = t(1866) + o.expected + t(3071) + o.received;
      break;
    case Z[t(1884)]:
      r = t(1861) + JSON[t(1749)](o.expected, qe.jsonStringifyReplacer);
      break;
    case Z.unrecognized_keys:
      r = t(2541) + qe[t(1867)](o[t(548)], ", ");
      break;
    case Z[t(1967)]:
      r = t(1915);
      break;
    case Z[t(1074)]:
      r = t(1837) + qe[t(1867)](o[t(961)]);
      break;
    case Z[t(1207)]:
      r = t(530) + qe[t(1867)](o[t(961)]) + t(1431) + o.received + "'";
      break;
    case Z[t(935)]:
      r = t(1972);
      break;
    case Z[t(2326)]:
      r = t(1079);
      break;
    case Z[t(1877)]:
      r = t(1235);
      break;
    case Z[t(2128)]:
      typeof o.validation === t(2517) ? "includes" in o.validation ? (r = 'Invalid input: must include "' + o[t(2995)].includes + '"', typeof o[t(2995)][t(635)] === t(1730) && (r = r + " at one or more positions greater than or equal to " + o[t(2995)][t(635)])) : t(1904) in o.validation ? r = t(845) + o.validation[t(1904)] + '"' : t(770) in o[t(2995)] ? r = t(1732) + o[t(2995)][t(770)] + '"' : qe.assertNever(o.validation) : o[t(2995)] !== t(3019) ? r = "Invalid " + o[t(2995)] : r = "Invalid";
      break;
    case Z[t(2302)]:
      o.type === "array" ? r = t(1943) + (o[t(1304)] ? t(1762) : o[t(797)] ? t(1106) : "more than") + " " + o[t(2242)] + " element(s)" : o[t(506)] === t(1443) ? r = "String must contain " + (o[t(1304)] ? t(1762) : o[t(797)] ? "at least" : t(3003)) + " " + o.minimum + t(1869) : o[t(506)] === t(1730) ? r = t(1627) + (o[t(1304)] ? t(1689) : o[t(797)] ? t(2090) : "greater than ") + o.minimum : o[t(506)] === "bigint" ? r = t(1627) + (o[t(1304)] ? t(1689) : o[t(797)] ? t(2090) : t(1260)) + o[t(2242)] : o[t(506)] === t(1457) ? r = t(1330) + (o[t(1304)] ? "exactly equal to " : o[t(797)] ? t(2090) : t(1260)) + new Date(Number(o[t(2242)])) : r = "Invalid input";
      break;
    case Z[t(554)]:
      o.type === t(1517) ? r = t(1943) + (o.exact ? t(1762) : o[t(797)] ? t(747) : t(1273)) + " " + o[t(2793)] + t(1177) : o[t(506)] === t(1443) ? r = t(2095) + (o[t(1304)] ? t(1762) : o[t(797)] ? t(747) : t(1147)) + " " + o[t(2793)] + " character(s)" : o[t(506)] === t(1730) ? r = t(1627) + (o[t(1304)] ? "exactly" : o[t(797)] ? "less than or equal to" : t(1273)) + " " + o[t(2793)] : o[t(506)] === t(1540) ? r = t(2316) + (o[t(1304)] ? t(1762) : o[t(797)] ? t(1502) : "less than") + " " + o[t(2793)] : o[t(506)] === t(1457) ? r = t(1330) + (o.exact ? t(1762) : o.inclusive ? t(3043) : t(2756)) + " " + new Date(Number(o.maximum)) : r = "Invalid input";
      break;
    case Z[t(899)]:
      r = t(1915);
      break;
    case Z.invalid_intersection_types:
      r = t(1681);
      break;
    case Z[t(1826)]:
      r = t(2929) + o[t(2570)];
      break;
    case Z[t(2358)]:
      r = "Number must be finite";
      break;
    default:
      r = x.defaultError, qe[t(696)](o);
  }
  return { message: r };
};
let Zn = Ut;
function Wn() {
  return Zn;
}
const Kn = (o) => {
  const x = a, { data: t, path: r, errorMaps: e, issueData: s } = o, n = [...r, ...s[x(2075)] || []], i = { ...s, path: n };
  if (s[x(2732)] !== void 0) return { ...s, path: n, message: s[x(2732)] };
  let c = "";
  const d = e[x(2951)]((u) => !!u).slice()[x(2055)]();
  for (const u of d)
    c = u(i, { data: t, defaultError: c })[x(2732)];
  return { ...s, path: n, message: c };
};
function X(o, x) {
  const t = a, r = Wn(), e = Kn({ issueData: x, data: o[t(571)], path: o[t(2075)], errorMaps: [o[t(1037)].contextualErrorMap, o[t(1099)], r, r === Ut ? void 0 : Ut][t(2951)]((s) => !!s) });
  o.common[t(1989)][t(816)](e);
}
class e0 {
  constructor() {
    const x = a;
    this[x(2398)] = x(1694);
  }
  [a(2906)]() {
    this[a(2398)] === "valid" && (this.value = "dirty");
  }
  [a(1973)]() {
    const x = a;
    this[x(2398)] !== x(930) && (this[x(2398)] = x(930));
  }
  static [a(2314)](x, t) {
    const r = a, e = [];
    for (const s of t) {
      if (s[r(735)] === "aborted") return he;
      s.status === r(2906) && x[r(2906)](), e[r(816)](s[r(2398)]);
    }
    return { status: x[r(2398)], value: e };
  }
  static async [a(1535)](x, t) {
    const r = a, e = [];
    for (const s of t) {
      const n = await s.key, i = await s[r(2398)];
      e.push({ key: n, value: i });
    }
    return e0.mergeObjectSync(x, e);
  }
  static [a(2463)](x, t) {
    const r = a, e = {};
    for (const s of t) {
      const { key: n, value: i } = s;
      if (n[r(735)] === r(930) || i[r(735)] === r(930)) return he;
      n[r(735)] === r(2906) && x[r(2906)](), i[r(735)] === "dirty" && x[r(2906)](), n[r(2398)] !== "__proto__" && (typeof i[r(2398)] !== r(1691) || s[r(995)]) && (e[n[r(2398)]] = i[r(2398)]);
    }
    return { status: x[r(2398)], value: e };
  }
}
const he = Object[a(2534)]({ status: a(930) }), Q0 = (o) => ({ status: a(2906), value: o }), a0 = (o) => ({ status: a(1694), value: o }), Fa = (o) => o[a(735)] === a(930), Na = (o) => o[a(735)] === a(2906), V0 = (o) => o[a(735)] === a(1694), bx = (o) => typeof Promise !== a(1691) && o instanceof Promise;
var ne;
(function(o) {
  const x = a;
  o[x(1770)] = (t) => typeof t == "string" ? { message: t } : t || {}, o.toString = (t) => typeof t === x(1443) ? t : t == null ? void 0 : t[x(2732)];
})(ne || (ne = {}));
class p0 {
  constructor(x, t, r, e) {
    const s = a;
    this[s(505)] = [], this[s(698)] = x, this[s(571)] = t, this[s(2303)] = r, this[s(2478)] = e;
  }
  get [a(2075)]() {
    const x = a;
    return !this[x(505)].length && (Array[x(2573)](this._key) ? this[x(505)].push(...this[x(2303)], ...this[x(2478)]) : this._cachedPath.push(...this._path, this[x(2478)])), this._cachedPath;
  }
}
const qa = (o, x) => {
  const t = a;
  if (V0(x)) return { success: !0, data: x[t(2398)] };
  if (!o[t(1037)][t(1989)][t(2910)]) throw new Error(t(1649));
  return { success: !1, get error() {
    const r = t;
    if (this[r(1058)]) return this[r(1058)];
    const e = new k0(o.common.issues);
    return this._error = e, this[r(1058)];
  } };
};
function ye(o) {
  const x = a;
  if (!o) return {};
  const { errorMap: t, invalid_type_error: r, required_error: e, description: s } = o;
  if (t && (r || e)) throw new Error(x(2054));
  return t ? { errorMap: t, description: s } : { errorMap: (i, c) => {
    const d = x, { message: u } = o;
    return i.code === d(1207) ? { message: u ?? c[d(984)] } : typeof c[d(571)] === d(1691) ? { message: u ?? e ?? c[d(984)] } : i.code !== d(1947) ? { message: c[d(984)] } : { message: u ?? r ?? c[d(984)] };
  }, description: s };
}
class Ee {
  get [a(852)]() {
    const x = a;
    return this._def[x(852)];
  }
  [a(2020)](x) {
    return I0(x[a(571)]);
  }
  _getOrReturnCtx(x, t) {
    const r = a;
    return t || { common: x[r(698)][r(1037)], data: x[r(571)], parsedType: I0(x.data), schemaErrorMap: this._def[r(3029)], path: x[r(2075)], parent: x[r(698)] };
  }
  [a(1225)](x) {
    const t = a;
    return { status: new e0(), ctx: { common: x[t(698)][t(1037)], data: x.data, parsedType: I0(x.data), schemaErrorMap: this._def[t(3029)], path: x[t(2075)], parent: x[t(698)] } };
  }
  [a(1284)](x) {
    const t = this._parse(x);
    if (bx(t)) throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  [a(2893)](x) {
    const t = a, r = this[t(1948)](x);
    return Promise[t(510)](r);
  }
  parse(x, t) {
    const r = a, e = this[r(3031)](x, t);
    if (e[r(1472)]) return e[r(571)];
    throw e[r(1493)];
  }
  [a(3031)](x, t) {
    const r = a, e = { common: { issues: [], async: (t == null ? void 0 : t[r(372)]) ?? !1, contextualErrorMap: t == null ? void 0 : t[r(3029)] }, path: (t == null ? void 0 : t[r(2075)]) || [], schemaErrorMap: this._def[r(3029)], parent: null, data: x, parsedType: I0(x) }, s = this[r(1284)]({ data: x, path: e[r(2075)], parent: e });
    return qa(e, s);
  }
  [a(1387)](x) {
    var e, s;
    const t = a, r = { common: { issues: [], async: !!this[t(1277)].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: x, parsedType: I0(x) };
    if (!this["~standard"][t(372)]) try {
      const n = this[t(1284)]({ data: x, path: [], parent: r });
      return V0(n) ? { value: n[t(2398)] } : { issues: r[t(1037)][t(1989)] };
    } catch (n) {
      (s = (e = n == null ? void 0 : n.message) == null ? void 0 : e[t(2071)]()) != null && s.includes("encountered") && (this["~standard"][t(372)] = !0), r[t(1037)] = { issues: [], async: !0 };
    }
    return this[t(2893)]({ data: x, path: [], parent: r })[t(857)]((n) => V0(n) ? { value: n[t(2398)] } : { issues: r[t(1037)].issues });
  }
  async [a(436)](x, t) {
    const r = a, e = await this[r(2942)](x, t);
    if (e.success) return e[r(571)];
    throw e[r(1493)];
  }
  async safeParseAsync(x, t) {
    const r = a, e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[r(3029)], async: !0 }, path: (t == null ? void 0 : t[r(2075)]) || [], schemaErrorMap: this[r(594)][r(3029)], parent: null, data: x, parsedType: I0(x) }, s = this._parse({ data: x, path: e[r(2075)], parent: e }), n = await (bx(s) ? s : Promise[r(510)](s));
    return qa(e, n);
  }
  [a(2251)](x, t) {
    const r = (e) => {
      const s = K;
      return typeof t === s(1443) || typeof t === s(1691) ? { message: t } : typeof t === s(2855) ? t(e) : t;
    };
    return this._refinement((e, s) => {
      const n = K, i = x(e), c = () => s[n(2643)]({ code: Z.custom, ...r(e) });
      return typeof Promise !== n(1691) && i instanceof Promise ? i[n(857)]((d) => d ? !0 : (c(), !1)) : i ? !0 : (c(), !1);
    });
  }
  [a(2585)](x, t) {
    const r = a;
    return this[r(1094)]((e, s) => {
      const n = r;
      return x(e) ? !0 : (s[n(2643)](typeof t === n(2855) ? t(e, s) : t), !1);
    });
  }
  _refinement(x) {
    const t = a;
    return new A0({ schema: this, typeName: pe[t(2523)], effect: { type: t(2585), refinement: x } });
  }
  [a(1566)](x) {
    return this[a(1094)](x);
  }
  constructor(x) {
    const t = a;
    this[t(1230)] = this[t(2942)], this[t(594)] = x, this[t(1584)] = this.parse[t(2381)](this), this[t(3031)] = this[t(3031)][t(2381)](this), this.parseAsync = this[t(436)].bind(this), this[t(2942)] = this[t(2942)][t(2381)](this), this[t(1230)] = this[t(1230)].bind(this), this[t(2251)] = this.refine.bind(this), this[t(2585)] = this[t(2585)][t(2381)](this), this.superRefine = this.superRefine[t(2381)](this), this[t(1712)] = this.optional[t(2381)](this), this[t(2259)] = this[t(2259)][t(2381)](this), this[t(2025)] = this[t(2025)][t(2381)](this), this[t(1517)] = this[t(1517)].bind(this), this[t(545)] = this[t(545)].bind(this), this.or = this.or[t(2381)](this), this[t(2069)] = this[t(2069)].bind(this), this.transform = this[t(1564)][t(2381)](this), this[t(1290)] = this[t(1290)][t(2381)](this), this.default = this[t(2889)].bind(this), this.catch = this[t(1508)].bind(this), this.describe = this[t(1145)].bind(this), this[t(1696)] = this[t(1696)][t(2381)](this), this.readonly = this.readonly[t(2381)](this), this[t(3044)] = this[t(3044)][t(2381)](this), this[t(2989)] = this[t(2989)][t(2381)](this), this["~standard"] = { version: 1, vendor: t(1305), validate: (r) => this[t(1387)](r) };
  }
  [a(1712)]() {
    return w0.create(this, this._def);
  }
  [a(2259)]() {
    const x = a;
    return j0[x(1468)](this, this[x(594)]);
  }
  [a(2025)]() {
    const x = a;
    return this.nullable()[x(1712)]();
  }
  [a(1517)]() {
    return h0[a(1468)](this);
  }
  [a(545)]() {
    const x = a;
    return kx[x(1468)](this, this[x(594)]);
  }
  or(x) {
    const t = a;
    return yx[t(1468)]([this, x], this[t(594)]);
  }
  [a(2069)](x) {
    const t = a;
    return vx[t(1468)](this, x, this[t(594)]);
  }
  transform(x) {
    const t = a;
    return new A0({ ...ye(this._def), schema: this, typeName: pe.ZodEffects, effect: { type: t(1564), transform: x } });
  }
  [a(2889)](x) {
    const t = a, r = typeof x === t(2855) ? x : () => x;
    return new Px({ ...ye(this[t(594)]), innerType: this, defaultValue: r, typeName: pe[t(2954)] });
  }
  brand() {
    const x = a;
    return new Bs({ typeName: pe[x(2635)], type: this, ...ye(this[x(594)]) });
  }
  [a(1508)](x) {
    const t = a, r = typeof x === t(2855) ? x : () => x;
    return new Ix({ ...ye(this._def), innerType: this, catchValue: r, typeName: pe[t(2698)] });
  }
  [a(1145)](x) {
    const t = a, r = this.constructor;
    return new r({ ...this[t(594)], description: x });
  }
  [a(1696)](x) {
    return oa.create(this, x);
  }
  [a(1761)]() {
    return Ex[a(1468)](this);
  }
  [a(2989)]() {
    const x = a;
    return this[x(3031)](void 0)[x(1472)];
  }
  isNullable() {
    const x = a;
    return this[x(3031)](null)[x(1472)];
  }
}
const Gn = /^c[^\s-]{8,}$/i, Jn = /^[0-9a-z]+$/, Qn = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Xn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Yn = /^[a-z0-9_-]{21}$/i, eo = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, xo = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, to = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ao = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let $x;
const ro = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, so = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, no = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, oo = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, io = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, co = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Hs = a(493), uo = new RegExp("^" + Hs + "$");
function zs(o) {
  const x = a;
  let t = "[0-5]\\d";
  o[x(1713)] ? t = t + x(2720) + o.precision + "}" : o[x(1713)] == null && (t = t + x(2588));
  const r = o[x(1713)] ? "+" : "?";
  return x(1569) + t + ")" + r;
}
function lo(o) {
  return new RegExp("^" + zs(o) + "$");
}
function fo(o) {
  const x = a;
  let t = Hs + "T" + zs(o);
  const r = [];
  return r[x(816)](o[x(968)] ? "Z?" : "Z"), o[x(2727)] && r[x(816)](x(1359)), t = t + "(" + r[x(952)]("|") + ")", new RegExp("^" + t + "$");
}
function ho(o, x) {
  return !!((x === "v4" || !x) && ro.test(o) || (x === "v6" || !x) && no.test(o));
}
function po(o, x) {
  const t = a;
  if (!eo.test(o)) return !1;
  try {
    const [r] = o[t(1389)](".");
    if (!r) return !1;
    const e = r[t(1840)](/-/g, "+")[t(1840)](/_/g, "/").padEnd(r[t(2910)] + (4 - r[t(2910)] % 4) % 4, "="), s = JSON.parse(atob(e));
    return !(typeof s !== t(2517) || s === null || t(1565) in s && (s == null ? void 0 : s[t(1565)]) !== t(377) || !s[t(2101)] || x && s.alg !== x);
  } catch {
    return !1;
  }
}
function mo(o, x) {
  const t = a;
  return !!((x === "v4" || !x) && so[t(2266)](o) || (x === "v6" || !x) && oo[t(2266)](o));
}
class v0 extends Ee {
  [a(1948)](x) {
    const t = a;
    if (this[t(594)][t(2480)] && (x[t(571)] = String(x.data)), this[t(2020)](x) !== ae[t(1443)]) {
      const n = this[t(556)](x);
      return X(n, { code: Z[t(1947)], expected: ae[t(1443)], received: n[t(2966)] }), he;
    }
    const e = new e0();
    let s;
    for (const n of this[t(594)][t(2078)])
      if (n[t(2566)] === t(2310)) x[t(571)][t(2910)] < n[t(2398)] && (s = this._getOrReturnCtx(x, s), X(s, { code: Z[t(2302)], minimum: n[t(2398)], type: t(1443), inclusive: !0, exact: !1, message: n[t(2732)] }), e[t(2906)]());
      else if (n.kind === t(544)) x[t(571)].length > n[t(2398)] && (s = this[t(556)](x, s), X(s, { code: Z[t(554)], maximum: n.value, type: t(1443), inclusive: !0, exact: !1, message: n[t(2732)] }), e.dirty());
      else if (n[t(2566)] === t(2910)) {
        const i = x[t(571)][t(2910)] > n[t(2398)], c = x[t(571)][t(2910)] < n[t(2398)];
        (i || c) && (s = this[t(556)](x, s), i ? X(s, { code: Z[t(554)], maximum: n[t(2398)], type: "string", inclusive: !0, exact: !0, message: n.message }) : c && X(s, { code: Z.too_small, minimum: n[t(2398)], type: t(1443), inclusive: !0, exact: !0, message: n[t(2732)] }), e[t(2906)]());
      } else if (n[t(2566)] === t(2512)) !to[t(2266)](x[t(571)]) && (s = this[t(556)](x, s), X(s, { validation: t(2512), code: Z.invalid_string, message: n.message }), e[t(2906)]());
      else if (n[t(2566)] === "emoji") !$x && ($x = new RegExp(ao, "u")), !$x[t(2266)](x[t(571)]) && (s = this[t(556)](x, s), X(s, { validation: t(529), code: Z[t(2128)], message: n.message }), e.dirty());
      else if (n[t(2566)] === "uuid") !Xn.test(x[t(571)]) && (s = this[t(556)](x, s), X(s, { validation: t(1342), code: Z.invalid_string, message: n[t(2732)] }), e[t(2906)]());
      else if (n[t(2566)] === t(2017)) !Yn[t(2266)](x[t(571)]) && (s = this[t(556)](x, s), X(s, { validation: t(2017), code: Z[t(2128)], message: n[t(2732)] }), e[t(2906)]());
      else if (n[t(2566)] === t(1935)) !Gn[t(2266)](x[t(571)]) && (s = this[t(556)](x, s), X(s, { validation: t(1935), code: Z[t(2128)], message: n[t(2732)] }), e[t(2906)]());
      else if (n[t(2566)] === t(675)) !Jn[t(2266)](x.data) && (s = this[t(556)](x, s), X(s, { validation: t(675), code: Z[t(2128)], message: n[t(2732)] }), e[t(2906)]());
      else if (n[t(2566)] === t(1113)) !Qn[t(2266)](x[t(571)]) && (s = this[t(556)](x, s), X(s, { validation: "ulid", code: Z[t(2128)], message: n.message }), e[t(2906)]());
      else if (n[t(2566)] === t(1998)) try {
        new URL(x[t(571)]);
      } catch {
        s = this[t(556)](x, s), X(s, { validation: "url", code: Z[t(2128)], message: n[t(2732)] }), e.dirty();
      }
      else
        n[t(2566)] === t(3019) ? (n[t(3019)].lastIndex = 0, !n[t(3019)][t(2266)](x[t(571)]) && (s = this[t(556)](x, s), X(s, { validation: "regex", code: Z[t(2128)], message: n[t(2732)] }), e[t(2906)]())) : n[t(2566)] === t(1823) ? x[t(571)] = x[t(571)].trim() : n.kind === t(416) ? !x[t(571)].includes(n[t(2398)], n[t(635)]) && (s = this[t(556)](x, s), X(s, { code: Z[t(2128)], validation: { includes: n[t(2398)], position: n[t(635)] }, message: n[t(2732)] }), e.dirty()) : n[t(2566)] === t(2071) ? x[t(571)] = x.data[t(2071)]() : n[t(2566)] === t(2791) ? x[t(571)] = x.data[t(2791)]() : n[t(2566)] === t(1904) ? !x[t(571)][t(1904)](n[t(2398)]) && (s = this._getOrReturnCtx(x, s), X(s, { code: Z[t(2128)], validation: { startsWith: n[t(2398)] }, message: n[t(2732)] }), e.dirty()) : n[t(2566)] === t(770) ? !x.data[t(770)](n[t(2398)]) && (s = this[t(556)](x, s), X(s, { code: Z[t(2128)], validation: { endsWith: n[t(2398)] }, message: n[t(2732)] }), e[t(2906)]()) : n[t(2566)] === t(1053) ? !fo(n)[t(2266)](x[t(571)]) && (s = this[t(556)](x, s), X(s, { code: Z[t(2128)], validation: t(1053), message: n.message }), e[t(2906)]()) : n[t(2566)] === "date" ? !uo.test(x[t(571)]) && (s = this[t(556)](x, s), X(s, { code: Z[t(2128)], validation: t(1457), message: n[t(2732)] }), e[t(2906)]()) : n[t(2566)] === t(827) ? !lo(n)[t(2266)](x[t(571)]) && (s = this._getOrReturnCtx(x, s), X(s, { code: Z[t(2128)], validation: t(827), message: n.message }), e[t(2906)]()) : n[t(2566)] === t(1995) ? !xo[t(2266)](x[t(571)]) && (s = this[t(556)](x, s), X(s, { validation: "duration", code: Z.invalid_string, message: n[t(2732)] }), e.dirty()) : n[t(2566)] === "ip" ? !ho(x[t(571)], n[t(1104)]) && (s = this[t(556)](x, s), X(s, { validation: "ip", code: Z[t(2128)], message: n.message }), e[t(2906)]()) : n.kind === t(1252) ? !po(x.data, n[t(2101)]) && (s = this._getOrReturnCtx(x, s), X(s, { validation: "jwt", code: Z[t(2128)], message: n[t(2732)] }), e[t(2906)]()) : n[t(2566)] === t(712) ? !mo(x[t(571)], n[t(1104)]) && (s = this[t(556)](x, s), X(s, { validation: t(712), code: Z[t(2128)], message: n.message }), e[t(2906)]()) : n[t(2566)] === t(1276) ? !io[t(2266)](x[t(571)]) && (s = this[t(556)](x, s), X(s, { validation: t(1276), code: Z[t(2128)], message: n[t(2732)] }), e[t(2906)]()) : n[t(2566)] === "base64url" ? !co[t(2266)](x[t(571)]) && (s = this[t(556)](x, s), X(s, { validation: t(2487), code: Z.invalid_string, message: n[t(2732)] }), e[t(2906)]()) : qe.assertNever(n);
    return { status: e[t(2398)], value: x[t(571)] };
  }
  [a(2839)](x, t, r) {
    const e = a;
    return this.refinement((s) => x[e(2266)](s), { validation: t, code: Z[e(2128)], ...ne[e(1770)](r) });
  }
  [a(1561)](x) {
    const t = a;
    return new v0({ ...this._def, checks: [...this._def[t(2078)], x] });
  }
  email(x) {
    const t = a;
    return this[t(1561)]({ kind: t(2512), ...ne[t(1770)](x) });
  }
  [a(1998)](x) {
    const t = a;
    return this[t(1561)]({ kind: "url", ...ne[t(1770)](x) });
  }
  [a(529)](x) {
    const t = a;
    return this[t(1561)]({ kind: "emoji", ...ne[t(1770)](x) });
  }
  [a(1342)](x) {
    return this[a(1561)]({ kind: "uuid", ...ne.errToObj(x) });
  }
  nanoid(x) {
    return this[a(1561)]({ kind: "nanoid", ...ne.errToObj(x) });
  }
  cuid(x) {
    return this[a(1561)]({ kind: "cuid", ...ne.errToObj(x) });
  }
  cuid2(x) {
    const t = a;
    return this[t(1561)]({ kind: t(675), ...ne[t(1770)](x) });
  }
  ulid(x) {
    const t = a;
    return this[t(1561)]({ kind: t(1113), ...ne[t(1770)](x) });
  }
  [a(1276)](x) {
    const t = a;
    return this[t(1561)]({ kind: t(1276), ...ne[t(1770)](x) });
  }
  [a(2487)](x) {
    const t = a;
    return this[t(1561)]({ kind: "base64url", ...ne[t(1770)](x) });
  }
  [a(1252)](x) {
    const t = a;
    return this[t(1561)]({ kind: t(1252), ...ne.errToObj(x) });
  }
  ip(x) {
    const t = a;
    return this[t(1561)]({ kind: "ip", ...ne[t(1770)](x) });
  }
  cidr(x) {
    const t = a;
    return this._addCheck({ kind: t(712), ...ne[t(1770)](x) });
  }
  [a(1053)](x) {
    const t = a;
    return typeof x == "string" ? this._addCheck({ kind: t(1053), precision: null, offset: !1, local: !1, message: x }) : this[t(1561)]({ kind: t(1053), precision: typeof (x == null ? void 0 : x[t(1713)]) === t(1691) ? null : x == null ? void 0 : x[t(1713)], offset: (x == null ? void 0 : x.offset) ?? !1, local: (x == null ? void 0 : x[t(968)]) ?? !1, ...ne[t(1770)](x == null ? void 0 : x[t(2732)]) });
  }
  [a(1457)](x) {
    return this[a(1561)]({ kind: "date", message: x });
  }
  time(x) {
    const t = a;
    return typeof x === t(1443) ? this[t(1561)]({ kind: "time", precision: null, message: x }) : this[t(1561)]({ kind: "time", precision: typeof (x == null ? void 0 : x[t(1713)]) > "u" ? null : x == null ? void 0 : x[t(1713)], ...ne.errToObj(x == null ? void 0 : x[t(2732)]) });
  }
  [a(1995)](x) {
    const t = a;
    return this[t(1561)]({ kind: "duration", ...ne[t(1770)](x) });
  }
  regex(x, t) {
    const r = a;
    return this._addCheck({ kind: r(3019), regex: x, ...ne.errToObj(t) });
  }
  [a(416)](x, t) {
    const r = a;
    return this[r(1561)]({ kind: r(416), value: x, position: t == null ? void 0 : t[r(635)], ...ne[r(1770)](t == null ? void 0 : t.message) });
  }
  startsWith(x, t) {
    const r = a;
    return this[r(1561)]({ kind: r(1904), value: x, ...ne[r(1770)](t) });
  }
  endsWith(x, t) {
    const r = a;
    return this[r(1561)]({ kind: r(770), value: x, ...ne.errToObj(t) });
  }
  min(x, t) {
    const r = a;
    return this[r(1561)]({ kind: r(2310), value: x, ...ne[r(1770)](t) });
  }
  max(x, t) {
    const r = a;
    return this[r(1561)]({ kind: "max", value: x, ...ne[r(1770)](t) });
  }
  [a(2910)](x, t) {
    const r = a;
    return this._addCheck({ kind: r(2910), value: x, ...ne.errToObj(t) });
  }
  nonempty(x) {
    const t = a;
    return this.min(1, ne[t(1770)](x));
  }
  [a(1823)]() {
    const x = a;
    return new v0({ ...this[x(594)], checks: [...this._def[x(2078)], { kind: x(1823) }] });
  }
  toLowerCase() {
    const x = a;
    return new v0({ ...this[x(594)], checks: [...this[x(594)][x(2078)], { kind: x(2071) }] });
  }
  [a(2791)]() {
    const x = a;
    return new v0({ ...this._def, checks: [...this[x(594)][x(2078)], { kind: "toUpperCase" }] });
  }
  get isDatetime() {
    const x = a;
    return !!this[x(594)][x(2078)][x(1801)]((t) => t.kind === x(1053));
  }
  get [a(2193)]() {
    const x = a;
    return !!this[x(594)][x(2078)][x(1801)]((t) => t[x(2566)] === x(1457));
  }
  get isTime() {
    const x = a;
    return !!this._def[x(2078)][x(1801)]((t) => t[x(2566)] === x(827));
  }
  get [a(2859)]() {
    const x = a;
    return !!this[x(594)][x(2078)][x(1801)]((t) => t[x(2566)] === x(1995));
  }
  get isEmail() {
    const x = a;
    return !!this[x(594)][x(2078)].find((t) => t.kind === x(2512));
  }
  get [a(2036)]() {
    const x = a;
    return !!this[x(594)][x(2078)][x(1801)]((t) => t[x(2566)] === "url");
  }
  get [a(1524)]() {
    const x = a;
    return !!this._def[x(2078)].find((t) => t[x(2566)] === x(529));
  }
  get isUUID() {
    const x = a;
    return !!this[x(594)].checks[x(1801)]((t) => t.kind === x(1342));
  }
  get isNANOID() {
    const x = a;
    return !!this[x(594)][x(2078)][x(1801)]((t) => t[x(2566)] === x(2017));
  }
  get isCUID() {
    const x = a;
    return !!this[x(594)][x(2078)].find((t) => t[x(2566)] === x(1935));
  }
  get isCUID2() {
    const x = a;
    return !!this[x(594)][x(2078)][x(1801)]((t) => t[x(2566)] === x(675));
  }
  get [a(1446)]() {
    const x = a;
    return !!this[x(594)][x(2078)][x(1801)]((t) => t[x(2566)] === x(1113));
  }
  get [a(2691)]() {
    const x = a;
    return !!this._def[x(2078)][x(1801)]((t) => t[x(2566)] === "ip");
  }
  get isCIDR() {
    const x = a;
    return !!this._def[x(2078)][x(1801)]((t) => t.kind === x(712));
  }
  get [a(2337)]() {
    const x = a;
    return !!this[x(594)][x(2078)].find((t) => t[x(2566)] === x(1276));
  }
  get [a(1174)]() {
    const x = a;
    return !!this[x(594)].checks[x(1801)]((t) => t[x(2566)] === x(2487));
  }
  get minLength() {
    const x = a;
    let t = null;
    for (const r of this[x(594)][x(2078)])
      r.kind === x(2310) && (t === null || r[x(2398)] > t) && (t = r[x(2398)]);
    return t;
  }
  get maxLength() {
    const x = a;
    let t = null;
    for (const r of this._def.checks)
      r[x(2566)] === x(544) && (t === null || r[x(2398)] < t) && (t = r[x(2398)]);
    return t;
  }
}
v0[a(1468)] = (o) => {
  const x = a;
  return new v0({ checks: [], typeName: pe.ZodString, coerce: (o == null ? void 0 : o[x(2480)]) ?? !1, ...ye(o) });
};
function bo(o, x) {
  const t = a, r = (o[t(1725)]().split(".")[1] || "")[t(2910)], e = (x[t(1725)]()[t(1389)](".")[1] || "")[t(2910)], s = r > e ? r : e, n = Number[t(1127)](o[t(526)](s)[t(1840)](".", "")), i = Number[t(1127)](x.toFixed(s).replace(".", ""));
  return n % i / 10 ** s;
}
class B0 extends Ee {
  constructor() {
    const x = a;
    super(...arguments), this.min = this[x(794)], this.max = this[x(2393)], this[x(550)] = this.multipleOf;
  }
  [a(1948)](x) {
    const t = a;
    if (this[t(594)][t(2480)] && (x.data = Number(x[t(571)])), this[t(2020)](x) !== ae[t(1730)]) {
      const n = this[t(556)](x);
      return X(n, { code: Z.invalid_type, expected: ae[t(1730)], received: n[t(2966)] }), he;
    }
    let e;
    const s = new e0();
    for (const n of this[t(594)][t(2078)])
      n[t(2566)] === t(2837) ? !qe[t(2510)](x[t(571)]) && (e = this[t(556)](x, e), X(e, { code: Z.invalid_type, expected: "integer", received: t(2376), message: n[t(2732)] }), s[t(2906)]()) : n[t(2566)] === t(2310) ? (n[t(797)] ? x[t(571)] < n.value : x.data <= n.value) && (e = this._getOrReturnCtx(x, e), X(e, { code: Z[t(2302)], minimum: n.value, type: t(1730), inclusive: n[t(797)], exact: !1, message: n[t(2732)] }), s[t(2906)]()) : n[t(2566)] === "max" ? (n[t(797)] ? x[t(571)] > n.value : x[t(571)] >= n[t(2398)]) && (e = this[t(556)](x, e), X(e, { code: Z[t(554)], maximum: n[t(2398)], type: t(1730), inclusive: n[t(797)], exact: !1, message: n.message }), s[t(2906)]()) : n[t(2566)] === t(2570) ? bo(x.data, n.value) !== 0 && (e = this[t(556)](x, e), X(e, { code: Z.not_multiple_of, multipleOf: n[t(2398)], message: n[t(2732)] }), s.dirty()) : n[t(2566)] === t(381) ? !Number[t(871)](x.data) && (e = this[t(556)](x, e), X(e, { code: Z[t(2358)], message: n[t(2732)] }), s[t(2906)]()) : qe.assertNever(n);
    return { status: s.value, value: x[t(571)] };
  }
  [a(794)](x, t) {
    const r = a;
    return this[r(689)]("min", x, !0, ne[r(1725)](t));
  }
  gt(x, t) {
    const r = a;
    return this[r(689)](r(2310), x, !1, ne.toString(t));
  }
  lte(x, t) {
    const r = a;
    return this[r(689)](r(544), x, !0, ne[r(1725)](t));
  }
  lt(x, t) {
    const r = a;
    return this[r(689)](r(544), x, !1, ne.toString(t));
  }
  [a(689)](x, t, r, e) {
    const s = a;
    return new B0({ ...this[s(594)], checks: [...this._def[s(2078)], { kind: x, value: t, inclusive: r, message: ne[s(1725)](e) }] });
  }
  _addCheck(x) {
    const t = a;
    return new B0({ ...this[t(594)], checks: [...this[t(594)][t(2078)], x] });
  }
  [a(2837)](x) {
    const t = a;
    return this[t(1561)]({ kind: t(2837), message: ne[t(1725)](x) });
  }
  positive(x) {
    const t = a;
    return this[t(1561)]({ kind: t(2310), value: 0, inclusive: !1, message: ne[t(1725)](x) });
  }
  negative(x) {
    const t = a;
    return this[t(1561)]({ kind: t(544), value: 0, inclusive: !1, message: ne[t(1725)](x) });
  }
  [a(1035)](x) {
    const t = a;
    return this[t(1561)]({ kind: t(544), value: 0, inclusive: !0, message: ne[t(1725)](x) });
  }
  [a(2858)](x) {
    const t = a;
    return this[t(1561)]({ kind: t(2310), value: 0, inclusive: !0, message: ne.toString(x) });
  }
  [a(2570)](x, t) {
    const r = a;
    return this[r(1561)]({ kind: r(2570), value: x, message: ne.toString(t) });
  }
  [a(381)](x) {
    const t = a;
    return this[t(1561)]({ kind: t(381), message: ne[t(1725)](x) });
  }
  safe(x) {
    const t = a;
    return this[t(1561)]({ kind: t(2310), inclusive: !0, value: Number.MIN_SAFE_INTEGER, message: ne.toString(x) })[t(1561)]({ kind: t(544), inclusive: !0, value: Number[t(417)], message: ne[t(1725)](x) });
  }
  get [a(2591)]() {
    const x = a;
    let t = null;
    for (const r of this[x(594)].checks)
      r[x(2566)] === "min" && (t === null || r.value > t) && (t = r[x(2398)]);
    return t;
  }
  get [a(2368)]() {
    const x = a;
    let t = null;
    for (const r of this[x(594)][x(2078)])
      r.kind === x(544) && (t === null || r[x(2398)] < t) && (t = r[x(2398)]);
    return t;
  }
  get [a(2308)]() {
    const x = a;
    return !!this._def[x(2078)][x(1801)]((t) => t[x(2566)] === x(2837) || t[x(2566)] === x(2570) && qe[x(2510)](t[x(2398)]));
  }
  get [a(871)]() {
    const x = a;
    let t = null, r = null;
    for (const e of this._def.checks) {
      if (e[x(2566)] === x(381) || e[x(2566)] === "int" || e.kind === x(2570)) return !0;
      e[x(2566)] === x(2310) ? (r === null || e[x(2398)] > r) && (r = e[x(2398)]) : e[x(2566)] === "max" && (t === null || e[x(2398)] < t) && (t = e[x(2398)]);
    }
    return Number[x(871)](r) && Number[x(871)](t);
  }
}
B0[a(1468)] = (o) => {
  const x = a;
  return new B0({ checks: [], typeName: pe[x(483)], coerce: (o == null ? void 0 : o[x(2480)]) || !1, ...ye(o) });
};
class tx extends Ee {
  constructor() {
    const x = a;
    super(...arguments), this.min = this[x(794)], this[x(544)] = this[x(2393)];
  }
  [a(1948)](x) {
    const t = a;
    if (this._def[t(2480)]) try {
      x.data = BigInt(x.data);
    } catch {
      return this[t(971)](x);
    }
    if (this[t(2020)](x) !== ae[t(1540)]) return this[t(971)](x);
    let e;
    const s = new e0();
    for (const n of this[t(594)][t(2078)])
      n[t(2566)] === t(2310) ? (n[t(797)] ? x.data < n[t(2398)] : x[t(571)] <= n[t(2398)]) && (e = this[t(556)](x, e), X(e, { code: Z[t(2302)], type: t(1540), minimum: n[t(2398)], inclusive: n[t(797)], message: n.message }), s[t(2906)]()) : n[t(2566)] === "max" ? (n[t(797)] ? x[t(571)] > n[t(2398)] : x[t(571)] >= n[t(2398)]) && (e = this[t(556)](x, e), X(e, { code: Z[t(554)], type: "bigint", maximum: n.value, inclusive: n.inclusive, message: n[t(2732)] }), s[t(2906)]()) : n[t(2566)] === t(2570) ? x[t(571)] % n.value !== BigInt(0) && (e = this[t(556)](x, e), X(e, { code: Z[t(1826)], multipleOf: n[t(2398)], message: n[t(2732)] }), s.dirty()) : qe.assertNever(n);
    return { status: s[t(2398)], value: x[t(571)] };
  }
  [a(971)](x) {
    const t = a, r = this._getOrReturnCtx(x);
    return X(r, { code: Z.invalid_type, expected: ae[t(1540)], received: r.parsedType }), he;
  }
  [a(794)](x, t) {
    const r = a;
    return this[r(689)](r(2310), x, !0, ne[r(1725)](t));
  }
  gt(x, t) {
    return this.setLimit("min", x, !1, ne.toString(t));
  }
  lte(x, t) {
    const r = a;
    return this.setLimit(r(544), x, !0, ne[r(1725)](t));
  }
  lt(x, t) {
    const r = a;
    return this.setLimit(r(544), x, !1, ne[r(1725)](t));
  }
  [a(689)](x, t, r, e) {
    const s = a;
    return new tx({ ...this[s(594)], checks: [...this[s(594)].checks, { kind: x, value: t, inclusive: r, message: ne[s(1725)](e) }] });
  }
  [a(1561)](x) {
    const t = a;
    return new tx({ ...this[t(594)], checks: [...this[t(594)].checks, x] });
  }
  [a(516)](x) {
    const t = a;
    return this[t(1561)]({ kind: t(2310), value: BigInt(0), inclusive: !1, message: ne[t(1725)](x) });
  }
  [a(1580)](x) {
    const t = a;
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !1, message: ne[t(1725)](x) });
  }
  [a(1035)](x) {
    const t = a;
    return this._addCheck({ kind: t(544), value: BigInt(0), inclusive: !0, message: ne.toString(x) });
  }
  [a(2858)](x) {
    const t = a;
    return this[t(1561)]({ kind: "min", value: BigInt(0), inclusive: !0, message: ne[t(1725)](x) });
  }
  [a(2570)](x, t) {
    const r = a;
    return this[r(1561)]({ kind: r(2570), value: x, message: ne[r(1725)](t) });
  }
  get minValue() {
    const x = a;
    let t = null;
    for (const r of this[x(594)][x(2078)])
      r[x(2566)] === x(2310) && (t === null || r[x(2398)] > t) && (t = r[x(2398)]);
    return t;
  }
  get [a(2368)]() {
    const x = a;
    let t = null;
    for (const r of this[x(594)][x(2078)])
      r.kind === "max" && (t === null || r.value < t) && (t = r[x(2398)]);
    return t;
  }
}
tx[a(1468)] = (o) => {
  const x = a;
  return new tx({ checks: [], typeName: pe[x(2601)], coerce: (o == null ? void 0 : o.coerce) ?? !1, ...ye(o) });
};
class Ht extends Ee {
  [a(1948)](x) {
    const t = a;
    if (this[t(594)][t(2480)] && (x[t(571)] = !!x.data), this[t(2020)](x) !== ae.boolean) {
      const e = this[t(556)](x);
      return X(e, { code: Z.invalid_type, expected: ae.boolean, received: e[t(2966)] }), he;
    }
    return a0(x[t(571)]);
  }
}
Ht.create = (o) => {
  const x = a;
  return new Ht({ typeName: pe[x(2955)], coerce: (o == null ? void 0 : o[x(2480)]) || !1, ...ye(o) });
};
class gx extends Ee {
  [a(1948)](x) {
    const t = a;
    if (this._def[t(2480)] && (x[t(571)] = new Date(x[t(571)])), this[t(2020)](x) !== ae[t(1457)]) {
      const n = this[t(556)](x);
      return X(n, { code: Z.invalid_type, expected: ae.date, received: n[t(2966)] }), he;
    }
    if (Number[t(1497)](x.data[t(936)]())) {
      const n = this[t(556)](x);
      return X(n, { code: Z[t(1877)] }), he;
    }
    const e = new e0();
    let s;
    for (const n of this[t(594)][t(2078)])
      n[t(2566)] === t(2310) ? x[t(571)][t(936)]() < n[t(2398)] && (s = this[t(556)](x, s), X(s, { code: Z[t(2302)], message: n[t(2732)], inclusive: !0, exact: !1, minimum: n[t(2398)], type: t(1457) }), e[t(2906)]()) : n[t(2566)] === t(544) ? x[t(571)].getTime() > n[t(2398)] && (s = this[t(556)](x, s), X(s, { code: Z[t(554)], message: n[t(2732)], inclusive: !0, exact: !1, maximum: n[t(2398)], type: t(1457) }), e.dirty()) : qe[t(696)](n);
    return { status: e.value, value: new Date(x.data[t(936)]()) };
  }
  [a(1561)](x) {
    return new gx({ ...this._def, checks: [...this._def.checks, x] });
  }
  [a(2310)](x, t) {
    const r = a;
    return this[r(1561)]({ kind: "min", value: x[r(936)](), message: ne[r(1725)](t) });
  }
  max(x, t) {
    const r = a;
    return this[r(1561)]({ kind: r(544), value: x.getTime(), message: ne[r(1725)](t) });
  }
  get [a(949)]() {
    const x = a;
    let t = null;
    for (const r of this[x(594)][x(2078)])
      r[x(2566)] === x(2310) && (t === null || r[x(2398)] > t) && (t = r[x(2398)]);
    return t != null ? new Date(t) : null;
  }
  get [a(2888)]() {
    const x = a;
    let t = null;
    for (const r of this._def.checks)
      r[x(2566)] === x(544) && (t === null || r[x(2398)] < t) && (t = r[x(2398)]);
    return t != null ? new Date(t) : null;
  }
}
gx[a(1468)] = (o) => {
  const x = a;
  return new gx({ checks: [], coerce: (o == null ? void 0 : o[x(2480)]) || !1, typeName: pe.ZodDate, ...ye(o) });
};
class Ta extends Ee {
  [a(1948)](x) {
    const t = a;
    if (this[t(2020)](x) !== ae.symbol) {
      const e = this[t(556)](x);
      return X(e, { code: Z.invalid_type, expected: ae.symbol, received: e.parsedType }), he;
    }
    return a0(x.data);
  }
}
Ta.create = (o) => {
  const x = a;
  return new Ta({ typeName: pe[x(520)], ...ye(o) });
};
class zt extends Ee {
  [a(1948)](x) {
    const t = a;
    if (this[t(2020)](x) !== ae.undefined) {
      const e = this[t(556)](x);
      return X(e, { code: Z.invalid_type, expected: ae.undefined, received: e[t(2966)] }), he;
    }
    return a0(x[t(571)]);
  }
}
zt.create = (o) => {
  const x = a;
  return new zt({ typeName: pe[x(2992)], ...ye(o) });
};
class Vt extends Ee {
  _parse(x) {
    const t = a;
    if (this._getType(x) !== ae[t(2973)]) {
      const e = this._getOrReturnCtx(x);
      return X(e, { code: Z.invalid_type, expected: ae[t(2973)], received: e[t(2966)] }), he;
    }
    return a0(x[t(571)]);
  }
}
Vt[a(1468)] = (o) => new Vt({ typeName: pe.ZodNull, ...ye(o) });
class ax extends Ee {
  constructor() {
    const x = a;
    super(...arguments), this[x(2672)] = !0;
  }
  [a(1948)](x) {
    return a0(x[a(571)]);
  }
}
ax.create = (o) => {
  const x = a;
  return new ax({ typeName: pe[x(1206)], ...ye(o) });
};
class Bt extends Ee {
  constructor() {
    const x = a;
    super(...arguments), this[x(732)] = !0;
  }
  _parse(x) {
    return a0(x.data);
  }
}
Bt[a(1468)] = (o) => {
  const x = a;
  return new Bt({ typeName: pe[x(924)], ...ye(o) });
};
class C0 extends Ee {
  [a(1948)](x) {
    const t = a, r = this[t(556)](x);
    return X(r, { code: Z[t(1947)], expected: ae[t(2631)], received: r[t(2966)] }), he;
  }
}
C0[a(1468)] = (o) => new C0({ typeName: pe.ZodNever, ...ye(o) });
class Zt extends Ee {
  [a(1948)](x) {
    const t = a;
    if (this[t(2020)](x) !== ae.undefined) {
      const e = this[t(556)](x);
      return X(e, { code: Z[t(1947)], expected: ae[t(2003)], received: e[t(2966)] }), he;
    }
    return a0(x[t(571)]);
  }
}
Zt[a(1468)] = (o) => {
  const x = a;
  return new Zt({ typeName: pe[x(2137)], ...ye(o) });
};
class h0 extends Ee {
  _parse(x) {
    const t = a, { ctx: r, status: e } = this[t(1225)](x), s = this[t(594)];
    if (r[t(2966)] !== ae[t(1517)]) return X(r, { code: Z[t(1947)], expected: ae[t(1517)], received: r[t(2966)] }), he;
    if (s[t(2768)] !== null) {
      const i = r[t(571)].length > s.exactLength[t(2398)], c = r.data[t(2910)] < s.exactLength[t(2398)];
      (i || c) && (X(r, { code: i ? Z.too_big : Z[t(2302)], minimum: c ? s[t(2768)][t(2398)] : void 0, maximum: i ? s[t(2768)][t(2398)] : void 0, type: t(1517), inclusive: !0, exact: !0, message: s[t(2768)].message }), e.dirty());
    }
    if (s[t(2694)] !== null && r[t(571)].length < s[t(2694)].value && (X(r, { code: Z[t(2302)], minimum: s[t(2694)][t(2398)], type: t(1517), inclusive: !0, exact: !1, message: s.minLength[t(2732)] }), e[t(2906)]()), s[t(496)] !== null && r[t(571)][t(2910)] > s[t(496)][t(2398)] && (X(r, { code: Z[t(554)], maximum: s[t(496)].value, type: t(1517), inclusive: !0, exact: !1, message: s.maxLength.message }), e[t(2906)]()), r.common[t(372)]) return Promise[t(2264)]([...r[t(571)]].map((i, c) => {
      const d = t;
      return s.type._parseAsync(new p0(r, i, r[d(2075)], c));
    }))[t(857)]((i) => e0[t(2314)](e, i));
    const n = [...r[t(571)]].map((i, c) => {
      const d = t;
      return s[d(506)][d(1284)](new p0(r, i, r.path, c));
    });
    return e0[t(2314)](e, n);
  }
  get [a(1161)]() {
    const x = a;
    return this._def[x(506)];
  }
  [a(2310)](x, t) {
    const r = a;
    return new h0({ ...this[r(594)], minLength: { value: x, message: ne[r(1725)](t) } });
  }
  [a(544)](x, t) {
    const r = a;
    return new h0({ ...this._def, maxLength: { value: x, message: ne[r(1725)](t) } });
  }
  [a(2910)](x, t) {
    const r = a;
    return new h0({ ...this[r(594)], exactLength: { value: x, message: ne[r(1725)](t) } });
  }
  [a(2647)](x) {
    return this.min(1, x);
  }
}
h0[a(1468)] = (o, x) => new h0({ type: o, minLength: null, maxLength: null, exactLength: null, typeName: pe.ZodArray, ...ye(x) });
function H0(o) {
  const x = a;
  if (o instanceof We) {
    const t = {};
    for (const r in o[x(1798)]) {
      const e = o[x(1798)][r];
      t[r] = w0[x(1468)](H0(e));
    }
    return new We({ ...o[x(594)], shape: () => t });
  } else
    return o instanceof h0 ? new h0({ ...o[x(594)], type: H0(o[x(1161)]) }) : o instanceof w0 ? w0[x(1468)](H0(o[x(965)]())) : o instanceof j0 ? j0[x(1468)](H0(o[x(965)]())) : o instanceof O0 ? O0[x(1468)](o[x(1141)][x(1429)]((t) => H0(t))) : o;
}
class We extends Ee {
  constructor() {
    const x = a;
    super(...arguments), this[x(386)] = null, this[x(1787)] = this[x(2829)], this[x(2611)] = this[x(1393)];
  }
  _getCached() {
    const x = a;
    if (this._cached !== null) return this[x(386)];
    const t = this._def[x(1798)](), r = qe[x(2656)](t);
    return this[x(386)] = { shape: t, keys: r }, this[x(386)];
  }
  [a(1948)](x) {
    const t = a;
    if (this[t(2020)](x) !== ae[t(2517)]) {
      const u = this[t(556)](x);
      return X(u, { code: Z[t(1947)], expected: ae[t(2517)], received: u[t(2966)] }), he;
    }
    const { status: e, ctx: s } = this._processInputParams(x), { shape: n, keys: i } = this[t(1695)](), c = [];
    if (!(this[t(594)][t(1931)] instanceof C0 && this._def[t(3033)] === "strip")) for (const u in s[t(571)])
      !i[t(416)](u) && c[t(816)](u);
    const d = [];
    for (const u of i) {
      const l = n[u], f = s[t(571)][u];
      d[t(816)]({ key: { status: t(1694), value: u }, value: l._parse(new p0(s, f, s.path, u)), alwaysSet: u in s.data });
    }
    if (this[t(594)][t(1931)] instanceof C0) {
      const u = this[t(594)][t(3033)];
      if (u === "passthrough") for (const l of c)
        d[t(816)]({ key: { status: t(1694), value: l }, value: { status: "valid", value: s[t(571)][l] } });
      else if (u === "strict") c[t(2910)] > 0 && (X(s, { code: Z[t(1188)], keys: c }), e[t(2906)]());
      else if (u !== t(1610)) throw new Error(t(2483));
    } else {
      const u = this[t(594)][t(1931)];
      for (const l of c) {
        const f = s[t(571)][l];
        d[t(816)]({ key: { status: t(1694), value: l }, value: u._parse(new p0(s, f, s.path, l)), alwaysSet: l in s[t(571)] });
      }
    }
    return s[t(1037)][t(372)] ? Promise[t(510)]()[t(857)](async () => {
      const u = t, l = [];
      for (const f of d) {
        const b = await f[u(1741)], h = await f.value;
        l[u(816)]({ key: b, value: h, alwaysSet: f.alwaysSet });
      }
      return l;
    })[t(857)]((u) => e0.mergeObjectSync(e, u)) : e0[t(2463)](e, d);
  }
  get [a(1798)]() {
    const x = a;
    return this[x(594)][x(1798)]();
  }
  [a(426)](x) {
    const t = a;
    return ne.errToObj, new We({ ...this[t(594)], unknownKeys: "strict", ...x !== void 0 ? { errorMap: (r, e) => {
      var i, c;
      const s = t, n = ((c = (i = this._def).errorMap) == null ? void 0 : c.call(i, r, e)[s(2732)]) ?? e[s(984)];
      return r[s(3068)] === s(1188) ? { message: ne[s(1770)](x)[s(2732)] ?? n } : { message: n };
    } } : {} });
  }
  [a(1610)]() {
    const x = a;
    return new We({ ...this._def, unknownKeys: x(1610) });
  }
  [a(2829)]() {
    const x = a;
    return new We({ ...this[x(594)], unknownKeys: x(2829) });
  }
  [a(1393)](x) {
    const t = a;
    return new We({ ...this._def, shape: () => ({ ...this[t(594)][t(1798)](), ...x }) });
  }
  [a(585)](x) {
    const t = a;
    return new We({ unknownKeys: x[t(594)][t(3033)], catchall: x._def[t(1931)], shape: () => ({ ...this[t(594)][t(1798)](), ...x[t(594)][t(1798)]() }), typeName: pe[t(440)] });
  }
  setKey(x, t) {
    return this[a(2611)]({ [x]: t });
  }
  [a(1931)](x) {
    const t = a;
    return new We({ ...this[t(594)], catchall: x });
  }
  [a(2327)](x) {
    const t = a, r = {};
    for (const e of qe[t(2656)](x))
      x[e] && this.shape[e] && (r[e] = this[t(1798)][e]);
    return new We({ ...this._def, shape: () => r });
  }
  omit(x) {
    const t = a, r = {};
    for (const e of qe[t(2656)](this[t(1798)]))
      !x[e] && (r[e] = this[t(1798)][e]);
    return new We({ ...this._def, shape: () => r });
  }
  [a(2502)]() {
    return H0(this);
  }
  [a(1883)](x) {
    const t = a, r = {};
    for (const e of qe[t(2656)](this.shape)) {
      const s = this.shape[e];
      x && !x[e] ? r[e] = s : r[e] = s[t(1712)]();
    }
    return new We({ ...this[t(594)], shape: () => r });
  }
  required(x) {
    const t = a, r = {};
    for (const e of qe[t(2656)](this[t(1798)]))
      if (x && !x[e]) r[e] = this[t(1798)][e];
      else {
        let n = this[t(1798)][e];
        for (; n instanceof w0; )
          n = n[t(594)][t(2441)];
        r[e] = n;
      }
    return new We({ ...this._def, shape: () => r });
  }
  [a(2144)]() {
    const x = a;
    return Vs(qe.objectKeys(this[x(1798)]));
  }
}
We[a(1468)] = (o, x) => {
  const t = a;
  return new We({ shape: () => o, unknownKeys: t(1610), catchall: C0[t(1468)](), typeName: pe[t(440)], ...ye(x) });
}, We.strictCreate = (o, x) => {
  const t = a;
  return new We({ shape: () => o, unknownKeys: t(426), catchall: C0[t(1468)](), typeName: pe.ZodObject, ...ye(x) });
}, We[a(2424)] = (o, x) => {
  const t = a;
  return new We({ shape: o, unknownKeys: t(1610), catchall: C0.create(), typeName: pe.ZodObject, ...ye(x) });
};
class yx extends Ee {
  [a(1948)](x) {
    const t = a, { ctx: r } = this[t(1225)](x), e = this[t(594)][t(961)];
    function s(n) {
      const i = t;
      for (const d of n)
        if (d[i(2712)][i(735)] === "valid") return d[i(2712)];
      for (const d of n)
        if (d.result[i(735)] === "dirty") return r[i(1037)][i(1989)][i(816)](...d[i(1650)].common.issues), d[i(2712)];
      const c = n[i(1429)]((d) => new k0(d[i(1650)][i(1037)][i(1989)]));
      return X(r, { code: Z[i(1967)], unionErrors: c }), he;
    }
    if (r.common[t(372)]) return Promise[t(2264)](e[t(1429)](async (n) => {
      const i = t, c = { ...r, common: { ...r[i(1037)], issues: [] }, parent: null };
      return { result: await n._parseAsync({ data: r[i(571)], path: r[i(2075)], parent: c }), ctx: c };
    }))[t(857)](s);
    {
      let n;
      const i = [];
      for (const d of e) {
        const u = { ...r, common: { ...r[t(1037)], issues: [] }, parent: null }, l = d._parseSync({ data: r[t(571)], path: r[t(2075)], parent: u });
        if (l[t(735)] === t(1694)) return l;
        l.status === t(2906) && !n && (n = { result: l, ctx: u }), u[t(1037)].issues[t(2910)] && i[t(816)](u[t(1037)][t(1989)]);
      }
      if (n) return r[t(1037)][t(1989)][t(816)](...n.ctx[t(1037)][t(1989)]), n[t(2712)];
      const c = i[t(1429)]((d) => new k0(d));
      return X(r, { code: Z[t(1967)], unionErrors: c }), he;
    }
  }
  get [a(961)]() {
    const x = a;
    return this[x(594)][x(961)];
  }
}
yx.create = (o, x) => {
  const t = a;
  return new yx({ options: o, typeName: pe[t(1251)], ...ye(x) });
};
const g0 = (o) => {
  const x = a;
  return o instanceof Kt ? g0(o[x(1346)]) : o instanceof A0 ? g0(o[x(2441)]()) : o instanceof Sx ? [o[x(2398)]] : o instanceof D0 ? o[x(961)] : o instanceof Gt ? qe.objectValues(o[x(1662)]) : o instanceof Px ? g0(o[x(594)].innerType) : o instanceof zt ? [void 0] : o instanceof Vt ? [null] : o instanceof w0 ? [void 0, ...g0(o[x(965)]())] : o instanceof j0 ? [null, ...g0(o[x(965)]())] : o instanceof Bs || o instanceof Ex ? g0(o[x(965)]()) : o instanceof Ix ? g0(o[x(594)][x(2441)]) : [];
};
class na extends Ee {
  [a(1948)](x) {
    const t = a, { ctx: r } = this[t(1225)](x);
    if (r[t(2966)] !== ae[t(2517)]) return X(r, { code: Z.invalid_type, expected: ae[t(2517)], received: r[t(2966)] }), he;
    const e = this[t(2471)], s = r[t(571)][e], n = this[t(2265)][t(2620)](s);
    return n ? r[t(1037)][t(372)] ? n._parseAsync({ data: r[t(571)], path: r[t(2075)], parent: r }) : n[t(1284)]({ data: r[t(571)], path: r[t(2075)], parent: r }) : (X(r, { code: Z[t(1074)], options: Array[t(2725)](this[t(2265)][t(548)]()), path: [e] }), he);
  }
  get discriminator() {
    return this[a(594)].discriminator;
  }
  get [a(961)]() {
    const x = a;
    return this[x(594)][x(961)];
  }
  get [a(2265)]() {
    const x = a;
    return this[x(594)][x(2265)];
  }
  static [a(1468)](x, t, r) {
    const e = a, s = /* @__PURE__ */ new Map();
    for (const n of t) {
      const i = g0(n.shape[x]);
      if (!i.length) throw new Error("A discriminator value for key `" + x + "` could not be extracted from all schema options");
      for (const c of i) {
        if (s[e(2239)](c)) throw new Error("Discriminator property " + String(x) + e(2352) + String(c));
        s.set(c, n);
      }
    }
    return new na({ typeName: pe.ZodDiscriminatedUnion, discriminator: x, options: t, optionsMap: s, ...ye(r) });
  }
}
function Wt(o, x) {
  const t = a, r = I0(o), e = I0(x);
  if (o === x) return { valid: !0, data: o };
  if (r === ae.object && e === ae[t(2517)]) {
    const s = qe.objectKeys(x), n = qe[t(2656)](o)[t(2951)]((c) => s[t(1316)](c) !== -1), i = { ...o, ...x };
    for (const c of n) {
      const d = Wt(o[c], x[c]);
      if (!d[t(1694)]) return { valid: !1 };
      i[c] = d[t(571)];
    }
    return { valid: !0, data: i };
  } else if (r === ae[t(1517)] && e === ae.array) {
    if (o[t(2910)] !== x[t(2910)]) return { valid: !1 };
    const s = [];
    for (let n = 0; n < o[t(2910)]; n++) {
      const i = o[n], c = x[n], d = Wt(i, c);
      if (!d[t(1694)]) return { valid: !1 };
      s[t(816)](d.data);
    }
    return { valid: !0, data: s };
  } else return r === ae[t(1457)] && e === ae[t(1457)] && +o == +x ? { valid: !0, data: o } : { valid: !1 };
}
class vx extends Ee {
  [a(1948)](x) {
    const t = a, { status: r, ctx: e } = this[t(1225)](x), s = (n, i) => {
      const c = t;
      if (Fa(n) || Fa(i)) return he;
      const d = Wt(n[c(2398)], i[c(2398)]);
      return d[c(1694)] ? ((Na(n) || Na(i)) && r[c(2906)](), { status: r[c(2398)], value: d[c(571)] }) : (X(e, { code: Z.invalid_intersection_types }), he);
    };
    return e[t(1037)][t(372)] ? Promise[t(2264)]([this[t(594)][t(2099)]._parseAsync({ data: e[t(571)], path: e[t(2075)], parent: e }), this._def[t(1809)][t(2893)]({ data: e[t(571)], path: e[t(2075)], parent: e })])[t(857)](([n, i]) => s(n, i)) : s(this._def.left[t(1284)]({ data: e[t(571)], path: e[t(2075)], parent: e }), this[t(594)][t(1809)]._parseSync({ data: e[t(571)], path: e[t(2075)], parent: e }));
  }
}
vx.create = (o, x, t) => {
  const r = a;
  return new vx({ left: o, right: x, typeName: pe[r(1444)], ...ye(t) });
};
class O0 extends Ee {
  [a(1948)](x) {
    const t = a, { status: r, ctx: e } = this[t(1225)](x);
    if (e.parsedType !== ae[t(1517)]) return X(e, { code: Z[t(1947)], expected: ae[t(1517)], received: e.parsedType }), he;
    if (e[t(571)][t(2910)] < this[t(594)][t(1141)].length) return X(e, { code: Z[t(2302)], minimum: this[t(594)][t(1141)].length, inclusive: !0, exact: !1, type: t(1517) }), he;
    !this[t(594)][t(2433)] && e.data[t(2910)] > this[t(594)].items.length && (X(e, { code: Z[t(554)], maximum: this[t(594)][t(1141)].length, inclusive: !0, exact: !1, type: t(1517) }), r[t(2906)]());
    const n = [...e[t(571)]][t(1429)]((i, c) => {
      const d = t, u = this._def[d(1141)][c] || this[d(594)].rest;
      return u ? u._parse(new p0(e, i, e[d(2075)], c)) : null;
    })[t(2951)]((i) => !!i);
    return e.common.async ? Promise[t(2264)](n)[t(857)]((i) => e0[t(2314)](r, i)) : e0[t(2314)](r, n);
  }
  get [a(1141)]() {
    const x = a;
    return this[x(594)][x(1141)];
  }
  [a(2433)](x) {
    return new O0({ ...this._def, rest: x });
  }
}
O0[a(1468)] = (o, x) => {
  const t = a;
  if (!Array[t(2573)](o)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new O0({ items: o, typeName: pe[t(1210)], rest: null, ...ye(x) });
};
class wx extends Ee {
  get [a(2783)]() {
    return this[a(594)].keyType;
  }
  get [a(1060)]() {
    const x = a;
    return this[x(594)][x(1263)];
  }
  [a(1948)](x) {
    const t = a, { status: r, ctx: e } = this[t(1225)](x);
    if (e[t(2966)] !== ae.object) return X(e, { code: Z[t(1947)], expected: ae.object, received: e[t(2966)] }), he;
    const s = [], n = this[t(594)][t(3034)], i = this[t(594)][t(1263)];
    for (const c in e[t(571)])
      s[t(816)]({ key: n._parse(new p0(e, c, e.path, c)), value: i[t(1948)](new p0(e, e[t(571)][c], e[t(2075)], c)), alwaysSet: c in e.data });
    return e.common[t(372)] ? e0[t(1535)](r, s) : e0[t(2463)](r, s);
  }
  get [a(1161)]() {
    return this[a(594)].valueType;
  }
  static [a(1468)](x, t, r) {
    const e = a;
    return t instanceof Ee ? new wx({ keyType: x, valueType: t, typeName: pe.ZodRecord, ...ye(r) }) : new wx({ keyType: v0[e(1468)](), valueType: x, typeName: pe[e(957)], ...ye(t) });
  }
}
class Aa extends Ee {
  get keySchema() {
    const x = a;
    return this[x(594)][x(3034)];
  }
  get valueSchema() {
    return this[a(594)].valueType;
  }
  [a(1948)](x) {
    const t = a, { status: r, ctx: e } = this._processInputParams(x);
    if (e[t(2966)] !== ae[t(1429)]) return X(e, { code: Z[t(1947)], expected: ae[t(1429)], received: e[t(2966)] }), he;
    const s = this[t(594)][t(3034)], n = this[t(594)][t(1263)], i = [...e[t(571)][t(807)]()][t(1429)](([c, d], u) => {
      const l = t;
      return { key: s._parse(new p0(e, c, e[l(2075)], [u, l(1741)])), value: n[l(1948)](new p0(e, d, e.path, [u, l(2398)])) };
    });
    if (e[t(1037)][t(372)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise[t(510)]()[t(857)](async () => {
        const d = t;
        for (const u of i) {
          const l = await u.key, f = await u[d(2398)];
          if (l[d(735)] === d(930) || f[d(735)] === d(930)) return he;
          (l[d(735)] === "dirty" || f.status === "dirty") && r[d(2906)](), c[d(2454)](l[d(2398)], f[d(2398)]);
        }
        return { status: r.value, value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const d of i) {
        const u = d[t(1741)], l = d.value;
        if (u[t(735)] === t(930) || l[t(735)] === t(930)) return he;
        (u.status === t(2906) || l[t(735)] === t(2906)) && r[t(2906)](), c[t(2454)](u[t(2398)], l[t(2398)]);
      }
      return { status: r[t(2398)], value: c };
    }
  }
}
Aa[a(1468)] = (o, x, t) => new Aa({ valueType: x, keyType: o, typeName: pe.ZodMap, ...ye(t) });
class rx extends Ee {
  [a(1948)](x) {
    const t = a, { status: r, ctx: e } = this._processInputParams(x);
    if (e[t(2966)] !== ae[t(2454)]) return X(e, { code: Z[t(1947)], expected: ae[t(2454)], received: e[t(2966)] }), he;
    const s = this[t(594)];
    s[t(2549)] !== null && e.data[t(2873)] < s.minSize[t(2398)] && (X(e, { code: Z[t(2302)], minimum: s[t(2549)][t(2398)], type: "set", inclusive: !0, exact: !1, message: s[t(2549)][t(2732)] }), r[t(2906)]()), s.maxSize !== null && e.data[t(2873)] > s[t(3001)][t(2398)] && (X(e, { code: Z[t(554)], maximum: s[t(3001)][t(2398)], type: t(2454), inclusive: !0, exact: !1, message: s.maxSize[t(2732)] }), r[t(2906)]());
    const n = this[t(594)][t(1263)];
    function i(d) {
      const u = t, l = /* @__PURE__ */ new Set();
      for (const f of d) {
        if (f.status === u(930)) return he;
        f[u(735)] === u(2906) && r[u(2906)](), l[u(1604)](f[u(2398)]);
      }
      return { status: r.value, value: l };
    }
    const c = [...e[t(571)][t(2323)]()][t(1429)]((d, u) => n[t(1948)](new p0(e, d, e[t(2075)], u)));
    return e.common[t(372)] ? Promise[t(2264)](c).then((d) => i(d)) : i(c);
  }
  [a(2310)](x, t) {
    const r = a;
    return new rx({ ...this._def, minSize: { value: x, message: ne[r(1725)](t) } });
  }
  [a(544)](x, t) {
    const r = a;
    return new rx({ ...this[r(594)], maxSize: { value: x, message: ne[r(1725)](t) } });
  }
  [a(2873)](x, t) {
    const r = a;
    return this[r(2310)](x, t)[r(544)](x, t);
  }
  nonempty(x) {
    return this[a(2310)](1, x);
  }
}
rx[a(1468)] = (o, x) => {
  const t = a;
  return new rx({ valueType: o, minSize: null, maxSize: null, typeName: pe[t(1137)], ...ye(x) });
};
class Kt extends Ee {
  get [a(1346)]() {
    const x = a;
    return this[x(594)][x(2217)]();
  }
  _parse(x) {
    const t = a, { ctx: r } = this[t(1225)](x);
    return this[t(594)][t(2217)]()._parse({ data: r[t(571)], path: r[t(2075)], parent: r });
  }
}
Kt.create = (o, x) => new Kt({ getter: o, typeName: pe.ZodLazy, ...ye(x) });
class Sx extends Ee {
  [a(1948)](x) {
    const t = a;
    if (x[t(571)] !== this[t(594)].value) {
      const r = this[t(556)](x);
      return X(r, { received: r.data, code: Z[t(1884)], expected: this[t(594)][t(2398)] }), he;
    }
    return { status: t(1694), value: x[t(571)] };
  }
  get [a(2398)]() {
    const x = a;
    return this[x(594)][x(2398)];
  }
}
Sx[a(1468)] = (o, x) => {
  const t = a;
  return new Sx({ value: o, typeName: pe[t(2799)], ...ye(x) });
};
function Vs(o, x) {
  const t = a;
  return new D0({ values: o, typeName: pe[t(2721)], ...ye(x) });
}
class D0 extends Ee {
  [a(1948)](x) {
    const t = a;
    if (typeof x[t(571)] !== t(1443)) {
      const r = this[t(556)](x), e = this._def[t(2323)];
      return X(r, { expected: qe.joinValues(e), received: r[t(2966)], code: Z[t(1947)] }), he;
    }
    if (!this[t(2952)] && (this[t(2952)] = new Set(this._def[t(2323)])), !this[t(2952)][t(2239)](x[t(571)])) {
      const r = this._getOrReturnCtx(x), e = this[t(594)][t(2323)];
      return X(r, { received: r[t(571)], code: Z[t(1207)], options: e }), he;
    }
    return a0(x.data);
  }
  get [a(961)]() {
    const x = a;
    return this[x(594)][x(2323)];
  }
  get [a(1662)]() {
    const x = a, t = {};
    for (const r of this[x(594)][x(2323)])
      t[r] = r;
    return t;
  }
  get [a(573)]() {
    const x = {};
    for (const t of this._def.values)
      x[t] = t;
    return x;
  }
  get [a(1970)]() {
    const x = a, t = {};
    for (const r of this[x(594)][x(2323)])
      t[r] = r;
    return t;
  }
  extract(x, t = this[a(594)]) {
    const r = a;
    return D0[r(1468)](x, { ...this[r(594)], ...t });
  }
  exclude(x, t = this[a(594)]) {
    const r = a;
    return D0[r(1468)](this.options[r(2951)]((e) => !x[r(416)](e)), { ...this[r(594)], ...t });
  }
}
D0[a(1468)] = Vs;
class Gt extends Ee {
  [a(1948)](x) {
    const t = a, r = qe[t(944)](this[t(594)][t(2323)]), e = this[t(556)](x);
    if (e[t(2966)] !== ae[t(1443)] && e[t(2966)] !== ae[t(1730)]) {
      const s = qe.objectValues(r);
      return X(e, { expected: qe[t(1867)](s), received: e[t(2966)], code: Z[t(1947)] }), he;
    }
    if (!this[t(2952)] && (this[t(2952)] = new Set(qe[t(944)](this._def.values))), !this[t(2952)][t(2239)](x.data)) {
      const s = qe.objectValues(r);
      return X(e, { received: e[t(571)], code: Z[t(1207)], options: s }), he;
    }
    return a0(x.data);
  }
  get [a(1662)]() {
    const x = a;
    return this[x(594)][x(2323)];
  }
}
Gt[a(1468)] = (o, x) => new Gt({ values: o, typeName: pe.ZodNativeEnum, ...ye(x) });
class kx extends Ee {
  [a(965)]() {
    const x = a;
    return this[x(594)][x(506)];
  }
  [a(1948)](x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    if (r.parsedType !== ae.promise && r[t(1037)][t(372)] === !1) return X(r, { code: Z.invalid_type, expected: ae[t(545)], received: r[t(2966)] }), he;
    const e = r[t(2966)] === ae.promise ? r.data : Promise[t(510)](r[t(571)]);
    return a0(e.then((s) => {
      const n = t;
      return this[n(594)][n(506)][n(436)](s, { path: r[n(2075)], errorMap: r[n(1037)][n(2740)] });
    }));
  }
}
kx.create = (o, x) => new kx({ type: o, typeName: pe.ZodPromise, ...ye(x) });
class A0 extends Ee {
  [a(2441)]() {
    const x = a;
    return this[x(594)][x(1346)];
  }
  [a(2542)]() {
    const x = a;
    return this[x(594)][x(1346)][x(594)].typeName === pe[x(2523)] ? this[x(594)][x(1346)][x(2542)]() : this[x(594)].schema;
  }
  _parse(x) {
    const t = a, { status: r, ctx: e } = this[t(1225)](x), s = this[t(594)][t(2738)] || null, n = { addIssue: (i) => {
      const c = t;
      X(e, i), i[c(810)] ? r[c(1973)]() : r.dirty();
    }, get path() {
      return e[t(2075)];
    } };
    if (n[t(2643)] = n[t(2643)].bind(n), s.type === t(879)) {
      const i = s[t(1564)](e.data, n);
      if (e.common.async) return Promise[t(510)](i).then(async (c) => {
        const d = t;
        if (r.value === "aborted") return he;
        const u = await this._def[d(1346)][d(2893)]({ data: c, path: e[d(2075)], parent: e });
        return u[d(735)] === d(930) ? he : u[d(735)] === "dirty" ? Q0(u[d(2398)]) : r.value === d(2906) ? Q0(u.value) : u;
      });
      {
        if (r[t(2398)] === t(930)) return he;
        const c = this._def[t(1346)][t(1284)]({ data: i, path: e.path, parent: e });
        return c[t(735)] === t(930) ? he : c[t(735)] === t(2906) ? Q0(c.value) : r.value === "dirty" ? Q0(c[t(2398)]) : c;
      }
    }
    if (s.type === t(2585)) {
      const i = (c) => {
        const d = t, u = s[d(2585)](c, n);
        if (e[d(1037)][d(372)]) return Promise[d(510)](u);
        if (u instanceof Promise) throw new Error(d(2711));
        return c;
      };
      if (e.common[t(372)] === !1) {
        const c = this[t(594)][t(1346)][t(1284)]({ data: e[t(571)], path: e[t(2075)], parent: e });
        return c[t(735)] === t(930) ? he : (c[t(735)] === t(2906) && r[t(2906)](), i(c[t(2398)]), { status: r[t(2398)], value: c.value });
      } else return this[t(594)][t(1346)][t(2893)]({ data: e[t(571)], path: e[t(2075)], parent: e })[t(857)]((c) => {
        const d = t;
        return c[d(735)] === "aborted" ? he : (c.status === "dirty" && r[d(2906)](), i(c.value).then(() => {
          const u = d;
          return { status: r[u(2398)], value: c[u(2398)] };
        }));
      });
    }
    if (s[t(506)] === t(1564))
      if (e[t(1037)][t(372)] === !1) {
        const i = this[t(594)][t(1346)][t(1284)]({ data: e[t(571)], path: e[t(2075)], parent: e });
        if (!V0(i)) return he;
        const c = s[t(1564)](i[t(2398)], n);
        if (c instanceof Promise) throw new Error(t(3030));
        return { status: r[t(2398)], value: c };
      } else return this._def[t(1346)][t(2893)]({ data: e[t(571)], path: e[t(2075)], parent: e })[t(857)]((i) => {
        const c = t;
        return V0(i) ? Promise[c(510)](s[c(1564)](i[c(2398)], n)).then((d) => ({ status: r[c(2398)], value: d })) : he;
      });
    qe.assertNever(s);
  }
}
A0[a(1468)] = (o, x, t) => new A0({ schema: o, typeName: pe.ZodEffects, effect: x, ...ye(t) }), A0[a(391)] = (o, x, t) => new A0({ schema: x, effect: { type: "preprocess", transform: o }, typeName: pe.ZodEffects, ...ye(t) });
class w0 extends Ee {
  [a(1948)](x) {
    const t = a;
    return this._getType(x) === ae[t(1691)] ? a0(void 0) : this._def[t(2441)][t(1948)](x);
  }
  [a(965)]() {
    const x = a;
    return this[x(594)][x(2441)];
  }
}
w0[a(1468)] = (o, x) => {
  const t = a;
  return new w0({ innerType: o, typeName: pe[t(1341)], ...ye(x) });
};
class j0 extends Ee {
  [a(1948)](x) {
    const t = a;
    return this._getType(x) === ae[t(2973)] ? a0(null) : this[t(594)][t(2441)]._parse(x);
  }
  [a(965)]() {
    return this[a(594)].innerType;
  }
}
j0[a(1468)] = (o, x) => {
  const t = a;
  return new j0({ innerType: o, typeName: pe[t(1924)], ...ye(x) });
};
class Px extends Ee {
  [a(1948)](x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    let e = r[t(571)];
    return r[t(2966)] === ae.undefined && (e = this[t(594)][t(2628)]()), this[t(594)][t(2441)][t(1948)]({ data: e, path: r.path, parent: r });
  }
  removeDefault() {
    const x = a;
    return this._def[x(2441)];
  }
}
Px[a(1468)] = (o, x) => {
  const t = a;
  return new Px({ innerType: o, typeName: pe[t(2954)], defaultValue: typeof x.default == "function" ? x[t(2889)] : () => x[t(2889)], ...ye(x) });
};
class Ix extends Ee {
  [a(1948)](x) {
    const t = a, { ctx: r } = this[t(1225)](x), e = { ...r, common: { ...r.common, issues: [] } }, s = this[t(594)][t(2441)][t(1948)]({ data: e.data, path: e[t(2075)], parent: { ...e } });
    return bx(s) ? s.then((n) => {
      const i = t;
      return { status: i(1694), value: n[i(735)] === i(1694) ? n[i(2398)] : this[i(594)][i(2127)]({ get error() {
        return new k0(e.common.issues);
      }, input: e[i(571)] }) };
    }) : { status: "valid", value: s[t(735)] === t(1694) ? s[t(2398)] : this[t(594)][t(2127)]({ get error() {
      const n = t;
      return new k0(e[n(1037)][n(1989)]);
    }, input: e[t(571)] }) };
  }
  [a(2887)]() {
    const x = a;
    return this[x(594)][x(2441)];
  }
}
Ix[a(1468)] = (o, x) => {
  const t = a;
  return new Ix({ innerType: o, typeName: pe.ZodCatch, catchValue: typeof x[t(1508)] == "function" ? x[t(1508)] : () => x.catch, ...ye(x) });
};
class _a extends Ee {
  [a(1948)](x) {
    const t = a;
    if (this[t(2020)](x) !== ae[t(2184)]) {
      const e = this[t(556)](x);
      return X(e, { code: Z[t(1947)], expected: ae[t(2184)], received: e[t(2966)] }), he;
    }
    return { status: "valid", value: x[t(571)] };
  }
}
_a[a(1468)] = (o) => {
  const x = a;
  return new _a({ typeName: pe[x(2409)], ...ye(o) });
};
class Bs extends Ee {
  [a(1948)](x) {
    const t = a, { ctx: r } = this._processInputParams(x), e = r[t(571)];
    return this[t(594)][t(506)]._parse({ data: e, path: r[t(2075)], parent: r });
  }
  [a(965)]() {
    const x = a;
    return this[x(594)][x(506)];
  }
}
class oa extends Ee {
  [a(1948)](x) {
    const t = a, { status: r, ctx: e } = this[t(1225)](x);
    if (e[t(1037)][t(372)])
      return (async () => {
        const n = t, i = await this[n(594)].in[n(2893)]({ data: e[n(571)], path: e[n(2075)], parent: e });
        return i[n(735)] === n(930) ? he : i[n(735)] === n(2906) ? (r[n(2906)](), Q0(i.value)) : this._def[n(875)][n(2893)]({ data: i[n(2398)], path: e[n(2075)], parent: e });
      })();
    {
      const s = this[t(594)].in[t(1284)]({ data: e[t(571)], path: e[t(2075)], parent: e });
      return s[t(735)] === t(930) ? he : s[t(735)] === t(2906) ? (r[t(2906)](), { status: "dirty", value: s[t(2398)] }) : this[t(594)].out._parseSync({ data: s.value, path: e[t(2075)], parent: e });
    }
  }
  static [a(1468)](x, t) {
    const r = a;
    return new oa({ in: x, out: t, typeName: pe[r(2219)] });
  }
}
function K(o, x) {
  return o = o - 361, Tx()[o];
}
class Ex extends Ee {
  [a(1948)](x) {
    const t = a, r = this[t(594)][t(2441)][t(1948)](x), e = (s) => {
      const n = t;
      return V0(s) && (s.value = Object.freeze(s[n(2398)])), s;
    };
    return bx(r) ? r[t(857)]((s) => e(s)) : e(r);
  }
  [a(965)]() {
    const x = a;
    return this[x(594)][x(2441)];
  }
}
Ex[a(1468)] = (o, x) => new Ex({ innerType: o, typeName: pe.ZodReadonly, ...ye(x) });
function Oa(o, x) {
  const t = a, r = typeof o == "function" ? o(x) : typeof o === t(1443) ? { message: o } : o;
  return typeof r === t(1443) ? { message: r } : r;
}
function go(o, x = {}, t) {
  const r = a;
  return o ? ax[r(1468)]()[r(1566)]((e, s) => {
    const n = r, i = o(e);
    if (i instanceof Promise) return i[n(857)]((c) => {
      const d = n;
      if (!c) {
        const u = Oa(x, e), l = u.fatal ?? t ?? !0;
        s[d(2643)]({ code: d(899), ...u, fatal: l });
      }
    });
    if (!i) {
      const c = Oa(x, e), d = c[n(810)] ?? t ?? !0;
      s[n(2643)]({ code: n(899), ...c, fatal: d });
    }
  }) : ax[r(1468)]();
}
var pe;
(function(o) {
  const x = a;
  o.ZodString = x(1807), o.ZodNumber = x(483), o[x(2409)] = x(2409), o[x(2601)] = x(2601), o[x(2955)] = x(2955), o[x(1146)] = "ZodDate", o[x(520)] = x(520), o[x(2992)] = x(2992), o[x(1637)] = x(1637), o[x(1206)] = x(1206), o[x(924)] = "ZodUnknown", o[x(1629)] = "ZodNever", o[x(2137)] = x(2137), o.ZodArray = x(2112), o[x(440)] = "ZodObject", o[x(1251)] = x(1251), o.ZodDiscriminatedUnion = x(1048), o[x(1444)] = x(1444), o.ZodTuple = x(1210), o[x(957)] = x(957), o.ZodMap = "ZodMap", o[x(1137)] = x(1137), o[x(2576)] = x(2576), o[x(1526)] = x(1526), o[x(2799)] = x(2799), o[x(2721)] = x(2721), o.ZodEffects = x(2523), o[x(2140)] = x(2140), o[x(1341)] = "ZodOptional", o[x(1924)] = x(1924), o[x(2954)] = "ZodDefault", o[x(2698)] = "ZodCatch", o[x(1763)] = "ZodPromise", o[x(2635)] = x(2635), o.ZodPipeline = x(2219), o[x(569)] = x(569);
})(pe || (pe = {}));
const Ux = (o, x = { message: a(1848) + o[a(1907)] }) => go((t) => t instanceof o, x), g = v0[a(1468)], W = B0[a(1468)], ee = Ht[a(1468)], Te = ax[a(1468)], S0 = Bt[a(1468)];
C0[a(1468)];
const Hx = Zt[a(1468)], ve = h0.create, S = We[a(1468)], Ke = yx[a(1468)], Zs = na.create;
vx[a(1468)], O0[a(1468)];
const De = wx[a(1468)], te = Sx[a(1468)], Ie = D0[a(1468)];
kx[a(1468)];
const B = w0[a(1468)];
j0.create;
class yo {
  constructor(x, t) {
    me(this, "graphInstance");
    me(this, "nodeId");
    const r = a;
    this[r(918)] = x, this[r(1441)] = t;
  }
  get [a(2849)]() {
    const x = a, t = this.graphInstance[x(1112)](this.nodeId);
    if (!t) throw new Error(x(2229) + this[x(1441)]);
    return t;
  }
  get [a(1043)]() {
    const x = a, t = this[x(918)][x(1808)]()[x(2328)](this.nodeId);
    if (!t) throw new Error(x(854) + this[x(1441)]);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s !== n(1443)) return;
      const i = t[n(1043)][s], c = s[n(1904)]("__internal_");
      if (!i && !c) throw new Error("Action " + s + n(1295) + this[n(1441)]);
      return async (d, u) => {
        const l = n, f = this[l(2113)]();
        if (!f) throw new Error("No connection available for node " + this[l(1441)]);
        const { transport: b, path: h } = f, p = this.graphInstance[l(1004)]();
        if (!(i != null && i[l(880)])) {
          const k = Te();
          let P;
          if (h.length === 2) P = await b.request({ method: l(1896), params: { action: s, data: d, sourceNodeId: p } }, k);
          else try {
            P = await b[l(714)]({ method: l(1896), params: { action: l(1788), data: { targetNodeId: this.nodeId, targetAction: s, targetData: d, forwardPath: h.slice(1) }, sourceNodeId: p } }, k);
          } catch (N) {
            throw console.error("Error in direct request " + s + ":", N), console[l(1493)]({ targetNodeId: this[l(1441)], targetAction: s, targetData: d, forwardPath: h[l(2527)](1) }), N;
          }
          return P;
        }
        let v;
        return h[l(2910)] === 2 ? v = b[l(1729)]({ action: s, data: d, sourceNodeId: p }, i[l(2028)], u) : v = b[l(1729)]({ action: l(1788), data: { targetNodeId: this[l(1441)], targetAction: s, targetData: d, forwardPath: h[l(2527)](1) }, sourceNodeId: p }, i[l(2028)], u), v;
      };
    } });
  }
  [a(2113)]() {
    const x = a;
    return this[x(918)][x(2828)](this[x(1441)]);
  }
}
var as, rs, ss;
class Ws {
  constructor(x) {
    me(this, ss);
    me(this, rs);
    me(this, as);
    const t = a;
    this[t(918)] = x, this[t(1642)] = x[t(1642)], this[t(589)] = x.broadcastManager;
  }
  [(ss = a(918), rs = a(1642), as = a(589), a(1663))]({ store: x, storeName: t, onStateUpdate: r, requestInitialState: e }) {
    const s = a;
    this[s(589)][s(1923)](s(1401) + t, (n) => {
      const i = s;
      try {
        n[i(999)] !== this[i(918)][i(1004)]() && r(n.stateUpdate);
      } catch (c) {
        console[i(1493)](i(1317) + t + ":", c);
      }
    });
  }
  initializeProducer({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: e }) {
    const s = a, n = this[s(918)][s(1004)](), i = async (u, l = !1) => {
      const f = s;
      if (this[f(1227)]()) try {
        await this.broadcastManager[f(1098)](f(1401) + t, { storeName: t, sourceNodeId: n, stateUpdate: u, isInitialState: l });
      } catch (h) {
        console[f(1493)]("[GraphStoreSynchronizer] Error broadcasting state update for " + t + ":", h);
      }
    }, c = x[s(2978)]((u) => {
      i(u, !1);
    });
    e(() => {
      i(x[s(1480)](), !0);
    });
    const d = s(2641) + t;
    return this[s(1642)][s(2564)](d, async () => {
      const u = s, l = x[u(1480)]();
      return await i(l, !0), { success: !0 };
    }), this.broadcastManager[s(1923)]("__connection_established", async (u) => {
      try {
        (u.toNode === n || u.fromNode === n) && await i(x.getState(), !0);
      } catch {
      }
    }), () => {
      var l;
      const u = s;
      c(), (l = this[u(1642)].actionHandlers) == null || l[u(1239)](d);
    };
  }
  [a(1227)]() {
    var t;
    const x = a;
    try {
      const r = this.graphInstance[x(1170)], e = r && r.getConnectionCount() > 0, s = ((t = this.broadcastManager[x(1687)]) == null ? void 0 : t[x(2873)]) > 0;
      return e || s;
    } catch {
      return !!this[x(589)];
    }
  }
  async [a(2165)](x, t) {
    const r = a, e = this[r(918)][r(1004)]();
    if (this.isTransportReady()) try {
      await this[r(589)][r(1098)](r(1401) + t, { storeName: t, sourceNodeId: e, stateUpdate: x[r(1480)](), isInitialState: !0 });
    } catch {
    }
  }
}
function vo({ graphInstance: o, store: x, name: t }) {
  const r = a, e = new Ws(o), s = (i) => {
    const c = K, d = x.getState(), u = { ...d, ...i };
    x[c(964)](u);
  }, n = async () => {
    const i = K, c = i(2641) + t;
    try {
      const d = o.getNode(t);
      d && d[i(1043)] && d.actions[c] && await d[i(1043)][c]();
    } catch (d) {
      console.warn("Failed to request initial state for " + t + ":", d);
    }
  };
  e[r(1663)]({ store: x, storeName: t, onStateUpdate: s, requestInitialState: n });
}
function wo({ graphInstance: o, store: x, name: t }) {
  const r = a, e = new Ws(o), s = async (i) => {
  }, n = (i) => {
  };
  return e[r(1348)]({ store: x, storeName: t, sendStateUpdate: s, onInitialStateRequested: n });
}
var ns, os, is, cs;
class So {
  constructor(x) {
    me(this, cs, /* @__PURE__ */ new Map());
    me(this, is, /* @__PURE__ */ new Map());
    me(this, os, /* @__PURE__ */ new Set());
    me(this, ns);
    const t = a;
    this[t(3008)] = x;
  }
  createGlobalDispatcherForType(x) {
    return (t) => {
      const r = K;
      if (t && t[r(2630)] === this[r(3008)]) return;
      const e = this[r(2333)][r(2620)](x);
      if (e) {
        const { __origin: s, forwarded: n, ...i } = t || {};
        for (const c of e)
          try {
            c(i);
          } catch (d) {
            console[r(1493)]("Error in broadcast handler for " + x + ":", d);
          }
      }
      !t.forwarded && this[r(2031)](x, t);
    };
  }
  async [(cs = a(2333), is = a(2108), os = a(1735), ns = a(3008), a(2031))](x, t) {
    const r = a;
    try {
      const e = { ...t, forwarded: !0 }, s = [...Array.from(this[r(2108)][r(2323)]()), ...Array[r(2725)](this[r(1735)])], n = s[r(1429)]((i) => {
        const c = r;
        return i[c(766)]({ method: c(1301), params: { messageType: x, message: e } })[c(1508)]((d) => {
          console.error(c(755) + x + ":", d);
        });
      });
      await Promise[r(2264)](n);
    } catch (e) {
      console[r(1493)](r(776), e);
    }
  }
  registerHandler(x, t) {
    const r = a;
    !this[r(2333)][r(2239)](x) && this[r(2333)][r(2454)](x, /* @__PURE__ */ new Set()), this.broadcastHandlers[r(2620)](x)[r(1604)](t);
  }
  setupTransportHandlers(x) {
    this[a(2679)](x);
  }
  setupGeneralBroadcastHandler(x) {
    const t = a, r = S({ method: te(t(1301)), params: S({ messageType: g(), message: Te() }) });
    x[t(1977)](r, async (e) => {
      const s = t, n = e.params[s(1988)];
      this[s(601)](n)(e[s(2863)][s(2732)]);
    });
  }
  addMiddleware(x, t) {
    const r = a;
    this.transports[r(2454)](x, t), this[r(2212)](t);
  }
  [a(368)](x) {
    const t = a;
    this[t(2108)][t(1239)](x);
  }
  async [a(1098)](x, t) {
    const r = a, e = [...Array.from(this[r(2108)][r(2323)]()), ...Array[r(2725)](this.mountedTransports)], s = e[r(1429)]((n) => {
      const i = r;
      return n[i(766)]({ method: i(1301), params: { messageType: x, message: t } });
    });
    await Promise.all(s);
  }
  [a(1606)](x) {
    const t = a;
    this[t(1735)].add(x), this[t(2212)](x);
  }
  [a(2861)]() {
    const x = a;
    return Array[x(2725)](this[x(2333)][x(548)]());
  }
  clear() {
    const x = a;
    this[x(2333)].clear(), this.transports[x(2149)](), this[x(1735)].clear();
  }
}
var ds, us, ls;
class ko {
  constructor(x, t, r) {
    me(this, "actionHandlers", /* @__PURE__ */ new Map());
    me(this, ls);
    me(this, us);
    me(this, ds);
    const e = a;
    this[e(1118)] = x, this.currentNodeId = t, this[e(2163)] = r;
  }
  [(ls = a(1118), us = a(3008), ds = a(2163), a(2651))](x, t) {
    const r = a, e = this[r(1118)][r(2328)](this[r(3008)]);
    if (!e) throw new Error(r(854) + this[r(3008)]);
    const s = e[r(1043)][x];
    if (!s) throw new Error(r(2972) + String(x) + r(1295) + this.currentNodeId);
    this[r(1881)](x, t, s), this[r(1351)][r(2454)](x, t);
  }
  validateHandlerType(x, t, r) {
    r.stream;
  }
  implementInternalAction(x, t) {
    const r = a;
    this[r(1351)][r(2454)](x, t);
  }
  [a(1606)](x) {
    const t = a;
    for (const [r, e] of this[t(1351)]) {
      const s = this.definition[t(2328)](this[t(3008)]), n = s == null ? void 0 : s.actions[r];
      if (r[t(1904)]("__internal_") ? !1 : (n == null ? void 0 : n[t(880)]) === !0) {
        const d = S({ action: te(r) });
        x.registerStreamRequestorHandler(d, async function* (u, l, f) {
          const b = t, h = u[b(571)] || u, p = e(h, l, f);
          if (p && typeof p === b(2517) && Symbol.asyncIterator in p) for await (const v of p)
            yield v === void 0 ? {} : v;
          else {
            const v = await p;
            yield v === void 0 ? {} : v;
          }
        });
      }
    }
    this[t(398)](x), this.registerDirectRequestHandlerGeneric(x);
  }
  [a(398)](x) {
    const t = a, r = S({ action: te(t(1788)) }), e = this;
    x[t(2638)](r, async function* (s, n, i) {
      const c = t, d = s[c(571)] || s, { targetNodeId: u, targetAction: l, targetData: f, forwardPath: b } = d;
      if (!b || b.length === 0) throw new Error(c(2415));
      const h = b[0], p = b[c(2527)](1);
      if (p.length === 0 && h === e.currentNodeId) {
        const v = e.actionHandlers[c(2620)](l);
        if (!v) throw new Error("Action " + l + c(1244) + e[c(3008)]);
        const k = v(f, n, i);
        if (k && typeof k === c(2517) && Symbol.asyncIterator in k) for await (const P of k)
          yield P === void 0 ? {} : P;
        else {
          const P = await k;
          yield P === void 0 ? {} : P;
        }
        return;
      }
      if (h === e.currentNodeId && p[c(2910)] > 0) {
        const v = p[0], k = e[c(2163)](v);
        if (k) {
          const P = await k[c(1729)]({ action: "__proxy_forward", data: { targetNodeId: u, targetAction: l, targetData: f, forwardPath: p } }, S({}), i);
          for await (const N of P)
            yield N === void 0 ? {} : N;
          return;
        }
        throw new Error(c(1249) + v + c(1449));
      }
      throw new Error(c(2820) + e[c(3008)] + c(2544) + b);
    });
  }
  [a(2580)]() {
    const x = a;
    return Array[x(2725)](this.actionHandlers[x(548)]());
  }
  [a(1002)](x) {
    return this.actionHandlers.has(x);
  }
  getHandler(x) {
    const t = a;
    return this[t(1351)][t(2620)](x);
  }
  clear() {
    const x = a;
    this[x(1351)][x(2149)]();
  }
  [a(1465)](x, t, r) {
  }
  [a(1589)](x) {
    const t = a, r = S({ method: te(t(1896)), params: S({ action: g(), data: Te().optional() }) }), e = this;
    x[t(921)](r, async (s, n) => {
      const i = t, { action: c, data: d } = s[i(2863)];
      if (c === i(1788)) return await e[i(2559)](d, n);
      const u = e.actionHandlers[i(2620)](c);
      if (!u) throw new Error(i(2972) + c + " not found on node " + e[i(3008)]);
      const l = u(d, n), f = await l;
      return f === void 0 ? {} : f;
    });
  }
  async [a(2559)](x, t) {
    const r = a, { targetNodeId: e, targetAction: s, targetData: n, forwardPath: i } = x;
    if (!i || i[r(2910)] === 0) throw new Error(r(2415));
    const c = i[0], d = i[r(2527)](1);
    if (d[r(2910)] === 0 && c === this[r(3008)]) {
      const u = this.actionHandlers.get(s);
      if (!u) throw new Error("Action " + s + " not found on node " + this[r(3008)]);
      const l = u(n, t), f = await l;
      return f === void 0 ? {} : f;
    }
    if (c === this[r(3008)] && d[r(2910)] > 0) {
      const u = d[0], l = this[r(2163)](u);
      if (l) return await l[r(714)]({ method: r(1896), params: { action: r(1788), data: { targetNodeId: e, targetAction: s, targetData: n, forwardPath: d } } }, Te());
      throw new Error("Cannot forward to node " + u + " - no connection available");
    }
    throw new Error("Invalid proxy forwarding: current node " + this.currentNodeId + r(2544) + i);
  }
}
var fs, hs, ps;
class Po {
  constructor(x, t) {
    me(this, ps);
    me(this, hs);
    me(this, fs, /* @__PURE__ */ new Set());
    const r = a;
    this[r(1118)] = x, this[r(3008)] = t;
  }
  markConnected(x) {
    const t = a;
    this[t(2194)][t(1604)](x);
  }
  [(ps = a(1118), hs = a(3008), fs = a(2194), a(720))](x) {
    this[a(2194)].delete(x);
  }
  isConnected(x) {
    const t = a;
    return this[t(2194)][t(2239)](x);
  }
  findPath(x, t) {
    const r = a;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), s = [{ nodeId: x, path: [x] }];
    for (; s[r(2910)] > 0; ) {
      const { nodeId: n, path: i } = s.shift();
      if (e[r(2239)](n)) continue;
      e.add(n);
      const c = this[r(1118)][r(877)](n);
      for (const d of c) {
        if (d === t) return [...i, d];
        !e.has(d) && s[r(816)]({ nodeId: d, path: [...i, d] });
      }
    }
  }
  [a(1085)]() {
    const x = a;
    return Array[x(2725)](this[x(2194)]);
  }
  [a(2374)]() {
    const x = a;
    return this[x(2194)][x(2873)];
  }
  [a(2579)]() {
    const x = a, t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), e = [this[x(3008)]];
    for (r[x(1604)](this[x(3008)]); e[x(2910)] > 0; ) {
      const s = e[x(613)](), n = this[x(1118)][x(877)](s);
      for (const i of n)
        !r[x(2239)](i) && (r[x(1604)](i), (this[x(2194)][x(2239)](i) || this[x(2960)](i, r)) && (t[x(1604)](i), e[x(816)](i)));
    }
    return Array[x(2725)](t);
  }
  [a(2960)](x, t) {
    const r = a, e = this[r(1231)](this[r(3008)], x);
    if (!e || e[r(2910)] <= 1) return !1;
    for (let s = 1; s < e.length - 1; s++)
      if (!this[r(2194)][r(2239)](e[s])) return !1;
    return !0;
  }
  [a(2149)]() {
    const x = a;
    this.connectedNodes[x(2149)]();
  }
}
var ms, bs, gs, ys, vs, ws, Ss;
class Io {
  constructor(x, t) {
    me(this, Ss);
    me(this, ws);
    me(this, vs, /* @__PURE__ */ new Map());
    me(this, ys, /* @__PURE__ */ new Map());
    me(this, gs);
    me(this, bs);
    me(this, "connectionManager");
    me(this, ms, /* @__PURE__ */ new Map());
    const r = a;
    this[r(1118)] = x, this[r(3008)] = t, this[r(2423)](), this[r(589)] = new So(t), this[r(1642)] = new ko(x, t, (e) => this[r(1129)](e)), this[r(1170)] = new Po(x, t), this[r(1259)]();
  }
  [(Ss = a(1118), ws = a(3008), vs = a(1971), ys = a(1224), gs = a(589), bs = a(1642), ms = a(2284), a(2423))]() {
    const x = a;
    for (const t of this[x(1118)].getNodeIds()) {
      const r = this.definition[x(2328)](t);
      if (r && r[x(2849)]) {
        const e = this[x(1586)](r.store), s = Bn(() => e);
        this[x(1971)][x(2454)](t, s);
      }
    }
  }
  getDefaultValuesFromSchema(x) {
    const t = a;
    if (!x) return {};
    try {
      return x[t(1584)]({});
    } catch {
      return this.manuallyExtractDefaults(x);
    }
  }
  [a(1803)](x) {
    const t = a;
    if (!x || !x[t(602)]) return {};
    if (x[t(602)].type === t(2889)) {
      const r = x[t(602)][t(2628)];
      return typeof r == "function" ? r() : r;
    }
    if (x[t(602)][t(506)] === "object") {
      const r = {};
      let e;
      try {
        e = x[t(602)].shape;
      } catch {
        return {};
      }
      if (e) for (const [s, n] of Object[t(807)](e)) {
        const i = this[t(1764)](n);
        i !== void 0 && (r[s] = i);
      }
      return r;
    }
    return {};
  }
  [a(1764)](x) {
    const t = a;
    if (x)
      try {
        return x[t(1584)](void 0);
      } catch {
        return this[t(1803)](x);
      }
  }
  async [a(1747)](x, t) {
    const r = a;
    if (!this.definition.hasEdge(this[r(3008)], x)) throw new Error(r(1432) + this[r(3008)] + " to " + x);
    if (this[r(2284)][r(2239)](x)) throw new Error(r(481) + x);
    try {
      this[r(2284)][r(2454)](x, t), this[r(1170)].markConnected(x), this[r(2890)](x, t), await this[r(2118)](x), await this.requestInitialStateForNode(x);
    } catch (e) {
      throw this.cleanupConnection(x), e;
    }
  }
  [a(1587)](x) {
    this[a(3061)](x);
  }
  async [a(2118)](x) {
    const t = a;
    await new Promise((r) => setTimeout(r, 100));
    for (const [r, e] of this[t(1971)])
      if (r === this[t(3008)]) try {
        await this.broadcastManager.broadcast(t(1401) + r, { storeName: r, sourceNodeId: this[t(3008)], stateUpdate: e[t(1480)](), isInitialState: !0 });
      } catch {
      }
    try {
      await this[t(589)][t(1098)](t(947), { fromNode: this.currentNodeId, toNode: x });
    } catch {
    }
  }
  async requestInitialStateForNode(x) {
    const t = a;
    try {
      const r = this[t(1170)][t(2579)]();
      for (const e of r)
        try {
          const s = "__internal_requestInitialState_" + e, n = this.getNode(e);
          if (n && n.actions && n.actions[s]) {
            const i = n[t(1043)][s]({});
            await Promise[t(538)]([i, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (s) {
          console.log(t(2383) + e + ":", s);
        }
    } catch (r) {
      console[t(2613)](t(785) + x + ":", r);
    }
  }
  [a(3061)](x) {
    const t = a, r = this[t(2284)][t(2620)](x);
    this[t(2284)][t(1239)](x), this[t(1170)][t(720)](x), this[t(589)][t(368)](x), r && r[t(749)]();
  }
  [a(2890)](x, t) {
    const r = a;
    if (!this[r(1971)][r(2620)](this[r(3008)])) throw new Error(r(1549) + this[r(3008)]);
    this[r(1642)].mountTo(t), this[r(589)].addMiddleware(x, t);
  }
  [a(1259)]() {
    const x = a;
    for (const [t, r] of this[x(1971)])
      t === this.currentNodeId ? wo({ graphInstance: this, store: r, name: t }) : vo({ graphInstance: this, store: r, name: t });
  }
  getNode(x) {
    const t = a;
    if (!this[t(1224)][t(2239)](x)) {
      const r = new yo(this, x);
      this[t(1224)][t(2454)](x, r);
    }
    return this[t(1224)][t(2620)](x);
  }
  [a(1129)](x) {
    const t = a;
    return this[t(2284)][t(2620)](x);
  }
  [a(2828)](x) {
    const t = a, r = this.nodeTransports[t(2620)](x);
    if (r) return { transport: r, path: [this[t(3008)], x] };
    const e = this.findPathInternal(this[t(3008)], x);
    if (e && e.length > 1) {
      const s = e[1], n = this[t(2284)][t(2620)](s);
      if (n) return { transport: n, path: e };
    }
  }
  [a(1112)](x) {
    const t = a;
    return this[t(1971)][t(2620)](x);
  }
  get [a(2849)]() {
    const x = a, t = this.nodeStores[x(2620)](this[x(3008)]);
    if (!t) throw new Error("Store not found for current node " + this[x(3008)]);
    return t;
  }
  get [a(1043)]() {
    const x = a, t = this.definition[x(2328)](this.currentNodeId);
    if (!t) throw new Error(x(1294) + this.currentNodeId);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s != "string") return;
      const i = t[n(1043)][s];
      if (!i) throw new Error(n(2972) + s + n(1994) + this[n(3008)]);
      return (c, d) => {
        const u = n, l = this[u(1642)][u(668)](s);
        if (!l) throw new Error(u(2318) + s + u(598) + this[u(3008)]);
        const f = { nodeId: this[u(3008)] };
        if (i[u(880)] === !0) {
          const b = l(c, f, d);
          return b && typeof b === u(2517) && Symbol.asyncIterator in b ? (async function* () {
            for await (const h of b)
              yield h === void 0 ? {} : h;
          })() : (async function* () {
            const h = await b;
            yield h === void 0 ? {} : h;
          })();
        } else return (async () => {
          const b = u, h = l(c, f, d);
          if (h && typeof h === b(2517) && Symbol[b(1306)] in h) {
            const p = h[Symbol[b(1306)]](), v = await p[b(3016)]();
            return v[b(2398)] === void 0 ? {} : v[b(2398)];
          } else {
            const p = await h;
            return p === void 0 ? {} : p;
          }
        })();
      };
    } });
  }
  getDefinition() {
    return this[a(1118)];
  }
  [a(1004)]() {
    return this.currentNodeId;
  }
  [a(1817)](x) {
    return this.getTransportToNode(x);
  }
  [a(2651)](x, t) {
    const r = a;
    this[r(1642)][r(2651)](x, t);
  }
  [a(2019)]() {
    const x = a, t = Array[x(2725)](this[x(2284)][x(548)]());
    for (const r of t)
      this.cleanupConnection(r);
    this.broadcastManager[x(2149)](), this[x(1642)][x(2149)](), this[x(1170)].clear();
  }
  findPathInternal(x, t) {
    const r = a;
    return this[r(1170)][r(1231)](x, t);
  }
  [a(1231)](x, t) {
    return this.findPathInternal(x, t);
  }
  async [a(1098)](x, t) {
    const r = a, e = { ...t, __origin: this[r(3008)] };
    return this.broadcastManager.broadcast(x, e);
  }
  [a(860)](x, t) {
    const r = a;
    this[r(589)][r(1923)](x, t);
  }
}
function Eo(o) {
  const x = new Vn(o);
  return { joinAs(t) {
    const r = K;
    if (!x.getNode(t)) throw new Error("Node " + String(t) + r(2921));
    return new Io(x, t);
  }, getDefinition() {
    return o;
  }, getNodeIds() {
    return x.getNodeIds();
  }, getNeighbors(t) {
    return x[K(877)](t);
  }, hasEdge(t, r) {
    return x[K(923)](t, r);
  }, hasPath(t, r) {
    return x[K(2949)](t, r);
  }, findPath(t, r) {
    return x[K(1231)](t, r);
  } };
}
const Da = { INTERCEPTOR_ERROR: "interceptor_error" };
var ks, Ps, Is, Es;
class ja extends (Es = Error, Is = a(506), Ps = a(392), ks = a(489), Es) {
  constructor(t, r, e, s) {
    const n = a;
    super(e);
    me(this, Is);
    me(this, Ps);
    me(this, ks);
    this[n(1907)] = "MiddlewareError", this[n(506)] = t, this[n(392)] = r, this[n(489)] = s;
  }
}
var Cs, Rs, Fs, Ns, qs, Ts, As, _s, Os, Ds;
class Co {
  constructor(x, t = {}) {
    me(this, Ds);
    me(this, "realTransport", null);
    me(this, Os);
    me(this, _s, /* @__PURE__ */ new Map());
    me(this, As, /* @__PURE__ */ new Map());
    me(this, Ts, /* @__PURE__ */ new Map());
    me(this, qs, /* @__PURE__ */ new Map());
    me(this, Ns, []);
    me(this, Fs, []);
    me(this, Rs, []);
    me(this, Cs, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    const r = a;
    this.protocol = x, this[r(961)] = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async [(Ds = a(2531), Os = a(961), _s = a(2919), As = a(2909), Ts = a(495), qs = a(1458), Ns = a(2939), Fs = a(2281), Rs = a(2270), Cs = a(1031), a(1747))](x) {
    const t = a;
    this[t(1461)] = x, x[t(1981)] = (r) => {
      this[t(2307)](r);
    }, x.onclose = () => {
      const r = t;
      this.closeHandlers[r(1548)]((e) => e());
    }, x.onerror = (r) => {
      const e = t;
      this[e(2270)][e(1548)]((s) => s(r));
    }, await this.protocol[t(1747)](this);
  }
  async [a(2307)](x) {
    const t = a;
    this.log(t(825), t(2486), x);
    try {
      if (this[t(1038)](x) && await this[t(1919)](x) || this[t(2692)](x) && await this[t(1683)](x))
        return;
      this[t(2939)][t(1548)]((r) => r(x));
    } catch (r) {
      this.stats.errors++, this[t(2613)](t(1493), t(2891), r), this[t(2939)][t(1548)]((e) => e(x));
    }
  }
  async [a(1919)](x) {
    const t = a, r = this[t(2919)].get(x.method);
    if (!r) return !1;
    try {
      this[t(1031)][t(2901)]++;
      const e = await r(x, {});
      return this[t(1461)] && "id" in x && await this[t(1461)].send({ jsonrpc: t(2658), id: x.id, result: e }), !0;
    } catch (e) {
      return this[t(1031)][t(2311)]++, this[t(1461)] && "id" in x && await this[t(1461)][t(1237)]({ jsonrpc: "2.0", id: x.id, error: { code: -32603, message: t(2827) + JSON.stringify(x[t(2863)]) + " " + e[t(2732)] } }), !0;
    }
  }
  async [a(1683)](x) {
    const t = a, r = this[t(2909)].get(x[t(392)]);
    if (!r) return !1;
    try {
      return this[t(1031)][t(2755)]++, await r(x), !0;
    } catch (e) {
      return this[t(1031)][t(2311)]++, this[t(2613)](t(1493), "Notification handler failed for " + x[t(392)] + ":", e), !0;
    }
  }
  async [a(1237)](x) {
    const t = a;
    this[t(2613)](t(825), t(2103), x);
    try {
      if (this[t(1038)](x)) {
        const r = await this[t(726)](x);
        if (r.success) {
          if (r.result === null) return;
          r[t(2712)] && (x = { ...r.result, jsonrpc: t(2658) }, this[t(1031)].requestsIntercepted++);
        } else if (this[t(961)][t(2605)]) this.log(t(405), t(2044) + x[t(392)] + ":", r[t(1493)]);
        else throw r.error;
      }
      if (this.isNotification(x)) {
        const r = await this[t(473)](x);
        if (r[t(1472)]) {
          if (r[t(2712)] === null) return;
          r.result && (x = { ...r[t(2712)], jsonrpc: "2.0" }, this.stats[t(753)]++);
        } else if (this[t(961)][t(2605)]) this[t(2613)](t(405), t(2745) + x.method + ":", r[t(1493)]);
        else throw r[t(1493)];
      }
      this[t(1461)] && await this.realTransport[t(1237)](x);
    } catch (r) {
      throw this[t(1031)][t(2311)]++, r;
    }
  }
  async start() {
    const x = a;
    this[x(1461)] && await this[x(1461)][x(817)]();
  }
  async [a(1522)]() {
    const x = a;
    this.realTransport && await this[x(1461)][x(1522)]();
  }
  set [a(1981)](x) {
    const t = a;
    this[t(2939)] = [x];
  }
  set onclose(x) {
    const t = a;
    this[t(2281)] = [x];
  }
  set [a(2900)](x) {
    const t = a;
    this[t(2270)] = [x];
  }
  async [a(726)](x) {
    const t = a, r = this[t(495)].get(x.method);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this.withTimeout(r(x), this.options[t(2650)]) };
    } catch (e) {
      return this[t(1031)][t(2311)]++, { success: !1, error: new ja(Da[t(1958)], x[t(392)], t(2945) + e[t(2732)], e) };
    }
  }
  async [a(473)](x) {
    const t = a, r = this.outgoingNotificationInterceptors[t(2620)](x.method);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(658)](r(x), this[t(961)].interceptorTimeout) };
    } catch (e) {
      return this[t(1031)].errors++, { success: !1, error: new ja(Da[t(1958)], x[t(392)], t(1570) + e[t(2732)], e) };
    }
  }
  async [a(714)](x, t) {
    const r = a;
    return await this[r(2531)][r(714)](x, t, { timeout: 36e5 });
  }
  async [a(766)](x) {
    const t = a;
    return await this[t(2531)][t(766)](x);
  }
  [a(921)](x, t) {
    const r = a, e = x.shape.method.value;
    this[r(2919)].set(e, t);
  }
  [a(1977)](x, t) {
    const r = a, e = x[r(1798)][r(392)][r(2398)];
    this[r(2909)][r(2454)](e, t);
  }
  [a(889)](x, t) {
    const r = a, e = x.shape.method[r(2398)];
    this[r(495)][r(2454)](e, t);
  }
  setOutgoingNotificationInterceptor(x, t) {
    const r = a, e = x[r(1798)][r(392)].value;
    this[r(1458)].set(e, t);
  }
  [a(1903)](x) {
    const t = a;
    this[t(2919)][t(1239)](x);
  }
  unsetNotificationHandler(x) {
    const t = a;
    this.notificationHandlers[t(1239)](x);
  }
  [a(2046)](x) {
    this.outgoingRequestInterceptors.delete(x);
  }
  [a(1297)](x) {
    const t = a;
    this.outgoingNotificationInterceptors[t(1239)](x);
  }
  [a(943)](x) {
    const t = a;
    return this[t(2919)][t(2239)](x);
  }
  hasNotificationHandler(x) {
    return this[a(2909)].has(x);
  }
  hasOutgoingRequestInterceptor(x) {
    return this[a(495)].has(x);
  }
  [a(3060)](x) {
    const t = a;
    return this[t(1458)][t(2239)](x);
  }
  [a(2211)]() {
    return { ...this[a(1031)] };
  }
  [a(2790)]() {
    const x = a;
    this[x(1031)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [a(1356)]() {
    return this.protocol;
  }
  [a(749)]() {
    const x = a;
    this.requestHandlers[x(2149)](), this[x(2909)][x(2149)](), this[x(495)].clear(), this.outgoingNotificationInterceptors[x(2149)]();
  }
  [a(1038)](x) {
    const t = a;
    return x[t(2700)] === t(2658) && t(392) in x && "id" in x;
  }
  [a(2692)](x) {
    const t = a;
    return x[t(2700)] === "2.0" && t(392) in x && !("id" in x);
  }
  async [a(658)](x, t) {
    const r = a, e = new Promise((s, n) => {
      const i = K;
      setTimeout(() => n(new Error(i(2796))), t);
    });
    return await Promise[r(538)]([x, e]);
  }
  log(x, t, ...r) {
    const e = a;
    if (!this[e(961)].debug && x === e(825)) return;
    const s = e(1939);
    switch (x) {
      case e(825):
        console.debug(s, t, ...r);
        break;
      case "info":
        console[e(2247)](s, t, ...r);
        break;
      case e(405):
        console[e(405)](s, t, ...r);
        break;
      case e(1493):
        console[e(1493)](s, t, ...r);
        break;
    }
  }
}
S({ method: te(a(2472)), params: S({ requestId: g(), data: Te(), error: g()[a(2259)](), finished: ee() }) }), S({ method: te(a(2434)), params: S({ action: g(), data: Te() }) }), S({ method: te(a(1862)), params: S({ requestId: g() }) });
const Ro = S({ method: te(a(2472)), params: S({ requestId: g(), data: Te(), error: g()[a(2259)](), finished: ee() }) }), Fo = S({ method: te("sdppp/streamRequest"), params: S({ action: g(), data: Te() }) }), No = S({ method: te("sdppp/abort"), params: S({ requestId: g() }) });
var js;
class qo {
  constructor() {
    me(this, "queues", /* @__PURE__ */ new Map());
    me(this, js, /* @__PURE__ */ new Map());
  }
  [(js = a(455), a(816))](x) {
    const t = a, { requestId: r } = x[t(2863)], e = this[t(1423)][t(2620)](r) || [], s = this[t(455)].get(r) || [];
    s.length > 0 ? s[t(613)]()(x.params) : (e[t(816)](x[t(2863)]), this[t(1423)][t(2454)](r, e));
  }
  async [a(641)](x) {
    const t = a, r = this.queues[t(2620)](x) || [];
    return r[t(2910)] > 0 ? r.shift() : new Promise((e) => {
      const s = t, n = this[s(455)].get(x) || [];
      n[s(816)](e), this[s(455)][s(2454)](x, n);
    });
  }
  [a(749)](x) {
    const t = a;
    this[t(1423)][t(1239)](x), this[t(455)][t(1239)](x);
  }
}
var Ms, Ls, $s, Us;
class To extends Co {
  constructor(t, r = {}) {
    const e = a;
    super(t, r);
    me(this, Us, /* @__PURE__ */ new Map());
    me(this, $s, 1);
    me(this, Ls, /* @__PURE__ */ new Map());
    me(this, Ms, new qo());
    this[e(724)]();
  }
  [(Us = a(2215), $s = a(2197), Ls = a(2697), Ms = a(882), a(724))]() {
    const t = a;
    this[t(715)](), this.setupAbortHandler(), this[t(920)]();
  }
  [a(715)]() {
    const t = a;
    this[t(1977)](Ro, async (r) => {
      const e = t;
      this[e(882)][e(816)](r);
    });
  }
  [a(408)]() {
    const t = a;
    this[t(921)](No, async (r, e) => {
      const s = t, { requestId: n } = r.params, i = this[s(2697)][s(2620)](n);
      return i && (i[s(1973)](), this[s(2697)][s(1239)](n)), { success: !0 };
    });
  }
  setupStreamRequestHandler() {
    const t = a;
    this[t(921)](Fo, async (r, e) => {
      const s = t, n = s(3045) + this[s(2197)]++, i = this[s(2215)].get(r.params.action);
      if (!i) throw new Error("No handler for streamRequestor: " + r.params[s(362)]);
      const c = new AbortController();
      return this[s(2697)][s(2454)](n, c), this[s(3052)](n, i, r[s(2863)], e, c), { requestId: n };
    });
  }
  async [a(3052)](t, r, e, s, n) {
    const i = a;
    try {
      const c = r(e, s, n[i(2009)]);
      for await (const d of c) {
        if (n.signal[i(930)]) break;
        await this.notification({ method: "sdppp/streamResponse", params: { requestId: t, data: d, error: null, finished: !1 } });
      }
      !n[i(2009)][i(930)] && await this[i(766)]({ method: i(2472), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n[i(2009)][i(930)] && await this[i(766)]({ method: i(2472), params: { requestId: t, data: null, error: c[i(2732)], finished: !0 } });
    } finally {
      this[i(2697)][i(1239)](t);
    }
  }
  [a(2638)](t, r) {
    const e = a;
    this.streamRequestorHandlers[e(2454)](t[e(1798)][e(362)][e(2398)], r);
  }
  async [a(1729)](t, r, e) {
    const s = a;
    this[s(2752)](e);
    const n = await this[s(1474)](t), i = this[s(588)](n), c = this.createStreamState();
    return this[s(1511)](i, c, n, e);
  }
  [a(2752)](t) {
    const r = a;
    if (t && t[r(930)]) throw new Error(r(2139));
  }
  async [a(1474)](t) {
    const r = a;
    return (await this[r(714)]({ method: r(2434), params: { action: t.action, data: t[r(571)] } }, S({ requestId: g() }))).requestId;
  }
  initializeResponseQueue(t) {
    return this[a(882)];
  }
  [a(1045)]() {
    return { finished: !1, error: null };
  }
  [a(1511)](t, r, e, s) {
    const n = a, i = this;
    return { async *[Symbol[n(1306)]]() {
      const c = n;
      try {
        for (; !r[c(2708)] && !r[c(1493)]; ) {
          if (s && s[c(930)])
            throw await i[c(714)]({ method: "sdppp/abort", params: { requestId: e } }, S({ success: ee() })), new Error(c(2706));
          const d = await t[c(641)](e);
          if (d[c(1493)])
            throw r[c(1493)] = d[c(1493)], new Error(d.error);
          if (d.finished) {
            r.finished = !0;
            break;
          }
          d[c(571)] !== null && (yield d.data);
        }
      } finally {
        t[c(749)](e);
      }
    } };
  }
  [a(2198)]() {
    const t = a;
    return this[t(2697)][t(2873)];
  }
  async [a(2781)](t) {
    const r = a, e = this[r(2697)].get(t);
    return e ? (e[r(1973)](), this[r(2697)][r(1239)](t), !0) : !1;
  }
  [a(1959)]() {
    const t = a;
    for (const [r, e] of this[t(2697)])
      e[t(1973)]();
    this[t(2697)].clear();
  }
  [a(749)]() {
    const t = a;
    super.cleanup(), this.abortAllRequests(), this[t(2215)][t(2149)]();
  }
}
S({ id: g(), method: g(), params: Te()[a(1712)](), traceId: g()[a(1712)]() }), S({ id: g(), result: Te()[a(1712)](), error: S({ code: W(), message: g(), data: Te().optional() }).optional() }), S({ method: g(), params: Te().optional() }), S({ method: te("sdppp/streamRequest"), params: S({ action: g(), data: Te() }) }), S({ method: te(a(2472)), params: S({ requestId: g(), data: Te()[a(1712)](), error: g()[a(2259)]().optional(), finished: ee().default(!1) }) }), S({ method: te(a(1862)), params: S({ requestId: g() }) }), S({ method: te("sdppp/broadcast"), params: S({ messageType: g(), message: Te() }) });
function Ks(o) {
  const x = a;
  return o && o[x(2617)] && Object[x(560)][x(938)][x(1175)](o, x(2889)) ? o[x(2889)] : o;
}
const z0 = S({ leftDistance: W(), topDistance: W(), rightDistance: W(), bottomDistance: W(), width: W(), height: W() }), F0 = { name: g(), uiWeight: W() }, Ao = S({ ...F0, outputType: te("images"), options: S({ required: ee(), maxCount: W()[a(1712)](), maskMode: ee().optional() }) }), _o = S({ ...F0, outputType: te("masks"), options: S({ required: ee() }) }), Oo = S({ ...F0, outputType: te("string"), options: S({ required: ee() }) }), Do = S({ ...F0, outputType: te("boolean"), options: S({ required: ee() }) }), jo = S({ ...F0, outputType: te(a(1730)), options: S({ required: ee(), min: W().optional(), max: W()[a(1712)](), step: W().optional(), random: ee().optional(), slider: ee()[a(1712)]() }) }), Mo = S({ ...F0, outputType: te(a(2535)), options: S({ required: ee(), values: ve(g()), labels: ve(g())[a(1712)]() }) }), Lo = S({ ...F0, outputType: te(a(1270)), options: S({ required: ee(), values: ve(g()) }) }), $o = S({ ...F0, outputType: te(a(955)), options: S({ required: ee() }) }), Uo = Zs(a(2885), [Ao, _o, Oo, Do, jo, Mo, Lo, $o]), Ho = S({ id: g(), title: g(), widgets: ve(Uo), uiWeightSum: W() }), zo = S({ widgetableID: g(), widgetablePath: g(), nodes: De(g(), Ho), nodeIndexes: ve(g()), note: g()[a(1712)](), options: De(g(), Te()) }), Vo = S({ widgetableStructure: zo[a(2889)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: De(g(), ve(Te()))[a(2889)]({}), widgetableErrors: De(g(), g())[a(2889)]({}), queueSize: W()[a(2889)](0), lastError: g()[a(2889)](""), progress: W().default(0), executingNodeTitle: g()[a(2889)](""), executingNodeID: g()[a(2889)](""), graphProgress: W()[a(2889)](0), comfyUserToken: g()[a(2889)](""), comfyOrgLoggedIn: ee()[a(2889)](!1), comfyOrgAPIKey: g().default(""), comfyWSState: Ie([a(639), a(563)])[a(2889)](a(639)), lastRunTime: W()[a(2889)](0) }), Bo = S({ bannerData: Te()[a(1712)](), refreshable: ee()[a(2889)](!1), backwardable: ee()[a(2889)](!1), loginable: ee()[a(2889)](!1), runnable: ee()[a(2889)](!1), workBoundaries: De(W(), z0)[a(2889)]({}), workBoundaryMaxSizes: De(W(), W())[a(2889)]({}) }), Zo = S({ uname: g()[a(2889)](""), activeDocumentID: W().default(0), layers: ve(S({ id: W(), name: g(), identify: g() }))[a(2889)]([]), actions: ve(g())[a(2889)]([]), theme: g()[a(2889)]("kPanelBrightnessMediumGray"), sdpppX: De(g(), Te()).default({}), locale: Ie([a(2156), a(788)])[a(2889)](a(788)), comfyWebviewConnectStatus: Ie(["connecting", a(639), a(2593)])[a(2889)]("disconnected"), comfyWebviewLoadError: g()[a(2889)](""), comfyWebviewLoading: ee()[a(2889)](!1), comfyWebviewVersion: g()[a(2889)](""), comfyHTTPCode: W().default(200), comfyURL: g().default(""), sdkWebviewFocusing: ee().default(!1), sdkWebviewConnectStatus: Ie(["connecting", "connected", a(2593)])[a(2889)](a(2593)), isLogin: ee().default(!1), isGuest: ee()[a(2889)](!1), requestingLogin: ee().default(!1), loginMessage: g()[a(2889)](""), token: g().default(""), userInfo: De(g(), Te())[a(2889)]({}), taskLastRun: W()[a(2889)](0), canvasStateID: W()[a(1712)](), selectionStateID: g()[a(1712)](), selectionBoundary: z0[a(2259)]().optional() }), Wo = { setNodeTitle: { requestSchema: S({ node_id: g(), title: g() }), responseSchema: S({ success: ee() }) }, reboot: { requestSchema: S({}), responseSchema: S({ success: ee(), error: g()[a(1712)]() }) }, setComfyOrgAPIKey: { requestSchema: S({ api_key: g() }), responseSchema: S({ success: ee() }) }, logout: { requestSchema: S({}), responseSchema: S({ success: ee() }) }, uploadComfyImageFromUXP: { requestSchema: S({ fileName: g(), overwrite: ee()[a(1712)](), mimeType: g()[a(1712)](), dataBase64: g() }), responseSchema: S({ name: g() }) }, sdpppHandshake: { requestSchema: S({ hostVersion: g()[a(1712)]() }), responseSchema: S({ comfyVersion: g(), hostVersion: g()[a(1712)]() }) } }, Ko = S({ workflows: ve(g()), error: g()[a(1712)]() }), Go = S({ success: ee(), nodeErrors: De(g())[a(1712)](), prompt_ids: ve(g()).optional(), images: ve(S({ url: g(), thumbnail: g() }))[a(1712)]() }), Jo = { setWidgetValue: { requestSchema: S({ values: ve(S({ nodeID: g(), widgetIndex: W(), value: De(g(), Te()).or(g()).or(W()).or(ee()).or(ve(Te())) })) }), responseSchema: S({ success: ee() }) }, openWorkflow: { requestSchema: S({ workflow_path: g(), reset: ee()[a(2889)](!1) }), responseSchema: S({ success: ee() }) }, openWorkflowJSON: { requestSchema: S({ workflow_content: De(Te()), workflow_path: g() }), responseSchema: S({ success: ee() }) }, listWorkflows: { requestSchema: S({ listMode: g()[a(1712)](), sdpppID: g().optional(), sdpppToken: g().optional() }), responseSchema: Ko }, saveWorkflow: { requestSchema: S({ workflow_path: g(), from_sid: g()[a(1712)]() }), responseSchema: S({ success: ee() }) }, run: { requestSchema: S({ size: W(), mode: Ie([a(2161), "api"])[a(2889)](a(2161))[a(1712)]() }), responseSchema: Go, stream: !0 }, stopAll: { requestSchema: S({}), responseSchema: S({ success: ee() }) } }, Qo = { backward: { requestSchema: Hx(), responseSchema: S({ success: ee() }) }, refresh: { requestSchema: Hx(), responseSchema: S({ success: ee() }) }, run: { requestSchema: Hx(), responseSchema: S({ success: ee() }) } }, Xo = S({ passwordPayload: S({ username: g(), password: g() }).or(S({ email: g(), password: g() })).or(S({ phone: g(), password: g() })).or(S({ identifier: g(), password: g() })) }).or(S({ passcodePayload: S({ phone: g(), code: g() }).or(S({ email: g(), code: g() })) })), Yo = S({ passwordPayload: S({ username: g(), password: g() }).or(S({ email: g(), password: g() })).or(S({ phone: g(), password: g() })).or(S({ identifier: g(), password: g() })) }).or(S({ passcodePayload: S({ phone: g(), code: g() }).or(S({ email: g(), code: g() })) })), ei = { register: { requestSchema: Xo, responseSchema: S({}) }, login: { requestSchema: Yo, responseSchema: S({}) }, sendPassCode: { requestSchema: S({ phone: g()[a(1712)](), email: g()[a(1712)]() }), responseSchema: S({}) }, logout: { requestSchema: S({}), responseSchema: S({}) }, guestLogin: { requestSchema: S({}), responseSchema: S({}) }, openAuthingLoginDialog: { requestSchema: S({}), responseSchema: S({}) } };
S({ resource: g().optional(), thumbnail: g().optional(), width: W()[a(1712)](), height: W()[a(1712)](), mimeType: g()[a(1712)](), source: g()[a(1712)](), error: g()[a(1712)]() }), S({ boundary: Ie([a(729), "curlayer", a(1950)]), content: Ie([a(729), "curlayer", a(1950)]).or(g()), imageSize: W(), imageQuality: W(), cropBySelection: Ie(["no", a(516), a(1580)]), layer_identify: g().nullable()[a(1712)]() }), S({ content: Ie(["canvas", a(2737), "selection"]), reverse: ee(), imageSize: W(), layer_identify: g().nullable()[a(1712)]() }), S({ selection: Ie([a(441), a(2682), a(1178), a(2492), "curlayer_canvas", a(1983), a(2774), "newdoc_canvas"]), url: g(), source: g(), cropBySelection: Ie(["no", a(516), a(1580)]) });
const xi = { downloadImage: { requestSchema: S({ url: g() }), responseSchema: S({ thumbnail: g().optional(), resource: g().optional(), width: W()[a(1712)](), height: W().optional(), error: g()[a(1712)]() }) }, getThumbnail: { requestSchema: S({ resource: g(), maxSize: W()[a(1712)]() }), responseSchema: S({ thumbnail: g().optional(), width: W()[a(1712)](), height: W()[a(1712)](), error: g().optional() }) } }, ti = { manageGuides: { requestSchema: S({ action: Ie(["create", "clear"]), rect: z0[a(1712)]() }), responseSchema: S({ success: ee() }) }, getBoundary: { requestSchema: S({ type: Ie([a(2737), a(1950)]) }), responseSchema: z0 }, getImage: { requestSchema: S({ boundary: Ke([Ie([a(729), a(2737), a(1950)]), z0]), content: Ke([Ie([a(729), a(2737)]), g()]), imageSize: W(), imageQuality: W(), cropBySelection: Ie(["no", "positive", a(1580)]), SkipNonNormalLayer: ee(), layer_identify: g().nullable()[a(1712)]() }), responseSchema: S({ resource: g()[a(1712)](), thumbnail: g().optional(), width: W()[a(1712)](), height: W().optional(), mimeType: g()[a(1712)](), source: g()[a(1712)](), error: g()[a(1712)]() }) }, getMask: { requestSchema: S({ boundary: Ke([Ie([a(729), a(2737), a(1950)]), z0]), content: Ie([a(729), "curlayer", "selection"]), reverse: ee(), imageSize: W(), layer_identify: g()[a(2259)]()[a(1712)]() }), responseSchema: S({ resource: g()[a(1712)](), thumbnail: g().optional(), width: W()[a(1712)](), height: W()[a(1712)](), mimeType: g().optional(), source: g()[a(1712)](), error: g().optional() }) }, getCurrentLayerIdentify: { requestSchema: S({}), responseSchema: S({ layer_identify: g()[a(2259)]() }) }, importImage: { requestSchema: S({ resource: g(), boundaryUri: g().nullable()[a(1712)](), type: Ie([a(729), a(2737), a(2762), a(759)]), sourceWidth: W()[a(1712)](), sourceHeight: W().optional(), maskUri: g()[a(2259)]().optional() }), responseSchema: S({ success: ee(), layers: ve(S({ identify: g() }))[a(1712)](), message: g()[a(1712)](), error: g()[a(1712)]() }) }, selectFromMaskUri: { requestSchema: S({ maskUri: g(), documentId: W().optional() }), responseSchema: S({ success: ee() }) }, selectFromBoundaryUri: { requestSchema: S({ boundaryUri: g(), documentId: W()[a(1712)]() }), responseSchema: S({ success: ee(), error: g()[a(1712)]() }) }, applyMaskToImage: { requestSchema: S({ imageResource: g(), maskResource: g(), invertMask: ee().optional() }), responseSchema: S({ resource: g(), thumbnail: g()[a(1712)](), width: W(), height: W(), mimeType: g() }) }, showBoundarySelectionDialog: { requestSchema: S({ additionalData: De(Te()).optional() }), responseSchema: S({ boundary: Ie([a(729), "curlayer", a(1950)]).optional(), cancelled: ee()[a(1712)]() }) }, selectImageSource: { requestSchema: S({ additionalData: De(Te())[a(1712)]() }), responseSchema: S({ action: Ie([a(1234), a(1956)])[a(1712)](), params: Te().optional(), cancelled: ee()[a(1712)]() }) }, selectContentSource: { requestSchema: S({ additionalData: De(Te())[a(1712)]() })[a(1712)](), responseSchema: S({ resource: g()[a(1712)](), fileName: g()[a(1712)](), mimeType: g()[a(1712)](), size: W()[a(1712)](), layerIdentify: g()[a(1712)](), cancelled: ee()[a(1712)]() }) } }, zx = S({ taskId: g(), taskName: g(), status: Ie([a(2188), a(686), a(2907), a(1413)]), currentStep: W()[a(1712)](), totalSteps: W()[a(1712)](), stepDescription: g()[a(1712)](), progressPercentage: W().min(0)[a(544)](100).optional(), startTime: g(), endTime: g().optional(), error: g()[a(1712)](), errorCode: g()[a(1712)](), result: Te()[a(1712)](), metadata: De(Te())[a(1712)]() }), Vx = S({ success: ee(), error: g()[a(1712)]() }), ai = { taskAdd: { requestSchema: zx, responseSchema: Vx }, taskUpdate: { requestSchema: zx[a(1883)]()[a(2914)]({ taskId: !0 }), responseSchema: Vx }, taskRemove: { requestSchema: zx[a(2327)]({ taskId: !0 }), responseSchema: Vx } }, ri = { log: { requestSchema: S({ level: Ie([a(2613), a(2247), a(405), a(1493)]), messages: ve(g()) }), responseSchema: S({}) }, openExternalLink: { requestSchema: S({ url: g() }), responseSchema: S({ error: g().optional() }) }, getStorage: { requestSchema: S({ key: g() }), responseSchema: S({ value: g(), error: g()[a(1712)]() }) }, setStorage: { requestSchema: S({ key: g(), value: g() }), responseSchema: S({ error: g().optional() }) }, removeStorage: { requestSchema: S({ key: g() }), responseSchema: S({ error: g()[a(1712)]() }) }, keyboardAction: { requestSchema: S({ keycode: g() }), responseSchema: S({}) }, setComfyWebviewURL: { requestSchema: S({ url: g() }), responseSchema: S({}) }, getImageBase64: { requestSchema: S({ token: g() }), responseSchema: S({ base64: g().optional(), mimeType: g()[a(1712)](), error: g()[a(1712)]() }) }, uploadComfyImage: { requestSchema: S({ uploadInput: S({ type: Ke([te("buffer"), te(a(2185)), te("resource")]), resource: Te(), fileName: g(), mimeType: g()[a(1712)](), resourceId: g()[a(1712)]() }), overwrite: ee()[a(1712)]().default(!0) }), responseSchema: S({ name: g() }) }, pickLocalFile: { requestSchema: S({ acceptExtensions: ve(g()).optional(), kind: Ie([a(2894), "file"])[a(1712)]() }).optional(), responseSchema: S({ cancelled: ee()[a(1712)](), resource: g().optional(), fileName: g().optional(), mimeType: g().optional(), size: W()[a(1712)](), error: g()[a(1712)]() }) }, proxiedFetch: { requestSchema: S({ url: g(), method: g()[a(1712)](), headers: De(g())[a(1712)](), body: Te()[a(1712)](), bodyType: Ie([a(1153), a(374), a(768)])[a(1712)]() }), responseSchema: S({ success: ee(), status: W().optional(), statusText: g()[a(1712)](), headers: De(g()).optional(), data: Te().optional(), error: g().optional() }) }, openaiImageEdit: { requestSchema: S({ apiKey: g(), baseURL: g(), imageToken: g(), prompt: g(), model: g() }), responseSchema: S({ success: ee(), imageUrl: g()[a(1712)](), apiTime: W()[a(1712)](), error: g().optional() }) }, geminiImageGenerate: { requestSchema: S({ apiKey: g(), baseURL: g()[a(1712)](), imageInputs: ve(g())[a(1712)](), imageInput: g()[a(1712)](), imageInputType: Ie(["token", a(1276)]), prompt: g() }), responseSchema: S({ success: ee(), imageUrl: g().optional(), apiTime: W()[a(1712)](), error: g().optional() }) } }, si = Ke([g(), Ux(Uint8Array), Ux(ArrayBuffer), Ux(DataView)]), ni = S({ buffer: si, name: g()[a(2259)]()[a(1712)](), mime: g()[a(2259)]()[a(1712)](), width: W().nullable()[a(1712)](), height: W()[a(2259)]()[a(1712)](), thumbnail: g()[a(2259)]().optional(), meta: De(S0())[a(1712)]() }), oi = { "fileResource.createFromExternal": { requestSchema: S({ url: g(), fileName: g()[a(1712)]() }), responseSchema: S({ resource: g()[a(1712)](), thumbnail: g()[a(1712)](), width: W()[a(1712)](), height: W()[a(1712)](), mime: g()[a(1712)](), mimeType: g()[a(1712)](), error: g()[a(1712)]() }) }, "fileResource.createFromLocal": { requestSchema: S({ types: ve(S({ description: g()[a(1712)](), extensions: ve(g())[a(1712)]() }))[a(1712)]() }), responseSchema: S({ resource: g()[a(1712)](), thumbnail: g().optional(), width: W()[a(1712)](), height: W()[a(1712)](), mime: g()[a(1712)](), error: g()[a(1712)]() }) }, "fileResource.createFromBuffer": { requestSchema: S({ files: ve(ni)[a(2310)](1) }), responseSchema: S({ resource: g().optional(), thumbnail: g().optional(), width: W()[a(1712)](), height: W().optional(), mime: g().optional(), error: g().optional() }) }, "fileResource.createByContent": { requestSchema: S({ contentUri: g(), boundaryUri: g()[a(1712)](), options: De(S0()).optional() }), responseSchema: S({ resource: g()[a(1712)](), thumbnail: g()[a(1712)](), width: W()[a(1712)](), height: W()[a(1712)](), mime: g()[a(1712)](), error: g()[a(1712)]() }) }, "fileResource.createByMask": { requestSchema: S({ maskUri: g(), boundaryUri: g()[a(1712)](), options: De(S0()).optional() }), responseSchema: S({ resource: g().optional(), thumbnail: g().optional(), width: W()[a(1712)](), height: W()[a(1712)](), mime: g().optional(), error: g()[a(1712)]() }) }, "fileResource.combineByCBM": { requestSchema: S({ contentUri: g(), boundaryUri: g(), maskUri: g()[a(2259)]().optional(), options: De(S0())[a(1712)](), thumbnail: ee()[a(1712)]() }), responseSchema: S({ resource: g()[a(1712)](), thumbnail: g().optional(), width: W()[a(1712)](), height: W().optional(), mime: g()[a(1712)](), error: g()[a(1712)]() }) }, "fileResource.delete": { requestSchema: S({ resources: ve(g()) }), responseSchema: S({ error: g()[a(1712)]() }) }, "fileResource.thumbnail": { requestSchema: S({ resource: g(), maxSize: W()[a(1712)]() }), responseSchema: S({ thumbnail: g()[a(1712)](), width: W()[a(1712)](), height: W()[a(1712)](), error: g()[a(1712)]() }) }, "fileResource.saveAs": { requestSchema: S({ resources: ve(g()) }), responseSchema: S({ error: g().optional() }) }, "boundary.normalize": { requestSchema: S({ boundary: g() }), responseSchema: S({ boundary: g().optional(), error: g()[a(1712)]() }) }, "layer.resolve": { requestSchema: S({ uri: g(), type: Ie([a(1525), a(2035)]) }), responseSchema: S({ uri: g().optional(), error: g()[a(1712)]() }) } }, ii = Eo({ nodes: { sdk: { store: Bo, actions: { ...Qo } }, uxp: { store: Zo, actions: { ...xi, ...oi, ...ri, ...ei, ...ai, ...ti } }, comfy: { store: Vo, actions: { ...Jo, ...Wo } } }, edges: [[a(1827), a(1014)], [a(978), a(1014)]] }), ke = ii[a(773)](a(978));
globalThis[a(437)] = ke;
var fx = { exports: {} }, Bx, Ma;
function ci() {
  if (Ma) return Bx;
  Ma = 1;
  var o = 1e3, x = o * 60, t = x * 60, r = t * 24, e = r * 7, s = r * 365.25;
  Bx = function(u, l) {
    const f = K;
    l = l || {};
    var b = typeof u;
    if (b === "string" && u[f(2910)] > 0) return n(u);
    if (b === f(1730) && isFinite(u)) return l[f(1775)] ? c(u) : i(u);
    throw new Error(f(2390) + JSON.stringify(u));
  };
  function n(u) {
    const l = K;
    if (u = String(u), !(u[l(2910)] > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(u);
      if (f) {
        var b = parseFloat(f[1]), h = (f[2] || "ms")[l(2071)]();
        switch (h) {
          case l(1265):
          case "year":
          case l(522):
          case "yr":
          case "y":
            return b * s;
          case l(2912):
          case l(1942):
          case "w":
            return b * e;
          case l(1876):
          case l(1776):
          case "d":
            return b * r;
          case l(1084):
          case l(2772):
          case l(1645):
          case "hr":
          case "h":
            return b * t;
          case l(700):
          case l(2785):
          case "mins":
          case l(2310):
          case "m":
            return b * x;
          case l(1217):
          case "second":
          case "secs":
          case "sec":
          case "s":
            return b * o;
          case l(1445):
          case l(1262):
          case "msecs":
          case l(1630):
          case "ms":
            return b;
          default:
            return;
        }
      }
    }
  }
  function i(u) {
    const l = K;
    var f = Math.abs(u);
    return f >= r ? Math[l(1987)](u / r) + "d" : f >= t ? Math[l(1987)](u / t) + "h" : f >= x ? Math.round(u / x) + "m" : f >= o ? Math[l(1987)](u / o) + "s" : u + "ms";
  }
  function c(u) {
    const l = K;
    var f = Math.abs(u);
    return f >= r ? d(u, f, r, l(1776)) : f >= t ? d(u, f, t, l(2772)) : f >= x ? d(u, f, x, l(2785)) : f >= o ? d(u, f, o, l(1156)) : u + " ms";
  }
  function d(u, l, f, b) {
    const h = K;
    var p = l >= f * 1.5;
    return Math[h(1987)](u / f) + " " + b + (p ? "s" : "");
  }
  return Bx;
}
var Zx, La;
function di() {
  if (La) return Zx;
  La = 1;
  function o(x) {
    const t = K;
    e[t(825)] = e, e[t(2889)] = e, e[t(2480)] = u, e[t(2470)] = c, e[t(2508)] = n, e[t(2106)] = d, e[t(2299)] = ci(), e[t(2019)] = l, Object.keys(x)[t(1548)]((f) => {
      e[f] = x[f];
    }), e[t(2426)] = [], e[t(2716)] = [], e[t(927)] = {};
    function r(f) {
      const b = t;
      let h = 0;
      for (let p = 0; p < f.length; p++)
        h = (h << 5) - h + f.charCodeAt(p), h |= 0;
      return e.colors[Math[b(553)](h) % e[b(2098)][b(2910)]];
    }
    e.selectColor = r;
    function e(f) {
      const b = t;
      let h, p = null, v, k;
      function P(...N) {
        const T = K;
        if (!P[T(2106)]) return;
        const C = P, I = Number(/* @__PURE__ */ new Date()), R = I - (h || I);
        C[T(1469)] = R, C[T(2443)] = h, C[T(2500)] = I, h = I, N[0] = e[T(2480)](N[0]), typeof N[0] !== T(1443) && N[T(2532)]("%O");
        let O = 0;
        N[0] = N[0][T(1840)](/%([a-zA-Z%])/g, (M, F) => {
          const q = T;
          if (M === "%%") return "%";
          O++;
          const H = e[q(927)][F];
          if (typeof H == "function") {
            const L = N[O];
            M = H[q(1175)](C, L), N[q(1571)](O, 1), O--;
          }
          return M;
        }), e[T(2385)][T(1175)](C, N), (C[T(2613)] || e.log).apply(C, N);
      }
      return P[b(1979)] = f, P.useColors = e[b(1307)](), P.color = e[b(2848)](f), P[b(1393)] = s, P[b(2019)] = e[b(2019)], Object[b(1171)](P, "enabled", { enumerable: !0, configurable: !1, get: () => {
        const N = b;
        return p !== null ? p : (v !== e[N(2689)] && (v = e.namespaces, k = e.enabled(f)), k);
      }, set: (N) => {
        p = N;
      } }), typeof e[b(2993)] === b(2855) && e[b(2993)](P), P;
    }
    function s(f, b) {
      const h = t, p = e(this[h(1979)] + (typeof b > "u" ? ":" : b) + f);
      return p[h(2613)] = this[h(2613)], p;
    }
    function n(f) {
      const b = t;
      e.save(f), e[b(2689)] = f, e[b(2426)] = [], e[b(2716)] = [];
      const h = (typeof f == "string" ? f : "")[b(1823)]()[b(1840)](/\s+/g, ",")[b(1389)](",")[b(2951)](Boolean);
      for (const p of h)
        p[0] === "-" ? e[b(2716)][b(816)](p[b(2527)](1)) : e[b(2426)][b(816)](p);
    }
    function i(f, b) {
      const h = t;
      let p = 0, v = 0, k = -1, P = 0;
      for (; p < f[h(2910)]; )
        if (v < b[h(2910)] && (b[v] === f[p] || b[v] === "*")) b[v] === "*" ? (k = v, P = p, v++) : (p++, v++);
        else if (k !== -1) v = k + 1, P++, p = P;
        else return !1;
      for (; v < b.length && b[v] === "*"; )
        v++;
      return v === b[h(2910)];
    }
    function c() {
      const f = t, b = [...e[f(2426)], ...e[f(2716)].map((h) => "-" + h)][f(952)](",");
      return e[f(2508)](""), b;
    }
    function d(f) {
      const b = t;
      for (const h of e[b(2716)])
        if (i(f, h)) return !1;
      for (const h of e[b(2426)])
        if (i(f, h)) return !0;
      return !1;
    }
    function u(f) {
      const b = t;
      return f instanceof Error ? f[b(2491)] || f.message : f;
    }
    function l() {
      console.warn(t(1018));
    }
    return e[t(2508)](e.load()), e;
  }
  return Zx = o, Zx;
}
var $a;
function ui() {
  const o = a;
  return $a || ($a = 1, (function(x, t) {
    const r = o;
    t[r(2385)] = s, t[r(1071)] = n, t[r(1758)] = i, t[r(1307)] = e, t.storage = c(), t[r(2019)] = /* @__PURE__ */ (() => {
      let u = !1;
      return () => {
        const l = K;
        !u && (u = !0, console.warn(l(1018)));
      };
    })(), t.colors = ["#0000CC", "#0000FF", r(1799), r(786), r(2769), r(2225), r(439), r(1433), "#00CC00", r(3004), r(2903), r(411), "#00CCCC", r(1503), r(1933), r(468), r(2142), r(652), "#3366CC", r(1551), r(2040), r(1835), r(792), r(1274), r(1253), r(2011), "#33CCCC", r(513), "#6600CC", r(2227), r(2350), r(1603), r(537), r(401), r(1384), r(2578), "#9933CC", r(1514), r(1845), "#99CC33", "#CC0000", "#CC0033", r(1830), r(2038), "#CC00CC", r(2648), "#CC3300", r(887), r(644), r(679), "#CC33CC", r(1751), "#CC6600", "#CC6633", r(1442), "#CC9933", r(490), r(2045), "#FF0000", r(2629), r(1618), r(676), r(2430), "#FF00FF", "#FF3300", r(2844), r(1228), r(580), r(1366), "#FF33FF", r(2413), r(1267), r(1945), r(1213), "#FFCC00", r(1782)];
    function e() {
      const u = r;
      if (typeof window !== u(1691) && window[u(475)] && (window[u(475)][u(506)] === "renderer" || window[u(475)][u(2982)])) return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator[u(1700)][u(2071)]().match(/(edge|trident)\/(\d+)/)) return !1;
      let l;
      return typeof document < "u" && document[u(2377)] && document[u(2377)][u(1692)] && document[u(2377)].style[u(2923)] || typeof window !== u(1691) && window[u(1505)] && (window[u(1505)][u(1325)] || window.console[u(1951)] && window[u(1505)].table) || typeof navigator < "u" && navigator[u(1700)] && (l = navigator.userAgent.toLowerCase()[u(742)](/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || typeof navigator < "u" && navigator[u(1700)] && navigator[u(1700)][u(2071)]()[u(742)](/applewebkit\/(\d+)/);
    }
    function s(u) {
      const l = r;
      if (u[0] = (this[l(1307)] ? "%c" : "") + this[l(1979)] + (this.useColors ? l(1991) : " ") + u[0] + (this[l(1307)] ? l(1040) : " ") + "+" + x[l(982)][l(2299)](this[l(1469)]), !this.useColors) return;
      const f = l(2379) + this.color;
      u.splice(1, 0, f, l(2810));
      let b = 0, h = 0;
      u[0][l(1840)](/%[a-zA-Z%]/g, (p) => {
        p !== "%%" && (b++, p === "%c" && (h = b));
      }), u[l(1571)](h, 0, f);
    }
    t[r(2613)] = console[r(825)] || console[r(2613)] || (() => {
    });
    function n(u) {
      const l = r;
      try {
        u ? t[l(1169)][l(393)](l(825), u) : t[l(1169)].removeItem(l(825));
      } catch {
      }
    }
    function i() {
      const u = r;
      let l;
      try {
        l = t.storage[u(2984)](u(825)) || t[u(1169)][u(2984)](u(669));
      } catch {
      }
      return !l && typeof process < "u" && u(2665) in process && (l = process[u(2665)].DEBUG), l;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x[r(982)] = di()(t);
    const { formatters: d } = x[r(982)];
    d.j = function(u) {
      const l = r;
      try {
        return JSON.stringify(u);
      } catch (f) {
        return l(1485) + f[l(2732)];
      }
    };
  })(fx, fx.exports)), fx[o(982)];
}
var li = ui();
const Gs = Ks(li);
Gs.enable("*");
function fi(o, x) {
  const t = a, r = Gs(o), e = (s, n) => async function(...i) {
    try {
      await x({ level: s, messages: i });
    } catch {
    }
  };
  return r[t(2613)] = e("log"), r;
}
const ox = fi(a(916), async ({ level: o, messages: x }) => {
  const t = a, { mcpMesh: r } = await Promise[t(510)]().then(() => od);
  await r.getNode("uxp")[t(1043)][t(2613)]({ level: o, messages: x });
}), hi = { "preview.show": a(839), "gateway.select_ai_service": a(479), "provider.select.title": a(2699), "provider.comfyui.description": a(3011), "provider.replicate.description": a(2134), "provider.runninghub.description": "模型物美价廉，海量社区应用", "provider.google.description": "OpenAI/Google 格式API", "task.waiting_upload": a(1124), "task.creating_task": a(690), "task.running_duration": a(3059), "task.cancelled": a(2059), "task.cancel_failed": a(2695), "task.default_name": a(2792), "comfy.connect": "连接", "comfy.load_failed": a(421), "comfy.loading": a(2968), "comfy.channel_connecting": a(991), "comfy.server_reconnecting": a(2587), "comfy.version_mismatch": a(843), "comfy.cloud_recommend": a(631), "comfy.your_workflows": a(2467), "comfy.refresh_workflows": a(1344), "comfy.queue_progress": "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": a(2249), "comfy.stop_auto_run": a(1634), "comfy.start_auto_run": a(1425), "comfy.auto_run_status": a(2174), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": a(2412), "comfy_simple.refreshing_preview": "刷新图片中", "comfy.select_workflow": "选择工作流", "comfy.task.name": a(2856), "comfy.error.task_cancelled": a(2059), "comfy.task.processing_progress": a(881), "comfy.help_tooltip": a(1450), "comfy.no_workflow_selected": a(933), "comfy_simple.missing_url": a(1633), "comfy_simple.loading_webview": a(541), "comfy_simple.http_error": a(2177), "comfy_simple.wait_connect": "等待 ComfyUI 连接完成…", "comfy_simple.loading": "工作流打开中", "comfy_simple.connection_required": "ComfyUI 未就绪", "comfy_simple.preview_empty": a(678), "comfy_simple.progress.idle": "空闲", "comfy_simple.auto_run": "自动", "comfy_simple.workflow_quick": "快捷", "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": "X10", "comfy_simple.prompt_templates.manage_tooltip": a(2411), "comfy_simple.prompt_templates.button": a(2866), "comfy_simple.prompt_templates.save_error": a(581), "comfy_simple.prompt_templates.missing_key": a(1897), "comfy_simple.prompt_templates.missing_value": "请填写提示词内容。", "comfy_simple.prompt_templates.duplicate_key": "模板名称已存在。", "comfy_simple.prompt_templates.save_success": "模板已保存。", "comfy_simple.prompt_templates.delete_confirm_title": a(694), "comfy_simple.prompt_templates.delete_confirm_content": a(1559), "comfy_simple.prompt_templates.delete_success": a(1550), "comfy_simple.prompt_templates.add_title": a(2652), "comfy_simple.prompt_templates.edit_title": a(2680), "comfy_simple.prompt_templates.modal_title": a(1534), "comfy_simple.prompt_templates.description": a(2207), "comfy_simple.prompt_templates.add_button": a(383), "comfy_simple.prompt_templates.name_placeholder": a(2497), "comfy_simple.prompt_templates.value_placeholder": a(890), "comfy_simple.fallback.title": a(2473), "comfy_simple.fallback.button": a(2473), "comfy_simple.prompt_templates.positive_label": "正面提示词", "comfy_simple.prompt_templates.negative_label": "负面提示词", "comfy_simple.prompt_templates.negative_placeholder": a(2477), "comfy_simple.prompt_templates.negative_empty": a(1095), "comfy_simple.prompt_templates.default_section": a(2338), "comfy_simple.prompt_templates.default_empty": a(1759), "comfy_simple.prompt_templates.default_tag": "默认", "comfy_simple.prompt_templates.custom_section": a(703), "comfy_simple.prompt_templates.custom_empty": "还没有自定义模板。", "comfy_simple.prompt_templates.applied_success": "模板已应用。", "comfy_simple.prompt_templates.applied_failed": a(2093), "comfy_simple.prompt_templates.apply_unavailable": a(2710), "comfy_simple.prompt_templates.apply_failed_missing_binding": "无法写入{{part}}提示词：未找到对应控件。", "comfy_simple.prompt_templates.apply_failed_caller_unavailable": "无法写入{{part}}提示词：ComfyUI 尚未就绪。", "comfy_simple.prompt_templates.apply_failed_set_error": a(1813), "common.delete": "删除", "comfy_simple.preview_click_to_send": "点击发送（Shift-点击新建文档）", "comfy_simple.workflow_select.empty": a(2991), "comfy_simple.workflow_select.select": "选择", "comfy_simple.workflow_select.selected": "已选择", "comfy_simple.workflow_select.current": "当前", "comfy_simple.workflow_select.load_failed": a(1028), "comfy_simple.workflow_select.members_only": a(789), "boundary.title": "输入设置", "boundary.tooltip": a(1212), "boundary.current_canvas": "整个画布", "boundary.current_layer": a(2394), "boundary.current_selection": a(1676), "boundary.set_as_canvas": a(2160), "boundary.set_as_layer": a(1042), "boundary.set_as_selection": a(2561), "http.404": "SDPPP可能未安装或和插件版本不匹配 (404)", "http.401": a(1007), "http.403": a(642), "http.408": a(2798), "http.500": a(503), "http.501": a(2462), "http.502": a(2241), "http.503": "服务不可用 (503)", "http.504": a(492), "http.unknown": a(1722), "runninghub.get_apikey": a(2419), "runninghub.apikey_placeholder": a(948), "runninghub.app_id": a(1455), "runninghub.webapp_id_placeholder": "此处粘贴 WebApp ID", "runninghub.open_app": "按回车打开应用： {{appName}}", "runninghub.execute": "执行", "runninghub.running": a(1831), "runninghub.rh_coins": "RH币:", "runninghub.current_tasks": a(3064), "runninghub.help_tooltip": "使用教程", "runninghub.stop_all": a(2683), "runninghub.status.waiting": a(779), "runninghub.status.running": a(2932), "runninghub.status.failed": a(629), "runninghub.status.success": a(1430), "image.auto_refetch": "自动从PS重新获取", "local_resource.selection.images": "图片", "runninghub.error.get_result_failed": "获取结果失败: {{error}}", "runninghub.error.task_failed": a(2351), "runninghub.error.task_incomplete": a(2872), "runninghub.error.account_status_http": a(1420), "runninghub.error.account_status_reason_unknown": a(1247), "runninghub.error.account_status_failed": a(830), "runninghub.error.form_data_http": a(2963), "runninghub.error.form_data_reason_unknown": "获取表单数据失败", "runninghub.error.form_data_failed": a(1132), "runninghub.error.node_info_missing": "运行失败 - 未获取到 nodeInfoList，请先执行 getNodes()。", "runninghub.error.run_http": a(2453), "runninghub.error.run_reason_default": "任务执行失败", "runninghub.error.run_failed": "run API 调用失败 - {{reason}}", "runninghub.error.status_http": a(1204), "runninghub.error.status_reason_unknown": a(1353), "runninghub.error.status_failed": "status API 调用失败 - {{reason}}", "runninghub.error.outputs_http": a(2240), "runninghub.error.outputs_failed": a(501), "runninghub.task.title": a(1036), "runninghub.error.upload_http": a(2455), "runninghub.error.upload_reason_unknown": "文件上传失败", "runninghub.error.upload_failed": "uploadImage API 调用失败 - {{reason}}", "customapi.error.no_image_returned": a(2052), "customapi.error.openai_api": "OpenAI API 错误", "customapi.error.input_required": a(1838), "customapi.error.generation_failed": a(2107), "customapi.task.name.google": a(2322), "customapi.task.name.openai": "OpenAI - 图片编辑", "customapi.error.unsupported_image_input": a(2141), "replicate.get_apikey": a(1779), "replicate.apikey_placeholder": "请输入您的Replicate API Key", "replicate.execute": "执行", "replicate.model_placeholder": a(774), "replicate.help_tooltip": a(1450), "replicate.loading": a(1926), "replicate.running": a(1831), "replicate.stop": "停止", "liblib.get_apikey": a(586), "liblib.execute": "执行", "common.close": "关闭", "common.save": "保存", "common.save_and_run": a(2286), "common.loading": "加载中...", "common.error": "错误", "common.error.unknown": a(2671), "common.error.task_creation_aborted": "任务创建已中止", "common.error.status_check_aborted": a(740), "common.error.result_fetch_aborted": a(2275), "common.error.upload_aborted": "上传已中止", "common.success": "成功", "common.failed": "失败", "common.generating": a(1785), "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": a(1283), "upload_pass.error.unsupported_type": "不支持的上传类型：{{type}}", "upload_pass.error.uploader_missing": a(2998), webviewInForeground: a(1021), webviewInForeground2: "点我恢复", "auth.login_success": "登录成功", "auth.username_label": a(2449), "auth.email_label": a(1644), "auth.logout": a(2458), "auth.login_required": a(2172), "image.send.select_position": "请选择要发送图像的位置", "image.send.sending": a(1131), "image.layer.new": a(2505), "image.layer.current": a(2394), "image.layer.fit_to_current": "适配至当前图层", "image.layer.fit_to_selection": a(2808), "image.layer.fit_to_canvas": a(487), "image.shortcut_auth_required": a(1047), "image.shortcut_focus_required": a(2001), "image.get.select_image": a(1946), "image.get.entire_canvas": a(1285), "image.get.canvas": "画布", "image.get.current_layer": "当前图层", "image.get.current_layer_bounds": "仅当前图层范围", "image.get.selection_bounds": a(1815), "image.get.canvas_bounds": a(461), "image.crop_by_selection": a(2135), "image.limit_size": a(2081), "image.crop.none": a(1842), "image.crop.inpaint": a(1365), "image.crop.outpaint": a(1658), "image.send_all": a(2173), "image.save_all": "保存所有", "image.save_current": "保存当前", "image.delete_current": "删除当前", "image.more_actions": a(1322), "image.jump_to_last": a(1088), "image.clear_all": a(2875), "image.send_to_ps": a(1657), "image.download": "下载", "image.copy": "复制", "image.sending": "正在发送...", "image.sending_all": "正在发送所有图片...", "mask.get.select_mask": a(2363), "mask.selection": "选区", "mask.current_layer_bounds": a(993), "mask.all": "全部", "mask.selection_exclude": a(1062), "mask.current_layer_exclude": a(666), "mask.empty": "空", "widgetable.photoshop.deprecated_node": a(617), "work_boundary.error.empty_selection_mask": "选区遮罩为空", "work_boundary.error.primary_resource_missing": a(1314), "work_boundary.error.mask_resource_missing": a(1786), "work_boundary.error.mask_apply_empty": a(2983), "document {{0}} not found": "找不到文档: {{0}}", "create document for preview": "创建预览文档", "resize document for preview": "调整预览文档尺寸", "create document for sent images": a(2730), "show sent images": a(2826), "create layer failed": a(1821), "layer not found {{0}}": a(1072), "layer not found: {{0}}": a(1072), "layer {{0}} is not a group": a(632), "no linked layer for {{0}}": a(2124), "no first related layer in {{0}}": a(2707), "merge group failed": a(2312), "get content of layer {{0}}": "获取图层 {{0}} 的内容", "get layer info": "获取图层信息", "get_layer_info: layer_identify required": a(1895), "get pixel of {{0}} failed": a(1255), "get selection failed": a(2938), "invalid name: {{0}}": a(549), "desire bounds is null": a(2627), "intersect or scaledDesire is null": a(1554), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': "不支持非文本图层: {{0}}", "select layer": "sdppp 选中图层", "run Photoshop Action": a(2715), "Action {{0}} not found": a(2291), "Action set {{0}} not found": "ActionSet {{0}} 未找到", "set text to layer": a(2777), "ComfyManager not found, cannot reboot": a(539), "Failed to reboot ComfyUI": a(1232), "image.upload.from_canvas": "画布", "image.upload.from_curlayer": a(2394), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": a(1075), "image.upload.syncing": a(363), "image.upload.no_images": "暂无图片", "image.upload.error": a(2205), "image.upload.tooltip.more_options_hint": a(643), "image.upload.tooltip.alt.crop": a(2944), "image.upload.tooltip.alt.reverse": a(453), "image.upload.tooltip.image.canvas": a(2476), "image.upload.tooltip.image.curlayer": "从 当前图层 获取图像", "image.upload.tooltip.mask.curlayer": a(1844), "image.upload.tooltip.mask.selection": a(1846), "image.upload.tooltip.mask.canvas": a(2384), "image.upload.tooltip.cut_action": a(2349), "image.upload.tooltip.scan_action": a(1467), "image.upload.tooltip.autosync.on": a(3056), "image.upload.tooltip.autosync.off": a(1944), "image.upload.tooltip.sync_action": a(1140), "image.upload.autosync.fetching": a(499), "image.upload.autosync.status.enabled": a(2660), "image.upload.autosync.status.disabled": a(1182), "image.upload.tooltip.current.canvas": a(1150), "image.upload.tooltip.current.layer": a(1238), "image.upload.tooltip.current.layer_named": "当前选项：图层 {{layerName}}", "image.upload.tooltip.current.file": a(1019), "image.upload.retry": "重试", "image.pack.local.button": a(2422), "image.pack.local.empty": "暂无图片", "image.auto_send_enabled": "自动填入画布开启", "image.auto_send_disabled": a(2717), "image.upload.primary.auto": "自动取图中…", "image.upload.primary.manual": a(2913), "image.upload.primary.hint": "该节点默认继承当前图层与遮罩", "image.upload.primary.cut": "裁剪", "image.upload.primary.scan": "扫描", "image.upload.primary.hint.line1": a(1828), "image.upload.primary.hint.line2": "主图", "workflow.output.destination.title": a(884), "workflow.output.destination.canvas": "全图", "image.upload.primary.advanced": a(1020), "image.upload.primary.advanced.modify": "修改", "image.upload.primary.advanced.reset": "重置", "image.upload.primary.advanced.local_file": a(1378), "image.upload.primary.advanced.content.canvas": "画布", "image.upload.primary.advanced.content.curlayer": a(2394), "image.upload.primary.advanced.content.selection": "选区", "image.upload.primary.advanced.boundary.canvas": a(2553), "image.upload.primary.advanced.boundary.curlayer": a(2206), "image.upload.primary.advanced.boundary.selection": a(2615), "image.upload.primary.advanced.boundary.primary": a(1886), "image.upload.source.file.tooltip": a(1368), "image.upload.mode.file.label": "文件", "image.upload.mode.layer.label": "图层", "image.upload.mode.canvas.label": "画布", "image.upload.source.layer.tooltip": a(2091), "image.upload.source.canvas.tooltip": a(1240), "image.upload.dropHint": a(1333), "image.upload.tooltip.clear_action": "清空选择", "image.upload.status.layer.short_named": a(787), "image.upload.status.layer.short": "图层", "image.upload.status.file.short": "本地文件", "image.upload.status.canvas.short": "画布", "image.upload.status.file.active": a(1666), "image.upload.status.file.resetHint": a(1490), "image.upload.status.mask.resetHint": "点击恢复默认遮罩", "image.upload.status.mask.modified": a(597), "image.upload.status.boundary.resetHint": "点击恢复默认边界", "image.upload.status.boundary.modified": a(2653), "image.upload.status.boundary.docMismatch": a(2583), "image.upload.mask.button": a(863), "image.upload.mask.selection": a(863), "image.upload.mask.layer": a(1992), "image.upload.remove_slot": a(885), "image.upload.add_slot": a(1878), "video.local.button": a(2536), "video.local.empty": a(2878), "video.local.remove": "清除视频", "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": a(1489), "source.ps_mask": "PS遮罩", "source.canvas": a(1285), "source.current_layer": a(2394), "source.selection": "选区", "source.quality_percent": a(1921), "source.crop.positive": "正向裁剪", "source.crop.negative": "反向裁剪", "source.reverse": "反转", "send_images.create_document": a(1533), "send_images.create_document_failed": a(1184), "photoshop.no_active_document": a(754), "photoshop.rectangle_coordinates_required": a(2999), "photoshop.create_guide_frame": a(2744), "photoshop.clear_guide_frame": a(764), "photoshop.invalid_action": "无效操作: {{action}}", "photoshop.file_not_found": a(1349), "photoshop.failed_to_open_file_as_document": "无法将文件作为文档打开: {{path}}", "photoshop.invalid_boundary": a(2133), "photoshop.failed_to_open_image_file": "无法打开图像文件: {{error}}", "photoshop.open_images_from_file": a(1470), "photoshop.failed_to_create_document_from_file": a(2934), "google.field.image_input": "输入图像", "google.field.prompt": "提示词", "google.field.batch_count": "批次数量", "google.field.images_per_batch": a(1219), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": "生成中", "google.apikey_placeholder": a(2723), "google.baseurl_placeholder": a(919), "google.get_apikey": "获取 API Key", "google.help_tooltip": a(1320), "google.model_name": a(1059), "google.model_label": "模型", "google.model_placeholder": a(1894), "google.stop": "停止", "google.loading": a(1926), "google.generating": a(1785), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": a(2852), "image.import_as_newdoc": a(2201), "image.boundary": "边界", "image.import_tip": "按住 Shift 键以新文档方式导入", "image.import_selection_button": a(1466), "image.import_auto_hint": "Shift 点击或右键可切换自动发送", "image.import_selection_hint": a(419), "auth.guest_login_success": a(691), "boundary.canvas": "画布", "boundary.select_boundary": a(909), "boundary.selection": "选区", "boundary.max_size": a(798), "boundary.max_size_error": a(2501), "boundary.max_size_hint": "留空表示不限", "boundary.max_size_placeholder": a(959), "boundary.no_limit": "不限", "boundary.image_quality": a(1631), "boundary.image_quality_required": "请输入质量百分比", "boundary.image_quality_range": "范围 1-100", "boundary.preview_main_image": a(2155), "boundary.preview_select": a(546), "boundary.preview_alt": a(2933), "boundary.preview_placeholder": a(1952), "boundary.settings": a(2414), "convert widget {0} failed:": a(1870), "document {0} not found": "未找到文档 {0}", "image.document.new": a(3006), "image.layer.smart_object": a(1709), "layer not found {0}": a(1966), "photoshop.invalid_boundary_type": a(908), "photoshop.no_active_layer": a(2880), "dialog.image_source.title": a(1600), "dialog.image_source.primary_canvas": a(497), "dialog.image_source.primary_curlayer": a(1280), "dialog.image_source.canvas_canvas": a(2339), "dialog.image_source.canvas_curlayer": a(2213), "dialog.image_source.curlayer_canvas": "以当前图层边界获取画布", "dialog.image_source.curlayer_curlayer": a(1616), "dialog.image_source.local_file": a(1378), "dialog.simple_source.title": a(1199), "dialog.simple_source.canvas": "画布", "dialog.simple_source.current_layer": a(2394), "dialog.simple_source.local_file": a(682), "dialog.simple_source.no_active_layer": "当前没有可用图层", "dialog.simple_source.pick_error": a(1008) }, pi = { "preview.show": "Show Preview ({{count}} images)", "gateway.select_ai_service": a(2851), "provider.select.title": a(2589), "provider.comfyui.description": a(2428), "provider.replicate.description": "Cloud-based model service platform", "provider.runninghub.description": a(1426), "provider.google.description": a(907), "task.waiting_upload": "Waiting for image upload...", "task.creating_task": a(757), "task.running_duration": a(994), "task.cancelled": a(2287), "task.cancel_failed": a(2202), "task.default_name": a(962), "comfy.connect": a(2868), "comfy.load_failed": a(2002), "comfy.loading": a(897), "comfy.channel_connecting": a(1829), "comfy.server_reconnecting": a(2370), "comfy.version_mismatch": a(3057), "comfy.cloud_recommend": a(934), "comfy.your_workflows": a(599), "comfy.refresh_workflows": a(699), "comfy.queue_progress": "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "comfy.save": a(470), "comfy.refresh": a(1619), "comfy.stop_cancel_all": "Stop and cancel all", "comfy.stop_auto_run": a(3002), "comfy.start_auto_run": "Auto run after canvas change", "comfy.auto_run_status": a(2442), "comfy.run": a(3049), "comfy.back": a(2567), "comfy.uploading": a(1576), "comfy_simple.refreshing_preview": a(2678), "comfy.select_workflow": a(1778), "comfy.task.name": a(2856), "comfy.error.task_cancelled": a(2287), "comfy.task.processing_progress": a(892), "comfy.help_tooltip": a(1702), "comfy.no_workflow_selected": a(2956), "comfy_simple.missing_url": a(1157), "comfy_simple.loading_webview": a(1670), "comfy_simple.http_error": "Failed to connect to ComfyUI (HTTP {{code}})", "comfy_simple.wait_connect": a(1385), "comfy_simple.loading": a(1605), "comfy_simple.connection_required": a(1162), "comfy_simple.preview_empty": a(2100), "comfy_simple.progress.idle": a(671), "comfy_simple.auto_run": "Auto", "comfy_simple.workflow_quick": a(928), "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": "X10", "comfy_simple.prompt_templates.manage_tooltip": a(1863), "comfy_simple.prompt_templates.button": a(2450), "comfy_simple.prompt_templates.save_error": a(1811), "comfy_simple.prompt_templates.missing_key": a(1027), "comfy_simple.prompt_templates.missing_value": a(985), "comfy_simple.prompt_templates.duplicate_key": a(706), "comfy_simple.prompt_templates.save_success": a(681), "comfy_simple.prompt_templates.delete_confirm_title": a(1473), "comfy_simple.prompt_templates.delete_confirm_content": a(802), "comfy_simple.prompt_templates.delete_success": a(2371), "comfy_simple.prompt_templates.add_title": a(1879), "comfy_simple.prompt_templates.edit_title": a(1740), "comfy_simple.prompt_templates.modal_title": "Prompt Templates", "comfy_simple.prompt_templates.description": a(649), "comfy_simple.prompt_templates.add_button": a(1752), "comfy_simple.prompt_templates.name_placeholder": a(708), "comfy_simple.prompt_templates.value_placeholder": a(2186), "comfy_simple.fallback.title": "More Settings", "comfy_simple.fallback.button": a(932), "comfy_simple.prompt_templates.positive_label": a(677), "comfy_simple.prompt_templates.negative_label": a(1102), "comfy_simple.prompt_templates.negative_placeholder": "Negative prompt content", "comfy_simple.prompt_templates.negative_empty": "Empty", "comfy_simple.prompt_templates.default_section": a(2004), "comfy_simple.prompt_templates.default_empty": "No default templates available.", "comfy_simple.prompt_templates.default_tag": a(1405), "comfy_simple.prompt_templates.custom_section": a(1108), "comfy_simple.prompt_templates.custom_empty": "No custom templates yet.", "comfy_simple.prompt_templates.applied_success": a(1168), "comfy_simple.prompt_templates.applied_failed": a(2336), "comfy_simple.prompt_templates.apply_unavailable": "Applying templates is unavailable right now.", "comfy_simple.prompt_templates.apply_failed_missing_binding": a(1160), "comfy_simple.prompt_templates.apply_failed_caller_unavailable": a(655), "comfy_simple.prompt_templates.apply_failed_set_error": a(1640), "common.delete": "Delete", "comfy_simple.preview_click_to_send": "Click to send (Shift-click creates new document)", "comfy_simple.workflow_select.empty": a(2353), "comfy_simple.workflow_select.select": a(796), "comfy_simple.workflow_select.selected": a(1874), "comfy_simple.workflow_select.current": a(2941), "comfy_simple.workflow_select.load_failed": a(709), "comfy_simple.workflow_select.members_only": a(1282), "boundary.title": a(2603), "boundary.tooltip": a(808), "boundary.current_canvas": "Entire Canvas", "boundary.current_layer": a(723), "boundary.current_selection": a(2021), "boundary.set_as_canvas": a(1611), "boundary.set_as_layer": "Set as Current Layer", "boundary.set_as_selection": a(2026), "http.404": a(2825), "http.401": "Unauthorized (401)", "http.403": "Forbidden (403)", "http.408": "Request timeout (408)", "http.500": "Server error (500)", "http.501": "Not implemented (501)", "http.502": a(1436), "http.503": "Service unavailable (503)", "http.504": a(976), "http.unknown": "Unknown error ({{code}})", "runninghub.get_apikey": a(606), "runninghub.apikey_placeholder": a(1653), "runninghub.app_id": "App ID:", "runninghub.webapp_id_placeholder": a(1858), "runninghub.open_app": a(1871), "runninghub.execute": a(2928), "runninghub.running": "Running...", "runninghub.rh_coins": a(2967), "runninghub.current_tasks": a(1677), "runninghub.help_tooltip": a(1702), "runninghub.stop_all": a(1376), "runninghub.status.waiting": a(1855), "runninghub.status.running": a(2811), "runninghub.status.failed": a(2032), "runninghub.status.success": "Success", "image.auto_refetch": "Auto repick from PS", "local_resource.selection.images": a(1371), "runninghub.error.get_result_failed": a(2714), "runninghub.error.task_failed": a(628), "runninghub.error.task_incomplete": a(2300), "runninghub.error.account_status_http": a(414), "runninghub.error.account_status_reason_unknown": a(809), "runninghub.error.account_status_failed": "getAccountStatus API failed - {{reason}}", "runninghub.error.form_data_http": a(2435), "runninghub.error.form_data_reason_unknown": a(1197), "runninghub.error.form_data_failed": a(1310), "runninghub.error.node_info_missing": a(2676), "runninghub.error.run_http": a(2366), "runninghub.error.run_reason_default": "Task execution failed", "runninghub.error.run_failed": "run API failed - {{reason}}", "runninghub.error.status_http": a(1814), "runninghub.error.status_reason_unknown": a(3024), "runninghub.error.status_failed": a(1608), "runninghub.error.outputs_http": a(683), "runninghub.error.outputs_failed": a(1734), "runninghub.task.title": "RunningHub - {{webappId}}", "runninghub.error.upload_http": a(2396), "runninghub.error.upload_reason_unknown": a(2280), "runninghub.error.upload_failed": a(1917), "customapi.error.no_image_returned": "No image returned", "customapi.error.openai_api": a(1509), "customapi.error.input_required": a(1194), "customapi.error.generation_failed": a(1667), "customapi.task.name.google": a(2754), "customapi.task.name.openai": a(2946), "customapi.error.unsupported_image_input": a(1093), "replicate.get_apikey": a(2514), "replicate.apikey_placeholder": "Enter your Replicate API Key", "replicate.execute": "Execute", "replicate.model_placeholder": "Paste your model name", "replicate.help_tooltip": a(1702), "replicate.loading": a(1144), "replicate.running": a(2843), "replicate.stop": "Stop", "liblib.get_apikey": a(663), "liblib.execute": a(2928), "common.close": a(1901), "common.save": a(470), "common.save_and_run": a(1091), "common.loading": a(1144), "common.error": a(429), "common.error.unknown": a(1412), "common.error.task_creation_aborted": "Task creation aborted", "common.error.status_check_aborted": a(2669), "common.error.result_fetch_aborted": "Result fetch aborted", "common.error.upload_aborted": a(1688), "common.success": a(1165), "common.failed": a(2032), "common.generating": a(1e3), "common.cancel": a(1833), "common.confirm": a(1334), "common.options": a(2246), "common.options_separator": a(659), "upload_pass.error.unsupported_type": "Unsupported upload type: {{type}}", "upload_pass.error.uploader_missing": a(1856), webviewInForeground: "PS shortcuts may be blocked by plugin...", webviewInForeground2: a(2466), "auth.login_success": a(540), "auth.username_label": a(1024), "auth.email_label": a(2639), "auth.logout": a(2319), "auth.login_required": "Please login to use the plugin", "image.send.select_position": a(664), "image.send.sending": a(420), "image.layer.new": "New Layer", "image.layer.current": "Current Layer", "image.layer.fit_to_current": "Fit to current layer", "image.layer.fit_to_selection": a(2950), "image.layer.fit_to_canvas": a(1769), "image.shortcut_auth_required": a(998), "image.shortcut_focus_required": "Plugin window focused required to use keyboard shortcut", "image.get.select_image": a(3058), "image.get.entire_canvas": "Entire Canvas", "image.get.canvas": a(1015), "image.get.current_layer": a(723), "image.get.current_layer_bounds": "Current layer bounds only", "image.get.selection_bounds": "Selection bounds only", "image.get.canvas_bounds": "Canvas bounds", "image.crop_by_selection": a(2077), "image.limit_size": a(2599), "image.crop.none": a(2278), "image.crop.inpaint": a(2382), "image.crop.outpaint": a(1051), "image.send_all": "Send all", "image.save_all": "Save all", "image.save_current": a(2262), "image.delete_current": a(2257), "image.more_actions": a(858), "image.jump_to_last": a(2341), "image.clear_all": "Clear all", "image.send_to_ps": "Send to PS", "image.download": "Download", "image.copy": a(660), "image.sending": a(387), "image.sending_all": a(743), "mask.get.select_mask": a(1635), "mask.selection": "Selection", "mask.current_layer_bounds": "Current layer bounds", "mask.all": a(886), "mask.selection_exclude": "Exclude selection", "mask.current_layer_exclude": a(2175), "mask.empty": a(893), "widgetable.photoshop.deprecated_node": "SDPPP 2.0 no longer needs this node", "work_boundary.error.empty_selection_mask": a(446), "work_boundary.error.primary_resource_missing": a(2484), "work_boundary.error.mask_resource_missing": a(557), "work_boundary.error.mask_apply_empty": a(451), "document {{0}} not found": a(2378), "create document for preview": a(2927), "resize document for preview": a(2634), "create document for sent images": "Create document for sent images", "show sent images": "Show sent images", "create layer failed": a(578), "layer not found {{0}}": a(1481), "layer not found: {{0}}": a(979), "layer {{0}} is not a group": a(2971), "no linked layer for {{0}}": "No linked layer for {{0}}", "no first related layer in {{0}}": a(697), "merge group failed": a(1573), "get content of layer {{0}}": "Get content of layer {{0}}", "get layer info": a(1097), "get_layer_info: layer_identify required": a(3069), "get pixel of {{0}} failed": a(1434), "get selection failed": a(1399), "invalid name: {{0}}": a(607), "desire bounds is null": a(1245), "intersect or scaledDesire is null": a(2525), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': a(2800), "select layer": a(1358), "run Photoshop Action": "Run Photoshop Action", "Action {{0}} not found": a(1117), "Action set {{0}} not found": a(2741), "set text to layer": a(2817), "ComfyManager not found, cannot reboot": a(2029), "Failed to reboot ComfyUI": a(1911), "image.upload.from_canvas": a(1015), "image.upload.from_curlayer": "Current Layer", "image.upload.from_selection": a(2840), "image.upload.from_harddisk": a(853), "image.upload.clear": a(1774), "image.upload.uploading": "Uploading, if the image too large, may be lag...", "image.upload.syncing": "Syncing assets", "image.upload.no_images": a(1746), "image.upload.error": a(929), "image.upload.tooltip.alt.crop": "+Alt crop by selection", "image.upload.tooltip.alt.reverse": a(2125), "image.upload.tooltip.image.canvas": "Get image from Canvas", "image.upload.tooltip.image.curlayer": a(2713), "image.upload.tooltip.mask.canvas": a(1974), "image.upload.tooltip.mask.curlayer": a(1454), "image.upload.tooltip.mask.selection": "Get mask from Selection", "image.upload.tooltip.cut_action": a(627), "image.upload.tooltip.scan_action": a(1078), "image.upload.tooltip.autosync.on": "Auto Sync: on", "image.upload.tooltip.autosync.off": a(2084), "image.upload.tooltip.sync_action": "Sync current content", "image.upload.tooltip.more_options_hint": a(1487), "image.upload.tooltip.current.canvas": "Current selection: Canvas", "image.upload.tooltip.current.layer": a(2746), "image.upload.tooltip.current.layer_named": a(2543), "image.upload.tooltip.current.file": "Current option: File", "image.upload.autosync.fetching": a(1969), "image.upload.autosync.status.enabled": "Auto sync in progress…", "image.upload.autosync.status.disabled": "Auto sync is off", "image.upload.retry": a(1139), "image.pack.local.button": "Local image pack", "image.pack.local.empty": a(834), "image.auto_send_enabled": a(2504), "image.auto_send_disabled": a(2432), "image.upload.primary.auto": a(1969), "image.upload.primary.manual": "Get Image", "image.upload.primary.cut": a(469), "image.upload.primary.scan": a(2696), "image.upload.primary.hint": a(583), "image.upload.primary.hint.line1": a(1704), "image.upload.primary.hint.line2": a(673), "workflow.output.destination.title": a(1025), "workflow.output.destination.canvas": a(2874), "image.upload.primary.advanced": "Advanced selection", "image.upload.primary.advanced.modify": a(1352), "image.upload.primary.advanced.reset": a(2747), "image.upload.primary.advanced.local_file": a(2392), "image.upload.primary.advanced.content.canvas": a(1015), "image.upload.primary.advanced.content.curlayer": a(2548), "image.upload.primary.advanced.content.selection": a(2840), "image.upload.primary.advanced.boundary.canvas": a(637), "image.upload.primary.advanced.boundary.curlayer": a(2853), "image.upload.primary.advanced.boundary.selection": a(2758), "image.upload.primary.advanced.boundary.primary": a(1409), "image.upload.mode.file.label": a(2990), "image.upload.mode.layer.label": a(2819), "image.upload.mode.canvas.label": a(1015), "image.upload.source.file.tooltip": "Upload from disk", "image.upload.source.layer.tooltip": a(1905), "image.upload.source.canvas.tooltip": a(619), "image.upload.dropHint": "Drag images here and release to upload", "image.upload.tooltip.clear_action": a(1482), "image.upload.status.layer.short_named": "Layer {{layerName}}", "image.upload.status.layer.short": a(2819), "image.upload.status.file.short": a(2392), "image.upload.status.canvas.short": "Canvas", "image.upload.status.file.active": a(2743), "image.upload.status.file.resetHint": "Click to remove local file", "image.upload.status.mask.resetHint": a(3062), "image.upload.status.mask.modified": a(2908), "image.upload.status.boundary.resetHint": a(2222), "image.upload.status.boundary.modified": a(1324), "image.upload.status.boundary.docMismatch": a(2538), "image.upload.mask.button": "Selection mask", "image.upload.mask.selection": a(1477), "image.upload.mask.layer": a(1859), "image.upload.remove_slot": a(2268), "image.upload.add_slot": "Add slot", "video.local.button": a(2917), "video.local.empty": a(2759), "video.local.remove": "Remove video", "source.source": a(721), "source.content": "Content", "source.boundary": a(1714), "source.mask": a(2111), "source.disk": a(853), "source.remote": a(2622), "source.unknown": a(900), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": "Canvas", "source.current_layer": a(1893), "source.selection": a(2840), "source.quality_percent": a(1009), "source.crop.positive": a(2761), "source.crop.negative": a(480), "source.reverse": a(1523), "send_images.create_document": a(1475), "send_images.create_document_failed": a(2835), "photoshop.no_active_document": a(2684), "photoshop.rectangle_coordinates_required": a(2431), "photoshop.create_guide_frame": a(2575), "photoshop.clear_guide_frame": "Clear guide frame", "photoshop.invalid_action": a(1999), "photoshop.file_not_found": a(484), "photoshop.failed_to_open_file_as_document": a(2171), "photoshop.invalid_boundary": "Invalid boundary: left must be less than right, top must be less than bottom", "photoshop.failed_to_open_image_file": a(2292), "photoshop.open_images_from_file": "Open images from file", "photoshop.failed_to_create_document_from_file": a(1218), "google.field.image_input": a(477), "google.field.prompt": a(1537), "google.field.batch_count": a(2736), "google.field.images_per_batch": a(633), "google.status.success": a(1165), "google.status.failed": a(2032), "google.status.generating": a(365), "google.apikey_placeholder": a(2925), "google.get_apikey": a(783), "google.baseurl_placeholder": "Base URL", "google.help_tooltip": "Google Gemini Image Generator", "google.model_name": a(2030), "google.model_label": a(841), "google.model_placeholder": a(2236), "google.stop": a(2814), "google.loading": a(1144), "google.generating": "Generating...", "google.generate": a(1370), "image.auto_toggle": "AUTO", "image.import_as_smartobject": a(2646), "image.import_as_newdoc": a(1083), "image.boundary": "Boundary", "image.import_tip": a(2763), "image.import_selection_button": a(989), "image.import_auto_hint": a(1211), "image.import_selection_hint": "Use current selection boundary", "auth.guest_login_success": a(638), "boundary.canvas": a(1015), "boundary.select_boundary": "Select boundary", "boundary.selection": "Selection", "boundary.max_size": a(1510), "boundary.max_size_error": a(1057), "boundary.max_size_hint": "Leave empty for no limit", "boundary.max_size_placeholder": a(718), "boundary.no_limit": "No limit", "boundary.image_quality": a(2255), "boundary.image_quality_required": "Enter a quality percentage", "boundary.image_quality_range": a(1659), "boundary.preview_main_image": a(1539), "boundary.preview_select": a(466), "boundary.preview_alt": a(528), "boundary.preview_placeholder": "Click to use current selection", "boundary.settings": "Adjust input settings", "convert widget {0} failed:": a(1391), "document {0} not found": a(514), "image.document.new": a(1176), "image.layer.smart_object": a(1101), "layer not found {0}": a(2749), "photoshop.invalid_boundary_type": a(616), "photoshop.no_active_layer": a(2395), "dialog.image_source.title": "Select Image Source", "dialog.image_source.primary_canvas": a(2260), "dialog.image_source.primary_curlayer": a(3017), "dialog.image_source.canvas_canvas": a(2555), "dialog.image_source.canvas_curlayer": "Fetch current layer with canvas boundary", "dialog.image_source.curlayer_canvas": a(950), "dialog.image_source.curlayer_curlayer": a(956), "dialog.image_source.local_file": a(1103), "dialog.simple_source.title": a(1773), "dialog.simple_source.canvas": a(1015), "dialog.simple_source.current_layer": a(723), "dialog.simple_source.local_file": a(396), "dialog.simple_source.no_active_layer": "No active layer available", "dialog.simple_source.pick_error": a(1572) }, be = (o) => typeof o === a(1443), J0 = () => {
  const o = a;
  let x, t;
  const r = new Promise((e, s) => {
    x = e, t = s;
  });
  return r[o(510)] = x, r[o(1056)] = t, r;
}, Ua = (o) => o == null ? "" : "" + o, mi = (o, x, t) => {
  o[a(1548)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, bi = /###/g, Ha = (o) => o && o[a(1316)](a(656)) > -1 ? o[a(1840)](bi, ".") : o, za = (o) => !o || be(o), Y0 = (o, x, t) => {
  const r = a, e = be(x) ? x[r(1389)](".") : x;
  let s = 0;
  for (; s < e[r(2910)] - 1; ) {
    if (za(o)) return {};
    const n = Ha(e[s]);
    !o[n] && t && (o[n] = new t()), Object[r(560)][r(938)][r(1175)](o, n) ? o = o[n] : o = {}, ++s;
  }
  return za(o) ? {} : { obj: o, k: Ha(e[s]) };
}, Va = (o, x, t) => {
  const r = a, { obj: e, k: s } = Y0(o, x, Object);
  if (e !== void 0 || x[r(2910)] === 1) {
    e[s] = t;
    return;
  }
  let n = x[x[r(2910)] - 1], i = x[r(2527)](0, x.length - 1), c = Y0(o, i, Object);
  for (; c[r(2554)] === void 0 && i.length; )
    n = i[i[r(2910)] - 1] + "." + n, i = i[r(2527)](0, i.length - 1), c = Y0(o, i, Object), c != null && c[r(2554)] && typeof c[r(2554)][c.k + "." + n] < "u" && (c[r(2554)] = void 0);
  c[r(2554)][c.k + "." + n] = t;
}, gi = (o, x, t, r) => {
  const e = a, { obj: s, k: n } = Y0(o, x, Object);
  s[n] = s[n] || [], s[n][e(816)](t);
}, Cx = (o, x) => {
  const t = a, { obj: r, k: e } = Y0(o, x);
  if (r && Object[t(560)].hasOwnProperty.call(r, e))
    return r[e];
}, yi = (o, x, t) => {
  const r = Cx(o, t);
  return r !== void 0 ? r : Cx(x, t);
}, Js = (o, x, t) => {
  const r = a;
  for (const e in x)
    e !== r(888) && e !== "constructor" && (e in o ? be(o[e]) || o[e] instanceof String || be(x[e]) || x[e] instanceof String ? t && (o[e] = x[e]) : Js(o[e], x[e], t) : o[e] = x[e]);
  return o;
}, U0 = (o) => o[a(1840)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, a(2802));
var vi = { "&": a(2838), "<": a(1718), ">": a(1299), '"': a(593), "'": "&#39;", "/": "&#x2F;" };
const wi = (o) => {
  const x = a;
  return be(o) ? o[x(1840)](/[&<>"'\/]/g, (t) => vi[t]) : o;
};
class Si {
  constructor(x) {
    const t = a;
    this[t(975)] = x, this.regExpMap = /* @__PURE__ */ new Map(), this[t(463)] = [];
  }
  getRegExp(x) {
    const t = a, r = this[t(2335)][t(2620)](x);
    if (r !== void 0) return r;
    const e = new RegExp(x);
    return this[t(463)][t(2910)] === this[t(975)] && this[t(2335)][t(1239)](this[t(463)][t(613)]()), this.regExpMap[t(2454)](x, e), this[t(463)][t(816)](x), e;
  }
}
const ki = [" ", ",", "?", "!", ";"], Pi = new Si(20), Ii = (o, x, t) => {
  const r = a;
  x = x || "", t = t || "";
  const e = ki.filter((i) => x[r(1316)](i) < 0 && t[r(1316)](i) < 0);
  if (e[r(2910)] === 0) return !0;
  const s = Pi[r(2325)]("(" + e[r(1429)]((i) => i === "?" ? "\\?" : i)[r(952)]("|") + ")");
  let n = !s[r(2266)](o);
  if (!n) {
    const i = o.indexOf(t);
    i > 0 && !s[r(2266)](o.substring(0, i)) && (n = !0);
  }
  return n;
}, Jt = (o, x, t = ".") => {
  const r = a;
  if (!o) return;
  if (o[x])
    return Object[r(560)][r(938)].call(o, x) ? o[x] : void 0;
  const e = x[r(1389)](t);
  let s = o;
  for (let n = 0; n < e.length; ) {
    if (!s || typeof s !== r(2517)) return;
    let i, c = "";
    for (let d = n; d < e[r(2910)]; ++d)
      if (d !== n && (c += t), c += e[d], i = s[c], i !== void 0) {
        if ([r(1443), r(1730), r(1964)].indexOf(typeof i) > -1 && d < e[r(2910)] - 1) continue;
        n += d - n + 1;
        break;
      }
    s = i;
  }
  return s;
}, sx = (o) => o == null ? void 0 : o[a(1840)]("_", "-"), Ei = { type: a(3053), log(o) {
  const x = a;
  this.output(x(2613), o);
}, warn(o) {
  const x = a;
  this[x(1717)](x(405), o);
}, error(o) {
  const x = a;
  this[x(1717)](x(1493), o);
}, output(o, x) {
  var t, r;
  (r = (t = console == null ? void 0 : console[o]) == null ? void 0 : t.apply) == null || r.call(t, console, x);
} };
class Rx {
  constructor(x, t = {}) {
    this[a(2993)](x, t);
  }
  [a(2993)](x, t = {}) {
    const r = a;
    this[r(2159)] = t.prefix || r(1362), this[r(3053)] = x || Ei, this[r(961)] = t, this.debug = t[r(825)];
  }
  [a(2613)](...x) {
    const t = a;
    return this.forward(x, t(2613), "", !0);
  }
  warn(...x) {
    const t = a;
    return this[t(2195)](x, t(405), "", !0);
  }
  [a(1493)](...x) {
    return this[a(2195)](x, "error", "");
  }
  [a(413)](...x) {
    const t = a;
    return this[t(2195)](x, t(405), t(819), !0);
  }
  [a(2195)](x, t, r, e) {
    return e && !this[a(825)] ? null : (be(x[0]) && (x[0] = "" + r + this.prefix + " " + x[0]), this.logger[t](x));
  }
  [a(1468)](x) {
    const t = a;
    return new Rx(this[t(3053)], { prefix: this[t(2159)] + ":" + x + ":", ...this.options });
  }
  [a(1022)](x) {
    const t = a;
    return x = x || this[t(961)], x[t(2159)] = x[t(2159)] || this.prefix, new Rx(this.logger, x);
  }
}
var f0 = new Rx();
class Ax {
  constructor() {
    const x = a;
    this[x(1248)] = {};
  }
  on(x, t) {
    const r = a;
    return x[r(1389)](" ")[r(1548)]((e) => {
      const s = r;
      this[s(1248)][e] || (this[s(1248)][e] = /* @__PURE__ */ new Map());
      const n = this.observers[e][s(2620)](t) || 0;
      this[s(1248)][e][s(2454)](t, n + 1);
    }), this;
  }
  [a(1495)](x, t) {
    const r = a;
    if (this[r(1248)][x]) {
      if (!t) {
        delete this[r(1248)][x];
        return;
      }
      this[r(1248)][x][r(1239)](t);
    }
  }
  [a(1452)](x, ...t) {
    const r = a;
    this[r(1248)][x] && Array.from(this[r(1248)][x].entries())[r(1548)](([s, n]) => {
      for (let i = 0; i < n; i++)
        s(...t);
    }), this[r(1248)]["*"] && Array[r(2725)](this.observers["*"][r(807)]())[r(1548)](([s, n]) => {
      for (let i = 0; i < n; i++)
        s.apply(s, [x, ...t]);
    });
  }
}
class Ba extends Ax {
  constructor(x, t = { ns: [a(2191)], defaultNS: "translation" }) {
    const r = a;
    super(), this[r(571)] = x || {}, this.options = t, this[r(961)][r(3040)] === void 0 && (this[r(961)][r(3040)] = "."), this.options[r(1281)] === void 0 && (this[r(961)].ignoreJSONStructure = !0);
  }
  addNamespaces(x) {
    const t = a;
    this[t(961)].ns[t(1316)](x) < 0 && this[t(961)].ns[t(816)](x);
  }
  removeNamespaces(x) {
    const t = a, r = this.options.ns[t(1316)](x);
    r > -1 && this[t(961)].ns.splice(r, 1);
  }
  [a(2305)](x, t, r, e = {}) {
    var u, l;
    const s = a, n = e.keySeparator !== void 0 ? e[s(3040)] : this[s(961)].keySeparator, i = e.ignoreJSONStructure !== void 0 ? e[s(1281)] : this.options.ignoreJSONStructure;
    let c;
    x[s(1316)](".") > -1 ? c = x[s(1389)](".") : (c = [x, t], r && (Array[s(2573)](r) ? c[s(816)](...r) : be(r) && n ? c[s(816)](...r[s(1389)](n)) : c.push(r)));
    const d = Cx(this[s(571)], c);
    return !d && !t && !r && x.indexOf(".") > -1 && (x = c[0], t = c[1], r = c[s(2527)](2)[s(952)](".")), d || !i || !be(r) ? d : Jt((l = (u = this[s(571)]) == null ? void 0 : u[x]) == null ? void 0 : l[t], r, n);
  }
  addResource(x, t, r, e, s = { silent: !1 }) {
    const n = a, i = s[n(3040)] !== void 0 ? s[n(3040)] : this[n(961)][n(3040)];
    let c = [x, t];
    r && (c = c.concat(i ? r[n(1389)](i) : r)), x.indexOf(".") > -1 && (c = x.split("."), e = t, t = c[1]), this[n(2616)](t), Va(this[n(571)], c, e), s.silent || this[n(1452)](n(2148), x, t, r, e);
  }
  [a(667)](x, t, r, e = { silent: !1 }) {
    const s = a;
    for (const n in r)
      (be(r[n]) || Array.isArray(r[n])) && this[s(1202)](x, t, n, r[n], { silent: !0 });
    e.silent || this[s(1452)](s(2148), x, t, r);
  }
  [a(474)](x, t, r, e, s, n = { silent: !1, skipCopy: !1 }) {
    const i = a;
    let c = [x, t];
    x[i(1316)](".") > -1 && (c = x[i(1389)]("."), e = r, r = t, t = c[1]), this.addNamespaces(t);
    let d = Cx(this[i(571)], c) || {};
    n[i(2515)] || (r = JSON[i(1584)](JSON.stringify(r))), e ? Js(d, r, s) : d = { ...d, ...r }, Va(this.data, c, d), n[i(1902)] || this.emit(i(2148), x, t, r);
  }
  [a(2726)](x, t) {
    const r = a;
    this[r(1340)](x, t) && delete this.data[x][t], this[r(2655)](t), this[r(1452)](r(1377), x, t);
  }
  hasResourceBundle(x, t) {
    return this[a(2305)](x, t) !== void 0;
  }
  getResourceBundle(x, t) {
    const r = a;
    return t || (t = this.options[r(2094)]), this[r(2305)](x, t);
  }
  [a(3051)](x) {
    return this[a(571)][x];
  }
  [a(2272)](x) {
    const t = a, r = this[t(3051)](x);
    return !!(r && Object[t(548)](r) || [])[t(1801)]((s) => r[s] && Object[t(548)](r[s])[t(2910)] > 0);
  }
  [a(1613)]() {
    return this[a(571)];
  }
}
var Qs = { processors: {}, addPostProcessor(o) {
  const x = a;
  this.processors[o[x(1907)]] = o;
}, handle(o, x, t, r, e) {
  const s = a;
  return o[s(1548)]((n) => {
    var c;
    x = ((c = this[s(945)][n]) == null ? void 0 : c.process(x, t, r, e)) ?? x;
  }), x;
} };
const Xs = Symbol(a(636));
function Ci() {
  const o = a, x = [], t = Object[o(1468)](null);
  let r;
  return t.get = (e, s) => {
    var i;
    const n = o;
    return (i = r == null ? void 0 : r[n(1226)]) == null || i.call(r), s === Xs ? x : (x.push(s), r = Proxy[n(1439)](e, t), r[n(2169)]);
  }, Proxy.revocable(Object[o(1468)](null), t).proxy;
}
function Qt(o, x) {
  const t = a, { [Xs]: r } = o(Ci());
  return r.join((x == null ? void 0 : x[t(3040)]) ?? ".");
}
const Za = {}, Wx = (o) => !be(o) && typeof o !== a(1964) && typeof o != "number";
class Fx extends Ax {
  constructor(x, t = {}) {
    const r = a;
    super(), mi(["resourceStore", r(1484), r(2010), "interpolator", r(559), r(1216), r(3039)], x, this), this[r(961)] = t, this[r(961)][r(3040)] === void 0 && (this[r(961)][r(3040)] = "."), this[r(3053)] = f0[r(1468)](r(2506));
  }
  [a(1355)](x) {
    const t = a;
    x && (this[t(2621)] = x);
  }
  [a(1193)](x, t = { interpolation: {} }) {
    const r = a, e = { ...t };
    if (x == null) return !1;
    const s = this[r(510)](x, e);
    if ((s == null ? void 0 : s[r(873)]) === void 0) return !1;
    const n = Wx(s[r(873)]);
    return !(e.returnObjects === !1 && n);
  }
  extractFromKey(x, t) {
    const r = a;
    let e = t[r(2244)] !== void 0 ? t[r(2244)] : this.options[r(2244)];
    e === void 0 && (e = ":");
    const s = t[r(3040)] !== void 0 ? t[r(3040)] : this[r(961)].keySeparator;
    let n = t.ns || this[r(961)][r(2094)] || [];
    const i = e && x[r(1316)](e) > -1, c = !this[r(961)][r(2082)] && !t[r(3040)] && !this.options[r(2845)] && !t[r(2244)] && !Ii(x, e, s);
    if (i && !c) {
      const d = x.match(this.interpolator[r(3018)]);
      if (d && d[r(2910)] > 0) return { key: x, namespaces: be(n) ? [n] : n };
      const u = x[r(1389)](e);
      (e !== s || e === s && this[r(961)].ns[r(1316)](u[0]) > -1) && (n = u[r(613)]()), x = u.join(s);
    }
    return { key: x, namespaces: be(n) ? [n] : n };
  }
  [a(872)](x, t, r) {
    const e = a;
    let s = typeof t === e(2517) ? { ...t } : t;
    if (typeof s != "object" && this.options[e(2401)] && (s = this[e(961)][e(2401)](arguments)), typeof s === e(2517) && (s = { ...s }), s || (s = {}), x == null) return "";
    typeof x === e(2855) && (x = Qt(x, { ...this[e(961)], ...s })), Array[e(2573)](x) || (x = [String(x)]);
    const n = s[e(596)] !== void 0 ? s.returnDetails : this[e(961)][e(596)], i = s[e(3040)] !== void 0 ? s.keySeparator : this[e(961)][e(3040)], { key: c, namespaces: d } = this[e(2109)](x[x[e(2910)] - 1], s), u = d[d[e(2910)] - 1];
    let l = s.nsSeparator !== void 0 ? s[e(2244)] : this[e(961)][e(2244)];
    l === void 0 && (l = ":");
    const f = s[e(1581)] || this[e(2621)], b = s[e(1516)] || this[e(961)][e(1516)];
    if ((f == null ? void 0 : f[e(2071)]()) === e(1223))
      return b ? n ? { res: "" + u + l + c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: u, usedParams: this[e(418)](s) } : "" + u + l + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: u, usedParams: this.getUsedParamsDetails(s) } : c;
    const h = this[e(510)](x, s);
    let p = h == null ? void 0 : h.res;
    const v = (h == null ? void 0 : h.usedKey) || c, k = (h == null ? void 0 : h[e(2200)]) || c, P = ["[object Number]", e(736), e(1067)], N = s.joinArrays !== void 0 ? s[e(542)] : this[e(961)].joinArrays, T = !this[e(1216)] || this.i18nFormat[e(2357)], C = s[e(2285)] !== void 0 && !be(s[e(2285)]), I = Fx[e(400)](s), R = C ? this.pluralResolver[e(3036)](f, s[e(2285)], s) : "", O = s[e(2496)] && C ? this[e(2010)].getSuffix(f, s[e(2285)], { ordinal: !1 }) : "", D = C && !s[e(2496)] && s[e(2285)] === 0, M = D && s[e(2628) + this[e(961)][e(2818)] + "zero"] || s[e(2628) + R] || s[e(2628) + O] || s[e(2628)];
    let F = p;
    T && !p && I && (F = M);
    const q = Wx(F), H = Object[e(560)].toString.apply(F);
    if (T && F && q && P[e(1316)](H) < 0 && !(be(N) && Array.isArray(F))) {
      if (!s[e(2896)] && !this[e(961)][e(2896)]) {
        !this.options[e(1343)] && this[e(3053)][e(405)](e(1743));
        const L = this[e(961)][e(1343)] ? this[e(961)][e(1343)](v, F, { ...s, ns: d }) : e(1086) + c + " (" + this[e(2621)] + e(2760);
        return n ? (h.res = L, h[e(448)] = this[e(418)](s), h) : L;
      }
      if (i) {
        const L = Array[e(2573)](F), z = L ? [] : {}, G = L ? k : v;
        for (const se in F)
          if (Object[e(560)][e(938)][e(1175)](F, se)) {
            const re = "" + G + i + se;
            I && !p ? z[se] = this[e(872)](re, { ...s, defaultValue: Wx(M) ? M[se] : void 0, joinArrays: !1, ns: d }) : z[se] = this[e(872)](re, { ...s, joinArrays: !1, ns: d }), z[se] === re && (z[se] = F[se]);
          }
        p = z;
      }
    } else if (T && be(N) && Array.isArray(p))
      p = p.join(N), p && (p = this.extendTranslation(p, x, s, r));
    else {
      let L = !1, z = !1;
      !this[e(1920)](p) && I && (L = !0, p = M), !this[e(1920)](p) && (z = !0, p = c);
      const G = s[e(2518)] || this[e(961)].missingKeyNoValueFallbackToKey, se = G && z ? void 0 : p, re = I && M !== p && this[e(961)][e(608)];
      if (z || L || re) {
        if (this[e(3053)].log(e(re ? 1812 : 1415), f, u, c, re ? M : p), i) {
          const we = this[e(510)](c, { ...s, keySeparator: !1 });
          we && we.res && this[e(3053)][e(405)](e(399));
        }
        let ue = [];
        const fe = this[e(1484)].getFallbackCodes(this[e(961)][e(430)], s.lng || this[e(2621)]);
        if (this[e(961)].saveMissingTo === e(634) && fe && fe[0]) for (let we = 0; we < fe[e(2910)]; we++)
          ue[e(816)](fe[we]);
        else this[e(961)].saveMissingTo === "all" ? ue = this[e(1484)].toResolveHierarchy(s[e(1581)] || this[e(2621)]) : ue.push(s.lng || this.language);
        const le = (we, Ce, Me) => {
          var _;
          const Re = e, Je = I && Me !== p ? Me : se;
          this[Re(961)][Re(584)] ? this[Re(961)][Re(584)](we, u, Ce, Je, re, s) : (_ = this[Re(559)]) != null && _.saveMissing && this.backendConnector[Re(2770)](we, u, Ce, Je, re, s), this.emit(Re(1415), we, u, Ce, p);
        };
        this[e(961)][e(2770)] && (this[e(961)].saveMissingPlurals && C ? ue[e(1548)]((we) => {
          const Ce = e, Me = this[Ce(2010)][Ce(2007)](we, s);
          D && s[Ce(2628) + this[Ce(961)].pluralSeparator + Ce(1120)] && Me[Ce(1316)](this.options[Ce(2818)] + Ce(1120)) < 0 && Me[Ce(816)](this.options[Ce(2818)] + Ce(1120)), Me.forEach((Re) => {
            const Je = Ce;
            le([we], c + Re, s[Je(2628) + Re] || M);
          });
        }) : le(ue, c, M));
      }
      p = this[e(1488)](p, x, s, h, r), z && p === c && this[e(961)][e(2190)] && (p = "" + u + l + c), (z || L) && this[e(961)][e(1937)] && (p = this[e(961)].parseMissingKeyHandler(this[e(961)].appendNamespaceToMissingKey ? "" + u + l + c : c, L ? p : void 0, s));
    }
    return n ? (h[e(873)] = p, h.usedParams = this[e(418)](s), h) : p;
  }
  extendTranslation(x, t, r, e, s) {
    var d, u;
    const n = a;
    if ((d = this[n(1216)]) != null && d[n(1584)]) x = this[n(1216)][n(1584)](x, { ...this[n(961)].interpolation[n(1594)], ...r }, r.lng || this.language || e[n(1246)], e[n(946)], e.usedKey, { resolved: e });
    else if (!r.skipInterpolation) {
      r.interpolation && this[n(1686)].init({ ...r, interpolation: { ...this[n(961)].interpolation, ...r[n(2343)] } });
      const l = be(x) && (((u = r == null ? void 0 : r[n(2343)]) == null ? void 0 : u[n(1220)]) !== void 0 ? r[n(2343)][n(1220)] : this[n(961)][n(2343)].skipOnVariables);
      let f;
      if (l) {
        const h = x[n(742)](this[n(1686)].nestingRegexp);
        f = h && h[n(2910)];
      }
      let b = r[n(1840)] && !be(r[n(1840)]) ? r[n(1840)] : r;
      if (this.options[n(2343)][n(1594)] && (b = { ...this.options[n(2343)][n(1594)], ...b }), x = this[n(1686)][n(1719)](x, b, r[n(1581)] || this[n(2621)] || e[n(1246)], r), l) {
        const h = x[n(742)](this[n(1686)].nestingRegexp), p = h && h[n(2910)];
        f < p && (r[n(1544)] = !1);
      }
      !r.lng && e && e[n(873)] && (r[n(1581)] = this.language || e[n(1246)]), r.nest !== !1 && (x = this.interpolator[n(1544)](x, (...h) => {
        const p = n;
        return (s == null ? void 0 : s[0]) === h[0] && !r.context ? (this[p(3053)][p(405)](p(1166) + h[0] + p(1241) + t[0]), null) : this[p(872)](...h, t);
      }, r)), r.interpolation && this[n(1686)][n(2461)]();
    }
    const i = r[n(1312)] || this[n(961)][n(1312)], c = be(i) ? [i] : i;
    return x != null && (c != null && c.length) && r.applyPostProcessor !== !1 && (x = Qs.handle(c, x, t, this[n(961)] && this[n(961)][n(2235)] ? { i18nResolved: { ...e, usedParams: this[n(418)](r) }, ...r } : r, this)), x;
  }
  [a(510)](x, t = {}) {
    const r = a;
    let e, s, n, i, c;
    return be(x) && (x = [x]), x[r(1548)]((d) => {
      const u = r;
      if (this[u(1920)](e)) return;
      const l = this[u(2109)](d, t), f = l.key;
      s = f;
      let b = l.namespaces;
      this.options[u(1578)] && (b = b[u(653)](this[u(961)][u(1578)]));
      const h = t[u(2285)] !== void 0 && !be(t[u(2285)]), p = h && !t.ordinal && t[u(2285)] === 0, v = t[u(394)] !== void 0 && (be(t[u(394)]) || typeof t[u(394)] === u(1730)) && t[u(394)] !== "", k = t[u(1476)] ? t[u(1476)] : this[u(1484)][u(2833)](t.lng || this[u(2621)], t[u(430)]);
      b[u(1548)]((P) => {
        var T, C;
        const N = u;
        this[N(1920)](e) || (c = P, !Za[k[0] + "-" + P] && ((T = this[N(3039)]) != null && T[N(722)]) && !((C = this[N(3039)]) != null && C[N(722)](c)) && (Za[k[0] + "-" + P] = !0, this[N(3053)][N(405)](N(2937) + s + N(771) + k[N(952)](", ") + N(1541) + c + '" was not yet loaded', "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), k[N(1548)]((I) => {
          var M;
          const R = N;
          if (this[R(1920)](e)) return;
          i = I;
          const O = [f];
          if ((M = this.i18nFormat) != null && M[R(2670)]) this.i18nFormat[R(2670)](O, f, I, P, t);
          else {
            let F;
            h && (F = this[R(2010)].getSuffix(I, t[R(2285)], t));
            const q = this[R(961)].pluralSeparator + R(1120), H = this[R(961)][R(2818)] + R(2496) + this[R(961)][R(2818)];
            if (h && (t[R(2496)] && F.indexOf(H) === 0 && O[R(816)](f + F[R(1840)](H, this[R(961)][R(2818)])), O[R(816)](f + F), p && O.push(f + q)), v) {
              const L = "" + f + (this[R(961)][R(630)] || "_") + t.context;
              O[R(816)](L), h && (t[R(2496)] && F[R(1316)](H) === 0 && O[R(816)](L + F[R(1840)](H, this.options[R(2818)])), O[R(816)](L + F), p && O[R(816)](L + q));
            }
          }
          let D;
          for (; D = O[R(641)](); )
            !this[R(1920)](e) && (n = D, e = this[R(2305)](I, P, D, t));
        }));
      });
    }), { res: e, usedKey: s, exactUsedKey: n, usedLng: i, usedNS: c };
  }
  [a(1920)](x) {
    const t = a;
    return x !== void 0 && !(!this[t(961)].returnNull && x === null) && !(!this[t(961)].returnEmptyString && x === "");
  }
  getResource(x, t, r, e = {}) {
    var n;
    const s = a;
    return (n = this[s(1216)]) != null && n[s(2305)] ? this[s(1216)][s(2305)](x, t, r, e) : this[s(2008)][s(2305)](x, t, r, e);
  }
  [a(418)](x = {}) {
    const t = a, r = [t(2628), t(2496), t(394), t(1840), "lng", t(1476), "fallbackLng", "ns", t(3040), "nsSeparator", t(2896), "returnDetails", "joinArrays", "postProcess", t(2343)], e = x.replace && !be(x[t(1840)]);
    let s = e ? x[t(1840)] : x;
    if (e && typeof x[t(2285)] !== t(1691) && (s[t(2285)] = x[t(2285)]), this[t(961)][t(2343)][t(1594)] && (s = { ...this[t(961)][t(2343)].defaultVariables, ...s }), !e) {
      s = { ...s };
      for (const n of r)
        delete s[n];
    }
    return s;
  }
  static [a(400)](x) {
    const t = a, r = "defaultValue";
    for (const e in x)
      if (Object[t(560)].hasOwnProperty[t(1175)](x, e) && r === e[t(1003)](0, r[t(2910)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Wa {
  constructor(x) {
    const t = a;
    this[t(961)] = x, this[t(2129)] = this[t(961)][t(2129)] || !1, this[t(3053)] = f0[t(1468)](t(1484));
  }
  [a(1690)](x) {
    const t = a;
    if (x = sx(x), !x || x[t(1316)]("-") < 0) return null;
    const r = x.split("-");
    return r.length === 2 || (r[t(641)](), r[r[t(2910)] - 1][t(2071)]() === "x") ? null : this.formatLanguageCode(r[t(952)]("-"));
  }
  [a(1179)](x) {
    const t = a;
    if (x = sx(x), !x || x[t(1316)]("-") < 0) return x;
    const r = x.split("-");
    return this.formatLanguageCode(r[0]);
  }
  [a(874)](x) {
    const t = a;
    if (be(x) && x.indexOf("-") > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(x)[0];
      } catch {
      }
      return r && this.options.lowerCaseLng && (r = r[t(2071)]()), r || (this[t(961)][t(1792)] ? x.toLowerCase() : x);
    }
    return this[t(961)][t(1975)] || this[t(961)][t(1792)] ? x[t(2071)]() : x;
  }
  isSupportedCode(x) {
    const t = a;
    return (this[t(961)][t(1758)] === t(2051) || this[t(961)].nonExplicitSupportedLngs) && (x = this[t(1179)](x)), !this[t(2129)] || !this[t(2129)][t(2910)] || this[t(2129)].indexOf(x) > -1;
  }
  getBestMatchFromCodes(x) {
    const t = a;
    if (!x) return null;
    let r;
    return x[t(1548)]((e) => {
      const s = t;
      if (r) return;
      const n = this[s(874)](e);
      (!this[s(961)].supportedLngs || this.isSupportedCode(n)) && (r = n);
    }), !r && this[t(961)][t(2129)] && x.forEach((e) => {
      const s = t;
      if (r) return;
      const n = this.getScriptPartFromCode(e);
      if (this[s(665)](n)) return r = n;
      const i = this.getLanguagePartFromCode(e);
      if (this.isSupportedCode(i)) return r = i;
      r = this[s(961)][s(2129)][s(1801)]((c) => {
        const d = s;
        if (c === i) return c;
        if (!(c[d(1316)]("-") < 0 && i.indexOf("-") < 0) && (c[d(1316)]("-") > 0 && i.indexOf("-") < 0 && c[d(1003)](0, c[d(1316)]("-")) === i || c[d(1316)](i) === 0 && i[d(2910)] > 1))
          return c;
      });
    }), r || (r = this.getFallbackCodes(this[t(961)][t(430)])[0]), r;
  }
  getFallbackCodes(x, t) {
    const r = a;
    if (!x) return [];
    if (typeof x === r(2855) && (x = x(t)), be(x) && (x = [x]), Array[r(2573)](x)) return x;
    if (!t) return x[r(2889)] || [];
    let e = x[t];
    return e || (e = x[this.getScriptPartFromCode(t)]), e || (e = x[this[r(874)](t)]), e || (e = x[this.getLanguagePartFromCode(t)]), e || (e = x[r(2889)]), e || [];
  }
  toResolveHierarchy(x, t) {
    const r = a, e = this.getFallbackCodes((t === !1 ? [] : t) || this[r(961)][r(430)] || [], x), s = [], n = (i) => {
      const c = r;
      i && (this.isSupportedCode(i) ? s[c(816)](i) : this[c(3053)][c(405)]("rejecting language code not found in supportedLngs: " + i));
    };
    return be(x) && (x[r(1316)]("-") > -1 || x[r(1316)]("_") > -1) ? (this[r(961)][r(1758)] !== r(2051) && n(this.formatLanguageCode(x)), this.options[r(1758)] !== r(2051) && this[r(961)][r(1758)] !== r(822) && n(this[r(1690)](x)), this[r(961)][r(1758)] !== r(822) && n(this[r(1179)](x))) : be(x) && n(this[r(874)](x)), e[r(1548)]((i) => {
      const c = r;
      s.indexOf(i) < 0 && n(this[c(874)](i));
    }), s;
  }
}
const Ka = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Ga = { select: (o) => o === 1 ? "one" : a(2668), resolvedOptions: () => ({ pluralCategories: [a(2597), a(2668)] }) };
class Ri {
  constructor(x, t = {}) {
    const r = a;
    this.languageUtils = x, this[r(961)] = t, this.logger = f0[r(1468)](r(2010)), this.pluralRulesCache = {};
  }
  [a(2757)](x, t) {
    const r = a;
    this[r(2870)][x] = t;
  }
  [a(2884)]() {
    this.pluralRulesCache = {};
  }
  [a(2904)](x, t = {}) {
    const r = a, e = sx(x === r(1820) ? "en" : x), s = t[r(2496)] ? "ordinal" : "cardinal", n = JSON[r(1749)]({ cleanedCode: e, type: s });
    if (n in this[r(515)]) return this[r(515)][n];
    let i;
    try {
      i = new Intl[r(1336)](e, { type: s });
    } catch {
      if (!Intl) return this[r(3053)][r(1493)]("No Intl support, please use an Intl polyfill!"), Ga;
      if (!x.match(/-|_/)) return Ga;
      const d = this.languageUtils[r(1179)](x);
      i = this[r(2904)](d, t);
    }
    return this.pluralRulesCache[n] = i, i;
  }
  [a(2550)](x, t = {}) {
    const r = a;
    let e = this.getRule(x, t);
    return e || (e = this[r(2904)](r(1820), t)), (e == null ? void 0 : e[r(404)]()[r(2482)].length) > 1;
  }
  getPluralFormsOfKey(x, t, r = {}) {
    const e = a;
    return this[e(2007)](x, r)[e(1429)]((s) => "" + t + s);
  }
  getSuffixes(x, t = {}) {
    const r = a;
    let e = this[r(2904)](x, t);
    return e || (e = this[r(2904)]("dev", t)), e ? e[r(404)]()[r(2482)].sort((s, n) => Ka[s] - Ka[n])[r(1429)]((s) => "" + this.options.prepend + (t[r(2496)] ? "ordinal" + this[r(961)][r(2068)] : "") + s) : [];
  }
  getSuffix(x, t, r = {}) {
    const e = a, s = this[e(2904)](x, r);
    return s ? "" + this[e(961)][e(2068)] + (r.ordinal ? e(2496) + this[e(961)].prepend : "") + s[e(1288)](t) : (this[e(3053)].warn("no plural rule found for: " + x), this.getSuffix(e(1820), t, r));
  }
}
const Ja = (o, x, t, r = ".", e = !0) => {
  let s = yi(o, x, t);
  return !s && e && be(t) && (s = Jt(o, t, r), s === void 0 && (s = Jt(x, t, r))), s;
}, Kx = (o) => o.replace(/\$/g, a(758));
class Qa {
  constructor(x = {}) {
    var r;
    const t = a;
    this[t(3053)] = f0[t(1468)](t(1686)), this.options = x, this.format = ((r = x == null ? void 0 : x[t(2343)]) == null ? void 0 : r.format) || ((e) => e), this[t(2993)](x);
  }
  [a(2993)](x = {}) {
    const t = a;
    x[t(2343)] || (x.interpolation = { escapeValue: !0 });
    const { escape: r, escapeValue: e, useRawValueToEscape: s, prefix: n, prefixEscaped: i, suffix: c, suffixEscaped: d, formatSeparator: u, unescapeSuffix: l, unescapePrefix: f, nestingPrefix: b, nestingPrefixEscaped: h, nestingSuffix: p, nestingSuffixEscaped: v, nestingOptionsSeparator: k, maxReplaces: P, alwaysFormat: N } = x[t(2343)];
    this[t(3027)] = r !== void 0 ? r : wi, this.escapeValue = e !== void 0 ? e : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this[t(2159)] = n ? U0(n) : i || "{{", this[t(2626)] = c ? U0(c) : d || "}}", this[t(2014)] = u || ",", this[t(2709)] = l ? "" : f || "-", this[t(851)] = this[t(2709)] ? "" : l || "", this.nestingPrefix = b ? U0(b) : h || U0("$t("), this[t(1383)] = p ? U0(p) : v || U0(")"), this[t(2122)] = k || ",", this.maxReplaces = P || 1e3, this[t(2499)] = N !== void 0 ? N : !1, this.resetRegExp();
  }
  [a(2461)]() {
    const x = a;
    this[x(961)] && this[x(2993)](this[x(961)]);
  }
  resetRegExp() {
    const x = a, t = (r, e) => {
      const s = K;
      return (r == null ? void 0 : r[s(862)]) === e ? (r[s(2221)] = 0, r) : new RegExp(e, "g");
    };
    this[x(2930)] = t(this[x(2930)], this[x(2159)] + x(1936) + this[x(2626)]), this.regexpUnescape = t(this.regexpUnescape, "" + this[x(2159)] + this[x(2709)] + x(1936) + this[x(851)] + this.suffix), this[x(3018)] = t(this[x(3018)], this[x(406)] + x(1335) + this[x(1383)]);
  }
  [a(1719)](x, t, r, e) {
    var h;
    const s = a;
    let n, i, c;
    const d = this[s(961)] && this.options[s(2343)] && this.options[s(2343)][s(1594)] || {}, u = (p) => {
      const v = s;
      if (p[v(1316)](this.formatSeparator) < 0) {
        const T = Ja(t, d, p, this[v(961)][v(3040)], this.options[v(1281)]);
        return this.alwaysFormat ? this[v(1918)](T, void 0, r, { ...e, ...t, interpolationkey: p }) : T;
      }
      const k = p[v(1389)](this[v(2014)]), P = k[v(613)]()[v(1823)](), N = k[v(952)](this[v(2014)])[v(1823)]();
      return this[v(1918)](Ja(t, d, P, this.options[v(3040)], this[v(961)][v(1281)]), N, r, { ...e, ...t, interpolationkey: P });
    };
    this[s(1961)]();
    const l = (e == null ? void 0 : e[s(842)]) || this[s(961)][s(842)], f = ((h = e == null ? void 0 : e[s(2343)]) == null ? void 0 : h[s(1220)]) !== void 0 ? e[s(2343)][s(1220)] : this.options[s(2343)][s(1220)];
    return [{ regex: this[s(1628)], safeValue: (p) => Kx(p) }, { regex: this.regexp, safeValue: (p) => this.escapeValue ? Kx(this[s(3027)](p)) : Kx(p) }][s(1548)]((p) => {
      const v = s;
      for (c = 0; n = p[v(3019)][v(751)](x); ) {
        const k = n[1][v(1823)]();
        if (i = u(k), i === void 0)
          if (typeof l === v(2855)) {
            const N = l(x, n, e);
            i = be(N) ? N : "";
          } else if (e && Object.prototype[v(938)][v(1175)](e, k)) i = "";
          else if (f) {
            i = n[0];
            continue;
          } else this[v(3053)][v(405)](v(2931) + k + " for interpolating " + x), i = "";
        else !be(i) && !this.useRawValueToEscape && (i = Ua(i));
        const P = p[v(2581)](i);
        if (x = x[v(1840)](n[0], P), f ? (p[v(3019)].lastIndex += i.length, p[v(3019)][v(2221)] -= n[0].length) : p[v(3019)].lastIndex = 0, c++, c >= this.maxReplaces) break;
      }
    }), x;
  }
  [a(1544)](x, t, r = {}) {
    const e = a;
    let s, n, i;
    const c = (d, u) => {
      const l = K, f = this[l(2122)];
      if (d[l(1316)](f) < 0) return d;
      const b = d[l(1389)](new RegExp(f + l(674)));
      let h = "{" + b[1];
      d = b[0], h = this[l(1719)](h, i);
      const p = h.match(/'/g), v = h.match(/"/g);
      (((p == null ? void 0 : p[l(2910)]) ?? 0) % 2 === 0 && !v || v[l(2910)] % 2 !== 0) && (h = h[l(1840)](/'/g, '"'));
      try {
        i = JSON[l(1584)](h), u && (i = { ...u, ...i });
      } catch (k) {
        return this[l(3053)].warn(l(1492) + d, k), "" + d + f + h;
      }
      return i[l(2628)] && i[l(2628)][l(1316)](this[l(2159)]) > -1 && delete i.defaultValue, d;
    };
    for (; s = this[e(3018)][e(751)](x); ) {
      let d = [];
      i = { ...r }, i = i.replace && !be(i[e(1840)]) ? i[e(1840)] : i, i[e(2661)] = !1, delete i.defaultValue;
      const u = /{.*}/[e(2266)](s[1]) ? s[1][e(2662)]("}") + 1 : s[1].indexOf(this[e(2014)]);
      if (u !== -1 && (d = s[1][e(2527)](u)[e(1389)](this[e(2014)])[e(1429)]((l) => l[e(1823)]())[e(2951)](Boolean), s[1] = s[1][e(2527)](0, u)), n = t(c[e(1175)](this, s[1][e(1823)](), i), i), n && s[0] === x && !be(n)) return n;
      be(n) || (n = Ua(n)), !n && (this[e(3053)].warn("missed to resolve " + s[1] + e(805) + x), n = ""), d[e(2910)] && (n = d[e(2304)]((l, f) => this.format(l, f, r.lng, { ...r, interpolationkey: s[1][e(1823)]() }), n.trim())), x = x[e(1840)](s[0], n), this[e(2930)][e(2221)] = 0;
    }
    return x;
  }
}
const Fi = (o) => {
  const x = a;
  let t = o.toLowerCase().trim();
  const r = {};
  if (o[x(1316)]("(") > -1) {
    const e = o[x(1389)]("(");
    t = e[0].toLowerCase()[x(1823)]();
    const s = e[1].substring(0, e[1][x(2910)] - 1);
    t === x(2344) && s[x(1316)](":") < 0 ? r.currency || (r[x(2344)] = s[x(1823)]()) : t === x(1173) && s[x(1316)](":") < 0 ? r[x(626)] || (r[x(626)] = s[x(1823)]()) : s[x(1389)](";").forEach((i) => {
      const c = x;
      if (i) {
        const [d, ...u] = i[c(1389)](":"), l = u[c(952)](":")[c(1823)]()[c(1840)](/^'+|'+$/g, ""), f = d[c(1823)]();
        r[f] || (r[f] = l), l === c(2027) && (r[f] = !1), l === c(1448) && (r[f] = !0), isNaN(l) || (r[f] = parseInt(l, 10));
      }
    });
  }
  return { formatName: t, formatOptions: r };
}, Xa = (o) => {
  const x = {};
  return (t, r, e) => {
    const s = K;
    let n = e;
    e && e.interpolationkey && e[s(2152)] && e[s(2152)][e.interpolationkey] && e[e.interpolationkey] && (n = { ...n, [e.interpolationkey]: void 0 });
    const i = r + JSON.stringify(n);
    let c = x[i];
    return !c && (c = o(sx(r), e), x[i] = c), c(t);
  };
}, Ni = (o) => (x, t, r) => o(sx(t), r)(x);
class qi {
  constructor(x = {}) {
    const t = a;
    this[t(3053)] = f0[t(1468)](t(986)), this[t(961)] = x, this[t(2993)](x);
  }
  [a(2993)](x, t = { interpolation: {} }) {
    const r = a;
    this[r(2014)] = t[r(2343)][r(2014)] || ",";
    const e = t[r(1519)] ? Xa : Ni;
    this[r(1408)] = { number: e((s, n) => {
      const i = r, c = new Intl.NumberFormat(s, { ...n });
      return (d) => c[i(1918)](d);
    }), currency: e((s, n) => {
      const i = r, c = new Intl[i(680)](s, { ...n, style: i(2344) });
      return (d) => c.format(d);
    }), datetime: e((s, n) => {
      const i = r, c = new Intl[i(2228)](s, { ...n });
      return (d) => c[i(1918)](d);
    }), relativetime: e((s, n) => {
      const i = r, c = new Intl[i(1562)](s, { ...n });
      return (d) => c[i(1918)](d, n[i(626)] || i(1776));
    }), list: e((s, n) => {
      const i = r, c = new Intl.ListFormat(s, { ...n });
      return (d) => c[i(1918)](d);
    }) };
  }
  [a(1604)](x, t) {
    const r = a;
    this[r(1408)][x.toLowerCase().trim()] = t;
  }
  [a(574)](x, t) {
    const r = a;
    this[r(1408)][x[r(2071)]().trim()] = Xa(t);
  }
  format(x, t, r, e = {}) {
    const s = a, n = t[s(1389)](this[s(2014)]);
    if (n[s(2910)] > 1 && n[0][s(1316)]("(") > 1 && n[0][s(1316)](")") < 0 && n[s(1801)]((c) => c.indexOf(")") > -1)) {
      const c = n[s(2150)]((d) => d[s(1316)](")") > -1);
      n[0] = [n[0], ...n[s(1571)](1, c)][s(952)](this.formatSeparator);
    }
    return n[s(2304)]((c, d) => {
      var b;
      const u = s, { formatName: l, formatOptions: f } = Fi(d);
      if (this[u(1408)][l]) {
        let h = c;
        try {
          const p = ((b = e == null ? void 0 : e[u(2152)]) == null ? void 0 : b[e[u(2821)]]) || {}, v = p.locale || p[u(1581)] || e[u(609)] || e[u(1581)] || r;
          h = this.formats[l](c, v, { ...f, ...e, ...p });
        } catch (p) {
          this[u(3053)].warn(p);
        }
        return h;
      } else this.logger[u(405)]("there was no format function for " + l);
      return c;
    }, x);
  }
}
const Ti = (o, x) => {
  const t = a;
  o[t(2063)][x] !== void 0 && (delete o.pending[x], o[t(620)]--);
};
class Ai extends Ax {
  constructor(x, t, r, e = {}) {
    var n, i;
    const s = a;
    super(), this[s(2474)] = x, this.store = t, this[s(1151)] = r, this[s(1484)] = r[s(1484)], this[s(961)] = e, this[s(3053)] = f0.create(s(559)), this.waitingReads = [], this[s(478)] = e[s(478)] || 10, this[s(2624)] = 0, this[s(2883)] = e[s(2883)] >= 0 ? e[s(2883)] : 5, this[s(799)] = e[s(799)] >= 1 ? e[s(799)] : 350, this.state = {}, this[s(815)] = [], (i = (n = this[s(2474)]) == null ? void 0 : n.init) == null || i.call(n, r, e[s(2474)], e);
  }
  [a(1805)](x, t, r, e) {
    const s = a, n = {}, i = {}, c = {}, d = {};
    return x.forEach((u) => {
      const l = K;
      let f = !0;
      t[l(1548)]((b) => {
        const h = l, p = u + "|" + b;
        !r[h(1119)] && this[h(2849)][h(1340)](u, b) ? this[h(432)][p] = 2 : this[h(432)][p] < 0 || (this[h(432)][p] === 1 ? i[p] === void 0 && (i[p] = !0) : (this.state[p] = 1, f = !1, i[p] === void 0 && (i[p] = !0), n[p] === void 0 && (n[p] = !0), d[b] === void 0 && (d[b] = !0)));
      }), f || (c[u] = !0);
    }), (Object[s(548)](n)[s(2910)] || Object.keys(i).length) && this[s(815)][s(816)]({ pending: i, pendingCount: Object.keys(i)[s(2910)], loaded: {}, errors: [], callback: e }), { toLoad: Object[s(548)](n), pending: Object.keys(i), toLoadLanguages: Object[s(548)](c), toLoadNamespaces: Object[s(548)](d) };
  }
  [a(1222)](x, t, r) {
    const e = a, s = x[e(1389)]("|"), n = s[0], i = s[1];
    t && this[e(1452)](e(378), n, i, t), !t && r && this[e(2849)][e(474)](n, i, r, void 0, void 0, { skipCopy: !0 }), this[e(432)][x] = t ? -1 : 2, t && r && (this[e(432)][x] = 0);
    const c = {};
    this[e(815)][e(1548)]((d) => {
      const u = e;
      gi(d[u(1222)], [n], i), Ti(d, x), t && d[u(2311)].push(t), d[u(620)] === 0 && !d.done && (Object[u(548)](d[u(1222)])[u(1548)]((l) => {
        const f = u;
        c[l] || (c[l] = {});
        const b = d[f(1222)][l];
        b.length && b.forEach((h) => {
          c[l][h] === void 0 && (c[l][h] = !0);
        });
      }), d[u(2809)] = !0, d[u(2311)].length ? d[u(2632)](d.errors) : d[u(2632)]());
    }), this[e(1452)](e(1222), c), this[e(815)] = this[e(815)][e(2951)]((d) => !d[e(2809)]);
  }
  read(x, t, r, e = 0, s = this[a(799)], n) {
    const i = a;
    if (!x.length) return n(null, {});
    if (this[i(2624)] >= this[i(478)]) {
      this[i(1780)][i(816)]({ lng: x, ns: t, fcName: r, tried: e, wait: s, callback: n });
      return;
    }
    this[i(2624)]++;
    const c = (u, l) => {
      const f = i;
      if (this[f(2624)]--, this.waitingReads[f(2910)] > 0) {
        const b = this.waitingReads[f(613)]();
        this[f(384)](b[f(1581)], b.ns, b[f(465)], b[f(772)], b[f(2996)], b[f(2632)]);
      }
      if (u && l && e < this[f(2883)]) {
        setTimeout(() => {
          const b = f;
          this[b(384)][b(1175)](this, x, t, r, e + 1, s * 2, n);
        }, s);
        return;
      }
      n(u, l);
    }, d = this[i(2474)][r][i(2381)](this[i(2474)]);
    if (d[i(2910)] === 2) {
      try {
        const u = d(x, t);
        u && typeof u.then === i(2855) ? u.then((l) => c(null, l))[i(1508)](c) : c(null, u);
      } catch (u) {
        c(u);
      }
      return;
    }
    return d(x, t, c);
  }
  [a(1647)](x, t, r = {}, e) {
    const s = a;
    if (!this[s(2474)]) return this[s(3053)][s(405)]("No backend was added via i18next.use. Will not load resources."), e && e();
    be(x) && (x = this[s(1484)][s(2833)](x)), be(t) && (t = [t]);
    const n = this[s(1805)](x, t, r, e);
    if (!n[s(741)][s(2910)])
      return n[s(2063)][s(2910)] || e(), null;
    n[s(741)][s(1548)]((i) => {
      this.loadOne(i);
    });
  }
  [a(1758)](x, t, r) {
    this[a(1647)](x, t, {}, r);
  }
  reload(x, t, r) {
    this[a(1647)](x, t, { reload: !0 }, r);
  }
  [a(856)](x, t = "") {
    const r = a, e = x[r(1389)]("|"), s = e[0], n = e[1];
    this[r(384)](s, n, r(384), void 0, void 0, (i, c) => {
      const d = r;
      i && this[d(3053)][d(405)](t + "loading namespace " + n + d(2521) + s + d(2143), i), !i && c && this.logger.log(t + "loaded namespace " + n + d(2521) + s, c), this[d(1222)](x, i, c);
    });
  }
  [a(2770)](x, t, r, e, s, n = {}, i = () => {
  }) {
    var d, u, l, f, b;
    const c = a;
    if ((u = (d = this.services) == null ? void 0 : d[c(3039)]) != null && u[c(722)] && !((f = (l = this[c(1151)]) == null ? void 0 : l[c(3039)]) != null && f[c(722)](t))) {
      this.logger[c(405)](c(1636) + r + c(604) + t + c(2404), c(1447));
      return;
    }
    if (!(r == null || r === "")) {
      if ((b = this.backend) != null && b[c(1468)]) {
        const h = { ...n, isUpdate: s }, p = this[c(2474)][c(1468)].bind(this[c(2474)]);
        if (p.length < 6) try {
          let v;
          p[c(2910)] === 5 ? v = p(x, t, r, e, h) : v = p(x, t, r, e), v && typeof v[c(857)] === c(2855) ? v[c(857)]((k) => i(null, k)).catch(i) : i(null, v);
        } catch (v) {
          i(v);
        }
        else p(x, t, r, e, i, h);
      }
      !x || !x[0] || this[c(2849)][c(1202)](x[0], t, r, e);
    }
  }
}
const Ya = () => ({ debug: !1, initAsync: !0, ns: [a(2191)], defaultNS: [a(2191)], fallbackLng: [a(1820)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: a(634), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (o) => {
  const x = a;
  let t = {};
  if (typeof o[1] === x(2517) && (t = o[1]), be(o[1]) && (t[x(2628)] = o[1]), be(o[2]) && (t.tDescription = o[2]), typeof o[2] === x(2517) || typeof o[3] == "object") {
    const r = o[3] || o[2];
    Object[x(548)](r)[x(1548)]((e) => {
      t[e] = r[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (o) => o, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: a(2869), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), er = (o) => {
  var t, r;
  const x = a;
  return be(o.ns) && (o.ns = [o.ns]), be(o[x(430)]) && (o.fallbackLng = [o[x(430)]]), be(o.fallbackNS) && (o[x(1578)] = [o[x(1578)]]), ((r = (t = o[x(2129)]) == null ? void 0 : t[x(1316)]) == null ? void 0 : r.call(t, "cimode")) < 0 && (o[x(2129)] = o[x(2129)].concat([x(1223)])), typeof o[x(3054)] === x(1964) && (o.initAsync = o[x(3054)]), o;
}, hx = () => {
}, _i = (o) => {
  const x = a;
  Object[x(1133)](Object[x(1724)](o))[x(1548)]((r) => {
    const e = x;
    typeof o[r] === e(2855) && (o[r] = o[r].bind(o));
  });
};
class ex extends Ax {
  constructor(x = {}, t) {
    const r = a;
    if (super(), this[r(961)] = er(x), this[r(1151)] = {}, this[r(3053)] = f0, this[r(1906)] = { external: [] }, _i(this), t && !this.isInitialized && !x[r(3013)]) {
      if (!this[r(961)][r(1599)]) return this.init(x, t), this;
      setTimeout(() => {
        this[r(2993)](x, t);
      }, 0);
    }
  }
  init(x = {}, t) {
    const r = a;
    this[r(1641)] = !0, typeof x == "function" && (t = x, x = {}), x.defaultNS == null && x.ns && (be(x.ns) ? x.defaultNS = x.ns : x.ns[r(1316)](r(2191)) < 0 && (x.defaultNS = x.ns[0]));
    const e = Ya();
    this[r(961)] = { ...e, ...this[r(961)], ...er(x) }, this[r(961)][r(2343)] = { ...e[r(2343)], ...this[r(961)][r(2343)] }, x[r(3040)] !== void 0 && (this.options[r(2082)] = x[r(3040)]), x[r(2244)] !== void 0 && (this[r(961)][r(2845)] = x[r(2244)]);
    const s = (u) => {
      const l = r;
      return u ? typeof u === l(2855) ? new u() : u : null;
    };
    if (!this[r(961)].isClone) {
      this[r(1906)].logger ? f0[r(2993)](s(this[r(1906)].logger), this[r(961)]) : f0[r(2993)](null, this.options);
      let u;
      this[r(1906)].formatter ? u = this[r(1906)][r(986)] : u = qi;
      const l = new Wa(this.options);
      this[r(2849)] = new Ba(this[r(961)][r(804)], this[r(961)]);
      const f = this[r(1151)];
      f[r(3053)] = f0, f[r(2008)] = this[r(2849)], f[r(1484)] = l, f[r(2010)] = new Ri(l, { prepend: this[r(961)][r(2818)], simplifyPluralSuffix: this[r(961)][r(2380)] }), this[r(961)].interpolation[r(1918)] && this.options.interpolation[r(1918)] !== e[r(2343)].format && this[r(3053)].deprecate(r(2013)), u && (!this[r(961)].interpolation[r(1918)] || this[r(961)].interpolation[r(1918)] === e[r(2343)].format) && (f[r(986)] = s(u), f[r(986)].init && f[r(986)][r(2993)](f, this[r(961)]), this.options.interpolation[r(1918)] = f[r(986)][r(1918)][r(2381)](f.formatter)), f[r(1686)] = new Qa(this.options), f.utils = { hasLoadedNamespace: this[r(722)][r(2381)](this) }, f[r(559)] = new Ai(s(this.modules.backend), f[r(2008)], f, this.options), f.backendConnector.on("*", (h, ...p) => {
        this[r(1452)](h, ...p);
      }), this[r(1906)][r(410)] && (f[r(410)] = s(this[r(1906)][r(410)]), f.languageDetector[r(2993)] && f[r(410)][r(2993)](f, this.options.detection, this.options)), this[r(1906)][r(1216)] && (f[r(1216)] = s(this[r(1906)][r(1216)]), f[r(1216)][r(2993)] && f.i18nFormat[r(2993)](this)), this[r(2506)] = new Fx(this[r(1151)], this[r(961)]), this[r(2506)].on("*", (h, ...p) => {
        this[r(1452)](h, ...p);
      }), this[r(1906)][r(1553)][r(1548)]((h) => {
        const p = r;
        h[p(2993)] && h[p(2993)](this);
      });
    }
    if (this[r(1918)] = this[r(961)][r(2343)][r(1918)], t || (t = hx), this[r(961)][r(430)] && !this[r(1151)][r(410)] && !this.options[r(1581)]) {
      const u = this[r(1151)].languageUtils[r(3028)](this.options[r(430)]);
      u.length > 0 && u[0] !== "dev" && (this[r(961)][r(1581)] = u[0]);
    }
    !this[r(1151)][r(410)] && !this[r(961)][r(1581)] && this[r(3053)][r(405)](r(504)), [r(2305), r(1340), r(2526), "getDataByLanguage"][r(1548)]((u) => {
      const l = r;
      this[u] = (...f) => this[l(2849)][u](...f);
    }), [r(1202), r(667), "addResourceBundle", r(2726)][r(1548)]((u) => {
      this[u] = (...l) => (this[K(2849)][u](...l), this);
    });
    const c = J0(), d = () => {
      const u = r, l = (f, b) => {
        const h = K;
        this[h(1641)] = !1, this[h(1049)] && !this[h(1703)] && this[h(3053)].warn("init: i18next is already initialized. You should call init just once!"), this[h(1049)] = !0, this[h(961)][h(3013)] || this[h(3053)][h(2613)](h(1438), this[h(961)]), this[h(1452)](h(1438), this[h(961)]), c.resolve(b), t(f, b);
      };
      if (this[u(1978)] && !this[u(1049)]) return l(null, this.t.bind(this));
      this.changeLanguage(this[u(961)][u(1581)], l);
    };
    return this[r(961)].resources || !this.options[r(1599)] ? d() : setTimeout(d, 0), c;
  }
  [a(1006)](x, t = hx) {
    var n, i;
    const r = a;
    let e = t;
    const s = be(x) ? x : this[r(2621)];
    if (typeof x === r(2855) && (e = x), !this[r(961)].resources || this[r(961)][r(1765)]) {
      if ((s == null ? void 0 : s.toLowerCase()) === "cimode" && (!this[r(961)][r(370)] || this[r(961)][r(370)][r(2910)] === 0)) return e();
      const c = [], d = (u) => {
        const l = r;
        if (!u || u === l(1223)) return;
        this.services[l(1484)].toResolveHierarchy(u)[l(1548)]((b) => {
          const h = l;
          b !== "cimode" && c[h(1316)](b) < 0 && c[h(816)](b);
        });
      };
      s ? d(s) : this.services.languageUtils.getFallbackCodes(this[r(961)][r(430)])[r(1548)]((l) => d(l)), (i = (n = this[r(961)][r(370)]) == null ? void 0 : n.forEach) == null || i.call(n, (u) => d(u)), this[r(1151)][r(559)].load(c, this.options.ns, (u) => {
        const l = r;
        !u && !this[l(2533)] && this[l(2621)] && this[l(1922)](this[l(2621)]), e(u);
      });
    } else e(null);
  }
  [a(672)](x, t, r) {
    const e = a, s = J0();
    return typeof x === e(2855) && (r = x, x = void 0), typeof t === e(2855) && (r = t, t = void 0), x || (x = this[e(1978)]), t || (t = this.options.ns), r || (r = hx), this[e(1151)][e(559)].reload(x, t, (n) => {
      s[e(510)](), r(n);
    }), s;
  }
  [a(1030)](x) {
    const t = a;
    if (!x) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!x[t(506)]) throw new Error(t(2657));
    return x[t(506)] === "backend" && (this[t(1906)][t(2474)] = x), (x[t(506)] === t(3053) || x[t(2613)] && x[t(405)] && x[t(1493)]) && (this[t(1906)][t(3053)] = x), x[t(506)] === t(410) && (this[t(1906)].languageDetector = x), x[t(506)] === t(1216) && (this[t(1906)][t(1216)] = x), x[t(506)] === t(1345) && Qs[t(903)](x), x[t(506)] === t(986) && (this[t(1906)][t(986)] = x), x[t(506)] === t(1824) && this[t(1906)][t(1553)][t(816)](x), this;
  }
  setResolvedLanguage(x) {
    const t = a;
    if (!(!x || !this.languages) && !([t(1223), "dev"][t(1316)](x) > -1)) {
      for (let r = 0; r < this[t(1978)].length; r++) {
        const e = this[t(1978)][r];
        if (!([t(1223), t(1820)][t(1316)](e) > -1) && this[t(2849)][t(2272)](e)) {
          this[t(2533)] = e;
          break;
        }
      }
      !this[t(2533)] && this[t(1978)][t(1316)](x) < 0 && this[t(2849)][t(2272)](x) && (this[t(2533)] = x, this[t(1978)][t(2532)](x));
    }
  }
  [a(1355)](x, t) {
    const r = a;
    this[r(647)] = x;
    const e = J0();
    this[r(1452)](r(2637), x);
    const s = (c) => {
      const d = r;
      this[d(2621)] = c, this.languages = this[d(1151)][d(1484)][d(2833)](c), this[d(2533)] = void 0, this[d(1922)](c);
    }, n = (c, d) => {
      const u = r;
      d ? this[u(647)] === x && (s(d), this[u(2506)][u(1355)](d), this[u(647)] = void 0, this[u(1452)](u(1398), d), this.logger[u(2613)]("languageChanged", d)) : this[u(647)] = void 0, e.resolve((...l) => this.t(...l)), t && t(c, (...l) => this.t(...l));
    }, i = (c) => {
      var f, b;
      const d = r;
      !x && !c && this[d(1151)][d(410)] && (c = []);
      const u = be(c) ? c : c && c[0], l = this[d(2849)][d(2272)](u) ? u : this.services[d(1484)].getBestMatchFromCodes(be(c) ? [c] : c);
      l && (!this.language && s(l), this[d(2506)][d(2621)] || this[d(2506)][d(1355)](l), (b = (f = this[d(1151)][d(410)]) == null ? void 0 : f.cacheUserLanguage) == null || b.call(f, l)), this[d(1006)](l, (h) => {
        n(h, l);
      });
    };
    return !x && this[r(1151)].languageDetector && !this.services[r(410)].async ? i(this[r(1151)][r(410)][r(864)]()) : !x && this.services.languageDetector && this[r(1151)][r(410)][r(372)] ? this[r(1151)][r(410)][r(864)][r(2910)] === 0 ? this[r(1151)][r(410)][r(864)]()[r(857)](i) : this[r(1151)][r(410)][r(864)](i) : i(x), e;
  }
  [a(1242)](x, t, r) {
    const e = a, s = (n, i, ...c) => {
      const d = K;
      let u;
      typeof i !== d(2517) ? u = this.options[d(2401)]([n, i][d(653)](c)) : u = { ...i }, u[d(1581)] = u[d(1581)] || s[d(1581)], u[d(1476)] = u[d(1476)] || s.lngs, u.ns = u.ns || s.ns, u[d(1459)] !== "" && (u[d(1459)] = u[d(1459)] || r || s[d(1459)]);
      const l = this[d(961)].keySeparator || ".";
      let f;
      return u.keyPrefix && Array[d(2573)](n) ? f = n[d(1429)]((b) => (typeof b == "function" && (b = Qt(b, { ...this.options, ...i })), "" + u.keyPrefix + l + b)) : (typeof n === d(2855) && (n = Qt(n, { ...this[d(961)], ...i })), f = u[d(1459)] ? "" + u[d(1459)] + l + n : n), this.t(f, u);
    };
    return be(x) ? s.lng = x : s[e(1476)] = x, s.ns = t, s[e(1459)] = r, s;
  }
  t(...x) {
    var r;
    return (r = this[a(2506)]) == null ? void 0 : r.translate(...x);
  }
  [a(1193)](...x) {
    var r;
    const t = a;
    return (r = this.translator) == null ? void 0 : r[t(1193)](...x);
  }
  setDefaultNamespace(x) {
    const t = a;
    this[t(961)][t(2094)] = x;
  }
  [a(722)](x, t = {}) {
    const r = a;
    if (!this[r(1049)]) return this[r(3053)][r(405)](r(1203), this[r(1978)]), !1;
    if (!this[r(1978)] || !this[r(1978)][r(2910)]) return this[r(3053)][r(405)](r(576), this.languages), !1;
    const e = t[r(1581)] || this[r(2533)] || this[r(1978)][0], s = this[r(961)] ? this[r(961)][r(430)] : !1, n = this[r(1978)][this.languages[r(2910)] - 1];
    if (e[r(2071)]() === r(1223)) return !0;
    const i = (c, d) => {
      const u = r, l = this[u(1151)][u(559)].state[c + "|" + d];
      return l === -1 || l === 0 || l === 2;
    };
    if (t[r(840)]) {
      const c = t[r(840)](this, i);
      if (c !== void 0) return c;
    }
    return !!(this[r(1340)](e, x) || !this.services.backendConnector.backend || this[r(961)][r(804)] && !this[r(961)].partialBundledLanguages || i(e, x) && (!s || i(n, x)));
  }
  [a(1660)](x, t) {
    const r = a, e = J0();
    return this[r(961)].ns ? (be(x) && (x = [x]), x[r(1548)]((s) => {
      const n = r;
      this.options.ns.indexOf(s) < 0 && this[n(961)].ns.push(s);
    }), this[r(1006)]((s) => {
      e[r(510)](), t && t(s);
    }), e) : (t && t(), Promise[r(510)]());
  }
  loadLanguages(x, t) {
    const r = a, e = J0();
    be(x) && (x = [x]);
    const s = this[r(961)][r(370)] || [], n = x[r(2951)]((i) => s[r(1316)](i) < 0 && this[r(1151)].languageUtils[r(665)](i));
    return n.length ? (this[r(961)].preload = s[r(653)](n), this[r(1006)]((i) => {
      e[r(510)](), t && t(i);
    }), e) : (t && t(), Promise[r(510)]());
  }
  [a(1756)](x) {
    var s, n;
    const t = a;
    if (x || (x = this[t(2533)] || (((s = this[t(1978)]) == null ? void 0 : s[t(2910)]) > 0 ? this[t(1978)][0] : this[t(2621)])), !x) return t(1154);
    try {
      const i = new Intl.Locale(x);
      if (i && i[t(1528)]) {
        const c = i[t(1528)]();
        if (c && c[t(2416)]) return c[t(2416)];
      }
    } catch {
    }
    const r = ["ar", t(1496), t(1105), t(1853), "xaa", t(1563), t(915), t(2970), t(2590), t(2408), "acm", t(2842), t(2331), t(566), t(1609), "adf", t(1044), t(2176), "aec", t(2794), t(1096), t(2436), t(1126), "arb", t(2784), t(367), t(2061), t(2666), t(1583), t(1082), t(2568), t(2114), t(1777), t(1552), "bbz", t(2545), "he", "iw", "ps", t(1023), t(1800), t(1925), t(1557), t(731), "ug", "ur", t(575), t(1364), t(2940), "ji", "yi", t(535), t(2610), t(2313), "fa", "jpr", "peo", t(1930), "prs", "dv", t(1287), "ckb"], e = ((n = this[t(1151)]) == null ? void 0 : n[t(1484)]) || new Wa(Ya());
    return x[t(2071)]().indexOf(t(2317)) > 1 ? "ltr" : r.indexOf(e[t(1179)](x)) > -1 || x[t(2071)]()[t(1316)](t(745)) > 1 ? t(1154) : t(2834);
  }
  static createInstance(x = {}, t) {
    const r = a, e = new ex(x, t);
    return e[r(2464)] = ex.createInstance, e;
  }
  [a(818)](x = {}, t = hx) {
    const r = a, e = x[r(2753)];
    e && delete x[r(2753)];
    const s = { ...this.options, ...x, isClone: !0 }, n = new ex(s);
    if ((x[r(825)] !== void 0 || x[r(2159)] !== void 0) && (n[r(3053)] = n[r(3053)][r(1022)](x)), ["store", "services", "language"][r(1548)]((c) => {
      n[c] = this[c];
    }), n[r(1151)] = { ...this[r(1151)] }, n.services[r(3039)] = { hasLoadedNamespace: n.hasLoadedNamespace[r(2381)](n) }, e) {
      const c = Object[r(548)](this.store[r(571)])[r(2304)]((d, u) => {
        const l = r;
        return d[u] = { ...this[l(2849)][l(571)][u] }, d[u] = Object.keys(d[u])[l(2304)]((f, b) => (f[b] = { ...d[u][b] }, f), d[u]), d;
      }, {});
      n[r(2849)] = new Ba(c, s), n[r(1151)][r(2008)] = n[r(2849)];
    }
    return x.interpolation && (n[r(1151)][r(1686)] = new Qa(s)), n[r(2506)] = new Fx(n.services, s), n[r(2506)].on("*", (c, ...d) => {
      n[r(1452)](c, ...d);
    }), n.init(s, t), n.translator[r(961)] = s, n.translator[r(559)][r(1151)].utils = { hasLoadedNamespace: n.hasLoadedNamespace[r(2381)](n) }, n;
  }
  [a(1613)]() {
    const x = a;
    return { options: this[x(961)], store: this[x(2849)], language: this[x(2621)], languages: this[x(1978)], resolvedLanguage: this[x(2533)] };
  }
}
const Xe = ex[a(2464)]();
Xe[a(2464)], Xe.dir, Xe[a(2993)], Xe[a(1006)], Xe[a(672)], Xe[a(1030)], Xe[a(1355)], Xe.getFixedT, Xe.t, Xe[a(1193)], Xe.setDefaultNamespace, Xe[a(722)], Xe[a(1660)], Xe[a(2115)];
function Oi() {
  const o = a;
  if (typeof navigator !== o(1691) && navigator[o(2621)]) return navigator.language === "zh-CN" ? "zh-CN" : o(788);
  try {
    const x = typeof require !== o(1691) ? require : void 0;
    if (x)
      return x(o(1014))[o(2232)].uiLocale[o(1904)]("zh") ? "zh-CN" : "en-US";
  } catch {
  }
  return o(788);
}
let Ys = Oi();
const Di = { "zh-CN": {}, "en-US": {} };
function Xt(o) {
  const x = a, t = o === x(2156) ? hi : pi, r = Di[o];
  return { ...t, ...r };
}
function ji() {
  return Ys;
}
function Yt(o, x = {}) {
  const t = a;
  let e = Xt(Ys)[o];
  return e ? typeof e === t(1443) ? e[t(1840)](/\{\{(\w+)\}\}/g, (s, n) => x[n] !== void 0 ? String(x[n]) : s) : e : o;
}
const Mi = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Li = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, $i = (o) => Li[o], Ui = (o) => o[a(1840)](Mi, $i);
let xr = { bindI18n: "languageChanged", bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: !0, unescape: Ui };
const Hi = (o = {}) => {
  xr = { ...xr, ...o };
}, zi = { type: "3rdParty", init(o) {
  const x = a;
  Hi(o.options[x(922)]);
} };
!Xe[a(1049)] && Xe[a(1030)](zi).init({ resources: { "zh-CN": { translation: Xt(a(2156)) }, "en-US": { translation: Xt(a(788)) } }, lng: ji(), fallbackLng: a(788), interpolation: { escapeValue: !1 } });
globalThis.sdpppX2 = globalThis[a(2920)] || {};
const xx = globalThis.sdpppX2, R0 = [];
xx[a(2813)] = xx[a(2813)] || {}, xx[a(2813)].add = function(o, x) {
  const t = a;
  typeof x === t(2855) ? R0[t(816)]([o, { formatter: x, setter: null }]) : R0[t(816)]([o, x]);
};
function Vi(o, x, t) {
  var c;
  const r = a, e = R0[r(1801)](([d]) => d == r(2367)), s = R0.find(([d]) => ia(d, o.type)) || e;
  let n = !1;
  if (s) {
    const d = s[1].setter;
    d && (n = !!d(o, x, t));
  }
  !n && (o[r(1367)][x][r(2398)] = t), (c = (Ne[r(1064)] || Ne[r(812)][r(713)]).activeWorkflow) == null || c[r(3005)][r(1013)]();
}
function Nx(o) {
  const x = a, t = {}, r = R0[x(1801)](([e]) => e == "__DEFAULT__");
  return o[x(2066)][x(1548)]((e) => {
    const s = x;
    if (!e[s(1367)] || e[s(1367)][s(2910)] == 0) return;
    const n = R0[s(1801)](([i]) => ia(i, e[s(506)])) || r;
    if (n) try {
      const i = n[1].formatter(e);
      i && (t[e.id] = i[s(1367)][s(1429)]((c) => c.value));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function ea(o, x) {
  var s, n, i;
  const t = a;
  if (!o) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const r = o[t(2066)][t(1429)]((c) => {
    const d = t;
    if (c[d(458)] != 0) return;
    const u = mx(c);
    if (!u || u[d(1904)](".") || !c[d(1367)] || c.widgets.length == 0) return;
    let l = R0[d(1801)](([p]) => ia(p, c[d(506)]));
    if (l) try {
      const p = l[1][d(986)](c);
      if (p) return p.id = c.id, p[d(1621)] = p[d(1367)][d(2304)]((v, k) => v + (k[d(823)] || 12), 0), p;
    } catch (p) {
      return { id: c.id, title: u, uiWeightSum: 12, widgets: [{ outputType: d(1493), value: Yt(d(2034), l[0]) + (p[d(2732)] || p || ""), name: "", options: {} }] };
    }
    if (!u[d(1904)]("#")) return null;
    let f = c[d(1367)];
    const b = R0.find(([p]) => p == d(2367));
    if (b) {
      const p = b[1][d(986)](c);
      if (p) return Object[d(1841)](p, { uiWeightSum: p.widgets[d(2304)]((v, k) => v + (k[d(823)] || 12), 0) });
    }
    const h = { id: c.id, title: u, widgets: f[d(1429)]((p) => ({ name: p[d(1138)] || p[d(1907)], outputType: p[d(506)] || "string", value: p.value, options: p[d(961)] })) };
    return Object.assign(h, { uiWeightSum: h[d(1367)][d(2304)]((p, v) => p + (v.uiWeight || 12), 0) });
  })[t(2951)](Boolean)[t(2786)]((c, d) => {
    const u = t;
    let l = mx(c), f = mx(d);
    return l = l.startsWith("#") ? l[u(2527)](1)[u(1823)]() : l[u(1823)](), f = f[u(1904)]("#") ? f[u(2527)](1)[u(1823)]() : f[u(1823)](), l[u(2686)](f);
  }), e = ((n = (s = o[t(2066)][t(1801)]((c) => c[t(506)] == t(547) && c[t(2877)][t(742)](/SD-?PPP/i))) == null ? void 0 : s[t(1367)][0]) == null ? void 0 : n.value) || "";
  return { widgetablePath: ((i = x[t(1682)][t(2612)]) == null ? void 0 : i.sdppp_workflow_alias) || x[t(2075)], widgetableID: x[t(1682)].id, nodes: r[t(2304)]((c, d) => (c[d.id] = d, c), {}), note: e, nodeIndexes: r[t(1429)]((c) => c.id), options: {} };
}
function ia(o, x) {
  const t = a, r = o[t(1840)](/[.+^${}()|[\]\\]/g, t(2802)).replace(/\*/g, ".*").replace(/\?/g, ".");
  return new RegExp("^" + r + "$")[t(2266)](x);
}
function mx(o, x = "") {
  var e;
  const t = a;
  let r = x || o[t(2877)] || "";
  return o[t(849)] && (r[t(1904)]("#") || r[t(1904)](".")) ? o[t(849)]("sdppp_widgetable_title", r) : r = ((e = o[t(1684)]) == null ? void 0 : e[t(2778)]) || r, r;
}
xx.getNodeTitle = mx;
const xa = ox.extend(a(2096)), tr = /* @__PURE__ */ new Set();
ke[a(2651)]("setWidgetValue", async (o) => {
  const x = a;
  return requestAnimationFrame(En), o[x(2323)][x(1548)](({ nodeID: t, widgetIndex: r, value: e }) => {
    const s = x, n = Ne[s(2546)][s(2066)][s(1801)]((i) => i.id == t);
    Vi(n, r, e);
  }), { success: !0 };
}), ke[a(2651)](a(1403), async (o) => {
  const x = a, { workflow_path: t } = o, r = !tr[x(2239)](t), e = o[x(2461)] || r;
  tr[x(1604)](t);
  const s = Ne[x(812)].workflow || Ne[x(1064)], n = s[x(2509)][x(1801)]((c) => c[x(1727)] === t || c[x(2075)] === t || c[x(2075)] === x(891) + t);
  if (!e) {
    const c = await Bi(s, n);
    if (xa(x(2387) + c), c) await Gx(s, n);
    else try {
      await i(s, n);
    } catch {
      await Gx(s, n);
    }
    return { success: !0 };
  }
  return await Gx(s, n), { success: !0 };
  async function i(c, d) {
    const u = x;
    xa(u(562) + d[u(2075)], d.initialState), Ne[u(1064)] == c ? await d[u(1758)]() : (await c[u(1403)](d), await Ne[u(558)](JSON[u(1584)](JSON[u(1749)](d.initialState)), !0, !0, d, {}));
  }
}), ke.implementAction(a(2273), async function(o) {
  const x = a;
  let { workflow_content: t, workflow_path: r } = o;
  return t[x(2612)] = { ...t[x(2612)] || {}, sdppp_workflow_alias: r }, await Ne.loadGraphData(t), { success: !0 };
}), ke[a(2651)](a(1791), async (o) => {
  var s;
  const x = a, t = Ne[x(1064)] || Ne[x(812)][x(713)];
  (s = t.syncWorkflows) == null || s.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t[x(2509)][x(1429)]((n) => n[x(2075)][x(1840)](x(891), ""));
  try {
    const n = new Headers(), i = localStorage[x(2984)](x(1767));
    i && n.set(x(2162), i);
    const c = await fetch(x(1279), { headers: n });
    let d = [];
    c.ok && (d = (await c.json())[x(2425)][x(1429)]((l) => l[x(1840)](x(891), ""))), e[x(2786)]((u, l) => {
      const f = x, b = d[f(416)](u), h = d[f(416)](l);
      return b && !h ? -1 : !b && h ? 1 : u.localeCompare(l);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), ke[a(2651)](a(2481), async (o) => {
  var n;
  const x = a, { workflow_path: t, from_sid: r } = o, e = Ne[x(1064)] || Ne[x(812)][x(713)], s = e[x(2509)][x(1801)]((i) => i.fullFilename === t || i.path === t || i[x(2075)] === "workflows/" + t);
  if (!s) throw new Error(x(2787));
  return ((n = e[x(1750)]) == null ? void 0 : n.id) != s.id && await Ne[x(1403)](t, r, !1), s.changeTracker[x(1013)](), await e[x(2481)](s), { success: !0 };
});
async function Bi(o, x) {
  var e, s, n;
  const t = a;
  if (!x || !(((e = o[t(1750)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((s = x[t(3005)]) != null && s[t(1013)]) try {
    x[t(3005)][t(1013)]();
  } catch (i) {
    console[t(405)]("Failed to check workflow changeTracker state:", i);
  }
  try {
    const i = (n = Ne[t(2546)]) == null ? void 0 : n.serialize(), c = x[t(1682)];
    if (!i || !c) return !1;
    const d = JSON[t(1749)](i), u = JSON[t(1749)](c);
    return d !== u;
  } catch (i) {
    return console[t(405)](t(447), i), !1;
  }
}
async function Gx(o, x) {
  var e;
  const t = a;
  xa(t(407) + x[t(2075)]);
  async function r(s, n) {
    const i = t;
    Ne[i(1064)] == s ? await n[i(1758)]() : (await s[i(1403)](n), await Ne[i(558)](JSON[i(1584)](JSON[i(1749)](n[i(1682)])), !0, !0, n, {}));
  }
  if ((x.isOpen || (e = o[t(1500)]) != null && e.call(o, x)) && o[t(756)][t(2910)] === 1) {
    const s = o[t(1592)]();
    o.openWorkflow(s);
  } else await r(o, o[t(756)][0] == x ? o.openWorkflows[1] : o[t(756)][0]);
  await o[t(2179)](x, !1), await new Promise((s) => requestAnimationFrame(s)), await r(o, x);
}
const nx = ox[a(1393)](a(2180)), M0 = /* @__PURE__ */ new Map();
let qx = [];
const Jx = { hijacked: !1, originalQueuePrompt: null };
function Zi(o, x) {
  const t = a, r = M0[t(2620)](o);
  nx(t(1372), o, x, r, M0), r && r[t(1428)](x);
}
ke.implementAction(a(1424), async () => {
  const o = a;
  await Ne[o(1039)].clearItems(o(815)), await Ne[o(1039)].interrupt();
  const x = Array[o(2725)](M0.values());
  M0[o(2149)]();
  for (const t of x)
    try {
      t[o(661)](new Error(o(761)));
    } catch {
    }
  return { success: !0 };
}), ke.implementAction("run", async function* (o) {
  const x = a;
  Wi(), qx = [];
  const t = o.size;
  ke.store[x(964)]({ lastError: "", widgetableErrors: {} });
  const r = await Ji(t, o[x(458)]);
  nx(x(2528), r[x(1464)], r[x(2074)], "prompt_ids: ", r[x(1011)]), Xi(r), yield* Yi(r[x(1011)]);
});
function Wi() {
  const o = a;
  if (Jx.hijacked) return;
  const x = E0[o(1390)];
  Jx[o(1435)] = x, E0.queuePrompt = async (...t) => {
    const r = o;
    try {
      const e = await x[r(1175)](E0, ...t), s = e == null ? void 0 : e.prompt_id;
      return s && Qi(s), qx[r(816)]({ error: null, result: e, prompt_id: e[r(1927)] }), e;
    } catch (e) {
      throw qx[r(816)]({ error: e, result: null, prompt_id: "" }), e;
    }
  }, Jx[o(2402)] = !0;
}
async function Ki(o) {
  await Ne[a(1390)](1, o);
}
async function Gi(o) {
  const x = a, t = await Ne[x(3010)](Ne[x(2546)]);
  for (let r = 0; r < o; r++)
    await E0[x(1390)](1, t);
}
async function Ji(o, x = a(2161)) {
  var e, s;
  const t = a, r = { promptIds: [], hasError: !1, generalError: "", nodeErrors: {} };
  try {
    x === t(1039) ? await Gi(o) : await Ki(o);
    for (const n of qx)
      if (n[t(1493)]) r[t(1464)] = !0, r.nodeErrors = n[t(1493)][t(2332)] ? e2(n[t(1493)][t(2332)].node_errors) : {}, Object[t(1841)](r[t(2074)], { "-1": ((s = (e = n.error[t(2332)]) == null ? void 0 : e[t(1493)]) == null ? void 0 : s[t(2732)]) || n[t(1493)].message });
      else {
        const i = n[t(2712)][t(1927)];
        r[t(1011)][t(816)](i);
      }
  } catch (n) {
    nx(t(1707), n[t(2491)]), r.hasError = !0, r.nodeErrors = { "-1": n.message || n[t(1725)]() };
  }
  return r;
}
function Qi(o) {
  const x = a;
  let t, r;
  const e = new Promise((s, n) => {
    t = s, r = n;
  });
  M0[x(2454)](o, { promise: e, resolveImage: t, rejectImage: r });
}
function Xi({ hasError: o, generalError: x, nodeErrors: t }) {
  const r = a;
  o && (x ? ke.store[r(964)]({ lastError: x }) : ke[r(2849)].setState({ widgetableErrors: t }));
}
async function* Yi(o) {
  const x = a, t = /* @__PURE__ */ new Map();
  for (const r of o) {
    const e = M0.get(r);
    e && t[x(2454)](r, e.promise);
  }
  if (t[x(2873)] !== 0)
    for (nx(x(1993)); t[x(2873)] > 0; ) {
      const r = Array.from(t[x(807)]()), e = r[x(1429)](([i, c]) => c.then((d) => ({ prompt_id: i, images: d }))), { prompt_id: s, images: n } = await Promise[x(538)](e);
      nx(x(1483), s), t[x(1239)](s), M0[x(1239)](s), yield { success: !0, prompt_ids: [s], images: n };
    }
}
function e2(o) {
  const x = a, t = {};
  return Object[x(548)](o)[x(1548)]((r) => {
    const e = x, s = r.split(":")[0], n = Ne[e(2546)][e(2066)][e(1801)]((i) => i.id == s);
    t[s] = "[" + ((n == null ? void 0 : n[e(2877)]) || s) + "]" + o[r][e(2311)].map(JSON[e(1749)])[e(952)](`
`);
  }), t;
}
const x2 = ox.extend(a(2841));
ke.implementAction(a(1215), async (o) => {
  const x = a;
  return o != null && o[x(2562)] && x2(x(1065), o[x(2562)]), { comfyVersion: x(1617), hostVersion: (o == null ? void 0 : o[x(2562)]) ?? "" };
}), ke[a(2651)](a(1705), async (o) => {
  const x = a, { node_id: t, title: r } = o, e = Ne.graph.nodes[x(1801)]((s) => s.id == t);
  if (!e) throw new Error(x(1632));
  return e.title = r, e[x(849)](x(2778), r), { success: !0 };
}), ke[a(2651)](a(895), async () => {
  const o = a, x = await fetch(o(422));
  return x[o(735)] == 404 ? { error: Yt(o(605)), success: !1 } : x[o(735)] == 200 ? { success: !0 } : { error: Yt("Failed to reboot ComfyUI") + x[o(570)], success: !1 };
}), ke.implementAction("setComfyOrgAPIKey", async (o) => {
  const x = a, { api_key: t } = o;
  return localStorage.setItem(x(1196), t), location[x(1119)](), { success: !0 };
}), ke[a(2651)](a(693), async () => {
  const o = a;
  return document[o(795)](o(1122))[o(2315)][o(2659)](), { success: !0 };
});
function t2(o) {
  const x = a, t = atob(o), r = t[x(2910)], e = new Uint8Array(r);
  for (let s = 0; s < r; s++)
    e[s] = t[x(425)](s);
  return e;
}
ke.implementAction(a(2279), async (o, x, t) => {
  const r = a, { fileName: e, overwrite: s = !0, mimeType: n = r(518), dataBase64: i } = o;
  if (t != null && t[r(930)]) throw new DOMException("Upload aborted", r(1258));
  const c = t2(i), d = new Blob([c], { type: n }), u = new FormData();
  u.append(r(2894), d), u.append(r(1639), e), u[r(1187)](r(1406), r(s ? 1448 : 2027));
  const l = await fetch(r(1350), { method: "POST", body: u, signal: t });
  if (!l.ok) throw new Error(r(2911) + l[r(570)]);
  const f = await l.json();
  return { name: f[r(1648)] + "/" + f[r(1907)] };
});
const en = a(2452), a2 = [en, a(1934), "2024-11-05", a(1016)], _x = a(2658), xn = Ke([g(), W()[a(2837)]()]), tn = g(), r2 = S({ progressToken: B(xn) })[a(2829)](), r0 = S({ _meta: B(r2) })[a(2829)](), x0 = S({ method: g(), params: B(r0) }), ix = S({ _meta: B(S({})[a(2829)]()) })[a(2829)](), m0 = S({ method: g(), params: B(ix) }), s0 = S({ _meta: B(S({})[a(2829)]()) })[a(2829)](), Ox = Ke([g(), W()[a(2837)]()]), an = S({ jsonrpc: te(_x), id: Ox }).merge(x0)[a(426)](), s2 = (o) => an[a(3031)](o)[a(1472)], rn = S({ jsonrpc: te(_x) }).merge(m0)[a(426)](), n2 = (o) => rn[a(3031)](o)[a(1472)], sn = S({ jsonrpc: te(_x), id: Ox, result: s0 })[a(426)](), ar = (o) => sn.safeParse(o).success;
var y0;
(function(o) {
  const x = a;
  o[o.ConnectionClosed = -32e3] = x(969), o[o[x(1158)] = -32001] = x(1158), o[o[x(424)] = -32700] = x(424), o[o[x(1546)] = -32600] = x(1546), o[o.MethodNotFound = -32601] = "MethodNotFound", o[o[x(2801)] = -32602] = x(2801), o[o[x(2427)] = -32603] = x(2427);
})(y0 || (y0 = {}));
const nn = S({ jsonrpc: te(_x), id: Ox, error: S({ code: W()[a(2837)](), message: g(), data: B(S0()) }) }).strict(), o2 = (o) => nn[a(3031)](o).success;
Ke([an, rn, sn, nn]);
const ta = s0[a(426)](), aa = m0[a(1393)]({ method: te(a(801)), params: ix[a(1393)]({ requestId: Ox, reason: g()[a(1712)]() }) }), cx = S({ name: g(), title: B(g()) })[a(2829)](), on = cx[a(1393)]({ version: g() }), i2 = S({ experimental: B(S({})[a(2829)]()), sampling: B(S({})[a(2829)]()), elicitation: B(S({})[a(2829)]()), roots: B(S({ listChanged: B(ee()) })[a(2829)]()) })[a(2829)](), cn = x0.extend({ method: te("initialize"), params: r0[a(1393)]({ protocolVersion: g(), capabilities: i2, clientInfo: on }) }), c2 = S({ experimental: B(S({})[a(2829)]()), logging: B(S({}).passthrough()), completions: B(S({})[a(2829)]()), prompts: B(S({ listChanged: B(ee()) })[a(2829)]()), resources: B(S({ subscribe: B(ee()), listChanged: B(ee()) })[a(2829)]()), tools: B(S({ listChanged: B(ee()) })[a(2829)]()) }).passthrough(), d2 = s0[a(1393)]({ protocolVersion: g(), capabilities: c2, serverInfo: on, instructions: B(g()) }), dn = m0.extend({ method: te(a(2023)) }), ra = x0[a(1393)]({ method: te(a(1319)) }), u2 = S({ progress: W(), total: B(W()), message: B(g()) })[a(2829)](), sa = m0[a(1393)]({ method: te("notifications/progress"), params: ix[a(585)](u2)[a(1393)]({ progressToken: xn }) }), Dx = x0[a(1393)]({ params: r0[a(1393)]({ cursor: B(tn) })[a(1712)]() }), jx = s0[a(1393)]({ nextCursor: B(tn) }), un = S({ uri: g(), mimeType: B(g()), _meta: B(S({})[a(2829)]()) }).passthrough(), ln = un[a(1393)]({ text: g() }), fn = un[a(1393)]({ blob: g()[a(1276)]() }), hn = cx.extend({ uri: g(), description: B(g()), mimeType: B(g()), _meta: B(S({}).passthrough()) }), l2 = cx[a(1393)]({ uriTemplate: g(), description: B(g()), mimeType: B(g()), _meta: B(S({})[a(2829)]()) }), f2 = Dx[a(1393)]({ method: te(a(1164)) }), h2 = jx[a(1393)]({ resources: ve(hn) }), p2 = Dx.extend({ method: te(a(1898)) }), m2 = jx[a(1393)]({ resourceTemplates: ve(l2) }), b2 = x0[a(1393)]({ method: te(a(2309)), params: r0[a(1393)]({ uri: g() }) }), g2 = s0[a(1393)]({ contents: ve(Ke([ln, fn])) }), y2 = m0[a(1393)]({ method: te("notifications/resources/list_changed") }), v2 = x0.extend({ method: te(a(2489)), params: r0.extend({ uri: g() }) }), w2 = x0.extend({ method: te(a(1233)), params: r0[a(1393)]({ uri: g() }) }), S2 = m0[a(1393)]({ method: te(a(1555)), params: ix[a(1393)]({ uri: g() }) }), k2 = S({ name: g(), description: B(g()), required: B(ee()) })[a(2829)](), P2 = cx.extend({ description: B(g()), arguments: B(ve(k2)), _meta: B(S({})[a(2829)]()) }), I2 = Dx.extend({ method: te(a(2806)) }), E2 = jx[a(1393)]({ prompts: ve(P2) }), C2 = x0[a(1393)]({ method: te("prompts/get"), params: r0[a(1393)]({ name: g(), arguments: B(De(g())) }) }), ca = S({ type: te(a(768)), text: g(), _meta: B(S({})[a(2829)]()) })[a(2829)](), da = S({ type: te(a(2894)), data: g()[a(1276)](), mimeType: g(), _meta: B(S({})[a(2829)]()) }).passthrough(), ua = S({ type: te(a(1560)), data: g().base64(), mimeType: g(), _meta: B(S({})[a(2829)]()) })[a(2829)](), R2 = S({ type: te(a(1721)), resource: Ke([ln, fn]), _meta: B(S({})[a(2829)]()) })[a(2829)](), F2 = hn[a(1393)]({ type: te(a(1357)) }), pn = Ke([ca, da, ua, F2, R2]), N2 = S({ role: Ie([a(552), a(3009)]), content: pn })[a(2829)](), q2 = s0[a(1393)]({ description: B(g()), messages: ve(N2) }), T2 = m0[a(1393)]({ method: te(a(577)) }), A2 = S({ title: B(g()), readOnlyHint: B(ee()), destructiveHint: B(ee()), idempotentHint: B(ee()), openWorldHint: B(ee()) })[a(2829)](), _2 = cx.extend({ description: B(g()), inputSchema: S({ type: te(a(2517)), properties: B(S({})[a(2829)]()), required: B(ve(g())) })[a(2829)](), outputSchema: B(S({ type: te(a(2517)), properties: B(S({}).passthrough()), required: B(ve(g())) }).passthrough()), annotations: B(A2), _meta: B(S({}).passthrough()) }), O2 = Dx[a(1393)]({ method: te("tools/list") }), D2 = jx[a(1393)]({ tools: ve(_2) }), mn = s0[a(1393)]({ content: ve(pn)[a(2889)]([]), structuredContent: S({}).passthrough()[a(1712)](), isError: B(ee()) });
mn.or(s0.extend({ toolResult: S0() }));
const j2 = x0[a(1393)]({ method: te(a(3063)), params: r0[a(1393)]({ name: g(), arguments: B(De(S0())) }) }), M2 = m0[a(1393)]({ method: te("notifications/tools/list_changed") }), bn = Ie([a(825), "info", a(1614), a(2397), a(1493), "critical", a(2479), a(460)]), L2 = x0[a(1393)]({ method: te("logging/setLevel"), params: r0[a(1393)]({ level: bn }) }), $2 = m0.extend({ method: te(a(2640)), params: ix[a(1393)]({ level: bn, logger: B(g()), data: S0() }) }), U2 = S({ name: g()[a(1712)]() })[a(2829)](), H2 = S({ hints: B(ve(U2)), costPriority: B(W()[a(2310)](0)[a(544)](1)), speedPriority: B(W()[a(2310)](0)[a(544)](1)), intelligencePriority: B(W()[a(2310)](0).max(1)) })[a(2829)](), z2 = S({ role: Ie([a(552), a(3009)]), content: Ke([ca, da, ua]) })[a(2829)](), V2 = x0[a(1393)]({ method: te(a(648)), params: r0[a(1393)]({ messages: ve(z2), systemPrompt: B(g()), includeContext: B(Ie([a(1598), a(832), a(2460)])), temperature: B(W()), maxTokens: W()[a(2837)](), stopSequences: B(ve(g())), metadata: B(S({})[a(2829)]()), modelPreferences: B(H2) }) }), gn = s0.extend({ model: g(), stopReason: B(Ie([a(2804), a(525), a(1087)]).or(g())), role: Ie([a(552), a(3009)]), content: Zs(a(506), [ca, da, ua]) }), B2 = S({ type: te(a(1964)), title: B(g()), description: B(g()), default: B(ee()) })[a(2829)](), Z2 = S({ type: te("string"), title: B(g()), description: B(g()), minLength: B(W()), maxLength: B(W()), format: B(Ie(["email", a(3032), a(1457), a(739)])) })[a(2829)](), W2 = S({ type: Ie([a(1730), a(2421)]), title: B(g()), description: B(g()), minimum: B(W()), maximum: B(W()) })[a(2829)](), K2 = S({ type: te(a(1443)), title: B(g()), description: B(g()), enum: ve(g()), enumNames: B(ve(g())) })[a(2829)](), G2 = Ke([B2, Z2, W2, K2]), J2 = x0.extend({ method: te(a(595)), params: r0[a(1393)]({ message: g(), requestedSchema: S({ type: te(a(2517)), properties: De(g(), G2), required: B(ve(g())) })[a(2829)]() }) }), yn = s0[a(1393)]({ action: Ie([a(710), a(2189), a(3025)]), content: B(De(g(), S0())) }), Q2 = S({ type: te(a(913)), uri: g() }).passthrough(), X2 = S({ type: te(a(775)), name: g() })[a(2829)](), Y2 = x0[a(1393)]({ method: te(a(2619)), params: r0.extend({ ref: Ke([X2, Q2]), argument: S({ name: g(), value: g() }).passthrough(), context: B(S({ arguments: B(De(g(), g())) })) }) }), ec = s0[a(1393)]({ completion: S({ values: ve(g())[a(544)](100), total: B(W()[a(2837)]()), hasMore: B(ee()) })[a(2829)]() }), xc = S({ uri: g()[a(1904)](a(1568)), name: B(g()), _meta: B(S({})[a(2829)]()) }).passthrough(), tc = x0.extend({ method: te(a(379)) }), vn = s0[a(1393)]({ roots: ve(xc) }), ac = m0[a(1393)]({ method: te(a(2729)) });
Ke([ra, cn, Y2, L2, C2, I2, f2, p2, b2, v2, w2, j2, O2]), Ke([aa, sa, dn, ac]), Ke([ta, gn, yn, vn]), Ke([ra, V2, J2, tc]), Ke([aa, sa, $2, S2, y2, M2, T2]), Ke([ta, d2, ec, q2, E2, h2, m2, g2, mn, D2]);
class _0 extends Error {
  constructor(x, t, r) {
    const e = a;
    super(e(1720) + x + ": " + t), this.code = x, this.data = r, this[e(1907)] = e(2986);
  }
}
const rc = 6e4;
class sc {
  constructor(x) {
    const t = a;
    this[t(941)] = x, this[t(1107)] = 0, this[t(1380)] = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this[t(428)] = /* @__PURE__ */ new Map(), this[t(1928)] = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this[t(2582)] = /* @__PURE__ */ new Map(), this[t(2985)] = /* @__PURE__ */ new Set(), this.setNotificationHandler(aa, (r) => {
      const e = t, s = this[e(780)][e(2620)](r.params[e(1386)]);
      s == null || s[e(1973)](r.params[e(866)]);
    }), this[t(1977)](sa, (r) => {
      this._onprogress(r);
    }), this[t(921)](ra, (r) => ({}));
  }
  [a(438)](x, t, r, e, s = !1) {
    const n = a;
    this[n(2582)].set(x, { timeoutId: setTimeout(e, t), startTime: Date[n(2356)](), timeout: t, maxTotalTimeout: r, resetTimeoutOnProgress: s, onTimeout: e });
  }
  _resetTimeout(x) {
    const t = a, r = this[t(2582)][t(2620)](x);
    if (!r) return !1;
    const e = Date[t(2356)]() - r[t(2087)];
    if (r[t(2391)] && e >= r[t(2391)])
      throw this[t(2582)].delete(x), new _0(y0.RequestTimeout, "Maximum total timeout exceeded", { maxTotalTimeout: r[t(2391)], totalElapsed: e });
    return clearTimeout(r.timeoutId), r[t(2892)] = setTimeout(r[t(488)], r[t(454)]), !0;
  }
  [a(2258)](x) {
    const t = a, r = this[t(2582)][t(2620)](x);
    r && (clearTimeout(r.timeoutId), this[t(2582)][t(1239)](x));
  }
  async connect(x) {
    const t = a;
    var r, e, s;
    this[t(2645)] = x;
    const n = (r = this[t(1130)]) === null || r === void 0 ? void 0 : r.onclose;
    this[t(2645)][t(2779)] = () => {
      const d = t;
      n == null || n(), this[d(1675)]();
    };
    const i = (e = this.transport) === null || e === void 0 ? void 0 : e[t(2900)];
    this[t(2645)][t(2900)] = (d) => {
      const u = t;
      i == null || i(d), this[u(2867)](d);
    };
    const c = (s = this[t(2645)]) === null || s === void 0 ? void 0 : s[t(1981)];
    this._transport[t(1981)] = (d, u) => {
      const l = t;
      c == null || c(d, u), ar(d) || o2(d) ? this[l(2751)](d) : s2(d) ? this[l(1882)](d, u) : n2(d) ? this._onnotification(d) : this._onerror(new Error("Unknown message type: " + JSON.stringify(d)));
    }, await this[t(2645)][t(817)]();
  }
  _onclose() {
    const x = a;
    var t;
    const r = this[x(1928)];
    this[x(1928)] = /* @__PURE__ */ new Map(), this[x(3047)][x(2149)](), this[x(2985)][x(2149)](), this[x(2645)] = void 0, (t = this[x(2779)]) === null || t === void 0 || t[x(1175)](this);
    const e = new _0(y0[x(969)], x(3038));
    for (const s of r[x(2323)]())
      s(e);
  }
  [a(2867)](x) {
    const t = a;
    var r;
    (r = this[t(2900)]) === null || r === void 0 || r[t(1175)](this, x);
  }
  [a(1155)](x) {
    const t = a;
    var r;
    const e = (r = this[t(428)][t(2620)](x[t(392)])) !== null && r !== void 0 ? r : this[t(1742)];
    e !== void 0 && Promise.resolve()[t(857)](() => e(x)).catch((s) => this[t(2867)](new Error(t(482) + s)));
  }
  [a(1882)](x, t) {
    const r = a;
    var e, s, n, i;
    const c = (e = this[r(1380)].get(x[r(392)])) !== null && e !== void 0 ? e : this[r(1261)];
    if (c === void 0) {
      (s = this[r(2645)]) === null || s === void 0 || s[r(1237)]({ jsonrpc: r(2658), id: x.id, error: { code: y0[r(1069)], message: "Method not found" } })[r(1508)]((l) => this[r(2867)](new Error(r(2673) + l)));
      return;
    }
    const d = new AbortController();
    this[r(780)][r(2454)](x.id, d);
    const u = { signal: d.signal, sessionId: (n = this[r(2645)]) === null || n === void 0 ? void 0 : n[r(1289)], _meta: (i = x.params) === null || i === void 0 ? void 0 : i[r(820)], sendNotification: (l) => this.notification(l, { relatedRequestId: x.id }), sendRequest: (l, f, b) => this[r(714)](l, f, { ...b, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t[r(2297)], requestId: x.id, requestInfo: t == null ? void 0 : t.requestInfo };
    Promise[r(510)]()[r(857)](() => c(x, u)).then((l) => {
      const f = r;
      var b;
      if (!d[f(2009)][f(930)])
        return (b = this[f(2645)]) === null || b === void 0 ? void 0 : b[f(1237)]({ result: l, jsonrpc: f(2658), id: x.id });
    }, (l) => {
      const f = r;
      var b, h;
      if (!d[f(2009)].aborted)
        return (b = this[f(2645)]) === null || b === void 0 ? void 0 : b[f(1237)]({ jsonrpc: f(2658), id: x.id, error: { code: Number[f(1595)](l.code) ? l[f(3068)] : y0.InternalError, message: (h = l[f(2732)]) !== null && h !== void 0 ? h : f(366) } });
    })[r(1508)]((l) => this._onerror(new Error(r(1819) + l)))[r(2644)](() => {
      const l = r;
      this[l(780)][l(1239)](x.id);
    });
  }
  [a(2705)](x) {
    const t = a, { progressToken: r, ...e } = x.params, s = Number(r), n = this[t(3047)].get(s);
    if (!n) {
      this[t(2867)](new Error(t(769) + JSON[t(1749)](x)));
      return;
    }
    const i = this[t(1928)][t(2620)](s), c = this._timeoutInfo[t(2620)](s);
    if (c && i && c.resetTimeoutOnProgress) try {
      this[t(2614)](s);
    } catch (d) {
      i(d);
      return;
    }
    n(e);
  }
  _onresponse(x) {
    const t = a, r = Number(x.id), e = this._responseHandlers[t(2620)](r);
    if (e === void 0) {
      this[t(2867)](new Error("Received a response for an unknown message ID: " + JSON[t(1749)](x)));
      return;
    }
    if (this[t(1928)][t(1239)](r), this._progressHandlers.delete(r), this[t(2258)](r), ar(x)) e(x);
    else {
      const s = new _0(x[t(1493)][t(3068)], x[t(1493)][t(2732)], x[t(1493)][t(571)]);
      e(s);
    }
  }
  get [a(1130)]() {
    return this[a(2645)];
  }
  async [a(1522)]() {
    const x = a;
    var t;
    await ((t = this[x(2645)]) === null || t === void 0 ? void 0 : t[x(1522)]());
  }
  [a(714)](x, t, r) {
    const { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n } = r ?? {};
    return new Promise((i, c) => {
      const d = K;
      var u, l, f, b, h, p;
      if (!this[d(2645)]) {
        c(new Error(d(1697)));
        return;
      }
      ((u = this[d(941)]) === null || u === void 0 ? void 0 : u.enforceStrictCapabilities) === !0 && this[d(1698)](x.method), (l = r == null ? void 0 : r[d(2009)]) === null || l === void 0 || l.throwIfAborted();
      const v = this[d(1107)]++, k = { ...x, jsonrpc: d(2658), id: v };
      r != null && r[d(2664)] && (this._progressHandlers.set(v, r[d(2664)]), k[d(2863)] = { ...x[d(2863)], _meta: { ...((f = x[d(2863)]) === null || f === void 0 ? void 0 : f[d(820)]) || {}, progressToken: v } });
      const P = (C) => {
        const I = d;
        var R;
        this._responseHandlers[I(1239)](v), this[I(3047)].delete(v), this[I(2258)](v), (R = this[I(2645)]) === null || R === void 0 || R[I(1237)]({ jsonrpc: I(2658), method: I(801), params: { requestId: v, reason: String(C) } }, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n })[I(1508)]((O) => this[I(2867)](new Error(I(462) + O))), c(C);
      };
      this._responseHandlers[d(2454)](v, (C) => {
        const I = d;
        var R;
        if (!(!((R = r == null ? void 0 : r[I(2009)]) === null || R === void 0) && R[I(930)])) {
          if (C instanceof Error) return c(C);
          try {
            const O = t[I(1584)](C[I(2712)]);
            i(O);
          } catch (O) {
            c(O);
          }
        }
      }), (b = r == null ? void 0 : r[d(2009)]) === null || b === void 0 || b[d(1914)](d(1973), () => {
        const C = d;
        var I;
        P((I = r == null ? void 0 : r[C(2009)]) === null || I === void 0 ? void 0 : I.reason);
      });
      const N = (h = r == null ? void 0 : r[d(454)]) !== null && h !== void 0 ? h : rc, T = () => P(new _0(y0[d(1158)], d(1810), { timeout: N }));
      this[d(438)](v, N, r == null ? void 0 : r[d(2391)], T, (p = r == null ? void 0 : r[d(2780)]) !== null && p !== void 0 ? p : !1), this[d(2645)][d(1237)](k, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n })[d(1508)]((C) => {
        this._cleanupTimeout(v), c(C);
      });
    });
  }
  async [a(766)](x, t) {
    const r = a;
    var e, s;
    if (!this[r(2645)]) throw new Error("Not connected");
    if (this[r(2964)](x[r(392)]), ((s = (e = this[r(941)]) === null || e === void 0 ? void 0 : e[r(2623)]) !== null && s !== void 0 ? s : [])[r(416)](x[r(392)]) && !x[r(2863)] && !(t != null && t[r(2047)])) {
      if (this[r(2985)].has(x.method)) return;
      this[r(2985)].add(x[r(392)]), Promise[r(510)]()[r(857)](() => {
        const d = r;
        var u;
        if (this[d(2985)][d(1239)](x[d(392)]), !this[d(2645)]) return;
        const l = { ...x, jsonrpc: d(2658) };
        (u = this[d(2645)]) === null || u === void 0 || u.send(l, t).catch((f) => this._onerror(f));
      });
      return;
    }
    const c = { ...x, jsonrpc: r(2658) };
    await this[r(2645)].send(c, t);
  }
  [a(921)](x, t) {
    const r = a, e = x[r(1798)][r(392)][r(2398)];
    this[r(1110)](e), this[r(1380)][r(2454)](e, (s, n) => {
      const i = r;
      return Promise[i(510)](t(x[i(1584)](s), n));
    });
  }
  [a(2994)](x) {
    const t = a;
    this[t(1380)][t(1239)](x);
  }
  assertCanSetRequestHandler(x) {
    const t = a;
    if (this._requestHandlers.has(x)) throw new Error("A request handler for " + x + t(533));
  }
  [a(1977)](x, t) {
    const r = a;
    this[r(428)].set(x[r(1798)][r(392)][r(2398)], (e) => Promise[r(510)](t(x[r(1584)](e))));
  }
  [a(1567)](x) {
    const t = a;
    this[t(428)][t(1239)](x);
  }
}
function nc(o, x) {
  const t = a;
  return Object.entries(x)[t(2304)]((r, [e, s]) => (s && typeof s === t(2517) ? r[e] = r[e] ? { ...r[e], ...s } : s : r[e] = s, r), { ...o });
}
var X0 = { exports: {} }, oc = X0[a(982)], rr;
function ic() {
  const o = a;
  return rr || (rr = 1, (function(x, t) {
    (function(r, e) {
      e(t);
    })(oc, function(r) {
      const e = K;
      function s() {
        const E = K;
        for (var m = arguments.length, y = Array(m), w = 0; w < m; w++)
          y[w] = arguments[w];
        if (y[E(2910)] > 1) {
          y[0] = y[0][E(2527)](0, -1);
          for (var U = y.length - 1, $ = 1; $ < U; ++$)
            y[$] = y[$].slice(1, -1);
          return y[U] = y[U].slice(1), y[E(952)]("");
        } else return y[0];
      }
      function n(E) {
        return "(?:" + E + ")";
      }
      function i(E) {
        const m = K;
        return E === void 0 ? "undefined" : E === null ? m(2973) : Object[m(560)].toString[m(1175)](E).split(" ")[m(641)]().split("]").shift()[m(2071)]();
      }
      function c(E) {
        return E.toUpperCase();
      }
      function d(E) {
        const m = K;
        return E != null ? E instanceof Array ? E : typeof E[m(2910)] !== m(1730) || E[m(1389)] || E[m(831)] || E[m(1175)] ? [E] : Array[m(560)].slice[m(1175)](E) : [];
      }
      function u(E, m) {
        var y = E;
        if (m) for (var w in m)
          y[w] = m[w];
        return y;
      }
      function l(E) {
        const m = K;
        var y = m(498), w = m(3042), U = s(w, m(1754)), $ = n(n(m(1873) + U + "%" + U + U + "%" + U + U) + "|" + n(m(868) + U + "%" + U + U) + "|" + n("%" + U + U)), oe = m(1236), de = m(3035), Fe = s(oe, de), je = E ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", Ve = E ? m(2088) : "[]", Pe = s(y, w, "[\\-\\.\\_\\~]", je);
        n(y + s(y, w, m(3020)) + "*"), n(n($ + "|" + s(Pe, de, m(748))) + "*");
        var Oe = n(n(m(728)) + "|" + n(m(1887) + w) + "|" + n("1" + w + w) + "|" + n(m(1421) + w) + m(452) + w), Be = n(Oe + "\\." + Oe + "\\." + Oe + "\\." + Oe), ge = n(U + "{1,4}"), $e = n(n(ge + "\\:" + ge) + "|" + Be), Ze = n(n(ge + "\\:") + m(2347) + $e), Ue = n(m(1050) + n(ge + "\\:") + "{5}" + $e), P0 = n(n(ge) + "?\\:\\:" + n(ge + "\\:") + "{4}" + $e), i0 = n(n(n(ge + "\\:") + m(1329) + ge) + m(1136) + n(ge + "\\:") + m(610) + $e), c0 = n(n(n(ge + "\\:") + m(1418) + ge) + m(1136) + n(ge + "\\:") + m(2494) + $e), $0 = n(n(n(ge + "\\:") + m(1816) + ge) + m(1136) + ge + "\\:" + $e), q0 = n(n(n(ge + "\\:") + m(2005) + ge) + m(1136) + $e), t0 = n(n(n(ge + "\\:") + "{0,5}" + ge) + "?\\:\\:" + ge), d0 = n(n(n(ge + "\\:") + m(2345) + ge) + m(1136)), T0 = n([Ze, Ue, P0, i0, c0, $0, q0, t0, d0].join("|")), u0 = n(n(Pe + "|" + $) + "+");
        n(m(940) + U + m(1656) + s(Pe, de, "[\\:]") + "+"), n(n($ + "|" + s(Pe, de)) + "*");
        var l0 = n($ + "|" + s(Pe, de, m(502)));
        return n(n($ + "|" + s(Pe, de, m(2507))) + "+"), n(n(l0 + "|" + s(m(1908), Ve)) + "*"), { NOT_SCHEME: new RegExp(s("[^]", y, w, m(3020)), "g"), NOT_USERINFO: new RegExp(s(m(464), Pe, de), "g"), NOT_HOST: new RegExp(s(m(1337), Pe, de), "g"), NOT_PATH: new RegExp(s("[^\\%\\/\\:\\@]", Pe, de), "g"), NOT_PATH_NOSCHEME: new RegExp(s(m(1375), Pe, de), "g"), NOT_QUERY: new RegExp(s("[^\\%]", Pe, de, m(901), Ve), "g"), NOT_FRAGMENT: new RegExp(s("[^\\%]", Pe, de, m(901)), "g"), ESCAPE: new RegExp(s("[^]", Pe, de), "g"), UNRESERVED: new RegExp(Pe, "g"), OTHER_CHARS: new RegExp(s("[^\\%]", Pe, Fe), "g"), PCT_ENCODED: new RegExp($, "g"), IPV4ADDRESS: new RegExp("^(" + Be + ")$"), IPV6ADDRESS: new RegExp("^\\[?(" + T0 + ")" + n(n(m(1167) + U + "{2})") + "(" + u0 + ")") + m(2965)) };
      }
      var f = l(!1), b = l(!0), h = /* @__PURE__ */ (function() {
        function E(m, y) {
          const w = K;
          var U = [], $ = !0, oe = !1, de = void 0;
          try {
            for (var Fe = m[Symbol[w(2429)]](), je; !($ = (je = Fe.next())[w(2809)]) && (U.push(je[w(2398)]), !(y && U.length === y)); $ = !0)
              ;
          } catch (Ve) {
            oe = !0, de = Ve;
          } finally {
            try {
              !$ && Fe[w(2253)] && Fe[w(2253)]();
            } finally {
              if (oe) throw de;
            }
          }
          return U;
        }
        return function(m, y) {
          const w = K;
          if (Array.isArray(m)) return m;
          if (Symbol.iterator in Object(m)) return E(m, y);
          throw new TypeError(w(2041));
        };
      })(), p = function(E) {
        if (Array[K(2573)](E)) {
          for (var y = 0, w = Array(E.length); y < E.length; y++) w[y] = E[y];
          return w;
        } else return Array.from(E);
      }, v = 2147483647, k = 36, P = 1, N = 26, T = 38, C = 700, I = 72, R = 128, O = "-", D = /^xn--/, M = /[^\0-\x7E]/, F = /[\x2E\u3002\uFF0E\uFF61]/g, q = { overflow: "Overflow: input needs wider integers to process", "not-basic": e(1530), "invalid-input": "Invalid input" }, H = k - P, L = Math[e(878)], z = String[e(1128)];
      function G(E) {
        throw new RangeError(q[E]);
      }
      function se(E, m) {
        const y = e;
        for (var w = [], U = E[y(2910)]; U--; )
          w[U] = m(E[U]);
        return w;
      }
      function re(E, m) {
        const y = e;
        var w = E[y(1389)]("@"), U = "";
        w.length > 1 && (U = w[0] + "@", E = w[1]), E = E[y(1840)](F, ".");
        var $ = E.split("."), oe = se($, m).join(".");
        return U + oe;
      }
      function ue(E) {
        const m = e;
        for (var y = [], w = 0, U = E.length; w < U; ) {
          var $ = E[m(425)](w++);
          if ($ >= 55296 && $ <= 56319 && w < U) {
            var oe = E[m(425)](w++);
            (oe & 64512) == 56320 ? y[m(816)]((($ & 1023) << 10) + (oe & 1023) + 65536) : (y[m(816)]($), w--);
          } else y[m(816)]($);
        }
        return y;
      }
      var fe = function(m) {
        const y = e;
        return String.fromCodePoint[y(1784)](String, p(m));
      }, le = function(m) {
        return m - 48 < 10 ? m - 22 : m - 65 < 26 ? m - 65 : m - 97 < 26 ? m - 97 : k;
      }, we = function(m, y) {
        return m + 22 + 75 * (m < 26) - ((y != 0) << 5);
      }, Ce = function(m, y, w) {
        var U = 0;
        for (m = w ? L(m / C) : m >> 1, m += L(m / y); m > H * N >> 1; U += k)
          m = L(m / H);
        return L(U + (H + 1) * m / (m + T));
      }, Me = function(m) {
        const y = e;
        var w = [], U = m[y(2910)], $ = 0, oe = R, de = I, Fe = m[y(2662)](O);
        Fe < 0 && (Fe = 0);
        for (var je = 0; je < Fe; ++je)
          m[y(425)](je) >= 128 && G("not-basic"), w[y(816)](m.charCodeAt(je));
        for (var Ve = Fe > 0 ? Fe + 1 : 0; Ve < U; ) {
          for (var Pe = $, Oe = 1, Be = k; ; Be += k) {
            Ve >= U && G(y(1419));
            var ge = le(m[y(425)](Ve++));
            (ge >= k || ge > L((v - $) / Oe)) && G(y(1748)), $ += ge * Oe;
            var $e = Be <= de ? P : Be >= de + N ? N : Be - de;
            if (ge < $e) break;
            var Ze = k - $e;
            Oe > L(v / Ze) && G("overflow"), Oe *= Ze;
          }
          var Ue = w[y(2910)] + 1;
          de = Ce($ - Pe, Ue, Pe == 0), L($ / Ue) > v - oe && G(y(1748)), oe += L($ / Ue), $ %= Ue, w.splice($++, 0, oe);
        }
        return String[y(2604)].apply(String, w);
      }, Re = function(m) {
        const y = e;
        var w = [];
        m = ue(m);
        var U = m[y(2910)], $ = R, oe = 0, de = I, Fe = !0, je = !1, Ve = void 0;
        try {
          for (var Pe = m[Symbol[y(2429)]](), Oe; !(Fe = (Oe = Pe[y(3016)]())[y(2809)]); Fe = !0) {
            var Be = Oe[y(2398)];
            Be < 128 && w[y(816)](z(Be));
          }
        } catch (G0) {
          je = !0, Ve = G0;
        } finally {
          try {
            !Fe && Pe[y(2253)] && Pe.return();
          } finally {
            if (je) throw Ve;
          }
        }
        var ge = w[y(2910)], $e = ge;
        for (ge && w[y(816)](O); $e < U; ) {
          var Ze = v, Ue = !0, P0 = !1, i0 = void 0;
          try {
            for (var c0 = m[Symbol[y(2429)]](), $0; !(Ue = ($0 = c0[y(3016)]()).done); Ue = !0) {
              var q0 = $0.value;
              q0 >= $ && q0 < Ze && (Ze = q0);
            }
          } catch (G0) {
            P0 = !0, i0 = G0;
          } finally {
            try {
              !Ue && c0[y(2253)] && c0[y(2253)]();
            } finally {
              if (P0) throw i0;
            }
          }
          var t0 = $e + 1;
          Ze - $ > L((v - oe) / t0) && G(y(1748)), oe += (Ze - $) * t0, $ = Ze;
          var d0 = !0, T0 = !1, u0 = void 0;
          try {
            for (var l0 = m[Symbol[y(2429)]](), ka; !(d0 = (ka = l0[y(3016)]())[y(2809)]); d0 = !0) {
              var Pa = ka[y(2398)];
              if (Pa < $ && ++oe > v && G("overflow"), Pa == $) {
                for (var dx = oe, ux = k; ; ux += k) {
                  var lx = ux <= de ? P : ux >= de + N ? N : ux - de;
                  if (dx < lx) break;
                  var Ia = dx - lx, Ea = k - lx;
                  w[y(816)](z(we(lx + Ia % Ea, 0))), dx = L(Ia / Ea);
                }
                w[y(816)](z(we(dx, 0))), de = Ce(oe, t0, $e == ge), oe = 0, ++$e;
              }
            }
          } catch (G0) {
            T0 = !0, u0 = G0;
          } finally {
            try {
              !d0 && l0[y(2253)] && l0.return();
            } finally {
              if (T0) throw u0;
            }
          }
          ++oe, ++$;
        }
        return w[y(952)]("");
      }, Je = function(m) {
        return re(m, function(y) {
          const w = K;
          return D.test(y) ? Me(y[w(2527)](4)[w(2071)]()) : y;
        });
      }, _ = function(m) {
        return re(m, function(y) {
          return M[K(2266)](y) ? "xn--" + Re(y) : y;
        });
      }, A = { version: e(2417), ucs2: { decode: ue, encode: fe }, decode: Me, encode: Re, toASCII: _, toUnicode: Je }, j = {};
      function J(E) {
        const m = e;
        var y = E[m(425)](0), w = void 0;
        return y < 16 ? w = "%0" + y[m(1725)](16)[m(2791)]() : y < 128 ? w = "%" + y[m(1725)](16)[m(2791)]() : y < 2048 ? w = "%" + (y >> 6 | 192)[m(1725)](16)[m(2791)]() + "%" + (y & 63 | 128).toString(16)[m(2791)]() : w = "%" + (y >> 12 | 224)[m(1725)](16)[m(2791)]() + "%" + (y >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (y & 63 | 128).toString(16)[m(2791)](), w;
      }
      function Q(E) {
        const m = e;
        for (var y = "", w = 0, U = E[m(2910)]; w < U; ) {
          var $ = parseInt(E.substr(w + 1, 2), 16);
          if ($ < 128) y += String.fromCharCode($), w += 3;
          else if ($ >= 194 && $ < 224) {
            if (U - w >= 6) {
              var oe = parseInt(E[m(645)](w + 4, 2), 16);
              y += String.fromCharCode(($ & 31) << 6 | oe & 63);
            } else y += E[m(645)](w, 6);
            w += 6;
          } else if ($ >= 224) {
            if (U - w >= 9) {
              var de = parseInt(E[m(645)](w + 4, 2), 16), Fe = parseInt(E.substr(w + 7, 2), 16);
              y += String.fromCharCode(($ & 15) << 12 | (de & 63) << 6 | Fe & 63);
            } else y += E[m(645)](w, 9);
            w += 9;
          } else y += E[m(645)](w, 3), w += 3;
        }
        return y;
      }
      function V(E, m) {
        const y = e;
        function w(U) {
          const $ = K;
          var oe = Q(U);
          return oe[$(742)](m[$(1402)]) ? oe : U;
        }
        return E[y(2503)] && (E.scheme = String(E[y(2503)]).replace(m[y(2690)], w)[y(2071)]()[y(1840)](m[y(1885)], "")), E.userinfo !== void 0 && (E[y(2444)] = String(E[y(2444)])[y(1840)](m.PCT_ENCODED, w)[y(1840)](m[y(1771)], J)[y(1840)](m[y(2690)], c)), E[y(2232)] !== void 0 && (E.host = String(E[y(2232)])[y(1840)](m[y(2690)], w).toLowerCase()[y(1840)](m.NOT_HOST, J)[y(1840)](m.PCT_ENCODED, c)), E[y(2075)] !== void 0 && (E.path = String(E[y(2075)])[y(1840)](m[y(2690)], w)[y(1840)](E.scheme ? m[y(2420)] : m.NOT_PATH_NOSCHEME, J)[y(1840)](m[y(2690)], c)), E.query !== void 0 && (E[y(1542)] = String(E[y(1542)])[y(1840)](m[y(2690)], w).replace(m[y(2981)], J)[y(1840)](m[y(2690)], c)), E[y(1783)] !== void 0 && (E.fragment = String(E.fragment)[y(1840)](m[y(2690)], w).replace(m.NOT_FRAGMENT, J)[y(1840)](m[y(2690)], c)), E;
      }
      function Y(E) {
        return E[e(1840)](/^0*(.*)/, "$1") || "0";
      }
      function ce(E, m) {
        const y = e;
        var w = E[y(742)](m[y(1205)]) || [], U = h(w, 2), $ = U[1];
        return $ ? $[y(1389)](".")[y(1429)](Y)[y(952)](".") : E;
      }
      function ie(E, m) {
        const y = e;
        var w = E[y(742)](m[y(951)]) || [], U = h(w, 3), $ = U[1], oe = U[2];
        if ($) {
          for (var de = $[y(2071)]().split("::")[y(2055)](), Fe = h(de, 2), je = Fe[0], Ve = Fe[1], Pe = Ve ? Ve[y(1389)](":")[y(1429)](Y) : [], Oe = je[y(1389)](":").map(Y), Be = m.IPV4ADDRESS[y(2266)](Oe[Oe[y(2910)] - 1]), ge = Be ? 7 : 8, $e = Oe.length - ge, Ze = Array(ge), Ue = 0; Ue < ge; ++Ue)
            Ze[Ue] = Pe[Ue] || Oe[$e + Ue] || "";
          Be && (Ze[ge - 1] = ce(Ze[ge - 1], m));
          var P0 = Ze.reduce(function(t0, d0, T0) {
            const u0 = y;
            if (!d0 || d0 === "0") {
              var l0 = t0[t0[u0(2910)] - 1];
              l0 && l0[u0(2365)] + l0[u0(2910)] === T0 ? l0[u0(2910)]++ : t0[u0(816)]({ index: T0, length: 1 });
            }
            return t0;
          }, []), i0 = P0[y(2786)](function(t0, d0) {
            return d0.length - t0.length;
          })[0], c0 = void 0;
          if (i0 && i0.length > 1) {
            var $0 = Ze[y(2527)](0, i0[y(2365)]), q0 = Ze[y(2527)](i0[y(2365)] + i0[y(2910)]);
            c0 = $0.join(":") + "::" + q0[y(952)](":");
          } else c0 = Ze[y(952)](":");
          return oe && (c0 += "%" + oe), c0;
        } else return E;
      }
      var xe = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, Le = "".match(/(){0}/)[1] === void 0;
      function Ae(E) {
        const m = e;
        var y = arguments[m(2910)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = {}, U = y[m(2116)] !== !1 ? b : f;
        y[m(1148)] === "suffix" && (E = (y.scheme ? y[m(2503)] + ":" : "") + "//" + E);
        var $ = E.match(xe);
        if ($) {
          Le ? (w[m(2503)] = $[1], w.userinfo = $[3], w[m(2232)] = $[4], w[m(1706)] = parseInt($[5], 10), w.path = $[6] || "", w[m(1542)] = $[7], w[m(1783)] = $[8], isNaN(w[m(1706)]) && (w[m(1706)] = $[5])) : (w.scheme = $[1] || void 0, w[m(2444)] = E[m(1316)]("@") !== -1 ? $[3] : void 0, w[m(2232)] = E[m(1316)]("//") !== -1 ? $[4] : void 0, w.port = parseInt($[5], 10), w[m(2075)] = $[6] || "", w[m(1542)] = E[m(1316)]("?") !== -1 ? $[7] : void 0, w[m(1783)] = E[m(1316)]("#") !== -1 ? $[8] : void 0, isNaN(w[m(1706)]) && (w[m(1706)] = E[m(742)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? $[4] : void 0)), w[m(2232)] && (w.host = ie(ce(w.host, U), U)), w.scheme === void 0 && w.userinfo === void 0 && w[m(2232)] === void 0 && w[m(1706)] === void 0 && !w.path && w.query === void 0 ? w.reference = m(734) : w[m(2503)] === void 0 ? w[m(1148)] = m(519) : w.fragment === void 0 ? w[m(1148)] = m(2203) : w[m(1148)] = m(3032), y[m(1148)] && y.reference !== m(2626) && y.reference !== w[m(1148)] && (w[m(1493)] = w[m(1493)] || m(2560) + y[m(1148)] + m(2079));
          var oe = j[(y[m(2503)] || w[m(2503)] || "")[m(2071)]()];
          if (!y[m(361)] && (!oe || !oe.unicodeSupport)) {
            if (w.host && (y.domainHost || oe && oe[m(2234)])) try {
              w[m(2232)] = A[m(898)](w[m(2232)].replace(U[m(2690)], Q)[m(2071)]());
            } catch (de) {
              w[m(1493)] = w[m(1493)] || m(846) + de;
            }
            V(w, f);
          } else V(w, U);
          oe && oe[m(1584)] && oe[m(1584)](w, y);
        } else w.error = w.error || m(2862);
        return w;
      }
      function He(E, m) {
        const y = e;
        var w = m[y(2116)] !== !1 ? b : f, U = [];
        return E[y(2444)] !== void 0 && (U[y(816)](E[y(2444)]), U[y(816)]("@")), E[y(2232)] !== void 0 && U[y(816)](ie(ce(String(E[y(2232)]), w), w).replace(w[y(951)], function($, oe, de) {
          return "[" + oe + (de ? "%25" + de : "") + "]";
        })), (typeof E[y(1706)] === y(1730) || typeof E[y(1706)] === y(1443)) && (U.push(":"), U[y(816)](String(E[y(1706)]))), U[y(2910)] ? U.join("") : void 0;
      }
      var Se = /^\.\.?\//, Ge = /^\/\.(\/|$)/, n0 = /^\/\.\.(\/|$)/, Qe = /^\/?(?:.|\n)*?(?=\/|$)/;
      function _e(E) {
        const m = e;
        for (var y = []; E.length; )
          if (E[m(742)](Se)) E = E[m(1840)](Se, "");
          else if (E[m(742)](Ge)) E = E[m(1840)](Ge, "/");
          else if (E[m(742)](n0)) E = E[m(1840)](n0, "/"), y[m(641)]();
          else if (E === "." || E === "..") E = "";
          else {
            var w = E[m(742)](Qe);
            if (w) {
              var U = w[0];
              E = E.slice(U.length), y[m(816)](U);
            } else throw new Error(m(1382));
          }
        return y[m(952)]("");
      }
      function ze(E) {
        const m = e;
        var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = y[m(2116)] ? b : f, U = [], $ = j[(y.scheme || E[m(2503)] || "")[m(2071)]()];
        if ($ && $[m(3065)] && $[m(3065)](E, y), E[m(2232)] && !w[m(951)].test(E[m(2232)])) {
          if (y[m(2234)] || $ && $[m(2234)]) try {
            E.host = y[m(2116)] ? A[m(2250)](E[m(2232)]) : A[m(898)](E.host.replace(w.PCT_ENCODED, Q).toLowerCase());
          } catch (Fe) {
            E[m(1493)] = E[m(1493)] || m(1582) + (y.iri ? m(2469) : "ASCII") + " via punycode: " + Fe;
          }
        }
        V(E, w), y[m(1148)] !== "suffix" && E[m(2503)] && (U[m(816)](E[m(2503)]), U[m(816)](":"));
        var oe = He(E, y);
        if (oe !== void 0 && (y[m(1148)] !== m(2626) && U[m(816)]("//"), U[m(816)](oe), E[m(2075)] && E.path[m(2898)](0) !== "/" && U[m(816)]("/")), E[m(2075)] !== void 0) {
          var de = E[m(2075)];
          !y[m(1556)] && (!$ || !$[m(1556)]) && (de = _e(de)), oe === void 0 && (de = de[m(1840)](/^\/\//, m(2547))), U[m(816)](de);
        }
        return E.query !== void 0 && (U[m(816)]("?"), U[m(816)](E[m(1542)])), E[m(1783)] !== void 0 && (U.push("#"), U[m(816)](E[m(1783)])), U[m(952)]("");
      }
      function Ye(E, m) {
        const y = e;
        var w = arguments[y(2910)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, U = arguments[3], $ = {};
        return !U && (E = Ae(ze(E, w), w), m = Ae(ze(m, w), w)), w = w || {}, !w.tolerant && m[y(2503)] ? ($[y(2503)] = m.scheme, $[y(2444)] = m[y(2444)], $.host = m.host, $[y(1706)] = m[y(1706)], $[y(2075)] = _e(m[y(2075)] || ""), $[y(1542)] = m.query) : (m[y(2444)] !== void 0 || m.host !== void 0 || m.port !== void 0 ? ($[y(2444)] = m[y(2444)], $[y(2232)] = m[y(2232)], $[y(1706)] = m[y(1706)], $[y(2075)] = _e(m[y(2075)] || ""), $.query = m[y(1542)]) : (m[y(2075)] ? (m[y(2075)][y(2898)](0) === "/" ? $[y(2075)] = _e(m[y(2075)]) : ((E[y(2444)] !== void 0 || E[y(2232)] !== void 0 || E[y(1706)] !== void 0) && !E.path ? $[y(2075)] = "/" + m[y(2075)] : E[y(2075)] ? $[y(2075)] = E[y(2075)][y(2527)](0, E[y(2075)].lastIndexOf("/") + 1) + m.path : $[y(2075)] = m[y(2075)], $[y(2075)] = _e($[y(2075)])), $.query = m[y(1542)]) : ($.path = E[y(2075)], m.query !== void 0 ? $[y(1542)] = m[y(1542)] : $.query = E[y(1542)]), $[y(2444)] = E[y(2444)], $[y(2232)] = E[y(2232)], $[y(1706)] = E.port), $[y(2503)] = E.scheme), $[y(1783)] = m.fragment, $;
      }
      function N0(E, m, y) {
        var w = u({ scheme: "null" }, y);
        return ze(Ye(Ae(E, w), Ae(m, w), w, !0), w);
      }
      function Mx(E, m) {
        const y = e;
        return typeof E == "string" ? E = ze(Ae(E, m), m) : i(E) === y(2517) && (E = Ae(ze(E, m), m)), E;
      }
      function Fn(E, m, y) {
        const w = e;
        return typeof E === w(1443) ? E = ze(Ae(E, y), y) : i(E) === w(2517) && (E = ze(E, y)), typeof m == "string" ? m = ze(Ae(m, y), y) : i(m) === "object" && (m = ze(m, y)), E === m;
      }
      function Nn(E, m) {
        const y = e;
        return E && E[y(1725)]()[y(1840)](!m || !m.iri ? f[y(1507)] : b[y(1507)], J);
      }
      function b0(E, m) {
        const y = e;
        return E && E[y(1725)]()[y(1840)](!m || !m[y(2116)] ? f.PCT_ENCODED : b.PCT_ENCODED, Q);
      }
      var W0 = { scheme: e(1940), domainHost: !0, parse: function(m, y) {
        const w = e;
        return !m[w(2232)] && (m[w(1493)] = m[w(1493)] || w(2342)), m;
      }, serialize: function(m, y) {
        const w = e;
        var U = String(m[w(2503)]).toLowerCase() === w(2276);
        return (m[w(1706)] === (U ? 443 : 80) || m.port === "") && (m[w(1706)] = void 0), !m[w(2075)] && (m[w(2075)] = "/"), m;
      } }, pa = { scheme: e(2276), domainHost: W0[e(2234)], parse: W0[e(1584)], serialize: W0[e(3065)] };
      function ma(E) {
        const m = e;
        return typeof E[m(614)] === m(1964) ? E[m(614)] : String(E[m(2503)])[m(2071)]() === m(1847);
      }
      var K0 = { scheme: "ws", domainHost: !0, parse: function(m, y) {
        const w = e;
        var U = m;
        return U.secure = ma(U), U[w(364)] = (U[w(2075)] || "/") + (U[w(1542)] ? "?" + U[w(1542)] : ""), U.path = void 0, U[w(1542)] = void 0, U;
      }, serialize: function(m, y) {
        const w = e;
        if ((m[w(1706)] === (ma(m) ? 443 : 80) || m[w(1706)] === "") && (m[w(1706)] = void 0), typeof m[w(614)] === w(1964) && (m[w(2503)] = m.secure ? w(1847) : "ws", m.secure = void 0), m.resourceName) {
          var U = m[w(364)][w(1389)]("?"), $ = h(U, 2), oe = $[0], de = $[1];
          m[w(2075)] = oe && oe !== "/" ? oe : void 0, m[w(1542)] = de, m[w(364)] = void 0;
        }
        return m[w(1783)] = void 0, m;
      } }, ba = { scheme: e(1847), domainHost: K0[e(2234)], parse: K0[e(1584)], serialize: K0[e(3065)] }, qn = {}, ga = e(3022) + e(1793) + "]", o0 = e(2359), Tn = n(n(e(1873) + o0 + "%" + o0 + o0 + "%" + o0 + o0) + "|" + n(e(868) + o0 + "%" + o0 + o0) + "|" + n("%" + o0 + o0)), An = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", _n = e(1875), On = s(_n, e(2456)), Dn = e(2080), jn = new RegExp(ga, "g"), L0 = new RegExp(Tn, "g"), Mn = new RegExp(s(e(1701), An, e(2261), e(1834), On), "g"), ya = new RegExp(s("[^]", ga, Dn), "g"), Ln = ya;
      function Lx(E) {
        const m = e;
        var y = Q(E);
        return y[m(742)](jn) ? y : E;
      }
      var va = { scheme: e(2649), parse: function(m, y) {
        const w = e;
        var U = m, $ = U.to = U[w(2075)] ? U[w(2075)][w(1389)](",") : [];
        if (U[w(2075)] = void 0, U[w(1542)]) {
          for (var oe = !1, de = {}, Fe = U[w(1542)].split("&"), je = 0, Ve = Fe[w(2910)]; je < Ve; ++je) {
            var Pe = Fe[je][w(1389)]("=");
            switch (Pe[0]) {
              case "to":
                for (var Oe = Pe[1][w(1389)](","), Be = 0, ge = Oe[w(2910)]; Be < ge; ++Be)
                  $.push(Oe[Be]);
                break;
              case w(2147):
                U[w(2147)] = b0(Pe[1], y);
                break;
              case w(2022):
                U[w(2022)] = b0(Pe[1], y);
                break;
              default:
                oe = !0, de[b0(Pe[0], y)] = b0(Pe[1], y);
                break;
            }
          }
          oe && (U[w(1711)] = de);
        }
        U[w(1542)] = void 0;
        for (var $e = 0, Ze = $[w(2910)]; $e < Ze; ++$e) {
          var Ue = $[$e][w(1389)]("@");
          if (Ue[0] = b0(Ue[0]), y[w(361)]) Ue[1] = b0(Ue[1], y)[w(2071)]();
          else try {
            Ue[1] = A[w(898)](b0(Ue[1], y).toLowerCase());
          } catch (P0) {
            U[w(1493)] = U[w(1493)] || w(2539) + P0;
          }
          $[$e] = Ue[w(952)]("@");
        }
        return U;
      }, serialize: function(m, y) {
        const w = e;
        var U = m, $ = d(m.to);
        if ($) {
          for (var oe = 0, de = $[w(2910)]; oe < de; ++oe) {
            var Fe = String($[oe]), je = Fe[w(2662)]("@"), Ve = Fe[w(2527)](0, je).replace(L0, Lx)[w(1840)](L0, c)[w(1840)](Mn, J), Pe = Fe[w(2527)](je + 1);
            try {
              Pe = y[w(2116)] ? A.toUnicode(Pe) : A[w(898)](b0(Pe, y).toLowerCase());
            } catch ($e) {
              U.error = U.error || w(2592) + (y[w(2116)] ? w(2469) : w(2803)) + " via punycode: " + $e;
            }
            $[oe] = Ve + "@" + Pe;
          }
          U.path = $[w(952)](",");
        }
        var Oe = m[w(1711)] = m[w(1711)] || {};
        m[w(2147)] && (Oe.subject = m.subject), m.body && (Oe[w(2022)] = m[w(2022)]);
        var Be = [];
        for (var ge in Oe)
          Oe[ge] !== qn[ge] && Be[w(816)](ge.replace(L0, Lx)[w(1840)](L0, c)[w(1840)](ya, J) + "=" + Oe[ge][w(1840)](L0, Lx)[w(1840)](L0, c)[w(1840)](Ln, J));
        return Be[w(2910)] && (U[w(1542)] = Be[w(952)]("&")), U;
      } }, $n = /^([^\:]+)\:(.*)/, wa = { scheme: e(385), parse: function(m, y) {
        const w = e;
        var U = m[w(2075)] && m[w(2075)][w(742)]($n), $ = m;
        if (U) {
          var oe = y[w(2503)] || $.scheme || "urn", de = U[1][w(2071)](), Fe = U[2], je = oe + ":" + (y.nid || de), Ve = j[je];
          $[w(687)] = de, $.nss = Fe, $[w(2075)] = void 0, Ve && ($ = Ve.parse($, y));
        } else $.error = $[w(1493)] || w(508);
        return $;
      }, serialize: function(m, y) {
        const w = e;
        var U = y[w(2503)] || m[w(2503)] || w(385), $ = m[w(687)], oe = U + ":" + (y[w(687)] || $), de = j[oe];
        de && (m = de[w(3065)](m, y));
        var Fe = m, je = m[w(1123)];
        return Fe[w(2075)] = ($ || y[w(687)]) + ":" + je, Fe;
      } }, Un = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, Sa = { scheme: e(1818), parse: function(m, y) {
        const w = e;
        var U = m;
        return U[w(1342)] = U[w(1123)], U[w(1123)] = void 0, !y.tolerant && (!U.uuid || !U[w(1342)].match(Un)) && (U[w(1493)] = U[w(1493)] || w(828)), U;
      }, serialize: function(m, y) {
        const w = e;
        var U = m;
        return U[w(1123)] = (m[w(1342)] || "")[w(2071)](), U;
      } };
      j[W0[e(2503)]] = W0, j[pa[e(2503)]] = pa, j[K0.scheme] = K0, j[ba.scheme] = ba, j[va[e(2503)]] = va, j[wa[e(2503)]] = wa, j[Sa.scheme] = Sa, r.SCHEMES = j, r.pctEncChar = J, r[e(2153)] = Q, r.parse = Ae, r[e(1590)] = _e, r[e(3065)] = ze, r[e(1143)] = Ye, r[e(510)] = N0, r[e(847)] = Mx, r[e(2881)] = Fn, r[e(2742)] = Nn, r[e(953)] = b0, Object[e(1171)](r, e(2617), { value: !0 });
    });
  })(X0, X0[o(982)])), X0.exports;
}
var Qx, sr;
function la() {
  return sr || (sr = 1, Qx = function o(x, t) {
    const r = K;
    if (x === t) return !0;
    if (x && t && typeof x == "object" && typeof t == r(2517)) {
      if (x.constructor !== t[r(2693)]) return !1;
      var e, s, n;
      if (Array.isArray(x)) {
        if (e = x[r(2910)], e != t.length) return !1;
        for (s = e; s-- !== 0; ) if (!o(x[s], t[s])) return !1;
        return !0;
      }
      if (x.constructor === RegExp) return x[r(862)] === t[r(862)] && x[r(2340)] === t[r(2340)];
      if (x[r(1066)] !== Object[r(560)][r(1066)]) return x[r(1066)]() === t[r(1066)]();
      if (x.toString !== Object[r(560)][r(1725)]) return x[r(1725)]() === t[r(1725)]();
      if (n = Object[r(548)](x), e = n[r(2910)], e !== Object[r(548)](t).length) return !1;
      for (s = e; s-- !== 0; ) if (!Object[r(560)][r(938)][r(1175)](t, n[s])) return !1;
      for (s = e; s-- !== 0; ) {
        var i = n[s];
        if (!o(x[i], t[i])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), Qx;
}
var Xx, nr;
function cc() {
  return nr || (nr = 1, Xx = function(x) {
    const t = K;
    for (var r = 0, e = x[t(2910)], s = 0, n; s < e; )
      r++, n = x[t(425)](s++), n >= 55296 && n <= 56319 && s < e && (n = x[t(425)](s), (n & 64512) == 56320 && s++);
    return r;
  }), Xx;
}
var Yx, or;
function Z0() {
  const o = a;
  if (or) return Yx;
  or = 1, Yx = { copy: x, checkDataType: t, checkDataTypes: r, coerceToTypes: s, toHash: n, getProperty: d, escapeQuotes: u, equal: la(), ucs2length: cc(), varOccurences: l, varReplace: f, schemaHasRules: b, schemaHasRulesExcept: h, schemaUnknownRules: p, toQuotedString: v, getPathExpr: k, getPath: P, getData: C, unescapeFragment: R, unescapeJsonPointer: M, escapeFragment: O, escapeJsonPointer: D };
  function x(F, q) {
    q = q || {};
    for (var H in F) q[H] = F[H];
    return q;
  }
  function t(F, q, H, L) {
    const z = K;
    var G = L ? z(844) : " === ", se = L ? " || " : z(905), re = L ? "!" : "", ue = L ? "" : "!";
    switch (F) {
      case z(2973):
        return q + G + z(2973);
      case z(1517):
        return re + z(2117) + q + ")";
      case z(2517):
        return "(" + re + q + se + "typeof " + q + G + z(704) + se + ue + z(2117) + q + "))";
      case z(2421):
        return "(typeof " + q + G + z(2102) + se + ue + "(" + q + z(402) + se + q + G + q + (H ? se + re + z(861) + q + ")" : "") + ")";
      case z(1730):
        return z(1296) + q + G + '"' + F + '"' + (H ? se + re + "isFinite(" + q + ")" : "") + ")";
      default:
        return z(826) + q + G + '"' + F + '"';
    }
  }
  function r(F, q, H) {
    const L = K;
    switch (F.length) {
      case 1:
        return t(F[0], q, H, !0);
      default:
        var z = "", G = n(F);
        G[L(1517)] && G[L(2517)] && (z = G[L(2973)] ? "(" : "(!" + q + L(1073), z += L(826) + q + L(1254), delete G[L(2973)], delete G[L(1517)], delete G.object), G[L(1730)] && delete G[L(2421)];
        for (var se in G) z += (z ? " && " : "") + t(se, q, H, !0);
        return z;
    }
  }
  var e = n([o(1443), o(1730), o(2421), "boolean", "null"]);
  function s(F, q) {
    const H = o;
    if (Array.isArray(q)) {
      for (var L = [], z = 0; z < q.length; z++) {
        var G = q[z];
        e[G] ? L[L[H(2910)]] = G : F === H(1517) && G === H(1517) && (L[L.length] = G);
      }
      if (L.length) return L;
    } else {
      if (e[q]) return [q];
      if (F === H(1517) && q === H(1517)) return [H(1517)];
    }
  }
  function n(F) {
    const q = o;
    for (var H = {}, L = 0; L < F[q(2910)]; L++) H[F[L]] = !0;
    return H;
  }
  var i = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function d(F) {
    const q = o;
    return typeof F == q(1730) ? "[" + F + "]" : i[q(2266)](F) ? "." + F : "['" + u(F) + "']";
  }
  function u(F) {
    const q = o;
    return F[q(1840)](c, q(2802)).replace(/\n/g, "\\n").replace(/\r/g, "\\r")[q(1840)](/\f/g, "\\f")[q(1840)](/\t/g, "\\t");
  }
  function l(F, q) {
    const H = o;
    q += H(2979);
    var L = F[H(742)](new RegExp(q, "g"));
    return L ? L[H(2910)] : 0;
  }
  function f(F, q, H) {
    const L = o;
    return q += L(1388), H = H[L(1840)](/\$/g, L(758)), F[L(1840)](new RegExp(q, "g"), H + "$1");
  }
  function b(F, q) {
    if (typeof F == o(1964)) return !F;
    for (var L in F) if (q[L]) return !0;
  }
  function h(F, q, H) {
    const L = o;
    if (typeof F == L(1964)) return !F && H != L(685);
    for (var z in F) if (z != H && q[z]) return !0;
  }
  function p(F, q) {
    if (typeof F != o(1964)) {
      for (var L in F) if (!q[L]) return L;
    }
  }
  function v(F) {
    return "'" + u(F) + "'";
  }
  function k(F, q, H, L) {
    const z = o;
    var G = H ? "'/' + " + q + (L ? "" : z(1850)) : L ? z(2704) + q + z(2857) : "'[\\'' + " + q + z(2988);
    return I(F, G);
  }
  function P(F, q, H) {
    var L = v(H ? "/" + D(q) : d(q));
    return I(F, L);
  }
  var N = /^\/(?:[^~]|~0|~1)*$/, T = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function C(F, q, H) {
    const L = o;
    var z, G, se, re;
    if (F === "") return L(1400);
    if (F[0] == "/") {
      if (!N.test(F)) throw new Error("Invalid JSON-pointer: " + F);
      G = F, se = L(1400);
    } else {
      if (re = F[L(742)](T), !re) throw new Error(L(2642) + F);
      if (z = +re[1], G = re[2], G == "#") {
        if (z >= q) throw new Error(L(1152) + z + " levels up, current level is " + q);
        return H[q - z];
      }
      if (z > q) throw new Error(L(1710) + z + L(564) + q);
      if (se = L(571) + (q - z || ""), !G) return se;
    }
    for (var ue = se, fe = G.split("/"), le = 0; le < fe[L(2910)]; le++) {
      var we = fe[le];
      we && (se += d(M(we)), ue += L(905) + se);
    }
    return ue;
  }
  function I(F, q) {
    const H = o;
    return F == '""' ? q : (F + H(509) + q)[H(1840)](/([^\\])' \+ '/g, "$1");
  }
  function R(F) {
    return M(decodeURIComponent(F));
  }
  function O(F) {
    return encodeURIComponent(D(F));
  }
  function D(F) {
    return F.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  function M(F) {
    const q = o;
    return F[q(1840)](/~1/g, "/")[q(1840)](/~0/g, "~");
  }
  return Yx;
}
var et, ir;
function wn() {
  if (ir) return et;
  ir = 1;
  var o = Z0();
  et = x;
  function x(t) {
    o[K(1303)](t, this);
  }
  return et;
}
var xt = { exports: {} }, cr;
function dc() {
  const o = a;
  if (cr) return xt[o(982)];
  cr = 1;
  var x = xt[o(982)] = function(e, s, n) {
    const i = o;
    typeof s == i(2855) && (n = s, s = {}), n = s.cb || n;
    var c = typeof n == "function" ? n : n[i(2053)] || function() {
    }, d = n.post || function() {
    };
    t(s, c, d, e, "", e);
  };
  x.keywords = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[o(2701)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[o(388)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[o(1134)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, s, n, i, c, d, u, l, f, b) {
    const h = o;
    if (i && typeof i == h(2517) && !Array[h(2573)](i)) {
      s(i, c, d, u, l, f, b);
      for (var p in i) {
        var v = i[p];
        if (Array.isArray(v)) {
          if (p in x.arrayKeywords)
            for (var k = 0; k < v.length; k++) t(e, s, n, v[k], c + "/" + p + "/" + k, d, c, p, i, k);
        } else if (p in x[h(388)]) {
          if (v && typeof v == h(2517))
            for (var P in v) t(e, s, n, v[P], c + "/" + p + "/" + r(P), d, c, p, i, P);
        } else (p in x[h(931)] || e[h(507)] && !(p in x[h(1134)])) && t(e, s, n, v, c + "/" + p, d, c, p, i);
      }
      n(i, c, d, u, l, f, b);
    }
  }
  function r(e) {
    const s = o;
    return e[s(1840)](/~/g, "~0")[s(1840)](/\//g, "~1");
  }
  return xt.exports;
}
var tt, dr;
function fa() {
  const o = a;
  if (dr) return tt;
  dr = 1;
  var x = ic(), t = la(), r = Z0(), e = wn(), s = dc();
  tt = n, n[o(1651)] = P, n[o(1708)] = p, n[o(1998)] = N, n[o(1190)] = T, n[o(781)] = f, n[o(1346)] = i;
  function n(C, I, R) {
    const O = o;
    var D = this[O(442)][R];
    if (typeof D == "string")
      if (this._refs[D]) D = this[O(442)][D];
      else return n[O(1175)](this, C, I, D);
    if (D = D || this[O(2166)][R], D instanceof e) return f(D.schema, this[O(1797)][O(2702)]) ? D[O(1346)] : D[O(2033)] || this[O(2015)](D);
    var M = i.call(this, I, R), F, q, H;
    return M && (F = M[O(1346)], I = M[O(1794)], H = M[O(1620)]), F instanceof e ? q = F[O(2033)] || C[O(1175)](this, F[O(1346)], I, void 0, H) : F !== void 0 && (q = f(F, this[O(1797)][O(2702)]) ? F : C[O(1175)](this, F, I, void 0, H)), q;
  }
  function i(C, I) {
    const R = o;
    var O = x[R(1584)](I), D = v(O), M = p(this[R(2516)](C[R(1346)]));
    if (Object.keys(C[R(1346)])[R(2910)] === 0 || D !== M) {
      var F = P(D), q = this[R(442)][F];
      if (typeof q == R(1443)) return c.call(this, C, q, O);
      if (q instanceof e)
        q[R(2033)] || this._compile(q), C = q;
      else if (q = this[R(2166)][F], q instanceof e) {
        if (q[R(2033)] || this[R(2015)](q), F == P(I)) return { schema: q, root: C, baseId: M };
        C = q;
      } else return;
      if (!C[R(1346)]) return;
      M = p(this[R(2516)](C[R(1346)]));
    }
    return u.call(this, O, M, C.schema, C);
  }
  function c(C, I, R) {
    const O = o;
    var D = i.call(this, C, I);
    if (D) {
      var M = D[O(1346)], F = D[O(1620)];
      C = D.root;
      var q = this._getId(M);
      return q && (F = N(F, q)), u[O(1175)](this, R, F, M, C);
    }
  }
  var d = r.toHash(["properties", o(2364), o(1662), o(2012), o(902)]);
  function u(C, I, R, O) {
    const D = o;
    if (C[D(1783)] = C[D(1783)] || "", C[D(1783)][D(2527)](0, 1) == "/") {
      for (var M = C[D(1783)].split("/"), F = 1; F < M[D(2910)]; F++) {
        var q = M[F];
        if (q) {
          if (q = r[D(1664)](q), R = R[q], R === void 0) break;
          var H;
          if (!d[q] && (H = this[D(2516)](R), H && (I = N(I, H)), R[D(1753)])) {
            var L = N(I, R[D(1753)]), z = i[D(1175)](this, O, L);
            z && (R = z[D(1346)], O = z[D(1794)], I = z[D(1620)]);
          }
        }
      }
      if (R !== void 0 && R !== O.schema) return { schema: R, root: O, baseId: I };
    }
  }
  var l = r.toHash([o(506), "format", o(987), "maxLength", o(2694), o(1440), o(2067), "maxItems", o(2805), "maximum", o(2242), o(561), o(2570), o(2914), "enum"]);
  function f(C, I) {
    if (I === !1) return !1;
    if (I === void 0 || I === !0) return b(C);
    if (I) return h(C) <= I;
  }
  function b(C) {
    const I = o;
    var R;
    if (Array[I(2573)](C)) {
      for (var O = 0; O < C[I(2910)]; O++)
        if (R = C[O], typeof R == I(2517) && !b(R)) return !1;
    } else for (var D in C)
      if (D == I(1753) || (R = C[D], typeof R == "object" && !b(R))) return !1;
    return !0;
  }
  function h(C) {
    const I = o;
    var R = 0, O;
    if (Array.isArray(C)) {
      for (var D = 0; D < C[I(2910)]; D++)
        if (O = C[D], typeof O == "object" && (R += h(O)), R == 1 / 0) return 1 / 0;
    } else for (var M in C) {
      if (M == "$ref") return 1 / 0;
      if (l[M]) R++;
      else if (O = C[M], typeof O == I(2517) && (R += h(O) + 1), R == 1 / 0) return 1 / 0;
    }
    return R;
  }
  function p(C, I) {
    I !== !1 && (C = P(C));
    var R = x.parse(C);
    return v(R);
  }
  function v(C) {
    const I = o;
    return x[I(3065)](C)[I(1389)]("#")[0] + "#";
  }
  var k = /#\/?$/;
  function P(C) {
    return C ? C[o(1840)](k, "") : "";
  }
  function N(C, I) {
    const R = o;
    return I = P(I), x[R(510)](C, I);
  }
  function T(C) {
    var I = P(this._getId(C)), R = { "": I }, O = { "": p(I, !1) }, D = {}, M = this;
    return s(C, { allKeys: !0 }, function(F, q, H, L, z, G, se) {
      const re = K;
      if (q !== "") {
        var ue = M[re(2516)](F), fe = R[L], le = O[L] + "/" + z;
        if (se !== void 0 && (le += "/" + (typeof se == re(1730) ? se : r[re(800)](se))), typeof ue == "string") {
          ue = fe = P(fe ? x[re(510)](fe, ue) : ue);
          var we = M._refs[ue];
          if (typeof we == re(1443) && (we = M[re(442)][we]), we && we[re(1346)]) {
            if (!t(F, we.schema)) throw new Error(re(2663) + ue + '" resolves to more than one schema');
          } else if (ue != P(le))
            if (ue[0] == "#") {
              if (D[ue] && !t(F, D[ue])) throw new Error(re(2663) + ue + re(917));
              D[ue] = F;
            } else M[re(442)][ue] = le;
        }
        R[q] = fe, O[q] = le;
      }
    }), D;
  }
  return tt;
}
var at, ur;
function ha() {
  const o = a;
  if (ur) return at;
  ur = 1;
  var x = fa();
  at = { Validation: e(t), MissingRef: e(r) };
  function t(s) {
    const n = K;
    this[n(2732)] = "validation failed", this[n(2311)] = s, this[n(2854)] = this.validation = !0;
  }
  r[o(2732)] = function(s, n) {
    const i = o;
    return i(2126) + n + i(1181) + s;
  };
  function r(s, n, i) {
    const c = o;
    this[c(2732)] = i || r[c(2732)](s, n), this[c(1513)] = x.url(s, n), this[c(622)] = x.normalizeId(x[c(1708)](this[c(1513)]));
  }
  function e(s) {
    const n = o;
    return s.prototype = Object[n(1468)](Error[n(560)]), s[n(560)][n(2693)] = s, s;
  }
  return at;
}
var rt, lr;
function Sn() {
  return lr || (lr = 1, rt = function(o, x) {
    const t = K;
    x || (x = {}), typeof x === t(2855) && (x = { cmp: x });
    var r = typeof x[t(646)] === t(1964) ? x.cycles : !1, e = x[t(2158)] && /* @__PURE__ */ (function(n) {
      return function(i) {
        return function(c, d) {
          var u = { key: c, value: i[c] }, l = { key: d, value: i[d] };
          return n(u, l);
        };
      };
    })(x[t(2158)]), s = [];
    return (function n(i) {
      const c = t;
      if (i && i[c(1613)] && typeof i[c(1613)] === c(2855) && (i = i.toJSON()), i !== void 0) {
        if (typeof i == c(1730)) return isFinite(i) ? "" + i : c(2973);
        if (typeof i !== c(2517)) return JSON.stringify(i);
        var d, u;
        if (Array[c(2573)](i)) {
          for (u = "[", d = 0; d < i[c(2910)]; d++)
            d && (u += ","), u += n(i[d]) || c(2973);
          return u + "]";
        }
        if (i === null) return c(2973);
        if (s.indexOf(i) !== -1) {
          if (r) return JSON[c(1749)](c(2600));
          throw new TypeError(c(2083));
        }
        var l = s[c(816)](i) - 1, f = Object[c(548)](i)[c(2786)](e && e(i));
        for (u = "", d = 0; d < f[c(2910)]; d++) {
          var b = f[d], h = n(i[b]);
          h && (u && (u += ","), u += JSON.stringify(b) + ":" + h);
        }
        return s.splice(l, 1), "{" + u + "}";
      }
    })(o);
  }), rt;
}
var st, fr;
function kn() {
  return fr || (fr = 1, st = function(x, t, r) {
    const e = K;
    var s = "", n = x[e(1346)].$async === !0, i = x[e(2980)][e(1308)](x.schema, x[e(1757)].all, "$ref"), c = x.self[e(2516)](x[e(1346)]);
    if (x[e(2977)][e(1033)]) {
      var d = x[e(2980)][e(1010)](x[e(1346)], x[e(1757)].keywords);
      if (d) {
        var u = e(2301) + d;
        if (x[e(2977)][e(1033)] === "log") x[e(3053)][e(405)](u);
        else throw new Error(u);
      }
    }
    if (x.isTop && (s += e(850), n && (x[e(372)] = !0, s += "async "), s += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", c && (x[e(2977)][e(1593)] || x.opts.processCode) && (s += " " + (e(1363) + c + e(2815)) + " ")), typeof x[e(1346)] == "boolean" || !(i || x.schema[e(1753)])) {
      var t = e(2957), l = x[e(1332)], f = x[e(2551)], b = x.schema[t], h = x.schemaPath + x[e(2980)][e(1980)](t), p = x.errSchemaPath + "/" + t, I = !x.opts.allErrors, D, v = e(571) + (f || ""), C = e(1694) + l;
      if (x[e(1346)] === !1) {
        x[e(1407)] ? I = !0 : s += " var " + C + e(3055);
        var k = k || [];
        k[e(816)](s), s = "", x[e(1596)] !== !1 ? (s += e(1962) + (D || e(2957)) + "' , dataPath: (dataPath || '') + " + x[e(2731)] + e(1938) + x[e(2980)][e(1766)](p) + e(782), x[e(2977)][e(2953)] !== !1 && (s += " , message: 'boolean schema is false' "), x.opts[e(2168)] && (s += e(912) + x[e(2269)] + e(1275) + v + " "), s += e(1063)) : s += e(1577);
        var P = s;
        s = k[e(641)](), !x.compositeRule && I ? x.async ? s += e(2782) + P + "]); " : s += " validate.errors = [" + P + e(2530) : s += e(2131) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else x[e(1407)] ? n ? s += e(833) : s += e(2324) : s += e(2459) + C + e(811);
      return x[e(1407)] && (s += " }; return validate; "), s;
    }
    if (x.isTop) {
      var N = x[e(1407)], l = x[e(1332)] = 0, f = x[e(2551)] = 0, v = e(571);
      if (x[e(1374)] = x[e(510)][e(1708)](x.self._getId(x.root.schema)), x.baseId = x.baseId || x[e(1374)], delete x.isTop, x[e(1671)] = [""], x.schema[e(2889)] !== void 0 && x[e(2977)].useDefaults && x[e(2977)][e(2520)]) {
        var T = "default is ignored in the schema root";
        if (x[e(2977)][e(2520)] === e(2613)) x[e(3053)][e(405)](T);
        else throw new Error(T);
      }
      s += e(2495), s += e(2962), s += " if (rootData === undefined) rootData = data; ";
    } else {
      var l = x[e(1332)], f = x.dataLevel, v = e(571) + (f || "");
      if (c && (x[e(1620)] = x[e(510)].url(x[e(1620)], c)), n && !x[e(372)]) throw new Error("async schema in sync schema");
      s += e(2586) + l + e(2386);
    }
    var C = e(1694) + l, I = !x.opts[e(2722)], R = "", O = "", D, M = x.schema[e(506)], F = Array[e(2573)](M);
    if (M && x[e(2977)][e(2259)] && x.schema.nullable === !0 && (F ? M.indexOf(e(2973)) == -1 && (M = M.concat(e(2973))) : M != e(2973) && (M = [M, e(2973)], F = !0)), F && M.length == 1 && (M = M[0], F = !1), x[e(1346)][e(1753)] && i) {
      if (x[e(2977)][e(1745)] == e(1396)) throw new Error(e(1579) + x[e(376)] + e(803));
      x[e(2977)].extendRefs !== !0 && (i = !1, x[e(3053)].warn(e(1960) + x[e(376)] + '"'));
    }
    if (x[e(1346)][e(1081)] && x[e(2977)].$comment && (s += " " + x[e(1757)][e(2264)].$comment[e(3068)](x, e(1081))), M) {
      if (x.opts[e(1076)]) var q = x[e(2980)][e(1462)](x.opts.coerceTypes, M);
      var H = x[e(1757)][e(760)][M];
      if (q || F || H === !0 || H && !Se(H)) {
        var h = x.schemaPath + e(2226), p = x[e(376)] + "/type", h = x[e(2269)] + e(2226), p = x[e(376)] + e(2897), L = e(F ? 395 : 423);
        if (s += e(2865) + x.util[L](M, v, x[e(2977)][e(1111)], !0) + e(1109), q) {
          var z = "dataType" + l, G = e(1536) + l;
          s += e(2459) + z + e(1114) + v + "; var " + G + " = undefined; ", x[e(2977)][e(1076)] == "array" && (s += e(2865) + z + " == 'object' && Array.isArray(" + v + ") && " + v + e(1996) + v + e(1990) + v + e(1417) + z + e(1114) + v + "; if (" + x[e(2980)].checkDataType(x[e(1346)][e(506)], v, x[e(2977)].strictNumbers) + ") " + G + e(1990) + v + e(1728)), s += e(2865) + G + e(1668);
          var se = q;
          if (se)
            for (var re, ue = -1, fe = se[e(2910)] - 1; ue < fe; )
              re = se[ue += 1], re == e(1443) ? s += e(2446) + z + " == 'number' || " + z + e(695) + G + e(459) + v + e(2230) + v + e(397) + G + e(2437) : re == "number" || re == e(2421) ? (s += e(2446) + z + e(2451) + v + e(1347) + z + e(1976) + v + e(905) + v + " == +" + v + " ", re == e(2421) && (s += e(2563) + v + e(402)), s += e(829) + G + e(591) + v + "; ") : re == e(1964) ? s += e(2446) + v + e(1427) + v + e(1527) + v + e(397) + G + e(1460) + v + e(1410) + v + e(1655) + G + e(811) : re == "null" ? s += e(2446) + v + " === '' || " + v + e(1527) + v + e(1731) + G + e(2373) : x[e(2977)][e(1076)] == e(1517) && re == e(1517) && (s += e(2446) + z + " == 'string' || " + z + e(2282) + z + " == 'boolean' || " + v + e(2788) + G + " = [" + v + e(3037));
          s += " else {   ";
          var k = k || [];
          k.push(s), s = "", x[e(1596)] !== !1 ? (s += e(1962) + (D || e(506)) + e(733) + x[e(2731)] + e(1938) + x[e(2980)].toQuotedString(p) + e(2164), F ? s += "" + M[e(952)](",") : s += "" + M, s += e(2675), x.opts.messages !== !1 && (s += e(1913), F ? s += "" + M[e(952)](",") : s += "" + M, s += "' "), x[e(2977)][e(2168)] && (s += e(1888) + h + " , parentSchema: validate.schema" + x[e(2269)] + e(1275) + v + " "), s += e(1063)) : s += e(1577);
          var P = s;
          s = k[e(641)](), !x[e(865)] && I ? x[e(372)] ? s += e(2782) + P + e(2105) : s += e(1264) + P + e(2530) : s += e(2131) + P + e(2006), s += e(433) + G + e(2238);
          var le = f ? e(571) + (f - 1 || "") : "parentData", we = f ? x[e(1671)][f] : e(705);
          s += " " + v + e(1990) + G + "; ", !f && (s += e(2e3) + le + e(1574)), s += " " + le + "[" + we + "] = " + G + "; } ";
        } else {
          var k = k || [];
          k[e(816)](s), s = "", x.createErrors !== !1 ? (s += e(1962) + (D || e(506)) + "' , dataPath: (dataPath || '') + " + x[e(2731)] + e(1938) + x[e(2980)].toQuotedString(p) + " , params: { type: '", F ? s += "" + M[e(952)](",") : s += "" + M, s += "' } ", x[e(2977)][e(2953)] !== !1 && (s += e(1913), F ? s += "" + M[e(952)](",") : s += "" + M, s += "' "), x[e(2977)][e(2168)] && (s += e(1888) + h + e(2439) + x[e(2269)] + e(1275) + v + " "), s += " } ") : s += e(1577);
          var P = s;
          s = k[e(641)](), !x.compositeRule && I ? x[e(372)] ? s += e(2782) + P + "]); " : s += e(1264) + P + e(2530) : s += " var err = " + P + e(2006);
        }
        s += e(1063);
      }
    }
    if (x[e(1346)][e(1753)] && !i) s += " " + x[e(1757)].all[e(1753)][e(3068)](x, "$ref") + " ", I && (s += " } if (errors === ", N ? s += "0" : s += "errs_" + l, s += e(1109), O += "}");
    else {
      var Ce = x.RULES;
      if (Ce) {
        for (var H, Me = -1, Re = Ce.length - 1; Me < Re; )
          if (H = Ce[Me += 1], Se(H)) {
            if (H[e(506)] && (s += e(2865) + x.util[e(423)](H[e(506)], v, x[e(2977)][e(1111)]) + e(1109)), x[e(2977)][e(373)]) {
              if (H[e(506)] == e(2517) && x.schema[e(1684)]) {
                var b = x.schema[e(1684)], Je = Object[e(548)](b), _ = Je;
                if (_)
                  for (var A, j = -1, J = _.length - 1; j < J; ) {
                    A = _[j += 1];
                    var Q = b[A];
                    if (Q[e(2889)] !== void 0) {
                      var V = v + x.util[e(1980)](A);
                      if (x[e(865)]) {
                        if (x[e(2977)][e(2520)]) {
                          var T = "default is ignored for: " + V;
                          if (x[e(2977)][e(2520)] === e(2613)) x[e(3053)][e(405)](T);
                          else throw new Error(T);
                        }
                      } else s += e(2865) + V + e(2146), x[e(2977)][e(373)] == e(2748) && (s += " || " + V + e(2485) + V + e(2654)), s += e(2018) + V + e(1990), x.opts[e(373)] == e(762) ? s += " " + x[e(996)](Q[e(2889)]) + " " : s += " " + JSON.stringify(Q[e(2889)]) + " ", s += "; ";
                    }
                  }
              } else if (H[e(506)] == e(1517) && Array[e(2573)](x[e(1346)][e(1141)])) {
                var Y = x.schema.items;
                if (Y) {
                  for (var Q, ue = -1, ce = Y[e(2910)] - 1; ue < ce; )
                    if (Q = Y[ue += 1], Q[e(2889)] !== void 0) {
                      var V = v + "[" + ue + "]";
                      if (x.compositeRule) {
                        if (x[e(2977)][e(2520)]) {
                          var T = e(1849) + V;
                          if (x[e(2977)][e(2520)] === e(2613)) x[e(3053)][e(405)](T);
                          else throw new Error(T);
                        }
                      } else s += e(2865) + V + e(2146), x[e(2977)][e(373)] == e(2748) && (s += e(1073) + V + e(2485) + V + e(2654)), s += e(2018) + V + " = ", x[e(2977)].useDefaults == e(762) ? s += " " + x.useDefault(Q[e(2889)]) + " " : s += " " + JSON[e(1749)](Q[e(2889)]) + " ", s += "; ";
                    }
                }
              }
            }
            var ie = H[e(2870)];
            if (ie) {
              for (var xe, Le = -1, Ae = ie[e(2910)] - 1; Le < Ae; )
                if (xe = ie[Le += 1], Ge(xe)) {
                  var He = xe[e(3068)](x, xe[e(1379)], H[e(506)]);
                  He && (s += " " + He + " ", I && (R += "}"));
                }
            }
            if (I && (s += " " + R + " ", R = ""), H.type && (s += e(1063), M && M === H.type && !q)) {
              s += e(2293);
              var h = x[e(2269)] + e(2226), p = x[e(376)] + e(2897), k = k || [];
              k.push(s), s = "", x[e(1596)] !== !1 ? (s += " { keyword: '" + (D || "type") + e(733) + x[e(2731)] + e(1938) + x[e(2980)].toQuotedString(p) + e(2164), F ? s += "" + M[e(952)](",") : s += "" + M, s += "' } ", x[e(2977)].messages !== !1 && (s += e(1913), F ? s += "" + M[e(952)](",") : s += "" + M, s += "' "), x.opts[e(2168)] && (s += e(1888) + h + " , parentSchema: validate.schema" + x[e(2269)] + " , data: " + v + " "), s += e(1063)) : s += e(1577);
              var P = s;
              s = k[e(641)](), !x[e(865)] && I ? x.async ? s += e(2782) + P + e(2105) : s += e(1264) + P + e(2530) : s += e(2131) + P + e(2006), s += e(1063);
            }
            I && (s += " if (errors === ", N ? s += "0" : s += e(2836) + l, s += ") { ", O += "}");
          }
      }
    }
    I && (s += " " + O + " "), N ? (n ? (s += e(2361), s += " else throw new ValidationError(vErrors); ") : (s += e(2860), s += e(1693)), s += e(3014)) : s += e(2459) + C + " = errors === errs_" + l + ";";
    function Se(Qe) {
      for (var ze = Qe[e(2870)], Ye = 0; Ye < ze.length; Ye++) if (Ge(ze[Ye])) return !0;
    }
    function Ge(Qe) {
      const _e = e;
      return x[_e(1346)][Qe.keyword] !== void 0 || Qe[_e(1115)] && n0(Qe);
    }
    function n0(Qe) {
      const _e = e;
      for (var ze = Qe[_e(1115)], Ye = 0; Ye < ze[_e(2910)]; Ye++) if (x[_e(1346)][ze[Ye]] !== void 0) return !0;
    }
    return s;
  }), st;
}
var nt, hr;
function uc() {
  const o = a;
  if (hr) return nt;
  hr = 1;
  var x = fa(), t = Z0(), r = ha(), e = Sn(), s = kn(), n = t[o(2936)], i = la(), c = r[o(403)];
  nt = d;
  function d(P, N, T, C) {
    const I = o;
    var R = this, O = this[I(1797)], D = [void 0], M = {}, F = [], q = {}, H = [], L = {}, z = [];
    N = N || { schema: P, refVal: D, refs: M };
    var G = u.call(this, P, N, C), se = this[I(730)][G.index];
    if (G.compiling) return se[I(1591)] = we;
    var re = this[I(2243)], ue = this[I(1757)];
    try {
      var fe = Ce(P, N, T, C);
      se[I(2033)] = fe;
      var le = se[I(1591)];
      return le && (le[I(1346)] = fe[I(1346)], le[I(2311)] = null, le[I(737)] = fe[I(737)], le[I(1257)] = fe[I(1257)], le[I(1794)] = fe.root, le[I(1070)] = fe.$async, O.sourceCode && (le[I(862)] = fe[I(862)])), fe;
    } finally {
      l[I(1175)](this, P, N, C);
    }
    function we() {
      const V = I;
      var Y = se.validate, ce = Y[V(1784)](this, arguments);
      return we[V(2311)] = Y[V(2311)], ce;
    }
    function Ce(V, Y, ce, ie) {
      const xe = I;
      var Le = !Y || Y && Y.schema == V;
      if (Y[xe(1346)] != N[xe(1346)]) return d[xe(1175)](R, V, Y, ce, ie);
      var Ae = V[xe(1070)] === !0, He = s({ isTop: !0, schema: V, isRoot: Le, baseId: ie, root: Y, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: r.MissingRef, RULES: ue, validate: s, util: t, resolve: x, resolveRef: Me, usePattern: j, useDefault: J, useCustomRule: Q, opts: O, formats: re, logger: R[xe(3053)], self: R });
      He = k(D, p) + k(F, b) + k(H, h) + k(z, v) + He, O[xe(1685)] && (He = O[xe(1685)](He, V));
      var Se;
      try {
        var Ge = new Function(xe(1532), xe(1757), xe(1408), xe(1794), xe(1257), "defaults", xe(836), "equal", xe(2936), xe(1394), He);
        Se = Ge(R, ue, re, N, D, H, z, i, n, c), D[0] = Se;
      } catch (n0) {
        throw R.logger[xe(1493)](xe(960), He), n0;
      }
      return Se[xe(1346)] = V, Se[xe(2311)] = null, Se[xe(737)] = M, Se[xe(1257)] = D, Se[xe(1794)] = Le ? Se : Y, Ae && (Se[xe(1070)] = !0), O[xe(1593)] === !0 && (Se[xe(862)] = { code: He, patterns: F, defaults: H }), Se;
    }
    function Me(V, Y, ce) {
      const ie = I;
      Y = x.url(V, Y);
      var xe = M[Y], Le, Ae;
      if (xe !== void 0) return Le = D[xe], Ae = ie(2924) + xe + "]", A(Le, Ae);
      if (!ce && N[ie(737)]) {
        var He = N[ie(737)][Y];
        if (He !== void 0) return Le = N.refVal[He], Ae = Re(Y, Le), A(Le, Ae);
      }
      Ae = Re(Y);
      var Se = x[ie(1175)](R, Ce, N, Y);
      if (Se === void 0) {
        var Ge = T && T[Y];
        Ge && (Se = x[ie(781)](Ge, O[ie(2702)]) ? Ge : d[ie(1175)](R, Ge, N, T, V));
      }
      if (Se === void 0) Je(Y);
      else return _(Y, Se), A(Se, Ae);
    }
    function Re(V, Y) {
      const ce = I;
      var ie = D.length;
      return D[ie] = Y, M[V] = ie, ce(1257) + ie;
    }
    function Je(V) {
      delete M[V];
    }
    function _(V, Y) {
      var ce = M[V];
      D[ce] = Y;
    }
    function A(V, Y) {
      const ce = I;
      return typeof V == ce(2517) || typeof V == ce(1964) ? { code: Y, schema: V, inline: !0 } : { code: Y, $async: V && !!V.$async };
    }
    function j(V) {
      const Y = I;
      var ce = q[V];
      return ce === void 0 && (ce = q[V] = F[Y(2910)], F[ce] = V), "pattern" + ce;
    }
    function J(V) {
      const Y = I;
      switch (typeof V) {
        case Y(1964):
        case Y(1730):
          return "" + V;
        case Y(1443):
          return t[Y(1766)](V);
        case "object":
          if (V === null) return Y(2973);
          var ce = e(V), ie = L[ce];
          return ie === void 0 && (ie = L[ce] = H.length, H[ie] = V), Y(2889) + ie;
      }
    }
    function Q(V, Y, ce, ie) {
      const xe = I;
      if (R._opts.validateSchema !== !1) {
        var Le = V[xe(1118)].dependencies;
        if (Le && !Le[xe(1404)](function(Ye) {
          const N0 = xe;
          return Object[N0(560)][N0(938)][N0(1175)](ce, Ye);
        })) throw new Error(xe(838) + Le[xe(952)](","));
        var Ae = V[xe(1118)].validateSchema;
        if (Ae) {
          var He = Ae(Y);
          if (!He) {
            var Se = xe(1585) + R[xe(2154)](Ae[xe(2311)]);
            if (R[xe(1797)][xe(1857)] == xe(2613)) R.logger[xe(1493)](Se);
            else throw new Error(Se);
          }
        }
      }
      var Ge = V[xe(1118)][xe(1494)], n0 = V.definition[xe(1738)], Qe = V[xe(1118)].macro, _e;
      if (Ge) _e = Ge.call(R, Y, ce, ie);
      else if (Qe)
        _e = Qe.call(R, Y, ce, ie), O[xe(1857)] !== !1 && R[xe(1857)](_e, !0);
      else if (n0) _e = n0[xe(1175)](R, ie, V[xe(1379)], Y, ce);
      else if (_e = V.definition[xe(2033)], !_e) return;
      if (_e === void 0) throw new Error(xe(2070) + V.keyword + '"failed to compile');
      var ze = z[xe(2910)];
      return z[ze] = _e, { code: xe(2905) + ze, validate: _e };
    }
  }
  function u(P, N, T) {
    const C = o;
    var I = f[C(1175)](this, P, N, T);
    return I >= 0 ? { index: I, compiling: !0 } : (I = this[C(730)][C(2910)], this[C(730)][I] = { schema: P, root: N, baseId: T }, { index: I, compiling: !1 });
  }
  function l(P, N, T) {
    const C = o;
    var I = f[C(1175)](this, P, N, T);
    I >= 0 && this[C(730)][C(1571)](I, 1);
  }
  function f(P, N, T) {
    const C = o;
    for (var I = 0; I < this[C(730)][C(2910)]; I++) {
      var R = this._compilations[I];
      if (R[C(1346)] == P && R[C(1794)] == N && R[C(1620)] == T) return I;
    }
    return -1;
  }
  function b(P, N) {
    const T = o;
    return T(1200) + P + T(937) + t.toQuotedString(N[P]) + ");";
  }
  function h(P) {
    const N = o;
    return N(894) + P + N(511) + P + "];";
  }
  function p(P, N) {
    const T = o;
    return N[P] === void 0 ? "" : T(1545) + P + " = refVal[" + P + "];";
  }
  function v(P) {
    return "var customRule" + P + " = customRules[" + P + "];";
  }
  function k(P, N) {
    if (!P[o(2910)]) return "";
    for (var C = "", I = 0; I < P.length; I++) C += N(I, P);
    return C;
  }
  return nt;
}
var ot = { exports: {} }, pr;
function lc() {
  const o = a;
  if (pr) return ot[o(982)];
  pr = 1;
  var x = ot[o(982)] = function() {
    const r = o;
    this[r(2952)] = {};
  };
  return x[o(560)].put = function(r, e) {
    const s = o;
    this[s(2952)][r] = e;
  }, x[o(560)][o(2620)] = function(r) {
    return this[o(2952)][r];
  }, x.prototype[o(1558)] = function(r) {
    const e = o;
    delete this[e(2952)][r];
  }, x[o(560)][o(2149)] = function() {
    this._cache = {};
  }, ot[o(982)];
}
var it, mr;
function fc() {
  const o = a;
  if (mr) return it;
  mr = 1;
  var x = Z0(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, r = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, s = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, i = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, d = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, u = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, l = /^(?:\/(?:[^~/]|~0|~1)*)*$/, f = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, b = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  it = h;
  function h(O) {
    const D = K;
    return O = O == D(855) ? "full" : D(1054), x[D(1303)](h[O]);
  }
  h[o(1054)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: d, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: R, uuid: u, "json-pointer": l, "json-pointer-uri-fragment": f, "relative-json-pointer": b }, h[o(855)] = { date: v, time: k, "date-time": N, uri: C, "uri-reference": i, "uri-template": c, url: d, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: R, uuid: u, "json-pointer": l, "json-pointer-uri-fragment": f, "relative-json-pointer": b };
  function p(O) {
    return O % 4 === 0 && (O % 100 !== 0 || O % 400 === 0);
  }
  function v(O) {
    var M = O[o(742)](t);
    if (!M) return !1;
    var F = +M[1], q = +M[2], H = +M[3];
    return q >= 1 && q <= 12 && H >= 1 && H <= (q == 2 && p(F) ? 29 : r[q]);
  }
  function k(O, D) {
    var F = O[o(742)](e);
    if (!F) return !1;
    var q = F[1], H = F[2], L = F[3], z = F[5];
    return (q <= 23 && H <= 59 && L <= 59 || q == 23 && H == 59 && L == 60) && (!D || z);
  }
  var P = /t|\s/i;
  function N(O) {
    var M = O[o(1389)](P);
    return M.length == 2 && v(M[0]) && k(M[1], !0);
  }
  var T = /\/|:/;
  function C(O) {
    const D = o;
    return T[D(2266)](O) && n[D(2266)](O);
  }
  var I = /[^\\]\\Z/;
  function R(O) {
    if (I.test(O)) return !1;
    try {
      return new RegExp(O), !0;
    } catch {
      return !1;
    }
  }
  return it;
}
var ct, br;
function hc() {
  return br || (br = 1, ct = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1332)], i = x[e(2551)], c = x[e(1346)][t], d = x[e(376)] + "/" + t, u = !x[e(2977)][e(2722)], l = e(571) + (i || ""), f = e(1694) + n, b, h;
    if (c == "#" || c == "#/") x[e(1135)] ? (b = x[e(372)], h = "validate") : (b = x[e(1794)][e(1346)][e(1070)] === !0, h = e(1221));
    else {
      var p = x[e(2372)](x[e(1620)], c, x[e(1135)]);
      if (p === void 0) {
        var v = x[e(966)][e(2732)](x[e(1620)], c);
        if (x[e(2977)].missingRefs == e(1396)) {
          x.logger.error(v);
          var k = k || [];
          k[e(816)](s), s = "", x.createErrors !== !1 ? (s += e(1962) + "$ref" + e(733) + x[e(2731)] + e(1938) + x[e(2980)].toQuotedString(d) + e(456) + x[e(2980)].escapeQuotes(c) + "' } ", x[e(2977)][e(2953)] !== !1 && (s += " , message: 'can\\'t resolve reference " + x[e(2980)][e(1825)](c) + "' "), x[e(2977)][e(2168)] && (s += e(2916) + x[e(2980)][e(1766)](c) + e(2439) + x[e(2269)] + e(1275) + l + " "), s += e(1063)) : s += e(1577);
          var P = s;
          s = k[e(641)](), !x[e(865)] && u ? x.async ? s += e(2782) + P + "]); " : s += e(1264) + P + e(2530) : s += e(2131) + P + e(2006), u && (s += e(876));
        } else if (x[e(2977)].missingRefs == "ignore") x[e(3053)].warn(v), u && (s += e(1954));
        else throw new x[e(966)](x.baseId, c, v);
      } else if (p[e(1738)]) {
        var N = x.util.copy(x);
        N[e(1332)]++;
        var T = e(1694) + N[e(1332)];
        N.schema = p[e(1346)], N[e(2269)] = "", N.errSchemaPath = c;
        var C = x[e(2033)](N)[e(1840)](/validate\.schema/g, p[e(3068)]);
        s += " " + C + " ", u && (s += e(2865) + T + e(1109));
      } else b = p[e(1070)] === !0 || x[e(372)] && p[e(1070)] !== !1, h = p[e(3068)];
    }
    if (h) {
      var k = k || [];
      k[e(816)](s), s = "", x.opts[e(2196)] ? s += " " + h + e(870) : s += " " + h + "( ", s += " " + l + e(2767), x[e(2731)] != '""' && (s += " + " + x[e(2731)]);
      var I = i ? e(571) + (i - 1 || "") : "parentData", R = i ? x[e(1671)][i] : e(705);
      s += e(1321) + I + e(1321) + R + e(2636);
      var O = s;
      if (s = k[e(641)](), b) {
        if (!x.async) throw new Error(e(1055));
        u && (s += e(2459) + f + "; "), s += e(2224) + O + "; ", u && (s += " " + f + " = true; "), s += e(1080), u && (s += " " + f + " = false; "), s += e(1063), u && (s += e(2865) + f + ") { ");
      } else s += e(1478) + O + e(1451) + h + e(2183) + h + e(2493), u && (s += e(2293));
    }
    return s;
  }), ct;
}
var dt, gr;
function pc() {
  return gr || (gr = 1, dt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.schema[t], i = x.schemaPath + x[e(2980)].getProperty(t), c = x.errSchemaPath + "/" + t, d = !x[e(2977)][e(2722)], u = x[e(2980)][e(1303)](x), l = "";
    u[e(1332)]++;
    var f = e(1694) + u[e(1332)], b = u[e(1620)], h = !0, p = n;
    if (p)
      for (var v, k = -1, P = p[e(2910)] - 1; k < P; )
        v = p[k += 1], (x.opts[e(1033)] ? typeof v == e(2517) && Object[e(548)](v)[e(2910)] > 0 || v === !1 : x[e(2980)][e(2565)](v, x[e(1757)][e(2264)])) && (h = !1, u.schema = v, u[e(2269)] = i + "[" + k + "]", u[e(376)] = c + "/" + k, s += "  " + x[e(2033)](u) + " ", u.baseId = b, d && (s += e(2865) + f + ") { ", l += "}"));
    return d && (h ? s += e(1954) : s += " " + l.slice(0, -1) + " "), s;
  }), dt;
}
var ut, yr;
function mc() {
  return yr || (yr = 1, ut = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x.dataLevel, c = x.schema[t], d = x.schemaPath + x[e(2980)][e(1980)](t), u = x[e(376)] + "/" + t, l = !x[e(2977)][e(2722)], f = e(571) + (i || ""), b = e(1694) + n, h = e(2037) + n, p = x[e(2980)][e(1303)](x), v = "";
    p.level++;
    var k = e(1694) + p.level, P = c[e(1404)](function(D) {
      const M = e;
      return x[M(2977)][M(1033)] ? typeof D == M(2517) && Object.keys(D)[M(2910)] > 0 || D === !1 : x[M(2980)][M(2565)](D, x[M(1757)][M(2264)]);
    });
    if (P) {
      var N = p[e(1620)];
      s += e(2459) + h + e(2438) + b + e(2119);
      var T = x[e(865)];
      x[e(865)] = p[e(865)] = !0;
      var C = c;
      if (C)
        for (var I, R = -1, O = C[e(2910)] - 1; R < O; )
          I = C[R += 1], p.schema = I, p[e(2269)] = d + "[" + R + "]", p[e(376)] = u + "/" + R, s += "  " + x[e(2033)](p) + " ", p[e(1620)] = N, s += " " + b + " = " + b + e(1073) + k + "; if (!" + b + e(1109), v += "}";
      x.compositeRule = p[e(865)] = T, s += " " + v + e(1478) + b + e(2969), x[e(1596)] !== !1 ? (s += e(1962) + e(2915) + e(733) + x[e(2731)] + e(1938) + x[e(2980)].toQuotedString(u) + e(782), x[e(2977)][e(2953)] !== !1 && (s += " , message: 'should match some schema in anyOf' "), x[e(2977)][e(2168)] && (s += e(1888) + d + " , parentSchema: validate.schema" + x.schemaPath + e(1275) + f + " "), s += e(1063)) : s += e(1577), s += e(2006), !x[e(865)] && l && (x[e(372)] ? s += e(1755) : s += " validate.errors = vErrors; return false; "), s += e(806) + h + e(2208) + h + e(2056) + h + "; else vErrors = null; } ", x[e(2977)][e(2722)] && (s += e(1063));
    } else l && (s += e(1954));
    return s;
  }), ut;
}
var lt, vr;
function bc() {
  return vr || (vr = 1, lt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1346)][t], i = x[e(376)] + "/" + t;
    x[e(2977)][e(2722)];
    var c = x[e(2980)][e(1766)](n);
    return x[e(2977)][e(1081)] === !0 ? s += " console.log(" + c + ");" : typeof x.opts[e(1081)] == e(2855) && (s += e(449) + c + ", " + x[e(2980)][e(1766)](i) + e(2233)), s;
  }), lt;
}
var ft, wr;
function gc() {
  return wr || (wr = 1, ft = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1332)], i = x.dataLevel, c = x[e(1346)][t], d = x[e(2269)] + x[e(2980)].getProperty(t), u = x.errSchemaPath + "/" + t, l = !x[e(2977)][e(2722)], f = e(571) + (i || ""), b = "valid" + n, h = x[e(2977)][e(2073)] && c && c.$data;
    h && (s += e(494) + n + e(1990) + x[e(2980)][e(568)](c[e(2073)], i, x[e(1671)]) + "; "), !h && (s += e(494) + n + e(2997) + d + ";"), s += e(2718) + b + " = equal(" + f + ", schema" + n + "); if (!" + b + e(1163);
    var p = p || [];
    p[e(816)](s), s = "", x[e(1596)] !== !1 ? (s += " { keyword: 'const" + e(733) + x.errorPath + e(1938) + x[e(2980)][e(1766)](u) + e(1360) + n + e(1063), x[e(2977)].messages !== !1 && (s += e(2807)), x[e(2977)].verbose && (s += e(1888) + d + e(2439) + x[e(2269)] + e(1275) + f + " "), s += e(1063)) : s += " {} ";
    var v = s;
    return s = p[e(641)](), !x[e(865)] && l ? x[e(372)] ? s += " throw new ValidationError([" + v + "]); " : s += e(1264) + v + e(2530) : s += e(2131) + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " }", l && (s += e(2293)), s;
  }), ft;
}
var ht, Sr;
function yc() {
  return Sr || (Sr = 1, ht = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1332)], i = x.dataLevel, c = x[e(1346)][t], d = x[e(2269)] + x[e(2980)][e(1980)](t), u = x[e(376)] + "/" + t, l = !x[e(2977)][e(2722)], f = e(571) + (i || ""), b = "valid" + n, h = e(2037) + n, p = x[e(2980)].copy(x), v = "";
    p[e(1332)]++;
    var k = e(1694) + p.level, P = "i" + n, N = p.dataLevel = x.dataLevel + 1, T = e(571) + N, C = x.baseId, I = x[e(2977)][e(1033)] ? typeof c == e(2517) && Object[e(548)](c)[e(2910)] > 0 || c === !1 : x[e(2980)].schemaHasRules(c, x.RULES.all);
    if (s += "var " + h + e(1291) + b + ";", I) {
      var R = x.compositeRule;
      x[e(865)] = p[e(865)] = !0, p[e(1346)] = c, p[e(2269)] = d, p[e(376)] = u, s += e(2459) + k + e(2674) + P + e(1243) + P + e(813) + f + e(859) + P + e(1836), p[e(2731)] = x[e(2980)][e(2607)](x[e(2731)], P, x[e(2977)][e(1397)], !0);
      var O = f + "[" + P + "]";
      p.dataPathArr[N] = P;
      var D = x[e(2033)](p);
      p[e(1620)] = C, x[e(2980)][e(2199)](D, T) < 2 ? s += " " + x[e(2980)].varReplace(D, T, O) + " " : s += " var " + T + e(1990) + O + "; " + D + " ", s += e(2865) + k + ") break; }  ", x[e(865)] = p.compositeRule = R, s += " " + v + " if (!" + k + e(1680);
    } else s += " if (" + f + e(1715);
    var M = M || [];
    M[e(816)](s), s = "", x[e(1596)] !== !1 ? (s += " { keyword: 'contains" + e(733) + x.errorPath + e(1938) + x.util[e(1766)](u) + " , params: {} ", x[e(2977)][e(2953)] !== !1 && (s += e(684)), x[e(2977)][e(2168)] && (s += e(1888) + d + e(2439) + x[e(2269)] + " , data: " + f + " "), s += e(1063)) : s += e(1577);
    var F = s;
    return s = M[e(641)](), !x.compositeRule && l ? x[e(372)] ? s += e(2782) + F + e(2105) : s += e(1264) + F + e(2530) : s += e(2131) + F + e(2006), s += e(2584), I && (s += "  errors = " + h + e(2208) + h + e(2056) + h + e(2719)), x.opts[e(2722)] && (s += e(1063)), s;
  }), ht;
}
var pt, kr;
function vc() {
  return kr || (kr = 1, pt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(2551)], c = x[e(1346)][t], d = x[e(2269)] + x[e(2980)][e(1980)](t), u = x[e(376)] + "/" + t, l = !x[e(2977)][e(2722)], f = e(571) + (i || ""), b = e(2037) + n, h = x.util[e(1303)](x), p = "";
    h[e(1332)]++;
    var v = e(1694) + h.level, k = {}, P = {}, N = x.opts.ownProperties;
    for (R in c)
      if (R != e(888)) {
        var T = c[R], C = Array[e(2573)](T) ? P : k;
        C[R] = T;
      }
    s += e(2718) + b + e(2386);
    var I = x[e(2731)];
    s += e(2321) + n + ";";
    for (var R in P)
      if (C = P[R], C[e(2910)]) {
        if (s += " if ( " + f + x[e(2980)][e(1980)](R) + e(2522), N && (s += " && Object.prototype.hasOwnProperty.call(" + f + e(1997) + x[e(2980)].escapeQuotes(R) + e(1411)), l) {
          s += e(997);
          var O = C;
          if (O)
            for (var D, M = -1, F = O[e(2910)] - 1; M < F; ) {
              D = O[M += 1], M && (s += e(1073));
              var q = x[e(2980)][e(1980)](D), H = f + q;
              s += e(711) + H + e(2146), N && (s += e(2405) + f + e(1997) + x.util.escapeQuotes(D) + e(1411)), s += e(3012) + n + e(1990) + x[e(2980)].toQuotedString(x[e(2977)].jsonPointers ? D : q) + e(640);
            }
          s += e(883);
          var L = "missing" + n, z = e(375) + L + e(3021);
          x[e(2977)]._errorDataPathProperty && (x[e(2731)] = x[e(2977)][e(1397)] ? x.util[e(2607)](I, L, !0) : I + " + " + L);
          var G = G || [];
          G[e(816)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + e(2012) + "' , dataPath: (dataPath || '') + " + x[e(2731)] + e(1938) + x[e(2980)][e(1766)](u) + e(579) + x[e(2980)][e(1825)](R) + e(621) + z + e(2569) + C.length + e(2511) + x[e(2980)].escapeQuotes(C.length == 1 ? C[0] : C[e(952)](", ")) + e(2675), x[e(2977)].messages !== !1 && (s += e(2348), C.length == 1 ? s += e(2776) + x[e(2980)].escapeQuotes(C[0]) : s += e(904) + x.util[e(1825)](C[e(952)](", ")), s += " when property " + x[e(2980)][e(1825)](R) + e(2060)), x.opts[e(2168)] && (s += e(1888) + d + " , parentSchema: validate.schema" + x[e(2269)] + e(1275) + f + " "), s += " } ") : s += e(1577);
          var se = s;
          s = G[e(641)](), !x[e(865)] && l ? x[e(372)] ? s += " throw new ValidationError([" + se + e(2105) : s += e(1264) + se + e(2530) : s += e(2131) + se + e(2006);
        } else {
          s += " ) { ";
          var re = C;
          if (re)
            for (var D, ue = -1, fe = re[e(2910)] - 1; ue < fe; ) {
              D = re[ue += 1];
              var q = x[e(2980)][e(1980)](D), z = x[e(2980)][e(1825)](D), H = f + q;
              x[e(2977)]._errorDataPathProperty && (x[e(2731)] = x[e(2980)][e(1737)](I, D, x[e(2977)][e(1397)])), s += e(1597) + H + e(2146), N && (s += e(2405) + f + e(1997) + x.util[e(1825)](D) + e(1411)), s += e(1354), x[e(1596)] !== !1 ? (s += e(1962) + e(2012) + e(733) + x[e(2731)] + e(1938) + x[e(2980)].toQuotedString(u) + e(579) + x.util[e(1825)](R) + "', missingProperty: '" + z + e(2569) + C.length + e(2511) + x[e(2980)][e(1825)](C.length == 1 ? C[0] : C[e(952)](", ")) + e(2675), x[e(2977)][e(2953)] !== !1 && (s += " , message: 'should have ", C[e(2910)] == 1 ? s += e(2776) + x[e(2980)][e(1825)](C[0]) : s += e(904) + x.util[e(1825)](C[e(952)](", ")), s += e(3066) + x.util[e(1825)](R) + e(2060)), x[e(2977)][e(2168)] && (s += e(1888) + d + e(2439) + x[e(2269)] + " , data: " + f + " "), s += e(1063)) : s += e(1577), s += e(1302);
            }
        }
        s += e(1889), l && (p += "}", s += e(2293));
      }
    x.errorPath = I;
    var le = h[e(1620)];
    for (var R in k) {
      var T = k[R];
      (x[e(2977)][e(1033)] ? typeof T == "object" && Object[e(548)](T)[e(2910)] > 0 || T === !1 : x[e(2980)].schemaHasRules(T, x[e(1757)][e(2264)])) && (s += " " + v + e(1949) + f + x[e(2980)][e(1980)](R) + e(2522), N && (s += " && Object.prototype.hasOwnProperty.call(" + f + ", '" + x[e(2980)][e(1825)](R) + e(1411)), s += e(1109), h[e(1346)] = T, h.schemaPath = d + x[e(2980)][e(1980)](R), h.errSchemaPath = u + "/" + x[e(2980)][e(800)](R), s += "  " + x.validate(h) + " ", h[e(1620)] = le, s += e(2355), l && (s += " if (" + v + e(1109), p += "}"));
    }
    return l && (s += e(1699) + p + " if (" + b + e(1957)), s;
  }), pt;
}
var mt, Pr;
function wc() {
  return Pr || (Pr = 1, mt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(2551)], c = x[e(1346)][t], d = x.schemaPath + x.util[e(1980)](t), u = x[e(376)] + "/" + t, l = !x.opts[e(2722)], f = e(571) + (i || ""), b = e(1694) + n, h = x[e(2977)][e(2073)] && c && c[e(2073)];
    h && (s += e(494) + n + " = " + x.util[e(568)](c[e(2073)], i, x[e(1671)]) + "; ");
    var p = "i" + n, v = "schema" + n;
    !h && (s += e(2459) + v + e(2997) + d + ";"), s += e(2718) + b + ";", h && (s += e(1089) + n + " === undefined) " + b + e(1612) + n + ")) " + b + " = false; else {"), s += "" + b + e(2375) + p + e(2490) + p + "<" + v + e(859) + p + e(2703) + f + ", " + v + "[" + p + e(1529) + b + e(2688), h && (s += e(471)), s += e(1478) + b + e(1163);
    var k = k || [];
    k[e(816)](s), s = "", x[e(1596)] !== !1 ? (s += e(1962) + "enum' , dataPath: (dataPath || '') + " + x[e(2731)] + " , schemaPath: " + x[e(2980)][e(1766)](u) + e(1326) + n + e(1063), x[e(2977)][e(2953)] !== !1 && (s += e(2943)), x[e(2977)][e(2168)] && (s += e(1888) + d + e(2439) + x.schemaPath + " , data: " + f + " "), s += e(1063)) : s += e(1577);
    var P = s;
    return s = k.pop(), !x[e(865)] && l ? x[e(372)] ? s += " throw new ValidationError([" + P + e(2105) : s += e(1264) + P + e(2530) : s += e(2131) + P + e(2006), s += " }", l && (s += e(2293)), s;
  }), mt;
}
var bt, Ir;
function Sc() {
  return Ir || (Ir = 1, bt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1332)], i = x[e(2551)], c = x[e(1346)][t], d = x[e(2269)] + x[e(2980)][e(1980)](t), u = x[e(376)] + "/" + t, l = !x.opts[e(2722)], f = e(571) + (i || "");
    if (x[e(2977)][e(1918)] === !1) return l && (s += e(1954)), s;
    var b = x[e(2977)][e(2073)] && c && c.$data, h;
    b ? (s += e(494) + n + " = " + x[e(2980)][e(568)](c[e(2073)], i, x[e(1671)]) + "; ", h = e(1346) + n) : h = c;
    var p = x[e(2977)][e(1912)], v = Array[e(2573)](p);
    if (b) {
      var k = "format" + n, P = "isObject" + n, N = e(1986) + n;
      s += e(2459) + k + e(657) + h + e(727) + P + e(1114) + k + e(2283) + k + e(3067) + k + ".validate; var " + N + " = " + P + e(905) + k + e(1052) + P + e(1109), x[e(372)] && (s += e(536) + n + e(1990) + k + e(2935)), s += " " + k + " = " + k + e(2132), b && (s += " (" + h + e(1501) + h + e(1471)), s += " (", p != e(765) && (s += " (" + h + " && !" + k + " ", v && (s += " && self._opts.unknownFormats.indexOf(" + h + ") == -1 "), s += e(1422)), s += " (" + k + e(905) + N + e(988) + r + e(1872) + k + " == 'function' ? ", x[e(372)] ? s += e(2895) + n + e(725) + k + "(" + f + e(2598) + k + "(" + f + ")) " : s += " " + k + "(" + f + ") ", s += e(970) + k + e(1880) + f + "))))) {";
    } else {
      var k = x.formats[c];
      if (!k) {
        if (p == e(765)) return x[e(3053)].warn(e(1272) + c + e(1298) + x.errSchemaPath + '"'), l && (s += e(1954)), s;
        if (v && p.indexOf(c) >= 0) return l && (s += " if (true) { "), s;
        throw new Error(e(1272) + c + e(1521) + x.errSchemaPath + '"');
      }
      var P = typeof k == "object" && !(k instanceof RegExp) && k[e(2033)], N = P && k[e(506)] || e(1443);
      if (P) {
        var T = k[e(372)] === !0;
        k = k.validate;
      }
      if (N != r) return l && (s += " if (true) { "), s;
      if (T) {
        if (!x.async) throw new Error(e(869));
        var C = e(1408) + x.util[e(1980)](c) + e(752);
        s += " if (!(await " + C + "(" + f + e(409);
      } else {
        s += e(1338);
        var C = e(1408) + x[e(2980)][e(1980)](c);
        P && (C += e(752)), typeof k == e(2855) ? s += " " + C + "(" + f + ") " : s += " " + C + e(1880) + f + ") ", s += e(1109);
      }
    }
    var I = I || [];
    I[e(816)](s), s = "", x[e(1596)] !== !1 ? (s += e(1962) + e(1918) + e(733) + x[e(2731)] + e(1938) + x[e(2980)][e(1766)](u) + e(716), b ? s += "" + h : s += "" + x[e(2980)][e(1766)](c), s += e(1892), x[e(2977)].messages !== !1 && (s += e(2596), b ? s += e(375) + h + e(3021) : s += "" + x[e(2980)][e(1825)](c), s += `"' `), x[e(2977)][e(2168)] && (s += e(1491), b ? s += e(777) + d : s += "" + x[e(2980)][e(1766)](c), s += "         , parentSchema: validate.schema" + x[e(2269)] + " , data: " + f + " "), s += e(1063)) : s += e(1577);
    var R = s;
    return s = I[e(641)](), !x[e(865)] && l ? x[e(372)] ? s += e(2782) + R + e(2105) : s += " validate.errors = [" + R + "]; return false; " : s += " var err = " + R + e(2006), s += " } ", l && (s += " else { "), s;
  }), bt;
}
var gt, Er;
function kc() {
  return Er || (Er = 1, gt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(2551)], c = x.schema[t], d = x[e(2269)] + x[e(2980)][e(1980)](t), u = x.errSchemaPath + "/" + t, l = !x[e(2977)][e(2722)], f = "data" + (i || ""), b = e(1694) + n, h = e(2037) + n, p = x.util.copy(x);
    p[e(1332)]++;
    var v = e(1694) + p.level, k = x[e(1346)].then, P = x[e(1346)][e(1965)], N = k !== void 0 && (x[e(2977)][e(1033)] ? typeof k == e(2517) && Object[e(548)](k)[e(2910)] > 0 || k === !1 : x.util[e(2565)](k, x[e(1757)][e(2264)])), T = P !== void 0 && (x[e(2977)].strictKeywords ? typeof P == e(2517) && Object[e(548)](P)[e(2910)] > 0 || P === !1 : x[e(2980)][e(2565)](P, x[e(1757)].all)), C = p[e(1620)];
    if (N || T) {
      var I;
      p[e(1596)] = !1, p[e(1346)] = c, p[e(2269)] = d, p[e(376)] = u, s += e(2459) + h + " = errors; var " + b + e(744);
      var R = x.compositeRule;
      x[e(865)] = p[e(865)] = !0, s += "  " + x[e(2033)](p) + " ", p[e(1620)] = C, p.createErrors = !0, s += e(906) + h + e(2208) + h + e(2056) + h + e(1498), x[e(865)] = p[e(865)] = R, N ? (s += " if (" + v + e(2289), p[e(1346)] = x.schema[e(857)], p[e(2269)] = x[e(2269)] + ".then", p.errSchemaPath = x[e(376)] + e(1292), s += "  " + x[e(2033)](p) + " ", p.baseId = C, s += " " + b + e(1990) + v + "; ", N && T ? (I = "ifClause" + n, s += e(2459) + I + " = 'then'; ") : I = e(1916), s += e(1063), T && (s += " else { ")) : s += e(1478) + v + e(1109), T && (p[e(1346)] = x.schema[e(1965)], p[e(2269)] = x[e(2269)] + e(2369), p[e(376)] = x[e(376)] + e(1531), s += "  " + x[e(2033)](p) + " ", p[e(1620)] = C, s += " " + b + e(1990) + v + "; ", N && T ? (I = e(1271) + n, s += " var " + I + e(444)) : I = e(1615), s += e(1063)), s += e(1478) + b + e(2969), x[e(1596)] !== !1 ? (s += e(1962) + "if" + e(733) + x.errorPath + e(1938) + x.util[e(1766)](u) + e(2049) + I + " } ", x[e(2977)].messages !== !1 && (s += e(1953) + I + e(2606)), x[e(2977)].verbose && (s += e(1888) + d + e(2439) + x.schemaPath + e(1275) + f + " "), s += e(1063)) : s += e(1577), s += e(2006), !x[e(865)] && l && (x[e(372)] ? s += e(1755) : s += " validate.errors = vErrors; return false; "), s += e(1889), l && (s += e(2293));
    } else l && (s += " if (true) { ");
    return s;
  }), gt;
}
var yt, Cr;
function Pc() {
  return Cr || (Cr = 1, yt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x.dataLevel, c = x[e(1346)][t], d = x[e(2269)] + x[e(2980)][e(1980)](t), u = x.errSchemaPath + "/" + t, l = !x[e(2977)][e(2722)], f = e(571) + (i || ""), b = e(1694) + n, h = e(2037) + n, p = x.util[e(1303)](x), v = "";
    p[e(1332)]++;
    var k = "valid" + p[e(1332)], P = "i" + n, N = p[e(2551)] = x[e(2551)] + 1, T = e(571) + N, C = x[e(1620)];
    if (s += e(2718) + h + e(1291) + b + ";", Array[e(2573)](c)) {
      var I = x[e(1346)][e(1547)];
      if (I === !1) {
        s += " " + b + " = " + f + e(738) + c[e(2910)] + "; ";
        var R = u;
        u = x.errSchemaPath + "/additionalItems", s += e(2138) + b + ") {   ";
        var O = O || [];
        O.push(s), s = "", x[e(1596)] !== !1 ? (s += e(1962) + e(1547) + "' , dataPath: (dataPath || '') + " + x[e(2731)] + " , schemaPath: " + x[e(2980)][e(1766)](u) + " , params: { limit: " + c[e(2910)] + e(1063), x[e(2977)][e(2953)] !== !1 && (s += e(2065) + c.length + e(618)), x.opts.verbose && (s += " , schema: false , parentSchema: validate.schema" + x[e(2269)] + " , data: " + f + " "), s += e(1063)) : s += e(1577);
        var D = s;
        s = O.pop(), !x[e(865)] && l ? x[e(372)] ? s += e(2782) + D + e(2105) : s += e(1264) + D + e(2530) : s += e(2131) + D + e(2006), s += e(1063), u = R, l && (v += "}", s += " else { ");
      }
      var M = c;
      if (M) {
        for (var F, q = -1, H = M[e(2910)] - 1; q < H; )
          if (F = M[q += 1], x[e(2977)][e(1033)] ? typeof F == "object" && Object[e(548)](F)[e(2910)] > 0 || F === !1 : x[e(2980)][e(2565)](F, x[e(1757)][e(2264)])) {
            s += " " + k + e(2812) + f + e(1229) + q + e(1109);
            var L = f + "[" + q + "]";
            p[e(1346)] = F, p[e(2269)] = d + "[" + q + "]", p[e(376)] = u + "/" + q, p[e(2731)] = x[e(2980)][e(2607)](x[e(2731)], q, x[e(2977)][e(1397)], !0), p[e(1671)][N] = q;
            var z = x[e(2033)](p);
            p[e(1620)] = C, x.util[e(2199)](z, T) < 2 ? s += " " + x[e(2980)][e(1772)](z, T, L) + " " : s += e(2459) + T + e(1990) + L + "; " + z + " ", s += e(2355), l && (s += e(2865) + k + e(1109), v += "}");
          }
      }
      if (typeof I == e(2517) && (x[e(2977)][e(1033)] ? typeof I == "object" && Object[e(548)](I)[e(2910)] > 0 || I === !1 : x.util[e(2565)](I, x.RULES[e(2264)]))) {
        p[e(1346)] = I, p[e(2269)] = x.schemaPath + e(567), p[e(376)] = x.errSchemaPath + "/additionalItems", s += " " + k + e(2812) + f + e(1229) + c[e(2910)] + e(524) + P + " = " + c.length + "; " + P + e(813) + f + e(859) + P + "++) { ", p[e(2731)] = x.util.getPathExpr(x[e(2731)], P, x.opts[e(1397)], !0);
        var L = f + "[" + P + "]";
        p[e(1671)][N] = P;
        var z = x.validate(p);
        p[e(1620)] = C, x[e(2980)][e(2199)](z, T) < 2 ? s += " " + x[e(2980)][e(1772)](z, T, L) + " " : s += " var " + T + e(1990) + L + "; " + z + " ", l && (s += e(1478) + k + ") break; "), s += e(1486), l && (s += e(2865) + k + e(1109), v += "}");
      }
    } else if (x.opts[e(1033)] ? typeof c == "object" && Object[e(548)](c)[e(2910)] > 0 || c === !1 : x[e(2980)][e(2565)](c, x.RULES.all)) {
      p[e(1346)] = c, p.schemaPath = d, p.errSchemaPath = u, s += e(2879) + P + e(1990) + 0 + "; " + P + e(813) + f + e(859) + P + e(1836), p[e(2731)] = x[e(2980)][e(2607)](x[e(2731)], P, x[e(2977)][e(1397)], !0);
      var L = f + "[" + P + "]";
      p[e(1671)][N] = P;
      var z = x[e(2033)](p);
      p[e(1620)] = C, x[e(2980)][e(2199)](z, T) < 2 ? s += " " + x[e(2980)][e(1772)](z, T, L) + " " : s += e(2459) + T + e(1990) + L + "; " + z + " ", l && (s += e(1478) + k + e(2764)), s += " }";
    }
    return l && (s += " " + v + e(2865) + h + " == errors) {"), s;
  }), yt;
}
var vt, Rr;
function Fr() {
  return Rr || (Rr = 1, vt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x.dataLevel, c = x[e(1346)][t], d = x[e(2269)] + x[e(2980)][e(1980)](t), u = x[e(376)] + "/" + t, l = !x[e(2977)].allErrors, C, f = e(571) + (i || ""), b = x[e(2977)][e(2073)] && c && c[e(2073)], h;
    b ? (s += " var schema" + n + e(1990) + x[e(2980)][e(568)](c[e(2073)], i, x[e(1671)]) + "; ", h = e(1346) + n) : h = c;
    var p = t == e(2793), v = e(p ? 2277 : 2987), k = x[e(1346)][v], P = x[e(2977)][e(2073)] && k && k.$data, N = p ? "<" : ">", T = p ? ">" : "<", C = void 0;
    if (!(b || typeof c == e(1730) || c === void 0)) throw new Error(t + " must be number");
    if (!(P || k === void 0 || typeof k == e(1730) || typeof k == e(1964))) throw new Error(v + e(1669));
    if (P) {
      var I = x[e(2980)].getData(k[e(2073)], i, x[e(1671)]), R = e(2882) + n, O = e(2959) + n, D = e(2407) + n, M = "op" + n, F = e(375) + M + e(3021);
      s += " var schemaExcl" + n + e(1990) + I + "; ", I = e(1453) + n, s += e(2459) + R + e(1851) + O + e(1114) + I + e(1331) + O + e(2252) + O + e(1602) + O + e(2832);
      var C = v, q = q || [];
      q[e(816)](s), s = "", x[e(1596)] !== !1 ? (s += " { keyword: '" + (C || e(1891)) + e(733) + x[e(2731)] + " , schemaPath: " + x.util.toQuotedString(u) + e(782), x[e(2977)].messages !== !1 && (s += e(1266) + v + " should be boolean' "), x[e(2977)][e(2168)] && (s += e(1888) + d + e(2439) + x[e(2269)] + " , data: " + f + " "), s += " } ") : s += e(1577);
      var H = s;
      s = q[e(641)](), !x[e(865)] && l ? x[e(372)] ? s += e(2782) + H + e(2105) : s += " validate.errors = [" + H + e(2530) : s += e(2131) + H + e(2006), s += e(981), b && (s += " (" + h + e(1501) + h + e(1622)), s += " " + O + e(2151) + R + e(1990) + h + " === undefined || " + I + " " + N + "= " + h + e(415) + f + " " + T + "= " + I + e(970) + f + " " + T + " " + h + e(2086) + R + e(1990) + I + " === true) ? " + f + " " + T + "= " + h + " : " + f + " " + T + " " + h + e(1504) + f + e(844) + f + ") { var op" + n + " = " + R + " ? '" + N + "' : '" + N + "='; ", c === void 0 && (C = v, u = x[e(376)] + "/" + v, h = I, b = P);
    } else {
      var D = typeof k == e(1730), F = N;
      if (D && b) {
        var M = "'" + F + "'";
        s += e(1597), b && (s += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), s += e(2167) + h + " === undefined || " + k + " " + N + "= " + h + e(2822) + f + " " + T + "= " + k + e(970) + f + " " + T + " " + h + e(1504) + f + e(844) + f + e(1109);
      } else {
        D && c === void 0 ? (R = !0, C = v, u = x[e(376)] + "/" + v, h = k, T += "=") : (D && (h = Math[e(p ? 2310 : 544)](k, c)), k === (D ? h : !0) ? (R = !0, C = v, u = x[e(376)] + "/" + v, T += "=") : (R = !1, F += "="));
        var M = "'" + F + "'";
        s += e(1597), b && (s += " (" + h + e(1501) + h + e(1622)), s += " " + f + " " + T + " " + h + e(1073) + f + e(844) + f + e(1109);
      }
    }
    C = C || t;
    var q = q || [];
    q[e(816)](s), s = "", x[e(1596)] !== !1 ? (s += " { keyword: '" + (C || "_limit") + e(733) + x[e(2731)] + " , schemaPath: " + x[e(2980)][e(1766)](u) + e(2245) + M + e(983) + h + e(2557) + R + e(1063), x[e(2977)][e(2953)] !== !1 && (s += e(1913) + F + " ", b ? s += "' + " + h : s += "" + h + "'"), x[e(2977)][e(2168)] && (s += " , schema:  ", b ? s += e(777) + d : s += "" + c, s += e(369) + x[e(2269)] + e(1275) + f + " "), s += e(1063)) : s += e(1577);
    var H = s;
    return s = q[e(641)](), !x[e(865)] && l ? x[e(372)] ? s += e(2782) + H + e(2105) : s += " validate.errors = [" + H + "]; return false; " : s += e(2131) + H + e(2006), s += e(1063), l && (s += e(2293)), s;
  }), vt;
}
var wt, Nr;
function qr() {
  return Nr || (Nr = 1, wt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1332)], i = x[e(2551)], c = x[e(1346)][t], d = x.schemaPath + x[e(2980)][e(1980)](t), u = x[e(376)] + "/" + t, l = !x[e(2977)].allErrors, v, f = e(571) + (i || ""), b = x.opts[e(2073)] && c && c[e(2073)], h;
    if (b ? (s += e(494) + n + " = " + x[e(2980)][e(568)](c.$data, i, x[e(1671)]) + "; ", h = e(1346) + n) : h = c, !(b || typeof c == e(1730))) throw new Error(t + e(1985));
    var p = t == "maxItems" ? ">" : "<";
    s += "if ( ", b && (s += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), s += " " + f + e(1269) + p + " " + h + e(1109);
    var v = t, k = k || [];
    k[e(816)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + (v || "_limitItems") + e(733) + x[e(2731)] + " , schemaPath: " + x.util[e(1766)](u) + e(2961) + h + e(1063), x[e(2977)][e(2953)] !== !1 && (s += e(1860), t == e(2157) ? s += e(450) : s += e(1121), s += e(1646), b ? s += "' + " + h + " + '" : s += "" + c, s += e(618)), x.opts.verbose && (s += " , schema:  ", b ? s += e(777) + d : s += "" + c, s += "         , parentSchema: validate.schema" + x.schemaPath + e(1275) + f + " "), s += e(1063)) : s += " {} ";
    var P = s;
    return s = k[e(641)](), !x.compositeRule && l ? x[e(372)] ? s += e(2782) + P + e(2105) : s += e(1264) + P + e(2530) : s += e(2131) + P + e(2006), s += "} ", l && (s += e(2293)), s;
  }), wt;
}
var St, Tr;
function Ar() {
  return Tr || (Tr = 1, St = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(2551)], c = x.schema[t], d = x[e(2269)] + x[e(2980)][e(1980)](t), u = x.errSchemaPath + "/" + t, l = !x[e(2977)].allErrors, v, f = e(571) + (i || ""), b = x[e(2977)][e(2073)] && c && c.$data, h;
    if (b ? (s += e(494) + n + " = " + x[e(2980)].getData(c.$data, i, x[e(1671)]) + "; ", h = e(1346) + n) : h = c, !(b || typeof c == e(1730))) throw new Error(t + e(1985));
    var p = t == "maxLength" ? ">" : "<";
    s += e(2214), b && (s += " (" + h + " !== undefined && typeof " + h + e(1622)), x[e(2977)][e(974)] === !1 ? s += " " + f + e(1269) : s += e(821) + f + ") ", s += " " + p + " " + h + e(1109);
    var v = t, k = k || [];
    k[e(816)](s), s = "", x[e(1596)] !== !1 ? (s += e(1962) + (v || e(380)) + e(733) + x[e(2731)] + " , schemaPath: " + x[e(2980)][e(1766)](u) + e(2961) + h + e(1063), x[e(2977)][e(2953)] !== !1 && (s += e(2085), t == e(496) ? s += e(2121) : s += e(2876), s += e(1646), b ? s += e(375) + h + e(3021) : s += "" + c, s += e(2847)), x[e(2977)].verbose && (s += e(1491), b ? s += "validate.schema" + d : s += "" + c, s += e(369) + x.schemaPath + e(1275) + f + " "), s += e(1063)) : s += e(1577);
    var P = s;
    return s = k[e(641)](), !x[e(865)] && l ? x[e(372)] ? s += e(2782) + P + e(2105) : s += " validate.errors = [" + P + e(2530) : s += " var err = " + P + e(2006), s += "} ", l && (s += " else { "), s;
  }), St;
}
var kt, _r;
function Or() {
  return _r || (_r = 1, kt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1332)], i = x[e(2551)], c = x[e(1346)][t], d = x[e(2269)] + x.util[e(1980)](t), u = x.errSchemaPath + "/" + t, l = !x[e(2977)][e(2722)], v, f = e(571) + (i || ""), b = x[e(2977)][e(2073)] && c && c[e(2073)], h;
    if (b ? (s += e(494) + n + e(1990) + x[e(2980)].getData(c[e(2073)], i, x[e(1671)]) + "; ", h = e(1346) + n) : h = c, !(b || typeof c == e(1730))) throw new Error(t + e(1985));
    var p = t == "maxProperties" ? ">" : "<";
    s += e(2214), b && (s += " (" + h + e(1501) + h + e(1622)), s += " Object.keys(" + f + e(1029) + p + " " + h + ") { ";
    var v = t, k = k || [];
    k.push(s), s = "", x[e(1596)] !== !1 ? (s += e(1962) + (v || e(1172)) + e(733) + x[e(2731)] + e(1938) + x[e(2980)].toQuotedString(u) + e(2961) + h + e(1063), x[e(2977)][e(2953)] !== !1 && (s += e(1860), t == "maxProperties" ? s += "more" : s += e(1121), s += e(1646), b ? s += "' + " + h + e(3021) : s += "" + c, s += e(3015)), x[e(2977)][e(2168)] && (s += e(1491), b ? s += e(777) + d : s += "" + c, s += "         , parentSchema: validate.schema" + x.schemaPath + " , data: " + f + " "), s += e(1063)) : s += e(1577);
    var P = s;
    return s = k[e(641)](), !x[e(865)] && l ? x[e(372)] ? s += e(2782) + P + e(2105) : s += e(1264) + P + "]; return false; " : s += e(2131) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", l && (s += e(2293)), s;
  }), kt;
}
var Pt, Dr;
function Ic() {
  return Dr || (Dr = 1, Pt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1332)], i = x[e(2551)], c = x[e(1346)][t], d = x[e(2269)] + x[e(2980)][e(1980)](t), u = x[e(376)] + "/" + t, l = !x[e(2977)].allErrors, f = e(571) + (i || ""), b = x[e(2977)][e(2073)] && c && c[e(2073)], h;
    if (b ? (s += e(494) + n + e(1990) + x[e(2980)].getData(c.$data, i, x.dataPathArr) + "; ", h = e(1346) + n) : h = c, !(b || typeof c == e(1730))) throw new Error(t + " must be number");
    s += e(1149) + n + e(2136), b && (s += " " + h + " !== undefined && ( typeof " + h + e(1323)), s += e(2400) + n + e(1990) + f + e(1520) + h + ", ", x[e(2977)][e(1250)] ? s += e(1673) + n + e(1416) + n + e(2795) + x[e(2977)][e(1250)] + " " : s += " division" + n + " !== parseInt(division" + n + ") ", s += " ) ", b && (s += e(2406)), s += e(1017);
    var p = p || [];
    p.push(s), s = "", x[e(1596)] !== !1 ? (s += e(1962) + e(2570) + "' , dataPath: (dataPath || '') + " + x[e(2731)] + e(1938) + x[e(2980)][e(1766)](u) + e(1638) + h + " } ", x.opts.messages !== !1 && (s += " , message: 'should be multiple of ", b ? s += "' + " + h : s += "" + h + "'"), x[e(2977)][e(2168)] && (s += e(1491), b ? s += e(777) + d : s += "" + c, s += e(369) + x.schemaPath + e(1275) + f + " "), s += " } ") : s += e(1577);
    var v = s;
    return s = p[e(641)](), !x[e(865)] && l ? x[e(372)] ? s += e(2782) + v + "]); " : s += e(1264) + v + e(2530) : s += e(2131) + v + e(2006), s += "} ", l && (s += e(2293)), s;
  }), Pt;
}
var It, jr;
function Ec() {
  return jr || (jr = 1, It = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1332)], i = x.dataLevel, c = x[e(1346)][t], d = x[e(2269)] + x.util[e(1980)](t), u = x[e(376)] + "/" + t, l = !x[e(2977)][e(2722)], f = e(571) + (i || ""), b = e(2037) + n, h = x[e(2980)][e(1303)](x);
    h[e(1332)]++;
    var p = "valid" + h.level;
    if (x[e(2977)][e(1033)] ? typeof c == e(2517) && Object.keys(c).length > 0 || c === !1 : x.util[e(2565)](c, x[e(1757)][e(2264)])) {
      h[e(1346)] = c, h[e(2269)] = d, h[e(376)] = u, s += e(2459) + b + e(2043);
      var v = x.compositeRule;
      x[e(865)] = h[e(865)] = !0, h[e(1596)] = !1;
      var k;
      h[e(2977)].allErrors && (k = h[e(2977)][e(2722)], h.opts[e(2722)] = !1), s += " " + x[e(2033)](h) + " ", h.createErrors = !0, k && (h[e(2977)][e(2722)] = k), x[e(865)] = h[e(865)] = v, s += e(2865) + p + e(1163);
      var P = P || [];
      P[e(816)](s), s = "", x[e(1596)] !== !1 ? (s += " { keyword: '" + e(685) + e(733) + x[e(2731)] + e(1938) + x.util[e(1766)](u) + e(782), x[e(2977)][e(2953)] !== !1 && (s += " , message: 'should NOT be valid' "), x[e(2977)].verbose && (s += " , schema: validate.schema" + d + e(2439) + x[e(2269)] + e(1275) + f + " "), s += e(1063)) : s += e(1577);
      var N = s;
      s = P.pop(), !x[e(865)] && l ? x.async ? s += e(2782) + N + "]); " : s += " validate.errors = [" + N + "]; return false; " : s += e(2131) + N + e(2006), s += e(806) + b + "; if (vErrors !== null) { if (" + b + e(2056) + b + "; else vErrors = null; } ", x.opts[e(2722)] && (s += e(1063));
    } else s += "  var err =   ", x[e(1596)] !== !1 ? (s += e(1962) + "not' , dataPath: (dataPath || '') + " + x[e(2731)] + e(1938) + x[e(2980)].toQuotedString(u) + e(782), x[e(2977)][e(2953)] !== !1 && (s += e(1781)), x[e(2977)].verbose && (s += " , schema: validate.schema" + d + e(2439) + x[e(2269)] + e(1275) + f + " "), s += e(1063)) : s += e(1577), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", l && (s += e(876));
    return s;
  }), It;
}
var Et, Mr;
function Cc() {
  return Mr || (Mr = 1, Et = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1332)], i = x[e(2551)], c = x[e(1346)][t], d = x[e(2269)] + x[e(2980)][e(1980)](t), u = x[e(376)] + "/" + t, l = !x[e(2977)][e(2722)], f = e(571) + (i || ""), b = e(1694) + n, h = "errs__" + n, p = x[e(2980)].copy(x), v = "";
    p[e(1332)]++;
    var k = e(1694) + p.level, P = p[e(1620)], N = e(1061) + n, T = "passingSchemas" + n;
    s += e(2718) + h + e(793) + N + e(2724) + b + e(2724) + T + e(2373);
    var C = x[e(865)];
    x.compositeRule = p.compositeRule = !0;
    var I = c;
    if (I)
      for (var R, O = -1, D = I[e(2910)] - 1; O < D; )
        R = I[O += 1], (x[e(2977)][e(1033)] ? typeof R == "object" && Object[e(548)](R)[e(2910)] > 0 || R === !1 : x[e(2980)][e(2565)](R, x.RULES[e(2264)])) ? (p.schema = R, p[e(2269)] = d + "[" + O + "]", p[e(376)] = u + "/" + O, s += "  " + x.validate(p) + " ", p.baseId = P) : s += e(2459) + k + e(811), O && (s += e(2865) + k + " && " + N + e(1109) + b + e(3055) + T + e(1116) + T + ", " + O + e(1625), v += "}"), s += e(2865) + k + e(1109) + b + e(1990) + N + e(811) + T + e(1990) + O + e(2248);
    return x[e(865)] = p[e(865)] = C, s += "" + v + e(1789) + b + e(2969), x[e(1596)] !== !1 ? (s += e(1962) + "oneOf" + e(733) + x[e(2731)] + " , schemaPath: " + x[e(2980)][e(1766)](u) + e(1005) + T + e(1063), x[e(2977)][e(2953)] !== !1 && (s += e(670)), x.opts[e(2168)] && (s += e(1888) + d + " , parentSchema: validate.schema" + x.schemaPath + e(1275) + f + " "), s += e(1063)) : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x.compositeRule && l && (x.async ? s += e(1755) : s += " validate.errors = vErrors; return false; "), s += e(2064) + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; }", x.opts.allErrors && (s += e(1063)), s;
  }), Et;
}
var Ct, Lr;
function Rc() {
  return Lr || (Lr = 1, Ct = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(2551)], c = x.schema[t], d = x.schemaPath + x[e(2980)][e(1980)](t), u = x.errSchemaPath + "/" + t, l = !x[e(2977)].allErrors, f = e(571) + (i || ""), b = x.opts[e(2073)] && c && c[e(2073)], h;
    b ? (s += " var schema" + n + e(1990) + x.util.getData(c[e(2073)], i, x[e(1671)]) + "; ", h = e(1346) + n) : h = c;
    var p = b ? e(2498) + h + "))" : x.usePattern(c);
    s += e(2214), b && (s += " (" + h + " !== undefined && typeof " + h + e(1471)), s += " !" + p + ".test(" + f + ") ) {   ";
    var v = v || [];
    v[e(816)](s), s = "", x[e(1596)] !== !1 ? (s += e(1962) + e(987) + "' , dataPath: (dataPath || '') + " + x[e(2731)] + " , schemaPath: " + x[e(2980)][e(1766)](u) + e(926), b ? s += "" + h : s += "" + x[e(2980)][e(1766)](c), s += e(1892), x[e(2977)][e(2953)] !== !1 && (s += ` , message: 'should match pattern "`, b ? s += e(375) + h + e(3021) : s += "" + x[e(2980)][e(1825)](c), s += e(532)), x.opts[e(2168)] && (s += e(1491), b ? s += e(777) + d : s += "" + x[e(2980)][e(1766)](c), s += e(369) + x.schemaPath + e(1275) + f + " "), s += e(1063)) : s += e(1577);
    var k = s;
    return s = v.pop(), !x[e(865)] && l ? x[e(372)] ? s += e(2782) + k + e(2105) : s += e(1264) + k + e(2530) : s += e(2131) + k + e(2006), s += "} ", l && (s += e(2293)), s;
  }), Ct;
}
var Rt, $r;
function Fc() {
  return $r || ($r = 1, Rt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(2551)], c = x.schema[t], d = x[e(2269)] + x[e(2980)][e(1980)](t), u = x.errSchemaPath + "/" + t, l = !x[e(2977)][e(2722)], f = e(571) + (i || ""), b = e(2037) + n, h = x[e(2980)].copy(x), p = "";
    h[e(1332)]++;
    var v = e(1694) + h[e(1332)], k = "key" + n, P = "idx" + n, N = h.dataLevel = x[e(2551)] + 1, T = e(571) + N, C = "dataProperties" + n, I = Object[e(548)](c || {})[e(2951)](ue), R = x[e(1346)][e(2364)] || {}, O = Object[e(548)](R).filter(ue), D = x[e(1346)][e(1865)], M = I[e(2910)] || O[e(2910)], F = D === !1, q = typeof D == e(2517) && Object[e(548)](D).length, H = x[e(2977)][e(2330)], L = F || q || H, z = x[e(2977)][e(2187)], G = x[e(1620)], se = x.schema[e(2914)];
    if (se && !(x[e(2977)][e(2073)] && se[e(2073)]) && se[e(2910)] < x.opts[e(1968)]) var re = x.util[e(2457)](se);
    function ue(Mx) {
      return Mx !== "__proto__";
    }
    if (s += e(2718) + b + " = errors;var " + v + e(1311), z && (s += " var " + C + e(2346)), L) {
      if (z ? s += " " + C + " = " + C + e(485) + f + e(2256) + P + "=0; " + P + "<" + C + ".length; " + P + e(1315) + k + e(1990) + C + "[" + P + e(3037) : s += " for (var " + k + e(615) + f + e(1109), M) {
        if (s += " var isAdditional" + n + e(2447), I[e(2910)])
          if (I.length > 8) s += e(1479) + d + e(2048) + k + ") ";
          else {
            var fe = I;
            if (fe)
              for (var le, we = -1, Ce = fe[e(2910)] - 1; we < Ce; )
                le = fe[we += 1], s += e(1073) + k + e(2728) + x[e(2980)].toQuotedString(le) + " ";
          }
        if (O[e(2910)]) {
          var Me = O;
          if (Me)
            for (var Re, Je = -1, _ = Me[e(2910)] - 1; Je < _; )
              Re = Me[Je += 1], s += " || " + x[e(1624)](Re) + e(1880) + k + ") ";
        }
        s += " ); if (isAdditional" + n + e(1109);
      }
      if (H == e(2264)) s += e(1518) + f + "[" + k + e(3037);
      else {
        var A = x[e(2731)], j = e(375) + k + e(3021);
        if (x[e(2977)][e(2609)] && (x[e(2731)] = x[e(2980)][e(2607)](x[e(2731)], k, x[e(2977)].jsonPointers)), F)
          if (H) s += e(1518) + f + "[" + k + e(3037);
          else {
            s += " " + v + e(3055);
            var J = u;
            u = x[e(376)] + e(2418);
            var Q = Q || [];
            Q.push(s), s = "", x[e(1596)] !== !1 ? (s += " { keyword: '" + e(1865) + e(733) + x[e(2731)] + " , schemaPath: " + x[e(2980)][e(1766)](u) + e(467) + j + e(2675), x[e(2977)][e(2953)] !== !1 && (s += e(1266), x.opts[e(2609)] ? s += e(896) : s += "should NOT have additional properties", s += "' "), x[e(2977)][e(2168)] && (s += e(912) + x.schemaPath + e(1275) + f + " "), s += " } ") : s += e(1577);
            var V = s;
            s = Q.pop(), !x[e(865)] && l ? x[e(372)] ? s += e(2782) + V + "]); " : s += e(1264) + V + e(2530) : s += e(2131) + V + e(2006), u = J, l && (s += e(2076));
          }
        else if (q)
          if (H == e(1183)) {
            s += e(2459) + b + e(2043);
            var Y = x[e(865)];
            x.compositeRule = h[e(865)] = !0, h[e(1346)] = D, h[e(2269)] = x.schemaPath + e(910), h[e(376)] = x[e(376)] + "/additionalProperties", h[e(2731)] = x[e(2977)][e(2609)] ? x[e(2731)] : x[e(2980)][e(2607)](x.errorPath, k, x[e(2977)].jsonPointers);
            var ce = f + "[" + k + "]";
            h[e(1671)][N] = k;
            var ie = x[e(2033)](h);
            h[e(1620)] = G, x.util[e(2199)](ie, T) < 2 ? s += " " + x[e(2980)][e(1772)](ie, T, ce) + " " : s += e(2459) + T + e(1990) + ce + "; " + ie + " ", s += e(1478) + v + e(1678) + b + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + f + "[" + k + "]; }  ", x[e(865)] = h.compositeRule = Y;
          } else {
            h[e(1346)] = D, h.schemaPath = x[e(2269)] + e(910), h[e(376)] = x[e(376)] + e(2418), h.errorPath = x[e(2977)][e(2609)] ? x[e(2731)] : x[e(2980)][e(2607)](x[e(2731)], k, x.opts[e(1397)]);
            var ce = f + "[" + k + "]";
            h[e(1671)][N] = k;
            var ie = x[e(2033)](h);
            h[e(1620)] = G, x[e(2980)][e(2199)](ie, T) < 2 ? s += " " + x[e(2980)][e(1772)](ie, T, ce) + " " : s += e(2459) + T + " = " + ce + "; " + ie + " ", l && (s += e(1478) + v + e(2764));
          }
        x.errorPath = A;
      }
      M && (s += " } "), s += e(2355), l && (s += e(2865) + v + e(1109), p += "}");
    }
    var xe = x[e(2977)][e(373)] && !x[e(865)];
    if (I.length) {
      var Le = I;
      if (Le)
        for (var le, Ae = -1, He = Le.length - 1; Ae < He; ) {
          le = Le[Ae += 1];
          var Se = c[le];
          if (x[e(2977)][e(1033)] ? typeof Se == e(2517) && Object.keys(Se)[e(2910)] > 0 || Se === !1 : x[e(2980)][e(2565)](Se, x[e(1757)][e(2264)])) {
            var Ge = x.util.getProperty(le), ce = f + Ge, n0 = xe && Se[e(2889)] !== void 0;
            h.schema = Se, h[e(2269)] = d + Ge, h[e(376)] = u + "/" + x[e(2980)][e(800)](le), h.errorPath = x[e(2980)].getPath(x.errorPath, le, x.opts.jsonPointers), h.dataPathArr[N] = x.util[e(1766)](le);
            var ie = x[e(2033)](h);
            if (h.baseId = G, x[e(2980)][e(2199)](ie, T) < 2) {
              ie = x[e(2980)][e(1772)](ie, T, ce);
              var Qe = ce;
            } else {
              var Qe = T;
              s += e(2459) + T + e(1990) + ce + "; ";
            }
            if (n0) s += " " + ie + " ";
            else {
              if (re && re[le]) {
                s += e(1597) + Qe + e(2146), z && (s += " || ! Object.prototype.hasOwnProperty.call(" + f + e(1997) + x[e(2980)][e(1825)](le) + "') "), s += ") { " + v + e(3055);
                var A = x[e(2731)], J = u, _e = x.util[e(1825)](le);
                x[e(2977)][e(2609)] && (x[e(2731)] = x[e(2980)].getPath(A, le, x[e(2977)].jsonPointers)), u = x[e(376)] + "/required";
                var Q = Q || [];
                Q[e(816)](s), s = "", x.createErrors !== !1 ? (s += e(1962) + e(2914) + e(733) + x.errorPath + e(1938) + x.util[e(1766)](u) + e(2181) + _e + e(2675), x[e(2977)].messages !== !1 && (s += " , message: '", x[e(2977)][e(2609)] ? s += e(990) : s += e(654) + _e + "\\'", s += "' "), x.opts[e(2168)] && (s += e(1888) + d + e(2439) + x[e(2269)] + e(1275) + f + " "), s += e(1063)) : s += e(1577);
                var V = s;
                s = Q[e(641)](), !x[e(865)] && l ? x[e(372)] ? s += e(2782) + V + e(2105) : s += e(1264) + V + e(2530) : s += e(2131) + V + e(2006), u = J, x[e(2731)] = A, s += e(2584);
              } else l ? (s += e(1597) + Qe + e(2146), z && (s += e(2405) + f + e(1997) + x[e(2980)].escapeQuotes(le) + e(1411)), s += e(1109) + v + e(2440)) : (s += " if (" + Qe + " !== undefined ", z && (s += e(2816) + f + e(1997) + x[e(2980)].escapeQuotes(le) + e(1411)), s += " ) { ");
              s += " " + ie + e(1063);
            }
          }
          l && (s += e(2865) + v + e(1109), p += "}");
        }
    }
    if (O[e(2910)]) {
      var ze = O;
      if (ze)
        for (var Re, Ye = -1, N0 = ze.length - 1; Ye < N0; ) {
          Re = ze[Ye += 1];
          var Se = R[Re];
          if (x[e(2977)].strictKeywords ? typeof Se == e(2517) && Object[e(548)](Se).length > 0 || Se === !1 : x.util[e(2565)](Se, x.RULES.all)) {
            h.schema = Se, h[e(2269)] = x[e(2269)] + e(1328) + x[e(2980)][e(1980)](Re), h[e(376)] = x[e(376)] + e(1512) + x.util.escapeFragment(Re), z ? s += " " + C + " = " + C + " || Object.keys(" + f + e(2256) + P + e(2490) + P + "<" + C + e(859) + P + "++) { var " + k + " = " + C + "[" + P + "]; " : s += e(624) + k + " in " + f + e(1109), s += e(2865) + x[e(1624)](Re) + ".test(" + k + e(2089), h[e(2731)] = x[e(2980)].getPathExpr(x[e(2731)], k, x[e(2977)].jsonPointers);
            var ce = f + "[" + k + "]";
            h[e(1671)][N] = k;
            var ie = x.validate(h);
            h[e(1620)] = G, x[e(2980)][e(2199)](ie, T) < 2 ? s += " " + x.util[e(1772)](ie, T, ce) + " " : s += e(2459) + T + e(1990) + ce + "; " + ie + " ", l && (s += e(1478) + v + ") break; "), s += " } ", l && (s += e(443) + v + e(811)), s += e(2355), l && (s += e(2865) + v + e(1109), p += "}");
          }
        }
    }
    return l && (s += " " + p + e(2865) + b + " == errors) {"), s;
  }), Rt;
}
var Ft, Ur;
function Nc() {
  return Ur || (Ur = 1, Ft = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1332)], i = x[e(2551)], c = x.schema[t], d = x[e(2269)] + x[e(2980)][e(1980)](t), u = x[e(376)] + "/" + t, l = !x[e(2977)][e(2722)], f = e(571) + (i || ""), b = e(2037) + n, h = x.util[e(1303)](x), p = "";
    h[e(1332)]++;
    var v = e(1694) + h[e(1332)];
    if (s += e(2718) + b + e(2386), x[e(2977)][e(1033)] ? typeof c == e(2517) && Object.keys(c)[e(2910)] > 0 || c === !1 : x[e(2980)][e(2565)](c, x[e(1757)].all)) {
      h.schema = c, h[e(2269)] = d, h[e(376)] = u;
      var k = e(1741) + n, P = e(1186) + n, N = "i" + n, T = e(375) + k + e(3021), C = h[e(2551)] = x[e(2551)] + 1, I = "data" + C, R = e(2488) + n, O = x[e(2977)][e(2187)], D = x.baseId;
      O && (s += e(2459) + R + e(2354)), O ? s += " " + R + " = " + R + " || Object.keys(" + f + e(2256) + P + e(2490) + P + "<" + R + e(859) + P + e(1315) + k + e(1990) + R + "[" + P + e(3037) : s += e(624) + k + " in " + f + ") { ", s += e(2773) + n + e(2178);
      var M = k, F = x[e(865)];
      x[e(865)] = h[e(865)] = !0;
      var q = x.validate(h);
      h[e(1620)] = D, x[e(2980)][e(2199)](q, I) < 2 ? s += " " + x.util.varReplace(q, I, M) + " " : s += " var " + I + e(1990) + M + "; " + q + " ", x[e(865)] = h[e(865)] = F, s += " if (!" + v + ") { for (var " + N + e(2204) + n + "; " + N + e(625) + N + e(427) + N + e(2296) + k + "; }   var err =   ", x[e(1596)] !== !1 ? (s += e(1962) + e(587) + e(733) + x[e(2731)] + " , schemaPath: " + x[e(2980)].toQuotedString(u) + " , params: { propertyName: '" + T + e(2675), x.opts[e(2953)] !== !1 && (s += e(2556) + T + e(1588)), x[e(2977)][e(2168)] && (s += e(1888) + d + " , parentSchema: validate.schema" + x.schemaPath + e(1275) + f + " "), s += e(1063)) : s += e(1577), s += e(2006), !x[e(865)] && l && (x.async ? s += e(1755) : s += e(1026)), l && (s += " break; "), s += e(2571);
    }
    return l && (s += " " + p + e(2865) + b + e(1957)), s;
  }), Ft;
}
var Nt, Hr;
function qc() {
  return Hr || (Hr = 1, Nt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1332)], i = x[e(2551)], c = x[e(1346)][t], d = x[e(2269)] + x.util.getProperty(t), u = x[e(376)] + "/" + t, l = !x[e(2977)][e(2722)], f = e(571) + (i || ""), b = e(1694) + n, h = x[e(2977)][e(2073)] && c && c[e(2073)];
    h && (s += " var schema" + n + " = " + x[e(2980)].getData(c[e(2073)], i, x.dataPathArr) + "; ");
    var p = e(1346) + n;
    if (!h)
      if (c[e(2910)] < x[e(2977)].loopRequired && x[e(1346)][e(1684)] && Object[e(548)](x[e(1346)][e(1684)])[e(2910)]) {
        var C = [], v = c;
        if (v)
          for (var k, P = -1, N = v.length - 1; P < N; ) {
            k = v[P += 1];
            var T = x[e(1346)][e(1684)][k];
            !(T && (x.opts[e(1033)] ? typeof T == "object" && Object[e(548)](T).length > 0 || T === !1 : x[e(2980)][e(2565)](T, x[e(1757)].all))) && (C[C[e(2910)]] = k);
          }
      } else var C = c;
    if (h || C.length) {
      var I = x[e(2731)], R = h || C.length >= x[e(2977)].loopRequired, O = x[e(2977)][e(2187)];
      if (l)
        if (s += e(814) + n + "; ", R) {
          !h && (s += e(2459) + p + e(2997) + d + "; ");
          var D = "i" + n, M = e(1346) + n + "[" + D + "]", F = e(375) + M + e(3021);
          x[e(2977)][e(2609)] && (x[e(2731)] = x[e(2980)].getPathExpr(I, M, x.opts.jsonPointers)), s += " var " + b + e(811), h && (s += e(1089) + n + " === undefined) " + b + e(1612) + n + e(829) + b + e(790)), s += " for (var " + D + e(1243) + D + e(813) + p + e(859) + D + "++) { " + b + e(1990) + f + "[" + p + "[" + D + "]] !== undefined ", O && (s += e(2816) + f + ", " + p + "[" + D + e(1854)), s += e(1623) + b + e(2274), h && (s += "  }  "), s += "  if (!" + b + e(1163);
          var q = q || [];
          q[e(816)](s), s = "", x[e(1596)] !== !1 ? (s += e(1962) + "required" + e(733) + x[e(2731)] + e(1938) + x[e(2980)][e(1766)](u) + e(2181) + F + e(2675), x[e(2977)][e(2953)] !== !1 && (s += e(1266), x.opts[e(2609)] ? s += "is a required property" : s += "should have required property \\'" + F + "\\'", s += "' "), x[e(2977)][e(2168)] && (s += e(1888) + d + " , parentSchema: validate.schema" + x.schemaPath + e(1275) + f + " "), s += e(1063)) : s += " {} ";
          var H = s;
          s = q[e(641)](), !x.compositeRule && l ? x[e(372)] ? s += e(2782) + H + e(2105) : s += e(1264) + H + e(2530) : s += e(2131) + H + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else { ";
        } else {
          s += e(1597);
          var L = C;
          if (L)
            for (var z, D = -1, G = L[e(2910)] - 1; D < G; ) {
              z = L[D += 1], D && (s += e(1073));
              var se = x[e(2980)][e(1980)](z), re = f + se;
              s += e(711) + re + " === undefined ", O && (s += e(2405) + f + e(1997) + x[e(2980)][e(1825)](z) + e(1411)), s += e(3012) + n + e(1990) + x[e(2980)][e(1766)](x.opts[e(1397)] ? z : se) + e(640);
            }
          s += ") {  ";
          var M = "missing" + n, F = "' + " + M + e(3021);
          x[e(2977)][e(2609)] && (x[e(2731)] = x[e(2977)][e(1397)] ? x.util[e(2607)](I, M, !0) : I + e(509) + M);
          var q = q || [];
          q[e(816)](s), s = "", x[e(1596)] !== !1 ? (s += e(1962) + e(2914) + e(733) + x.errorPath + e(1938) + x[e(2980)][e(1766)](u) + " , params: { missingProperty: '" + F + e(2675), x.opts[e(2953)] !== !1 && (s += " , message: '", x[e(2977)]._errorDataPathProperty ? s += e(990) : s += e(654) + F + "\\'", s += "' "), x[e(2977)][e(2168)] && (s += e(1888) + d + e(2439) + x[e(2269)] + " , data: " + f + " "), s += " } ") : s += e(1577);
          var H = s;
          s = q[e(641)](), !x[e(865)] && l ? x[e(372)] ? s += e(2782) + H + e(2105) : s += " validate.errors = [" + H + "]; return false; " : s += e(2131) + H + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else { ";
        }
      else if (R) {
        !h && (s += e(2459) + p + e(2997) + d + "; ");
        var D = "i" + n, M = e(1346) + n + "[" + D + "]", F = e(375) + M + e(3021);
        x[e(2977)][e(2609)] && (x[e(2731)] = x[e(2980)][e(2607)](I, M, x[e(2977)].jsonPointers)), h && (s += e(2865) + p + " && !Array.isArray(" + p + e(2677), x[e(1596)] !== !1 ? (s += " { keyword: '" + e(2914) + e(733) + x.errorPath + e(1938) + x[e(2980)][e(1766)](u) + e(2181) + F + "' } ", x[e(2977)][e(2953)] !== !1 && (s += e(1266), x[e(2977)]._errorDataPathProperty ? s += e(990) : s += e(654) + F + "\\'", s += "' "), x[e(2977)][e(2168)] && (s += e(1888) + d + e(2439) + x.schemaPath + e(1275) + f + " "), s += e(1063)) : s += e(1577), s += e(1214) + p + e(1802)), s += e(624) + D + e(1243) + D + e(813) + p + ".length; " + D + e(371) + f + "[" + p + "[" + D + e(1278), O && (s += e(2405) + f + ", " + p + "[" + D + e(1854)), s += ") {  var err =   ", x[e(1596)] !== !1 ? (s += e(1962) + e(2914) + e(733) + x[e(2731)] + e(1938) + x[e(2980)].toQuotedString(u) + " , params: { missingProperty: '" + F + e(2675), x[e(2977)][e(2953)] !== !1 && (s += e(1266), x.opts[e(2609)] ? s += "is a required property" : s += e(654) + F + "\\'", s += "' "), x[e(2977)][e(2168)] && (s += e(1888) + d + e(2439) + x.schemaPath + e(1275) + f + " "), s += " } ") : s += e(1577), s += e(702), h && (s += e(471));
      } else {
        var ue = C;
        if (ue)
          for (var z, fe = -1, le = ue.length - 1; fe < le; ) {
            z = ue[fe += 1];
            var se = x[e(2980)][e(1980)](z), F = x[e(2980)][e(1825)](z), re = f + se;
            x[e(2977)][e(2609)] && (x[e(2731)] = x[e(2980)][e(1737)](I, z, x[e(2977)][e(1397)])), s += " if ( " + re + " === undefined ", O && (s += " || ! Object.prototype.hasOwnProperty.call(" + f + e(1997) + x.util[e(1825)](z) + e(1411)), s += ") {  var err =   ", x[e(1596)] !== !1 ? (s += e(1962) + e(2914) + "' , dataPath: (dataPath || '') + " + x[e(2731)] + e(1938) + x[e(2980)][e(1766)](u) + e(2181) + F + e(2675), x[e(2977)][e(2953)] !== !1 && (s += e(1266), x[e(2977)][e(2609)] ? s += e(990) : s += e(654) + F + "\\'", s += "' "), x[e(2977)][e(2168)] && (s += e(1888) + d + " , parentSchema: validate.schema" + x[e(2269)] + e(1275) + f + " "), s += " } ") : s += e(1577), s += e(1302);
          }
      }
      x[e(2731)] = I;
    } else l && (s += e(2513));
    return s;
  }), Nt;
}
var qt, zr;
function Tc() {
  return zr || (zr = 1, qt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1332)], i = x.dataLevel, c = x[e(1346)][t], d = x[e(2269)] + x[e(2980)].getProperty(t), u = x.errSchemaPath + "/" + t, l = !x[e(2977)][e(2722)], f = "data" + (i || ""), b = e(1694) + n, h = x[e(2977)][e(2073)] && c && c.$data, p;
    if (h ? (s += e(494) + n + e(1990) + x[e(2980)][e(568)](c[e(2073)], i, x[e(1671)]) + "; ", p = e(1346) + n) : p = c, (c || h) && x[e(2977)].uniqueItems !== !1) {
      h && (s += " var " + b + "; if (" + p + e(2237) + p + e(2403) + b + e(1538) + p + e(3026) + b + " = false; else { "), s += e(3046) + f + e(1395) + b + e(967);
      var v = x[e(1346)][e(1141)] && x[e(1346)].items.type, k = Array[e(2573)](v);
      if (!v || v == "object" || v == e(1517) || k && (v[e(1316)](e(2517)) >= 0 || v[e(1316)](e(1517)) >= 0)) s += e(1900) + f + e(2475) + f + e(1034) + b + e(2766);
      else {
        s += " var itemIndices = {}, item; for (;i--;) { var item = " + f + e(1736);
        var P = "checkDataType" + (k ? "s" : "");
        s += e(2865) + x[e(2980)][P](v, e(2886), x[e(2977)][e(1111)], !0) + e(914), k && (s += e(2360)), s += e(2039) + b + e(1941);
      }
      s += " } ", h && (s += e(471)), s += e(1478) + b + e(1163);
      var N = N || [];
      N[e(816)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: 'uniqueItems" + e(733) + x[e(2731)] + e(1938) + x.util[e(1766)](u) + e(1575), x[e(2977)][e(2953)] !== !1 && (s += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), x[e(2977)][e(2168)] && (s += " , schema:  ", h ? s += e(777) + d : s += "" + c, s += "         , parentSchema: validate.schema" + x[e(2269)] + " , data: " + f + " "), s += e(1063)) : s += e(1577);
      var T = s;
      s = N[e(641)](), !x[e(865)] && l ? x[e(372)] ? s += e(2782) + T + e(2105) : s += e(1264) + T + e(2530) : s += e(2131) + T + e(2006), s += e(1063), l && (s += " else { ");
    } else l && (s += e(1954));
    return s;
  }), qt;
}
var Tt, Vr;
function Ac() {
  return Vr || (Vr = 1, Tt = { $ref: hc(), allOf: pc(), anyOf: mc(), $comment: bc(), const: gc(), contains: yc(), dependencies: vc(), enum: wc(), format: Sc(), if: kc(), items: Pc(), maximum: Fr(), minimum: Fr(), maxItems: qr(), minItems: qr(), maxLength: Ar(), minLength: Ar(), maxProperties: Or(), minProperties: Or(), multipleOf: Ic(), not: Ec(), oneOf: Cc(), pattern: Rc(), properties: Fc(), propertyNames: Nc(), required: qc(), uniqueItems: Tc(), validate: kn() }), Tt;
}
var At, Br;
function _c() {
  const o = a;
  if (Br) return At;
  Br = 1;
  var x = Ac(), t = Z0()[o(2457)];
  return At = function() {
    const e = o;
    var s = [{ type: "number", rules: [{ maximum: ["exclusiveMaximum"] }, { minimum: [e(2987)] }, "multipleOf", e(1918)] }, { type: e(1443), rules: [e(496), e(2694), "pattern", "format"] }, { type: e(1517), rules: [e(2157), e(2805), e(1141), "contains", e(561)] }, { type: e(2517), rules: [e(1440), "minProperties", e(2914), e(2012), "propertyNames", { properties: [e(1865), e(2364)] }] }, { rules: [e(1753), e(1852), e(1662), "not", "anyOf", e(1195), e(1739), "if"] }], n = ["type", e(1081)], i = [e(2320), e(2922), "id", e(2073), e(1070), e(2877), e(852), e(2889), e(902), e(2306), e(2926), e(2389), e(1955), "contentEncoding", e(1547), e(857), e(1965)], c = [e(1730), e(2421), e(1443), e(1517), e(2517), "boolean", e(2973)];
    return s[e(2264)] = t(n), s.types = t(c), s[e(1548)](function(d) {
      const u = e;
      d[u(2870)] = d[u(2870)][u(1429)](function(l) {
        const f = u;
        var b;
        if (typeof l == f(2517)) {
          var h = Object[f(548)](l)[0];
          b = l[h], l = h, b.forEach(function(v) {
            n[f(816)](v), s.all[v] = !0;
          });
        }
        n[f(816)](l);
        var p = s[f(2264)][l] = { keyword: l, code: x[l], implements: b };
        return p;
      }), s[u(2264)][u(1081)] = { keyword: "$comment", code: x.$comment }, d[u(506)] && (s[u(760)][d.type] = d);
    }), s[e(931)] = t(n[e(653)](i)), s[e(899)] = {}, s;
  }, At;
}
var _t, Zr;
function Oc() {
  const o = a;
  if (Zr) return _t;
  Zr = 1;
  var x = [o(2570), o(2793), o(2277), o(2242), o(2987), o(496), o(2694), "pattern", o(1547), o(2157), o(2805), "uniqueItems", o(1440), o(2067), "required", "additionalProperties", o(1662), o(1918), "const"];
  return _t = function(t, r) {
    const e = o;
    for (var s = 0; s < r[e(2910)]; s++) {
      t = JSON.parse(JSON.stringify(t));
      var n = r[s][e(1389)]("/"), i = t, c;
      for (c = 1; c < n[e(2910)]; c++) i = i[n[c]];
      for (c = 0; c < x[e(2910)]; c++) {
        var d = x[c], u = i[d];
        u && (i[d] = { anyOf: [u, { $ref: e(1191) }] });
      }
    }
    return t;
  }, _t;
}
var Ot, Wr;
function Dc() {
  const o = a;
  if (Wr) return Ot;
  Wr = 1;
  var x = ha()[o(2062)];
  Ot = t;
  function t(r, e, s) {
    const n = o;
    var i = this;
    if (typeof this[n(1797)].loadSchema != "function") throw new Error(n(1679));
    typeof e == n(2855) && (s = e, e = void 0);
    var c = d(r)[n(857)](function() {
      const l = n;
      var f = i[l(2223)](r, void 0, e);
      return f[l(2033)] || u(f);
    });
    return s && c[n(857)](function(l) {
      s(null, l);
    }, s), c;
    function d(l) {
      const f = n;
      var b = l[f(2320)];
      return b && !i[f(612)](b) ? t.call(i, { $ref: b }, !0) : Promise[f(510)]();
    }
    function u(l) {
      try {
        return i._compile(l);
      } catch (b) {
        if (b instanceof x) return f(b);
        throw b;
      }
      function f(b) {
        const h = K;
        var p = b[h(622)];
        if (P(p)) throw new Error("Schema " + p + h(746) + b[h(1513)] + h(2123));
        var v = i._loadingSchemas[p];
        return !v && (v = i[h(651)][p] = i[h(1797)][h(1672)](p), v[h(857)](k, k)), v[h(857)](function(N) {
          const T = h;
          if (!P(p)) return d(N)[T(857)](function() {
            const C = T;
            P(p) || i[C(2771)](N, p, void 0, e);
          });
        })[h(857)](function() {
          return u(l);
        });
        function k() {
          const N = h;
          delete i[N(651)][p];
        }
        function P(N) {
          const T = h;
          return i._refs[N] || i[T(2166)][N];
        }
      }
    }
  }
  return Ot;
}
var Dt, Kr;
function jc() {
  return Kr || (Kr = 1, Dt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1332)], i = x.dataLevel, c = x[e(1346)][t], d = x.schemaPath + x[e(2980)][e(1980)](t), u = x[e(376)] + "/" + t, l = !x[e(2977)][e(2722)], f, b = e(571) + (i || ""), h = e(1694) + n, p = "errs__" + n, v = x[e(2977)][e(2073)] && c && c[e(2073)], k;
    v ? (s += e(494) + n + e(1990) + x[e(2980)][e(568)](c.$data, i, x[e(1671)]) + "; ", k = e(1346) + n) : k = c;
    var P = this, N = e(1118) + n, T = P[e(1118)], C = "", I, R, O, D, M;
    if (v && T[e(2073)]) {
      M = e(1963) + n;
      var F = T.validateSchema;
      s += " var " + N + e(1313) + t + e(2334) + M + e(1990) + N + e(2975);
    } else {
      if (D = x.useCustomRule(P, c, x[e(1346)], x), !D) return;
      k = e(777) + d, M = D[e(3068)], I = T[e(1494)], R = T[e(1738)], O = T[e(2329)];
    }
    var q = M + e(2130), H = "i" + n, L = e(1339) + n, z = T[e(372)];
    if (z && !x[e(372)]) throw new Error(e(980));
    if (!(R || O) && (s += "" + q + " = null;"), s += e(2718) + p + " = errors;var " + h + ";", v && T[e(2073)] && (C += "}", s += e(2865) + k + " === undefined) { " + h + e(2440), F && (C += "}", s += " " + h + e(1990) + N + ".validateSchema(" + k + e(623) + h + e(1109))), R) T[e(1909)] ? s += " " + D[e(2033)] + " " : s += " " + h + e(1990) + D[e(2033)] + "; ";
    else if (O) {
      var G = x[e(2980)].copy(x), C = "";
      G[e(1332)]++;
      var se = e(1694) + G[e(1332)];
      G[e(1346)] = D[e(2033)], G.schemaPath = "";
      var re = x[e(865)];
      x[e(865)] = G[e(865)] = !0;
      var ue = x.validate(G)[e(1840)](/validate\.schema/g, M);
      x[e(865)] = G.compositeRule = re, s += " " + ue;
    } else {
      var fe = fe || [];
      fe[e(816)](s), s = "", s += "  " + M + e(2765), x[e(2977)][e(2196)] ? s += "this" : s += "self", I || T.schema === !1 ? s += e(1321) + b + " " : s += e(1321) + k + " , " + b + e(1041) + x[e(2269)] + " ", s += e(778), x[e(2731)] != '""' && (s += e(509) + x.errorPath);
      var le = i ? "data" + (i - 1 || "") : "parentData", we = i ? x[e(1671)][i] : e(705);
      s += e(1321) + le + e(1321) + we + e(1198);
      var Ce = s;
      s = fe.pop(), T.errors === !1 ? (s += " " + h + e(1990), z && (s += "await "), s += "" + Ce + "; ") : z ? (q = e(1256) + n, s += e(2459) + q + e(2681) + h + " = await " + Ce + "; } catch (e) { " + h + e(2209) + q + e(1716)) : s += " " + q + e(2373) + h + e(1990) + Ce + "; ";
    }
    if (T[e(1760)] && (s += " if (" + le + ") " + b + e(1990) + le + "[" + we + "];"), s += "" + C, T[e(1694)]) l && (s += e(1954));
    else {
      s += e(1597), T[e(1694)] === void 0 ? (s += " !", O ? s += "" + se : s += "" + h) : s += " " + !T.valid + " ", s += e(1109), f = P.keyword;
      var fe = fe || [];
      fe[e(816)](s), s = "";
      var fe = fe || [];
      fe[e(816)](s), s = "", x.createErrors !== !1 ? (s += e(1962) + (f || "custom") + "' , dataPath: (dataPath || '') + " + x[e(2731)] + e(1938) + x[e(2980)][e(1766)](u) + " , params: { keyword: '" + P[e(1379)] + e(2675), x[e(2977)][e(2953)] !== !1 && (s += e(517) + P[e(1379)] + e(1268)), x[e(2977)][e(2168)] && (s += e(1888) + d + " , parentSchema: validate.schema" + x.schemaPath + e(1275) + b + " "), s += e(1063)) : s += e(1577);
      var Me = s;
      s = fe[e(641)](), !x.compositeRule && l ? x.async ? s += e(2782) + Me + e(2105) : s += e(1264) + Me + e(2530) : s += e(2131) + Me + e(2006);
      var Re = s;
      s = fe[e(641)](), R ? T[e(2311)] ? T[e(2311)] != "full" && (s += e(2879) + H + "=" + p + "; " + H + e(625) + H + "++) { var " + L + e(2057) + H + e(2216) + L + ".dataPath === undefined) " + L + ".dataPath = (dataPath || '') + " + x[e(2731)] + "; if (" + L + e(2529) + L + e(486) + u + e(972), x[e(2977)][e(2168)] && (s += " " + L + ".schema = " + k + "; " + L + e(1001) + b + "; "), s += e(1063)) : T[e(2311)] === !1 ? s += " " + Re + " " : (s += e(2865) + p + e(1012) + Re + e(3041) + H + "=" + p + "; " + H + e(625) + H + "++) { var " + L + e(2057) + H + e(2216) + L + e(867) + L + e(2050) + x.errorPath + e(1331) + L + e(2529) + L + e(486) + u + '"; } ', x.opts[e(2168)] && (s += " " + L + e(1654) + k + "; " + L + e(1001) + b + "; "), s += e(1665)) : O ? (s += e(958), x.createErrors !== !1 ? (s += e(1962) + (f || e(899)) + e(733) + x[e(2731)] + e(1938) + x[e(2980)][e(1766)](u) + e(2254) + P.keyword + e(2675), x[e(2977)].messages !== !1 && (s += e(517) + P[e(1379)] + e(1268)), x[e(2977)].verbose && (s += e(1888) + d + e(2439) + x[e(2269)] + e(1275) + b + " "), s += e(1063)) : s += e(1577), s += e(2006), !x[e(865)] && l && (x[e(372)] ? s += e(1755) : s += e(1026))) : T[e(2311)] === !1 ? s += " " + Re + " " : (s += e(1392) + q + e(1726) + q + e(2789) + q + e(2058) + H + "=" + p + "; " + H + e(625) + H + e(1315) + L + e(2057) + H + e(2216) + L + e(867) + L + e(2050) + x[e(2731)] + e(1456) + L + e(486) + u + e(1601), x.opts[e(2168)] && (s += " " + L + e(1654) + k + "; " + L + ".data = " + b + "; "), s += e(2220) + Re + e(1063)), s += e(1063), l && (s += e(2293));
    }
    return s;
  }), Dt;
}
const Mc = "http://json-schema.org/draft-07/schema#", Lc = a(2110), $c = a(2797), Uc = { schemaArray: { type: a(1517), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: a(2145) }, { default: 0 }] }, simpleTypes: { enum: [a(1517), "boolean", a(2421), a(2973), a(1730), "object", a(1443)] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Hc = ["object", "boolean"], zc = { $id: { type: a(1443), format: a(1309) }, $schema: { type: a(1443), format: a(3032) }, $ref: { type: a(1443), format: a(1309) }, $comment: { type: a(1443) }, title: { type: a(1443) }, description: { type: a(1443) }, default: !0, readOnly: { type: a(1964), default: !1 }, examples: { type: a(1517), items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: a(1730) }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: a(1730) }, maxLength: { $ref: a(2145) }, minLength: { $ref: a(2871) }, pattern: { type: a(1443), format: a(3019) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: a(2145) }, minItems: { $ref: a(2871) }, uniqueItems: { type: a(1964), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: a(2871) }, required: { $ref: a(2024) }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: a(2517), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: a(2517), additionalProperties: { $ref: "#" }, propertyNames: { format: a(3019) }, default: {} }, dependencies: { type: a(2517), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: a(2024) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: a(1517), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: a(1443) }, contentMediaType: { type: "string" }, contentEncoding: { type: a(1443) }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: a(1142) }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: a(1142) }, not: { $ref: "#" } }, Pn = { $schema: Mc, $id: Lc, title: $c, definitions: Uc, type: Hc, properties: zc, default: !0 };
var jt, Gr;
function Vc() {
  const o = a;
  if (Gr) return jt;
  Gr = 1;
  var x = Pn;
  return jt = { $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", definitions: { simpleTypes: x.definitions[o(662)] }, type: o(2517), dependencies: { schema: [o(2033)], $data: [o(2033)], statements: [o(1738)], valid: { not: { required: [o(2329)] } } }, properties: { type: x[o(1684)].type, schema: { type: "boolean" }, statements: { type: o(1964) }, dependencies: { type: o(1517), items: { type: o(1443) } }, metaSchema: { type: o(2517) }, modifying: { type: "boolean" }, valid: { type: "boolean" }, $data: { type: o(1964) }, async: { type: o(1964) }, errors: { anyOf: [{ type: o(1964) }, { const: o(855) }] } } }, jt;
}
var Mt, Jr;
function Bc() {
  if (Jr) return Mt;
  Jr = 1;
  var o = /^[a-z_$][a-z0-9_$-]*$/i, x = jc(), t = Vc();
  Mt = { add: r, get: e, remove: s, validate: n };
  function r(i, c) {
    const d = K;
    var u = this[d(1757)];
    if (u[d(931)][i]) throw new Error(d(2468) + i + d(2362));
    if (!o[d(2266)](i)) throw new Error(d(2468) + i + " is not a valid identifier");
    if (c) {
      this[d(2295)](c, !0);
      var l = c[d(506)];
      if (Array[d(2573)](l))
        for (var f = 0; f < l[d(2910)]; f++) h(i, l[f], c);
      else h(i, l, c);
      var b = c[d(911)];
      b && (c[d(2073)] && this[d(1797)].$data && (b = { anyOf: [b, { $ref: d(1191) }] }), c[d(1857)] = this[d(1494)](b, !0));
    }
    u[d(931)][i] = u.all[i] = !0;
    function h(p, v, k) {
      const P = d;
      for (var N, T = 0; T < u[P(2910)]; T++) {
        var C = u[T];
        if (C.type == v) {
          N = C;
          break;
        }
      }
      !N && (N = { type: v, rules: [] }, u[P(816)](N));
      var I = { keyword: p, definition: k, custom: !0, code: x, implements: k[P(1115)] };
      N[P(2870)][P(816)](I), u[P(899)][p] = I;
    }
    return this;
  }
  function e(i) {
    const c = K;
    var d = this[c(1757)][c(899)][i];
    return d ? d[c(1118)] : this[c(1757)].keywords[i] || !1;
  }
  function s(i) {
    const c = K;
    var d = this[c(1757)];
    delete d[c(931)][i], delete d[c(2264)][i], delete d[c(899)][i];
    for (var u = 0; u < d[c(2910)]; u++)
      for (var l = d[u][c(2870)], f = 0; f < l.length; f++)
        if (l[f].keyword == i) {
          l.splice(f, 1);
          break;
        }
    return this;
  }
  function n(i, c) {
    const d = K;
    n[d(2311)] = null;
    var u = this[d(1046)] = this[d(1046)] || this[d(1494)](t, !0);
    if (u(i)) return !0;
    if (n[d(2311)] = u[d(2311)], c) throw new Error("custom keyword definition is invalid: " + this[d(2154)](u.errors));
    return !1;
  }
  return Mt;
}
const Zc = a(2110), Wc = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Kc = a(2519), Gc = "object", Jc = [a(2073)], Qc = { $data: { type: "string", anyOf: [{ format: a(3050) }, { format: a(500) }] } }, Xc = !1, Yc = { $schema: Zc, $id: Wc, description: Kc, type: Gc, required: Jc, properties: Qc, additionalProperties: Xc };
var Lt, Qr;
function ed() {
  const o = a;
  if (Qr) return Lt;
  Qr = 1;
  var x = uc(), t = fa(), r = lc(), e = wn(), s = Sn(), n = fc(), i = _c(), c = Oc(), d = Z0();
  Lt = p, p[o(560)][o(2033)] = v, p[o(560)].compile = k, p[o(560)][o(2771)] = P, p[o(560)][o(1932)] = N, p.prototype[o(1857)] = T, p[o(560)].getSchema = I, p[o(560)][o(531)] = D, p.prototype[o(1032)] = re, p[o(560)].errorsText = se, p[o(560)][o(2223)] = F, p[o(560)][o(2015)] = q, p[o(560)][o(2846)] = Dc();
  var u = Bc();
  p[o(560)].addKeyword = u[o(1604)], p[o(560)][o(3007)] = u[o(2620)], p[o(560)].removeKeyword = u[o(1369)], p.prototype[o(2295)] = u[o(2033)];
  var l = ha();
  p.ValidationError = l.Validation, p[o(966)] = l[o(2062)], p[o(551)] = c;
  var f = "http://json-schema.org/draft-07/schema", b = ["removeAdditional", o(373), "coerceTypes", "strictDefaults"], h = [o(523)];
  function p(_) {
    const A = o;
    if (!(this instanceof p)) return new p(_);
    _ = this._opts = d[A(1303)](_) || {}, Re(this), this[A(2166)] = {}, this[A(442)] = {}, this[A(2263)] = {}, this._formats = n(_[A(1918)]), this[A(2952)] = _[A(1506)] || new r(), this[A(651)] = {}, this[A(730)] = [], this[A(1757)] = i(), this[A(2516)] = H(_), _[A(1968)] = _[A(1968)] || 1 / 0, _[A(2524)] == A(476) && (_._errorDataPathProperty = !0), _[A(3065)] === void 0 && (_.serialize = s), this[A(1180)] = Me(this), _.formats && le(this), _[A(931)] && we(this), ue(this), typeof _[A(650)] == A(2517) && this[A(1932)](_[A(650)]), _[A(2259)] && this[A(954)]("nullable", { metaSchema: { type: A(1964) } }), fe(this);
  }
  function v(_, A) {
    const j = o;
    var J;
    if (typeof _ == "string") {
      if (J = this[j(612)](_), !J) throw new Error(j(2218) + _ + '"');
    } else {
      var Q = this[j(2223)](_);
      J = Q[j(2033)] || this._compile(Q);
    }
    var V = J(A);
    return J[j(1070)] !== !0 && (this[j(2311)] = J[j(2311)]), V;
  }
  function k(_, A) {
    const j = o;
    var J = this[j(2223)](_, void 0, A);
    return J[j(2033)] || this[j(2015)](J);
  }
  function P(_, A, j, J) {
    const Q = o;
    if (Array.isArray(_)) {
      for (var V = 0; V < _[Q(2910)]; V++) this[Q(2771)](_[V], void 0, j, J);
      return this;
    }
    var Y = this[Q(2516)](_);
    if (Y !== void 0 && typeof Y != Q(1443)) throw new Error(Q(1868));
    return A = t[Q(1651)](A || Y), Ce(this, A), this[Q(2166)][A] = this[Q(2223)](_, j, J, !0), this;
  }
  function N(_, A, j) {
    return this[o(2771)](_, A, j, !0), this;
  }
  function T(_, A) {
    const j = o;
    var J = _[j(2320)];
    if (J !== void 0 && typeof J != "string") throw new Error(j(2947));
    if (J = J || this[j(1797)].defaultMeta || C(this), !J) return this[j(3053)][j(405)](j(2633)), this[j(2311)] = null, !0;
    var Q = this[j(2033)](J, _);
    if (!Q && A) {
      var V = j(1543) + this[j(2154)]();
      if (this[j(1797)].validateSchema == j(2613)) this[j(3053)].error(V);
      else throw new Error(V);
    }
    return Q;
  }
  function C(_) {
    const A = o;
    var j = _._opts[A(650)];
    return _._opts[A(2687)] = typeof j == "object" ? _._getId(j) || j : _.getSchema(f) ? f : void 0, _._opts.defaultMeta;
  }
  function I(_) {
    const A = o;
    var j = O(this, _);
    switch (typeof j) {
      case "object":
        return j.validate || this._compile(j);
      case A(1443):
        return this[A(612)](j);
      case "undefined":
        return R(this, _);
    }
  }
  function R(_, A) {
    const j = o;
    var J = t[j(1346)][j(1175)](_, { schema: {} }, A);
    if (J) {
      var Q = J[j(1346)], V = J[j(1794)], Y = J[j(1620)], ce = x[j(1175)](_, Q, V, void 0, Y);
      return _._fragments[A] = new e({ ref: A, fragment: !0, schema: Q, root: V, baseId: Y, validate: ce }), ce;
    }
  }
  function O(_, A) {
    const j = o;
    return A = t[j(1651)](A), _[j(2166)][A] || _[j(442)][A] || _[j(2263)][A];
  }
  function D(_) {
    const A = o;
    if (_ instanceof RegExp) return M(this, this[A(2166)], _), M(this, this[A(442)], _), this;
    switch (typeof _) {
      case "undefined":
        return M(this, this[A(2166)]), M(this, this[A(442)]), this[A(2952)].clear(), this;
      case "string":
        var j = O(this, _);
        return j && this[A(2952)][A(1558)](j[A(2170)]), delete this[A(2166)][_], delete this._refs[_], this;
      case A(2517):
        var J = this._opts[A(3065)], Q = J ? J(_) : _;
        this._cache[A(1558)](Q);
        var V = this[A(2516)](_);
        V && (V = t[A(1651)](V), delete this[A(2166)][V], delete this[A(442)][V]);
    }
    return this;
  }
  function M(_, A, j) {
    const J = o;
    for (var Q in A) {
      var V = A[Q];
      !V[J(650)] && (!j || j[J(2266)](Q)) && (_[J(2952)][J(1558)](V[J(2170)]), delete A[Q]);
    }
  }
  function F(_, A, j, J) {
    const Q = o;
    if (typeof _ != Q(2517) && typeof _ != Q(1964)) throw new Error(Q(688));
    var V = this[Q(1797)][Q(3065)], Y = V ? V(_) : _, ce = this[Q(2952)][Q(2620)](Y);
    if (ce) return ce;
    J = J || this[Q(1797)].addUsedSchema !== !1;
    var ie = t[Q(1651)](this[Q(2516)](_));
    ie && J && Ce(this, ie);
    var xe = this._opts[Q(1857)] !== !1 && !A, Le;
    xe && !(Le = ie && ie == t.normalizeId(_[Q(2320)])) && this[Q(1857)](_, !0);
    var Ae = t.ids.call(this, _), He = new e({ id: ie, schema: _, localRefs: Ae, cacheKey: Y, meta: j });
    return ie[0] != "#" && J && (this[Q(442)][ie] = He), this[Q(2952)].put(Y, He), xe && Le && this[Q(1857)](_, !0), He;
  }
  function q(_, A) {
    const j = o;
    if (_[j(2602)])
      return _.validate = V, V[j(1346)] = _[j(1346)], V[j(2311)] = null, V[j(1794)] = A || V, _[j(1346)].$async === !0 && (V[j(1070)] = !0), V;
    _[j(2602)] = !0;
    var J;
    _[j(650)] && (J = this[j(1797)], this[j(1797)] = this[j(1180)]);
    var Q;
    try {
      Q = x[j(1175)](this, _[j(1346)], A, _[j(2092)]);
    } catch (Y) {
      throw delete _[j(2033)], Y;
    } finally {
      _[j(2602)] = !1, _[j(650)] && (this[j(1797)] = J);
    }
    return _.validate = Q, _[j(737)] = Q[j(737)], _[j(1257)] = Q[j(1257)], _[j(1794)] = Q[j(1794)], Q;
    function V() {
      const Y = j;
      var ce = _.validate, ie = ce.apply(this, arguments);
      return V[Y(2311)] = ce[Y(2311)], ie;
    }
  }
  function H(_) {
    const A = o;
    switch (_[A(3e3)]) {
      case A(1159):
        return G;
      case "id":
        return L;
      default:
        return z;
    }
  }
  function L(_) {
    const A = o;
    return _[A(2922)] && this.logger[A(405)](A(2608), _[A(2922)]), _.id;
  }
  function z(_) {
    const A = o;
    return _.id && this.logger[A(405)]("schema id ignored", _.id), _.$id;
  }
  function G(_) {
    const A = o;
    if (_[A(2922)] && _.id && _[A(2922)] != _.id) throw new Error(A(1733));
    return _[A(2922)] || _.id;
  }
  function se(_, A) {
    const j = o;
    if (_ = _ || this.errors, !_) return j(2540);
    A = A || {};
    for (var J = A[j(763)] === void 0 ? ", " : A[j(763)], Q = A[j(2750)] === void 0 ? j(571) : A[j(2750)], V = "", Y = 0; Y < _[j(2910)]; Y++) {
      var ce = _[Y];
      ce && (V += Q + ce[j(2465)] + " " + ce[j(2732)] + J);
    }
    return V[j(2527)](0, -J[j(2910)]);
  }
  function re(_, A) {
    const j = o;
    return typeof A == j(1443) && (A = new RegExp(A)), this[j(2243)][_] = A, this;
  }
  function ue(_) {
    const A = o;
    var j;
    if (_[A(1797)][A(2073)] && (j = Yc, _[A(1932)](j, j[A(2922)], !0)), _._opts[A(650)] !== !1) {
      var J = Pn;
      _[A(1797)][A(2073)] && (J = c(J, h)), _[A(1932)](J, f, !0), _._refs[A(939)] = f;
    }
  }
  function fe(_) {
    const A = o;
    var j = _[A(1797)].schemas;
    if (j)
      if (Array[A(2573)](j)) _.addSchema(j);
      else
        for (var J in j) _[A(2771)](j[J], J);
  }
  function le(_) {
    const A = o;
    for (var j in _[A(1797)][A(1408)]) {
      var J = _._opts[A(1408)][j];
      _[A(1032)](j, J);
    }
  }
  function we(_) {
    const A = o;
    for (var j in _[A(1797)][A(931)]) {
      var J = _[A(1797)][A(931)][j];
      _.addKeyword(j, J);
    }
  }
  function Ce(_, A) {
    const j = o;
    if (_[j(2166)][A] || _[j(442)][A]) throw new Error('schema with key or id "' + A + j(2574));
  }
  function Me(_) {
    const A = o;
    for (var j = d.copy(_[A(1797)]), J = 0; J < b[A(2910)]; J++) delete j[b[J]];
    return j;
  }
  function Re(_) {
    const A = o;
    var j = _._opts[A(3053)];
    if (j === !1) _[A(3053)] = { log: Je, warn: Je, error: Je };
    else {
      if (j === void 0 && (j = console), !(typeof j == A(2517) && j[A(2613)] && j.warn && j.error)) throw new Error(A(1984));
      _[A(3053)] = j;
    }
  }
  function Je() {
  }
  return Lt;
}
var xd = ed();
const td = Ks(xd);
class ad extends sc {
  constructor(x, t) {
    const r = a;
    var e;
    super(t), this[r(2918)] = x, this._capabilities = (e = t == null ? void 0 : t[r(717)]) !== null && e !== void 0 ? e : {}, this._instructions = t == null ? void 0 : t[r(2097)], this.setRequestHandler(cn, (s) => this[r(1674)](s)), this[r(1977)](dn, () => {
      const s = r;
      var n;
      return (n = this[s(2558)]) === null || n === void 0 ? void 0 : n[s(1175)](this);
    });
  }
  registerCapabilities(x) {
    const t = a;
    if (this[t(1130)]) throw new Error(t(1626));
    this[t(707)] = nc(this[t(707)], x);
  }
  assertCapabilityForMethod(x) {
    const t = a;
    var r, e, s;
    switch (x) {
      case "sampling/createMessage":
        if (!(!((r = this._clientCapabilities) === null || r === void 0) && r[t(382)])) throw new Error(t(435) + x + ")");
        break;
      case t(595):
        if (!(!((e = this[t(1437)]) === null || e === void 0) && e[t(1822)])) throw new Error(t(1806) + x + ")");
        break;
      case t(379):
        if (!(!((s = this[t(1437)]) === null || s === void 0) && s[t(1463)])) throw new Error(t(611) + x + ")");
        break;
    }
  }
  assertNotificationCapability(x) {
    const t = a;
    switch (x) {
      case t(2640):
        if (!this[t(707)][t(1804)]) throw new Error("Server does not support logging (required for " + x + ")");
        break;
      case "notifications/resources/updated":
      case t(555):
        if (!this._capabilities[t(804)]) throw new Error(t(1643) + x + ")");
        break;
      case "notifications/tools/list_changed":
        if (!this[t(707)][t(1077)]) throw new Error(t(1843) + x + ")");
        break;
      case "notifications/prompts/list_changed":
        if (!this[t(707)][t(1890)]) throw new Error(t(1982) + x + ")");
        break;
    }
  }
  assertRequestHandlerCapability(x) {
    const t = a;
    switch (x) {
      case t(648):
        if (!this[t(707)][t(382)]) throw new Error(t(389) + x + ")");
        break;
      case t(2267):
        if (!this[t(707)][t(1804)]) throw new Error(t(2831) + x + ")");
        break;
      case t(848):
      case t(2806):
        if (!this[t(707)][t(1890)]) throw new Error("Server does not support prompts (required for " + x + ")");
        break;
      case "resources/list":
      case "resources/templates/list":
      case t(2309):
        if (!this[t(707)][t(804)]) throw new Error("Server does not support resources (required for " + x + ")");
        break;
      case t(3063):
      case t(791):
        if (!this[t(707)][t(1077)]) throw new Error("Server does not support tools (required for " + x + ")");
        break;
    }
  }
  async [a(1674)](x) {
    const t = a, r = x[t(2863)][t(2182)];
    return this[t(1437)] = x.params.capabilities, this[t(512)] = x[t(2863)].clientInfo, { protocolVersion: a2[t(416)](r) ? r : en, capabilities: this[t(1208)](), serverInfo: this[t(2918)], ...this[t(2733)] && { instructions: this[t(2733)] } };
  }
  [a(992)]() {
    return this[a(1437)];
  }
  [a(835)]() {
    return this[a(512)];
  }
  [a(1208)]() {
    return this._capabilities;
  }
  async [a(1319)]() {
    const x = a;
    return this.request({ method: x(1319) }, ta);
  }
  async createMessage(x, t) {
    const r = a;
    return this[r(714)]({ method: r(648), params: x }, gn, t);
  }
  async elicitInput(x, t) {
    const r = a, e = await this[r(714)]({ method: r(595), params: x }, yn, t);
    if (e[r(362)] === r(710) && e[r(1525)]) try {
      const s = new td(), n = s.compile(x[r(2294)]);
      if (!n(e[r(1525)])) throw new _0(y0[r(2801)], r(1092) + s[r(2154)](n[r(2311)]));
    } catch (s) {
      throw s instanceof _0 ? s : new _0(y0.InternalError, r(973) + s);
    }
    return e;
  }
  async listRoots(x, t) {
    const r = a;
    return this[r(714)]({ method: r(379), params: x }, vn, t);
  }
  async [a(2734)](x) {
    const t = a;
    return this[t(766)]({ method: t(2640), params: x });
  }
  async [a(2899)](x) {
    return this[a(766)]({ method: "notifications/resources/updated", params: x });
  }
  async [a(2775)]() {
    return this[a(766)]({ method: "notifications/resources/list_changed" });
  }
  async [a(2572)]() {
    const x = a;
    return this[x(766)]({ method: x(2735) });
  }
  async [a(565)]() {
    return this[a(766)]({ method: "notifications/prompts/list_changed" });
  }
}
class rd extends Error {
  constructor(x, t) {
    const r = a;
    super(r(491) + x + r(412) + t + "ms"), this.name = r(1929);
  }
}
const px = /* @__PURE__ */ new Map();
class sd {
  constructor(x) {
    const t = a;
    if (this[t(2577)] = [], this[t(1318)] = Date[t(2356)](), px[t(2239)](x.posterIdentifier)) {
      const i = px[t(2620)](x[t(1723)]);
      i && i.close();
    }
    this[t(1723)] = x[t(1723)], this.messagePoster = x.messagePoster, this[t(2016)] = x[t(2016)], this.removeMessageEventListener = x[t(2271)];
    const r = x[t(719)] ?? x.heartbeatTimeout, e = x.heartbeatTimeout ?? x[t(719)], s = this[t(1652)](r), n = this.normalizeDuration(e);
    s && n && (this[t(719)] = s, this[t(2104)] = n), this[t(2618)] = x[t(2618)] ?? !1, px[t(2454)](this[t(1723)], this), this.listenMessageCallback = this[t(521)][t(2381)](this), this[t(1361)] = this[t(2016)](this[t(521)]);
  }
  [a(1652)](x) {
    if (typeof x === a(1730) && !(!Number.isFinite(x) || x <= 0))
      return x;
  }
  [a(2192)]() {
    const x = a;
    return typeof this[x(719)] == "number" && typeof this[x(2104)] === x(1730);
  }
  [a(521)](x) {
    const t = a;
    if (x.posterIdentifier === this[t(1723)]) {
      if (x[t(1373)] === "sdppp-heartbeat") {
        x[t(506)] === t(1319) && !this.debugDisableHeartbeatResponse ? this[t(2445)]({ channel: "sdppp-heartbeat", posterIdentifier: this[t(1723)], type: t(434), timestamp: x.timestamp }) : x[t(506)] === t(434) && (this[t(1318)] = Date[t(2356)](), this[t(457)] && (clearTimeout(this.heartbeatTimeoutTimer), this[t(457)] = void 0));
        return;
      }
      x[t(1373)] === t(1768) && (this[t(1981)] && "payload" in x ? this[t(1981)](x[t(1839)]) : t(1839) in x && this[t(2577)].push(x[t(1839)]));
    }
  }
  async start() {
    const x = a;
    for (; this[x(2577)].length > 0; ) {
      const t = this[x(2577)][x(613)]();
      t && this[x(1981)] && this[x(1981)](t);
    }
    this[x(2192)]() && this[x(1381)]();
  }
  [a(1381)]() {
    const x = a;
    if (!this.isHeartbeatEnabled()) return;
    const t = this[x(719)], r = this[x(2104)];
    this[x(2072)](), this[x(1327)] = setInterval(() => {
      const e = x, s = Date[e(2356)]();
      this.messagePoster({ channel: e(2298), posterIdentifier: this[e(1723)], type: "ping", timestamp: s }), this[e(457)] = setTimeout(() => {
        const n = e, i = new rd(this[n(1723)], r);
        this.onerror && this.onerror(i);
      }, r);
    }, t);
  }
  [a(2072)]() {
    const x = a;
    this[x(1327)] && (clearInterval(this[x(1327)]), this[x(1327)] = void 0), this[x(457)] && (clearTimeout(this[x(457)]), this[x(457)] = void 0);
  }
  async [a(1237)](x, t) {
    const r = a;
    this[r(2445)]({ channel: "sdppp", posterIdentifier: this[r(1723)], payload: x });
  }
  async close() {
    const x = a;
    this[x(2072)](), px[x(1239)](this[x(1723)]), this[x(2271)](this[x(1361)]);
  }
}
function Tx() {
  const o = ["endTurn", "minItems", "prompts/list", " , message: 'should be equal to constant' ", "适配至选区", "done", "color: inherit", "Running", " = true; if (", "widgetable", "Stop", " */", " &&   Object.prototype.hasOwnProperty.call(", "Set text to layer", "pluralSeparator", "Layer", "Invalid proxy forwarding: current node ", "interpolationkey", " ? ", "getNodeIds", "executing", "SDPPP may not be installed or version mismatch (404)", "显示发送的图片", "Request handler failed: ", "getTransportToNode", "passthrough", "argumentsError", "Server does not support logging (required for ", " != 'number') { ", "toResolveHierarchy", "ltr", "Create document failed", "errs_", "int", "&amp;", "_regex", "Selection", "actions:util", "acq", "Running...", "#FF3333", "userDefinedNsSeparator", "compileAsync", " characters' ", "selectColor", "store", "Cycle detected: ", "Please select AI service", "作为智能对象导入", "Current layer boundary", "ajv", "function", "ComfyUI - {{workflowName}}", " + ']'", "nonnegative", "isDuration", " validate.errors = vErrors; ", "getHandlerTypes", "URI can not be parsed.", "params", "graphChanged", " if (", "提示词", "_onerror", "Connect", "$t(", "rules", "#/definitions/nonNegativeIntegerDefault0", "任务未完成，当前状态: {{status}}", "size", "Full Canvas", "清空所有", "shorter", "title", "暂无视频", "  for (var ", "当前没有活动图层", "equal", "exclusive", "maxRetries", "clearCache", "outputType", "item", "removeCatch", "maxDate", "default", "setupNodeBindings", "Error handling incoming message:", "timeoutId", "_parseAsync", "image", " (async", "returnObjects", "/type", "charAt", "sendResourceUpdated", "onerror", "requestsHandled", "flatten", "#00CC66", "getRule", "customRule", "dirty", "failed", "Masked", "notificationHandlers", "length", "Upload failed: ", "weeks", "获取图片", "required", "anyOf", " , schema: ", "Local video", "_serverInfo", "requestHandlers", "sdpppX2", " not found in graph definition", "$id", "WebkitAppearance", "refVal[", "Enter Google API Key", "readOnly", "Create document for preview", "Execute", "Number must be a multiple of ", "regexp", "missed to pass in variable ", "正在运行", "边界预览", "无法从文件创建文档", ".async; ", "ucs2length", 'key "', "获取选区失败", "messageHandlers", "yih", "Current", "safeParseAsync", " , message: 'should be equal to one of the allowed values' ", "+Alt 按选区裁剪", "Outgoing request interceptor failed: ", "OpenAI - Image Edit", "$schema must be a string", "widgetableStructure", "hasPath", "Fit to selection", "filter", "_cache", "messages", "ZodDefault", "ZodBoolean", "No workflow selected", "false schema", "mcp-mesh-router", "exclType", "canReachThroughConnectedNodes", " , params: { limit: ", " var errors = 0;     ", "getNodes API 调用失败 - HTTP 错误，状态: {{status}}", "assertNotificationCapability", "?\\]?$", "parsedType", "RH Coins:", "ComfyUI加载中...", ") {   var err =   ", "aao", "Layer {{0}} is not a group", "Action ", "null", "269336uXJulD", ".validate;", "queue_remaining", "opts", "subscribe", "[^0-9]", "util", "NOT_QUERY", "__nwjs", "遮罩应用后未得到资源", "getItem", "_pendingDebouncedNotifications", "McpError", "exclusiveMinimum", " + '\\']'", "isOptional", "File", "暂无可用工作流。", "ZodUndefined", "init", "removeRequestHandler", "validation", "wait", " = validate.schema", "未配置上传器", "创建操作需要矩形坐标", "schemaId", "maxSize", "Stop auto run", "over", "#00CC33", "changeTracker", "新建文档", "getKeyword", "currentNodeId", "assistant", "graphToPrompt", "自定义AI工作流引擎", ") && (missing", "isClone", " }; return validate;", " properties' ", "next", "Fetch current layer with primary boundary", "nestingRegexp", "regex", "[\\+\\-\\.]", " + '", "[A-Za-z0-9\\-\\.\\_\\~", "comfy side transport.onerror", "Failed to get task status", "cancel", " != 'boolean') ", "escape", "getFallbackCodes", "errorMap", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", "safeParse", "uri", "unknownKeys", "keyType", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "getSuffix", "]; ", "Connection closed", "utils", "keySeparator", " } else {  for (var ", "[0-9]", "smaller than or equal to", "isNullable", "req_", " var i = ", "_progressHandlers", "24DtmMPo", "Run", "relative-json-pointer", "getDataByLanguage", "executeHandlerAsync", "logger", "initImmediate", " = false; ", "自动同步: 开启", "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "Please select the image to get", "运行了 {{duration}} 秒，{{message}}", "hasOutgoingNotificationInterceptor", "cleanupConnection", "Click to restore default mask", "tools/call", "当前任务数:", "serialize", " when property ", " instanceof RegExp) && ", "code", "get_layer_info requires layer_identify", "objectValues", ", received ", "unicodeSupport", "action", "素材同步中", "resourceName", "Generating", "Internal error", "ars", "removeMiddleware", "         , parentSchema: validate.schema", "preload", "++) { if (", "async", "useDefaults", "formData", "' + ", "errSchemaPath", "JWT", "failedLoading", "roots/list", "_limitLength", "finite", "sampling", "新建模板", "read", "urn", "_cached", "Sending...", "propsKeywords", "Server does not support sampling (required for ", "order", "createWithPreprocess", "method", "setItem", "context", "checkDataTypes", "Choose File", " === null) ", "registerProxyForwardHandler", "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "hasDefaultValue", "#66CC33", " % 1)", "Validation", "resolvedOptions", "warn", "nestingPrefix", "performWorkflowReset: ", "setupAbortHandler", "))) { ", "languageDetector", "#00CC99", " after ", "deprecate", "getAccountStatus API failed - HTTP error! status: {{status}}", ") ? ", "includes", "MAX_SAFE_INTEGER", "getUsedParamsDetails", "使用当前选区边界", "Sending image...", "ComfyUI加载失败，HTTP状态码：{{code}}", "./api/manager/reboot", "checkDataType", "ParseError", "charCodeAt", "strict", "++) { vErrors[", "_notificationHandlers", "Error", "fallbackLng", "comfy-uxp", "state", " } if (", "pong", "Client does not support sampling (required for ", "parseAsync", "mcpMesh", "_setupTimeout", "#0099CC", "ZodObject", "newdoc_canvas", "_refs", " else ", " = 'else'; ", "some", "Empty selection mask", "Failed to check workflow state changes:", "usedParams", " self._opts.$comment(", "more", "Mask apply returned empty resource", "|0?0?", "+Alt 反转遮罩", "timeout", "waiters", " , params: { ref: '", "heartbeatTimeoutTimer", "mode", " = '' + ", "emergency", "画布范围", "Failed to send cancellation: ", "regExpQueue", "[^\\%\\:]", "fcName", "Get selection", " , params: { additionalProperty: '", "#3300FF", "Crop", "Save", "  }  ", "uxpHost", "executeOutgoingNotificationInterceptor", "addResourceBundle", "process", "property", "Input Image", "maxParallelReads", "请选择AI服务", "Negative Crop", "Already connected to node ", "Uncaught error in notification handler: ", "ZodNumber", "File not found: {{path}}", " || Object.keys(", '.schemaPath = "', "适配至画布", "onTimeout", "originalError", "#CCCC00", "Heartbeat timeout for poster ", "网关超时 (504)", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", " var schema", "outgoingRequestInterceptors", "maxLength", "以主图边界获取画布", "[A-Za-z]", "自动获取中…", "json-pointer", "outputs API 调用失败 - {{reason}}", "[\\:\\@]", "服务器错误 (500)", "init: no languageDetector is used and no lng is defined", "_cachedPath", "type", "allKeys", "URN can not be parsed.", " + ", "resolve", " = defaults[", "_clientVersion", "#33CCFF", "Document {0} not found", "pluralRulesCache", "positive", ` , message: 'should pass "`, "image/png", "relative", "ZodSymbol", "listenMessageCallback", "yrs", "/properties", ") {  for (var ", "stopSequence", "toFixed", "origin", "Boundary preview", "emoji", "Invalid enum value. Expected ", "removeSchema", `"' `, " already exists, which would be overridden", "buildDirectedAdjacencyList", "hbo", " var async", "#66CC00", "race", "Comfy Manager未安装，无法重启", "Login Successful", "正在连接 ComfyUI...", "joinArrays", "unknown", "max", "promise", "设为选区", "Note", "keys", "非法的名称: {{0}}", "step", "$dataMetaSchema", "user", "abs", "too_big", "notifications/resources/list_changed", "_getOrReturnCtx", "Mask resource is missing", "loadGraphData", "backendConnector", "prototype", "uniqueItems", "openWorkflow: ", "reconnecting", " levels up, current level is ", "sendPromptListChanged", "acx", ".additionalItems", "getData", "ZodReadonly", "statusText", "data", "3BIImrA", "Values", "addCached", "ydd", "hasLoadedNamespace: i18n.languages were undefined or empty", "notifications/prompts/list_changed", "Create layer failed", " , params: { property: '", "#FF3399", "保存提示词模板失败。", "1701966asSQmn", "This node defaults to current layer + mask", "missingKeyHandler", "merge", "如何获取APIKey和API Secret", "propertyNames", "initializeResponseQueue", "broadcastManager", "unionErrors", " = +", "exception_message", "&quot;", "_def", "elicitation/create", "returnDetails", "已添加遮罩", " not implemented for node ", "Your Workflows", "execution_success", "createGlobalDispatcherForType", "def", " -> ", '" as the namespace "', "ComfyManager not found, cannot reboot", "Click to get RunningHub APIKey", "Invalid name: {{0}}", "updateMissing", "locale", "{3}", "Client does not support listing roots (required for ", "getSchema", "shift", "secure", " in ", "Invalid boundary type: {{type}}", "SDPPP 2.0 不再需要此节点", " items' ", "Use entire canvas", "pendingCount", "', missingProperty: '", "missingSchema", "); if (", " for (var ", "<errors; ", "range", `Get image &
Crop selection mask`, "Task execution failed: {{error}}", "执行失败", "contextSeparator", "云端推荐：", "图层 {{0}} 不是一个组", "Images Per Batch", "fallback", "position", "i18next/PATH_KEY", "Canvas boundary", "Guest login successful", "connected", ") ) ", "pop", "禁止访问 (403)", "+Shift 调整更多选项；Ctrl 单次获取。", "#CC3366", "substr", "cycles", "isLanguageChangingTo", "sampling/createMessage", "Manage reusable prompt snippets for Comfy Simple workflows.", "meta", "_loadingSchemas", "#3333FF", "concat", "should have required property \\'", "Failed to update the {{part}} prompt: ComfyUI connection is not ready.", "###", " = formats[", "withTimeout", "=== Options ===", "Copy", "rejectImage", "simpleTypes", "How to get APIKey and API Secret", "Please select the position to send image", "isSupportedCode", "当前图层除外", "addResources", "getHandler", "DEBUG", " , message: 'should match exactly one schema in oneOf' ", "Idle", "reloadResources", "Main Image", "[ ]*{", "cuid2", "#FF0099", "Positive Prompt", "暂无预览内容", "#CC3399", "NumberFormat", "Template saved.", "选择文件", "outputs API failed - HTTP error! status: {{status}}", " , message: 'should contain a valid item' ", "not", "completed", "nid", "schema should be object or boolean", "setLimit", "正在创建任务...", "访客登录成功", "jsonStringifyReplacer", "logout", "删除模板", " == 'boolean') ", "assertNever", "No first related layer in {{0}}", "parent", "Refresh workflow list", "minutes", "_errors", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "我的模板", '"object"', "parentDataProperty", "Template name already exists.", "_capabilities", "Template name", "Failed to load workflows.", "accept", " ( ( ", "cidr", "workflow", "request", "setupStreamResponseHandler", " , params: { format:  ", "capabilities", "Leave empty for no limit", "heartbeatInterval", "markDisconnected", "Source", "hasLoadedNamespace", "Current Layer", "setupStreamProtocolHandlers", " ? await ", "executeOutgoingRequestInterceptor", "]; var ", "25[0-5]", "canvas", "_compilations", "prd", "_unknown", "' , dataPath: (dataPath || '') + ", "same-document", "status", "[object Function]", "refs", ".length <= ", "date-time", "状态检查已中止", "toLoad", "match", "Sending all images...", " = true;  ", "-arab", " is loaded but ", "at most", "[\\:]", "cleanup", "detail", "exec", ".validate", "notificationsIntercepted", "没有活动文档", "[BroadcastManager] Error forwarding ", "openWorkflows", "Creating task...", "$$$$", "smartobject", "types", "Workflow stopped by user", "shared", "separator", "清除参考线框架", "ignore", "notification", "197588lxybkP", "text", "Received a progress notification for an unknown token: ", "endsWith", '" for languages "', "tried", "joinAs", "粘贴你的模型名称", "ref/prompt", "[BroadcastManager] Error forwarding broadcast:", "validate.schema", " , (dataPath || '')", "排队等待", "_requestHandlerAbortControllers", "inlineRef", " , params: {} ", "Get API Key", "setPrototypeOf", "Failed to request initial states after connecting to ", "#0033FF", "图层 {{layerName}}", "en-US", "（会员专属）", " = false; else {", "tools/list", "#33CC00", " = errors , ", "gte", "querySelector", "Select", "inclusive", "尺寸限制 (px)", "retryTimeout", "escapeFragment", "notifications/cancelled", "Are you sure you want to delete this template?", '" (see option extendRefs)', "resources", " for nesting ", " } else {  errors = ", "entries", "Area AI reads from; controls max image size", "Failed to fetch account status", "fatal", " = true; ", "extensionManager", " < ", " var missing", "queue", "push", "start", "cloneInstance", "WARNING DEPRECATED: ", "_meta", " ucs2length(", "currentOnly", "uiWeight", "1992324RqFbmG", "debug", "typeof ", "time", "UUID is not valid.", ")) ", "getAccountStatus API 调用失败 - {{reason}}", "setInterval", "thisServer", " return data; ", "No images yet", "getClientVersion", "customRules", "157527XuiofL", "parent schema must have all required keywords: ", "显示预览框 ({{count}}张图片)", "precheck", "Model", "missingInterpolationHandler", "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", " !== ", 'Invalid input: must start with "', "Host's domain name can not be converted to ASCII via punycode: ", "normalize", "prompts/get", "setProperty", " var validate = ", "unescapeSuffix", "description", "Disk", "Node definition not found for ", "full", "loadOne", "then", "More actions", ".length; ", "broadcastReceived", "isFinite(", "source", "选区遮罩", "detect", "compositeRule", "reason", ".dataPath === undefined) ", "%[89A-Fa-f]", "async format in sync schema", ".call(this, ", "isFinite", "translate", "res", "formatLanguageCode", "out", " if (false) { ", "getNeighbors", "floor", "preprocess", "stream", "处理进度 {{processed}}/{{total}}", "notificationQueue", ")) {  ", "输出至：", "移除槽位", "All", "#CC3333", "__proto__", "setOutgoingRequestInterceptor", "提示词内容", "workflows/", "Processing {{processed}}/{{total}}", "Empty", "var default", "reboot", "is an invalid additional property", "ComfyUI loading...", "toASCII", "custom", "Unknown", "[\\:\\@\\/\\?]", "definitions", "addPostProcessor", "properties ", " && ", "  errors = ", "OpenAI/Google format API", "无效的边界类型: {{type}}", "选择边界", ".additionalProperties", "metaSchema", " , schema: false , parentSchema: validate.schema", "ref/resource", ") continue; ", "yud", "mesh:comfy", '" resolves to more than one schema', "graphInstance", "基础 URL", "setupStreamRequestHandler", "setRequestHandler", "react", "hasEdge", "ZodUnknown", "nodeIndexes", " , params: { pattern:  ", "formatters", "Quick", "Upload failed, please try again", "aborted", "keywords", "More Settings", "未选择工作流", "Cloud:", "invalid_arguments", "getTime", " = new RegExp(", "hasOwnProperty", "http://json-schema.org/schema", "[vV]", "_options", "received", "hasRequestHandler", "getValidEnumValues", "processors", "usedNS", "__connection_established", "请输入您的RunningHub API Key", "minDate", "Fetch canvas with current-layer boundary", "IPV6ADDRESS", "join", "unescapeComponent", "addKeyword", "video", "Fetch current layer with current-layer boundary", "ZodRecord", "   var err =   ", "留空表示不限", "Error compiling schema, function code:", "options", "AI Generation Task", "detectCycles", "setState", "unwrap", "MissingRefError", " = true , j; if (i > 1) { ", "local", "ConnectionClosed", " : ", "_getInvalidInput", '"; } ', "Error validating elicitation response: ", "unicode", "capacity", "Gateway timeout (504)", "Invalid graph definition: ", "comfy", "Layer not found: {{0}}", "async keyword in sync schema", " } else if ( ", "exports", ", limit: ", "defaultError", "Please provide prompt content.", "formatter", "pattern", " == '", "Send to Selection", "is a required property", "通道连接中...", "getClientCapabilities", "当前图层范围", "Running for {{duration}} secs, {{message}}", "alwaysSet", "useDefault", " && ( ", "Shortcut selection feature requires login", "sourceNodeId", "Generating...", ".data = ", "hasAction", "substring", "getCurrentNodeId", " , params: { passingSchemas: ", "loadResources", "未授权 (401)", "选择文件失败，请重试", "Quality {{percent}}%", "schemaUnknownRules", "promptIds", " == errors) { ", "checkState", "uxp", "Canvas", "2024-10-07", " ) {   ", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "当前选项：文件", "高级选图", "插件可能正在拦截 PS 快捷键... ", "clone", "pbt", "Username: {{username}}", "Output to:", " validate.errors = vErrors; return false; ", "Please provide a template name.", "获取工作流列表失败。", ").length ", "use", "stats", "addFormat", "strictKeywords", "[j])) { ", "nonpositive", "RunningHub - {{webappId}}", "common", "isRequest", "api", "%c ", " , validate.schema", "设为当前图层", "actions", "ads", "createStreamState", "_validateKeyword", "快捷键选图功能仅登陆后可用", "ZodDiscriminatedUnion", "isInitialized", "\\:\\:", "Outpaint (positive crop)", ".type || 'string'; if (", "datetime", "fast", "async schema referenced by sync schema", "reject", "Enter a pixel value greater than 0", "_error", "Gemini 2.5 Flash 图像", "valueSchema", "prevValid", "选区除外", " } ", "workflowManager", "Received host version from UXP:", "valueOf", "[object RegExp]", "executed", "MethodNotFound", "$async", "save", "找不到图层: {{0}}", " || ", "invalid_union_discriminator", "上传中，如果图片过大，可能会卡顿...", "coerceTypes", "tools", `Get image &
Limit image boundary`, "Invalid function return type", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "$comment", "avl", "Import as New Document", "hours", "getConnectedNodeIds", "key '", "maxTokens", "跳转到最后一个", " if (schema", "execution_interrupted", "Save and run immediately", "Elicitation response content does not match requested schema: ", "Unsupported image input type", "_refinement", "（为空）", "ajp", "Get layer info", "broadcast", "schemaErrorMap", "sd-ppp-static/sdppp_images/", "Smart Object Layer", "Negative Prompt", "Import from disk", "version", "sqr", "at least", "_requestMessageId", "My Templates", ") { ", "assertRequestHandlerCapability", "strictNumbers", "getNodeStore", "ulid", " = typeof ", "implements", " = [", "Action {{0}} was not found", "definition", "reload", "zero", "fewer", ".pi-sign-out", "nss", "正在等待图片上传...", "assertEqual", "apd", "parseInt", "fromCharCode", "getTransportInternal", "transport", "正在发送图像...", "getNodes API 调用失败 - {{reason}}", "getOwnPropertyNames", "skipKeywords", "isRoot", "?\\:\\:", "ZodSet", "label", "Retry", "同步当前内容", "items", "#/definitions/schemaArray", "resolveComponents", "Loading...", "describe", "ZodDate", "under", "reference", "var division", "当前选项：画布", "services", "Cannot access property/index ", "json", "rtl", "_onnotification", "second", "ComfyUI connection not configured yet. Please set the address first.", "RequestTimeout", "auto", "Failed to update the {{part}} prompt: no matching widget binding.", "element", "ComfyUI not ready", ") {   ", "resources/list", "Success", "It seems you are nesting recursively key: ", "\\%25|\\%(?!", "Template applied.", "storage", "connectionManager", "defineProperty", "_limitProperties", "relativetime", "isBase64url", "call", "New Document", " element(s)", "newlayer_curlayer", "getLanguagePartFromCode", "_metaOpts", " from id ", "自动同步未打开", "failing", "创建文档失败", "$el", "idx", "append", "unrecognized_keys", "symbol", "ids", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "node_id", "exists", "Image input and prompt are required", "oneOf", "comfy_api_key", "Failed to fetch form data", " , rootData )  ", "选择素材来源", "var pattern", "Graph must have at least one node", "addResource", "hasLoadedNamespace: i18next was not initialized", "status API 调用失败 - HTTP 错误，状态: {{status}}", "IPV4ADDRESS", "ZodAny", "invalid_enum_value", "getCapabilities", "sdppp_assets", "ZodTuple", "Shift-click or right-click to toggle auto send", "AI使用的区域与最大尺寸控制", "#FF9933", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", "sdpppHandshake", "i18nFormat", "seconds", "Failed to create document from file", "每批图像数", "skipOnVariables", "root.refVal[0]", "loaded", "cimode", "nodeProxies", "_processInputParams", "revoke", "isTransportReady", "#FF3366", ".length > ", "spa", "findPath", "重启ComfyUI失败", "resources/unsubscribe", "getImage", "Invalid date", "[\\:\\/\\?\\#\\[\\]\\@]", "send", "当前选项：图层", "delete", "使用整个画布", " in key: ", "getFixedT", " = 0; ", " not found on node ", "Desire bounds is null", "usedLng", "获取账户信息失败", "observers", "Cannot forward to node ", "multipleOfPrecision", "ZodUnion", "jwt", "#33CC66", ' !== "object")', "获取像素失败: {{0}}", "customErrors", "refVal", "AbortError", "setupGraphStoreSync", "greater than ", "fallbackRequestHandler", "millisecond", "valueType", " validate.errors = [", "years", " , message: '", "#FF6633", `" keyword validation' `, ".length ", "segment", "ifClause", 'unknown format "', "less than", "#33CC33", " , data: ", "base64", "~standard", "]] === undefined ", "./api/userdata/workflows%2F.index.json", "以主图边界获取当前图层", "ignoreJSONStructure", " (Members only)", "=== 选项 ===", "_parseSync", "整个画布", "&filename=", "sam", "select", "sessionId", "brand", " = errors;var ", "/then", "assertIs", "Node definition not found for current node ", " not found for node ", "(typeof ", "unsetOutgoingNotificationInterceptor", '" ignored in schema at path "', "&gt;", "Required", "sdppp/broadcast", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "copy", "exact", "zod", "asyncIterator", "useColors", "schemaHasRulesExcept", "uri-reference", "getNodes API failed - {{reason}}", " = true;", "postProcess", " = RULES.custom['", "缺少主图资源", "++) { var ", "indexOf", "[GraphStoreSynchronizer] Error processing store update for ", "lastPongReceived", "ping", "Google Gemini 图像生成器", " , ", "更多操作", " != 'number' || ", "Rescoped", "firebug", " , params: { allowedValues: schema", "heartbeatTimer", ".patternProperties", "{0,1}", "Date must be ", "; if (", "level", "拖拽图片到此处松开完成上传", "Confirm", `((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)`, "PluralRules", "[^\\%\\[\\]\\:]", " if (! ", "ruleErr", "hasResourceBundle", "ZodOptional", "uuid", "returnedObjectHandler", "刷新工作流列表", "postProcessor", "schema", " === null || (", "initializeProducer", "文件未找到: {{path}}", "./sdppp_upload2", "actionHandlers", "Modify", "获取任务状态失败", ") {  var err =   ", "changeLanguage", "getProtocol", "resource_link", "Select layer", "([+-]\\d{2}:?\\d{2})", " , params: { allowedValue: schema", "externalListenMessageCallback", "i18next:", "/*# sourceURL=", "yds", "反向裁剪(Inpaint)", "#FF33CC", "widgets", "从磁盘上传", "remove", "Generate", "Images", "resolveRunImages", "channel", "rootId", "[^\\%\\/\\@]", "Stop all", "removed", "从磁盘获取", "keyword", "_requestHandlers", "startHeartbeat", "Unexpected dot segment condition", "nestingSuffix", "#9900CC", "Waiting for ComfyUI to finish connecting…", "requestId", "~validate", "([^0-9])", "split", "queuePrompt", "Failed to convert widget {0}:", " if (Array.isArray(", "extend", "ValidationError", ".length , ", "fail", "jsonPointers", "languageChanged", "Get selection failed", "rootData", "store:update:", "UNRESERVED", "openWorkflow", "every", "Default", "overwrite", "isTop", "formats", "Primary boundary", " === 'true' || ", "') ", "Unknown error", "cancelled", "addIssues", "missingKey", ") - division", "[0]; ", "{0,2}", "invalid-input", "getAccountStatus API 调用失败 - HTTP 错误，状态: {{status}}", "0?[1-9]", ") || ", "queues", "stopAll", "画布变动后自动运行", "Model with affordable price, abundant community applications", " === 'false' || ", "resolveImage", "map", "执行成功", ", received '", "No edge defined from ", "#0099FF", "Get pixel of {{0}} failed", "originalQueuePrompt", "Gateway error (502)", "_clientCapabilities", "initialized", "revocable", "maxProperties", "nodeId", "#CC9900", "string", "ZodIntersection", "milliseconds", "isULID", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "true", " - no connection available", "使用教程", ") { if (vErrors === null) vErrors = ", "emit", "schemaExcl", "Get mask from Current Layer", "应用ID:", ";  ", "date", "outgoingNotificationInterceptors", "keyPrefix", " = false; else if (", "realTransport", "coerceToTypes", "roots", "hasError", "registerDirectRequestHandler", "发送至选区", `获取图像 &
限制图像范围`, "create", "diff", "从文件打开图像", " != 'string') || ", "success", "Delete Template", "sendStreamRequestorRequest", "Create document", "lngs", "Selection mask", " if (!", " || validate.schema", "getState", "Layer not found {{0}}", "Clear selection", "resolved promise for", "languageUtils", "[UnexpectedJSONParseError]: ", " } }  ", "Hold Shift for more options; Ctrl for single fetch", "extendTranslation", "PS图片", "点击移除本地文件", " , schema:  ", "failed parsing options string in nesting for key ", "error", "compile", "off", "shu", "isNaN", "; else vErrors = null; }  ", "images", "isOpen", " !== undefined && typeof ", "less than or equal to", "#00CCFF", " ) || ", "console", "cache", "ESCAPE", "catch", "OpenAI API error", "Max size (px)", "createAsyncIterator", "/patternProperties/", "missingRef", "#9933FF", "reconnected", "appendNamespaceToCIMode", "array", " delete ", "cacheInBuiltFormats", " / ", '" is used in schema at path "', "close", "Reverse", "isEmoji", "content", "ZodLazy", " === 0 || ", "getTextInfo", "])) { ", "Illegal input >= 0x80 (not a basic code point)", "/else", "self", "创建文档", "提示词模板", "mergeObjectAsync", "coerced", "Prompt", " = true; else if (typeof ", "Output to", "bigint", `" won't get resolved as namespace "`, "query", "schema is invalid: ", "nest", "var refVal", "InvalidRequest", "additionalItems", "forEach", "Store not found for ", "模板已删除。", "#3366FF", "ayp", "external", "交集或缩放目标为空", "notifications/resources/updated", "absolutePath", "prp", "del", "确定要删除此模板吗？", "audio", "_addCheck", "RelativeTimeFormat", "yhd", "transform", "typ", "superRefine", "removeNotificationHandler", "file://", "([01]\\d|2[0-3]):[0-5]\\d(:", "Outgoing notification interceptor failed: ", "splice", "Failed to pick file. Please try again.", "Merge group failed", " !== undefined)", " , params: { i: i, j: j } ", "Uploading...", " {} ", "fallbackNS", '$ref: validation keywords used in schema at path "', "negative", "lng", "Host's domain name can not be converted to ", "auz", "parse", "keyword schema is invalid: ", "getDefaultValuesFromSchema", "disconnect", "\\' is invalid' ", "registerDirectRequestHandlerGeneric", "removeDotSegments", "callValidate", "createTemporary", "sourceCode", "defaultVariables", "isSafeInteger", "createErrors", " if ( ", "none", "initAsync", "选择图像来源", '";  ', " != 'undefined' && ", "#6633FF", "add", "Opening workflow", "mountTo", "mesh", "status API failed - {{reason}}", "acy", "strip", "Set as Canvas", " = true; else if (!Array.isArray(schema", "toJSON", "notice", "'else'", "以当前图层边界获取当前图层", "510", "#FF0066", "Refresh", "baseId", "uiWeightSum", " != 'number') || ", "; if (!", "usePattern", "]; } else { ", "Cannot register capabilities after connecting to transport", "Number must be ", "regexpUnescape", "ZodNever", "msec", "图像质量 (%)", "Node not found", "尚未配置 ComfyUI 连接，请先设置地址。", "停止自动运行", "Please select the mask to get", 'did not save key "', "ZodNull", " , params: { multipleOf: ", "filename", "Failed to update the {{part}} prompt. Please try again.", "isInitializing", "actionManager", "Server does not support notifying about resources (required for ", "邮箱: {{email}}", "hrs", " than ", "prepareLoading", "subfolder", "Validation failed but no issues detected.", "ctx", "normalizeId", "normalizeDuration", "Enter your RunningHub API Key", ".schema = ", " === 1) ", "+\\.", "发送到PS", "正向裁剪(Outpaint)", "Range 1-100", "loadNamespaces", "pathname", "enum", "initializeConsumer", "unescapeFragment", " } } ", "正在使用本地文件", "Generation failed", " !== undefined) ; ", " must be number or boolean", "Connecting to ComfyUI...", "dataPathArr", "loadSchema", " Math.abs(Math.round(division", "_oninitialize", "_onclose", "当前选区", "Current Tasks:", ") { errors = ", "options.loadSchema should be a function", ") {", "Intersection results could not be merged", "activeState", "handleIncomingNotification", "properties", "processCode", "interpolator", "mountedEndpoints", "Upload aborted", "exactly equal to ", "getScriptPartFromCode", "undefined", "style", " return errors === 0;       ", "valid", "_getCached", "pipe", "Not connected", "assertCapabilityForMethod", "   ", "userAgent", "[^]", "Tutorial", "initializedStoreOnce", "Defaults using", "setNodeTitle", "port", "app.queuePrompt caught", "fullPath", "智能对象图层", "Cannot access data ", "headers", "optional", "precision", "Bounds", ".length == 0) {", " = e.errors; else throw e; } ", "output", "&lt;", "interpolate", "MCP error ", "resource", "未知错误（{{code}}）", "posterIdentifier", "getPrototypeOf", "toString", ")) { if (vErrors === null) vErrors = ", "fullFilename", "; } ", "streamRequest", "number", " === false) ", 'Invalid input: must end with "', "schema $id is different from id", "outputs API failed - {{reason}}", "mountedTransports", "[i]; ", "getPath", "inline", "allOf", "Edit Template", "key", "fallbackNotificationHandler", "accessing an object - but returnObjects options is not enabled!", "Edge references unknown source node: ", "extendRefs", "No images", "connect", "overflow", "stringify", "activeWorkflow", "#CC33FF", "New Template", "$ref", "[A-Fa-f]", " throw new ValidationError(vErrors); ", "dir", "RULES", "load", "暂无默认模板。", "modifying", "readonly", "exactly", "ZodPromise", "getDefaultValueFromField", "partialBundledLanguages", "toQuotedString", "Comfy.userId", "sdppp", "Fit to canvas", "errToObj", "NOT_USERINFO", "varReplace", "Select Source", "Clear", "long", "day", "ayn", "Select Workflow", "如何获取APIKey", "waitingReads", " , message: 'should NOT be valid' ", "#FFCC33", "fragment", "apply", "生成中...", "缺少遮罩资源", "nonstrict", "__proxy_forward", "if (!", "mergeShapes", "listWorkflows", "lowerCaseLng", "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF", "root", "buildAdjacencyList", "progress", "_opts", "shape", "#0033CC", "pbu", "find", " !== undefined) { ", "manuallyExtractDefaults", "logging", "queueLoad", "Client does not support elicitation (required for ", "ZodString", "getDefinition", "right", "Request timed out", "Failed to save prompt templates.", "updateKey", "无法写入{{part}}提示词，请稍后重试。", "status API failed - HTTP error! status: {{status}}", "仅选区范围", "{0,3}", "getConnectionToNodeInternal", "urn:uuid", "Failed to send response: ", "dev", "创建图层失败", "elicitation", "trim", "3rdParty", "escapeQuotes", "not_multiple_of", "sdk", "本节点默认继承:", "Channel connecting...", "#CC0066", "运行中...", "Edge references unknown target node: ", "Cancel", '[\\"]', "#3399FF", "++) { ", "Invalid discriminator value. Expected ", "需要提供图像和提示词", "payload", "replace", "assign", "不裁剪", "Server does not support notifying of tool list changes (required for ", "从 当前图层 获取遮罩", "#99CC00", "从 选区 获取遮罩", "wss", "Input not instance of ", "default is ignored for: ", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "; var ", "const", "ssh", "]) ", "Waiting in queue", "Uploader not set", "validateSchema", "Paste WebApp ID here", "Layer mask", " , message: 'should NOT have ", "Invalid literal value, expected ", "sdppp/abort", "Manage reusable prompt templates", "Module", "additionalProperties", "Expected ", "joinValues", "schema id must be string", " character(s)", "控件 {0} 转换失败：", "Press Enter to open app: {{appName}}", "' && !(typeof ", "%[EFef]", "Selected", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "days", "invalid_date", "新增槽位", "Add Template", ".test(", "validateHandlerType", "_onrequest", "partial", "invalid_literal", "NOT_SCHEME", "主图边界", "2[0-4]", " , schema: validate.schema", " }   ", "prompts", "_exclusiveLimit", "  } ", "CurLayer", "选择模型", "get_layer_info: 需要 layer_identify", "sdppp/directRequest", "请填写模板名称。", "resources/templates/list", "toStringTag", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "Close", "silent", "unsetRequestHandler", "startsWith", "Use current layer", "modules", "name", "[\\/\\?]", "statements", "arrayToEnum", "Unable to reboot ComfyUI", "unknownFormats", " , message: 'should be ", "addEventListener", "Invalid input", "'then'", "uploadImage API failed - {{reason}}", "format", "handleIncomingRequest", "isValidLookup", "质量{{percent}}%", "setResolvedLanguage", "registerHandler", "ZodNullable", "pst", "加载中...", "prompt_id", "_responseHandlers", "HeartbeatTimeoutError", "pes", "catchall", "addMetaSchema", "#3300CC", "2025-03-26", "cuid", "(.+?)", "parseMissingKeyHandler", " , schemaPath: ", "[MCPMiddleware]", "http", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "week", "Array must contain ", "自动同步: 关闭", "#FF9900", "请选择要获取的图像", "invalid_type", "_parse", " = true; if ( ", "selection", "exception", "点击使用当前选区", ` , message: 'should match "' + `, " if (true) { ", "contentMediaType", "pickLocalFile", " == errors) {", "INTERCEPTOR_ERROR", "abortAllRequests", '$ref: keywords ignored in schema at path "', "resetRegExp", " { keyword: '", "keywordValidate", "boolean", "else", "未找到图层 {0}", "invalid_union", "loopRequired", "Auto fetching…", "Enum", "nodeStores", "Invalid function arguments", "abort", "Get mask from Canvas", "cleanCode", " == 'string' && ", "setNotificationHandler", "languages", "namespace", "getProperty", "onmessage", "Server does not support notifying of prompt list changes (required for ", "curlayer_curlayer", "logger must implement log, warn and error methods", " must be number", "formatType", "round", "messageType", "issues", " = ", " %c", "图层遮罩", "waiting for queue prompt", " not found for current node ", "duration", ".length == 1) { ", ", '", "url", "Invalid action: {{action}}", "if (", "快捷键选图功能仅在插件窗口聚焦时可用", "ComfyUI failed to load, HTTP status code: {{code}}", "void", "Default Templates", "{0,4}", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "getSuffixes", "resourceStore", "signal", "pluralResolver", "#33CC99", "dependencies", "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting", "formatSeparator", "_compile", "addMessageEventListener", "nanoid", " ) ", "destroy", "_getType", "Current Selection", "body", "notifications/initialized", "#/definitions/stringArray", "nullish", "Set as Current Selection", "false", "responseSchema", "Cannot reboot because ComfyManager is missing", "Gemini 2.5 Flash Image", "forwardBroadcast", "Failed", "validate", "convert widget {0} failed:", "mask", "isURL", "errs__", "#CC0099", " if (typeof itemIndices[item] == 'number') { ", "#3399CC", "Invalid attempt to destructure non-iterable instance", "&subfolder=", " = errors;  ", "Request interceptor failed for ", "#CCCC33", "unsetOutgoingRequestInterceptor", "relatedRequestId", ".hasOwnProperty(", " , params: { failingKeyword: ", ".dataPath = (dataPath || '') + ", "languageOnly", "未返回图片", "pre", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, "reverse", ") vErrors.length = ", " = vErrors[", "); errors = vErrors.length;  for (var ", "任务已取消", " is present' ", "ary", "MissingRef", "pending", "} else {  errors = ", " , message: 'should NOT have more than ", "nodes", "minProperties", "prepend", "and", 'custom keyword "', "toLowerCase", "clearHeartbeatTimers", "$data", "nodeErrors", "path", " break; ", "Crop by selection", "checks", " reference.", "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", "限制图片尺寸", "userDefinedKeySeparator", "Converting circular structure to JSON", "Auto Sync: off", " , message: 'should NOT be ", " ) : ( (", "startTime", "[\\uE000-\\uF8FF]", ")) { ", "greater than or equal to ", "使用当前图层", "localRefs", "应用模板失败。", "defaultNS", "String must contain ", "mesh:workflow", "instructions", "colors", "left", "No preview content yet", "alg", '"number"', "Outgoing message:", "heartbeatTimeout", "]); ", "enabled", "生成失败", "transports", "extractFromKey", "http://json-schema.org/draft-07/schema#", "Mask", "ZodArray", "getConnectionInfo", "ayl", "loadLanguages", "iri", "Array.isArray(", "syncStoresToNewConnection", " = false;  ", "returnTypeError", "longer", "nestingOptionsSeparator", " cannot be resolved", "没有链接图层: {{0}}", "+Alt reversed mask", "can't resolve reference ", "catchValue", "invalid_string", "supportedLngs", ".errors", " var err = ", ".validate; } if (  ", "无效边界: 左边必须小于右边，上边必须小于下边", "海量模型，稳定服务", "按选区裁剪", ";if (", "ZodVoid", "  if (!", "AbortSignal is already aborted", "ZodNativeEnum", "不支持的图像输入类型", "#3333CC", " failed", "keyof", "#/definitions/nonNegativeInteger", " === undefined ", "subject", "added", "clear", "findIndex", " == 'number' ? ( (", "formatParams", "pctDecChars", "errorsText", "输出区域", "zh-CN", "maxItems", "cmp", "prefix", "设为画布", "app", "comfy-user", "getTransport", " , params: { type: '", "broadcastCurrentState", "_schemas", " ( ", "verbose", "proxy", "cacheKey", "Failed to open file as document: {{path}}", "请登陆后使用插件", "发送所有", "画布变更后自动运行工作流", "Exclude current layer", "aeb", "连接 ComfyUI 失败（HTTP {{code}}）", " = errors; ", "closeWorkflow", "workflow-run", " , params: { missingProperty: '", "protocolVersion", ".errors; else vErrors = vErrors.concat(", "nan", "token", "Prompt content", "ownProperties", "running", "decline", "appendNamespaceToMissingKey", "translation", "isHeartbeatEnabled", "isDate", "connectedNodes", "forward", "passContext", "requestIdSeq", "getRunningRequestsCount", "varOccurences", "exactUsedKey", "作为新文档导入", "Task cancel failed: {{error}}", "absolute", "=startErrs", "上传失败，请重试", "当前图层边界", "管理 Comfy Simple 工作流的提示词片段。", "; if (vErrors !== null) { if (", " = false; if (e instanceof ValidationError) ", "11394180jkOfdO", "getStats", "setupTransportHandlers", "以画布边界获取当前图层", "if ( ", "streamRequestorHandlers", "]; if (", "getter", 'no schema with key or ref "', "ZodPipeline", " } } else { ", "lastIndex", "Click to restore default boundary", "_addSchema", " try { await ", "#0066FF", ".type", "#6600FF", "DateTimeFormat", "No store found for node ", "; else if (", "./sdppp-custom.js", "host", ", validate.root.schema);", "domainHost", "postProcessPassResolved", "Select a model", " === false || ", " !== undefined) {  ", "has", "outputs API 调用失败 - HTTP 错误，状态: {{status}}", "网关错误 (502)", "minimum", "_formats", "nsSeparator", " , params: { comparison: ", "Options", "info", "; }", "停止并取消全部", "toUnicode", "refine", " != 'boolean' && ", "return", " , params: { keyword: '", "Image quality (%)", "); for (var ", "Delete current", "_cleanupTimeout", "nullable", "Fetch canvas with primary boundary", "[\\.]", "Save current", "_fragments", "all", "optionsMap", "test", "logging/setLevel", "Remove slot", "schemaPath", "errorHandlers", "removeMessageEventListener", "hasLanguageSomeTranslations", "openWorkflowJSON", ") break; } ", "结果获取已中止", "https", "exclusiveMaximum", "No crop", "uploadComfyImageFromUXP", "File upload failed", "closeHandlers", " == 'number' || ", " == 'object' && !(", "nodeTransports", "count", "保存并立即执行", "Task cancelled", "node", ") {  ", "exec_info", "Action {{0}} 未找到", "Failed to open image file: {{error}}", " else { ", "requestedSchema", "validateKeyword", "].propertyName = ", "authInfo", "sdppp-heartbeat", "humanize", "Task incomplete, current status: {{status}}", "unknown keyword: ", "too_small", "_path", "reduce", "getResource", "examples", "handleIncomingMessage", "isInt", "resources/read", "min", "errors", "合并组失败", "xmn", "mergeArray", "parentElement", "BigInt must be ", "-latn", "Action handler ", "Logout", "$schema", "var missing", "Google Gemini - 图片生成", "values", " validate.errors = null; return true; ", "getRegExp", "invalid_return_type", "pick", "getNode", "macro", "removeAdditional", "acw", "response", "broadcastHandlers", "'].definition; var ", "regExpMap", "Failed to apply template.", "isBase64", "默认模板", "以画布边界获取画布", "flags", "Jump to last", "HTTP URIs must have a host.", "interpolation", "currency", "{0,6}", " = undefined;", "{6}", " , message: 'should have ", `获取图像 &
裁剪选区遮罩`, "#6633CC", "任务执行失败: {{error}}", " has duplicate value ", "No workflows available.", " = undefined; ", " }  ", "now", "handleAsObject", "not_finite", "[0-9A-Fa-f]", ` if (typeof item == 'string') item = '"' + item; `, " if (errors === 0) return data;           ", " is already defined", "请选择要获取的遮罩", "patternProperties", "index", "run API failed - HTTP error! status: {{status}}", "__DEFAULT__", "maxValue", ".else", "ComfyUI server reconnecting", "Template removed.", "resolveRef", " = null; ", "getConnectionCount", " = false;for (var ", "float", "documentElement", "Document {{0}} not found", "color: ", "simplifyPluralSuffix", "bind", "Inpaint (reverse crop)", "Failed to request initial state for ", "从 画布 获取遮罩", "formatArgs", " = errors;", "reset=false but needsReset: ", "isEmpty", "writeOnly", "val is not a non-empty string or a valid number. val=", "maxTotalTimeout", "Local file", "lte", "当前图层", "No active layer", "uploadImage API failed - HTTP error! status: {{status}}", "warning", "value", "comfyAPI", " (division", "overloadTranslationOptionHandler", "hijacked", " === undefined) ", '" was not yet loaded', " || ! Object.prototype.hasOwnProperty.call(", "  )  ", "exclIsNumber", "abv", "ZodNaN", "comfyAPI is not initialized, maybe comfyUI is too old", "管理可复用的提示词模板", "正在上传...", "#FF6600", "调整输入设置", "Invalid forward path for proxy action", "direction", "2.1.0", "/additionalProperties", "点此获取RunningHub APIKey", "NOT_PATH", "integer", "本地图片包", "initializeNodeStores", "lazycreate", "favorites", "names", "InternalError", "Your powerful node-based workflow engine", "iterator", "#FF00CC", "Rectangle coordinates required for create action", "Auto send disabled", "rest", "sdppp/streamRequest", "getNodes API failed - HTTP error! status: {{status}}", "apc", " = ''; ", " = errors; var ", " , parentSchema: validate.schema", " = true; } else { ", "innerType", "Auto-run workflow after changes...", "prev", "userinfo", "messagePoster", " else if (", " = !(false ", " | ", "用户名: {{username}}", "Prompts", " == 'boolean' || ", "2025-06-18", "run API 调用失败 - HTTP 错误，状态: {{status}}", "set", "uploadImage API 调用失败 - HTTP 错误，状态: {{status}}", '[\\"\\\\]', "toHash", "退出登录", " var ", "allServers", "reset", "未实现 (501)", "mergeObjectSync", "createInstance", "dataPath", "click to restore", "你的工作流", "Keyword ", "Unicode", "disable", "discriminator", "sdppp/streamResponse", "更多设置", "backend", "[i], ", "从 画布 获取图像", "负面提示词内容", "_key", "alert", "coerce", "saveWorkflow", "pluralCategories", "Internal ZodObject error: invalid unknownKeys value.", "Primary image resource is missing", " === null || ", "Incoming message:", "base64url", "dataProperties", "resources/subscribe", "=0; ", "stack", "newlayer_selection", ".errors); errors = vErrors.length; } ", "{2}", " var vErrors = null; ", "ordinal", "模板名称", "(new RegExp(", "alwaysFormat", "curr", "请输入大于 0 的像素值", "deepPartial", "scheme", "Auto send enabled", "新图层", "translator", "[\\@]", "enable", "workflows", "isInteger", ", deps: '", "email", " if (true) {", "How to get APIKey", "skipCopy", "_getId", "object", "missingKeyNoValueFallbackToKey", "Meta-schema for $data reference (JSON Schema extension proposal)", "strictDefaults", " for language ", " !== undefined ", "ZodEffects", "errorDataPath", "Intersect or scaledDesire is null", "getResourceBundle", "slice", "after app.queuePrompt errors: ", ".schemaPath === undefined) { ", "]; return false; ", "protocol", "unshift", "resolvedLanguage", "freeze", "combo", "本地视频", "Not a ZodError: ", "Not current document", "Email address's domain name can not be converted to ASCII via punycode: ", "No errors", "Unrecognized key(s) in object: ", "sourceType", "Current selection: Layer {{layerName}}", " not in path ", "pga", "graph", "/%2F", "Current layer", "minSize", "needsPlural", "dataLevel", "5NKjgFs", "画布边界", "obj", "Fetch canvas with canvas boundary", " , message: 'property name \\'", ", exclusive: ", "oninitialized", "handleDirectProxyForward", "URI is not a ", "设为当前选区", "hostVersion", " && !(", "implementInternalAction", "schemaHasRules", "kind", "Back", "ayh", "', depsCount: ", "multipleOf", " } }", "sendToolListChanged", "isArray", '" already exists', "Create guide frame", "ZodFunction", "messageQueue", "#9900FF", "getAllReachableNodes", "getRegisteredActions", "safeValue", "_timeoutInfo", "非当前文档", " } else { ", "refinement", " var errs_", "ComfyUI服务器重连中", "(\\.\\d+)?", "Select AI Service Provider", "abh", "minValue", "Email address's domain name can not be converted to ", "disconnected", "api/view?type=", "1213860ATAJVS", ` , message: 'should match format "`, "one", ") : ", "Limit image size", "__cycle__", "ZodBigInt", "compiling", "Input Setting", "fromCodePoint", "continueOnInterceptorError", ` + '" schema' `, "getPathExpr", "schema $id ignored", "_errorDataPathProperty", "men", "augment", "extra", "log", "_resetTimeout", "选区边界", "addNamespaces", "__esModule", "debugDisableHeartbeatResponse", "completion/complete", "get", "language", "Remote", "debouncedNotificationMethods", "readingCalls", "ZodError", "suffix", "目标边界为空", "defaultValue", "#FF0033", "__origin", "never", "callback", "meta-schema not available", "Resize document for preview", "ZodBranded", ", rootData)  ", "languageChanging", "registerStreamRequestorHandler", "Email: {{email}}", "notifications/message", "__internal_requestInitialState_", "Invalid JSON-pointer: ", "addIssue", "finally", "_transport", "Import as Smart Object", "nonempty", "#CC00FF", "mailto", "interceptorTimeout", "implementAction", "新增模板", "已限定范围", " === '' ", "removeNamespaces", "objectKeys", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "2.0", "click", "自动同步中…", "applyPostProcessor", "lastIndexOf", 'id "', "onprogress", "env", "arz", "assert", "other", "Status check aborted", "addLookupKeys", "未知错误", "_any", "Failed to send an error response: ", " = false; for (var ", "' } ", "run API failed - nodeInfoList unavailable. Please call getNodes() first.", ")) {  var err =   ", "Refreshing preview...", "setupGeneralBroadcastHandler", "编辑模板", " = null; try { ", "newlayer_canvas", "停止全部", "No active document", "invalid_intersection_types", "localeCompare", "defaultMeta", " = true; break; }", "namespaces", "PCT_ENCODED", "isIP", "isNotification", "constructor", "minLength", "任务取消失败: {{error}}", "Scan", "runningRequests", "ZodCatch", "选择 AI 服务提供商", "jsonrpc", "arrayKeywords", "inlineRefs", "++) if (equal(", "'[' + ", "_onprogress", "Aborted", "组 {{0}} 中没有第一个相关图层", "finished", "unescapePrefix", "当前无法应用模板。", "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "result", "Get image from Current Layer", "Failed to get result: {{error}}", "sdppp 运行 Photoshop Action", "skips", "自动填入画布关闭", "var ", "; else vErrors = null; } ", "\\.\\d{", "ZodEnum", "allErrors", "请输入您的 Google API Key", " = false , ", "from", "removeResourceBundle", "offset", " == ", "notifications/roots/list_changed", "给发送的图片创建文档", "errorPath", "message", "_instructions", "sendLoggingMessage", "notifications/tools/list_changed", "Batch Count", "curlayer", "effect", "edges", "contextualErrorMap", "Action set {{0}} was not found", "escapeComponent", "Using local file", "创建参考线框架", "Notification interceptor failed for ", "Current selection: Layer", "Reset", "empty", "Layer {0} not found", "dataVar", "_onresponse", "validateStreamRequestorRequest", "forkResourceStore", "Google Gemini - Image Generation", "notificationsHandled", "smaller than", "addRule", "Selection boundary", "No videos yet", ")' returned an object instead of string.", "Positive Crop", "newdoc", "Hold Shift key to import as new document", ") break; ", ".call( ", " = false; break outer; } } } ", ", (dataPath || '')", "exactLength", "#0066CC", "saveMissing", "addSchema", "hour", " var startErrs", "curlayer_selection", "sendResourceListChanged", "property ", "设置图层的文本", "sdppp_widgetable_title", "onclose", "resetTimeoutOnProgress", "abortRequest", " throw new ValidationError([", "keySchema", "arq", "minute", "sort", "Workflow not found", " == null) ", "; else vErrors = vErrors.concat(", "resetStats", "toUpperCase", "AI 生成任务", "maximum", "afb", ") > 1e-", "Timeout", "Core schema meta-schema", "请求超时 (408)", "ZodLiteral", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "InvalidParams", "\\$&", "ASCII"];
  return Tx = function() {
    return o;
  }, Tx();
}
const nd = ox[a(1393)](a(1607));
async function In() {
  const o = a;
  if (!window[o(472)]) return;
  const x = new sd({ posterIdentifier: "comfy-uxp", messagePoster: (e) => {
    window.uxpHost.postMessage(e, "*");
  }, addMessageEventListener: (e) => {
    const s = o, n = (i) => {
      e(i[K(571)]);
    };
    return window[s(1914)](s(2732), n), n;
  }, removeMessageEventListener: (e) => {
    const s = o;
    window.removeEventListener(s(2732), e);
  } });
  x[o(2900)] = (e) => {
    nd(o(3023), e);
  };
  const t = new ad({ name: o(431), version: "1.0.0" }, {}), r = new To(t);
  return await r.connect(x), window.uxpHost.postMessage({ channel: o(2958), meshName: "comfy", action: o(1747), version: o(1617) }, "*"), await ke[o(1747)](o(1014), r);
}
const od = Object[a(2534)](Object.defineProperty({ __proto__: null, connectUXP: In, mcpMesh: ke }, Symbol[a(1899)], { value: a(1864) }));
function En(o) {
  const x = a, t = Ne[x(1064)] || Ne.extensionManager[x(713)], r = t[x(1750)];
  if (o && o[x(750)] && o[x(750)].id !== r[x(1682)].id) return;
  const e = ke[x(2849)][x(1480)]()[x(2948)], s = ea(Ne[x(2546)], r);
  Rn(s, e) && ke[x(2849)][x(964)]({ widgetableStructure: s }), ke.store[x(964)]({ widgetableValues: Nx(Ne[x(2546)]) });
}
E0[a(1914)](a(2864), En), E0[a(1914)](a(1068), () => {
  const o = a;
  ke.store[o(964)]({ widgetableValues: Nx(Ne.graph) });
});
let Xr = 0, Yr = !0, es = "";
function Cn() {
  const o = a;
  requestAnimationFrame(Cn);
  const x = Ne[o(1064)] || Ne[o(812)][o(713)], t = x.activeWorkflow, r = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[o(2075)]) || "", s = (t == null ? void 0 : t.isPersisted) || !0;
  if (r === Xr && e === es && s === Yr) return;
  const n = Date[o(2356)]();
  Xr = r, es = e, Yr = s;
  const i = ea(Ne[o(2546)], t), c = Nx(Ne[o(2546)]);
  ke.store[o(964)]({ widgetableStructure: i, widgetableValues: c }), console[o(2613)]("graph update cost " + (Date[o(2356)]() - n) + "ms"), setTimeout(() => {
    const d = o;
    if (t !== x[d(1750)]) return;
    const u = ea(Ne.graph, t), l = Nx(Ne.graph);
    Rn(u, i) && ke[d(2849)].setState({ widgetableStructure: u }), ke.store[d(964)]({ widgetableValues: l });
  }, 800);
}
requestAnimationFrame(Cn);
function Rn(o, x) {
  const t = a;
  return o[t(925)][t(2910)] !== x.nodeIndexes[t(2910)] || JSON[t(1749)](o.nodeIndexes) !== JSON[t(1749)](x[t(925)]) || JSON[t(1749)](o[t(2066)]) !== JSON[t(1749)](x.nodes);
}
let xs = !1;
async function id() {
  const o = a;
  if (xs) return Promise.resolve();
  E0[o(552)] && ke[o(2849)].setState({ comfyUserToken: E0.user }), xs = !0;
}
ox.extend("comfy-entry");
async function cd(o, x, t) {
  const r = a;
  x[r(1914)](r(1796), ({ detail: n }) => {
    const i = r;
    if (!n) return;
    let c = 0, d = 0;
    !isNaN(n[i(2398)] / n.max) && (c = Math[i(1987)](n[i(2398)] / n.max * 100));
    const u = n[i(2288)], l = graph[i(2066)][i(1801)]((f) => f.id == u);
    if (l && l.order) {
      const f = 100 / graph.nodes[i(2910)];
      d = Math[i(1987)](l[i(390)] * f) + (c ? c / 100 * f : 0);
    }
    ke[i(2849)][i(964)]({ progress: c, graphProgress: d });
  }), x[r(1914)](r(735), (n) => {
    var c;
    const i = r;
    (c = n[i(750)]) != null && c[i(2290)] && ke[i(2849)][i(964)]({ queueSize: n[i(750)].exec_info[i(2976)] });
  }), x[r(1914)]("execution_error", ({ detail: n }) => {
    const i = r;
    if (ke[i(2849)][i(964)]({ executingNodeTitle: "", executingNodeID: "", lastError: n[i(592)] }), n[i(1192)]) {
      const c = o.graph.nodes[i(1801)]((d) => d.id == n[i(1192)]);
      ke.store.setState({ widgetableErrors: { [n[i(1192)]]: "[" + ((c == null ? void 0 : c[i(2877)]) || n[i(1192)]) + "]" + n[i(592)] } });
    }
  }), x.addEventListener(r(2824), (n) => {
    const i = r, c = n[i(750)], d = graph[i(2066)][i(1801)]((u) => u.id == c);
    if (d) {
      const u = 100 / graph.nodes.length;
      ke.store[i(964)]({ executingNodeTitle: d.title, executingNodeID: d.id, graphProgress: Math.round(d[i(390)] * u) });
    }
  }), x[r(1914)](r(1090), () => {
    const n = r;
    ke[n(2849)][n(964)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x[r(1914)]("execution_start", ({ detail: n }) => {
    const i = r;
    ke.store[i(964)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date.now() });
  });
  const e = /* @__PURE__ */ new Map();
  x[r(1914)](r(600), (n) => {
    const i = r;
    ke[i(2849)].setState({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[i(2620)](n[i(750)][i(1927)]) || [])[i(1429)]((d) => ({ url: d, thumbnail: d }));
    Zi(n[i(750)].prompt_id, c), e[i(1239)](n[i(750)][i(1927)]);
  }), x.addEventListener(r(1068), (n) => {
    const i = r, c = e.get(n.detail[i(1927)]) || [];
    n[i(750)][i(1717)] && Array[i(2573)](n[i(750)][i(1717)][i(1499)]) && n[i(750)][i(1717)][i(1499)][i(2910)] > 0 && c[i(816)](...n[i(750)][i(1717)].images.filter((d) => d[i(506)] == "output")[i(1429)]((d) => {
      const u = i;
      return location[u(527)] + location[u(1661)] + u(2594) + d[u(506)] + u(1286) + encodeURIComponent(d[u(1639)]) + (d.subfolder ? u(2042) + encodeURIComponent(d[u(1648)]) : "");
    })), n[i(750)][i(1717)] && Array[i(2573)](n[i(750)].output[i(1209)]) && n[i(750)].output.sdppp_assets.length > 0 && c[i(816)](...n[i(750)].output[i(1209)].map((d) => {
      const u = i;
      return location[u(527)] + location.pathname + u(1100) + encodeURIComponent(d);
    })), e[i(2454)](n.detail[i(1927)], c);
  });
  let s = null;
  x[r(1914)](r(563), (n) => {
    s = setTimeout(() => {
      const i = K;
      ke[i(2849)][i(964)]({ comfyWSState: "reconnecting" });
    }, 1e3);
  }), x[r(1914)](r(1515), (n) => {
    const i = r;
    ke.store.setState({ comfyWSState: i(639) }), clearTimeout(s);
  });
}
let $t = [];
(async function() {
  var x, t, r, e, s, n;
  const o = a;
  if (!(typeof gradioApp < "u")) {
    try {
      const i = (t = (x = window[o(2399)]) == null ? void 0 : x[o(2161)]) == null ? void 0 : t[o(2161)], c = (e = (r = window[o(2399)]) == null ? void 0 : r.ui) == null ? void 0 : e.$el, d = (n = (s = window[o(2399)]) == null ? void 0 : s.api) == null ? void 0 : n[o(1039)];
      if (!i || !d || !c) throw new Error(o(2410));
      await id(), await In(), await cd(i, d, c), import(o(2231))[o(857)]((u) => {
        u.default(xx, 2);
      });
    } catch (i) {
      $t[o(816)](i[o(2491)] || i[o(2732)] || i);
    }
    await new Promise((i) => setTimeout(i, 2e3)), $t.length && console[o(1493)]($t[0]);
  }
})();
