var On = Object.defineProperty;
var Dn = (o, x, t) => x in o ? On(o, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[x] = t;
var me = (o, x, t) => Dn(o, typeof x != "symbol" ? x + "" : x, t);
const a = Z;
(function(o, x) {
  const t = Z, r = o();
  for (; ; )
    try {
      if (parseInt(t(2803)) / 1 + -parseInt(t(1926)) / 2 + parseInt(t(2094)) / 3 * (-parseInt(t(3004)) / 4) + parseInt(t(2523)) / 5 + parseInt(t(2361)) / 6 * (-parseInt(t(1480)) / 7) + -parseInt(t(2390)) / 8 * (parseInt(t(1916)) / 9) + -parseInt(t(1509)) / 10 * (-parseInt(t(1703)) / 11) === x) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Px, 379318);
const Ne = window[a(2914)][a(2837)][a(2837)];
window[a(2914)].ui[a(2194)];
const R0 = window[a(2914)][a(2753)][a(2753)];
var as;
class jn {
  constructor(x) {
    me(this, as);
    const t = a;
    this[t(528)] = x;
    const r = this.validate();
    if (!r.valid) throw new Error(t(2230) + r[t(1139)][t(896)](", "));
  }
  [(as = a(528), a(2029))]() {
    const x = a, t = [];
    (!this[x(528)][x(2844)] || Object[x(1877)](this[x(528)][x(2844)]).length === 0) && t.push("Graph must have at least one node");
    for (const [e, s] of this[x(528)][x(1026)])
      !this[x(528)].nodes[e] && t[x(3019)]("Edge references unknown source node: " + e), !this.definition.nodes[s] && t.push("Edge references unknown target node: " + s);
    const r = this[x(1834)]();
    return !r[x(467)] && t[x(3019)](...r[x(1139)]), { valid: t[x(1148)] === 0, errors: t };
  }
  [a(2085)]() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const r of Object[x(1877)](this[x(528)][x(2844)]))
      t[x(823)](r, []);
    for (const [r, e] of this[x(528)][x(1026)]) {
      const s = t.get(r) || [];
      s[x(3019)](e), t[x(823)](r, s);
    }
    return t;
  }
  [a(1834)]() {
    const x = a, t = [], r = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), s = this[x(2085)](), n = (i, c) => {
      const u = x;
      if (e[u(1281)](i)) {
        const l = c[u(2273)](i), f = c[u(1908)](l).concat(i);
        return t.push(u(1929) + f[u(896)](u(2672))), !0;
      }
      if (r.has(i)) return !1;
      r[u(986)](i), e.add(i);
      const d = s[u(1507)](i) || [];
      for (const l of d)
        if (n(l, [...c, i])) return !0;
      return e[u(2375)](i), !1;
    };
    for (const i of Object[x(1877)](this[x(528)].nodes))
      !r[x(1281)](i) && n(i, []);
    return { valid: t[x(1148)] === 0, errors: t };
  }
  buildAdjacencyList() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const r of Object[x(1877)](this[x(528)][x(2844)]))
      t.set(r, []);
    for (const [r, e] of this.definition[x(1026)]) {
      const s = t[x(1507)](r) || [];
      s[x(3019)](e), t[x(823)](r, s);
      const n = t[x(1507)](e) || [];
      n[x(3019)](r), t.set(e, n);
    }
    return t;
  }
  [a(495)](x) {
    const t = a;
    return this[t(426)]()[t(1507)](x) || [];
  }
  [a(540)](x) {
    const t = a;
    return this[t(528)][t(2844)][x];
  }
  [a(2231)]() {
    const x = a;
    return Object[x(1877)](this[x(528)][x(2844)]);
  }
  [a(1697)](x, t) {
    const r = a;
    return this.definition[r(1026)][r(2257)](([e, s]) => e === x && s === t || e === t && s === x);
  }
  [a(2279)](x, t) {
    const r = a;
    if (x === t) return [x];
    const e = this[r(426)](), s = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; s.length > 0; ) {
      const { nodeId: i, path: c } = s[r(1766)]();
      if (n[r(1281)](i)) continue;
      if (n.add(i), i === t) return c;
      const u = e[r(1507)](i) || [];
      for (const d of u)
        !n.has(d) && s[r(3019)]({ nodeId: d, path: [...c, d] });
    }
    return null;
  }
  [a(2798)](x, t) {
    return this[a(2279)](x, t) !== null;
  }
  [a(298)]() {
    return { ...this.definition };
  }
}
const Ca = (o) => {
  let x;
  const t = /* @__PURE__ */ new Set(), r = (u, d) => {
    const l = Z, f = typeof u === l(1149) ? u(x) : u;
    if (!Object.is(f, x)) {
      const g = x;
      x = d ?? (typeof f != "object" || f === null) ? f : Object.assign({}, x, f), t.forEach((h) => h(x, g));
    }
  }, e = () => x, s = () => c, n = (u) => {
    const d = Z;
    return t[d(986)](u), () => t[d(2375)](u);
  }, i = { setState: r, getState: e, getInitialState: s, subscribe: n }, c = x = o(r, e, i);
  return i;
}, Ln = (o) => o ? Ca(o) : Ca;
var Te;
(function(o) {
  const x = a;
  o[x(1561)] = (s) => {
  };
  function t(s) {
  }
  o[x(1492)] = t;
  function r(s) {
    throw new Error();
  }
  o[x(1635)] = r, o[x(3029)] = (s) => {
    const n = {};
    for (const i of s)
      n[i] = i;
    return n;
  }, o[x(483)] = (s) => {
    const n = x, i = o[n(732)](s).filter((u) => typeof s[s[u]] !== n(867)), c = {};
    for (const u of i)
      c[u] = s[u];
    return o[n(1800)](c);
  }, o[x(1800)] = (s) => {
    const n = x;
    return o.objectKeys(s)[n(2739)](function(i) {
      return s[i];
    });
  }, o[x(732)] = typeof Object[x(1877)] === x(1149) ? (s) => Object[x(1877)](s) : (s) => {
    const n = x, i = [];
    for (const c in s)
      Object.prototype.hasOwnProperty.call(s, c) && i[n(3019)](c);
    return i;
  }, o[x(304)] = (s, n) => {
    for (const i of s)
      if (n(i)) return i;
  }, o[x(826)] = typeof Number[x(826)] === x(1149) ? (s) => Number[x(826)](s) : (s) => typeof s === x(867) && Number[x(1024)](s) && Math[x(2600)](s) === s;
  function e(s, n = " | ") {
    const i = x;
    return s[i(2739)]((c) => typeof c == "string" ? "'" + c + "'" : c)[i(896)](n);
  }
  o.joinValues = e, o[x(2932)] = (s, n) => {
    const i = x;
    return typeof n === i(1373) ? n[i(511)]() : n;
  };
})(Te || (Te = {}));
var Fa;
(function(o) {
  const x = a;
  o[x(2625)] = (t, r) => ({ ...t, ...r });
})(Fa || (Fa = {}));
const ae = Te[a(3029)](["string", "nan", a(867), a(1999), "float", a(2903), a(2923), a(1373), a(1732), a(1149), a(2781), a(2607), a(1912), a(2220), a(1775), "promise", "void", a(1657), a(2739), a(823)]), E0 = (o) => {
  const x = a;
  switch (typeof o) {
    case x(2781):
      return ae[x(2781)];
    case x(2028):
      return ae[x(2028)];
    case x(867):
      return Number[x(1632)](o) ? ae.nan : ae.number;
    case "boolean":
      return ae.boolean;
    case x(1149):
      return ae[x(1149)];
    case x(1373):
      return ae[x(1373)];
    case "symbol":
      return ae[x(1732)];
    case x(2220):
      return Array.isArray(o) ? ae[x(1912)] : o === null ? ae.null : o.then && typeof o[x(634)] == "function" && o.catch && typeof o[x(1045)] === x(1149) ? ae[x(2828)] : typeof Map < "u" && o instanceof Map ? ae[x(2739)] : typeof Set < "u" && o instanceof Set ? ae[x(823)] : typeof Date < "u" && o instanceof Date ? ae[x(2923)] : ae[x(2220)];
    default:
      return ae.unknown;
  }
}, K = Te[a(3029)]([a(2165), a(1891), a(2126), a(1945), a(2222), a(1905), a(2592), a(1243), a(1194), a(1819), "invalid_string", "too_small", a(457), a(2444), a(694), a(1136)]);
class P0 extends Error {
  get errors() {
    return this[a(995)];
  }
  constructor(x) {
    const t = a;
    super(), this[t(995)] = [], this.addIssue = (e) => {
      const s = t;
      this[s(995)] = [...this.issues, e];
    }, this[t(1968)] = (e = []) => {
      const s = t;
      this[s(995)] = [...this[s(995)], ...e];
    };
    const r = new.target.prototype;
    Object[t(2849)] ? Object.setPrototypeOf(this, r) : this[t(2806)] = r, this[t(1166)] = t(1123), this[t(995)] = x;
  }
  format(x) {
    const t = x || function(s) {
      return s[Z(2461)];
    }, r = { _errors: [] }, e = (s) => {
      const n = Z;
      for (const i of s.issues)
        if (i.code === "invalid_union") i[n(1125)][n(2739)](e);
        else if (i[n(2345)] === n(1194)) e(i[n(345)]);
        else if (i[n(2345)] === n(1243)) e(i.argumentsError);
        else if (i[n(648)].length === 0) r[n(1484)][n(3019)](t(i));
        else {
          let c = r, u = 0;
          for (; u < i[n(648)][n(1148)]; ) {
            const d = i[n(648)][u];
            u === i[n(648)].length - 1 ? (c[d] = c[d] || { _errors: [] }, c[d][n(1484)][n(3019)](t(i))) : c[d] = c[d] || { _errors: [] }, c = c[d], u++;
          }
        }
    };
    return e(this), r;
  }
  static [a(746)](x) {
    const t = a;
    if (!(x instanceof P0)) throw new Error(t(2755) + x);
  }
  [a(511)]() {
    return this[a(2461)];
  }
  get [a(2461)]() {
    const x = a;
    return JSON[x(3038)](this[x(995)], Te[x(2932)], 2);
  }
  get [a(2218)]() {
    const x = a;
    return this.issues[x(1148)] === 0;
  }
  [a(2561)](x = (t) => t[a(2461)]) {
    const t = a, r = {}, e = [];
    for (const s of this.issues)
      if (s[t(648)][t(1148)] > 0) {
        const n = s[t(648)][0];
        r[n] = r[n] || [], r[n].push(x(s));
      } else e[t(3019)](x(s));
    return { formErrors: e, fieldErrors: r };
  }
  get formErrors() {
    return this[a(2561)]();
  }
}
P0[a(558)] = (o) => new P0(o);
const Ut = (o, x) => {
  const t = a;
  let r;
  switch (o[t(2345)]) {
    case K[t(2165)]:
      o.received === ae[t(2781)] ? r = "Required" : r = "Expected " + o[t(967)] + t(1731) + o.received;
      break;
    case K.invalid_literal:
      r = t(458) + JSON[t(3038)](o[t(967)], Te[t(2932)]);
      break;
    case K.unrecognized_keys:
      r = "Unrecognized key(s) in object: " + Te.joinValues(o[t(1877)], ", ");
      break;
    case K[t(1945)]:
      r = t(1227);
      break;
    case K[t(2222)]:
      r = t(2197) + Te.joinValues(o[t(1341)]);
      break;
    case K[t(1905)]:
      r = "Invalid enum value. Expected " + Te[t(1878)](o[t(1341)]) + t(2510) + o.received + "'";
      break;
    case K[t(1243)]:
      r = t(1058);
      break;
    case K[t(1194)]:
      r = t(2622);
      break;
    case K[t(1819)]:
      r = t(706);
      break;
    case K[t(532)]:
      typeof o.validation === t(2220) ? "includes" in o[t(2850)] ? (r = t(295) + o[t(2850)][t(555)] + '"', typeof o[t(2850)][t(285)] === t(867) && (r = r + t(2180) + o[t(2850)][t(285)])) : t(1654) in o[t(2850)] ? r = t(2362) + o[t(2850)].startsWith + '"' : t(579) in o.validation ? r = t(371) + o[t(2850)][t(579)] + '"' : Te[t(1635)](o[t(2850)]) : o[t(2850)] !== t(2840) ? r = "Invalid " + o[t(2850)] : r = t(750);
      break;
    case K[t(2627)]:
      o[t(2291)] === t(1912) ? r = "Array must contain " + (o[t(2164)] ? t(469) : o[t(1752)] ? t(1198) : t(2049)) + " " + o[t(813)] + t(2469) : o[t(2291)] === t(2028) ? r = "String must contain " + (o[t(2164)] ? t(469) : o.inclusive ? "at least" : t(2319)) + " " + o.minimum + " character(s)" : o[t(2291)] === t(867) ? r = t(1810) + (o[t(2164)] ? t(2041) : o[t(1752)] ? "greater than or equal to " : "greater than ") + o[t(813)] : o[t(2291)] === t(1373) ? r = t(1810) + (o.exact ? "exactly equal to " : o[t(1752)] ? t(1144) : t(2779)) + o.minimum : o.type === t(2923) ? r = "Date must be " + (o[t(2164)] ? "exactly equal to " : o[t(1752)] ? t(1144) : t(2779)) + new Date(Number(o[t(813)])) : r = t(1227);
      break;
    case K[t(457)]:
      o[t(2291)] === t(1912) ? r = t(397) + (o[t(2164)] ? "exactly" : o[t(1752)] ? t(1758) : t(571)) + " " + o[t(1613)] + " element(s)" : o[t(2291)] === "string" ? r = t(2555) + (o.exact ? t(469) : o.inclusive ? t(1758) : t(787)) + " " + o.maximum + t(2774) : o[t(2291)] === t(867) ? r = t(1810) + (o[t(2164)] ? t(469) : o[t(1752)] ? t(2504) : "less than") + " " + o[t(1613)] : o.type === "bigint" ? r = t(2685) + (o[t(2164)] ? t(469) : o[t(1752)] ? t(2504) : t(571)) + " " + o[t(1613)] : o[t(2291)] === t(2923) ? r = t(777) + (o[t(2164)] ? t(469) : o.inclusive ? t(1898) : "smaller than") + " " + new Date(Number(o[t(1613)])) : r = "Invalid input";
      break;
    case K[t(2126)]:
      r = t(1227);
      break;
    case K[t(2444)]:
      r = t(932);
      break;
    case K[t(694)]:
      r = t(1883) + o[t(2342)];
      break;
    case K.not_finite:
      r = t(1850);
      break;
    default:
      r = x.defaultError, Te[t(1635)](o);
  }
  return { message: r };
};
let Mn = Ut;
function $n() {
  return Mn;
}
const Un = (o) => {
  const x = a, { data: t, path: r, errorMaps: e, issueData: s } = o, n = [...r, ...s[x(648)] || []], i = { ...s, path: n };
  if (s[x(2461)] !== void 0) return { ...s, path: n, message: s[x(2461)] };
  let c = "";
  const u = e.filter((d) => !!d)[x(1908)]().reverse();
  for (const d of u)
    c = d(i, { data: t, defaultError: c })[x(2461)];
  return { ...s, path: n, message: c };
};
function Y(o, x) {
  const t = a, r = $n(), e = Un({ issueData: x, data: o[t(1506)], path: o.path, errorMaps: [o.common[t(2082)], o[t(2983)], r, r === Ut ? void 0 : Ut][t(362)]((s) => !!s) });
  o[t(2919)].issues[t(3019)](e);
}
class e0 {
  constructor() {
    const x = a;
    this[x(935)] = "valid";
  }
  [a(2726)]() {
    const x = a;
    this[x(935)] === x(467) && (this.value = "dirty");
  }
  [a(715)]() {
    const x = a;
    this.value !== x(1363) && (this[x(935)] = x(1363));
  }
  static [a(2628)](x, t) {
    const r = a, e = [];
    for (const s of t) {
      if (s.status === r(1363)) return he;
      s.status === "dirty" && x[r(2726)](), e[r(3019)](s[r(935)]);
    }
    return { status: x[r(935)], value: e };
  }
  static async [a(2684)](x, t) {
    const r = a, e = [];
    for (const s of t) {
      const n = await s.key, i = await s[r(935)];
      e[r(3019)]({ key: n, value: i });
    }
    return e0[r(574)](x, e);
  }
  static [a(574)](x, t) {
    const r = a, e = {};
    for (const s of t) {
      const { key: n, value: i } = s;
      if (n[r(1071)] === "aborted" || i[r(1071)] === r(1363)) return he;
      n.status === r(2726) && x[r(2726)](), i[r(1071)] === r(2726) && x[r(2726)](), n.value !== "__proto__" && (typeof i[r(935)] !== r(2781) || s[r(1151)]) && (e[n[r(935)]] = i[r(935)]);
    }
    return { status: x[r(935)], value: e };
  }
}
const he = Object.freeze({ status: a(1363) }), Q0 = (o) => ({ status: "dirty", value: o }), a0 = (o) => ({ status: "valid", value: o }), _a = (o) => o[a(1071)] === a(1363), Na = (o) => o.status === a(2726), H0 = (o) => o[a(1071)] === a(467), gx = (o) => typeof Promise < "u" && o instanceof Promise;
var re;
(function(o) {
  const x = a;
  o.errToObj = (t) => typeof t === x(2028) ? { message: t } : t || {}, o[x(511)] = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(re || (re = {}));
class p0 {
  constructor(x, t, r, e) {
    const s = a;
    this[s(2066)] = [], this.parent = x, this.data = t, this._path = r, this._key = e;
  }
  get [a(648)]() {
    const x = a;
    return !this[x(2066)][x(1148)] && (Array.isArray(this[x(2132)]) ? this[x(2066)].push(...this[x(2847)], ...this[x(2132)]) : this[x(2066)][x(3019)](...this[x(2847)], this[x(2132)])), this[x(2066)];
  }
}
const Ta = (o, x) => {
  const t = a;
  if (H0(x)) return { success: !0, data: x[t(935)] };
  if (!o.common.issues[t(1148)]) throw new Error("Validation failed but no issues detected.");
  return { success: !1, get error() {
    const r = t;
    if (this[r(2408)]) return this[r(2408)];
    const e = new P0(o[r(2919)][r(995)]);
    return this[r(2408)] = e, this[r(2408)];
  } };
};
function we(o) {
  const x = a;
  if (!o) return {};
  const { errorMap: t, invalid_type_error: r, required_error: e, description: s } = o;
  if (t && (r || e)) throw new Error(x(2733));
  return t ? { errorMap: t, description: s } : { errorMap: (i, c) => {
    const u = x, { message: d } = o;
    return i[u(2345)] === u(1905) ? { message: d ?? c[u(790)] } : typeof c.data > "u" ? { message: d ?? e ?? c[u(790)] } : i[u(2345)] !== u(2165) ? { message: c.defaultError } : { message: d ?? r ?? c.defaultError };
  }, description: s };
}
function Z(o, x) {
  return o = o - 259, Px()[o];
}
class Fe {
  get description() {
    const x = a;
    return this[x(2200)][x(2428)];
  }
  [a(904)](x) {
    return E0(x[a(1506)]);
  }
  [a(1310)](x, t) {
    const r = a;
    return t || { common: x.parent[r(2919)], data: x[r(1506)], parsedType: E0(x[r(1506)]), schemaErrorMap: this[r(2200)][r(3e3)], path: x.path, parent: x[r(1181)] };
  }
  [a(2437)](x) {
    const t = a;
    return { status: new e0(), ctx: { common: x[t(1181)][t(2919)], data: x.data, parsedType: E0(x[t(1506)]), schemaErrorMap: this[t(2200)][t(3e3)], path: x[t(648)], parent: x[t(1181)] } };
  }
  _parseSync(x) {
    const t = a, r = this[t(2297)](x);
    if (gx(r)) throw new Error(t(3013));
    return r;
  }
  _parseAsync(x) {
    const t = a, r = this[t(2297)](x);
    return Promise[t(855)](r);
  }
  [a(1598)](x, t) {
    const r = a, e = this.safeParse(x, t);
    if (e[r(2186)]) return e[r(1506)];
    throw e[r(1491)];
  }
  [a(1110)](x, t) {
    const r = a, e = { common: { issues: [], async: (t == null ? void 0 : t[r(2538)]) ?? !1, contextualErrorMap: t == null ? void 0 : t[r(3e3)] }, path: (t == null ? void 0 : t[r(648)]) || [], schemaErrorMap: this[r(2200)][r(3e3)], parent: null, data: x, parsedType: E0(x) }, s = this[r(1386)]({ data: x, path: e[r(648)], parent: e });
    return Ta(e, s);
  }
  [a(2458)](x) {
    var e, s;
    const t = a, r = { common: { issues: [], async: !!this[t(2995)][t(2538)] }, path: [], schemaErrorMap: this[t(2200)][t(3e3)], parent: null, data: x, parsedType: E0(x) };
    if (!this["~standard"][t(2538)]) try {
      const n = this[t(1386)]({ data: x, path: [], parent: r });
      return H0(n) ? { value: n.value } : { issues: r[t(2919)].issues };
    } catch (n) {
      (s = (e = n == null ? void 0 : n[t(2461)]) == null ? void 0 : e[t(1119)]()) != null && s[t(555)](t(1255)) && (this[t(2995)].async = !0), r[t(2919)] = { issues: [], async: !0 };
    }
    return this[t(1923)]({ data: x, path: [], parent: r }).then((n) => H0(n) ? { value: n[t(935)] } : { issues: r[t(2919)][t(995)] });
  }
  async parseAsync(x, t) {
    const r = a, e = await this.safeParseAsync(x, t);
    if (e[r(2186)]) return e.data;
    throw e.error;
  }
  async [a(1335)](x, t) {
    const r = a, e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[r(3e3)], async: !0 }, path: (t == null ? void 0 : t[r(648)]) || [], schemaErrorMap: this[r(2200)][r(3e3)], parent: null, data: x, parsedType: E0(x) }, s = this._parse({ data: x, path: e.path, parent: e }), n = await (gx(s) ? s : Promise[r(855)](s));
    return Ta(e, n);
  }
  [a(2921)](x, t) {
    const r = (e) => {
      const s = Z;
      return typeof t === s(2028) || typeof t === s(2781) ? { message: t } : typeof t == "function" ? t(e) : t;
    };
    return this._refinement((e, s) => {
      const n = Z, i = x(e), c = () => s[n(960)]({ code: K[n(2126)], ...r(e) });
      return typeof Promise !== n(2781) && i instanceof Promise ? i[n(634)]((u) => u ? !0 : (c(), !1)) : i ? !0 : (c(), !1);
    });
  }
  refinement(x, t) {
    const r = a;
    return this[r(889)]((e, s) => {
      const n = r;
      return x(e) ? !0 : (s[n(960)](typeof t === n(1149) ? t(e, s) : t), !1);
    });
  }
  [a(889)](x) {
    return new T0({ schema: this, typeName: pe.ZodEffects, effect: { type: "refinement", refinement: x } });
  }
  superRefine(x) {
    return this[a(889)](x);
  }
  constructor(x) {
    const t = a;
    this[t(2721)] = this[t(1335)], this._def = x, this[t(1598)] = this[t(1598)].bind(this), this.safeParse = this.safeParse[t(2764)](this), this.parseAsync = this[t(650)][t(2764)](this), this.safeParseAsync = this[t(1335)][t(2764)](this), this[t(2721)] = this[t(2721)].bind(this), this.refine = this[t(2921)][t(2764)](this), this.refinement = this[t(2749)][t(2764)](this), this[t(1637)] = this[t(1637)][t(2764)](this), this[t(2184)] = this[t(2184)].bind(this), this[t(3011)] = this[t(3011)][t(2764)](this), this[t(405)] = this[t(405)][t(2764)](this), this.array = this[t(1912)].bind(this), this.promise = this[t(2828)].bind(this), this.or = this.or[t(2764)](this), this[t(1919)] = this.and[t(2764)](this), this.transform = this[t(1593)][t(2764)](this), this[t(2970)] = this[t(2970)].bind(this), this[t(2096)] = this[t(2096)][t(2764)](this), this[t(1045)] = this[t(1045)][t(2764)](this), this[t(1550)] = this[t(1550)][t(2764)](this), this[t(2340)] = this.pipe[t(2764)](this), this[t(1788)] = this[t(1788)].bind(this), this.isNullable = this[t(2808)][t(2764)](this), this.isOptional = this[t(2187)][t(2764)](this), this[t(2995)] = { version: 1, vendor: "zod", validate: (r) => this["~validate"](r) };
  }
  [a(2184)]() {
    const x = a;
    return S0[x(558)](this, this[x(2200)]);
  }
  [a(3011)]() {
    return D0[a(558)](this, this._def);
  }
  [a(405)]() {
    const x = a;
    return this[x(3011)]()[x(2184)]();
  }
  [a(1912)]() {
    return h0[a(558)](this);
  }
  [a(2828)]() {
    const x = a;
    return Ix[x(558)](this, this[x(2200)]);
  }
  or(x) {
    const t = a;
    return vx.create([this, x], this[t(2200)]);
  }
  and(x) {
    const t = a;
    return wx[t(558)](this, x, this[t(2200)]);
  }
  transform(x) {
    const t = a;
    return new T0({ ...we(this[t(2200)]), schema: this, typeName: pe[t(1728)], effect: { type: t(1593), transform: x } });
  }
  [a(2096)](x) {
    const t = a, r = typeof x === t(1149) ? x : () => x;
    return new Ex({ ...we(this[t(2200)]), innerType: this, defaultValue: r, typeName: pe[t(1388)] });
  }
  brand() {
    const x = a;
    return new Ms({ typeName: pe[x(1010)], type: this, ...we(this[x(2200)]) });
  }
  [a(1045)](x) {
    const t = a, r = typeof x === t(1149) ? x : () => x;
    return new Rx({ ...we(this[t(2200)]), innerType: this, catchValue: r, typeName: pe.ZodCatch });
  }
  [a(1550)](x) {
    const t = a, r = this[t(1230)];
    return new r({ ...this[t(2200)], description: x });
  }
  pipe(x) {
    return oa[a(558)](this, x);
  }
  [a(1788)]() {
    return Cx[a(558)](this);
  }
  [a(2187)]() {
    const x = a;
    return this[x(1110)](void 0)[x(2186)];
  }
  [a(2808)]() {
    const x = a;
    return this[x(1110)](null)[x(2186)];
  }
}
const zn = /^c[^\s-]{8,}$/i, Hn = /^[0-9a-z]+$/, Vn = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Bn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Wn = /^[a-z0-9_-]{21}$/i, Kn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Zn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Gn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Jn = a(2101);
let Ux;
const Qn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Xn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Yn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, eo = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, xo = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, to = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ds = a(838), ao = new RegExp("^" + Ds + "$");
function js(o) {
  const x = a;
  let t = x(1005);
  o[x(394)] ? t = t + x(1551) + o[x(394)] + "}" : o[x(394)] == null && (t = t + x(2208));
  const r = o[x(394)] ? "+" : "?";
  return x(1489) + t + ")" + r;
}
function ro(o) {
  return new RegExp("^" + js(o) + "$");
}
function so(o) {
  const x = a;
  let t = Ds + "T" + js(o);
  const r = [];
  return r[x(3019)](o.local ? "Z?" : "Z"), o[x(2353)] && r.push(x(448)), t = t + "(" + r[x(896)]("|") + ")", new RegExp("^" + t + "$");
}
function no(o, x) {
  const t = a;
  return !!((x === "v4" || !x) && Qn[t(1531)](o) || (x === "v6" || !x) && Yn[t(1531)](o));
}
function oo(o, x) {
  const t = a;
  if (!Kn[t(1531)](o)) return !1;
  try {
    const [r] = o[t(1958)](".");
    if (!r) return !1;
    const e = r[t(1252)](/-/g, "+").replace(/_/g, "/")[t(2645)](r.length + (4 - r[t(1148)] % 4) % 4, "="), s = JSON[t(1598)](atob(e));
    return !(typeof s != "object" || s === null || "typ" in s && (s == null ? void 0 : s[t(1070)]) !== t(596) || !s[t(2039)] || x && s.alg !== x);
  } catch {
    return !1;
  }
}
function io(o, x) {
  const t = a;
  return !!((x === "v4" || !x) && Xn[t(1531)](o) || (x === "v6" || !x) && eo[t(1531)](o));
}
class w0 extends Fe {
  _parse(x) {
    const t = a;
    if (this._def[t(2571)] && (x[t(1506)] = String(x.data)), this[t(904)](x) !== ae[t(2028)]) {
      const n = this[t(1310)](x);
      return Y(n, { code: K[t(2165)], expected: ae[t(2028)], received: n[t(1358)] }), he;
    }
    const e = new e0();
    let s;
    for (const n of this[t(2200)].checks)
      if (n[t(1130)] === "min") x[t(1506)][t(1148)] < n[t(935)] && (s = this[t(1310)](x, s), Y(s, { code: K[t(2627)], minimum: n[t(935)], type: t(2028), inclusive: !0, exact: !1, message: n[t(2461)] }), e.dirty());
      else if (n[t(1130)] === t(477)) x.data.length > n[t(935)] && (s = this[t(1310)](x, s), Y(s, { code: K[t(457)], maximum: n[t(935)], type: t(2028), inclusive: !0, exact: !1, message: n[t(2461)] }), e[t(2726)]());
      else if (n[t(1130)] === t(1148)) {
        const i = x[t(1506)][t(1148)] > n[t(935)], c = x[t(1506)][t(1148)] < n[t(935)];
        (i || c) && (s = this[t(1310)](x, s), i ? Y(s, { code: K.too_big, maximum: n[t(935)], type: "string", inclusive: !0, exact: !0, message: n[t(2461)] }) : c && Y(s, { code: K[t(2627)], minimum: n[t(935)], type: t(2028), inclusive: !0, exact: !0, message: n[t(2461)] }), e[t(2726)]());
      } else if (n[t(1130)] === t(1921)) !Gn[t(1531)](x[t(1506)]) && (s = this._getOrReturnCtx(x, s), Y(s, { validation: t(1921), code: K.invalid_string, message: n[t(2461)] }), e[t(2726)]());
      else if (n[t(1130)] === t(1562)) !Ux && (Ux = new RegExp(Jn, "u")), !Ux[t(1531)](x[t(1506)]) && (s = this[t(1310)](x, s), Y(s, { validation: t(1562), code: K[t(532)], message: n[t(2461)] }), e[t(2726)]());
      else if (n[t(1130)] === t(1486)) !Bn.test(x.data) && (s = this[t(1310)](x, s), Y(s, { validation: t(1486), code: K.invalid_string, message: n[t(2461)] }), e[t(2726)]());
      else if (n[t(1130)] === t(2402)) !Wn[t(1531)](x[t(1506)]) && (s = this[t(1310)](x, s), Y(s, { validation: "nanoid", code: K[t(532)], message: n[t(2461)] }), e[t(2726)]());
      else if (n[t(1130)] === t(1839)) !zn[t(1531)](x[t(1506)]) && (s = this._getOrReturnCtx(x, s), Y(s, { validation: t(1839), code: K.invalid_string, message: n[t(2461)] }), e[t(2726)]());
      else if (n.kind === "cuid2") !Hn.test(x[t(1506)]) && (s = this._getOrReturnCtx(x, s), Y(s, { validation: t(1678), code: K.invalid_string, message: n.message }), e[t(2726)]());
      else if (n[t(1130)] === t(2351)) !Vn[t(1531)](x[t(1506)]) && (s = this[t(1310)](x, s), Y(s, { validation: "ulid", code: K.invalid_string, message: n.message }), e[t(2726)]());
      else if (n[t(1130)] === t(2740)) try {
        new URL(x.data);
      } catch {
        s = this[t(1310)](x, s), Y(s, { validation: "url", code: K[t(532)], message: n[t(2461)] }), e[t(2726)]();
      }
      else
        n[t(1130)] === t(2840) ? (n[t(2840)].lastIndex = 0, !n[t(2840)][t(1531)](x[t(1506)]) && (s = this[t(1310)](x, s), Y(s, { validation: t(2840), code: K.invalid_string, message: n[t(2461)] }), e[t(2726)]())) : n[t(1130)] === t(2845) ? x[t(1506)] = x[t(1506)].trim() : n[t(1130)] === "includes" ? !x[t(1506)][t(555)](n[t(935)], n[t(285)]) && (s = this[t(1310)](x, s), Y(s, { code: K[t(532)], validation: { includes: n[t(935)], position: n.position }, message: n[t(2461)] }), e[t(2726)]()) : n[t(1130)] === t(1119) ? x[t(1506)] = x.data[t(1119)]() : n.kind === "toUpperCase" ? x[t(1506)] = x.data[t(1998)]() : n[t(1130)] === t(1654) ? !x[t(1506)][t(1654)](n[t(935)]) && (s = this._getOrReturnCtx(x, s), Y(s, { code: K[t(532)], validation: { startsWith: n[t(935)] }, message: n[t(2461)] }), e.dirty()) : n[t(1130)] === t(579) ? !x[t(1506)].endsWith(n[t(935)]) && (s = this[t(1310)](x, s), Y(s, { code: K[t(532)], validation: { endsWith: n.value }, message: n[t(2461)] }), e.dirty()) : n[t(1130)] === "datetime" ? !so(n).test(x[t(1506)]) && (s = this._getOrReturnCtx(x, s), Y(s, { code: K.invalid_string, validation: t(2988), message: n[t(2461)] }), e[t(2726)]()) : n[t(1130)] === "date" ? !ao.test(x[t(1506)]) && (s = this._getOrReturnCtx(x, s), Y(s, { code: K.invalid_string, validation: t(2923), message: n[t(2461)] }), e[t(2726)]()) : n[t(1130)] === "time" ? !ro(n)[t(1531)](x.data) && (s = this[t(1310)](x, s), Y(s, { code: K.invalid_string, validation: t(1129), message: n[t(2461)] }), e[t(2726)]()) : n[t(1130)] === "duration" ? !Zn[t(1531)](x[t(1506)]) && (s = this[t(1310)](x, s), Y(s, { validation: t(2658), code: K.invalid_string, message: n[t(2461)] }), e[t(2726)]()) : n[t(1130)] === "ip" ? !no(x[t(1506)], n.version) && (s = this[t(1310)](x, s), Y(s, { validation: "ip", code: K[t(532)], message: n[t(2461)] }), e[t(2726)]()) : n[t(1130)] === "jwt" ? !oo(x[t(1506)], n[t(2039)]) && (s = this[t(1310)](x, s), Y(s, { validation: "jwt", code: K[t(532)], message: n[t(2461)] }), e.dirty()) : n.kind === t(2548) ? !io(x[t(1506)], n[t(2317)]) && (s = this[t(1310)](x, s), Y(s, { validation: t(2548), code: K[t(532)], message: n[t(2461)] }), e[t(2726)]()) : n.kind === t(1997) ? !xo[t(1531)](x[t(1506)]) && (s = this[t(1310)](x, s), Y(s, { validation: "base64", code: K[t(532)], message: n[t(2461)] }), e[t(2726)]()) : n[t(1130)] === t(3026) ? !to[t(1531)](x.data) && (s = this[t(1310)](x, s), Y(s, { validation: "base64url", code: K[t(532)], message: n.message }), e[t(2726)]()) : Te[t(1635)](n);
    return { status: e[t(935)], value: x[t(1506)] };
  }
  [a(1476)](x, t, r) {
    const e = a;
    return this[e(2749)]((s) => x[e(1531)](s), { validation: t, code: K.invalid_string, ...re[e(2404)](r) });
  }
  [a(1616)](x) {
    const t = a;
    return new w0({ ...this[t(2200)], checks: [...this[t(2200)][t(2978)], x] });
  }
  [a(1921)](x) {
    const t = a;
    return this[t(1616)]({ kind: t(1921), ...re[t(2404)](x) });
  }
  [a(2740)](x) {
    const t = a;
    return this[t(1616)]({ kind: t(2740), ...re[t(2404)](x) });
  }
  [a(1562)](x) {
    const t = a;
    return this._addCheck({ kind: "emoji", ...re[t(2404)](x) });
  }
  [a(1486)](x) {
    const t = a;
    return this._addCheck({ kind: "uuid", ...re[t(2404)](x) });
  }
  [a(2402)](x) {
    return this[a(1616)]({ kind: "nanoid", ...re.errToObj(x) });
  }
  [a(1839)](x) {
    const t = a;
    return this[t(1616)]({ kind: "cuid", ...re[t(2404)](x) });
  }
  [a(1678)](x) {
    const t = a;
    return this[t(1616)]({ kind: t(1678), ...re[t(2404)](x) });
  }
  ulid(x) {
    const t = a;
    return this._addCheck({ kind: "ulid", ...re[t(2404)](x) });
  }
  [a(1997)](x) {
    const t = a;
    return this._addCheck({ kind: t(1997), ...re.errToObj(x) });
  }
  [a(3026)](x) {
    const t = a;
    return this[t(1616)]({ kind: t(3026), ...re[t(2404)](x) });
  }
  jwt(x) {
    const t = a;
    return this[t(1616)]({ kind: t(2529), ...re[t(2404)](x) });
  }
  ip(x) {
    const t = a;
    return this._addCheck({ kind: "ip", ...re[t(2404)](x) });
  }
  cidr(x) {
    const t = a;
    return this._addCheck({ kind: t(2548), ...re.errToObj(x) });
  }
  [a(2988)](x) {
    const t = a;
    return typeof x === t(2028) ? this[t(1616)]({ kind: t(2988), precision: null, offset: !1, local: !1, message: x }) : this[t(1616)]({ kind: "datetime", precision: typeof (x == null ? void 0 : x.precision) === t(2781) ? null : x == null ? void 0 : x[t(394)], offset: (x == null ? void 0 : x.offset) ?? !1, local: (x == null ? void 0 : x[t(2056)]) ?? !1, ...re[t(2404)](x == null ? void 0 : x[t(2461)]) });
  }
  [a(2923)](x) {
    const t = a;
    return this[t(1616)]({ kind: t(2923), message: x });
  }
  time(x) {
    const t = a;
    return typeof x == "string" ? this[t(1616)]({ kind: t(1129), precision: null, message: x }) : this[t(1616)]({ kind: t(1129), precision: typeof (x == null ? void 0 : x[t(394)]) === t(2781) ? null : x == null ? void 0 : x[t(394)], ...re[t(2404)](x == null ? void 0 : x[t(2461)]) });
  }
  [a(2658)](x) {
    const t = a;
    return this[t(1616)]({ kind: t(2658), ...re[t(2404)](x) });
  }
  [a(2840)](x, t) {
    const r = a;
    return this[r(1616)]({ kind: "regex", regex: x, ...re[r(2404)](t) });
  }
  [a(555)](x, t) {
    const r = a;
    return this[r(1616)]({ kind: r(555), value: x, position: t == null ? void 0 : t[r(285)], ...re.errToObj(t == null ? void 0 : t[r(2461)]) });
  }
  [a(1654)](x, t) {
    const r = a;
    return this[r(1616)]({ kind: r(1654), value: x, ...re[r(2404)](t) });
  }
  [a(579)](x, t) {
    const r = a;
    return this[r(1616)]({ kind: r(579), value: x, ...re[r(2404)](t) });
  }
  [a(316)](x, t) {
    const r = a;
    return this[r(1616)]({ kind: r(316), value: x, ...re[r(2404)](t) });
  }
  max(x, t) {
    const r = a;
    return this[r(1616)]({ kind: r(477), value: x, ...re[r(2404)](t) });
  }
  [a(1148)](x, t) {
    const r = a;
    return this[r(1616)]({ kind: r(1148), value: x, ...re[r(2404)](t) });
  }
  [a(2814)](x) {
    const t = a;
    return this[t(316)](1, re[t(2404)](x));
  }
  [a(2845)]() {
    const x = a;
    return new w0({ ...this[x(2200)], checks: [...this[x(2200)][x(2978)], { kind: x(2845) }] });
  }
  [a(1119)]() {
    const x = a;
    return new w0({ ...this[x(2200)], checks: [...this[x(2200)][x(2978)], { kind: x(1119) }] });
  }
  [a(1998)]() {
    const x = a;
    return new w0({ ...this._def, checks: [...this[x(2200)][x(2978)], { kind: "toUpperCase" }] });
  }
  get isDatetime() {
    const x = a;
    return !!this[x(2200)][x(2978)].find((t) => t.kind === x(2988));
  }
  get [a(1339)]() {
    const x = a;
    return !!this[x(2200)].checks.find((t) => t[x(1130)] === "date");
  }
  get [a(1691)]() {
    const x = a;
    return !!this[x(2200)][x(2978)][x(304)]((t) => t[x(1130)] === x(1129));
  }
  get isDuration() {
    const x = a;
    return !!this._def[x(2978)][x(304)]((t) => t[x(1130)] === "duration");
  }
  get [a(1894)]() {
    const x = a;
    return !!this[x(2200)][x(2978)].find((t) => t[x(1130)] === x(1921));
  }
  get [a(2001)]() {
    const x = a;
    return !!this[x(2200)][x(2978)][x(304)]((t) => t[x(1130)] === x(2740));
  }
  get [a(1906)]() {
    const x = a;
    return !!this[x(2200)][x(2978)].find((t) => t[x(1130)] === x(1562));
  }
  get [a(2212)]() {
    const x = a;
    return !!this._def[x(2978)][x(304)]((t) => t[x(1130)] === x(1486));
  }
  get [a(1681)]() {
    const x = a;
    return !!this[x(2200)][x(2978)][x(304)]((t) => t.kind === x(2402));
  }
  get [a(837)]() {
    return !!this[a(2200)].checks.find((t) => t.kind === "cuid");
  }
  get [a(563)]() {
    const x = a;
    return !!this[x(2200)].checks[x(304)]((t) => t[x(1130)] === "cuid2");
  }
  get [a(998)]() {
    const x = a;
    return !!this[x(2200)].checks[x(304)]((t) => t[x(1130)] === x(2351));
  }
  get [a(2576)]() {
    const x = a;
    return !!this._def[x(2978)][x(304)]((t) => t[x(1130)] === "ip");
  }
  get [a(788)]() {
    const x = a;
    return !!this._def[x(2978)][x(304)]((t) => t[x(1130)] === x(2548));
  }
  get [a(1830)]() {
    const x = a;
    return !!this[x(2200)].checks.find((t) => t[x(1130)] === x(1997));
  }
  get [a(597)]() {
    const x = a;
    return !!this[x(2200)][x(2978)][x(304)]((t) => t[x(1130)] === x(3026));
  }
  get [a(1979)]() {
    const x = a;
    let t = null;
    for (const r of this._def[x(2978)])
      r[x(1130)] === "min" && (t === null || r[x(935)] > t) && (t = r.value);
    return t;
  }
  get [a(388)]() {
    const x = a;
    let t = null;
    for (const r of this[x(2200)][x(2978)])
      r[x(1130)] === "max" && (t === null || r[x(935)] < t) && (t = r[x(935)]);
    return t;
  }
}
w0[a(558)] = (o) => {
  const x = a;
  return new w0({ checks: [], typeName: pe[x(1620)], coerce: (o == null ? void 0 : o[x(2571)]) ?? !1, ...we(o) });
};
function co(o, x) {
  const t = a, r = (o[t(511)]()[t(1958)](".")[1] || "")[t(1148)], e = (x[t(511)]()[t(1958)](".")[1] || "")[t(1148)], s = r > e ? r : e, n = Number[t(2125)](o[t(1990)](s)[t(1252)](".", "")), i = Number.parseInt(x.toFixed(s)[t(1252)](".", ""));
  return n % i / 10 ** s;
}
class V0 extends Fe {
  constructor() {
    const x = a;
    super(...arguments), this[x(316)] = this[x(2796)], this.max = this[x(2842)], this[x(2075)] = this[x(2342)];
  }
  [a(2297)](x) {
    const t = a;
    if (this[t(2200)][t(2571)] && (x[t(1506)] = Number(x.data)), this[t(904)](x) !== ae.number) {
      const n = this[t(1310)](x);
      return Y(n, { code: K[t(2165)], expected: ae[t(867)], received: n[t(1358)] }), he;
    }
    let e;
    const s = new e0();
    for (const n of this[t(2200)][t(2978)])
      n[t(1130)] === t(2021) ? !Te[t(826)](x.data) && (e = this[t(1310)](x, e), Y(e, { code: K.invalid_type, expected: t(1999), received: t(2683), message: n[t(2461)] }), s[t(2726)]()) : n[t(1130)] === t(316) ? (n[t(1752)] ? x.data < n[t(935)] : x.data <= n[t(935)]) && (e = this[t(1310)](x, e), Y(e, { code: K[t(2627)], minimum: n[t(935)], type: t(867), inclusive: n.inclusive, exact: !1, message: n[t(2461)] }), s.dirty()) : n.kind === t(477) ? (n[t(1752)] ? x[t(1506)] > n[t(935)] : x.data >= n[t(935)]) && (e = this[t(1310)](x, e), Y(e, { code: K.too_big, maximum: n[t(935)], type: t(867), inclusive: n.inclusive, exact: !1, message: n[t(2461)] }), s[t(2726)]()) : n[t(1130)] === t(2342) ? co(x[t(1506)], n[t(935)]) !== 0 && (e = this[t(1310)](x, e), Y(e, { code: K[t(694)], multipleOf: n.value, message: n[t(2461)] }), s[t(2726)]()) : n[t(1130)] === t(2676) ? !Number.isFinite(x.data) && (e = this[t(1310)](x, e), Y(e, { code: K[t(1136)], message: n[t(2461)] }), s[t(2726)]()) : Te.assertNever(n);
    return { status: s[t(935)], value: x.data };
  }
  [a(2796)](x, t) {
    const r = a;
    return this[r(449)](r(316), x, !0, re.toString(t));
  }
  gt(x, t) {
    const r = a;
    return this[r(449)](r(316), x, !1, re.toString(t));
  }
  [a(2842)](x, t) {
    const r = a;
    return this[r(449)](r(477), x, !0, re.toString(t));
  }
  lt(x, t) {
    const r = a;
    return this[r(449)]("max", x, !1, re[r(511)](t));
  }
  [a(449)](x, t, r, e) {
    const s = a;
    return new V0({ ...this[s(2200)], checks: [...this[s(2200)][s(2978)], { kind: x, value: t, inclusive: r, message: re[s(511)](e) }] });
  }
  [a(1616)](x) {
    const t = a;
    return new V0({ ...this[t(2200)], checks: [...this[t(2200)][t(2978)], x] });
  }
  [a(2021)](x) {
    const t = a;
    return this._addCheck({ kind: t(2021), message: re[t(511)](x) });
  }
  [a(778)](x) {
    return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: re.toString(x) });
  }
  [a(2632)](x) {
    const t = a;
    return this._addCheck({ kind: t(477), value: 0, inclusive: !1, message: re[t(511)](x) });
  }
  [a(1203)](x) {
    const t = a;
    return this[t(1616)]({ kind: t(477), value: 0, inclusive: !0, message: re[t(511)](x) });
  }
  nonnegative(x) {
    const t = a;
    return this[t(1616)]({ kind: "min", value: 0, inclusive: !0, message: re[t(511)](x) });
  }
  [a(2342)](x, t) {
    const r = a;
    return this[r(1616)]({ kind: r(2342), value: x, message: re.toString(t) });
  }
  [a(2676)](x) {
    const t = a;
    return this[t(1616)]({ kind: t(2676), message: re[t(511)](x) });
  }
  safe(x) {
    const t = a;
    return this._addCheck({ kind: t(316), inclusive: !0, value: Number.MIN_SAFE_INTEGER, message: re[t(511)](x) })._addCheck({ kind: t(477), inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: re[t(511)](x) });
  }
  get [a(964)]() {
    const x = a;
    let t = null;
    for (const r of this[x(2200)][x(2978)])
      r[x(1130)] === x(316) && (t === null || r[x(935)] > t) && (t = r.value);
    return t;
  }
  get [a(2084)]() {
    const x = a;
    let t = null;
    for (const r of this[x(2200)][x(2978)])
      r[x(1130)] === x(477) && (t === null || r[x(935)] < t) && (t = r[x(935)]);
    return t;
  }
  get [a(2237)]() {
    const x = a;
    return !!this[x(2200)][x(2978)][x(304)]((t) => t[x(1130)] === x(2021) || t[x(1130)] === x(2342) && Te[x(826)](t[x(935)]));
  }
  get [a(1024)]() {
    const x = a;
    let t = null, r = null;
    for (const e of this._def[x(2978)]) {
      if (e[x(1130)] === x(2676) || e[x(1130)] === "int" || e.kind === x(2342)) return !0;
      e[x(1130)] === x(316) ? (r === null || e[x(935)] > r) && (r = e[x(935)]) : e[x(1130)] === x(477) && (t === null || e[x(935)] < t) && (t = e[x(935)]);
    }
    return Number[x(1024)](r) && Number[x(1024)](t);
  }
}
V0[a(558)] = (o) => {
  const x = a;
  return new V0({ checks: [], typeName: pe[x(1465)], coerce: (o == null ? void 0 : o[x(2571)]) || !1, ...we(o) });
};
class tx extends Fe {
  constructor() {
    const x = a;
    super(...arguments), this[x(316)] = this.gte, this[x(477)] = this[x(2842)];
  }
  [a(2297)](x) {
    const t = a;
    if (this[t(2200)][t(2571)]) try {
      x[t(1506)] = BigInt(x[t(1506)]);
    } catch {
      return this[t(524)](x);
    }
    if (this[t(904)](x) !== ae[t(1373)]) return this[t(524)](x);
    let e;
    const s = new e0();
    for (const n of this[t(2200)][t(2978)])
      n[t(1130)] === t(316) ? (n[t(1752)] ? x[t(1506)] < n[t(935)] : x[t(1506)] <= n[t(935)]) && (e = this[t(1310)](x, e), Y(e, { code: K[t(2627)], type: "bigint", minimum: n[t(935)], inclusive: n.inclusive, message: n.message }), s[t(2726)]()) : n.kind === t(477) ? (n[t(1752)] ? x.data > n.value : x[t(1506)] >= n[t(935)]) && (e = this[t(1310)](x, e), Y(e, { code: K[t(457)], type: t(1373), maximum: n.value, inclusive: n[t(1752)], message: n.message }), s.dirty()) : n.kind === "multipleOf" ? x.data % n[t(935)] !== BigInt(0) && (e = this[t(1310)](x, e), Y(e, { code: K[t(694)], multipleOf: n[t(935)], message: n[t(2461)] }), s[t(2726)]()) : Te[t(1635)](n);
    return { status: s.value, value: x[t(1506)] };
  }
  [a(524)](x) {
    const t = a, r = this[t(1310)](x);
    return Y(r, { code: K[t(2165)], expected: ae[t(1373)], received: r[t(1358)] }), he;
  }
  gte(x, t) {
    const r = a;
    return this[r(449)]("min", x, !0, re[r(511)](t));
  }
  gt(x, t) {
    const r = a;
    return this[r(449)](r(316), x, !1, re[r(511)](t));
  }
  [a(2842)](x, t) {
    const r = a;
    return this[r(449)]("max", x, !0, re[r(511)](t));
  }
  lt(x, t) {
    const r = a;
    return this[r(449)]("max", x, !1, re[r(511)](t));
  }
  setLimit(x, t, r, e) {
    const s = a;
    return new tx({ ...this[s(2200)], checks: [...this[s(2200)][s(2978)], { kind: x, value: t, inclusive: r, message: re.toString(e) }] });
  }
  [a(1616)](x) {
    const t = a;
    return new tx({ ...this._def, checks: [...this[t(2200)][t(2978)], x] });
  }
  [a(778)](x) {
    const t = a;
    return this[t(1616)]({ kind: t(316), value: BigInt(0), inclusive: !1, message: re[t(511)](x) });
  }
  negative(x) {
    const t = a;
    return this[t(1616)]({ kind: t(477), value: BigInt(0), inclusive: !1, message: re[t(511)](x) });
  }
  [a(1203)](x) {
    const t = a;
    return this._addCheck({ kind: t(477), value: BigInt(0), inclusive: !0, message: re[t(511)](x) });
  }
  [a(2546)](x) {
    const t = a;
    return this._addCheck({ kind: t(316), value: BigInt(0), inclusive: !0, message: re[t(511)](x) });
  }
  [a(2342)](x, t) {
    const r = a;
    return this[r(1616)]({ kind: r(2342), value: x, message: re.toString(t) });
  }
  get [a(964)]() {
    const x = a;
    let t = null;
    for (const r of this._def[x(2978)])
      r[x(1130)] === x(316) && (t === null || r.value > t) && (t = r[x(935)]);
    return t;
  }
  get [a(2084)]() {
    const x = a;
    let t = null;
    for (const r of this[x(2200)].checks)
      r[x(1130)] === x(477) && (t === null || r[x(935)] < t) && (t = r[x(935)]);
    return t;
  }
}
tx.create = (o) => {
  const x = a;
  return new tx({ checks: [], typeName: pe[x(2476)], coerce: (o == null ? void 0 : o[x(2571)]) ?? !1, ...we(o) });
};
class zt extends Fe {
  _parse(x) {
    const t = a;
    if (this[t(2200)].coerce && (x[t(1506)] = !!x[t(1506)]), this[t(904)](x) !== ae[t(2903)]) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: K[t(2165)], expected: ae[t(2903)], received: e[t(1358)] }), he;
    }
    return a0(x[t(1506)]);
  }
}
zt.create = (o) => {
  const x = a;
  return new zt({ typeName: pe[x(1647)], coerce: (o == null ? void 0 : o.coerce) || !1, ...we(o) });
};
class yx extends Fe {
  _parse(x) {
    const t = a;
    if (this[t(2200)][t(2571)] && (x[t(1506)] = new Date(x.data)), this[t(904)](x) !== ae[t(2923)]) {
      const n = this._getOrReturnCtx(x);
      return Y(n, { code: K.invalid_type, expected: ae[t(2923)], received: n[t(1358)] }), he;
    }
    if (Number[t(1632)](x[t(1506)][t(2807)]())) {
      const n = this._getOrReturnCtx(x);
      return Y(n, { code: K[t(1819)] }), he;
    }
    const e = new e0();
    let s;
    for (const n of this[t(2200)][t(2978)])
      n.kind === t(316) ? x[t(1506)].getTime() < n.value && (s = this[t(1310)](x, s), Y(s, { code: K[t(2627)], message: n[t(2461)], inclusive: !0, exact: !1, minimum: n.value, type: t(2923) }), e.dirty()) : n[t(1130)] === "max" ? x.data[t(2807)]() > n[t(935)] && (s = this[t(1310)](x, s), Y(s, { code: K[t(457)], message: n[t(2461)], inclusive: !0, exact: !1, maximum: n[t(935)], type: t(2923) }), e[t(2726)]()) : Te[t(1635)](n);
    return { status: e[t(935)], value: new Date(x[t(1506)][t(2807)]()) };
  }
  [a(1616)](x) {
    const t = a;
    return new yx({ ...this[t(2200)], checks: [...this[t(2200)].checks, x] });
  }
  min(x, t) {
    const r = a;
    return this._addCheck({ kind: r(316), value: x.getTime(), message: re.toString(t) });
  }
  [a(477)](x, t) {
    const r = a;
    return this[r(1616)]({ kind: "max", value: x[r(2807)](), message: re[r(511)](t) });
  }
  get [a(2785)]() {
    const x = a;
    let t = null;
    for (const r of this[x(2200)][x(2978)])
      r[x(1130)] === x(316) && (t === null || r.value > t) && (t = r[x(935)]);
    return t != null ? new Date(t) : null;
  }
  get [a(2026)]() {
    const x = a;
    let t = null;
    for (const r of this[x(2200)][x(2978)])
      r[x(1130)] === x(477) && (t === null || r[x(935)] < t) && (t = r[x(935)]);
    return t != null ? new Date(t) : null;
  }
}
yx.create = (o) => {
  const x = a;
  return new yx({ checks: [], coerce: (o == null ? void 0 : o[x(2571)]) || !1, typeName: pe.ZodDate, ...we(o) });
};
class qa extends Fe {
  [a(2297)](x) {
    const t = a;
    if (this[t(904)](x) !== ae.symbol) {
      const e = this[t(1310)](x);
      return Y(e, { code: K[t(2165)], expected: ae[t(1732)], received: e[t(1358)] }), he;
    }
    return a0(x.data);
  }
}
qa[a(558)] = (o) => {
  const x = a;
  return new qa({ typeName: pe[x(1627)], ...we(o) });
};
class Ht extends Fe {
  [a(2297)](x) {
    const t = a;
    if (this[t(904)](x) !== ae[t(2781)]) {
      const e = this[t(1310)](x);
      return Y(e, { code: K.invalid_type, expected: ae[t(2781)], received: e[t(1358)] }), he;
    }
    return a0(x[t(1506)]);
  }
}
Ht.create = (o) => {
  const x = a;
  return new Ht({ typeName: pe[x(1292)], ...we(o) });
};
class Vt extends Fe {
  [a(2297)](x) {
    const t = a;
    if (this[t(904)](x) !== ae[t(2607)]) {
      const e = this[t(1310)](x);
      return Y(e, { code: K[t(2165)], expected: ae[t(2607)], received: e.parsedType }), he;
    }
    return a0(x[t(1506)]);
  }
}
Vt[a(558)] = (o) => {
  const x = a;
  return new Vt({ typeName: pe[x(1084)], ...we(o) });
};
class ax extends Fe {
  constructor() {
    const x = a;
    super(...arguments), this[x(2503)] = !0;
  }
  [a(2297)](x) {
    return a0(x.data);
  }
}
ax[a(558)] = (o) => new ax({ typeName: pe.ZodAny, ...we(o) });
class Bt extends Fe {
  constructor() {
    const x = a;
    super(...arguments), this[x(721)] = !0;
  }
  [a(2297)](x) {
    return a0(x[a(1506)]);
  }
}
Bt[a(558)] = (o) => {
  const x = a;
  return new Bt({ typeName: pe[x(972)], ...we(o) });
};
class C0 extends Fe {
  [a(2297)](x) {
    const t = a, r = this[t(1310)](x);
    return Y(r, { code: K.invalid_type, expected: ae[t(1657)], received: r.parsedType }), he;
  }
}
C0[a(558)] = (o) => {
  const x = a;
  return new C0({ typeName: pe[x(2134)], ...we(o) });
};
class Wt extends Fe {
  _parse(x) {
    const t = a;
    if (this[t(904)](x) !== ae.undefined) {
      const e = this[t(1310)](x);
      return Y(e, { code: K[t(2165)], expected: ae[t(1842)], received: e[t(1358)] }), he;
    }
    return a0(x.data);
  }
}
Wt[a(558)] = (o) => {
  const x = a;
  return new Wt({ typeName: pe[x(2171)], ...we(o) });
};
class h0 extends Fe {
  [a(2297)](x) {
    const t = a, { ctx: r, status: e } = this[t(2437)](x), s = this[t(2200)];
    if (r[t(1358)] !== ae[t(1912)]) return Y(r, { code: K.invalid_type, expected: ae.array, received: r[t(1358)] }), he;
    if (s[t(1560)] !== null) {
      const i = r[t(1506)].length > s[t(1560)][t(935)], c = r[t(1506)].length < s[t(1560)][t(935)];
      (i || c) && (Y(r, { code: i ? K[t(457)] : K.too_small, minimum: c ? s[t(1560)].value : void 0, maximum: i ? s.exactLength[t(935)] : void 0, type: t(1912), inclusive: !0, exact: !0, message: s.exactLength[t(2461)] }), e[t(2726)]());
    }
    if (s.minLength !== null && r.data[t(1148)] < s[t(1979)][t(935)] && (Y(r, { code: K.too_small, minimum: s[t(1979)][t(935)], type: t(1912), inclusive: !0, exact: !1, message: s[t(1979)][t(2461)] }), e[t(2726)]()), s.maxLength !== null && r.data[t(1148)] > s[t(388)][t(935)] && (Y(r, { code: K[t(457)], maximum: s[t(388)].value, type: t(1912), inclusive: !0, exact: !1, message: s.maxLength[t(2461)] }), e[t(2726)]()), r[t(2919)][t(2538)]) return Promise.all([...r[t(1506)]][t(2739)]((i, c) => {
      const u = t;
      return s.type[u(1923)](new p0(r, i, r[u(648)], c));
    }))[t(634)]((i) => e0[t(2628)](e, i));
    const n = [...r.data].map((i, c) => {
      const u = t;
      return s[u(2291)]._parseSync(new p0(r, i, r[u(648)], c));
    });
    return e0[t(2628)](e, n);
  }
  get [a(2414)]() {
    const x = a;
    return this[x(2200)][x(2291)];
  }
  [a(316)](x, t) {
    const r = a;
    return new h0({ ...this[r(2200)], minLength: { value: x, message: re[r(511)](t) } });
  }
  [a(477)](x, t) {
    const r = a;
    return new h0({ ...this[r(2200)], maxLength: { value: x, message: re[r(511)](t) } });
  }
  [a(1148)](x, t) {
    const r = a;
    return new h0({ ...this[r(2200)], exactLength: { value: x, message: re.toString(t) } });
  }
  [a(2814)](x) {
    return this[a(316)](1, x);
  }
}
h0[a(558)] = (o, x) => {
  const t = a;
  return new h0({ type: o, minLength: null, maxLength: null, exactLength: null, typeName: pe[t(535)], ...we(x) });
};
function U0(o) {
  const x = a;
  if (o instanceof Ze) {
    const t = {};
    for (const r in o[x(1190)]) {
      const e = o.shape[r];
      t[r] = S0[x(558)](U0(e));
    }
    return new Ze({ ...o[x(2200)], shape: () => t });
  } else
    return o instanceof h0 ? new h0({ ...o._def, type: U0(o[x(2414)]) }) : o instanceof S0 ? S0.create(U0(o[x(2e3)]())) : o instanceof D0 ? D0[x(558)](U0(o[x(2e3)]())) : o instanceof A0 ? A0[x(558)](o[x(1603)].map((t) => U0(t))) : o;
}
class Ze extends Fe {
  constructor() {
    const x = a;
    super(...arguments), this[x(794)] = null, this[x(2517)] = this[x(933)], this[x(586)] = this[x(1735)];
  }
  _getCached() {
    const x = a;
    if (this[x(794)] !== null) return this._cached;
    const t = this[x(2200)][x(1190)](), r = Te.objectKeys(t);
    return this[x(794)] = { shape: t, keys: r }, this[x(794)];
  }
  [a(2297)](x) {
    const t = a;
    if (this[t(904)](x) !== ae[t(2220)]) {
      const d = this._getOrReturnCtx(x);
      return Y(d, { code: K[t(2165)], expected: ae[t(2220)], received: d[t(1358)] }), he;
    }
    const { status: e, ctx: s } = this[t(2437)](x), { shape: n, keys: i } = this[t(1182)](), c = [];
    if (!(this[t(2200)][t(840)] instanceof C0 && this[t(2200)][t(683)] === t(1966))) for (const d in s[t(1506)])
      !i[t(555)](d) && c[t(3019)](d);
    const u = [];
    for (const d of i) {
      const l = n[d], f = s[t(1506)][d];
      u.push({ key: { status: t(467), value: d }, value: l[t(2297)](new p0(s, f, s.path, d)), alwaysSet: d in s.data });
    }
    if (this[t(2200)][t(840)] instanceof C0) {
      const d = this[t(2200)][t(683)];
      if (d === t(933)) for (const l of c)
        u[t(3019)]({ key: { status: t(467), value: l }, value: { status: t(467), value: s[t(1506)][l] } });
      else if (d === t(2716)) c[t(1148)] > 0 && (Y(s, { code: K.unrecognized_keys, keys: c }), e[t(2726)]());
      else if (d !== t(1966)) throw new Error(t(748));
    } else {
      const d = this[t(2200)][t(840)];
      for (const l of c) {
        const f = s[t(1506)][l];
        u.push({ key: { status: t(467), value: l }, value: d[t(2297)](new p0(s, f, s[t(648)], l)), alwaysSet: l in s[t(1506)] });
      }
    }
    return s.common[t(2538)] ? Promise[t(855)]().then(async () => {
      const d = t, l = [];
      for (const f of u) {
        const g = await f.key, h = await f[d(935)];
        l[d(3019)]({ key: g, value: h, alwaysSet: f[d(1151)] });
      }
      return l;
    })[t(634)]((d) => e0.mergeObjectSync(e, d)) : e0.mergeObjectSync(e, u);
  }
  get shape() {
    const x = a;
    return this._def[x(1190)]();
  }
  [a(2716)](x) {
    const t = a;
    return re[t(2404)], new Ze({ ...this[t(2200)], unknownKeys: t(2716), ...x !== void 0 ? { errorMap: (r, e) => {
      var i, c;
      const s = t, n = ((c = (i = this[s(2200)])[s(3e3)]) == null ? void 0 : c.call(i, r, e)[s(2461)]) ?? e[s(790)];
      return r[s(2345)] === s(2592) ? { message: re[s(2404)](x).message ?? n } : { message: n };
    } } : {} });
  }
  strip() {
    const x = a;
    return new Ze({ ...this._def, unknownKeys: x(1966) });
  }
  [a(933)]() {
    const x = a;
    return new Ze({ ...this[x(2200)], unknownKeys: x(933) });
  }
  extend(x) {
    const t = a;
    return new Ze({ ...this._def, shape: () => ({ ...this[t(2200)].shape(), ...x }) });
  }
  [a(1214)](x) {
    const t = a;
    return new Ze({ unknownKeys: x._def.unknownKeys, catchall: x[t(2200)][t(840)], shape: () => ({ ...this[t(2200)][t(1190)](), ...x[t(2200)][t(1190)]() }), typeName: pe.ZodObject });
  }
  [a(2487)](x, t) {
    return this[a(586)]({ [x]: t });
  }
  catchall(x) {
    const t = a;
    return new Ze({ ...this[t(2200)], catchall: x });
  }
  [a(1824)](x) {
    const t = a, r = {};
    for (const e of Te.objectKeys(x))
      x[e] && this[t(1190)][e] && (r[e] = this.shape[e]);
    return new Ze({ ...this[t(2200)], shape: () => r });
  }
  [a(1164)](x) {
    const t = a, r = {};
    for (const e of Te[t(732)](this.shape))
      !x[e] && (r[e] = this[t(1190)][e]);
    return new Ze({ ...this[t(2200)], shape: () => r });
  }
  [a(2526)]() {
    return U0(this);
  }
  [a(2193)](x) {
    const t = a, r = {};
    for (const e of Te[t(732)](this[t(1190)])) {
      const s = this[t(1190)][e];
      x && !x[e] ? r[e] = s : r[e] = s[t(2184)]();
    }
    return new Ze({ ...this[t(2200)], shape: () => r });
  }
  [a(747)](x) {
    const t = a, r = {};
    for (const e of Te[t(732)](this.shape))
      if (x && !x[e]) r[e] = this[t(1190)][e];
      else {
        let n = this.shape[e];
        for (; n instanceof S0; )
          n = n[t(2200)][t(550)];
        r[e] = n;
      }
    return new Ze({ ...this[t(2200)], shape: () => r });
  }
  [a(2539)]() {
    const x = a;
    return Ls(Te[x(732)](this[x(1190)]));
  }
}
Ze[a(558)] = (o, x) => {
  const t = a;
  return new Ze({ shape: () => o, unknownKeys: t(1966), catchall: C0[t(558)](), typeName: pe[t(2113)], ...we(x) });
}, Ze.strictCreate = (o, x) => {
  const t = a;
  return new Ze({ shape: () => o, unknownKeys: t(2716), catchall: C0.create(), typeName: pe[t(2113)], ...we(x) });
}, Ze[a(2015)] = (o, x) => {
  const t = a;
  return new Ze({ shape: o, unknownKeys: "strip", catchall: C0[t(558)](), typeName: pe.ZodObject, ...we(x) });
};
class vx extends Fe {
  [a(2297)](x) {
    const t = a, { ctx: r } = this[t(2437)](x), e = this[t(2200)][t(1341)];
    function s(n) {
      const i = t;
      for (const u of n)
        if (u[i(2468)][i(1071)] === i(467)) return u[i(2468)];
      for (const u of n)
        if (u[i(2468)].status === i(2726)) return r[i(2919)][i(995)].push(...u.ctx[i(2919)][i(995)]), u.result;
      const c = n[i(2739)]((u) => new P0(u[i(287)][i(2919)][i(995)]));
      return Y(r, { code: K[i(1945)], unionErrors: c }), he;
    }
    if (r.common.async) return Promise[t(2497)](e.map(async (n) => {
      const i = t, c = { ...r, common: { ...r.common, issues: [] }, parent: null };
      return { result: await n[i(1923)]({ data: r[i(1506)], path: r.path, parent: c }), ctx: c };
    })).then(s);
    {
      let n;
      const i = [];
      for (const u of e) {
        const d = { ...r, common: { ...r[t(2919)], issues: [] }, parent: null }, l = u[t(1386)]({ data: r[t(1506)], path: r[t(648)], parent: d });
        if (l[t(1071)] === t(467)) return l;
        l[t(1071)] === t(2726) && !n && (n = { result: l, ctx: d }), d[t(2919)][t(995)][t(1148)] && i[t(3019)](d[t(2919)].issues);
      }
      if (n) return r[t(2919)][t(995)][t(3019)](...n[t(287)][t(2919)][t(995)]), n[t(2468)];
      const c = i[t(2739)]((u) => new P0(u));
      return Y(r, { code: K[t(1945)], unionErrors: c }), he;
    }
  }
  get [a(1341)]() {
    const x = a;
    return this[x(2200)][x(1341)];
  }
}
vx.create = (o, x) => {
  const t = a;
  return new vx({ options: o, typeName: pe[t(1574)], ...we(x) });
};
const y0 = (o) => {
  const x = a;
  return o instanceof Zt ? y0(o.schema) : o instanceof T0 ? y0(o[x(550)]()) : o instanceof kx ? [o[x(935)]] : o instanceof O0 ? o[x(1341)] : o instanceof Gt ? Te[x(1800)](o[x(2897)]) : o instanceof Ex ? y0(o[x(2200)][x(550)]) : o instanceof Ht ? [void 0] : o instanceof Vt ? [null] : o instanceof S0 ? [void 0, ...y0(o[x(2e3)]())] : o instanceof D0 ? [null, ...y0(o[x(2e3)]())] : o instanceof Ms || o instanceof Cx ? y0(o[x(2e3)]()) : o instanceof Rx ? y0(o._def[x(550)]) : [];
};
class na extends Fe {
  [a(2297)](x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    if (r[t(1358)] !== ae[t(2220)]) return Y(r, { code: K.invalid_type, expected: ae.object, received: r.parsedType }), he;
    const e = this[t(301)], s = r[t(1506)][e], n = this[t(1965)][t(1507)](s);
    return n ? r[t(2919)][t(2538)] ? n[t(1923)]({ data: r[t(1506)], path: r[t(648)], parent: r }) : n[t(1386)]({ data: r.data, path: r.path, parent: r }) : (Y(r, { code: K[t(2222)], options: Array[t(1546)](this[t(1965)][t(1877)]()), path: [e] }), he);
  }
  get discriminator() {
    const x = a;
    return this._def[x(301)];
  }
  get [a(1341)]() {
    return this[a(2200)].options;
  }
  get [a(1965)]() {
    const x = a;
    return this[x(2200)][x(1965)];
  }
  static [a(558)](x, t, r) {
    const e = a, s = /* @__PURE__ */ new Map();
    for (const n of t) {
      const i = y0(n[e(1190)][x]);
      if (!i[e(1148)]) throw new Error(e(340) + x + e(333));
      for (const c of i) {
        if (s[e(1281)](c)) throw new Error(e(349) + String(x) + " has duplicate value " + String(c));
        s[e(823)](c, n);
      }
    }
    return new na({ typeName: pe[e(2352)], discriminator: x, options: t, optionsMap: s, ...we(r) });
  }
}
function Kt(o, x) {
  const t = a, r = E0(o), e = E0(x);
  if (o === x) return { valid: !0, data: o };
  if (r === ae[t(2220)] && e === ae[t(2220)]) {
    const s = Te[t(732)](x), n = Te[t(732)](o)[t(362)]((c) => s[t(2273)](c) !== -1), i = { ...o, ...x };
    for (const c of n) {
      const u = Kt(o[c], x[c]);
      if (!u[t(467)]) return { valid: !1 };
      i[c] = u.data;
    }
    return { valid: !0, data: i };
  } else if (r === ae.array && e === ae[t(1912)]) {
    if (o[t(1148)] !== x[t(1148)]) return { valid: !1 };
    const s = [];
    for (let n = 0; n < o[t(1148)]; n++) {
      const i = o[n], c = x[n], u = Kt(i, c);
      if (!u[t(467)]) return { valid: !1 };
      s.push(u[t(1506)]);
    }
    return { valid: !0, data: s };
  } else return r === ae[t(2923)] && e === ae[t(2923)] && +o == +x ? { valid: !0, data: o } : { valid: !1 };
}
class wx extends Fe {
  [a(2297)](x) {
    const t = a, { status: r, ctx: e } = this[t(2437)](x), s = (n, i) => {
      const c = t;
      if (_a(n) || _a(i)) return he;
      const u = Kt(n[c(935)], i.value);
      return u.valid ? ((Na(n) || Na(i)) && r[c(2726)](), { status: r[c(935)], value: u[c(1506)] }) : (Y(e, { code: K[c(2444)] }), he);
    };
    return e[t(2919)][t(2538)] ? Promise.all([this[t(2200)][t(268)][t(1923)]({ data: e[t(1506)], path: e.path, parent: e }), this._def.right[t(1923)]({ data: e[t(1506)], path: e[t(648)], parent: e })])[t(634)](([n, i]) => s(n, i)) : s(this._def[t(268)][t(1386)]({ data: e.data, path: e[t(648)], parent: e }), this._def.right[t(1386)]({ data: e[t(1506)], path: e.path, parent: e }));
  }
}
wx[a(558)] = (o, x, t) => {
  const r = a;
  return new wx({ left: o, right: x, typeName: pe[r(1251)], ...we(t) });
};
class A0 extends Fe {
  [a(2297)](x) {
    const t = a, { status: r, ctx: e } = this[t(2437)](x);
    if (e[t(1358)] !== ae[t(1912)]) return Y(e, { code: K[t(2165)], expected: ae[t(1912)], received: e[t(1358)] }), he;
    if (e.data[t(1148)] < this._def[t(1603)].length) return Y(e, { code: K.too_small, minimum: this[t(2200)][t(1603)][t(1148)], inclusive: !0, exact: !1, type: t(1912) }), he;
    !this[t(2200)][t(941)] && e[t(1506)][t(1148)] > this._def[t(1603)].length && (Y(e, { code: K[t(457)], maximum: this._def[t(1603)][t(1148)], inclusive: !0, exact: !1, type: "array" }), r[t(2726)]());
    const n = [...e.data].map((i, c) => {
      const u = t, d = this[u(2200)].items[c] || this[u(2200)][u(941)];
      return d ? d._parse(new p0(e, i, e[u(648)], c)) : null;
    })[t(362)]((i) => !!i);
    return e[t(2919)].async ? Promise[t(2497)](n)[t(634)]((i) => e0[t(2628)](r, i)) : e0.mergeArray(r, n);
  }
  get [a(1603)]() {
    const x = a;
    return this[x(2200)][x(1603)];
  }
  rest(x) {
    const t = a;
    return new A0({ ...this[t(2200)], rest: x });
  }
}
A0.create = (o, x) => {
  const t = a;
  if (!Array[t(500)](o)) throw new Error(t(846));
  return new A0({ items: o, typeName: pe[t(2938)], rest: null, ...we(x) });
};
class Sx extends Fe {
  get keySchema() {
    const x = a;
    return this[x(2200)][x(1378)];
  }
  get [a(2170)]() {
    const x = a;
    return this[x(2200)][x(913)];
  }
  [a(2297)](x) {
    const t = a, { status: r, ctx: e } = this._processInputParams(x);
    if (e[t(1358)] !== ae[t(2220)]) return Y(e, { code: K[t(2165)], expected: ae.object, received: e[t(1358)] }), he;
    const s = [], n = this[t(2200)][t(1378)], i = this[t(2200)][t(913)];
    for (const c in e[t(1506)])
      s.push({ key: n[t(2297)](new p0(e, c, e[t(648)], c)), value: i[t(2297)](new p0(e, e[t(1506)][c], e[t(648)], c)), alwaysSet: c in e[t(1506)] });
    return e[t(2919)][t(2538)] ? e0.mergeObjectAsync(r, s) : e0[t(574)](r, s);
  }
  get [a(2414)]() {
    const x = a;
    return this[x(2200)][x(913)];
  }
  static create(x, t, r) {
    const e = a;
    return t instanceof Fe ? new Sx({ keyType: x, valueType: t, typeName: pe[e(942)], ...we(r) }) : new Sx({ keyType: w0.create(), valueType: x, typeName: pe[e(942)], ...we(t) });
  }
}
class Aa extends Fe {
  get [a(549)]() {
    const x = a;
    return this[x(2200)][x(1378)];
  }
  get valueSchema() {
    const x = a;
    return this[x(2200)][x(913)];
  }
  _parse(x) {
    const t = a, { status: r, ctx: e } = this[t(2437)](x);
    if (e[t(1358)] !== ae[t(2739)]) return Y(e, { code: K[t(2165)], expected: ae[t(2739)], received: e.parsedType }), he;
    const s = this[t(2200)].keyType, n = this[t(2200)].valueType, i = [...e[t(1506)][t(1434)]()][t(2739)](([c, u], d) => {
      const l = t;
      return { key: s[l(2297)](new p0(e, c, e[l(648)], [d, l(2651)])), value: n._parse(new p0(e, u, e[l(648)], [d, l(935)])) };
    });
    if (e[t(2919)].async) {
      const c = /* @__PURE__ */ new Map();
      return Promise[t(855)]()[t(634)](async () => {
        const u = t;
        for (const d of i) {
          const l = await d[u(2651)], f = await d.value;
          if (l[u(1071)] === "aborted" || f[u(1071)] === "aborted") return he;
          (l[u(1071)] === u(2726) || f.status === "dirty") && r[u(2726)](), c[u(823)](l[u(935)], f[u(935)]);
        }
        return { status: r[u(935)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of i) {
        const d = u[t(2651)], l = u[t(935)];
        if (d[t(1071)] === t(1363) || l[t(1071)] === t(1363)) return he;
        (d.status === t(2726) || l[t(1071)] === t(2726)) && r[t(2726)](), c[t(823)](d.value, l[t(935)]);
      }
      return { status: r[t(935)], value: c };
    }
  }
}
Aa.create = (o, x, t) => {
  const r = a;
  return new Aa({ valueType: x, keyType: o, typeName: pe[r(2786)], ...we(t) });
};
class rx extends Fe {
  [a(2297)](x) {
    const t = a, { status: r, ctx: e } = this[t(2437)](x);
    if (e.parsedType !== ae.set) return Y(e, { code: K[t(2165)], expected: ae.set, received: e[t(1358)] }), he;
    const s = this[t(2200)];
    s[t(1305)] !== null && e[t(1506)][t(2108)] < s.minSize[t(935)] && (Y(e, { code: K[t(2627)], minimum: s.minSize[t(935)], type: t(823), inclusive: !0, exact: !1, message: s[t(1305)][t(2461)] }), r[t(2726)]()), s[t(2380)] !== null && e[t(1506)].size > s[t(2380)][t(935)] && (Y(e, { code: K[t(457)], maximum: s[t(2380)][t(935)], type: t(823), inclusive: !0, exact: !1, message: s[t(2380)][t(2461)] }), r[t(2726)]());
    const n = this[t(2200)][t(913)];
    function i(u) {
      const d = t, l = /* @__PURE__ */ new Set();
      for (const f of u) {
        if (f[d(1071)] === d(1363)) return he;
        f.status === d(2726) && r[d(2726)](), l[d(986)](f.value);
      }
      return { status: r[d(935)], value: l };
    }
    const c = [...e.data.values()][t(2739)]((u, d) => n[t(2297)](new p0(e, u, e[t(648)], d)));
    return e[t(2919)][t(2538)] ? Promise[t(2497)](c)[t(634)]((u) => i(u)) : i(c);
  }
  min(x, t) {
    const r = a;
    return new rx({ ...this._def, minSize: { value: x, message: re[r(511)](t) } });
  }
  [a(477)](x, t) {
    const r = a;
    return new rx({ ...this[r(2200)], maxSize: { value: x, message: re.toString(t) } });
  }
  [a(2108)](x, t) {
    const r = a;
    return this[r(316)](x, t)[r(477)](x, t);
  }
  nonempty(x) {
    return this.min(1, x);
  }
}
rx[a(558)] = (o, x) => new rx({ valueType: o, minSize: null, maxSize: null, typeName: pe.ZodSet, ...we(x) });
class Zt extends Fe {
  get [a(2238)]() {
    const x = a;
    return this._def[x(2306)]();
  }
  [a(2297)](x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    return this[t(2200)][t(2306)]()[t(2297)]({ data: r[t(1506)], path: r[t(648)], parent: r });
  }
}
Zt[a(558)] = (o, x) => {
  const t = a;
  return new Zt({ getter: o, typeName: pe[t(396)], ...we(x) });
};
class kx extends Fe {
  [a(2297)](x) {
    const t = a;
    if (x[t(1506)] !== this._def[t(935)]) {
      const r = this[t(1310)](x);
      return Y(r, { received: r[t(1506)], code: K.invalid_literal, expected: this[t(2200)][t(935)] }), he;
    }
    return { status: "valid", value: x.data };
  }
  get [a(935)]() {
    const x = a;
    return this._def[x(935)];
  }
}
kx[a(558)] = (o, x) => {
  const t = a;
  return new kx({ value: o, typeName: pe[t(1379)], ...we(x) });
};
function Ls(o, x) {
  const t = a;
  return new O0({ values: o, typeName: pe[t(286)], ...we(x) });
}
class O0 extends Fe {
  [a(2297)](x) {
    const t = a;
    if (typeof x[t(1506)] != "string") {
      const r = this[t(1310)](x), e = this[t(2200)].values;
      return Y(r, { expected: Te[t(1878)](e), received: r[t(1358)], code: K[t(2165)] }), he;
    }
    if (!this[t(1971)] && (this[t(1971)] = new Set(this[t(2200)].values)), !this[t(1971)].has(x.data)) {
      const r = this[t(1310)](x), e = this[t(2200)][t(922)];
      return Y(r, { received: r[t(1506)], code: K[t(1905)], options: e }), he;
    }
    return a0(x[t(1506)]);
  }
  get [a(1341)]() {
    const x = a;
    return this[x(2200)][x(922)];
  }
  get [a(2897)]() {
    const x = a, t = {};
    for (const r of this[x(2200)].values)
      t[r] = r;
    return t;
  }
  get [a(2826)]() {
    const x = a, t = {};
    for (const r of this[x(2200)][x(922)])
      t[r] = r;
    return t;
  }
  get [a(262)]() {
    const x = a, t = {};
    for (const r of this[x(2200)][x(922)])
      t[r] = r;
    return t;
  }
  extract(x, t = this[a(2200)]) {
    const r = a;
    return O0[r(558)](x, { ...this[r(2200)], ...t });
  }
  [a(2575)](x, t = this[a(2200)]) {
    const r = a;
    return O0[r(558)](this.options.filter((e) => !x[r(555)](e)), { ...this[r(2200)], ...t });
  }
}
O0.create = Ls;
class Gt extends Fe {
  _parse(x) {
    const t = a, r = Te.getValidEnumValues(this[t(2200)][t(922)]), e = this[t(1310)](x);
    if (e[t(1358)] !== ae[t(2028)] && e[t(1358)] !== ae[t(867)]) {
      const s = Te.objectValues(r);
      return Y(e, { expected: Te[t(1878)](s), received: e.parsedType, code: K.invalid_type }), he;
    }
    if (!this[t(1971)] && (this._cache = new Set(Te[t(483)](this[t(2200)][t(922)]))), !this[t(1971)][t(1281)](x[t(1506)])) {
      const s = Te[t(1800)](r);
      return Y(e, { received: e[t(1506)], code: K[t(1905)], options: s }), he;
    }
    return a0(x[t(1506)]);
  }
  get [a(2897)]() {
    const x = a;
    return this[x(2200)][x(922)];
  }
}
function Px() {
  const o = ["substring", "Desire bounds is null", "[j])) { ", "Run Photoshop Action", "requestInitialStateForNode", '" resolves to more than one schema', "fcName", "sdppp/streamRequest", "tools/list", "enum", "登录成功", "userDefinedNsSeparator", "写入日志文件失败:", "Unable to reboot ComfyUI", "Not current document", "boolean", ") && ", "toUnicode", "pop", "flags", "#FFCC00", "结果获取已中止", "out", "i18next/PATH_KEY", "按住 Shift 键以新文档方式导入", "#CC6633", "comfyAPI", "Gemini 2.5 Flash 图像", "nsSeparator", "onerror", "translate", "common", "adf", "refine", "No limit", "date", "ZodOptional", "Outpaint (positive crop)", "ZodDate", "getRegisteredActions", "handleIncomingNotification", "ydd", "createInstance", "Sending image...", "jsonStringifyReplacer", "$schema", "Execute", "Node not found", "#33CCFF", "loading namespace ", "ZodTuple", "skipInterpolation", "获取工作流列表失败。", "Enter your RunningHub API Key", "cleanupConnection", " than ", "round", "#CC0033", '"; } ', "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", ".patternProperties", "async schema in sync schema", "api/view?type=", "validateSchema", "allOf", "iri", " = equal(", "任务取消失败: {{error}}", "按回车打开应用： {{appName}}", "\\' is invalid' ", "appendNamespaceToMissingKey", "延迟上传失败: {{error}}", " , data: ", " delete ", "schema $id ignored", " = null;", " , params: { additionalProperty: '", "No crop", "nestingRegexp", "ZodPipeline", "broadcastHandlers", "Copy", "brand", "[MCPMiddleware]", "pong", "Mask", "Elicitation response content does not match requested schema: ", "failing", "backendConnector", "已限定范围", "checks", "tools/call", "); if (", "getStats", ", deps: '", "schemaErrorMap", " } }", "status API failed - HTTP error! status: {{status}}", "lng", "openWorkflowJSON", "datetime", "请先选择应用", "处理进度 {{processed}}/{{total}}", "Clear selection", "after app.queuePrompt errors: ", "default is ignored in the schema root", " = false; if (e instanceof ValidationError) ", "~standard", "syncStoresToNewConnection", "当前无法应用模板。", "找不到文档: {{0}}", "正在上传...", "errorMap", '";  ', "performWorkflowReset: ", "rtl", "4CilKYu", " validate.errors = null; return true; ", "valueOf", "lastIndexOf", "Masked", "oninitialized", "交集或缩放目标为空", "nullable", "property ", "Synchronous parse encountered promise.", "hours", "Click to restore default boundary", "file://", "#3366FF", " levels up, current level is ", "push", "nid", "invalid-input", "localRefs", "messageHandlers", " not found for node ", " != 'number') { ", "base64url", ") break; }  ", "_addSchema", "arrayToEnum", "detail", "mountedTransports", "maxTotalTimeout", " ) { ", "body", "Boundary preview", "util", "任务失败：{{status}}", "stringify", "创建时间", " else throw new ValidationError(vErrors); ", "requestIdSeq", " } else {  errors = ", "Failed", "interpolator", "OpenAI - Image Edit", "loopRequired", "Current selection: Layer", "hasNotificationHandler", "sendResourceUpdated", "registerDirectRequestHandlerGeneric", "Enum", "Upload from disk", "absolute", "#0033CC", "请选择AI服务", " if (Array.isArray(", "left", "#FF6600", "Invalid resource identifier", "#0066FF", "val is not a non-empty string or a valid number. val=", "如何获取APIKey和API Secret", "nonExplicitSupportedLngs", "  if (!", "streamRequestorHandlers", "clear", "留空表示不限", "contentEncoding", "_errorDataPathProperty", " = true; if (", "humanize", "#FF33CC", "Failed to fetch account status", "position", "ZodEnum", "ctx", " = errors;var ", "sdppp_widgetable_title", "'[' + ", "清除视频", "Auto fetching…", "].propertyName = ", "Error validating elicitation response: ", 'Invalid input: must include "', "hasLoadedNamespace: i18n.languages were undefined or empty", "pre", "getDefinition", "Heartbeat timeout for poster ", "aeb", "discriminator", "missing", "mcpMesh", "find", "keywords", "Sending all images...", "run API failed - HTTP error! status: {{status}}", "Set text to layer", "skipOnVariables", "resetStats", " else ", "initAsync", "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ", " to ", "自动同步: 关闭", "min", "ComfyUI加载失败，HTTP状态码：{{code}}", "Host's domain name can not be converted to ASCII via punycode: ", "Workflow stopped by user", "getPath", "Close", " , params: { failingKeyword: ", " }; return validate; ", "return", "Back", "Click to restore default mask", "logging/setLevel", "主图边界", "Importing image {{index}}/{{total}}...", "ayn", " {} ", ") break; ", "` could not be extracted from all schema options", "listenMessageCallback", "forkResourceStore", "Create document", "正在等待图片上传...", "选择应用...", "unshift", "A discriminator value for key `", "clearItems", "getSuffixes", "/properties", "Layer", "returnTypeError", "创建文档", "Completed", "缺少 TaskRouter 远端配置：{{missing}}。请检查远端配置后重试。", "Discriminator property ", "选择工作流", "负面提示词内容", "json-pointer", "forwardBroadcast", "lngs", "schemaHasRulesExcept", "Advanced selection", "segment", "正面提示词", "Layer {0} not found", "正在发送所有图片...", "; }   var err =   ", "filter", "Smart Object Layer", "progress", "_clientCapabilities", "retryTimeout", " &&   Object.prototype.hasOwnProperty.call(", "initializeConsumer", "从磁盘上传", "item", 'Invalid input: must end with "', "dataType", "Enter a pixel value greater than 0", "INTERCEPTOR_ERROR", "SDPPP赞助者专用API", "#CC3366", " !== ", "正在运行", "Input not instance of ", "msec", "getResource", '$ref: keywords ignored in schema at path "', "returnObjects", "run API 调用失败 - {{reason}}", "运行中...", "graphInstance", "Get mask from Selection", "maxLength", "Running for {{duration}} secs, {{message}}", " var i = ", "resolvedOptions", "getTransport", " } else if ( ", "precision", ".errors; else vErrors = vErrors.concat(", "ZodLazy", "Array must contain ", "#33CC99", "POST", '"number"', " else { ", "execution_interrupted", "Only the latest 10 items are available in this version", "设为当前选区", "nullish", "direction", "])) { ", "自动获取中…", "?\\:\\:", "uiWeightSum", "无法打开图像文件: {{error}}", "full", "initImmediate", "Negative Prompt", "请选择要获取的遮罩", " var missing", "saveMissingTo", 'no schema with key or ref "', "快捷键选图功能仅登陆后可用", "assertCanSetRequestHandler", " = false; for (var ", " != 'number') || ", "regexpUnescape", " var vErrors = null; ", "任务未完成，当前状态: {{status}}", "buildAdjacencyList", "无法从文件创建文档", "sdppp 运行 Photoshop Action", "setter", "forEach", "Core schema meta-schema", "getRegExp", "Workflow not found", "params", "additionalProperties", "createAsyncIterator", "loadGraphData", "sdpppX2", " , params: { allowedValue: schema", "画布范围", "unescapeSuffix", "Running...", "_cleanupTimeout", "curr", "fullPath", "Failed to create document from file", " , params: { keyword: '", "([+-]\\d{2}:?\\d{2})", "setLimit", "getAccountStatus API 调用失败 - {{reason}}", "load", "passingSchemas", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "pickLocalFile", "reference", "&amp;", "too_big", "Invalid literal value, expected ", "count", "#FFCC33", "Upload failed, please try again", "Deferred upload failed: {{error}}", "正在创建任务...", ") ? ", " var ", "apc", "valid", "Success", "exactly", "删除当前", "relative", "Select boundary", "getDefaultValuesFromSchema", "schema is invalid: ", "executeHandlerAsync", "#9900FF", "max", "模型物美价廉，海量社区应用", "__DEFAULT__", "Failed to send cancellation: ", "console", "strong", "getValidEnumValues", "source", "payload", "requestInfo", "_onnotification", "（会员专属）", "#/definitions/stringArray", "validateStreamRequestorRequest", "pes", "#33CCCC", "strictKeywords", "Input Setting", "getNeighbors", "nodeTransports", "http://json-schema.org/draft-07/schema#", "NOT_PATH", "uploadImage API failed - HTTP error! status: {{status}}", "isArray", "getDataByLanguage", "Stop auto run", "&#x2F;", "Options", "notificationsIntercepted", "History", `" won't get resolved as namespace "`, "Selection boundary", "#00CC00", "nan", "toString", "addResources", "effect", " && !(", "Server does not support logging (required for ", "currency", `Log saved to file: {{path}}


`, "nodeId", "newdoc", "ownProperties", "async ", "prevValid", "Document {{0}} not found", "_getInvalidInput", "originalError", "arz", "./api/manager/reboot", "definition", "++) { vErrors[", "removeNamespaces", "mins", "invalid_string", "asyncIterator", "getCurrentNodeId", "ZodArray", " && !Array.isArray(", "\\$&", "%[EFef]", " , params: { format:  ", "getNode", "图像质量 (%)", "equal", " if (!", " = true;  ", "userinfo", "Boundary", "Module", "发送至选区", "keySchema", "innerType", "loadNamespaces", "unsetOutgoingNotificationInterceptor", "Stop all", "getPrototypeOf", "includes", "Layer not found {{0}}", "resources/subscribe", "create", "Failed to save prompt templates.", "failed parsing options string in nesting for key ", "+Shift 调整更多选项；Ctrl 单次获取。", " === ", "isCUID2", "保存所有", "connecting", "setNotificationHandler", "coerceToTypes", "getFixedT", "opts", "Node ", "less than", "Auto Sync: on", "Error handling incoming message:", "mergeObjectSync", "模板已保存。", "continueOnInterceptorError", "get_layer_info: 需要 layer_identify", "thisServer", "endsWith", "_resetTimeout", "图层 {{0}} 不是一个组", "无法写入{{part}}提示词：未找到对应控件。", "#00CCFF", "No custom templates yet.", "Action handler ", "augment", "_requestHandlerAbortControllers", "const", "请输入质量百分比", "years", "yud", "_loadingSchemas", "{0,4}", "暂无可预览图像", "#9933CC", "JWT", "isBase64url", "2.0", "missingSchema", "dependencies", "errSchemaPath", "abs", "应用模板失败。", "未找到图层 {0}", "#00CC99", " = errors === errs_", "Select layer", " , message: 'property name \\'", "shared", "sd-ppp-static/sdppp_images/", "documentElement", "notificationQueue", "Retry", "InternalError", "syncWorkflows", "subject", "Canvas", ".hasOwnProperty(", "schemaUnknownRules", "removeItem", " ) {   ", " } } ", "自动同步: 开启", "skipCopy", "Manage reusable prompt templates", "outputType", "should NOT have additional properties", "暂无图片", "选择文件失败，请重试", "#33CC66", "Generate", "?\\]?$", "fallbackLng", "then", "status API failed - {{reason}}", 'key "', "网关超时 (504)", "_schemas", "Stop and cancel all", "isFinite(", "off", "yhd", " = await ", "processors", "mode", " when property ", "Gemini 2.5 Flash Image", "path", "async format in sync schema", "parseAsync", "[\\+\\-\\.]", "[^\\%\\[\\]\\:]", "unsetOutgoingRequestInterceptor", "getAccountStatus API 调用失败 - HTTP 错误，状态: {{status}}", "addFormat", "parseMissingKeyHandler", "Invalid attempt to destructure non-iterable instance", "languages", "fast", "onclose", "false", "secs", "fallbackRequestHandler", "ZodNativeEnum", "DEBUG", "插件可能正在拦截 PS 快捷键... ", "_refs", "sdppp/directRequest", "', depsCount: ", "Google Gemini Image Generator", "true", " in ", "Confirm", " , params: { type: '", "新建模板", "云端推荐：", "CurLayer", "等待 ComfyUI 连接完成…", ";  ", "ZodNullable", "checkDataTypes", "已完成", "unknownKeys", " } }  ", "Username: {{username}}", "Image quality (%)", ".validate; var ", "未选择工作流", "empty", "promptIds", "Sponsor Points", "sam", "nestingOptionsSeparator", "not_multiple_of", "正在使用本地文件", "getPathExpr", "languageOnly", "connected", "Full Canvas", ") > 1e-", "comfyAPI is not initialized, maybe comfyUI is too old", " || Object.keys(", "生成失败", "Model with affordable price, abundant community applications", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "Invalid date", "executing", "usePattern", "messages", "&gt;", "Fetch current layer with current-layer boundary", "missingInterpolationHandler", "ifClause", "cleanup", "abort", "contextSeparator", " && Object.prototype.hasOwnProperty.call(", ".additionalItems", "Fit to selection", "messageQueue", "_unknown", "exists", "Fetch current layer with primary boundary", "无效边界: 左边必须小于右边，上边必须小于下边", "未能解析租户信息", "headers", "ComfyUI server reconnecting", "dir", "+Alt reversed mask", "RULES", "exclusiveMinimum", "objectKeys", "Primary boundary", "setState", "加载历史任务...", "isOpen", "组 {{0}} 中没有第一个相关图层", ".errors); errors = vErrors.length; } ", "Current Layer", "ASCII", ".dataPath === undefined) ", "resources/read", "Selection bounds only", "Node definition not found for current node ", ".dataPath = (dataPath || '') + ", "assert", "required", "Internal ZodObject error: invalid unknownKeys value.", "Gateway error (502)", "Invalid", "abh", "metaSchema", "模板已删除。", "checkState", "<errors; ", "jpr", "comfy-uxp", "graph update cost ", " in key: ", "stateUpdate", "选区除外", " = '' + ", "^\\[?(", "++) { var ", "read", "运行中", "setOutgoingRequestInterceptor", "tolerant", "queue_remaining", "interceptorTimeout", "pctEncChar", "user", "Server does not support tools (required for ", "mesh:comfy", "avl", "新建文档", "Date must be ", "positive", "host", "json", "abortRequest", "toQuotedString", "subfolder", "#33CC33", "Get content of layer {{0}}", "sendLoggingMessage", "under", "isCIDR", "match", "defaultError", "allKeys", "状态检查已中止", "schemaHasRules", "_cached", "' , dataPath: (dataPath || '') + ", "Template saved.", "requestHandlers", "canvas", "openWorkflows", "allServers", "_oninitialize", "hasDefaultValue", "content", "now", "停止自动运行", "Bounds", "NOT_FRAGMENT", "负面提示词", "notifications/roots/list_changed", "actions", "从 当前图层 获取图像", "callback", "minimum", "Save and run immediately", "+Alt 按选区裁剪", "resourceName", " = e.errors; else throw e; } ", "second", "debug", "clone", "Unexpected dot segment condition", '" (see option extendRefs)', "set", "_capabilities", " = errors;", "isInteger", "logout", "createTemporary", "interpolation", "Default", "formatter", "strictNumbers", "getNodeTitle", "disconnect", "maxReplaces", "userDefinedKeySeparator", "isCUID", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", ` , message: 'should match pattern "`, "catchall", "当前选项：画布", "Client does not support listing roots (required for ", "registerDirectRequestHandler", "realTransport", "debugDisableHeartbeatResponse", "You must pass an array of schemas to z.tuple([ ... ])", "implements", "清空选择", " , message: 'should be multiple of ", " !== undefined && typeof ", "getPluralFormsOfKey", "zero", "unescapeComponent", "removeMessageEventListener", "resolve", "removeNotificationHandler", "[^\\%\\/\\@]", "maxItems", "no plural rule found for: ", "same-document", "sdk", "initialize", "typeof ", "#CC3300", "邮箱: {{email}}", " ) ", "number", "pluralCategories", '" as the namespace "', " = 0; ", "UploadPassProvider 与 TaskRouter 上传机制不兼容，请改用 uploadResource。", "logger", "NOT_SCHEME", "Images", "#9933FF", "updateMissing", "Received host version from UXP:", "workflowManager", "hasRequestHandler", "close", "Remove slot", "baseId", "目标边界为空", "resources/templates/list", "notifications/progress", "{0,6}", "Prompt", "NumberFormat", "_refinement", "[object Function]", "destroy", "#CC00CC", ") {", "_exclusiveLimit", " should be boolean' ", "join", "init: i18next is already initialized. You should call init just once!", "_metaOpts", "当前选项：文件", "++) { ", " : ", "sdppp", "cacheInBuiltFormats", "_getType", "发送图片失败 {{index}}: {{error}}", "ZodFunction", "Unknown error ({{code}})", " properties' ", " , (dataPath || '')", "Jump to last", "Select Image Source", "/else", "valueType", "_meta", "No connection available for node ", "sampling/createMessage", " validate.errors = vErrors; ", "normalizeDuration", "点击恢复默认遮罩", "Mask apply returned empty resource", "executed", "values", "当前图层", "开始时间", " console.log(", "__esModule", "#66CC00", "Error in broadcast handler for ", "No active document", "提示词模板", "postMessage", "Intersection results could not be merged", "passthrough", "URI can not be parsed.", "value", "Quick", "URI is not a ", " === 'false' || ", " , message: 'should be equal to one of the allowed values' ", "使用教程", "rest", "ZodRecord", " var errors = 0;     ", "pctDecChars", "Invalid forward path for proxy action", "#3300FF", "Click to send (Shift-click creates new document)", "resolved promise for", " === null || ", "connectedNodes", "Duration", "property", "ref/resource", "Please provide prompt content.", "#CC33FF", "mesh:workflow", "assertCapabilityForMethod", "画布变更后自动运行工作流", "反向裁剪(Inpaint)", "addIssue", "notifications/resources/list_changed", "pathname", " , params: { limit: ", "minValue", "reject", "default is ignored for: ", "expected", " % 1)", "点此获取RunningHub APIKey", "Enter a quality percentage", ", schema", "ZodUnknown", "exclIsNumber", "__cycle__", "hasLoadedNamespace: i18next was not initialized", "closeWorkflow", ") - division", "高级选图", "适配至选区", "uploadComfyImageFromUXP", "准备中...", " if (", "Connection closed", "非法的名称: {{0}}", " , schema: false , parentSchema: validate.schema", "add", "refVal", "names", "namespace", "findIndex", "port", "race", "bbz", "_compile", "issues", " if (true) {", " && ", "isULID", "addNamespaces", "resolveRef", "快捷键选图功能仅在插件窗口聚焦时可用", "i18nFormat", "尺寸限制 (px)", "prefix", "[0-5]\\d", "checkDataType", "__nwjs", "&lt;", "deprecate", "ZodBranded", "Adjust input settings", ".length == 0) {", "day", "ZodAny", "Failed to apply template.", "http://json-schema.org/schema", "Auto run after canvas change", "$t(", "defaults", "uxp", " var errs_", "addResourceBundle", ")) { if (vErrors === null) vErrors = ", "isFinite", "pluralResolver", "edges", "刷新余额", " if (errors === ", "限制图片尺寸", "扣除积分", "hasLanguageSomeTranslations", "finished", " === undefined || ", "removeEventListener", " = ", "implementInternalAction", "正在导入历史图片...", "getFallbackCodes", "addCached", "=== Options ===", "Store not found for current node ", "资源标识符无效", "info", "更多设置", "catch", "apply", "__internal_", "Failed to reboot ComfyUI", ` , message: 'should match format "`, "]; } else { ", "copy", "Select AI Service Provider", "ValidationError", "Cannot forward to node ", " == '", "#CCCC33", "点击发送（Shift-点击新建文档）", "Invalid function arguments", "readOnly", "nodeErrors", "notificationHandlers", ", exclusive: ", "本节点默认继承:", "applyPostProcessor", "Your powerful node-based workflow engine", "messagePoster", "#6600FF", "uri-reference", "getRule", "typ", "status", "Email: {{email}}", "patternProperties", "removeAdditional", "contentMediaType", "ajp", "RequestTimeout", "propsKeywords", "上传已中止", "executeOutgoingNotificationInterceptor", "formData", "正在导入图片 {{index}}/{{total}}...", "exclusive", "ZodNull", "#66CC33", " for language ", "Download", " items' ", "openWorkflow", "{0,1}", "整个画布", "创建文件资源失败", "request", "fatal", "模板名称已存在。", "nest", "No active layer available", ".async; ", "typeName", "输出区域", "$id", "Uploading images...", "素材同步中", "logging", "ComfyUI connection not configured yet. Please set the address first.", "arq", "UUID is not valid.", "extensionManager", "No preview content yet", "safeParse", "schema $id is different from id", "simpleTypes", "level", "]; if (", "errorPath", "输入图像", "properties", "App ID:", "toLowerCase", "seconds", "Select Banana app...", "[GraphStoreSynchronizer] Error broadcasting state update for ", "ZodError", "Method not found", "unionErrors", "上传失败，请重试", "yih", "favorites", "time", "kind", "newlayer_selection", "Auto send enabled", "reset=false but needsReset: ", "Select Workflow", "createMessage", "not_finite", "从 画布 获取图像", "disconnected", "errors", "Started At", ").length ", "任务已取消", "', missingProperty: '", "greater than or equal to ", " ? ", "registerStreamRequestorHandler", "notificationsHandled", "length", "function", "connectionManager", "alwaysSet", "Current layer", "initializeNodeStores", "Input Image", "reconnected", "_options", "_opts", " } else {  for (var ", "toJSON", "forward", "resolvedLanguage", "sdppp_workflow_alias", "broadcastCurrentState", "omit", "正向裁剪(Outpaint)", "name", "         , parentSchema: validate.schema", "Add slot", "hbo", "prompt_ids: ", "start", "Please select an app first", "coerceTypes", "#FF3366", "Edit Template", "suffix", "nodeStores", "#3399CC", "getUsedParamsDetails", "changeLanguage", "parent", "_getCached", "sdppp/broadcast", "No image returned", "{2})", "2025-06-18", "Cannot access property/index ", "if (", " / ", "shape", " = null; ", "notifications/prompts/list_changed", "选区遮罩", "invalid_return_type", " == 'boolean' || ", "Please select AI service", "No images", "at least", " == 'string' && ", "无法将文件作为文档打开: {{path}}", "海量模型，稳定服务", "use", "nonpositive", "widgets", "Canvas boundary", "click", "startHeartbeat", "http", ".type || 'string'; if (", "acm", "getAccountStatus API failed - HTTP error! status: {{status}}", "自动取图中…", "prompts/get", "merge", "Request interceptor failed for ", "cloneInstance", "Invalid boundary: left must be less than right, top must be less than bottom", " , schemaPath: ", " === '' || ", "_progressHandlers", " , schema:  ", "contains", ", limit: ", "root", "finally", "#FF00CC", "Invalid input", "非当前文档", "exports", "constructor", "men", "); for (var ", "+Alt 反转遮罩", "Selected", "missingKey", "getConnectionCount", "waiting for queue prompt", "' + ", "Idle", "请输入您的Replicate API Key", "{5}", "cancel", "invalid_arguments", "regexp", "mesh", "reboot", " var startErrs", "uxpHost", ".validate;", "modules", "ZodIntersection", "replace", "获取图层 {{0}} 的内容", "loadResources", "encountered", "minute", "loaded", "errs_", "sampling", ".data = ", "Current layer boundary", "getTransportToNode", "getCapabilities", "RH币:", " = true; if ( ", "输出预览", " , params: { allowedValues: schema", "enable", " = defaults[", "yrs", "emit", "domainHost", "notifications/cancelled", "useColors", " ( ", "当前没有活动图层", "停止并取消全部", "_onresponse", "nss", " ms", "has", "shorter", "_onprogress", "[BroadcastManager] Error forwarding broadcast:", "formatArgs", "仅选区范围", "Paste your model name", "Loading...", "refVal[", "var default", "formatSeparator", "ZodUndefined", "comfy-user", "WebkitAppearance", "removeMiddleware", " , message: 'can\\'t resolve reference ", "Invalid action: {{action}}", "originalQueuePrompt", "创建操作需要矩形坐标", "heartbeatTimeout", "inlineRefs", "style", "sdppp 选中图层", "Failed to update the {{part}} prompt. Please try again.", "minSize", "addRule", "yds", "Fit to current layer", "作为新文档导入", "_getOrReturnCtx", "fallback", ") { for (var ", ")' returned an object instead of string.", "roots/list", "accept", "escapeValue", "2[0-4]", "one", "returnedObjectHandler", "Selection mask", "不支持的上传类型：{{type}}", "oneOf", "; else if (", ".else", "setupGeneralBroadcastHandler", "multipleOfPrecision", "]; ", "ZodReadonly", "running", "Disk", "_onerror", "saveMissing", " === null) ", " else if (", "safeParseAsync", "escapeComponent", "hasOutgoingNotificationInterceptor", "#99CC00", "isDate", "AbortError", "options", "loadSchema", "run", "withTimeout", "[i]; ", "charAt", "SDPPP 2.0 no longer needs this node", "formatters", "validateHandlerType", "varReplace", "_transport", "MethodNotFound", "以主图边界获取当前图层", "rules", "locale", "(typeof ", "isNotification", "parsedType", "; } catch (e) { ", "Validation", "[ ]*{", "Creating task...", "aborted", "Failed to update the {{part}} prompt: no matching widget binding.", "Delete current", "exec_info", " self._opts.$comment(", "streamRequest", "hrs", "notifications/message", ' !== "object")', "Crop by selection", "bigint", "25[0-5]", " , message: 'should NOT be valid' ", "sessionId", "throwIfAborted", "keyType", "ZodLiteral", "exec", "getSchema", "Selection", "图层遮罩", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "newlayer_curlayer", "_parseSync", "Unicode", "ZodDefault", "examples", "' } ", "Set as Current Layer", "rootId", "xaa", "getNodes API 调用失败 - {{reason}}", "Prompt Templates", "getImage", " for (var ", "File upload failed", "发送到PS", '.schemaPath = "', "PCT_ENCODED", " = false; else {", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "Service unavailable (503)", "getTransportInternal", ".test(", "cycles", "languageChanged", "not", "usedParams", " }; return validate;", "extractFromKey", "#0000FF", "') ", "提示信息", "languageUtils", "Source", "addMiddleware", "Auto Sync: off", "]); ", "Clear", "fullFilename", "); errors = vErrors.length;  for (var ", "getConnectionInfo", ") {   var err =   ", " , schema: validate.schema", "getNodeStore", "timestamp", "排队中", " = errors , ", "sourceType", "returnNull", "reason", "entries", " if (errors === 0) return data;           ", "Please provide a template name.", "false schema", "TaskRouter client is not initialized", "rejecting language code not found in supportedLngs: ", " = validate.schema", "errorHandlers", "/additionalProperties", "graphChanged", "origin", "  }  ", "hasOwnProperty", "getClientCapabilities", "jsonPointers", "other", " = [", "任务创建已中止", "从 选区 获取遮罩", ", '", "initializeProducer", "notification", "setWidgetValue", " || validate.schema", "[\\-\\.\\_\\~]", "Error", " throw new ValidationError(vErrors); ", " === undefined ", "getBestMatchFromCodes", "已取消", " throw new ValidationError([", "ZodNumber", "freeze", "mountTo", "Images Per Batch", "Plugin window focused required to use keyboard shortcut", "创建预览文档", "ready", "getNodes API failed - HTTP error! status: {{status}}", "Running", "Add Template", "comfy_api_key", "_regex", "elicitInput", "processCode", "backend", "1280867XHhBBJ", "urn", "getResourceBundle", "workflows/", "_errors", "InvalidParams", "uuid", "tried", "ars", "([01]\\d|2[0-3]):[0-5]\\d(:", "#CC9933", "error", "assertIs", "Tutorial", "hour", "resource_link", "https", "buffer", "hasError", "Create guide frame", " reference.", "connect", "findPathInternal", "language", "ZodPromise", "Connecting to ComfyUI...", "data", "get", "requestId", "40orMleQ", "#/definitions/simpleTypes", "Points Spent", "获取结果失败", "getCanonicalLocales", "Save", "refs", "outputs API failed - {{reason}}", "从磁盘获取", "[\\:\\@]", " must be number", "TaskRouter 客户端未初始化", " instanceof RegExp) && ", "stats", "批次数量", "刷新图片中", "; else vErrors = null; }  ", " = !(false ", "找不到图层: {{0}}", "zh-CN", "缺少遮罩资源", " } } else { ", "test", "is an invalid additional property", " var err = ", "sort", "退出登录", "getNodes API 调用失败 - HTTP 错误，状态: {{status}}", "precheck", "#0033FF", "ruleErr", "enabled", "detect", "uri", "elicitation/create", "userAgent", "_setupTimeout", "from", "missed to pass in variable ", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "新图层", "describe", "\\.\\d{", "Paste WebApp ID here", "Choose File", "stream", "Area AI reads from; controls max image size", "#FF9933", "concat", "运行了 {{duration}} 秒，{{message}}", "创建文档失败", "exactLength", "assertEqual", "emoji", " = false; break outer; } } } ", "刷新工作流列表", "__proxy_forward", "同步当前内容", "./sdppp_upload2", `((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)`, "Image input and prompt are required", "channel", "formatLanguageCode", "Unsupported image input type", "aao", "ZodUnion", "sdppp/abort", "Please login to use the plugin", "pendingCount", "仅当前图层范围", "++) { if (", "Primary image resource is missing", ") == -1 ", "runningRequests", "[i], ", "initialized", "Cloud-based model service platform", "uiLocale", "arb", "Keyword ", ".type", "2.1.0", "Please select the mask to get", "No errors", "transform", ".length , ", "env", "async keyword in sync schema", "当前图层除外", "parse", "diff", "  } ", "_getId", " === 0 || ", "items", "#FF33FF", "（为空）", " cannot be resolved", "获取 Supabase 会话失败: {{error}}", "assistant", ".length; ", "_responseHandlers", "$async", " , message: 'should be ", "maximum", "Opening workflow", "del", "_addCheck", "addUsedSchema", "setItem", "ParseError", "ZodString", "put", "Crop", "网关错误 (502)", " if (schema", "long", "useDefaults", "ZodSymbol", "清空所有", "compositeRule", " , message: 'should NOT have more than ", "comfy", "isNaN", "text", "未配置上传器", "assertNever", "Failed to pick file. Please try again.", "superRefine", "服务不可用 (503)", "failed", "handleDirectProxyForward", "missingRefs", "Timeout", " var schema", "; var ", "missingKeyHandler", "合并组失败", "ZodBoolean", "toASCII", "ComfyUI - {{workflowName}}", "sendStreamRequestorRequest", "设为选区", "边界预览", " not found on node ", "startsWith", "toHash", "ESCAPE", "never", "3rdParty", "isHeartbeatEnabled", "is a required property", "=startErrs", "Invalid proxy forwarding: current node ", "exclType", "cmp", "timeoutId", "正在发送图像...", '" was not yet loaded', "arrayKeywords", ")) {  var err =   ", "Unknown", "HeartbeatTimeoutError", "getState", "Queued", "defaultNS", "execution_start", "uploadImage API 调用失败 - HTTP 错误，状态: {{status}}", "自动填入画布关闭", "cuid2", "schemaId", "uploadImage API failed - {{reason}}", "isNANOID", "给发送的图片创建文档", `" keyword validation' `, " , message: 'should contain a valid item' ", "需要提供图像和提示词", "当前选区", "New Template", "管理可复用的提示词模板", "usedKey", "Failed to resolve tenant information", "isTime", "Current selection: Layer {{layerName}}", "returnDetails", "getConnectionToNodeInternal", "MissingRef", " = true; else if (!Array.isArray(schema", "hasEdge", "McpError", '"failed to compile', "maxTokens", "milliseconds", "Resize document for preview", "5092351taMLNG", "Remote", "schemas", "prototype", "unicode", "parentDataProperty", "ComfyUI failed to load, HTTP status code: {{code}}", "Cannot register capabilities after connecting to transport", "macro", "sdppp-heartbeat", "Import as New Document", "WARNING DEPRECATED: ", "hasOutgoingRequestInterceptor", "选区遮罩为空", "query", " = vErrors[", "external", " = false;for (var ", "reset", "nodeIndexes", "clearHeartbeatTimers", " , validate.schema", "sendToolListChanged", "missingKeyNoValueFallbackToKey", "]) ", "ZodEffects", "nestingSuffix", "Overflow: input needs wider integers to process", ", received ", "symbol", "Task incomplete, current status: {{status}}", " = false; ", "extend", "缺少可上传的资源", "registerProxyForwardHandler", "#CC33CC", "_validateKeyword", "appendNamespaceToCIMode", "minProperties", "assertRequestHandlerCapability", "Guest login successful", "How to get APIKey and API Secret", ".validateSchema(", "meta-schema not available", "translation", "implementAction", "output", "languageDetector", "next", "inclusive", "ary", "Unsupported upload type: {{type}}", "prs", ")) ", "请填写模板名称。", "at most", " } if (errors === ", " already exists, which would be overridden", "No task template selected", "请输入大于 0 的像素值", "activeWorkflow", "parentData", "curlayer", "shift", "Server does not support sampling (required for ", "从文件打开图像", "#FF3333", "unescapePrefix", "custom keyword definition is invalid: ", "getConnectedNodeIds", ", validate.root.schema);", "workflow", "unknown", "relativetime", "#6633FF", "removeSchema", "maxRetries", "context", " for interpolating ", " + ']'", "escapeQuotes", "\\:\\:", "rootData", "未返回图片", "范围 1-100", "readonly", "scanned", "Task Details", "cacheUserLanguage", "Array.isArray(", "resourceStore", "getClientVersion", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", " , ", "禁止访问 (403)", "暂无预览内容", "heartbeatInterval", "objectValues", " break; ", "method", "serialize", "ZodNaN", ".additionalProperties", "Get layer info", "去赞助", "posterIdentifier", "defaultVariables", "Number must be ", "joinArrays", "ckb", "resources", "executeOutgoingRequestInterceptor", "Aborted", "hostVersion", "+Alt crop by selection", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "invalid_date", "var missing", "Leave empty for no limit", ")) { ", "设为当前图层", "pick", "没有链接图层: {{0}}", "调整输入设置", "暂无历史任务", "removeDefault", "此处粘贴 WebApp ID", "isBase64", `日志已保存到文件: {{path}}


`, "#6600CC", "subscribe", "detectCycles", "broadcast", " var async", "var division", "token", "cuid", "Task cancelled", "Supabase 匿名密钥", "void", "rejectImage", "It seems you are nesting recursively key: ", "Uploading...", "[^]", "Error in direct request ", "No first related layer in {{0}}", "Importing history image...", "Number must be finite", "选区边界", "No backend was added via i18next.use. Will not load resources.", "isClone", "Locale", "{1,4}", "color", " if (true) { ", " var schemaExcl", "#CC0066", "Auto send disabled", "点击移除本地文件", "File", "useRawValueToEscape", "Inpaint (reverse crop)", "send", "执行失败", ".length ", "newdoc_canvas", "prompts/list", "pluralSeparator", "relative-json-pointer", "   var err =   ", "{4}", "workflows", "sec", "Auto sync in progress…", "keys", "joinValues", "Please enter a model name", "选择边界", "selection", "formats", "Number must be a multiple of ", " && !", " , message: 'should match some schema in anyOf' ", "overwrite", "sourceCode", "ComfyUI服务器重连中", "actionHandlers", "defaultValue", "invalid_literal", "Delete Template", "_onclose", "isEmail", "OpenAI API 错误", "filename", "removeCatch", "smaller than or equal to", "separator", "Manage reusable prompt snippets for Comfy Simple workflows.", "widgetable", "NOT_HOST", "onmessage", "closeHandlers", "invalid_enum_value", "isEmoji", "node_id", "slice", "Template applied.", "root.refVal[0]", "Using local file", "array", "schemaPath", "Are you sure you want to delete this template?", "currentNodeId", "2817JNTAeh", "handleIncomingMessage", "InvalidRequest", "and", "notifications/tools/list_changed", "email", "$comment", "_parseAsync", "服务器错误 (500)", "Entire Canvas", "1426278BINjUW", " != 'boolean') ", '" is used in schema at path "', "Cycle detected: ", "Syncing assets", " === 1) ", "isInitialized", "Failed to open file as document: {{path}}", "supportedLngs", "warning", "defaultMeta", "prepend", "namespaces", `Get image &
Crop selection mask`, "未知错误", " ? '", "newlayer_canvas", "assertNotificationCapability", "Shift-click or right-click to toggle auto send", "invalid_union", "not-basic", "]; }  ", "]; return false; ", "Cloud:", "graphToPrompt", "_limit", "heartbeatTimer", "#3366CC", "week", "__origin", "store:update:", "formatType", "split", "currentOnly", " , rootData )  ", " !== undefined ", '" for languages "', "Stop", "Base URL", "optionsMap", "strip", "Failed to open image file: {{error}}", "addIssues", "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "Action {{0}} was not found", "_cache", "postProcessor", " validate.errors = [", " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ", " == 'object' && !(", "ComfyUI loading...", "#33CC00", "parent schema must have all required keywords: ", "minLength", "state", "queueLoad", " not found for current node ", "#3399FF", "(.+?)", "Email address's domain name can not be converted to ", "SDPPP 2.0 不再需要此节点", "self", "peo", "urn:uuid", "toFixed", "wss", " if ( ", "Refresh workflow list", "unsetNotificationHandler", "[^\\%\\:]", "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "base64", "toUpperCase", "integer", "unwrap", "isURL", "))))) {", "Validating form...", "适配至当前图层", "Empty selection mask", "文件上传失败", "Reverse", "ordinal", "image", "toStringTag", "#FF0099", " == 'function' ? ", "$$$$", "Uncaught error in notification handler: ", "lazycreate", "resources/list", "useCustomRule", "toResolveHierarchy", "No active layer", "broadcastManager", "int", "[^\\%]", "Layer {{0}} is not a group", "handleIncomingRequest", "timeout", "maxDate", "Outgoing message:", "string", "validate", "isLanguageChangingTo", "不支持的图像输入类型", "Maximum total timeout exceeded", "lastIndex", "observers", "coerced", "使用整个画布", "fewer", " from id ", "alg", "[\\:\\@\\/\\?]", "exactly equal to ", "Select", "fromNode", "acw", "_compilations", "; if (vErrors !== null) { if (", "Logout", " = undefined; ", "more than", "赞助分", "No images to preview", "dev", "xmn", "meta", " var validate = ", "local", "Get selection failed", "&#39;", "Outgoing request interceptor failed: ", "auto", "Action set {{0}} was not found", "done", "setupStreamProtocolHandlers", "modifying", "addMessageEventListener", "_cachedPath", " == errors) {", "addSchema", "reduce", "res", "toLoad", "compiling", "isTransportReady", "statusText", "step", "OpenAI/Google 格式API", "every", " === false || ", "canReachThroughConnectedNodes", " !== undefined && ( typeof ", "Failed to check workflow state changes:", "contextualErrorMap", "Default Templates", "maxValue", "buildDirectedAdjacencyList", "isSafeInteger", "none", "maxParallelReads", "fallbackNS", "getSuffix", "weeks", "请输入您的RunningHub API Key", "Cancel", "989751xnYQqw", "escapeFragment", "default", " , message: 'should match exactly one schema in oneOf' ", "uniqueItems", "[BroadcastManager] Error forwarding ", "hasAction", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "_onrequest", "broadcastReceived", "([^0-9])", "#/definitions/nonNegativeInteger", "ids", "toNode", "size", "getLanguagePartFromCode", " = false; else if (", ".call( ", "Failed to get task status", "ZodObject", "getKeyword", "[UnexpectedJSONParseError]: ", "there was no format function for ", "Invalid JSON-pointer: ", " not in path ", "SDPPP可能未安装或和插件版本不匹配 (404)", "Task failed: {{status}}", " != 'boolean' && ", "silent", "getProtocol", "setResolvedLanguage", "parseInt", "custom", "log", "更多操作", "ayl", "getScriptPartFromCode", "以主图边界获取画布", "_key", "regExpQueue", "ZodNever", "] = ", "extendTranslation", "addPostProcessor", "New Layer", "validate.schema", "dataPathArr", ") ) {   ", "控件 {0} 转换失败：", "Failed to fetch form data", "_requestHandlers", "fail", '$ref: validation keywords used in schema at path "', "millisecond", " , message: 'should be equal to constant' ", " = errors;  ", "Content", "Model", "Failed to check workflow changeTracker state:", "Refresh", "Empty", "actionManager", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "getItem", "setupTransportHandlers", "Not connected", "sdppp_assets", "var ", "_fragments", "Exclude current layer", "exact", "invalid_type", "catchValue", 'unknown format "', "No default templates available.", "Shortcut selection feature requires login", "valueSchema", "ZodVoid", "提示词内容", "abv", "|0?0?", "%c ", "splice", "parentElement", ") { errors = ", "请输入模型名称", " at one or more positions greater than or equal to ", "Canvas bounds", "utils", "capabilities", "optional", "pga", "success", "isOptional", "skipKeywords", " = typeof ", "get_layer_info requires layer_identify", "Get image from Canvas", "No workflows available.", "partial", "$el", " == 'boolean') ", "Loading history tasks...", "Invalid discriminator value. Expected ", "ssh", " , message: '", "_def", " ) || ", "本地文件", "addMetaSchema", "inline", "removeResourceBundle", "Internal error", "proxy", "(\\.\\d+)?", "&subfolder=", " try { await ", "unicodeSupport", "isUUID", ") ) ", "画布边界", "errorsText", "languageChanging", "; else vErrors = null; }", "isEmpty", "interpolationkey", "object", "=0; ", "invalid_union_discriminator", "queues", "Scan", "changeTracker", "ignoreJSONStructure", "Current Tasks:", "capacity", "No workflow selected", "Invalid graph definition: ", "getNodeIds", "reload", "errs__", "AUTO", "ayp", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "isInt", "schema", "prd", "outgoingRequestInterceptors", "app.queuePrompt caught", "exception", "[object RegExp]", "Save current", "Server does not support resources (required for ", "acx", "addLookupKeys", "pattern", "resetTimeoutOnProgress", " , message: 'should have ", "outgoingNotificationInterceptors", "exclusiveMaximum", "创建参考线框架", " === 'true' || ", "#6633CC", " return errors === 0;       ", "some", "usedNS", "customRules", "debouncedNotificationMethods", " is not a valid identifier", "overloadTranslationOptionHandler", "Received a progress notification for an unknown token: ", "var customRule", "resources/unsubscribe", " = true; break; }", "ComfyManager not found, cannot reboot", "#0000CC", "uiWeight", ") || ", "isSupportedCode", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "indexOf", " || ! Object.prototype.hasOwnProperty.call(", "pluralRulesCache", "transport", " = true; else if (typeof ", "Invalid boundary type: {{type}}", "findPath", "#/definitions/schemaArray", "#FF9900", "Quality {{percent}}%", "Action ", "selectColor", "reconnecting", "process", "Outputs", " = true , j; if (i > 1) { ", "Rectangle coordinates required for create action", "创建图层失败", "type", "partialBundledLanguages", "Processing {{processed}}/{{total}}", "获取表单数据失败", "/additionalItems", "additionalItems", "_parse", "loadOne", "移除槽位", "[\\.]", "Task execution failed", ".schemaPath === undefined) { ", "' && !(typeof ", "convert widget {0} failed:", "revoke", "getter", "charCodeAt", "remove", "preload", "uploadImage API 调用失败 - {{reason}}", "table", " || ", " validate.errors = vErrors; return false; ", "; if (", "reverse", "isValidLookup", "version", "清除参考线框架", "over", "/%2F", "Server does not support notifying of tool list changes (required for ", "addEventListener", "Notification interceptor failed for ", "createErrors", "status API 调用失败 - HTTP 错误，状态: {{status}}", "Waiting for ComfyUI to finish connecting…", ` , message: 'should pass "`, "getDefaultValueFromField", "translator", "verbose", "normalize", "audio", "isRequest", "适配至画布", " , message: 'should NOT have ", "queue", "[0]; ", "isTop", " (Members only)", "pipe", "Reset", "multipleOf", "当前图层边界", " else {   ", "code", "mcp-mesh-router", "endTurn", " == 'number' || ", " != 'string') || ", "format", "ulid", "ZodDiscriminatedUnion", "offset", "allErrors", "setDefaultNamespace", "请点击右上角登录后使用。", "getAllReachableNodes", "Import as Smart Object", "outputs API failed - HTTP error! status: {{status}}", "Generation failed", "6cjkveT", 'Invalid input: must start with "', "assign", "signal", "_clientVersion", " , parentSchema: validate.schema", " = customRules[", "node_errors", ") {  ", "Sending...", "Get selection", " */", "No store found for node ", "propertyNames", "delete", 'schema with key or id "', "validation failed", "#00CC66", "自动从PS重新获取", "maxSize", "MiddlewareError", "externalListenMessageCallback", "_pendingDebouncedNotifications", "emergency", "cancelled", "unescapeFragment", "Node definition not found for ", "tools", " = ''; ", "12944QiFVXU", "cleanCode", "kPanelBrightnessMediumGray", "Clear all", "#FF3300", "anyOf", "keyword", "; else vErrors = null; } ", "secure", "can't resolve reference ", ".length > ", "cacheKey", "nanoid", "color: inherit", "errToObj", "compileAsync", "createStreamState", "$schema must be a string", "_error", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", "UploadPassProvider is not fully compatible with TaskRouter upload mechanism. Please use the uploadResource prop instead.", " === '' ", "SDPPPX services are not available", "ajv", "element", "2025-03-26", "acy", "无法写入{{part}}提示词，请稍后重试。", "Failed to get Supabase session: {{error}}", "schema id ignored", "Create document for preview", "cimode", "请选择要获取的图像", "days", "#CC0099", "Supabase anon key", "disable", "AI使用的区域与最大尺寸控制", "description", "action", "click to restore", "未实现 (501)", "markDisconnected", "当前任务路由暂不支持上传控件", "#CC0000", "-{{value}}积分", ".pi-sign-out", "_processInputParams", "mountedEndpoints", "formatParams", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "Task creation aborted", "createGlobalDispatcherForType", "获取结果失败: {{error}}", "invalid_intersection_types", " }   ", "Message", "normalizeId", "Fetch current layer with canvas boundary", " , params: { missingProperty: '", "var pattern", "Please select the image to get", "prp", " = true; } else { ", "ZodSet", "暂无视频", "transports", "lowerCaseLng", "~validate", " division", "waitingReads", "message", "init", "isRoot", "如何获取APIKey", "MissingRefError", "stopAll", "Main Image", "result", " element(s)", "Select a history task", " } else { ", "_instructions", "Task execution failed: {{error}}", " == errors) { ", "SCHEMES", "ZodBigInt", "images", "properties ", "#/definitions/nonNegativeIntegerDefault0", "SDPPP may not be installed or version mismatch (404)", "notice", "Create document for sent images", ") break; } ", "decline", "Generating...", "responseSchema", "setKey", " is already defined", "node", "以当前图层边界获取画布", "点击使用当前选区", "more", "def", "escape", "$ref", "Fetch canvas with primary boundary", "all", " == 'string' || ", "AbortSignal is already aborted", "Server does not support notifying about resources (required for ", "ads", "Refresh balance", "_any", "less than or equal to", "obj", "loadLanguages", "510", "accessing an object - but returnObjects options is not enabled!", "setupGraphStoreSync", ", received '", " != 'number' || ", " is present' ", "unknown keyword: ", " = formats[", "提示词", "added", "nonstrict", " < ", "sendPromptListChanged", "options.loadSchema should be a function", "%25", "preprocess", "358520qqNAvQ", "protocol", "Open images from file", "deepPartial", "range", "getProperty", "jwt", "连接 ComfyUI 失败（HTTP {{code}}）", "addResource", "设置图层的文本", "以画布边界获取画布", "/type", ".validate", "Missing upload resource", " === undefined) ", "async", "keyof", " ucs2length(", " , params: { comparison: ", "; if (!", "sdppp/streamResponse", "[A-Za-z]", ") {  for (var ", "nonnegative", "minItems", "cidr", "Enter your Replicate API Key", "apd", "Template name", "Applying templates is unavailable right now.", "当前没有可用图层", "#3300CC", "String must contain ", "#9900CC", "relatedRequestId", "manuallyExtractDefaults", "resource", "SDPPP sponsor exclusive API", "flatten", "删除模板", "Fit to canvas", "   ", " after ", "requestsHandled", "ActionSet {{0}} 未找到", "maxProperties", "; }", "应用ID:", "coerce", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", "queuePrompt", "missed to resolve ", "exclude", "isIP", "services", "hasLoadedNamespace", "removeRequestHandler", "onTimeout", "Local file", " == 'object' && Array.isArray(", "color: ", "_notificationHandlers", "dataLevel", "heartbeatTimeoutTimer", "Negative prompt content", "iterator", "order", "revocable", "Failed to request initial state for ", "unrecognized_keys", "markConnected", "requestsIntercepted", "_requestMessageId", "keySeparator", " if (! ", "#FF0000", "RelativeTimeFormat", "floor", " + '", "cardinal", "graph", "正在发送...", "粘贴你的模型名称", "passContext", "null", " + ", "TaskRouter service URL", "Merge group failed", "Generating", "substr", "missingRef", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", `Get image &
Limit image boundary`, "任务执行失败", "activeState", "warn", "strictDefaults", "Upload failed: ", "ZodCatch", "Invalid function return type", "setRequestHandler", "$data", "mergeShapes", "saveWorkflow", "too_small", "mergeArray", "ignore", "执行成功", "ConnectionClosed", "negative", "加载中...", "Failed to create file resource", "任务 ID", "Get image from Current Layer", "#FF0033", "Failed to load workflows.", "#0099CC", "HTTP URIs must have a host.", "should have required property \\'", " && self._opts.unknownFormats.indexOf(", "registerHandler", "usedLng", "padEnd", "当前任务数:", "sdpppHandshake", "dataProperties", " must be number or boolean", "en-US", "key", "onprogress", "postProcess", "await ", " , params: { passingSchemas: ", "curlayer_selection", " = false; else { ", "duration", " = +", "image/png", `"' `, "当前选项：图层 {{layerName}}", ", (dataPath || '')", "基础 URL", ") vErrors.length = ", "ping", " if (rootData === undefined) rootData = data; ", "Prompts", "#3333FF", " } ", "历史记录", " -> ", "title", "else", "Invalid name: {{0}}", "finite", "  for (var ", "未找到文档 {0}", "]] === undefined ", "获取 API Key", "File not found: {{path}}", "wait", "float", "mergeObjectAsync", "BigInt must be ", "removed", "'then'", "index", "call", "从 当前图层 获取遮罩", "keyPrefix", "lastPongReceived", "默认模板", "Output to:", "No edge defined from ", "regExpMap", "[^\\%\\/\\:\\@]", "图层 {{layerName}}", "请填写提示词内容。", "从 画布 获取遮罩", " , message: 'boolean schema is false' ", "Fetch canvas with canvas boundary", "handle", "notifications/resources/updated", '" ignored in schema at path "', "Shift 点击或右键可切换自动发送", "保存提示词模板失败。", "waiters", "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", "initialState", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "prompt_id", "Template name already exists.", "hijacked", "Request handler failed: ", "strict", "defineProperty", "interpolate", ") { ", ") {  var err =   ", "spa", "  )  ", "prompts", "#0099FF", "Please select the position to send image", "dirty", "__connection_established", '[\\"]', "extendRefs", "Request timeout (408)", "#CC3399", "' : '", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, "storage", " (division", "#FF6633", "scheme", " == +", "map", "url", "varOccurences", "nodeProxies", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "schema should be object or boolean", "[\\:]", "Task ID", "overflow", "combo", "refinement", " }  ", " = false;  ", "获取图层信息", "api", "_formats", "Not a ZodError: ", "getTextInfo", " = new RegExp(", "_serverInfo", "Supabase URL", "生成中", "Current layer bounds", "以画布边界获取当前图层", "输入设置", "bind", "上传中，如果图片过大，可能会卡顿...", ".schema = ", ") {   ", `获取图像 &
裁剪选区遮罩`, "extra", "每批图像数", "absolutePath", "video", "IPV6ADDRESS", " character(s)", "readingCalls", "Converting circular structure to JSON", " , params: {} ", " if (false) { ", "greater than ", "getHandler", "undefined", " !== undefined)", "#CC00FF", "dataPath", "minDate", "ZodMap", "run API failed - {{reason}}", "store", "按选区裁剪", "Email address's domain name can not be converted to ASCII via punycode: ", "Request timed out", "Outgoing notification interceptor failed: ", " { keyword: '", ";if (", "Cannot reboot because ComfyManager is missing", "gte", " - no connection available", "hasPath", "生成中...", " characters' ", "reloadResources", "getData", "188321OyDsdx", "validateKeyword", "ref/prompt", "__proto__", "getTime", "isNullable", "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting", "stack", "colors", " (async", "Not implemented (501)", "nonempty", "initializeResponseQueue", "智能对象图层", "if (!", "'else'", "response", "save", "IPV4ADDRESS", "fromCodePoint", ".length == 1) { ", "postProcessPassResolved", "callValidate", "Values", " = errors; var ", "promise", "Import from disk", ")) {  ", "_timeoutInfo", " === false) ", "AI 生成任务", "setupAbortHandler", "已添加遮罩", "setProperty", "app", "Get mask from Canvas", " = true; ", "regex", "+\\.", "lte", "if ( ", "nodes", "trim", "addKeyword", "_path", "mailto", "setPrototypeOf", "validation", '" already exists', "Gateway timeout (504)", "任务详情", "setupStreamResponseHandler", "自定义AI工作流引擎", " == 'number' ? ( (", "保存并立即执行", "isConnected", "Auto sync is off", "2024-10-07", ", rootData)  ", "Server error (500)", "resolveRunImages", "clientInfo", "fromCharCode", "skips", "当前图层范围", "useDefault", "compile", "definitions", " !== undefined) {  ", "append", "  errors = ", "hasResourceBundle", "types", "fragment", " = false , ", "dataVar", "Action {{0}} 未找到", "Uploader not set", "编辑模板", "Forbidden (403)", "removeDotSegments", "year", "shu", " not implemented for node ", "[\\uE000-\\uF8FF]"];
  return Px = function() {
    return o;
  }, Px();
}
Gt[a(558)] = (o, x) => {
  const t = a;
  return new Gt({ values: o, typeName: pe[t(664)], ...we(x) });
};
class Ix extends Fe {
  [a(2e3)]() {
    return this[a(2200)].type;
  }
  [a(2297)](x) {
    const t = a, { ctx: r } = this[t(2437)](x);
    if (r[t(1358)] !== ae[t(2828)] && r[t(2919)][t(2538)] === !1) return Y(r, { code: K[t(2165)], expected: ae[t(2828)], received: r[t(1358)] }), he;
    const e = r[t(1358)] === ae.promise ? r.data : Promise[t(855)](r.data);
    return a0(e.then((s) => {
      const n = t;
      return this[n(2200)][n(2291)].parseAsync(s, { path: r[n(648)], errorMap: r[n(2919)][n(2082)] });
    }));
  }
}
Ix[a(558)] = (o, x) => {
  const t = a;
  return new Ix({ type: o, typeName: pe[t(1504)], ...we(x) });
};
class T0 extends Fe {
  [a(550)]() {
    const x = a;
    return this._def[x(2238)];
  }
  [a(1431)]() {
    const x = a;
    return this[x(2200)].schema._def[x(1099)] === pe[x(1728)] ? this[x(2200)][x(2238)][x(1431)]() : this[x(2200)][x(2238)];
  }
  _parse(x) {
    const t = a, { status: r, ctx: e } = this[t(2437)](x), s = this[t(2200)][t(513)] || null, n = { addIssue: (i) => {
      const c = t;
      Y(e, i), i.fatal ? r[c(715)]() : r.dirty();
    }, get path() {
      return e.path;
    } };
    if (n[t(960)] = n.addIssue.bind(n), s[t(2291)] === "preprocess") {
      const i = s[t(1593)](e[t(1506)], n);
      if (e[t(2919)][t(2538)]) return Promise[t(855)](i).then(async (c) => {
        const u = t;
        if (r[u(935)] === "aborted") return he;
        const d = await this[u(2200)][u(2238)]._parseAsync({ data: c, path: e[u(648)], parent: e });
        return d[u(1071)] === "aborted" ? he : d[u(1071)] === u(2726) ? Q0(d[u(935)]) : r[u(935)] === u(2726) ? Q0(d.value) : d;
      });
      {
        if (r[t(935)] === t(1363)) return he;
        const c = this._def[t(2238)][t(1386)]({ data: i, path: e.path, parent: e });
        return c[t(1071)] === t(1363) ? he : c.status === t(2726) || r[t(935)] === t(2726) ? Q0(c[t(935)]) : c;
      }
    }
    if (s.type === t(2749)) {
      const i = (c) => {
        const u = t, d = s[u(2749)](c, n);
        if (e[u(2919)][u(2538)]) return Promise[u(855)](d);
        if (d instanceof Promise) throw new Error(u(1969));
        return c;
      };
      if (e[t(2919)][t(2538)] === !1) {
        const c = this[t(2200)][t(2238)]._parseSync({ data: e[t(1506)], path: e.path, parent: e });
        return c.status === t(1363) ? he : (c[t(1071)] === t(2726) && r[t(2726)](), i(c[t(935)]), { status: r[t(935)], value: c.value });
      } else return this[t(2200)][t(2238)]._parseAsync({ data: e[t(1506)], path: e.path, parent: e })[t(634)]((c) => {
        const u = t;
        return c[u(1071)] === u(1363) ? he : (c[u(1071)] === u(2726) && r[u(2726)](), i(c[u(935)])[u(634)](() => ({ status: r[u(935)], value: c.value })));
      });
    }
    if (s[t(2291)] === "transform")
      if (e[t(2919)][t(2538)] === !1) {
        const i = this[t(2200)][t(2238)][t(1386)]({ data: e[t(1506)], path: e[t(648)], parent: e });
        if (!H0(i)) return he;
        const c = s[t(1593)](i[t(935)], n);
        if (c instanceof Promise) throw new Error(t(2572));
        return { status: r[t(935)], value: c };
      } else return this[t(2200)].schema[t(1923)]({ data: e[t(1506)], path: e[t(648)], parent: e })[t(634)]((i) => {
        const c = t;
        return H0(i) ? Promise[c(855)](s.transform(i[c(935)], n))[c(634)]((u) => ({ status: r[c(935)], value: u })) : he;
      });
    Te[t(1635)](s);
  }
}
T0[a(558)] = (o, x, t) => new T0({ schema: o, typeName: pe.ZodEffects, effect: x, ...we(t) }), T0.createWithPreprocess = (o, x, t) => {
  const r = a;
  return new T0({ schema: x, effect: { type: r(2522), transform: o }, typeName: pe[r(1728)], ...we(t) });
};
class S0 extends Fe {
  [a(2297)](x) {
    const t = a;
    return this._getType(x) === ae.undefined ? a0(void 0) : this[t(2200)][t(550)][t(2297)](x);
  }
  [a(2e3)]() {
    const x = a;
    return this[x(2200)][x(550)];
  }
}
S0[a(558)] = (o, x) => {
  const t = a;
  return new S0({ innerType: o, typeName: pe[t(2924)], ...we(x) });
};
class D0 extends Fe {
  [a(2297)](x) {
    const t = a;
    return this[t(904)](x) === ae.null ? a0(null) : this[t(2200)].innerType[t(2297)](x);
  }
  unwrap() {
    const x = a;
    return this[x(2200)][x(550)];
  }
}
D0[a(558)] = (o, x) => {
  const t = a;
  return new D0({ innerType: o, typeName: pe[t(680)], ...we(x) });
};
class Ex extends Fe {
  [a(2297)](x) {
    const t = a, { ctx: r } = this[t(2437)](x);
    let e = r[t(1506)];
    return r[t(1358)] === ae[t(2781)] && (e = this[t(2200)][t(1890)]()), this[t(2200)].innerType[t(2297)]({ data: e, path: r.path, parent: r });
  }
  [a(1828)]() {
    const x = a;
    return this[x(2200)][x(550)];
  }
}
Ex[a(558)] = (o, x) => {
  const t = a;
  return new Ex({ innerType: o, typeName: pe.ZodDefault, defaultValue: typeof x[t(2096)] === t(1149) ? x[t(2096)] : () => x[t(2096)], ...we(x) });
};
class Rx extends Fe {
  [a(2297)](x) {
    const t = a, { ctx: r } = this._processInputParams(x), e = { ...r, common: { ...r.common, issues: [] } }, s = this._def[t(550)][t(2297)]({ data: e[t(1506)], path: e[t(648)], parent: { ...e } });
    return gx(s) ? s[t(634)]((n) => {
      const i = t;
      return { status: "valid", value: n[i(1071)] === "valid" ? n[i(935)] : this[i(2200)][i(2166)]({ get error() {
        const c = i;
        return new P0(e[c(2919)][c(995)]);
      }, input: e[i(1506)] }) };
    }) : { status: t(467), value: s.status === t(467) ? s.value : this[t(2200)][t(2166)]({ get error() {
      const n = t;
      return new P0(e[n(2919)][n(995)]);
    }, input: e[t(1506)] }) };
  }
  [a(1897)]() {
    return this._def.innerType;
  }
}
Rx.create = (o, x) => {
  const t = a;
  return new Rx({ innerType: o, typeName: pe.ZodCatch, catchValue: typeof x[t(1045)] == "function" ? x[t(1045)] : () => x[t(1045)], ...we(x) });
};
class Oa extends Fe {
  _parse(x) {
    const t = a;
    if (this[t(904)](x) !== ae[t(510)]) {
      const e = this[t(1310)](x);
      return Y(e, { code: K.invalid_type, expected: ae.nan, received: e[t(1358)] }), he;
    }
    return { status: t(467), value: x[t(1506)] };
  }
}
Oa.create = (o) => {
  const x = a;
  return new Oa({ typeName: pe[x(1804)], ...we(o) });
};
class Ms extends Fe {
  [a(2297)](x) {
    const t = a, { ctx: r } = this[t(2437)](x), e = r[t(1506)];
    return this[t(2200)][t(2291)][t(2297)]({ data: e, path: r[t(648)], parent: r });
  }
  unwrap() {
    const x = a;
    return this._def[x(2291)];
  }
}
class oa extends Fe {
  [a(2297)](x) {
    const t = a, { status: r, ctx: e } = this._processInputParams(x);
    if (e[t(2919)].async)
      return (async () => {
        const n = t, i = await this[n(2200)].in[n(1923)]({ data: e.data, path: e.path, parent: e });
        return i.status === n(1363) ? he : i[n(1071)] === n(2726) ? (r.dirty(), Q0(i[n(935)])) : this[n(2200)][n(2910)][n(1923)]({ data: i[n(935)], path: e[n(648)], parent: e });
      })();
    {
      const s = this[t(2200)].in._parseSync({ data: e[t(1506)], path: e[t(648)], parent: e });
      return s[t(1071)] === t(1363) ? he : s.status === t(2726) ? (r[t(2726)](), { status: "dirty", value: s[t(935)] }) : this._def[t(2910)][t(1386)]({ data: s[t(935)], path: e[t(648)], parent: e });
    }
  }
  static [a(558)](x, t) {
    const r = a;
    return new oa({ in: x, out: t, typeName: pe[r(2967)] });
  }
}
class Cx extends Fe {
  [a(2297)](x) {
    const t = a, r = this._def[t(550)][t(2297)](x), e = (s) => {
      const n = t;
      return H0(s) && (s[n(935)] = Object[n(1466)](s[n(935)])), s;
    };
    return gx(r) ? r[t(634)]((s) => e(s)) : e(r);
  }
  [a(2e3)]() {
    const x = a;
    return this[x(2200)][x(550)];
  }
}
Cx.create = (o, x) => {
  const t = a;
  return new Cx({ innerType: o, typeName: pe[t(1328)], ...we(x) });
};
function Da(o, x) {
  const t = a, r = typeof o === t(1149) ? o(x) : typeof o === t(2028) ? { message: o } : o;
  return typeof r === t(2028) ? { message: r } : r;
}
function uo(o, x = {}, t) {
  const r = a;
  return o ? ax.create()[r(1637)]((e, s) => {
    const n = r, i = o(e);
    if (i instanceof Promise) return i[n(634)]((c) => {
      const u = n;
      if (!c) {
        const d = Da(x, e), l = d.fatal ?? t ?? !0;
        s[u(960)]({ code: u(2126), ...d, fatal: l });
      }
    });
    if (!i) {
      const c = Da(x, e), u = c[n(1094)] ?? t ?? !0;
      s[n(960)]({ code: n(2126), ...c, fatal: u });
    }
  }) : ax[r(558)]();
}
var pe;
(function(o) {
  const x = a;
  o[x(1620)] = x(1620), o[x(1465)] = "ZodNumber", o[x(1804)] = "ZodNaN", o[x(2476)] = x(2476), o[x(1647)] = x(1647), o[x(2926)] = x(2926), o[x(1627)] = x(1627), o[x(1292)] = x(1292), o[x(1084)] = x(1084), o.ZodAny = x(1014), o[x(972)] = x(972), o[x(2134)] = x(2134), o[x(2171)] = x(2171), o[x(535)] = x(535), o[x(2113)] = x(2113), o[x(1574)] = x(1574), o[x(2352)] = x(2352), o[x(1251)] = x(1251), o[x(2938)] = x(2938), o[x(942)] = "ZodRecord", o[x(2786)] = "ZodMap", o[x(2454)] = x(2454), o[x(906)] = x(906), o[x(396)] = x(396), o[x(1379)] = x(1379), o[x(286)] = x(286), o.ZodEffects = x(1728), o[x(664)] = x(664), o[x(2924)] = x(2924), o[x(680)] = x(680), o[x(1388)] = x(1388), o[x(2621)] = x(2621), o[x(1504)] = x(1504), o[x(1010)] = x(1010), o[x(2967)] = x(2967), o.ZodReadonly = x(1328);
})(pe || (pe = {}));
const zx = (o, x = { message: a(379) + o[a(1166)] }) => uo((t) => t instanceof o, x), b = w0.create, W = V0[a(558)], Q = zt[a(558)], ve = ax[a(558)], k0 = Bt.create;
C0[a(558)];
const G0 = Wt.create, Se = h0[a(558)], S = Ze[a(558)], Ve = vx[a(558)], $s = na[a(558)];
wx[a(558)], A0[a(558)];
const qe = Sx[a(558)], xe = kx.create, Ie = O0[a(558)];
Ix.create;
const B = S0[a(558)];
D0.create;
var rs;
class lo {
  constructor(x, t) {
    me(this, "graphInstance");
    me(this, rs);
    const r = a;
    this[r(386)] = x, this[r(518)] = t;
  }
  get [(rs = a(518), a(2788))]() {
    const x = a, t = this[x(386)][x(1427)](this[x(518)]);
    if (!t) throw new Error(x(2373) + this[x(518)]);
    return t;
  }
  get [a(810)]() {
    const x = a, t = this.graphInstance[x(298)]()[x(540)](this[x(518)]);
    if (!t) throw new Error(x(2387) + this.nodeId);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s != "string") return;
      const i = t[n(810)][s], c = s[n(1654)](n(1047));
      if (!i && !c) throw new Error(n(2283) + s + n(3024) + this[n(518)]);
      return async (u, d) => {
        const l = n, f = this[l(1424)]();
        if (!f) throw new Error(l(915) + this.nodeId);
        const { transport: g, path: h } = f, m = this[l(386)][l(534)]();
        if (!(i != null && i.stream)) {
          const k = ve();
          let I;
          if (h[l(1148)] === 2) I = await g.request({ method: "sdppp/directRequest", params: { action: s, data: u, sourceNodeId: m } }, k);
          else try {
            I = await g.request({ method: l(668), params: { action: l(1565), data: { targetNodeId: this[l(518)], targetAction: s, targetData: u, forwardPath: h[l(1908)](1) }, sourceNodeId: m } }, k);
          } catch (T) {
            throw console[l(1491)](l(1847) + s + ":", T), console[l(1491)]({ targetNodeId: this.nodeId, targetAction: s, targetData: u, forwardPath: h[l(1908)](1) }), T;
          }
          return I;
        }
        let v;
        return h[l(1148)] === 2 ? v = g[l(1368)]({ action: s, data: u, sourceNodeId: m }, i[l(2486)], d) : v = g[l(1368)]({ action: "__proxy_forward", data: { targetNodeId: this[l(518)], targetAction: s, targetData: u, forwardPath: h.slice(1) }, sourceNodeId: m }, i.responseSchema, d), v;
      };
    } });
  }
  [a(1424)]() {
    return this[a(386)].getTransportToNode(this.nodeId);
  }
}
var ss, ns;
class Us {
  constructor(x) {
    me(this, "graphInstance");
    me(this, ns);
    me(this, ss);
    const t = a;
    this.graphInstance = x, this[t(2155)] = x[t(2155)], this[t(2020)] = x[t(2020)];
  }
  [(ns = a(2155), ss = a(2020), a(368))]({ store: x, storeName: t, onStateUpdate: r, requestInitialState: e }) {
    const s = a;
    this[s(2020)][s(2643)](s(1956) + t, (n) => {
      const i = s;
      try {
        n.sourceNodeId !== this[i(386)][i(534)]() && r(n[i(760)]);
      } catch (c) {
        console[i(1491)]("[GraphStoreSynchronizer] Error processing store update for " + t + ":", c);
      }
    });
  }
  [a(1454)]({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: e }) {
    const s = a, n = this[s(386)][s(534)](), i = async (d, l = !1) => {
      const f = s;
      if (this[f(2073)]()) try {
        await this.broadcastManager[f(1835)](f(1956) + t, { storeName: t, sourceNodeId: n, stateUpdate: d, isInitialState: l });
      } catch (h) {
        console[f(1491)](f(1122) + t + ":", h);
      }
    }, c = x[s(1833)]((d) => {
      i(d, !1);
    });
    e(() => {
      i(x[s(1672)](), !0);
    });
    const u = "__internal_requestInitialState_" + t;
    return this[s(2155)][s(1036)](u, async () => {
      const d = s, l = x[d(1672)]();
      return await i(l, !0), { success: !0 };
    }), this[s(2020)].registerHandler(s(2727), async (d) => {
      const l = s;
      try {
        (d[l(2107)] === n || d[l(2043)] === n) && await i(x[l(1672)](), !0);
      } catch {
      }
    }), () => {
      var l;
      const d = s;
      c(), (l = this[d(2155)][d(1889)]) == null || l[d(2375)](u);
    };
  }
  isTransportReady() {
    var t;
    const x = a;
    try {
      const r = this[x(386)][x(1150)], e = r && r.getConnectionCount() > 0, s = ((t = this.broadcastManager[x(2438)]) == null ? void 0 : t.size) > 0;
      return e || s;
    } catch {
      return !!this[x(2020)];
    }
  }
  async [a(1163)](x, t) {
    const r = a, e = this[r(386)].getCurrentNodeId();
    if (this[r(2073)]()) try {
      await this.broadcastManager[r(1835)]("store:update:" + t, { storeName: t, sourceNodeId: e, stateUpdate: x.getState(), isInitialState: !0 });
    } catch {
    }
  }
}
function fo({ graphInstance: o, store: x, name: t }) {
  const r = a, e = new Us(o), s = (i) => {
    const c = Z, u = x[c(1672)](), d = { ...u, ...i };
    x.setState(d);
  }, n = async () => {
    const i = Z, c = "__internal_requestInitialState_" + t;
    try {
      const u = o[i(540)](t);
      u && u[i(810)] && u[i(810)][c] && await u[i(810)][c]();
    } catch (u) {
      console.warn("Failed to request initial state for " + t + ":", u);
    }
  };
  e[r(368)]({ store: x, storeName: t, onStateUpdate: s, requestInitialState: n });
}
function ho({ graphInstance: o, store: x, name: t }) {
  const r = new Us(o), e = async (n) => {
  }, s = (n) => {
  };
  return r.initializeProducer({ store: x, storeName: t, sendStateUpdate: e, onInitialStateRequested: s });
}
var os, is, cs;
class po {
  constructor(x) {
    me(this, cs, /* @__PURE__ */ new Map());
    me(this, is, /* @__PURE__ */ new Map());
    me(this, "mountedTransports", /* @__PURE__ */ new Set());
    me(this, os);
    this.currentNodeId = x;
  }
  [(cs = a(2968), is = a(2456), os = a(1915), a(2442))](x) {
    return (t) => {
      const r = Z;
      if (t && t[r(1955)] === this.currentNodeId) return;
      const e = this[r(2968)][r(1507)](x);
      if (e) {
        const { __origin: s, forwarded: n, ...i } = t || {};
        for (const c of e)
          try {
            c(i);
          } catch (u) {
            console[r(1491)](r(928) + x + ":", u);
          }
      }
      !t.forwarded && this[r(353)](x, t);
    };
  }
  async [a(353)](x, t) {
    const r = a;
    try {
      const e = { ...t, forwarded: !0 }, s = [...Array.from(this[r(2456)].values()), ...Array[r(1546)](this[r(3031)])], n = s[r(2739)]((i) => {
        const c = r;
        return i.notification({ method: c(1183), params: { messageType: x, message: e } }).catch((u) => {
          const d = c;
          console[d(1491)](d(2099) + x + ":", u);
        });
      });
      await Promise[r(2497)](n);
    } catch (e) {
      console[r(1491)](r(1284), e);
    }
  }
  [a(2643)](x, t) {
    const r = a;
    !this[r(2968)][r(1281)](x) && this[r(2968)][r(823)](x, /* @__PURE__ */ new Set()), this[r(2968)][r(1507)](x)[r(986)](t);
  }
  setupTransportHandlers(x) {
    this.setupGeneralBroadcastHandler(x);
  }
  [a(1325)](x) {
    const t = a, r = S({ method: xe(t(1183)), params: S({ messageType: b(), message: ve() }) });
    x.setNotificationHandler(r, async (e) => {
      const s = t, n = e[s(434)].messageType;
      this[s(2442)](n)(e[s(434)][s(2461)]);
    });
  }
  [a(1418)](x, t) {
    const r = a;
    this[r(2456)][r(823)](x, t), this[r(2158)](t);
  }
  [a(1295)](x) {
    const t = a;
    this[t(2456)][t(2375)](x);
  }
  async [a(1835)](x, t) {
    const r = a, e = [...Array[r(1546)](this[r(2456)].values()), ...Array[r(1546)](this[r(3031)])], s = e.map((n) => {
      const i = r;
      return n[i(1455)]({ method: i(1183), params: { messageType: x, message: t } });
    });
    await Promise[r(2497)](s);
  }
  mountTo(x) {
    const t = a;
    this.mountedTransports[t(986)](x), this[t(2158)](x);
  }
  getHandlerTypes() {
    const x = a;
    return Array.from(this[x(2968)][x(1877)]());
  }
  [a(277)]() {
    const x = a;
    this[x(2968)].clear(), this[x(2456)][x(277)](), this[x(3031)][x(277)]();
  }
}
var us, ds, ls;
class mo {
  constructor(x, t, r) {
    me(this, "actionHandlers", /* @__PURE__ */ new Map());
    me(this, ls);
    me(this, ds);
    me(this, us);
    const e = a;
    this.definition = x, this[e(1915)] = t, this[e(392)] = r;
  }
  [(ls = a(528), ds = a(1915), us = a(392), a(1748))](x, t) {
    const r = a, e = this[r(528)].getNode(this[r(1915)]);
    if (!e) throw new Error("Node definition not found for " + this[r(1915)]);
    const s = e[r(810)][x];
    if (!s) throw new Error("Action " + String(x) + " not found for node " + this.currentNodeId);
    this[r(1349)](x, t, s), this[r(1889)].set(x, t);
  }
  validateHandlerType(x, t, r) {
    r[a(1554)];
  }
  implementInternalAction(x, t) {
    const r = a;
    this[r(1889)][r(823)](x, t);
  }
  mountTo(x) {
    const t = a;
    for (const [r, e] of this[t(1889)]) {
      const s = this[t(528)].getNode(this.currentNodeId), n = s == null ? void 0 : s[t(810)][r];
      if (r[t(1654)](t(1047)) ? !1 : (n == null ? void 0 : n[t(1554)]) === !0) {
        const u = S({ action: xe(r) });
        x.registerStreamRequestorHandler(u, async function* (d, l, f) {
          const g = t, h = d.data || d, m = e(h, l, f);
          if (m && typeof m === g(2220) && Symbol[g(533)] in m) for await (const v of m)
            yield v === void 0 ? {} : v;
          else {
            const v = await m;
            yield v === void 0 ? {} : v;
          }
        });
      }
    }
    this.registerProxyForwardHandler(x), this.registerDirectRequestHandlerGeneric(x);
  }
  [a(1737)](x) {
    const t = a, r = S({ action: xe(t(1565)) }), e = this;
    x[t(1146)](r, async function* (s, n, i) {
      const c = t, u = s[c(1506)] || s, { targetNodeId: d, targetAction: l, targetData: f, forwardPath: g } = u;
      if (!g || g[c(1148)] === 0) throw new Error(c(945));
      const h = g[0], m = g[c(1908)](1);
      if (m[c(1148)] === 0 && h === e[c(1915)]) {
        const v = e[c(1889)][c(1507)](l);
        if (!v) throw new Error(c(2283) + l + c(1653) + e[c(1915)]);
        const k = v(f, n, i);
        if (k && typeof k === c(2220) && Symbol[c(533)] in k) for await (const I of k)
          yield I === void 0 ? {} : I;
        else {
          const I = await k;
          yield I === void 0 ? {} : I;
        }
        return;
      }
      if (h === e[c(1915)] && m[c(1148)] > 0) {
        const v = m[0], k = e[c(392)](v);
        if (k) {
          const I = await k[c(1368)]({ action: c(1565), data: { targetNodeId: d, targetAction: l, targetData: f, forwardPath: m } }, S({}), i);
          for await (const T of I)
            yield T === void 0 ? {} : T;
          return;
        }
        throw new Error(c(1054) + v + c(2797));
      }
      throw new Error("Invalid proxy forwarding: current node " + e[c(1915)] + c(2118) + g);
    });
  }
  [a(2927)]() {
    return Array.from(this[a(1889)].keys());
  }
  [a(2100)](x) {
    const t = a;
    return this[t(1889)][t(1281)](x);
  }
  [a(2780)](x) {
    const t = a;
    return this[t(1889)][t(1507)](x);
  }
  [a(277)]() {
    const x = a;
    this[x(1889)][x(277)]();
  }
  [a(843)](x, t, r) {
  }
  [a(261)](x) {
    const t = a, r = S({ method: xe(t(668)), params: S({ action: b(), data: ve()[t(2184)]() }) }), e = this;
    x[t(2623)](r, async (s, n) => {
      const i = t, { action: c, data: u } = s.params;
      if (c === i(1565)) return await e[i(1640)](u, n);
      const d = e[i(1889)][i(1507)](c);
      if (!d) throw new Error(i(2283) + c + " not found on node " + e[i(1915)]);
      const l = d(u, n), f = await l;
      return f === void 0 ? {} : f;
    });
  }
  async [a(1640)](x, t) {
    const r = a, { targetNodeId: e, targetAction: s, targetData: n, forwardPath: i } = x;
    if (!i || i[r(1148)] === 0) throw new Error(r(945));
    const c = i[0], u = i.slice(1);
    if (u[r(1148)] === 0 && c === this[r(1915)]) {
      const d = this[r(1889)].get(s);
      if (!d) throw new Error(r(2283) + s + " not found on node " + this[r(1915)]);
      const l = d(n, t), f = await l;
      return f === void 0 ? {} : f;
    }
    if (c === this[r(1915)] && u[r(1148)] > 0) {
      const d = u[0], l = this.getTransport(d);
      if (l) return await l[r(1093)]({ method: "sdppp/directRequest", params: { action: r(1565), data: { targetNodeId: e, targetAction: s, targetData: n, forwardPath: u } } }, ve());
      throw new Error("Cannot forward to node " + d + r(2797));
    }
    throw new Error(r(1662) + this[r(1915)] + " not in path " + i);
  }
}
var fs, hs;
class bo {
  constructor(x, t) {
    me(this, hs);
    me(this, "currentNodeId");
    me(this, fs, /* @__PURE__ */ new Set());
    const r = a;
    this[r(528)] = x, this[r(1915)] = t;
  }
  [(hs = a(528), fs = a(950), a(2593))](x) {
    const t = a;
    this[t(950)][t(986)](x);
  }
  markDisconnected(x) {
    const t = a;
    this.connectedNodes[t(2375)](x);
  }
  [a(2858)](x) {
    const t = a;
    return this[t(950)][t(1281)](x);
  }
  [a(2279)](x, t) {
    const r = a;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), s = [{ nodeId: x, path: [x] }];
    for (; s.length > 0; ) {
      const { nodeId: n, path: i } = s[r(1766)]();
      if (e[r(1281)](n)) continue;
      e.add(n);
      const c = this[r(528)].getNeighbors(n);
      for (const u of c) {
        if (u === t) return [...i, u];
        !e[r(1281)](u) && s[r(3019)]({ nodeId: u, path: [...i, u] });
      }
    }
  }
  [a(1772)]() {
    return Array.from(this[a(950)]);
  }
  [a(1236)]() {
    const x = a;
    return this[x(950)][x(2108)];
  }
  [a(2357)]() {
    const x = a, t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), e = [this[x(1915)]];
    for (r[x(986)](this[x(1915)]); e[x(1148)] > 0; ) {
      const s = e[x(1766)](), n = this[x(528)].getNeighbors(s);
      for (const i of n)
        !r[x(1281)](i) && (r[x(986)](i), (this[x(950)].has(i) || this[x(2079)](i, r)) && (t.add(i), e[x(3019)](i)));
    }
    return Array[x(1546)](t);
  }
  [a(2079)](x, t) {
    const r = a, e = this[r(2279)](this.currentNodeId, x);
    if (!e || e.length <= 1) return !1;
    for (let s = 1; s < e.length - 1; s++)
      if (!this[r(950)].has(e[s])) return !1;
    return !0;
  }
  [a(277)]() {
    const x = a;
    this[x(950)][x(277)]();
  }
}
var ps, ms, bs, gs, ys, vs;
class go {
  constructor(x, t) {
    me(this, "definition");
    me(this, vs);
    me(this, ys, /* @__PURE__ */ new Map());
    me(this, gs, /* @__PURE__ */ new Map());
    me(this, bs);
    me(this, "actionManager");
    me(this, ms);
    me(this, ps, /* @__PURE__ */ new Map());
    const r = a;
    this[r(528)] = x, this[r(1915)] = t, this.initializeNodeStores(), this[r(2020)] = new po(t), this[r(2155)] = new mo(x, t, (e) => this[r(1405)](e)), this[r(1150)] = new bo(x, t), this[r(2509)]();
  }
  [(vs = a(1915), ys = a(1177), gs = a(2742), bs = a(2020), ms = a(1150), ps = a(496), a(1153))]() {
    const x = a;
    for (const t of this[x(528)][x(2231)]()) {
      const r = this[x(528)].getNode(t);
      if (r && r[x(2788)]) {
        const e = this[x(473)](r[x(2788)]), s = Ln(() => e);
        this.nodeStores[x(823)](t, s);
      }
    }
  }
  getDefaultValuesFromSchema(x) {
    const t = a;
    if (!x) return {};
    try {
      return x[t(1598)]({});
    } catch {
      return this[t(2558)](x);
    }
  }
  [a(2558)](x) {
    const t = a;
    if (!x || !x[t(2493)]) return {};
    if (x[t(2493)].type === t(2096)) {
      const r = x[t(2493)][t(1890)];
      return typeof r == "function" ? r() : r;
    }
    if (x.def[t(2291)] === "object") {
      const r = {};
      let e;
      try {
        e = x[t(2493)][t(1190)];
      } catch {
        return {};
      }
      if (e) for (const [s, n] of Object.entries(e)) {
        const i = this[t(2328)](n);
        i !== void 0 && (r[s] = i);
      }
      return r;
    }
    return {};
  }
  getDefaultValueFromField(x) {
    const t = a;
    if (x)
      try {
        return x.parse(void 0);
      } catch {
        return this[t(2558)](x);
      }
  }
  async [a(1501)](x, t) {
    const r = a;
    if (!this[r(528)].hasEdge(this[r(1915)], x)) throw new Error(r(2695) + this[r(1915)] + r(314) + x);
    if (this[r(496)][r(1281)](x)) throw new Error("Already connected to node " + x);
    try {
      this[r(496)][r(823)](x, t), this.connectionManager[r(2593)](x), this.setupNodeBindings(x, t), await this[r(2996)](x), await this[r(2892)](x);
    } catch (e) {
      throw this[r(2942)](x), e;
    }
  }
  [a(834)](x) {
    this[a(2942)](x);
  }
  async [a(2996)](x) {
    const t = a;
    await new Promise((r) => setTimeout(r, 100));
    for (const [r, e] of this.nodeStores)
      if (r === this[t(1915)]) try {
        await this[t(2020)][t(1835)]("store:update:" + r, { storeName: r, sourceNodeId: this[t(1915)], stateUpdate: e[t(1672)](), isInitialState: !0 });
      } catch {
      }
    try {
      await this[t(2020)][t(1835)](t(2727), { fromNode: this.currentNodeId, toNode: x });
    } catch {
    }
  }
  async [a(2892)](x) {
    const t = a;
    try {
      const r = this[t(1150)][t(2357)]();
      for (const e of r)
        try {
          const s = "__internal_requestInitialState_" + e, n = this[t(540)](e);
          if (n && n[t(810)] && n[t(810)][s]) {
            const i = n[t(810)][s]({});
            await Promise[t(992)]([i, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (s) {
          console.log(t(2591) + e + ":", s);
        }
    } catch (r) {
      console[t(2127)]("Failed to request initial states after connecting to " + x + ":", r);
    }
  }
  cleanupConnection(x) {
    const t = a, r = this.nodeTransports[t(1507)](x);
    this.nodeTransports.delete(x), this[t(1150)][t(2432)](x), this.broadcastManager[t(1295)](x), r && r[t(714)]();
  }
  setupNodeBindings(x, t) {
    const r = a;
    if (!this[r(1177)][r(1507)](this[r(1915)])) throw new Error("Store not found for " + this[r(1915)]);
    this[r(2155)][r(1467)](t), this[r(2020)][r(1418)](x, t);
  }
  [a(2509)]() {
    const x = a;
    for (const [t, r] of this[x(1177)])
      t === this[x(1915)] ? ho({ graphInstance: this, store: r, name: t }) : fo({ graphInstance: this, store: r, name: t });
  }
  [a(540)](x) {
    const t = a;
    if (!this[t(2742)][t(1281)](x)) {
      const r = new lo(this, x);
      this.nodeProxies.set(x, r);
    }
    return this[t(2742)][t(1507)](x);
  }
  [a(1405)](x) {
    return this[a(496)].get(x);
  }
  [a(1262)](x) {
    const t = a, r = this[t(496)].get(x);
    if (r) return { transport: r, path: [this[t(1915)], x] };
    const e = this[t(1502)](this[t(1915)], x);
    if (e && e[t(1148)] > 1) {
      const s = e[1], n = this[t(496)][t(1507)](s);
      if (n) return { transport: n, path: e };
    }
  }
  [a(1427)](x) {
    const t = a;
    return this[t(1177)][t(1507)](x);
  }
  get [a(2788)]() {
    const x = a, t = this[x(1177)][x(1507)](this[x(1915)]);
    if (!t) throw new Error(x(1041) + this[x(1915)]);
    return t;
  }
  get [a(810)]() {
    const x = a, t = this[x(528)][x(540)](this.currentNodeId);
    if (!t) throw new Error(x(744) + this[x(1915)]);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s !== n(2028)) return;
      const i = t.actions[s];
      if (!i) throw new Error(n(2283) + s + n(1982) + this[n(1915)]);
      return (c, u) => {
        const d = n, l = this[d(2155)][d(2780)](s);
        if (!l) throw new Error(d(585) + s + d(2886) + this[d(1915)]);
        const f = { nodeId: this[d(1915)] };
        if (i[d(1554)] === !0) {
          const g = l(c, f, u);
          return g && typeof g === d(2220) && Symbol.asyncIterator in g ? (async function* () {
            for await (const h of g)
              yield h === void 0 ? {} : h;
          })() : (async function* () {
            const h = await g;
            yield h === void 0 ? {} : h;
          })();
        } else return (async () => {
          const g = d, h = l(c, f, u);
          if (h && typeof h === g(2220) && Symbol[g(533)] in h) {
            const m = h[Symbol[g(533)]](), v = await m[g(1751)]();
            return v.value === void 0 ? {} : v[g(935)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [a(298)]() {
    return this[a(528)];
  }
  [a(534)]() {
    return this.currentNodeId;
  }
  [a(1694)](x) {
    return this[a(1262)](x);
  }
  implementAction(x, t) {
    const r = a;
    this[r(2155)][r(1748)](x, t);
  }
  [a(891)]() {
    const x = a, t = Array.from(this[x(496)][x(1877)]());
    for (const r of t)
      this[x(2942)](r);
    this[x(2020)][x(277)](), this[x(2155)][x(277)](), this[x(1150)][x(277)]();
  }
  [a(1502)](x, t) {
    return this[a(1150)].findPath(x, t);
  }
  [a(2279)](x, t) {
    return this[a(1502)](x, t);
  }
  async broadcast(x, t) {
    const r = a, e = { ...t, __origin: this[r(1915)] };
    return this[r(2020)][r(1835)](x, e);
  }
  [a(2103)](x, t) {
    const r = a;
    this[r(2020)][r(2643)](x, t);
  }
}
function yo(o) {
  const x = new jn(o);
  return { joinAs(t) {
    const r = Z;
    if (!x.getNode(t)) throw new Error(r(570) + String(t) + " not found in graph definition");
    return new go(x, t);
  }, getDefinition() {
    return o;
  }, getNodeIds() {
    return x[Z(2231)]();
  }, getNeighbors(t) {
    return x[Z(495)](t);
  }, hasEdge(t, r) {
    return x[Z(1697)](t, r);
  }, hasPath(t, r) {
    return x[Z(2798)](t, r);
  }, findPath(t, r) {
    return x.findPath(t, r);
  } };
}
const ja = { INTERCEPTOR_ERROR: "interceptor_error" };
var ws, Ss, ks;
class La extends (ks = Error, Ss = a(1802), ws = a(525), ks) {
  constructor(t, r, e, s) {
    const n = a;
    super(e);
    me(this, "type");
    me(this, Ss);
    me(this, ws);
    this[n(1166)] = n(2381), this[n(2291)] = t, this.method = r, this[n(525)] = s;
  }
}
var Ps, Is, Es, Rs, Cs, Fs, _s;
class vo {
  constructor(x, t = {}) {
    me(this, _s);
    me(this, "realTransport", null);
    me(this, Fs);
    me(this, Cs, /* @__PURE__ */ new Map());
    me(this, "notificationHandlers", /* @__PURE__ */ new Map());
    me(this, "outgoingRequestInterceptors", /* @__PURE__ */ new Map());
    me(this, Rs, /* @__PURE__ */ new Map());
    me(this, Es, []);
    me(this, "closeHandlers", []);
    me(this, Is, []);
    me(this, Ps, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    const r = a;
    this[r(2524)] = x, this[r(1341)] = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async [(_s = a(2524), Fs = a(1341), Cs = a(797), Rs = a(2251), Es = a(3023), Is = a(1441), Ps = a(1522), a(1501))](x) {
    const t = a;
    this[t(844)] = x, x[t(1903)] = (r) => {
      this[t(1917)](r);
    }, x[t(660)] = () => {
      const r = t;
      this[r(1904)][r(430)]((e) => e());
    }, x[t(2917)] = (r) => {
      const e = t;
      this[e(1441)][e(430)]((s) => s(r));
    }, await this[t(2524)][t(1501)](this);
  }
  async handleIncomingMessage(x) {
    const t = a;
    this[t(2127)](t(819), "Incoming message:", x);
    try {
      if (this.isRequest(x) && await this[t(2024)](x) || this[t(1357)](x) && await this[t(2928)](x))
        return;
      this[t(3023)][t(430)]((r) => r(x));
    } catch (r) {
      this[t(1522)][t(1139)]++, this[t(2127)](t(1491), t(573), r), this[t(3023)][t(430)]((e) => e(x));
    }
  }
  async [a(2024)](x) {
    const t = a, r = this[t(797)].get(x[t(1802)]);
    if (!r) return !1;
    try {
      this.stats[t(2566)]++;
      const e = await r(x, {});
      return this[t(844)] && "id" in x && await this[t(844)][t(1865)]({ jsonrpc: t(598), id: x.id, result: e }), !0;
    } catch (e) {
      return this[t(1522)][t(1139)]++, this[t(844)] && "id" in x && await this[t(844)].send({ jsonrpc: t(598), id: x.id, error: { code: -32603, message: t(2715) + JSON[t(3038)](x.params) + " " + e[t(2461)] } }), !0;
    }
  }
  async handleIncomingNotification(x) {
    const t = a, r = this[t(1061)][t(1507)](x[t(1802)]);
    if (!r) return !1;
    try {
      return this[t(1522)][t(1147)]++, await r(x), !0;
    } catch (e) {
      return this.stats[t(1139)]++, this.log(t(1491), "Notification handler failed for " + x[t(1802)] + ":", e), !0;
    }
  }
  async send(x) {
    const t = a;
    this[t(2127)](t(819), t(2027), x);
    try {
      if (this.isRequest(x)) {
        const r = await this[t(1814)](x);
        if (r.success) {
          if (r[t(2468)] === null) return;
          r[t(2468)] && (x = { ...r[t(2468)], jsonrpc: "2.0" }, this.stats[t(2594)]++);
        } else if (this[t(1341)][t(576)]) this[t(2127)](t(2618), t(1215) + x[t(1802)] + ":", r[t(1491)]);
        else throw r.error;
      }
      if (this[t(1357)](x)) {
        const r = await this[t(1080)](x);
        if (r[t(2186)]) {
          if (r[t(2468)] === null) return;
          r[t(2468)] && (x = { ...r[t(2468)], jsonrpc: t(598) }, this[t(1522)][t(505)]++);
        } else if (this.options[t(576)]) this[t(2127)](t(2618), t(2323) + x[t(1802)] + ":", r[t(1491)]);
        else throw r.error;
      }
      this.realTransport && await this[t(844)][t(1865)](x);
    } catch (r) {
      throw this[t(1522)][t(1139)]++, r;
    }
  }
  async [a(1171)]() {
    const x = a;
    this[x(844)] && await this[x(844)][x(1171)]();
  }
  async [a(880)]() {
    const x = a;
    this[x(844)] && await this[x(844)][x(880)]();
  }
  set [a(1903)](x) {
    this.messageHandlers = [x];
  }
  set [a(660)](x) {
    const t = a;
    this[t(1904)] = [x];
  }
  set [a(2917)](x) {
    const t = a;
    this[t(1441)] = [x];
  }
  async executeOutgoingRequestInterceptor(x) {
    const t = a, r = this[t(2240)][t(1507)](x[t(1802)]);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1344)](r(x), this[t(1341)][t(770)]) };
    } catch (e) {
      return this.stats[t(1139)]++, { success: !1, error: new La(ja[t(374)], x[t(1802)], t(2059) + e[t(2461)], e) };
    }
  }
  async [a(1080)](x) {
    const t = a, r = this.outgoingNotificationInterceptors[t(1507)](x[t(1802)]);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1344)](r(x), this[t(1341)][t(770)]) };
    } catch (e) {
      return this[t(1522)][t(1139)]++, { success: !1, error: new La(ja.INTERCEPTOR_ERROR, x[t(1802)], t(2792) + e[t(2461)], e) };
    }
  }
  async [a(1093)](x, t) {
    const r = a;
    return await this.protocol[r(1093)](x, t, { timeout: 36e5 });
  }
  async [a(1455)](x) {
    const t = a;
    return await this[t(2524)][t(1455)](x);
  }
  [a(2623)](x, t) {
    const r = a, e = x[r(1190)][r(1802)].value;
    this.requestHandlers.set(e, t);
  }
  [a(566)](x, t) {
    const r = a, e = x[r(1190)].method[r(935)];
    this[r(1061)].set(e, t);
  }
  [a(767)](x, t) {
    const r = a, e = x.shape[r(1802)][r(935)];
    this.outgoingRequestInterceptors[r(823)](e, t);
  }
  setOutgoingNotificationInterceptor(x, t) {
    const r = a, e = x[r(1190)][r(1802)][r(935)];
    this[r(2251)][r(823)](e, t);
  }
  unsetRequestHandler(x) {
    const t = a;
    this.requestHandlers[t(2375)](x);
  }
  [a(1994)](x) {
    const t = a;
    this[t(1061)][t(2375)](x);
  }
  [a(653)](x) {
    const t = a;
    this.outgoingRequestInterceptors[t(2375)](x);
  }
  [a(552)](x) {
    const t = a;
    this[t(2251)][t(2375)](x);
  }
  [a(879)](x) {
    const t = a;
    return this[t(797)][t(1281)](x);
  }
  [a(259)](x) {
    const t = a;
    return this[t(1061)][t(1281)](x);
  }
  [a(1715)](x) {
    const t = a;
    return this[t(2240)][t(1281)](x);
  }
  [a(1337)](x) {
    const t = a;
    return this[t(2251)][t(1281)](x);
  }
  [a(2981)]() {
    return { ...this[a(1522)] };
  }
  [a(310)]() {
    const x = a;
    this[x(1522)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [a(2123)]() {
    return this[a(2524)];
  }
  cleanup() {
    const x = a;
    this[x(797)][x(277)](), this[x(1061)][x(277)](), this[x(2240)][x(277)](), this[x(2251)][x(277)]();
  }
  [a(2333)](x) {
    const t = a;
    return x.jsonrpc === t(598) && t(1802) in x && "id" in x;
  }
  [a(1357)](x) {
    const t = a;
    return x.jsonrpc === t(598) && t(1802) in x && !("id" in x);
  }
  async withTimeout(x, t) {
    const r = a, e = new Promise((s, n) => {
      const i = Z;
      setTimeout(() => n(new Error(i(1642))), t);
    });
    return await Promise[r(992)]([x, e]);
  }
  log(x, t, ...r) {
    const e = a;
    if (!this[e(1341)][e(819)] && x === e(819)) return;
    const s = e(2971);
    switch (x) {
      case e(819):
        console.debug(s, t, ...r);
        break;
      case "info":
        console[e(1043)](s, t, ...r);
        break;
      case e(2618):
        console[e(2618)](s, t, ...r);
        break;
      case "error":
        console.error(s, t, ...r);
        break;
    }
  }
}
S({ method: xe(a(2543)), params: S({ requestId: b(), data: ve(), error: b().nullable(), finished: Q() }) }), S({ method: xe(a(2895)), params: S({ action: b(), data: ve() }) }), S({ method: xe(a(1575)), params: S({ requestId: b() }) });
const wo = S({ method: xe(a(2543)), params: S({ requestId: b(), data: ve(), error: b()[a(3011)](), finished: Q() }) }), So = S({ method: xe(a(2895)), params: S({ action: b(), data: ve() }) }), ko = S({ method: xe(a(1575)), params: S({ requestId: b() }) });
var Ns, Ts;
class Po {
  constructor() {
    me(this, Ts, /* @__PURE__ */ new Map());
    me(this, Ns, /* @__PURE__ */ new Map());
  }
  push(x) {
    const t = a, { requestId: r } = x[t(434)], e = this[t(2223)][t(1507)](r) || [], s = this.waiters.get(r) || [];
    s[t(1148)] > 0 ? s[t(1766)]()(x.params) : (e.push(x.params), this[t(2223)][t(823)](r, e));
  }
  async [(Ts = a(2223), Ns = a(2708), a(2906))](x) {
    const t = a, r = this[t(2223)][t(1507)](x) || [];
    return r[t(1148)] > 0 ? r.shift() : new Promise((e) => {
      const s = t, n = this[s(2708)][s(1507)](x) || [];
      n[s(3019)](e), this[s(2708)][s(823)](x, n);
    });
  }
  [a(714)](x) {
    const t = a;
    this[t(2223)][t(2375)](x), this[t(2708)][t(2375)](x);
  }
}
var qs, As, Os;
class Io extends vo {
  constructor(t, r = {}) {
    const e = a;
    super(t, r);
    me(this, Os, /* @__PURE__ */ new Map());
    me(this, As, 1);
    me(this, qs, /* @__PURE__ */ new Map());
    me(this, "notificationQueue", new Po());
    this[e(2063)]();
  }
  [(Os = a(276), As = a(3041), qs = a(1582), a(2063))]() {
    const t = a;
    this[t(2854)](), this[t(2834)](), this.setupStreamRequestHandler();
  }
  [a(2854)]() {
    const t = a;
    this[t(566)](wo, async (r) => {
      const e = t;
      this[e(612)][e(3019)](r);
    });
  }
  [a(2834)]() {
    this.setRequestHandler(ko, async (t, r) => {
      const e = Z, { requestId: s } = t[e(434)], n = this[e(1582)][e(1507)](s);
      return n && (n.abort(), this[e(1582)][e(2375)](s)), { success: !0 };
    });
  }
  setupStreamRequestHandler() {
    const t = a;
    this[t(2623)](So, async (r, e) => {
      const s = t, n = "req_" + this.requestIdSeq++, i = this.streamRequestorHandlers[s(1507)](r[s(434)][s(2429)]);
      if (!i) throw new Error("No handler for streamRequestor: " + r[s(434)][s(2429)]);
      const c = new AbortController();
      return this[s(1582)][s(823)](n, c), this[s(475)](n, i, r[s(434)], e, c), { requestId: n };
    });
  }
  async executeHandlerAsync(t, r, e, s, n) {
    const i = a;
    try {
      const c = r(e, s, n.signal);
      for await (const u of c) {
        if (n.signal[i(1363)]) break;
        await this[i(1455)]({ method: i(2543), params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !n[i(2364)][i(1363)] && await this.notification({ method: i(2543), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n[i(2364)].aborted && await this[i(1455)]({ method: i(2543), params: { requestId: t, data: null, error: c[i(2461)], finished: !0 } });
    } finally {
      this[i(1582)][i(2375)](t);
    }
  }
  [a(1146)](t, r) {
    const e = a;
    this[e(276)][e(823)](t[e(1190)][e(2429)].value, r);
  }
  async [a(1368)](t, r, e) {
    const s = a;
    this.validateStreamRequestorRequest(e);
    const n = await this[s(1650)](t), i = this[s(2815)](n), c = this[s(2406)]();
    return this[s(436)](i, c, n, e);
  }
  [a(490)](t) {
    const r = a;
    if (t && t.aborted) throw new Error(r(2499));
  }
  async [a(1650)](t) {
    const r = a;
    return (await this[r(1093)]({ method: r(2895), params: { action: t[r(2429)], data: t[r(1506)] } }, S({ requestId: b() })))[r(1508)];
  }
  initializeResponseQueue(t) {
    return this[a(612)];
  }
  [a(2406)]() {
    return { finished: !1, error: null };
  }
  createAsyncIterator(t, r, e, s) {
    const n = a, i = this;
    return { async *[Symbol[n(533)]]() {
      const c = n;
      try {
        for (; !r[c(1032)] && !r[c(1491)]; ) {
          if (s && s[c(1363)])
            throw await i[c(1093)]({ method: c(1575), params: { requestId: e } }, S({ success: Q() })), new Error(c(1815));
          const u = await t[c(2906)](e);
          if (u[c(1491)])
            throw r[c(1491)] = u[c(1491)], new Error(u[c(1491)]);
          if (u[c(1032)]) {
            r[c(1032)] = !0;
            break;
          }
          u[c(1506)] !== null && (yield u.data);
        }
      } finally {
        t[c(714)](e);
      }
    } };
  }
  getRunningRequestsCount() {
    const t = a;
    return this[t(1582)][t(2108)];
  }
  async [a(781)](t) {
    const r = a, e = this[r(1582)][r(1507)](t);
    return e ? (e.abort(), this[r(1582)][r(2375)](t), !0) : !1;
  }
  abortAllRequests() {
    const t = a;
    for (const [r, e] of this[t(1582)])
      e[t(715)]();
    this[t(1582)][t(277)]();
  }
  [a(714)]() {
    const t = a;
    super[t(714)](), this.abortAllRequests(), this[t(276)].clear();
  }
}
S({ id: b(), method: b(), params: ve()[a(2184)](), traceId: b()[a(2184)]() }), S({ id: b(), result: ve()[a(2184)](), error: S({ code: W(), message: b(), data: ve()[a(2184)]() })[a(2184)]() }), S({ method: b(), params: ve().optional() }), S({ method: xe(a(2895)), params: S({ action: b(), data: ve() }) }), S({ method: xe("sdppp/streamResponse"), params: S({ requestId: b(), data: ve()[a(2184)](), error: b()[a(3011)]().optional(), finished: Q().default(!1) }) }), S({ method: xe(a(1575)), params: S({ requestId: b() }) }), S({ method: xe(a(1183)), params: S({ messageType: b(), message: ve() }) });
function zs(o) {
  const x = a;
  return o && o[x(926)] && Object.prototype.hasOwnProperty.call(o, x(2096)) ? o[x(2096)] : o;
}
const z0 = S({ leftDistance: W(), topDistance: W(), rightDistance: W(), bottomDistance: W(), width: W(), height: W() }), _0 = { name: b(), uiWeight: W() }, Eo = S({ ..._0, outputType: xe(a(2477)), options: S({ required: Q(), maxCount: W()[a(2184)](), maskMode: Q().optional() }) }), Ro = S({ ..._0, outputType: xe("masks"), options: S({ required: Q() }) }), Co = S({ ..._0, outputType: xe(a(2028)), options: S({ required: Q() }) }), Fo = S({ ..._0, outputType: xe(a(2903)), options: S({ required: Q() }) }), _o = S({ ..._0, outputType: xe(a(867)), options: S({ required: Q(), min: W()[a(2184)](), max: W().optional(), step: W().optional(), random: Q()[a(2184)](), slider: Q()[a(2184)]() }) }), No = S({ ..._0, outputType: xe(a(2748)), options: S({ required: Q(), values: Se(b()), labels: Se(b()).optional() }) }), To = S({ ..._0, outputType: xe(a(357)), options: S({ required: Q(), values: Se(b()) }) }), qo = S({ ..._0, outputType: xe(a(2772)), options: S({ required: Q() }) }), Ao = $s(a(626), [Eo, Ro, Co, Fo, _o, No, To, qo]), Oo = S({ id: b(), title: b(), widgets: Se(Ao), uiWeightSum: W() }), Do = S({ widgetableID: b(), widgetablePath: b(), nodes: qe(b(), Oo), nodeIndexes: Se(b()), note: b()[a(2184)](), options: qe(b(), ve()) }), jo = S({ widgetableStructure: Do.default({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: qe(b(), Se(ve())).default({}), widgetableErrors: qe(b(), b()).default({}), queueSize: W()[a(2096)](0), lastError: b()[a(2096)](""), progress: W()[a(2096)](0), executingNodeTitle: b()[a(2096)](""), executingNodeID: b()[a(2096)](""), graphProgress: W()[a(2096)](0), comfyUserToken: b()[a(2096)](""), comfyOrgLoggedIn: Q().default(!1), comfyOrgAPIKey: b()[a(2096)](""), comfyWSState: Ie([a(698), a(2285)]).default(a(698)), lastRunTime: W()[a(2096)](0) }), Lo = S({ bannerData: ve().optional(), refreshable: Q()[a(2096)](!1), backwardable: Q().default(!1), loginable: Q()[a(2096)](!1), runnable: Q().default(!1), workBoundaries: qe(W(), z0)[a(2096)]({}), workBoundaryMaxSizes: qe(W(), W()).default({}), isLogin: Q()[a(2096)](!1), isGuest: Q()[a(2096)](!1), token: b()[a(2096)](""), refreshToken: b()[a(2096)](""), userInfo: qe(b(), ve())[a(2096)]({}), loginMessage: b()[a(2096)](""), balance: W().nullable().default(null) }), Mo = S({ uname: b()[a(2096)](""), activeDocumentID: W()[a(2096)](0), layers: Se(S({ id: W(), name: b(), identify: b() }))[a(2096)]([]), actions: Se(b())[a(2096)]([]), theme: b().default(a(2392)), sdpppX: qe(b(), ve()).default({}), locale: Ie([a(1528), "en-US"])[a(2096)](a(2650)), comfyWebviewConnectStatus: Ie([a(565), a(698), a(1138)])[a(2096)]("disconnected"), comfyWebviewLoadError: b()[a(2096)](""), comfyWebviewLoading: Q().default(!1), comfyWebviewVersion: b()[a(2096)](""), comfyHTTPCode: W()[a(2096)](200), comfyURL: b()[a(2096)](""), sdkWebviewFocusing: Q()[a(2096)](!1), sdkWebviewConnectStatus: Ie([a(565), a(698), a(1138)]).default(a(1138)), requestingLogin: Q()[a(2096)](!1), balance: W().nullable()[a(2096)](null), taskLastRun: W()[a(2096)](0), canvasStateID: W()[a(2184)](), selectionStateID: b()[a(2184)](), selectionBoundary: z0.nullable()[a(2184)]() }), $o = { setNodeTitle: { requestSchema: S({ node_id: b(), title: b() }), responseSchema: S({ success: Q() }) }, reboot: { requestSchema: S({}), responseSchema: S({ success: Q(), error: b()[a(2184)]() }) }, setComfyOrgAPIKey: { requestSchema: S({ api_key: b() }), responseSchema: S({ success: Q() }) }, logout: { requestSchema: S({}), responseSchema: S({ success: Q() }) }, uploadComfyImageFromUXP: { requestSchema: S({ fileName: b(), overwrite: Q()[a(2184)](), mimeType: b()[a(2184)](), dataBase64: b() }), responseSchema: S({ name: b() }) }, sdpppHandshake: { requestSchema: S({ hostVersion: b().optional() }), responseSchema: S({ comfyVersion: b(), hostVersion: b()[a(2184)]() }) } }, Uo = S({ workflows: Se(b()), error: b()[a(2184)]() }), zo = S({ success: Q(), nodeErrors: qe(b())[a(2184)](), prompt_ids: Se(b())[a(2184)](), images: Se(S({ url: b(), thumbnail: b() }))[a(2184)]() }), Ho = { setWidgetValue: { requestSchema: S({ values: Se(S({ nodeID: b(), widgetIndex: W(), value: qe(b(), ve()).or(b()).or(W()).or(Q()).or(Se(ve())) })) }), responseSchema: S({ success: Q() }) }, openWorkflow: { requestSchema: S({ workflow_path: b(), reset: Q().default(!1) }), responseSchema: S({ success: Q() }) }, openWorkflowJSON: { requestSchema: S({ workflow_content: qe(ve()), workflow_path: b() }), responseSchema: S({ success: Q() }) }, listWorkflows: { requestSchema: S({ listMode: b()[a(2184)](), sdpppID: b()[a(2184)](), sdpppToken: b()[a(2184)]() }), responseSchema: Uo }, saveWorkflow: { requestSchema: S({ workflow_path: b(), from_sid: b().optional() }), responseSchema: S({ success: Q() }) }, run: { requestSchema: S({ size: W(), mode: Ie(["app", a(2753)])[a(2096)](a(2837)).optional() }), responseSchema: zo, stream: !0 }, stopAll: { requestSchema: S({}), responseSchema: S({ success: Q() }) } }, Vo = S({ passwordPayload: S({ username: b(), password: b() }).or(S({ email: b(), password: b() })).or(S({ phone: b(), password: b() })).or(S({ identifier: b(), password: b() })) }).or(S({ passcodePayload: S({ phone: b(), code: b() }).or(S({ email: b(), code: b() })) })), Bo = S({ passwordPayload: S({ username: b(), password: b() }).or(S({ email: b(), password: b() })).or(S({ phone: b(), password: b() })).or(S({ identifier: b(), password: b() })) }).or(S({ passcodePayload: S({ phone: b(), code: b() }).or(S({ email: b(), code: b() })) })), Wo = { backward: { requestSchema: G0(), responseSchema: S({ success: Q() }) }, refresh: { requestSchema: G0(), responseSchema: S({ success: Q() }) }, run: { requestSchema: G0(), responseSchema: S({ success: Q() }) }, authLogin: { requestSchema: Vo, responseSchema: S({ token: b(), refreshToken: b()[a(2184)](), userInfo: ve()[a(2184)]() }) }, authRegister: { requestSchema: Bo, responseSchema: S({ success: Q() }) }, authSendPassCode: { requestSchema: S({ phone: b()[a(2184)](), email: b().optional() }), responseSchema: S({ success: Q() }) }, authGetUserProfile: { requestSchema: S({ token: b() }), responseSchema: S({ userInfo: ve() }) }, authLogout: { requestSchema: G0(), responseSchema: S({ success: Q() }) }, authLoginByQRCode: { requestSchema: S({ sessionId: b()[a(2184)]() }), responseSchema: S({ sessionId: b(), qrcodeURL: b(), status: Ie([a(1471), a(1789), a(2186), a(1242), "expired", "error"]), token: b()[a(2184)](), refreshToken: b()[a(2184)](), userInfo: ve()[a(2184)]() }) }, fetchBalance: { requestSchema: G0(), responseSchema: S({ balance: W()[a(3011)]() }) } };
S({ resource: b()[a(2184)](), thumbnail: b().optional(), width: W()[a(2184)](), height: W()[a(2184)](), mimeType: b()[a(2184)](), source: b()[a(2184)](), error: b()[a(2184)]() }), S({ boundary: Ie([a(798), a(1765), "selection"]), content: Ie([a(798), a(1765), a(1881)]).or(b()), imageSize: W(), imageQuality: W(), cropBySelection: Ie(["no", "positive", a(2632)]), layer_identify: b()[a(3011)]().optional() }), S({ content: Ie(["canvas", a(1765), a(1881)]), reverse: Q(), imageSize: W(), layer_identify: b().nullable().optional() }), S({ selection: Ie([a(1868), a(1942), a(1385), a(1131), "curlayer_canvas", "curlayer_curlayer", a(2656), a(1868)]), url: b(), source: b(), cropBySelection: Ie(["no", a(778), a(2632)]) });
const Ko = { downloadImage: { requestSchema: S({ url: b() }), responseSchema: S({ thumbnail: b()[a(2184)](), resource: b()[a(2184)](), width: W()[a(2184)](), height: W()[a(2184)](), error: b().optional() }) }, getThumbnail: { requestSchema: S({ resource: b(), maxSize: W().optional() }), responseSchema: S({ thumbnail: b().optional(), width: W()[a(2184)](), height: W().optional(), error: b()[a(2184)]() }) } }, Zo = { pptaskRun: { requestSchema: S({ locator: b(), payload: qe(b(), ve()).optional(), platformConfig: qe(b(), ve())[a(2184)](), context: qe(b(), ve())[a(2184)](), schema: qe(b(), ve()).optional() }), responseSchema: Ve([S({ ok: xe(!0), taskId: b(), result: ve() }), S({ ok: xe(!1), taskId: b()[a(2184)](), error: S({ message: b(), code: Ve([b(), W()])[a(2184)](), payload: ve()[a(2184)]() }) })]) }, pptaskCancel: { requestSchema: S({ taskId: b() }), responseSchema: S({ cancelled: Q(), error: b().optional() }) } }, Go = { manageGuides: { requestSchema: S({ action: Ie(["create", a(277)]), rect: z0.optional() }), responseSchema: S({ success: Q() }) }, getBoundary: { requestSchema: S({ type: Ie([a(1765), a(1881)]) }), responseSchema: z0 }, getImage: { requestSchema: S({ boundary: Ve([Ie([a(798), "curlayer", a(1881)]), z0]), content: Ve([Ie([a(798), a(1765)]), b()]), imageSize: W(), imageQuality: W(), cropBySelection: Ie(["no", a(778), a(2632)]), SkipNonNormalLayer: Q(), layer_identify: b()[a(3011)]()[a(2184)]() }), responseSchema: S({ resource: b()[a(2184)](), thumbnail: b()[a(2184)](), width: W().optional(), height: W()[a(2184)](), mimeType: b()[a(2184)](), source: b()[a(2184)](), error: b()[a(2184)]() }) }, getMask: { requestSchema: S({ boundary: Ve([Ie([a(798), a(1765), "selection"]), z0]), content: Ie([a(798), "curlayer", "selection"]), reverse: Q(), imageSize: W(), layer_identify: b()[a(3011)]()[a(2184)]() }), responseSchema: S({ resource: b().optional(), thumbnail: b()[a(2184)](), width: W()[a(2184)](), height: W()[a(2184)](), mimeType: b()[a(2184)](), source: b()[a(2184)](), error: b()[a(2184)]() }) }, getCurrentLayerIdentify: { requestSchema: S({}), responseSchema: S({ layer_identify: b()[a(3011)]() }) }, importImage: { requestSchema: S({ resource: b(), boundaryUri: b()[a(3011)]()[a(2184)](), type: Ie([a(798), a(1765), a(519), "smartobject"]), sourceWidth: W()[a(2184)](), sourceHeight: W()[a(2184)](), maskUri: b()[a(3011)]()[a(2184)]() }), responseSchema: S({ success: Q(), layers: Se(S({ identify: b() }))[a(2184)](), message: b()[a(2184)](), error: b().optional() }) }, selectFromMaskUri: { requestSchema: S({ maskUri: b(), documentId: W()[a(2184)]() }), responseSchema: S({ success: Q() }) }, selectFromBoundaryUri: { requestSchema: S({ boundaryUri: b(), documentId: W()[a(2184)]() }), responseSchema: S({ success: Q(), error: b()[a(2184)]() }) }, applyMaskToImage: { requestSchema: S({ imageResource: b(), maskResource: b(), invertMask: Q()[a(2184)]() }), responseSchema: S({ resource: b(), thumbnail: b().optional(), width: W(), height: W(), mimeType: b() }) }, showBoundarySelectionDialog: { requestSchema: S({ additionalData: qe(ve())[a(2184)]() }), responseSchema: S({ boundary: Ie([a(798), "curlayer", "selection"]).optional(), cancelled: Q()[a(2184)]() }) }, selectImageSource: { requestSchema: S({ additionalData: qe(ve())[a(2184)]() }), responseSchema: S({ action: Ie([a(1396), a(454)]).optional(), params: ve()[a(2184)](), cancelled: Q()[a(2184)]() }) }, selectContentSource: { requestSchema: S({ additionalData: qe(ve())[a(2184)]() })[a(2184)](), responseSchema: S({ resource: b()[a(2184)](), fileName: b()[a(2184)](), mimeType: b()[a(2184)](), size: W()[a(2184)](), layerIdentify: b()[a(2184)](), cancelled: Q()[a(2184)]() }) } }, Hx = S({ taskId: b(), taskName: b(), status: Ie([a(1329), "completed", a(1639), a(2385)]), currentStep: W()[a(2184)](), totalSteps: W()[a(2184)](), stepDescription: b()[a(2184)](), progressPercentage: W()[a(316)](0).max(100)[a(2184)](), startTime: b(), endTime: b()[a(2184)](), error: b()[a(2184)](), errorCode: b().optional(), result: ve()[a(2184)](), metadata: qe(ve())[a(2184)]() }), Vx = S({ success: Q(), error: b()[a(2184)]() }), Jo = { taskAdd: { requestSchema: Hx, responseSchema: Vx }, taskUpdate: { requestSchema: Hx[a(2193)]().required({ taskId: !0 }), responseSchema: Vx }, taskRemove: { requestSchema: Hx[a(1824)]({ taskId: !0 }), responseSchema: Vx } }, Qo = { log: { requestSchema: S({ level: Ie([a(2127), a(1043), "warn", a(1491)]), messages: Se(b()) }), responseSchema: S({}) }, openExternalLink: { requestSchema: S({ url: b() }), responseSchema: S({ error: b()[a(2184)]() }) }, getStorage: { requestSchema: S({ key: b() }), responseSchema: S({ value: b(), error: b().optional() }) }, setStorage: { requestSchema: S({ key: b(), value: b() }), responseSchema: S({ error: b()[a(2184)]() }) }, removeStorage: { requestSchema: S({ key: b() }), responseSchema: S({ error: b()[a(2184)]() }) }, keyboardAction: { requestSchema: S({ keycode: b() }), responseSchema: S({}) }, setComfyWebviewURL: { requestSchema: S({ url: b() }), responseSchema: S({}) }, getImageBase64: { requestSchema: S({ token: b() }), responseSchema: S({ base64: b()[a(2184)](), mimeType: b()[a(2184)](), error: b().optional() }) }, uploadComfyImage: { requestSchema: S({ uploadInput: S({ type: Ve([xe(a(1497)), xe(a(1838)), xe("resource")]), resource: ve(), fileName: b(), mimeType: b().optional(), resourceId: b()[a(2184)]() }), overwrite: Q().optional()[a(2096)](!0) }), responseSchema: S({ name: b() }) }, pickLocalFile: { requestSchema: S({ acceptExtensions: Se(b()).optional(), kind: Ie([a(2009), "file"])[a(2184)]() })[a(2184)](), responseSchema: S({ cancelled: Q()[a(2184)](), resource: b()[a(2184)](), fileName: b()[a(2184)](), mimeType: b()[a(2184)](), size: W()[a(2184)](), error: b()[a(2184)]() }) }, proxiedFetch: { requestSchema: S({ url: b(), method: b()[a(2184)](), headers: qe(b())[a(2184)](), body: ve()[a(2184)](), bodyType: Ie([a(780), a(1081), a(1633)]).optional() }), responseSchema: S({ success: Q(), status: W()[a(2184)](), statusText: b()[a(2184)](), headers: qe(b()).optional(), data: ve()[a(2184)](), error: b()[a(2184)]() }) }, openaiImageEdit: { requestSchema: S({ apiKey: b(), baseURL: b(), imageToken: b(), prompt: b(), model: b() }), responseSchema: S({ success: Q(), imageUrl: b()[a(2184)](), apiTime: W()[a(2184)](), error: b().optional() }) }, geminiImageGenerate: { requestSchema: S({ apiKey: b(), baseURL: b()[a(2184)](), imageInputs: Se(b())[a(2184)](), imageInput: b().optional(), imageInputType: Ie([a(1838), "base64"]), prompt: b() }), responseSchema: S({ success: Q(), imageUrl: b()[a(2184)](), apiTime: W()[a(2184)](), error: b()[a(2184)]() }) } }, Xo = Ve([b(), zx(Uint8Array), zx(ArrayBuffer), zx(DataView)]), Yo = S({ buffer: Xo, name: b()[a(3011)]().optional(), mime: b()[a(3011)]().optional(), width: W()[a(3011)]()[a(2184)](), height: W()[a(3011)]().optional(), thumbnail: b()[a(3011)]()[a(2184)](), meta: qe(k0())[a(2184)]() }), ei = { "fileResource.createFromExternal": { requestSchema: S({ url: b(), fileName: b()[a(2184)]() }), responseSchema: S({ resource: b()[a(2184)](), thumbnail: b()[a(2184)](), width: W().optional(), height: W()[a(2184)](), mime: b()[a(2184)](), mimeType: b()[a(2184)](), error: b()[a(2184)]() }) }, "fileResource.createFromLocal": { requestSchema: S({ types: Se(S({ description: b()[a(2184)](), extensions: Se(b())[a(2184)]() }))[a(2184)]() }), responseSchema: S({ resource: b()[a(2184)](), thumbnail: b()[a(2184)](), width: W()[a(2184)](), height: W().optional(), mime: b().optional(), error: b()[a(2184)]() }) }, "fileResource.createFromBuffer": { requestSchema: S({ files: Se(Yo).min(1) }), responseSchema: S({ resource: b().optional(), thumbnail: b()[a(2184)](), width: W()[a(2184)](), height: W().optional(), mime: b()[a(2184)](), error: b()[a(2184)]() }) }, "fileResource.createByContent": { requestSchema: S({ contentUri: b(), boundaryUri: b()[a(2184)](), options: qe(k0())[a(2184)]() }), responseSchema: S({ resource: b().optional(), thumbnail: b()[a(2184)](), width: W()[a(2184)](), height: W()[a(2184)](), mime: b()[a(2184)](), error: b()[a(2184)]() }) }, "fileResource.createByMask": { requestSchema: S({ maskUri: b(), boundaryUri: b()[a(2184)](), options: qe(k0())[a(2184)]() }), responseSchema: S({ resource: b().optional(), thumbnail: b()[a(2184)](), width: W().optional(), height: W()[a(2184)](), mime: b()[a(2184)](), error: b()[a(2184)]() }) }, "fileResource.combineByCBM": { requestSchema: S({ contentUri: b(), boundaryUri: b(), maskUri: b()[a(3011)]()[a(2184)](), options: qe(k0()).optional(), thumbnail: Q()[a(2184)]() }), responseSchema: S({ resource: b().optional(), thumbnail: b()[a(2184)](), width: W()[a(2184)](), height: W()[a(2184)](), mime: b()[a(2184)](), error: b()[a(2184)]() }) }, "fileResource.delete": { requestSchema: S({ resources: Se(b()) }), responseSchema: S({ error: b().optional() }) }, "fileResource.thumbnail": { requestSchema: S({ resource: b(), maxSize: W().optional() }), responseSchema: S({ thumbnail: b()[a(2184)](), width: W().optional(), height: W()[a(2184)](), error: b()[a(2184)]() }) }, "fileResource.saveAs": { requestSchema: S({ resources: Se(b()) }), responseSchema: S({ error: b()[a(2184)]() }) }, "boundary.normalize": { requestSchema: S({ boundary: b() }), responseSchema: S({ boundary: b().optional(), error: b()[a(2184)]() }) }, "layer.resolve": { requestSchema: S({ uri: b(), type: Ie(["content", "mask"]) }), responseSchema: S({ uri: b()[a(2184)](), error: b()[a(2184)]() }) } }, xi = yo({ nodes: { sdk: { store: Lo, actions: { ...Wo } }, uxp: { store: Mo, actions: { ...Ko, ...ei, ...Zo, ...Qo, ...Jo, ...Go } }, comfy: { store: jo, actions: { ...Ho, ...$o } } }, edges: [[a(861), a(1020)], ["comfy", "uxp"]] }), Ee = xi.joinAs(a(1631));
globalThis[a(303)] = Ee;
var hx = { exports: {} }, Bx, Ma;
function ti() {
  if (Ma) return Bx;
  Ma = 1;
  var o = 1e3, x = o * 60, t = x * 60, r = t * 24, e = r * 7, s = r * 365.25;
  Bx = function(d, l) {
    const f = Z;
    l = l || {};
    var g = typeof d;
    if (g === f(2028) && d[f(1148)] > 0) return n(d);
    if (g === f(867) && isFinite(d)) return l[f(1625)] ? c(d) : i(d);
    throw new Error(f(272) + JSON.stringify(d));
  };
  function n(d) {
    const l = Z;
    if (d = String(d), !(d[l(1148)] > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[l(1380)](d);
      if (f) {
        var g = parseFloat(f[1]), h = (f[2] || "ms").toLowerCase();
        switch (h) {
          case l(590):
          case l(2884):
          case l(1270):
          case "yr":
          case "y":
            return g * s;
          case l(2091):
          case l(1954):
          case "w":
            return g * e;
          case l(2423):
          case l(1013):
          case "d":
            return g * r;
          case l(3014):
          case "hour":
          case l(1369):
          case "hr":
          case "h":
            return g * t;
          case "minutes":
          case l(1256):
          case l(531):
          case l(316):
          case "m":
            return g * x;
          case l(1120):
          case l(818):
          case l(662):
          case l(1875):
          case "s":
            return g * o;
          case l(1701):
          case l(2147):
          case "msecs":
          case l(380):
          case "ms":
            return g;
          default:
            return;
        }
      }
    }
  }
  function i(d) {
    const l = Z;
    var f = Math[l(602)](d);
    return f >= r ? Math.round(d / r) + "d" : f >= t ? Math[l(2944)](d / t) + "h" : f >= x ? Math[l(2944)](d / x) + "m" : f >= o ? Math.round(d / o) + "s" : d + "ms";
  }
  function c(d) {
    const l = Z;
    var f = Math.abs(d);
    return f >= r ? u(d, f, r, l(1013)) : f >= t ? u(d, f, t, l(1494)) : f >= x ? u(d, f, x, l(1256)) : f >= o ? u(d, f, o, l(818)) : d + l(1280);
  }
  function u(d, l, f, g) {
    const h = Z;
    var m = l >= f * 1.5;
    return Math[h(2944)](d / f) + " " + g + (m ? "s" : "");
  }
  return Bx;
}
var Wx, $a;
function ai() {
  if ($a) return Wx;
  $a = 1;
  function o(x) {
    const t = Z;
    e.debug = e, e[t(2096)] = e, e[t(2571)] = d, e[t(2426)] = c, e.enable = n, e[t(1540)] = u, e[t(282)] = ti(), e[t(891)] = l, Object[t(1877)](x).forEach((f) => {
      e[f] = x[f];
    }), e.names = [], e[t(2866)] = [], e[t(1348)] = {};
    function r(f) {
      const g = t;
      let h = 0;
      for (let m = 0; m < f[g(1148)]; m++)
        h = (h << 5) - h + f[g(2307)](m), h |= 0;
      return e[g(2811)][Math[g(602)](h) % e.colors[g(1148)]];
    }
    e.selectColor = r;
    function e(f) {
      const g = t;
      let h, m = null, v, k;
      function I(...T) {
        const q = Z;
        if (!I[q(1540)]) return;
        const R = I, P = Number(/* @__PURE__ */ new Date()), C = P - (h || P);
        R.diff = C, R.prev = h, R[q(444)] = P, h = P, T[0] = e[q(2571)](T[0]), typeof T[0] !== q(2028) && T[q(339)]("%O");
        let j = 0;
        T[0] = T[0][q(1252)](/%([a-zA-Z%])/g, (O, N) => {
          const _ = q;
          if (O === "%%") return "%";
          j++;
          const z = e[_(1348)][N];
          if (typeof z === _(1149)) {
            const U = T[j];
            O = z[_(2689)](R, U), T.splice(j, 1), j--;
          }
          return O;
        }), e[q(1285)][q(2689)](R, T), (R[q(2127)] || e[q(2127)])[q(1046)](R, T);
      }
      return I[g(989)] = f, I[g(1274)] = e[g(1274)](), I[g(1856)] = e[g(2284)](f), I[g(1735)] = s, I[g(891)] = e[g(891)], Object.defineProperty(I, g(1540), { enumerable: !0, configurable: !1, get: () => {
        const T = g;
        return m !== null ? m : (v !== e[T(1938)] && (v = e[T(1938)], k = e[T(1540)](f)), k);
      }, set: (T) => {
        m = T;
      } }), typeof e[g(2462)] == "function" && e[g(2462)](I), I;
    }
    function s(f, g) {
      const h = t, m = e(this[h(989)] + (typeof g > "u" ? ":" : g) + f);
      return m[h(2127)] = this[h(2127)], m;
    }
    function n(f) {
      const g = t;
      e[g(2820)](f), e[g(1938)] = f, e[g(988)] = [], e.skips = [];
      const h = (typeof f === g(2028) ? f : "").trim()[g(1252)](/\s+/g, ",").split(",")[g(362)](Boolean);
      for (const m of h)
        m[0] === "-" ? e.skips.push(m[g(1908)](1)) : e[g(988)][g(3019)](m);
    }
    function i(f, g) {
      const h = t;
      let m = 0, v = 0, k = -1, I = 0;
      for (; m < f[h(1148)]; )
        if (v < g[h(1148)] && (g[v] === f[m] || g[v] === "*")) g[v] === "*" ? (k = v, I = m, v++) : (m++, v++);
        else if (k !== -1) v = k + 1, I++, m = I;
        else return !1;
      for (; v < g[h(1148)] && g[v] === "*"; )
        v++;
      return v === g[h(1148)];
    }
    function c() {
      const f = t, g = [...e[f(988)], ...e.skips[f(2739)]((h) => "-" + h)].join(",");
      return e[f(1268)](""), g;
    }
    function u(f) {
      const g = t;
      for (const h of e[g(2866)])
        if (i(f, h)) return !1;
      for (const h of e.names)
        if (i(f, h)) return !0;
      return !1;
    }
    function d(f) {
      const g = t;
      return f instanceof Error ? f[g(2810)] || f[g(2461)] : f;
    }
    function l() {
      const f = t;
      console[f(2618)](f(1818));
    }
    return e[t(1268)](e.load()), e;
  }
  return Wx = o, Wx;
}
var Ua;
function ri() {
  const o = a;
  return Ua || (Ua = 1, (function(x, t) {
    const r = o;
    t[r(1285)] = s, t[r(2820)] = n, t[r(451)] = i, t[r(1274)] = e, t.storage = c(), t.destroy = /* @__PURE__ */ (() => {
      let d = !1;
      return () => {
        const l = Z;
        !d && (d = !0, console[l(2618)](l(1818)));
      };
    })(), t[r(2811)] = [r(2268), r(1413), r(265), r(1538), "#0066CC", r(271), r(2639), r(2724), r(509), "#00CC33", r(2378), r(605), "#00CCCC", r(583), r(2554), r(946), "#3333CC", r(2669), r(1953), r(3017), r(1178), r(1983), r(1977), r(784), r(630), r(398), r(492), r(2936), r(1832), r(1067), r(2255), r(1777), r(927), r(1085), r(2556), r(476), r(595), r(875), r(1338), "#99CC33", r(2434), r(2945), r(1859), r(2424), r(892), r(2783), r(864), "#CC3333", r(376), r(2731), r(1738), r(955), "#CC6600", r(2913), "#CC9900", r(1490), "#CCCC00", r(1056), r(2598), r(2637), "#FF0066", r(2011), r(1226), "#FF00FF", r(2394), r(1769), r(1174), "#FF3399", r(283), r(1604), r(269), r(2736), r(2281), r(1556), r(2908), r(460)];
    function e() {
      const d = r;
      if (typeof window !== d(2781) && window[d(2286)] && (window[d(2286)][d(2291)] === "renderer" || window[d(2286)][d(1007)])) return !0;
      if (typeof navigator < "u" && navigator[d(1544)] && navigator[d(1544)][d(1119)]()[d(789)](/(edge|trident)\/(\d+)/)) return !1;
      let l;
      return typeof document < "u" && document[d(611)] && document[d(611)].style && document[d(611)][d(1302)][d(1294)] || typeof window !== d(2781) && window.console && (window[d(481)].firebug || window[d(481)][d(2242)] && window[d(481)][d(2311)]) || typeof navigator !== d(2781) && navigator.userAgent && (l = navigator[d(1544)][d(1119)]()[d(789)](/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || typeof navigator !== d(2781) && navigator[d(1544)] && navigator[d(1544)][d(1119)]()[d(789)](/applewebkit\/(\d+)/);
    }
    function s(d) {
      const l = r;
      if (d[0] = (this.useColors ? "%c" : "") + this[l(989)] + (this.useColors ? " %c" : " ") + d[0] + (this[l(1274)] ? l(2175) : " ") + "+" + x[l(1229)].humanize(this[l(1599)]), !this.useColors) return;
      const f = l(2583) + this[l(1856)];
      d[l(2176)](1, 0, f, l(2403));
      let g = 0, h = 0;
      d[0][l(1252)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (g++, m === "%c" && (h = g));
      }), d.splice(h, 0, f);
    }
    t[r(2127)] = console.debug || console[r(2127)] || (() => {
    });
    function n(d) {
      const l = r;
      try {
        d ? t[l(2734)][l(1618)](l(819), d) : t[l(2734)][l(620)](l(819));
      } catch {
      }
    }
    function i() {
      const d = r;
      let l;
      try {
        l = t[d(2734)][d(2157)](d(819)) || t[d(2734)][d(2157)](d(665));
      } catch {
      }
      return !l && typeof process < "u" && d(1595) in process && (l = process[d(1595)].DEBUG), l;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x[r(1229)] = ai()(t);
    const { formatters: u } = x.exports;
    u.j = function(d) {
      const l = r;
      try {
        return JSON[l(3038)](d);
      } catch (f) {
        return l(2115) + f[l(2461)];
      }
    };
  })(hx, hx[o(1229)])), hx[o(1229)];
}
var si = ri();
const Hs = zs(si);
Hs[a(1268)]("*");
function ni(o, x) {
  const t = a, r = Hs(o), e = (s, n) => async function(...i) {
    try {
      await x({ level: s, messages: i });
    } catch {
    }
  };
  return r[t(2127)] = e(t(2127)), r;
}
const ox = ni(a(774), async ({ level: o, messages: x }) => {
  const t = a, { mcpMesh: r } = await Promise[t(855)]()[t(634)](() => eu);
  await r[t(540)](t(1020))[t(810)][t(2127)]({ level: o, messages: x });
}), oi = { "preview.show": "显示预览框 ({{count}}张图片)", "gateway.select_ai_service": a(266), "provider.select.title": "选择 AI 服务提供商", "provider.comfyui.description": a(2855), "provider.replicate.description": a(1201), "provider.runninghub.description": a(478), "provider.google.description": a(2076), "provider.sdppp_sponsor.description": a(375), "task.waiting_upload": a(337), "task.creating_task": a(463), "task.running_duration": a(1558), "task.cancelled": a(1142), "task.cancel_failed": a(2955), "task.default_name": a(2833), "comfy.connect": "连接", "comfy.load_failed": a(317), "comfy.loading": "ComfyUI加载中...", "comfy.channel_connecting": "通道连接中...", "comfy.server_reconnecting": a(1888), "comfy.version_mismatch": "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "comfy.cloud_recommend": a(676), "comfy.your_workflows": "你的工作流", "comfy.refresh_workflows": a(1564), "comfy.queue_progress": "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": a(1277), "comfy.stop_auto_run": a(805), "comfy.start_auto_run": "画布变动后自动运行", "comfy.auto_run_status": a(958), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": a(2999), "comfy_simple.refreshing_preview": a(1524), "comfy.select_workflow": a(350), "comfy.task.name": "ComfyUI - {{workflowName}}", "comfy.error.task_cancelled": a(1142), "comfy.task.processing_progress": a(2990), "comfy.help_tooltip": a(940), "comfy.no_workflow_selected": a(688), "comfy_simple.missing_url": "尚未配置 ComfyUI 连接，请先设置地址。", "comfy_simple.loading_webview": "正在连接 ComfyUI...", "comfy_simple.http_error": a(2530), "comfy_simple.wait_connect": a(678), "comfy_simple.loading": "工作流打开中", "comfy_simple.connection_required": "ComfyUI 未就绪", "comfy_simple.preview_empty": a(1798), "comfy_simple.progress.idle": "空闲", "comfy_simple.auto_run": "自动", "comfy_simple.workflow_quick": "快捷", "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": "X10", "comfy_simple.prompt_templates.manage_tooltip": a(1688), "comfy_simple.prompt_templates.button": a(2515), "comfy_simple.prompt_templates.save_error": a(2707), "comfy_simple.prompt_templates.missing_key": a(1757), "comfy_simple.prompt_templates.missing_value": a(2699), "comfy_simple.prompt_templates.duplicate_key": a(1095), "comfy_simple.prompt_templates.save_success": a(575), "comfy_simple.prompt_templates.delete_confirm_title": a(2562), "comfy_simple.prompt_templates.delete_confirm_content": "确定要删除此模板吗？", "comfy_simple.prompt_templates.delete_success": a(753), "comfy_simple.prompt_templates.add_title": "新增模板", "comfy_simple.prompt_templates.edit_title": a(2881), "comfy_simple.prompt_templates.modal_title": a(930), "comfy_simple.prompt_templates.description": "管理 Comfy Simple 工作流的提示词片段。", "comfy_simple.prompt_templates.add_button": a(675), "comfy_simple.prompt_templates.name_placeholder": "模板名称", "comfy_simple.prompt_templates.value_placeholder": a(2172), "comfy_simple.fallback.title": a(1044), "comfy_simple.fallback.button": "更多设置", "comfy_simple.prompt_templates.positive_label": a(358), "comfy_simple.prompt_templates.negative_label": a(808), "comfy_simple.prompt_templates.negative_placeholder": a(351), "comfy_simple.prompt_templates.negative_empty": a(1605), "comfy_simple.prompt_templates.default_section": a(2693), "comfy_simple.prompt_templates.default_empty": "暂无默认模板。", "comfy_simple.prompt_templates.default_tag": "默认", "comfy_simple.prompt_templates.custom_section": "我的模板", "comfy_simple.prompt_templates.custom_empty": "还没有自定义模板。", "comfy_simple.prompt_templates.applied_success": "模板已应用。", "comfy_simple.prompt_templates.applied_failed": a(603), "comfy_simple.prompt_templates.apply_unavailable": a(2997), "comfy_simple.prompt_templates.apply_failed_missing_binding": a(582), "comfy_simple.prompt_templates.apply_failed_caller_unavailable": "无法写入{{part}}提示词：ComfyUI 尚未就绪。", "comfy_simple.prompt_templates.apply_failed_set_error": a(2417), "common.delete": "删除", "comfy_simple.preview_click_to_send": a(1057), "comfy_simple.workflow_select.empty": "暂无可用工作流。", "comfy_simple.workflow_select.select": "选择", "comfy_simple.workflow_select.selected": "已选择", "comfy_simple.workflow_select.current": "当前", "comfy_simple.workflow_select.load_failed": a(2940), "comfy_simple.workflow_select.members_only": a(488), "boundary.title": a(2763), "boundary.tooltip": a(2427), "boundary.current_canvas": "整个画布", "boundary.current_layer": "当前图层", "boundary.current_selection": a(1686), "boundary.set_as_canvas": "设为画布", "boundary.set_as_layer": a(1823), "boundary.set_as_selection": a(404), "http.404": a(2119), "http.401": "未授权 (401)", "http.403": a(1797), "http.408": "请求超时 (408)", "http.500": a(1924), "http.501": a(2431), "http.502": a(1623), "http.503": a(1638), "http.504": a(637), "http.unknown": "未知错误（{{code}}）", "runninghub.get_apikey": a(969), "runninghub.apikey_placeholder": a(2092), "runninghub.app_id": a(2570), "runninghub.webapp_id_placeholder": a(1829), "runninghub.open_app": a(2956), "runninghub.execute": "执行", "runninghub.running": a(385), "runninghub.rh_coins": a(1264), "runninghub.current_tasks": a(2646), "runninghub.help_tooltip": a(940), "runninghub.stop_all": "停止全部", "runninghub.status.waiting": "排队等待", "runninghub.status.running": a(378), "runninghub.status.failed": a(1866), "runninghub.status.success": a(2630), "image.auto_refetch": a(2379), "local_resource.selection.images": "图片", "runninghub.error.get_result_failed": a(2443), "runninghub.error.task_failed": "任务执行失败: {{error}}", "runninghub.error.task_incomplete": a(425), "runninghub.error.account_status_http": a(654), "runninghub.error.account_status_reason_unknown": "获取账户信息失败", "runninghub.error.account_status_failed": a(450), "runninghub.error.form_data_http": a(1536), "runninghub.error.form_data_reason_unknown": a(2294), "runninghub.error.form_data_failed": a(1394), "runninghub.error.node_info_missing": "运行失败 - 未获取到 nodeInfoList，请先执行 getNodes()。", "runninghub.error.run_http": "run API 调用失败 - HTTP 错误，状态: {{status}}", "runninghub.error.run_reason_default": a(2616), "runninghub.error.run_failed": a(384), "runninghub.error.status_http": a(2325), "runninghub.error.status_reason_unknown": "获取任务状态失败", "runninghub.error.status_failed": "status API 调用失败 - {{reason}}", "runninghub.error.outputs_http": "outputs API 调用失败 - HTTP 错误，状态: {{status}}", "runninghub.error.outputs_failed": "outputs API 调用失败 - {{reason}}", "runninghub.task.title": "RunningHub - {{webappId}}", "runninghub.error.upload_http": a(1676), "runninghub.error.upload_reason_unknown": a(2006), "runninghub.error.upload_failed": a(2310), "runninghub.error.services_unavailable": "SDPPPX 服务不可用", "customapi.error.no_image_returned": a(1786), "customapi.error.openai_api": a(1895), "customapi.error.input_required": a(1685), "customapi.error.generation_failed": a(703), "customapi.error.model_required": a(2179), "customapi.task.name.google": "Google Gemini - 图片生成", "customapi.task.name.openai": "OpenAI - 图片编辑", "customapi.error.unsupported_image_input": a(2031), "replicate.get_apikey": a(2464), "replicate.apikey_placeholder": a(1240), "replicate.execute": "执行", "replicate.model_placeholder": a(2605), "replicate.help_tooltip": a(940), "replicate.loading": "加载中...", "replicate.running": a(385), "replicate.stop": "停止", "replicate.error.result_fetch_failed": a(1512), "liblib.get_apikey": a(273), "liblib.execute": "执行", "common.close": "关闭", "common.save": "保存", "common.save_and_run": a(2857), "common.loading": a(2633), "common.list_separator": "、", "common.error": "错误", "common.error.unknown": a(1940), "common.error.task_creation_aborted": a(1451), "common.error.status_check_aborted": a(792), "common.error.result_fetch_aborted": a(2909), "common.error.upload_aborted": a(1079), "common.success": "成功", "common.failed": "失败", "common.generating": a(2799), "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": "=== 选项 ===", "upload_pass.error.unsupported_type": a(1321), "upload_pass.error.uploader_missing": a(1634), webviewInForeground: a(666), webviewInForeground2: "点我恢复", "auth.login_success": a(2898), "auth.username_label": "用户名: {{username}}", "auth.email_label": a(865), "auth.logout": a(1535), "auth.login_required": "请登陆后使用插件", "image.send.select_position": "请选择要发送图像的位置", "image.send.sending": a(1666), "image.layer.new": a(1549), "image.layer.current": a(923), "image.layer.fit_to_current": a(2004), "image.layer.fit_to_selection": a(979), "image.layer.fit_to_canvas": a(2334), "image.shortcut_auth_required": a(419), "image.shortcut_focus_required": a(1001), "image.get.select_image": a(2422), "image.get.entire_canvas": "整个画布", "image.get.canvas": "画布", "image.get.current_layer": a(923), "image.get.current_layer_bounds": a(1578), "image.get.selection_bounds": a(1286), "image.get.canvas_bounds": a(440), "image.crop_by_selection": a(2789), "image.limit_size": a(1029), "image.crop.none": "不裁剪", "image.crop.inpaint": a(959), "image.crop.outpaint": a(1165), "image.send_all": "发送所有", "image.save_all": a(564), "image.save_current": "保存当前", "image.delete_current": a(470), "image.more_actions": a(2128), "image.jump_to_last": "跳转到最后一个", "image.clear_all": a(1628), "image.send_to_ps": a(1399), "image.download": "下载", "image.copy": "复制", "image.sending": a(2604), "image.sending_all": a(360), "mask.get.select_mask": a(415), "mask.selection": "选区", "mask.current_layer_bounds": a(2867), "mask.all": "全部", "mask.selection_exclude": a(761), "mask.current_layer_exclude": a(1597), "mask.empty": "空", "widgetable.photoshop.deprecated_node": a(1986), "work_boundary.error.empty_selection_mask": a(1716), "work_boundary.error.primary_resource_missing": "缺少主图资源", "work_boundary.error.mask_resource_missing": a(1529), "work_boundary.error.mask_apply_empty": "遮罩应用后未得到资源", "document {{0}} not found": a(2998), "create document for preview": a(1470), "resize document for preview": "调整预览文档尺寸", "create document for sent images": a(1682), "show sent images": "显示发送的图片", "create layer failed": a(2290), "layer not found {{0}}": a(1527), "layer not found: {{0}}": a(1527), "layer {{0}} is not a group": a(581), "no linked layer for {{0}}": a(1825), "no first related layer in {{0}}": a(737), "merge group failed": a(1646), "get content of layer {{0}}": a(1253), "get layer info": a(2752), "get_layer_info: layer_identify required": a(577), "get pixel of {{0}} failed": "获取像素失败: {{0}}", "get selection failed": "获取选区失败", "invalid name: {{0}}": a(984), "desire bounds is null": a(883), "intersect or scaledDesire is null": a(3010), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': "不支持非文本图层: {{0}}", "select layer": a(1303), "run Photoshop Action": a(428), "Action {{0}} not found": a(2879), "Action set {{0}} not found": a(2567), "set text to layer": a(2532), "ComfyManager not found, cannot reboot": "Comfy Manager未安装，无法重启", "Failed to reboot ComfyUI": "重启ComfyUI失败", "image.upload.from_canvas": "画布", "image.upload.from_curlayer": a(923), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": a(2765), "image.upload.syncing": a(1103), "image.upload.no_images": "暂无图片", "image.upload.error": a(1126), "image.upload.tooltip.more_options_hint": a(561), "image.upload.tooltip.alt.crop": a(815), "image.upload.tooltip.alt.reverse": a(1233), "image.upload.tooltip.image.canvas": a(1137), "image.upload.tooltip.image.curlayer": a(811), "image.upload.tooltip.mask.curlayer": a(2690), "image.upload.tooltip.mask.selection": a(1452), "image.upload.tooltip.mask.canvas": a(2700), "image.upload.tooltip.cut_action": a(2768), "image.upload.tooltip.scan_action": `获取图像 &
限制图像范围`, "image.upload.tooltip.autosync.on": a(623), "image.upload.tooltip.autosync.off": a(315), "image.upload.tooltip.sync_action": a(1566), "image.upload.autosync.fetching": a(408), "image.upload.autosync.status.enabled": "自动同步中…", "image.upload.autosync.status.disabled": "自动同步未打开", "image.upload.tooltip.current.canvas": a(841), "image.upload.tooltip.current.layer": "当前选项：图层", "image.upload.tooltip.current.layer_named": a(2662), "image.upload.tooltip.current.file": a(899), "image.upload.retry": "重试", "image.pack.local.button": "本地图片包", "image.pack.local.empty": a(628), "image.auto_send_enabled": "自动填入画布开启", "image.auto_send_disabled": a(1677), "image.upload.primary.auto": a(1212), "image.upload.primary.manual": "获取图片", "image.upload.primary.hint": "该节点默认继承当前图层与遮罩", "image.upload.primary.cut": "裁剪", "image.upload.primary.scan": "扫描", "image.upload.primary.hint.line1": a(1063), "image.upload.primary.hint.line2": "主图", "workflow.output.destination.title": "输出至：", "workflow.output.destination.canvas": "全图", "image.upload.primary.advanced": a(978), "image.upload.primary.advanced.modify": "修改", "image.upload.primary.advanced.reset": "重置", "image.upload.primary.advanced.local_file": a(1517), "image.upload.primary.advanced.content.canvas": "画布", "image.upload.primary.advanced.content.curlayer": a(923), "image.upload.primary.advanced.content.selection": "选区", "image.upload.primary.advanced.boundary.canvas": a(2214), "image.upload.primary.advanced.boundary.curlayer": a(2343), "image.upload.primary.advanced.boundary.selection": a(1851), "image.upload.primary.advanced.boundary.primary": a(328), "image.upload.source.file.tooltip": a(369), "image.upload.mode.file.label": "文件", "image.upload.mode.layer.label": "图层", "image.upload.mode.canvas.label": "画布", "image.upload.source.layer.tooltip": "使用当前图层", "image.upload.source.canvas.tooltip": a(2036), "image.upload.dropHint": "拖拽图片到此处松开完成上传", "image.upload.tooltip.clear_action": a(848), "image.upload.status.layer.short_named": a(2698), "image.upload.status.layer.short": "图层", "image.upload.status.file.short": a(2202), "image.upload.status.canvas.short": "画布", "image.upload.status.file.active": a(695), "image.upload.status.file.resetHint": a(1861), "image.upload.status.mask.resetHint": a(919), "image.upload.status.mask.modified": a(2835), "image.upload.status.boundary.resetHint": "点击恢复默认边界", "image.upload.status.boundary.modified": a(2977), "image.upload.status.boundary.docMismatch": a(1228), "image.upload.mask.button": "选区遮罩", "image.upload.mask.selection": a(1193), "image.upload.mask.layer": a(1383), "image.upload.remove_slot": a(2299), "image.upload.add_slot": "新增槽位", "video.local.button": "本地视频", "video.local.empty": a(2455), "video.local.remove": a(291), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": "PS图片", "source.ps_mask": "PS遮罩", "source.canvas": a(1091), "source.current_layer": a(923), "source.selection": "选区", "source.quality_percent": "质量{{percent}}%", "source.crop.positive": "正向裁剪", "source.crop.negative": "反向裁剪", "source.reverse": "反转", "send_images.create_document": a(346), "send_images.create_document_failed": a(1559), "photoshop.no_active_document": "没有活动文档", "photoshop.rectangle_coordinates_required": a(1299), "photoshop.create_guide_frame": a(2253), "photoshop.clear_guide_frame": a(2318), "photoshop.invalid_action": "无效操作: {{action}}", "photoshop.file_not_found": "文件未找到: {{path}}", "photoshop.failed_to_open_file_as_document": a(1200), "photoshop.invalid_boundary": a(724), "photoshop.failed_to_open_image_file": a(411), "photoshop.open_images_from_file": a(1768), "photoshop.failed_to_create_document_from_file": a(427), "google.field.image_input": a(1116), "google.field.prompt": a(2515), "google.field.batch_count": a(1523), "google.field.images_per_batch": a(2770), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": a(2760), "google.apikey_placeholder": "请输入您的 Google API Key", "google.baseurl_placeholder": a(2664), "google.get_apikey": a(2680), "google.help_tooltip": "Google Gemini 图像生成器", "google.model_name": a(2915), "google.model_label": "模型", "google.model_placeholder": "选择模型", "google.stop": "停止", "google.loading": a(2633), "google.generating": a(2799), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": "作为智能对象导入", "image.import_as_newdoc": a(1309), "image.boundary": "边界", "image.import_tip": a(2912), "image.import_selection_button": a(548), "image.import_auto_hint": a(2706), "image.import_selection_hint": "使用当前选区边界", "auth.guest_login_success": "访客登录成功", "boundary.canvas": "画布", "boundary.select_boundary": a(1880), "boundary.selection": "选区", "boundary.max_size": a(1003), "boundary.max_size_error": a(1762), "boundary.max_size_hint": a(278), "boundary.max_size_placeholder": a(278), "boundary.no_limit": "不限", "boundary.image_quality": a(541), "boundary.image_quality_required": a(589), "boundary.image_quality_range": a(1787), "boundary.preview_main_image": a(1100), "boundary.preview_select": a(1651), "boundary.preview_alt": a(1652), "boundary.preview_placeholder": a(2491), "boundary.settings": a(1826), "convert widget {0} failed:": a(2142), "document {0} not found": a(2678), "image.document.new": a(776), "image.layer.smart_object": a(2816), "layer not found {0}": a(604), "photoshop.invalid_boundary_type": "无效的边界类型: {{type}}", "photoshop.no_active_layer": a(1276), "auth.login_hint": a(2356), "task.running": a(385), "task.execute": "运行", "task.stop": "停止", "task.importing_image": a(1082), "task.error.send_image_failed": a(905), "task.error.failed_status": a(3037), "taskrouter.template_placeholder": a(338), "taskrouter.balance": a(2050), "taskrouter.recharge": a(1807), "taskrouter.refresh_balance": a(1027), "taskrouter.no_schema": a(2989), "taskrouter.config.base_url": "TaskRouter 服务地址", "taskrouter.config.supabase_url": a(2759), "taskrouter.config.supabase_anon_key": a(1841), "taskrouter.error.remote_config_missing": a(348), "taskrouter.error.client_missing": a(1520), "taskrouter.error.template_missing": "未选择任务模板", "taskrouter.error.upload_provider_incompatible": a(871), "taskrouter.error.deferred_upload_failed": a(2959), "taskrouter.error.upload_control_unsupported": a(2433), "taskrouter.error.upload_resource_missing": a(1736), "taskrouter.error.tenant_unresolved": a(725), "taskrouter.error.supabase_session_failed": a(1607), "taskrouter.status.preparing": a(981), "taskrouter.status.uploading": "上传图片中...", "taskrouter.status.validating": "验证表单中...", "taskrouter.status.creating": a(463), "taskrouter.tab.editor": "运行", "taskrouter.tab.history": a(2671), "taskrouter.history.importing": a(1037), "taskrouter.history.send_failed_resource": a(1092), "taskrouter.history.send_failed_identifier": a(1042), "taskrouter.history.send_success": "图片已导入到画布", "taskrouter.history.select_prompt": "请选择一个历史任务", "taskrouter.history.duration_prefix": "耗时", "taskrouter.history.duration_unit": "秒", "taskrouter.history.createdAt": a(3039), "taskrouter.history.charge": a(1030), "taskrouter.history.charge_value": a(2435), "taskrouter.history.images": a(1266), "taskrouter.history.retry": "重新加载", "taskrouter.history.id": a(2635), "taskrouter.history.message": a(1415), "taskrouter.history.no_images": a(594), "taskrouter.history.client_missing": a(1520), "taskrouter.history.limit_notice": "当前版本限制获取最近10条", "taskrouter.history.refresh": "刷新", "taskrouter.history.detail_title": a(2853), "taskrouter.history.loading": a(735), "taskrouter.history.empty": a(1827), "taskrouter.history.started_at_label": a(924), "taskrouter.history.status.pending": a(1429), "taskrouter.history.status.running": a(766), "taskrouter.history.status.completed": a(682), "taskrouter.history.status.failed": "失败", "taskrouter.history.status.cancelled": a(1463), "plugin.menu.view_logs": "查看日志", "plugin.log.saved": a(1831), "plugin.log.save_failed": a(2900), "dialog.image_source.title": "选择图像来源", "dialog.image_source.primary_canvas": a(2131), "dialog.image_source.primary_curlayer": a(1353), "dialog.image_source.canvas_canvas": a(2533), "dialog.image_source.canvas_curlayer": a(2762), "dialog.image_source.curlayer_canvas": a(2490), "dialog.image_source.curlayer_curlayer": "以当前图层边界获取当前图层", "dialog.image_source.local_file": a(1517), "dialog.simple_source.title": "选择素材来源", "dialog.simple_source.canvas": "画布", "dialog.simple_source.current_layer": "当前图层", "dialog.simple_source.local_file": "选择文件", "dialog.simple_source.no_active_layer": a(2553), "dialog.simple_source.pick_error": a(629) }, ii = { "preview.show": "Show Preview ({{count}} images)", "gateway.select_ai_service": a(1196), "provider.select.title": a(1052), "provider.comfyui.description": a(1065), "provider.replicate.description": a(1585), "provider.runninghub.description": a(704), "provider.google.description": "OpenAI/Google format API", "provider.sdppp_sponsor.description": a(2560), "task.waiting_upload": "Waiting for image upload...", "task.creating_task": a(1362), "task.running_duration": a(389), "task.cancelled": a(1840), "task.cancel_failed": "Task cancel failed: {{error}}", "task.default_name": "AI Generation Task", "comfy.connect": "Connect", "comfy.load_failed": a(1709), "comfy.loading": a(1976), "comfy.channel_connecting": "Channel connecting...", "comfy.server_reconnecting": a(727), "comfy.version_mismatch": "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "comfy.cloud_recommend": a(1949), "comfy.your_workflows": "Your Workflows", "comfy.refresh_workflows": a(1993), "comfy.queue_progress": a(1996), "comfy.save": a(1514), "comfy.refresh": "Refresh", "comfy.stop_cancel_all": a(639), "comfy.stop_auto_run": a(502), "comfy.start_auto_run": a(1017), "comfy.auto_run_status": "Auto-run workflow after changes...", "comfy.run": "Run", "comfy.back": a(325), "comfy.uploading": a(1845), "comfy_simple.refreshing_preview": "Refreshing preview...", "comfy.select_workflow": a(1134), "comfy.task.name": a(1649), "comfy.error.task_cancelled": "Task cancelled", "comfy.task.processing_progress": a(2293), "comfy.help_tooltip": a(1493), "comfy.no_workflow_selected": a(2229), "comfy_simple.missing_url": a(1105), "comfy_simple.loading_webview": a(1505), "comfy_simple.http_error": "Failed to connect to ComfyUI (HTTP {{code}})", "comfy_simple.wait_connect": a(2326), "comfy_simple.loading": a(1614), "comfy_simple.connection_required": "ComfyUI not ready", "comfy_simple.preview_empty": a(1109), "comfy_simple.progress.idle": a(1239), "comfy_simple.auto_run": "Auto", "comfy_simple.workflow_quick": a(936), "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": "X10", "comfy_simple.prompt_templates.manage_tooltip": a(625), "comfy_simple.prompt_templates.button": a(2668), "comfy_simple.prompt_templates.save_error": a(559), "comfy_simple.prompt_templates.missing_key": a(1436), "comfy_simple.prompt_templates.missing_value": a(954), "comfy_simple.prompt_templates.duplicate_key": a(2713), "comfy_simple.prompt_templates.save_success": a(796), "comfy_simple.prompt_templates.delete_confirm_title": a(1892), "comfy_simple.prompt_templates.delete_confirm_content": a(1914), "comfy_simple.prompt_templates.delete_success": "Template removed.", "comfy_simple.prompt_templates.add_title": a(1474), "comfy_simple.prompt_templates.edit_title": a(1175), "comfy_simple.prompt_templates.modal_title": a(1395), "comfy_simple.prompt_templates.description": a(1900), "comfy_simple.prompt_templates.add_button": a(1687), "comfy_simple.prompt_templates.name_placeholder": a(2551), "comfy_simple.prompt_templates.value_placeholder": "Prompt content", "comfy_simple.fallback.title": "More Settings", "comfy_simple.fallback.button": "More Settings", "comfy_simple.prompt_templates.positive_label": "Positive Prompt", "comfy_simple.prompt_templates.negative_label": a(414), "comfy_simple.prompt_templates.negative_placeholder": a(2587), "comfy_simple.prompt_templates.negative_empty": a(2154), "comfy_simple.prompt_templates.default_section": a(2083), "comfy_simple.prompt_templates.default_empty": a(2168), "comfy_simple.prompt_templates.default_tag": a(830), "comfy_simple.prompt_templates.custom_section": "My Templates", "comfy_simple.prompt_templates.custom_empty": a(584), "comfy_simple.prompt_templates.applied_success": a(1909), "comfy_simple.prompt_templates.applied_failed": a(1015), "comfy_simple.prompt_templates.apply_unavailable": a(2552), "comfy_simple.prompt_templates.apply_failed_missing_binding": a(1364), "comfy_simple.prompt_templates.apply_failed_caller_unavailable": "Failed to update the {{part}} prompt: ComfyUI connection is not ready.", "comfy_simple.prompt_templates.apply_failed_set_error": a(1304), "common.delete": "Delete", "comfy_simple.preview_click_to_send": a(947), "comfy_simple.workflow_select.empty": a(2192), "comfy_simple.workflow_select.select": a(2042), "comfy_simple.workflow_select.selected": a(1234), "comfy_simple.workflow_select.current": "Current", "comfy_simple.workflow_select.load_failed": a(2638), "comfy_simple.workflow_select.members_only": a(2339), "boundary.title": a(494), "boundary.tooltip": a(1555), "boundary.current_canvas": "Entire Canvas", "boundary.current_layer": a(739), "boundary.current_selection": "Current Selection", "boundary.set_as_canvas": "Set as Canvas", "boundary.set_as_layer": a(1391), "boundary.set_as_selection": "Set as Current Selection", "http.404": a(2480), "http.401": "Unauthorized (401)", "http.403": a(2882), "http.408": a(2730), "http.500": a(2862), "http.501": a(2813), "http.502": a(749), "http.503": a(1404), "http.504": a(2852), "http.unknown": a(907), "runninghub.get_apikey": "Click to get RunningHub APIKey", "runninghub.apikey_placeholder": a(2941), "runninghub.app_id": a(1118), "runninghub.webapp_id_placeholder": a(1552), "runninghub.open_app": "Press Enter to open app: {{appName}}", "runninghub.execute": a(2934), "runninghub.running": a(442), "runninghub.rh_coins": "RH Coins:", "runninghub.current_tasks": a(2227), "runninghub.help_tooltip": a(1493), "runninghub.stop_all": a(553), "runninghub.status.waiting": "Waiting in queue", "runninghub.status.running": a(1473), "runninghub.status.failed": a(3043), "runninghub.status.success": a(468), "image.auto_refetch": "Auto repick from PS", "local_resource.selection.images": a(874), "runninghub.error.get_result_failed": "Failed to get result: {{error}}", "runninghub.error.task_failed": a(2473), "runninghub.error.task_incomplete": a(1733), "runninghub.error.account_status_http": a(1211), "runninghub.error.account_status_reason_unknown": a(284), "runninghub.error.account_status_failed": "getAccountStatus API failed - {{reason}}", "runninghub.error.form_data_http": a(1472), "runninghub.error.form_data_reason_unknown": a(2143), "runninghub.error.form_data_failed": "getNodes API failed - {{reason}}", "runninghub.error.node_info_missing": "run API failed - nodeInfoList unavailable. Please call getNodes() first.", "runninghub.error.run_http": a(307), "runninghub.error.run_reason_default": a(2301), "runninghub.error.run_failed": a(2787), "runninghub.error.status_http": a(2985), "runninghub.error.status_reason_unknown": a(2112), "runninghub.error.status_failed": a(635), "runninghub.error.outputs_http": a(2359), "runninghub.error.outputs_failed": a(1516), "runninghub.task.title": "RunningHub - {{webappId}}", "runninghub.error.upload_http": a(499), "runninghub.error.upload_reason_unknown": a(1398), "runninghub.error.upload_failed": a(1680), "runninghub.error.services_unavailable": a(2412), "customapi.error.no_image_returned": a(1184), "customapi.error.openai_api": "OpenAI API error", "customapi.error.input_required": a(1569), "customapi.error.generation_failed": a(2360), "customapi.error.model_required": a(1879), "customapi.task.name.google": "Google Gemini - Image Generation", "customapi.task.name.openai": a(3045), "customapi.error.unsupported_image_input": a(1572), "replicate.get_apikey": "How to get APIKey", "replicate.apikey_placeholder": a(2549), "replicate.execute": "Execute", "replicate.model_placeholder": a(1287), "replicate.help_tooltip": a(1493), "replicate.loading": "Loading...", "replicate.running": a(442), "replicate.stop": "Stop", "replicate.error.result_fetch_failed": "Result fetch failed", "liblib.get_apikey": a(1744), "liblib.execute": a(2934), "common.close": a(321), "common.save": a(1514), "common.save_and_run": a(814), "common.loading": a(1288), "common.list_separator": ", ", "common.error": a(1459), "common.error.unknown": "Unknown error", "common.error.task_creation_aborted": a(2441), "common.error.status_check_aborted": "Status check aborted", "common.error.result_fetch_aborted": "Result fetch aborted", "common.error.upload_aborted": "Upload aborted", "common.success": a(468), "common.failed": "Failed", "common.generating": a(2485), "common.cancel": a(2093), "common.confirm": a(673), "common.options": a(504), "common.options_separator": a(1040), "upload_pass.error.unsupported_type": a(1754), "upload_pass.error.uploader_missing": a(2880), webviewInForeground: "PS shortcuts may be blocked by plugin...", webviewInForeground2: a(2430), "auth.login_success": "Login Successful", "auth.username_label": a(685), "auth.email_label": a(1072), "auth.logout": a(2047), "auth.login_required": a(1576), "image.send.select_position": a(2725), "image.send.sending": a(2931), "image.layer.new": a(2138), "image.layer.current": a(739), "image.layer.fit_to_current": a(1308), "image.layer.fit_to_selection": a(719), "image.layer.fit_to_canvas": a(2563), "image.shortcut_auth_required": a(2169), "image.shortcut_focus_required": a(1469), "image.get.select_image": a(2451), "image.get.entire_canvas": a(1925), "image.get.canvas": a(617), "image.get.current_layer": a(739), "image.get.current_layer_bounds": "Current layer bounds only", "image.get.selection_bounds": a(743), "image.get.canvas_bounds": a(2181), "image.crop_by_selection": a(1372), "image.limit_size": "Limit image size", "image.crop.none": a(2965), "image.crop.inpaint": a(1864), "image.crop.outpaint": a(2925), "image.send_all": "Send all", "image.save_all": "Save all", "image.save_current": a(2244), "image.delete_current": a(1365), "image.more_actions": "More actions", "image.jump_to_last": a(910), "image.clear_all": a(2393), "image.send_to_ps": "Send to PS", "image.download": a(1087), "image.copy": a(2969), "image.sending": a(2370), "image.sending_all": a(306), "mask.get.select_mask": a(1591), "mask.selection": a(1382), "mask.current_layer_bounds": a(2761), "mask.all": "All", "mask.selection_exclude": "Exclude selection", "mask.current_layer_exclude": a(2163), "mask.empty": a(2154), "widgetable.photoshop.deprecated_node": a(1347), "work_boundary.error.empty_selection_mask": a(2005), "work_boundary.error.primary_resource_missing": a(1580), "work_boundary.error.mask_resource_missing": "Mask resource is missing", "work_boundary.error.mask_apply_empty": a(920), "document {{0}} not found": a(523), "create document for preview": a(2420), "resize document for preview": a(1702), "create document for sent images": a(2482), "show sent images": "Show sent images", "create layer failed": "Create layer failed", "layer not found {{0}}": a(556), "layer not found: {{0}}": "Layer not found: {{0}}", "layer {{0}} is not a group": a(2023), "no linked layer for {{0}}": "No linked layer for {{0}}", "no first related layer in {{0}}": a(1848), "merge group failed": a(2610), "get content of layer {{0}}": a(785), "get layer info": a(1806), "get_layer_info: layer_identify required": a(2190), "get pixel of {{0}} failed": "Get pixel of {{0}} failed", "get selection failed": a(2057), "invalid name: {{0}}": a(2675), "desire bounds is null": a(2889), "intersect or scaledDesire is null": "Intersect or scaledDesire is null", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': a(2156), "select layer": a(607), "run Photoshop Action": a(2891), "Action {{0}} not found": a(1970), "Action set {{0}} not found": a(2061), "set text to layer": a(308), "ComfyManager not found, cannot reboot": a(2795), "Failed to reboot ComfyUI": a(2901), "image.upload.from_canvas": a(617), "image.upload.from_curlayer": a(739), "image.upload.from_selection": a(1382), "image.upload.from_harddisk": a(1330), "image.upload.clear": a(1421), "image.upload.uploading": "Uploading, if the image too large, may be lag...", "image.upload.syncing": a(1930), "image.upload.no_images": a(1197), "image.upload.error": a(461), "image.upload.tooltip.alt.crop": a(1817), "image.upload.tooltip.alt.reverse": a(729), "image.upload.tooltip.image.canvas": a(2191), "image.upload.tooltip.image.curlayer": a(2636), "image.upload.tooltip.mask.canvas": a(2838), "image.upload.tooltip.mask.curlayer": "Get mask from Current Layer", "image.upload.tooltip.mask.selection": a(387), "image.upload.tooltip.cut_action": a(1939), "image.upload.tooltip.scan_action": a(2615), "image.upload.tooltip.autosync.on": a(572), "image.upload.tooltip.autosync.off": a(1419), "image.upload.tooltip.sync_action": "Sync current content", "image.upload.tooltip.more_options_hint": "Hold Shift for more options; Ctrl for single fetch", "image.upload.tooltip.current.canvas": "Current selection: Canvas", "image.upload.tooltip.current.layer": a(3047), "image.upload.tooltip.current.layer_named": a(1692), "image.upload.tooltip.current.file": "Current option: File", "image.upload.autosync.fetching": a(292), "image.upload.autosync.status.enabled": a(1876), "image.upload.autosync.status.disabled": a(2859), "image.upload.retry": "Retry", "image.pack.local.button": "Local image pack", "image.pack.local.empty": "No images yet", "image.auto_send_enabled": a(1132), "image.auto_send_disabled": a(1860), "image.upload.primary.auto": a(292), "image.upload.primary.manual": "Get Image", "image.upload.primary.cut": a(1622), "image.upload.primary.scan": a(2224), "image.upload.primary.hint": "This node defaults to current layer + mask", "image.upload.primary.hint.line1": "Defaults using", "image.upload.primary.hint.line2": a(2467), "workflow.output.destination.title": a(2694), "workflow.output.destination.canvas": a(699), "image.upload.primary.advanced": a(356), "image.upload.primary.advanced.modify": "Modify", "image.upload.primary.advanced.reset": a(2341), "image.upload.primary.advanced.local_file": "Local file", "image.upload.primary.advanced.content.canvas": a(617), "image.upload.primary.advanced.content.curlayer": a(1152), "image.upload.primary.advanced.content.selection": a(1382), "image.upload.primary.advanced.boundary.canvas": a(1205), "image.upload.primary.advanced.boundary.curlayer": a(1261), "image.upload.primary.advanced.boundary.selection": a(508), "image.upload.primary.advanced.boundary.primary": a(733), "image.upload.mode.file.label": a(1862), "image.upload.mode.layer.label": a(344), "image.upload.mode.canvas.label": "Canvas", "image.upload.source.file.tooltip": a(263), "image.upload.source.layer.tooltip": "Use current layer", "image.upload.source.canvas.tooltip": "Use entire canvas", "image.upload.dropHint": "Drag images here and release to upload", "image.upload.tooltip.clear_action": a(2991), "image.upload.status.layer.short_named": "Layer {{layerName}}", "image.upload.status.layer.short": "Layer", "image.upload.status.file.short": a(2581), "image.upload.status.canvas.short": a(617), "image.upload.status.file.active": a(1911), "image.upload.status.file.resetHint": "Click to remove local file", "image.upload.status.mask.resetHint": a(326), "image.upload.status.mask.modified": a(3008), "image.upload.status.boundary.resetHint": a(3015), "image.upload.status.boundary.modified": "Rescoped", "image.upload.status.boundary.docMismatch": a(2902), "image.upload.mask.button": a(1320), "image.upload.mask.selection": a(1320), "image.upload.mask.layer": "Layer mask", "image.upload.remove_slot": a(881), "image.upload.add_slot": a(1168), "video.local.button": "Local video", "video.local.empty": "No videos yet", "video.local.remove": "Remove video", "source.source": a(1417), "source.content": a(2150), "source.boundary": a(806), "source.mask": a(2973), "source.disk": a(1330), "source.remote": a(1704), "source.unknown": a(1670), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": a(617), "source.current_layer": a(677), "source.selection": a(1382), "source.quality_percent": a(2282), "source.crop.positive": "Positive Crop", "source.crop.negative": "Negative Crop", "source.reverse": a(2007), "send_images.create_document": a(336), "send_images.create_document_failed": "Create document failed", "photoshop.no_active_document": a(929), "photoshop.rectangle_coordinates_required": a(2289), "photoshop.create_guide_frame": a(1499), "photoshop.clear_guide_frame": "Clear guide frame", "photoshop.invalid_action": a(1297), "photoshop.file_not_found": a(2681), "photoshop.failed_to_open_file_as_document": a(1933), "photoshop.invalid_boundary": a(1217), "photoshop.failed_to_open_image_file": a(1967), "photoshop.open_images_from_file": a(2525), "photoshop.failed_to_create_document_from_file": a(446), "google.field.image_input": a(1154), "google.field.prompt": a(887), "google.field.batch_count": "Batch Count", "google.field.images_per_batch": a(1468), "google.status.success": a(468), "google.status.failed": a(3043), "google.status.generating": a(2611), "google.apikey_placeholder": "Enter Google API Key", "google.get_apikey": "Get API Key", "google.baseurl_placeholder": a(1964), "google.help_tooltip": a(670), "google.model_name": a(647), "google.model_label": a(2151), "google.model_placeholder": "Select a model", "google.stop": a(1963), "google.loading": a(1288), "google.generating": a(2485), "google.generate": a(631), "image.auto_toggle": a(2234), "image.import_as_smartobject": a(2358), "image.import_as_newdoc": a(1713), "image.boundary": a(546), "image.import_tip": "Hold Shift key to import as new document", "image.import_selection_button": "Send to Selection", "image.import_auto_hint": a(1944), "image.import_selection_hint": "Use current selection boundary", "auth.guest_login_success": a(1743), "boundary.canvas": "Canvas", "boundary.select_boundary": a(472), "boundary.selection": a(1382), "boundary.max_size": "Max size (px)", "boundary.max_size_error": a(373), "boundary.max_size_hint": a(1821), "boundary.max_size_placeholder": a(1821), "boundary.no_limit": a(2922), "boundary.image_quality": a(686), "boundary.image_quality_required": a(970), "boundary.image_quality_range": "Range 1-100", "boundary.preview_main_image": "Output to", "boundary.preview_select": a(2371), "boundary.preview_alt": a(3035), "boundary.preview_placeholder": "Click to use current selection", "boundary.settings": a(1011), "convert widget {0} failed:": "Failed to convert widget {0}:", "document {0} not found": "Document {0} not found", "image.document.new": "New Document", "image.layer.smart_object": a(363), "layer not found {0}": a(359), "photoshop.invalid_boundary_type": a(2278), "photoshop.no_active_layer": a(2019), "auth.login_hint": "Please click Login in the top-right corner.", "task.running": "Running...", "task.execute": "Run", "task.stop": "Stop", "task.importing_image": a(329), "task.error.send_image_failed": "Failed to send image {{index}}: {{error}}", "task.error.failed_status": a(2120), "taskrouter.template_placeholder": a(1121), "taskrouter.balance": a(691), "taskrouter.recharge": "Sponsor", "taskrouter.refresh_balance": a(2502), "taskrouter.no_schema": a(1172), "taskrouter.config.base_url": a(2609), "taskrouter.config.supabase_url": "Supabase URL", "taskrouter.config.supabase_anon_key": a(2425), "taskrouter.error.remote_config_missing": "Missing TaskRouter remote config: {{missing}}. Please check the remote config and try again.", "taskrouter.error.client_missing": "TaskRouter client is not initialized", "taskrouter.error.template_missing": a(1761), "taskrouter.error.upload_provider_incompatible": a(2410), "taskrouter.error.deferred_upload_failed": a(462), "taskrouter.error.upload_control_unsupported": "Upload controls are not supported for TaskRouter", "taskrouter.error.upload_resource_missing": a(2536), "taskrouter.error.tenant_unresolved": a(1690), "taskrouter.error.supabase_session_failed": a(2418), "taskrouter.status.preparing": "Preparing...", "taskrouter.status.uploading": a(1102), "taskrouter.status.validating": a(2003), "taskrouter.status.creating": "Creating task...", "taskrouter.tab.editor": "Run", "taskrouter.tab.history": a(506), "taskrouter.history.importing": a(1849), "taskrouter.history.send_failed_resource": a(2634), "taskrouter.history.send_failed_identifier": a(270), "taskrouter.history.send_success": "Image imported to canvas", "taskrouter.history.select_prompt": a(2470), "taskrouter.history.duration_prefix": a(951), "taskrouter.history.duration_unit": "sec", "taskrouter.history.createdAt": "Created At", "taskrouter.history.charge": a(1511), "taskrouter.history.charge_value": "-{{value}} points", "taskrouter.history.images": a(2287), "taskrouter.history.retry": a(613), "taskrouter.history.id": a(2746), "taskrouter.history.message": a(2446), "taskrouter.history.no_images": a(2051), "taskrouter.history.client_missing": a(1438), "taskrouter.history.limit_notice": a(403), "taskrouter.history.refresh": a(2153), "taskrouter.history.detail_title": a(1790), "taskrouter.history.loading": a(2196), "taskrouter.history.empty": "No history tasks", "taskrouter.history.started_at_label": a(1140), "taskrouter.history.status.pending": a(1673), "taskrouter.history.status.running": a(1473), "taskrouter.history.status.completed": a(347), "taskrouter.history.status.failed": "Failed", "taskrouter.history.status.cancelled": "Cancelled", "plugin.menu.view_logs": "View Logs", "plugin.log.saved": a(517), "plugin.log.save_failed": "Failed to write log file:", "dialog.image_source.title": a(911), "dialog.image_source.primary_canvas": a(2496), "dialog.image_source.primary_curlayer": a(723), "dialog.image_source.canvas_canvas": a(2702), "dialog.image_source.canvas_curlayer": a(2448), "dialog.image_source.curlayer_canvas": "Fetch canvas with current-layer boundary", "dialog.image_source.curlayer_curlayer": a(711), "dialog.image_source.local_file": a(2829), "dialog.simple_source.title": "Select Source", "dialog.simple_source.canvas": "Canvas", "dialog.simple_source.current_layer": a(739), "dialog.simple_source.local_file": a(1553), "dialog.simple_source.no_active_layer": a(1097), "dialog.simple_source.pick_error": a(1636) }, be = (o) => typeof o === a(2028), J0 = () => {
  const o = a;
  let x, t;
  const r = new Promise((e, s) => {
    x = e, t = s;
  });
  return r[o(855)] = x, r[o(965)] = t, r;
}, za = (o) => o == null ? "" : "" + o, ci = (o, x, t) => {
  o[a(430)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, ui = /###/g, Ha = (o) => o && o[a(2273)]("###") > -1 ? o[a(1252)](ui, ".") : o, Va = (o) => !o || be(o), Y0 = (o, x, t) => {
  const r = be(x) ? x.split(".") : x;
  let e = 0;
  for (; e < r.length - 1; ) {
    if (Va(o)) return {};
    const s = Ha(r[e]);
    !o[s] && t && (o[s] = new t()), Object.prototype.hasOwnProperty.call(o, s) ? o = o[s] : o = {}, ++e;
  }
  return Va(o) ? {} : { obj: o, k: Ha(r[e]) };
}, Ba = (o, x, t) => {
  const r = a, { obj: e, k: s } = Y0(o, x, Object);
  if (e !== void 0 || x[r(1148)] === 1) {
    e[s] = t;
    return;
  }
  let n = x[x[r(1148)] - 1], i = x[r(1908)](0, x[r(1148)] - 1), c = Y0(o, i, Object);
  for (; c[r(2505)] === void 0 && i[r(1148)]; )
    n = i[i[r(1148)] - 1] + "." + n, i = i.slice(0, i[r(1148)] - 1), c = Y0(o, i, Object), c != null && c[r(2505)] && typeof c[r(2505)][c.k + "." + n] < "u" && (c[r(2505)] = void 0);
  c[r(2505)][c.k + "." + n] = t;
}, di = (o, x, t, r) => {
  const e = a, { obj: s, k: n } = Y0(o, x, Object);
  s[n] = s[n] || [], s[n][e(3019)](t);
}, Fx = (o, x) => {
  const t = a, { obj: r, k: e } = Y0(o, x);
  if (r && Object[t(1706)][t(1446)].call(r, e))
    return r[e];
}, li = (o, x, t) => {
  const r = Fx(o, t);
  return r !== void 0 ? r : Fx(x, t);
}, Vs = (o, x, t) => {
  const r = a;
  for (const e in x)
    e !== r(2806) && e !== r(1230) && (e in o ? be(o[e]) || o[e] instanceof String || be(x[e]) || x[e] instanceof String ? t && (o[e] = x[e]) : Vs(o[e], x[e], t) : o[e] = x[e]);
  return o;
}, $0 = (o) => o[a(1252)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, a(537));
var fi = { "&": a(456), "<": a(1008), ">": a(710), '"': "&quot;", "'": a(2058), "/": a(503) };
const hi = (o) => be(o) ? o.replace(/[&<>"'\/]/g, (x) => fi[x]) : o;
class pi {
  constructor(x) {
    const t = a;
    this[t(2228)] = x, this[t(2696)] = /* @__PURE__ */ new Map(), this[t(2133)] = [];
  }
  getRegExp(x) {
    const t = a, r = this.regExpMap[t(1507)](x);
    if (r !== void 0) return r;
    const e = new RegExp(x);
    return this[t(2133)][t(1148)] === this[t(2228)] && this[t(2696)].delete(this[t(2133)].shift()), this[t(2696)][t(823)](x, e), this.regExpQueue[t(3019)](x), e;
  }
}
const mi = [" ", ",", "?", "!", ";"], bi = new pi(20), gi = (o, x, t) => {
  const r = a;
  x = x || "", t = t || "";
  const e = mi.filter((i) => x.indexOf(i) < 0 && t[r(2273)](i) < 0);
  if (e.length === 0) return !0;
  const s = bi[r(432)]("(" + e[r(2739)]((i) => i === "?" ? "\\?" : i).join("|") + ")");
  let n = !s[r(1531)](o);
  if (!n) {
    const i = o[r(2273)](t);
    i > 0 && !s[r(1531)](o[r(2888)](0, i)) && (n = !0);
  }
  return n;
}, Jt = (o, x, t = ".") => {
  const r = a;
  if (!o) return;
  if (o[x])
    return Object[r(1706)].hasOwnProperty[r(2689)](o, x) ? o[x] : void 0;
  const e = x[r(1958)](t);
  let s = o;
  for (let n = 0; n < e[r(1148)]; ) {
    if (!s || typeof s !== r(2220)) return;
    let i, c = "";
    for (let u = n; u < e.length; ++u)
      if (u !== n && (c += t), c += e[u], i = s[c], i !== void 0) {
        if ([r(2028), r(867), "boolean"][r(2273)](typeof i) > -1 && u < e.length - 1) continue;
        n += u - n + 1;
        break;
      }
    s = i;
  }
  return s;
}, sx = (o) => o == null ? void 0 : o[a(1252)]("_", "-"), yi = { type: a(872), log(o) {
  const x = a;
  this.output(x(2127), o);
}, warn(o) {
  this[a(1749)]("warn", o);
}, error(o) {
  this.output("error", o);
}, output(o, x) {
  var t, r;
  (r = (t = console == null ? void 0 : console[o]) == null ? void 0 : t.apply) == null || r.call(t, console, x);
} };
class _x {
  constructor(x, t = {}) {
    this.init(x, t);
  }
  [a(2462)](x, t = {}) {
    const r = a;
    this[r(1004)] = t[r(1004)] || "i18next:", this[r(872)] = x || yi, this[r(1341)] = t, this[r(819)] = t.debug;
  }
  log(...x) {
    const t = a;
    return this[t(1160)](x, t(2127), "", !0);
  }
  [a(2618)](...x) {
    const t = a;
    return this[t(1160)](x, t(2618), "", !0);
  }
  error(...x) {
    return this[a(1160)](x, "error", "");
  }
  [a(1009)](...x) {
    const t = a;
    return this[t(1160)](x, "warn", t(1714), !0);
  }
  forward(x, t, r, e) {
    const s = a;
    return e && !this.debug ? null : (be(x[0]) && (x[0] = "" + r + this[s(1004)] + " " + x[0]), this[s(872)][t](x));
  }
  create(x) {
    const t = a;
    return new _x(this[t(872)], { prefix: this[t(1004)] + ":" + x + ":", ...this[t(1341)] });
  }
  [a(820)](x) {
    const t = a;
    return x = x || this[t(1341)], x[t(1004)] = x[t(1004)] || this[t(1004)], new _x(this[t(872)], x);
  }
}
var f0 = new _x();
class Ax {
  constructor() {
    const x = a;
    this[x(2034)] = {};
  }
  on(x, t) {
    const r = a;
    return x.split(" ")[r(430)]((e) => {
      const s = r;
      this[s(2034)][e] || (this[s(2034)][e] = /* @__PURE__ */ new Map());
      const n = this[s(2034)][e].get(t) || 0;
      this[s(2034)][e][s(823)](t, n + 1);
    }), this;
  }
  [a(641)](x, t) {
    const r = a;
    if (this[r(2034)][x]) {
      if (!t) {
        delete this[r(2034)][x];
        return;
      }
      this.observers[x][r(2375)](t);
    }
  }
  [a(1271)](x, ...t) {
    const r = a;
    this[r(2034)][x] && Array[r(1546)](this.observers[x][r(1434)]())[r(430)](([s, n]) => {
      for (let i = 0; i < n; i++)
        s(...t);
    }), this.observers["*"] && Array[r(1546)](this.observers["*"].entries())[r(430)](([s, n]) => {
      const i = r;
      for (let c = 0; c < n; c++)
        s[i(1046)](s, [x, ...t]);
    });
  }
}
class Wa extends Ax {
  constructor(x, t = { ns: [a(1747)], defaultNS: "translation" }) {
    const r = a;
    super(), this.data = x || {}, this.options = t, this[r(1341)][r(2596)] === void 0 && (this[r(1341)][r(2596)] = "."), this[r(1341)].ignoreJSONStructure === void 0 && (this[r(1341)].ignoreJSONStructure = !0);
  }
  [a(999)](x) {
    const t = a;
    this[t(1341)].ns.indexOf(x) < 0 && this[t(1341)].ns[t(3019)](x);
  }
  removeNamespaces(x) {
    const t = a, r = this.options.ns[t(2273)](x);
    r > -1 && this.options.ns[t(2176)](r, 1);
  }
  [a(381)](x, t, r, e = {}) {
    var d, l;
    const s = a, n = e.keySeparator !== void 0 ? e[s(2596)] : this[s(1341)][s(2596)], i = e.ignoreJSONStructure !== void 0 ? e[s(2226)] : this[s(1341)][s(2226)];
    let c;
    x[s(2273)](".") > -1 ? c = x[s(1958)](".") : (c = [x, t], r && (Array[s(500)](r) ? c[s(3019)](...r) : be(r) && n ? c[s(3019)](...r.split(n)) : c[s(3019)](r)));
    const u = Fx(this[s(1506)], c);
    return !u && !t && !r && x.indexOf(".") > -1 && (x = c[0], t = c[1], r = c.slice(2)[s(896)](".")), u || !i || !be(r) ? u : Jt((l = (d = this[s(1506)]) == null ? void 0 : d[x]) == null ? void 0 : l[t], r, n);
  }
  [a(2531)](x, t, r, e, s = { silent: !1 }) {
    const n = a, i = s.keySeparator !== void 0 ? s.keySeparator : this[n(1341)][n(2596)];
    let c = [x, t];
    r && (c = c.concat(i ? r.split(i) : r)), x[n(2273)](".") > -1 && (c = x[n(1958)]("."), e = t, t = c[1]), this[n(999)](t), Ba(this[n(1506)], c, e), s[n(2122)] || this.emit(n(2516), x, t, r, e);
  }
  addResources(x, t, r, e = { silent: !1 }) {
    const s = a;
    for (const n in r)
      (be(r[n]) || Array[s(500)](r[n])) && this[s(2531)](x, t, n, r[n], { silent: !0 });
    e.silent || this[s(1271)](s(2516), x, t, r);
  }
  [a(1022)](x, t, r, e, s, n = { silent: !1, skipCopy: !1 }) {
    const i = a;
    let c = [x, t];
    x[i(2273)](".") > -1 && (c = x[i(1958)]("."), e = r, r = t, t = c[1]), this.addNamespaces(t);
    let u = Fx(this[i(1506)], c) || {};
    n[i(624)] || (r = JSON[i(1598)](JSON[i(3038)](r))), e ? Vs(u, r, s) : u = { ...u, ...r }, Ba(this.data, c, u), n.silent || this[i(1271)](i(2516), x, t, r);
  }
  [a(2205)](x, t) {
    const r = a;
    this[r(2874)](x, t) && delete this[r(1506)][x][t], this[r(530)](t), this[r(1271)](r(2686), x, t);
  }
  [a(2874)](x, t) {
    return this[a(381)](x, t) !== void 0;
  }
  [a(1482)](x, t) {
    const r = a;
    return t || (t = this[r(1341)][r(1674)]), this.getResource(x, t);
  }
  [a(501)](x) {
    return this[a(1506)][x];
  }
  hasLanguageSomeTranslations(x) {
    const t = a, r = this.getDataByLanguage(x);
    return !!(r && Object[t(1877)](r) || [])[t(304)]((s) => r[s] && Object[t(1877)](r[s])[t(1148)] > 0);
  }
  [a(1159)]() {
    return this[a(1506)];
  }
}
var Bs = { processors: {}, addPostProcessor(o) {
  const x = a;
  this[x(644)][o[x(1166)]] = o;
}, handle(o, x, t, r, e) {
  const s = a;
  return o[s(430)]((n) => {
    var c;
    const i = s;
    x = ((c = this[i(644)][n]) == null ? void 0 : c[i(2286)](x, t, r, e)) ?? x;
  }), x;
} };
const Ws = Symbol(a(2911));
function vi() {
  const o = a, x = [], t = Object[o(558)](null);
  let r;
  return t[o(1507)] = (e, s) => {
    var i;
    const n = o;
    return (i = r == null ? void 0 : r[n(2305)]) == null || i.call(r), s === Ws ? x : (x[n(3019)](s), r = Proxy[n(2590)](e, t), r[n(2207)]);
  }, Proxy.revocable(Object[o(558)](null), t).proxy;
}
function Qt(o, x) {
  const t = a, { [Ws]: r } = o(vi());
  return r[t(896)]((x == null ? void 0 : x[t(2596)]) ?? ".");
}
const Ka = {}, Kx = (o) => !be(o) && typeof o != "boolean" && typeof o !== a(867);
class Nx extends Ax {
  constructor(x, t = {}) {
    const r = a;
    super(), ci([r(1793), r(1416), "pluralResolver", r(3044), "backendConnector", "i18nFormat", r(2182)], x, this), this.options = t, this[r(1341)][r(2596)] === void 0 && (this[r(1341)].keySeparator = "."), this.logger = f0[r(558)](r(2329));
  }
  changeLanguage(x) {
    x && (this.language = x);
  }
  [a(722)](x, t = { interpolation: {} }) {
    const r = a, e = { ...t };
    if (x == null) return !1;
    const s = this[r(855)](x, e);
    if ((s == null ? void 0 : s[r(2070)]) === void 0) return !1;
    const n = Kx(s.res);
    return !(e[r(383)] === !1 && n);
  }
  [a(1412)](x, t) {
    const r = a;
    let e = t[r(2916)] !== void 0 ? t[r(2916)] : this[r(1341)][r(2916)];
    e === void 0 && (e = ":");
    const s = t.keySeparator !== void 0 ? t[r(2596)] : this.options.keySeparator;
    let n = t.ns || this[r(1341)][r(1674)] || [];
    const i = e && x.indexOf(e) > -1, c = !this.options[r(836)] && !t.keySeparator && !this.options[r(2899)] && !t[r(2916)] && !gi(x, e, s);
    if (i && !c) {
      const u = x[r(789)](this[r(3044)][r(2966)]);
      if (u && u[r(1148)] > 0) return { key: x, namespaces: be(n) ? [n] : n };
      const d = x[r(1958)](e);
      (e !== s || e === s && this[r(1341)].ns[r(2273)](d[0]) > -1) && (n = d[r(1766)]()), x = d[r(896)](s);
    }
    return { key: x, namespaces: be(n) ? [n] : n };
  }
  [a(2918)](x, t, r) {
    const e = a;
    let s = typeof t === e(2220) ? { ...t } : t;
    if (typeof s !== e(2220) && this[e(1341)][e(2262)] && (s = this[e(1341)][e(2262)](arguments)), typeof s === e(2220) && (s = { ...s }), s || (s = {}), x == null) return "";
    typeof x === e(1149) && (x = Qt(x, { ...this[e(1341)], ...s })), Array[e(500)](x) || (x = [String(x)]);
    const n = s[e(1693)] !== void 0 ? s[e(1693)] : this[e(1341)][e(1693)], i = s.keySeparator !== void 0 ? s[e(2596)] : this[e(1341)][e(2596)], { key: c, namespaces: u } = this[e(1412)](x[x[e(1148)] - 1], s), d = u[u.length - 1];
    let l = s.nsSeparator !== void 0 ? s.nsSeparator : this[e(1341)][e(2916)];
    l === void 0 && (l = ":");
    const f = s[e(2986)] || this.language, g = s[e(1740)] || this.options[e(1740)];
    if ((f == null ? void 0 : f.toLowerCase()) === e(2421))
      return g ? n ? { res: "" + d + l + c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: d, usedParams: this[e(1179)](s) } : "" + d + l + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: d, usedParams: this[e(1179)](s) } : c;
    const h = this.resolve(x, s);
    let m = h == null ? void 0 : h.res;
    const v = (h == null ? void 0 : h[e(1689)]) || c, k = (h == null ? void 0 : h.exactUsedKey) || c, I = ["[object Number]", e(890), e(2243)], T = s.joinArrays !== void 0 ? s.joinArrays : this[e(1341)][e(1811)], q = !this[e(1002)] || this[e(1002)].handleAsObject, R = s[e(459)] !== void 0 && !be(s[e(459)]), P = Nx[e(802)](s), C = R ? this[e(1025)].getSuffix(f, s[e(459)], s) : "", j = s[e(2008)] && R ? this.pluralResolver.getSuffix(f, s[e(459)], { ordinal: !1 }) : "", D = R && !s[e(2008)] && s[e(459)] === 0, O = D && s[e(1890) + this[e(1341)][e(1870)] + e(852)] || s[e(1890) + C] || s["defaultValue" + j] || s[e(1890)];
    let N = m;
    q && !m && P && (N = O);
    const _ = Kx(N), z = Object[e(1706)][e(511)].apply(N);
    if (q && N && _ && I[e(2273)](z) < 0 && !(be(T) && Array[e(500)](N))) {
      if (!s[e(383)] && !this.options[e(383)]) {
        !this[e(1341)][e(1319)] && this[e(872)][e(2618)](e(2508));
        const U = this.options[e(1319)] ? this[e(1341)][e(1319)](v, N, { ...s, ns: u }) : "key '" + c + " (" + this[e(1503)] + e(1313);
        return n ? (h[e(2070)] = U, h[e(1410)] = this[e(1179)](s), h) : U;
      }
      if (i) {
        const U = Array.isArray(N), H = U ? [] : {}, G = U ? k : v;
        for (const ie in N)
          if (Object[e(1706)][e(1446)][e(2689)](N, ie)) {
            const ue = "" + G + i + ie;
            P && !m ? H[ie] = this[e(2918)](ue, { ...s, defaultValue: Kx(O) ? O[ie] : void 0, joinArrays: !1, ns: u }) : H[ie] = this[e(2918)](ue, { ...s, joinArrays: !1, ns: u }), H[ie] === ue && (H[ie] = N[ie]);
          }
        m = H;
      }
    } else if (q && be(T) && Array[e(500)](m))
      m = m[e(896)](T), m && (m = this[e(2136)](m, x, s, r));
    else {
      let U = !1, H = !1;
      !this[e(2316)](m) && P && (U = !0, m = O), !this[e(2316)](m) && (H = !0, m = c);
      const G = s.missingKeyNoValueFallbackToKey || this[e(1341)][e(1726)], ie = G && H ? void 0 : m, ue = P && O !== m && this[e(1341)][e(876)];
      if (H || U || ue) {
        if (this[e(872)][e(2127)](ue ? "updateKey" : e(1235), f, d, c, ue ? O : m), i) {
          const Pe = this.resolve(c, { ...s, keySeparator: !1 });
          Pe && Pe[e(2070)] && this[e(872)][e(2618)]("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let le = [];
        const oe = this[e(1416)][e(1038)](this[e(1341)][e(633)], s[e(2986)] || this[e(1503)]);
        if (this[e(1341)].saveMissingTo === e(1311) && oe && oe[0]) for (let Pe = 0; Pe < oe[e(1148)]; Pe++)
          le[e(3019)](oe[Pe]);
        else this[e(1341)][e(417)] === "all" ? le = this[e(1416)][e(2018)](s[e(2986)] || this[e(1503)]) : le[e(3019)](s.lng || this[e(1503)]);
        const fe = (Pe, ye, Le) => {
          var A;
          const _e = e, Je = P && Le !== m ? Le : ie;
          this[_e(1341)][_e(1645)] ? this[_e(1341)][_e(1645)](Pe, d, ye, Je, ue, s) : (A = this[_e(2976)]) != null && A[_e(1332)] && this[_e(2976)].saveMissing(Pe, d, ye, Je, ue, s), this.emit(_e(1235), Pe, d, ye, m);
        };
        this[e(1341)][e(1332)] && (this[e(1341)].saveMissingPlurals && R ? le[e(430)]((Pe) => {
          const ye = e, Le = this[ye(1025)][ye(342)](Pe, s);
          D && s[ye(1890) + this[ye(1341)][ye(1870)] + ye(852)] && Le[ye(2273)](this[ye(1341)].pluralSeparator + ye(852)) < 0 && Le[ye(3019)](this.options.pluralSeparator + "zero"), Le[ye(430)]((_e) => {
            const Je = ye;
            fe([Pe], c + _e, s[Je(1890) + _e] || O);
          });
        }) : fe(le, c, O));
      }
      m = this[e(2136)](m, x, s, h, r), H && m === c && this[e(1341)][e(2958)] && (m = "" + d + l + c), (H || U) && this[e(1341)][e(656)] && (m = this.options[e(656)](this.options[e(2958)] ? "" + d + l + c : c, U ? m : void 0, s));
    }
    return n ? (h[e(2070)] = m, h[e(1410)] = this[e(1179)](s), h) : m;
  }
  [a(2136)](x, t, r, e, s) {
    var u, d;
    const n = a;
    if ((u = this[n(1002)]) != null && u[n(1598)]) x = this[n(1002)][n(1598)](x, { ...this[n(1341)][n(829)].defaultVariables, ...r }, r[n(2986)] || this.language || e[n(2644)], e[n(2258)], e[n(1689)], { resolved: e });
    else if (!r[n(2939)]) {
      r[n(829)] && this[n(3044)].init({ ...r, interpolation: { ...this[n(1341)][n(829)], ...r[n(829)] } });
      const l = be(x) && (((d = r == null ? void 0 : r[n(829)]) == null ? void 0 : d.skipOnVariables) !== void 0 ? r[n(829)][n(309)] : this[n(1341)].interpolation[n(309)]);
      let f;
      if (l) {
        const h = x[n(789)](this[n(3044)][n(2966)]);
        f = h && h[n(1148)];
      }
      let g = r[n(1252)] && !be(r[n(1252)]) ? r.replace : r;
      if (this.options.interpolation[n(1809)] && (g = { ...this[n(1341)][n(829)][n(1809)], ...g }), x = this.interpolator.interpolate(x, g, r[n(2986)] || this[n(1503)] || e[n(2644)], r), l) {
        const h = x[n(789)](this[n(3044)].nestingRegexp), m = h && h.length;
        f < m && (r[n(1096)] = !1);
      }
      !r.lng && e && e.res && (r[n(2986)] = this[n(1503)] || e[n(2644)]), r.nest !== !1 && (x = this[n(3044)][n(1096)](x, (...h) => {
        const m = n;
        return (s == null ? void 0 : s[0]) === h[0] && !r[m(1780)] ? (this[m(872)].warn(m(1844) + h[0] + m(759) + t[0]), null) : this[m(2918)](...h, t);
      }, r)), r.interpolation && this[n(3044)].reset();
    }
    const i = r[n(2653)] || this[n(1341)][n(2653)], c = be(i) ? [i] : i;
    return x != null && (c != null && c[n(1148)]) && r[n(1064)] !== !1 && (x = Bs[n(2703)](c, x, t, this[n(1341)] && this[n(1341)][n(2824)] ? { i18nResolved: { ...e, usedParams: this[n(1179)](r) }, ...r } : r, this)), x;
  }
  [a(855)](x, t = {}) {
    let r, e, s, n, i;
    return be(x) && (x = [x]), x.forEach((c) => {
      const u = Z;
      if (this[u(2316)](r)) return;
      const d = this[u(1412)](c, t), l = d.key;
      e = l;
      let f = d[u(1938)];
      this[u(1341)][u(2089)] && (f = f[u(1557)](this[u(1341)][u(2089)]));
      const g = t[u(459)] !== void 0 && !be(t[u(459)]), h = g && !t[u(2008)] && t[u(459)] === 0, m = t.context !== void 0 && (be(t[u(1780)]) || typeof t.context === u(867)) && t[u(1780)] !== "", v = t[u(354)] ? t.lngs : this[u(1416)][u(2018)](t[u(2986)] || this[u(1503)], t[u(633)]);
      f.forEach((k) => {
        var T, q;
        const I = u;
        this.isValidLookup(r) || (i = k, !Ka[v[0] + "-" + k] && ((T = this.utils) != null && T.hasLoadedNamespace) && !((q = this[I(2182)]) != null && q[I(2578)](i)) && (Ka[v[0] + "-" + k] = !0, this[I(872)].warn(I(636) + e + I(1962) + v[I(896)](", ") + I(507) + i + I(1667), I(1403))), v[I(430)]((R) => {
          var D;
          const P = I;
          if (this[P(2316)](r)) return;
          n = R;
          const C = [l];
          if ((D = this[P(1002)]) != null && D[P(2247)]) this[P(1002)].addLookupKeys(C, l, R, k, t);
          else {
            let O;
            g && (O = this[P(1025)][P(2090)](R, t[P(459)], t));
            const N = this[P(1341)].pluralSeparator + "zero", _ = this.options[P(1870)] + P(2008) + this[P(1341)][P(1870)];
            if (g && (t[P(2008)] && O[P(2273)](_) === 0 && C[P(3019)](l + O[P(1252)](_, this[P(1341)].pluralSeparator)), C[P(3019)](l + O), h && C[P(3019)](l + N)), m) {
              const z = "" + l + (this[P(1341)][P(716)] || "_") + t.context;
              C[P(3019)](z), g && (t[P(2008)] && O.indexOf(_) === 0 && C.push(z + O[P(1252)](_, this.options.pluralSeparator)), C[P(3019)](z + O), h && C[P(3019)](z + N));
            }
          }
          let j;
          for (; j = C.pop(); )
            !this[P(2316)](r) && (s = j, r = this[P(381)](R, k, j, t));
        }));
      });
    }), { res: r, usedKey: e, exactUsedKey: s, usedLng: n, usedNS: i };
  }
  isValidLookup(x) {
    const t = a;
    return x !== void 0 && !(!this[t(1341)][t(1432)] && x === null) && !(!this[t(1341)].returnEmptyString && x === "");
  }
  [a(381)](x, t, r, e = {}) {
    var n;
    const s = a;
    return (n = this[s(1002)]) != null && n[s(381)] ? this[s(1002)][s(381)](x, t, r, e) : this.resourceStore[s(381)](x, t, r, e);
  }
  [a(1179)](x = {}) {
    const t = a, r = [t(1890), t(2008), t(1780), t(1252), t(2986), t(354), t(633), "ns", "keySeparator", t(2916), t(383), "returnDetails", t(1811), t(2653), t(829)], e = x[t(1252)] && !be(x[t(1252)]);
    let s = e ? x.replace : x;
    if (e && typeof x[t(459)] !== t(2781) && (s[t(459)] = x.count), this[t(1341)][t(829)].defaultVariables && (s = { ...this[t(1341)][t(829)][t(1809)], ...s }), !e) {
      s = { ...s };
      for (const n of r)
        delete s[n];
    }
    return s;
  }
  static hasDefaultValue(x) {
    const t = a, r = t(1890);
    for (const e in x)
      if (Object[t(1706)][t(1446)][t(2689)](x, e) && r === e.substring(0, r[t(1148)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Za {
  constructor(x) {
    const t = a;
    this.options = x, this.supportedLngs = this[t(1341)].supportedLngs || !1, this.logger = f0[t(558)](t(1416));
  }
  getScriptPartFromCode(x) {
    const t = a;
    if (x = sx(x), !x || x[t(2273)]("-") < 0) return null;
    const r = x[t(1958)]("-");
    return r.length === 2 || (r[t(2906)](), r[r[t(1148)] - 1][t(1119)]() === "x") ? null : this[t(1571)](r.join("-"));
  }
  [a(2109)](x) {
    const t = a;
    if (x = sx(x), !x || x[t(2273)]("-") < 0) return x;
    const r = x.split("-");
    return this[t(1571)](r[0]);
  }
  formatLanguageCode(x) {
    const t = a;
    if (be(x) && x[t(2273)]("-") > -1) {
      let r;
      try {
        r = Intl[t(1513)](x)[0];
      } catch {
      }
      return r && this[t(1341)][t(2457)] && (r = r[t(1119)]()), r || (this[t(1341)].lowerCaseLng ? x[t(1119)]() : x);
    }
    return this[t(1341)][t(2391)] || this.options[t(2457)] ? x[t(1119)]() : x;
  }
  [a(2271)](x) {
    const t = a;
    return (this[t(1341)][t(451)] === t(697) || this.options[t(274)]) && (x = this[t(2109)](x)), !this[t(1934)] || !this[t(1934)][t(1148)] || this.supportedLngs.indexOf(x) > -1;
  }
  [a(1462)](x) {
    const t = a;
    if (!x) return null;
    let r;
    return x[t(430)]((e) => {
      const s = t;
      if (r) return;
      const n = this.formatLanguageCode(e);
      (!this[s(1341)][s(1934)] || this[s(2271)](n)) && (r = n);
    }), !r && this[t(1341)][t(1934)] && x[t(430)]((e) => {
      const s = t;
      if (r) return;
      const n = this[s(2130)](e);
      if (this[s(2271)](n)) return r = n;
      const i = this.getLanguagePartFromCode(e);
      if (this[s(2271)](i)) return r = i;
      r = this.options[s(1934)].find((c) => {
        const u = s;
        if (c === i) return c;
        if (!(c[u(2273)]("-") < 0 && i[u(2273)]("-") < 0) && (c[u(2273)]("-") > 0 && i.indexOf("-") < 0 && c[u(2888)](0, c[u(2273)]("-")) === i || c[u(2273)](i) === 0 && i[u(1148)] > 1))
          return c;
      });
    }), r || (r = this[t(1038)](this[t(1341)][t(633)])[0]), r;
  }
  [a(1038)](x, t) {
    const r = a;
    if (!x) return [];
    if (typeof x === r(1149) && (x = x(t)), be(x) && (x = [x]), Array[r(500)](x)) return x;
    if (!t) return x.default || [];
    let e = x[t];
    return e || (e = x[this[r(2130)](t)]), e || (e = x[this[r(1571)](t)]), e || (e = x[this[r(2109)](t)]), e || (e = x.default), e || [];
  }
  [a(2018)](x, t) {
    const r = a, e = this[r(1038)]((t === !1 ? [] : t) || this[r(1341)].fallbackLng || [], x), s = [], n = (i) => {
      const c = r;
      i && (this[c(2271)](i) ? s[c(3019)](i) : this[c(872)][c(2618)](c(1439) + i));
    };
    return be(x) && (x[r(2273)]("-") > -1 || x[r(2273)]("_") > -1) ? (this[r(1341)][r(451)] !== r(697) && n(this[r(1571)](x)), this[r(1341)][r(451)] !== r(697) && this[r(1341)][r(451)] !== "currentOnly" && n(this[r(2130)](x)), this[r(1341)].load !== r(1959) && n(this.getLanguagePartFromCode(x))) : be(x) && n(this.formatLanguageCode(x)), e[r(430)]((i) => {
      const c = r;
      s.indexOf(i) < 0 && n(this[c(1571)](i));
    }), s;
  }
}
const Ga = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Ja = { select: (o) => a(o === 1 ? 1318 : 1449), resolvedOptions: () => ({ pluralCategories: [a(1318), a(1449)] }) };
class wi {
  constructor(x, t = {}) {
    const r = a;
    this[r(1416)] = x, this[r(1341)] = t, this.logger = f0[r(558)](r(1025)), this[r(2275)] = {};
  }
  [a(1306)](x, t) {
    const r = a;
    this[r(1354)][x] = t;
  }
  clearCache() {
    const x = a;
    this[x(2275)] = {};
  }
  [a(1069)](x, t = {}) {
    const r = a, e = sx(x === "dev" ? "en" : x), s = t[r(2008)] ? r(2008) : r(2602), n = JSON.stringify({ cleanedCode: e, type: s });
    if (n in this[r(2275)]) return this[r(2275)][n];
    let i;
    try {
      i = new Intl.PluralRules(e, { type: s });
    } catch {
      if (!Intl) return this[r(872)][r(1491)]("No Intl support, please use an Intl polyfill!"), Ja;
      if (!x[r(789)](/-|_/)) return Ja;
      const u = this[r(1416)][r(2109)](x);
      i = this[r(1069)](u, t);
    }
    return this.pluralRulesCache[n] = i, i;
  }
  needsPlural(x, t = {}) {
    const r = a;
    let e = this.getRule(x, t);
    return e || (e = this[r(1069)](r(2052), t)), (e == null ? void 0 : e[r(391)]()[r(868)][r(1148)]) > 1;
  }
  [a(851)](x, t, r = {}) {
    const e = a;
    return this[e(342)](x, r)[e(2739)]((s) => "" + t + s);
  }
  [a(342)](x, t = {}) {
    const r = a;
    let e = this.getRule(x, t);
    return e || (e = this[r(1069)](r(2052), t)), e ? e[r(391)]().pluralCategories[r(1534)]((s, n) => Ga[s] - Ga[n])[r(2739)]((s) => "" + this[r(1341)].prepend + (t[r(2008)] ? r(2008) + this[r(1341)].prepend : "") + s) : [];
  }
  [a(2090)](x, t, r = {}) {
    const e = a, s = this.getRule(x, r);
    return s ? "" + this.options[e(1937)] + (r[e(2008)] ? e(2008) + this[e(1341)][e(1937)] : "") + s.select(t) : (this.logger[e(2618)](e(859) + x), this.getSuffix(e(2052), t, r));
  }
}
const Qa = (o, x, t, r = ".", e = !0) => {
  let s = li(o, x, t);
  return !s && e && be(t) && (s = Jt(o, t, r), s === void 0 && (s = Jt(x, t, r))), s;
}, Zx = (o) => o.replace(/\$/g, "$$$$");
class Xa {
  constructor(x = {}) {
    var r;
    const t = a;
    this[t(872)] = f0[t(558)](t(3044)), this[t(1341)] = x, this[t(2350)] = ((r = x == null ? void 0 : x.interpolation) == null ? void 0 : r[t(2350)]) || ((e) => e), this.init(x);
  }
  [a(2462)](x = {}) {
    const t = a;
    x[t(829)] || (x.interpolation = { escapeValue: !0 });
    const { escape: r, escapeValue: e, useRawValueToEscape: s, prefix: n, prefixEscaped: i, suffix: c, suffixEscaped: u, formatSeparator: d, unescapeSuffix: l, unescapePrefix: f, nestingPrefix: g, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: v, nestingOptionsSeparator: k, maxReplaces: I, alwaysFormat: T } = x[t(829)];
    this[t(2494)] = r !== void 0 ? r : hi, this[t(1316)] = e !== void 0 ? e : !0, this[t(1863)] = s !== void 0 ? s : !1, this[t(1004)] = n ? $0(n) : i || "{{", this[t(1176)] = c ? $0(c) : u || "}}", this[t(1291)] = d || ",", this[t(1770)] = l ? "" : f || "-", this.unescapeSuffix = this.unescapePrefix ? "" : l || "", this.nestingPrefix = g ? $0(g) : h || $0(t(1018)), this[t(1729)] = m ? $0(m) : v || $0(")"), this[t(693)] = k || ",", this[t(835)] = I || 1e3, this.alwaysFormat = T !== void 0 ? T : !1, this.resetRegExp();
  }
  [a(1721)]() {
    const x = a;
    this[x(1341)] && this[x(2462)](this[x(1341)]);
  }
  resetRegExp() {
    const x = a, t = (r, e) => {
      const s = Z;
      return (r == null ? void 0 : r[s(484)]) === e ? (r[s(2033)] = 0, r) : new RegExp(e, "g");
    };
    this[x(1244)] = t(this[x(1244)], this[x(1004)] + x(1984) + this[x(1176)]), this[x(423)] = t(this[x(423)], "" + this[x(1004)] + this[x(1770)] + x(1984) + this[x(441)] + this[x(1176)]), this[x(2966)] = t(this[x(2966)], this.nestingPrefix + x(1568) + this[x(1729)]);
  }
  [a(2718)](x, t, r, e) {
    var h;
    const s = a;
    let n, i, c;
    const u = this[s(1341)] && this[s(1341)][s(829)] && this[s(1341)][s(829)].defaultVariables || {}, d = (m) => {
      const v = s;
      if (m.indexOf(this[v(1291)]) < 0) {
        const q = Qa(t, u, m, this[v(1341)][v(2596)], this[v(1341)][v(2226)]);
        return this.alwaysFormat ? this.format(q, void 0, r, { ...e, ...t, interpolationkey: m }) : q;
      }
      const k = m[v(1958)](this[v(1291)]), I = k[v(1766)]().trim(), T = k[v(896)](this[v(1291)])[v(2845)]();
      return this[v(2350)](Qa(t, u, I, this[v(1341)].keySeparator, this[v(1341)][v(2226)]), T, r, { ...e, ...t, interpolationkey: I });
    };
    this.resetRegExp();
    const l = (e == null ? void 0 : e[s(712)]) || this.options.missingInterpolationHandler, f = ((h = e == null ? void 0 : e[s(829)]) == null ? void 0 : h.skipOnVariables) !== void 0 ? e.interpolation[s(309)] : this[s(1341)][s(829)][s(309)];
    return [{ regex: this[s(423)], safeValue: (m) => Zx(m) }, { regex: this[s(1244)], safeValue: (m) => this[s(1316)] ? Zx(this[s(2494)](m)) : Zx(m) }].forEach((m) => {
      const v = s;
      for (c = 0; n = m.regex.exec(x); ) {
        const k = n[1][v(2845)]();
        if (i = d(k), i === void 0)
          if (typeof l === v(1149)) {
            const T = l(x, n, e);
            i = be(T) ? T : "";
          } else if (e && Object[v(1706)].hasOwnProperty[v(2689)](e, k)) i = "";
          else if (f) {
            i = n[0];
            continue;
          } else this[v(872)][v(2618)](v(1547) + k + v(1781) + x), i = "";
        else !be(i) && !this[v(1863)] && (i = za(i));
        const I = m.safeValue(i);
        if (x = x[v(1252)](n[0], I), f ? (m[v(2840)].lastIndex += i.length, m[v(2840)][v(2033)] -= n[0][v(1148)]) : m[v(2840)][v(2033)] = 0, c++, c >= this[v(835)]) break;
      }
    }), x;
  }
  [a(1096)](x, t, r = {}) {
    const e = a;
    let s, n, i;
    const c = (u, d) => {
      const l = Z, f = this[l(693)];
      if (u[l(2273)](f) < 0) return u;
      const g = u[l(1958)](new RegExp(f + l(1361)));
      let h = "{" + g[1];
      u = g[0], h = this[l(2718)](h, i);
      const m = h[l(789)](/'/g), v = h.match(/"/g);
      (((m == null ? void 0 : m[l(1148)]) ?? 0) % 2 === 0 && !v || v[l(1148)] % 2 !== 0) && (h = h[l(1252)](/'/g, '"'));
      try {
        i = JSON[l(1598)](h), d && (i = { ...d, ...i });
      } catch (k) {
        return this.logger[l(2618)](l(560) + u, k), "" + u + f + h;
      }
      return i[l(1890)] && i[l(1890)][l(2273)](this[l(1004)]) > -1 && delete i[l(1890)], u;
    };
    for (; s = this.nestingRegexp.exec(x); ) {
      let u = [];
      i = { ...r }, i = i.replace && !be(i[e(1252)]) ? i[e(1252)] : i, i.applyPostProcessor = !1, delete i[e(1890)];
      const d = /{.*}/[e(1531)](s[1]) ? s[1].lastIndexOf("}") + 1 : s[1][e(2273)](this[e(1291)]);
      if (d !== -1 && (u = s[1].slice(d)[e(1958)](this[e(1291)])[e(2739)]((l) => l[e(2845)]())[e(362)](Boolean), s[1] = s[1][e(1908)](0, d)), n = t(c[e(2689)](this, s[1][e(2845)](), i), i), n && s[0] === x && !be(n)) return n;
      be(n) || (n = za(n)), !n && (this[e(872)][e(2618)](e(2574) + s[1] + " for nesting " + x), n = ""), u.length && (n = u[e(2069)]((l, f) => this[e(2350)](l, f, r[e(2986)], { ...r, interpolationkey: s[1][e(2845)]() }), n.trim())), x = x[e(1252)](s[0], n), this[e(1244)][e(2033)] = 0;
    }
    return x;
  }
}
const Si = (o) => {
  const x = a;
  let t = o[x(1119)]()[x(2845)]();
  const r = {};
  if (o.indexOf("(") > -1) {
    const e = o[x(1958)]("(");
    t = e[0][x(1119)]()[x(2845)]();
    const s = e[1][x(2888)](0, e[1][x(1148)] - 1);
    t === x(516) && s[x(2273)](":") < 0 ? r[x(516)] || (r[x(516)] = s[x(2845)]()) : t === x(1776) && s[x(2273)](":") < 0 ? r[x(2527)] || (r.range = s.trim()) : s[x(1958)](";").forEach((i) => {
      const c = x;
      if (i) {
        const [u, ...d] = i.split(":"), l = d[c(896)](":")[c(2845)]()[c(1252)](/^'+|'+$/g, ""), f = u.trim();
        r[f] || (r[f] = l), l === c(661) && (r[f] = !1), l === c(671) && (r[f] = !0), isNaN(l) || (r[f] = parseInt(l, 10));
      }
    });
  }
  return { formatName: t, formatOptions: r };
}, Ya = (o) => {
  const x = {};
  return (t, r, e) => {
    const s = Z;
    let n = e;
    e && e[s(2219)] && e[s(2439)] && e[s(2439)][e[s(2219)]] && e[e[s(2219)]] && (n = { ...n, [e[s(2219)]]: void 0 });
    const i = r + JSON.stringify(n);
    let c = x[i];
    return !c && (c = o(sx(r), e), x[i] = c), c(t);
  };
}, ki = (o) => (x, t, r) => o(sx(t), r)(x);
class Pi {
  constructor(x = {}) {
    const t = a;
    this[t(872)] = f0[t(558)]("formatter"), this[t(1341)] = x, this.init(x);
  }
  [a(2462)](x, t = { interpolation: {} }) {
    const r = a;
    this.formatSeparator = t.interpolation[r(1291)] || ",";
    const e = t[r(903)] ? Ya : ki;
    this[r(1882)] = { number: e((s, n) => {
      const i = r, c = new Intl[i(888)](s, { ...n });
      return (u) => c[i(2350)](u);
    }), currency: e((s, n) => {
      const i = r, c = new Intl[i(888)](s, { ...n, style: "currency" });
      return (u) => c[i(2350)](u);
    }), datetime: e((s, n) => {
      const i = r, c = new Intl.DateTimeFormat(s, { ...n });
      return (u) => c[i(2350)](u);
    }), relativetime: e((s, n) => {
      const i = r, c = new Intl[i(2599)](s, { ...n });
      return (u) => c[i(2350)](u, n[i(2527)] || "day");
    }), list: e((s, n) => {
      const i = r, c = new Intl.ListFormat(s, { ...n });
      return (u) => c[i(2350)](u);
    }) };
  }
  [a(986)](x, t) {
    const r = a;
    this[r(1882)][x[r(1119)]()[r(2845)]()] = t;
  }
  [a(1039)](x, t) {
    const r = a;
    this.formats[x[r(1119)]()[r(2845)]()] = Ya(t);
  }
  [a(2350)](x, t, r, e = {}) {
    const s = a, n = t.split(this[s(1291)]);
    if (n[s(1148)] > 1 && n[0][s(2273)]("(") > 1 && n[0][s(2273)](")") < 0 && n[s(304)]((c) => c[s(2273)](")") > -1)) {
      const c = n[s(990)]((u) => u[s(2273)](")") > -1);
      n[0] = [n[0], ...n[s(2176)](1, c)][s(896)](this.formatSeparator);
    }
    return n[s(2069)]((c, u) => {
      var g;
      const d = s, { formatName: l, formatOptions: f } = Si(u);
      if (this[d(1882)][l]) {
        let h = c;
        try {
          const m = ((g = e == null ? void 0 : e[d(2439)]) == null ? void 0 : g[e[d(2219)]]) || {}, v = m.locale || m.lng || e[d(1355)] || e[d(2986)] || r;
          h = this.formats[l](c, v, { ...f, ...e, ...m });
        } catch (m) {
          this[d(872)].warn(m);
        }
        return h;
      } else this.logger[d(2618)](d(2116) + l);
      return c;
    }, x);
  }
}
const Ii = (o, x) => {
  const t = a;
  o.pending[x] !== void 0 && (delete o.pending[x], o[t(1577)]--);
};
class Ei extends Ax {
  constructor(x, t, r, e = {}) {
    var n, i;
    const s = a;
    super(), this.backend = x, this[s(2788)] = t, this[s(2577)] = r, this[s(1416)] = r[s(1416)], this[s(1341)] = e, this.logger = f0.create(s(2976)), this[s(2460)] = [], this[s(2088)] = e[s(2088)] || 10, this[s(2775)] = 0, this.maxRetries = e[s(1779)] >= 0 ? e[s(1779)] : 5, this[s(366)] = e[s(366)] >= 1 ? e[s(366)] : 350, this[s(1980)] = {}, this[s(2336)] = [], (i = (n = this[s(1479)]) == null ? void 0 : n.init) == null || i.call(n, r, e[s(1479)], e);
  }
  [a(1981)](x, t, r, e) {
    const s = a, n = {}, i = {}, c = {}, u = {};
    return x.forEach((d) => {
      const l = Z;
      let f = !0;
      t[l(430)]((g) => {
        const h = l, m = d + "|" + g;
        !r[h(2232)] && this[h(2788)][h(2874)](d, g) ? this[h(1980)][m] = 2 : this[h(1980)][m] < 0 || (this[h(1980)][m] === 1 ? i[m] === void 0 && (i[m] = !0) : (this[h(1980)][m] = 1, f = !1, i[m] === void 0 && (i[m] = !0), n[m] === void 0 && (n[m] = !0), u[g] === void 0 && (u[g] = !0)));
      }), f || (c[d] = !0);
    }), (Object[s(1877)](n)[s(1148)] || Object.keys(i).length) && this[s(2336)][s(3019)]({ pending: i, pendingCount: Object[s(1877)](i).length, loaded: {}, errors: [], callback: e }), { toLoad: Object.keys(n), pending: Object[s(1877)](i), toLoadLanguages: Object[s(1877)](c), toLoadNamespaces: Object[s(1877)](u) };
  }
  loaded(x, t, r) {
    const e = a, s = x[e(1958)]("|"), n = s[0], i = s[1];
    t && this[e(1271)]("failedLoading", n, i, t), !t && r && this[e(2788)].addResourceBundle(n, i, r, void 0, void 0, { skipCopy: !0 }), this[e(1980)][x] = t ? -1 : 2, t && r && (this[e(1980)][x] = 0);
    const c = {};
    this[e(2336)][e(430)]((u) => {
      const d = e;
      di(u[d(1257)], [n], i), Ii(u, x), t && u.errors[d(3019)](t), u[d(1577)] === 0 && !u.done && (Object[d(1877)](u[d(1257)]).forEach((l) => {
        const f = d;
        c[l] || (c[l] = {});
        const g = u[f(1257)][l];
        g.length && g[f(430)]((h) => {
          c[l][h] === void 0 && (c[l][h] = !0);
        });
      }), u.done = !0, u[d(1139)][d(1148)] ? u[d(812)](u[d(1139)]) : u[d(812)]());
    }), this[e(1271)]("loaded", c), this[e(2336)] = this[e(2336)][e(362)]((u) => !u.done);
  }
  [a(765)](x, t, r, e = 0, s = this[a(366)], n) {
    const i = a;
    if (!x[i(1148)]) return n(null, {});
    if (this[i(2775)] >= this.maxParallelReads) {
      this[i(2460)][i(3019)]({ lng: x, ns: t, fcName: r, tried: e, wait: s, callback: n });
      return;
    }
    this[i(2775)]++;
    const c = (d, l) => {
      const f = i;
      if (this[f(2775)]--, this.waitingReads[f(1148)] > 0) {
        const g = this.waitingReads[f(1766)]();
        this[f(765)](g[f(2986)], g.ns, g[f(2894)], g[f(1487)], g[f(2682)], g[f(812)]);
      }
      if (d && l && e < this[f(1779)]) {
        setTimeout(() => {
          const g = f;
          this[g(765)][g(2689)](this, x, t, r, e + 1, s * 2, n);
        }, s);
        return;
      }
      n(d, l);
    }, u = this.backend[r].bind(this[i(1479)]);
    if (u[i(1148)] === 2) {
      try {
        const d = u(x, t);
        d && typeof d[i(634)] === i(1149) ? d[i(634)]((l) => c(null, l))[i(1045)](c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return u(x, t, c);
  }
  prepareLoading(x, t, r = {}, e) {
    const s = a;
    if (!this.backend) return this.logger[s(2618)](s(1852)), e && e();
    be(x) && (x = this[s(1416)][s(2018)](x)), be(t) && (t = [t]);
    const n = this[s(1981)](x, t, r, e);
    if (!n[s(2071)][s(1148)])
      return n.pending.length || e(), null;
    n.toLoad.forEach((i) => {
      this[s(2298)](i);
    });
  }
  load(x, t, r) {
    this.prepareLoading(x, t, {}, r);
  }
  [a(2232)](x, t, r) {
    this.prepareLoading(x, t, { reload: !0 }, r);
  }
  loadOne(x, t = "") {
    const r = a, e = x[r(1958)]("|"), s = e[0], n = e[1];
    this[r(765)](s, n, r(765), void 0, void 0, (i, c) => {
      const u = r;
      i && this.logger.warn(t + u(2937) + n + u(1086) + s + " failed", i), !i && c && this[u(872)][u(2127)](t + "loaded namespace " + n + u(1086) + s, c), this[u(1257)](x, i, c);
    });
  }
  [a(1332)](x, t, r, e, s, n = {}, i = () => {
  }) {
    var u, d, l, f, g;
    const c = a;
    if ((d = (u = this[c(2577)]) == null ? void 0 : u[c(2182)]) != null && d[c(2578)] && !((f = (l = this[c(2577)]) == null ? void 0 : l[c(2182)]) != null && f[c(2578)](t))) {
      this[c(872)][c(2618)]('did not save key "' + r + c(869) + t + c(1667), c(1403));
      return;
    }
    if (!(r == null || r === "")) {
      if ((g = this.backend) != null && g[c(558)]) {
        const h = { ...n, isUpdate: s }, m = this.backend[c(558)][c(2764)](this[c(1479)]);
        if (m[c(1148)] < 6) try {
          let v;
          m[c(1148)] === 5 ? v = m(x, t, r, e, h) : v = m(x, t, r, e), v && typeof v[c(634)] == "function" ? v[c(634)]((k) => i(null, k))[c(1045)](i) : i(null, v);
        } catch (v) {
          i(v);
        }
        else m(x, t, r, e, i, h);
      }
      !x || !x[0] || this[c(2788)][c(2531)](x[0], t, r, e);
    }
  }
}
const er = () => ({ debug: !1, initAsync: !0, ns: [a(1747)], defaultNS: [a(1747)], fallbackLng: [a(2052)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: a(2497), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: "fallback", saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (o) => {
  const x = a;
  let t = {};
  if (typeof o[1] === x(2220) && (t = o[1]), be(o[1]) && (t[x(1890)] = o[1]), be(o[2]) && (t.tDescription = o[2]), typeof o[2] === x(2220) || typeof o[3] === x(2220)) {
    const r = o[3] || o[2];
    Object[x(1877)](r)[x(430)]((e) => {
      t[e] = r[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (o) => o, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: a(1018), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), xr = (o) => {
  var t, r;
  const x = a;
  return be(o.ns) && (o.ns = [o.ns]), be(o[x(633)]) && (o[x(633)] = [o[x(633)]]), be(o.fallbackNS) && (o.fallbackNS = [o[x(2089)]]), ((r = (t = o[x(1934)]) == null ? void 0 : t[x(2273)]) == null ? void 0 : r.call(t, x(2421))) < 0 && (o.supportedLngs = o[x(1934)][x(1557)]([x(2421)])), typeof o[x(413)] === x(2903) && (o.initAsync = o[x(413)]), o;
}, px = () => {
}, Ri = (o) => {
  const x = a;
  Object.getOwnPropertyNames(Object[x(554)](o)).forEach((r) => {
    const e = x;
    typeof o[r] === e(1149) && (o[r] = o[r][e(2764)](o));
  });
};
class ex extends Ax {
  constructor(x = {}, t) {
    const r = a;
    if (super(), this[r(1341)] = xr(x), this[r(2577)] = {}, this[r(872)] = f0, this.modules = { external: [] }, Ri(this), t && !this[r(1932)] && !x[r(1853)]) {
      if (!this.options[r(312)]) return this[r(2462)](x, t), this;
      setTimeout(() => {
        this[r(2462)](x, t);
      }, 0);
    }
  }
  init(x = {}, t) {
    const r = a;
    this.isInitializing = !0, typeof x === r(1149) && (t = x, x = {}), x[r(1674)] == null && x.ns && (be(x.ns) ? x[r(1674)] = x.ns : x.ns[r(2273)](r(1747)) < 0 && (x[r(1674)] = x.ns[0]));
    const e = er();
    this[r(1341)] = { ...e, ...this.options, ...xr(x) }, this[r(1341)][r(829)] = { ...e[r(829)], ...this[r(1341)][r(829)] }, x.keySeparator !== void 0 && (this.options[r(836)] = x[r(2596)]), x[r(2916)] !== void 0 && (this[r(1341)][r(2899)] = x[r(2916)]);
    const s = (d) => {
      const l = r;
      return d ? typeof d === l(1149) ? new d() : d : null;
    };
    if (!this.options.isClone) {
      this.modules[r(872)] ? f0[r(2462)](s(this[r(1250)].logger), this[r(1341)]) : f0[r(2462)](null, this.options);
      let d;
      this.modules[r(831)] ? d = this[r(1250)][r(831)] : d = Pi;
      const l = new Za(this[r(1341)]);
      this[r(2788)] = new Wa(this[r(1341)].resources, this[r(1341)]);
      const f = this.services;
      f[r(872)] = f0, f[r(1793)] = this[r(2788)], f.languageUtils = l, f.pluralResolver = new wi(l, { prepend: this[r(1341)][r(1870)], simplifyPluralSuffix: this[r(1341)].simplifyPluralSuffix }), this[r(1341)].interpolation[r(2350)] && this.options[r(829)][r(2350)] !== e[r(829)][r(2350)] && this[r(872)].deprecate(r(2809)), d && (!this.options[r(829)].format || this.options[r(829)][r(2350)] === e.interpolation[r(2350)]) && (f[r(831)] = s(d), f[r(831)].init && f[r(831)][r(2462)](f, this[r(1341)]), this[r(1341)].interpolation[r(2350)] = f[r(831)][r(2350)][r(2764)](f[r(831)])), f.interpolator = new Xa(this.options), f.utils = { hasLoadedNamespace: this[r(2578)].bind(this) }, f.backendConnector = new Ei(s(this[r(1250)][r(1479)]), f[r(1793)], f, this[r(1341)]), f[r(2976)].on("*", (h, ...m) => {
        this[r(1271)](h, ...m);
      }), this.modules[r(1750)] && (f.languageDetector = s(this[r(1250)][r(1750)]), f.languageDetector[r(2462)] && f[r(1750)].init(f, this[r(1341)].detection, this.options)), this.modules[r(1002)] && (f[r(1002)] = s(this.modules[r(1002)]), f.i18nFormat[r(2462)] && f[r(1002)][r(2462)](this)), this[r(2329)] = new Nx(this.services, this.options), this[r(2329)].on("*", (h, ...m) => {
        this[r(1271)](h, ...m);
      }), this[r(1250)][r(1719)][r(430)]((h) => {
        const m = r;
        h[m(2462)] && h[m(2462)](this);
      });
    }
    if (this[r(2350)] = this[r(1341)][r(829)].format, t || (t = px), this[r(1341)][r(633)] && !this[r(2577)][r(1750)] && !this[r(1341)].lng) {
      const d = this[r(2577)][r(1416)][r(1038)](this.options[r(633)]);
      d.length > 0 && d[0] !== r(2052) && (this[r(1341)][r(2986)] = d[0]);
    }
    !this.services[r(1750)] && !this.options[r(2986)] && this[r(872)][r(2618)]("init: no languageDetector is used and no lng is defined"), [r(381), r(2874), r(1482), r(501)].forEach((d) => {
      this[d] = (...l) => this.store[d](...l);
    }), [r(2531), r(512), r(1022), "removeResourceBundle"][r(430)]((d) => {
      this[d] = (...l) => (this.store[d](...l), this);
    });
    const c = J0(), u = () => {
      const d = r, l = (f, g) => {
        const h = Z;
        this.isInitializing = !1, this[h(1932)] && !this.initializedStoreOnce && this.logger.warn(h(897)), this[h(1932)] = !0, this.options[h(1853)] || this.logger[h(2127)]("initialized", this[h(1341)]), this[h(1271)](h(1584), this[h(1341)]), c[h(855)](g), t(f, g);
      };
      if (this.languages && !this.isInitialized) return l(null, this.t[d(2764)](this));
      this[d(1180)](this[d(1341)][d(2986)], l);
    };
    return this.options[r(1813)] || !this.options[r(312)] ? u() : setTimeout(u, 0), c;
  }
  [a(1254)](x, t = px) {
    var n, i;
    const r = a;
    let e = t;
    const s = be(x) ? x : this[r(1503)];
    if (typeof x === r(1149) && (e = x), !this[r(1341)][r(1813)] || this.options[r(2292)]) {
      if ((s == null ? void 0 : s.toLowerCase()) === r(2421) && (!this[r(1341)][r(2309)] || this[r(1341)][r(2309)].length === 0)) return e();
      const c = [], u = (d) => {
        const l = r;
        if (!d || d === "cimode") return;
        this.services[l(1416)][l(2018)](d)[l(430)]((g) => {
          const h = l;
          g !== h(2421) && c[h(2273)](g) < 0 && c[h(3019)](g);
        });
      };
      s ? u(s) : this[r(2577)][r(1416)].getFallbackCodes(this[r(1341)][r(633)])[r(430)]((l) => u(l)), (i = (n = this.options.preload) == null ? void 0 : n[r(430)]) == null || i.call(n, (d) => u(d)), this[r(2577)][r(2976)].load(c, this.options.ns, (d) => {
        const l = r;
        !d && !this[l(1161)] && this.language && this[l(2124)](this.language), e(d);
      });
    } else e(null);
  }
  [a(2801)](x, t, r) {
    const e = a, s = J0();
    return typeof x === e(1149) && (r = x, x = void 0), typeof t == "function" && (r = t, t = void 0), x || (x = this[e(658)]), t || (t = this[e(1341)].ns), r || (r = px), this[e(2577)][e(2976)].reload(x, t, (n) => {
      s.resolve(), r(n);
    }), s;
  }
  [a(1202)](x) {
    const t = a;
    if (!x) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!x[t(2291)]) throw new Error(t(1384));
    return x[t(2291)] === t(1479) && (this[t(1250)][t(1479)] = x), (x[t(2291)] === t(872) || x[t(2127)] && x.warn && x[t(1491)]) && (this[t(1250)][t(872)] = x), x[t(2291)] === t(1750) && (this[t(1250)].languageDetector = x), x.type === t(1002) && (this[t(1250)][t(1002)] = x), x[t(2291)] === t(1972) && Bs[t(2137)](x), x[t(2291)] === t(831) && (this[t(1250)].formatter = x), x[t(2291)] === t(1658) && this[t(1250)][t(1719)][t(3019)](x), this;
  }
  setResolvedLanguage(x) {
    const t = a;
    if (!(!x || !this[t(658)]) && !([t(2421), t(2052)].indexOf(x) > -1)) {
      for (let r = 0; r < this[t(658)][t(1148)]; r++) {
        const e = this[t(658)][r];
        if (!([t(2421), "dev"].indexOf(e) > -1) && this[t(2788)][t(1031)](e)) {
          this[t(1161)] = e;
          break;
        }
      }
      !this[t(1161)] && this[t(658)][t(2273)](x) < 0 && this[t(2788)].hasLanguageSomeTranslations(x) && (this[t(1161)] = x, this[t(658)].unshift(x));
    }
  }
  [a(1180)](x, t) {
    const r = a;
    this[r(2030)] = x;
    const e = J0();
    this.emit(r(2216), x);
    const s = (c) => {
      const u = r;
      this[u(1503)] = c, this[u(658)] = this[u(2577)][u(1416)][u(2018)](c), this[u(1161)] = void 0, this.setResolvedLanguage(c);
    }, n = (c, u) => {
      const d = r;
      u ? this.isLanguageChangingTo === x && (s(u), this[d(2329)][d(1180)](u), this[d(2030)] = void 0, this[d(1271)](d(1408), u), this[d(872)][d(2127)]("languageChanged", u)) : this[d(2030)] = void 0, e[d(855)]((...l) => this.t(...l)), t && t(c, (...l) => this.t(...l));
    }, i = (c) => {
      var f, g;
      const u = r;
      !x && !c && this[u(2577)][u(1750)] && (c = []);
      const d = be(c) ? c : c && c[0], l = this.store[u(1031)](d) ? d : this[u(2577)][u(1416)][u(1462)](be(c) ? [c] : c);
      l && (!this[u(1503)] && s(l), this.translator[u(1503)] || this[u(2329)][u(1180)](l), (g = (f = this[u(2577)].languageDetector) == null ? void 0 : f[u(1791)]) == null || g.call(f, l)), this[u(1254)](l, (h) => {
        n(h, l);
      });
    };
    return !x && this[r(2577)][r(1750)] && !this[r(2577)][r(1750)][r(2538)] ? i(this[r(2577)][r(1750)][r(1541)]()) : !x && this[r(2577)].languageDetector && this[r(2577)][r(1750)][r(2538)] ? this[r(2577)][r(1750)][r(1541)].length === 0 ? this[r(2577)][r(1750)][r(1541)]()[r(634)](i) : this[r(2577)].languageDetector[r(1541)](i) : i(x), e;
  }
  [a(568)](x, t, r) {
    const e = a, s = (n, i, ...c) => {
      const u = Z;
      let d;
      typeof i !== u(2220) ? d = this[u(1341)][u(2262)]([n, i][u(1557)](c)) : d = { ...i }, d[u(2986)] = d[u(2986)] || s[u(2986)], d[u(354)] = d[u(354)] || s.lngs, d.ns = d.ns || s.ns, d[u(2691)] !== "" && (d[u(2691)] = d[u(2691)] || r || s[u(2691)]);
      const l = this[u(1341)][u(2596)] || ".";
      let f;
      return d[u(2691)] && Array[u(500)](n) ? f = n.map((g) => {
        const h = u;
        return typeof g === h(1149) && (g = Qt(g, { ...this[h(1341)], ...i })), "" + d.keyPrefix + l + g;
      }) : (typeof n == "function" && (n = Qt(n, { ...this[u(1341)], ...i })), f = d[u(2691)] ? "" + d[u(2691)] + l + n : n), this.t(f, d);
    };
    return be(x) ? s[e(2986)] = x : s[e(354)] = x, s.ns = t, s[e(2691)] = r, s;
  }
  t(...x) {
    var r;
    const t = a;
    return (r = this[t(2329)]) == null ? void 0 : r[t(2918)](...x);
  }
  [a(722)](...x) {
    var r;
    return (r = this[a(2329)]) == null ? void 0 : r.exists(...x);
  }
  [a(2355)](x) {
    const t = a;
    this[t(1341)][t(1674)] = x;
  }
  hasLoadedNamespace(x, t = {}) {
    const r = a;
    if (!this[r(1932)]) return this[r(872)].warn(r(975), this[r(658)]), !1;
    if (!this[r(658)] || !this.languages.length) return this[r(872)][r(2618)](r(296), this[r(658)]), !1;
    const e = t.lng || this[r(1161)] || this[r(658)][0], s = this[r(1341)] ? this[r(1341)].fallbackLng : !1, n = this[r(658)][this[r(658)][r(1148)] - 1];
    if (e.toLowerCase() === r(2421)) return !0;
    const i = (c, u) => {
      const d = r, l = this[d(2577)][d(2976)].state[c + "|" + u];
      return l === -1 || l === 0 || l === 2;
    };
    if (t[r(1537)]) {
      const c = t[r(1537)](this, i);
      if (c !== void 0) return c;
    }
    return !!(this[r(2874)](e, x) || !this.services.backendConnector[r(1479)] || this[r(1341)].resources && !this[r(1341)][r(2292)] || i(e, x) && (!s || i(n, x)));
  }
  [a(551)](x, t) {
    const r = a, e = J0();
    return this.options.ns ? (be(x) && (x = [x]), x[r(430)]((s) => {
      const n = r;
      this[n(1341)].ns.indexOf(s) < 0 && this[n(1341)].ns[n(3019)](s);
    }), this.loadResources((s) => {
      e.resolve(), t && t(s);
    }), e) : (t && t(), Promise[r(855)]());
  }
  [a(2506)](x, t) {
    const r = a, e = J0();
    be(x) && (x = [x]);
    const s = this.options[r(2309)] || [], n = x[r(362)]((i) => s[r(2273)](i) < 0 && this[r(2577)].languageUtils[r(2271)](i));
    return n[r(1148)] ? (this[r(1341)][r(2309)] = s[r(1557)](n), this[r(1254)]((i) => {
      e[r(855)](), t && t(i);
    }), e) : (t && t(), Promise[r(855)]());
  }
  [a(728)](x) {
    var s, n;
    const t = a;
    if (x || (x = this[t(1161)] || (((s = this[t(658)]) == null ? void 0 : s.length) > 0 ? this.languages[0] : this.language)), !x) return t(3003);
    try {
      const i = new Intl[t(1854)](x);
      if (i && i[t(2756)]) {
        const c = i.getTextInfo();
        if (c && c[t(406)]) return c.direction;
      }
    } catch {
    }
    const r = ["ar", t(2885), "sqr", t(2198), t(1393), t(642), t(591), t(1573), t(751), t(2173), t(1210), "acq", t(2044), t(2246), t(2416), t(2920), t(2501), t(300), "aec", "afb", t(1076), t(466), t(2550), t(1587), t(1106), t(1488), t(1753), t(526), "auz", t(775), "ayh", t(2129), t(330), t(2235), t(993), t(2185), "he", "iw", "ps", "pbt", "pbu", "pst", t(2452), t(2239), "ug", "ur", t(2929), t(1307), t(1127), "ji", "yi", t(1169), t(1231), t(2053), "fa", t(756), t(1988), t(491), t(1755), "dv", t(692), t(1812)], e = ((n = this[t(2577)]) == null ? void 0 : n[t(1416)]) || new Za(er());
    return x.toLowerCase()[t(2273)]("-latn") > 1 ? "ltr" : r[t(2273)](e.getLanguagePartFromCode(x)) > -1 || x[t(1119)]()[t(2273)]("-arab") > 1 ? t(3003) : "ltr";
  }
  static [a(2930)](x = {}, t) {
    const r = a, e = new ex(x, t);
    return e[r(2930)] = ex[r(2930)], e;
  }
  [a(1216)](x = {}, t = px) {
    const r = a, e = x[r(335)];
    e && delete x[r(335)];
    const s = { ...this[r(1341)], ...x, isClone: !0 }, n = new ex(s);
    if ((x[r(819)] !== void 0 || x[r(1004)] !== void 0) && (n[r(872)] = n.logger[r(820)](x)), [r(2788), r(2577), r(1503)][r(430)]((c) => {
      n[c] = this[c];
    }), n.services = { ...this.services }, n[r(2577)].utils = { hasLoadedNamespace: n.hasLoadedNamespace.bind(n) }, e) {
      const c = Object[r(1877)](this[r(2788)].data)[r(2069)]((u, d) => {
        const l = r;
        return u[d] = { ...this[l(2788)][l(1506)][d] }, u[d] = Object.keys(u[d])[l(2069)]((f, g) => (f[g] = { ...u[d][g] }, f), u[d]), u;
      }, {});
      n[r(2788)] = new Wa(c, s), n.services[r(1793)] = n[r(2788)];
    }
    return x[r(829)] && (n[r(2577)][r(3044)] = new Xa(s)), n[r(2329)] = new Nx(n[r(2577)], s), n[r(2329)].on("*", (c, ...u) => {
      n.emit(c, ...u);
    }), n[r(2462)](s, t), n.translator.options = s, n.translator[r(2976)][r(2577)][r(2182)] = { hasLoadedNamespace: n[r(2578)].bind(n) }, n;
  }
  toJSON() {
    const x = a;
    return { options: this.options, store: this[x(2788)], language: this.language, languages: this[x(658)], resolvedLanguage: this[x(1161)] };
  }
}
const Xe = ex.createInstance();
Xe.createInstance, Xe[a(728)], Xe.init, Xe[a(1254)], Xe[a(2801)], Xe.use, Xe.changeLanguage, Xe[a(568)], Xe.t, Xe[a(722)], Xe[a(2355)], Xe.hasLoadedNamespace, Xe.loadNamespaces, Xe[a(2506)];
function Ci() {
  const o = a;
  if (typeof navigator !== o(2781) && navigator[o(1503)]) return navigator[o(1503)] === o(1528) ? "zh-CN" : o(2650);
  try {
    const x = typeof require !== o(2781) ? require : void 0;
    if (x)
      return x(o(1020))[o(779)][o(1586)][o(1654)]("zh") ? "zh-CN" : o(2650);
  } catch {
  }
  return "en-US";
}
let Ks = Ci();
const Fi = { "zh-CN": {}, "en-US": {} };
function Xt(o) {
  const x = a, t = o === x(1528) ? oi : ii, r = Fi[o];
  return { ...t, ...r };
}
function _i() {
  return Ks;
}
function Yt(o, x = {}) {
  const t = a;
  let e = Xt(Ks)[o];
  return e ? typeof e === t(2028) ? e[t(1252)](/\{\{(\w+)\}\}/g, (s, n) => x[n] !== void 0 ? String(x[n]) : s) : e : o;
}
const Ni = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Ti = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, qi = (o) => Ti[o], Ai = (o) => o[a(1252)](Ni, qi);
let tr = { bindI18n: a(1408), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", a(482), "i", "p"], useSuspense: !0, unescape: Ai };
const Oi = (o = {}) => {
  tr = { ...tr, ...o };
}, Di = { type: a(1658), init(o) {
  Oi(o.options.react);
} };
!Xe[a(1932)] && Xe.use(Di)[a(2462)]({ resources: { "zh-CN": { translation: Xt(a(1528)) }, "en-US": { translation: Xt(a(2650)) } }, lng: _i(), fallbackLng: "en-US", interpolation: { escapeValue: !1 } });
globalThis.sdpppX2 = globalThis[a(438)] || {};
const xx = globalThis.sdpppX2, F0 = [];
xx.widgetable = xx[a(1901)] || {}, xx[a(1901)][a(986)] = function(o, x) {
  const t = a;
  typeof x === t(1149) ? F0[t(3019)]([o, { formatter: x, setter: null }]) : F0[t(3019)]([o, x]);
};
function ji(o, x, t) {
  var c;
  const r = a, e = F0[r(304)](([u]) => u == r(479)), s = F0[r(304)](([u]) => ia(u, o[r(2291)])) || e;
  let n = !1;
  if (s) {
    const u = s[1][r(429)];
    u && (n = !!u(o, x, t));
  }
  !n && (o[r(1204)][x][r(935)] = t), (c = (Ne.workflowManager || Ne.extensionManager[r(1774)])[r(1763)]) == null || c[r(2225)][r(754)]();
}
function Tx(o) {
  const x = a, t = {}, r = F0[x(304)](([e]) => e == x(479));
  return o[x(2844)].forEach((e) => {
    const s = x;
    if (!e[s(1204)] || e[s(1204)].length == 0) return;
    const n = F0[s(304)](([i]) => ia(i, e.type)) || r;
    if (n) try {
      const i = n[1][s(831)](e);
      i && (t[e.id] = i[s(1204)][s(2739)]((c) => c.value));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function ea(o, x) {
  var s, n, i;
  const t = a;
  if (!o) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const r = o.nodes[t(2739)]((c) => {
    const u = t;
    if (c[u(645)] != 0) return;
    const d = bx(c);
    if (!d || d[u(1654)](".") || !c[u(1204)] || c[u(1204)][u(1148)] == 0) return;
    let l = F0[u(304)](([m]) => ia(m, c[u(2291)]));
    if (l) try {
      const m = l[1][u(831)](c);
      if (m) return m.id = c.id, m[u(410)] = m[u(1204)][u(2069)]((v, k) => v + (k[u(2269)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: d, uiWeightSum: 12, widgets: [{ outputType: u(1491), value: Yt(u(2304), l[0]) + (m[u(2461)] || m || ""), name: "", options: {} }] };
    }
    if (!d[u(1654)]("#")) return null;
    let f = c.widgets;
    const g = F0[u(304)](([m]) => m == "__DEFAULT__");
    if (g) {
      const m = g[1][u(831)](c);
      if (m) return Object[u(2363)](m, { uiWeightSum: m.widgets[u(2069)]((v, k) => v + (k.uiWeight || 12), 0) });
    }
    const h = { id: c.id, title: d, widgets: f[u(2739)]((m) => ({ name: m.label || m[u(1166)], outputType: m[u(2291)] || u(2028), value: m.value, options: m[u(1341)] })) };
    return Object[u(2363)](h, { uiWeightSum: h[u(1204)][u(2069)]((m, v) => m + (v.uiWeight || 12), 0) });
  })[t(362)](Boolean)[t(1534)]((c, u) => {
    const d = t;
    let l = bx(c), f = bx(u);
    return l = l.startsWith("#") ? l[d(1908)](1)[d(2845)]() : l[d(2845)](), f = f[d(1654)]("#") ? f[d(1908)](1)[d(2845)]() : f[d(2845)](), l.localeCompare(f);
  }), e = ((n = (s = o.nodes.find((c) => c[t(2291)] == "Note" && c[t(2673)][t(789)](/SD-?PPP/i))) == null ? void 0 : s[t(1204)][0]) == null ? void 0 : n[t(935)]) || "";
  return { widgetablePath: ((i = x[t(2617)].extra) == null ? void 0 : i[t(1162)]) || x[t(648)], widgetableID: x.activeState.id, nodes: r[t(2069)]((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: r[t(2739)]((c) => c.id), options: {} };
}
function ia(o, x) {
  const t = a, r = o.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*")[t(1252)](/\?/g, ".");
  return new RegExp("^" + r + "$")[t(1531)](x);
}
function bx(o, x = "") {
  var e;
  const t = a;
  let r = x || o.title || "";
  return o[t(2836)] && (r[t(1654)]("#") || r.startsWith(".")) ? o.setProperty(t(289), r) : r = ((e = o.properties) == null ? void 0 : e[t(289)]) || r, r;
}
xx[a(833)] = bx;
const xa = ox[a(1735)](a(956)), ar = /* @__PURE__ */ new Set();
Ee[a(1748)](a(1456), async (o) => {
  const x = a;
  return requestAnimationFrame(vn), o[x(922)].forEach(({ nodeID: t, widgetIndex: r, value: e }) => {
    const s = x, n = Ne[s(2603)][s(2844)][s(304)]((i) => i.id == t);
    ji(n, r, e);
  }), { success: !0 };
}), Ee[a(1748)](a(1089), async (o) => {
  const x = a, { workflow_path: t } = o, r = !ar.has(t), e = o[x(1721)] || r;
  ar[x(986)](t);
  const s = Ne[x(1108)][x(1774)] || Ne[x(878)], n = s[x(1874)][x(304)]((c) => c[x(1422)] === t || c[x(648)] === t || c[x(648)] === x(1483) + t);
  if (!e) {
    const c = await Li(s, n);
    if (xa(x(1133) + c), c) await Gx(s, n);
    else try {
      await i(s, n);
    } catch {
      await Gx(s, n);
    }
    return { success: !0 };
  }
  return await Gx(s, n), { success: !0 };
  async function i(c, u) {
    const d = x;
    xa("openWorkflow: " + u[d(648)], u[d(2710)]), Ne[d(878)] == c ? await u.load() : (await c[d(1089)](u), await Ne[d(437)](JSON[d(1598)](JSON[d(3038)](u.initialState)), !0, !0, u, {}));
  }
}), Ee[a(1748)](a(2987), async function(o) {
  const x = a;
  let { workflow_content: t, workflow_path: r } = o;
  return t.extra = { ...t[x(2769)] || {}, sdppp_workflow_alias: r }, await Ne[x(437)](t), { success: !0 };
}), Ee[a(1748)]("listWorkflows", async (o) => {
  var s;
  const x = a, t = Ne.workflowManager || Ne[x(1108)].workflow;
  (s = t[x(615)]) == null || s.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t.workflows[x(2739)]((n) => n[x(648)][x(1252)]("workflows/", ""));
  try {
    const n = new Headers(), i = localStorage[x(2157)]("Comfy.userId");
    i && n[x(823)](x(1293), i);
    const c = await fetch("./api/userdata/workflows%2F.index.json", { headers: n });
    let u = [];
    c.ok && (u = (await c[x(780)]())[x(1128)][x(2739)]((l) => l.replace(x(1483), ""))), e.sort((d, l) => {
      const f = x, g = u[f(555)](d), h = u.includes(l);
      return g && !h ? -1 : !g && h ? 1 : d.localeCompare(l);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), Ee.implementAction(a(2626), async (o) => {
  var n;
  const x = a, { workflow_path: t, from_sid: r } = o, e = Ne.workflowManager || Ne[x(1108)].workflow, s = e[x(1874)][x(304)]((i) => i.fullFilename === t || i.path === t || i[x(648)] === x(1483) + t);
  if (!s) throw new Error(x(433));
  return ((n = e[x(1763)]) == null ? void 0 : n.id) != s.id && await Ne[x(1089)](t, r, !1), s.changeTracker[x(754)](), await e[x(2626)](s), { success: !0 };
});
async function Li(o, x) {
  var e, s, n;
  const t = a;
  if (!x || !(((e = o[t(1763)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((s = x.changeTracker) != null && s[t(754)]) try {
    x[t(2225)][t(754)]();
  } catch (i) {
    console[t(2618)](t(2152), i);
  }
  try {
    const i = (n = Ne.graph) == null ? void 0 : n[t(1803)](), c = x[t(2617)];
    if (!i || !c) return !1;
    const u = JSON[t(3038)](i), d = JSON[t(3038)](c);
    return u !== d;
  } catch (i) {
    return console[t(2618)](t(2081), i), !1;
  }
}
async function Gx(o, x) {
  var e;
  const t = a;
  xa(t(3002) + x[t(648)]);
  async function r(s, n) {
    const i = t;
    Ne[i(878)] == s ? await n[i(451)]() : (await s.openWorkflow(n), await Ne[i(437)](JSON[i(1598)](JSON[i(3038)](n.activeState)), !0, !0, n, {}));
  }
  if ((x[t(736)] || (e = o[t(736)]) != null && e.call(o, x)) && o.openWorkflows[t(1148)] === 1) {
    const s = o[t(828)]();
    o[t(1089)](s);
  } else await r(o, o.openWorkflows[0] == x ? o.openWorkflows[1] : o[t(799)][0]);
  await o[t(976)](x, !1), await new Promise((s) => requestAnimationFrame(s)), await r(o, x);
}
const nx = ox[a(1735)]("workflow-run"), j0 = /* @__PURE__ */ new Map();
let qx = [];
const Jx = { hijacked: !1, originalQueuePrompt: null };
function Mi(o, x) {
  const t = a, r = j0[t(1507)](o);
  nx(t(2863), o, x, r, j0), r && r.resolveImage(x);
}
Ee[a(1748)](a(2466), async () => {
  const o = a;
  await Ne[o(2753)][o(341)](o(2336)), await Ne[o(2753)].interrupt();
  const x = Array[o(1546)](j0[o(922)]());
  j0[o(277)]();
  for (const t of x)
    try {
      t[o(1843)](new Error(o(319)));
    } catch {
    }
  return { success: !0 };
}), Ee[a(1748)](a(1343), async function* (o) {
  const x = a;
  $i(), qx = [];
  const t = o[x(2108)];
  Ee.store[x(734)]({ lastError: "", widgetableErrors: {} });
  const r = await Hi(t, o[x(645)]);
  nx(x(2992), r.hasError, r[x(1060)], x(1170), r[x(690)]), Bi(r), yield* Wi(r.promptIds);
});
function $i() {
  const o = a;
  if (Jx[o(2714)]) return;
  const x = R0[o(2573)];
  Jx[o(1298)] = x, R0[o(2573)] = async (...t) => {
    const r = o;
    try {
      const e = await x[r(2689)](R0, ...t), s = e == null ? void 0 : e[r(2712)];
      return s && Vi(s), qx[r(3019)]({ error: null, result: e, prompt_id: e[r(2712)] }), e;
    } catch (e) {
      throw qx[r(3019)]({ error: e, result: null, prompt_id: "" }), e;
    }
  }, Jx[o(2714)] = !0;
}
async function Ui(o) {
  await Ne[a(2573)](1, o);
}
async function zi(o) {
  const x = a, t = await Ne[x(1950)](Ne[x(2603)]);
  for (let r = 0; r < o; r++)
    await R0.queuePrompt(1, t);
}
async function Hi(o, x = a(2837)) {
  var e, s;
  const t = a, r = { promptIds: [], hasError: !1, generalError: "", nodeErrors: {} };
  try {
    x === t(2753) ? await zi(o) : await Ui(o);
    for (const n of qx)
      if (n[t(1491)]) r[t(1498)] = !0, r[t(1060)] = n[t(1491)][t(2819)] ? Ki(n[t(1491)][t(2819)][t(2368)]) : {}, Object[t(2363)](r[t(1060)], { "-1": ((s = (e = n.error[t(2819)]) == null ? void 0 : e[t(1491)]) == null ? void 0 : s[t(2461)]) || n[t(1491)][t(2461)] });
      else {
        const i = n[t(2468)][t(2712)];
        r[t(690)][t(3019)](i);
      }
  } catch (n) {
    nx(t(2241), n.stack), r[t(1498)] = !0, r[t(1060)] = { "-1": n[t(2461)] || n.toString() };
  }
  return r;
}
function Vi(o) {
  const x = a;
  let t, r;
  const e = new Promise((s, n) => {
    t = s, r = n;
  });
  j0[x(823)](o, { promise: e, resolveImage: t, rejectImage: r });
}
function Bi({ hasError: o, generalError: x, nodeErrors: t }) {
  const r = a;
  o && (x ? Ee[r(2788)][r(734)]({ lastError: x }) : Ee[r(2788)][r(734)]({ widgetableErrors: t }));
}
async function* Wi(o) {
  const x = a, t = /* @__PURE__ */ new Map();
  for (const r of o) {
    const e = j0[x(1507)](r);
    e && t[x(823)](r, e[x(2828)]);
  }
  if (t.size !== 0)
    for (nx(x(1237)); t.size > 0; ) {
      const r = Array[x(1546)](t.entries()), e = r[x(2739)](([i, c]) => c[x(634)]((u) => ({ prompt_id: i, images: u }))), { prompt_id: s, images: n } = await Promise[x(992)](e);
      nx(x(948), s), t.delete(s), j0[x(2375)](s), yield { success: !0, prompt_ids: [s], images: n };
    }
}
function Ki(o) {
  const x = a, t = {};
  return Object[x(1877)](o)[x(430)]((r) => {
    const e = x, s = r.split(":")[0], n = Ne[e(2603)][e(2844)].find((i) => i.id == s);
    t[s] = "[" + ((n == null ? void 0 : n[e(2673)]) || s) + "]" + o[r][e(1139)][e(2739)](JSON.stringify)[e(896)](`
`);
  }), t;
}
const Zi = ox[a(1735)]("actions:util");
Ee.implementAction(a(2647), async (o) => {
  const x = a;
  return o != null && o.hostVersion && Zi(x(877), o[x(1816)]), { comfyVersion: x(2507), hostVersion: (o == null ? void 0 : o.hostVersion) ?? "" };
}), Ee[a(1748)]("setNodeTitle", async (o) => {
  const x = a, { node_id: t, title: r } = o, e = Ne.graph[x(2844)][x(304)]((s) => s.id == t);
  if (!e) throw new Error(x(2935));
  return e[x(2673)] = r, e[x(2836)](x(289), r), { success: !0 };
}), Ee[a(1748)](a(1246), async () => {
  const o = a, x = await fetch(o(527));
  return x[o(1071)] == 404 ? { error: Yt(o(2267)), success: !1 } : x[o(1071)] == 200 ? { success: !0 } : { error: Yt(o(1048)) + x[o(2074)], success: !1 };
}), Ee[a(1748)]("setComfyOrgAPIKey", async (o) => {
  const x = a, { api_key: t } = o;
  return localStorage[x(1618)](x(1475), t), location[x(2232)](), { success: !0 };
}), Ee[a(1748)](a(827), async () => {
  const o = a;
  return document.querySelector(o(2436))[o(2177)][o(1206)](), { success: !0 };
});
function Gi(o) {
  const x = atob(o), t = x.length, r = new Uint8Array(t);
  for (let e = 0; e < t; e++)
    r[e] = x.charCodeAt(e);
  return r;
}
Ee.implementAction(a(980), async (o, x, t) => {
  const r = a, { fileName: e, overwrite: s = !0, mimeType: n = r(2660), dataBase64: i } = o;
  if (t != null && t[r(1363)]) throw new DOMException("Upload aborted", r(1340));
  const c = Gi(i), u = new Blob([c], { type: n }), d = new FormData();
  d[r(2872)](r(2009), u), d[r(2872)](r(1896), e), d[r(2872)](r(1886), s ? "true" : r(661));
  const l = await fetch(r(1567), { method: r(399), body: d, signal: t });
  if (!l.ok) throw new Error(r(2620) + l[r(2074)]);
  const f = await l.json();
  return { name: f[r(783)] + "/" + f[r(1166)] };
});
const Zs = a(1186), Ji = [Zs, a(2415), "2024-11-05", a(2860)], Ox = "2.0", Gs = Ve([b(), W()[a(2021)]()]), Js = b(), Qi = S({ progressToken: B(Gs) }).passthrough(), r0 = S({ _meta: B(Qi) }).passthrough(), x0 = S({ method: b(), params: B(r0) }), ix = S({ _meta: B(S({}).passthrough()) })[a(933)](), m0 = S({ method: b(), params: B(ix) }), s0 = S({ _meta: B(S({})[a(933)]()) }).passthrough(), Dx = Ve([b(), W()[a(2021)]()]), Qs = S({ jsonrpc: xe(Ox), id: Dx }).merge(x0).strict(), Xi = (o) => Qs[a(1110)](o)[a(2186)], Xs = S({ jsonrpc: xe(Ox) }).merge(m0).strict(), Yi = (o) => Xs[a(1110)](o)[a(2186)], Ys = S({ jsonrpc: xe(Ox), id: Dx, result: s0 }).strict(), rr = (o) => Ys[a(1110)](o)[a(2186)];
var v0;
(function(o) {
  const x = a;
  o[o[x(2631)] = -32e3] = x(2631), o[o.RequestTimeout = -32001] = x(1077), o[o.ParseError = -32700] = x(1619), o[o[x(1918)] = -32600] = x(1918), o[o[x(1352)] = -32601] = x(1352), o[o[x(1485)] = -32602] = x(1485), o[o.InternalError = -32603] = x(614);
})(v0 || (v0 = {}));
const en = S({ jsonrpc: xe(Ox), id: Dx, error: S({ code: W()[a(2021)](), message: b(), data: B(k0()) }) })[a(2716)](), e2 = (o) => en[a(1110)](o)[a(2186)];
Ve([Qs, Xs, Ys, en]);
const ta = s0[a(2716)](), aa = m0[a(1735)]({ method: xe(a(1273)), params: ix[a(1735)]({ requestId: Dx, reason: b().optional() }) }), cx = S({ name: b(), title: B(b()) })[a(933)](), xn = cx.extend({ version: b() }), x2 = S({ experimental: B(S({})[a(933)]()), sampling: B(S({})[a(933)]()), elicitation: B(S({}).passthrough()), roots: B(S({ listChanged: B(Q()) }).passthrough()) })[a(933)](), tn = x0[a(1735)]({ method: xe(a(862)), params: r0[a(1735)]({ protocolVersion: b(), capabilities: x2, clientInfo: xn }) }), t2 = S({ experimental: B(S({})[a(933)]()), logging: B(S({})[a(933)]()), completions: B(S({}).passthrough()), prompts: B(S({ listChanged: B(Q()) })[a(933)]()), resources: B(S({ subscribe: B(Q()), listChanged: B(Q()) })[a(933)]()), tools: B(S({ listChanged: B(Q()) })[a(933)]()) }).passthrough(), a2 = s0[a(1735)]({ protocolVersion: b(), capabilities: t2, serverInfo: xn, instructions: B(b()) }), an = m0[a(1735)]({ method: xe("notifications/initialized") }), ra = x0[a(1735)]({ method: xe(a(2666)) }), r2 = S({ progress: W(), total: B(W()), message: B(b()) })[a(933)](), sa = m0.extend({ method: xe(a(885)), params: ix.merge(r2)[a(1735)]({ progressToken: Gs }) }), jx = x0[a(1735)]({ params: r0[a(1735)]({ cursor: B(Js) }).optional() }), Lx = s0[a(1735)]({ nextCursor: B(Js) }), rn = S({ uri: b(), mimeType: B(b()), _meta: B(S({})[a(933)]()) })[a(933)](), sn = rn.extend({ text: b() }), nn = rn[a(1735)]({ blob: b()[a(1997)]() }), on = cx.extend({ uri: b(), description: B(b()), mimeType: B(b()), _meta: B(S({})[a(933)]()) }), s2 = cx.extend({ uriTemplate: b(), description: B(b()), mimeType: B(b()), _meta: B(S({})[a(933)]()) }), n2 = jx[a(1735)]({ method: xe(a(2016)) }), o2 = Lx[a(1735)]({ resources: Se(on) }), i2 = jx[a(1735)]({ method: xe(a(884)) }), c2 = Lx[a(1735)]({ resourceTemplates: Se(s2) }), u2 = x0.extend({ method: xe(a(742)), params: r0[a(1735)]({ uri: b() }) }), d2 = s0.extend({ contents: Se(Ve([sn, nn])) }), l2 = m0[a(1735)]({ method: xe(a(961)) }), f2 = x0.extend({ method: xe(a(557)), params: r0.extend({ uri: b() }) }), h2 = x0[a(1735)]({ method: xe(a(2265)), params: r0[a(1735)]({ uri: b() }) }), p2 = m0[a(1735)]({ method: xe("notifications/resources/updated"), params: ix[a(1735)]({ uri: b() }) }), m2 = S({ name: b(), description: B(b()), required: B(Q()) })[a(933)](), b2 = cx[a(1735)]({ description: B(b()), arguments: B(Se(m2)), _meta: B(S({})[a(933)]()) }), g2 = jx.extend({ method: xe(a(1869)) }), y2 = Lx[a(1735)]({ prompts: Se(b2) }), v2 = x0[a(1735)]({ method: xe(a(1213)), params: r0[a(1735)]({ name: b(), arguments: B(qe(b())) }) }), ca = S({ type: xe(a(1633)), text: b(), _meta: B(S({}).passthrough()) })[a(933)](), ua = S({ type: xe(a(2009)), data: b().base64(), mimeType: b(), _meta: B(S({}).passthrough()) })[a(933)](), da = S({ type: xe(a(2332)), data: b()[a(1997)](), mimeType: b(), _meta: B(S({})[a(933)]()) })[a(933)](), w2 = S({ type: xe(a(2559)), resource: Ve([sn, nn]), _meta: B(S({}).passthrough()) })[a(933)](), S2 = on[a(1735)]({ type: xe(a(1495)) }), cn = Ve([ca, ua, da, S2, w2]), k2 = S({ role: Ie([a(772), a(1608)]), content: cn })[a(933)](), P2 = s0[a(1735)]({ description: B(b()), messages: Se(k2) }), I2 = m0.extend({ method: xe(a(1192)) }), E2 = S({ title: B(b()), readOnlyHint: B(Q()), destructiveHint: B(Q()), idempotentHint: B(Q()), openWorldHint: B(Q()) })[a(933)](), R2 = cx[a(1735)]({ description: B(b()), inputSchema: S({ type: xe(a(2220)), properties: B(S({}).passthrough()), required: B(Se(b())) })[a(933)](), outputSchema: B(S({ type: xe(a(2220)), properties: B(S({})[a(933)]()), required: B(Se(b())) }).passthrough()), annotations: B(E2), _meta: B(S({})[a(933)]()) }), C2 = jx[a(1735)]({ method: xe(a(2896)) }), F2 = Lx[a(1735)]({ tools: Se(R2) }), un = s0[a(1735)]({ content: Se(cn)[a(2096)]([]), structuredContent: S({})[a(933)]().optional(), isError: B(Q()) });
un.or(s0[a(1735)]({ toolResult: k0() }));
const _2 = x0[a(1735)]({ method: xe(a(2979)), params: r0.extend({ name: b(), arguments: B(qe(k0())) }) }), N2 = m0[a(1735)]({ method: xe(a(1920)) }), dn = Ie(["debug", a(1043), a(2481), a(1935), a(1491), "critical", "alert", a(2384)]), T2 = x0[a(1735)]({ method: xe(a(327)), params: r0[a(1735)]({ level: dn }) }), q2 = m0.extend({ method: xe(a(1370)), params: ix[a(1735)]({ level: dn, logger: B(b()), data: k0() }) }), A2 = S({ name: b()[a(2184)]() })[a(933)](), O2 = S({ hints: B(Se(A2)), costPriority: B(W()[a(316)](0)[a(477)](1)), speedPriority: B(W()[a(316)](0)[a(477)](1)), intelligencePriority: B(W()[a(316)](0)[a(477)](1)) })[a(933)](), D2 = S({ role: Ie([a(772), a(1608)]), content: Ve([ca, ua, da]) })[a(933)](), j2 = x0.extend({ method: xe(a(916)), params: r0.extend({ messages: Se(D2), systemPrompt: B(b()), includeContext: B(Ie([a(2087), a(578), a(800)])), temperature: B(W()), maxTokens: W().int(), stopSequences: B(Se(b())), metadata: B(S({}).passthrough()), modelPreferences: B(O2) }) }), ln = s0.extend({ model: b(), stopReason: B(Ie([a(2347), "stopSequence", a(1700)]).or(b())), role: Ie([a(772), a(1608)]), content: $s(a(2291), [ca, ua, da]) }), L2 = S({ type: xe(a(2903)), title: B(b()), description: B(b()), default: B(Q()) }).passthrough(), M2 = S({ type: xe(a(2028)), title: B(b()), description: B(b()), minLength: B(W()), maxLength: B(W()), format: B(Ie([a(1921), a(1542), a(2923), "date-time"])) })[a(933)](), $2 = S({ type: Ie([a(867), a(1999)]), title: B(b()), description: B(b()), minimum: B(W()), maximum: B(W()) }).passthrough(), U2 = S({ type: xe(a(2028)), title: B(b()), description: B(b()), enum: Se(b()), enumNames: B(Se(b())) })[a(933)](), z2 = Ve([L2, M2, $2, U2]), H2 = x0[a(1735)]({ method: xe(a(1543)), params: r0.extend({ message: b(), requestedSchema: S({ type: xe(a(2220)), properties: qe(b(), z2), required: B(Se(b())) })[a(933)]() }) }), fn = s0[a(1735)]({ action: Ie([a(1315), a(2484), a(1242)]), content: B(qe(b(), k0())) }), V2 = S({ type: xe(a(953)), uri: b() })[a(933)](), B2 = S({ type: xe(a(2805)), name: b() })[a(933)](), W2 = x0[a(1735)]({ method: xe("completion/complete"), params: r0[a(1735)]({ ref: Ve([B2, V2]), argument: S({ name: b(), value: b() })[a(933)](), context: B(S({ arguments: B(qe(b(), b())) })) }) }), K2 = s0[a(1735)]({ completion: S({ values: Se(b())[a(477)](100), total: B(W()[a(2021)]()), hasMore: B(Q()) })[a(933)]() }), Z2 = S({ uri: b().startsWith(a(3016)), name: B(b()), _meta: B(S({})[a(933)]()) })[a(933)](), G2 = x0[a(1735)]({ method: xe("roots/list") }), hn = s0[a(1735)]({ roots: Se(Z2) }), J2 = m0[a(1735)]({ method: xe(a(809)) });
Ve([ra, tn, W2, T2, v2, g2, n2, i2, u2, f2, h2, _2, C2]), Ve([aa, sa, an, J2]), Ve([ta, ln, fn, hn]), Ve([ra, j2, H2, G2]), Ve([aa, sa, q2, p2, l2, N2, I2]), Ve([ta, a2, K2, P2, y2, o2, c2, d2, un, F2]);
class q0 extends Error {
  constructor(x, t, r) {
    const e = a;
    super("MCP error " + x + ": " + t), this[e(2345)] = x, this[e(1506)] = r, this[e(1166)] = e(1698);
  }
}
const Q2 = 6e4;
class X2 {
  constructor(x) {
    const t = a;
    this[t(1156)] = x, this[t(2595)] = 0, this[t(2144)] = /* @__PURE__ */ new Map(), this[t(587)] = /* @__PURE__ */ new Map(), this[t(2584)] = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this[t(1220)] = /* @__PURE__ */ new Map(), this[t(2831)] = /* @__PURE__ */ new Map(), this[t(2383)] = /* @__PURE__ */ new Set(), this[t(566)](aa, (r) => {
      const e = t, s = this[e(587)][e(1507)](r.params[e(1508)]);
      s == null || s.abort(r[e(434)][e(1433)]);
    }), this[t(566)](sa, (r) => {
      this[t(1283)](r);
    }), this[t(2623)](ra, (r) => ({}));
  }
  _setupTimeout(x, t, r, e, s = !1) {
    const n = a;
    this[n(2831)][n(823)](x, { timeoutId: setTimeout(e, t), startTime: Date.now(), timeout: t, maxTotalTimeout: r, resetTimeoutOnProgress: s, onTimeout: e });
  }
  [a(580)](x) {
    const t = a, r = this._timeoutInfo.get(x);
    if (!r) return !1;
    const e = Date[t(804)]() - r.startTime;
    if (r[t(3032)] && e >= r[t(3032)])
      throw this[t(2831)].delete(x), new q0(v0[t(1077)], t(2032), { maxTotalTimeout: r[t(3032)], totalElapsed: e });
    return clearTimeout(r[t(1665)]), r.timeoutId = setTimeout(r[t(2580)], r[t(2025)]), !0;
  }
  [a(443)](x) {
    const t = a, r = this[t(2831)][t(1507)](x);
    r && (clearTimeout(r[t(1665)]), this[t(2831)][t(2375)](x));
  }
  async connect(x) {
    const t = a;
    var r, e, s;
    this._transport = x;
    const n = (r = this.transport) === null || r === void 0 ? void 0 : r[t(660)];
    this._transport[t(660)] = () => {
      const u = t;
      n == null || n(), this[u(1893)]();
    };
    const i = (e = this.transport) === null || e === void 0 ? void 0 : e[t(2917)];
    this[t(1351)].onerror = (u) => {
      const d = t;
      i == null || i(u), this[d(1331)](u);
    };
    const c = (s = this[t(1351)]) === null || s === void 0 ? void 0 : s[t(1903)];
    this[t(1351)][t(1903)] = (u, d) => {
      const l = t;
      c == null || c(u, d), rr(u) || e2(u) ? this[l(1278)](u) : Xi(u) ? this[l(2102)](u, d) : Yi(u) ? this[l(487)](u) : this[l(1331)](new Error("Unknown message type: " + JSON[l(3038)](u)));
    }, await this[t(1351)][t(1171)]();
  }
  [a(1893)]() {
    const x = a;
    var t;
    const r = this[x(1610)];
    this[x(1610)] = /* @__PURE__ */ new Map(), this[x(1220)].clear(), this[x(2383)].clear(), this[x(1351)] = void 0, (t = this[x(660)]) === null || t === void 0 || t[x(2689)](this);
    const e = new q0(v0[x(2631)], x(983));
    for (const s of r[x(922)]())
      s(e);
  }
  [a(1331)](x) {
    const t = a;
    var r;
    (r = this[t(2917)]) === null || r === void 0 || r[t(2689)](this, x);
  }
  _onnotification(x) {
    const t = a;
    var r;
    const e = (r = this[t(2584)][t(1507)](x[t(1802)])) !== null && r !== void 0 ? r : this.fallbackNotificationHandler;
    e !== void 0 && Promise[t(855)]()[t(634)](() => e(x))[t(1045)]((s) => this[t(1331)](new Error(t(2014) + s)));
  }
  _onrequest(x, t) {
    const r = a;
    var e, s, n, i;
    const c = (e = this[r(2144)][r(1507)](x.method)) !== null && e !== void 0 ? e : this[r(663)];
    if (c === void 0) {
      (s = this._transport) === null || s === void 0 || s.send({ jsonrpc: "2.0", id: x.id, error: { code: v0[r(1352)], message: r(1124) } })[r(1045)]((l) => this._onerror(new Error("Failed to send an error response: " + l)));
      return;
    }
    const u = new AbortController();
    this[r(587)][r(823)](x.id, u);
    const d = { signal: u[r(2364)], sessionId: (n = this._transport) === null || n === void 0 ? void 0 : n[r(1376)], _meta: (i = x[r(434)]) === null || i === void 0 ? void 0 : i[r(914)], sendNotification: (l) => this[r(1455)](l, { relatedRequestId: x.id }), sendRequest: (l, f, g) => this[r(1093)](l, f, { ...g, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t.authInfo, requestId: x.id, requestInfo: t == null ? void 0 : t[r(486)] };
    Promise.resolve()[r(634)](() => c(x, d))[r(634)]((l) => {
      const f = r;
      var g;
      if (!u[f(2364)].aborted)
        return (g = this[f(1351)]) === null || g === void 0 ? void 0 : g[f(1865)]({ result: l, jsonrpc: f(598), id: x.id });
    }, (l) => {
      const f = r;
      var g, h;
      if (!u[f(2364)].aborted)
        return (g = this[f(1351)]) === null || g === void 0 ? void 0 : g.send({ jsonrpc: "2.0", id: x.id, error: { code: Number[f(2086)](l[f(2345)]) ? l[f(2345)] : v0[f(614)], message: (h = l[f(2461)]) !== null && h !== void 0 ? h : f(2206) } });
    })[r(1045)]((l) => this._onerror(new Error("Failed to send response: " + l)))[r(1225)](() => {
      this[r(587)].delete(x.id);
    });
  }
  [a(1283)](x) {
    const t = a, { progressToken: r, ...e } = x[t(434)], s = Number(r), n = this[t(1220)][t(1507)](s);
    if (!n) {
      this._onerror(new Error(t(2263) + JSON.stringify(x)));
      return;
    }
    const i = this[t(1610)][t(1507)](s), c = this[t(2831)][t(1507)](s);
    if (c && i && c[t(2249)]) try {
      this[t(580)](s);
    } catch (u) {
      i(u);
      return;
    }
    n(e);
  }
  [a(1278)](x) {
    const t = a, r = Number(x.id), e = this[t(1610)][t(1507)](r);
    if (e === void 0) {
      this[t(1331)](new Error("Received a response for an unknown message ID: " + JSON[t(3038)](x)));
      return;
    }
    if (this[t(1610)][t(2375)](r), this._progressHandlers[t(2375)](r), this._cleanupTimeout(r), rr(x)) e(x);
    else {
      const s = new q0(x[t(1491)][t(2345)], x.error.message, x.error[t(1506)]);
      e(s);
    }
  }
  get transport() {
    return this._transport;
  }
  async close() {
    const x = a;
    var t;
    await ((t = this[x(1351)]) === null || t === void 0 ? void 0 : t.close());
  }
  request(x, t, r) {
    const { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n } = r ?? {};
    return new Promise((i, c) => {
      const u = Z;
      var d, l, f, g, h, m;
      if (!this[u(1351)]) {
        c(new Error(u(2159)));
        return;
      }
      ((d = this[u(1156)]) === null || d === void 0 ? void 0 : d.enforceStrictCapabilities) === !0 && this[u(957)](x.method), (l = r == null ? void 0 : r[u(2364)]) === null || l === void 0 || l[u(1377)]();
      const v = this[u(2595)]++, k = { ...x, jsonrpc: u(598), id: v };
      r != null && r.onprogress && (this[u(1220)][u(823)](v, r[u(2652)]), k[u(434)] = { ...x[u(434)], _meta: { ...((f = x[u(434)]) === null || f === void 0 ? void 0 : f[u(914)]) || {}, progressToken: v } });
      const I = (R) => {
        const P = u;
        var C;
        this[P(1610)][P(2375)](v), this._progressHandlers[P(2375)](v), this._cleanupTimeout(v), (C = this[P(1351)]) === null || C === void 0 || C[P(1865)]({ jsonrpc: P(598), method: P(1273), params: { requestId: v, reason: String(R) } }, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n }).catch((j) => this[P(1331)](new Error(P(480) + j))), c(R);
      };
      this[u(1610)][u(823)](v, (R) => {
        const P = u;
        var C;
        if (!(!((C = r == null ? void 0 : r[P(2364)]) === null || C === void 0) && C.aborted)) {
          if (R instanceof Error) return c(R);
          try {
            const j = t[P(1598)](R.result);
            i(j);
          } catch (j) {
            c(j);
          }
        }
      }), (g = r == null ? void 0 : r[u(2364)]) === null || g === void 0 || g[u(2322)]("abort", () => {
        const R = u;
        var P;
        I((P = r == null ? void 0 : r.signal) === null || P === void 0 ? void 0 : P[R(1433)]);
      });
      const T = (h = r == null ? void 0 : r[u(2025)]) !== null && h !== void 0 ? h : Q2, q = () => I(new q0(v0.RequestTimeout, u(2791), { timeout: T }));
      this[u(1545)](v, T, r == null ? void 0 : r[u(3032)], q, (m = r == null ? void 0 : r[u(2249)]) !== null && m !== void 0 ? m : !1), this[u(1351)][u(1865)](k, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n })[u(1045)]((R) => {
        this._cleanupTimeout(v), c(R);
      });
    });
  }
  async notification(x, t) {
    const r = a;
    var e, s;
    if (!this[r(1351)]) throw new Error("Not connected");
    if (this.assertNotificationCapability(x[r(1802)]), ((s = (e = this[r(1156)]) === null || e === void 0 ? void 0 : e[r(2260)]) !== null && s !== void 0 ? s : [])[r(555)](x[r(1802)]) && !x[r(434)] && !(t != null && t[r(2557)])) {
      if (this[r(2383)][r(1281)](x.method)) return;
      this._pendingDebouncedNotifications.add(x[r(1802)]), Promise[r(855)]()[r(634)](() => {
        const u = r;
        var d;
        if (this[u(2383)].delete(x[u(1802)]), !this[u(1351)]) return;
        const l = { ...x, jsonrpc: u(598) };
        (d = this._transport) === null || d === void 0 || d[u(1865)](l, t)[u(1045)]((f) => this[u(1331)](f));
      });
      return;
    }
    const c = { ...x, jsonrpc: r(598) };
    await this[r(1351)].send(c, t);
  }
  [a(2623)](x, t) {
    const r = a, e = x[r(1190)][r(1802)].value;
    this[r(1742)](e), this[r(2144)].set(e, (s, n) => Promise.resolve(t(x.parse(s), n)));
  }
  [a(2579)](x) {
    const t = a;
    this[t(2144)][t(2375)](x);
  }
  [a(420)](x) {
    const t = a;
    if (this[t(2144)][t(1281)](x)) throw new Error("A request handler for " + x + t(1760));
  }
  [a(566)](x, t) {
    const r = a;
    this[r(2584)][r(823)](x.shape[r(1802)].value, (e) => Promise[r(855)](t(x.parse(e))));
  }
  [a(856)](x) {
    const t = a;
    this._notificationHandlers[t(2375)](x);
  }
}
function Y2(o, x) {
  const t = a;
  return Object.entries(x)[t(2069)]((r, [e, s]) => (s && typeof s == "object" ? r[e] = r[e] ? { ...r[e], ...s } : s : r[e] = s, r), { ...o });
}
var X0 = { exports: {} }, ec = X0[a(1229)], sr;
function xc() {
  const o = a;
  return sr || (sr = 1, (function(x, t) {
    (function(r, e) {
      e(t);
    })(ec, function(r) {
      const e = Z;
      function s() {
        const E = Z;
        for (var p = arguments[E(1148)], y = Array(p), w = 0; w < p; w++)
          y[w] = arguments[w];
        if (y.length > 1) {
          y[0] = y[0].slice(0, -1);
          for (var M = y.length - 1, $ = 1; $ < M; ++$)
            y[$] = y[$][E(1908)](1, -1);
          return y[M] = y[M][E(1908)](1), y[E(896)]("");
        } else return y[0];
      }
      function n(E) {
        return "(?:" + E + ")";
      }
      function i(E) {
        const p = Z;
        return E === void 0 ? p(2781) : E === null ? "null" : Object[p(1706)].toString[p(2689)](E)[p(1958)](" ")[p(2906)]()[p(1958)]("]")[p(1766)]()[p(1119)]();
      }
      function c(E) {
        return E[Z(1998)]();
      }
      function u(E) {
        const p = Z;
        return E != null ? E instanceof Array ? E : typeof E[p(1148)] != "number" || E[p(1958)] || E.setInterval || E[p(2689)] ? [E] : Array[p(1706)].slice[p(2689)](E) : [];
      }
      function d(E, p) {
        var y = E;
        if (p) for (var w in p)
          y[w] = p[w];
        return y;
      }
      function l(E) {
        const p = Z;
        var y = p(2544), w = "[0-9]", M = s(w, "[A-Fa-f]"), $ = n(n(p(538) + M + "%" + M + M + "%" + M + M) + "|" + n("%[89A-Fa-f]" + M + "%" + M + M) + "|" + n("%" + M + M)), ne = "[\\:\\/\\?\\#\\[\\]\\@]", de = p(2947), Re = s(ne, de), je = E ? p(2709) : "[]", Be = E ? p(2887) : "[]", Ce = s(y, w, p(1458), je);
        n(y + s(y, w, p(651)) + "*"), n(n($ + "|" + s(Ce, de, p(2745))) + "*");
        var De = n(n(p(1374)) + "|" + n(p(1317) + w) + "|" + n("1" + w + w) + "|" + n("0?[1-9]" + w) + p(2174) + w), We = n(De + "\\." + De + "\\." + De + "\\." + De), ge = n(M + p(1855)), $e = n(n(ge + "\\:" + ge) + "|" + We), Ke = n(n(ge + "\\:") + "{6}" + $e), Ue = n(p(1784) + n(ge + "\\:") + p(1241) + $e), I0 = n(n(ge) + p(409) + n(ge + "\\:") + p(1873) + $e), i0 = n(n(n(ge + "\\:") + p(1090) + ge) + p(409) + n(ge + "\\:") + "{3}" + $e), c0 = n(n(n(ge + "\\:") + "{0,2}" + ge) + p(409) + n(ge + "\\:") + "{2}" + $e), M0 = n(n(n(ge + "\\:") + "{0,3}" + ge) + p(409) + ge + "\\:" + $e), N0 = n(n(n(ge + "\\:") + p(593) + ge) + p(409) + $e), t0 = n(n(n(ge + "\\:") + "{0,5}" + ge) + "?\\:\\:" + ge), u0 = n(n(n(ge + "\\:") + p(886) + ge) + p(409)), d0 = n([Ke, Ue, I0, i0, c0, M0, N0, t0, u0][p(896)]("|")), g0 = n(n(Ce + "|" + $) + "+");
        n("[vV]" + M + p(2841) + s(Ce, de, p(2745)) + "+"), n(n($ + "|" + s(Ce, de)) + "*");
        var l0 = n($ + "|" + s(Ce, de, p(1518)));
        return n(n($ + "|" + s(Ce, de, "[\\@]")) + "+"), n(n(l0 + "|" + s("[\\/\\?]", Be)) + "*"), { NOT_SCHEME: new RegExp(s("[^]", y, w, p(651)), "g"), NOT_USERINFO: new RegExp(s(p(1995), Ce, de), "g"), NOT_HOST: new RegExp(s(p(652), Ce, de), "g"), NOT_PATH: new RegExp(s(p(2697), Ce, de), "g"), NOT_PATH_NOSCHEME: new RegExp(s(p(857), Ce, de), "g"), NOT_QUERY: new RegExp(s(p(2022), Ce, de, p(2040), Be), "g"), NOT_FRAGMENT: new RegExp(s(p(2022), Ce, de, "[\\:\\@\\/\\?]"), "g"), ESCAPE: new RegExp(s("[^]", Ce, de), "g"), UNRESERVED: new RegExp(Ce, "g"), OTHER_CHARS: new RegExp(s(p(2022), Ce, Re), "g"), PCT_ENCODED: new RegExp($, "g"), IPV4ADDRESS: new RegExp("^(" + We + ")$"), IPV6ADDRESS: new RegExp(p(763) + d0 + ")" + n(n("\\%25|\\%(?!" + M + p(1185)) + "(" + g0 + ")") + p(632)) };
      }
      var f = l(!1), g = l(!0), h = /* @__PURE__ */ (function() {
        function E(p, y) {
          const w = Z;
          var M = [], $ = !0, ne = !1, de = void 0;
          try {
            for (var Re = p[Symbol[w(2588)]](), je; !($ = (je = Re[w(1751)]())[w(2062)]) && (M[w(3019)](je.value), !(y && M[w(1148)] === y)); $ = !0)
              ;
          } catch (Be) {
            ne = !0, de = Be;
          } finally {
            try {
              !$ && Re[w(324)] && Re[w(324)]();
            } finally {
              if (ne) throw de;
            }
          }
          return M;
        }
        return function(p, y) {
          const w = Z;
          if (Array[w(500)](p)) return p;
          if (Symbol[w(2588)] in Object(p)) return E(p, y);
          throw new TypeError(w(657));
        };
      })(), m = function(E) {
        const p = Z;
        if (Array[p(500)](E)) {
          for (var y = 0, w = Array(E[p(1148)]); y < E[p(1148)]; y++) w[y] = E[y];
          return w;
        } else return Array[p(1546)](E);
      }, v = 2147483647, k = 36, I = 1, T = 26, q = 38, R = 700, P = 72, C = 128, j = "-", D = /^xn--/, O = /[^\0-\x7E]/, N = /[\x2E\u3002\uFF0E\uFF61]/g, _ = { overflow: e(1730), "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": e(1227) }, z = k - I, U = Math.floor, H = String.fromCharCode;
      function G(E) {
        throw new RangeError(_[E]);
      }
      function ie(E, p) {
        const y = e;
        for (var w = [], M = E[y(1148)]; M--; )
          w[M] = p(E[M]);
        return w;
      }
      function ue(E, p) {
        const y = e;
        var w = E[y(1958)]("@"), M = "";
        w[y(1148)] > 1 && (M = w[0] + "@", E = w[1]), E = E[y(1252)](N, ".");
        var $ = E.split("."), ne = ie($, p).join(".");
        return M + ne;
      }
      function le(E) {
        const p = e;
        for (var y = [], w = 0, M = E[p(1148)]; w < M; ) {
          var $ = E[p(2307)](w++);
          if ($ >= 55296 && $ <= 56319 && w < M) {
            var ne = E.charCodeAt(w++);
            (ne & 64512) == 56320 ? y[p(3019)]((($ & 1023) << 10) + (ne & 1023) + 65536) : (y[p(3019)]($), w--);
          } else y[p(3019)]($);
        }
        return y;
      }
      var oe = function(p) {
        return String[e(2822)].apply(String, m(p));
      }, fe = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : k;
      }, Pe = function(p, y) {
        return p + 22 + 75 * (p < 26) - ((y != 0) << 5);
      }, ye = function(p, y, w) {
        var M = 0;
        for (p = w ? U(p / R) : p >> 1, p += U(p / y); p > z * T >> 1; M += k)
          p = U(p / z);
        return U(M + (z + 1) * p / (p + q));
      }, Le = function(p) {
        const y = e;
        var w = [], M = p[y(1148)], $ = 0, ne = C, de = P, Re = p[y(3007)](j);
        Re < 0 && (Re = 0);
        for (var je = 0; je < Re; ++je)
          p[y(2307)](je) >= 128 && G(y(1946)), w[y(3019)](p.charCodeAt(je));
        for (var Be = Re > 0 ? Re + 1 : 0; Be < M; ) {
          for (var Ce = $, De = 1, We = k; ; We += k) {
            Be >= M && G(y(3021));
            var ge = fe(p[y(2307)](Be++));
            (ge >= k || ge > U((v - $) / De)) && G(y(2747)), $ += ge * De;
            var $e = We <= de ? I : We >= de + T ? T : We - de;
            if (ge < $e) break;
            var Ke = k - $e;
            De > U(v / Ke) && G("overflow"), De *= Ke;
          }
          var Ue = w[y(1148)] + 1;
          de = ye($ - Ce, Ue, Ce == 0), U($ / Ue) > v - ne && G("overflow"), ne += U($ / Ue), $ %= Ue, w[y(2176)]($++, 0, ne);
        }
        return String[y(2822)].apply(String, w);
      }, _e = function(p) {
        const y = e;
        var w = [];
        p = le(p);
        var M = p.length, $ = C, ne = 0, de = P, Re = !0, je = !1, Be = void 0;
        try {
          for (var Ce = p[Symbol.iterator](), De; !(Re = (De = Ce[y(1751)]()).done); Re = !0) {
            var We = De[y(935)];
            We < 128 && w[y(3019)](H(We));
          }
        } catch (Z0) {
          je = !0, Be = Z0;
        } finally {
          try {
            !Re && Ce[y(324)] && Ce[y(324)]();
          } finally {
            if (je) throw Be;
          }
        }
        var ge = w[y(1148)], $e = ge;
        for (ge && w[y(3019)](j); $e < M; ) {
          var Ke = v, Ue = !0, I0 = !1, i0 = void 0;
          try {
            for (var c0 = p[Symbol[y(2588)]](), M0; !(Ue = (M0 = c0[y(1751)]())[y(2062)]); Ue = !0) {
              var N0 = M0.value;
              N0 >= $ && N0 < Ke && (Ke = N0);
            }
          } catch (Z0) {
            I0 = !0, i0 = Z0;
          } finally {
            try {
              !Ue && c0[y(324)] && c0.return();
            } finally {
              if (I0) throw i0;
            }
          }
          var t0 = $e + 1;
          Ke - $ > U((v - ne) / t0) && G(y(2747)), ne += (Ke - $) * t0, $ = Ke;
          var u0 = !0, d0 = !1, g0 = void 0;
          try {
            for (var l0 = p[Symbol.iterator](), Pa; !(u0 = (Pa = l0[y(1751)]()).done); u0 = !0) {
              var Ia = Pa.value;
              if (Ia < $ && ++ne > v && G("overflow"), Ia == $) {
                for (var dx = ne, lx = k; ; lx += k) {
                  var fx = lx <= de ? I : lx >= de + T ? T : lx - de;
                  if (dx < fx) break;
                  var Ea = dx - fx, Ra = k - fx;
                  w[y(3019)](H(Pe(fx + Ea % Ra, 0))), dx = U(Ea / Ra);
                }
                w[y(3019)](H(Pe(dx, 0))), de = ye(ne, t0, $e == ge), ne = 0, ++$e;
              }
            }
          } catch (Z0) {
            d0 = !0, g0 = Z0;
          } finally {
            try {
              !u0 && l0[y(324)] && l0[y(324)]();
            } finally {
              if (d0) throw g0;
            }
          }
          ++ne, ++$;
        }
        return w[y(896)]("");
      }, Je = function(p) {
        return ue(p, function(y) {
          const w = Z;
          return D[w(1531)](y) ? Le(y[w(1908)](4)[w(1119)]()) : y;
        });
      }, A = function(p) {
        return ue(p, function(y) {
          return O.test(y) ? "xn--" + _e(y) : y;
        });
      }, F = { version: e(1590), ucs2: { decode: le, encode: oe }, decode: Le, encode: _e, toASCII: A, toUnicode: Je }, L = {};
      function J(E) {
        const p = e;
        var y = E[p(2307)](0), w = void 0;
        return y < 16 ? w = "%0" + y[p(511)](16)[p(1998)]() : y < 128 ? w = "%" + y[p(511)](16)[p(1998)]() : y < 2048 ? w = "%" + (y >> 6 | 192)[p(511)](16).toUpperCase() + "%" + (y & 63 | 128)[p(511)](16)[p(1998)]() : w = "%" + (y >> 12 | 224).toString(16)[p(1998)]() + "%" + (y >> 6 & 63 | 128).toString(16)[p(1998)]() + "%" + (y & 63 | 128)[p(511)](16).toUpperCase(), w;
      }
      function ee(E) {
        const p = e;
        for (var y = "", w = 0, M = E[p(1148)]; w < M; ) {
          var $ = parseInt(E.substr(w + 1, 2), 16);
          if ($ < 128) y += String[p(2865)]($), w += 3;
          else if ($ >= 194 && $ < 224) {
            if (M - w >= 6) {
              var ne = parseInt(E[p(2612)](w + 4, 2), 16);
              y += String[p(2865)](($ & 31) << 6 | ne & 63);
            } else y += E[p(2612)](w, 6);
            w += 6;
          } else if ($ >= 224) {
            if (M - w >= 9) {
              var de = parseInt(E[p(2612)](w + 4, 2), 16), Re = parseInt(E.substr(w + 7, 2), 16);
              y += String.fromCharCode(($ & 15) << 12 | (de & 63) << 6 | Re & 63);
            } else y += E[p(2612)](w, 9);
            w += 9;
          } else y += E[p(2612)](w, 3), w += 3;
        }
        return y;
      }
      function V(E, p) {
        const y = e;
        function w(M) {
          const $ = Z;
          var ne = ee(M);
          return ne[$(789)](p.UNRESERVED) ? ne : M;
        }
        return E[y(2737)] && (E[y(2737)] = String(E[y(2737)])[y(1252)](p.PCT_ENCODED, w)[y(1119)]().replace(p[y(873)], "")), E[y(545)] !== void 0 && (E[y(545)] = String(E[y(545)]).replace(p[y(1401)], w)[y(1252)](p.NOT_USERINFO, J)[y(1252)](p[y(1401)], c)), E[y(779)] !== void 0 && (E[y(779)] = String(E[y(779)])[y(1252)](p[y(1401)], w)[y(1119)]().replace(p[y(1902)], J)[y(1252)](p.PCT_ENCODED, c)), E[y(648)] !== void 0 && (E[y(648)] = String(E[y(648)]).replace(p[y(1401)], w)[y(1252)](E[y(2737)] ? p[y(498)] : p.NOT_PATH_NOSCHEME, J).replace(p.PCT_ENCODED, c)), E[y(1717)] !== void 0 && (E[y(1717)] = String(E.query).replace(p[y(1401)], w)[y(1252)](p.NOT_QUERY, J)[y(1252)](p[y(1401)], c)), E[y(2876)] !== void 0 && (E[y(2876)] = String(E.fragment)[y(1252)](p[y(1401)], w)[y(1252)](p[y(807)], J).replace(p[y(1401)], c)), E;
      }
      function X(E) {
        return E[e(1252)](/^0*(.*)/, "$1") || "0";
      }
      function ce(E, p) {
        const y = e;
        var w = E[y(789)](p[y(2821)]) || [], M = h(w, 2), $ = M[1];
        return $ ? $[y(1958)](".")[y(2739)](X)[y(896)](".") : E;
      }
      function se(E, p) {
        const y = e;
        var w = E[y(789)](p.IPV6ADDRESS) || [], M = h(w, 3), $ = M[1], ne = M[2];
        if ($) {
          for (var de = $[y(1119)]()[y(1958)]("::")[y(2315)](), Re = h(de, 2), je = Re[0], Be = Re[1], Ce = Be ? Be[y(1958)](":").map(X) : [], De = je[y(1958)](":")[y(2739)](X), We = p[y(2821)][y(1531)](De[De[y(1148)] - 1]), ge = We ? 7 : 8, $e = De[y(1148)] - ge, Ke = Array(ge), Ue = 0; Ue < ge; ++Ue)
            Ke[Ue] = Ce[Ue] || De[$e + Ue] || "";
          We && (Ke[ge - 1] = ce(Ke[ge - 1], p));
          var I0 = Ke[y(2069)](function(t0, u0, d0) {
            const g0 = y;
            if (!u0 || u0 === "0") {
              var l0 = t0[t0[g0(1148)] - 1];
              l0 && l0[g0(2688)] + l0[g0(1148)] === d0 ? l0.length++ : t0[g0(3019)]({ index: d0, length: 1 });
            }
            return t0;
          }, []), i0 = I0.sort(function(t0, u0) {
            const d0 = y;
            return u0[d0(1148)] - t0[d0(1148)];
          })[0], c0 = void 0;
          if (i0 && i0[y(1148)] > 1) {
            var M0 = Ke[y(1908)](0, i0[y(2688)]), N0 = Ke[y(1908)](i0[y(2688)] + i0[y(1148)]);
            c0 = M0.join(":") + "::" + N0.join(":");
          } else c0 = Ke.join(":");
          return ne && (c0 += "%" + ne), c0;
        } else return E;
      }
      var te = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, Me = ""[e(789)](/(){0}/)[1] === void 0;
      function Ae(E) {
        const p = e;
        var y = arguments[p(1148)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = {}, M = y.iri !== !1 ? g : f;
        y[p(455)] === p(1176) && (E = (y.scheme ? y[p(2737)] + ":" : "") + "//" + E);
        var $ = E[p(789)](te);
        if ($) {
          Me ? (w.scheme = $[1], w[p(545)] = $[3], w[p(779)] = $[4], w[p(991)] = parseInt($[5], 10), w.path = $[6] || "", w[p(1717)] = $[7], w[p(2876)] = $[8], isNaN(w.port) && (w[p(991)] = $[5])) : (w[p(2737)] = $[1] || void 0, w.userinfo = E[p(2273)]("@") !== -1 ? $[3] : void 0, w.host = E[p(2273)]("//") !== -1 ? $[4] : void 0, w[p(991)] = parseInt($[5], 10), w[p(648)] = $[6] || "", w[p(1717)] = E[p(2273)]("?") !== -1 ? $[7] : void 0, w[p(2876)] = E[p(2273)]("#") !== -1 ? $[8] : void 0, isNaN(w[p(991)]) && (w[p(991)] = E.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? $[4] : void 0)), w[p(779)] && (w[p(779)] = se(ce(w.host, M), M)), w[p(2737)] === void 0 && w[p(545)] === void 0 && w[p(779)] === void 0 && w[p(991)] === void 0 && !w[p(648)] && w.query === void 0 ? w[p(455)] = p(860) : w[p(2737)] === void 0 ? w.reference = p(471) : w[p(2876)] === void 0 ? w[p(455)] = p(264) : w[p(455)] = p(1542), y[p(455)] && y[p(455)] !== p(1176) && y.reference !== w[p(455)] && (w.error = w[p(1491)] || p(937) + y[p(455)] + p(1500));
          var ne = L[(y.scheme || w[p(2737)] || "").toLowerCase()];
          if (!y.unicodeSupport && (!ne || !ne.unicodeSupport)) {
            if (w[p(779)] && (y[p(1272)] || ne && ne[p(1272)])) try {
              w[p(779)] = F[p(1648)](w[p(779)][p(1252)](M.PCT_ENCODED, ee)[p(1119)]());
            } catch (de) {
              w[p(1491)] = w.error || p(318) + de;
            }
            V(w, f);
          } else V(w, M);
          ne && ne[p(1598)] && ne[p(1598)](w, y);
        } else w[p(1491)] = w.error || p(934);
        return w;
      }
      function ze(E, p) {
        const y = e;
        var w = p[y(2953)] !== !1 ? g : f, M = [];
        return E[y(545)] !== void 0 && (M[y(3019)](E[y(545)]), M[y(3019)]("@")), E[y(779)] !== void 0 && M.push(se(ce(String(E[y(779)]), w), w).replace(w.IPV6ADDRESS, function($, ne, de) {
          const Re = y;
          return "[" + ne + (de ? Re(2521) + de : "") + "]";
        })), (typeof E[y(991)] == "number" || typeof E[y(991)] == "string") && (M[y(3019)](":"), M.push(String(E[y(991)]))), M[y(1148)] ? M[y(896)]("") : void 0;
      }
      var ke = /^\.\.?\//, Ge = /^\/\.(\/|$)/, n0 = /^\/\.\.(\/|$)/, Qe = /^\/?(?:.|\n)*?(?=\/|$)/;
      function Oe(E) {
        const p = e;
        for (var y = []; E[p(1148)]; )
          if (E[p(789)](ke)) E = E[p(1252)](ke, "");
          else if (E[p(789)](Ge)) E = E[p(1252)](Ge, "/");
          else if (E[p(789)](n0)) E = E.replace(n0, "/"), y[p(2906)]();
          else if (E === "." || E === "..") E = "";
          else {
            var w = E.match(Qe);
            if (w) {
              var M = w[0];
              E = E.slice(M.length), y[p(3019)](M);
            } else throw new Error(p(821));
          }
        return y[p(896)]("");
      }
      function He(E) {
        const p = e;
        var y = arguments[p(1148)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = y.iri ? g : f, M = [], $ = L[(y[p(2737)] || E[p(2737)] || "")[p(1119)]()];
        if ($ && $[p(1803)] && $.serialize(E, y), E[p(779)] && !w[p(2773)][p(1531)](E[p(779)])) {
          if (y[p(1272)] || $ && $[p(1272)]) try {
            E[p(779)] = y[p(2953)] ? F[p(2905)](E[p(779)]) : F[p(1648)](E[p(779)][p(1252)](w[p(1401)], ee)[p(1119)]());
          } catch (Re) {
            E[p(1491)] = E[p(1491)] || "Host's domain name can not be converted to " + (y[p(2953)] ? p(1387) : "ASCII") + " via punycode: " + Re;
          }
        }
        V(E, w), y[p(455)] !== p(1176) && E[p(2737)] && (M[p(3019)](E[p(2737)]), M[p(3019)](":"));
        var ne = ze(E, y);
        if (ne !== void 0 && (y[p(455)] !== p(1176) && M[p(3019)]("//"), M[p(3019)](ne), E[p(648)] && E.path[p(1346)](0) !== "/" && M[p(3019)]("/")), E.path !== void 0) {
          var de = E[p(648)];
          !y[p(2771)] && (!$ || !$.absolutePath) && (de = Oe(de)), ne === void 0 && (de = de[p(1252)](/^\/\//, p(2320))), M[p(3019)](de);
        }
        return E[p(1717)] !== void 0 && (M[p(3019)]("?"), M[p(3019)](E[p(1717)])), E[p(2876)] !== void 0 && (M.push("#"), M[p(3019)](E.fragment)), M.join("");
      }
      function Ye(E, p) {
        const y = e;
        var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, M = arguments[3], $ = {};
        return !M && (E = Ae(He(E, w), w), p = Ae(He(p, w), w)), w = w || {}, !w[y(768)] && p[y(2737)] ? ($[y(2737)] = p[y(2737)], $[y(545)] = p[y(545)], $[y(779)] = p.host, $[y(991)] = p[y(991)], $.path = Oe(p[y(648)] || ""), $[y(1717)] = p[y(1717)]) : (p.userinfo !== void 0 || p[y(779)] !== void 0 || p.port !== void 0 ? ($.userinfo = p[y(545)], $[y(779)] = p[y(779)], $[y(991)] = p[y(991)], $[y(648)] = Oe(p[y(648)] || ""), $[y(1717)] = p.query) : (p.path ? (p.path[y(1346)](0) === "/" ? $[y(648)] = Oe(p[y(648)]) : ((E[y(545)] !== void 0 || E[y(779)] !== void 0 || E[y(991)] !== void 0) && !E[y(648)] ? $.path = "/" + p[y(648)] : E[y(648)] ? $[y(648)] = E[y(648)][y(1908)](0, E[y(648)][y(3007)]("/") + 1) + p[y(648)] : $[y(648)] = p[y(648)], $[y(648)] = Oe($.path)), $[y(1717)] = p[y(1717)]) : ($.path = E[y(648)], p.query !== void 0 ? $[y(1717)] = p[y(1717)] : $[y(1717)] = E[y(1717)]), $[y(545)] = E[y(545)], $[y(779)] = E[y(779)], $.port = E[y(991)]), $[y(2737)] = E[y(2737)]), $.fragment = p[y(2876)], $;
      }
      function ux(E, p, y) {
        var M = d({ scheme: e(2607) }, y);
        return He(Ye(Ae(E, M), Ae(p, M), M, !0), M);
      }
      function Mx(E, p) {
        return typeof E == "string" ? E = He(Ae(E, p), p) : i(E) === "object" && (E = Ae(He(E, p), p)), E;
      }
      function pa(E, p, y) {
        const w = e;
        return typeof E == "string" ? E = He(Ae(E, y), y) : i(E) === w(2220) && (E = He(E, y)), typeof p === w(2028) ? p = He(Ae(p, y), y) : i(p) === w(2220) && (p = He(p, y)), E === p;
      }
      function kn(E, p) {
        const y = e;
        return E && E[y(511)]()[y(1252)](!p || !p[y(2953)] ? f[y(1656)] : g[y(1656)], J);
      }
      function b0(E, p) {
        const y = e;
        return E && E[y(511)]()[y(1252)](!p || !p[y(2953)] ? f.PCT_ENCODED : g[y(1401)], ee);
      }
      var W0 = { scheme: e(1208), domainHost: !0, parse: function(p, y) {
        const w = e;
        return !p[w(779)] && (p[w(1491)] = p[w(1491)] || w(2640)), p;
      }, serialize: function(p, y) {
        const w = e;
        var M = String(p[w(2737)])[w(1119)]() === w(1496);
        return (p[w(991)] === (M ? 443 : 80) || p.port === "") && (p.port = void 0), !p[w(648)] && (p[w(648)] = "/"), p;
      } }, ma = { scheme: e(1496), domainHost: W0.domainHost, parse: W0[e(1598)], serialize: W0.serialize };
      function ba(E) {
        const p = e;
        return typeof E.secure === p(2903) ? E[p(2398)] : String(E[p(2737)])[p(1119)]() === p(1991);
      }
      var K0 = { scheme: "ws", domainHost: !0, parse: function(p, y) {
        const w = e;
        var M = p;
        return M.secure = ba(M), M[w(816)] = (M.path || "/") + (M.query ? "?" + M[w(1717)] : ""), M.path = void 0, M.query = void 0, M;
      }, serialize: function(p, y) {
        const w = e;
        if ((p[w(991)] === (ba(p) ? 443 : 80) || p[w(991)] === "") && (p[w(991)] = void 0), typeof p.secure == "boolean" && (p[w(2737)] = p[w(2398)] ? w(1991) : "ws", p[w(2398)] = void 0), p[w(816)]) {
          var M = p[w(816)][w(1958)]("?"), $ = h(M, 2), ne = $[0], de = $[1];
          p.path = ne && ne !== "/" ? ne : void 0, p[w(1717)] = de, p[w(816)] = void 0;
        }
        return p.fragment = void 0, p;
      } }, ga = { scheme: e(1991), domainHost: K0[e(1272)], parse: K0[e(1598)], serialize: K0.serialize }, Pn = {}, ya = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", o0 = "[0-9A-Fa-f]", In = n(n(e(538) + o0 + "%" + o0 + o0 + "%" + o0 + o0) + "|" + n("%[89A-Fa-f]" + o0 + "%" + o0 + o0) + "|" + n("%" + o0 + o0)), En = e(2711), Rn = e(2272), Cn = s(Rn, '[\\"\\\\]'), Fn = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", _n = new RegExp(ya, "g"), L0 = new RegExp(In, "g"), Nn = new RegExp(s(e(1846), En, e(2300), e(2728), Cn), "g"), va = new RegExp(s(e(1846), ya, Fn), "g"), Tn = va;
      function $x(E) {
        const p = e;
        var y = ee(E);
        return y[p(789)](_n) ? y : E;
      }
      var wa = { scheme: e(2848), parse: function(p, y) {
        const w = e;
        var M = p, $ = M.to = M[w(648)] ? M[w(648)].split(",") : [];
        if (M[w(648)] = void 0, M[w(1717)]) {
          for (var ne = !1, de = {}, Re = M.query.split("&"), je = 0, Be = Re[w(1148)]; je < Be; ++je) {
            var Ce = Re[je].split("=");
            switch (Ce[0]) {
              case "to":
                for (var De = Ce[1][w(1958)](","), We = 0, ge = De.length; We < ge; ++We)
                  $[w(3019)](De[We]);
                break;
              case w(616):
                M[w(616)] = b0(Ce[1], y);
                break;
              case w(3034):
                M[w(3034)] = b0(Ce[1], y);
                break;
              default:
                ne = !0, de[b0(Ce[0], y)] = b0(Ce[1], y);
                break;
            }
          }
          ne && (M[w(726)] = de);
        }
        M.query = void 0;
        for (var $e = 0, Ke = $[w(1148)]; $e < Ke; ++$e) {
          var Ue = $[$e].split("@");
          if (Ue[0] = b0(Ue[0]), y[w(2211)]) Ue[1] = b0(Ue[1], y)[w(1119)]();
          else try {
            Ue[1] = F[w(1648)](b0(Ue[1], y)[w(1119)]());
          } catch (I0) {
            M.error = M[w(1491)] || w(2790) + I0;
          }
          $[$e] = Ue.join("@");
        }
        return M;
      }, serialize: function(p, y) {
        const w = e;
        var M = p, $ = u(p.to);
        if ($) {
          for (var ne = 0, de = $[w(1148)]; ne < de; ++ne) {
            var Re = String($[ne]), je = Re[w(3007)]("@"), Be = Re[w(1908)](0, je)[w(1252)](L0, $x)[w(1252)](L0, c).replace(Nn, J), Ce = Re.slice(je + 1);
            try {
              Ce = y[w(2953)] ? F.toUnicode(Ce) : F.toASCII(b0(Ce, y)[w(1119)]());
            } catch ($e) {
              M[w(1491)] = M[w(1491)] || w(1985) + (y.iri ? "Unicode" : w(740)) + " via punycode: " + $e;
            }
            $[ne] = Be + "@" + Ce;
          }
          M.path = $.join(",");
        }
        var De = p[w(726)] = p[w(726)] || {};
        p[w(616)] && (De[w(616)] = p[w(616)]), p.body && (De[w(3034)] = p[w(3034)]);
        var We = [];
        for (var ge in De)
          De[ge] !== Pn[ge] && We.push(ge.replace(L0, $x).replace(L0, c)[w(1252)](va, J) + "=" + De[ge][w(1252)](L0, $x)[w(1252)](L0, c)[w(1252)](Tn, J));
        return We[w(1148)] && (M[w(1717)] = We.join("&")), M;
      } }, qn = /^([^\:]+)\:(.*)/, Sa = { scheme: e(1481), parse: function(p, y) {
        const w = e;
        var M = p[w(648)] && p.path[w(789)](qn), $ = p;
        if (M) {
          var ne = y[w(2737)] || $.scheme || w(1481), de = M[1].toLowerCase(), Re = M[2], je = ne + ":" + (y[w(3020)] || de), Be = L[je];
          $[w(3020)] = de, $.nss = Re, $[w(648)] = void 0, Be && ($ = Be[w(1598)]($, y));
        } else $[w(1491)] = $[w(1491)] || "URN can not be parsed.";
        return $;
      }, serialize: function(p, y) {
        const w = e;
        var M = y.scheme || p[w(2737)] || "urn", $ = p[w(3020)], ne = M + ":" + (y[w(3020)] || $), de = L[ne];
        de && (p = de[w(1803)](p, y));
        var Re = p, je = p[w(1279)];
        return Re.path = ($ || y[w(3020)]) + ":" + je, Re;
      } }, An = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, ka = { scheme: e(1989), parse: function(p, y) {
        const w = e;
        var M = p;
        return M.uuid = M[w(1279)], M.nss = void 0, !y[w(768)] && (!M[w(1486)] || !M[w(1486)][w(789)](An)) && (M[w(1491)] = M[w(1491)] || w(1107)), M;
      }, serialize: function(p, y) {
        const w = e;
        var M = p;
        return M.nss = (p[w(1486)] || "")[w(1119)](), M;
      } };
      L[W0[e(2737)]] = W0, L[ma.scheme] = ma, L[K0[e(2737)]] = K0, L[ga.scheme] = ga, L[wa[e(2737)]] = wa, L[Sa[e(2737)]] = Sa, L[ka.scheme] = ka, r[e(2475)] = L, r[e(771)] = J, r[e(944)] = ee, r[e(1598)] = Ae, r[e(2883)] = Oe, r[e(1803)] = He, r.resolveComponents = Ye, r.resolve = ux, r[e(2331)] = Mx, r[e(542)] = pa, r[e(1336)] = kn, r[e(853)] = b0, Object.defineProperty(r, "__esModule", { value: !0 });
    });
  })(X0, X0[o(1229)])), X0[o(1229)];
}
var Qx, nr;
function la() {
  return nr || (nr = 1, Qx = function o(x, t) {
    const r = Z;
    if (x === t) return !0;
    if (x && t && typeof x == r(2220) && typeof t == r(2220)) {
      if (x[r(1230)] !== t[r(1230)]) return !1;
      var e, s, n;
      if (Array[r(500)](x)) {
        if (e = x[r(1148)], e != t[r(1148)]) return !1;
        for (s = e; s-- !== 0; ) if (!o(x[s], t[s])) return !1;
        return !0;
      }
      if (x[r(1230)] === RegExp) return x[r(484)] === t[r(484)] && x[r(2907)] === t[r(2907)];
      if (x[r(3006)] !== Object[r(1706)][r(3006)]) return x[r(3006)]() === t[r(3006)]();
      if (x[r(511)] !== Object[r(1706)].toString) return x[r(511)]() === t[r(511)]();
      if (n = Object[r(1877)](x), e = n[r(1148)], e !== Object[r(1877)](t)[r(1148)]) return !1;
      for (s = e; s-- !== 0; ) if (!Object[r(1706)][r(1446)][r(2689)](t, n[s])) return !1;
      for (s = e; s-- !== 0; ) {
        var i = n[s];
        if (!o(x[i], t[i])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), Qx;
}
var Xx, or;
function tc() {
  return or || (or = 1, Xx = function(x) {
    const t = Z;
    for (var r = 0, e = x[t(1148)], s = 0, n; s < e; )
      r++, n = x[t(2307)](s++), n >= 55296 && n <= 56319 && s < e && (n = x[t(2307)](s), (n & 64512) == 56320 && s++);
    return r;
  }), Xx;
}
var Yx, ir;
function B0() {
  const o = a;
  if (ir) return Yx;
  ir = 1, Yx = { copy: x, checkDataType: t, checkDataTypes: r, coerceToTypes: s, toHash: n, getProperty: u, escapeQuotes: d, equal: la(), ucs2length: tc(), varOccurences: l, varReplace: f, schemaHasRules: g, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: v, getPathExpr: k, getPath: I, getData: R, unescapeFragment: C, unescapeJsonPointer: O, escapeFragment: j, escapeJsonPointer: D };
  function x(N, _) {
    _ = _ || {};
    for (var z in N) _[z] = N[z];
    return _;
  }
  function t(N, _, z, U) {
    const H = Z;
    var G = H(U ? 377 : 562), ie = H(U ? 2312 : 997), ue = U ? "!" : "", le = U ? "" : "!";
    switch (N) {
      case H(2607):
        return _ + G + H(2607);
      case H(1912):
        return ue + H(1792) + _ + ")";
      case H(2220):
        return "(" + ue + _ + ie + H(863) + _ + G + '"object"' + ie + le + "Array.isArray(" + _ + "))";
      case H(1999):
        return H(1356) + _ + G + H(400) + ie + le + "(" + _ + H(968) + ie + _ + G + _ + (z ? ie + ue + H(640) + _ + ")" : "") + ")";
      case H(867):
        return "(typeof " + _ + G + '"' + N + '"' + (z ? ie + ue + H(640) + _ + ")" : "") + ")";
      default:
        return H(863) + _ + G + '"' + N + '"';
    }
  }
  function r(N, _, z) {
    const U = Z;
    switch (N[U(1148)]) {
      case 1:
        return t(N[0], _, z, !0);
      default:
        var H = "", G = n(N);
        G[U(1912)] && G[U(2220)] && (H = G.null ? "(" : "(!" + _ + U(2312), H += U(863) + _ + U(1371), delete G.null, delete G[U(1912)], delete G[U(2220)]), G[U(867)] && delete G[U(1999)];
        for (var ie in G) H += (H ? " && " : "") + t(ie, _, z, !0);
        return H;
    }
  }
  var e = n([o(2028), o(867), o(1999), o(2903), o(2607)]);
  function s(N, _) {
    const z = o;
    if (Array[z(500)](_)) {
      for (var U = [], H = 0; H < _[z(1148)]; H++) {
        var G = _[H];
        (e[G] || N === z(1912) && G === z(1912)) && (U[U[z(1148)]] = G);
      }
      if (U[z(1148)]) return U;
    } else {
      if (e[_]) return [_];
      if (N === z(1912) && _ === z(1912)) return ["array"];
    }
  }
  function n(N) {
    const _ = o;
    for (var z = {}, U = 0; U < N[_(1148)]; U++) z[N[U]] = !0;
    return z;
  }
  var i = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(N) {
    const _ = o;
    return typeof N == _(867) ? "[" + N + "]" : i[_(1531)](N) ? "." + N : "['" + d(N) + "']";
  }
  function d(N) {
    const _ = o;
    return N.replace(c, "\\$&")[_(1252)](/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t");
  }
  function l(N, _) {
    const z = o;
    _ += "[^0-9]";
    var U = N[z(789)](new RegExp(_, "g"));
    return U ? U[z(1148)] : 0;
  }
  function f(N, _, z) {
    const U = o;
    return _ += U(2104), z = z[U(1252)](/\$/g, U(2013)), N[U(1252)](new RegExp(_, "g"), z + "$1");
  }
  function g(N, _) {
    if (typeof N == o(2903)) return !N;
    for (var U in N) if (_[U]) return !0;
  }
  function h(N, _, z) {
    const U = o;
    if (typeof N == "boolean") return !N && z != U(1409);
    for (var H in N) if (H != z && _[H]) return !0;
  }
  function m(N, _) {
    if (typeof N != o(2903)) {
      for (var U in N) if (!_[U]) return U;
    }
  }
  function v(N) {
    return "'" + d(N) + "'";
  }
  function k(N, _, z, U) {
    const H = o;
    var G = z ? "'/' + " + _ + (U ? "" : H(453)) : U ? H(290) + _ + H(1782) : "'[\\'' + " + _ + " + '\\']'";
    return P(N, G);
  }
  function I(N, _, z) {
    var U = v(z ? "/" + D(_) : u(_));
    return P(N, U);
  }
  var T = /^\/(?:[^~]|~0|~1)*$/, q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function R(N, _, z) {
    const U = o;
    var H, G, ie, ue;
    if (N === "") return U(1785);
    if (N[0] == "/") {
      if (!T[U(1531)](N)) throw new Error(U(2117) + N);
      G = N, ie = U(1785);
    } else {
      if (ue = N[U(789)](q), !ue) throw new Error(U(2117) + N);
      if (H = +ue[1], G = ue[2], G == "#") {
        if (H >= _) throw new Error(U(1187) + H + " levels up, current level is " + _);
        return z[_ - H];
      }
      if (H > _) throw new Error("Cannot access data " + H + U(3018) + _);
      if (ie = U(1506) + (_ - H || ""), !G) return ie;
    }
    for (var le = ie, oe = G[U(1958)]("/"), fe = 0; fe < oe.length; fe++) {
      var Pe = oe[fe];
      Pe && (ie += u(O(Pe)), le += U(997) + ie);
    }
    return le;
  }
  function P(N, _) {
    const z = o;
    return N == '""' ? _ : (N + " + " + _)[z(1252)](/([^\\])' \+ '/g, "$1");
  }
  function C(N) {
    return O(decodeURIComponent(N));
  }
  function j(N) {
    return encodeURIComponent(D(N));
  }
  function D(N) {
    const _ = o;
    return N[_(1252)](/~/g, "~0")[_(1252)](/\//g, "~1");
  }
  function O(N) {
    const _ = o;
    return N.replace(/~1/g, "/")[_(1252)](/~0/g, "~");
  }
  return Yx;
}
var et, cr;
function pn() {
  if (cr) return et;
  cr = 1;
  var o = B0();
  et = x;
  function x(t) {
    o[Z(1051)](t, this);
  }
  return et;
}
var xt = { exports: {} }, ur;
function ac() {
  const o = a;
  if (ur) return xt.exports;
  ur = 1;
  var x = xt[o(1229)] = function(e, s, n) {
    const i = o;
    typeof s == i(1149) && (n = s, s = {}), n = s.cb || n;
    var c = typeof n == i(1149) ? n : n[i(297)] || function() {
    }, u = n.post || function() {
    };
    t(s, c, u, e, "", e);
  };
  x[o(305)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[o(1668)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[o(1078)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x.skipKeywords = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, s, n, i, c, u, d, l, f, g) {
    const h = o;
    if (i && typeof i == h(2220) && !Array[h(500)](i)) {
      s(i, c, u, d, l, f, g);
      for (var m in i) {
        var v = i[m];
        if (Array[h(500)](v)) {
          if (m in x[h(1668)])
            for (var k = 0; k < v[h(1148)]; k++) t(e, s, n, v[k], c + "/" + m + "/" + k, u, c, m, i, k);
        } else if (m in x[h(1078)]) {
          if (v && typeof v == "object")
            for (var I in v) t(e, s, n, v[I], c + "/" + m + "/" + r(I), u, c, m, i, I);
        } else (m in x.keywords || e[h(791)] && !(m in x[h(2188)])) && t(e, s, n, v, c + "/" + m, u, c, m, i);
      }
      n(i, c, u, d, l, f, g);
    }
  }
  function r(e) {
    const s = o;
    return e[s(1252)](/~/g, "~0")[s(1252)](/\//g, "~1");
  }
  return xt[o(1229)];
}
var tt, dr;
function fa() {
  const o = a;
  if (dr) return tt;
  dr = 1;
  var x = xc(), t = la(), r = B0(), e = pn(), s = ac();
  tt = n, n[o(2447)] = I, n.fullPath = m, n[o(2740)] = T, n[o(2106)] = q, n.inlineRef = f, n[o(2238)] = i;
  function n(R, P, C) {
    const j = o;
    var D = this[j(667)][C];
    if (typeof D == j(2028))
      if (this._refs[D]) D = this[j(667)][D];
      else return n.call(this, R, P, D);
    if (D = D || this[j(638)][C], D instanceof e) return f(D[j(2238)], this[j(1157)][j(1301)]) ? D[j(2238)] : D.validate || this[j(994)](D);
    var O = i[j(2689)](this, P, C), N, _, z;
    return O && (N = O.schema, P = O.root, z = O[j(882)]), N instanceof e ? _ = N[j(2029)] || R[j(2689)](this, N[j(2238)], P, void 0, z) : N !== void 0 && (_ = f(N, this[j(1157)][j(1301)]) ? N : R[j(2689)](this, N, P, void 0, z)), _;
  }
  function i(R, P) {
    const C = o;
    var j = x[C(1598)](P), D = v(j), O = m(this[C(1601)](R[C(2238)]));
    if (Object[C(1877)](R.schema)[C(1148)] === 0 || D !== O) {
      var N = I(D), _ = this[C(667)][N];
      if (typeof _ == C(2028)) return c[C(2689)](this, R, _, j);
      if (_ instanceof e)
        _.validate || this[C(994)](_), R = _;
      else if (_ = this[C(638)][N], _ instanceof e) {
        if (_.validate || this[C(994)](_), N == I(P)) return { schema: _, root: R, baseId: O };
        R = _;
      } else return;
      if (!R[C(2238)]) return;
      O = m(this[C(1601)](R.schema));
    }
    return d[C(2689)](this, j, O, R[C(2238)], R);
  }
  function c(R, P, C) {
    const j = o;
    var D = i[j(2689)](this, R, P);
    if (D) {
      var O = D[j(2238)], N = D.baseId;
      R = D[j(1224)];
      var _ = this._getId(O);
      return _ && (N = T(N, _)), d[j(2689)](this, C, N, O, R);
    }
  }
  var u = r[o(1655)](["properties", o(1073), o(2897), o(600), o(2870)]);
  function d(R, P, C, j) {
    const D = o;
    if (R.fragment = R.fragment || "", R.fragment.slice(0, 1) == "/") {
      for (var O = R.fragment[D(1958)]("/"), N = 1; N < O[D(1148)]; N++) {
        var _ = O[N];
        if (_) {
          if (_ = r[D(2386)](_), C = C[_], C === void 0) break;
          var z;
          if (!u[_] && (z = this._getId(C), z && (P = T(P, z)), C.$ref)) {
            var U = T(P, C[D(2495)]), H = i[D(2689)](this, j, U);
            H && (C = H[D(2238)], j = H[D(1224)], P = H[D(882)]);
          }
        }
      }
      if (C !== void 0 && C !== j[D(2238)]) return { schema: C, root: j, baseId: P };
    }
  }
  var l = r[o(1655)]([o(2291), "format", o(2248), o(388), "minLength", o(2568), "minProperties", o(858), o(2547), o(1613), "minimum", "uniqueItems", o(2342), o(747), o(2897)]);
  function f(R, P) {
    if (P === !1) return !1;
    if (P === void 0 || P === !0) return g(R);
    if (P) return h(R) <= P;
  }
  function g(R) {
    const P = o;
    var C;
    if (Array[P(500)](R)) {
      for (var j = 0; j < R[P(1148)]; j++)
        if (C = R[j], typeof C == P(2220) && !g(C)) return !1;
    } else for (var D in R)
      if (D == P(2495) || (C = R[D], typeof C == P(2220) && !g(C))) return !1;
    return !0;
  }
  function h(R) {
    const P = o;
    var C = 0, j;
    if (Array[P(500)](R)) {
      for (var D = 0; D < R.length; D++)
        if (j = R[D], typeof j == P(2220) && (C += h(j)), C == 1 / 0) return 1 / 0;
    } else for (var O in R) {
      if (O == P(2495)) return 1 / 0;
      if (l[O]) C++;
      else if (j = R[O], typeof j == "object" && (C += h(j) + 1), C == 1 / 0) return 1 / 0;
    }
    return C;
  }
  function m(R, P) {
    const C = o;
    P !== !1 && (R = I(R));
    var j = x[C(1598)](R);
    return v(j);
  }
  function v(R) {
    const P = o;
    return x[P(1803)](R)[P(1958)]("#")[0] + "#";
  }
  var k = /#\/?$/;
  function I(R) {
    return R ? R[o(1252)](k, "") : "";
  }
  function T(R, P) {
    return P = I(P), x.resolve(R, P);
  }
  function q(R) {
    const P = o;
    var C = I(this[P(1601)](R)), j = { "": C }, D = { "": m(C, !1) }, O = {}, N = this;
    return s(R, { allKeys: !0 }, function(_, z, U, H, G, ie, ue) {
      const le = P;
      if (z !== "") {
        var oe = N[le(1601)](_), fe = j[H], Pe = D[H] + "/" + G;
        if (ue !== void 0 && (Pe += "/" + (typeof ue == le(867) ? ue : r[le(2095)](ue))), typeof oe == le(2028)) {
          oe = fe = I(fe ? x[le(855)](fe, oe) : oe);
          var ye = N[le(667)][oe];
          if (typeof ye == le(2028) && (ye = N[le(667)][ye]), ye && ye[le(2238)]) {
            if (!t(_, ye[le(2238)])) throw new Error('id "' + oe + le(2893));
          } else if (oe != I(Pe))
            if (oe[0] == "#") {
              if (O[oe] && !t(_, O[oe])) throw new Error('id "' + oe + le(2893));
              O[oe] = _;
            } else N[le(667)][oe] = Pe;
        }
        j[z] = fe, D[z] = Pe;
      }
    }), O;
  }
  return tt;
}
var at, lr;
function ha() {
  const o = a;
  if (lr) return at;
  lr = 1;
  var x = fa();
  at = { Validation: e(t), MissingRef: e(r) };
  function t(s) {
    const n = Z;
    this[n(2461)] = n(2377), this.errors = s, this[n(2413)] = this[n(2850)] = !0;
  }
  r[o(2461)] = function(s, n) {
    const i = o;
    return i(2399) + n + i(2038) + s;
  };
  function r(s, n, i) {
    const c = o;
    this[c(2461)] = i || r[c(2461)](s, n), this.missingRef = x[c(2740)](s, n), this[c(599)] = x.normalizeId(x.fullPath(this[c(2613)]));
  }
  function e(s) {
    const n = o;
    return s.prototype = Object[n(558)](Error[n(1706)]), s[n(1706)][n(1230)] = s, s;
  }
  return at;
}
var rt, fr;
function mn() {
  return fr || (fr = 1, rt = function(o, x) {
    const t = Z;
    x || (x = {}), typeof x === t(1149) && (x = { cmp: x });
    var r = typeof x[t(1407)] === t(2903) ? x[t(1407)] : !1, e = x.cmp && /* @__PURE__ */ (function(n) {
      return function(i) {
        return function(c, u) {
          var d = { key: c, value: i[c] }, l = { key: u, value: i[u] };
          return n(d, l);
        };
      };
    })(x[t(1664)]), s = [];
    return (function n(i) {
      const c = t;
      if (i && i[c(1159)] && typeof i[c(1159)] === c(1149) && (i = i.toJSON()), i !== void 0) {
        if (typeof i == "number") return isFinite(i) ? "" + i : c(2607);
        if (typeof i !== c(2220)) return JSON.stringify(i);
        var u, d;
        if (Array[c(500)](i)) {
          for (d = "[", u = 0; u < i.length; u++)
            u && (d += ","), d += n(i[u]) || c(2607);
          return d + "]";
        }
        if (i === null) return c(2607);
        if (s[c(2273)](i) !== -1) {
          if (r) return JSON[c(3038)](c(974));
          throw new TypeError(c(2776));
        }
        var l = s.push(i) - 1, f = Object[c(1877)](i).sort(e && e(i));
        for (d = "", u = 0; u < f.length; u++) {
          var g = f[u], h = n(i[g]);
          h && (d && (d += ","), d += JSON[c(3038)](g) + ":" + h);
        }
        return s.splice(l, 1), "{" + d + "}";
      }
    })(o);
  }), rt;
}
var st, hr;
function bn() {
  return hr || (hr = 1, st = function(x, t, r) {
    const e = Z;
    var s = "", n = x[e(2238)].$async === !0, i = x[e(3036)][e(355)](x[e(2238)], x[e(730)][e(2497)], "$ref"), c = x.self[e(1601)](x.schema);
    if (x.opts[e(493)]) {
      var u = x[e(3036)][e(619)](x.schema, x[e(730)][e(305)]);
      if (u) {
        var d = e(2513) + u;
        if (x.opts[e(493)] === "log") x[e(872)][e(2618)](d);
        else throw new Error(d);
      }
    }
    if (x.isTop && (s += e(2055), n && (x[e(2538)] = !0, s += e(521)), s += e(1795), c && (x.opts[e(1887)] || x[e(569)][e(1478)]) && (s += " " + ("/*# sourceURL=" + c + e(2372)) + " ")), typeof x[e(2238)] == e(2903) || !(i || x.schema.$ref)) {
      var t = e(1437), l = x[e(1113)], f = x[e(2585)], g = x.schema[t], h = x[e(1913)] + x.util[e(2528)](t), m = x.errSchemaPath + "/" + t, P = !x.opts.allErrors, D, v = e(1506) + (f || ""), R = e(467) + l;
      if (x[e(2238)] === !1) {
        x[e(2338)] ? P = !0 : s += e(465) + R + e(1734);
        var k = k || [];
        k[e(3019)](s), s = "", x[e(2324)] !== !1 ? (s += e(2793) + (D || e(1437)) + e(795) + x[e(1115)] + e(1218) + x.util.toQuotedString(m) + e(2777), x.opts[e(709)] !== !1 && (s += e(2701)), x[e(569)].verbose && (s += e(985) + x[e(1913)] + " , data: " + v + " "), s += e(2670)) : s += " {} ";
        var I = s;
        s = k[e(2906)](), !x[e(1629)] && P ? x[e(2538)] ? s += " throw new ValidationError([" + I + "]); " : s += e(1973) + I + e(1948) : s += " var err = " + I + e(1548);
      } else x[e(2338)] ? n ? s += " return data; " : s += e(3005) : s += e(465) + R + e(2839);
      return x[e(2338)] && (s += e(323)), s;
    }
    if (x[e(2338)]) {
      var T = x.isTop, l = x[e(1113)] = 0, f = x[e(2585)] = 0, v = e(1506);
      if (x[e(1392)] = x[e(855)][e(445)](x[e(1987)][e(1601)](x[e(1224)][e(2238)])), x[e(882)] = x[e(882)] || x.rootId, delete x[e(2338)], x[e(2140)] = [""], x[e(2238)][e(2096)] !== void 0 && x.opts[e(1626)] && x[e(569)][e(2619)]) {
        var q = e(2993);
        if (x[e(569)][e(2619)] === e(2127)) x[e(872)].warn(q);
        else throw new Error(q);
      }
      s += e(424), s += e(943), s += e(2667);
    } else {
      var l = x[e(1113)], f = x[e(2585)], v = e(1506) + (f || "");
      if (c && (x[e(882)] = x[e(855)][e(2740)](x[e(882)], c)), n && !x.async) throw new Error(e(2949));
      s += e(1021) + l + e(825);
    }
    var R = e(467) + l, P = !x[e(569)].allErrors, C = "", j = "", D, O = x[e(2238)].type, N = Array[e(500)](O);
    if (O && x[e(569)][e(3011)] && x.schema[e(3011)] === !0 && (N ? O[e(2273)](e(2607)) == -1 && (O = O[e(1557)]("null")) : O != e(2607) && (O = [O, e(2607)], N = !0)), N && O[e(1148)] == 1 && (O = O[0], N = !1), x[e(2238)][e(2495)] && i) {
      if (x[e(569)][e(2729)] == e(2145)) throw new Error(e(2146) + x.errSchemaPath + e(822));
      x[e(569)][e(2729)] !== !0 && (i = !1, x[e(872)][e(2618)](e(382) + x.errSchemaPath + '"'));
    }
    if (x[e(2238)][e(1922)] && x[e(569)].$comment && (s += " " + x[e(730)][e(2497)][e(1922)][e(2345)](x, "$comment")), O) {
      if (x[e(569)][e(1173)]) var _ = x[e(3036)][e(567)](x[e(569)][e(1173)], O);
      var z = x[e(730)].types[O];
      if (_ || N || z === !0 || z && !ke(z)) {
        var h = x[e(1913)] + ".type", m = x[e(601)] + e(2534), h = x[e(1913)] + e(1589), m = x[e(601)] + e(2534), U = N ? e(681) : "checkDataType";
        if (s += e(982) + x[e(3036)][U](O, v, x[e(569)][e(832)], !0) + ") { ", _) {
          var H = e(372) + l, G = e(2035) + l;
          s += e(465) + H + e(2189) + v + e(1644) + G + e(2048), x.opts[e(1173)] == e(1912) && (s += e(982) + H + e(2582) + v + e(2904) + v + e(2823) + v + e(1035) + v + e(2337) + H + e(2189) + v + e(2314) + x.util.checkDataType(x[e(2238)][e(2291)], v, x[e(569)].strictNumbers) + ") " + G + e(1035) + v + "; } "), s += e(982) + G + " !== undefined) ; ";
          var ie = _;
          if (ie)
            for (var ue, le = -1, oe = ie[e(1148)] - 1; le < oe; )
              ue = ie[le += 1], ue == "string" ? s += e(1334) + H + e(2348) + H + e(2195) + G + e(762) + v + e(1323) + v + " === null) " + G + e(2389) : ue == "number" || ue == "integer" ? (s += e(1334) + H + e(1195) + v + " === null || (" + H + e(1199) + v + e(997) + v + e(2738) + v + " ", ue == e(1999) && (s += e(514) + v + " % 1)"), s += e(1756) + G + e(2659) + v + "; ") : ue == e(2903) ? s += " else if (" + v + e(938) + v + e(1602) + v + e(1333) + G + e(2110) + v + e(2254) + v + e(1931) + G + e(2839) : ue == e(2607) ? s += " else if (" + v + e(1219) + v + e(1602) + v + e(2832) + G + e(1191) : x[e(569)].coerceTypes == e(1912) && ue == "array" && (s += e(1334) + H + e(2498) + H + " == 'number' || " + H + e(1195) + v + " == null) " + G + e(1450) + v + e(1327));
          s += e(2344);
          var k = k || [];
          k[e(3019)](s), s = "", x[e(2324)] !== !1 ? (s += e(2793) + (D || e(2291)) + e(795) + x.errorPath + e(1218) + x[e(3036)][e(782)](m) + e(674), N ? s += "" + O[e(896)](",") : s += "" + O, s += "' } ", x.opts[e(709)] !== !1 && (s += e(1612), N ? s += "" + O.join(",") : s += "" + O, s += "' "), x.opts[e(2330)] && (s += e(1426) + h + e(2366) + x[e(1913)] + e(2960) + v + " "), s += e(2670)) : s += " {} ";
          var I = s;
          s = k.pop(), !x[e(1629)] && P ? x[e(2538)] ? s += " throw new ValidationError([" + I + e(1420) : s += e(1973) + I + e(1948) : s += e(1533) + I + e(1548), s += " } if (" + G + e(2871);
          var fe = f ? e(1506) + (f - 1 || "") : e(1764), Pe = f ? x[e(2140)][f] : e(1708);
          s += " " + v + e(1035) + G + "; ", !f && (s += e(1188) + fe + e(2782)), s += " " + fe + "[" + Pe + e(2135) + G + "; } ";
        } else {
          var k = k || [];
          k[e(3019)](s), s = "", x.createErrors !== !1 ? (s += e(2793) + (D || e(2291)) + e(795) + x.errorPath + e(1218) + x.util.toQuotedString(m) + e(674), N ? s += "" + O[e(896)](",") : s += "" + O, s += "' } ", x.opts[e(709)] !== !1 && (s += e(1612), N ? s += "" + O.join(",") : s += "" + O, s += "' "), x.opts.verbose && (s += e(1426) + h + e(2366) + x[e(1913)] + e(2960) + v + " "), s += e(2670)) : s += e(331);
          var I = s;
          s = k[e(2906)](), !x.compositeRule && P ? x.async ? s += e(1464) + I + e(1420) : s += e(1973) + I + e(1948) : s += e(1533) + I + e(1548);
        }
        s += e(2670);
      }
    }
    if (x.schema.$ref && !i) s += " " + x[e(730)][e(2497)][e(2495)][e(2345)](x, e(2495)) + " ", P && (s += e(1759), T ? s += "0" : s += e(1258) + l, s += e(2719), j += "}");
    else {
      var ye = x[e(730)];
      if (ye) {
        for (var z, Le = -1, _e = ye[e(1148)] - 1; Le < _e; )
          if (z = ye[Le += 1], ke(z)) {
            if (z.type && (s += e(982) + x[e(3036)][e(1006)](z[e(2291)], v, x.opts[e(832)]) + e(2719)), x[e(569)].useDefaults) {
              if (z[e(2291)] == e(2220) && x[e(2238)][e(1117)]) {
                var g = x[e(2238)][e(1117)], Je = Object[e(1877)](g), A = Je;
                if (A)
                  for (var F, L = -1, J = A[e(1148)] - 1; L < J; ) {
                    F = A[L += 1];
                    var ee = g[F];
                    if (ee[e(2096)] !== void 0) {
                      var V = v + x.util[e(2528)](F);
                      if (x.compositeRule) {
                        if (x[e(569)][e(2619)]) {
                          var q = e(966) + V;
                          if (x[e(569)].strictDefaults === e(2127)) x[e(872)][e(2618)](q);
                          else throw new Error(q);
                        }
                      } else s += e(982) + V + e(1461), x[e(569)][e(1626)] == e(689) && (s += " || " + V + " === null || " + V + e(2411)), s += e(866) + V + e(1035), x[e(569)][e(1626)] == e(609) ? s += " " + x[e(2868)](ee[e(2096)]) + " " : s += " " + JSON[e(3038)](ee[e(2096)]) + " ", s += "; ";
                    }
                  }
              } else if (z.type == e(1912) && Array[e(500)](x[e(2238)].items)) {
                var X = x[e(2238)][e(1603)];
                if (X) {
                  for (var ee, le = -1, ce = X.length - 1; le < ce; )
                    if (ee = X[le += 1], ee[e(2096)] !== void 0) {
                      var V = v + "[" + le + "]";
                      if (x[e(1629)]) {
                        if (x[e(569)][e(2619)]) {
                          var q = e(966) + V;
                          if (x[e(569)][e(2619)] === "log") x[e(872)].warn(q);
                          else throw new Error(q);
                        }
                      } else s += " if (" + V + e(1461), x[e(569)][e(1626)] == e(689) && (s += e(2312) + V + e(949) + V + e(2411)), s += " ) " + V + e(1035), x[e(569)][e(1626)] == e(609) ? s += " " + x[e(2868)](ee[e(2096)]) + " " : s += " " + JSON[e(3038)](ee[e(2096)]) + " ", s += "; ";
                    }
                }
              }
            }
            var se = z[e(1354)];
            if (se) {
              for (var te, Me = -1, Ae = se[e(1148)] - 1; Me < Ae; )
                if (te = se[Me += 1], Ge(te)) {
                  var ze = te[e(2345)](x, te[e(2396)], z[e(2291)]);
                  ze && (s += " " + ze + " ", P && (C += "}"));
                }
            }
            if (P && (s += " " + C + " ", C = ""), z[e(2291)] && (s += e(2670), O && O === z[e(2291)] && !_)) {
              s += e(401);
              var h = x[e(1913)] + e(1589), m = x[e(601)] + e(2534), k = k || [];
              k[e(3019)](s), s = "", x[e(2324)] !== !1 ? (s += e(2793) + (D || e(2291)) + e(795) + x[e(1115)] + " , schemaPath: " + x[e(3036)][e(782)](m) + e(674), N ? s += "" + O[e(896)](",") : s += "" + O, s += e(1390), x[e(569)][e(709)] !== !1 && (s += e(1612), N ? s += "" + O[e(896)](",") : s += "" + O, s += "' "), x[e(569)][e(2330)] && (s += " , schema: validate.schema" + h + e(2366) + x[e(1913)] + e(2960) + v + " "), s += " } ") : s += e(331);
              var I = s;
              s = k.pop(), !x.compositeRule && P ? x[e(2538)] ? s += " throw new ValidationError([" + I + "]); " : s += " validate.errors = [" + I + e(1948) : s += e(1533) + I + e(1548), s += e(2670);
            }
            P && (s += e(1028), T ? s += "0" : s += e(1258) + l, s += e(2719), j += "}");
          }
      }
    }
    P && (s += " " + j + " "), T ? (n ? (s += e(1435), s += e(3040)) : (s += e(917), s += e(2256)), s += e(1411)) : s += " var " + R + e(606) + l + ";";
    function ke(Qe) {
      for (var He = Qe[e(1354)], Ye = 0; Ye < He.length; Ye++) if (Ge(He[Ye])) return !0;
    }
    function Ge(Qe) {
      const Oe = e;
      return x[Oe(2238)][Qe[Oe(2396)]] !== void 0 || Qe[Oe(847)] && n0(Qe);
    }
    function n0(Qe) {
      const Oe = e;
      for (var He = Qe[Oe(847)], Ye = 0; Ye < He[Oe(1148)]; Ye++) if (x[Oe(2238)][He[Ye]] !== void 0) return !0;
    }
    return s;
  }), st;
}
var nt, pr;
function rc() {
  const o = a;
  if (pr) return nt;
  pr = 1;
  var x = fa(), t = B0(), r = ha(), e = mn(), s = bn(), n = t.ucs2length, i = la(), c = r[o(1360)];
  nt = u;
  function u(I, T, q, R) {
    const P = o;
    var C = this, j = this._opts, D = [void 0], O = {}, N = [], _ = {}, z = [], U = {}, H = [];
    T = T || { schema: I, refVal: D, refs: O };
    var G = d[P(2689)](this, I, T, R), ie = this[P(2045)][G[P(2688)]];
    if (G[P(2072)]) return ie[P(2825)] = Pe;
    var ue = this[P(2754)], le = this.RULES;
    try {
      var oe = ye(I, T, q, R);
      ie[P(2029)] = oe;
      var fe = ie[P(2825)];
      return fe && (fe.schema = oe[P(2238)], fe.errors = null, fe[P(1515)] = oe[P(1515)], fe[P(987)] = oe[P(987)], fe[P(1224)] = oe[P(1224)], fe[P(1611)] = oe[P(1611)], j[P(1887)] && (fe[P(484)] = oe[P(484)])), oe;
    } finally {
      l.call(this, I, T, R);
    }
    function Pe() {
      const V = P;
      var X = ie[V(2029)], ce = X[V(1046)](this, arguments);
      return Pe[V(1139)] = X[V(1139)], ce;
    }
    function ye(V, X, ce, se) {
      const te = P;
      var Me = !X || X && X[te(2238)] == V;
      if (X[te(2238)] != T[te(2238)]) return u[te(2689)](C, V, X, ce, se);
      var Ae = V[te(1611)] === !0, ze = s({ isTop: !0, schema: V, isRoot: Me, baseId: se, root: X, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: r[te(1695)], RULES: le, validate: s, util: t, resolve: x, resolveRef: Le, usePattern: L, useDefault: J, useCustomRule: ee, opts: j, formats: ue, logger: C.logger, self: C });
      ze = k(D, m) + k(N, g) + k(z, h) + k(H, v) + ze, j[te(1478)] && (ze = j[te(1478)](ze, V));
      var ke;
      try {
        var Ge = new Function(te(1987), te(730), te(1882), te(1224), te(987), te(1019), te(2259), te(542), "ucs2length", "ValidationError", ze);
        ke = Ge(C, le, ue, T, D, z, H, i, n, c), D[0] = ke;
      } catch (n0) {
        throw C.logger[te(1491)]("Error compiling schema, function code:", ze), n0;
      }
      return ke.schema = V, ke[te(1139)] = null, ke[te(1515)] = O, ke.refVal = D, ke[te(1224)] = Me ? ke : X, Ae && (ke[te(1611)] = !0), j[te(1887)] === !0 && (ke[te(484)] = { code: ze, patterns: N, defaults: z }), ke;
    }
    function Le(V, X, ce) {
      const se = P;
      X = x[se(2740)](V, X);
      var te = O[X], Me, Ae;
      if (te !== void 0) return Me = D[te], Ae = se(1289) + te + "]", F(Me, Ae);
      if (!ce && T[se(1515)]) {
        var ze = T[se(1515)][X];
        if (ze !== void 0) return Me = T[se(987)][ze], Ae = _e(X, Me), F(Me, Ae);
      }
      Ae = _e(X);
      var ke = x[se(2689)](C, ye, T, X);
      if (ke === void 0) {
        var Ge = q && q[X];
        Ge && (ke = x.inlineRef(Ge, j[se(1301)]) ? Ge : u[se(2689)](C, Ge, T, q, V));
      }
      if (ke === void 0) Je(X);
      else return A(X, ke), F(ke, Ae);
    }
    function _e(V, X) {
      const ce = P;
      var se = D[ce(1148)];
      return D[se] = X, O[V] = se, ce(987) + se;
    }
    function Je(V) {
      delete O[V];
    }
    function A(V, X) {
      var ce = O[V];
      D[ce] = X;
    }
    function F(V, X) {
      return typeof V == "object" || typeof V == P(2903) ? { code: X, schema: V, inline: !0 } : { code: X, $async: V && !!V.$async };
    }
    function L(V) {
      const X = P;
      var ce = _[V];
      return ce === void 0 && (ce = _[V] = N[X(1148)], N[ce] = V), X(2248) + ce;
    }
    function J(V) {
      const X = P;
      switch (typeof V) {
        case X(2903):
        case X(867):
          return "" + V;
        case X(2028):
          return t.toQuotedString(V);
        case X(2220):
          if (V === null) return "null";
          var ce = e(V), se = U[ce];
          return se === void 0 && (se = U[ce] = z[X(1148)], z[se] = V), X(2096) + se;
      }
    }
    function ee(V, X, ce, se) {
      const te = P;
      if (C[te(1157)][te(2951)] !== !1) {
        var Me = V[te(528)][te(600)];
        if (Me && !Me[te(2077)](function(Ye) {
          return Object[te(1706)].hasOwnProperty.call(ce, Ye);
        })) throw new Error(te(1978) + Me[te(896)](","));
        var Ae = V[te(528)][te(2951)];
        if (Ae) {
          var ze = Ae(X);
          if (!ze) {
            var ke = "keyword schema is invalid: " + C[te(2215)](Ae[te(1139)]);
            if (C[te(1157)][te(2951)] == "log") C.logger[te(1491)](ke);
            else throw new Error(ke);
          }
        }
      }
      var Ge = V.definition.compile, n0 = V[te(528)][te(2204)], Qe = V.definition[te(1711)], Oe;
      if (Ge) Oe = Ge[te(2689)](C, X, ce, se);
      else if (Qe)
        Oe = Qe[te(2689)](C, X, ce, se), j[te(2951)] !== !1 && C[te(2951)](Oe, !0);
      else if (n0) Oe = n0[te(2689)](C, se, V[te(2396)], X, ce);
      else if (Oe = V.definition[te(2029)], !Oe) return;
      if (Oe === void 0) throw new Error('custom keyword "' + V.keyword + te(1699));
      var He = H.length;
      return H[He] = Oe, { code: "customRule" + He, validate: Oe };
    }
  }
  function d(I, T, q) {
    const R = o;
    var P = f[R(2689)](this, I, T, q);
    return P >= 0 ? { index: P, compiling: !0 } : (P = this[R(2045)].length, this[R(2045)][P] = { schema: I, root: T, baseId: q }, { index: P, compiling: !1 });
  }
  function l(I, T, q) {
    const R = o;
    var P = f.call(this, I, T, q);
    P >= 0 && this[R(2045)][R(2176)](P, 1);
  }
  function f(I, T, q) {
    const R = o;
    for (var P = 0; P < this._compilations.length; P++) {
      var C = this[R(2045)][P];
      if (C[R(2238)] == I && C.root == T && C[R(882)] == q) return P;
    }
    return -1;
  }
  function g(I, T) {
    const q = o;
    return q(2450) + I + q(2757) + t[q(782)](T[I]) + ");";
  }
  function h(I) {
    const T = o;
    return T(1290) + I + T(1269) + I + "];";
  }
  function m(I, T) {
    return T[I] === void 0 ? "" : "var refVal" + I + " = refVal[" + I + "];";
  }
  function v(I) {
    const T = o;
    return T(2264) + I + T(2367) + I + "];";
  }
  function k(I, T) {
    const q = o;
    if (!I[q(1148)]) return "";
    for (var R = "", P = 0; P < I[q(1148)]; P++) R += T(P, I);
    return R;
  }
  return nt;
}
var ot = { exports: {} }, mr;
function sc() {
  const o = a;
  if (mr) return ot[o(1229)];
  mr = 1;
  var x = ot[o(1229)] = function() {
    const r = o;
    this[r(1971)] = {};
  };
  return x[o(1706)][o(1621)] = function(r, e) {
    const s = o;
    this[s(1971)][r] = e;
  }, x[o(1706)][o(1507)] = function(r) {
    return this[o(1971)][r];
  }, x[o(1706)][o(1615)] = function(r) {
    const e = o;
    delete this[e(1971)][r];
  }, x[o(1706)].clear = function() {
    const r = o;
    this[r(1971)] = {};
  }, ot.exports;
}
var it, br;
function nc() {
  if (br) return it;
  br = 1;
  var o = B0(), x = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, t = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], r = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, e = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, s = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, i = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, c = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, u = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, d = /^(?:\/(?:[^~/]|~0|~1)*)*$/, l = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, f = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  it = g;
  function g(C) {
    const j = Z;
    return C = C == j(412) ? j(412) : j(659), o[j(1051)](g[C]);
  }
  g.fast = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": i, url: c, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: e, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: P, uuid: u, "json-pointer": d, "json-pointer-uri-fragment": l, "relative-json-pointer": f }, g.full = { date: m, time: v, "date-time": I, uri: q, "uri-reference": n, "uri-template": i, url: c, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: e, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: P, uuid: u, "json-pointer": d, "json-pointer-uri-fragment": l, "relative-json-pointer": f };
  function h(C) {
    return C % 4 === 0 && (C % 100 !== 0 || C % 400 === 0);
  }
  function m(C) {
    var D = C[Z(789)](x);
    if (!D) return !1;
    var O = +D[1], N = +D[2], _ = +D[3];
    return N >= 1 && N <= 12 && _ >= 1 && _ <= (N == 2 && h(O) ? 29 : t[N]);
  }
  function v(C, j) {
    var O = C[Z(789)](r);
    if (!O) return !1;
    var N = O[1], _ = O[2], z = O[3], U = O[5];
    return (N <= 23 && _ <= 59 && z <= 59 || N == 23 && _ == 59 && z == 60) && (!j || U);
  }
  var k = /t|\s/i;
  function I(C) {
    var D = C[Z(1958)](k);
    return D.length == 2 && m(D[0]) && v(D[1], !0);
  }
  var T = /\/|:/;
  function q(C) {
    const j = Z;
    return T.test(C) && s[j(1531)](C);
  }
  var R = /[^\\]\\Z/;
  function P(C) {
    if (R[Z(1531)](C)) return !1;
    try {
      return new RegExp(C), !0;
    } catch {
      return !1;
    }
  }
  return it;
}
var ct, gr;
function oc() {
  return gr || (gr = 1, ct = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x[e(2585)], c = x[e(2238)][t], u = x[e(601)] + "/" + t, d = !x[e(569)][e(2354)], l = e(1506) + (i || ""), f = e(467) + n, g, h;
    if (c == "#" || c == "#/") x[e(2463)] ? (g = x[e(2538)], h = e(2029)) : (g = x[e(1224)][e(2238)][e(1611)] === !0, h = e(1910));
    else {
      var m = x[e(1e3)](x[e(882)], c, x.isRoot);
      if (m === void 0) {
        var v = x[e(2465)].message(x.baseId, c);
        if (x[e(569)][e(1641)] == e(2145)) {
          x.logger[e(1491)](v);
          var k = k || [];
          k[e(3019)](s), s = "", x[e(2324)] !== !1 ? (s += e(2793) + "$ref" + e(795) + x.errorPath + e(1218) + x.util.toQuotedString(u) + " , params: { ref: '" + x[e(3036)].escapeQuotes(c) + e(1390), x[e(569)][e(709)] !== !1 && (s += e(1296) + x[e(3036)].escapeQuotes(c) + "' "), x[e(569)][e(2330)] && (s += " , schema: " + x[e(3036)].toQuotedString(c) + e(2366) + x[e(1913)] + e(2960) + l + " "), s += e(2670)) : s += e(331);
          var I = s;
          s = k.pop(), !x[e(1629)] && d ? x.async ? s += " throw new ValidationError([" + I + "]); " : s += e(1973) + I + e(1948) : s += " var err = " + I + e(1548), d && (s += e(2778));
        } else if (x[e(569)][e(1641)] == e(2629)) x[e(872)][e(2618)](v), d && (s += " if (true) { ");
        else throw new x.MissingRefError(x.baseId, c, v);
      } else if (m[e(2204)]) {
        var T = x[e(3036)].copy(x);
        T[e(1113)]++;
        var q = e(467) + T[e(1113)];
        T[e(2238)] = m[e(2238)], T[e(1913)] = "", T[e(601)] = c;
        var R = x[e(2029)](T).replace(/validate\.schema/g, m[e(2345)]);
        s += " " + R + " ", d && (s += " if (" + q + ") { ");
      } else g = m[e(1611)] === !0 || x[e(2538)] && m[e(1611)] !== !1, h = m[e(2345)];
    }
    if (h) {
      var k = k || [];
      k[e(3019)](s), s = "", x.opts.passContext ? s += " " + h + ".call(this, " : s += " " + h + "( ", s += " " + l + e(2663), x[e(1115)] != '""' && (s += e(2608) + x.errorPath);
      var P = i ? e(1506) + (i - 1 || "") : e(1764), C = i ? x[e(2140)][i] : "parentDataProperty";
      s += e(1796) + P + e(1796) + C + e(2861);
      var j = s;
      if (s = k[e(2906)](), g) {
        if (!x[e(2538)]) throw new Error("async schema referenced by sync schema");
        d && (s += e(465) + f + "; "), s += e(2210) + j + "; ", d && (s += " " + f + e(2839)), s += e(2236), d && (s += " " + f + e(1734)), s += e(2670), d && (s += e(982) + f + e(2719));
      } else s += " if (!" + j + ") { if (vErrors === null) vErrors = " + h + e(395) + h + e(738), d && (s += e(401));
    }
    return s;
  }), ct;
}
var ut, yr;
function ic() {
  return yr || (yr = 1, ut = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(2238)][t], i = x[e(1913)] + x.util[e(2528)](t), c = x[e(601)] + "/" + t, u = !x[e(569)][e(2354)], d = x[e(3036)].copy(x), l = "";
    d[e(1113)]++;
    var f = "valid" + d.level, g = d[e(882)], h = !0, m = n;
    if (m)
      for (var v, k = -1, I = m[e(1148)] - 1; k < I; )
        v = m[k += 1], (x[e(569)][e(493)] ? typeof v == e(2220) && Object[e(1877)](v).length > 0 || v === !1 : x.util[e(793)](v, x[e(730)][e(2497)])) && (h = !1, d[e(2238)] = v, d[e(1913)] = i + "[" + k + "]", d[e(601)] = c + "/" + k, s += "  " + x.validate(d) + " ", d[e(882)] = g, u && (s += e(982) + f + ") { ", l += "}"));
    return u && (h ? s += e(1857) : s += " " + l[e(1908)](0, -1) + " "), s;
  }), ut;
}
var dt, vr;
function cc() {
  return vr || (vr = 1, dt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x.dataLevel, c = x[e(2238)][t], u = x[e(1913)] + x[e(3036)][e(2528)](t), d = x[e(601)] + "/" + t, l = !x.opts[e(2354)], f = "data" + (i || ""), g = e(467) + n, h = "errs__" + n, m = x.util[e(1051)](x), v = "";
    m[e(1113)]++;
    var k = e(467) + m.level, I = c[e(2077)](function(D) {
      const O = e;
      return x[O(569)].strictKeywords ? typeof D == O(2220) && Object[O(1877)](D)[O(1148)] > 0 || D === !1 : x[O(3036)][O(793)](D, x[O(730)].all);
    });
    if (I) {
      var T = m.baseId;
      s += e(465) + h + e(2827) + g + e(2751);
      var q = x[e(1629)];
      x[e(1629)] = m.compositeRule = !0;
      var R = c;
      if (R)
        for (var P, C = -1, j = R[e(1148)] - 1; C < j; )
          P = R[C += 1], m.schema = P, m[e(1913)] = u + "[" + C + "]", m[e(601)] = d + "/" + C, s += "  " + x[e(2029)](m) + " ", m[e(882)] = T, s += " " + g + e(1035) + g + e(2312) + k + e(2542) + g + e(2719), v += "}";
      x[e(1629)] = m[e(1629)] = q, s += " " + v + e(543) + g + e(1425), x.createErrors !== !1 ? (s += e(2793) + e(2395) + e(795) + x[e(1115)] + e(1218) + x[e(3036)][e(782)](d) + " , params: {} ", x.opts.messages !== !1 && (s += e(1885)), x[e(569)][e(2330)] && (s += e(1426) + u + e(2366) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += e(331), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(1629)] && l && (x.async ? s += e(1460) : s += e(2313)), s += e(3042) + h + e(2046) + h + ") vErrors.length = " + h + e(2397), x[e(569)][e(2354)] && (s += e(2670));
    } else l && (s += e(1857));
    return s;
  }), dt;
}
var lt, wr;
function uc() {
  return wr || (wr = 1, lt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x.schema[t], i = x.errSchemaPath + "/" + t;
    x[e(569)].allErrors;
    var c = x[e(3036)][e(782)](n);
    return x[e(569)][e(1922)] === !0 ? s += e(925) + c + ");" : typeof x[e(569)].$comment == e(1149) && (s += e(1367) + c + ", " + x[e(3036)][e(782)](i) + e(1773)), s;
  }), lt;
}
var ft, Sr;
function dc() {
  return Sr || (Sr = 1, ft = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x[e(2585)], c = x[e(2238)][t], u = x[e(1913)] + x[e(3036)][e(2528)](t), d = x[e(601)] + "/" + t, l = !x[e(569)][e(2354)], f = e(1506) + (i || ""), g = e(467) + n, h = x[e(569)][e(2624)] && c && c.$data;
    h && (s += e(1643) + n + " = " + x.util[e(2802)](c[e(2624)], i, x.dataPathArr) + "; "), !h && (s += e(1643) + n + e(1440) + u + ";"), s += e(2161) + g + e(2954) + f + e(971) + n + "); if (!" + g + ") {   ";
    var m = m || [];
    m[e(3019)](s), s = "", x.createErrors !== !1 ? (s += e(2793) + e(588) + e(795) + x.errorPath + e(1218) + x[e(3036)].toQuotedString(d) + e(439) + n + e(2670), x.opts[e(709)] !== !1 && (s += e(2148)), x[e(569)][e(2330)] && (s += " , schema: validate.schema" + u + e(2366) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += e(331);
    var v = s;
    return s = m.pop(), !x[e(1629)] && l ? x.async ? s += e(1464) + v + "]); " : s += e(1973) + v + e(1948) : s += e(1533) + v + e(1548), s += " }", l && (s += e(401)), s;
  }), ft;
}
var ht, kr;
function lc() {
  return kr || (kr = 1, ht = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x.dataLevel, c = x[e(2238)][t], u = x.schemaPath + x.util[e(2528)](t), d = x[e(601)] + "/" + t, l = !x[e(569)][e(2354)], f = "data" + (i || ""), g = e(467) + n, h = "errs__" + n, m = x[e(3036)][e(1051)](x), v = "";
    m[e(1113)]++;
    var k = e(467) + m.level, I = "i" + n, T = m[e(2585)] = x[e(2585)] + 1, q = e(1506) + T, R = x[e(882)], P = x[e(569)].strictKeywords ? typeof c == e(2220) && Object[e(1877)](c)[e(1148)] > 0 || c === !1 : x[e(3036)][e(793)](c, x.RULES[e(2497)]);
    if (s += e(2161) + h + e(288) + g + ";", P) {
      var C = x.compositeRule;
      x[e(1629)] = m[e(1629)] = !0, m[e(2238)] = c, m[e(1913)] = u, m[e(601)] = d, s += e(465) + k + e(421) + I + e(870) + I + e(2518) + f + e(1609) + I + e(900), m[e(1115)] = x.util.getPathExpr(x[e(1115)], I, x[e(569)][e(1448)], !0);
      var j = f + "[" + I + "]";
      m[e(2140)][T] = I;
      var D = x.validate(m);
      m.baseId = R, x[e(3036)].varOccurences(D, q) < 2 ? s += " " + x[e(3036)].varReplace(D, q, j) + " " : s += e(465) + q + e(1035) + j + "; " + D + " ", s += e(982) + k + e(3027), x[e(1629)] = m[e(1629)] = C, s += " " + v + e(543) + k + e(893);
    } else s += " if (" + f + e(1012);
    var O = O || [];
    O.push(s), s = "", x[e(2324)] !== !1 ? (s += e(2793) + e(1222) + "' , dataPath: (dataPath || '') + " + x.errorPath + " , schemaPath: " + x[e(3036)][e(782)](d) + e(2777), x[e(569)][e(709)] !== !1 && (s += e(1684)), x[e(569)][e(2330)] && (s += e(1426) + u + " , parentSchema: validate.schema" + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += " {} ";
    var N = s;
    return s = O[e(2906)](), !x[e(1629)] && l ? x[e(2538)] ? s += " throw new ValidationError([" + N + e(1420) : s += e(1973) + N + e(1948) : s += e(1533) + N + e(1548), s += " } else { ", P && (s += e(2873) + h + e(2046) + h + e(2665) + h + "; else vErrors = null; } "), x[e(569)][e(2354)] && (s += e(2670)), s;
  }), ht;
}
var pt, Pr;
function fc() {
  return Pr || (Pr = 1, pt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x.level, i = x[e(2585)], c = x[e(2238)][t], u = x[e(1913)] + x.util[e(2528)](t), d = x[e(601)] + "/" + t, l = !x[e(569)][e(2354)], f = e(1506) + (i || ""), g = e(2233) + n, h = x[e(3036)][e(1051)](x), m = "";
    h[e(1113)]++;
    var v = e(467) + h[e(1113)], k = {}, I = {}, T = x.opts[e(520)];
    for (C in c)
      if (C != "__proto__") {
        var q = c[C], R = Array.isArray(q) ? I : k;
        R[C] = q;
      }
    s += e(2161) + g + e(825);
    var P = x[e(1115)];
    s += e(1820) + n + ";";
    for (var C in I)
      if (R = I[C], R.length) {
        if (s += " if ( " + f + x[e(3036)][e(2528)](C) + e(1961), T && (s += " && Object.prototype.hasOwnProperty.call(" + f + e(1453) + x[e(3036)][e(1783)](C) + e(1414)), l) {
          s += " && ( ";
          var j = R;
          if (j)
            for (var D, O = -1, N = j.length - 1; O < N; ) {
              D = j[O += 1], O && (s += e(2312));
              var _ = x[e(3036)].getProperty(D), z = f + _;
              s += " ( ( " + z + e(1461), T && (s += e(2274) + f + ", '" + x[e(3036)].escapeQuotes(D) + e(1414)), s += ") && (missing" + n + e(1035) + x.util[e(782)](x[e(569)][e(1448)] ? D : _) + e(2213);
            }
          s += e(2830);
          var U = e(302) + n, H = e(1238) + U + " + '";
          x[e(569)][e(280)] && (x[e(1115)] = x.opts[e(1448)] ? x.util.getPathExpr(P, U, !0) : P + " + " + U);
          var G = G || [];
          G[e(3019)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + e(600) + e(795) + x[e(1115)] + e(1218) + x[e(3036)][e(782)](d) + " , params: { property: '" + x[e(3036)].escapeQuotes(C) + e(1143) + H + e(669) + R.length + e(2982) + x[e(3036)][e(1783)](R[e(1148)] == 1 ? R[0] : R.join(", ")) + e(1390), x[e(569)][e(709)] !== !1 && (s += e(2250), R[e(1148)] == 1 ? s += e(3012) + x[e(3036)].escapeQuotes(R[0]) : s += e(2478) + x[e(3036)][e(1783)](R[e(896)](", ")), s += " when property " + x[e(3036)][e(1783)](C) + e(2512)), x.opts.verbose && (s += " , schema: validate.schema" + u + e(2366) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += e(331);
          var ie = s;
          s = G.pop(), !x[e(1629)] && l ? x[e(2538)] ? s += e(1464) + ie + "]); " : s += e(1973) + ie + e(1948) : s += e(1533) + ie + e(1548);
        } else {
          s += e(3033);
          var ue = R;
          if (ue)
            for (var D, le = -1, oe = ue.length - 1; le < oe; ) {
              D = ue[le += 1];
              var _ = x[e(3036)].getProperty(D), H = x[e(3036)][e(1783)](D), z = f + _;
              x[e(569)][e(280)] && (x[e(1115)] = x.util.getPath(P, D, x[e(569)][e(1448)])), s += " if ( " + z + " === undefined ", T && (s += e(2274) + f + e(1453) + x[e(3036)].escapeQuotes(D) + "') "), s += e(2720), x[e(2324)] !== !1 ? (s += e(2793) + "dependencies" + e(795) + x[e(1115)] + e(1218) + x[e(3036)][e(782)](d) + " , params: { property: '" + x.util.escapeQuotes(C) + "', missingProperty: '" + H + e(669) + R[e(1148)] + e(2982) + x.util.escapeQuotes(R[e(1148)] == 1 ? R[0] : R[e(896)](", ")) + "' } ", x.opts[e(709)] !== !1 && (s += e(2250), R.length == 1 ? s += "property " + x[e(3036)][e(1783)](R[0]) : s += e(2478) + x[e(3036)][e(1783)](R.join(", ")), s += e(646) + x[e(3036)][e(1783)](C) + e(2512)), x[e(569)].verbose && (s += " , schema: validate.schema" + u + e(2366) + x[e(1913)] + e(2960) + f + " "), s += " } ") : s += e(331), s += e(2614);
            }
        }
        s += e(2445), l && (m += "}", s += " else { ");
      }
    x[e(1115)] = P;
    var fe = h[e(882)];
    for (var C in k) {
      var q = k[C];
      (x[e(569)][e(493)] ? typeof q == e(2220) && Object[e(1877)](q)[e(1148)] > 0 || q === !1 : x[e(3036)][e(793)](q, x[e(730)][e(2497)])) && (s += " " + v + e(1265) + f + x[e(3036)][e(2528)](C) + e(1961), T && (s += e(717) + f + ", '" + x[e(3036)][e(1783)](C) + e(1414)), s += e(2719), h[e(2238)] = q, h[e(1913)] = u + x[e(3036)][e(2528)](C), h.errSchemaPath = d + "/" + x[e(3036)][e(2095)](C), s += "  " + x[e(2029)](h) + " ", h[e(882)] = fe, s += e(2750), l && (s += e(982) + v + e(2719), m += "}"));
    }
    return l && (s += e(2564) + m + e(982) + g + " == errors) {"), s;
  }), pt;
}
var mt, Ir;
function hc() {
  return Ir || (Ir = 1, mt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x[e(2585)], c = x[e(2238)][t], u = x[e(1913)] + x[e(3036)][e(2528)](t), d = x[e(601)] + "/" + t, l = !x[e(569)][e(2354)], f = e(1506) + (i || ""), g = e(467) + n, h = x[e(569)][e(2624)] && c && c.$data;
    h && (s += e(1643) + n + e(1035) + x[e(3036)][e(2802)](c[e(2624)], i, x[e(2140)]) + "; ");
    var m = "i" + n, v = e(2238) + n;
    !h && (s += " var " + v + " = validate.schema" + u + ";"), s += e(2161) + g + ";", h && (s += " if (schema" + n + e(2537) + g + e(1696) + n + e(1756) + g + e(1402)), s += "" + g + e(1720) + m + "=0; " + m + "<" + v + ".length; " + m + "++) if (equal(" + f + ", " + v + "[" + m + e(407) + g + e(2266), h && (s += e(1445)), s += e(543) + g + ") {   ";
    var k = k || [];
    k[e(3019)](s), s = "", x.createErrors !== !1 ? (s += e(2793) + e(2897) + "' , dataPath: (dataPath || '') + " + x[e(1115)] + e(1218) + x[e(3036)][e(782)](d) + e(1267) + n + " } ", x.opts[e(709)] !== !1 && (s += e(939)), x[e(569)][e(2330)] && (s += e(1426) + u + e(2366) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += e(331);
    var I = s;
    return s = k[e(2906)](), !x[e(1629)] && l ? x[e(2538)] ? s += e(1464) + I + e(1420) : s += e(1973) + I + e(1948) : s += e(1533) + I + e(1548), s += " }", l && (s += e(401)), s;
  }), mt;
}
var bt, Er;
function pc() {
  return Er || (Er = 1, bt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x[e(2585)], c = x.schema[t], u = x[e(1913)] + x[e(3036)][e(2528)](t), d = x[e(601)] + "/" + t, l = !x[e(569)][e(2354)], f = e(1506) + (i || "");
    if (x.opts[e(2350)] === !1) return l && (s += e(1857)), s;
    var g = x[e(569)][e(2624)] && c && c[e(2624)], h;
    g ? (s += e(1643) + n + e(1035) + x[e(3036)].getData(c[e(2624)], i, x.dataPathArr) + "; ", h = e(2238) + n) : h = c;
    var m = x[e(569)].unknownFormats, v = Array.isArray(m);
    if (g) {
      var k = "format" + n, I = "isObject" + n, T = e(1957) + n;
      s += e(465) + k + e(2514) + h + "]; var " + I + e(2189) + k + e(1975) + k + e(1521) + k + e(687) + T + e(1035) + I + e(997) + k + e(1209) + I + e(2719), x[e(2538)] && (s += e(1836) + n + e(1035) + k + e(1098)), s += " " + k + e(1035) + k + ".validate; } if (  ", g && (s += " (" + h + " !== undefined && typeof " + h + " != 'string') || "), s += " (", m != "ignore" && (s += " (" + h + e(1884) + k + " ", v && (s += e(2642) + h + e(1581)), s += e(2270)), s += " (" + k + " && " + T + e(1055) + r + e(2303) + k + e(2012), x[e(2538)] ? s += e(2812) + n + " ? await " + k + "(" + f + ") : " + k + "(" + f + e(1756) : s += " " + k + "(" + f + ") ", s += " : " + k + e(1406) + f + e(2002);
    } else {
      var k = x[e(1882)][c];
      if (!k) {
        if (m == e(2629)) return x[e(872)][e(2618)]('unknown format "' + c + e(2705) + x[e(601)] + '"'), l && (s += e(1857)), s;
        if (v && m[e(2273)](c) >= 0) return l && (s += e(1857)), s;
        throw new Error(e(2167) + c + e(1928) + x.errSchemaPath + '"');
      }
      var I = typeof k == "object" && !(k instanceof RegExp) && k[e(2029)], T = I && k[e(2291)] || "string";
      if (I) {
        var q = k[e(2538)] === !0;
        k = k[e(2029)];
      }
      if (T != r) return l && (s += e(1857)), s;
      if (q) {
        if (!x.async) throw new Error(e(649));
        var R = e(1882) + x.util.getProperty(c) + e(2535);
        s += " if (!(await " + R + "(" + f + "))) { ";
      } else {
        s += e(2597);
        var R = e(1882) + x[e(3036)][e(2528)](c);
        I && (R += e(2535)), typeof k == "function" ? s += " " + R + "(" + f + ") " : s += " " + R + e(1406) + f + ") ", s += e(2719);
      }
    }
    var P = P || [];
    P[e(3019)](s), s = "", x[e(2324)] !== !1 ? (s += e(2793) + "format" + e(795) + x[e(1115)] + " , schemaPath: " + x[e(3036)].toQuotedString(d) + e(539), g ? s += "" + h : s += "" + x.util[e(782)](c), s += e(1600), x.opts[e(709)] !== !1 && (s += e(1049), g ? s += e(1238) + h + e(2601) : s += "" + x.util[e(1783)](c), s += `"' `), x.opts[e(2330)] && (s += e(1221), g ? s += e(2139) + u : s += "" + x[e(3036)][e(782)](c), s += e(1167) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += e(331);
    var C = s;
    return s = P[e(2906)](), !x[e(1629)] && l ? x[e(2538)] ? s += e(1464) + C + e(1420) : s += e(1973) + C + "]; return false; " : s += e(1533) + C + e(1548), s += e(2670), l && (s += e(401)), s;
  }), bt;
}
var gt, Rr;
function mc() {
  return Rr || (Rr = 1, gt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x.dataLevel, c = x[e(2238)][t], u = x[e(1913)] + x[e(3036)][e(2528)](t), d = x[e(601)] + "/" + t, l = !x[e(569)][e(2354)], f = "data" + (i || ""), g = e(467) + n, h = "errs__" + n, m = x[e(3036)].copy(x);
    m.level++;
    var v = e(467) + m[e(1113)], k = x[e(2238)][e(634)], I = x[e(2238)][e(2674)], T = k !== void 0 && (x[e(569)][e(493)] ? typeof k == e(2220) && Object.keys(k).length > 0 || k === !1 : x[e(3036)][e(793)](k, x[e(730)].all)), q = I !== void 0 && (x[e(569)][e(493)] ? typeof I == e(2220) && Object.keys(I)[e(1148)] > 0 || I === !1 : x[e(3036)].schemaHasRules(I, x.RULES[e(2497)])), R = m.baseId;
    if (T || q) {
      var P;
      m[e(2324)] = !1, m.schema = c, m[e(1913)] = u, m[e(601)] = d, s += e(465) + h + e(2827) + g + e(544);
      var C = x[e(1629)];
      x[e(1629)] = m[e(1629)] = !0, s += "  " + x[e(2029)](m) + " ", m[e(882)] = R, m.createErrors = !0, s += "  errors = " + h + e(2046) + h + e(2665) + h + e(1525), x.compositeRule = m[e(1629)] = C, T ? (s += e(982) + v + e(2369), m[e(2238)] = x.schema[e(634)], m[e(1913)] = x[e(1913)] + ".then", m.errSchemaPath = x[e(601)] + "/then", s += "  " + x[e(2029)](m) + " ", m[e(882)] = R, s += " " + g + e(1035) + v + "; ", T && q ? (P = "ifClause" + n, s += e(465) + P + " = 'then'; ") : P = e(2687), s += e(2670), q && (s += e(401))) : s += e(543) + v + e(2719), q && (m.schema = x[e(2238)][e(2674)], m[e(1913)] = x[e(1913)] + e(1324), m[e(601)] = x.errSchemaPath + e(912), s += "  " + x.validate(m) + " ", m[e(882)] = R, s += " " + g + e(1035) + v + "; ", T && q ? (P = e(713) + n, s += e(465) + P + " = 'else'; ") : P = e(2818), s += e(2670)), s += e(543) + g + e(1425), x[e(2324)] !== !1 ? (s += e(2793) + "if" + e(795) + x[e(1115)] + e(1218) + x[e(3036)][e(782)](d) + e(322) + P + e(2670), x[e(569)][e(709)] !== !1 && (s += ` , message: 'should match "' + ` + P + ` + '" schema' `), x.opts.verbose && (s += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += " {} ", s += e(1548), !x[e(1629)] && l && (x[e(2538)] ? s += e(1460) : s += " validate.errors = vErrors; return false; "), s += e(2445), l && (s += e(401));
    } else l && (s += e(1857));
    return s;
  }), gt;
}
var yt, Cr;
function bc() {
  return Cr || (Cr = 1, yt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x.level, i = x[e(2585)], c = x.schema[t], u = x.schemaPath + x.util[e(2528)](t), d = x[e(601)] + "/" + t, l = !x[e(569)][e(2354)], f = e(1506) + (i || ""), g = e(467) + n, h = "errs__" + n, m = x[e(3036)][e(1051)](x), v = "";
    m[e(1113)]++;
    var k = e(467) + m[e(1113)], I = "i" + n, T = m[e(2585)] = x[e(2585)] + 1, q = e(1506) + T, R = x.baseId;
    if (s += e(2161) + h + e(288) + g + ";", Array[e(500)](c)) {
      var P = x[e(2238)].additionalItems;
      if (P === !1) {
        s += " " + g + e(1035) + f + ".length <= " + c[e(1148)] + "; ";
        var C = d;
        d = x.errSchemaPath + e(2295), s += "  if (!" + g + e(2767);
        var j = j || [];
        j.push(s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + e(2296) + e(795) + x[e(1115)] + e(1218) + x[e(3036)][e(782)](d) + e(963) + c[e(1148)] + e(2670), x[e(569)][e(709)] !== !1 && (s += e(1630) + c[e(1148)] + e(1088)), x.opts.verbose && (s += e(985) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += e(331);
        var D = s;
        s = j[e(2906)](), !x[e(1629)] && l ? x[e(2538)] ? s += e(1464) + D + e(1420) : s += " validate.errors = [" + D + e(1948) : s += " var err = " + D + e(1548), s += e(2670), d = C, l && (v += "}", s += " else { ");
      }
      var O = c;
      if (O) {
        for (var N, _ = -1, z = O[e(1148)] - 1; _ < z; )
          if (N = O[_ += 1], x[e(569)][e(493)] ? typeof N == e(2220) && Object[e(1877)](N).length > 0 || N === !1 : x[e(3036)][e(793)](N, x[e(730)][e(2497)])) {
            s += " " + k + " = true; if (" + f + e(2400) + _ + e(2719);
            var U = f + "[" + _ + "]";
            m[e(2238)] = N, m[e(1913)] = u + "[" + _ + "]", m[e(601)] = d + "/" + _, m[e(1115)] = x[e(3036)][e(696)](x[e(1115)], _, x[e(569)][e(1448)], !0), m[e(2140)][T] = _;
            var H = x[e(2029)](m);
            m[e(882)] = R, x[e(3036)][e(2741)](H, q) < 2 ? s += " " + x.util[e(1350)](H, q, U) + " " : s += e(465) + q + e(1035) + U + "; " + H + " ", s += e(2750), l && (s += e(982) + k + ") { ", v += "}");
          }
      }
      if (typeof P == e(2220) && (x.opts[e(493)] ? typeof P == "object" && Object.keys(P).length > 0 || P === !1 : x.util[e(793)](P, x.RULES[e(2497)]))) {
        m[e(2238)] = P, m[e(1913)] = x.schemaPath + e(718), m[e(601)] = x[e(601)] + "/additionalItems", s += " " + k + e(281) + f + e(2400) + c[e(1148)] + e(2545) + I + " = " + c[e(1148)] + "; " + I + " < " + f + e(1609) + I + e(900), m.errorPath = x.util[e(696)](x.errorPath, I, x[e(569)][e(1448)], !0);
        var U = f + "[" + I + "]";
        m.dataPathArr[T] = I;
        var H = x[e(2029)](m);
        m.baseId = R, x[e(3036)][e(2741)](H, q) < 2 ? s += " " + x[e(3036)].varReplace(H, q, U) + " " : s += " var " + q + e(1035) + U + "; " + H + " ", l && (s += e(543) + k + e(332)), s += e(684), l && (s += e(982) + k + e(2719), v += "}");
      }
    } else if (x[e(569)][e(493)] ? typeof c == e(2220) && Object[e(1877)](c)[e(1148)] > 0 || c === !1 : x[e(3036)][e(793)](c, x[e(730)][e(2497)])) {
      m[e(2238)] = c, m[e(1913)] = u, m[e(601)] = d, s += e(2677) + I + e(1035) + 0 + "; " + I + e(2518) + f + ".length; " + I + e(900), m[e(1115)] = x[e(3036)].getPathExpr(x[e(1115)], I, x[e(569)].jsonPointers, !0);
      var U = f + "[" + I + "]";
      m.dataPathArr[T] = I;
      var H = x[e(2029)](m);
      m[e(882)] = R, x[e(3036)][e(2741)](H, q) < 2 ? s += " " + x[e(3036)][e(1350)](H, q, U) + " " : s += e(465) + q + " = " + U + "; " + H + " ", l && (s += e(543) + k + ") break; "), s += " }";
    }
    return l && (s += " " + v + e(982) + h + e(2067)), s;
  }), yt;
}
var vt, Fr;
function _r() {
  return Fr || (Fr = 1, vt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x[e(2585)], c = x[e(2238)][t], u = x.schemaPath + x[e(3036)][e(2528)](t), d = x.errSchemaPath + "/" + t, l = !x.opts[e(2354)], R, f = e(1506) + (i || ""), g = x[e(569)].$data && c && c[e(2624)], h;
    g ? (s += " var schema" + n + " = " + x[e(3036)][e(2802)](c[e(2624)], i, x[e(2140)]) + "; ", h = "schema" + n) : h = c;
    var m = t == e(1613), v = e(m ? 2252 : 731), k = x[e(2238)][v], I = x[e(569)][e(2624)] && k && k[e(2624)], T = m ? "<" : ">", q = m ? ">" : "<", R = void 0;
    if (!(g || typeof c == "number" || c === void 0)) throw new Error(t + " must be number");
    if (!(I || k === void 0 || typeof k == e(867) || typeof k == "boolean")) throw new Error(v + e(2649));
    if (I) {
      var P = x.util.getData(k[e(2624)], i, x.dataPathArr), C = e(1083) + n, j = e(1663) + n, D = e(973) + n, O = "op" + n, N = e(1238) + O + e(2601);
      s += e(1858) + n + e(1035) + P + "; ", P = "schemaExcl" + n, s += e(465) + C + e(1644) + j + e(2189) + P + e(2314) + j + e(2121) + j + " != 'undefined' && " + j + e(3025);
      var R = v, _ = _ || [];
      _.push(s), s = "", x[e(2324)] !== !1 ? (s += " { keyword: '" + (R || e(894)) + "' , dataPath: (dataPath || '') + " + x[e(1115)] + " , schemaPath: " + x[e(3036)][e(782)](d) + e(2777), x[e(569)].messages !== !1 && (s += " , message: '" + v + e(895)), x.opts.verbose && (s += e(1426) + u + e(2366) + x.schemaPath + e(2960) + f + " "), s += " } ") : s += " {} ";
      var z = s;
      s = _[e(2906)](), !x.compositeRule && l ? x.async ? s += e(1464) + z + e(1420) : s += " validate.errors = [" + z + e(1948) : s += e(1533) + z + e(1548), s += e(393), g && (s += " (" + h + e(850) + h + e(422)), s += " " + j + e(2856) + C + " = " + h + e(1033) + P + " " + T + "= " + h + e(464) + f + " " + q + "= " + P + e(901) + f + " " + q + " " + h + " ) : ( (" + C + e(1035) + P + " === true) ? " + f + " " + q + "= " + h + e(901) + f + " " + q + " " + h + e(2201) + f + e(377) + f + ") { var op" + n + e(1035) + C + e(1941) + T + e(2732) + T + "='; ", c === void 0 && (R = v, d = x[e(601)] + "/" + v, h = P, g = I);
    } else {
      var D = typeof k == e(867), N = T;
      if (D && g) {
        var O = "'" + N + "'";
        s += e(1992), g && (s += " (" + h + e(850) + h + e(422)), s += e(1275) + h + e(1033) + k + " " + T + "= " + h + e(1145) + f + " " + q + "= " + k + " : " + f + " " + q + " " + h + e(2201) + f + e(377) + f + e(2719);
      } else {
        D && c === void 0 ? (C = !0, R = v, d = x[e(601)] + "/" + v, h = k, q += "=") : (D && (h = Math[e(m ? 316 : 477)](k, c)), k === (D ? h : !0) ? (C = !0, R = v, d = x[e(601)] + "/" + v, q += "=") : (C = !1, N += "="));
        var O = "'" + N + "'";
        s += " if ( ", g && (s += " (" + h + e(850) + h + e(422)), s += " " + f + " " + q + " " + h + " || " + f + " !== " + f + e(2719);
      }
    }
    R = R || t;
    var _ = _ || [];
    _[e(3019)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + (R || e(1951)) + e(795) + x.errorPath + " , schemaPath: " + x[e(3036)][e(782)](d) + e(2541) + O + e(1223) + h + e(1062) + C + e(2670), x[e(569)].messages !== !1 && (s += " , message: 'should be " + N + " ", g ? s += e(1238) + h : s += "" + h + "'"), x[e(569)][e(2330)] && (s += e(1221), g ? s += e(2139) + u : s += "" + c, s += e(1167) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += " {} ";
    var z = s;
    return s = _[e(2906)](), !x.compositeRule && l ? x.async ? s += e(1464) + z + e(1420) : s += e(1973) + z + e(1948) : s += " var err = " + z + e(1548), s += e(2670), l && (s += " else { "), s;
  }), vt;
}
var wt, Nr;
function Tr() {
  return Nr || (Nr = 1, wt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x[e(2585)], c = x[e(2238)][t], u = x.schemaPath + x[e(3036)].getProperty(t), d = x[e(601)] + "/" + t, l = !x.opts[e(2354)], v, f = e(1506) + (i || ""), g = x[e(569)][e(2624)] && c && c[e(2624)], h;
    if (g ? (s += " var schema" + n + e(1035) + x.util[e(2802)](c[e(2624)], i, x[e(2140)]) + "; ", h = e(2238) + n) : h = c, !(g || typeof c == e(867))) throw new Error(t + e(1519));
    var m = t == e(858) ? ">" : "<";
    s += e(2843), g && (s += " (" + h + e(850) + h + e(422)), s += " " + f + e(1867) + m + " " + h + ") { ";
    var v = t, k = k || [];
    k[e(3019)](s), s = "", x[e(2324)] !== !1 ? (s += e(2793) + (v || "_limitItems") + e(795) + x[e(1115)] + e(1218) + x[e(3036)][e(782)](d) + e(963) + h + e(2670), x[e(569)][e(709)] !== !1 && (s += e(2335), t == e(858) ? s += e(2492) : s += e(2037), s += e(2943), g ? s += e(1238) + h + e(2601) : s += "" + c, s += e(1088)), x[e(569)].verbose && (s += " , schema:  ", g ? s += e(2139) + u : s += "" + c, s += e(1167) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += " {} ";
    var I = s;
    return s = k.pop(), !x[e(1629)] && l ? x[e(2538)] ? s += e(1464) + I + e(1420) : s += e(1973) + I + "]; return false; " : s += e(1533) + I + e(1548), s += "} ", l && (s += e(401)), s;
  }), wt;
}
var St, qr;
function Ar() {
  return qr || (qr = 1, St = function(x, t, r) {
    const e = Z;
    var s = " ", n = x.level, i = x.dataLevel, c = x.schema[t], u = x[e(1913)] + x.util[e(2528)](t), d = x.errSchemaPath + "/" + t, l = !x.opts.allErrors, v, f = e(1506) + (i || ""), g = x.opts.$data && c && c[e(2624)], h;
    if (g ? (s += e(1643) + n + " = " + x.util[e(2802)](c[e(2624)], i, x[e(2140)]) + "; ", h = e(2238) + n) : h = c, !(g || typeof c == e(867))) throw new Error(t + e(1519));
    var m = t == e(388) ? ">" : "<";
    s += e(2843), g && (s += " (" + h + e(850) + h + " != 'number') || "), x.opts[e(1707)] === !1 ? s += " " + f + e(1867) : s += e(2540) + f + ") ", s += " " + m + " " + h + ") { ";
    var v = t, k = k || [];
    k[e(3019)](s), s = "", x[e(2324)] !== !1 ? (s += e(2793) + (v || "_limitLength") + e(795) + x[e(1115)] + e(1218) + x[e(3036)][e(782)](d) + e(963) + h + " } ", x[e(569)].messages !== !1 && (s += " , message: 'should NOT be ", t == "maxLength" ? s += "longer" : s += e(1282), s += " than ", g ? s += e(1238) + h + e(2601) : s += "" + c, s += e(2800)), x[e(569)][e(2330)] && (s += " , schema:  ", g ? s += e(2139) + u : s += "" + c, s += e(1167) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += e(331);
    var I = s;
    return s = k.pop(), !x[e(1629)] && l ? x[e(2538)] ? s += e(1464) + I + e(1420) : s += e(1973) + I + e(1948) : s += e(1533) + I + e(1548), s += "} ", l && (s += " else { "), s;
  }), St;
}
var kt, Or;
function Dr() {
  return Or || (Or = 1, kt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x[e(2585)], c = x[e(2238)][t], u = x[e(1913)] + x[e(3036)][e(2528)](t), d = x[e(601)] + "/" + t, l = !x.opts.allErrors, v, f = e(1506) + (i || ""), g = x[e(569)][e(2624)] && c && c.$data, h;
    if (g ? (s += e(1643) + n + " = " + x.util[e(2802)](c.$data, i, x.dataPathArr) + "; ", h = e(2238) + n) : h = c, !(g || typeof c == e(867))) throw new Error(t + e(1519));
    var m = t == e(2568) ? ">" : "<";
    s += e(2843), g && (s += " (" + h + e(850) + h + e(422)), s += " Object.keys(" + f + e(1141) + m + " " + h + e(2719);
    var v = t, k = k || [];
    k[e(3019)](s), s = "", x[e(2324)] !== !1 ? (s += e(2793) + (v || "_limitProperties") + e(795) + x.errorPath + e(1218) + x.util.toQuotedString(d) + e(963) + h + " } ", x[e(569)].messages !== !1 && (s += e(2335), t == e(2568) ? s += e(2492) : s += e(2037), s += " than ", g ? s += e(1238) + h + e(2601) : s += "" + c, s += e(908)), x.opts[e(2330)] && (s += e(1221), g ? s += e(2139) + u : s += "" + c, s += e(1167) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += " {} ";
    var I = s;
    return s = k[e(2906)](), !x.compositeRule && l ? x.async ? s += e(1464) + I + e(1420) : s += e(1973) + I + "]; return false; " : s += e(1533) + I + e(1548), s += "} ", l && (s += " else { "), s;
  }), kt;
}
var Pt, jr;
function gc() {
  return jr || (jr = 1, Pt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x.level, i = x[e(2585)], c = x[e(2238)][t], u = x[e(1913)] + x[e(3036)][e(2528)](t), d = x[e(601)] + "/" + t, l = !x[e(569)][e(2354)], f = "data" + (i || ""), g = x[e(569)][e(2624)] && c && c.$data, h;
    if (g ? (s += e(1643) + n + " = " + x[e(3036)][e(2802)](c[e(2624)], i, x[e(2140)]) + "; ", h = "schema" + n) : h = c, !(g || typeof c == "number")) throw new Error(t + e(1519));
    s += e(1837) + n + e(2794), g && (s += " " + h + e(2080) + h + e(2511)), s += e(2735) + n + e(1035) + f + e(1189) + h + ", ", x.opts[e(1326)] ? s += " Math.abs(Math.round(division" + n + e(977) + n + e(700) + x.opts[e(1326)] + " " : s += e(2459) + n + " !== parseInt(division" + n + ") ", s += e(866), g && (s += e(2722)), s += e(621);
    var m = m || [];
    m[e(3019)](s), s = "", x.createErrors !== !1 ? (s += e(2793) + e(2342) + e(795) + x[e(1115)] + e(1218) + x.util[e(782)](d) + " , params: { multipleOf: " + h + e(2670), x.opts[e(709)] !== !1 && (s += e(849), g ? s += e(1238) + h : s += "" + h + "'"), x[e(569)][e(2330)] && (s += " , schema:  ", g ? s += e(2139) + u : s += "" + c, s += e(1167) + x.schemaPath + " , data: " + f + " "), s += e(2670)) : s += e(331);
    var v = s;
    return s = m[e(2906)](), !x[e(1629)] && l ? x[e(2538)] ? s += e(1464) + v + e(1420) : s += e(1973) + v + e(1948) : s += e(1533) + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", l && (s += " else { "), s;
  }), Pt;
}
var It, Lr;
function yc() {
  return Lr || (Lr = 1, It = function(x, t, r) {
    const e = Z;
    var s = " ", n = x.level, i = x.dataLevel, c = x[e(2238)][t], u = x[e(1913)] + x.util.getProperty(t), d = x[e(601)] + "/" + t, l = !x[e(569)].allErrors, f = e(1506) + (i || ""), g = e(2233) + n, h = x[e(3036)][e(1051)](x);
    h.level++;
    var m = e(467) + h[e(1113)];
    if (x.opts[e(493)] ? typeof c == e(2220) && Object[e(1877)](c).length > 0 || c === !1 : x[e(3036)][e(793)](c, x.RULES[e(2497)])) {
      h.schema = c, h[e(1913)] = u, h[e(601)] = d, s += " var " + g + e(2149);
      var v = x.compositeRule;
      x[e(1629)] = h.compositeRule = !0, h[e(2324)] = !1;
      var k;
      h[e(569)][e(2354)] && (k = h.opts[e(2354)], h[e(569)][e(2354)] = !1), s += " " + x[e(2029)](h) + " ", h.createErrors = !0, k && (h[e(569)][e(2354)] = k), x[e(1629)] = h[e(1629)] = v, s += " if (" + m + e(2767);
      var I = I || [];
      I[e(3019)](s), s = "", x[e(2324)] !== !1 ? (s += e(2793) + "not" + e(795) + x.errorPath + e(1218) + x[e(3036)][e(782)](d) + " , params: {} ", x[e(569)][e(709)] !== !1 && (s += e(1375)), x.opts[e(2330)] && (s += e(1426) + u + " , parentSchema: validate.schema" + x.schemaPath + " , data: " + f + " "), s += " } ") : s += " {} ";
      var T = s;
      s = I[e(2906)](), !x.compositeRule && l ? x[e(2538)] ? s += e(1464) + T + e(1420) : s += e(1973) + T + e(1948) : s += e(1533) + T + e(1548), s += " } else {  errors = " + g + e(2046) + g + e(2665) + g + e(2397), x[e(569)][e(2354)] && (s += e(2670));
    } else s += "  var err =   ", x[e(2324)] !== !1 ? (s += " { keyword: '" + e(1409) + e(795) + x[e(1115)] + e(1218) + x[e(3036)][e(782)](d) + " , params: {} ", x[e(569)][e(709)] !== !1 && (s += e(1375)), x.opts.verbose && (s += " , schema: validate.schema" + u + e(2366) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += e(331), s += e(1548), l && (s += " if (false) { ");
    return s;
  }), It;
}
var Et, Mr;
function vc() {
  return Mr || (Mr = 1, Et = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x[e(2585)], c = x.schema[t], u = x[e(1913)] + x[e(3036)][e(2528)](t), d = x[e(601)] + "/" + t, l = !x[e(569)][e(2354)], f = e(1506) + (i || ""), g = e(467) + n, h = e(2233) + n, m = x[e(3036)][e(1051)](x), v = "";
    m.level++;
    var k = e(467) + m[e(1113)], I = m[e(882)], T = e(522) + n, q = e(452) + n;
    s += "var " + h + e(1430) + T + e(2877) + g + e(2877) + q + " = null; ";
    var R = x[e(1629)];
    x[e(1629)] = m.compositeRule = !0;
    var P = c;
    if (P)
      for (var C, j = -1, D = P[e(1148)] - 1; j < D; )
        C = P[j += 1], (x.opts[e(493)] ? typeof C == e(2220) && Object.keys(C).length > 0 || C === !1 : x.util[e(793)](C, x[e(730)].all)) ? (m[e(2238)] = C, m[e(1913)] = u + "[" + j + "]", m[e(601)] = d + "/" + j, s += "  " + x.validate(m) + " ", m[e(882)] = I) : s += e(465) + k + e(2839), j && (s += e(982) + k + e(997) + T + ") { " + g + e(1734) + q + e(1450) + q + ", " + j + e(1050), v += "}"), s += e(982) + k + e(2719) + g + e(1035) + T + e(2839) + q + e(1035) + j + e(2569);
    return x.compositeRule = m[e(1629)] = R, s += "" + v + e(2817) + g + e(1425), x[e(2324)] !== !1 ? (s += " { keyword: 'oneOf" + e(795) + x[e(1115)] + " , schemaPath: " + x[e(3036)][e(782)](d) + e(2655) + q + e(2670), x[e(569)][e(709)] !== !1 && (s += e(2097)), x.opts.verbose && (s += e(1426) + u + " , parentSchema: validate.schema" + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += " {} ", s += e(1548), !x[e(1629)] && l && (x.async ? s += " throw new ValidationError(vErrors); " : s += e(2313)), s += "} else {  errors = " + h + "; if (vErrors !== null) { if (" + h + e(2665) + h + e(2217), x[e(569)][e(2354)] && (s += e(2670)), s;
  }), Et;
}
var Rt, $r;
function wc() {
  return $r || ($r = 1, Rt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x.level, i = x.dataLevel, c = x[e(2238)][t], u = x.schemaPath + x[e(3036)].getProperty(t), d = x[e(601)] + "/" + t, l = !x[e(569)][e(2354)], f = e(1506) + (i || ""), g = x[e(569)][e(2624)] && c && c.$data, h;
    g ? (s += " var schema" + n + e(1035) + x[e(3036)].getData(c.$data, i, x[e(2140)]) + "; ", h = "schema" + n) : h = c;
    var m = g ? "(new RegExp(" + h + "))" : x[e(708)](c);
    s += e(2843), g && (s += " (" + h + e(850) + h + e(2349)), s += " !" + m + ".test(" + f + e(2141);
    var v = v || [];
    v[e(3019)](s), s = "", x.createErrors !== !1 ? (s += e(2793) + e(2248) + "' , dataPath: (dataPath || '') + " + x[e(1115)] + e(1218) + x[e(3036)].toQuotedString(d) + " , params: { pattern:  ", g ? s += "" + h : s += "" + x[e(3036)][e(782)](c), s += e(1600), x[e(569)].messages !== !1 && (s += e(839), g ? s += e(1238) + h + " + '" : s += "" + x[e(3036)].escapeQuotes(c), s += e(2661)), x[e(569)][e(2330)] && (s += e(1221), g ? s += e(2139) + u : s += "" + x[e(3036)][e(782)](c), s += e(1167) + x[e(1913)] + e(2960) + f + " "), s += " } ") : s += " {} ";
    var k = s;
    return s = v[e(2906)](), !x[e(1629)] && l ? x[e(2538)] ? s += e(1464) + k + e(1420) : s += e(1973) + k + "]; return false; " : s += " var err = " + k + e(1548), s += "} ", l && (s += e(401)), s;
  }), Rt;
}
var Ct, Ur;
function Sc() {
  return Ur || (Ur = 1, Ct = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x[e(2585)], c = x[e(2238)][t], u = x.schemaPath + x[e(3036)][e(2528)](t), d = x[e(601)] + "/" + t, l = !x[e(569)].allErrors, f = e(1506) + (i || ""), g = e(2233) + n, h = x.util[e(1051)](x), m = "";
    h[e(1113)]++;
    var v = e(467) + h[e(1113)], k = e(2651) + n, I = "idx" + n, T = h[e(2585)] = x[e(2585)] + 1, q = e(1506) + T, R = e(2648) + n, P = Object.keys(c || {}).filter(le), C = x[e(2238)][e(1073)] || {}, j = Object[e(1877)](C)[e(362)](le), D = x[e(2238)][e(435)], O = P.length || j.length, N = D === !1, _ = typeof D == e(2220) && Object[e(1877)](D).length, z = x[e(569)][e(1074)], U = N || _ || z, H = x[e(569)][e(520)], G = x[e(882)], ie = x[e(2238)][e(747)];
    if (ie && !(x[e(569)].$data && ie[e(2624)]) && ie.length < x.opts[e(3046)]) var ue = x[e(3036)][e(1655)](ie);
    function le(Mx) {
      return Mx !== e(2806);
    }
    if (s += e(2161) + g + e(288) + v + " = true;", H && (s += e(465) + R + " = undefined;"), U) {
      if (H ? s += " " + R + " = " + R + e(702) + f + e(1232) + I + e(2221) + I + "<" + R + e(1609) + I + e(764) + k + e(1035) + R + "[" + I + "]; " : s += e(1397) + k + e(672) + f + e(2719), O) {
        if (s += " var isAdditional" + n + e(1526), P.length)
          if (P[e(1148)] > 8) s += e(1457) + u + e(618) + k + ") ";
          else {
            var oe = P;
            if (oe)
              for (var fe, Pe = -1, ye = oe[e(1148)] - 1; Pe < ye; )
                fe = oe[Pe += 1], s += e(2312) + k + " == " + x[e(3036)][e(782)](fe) + " ";
          }
        if (j[e(1148)]) {
          var Le = j;
          if (Le)
            for (var _e, Je = -1, A = Le[e(1148)] - 1; Je < A; )
              _e = Le[Je += 1], s += e(2312) + x[e(708)](_e) + ".test(" + k + ") ";
        }
        s += " ); if (isAdditional" + n + ") { ";
      }
      if (z == e(2497)) s += e(2961) + f + "[" + k + "]; ";
      else {
        var F = x[e(1115)], L = e(1238) + k + e(2601);
        if (x[e(569)][e(280)] && (x[e(1115)] = x.util[e(696)](x[e(1115)], k, x[e(569)][e(1448)])), N)
          if (z) s += e(2961) + f + "[" + k + "]; ";
          else {
            s += " " + v + " = false; ";
            var J = d;
            d = x[e(601)] + e(1442);
            var ee = ee || [];
            ee.push(s), s = "", x[e(2324)] !== !1 ? (s += e(2793) + e(435) + e(795) + x.errorPath + " , schemaPath: " + x[e(3036)][e(782)](d) + e(2964) + L + e(1390), x.opts.messages !== !1 && (s += e(2199), x[e(569)]._errorDataPathProperty ? s += e(1532) : s += e(627), s += "' "), x[e(569)].verbose && (s += e(985) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += e(331);
            var V = s;
            s = ee.pop(), !x[e(1629)] && l ? x[e(2538)] ? s += " throw new ValidationError([" + V + "]); " : s += e(1973) + V + "]; return false; " : s += e(1533) + V + e(1548), d = J, l && (s += e(1801));
          }
        else if (_)
          if (z == e(2975)) {
            s += e(465) + g + e(2149);
            var X = x[e(1629)];
            x[e(1629)] = h[e(1629)] = !0, h[e(2238)] = D, h[e(1913)] = x[e(1913)] + ".additionalProperties", h.errSchemaPath = x[e(601)] + e(1442), h[e(1115)] = x[e(569)][e(280)] ? x[e(1115)] : x[e(3036)][e(696)](x.errorPath, k, x[e(569)].jsonPointers);
            var ce = f + "[" + k + "]";
            h[e(2140)][T] = k;
            var se = x.validate(h);
            h.baseId = G, x[e(3036)].varOccurences(se, q) < 2 ? s += " " + x[e(3036)][e(1350)](se, q, ce) + " " : s += e(465) + q + " = " + ce + "; " + se + " ", s += e(543) + v + e(2178) + g + e(313) + f + "[" + k + e(1947), x[e(1629)] = h[e(1629)] = X;
          } else {
            h[e(2238)] = D, h[e(1913)] = x[e(1913)] + e(1805), h[e(601)] = x[e(601)] + e(1442), h[e(1115)] = x[e(569)][e(280)] ? x.errorPath : x[e(3036)][e(696)](x.errorPath, k, x.opts.jsonPointers);
            var ce = f + "[" + k + "]";
            h[e(2140)][T] = k;
            var se = x[e(2029)](h);
            h[e(882)] = G, x[e(3036)][e(2741)](se, q) < 2 ? s += " " + x[e(3036)][e(1350)](se, q, ce) + " " : s += " var " + q + e(1035) + ce + "; " + se + " ", l && (s += e(543) + v + ") break; ");
          }
        x[e(1115)] = F;
      }
      O && (s += " } "), s += e(2750), l && (s += e(982) + v + e(2719), m += "}");
    }
    var te = x[e(569)][e(1626)] && !x[e(1629)];
    if (P.length) {
      var Me = P;
      if (Me)
        for (var fe, Ae = -1, ze = Me[e(1148)] - 1; Ae < ze; ) {
          fe = Me[Ae += 1];
          var ke = c[fe];
          if (x.opts[e(493)] ? typeof ke == e(2220) && Object[e(1877)](ke).length > 0 || ke === !1 : x.util[e(793)](ke, x[e(730)].all)) {
            var Ge = x[e(3036)].getProperty(fe), ce = f + Ge, n0 = te && ke[e(2096)] !== void 0;
            h[e(2238)] = ke, h[e(1913)] = u + Ge, h.errSchemaPath = d + "/" + x[e(3036)][e(2095)](fe), h.errorPath = x[e(3036)][e(320)](x.errorPath, fe, x[e(569)][e(1448)]), h[e(2140)][T] = x.util[e(782)](fe);
            var se = x[e(2029)](h);
            if (h[e(882)] = G, x.util.varOccurences(se, q) < 2) {
              se = x[e(3036)][e(1350)](se, q, ce);
              var Qe = ce;
            } else {
              var Qe = q;
              s += e(465) + q + e(1035) + ce + "; ";
            }
            if (n0) s += " " + se + " ";
            else {
              if (ue && ue[fe]) {
                s += e(1992) + Qe + " === undefined ", H && (s += e(2274) + f + ", '" + x[e(3036)][e(1783)](fe) + e(1414)), s += e(2719) + v + e(1734);
                var F = x[e(1115)], J = d, Oe = x[e(3036)][e(1783)](fe);
                x[e(569)][e(280)] && (x[e(1115)] = x[e(3036)][e(320)](F, fe, x[e(569)][e(1448)])), d = x[e(601)] + "/required";
                var ee = ee || [];
                ee.push(s), s = "", x[e(2324)] !== !1 ? (s += " { keyword: '" + e(747) + "' , dataPath: (dataPath || '') + " + x[e(1115)] + " , schemaPath: " + x[e(3036)][e(782)](d) + e(2449) + Oe + e(1390), x[e(569)][e(709)] !== !1 && (s += e(2199), x[e(569)]._errorDataPathProperty ? s += e(1660) : s += e(2641) + Oe + "\\'", s += "' "), x[e(569)][e(2330)] && (s += e(1426) + u + " , parentSchema: validate.schema" + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += e(331);
                var V = s;
                s = ee[e(2906)](), !x[e(1629)] && l ? x.async ? s += " throw new ValidationError([" + V + e(1420) : s += e(1973) + V + "]; return false; " : s += e(1533) + V + e(1548), d = J, x[e(1115)] = F, s += e(2471);
              } else l ? (s += " if ( " + Qe + e(1461), H && (s += e(2274) + f + e(1453) + x[e(3036)][e(1783)](fe) + e(1414)), s += ") { " + v + " = true; } else { ") : (s += " if (" + Qe + e(1961), H && (s += e(367) + f + ", '" + x[e(3036)].escapeQuotes(fe) + e(1414)), s += " ) { ");
              s += " " + se + " } ";
            }
          }
          l && (s += " if (" + v + ") { ", m += "}");
        }
    }
    if (j[e(1148)]) {
      var He = j;
      if (He)
        for (var _e, Ye = -1, ux = He.length - 1; Ye < ux; ) {
          _e = He[Ye += 1];
          var ke = C[_e];
          if (x[e(569)][e(493)] ? typeof ke == e(2220) && Object[e(1877)](ke)[e(1148)] > 0 || ke === !1 : x[e(3036)].schemaHasRules(ke, x.RULES[e(2497)])) {
            h[e(2238)] = ke, h[e(1913)] = x[e(1913)] + e(2948) + x[e(3036)].getProperty(_e), h[e(601)] = x[e(601)] + "/patternProperties/" + x[e(3036)].escapeFragment(_e), H ? s += " " + R + e(1035) + R + " || Object.keys(" + f + "); for (var " + I + e(2221) + I + "<" + R + e(1609) + I + e(764) + k + " = " + R + "[" + I + e(1327) : s += e(1397) + k + " in " + f + e(2719), s += e(982) + x.usePattern(_e) + e(1406) + k + e(1822), h[e(1115)] = x[e(3036)].getPathExpr(x.errorPath, k, x.opts.jsonPointers);
            var ce = f + "[" + k + "]";
            h[e(2140)][T] = k;
            var se = x[e(2029)](h);
            h[e(882)] = G, x[e(3036)][e(2741)](se, q) < 2 ? s += " " + x[e(3036)][e(1350)](se, q, ce) + " " : s += e(465) + q + e(1035) + ce + "; " + se + " ", l && (s += " if (!" + v + e(332)), s += e(2670), l && (s += e(311) + v + e(2839)), s += " }  ", l && (s += e(982) + v + e(2719), m += "}");
          }
        }
    }
    return l && (s += " " + m + e(982) + g + " == errors) {"), s;
  }), Ct;
}
var Ft, zr;
function kc() {
  return zr || (zr = 1, Ft = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x[e(2585)], c = x.schema[t], u = x.schemaPath + x[e(3036)][e(2528)](t), d = x[e(601)] + "/" + t, l = !x.opts[e(2354)], f = e(1506) + (i || ""), g = e(2233) + n, h = x.util[e(1051)](x), m = "";
    h[e(1113)]++;
    var v = e(467) + h.level;
    if (s += e(2161) + g + e(825), x.opts[e(493)] ? typeof c == e(2220) && Object[e(1877)](c)[e(1148)] > 0 || c === !1 : x[e(3036)].schemaHasRules(c, x.RULES[e(2497)])) {
      h[e(2238)] = c, h.schemaPath = u, h.errSchemaPath = d;
      var k = e(2651) + n, I = "idx" + n, T = "i" + n, q = e(1238) + k + e(2601), R = h.dataLevel = x[e(2585)] + 1, P = e(1506) + R, C = e(2648) + n, j = x[e(569)][e(520)], D = x[e(882)];
      j && (s += e(465) + C + e(2048)), j ? s += " " + C + e(1035) + C + e(702) + f + "); for (var " + I + e(2221) + I + "<" + C + ".length; " + I + e(764) + k + e(1035) + C + "[" + I + "]; " : s += " for (var " + k + " in " + f + ") { ", s += e(1247) + n + " = errors; ";
      var O = k, N = x[e(1629)];
      x[e(1629)] = h[e(1629)] = !0;
      var _ = x[e(2029)](h);
      h[e(882)] = D, x[e(3036)][e(2741)](_, P) < 2 ? s += " " + x.util[e(1350)](_, P, O) + " " : s += e(465) + P + e(1035) + O + "; " + _ + " ", x[e(1629)] = h.compositeRule = N, s += e(543) + v + e(1312) + T + e(1661) + n + "; " + T + "<errors; " + T + e(529) + T + e(293) + k + e(361), x[e(2324)] !== !1 ? (s += e(2793) + e(2374) + e(795) + x.errorPath + e(1218) + x[e(3036)][e(782)](d) + " , params: { propertyName: '" + q + e(1390), x.opts.messages !== !1 && (s += e(608) + q + e(2957)), x[e(569)][e(2330)] && (s += e(1426) + u + e(2366) + x.schemaPath + e(2960) + f + " "), s += e(2670)) : s += e(331), s += e(1548), !x[e(1629)] && l && (x.async ? s += e(1460) : s += " validate.errors = vErrors; return false; "), l && (s += e(1801)), s += e(2984);
    }
    return l && (s += " " + m + e(982) + g + e(2067)), s;
  }), Ft;
}
var _t, Hr;
function Pc() {
  return Hr || (Hr = 1, _t = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x[e(2585)], c = x[e(2238)][t], u = x[e(1913)] + x[e(3036)][e(2528)](t), d = x.errSchemaPath + "/" + t, l = !x[e(569)].allErrors, f = e(1506) + (i || ""), g = "valid" + n, h = x[e(569)].$data && c && c.$data;
    h && (s += e(1643) + n + e(1035) + x[e(3036)][e(2802)](c[e(2624)], i, x[e(2140)]) + "; ");
    var m = "schema" + n;
    if (!h)
      if (c[e(1148)] < x[e(569)][e(3046)] && x[e(2238)].properties && Object[e(1877)](x[e(2238)][e(1117)])[e(1148)]) {
        var R = [], v = c;
        if (v)
          for (var k, I = -1, T = v[e(1148)] - 1; I < T; ) {
            k = v[I += 1];
            var q = x[e(2238)][e(1117)][k];
            !(q && (x[e(569)].strictKeywords ? typeof q == e(2220) && Object[e(1877)](q)[e(1148)] > 0 || q === !1 : x[e(3036)][e(793)](q, x.RULES[e(2497)]))) && (R[R[e(1148)]] = k);
          }
      } else var R = c;
    if (h || R[e(1148)]) {
      var P = x[e(1115)], C = h || R[e(1148)] >= x[e(569)][e(3046)], j = x[e(569)][e(520)];
      if (l)
        if (s += e(416) + n + "; ", C) {
          !h && (s += e(465) + m + " = validate.schema" + u + "; ");
          var D = "i" + n, O = e(2238) + n + "[" + D + "]", N = e(1238) + O + e(2601);
          x[e(569)][e(280)] && (x.errorPath = x.util[e(696)](P, O, x[e(569)][e(1448)])), s += e(465) + g + " = true; ", h && (s += e(1624) + n + e(2537) + g + " = true; else if (!Array.isArray(schema" + n + e(1756) + g + " = false; else {"), s += e(1397) + D + " = 0; " + D + e(2518) + m + e(1609) + D + "++) { " + g + " = " + f + "[" + m + "[" + D + "]] !== undefined ", j && (s += e(367) + f + ", " + m + "[" + D + e(1727)), s += e(2542) + g + e(2483), h && (s += "  }  "), s += e(275) + g + e(2767);
          var _ = _ || [];
          _[e(3019)](s), s = "", x.createErrors !== !1 ? (s += e(2793) + e(747) + e(795) + x.errorPath + e(1218) + x.util[e(782)](d) + " , params: { missingProperty: '" + N + "' } ", x[e(569)][e(709)] !== !1 && (s += " , message: '", x[e(569)]._errorDataPathProperty ? s += e(1660) : s += e(2641) + N + "\\'", s += "' "), x[e(569)][e(2330)] && (s += e(1426) + u + e(2366) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += e(331);
          var z = s;
          s = _[e(2906)](), !x[e(1629)] && l ? x.async ? s += " throw new ValidationError([" + z + e(1420) : s += e(1973) + z + "]; return false; " : s += e(1533) + z + e(1548), s += " } else { ";
        } else {
          s += e(1992);
          var U = R;
          if (U)
            for (var H, D = -1, G = U[e(1148)] - 1; D < G; ) {
              H = U[D += 1], D && (s += e(2312));
              var ie = x[e(3036)][e(2528)](H), ue = f + ie;
              s += " ( ( " + ue + " === undefined ", j && (s += e(2274) + f + e(1453) + x.util[e(1783)](H) + "') "), s += ") && (missing" + n + e(1035) + x.util[e(782)](x[e(569)][e(1448)] ? H : ie) + e(2213);
            }
          s += ") {  ";
          var O = e(302) + n, N = e(1238) + O + " + '";
          x[e(569)]._errorDataPathProperty && (x[e(1115)] = x[e(569)][e(1448)] ? x[e(3036)][e(696)](P, O, !0) : P + e(2608) + O);
          var _ = _ || [];
          _[e(3019)](s), s = "", x[e(2324)] !== !1 ? (s += " { keyword: '" + e(747) + "' , dataPath: (dataPath || '') + " + x[e(1115)] + " , schemaPath: " + x[e(3036)][e(782)](d) + e(2449) + N + e(1390), x.opts.messages !== !1 && (s += e(2199), x.opts._errorDataPathProperty ? s += e(1660) : s += e(2641) + N + "\\'", s += "' "), x[e(569)][e(2330)] && (s += e(1426) + u + " , parentSchema: validate.schema" + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += " {} ";
          var z = s;
          s = _[e(2906)](), !x[e(1629)] && l ? x[e(2538)] ? s += e(1464) + z + e(1420) : s += e(1973) + z + e(1948) : s += e(1533) + z + e(1548), s += e(2471);
        }
      else if (C) {
        !h && (s += " var " + m + e(1440) + u + "; ");
        var D = "i" + n, O = e(2238) + n + "[" + D + "]", N = e(1238) + O + e(2601);
        x.opts._errorDataPathProperty && (x.errorPath = x[e(3036)][e(696)](P, O, x.opts[e(1448)])), h && (s += " if (" + m + e(536) + m + e(1669), x[e(2324)] !== !1 ? (s += e(2793) + e(747) + "' , dataPath: (dataPath || '') + " + x[e(1115)] + e(1218) + x[e(3036)][e(782)](d) + " , params: { missingProperty: '" + N + e(1390), x[e(569)][e(709)] !== !1 && (s += e(2199), x[e(569)][e(280)] ? s += e(1660) : s += e(2641) + N + "\\'", s += "' "), x[e(569)].verbose && (s += e(1426) + u + e(2366) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += " {} ", s += e(2409) + m + " !== undefined) { "), s += " for (var " + D + e(870) + D + e(2518) + m + e(1609) + D + e(1579) + f + "[" + m + "[" + D + e(2679), j && (s += " || ! Object.prototype.hasOwnProperty.call(" + f + ", " + m + "[" + D + "]) "), s += e(2720), x[e(2324)] !== !1 ? (s += e(2793) + e(747) + e(795) + x.errorPath + e(1218) + x[e(3036)][e(782)](d) + e(2449) + N + "' } ", x[e(569)][e(709)] !== !1 && (s += " , message: '", x.opts[e(280)] ? s += e(1660) : s += "should have required property \\'" + N + "\\'", s += "' "), x[e(569)][e(2330)] && (s += e(1426) + u + " , parentSchema: validate.schema" + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += e(331), s += e(2440), h && (s += e(1445));
      } else {
        var le = R;
        if (le)
          for (var H, oe = -1, fe = le[e(1148)] - 1; oe < fe; ) {
            H = le[oe += 1];
            var ie = x[e(3036)][e(2528)](H), N = x.util[e(1783)](H), ue = f + ie;
            x[e(569)][e(280)] && (x[e(1115)] = x.util.getPath(P, H, x[e(569)][e(1448)])), s += e(1992) + ue + e(1461), j && (s += e(2274) + f + e(1453) + x[e(3036)][e(1783)](H) + e(1414)), s += ") {  var err =   ", x.createErrors !== !1 ? (s += e(2793) + e(747) + e(795) + x.errorPath + " , schemaPath: " + x[e(3036)][e(782)](d) + e(2449) + N + e(1390), x[e(569)][e(709)] !== !1 && (s += e(2199), x[e(569)]._errorDataPathProperty ? s += e(1660) : s += e(2641) + N + "\\'", s += "' "), x[e(569)][e(2330)] && (s += " , schema: validate.schema" + u + e(2366) + x[e(1913)] + e(2960) + f + " "), s += e(2670)) : s += e(331), s += e(2614);
          }
      }
      x.errorPath = P;
    } else l && (s += e(996));
    return s;
  }), _t;
}
var Nt, Vr;
function Ic() {
  return Vr || (Vr = 1, Nt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x[e(1113)], i = x[e(2585)], c = x[e(2238)][t], u = x[e(1913)] + x.util[e(2528)](t), d = x[e(601)] + "/" + t, l = !x[e(569)][e(2354)], f = e(1506) + (i || ""), g = e(467) + n, h = x[e(569)][e(2624)] && c && c[e(2624)], m;
    if (h ? (s += " var schema" + n + e(1035) + x[e(3036)][e(2802)](c[e(2624)], i, x[e(2140)]) + "; ", m = e(2238) + n) : m = c, (c || h) && x.opts.uniqueItems !== !1) {
      h && (s += e(465) + g + "; if (" + m + e(2078) + m + e(2537) + g + e(2277) + m + e(1927) + g + e(2657)), s += e(390) + f + e(1594) + g + e(2288);
      var v = x[e(2238)].items && x[e(2238)][e(1603)][e(2291)], k = Array.isArray(v);
      if (!v || v == e(2220) || v == e(1912) || k && (v[e(2273)](e(2220)) >= 0 || v[e(2273)]("array") >= 0)) s += e(705) + f + e(1583) + f + e(2890) + g + e(1563);
      else {
        s += " var itemIndices = {}, item; for (;i--;) { var item = " + f + e(1345);
        var I = e(1006) + (k ? "s" : "");
        s += " if (" + x[e(3036)][I](v, e(370), x[e(569)][e(832)], !0) + ") continue; ", k && (s += ` if (typeof item == 'string') item = '"' + item; `), s += " if (typeof itemIndices[item] == 'number') { " + g + e(2743);
      }
      s += e(2670), h && (s += "  }  "), s += e(543) + g + ") {   ";
      var T = T || [];
      T.push(s), s = "", x[e(2324)] !== !1 ? (s += e(2793) + "uniqueItems' , dataPath: (dataPath || '') + " + x[e(1115)] + e(1218) + x.util.toQuotedString(d) + " , params: { i: i, j: j } ", x[e(569)].messages !== !1 && (s += e(1974)), x[e(569)].verbose && (s += e(1221), h ? s += e(2139) + u : s += "" + c, s += e(1167) + x[e(1913)] + " , data: " + f + " "), s += e(2670)) : s += e(331);
      var q = s;
      s = T[e(2906)](), !x[e(1629)] && l ? x[e(2538)] ? s += e(1464) + q + "]); " : s += " validate.errors = [" + q + e(1948) : s += e(1533) + q + e(1548), s += e(2670), l && (s += e(401));
    } else l && (s += e(1857));
    return s;
  }), Nt;
}
var Tt, Br;
function Ec() {
  return Br || (Br = 1, Tt = { $ref: oc(), allOf: ic(), anyOf: cc(), $comment: uc(), const: dc(), contains: lc(), dependencies: fc(), enum: hc(), format: pc(), if: mc(), items: bc(), maximum: _r(), minimum: _r(), maxItems: Tr(), minItems: Tr(), maxLength: Ar(), minLength: Ar(), maxProperties: Dr(), minProperties: Dr(), multipleOf: gc(), not: yc(), oneOf: vc(), pattern: wc(), properties: Sc(), propertyNames: kc(), required: Pc(), uniqueItems: Ic(), validate: bn() }), Tt;
}
var qt, Wr;
function Rc() {
  const o = a;
  if (Wr) return qt;
  Wr = 1;
  var x = Ec(), t = B0()[o(1655)];
  return qt = function() {
    const e = o;
    var s = [{ type: "number", rules: [{ maximum: [e(2252)] }, { minimum: ["exclusiveMinimum"] }, e(2342), "format"] }, { type: e(2028), rules: [e(388), e(1979), e(2248), e(2350)] }, { type: "array", rules: [e(858), e(2547), e(1603), e(1222), e(2098)] }, { type: "object", rules: ["maxProperties", "minProperties", "required", e(600), e(2374), { properties: [e(435), "patternProperties"] }] }, { rules: [e(2495), e(588), e(2897), e(1409), e(2395), e(1322), e(2952), "if"] }], n = [e(2291), "$comment"], i = [e(2933), e(1101), "id", e(2624), e(1611), e(2673), "description", e(2096), e(2870), e(1389), e(1059), "writeOnly", e(1075), e(279), e(2296), e(634), e(2674)], c = [e(867), "integer", e(2028), e(1912), e(2220), "boolean", "null"];
    return s[e(2497)] = t(n), s.types = t(c), s[e(430)](function(u) {
      const d = e;
      u[d(1354)] = u[d(1354)][d(2739)](function(l) {
        const f = d;
        var g;
        if (typeof l == f(2220)) {
          var h = Object.keys(l)[0];
          g = l[h], l = h, g[f(430)](function(v) {
            n.push(v), s.all[v] = !0;
          });
        }
        n.push(l);
        var m = s[f(2497)][l] = { keyword: l, code: x[l], implements: g };
        return m;
      }), s[d(2497)].$comment = { keyword: d(1922), code: x[d(1922)] }, u[d(2291)] && (s[d(2875)][u.type] = u);
    }), s.keywords = t(n[e(1557)](i)), s[e(2126)] = {}, s;
  }, qt;
}
var At, Kr;
function Cc() {
  const o = a;
  if (Kr) return At;
  Kr = 1;
  var x = ["multipleOf", "maximum", o(2252), "minimum", "exclusiveMinimum", o(388), o(1979), o(2248), o(2296), "maxItems", "minItems", o(2098), "maxProperties", o(1741), o(747), o(435), o(2897), o(2350), o(588)];
  return At = function(t, r) {
    const e = o;
    for (var s = 0; s < r[e(1148)]; s++) {
      t = JSON[e(1598)](JSON.stringify(t));
      var n = r[s][e(1958)]("/"), i = t, c;
      for (c = 1; c < n.length; c++) i = i[n[c]];
      for (c = 0; c < x.length; c++) {
        var u = x[c], d = i[u];
        d && (i[u] = { anyOf: [d, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] });
      }
    }
    return t;
  }, At;
}
var Ot, Zr;
function Fc() {
  if (Zr) return Ot;
  Zr = 1;
  var o = ha().MissingRef;
  Ot = x;
  function x(t, r, e) {
    const s = Z;
    var n = this;
    if (typeof this._opts[s(1342)] != "function") throw new Error(s(2520));
    typeof r == s(1149) && (e = r, r = void 0);
    var i = c(t).then(function() {
      var l = n[s(3028)](t, void 0, r);
      return l.validate || u(l);
    });
    return e && i[s(634)](function(d) {
      e(null, d);
    }, e), i;
    function c(d) {
      const l = s;
      var f = d[l(2933)];
      return f && !n[l(1381)](f) ? x.call(n, { $ref: f }, !0) : Promise[l(855)]();
    }
    function u(d) {
      const l = s;
      try {
        return n[l(994)](d);
      } catch (g) {
        if (g instanceof o) return f(g);
        throw g;
      }
      function f(g) {
        const h = l;
        var m = g[h(599)];
        if (I(m)) throw new Error("Schema " + m + " is loaded but " + g.missingRef + h(1606));
        var v = n[h(592)][m];
        return !v && (v = n[h(592)][m] = n._opts[h(1342)](m), v[h(634)](k, k)), v[h(634)](function(T) {
          const q = h;
          if (!I(m)) return c(T)[q(634)](function() {
            const R = q;
            I(m) || n[R(2068)](T, m, void 0, r);
          });
        }).then(function() {
          return u(d);
        });
        function k() {
          const T = h;
          delete n[T(592)][m];
        }
        function I(T) {
          const q = h;
          return n[q(667)][T] || n[q(638)][T];
        }
      }
    }
  }
  return Ot;
}
var Dt, Gr;
function _c() {
  return Gr || (Gr = 1, Dt = function(x, t, r) {
    const e = Z;
    var s = " ", n = x.level, i = x[e(2585)], c = x[e(2238)][t], u = x[e(1913)] + x[e(3036)][e(2528)](t), d = x.errSchemaPath + "/" + t, l = !x[e(569)].allErrors, f, g = e(1506) + (i || ""), h = e(467) + n, m = e(2233) + n, v = x.opts.$data && c && c[e(2624)], k;
    v ? (s += e(1643) + n + " = " + x[e(3036)][e(2802)](c[e(2624)], i, x[e(2140)]) + "; ", k = "schema" + n) : k = c;
    var I = this, T = e(528) + n, q = I[e(528)], R = "", P, C, j, D, O;
    if (v && q[e(2624)]) {
      O = "keywordValidate" + n;
      var N = q[e(2951)];
      s += e(465) + T + " = RULES.custom['" + t + "'].definition; var " + O + e(1035) + T + e(1249);
    } else {
      if (D = x[e(2017)](I, c, x.schema, x), !D) return;
      k = e(2139) + u, O = D.code, P = q[e(2869)], C = q.inline, j = q[e(1711)];
    }
    var _ = O + ".errors", z = "i" + n, U = e(1539) + n, H = q[e(2538)];
    if (H && !x.async) throw new Error(e(1596));
    if (!(C || j) && (s += "" + _ + e(2963)), s += e(2161) + m + e(288) + h + ";", v && q[e(2624)] && (R += "}", s += e(982) + k + " === undefined) { " + h + e(2453), N && (R += "}", s += " " + h + " = " + T + e(1745) + k + e(2980) + h + e(2719))), C) q.statements ? s += " " + D.validate + " " : s += " " + h + e(1035) + D[e(2029)] + "; ";
    else if (j) {
      var G = x.util[e(1051)](x), R = "";
      G.level++;
      var ie = "valid" + G[e(1113)];
      G[e(2238)] = D.validate, G[e(1913)] = "";
      var ue = x[e(1629)];
      x[e(1629)] = G[e(1629)] = !0;
      var le = x.validate(G)[e(1252)](/validate\.schema/g, O);
      x.compositeRule = G[e(1629)] = ue, s += " " + le;
    } else {
      var oe = oe || [];
      oe[e(3019)](s), s = "", s += "  " + O + e(2111), x[e(569)][e(2606)] ? s += "this" : s += e(1987), P || q[e(2238)] === !1 ? s += e(1796) + g + " " : s += e(1796) + k + " , " + g + e(1724) + x[e(1913)] + " ", s += e(909), x.errorPath != '""' && (s += " + " + x[e(1115)]);
      var fe = i ? e(1506) + (i - 1 || "") : e(1764), Pe = i ? x[e(2140)][i] : e(1708);
      s += e(1796) + fe + e(1796) + Pe + e(1960);
      var ye = s;
      s = oe[e(2906)](), q[e(1139)] === !1 ? (s += " " + h + e(1035), H && (s += e(2654)), s += "" + ye + "; ") : H ? (_ = "customErrors" + n, s += e(465) + _ + " = null; try { " + h + e(643) + ye + e(1359) + h + e(2994) + _ + e(817)) : s += " " + _ + " = null; " + h + e(1035) + ye + "; ";
    }
    if (q[e(2064)] && (s += e(982) + fe + ") " + g + " = " + fe + "[" + Pe + "];"), s += "" + R, q[e(467)]) l && (s += e(1857));
    else {
      s += e(1992), q[e(467)] === void 0 ? (s += " !", j ? s += "" + ie : s += "" + h) : s += " " + !q[e(467)] + " ", s += e(2719), f = I[e(2396)];
      var oe = oe || [];
      oe[e(3019)](s), s = "";
      var oe = oe || [];
      oe.push(s), s = "", x[e(2324)] !== !1 ? (s += " { keyword: '" + (f || "custom") + e(795) + x[e(1115)] + e(1218) + x.util[e(782)](d) + e(447) + I.keyword + e(1390), x[e(569)][e(709)] !== !1 && (s += e(2327) + I[e(2396)] + e(1683)), x[e(569)].verbose && (s += " , schema: validate.schema" + u + e(2366) + x[e(1913)] + e(2960) + g + " "), s += e(2670)) : s += e(331);
      var Le = s;
      s = oe[e(2906)](), !x[e(1629)] && l ? x[e(2538)] ? s += e(1464) + Le + e(1420) : s += " validate.errors = [" + Le + "]; return false; " : s += e(1533) + Le + e(1548);
      var _e = s;
      s = oe[e(2906)](), C ? q[e(1139)] ? q[e(1139)] != "full" && (s += e(2677) + z + "=" + m + "; " + z + "<errors; " + z + e(764) + U + e(1718) + z + e(1114) + U + e(741) + U + e(745) + x[e(1115)] + e(2314) + U + ".schemaPath === undefined) { " + U + e(1400) + d + e(2946), x[e(569)][e(2330)] && (s += " " + U + e(2766) + k + "; " + U + ".data = " + g + "; "), s += e(2670)) : q[e(1139)] === !1 ? s += " " + _e + " " : (s += e(982) + m + e(2474) + _e + e(1158) + z + "=" + m + "; " + z + e(755) + z + e(764) + U + e(1718) + z + e(1114) + U + e(741) + U + e(745) + x[e(1115)] + e(2314) + U + e(2302) + U + e(1400) + d + e(2946), x[e(569)][e(2330)] && (s += " " + U + e(2766) + k + "; " + U + ".data = " + g + "; "), s += e(622)) : j ? (s += e(1872), x[e(2324)] !== !1 ? (s += e(2793) + (f || "custom") + e(795) + x[e(1115)] + " , schemaPath: " + x[e(3036)][e(782)](d) + e(447) + I[e(2396)] + e(1390), x[e(569)][e(709)] !== !1 && (s += e(2327) + I[e(2396)] + e(1683)), x[e(569)][e(2330)] && (s += " , schema: validate.schema" + u + e(2366) + x[e(1913)] + " , data: " + g + " "), s += " } ") : s += e(331), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(1629)] && l && (x[e(2538)] ? s += e(1460) : s += e(2313))) : q[e(1139)] === !1 ? s += " " + _e + " " : (s += e(267) + _ + e(1023) + _ + "; else vErrors = vErrors.concat(" + _ + e(1423) + z + "=" + m + "; " + z + e(755) + z + e(764) + U + e(1718) + z + e(1114) + U + ".dataPath === undefined) " + U + e(745) + x[e(1115)] + e(679) + U + '.schemaPath = "' + d + e(3001), x[e(569)][e(2330)] && (s += " " + U + e(2766) + k + "; " + U + e(1260) + g + "; "), s += e(1530) + _e + e(2670)), s += e(2670), l && (s += e(401));
    }
    return s;
  }), Dt;
}
const Nc = a(497), Tc = a(497), qc = a(431), Ac = { schemaArray: { type: a(1912), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: a(1999), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: a(2105) }, { default: 0 }] }, simpleTypes: { enum: ["array", a(2903), "integer", a(2607), a(867), a(2220), a(2028)] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Oc = [a(2220), "boolean"], Dc = { $id: { type: a(2028), format: "uri-reference" }, $schema: { type: a(2028), format: a(1542) }, $ref: { type: a(2028), format: a(1068) }, $comment: { type: "string" }, title: { type: a(2028) }, description: { type: "string" }, default: !0, readOnly: { type: a(2903), default: !1 }, examples: { type: a(1912), items: !0 }, multipleOf: { type: a(867), exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: a(867) }, minimum: { type: a(867) }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: a(2105) }, minLength: { $ref: a(2479) }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: a(2280) }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: a(2479) }, uniqueItems: { type: a(2903), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: a(2105) }, minProperties: { $ref: a(2479) }, required: { $ref: a(489) }, additionalProperties: { $ref: "#" }, definitions: { type: a(2220), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: a(2220), additionalProperties: { $ref: "#" }, propertyNames: { format: a(2840) }, default: {} }, dependencies: { type: a(2220), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: a(489) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: a(1912), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: a(1510) }, { type: a(1912), items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: a(2028) }, contentMediaType: { type: a(2028) }, contentEncoding: { type: a(2028) }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: a(2280) }, anyOf: { $ref: a(2280) }, oneOf: { $ref: a(2280) }, not: { $ref: "#" } }, gn = { $schema: Nc, $id: Tc, title: qc, definitions: Ac, type: Oc, properties: Dc, default: !0 };
var jt, Jr;
function jc() {
  const o = a;
  if (Jr) return jt;
  Jr = 1;
  var x = gn;
  return jt = { $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", definitions: { simpleTypes: x[o(2870)][o(1112)] }, type: "object", dependencies: { schema: [o(2029)], $data: [o(2029)], statements: [o(2204)], valid: { not: { required: ["macro"] } } }, properties: { type: x[o(1117)].type, schema: { type: "boolean" }, statements: { type: o(2903) }, dependencies: { type: o(1912), items: { type: o(2028) } }, metaSchema: { type: o(2220) }, modifying: { type: "boolean" }, valid: { type: o(2903) }, $data: { type: "boolean" }, async: { type: o(2903) }, errors: { anyOf: [{ type: o(2903) }, { const: o(412) }] } } }, jt;
}
var Lt, Qr;
function Lc() {
  if (Qr) return Lt;
  Qr = 1;
  var o = /^[a-z_$][a-z0-9_$-]*$/i, x = _c(), t = jc();
  Lt = { add: r, get: e, remove: s, validate: n };
  function r(i, c) {
    const u = Z;
    var d = this[u(730)];
    if (d[u(305)][i]) throw new Error("Keyword " + i + u(2488));
    if (!o.test(i)) throw new Error(u(1588) + i + u(2261));
    if (c) {
      this[u(2804)](c, !0);
      var l = c[u(2291)];
      if (Array[u(500)](l))
        for (var f = 0; f < l[u(1148)]; f++) h(i, l[f], c);
      else h(i, l, c);
      var g = c[u(752)];
      g && (c[u(2624)] && this[u(1157)][u(2624)] && (g = { anyOf: [g, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] }), c[u(2951)] = this[u(2869)](g, !0));
    }
    d.keywords[i] = d[u(2497)][i] = !0;
    function h(m, v, k) {
      const I = u;
      for (var T, q = 0; q < d.length; q++) {
        var R = d[q];
        if (R[I(2291)] == v) {
          T = R;
          break;
        }
      }
      !T && (T = { type: v, rules: [] }, d[I(3019)](T));
      var P = { keyword: m, definition: k, custom: !0, code: x, implements: k[I(847)] };
      T.rules.push(P), d[I(2126)][m] = P;
    }
    return this;
  }
  function e(i) {
    const c = Z;
    var u = this.RULES[c(2126)][i];
    return u ? u[c(528)] : this[c(730)][c(305)][i] || !1;
  }
  function s(i) {
    const c = Z;
    var u = this[c(730)];
    delete u.keywords[i], delete u.all[i], delete u.custom[i];
    for (var d = 0; d < u.length; d++)
      for (var l = u[d].rules, f = 0; f < l[c(1148)]; f++)
        if (l[f][c(2396)] == i) {
          l[c(2176)](f, 1);
          break;
        }
    return this;
  }
  function n(i, c) {
    const u = Z;
    n[u(1139)] = null;
    var d = this[u(1739)] = this[u(1739)] || this[u(2869)](t, !0);
    if (d(i)) return !0;
    if (n.errors = d[u(1139)], c) throw new Error(u(1771) + this[u(2215)](d[u(1139)]));
    return !1;
  }
  return Lt;
}
const Mc = "http://json-schema.org/draft-07/schema#", $c = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Uc = "Meta-schema for $data reference (JSON Schema extension proposal)", zc = a(2220), Hc = ["$data"], Vc = { $data: { type: a(2028), anyOf: [{ format: a(1871) }, { format: a(352) }] } }, Bc = !1, Wc = { $schema: Mc, $id: $c, description: Uc, type: zc, required: Hc, properties: Vc, additionalProperties: Bc };
var Mt, Xr;
function Kc() {
  const o = a;
  if (Xr) return Mt;
  Xr = 1;
  var x = rc(), t = fa(), r = sc(), e = pn(), s = mn(), n = nc(), i = Rc(), c = Cc(), u = B0();
  Mt = m, m.prototype[o(2029)] = v, m[o(1706)].compile = k, m[o(1706)][o(2068)] = I, m[o(1706)][o(2203)] = T, m[o(1706)][o(2951)] = q, m.prototype[o(1381)] = P, m[o(1706)][o(1778)] = D, m[o(1706)][o(655)] = ue, m[o(1706)].errorsText = ie, m[o(1706)]._addSchema = N, m[o(1706)][o(994)] = _, m[o(1706)][o(2405)] = Fc();
  var d = Lc();
  m[o(1706)].addKeyword = d.add, m[o(1706)][o(2114)] = d[o(1507)], m[o(1706)].removeKeyword = d[o(2308)], m[o(1706)][o(2804)] = d[o(2029)];
  var l = ha();
  m[o(1053)] = l.Validation, m[o(2465)] = l[o(1695)], m.$dataMetaSchema = c;
  var f = "http://json-schema.org/draft-07/schema", g = [o(1074), "useDefaults", o(1173), o(2619)], h = [o(343)];
  function m(A) {
    const F = o;
    if (!(this instanceof m)) return new m(A);
    A = this[F(1157)] = u[F(1051)](A) || {}, _e(this), this[F(638)] = {}, this._refs = {}, this[F(2162)] = {}, this[F(2754)] = n(A[F(2350)]), this._cache = A.cache || new r(), this[F(592)] = {}, this[F(2045)] = [], this[F(730)] = i(), this[F(1601)] = z(A), A[F(3046)] = A.loopRequired || 1 / 0, A.errorDataPath == F(952) && (A[F(280)] = !0), A[F(1803)] === void 0 && (A[F(1803)] = s), this[F(898)] = Le(this), A[F(1882)] && fe(this), A[F(305)] && Pe(this), le(this), typeof A[F(2054)] == "object" && this.addMetaSchema(A[F(2054)]), A[F(3011)] && this.addKeyword(F(3011), { metaSchema: { type: F(2903) } }), oe(this);
  }
  function v(A, F) {
    const L = o;
    var J;
    if (typeof A == L(2028)) {
      if (J = this.getSchema(A), !J) throw new Error(L(418) + A + '"');
    } else {
      var ee = this._addSchema(A);
      J = ee[L(2029)] || this[L(994)](ee);
    }
    var V = J(F);
    return J.$async !== !0 && (this[L(1139)] = J[L(1139)]), V;
  }
  function k(A, F) {
    const L = o;
    var J = this[L(3028)](A, void 0, F);
    return J[L(2029)] || this[L(994)](J);
  }
  function I(A, F, L, J) {
    const ee = o;
    if (Array.isArray(A)) {
      for (var V = 0; V < A.length; V++) this[ee(2068)](A[V], void 0, L, J);
      return this;
    }
    var X = this._getId(A);
    if (X !== void 0 && typeof X != "string") throw new Error("schema id must be string");
    return F = t.normalizeId(F || X), ye(this, F), this[ee(638)][F] = this[ee(3028)](A, L, J, !0), this;
  }
  function T(A, F, L) {
    return this[o(2068)](A, F, L, !0), this;
  }
  function q(A, F) {
    const L = o;
    var J = A[L(2933)];
    if (J !== void 0 && typeof J != L(2028)) throw new Error(L(2407));
    if (J = J || this[L(1157)].defaultMeta || R(this), !J) return this[L(872)].warn(L(1746)), this[L(1139)] = null, !0;
    var ee = this[L(2029)](J, A);
    if (!ee && F) {
      var V = L(474) + this[L(2215)]();
      if (this._opts[L(2951)] == L(2127)) this[L(872)][L(1491)](V);
      else throw new Error(V);
    }
    return ee;
  }
  function R(A) {
    const F = o;
    var L = A[F(1157)][F(2054)];
    return A[F(1157)][F(1936)] = typeof L == F(2220) ? A[F(1601)](L) || L : A[F(1381)](f) ? f : void 0, A[F(1157)][F(1936)];
  }
  function P(A) {
    const F = o;
    var L = j(this, A);
    switch (typeof L) {
      case F(2220):
        return L[F(2029)] || this._compile(L);
      case F(2028):
        return this[F(1381)](L);
      case F(2781):
        return C(this, A);
    }
  }
  function C(A, F) {
    const L = o;
    var J = t[L(2238)][L(2689)](A, { schema: {} }, F);
    if (J) {
      var ee = J.schema, V = J[L(1224)], X = J.baseId, ce = x.call(A, ee, V, void 0, X);
      return A[L(2162)][F] = new e({ ref: F, fragment: !0, schema: ee, root: V, baseId: X, validate: ce }), ce;
    }
  }
  function j(A, F) {
    const L = o;
    return F = t.normalizeId(F), A[L(638)][F] || A[L(667)][F] || A[L(2162)][F];
  }
  function D(A) {
    const F = o;
    if (A instanceof RegExp) return O(this, this._schemas, A), O(this, this[F(667)], A), this;
    switch (typeof A) {
      case F(2781):
        return O(this, this[F(638)]), O(this, this._refs), this[F(1971)].clear(), this;
      case "string":
        var L = j(this, A);
        return L && this[F(1971)][F(1615)](L.cacheKey), delete this[F(638)][A], delete this[F(667)][A], this;
      case F(2220):
        var J = this._opts[F(1803)], ee = J ? J(A) : A;
        this[F(1971)][F(1615)](ee);
        var V = this[F(1601)](A);
        V && (V = t[F(2447)](V), delete this[F(638)][V], delete this[F(667)][V]);
    }
    return this;
  }
  function O(A, F, L) {
    const J = o;
    for (var ee in F) {
      var V = F[ee];
      !V[J(2054)] && (!L || L[J(1531)](ee)) && (A[J(1971)][J(1615)](V[J(2401)]), delete F[ee]);
    }
  }
  function N(A, F, L, J) {
    const ee = o;
    if (typeof A != ee(2220) && typeof A != ee(2903)) throw new Error(ee(2744));
    var V = this[ee(1157)][ee(1803)], X = V ? V(A) : A, ce = this[ee(1971)][ee(1507)](X);
    if (ce) return ce;
    J = J || this[ee(1157)][ee(1617)] !== !1;
    var se = t[ee(2447)](this[ee(1601)](A));
    se && J && ye(this, se);
    var te = this[ee(1157)].validateSchema !== !1 && !F, Me;
    te && !(Me = se && se == t.normalizeId(A.$schema)) && this[ee(2951)](A, !0);
    var Ae = t.ids[ee(2689)](this, A), ze = new e({ id: se, schema: A, localRefs: Ae, cacheKey: X, meta: L });
    return se[0] != "#" && J && (this[ee(667)][se] = ze), this._cache.put(X, ze), te && Me && this.validateSchema(A, !0), ze;
  }
  function _(A, F) {
    const L = o;
    if (A.compiling)
      return A.validate = V, V[L(2238)] = A[L(2238)], V[L(1139)] = null, V[L(1224)] = F || V, A[L(2238)][L(1611)] === !0 && (V[L(1611)] = !0), V;
    A[L(2072)] = !0;
    var J;
    A[L(2054)] && (J = this[L(1157)], this[L(1157)] = this[L(898)]);
    var ee;
    try {
      ee = x[L(2689)](this, A.schema, F, A[L(3022)]);
    } catch (X) {
      throw delete A.validate, X;
    } finally {
      A[L(2072)] = !1, A[L(2054)] && (this[L(1157)] = J);
    }
    return A[L(2029)] = ee, A.refs = ee[L(1515)], A[L(987)] = ee[L(987)], A[L(1224)] = ee[L(1224)], ee;
    function V() {
      const X = L;
      var ce = A[X(2029)], se = ce.apply(this, arguments);
      return V[X(1139)] = ce[X(1139)], se;
    }
  }
  function z(A) {
    const F = o;
    switch (A[F(1679)]) {
      case F(2060):
        return G;
      case "id":
        return U;
      default:
        return H;
    }
  }
  function U(A) {
    const F = o;
    return A[F(1101)] && this[F(872)][F(2618)](F(2962), A[F(1101)]), A.id;
  }
  function H(A) {
    const F = o;
    return A.id && this[F(872)][F(2618)](F(2419), A.id), A[F(1101)];
  }
  function G(A) {
    const F = o;
    if (A[F(1101)] && A.id && A[F(1101)] != A.id) throw new Error(F(1111));
    return A[F(1101)] || A.id;
  }
  function ie(A, F) {
    const L = o;
    if (A = A || this[L(1139)], !A) return L(1592);
    F = F || {};
    for (var J = F.separator === void 0 ? ", " : F[L(1899)], ee = F[L(2878)] === void 0 ? L(1506) : F[L(2878)], V = "", X = 0; X < A.length; X++) {
      var ce = A[X];
      ce && (V += ee + ce[L(2784)] + " " + ce.message + J);
    }
    return V[L(1908)](0, -J[L(1148)]);
  }
  function ue(A, F) {
    return typeof F == o(2028) && (F = new RegExp(F)), this._formats[A] = F, this;
  }
  function le(A) {
    const F = o;
    var L;
    if (A[F(1157)][F(2624)] && (L = Wc, A.addMetaSchema(L, L[F(1101)], !0)), A._opts[F(2054)] !== !1) {
      var J = gn;
      A[F(1157)][F(2624)] && (J = c(J, h)), A[F(2203)](J, f, !0), A[F(667)][F(1016)] = f;
    }
  }
  function oe(A) {
    const F = o;
    var L = A[F(1157)][F(1705)];
    if (L)
      if (Array[F(500)](L)) A[F(2068)](L);
      else
        for (var J in L) A[F(2068)](L[J], J);
  }
  function fe(A) {
    const F = o;
    for (var L in A[F(1157)][F(1882)]) {
      var J = A[F(1157)][F(1882)][L];
      A[F(655)](L, J);
    }
  }
  function Pe(A) {
    const F = o;
    for (var L in A[F(1157)][F(305)]) {
      var J = A[F(1157)][F(305)][L];
      A[F(2846)](L, J);
    }
  }
  function ye(A, F) {
    const L = o;
    if (A[L(638)][F] || A[L(667)][F]) throw new Error(L(2376) + F + L(2851));
  }
  function Le(A) {
    const F = o;
    for (var L = u.copy(A[F(1157)]), J = 0; J < g[F(1148)]; J++) delete L[g[J]];
    return L;
  }
  function _e(A) {
    const F = o;
    var L = A[F(1157)][F(872)];
    if (L === !1) A.logger = { log: Je, warn: Je, error: Je };
    else {
      if (L === void 0 && (L = console), !(typeof L == F(2220) && L[F(2127)] && L[F(2618)] && L.error)) throw new Error("logger must implement log, warn and error methods");
      A[F(872)] = L;
    }
  }
  function Je() {
  }
  return Mt;
}
var Zc = Kc();
const Gc = zs(Zc);
class Jc extends X2 {
  constructor(x, t) {
    const r = a;
    var e;
    super(t), this[r(2758)] = x, this[r(824)] = (e = t == null ? void 0 : t[r(2183)]) !== null && e !== void 0 ? e : {}, this[r(2472)] = t == null ? void 0 : t.instructions, this[r(2623)](tn, (s) => this[r(801)](s)), this[r(566)](an, () => {
      const s = r;
      var n;
      return (n = this[s(3009)]) === null || n === void 0 ? void 0 : n.call(this);
    });
  }
  registerCapabilities(x) {
    const t = a;
    if (this[t(2276)]) throw new Error(t(1710));
    this[t(824)] = Y2(this[t(824)], x);
  }
  [a(957)](x) {
    const t = a;
    var r, e, s;
    switch (x) {
      case t(916):
        if (!(!((r = this[t(365)]) === null || r === void 0) && r.sampling)) throw new Error("Client does not support sampling (required for " + x + ")");
        break;
      case "elicitation/create":
        if (!(!((e = this._clientCapabilities) === null || e === void 0) && e.elicitation)) throw new Error("Client does not support elicitation (required for " + x + ")");
        break;
      case t(1314):
        if (!(!((s = this[t(365)]) === null || s === void 0) && s.roots)) throw new Error(t(842) + x + ")");
        break;
    }
  }
  [a(1943)](x) {
    const t = a;
    switch (x) {
      case "notifications/message":
        if (!this._capabilities[t(1104)]) throw new Error(t(515) + x + ")");
        break;
      case t(2704):
      case t(961):
        if (!this[t(824)][t(1813)]) throw new Error(t(2500) + x + ")");
        break;
      case t(1920):
        if (!this[t(824)][t(2388)]) throw new Error(t(2321) + x + ")");
        break;
      case t(1192):
        if (!this._capabilities[t(2723)]) throw new Error("Server does not support notifying of prompt list changes (required for " + x + ")");
        break;
    }
  }
  [a(1742)](x) {
    const t = a;
    switch (x) {
      case t(916):
        if (!this[t(824)][t(1259)]) throw new Error(t(1767) + x + ")");
        break;
      case "logging/setLevel":
        if (!this[t(824)][t(1104)]) throw new Error(t(515) + x + ")");
        break;
      case "prompts/get":
      case t(1869):
        if (!this[t(824)][t(2723)]) throw new Error("Server does not support prompts (required for " + x + ")");
        break;
      case "resources/list":
      case t(884):
      case t(742):
        if (!this[t(824)][t(1813)]) throw new Error(t(2245) + x + ")");
        break;
      case t(2979):
      case t(2896):
        if (!this[t(824)][t(2388)]) throw new Error(t(773) + x + ")");
        break;
    }
  }
  async [a(801)](x) {
    const t = a, r = x[t(434)].protocolVersion;
    return this[t(365)] = x[t(434)][t(2183)], this[t(2365)] = x[t(434)][t(2864)], { protocolVersion: Ji[t(555)](r) ? r : Zs, capabilities: this.getCapabilities(), serverInfo: this[t(2758)], ...this[t(2472)] && { instructions: this[t(2472)] } };
  }
  [a(1447)]() {
    return this[a(365)];
  }
  [a(1794)]() {
    return this[a(2365)];
  }
  [a(1263)]() {
    return this[a(824)];
  }
  async [a(2666)]() {
    const x = a;
    return this[x(1093)]({ method: x(2666) }, ta);
  }
  async [a(1135)](x, t) {
    const r = a;
    return this[r(1093)]({ method: r(916), params: x }, ln, t);
  }
  async [a(1477)](x, t) {
    const r = a, e = await this[r(1093)]({ method: r(1543), params: x }, fn, t);
    if (e[r(2429)] === r(1315) && e[r(803)]) try {
      const s = new Gc(), n = s[r(2869)](x.requestedSchema);
      if (!n(e[r(803)])) throw new q0(v0.InvalidParams, r(2974) + s[r(2215)](n[r(1139)]));
    } catch (s) {
      throw s instanceof q0 ? s : new q0(v0[r(614)], r(294) + s);
    }
    return e;
  }
  async listRoots(x, t) {
    const r = a;
    return this[r(1093)]({ method: r(1314), params: x }, hn, t);
  }
  async [a(786)](x) {
    const t = a;
    return this[t(1455)]({ method: t(1370), params: x });
  }
  async [a(260)](x) {
    const t = a;
    return this[t(1455)]({ method: t(2704), params: x });
  }
  async sendResourceListChanged() {
    const x = a;
    return this[x(1455)]({ method: x(961) });
  }
  async [a(1725)]() {
    const x = a;
    return this[x(1455)]({ method: x(1920) });
  }
  async [a(2519)]() {
    const x = a;
    return this[x(1455)]({ method: x(1192) });
  }
}
class Qc extends Error {
  constructor(x, t) {
    const r = a;
    super(r(299) + x + r(2565) + t + "ms"), this[r(1166)] = r(1671);
  }
}
const mx = /* @__PURE__ */ new Map();
class Xc {
  constructor(x) {
    const t = a;
    if (this[t(720)] = [], this[t(2692)] = Date[t(804)](), mx[t(1281)](x[t(1808)])) {
      const i = mx.get(x[t(1808)]);
      i && i[t(880)]();
    }
    this[t(1808)] = x[t(1808)], this[t(1066)] = x[t(1066)], this[t(2065)] = x.addMessageEventListener, this[t(854)] = x[t(854)];
    const r = x.heartbeatInterval ?? x[t(1300)], e = x[t(1300)] ?? x.heartbeatInterval, s = this[t(918)](r), n = this[t(918)](e);
    s && n && (this[t(1799)] = s, this[t(1300)] = n), this[t(845)] = x[t(845)] ?? !1, mx[t(823)](this[t(1808)], this), this[t(334)] = this[t(334)].bind(this), this[t(2382)] = this[t(2065)](this.listenMessageCallback);
  }
  [a(918)](x) {
    if (typeof x === a(867) && !(!Number.isFinite(x) || x <= 0))
      return x;
  }
  [a(1659)]() {
    const x = a;
    return typeof this[x(1799)] === x(867) && typeof this[x(1300)] === x(867);
  }
  [a(334)](x) {
    const t = a;
    if (x[t(1808)] === this[t(1808)]) {
      if (x[t(1570)] === t(1712)) {
        x.type === t(2666) && !this[t(845)] ? this[t(1066)]({ channel: t(1712), posterIdentifier: this[t(1808)], type: t(2972), timestamp: x[t(1428)] }) : x[t(2291)] === "pong" && (this[t(2692)] = Date[t(804)](), this.heartbeatTimeoutTimer && (clearTimeout(this[t(2586)]), this[t(2586)] = void 0));
        return;
      }
      x.channel === t(902) && (this[t(1903)] && t(485) in x ? this[t(1903)](x.payload) : "payload" in x && this[t(720)].push(x[t(485)]));
    }
  }
  async [a(1171)]() {
    const x = a;
    for (; this[x(720)].length > 0; ) {
      const t = this.messageQueue.shift();
      t && this[x(1903)] && this[x(1903)](t);
    }
    this.isHeartbeatEnabled() && this[x(1207)]();
  }
  [a(1207)]() {
    const x = a;
    if (!this[x(1659)]()) return;
    const t = this[x(1799)], r = this[x(1300)];
    this[x(1723)](), this[x(1952)] = setInterval(() => {
      const e = x, s = Date[e(804)]();
      this[e(1066)]({ channel: e(1712), posterIdentifier: this[e(1808)], type: "ping", timestamp: s }), this[e(2586)] = setTimeout(() => {
        const n = e, i = new Qc(this[n(1808)], r);
        this[n(2917)] && this[n(2917)](i);
      }, r);
    }, t);
  }
  [a(1723)]() {
    const x = a;
    this[x(1952)] && (clearInterval(this[x(1952)]), this[x(1952)] = void 0), this[x(2586)] && (clearTimeout(this[x(2586)]), this.heartbeatTimeoutTimer = void 0);
  }
  async [a(1865)](x, t) {
    const r = a;
    this[r(1066)]({ channel: r(902), posterIdentifier: this.posterIdentifier, payload: x });
  }
  async [a(880)]() {
    const x = a;
    this[x(1723)](), mx.delete(this[x(1808)]), this.removeMessageEventListener(this[x(2382)]);
  }
}
const Yc = ox[a(1735)](a(1245));
async function yn() {
  const o = a;
  if (!window[o(1248)]) return;
  const x = new Xc({ posterIdentifier: o(757), messagePoster: (e) => {
    window[o(1248)].postMessage(e, "*");
  }, addMessageEventListener: (e) => {
    const s = o, n = (i) => {
      e(i[Z(1506)]);
    };
    return window[s(2322)](s(2461), n), n;
  }, removeMessageEventListener: (e) => {
    window[o(1034)]("message", e);
  } });
  x[o(2917)] = (e) => {
    Yc("comfy side transport.onerror", e);
  };
  const t = new Jc({ name: o(757), version: "1.0.0" }, {}), r = new Io(t);
  return await r[o(1501)](x), window[o(1248)][o(931)]({ channel: o(2346), meshName: o(1631), action: o(1501), version: o(2507) }, "*"), await Ee[o(1501)](o(1020), r);
}
const eu = Object[a(1466)](Object[a(2717)]({ __proto__: null, connectUXP: yn, mcpMesh: Ee }, Symbol[a(2010)], { value: a(547) }));
function vn(o) {
  const x = a, t = Ne[x(878)] || Ne.extensionManager[x(1774)], r = t.activeWorkflow;
  if (o && o.detail && o[x(3030)].id !== r[x(2617)].id) return;
  const e = Ee[x(2788)].getState().widgetableStructure, s = ea(Ne[x(2603)], r);
  Sn(s, e) && Ee[x(2788)][x(734)]({ widgetableStructure: s }), Ee.store[x(734)]({ widgetableValues: Tx(Ne[x(2603)]) });
}
R0[a(2322)](a(1443), vn), R0[a(2322)](a(921), () => {
  const o = a;
  Ee.store[o(734)]({ widgetableValues: Tx(Ne[o(2603)]) });
});
let Yr = 0, es = !0, xs = "";
function wn() {
  const o = a;
  requestAnimationFrame(wn);
  const x = Ne[o(878)] || Ne[o(1108)].workflow, t = x[o(1763)], r = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[o(648)]) || "", s = (t == null ? void 0 : t.isPersisted) || !0;
  if (r === Yr && e === xs && s === es) return;
  const n = Date[o(804)]();
  Yr = r, xs = e, es = s;
  const i = ea(Ne.graph, t), c = Tx(Ne[o(2603)]);
  Ee[o(2788)][o(734)]({ widgetableStructure: i, widgetableValues: c }), console.log(o(758) + (Date[o(804)]() - n) + "ms"), setTimeout(() => {
    const u = o;
    if (t !== x[u(1763)]) return;
    const d = ea(Ne[u(2603)], t), l = Tx(Ne[u(2603)]);
    Sn(d, i) && Ee[u(2788)][u(734)]({ widgetableStructure: d }), Ee.store[u(734)]({ widgetableValues: l });
  }, 800);
}
requestAnimationFrame(wn);
function Sn(o, x) {
  const t = a;
  return o[t(1722)][t(1148)] !== x[t(1722)][t(1148)] || JSON[t(3038)](o.nodeIndexes) !== JSON[t(3038)](x.nodeIndexes) || JSON.stringify(o[t(2844)]) !== JSON[t(3038)](x[t(2844)]);
}
let ts = !1;
async function xu() {
  const o = a;
  if (ts) return Promise[o(855)]();
  R0[o(772)] && Ee.store[o(734)]({ comfyUserToken: R0[o(772)] }), ts = !0;
}
ox[a(1735)]("comfy-entry");
async function tu(o, x, t) {
  const r = a;
  x.addEventListener(r(364), ({ detail: n }) => {
    const i = r;
    if (!n) return;
    let c = 0, u = 0;
    !isNaN(n.value / n[i(477)]) && (c = Math.round(n[i(935)] / n[i(477)] * 100));
    const d = n[i(2489)], l = graph[i(2844)][i(304)]((f) => f.id == d);
    if (l && l[i(2589)]) {
      const f = 100 / graph[i(2844)][i(1148)];
      u = Math[i(2944)](l[i(2589)] * f) + (c ? c / 100 * f : 0);
    }
    Ee[i(2788)][i(734)]({ progress: c, graphProgress: u });
  }), x[r(2322)](r(1071), (n) => {
    var c;
    const i = r;
    (c = n[i(3030)]) != null && c.exec_info && Ee[i(2788)].setState({ queueSize: n[i(3030)][i(1366)][i(769)] });
  }), x[r(2322)]("execution_error", ({ detail: n }) => {
    const i = r;
    if (Ee[i(2788)].setState({ executingNodeTitle: "", executingNodeID: "", lastError: n.exception_message }), n[i(1907)]) {
      const c = o[i(2603)].nodes[i(304)]((u) => u.id == n[i(1907)]);
      Ee[i(2788)][i(734)]({ widgetableErrors: { [n.node_id]: "[" + ((c == null ? void 0 : c.title) || n[i(1907)]) + "]" + n.exception_message } });
    }
  }), x[r(2322)](r(707), (n) => {
    const i = r, c = n[i(3030)], u = graph[i(2844)][i(304)]((d) => d.id == c);
    if (u) {
      const d = 100 / graph[i(2844)][i(1148)];
      Ee[i(2788)][i(734)]({ executingNodeTitle: u[i(2673)], executingNodeID: u.id, graphProgress: Math.round(u[i(2589)] * d) });
    }
  }), x[r(2322)](r(402), () => {
    const n = r;
    Ee[n(2788)][n(734)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x[r(2322)](r(1675), ({ detail: n }) => {
    const i = r;
    Ee[i(2788)][i(734)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date.now() });
  });
  const e = /* @__PURE__ */ new Map();
  x.addEventListener("execution_success", (n) => {
    const i = r;
    Ee.store.setState({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[i(1507)](n[i(3030)][i(2712)]) || [])[i(2739)]((u) => ({ url: u, thumbnail: u }));
    Mi(n[i(3030)][i(2712)], c), e[i(2375)](n[i(3030)][i(2712)]);
  }), x[r(2322)](r(921), (n) => {
    const i = r, c = e[i(1507)](n[i(3030)][i(2712)]) || [];
    n[i(3030)][i(1749)] && Array[i(500)](n[i(3030)][i(1749)][i(2477)]) && n[i(3030)].output[i(2477)].length > 0 && c[i(3019)](...n[i(3030)].output[i(2477)][i(362)]((u) => u[i(2291)] == i(1749)).map((u) => {
      const d = i;
      return location[d(1444)] + location[d(962)] + d(2950) + u[d(2291)] + "&filename=" + encodeURIComponent(u.filename) + (u[d(783)] ? d(2209) + encodeURIComponent(u[d(783)]) : "");
    })), n[i(3030)][i(1749)] && Array[i(500)](n[i(3030)][i(1749)][i(2160)]) && n.detail[i(1749)].sdppp_assets[i(1148)] > 0 && c[i(3019)](...n[i(3030)][i(1749)][i(2160)][i(2739)]((u) => {
      const d = i;
      return location.origin + location.pathname + d(610) + encodeURIComponent(u);
    })), e[i(823)](n[i(3030)][i(2712)], c);
  });
  let s = null;
  x.addEventListener("reconnecting", (n) => {
    s = setTimeout(() => {
      const i = Z;
      Ee.store[i(734)]({ comfyWSState: i(2285) });
    }, 1e3);
  }), x.addEventListener(r(1155), (n) => {
    const i = r;
    Ee.store.setState({ comfyWSState: i(698) }), clearTimeout(s);
  });
}
let $t = [];
(async function() {
  var x, t, r, e, s, n;
  const o = a;
  if (typeof gradioApp == o(2781)) {
    try {
      const i = (t = (x = window.comfyAPI) == null ? void 0 : x.app) == null ? void 0 : t[o(2837)], c = (e = (r = window[o(2914)]) == null ? void 0 : r.ui) == null ? void 0 : e[o(2194)], u = (n = (s = window[o(2914)]) == null ? void 0 : s.api) == null ? void 0 : n[o(2753)];
      if (!i || !u || !c) throw new Error(o(701));
      await xu(), await yn(), await tu(i, u, c), import("./sdppp-custom.js")[o(634)]((d) => {
        d[o(2096)](xx, 2);
      });
    } catch (i) {
      $t[o(3019)](i[o(2810)] || i.message || i);
    }
    await new Promise((i) => setTimeout(i, 2e3)), $t.length && console.error($t[0]);
  }
})();
