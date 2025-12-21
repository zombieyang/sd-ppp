var Ln = Object.defineProperty;
var $n = (o, x, t) => x in o ? Ln(o, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[x] = t;
var me = (o, x, t) => $n(o, typeof x != "symbol" ? x + "" : x, t);
const a = K;
(function(o, x) {
  const t = K, r = o();
  for (; ; )
    try {
      if (-parseInt(t(1849)) / 1 * (-parseInt(t(166)) / 2) + -parseInt(t(781)) / 3 * (-parseInt(t(210)) / 4) + parseInt(t(1163)) / 5 * (parseInt(t(1260)) / 6) + parseInt(t(827)) / 7 * (parseInt(t(2123)) / 8) + -parseInt(t(2510)) / 9 * (-parseInt(t(1081)) / 10) + -parseInt(t(2831)) / 11 * (-parseInt(t(230)) / 12) + -parseInt(t(2238)) / 13 * (parseInt(t(270)) / 14) === x) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(qx, 588497);
const Ne = window[a(1688)][a(1388)][a(1388)];
window[a(1688)].ui[a(1887)];
const C0 = window[a(1688)].api[a(699)];
var ts;
class Un {
  constructor(x) {
    me(this, ts);
    const t = a;
    this.definition = x;
    const r = this[t(1348)]();
    if (!r[t(295)]) throw new Error(t(1592) + r[t(638)].join(", "));
  }
  validate() {
    const x = a, t = [];
    (!this[x(1259)][x(1064)] || Object[x(1806)](this[x(1259)][x(1064)])[x(1332)] === 0) && t[x(902)](x(2248));
    for (const [e, s] of this[x(1259)].edges)
      !this[x(1259)][x(1064)][e] && t.push(x(2649) + e), !this[x(1259)][x(1064)][s] && t[x(902)]("Edge references unknown target node: " + s);
    const r = this[x(2143)]();
    return !r[x(295)] && t[x(902)](...r.errors), { valid: t[x(1332)] === 0, errors: t };
  }
  buildDirectedAdjacencyList() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const r of Object[x(1806)](this[x(1259)][x(1064)]))
      t[x(1750)](r, []);
    for (const [r, e] of this[x(1259)][x(2194)]) {
      const s = t[x(1094)](r) || [];
      s[x(902)](e), t.set(r, s);
    }
    return t;
  }
  [(ts = a(1259), a(2143))]() {
    const x = a, t = [], r = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), s = this[x(710)](), n = (i, c) => {
      const u = x;
      if (e[u(441)](i)) {
        const l = c[u(1104)](i), f = c[u(2103)](l)[u(1545)](i);
        return t[u(902)](u(369) + f[u(2252)](u(2321))), !0;
      }
      if (r[u(441)](i)) return !1;
      r[u(479)](i), e[u(479)](i);
      const d = s[u(1094)](i) || [];
      for (const l of d)
        if (n(l, [...c, i])) return !0;
      return e[u(882)](i), !1;
    };
    for (const i of Object[x(1806)](this[x(1259)][x(1064)]))
      !r[x(441)](i) && n(i, []);
    return { valid: t.length === 0, errors: t };
  }
  [a(584)]() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const r of Object.keys(this[x(1259)].nodes))
      t[x(1750)](r, []);
    for (const [r, e] of this[x(1259)][x(2194)]) {
      const s = t.get(r) || [];
      s.push(e), t.set(r, s);
      const n = t.get(e) || [];
      n.push(r), t[x(1750)](e, n);
    }
    return t;
  }
  [a(1084)](x) {
    const t = a;
    return this.buildAdjacencyList()[t(1094)](x) || [];
  }
  [a(1234)](x) {
    return this[a(1259)].nodes[x];
  }
  [a(2025)]() {
    const x = a;
    return Object[x(1806)](this[x(1259)][x(1064)]);
  }
  [a(1520)](x, t) {
    const r = a;
    return this[r(1259)][r(2194)][r(284)](([e, s]) => e === x && s === t || e === t && s === x);
  }
  [a(896)](x, t) {
    const r = a;
    if (x === t) return [x];
    const e = this[r(584)](), s = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; s[r(1332)] > 0; ) {
      const { nodeId: i, path: c } = s[r(2281)]();
      if (n[r(441)](i)) continue;
      if (n[r(479)](i), i === t) return c;
      const u = e[r(1094)](i) || [];
      for (const d of u)
        !n[r(441)](d) && s[r(902)]({ nodeId: d, path: [...c, d] });
    }
    return null;
  }
  hasPath(x, t) {
    return this[a(896)](x, t) !== null;
  }
  getDefinition() {
    return { ...this[a(1259)] };
  }
}
const Ca = (o) => {
  let x;
  const t = /* @__PURE__ */ new Set(), r = (u, d) => {
    const l = K, f = typeof u == "function" ? u(x) : u;
    if (!Object.is(f, x)) {
      const b = x;
      x = d ?? (typeof f !== l(2844) || f === null) ? f : Object[l(2873)]({}, x, f), t[l(1953)]((h) => h(x, b));
    }
  }, e = () => x, s = () => c, n = (u) => {
    const d = K;
    return t[d(479)](u), () => t[d(882)](u);
  }, i = { setState: r, getState: e, getInitialState: s, subscribe: n }, c = x = o(r, e, i);
  return i;
}, Hn = (o) => o ? Ca(o) : Ca;
var Te;
(function(o) {
  const x = a;
  o[x(1410)] = (s) => {
  };
  function t(s) {
  }
  o[x(1626)] = t;
  function r(s) {
    throw new Error();
  }
  o[x(907)] = r, o.arrayToEnum = (s) => {
    const n = {};
    for (const i of s)
      n[i] = i;
    return n;
  }, o.getValidEnumValues = (s) => {
    const n = x, i = o[n(1408)](s)[n(1706)]((u) => typeof s[s[u]] !== n(1206)), c = {};
    for (const u of i)
      c[u] = s[u];
    return o[n(2900)](c);
  }, o[x(2900)] = (s) => {
    const n = x;
    return o.objectKeys(s)[n(2742)](function(i) {
      return s[i];
    });
  }, o[x(1408)] = typeof Object.keys == "function" ? (s) => Object[x(1806)](s) : (s) => {
    const n = x, i = [];
    for (const c in s)
      Object[n(1700)][n(1428)].call(s, c) && i[n(902)](c);
    return i;
  }, o[x(1036)] = (s, n) => {
    for (const i of s)
      if (n(i)) return i;
  }, o[x(2893)] = typeof Number.isInteger === x(1235) ? (s) => Number.isInteger(s) : (s) => typeof s === x(1206) && Number[x(1272)](s) && Math[x(1412)](s) === s;
  function e(s, n = x(2511)) {
    const i = x;
    return s[i(2742)]((c) => typeof c == "string" ? "'" + c + "'" : c)[i(2252)](n);
  }
  o[x(1654)] = e, o[x(708)] = (s, n) => typeof n === x(2611) ? n.toString() : n;
})(Te || (Te = {}));
var Ra;
(function(o) {
  const x = a;
  o[x(1933)] = (t, r) => ({ ...t, ...r });
})(Ra || (Ra = {}));
const ae = Te[a(1371)]([a(1653), "nan", a(1206), a(1605), a(1521), a(1001), "date", a(2611), "symbol", a(1235), a(2694), a(1589), a(2173), "object", a(1979), a(1114), a(698), a(1574), a(2742), a(1750)]), I0 = (o) => {
  const x = a;
  switch (typeof o) {
    case x(2694):
      return ae[x(2694)];
    case x(1653):
      return ae[x(1653)];
    case x(1206):
      return Number[x(2232)](o) ? ae[x(930)] : ae[x(1206)];
    case x(1001):
      return ae[x(1001)];
    case "function":
      return ae[x(1235)];
    case x(2611):
      return ae.bigint;
    case "symbol":
      return ae[x(2169)];
    case x(2844):
      return Array.isArray(o) ? ae.array : o === null ? ae.null : o[x(723)] && typeof o.then == "function" && o[x(1539)] && typeof o[x(1539)] === x(1235) ? ae.promise : typeof Map !== x(2694) && o instanceof Map ? ae[x(2742)] : typeof Set !== x(2694) && o instanceof Set ? ae[x(1750)] : typeof Date !== x(2694) && o instanceof Date ? ae[x(2714)] : ae[x(2844)];
    default:
      return ae[x(1979)];
  }
}, W = Te[a(1371)](["invalid_type", a(419), "custom", "invalid_union", a(807), "invalid_enum_value", a(1913), "invalid_arguments", a(1325), a(2728), a(2835), a(1487), a(2479), a(1645), a(1540), "not_finite"]);
class k0 extends Error {
  get [a(638)]() {
    return this[a(2196)];
  }
  constructor(x) {
    const t = a;
    super(), this[t(2196)] = [], this.addIssue = (e) => {
      const s = t;
      this[s(2196)] = [...this[s(2196)], e];
    }, this[t(786)] = (e = []) => {
      const s = t;
      this[s(2196)] = [...this[s(2196)], ...e];
    };
    const r = new.target.prototype;
    Object[t(2580)] ? Object[t(2580)](this, r) : this[t(2527)] = r, this[t(2481)] = t(526), this.issues = x;
  }
  format(x) {
    const t = x || function(s) {
      return s.message;
    }, r = { _errors: [] }, e = (s) => {
      const n = K;
      for (const i of s[n(2196)])
        if (i[n(586)] === "invalid_union") i.unionErrors[n(2742)](e);
        else if (i.code === n(1325)) e(i[n(2607)]);
        else if (i[n(586)] === n(909)) e(i.argumentsError);
        else if (i[n(2475)][n(1332)] === 0) r[n(1875)].push(t(i));
        else {
          let c = r, u = 0;
          for (; u < i[n(2475)][n(1332)]; ) {
            const d = i[n(2475)][u];
            u === i.path[n(1332)] - 1 ? (c[d] = c[d] || { _errors: [] }, c[d][n(1875)][n(902)](t(i))) : c[d] = c[d] || { _errors: [] }, c = c[d], u++;
          }
        }
    };
    return e(this), r;
  }
  static assert(x) {
    if (!(x instanceof k0)) throw new Error("Not a ZodError: " + x);
  }
  [a(2032)]() {
    return this[a(615)];
  }
  get message() {
    const x = a;
    return JSON[x(306)](this[x(2196)], Te[x(708)], 2);
  }
  get [a(269)]() {
    const x = a;
    return this[x(2196)][x(1332)] === 0;
  }
  flatten(x = (t) => t.message) {
    const t = a, r = {}, e = [];
    for (const s of this[t(2196)])
      if (s.path[t(1332)] > 0) {
        const n = s.path[0];
        r[n] = r[n] || [], r[n][t(902)](x(s));
      } else e[t(902)](x(s));
    return { formErrors: e, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
k0[a(2469)] = (o) => new k0(o);
const Ut = (o, x) => {
  const t = a;
  let r;
  switch (o[t(586)]) {
    case W[t(2127)]:
      o[t(1192)] === ae[t(2694)] ? r = t(1443) : r = t(2874) + o[t(1815)] + t(260) + o[t(1192)];
      break;
    case W[t(419)]:
      r = "Invalid literal value, expected " + JSON[t(306)](o.expected, Te[t(708)]);
      break;
    case W[t(1913)]:
      r = t(1073) + Te[t(1654)](o[t(1806)], ", ");
      break;
    case W[t(1243)]:
      r = t(2888);
      break;
    case W[t(807)]:
      r = t(2488) + Te[t(1654)](o[t(961)]);
      break;
    case W[t(1593)]:
      r = t(1819) + Te[t(1654)](o[t(961)]) + t(1673) + o.received + "'";
      break;
    case W[t(909)]:
      r = "Invalid function arguments";
      break;
    case W[t(1325)]:
      r = t(314);
      break;
    case W.invalid_date:
      r = t(2400);
      break;
    case W[t(2835)]:
      typeof o.validation == "object" ? t(2798) in o[t(519)] ? (r = t(1312) + o[t(519)][t(2798)] + '"', typeof o[t(519)][t(534)] == "number" && (r = r + " at one or more positions greater than or equal to " + o.validation[t(534)])) : "startsWith" in o.validation ? r = t(642) + o[t(519)].startsWith + '"' : t(2891) in o[t(519)] ? r = t(751) + o[t(519)][t(2891)] + '"' : Te[t(907)](o[t(519)]) : o.validation !== t(2830) ? r = t(1017) + o[t(519)] : r = "Invalid";
      break;
    case W[t(1487)]:
      o[t(190)] === t(2173) ? r = t(457) + (o[t(300)] ? "exactly" : o[t(360)] ? t(1742) : t(191)) + " " + o[t(962)] + t(1478) : o[t(190)] === t(1653) ? r = t(2753) + (o[t(300)] ? t(855) : o[t(360)] ? t(1742) : t(1068)) + " " + o.minimum + t(1864) : o[t(190)] === "number" ? r = "Number must be " + (o[t(300)] ? t(2166) : o[t(360)] ? t(2575) : t(1477)) + o[t(962)] : o.type === t(2611) ? r = t(1267) + (o[t(300)] ? "exactly equal to " : o[t(360)] ? t(2575) : t(1477)) + o.minimum : o.type === "date" ? r = t(1187) + (o[t(300)] ? t(2166) : o.inclusive ? "greater than or equal to " : "greater than ") + new Date(Number(o[t(962)])) : r = t(2888);
      break;
    case W[t(2479)]:
      o[t(190)] === t(2173) ? r = "Array must contain " + (o[t(300)] ? t(855) : o[t(360)] ? t(602) : "less than") + " " + o[t(248)] + t(1478) : o[t(190)] === t(1653) ? r = t(2753) + (o[t(300)] ? "exactly" : o[t(360)] ? t(602) : t(2739)) + " " + o[t(248)] + t(1864) : o.type === t(1206) ? r = t(1267) + (o[t(300)] ? t(855) : o[t(360)] ? t(539) : t(1678)) + " " + o[t(248)] : o.type === t(2611) ? r = t(490) + (o[t(300)] ? t(855) : o[t(360)] ? t(539) : "less than") + " " + o[t(248)] : o[t(190)] === t(2714) ? r = t(1187) + (o.exact ? "exactly" : o[t(360)] ? "smaller than or equal to" : t(2e3)) + " " + new Date(Number(o.maximum)) : r = t(2888);
      break;
    case W[t(1893)]:
      r = t(2888);
      break;
    case W.invalid_intersection_types:
      r = t(1752);
      break;
    case W.not_multiple_of:
      r = t(1727) + o[t(749)];
      break;
    case W.not_finite:
      r = t(731);
      break;
    default:
      r = x.defaultError, Te[t(907)](o);
  }
  return { message: r };
};
let zn = Ut;
function Vn() {
  return zn;
}
const Bn = (o) => {
  const x = a, { data: t, path: r, errorMaps: e, issueData: s } = o, n = [...r, ...s[x(2475)] || []], i = { ...s, path: n };
  if (s[x(615)] !== void 0) return { ...s, path: n, message: s[x(615)] };
  let c = "";
  const u = e.filter((d) => !!d)[x(2103)]()[x(177)]();
  for (const d of u)
    c = d(i, { data: t, defaultError: c })[x(615)];
  return { ...s, path: n, message: c };
};
function Y(o, x) {
  const t = a, r = Vn(), e = Bn({ issueData: x, data: o[t(2887)], path: o[t(2475)], errorMaps: [o.common[t(305)], o[t(1078)], r, r === Ut ? void 0 : Ut][t(1706)]((s) => !!s) });
  o.common.issues[t(902)](e);
}
class e0 {
  constructor() {
    const x = a;
    this[x(998)] = "valid";
  }
  [a(973)]() {
    const x = a;
    this[x(998)] === x(295) && (this[x(998)] = x(973));
  }
  [a(2693)]() {
    const x = a;
    this[x(998)] !== x(2234) && (this.value = x(2234));
  }
  static mergeArray(x, t) {
    const r = a, e = [];
    for (const s of t) {
      if (s.status === r(2234)) return he;
      s[r(2745)] === "dirty" && x.dirty(), e[r(902)](s[r(998)]);
    }
    return { status: x[r(998)], value: e };
  }
  static async [a(1070)](x, t) {
    const r = a, e = [];
    for (const s of t) {
      const n = await s.key, i = await s.value;
      e[r(902)]({ key: n, value: i });
    }
    return e0[r(439)](x, e);
  }
  static [a(439)](x, t) {
    const r = a, e = {};
    for (const s of t) {
      const { key: n, value: i } = s;
      if (n[r(2745)] === r(2234) || i[r(2745)] === r(2234)) return he;
      n[r(2745)] === r(973) && x[r(973)](), i.status === r(973) && x[r(973)](), n[r(998)] !== "__proto__" && (typeof i[r(998)] < "u" || s[r(967)]) && (e[n[r(998)]] = i.value);
    }
    return { status: x.value, value: e };
  }
}
const he = Object[a(1230)]({ status: a(2234) }), Q0 = (o) => ({ status: a(973), value: o }), a0 = (o) => ({ status: a(295), value: o }), Fa = (o) => o[a(2745)] === "aborted", Na = (o) => o[a(2745)] === a(973), V0 = (o) => o[a(2745)] === a(295), bx = (o) => typeof Promise !== a(2694) && o instanceof Promise;
var re;
(function(o) {
  const x = a;
  o[x(692)] = (t) => typeof t == "string" ? { message: t } : t || {}, o.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t[x(615)];
})(re || (re = {}));
class p0 {
  constructor(x, t, r, e) {
    const s = a;
    this[s(1718)] = [], this[s(1361)] = x, this.data = t, this[s(1087)] = r, this[s(2890)] = e;
  }
  get [a(2475)]() {
    const x = a;
    return !this[x(1718)][x(1332)] && (Array.isArray(this[x(2890)]) ? this[x(1718)][x(902)](...this[x(1087)], ...this._key) : this[x(1718)][x(902)](...this[x(1087)], this[x(2890)])), this[x(1718)];
  }
}
const Ta = (o, x) => {
  const t = a;
  if (V0(x)) return { success: !0, data: x[t(998)] };
  if (!o[t(1249)][t(2196)][t(1332)]) throw new Error(t(1046));
  return { success: !1, get error() {
    const r = t;
    if (this[r(2862)]) return this[r(2862)];
    const e = new k0(o[r(1249)].issues);
    return this[r(2862)] = e, this._error;
  } };
};
function ve(o) {
  if (!o) return {};
  const { errorMap: x, invalid_type_error: t, required_error: r, description: e } = o;
  if (x && (t || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return x ? { errorMap: x, description: e } : { errorMap: (n, i) => {
    const c = K, { message: u } = o;
    return n.code === c(1593) ? { message: u ?? i[c(2660)] } : typeof i[c(2887)] > "u" ? { message: u ?? r ?? i[c(2660)] } : n[c(586)] !== c(2127) ? { message: i[c(2660)] } : { message: u ?? t ?? i.defaultError };
  }, description: e };
}
class Fe {
  get [a(1120)]() {
    const x = a;
    return this[x(880)][x(1120)];
  }
  [a(2571)](x) {
    return I0(x[a(2887)]);
  }
  [a(2407)](x, t) {
    const r = a;
    return t || { common: x[r(1361)][r(1249)], data: x.data, parsedType: I0(x.data), schemaErrorMap: this[r(880)][r(837)], path: x[r(2475)], parent: x[r(1361)] };
  }
  [a(1050)](x) {
    const t = a;
    return { status: new e0(), ctx: { common: x[t(1361)][t(1249)], data: x[t(2887)], parsedType: I0(x[t(2887)]), schemaErrorMap: this._def[t(837)], path: x[t(2475)], parent: x[t(1361)] } };
  }
  [a(447)](x) {
    const t = a, r = this[t(1908)](x);
    if (bx(r)) throw new Error(t(473));
    return r;
  }
  _parseAsync(x) {
    const t = a, r = this[t(1908)](x);
    return Promise[t(1635)](r);
  }
  [a(429)](x, t) {
    const r = a, e = this[r(2695)](x, t);
    if (e[r(2072)]) return e[r(2887)];
    throw e.error;
  }
  [a(2695)](x, t) {
    const r = a, e = { common: { issues: [], async: (t == null ? void 0 : t[r(418)]) ?? !1, contextualErrorMap: t == null ? void 0 : t[r(837)] }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this[r(880)].errorMap, parent: null, data: x, parsedType: I0(x) }, s = this[r(447)]({ data: x, path: e[r(2475)], parent: e });
    return Ta(e, s);
  }
  [a(2253)](x) {
    var e, s;
    const t = a, r = { common: { issues: [], async: !!this["~standard"][t(418)] }, path: [], schemaErrorMap: this[t(880)].errorMap, parent: null, data: x, parsedType: I0(x) };
    if (!this[t(741)].async) try {
      const n = this[t(447)]({ data: x, path: [], parent: r });
      return V0(n) ? { value: n.value } : { issues: r.common[t(2196)] };
    } catch (n) {
      (s = (e = n == null ? void 0 : n[t(615)]) == null ? void 0 : e[t(2522)]()) != null && s[t(2798)](t(2074)) && (this[t(741)][t(418)] = !0), r[t(1249)] = { issues: [], async: !0 };
    }
    return this[t(1810)]({ data: x, path: [], parent: r })[t(723)]((n) => V0(n) ? { value: n[t(998)] } : { issues: r[t(1249)].issues });
  }
  async [a(2572)](x, t) {
    const r = a, e = await this[r(1638)](x, t);
    if (e.success) return e.data;
    throw e[r(2265)];
  }
  async [a(1638)](x, t) {
    const r = a, e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t.errorMap, async: !0 }, path: (t == null ? void 0 : t[r(2475)]) || [], schemaErrorMap: this._def[r(837)], parent: null, data: x, parsedType: I0(x) }, s = this._parse({ data: x, path: e[r(2475)], parent: e }), n = await (bx(s) ? s : Promise[r(1635)](s));
    return Ta(e, n);
  }
  refine(x, t) {
    const r = (e) => {
      const s = K;
      return typeof t == "string" || typeof t === s(2694) ? { message: t } : typeof t === s(1235) ? t(e) : t;
    };
    return this._refinement((e, s) => {
      const n = K, i = x(e), c = () => s[n(704)]({ code: W[n(1893)], ...r(e) });
      return typeof Promise < "u" && i instanceof Promise ? i[n(723)]((u) => u ? !0 : (c(), !1)) : i ? !0 : (c(), !1);
    });
  }
  refinement(x, t) {
    const r = a;
    return this[r(2255)]((e, s) => {
      const n = r;
      return x(e) ? !0 : (s.addIssue(typeof t === n(1235) ? t(e, s) : t), !1);
    });
  }
  [a(2255)](x) {
    const t = a;
    return new A0({ schema: this, typeName: pe.ZodEffects, effect: { type: t(1310), refinement: x } });
  }
  [a(2387)](x) {
    return this._refinement(x);
  }
  constructor(x) {
    const t = a;
    this[t(1475)] = this[t(1638)], this[t(880)] = x, this[t(429)] = this[t(429)].bind(this), this[t(2695)] = this[t(2695)][t(591)](this), this[t(2572)] = this[t(2572)][t(591)](this), this[t(1638)] = this[t(1638)][t(591)](this), this[t(1475)] = this.spa[t(591)](this), this.refine = this[t(716)].bind(this), this[t(1310)] = this[t(1310)][t(591)](this), this.superRefine = this[t(2387)][t(591)](this), this[t(2033)] = this[t(2033)][t(591)](this), this[t(2101)] = this[t(2101)][t(591)](this), this[t(1853)] = this[t(1853)][t(591)](this), this.array = this.array.bind(this), this.promise = this.promise[t(591)](this), this.or = this.or[t(591)](this), this[t(1165)] = this[t(1165)].bind(this), this[t(770)] = this[t(770)][t(591)](this), this[t(1413)] = this[t(1413)][t(591)](this), this[t(2222)] = this[t(2222)][t(591)](this), this.catch = this[t(1539)][t(591)](this), this[t(1657)] = this[t(1657)].bind(this), this[t(626)] = this[t(626)][t(591)](this), this.readonly = this[t(2155)][t(591)](this), this.isNullable = this[t(2818)].bind(this), this[t(2809)] = this[t(2809)].bind(this), this[t(741)] = { version: 1, vendor: "zod", validate: (r) => this[t(2253)](r) };
  }
  [a(2033)]() {
    return w0[a(2469)](this, this._def);
  }
  [a(2101)]() {
    const x = a;
    return j0.create(this, this[x(880)]);
  }
  [a(1853)]() {
    return this[a(2101)]().optional();
  }
  [a(2173)]() {
    return h0[a(2469)](this);
  }
  [a(1114)]() {
    const x = a;
    return kx.create(this, this[x(880)]);
  }
  or(x) {
    return yx[a(2469)]([this, x], this._def);
  }
  [a(1165)](x) {
    const t = a;
    return vx.create(this, x, this[t(880)]);
  }
  [a(770)](x) {
    const t = a;
    return new A0({ ...ve(this[t(880)]), schema: this, typeName: pe[t(2787)], effect: { type: t(770), transform: x } });
  }
  [a(2222)](x) {
    const t = a, r = typeof x === t(1235) ? x : () => x;
    return new Px({ ...ve(this._def), innerType: this, defaultValue: r, typeName: pe[t(2109)] });
  }
  brand() {
    const x = a;
    return new Hs({ typeName: pe[x(720)], type: this, ...ve(this[x(880)]) });
  }
  catch(x) {
    const t = a, r = typeof x === t(1235) ? x : () => x;
    return new Ex({ ...ve(this._def), innerType: this, catchValue: r, typeName: pe[t(722)] });
  }
  [a(1657)](x) {
    const t = a, r = this.constructor;
    return new r({ ...this[t(880)], description: x });
  }
  [a(626)](x) {
    return oa[a(2469)](this, x);
  }
  readonly() {
    return Ix[a(2469)](this);
  }
  [a(2809)]() {
    const x = a;
    return this.safeParse(void 0)[x(2072)];
  }
  isNullable() {
    const x = a;
    return this[x(2695)](null)[x(2072)];
  }
}
const Wn = /^c[^\s-]{8,}$/i, Zn = /^[0-9a-z]+$/, Kn = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Gn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Jn = /^[a-z0-9_-]{21}$/i, Qn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Xn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Yn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, eo = a(543);
let $x;
const xo = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, to = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ao = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ro = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, so = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, no = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ls = a(2836), oo = new RegExp("^" + Ls + "$");
function $s(o) {
  const x = a;
  let t = "[0-5]\\d";
  o[x(1931)] ? t = t + "\\.\\d{" + o.precision + "}" : o[x(1931)] == null && (t = t + x(206));
  const r = o.precision ? "+" : "?";
  return "([01]\\d|2[0-3]):[0-5]\\d(:" + t + ")" + r;
}
function io(o) {
  return new RegExp("^" + $s(o) + "$");
}
function co(o) {
  const x = a;
  let t = Ls + "T" + $s(o);
  const r = [];
  return r[x(902)](o[x(1488)] ? "Z?" : "Z"), o[x(1229)] && r[x(902)]("([+-]\\d{2}:?\\d{2})"), t = t + "(" + r[x(2252)]("|") + ")", new RegExp("^" + t + "$");
}
function uo(o, x) {
  const t = a;
  return !!((x === "v4" || !x) && xo[t(1055)](o) || (x === "v6" || !x) && ao[t(1055)](o));
}
function lo(o, x) {
  const t = a;
  if (!Qn.test(o)) return !1;
  try {
    const [r] = o[t(585)](".");
    if (!r) return !1;
    const e = r[t(784)](/-/g, "+").replace(/_/g, "/")[t(1149)](r.length + (4 - r[t(1332)] % 4) % 4, "="), s = JSON[t(429)](atob(e));
    return !(typeof s != "object" || s === null || t(2092) in s && (s == null ? void 0 : s[t(2092)]) !== "JWT" || !s.alg || x && s[t(2159)] !== x);
  } catch {
    return !1;
  }
}
function fo(o, x) {
  const t = a;
  return !!((x === "v4" || !x) && to[t(1055)](o) || (x === "v6" || !x) && ro[t(1055)](o));
}
class v0 extends Fe {
  _parse(x) {
    const t = a;
    if (this[t(880)][t(2791)] && (x.data = String(x[t(2887)])), this._getType(x) !== ae[t(1653)]) {
      const n = this[t(2407)](x);
      return Y(n, { code: W[t(2127)], expected: ae[t(1653)], received: n[t(2217)] }), he;
    }
    const e = new e0();
    let s;
    for (const n of this[t(880)][t(1043)])
      if (n[t(1960)] === t(1414)) x[t(2887)][t(1332)] < n.value && (s = this[t(2407)](x, s), Y(s, { code: W[t(1487)], minimum: n[t(998)], type: t(1653), inclusive: !0, exact: !1, message: n[t(615)] }), e[t(973)]());
      else if (n[t(1960)] === "max") x[t(2887)][t(1332)] > n[t(998)] && (s = this[t(2407)](x, s), Y(s, { code: W[t(2479)], maximum: n[t(998)], type: t(1653), inclusive: !0, exact: !1, message: n[t(615)] }), e[t(973)]());
      else if (n[t(1960)] === t(1332)) {
        const i = x[t(2887)][t(1332)] > n[t(998)], c = x[t(2887)].length < n[t(998)];
        (i || c) && (s = this[t(2407)](x, s), i ? Y(s, { code: W[t(2479)], maximum: n[t(998)], type: t(1653), inclusive: !0, exact: !0, message: n.message }) : c && Y(s, { code: W[t(1487)], minimum: n[t(998)], type: t(1653), inclusive: !0, exact: !0, message: n[t(615)] }), e.dirty());
      } else if (n[t(1960)] === t(712)) !Yn[t(1055)](x[t(2887)]) && (s = this[t(2407)](x, s), Y(s, { validation: t(712), code: W[t(2835)], message: n[t(615)] }), e.dirty());
      else if (n[t(1960)] === "emoji") !$x && ($x = new RegExp(eo, "u")), !$x.test(x[t(2887)]) && (s = this[t(2407)](x, s), Y(s, { validation: "emoji", code: W[t(2835)], message: n.message }), e[t(973)]());
      else if (n.kind === t(2491)) !Gn.test(x[t(2887)]) && (s = this[t(2407)](x, s), Y(s, { validation: t(2491), code: W[t(2835)], message: n.message }), e[t(973)]());
      else if (n[t(1960)] === t(2439)) !Jn.test(x.data) && (s = this[t(2407)](x, s), Y(s, { validation: t(2439), code: W[t(2835)], message: n[t(615)] }), e.dirty());
      else if (n[t(1960)] === "cuid") !Wn[t(1055)](x[t(2887)]) && (s = this[t(2407)](x, s), Y(s, { validation: "cuid", code: W[t(2835)], message: n[t(615)] }), e[t(973)]());
      else if (n[t(1960)] === "cuid2") !Zn.test(x[t(2887)]) && (s = this[t(2407)](x, s), Y(s, { validation: t(184), code: W[t(2835)], message: n[t(615)] }), e[t(973)]());
      else if (n[t(1960)] === "ulid") !Kn.test(x[t(2887)]) && (s = this._getOrReturnCtx(x, s), Y(s, { validation: t(1152), code: W[t(2835)], message: n[t(615)] }), e[t(973)]());
      else if (n.kind === t(1158)) try {
        new URL(x[t(2887)]);
      } catch {
        s = this[t(2407)](x, s), Y(s, { validation: t(1158), code: W.invalid_string, message: n[t(615)] }), e[t(973)]();
      }
      else
        n.kind === t(2830) ? (n[t(2830)][t(2719)] = 0, !n[t(2830)][t(1055)](x[t(2887)]) && (s = this[t(2407)](x, s), Y(s, { validation: t(2830), code: W[t(2835)], message: n.message }), e[t(973)]())) : n[t(1960)] === t(436) ? x[t(2887)] = x[t(2887)][t(436)]() : n[t(1960)] === t(2798) ? !x[t(2887)][t(2798)](n[t(998)], n[t(534)]) && (s = this._getOrReturnCtx(x, s), Y(s, { code: W[t(2835)], validation: { includes: n[t(998)], position: n[t(534)] }, message: n[t(615)] }), e[t(973)]()) : n[t(1960)] === t(2522) ? x[t(2887)] = x[t(2887)][t(2522)]() : n[t(1960)] === t(2132) ? x[t(2887)] = x[t(2887)][t(2132)]() : n[t(1960)] === "startsWith" ? !x[t(2887)][t(533)](n[t(998)]) && (s = this[t(2407)](x, s), Y(s, { code: W[t(2835)], validation: { startsWith: n[t(998)] }, message: n[t(615)] }), e[t(973)]()) : n[t(1960)] === t(2891) ? !x[t(2887)][t(2891)](n[t(998)]) && (s = this[t(2407)](x, s), Y(s, { code: W[t(2835)], validation: { endsWith: n[t(998)] }, message: n[t(615)] }), e[t(973)]()) : n[t(1960)] === t(2094) ? !co(n)[t(1055)](x[t(2887)]) && (s = this._getOrReturnCtx(x, s), Y(s, { code: W[t(2835)], validation: "datetime", message: n[t(615)] }), e.dirty()) : n[t(1960)] === t(2714) ? !oo[t(1055)](x[t(2887)]) && (s = this[t(2407)](x, s), Y(s, { code: W[t(2835)], validation: t(2714), message: n[t(615)] }), e[t(973)]()) : n[t(1960)] === "time" ? !io(n).test(x[t(2887)]) && (s = this._getOrReturnCtx(x, s), Y(s, { code: W[t(2835)], validation: t(706), message: n[t(615)] }), e[t(973)]()) : n[t(1960)] === "duration" ? !Xn[t(1055)](x[t(2887)]) && (s = this[t(2407)](x, s), Y(s, { validation: t(2351), code: W[t(2835)], message: n[t(615)] }), e[t(973)]()) : n[t(1960)] === "ip" ? !uo(x[t(2887)], n.version) && (s = this[t(2407)](x, s), Y(s, { validation: "ip", code: W[t(2835)], message: n.message }), e[t(973)]()) : n.kind === t(1447) ? !lo(x[t(2887)], n.alg) && (s = this[t(2407)](x, s), Y(s, { validation: t(1447), code: W[t(2835)], message: n[t(615)] }), e[t(973)]()) : n[t(1960)] === "cidr" ? !fo(x[t(2887)], n.version) && (s = this[t(2407)](x, s), Y(s, { validation: "cidr", code: W[t(2835)], message: n.message }), e.dirty()) : n[t(1960)] === t(1667) ? !so.test(x[t(2887)]) && (s = this[t(2407)](x, s), Y(s, { validation: t(1667), code: W[t(2835)], message: n[t(615)] }), e.dirty()) : n[t(1960)] === "base64url" ? !no.test(x[t(2887)]) && (s = this[t(2407)](x, s), Y(s, { validation: t(199), code: W[t(2835)], message: n[t(615)] }), e[t(973)]()) : Te[t(907)](n);
    return { status: e[t(998)], value: x[t(2887)] };
  }
  [a(2210)](x, t, r) {
    const e = a;
    return this.refinement((s) => x[e(1055)](s), { validation: t, code: W[e(2835)], ...re[e(692)](r) });
  }
  [a(571)](x) {
    const t = a;
    return new v0({ ...this._def, checks: [...this[t(880)][t(1043)], x] });
  }
  email(x) {
    const t = a;
    return this._addCheck({ kind: t(712), ...re[t(692)](x) });
  }
  [a(1158)](x) {
    const t = a;
    return this._addCheck({ kind: t(1158), ...re.errToObj(x) });
  }
  emoji(x) {
    const t = a;
    return this[t(571)]({ kind: t(162), ...re[t(692)](x) });
  }
  [a(2491)](x) {
    const t = a;
    return this[t(571)]({ kind: t(2491), ...re[t(692)](x) });
  }
  [a(2439)](x) {
    const t = a;
    return this[t(571)]({ kind: t(2439), ...re[t(692)](x) });
  }
  [a(747)](x) {
    const t = a;
    return this[t(571)]({ kind: t(747), ...re[t(692)](x) });
  }
  [a(184)](x) {
    const t = a;
    return this[t(571)]({ kind: t(184), ...re[t(692)](x) });
  }
  [a(1152)](x) {
    const t = a;
    return this[t(571)]({ kind: t(1152), ...re[t(692)](x) });
  }
  base64(x) {
    const t = a;
    return this[t(571)]({ kind: t(1667), ...re[t(692)](x) });
  }
  [a(199)](x) {
    const t = a;
    return this[t(571)]({ kind: t(199), ...re.errToObj(x) });
  }
  [a(1447)](x) {
    const t = a;
    return this._addCheck({ kind: t(1447), ...re[t(692)](x) });
  }
  ip(x) {
    const t = a;
    return this[t(571)]({ kind: "ip", ...re[t(692)](x) });
  }
  [a(2470)](x) {
    const t = a;
    return this[t(571)]({ kind: t(2470), ...re[t(692)](x) });
  }
  datetime(x) {
    const t = a;
    return typeof x === t(1653) ? this._addCheck({ kind: t(2094), precision: null, offset: !1, local: !1, message: x }) : this[t(571)]({ kind: "datetime", precision: typeof (x == null ? void 0 : x[t(1931)]) === t(2694) ? null : x == null ? void 0 : x[t(1931)], offset: (x == null ? void 0 : x[t(1229)]) ?? !1, local: (x == null ? void 0 : x.local) ?? !1, ...re[t(692)](x == null ? void 0 : x[t(615)]) });
  }
  [a(2714)](x) {
    const t = a;
    return this[t(571)]({ kind: t(2714), message: x });
  }
  [a(706)](x) {
    const t = a;
    return typeof x === t(1653) ? this[t(571)]({ kind: t(706), precision: null, message: x }) : this[t(571)]({ kind: t(706), precision: typeof (x == null ? void 0 : x.precision) > "u" ? null : x == null ? void 0 : x[t(1931)], ...re[t(692)](x == null ? void 0 : x[t(615)]) });
  }
  [a(2351)](x) {
    const t = a;
    return this[t(571)]({ kind: "duration", ...re[t(692)](x) });
  }
  [a(2830)](x, t) {
    const r = a;
    return this[r(571)]({ kind: r(2830), regex: x, ...re[r(692)](t) });
  }
  includes(x, t) {
    const r = a;
    return this[r(571)]({ kind: "includes", value: x, position: t == null ? void 0 : t[r(534)], ...re[r(692)](t == null ? void 0 : t[r(615)]) });
  }
  [a(533)](x, t) {
    return this._addCheck({ kind: "startsWith", value: x, ...re.errToObj(t) });
  }
  [a(2891)](x, t) {
    const r = a;
    return this[r(571)]({ kind: r(2891), value: x, ...re[r(692)](t) });
  }
  [a(1414)](x, t) {
    const r = a;
    return this[r(571)]({ kind: r(1414), value: x, ...re[r(692)](t) });
  }
  [a(718)](x, t) {
    const r = a;
    return this[r(571)]({ kind: r(718), value: x, ...re.errToObj(t) });
  }
  [a(1332)](x, t) {
    const r = a;
    return this._addCheck({ kind: r(1332), value: x, ...re[r(692)](t) });
  }
  [a(1453)](x) {
    const t = a;
    return this[t(1414)](1, re[t(692)](x));
  }
  trim() {
    const x = a;
    return new v0({ ...this._def, checks: [...this[x(880)][x(1043)], { kind: x(436) }] });
  }
  [a(2522)]() {
    const x = a;
    return new v0({ ...this[x(880)], checks: [...this[x(880)][x(1043)], { kind: x(2522) }] });
  }
  [a(2132)]() {
    const x = a;
    return new v0({ ...this[x(880)], checks: [...this[x(880)][x(1043)], { kind: x(2132) }] });
  }
  get [a(942)]() {
    const x = a;
    return !!this[x(880)][x(1043)][x(1036)]((t) => t[x(1960)] === x(2094));
  }
  get [a(1027)]() {
    const x = a;
    return !!this[x(880)][x(1043)][x(1036)]((t) => t.kind === "date");
  }
  get isTime() {
    const x = a;
    return !!this[x(880)][x(1043)].find((t) => t.kind === x(706));
  }
  get [a(1322)]() {
    const x = a;
    return !!this[x(880)][x(1043)][x(1036)]((t) => t[x(1960)] === x(2351));
  }
  get [a(1188)]() {
    const x = a;
    return !!this[x(880)][x(1043)][x(1036)]((t) => t.kind === "email");
  }
  get [a(183)]() {
    const x = a;
    return !!this[x(880)].checks[x(1036)]((t) => t[x(1960)] === "url");
  }
  get [a(2310)]() {
    const x = a;
    return !!this[x(880)][x(1043)][x(1036)]((t) => t[x(1960)] === x(162));
  }
  get [a(1513)]() {
    const x = a;
    return !!this[x(880)][x(1043)][x(1036)]((t) => t.kind === x(2491));
  }
  get [a(891)]() {
    const x = a;
    return !!this[x(880)][x(1043)][x(1036)]((t) => t[x(1960)] === x(2439));
  }
  get [a(1417)]() {
    const x = a;
    return !!this[x(880)][x(1043)][x(1036)]((t) => t[x(1960)] === x(747));
  }
  get [a(2117)]() {
    const x = a;
    return !!this[x(880)][x(1043)].find((t) => t.kind === x(184));
  }
  get [a(2236)]() {
    const x = a;
    return !!this._def[x(1043)][x(1036)]((t) => t[x(1960)] === "ulid");
  }
  get [a(509)]() {
    const x = a;
    return !!this._def[x(1043)].find((t) => t.kind === "ip");
  }
  get [a(2355)]() {
    const x = a;
    return !!this[x(880)][x(1043)][x(1036)]((t) => t[x(1960)] === x(2470));
  }
  get [a(228)]() {
    const x = a;
    return !!this[x(880)][x(1043)][x(1036)]((t) => t.kind === x(1667));
  }
  get [a(2306)]() {
    const x = a;
    return !!this[x(880)].checks[x(1036)]((t) => t[x(1960)] === "base64url");
  }
  get [a(1610)]() {
    const x = a;
    let t = null;
    for (const r of this[x(880)][x(1043)])
      r[x(1960)] === x(1414) && (t === null || r[x(998)] > t) && (t = r[x(998)]);
    return t;
  }
  get [a(2213)]() {
    const x = a;
    let t = null;
    for (const r of this._def[x(1043)])
      r[x(1960)] === x(718) && (t === null || r.value < t) && (t = r[x(998)]);
    return t;
  }
}
v0.create = (o) => {
  const x = a;
  return new v0({ checks: [], typeName: pe[x(1054)], coerce: (o == null ? void 0 : o[x(2791)]) ?? !1, ...ve(o) });
};
function ho(o, x) {
  const t = a, r = (o[t(2032)]()[t(585)](".")[1] || "").length, e = (x[t(2032)]()[t(585)](".")[1] || "").length, s = r > e ? r : e, n = Number[t(505)](o[t(627)](s)[t(784)](".", "")), i = Number[t(505)](x[t(627)](s)[t(784)](".", ""));
  return n % i / 10 ** s;
}
class B0 extends Fe {
  constructor() {
    const x = a;
    super(...arguments), this.min = this[x(2838)], this[x(718)] = this.lte, this.step = this[x(749)];
  }
  [a(1908)](x) {
    const t = a;
    if (this[t(880)][t(2791)] && (x[t(2887)] = Number(x[t(2887)])), this[t(2571)](x) !== ae[t(1206)]) {
      const n = this[t(2407)](x);
      return Y(n, { code: W.invalid_type, expected: ae.number, received: n.parsedType }), he;
    }
    let e;
    const s = new e0();
    for (const n of this._def[t(1043)])
      n[t(1960)] === t(761) ? !Te[t(2893)](x[t(2887)]) && (e = this[t(2407)](x, e), Y(e, { code: W.invalid_type, expected: t(1605), received: t(1521), message: n[t(615)] }), s.dirty()) : n.kind === t(1414) ? (n.inclusive ? x[t(2887)] < n.value : x[t(2887)] <= n[t(998)]) && (e = this[t(2407)](x, e), Y(e, { code: W[t(1487)], minimum: n[t(998)], type: t(1206), inclusive: n[t(360)], exact: !1, message: n[t(615)] }), s[t(973)]()) : n.kind === "max" ? (n[t(360)] ? x.data > n[t(998)] : x.data >= n.value) && (e = this[t(2407)](x, e), Y(e, { code: W[t(2479)], maximum: n[t(998)], type: t(1206), inclusive: n[t(360)], exact: !1, message: n[t(615)] }), s.dirty()) : n.kind === "multipleOf" ? ho(x[t(2887)], n[t(998)]) !== 0 && (e = this[t(2407)](x, e), Y(e, { code: W[t(1540)], multipleOf: n.value, message: n[t(615)] }), s[t(973)]()) : n.kind === t(1685) ? !Number.isFinite(x[t(2887)]) && (e = this[t(2407)](x, e), Y(e, { code: W[t(2088)], message: n[t(615)] }), s.dirty()) : Te[t(907)](n);
    return { status: s[t(998)], value: x[t(2887)] };
  }
  gte(x, t) {
    const r = a;
    return this.setLimit(r(1414), x, !0, re[r(2032)](t));
  }
  gt(x, t) {
    const r = a;
    return this[r(2318)]("min", x, !1, re[r(2032)](t));
  }
  [a(2269)](x, t) {
    const r = a;
    return this[r(2318)](r(718), x, !0, re.toString(t));
  }
  lt(x, t) {
    const r = a;
    return this[r(2318)](r(718), x, !1, re[r(2032)](t));
  }
  [a(2318)](x, t, r, e) {
    const s = a;
    return new B0({ ...this[s(880)], checks: [...this[s(880)].checks, { kind: x, value: t, inclusive: r, message: re[s(2032)](e) }] });
  }
  [a(571)](x) {
    const t = a;
    return new B0({ ...this[t(880)], checks: [...this[t(880)][t(1043)], x] });
  }
  [a(761)](x) {
    const t = a;
    return this[t(571)]({ kind: t(761), message: re[t(2032)](x) });
  }
  [a(194)](x) {
    const t = a;
    return this[t(571)]({ kind: t(1414), value: 0, inclusive: !1, message: re[t(2032)](x) });
  }
  [a(1757)](x) {
    const t = a;
    return this[t(571)]({ kind: t(718), value: 0, inclusive: !1, message: re[t(2032)](x) });
  }
  [a(1664)](x) {
    const t = a;
    return this._addCheck({ kind: t(718), value: 0, inclusive: !0, message: re[t(2032)](x) });
  }
  [a(2586)](x) {
    const t = a;
    return this[t(571)]({ kind: t(1414), value: 0, inclusive: !0, message: re.toString(x) });
  }
  [a(749)](x, t) {
    const r = a;
    return this[r(571)]({ kind: r(749), value: x, message: re.toString(t) });
  }
  [a(1685)](x) {
    const t = a;
    return this[t(571)]({ kind: t(1685), message: re[t(2032)](x) });
  }
  [a(1195)](x) {
    const t = a;
    return this._addCheck({ kind: t(1414), inclusive: !0, value: Number[t(625)], message: re[t(2032)](x) })[t(571)]({ kind: t(718), inclusive: !0, value: Number[t(1031)], message: re[t(2032)](x) });
  }
  get minValue() {
    const x = a;
    let t = null;
    for (const r of this._def[x(1043)])
      r[x(1960)] === x(1414) && (t === null || r[x(998)] > t) && (t = r[x(998)]);
    return t;
  }
  get maxValue() {
    const x = a;
    let t = null;
    for (const r of this[x(880)].checks)
      r[x(1960)] === x(718) && (t === null || r[x(998)] < t) && (t = r[x(998)]);
    return t;
  }
  get isInt() {
    const x = a;
    return !!this[x(880)].checks[x(1036)]((t) => t.kind === x(761) || t.kind === "multipleOf" && Te[x(2893)](t[x(998)]));
  }
  get isFinite() {
    const x = a;
    let t = null, r = null;
    for (const e of this[x(880)][x(1043)]) {
      if (e[x(1960)] === x(1685) || e[x(1960)] === x(761) || e[x(1960)] === x(749)) return !0;
      e[x(1960)] === x(1414) ? (r === null || e[x(998)] > r) && (r = e[x(998)]) : e.kind === x(718) && (t === null || e.value < t) && (t = e[x(998)]);
    }
    return Number.isFinite(r) && Number[x(1272)](t);
  }
}
B0.create = (o) => {
  const x = a;
  return new B0({ checks: [], typeName: pe[x(1008)], coerce: (o == null ? void 0 : o.coerce) || !1, ...ve(o) });
};
class tx extends Fe {
  constructor() {
    const x = a;
    super(...arguments), this[x(1414)] = this[x(2838)], this[x(718)] = this[x(2269)];
  }
  _parse(x) {
    const t = a;
    if (this[t(880)][t(2791)]) try {
      x[t(2887)] = BigInt(x[t(2887)]);
    } catch {
      return this._getInvalidInput(x);
    }
    if (this._getType(x) !== ae[t(2611)]) return this[t(934)](x);
    let e;
    const s = new e0();
    for (const n of this._def.checks)
      n.kind === t(1414) ? (n[t(360)] ? x[t(2887)] < n.value : x[t(2887)] <= n[t(998)]) && (e = this[t(2407)](x, e), Y(e, { code: W.too_small, type: "bigint", minimum: n[t(998)], inclusive: n[t(360)], message: n[t(615)] }), s[t(973)]()) : n[t(1960)] === t(718) ? (n.inclusive ? x[t(2887)] > n[t(998)] : x[t(2887)] >= n[t(998)]) && (e = this[t(2407)](x, e), Y(e, { code: W[t(2479)], type: t(2611), maximum: n[t(998)], inclusive: n.inclusive, message: n.message }), s[t(973)]()) : n[t(1960)] === t(749) ? x[t(2887)] % n.value !== BigInt(0) && (e = this[t(2407)](x, e), Y(e, { code: W[t(1540)], multipleOf: n[t(998)], message: n[t(615)] }), s[t(973)]()) : Te[t(907)](n);
    return { status: s[t(998)], value: x[t(2887)] };
  }
  [a(934)](x) {
    const t = a, r = this[t(2407)](x);
    return Y(r, { code: W.invalid_type, expected: ae[t(2611)], received: r[t(2217)] }), he;
  }
  gte(x, t) {
    const r = a;
    return this[r(2318)](r(1414), x, !0, re[r(2032)](t));
  }
  gt(x, t) {
    const r = a;
    return this.setLimit("min", x, !1, re[r(2032)](t));
  }
  [a(2269)](x, t) {
    const r = a;
    return this[r(2318)](r(718), x, !0, re[r(2032)](t));
  }
  lt(x, t) {
    const r = a;
    return this[r(2318)](r(718), x, !1, re[r(2032)](t));
  }
  [a(2318)](x, t, r, e) {
    const s = a;
    return new tx({ ...this._def, checks: [...this[s(880)][s(1043)], { kind: x, value: t, inclusive: r, message: re[s(2032)](e) }] });
  }
  [a(571)](x) {
    const t = a;
    return new tx({ ...this[t(880)], checks: [...this._def[t(1043)], x] });
  }
  [a(194)](x) {
    const t = a;
    return this[t(571)]({ kind: t(1414), value: BigInt(0), inclusive: !1, message: re[t(2032)](x) });
  }
  negative(x) {
    const t = a;
    return this[t(571)]({ kind: t(718), value: BigInt(0), inclusive: !1, message: re.toString(x) });
  }
  nonpositive(x) {
    const t = a;
    return this[t(571)]({ kind: t(718), value: BigInt(0), inclusive: !0, message: re[t(2032)](x) });
  }
  [a(2586)](x) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !0, message: re.toString(x) });
  }
  [a(749)](x, t) {
    const r = a;
    return this[r(571)]({ kind: r(749), value: x, message: re[r(2032)](t) });
  }
  get minValue() {
    const x = a;
    let t = null;
    for (const r of this[x(880)][x(1043)])
      r[x(1960)] === x(1414) && (t === null || r[x(998)] > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    const x = a;
    let t = null;
    for (const r of this[x(880)].checks)
      r[x(1960)] === "max" && (t === null || r[x(998)] < t) && (t = r[x(998)]);
    return t;
  }
}
tx[a(2469)] = (o) => {
  const x = a;
  return new tx({ checks: [], typeName: pe[x(1143)], coerce: (o == null ? void 0 : o.coerce) ?? !1, ...ve(o) });
};
class Ht extends Fe {
  [a(1908)](x) {
    const t = a;
    if (this._def[t(2791)] && (x[t(2887)] = !!x[t(2887)]), this[t(2571)](x) !== ae.boolean) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: W[t(2127)], expected: ae[t(1001)], received: e.parsedType }), he;
    }
    return a0(x[t(2887)]);
  }
}
Ht.create = (o) => {
  const x = a;
  return new Ht({ typeName: pe[x(2767)], coerce: (o == null ? void 0 : o[x(2791)]) || !1, ...ve(o) });
};
class gx extends Fe {
  [a(1908)](x) {
    const t = a;
    if (this._def[t(2791)] && (x[t(2887)] = new Date(x.data)), this[t(2571)](x) !== ae[t(2714)]) {
      const n = this[t(2407)](x);
      return Y(n, { code: W[t(2127)], expected: ae[t(2714)], received: n.parsedType }), he;
    }
    if (Number[t(2232)](x.data[t(1795)]())) {
      const n = this._getOrReturnCtx(x);
      return Y(n, { code: W[t(2728)] }), he;
    }
    const e = new e0();
    let s;
    for (const n of this[t(880)][t(1043)])
      n.kind === t(1414) ? x[t(2887)][t(1795)]() < n[t(998)] && (s = this[t(2407)](x, s), Y(s, { code: W[t(1487)], message: n[t(615)], inclusive: !0, exact: !1, minimum: n[t(998)], type: "date" }), e.dirty()) : n.kind === t(718) ? x.data[t(1795)]() > n.value && (s = this[t(2407)](x, s), Y(s, { code: W.too_big, message: n[t(615)], inclusive: !0, exact: !1, maximum: n[t(998)], type: t(2714) }), e[t(973)]()) : Te[t(907)](n);
    return { status: e.value, value: new Date(x.data[t(1795)]()) };
  }
  _addCheck(x) {
    const t = a;
    return new gx({ ...this[t(880)], checks: [...this[t(880)].checks, x] });
  }
  min(x, t) {
    const r = a;
    return this[r(571)]({ kind: "min", value: x[r(1795)](), message: re.toString(t) });
  }
  [a(718)](x, t) {
    const r = a;
    return this._addCheck({ kind: r(718), value: x[r(1795)](), message: re.toString(t) });
  }
  get [a(2373)]() {
    const x = a;
    let t = null;
    for (const r of this[x(880)][x(1043)])
      r[x(1960)] === x(1414) && (t === null || r.value > t) && (t = r[x(998)]);
    return t != null ? new Date(t) : null;
  }
  get [a(1318)]() {
    const x = a;
    let t = null;
    for (const r of this._def[x(1043)])
      r[x(1960)] === x(718) && (t === null || r.value < t) && (t = r[x(998)]);
    return t != null ? new Date(t) : null;
  }
}
gx[a(2469)] = (o) => {
  const x = a;
  return new gx({ checks: [], coerce: (o == null ? void 0 : o[x(2791)]) || !1, typeName: pe[x(1065)], ...ve(o) });
};
class qa extends Fe {
  [a(1908)](x) {
    const t = a;
    if (this[t(2571)](x) !== ae[t(2169)]) {
      const e = this[t(2407)](x);
      return Y(e, { code: W[t(2127)], expected: ae[t(2169)], received: e[t(2217)] }), he;
    }
    return a0(x[t(2887)]);
  }
}
qa.create = (o) => new qa({ typeName: pe.ZodSymbol, ...ve(o) });
class zt extends Fe {
  [a(1908)](x) {
    const t = a;
    if (this[t(2571)](x) !== ae.undefined) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: W[t(2127)], expected: ae.undefined, received: e[t(2217)] }), he;
    }
    return a0(x.data);
  }
}
zt[a(2469)] = (o) => {
  const x = a;
  return new zt({ typeName: pe[x(1032)], ...ve(o) });
};
class Vt extends Fe {
  [a(1908)](x) {
    const t = a;
    if (this[t(2571)](x) !== ae.null) {
      const e = this[t(2407)](x);
      return Y(e, { code: W[t(2127)], expected: ae[t(1589)], received: e.parsedType }), he;
    }
    return a0(x[t(2887)]);
  }
}
Vt[a(2469)] = (o) => {
  const x = a;
  return new Vt({ typeName: pe[x(2593)], ...ve(o) });
};
class ax extends Fe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  [a(1908)](x) {
    return a0(x[a(2887)]);
  }
}
ax.create = (o) => {
  const x = a;
  return new ax({ typeName: pe[x(1256)], ...ve(o) });
};
class Bt extends Fe {
  constructor() {
    const x = a;
    super(...arguments), this[x(2303)] = !0;
  }
  [a(1908)](x) {
    return a0(x.data);
  }
}
Bt[a(2469)] = (o) => {
  const x = a;
  return new Bt({ typeName: pe[x(1089)], ...ve(o) });
};
class R0 extends Fe {
  [a(1908)](x) {
    const t = a, r = this._getOrReturnCtx(x);
    return Y(r, { code: W[t(2127)], expected: ae.never, received: r[t(2217)] }), he;
  }
}
R0.create = (o) => new R0({ typeName: pe.ZodNever, ...ve(o) });
class Wt extends Fe {
  [a(1908)](x) {
    const t = a;
    if (this[t(2571)](x) !== ae.undefined) {
      const e = this[t(2407)](x);
      return Y(e, { code: W[t(2127)], expected: ae[t(698)], received: e[t(2217)] }), he;
    }
    return a0(x[t(2887)]);
  }
}
Wt[a(2469)] = (o) => {
  const x = a;
  return new Wt({ typeName: pe[x(406)], ...ve(o) });
};
class h0 extends Fe {
  [a(1908)](x) {
    const t = a, { ctx: r, status: e } = this[t(1050)](x), s = this[t(880)];
    if (r[t(2217)] !== ae.array) return Y(r, { code: W[t(2127)], expected: ae[t(2173)], received: r[t(2217)] }), he;
    if (s[t(1512)] !== null) {
      const i = r[t(2887)][t(1332)] > s.exactLength[t(998)], c = r[t(2887)][t(1332)] < s[t(1512)].value;
      (i || c) && (Y(r, { code: i ? W[t(2479)] : W.too_small, minimum: c ? s[t(1512)][t(998)] : void 0, maximum: i ? s[t(1512)][t(998)] : void 0, type: t(2173), inclusive: !0, exact: !0, message: s[t(1512)][t(615)] }), e[t(973)]());
    }
    if (s[t(1610)] !== null && r.data[t(1332)] < s[t(1610)][t(998)] && (Y(r, { code: W.too_small, minimum: s[t(1610)].value, type: t(2173), inclusive: !0, exact: !1, message: s[t(1610)].message }), e[t(973)]()), s[t(2213)] !== null && r[t(2887)][t(1332)] > s[t(2213)][t(998)] && (Y(r, { code: W[t(2479)], maximum: s[t(2213)][t(998)], type: t(2173), inclusive: !0, exact: !1, message: s[t(2213)][t(615)] }), e[t(973)]()), r[t(1249)][t(418)]) return Promise[t(1288)]([...r[t(2887)]].map((i, c) => {
      const u = t;
      return s[u(190)][u(1810)](new p0(r, i, r[u(2475)], c));
    }))[t(723)]((i) => e0[t(352)](e, i));
    const n = [...r[t(2887)]][t(2742)]((i, c) => {
      const u = t;
      return s[u(190)][u(447)](new p0(r, i, r[u(2475)], c));
    });
    return e0[t(352)](e, n);
  }
  get [a(2672)]() {
    const x = a;
    return this[x(880)][x(190)];
  }
  [a(1414)](x, t) {
    return new h0({ ...this._def, minLength: { value: x, message: re.toString(t) } });
  }
  [a(718)](x, t) {
    const r = a;
    return new h0({ ...this[r(880)], maxLength: { value: x, message: re[r(2032)](t) } });
  }
  [a(1332)](x, t) {
    const r = a;
    return new h0({ ...this[r(880)], exactLength: { value: x, message: re[r(2032)](t) } });
  }
  nonempty(x) {
    return this[a(1414)](1, x);
  }
}
h0[a(2469)] = (o, x) => {
  const t = a;
  return new h0({ type: o, minLength: null, maxLength: null, exactLength: null, typeName: pe[t(213)], ...ve(x) });
};
function H0(o) {
  const x = a;
  if (o instanceof Ze) {
    const t = {};
    for (const r in o[x(876)]) {
      const e = o[x(876)][r];
      t[r] = w0[x(2469)](H0(e));
    }
    return new Ze({ ...o._def, shape: () => t });
  } else
    return o instanceof h0 ? new h0({ ...o[x(880)], type: H0(o[x(2672)]) }) : o instanceof w0 ? w0[x(2469)](H0(o[x(2486)]())) : o instanceof j0 ? j0[x(2469)](H0(o[x(2486)]())) : o instanceof O0 ? O0[x(2469)](o[x(1613)].map((t) => H0(t))) : o;
}
class Ze extends Fe {
  constructor() {
    const x = a;
    super(...arguments), this[x(530)] = null, this[x(1935)] = this.passthrough, this[x(873)] = this[x(2636)];
  }
  [a(660)]() {
    const x = a;
    if (this[x(530)] !== null) return this[x(530)];
    const t = this[x(880)][x(876)](), r = Te[x(1408)](t);
    return this[x(530)] = { shape: t, keys: r }, this[x(530)];
  }
  _parse(x) {
    const t = a;
    if (this[t(2571)](x) !== ae.object) {
      const d = this[t(2407)](x);
      return Y(d, { code: W[t(2127)], expected: ae[t(2844)], received: d.parsedType }), he;
    }
    const { status: e, ctx: s } = this[t(1050)](x), { shape: n, keys: i } = this[t(660)](), c = [];
    if (!(this[t(880)].catchall instanceof R0 && this[t(880)][t(467)] === t(1596))) for (const d in s.data)
      !i[t(2798)](d) && c[t(902)](d);
    const u = [];
    for (const d of i) {
      const l = n[d], f = s[t(2887)][d];
      u[t(902)]({ key: { status: t(295), value: d }, value: l[t(1908)](new p0(s, f, s[t(2475)], d)), alwaysSet: d in s[t(2887)] });
    }
    if (this._def[t(1861)] instanceof R0) {
      const d = this[t(880)][t(467)];
      if (d === t(2690)) for (const l of c)
        u[t(902)]({ key: { status: t(295), value: l }, value: { status: "valid", value: s[t(2887)][l] } });
      else if (d === t(414)) c[t(1332)] > 0 && (Y(s, { code: W[t(1913)], keys: c }), e[t(973)]());
      else if (d !== t(1596)) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this[t(880)][t(1861)];
      for (const l of c) {
        const f = s[t(2887)][l];
        u[t(902)]({ key: { status: "valid", value: l }, value: d[t(1908)](new p0(s, f, s[t(2475)], l)), alwaysSet: l in s[t(2887)] });
      }
    }
    return s.common[t(418)] ? Promise[t(1635)]().then(async () => {
      const d = t, l = [];
      for (const f of u) {
        const b = await f.key, h = await f.value;
        l[d(902)]({ key: b, value: h, alwaysSet: f.alwaysSet });
      }
      return l;
    }).then((d) => e0.mergeObjectSync(e, d)) : e0[t(439)](e, u);
  }
  get [a(876)]() {
    const x = a;
    return this._def[x(876)]();
  }
  [a(414)](x) {
    const t = a;
    return re.errToObj, new Ze({ ...this[t(880)], unknownKeys: t(414), ...x !== void 0 ? { errorMap: (r, e) => {
      var i, c;
      const s = t, n = ((c = (i = this._def).errorMap) == null ? void 0 : c.call(i, r, e).message) ?? e[s(2660)];
      return r[s(586)] === s(1913) ? { message: re[s(692)](x).message ?? n } : { message: n };
    } } : {} });
  }
  strip() {
    const x = a;
    return new Ze({ ...this[x(880)], unknownKeys: "strip" });
  }
  [a(2690)]() {
    const x = a;
    return new Ze({ ...this[x(880)], unknownKeys: x(2690) });
  }
  [a(2636)](x) {
    return new Ze({ ...this._def, shape: () => ({ ...this._def.shape(), ...x }) });
  }
  [a(1722)](x) {
    const t = a;
    return new Ze({ unknownKeys: x[t(880)][t(467)], catchall: x[t(880)][t(1861)], shape: () => ({ ...this[t(880)][t(876)](), ...x[t(880)][t(876)]() }), typeName: pe[t(1183)] });
  }
  [a(1938)](x, t) {
    return this[a(873)]({ [x]: t });
  }
  [a(1861)](x) {
    return new Ze({ ...this._def, catchall: x });
  }
  [a(264)](x) {
    const t = a, r = {};
    for (const e of Te[t(1408)](x))
      x[e] && this.shape[e] && (r[e] = this[t(876)][e]);
    return new Ze({ ...this[t(880)], shape: () => r });
  }
  [a(1333)](x) {
    const t = a, r = {};
    for (const e of Te[t(1408)](this[t(876)]))
      !x[e] && (r[e] = this[t(876)][e]);
    return new Ze({ ...this[t(880)], shape: () => r });
  }
  deepPartial() {
    return H0(this);
  }
  partial(x) {
    const t = a, r = {};
    for (const e of Te[t(1408)](this[t(876)])) {
      const s = this[t(876)][e];
      x && !x[e] ? r[e] = s : r[e] = s[t(2033)]();
    }
    return new Ze({ ...this[t(880)], shape: () => r });
  }
  [a(1025)](x) {
    const t = a, r = {};
    for (const e of Te.objectKeys(this[t(876)]))
      if (x && !x[e]) r[e] = this[t(876)][e];
      else {
        let n = this[t(876)][e];
        for (; n instanceof w0; )
          n = n[t(880)].innerType;
        r[e] = n;
      }
    return new Ze({ ...this._def, shape: () => r });
  }
  [a(2663)]() {
    const x = a;
    return Us(Te[x(1408)](this[x(876)]));
  }
}
Ze[a(2469)] = (o, x) => {
  const t = a;
  return new Ze({ shape: () => o, unknownKeys: t(1596), catchall: R0[t(2469)](), typeName: pe[t(1183)], ...ve(x) });
}, Ze[a(2655)] = (o, x) => {
  const t = a;
  return new Ze({ shape: () => o, unknownKeys: t(414), catchall: R0.create(), typeName: pe.ZodObject, ...ve(x) });
}, Ze[a(1919)] = (o, x) => {
  const t = a;
  return new Ze({ shape: o, unknownKeys: t(1596), catchall: R0[t(2469)](), typeName: pe.ZodObject, ...ve(x) });
};
class yx extends Fe {
  [a(1908)](x) {
    const t = a, { ctx: r } = this[t(1050)](x), e = this._def[t(961)];
    function s(n) {
      const i = t;
      for (const u of n)
        if (u[i(1792)][i(2745)] === i(295)) return u[i(1792)];
      for (const u of n)
        if (u[i(1792)][i(2745)] === "dirty") return r[i(1249)][i(2196)][i(902)](...u[i(1155)][i(1249)][i(2196)]), u.result;
      const c = n[i(2742)]((u) => new k0(u[i(1155)][i(1249)][i(2196)]));
      return Y(r, { code: W[i(1243)], unionErrors: c }), he;
    }
    if (r[t(1249)][t(418)]) return Promise[t(1288)](e[t(2742)](async (n) => {
      const i = t, c = { ...r, common: { ...r[i(1249)], issues: [] }, parent: null };
      return { result: await n._parseAsync({ data: r[i(2887)], path: r[i(2475)], parent: c }), ctx: c };
    }))[t(723)](s);
    {
      let n;
      const i = [];
      for (const u of e) {
        const d = { ...r, common: { ...r.common, issues: [] }, parent: null }, l = u._parseSync({ data: r[t(2887)], path: r[t(2475)], parent: d });
        if (l[t(2745)] === t(295)) return l;
        l.status === t(973) && !n && (n = { result: l, ctx: d }), d[t(1249)][t(2196)][t(1332)] && i[t(902)](d[t(1249)][t(2196)]);
      }
      if (n) return r.common[t(2196)][t(902)](...n[t(1155)][t(1249)][t(2196)]), n[t(1792)];
      const c = i[t(2742)]((u) => new k0(u));
      return Y(r, { code: W.invalid_union, unionErrors: c }), he;
    }
  }
  get [a(961)]() {
    return this[a(880)].options;
  }
}
yx.create = (o, x) => new yx({ options: o, typeName: pe.ZodUnion, ...ve(x) });
const g0 = (o) => {
  const x = a;
  return o instanceof Kt ? g0(o[x(224)]) : o instanceof A0 ? g0(o.innerType()) : o instanceof Sx ? [o[x(998)]] : o instanceof D0 ? o[x(961)] : o instanceof Gt ? Te[x(2900)](o.enum) : o instanceof Px ? g0(o[x(880)][x(2817)]) : o instanceof zt ? [void 0] : o instanceof Vt ? [null] : o instanceof w0 ? [void 0, ...g0(o.unwrap())] : o instanceof j0 ? [null, ...g0(o[x(2486)]())] : o instanceof Hs || o instanceof Ix ? g0(o[x(2486)]()) : o instanceof Ex ? g0(o[x(880)].innerType) : [];
};
class na extends Fe {
  [a(1908)](x) {
    const t = a, { ctx: r } = this[t(1050)](x);
    if (r[t(2217)] !== ae[t(2844)]) return Y(r, { code: W[t(2127)], expected: ae[t(2844)], received: r[t(2217)] }), he;
    const e = this[t(2569)], s = r.data[e], n = this.optionsMap[t(1094)](s);
    return n ? r[t(1249)][t(418)] ? n[t(1810)]({ data: r[t(2887)], path: r.path, parent: r }) : n[t(447)]({ data: r[t(2887)], path: r[t(2475)], parent: r }) : (Y(r, { code: W[t(807)], options: Array[t(2280)](this[t(432)][t(1806)]()), path: [e] }), he);
  }
  get discriminator() {
    const x = a;
    return this[x(880)][x(2569)];
  }
  get [a(961)]() {
    const x = a;
    return this[x(880)][x(961)];
  }
  get [a(432)]() {
    const x = a;
    return this[x(880)][x(432)];
  }
  static create(x, t, r) {
    const e = a, s = /* @__PURE__ */ new Map();
    for (const n of t) {
      const i = g0(n.shape[x]);
      if (!i[e(1332)]) throw new Error(e(1154) + x + e(2558));
      for (const c of i) {
        if (s[e(441)](c)) throw new Error(e(889) + String(x) + " has duplicate value " + String(c));
        s[e(1750)](c, n);
      }
    }
    return new na({ typeName: pe[e(1365)], discriminator: x, options: t, optionsMap: s, ...ve(r) });
  }
}
function Zt(o, x) {
  const t = a, r = I0(o), e = I0(x);
  if (o === x) return { valid: !0, data: o };
  if (r === ae[t(2844)] && e === ae.object) {
    const s = Te[t(1408)](x), n = Te[t(1408)](o).filter((c) => s[t(1104)](c) !== -1), i = { ...o, ...x };
    for (const c of n) {
      const u = Zt(o[c], x[c]);
      if (!u[t(295)]) return { valid: !1 };
      i[c] = u[t(2887)];
    }
    return { valid: !0, data: i };
  } else if (r === ae[t(2173)] && e === ae.array) {
    if (o[t(1332)] !== x.length) return { valid: !1 };
    const s = [];
    for (let n = 0; n < o[t(1332)]; n++) {
      const i = o[n], c = x[n], u = Zt(i, c);
      if (!u[t(295)]) return { valid: !1 };
      s.push(u[t(2887)]);
    }
    return { valid: !0, data: s };
  } else return r === ae[t(2714)] && e === ae[t(2714)] && +o == +x ? { valid: !0, data: o } : { valid: !1 };
}
class vx extends Fe {
  [a(1908)](x) {
    const t = a, { status: r, ctx: e } = this._processInputParams(x), s = (n, i) => {
      const c = K;
      if (Fa(n) || Fa(i)) return he;
      const u = Zt(n[c(998)], i[c(998)]);
      return u[c(295)] ? ((Na(n) || Na(i)) && r[c(973)](), { status: r[c(998)], value: u[c(2887)] }) : (Y(e, { code: W[c(1645)] }), he);
    };
    return e[t(1249)][t(418)] ? Promise[t(1288)]([this[t(880)][t(1026)][t(1810)]({ data: e[t(2887)], path: e[t(2475)], parent: e }), this._def[t(2102)]._parseAsync({ data: e[t(2887)], path: e.path, parent: e })]).then(([n, i]) => s(n, i)) : s(this[t(880)].left[t(447)]({ data: e[t(2887)], path: e.path, parent: e }), this[t(880)][t(2102)][t(447)]({ data: e[t(2887)], path: e[t(2475)], parent: e }));
  }
}
vx[a(2469)] = (o, x, t) => {
  const r = a;
  return new vx({ left: o, right: x, typeName: pe[r(1551)], ...ve(t) });
};
class O0 extends Fe {
  [a(1908)](x) {
    const t = a, { status: r, ctx: e } = this[t(1050)](x);
    if (e[t(2217)] !== ae[t(2173)]) return Y(e, { code: W[t(2127)], expected: ae[t(2173)], received: e[t(2217)] }), he;
    if (e.data.length < this[t(880)][t(1613)][t(1332)]) return Y(e, { code: W.too_small, minimum: this._def[t(1613)][t(1332)], inclusive: !0, exact: !1, type: t(2173) }), he;
    !this[t(880)][t(2061)] && e[t(2887)].length > this[t(880)].items.length && (Y(e, { code: W[t(2479)], maximum: this[t(880)][t(1613)][t(1332)], inclusive: !0, exact: !1, type: t(2173) }), r[t(973)]());
    const n = [...e.data][t(2742)]((i, c) => {
      const u = t, d = this[u(880)].items[c] || this[u(880)].rest;
      return d ? d[u(1908)](new p0(e, i, e[u(2475)], c)) : null;
    })[t(1706)]((i) => !!i);
    return e[t(1249)][t(418)] ? Promise[t(1288)](n)[t(723)]((i) => e0[t(352)](r, i)) : e0[t(352)](r, n);
  }
  get [a(1613)]() {
    const x = a;
    return this._def[x(1613)];
  }
  rest(x) {
    const t = a;
    return new O0({ ...this[t(880)], rest: x });
  }
}
O0[a(2469)] = (o, x) => {
  const t = a;
  if (!Array[t(977)](o)) throw new Error(t(508));
  return new O0({ items: o, typeName: pe[t(2800)], rest: null, ...ve(x) });
};
class wx extends Fe {
  get [a(1253)]() {
    const x = a;
    return this[x(880)][x(938)];
  }
  get [a(1904)]() {
    const x = a;
    return this._def[x(1788)];
  }
  [a(1908)](x) {
    const t = a, { status: r, ctx: e } = this[t(1050)](x);
    if (e[t(2217)] !== ae[t(2844)]) return Y(e, { code: W.invalid_type, expected: ae[t(2844)], received: e[t(2217)] }), he;
    const s = [], n = this[t(880)][t(938)], i = this._def[t(1788)];
    for (const c in e[t(2887)])
      s[t(902)]({ key: n._parse(new p0(e, c, e.path, c)), value: i._parse(new p0(e, e[t(2887)][c], e[t(2475)], c)), alwaysSet: c in e[t(2887)] });
    return e.common[t(418)] ? e0[t(1070)](r, s) : e0[t(439)](r, s);
  }
  get element() {
    return this[a(880)].valueType;
  }
  static [a(2469)](x, t, r) {
    const e = a;
    return t instanceof Fe ? new wx({ keyType: x, valueType: t, typeName: pe[e(2284)], ...ve(r) }) : new wx({ keyType: v0[e(2469)](), valueType: x, typeName: pe.ZodRecord, ...ve(t) });
  }
}
class Aa extends Fe {
  get keySchema() {
    const x = a;
    return this[x(880)][x(938)];
  }
  get [a(1904)]() {
    const x = a;
    return this[x(880)][x(1788)];
  }
  [a(1908)](x) {
    const t = a, { status: r, ctx: e } = this[t(1050)](x);
    if (e[t(2217)] !== ae.map) return Y(e, { code: W[t(2127)], expected: ae[t(2742)], received: e[t(2217)] }), he;
    const s = this._def[t(938)], n = this[t(880)].valueType, i = [...e[t(2887)][t(2700)]()].map(([c, u], d) => {
      const l = t;
      return { key: s._parse(new p0(e, c, e[l(2475)], [d, l(1175)])), value: n[l(1908)](new p0(e, u, e.path, [d, "value"])) };
    });
    if (e[t(1249)][t(418)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise[t(1635)]()[t(723)](async () => {
        const u = t;
        for (const d of i) {
          const l = await d[u(1175)], f = await d.value;
          if (l[u(2745)] === u(2234) || f.status === "aborted") return he;
          (l[u(2745)] === u(973) || f[u(2745)] === u(973)) && r[u(973)](), c[u(1750)](l[u(998)], f[u(998)]);
        }
        return { status: r.value, value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of i) {
        const d = u.key, l = u.value;
        if (d.status === t(2234) || l.status === t(2234)) return he;
        (d[t(2745)] === t(973) || l[t(2745)] === "dirty") && r.dirty(), c[t(1750)](d.value, l.value);
      }
      return { status: r[t(998)], value: c };
    }
  }
}
Aa[a(2469)] = (o, x, t) => {
  const r = a;
  return new Aa({ valueType: x, keyType: o, typeName: pe[r(656)], ...ve(t) });
};
class rx extends Fe {
  _parse(x) {
    const t = a, { status: r, ctx: e } = this._processInputParams(x);
    if (e[t(2217)] !== ae[t(1750)]) return Y(e, { code: W[t(2127)], expected: ae[t(1750)], received: e[t(2217)] }), he;
    const s = this[t(880)];
    s.minSize !== null && e[t(2887)][t(2187)] < s[t(2622)].value && (Y(e, { code: W[t(1487)], minimum: s[t(2622)].value, type: t(1750), inclusive: !0, exact: !1, message: s.minSize.message }), r.dirty()), s[t(1583)] !== null && e[t(2887)][t(2187)] > s[t(1583)][t(998)] && (Y(e, { code: W[t(2479)], maximum: s[t(1583)][t(998)], type: "set", inclusive: !0, exact: !1, message: s[t(1583)][t(615)] }), r[t(973)]());
    const n = this[t(880)].valueType;
    function i(u) {
      const d = t, l = /* @__PURE__ */ new Set();
      for (const f of u) {
        if (f[d(2745)] === d(2234)) return he;
        f.status === d(973) && r[d(973)](), l[d(479)](f.value);
      }
      return { status: r[d(998)], value: l };
    }
    const c = [...e[t(2887)][t(1573)]()][t(2742)]((u, d) => n._parse(new p0(e, u, e[t(2475)], d)));
    return e.common.async ? Promise[t(1288)](c)[t(723)]((u) => i(u)) : i(c);
  }
  [a(1414)](x, t) {
    const r = a;
    return new rx({ ...this[r(880)], minSize: { value: x, message: re[r(2032)](t) } });
  }
  [a(718)](x, t) {
    const r = a;
    return new rx({ ...this._def, maxSize: { value: x, message: re[r(2032)](t) } });
  }
  [a(2187)](x, t) {
    const r = a;
    return this[r(1414)](x, t)[r(718)](x, t);
  }
  [a(1453)](x) {
    return this.min(1, x);
  }
}
rx.create = (o, x) => {
  const t = a;
  return new rx({ valueType: o, minSize: null, maxSize: null, typeName: pe[t(1958)], ...ve(x) });
};
class Kt extends Fe {
  get [a(224)]() {
    const x = a;
    return this[x(880)][x(1617)]();
  }
  [a(1908)](x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    return this._def.getter()[t(1908)]({ data: r[t(2887)], path: r[t(2475)], parent: r });
  }
}
Kt.create = (o, x) => {
  const t = a;
  return new Kt({ getter: o, typeName: pe[t(1252)], ...ve(x) });
};
class Sx extends Fe {
  _parse(x) {
    const t = a;
    if (x[t(2887)] !== this[t(880)][t(998)]) {
      const r = this._getOrReturnCtx(x);
      return Y(r, { received: r[t(2887)], code: W[t(419)], expected: this[t(880)][t(998)] }), he;
    }
    return { status: "valid", value: x[t(2887)] };
  }
  get [a(998)]() {
    const x = a;
    return this[x(880)][x(998)];
  }
}
Sx[a(2469)] = (o, x) => {
  const t = a;
  return new Sx({ value: o, typeName: pe[t(2677)], ...ve(x) });
};
function Us(o, x) {
  const t = a;
  return new D0({ values: o, typeName: pe[t(795)], ...ve(x) });
}
class D0 extends Fe {
  [a(1908)](x) {
    const t = a;
    if (typeof x[t(2887)] !== t(1653)) {
      const r = this[t(2407)](x), e = this[t(880)][t(1573)];
      return Y(r, { expected: Te[t(1654)](e), received: r[t(2217)], code: W[t(2127)] }), he;
    }
    if (!this[t(2852)] && (this[t(2852)] = new Set(this[t(880)][t(1573)])), !this._cache[t(441)](x[t(2887)])) {
      const r = this[t(2407)](x), e = this[t(880)].values;
      return Y(r, { received: r[t(2887)], code: W[t(1593)], options: e }), he;
    }
    return a0(x[t(2887)]);
  }
  get options() {
    return this[a(880)].values;
  }
  get enum() {
    const x = a, t = {};
    for (const r of this[x(880)][x(1573)])
      t[r] = r;
    return t;
  }
  get [a(2858)]() {
    const x = {};
    for (const t of this._def.values)
      x[t] = t;
    return x;
  }
  get [a(2114)]() {
    const x = a, t = {};
    for (const r of this._def[x(1573)])
      t[r] = r;
    return t;
  }
  [a(1986)](x, t = this[a(880)]) {
    const r = a;
    return D0[r(2469)](x, { ...this[r(880)], ...t });
  }
  [a(2257)](x, t = this._def) {
    const r = a;
    return D0[r(2469)](this[r(961)][r(1706)]((e) => !x.includes(e)), { ...this[r(880)], ...t });
  }
}
D0[a(2469)] = Us;
class Gt extends Fe {
  _parse(x) {
    const t = a, r = Te.getValidEnumValues(this._def[t(1573)]), e = this._getOrReturnCtx(x);
    if (e[t(2217)] !== ae.string && e.parsedType !== ae[t(1206)]) {
      const s = Te[t(2900)](r);
      return Y(e, { expected: Te[t(1654)](s), received: e.parsedType, code: W[t(2127)] }), he;
    }
    if (!this._cache && (this[t(2852)] = new Set(Te[t(579)](this._def[t(1573)]))), !this[t(2852)].has(x[t(2887)])) {
      const s = Te[t(2900)](r);
      return Y(e, { received: e[t(2887)], code: W[t(1593)], options: s }), he;
    }
    return a0(x.data);
  }
  get enum() {
    const x = a;
    return this[x(880)][x(1573)];
  }
}
Gt.create = (o, x) => {
  const t = a;
  return new Gt({ values: o, typeName: pe[t(847)], ...ve(x) });
};
class kx extends Fe {
  [a(2486)]() {
    const x = a;
    return this._def[x(190)];
  }
  [a(1908)](x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    if (r[t(2217)] !== ae[t(1114)] && r.common.async === !1) return Y(r, { code: W[t(2127)], expected: ae[t(1114)], received: r[t(2217)] }), he;
    const e = r.parsedType === ae[t(1114)] ? r[t(2887)] : Promise.resolve(r[t(2887)]);
    return a0(e.then((s) => {
      const n = t;
      return this[n(880)][n(190)][n(2572)](s, { path: r[n(2475)], errorMap: r[n(1249)].contextualErrorMap });
    }));
  }
}
kx[a(2469)] = (o, x) => {
  const t = a;
  return new kx({ type: o, typeName: pe[t(2012)], ...ve(x) });
};
class A0 extends Fe {
  innerType() {
    return this[a(880)].schema;
  }
  [a(1022)]() {
    const x = a;
    return this._def[x(224)]._def[x(327)] === pe[x(2787)] ? this[x(880)].schema[x(1022)]() : this._def[x(224)];
  }
  [a(1908)](x) {
    const t = a, { status: r, ctx: e } = this._processInputParams(x), s = this[t(880)][t(2286)] || null, n = { addIssue: (i) => {
      const c = t;
      Y(e, i), i.fatal ? r[c(2693)]() : r.dirty();
    }, get path() {
      return e[t(2475)];
    } };
    if (n[t(704)] = n[t(704)].bind(n), s[t(190)] === t(353)) {
      const i = s.transform(e.data, n);
      if (e[t(1249)][t(418)]) return Promise.resolve(i)[t(723)](async (c) => {
        const u = t;
        if (r[u(998)] === "aborted") return he;
        const d = await this[u(880)].schema[u(1810)]({ data: c, path: e[u(2475)], parent: e });
        return d[u(2745)] === u(2234) ? he : d.status === "dirty" || r[u(998)] === u(973) ? Q0(d[u(998)]) : d;
      });
      {
        if (r[t(998)] === t(2234)) return he;
        const c = this[t(880)][t(224)]._parseSync({ data: i, path: e[t(2475)], parent: e });
        return c[t(2745)] === t(2234) ? he : c[t(2745)] === t(973) || r[t(998)] === t(973) ? Q0(c[t(998)]) : c;
      }
    }
    if (s[t(190)] === "refinement") {
      const i = (c) => {
        const u = t, d = s[u(1310)](c, n);
        if (e[u(1249)][u(418)]) return Promise[u(1635)](d);
        if (d instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return c;
      };
      if (e[t(1249)][t(418)] === !1) {
        const c = this._def[t(224)][t(447)]({ data: e[t(2887)], path: e[t(2475)], parent: e });
        return c[t(2745)] === t(2234) ? he : (c[t(2745)] === t(973) && r.dirty(), i(c[t(998)]), { status: r[t(998)], value: c[t(998)] });
      } else return this[t(880)][t(224)][t(1810)]({ data: e.data, path: e.path, parent: e })[t(723)]((c) => {
        const u = t;
        return c[u(2745)] === u(2234) ? he : (c[u(2745)] === "dirty" && r[u(973)](), i(c[u(998)])[u(723)](() => {
          const d = u;
          return { status: r.value, value: c[d(998)] };
        }));
      });
    }
    if (s[t(190)] === t(770))
      if (e.common[t(418)] === !1) {
        const i = this[t(880)].schema[t(447)]({ data: e[t(2887)], path: e.path, parent: e });
        if (!V0(i)) return he;
        const c = s[t(770)](i[t(998)], n);
        if (c instanceof Promise) throw new Error(t(2023));
        return { status: r[t(998)], value: c };
      } else return this[t(880)].schema._parseAsync({ data: e[t(2887)], path: e[t(2475)], parent: e })[t(723)]((i) => {
        const c = t;
        return V0(i) ? Promise[c(1635)](s[c(770)](i[c(998)], n))[c(723)]((u) => ({ status: r[c(998)], value: u })) : he;
      });
    Te[t(907)](s);
  }
}
A0[a(2469)] = (o, x, t) => new A0({ schema: o, typeName: pe.ZodEffects, effect: x, ...ve(t) }), A0[a(2279)] = (o, x, t) => {
  const r = a;
  return new A0({ schema: x, effect: { type: r(353), transform: o }, typeName: pe[r(2787)], ...ve(t) });
};
class w0 extends Fe {
  [a(1908)](x) {
    const t = a;
    return this[t(2571)](x) === ae[t(2694)] ? a0(void 0) : this[t(880)].innerType[t(1908)](x);
  }
  unwrap() {
    const x = a;
    return this[x(880)][x(2817)];
  }
}
w0.create = (o, x) => new w0({ innerType: o, typeName: pe.ZodOptional, ...ve(x) });
class j0 extends Fe {
  [a(1908)](x) {
    const t = a;
    return this._getType(x) === ae[t(1589)] ? a0(null) : this._def[t(2817)][t(1908)](x);
  }
  [a(2486)]() {
    const x = a;
    return this[x(880)][x(2817)];
  }
}
j0[a(2469)] = (o, x) => {
  const t = a;
  return new j0({ innerType: o, typeName: pe[t(488)], ...ve(x) });
};
class Px extends Fe {
  [a(1908)](x) {
    const t = a, { ctx: r } = this[t(1050)](x);
    let e = r.data;
    return r[t(2217)] === ae[t(2694)] && (e = this[t(880)][t(397)]()), this[t(880)][t(2817)]._parse({ data: e, path: r[t(2475)], parent: r });
  }
  [a(2442)]() {
    const x = a;
    return this._def[x(2817)];
  }
}
Px[a(2469)] = (o, x) => {
  const t = a;
  return new Px({ innerType: o, typeName: pe[t(2109)], defaultValue: typeof x[t(2222)] == "function" ? x[t(2222)] : () => x[t(2222)], ...ve(x) });
};
class Ex extends Fe {
  [a(1908)](x) {
    const t = a, { ctx: r } = this._processInputParams(x), e = { ...r, common: { ...r.common, issues: [] } }, s = this._def[t(2817)][t(1908)]({ data: e.data, path: e.path, parent: { ...e } });
    return bx(s) ? s.then((n) => {
      const i = t;
      return { status: "valid", value: n.status === "valid" ? n[i(998)] : this[i(880)][i(2773)]({ get error() {
        const c = i;
        return new k0(e.common[c(2196)]);
      }, input: e[i(2887)] }) };
    }) : { status: t(295), value: s[t(2745)] === t(295) ? s.value : this[t(880)].catchValue({ get error() {
      const n = t;
      return new k0(e.common[n(2196)]);
    }, input: e[t(2887)] }) };
  }
  [a(2068)]() {
    const x = a;
    return this._def[x(2817)];
  }
}
Ex[a(2469)] = (o, x) => {
  const t = a;
  return new Ex({ innerType: o, typeName: pe[t(722)], catchValue: typeof x[t(1539)] == "function" ? x[t(1539)] : () => x[t(1539)], ...ve(x) });
};
class _a extends Fe {
  [a(1908)](x) {
    const t = a;
    if (this[t(2571)](x) !== ae[t(930)]) {
      const e = this[t(2407)](x);
      return Y(e, { code: W.invalid_type, expected: ae[t(930)], received: e[t(2217)] }), he;
    }
    return { status: t(295), value: x.data };
  }
}
_a[a(2469)] = (o) => {
  const x = a;
  return new _a({ typeName: pe[x(251)], ...ve(o) });
};
class Hs extends Fe {
  [a(1908)](x) {
    const t = a, { ctx: r } = this[t(1050)](x), e = r[t(2887)];
    return this[t(880)][t(190)][t(1908)]({ data: e, path: r.path, parent: r });
  }
  [a(2486)]() {
    const x = a;
    return this._def[x(190)];
  }
}
class oa extends Fe {
  [a(1908)](x) {
    const t = a, { status: r, ctx: e } = this[t(1050)](x);
    if (e[t(1249)][t(418)])
      return (async () => {
        const n = t, i = await this[n(880)].in[n(1810)]({ data: e.data, path: e.path, parent: e });
        return i[n(2745)] === "aborted" ? he : i[n(2745)] === n(973) ? (r.dirty(), Q0(i[n(998)])) : this[n(880)][n(446)][n(1810)]({ data: i[n(998)], path: e[n(2475)], parent: e });
      })();
    {
      const s = this[t(880)].in._parseSync({ data: e.data, path: e[t(2475)], parent: e });
      return s[t(2745)] === "aborted" ? he : s[t(2745)] === t(973) ? (r[t(973)](), { status: t(973), value: s[t(998)] }) : this[t(880)][t(446)][t(447)]({ data: s.value, path: e[t(2475)], parent: e });
    }
  }
  static [a(2469)](x, t) {
    return new oa({ in: x, out: t, typeName: pe.ZodPipeline });
  }
}
class Ix extends Fe {
  [a(1908)](x) {
    const t = a, r = this[t(880)][t(2817)]._parse(x), e = (s) => {
      const n = t;
      return V0(s) && (s[n(998)] = Object[n(1230)](s[n(998)])), s;
    };
    return bx(r) ? r[t(723)]((s) => e(s)) : e(r);
  }
  unwrap() {
    const x = a;
    return this[x(880)][x(2817)];
  }
}
Ix[a(2469)] = (o, x) => {
  const t = a;
  return new Ix({ innerType: o, typeName: pe[t(255)], ...ve(x) });
};
function Oa(o, x) {
  const t = a, r = typeof o === t(1235) ? o(x) : typeof o === t(1653) ? { message: o } : o;
  return typeof r == "string" ? { message: r } : r;
}
function po(o, x = {}, t) {
  const r = a;
  return o ? ax[r(2469)]()[r(2387)]((e, s) => {
    const n = r, i = o(e);
    if (i instanceof Promise) return i[n(723)]((c) => {
      const u = n;
      if (!c) {
        const d = Oa(x, e), l = d[u(1004)] ?? t ?? !0;
        s.addIssue({ code: "custom", ...d, fatal: l });
      }
    });
    if (!i) {
      const c = Oa(x, e), u = c[n(1004)] ?? t ?? !0;
      s[n(704)]({ code: n(1893), ...c, fatal: u });
    }
  }) : ax[r(2469)]();
}
var pe;
(function(o) {
  const x = a;
  o[x(1054)] = "ZodString", o[x(1008)] = x(1008), o.ZodNaN = "ZodNaN", o[x(1143)] = x(1143), o[x(2767)] = x(2767), o[x(1065)] = x(1065), o[x(2651)] = x(2651), o[x(1032)] = x(1032), o[x(2593)] = x(2593), o[x(1256)] = x(1256), o[x(1089)] = x(1089), o[x(2419)] = "ZodNever", o.ZodVoid = x(406), o[x(213)] = x(213), o[x(1183)] = "ZodObject", o[x(1707)] = x(1707), o[x(1365)] = x(1365), o[x(1551)] = x(1551), o[x(2800)] = x(2800), o[x(2284)] = x(2284), o.ZodMap = x(656), o[x(1958)] = "ZodSet", o[x(1538)] = "ZodFunction", o[x(1252)] = x(1252), o[x(2677)] = x(2677), o.ZodEnum = "ZodEnum", o[x(2787)] = x(2787), o[x(847)] = x(847), o[x(1480)] = x(1480), o[x(488)] = "ZodNullable", o[x(2109)] = x(2109), o[x(722)] = x(722), o[x(2012)] = x(2012), o[x(720)] = "ZodBranded", o.ZodPipeline = x(1837), o.ZodReadonly = x(255);
})(pe || (pe = {}));
const Ux = (o, x = { message: a(1730) + o[a(2481)] }) => po((t) => t instanceof o, x), g = v0[a(2469)], Z = B0[a(2469)], ee = Ht[a(2469)], qe = ax[a(2469)], S0 = Bt[a(2469)];
R0[a(2469)];
const Hx = Wt[a(2469)], we = h0[a(2469)], S = Ze.create, Ke = yx[a(2469)], zs = na[a(2469)];
vx.create, O0.create;
const De = wx[a(2469)], te = Sx[a(2469)], Re = D0.create;
kx.create;
const B = w0[a(2469)];
j0[a(2469)];
var as, rs;
class mo {
  constructor(x, t) {
    me(this, rs);
    me(this, as);
    const r = a;
    this[r(2261)] = x, this[r(2205)] = t;
  }
  get store() {
    const x = a, t = this.graphInstance[x(1499)](this[x(2205)]);
    if (!t) throw new Error(x(2272) + this[x(2205)]);
    return t;
  }
  get [(rs = a(2261), as = a(2205), a(2584))]() {
    const x = a, t = this[x(2261)][x(2228)]()[x(1234)](this[x(2205)]);
    if (!t) throw new Error(x(1211) + this[x(2205)]);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s !== n(1653)) return;
      const i = t[n(2584)][s], c = s[n(533)]("__internal_");
      if (!i && !c) throw new Error("Action " + s + " not found for node " + this[n(2205)]);
      return async (u, d) => {
        const l = n, f = this[l(336)]();
        if (!f) throw new Error(l(2590) + this[l(2205)]);
        const { transport: b, path: h } = f, m = this[l(2261)][l(1384)]();
        if (!(i != null && i[l(1708)])) {
          const k = qe();
          let E;
          if (h[l(1332)] === 2) E = await b[l(2752)]({ method: l(1690), params: { action: s, data: u, sourceNodeId: m } }, k);
          else try {
            E = await b[l(2752)]({ method: l(1690), params: { action: l(1334), data: { targetNodeId: this.nodeId, targetAction: s, targetData: u, forwardPath: h[l(2103)](1) }, sourceNodeId: m } }, k);
          } catch (q) {
            throw console[l(2265)]("Error in direct request " + s + ":", q), console.error({ targetNodeId: this[l(2205)], targetAction: s, targetData: u, forwardPath: h[l(2103)](1) }), q;
          }
          return E;
        }
        let v;
        return h[l(1332)] === 2 ? v = b[l(2870)]({ action: s, data: u, sourceNodeId: m }, i[l(1603)], d) : v = b.streamRequest({ action: l(1334), data: { targetNodeId: this[l(2205)], targetAction: s, targetData: u, forwardPath: h[l(2103)](1) }, sourceNodeId: m }, i[l(1603)], d), v;
      };
    } });
  }
  [a(336)]() {
    const x = a;
    return this[x(2261)][x(797)](this.nodeId);
  }
}
var ss;
class Vs {
  constructor(x) {
    me(this, ss);
    me(this, "actionManager");
    me(this, "broadcastManager");
    const t = a;
    this.graphInstance = x, this.actionManager = x[t(2111)], this[t(1697)] = x[t(1697)];
  }
  [(ss = a(2261), a(645))]({ store: x, storeName: t, onStateUpdate: r, requestInitialState: e }) {
    const s = a;
    this.broadcastManager[s(2465)]("store:update:" + t, (n) => {
      const i = s;
      try {
        n[i(1768)] !== this[i(2261)].getCurrentNodeId() && r(n[i(1991)]);
      } catch (c) {
        console[i(2265)](i(2105) + t + ":", c);
      }
    });
  }
  [a(717)]({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: e }) {
    const s = a, n = this.graphInstance[s(1384)](), i = async (d, l = !1) => {
      const f = s;
      if (this[f(2090)]()) try {
        await this.broadcastManager[f(2198)](f(304) + t, { storeName: t, sourceNodeId: n, stateUpdate: d, isInitialState: l });
      } catch (h) {
        console.error(f(1336) + t + ":", h);
      }
    }, c = x.subscribe((d) => {
      i(d, !1);
    });
    e(() => {
      i(x[s(1357)](), !0);
    });
    const u = "__internal_requestInitialState_" + t;
    return this[s(2111)][s(2785)](u, async () => {
      const d = s, l = x[d(1357)]();
      return await i(l, !0), { success: !0 };
    }), this[s(1697)][s(2465)](s(2501), async (d) => {
      const l = s;
      try {
        (d.toNode === n || d.fromNode === n) && await i(x[l(1357)](), !0);
      } catch {
      }
    }), () => {
      var l;
      const d = s;
      c(), (l = this.actionManager[d(1987)]) == null || l.delete(u);
    };
  }
  [a(2090)]() {
    var t;
    const x = a;
    try {
      const r = this[x(2261)][x(1541)], e = r && r[x(1224)]() > 0, s = ((t = this[x(1697)][x(2413)]) == null ? void 0 : t[x(2187)]) > 0;
      return e || s;
    } catch {
      return !!this.broadcastManager;
    }
  }
  async broadcastCurrentState(x, t) {
    const r = a, e = this[r(2261)][r(1384)]();
    if (this[r(2090)]()) try {
      await this.broadcastManager[r(2198)](r(304) + t, { storeName: t, sourceNodeId: e, stateUpdate: x[r(1357)](), isInitialState: !0 });
    } catch {
    }
  }
}
function bo({ graphInstance: o, store: x, name: t }) {
  const r = a, e = new Vs(o), s = (i) => {
    const c = K, u = x[c(1357)](), d = { ...u, ...i };
    x[c(2276)](d);
  }, n = async () => {
    const i = K, c = i(187) + t;
    try {
      const u = o[i(1234)](t);
      u && u[i(2584)] && u[i(2584)][c] && await u[i(2584)][c]();
    } catch (u) {
      console[i(196)]("Failed to request initial state for " + t + ":", u);
    }
  };
  e[r(645)]({ store: x, storeName: t, onStateUpdate: s, requestInitialState: n });
}
function go({ graphInstance: o, store: x, name: t }) {
  const r = a, e = new Vs(o), s = async (i) => {
  }, n = (i) => {
  };
  return e[r(717)]({ store: x, storeName: t, sendStateUpdate: s, onInitialStateRequested: n });
}
var ns, os;
class yo {
  constructor(x) {
    me(this, os, /* @__PURE__ */ new Map());
    me(this, ns, /* @__PURE__ */ new Map());
    me(this, "mountedTransports", /* @__PURE__ */ new Set());
    me(this, "currentNodeId");
    this.currentNodeId = x;
  }
  createGlobalDispatcherForType(x) {
    return (t) => {
      const r = K;
      if (t && t[r(1985)] === this[r(1066)]) return;
      const e = this[r(1492)][r(1094)](x);
      if (e) {
        const { __origin: s, forwarded: n, ...i } = t || {};
        for (const c of e)
          try {
            c(i);
          } catch (u) {
            console[r(2265)](r(2503) + x + ":", u);
          }
      }
      !t[r(281)] && this[r(1082)](x, t);
    };
  }
  async [(os = a(1492), ns = a(2131), a(1082))](x, t) {
    const r = a;
    try {
      const e = { ...t, forwarded: !0 }, s = [...Array[r(2280)](this[r(2131)][r(1573)]()), ...Array[r(2280)](this[r(276)])], n = s[r(2742)]((i) => {
        const c = r;
        return i.notification({ method: c(279), params: { messageType: x, message: e } })[c(1539)]((u) => {
          const d = c;
          console[d(2265)](d(1975) + x + ":", u);
        });
      });
      await Promise[r(1288)](n);
    } catch (e) {
      console[r(2265)](r(312), e);
    }
  }
  [a(2465)](x, t) {
    const r = a;
    !this[r(1492)][r(441)](x) && this[r(1492)][r(1750)](x, /* @__PURE__ */ new Set()), this[r(1492)][r(1094)](x).add(t);
  }
  setupTransportHandlers(x) {
    this[a(2325)](x);
  }
  [a(2325)](x) {
    const t = a, r = S({ method: te(t(279)), params: S({ messageType: g(), message: qe() }) });
    x[t(259)](r, async (e) => {
      const s = t, n = e[s(1133)][s(823)];
      this.createGlobalDispatcherForType(n)(e[s(1133)].message);
    });
  }
  addMiddleware(x, t) {
    const r = a;
    this[r(2131)][r(1750)](x, t), this.setupTransportHandlers(t);
  }
  [a(1363)](x) {
    const t = a;
    this[t(2131)][t(882)](x);
  }
  async broadcast(x, t) {
    const r = a, e = [...Array.from(this[r(2131)][r(1573)]()), ...Array[r(2280)](this[r(276)])], s = e[r(2742)]((n) => {
      const i = r;
      return n[i(2071)]({ method: i(279), params: { messageType: x, message: t } });
    });
    await Promise.all(s);
  }
  [a(1921)](x) {
    const t = a;
    this[t(276)][t(479)](x), this[t(319)](x);
  }
  [a(2434)]() {
    const x = a;
    return Array[x(2280)](this[x(1492)][x(1806)]());
  }
  clear() {
    const x = a;
    this[x(1492)][x(2254)](), this[x(2131)][x(2254)](), this[x(276)][x(2254)]();
  }
}
var is, cs, us, ds;
class vo {
  constructor(x, t, r) {
    me(this, ds, /* @__PURE__ */ new Map());
    me(this, us);
    me(this, cs);
    me(this, is);
    const e = a;
    this[e(1259)] = x, this.currentNodeId = t, this[e(1131)] = r;
  }
  [(ds = a(1987), us = a(1259), cs = a(1066), is = a(1131), a(2847))](x, t) {
    const r = a, e = this[r(1259)][r(1234)](this[r(1066)]);
    if (!e) throw new Error("Node definition not found for " + this[r(1066)]);
    const s = e[r(2584)][x];
    if (!s) throw new Error("Action " + String(x) + " not found for node " + this[r(1066)]);
    this[r(581)](x, t, s), this[r(1987)][r(1750)](x, t);
  }
  [a(581)](x, t, r) {
    r[a(1708)];
  }
  [a(2785)](x, t) {
    const r = a;
    this[r(1987)][r(1750)](x, t);
  }
  [a(1921)](x) {
    const t = a;
    for (const [r, e] of this[t(1987)]) {
      const s = this[t(1259)][t(1234)](this[t(1066)]), n = s == null ? void 0 : s[t(2584)][r];
      if (r.startsWith("__internal_") ? !1 : (n == null ? void 0 : n.stream) === !0) {
        const u = S({ action: te(r) });
        x[t(2052)](u, async function* (d, l, f) {
          const b = t, h = d[b(2887)] || d, m = e(h, l, f);
          if (m && typeof m === b(2844) && Symbol[b(2028)] in m) for await (const v of m)
            yield v === void 0 ? {} : v;
          else {
            const v = await m;
            yield v === void 0 ? {} : v;
          }
        });
      }
    }
    this[t(1338)](x), this[t(851)](x);
  }
  [a(1338)](x) {
    const t = a, r = S({ action: te(t(1334)) }), e = this;
    x.registerStreamRequestorHandler(r, async function* (s, n, i) {
      const c = t, u = s[c(2887)] || s, { targetNodeId: d, targetAction: l, targetData: f, forwardPath: b } = u;
      if (!b || b[c(1332)] === 0) throw new Error(c(1650));
      const h = b[0], m = b[c(2103)](1);
      if (m[c(1332)] === 0 && h === e[c(1066)]) {
        const v = e.actionHandlers[c(1094)](l);
        if (!v) throw new Error(c(959) + l + c(185) + e[c(1066)]);
        const k = v(f, n, i);
        if (k && typeof k === c(2844) && Symbol[c(2028)] in k) for await (const E of k)
          yield E === void 0 ? {} : E;
        else {
          const E = await k;
          yield E === void 0 ? {} : E;
        }
        return;
      }
      if (h === e[c(1066)] && m[c(1332)] > 0) {
        const v = m[0], k = e[c(1131)](v);
        if (k) {
          const E = await k[c(2870)]({ action: c(1334), data: { targetNodeId: d, targetAction: l, targetData: f, forwardPath: m } }, S({}), i);
          for await (const q of E)
            yield q === void 0 ? {} : q;
          return;
        }
        throw new Error("Cannot forward to node " + v + c(1407));
      }
      throw new Error(c(2313) + e[c(1066)] + c(1038) + b);
    });
  }
  getRegisteredActions() {
    const x = a;
    return Array[x(2280)](this[x(1987)][x(1806)]());
  }
  [a(2725)](x) {
    const t = a;
    return this[t(1987)][t(441)](x);
  }
  getHandler(x) {
    const t = a;
    return this[t(1987)][t(1094)](x);
  }
  [a(2254)]() {
    const x = a;
    this[x(1987)][x(2254)]();
  }
  [a(470)](x, t, r) {
  }
  [a(851)](x) {
    const t = a, r = S({ method: te(t(1690)), params: S({ action: g(), data: qe()[t(2033)]() }) }), e = this;
    x[t(1741)](r, async (s, n) => {
      const i = t, { action: c, data: u } = s.params;
      if (c === i(1334)) return await e.handleDirectProxyForward(u, n);
      const d = e[i(1987)][i(1094)](c);
      if (!d) throw new Error(i(959) + c + i(185) + e.currentNodeId);
      const l = d(u, n), f = await l;
      return f === void 0 ? {} : f;
    });
  }
  async [a(1902)](x, t) {
    const r = a, { targetNodeId: e, targetAction: s, targetData: n, forwardPath: i } = x;
    if (!i || i.length === 0) throw new Error(r(1650));
    const c = i[0], u = i[r(2103)](1);
    if (u[r(1332)] === 0 && c === this.currentNodeId) {
      const d = this[r(1987)][r(1094)](s);
      if (!d) throw new Error(r(959) + s + r(185) + this[r(1066)]);
      const l = d(n, t), f = await l;
      return f === void 0 ? {} : f;
    }
    if (c === this.currentNodeId && u.length > 0) {
      const d = u[0], l = this[r(1131)](d);
      if (l) return await l[r(2752)]({ method: r(1690), params: { action: r(1334), data: { targetNodeId: e, targetAction: s, targetData: n, forwardPath: u } } }, qe());
      throw new Error(r(1321) + d + r(1407));
    }
    throw new Error(r(2313) + this.currentNodeId + r(1038) + i);
  }
}
var ls, fs, hs;
class wo {
  constructor(x, t) {
    me(this, hs);
    me(this, fs);
    me(this, ls, /* @__PURE__ */ new Set());
    const r = a;
    this[r(1259)] = x, this[r(1066)] = t;
  }
  markConnected(x) {
    this[a(921)].add(x);
  }
  [(hs = a(1259), fs = a(1066), ls = a(921), a(771))](x) {
    const t = a;
    this[t(921)][t(882)](x);
  }
  [a(1675)](x) {
    return this[a(921)].has(x);
  }
  [a(896)](x, t) {
    const r = a;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), s = [{ nodeId: x, path: [x] }];
    for (; s[r(1332)] > 0; ) {
      const { nodeId: n, path: i } = s.shift();
      if (e[r(441)](n)) continue;
      e[r(479)](n);
      const c = this.definition.getNeighbors(n);
      for (const u of c) {
        if (u === t) return [...i, u];
        !e[r(441)](u) && s[r(902)]({ nodeId: u, path: [...i, u] });
      }
    }
  }
  [a(588)]() {
    return Array.from(this[a(921)]);
  }
  [a(1224)]() {
    const x = a;
    return this[x(921)][x(2187)];
  }
  [a(1867)]() {
    const x = a, t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), e = [this[x(1066)]];
    for (r[x(479)](this[x(1066)]); e.length > 0; ) {
      const s = e.shift(), n = this[x(1259)][x(1084)](s);
      for (const i of n)
        !r[x(441)](i) && (r.add(i), (this[x(921)][x(441)](i) || this[x(1547)](i, r)) && (t.add(i), e[x(902)](i)));
    }
    return Array[x(2280)](t);
  }
  [a(1547)](x, t) {
    const r = a, e = this[r(896)](this[r(1066)], x);
    if (!e || e[r(1332)] <= 1) return !1;
    for (let s = 1; s < e.length - 1; s++)
      if (!this[r(921)][r(441)](e[s])) return !1;
    return !0;
  }
  clear() {
    this[a(921)].clear();
  }
}
var ps, ms, bs, gs, ys, vs, ws;
class So {
  constructor(x, t) {
    me(this, ws);
    me(this, vs);
    me(this, ys, /* @__PURE__ */ new Map());
    me(this, gs, /* @__PURE__ */ new Map());
    me(this, bs);
    me(this, ms);
    me(this, ps);
    me(this, "nodeTransports", /* @__PURE__ */ new Map());
    const r = a;
    this[r(1259)] = x, this[r(1066)] = t, this[r(2652)](), this[r(1697)] = new yo(t), this[r(2111)] = new vo(x, t, (e) => this[r(1670)](e)), this[r(1541)] = new wo(x, t), this.setupGraphStoreSync();
  }
  [(ws = a(1259), vs = a(1066), ys = a(1476), gs = a(1161), bs = a(1697), ms = a(2111), ps = a(1541), a(2652))]() {
    const x = a;
    for (const t of this[x(1259)][x(2025)]()) {
      const r = this[x(1259)].getNode(t);
      if (r && r[x(2277)]) {
        const e = this[x(927)](r[x(2277)]), s = Hn(() => e);
        this[x(1476)][x(1750)](t, s);
      }
    }
  }
  [a(927)](x) {
    const t = a;
    if (!x) return {};
    try {
      return x[t(429)]({});
    } catch {
      return this.manuallyExtractDefaults(x);
    }
  }
  manuallyExtractDefaults(x) {
    const t = a;
    if (!x || !x.def) return {};
    if (x[t(1116)][t(190)] === t(2222)) {
      const r = x[t(1116)][t(397)];
      return typeof r === t(1235) ? r() : r;
    }
    if (x[t(1116)].type === t(2844)) {
      const r = {};
      let e;
      try {
        e = x[t(1116)].shape;
      } catch {
        return {};
      }
      if (e) for (const [s, n] of Object[t(2700)](e)) {
        const i = this[t(1666)](n);
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
        return x[t(429)](void 0);
      } catch {
        return this[t(231)](x);
      }
  }
  async [a(1651)](x, t) {
    const r = a;
    if (!this[r(1259)][r(1520)](this[r(1066)], x)) throw new Error("No edge defined from " + this[r(1066)] + " to " + x);
    if (this[r(321)][r(441)](x)) throw new Error("Already connected to node " + x);
    try {
      this[r(321)][r(1750)](x, t), this.connectionManager[r(1531)](x), this[r(2370)](x, t), await this[r(387)](x), await this[r(931)](x);
    } catch (e) {
      throw this[r(1808)](x), e;
    }
  }
  disconnect(x) {
    this[a(1808)](x);
  }
  async syncStoresToNewConnection(x) {
    const t = a;
    await new Promise((r) => setTimeout(r, 100));
    for (const [r, e] of this.nodeStores)
      if (r === this[t(1066)]) try {
        await this[t(1697)].broadcast(t(304) + r, { storeName: r, sourceNodeId: this[t(1066)], stateUpdate: e[t(1357)](), isInitialState: !0 });
      } catch {
      }
    try {
      await this.broadcastManager[t(2198)](t(2501), { fromNode: this[t(1066)], toNode: x });
    } catch {
    }
  }
  async [a(931)](x) {
    const t = a;
    try {
      const r = this[t(1541)][t(1867)]();
      for (const e of r)
        try {
          const s = t(187) + e, n = this[t(1234)](e);
          if (n && n.actions && n[t(2584)][s]) {
            const i = n[t(2584)][s]({});
            await Promise[t(685)]([i, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (s) {
          console[t(1872)](t(2748) + e + ":", s);
        }
    } catch (r) {
      console[t(1872)]("Failed to request initial states after connecting to " + x + ":", r);
    }
  }
  cleanupConnection(x) {
    const t = a, r = this[t(321)].get(x);
    this[t(321)][t(882)](x), this.connectionManager[t(771)](x), this[t(1697)][t(1363)](x), r && r[t(2050)]();
  }
  setupNodeBindings(x, t) {
    const r = a;
    if (!this[r(1476)].get(this[r(1066)])) throw new Error(r(1929) + this[r(1066)]);
    this.actionManager[r(1921)](t), this[r(1697)][r(2867)](x, t);
  }
  [a(870)]() {
    const x = a;
    for (const [t, r] of this[x(1476)])
      t === this.currentNodeId ? go({ graphInstance: this, store: r, name: t }) : bo({ graphInstance: this, store: r, name: t });
  }
  [a(1234)](x) {
    const t = a;
    if (!this[t(1161)].has(x)) {
      const r = new mo(this, x);
      this[t(1161)][t(1750)](x, r);
    }
    return this[t(1161)][t(1094)](x);
  }
  [a(1670)](x) {
    const t = a;
    return this.nodeTransports[t(1094)](x);
  }
  [a(797)](x) {
    const t = a, r = this[t(321)][t(1094)](x);
    if (r) return { transport: r, path: [this[t(1066)], x] };
    const e = this[t(2212)](this[t(1066)], x);
    if (e && e[t(1332)] > 1) {
      const s = e[1], n = this.nodeTransports[t(1094)](s);
      if (n) return { transport: n, path: e };
    }
  }
  [a(1499)](x) {
    return this[a(1476)].get(x);
  }
  get store() {
    const x = a, t = this[x(1476)][x(1094)](this[x(1066)]);
    if (!t) throw new Error("Store not found for current node " + this[x(1066)]);
    return t;
  }
  get [a(2584)]() {
    const x = a, t = this.definition[x(1234)](this[x(1066)]);
    if (!t) throw new Error(x(682) + this.currentNodeId);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s !== n(1653)) return;
      const i = t.actions[s];
      if (!i) throw new Error(n(959) + s + n(1144) + this[n(1066)]);
      return (c, u) => {
        const d = n, l = this[d(2111)][d(435)](s);
        if (!l) throw new Error(d(545) + s + d(862) + this[d(1066)]);
        const f = { nodeId: this.currentNodeId };
        if (i[d(1708)] === !0) {
          const b = l(c, f, u);
          return b && typeof b === d(2844) && Symbol[d(2028)] in b ? (async function* () {
            for await (const h of b)
              yield h === void 0 ? {} : h;
          })() : (async function* () {
            const h = await b;
            yield h === void 0 ? {} : h;
          })();
        } else return (async () => {
          const b = d, h = l(c, f, u);
          if (h && typeof h === b(2844) && Symbol[b(2028)] in h) {
            const m = h[Symbol[b(2028)]](), v = await m[b(204)]();
            return v.value === void 0 ? {} : v[b(998)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [a(2228)]() {
    return this[a(1259)];
  }
  [a(1384)]() {
    return this[a(1066)];
  }
  [a(2711)](x) {
    return this[a(797)](x);
  }
  [a(2847)](x, t) {
    this.actionManager.implementAction(x, t);
  }
  destroy() {
    const x = a, t = Array[x(2280)](this[x(321)].keys());
    for (const r of t)
      this.cleanupConnection(r);
    this[x(1697)][x(2254)](), this[x(2111)][x(2254)](), this[x(1541)].clear();
  }
  [a(2212)](x, t) {
    const r = a;
    return this.connectionManager[r(896)](x, t);
  }
  findPath(x, t) {
    return this[a(2212)](x, t);
  }
  async [a(2198)](x, t) {
    const r = a, e = { ...t, __origin: this.currentNodeId };
    return this[r(1697)].broadcast(x, e);
  }
  [a(1879)](x, t) {
    this[a(1697)].registerHandler(x, t);
  }
}
function ko(o) {
  const x = new Un(o);
  return { joinAs(t) {
    const r = K;
    if (!x[r(1234)](t)) throw new Error("Node " + String(t) + r(1719));
    return new So(x, t);
  }, getDefinition() {
    return o;
  }, getNodeIds() {
    return x[K(2025)]();
  }, getNeighbors(t) {
    return x[K(1084)](t);
  }, hasEdge(t, r) {
    return x[K(1520)](t, r);
  }, hasPath(t, r) {
    return x.hasPath(t, r);
  }, findPath(t, r) {
    return x.findPath(t, r);
  } };
}
const Da = { INTERCEPTOR_ERROR: a(1304) };
var Ss, ks, Ps;
class ja extends (Ps = Error, ks = a(190), Ss = a(2687), Ps) {
  constructor(t, r, e, s) {
    const n = a;
    super(e);
    me(this, ks);
    me(this, "method");
    me(this, Ss);
    this[n(2481)] = n(2680), this[n(190)] = t, this.method = r, this.originalError = s;
  }
}
var Es, Is, Cs, Rs, Fs, Ns, Ts, qs;
class Po {
  constructor(x, t = {}) {
    me(this, qs);
    me(this, "realTransport", null);
    me(this, Ts);
    me(this, "requestHandlers", /* @__PURE__ */ new Map());
    me(this, "notificationHandlers", /* @__PURE__ */ new Map());
    me(this, Ns, /* @__PURE__ */ new Map());
    me(this, Fs, /* @__PURE__ */ new Map());
    me(this, Rs, []);
    me(this, Cs, []);
    me(this, Is, []);
    me(this, Es, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    const r = a;
    this[r(1873)] = x, this[r(961)] = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async [(qs = a(1873), Ts = a(961), Ns = a(2035), Fs = a(1856), Rs = a(1696), Cs = a(159), Is = a(798), Es = a(2395), a(1651))](x) {
    const t = a;
    this[t(1684)] = x, x[t(1770)] = (r) => {
      this[t(179)](r);
    }, x[t(2427)] = () => {
      const r = t;
      this[r(159)][r(1953)]((e) => e());
    }, x.onerror = (r) => {
      const e = t;
      this.errorHandlers[e(1953)]((s) => s(r));
    }, await this.protocol[t(1651)](this);
  }
  async [a(179)](x) {
    const t = a;
    this[t(1872)](t(2264), t(2293), x);
    try {
      if (this[t(1205)](x) && await this[t(2897)](x) || this[t(1694)](x) && await this.handleIncomingNotification(x))
        return;
      this.messageHandlers[t(1953)]((r) => r(x));
    } catch (r) {
      this[t(2395)][t(638)]++, this[t(1872)](t(2265), t(2436), r), this.messageHandlers[t(1953)]((e) => e(x));
    }
  }
  async [a(2897)](x) {
    const t = a, r = this[t(1699)][t(1094)](x.method);
    if (!r) return !1;
    try {
      this[t(2395)][t(2202)]++;
      const e = await r(x, {});
      return this[t(1684)] && "id" in x && await this.realTransport[t(1779)]({ jsonrpc: t(2581), id: x.id, result: e }), !0;
    } catch (e) {
      return this[t(2395)][t(638)]++, this[t(1684)] && "id" in x && await this[t(1684)].send({ jsonrpc: "2.0", id: x.id, error: { code: -32603, message: t(1941) + JSON[t(306)](x[t(1133)]) + " " + e[t(615)] } }), !0;
    }
  }
  async handleIncomingNotification(x) {
    const t = a, r = this[t(1040)][t(1094)](x[t(849)]);
    if (!r) return !1;
    try {
      return this[t(2395)][t(390)]++, await r(x), !0;
    } catch (e) {
      return this[t(2395)][t(638)]++, this[t(1872)](t(2265), t(1216) + x[t(849)] + ":", e), !0;
    }
  }
  async send(x) {
    const t = a;
    this[t(1872)](t(2264), "Outgoing message:", x);
    try {
      if (this[t(1205)](x)) {
        const r = await this[t(2537)](x);
        if (r.success) {
          if (r.result === null) return;
          r[t(1792)] && (x = { ...r[t(1792)], jsonrpc: "2.0" }, this[t(2395)][t(1166)]++);
        } else if (this.options[t(2712)]) this[t(1872)](t(196), t(1945) + x[t(849)] + ":", r[t(2265)]);
        else throw r[t(2265)];
      }
      if (this.isNotification(x)) {
        const r = await this[t(1994)](x);
        if (r[t(2072)]) {
          if (r.result === null) return;
          r[t(1792)] && (x = { ...r[t(1792)], jsonrpc: t(2581) }, this.stats[t(1118)]++);
        } else if (this.options[t(2712)]) this[t(1872)](t(196), t(236) + x[t(849)] + ":", r[t(2265)]);
        else throw r[t(2265)];
      }
      this[t(1684)] && await this[t(1684)][t(1779)](x);
    } catch (r) {
      throw this.stats[t(638)]++, r;
    }
  }
  async [a(2540)]() {
    const x = a;
    this.realTransport && await this[x(1684)][x(2540)]();
  }
  async [a(639)]() {
    const x = a;
    this[x(1684)] && await this[x(1684)].close();
  }
  set [a(1770)](x) {
    const t = a;
    this[t(1696)] = [x];
  }
  set [a(2427)](x) {
    this.closeHandlers = [x];
  }
  set [a(860)](x) {
    const t = a;
    this[t(798)] = [x];
  }
  async executeOutgoingRequestInterceptor(x) {
    const t = a, r = this[t(2035)].get(x[t(849)]);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1083)](r(x), this[t(961)][t(301)]) };
    } catch (e) {
      return this[t(2395)][t(638)]++, { success: !1, error: new ja(Da[t(1341)], x.method, t(434) + e[t(615)], e) };
    }
  }
  async [a(1994)](x) {
    const t = a, r = this[t(1856)][t(1094)](x[t(849)]);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this.withTimeout(r(x), this.options[t(301)]) };
    } catch (e) {
      return this[t(2395)][t(638)]++, { success: !1, error: new ja(Da[t(1341)], x.method, "Outgoing notification interceptor failed: " + e.message, e) };
    }
  }
  async request(x, t) {
    const r = a;
    return await this[r(1873)][r(2752)](x, t, { timeout: 36e5 });
  }
  async notification(x) {
    const t = a;
    return await this[t(1873)][t(2071)](x);
  }
  setRequestHandler(x, t) {
    const r = a, e = x[r(876)][r(849)][r(998)];
    this[r(1699)][r(1750)](e, t);
  }
  setNotificationHandler(x, t) {
    const r = a, e = x[r(876)][r(849)].value;
    this[r(1040)][r(1750)](e, t);
  }
  setOutgoingRequestInterceptor(x, t) {
    const r = a, e = x[r(876)][r(849)][r(998)];
    this[r(2035)].set(e, t);
  }
  [a(561)](x, t) {
    const r = a, e = x.shape[r(849)].value;
    this[r(1856)][r(1750)](e, t);
  }
  [a(1300)](x) {
    const t = a;
    this.requestHandlers[t(882)](x);
  }
  [a(878)](x) {
    const t = a;
    this.notificationHandlers[t(882)](x);
  }
  unsetOutgoingRequestInterceptor(x) {
    const t = a;
    this.outgoingRequestInterceptors[t(882)](x);
  }
  unsetOutgoingNotificationInterceptor(x) {
    this[a(1856)].delete(x);
  }
  [a(2130)](x) {
    const t = a;
    return this.requestHandlers[t(441)](x);
  }
  hasNotificationHandler(x) {
    const t = a;
    return this[t(1040)][t(441)](x);
  }
  [a(2297)](x) {
    const t = a;
    return this.outgoingRequestInterceptors[t(441)](x);
  }
  [a(1215)](x) {
    return this[a(1856)].has(x);
  }
  [a(1753)]() {
    return { ...this[a(2395)] };
  }
  [a(1637)]() {
    const x = a;
    this[x(2395)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [a(812)]() {
    return this[a(1873)];
  }
  [a(2050)]() {
    const x = a;
    this[x(1699)][x(2254)](), this.notificationHandlers[x(2254)](), this[x(2035)].clear(), this[x(1856)].clear();
  }
  isRequest(x) {
    const t = a;
    return x[t(1846)] === t(2581) && "method" in x && "id" in x;
  }
  [a(1694)](x) {
    const t = a;
    return x[t(1846)] === t(2581) && t(849) in x && !("id" in x);
  }
  async [a(1083)](x, t) {
    const r = a, e = new Promise((s, n) => {
      const i = K;
      setTimeout(() => n(new Error(i(844))), t);
    });
    return await Promise[r(685)]([x, e]);
  }
  [a(1872)](x, t, ...r) {
    const e = a;
    if (!this[e(961)][e(2264)] && x === e(2264)) return;
    const s = e(2260);
    switch (x) {
      case "debug":
        console.debug(s, t, ...r);
        break;
      case e(713):
        console[e(713)](s, t, ...r);
        break;
      case "warn":
        console[e(196)](s, t, ...r);
        break;
      case e(2265):
        console[e(2265)](s, t, ...r);
        break;
    }
  }
}
S({ method: te("sdppp/streamResponse"), params: S({ requestId: g(), data: qe(), error: g().nullable(), finished: ee() }) }), S({ method: te("sdppp/streamRequest"), params: S({ action: g(), data: qe() }) }), S({ method: te(a(1019)), params: S({ requestId: g() }) });
const Eo = S({ method: te(a(1745)), params: S({ requestId: g(), data: qe(), error: g().nullable(), finished: ee() }) }), Io = S({ method: te(a(1374)), params: S({ action: g(), data: qe() }) }), Co = S({ method: te("sdppp/abort"), params: S({ requestId: g() }) });
var As, _s;
class Ro {
  constructor() {
    me(this, _s, /* @__PURE__ */ new Map());
    me(this, As, /* @__PURE__ */ new Map());
  }
  [(_s = a(2051), As = a(2775), a(902))](x) {
    const t = a, { requestId: r } = x.params, e = this[t(2051)][t(1094)](r) || [], s = this[t(2775)][t(1094)](r) || [];
    s.length > 0 ? s[t(2281)]()(x[t(1133)]) : (e[t(902)](x[t(1133)]), this[t(2051)][t(1750)](r, e));
  }
  async pop(x) {
    const t = a, r = this.queues[t(1094)](x) || [];
    return r[t(1332)] > 0 ? r[t(2281)]() : new Promise((e) => {
      const s = t, n = this[s(2775)].get(x) || [];
      n[s(902)](e), this.waiters[s(1750)](x, n);
    });
  }
  [a(2050)](x) {
    const t = a;
    this[t(2051)].delete(x), this[t(2775)].delete(x);
  }
}
var Os, Ds, js, Ms;
class Fo extends Po {
  constructor(t, r = {}) {
    const e = a;
    super(t, r);
    me(this, Ms, /* @__PURE__ */ new Map());
    me(this, js, 1);
    me(this, Ds, /* @__PURE__ */ new Map());
    me(this, Os, new Ro());
    this[e(2685)]();
  }
  [(Ms = a(2364), js = a(2895), Ds = a(2604), Os = a(1397), a(2685))]() {
    const t = a;
    this[t(2676)](), this[t(1890)](), this[t(2650)]();
  }
  [a(2676)]() {
    this.setNotificationHandler(Eo, async (t) => {
      this.notificationQueue.push(t);
    });
  }
  [a(1890)]() {
    const t = a;
    this[t(1741)](Co, async (r, e) => {
      const s = t, { requestId: n } = r.params, i = this.runningRequests[s(1094)](n);
      return i && (i[s(2693)](), this[s(2604)][s(882)](n)), { success: !0 };
    });
  }
  [a(2650)]() {
    const t = a;
    this[t(1741)](Io, async (r, e) => {
      const s = t, n = s(2006) + this[s(2895)]++, i = this[s(2364)][s(1094)](r.params.action);
      if (!i) throw new Error(s(1679) + r[s(1133)][s(1151)]);
      const c = new AbortController();
      return this[s(2604)][s(1750)](n, c), this[s(475)](n, i, r[s(1133)], e, c), { requestId: n };
    });
  }
  async [a(475)](t, r, e, s, n) {
    const i = a;
    try {
      const c = r(e, s, n.signal);
      for await (const u of c) {
        if (n[i(2634)].aborted) break;
        await this[i(2071)]({ method: i(1745), params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !n[i(2634)][i(2234)] && await this[i(2071)]({ method: i(1745), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n.signal[i(2234)] && await this[i(2071)]({ method: i(1745), params: { requestId: t, data: null, error: c[i(615)], finished: !0 } });
    } finally {
      this[i(2604)][i(882)](t);
    }
  }
  [a(2052)](t, r) {
    const e = a;
    this.streamRequestorHandlers[e(1750)](t.shape.action[e(998)], r);
  }
  async streamRequest(t, r, e) {
    const s = a;
    this[s(2227)](e);
    const n = await this[s(2401)](t), i = this[s(2654)](n), c = this.createStreamState();
    return this[s(2188)](i, c, n, e);
  }
  validateStreamRequestorRequest(t) {
    const r = a;
    if (t && t[r(2234)]) throw new Error(r(249));
  }
  async [a(2401)](t) {
    const r = a;
    return (await this.request({ method: r(1374), params: { action: t[r(1151)], data: t[r(2887)] } }, S({ requestId: g() })))[r(567)];
  }
  [a(2654)](t) {
    return this.notificationQueue;
  }
  [a(1286)]() {
    return { finished: !1, error: null };
  }
  [a(2188)](t, r, e, s) {
    const n = this;
    return { async *[Symbol.asyncIterator]() {
      const i = K;
      try {
        for (; !r[i(1912)] && !r[i(2265)]; ) {
          if (s && s[i(2234)])
            throw await n[i(2752)]({ method: "sdppp/abort", params: { requestId: e } }, S({ success: ee() })), new Error(i(1612));
          const c = await t[i(469)](e);
          if (c.error)
            throw r[i(2265)] = c[i(2265)], new Error(c[i(2265)]);
          if (c[i(1912)]) {
            r[i(1912)] = !0;
            break;
          }
          c[i(2887)] !== null && (yield c.data);
        }
      } finally {
        t.cleanup(e);
      }
    } };
  }
  [a(1572)]() {
    const t = a;
    return this[t(2604)][t(2187)];
  }
  async abortRequest(t) {
    const r = a, e = this.runningRequests[r(1094)](t);
    return e ? (e[r(2693)](), this[r(2604)][r(882)](t), !0) : !1;
  }
  [a(1599)]() {
    const t = a;
    for (const [r, e] of this[t(2604)])
      e[t(2693)]();
    this.runningRequests.clear();
  }
  [a(2050)]() {
    const t = a;
    super.cleanup(), this[t(1599)](), this[t(2364)].clear();
  }
}
S({ id: g(), method: g(), params: qe()[a(2033)](), traceId: g()[a(2033)]() }), S({ id: g(), result: qe().optional(), error: S({ code: Z(), message: g(), data: qe().optional() })[a(2033)]() }), S({ method: g(), params: qe()[a(2033)]() }), S({ method: te("sdppp/streamRequest"), params: S({ action: g(), data: qe() }) }), S({ method: te(a(1745)), params: S({ requestId: g(), data: qe()[a(2033)](), error: g()[a(2101)]()[a(2033)](), finished: ee()[a(2222)](!1) }) }), S({ method: te(a(1019)), params: S({ requestId: g() }) }), S({ method: te(a(279)), params: S({ messageType: g(), message: qe() }) });
function Bs(o) {
  const x = a;
  return o && o[x(1058)] && Object[x(1700)][x(1428)].call(o, x(2222)) ? o[x(2222)] : o;
}
const z0 = S({ leftDistance: Z(), topDistance: Z(), rightDistance: Z(), bottomDistance: Z(), width: Z(), height: Z() }), N0 = { name: g(), uiWeight: Z() }, No = S({ ...N0, outputType: te("images"), options: S({ required: ee(), maxCount: Z()[a(2033)](), maskMode: ee()[a(2033)]() }) }), To = S({ ...N0, outputType: te(a(2019)), options: S({ required: ee() }) }), qo = S({ ...N0, outputType: te("string"), options: S({ required: ee() }) }), Ao = S({ ...N0, outputType: te(a(1001)), options: S({ required: ee() }) }), _o = S({ ...N0, outputType: te(a(1206)), options: S({ required: ee(), min: Z().optional(), max: Z()[a(2033)](), step: Z()[a(2033)](), random: ee()[a(2033)](), slider: ee()[a(2033)]() }) }), Oo = S({ ...N0, outputType: te("combo"), options: S({ required: ee(), values: we(g()), labels: we(g())[a(2033)]() }) }), Do = S({ ...N0, outputType: te("segment"), options: S({ required: ee(), values: we(g()) }) }), jo = S({ ...N0, outputType: te("video"), options: S({ required: ee() }) }), Mo = zs("outputType", [No, To, qo, Ao, _o, Oo, Do, jo]), Lo = S({ id: g(), title: g(), widgets: we(Mo), uiWeightSum: Z() }), $o = S({ widgetableID: g(), widgetablePath: g(), nodes: De(g(), Lo), nodeIndexes: we(g()), note: g()[a(2033)](), options: De(g(), qe()) }), Uo = S({ widgetableStructure: $o[a(2222)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: De(g(), we(qe()))[a(2222)]({}), widgetableErrors: De(g(), g())[a(2222)]({}), queueSize: Z()[a(2222)](0), lastError: g()[a(2222)](""), progress: Z()[a(2222)](0), executingNodeTitle: g().default(""), executingNodeID: g().default(""), graphProgress: Z()[a(2222)](0), comfyUserToken: g()[a(2222)](""), comfyOrgLoggedIn: ee()[a(2222)](!1), comfyOrgAPIKey: g()[a(2222)](""), comfyWSState: Re([a(1951), a(2100)]).default(a(1951)), lastRunTime: Z()[a(2222)](0) }), Ho = S({ bannerData: qe()[a(2033)](), refreshable: ee()[a(2222)](!1), backwardable: ee().default(!1), loginable: ee()[a(2222)](!1), runnable: ee()[a(2222)](!1), workBoundaries: De(Z(), z0).default({}), workBoundaryMaxSizes: De(Z(), Z()).default({}) }), zo = S({ uname: g()[a(2222)](""), activeDocumentID: Z()[a(2222)](0), layers: we(S({ id: Z(), name: g(), identify: g() })).default([]), actions: we(g())[a(2222)]([]), theme: g().default(a(1888)), sdpppX: De(g(), qe()).default({}), locale: Re([a(359), "en-US"])[a(2222)](a(536)), comfyWebviewConnectStatus: Re([a(1627), "connected", a(482)])[a(2222)](a(482)), comfyWebviewLoadError: g()[a(2222)](""), comfyWebviewLoading: ee()[a(2222)](!1), comfyWebviewVersion: g().default(""), comfyHTTPCode: Z()[a(2222)](200), comfyURL: g()[a(2222)](""), sdkWebviewFocusing: ee()[a(2222)](!1), sdkWebviewConnectStatus: Re([a(1627), a(1951), a(482)]).default("disconnected"), isLogin: ee()[a(2222)](!1), isGuest: ee()[a(2222)](!1), requestingLogin: ee()[a(2222)](!1), loginMessage: g()[a(2222)](""), token: g()[a(2222)](""), userInfo: De(g(), qe())[a(2222)]({}), taskLastRun: Z().default(0), canvasStateID: Z()[a(2033)](), selectionStateID: g()[a(2033)](), selectionBoundary: z0[a(2101)]()[a(2033)]() }), Vo = { setNodeTitle: { requestSchema: S({ node_id: g(), title: g() }), responseSchema: S({ success: ee() }) }, reboot: { requestSchema: S({}), responseSchema: S({ success: ee(), error: g()[a(2033)]() }) }, setComfyOrgAPIKey: { requestSchema: S({ api_key: g() }), responseSchema: S({ success: ee() }) }, logout: { requestSchema: S({}), responseSchema: S({ success: ee() }) }, uploadComfyImageFromUXP: { requestSchema: S({ fileName: g(), overwrite: ee().optional(), mimeType: g()[a(2033)](), dataBase64: g() }), responseSchema: S({ name: g() }) }, sdpppHandshake: { requestSchema: S({ hostVersion: g()[a(2033)]() }), responseSchema: S({ comfyVersion: g(), hostVersion: g()[a(2033)]() }) } }, Bo = S({ workflows: we(g()), error: g()[a(2033)]() }), Wo = S({ success: ee(), nodeErrors: De(g())[a(2033)](), prompt_ids: we(g())[a(2033)](), images: we(S({ url: g(), thumbnail: g() }))[a(2033)]() }), Zo = { setWidgetValue: { requestSchema: S({ values: we(S({ nodeID: g(), widgetIndex: Z(), value: De(g(), qe()).or(g()).or(Z()).or(ee()).or(we(qe())) })) }), responseSchema: S({ success: ee() }) }, openWorkflow: { requestSchema: S({ workflow_path: g(), reset: ee()[a(2222)](!1) }), responseSchema: S({ success: ee() }) }, openWorkflowJSON: { requestSchema: S({ workflow_content: De(qe()), workflow_path: g() }), responseSchema: S({ success: ee() }) }, listWorkflows: { requestSchema: S({ listMode: g().optional(), sdpppID: g()[a(2033)](), sdpppToken: g()[a(2033)]() }), responseSchema: Bo }, saveWorkflow: { requestSchema: S({ workflow_path: g(), from_sid: g()[a(2033)]() }), responseSchema: S({ success: ee() }) }, run: { requestSchema: S({ size: Z(), mode: Re([a(1388), a(699)]).default("app")[a(2033)]() }), responseSchema: Wo, stream: !0 }, stopAll: { requestSchema: S({}), responseSchema: S({ success: ee() }) } }, Ko = { backward: { requestSchema: Hx(), responseSchema: S({ success: ee() }) }, refresh: { requestSchema: Hx(), responseSchema: S({ success: ee() }) }, run: { requestSchema: Hx(), responseSchema: S({ success: ee() }) } }, Go = S({ passwordPayload: S({ username: g(), password: g() }).or(S({ email: g(), password: g() })).or(S({ phone: g(), password: g() })).or(S({ identifier: g(), password: g() })) }).or(S({ passcodePayload: S({ phone: g(), code: g() }).or(S({ email: g(), code: g() })) })), Jo = S({ passwordPayload: S({ username: g(), password: g() }).or(S({ email: g(), password: g() })).or(S({ phone: g(), password: g() })).or(S({ identifier: g(), password: g() })) }).or(S({ passcodePayload: S({ phone: g(), code: g() }).or(S({ email: g(), code: g() })) })), Qo = { register: { requestSchema: Go, responseSchema: S({}) }, login: { requestSchema: Jo, responseSchema: S({}) }, sendPassCode: { requestSchema: S({ phone: g()[a(2033)](), email: g()[a(2033)]() }), responseSchema: S({}) }, logout: { requestSchema: S({}), responseSchema: S({}) }, guestLogin: { requestSchema: S({}), responseSchema: S({}) }, openAuthingLoginDialog: { requestSchema: S({}), responseSchema: S({}) } };
S({ resource: g()[a(2033)](), thumbnail: g()[a(2033)](), width: Z().optional(), height: Z()[a(2033)](), mimeType: g()[a(2033)](), source: g()[a(2033)](), error: g().optional() }), S({ boundary: Re([a(976), "curlayer", a(2623)]), content: Re(["canvas", a(2382), "selection"]).or(g()), imageSize: Z(), imageQuality: Z(), cropBySelection: Re(["no", a(194), a(1757)]), layer_identify: g()[a(2101)]().optional() }), S({ content: Re([a(976), a(2382), a(2623)]), reverse: ee(), imageSize: Z(), layer_identify: g().nullable().optional() }), S({ selection: Re([a(1436), a(2624), a(1110), a(1914), "curlayer_canvas", "curlayer_curlayer", a(1463), a(1436)]), url: g(), source: g(), cropBySelection: Re(["no", a(194), "negative"]) });
const Xo = { downloadImage: { requestSchema: S({ url: g() }), responseSchema: S({ thumbnail: g()[a(2033)](), resource: g()[a(2033)](), width: Z()[a(2033)](), height: Z()[a(2033)](), error: g()[a(2033)]() }) }, getThumbnail: { requestSchema: S({ resource: g(), maxSize: Z().optional() }), responseSchema: S({ thumbnail: g()[a(2033)](), width: Z().optional(), height: Z()[a(2033)](), error: g()[a(2033)]() }) } }, Yo = { manageGuides: { requestSchema: S({ action: Re(["create", a(2254)]), rect: z0.optional() }), responseSchema: S({ success: ee() }) }, getBoundary: { requestSchema: S({ type: Re(["curlayer", a(2623)]) }), responseSchema: z0 }, getImage: { requestSchema: S({ boundary: Ke([Re(["canvas", a(2382), a(2623)]), z0]), content: Ke([Re([a(976), a(2382)]), g()]), imageSize: Z(), imageQuality: Z(), cropBySelection: Re(["no", a(194), a(1757)]), SkipNonNormalLayer: ee(), layer_identify: g()[a(2101)]()[a(2033)]() }), responseSchema: S({ resource: g()[a(2033)](), thumbnail: g()[a(2033)](), width: Z()[a(2033)](), height: Z().optional(), mimeType: g()[a(2033)](), source: g().optional(), error: g()[a(2033)]() }) }, getMask: { requestSchema: S({ boundary: Ke([Re(["canvas", "curlayer", "selection"]), z0]), content: Re([a(976), a(2382), "selection"]), reverse: ee(), imageSize: Z(), layer_identify: g().nullable()[a(2033)]() }), responseSchema: S({ resource: g()[a(2033)](), thumbnail: g()[a(2033)](), width: Z()[a(2033)](), height: Z()[a(2033)](), mimeType: g()[a(2033)](), source: g()[a(2033)](), error: g()[a(2033)]() }) }, getCurrentLayerIdentify: { requestSchema: S({}), responseSchema: S({ layer_identify: g()[a(2101)]() }) }, importImage: { requestSchema: S({ resource: g(), boundaryUri: g().nullable()[a(2033)](), type: Re([a(976), "curlayer", a(969), a(220)]), sourceWidth: Z()[a(2033)](), sourceHeight: Z()[a(2033)](), maskUri: g()[a(2101)]()[a(2033)]() }), responseSchema: S({ success: ee(), layers: we(S({ identify: g() }))[a(2033)](), message: g()[a(2033)](), error: g()[a(2033)]() }) }, applyMaskToImage: { requestSchema: S({ imageResource: g(), maskResource: g(), invertMask: ee()[a(2033)]() }), responseSchema: S({ resource: g(), thumbnail: g()[a(2033)](), width: Z(), height: Z(), mimeType: g() }) }, showBoundarySelectionDialog: { requestSchema: S({ additionalData: De(qe())[a(2033)]() }), responseSchema: S({ boundary: Re([a(976), "curlayer", a(2623)]).optional(), cancelled: ee().optional() }) }, selectImageSource: { requestSchema: S({ additionalData: De(qe()).optional() }), responseSchema: S({ action: Re([a(430), a(2354)])[a(2033)](), params: qe()[a(2033)](), cancelled: ee().optional() }) }, selectContentSource: { requestSchema: S({ additionalData: De(qe())[a(2033)]() })[a(2033)](), responseSchema: S({ resource: g().optional(), fileName: g().optional(), mimeType: g()[a(2033)](), size: Z().optional(), layerIdentify: g()[a(2033)](), cancelled: ee()[a(2033)]() }) } }, zx = S({ taskId: g(), taskName: g(), status: Re(["running", a(283), a(2616), a(2457)]), currentStep: Z()[a(2033)](), totalSteps: Z()[a(2033)](), stepDescription: g()[a(2033)](), progressPercentage: Z()[a(1414)](0)[a(718)](100)[a(2033)](), startTime: g(), endTime: g()[a(2033)](), error: g()[a(2033)](), errorCode: g().optional(), result: qe()[a(2033)](), metadata: De(qe()).optional() }), Vx = S({ success: ee(), error: g().optional() }), ei = { taskAdd: { requestSchema: zx, responseSchema: Vx }, taskUpdate: { requestSchema: zx[a(2573)]()[a(1025)]({ taskId: !0 }), responseSchema: Vx }, taskRemove: { requestSchema: zx[a(264)]({ taskId: !0 }), responseSchema: Vx } }, xi = { log: { requestSchema: S({ level: Re([a(1872), "info", a(196), a(2265)]), messages: we(g()) }), responseSchema: S({}) }, openExternalLink: { requestSchema: S({ url: g() }), responseSchema: S({ error: g()[a(2033)]() }) }, getStorage: { requestSchema: S({ key: g() }), responseSchema: S({ value: g(), error: g().optional() }) }, setStorage: { requestSchema: S({ key: g(), value: g() }), responseSchema: S({ error: g()[a(2033)]() }) }, removeStorage: { requestSchema: S({ key: g() }), responseSchema: S({ error: g()[a(2033)]() }) }, keyboardAction: { requestSchema: S({ keycode: g() }), responseSchema: S({}) }, setComfyWebviewURL: { requestSchema: S({ url: g() }), responseSchema: S({}) }, getImageBase64: { requestSchema: S({ token: g() }), responseSchema: S({ base64: g()[a(2033)](), mimeType: g()[a(2033)](), error: g().optional() }) }, uploadComfyImage: { requestSchema: S({ uploadInput: S({ type: Ke([te("buffer"), te(a(2555)), te("resource")]), resource: qe(), fileName: g(), mimeType: g()[a(2033)](), resourceId: g()[a(2033)]() }), overwrite: ee()[a(2033)]().default(!0) }), responseSchema: S({ name: g() }) }, pickLocalFile: { requestSchema: S({ acceptExtensions: we(g())[a(2033)](), kind: Re([a(1108), a(2869)])[a(2033)]() })[a(2033)](), responseSchema: S({ cancelled: ee()[a(2033)](), resource: g()[a(2033)](), fileName: g()[a(2033)](), mimeType: g().optional(), size: Z().optional(), error: g()[a(2033)]() }) }, proxiedFetch: { requestSchema: S({ url: g(), method: g().optional(), headers: De(g()).optional(), body: qe().optional(), bodyType: Re([a(2348), a(547), "text"])[a(2033)]() }), responseSchema: S({ success: ee(), status: Z().optional(), statusText: g().optional(), headers: De(g())[a(2033)](), data: qe()[a(2033)](), error: g()[a(2033)]() }) }, openaiImageEdit: { requestSchema: S({ apiKey: g(), baseURL: g(), imageToken: g(), prompt: g(), model: g() }), responseSchema: S({ success: ee(), imageUrl: g()[a(2033)](), apiTime: Z()[a(2033)](), error: g()[a(2033)]() }) }, geminiImageGenerate: { requestSchema: S({ apiKey: g(), baseURL: g()[a(2033)](), imageInputs: we(g())[a(2033)](), imageInput: g().optional(), imageInputType: Re([a(2555), a(1667)]), prompt: g() }), responseSchema: S({ success: ee(), imageUrl: g()[a(2033)](), apiTime: Z()[a(2033)](), error: g().optional() }) } }, ti = Ke([g(), Ux(Uint8Array), Ux(ArrayBuffer), Ux(DataView)]), ai = S({ buffer: ti, name: g()[a(2101)]()[a(2033)](), mime: g().nullable()[a(2033)](), width: Z()[a(2101)]()[a(2033)](), height: Z()[a(2101)]()[a(2033)](), thumbnail: g().nullable()[a(2033)](), meta: De(S0())[a(2033)]() }), ri = { "fileResource.createFromExternal": { requestSchema: S({ url: g(), fileName: g().optional() }), responseSchema: S({ resource: g().optional(), thumbnail: g()[a(2033)](), width: Z()[a(2033)](), height: Z().optional(), mime: g()[a(2033)](), mimeType: g().optional(), error: g()[a(2033)]() }) }, "fileResource.createFromLocal": { requestSchema: S({ types: we(S({ description: g()[a(2033)](), extensions: we(g()).optional() }))[a(2033)]() }), responseSchema: S({ resource: g().optional(), thumbnail: g()[a(2033)](), width: Z()[a(2033)](), height: Z()[a(2033)](), mime: g()[a(2033)](), error: g().optional() }) }, "fileResource.createFromBuffer": { requestSchema: S({ files: we(ai)[a(1414)](1) }), responseSchema: S({ resource: g()[a(2033)](), thumbnail: g()[a(2033)](), width: Z()[a(2033)](), height: Z()[a(2033)](), mime: g()[a(2033)](), error: g()[a(2033)]() }) }, "fileResource.createByContent": { requestSchema: S({ contentUri: g(), boundaryUri: g()[a(2033)](), options: De(S0()).optional() }), responseSchema: S({ resource: g()[a(2033)](), thumbnail: g().optional(), width: Z()[a(2033)](), height: Z()[a(2033)](), mime: g()[a(2033)](), error: g()[a(2033)]() }) }, "fileResource.createByMask": { requestSchema: S({ maskUri: g(), boundaryUri: g()[a(2033)](), options: De(S0())[a(2033)]() }), responseSchema: S({ resource: g()[a(2033)](), thumbnail: g()[a(2033)](), width: Z()[a(2033)](), height: Z().optional(), mime: g()[a(2033)](), error: g()[a(2033)]() }) }, "fileResource.combineByCBM": { requestSchema: S({ contentUri: g(), boundaryUri: g(), maskUri: g()[a(2101)]()[a(2033)](), options: De(S0()).optional(), thumbnail: ee()[a(2033)]() }), responseSchema: S({ resource: g().optional(), thumbnail: g().optional(), width: Z()[a(2033)](), height: Z()[a(2033)](), mime: g().optional(), error: g().optional() }) }, "fileResource.delete": { requestSchema: S({ resources: we(g()) }), responseSchema: S({ error: g()[a(2033)]() }) }, "fileResource.thumbnail": { requestSchema: S({ resource: g(), maxSize: Z()[a(2033)]() }), responseSchema: S({ thumbnail: g()[a(2033)](), width: Z()[a(2033)](), height: Z()[a(2033)](), error: g()[a(2033)]() }) }, "fileResource.saveAs": { requestSchema: S({ resources: we(g()) }), responseSchema: S({ error: g()[a(2033)]() }) }, "boundary.normalize": { requestSchema: S({ boundary: g() }), responseSchema: S({ boundary: g()[a(2033)](), error: g()[a(2033)]() }) }, "layer.resolve": { requestSchema: S({ uri: g(), type: Re([a(1306), "mask"]) }), responseSchema: S({ uri: g()[a(2033)](), error: g()[a(2033)]() }) } }, si = ko({ nodes: { sdk: { store: Ho, actions: { ...Ko } }, uxp: { store: zo, actions: { ...Xo, ...ri, ...xi, ...Qo, ...ei, ...Yo } }, comfy: { store: Uo, actions: { ...Zo, ...Vo } } }, edges: [["sdk", a(999)], [a(696), "uxp"]] }), Pe = si[a(1359)](a(696));
globalThis[a(621)] = Pe;
var fx = { exports: {} }, Bx, Ma;
function ni() {
  if (Ma) return Bx;
  Ma = 1;
  var o = 1e3, x = o * 60, t = x * 60, r = t * 24, e = r * 7, s = r * 365.25;
  Bx = function(d, l) {
    const f = K;
    l = l || {};
    var b = typeof d;
    if (b === f(1653) && d[f(1332)] > 0) return n(d);
    if (b === f(1206) && isFinite(d)) return l[f(1602)] ? c(d) : i(d);
    throw new Error(f(794) + JSON[f(306)](d));
  };
  function n(d) {
    const l = K;
    if (d = String(d), !(d[l(1332)] > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(d);
      if (f) {
        var b = parseFloat(f[1]), h = (f[2] || "ms").toLowerCase();
        switch (h) {
          case l(355):
          case "year":
          case l(2003):
          case "yr":
          case "y":
            return b * s;
          case l(773):
          case l(178):
          case "w":
            return b * e;
          case l(1578):
          case l(2323):
          case "d":
            return b * r;
          case l(1435):
          case l(2508):
          case l(1242):
          case "hr":
          case "h":
            return b * t;
          case l(452):
          case l(1565):
          case l(1279):
          case "min":
          case "m":
            return b * x;
          case "seconds":
          case l(1238):
          case l(2393):
          case l(502):
          case "s":
            return b * o;
          case l(2772):
          case "millisecond":
          case "msecs":
          case l(2029):
          case "ms":
            return b;
          default:
            return;
        }
      }
    }
  }
  function i(d) {
    const l = K;
    var f = Math[l(2625)](d);
    return f >= r ? Math[l(2223)](d / r) + "d" : f >= t ? Math[l(2223)](d / t) + "h" : f >= x ? Math[l(2223)](d / x) + "m" : f >= o ? Math[l(2223)](d / o) + "s" : d + "ms";
  }
  function c(d) {
    const l = K;
    var f = Math[l(2625)](d);
    return f >= r ? u(d, f, r, l(2323)) : f >= t ? u(d, f, t, l(2508)) : f >= x ? u(d, f, x, l(1565)) : f >= o ? u(d, f, o, "second") : d + l(845);
  }
  function u(d, l, f, b) {
    var h = l >= f * 1.5;
    return Math.round(d / f) + " " + b + (h ? "s" : "");
  }
  return Bx;
}
var Wx, La;
function oi() {
  if (La) return Wx;
  La = 1;
  function o(x) {
    const t = K;
    e[t(2264)] = e, e[t(2222)] = e, e.coerce = d, e[t(1218)] = c, e[t(1936)] = n, e.enabled = u, e[t(2886)] = ni(), e[t(525)] = l, Object[t(1806)](x)[t(1953)]((f) => {
      e[f] = x[f];
    }), e[t(1587)] = [], e[t(1508)] = [], e[t(1734)] = {};
    function r(f) {
      const b = t;
      let h = 0;
      for (let m = 0; m < f[b(1332)]; m++)
        h = (h << 5) - h + f.charCodeAt(m), h |= 0;
      return e[b(1445)][Math[b(2625)](h) % e[b(1445)][b(1332)]];
    }
    e[t(2179)] = r;
    function e(f) {
      const b = t;
      let h, m = null, v, k;
      function E(...q) {
        const T = K;
        if (!E.enabled) return;
        const C = E, P = Number(/* @__PURE__ */ new Date()), F = P - (h || P);
        C.diff = F, C.prev = h, C[T(687)] = P, h = P, q[0] = e[T(2791)](q[0]), typeof q[0] !== T(1653) && q.unshift("%O");
        let D = 0;
        q[0] = q[0].replace(/%([a-zA-Z%])/g, (O, N) => {
          const R = T;
          if (O === "%%") return "%";
          D++;
          const L = e[R(1734)][N];
          if (typeof L === R(1235)) {
            const $ = q[D];
            O = L.call(C, $), q[R(2301)](D, 1), D--;
          }
          return O;
        }), e[T(1446)].call(C, q), (C[T(1872)] || e[T(1872)]).apply(C, q);
      }
      return E.namespace = f, E.useColors = e[b(375)](), E[b(354)] = e.selectColor(f), E[b(2636)] = s, E[b(525)] = e[b(525)], Object.defineProperty(E, b(975), { enumerable: !0, configurable: !1, get: () => {
        const q = b;
        return m !== null ? m : (v !== e.namespaces && (v = e[q(736)], k = e[q(975)](f)), k);
      }, set: (q) => {
        m = q;
      } }), typeof e.init == "function" && e[b(943)](E), E;
    }
    function s(f, b) {
      const h = t, m = e(this[h(2774)] + (typeof b > "u" ? ":" : b) + f);
      return m[h(1872)] = this[h(1872)], m;
    }
    function n(f) {
      const b = t;
      e[b(1616)](f), e[b(736)] = f, e[b(1587)] = [], e[b(1508)] = [];
      const h = (typeof f === b(1653) ? f : "")[b(436)]()[b(784)](/\s+/g, ",")[b(585)](",")[b(1706)](Boolean);
      for (const m of h)
        m[0] === "-" ? e[b(1508)][b(902)](m[b(2103)](1)) : e[b(1587)][b(902)](m);
    }
    function i(f, b) {
      const h = t;
      let m = 0, v = 0, k = -1, E = 0;
      for (; m < f[h(1332)]; )
        if (v < b[h(1332)] && (b[v] === f[m] || b[v] === "*")) b[v] === "*" ? (k = v, E = m, v++) : (m++, v++);
        else if (k !== -1) v = k + 1, E++, m = E;
        else return !1;
      for (; v < b[h(1332)] && b[v] === "*"; )
        v++;
      return v === b[h(1332)];
    }
    function c() {
      const f = t, b = [...e[f(1587)], ...e[f(1508)].map((h) => "-" + h)][f(2252)](",");
      return e[f(1936)](""), b;
    }
    function u(f) {
      const b = t;
      for (const h of e[b(1508)])
        if (i(f, h)) return !1;
      for (const h of e[b(1587)])
        if (i(f, h)) return !0;
      return !1;
    }
    function d(f) {
      const b = t;
      return f instanceof Error ? f[b(494)] || f.message : f;
    }
    function l() {
      console.warn(t(2551));
    }
    return e[t(1936)](e[t(499)]()), e;
  }
  return Wx = o, Wx;
}
var $a;
function ii() {
  const o = a;
  return $a || ($a = 1, (function(x, t) {
    const r = o;
    t.formatArgs = s, t[r(1616)] = n, t[r(499)] = i, t.useColors = e, t[r(2394)] = c(), t.destroy = /* @__PURE__ */ (() => {
      let d = !1;
      return () => {
        !d && (d = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), t[r(1445)] = [r(2204), r(691), r(829), r(1903), r(1825), r(381), r(915), "#0099FF", r(1852), r(676), r(227), "#00CC99", r(365), r(1309), r(462), r(1874), r(424), r(2564), "#3366CC", r(1586), "#3399CC", "#3399FF", r(2146), r(1577), r(2365), r(1843), r(2376), "#33CCFF", r(2298), r(1518), "#6633CC", r(556), r(1401), r(1622), "#9900CC", "#9900FF", r(222), "#9933FF", r(1758), r(180), r(1892), r(2296), "#CC0066", r(2073), r(477), r(404), r(2085), r(1486), r(1370), r(1711), "#CC33CC", r(2889), "#CC6600", r(257), r(2007), r(290), r(1934), r(1039), r(655), r(793), "#FF0066", "#FF0099", r(2855), "#FF00FF", "#FF3300", r(578), r(2602), r(440), r(2356), "#FF33FF", r(1817), r(560), r(1184), "#FF9933", r(650), r(361)];
    function e() {
      const d = r;
      if (typeof window !== d(2694) && window[d(768)] && (window[d(768)].type === "renderer" || window[d(768)][d(331)])) return !0;
      if (typeof navigator < "u" && navigator[d(2069)] && navigator[d(2069)][d(2522)]()[d(2716)](/(edge|trident)\/(\d+)/)) return !1;
      let l;
      return typeof document < "u" && document[d(2295)] && document[d(2295)][d(2056)] && document[d(2295)].style[d(1952)] || typeof window < "u" && window[d(2455)] && (window.console[d(1634)] || window.console[d(2183)] && window[d(2455)][d(946)]) || typeof navigator !== d(2694) && navigator[d(2069)] && (l = navigator[d(2069)][d(2522)]()[d(2716)](/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || typeof navigator < "u" && navigator[d(2069)] && navigator.userAgent[d(2522)]()[d(2716)](/applewebkit\/(\d+)/);
    }
    function s(d) {
      const l = r;
      if (d[0] = (this[l(375)] ? "%c" : "") + this[l(2774)] + (this[l(375)] ? " %c" : " ") + d[0] + (this[l(375)] ? l(2443) : " ") + "+" + x[l(1469)][l(2886)](this[l(1189)]), !this[l(375)]) return;
      const f = "color: " + this.color;
      d[l(2301)](1, 0, f, "color: inherit");
      let b = 0, h = 0;
      d[0][l(784)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (b++, m === "%c" && (h = b));
      }), d[l(2301)](h, 0, f);
    }
    t[r(1872)] = console[r(2264)] || console[r(1872)] || (() => {
    });
    function n(d) {
      const l = r;
      try {
        d ? t[l(2394)][l(1968)](l(2264), d) : t[l(2394)].removeItem(l(2264));
      } catch {
      }
    }
    function i() {
      const d = r;
      let l;
      try {
        l = t[d(2394)][d(647)](d(2264)) || t[d(2394)][d(647)](d(2203));
      } catch {
      }
      return !l && typeof process !== d(2694) && d(2134) in process && (l = process[d(2134)].DEBUG), l;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x.exports = oi()(t);
    const { formatters: u } = x.exports;
    u.j = function(d) {
      const l = r;
      try {
        return JSON[l(306)](d);
      } catch (f) {
        return l(2487) + f.message;
      }
    };
  })(fx, fx[o(1469)])), fx[o(1469)];
}
var ci = ii();
const Ws = Bs(ci);
Ws[a(1936)]("*");
function ui(o, x) {
  const t = a, r = Ws(o), e = (s, n) => async function(...i) {
    try {
      await x({ level: s, messages: i });
    } catch {
    }
  };
  return r[t(1872)] = e(t(1872)), r;
}
const ox = ui(a(2058), async ({ level: o, messages: x }) => {
  const t = a, { mcpMesh: r } = await Promise[t(1635)]()[t(723)](() => ru);
  await r[t(1234)](t(999)).actions[t(1872)]({ level: o, messages: x });
}), di = { "preview.show": a(865), "gateway.select_ai_service": a(922), "provider.select.title": a(363), "provider.comfyui.description": a(343), "provider.replicate.description": a(908), "provider.runninghub.description": "模型物美价廉，海量社区应用", "provider.google.description": a(1125), "task.waiting_upload": a(2326), "task.creating_task": a(697), "task.running_duration": "运行了 {{duration}} 秒，{{message}}", "task.cancelled": a(2271), "task.cancel_failed": a(1270), "task.default_name": a(1916), "comfy.connect": "连接", "comfy.load_failed": a(2266), "comfy.loading": a(859), "comfy.channel_connecting": a(1103), "comfy.server_reconnecting": "ComfyUI服务器重连中", "comfy.version_mismatch": a(929), "comfy.cloud_recommend": a(1693), "comfy.your_workflows": a(1494), "comfy.refresh_workflows": a(2367), "comfy.queue_progress": a(1932), "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": a(458), "comfy.stop_auto_run": a(2294), "comfy.start_auto_run": a(2504), "comfy.auto_run_status": a(1686), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": a(2097), "comfy_simple.refreshing_preview": a(1373), "comfy.select_workflow": a(2331), "comfy.task.name": "ComfyUI - {{workflowName}}", "comfy.error.task_cancelled": "任务已取消", "comfy.task.processing_progress": a(207), "comfy.help_tooltip": a(373), "comfy.no_workflow_selected": a(1222), "comfy_simple.missing_url": a(2022), "comfy_simple.loading_webview": a(2142), "comfy_simple.http_error": a(726), "comfy_simple.wait_connect": a(1062), "comfy_simple.loading": a(246), "comfy_simple.connection_required": a(497), "comfy_simple.preview_empty": "暂无预览内容", "comfy_simple.progress.idle": "空闲", "comfy_simple.auto_run": "自动", "comfy_simple.workflow_quick": "快捷", "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": "X10", "comfy_simple.prompt_templates.manage_tooltip": "管理可复用的提示词模板", "comfy_simple.prompt_templates.button": a(1532), "comfy_simple.prompt_templates.save_error": a(318), "comfy_simple.prompt_templates.missing_key": a(2820), "comfy_simple.prompt_templates.missing_value": a(1786), "comfy_simple.prompt_templates.duplicate_key": a(1993), "comfy_simple.prompt_templates.save_success": "模板已保存。", "comfy_simple.prompt_templates.delete_confirm_title": a(1386), "comfy_simple.prompt_templates.delete_confirm_content": a(2877), "comfy_simple.prompt_templates.delete_success": a(2566), "comfy_simple.prompt_templates.add_title": "新增模板", "comfy_simple.prompt_templates.edit_title": a(2224), "comfy_simple.prompt_templates.modal_title": a(2579), "comfy_simple.prompt_templates.description": a(2741), "comfy_simple.prompt_templates.add_button": a(240), "comfy_simple.prompt_templates.name_placeholder": a(1724), "comfy_simple.prompt_templates.value_placeholder": a(1113), "comfy_simple.fallback.title": a(2868), "comfy_simple.fallback.button": "更多设置", "comfy_simple.prompt_templates.positive_label": a(1899), "comfy_simple.prompt_templates.negative_label": a(2036), "comfy_simple.prompt_templates.negative_placeholder": "负面提示词内容", "comfy_simple.prompt_templates.negative_empty": "（为空）", "comfy_simple.prompt_templates.default_section": a(742), "comfy_simple.prompt_templates.default_empty": a(1219), "comfy_simple.prompt_templates.default_tag": "默认", "comfy_simple.prompt_templates.custom_section": "我的模板", "comfy_simple.prompt_templates.custom_empty": "还没有自定义模板。", "comfy_simple.prompt_templates.applied_success": a(2338), "comfy_simple.prompt_templates.applied_failed": a(1909), "comfy_simple.prompt_templates.apply_unavailable": a(2438), "comfy_simple.prompt_templates.apply_failed_missing_binding": a(2317), "comfy_simple.prompt_templates.apply_failed_caller_unavailable": a(903), "comfy_simple.prompt_templates.apply_failed_set_error": "无法写入{{part}}提示词，请稍后重试。", "common.delete": "删除", "comfy_simple.preview_click_to_send": "点击发送（Shift-点击新建文档）", "comfy_simple.workflow_select.empty": a(941), "comfy_simple.workflow_select.select": "选择", "comfy_simple.workflow_select.selected": a(652), "comfy_simple.workflow_select.current": "当前", "comfy_simple.workflow_select.load_failed": "获取工作流列表失败。", "comfy_simple.workflow_select.members_only": a(323), "boundary.title": a(893), "boundary.tooltip": a(631), "boundary.current_canvas": a(216), "boundary.current_layer": "当前图层", "boundary.current_selection": a(486), "boundary.set_as_canvas": a(2065), "boundary.set_as_layer": a(523), "boundary.set_as_selection": a(396), "http.404": "SDPPP可能未安装或和插件版本不匹配 (404)", "http.401": a(577), "http.403": a(1150), "http.408": a(1672), "http.500": a(379), "http.501": a(2656), "http.502": a(2882), "http.503": a(2055), "http.504": a(1303), "http.unknown": a(575), "runninghub.get_apikey": a(2837), "runninghub.apikey_placeholder": a(1584), "runninghub.app_id": "应用ID:", "runninghub.webapp_id_placeholder": a(1525), "runninghub.open_app": "按回车打开应用： {{appName}}", "runninghub.execute": "执行", "runninghub.running": a(1393), "runninghub.rh_coins": a(1423), "runninghub.current_tasks": a(2153), "runninghub.help_tooltip": a(373), "runninghub.stop_all": "停止全部", "runninghub.status.waiting": a(1364), "runninghub.status.running": "正在运行", "runninghub.status.failed": a(2627), "runninghub.status.success": a(2471), "image.auto_refetch": "自动从PS重新获取", "local_resource.selection.images": "图片", "runninghub.error.get_result_failed": a(2743), "runninghub.error.task_failed": a(2538), "runninghub.error.task_incomplete": "任务未完成，当前状态: {{status}}", "runninghub.error.account_status_http": a(2220), "runninghub.error.account_status_reason_unknown": "获取账户信息失败", "runninghub.error.account_status_failed": a(1347), "runninghub.error.form_data_http": a(2024), "runninghub.error.form_data_reason_unknown": a(759), "runninghub.error.form_data_failed": a(2839), "runninghub.error.node_info_missing": a(2135), "runninghub.error.run_http": a(2556), "runninghub.error.run_reason_default": a(986), "runninghub.error.run_failed": a(1015), "runninghub.error.status_http": "status API 调用失败 - HTTP 错误，状态: {{status}}", "runninghub.error.status_reason_unknown": a(1437), "runninghub.error.status_failed": "status API 调用失败 - {{reason}}", "runninghub.error.outputs_http": "outputs API 调用失败 - HTTP 错误，状态: {{status}}", "runninghub.error.outputs_failed": "outputs API 调用失败 - {{reason}}", "runninghub.task.title": a(376), "runninghub.error.upload_http": a(388), "runninghub.error.upload_reason_unknown": "文件上传失败", "runninghub.error.upload_failed": a(2054), "customapi.error.no_image_returned": a(2377), "customapi.error.openai_api": a(1716), "customapi.error.input_required": a(1930), "customapi.error.generation_failed": a(2784), "customapi.task.name.google": a(2865), "customapi.task.name.openai": a(1733), "customapi.error.unsupported_image_input": a(958), "replicate.get_apikey": a(646), "replicate.apikey_placeholder": "请输入您的Replicate API Key", "replicate.execute": "执行", "replicate.model_placeholder": a(1395), "replicate.help_tooltip": "使用教程", "replicate.loading": "加载中...", "replicate.running": a(1393), "replicate.stop": "停止", "liblib.get_apikey": a(1464), "liblib.execute": "执行", "common.close": "关闭", "common.save": "保存", "common.save_and_run": a(2214), "common.loading": a(1883), "common.error": "错误", "common.error.unknown": a(1763), "common.error.task_creation_aborted": a(1554), "common.error.status_check_aborted": a(1782), "common.error.result_fetch_aborted": a(549), "common.error.upload_aborted": a(342), "common.success": "成功", "common.failed": "失败", "common.generating": "生成中...", "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": "=== 选项 ===", "upload_pass.error.unsupported_type": a(2152), "upload_pass.error.uploader_missing": a(2529), webviewInForeground: a(215), webviewInForeground2: a(535), "auth.login_success": "登录成功", "auth.username_label": a(1515), "auth.email_label": a(1296), "auth.logout": a(739), "auth.login_required": a(2796), "image.send.select_position": a(1180), "image.send.sending": a(951), "image.layer.new": a(2519), "image.layer.current": a(1839), "image.layer.fit_to_current": a(1984), "image.layer.fit_to_selection": "适配至选区", "image.layer.fit_to_canvas": a(1383), "image.shortcut_auth_required": "快捷键选图功能仅登陆后可用", "image.shortcut_focus_required": a(244), "image.get.select_image": a(1367), "image.get.entire_canvas": a(216), "image.get.canvas": "画布", "image.get.current_layer": a(1839), "image.get.current_layer_bounds": a(1743), "image.get.selection_bounds": a(370), "image.get.canvas_bounds": a(2349), "image.crop_by_selection": a(1776), "image.limit_size": "限制图片尺寸", "image.crop.none": "不裁剪", "image.crop.inpaint": a(463), "image.crop.outpaint": a(2548), "image.send_all": "发送所有", "image.save_all": a(2533), "image.save_current": "保存当前", "image.delete_current": a(2250), "image.more_actions": a(2509), "image.jump_to_last": a(1943), "image.clear_all": a(2884), "image.send_to_ps": "发送到PS", "image.download": "下载", "image.copy": "复制", "image.sending": a(974), "image.sending_all": a(877), "mask.get.select_mask": a(1344), "mask.selection": "选区", "mask.current_layer_bounds": a(1649), "mask.all": "全部", "mask.selection_exclude": a(1380), "mask.current_layer_exclude": a(1424), "mask.empty": "空", "widgetable.photoshop.deprecated_node": a(732), "work_boundary.error.empty_selection_mask": a(2848), "work_boundary.error.primary_resource_missing": a(2424), "work_boundary.error.mask_resource_missing": a(693), "work_boundary.error.mask_apply_empty": a(1037), "document {{0}} not found": a(2871), "create document for preview": a(303), "resize document for preview": a(582), "create document for sent images": a(1326), "show sent images": a(339), "create layer failed": a(1320), "layer not found {{0}}": a(861), "layer not found: {{0}}": "找不到图层: {{0}}", "layer {{0}} is not a group": a(2843), "no linked layer for {{0}}": "没有链接图层: {{0}}", "no first related layer in {{0}}": a(1780), "merge group failed": "合并组失败", "get content of layer {{0}}": "获取图层 {{0}} 的内容", "get layer info": "获取图层信息", "get_layer_info: layer_identify required": a(612), "get pixel of {{0}} failed": a(2145), "get selection failed": "获取选区失败", "invalid name: {{0}}": a(2043), "desire bounds is null": "目标边界为空", "intersect or scaledDesire is null": a(1766), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': a(644), "select layer": a(1665), "run Photoshop Action": a(785), "Action {{0}} not found": a(1822), "Action set {{0}} not found": a(1732), "set text to layer": a(1473), "ComfyManager not found, cannot reboot": a(160), "Failed to reboot ComfyUI": a(1194), "image.upload.from_canvas": "画布", "image.upload.from_curlayer": a(1839), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": "上传中，如果图片过大，可能会卡顿...", "image.upload.syncing": a(2639), "image.upload.no_images": a(2162), "image.upload.error": a(853), "image.upload.tooltip.more_options_hint": "+Shift 调整更多选项；Ctrl 单次获取。", "image.upload.tooltip.alt.crop": a(1502), "image.upload.tooltip.alt.reverse": "+Alt 反转遮罩", "image.upload.tooltip.image.canvas": "从 画布 获取图像", "image.upload.tooltip.image.curlayer": a(1796), "image.upload.tooltip.mask.curlayer": a(1470), "image.upload.tooltip.mask.selection": "从 选区 获取遮罩", "image.upload.tooltip.mask.canvas": "从 画布 获取遮罩", "image.upload.tooltip.cut_action": a(333), "image.upload.tooltip.scan_action": `获取图像 &
限制图像范围`, "image.upload.tooltip.autosync.on": a(2431), "image.upload.tooltip.autosync.off": a(1452), "image.upload.tooltip.sync_action": a(1265), "image.upload.autosync.fetching": a(2399), "image.upload.autosync.status.enabled": a(600), "image.upload.autosync.status.disabled": a(2174), "image.upload.tooltip.current.canvas": a(574), "image.upload.tooltip.current.layer": a(1847), "image.upload.tooltip.current.layer_named": "当前选项：图层 {{layerName}}", "image.upload.tooltip.current.file": "当前选项：文件", "image.upload.retry": "重试", "image.pack.local.button": a(322), "image.pack.local.empty": a(2162), "image.auto_send_enabled": a(310), "image.auto_send_disabled": a(209), "image.upload.primary.auto": a(2208), "image.upload.primary.manual": a(2612), "image.upload.primary.hint": a(195), "image.upload.primary.cut": "裁剪", "image.upload.primary.scan": "扫描", "image.upload.primary.hint.line1": a(496), "image.upload.primary.hint.line2": "主图", "workflow.output.destination.title": a(2546), "workflow.output.destination.canvas": "全图", "image.upload.primary.advanced": "高级选图", "image.upload.primary.advanced.modify": "修改", "image.upload.primary.advanced.reset": "重置", "image.upload.primary.advanced.local_file": a(1898), "image.upload.primary.advanced.content.canvas": "画布", "image.upload.primary.advanced.content.curlayer": a(1839), "image.upload.primary.advanced.content.selection": "选区", "image.upload.primary.advanced.boundary.canvas": "画布边界", "image.upload.primary.advanced.boundary.curlayer": "当前图层边界", "image.upload.primary.advanced.boundary.selection": "选区边界", "image.upload.primary.advanced.boundary.primary": a(932), "image.upload.source.file.tooltip": a(2751), "image.upload.mode.file.label": "文件", "image.upload.mode.layer.label": "图层", "image.upload.mode.canvas.label": "画布", "image.upload.source.layer.tooltip": "使用当前图层", "image.upload.source.canvas.tooltip": a(2129), "image.upload.dropHint": a(1314), "image.upload.tooltip.clear_action": a(1926), "image.upload.status.layer.short_named": a(1689), "image.upload.status.layer.short": "图层", "image.upload.status.file.short": a(2237), "image.upload.status.canvas.short": "画布", "image.upload.status.file.active": "正在使用本地文件", "image.upload.status.file.resetHint": a(2380), "image.upload.status.mask.resetHint": a(1607), "image.upload.status.mask.modified": a(1546), "image.upload.status.boundary.resetHint": a(393), "image.upload.status.boundary.modified": a(1775), "image.upload.status.boundary.docMismatch": a(378), "image.upload.mask.button": a(576), "image.upload.mask.selection": a(576), "image.upload.mask.layer": "图层遮罩", "image.upload.remove_slot": a(2675), "image.upload.add_slot": a(955), "video.local.button": a(2779), "video.local.empty": a(2226), "video.local.remove": a(2020), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": a(1377), "source.ps_mask": a(933), "source.canvas": a(216), "source.current_layer": a(1839), "source.selection": "选区", "source.quality_percent": a(1069), "source.crop.positive": "正向裁剪", "source.crop.negative": "反向裁剪", "source.reverse": "反转", "send_images.create_document": "创建文档", "send_images.create_document_failed": a(2722), "photoshop.no_active_document": a(1906), "photoshop.rectangle_coordinates_required": "创建操作需要矩形坐标", "photoshop.create_guide_frame": a(1781), "photoshop.clear_guide_frame": a(1491), "photoshop.invalid_action": "无效操作: {{action}}", "photoshop.file_not_found": a(485), "photoshop.failed_to_open_file_as_document": a(1895), "photoshop.invalid_boundary": "无效边界: 左边必须小于右边，上边必须小于下边", "photoshop.failed_to_open_image_file": a(362), "photoshop.open_images_from_file": "从文件打开图像", "photoshop.failed_to_create_document_from_file": a(745), "google.field.image_input": a(1507), "google.field.prompt": a(1532), "google.field.batch_count": a(2441), "google.field.images_per_batch": a(2211), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": a(2699), "google.apikey_placeholder": a(273), "google.baseurl_placeholder": a(2108), "google.get_apikey": "获取 API Key", "google.help_tooltip": "Google Gemini 图像生成器", "google.model_name": a(2489), "google.model_label": "模型", "google.model_placeholder": a(1190), "google.stop": "停止", "google.loading": a(1883), "google.generating": a(2451), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": a(1553), "image.import_as_newdoc": "作为新文档导入", "image.boundary": "边界", "image.import_tip": a(2034), "image.import_selection_button": a(2797), "image.import_auto_hint": a(1868), "image.import_selection_hint": a(2560), "auth.guest_login_success": a(1387), "boundary.canvas": "画布", "boundary.select_boundary": a(2467), "boundary.selection": "选区", "boundary.max_size": a(1007), "boundary.max_size_error": "请输入大于 0 的像素值", "boundary.max_size_hint": "留空表示不限", "boundary.max_size_placeholder": a(1751), "boundary.no_limit": "不限", "boundary.image_quality": a(890), "boundary.image_quality_required": a(960), "boundary.image_quality_range": a(1880), "boundary.preview_main_image": "输出区域", "boundary.preview_select": a(842), "boundary.preview_alt": a(601), "boundary.preview_placeholder": a(658), "boundary.settings": "调整输入设置", "convert widget {0} failed:": a(2638), "document {0} not found": a(2749), "image.document.new": a(2829), "image.layer.smart_object": a(819), "layer not found {0}": a(1621), "photoshop.invalid_boundary_type": a(2658), "photoshop.no_active_layer": a(1870), "dialog.image_source.title": a(2614), "dialog.image_source.primary_canvas": a(2016), "dialog.image_source.primary_curlayer": "以主图边界获取当前图层", "dialog.image_source.canvas_canvas": a(1290), "dialog.image_source.canvas_curlayer": a(2512), "dialog.image_source.curlayer_canvas": a(1691), "dialog.image_source.curlayer_curlayer": "以当前图层边界获取当前图层", "dialog.image_source.local_file": a(1898), "dialog.simple_source.title": a(630), "dialog.simple_source.canvas": "画布", "dialog.simple_source.current_layer": a(1839), "dialog.simple_source.local_file": a(1220), "dialog.simple_source.no_active_layer": a(2045), "dialog.simple_source.pick_error": a(2063) }, li = { "preview.show": a(1740), "gateway.select_ai_service": a(1698), "provider.select.title": a(2398), "provider.comfyui.description": "Your powerful node-based workflow engine", "provider.replicate.description": a(730), "provider.runninghub.description": a(1172), "provider.google.description": a(1628), "task.waiting_upload": "Waiting for image upload...", "task.creating_task": a(1754), "task.running_duration": a(979), "task.cancelled": a(1869), "task.cancel_failed": a(2707), "task.default_name": a(2665), "comfy.connect": a(2359), "comfy.load_failed": a(2692), "comfy.loading": "ComfyUI loading...", "comfy.channel_connecting": a(1269), "comfy.server_reconnecting": a(1e3), "comfy.version_mismatch": "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "comfy.cloud_recommend": "Cloud:", "comfy.your_workflows": a(1041), "comfy.refresh_workflows": a(1999), "comfy.queue_progress": "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "comfy.save": a(872), "comfy.refresh": a(2118), "comfy.stop_cancel_all": "Stop and cancel all", "comfy.stop_auto_run": a(1399), "comfy.start_auto_run": a(919), "comfy.auto_run_status": a(2274), "comfy.run": a(2411), "comfy.back": a(558), "comfy.uploading": a(1053), "comfy_simple.refreshing_preview": a(2201), "comfy.select_workflow": "Select Workflow", "comfy.task.name": a(2842), "comfy.error.task_cancelled": a(1869), "comfy.task.processing_progress": "Processing {{processed}}/{{total}}", "comfy.help_tooltip": "Tutorial", "comfy.no_workflow_selected": a(2186), "comfy_simple.missing_url": "ComfyUI connection not configured yet. Please set the address first.", "comfy_simple.loading_webview": a(2112), "comfy_simple.http_error": a(528), "comfy_simple.wait_connect": "Waiting for ComfyUI to finish connecting…", "comfy_simple.loading": a(2319), "comfy_simple.connection_required": a(1416), "comfy_simple.preview_empty": a(599), "comfy_simple.progress.idle": a(815), "comfy_simple.auto_run": a(2768), "comfy_simple.workflow_quick": a(901), "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": a(2761), "comfy_simple.prompt_templates.manage_tooltip": a(1523), "comfy_simple.prompt_templates.button": a(2136), "comfy_simple.prompt_templates.save_error": a(2275), "comfy_simple.prompt_templates.missing_key": a(503), "comfy_simple.prompt_templates.missing_value": a(2316), "comfy_simple.prompt_templates.duplicate_key": a(174), "comfy_simple.prompt_templates.save_success": "Template saved.", "comfy_simple.prompt_templates.delete_confirm_title": "Delete Template", "comfy_simple.prompt_templates.delete_confirm_content": a(2418), "comfy_simple.prompt_templates.delete_success": a(2345), "comfy_simple.prompt_templates.add_title": a(444), "comfy_simple.prompt_templates.edit_title": a(788), "comfy_simple.prompt_templates.modal_title": a(937), "comfy_simple.prompt_templates.description": a(592), "comfy_simple.prompt_templates.add_button": a(501), "comfy_simple.prompt_templates.name_placeholder": a(836), "comfy_simple.prompt_templates.value_placeholder": "Prompt content", "comfy_simple.fallback.title": a(993), "comfy_simple.fallback.button": "More Settings", "comfy_simple.prompt_templates.positive_label": a(1566), "comfy_simple.prompt_templates.negative_label": a(2681), "comfy_simple.prompt_templates.negative_placeholder": a(1011), "comfy_simple.prompt_templates.negative_empty": "Empty", "comfy_simple.prompt_templates.default_section": a(1761), "comfy_simple.prompt_templates.default_empty": a(765), "comfy_simple.prompt_templates.default_tag": "Default", "comfy_simple.prompt_templates.custom_section": a(1588), "comfy_simple.prompt_templates.custom_empty": a(833), "comfy_simple.prompt_templates.applied_success": a(1969), "comfy_simple.prompt_templates.applied_failed": a(1005), "comfy_simple.prompt_templates.apply_unavailable": a(1095), "comfy_simple.prompt_templates.apply_failed_missing_binding": a(997), "comfy_simple.prompt_templates.apply_failed_caller_unavailable": a(2824), "comfy_simple.prompt_templates.apply_failed_set_error": a(1264), "common.delete": a(2507), "comfy_simple.preview_click_to_send": "Click to send (Shift-click creates new document)", "comfy_simple.workflow_select.empty": a(1824), "comfy_simple.workflow_select.select": a(2724), "comfy_simple.workflow_select.selected": a(2734), "comfy_simple.workflow_select.current": a(2273), "comfy_simple.workflow_select.load_failed": a(2064), "comfy_simple.workflow_select.members_only": " (Members only)", "boundary.title": a(235), "boundary.tooltip": "Area AI reads from; controls max image size", "boundary.current_canvas": a(2107), "boundary.current_layer": "Current Layer", "boundary.current_selection": a(2445), "boundary.set_as_canvas": "Set as Canvas", "boundary.set_as_layer": a(1014), "boundary.set_as_selection": a(250), "http.404": "SDPPP may not be installed or version mismatch (404)", "http.401": "Unauthorized (401)", "http.403": "Forbidden (403)", "http.408": a(2648), "http.500": "Server error (500)", "http.501": a(748), "http.502": "Gateway error (502)", "http.503": "Service unavailable (503)", "http.504": "Gateway timeout (504)", "http.unknown": a(1562), "runninghub.get_apikey": a(2014), "runninghub.apikey_placeholder": a(1018), "runninghub.app_id": a(1625), "runninghub.webapp_id_placeholder": a(2562), "runninghub.open_app": a(1159), "runninghub.execute": a(1248), "runninghub.running": a(2057), "runninghub.rh_coins": a(1254), "runninghub.current_tasks": a(2737), "runninghub.help_tooltip": a(1966), "runninghub.stop_all": a(917), "runninghub.status.waiting": a(1851), "runninghub.status.running": a(1392), "runninghub.status.failed": "Failed", "runninghub.status.success": a(617), "image.auto_refetch": a(1729), "local_resource.selection.images": a(1355), "runninghub.error.get_result_failed": a(2070), "runninghub.error.task_failed": a(978), "runninghub.error.task_incomplete": a(395), "runninghub.error.account_status_http": a(1695), "runninghub.error.account_status_reason_unknown": a(349), "runninghub.error.account_status_failed": a(1415), "runninghub.error.form_data_http": a(1677), "runninghub.error.form_data_reason_unknown": a(2881), "runninghub.error.form_data_failed": a(2498), "runninghub.error.node_info_missing": a(654), "runninghub.error.run_http": a(412), "runninghub.error.run_reason_default": a(2515), "runninghub.error.run_failed": a(791), "runninghub.error.status_http": a(2609), "runninghub.error.status_reason_unknown": a(2613), "runninghub.error.status_failed": a(2597), "runninghub.error.outputs_http": a(2341), "runninghub.error.outputs_failed": a(1794), "runninghub.task.title": a(376), "runninghub.error.upload_http": "uploadImage API failed - HTTP error! status: {{status}}", "runninghub.error.upload_reason_unknown": a(1503), "runninghub.error.upload_failed": a(1200), "customapi.error.no_image_returned": a(1281), "customapi.error.openai_api": a(728), "customapi.error.input_required": a(484), "customapi.error.generation_failed": "Generation failed", "customapi.task.name.google": a(700), "customapi.task.name.openai": a(2322), "customapi.error.unsupported_image_input": a(1495), "replicate.get_apikey": a(1147), "replicate.apikey_placeholder": "Enter your Replicate API Key", "replicate.execute": a(1248), "replicate.model_placeholder": a(2302), "replicate.help_tooltip": a(1966), "replicate.loading": a(703), "replicate.running": a(2057), "replicate.stop": a(2492), "liblib.get_apikey": a(1368), "liblib.execute": a(1248), "common.close": a(883), "common.save": a(872), "common.save_and_run": a(782), "common.loading": "Loading...", "common.error": a(1353), "common.error.unknown": a(1275), "common.error.task_creation_aborted": a(2402), "common.error.status_check_aborted": a(437), "common.error.result_fetch_aborted": "Result fetch aborted", "common.error.upload_aborted": a(2004), "common.success": "Success", "common.failed": "Failed", "common.generating": a(2122), "common.cancel": a(2157), "common.confirm": a(1712), "common.options": "Options", "common.options_separator": a(2258), "upload_pass.error.unsupported_type": a(2287), "upload_pass.error.uploader_missing": a(2778), webviewInForeground: "PS shortcuts may be blocked by plugin...", webviewInForeground2: a(2091), "auth.login_success": a(351), "auth.username_label": a(1783), "auth.email_label": "Email: {{email}}", "auth.logout": a(1156), "auth.login_required": "Please login to use the plugin", "image.send.select_position": a(2406), "image.send.sending": a(2458), "image.layer.new": "New Layer", "image.layer.current": a(1313), "image.layer.fit_to_current": a(743), "image.layer.fit_to_selection": a(2215), "image.layer.fit_to_canvas": a(541), "image.shortcut_auth_required": a(2369), "image.shortcut_focus_required": a(338), "image.get.select_image": a(2662), "image.get.entire_canvas": a(2107), "image.get.canvas": a(651), "image.get.current_layer": "Current Layer", "image.get.current_layer_bounds": a(2617), "image.get.selection_bounds": a(719), "image.get.canvas_bounds": a(1784), "image.crop_by_selection": a(202), "image.limit_size": "Limit image size", "image.crop.none": a(1956), "image.crop.inpaint": a(1193), "image.crop.outpaint": a(1404), "image.send_all": a(2175), "image.save_all": "Save all", "image.save_current": a(391), "image.delete_current": "Delete current", "image.more_actions": a(292), "image.jump_to_last": "Jump to last", "image.clear_all": a(1647), "image.send_to_ps": a(2243), "image.download": a(548), "image.copy": a(2416), "image.sending": a(714), "image.sending_all": a(871), "mask.get.select_mask": a(2040), "mask.selection": a(2433), "mask.current_layer_bounds": a(852), "mask.all": a(2645), "mask.selection_exclude": "Exclude selection", "mask.current_layer_exclude": "Exclude current layer", "mask.empty": a(1731), "widgetable.photoshop.deprecated_node": "SDPPP 2.0 no longer needs this node", "work_boundary.error.empty_selection_mask": a(307), "work_boundary.error.primary_resource_missing": a(1185), "work_boundary.error.mask_resource_missing": a(1735), "work_boundary.error.mask_apply_empty": a(2626), "document {{0}} not found": a(371), "create document for preview": a(755), "resize document for preview": a(2450), "create document for sent images": a(965), "show sent images": a(583), "create layer failed": "Create layer failed", "layer not found {{0}}": a(1241), "layer not found: {{0}}": a(2619), "layer {{0}} is not a group": a(1210), "no linked layer for {{0}}": a(1209), "no first related layer in {{0}}": a(2670), "merge group failed": a(1228), "get content of layer {{0}}": "Get content of layer {{0}}", "get layer info": "Get layer info", "get_layer_info: layer_identify required": a(1844), "get pixel of {{0}} failed": a(796), "get selection failed": "Get selection failed", "invalid name: {{0}}": a(2128), "desire bounds is null": a(981), "intersect or scaledDesire is null": a(1223), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "select layer": a(1648), "run Photoshop Action": a(1121), "Action {{0}} not found": a(721), "Action set {{0}} not found": a(2484), "set text to layer": "Set text to layer", "ComfyManager not found, cannot reboot": a(1198), "Failed to reboot ComfyUI": a(2098), "image.upload.from_canvas": a(651), "image.upload.from_curlayer": a(1313), "image.upload.from_selection": a(2433), "image.upload.from_harddisk": "Disk", "image.upload.clear": a(2750), "image.upload.uploading": a(2493), "image.upload.syncing": a(2404), "image.upload.no_images": a(288), "image.upload.error": a(1020), "image.upload.tooltip.alt.crop": a(2596), "image.upload.tooltip.alt.reverse": a(1840), "image.upload.tooltip.image.canvas": a(2002), "image.upload.tooltip.image.curlayer": a(1927), "image.upload.tooltip.mask.canvas": "Get mask from Canvas", "image.upload.tooltip.mask.curlayer": a(2599), "image.upload.tooltip.mask.selection": "Get mask from Selection", "image.upload.tooltip.cut_action": a(1343), "image.upload.tooltip.scan_action": a(887), "image.upload.tooltip.autosync.on": a(816), "image.upload.tooltip.autosync.off": a(1439), "image.upload.tooltip.sync_action": a(659), "image.upload.tooltip.more_options_hint": a(869), "image.upload.tooltip.current.canvas": a(808), "image.upload.tooltip.current.layer": a(2543), "image.upload.tooltip.current.layer_named": "Current selection: Layer {{layerName}}", "image.upload.tooltip.current.file": a(810), "image.upload.autosync.fetching": a(2640), "image.upload.autosync.status.enabled": a(1422), "image.upload.autosync.status.disabled": a(2854), "image.upload.retry": a(944), "image.pack.local.button": a(787), "image.pack.local.empty": a(1467), "image.auto_send_enabled": a(1615), "image.auto_send_disabled": a(164), "image.upload.primary.auto": a(2640), "image.upload.primary.manual": "Get Image", "image.upload.primary.cut": a(2391), "image.upload.primary.scan": a(1097), "image.upload.primary.hint": a(2777), "image.upload.primary.hint.line1": a(2172), "image.upload.primary.hint.line2": a(2013), "workflow.output.destination.title": "Output to:", "workflow.output.destination.canvas": a(1324), "image.upload.primary.advanced": "Advanced selection", "image.upload.primary.advanced.modify": a(2075), "image.upload.primary.advanced.reset": a(802), "image.upload.primary.advanced.local_file": a(2042), "image.upload.primary.advanced.content.canvas": a(651), "image.upload.primary.advanced.content.curlayer": a(2810), "image.upload.primary.advanced.content.selection": a(2433), "image.upload.primary.advanced.boundary.canvas": a(1317), "image.upload.primary.advanced.boundary.curlayer": "Current layer boundary", "image.upload.primary.advanced.boundary.selection": "Selection boundary", "image.upload.primary.advanced.boundary.primary": a(841), "image.upload.mode.file.label": a(1221), "image.upload.mode.layer.label": a(2397), "image.upload.mode.canvas.label": a(651), "image.upload.source.file.tooltip": a(487), "image.upload.source.layer.tooltip": a(2518), "image.upload.source.canvas.tooltip": "Use entire canvas", "image.upload.dropHint": "Drag images here and release to upload", "image.upload.tooltip.clear_action": a(2536), "image.upload.status.layer.short_named": a(1284), "image.upload.status.layer.short": "Layer", "image.upload.status.file.short": a(2042), "image.upload.status.canvas.short": a(651), "image.upload.status.file.active": a(611), "image.upload.status.file.resetHint": a(168), "image.upload.status.mask.resetHint": a(679), "image.upload.status.mask.modified": "Masked", "image.upload.status.boundary.resetHint": "Click to restore default boundary", "image.upload.status.boundary.modified": a(1749), "image.upload.status.boundary.docMismatch": "Not current document", "image.upload.mask.button": a(2565), "image.upload.mask.selection": a(2565), "image.upload.mask.layer": a(1860), "image.upload.remove_slot": "Remove slot", "image.upload.add_slot": a(846), "video.local.button": a(1820), "video.local.empty": a(1841), "video.local.remove": a(636), "source.source": a(2093), "source.content": a(1863), "source.boundary": a(280), "source.mask": a(1497), "source.disk": a(1669), "source.remote": a(1643), "source.unknown": a(705), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": a(651), "source.current_layer": a(2701), "source.selection": a(2433), "source.quality_percent": a(1282), "source.crop.positive": a(2534), "source.crop.negative": a(1484), "source.reverse": a(803), "send_images.create_document": a(2892), "send_images.create_document_failed": a(649), "photoshop.no_active_document": a(831), "photoshop.rectangle_coordinates_required": "Rectangle coordinates required for create action", "photoshop.create_guide_frame": a(176), "photoshop.clear_guide_frame": a(1164), "photoshop.invalid_action": a(278), "photoshop.file_not_found": a(1762), "photoshop.failed_to_open_file_as_document": a(2084), "photoshop.invalid_boundary": a(1255), "photoshop.failed_to_open_image_file": a(2278), "photoshop.open_images_from_file": a(2496), "photoshop.failed_to_create_document_from_file": "Failed to create document from file", "google.field.image_input": a(1642), "google.field.prompt": a(1833), "google.field.batch_count": a(1598), "google.field.images_per_batch": a(783), "google.status.success": a(617), "google.status.failed": a(818), "google.status.generating": a(2647), "google.apikey_placeholder": a(1728), "google.get_apikey": a(1483), "google.baseurl_placeholder": a(2328), "google.help_tooltip": a(471), "google.model_name": a(2388), "google.model_label": a(1459), "google.model_placeholder": a(2199), "google.stop": a(2492), "google.loading": a(703), "google.generating": a(2122), "google.generate": a(620), "image.auto_toggle": a(408), "image.import_as_smartobject": a(2899), "image.import_as_newdoc": a(2289), "image.boundary": a(2732), "image.import_tip": "Hold Shift key to import as new document", "image.import_selection_button": a(789), "image.import_auto_hint": a(2691), "image.import_selection_hint": a(1354), "auth.guest_login_success": a(1581), "boundary.canvas": a(651), "boundary.select_boundary": "Select boundary", "boundary.selection": a(2433), "boundary.max_size": "Max size (px)", "boundary.max_size_error": "Enter a pixel value greater than 0", "boundary.max_size_hint": a(1804), "boundary.max_size_placeholder": "Leave empty for no limit", "boundary.no_limit": a(769), "boundary.image_quality": a(282), "boundary.image_quality_required": "Enter a quality percentage", "boundary.image_quality_range": a(2819), "boundary.preview_main_image": a(1369), "boundary.preview_select": a(1962), "boundary.preview_alt": a(193), "boundary.preview_placeholder": a(563), "boundary.settings": a(1213), "convert widget {0} failed:": a(1506), "document {0} not found": a(1619), "image.document.new": a(1812), "image.layer.smart_object": "Smart Object Layer", "layer not found {0}": "Layer {0} not found", "photoshop.invalid_boundary_type": a(325), "photoshop.no_active_layer": "No active layer", "dialog.image_source.title": a(1630), "dialog.image_source.primary_canvas": a(1858), "dialog.image_source.primary_curlayer": a(223), "dialog.image_source.canvas_canvas": "Fetch canvas with canvas boundary", "dialog.image_source.canvas_curlayer": a(2500), "dialog.image_source.curlayer_canvas": a(226), "dialog.image_source.curlayer_curlayer": a(383), "dialog.image_source.local_file": a(1989), "dialog.simple_source.title": a(2629), "dialog.simple_source.canvas": a(651), "dialog.simple_source.current_layer": "Current Layer", "dialog.simple_source.local_file": a(299), "dialog.simple_source.no_active_layer": "No active layer available", "dialog.simple_source.pick_error": a(1576) }, be = (o) => typeof o === a(1653), J0 = () => {
  const o = a;
  let x, t;
  const r = new Promise((e, s) => {
    x = e, t = s;
  });
  return r[o(1635)] = x, r.reject = t, r;
}, Ua = (o) => o == null ? "" : "" + o, fi = (o, x, t) => {
  o[a(1953)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, hi = /###/g, Ha = (o) => o && o[a(1104)](a(2595)) > -1 ? o[a(784)](hi, ".") : o, za = (o) => !o || be(o), Y0 = (o, x, t) => {
  const r = a, e = be(x) ? x[r(585)](".") : x;
  let s = 0;
  for (; s < e.length - 1; ) {
    if (za(o)) return {};
    const n = Ha(e[s]);
    !o[n] && t && (o[n] = new t()), Object[r(1700)][r(1428)][r(377)](o, n) ? o = o[n] : o = {}, ++s;
  }
  return za(o) ? {} : { obj: o, k: Ha(e[s]) };
}, Va = (o, x, t) => {
  const r = a, { obj: e, k: s } = Y0(o, x, Object);
  if (e !== void 0 || x[r(1332)] === 1) {
    e[s] = t;
    return;
  }
  let n = x[x[r(1332)] - 1], i = x[r(2103)](0, x[r(1332)] - 1), c = Y0(o, i, Object);
  for (; c.obj === void 0 && i.length; )
    n = i[i[r(1332)] - 1] + "." + n, i = i[r(2103)](0, i[r(1332)] - 1), c = Y0(o, i, Object), c != null && c[r(1862)] && typeof c[r(1862)][c.k + "." + n] !== r(2694) && (c.obj = void 0);
  c[r(1862)][c.k + "." + n] = t;
}, pi = (o, x, t, r) => {
  const e = a, { obj: s, k: n } = Y0(o, x, Object);
  s[n] = s[n] || [], s[n][e(902)](t);
}, Cx = (o, x) => {
  const t = a, { obj: r, k: e } = Y0(o, x);
  if (r && Object[t(1700)][t(1428)][t(377)](r, e))
    return r[e];
}, mi = (o, x, t) => {
  const r = Cx(o, t);
  return r !== void 0 ? r : Cx(x, t);
}, Zs = (o, x, t) => {
  const r = a;
  for (const e in x)
    e !== r(2527) && e !== "constructor" && (e in o ? be(o[e]) || o[e] instanceof String || be(x[e]) || x[e] instanceof String ? t && (o[e] = x[e]) : Zs(o[e], x[e], t) : o[e] = x[e]);
  return o;
}, U0 = (o) => o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, a(2674));
var bi = { "&": "&amp;", "<": "&lt;", ">": a(2545), '"': a(268), "'": "&#39;", "/": a(1162) };
const gi = (o) => {
  const x = a;
  return be(o) ? o[x(784)](/[&<>"'\/]/g, (t) => bi[t]) : o;
};
class yi {
  constructor(x) {
    const t = a;
    this[t(2021)] = x, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  [a(1100)](x) {
    const t = a, r = this.regExpMap.get(x);
    if (r !== void 0) return r;
    const e = new RegExp(x);
    return this[t(984)][t(1332)] === this[t(2021)] && this.regExpMap[t(882)](this[t(984)][t(2281)]()), this[t(2389)][t(1750)](x, e), this.regExpQueue.push(x), e;
  }
}
const vi = [" ", ",", "?", "!", ";"], wi = new yi(20), Si = (o, x, t) => {
  const r = a;
  x = x || "", t = t || "";
  const e = vi[r(1706)]((i) => x[r(1104)](i) < 0 && t[r(1104)](i) < 0);
  if (e[r(1332)] === 0) return !0;
  const s = wi[r(1100)]("(" + e.map((i) => i === "?" ? "\\?" : i)[r(2252)]("|") + ")");
  let n = !s[r(1055)](o);
  if (!n) {
    const i = o[r(1104)](t);
    i > 0 && !s[r(1055)](o.substring(0, i)) && (n = !0);
  }
  return n;
}, Jt = (o, x, t = ".") => {
  const r = a;
  if (!o) return;
  if (o[x])
    return Object[r(1700)][r(1428)][r(377)](o, x) ? o[x] : void 0;
  const e = x[r(585)](t);
  let s = o;
  for (let n = 0; n < e[r(1332)]; ) {
    if (!s || typeof s != "object") return;
    let i, c = "";
    for (let u = n; u < e[r(1332)]; ++u)
      if (u !== n && (c += t), c += e[u], i = s[c], i !== void 0) {
        if ([r(1653), "number", "boolean"][r(1104)](typeof i) > -1 && u < e[r(1332)] - 1) continue;
        n += u - n + 1;
        break;
      }
    s = i;
  }
  return s;
}, sx = (o) => o == null ? void 0 : o.replace("_", "-"), ki = { type: "logger", log(o) {
  const x = a;
  this[x(681)](x(1872), o);
}, warn(o) {
  this[a(681)]("warn", o);
}, error(o) {
  const x = a;
  this.output(x(2265), o);
}, output(o, x) {
  var r, e;
  const t = a;
  (e = (r = console == null ? void 0 : console[o]) == null ? void 0 : r[t(1964)]) == null || e.call(r, console, x);
} };
class Rx {
  constructor(x, t = {}) {
    this.init(x, t);
  }
  [a(943)](x, t = {}) {
    const r = a;
    this[r(2688)] = t[r(2688)] || "i18next:", this[r(665)] = x || ki, this.options = t, this[r(2264)] = t.debug;
  }
  [a(1872)](...x) {
    return this[a(2371)](x, "log", "", !0);
  }
  warn(...x) {
    const t = a;
    return this[t(2371)](x, t(196), "", !0);
  }
  [a(2265)](...x) {
    const t = a;
    return this[t(2371)](x, t(2265), "");
  }
  deprecate(...x) {
    const t = a;
    return this.forward(x, t(196), t(2461), !0);
  }
  [a(2371)](x, t, r, e) {
    const s = a;
    return e && !this[s(2264)] ? null : (be(x[0]) && (x[0] = "" + r + this[s(2688)] + " " + x[0]), this[s(665)][t](x));
  }
  [a(2469)](x) {
    const t = a;
    return new Rx(this.logger, { prefix: this[t(2688)] + ":" + x + ":", ...this[t(961)] });
  }
  [a(820)](x) {
    const t = a;
    return x = x || this[t(961)], x[t(2688)] = x[t(2688)] || this[t(2688)], new Rx(this[t(665)], x);
  }
}
var f0 = new Rx();
class Ax {
  constructor() {
    const x = a;
    this[x(1629)] = {};
  }
  on(x, t) {
    const r = a;
    return x[r(585)](" ").forEach((e) => {
      const s = r;
      this.observers[e] || (this[s(1629)][e] = /* @__PURE__ */ new Map());
      const n = this[s(1629)][e].get(t) || 0;
      this[s(1629)][e][s(1750)](t, n + 1);
    }), this;
  }
  [a(1567)](x, t) {
    const r = a;
    if (this[r(1629)][x]) {
      if (!t) {
        delete this[r(1629)][x];
        return;
      }
      this[r(1629)][x][r(882)](t);
    }
  }
  [a(990)](x, ...t) {
    const r = a;
    this[r(1629)][x] && Array.from(this[r(1629)][x].entries())[r(1953)](([s, n]) => {
      for (let i = 0; i < n; i++)
        s(...t);
    }), this.observers["*"] && Array.from(this[r(1629)]["*"][r(2700)]()).forEach(([s, n]) => {
      const i = r;
      for (let c = 0; c < n; c++)
        s[i(1964)](s, [x, ...t]);
    });
  }
}
class Ba extends Ax {
  constructor(x, t = { ns: [a(1799)], defaultNS: "translation" }) {
    const r = a;
    super(), this[r(2887)] = x || {}, this[r(961)] = t, this[r(961)][r(2720)] === void 0 && (this[r(961)][r(2720)] = "."), this[r(961)][r(1178)] === void 0 && (this[r(961)][r(1178)] = !0);
  }
  [a(2781)](x) {
    const t = a;
    this[t(961)].ns[t(1104)](x) < 0 && this.options.ns.push(x);
  }
  [a(2067)](x) {
    const t = a, r = this.options.ns[t(1104)](x);
    r > -1 && this[t(961)].ns.splice(r, 1);
  }
  getResource(x, t, r, e = {}) {
    var d, l;
    const s = a, n = e[s(2720)] !== void 0 ? e[s(2720)] : this[s(961)].keySeparator, i = e.ignoreJSONStructure !== void 0 ? e[s(1178)] : this[s(961)][s(1178)];
    let c;
    x[s(1104)](".") > -1 ? c = x[s(585)](".") : (c = [x, t], r && (Array[s(977)](r) ? c[s(902)](...r) : be(r) && n ? c.push(...r[s(585)](n)) : c.push(r)));
    const u = Cx(this[s(2887)], c);
    return !u && !t && !r && x[s(1104)](".") > -1 && (x = c[0], t = c[1], r = c.slice(2).join(".")), u || !i || !be(r) ? u : Jt((l = (d = this[s(2887)]) == null ? void 0 : d[x]) == null ? void 0 : l[t], r, n);
  }
  addResource(x, t, r, e, s = { silent: !1 }) {
    const n = a, i = s[n(2720)] !== void 0 ? s.keySeparator : this[n(961)][n(2720)];
    let c = [x, t];
    r && (c = c.concat(i ? r.split(i) : r)), x[n(1104)](".") > -1 && (c = x.split("."), e = t, t = c[1]), this[n(2781)](t), Va(this[n(2887)], c, e), s.silent || this.emit(n(1390), x, t, r, e);
  }
  [a(511)](x, t, r, e = { silent: !1 }) {
    const s = a;
    for (const n in r)
      (be(r[n]) || Array[s(977)](r[n])) && this[s(1440)](x, t, n, r[n], { silent: !0 });
    e.silent || this[s(990)](s(1390), x, t, r);
  }
  [a(2736)](x, t, r, e, s, n = { silent: !1, skipCopy: !1 }) {
    const i = a;
    let c = [x, t];
    x[i(1104)](".") > -1 && (c = x.split("."), e = r, r = t, t = c[1]), this.addNamespaces(t);
    let u = Cx(this[i(2887)], c) || {};
    n[i(1949)] || (r = JSON.parse(JSON[i(306)](r))), e ? Zs(u, r, s) : u = { ...u, ...r }, Va(this[i(2887)], c, u), n.silent || this[i(990)](i(1390), x, t, r);
  }
  [a(1760)](x, t) {
    const r = a;
    this[r(2449)](x, t) && delete this[r(2887)][x][t], this[r(2067)](t), this[r(990)](r(1897), x, t);
  }
  [a(2449)](x, t) {
    return this[a(2610)](x, t) !== void 0;
  }
  [a(628)](x, t) {
    const r = a;
    return t || (t = this.options[r(1838)]), this[r(2610)](x, t);
  }
  [a(1033)](x) {
    return this[a(2887)][x];
  }
  [a(1075)](x) {
    const t = a, r = this[t(1033)](x);
    return !!(r && Object.keys(r) || []).find((s) => r[s] && Object.keys(r[s])[t(1332)] > 0);
  }
  toJSON() {
    return this[a(2887)];
  }
}
var Ks = { processors: {}, addPostProcessor(o) {
  const x = a;
  this[x(1021)][o[x(2481)]] = o;
}, handle(o, x, t, r, e) {
  const s = a;
  return o[s(1953)]((n) => {
    var c;
    x = ((c = this[s(1021)][n]) == null ? void 0 : c.process(x, t, r, e)) ?? x;
  }), x;
} };
const Gs = Symbol(a(597));
function Pi() {
  const o = a, x = [], t = Object[o(2469)](null);
  let r;
  return t[o(1094)] = (e, s) => {
    var i;
    const n = o;
    return (i = r == null ? void 0 : r.revoke) == null || i.call(r), s === Gs ? x : (x[n(902)](s), r = Proxy.revocable(e, t), r[n(1818)]);
  }, Proxy[o(2239)](Object[o(2469)](null), t)[o(1818)];
}
function Qt(o, x) {
  const t = a, { [Gs]: r } = o(Pi());
  return r[t(2252)]((x == null ? void 0 : x[t(2720)]) ?? ".");
}
const Wa = {}, Zx = (o) => !be(o) && typeof o !== a(1001) && typeof o != "number";
class Fx extends Ax {
  constructor(x, t = {}) {
    const r = a;
    super(), fi([r(1472), r(2420), r(546), "interpolator", "backendConnector", r(1044), r(1995)], x, this), this[r(961)] = t, this[r(961)].keySeparator === void 0 && (this[r(961)][r(2720)] = "."), this[r(665)] = f0[r(2469)]("translator");
  }
  [a(2802)](x) {
    const t = a;
    x && (this[t(1411)] = x);
  }
  [a(1901)](x, t = { interpolation: {} }) {
    const r = a, e = { ...t };
    if (x == null) return !1;
    const s = this.resolve(x, e);
    if ((s == null ? void 0 : s[r(277)]) === void 0) return !1;
    const n = Zx(s.res);
    return !(e[r(2576)] === !1 && n);
  }
  [a(517)](x, t) {
    const r = a;
    let e = t[r(879)] !== void 0 ? t[r(879)] : this[r(961)][r(879)];
    e === void 0 && (e = ":");
    const s = t[r(2720)] !== void 0 ? t[r(2720)] : this.options[r(2720)];
    let n = t.ns || this[r(961)][r(1838)] || [];
    const i = e && x[r(1104)](e) > -1, c = !this[r(961)][r(407)] && !t[r(2720)] && !this[r(961)][r(374)] && !t[r(879)] && !Si(x, e, s);
    if (i && !c) {
      const u = x[r(2716)](this[r(2863)][r(296)]);
      if (u && u[r(1332)] > 0) return { key: x, namespaces: be(n) ? [n] : n };
      const d = x[r(585)](e);
      (e !== s || e === s && this[r(961)].ns.indexOf(d[0]) > -1) && (n = d[r(2281)]()), x = d[r(2252)](s);
    }
    return { key: x, namespaces: be(n) ? [n] : n };
  }
  translate(x, t, r) {
    const e = a;
    let s = typeof t == "object" ? { ...t } : t;
    if (typeof s != "object" && this[e(961)][e(1246)] && (s = this[e(961)][e(1246)](arguments)), typeof s === e(2844) && (s = { ...s }), s || (s = {}), x == null) return "";
    typeof x === e(1235) && (x = Qt(x, { ...this.options, ...s })), Array[e(977)](x) || (x = [String(x)]);
    const n = s[e(744)] !== void 0 ? s.returnDetails : this.options.returnDetails, i = s[e(2720)] !== void 0 ? s[e(2720)] : this[e(961)].keySeparator, { key: c, namespaces: u } = this[e(517)](x[x.length - 1], s), d = u[u[e(1332)] - 1];
    let l = s[e(879)] !== void 0 ? s.nsSeparator : this[e(961)][e(879)];
    l === void 0 && (l = ":");
    const f = s.lng || this[e(1411)], b = s.appendNamespaceToCIMode || this[e(961)].appendNamespaceToCIMode;
    if ((f == null ? void 0 : f[e(2522)]()) === e(1590))
      return b ? n ? { res: "" + d + l + c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: d, usedParams: this[e(2567)](s) } : "" + d + l + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: f, usedNS: d, usedParams: this.getUsedParamsDetails(s) } : c;
    const h = this[e(1635)](x, s);
    let m = h == null ? void 0 : h[e(277)];
    const v = (h == null ? void 0 : h[e(610)]) || c, k = (h == null ? void 0 : h[e(1543)]) || c, E = [e(2554), e(1468), e(757)], q = s[e(2782)] !== void 0 ? s.joinArrays : this.options[e(2782)], T = !this[e(1044)] || this[e(1044)][e(616)], C = s[e(848)] !== void 0 && !be(s.count), P = Fx.hasDefaultValue(s), F = C ? this[e(546)][e(2221)](f, s[e(848)], s) : "", D = s[e(2396)] && C ? this.pluralResolver[e(2221)](f, s.count, { ordinal: !1 }) : "", j = C && !s[e(2396)] && s.count === 0, O = j && s["defaultValue" + this[e(961)][e(881)] + e(341)] || s["defaultValue" + F] || s[e(397) + D] || s[e(397)];
    let N = m;
    T && !m && P && (N = O);
    const R = Zx(N), L = Object[e(1700)][e(2032)][e(1964)](N);
    if (T && N && R && E[e(1104)](L) < 0 && !(be(q) && Array[e(977)](N))) {
      if (!s[e(2576)] && !this[e(961)].returnObjects) {
        !this[e(961)].returnedObjectHandler && this.logger[e(196)](e(402));
        const $ = this[e(961)][e(589)] ? this[e(961)][e(589)](v, N, { ...s, ns: u }) : e(507) + c + " (" + this.language + e(1093);
        return n ? (h[e(277)] = $, h.usedParams = this[e(2567)](s), h) : $;
      }
      if (i) {
        const $ = Array[e(977)](N), z = $ ? [] : {}, G = $ ? k : v;
        for (const ce in N)
          if (Object.prototype[e(1428)][e(377)](N, ce)) {
            const ue = "" + G + i + ce;
            P && !m ? z[ce] = this[e(2375)](ue, { ...s, defaultValue: Zx(O) ? O[ce] : void 0, joinArrays: !1, ns: u }) : z[ce] = this.translate(ue, { ...s, joinArrays: !1, ns: u }), z[ce] === ue && (z[ce] = N[ce]);
          }
        m = z;
      }
    } else if (T && be(q) && Array[e(977)](m))
      m = m[e(2252)](q), m && (m = this[e(813)](m, x, s, r));
    else {
      let $ = !1, z = !1;
      !this[e(2689)](m) && P && ($ = !0, m = O), !this[e(2689)](m) && (z = !0, m = c);
      const G = s.missingKeyNoValueFallbackToKey || this[e(961)][e(1072)], ce = G && z ? void 0 : m, ue = P && O !== m && this[e(961)][e(2740)];
      if (z || $ || ue) {
        if (this[e(665)].log(ue ? e(2362) : "missingKey", f, d, c, ue ? O : m), i) {
          const ke = this.resolve(c, { ...s, keySeparator: !1 });
          ke && ke[e(277)] && this[e(665)][e(196)]("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let fe = [];
        const oe = this[e(2420)][e(668)](this[e(961)][e(2218)], s.lng || this.language);
        if (this[e(961)].saveMissingTo === e(884) && oe && oe[0]) for (let ke = 0; ke < oe[e(1332)]; ke++)
          fe.push(oe[ke]);
        else this[e(961)][e(1702)] === e(1288) ? fe = this[e(2420)].toResolveHierarchy(s[e(892)] || this.language) : fe[e(902)](s[e(892)] || this.language);
        const le = (ke, ye, Me) => {
          var _;
          const Ee = e, Je = P && Me !== m ? Me : ce;
          this[Ee(961)].missingKeyHandler ? this[Ee(961)][Ee(1981)](ke, d, ye, Je, ue, s) : (_ = this[Ee(1135)]) != null && _[Ee(453)] && this[Ee(1135)][Ee(453)](ke, d, ye, Je, ue, s), this[Ee(990)](Ee(2833), ke, d, ye, m);
        };
        this.options[e(453)] && (this[e(961)].saveMissingPlurals && C ? fe[e(1953)]((ke) => {
          const ye = e, Me = this[ye(546)][ye(2177)](ke, s);
          j && s["defaultValue" + this.options.pluralSeparator + ye(341)] && Me[ye(1104)](this[ye(961)][ye(881)] + "zero") < 0 && Me[ye(902)](this[ye(961)][ye(881)] + ye(341)), Me[ye(1953)]((Ee) => {
            const Je = ye;
            le([ke], c + Ee, s[Je(397) + Ee] || O);
          });
        }) : le(fe, c, O));
      }
      m = this[e(813)](m, x, s, h, r), z && m === c && this[e(961)][e(1119)] && (m = "" + d + l + c), (z || $) && this.options[e(212)] && (m = this.options[e(212)](this[e(961)][e(1119)] ? "" + d + l + c : c, $ ? m : void 0, s));
    }
    return n ? (h.res = m, h[e(2628)] = this.getUsedParamsDetails(s), h) : m;
  }
  [a(813)](x, t, r, e, s) {
    var u, d;
    const n = a;
    if ((u = this[n(1044)]) != null && u[n(429)]) x = this[n(1044)].parse(x, { ...this.options[n(1146)][n(1274)], ...r }, r[n(892)] || this[n(1411)] || e.usedLng, e[n(294)], e.usedKey, { resolved: e });
    else if (!r.skipInterpolation) {
      r[n(1146)] && this[n(2863)][n(943)]({ ...r, interpolation: { ...this[n(961)][n(1146)], ...r[n(1146)] } });
      const l = be(x) && (((d = r == null ? void 0 : r[n(1146)]) == null ? void 0 : d[n(2705)]) !== void 0 ? r.interpolation.skipOnVariables : this[n(961)][n(1146)][n(2705)]);
      let f;
      if (l) {
        const h = x[n(2716)](this[n(2863)][n(296)]);
        f = h && h[n(1332)];
      }
      let b = r[n(784)] && !be(r[n(784)]) ? r[n(784)] : r;
      if (this[n(961)][n(1146)].defaultVariables && (b = { ...this[n(961)][n(1146)][n(1274)], ...b }), x = this.interpolator[n(2368)](x, b, r[n(892)] || this[n(1411)] || e[n(1441)], r), l) {
        const h = x.match(this.interpolator[n(296)]), m = h && h.length;
        f < m && (r[n(758)] = !1);
      }
      !r[n(892)] && e && e[n(277)] && (r.lng = this.language || e[n(1441)]), r[n(758)] !== !1 && (x = this[n(2863)].nest(x, (...h) => {
        const m = n;
        return (s == null ? void 0 : s[0]) === h[0] && !r.context ? (this[m(665)][m(196)](m(241) + h[0] + m(2161) + t[0]), null) : this.translate(...h, t);
      }, r)), r.interpolation && this[n(2863)][n(1660)]();
    }
    const i = r[n(1381)] || this[n(961)].postProcess, c = be(i) ? [i] : i;
    return x != null && (c != null && c[n(1332)]) && r[n(2381)] !== !1 && (x = Ks[n(2342)](c, x, t, this.options && this[n(961)][n(619)] ? { i18nResolved: { ...e, usedParams: this.getUsedParamsDetails(r) }, ...r } : r, this)), x;
  }
  resolve(x, t = {}) {
    let r, e, s, n, i;
    return be(x) && (x = [x]), x.forEach((c) => {
      const u = K;
      if (this.isValidLookup(r)) return;
      const d = this.extractFromKey(c, t), l = d[u(1175)];
      e = l;
      let f = d[u(736)];
      this[u(961)][u(1461)] && (f = f[u(1545)](this[u(961)].fallbackNS));
      const b = t.count !== void 0 && !be(t[u(848)]), h = b && !t[u(2396)] && t.count === 0, m = t[u(1405)] !== void 0 && (be(t[u(1405)]) || typeof t[u(1405)] === u(1206)) && t[u(1405)] !== "", v = t[u(265)] ? t.lngs : this[u(2420)][u(1227)](t.lng || this[u(1411)], t[u(2218)]);
      f.forEach((k) => {
        var q, T;
        const E = u;
        this[E(2689)](r) || (i = k, !Wa[v[0] + "-" + k] && ((q = this[E(1995)]) != null && q.hasLoadedNamespace) && !((T = this.utils) != null && T[E(328)](i)) && (Wa[v[0] + "-" + k] = !0, this[E(665)].warn(E(197) + e + '" for languages "' + v[E(2252)](", ") + E(2163) + i + '" was not yet loaded', E(1376))), v.forEach((C) => {
          var j;
          const P = E;
          if (this[P(2689)](r)) return;
          n = C;
          const F = [l];
          if ((j = this[P(1044)]) != null && j[P(1076)]) this[P(1044)][P(1076)](F, l, C, k, t);
          else {
            let O;
            b && (O = this[P(546)].getSuffix(C, t.count, t));
            const N = this[P(961)][P(881)] + P(341), R = this.options[P(881)] + P(2396) + this[P(961)].pluralSeparator;
            if (b && (t.ordinal && O[P(1104)](R) === 0 && F[P(902)](l + O[P(784)](R, this.options[P(881)])), F[P(902)](l + O), h && F.push(l + N)), m) {
              const L = "" + l + (this[P(961)][P(2001)] || "_") + t[P(1405)];
              F[P(902)](L), b && (t[P(2396)] && O[P(1104)](R) === 0 && F[P(902)](L + O.replace(R, this[P(961)].pluralSeparator)), F[P(902)](L + O), h && F.push(L + N));
            }
          }
          let D;
          for (; D = F[P(469)](); )
            !this[P(2689)](r) && (s = D, r = this.getResource(C, k, D, t));
        }));
      });
    }), { res: r, usedKey: e, exactUsedKey: s, usedLng: n, usedNS: i };
  }
  [a(2689)](x) {
    const t = a;
    return x !== void 0 && !(!this[t(961)].returnNull && x === null) && !(!this[t(961)][t(1049)] && x === "");
  }
  getResource(x, t, r, e = {}) {
    var n;
    const s = a;
    return (n = this[s(1044)]) != null && n[s(2610)] ? this.i18nFormat[s(2610)](x, t, r, e) : this.resourceStore[s(2610)](x, t, r, e);
  }
  [a(2567)](x = {}) {
    const t = a, r = [t(397), t(2396), t(1405), t(784), "lng", t(265), "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", t(1381), t(1146)], e = x[t(784)] && !be(x[t(784)]);
    let s = e ? x[t(784)] : x;
    if (e && typeof x[t(848)] < "u" && (s[t(848)] = x.count), this[t(961)][t(1146)][t(1274)] && (s = { ...this[t(961)][t(1146)][t(1274)], ...s }), !e) {
      s = { ...s };
      for (const n of r)
        delete s[n];
    }
    return s;
  }
  static [a(857)](x) {
    const t = a, r = t(397);
    for (const e in x)
      if (Object.prototype[t(1428)][t(377)](x, e) && r === e[t(2453)](0, r[t(1332)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Za {
  constructor(x) {
    const t = a;
    this[t(961)] = x, this[t(2605)] = this[t(961)][t(2605)] || !1, this[t(665)] = f0[t(2469)](t(2420));
  }
  [a(1882)](x) {
    const t = a;
    if (x = sx(x), !x || x.indexOf("-") < 0) return null;
    const r = x[t(585)]("-");
    return r[t(1332)] === 2 || (r[t(469)](), r[r[t(1332)] - 1][t(2522)]() === "x") ? null : this[t(2312)](r[t(2252)]("-"));
  }
  [a(2463)](x) {
    const t = a;
    if (x = sx(x), !x || x[t(1104)]("-") < 0) return x;
    const r = x.split("-");
    return this[t(2312)](r[0]);
  }
  formatLanguageCode(x) {
    const t = a;
    if (be(x) && x[t(1104)]("-") > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(x)[0];
      } catch {
      }
      return r && this[t(961)][t(2346)] && (r = r.toLowerCase()), r || (this[t(961)][t(2346)] ? x.toLowerCase() : x);
    }
    return this[t(961)][t(573)] || this[t(961)][t(2346)] ? x.toLowerCase() : x;
  }
  [a(384)](x) {
    const t = a;
    return (this[t(961)][t(499)] === t(2137) || this[t(961)][t(1997)]) && (x = this[t(2463)](x)), !this[t(2605)] || !this[t(2605)][t(1332)] || this[t(2605)][t(1104)](x) > -1;
  }
  getBestMatchFromCodes(x) {
    const t = a;
    if (!x) return null;
    let r;
    return x[t(1953)]((e) => {
      const s = t;
      if (r) return;
      const n = this.formatLanguageCode(e);
      (!this[s(961)][s(2605)] || this[s(384)](n)) && (r = n);
    }), !r && this[t(961)].supportedLngs && x[t(1953)]((e) => {
      const s = t;
      if (r) return;
      const n = this.getScriptPartFromCode(e);
      if (this[s(384)](n)) return r = n;
      const i = this[s(2463)](e);
      if (this[s(384)](i)) return r = i;
      r = this[s(961)].supportedLngs[s(1036)]((c) => {
        const u = s;
        if (c === i) return c;
        if (!(c[u(1104)]("-") < 0 && i[u(1104)]("-") < 0) && (c.indexOf("-") > 0 && i[u(1104)]("-") < 0 && c[u(2453)](0, c[u(1104)]("-")) === i || c[u(1104)](i) === 0 && i.length > 1))
          return c;
      });
    }), r || (r = this[t(668)](this[t(961)][t(2218)])[0]), r;
  }
  [a(668)](x, t) {
    const r = a;
    if (!x) return [];
    if (typeof x === r(1235) && (x = x(t)), be(x) && (x = [x]), Array[r(977)](x)) return x;
    if (!t) return x.default || [];
    let e = x[t];
    return e || (e = x[this[r(1882)](t)]), e || (e = x[this[r(2312)](t)]), e || (e = x[this[r(2463)](t)]), e || (e = x[r(2222)]), e || [];
  }
  [a(1227)](x, t) {
    const r = a, e = this[r(668)]((t === !1 ? [] : t) || this.options[r(2218)] || [], x), s = [], n = (i) => {
      const c = r;
      i && (this.isSupportedCode(i) ? s.push(i) : this.logger[c(196)](c(382) + i));
    };
    return be(x) && (x[r(1104)]("-") > -1 || x[r(1104)]("_") > -1) ? (this[r(961)].load !== r(2137) && n(this[r(2312)](x)), this[r(961)][r(499)] !== r(2137) && this.options[r(499)] !== "currentOnly" && n(this.getScriptPartFromCode(x)), this[r(961)][r(499)] !== r(2468) && n(this[r(2463)](x))) : be(x) && n(this[r(2312)](x)), e[r(1953)]((i) => {
      const c = r;
      s[c(1104)](i) < 0 && n(this[c(2312)](i));
    }), s;
  }
}
const Ka = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Ga = { select: (o) => a(o === 1 ? 542 : 1102), resolvedOptions: () => ({ pluralCategories: [a(542), a(1102)] }) };
class Ei {
  constructor(x, t = {}) {
    const r = a;
    this.languageUtils = x, this[r(961)] = t, this[r(665)] = f0[r(2469)](r(546)), this.pluralRulesCache = {};
  }
  addRule(x, t) {
    this.rules[x] = t;
  }
  [a(1526)]() {
    const x = a;
    this[x(1713)] = {};
  }
  [a(253)](x, t = {}) {
    const r = a, e = sx(x === "dev" ? "en" : x), s = t[r(2396)] ? r(2396) : "cardinal", n = JSON[r(306)]({ cleanedCode: e, type: s });
    if (n in this.pluralRulesCache) return this[r(1713)][n];
    let i;
    try {
      i = new Intl[r(1845)](e, { type: s });
    } catch {
      if (!Intl) return this[r(665)][r(2265)]("No Intl support, please use an Intl polyfill!"), Ga;
      if (!x[r(2716)](/-|_/)) return Ga;
      const u = this.languageUtils[r(2463)](x);
      i = this.getRule(u, t);
    }
    return this[r(1713)][n] = i, i;
  }
  [a(1349)](x, t = {}) {
    const r = a;
    let e = this[r(253)](x, t);
    return e || (e = this[r(253)]("dev", t)), (e == null ? void 0 : e[r(1663)]()[r(1618)].length) > 1;
  }
  [a(1644)](x, t, r = {}) {
    const e = a;
    return this.getSuffixes(x, r)[e(2742)]((s) => "" + t + s);
  }
  [a(2177)](x, t = {}) {
    const r = a;
    let e = this[r(253)](x, t);
    return e || (e = this[r(253)](r(1236), t)), e ? e[r(1663)]()[r(1618)].sort((s, n) => Ka[s] - Ka[n])[r(2742)]((s) => "" + this[r(961)][r(1764)] + (t[r(2396)] ? r(2396) + this[r(961)][r(1764)] : "") + s) : [];
  }
  [a(2221)](x, t, r = {}) {
    const e = a, s = this[e(253)](x, r);
    return s ? "" + this.options[e(1764)] + (r[e(2396)] ? e(2396) + this[e(961)][e(1764)] : "") + s[e(1225)](t) : (this[e(665)].warn(e(949) + x), this[e(2221)](e(1236), t, r));
  }
}
const Ja = (o, x, t, r = ".", e = !0) => {
  let s = mi(o, x, t);
  return !s && e && be(t) && (s = Jt(o, t, r), s === void 0 && (s = Jt(x, t, r))), s;
}, Kx = (o) => o.replace(/\$/g, a(1420));
class Qa {
  constructor(x = {}) {
    var r;
    const t = a;
    this[t(665)] = f0[t(2469)](t(2863)), this[t(961)] = x, this[t(2039)] = ((r = x == null ? void 0 : x[t(1146)]) == null ? void 0 : r.format) || ((e) => e), this.init(x);
  }
  [a(943)](x = {}) {
    const t = a;
    x.interpolation || (x.interpolation = { escapeValue: !0 });
    const { escape: r, escapeValue: e, useRawValueToEscape: s, prefix: n, prefixEscaped: i, suffix: c, suffixEscaped: u, formatSeparator: d, unescapeSuffix: l, unescapePrefix: f, nestingPrefix: b, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: v, nestingOptionsSeparator: k, maxReplaces: E, alwaysFormat: q } = x[t(1146)];
    this[t(2329)] = r !== void 0 ? r : gi, this.escapeValue = e !== void 0 ? e : !0, this[t(817)] = s !== void 0 ? s : !1, this[t(2688)] = n ? U0(n) : i || "{{", this[t(1907)] = c ? U0(c) : u || "}}", this[t(2190)] = d || ",", this.unescapePrefix = l ? "" : f || "-", this[t(2585)] = this.unescapePrefix ? "" : l || "", this[t(606)] = b ? U0(b) : h || U0("$t("), this[t(1652)] = m ? U0(m) : v || U0(")"), this[t(2300)] = k || ",", this.maxReplaces = E || 1e3, this[t(2403)] = q !== void 0 ? q : !1, this[t(1922)]();
  }
  reset() {
    const x = a;
    this[x(961)] && this[x(943)](this[x(961)]);
  }
  [a(1922)]() {
    const x = a, t = (r, e) => {
      const s = K;
      return (r == null ? void 0 : r[s(2635)]) === e ? (r.lastIndex = 0, r) : new RegExp(e, "g");
    };
    this[x(1778)] = t(this[x(1778)], this[x(2688)] + x(334) + this.suffix), this[x(461)] = t(this.regexpUnescape, "" + this[x(2688)] + this[x(1671)] + x(334) + this[x(2585)] + this[x(1907)]), this[x(296)] = t(this[x(296)], this[x(606)] + x(2170) + this.nestingSuffix);
  }
  [a(2368)](x, t, r, e) {
    var h;
    const s = a;
    let n, i, c;
    const u = this[s(961)] && this.options[s(1146)] && this[s(961)].interpolation[s(1274)] || {}, d = (m) => {
      const v = s;
      if (m.indexOf(this[v(2190)]) < 0) {
        const T = Ja(t, u, m, this[v(961)][v(2720)], this.options[v(1178)]);
        return this[v(2403)] ? this[v(2039)](T, void 0, r, { ...e, ...t, interpolationkey: m }) : T;
      }
      const k = m[v(585)](this.formatSeparator), E = k[v(2281)]()[v(436)](), q = k.join(this.formatSeparator).trim();
      return this[v(2039)](Ja(t, u, E, this[v(961)][v(2720)], this[v(961)][v(1178)]), q, r, { ...e, ...t, interpolationkey: E });
    };
    this.resetRegExp();
    const l = (e == null ? void 0 : e[s(1511)]) || this.options[s(1511)], f = ((h = e == null ? void 0 : e[s(1146)]) == null ? void 0 : h[s(2705)]) !== void 0 ? e[s(1146)].skipOnVariables : this[s(961)].interpolation[s(2705)];
    return [{ regex: this[s(461)], safeValue: (m) => Kx(m) }, { regex: this[s(1778)], safeValue: (m) => this[s(835)] ? Kx(this[s(2329)](m)) : Kx(m) }][s(1953)]((m) => {
      const v = s;
      for (c = 0; n = m[v(2830)][v(1661)](x); ) {
        const k = n[1].trim();
        if (i = d(k), i === void 0)
          if (typeof l === v(1235)) {
            const q = l(x, n, e);
            i = be(q) ? q : "";
          } else if (e && Object[v(1700)].hasOwnProperty[v(377)](e, k)) i = "";
          else if (f) {
            i = n[0];
            continue;
          } else this[v(665)][v(196)]("missed to pass in variable " + k + v(1438) + x), i = "";
        else !be(i) && !this.useRawValueToEscape && (i = Ua(i));
        const E = m[v(2219)](i);
        if (x = x.replace(n[0], E), f ? (m[v(2830)][v(2719)] += i.length, m[v(2830)].lastIndex -= n[0][v(1332)]) : m[v(2830)].lastIndex = 0, c++, c >= this[v(799)]) break;
      }
    }), x;
  }
  [a(758)](x, t, r = {}) {
    const e = a;
    let s, n, i;
    const c = (u, d) => {
      const l = K, f = this[l(2300)];
      if (u[l(1104)](f) < 0) return u;
      const b = u[l(585)](new RegExp(f + l(1479)));
      let h = "{" + b[1];
      u = b[0], h = this[l(2368)](h, i);
      const m = h[l(2716)](/'/g), v = h[l(2716)](/"/g);
      (((m == null ? void 0 : m[l(1332)]) ?? 0) % 2 === 0 && !v || v[l(1332)] % 2 !== 0) && (h = h[l(784)](/'/g, '"'));
      try {
        i = JSON[l(429)](h), d && (i = { ...d, ...i });
      } catch (k) {
        return this[l(665)][l(196)](l(2447) + u, k), "" + u + f + h;
      }
      return i[l(397)] && i[l(397)][l(1104)](this[l(2688)]) > -1 && delete i.defaultValue, u;
    };
    for (; s = this.nestingRegexp.exec(x); ) {
      let u = [];
      i = { ...r }, i = i[e(784)] && !be(i[e(784)]) ? i.replace : i, i[e(2381)] = !1, delete i[e(397)];
      const d = /{.*}/[e(1055)](s[1]) ? s[1][e(498)]("}") + 1 : s[1][e(1104)](this[e(2190)]);
      if (d !== -1 && (u = s[1][e(2103)](d)[e(585)](this[e(2190)])[e(2742)]((l) => l[e(436)]())[e(1706)](Boolean), s[1] = s[1][e(2103)](0, d)), n = t(c[e(377)](this, s[1][e(436)](), i), i), n && s[0] === x && !be(n)) return n;
      be(n) || (n = Ua(n)), !n && (this[e(665)][e(196)](e(1739) + s[1] + e(1199) + x), n = ""), u.length && (n = u.reduce((l, f) => this[e(2039)](l, f, r[e(892)], { ...r, interpolationkey: s[1].trim() }), n.trim())), x = x[e(784)](s[0], n), this.regexp[e(2719)] = 0;
    }
    return x;
  }
}
const Ii = (o) => {
  const x = a;
  let t = o[x(2522)]()[x(436)]();
  const r = {};
  if (o[x(1104)]("(") > -1) {
    const e = o[x(585)]("(");
    t = e[0][x(2522)]()[x(436)]();
    const s = e[1][x(2453)](0, e[1][x(1332)] - 1);
    t === x(1978) && s[x(1104)](":") < 0 ? r[x(1978)] || (r[x(1978)] = s[x(436)]()) : t === "relativetime" && s[x(1104)](":") < 0 ? r[x(1293)] || (r.range = s.trim()) : s.split(";")[x(1953)]((i) => {
      const c = x;
      if (i) {
        const [u, ...d] = i[c(585)](":"), l = d.join(":")[c(436)]()[c(784)](/^'+|'+$/g, ""), f = u[c(436)]();
        r[f] || (r[f] = l), l === c(512) && (r[f] = !1), l === c(1458) && (r[f] = !0), isNaN(l) || (r[f] = parseInt(l, 10));
      }
    });
  }
  return { formatName: t, formatOptions: r };
}, Xa = (o) => {
  const x = {};
  return (t, r, e) => {
    const s = K;
    let n = e;
    e && e[s(760)] && e.formatParams && e.formatParams[e[s(760)]] && e[e.interpolationkey] && (n = { ...n, [e.interpolationkey]: void 0 });
    const i = r + JSON[s(306)](n);
    let c = x[i];
    return !c && (c = o(sx(r), e), x[i] = c), c(t);
  };
}, Ci = (o) => (x, t, r) => o(sx(t), r)(x);
class Ri {
  constructor(x = {}) {
    const t = a;
    this[t(665)] = f0[t(2469)](t(1611)), this[t(961)] = x, this[t(943)](x);
  }
  [a(943)](x, t = { interpolation: {} }) {
    const r = a;
    this[r(2190)] = t[r(1146)][r(2190)] || ",";
    const e = t[r(514)] ? Xa : Ci;
    this[r(2726)] = { number: e((s, n) => {
      const i = r, c = new Intl.NumberFormat(s, { ...n });
      return (u) => c[i(2039)](u);
    }), currency: e((s, n) => {
      const i = r, c = new Intl[i(522)](s, { ...n, style: i(1978) });
      return (u) => c[i(2039)](u);
    }), datetime: e((s, n) => {
      const i = r, c = new Intl.DateTimeFormat(s, { ...n });
      return (u) => c[i(2039)](u);
    }), relativetime: e((s, n) => {
      const i = r, c = new Intl[i(801)](s, { ...n });
      return (u) => c[i(2039)](u, n[i(1293)] || i(2323));
    }), list: e((s, n) => {
      const i = r, c = new Intl.ListFormat(s, { ...n });
      return (u) => c[i(2039)](u);
    }) };
  }
  [a(479)](x, t) {
    const r = a;
    this[r(2726)][x[r(2522)]()[r(436)]()] = t;
  }
  addCached(x, t) {
    const r = a;
    this[r(2726)][x.toLowerCase()[r(436)]()] = Xa(t);
  }
  [a(2039)](x, t, r, e = {}) {
    const s = a, n = t[s(585)](this[s(2190)]);
    if (n.length > 1 && n[0][s(1104)]("(") > 1 && n[0][s(1104)](")") < 0 && n[s(1036)]((c) => c[s(1104)](")") > -1)) {
      const c = n.findIndex((u) => u[s(1104)](")") > -1);
      n[0] = [n[0], ...n[s(2301)](1, c)][s(2252)](this.formatSeparator);
    }
    return n[s(1774)]((c, u) => {
      var b;
      const d = s, { formatName: l, formatOptions: f } = Ii(u);
      if (this.formats[l]) {
        let h = c;
        try {
          const m = ((b = e == null ? void 0 : e[d(727)]) == null ? void 0 : b[e[d(760)]]) || {}, v = m[d(885)] || m[d(892)] || e[d(885)] || e[d(892)] || r;
          h = this[d(2726)][l](c, v, { ...f, ...e, ...m });
        } catch (m) {
          this[d(665)][d(196)](m);
        }
        return h;
      } else this[d(665)][d(196)](d(2682) + l);
      return c;
    }, x);
  }
}
const Fi = (o, x) => {
  const t = a;
  o[t(2285)][x] !== void 0 && (delete o[t(2285)][x], o[t(711)]--);
};
class Ni extends Ax {
  constructor(x, t, r, e = {}) {
    var n, i;
    const s = a;
    super(), this.backend = x, this[s(2277)] = t, this[s(686)] = r, this.languageUtils = r[s(2420)], this[s(961)] = e, this.logger = f0.create(s(1135)), this[s(1024)] = [], this[s(2334)] = e[s(2334)] || 10, this[s(1233)] = 0, this[s(443)] = e[s(443)] >= 0 ? e[s(443)] : 5, this.retryTimeout = e[s(2106)] >= 1 ? e.retryTimeout : 350, this[s(2633)] = {}, this[s(1834)] = [], (i = (n = this.backend) == null ? void 0 : n[s(943)]) == null || i.call(n, r, e[s(694)], e);
  }
  [a(709)](x, t, r, e) {
    const s = a, n = {}, i = {}, c = {}, u = {};
    return x[s(1953)]((d) => {
      const l = s;
      let f = !0;
      t[l(1953)]((b) => {
        const h = l, m = d + "|" + b;
        !r[h(2263)] && this[h(2277)][h(2449)](d, b) ? this[h(2633)][m] = 2 : this[h(2633)][m] < 0 || (this.state[m] === 1 ? i[m] === void 0 && (i[m] = !0) : (this[h(2633)][m] = 1, f = !1, i[m] === void 0 && (i[m] = !0), n[m] === void 0 && (n[m] = !0), u[b] === void 0 && (u[b] = !0)));
      }), f || (c[d] = !0);
    }), (Object[s(1806)](n)[s(1332)] || Object[s(1806)](i)[s(1332)]) && this[s(1834)][s(902)]({ pending: i, pendingCount: Object.keys(i)[s(1332)], loaded: {}, errors: [], callback: e }), { toLoad: Object[s(1806)](n), pending: Object[s(1806)](i), toLoadLanguages: Object[s(1806)](c), toLoadNamespaces: Object[s(1806)](u) };
  }
  [a(2423)](x, t, r) {
    const e = a, s = x[e(585)]("|"), n = s[0], i = s[1];
    t && this[e(990)](e(1456), n, i, t), !t && r && this[e(2277)][e(2736)](n, i, r, void 0, void 0, { skipCopy: !0 }), this[e(2633)][x] = t ? -1 : 2, t && r && (this.state[x] = 0);
    const c = {};
    this.queue.forEach((u) => {
      const d = e;
      pi(u[d(2423)], [n], i), Fi(u, x), t && u[d(638)][d(902)](t), u.pendingCount === 0 && !u[d(1398)] && (Object.keys(u[d(2423)]).forEach((l) => {
        const f = d;
        c[l] || (c[l] = {});
        const b = u[f(2423)][l];
        b[f(1332)] && b[f(1953)]((h) => {
          c[l][h] === void 0 && (c[l][h] = !0);
        });
      }), u.done = !0, u.errors[d(1332)] ? u.callback(u[d(638)]) : u.callback());
    }), this[e(990)](e(2423), c), this.queue = this[e(1834)][e(1706)]((u) => !u[e(1398)]);
  }
  read(x, t, r, e = 0, s = this[a(2106)], n) {
    const i = a;
    if (!x[i(1332)]) return n(null, {});
    if (this[i(1233)] >= this[i(2334)]) {
      this.waitingReads[i(902)]({ lng: x, ns: t, fcName: r, tried: e, wait: s, callback: n });
      return;
    }
    this.readingCalls++;
    const c = (d, l) => {
      const f = i;
      if (this[f(1233)]--, this.waitingReads.length > 0) {
        const b = this.waitingReads.shift();
        this.read(b[f(892)], b.ns, b[f(2422)], b[f(1918)], b[f(2133)], b[f(1352)]);
      }
      if (d && l && e < this[f(443)]) {
        setTimeout(() => {
          this[f(1289)].call(this, x, t, r, e + 1, s * 2, n);
        }, s);
        return;
      }
      n(d, l);
    }, u = this[i(694)][r][i(591)](this[i(694)]);
    if (u.length === 2) {
      try {
        const d = u(x, t);
        d && typeof d[i(723)] == "function" ? d[i(723)]((l) => c(null, l)).catch(c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return u(x, t, c);
  }
  prepareLoading(x, t, r = {}, e) {
    const s = a;
    if (!this[s(694)]) return this.logger[s(196)](s(2816)), e && e();
    be(x) && (x = this[s(2420)][s(1227)](x)), be(t) && (t = [t]);
    const n = this[s(709)](x, t, r, e);
    if (!n.toLoad[s(1332)])
      return n[s(2285)][s(1332)] || e(), null;
    n[s(904)][s(1953)]((i) => {
      this[s(2053)](i);
    });
  }
  load(x, t, r) {
    this[a(1606)](x, t, {}, r);
  }
  [a(2263)](x, t, r) {
    this.prepareLoading(x, t, { reload: !0 }, r);
  }
  [a(2053)](x, t = "") {
    const r = a, e = x.split("|"), s = e[0], n = e[1];
    this[r(1289)](s, n, r(1289), void 0, void 0, (i, c) => {
      const u = r;
      i && this[u(665)][u(196)](t + u(1302) + n + " for language " + s + u(345), i), !i && c && this.logger[u(1872)](t + u(163) + n + u(945) + s, c), this.loaded(x, i, c);
    });
  }
  [a(453)](x, t, r, e, s, n = {}, i = () => {
  }) {
    var u, d, l, f, b;
    const c = a;
    if ((d = (u = this[c(686)]) == null ? void 0 : u.utils) != null && d.hasLoadedNamespace && !((f = (l = this[c(686)]) == null ? void 0 : l.utils) != null && f[c(328)](t))) {
      this.logger[c(196)](c(2822) + r + '" as the namespace "' + t + c(2832), c(1376));
      return;
    }
    if (!(r == null || r === "")) {
      if ((b = this[c(694)]) != null && b.create) {
        const h = { ...n, isUpdate: s }, m = this[c(694)].create[c(591)](this[c(694)]);
        if (m[c(1332)] < 6) try {
          let v;
          m.length === 5 ? v = m(x, t, r, e, h) : v = m(x, t, r, e), v && typeof v[c(723)] == "function" ? v[c(723)]((k) => i(null, k))[c(1539)](i) : i(null, v);
        } catch (v) {
          i(v);
        }
        else m(x, t, r, e, i, h);
      }
      !x || !x[0] || this[c(2277)][c(1440)](x[0], t, r, e);
    }
  }
}
const Ya = () => ({ debug: !1, initAsync: !0, ns: [a(1799)], defaultNS: [a(1799)], fallbackLng: [a(1236)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: a(884), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (o) => {
  const x = a;
  let t = {};
  if (typeof o[1] == "object" && (t = o[1]), be(o[1]) && (t[x(397)] = o[1]), be(o[2]) && (t[x(1496)] = o[2]), typeof o[2] === x(2844) || typeof o[3] == "object") {
    const r = o[3] || o[2];
    Object[x(1806)](r)[x(1953)]((e) => {
      t[e] = r[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (o) => o, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: a(1434), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), er = (o) => {
  var t, r;
  const x = a;
  return be(o.ns) && (o.ns = [o.ns]), be(o[x(2218)]) && (o.fallbackLng = [o.fallbackLng]), be(o[x(1461)]) && (o[x(1461)] = [o[x(1461)]]), ((r = (t = o[x(2605)]) == null ? void 0 : t.indexOf) == null ? void 0 : r.call(t, x(1590))) < 0 && (o[x(2605)] = o[x(2605)][x(1545)]([x(1590)])), typeof o[x(308)] === x(1001) && (o[x(680)] = o[x(308)]), o;
}, hx = () => {
}, Ti = (o) => {
  const x = a;
  Object.getOwnPropertyNames(Object[x(2386)](o)).forEach((r) => {
    const e = x;
    typeof o[r] === e(1235) && (o[r] = o[r].bind(o));
  });
};
class ex extends Ax {
  constructor(x = {}, t) {
    const r = a;
    if (super(), this.options = er(x), this[r(686)] = {}, this[r(665)] = f0, this[r(669)] = { external: [] }, Ti(this), t && !this.isInitialized && !x[r(1245)]) {
      if (!this[r(961)].initAsync) return this[r(943)](x, t), this;
      setTimeout(() => {
        this.init(x, t);
      }, 0);
    }
  }
  [a(943)](x = {}, t) {
    const r = a;
    this[r(1389)] = !0, typeof x === r(1235) && (t = x, x = {}), x[r(1838)] == null && x.ns && (be(x.ns) ? x.defaultNS = x.ns : x.ns[r(1104)]("translation") < 0 && (x[r(1838)] = x.ns[0]));
    const e = Ya();
    this[r(961)] = { ...e, ...this[r(961)], ...er(x) }, this[r(961)][r(1146)] = { ...e[r(1146)], ...this[r(961)][r(1146)] }, x[r(2720)] !== void 0 && (this.options[r(407)] = x[r(2720)]), x[r(879)] !== void 0 && (this[r(961)].userDefinedNsSeparator = x.nsSeparator);
    const s = (d) => {
      const l = r;
      return d ? typeof d === l(1235) ? new d() : d : null;
    };
    if (!this[r(961)].isClone) {
      this[r(669)][r(665)] ? f0[r(943)](s(this.modules.logger), this[r(961)]) : f0[r(943)](null, this[r(961)]);
      let d;
      this[r(669)][r(1611)] ? d = this[r(669)].formatter : d = Ri;
      const l = new Za(this[r(961)]);
      this[r(2277)] = new Ba(this[r(961)][r(554)], this[r(961)]);
      const f = this[r(686)];
      f.logger = f0, f[r(1472)] = this[r(2277)], f[r(2420)] = l, f.pluralResolver = new Ei(l, { prepend: this.options[r(881)], simplifyPluralSuffix: this.options[r(766)] }), this[r(961)][r(1146)][r(2039)] && this[r(961)].interpolation[r(2039)] !== e.interpolation[r(2039)] && this[r(665)][r(1701)](r(211)), d && (!this[r(961)].interpolation[r(2039)] || this.options[r(1146)][r(2039)] === e[r(1146)][r(2039)]) && (f[r(1611)] = s(d), f[r(1611)][r(943)] && f[r(1611)][r(943)](f, this[r(961)]), this.options.interpolation[r(2039)] = f[r(1611)][r(2039)].bind(f[r(1611)])), f.interpolator = new Qa(this.options), f[r(1995)] = { hasLoadedNamespace: this.hasLoadedNamespace[r(591)](this) }, f[r(1135)] = new Ni(s(this[r(669)][r(694)]), f.resourceStore, f, this[r(961)]), f[r(1135)].on("*", (h, ...m) => {
        this[r(990)](h, ...m);
      }), this[r(669)][r(2756)] && (f[r(2756)] = s(this.modules[r(2756)]), f.languageDetector.init && f[r(2756)][r(943)](f, this[r(961)][r(1682)], this.options)), this[r(669)][r(1044)] && (f[r(1044)] = s(this[r(669)][r(1044)]), f[r(1044)][r(943)] && f.i18nFormat[r(943)](this)), this[r(489)] = new Fx(this.services, this[r(961)]), this[r(489)].on("*", (h, ...m) => {
        this[r(990)](h, ...m);
      }), this[r(669)][r(2568)][r(1953)]((h) => {
        h[r(943)] && h.init(this);
      });
    }
    if (this[r(2039)] = this[r(961)][r(1146)][r(2039)], t || (t = hx), this.options.fallbackLng && !this[r(686)][r(2756)] && !this[r(961)][r(892)]) {
      const d = this[r(686)].languageUtils[r(668)](this.options.fallbackLng);
      d[r(1332)] > 0 && d[0] !== r(1236) && (this.options[r(892)] = d[0]);
    }
    !this[r(686)][r(2756)] && !this.options[r(892)] && this[r(665)].warn(r(506)), [r(2610), r(2449), "getResourceBundle", r(1033)][r(1953)]((d) => {
      const l = r;
      this[d] = (...f) => this[l(2277)][d](...f);
    }), ["addResource", r(511), r(2736), "removeResourceBundle"].forEach((d) => {
      this[d] = (...l) => (this[K(2277)][d](...l), this);
    });
    const c = J0(), u = () => {
      const d = r, l = (f, b) => {
        const h = K;
        this[h(1389)] = !1, this.isInitialized && !this[h(1769)] && this[h(665)][h(196)](h(2184)), this[h(707)] = !0, this[h(961)][h(1245)] || this[h(665)][h(1872)](h(385), this.options), this[h(990)](h(385), this[h(961)]), c[h(1635)](b), t(f, b);
      };
      if (this[d(2353)] && !this[d(707)]) return l(null, this.t[d(591)](this));
      this[d(2802)](this.options[d(892)], l);
    };
    return this[r(961)].resources || !this[r(961)].initAsync ? u() : setTimeout(u, 0), c;
  }
  [a(1129)](x, t = hx) {
    var n, i;
    const r = a;
    let e = t;
    const s = be(x) ? x : this.language;
    if (typeof x === r(1235) && (e = x), !this[r(961)].resources || this[r(961)].partialBundledLanguages) {
      if ((s == null ? void 0 : s[r(2522)]()) === r(1590) && (!this[r(961)].preload || this[r(961)][r(2340)][r(1332)] === 0)) return e();
      const c = [], u = (d) => {
        const l = r;
        if (!d || d === l(1590)) return;
        this[l(686)][l(2420)][l(1227)](d)[l(1953)]((b) => {
          const h = l;
          b !== h(1590) && c.indexOf(b) < 0 && c[h(902)](b);
        });
      };
      s ? u(s) : this.services[r(2420)].getFallbackCodes(this.options.fallbackLng)[r(1953)]((l) => u(l)), (i = (n = this[r(961)][r(2340)]) == null ? void 0 : n.forEach) == null || i.call(n, (d) => u(d)), this[r(686)][r(1135)].load(c, this[r(961)].ns, (d) => {
        const l = r;
        !d && !this[l(1351)] && this[l(1411)] && this.setResolvedLanguage(this[l(1411)]), e(d);
      });
    } else e(null);
  }
  reloadResources(x, t, r) {
    const e = a, s = J0();
    return typeof x == "function" && (r = x, x = void 0), typeof t === e(1235) && (r = t, t = void 0), x || (x = this[e(2353)]), t || (t = this[e(961)].ns), r || (r = hx), this[e(686)][e(1135)][e(2263)](x, t, (n) => {
      s[e(1635)](), r(n);
    }), s;
  }
  use(x) {
    const t = a;
    if (!x) throw new Error(t(777));
    if (!x[t(190)]) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return x.type === t(694) && (this.modules.backend = x), (x[t(190)] === t(665) || x[t(1872)] && x[t(196)] && x[t(2265)]) && (this[t(669)][t(665)] = x), x[t(190)] === t(2756) && (this.modules[t(2756)] = x), x.type === t(1044) && (this[t(669)][t(1044)] = x), x[t(190)] === t(2578) && Ks[t(1552)](x), x[t(190)] === t(1611) && (this[t(669)][t(1611)] = x), x.type === t(1710) && this[t(669)].external[t(902)](x), this;
  }
  [a(2754)](x) {
    const t = a;
    if (!(!x || !this[t(2353)]) && !(["cimode", t(1236)][t(1104)](x) > -1)) {
      for (let r = 0; r < this.languages[t(1332)]; r++) {
        const e = this[t(2353)][r];
        if (!(["cimode", t(1236)].indexOf(e) > -1) && this.store[t(1075)](e)) {
          this.resolvedLanguage = e;
          break;
        }
      }
      !this[t(1351)] && this[t(2353)][t(1104)](x) < 0 && this[t(2277)][t(1075)](x) && (this[t(1351)] = x, this.languages.unshift(x));
    }
  }
  changeLanguage(x, t) {
    const r = a;
    this[r(1747)] = x;
    const e = J0();
    this[r(990)](r(2771), x);
    const s = (c) => {
      const u = r;
      this.language = c, this.languages = this[u(686)].languageUtils[u(1227)](c), this.resolvedLanguage = void 0, this[u(2754)](c);
    }, n = (c, u) => {
      const d = r;
      u ? this.isLanguageChangingTo === x && (s(u), this[d(489)][d(2802)](u), this[d(1747)] = void 0, this.emit(d(2343), u), this[d(665)].log("languageChanged", u)) : this[d(1747)] = void 0, e[d(1635)]((...l) => this.t(...l)), t && t(c, (...l) => this.t(...l));
    }, i = (c) => {
      var f, b;
      const u = r;
      !x && !c && this[u(686)][u(2756)] && (c = []);
      const d = be(c) ? c : c && c[0], l = this.store[u(1075)](d) ? d : this[u(686)][u(2420)][u(2630)](be(c) ? [c] : c);
      l && (!this.language && s(l), this[u(489)][u(1411)] || this.translator.changeLanguage(l), (b = (f = this.services[u(2756)]) == null ? void 0 : f.cacheUserLanguage) == null || b.call(f, l)), this[u(1129)](l, (h) => {
        n(h, l);
      });
    };
    return !x && this[r(686)][r(2756)] && !this.services[r(2756)][r(418)] ? i(this[r(686)][r(2756)][r(415)]()) : !x && this[r(686)][r(2756)] && this.services[r(2756)].async ? this[r(686)][r(2756)][r(415)][r(1332)] === 0 ? this[r(686)][r(2756)][r(415)]()[r(723)](i) : this[r(686)][r(2756)][r(415)](i) : i(x), e;
  }
  [a(2195)](x, t, r) {
    const e = a, s = (n, i, ...c) => {
      const u = K;
      let d;
      typeof i !== u(2844) ? d = this[u(961)][u(1246)]([n, i][u(1545)](c)) : d = { ...i }, d.lng = d.lng || s[u(892)], d.lngs = d[u(265)] || s.lngs, d.ns = d.ns || s.ns, d[u(1308)] !== "" && (d.keyPrefix = d[u(1308)] || r || s[u(1308)]);
      const l = this[u(961)][u(2720)] || ".";
      let f;
      return d.keyPrefix && Array[u(977)](n) ? f = n[u(2742)]((b) => {
        const h = u;
        return typeof b == "function" && (b = Qt(b, { ...this[h(961)], ...i })), "" + d[h(1308)] + l + b;
      }) : (typeof n === u(1235) && (n = Qt(n, { ...this[u(961)], ...i })), f = d[u(1308)] ? "" + d[u(1308)] + l + n : n), this.t(f, d);
    };
    return be(x) ? s[e(892)] = x : s[e(265)] = x, s.ns = t, s[e(1308)] = r, s;
  }
  t(...x) {
    var r;
    const t = a;
    return (r = this[t(489)]) == null ? void 0 : r[t(2375)](...x);
  }
  [a(1901)](...x) {
    var r;
    const t = a;
    return (r = this[t(489)]) == null ? void 0 : r[t(1901)](...x);
  }
  [a(2706)](x) {
    const t = a;
    this.options[t(1838)] = x;
  }
  hasLoadedNamespace(x, t = {}) {
    const r = a;
    if (!this[r(707)]) return this[r(665)].warn(r(753), this[r(2353)]), !1;
    if (!this.languages || !this[r(2353)][r(1332)]) return this[r(665)].warn("hasLoadedNamespace: i18n.languages were undefined or empty", this[r(2353)]), !1;
    const e = t[r(892)] || this[r(1351)] || this[r(2353)][0], s = this[r(961)] ? this[r(961)][r(2218)] : !1, n = this[r(2353)][this[r(2353)][r(1332)] - 1];
    if (e[r(2522)]() === r(1590)) return !0;
    const i = (c, u) => {
      const d = r, l = this[d(686)][d(1135)][d(2633)][c + "|" + u];
      return l === -1 || l === 0 || l === 2;
    };
    if (t[r(838)]) {
      const c = t[r(838)](this, i);
      if (c !== void 0) return c;
    }
    return !!(this.hasResourceBundle(e, x) || !this[r(686)].backendConnector[r(694)] || this[r(961)][r(554)] && !this[r(961)][r(1963)] || i(e, x) && (!s || i(n, x)));
  }
  [a(754)](x, t) {
    const r = a, e = J0();
    return this.options.ns ? (be(x) && (x = [x]), x.forEach((s) => {
      const n = r;
      this[n(961)].ns[n(1104)](s) < 0 && this.options.ns.push(s);
    }), this[r(1129)]((s) => {
      e[r(1635)](), t && t(s);
    }), e) : (t && t(), Promise[r(1635)]());
  }
  [a(1703)](x, t) {
    const r = a, e = J0();
    be(x) && (x = [x]);
    const s = this[r(961)][r(2340)] || [], n = x.filter((i) => s.indexOf(i) < 0 && this.services.languageUtils[r(384)](i));
    return n[r(1332)] ? (this[r(961)][r(2340)] = s.concat(n), this.loadResources((i) => {
      e.resolve(), t && t(i);
    }), e) : (t && t(), Promise.resolve());
  }
  [a(690)](x) {
    var s, n;
    const t = a;
    if (x || (x = this[t(1351)] || (((s = this[t(2353)]) == null ? void 0 : s.length) > 0 ? this[t(2353)][0] : this[t(1411)])), !x) return t(1181);
    try {
      const i = new Intl[t(939)](x);
      if (i && i[t(2490)]) {
        const c = i.getTextInfo();
        if (c && c[t(1954)]) return c[t(1954)];
      }
    } catch {
    }
    const r = ["ar", t(593), t(1085), t(906), t(623), t(1176), t(1811), t(330), t(386), t(1772), "acm", t(1787), t(2417), t(459), t(2241), "adf", "ads", "aeb", t(1911), t(2764), "ajp", t(2311), t(2766), t(702), t(590), t(804), t(2429), t(1203), "auz", "avl", t(1830), t(1855), t(1088), t(1866), t(982), "pga", "he", "iw", "ps", "pbt", t(538), t(1990), t(1850), "prd", "ug", "ur", "ydd", t(1759), "yih", "ji", "yi", t(1680), t(1177), t(254), "fa", t(609), t(1247), "pes", "prs", "dv", t(729), t(562)], e = ((n = this[t(686)]) == null ? void 0 : n[t(2420)]) || new Za(Ya());
    return x[t(2522)]().indexOf(t(1814)) > 1 ? t(2857) : r.indexOf(e[t(2463)](x)) > -1 || x.toLowerCase().indexOf("-arab") > 1 ? t(1181) : t(2857);
  }
  static createInstance(x = {}, t) {
    const r = a, e = new ex(x, t);
    return e[r(1646)] = ex[r(1646)], e;
  }
  [a(1433)](x = {}, t = hx) {
    const r = a, e = x[r(980)];
    e && delete x[r(980)];
    const s = { ...this.options, ...x, isClone: !0 }, n = new ex(s);
    if ((x[r(2264)] !== void 0 || x.prefix !== void 0) && (n[r(665)] = n[r(665)][r(820)](x)), ["store", r(686), r(1411)].forEach((c) => {
      n[c] = this[c];
    }), n[r(686)] = { ...this[r(686)] }, n.services.utils = { hasLoadedNamespace: n[r(328)][r(591)](n) }, e) {
      const c = Object[r(1806)](this[r(2277)].data)[r(1774)]((u, d) => {
        const l = r;
        return u[d] = { ...this[l(2277)][l(2887)][d] }, u[d] = Object[l(1806)](u[d]).reduce((f, b) => (f[b] = { ...u[d][b] }, f), u[d]), u;
      }, {});
      n.store = new Ba(c, s), n[r(686)][r(1472)] = n[r(2277)];
    }
    return x[r(1146)] && (n[r(686)][r(2863)] = new Qa(s)), n[r(489)] = new Fx(n[r(686)], s), n.translator.on("*", (c, ...u) => {
      n[r(990)](c, ...u);
    }), n[r(943)](s, t), n.translator[r(961)] = s, n.translator[r(1135)][r(686)].utils = { hasLoadedNamespace: n[r(328)][r(591)](n) }, n;
  }
  toJSON() {
    const x = a;
    return { options: this.options, store: this.store, language: this[x(1411)], languages: this[x(2353)], resolvedLanguage: this[x(1351)] };
  }
}
const Xe = ex.createInstance();
Xe[a(1646)], Xe[a(690)], Xe[a(943)], Xe[a(1129)], Xe[a(1057)], Xe[a(2792)], Xe[a(2802)], Xe[a(2195)], Xe.t, Xe.exists, Xe[a(2706)], Xe[a(328)], Xe.loadNamespaces, Xe[a(1703)];
function qi() {
  const o = a;
  if (typeof navigator !== o(2694) && navigator[o(1411)]) return navigator[o(1411)] === o(359) ? "zh-CN" : o(536);
  try {
    const x = typeof require !== o(2694) ? require : void 0;
    if (x)
      return x("uxp")[o(172)][o(1406)][o(533)]("zh") ? o(359) : "en-US";
  } catch {
  }
  return o(536);
}
let Js = qi();
const Ai = { "zh-CN": {}, "en-US": {} };
function Xt(o) {
  const x = o === "zh-CN" ? di : li, t = Ai[o];
  return { ...x, ...t };
}
function _i() {
  return Js;
}
function Yt(o, x = {}) {
  const t = a;
  let e = Xt(Js)[o];
  return e ? typeof e === t(1653) ? e[t(784)](/\{\{(\w+)\}\}/g, (s, n) => x[n] !== void 0 ? String(x[n]) : s) : e : o;
}
const Oi = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Di = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, ji = (o) => Di[o], Mi = (o) => o[a(784)](Oi, ji);
let xr = { bindI18n: a(2343), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: !0, unescape: Mi };
const Li = (o = {}) => {
  xr = { ...xr, ...o };
}, $i = { type: "3rdParty", init(o) {
  Li(o.options.react);
} };
!Xe[a(707)] && Xe[a(2792)]($i)[a(943)]({ resources: { "zh-CN": { translation: Xt(a(359)) }, "en-US": { translation: Xt("en-US") } }, lng: _i(), fallbackLng: "en-US", interpolation: { escapeValue: !1 } });
globalThis[a(1330)] = globalThis[a(1330)] || {};
const xx = globalThis[a(1330)], F0 = [];
xx[a(2385)] = xx.widgetable || {}, xx[a(2385)][a(479)] = function(o, x) {
  typeof x == "function" ? F0.push([o, { formatter: x, setter: null }]) : F0[a(902)]([o, x]);
};
function Ui(o, x, t) {
  var c;
  const r = a, e = F0[r(1036)](([u]) => u == r(2308)), s = F0.find(([u]) => ia(u, o.type)) || e;
  let n = !1;
  if (s) {
    const u = s[1].setter;
    u && (n = !!u(o, x, t));
  }
  !n && (o[r(805)][x][r(998)] = t), (c = (Ne[r(1153)] || Ne[r(1631)][r(2425)])[r(1568)]) == null || c[r(1079)][r(2017)]();
}
function Nx(o) {
  const x = a, t = {}, r = F0[x(1036)](([e]) => e == "__DEFAULT__");
  return o[x(1064)].forEach((e) => {
    const s = x;
    if (!e[s(805)] || e[s(805)][s(1332)] == 0) return;
    const n = F0[s(1036)](([i]) => ia(i, e.type)) || r;
    if (n) try {
      const i = n[1][s(1611)](e);
      i && (t[e.id] = i.widgets[s(2742)]((c) => c[s(998)]));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function ea(o, x) {
  var s, n, i;
  const t = a;
  if (!o) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const r = o.nodes[t(2742)]((c) => {
    const u = t;
    if (c.mode != 0) return;
    const d = mx(c);
    if (!d || d[u(533)](".") || !c.widgets || c.widgets[u(1332)] == 0) return;
    let l = F0[u(1036)](([m]) => ia(m, c[u(190)]));
    if (l) try {
      const m = l[1].formatter(c);
      if (m) return m.id = c.id, m.uiWeightSum = m.widgets.reduce((v, k) => v + (k[u(2735)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: d, uiWeightSum: 12, widgets: [{ outputType: u(2265), value: Yt(u(550), l[0]) + (m[u(615)] || m || ""), name: "", options: {} }] };
    }
    if (!d.startsWith("#")) return null;
    let f = c.widgets;
    const b = F0[u(1036)](([m]) => m == "__DEFAULT__");
    if (b) {
      const m = b[1][u(1611)](c);
      if (m) return Object[u(2873)](m, { uiWeightSum: m.widgets.reduce((v, k) => v + (k[u(2735)] || 12), 0) });
    }
    const h = { id: c.id, title: d, widgets: f[u(2742)]((m) => ({ name: m.label || m[u(2481)], outputType: m[u(190)] || u(1653), value: m[u(998)], options: m[u(961)] })) };
    return Object[u(2873)](h, { uiWeightSum: h[u(805)][u(1774)]((m, v) => m + (v[u(2735)] || 12), 0) });
  })[t(1706)](Boolean)[t(1086)]((c, u) => {
    const d = t;
    let l = mx(c), f = mx(u);
    return l = l[d(533)]("#") ? l[d(2103)](1).trim() : l.trim(), f = f[d(533)]("#") ? f[d(2103)](1)[d(436)]() : f[d(436)](), l[d(1529)](f);
  }), e = ((n = (s = o.nodes.find((c) => c[t(190)] == "Note" && c[t(2499)][t(2716)](/SD-?PPP/i))) == null ? void 0 : s[t(805)][0]) == null ? void 0 : n[t(998)]) || "";
  return { widgetablePath: ((i = x.activeState[t(924)]) == null ? void 0 : i.sdppp_workflow_alias) || x[t(2475)], widgetableID: x[t(735)].id, nodes: r.reduce((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: r[t(2742)]((c) => c.id), options: {} };
}
function ia(o, x) {
  const t = a, r = o[t(784)](/[.+^${}()|[\]\\]/g, t(2674))[t(784)](/\*/g, ".*")[t(784)](/\?/g, ".");
  return new RegExp("^" + r + "$").test(x);
}
function mx(o, x = "") {
  var e;
  const t = a;
  let r = x || o.title || "";
  return o.setProperty && (r.startsWith("#") || r[t(533)](".")) ? o.setProperty(t(1167), r) : r = ((e = o[t(657)]) == null ? void 0 : e[t(1167)]) || r, r;
}
xx.getNodeTitle = mx;
const xa = ox[a(2636)](a(205)), tr = /* @__PURE__ */ new Set();
Pe[a(2847)](a(1563), async (o) => {
  const x = a;
  return requestAnimationFrame(kn), o[x(1573)][x(1953)](({ nodeID: t, widgetIndex: r, value: e }) => {
    const s = x, n = Ne.graph[s(1064)][s(1036)]((i) => i.id == t);
    Ui(n, r, e);
  }), { success: !0 };
}), Pe[a(2847)]("openWorkflow", async (o) => {
  const x = a, { workflow_path: t } = o, r = !tr.has(t), e = o[x(1660)] || r;
  tr[x(479)](t);
  const s = Ne.extensionManager[x(2425)] || Ne[x(1153)], n = s[x(1705)][x(1036)]((c) => c[x(988)] === t || c.path === t || c[x(2475)] === x(1291) + t);
  if (!e) {
    const c = await Hi(s, n);
    if (xa(x(1500) + c), c) await Gx(s, n);
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
    xa("openWorkflow: " + u[d(2475)], u.initialState), Ne[d(1153)] == c ? await u[d(499)]() : (await c[d(165)](u), await Ne[d(2428)](JSON[d(429)](JSON[d(306)](u[d(1976)])), !0, !0, u, {}));
  }
}), Pe[a(2847)](a(2235), async function(o) {
  const x = a;
  let { workflow_content: t, workflow_path: r } = o;
  return t[x(924)] = { ...t[x(924)] || {}, sdppp_workflow_alias: r }, await Ne[x(2428)](t), { success: !0 };
}), Pe.implementAction(a(2631), async (o) => {
  var s;
  const x = a, t = Ne[x(1153)] || Ne[x(1631)].workflow;
  (s = t[x(2786)]) == null || s.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t[x(1705)][x(2742)]((n) => n[x(2475)].replace(x(1291), ""));
  try {
    const n = new Headers(), i = localStorage[x(647)](x(1298));
    i && n[x(1750)](x(1285), i);
    const c = await fetch(x(2876), { headers: n });
    let u = [];
    c.ok && (u = (await c[x(2348)]())[x(252)][x(2742)]((l) => l[x(784)](x(1291), ""))), e[x(1086)]((d, l) => {
      const f = x, b = u[f(2798)](d), h = u.includes(l);
      return b && !h ? -1 : !b && h ? 1 : d.localeCompare(l);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), Pe.implementAction(a(524), async (o) => {
  var n;
  const x = a, { workflow_path: t, from_sid: r } = o, e = Ne.workflowManager || Ne[x(1631)].workflow, s = e[x(1705)][x(1036)]((i) => i[x(988)] === t || i[x(2475)] === t || i[x(2475)] === x(1291) + t);
  if (!s) throw new Error(x(2794));
  return ((n = e.activeWorkflow) == null ? void 0 : n.id) != s.id && await Ne.openWorkflow(t, r, !1), s[x(1079)][x(2017)](), await e.saveWorkflow(s), { success: !0 };
});
async function Hi(o, x) {
  var e, s, n;
  const t = a;
  if (!x || !(((e = o.activeWorkflow) == null ? void 0 : e.id) === x.id)) return !1;
  if ((s = x[t(1079)]) != null && s[t(2017)]) try {
    x[t(1079)].checkState();
  } catch (i) {
    console[t(196)](t(1910), i);
  }
  try {
    const i = (n = Ne.graph) == null ? void 0 : n[t(1045)](), c = x[t(735)];
    if (!i || !c) return !1;
    const u = JSON[t(306)](i), d = JSON[t(306)](c);
    return u !== d;
  } catch (i) {
    return console.warn(t(1090), i), !1;
  }
}
async function Gx(o, x) {
  var e;
  const t = a;
  xa("performWorkflowReset: " + x[t(2475)]);
  async function r(s, n) {
    const i = t;
    Ne[i(1153)] == s ? await n[i(499)]() : (await s[i(165)](n), await Ne[i(2428)](JSON[i(429)](JSON[i(306)](n[i(735)])), !0, !0, n, {}));
  }
  if ((x.isOpen || (e = o[t(181)]) != null && e.call(o, x)) && o[t(1535)][t(1332)] === 1) {
    const s = o[t(2412)]();
    o[t(165)](s);
  } else await r(o, o[t(1535)][0] == x ? o[t(1535)][1] : o.openWorkflows[0]);
  await o[t(790)](x, !1), await new Promise((s) => requestAnimationFrame(s)), await r(o, x);
}
const nx = ox[a(2636)]("workflow-run"), M0 = /* @__PURE__ */ new Map();
let Tx = [];
const Jx = { hijacked: !1, originalQueuePrompt: null };
function zi(o, x) {
  const t = a, r = M0[t(1094)](o);
  nx(t(663), o, x, r, M0), r && r.resolveImage(x);
}
Pe[a(2847)](a(2478), async () => {
  const o = a;
  await Ne[o(699)][o(2885)]("queue"), await Ne[o(699)][o(2080)]();
  const x = Array.from(M0[o(1573)]());
  M0[o(2254)]();
  for (const t of x)
    try {
      t[o(1372)](new Error(o(2119)));
    } catch {
    }
  return { success: !0 };
}), Pe[a(2847)](a(410), async function* (o) {
  const x = a;
  Vi(), Tx = [];
  const t = o[x(2187)];
  Pe[x(2277)][x(2276)]({ lastError: "", widgetableErrors: {} });
  const r = await Zi(t, o.mode);
  nx(x(394), r[x(438)], r[x(1550)], x(2525), r[x(2608)]), Gi(r), yield* Ji(r.promptIds);
});
function Vi() {
  const o = a;
  if (Jx[o(356)]) return;
  const x = C0[o(364)];
  Jx[o(661)] = x, C0[o(364)] = async (...t) => {
    const r = o;
    try {
      const e = await x[r(377)](C0, ...t);
      return Tx[r(902)]({ error: null, result: e, prompt_id: e[r(532)] }), e;
    } catch (e) {
      throw Tx[r(902)]({ error: e, result: null, prompt_id: "" }), e;
    }
  }, Jx[o(356)] = !0;
}
async function Bi(o) {
  await Ne[a(364)](1, o);
}
async function Wi(o) {
  const x = a, t = await Ne.graphToPrompt(Ne[x(167)]);
  for (let r = 0; r < o; r++)
    await C0[x(364)](1, t);
}
async function Zi(o, x = "app") {
  var e, s;
  const t = a, r = { promptIds: [], hasError: !1, generalError: "", nodeErrors: {} };
  try {
    x === t(699) ? await Wi(o) : await Bi(o);
    for (const n of Tx)
      if (n.error) r[t(438)] = !0, r[t(1550)] = n[t(2265)][t(1128)] ? Qi(n[t(2265)][t(1128)][t(2813)]) : {}, Object[t(2873)](r[t(1550)], { "-1": ((s = (e = n[t(2265)].response) == null ? void 0 : e[t(2265)]) == null ? void 0 : s[t(615)]) || n.error[t(615)] });
      else {
        const i = n[t(1792)][t(532)];
        r.promptIds.push(i), Ki(i);
      }
  } catch (n) {
    nx("app.queuePrompt caught", n[t(494)]), r[t(438)] = !0, r[t(1550)] = { "-1": n.message || n[t(2032)]() };
  }
  return r;
}
function Ki(o) {
  const x = a;
  let t, r;
  const e = new Promise((s, n) => {
    t = s, r = n;
  });
  M0[x(1750)](o, { promise: e, resolveImage: t, rejectImage: r });
}
function Gi({ hasError: o, generalError: x, nodeErrors: t }) {
  const r = a;
  o && (x ? Pe[r(2277)].setState({ lastError: x }) : Pe[r(2277)][r(2276)]({ widgetableErrors: t }));
}
async function* Ji(o) {
  const x = a, t = /* @__PURE__ */ new Map();
  for (const r of o) {
    const e = M0.get(r);
    e && t[x(1750)](r, e[x(1114)]);
  }
  if (t[x(2187)] !== 0)
    for (nx(x(1510)); t.size > 0; ) {
      const r = Array[x(2280)](t[x(2700)]()), e = r.map(([i, c]) => c[x(723)]((u) => ({ prompt_id: i, images: u }))), { prompt_id: s, images: n } = await Promise[x(685)](e);
      nx(x(1060), s), t.delete(s), M0.delete(s), yield { success: !0, prompt_ids: [s], images: n };
    }
}
function Qi(o) {
  const x = a, t = {};
  return Object[x(1806)](o)[x(1953)]((r) => {
    const e = x, s = r[e(585)](":")[0], n = Ne[e(167)].nodes[e(1036)]((i) => i.id == s);
    t[s] = "[" + ((n == null ? void 0 : n.title) || s) + "]" + o[r].errors.map(JSON[e(306)])[e(2252)](`
`);
  }), t;
}
const Xi = ox.extend(a(637));
Pe.implementAction("sdpppHandshake", async (o) => {
  const x = a;
  return o != null && o[x(2246)] && Xi(x(2262), o[x(2246)]), { comfyVersion: x(2464), hostVersion: (o == null ? void 0 : o[x(2246)]) ?? "" };
}), Pe[a(2847)](a(792), async (o) => {
  const x = a, { node_id: t, title: r } = o, e = Ne[x(167)][x(1064)].find((s) => s.id == t);
  if (!e) throw new Error(x(405));
  return e[x(2499)] = r, e[x(1509)]("sdppp_widgetable_title", r), { success: !0 };
}), Pe.implementAction(a(1402), async () => {
  const o = a, x = await fetch(o(1232));
  return x[o(2745)] == 404 ? { error: Yt(o(2096)), success: !1 } : x[o(2745)] == 200 ? { success: !0 } : { error: Yt("Failed to reboot ComfyUI") + x[o(1449)], success: !1 };
}), Pe[a(2847)](a(1687), async (o) => {
  const x = a, { api_key: t } = o;
  return localStorage[x(1968)](x(1725), t), location[x(2263)](), { success: !0 };
}), Pe.implementAction(a(1003), async () => {
  const o = a;
  return document.querySelector(".pi-sign-out")[o(2156)].click(), { success: !0 };
});
function Yi(o) {
  const x = a, t = atob(o), r = t[x(1332)], e = new Uint8Array(r);
  for (let s = 0; s < r; s++)
    e[s] = t[x(425)](s);
  return e;
}
Pe[a(2847)](a(552), async (o, x, t) => {
  const r = a, { fileName: e, overwrite: s = !0, mimeType: n = r(598), dataBase64: i } = o;
  if (t != null && t.aborted) throw new DOMException(r(2004), "AbortError");
  const c = Yi(i), u = new Blob([c], { type: n }), d = new FormData();
  d[r(1923)](r(1108), u), d[r(1923)](r(2140), e), d[r(1923)]("overwrite", r(s ? 1458 : 512));
  const l = await fetch(r(2526), { method: "POST", body: d, signal: t });
  if (!l.ok) throw new Error(r(1462) + l[r(1449)]);
  const f = await l[r(2348)]();
  return { name: f[r(346)] + "/" + f.name };
});
const Qs = a(2415), ec = [Qs, "2025-03-26", a(474), "2024-10-07"], _x = a(2581), Xs = Ke([g(), Z().int()]), Ys = g(), xc = S({ progressToken: B(Xs) })[a(2690)](), r0 = S({ _meta: B(xc) })[a(2690)](), x0 = S({ method: g(), params: B(r0) }), ix = S({ _meta: B(S({})[a(2690)]()) })[a(2690)](), m0 = S({ method: g(), params: B(ix) }), s0 = S({ _meta: B(S({})[a(2690)]()) })[a(2690)](), Ox = Ke([g(), Z()[a(761)]()]), en = S({ jsonrpc: te(_x), id: Ox })[a(1722)](x0)[a(414)](), tc = (o) => en[a(2695)](o)[a(2072)], xn = S({ jsonrpc: te(_x) })[a(1722)](m0).strict(), ac = (o) => xn[a(2695)](o).success, tn = S({ jsonrpc: te(_x), id: Ox, result: s0 }).strict(), ar = (o) => tn.safeParse(o)[a(2072)];
var y0;
(function(o) {
  const x = a;
  o[o.ConnectionClosed = -32e3] = "ConnectionClosed", o[o[x(2290)] = -32001] = x(2290), o[o[x(2372)] = -32700] = x(2372), o[o[x(516)] = -32600] = x(516), o[o[x(399)] = -32601] = x(399), o[o[x(1346)] = -32602] = "InvalidParams", o[o[x(1894)] = -32603] = x(1894);
})(y0 || (y0 = {}));
const an = S({ jsonrpc: te(_x), id: Ox, error: S({ code: Z()[a(761)](), message: g(), data: B(S0()) }) })[a(414)](), rc = (o) => an[a(2695)](o)[a(2072)];
Ke([en, xn, tn, an]);
const ta = s0[a(414)](), aa = m0[a(2636)]({ method: te("notifications/cancelled"), params: ix.extend({ requestId: Ox, reason: g()[a(2033)]() }) }), cx = S({ name: g(), title: B(g()) })[a(2690)](), rn = cx.extend({ version: g() }), sc = S({ experimental: B(S({})[a(2690)]()), sampling: B(S({})[a(2690)]()), elicitation: B(S({})[a(2690)]()), roots: B(S({ listChanged: B(ee()) }).passthrough()) })[a(2690)](), sn = x0[a(2636)]({ method: te(a(1451)), params: r0[a(2636)]({ protocolVersion: g(), capabilities: sc, clientInfo: rn }) }), nc = S({ experimental: B(S({})[a(2690)]()), logging: B(S({})[a(2690)]()), completions: B(S({})[a(2690)]()), prompts: B(S({ listChanged: B(ee()) })[a(2690)]()), resources: B(S({ subscribe: B(ee()), listChanged: B(ee()) })[a(2690)]()), tools: B(S({ listChanged: B(ee()) })[a(2690)]()) })[a(2690)](), oc = s0[a(2636)]({ protocolVersion: g(), capabilities: nc, serverInfo: rn, instructions: B(g()) }), nn = m0.extend({ method: te(a(2880)) }), ra = x0[a(2636)]({ method: te("ping") }), ic = S({ progress: Z(), total: B(Z()), message: B(g()) })[a(2690)](), sa = m0[a(2636)]({ method: te(a(1157)), params: ix[a(1722)](ic)[a(2636)]({ progressToken: Xs }) }), Dx = x0[a(2636)]({ params: r0.extend({ cursor: B(Ys) })[a(2033)]() }), jx = s0.extend({ nextCursor: B(Ys) }), on = S({ uri: g(), mimeType: B(g()), _meta: B(S({}).passthrough()) })[a(2690)](), cn = on.extend({ text: g() }), un = on[a(2636)]({ blob: g()[a(1667)]() }), dn = cx[a(2636)]({ uri: g(), description: B(g()), mimeType: B(g()), _meta: B(S({})[a(2690)]()) }), cc = cx.extend({ uriTemplate: g(), description: B(g()), mimeType: B(g()), _meta: B(S({})[a(2690)]()) }), uc = Dx.extend({ method: te(a(2901)) }), dc = jx[a(2636)]({ resources: we(dn) }), lc = Dx.extend({ method: te(a(1316)) }), fc = jx.extend({ resourceTemplates: we(cc) }), hc = x0[a(2636)]({ method: te("resources/read"), params: r0.extend({ uri: g() }) }), pc = s0[a(2636)]({ contents: we(Ke([cn, un])) }), mc = m0.extend({ method: te(a(2216)) }), bc = x0.extend({ method: te(a(1857)), params: r0.extend({ uri: g() }) }), gc = x0[a(2636)]({ method: te("resources/unsubscribe"), params: r0[a(2636)]({ uri: g() }) }), yc = m0.extend({ method: te("notifications/resources/updated"), params: ix[a(2636)]({ uri: g() }) }), vc = S({ name: g(), description: B(g()), required: B(ee()) })[a(2690)](), wc = cx[a(2636)]({ description: B(g()), arguments: B(we(vc)), _meta: B(S({})[a(2690)]()) }), Sc = Dx[a(2636)]({ method: te(a(417)) }), kc = jx[a(2636)]({ prompts: we(wc) }), Pc = x0[a(2636)]({ method: te(a(2683)), params: r0[a(2636)]({ name: g(), arguments: B(De(g())) }) }), ca = S({ type: te(a(740)), text: g(), _meta: B(S({})[a(2690)]()) }).passthrough(), ua = S({ type: te(a(1108)), data: g().base64(), mimeType: g(), _meta: B(S({})[a(2690)]()) })[a(2690)](), da = S({ type: te(a(1362)), data: g()[a(1667)](), mimeType: g(), _meta: B(S({}).passthrough()) })[a(2690)](), Ec = S({ type: te(a(1884)), resource: Ke([cn, un]), _meta: B(S({})[a(2690)]()) })[a(2690)](), Ic = dn[a(2636)]({ type: te(a(1632)) }), ln = Ke([ca, ua, da, Ic, Ec]), Cc = S({ role: Re([a(2268), a(898)]), content: ln })[a(2690)](), Rc = s0[a(2636)]({ description: B(g()), messages: we(Cc) }), Fc = m0[a(2636)]({ method: te(a(2466)) }), Nc = S({ title: B(g()), readOnlyHint: B(ee()), destructiveHint: B(ee()), idempotentHint: B(ee()), openWorldHint: B(ee()) }).passthrough(), Tc = cx.extend({ description: B(g()), inputSchema: S({ type: te("object"), properties: B(S({})[a(2690)]()), required: B(we(g())) })[a(2690)](), outputSchema: B(S({ type: te("object"), properties: B(S({})[a(2690)]()), required: B(we(g())) })[a(2690)]()), annotations: B(Nc), _meta: B(S({})[a(2690)]()) }), qc = Dx[a(2636)]({ method: te(a(1714)) }), Ac = jx[a(2636)]({ tools: we(Tc) }), fn = s0[a(2636)]({ content: we(ln).default([]), structuredContent: S({})[a(2690)]().optional(), isError: B(ee()) });
fn.or(s0[a(2636)]({ toolResult: S0() }));
const _c = x0[a(2636)]({ method: te(a(595)), params: r0[a(2636)]({ name: g(), arguments: B(De(S0())) }) }), Oc = m0.extend({ method: te(a(358)) }), hn = Re(["debug", a(713), a(1561), "warning", "error", "critical", a(1337), a(2552)]), Dc = x0[a(2636)]({ method: te("logging/setLevel"), params: r0[a(2636)]({ level: hn }) }), jc = m0[a(2636)]({ method: te(a(858)), params: ix.extend({ level: hn, logger: B(g()), data: S0() }) }), Mc = S({ name: g().optional() })[a(2690)](), Lc = S({ hints: B(we(Mc)), costPriority: B(Z()[a(1414)](0)[a(718)](1)), speedPriority: B(Z()[a(1414)](0).max(1)), intelligencePriority: B(Z()[a(1414)](0).max(1)) })[a(2690)](), $c = S({ role: Re([a(2268), a(898)]), content: Ke([ca, ua, da]) })[a(2690)](), Uc = x0[a(2636)]({ method: te("sampling/createMessage"), params: r0.extend({ messages: we($c), systemPrompt: B(g()), includeContext: B(Re(["none", a(2618), a(1668)])), temperature: B(Z()), maxTokens: Z()[a(761)](), stopSequences: B(we(g())), metadata: B(S({})[a(2690)]()), modelPreferences: B(Lc) }) }), pn = s0[a(2636)]({ model: g(), stopReason: B(Re([a(867), a(2898), a(2259)]).or(g())), role: Re(["user", a(898)]), content: zs("type", [ca, ua, da]) }), Hc = S({ type: te(a(1001)), title: B(g()), description: B(g()), default: B(ee()) })[a(2690)](), zc = S({ type: te(a(1653)), title: B(g()), description: B(g()), minLength: B(Z()), maxLength: B(Z()), format: B(Re(["email", a(622), a(2714), a(2307)])) })[a(2690)](), Vc = S({ type: Re([a(1206), "integer"]), title: B(g()), description: B(g()), minimum: B(Z()), maximum: B(Z()) })[a(2690)](), Bc = S({ type: te(a(1653)), title: B(g()), description: B(g()), enum: we(g()), enumNames: B(we(g())) })[a(2690)](), Wc = Ke([Hc, zc, Vc, Bc]), Zc = x0.extend({ method: te(a(2060)), params: r0[a(2636)]({ message: g(), requestedSchema: S({ type: te(a(2844)), properties: De(g(), Wc), required: B(we(g())) }).passthrough() }) }), mn = s0[a(2636)]({ action: Re([a(2727), a(1214), "cancel"]), content: B(De(g(), S0())) }), Kc = S({ type: te("ref/resource"), uri: g() })[a(2690)](), Gc = S({ type: te(a(2762)), name: g() }).passthrough(), Jc = x0[a(2636)]({ method: te(a(256)), params: r0.extend({ ref: Ke([Gc, Kc]), argument: S({ name: g(), value: g() }).passthrough(), context: B(S({ arguments: B(De(g(), g())) })) }) }), Qc = s0.extend({ completion: S({ values: we(g())[a(718)](100), total: B(Z().int()), hasMore: B(ee()) })[a(2690)]() }), Xc = S({ uri: g()[a(533)]("file://"), name: B(g()), _meta: B(S({})[a(2690)]()) }).passthrough(), Yc = x0[a(2636)]({ method: te(a(2823)) }), bn = s0[a(2636)]({ roots: we(Xc) }), e2 = m0.extend({ method: te(a(1099)) });
Ke([ra, sn, Jc, Dc, Pc, Sc, uc, lc, hc, bc, gc, _c, qc]), Ke([aa, sa, nn, e2]), Ke([ta, pn, mn, bn]), Ke([ra, Uc, Zc, Yc]), Ke([aa, sa, jc, yc, mc, Oc, Fc]), Ke([ta, oc, Qc, Rc, kc, dc, fc, pc, fn, Ac]);
class _0 extends Error {
  constructor(x, t, r) {
    const e = a;
    super("MCP error " + x + ": " + t), this[e(586)] = x, this[e(2887)] = r, this[e(2481)] = "McpError";
  }
}
const x2 = 6e4;
class t2 {
  constructor(x) {
    const t = a;
    this[t(911)] = x, this[t(1771)] = 0, this[t(1659)] = /* @__PURE__ */ new Map(), this[t(1527)] = /* @__PURE__ */ new Map(), this[t(2150)] = /* @__PURE__ */ new Map(), this[t(662)] = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this[t(1418)] = /* @__PURE__ */ new Map(), this[t(1948)] = /* @__PURE__ */ new Set(), this[t(259)](aa, (r) => {
      const e = t, s = this[e(1527)][e(1094)](r[e(1133)][e(567)]);
      s == null || s.abort(r.params[e(1828)]);
    }), this[t(259)](sa, (r) => {
      this[t(1375)](r);
    }), this[t(1741)](ra, (r) => ({}));
  }
  [a(677)](x, t, r, e, s = !1) {
    const n = a;
    this[n(1418)].set(x, { timeoutId: setTimeout(e, t), startTime: Date[n(315)](), timeout: t, maxTotalTimeout: r, resetTimeoutOnProgress: s, onTimeout: e });
  }
  [a(1329)](x) {
    const t = a, r = this._timeoutInfo[t(1094)](x);
    if (!r) return !1;
    const e = Date.now() - r[t(1258)];
    if (r.maxTotalTimeout && e >= r[t(2225)])
      throw this[t(1418)][t(882)](x), new _0(y0[t(2290)], "Maximum total timeout exceeded", { maxTotalTimeout: r[t(2225)], totalElapsed: e });
    return clearTimeout(r.timeoutId), r[t(1421)] = setTimeout(r[t(1580)], r[t(1816)]), !0;
  }
  [a(2788)](x) {
    const t = a, r = this[t(1418)][t(1094)](x);
    r && (clearTimeout(r[t(1421)]), this._timeoutInfo[t(882)](x));
  }
  async connect(x) {
    const t = a;
    var r, e, s;
    this[t(2178)] = x;
    const n = (r = this[t(2149)]) === null || r === void 0 ? void 0 : r.onclose;
    this[t(2178)].onclose = () => {
      const u = t;
      n == null || n(), this[u(1092)]();
    };
    const i = (e = this[t(2149)]) === null || e === void 0 ? void 0 : e[t(860)];
    this[t(2178)][t(860)] = (u) => {
      const d = t;
      i == null || i(u), this[d(2795)](u);
    };
    const c = (s = this[t(2178)]) === null || s === void 0 ? void 0 : s[t(1770)];
    this._transport[t(1770)] = (u, d) => {
      const l = t;
      c == null || c(u, d), ar(u) || rc(u) ? this[l(1522)](u) : tc(u) ? this[l(1327)](u, d) : ac(u) ? this[l(1358)](u) : this._onerror(new Error(l(2902) + JSON[l(306)](u)));
    }, await this[t(2178)].start();
  }
  [a(1092)]() {
    const x = a;
    var t;
    const r = this._responseHandlers;
    this[x(662)] = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this[x(1948)][x(2254)](), this[x(2178)] = void 0, (t = this[x(2427)]) === null || t === void 0 || t[x(377)](this);
    const e = new _0(y0.ConnectionClosed, "Connection closed");
    for (const s of r.values())
      s(e);
  }
  _onerror(x) {
    const t = a;
    var r;
    (r = this[t(860)]) === null || r === void 0 || r.call(this, x);
  }
  [a(1358)](x) {
    const t = a;
    var r;
    const e = (r = this[t(2150)].get(x[t(849)])) !== null && r !== void 0 ? r : this.fallbackNotificationHandler;
    e !== void 0 && Promise[t(1635)]()[t(723)](() => e(x))[t(1539)]((s) => this._onerror(new Error(t(1878) + s)));
  }
  [a(1327)](x, t) {
    const r = a;
    var e, s, n, i;
    const c = (e = this[r(1659)][r(1094)](x[r(849)])) !== null && e !== void 0 ? e : this.fallbackRequestHandler;
    if (c === void 0) {
      (s = this[r(2178)]) === null || s === void 0 || s.send({ jsonrpc: r(2581), id: x.id, error: { code: y0.MethodNotFound, message: r(2653) } })[r(1539)]((l) => this[r(2795)](new Error(r(478) + l)));
      return;
    }
    const u = new AbortController();
    this._requestHandlerAbortControllers[r(1750)](x.id, u);
    const d = { signal: u[r(2634)], sessionId: (n = this[r(2178)]) === null || n === void 0 ? void 0 : n[r(566)], _meta: (i = x.params) === null || i === void 0 ? void 0 : i[r(1662)], sendNotification: (l) => this[r(2071)](l, { relatedRequestId: x.id }), sendRequest: (l, f, b) => this[r(2752)](l, f, { ...b, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t.authInfo, requestId: x.id, requestInfo: t == null ? void 0 : t.requestInfo };
    Promise[r(1635)]().then(() => c(x, d))[r(723)]((l) => {
      const f = r;
      var b;
      if (!u[f(2634)][f(2234)])
        return (b = this[f(2178)]) === null || b === void 0 ? void 0 : b[f(1779)]({ result: l, jsonrpc: f(2581), id: x.id });
    }, (l) => {
      const f = r;
      var b, h;
      if (!u.signal[f(2234)])
        return (b = this._transport) === null || b === void 0 ? void 0 : b[f(1779)]({ jsonrpc: f(2581), id: x.id, error: { code: Number[f(1071)](l[f(586)]) ? l[f(586)] : y0[f(1894)], message: (h = l.message) !== null && h !== void 0 ? h : f(2335) } });
    }).catch((l) => this[r(2795)](new Error(r(1501) + l)))[r(2603)](() => {
      this[r(1527)].delete(x.id);
    });
  }
  [a(1375)](x) {
    const t = a, { progressToken: r, ...e } = x.params, s = Number(r), n = this[t(271)].get(s);
    if (!n) {
      this[t(2795)](new Error(t(1813) + JSON.stringify(x)));
      return;
    }
    const i = this[t(662)][t(1094)](s), c = this[t(1418)].get(s);
    if (c && i && c[t(2480)]) try {
      this._resetTimeout(s);
    } catch (u) {
      i(u);
      return;
    }
    n(e);
  }
  _onresponse(x) {
    const t = a, r = Number(x.id), e = this[t(662)].get(r);
    if (e === void 0) {
      this[t(2795)](new Error("Received a response for an unknown message ID: " + JSON[t(306)](x)));
      return;
    }
    if (this._responseHandlers[t(882)](r), this[t(271)][t(882)](r), this._cleanupTimeout(r), ar(x)) e(x);
    else {
      const s = new _0(x[t(2265)][t(586)], x[t(2265)][t(615)], x[t(2265)][t(2887)]);
      e(s);
    }
  }
  get transport() {
    return this[a(2178)];
  }
  async [a(639)]() {
    const x = a;
    var t;
    await ((t = this._transport) === null || t === void 0 ? void 0 : t[x(639)]());
  }
  [a(2752)](x, t, r) {
    const { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n } = r ?? {};
    return new Promise((i, c) => {
      const u = K;
      var d, l, f, b, h, m;
      if (!this._transport) {
        c(new Error(u(367)));
        return;
      }
      ((d = this[u(911)]) === null || d === void 0 ? void 0 : d.enforceStrictCapabilities) === !0 && this[u(1974)](x.method), (l = r == null ? void 0 : r[u(2634)]) === null || l === void 0 || l[u(1961)]();
      const v = this[u(1771)]++, k = { ...x, jsonrpc: u(2581), id: v };
      r != null && r[u(1179)] && (this[u(271)].set(v, r[u(1179)]), k[u(1133)] = { ...x.params, _meta: { ...((f = x[u(1133)]) === null || f === void 0 ? void 0 : f[u(1662)]) || {}, progressToken: v } });
      const E = (C) => {
        const P = u;
        var F;
        this._responseHandlers[P(882)](v), this[P(271)].delete(v), this[P(2788)](v), (F = this[P(2178)]) === null || F === void 0 || F[P(1779)]({ jsonrpc: "2.0", method: P(1950), params: { requestId: v, reason: String(C) } }, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n })[P(1539)]((D) => this[P(2795)](new Error("Failed to send cancellation: " + D))), c(C);
      };
      this[u(662)][u(1750)](v, (C) => {
        const P = u;
        var F;
        if (!(!((F = r == null ? void 0 : r[P(2634)]) === null || F === void 0) && F[P(2234)])) {
          if (C instanceof Error) return c(C);
          try {
            const D = t[P(429)](C.result);
            i(D);
          } catch (D) {
            c(D);
          }
        }
      }), (b = r == null ? void 0 : r.signal) === null || b === void 0 || b[u(1877)](u(2693), () => {
        const C = u;
        var P;
        E((P = r == null ? void 0 : r.signal) === null || P === void 0 ? void 0 : P[C(1828)]);
      });
      const q = (h = r == null ? void 0 : r[u(1816)]) !== null && h !== void 0 ? h : x2, T = () => E(new _0(y0[u(2290)], u(2531), { timeout: q }));
      this[u(677)](v, q, r == null ? void 0 : r[u(2225)], T, (m = r == null ? void 0 : r[u(2480)]) !== null && m !== void 0 ? m : !1), this._transport[u(1779)](k, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n })[u(1539)]((C) => {
        this[u(2788)](v), c(C);
      });
    });
  }
  async notification(x, t) {
    const r = a;
    var e, s;
    if (!this[r(2178)]) throw new Error(r(367));
    if (this[r(2244)](x[r(849)]), ((s = (e = this[r(911)]) === null || e === void 0 ? void 0 : e[r(2339)]) !== null && s !== void 0 ? s : [])[r(2798)](x[r(849)]) && !x[r(1133)] && !(t != null && t.relatedRequestId)) {
      if (this._pendingDebouncedNotifications[r(441)](x.method)) return;
      this[r(1948)].add(x.method), Promise[r(1635)]()[r(723)](() => {
        const u = r;
        var d;
        if (this[u(1948)].delete(x[u(849)]), !this._transport) return;
        const l = { ...x, jsonrpc: u(2581) };
        (d = this[u(2178)]) === null || d === void 0 || d[u(1779)](l, t)[u(1539)]((f) => this[u(2795)](f));
      });
      return;
    }
    const c = { ...x, jsonrpc: "2.0" };
    await this[r(2178)][r(1779)](c, t);
  }
  [a(1741)](x, t) {
    const r = a, e = x.shape[r(849)][r(998)];
    this.assertRequestHandlerCapability(e), this[r(1659)][r(1750)](e, (s, n) => {
      const i = r;
      return Promise.resolve(t(x[i(429)](s), n));
    });
  }
  [a(1548)](x) {
    const t = a;
    this._requestHandlers[t(882)](x);
  }
  [a(1639)](x) {
    const t = a;
    if (this[t(1659)][t(441)](x)) throw new Error(t(1947) + x + t(320));
  }
  setNotificationHandler(x, t) {
    const r = a;
    this[r(2150)][r(1750)](x[r(876)].method[r(998)], (e) => Promise[r(1635)](t(x[r(429)](e))));
  }
  [a(1251)](x) {
    const t = a;
    this._notificationHandlers[t(882)](x);
  }
}
function a2(o, x) {
  const t = a;
  return Object[t(2700)](x)[t(1774)]((r, [e, s]) => (s && typeof s === t(2844) ? r[e] = r[e] ? { ...r[e], ...s } : s : r[e] = s, r), { ...o });
}
var X0 = { exports: {} }, r2 = X0[a(1469)], rr;
function s2() {
  const o = a;
  return rr || (rr = 1, (function(x, t) {
    (function(r, e) {
      e(t);
    })(r2, function(r) {
      const e = K;
      function s() {
        const I = K;
        for (var p = arguments[I(1332)], y = Array(p), w = 0; w < p; w++)
          y[w] = arguments[w];
        if (y[I(1332)] > 1) {
          y[0] = y[0].slice(0, -1);
          for (var U = y[I(1332)] - 1, M = 1; M < U; ++M)
            y[M] = y[M][I(2103)](1, -1);
          return y[U] = y[U][I(2103)](1), y.join("");
        } else return y[0];
      }
      function n(I) {
        return "(?:" + I + ")";
      }
      function i(I) {
        const p = K;
        return I === void 0 ? "undefined" : I === null ? p(1589) : Object.prototype.toString[p(377)](I)[p(585)](" ")[p(469)]()[p(585)]("]")[p(2281)]().toLowerCase();
      }
      function c(I) {
        return I[K(2132)]();
      }
      function u(I) {
        const p = K;
        return I != null ? I instanceof Array ? I : typeof I.length !== p(1206) || I[p(585)] || I[p(1466)] || I[p(377)] ? [I] : Array[p(1700)][p(2103)].call(I) : [];
      }
      function d(I, p) {
        var y = I;
        if (p) for (var w in p)
          y[w] = p[w];
        return y;
      }
      function l(I) {
        const p = K;
        var y = p(329), w = "[0-9]", U = s(w, p(1594)), M = n(n(p(2121) + U + "%" + U + U + "%" + U + U) + "|" + n(p(247) + U + "%" + U + U) + "|" + n("%" + U + U)), ne = p(2606), de = p(2758), Ie = s(ne, de), je = I ? p(2079) : "[]", Ve = I ? "[\\uE000-\\uF8FF]" : "[]", Ce = s(y, w, p(866), je);
        n(y + s(y, w, p(2505)) + "*"), n(n(M + "|" + s(Ce, de, "[\\:]")) + "*");
        var Oe = n(n("25[0-5]") + "|" + n(p(670) + w) + "|" + n("1" + w + w) + "|" + n(p(311) + w) + "|0?0?" + w), Be = n(Oe + "\\." + Oe + "\\." + Oe + "\\." + Oe), ge = n(U + "{1,4}"), $e = n(n(ge + "\\:" + ge) + "|" + Be), We = n(n(ge + "\\:") + p(2147) + $e), Ue = n(p(2044) + n(ge + "\\:") + p(653) + $e), P0 = n(n(ge) + "?\\:\\:" + n(ge + "\\:") + "{4}" + $e), i0 = n(n(n(ge + "\\:") + p(1140) + ge) + p(449) + n(ge + "\\:") + p(632) + $e), c0 = n(n(n(ge + "\\:") + p(1173) + ge) + p(449) + n(ge + "\\:") + p(182) + $e), $0 = n(n(n(ge + "\\:") + p(683) + ge) + "?\\:\\:" + ge + "\\:" + $e), q0 = n(n(n(ge + "\\:") + p(1342) + ge) + "?\\:\\:" + $e), t0 = n(n(n(ge + "\\:") + p(221) + ge) + p(449) + ge), u0 = n(n(n(ge + "\\:") + "{0,6}" + ge) + p(449)), d0 = n([We, Ue, P0, i0, c0, $0, q0, t0, u0][p(2252)]("|")), E0 = n(n(Ce + "|" + M) + "+");
        n(p(763) + U + "+\\." + s(Ce, de, "[\\:]") + "+"), n(n(M + "|" + s(Ce, de)) + "*");
        var l0 = n(M + "|" + s(Ce, de, p(2181)));
        return n(n(M + "|" + s(Ce, de, "[\\@]")) + "+"), n(n(l0 + "|" + s(p(1624), Ve)) + "*"), { NOT_SCHEME: new RegExp(s(p(1826), y, w, p(2505)), "g"), NOT_USERINFO: new RegExp(s(p(1601), Ce, de), "g"), NOT_HOST: new RegExp(s(p(1481), Ce, de), "g"), NOT_PATH: new RegExp(s(p(242), Ce, de), "g"), NOT_PATH_NOSCHEME: new RegExp(s(p(169), Ce, de), "g"), NOT_QUERY: new RegExp(s(p(420), Ce, de, p(1885), Ve), "g"), NOT_FRAGMENT: new RegExp(s(p(420), Ce, de, "[\\:\\@\\/\\?]"), "g"), ESCAPE: new RegExp(s("[^]", Ce, de), "g"), UNRESERVED: new RegExp(Ce, "g"), OTHER_CHARS: new RegExp(s("[^\\%]", Ce, Ie), "g"), PCT_ENCODED: new RegExp(M, "g"), IPV4ADDRESS: new RegExp("^(" + Be + ")$"), IPV6ADDRESS: new RegExp(p(1101) + d0 + ")" + n(n(p(1600) + U + p(2594)) + "(" + E0 + ")") + p(335)) };
      }
      var f = l(!1), b = l(!0), h = /* @__PURE__ */ (function() {
        function I(p, y) {
          const w = K;
          var U = [], M = !0, ne = !1, de = void 0;
          try {
            for (var Ie = p[Symbol[w(340)]](), je; !(M = (je = Ie[w(204)]())[w(1398)]) && (U.push(je[w(998)]), !(y && U[w(1332)] === y)); M = !0)
              ;
          } catch (Ve) {
            ne = !0, de = Ve;
          } finally {
            try {
              !M && Ie.return && Ie[w(1692)]();
            } finally {
              if (ne) throw de;
            }
          }
          return U;
        }
        return function(p, y) {
          if (Array.isArray(p)) return p;
          if (Symbol.iterator in Object(p)) return I(p, y);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      })(), m = function(I) {
        const p = K;
        if (Array[p(977)](I)) {
          for (var y = 0, w = Array(I[p(1332)]); y < I[p(1332)]; y++) w[y] = I[y];
          return w;
        } else return Array.from(I);
      }, v = 2147483647, k = 36, E = 1, q = 26, T = 38, C = 700, P = 72, F = 128, D = "-", j = /^xn--/, O = /[^\0-\x7E]/, N = /[\x2E\u3002\uFF0E\uFF61]/g, R = { overflow: e(2856), "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": e(2888) }, L = k - E, $ = Math.floor, z = String[e(2171)];
      function G(I) {
        throw new RangeError(R[I]);
      }
      function ce(I, p) {
        for (var y = [], w = I.length; w--; )
          y[w] = p(I[w]);
        return y;
      }
      function ue(I, p) {
        const y = e;
        var w = I[y(585)]("@"), U = "";
        w.length > 1 && (U = w[0] + "@", I = w[1]), I = I.replace(N, ".");
        var M = I[y(585)]("."), ne = ce(M, p).join(".");
        return U + ne;
      }
      function fe(I) {
        const p = e;
        for (var y = [], w = 0, U = I[p(1332)]; w < U; ) {
          var M = I.charCodeAt(w++);
          if (M >= 55296 && M <= 56319 && w < U) {
            var ne = I[p(425)](w++);
            (ne & 64512) == 56320 ? y.push(((M & 1023) << 10) + (ne & 1023) + 65536) : (y.push(M), w--);
          } else y[p(902)](M);
        }
        return y;
      }
      var oe = function(p) {
        const y = e;
        return String[y(1609)][y(1964)](String, m(p));
      }, le = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : k;
      }, ke = function(p, y) {
        return p + 22 + 75 * (p < 26) - ((y != 0) << 5);
      }, ye = function(p, y, w) {
        var U = 0;
        for (p = w ? $(p / C) : p >> 1, p += $(p / y); p > L * q >> 1; U += k)
          p = $(p / L);
        return $(U + (L + 1) * p / (p + T));
      }, Me = function(p) {
        const y = e;
        var w = [], U = p[y(1332)], M = 0, ne = F, de = P, Ie = p[y(498)](D);
        Ie < 0 && (Ie = 0);
        for (var je = 0; je < Ie; ++je)
          p[y(425)](je) >= 128 && G(y(1848)), w[y(902)](p.charCodeAt(je));
        for (var Ve = Ie > 0 ? Ie + 1 : 0; Ve < U; ) {
          for (var Ce = M, Oe = 1, Be = k; ; Be += k) {
            Ve >= U && G(y(1080));
            var ge = le(p[y(425)](Ve++));
            (ge >= k || ge > $((v - M) / Oe)) && G("overflow"), M += ge * Oe;
            var $e = Be <= de ? E : Be >= de + q ? q : Be - de;
            if (ge < $e) break;
            var We = k - $e;
            Oe > $(v / We) && G(y(2089)), Oe *= We;
          }
          var Ue = w[y(1332)] + 1;
          de = ye(M - Ce, Ue, Ce == 0), $(M / Ue) > v - ne && G(y(2089)), ne += $(M / Ue), M %= Ue, w[y(2301)](M++, 0, ne);
        }
        return String.fromCodePoint.apply(String, w);
      }, Ee = function(p) {
        const y = e;
        var w = [];
        p = fe(p);
        var U = p[y(1332)], M = F, ne = 0, de = P, Ie = !0, je = !1, Ve = void 0;
        try {
          for (var Ce = p[Symbol[y(340)]](), Oe; !(Ie = (Oe = Ce[y(204)]()).done); Ie = !0) {
            var Be = Oe[y(998)];
            Be < 128 && w[y(902)](z(Be));
          }
        } catch (G0) {
          je = !0, Ve = G0;
        } finally {
          try {
            !Ie && Ce.return && Ce.return();
          } finally {
            if (je) throw Ve;
          }
        }
        var ge = w[y(1332)], $e = ge;
        for (ge && w[y(902)](D); $e < U; ) {
          var We = v, Ue = !0, P0 = !1, i0 = void 0;
          try {
            for (var c0 = p[Symbol[y(340)]](), $0; !(Ue = ($0 = c0[y(204)]()).done); Ue = !0) {
              var q0 = $0[y(998)];
              q0 >= M && q0 < We && (We = q0);
            }
          } catch (G0) {
            P0 = !0, i0 = G0;
          } finally {
            try {
              !Ue && c0[y(1692)] && c0.return();
            } finally {
              if (P0) throw i0;
            }
          }
          var t0 = $e + 1;
          We - M > $((v - ne) / t0) && G("overflow"), ne += (We - M) * t0, M = We;
          var u0 = !0, d0 = !1, E0 = void 0;
          try {
            for (var l0 = p[Symbol[y(340)]](), ka; !(u0 = (ka = l0[y(204)]())[y(1398)]); u0 = !0) {
              var Pa = ka[y(998)];
              if (Pa < M && ++ne > v && G(y(2089)), Pa == M) {
                for (var ux = ne, dx = k; ; dx += k) {
                  var lx = dx <= de ? E : dx >= de + q ? q : dx - de;
                  if (ux < lx) break;
                  var Ea = ux - lx, Ia = k - lx;
                  w[y(902)](z(ke(lx + Ea % Ia, 0))), ux = $(Ea / Ia);
                }
                w[y(902)](z(ke(ux, 0))), de = ye(ne, t0, $e == ge), ne = 0, ++$e;
              }
            }
          } catch (G0) {
            d0 = !0, E0 = G0;
          } finally {
            try {
              !u0 && l0.return && l0[y(1692)]();
            } finally {
              if (d0) throw E0;
            }
          }
          ++ne, ++M;
        }
        return w[y(2252)]("");
      }, Je = function(p) {
        return ue(p, function(y) {
          const w = K;
          return j.test(y) ? Me(y[w(2103)](4)[w(2522)]()) : y;
        });
      }, _ = function(p) {
        return ue(p, function(y) {
          const w = K;
          return O.test(y) ? w(828) + Ee(y) : y;
        });
      }, A = { version: e(1145), ucs2: { decode: fe, encode: oe }, decode: Me, encode: Ee, toASCII: _, toUnicode: Je }, H = {};
      function J(I) {
        const p = e;
        var y = I[p(425)](0), w = void 0;
        return y < 16 ? w = "%0" + y[p(2032)](16)[p(2132)]() : y < 128 ? w = "%" + y[p(2032)](16).toUpperCase() : y < 2048 ? w = "%" + (y >> 6 | 192)[p(2032)](16)[p(2132)]() + "%" + (y & 63 | 128).toString(16)[p(2132)]() : w = "%" + (y >> 12 | 224)[p(2032)](16)[p(2132)]() + "%" + (y >> 6 & 63 | 128)[p(2032)](16)[p(2132)]() + "%" + (y & 63 | 128)[p(2032)](16).toUpperCase(), w;
      }
      function Q(I) {
        const p = e;
        for (var y = "", w = 0, U = I[p(1332)]; w < U; ) {
          var M = parseInt(I.substr(w + 1, 2), 16);
          if (M < 128) y += String[p(2171)](M), w += 3;
          else if (M >= 194 && M < 224) {
            if (U - w >= 6) {
              var ne = parseInt(I[p(1973)](w + 4, 2), 16);
              y += String[p(2171)]((M & 31) << 6 | ne & 63);
            } else y += I[p(1973)](w, 6);
            w += 6;
          } else if (M >= 224) {
            if (U - w >= 9) {
              var de = parseInt(I.substr(w + 4, 2), 16), Ie = parseInt(I[p(1973)](w + 7, 2), 16);
              y += String[p(2171)]((M & 15) << 12 | (de & 63) << 6 | Ie & 63);
            } else y += I.substr(w, 9);
            w += 9;
          } else y += I[p(1973)](w, 3), w += 3;
        }
        return y;
      }
      function V(I, p) {
        const y = e;
        function w(U) {
          const M = K;
          var ne = Q(U);
          return ne[M(2716)](p.UNRESERVED) ? ne : U;
        }
        return I[y(2535)] && (I.scheme = String(I[y(2535)])[y(784)](p.PCT_ENCODED, w)[y(2522)]()[y(784)](p[y(2452)], "")), I.userinfo !== void 0 && (I.userinfo = String(I[y(762)])[y(784)](p[y(175)], w).replace(p[y(476)], J)[y(784)](p[y(175)], c)), I[y(172)] !== void 0 && (I[y(172)] = String(I[y(172)])[y(784)](p[y(175)], w)[y(2522)]()[y(784)](p[y(864)], J)[y(784)](p[y(175)], c)), I[y(2475)] !== void 0 && (I[y(2475)] = String(I.path)[y(784)](p[y(175)], w)[y(784)](I.scheme ? p[y(780)] : p[y(1802)], J)[y(784)](p[y(175)], c)), I[y(1096)] !== void 0 && (I[y(1096)] = String(I[y(1096)]).replace(p[y(175)], w)[y(784)](p[y(413)], J).replace(p.PCT_ENCODED, c)), I[y(1471)] !== void 0 && (I[y(1471)] = String(I.fragment)[y(784)](p.PCT_ENCODED, w)[y(784)](p[y(824)], J)[y(784)](p.PCT_ENCODED, c)), I;
      }
      function X(I) {
        return I.replace(/^0*(.*)/, "$1") || "0";
      }
      function ie(I, p) {
        const y = e;
        var w = I[y(2716)](p[y(746)]) || [], U = h(w, 2), M = U[1];
        return M ? M[y(585)](".")[y(2742)](X)[y(2252)](".") : I;
      }
      function se(I, p) {
        const y = e;
        var w = I[y(2716)](p[y(267)]) || [], U = h(w, 3), M = U[1], ne = U[2];
        if (M) {
          for (var de = M[y(2522)]()[y(585)]("::")[y(177)](), Ie = h(de, 2), je = Ie[0], Ve = Ie[1], Ce = Ve ? Ve[y(585)](":").map(X) : [], Oe = je.split(":")[y(2742)](X), Be = p.IPV4ADDRESS[y(1055)](Oe[Oe[y(1332)] - 1]), ge = Be ? 7 : 8, $e = Oe[y(1332)] - ge, We = Array(ge), Ue = 0; Ue < ge; ++Ue)
            We[Ue] = Ce[Ue] || Oe[$e + Ue] || "";
          Be && (We[ge - 1] = ie(We[ge - 1], p));
          var P0 = We.reduce(function(t0, u0, d0) {
            const E0 = y;
            if (!u0 || u0 === "0") {
              var l0 = t0[t0[E0(1332)] - 1];
              l0 && l0.index + l0.length === d0 ? l0[E0(1332)]++ : t0[E0(902)]({ index: d0, length: 1 });
            }
            return t0;
          }, []), i0 = P0[y(1086)](function(t0, u0) {
            const d0 = y;
            return u0[d0(1332)] - t0[d0(1332)];
          })[0], c0 = void 0;
          if (i0 && i0[y(1332)] > 1) {
            var $0 = We.slice(0, i0[y(2291)]), q0 = We[y(2103)](i0[y(2291)] + i0[y(1332)]);
            c0 = $0[y(2252)](":") + "::" + q0[y(2252)](":");
          } else c0 = We[y(2252)](":");
          return ne && (c0 += "%" + ne), c0;
        } else return I;
      }
      var xe = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, Le = ""[e(2716)](/(){0}/)[1] === void 0;
      function Ae(I) {
        const p = e;
        var y = arguments[p(1332)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = {}, U = y.iri !== !1 ? b : f;
        y.reference === p(1907) && (I = (y[p(2535)] ? y[p(2535)] + ":" : "") + "//" + I);
        var M = I[p(2716)](xe);
        if (M) {
          Le ? (w[p(2535)] = M[1], w.userinfo = M[3], w[p(172)] = M[4], w[p(2591)] = parseInt(M[5], 10), w[p(2475)] = M[6] || "", w.query = M[7], w[p(1471)] = M[8], isNaN(w[p(2591)]) && (w[p(2591)] = M[5])) : (w.scheme = M[1] || void 0, w.userinfo = I[p(1104)]("@") !== -1 ? M[3] : void 0, w[p(172)] = I[p(1104)]("//") !== -1 ? M[4] : void 0, w[p(2591)] = parseInt(M[5], 10), w[p(2475)] = M[6] || "", w[p(1096)] = I[p(1104)]("?") !== -1 ? M[7] : void 0, w.fragment = I[p(1104)]("#") !== -1 ? M[8] : void 0, isNaN(w[p(2591)]) && (w[p(2591)] = I[p(2716)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? M[4] : void 0)), w[p(172)] && (w[p(172)] = se(ie(w[p(172)], U), U)), w.scheme === void 0 && w[p(762)] === void 0 && w[p(172)] === void 0 && w.port === void 0 && !w.path && w[p(1096)] === void 0 ? w.reference = p(2896) : w[p(2535)] === void 0 ? w[p(2776)] = p(1168) : w[p(1471)] === void 0 ? w[p(2776)] = p(2513) : w[p(2776)] = "uri", y[p(2776)] && y.reference !== p(1907) && y[p(2776)] !== w.reference && (w[p(2265)] = w[p(2265)] || p(2314) + y[p(2776)] + p(1141));
          var ne = H[(y[p(2535)] || w[p(2535)] || "").toLowerCase()];
          if (!y[p(2684)] && (!ne || !ne[p(2684)])) {
            if (w[p(172)] && (y[p(2514)] || ne && ne[p(2514)])) try {
              w[p(172)] = A[p(2894)](w[p(172)][p(784)](U.PCT_ENCODED, Q)[p(2522)]());
            } catch (de) {
              w[p(2265)] = w.error || "Host's domain name can not be converted to ASCII via punycode: " + de;
            }
            V(w, f);
          } else V(w, U);
          ne && ne[p(429)] && ne[p(429)](w, y);
        } else w[p(2265)] = w.error || "URI can not be parsed.";
        return w;
      }
      function He(I, p) {
        const y = e;
        var w = p.iri !== !1 ? b : f, U = [];
        return I[y(762)] !== void 0 && (U.push(I[y(762)]), U[y(902)]("@")), I[y(172)] !== void 0 && U.push(se(ie(String(I[y(172)]), w), w).replace(w[y(267)], function(M, ne, de) {
          const Ie = y;
          return "[" + ne + (de ? Ie(2390) + de : "") + "]";
        })), (typeof I[y(2591)] == "number" || typeof I[y(2591)] === y(1653)) && (U.push(":"), U.push(String(I[y(2591)]))), U.length ? U[y(2252)]("") : void 0;
      }
      var Se = /^\.\.?\//, Ge = /^\/\.(\/|$)/, n0 = /^\/\.\.(\/|$)/, Qe = /^\/?(?:.|\n)*?(?=\/|$)/;
      function _e(I) {
        const p = e;
        for (var y = []; I.length; )
          if (I.match(Se)) I = I.replace(Se, "");
          else if (I[p(2716)](Ge)) I = I.replace(Ge, "/");
          else if (I[p(2716)](n0)) I = I[p(784)](n0, "/"), y[p(469)]();
          else if (I === "." || I === "..") I = "";
          else {
            var w = I[p(2716)](Qe);
            if (w) {
              var U = w[0];
              I = I[p(2103)](U[p(1332)]), y[p(902)](U);
            } else throw new Error(p(854));
          }
        return y[p(2252)]("");
      }
      function ze(I) {
        const p = e;
        var y = arguments[p(1332)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = y[p(1823)] ? b : f, U = [], M = H[(y[p(2535)] || I[p(2535)] || "")[p(2522)]()];
        if (M && M[p(1045)] && M[p(1045)](I, y), I[p(172)] && !w[p(267)][p(1055)](I[p(172)])) {
          if (y[p(2514)] || M && M[p(2514)]) try {
            I[p(172)] = y.iri ? A[p(2383)](I[p(172)]) : A[p(2894)](I[p(172)][p(784)](w[p(175)], Q)[p(2522)]());
          } catch (Ie) {
            I.error = I.error || p(1505) + (y[p(1823)] ? p(1835) : p(1925)) + p(2435) + Ie;
          }
        }
        V(I, w), y[p(2776)] !== "suffix" && I.scheme && (U.push(I[p(2535)]), U[p(902)](":"));
        var ne = He(I, y);
        if (ne !== void 0 && (y.reference !== p(1907) && U[p(902)]("//"), U.push(ne), I.path && I.path.charAt(0) !== "/" && U[p(902)]("/")), I[p(2475)] !== void 0) {
          var de = I[p(2475)];
          !y[p(2708)] && (!M || !M[p(2708)]) && (de = _e(de)), ne === void 0 && (de = de[p(784)](/^\/\//, p(454))), U[p(902)](de);
        }
        return I[p(1096)] !== void 0 && (U.push("?"), U[p(902)](I[p(1096)])), I[p(1471)] !== void 0 && (U[p(902)]("#"), U[p(902)](I[p(1471)])), U[p(2252)]("");
      }
      function Ye(I, p) {
        const y = e;
        var w = arguments[y(1332)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, U = arguments[3], M = {};
        return !U && (I = Ae(ze(I, w), w), p = Ae(ze(p, w), w)), w = w || {}, !w[y(2686)] && p.scheme ? (M.scheme = p[y(2535)], M[y(762)] = p[y(762)], M[y(172)] = p.host, M[y(2591)] = p[y(2591)], M[y(2475)] = _e(p.path || ""), M[y(1096)] = p[y(1096)]) : (p[y(762)] !== void 0 || p[y(172)] !== void 0 || p.port !== void 0 ? (M.userinfo = p[y(762)], M.host = p[y(172)], M.port = p[y(2591)], M[y(2475)] = _e(p[y(2475)] || ""), M.query = p[y(1096)]) : (p[y(2475)] ? (p[y(2475)][y(1028)](0) === "/" ? M[y(2475)] = _e(p[y(2475)]) : ((I[y(762)] !== void 0 || I[y(172)] !== void 0 || I[y(2591)] !== void 0) && !I.path ? M[y(2475)] = "/" + p.path : I[y(2475)] ? M.path = I[y(2475)][y(2103)](0, I[y(2475)][y(498)]("/") + 1) + p[y(2475)] : M[y(2475)] = p[y(2475)], M[y(2475)] = _e(M.path)), M[y(1096)] = p[y(1096)]) : (M[y(2475)] = I[y(2475)], p.query !== void 0 ? M[y(1096)] = p.query : M[y(1096)] = I[y(1096)]), M.userinfo = I[y(762)], M.host = I.host, M.port = I[y(2591)]), M[y(2535)] = I[y(2535)]), M.fragment = p[y(1471)], M;
      }
      function T0(I, p, y) {
        var U = d({ scheme: e(1589) }, y);
        return ze(Ye(Ae(I, U), Ae(p, U), U, !0), U);
      }
      function Mx(I, p) {
        const y = e;
        return typeof I === y(1653) ? I = ze(Ae(I, p), p) : i(I) === y(2844) && (I = Ae(ze(I, p), p)), I;
      }
      function In(I, p, y) {
        const w = e;
        return typeof I === w(1653) ? I = ze(Ae(I, y), y) : i(I) === w(2844) && (I = ze(I, y)), typeof p === w(1653) ? p = ze(Ae(p, y), y) : i(p) === w(2844) && (p = ze(p, y)), I === p;
      }
      function Cn(I, p) {
        const y = e;
        return I && I[y(2032)]()[y(784)](!p || !p[y(1823)] ? f[y(2814)] : b[y(2814)], J);
      }
      function b0(I, p) {
        const y = e;
        return I && I[y(2032)]()[y(784)](!p || !p[y(1823)] ? f[y(175)] : b.PCT_ENCODED, Q);
      }
      var Z0 = { scheme: e(1009), domainHost: !0, parse: function(p, y) {
        const w = e;
        return !p.host && (p[w(2265)] = p.error || "HTTP URIs must have a host."), p;
      }, serialize: function(p, y) {
        const w = e;
        var U = String(p[w(2535)])[w(2522)]() === w(2116);
        return (p[w(2591)] === (U ? 443 : 80) || p[w(2591)] === "") && (p[w(2591)] = void 0), !p[w(2475)] && (p.path = "/"), p;
      } }, pa = { scheme: "https", domainHost: Z0[e(2514)], parse: Z0[e(429)], serialize: Z0[e(1045)] };
      function ma(I) {
        const p = e;
        return typeof I.secure === p(1001) ? I.secure : String(I[p(2535)])[p(2522)]() === p(989);
      }
      var K0 = { scheme: "ws", domainHost: !0, parse: function(p, y) {
        const w = e;
        var U = p;
        return U[w(1536)] = ma(U), U[w(2637)] = (U[w(2475)] || "/") + (U.query ? "?" + U.query : ""), U.path = void 0, U.query = void 0, U;
      }, serialize: function(p, y) {
        const w = e;
        if ((p.port === (ma(p) ? 443 : 80) || p[w(2591)] === "") && (p[w(2591)] = void 0), typeof p[w(1536)] === w(1001) && (p[w(2535)] = p[w(1536)] ? w(989) : "ws", p.secure = void 0), p[w(2637)]) {
          var U = p[w(2637)].split("?"), M = h(U, 2), ne = M[0], de = M[1];
          p[w(2475)] = ne && ne !== "/" ? ne : void 0, p[w(1096)] = de, p.resourceName = void 0;
        }
        return p[w(1471)] = void 0, p;
      } }, ba = { scheme: e(989), domainHost: K0[e(2514)], parse: K0[e(429)], serialize: K0[e(1045)] }, Rn = {}, ga = "[A-Za-z0-9\\-\\.\\_\\~" + e(2448) + "]", o0 = "[0-9A-Fa-f]", Fn = n(n(e(2121) + o0 + "%" + o0 + o0 + "%" + o0 + o0) + "|" + n("%[89A-Fa-f]" + o0 + "%" + o0 + o0) + "|" + n("%" + o0 + o0)), Nn = e(416), Tn = e(201), qn = s(Tn, '[\\"\\\\]'), An = e(1767), _n = new RegExp(ga, "g"), L0 = new RegExp(Fn, "g"), On = new RegExp(s(e(1826), Nn, "[\\.]", e(564), qn), "g"), ya = new RegExp(s(e(1826), ga, An), "g"), Dn = ya;
      function Lx(I) {
        const p = e;
        var y = Q(I);
        return y[p(2716)](_n) ? y : I;
      }
      var va = { scheme: e(2497), parse: function(p, y) {
        const w = e;
        var U = p, M = U.to = U[w(2475)] ? U.path[w(585)](",") : [];
        if (U[w(2475)] = void 0, U[w(1096)]) {
          for (var ne = !1, de = {}, Ie = U[w(1096)][w(585)]("&"), je = 0, Ve = Ie[w(1332)]; je < Ve; ++je) {
            var Ce = Ie[je].split("=");
            switch (Ce[0]) {
              case "to":
                for (var Oe = Ce[1].split(","), Be = 0, ge = Oe[w(1332)]; Be < ge; ++Be)
                  M.push(Oe[Be]);
                break;
              case w(1266):
                U[w(1266)] = b0(Ce[1], y);
                break;
              case w(604):
                U[w(604)] = b0(Ce[1], y);
                break;
              default:
                ne = !0, de[b0(Ce[0], y)] = b0(Ce[1], y);
                break;
            }
          }
          ne && (U[w(772)] = de);
        }
        U[w(1096)] = void 0;
        for (var $e = 0, We = M[w(1332)]; $e < We; ++$e) {
          var Ue = M[$e].split("@");
          if (Ue[0] = b0(Ue[0]), y[w(2684)]) Ue[1] = b0(Ue[1], y).toLowerCase();
          else try {
            Ue[1] = A.toASCII(b0(Ue[1], y).toLowerCase());
          } catch (P0) {
            U[w(2265)] = U.error || w(1012) + P0;
          }
          M[$e] = Ue[w(2252)]("@");
        }
        return U;
      }, serialize: function(p, y) {
        const w = e;
        var U = p, M = u(p.to);
        if (M) {
          for (var ne = 0, de = M[w(1332)]; ne < de; ++ne) {
            var Ie = String(M[ne]), je = Ie[w(498)]("@"), Ve = Ie.slice(0, je)[w(784)](L0, Lx)[w(784)](L0, c)[w(784)](On, J), Ce = Ie[w(2103)](je + 1);
            try {
              Ce = y[w(1823)] ? A[w(2383)](Ce) : A[w(2894)](b0(Ce, y)[w(2522)]());
            } catch ($e) {
              U[w(2265)] = U.error || w(2031) + (y[w(1823)] ? w(1835) : w(1925)) + w(2435) + $e;
            }
            M[ne] = Ve + "@" + Ce;
          }
          U[w(2475)] = M[w(2252)](",");
        }
        var Oe = p.headers = p[w(772)] || {};
        p[w(1266)] && (Oe.subject = p.subject), p[w(604)] && (Oe[w(604)] = p[w(604)]);
        var Be = [];
        for (var ge in Oe)
          Oe[ge] !== Rn[ge] && Be.push(ge[w(784)](L0, Lx)[w(784)](L0, c)[w(784)](ya, J) + "=" + Oe[ge].replace(L0, Lx)[w(784)](L0, c).replace(Dn, J));
        return Be.length && (U.query = Be.join("&")), U;
      } }, jn = /^([^\:]+)\:(.*)/, wa = { scheme: e(1597), parse: function(p, y) {
        const w = e;
        var U = p[w(2475)] && p[w(2475)].match(jn), M = p;
        if (U) {
          var ne = y.scheme || M[w(2535)] || w(1597), de = U[1][w(2522)](), Ie = U[2], je = ne + ":" + (y[w(2104)] || de), Ve = H[je];
          M[w(2104)] = de, M[w(2233)] = Ie, M.path = void 0, Ve && (M = Ve.parse(M, y));
        } else M.error = M[w(2265)] || w(2330);
        return M;
      }, serialize: function(p, y) {
        const w = e;
        var U = y[w(2535)] || p[w(2535)] || w(1597), M = p[w(2104)], ne = U + ":" + (y[w(2104)] || M), de = H[ne];
        de && (p = de[w(1045)](p, y));
        var Ie = p, je = p[w(2233)];
        return Ie[w(2475)] = (M || y[w(2104)]) + ":" + je, Ie;
      } }, Mn = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, Sa = { scheme: "urn:uuid", parse: function(p, y) {
        const w = e;
        var U = p;
        return U.uuid = U[w(2233)], U[w(2233)] = void 0, !y[w(2686)] && (!U[w(2491)] || !U[w(2491)][w(2716)](Mn)) && (U[w(2265)] = U.error || w(2240)), U;
      }, serialize: function(p, y) {
        const w = e;
        var U = p;
        return U[w(2233)] = (p[w(2491)] || "")[w(2522)](), U;
      } };
      H[Z0[e(2535)]] = Z0, H[pa[e(2535)]] = pa, H[K0[e(2535)]] = K0, H[ba[e(2535)]] = ba, H[va[e(2535)]] = va, H[wa[e(2535)]] = wa, H[Sa[e(2535)]] = Sa, r[e(2010)] = H, r[e(608)] = J, r[e(603)] = Q, r[e(429)] = Ae, r[e(1182)] = _e, r[e(1045)] = ze, r[e(527)] = Ye, r[e(1635)] = T0, r.normalize = Mx, r[e(2366)] = In, r[e(1915)] = Cn, r.unescapeComponent = b0, Object[e(2592)](r, "__esModule", { value: !0 });
    });
  })(X0, X0[o(1469)])), X0[o(1469)];
}
var Qx, sr;
function la() {
  return sr || (sr = 1, Qx = function o(x, t) {
    const r = K;
    if (x === t) return !0;
    if (x && t && typeof x == r(2844) && typeof t == "object") {
      if (x[r(344)] !== t[r(344)]) return !1;
      var e, s, n;
      if (Array[r(977)](x)) {
        if (e = x[r(1332)], e != t[r(1332)]) return !1;
        for (s = e; s-- !== 0; ) if (!o(x[s], t[s])) return !1;
        return !0;
      }
      if (x.constructor === RegExp) return x[r(2635)] === t[r(2635)] && x[r(1790)] === t[r(1790)];
      if (x[r(1063)] !== Object.prototype[r(1063)]) return x[r(1063)]() === t.valueOf();
      if (x[r(2032)] !== Object[r(1700)].toString) return x[r(2032)]() === t[r(2032)]();
      if (n = Object[r(1806)](x), e = n[r(1332)], e !== Object[r(1806)](t)[r(1332)]) return !1;
      for (s = e; s-- !== 0; ) if (!Object.prototype[r(1428)][r(377)](t, n[s])) return !1;
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
function n2() {
  return nr || (nr = 1, Xx = function(x) {
    const t = K;
    for (var r = 0, e = x[t(1332)], s = 0, n; s < e; )
      r++, n = x.charCodeAt(s++), n >= 55296 && n <= 56319 && s < e && (n = x[t(425)](s), (n & 64512) == 56320 && s++);
    return r;
  }), Xx;
}
var Yx, or;
function W0() {
  const o = a;
  if (or) return Yx;
  or = 1, Yx = { copy: x, checkDataType: t, checkDataTypes: r, coerceToTypes: s, toHash: n, getProperty: u, escapeQuotes: d, equal: la(), ucs2length: n2(), varOccurences: l, varReplace: f, schemaHasRules: b, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: v, getPathExpr: k, getPath: E, getData: C, unescapeFragment: F, unescapeJsonPointer: O, escapeFragment: D, escapeJsonPointer: j };
  function x(N, R) {
    R = R || {};
    for (var L in N) R[L] = N[L];
    return R;
  }
  function t(N, R, L, $) {
    const z = K;
    var G = z($ ? 2755 : 2733), ce = z($ ? 2320 : 2446), ue = $ ? "!" : "", fe = $ ? "" : "!";
    switch (N) {
      case "null":
        return R + G + "null";
      case z(2173):
        return ue + z(1640) + R + ")";
      case "object":
        return "(" + ue + R + ce + z(1311) + R + G + '"object"' + ce + fe + "Array.isArray(" + R + "))";
      case z(1605):
        return z(2270) + R + G + z(695) + ce + fe + "(" + R + z(1360) + ce + R + G + R + (L ? ce + ue + "isFinite(" + R + ")" : "") + ")";
      case z(1206):
        return z(2270) + R + G + '"' + N + '"' + (L ? ce + ue + z(671) + R + ")" : "") + ")";
      default:
        return z(1311) + R + G + '"' + N + '"';
    }
  }
  function r(N, R, L) {
    const $ = K;
    switch (N[$(1332)]) {
      case 1:
        return t(N[0], R, L, !0);
      default:
        var z = "", G = n(N);
        G.array && G[$(2844)] && (z = G[$(1589)] ? "(" : "(!" + R + $(2320), z += $(1311) + R + $(634), delete G[$(1589)], delete G.array, delete G[$(2844)]), G[$(1206)] && delete G[$(1605)];
        for (var ce in G) z += (z ? $(2446) : "") + t(ce, R, L, !0);
        return z;
    }
  }
  var e = n([o(1653), "number", o(1605), "boolean", o(1589)]);
  function s(N, R) {
    const L = o;
    if (Array[L(977)](R)) {
      for (var $ = [], z = 0; z < R.length; z++) {
        var G = R[z];
        (e[G] || N === L(2173) && G === L(2173)) && ($[$[L(1332)]] = G);
      }
      if ($[L(1332)]) return $;
    } else {
      if (e[R]) return [R];
      if (N === L(2173) && R === L(2173)) return ["array"];
    }
  }
  function n(N) {
    const R = o;
    for (var L = {}, $ = 0; $ < N[R(1332)]; $++) L[N[$]] = !0;
    return L;
  }
  var i = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(N) {
    const R = o;
    return typeof N == R(1206) ? "[" + N + "]" : i[R(1055)](N) ? "." + N : "['" + d(N) + "']";
  }
  function d(N) {
    const R = o;
    return N[R(784)](c, R(2674))[R(784)](/\n/g, "\\n").replace(/\r/g, "\\r")[R(784)](/\f/g, "\\f")[R(784)](/\t/g, "\\t");
  }
  function l(N, R) {
    const L = o;
    R += L(297);
    var $ = N[L(2716)](new RegExp(R, "g"));
    return $ ? $[L(1332)] : 0;
  }
  function f(N, R, L) {
    const $ = o;
    return R += "([^0-9])", L = L[$(784)](/\$/g, $(1420)), N[$(784)](new RegExp(R, "g"), L + "$1");
  }
  function b(N, R) {
    if (typeof N == o(1001)) return !N;
    for (var $ in N) if (R[$]) return !0;
  }
  function h(N, R, L) {
    const $ = o;
    if (typeof N == $(1001)) return !N && L != $(2158);
    for (var z in N) if (z != L && R[z]) return !0;
  }
  function m(N, R) {
    if (typeof N != o(1001)) {
      for (var $ in N) if (!R[$]) return $;
    }
  }
  function v(N) {
    return "'" + d(N) + "'";
  }
  function k(N, R, L, $) {
    const z = o;
    var G = L ? "'/' + " + R + ($ ? "" : z(2759)) : $ ? z(2361) + R + z(483) : z(2666) + R + z(2078);
    return P(N, G);
  }
  function E(N, R, L) {
    var $ = v(L ? "/" + j(R) : u(R));
    return P(N, $);
  }
  var q = /^\/(?:[^~]|~0|~1)*$/, T = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function C(N, R, L) {
    const $ = o;
    var z, G, ce, ue;
    if (N === "") return $(935);
    if (N[0] == "/") {
      if (!q[$(1055)](N)) throw new Error($(1271) + N);
      G = N, ce = $(935);
    } else {
      if (ue = N[$(2716)](T), !ue) throw new Error($(1271) + N);
      if (z = +ue[1], G = ue[2], G == "#") {
        if (z >= R) throw new Error("Cannot access property/index " + z + " levels up, current level is " + R);
        return L[R - z];
      }
      if (z > R) throw new Error($(2421) + z + " levels up, current level is " + R);
      if (ce = $(2887) + (R - z || ""), !G) return ce;
    }
    for (var fe = ce, oe = G[$(585)]("/"), le = 0; le < oe[$(1332)]; le++) {
      var ke = oe[le];
      ke && (ce += u(O(ke)), fe += $(2446) + ce);
    }
    return fe;
  }
  function P(N, R) {
    const L = o;
    return N == '""' ? R : (N + L(2721) + R)[L(784)](/([^\\])' \+ '/g, "$1");
  }
  function F(N) {
    return O(decodeURIComponent(N));
  }
  function D(N) {
    return encodeURIComponent(j(N));
  }
  function j(N) {
    return N[o(784)](/~/g, "~0").replace(/\//g, "~1");
  }
  function O(N) {
    const R = o;
    return N[R(784)](/~1/g, "/")[R(784)](/~0/g, "~");
  }
  return Yx;
}
var et, ir;
function gn() {
  if (ir) return et;
  ir = 1;
  var o = W0();
  et = x;
  function x(t) {
    o.copy(t, this);
  }
  return et;
}
var xt = { exports: {} }, cr;
function o2() {
  const o = a;
  if (cr) return xt[o(1469)];
  cr = 1;
  var x = xt[o(1469)] = function(e, s, n) {
    const i = o;
    typeof s == i(1235) && (n = s, s = {}), n = s.cb || n;
    var c = typeof n == i(1235) ? n : n[i(1091)] || function() {
    }, u = n[i(411)] || function() {
    };
    t(s, c, u, e, "", e);
  };
  x[o(2379)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x.arrayKeywords = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[o(233)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[o(1715)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, s, n, i, c, u, d, l, f, b) {
    const h = o;
    if (i && typeof i == h(2844) && !Array.isArray(i)) {
      s(i, c, u, d, l, f, b);
      for (var m in i) {
        var v = i[m];
        if (Array.isArray(v)) {
          if (m in x.arrayKeywords)
            for (var k = 0; k < v[h(1332)]; k++) t(e, s, n, v[k], c + "/" + m + "/" + k, u, c, m, i, k);
        } else if (m in x[h(233)]) {
          if (v && typeof v == h(2844))
            for (var E in v) t(e, s, n, v[E], c + "/" + m + "/" + r(E), u, c, m, i, E);
        } else (m in x[h(2379)] || e.allKeys && !(m in x[h(1715)])) && t(e, s, n, v, c + "/" + m, u, c, m, i);
      }
      n(i, c, u, d, l, f, b);
    }
  }
  function r(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return xt[o(1469)];
}
var tt, ur;
function fa() {
  const o = a;
  if (ur) return tt;
  ur = 1;
  var x = s2(), t = la(), r = W0(), e = gn(), s = o2();
  tt = n, n[o(2304)] = E, n[o(923)] = m, n[o(1158)] = q, n[o(2621)] = T, n[o(510)] = f, n[o(224)] = i;
  function n(C, P, F) {
    const D = o;
    var j = this[D(605)][F];
    if (typeof j == D(1653))
      if (this._refs[j]) j = this[D(605)][j];
      else return n.call(this, C, P, j);
    if (j = j || this._schemas[F], j instanceof e) return f(j[D(224)], this[D(2801)].inlineRefs) ? j[D(224)] : j[D(1348)] || this[D(774)](j);
    var O = i.call(this, P, F), N, R, L;
    return O && (N = O[D(224)], P = O[D(1988)], L = O.baseId), N instanceof e ? R = N[D(1348)] || C[D(377)](this, N[D(224)], P, void 0, L) : N !== void 0 && (R = f(N, this[D(2801)][D(648)]) ? N : C[D(377)](this, N, P, void 0, L)), R;
  }
  function i(C, P) {
    const F = o;
    var D = x[F(429)](P), j = v(D), O = m(this[F(317)](C[F(224)]));
    if (Object[F(1806)](C[F(224)])[F(1332)] === 0 || j !== O) {
      var N = E(j), R = this[F(605)][N];
      if (typeof R == "string") return c[F(377)](this, C, R, D);
      if (R instanceof e)
        R[F(1348)] || this[F(774)](R), C = R;
      else if (R = this[F(840)][N], R instanceof e) {
        if (R[F(1348)] || this[F(774)](R), N == E(P)) return { schema: R, root: C, baseId: O };
        C = R;
      } else return;
      if (!C.schema) return;
      O = m(this[F(317)](C[F(224)]));
    }
    return d[F(377)](this, D, O, C[F(224)], C);
  }
  function c(C, P, F) {
    const D = o;
    var j = i[D(377)](this, C, P);
    if (j) {
      var O = j[D(224)], N = j[D(2456)];
      C = j[D(1988)];
      var R = this._getId(O);
      return R && (N = q(N, R)), d[D(377)](this, F, N, O, C);
    }
  }
  var u = r.toHash([o(657), o(1160), o(2583), o(2378), o(1891)]);
  function d(C, P, F, D) {
    const j = o;
    if (C[j(1471)] = C[j(1471)] || "", C[j(1471)].slice(0, 1) == "/") {
      for (var O = C.fragment[j(585)]("/"), N = 1; N < O[j(1332)]; N++) {
        var R = O[N];
        if (R) {
          if (R = r[j(500)](R), F = F[R], F === void 0) break;
          var L;
          if (!u[R] && (L = this._getId(F), L && (P = q(P, L)), F[j(316)])) {
            var $ = q(P, F.$ref), z = i[j(377)](this, D, $);
            z && (F = z[j(224)], D = z[j(1988)], P = z[j(2456)]);
          }
        }
      }
      if (F !== void 0 && F !== D[j(224)]) return { schema: F, root: D, baseId: P };
    }
  }
  var l = r[o(2589)]([o(190), o(2039), o(1777), o(2213), o(1610), o(991), "minProperties", o(2520), "minItems", "maximum", o(962), o(1431), "multipleOf", o(1025), "enum"]);
  function f(C, P) {
    if (P === !1) return !1;
    if (P === void 0 || P === !0) return b(C);
    if (P) return h(C) <= P;
  }
  function b(C) {
    const P = o;
    var F;
    if (Array[P(977)](C)) {
      for (var D = 0; D < C[P(1332)]; D++)
        if (F = C[D], typeof F == "object" && !b(F)) return !1;
    } else for (var j in C)
      if (j == P(316) || (F = C[j], typeof F == P(2844) && !b(F))) return !1;
    return !0;
  }
  function h(C) {
    const P = o;
    var F = 0, D;
    if (Array[P(977)](C)) {
      for (var j = 0; j < C[P(1332)]; j++)
        if (D = C[j], typeof D == P(2844) && (F += h(D)), F == 1 / 0) return 1 / 0;
    } else for (var O in C) {
      if (O == P(316)) return 1 / 0;
      if (l[O]) F++;
      else if (D = C[O], typeof D == "object" && (F += h(D) + 1), F == 1 / 0) return 1 / 0;
    }
    return F;
  }
  function m(C, P) {
    P !== !1 && (C = E(C));
    var F = x.parse(C);
    return v(F);
  }
  function v(C) {
    const P = o;
    return x.serialize(C)[P(585)]("#")[0] + "#";
  }
  var k = /#\/?$/;
  function E(C) {
    return C ? C[o(784)](k, "") : "";
  }
  function q(C, P) {
    const F = o;
    return P = E(P), x[F(1635)](C, P);
  }
  function T(C) {
    const P = o;
    var F = E(this[P(317)](C)), D = { "": F }, j = { "": m(F, !1) }, O = {}, N = this;
    return s(C, { allKeys: !0 }, function(R, L, $, z, G, ce, ue) {
      const fe = P;
      if (L !== "") {
        var oe = N._getId(R), le = D[z], ke = j[z] + "/" + G;
        if (ue !== void 0 && (ke += "/" + (typeof ue == "number" ? ue : r.escapeFragment(ue))), typeof oe == fe(1653)) {
          oe = le = E(le ? x[fe(1635)](le, oe) : oe);
          var ye = N[fe(605)][oe];
          if (typeof ye == fe(1653) && (ye = N[fe(605)][ye]), ye && ye.schema) {
            if (!t(R, ye[fe(224)])) throw new Error(fe(1132) + oe + '" resolves to more than one schema');
          } else if (oe != E(ke))
            if (oe[0] == "#") {
              if (O[oe] && !t(R, O[oe])) throw new Error('id "' + oe + fe(2414));
              O[oe] = R;
            } else N[fe(605)][oe] = ke;
        }
        D[L] = le, j[L] = ke;
      }
    }), O;
  }
  return tt;
}
var at, dr;
function ha() {
  if (dr) return at;
  dr = 1;
  var o = fa();
  at = { Validation: r(x), MissingRef: r(t) };
  function x(e) {
    const s = K;
    this[s(615)] = s(423), this[s(638)] = e, this[s(2523)] = this.validation = !0;
  }
  t.message = function(e, s) {
    const n = K;
    return "can't resolve reference " + s + n(1262) + e;
  };
  function t(e, s, n) {
    const i = K;
    this[i(615)] = n || t[i(615)](e, s), this[i(1319)] = o[i(1158)](e, s), this.missingSchema = o[i(2304)](o[i(923)](this.missingRef));
  }
  function r(e) {
    const s = K;
    return e[s(1700)] = Object[s(2469)](Error[s(1700)]), e.prototype[s(344)] = e, e;
  }
  return at;
}
var rt, lr;
function yn() {
  return lr || (lr = 1, rt = function(o, x) {
    const t = K;
    x || (x = {}), typeof x === t(1235) && (x = { cmp: x });
    var r = typeof x.cycles === t(1001) ? x[t(2305)] : !1, e = x[t(1542)] && /* @__PURE__ */ (function(n) {
      return function(i) {
        return function(c, u) {
          var d = { key: c, value: i[c] }, l = { key: u, value: i[u] };
          return n(d, l);
        };
      };
    })(x[t(1542)]), s = [];
    return (function n(i) {
      const c = t;
      if (i && i[c(357)] && typeof i.toJSON === c(1235) && (i = i[c(357)]()), i !== void 0) {
        if (typeof i == "number") return isFinite(i) ? "" + i : c(1589);
        if (typeof i !== c(2844)) return JSON[c(306)](i);
        var u, d;
        if (Array.isArray(i)) {
          for (d = "[", u = 0; u < i.length; u++)
            u && (d += ","), d += n(i[u]) || "null";
          return d + "]";
        }
        if (i === null) return "null";
        if (s[c(1104)](i) !== -1) {
          if (r) return JSON[c(306)](c(2160));
          throw new TypeError(c(1148));
        }
        var l = s[c(902)](i) - 1, f = Object[c(1806)](i).sort(e && e(i));
        for (d = "", u = 0; u < f[c(1332)]; u++) {
          var b = f[u], h = n(i[b]);
          h && (d && (d += ","), d += JSON[c(306)](b) + ":" + h);
        }
        return s[c(2301)](l, 1), "{" + d + "}";
      }
    })(o);
  }), rt;
}
var st, fr;
function vn() {
  return fr || (fr = 1, st = function(x, t, r) {
    const e = K;
    var s = "", n = x[e(224)].$async === !0, i = x[e(910)].schemaHasRulesExcept(x[e(224)], x[e(2363)][e(1288)], e(316)), c = x[e(2288)][e(317)](x[e(224)]);
    if (x[e(2167)].strictKeywords) {
      var u = x[e(910)][e(1126)](x[e(224)], x.RULES.keywords);
      if (u) {
        var d = e(2834) + u;
        if (x[e(2167)][e(2347)] === "log") x.logger[e(196)](d);
        else throw new Error(d);
      }
    }
    if (x[e(2539)] && (s += " var validate = ", n && (x[e(418)] = !0, s += e(701)), s += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", c && (x[e(2167)][e(2026)] || x.opts[e(914)]) && (s += " " + (e(2282) + c + e(225)) + " ")), typeof x.schema == e(1001) || !(i || x[e(224)][e(316)])) {
      var t = e(2875), l = x[e(2454)], f = x.dataLevel, b = x[e(224)][t], h = x[e(442)] + x[e(910)][e(1295)](t), m = x[e(1056)] + "/" + t, P = !x[e(2167)].allErrors, j, v = e(2887) + (f || ""), C = "valid" + l;
      if (x[e(224)] === !1) {
        x[e(2539)] ? P = !0 : s += " var " + C + " = false; ";
        var k = k || [];
        k[e(902)](s), s = "", x[e(1560)] !== !1 ? (s += " { keyword: '" + (j || e(2875)) + e(1016) + x[e(2247)] + " , schemaPath: " + x[e(910)].toQuotedString(m) + e(2673), x[e(2167)][e(389)] !== !1 && (s += e(1595)), x[e(2167)][e(2200)] && (s += e(1130) + x[e(442)] + e(1798) + v + " "), s += " } ") : s += e(1136);
        var E = s;
        s = k.pop(), !x[e(2807)] && P ? x[e(418)] ? s += " throw new ValidationError([" + E + "]); " : s += e(553) + E + e(2357) : s += e(2804) + E + e(1109);
      } else x[e(2539)] ? n ? s += e(1579) : s += e(715) : s += e(551) + C + e(409);
      return x[e(2539)] && (s += e(372)), s;
    }
    if (x[e(2539)]) {
      var q = x[e(2539)], l = x[e(2454)] = 0, f = x[e(1356)] = 0, v = e(2887);
      if (x[e(1379)] = x.resolve[e(923)](x[e(2288)][e(317)](x[e(1988)][e(224)])), x.baseId = x[e(2456)] || x[e(1379)], delete x[e(2539)], x[e(2392)] = [""], x[e(224)].default !== void 0 && x[e(2167)][e(2030)] && x.opts.strictDefaults) {
        var T = "default is ignored in the schema root";
        if (x[e(2167)][e(1474)] === e(1872)) x[e(665)].warn(T);
        else throw new Error(T);
      }
      s += e(964), s += e(920), s += e(918);
    } else {
      var l = x[e(2454)], f = x[e(1356)], v = e(2887) + (f || "");
      if (c && (x[e(2456)] = x[e(1635)].url(x[e(2456)], c)), n && !x.async) throw new Error("async schema in sync schema");
      s += e(332) + l + " = errors;";
    }
    var C = e(295) + l, P = !x[e(2167)][e(1842)], F = "", D = "", j, O = x[e(224)][e(190)], N = Array[e(977)](O);
    if (O && x[e(2167)].nullable && x[e(224)][e(2101)] === !0 && (N ? O[e(1104)](e(1589)) == -1 && (O = O[e(1545)](e(1589))) : O != e(1589) && (O = [O, e(1589)], N = !0)), N && O[e(1332)] == 1 && (O = O[0], N = !1), x[e(224)][e(316)] && i) {
      if (x[e(2167)][e(1946)] == e(1791)) throw new Error(e(2678) + x[e(1056)] + '" (see option extendRefs)');
      x[e(2167)].extendRefs !== !0 && (i = !1, x[e(665)][e(196)](e(750) + x.errSchemaPath + '"'));
    }
    if (x[e(224)].$comment && x.opts[e(1514)] && (s += " " + x[e(2363)][e(1288)][e(1514)].code(x, e(1514))), O) {
      if (x[e(2167)].coerceTypes) var R = x[e(910)].coerceToTypes(x[e(2167)][e(1681)], O);
      var L = x.RULES.types[O];
      if (R || N || L === !0 || L && !Se(L)) {
        var h = x.schemaPath + e(1137), m = x.errSchemaPath + e(217), h = x.schemaPath + e(1137), m = x[e(1056)] + e(217), $ = e(N ? 2729 : 531);
        if (s += e(537) + x.util[$](O, v, x[e(2167)][e(1490)], !0) + e(1432), R) {
          var z = e(640) + l, G = e(468) + l;
          s += e(551) + z + e(398) + v + e(2437) + G + e(2189), x[e(2167)][e(1681)] == e(2173) && (s += e(537) + z + " == 'object' && Array.isArray(" + v + e(2185) + v + ".length == 1) { " + v + e(2821) + v + e(2806) + z + e(398) + v + e(1676) + x[e(910)].checkDataType(x[e(224)].type, v, x[e(2167)][e(1490)]) + ") " + G + e(2821) + v + e(1111)), s += e(537) + G + e(460);
          var ce = R;
          if (ce)
            for (var ue, fe = -1, oe = ce[e(1332)] - 1; fe < oe; )
              ue = ce[fe += 1], ue == e(1653) ? s += e(347) + z + " == 'number' || " + z + " == 'boolean') " + G + e(2657) + v + e(834) + v + e(200) + G + e(1636) : ue == e(1206) || ue == "integer" ? (s += e(347) + z + e(568) + v + e(2082) + z + e(1106) + v + e(2446) + v + e(1965) + v + " ", ue == e(1605) && (s += e(1117) + v + e(1360)), s += e(1276) + G + e(229) + v + "; ") : ue == e(1001) ? s += e(347) + v + " === 'false' || " + v + e(2018) + v + e(200) + G + e(1394) + v + " === 'true' || " + v + e(953) + G + e(409) : ue == e(1589) ? s += e(347) + v + e(800) + v + e(2018) + v + " === false) " + G + " = null; " : x.opts.coerceTypes == "array" && ue == e(2173) && (s += e(347) + z + e(2506) + z + e(2600) + z + e(568) + v + e(764) + G + e(2723) + v + e(2432));
          s += e(1105);
          var k = k || [];
          k.push(s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + (j || e(190)) + "' , dataPath: (dataPath || '') + " + x.errorPath + " , schemaPath: " + x[e(910)].toQuotedString(m) + e(1455), N ? s += "" + O[e(2252)](",") : s += "" + O, s += e(2482), x[e(2167)][e(389)] !== !1 && (s += " , message: 'should be ", N ? s += "" + O[e(2252)](",") : s += "" + O, s += "' "), x[e(2167)][e(2200)] && (s += e(624) + h + " , parentSchema: validate.schema" + x[e(442)] + e(1798) + v + " "), s += e(1134)) : s += " {} ";
          var E = s;
          s = k[e(469)](), !x[e(2807)] && P ? x[e(418)] ? s += e(1323) + E + e(1278) : s += e(553) + E + e(2357) : s += e(2804) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(1917) + G + e(2717);
          var le = f ? e(2887) + (f - 1 || "") : e(1391), ke = f ? x[e(2392)][f] : e(1263);
          s += " " + v + e(2821) + G + "; ", !f && (s += e(1744) + le + e(809)), s += " " + le + "[" + ke + "] = " + G + e(1111);
        } else {
          var k = k || [];
          k.push(s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + (j || e(190)) + "' , dataPath: (dataPath || '') + " + x[e(2247)] + e(192) + x[e(910)][e(1250)](m) + e(1455), N ? s += "" + O.join(",") : s += "" + O, s += "' } ", x[e(2167)][e(389)] !== !1 && (s += e(1191), N ? s += "" + O[e(2252)](",") : s += "" + O, s += "' "), x[e(2167)][e(2200)] && (s += e(624) + h + e(2799) + x[e(442)] + e(1798) + v + " "), s += e(1134)) : s += " {} ";
          var E = s;
          s = k.pop(), !x.compositeRule && P ? x.async ? s += " throw new ValidationError([" + E + "]); " : s += " validate.errors = [" + E + e(2357) : s += " var err = " + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        s += e(1134);
      }
    }
    if (x[e(224)][e(316)] && !i) s += " " + x[e(2363)][e(1288)][e(316)][e(586)](x, e(316)) + " ", P && (s += e(2164), q ? s += "0" : s += e(886) + l, s += e(1432), D += "}");
    else {
      var ye = x.RULES;
      if (ye) {
        for (var L, Me = -1, Ee = ye.length - 1; Me < Ee; )
          if (L = ye[Me += 1], Se(L)) {
            if (L.type && (s += " if (" + x[e(910)].checkDataType(L.type, v, x.opts[e(1490)]) + e(1432)), x[e(2167)][e(2030)]) {
              if (L.type == "object" && x[e(224)][e(657)]) {
                var b = x[e(224)][e(657)], Je = Object.keys(b), _ = Je;
                if (_)
                  for (var A, H = -1, J = _[e(1332)] - 1; H < J; ) {
                    A = _[H += 1];
                    var Q = b[A];
                    if (Q[e(2222)] !== void 0) {
                      var V = v + x[e(910)][e(1295)](A);
                      if (x[e(2807)]) {
                        if (x[e(2167)].strictDefaults) {
                          var T = e(2598) + V;
                          if (x.opts[e(1474)] === e(1872)) x[e(665)][e(196)](T);
                          else throw new Error(T);
                        }
                      } else s += e(537) + V + " === undefined ", x.opts[e(2030)] == e(1489) && (s += e(2320) + V + e(1528) + V + e(1074)), s += e(664) + V + " = ", x[e(2167)][e(2030)] == e(1307) ? s += " " + x[e(1683)](Q[e(2222)]) + " " : s += " " + JSON.stringify(Q[e(2222)]) + " ", s += "; ";
                    }
                  }
              } else if (L.type == e(2173) && Array.isArray(x[e(224)][e(1613)])) {
                var X = x[e(224)][e(1613)];
                if (X) {
                  for (var Q, fe = -1, ie = X[e(1332)] - 1; fe < ie; )
                    if (Q = X[fe += 1], Q.default !== void 0) {
                      var V = v + "[" + fe + "]";
                      if (x.compositeRule) {
                        if (x.opts[e(1474)]) {
                          var T = "default is ignored for: " + V;
                          if (x[e(2167)][e(1474)] === e(1872)) x.logger.warn(T);
                          else throw new Error(T);
                        }
                      } else s += e(537) + V + e(675), x[e(2167)].useDefaults == e(1489) && (s += " || " + V + e(1528) + V + e(1074)), s += e(664) + V + " = ", x[e(2167)][e(2030)] == e(1307) ? s += " " + x[e(1683)](Q[e(2222)]) + " " : s += " " + JSON[e(306)](Q[e(2222)]) + " ", s += "; ";
                    }
                }
              }
            }
            var se = L[e(2516)];
            if (se) {
              for (var xe, Le = -1, Ae = se[e(1332)] - 1; Le < Ae; )
                if (xe = se[Le += 1], Ge(xe)) {
                  var He = xe[e(586)](x, xe[e(1174)], L[e(190)]);
                  He && (s += " " + He + " ", P && (F += "}"));
                }
            }
            if (P && (s += " " + F + " ", F = ""), L.type && (s += e(1134), O && O === L[e(190)] && !R)) {
              s += " else { ";
              var h = x.schemaPath + e(1137), m = x[e(1056)] + e(217), k = k || [];
              k.push(s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + (j || "type") + e(1016) + x.errorPath + e(192) + x.util[e(1250)](m) + e(1455), N ? s += "" + O[e(2252)](",") : s += "" + O, s += e(2482), x[e(2167)][e(389)] !== !1 && (s += " , message: 'should be ", N ? s += "" + O[e(2252)](",") : s += "" + O, s += "' "), x.opts[e(2200)] && (s += " , schema: validate.schema" + h + e(2799) + x.schemaPath + e(1798) + v + " "), s += " } ") : s += " {} ";
              var E = s;
              s = k[e(469)](), !x[e(2807)] && P ? x[e(418)] ? s += e(1323) + E + e(1278) : s += " validate.errors = [" + E + e(2357) : s += e(2804) + E + e(1109), s += e(1134);
            }
            P && (s += e(2861), q ? s += "0" : s += e(886) + l, s += e(1432), D += "}");
          }
      }
    }
    P && (s += " " + D + " "), q ? (n ? (s += e(1122), s += e(324)) : (s += e(2541), s += e(2642)), s += e(2309)) : s += e(551) + C + e(293) + l + ";";
    function Se(Qe) {
      const _e = e;
      for (var ze = Qe[_e(2516)], Ye = 0; Ye < ze[_e(1332)]; Ye++) if (Ge(ze[Ye])) return !0;
    }
    function Ge(Qe) {
      const _e = e;
      return x[_e(224)][Qe[_e(1174)]] !== void 0 || Qe[_e(2789)] && n0(Qe);
    }
    function n0(Qe) {
      const _e = e;
      for (var ze = Qe.implements, Ye = 0; Ye < ze[_e(1332)]; Ye++) if (x[_e(224)][ze[Ye]] !== void 0) return !0;
    }
    return s;
  }), st;
}
var nt, hr;
function i2() {
  const o = a;
  if (hr) return nt;
  hr = 1;
  var x = fa(), t = W0(), r = ha(), e = yn(), s = vn(), n = t[o(1013)], i = la(), c = r[o(756)];
  nt = u;
  function u(E, q, T, C) {
    const P = o;
    var F = this, D = this._opts, j = [void 0], O = {}, N = [], R = {}, L = [], $ = {}, z = [];
    q = q || { schema: E, refVal: j, refs: O };
    var G = d[P(377)](this, E, q, C), ce = this[P(1339)][G[P(2291)]];
    if (G[P(1765)]) return ce[P(1996)] = ke;
    var ue = this[P(272)], fe = this[P(2363)];
    try {
      var oe = ye(E, q, T, C);
      ce[P(1348)] = oe;
      var le = ce[P(1996)];
      return le && (le[P(224)] = oe[P(224)], le[P(638)] = null, le.refs = oe[P(985)], le[P(874)] = oe[P(874)], le.root = oe.root, le[P(2532)] = oe[P(2532)], D[P(2026)] && (le[P(2635)] = oe[P(2635)])), oe;
    } finally {
      l.call(this, E, q, C);
    }
    function ke() {
      const V = P;
      var X = ce[V(1348)], ie = X[V(1964)](this, arguments);
      return ke.errors = X[V(638)], ie;
    }
    function ye(V, X, ie, se) {
      const xe = P;
      var Le = !X || X && X[xe(224)] == V;
      if (X[xe(224)] != q[xe(224)]) return u[xe(377)](F, V, X, ie, se);
      var Ae = V[xe(2532)] === !0, He = s({ isTop: !0, schema: V, isRoot: Le, baseId: se, root: X, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: r[xe(2646)], RULES: fe, validate: s, util: t, resolve: x, resolveRef: Me, usePattern: H, useDefault: J, useCustomRule: Q, opts: D, formats: ue, logger: F[xe(665)], self: F });
      He = k(j, m) + k(N, b) + k(L, h) + k(z, v) + He, D[xe(914)] && (He = D[xe(914)](He, V));
      var Se;
      try {
        var Ge = new Function(xe(2288), xe(2363), xe(2726), xe(1988), xe(874), xe(263), xe(203), "equal", xe(1013), "ValidationError", He);
        Se = Ge(F, fe, ue, q, j, L, z, i, n, c), j[0] = Se;
      } catch (n0) {
        throw F.logger[xe(2265)](xe(2120), He), n0;
      }
      return Se[xe(224)] = V, Se[xe(638)] = null, Se.refs = O, Se[xe(874)] = j, Se[xe(1988)] = Le ? Se : X, Ae && (Se[xe(2532)] = !0), D.sourceCode === !0 && (Se[xe(2635)] = { code: He, patterns: N, defaults: L }), Se;
    }
    function Me(V, X, ie) {
      const se = P;
      X = x[se(1158)](V, X);
      var xe = O[X], Le, Ae;
      if (xe !== void 0) return Le = j[xe], Ae = se(515) + xe + "]", A(Le, Ae);
      if (!ie && q[se(985)]) {
        var He = q[se(985)][X];
        if (He !== void 0) return Le = q[se(874)][He], Ae = Ee(X, Le), A(Le, Ae);
      }
      Ae = Ee(X);
      var Se = x[se(377)](F, ye, q, X);
      if (Se === void 0) {
        var Ge = T && T[X];
        Ge && (Se = x[se(510)](Ge, D.inlineRefs) ? Ge : u[se(377)](F, Ge, q, T, V));
      }
      if (Se === void 0) Je(X);
      else return _(X, Se), A(Se, Ae);
    }
    function Ee(V, X) {
      const ie = P;
      var se = j.length;
      return j[se] = X, O[V] = se, ie(874) + se;
    }
    function Je(V) {
      delete O[V];
    }
    function _(V, X) {
      var ie = O[V];
      j[ie] = X;
    }
    function A(V, X) {
      const ie = P;
      return typeof V == "object" || typeof V == ie(1001) ? { code: X, schema: V, inline: !0 } : { code: X, $async: V && !!V[ie(2532)] };
    }
    function H(V) {
      const X = P;
      var ie = R[V];
      return ie === void 0 && (ie = R[V] = N[X(1332)], N[ie] = V), X(1777) + ie;
    }
    function J(V) {
      const X = P;
      switch (typeof V) {
        case "boolean":
        case X(1206):
          return "" + V;
        case X(1653):
          return t[X(1250)](V);
        case X(2844):
          if (V === null) return X(1589);
          var ie = e(V), se = $[ie];
          return se === void 0 && (se = $[ie] = L[X(1332)], L[se] = V), X(2222) + se;
      }
    }
    function Q(V, X, ie, se) {
      const xe = P;
      if (F[xe(2801)][xe(2139)] !== !1) {
        var Le = V[xe(1259)][xe(2378)];
        if (Le && !Le.every(function(Ye) {
          const T0 = xe;
          return Object[T0(1700)][T0(1428)][T0(377)](ie, Ye);
        })) throw new Error(xe(1614) + Le[xe(2252)](","));
        var Ae = V[xe(1259)].validateSchema;
        if (Ae) {
          var He = Ae(X);
          if (!He) {
            var Se = xe(2062) + F[xe(1425)](Ae[xe(638)]);
            if (F[xe(2801)][xe(2139)] == xe(1872)) F[xe(665)][xe(2265)](Se);
            else throw new Error(Se);
          }
        }
      }
      var Ge = V[xe(1259)][xe(1544)], n0 = V.definition[xe(2730)], Qe = V.definition[xe(2405)], _e;
      if (Ge) _e = Ge.call(F, X, ie, se);
      else if (Qe)
        _e = Qe[xe(377)](F, X, ie, se), D[xe(2139)] !== !1 && F[xe(2139)](_e, !0);
      else if (n0) _e = n0.call(F, se, V[xe(1174)], X, ie);
      else if (_e = V.definition.validate, !_e) return;
      if (_e === void 0) throw new Error('custom keyword "' + V[xe(1174)] + xe(1517));
      var ze = z.length;
      return z[ze] = _e, { code: xe(2180) + ze, validate: _e };
    }
  }
  function d(E, q, T) {
    const C = o;
    var P = f[C(377)](this, E, q, T);
    return P >= 0 ? { index: P, compiling: !0 } : (P = this._compilations[C(1332)], this[C(1339)][P] = { schema: E, root: q, baseId: T }, { index: P, compiling: !1 });
  }
  function l(E, q, T) {
    const C = o;
    var P = f.call(this, E, q, T);
    P >= 0 && this[C(1339)][C(2301)](P, 1);
  }
  function f(E, q, T) {
    const C = o;
    for (var P = 0; P < this._compilations.length; P++) {
      var F = this[C(1339)][P];
      if (F.schema == E && F[C(1988)] == q && F.baseId == T) return P;
    }
    return -1;
  }
  function b(E, q) {
    const T = o;
    return T(2703) + E + T(258) + t[T(1250)](q[E]) + ");";
  }
  function h(E) {
    return o(455) + E + " = defaults[" + E + "];";
  }
  function m(E, q) {
    const T = o;
    return q[E] === void 0 ? "" : T(580) + E + T(2559) + E + "];";
  }
  function v(E) {
    return o(1939) + E + " = customRules[" + E + "];";
  }
  function k(E, q) {
    if (!E[o(1332)]) return "";
    for (var C = "", P = 0; P < E.length; P++) C += q(P, E);
    return C;
  }
  return nt;
}
var ot = { exports: {} }, pr;
function c2() {
  const o = a;
  if (pr) return ot[o(1469)];
  pr = 1;
  var x = ot[o(1469)] = function() {
    const r = o;
    this[r(2852)] = {};
  };
  return x[o(1700)][o(422)] = function(r, e) {
    const s = o;
    this[s(2852)][r] = e;
  }, x[o(1700)].get = function(r) {
    return this[o(2852)][r];
  }, x[o(1700)][o(1301)] = function(r) {
    const e = o;
    delete this[e(2852)][r];
  }, x[o(1700)][o(2254)] = function() {
    const r = o;
    this[r(2852)] = {};
  }, ot[o(1469)];
}
var it, mr;
function u2() {
  const o = a;
  if (mr) return it;
  mr = 1;
  var x = W0(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, r = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, s = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, i = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, d = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, l = /^(?:\/(?:[^~/]|~0|~1)*)*$/, f = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, b = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  it = h;
  function h(D) {
    const j = K;
    return D = D == "full" ? j(2344) : j(492), x[j(1196)](h[D]);
  }
  h[o(492)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: F, uuid: d, "json-pointer": l, "json-pointer-uri-fragment": f, "relative-json-pointer": b }, h[o(2344)] = { date: v, time: k, "date-time": q, uri: C, "uri-reference": i, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: F, uuid: d, "json-pointer": l, "json-pointer-uri-fragment": f, "relative-json-pointer": b };
  function m(D) {
    return D % 4 === 0 && (D % 100 !== 0 || D % 400 === 0);
  }
  function v(D) {
    var O = D[o(2716)](t);
    if (!O) return !1;
    var N = +O[1], R = +O[2], L = +O[3];
    return R >= 1 && R <= 12 && L >= 1 && L <= (R == 2 && m(N) ? 29 : r[R]);
  }
  function k(D, j) {
    var O = D.match(e);
    if (!O) return !1;
    var N = O[1], R = O[2], L = O[3], $ = O[5];
    return (N <= 23 && R <= 59 && L <= 59 || N == 23 && R == 59 && L == 60) && (!j || $);
  }
  var E = /t|\s/i;
  function q(D) {
    const j = o;
    var O = D[j(585)](E);
    return O[j(1332)] == 2 && v(O[0]) && k(O[1], !0);
  }
  var T = /\/|:/;
  function C(D) {
    return T[o(1055)](D) && n.test(D);
  }
  var P = /[^\\]\\Z/;
  function F(D) {
    if (P[o(1055)](D)) return !1;
    try {
      return new RegExp(D), !0;
    } catch {
      return !1;
    }
  }
  return it;
}
var ct, br;
function d2() {
  return br || (br = 1, ct = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x[e(1356)], c = x.schema[t], u = x.errSchemaPath + "/" + t, d = !x[e(2167)][e(1842)], l = e(2887) + (i || ""), f = e(295) + n, b, h;
    if (c == "#" || c == "#/") x[e(2718)] ? (b = x[e(418)], h = e(1348)) : (b = x[e(1988)][e(224)][e(2532)] === !0, h = e(2037));
    else {
      var m = x[e(1821)](x.baseId, c, x.isRoot);
      if (m === void 0) {
        var v = x[e(673)][e(615)](x[e(2456)], c);
        if (x[e(2167)][e(1485)] == "fail") {
          x.logger[e(2265)](v);
          var k = k || [];
          k.push(s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + e(316) + e(1016) + x[e(2247)] + e(192) + x.util[e(1250)](u) + " , params: { ref: '" + x[e(910)][e(2805)](c) + "' } ", x[e(2167)][e(389)] !== !1 && (s += e(161) + x[e(910)][e(2805)](c) + "' "), x[e(2167)][e(2200)] && (s += " , schema: " + x.util[e(1250)](c) + e(2799) + x[e(442)] + e(1798) + l + " "), s += " } ") : s += " {} ";
          var E = s;
          s = k[e(469)](), !x.compositeRule && d ? x.async ? s += e(1323) + E + e(1278) : s += e(553) + E + e(2357) : s += e(2804) + E + e(1109), d && (s += e(2582));
        } else if (x.opts[e(1485)] == "ignore") x[e(665)][e(196)](v), d && (s += " if (true) { ");
        else throw new x.MissingRefError(x[e(2456)], c, v);
      } else if (m[e(2730)]) {
        var q = x[e(910)].copy(x);
        q[e(2454)]++;
        var T = e(295) + q.level;
        q.schema = m[e(224)], q.schemaPath = "", q.errSchemaPath = c;
        var C = x.validate(q)[e(784)](/validate\.schema/g, m[e(586)]);
        s += " " + C + " ", d && (s += e(537) + T + e(1432));
      } else b = m.$async === !0 || x[e(418)] && m[e(2532)] !== !1, h = m[e(586)];
    }
    if (h) {
      var k = k || [];
      k[e(902)](s), s = "", x[e(2167)][e(2110)] ? s += " " + h + e(1564) : s += " " + h + "( ", s += " " + l + e(1385), x[e(2247)] != '""' && (s += e(2721) + x[e(2247)]);
      var P = i ? "data" + (i - 1 || "") : e(1391), F = i ? x[e(2392)][i] : e(1263);
      s += e(1983) + P + e(1983) + F + e(540);
      var D = s;
      if (s = k[e(469)](), b) {
        if (!x[e(418)]) throw new Error(e(1940));
        d && (s += e(551) + f + "; "), s += e(520) + D + "; ", d && (s += " " + f + e(409)), s += e(1061), d && (s += " " + f + e(895)), s += e(1134), d && (s += e(537) + f + e(1432));
      } else s += " if (!" + D + e(2495) + h + ".errors; else vErrors = vErrors.concat(" + h + ".errors); errors = vErrors.length; } ", d && (s += e(2138));
    }
    return s;
  }), ct;
}
var ut, gr;
function l2() {
  return gr || (gr = 1, ut = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(224)][t], i = x[e(442)] + x[e(910)].getProperty(t), c = x.errSchemaPath + "/" + t, u = !x[e(2167)].allErrors, d = x.util[e(1196)](x), l = "";
    d[e(2454)]++;
    var f = e(295) + d.level, b = d[e(2456)], h = !0, m = n;
    if (m)
      for (var v, k = -1, E = m.length - 1; k < E; )
        v = m[k += 1], (x[e(2167)][e(2347)] ? typeof v == e(2844) && Object[e(1806)](v)[e(1332)] > 0 || v === !1 : x[e(910)][e(2124)](v, x.RULES[e(1288)])) && (h = !1, d[e(224)] = v, d.schemaPath = i + "[" + k + "]", d[e(1056)] = c + "/" + k, s += "  " + x[e(1348)](d) + " ", d[e(2456)] = b, u && (s += e(537) + f + e(1432), l += "}"));
    return u && (h ? s += e(495) : s += " " + l.slice(0, -1) + " "), s;
  }), ut;
}
var dt, yr;
function f2() {
  return yr || (yr = 1, dt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(1356)], c = x.schema[t], u = x[e(442)] + x[e(910)][e(1295)](t), d = x[e(1056)] + "/" + t, l = !x.opts[e(1842)], f = e(2887) + (i || ""), b = "valid" + n, h = "errs__" + n, m = x[e(910)][e(1196)](x), v = "";
    m.level++;
    var k = e(295) + m[e(2454)], E = c[e(1889)](function(j) {
      const O = e;
      return x[O(2167)].strictKeywords ? typeof j == O(2844) && Object[O(1806)](j)[O(1332)] > 0 || j === !1 : x[O(910)][O(2124)](j, x.RULES[O(1288)]);
    });
    if (E) {
      var q = m[e(2456)];
      s += " var " + h + e(587) + b + e(2193);
      var T = x[e(2807)];
      x[e(2807)] = m[e(2807)] = !0;
      var C = c;
      if (C)
        for (var P, F = -1, D = C[e(1332)] - 1; F < D; )
          P = C[F += 1], m[e(224)] = P, m[e(442)] = u + "[" + F + "]", m[e(1056)] = d + "/" + F, s += "  " + x[e(1348)](m) + " ", m.baseId = q, s += " " + b + e(2821) + b + e(2320) + k + e(2715) + b + ") { ", v += "}";
      x.compositeRule = m.compositeRule = T, s += " " + v + e(2825) + b + e(2763), x[e(1560)] !== !1 ? (s += " { keyword: '" + e(1723) + e(1016) + x[e(2247)] + " , schemaPath: " + x[e(910)][e(1250)](d) + e(2673), x[e(2167)][e(389)] !== !1 && (s += e(950)), x[e(2167)][e(2200)] && (s += e(624) + u + e(2799) + x.schemaPath + e(1798) + f + " "), s += " } ") : s += " {} ", s += e(1109), !x[e(2807)] && l && (x[e(418)] ? s += e(1726) : s += e(900)), s += e(614) + h + e(734) + h + e(888) + h + "; else vErrors = null; } ", x[e(2167)][e(1842)] && (s += e(1134));
    } else l && (s += " if (true) { ");
    return s;
  }), dt;
}
var lt, vr;
function h2() {
  return vr || (vr = 1, lt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.schema[t], i = x[e(1056)] + "/" + t;
    x.opts[e(1842)];
    var c = x[e(910)][e(1250)](n);
    return x[e(2167)][e(1514)] === !0 ? s += " console.log(" + c + ");" : typeof x[e(2167)][e(1514)] == e(1235) && (s += e(928) + c + ", " + x[e(910)][e(1250)](i) + e(1524)), s;
  }), lt;
}
var ft, wr;
function p2() {
  return wr || (wr = 1, ft = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x.dataLevel, c = x[e(224)][t], u = x[e(442)] + x[e(910)].getProperty(t), d = x[e(1056)] + "/" + t, l = !x[e(2167)].allErrors, f = "data" + (i || ""), b = e(295) + n, h = x[e(2167)][e(218)] && c && c[e(218)];
    h && (s += e(992) + n + e(2821) + x.util[e(1207)](c[e(218)], i, x[e(2392)]) + "; "), !h && (s += e(992) + n + e(2113) + u + ";"), s += e(2337) + b + e(1836) + f + e(1555) + n + e(2374) + b + e(1457);
    var m = m || [];
    m[e(902)](s), s = "", x[e(1560)] !== !1 ? (s += " { keyword: 'const" + e(1016) + x[e(2247)] + e(192) + x[e(910)][e(1250)](d) + e(464) + n + e(1134), x.opts[e(389)] !== !1 && (s += e(2826)), x[e(2167)][e(2200)] && (s += e(624) + u + " , parentSchema: validate.schema" + x[e(442)] + " , data: " + f + " "), s += " } ") : s += e(1136);
    var v = s;
    return s = m[e(469)](), !x[e(2807)] && l ? x[e(418)] ? s += " throw new ValidationError([" + v + e(1278) : s += e(553) + v + e(2357) : s += e(2804) + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " }", l && (s += " else { "), s;
  }), ft;
}
var ht, Sr;
function m2() {
  return Sr || (Sr = 1, ht = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(1356)], c = x[e(224)][t], u = x[e(442)] + x[e(910)].getProperty(t), d = x.errSchemaPath + "/" + t, l = !x.opts.allErrors, f = e(2887) + (i || ""), b = e(295) + n, h = e(1721) + n, m = x[e(910)][e(1196)](x), v = "";
    m[e(2454)]++;
    var k = e(295) + m[e(2454)], E = "i" + n, q = m[e(1356)] = x[e(1356)] + 1, T = e(2887) + q, C = x[e(2456)], P = x[e(2167)].strictKeywords ? typeof c == e(2844) && Object[e(1806)](c)[e(1332)] > 0 || c === !1 : x[e(910)][e(2124)](c, x.RULES[e(1288)]);
    if (s += e(2337) + h + e(2872) + b + ";", P) {
      var F = x.compositeRule;
      x.compositeRule = m.compositeRule = !0, m[e(224)] = c, m[e(442)] = u, m.errSchemaPath = d, s += e(551) + k + e(1556) + E + " = 0; " + E + " < " + f + e(1859) + E + e(899), m[e(2247)] = x[e(910)][e(1519)](x.errorPath, E, x[e(2167)].jsonPointers, !0);
      var D = f + "[" + E + "]";
      m.dataPathArr[q] = E;
      var j = x[e(1348)](m);
      m[e(2456)] = C, x[e(910)].varOccurences(j, T) < 2 ? s += " " + x.util[e(2770)](j, T, D) + " " : s += e(551) + T + e(2821) + D + "; " + j + " ", s += e(537) + k + e(2426), x.compositeRule = m[e(2807)] = F, s += " " + v + e(2825) + k + e(1010);
    } else s += e(537) + f + ".length == 0) {";
    var O = O || [];
    O.push(s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + e(2476) + e(1016) + x[e(2247)] + e(192) + x[e(910)][e(1250)](d) + e(2673), x.opts[e(389)] !== !1 && (s += e(2615)), x[e(2167)][e(2200)] && (s += e(624) + u + e(2799) + x[e(442)] + " , data: " + f + " "), s += e(1134)) : s += e(1136);
    var N = s;
    return s = O[e(469)](), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + N + e(1278) : s += e(553) + N + e(2357) : s += " var err = " + N + e(1109), s += e(2643), P && (s += e(403) + h + "; if (vErrors !== null) { if (" + h + e(888) + h + e(1585)), x[e(2167)].allErrors && (s += " } "), s;
  }), ht;
}
var pt, kr;
function b2() {
  return kr || (kr = 1, pt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x[e(1356)], c = x[e(224)][t], u = x[e(442)] + x.util[e(1295)](t), d = x.errSchemaPath + "/" + t, l = !x[e(2167)][e(1842)], f = e(2887) + (i || ""), b = e(1721) + n, h = x[e(910)][e(1196)](x), m = "";
    h[e(2454)]++;
    var v = e(295) + h[e(2454)], k = {}, E = {}, q = x[e(2167)][e(1789)];
    for (F in c)
      if (F != e(2527)) {
        var T = c[F], C = Array[e(977)](T) ? E : k;
        C[F] = T;
      }
    s += e(2337) + b + e(1006);
    var P = x[e(2247)];
    s += "var missing" + n + ";";
    for (var F in E)
      if (C = E[F], C[e(1332)]) {
        if (s += " if ( " + f + x[e(910)][e(1295)](F) + e(431), q && (s += e(779) + f + ", '" + x[e(910)][e(2805)](F) + e(2148)), l) {
          s += e(289);
          var D = C;
          if (D)
            for (var j, O = -1, N = D.length - 1; O < N; ) {
              j = D[O += 1], O && (s += " || ");
              var R = x[e(910)][e(1295)](j), L = f + R;
              s += e(2790) + L + e(675), q && (s += e(814) + f + e(635) + x[e(910)][e(2805)](j) + e(2148)), s += e(1396) + n + e(2821) + x[e(910)].toQuotedString(x[e(2167)].jsonPointers ? j : R) + ") ) ";
            }
          s += e(2561);
          var $ = e(1052) + n, z = e(825) + $ + e(1138);
          x[e(2167)][e(2803)] && (x[e(2247)] = x[e(2167)][e(839)] ? x[e(910)][e(1519)](P, $, !0) : P + e(2721) + $);
          var G = G || [];
          G[e(902)](s), s = "", x.createErrors !== !1 ? (s += e(2151) + "dependencies" + e(1016) + x[e(2247)] + " , schemaPath: " + x[e(910)].toQuotedString(d) + " , params: { property: '" + x.util[e(2805)](F) + "', missingProperty: '" + z + e(2165) + C[e(1332)] + e(2793) + x.util.escapeQuotes(C.length == 1 ? C[0] : C.join(", ")) + "' } ", x[e(2167)][e(389)] !== !1 && (s += " , message: 'should have ", C.length == 1 ? s += e(1704) + x.util[e(2805)](C[0]) : s += e(1658) + x[e(910)].escapeQuotes(C[e(2252)](", ")), s += " when property " + x[e(910)][e(2805)](F) + e(966)), x[e(2167)][e(2200)] && (s += e(624) + u + e(2799) + x.schemaPath + e(1798) + f + " "), s += e(1134)) : s += e(1136);
          var ce = s;
          s = G[e(469)](), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + ce + e(1278) : s += e(553) + ce + e(2357) : s += e(2804) + ce + e(1109);
        } else {
          s += e(2845);
          var ue = C;
          if (ue)
            for (var j, fe = -1, oe = ue[e(1332)] - 1; fe < oe; ) {
              j = ue[fe += 1];
              var R = x.util[e(1295)](j), z = x[e(910)][e(2805)](j), L = f + R;
              x.opts._errorDataPathProperty && (x[e(2247)] = x[e(910)].getPath(P, j, x[e(2167)][e(839)])), s += e(173) + L + e(675), q && (s += e(814) + f + ", '" + x[e(910)][e(2805)](j) + e(2148)), s += e(2588), x.createErrors !== !1 ? (s += e(2151) + "dependencies" + e(1016) + x.errorPath + e(192) + x.util.toQuotedString(d) + e(529) + x[e(910)][e(2805)](F) + e(2530) + z + e(2165) + C[e(1332)] + e(2793) + x[e(910)][e(2805)](C[e(1332)] == 1 ? C[0] : C[e(2252)](", ")) + e(2482), x.opts[e(389)] !== !1 && (s += e(905), C[e(1332)] == 1 ? s += e(1704) + x[e(910)][e(2805)](C[0]) : s += e(1658) + x[e(910)][e(2805)](C[e(2252)](", ")), s += e(555) + x[e(910)][e(2805)](F) + e(966)), x.opts[e(2200)] && (s += e(624) + u + e(2799) + x[e(442)] + " , data: " + f + " "), s += " } ") : s += e(1136), s += e(2350);
            }
        }
        s += " }   ", l && (m += "}", s += e(2138));
      }
    x.errorPath = P;
    var le = h[e(2456)];
    for (var F in k) {
      var T = k[F];
      (x[e(2167)][e(2347)] ? typeof T == "object" && Object.keys(T)[e(1332)] > 0 || T === !1 : x.util[e(2124)](T, x.RULES[e(1288)])) && (s += " " + v + e(2076) + f + x[e(910)].getProperty(F) + e(431), q && (s += e(779) + f + ", '" + x[e(910)][e(2805)](F) + e(2148)), s += e(1432), h.schema = T, h[e(442)] = u + x[e(910)].getProperty(F), h.errSchemaPath = d + "/" + x[e(910)][e(2324)](F), s += "  " + x[e(1348)](h) + " ", h[e(2456)] = le, s += " }  ", l && (s += e(537) + v + e(1432), m += "}"));
    }
    return l && (s += e(2864) + m + e(537) + b + e(1023)), s;
  }), pt;
}
var mt, Pr;
function g2() {
  return Pr || (Pr = 1, mt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x.dataLevel, c = x.schema[t], u = x[e(442)] + x.util[e(1295)](t), d = x[e(1056)] + "/" + t, l = !x[e(2167)][e(1842)], f = e(2887) + (i || ""), b = "valid" + n, h = x[e(2167)][e(218)] && c && c[e(218)];
    h && (s += e(992) + n + e(2821) + x.util[e(1207)](c.$data, i, x.dataPathArr) + "; ");
    var m = "i" + n, v = e(224) + n;
    !h && (s += e(551) + v + " = validate.schema" + u + ";"), s += e(2337) + b + ";", h && (s += e(2047) + n + e(481) + b + e(1257) + n + e(1276) + b + e(2009)), s += "" + b + e(2191) + m + e(1169) + m + "<" + v + e(1859) + m + e(2081) + f + ", " + v + "[" + m + e(672) + b + e(2474), h && (s += e(2866)), s += e(2825) + b + ") {   ";
    var k = k || [];
    k[e(902)](s), s = "", x.createErrors !== !1 ? (s += e(2151) + e(2583) + e(1016) + x[e(2247)] + e(192) + x[e(910)][e(1250)](d) + e(1430) + n + e(1134), x[e(2167)][e(389)] !== !1 && (s += e(1831)), x[e(2167)][e(2200)] && (s += e(624) + u + " , parentSchema: validate.schema" + x.schemaPath + " , data: " + f + " "), s += e(1134)) : s += e(1136);
    var E = s;
    return s = k[e(469)](), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + E + e(1278) : s += e(553) + E + e(2357) : s += e(2804) + E + e(1109), s += " }", l && (s += e(2138)), s;
  }), mt;
}
var bt, Er;
function y2() {
  return Er || (Er = 1, bt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(1356)], c = x[e(224)][t], u = x[e(442)] + x[e(910)][e(1295)](t), d = x[e(1056)] + "/" + t, l = !x[e(2167)][e(1842)], f = e(2887) + (i || "");
    if (x[e(2167)][e(2039)] === !1) return l && (s += e(495)), s;
    var b = x[e(2167)][e(218)] && c && c.$data, h;
    b ? (s += e(992) + n + " = " + x[e(910)][e(1207)](c[e(218)], i, x[e(2392)]) + "; ", h = e(224) + n) : h = c;
    var m = x[e(2167)][e(1030)], v = Array[e(977)](m);
    if (b) {
      var k = "format" + n, E = e(2472) + n, q = e(1419) + n;
      s += " var " + k + e(2115) + h + e(1971) + E + " = typeof " + k + e(970) + k + e(868) + k + e(186) + q + e(2821) + E + e(2446) + k + e(1335) + E + e(1432), x[e(418)] && (s += e(1426) + n + e(2821) + k + e(1803)), s += " " + k + e(2821) + k + ".validate; } if (  ", b && (s += " (" + h + e(232) + h + e(2231)), s += " (", m != e(1924) && (s += " (" + h + e(2206) + k + " ", v && (s += e(1366) + h + e(2099)), s += e(1709)), s += " (" + k + e(2446) + q + e(2315) + r + "' && !(typeof " + k + e(426), x[e(418)] ? s += e(1305) + n + e(1533) + k + "(" + f + e(1920) + k + "(" + f + e(1276) : s += " " + k + "(" + f + ") ", s += e(2242) + k + ".test(" + f + "))))) {";
    } else {
      var k = x.formats[c];
      if (!k) {
        if (m == e(1924)) return x[e(665)][e(196)](e(2644) + c + '" ignored in schema at path "' + x.errSchemaPath + '"'), l && (s += e(495)), s;
        if (v && m[e(1104)](c) >= 0) return l && (s += " if (true) { "), s;
        throw new Error(e(2644) + c + e(2267) + x[e(1056)] + '"');
      }
      var E = typeof k == e(2844) && !(k instanceof RegExp) && k[e(1348)], q = E && k[e(190)] || e(1653);
      if (E) {
        var T = k[e(418)] === !0;
        k = k[e(1348)];
      }
      if (q != r) return l && (s += " if (true) { "), s;
      if (T) {
        if (!x[e(418)]) throw new Error(e(1992));
        var C = e(2726) + x[e(910)][e(1295)](c) + e(262);
        s += e(2765) + C + "(" + f + e(897);
      } else {
        s += e(2713);
        var C = e(2726) + x[e(910)][e(1295)](c);
        E && (C += ".validate"), typeof k == "function" ? s += " " + C + "(" + f + ") " : s += " " + C + e(569) + f + ") ", s += e(1432);
      }
    }
    var P = P || [];
    P[e(902)](s), s = "", x.createErrors !== !1 ? (s += e(2151) + e(2039) + e(1016) + x[e(2247)] + e(192) + x[e(910)][e(1250)](d) + " , params: { format:  ", b ? s += "" + h : s += "" + x[e(910)].toQuotedString(c), s += "  } ", x.opts[e(389)] !== !1 && (s += ` , message: 'should match format "`, b ? s += e(825) + h + e(1138) : s += "" + x[e(910)][e(2805)](c), s += e(2027)), x[e(2167)][e(2200)] && (s += e(1800), b ? s += e(2197) + u : s += "" + x[e(910)][e(1250)](c), s += e(2859) + x[e(442)] + e(1798) + f + " "), s += e(1134)) : s += e(1136);
    var F = s;
    return s = P[e(469)](), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + F + e(1278) : s += " validate.errors = [" + F + e(2357) : s += " var err = " + F + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } ", l && (s += e(2138)), s;
  }), bt;
}
var gt, Ir;
function K(o, x) {
  return o = o - 157, qx()[o];
}
function v2() {
  return Ir || (Ir = 1, gt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x.dataLevel, c = x.schema[t], u = x[e(442)] + x.util.getProperty(t), d = x.errSchemaPath + "/" + t, l = !x[e(2167)][e(1842)], f = "data" + (i || ""), b = e(295) + n, h = e(1721) + n, m = x[e(910)].copy(x);
    m[e(2454)]++;
    var v = e(295) + m.level, k = x.schema[e(723)], E = x[e(224)][e(2299)], q = k !== void 0 && (x[e(2167)].strictKeywords ? typeof k == e(2844) && Object[e(1806)](k)[e(1332)] > 0 || k === !1 : x[e(910)][e(2124)](k, x[e(2363)][e(1288)])), T = E !== void 0 && (x[e(2167)][e(2347)] ? typeof E == e(2844) && Object[e(1806)](E)[e(1332)] > 0 || E === !1 : x.util.schemaHasRules(E, x[e(2363)][e(1288)])), C = m[e(2456)];
    if (q || T) {
      var P;
      m[e(1560)] = !1, m.schema = c, m[e(442)] = u, m[e(1056)] = d, s += " var " + h + e(587) + b + e(2292);
      var F = x[e(2807)];
      x[e(2807)] = m[e(2807)] = !0, s += "  " + x.validate(m) + " ", m.baseId = C, m[e(1560)] = !0, s += e(403) + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; }  ", x[e(2807)] = m[e(2807)] = F, q ? (s += " if (" + v + ") {  ", m[e(224)] = x.schema[e(723)], m[e(442)] = x.schemaPath + e(1537), m[e(1056)] = x.errSchemaPath + "/then", s += "  " + x.validate(m) + " ", m[e(2456)] = C, s += " " + b + " = " + v + "; ", q && T ? (P = e(1460) + n, s += e(551) + P + " = 'then'; ") : P = "'then'", s += " } ", T && (s += e(2138))) : s += e(2825) + v + e(1432), T && (m[e(224)] = x[e(224)][e(2299)], m[e(442)] = x[e(442)] + e(1350), m.errSchemaPath = x[e(1056)] + "/else", s += "  " + x.validate(m) + " ", m[e(2456)] = C, s += " " + b + e(2821) + v + "; ", q && T ? (P = "ifClause" + n, s += e(551) + P + e(2709)) : P = e(1142), s += e(1134)), s += e(2825) + b + e(2763), x[e(1560)] !== !1 ? (s += e(2151) + "if" + e(1016) + x[e(2247)] + e(192) + x[e(910)][e(1250)](d) + e(1896) + P + e(1134), x[e(2167)].messages !== !1 && (s += e(1977) + P + ` + '" schema' `), x[e(2167)][e(2200)] && (s += " , schema: validate.schema" + u + e(2799) + x[e(442)] + e(1798) + f + " "), s += e(1134)) : s += e(1136), s += e(1109), !x[e(2807)] && l && (x[e(418)] ? s += e(1726) : s += " validate.errors = vErrors; return false; "), s += e(2840), l && (s += e(2138));
    } else l && (s += e(495));
    return s;
  }), gt;
}
var yt, Cr;
function w2() {
  return Cr || (Cr = 1, yt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(1356)], c = x[e(224)][t], u = x.schemaPath + x[e(910)].getProperty(t), d = x.errSchemaPath + "/" + t, l = !x.opts.allErrors, f = e(2887) + (i || ""), b = "valid" + n, h = e(1721) + n, m = x[e(910)][e(1196)](x), v = "";
    m.level++;
    var k = "valid" + m[e(2454)], E = "i" + n, q = m[e(1356)] = x[e(1356)] + 1, T = e(2887) + q, C = x[e(2456)];
    if (s += e(2337) + h + " = errors;var " + b + ";", Array[e(977)](c)) {
      var P = x[e(224)][e(1283)];
      if (P === !1) {
        s += " " + b + " = " + f + e(428) + c[e(1332)] + "; ";
        var F = d;
        d = x[e(1056)] + e(1059), s += "  if (!" + b + ") {   ";
        var D = D || [];
        D.push(s), s = "", x.createErrors !== !1 ? (s += e(2151) + e(1283) + e(1016) + x[e(2247)] + e(192) + x[e(910)].toQuotedString(d) + e(1970) + c[e(1332)] + e(1134), x.opts[e(389)] !== !1 && (s += e(2358) + c[e(1332)] + e(1773)), x[e(2167)].verbose && (s += e(1130) + x[e(442)] + e(1798) + f + " "), s += e(1134)) : s += " {} ";
        var j = s;
        s = D[e(469)](), !x[e(2807)] && l ? x[e(418)] ? s += " throw new ValidationError([" + j + e(1278) : s += e(553) + j + e(2357) : s += " var err = " + j + e(1109), s += e(1134), d = F, l && (v += "}", s += e(2138));
      }
      var O = c;
      if (O) {
        for (var N, R = -1, L = O[e(1332)] - 1; R < L; )
          if (N = O[R += 1], x[e(2167)][e(2347)] ? typeof N == e(2844) && Object[e(1806)](N)[e(1332)] > 0 || N === !1 : x[e(910)][e(2124)](N, x[e(2363)][e(1288)])) {
            s += " " + k + e(2747) + f + e(2757) + R + ") { ";
            var $ = f + "[" + R + "]";
            m.schema = N, m[e(442)] = u + "[" + R + "]", m[e(1056)] = d + "/" + R, m[e(2247)] = x[e(910)][e(1519)](x[e(2247)], R, x.opts[e(839)], !0), m[e(2392)][q] = R;
            var z = x[e(1348)](m);
            m[e(2456)] = C, x[e(910)][e(2087)](z, T) < 2 ? s += " " + x[e(910)][e(2770)](z, T, $) + " " : s += e(551) + T + e(2821) + $ + "; " + z + " ", s += " }  ", l && (s += e(537) + k + ") { ", v += "}");
          }
      }
      if (typeof P == e(2844) && (x.opts.strictKeywords ? typeof P == e(2844) && Object[e(1806)](P)[e(1332)] > 0 || P === !1 : x[e(910)][e(2124)](P, x.RULES[e(1288)]))) {
        m[e(224)] = P, m[e(442)] = x.schemaPath + e(1208), m[e(1056)] = x[e(1056)] + "/additionalItems", s += " " + k + e(2747) + f + e(2757) + c[e(1332)] + e(1231) + E + e(2821) + c[e(1332)] + "; " + E + e(2641) + f + e(1859) + E + "++) { ", m[e(2247)] = x[e(910)][e(1519)](x[e(2247)], E, x[e(2167)].jsonPointers, !0);
        var $ = f + "[" + E + "]";
        m[e(2392)][q] = E;
        var z = x[e(1348)](m);
        m[e(2456)] = C, x[e(910)].varOccurences(z, T) < 2 ? s += " " + x[e(910)][e(2770)](z, T, $) + " " : s += " var " + T + " = " + $ + "; " + z + " ", l && (s += e(2825) + k + e(1239)), s += e(987), l && (s += " if (" + k + e(1432), v += "}");
      }
    } else if (x[e(2167)][e(2347)] ? typeof c == e(2844) && Object[e(1806)](c).length > 0 || c === !1 : x[e(910)][e(2124)](c, x[e(2363)][e(1288)])) {
      m[e(224)] = c, m[e(442)] = u, m[e(1056)] = d, s += e(1571) + E + e(2821) + 0 + "; " + E + e(2641) + f + e(1859) + E + e(899), m[e(2247)] = x[e(910)][e(1519)](x.errorPath, E, x[e(2167)].jsonPointers, !0);
      var $ = f + "[" + E + "]";
      m[e(2392)][q] = E;
      var z = x[e(1348)](m);
      m.baseId = C, x.util.varOccurences(z, T) < 2 ? s += " " + x[e(910)][e(2770)](z, T, $) + " " : s += " var " + T + e(2821) + $ + "; " + z + " ", l && (s += e(2825) + k + e(1239)), s += " }";
    }
    return l && (s += " " + v + " if (" + h + e(1023)), s;
  }), yt;
}
var vt, Rr;
function Fr() {
  return Rr || (Rr = 1, vt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x[e(1356)], c = x[e(224)][t], u = x[e(442)] + x[e(910)][e(1295)](t), d = x.errSchemaPath + "/" + t, l = !x.opts[e(1842)], C, f = "data" + (i || ""), b = x[e(2167)][e(218)] && c && c[e(218)], h;
    b ? (s += e(992) + n + e(2821) + x[e(910)].getData(c[e(218)], i, x[e(2392)]) + "; ", h = "schema" + n) : h = c;
    var m = t == e(248), v = e(m ? 2005 : 1608), k = x[e(224)][v], E = x[e(2167)].$data && k && k[e(218)], q = m ? "<" : ">", T = m ? ">" : "<", C = void 0;
    if (!(b || typeof c == e(1206) || c === void 0)) throw new Error(t + e(936));
    if (!(E || k === void 0 || typeof k == e(1206) || typeof k == "boolean")) throw new Error(v + " must be number or boolean");
    if (E) {
      var P = x[e(910)].getData(k[e(218)], i, x[e(2392)]), F = e(421) + n, D = e(954) + n, j = e(2667) + n, O = "op" + n, N = "' + " + O + e(1138);
      s += " var schemaExcl" + n + e(2821) + P + "; ", P = e(2601) + n, s += e(551) + F + e(2437) + D + e(398) + P + e(1676) + D + e(1123) + D + e(1280) + D + e(1202);
      var C = v, R = R || [];
      R.push(s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + (C || "_exclusiveLimit") + e(1016) + x[e(2247)] + " , schemaPath: " + x[e(910)][e(1250)](d) + e(2673), x[e(2167)][e(389)] !== !1 && (s += " , message: '" + v + e(633)), x[e(2167)][e(2200)] && (s += e(624) + u + e(2799) + x[e(442)] + " , data: " + f + " "), s += e(1134)) : s += e(1136);
      var L = s;
      s = R[e(469)](), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + L + e(1278) : s += e(553) + L + e(2357) : s += " var err = " + L + e(1109), s += e(1746), b && (s += " (" + h + e(232) + h + e(752)), s += " " + D + e(1448) + F + e(2821) + h + e(243) + P + " " + q + "= " + h + e(1034) + f + " " + T + "= " + P + e(2242) + f + " " + T + " " + h + " ) : ( (" + F + e(2821) + P + e(1273) + f + " " + T + "= " + h + " : " + f + " " + T + " " + h + e(2780) + f + " !== " + f + e(286) + n + " = " + F + e(465) + q + e(2524) + q + e(1557), c === void 0 && (C = v, d = x[e(1056)] + "/" + v, h = P, b = E);
    } else {
      var j = typeof k == e(1206), N = q;
      if (j && b) {
        var O = "'" + N + "'";
        s += e(173), b && (s += " (" + h + " !== undefined && typeof " + h + e(752)), s += e(214) + h + e(243) + k + " " + q + "= " + h + e(1042) + f + " " + T + "= " + k + " : " + f + " " + T + " " + h + e(2780) + f + e(2755) + f + e(1432);
      } else {
        j && c === void 0 ? (F = !0, C = v, d = x.errSchemaPath + "/" + v, h = k, T += "=") : (j && (h = Math[e(m ? 1414 : 718)](k, c)), k === (j ? h : !0) ? (F = !0, C = v, d = x[e(1056)] + "/" + v, T += "=") : (F = !1, N += "="));
        var O = "'" + N + "'";
        s += e(173), b && (s += " (" + h + " !== undefined && typeof " + h + e(752)), s += " " + f + " " + T + " " + h + e(2320) + f + " !== " + f + e(1432);
      }
    }
    C = C || t;
    var R = R || [];
    R[e(902)](s), s = "", x[e(1560)] !== !1 ? (s += " { keyword: '" + (C || e(822)) + e(1016) + x.errorPath + " , schemaPath: " + x.util[e(1250)](d) + e(1801) + O + e(2542) + h + e(972) + F + e(1134), x[e(2167)][e(389)] !== !1 && (s += e(1191) + N + " ", b ? s += e(825) + h : s += "" + h + "'"), x[e(2167)][e(2200)] && (s += e(1800), b ? s += "validate.schema" + u : s += "" + c, s += e(2859) + x[e(442)] + e(1798) + f + " "), s += e(1134)) : s += e(1136);
    var L = s;
    return s = R.pop(), !x.compositeRule && l ? x[e(418)] ? s += e(1323) + L + "]); " : s += e(553) + L + e(2357) : s += " var err = " + L + e(1109), s += e(1134), l && (s += e(2138)), s;
  }), vt;
}
var wt, Nr;
function Tr() {
  return Nr || (Nr = 1, wt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x[e(1356)], c = x[e(224)][t], u = x[e(442)] + x.util[e(1295)](t), d = x[e(1056)] + "/" + t, l = !x[e(2167)][e(1842)], v, f = e(2887) + (i || ""), b = x[e(2167)].$data && c && c[e(218)], h;
    if (b ? (s += e(992) + n + e(2821) + x[e(910)][e(1207)](c[e(218)], i, x[e(2392)]) + "; ", h = "schema" + n) : h = c, !(b || typeof c == e(1206))) throw new Error(t + e(936));
    var m = t == e(2520) ? ">" : "<";
    s += e(2883), b && (s += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), s += " " + f + e(2251) + m + " " + h + e(1432);
    var v = t, k = k || [];
    k[e(902)](s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + (v || e(925)) + e(1016) + x[e(2247)] + e(192) + x[e(910)][e(1250)](d) + " , params: { limit: " + h + " } ", x.opts[e(389)] !== !1 && (s += e(326), t == e(2520) ? s += e(2528) : s += e(2860), s += e(2620), b ? s += e(825) + h + " + '" : s += "" + c, s += e(1773)), x[e(2167)].verbose && (s += e(1800), b ? s += e(2197) + u : s += "" + c, s += "         , parentSchema: validate.schema" + x[e(442)] + " , data: " + f + " "), s += e(1134)) : s += " {} ";
    var E = s;
    return s = k.pop(), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + E + e(1278) : s += e(553) + E + e(2357) : s += e(2804) + E + e(1109), s += "} ", l && (s += " else { "), s;
  }), wt;
}
var St, qr;
function Ar() {
  return qr || (qr = 1, St = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(1356)], c = x[e(224)][t], u = x[e(442)] + x[e(910)].getProperty(t), d = x[e(1056)] + "/" + t, l = !x[e(2167)][e(1842)], v, f = e(2887) + (i || ""), b = x.opts[e(218)] && c && c[e(218)], h;
    if (b ? (s += e(992) + n + " = " + x[e(910)].getData(c.$data, i, x.dataPathArr) + "; ", h = e(224) + n) : h = c, !(b || typeof c == e(1206))) throw new Error(t + " must be number");
    var m = t == e(2213) ? ">" : "<";
    s += e(2883), b && (s += " (" + h + e(232) + h + e(752)), x[e(2167)][e(2731)] === !1 ? s += " " + f + ".length " : s += e(2332) + f + ") ", s += " " + m + " " + h + e(1432);
    var v = t, k = k || [];
    k[e(902)](s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + (v || e(1604)) + "' , dataPath: (dataPath || '') + " + x[e(2247)] + e(192) + x[e(910)][e(1250)](d) + " , params: { limit: " + h + e(1134), x[e(2167)][e(389)] !== !1 && (s += e(1212), t == e(2213) ? s += e(261) : s += e(1534), s += " than ", b ? s += e(825) + h + e(1138) : s += "" + c, s += e(2702)), x[e(2167)][e(2200)] && (s += " , schema:  ", b ? s += e(2197) + u : s += "" + c, s += "         , parentSchema: validate.schema" + x.schemaPath + e(1798) + f + " "), s += e(1134)) : s += e(1136);
    var E = s;
    return s = k.pop(), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + E + e(1278) : s += e(553) + E + e(2357) : s += e(2804) + E + e(1109), s += "} ", l && (s += e(2138)), s;
  }), St;
}
var kt, _r;
function Or() {
  return _r || (_r = 1, kt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x[e(1356)], c = x[e(224)][t], u = x[e(442)] + x[e(910)][e(1295)](t), d = x.errSchemaPath + "/" + t, l = !x[e(2167)][e(1842)], v, f = e(2887) + (i || ""), b = x[e(2167)].$data && c && c[e(218)], h;
    if (b ? (s += e(992) + n + " = " + x[e(910)][e(1207)](c[e(218)], i, x[e(2392)]) + "; ", h = e(224) + n) : h = c, !(b || typeof c == e(1206))) throw new Error(t + e(936));
    var m = t == "maxProperties" ? ">" : "<";
    s += e(2883), b && (s += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), s += " Object.keys(" + f + ").length " + m + " " + h + e(1432);
    var v = t, k = k || [];
    k[e(902)](s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + (v || e(856)) + e(1016) + x[e(2247)] + e(192) + x.util[e(1250)](d) + " , params: { limit: " + h + e(1134), x[e(2167)].messages !== !1 && (s += " , message: 'should NOT have ", t == "maxProperties" ? s += e(2528) : s += e(2860), s += e(2620), b ? s += e(825) + h + e(1138) : s += "" + c, s += e(1403)), x[e(2167)][e(2200)] && (s += " , schema:  ", b ? s += e(2197) + u : s += "" + c, s += e(2859) + x[e(442)] + " , data: " + f + " "), s += " } ") : s += e(1136);
    var E = s;
    return s = k.pop(), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + E + e(1278) : s += e(553) + E + "]; return false; " : s += " var err = " + E + e(1109), s += "} ", l && (s += " else { "), s;
  }), kt;
}
var Pt, Dr;
function S2() {
  return Dr || (Dr = 1, Pt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x[e(1356)], c = x.schema[t], u = x[e(442)] + x[e(910)][e(1295)](t), d = x[e(1056)] + "/" + t, l = !x[e(2167)][e(1842)], f = "data" + (i || ""), b = x[e(2167)][e(218)] && c && c.$data, h;
    if (b ? (s += e(992) + n + e(2821) + x[e(910)][e(1207)](c[e(218)], i, x[e(2392)]) + "; ", h = e(224) + n) : h = c, !(b || typeof c == e(1206))) throw new Error(t + e(936));
    s += "var division" + n + e(1957), b && (s += " " + h + " !== undefined && ( typeof " + h + " != 'number' || "), s += e(1115) + n + e(2821) + f + e(1928) + h + ", ", x.opts.multipleOfPrecision ? s += e(1340) + n + e(2083) + n + ") > 1e-" + x[e(2167)][e(1900)] + " " : s += e(2544) + n + e(832) + n + ") ", s += " ) ", b && (s += e(433)), s += e(1197);
    var m = m || [];
    m[e(902)](s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + e(749) + e(1016) + x.errorPath + e(192) + x[e(910)][e(1250)](d) + " , params: { multipleOf: " + h + e(1134), x[e(2167)][e(389)] !== !1 && (s += e(2459), b ? s += "' + " + h : s += "" + h + "'"), x[e(2167)][e(2200)] && (s += e(1800), b ? s += e(2197) + u : s += "" + c, s += "         , parentSchema: validate.schema" + x[e(442)] + e(1798) + f + " "), s += " } ") : s += e(1136);
    var v = s;
    return s = m.pop(), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + v + "]); " : s += e(553) + v + e(2357) : s += " var err = " + v + e(1109), s += "} ", l && (s += " else { "), s;
  }), Pt;
}
var Et, jr;
function k2() {
  return jr || (jr = 1, Et = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x.dataLevel, c = x[e(224)][t], u = x[e(442)] + x.util.getProperty(t), d = x.errSchemaPath + "/" + t, l = !x.opts[e(1842)], f = e(2887) + (i || ""), b = e(1721) + n, h = x.util[e(1196)](x);
    h.level++;
    var m = e(295) + h[e(2454)];
    if (x.opts[e(2347)] ? typeof c == e(2844) && Object[e(1806)](c)[e(1332)] > 0 || c === !1 : x.util[e(2124)](c, x[e(2363)][e(1288)])) {
      h[e(224)] = c, h[e(442)] = u, h.errSchemaPath = d, s += e(551) + b + e(366);
      var v = x[e(2807)];
      x[e(2807)] = h.compositeRule = !0, h[e(1560)] = !1;
      var k;
      h[e(2167)][e(1842)] && (k = h.opts[e(1842)], h[e(2167)].allErrors = !1), s += " " + x[e(1348)](h) + " ", h[e(1560)] = !0, k && (h[e(2167)][e(1842)] = k), x[e(2807)] = h[e(2807)] = v, s += " if (" + m + e(1457);
      var E = E || [];
      E[e(902)](s), s = "", x[e(1560)] !== !1 ? (s += " { keyword: '" + e(2158) + e(1016) + x[e(2247)] + " , schemaPath: " + x[e(910)][e(1250)](d) + e(2673), x[e(2167)][e(389)] !== !1 && (s += e(1112)), x.opts.verbose && (s += " , schema: validate.schema" + u + e(2799) + x.schemaPath + e(1798) + f + " "), s += e(1134)) : s += e(1136);
      var q = s;
      s = E[e(469)](), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + q + e(1278) : s += " validate.errors = [" + q + e(2357) : s += e(2804) + q + e(1109), s += e(614) + b + e(734) + b + e(888) + b + e(1585), x[e(2167)][e(1842)] && (s += e(1134));
    } else s += e(875), x[e(1560)] !== !1 ? (s += e(2151) + e(2158) + e(1016) + x[e(2247)] + e(192) + x[e(910)].toQuotedString(d) + e(2673), x[e(2167)][e(389)] !== !1 && (s += " , message: 'should NOT be valid' "), x[e(2167)][e(2200)] && (s += " , schema: validate.schema" + u + e(2799) + x[e(442)] + e(1798) + f + " "), s += e(1134)) : s += e(1136), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", l && (s += e(2582));
    return s;
  }), Et;
}
var It, Mr;
function P2() {
  return Mr || (Mr = 1, It = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x[e(1356)], c = x.schema[t], u = x[e(442)] + x[e(910)][e(1295)](t), d = x[e(1056)] + "/" + t, l = !x.opts[e(1842)], f = e(2887) + (i || ""), b = e(295) + n, h = e(1721) + n, m = x.util.copy(x), v = "";
    m.level++;
    var k = e(295) + m.level, E = m[e(2456)], q = e(2384) + n, T = "passingSchemas" + n;
    s += e(2337) + h + " = errors , " + q + " = false , " + b + e(1048) + T + e(1171);
    var C = x.compositeRule;
    x[e(2807)] = m.compositeRule = !0;
    var P = c;
    if (P)
      for (var F, D = -1, j = P[e(1332)] - 1; D < j; )
        F = P[D += 1], (x[e(2167)][e(2347)] ? typeof F == e(2844) && Object[e(1806)](F)[e(1332)] > 0 || F === !1 : x[e(910)].schemaHasRules(F, x[e(2363)][e(1288)])) ? (m.schema = F, m[e(442)] = u + "[" + D + "]", m[e(1056)] = d + "/" + D, s += "  " + x[e(1348)](m) + " ", m[e(2456)] = E) : s += e(551) + k + e(409), D && (s += e(537) + k + " && " + q + e(1432) + b + e(895) + T + e(2723) + T + ", " + D + e(392), v += "}"), s += e(537) + k + e(1432) + b + e(2821) + q + " = true; " + T + e(2821) + D + "; }";
    return x.compositeRule = m.compositeRule = C, s += "" + v + e(1268) + b + e(2763), x.createErrors !== !1 ? (s += e(2151) + "oneOf" + e(1016) + x[e(2247)] + e(192) + x[e(910)][e(1250)](d) + e(1717) + T + e(1134), x[e(2167)][e(389)] !== !1 && (s += e(1558)), x[e(2167)][e(2200)] && (s += e(624) + u + " , parentSchema: validate.schema" + x.schemaPath + e(1798) + f + " "), s += e(1134)) : s += e(1136), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(2807)] && l && (x[e(418)] ? s += e(1726) : s += " validate.errors = vErrors; return false; "), s += "} else {  errors = " + h + e(734) + h + e(888) + h + e(913), x[e(2167)][e(1842)] && (s += e(1134)), s;
  }), It;
}
var Ct, Lr;
function E2() {
  return Lr || (Lr = 1, Ct = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x.dataLevel, c = x[e(224)][t], u = x[e(442)] + x[e(910)][e(1295)](t), d = x.errSchemaPath + "/" + t, l = !x[e(2167)][e(1842)], f = e(2887) + (i || ""), b = x.opts[e(218)] && c && c.$data, h;
    b ? (s += e(992) + n + e(2821) + x.util.getData(c.$data, i, x[e(2392)]) + "; ", h = "schema" + n) : h = c;
    var m = b ? "(new RegExp(" + h + "))" : x.usePattern(c);
    s += e(2883), b && (s += " (" + h + e(232) + h + e(2231)), s += " !" + m + ".test(" + f + e(1482);
    var v = v || [];
    v[e(902)](s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + e(1777) + "' , dataPath: (dataPath || '') + " + x[e(2247)] + e(192) + x[e(910)][e(1250)](d) + e(2521), b ? s += "" + h : s += "" + x.util[e(1250)](c), s += e(2851), x[e(2167)][e(389)] !== !1 && (s += e(2327), b ? s += e(825) + h + e(1138) : s += "" + x.util[e(2805)](c), s += e(2027)), x[e(2167)][e(2200)] && (s += e(1800), b ? s += e(2197) + u : s += "" + x[e(910)][e(1250)](c), s += e(2859) + x[e(442)] + e(1798) + f + " "), s += e(1134)) : s += " {} ";
    var k = s;
    return s = v[e(469)](), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + k + e(1278) : s += e(553) + k + e(2357) : s += e(2804) + k + e(1109), s += "} ", l && (s += e(2138)), s;
  }), Ct;
}
var Rt, $r;
function I2() {
  return $r || ($r = 1, Rt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(1356)], c = x[e(224)][t], u = x[e(442)] + x[e(910)][e(1295)](t), d = x[e(1056)] + "/" + t, l = !x[e(2167)][e(1842)], f = e(2887) + (i || ""), b = "errs__" + n, h = x[e(910)][e(1196)](x), m = "";
    h[e(2454)]++;
    var v = "valid" + h[e(2454)], k = e(1175) + n, E = e(1237) + n, q = h[e(1356)] = x[e(1356)] + 1, T = e(2887) + q, C = e(2095) + n, P = Object[e(1806)](c || {})[e(1706)](fe), F = x[e(224)][e(1160)] || {}, D = Object[e(1806)](F)[e(1706)](fe), j = x[e(224)][e(2409)], O = P[e(1332)] || D[e(1332)], N = j === !1, R = typeof j == e(2844) && Object[e(1806)](j)[e(1332)], L = x[e(2167)][e(2696)], $ = N || R || L, z = x.opts[e(1789)], G = x[e(2456)], ce = x[e(224)][e(1025)];
    if (ce && !(x.opts.$data && ce[e(218)]) && ce[e(1332)] < x[e(2167)][e(472)]) var ue = x[e(910)][e(2589)](ce);
    function fe(Mx) {
      return Mx !== "__proto__";
    }
    if (s += e(2337) + b + e(2872) + v + " = true;", z && (s += e(551) + C + e(466)), $) {
      if (z ? s += " " + C + e(2821) + C + e(170) + f + e(1655) + E + e(1169) + E + "<" + C + e(1859) + E + e(2485) + k + " = " + C + "[" + E + e(2432) : s += e(678) + k + e(302) + f + ") { ", O) {
        if (s += e(557) + n + e(451), P[e(1332)])
          if (P[e(1332)] > 8) s += e(1575) + u + e(2783) + k + ") ";
          else {
            var oe = P;
            if (oe)
              for (var le, ke = -1, ye = oe[e(1332)] - 1; ke < ye; )
                le = oe[ke += 1], s += e(2320) + k + " == " + x.util[e(1250)](le) + " ";
          }
        if (D[e(1332)]) {
          var Me = D;
          if (Me)
            for (var Ee, Je = -1, _ = Me[e(1332)] - 1; Je < _; )
              Ee = Me[Je += 1], s += " || " + x[e(450)](Ee) + e(569) + k + ") ";
        }
        s += e(2126) + n + e(1432);
      }
      if (L == e(1288)) s += " delete " + f + "[" + k + e(2432);
      else {
        var A = x.errorPath, H = e(825) + k + e(1138);
        if (x[e(2167)]._errorDataPathProperty && (x.errorPath = x.util[e(1519)](x[e(2247)], k, x[e(2167)][e(839)])), N)
          if (L) s += e(1854) + f + "[" + k + e(2432);
          else {
            s += " " + v + " = false; ";
            var J = d;
            d = x.errSchemaPath + e(480);
            var Q = Q || [];
            Q.push(s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + e(2409) + "' , dataPath: (dataPath || '') + " + x[e(2247)] + e(192) + x[e(910)][e(1250)](d) + e(948) + H + e(2482), x[e(2167)][e(389)] !== !1 && (s += e(2815), x[e(2167)][e(2803)] ? s += "is an invalid additional property" : s += e(1297), s += "' "), x[e(2167)][e(2200)] && (s += e(1130) + x[e(442)] + " , data: " + f + " "), s += " } ") : s += " {} ";
            var V = s;
            s = Q[e(469)](), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + V + e(1278) : s += " validate.errors = [" + V + e(2357) : s += e(2804) + V + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = J, l && (s += " break; ");
          }
        else if (R)
          if (L == e(971)) {
            s += e(551) + b + e(366);
            var X = x[e(2807)];
            x[e(2807)] = h.compositeRule = !0, h[e(224)] = j, h[e(442)] = x.schemaPath + e(1029), h[e(1056)] = x[e(1056)] + e(480), h[e(2247)] = x[e(2167)][e(2803)] ? x.errorPath : x[e(910)][e(1519)](x[e(2247)], k, x[e(2167)][e(839)]);
            var ie = f + "[" + k + "]";
            h.dataPathArr[q] = k;
            var se = x[e(1348)](h);
            h[e(2456)] = G, x[e(910)].varOccurences(se, T) < 2 ? s += " " + x[e(910)][e(2770)](se, T, ie) + " " : s += e(551) + T + e(2821) + ie + "; " + se + " ", s += " if (!" + v + e(821) + b + e(2664) + f + "[" + k + e(198), x[e(2807)] = h.compositeRule = X;
          } else {
            h[e(224)] = j, h[e(442)] = x[e(442)] + ".additionalProperties", h[e(1056)] = x[e(1056)] + e(480), h[e(2247)] = x[e(2167)][e(2803)] ? x[e(2247)] : x[e(910)][e(1519)](x[e(2247)], k, x[e(2167)][e(839)]);
            var ie = f + "[" + k + "]";
            h[e(2392)][q] = k;
            var se = x[e(1348)](h);
            h[e(2456)] = G, x[e(910)][e(2087)](se, T) < 2 ? s += " " + x.util[e(2770)](se, T, ie) + " " : s += e(551) + T + e(2821) + ie + "; " + se + " ", l && (s += " if (!" + v + e(1239));
          }
        x[e(2247)] = A;
      }
      O && (s += e(1134)), s += e(1530), l && (s += e(537) + v + ") { ", m += "}");
    }
    var xe = x.opts[e(2030)] && !x.compositeRule;
    if (P[e(1332)]) {
      var Le = P;
      if (Le)
        for (var le, Ae = -1, He = Le[e(1332)] - 1; Ae < He; ) {
          le = Le[Ae += 1];
          var Se = c[le];
          if (x[e(2167)][e(2347)] ? typeof Se == e(2844) && Object.keys(Se)[e(1332)] > 0 || Se === !1 : x[e(910)].schemaHasRules(Se, x[e(2363)][e(1288)])) {
            var Ge = x[e(910)][e(1295)](le), ie = f + Ge, n0 = xe && Se[e(2222)] !== void 0;
            h.schema = Se, h[e(442)] = u + Ge, h[e(1056)] = d + "/" + x[e(910)][e(2324)](le), h.errorPath = x[e(910)][e(1315)](x[e(2247)], le, x[e(2167)][e(839)]), h.dataPathArr[q] = x[e(910)][e(1250)](le);
            var se = x[e(1348)](h);
            if (h[e(2456)] = G, x[e(910)].varOccurences(se, T) < 2) {
              se = x[e(910)][e(2770)](se, T, ie);
              var Qe = ie;
            } else {
              var Qe = T;
              s += " var " + T + e(2821) + ie + "; ";
            }
            if (n0) s += " " + se + " ";
            else {
              if (ue && ue[le]) {
                s += " if ( " + Qe + e(675), z && (s += e(814) + f + ", '" + x[e(910)][e(2805)](le) + e(2148)), s += e(1432) + v + e(895);
                var A = x[e(2247)], J = d, _e = x[e(910)][e(2805)](le);
                x[e(2167)][e(2803)] && (x[e(2247)] = x.util[e(1315)](A, le, x[e(2167)].jsonPointers)), d = x[e(1056)] + e(2207);
                var Q = Q || [];
                Q[e(902)](s), s = "", x.createErrors !== !1 ? (s += e(2151) + e(1025) + e(1016) + x[e(2247)] + e(192) + x[e(910)][e(1250)](d) + " , params: { missingProperty: '" + _e + e(2482), x.opts[e(389)] !== !1 && (s += " , message: '", x[e(2167)][e(2803)] ? s += e(995) : s += e(1002) + _e + "\\'", s += "' "), x.opts[e(2200)] && (s += e(624) + u + " , parentSchema: validate.schema" + x[e(442)] + e(1798) + f + " "), s += e(1134)) : s += e(1136);
                var V = s;
                s = Q[e(469)](), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + V + e(1278) : s += e(553) + V + e(2357) : s += " var err = " + V + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = J, x.errorPath = A, s += e(2643);
              } else l ? (s += e(173) + Qe + e(675), z && (s += e(814) + f + e(635) + x[e(910)][e(2805)](le) + e(2148)), s += e(1432) + v + e(2659)) : (s += " if (" + Qe + e(431), z && (s += e(245) + f + e(635) + x[e(910)][e(2805)](le) + e(2148)), s += e(2845));
              s += " " + se + e(1134);
            }
          }
          l && (s += e(537) + v + ") { ", m += "}");
        }
    }
    if (D[e(1332)]) {
      var ze = D;
      if (ze)
        for (var Ee, Ye = -1, T0 = ze.length - 1; Ye < T0; ) {
          Ee = ze[Ye += 1];
          var Se = F[Ee];
          if (x[e(2167)][e(2347)] ? typeof Se == "object" && Object[e(1806)](Se)[e(1332)] > 0 || Se === !1 : x[e(910)][e(2124)](Se, x[e(2363)][e(1288)])) {
            h.schema = Se, h[e(442)] = x[e(442)] + e(947) + x[e(910)].getProperty(Ee), h[e(1056)] = x[e(1056)] + e(1378) + x.util.escapeFragment(Ee), z ? s += " " + C + e(2821) + C + e(170) + f + "); for (var " + E + e(1169) + E + "<" + C + e(1859) + E + e(2485) + k + e(2821) + C + "[" + E + e(2432) : s += e(678) + k + e(302) + f + e(1432), s += e(537) + x[e(450)](Ee) + e(569) + k + e(1998), h[e(2247)] = x[e(910)][e(1519)](x[e(2247)], k, x[e(2167)].jsonPointers);
            var ie = f + "[" + k + "]";
            h[e(2392)][q] = k;
            var se = x.validate(h);
            h[e(2456)] = G, x[e(910)].varOccurences(se, T) < 2 ? s += " " + x[e(910)].varReplace(se, T, ie) + " " : s += e(551) + T + e(2821) + ie + "; " + se + " ", l && (s += " if (!" + v + e(1239)), s += e(1134), l && (s += e(2352) + v + e(409)), s += e(1530), l && (s += e(537) + v + e(1432), m += "}");
          }
        }
    }
    return l && (s += " " + m + e(537) + b + e(1023)), s;
  }), Rt;
}
var Ft, Ur;
function C2() {
  return Ur || (Ur = 1, Ft = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(1356)], c = x.schema[t], u = x.schemaPath + x[e(910)][e(1295)](t), d = x[e(1056)] + "/" + t, l = !x[e(2167)][e(1842)], f = e(2887) + (i || ""), b = e(1721) + n, h = x[e(910)][e(1196)](x), m = "";
    h.level++;
    var v = e(295) + h[e(2454)];
    if (s += e(2337) + b + e(1006), x.opts[e(2347)] ? typeof c == "object" && Object.keys(c)[e(1332)] > 0 || c === !1 : x[e(910)].schemaHasRules(c, x[e(2363)][e(1288)])) {
      h[e(224)] = c, h[e(442)] = u, h[e(1056)] = d;
      var k = e(1175) + n, E = "idx" + n, q = "i" + n, T = e(825) + k + e(1138), C = h[e(1356)] = x.dataLevel + 1, P = "data" + C, F = e(2095) + n, D = x.opts[e(1789)], j = x[e(2456)];
      D && (s += e(551) + F + " = undefined; "), D ? s += " " + F + e(2821) + F + e(170) + f + e(1655) + E + "=0; " + E + "<" + F + e(1859) + E + e(2485) + k + e(2821) + F + "[" + E + e(2432) : s += e(678) + k + e(302) + f + e(1432), s += e(826) + n + e(513);
      var O = k, N = x[e(2807)];
      x[e(2807)] = h[e(2807)] = !0;
      var R = x[e(1348)](h);
      h[e(2456)] = j, x[e(910)][e(2087)](R, P) < 2 ? s += " " + x[e(910)][e(2770)](R, P, O) + " " : s += e(551) + P + e(2821) + O + "; " + R + " ", x.compositeRule = h.compositeRule = N, s += e(2825) + v + e(724) + q + "=startErrs" + n + "; " + q + e(2704) + q + e(2360) + q + "].propertyName = " + k + e(1170), x[e(1560)] !== !1 ? (s += e(2151) + e(806) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(192) + x[e(910)][e(1250)](d) + e(266) + T + "' } ", x[e(2167)][e(389)] !== !1 && (s += e(1549) + T + e(613)), x[e(2167)].verbose && (s += e(624) + u + e(2799) + x[e(442)] + e(1798) + f + " "), s += e(1134)) : s += e(1136), s += e(1109), !x.compositeRule && l && (x.async ? s += e(1726) : s += e(900)), l && (s += e(1620)), s += e(518);
    }
    return l && (s += " " + m + e(537) + b + e(1023)), s;
  }), Ft;
}
var Nt, Hr;
function R2() {
  return Hr || (Hr = 1, Nt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x.dataLevel, c = x[e(224)][t], u = x.schemaPath + x[e(910)][e(1295)](t), d = x[e(1056)] + "/" + t, l = !x[e(2167)][e(1842)], f = e(2887) + (i || ""), b = e(295) + n, h = x.opts[e(218)] && c && c[e(218)];
    h && (s += e(992) + n + e(2821) + x[e(910)][e(1207)](c.$data, i, x[e(2392)]) + "; ");
    var m = "schema" + n;
    if (!h)
      if (c[e(1332)] < x.opts[e(472)] && x.schema[e(657)] && Object[e(1806)](x[e(224)][e(657)])[e(1332)]) {
        var C = [], v = c;
        if (v)
          for (var k, E = -1, q = v[e(1332)] - 1; E < q; ) {
            k = v[E += 1];
            var T = x[e(224)][e(657)][k];
            !(T && (x.opts[e(2347)] ? typeof T == "object" && Object.keys(T)[e(1332)] > 0 || T === !1 : x[e(910)][e(2124)](T, x[e(2363)].all))) && (C[C[e(1332)]] = k);
          }
      } else var C = c;
    if (h || C[e(1332)]) {
      var P = x[e(2247)], F = h || C.length >= x[e(2167)][e(472)], D = x[e(2167)][e(1789)];
      if (l)
        if (s += e(2669) + n + "; ", F) {
          !h && (s += e(551) + m + e(2113) + u + "; ");
          var j = "i" + n, O = e(224) + n + "[" + j + "]", N = e(825) + O + " + '";
          x[e(2167)][e(2803)] && (x[e(2247)] = x[e(910)][e(1519)](P, O, x[e(2167)][e(839)])), s += e(551) + b + e(409), h && (s += e(2047) + n + e(481) + b + e(1257) + n + e(1276) + b + e(2009)), s += " for (var " + j + e(2738) + j + e(2641) + m + e(1859) + j + e(899) + b + e(2821) + f + "[" + m + "[" + j + e(504), D && (s += e(245) + f + ", " + m + "[" + j + e(1569)), s += e(2715) + b + e(994), h && (s += e(2866)), s += e(2141) + b + e(1457);
          var R = R || [];
          R[e(902)](s), s = "", x.createErrors !== !1 ? (s += e(2151) + "required" + e(1016) + x[e(2247)] + e(192) + x[e(910)][e(1250)](d) + " , params: { missingProperty: '" + N + e(2482), x[e(2167)].messages !== !1 && (s += e(2815), x[e(2167)]._errorDataPathProperty ? s += "is a required property" : s += e(1002) + N + "\\'", s += "' "), x[e(2167)][e(2200)] && (s += e(624) + u + e(2799) + x[e(442)] + e(1798) + f + " "), s += " } ") : s += e(1136);
          var L = s;
          s = R.pop(), !x[e(2807)] && l ? x[e(418)] ? s += e(1323) + L + e(1278) : s += e(553) + L + e(2357) : s += " var err = " + L + e(1109), s += e(2643);
        } else {
          s += e(173);
          var $ = C;
          if ($)
            for (var z, j = -1, G = $[e(1332)] - 1; j < G; ) {
              z = $[j += 1], j && (s += e(2320));
              var ce = x.util[e(1295)](z), ue = f + ce;
              s += e(2790) + ue + " === undefined ", D && (s += e(814) + f + e(635) + x[e(910)][e(2805)](z) + e(2148)), s += e(1396) + n + e(2821) + x.util[e(1250)](x[e(2167)].jsonPointers ? z : ce) + e(618);
            }
          s += e(368);
          var O = e(1052) + n, N = "' + " + O + e(1138);
          x[e(2167)][e(2803)] && (x[e(2247)] = x[e(2167)].jsonPointers ? x[e(910)][e(1519)](P, O, !0) : P + e(2721) + O);
          var R = R || [];
          R[e(902)](s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + "required' , dataPath: (dataPath || '') + " + x[e(2247)] + e(192) + x[e(910)].toQuotedString(d) + " , params: { missingProperty: '" + N + e(2482), x[e(2167)].messages !== !1 && (s += e(2815), x[e(2167)]._errorDataPathProperty ? s += e(995) : s += e(1002) + N + "\\'", s += "' "), x[e(2167)][e(2200)] && (s += " , schema: validate.schema" + u + e(2799) + x[e(442)] + e(1798) + f + " "), s += e(1134)) : s += e(1136);
          var L = s;
          s = R[e(469)](), !x[e(2807)] && l ? x.async ? s += e(1323) + L + "]); " : s += e(553) + L + "]; return false; " : s += " var err = " + L + e(1109), s += e(2643);
        }
      else if (F) {
        !h && (s += e(551) + m + e(2113) + u + "; ");
        var j = "i" + n, O = "schema" + n + "[" + j + "]", N = e(825) + O + e(1138);
        x[e(2167)]._errorDataPathProperty && (x.errorPath = x[e(910)][e(1519)](P, O, x[e(2167)][e(839)])), h && (s += e(537) + m + e(2553) + m + e(2828), x[e(1560)] !== !1 ? (s += " { keyword: '" + e(1025) + e(1016) + x[e(2247)] + " , schemaPath: " + x[e(910)][e(1250)](d) + e(956) + N + e(2482), x[e(2167)][e(389)] !== !1 && (s += e(2815), x[e(2167)]._errorDataPathProperty ? s += e(995) : s += e(1002) + N + "\\'", s += "' "), x[e(2167)][e(2200)] && (s += " , schema: validate.schema" + u + e(2799) + x[e(442)] + e(1798) + f + " "), s += e(1134)) : s += " {} ", s += e(952) + m + e(674)), s += " for (var " + j + " = 0; " + j + e(2641) + m + e(1859) + j + e(1944) + f + "[" + m + "[" + j + e(559), D && (s += e(814) + f + ", " + m + "[" + j + e(1569)), s += ") {  var err =   ", x[e(1560)] !== !1 ? (s += e(2151) + "required" + e(1016) + x[e(2247)] + e(192) + x[e(910)].toQuotedString(d) + e(956) + N + e(2482), x[e(2167)].messages !== !1 && (s += " , message: '", x[e(2167)]._errorDataPathProperty ? s += e(995) : s += e(1002) + N + "\\'", s += "' "), x.opts[e(2200)] && (s += e(624) + u + e(2799) + x[e(442)] + " , data: " + f + " "), s += " } ") : s += e(1136), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", h && (s += e(2866));
      } else {
        var fe = C;
        if (fe)
          for (var z, oe = -1, le = fe[e(1332)] - 1; oe < le; ) {
            z = fe[oe += 1];
            var ce = x[e(910)][e(1295)](z), N = x[e(910)][e(2805)](z), ue = f + ce;
            x[e(2167)][e(2803)] && (x[e(2247)] = x[e(910)][e(1315)](P, z, x.opts.jsonPointers)), s += " if ( " + ue + e(675), D && (s += e(814) + f + e(635) + x[e(910)][e(2805)](z) + e(2148)), s += ") {  var err =   ", x[e(1560)] !== !1 ? (s += e(2151) + e(1025) + e(1016) + x.errorPath + e(192) + x.util[e(1250)](d) + " , params: { missingProperty: '" + N + e(2482), x[e(2167)].messages !== !1 && (s += e(2815), x[e(2167)]._errorDataPathProperty ? s += e(995) : s += e(1002) + N + "\\'", s += "' "), x[e(2167)][e(2200)] && (s += e(624) + u + " , parentSchema: validate.schema" + x.schemaPath + e(1798) + f + " "), s += e(1134)) : s += e(1136), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
          }
      }
      x.errorPath = P;
    } else l && (s += e(1077));
    return s;
  }), Nt;
}
var Tt, zr;
function F2() {
  return zr || (zr = 1, Tt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x[e(1356)], c = x[e(224)][t], u = x[e(442)] + x[e(910)][e(1295)](t), d = x.errSchemaPath + "/" + t, l = !x[e(2167)][e(1842)], f = e(2887) + (i || ""), b = e(295) + n, h = x[e(2167)][e(218)] && c && c.$data, m;
    if (h ? (s += e(992) + n + e(2821) + x[e(910)][e(1207)](c[e(218)], i, x[e(2392)]) + "; ", m = e(224) + n) : m = c, (c || h) && x[e(2167)][e(1431)] !== !1) {
      h && (s += " var " + b + e(1676) + m + e(2494) + m + " === undefined) " + b + " = true; else if (typeof " + m + " != 'boolean') " + b + e(1427)), s += " var i = " + f + ".length , " + b + e(313);
      var v = x.schema.items && x[e(224)][e(1613)][e(190)], k = Array[e(977)](v);
      if (!v || v == e(2844) || v == "array" || k && (v.indexOf(e(2844)) >= 0 || v.indexOf(e(2173)) >= 0)) s += e(1450) + f + e(2849) + f + e(926) + b + e(158);
      else {
        s += e(1805) + f + e(1226);
        var E = e(531) + (k ? "s" : "");
        s += " if (" + x.util[E](v, e(1442), x[e(2167)].strictNumbers, !0) + e(2154), k && (s += e(2430)), s += e(1429) + b + e(1748);
      }
      s += e(1134), h && (s += "  }  "), s += e(2825) + b + e(1457);
      var q = q || [];
      q[e(902)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + e(1431) + "' , dataPath: (dataPath || '') + " + x[e(2247)] + " , schemaPath: " + x[e(910)][e(1250)](d) + " , params: { i: i, j: j } ", x[e(2167)][e(389)] !== !1 && (s += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), x[e(2167)][e(2200)] && (s += e(1800), h ? s += "validate.schema" + u : s += "" + c, s += "         , parentSchema: validate.schema" + x[e(442)] + e(1798) + f + " "), s += e(1134)) : s += e(1136);
      var T = s;
      s = q[e(469)](), !x[e(2807)] && l ? x[e(418)] ? s += " throw new ValidationError([" + T + e(1278) : s += e(553) + T + e(2357) : s += e(2804) + T + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(1134), l && (s += e(2138));
    } else l && (s += e(495));
    return s;
  }), Tt;
}
var qt, Vr;
function N2() {
  return Vr || (Vr = 1, qt = { $ref: d2(), allOf: l2(), anyOf: f2(), $comment: h2(), const: p2(), contains: m2(), dependencies: b2(), enum: g2(), format: y2(), if: v2(), items: w2(), maximum: Fr(), minimum: Fr(), maxItems: Tr(), minItems: Tr(), maxLength: Ar(), minLength: Ar(), maxProperties: Or(), minProperties: Or(), multipleOf: S2(), not: k2(), oneOf: P2(), pattern: E2(), properties: I2(), propertyNames: C2(), required: R2(), uniqueItems: F2(), validate: vn() }), qt;
}
var At, Br;
function T2() {
  const o = a;
  if (Br) return At;
  Br = 1;
  var x = N2(), t = W0()[o(2589)];
  return At = function() {
    const e = o;
    var s = [{ type: "number", rules: [{ maximum: [e(2005)] }, { minimum: ["exclusiveMinimum"] }, "multipleOf", e(2039)] }, { type: "string", rules: ["maxLength", e(1610), e(1777), "format"] }, { type: "array", rules: [e(2520), e(2903), e(1613), e(2476), e(1431)] }, { type: "object", rules: ["maxProperties", "minProperties", e(1025), "dependencies", e(806), { properties: [e(2409), "patternProperties"] }] }, { rules: [e(316), "const", e(2583), e(2158), "anyOf", e(1756), "allOf", "if"] }], n = [e(190), "$comment"], i = [e(684), "$id", "id", e(218), "$async", e(2499), "description", "default", "definitions", e(456), e(2846), e(448), "contentMediaType", e(594), e(1283), e(723), "else"], c = [e(1206), e(1605), e(1653), e(2173), e(2844), e(1001), e(1589)];
    return s.all = t(n), s[e(2550)] = t(c), s[e(1953)](function(u) {
      const d = e;
      u.rules = u[d(2516)][d(2742)](function(l) {
        const f = d;
        var b;
        if (typeof l == f(2844)) {
          var h = Object[f(1806)](l)[0];
          b = l[h], l = h, b.forEach(function(v) {
            const k = f;
            n.push(v), s[k(1288)][v] = !0;
          });
        }
        n[f(902)](l);
        var m = s[f(1288)][l] = { keyword: l, code: x[l], implements: b };
        return m;
      }), s[d(1288)][d(1514)] = { keyword: d(1514), code: x[d(1514)] }, u[d(190)] && (s[d(2550)][u[d(190)]] = u);
    }), s[e(2379)] = t(n[e(1545)](i)), s[e(1893)] = {}, s;
  }, At;
}
var _t, Wr;
function q2() {
  const o = a;
  if (Wr) return _t;
  Wr = 1;
  var x = ["multipleOf", "maximum", "exclusiveMaximum", o(962), o(1608), o(2213), o(1610), o(1777), o(1283), o(2520), o(2903), o(1431), o(991), "minProperties", "required", o(2409), o(2583), "format", o(298)];
  return _t = function(t, r) {
    const e = o;
    for (var s = 0; s < r[e(1332)]; s++) {
      t = JSON[e(429)](JSON[e(306)](t));
      var n = r[s].split("/"), i = t, c;
      for (c = 1; c < n.length; c++) i = i[n[c]];
      for (c = 0; c < x[e(1332)]; c++) {
        var u = x[c], d = i[u];
        d && (i[u] = { anyOf: [d, { $ref: e(968) }] });
      }
    }
    return t;
  }, _t;
}
var Ot, Zr;
function A2() {
  const o = a;
  if (Zr) return Ot;
  Zr = 1;
  var x = ha()[o(2646)];
  Ot = t;
  function t(r, e, s) {
    const n = o;
    var i = this;
    if (typeof this._opts[n(2086)] != n(1235)) throw new Error(n(667));
    typeof e == n(1235) && (s = e, e = void 0);
    var c = u(r).then(function() {
      var l = i._addSchema(r, void 0, e);
      return l.validate || d(l);
    });
    return s && c[n(723)](function(l) {
      s(null, l);
    }, s), c;
    function u(l) {
      const f = n;
      var b = l[f(684)];
      return b && !i[f(1454)](b) ? t[f(377)](i, { $ref: b }, !0) : Promise[f(1635)]();
    }
    function d(l) {
      const f = n;
      try {
        return i[f(774)](l);
      } catch (h) {
        if (h instanceof x) return b(h);
        throw h;
      }
      function b(h) {
        const m = f;
        var v = h[m(572)];
        if (q(v)) throw new Error(m(2557) + v + m(2048) + h[m(1319)] + m(401));
        var k = i._loadingSchemas[v];
        return !k && (k = i[m(2059)][v] = i._opts[m(2086)](v), k[m(723)](E, E)), k[m(723)](function(T) {
          const C = m;
          if (!q(v)) return u(T)[C(723)](function() {
            const P = C;
            q(v) || i[P(2015)](T, v, void 0, e);
          });
        })[m(723)](function() {
          return d(l);
        });
        function E() {
          const T = m;
          delete i[T(2059)][v];
        }
        function q(T) {
          const C = m;
          return i._refs[T] || i[C(840)][T];
        }
      }
    }
  }
  return Ot;
}
function qx() {
  const o = ["', missingProperty: '", "Request timed out", "$async", "保存所有", "Positive Crop", "scheme", "Clear selection", "executeOutgoingRequestInterceptor", "任务执行失败: {{error}}", "isTop", "start", " validate.errors = vErrors; ", ", limit: ", "Current selection: Layer", " division", "&gt;", "输出至：", "postMessage", "正向裁剪(Outpaint)", "payload", "types", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "emergency", " && !Array.isArray(", "[object Number]", "token", "run API 调用失败 - HTTP 错误，状态: {{status}}", "Schema ", "` could not be extracted from all schema options", " = refVal[", "使用当前选区边界", ")) {  ", "Paste WebApp ID here", "sampling/createMessage", "#3333FF", "Selection mask", "模板已删除。", "getUsedParamsDetails", "external", "discriminator", '"; } ', "_getType", "parseAsync", "partial", " = vErrors[", "greater than or equal to ", "returnObjects", "; else vErrors = vErrors.concat(", "postProcessor", "提示词模板", "setPrototypeOf", "2.0", " if (false) { ", "enum", "actions", "unescapeSuffix", "nonnegative", "detail", ") {  var err =   ", "toHash", "No connection available for node ", "port", "defineProperty", "ZodNull", "{2})", "###", "+Alt crop by selection", "status API failed - {{reason}}", "default is ignored for: ", "Get mask from Current Layer", " == 'number' || ", "schemaExcl", "#FF3366", "finally", "runningRequests", "supportedLngs", "[\\:\\/\\?\\#\\[\\]\\@]", "returnTypeError", "promptIds", "status API failed - HTTP error! status: {{status}}", "getResource", "bigint", "获取图片", "Failed to get task status", "选择图像来源", " , message: 'should contain a valid item' ", "failed", "Current layer bounds only", "thisServer", "Layer not found: {{0}}", " than ", "ids", "minSize", "selection", "newlayer_canvas", "abs", "Mask apply returned empty resource", "执行失败", "usedParams", "Select Source", "getBestMatchFromCodes", "listWorkflows", "schema id ignored", "state", "signal", "source", "extend", "resourceName", "控件 {0} 转换失败：", "素材同步中", "Auto fetching…", " < ", " return errors === 0;       ", " } else { ", 'unknown format "', "All", "MissingRef", "Generating", "Request timeout (408)", "Edge references unknown source node: ", "setupStreamRequestHandler", "ZodSymbol", "initializeNodeStores", "Method not found", "initializeResponseQueue", "strictCreate", "未实现 (501)", " = '' + ", "无效的边界类型: {{type}}", " = true; } else { ", "defaultError", " is not a valid identifier", "Please select the image to get", "keyof", "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ", "AI Generation Task", "'[\\'' + ", "exclIsNumber", "simpleTypes", " var missing", "No first related layer in {{0}}", "api/view?type=", "element", " , params: {} ", "\\$&", "移除槽位", "setupStreamResponseHandler", "ZodLiteral", '$ref: validation keywords used in schema at path "', "comfy side transport.onerror", "MiddlewareError", "Negative Prompt", "there was no format function for ", "prompts/get", "unicodeSupport", "setupStreamProtocolHandlers", "tolerant", "originalError", "prefix", "isValidLookup", "passthrough", "Shift-click or right-click to toggle auto send", "ComfyUI failed to load, HTTP status code: {{code}}", "abort", "undefined", "safeParse", "removeAdditional", "heartbeatTimeout", "/properties", "生成中", "entries", "CurLayer", " characters' ", "var pattern", "<errors; ", "skipOnVariables", "setDefaultNamespace", "Task cancel failed: {{error}}", "absolutePath", " = 'else'; ", "Server does not support resources (required for ", "getConnectionToNodeInternal", "continueOnInterceptorError", " if (! ", "date", "; if (!", "match", " !== undefined) {  ", "isRoot", "lastIndex", "keySeparator", " + ", "创建文档失败", " = [", "Select", "hasAction", "formats", "accept", "invalid_date", "checkDataTypes", "inline", "unicode", "Boundary", " === ", "Selected", "uiWeight", "addResourceBundle", "Current Tasks:", " = 0; ", "under", "updateMissing", "管理 Comfy Simple 工作流的提示词片段。", "map", "获取结果失败: {{error}}", "cacheKey", "status", "); if (", " = true; if (", "Failed to request initial state for ", "未找到文档 {0}", "Clear", "从磁盘上传", "request", "String must contain ", "setResolvedLanguage", " !== ", "languageDetector", ".length > ", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "notifications/resources/updated", "X10", "ref/prompt", ") {   var err =   ", "afb", " if (!(await ", "apd", "ZodBoolean", "Auto", "schema id must be string", "varReplace", "languageChanging", "milliseconds", "catchValue", "namespace", "waiters", "reference", "This node defaults to current layer + mask", "Uploader not set", "本地视频", " ) || ", "addNamespaces", "joinArrays", ".hasOwnProperty(", "生成失败", "implementInternalAction", "syncWorkflows", "ZodEffects", "_cleanupTimeout", "implements", " ( ( ", "coerce", "use", ", deps: '", "Workflow not found", "_onerror", "请登陆后使用插件", "发送至选区", "includes", " , parentSchema: validate.schema", "ZodTuple", "_opts", "changeLanguage", "_errorDataPathProperty", " var err = ", "escapeQuotes", "[0]; ", "compositeRule", "sendResourceUpdated", "isOptional", "Current layer", "comfy-entry", "exec_info", "node_errors", "ESCAPE", " , message: '", "No backend was added via i18next.use. Will not load resources.", "innerType", "isNullable", "Range 1-100", "请填写模板名称。", " = ", 'did not save key "', "roots/list", "Failed to update the {{part}} prompt: ComfyUI connection is not ready.", " if (!", " , message: 'should be equal to constant' ", "localRefs", ")) {  var err =   ", "新建文档", "regex", "11973236gTtBmx", '" was not yet loaded', "missingKey", "unknown keyword: ", "invalid_string", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "点此获取RunningHub APIKey", "gte", "getNodes API 调用失败 - {{reason}}", " }   ", "validateKeyword", "ComfyUI - {{workflowName}}", "图层 {{0}} 不是一个组", "object", " ) { ", "readOnly", "implementAction", "选区遮罩为空", "[i], ", "await ", "  } ", "_cache", "schemas", "Auto sync is off", "#FF00CC", "Overflow: input needs wider integers to process", "ltr", "Values", "         , parentSchema: validate.schema", "fewer", " if (errors === ", "_error", "interpolator", "   ", "Google Gemini - 图片生成", "  }  ", "addMiddleware", "更多设置", "file", "streamRequest", "找不到文档: {{0}}", " = errors;var ", "assign", "Expected ", "false schema", "./api/userdata/workflows%2F.index.json", "确定要删除此模板吗？", "_oninitialize", "Server does not support prompts (required for ", "notifications/initialized", "Failed to fetch form data", "网关错误 (502)", "if ( ", "清空所有", "clearItems", "humanize", "data", "Invalid input", "#CC33FF", "_key", "endsWith", "Create document", "isInteger", "toASCII", "requestIdSeq", "same-document", "handleIncomingRequest", "stopSequence", "Import as Smart Object", "objectValues", "resources/list", "Unknown message type: ", "minItems", "sd-ppp-static/sdppp_images/", " = false; break outer; } } } ", "closeHandlers", "Comfy Manager未安装，无法重启", " , message: 'can\\'t resolve reference ", "emoji", "loaded namespace ", "Auto send disabled", "openWorkflow", "2QmpWEO", "graph", "Click to remove local file", "[^\\%\\/\\@]", " || Object.keys(", "startHeartbeat", "host", " if ( ", "Template name already exists.", "PCT_ENCODED", "Create guide frame", "reverse", "week", "handleIncomingMessage", "#99CC33", "isOpen", "{2}", "isURL", "cuid2", " not found on node ", ".validate; var ", "__internal_requestInitialState_", ".dataPath = (dataPath || '') + ", "sendResourceListChanged", "type", "more than", " , schemaPath: ", "Boundary preview", "positive", "该节点默认继承当前图层与遮罩", "warn", 'key "', "]; }  ", "base64url", " === null) ", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "Crop by selection", "customRules", "next", "mesh:workflow", "(\\.\\d+)?", "处理进度 {{processed}}/{{total}}", "   var err =   ", "自动填入画布关闭", "4mCXhQZ", "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting", "parseMissingKeyHandler", "ZodArray", " ( ", "插件可能正在拦截 PS 快捷键... ", "整个画布", "/type", "$data", "sendLoggingMessage", "smartobject", "{0,5}", "#9933CC", "Fetch current layer with primary boundary", "schema", " */", "Fetch canvas with current-layer boundary", "#00CC66", "isBase64", " = +", "12BierTQ", "manuallyExtractDefaults", " !== undefined && typeof ", "propsKeywords", "tools", "Input Setting", "Notification interceptor failed for ", "logging/setLevel", ".data = ", "#/definitions/nonNegativeInteger", "新建模板", "It seems you are nesting recursively key: ", "[^\\%\\/\\:\\@]", " === undefined || ", "快捷键选图功能仅在插件窗口聚焦时可用", " &&   Object.prototype.hasOwnProperty.call(", "工作流打开中", "%[89A-Fa-f]", "maximum", "AbortSignal is already aborted", "Set as Current Selection", "ZodNaN", "favorites", "getRule", "xmn", "ZodReadonly", "completion/complete", "#CC6633", " = new RegExp(", "setNotificationHandler", ", received ", "longer", ".validate", "defaults", "pick", "lngs", " , params: { propertyName: '", "IPV6ADDRESS", "&quot;", "isEmpty", "4036550PWSvBD", "_progressHandlers", "_formats", "请输入您的 Google API Key", "&subfolder=", "keywordValidate", "mountedTransports", "res", "Invalid action: {{action}}", "sdppp/broadcast", "Bounds", "forwarded", "Image quality (%)", "completed", "some", "useCustomRule", ") { var op", "getClientVersion", "No images", " && ( ", "#CC9933", "heartbeatTimer", "More actions", " = errors === errs_", "usedNS", "valid", "nestingRegexp", "[^0-9]", "const", "Choose File", "exact", "interceptorTimeout", " in ", "创建预览文档", "store:update:", "contextualErrorMap", "stringify", "Empty selection mask", "initImmediate", "modifying", "自动填入画布开启", "0?[1-9]", "[BroadcastManager] Error forwarding broadcast:", " = true , j; if (i > 1) { ", "Invalid function return type", "now", "$ref", "_getId", "保存提示词模板失败。", "setupTransportHandlers", " already exists, which would be overridden", "nodeTransports", "本地图片包", "（会员专属）", " else throw new ValidationError(vErrors); ", "Invalid boundary type: {{type}}", " , message: 'should NOT have ", "typeName", "hasLoadedNamespace", "[A-Za-z]", "aao", "__nwjs", " var errs_", `获取图像 &
裁剪选区遮罩`, "(.+?)", "?\\]?$", "getConnectionInfo", "getCapabilities", "Plugin window focused required to use keyboard shortcut", "显示发送的图片", "iterator", "zero", "上传已中止", "自定义AI工作流引擎", "constructor", " failed", "subfolder", " else if (", 'no schema with key or ref "', "Failed to fetch account status", "]; if (", "Login Successful", "mergeArray", "preprocess", "color", "years", "hijacked", "toJSON", "notifications/tools/list_changed", "zh-CN", "inclusive", "#FFCC33", "无法打开图像文件: {{error}}", "选择 AI 服务提供商", "queuePrompt", "#00CCCC", " = errors;  ", "Not connected", ") {  ", "Cycle detected: ", "仅选区范围", "Document {{0}} not found", " }; return validate; ", "使用教程", "userDefinedNsSeparator", "useColors", "RunningHub - {{webappId}}", "call", "非当前文档", "服务器错误 (500)", "listenMessageCallback", "#0066FF", "rejecting language code not found in supportedLngs: ", "Fetch current layer with current-layer boundary", "isSupportedCode", "initialized", "abh", "syncStoresToNewConnection", "uploadImage API 调用失败 - HTTP 错误，状态: {{status}}", "messages", "notificationsHandled", "Save current", "]; } else { ", "点击恢复默认边界", "after app.queuePrompt errors: ", "Task incomplete, current status: {{status}}", "设为当前选区", "defaultValue", " = typeof ", "MethodNotFound", "schemaId", " cannot be resolved", "accessing an object - but returnObjects options is not enabled!", "  errors = ", "#CC00FF", "Node not found", "ZodVoid", "userDefinedKeySeparator", "AUTO", " = true; ", "run", "post", "run API failed - HTTP error! status: {{status}}", "NOT_QUERY", "strict", "detect", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "prompts/list", "async", "invalid_literal", "[^\\%]", "exclusive", "put", "validation failed", "#3333CC", "charCodeAt", " == 'function' ? ", "http://json-schema.org/draft-07/schema", ".length <= ", "parse", "getImage", " !== undefined ", "optionsMap", "  )  ", "Outgoing request interceptor failed: ", "getHandler", "trim", "Status check aborted", "hasError", "mergeObjectSync", "#FF3399", "has", "schemaPath", "maxRetries", "Add Template", "exception_message", "out", "_parseSync", "writeOnly", "?\\:\\:", "usePattern", " = !(false ", "minutes", "saveMissing", "/%2F", "var default", "examples", "Array must contain ", "停止并取消全部", "acx", " !== undefined) ; ", "regexpUnescape", "#3300CC", "反向裁剪(Inpaint)", " , params: { allowedValue: schema", " ? '", " = undefined;", "unknownKeys", "coerced", "pop", "registerDirectRequestHandler", "Google Gemini Image Generator", "loopRequired", "Synchronous parse encountered promise.", "2024-11-05", "executeHandlerAsync", "NOT_USERINFO", "#CC00CC", "Failed to send an error response: ", "add", "/additionalProperties", " === undefined) ", "disconnected", " + ']'", "Image input and prompt are required", "文件未找到: {{path}}", "当前选区", "Upload from disk", "ZodNullable", "translator", "BigInt must be ", ".schema = ", "fast", "logging", "stack", " if (true) { ", "本节点默认继承:", "ComfyUI 未就绪", "lastIndexOf", "load", "unescapeFragment", "New Template", "sec", "Please provide a template name.", "]] !== undefined ", "parseInt", "init: no languageDetector is used and no lng is defined", "key '", "You must pass an array of schemas to z.tuple([ ... ])", "isIP", "inlineRef", "addResources", "false", " = errors; ", "cacheInBuiltFormats", "refVal[", "InvalidRequest", "extractFromKey", " } }", "validation", " try { await ", "node_id", "NumberFormat", "设为当前图层", "saveWorkflow", "destroy", "ZodError", "resolveComponents", "Failed to connect to ComfyUI (HTTP {{code}})", " , params: { property: '", "_cached", "checkDataType", "prompt_id", "startsWith", "position", "点我恢复", "en-US", " if (", "pbu", "less than or equal to", ", rootData)  ", "Fit to canvas", "one", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "getKeyword", "Action handler ", "pluralResolver", "formData", "Download", "结果获取已中止", "convert widget {0} failed:", " var ", "uploadComfyImageFromUXP", " validate.errors = [", "resources", " when property ", "#6633FF", " var isAdditional", "Back", "]] === undefined ", "#FF6633", "setOutgoingNotificationInterceptor", "ckb", "Click to use current selection", '[\\"]', "execution_start", "sessionId", "requestId", " == 'boolean' || ", ".test(", "elicitation", "_addCheck", "missingSchema", "cleanCode", "当前选项：画布", "未知错误（{{code}}）", "选区遮罩", "未授权 (401)", "#FF3333", "getValidEnumValues", "var refVal", "validateHandlerType", "调整预览文档尺寸", "Show sent images", "buildAdjacencyList", "split", "code", " = errors; var ", "getConnectedNodeIds", "returnedObjectHandler", "arq", "bind", "Manage reusable prompt snippets for Comfy Simple workflows.", "shu", "contentEncoding", "tools/call", "widgetableStructure", "i18next/PATH_KEY", "image/png", "No preview content yet", "自动同步中…", "边界预览", "at most", "pctDecChars", "body", "_refs", "nestingPrefix", "removeEventListener", "pctEncChar", "jpr", "usedKey", "Using local file", "get_layer_info: 需要 layer_identify", "\\' is invalid' ", " } else {  errors = ", "message", "handleAsObject", "Success", ") ) ", "postProcessPassResolved", "Generate", "mcpMesh", "uri", "xaa", " , schema: validate.schema", "MIN_SAFE_INTEGER", "pipe", "toFixed", "getResourceBundle", "Keyword ", "选择素材来源", "AI使用的区域与最大尺寸控制", "{3}", " should be boolean' ", ' !== "object")', ", '", "Remove video", "actions:util", "errors", "close", "dataType", "No errors", 'Invalid input: must start with "', ".dataPath === undefined) ", "不支持非文本图层: {{0}}", "initializeConsumer", "如何获取APIKey", "getItem", "inlineRefs", "Create document failed", "#FFCC00", "Canvas", "已选择", "{5}", "run API failed - nodeInfoList unavailable. Please call getNodes() first.", "#FF0000", "ZodMap", "properties", "点击使用当前选区", "Sync current content", "_getCached", "originalQueuePrompt", "_responseHandlers", "resolveRunImages", " ) ", "logger", "comfy-uxp", "options.loadSchema should be a function", "getFallbackCodes", "modules", "2[0-4]", "isFinite(", "])) { ", "MissingRefError", " !== undefined) { ", " === undefined ", "#00CC33", "_setupTimeout", " for (var ", "Click to restore default mask", "initAsync", "output", "Node definition not found for current node ", "{0,3}", "$schema", "race", "services", "curr", "Meta-schema for $data reference (JSON Schema extension proposal)", "json-pointer", "dir", "#0000FF", "errToObj", "缺少遮罩资源", "backend", '"number"', "comfy", "正在创建任务...", "void", "api", "Google Gemini - Image Generation", "async ", "arb", "Loading...", "addIssue", "Unknown", "time", "isInitialized", "jsonStringifyReplacer", "queueLoad", "buildDirectedAdjacencyList", "pendingCount", "email", "info", "Sending...", " validate.errors = null; return true; ", "refine", "initializeProducer", "max", "Selection bounds only", "ZodBranded", "Action {{0}} was not found", "ZodCatch", "then", ") { for (var ", "pong", "连接 ComfyUI 失败（HTTP {{code}}）", "formatParams", "OpenAI API error", "sam", "Cloud-based model service platform", "Number must be finite", "SDPPP 2.0 不再需要此节点", "custom keyword definition is invalid: ", "; if (vErrors !== null) { if (", "activeState", "namespaces", "schema should be object or boolean", "1.0.0", "退出登录", "text", "~standard", "默认模板", "Fit to current layer", "returnDetails", "无法从文件创建文档", "IPV4ADDRESS", "cuid", "Not implemented (501)", "multipleOf", '$ref: keywords ignored in schema at path "', 'Invalid input: must end with "', " != 'number') || ", "hasLoadedNamespace: i18next was not initialized", "loadNamespaces", "Create document for preview", "Validation", "[object RegExp]", "nest", "获取表单数据失败", "interpolationkey", "int", "userinfo", "[vV]", " == null) ", "No default templates available.", "simplifyPluralSuffix", ")) { if (vErrors === null) vErrors = ", "process", "No limit", "transform", "markDisconnected", "headers", "weeks", "_compile", "_metaOpts", "./sdppp-custom.js", "You are passing an undefined module! Please check the object you are passing to i18next.use()", " = null; try { ", " && Object.prototype.hasOwnProperty.call(", "NOT_PATH", "3120132dSnBaN", "Save and run immediately", "Images Per Batch", "replace", "sdppp 运行 Photoshop Action", "addIssues", "Local image pack", "Edit Template", "Send to Selection", "closeWorkflow", "run API failed - {{reason}}", "setNodeTitle", "#FF0033", "val is not a non-empty string or a valid number. val=", "ZodEnum", "Get pixel of {{0}} failed", "getTransportToNode", "errorHandlers", "maxReplaces", " === '' || ", "RelativeTimeFormat", "Reset", "Reverse", "ars", "widgets", "propertyNames", "invalid_union_discriminator", "Current selection: Canvas", " !== undefined)", "Current option: File", "Heartbeat timeout for poster ", "getProtocol", "extendTranslation", " || ! Object.prototype.hasOwnProperty.call(", "Idle", "Auto Sync: on", "useRawValueToEscape", "Failed", "智能对象图层", "clone", ") { errors = ", "_limit", "messageType", "NOT_FRAGMENT", "' + ", " var startErrs", "14203VlqVGP", "xn--", "#0033CC", "dataPath", "No active document", " !== parseInt(division", "No custom templates yet.", "; else if (", "escapeValue", "Template name", "errorMap", "precheck", "jsonPointers", "_schemas", "Primary boundary", "设为选区", "Server does not support tools (required for ", "Timeout", " ms", "Add slot", "ZodNativeEnum", "count", "method", "sampling", "registerDirectRequestHandlerGeneric", "Current layer bounds", "上传失败，请重试", "Unexpected dot segment condition", "exactly", "_limitProperties", "hasDefaultValue", "notifications/message", "ComfyUI加载中...", "onerror", "找不到图层: {{0}}", " not implemented for node ", "posterIdentifier", "NOT_HOST", "显示预览框 ({{count}}张图片)", "[\\-\\.\\_\\~]", "endTurn", " instanceof RegExp) && ", "Hold Shift for more options; Ctrl for single fetch", "setupGraphStoreSync", "Sending all images...", "Save", "augment", "refVal", "  var err =   ", "shape", "正在发送所有图片...", "unsetNotificationHandler", "nsSeparator", "_def", "pluralSeparator", "delete", "Close", "fallback", "locale", "errs_", `Get image &
Limit image boundary`, ") vErrors.length = ", "Discriminator property ", "图像质量 (%)", "isNANOID", "lng", "输入设置", "capabilities", " = false; ", "findPath", "))) { ", "assistant", "++) { ", " validate.errors = vErrors; return false; ", "Quick", "push", "无法写入{{part}}提示词：ComfyUI 尚未就绪。", "toLoad", " , message: 'should have ", "ssh", "assertNever", "海量模型，稳定服务", "invalid_arguments", "util", "_options", "isHeartbeatEnabled", "; else vErrors = null; }", "processCode", "#0099CC", "#/definitions/stringArray", "Stop all", " if (rootData === undefined) rootData = data; ", "Auto run after canvas change", " var errors = 0;     ", "connectedNodes", "请选择AI服务", "fullPath", "extra", "_limitItems", "[j])) { ", "getDefaultValuesFromSchema", " self._opts.$comment(", "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "nan", "requestInitialStateForNode", "主图边界", "PS遮罩", "_getInvalidInput", "rootData", " must be number", "Prompt Templates", "keyType", "Locale", "remove", "暂无可用工作流。", "isDatetime", "init", "Retry", " for language ", "table", ".patternProperties", " , params: { additionalProperty: '", "no plural rule found for: ", " , message: 'should match some schema in anyOf' ", "正在发送图像...", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", " === 1) ", "exclType", "新增槽位", " , params: { missingProperty: '", "$schema must be a string", "不支持的图像输入类型", "Action ", "请输入质量百分比", "options", "minimum", "#/definitions/schemaArray", " var vErrors = null; ", "Create document for sent images", " is present' ", "alwaysSet", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "newdoc", " == 'object' && !(", "failing", ", exclusive: ", "dirty", "正在发送...", "enabled", "canvas", "isArray", "Task execution failed: {{error}}", "Running for {{duration}} secs, {{message}}", "forkResourceStore", "Desire bounds is null", "bbz", "http://json-schema.org/draft-07/schema#", "regExpQueue", "refs", "任务执行失败", " } }  ", "fullFilename", "wss", "emit", "maxProperties", " var schema", "More Settings", ") break; } ", "is a required property", "uxpHost", "Failed to update the {{part}} prompt: no matching widget binding.", "value", "uxp", "ComfyUI server reconnecting", "boolean", "should have required property \\'", "logout", "fatal", "Failed to apply template.", " = errors;", "尺寸限制 (px)", "ZodNumber", "http", ") {", "Negative prompt content", "Email address's domain name can not be converted to ASCII via punycode: ", "ucs2length", "Set as Current Layer", "run API 调用失败 - {{reason}}", "' , dataPath: (dataPath || '') + ", "Invalid ", "Enter your RunningHub API Key", "sdppp/abort", "Upload failed, please try again", "processors", "sourceType", " == errors) {", "waitingReads", "required", "left", "isDate", "charAt", ".additionalProperties", "unknownFormats", "MAX_SAFE_INTEGER", "ZodUndefined", "getDataByLanguage", ") ? ", "addMetaSchema", "find", "遮罩应用后未得到资源", " not in path ", "#CCCC33", "notificationHandlers", "Your Workflows", " ? ", "checks", "i18nFormat", "serialize", "Validation failed but no issues detected.", "#/definitions/nonNegativeIntegerDefault0", " = false , ", "returnEmptyString", "_processInputParams", "Client does not support sampling (required for ", "missing", "Uploading...", "ZodString", "test", "errSchemaPath", "reloadResources", "__esModule", "/additionalItems", "resolved promise for", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "等待 ComfyUI 连接完成…", "valueOf", "nodes", "ZodDate", "currentNodeId", "_capabilities", "over", "质量{{percent}}%", "mergeObjectAsync", "isSafeInteger", "missingKeyNoValueFallbackToKey", "Unrecognized key(s) in object: ", " === '' ", "hasLanguageSomeTranslations", "addLookupKeys", " if (true) {", "schemaErrorMap", "changeTracker", "invalid-input", "10120310wNZKVY", "forwardBroadcast", "withTimeout", "getNeighbors", "sqr", "sort", "_path", "ayn", "ZodUnknown", "Failed to check workflow state changes:", "pre", "_onclose", ")' returned an object instead of string.", "get", "Applying templates is unavailable right now.", "query", "Scan", "_clientVersion", "notifications/roots/list_changed", "getRegExp", "^\\[?(", "other", "通道连接中...", "indexOf", " else {   ", " == 'string' && ", ".validateSchema(", "image", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "newlayer_curlayer", "; } ", " , message: 'should NOT be valid' ", "提示词内容", "promise", " (division", "def", " && !(", "notificationsIntercepted", "appendNamespaceToMissingKey", "description", "Run Photoshop Action", " if (errors === 0) return data;           ", " != 'boolean' && ", "_addSchema", "OpenAI/Google 格式API", "schemaUnknownRules", "normalizeDuration", "response", "loadResources", " , schema: false , parentSchema: validate.schema", "getTransport", 'id "', "params", " } ", "backendConnector", " {} ", ".type", " + '", "Core schema meta-schema", "{0,1}", " reference.", "'else'", "ZodBigInt", " not found for current node ", "2.1.0", "interpolation", "How to get APIKey", "Converting circular structure to JSON", "padEnd", "禁止访问 (403)", "action", "ulid", "workflowManager", "A discriminator value for key `", "ctx", "Logout", "notifications/progress", "url", "Press Enter to open app: {{appName}}", "patternProperties", "nodeProxies", "&#x2F;", "151545MsCbLW", "Clear guide frame", "and", "requestsIntercepted", "sdppp_widgetable_title", "relative", "=0; ", "; }   var err =   ", " = null; ", "Model with affordable price, abundant community applications", "{0,2}", "keyword", "key", "yhd", "men", "ignoreJSONStructure", "onprogress", "请选择要发送图像的位置", "rtl", "removeDotSegments", "ZodObject", "#FF9900", "Primary image resource is missing", " after ", "Date must be ", "isEmail", "diff", "选择模型", " , message: 'should be ", "received", "Inpaint (reverse crop)", "重启ComfyUI失败", "safe", "copy", " ) {   ", "Cannot reboot because ComfyManager is missing", " for nesting ", "uploadImage API failed - {{reason}}", "separator", " != 'number') { ", "arz", "origin", "isRequest", "number", "getData", ".additionalItems", "No linked layer for {{0}}", "Layer {{0}} is not a group", "Node definition not found for ", " , message: 'should NOT be ", "Adjust input settings", "decline", "hasOutgoingNotificationInterceptor", "Notification handler failed for ", "protocolVersion", "disable", "暂无默认模板。", "选择文件", "File", "未选择工作流", "Intersect or scaledDesire is null", "getConnectionCount", "select", "[i]; ", "toResolveHierarchy", "Merge group failed", "offset", "freeze", ") {  for (var ", "./api/manager/reboot", "readingCalls", "getNode", "function", "dev", "idx", "second", ") break; ", " == errors) { ", "Layer not found {{0}}", "hrs", "invalid_union", "addMessageEventListener", "isClone", "overloadTranslationOptionHandler", "peo", "Execute", "common", "toQuotedString", "removeNotificationHandler", "ZodLazy", "keySchema", "RH Coins:", "Invalid boundary: left must be less than right, top must be less than bottom", "ZodAny", " = true; else if (!Array.isArray(schema", "startTime", "definition", "114CGkDDi", "timestamp", " from id ", "parentDataProperty", "Failed to update the {{part}} prompt. Please try again.", "同步当前内容", "subject", "Number must be ", "if (!", "Channel connecting...", "任务取消失败: {{error}}", "Invalid JSON-pointer: ", "isFinite", " === true) ? ", "defaultVariables", "Unknown error", ")) ", "Client does not support elicitation (required for ", "]); ", "mins", " != 'undefined' && ", "No image returned", "Quality {{percent}}%", "additionalItems", "Layer {{layerName}}", "comfy-user", "createStreamState", "#/definitions/simpleTypes", "all", "read", "以画布边界获取画布", "workflows/", "async keyword in sync schema", "range", "ValidationError", "getProperty", "邮箱: {{email}}", "should NOT have additional properties", "Comfy.userId", "prompts", "unsetRequestHandler", "del", "loading namespace ", "网关超时 (504)", "interceptor_error", " (async", "content", "shared", "keyPrefix", "#00CCFF", "refinement", "typeof ", 'Invalid input: must include "', "Current Layer", "拖拽图片到此处松开完成上传", "getPath", "resources/templates/list", "Canvas boundary", "maxDate", "missingRef", "创建图层失败", "Cannot forward to node ", "isDuration", " throw new ValidationError([", "Full Canvas", "invalid_return_type", "给发送的图片创建文档", "_onrequest", "_clientCapabilities", "_resetTimeout", "sdpppX2", "sendToolListChanged", "length", "omit", "__proxy_forward", ".type || 'string'; if (", "[GraphStoreSynchronizer] Error broadcasting state update for ", "alert", "registerProxyForwardHandler", "_compilations", " Math.abs(Math.round(division", "INTERCEPTOR_ERROR", "{0,4}", `Get image &
Crop selection mask`, "请选择要获取的遮罩", ".validate;", "InvalidParams", "getAccountStatus API 调用失败 - {{reason}}", "validate", "needsPlural", ".else", "resolvedLanguage", "callback", "Error", "Use current selection boundary", "Images", "dataLevel", "getState", "_onnotification", "joinAs", " % 1)", "parent", "audio", "removeMiddleware", "排队等待", "ZodDiscriminatedUnion", " && self._opts.unknownFormats.indexOf(", "请选择要获取的图像", "How to get APIKey and API Secret", "Output to", "#CC3366", "arrayToEnum", "rejectImage", "刷新图片中", "sdppp/streamRequest", "_onprogress", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "PS图片", "/patternProperties/", "rootId", "选区除外", "postProcess", "heartbeatInterval", "适配至画布", "getCurrentNodeId", ", (dataPath || '')", "删除模板", "访客登录成功", "app", "isInitializing", "added", "parentData", "Running", "运行中...", " = false; else if (", "粘贴你的模型名称", ") && (missing", "notificationQueue", "done", "Stop auto run", "dataVar", "#66CC00", "reboot", " properties' ", "Outpaint (positive crop)", "context", "uiLocale", " - no connection available", "objectKeys", "clientInfo", "assertEqual", "language", "floor", "brand", "min", "getAccountStatus API failed - {{reason}}", "ComfyUI not ready", "isCUID", "_timeoutInfo", "formatType", "$$$$", "timeoutId", "Auto sync in progress…", "RH币:", "当前图层除外", "errorsText", " var async", " = false; else { ", "hasOwnProperty", " if (typeof itemIndices[item] == 'number') { ", " , params: { allowedValues: schema", "uniqueItems", ") { ", "cloneInstance", "$t(", "hours", "newdoc_canvas", "获取任务状态失败", " for interpolating ", "Auto Sync: off", "addResource", "usedLng", "item", "Required", "heartbeatTimeoutTimer", "colors", "formatArgs", "jwt", " == 'number' ? ( (", "statusText", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "initialize", "自动同步: 关闭", "nonempty", "getSchema", " , params: { type: '", "failedLoading", ") {   ", "true", "Model", "ifClause", "fallbackNS", "Upload failed: ", "curlayer_selection", "如何获取APIKey和API Secret", "sdppp", "setInterval", "No images yet", "[object Function]", "exports", "从 当前图层 获取遮罩", "fragment", "resourceStore", "设置图层的文本", "strictDefaults", "spa", "nodeStores", "greater than ", " element(s)", "[ ]*{", "ZodOptional", "[^\\%\\[\\]\\:]", ") ) {   ", "Get API Key", "Negative Crop", "missingRefs", "#CC3333", "too_small", "local", "empty", "strictNumbers", "清除参考线框架", "broadcastHandlers", "Elicitation response content does not match requested schema: ", "你的工作流", "Unsupported image input type", "tDescription", "Mask", '" already exists', "getNodeStore", "reset=false but needsReset: ", "Failed to send response: ", "+Alt 按选区裁剪", "File upload failed", "schema $id is different from id", "Host's domain name can not be converted to ", "Failed to convert widget {0}:", "输入图像", "skips", "setProperty", "waiting for queue prompt", "missingInterpolationHandler", "exactLength", "isUUID", "$comment", "用户名: {{username}}", ".errors", '"failed to compile', "#6600FF", "getPathExpr", "hasEdge", "float", "_onresponse", "Manage reusable prompt templates", ", validate.root.schema);", "此处粘贴 WebApp ID", "clearCache", "_requestHandlerAbortControllers", " === null || ", "localeCompare", " }  ", "markConnected", "提示词", " ? await ", "shorter", "openWorkflows", "secure", ".then", "ZodFunction", "catch", "not_multiple_of", "connectionManager", "cmp", "exactUsedKey", "compile", "concat", "已添加遮罩", "canReachThroughConnectedNodes", "removeRequestHandler", " , message: 'property name \\'", "nodeErrors", "ZodIntersection", "addPostProcessor", "作为智能对象导入", "任务创建已中止", ", schema", " = false; for (var ", "='; ", " , message: 'should match exactly one schema in oneOf' ", "externalListenMessageCallback", "createErrors", "notice", "Unknown error ({{code}})", "setWidgetValue", ".call(this, ", "minute", "Positive Prompt", "off", "activeWorkflow", "]) ", " = false; if (e instanceof ValidationError) ", "  for (var ", "getRunningRequestsCount", "values", "never", " || validate.schema", "Failed to pick file. Please try again.", "#33CC33", "days", " return data; ", "onTimeout", "Guest login successful", "Server does not support sampling (required for ", "maxSize", "请输入您的RunningHub API Key", "; else vErrors = null; } ", "#3366FF", "names", "My Templates", "null", "cimode", ".schemaPath === undefined) { ", "Invalid graph definition: ", "invalid_enum_value", "[A-Fa-f]", " , message: 'boolean schema is false' ", "strip", "urn", "Batch Count", "abortAllRequests", "\\%25|\\%(?!", "[^\\%\\:]", "long", "responseSchema", "_limitLength", "integer", "prepareLoading", "点击恢复默认遮罩", "exclusiveMinimum", "fromCodePoint", "minLength", "formatter", "Aborted", "items", "parent schema must have all required keywords: ", "Auto send enabled", "save", "getter", "pluralCategories", "Document {0} not found", " break; ", "未找到图层 {0}", "#66CC33", "removeKeyword", "[\\/\\?]", "App ID:", "assertIs", "connecting", "OpenAI/Google format API", "observers", "Select Image Source", "extensionManager", "resource_link", "createMessage", "firebug", "resolve", " = ''; ", "resetStats", "safeParseAsync", "assertCanSetRequestHandler", "Array.isArray(", "Server does not support notifying of tool list changes (required for ", "Input Image", "Remote", "getPluralFormsOfKey", "invalid_intersection_types", "createInstance", "Clear all", "Select layer", "当前图层范围", "Invalid forward path for proxy action", "connect", "nestingSuffix", "string", "joinValues", "); for (var ", "lastPongReceived", "describe", "properties ", "_requestHandlers", "reset", "exec", "_meta", "resolvedOptions", "nonpositive", "sdppp 选中图层", "getDefaultValueFromField", "base64", "allServers", "Disk", "getTransportInternal", "unescapePrefix", "请求超时 (408)", ", received '", `" keyword validation' `, "isConnected", "; if (", "getNodes API failed - HTTP error! status: {{status}}", "less than", "No handler for streamRequestor: ", "hbo", "coerceTypes", "detection", "useDefault", "realTransport", "finite", "画布变更后自动运行工作流", "setComfyOrgAPIKey", "comfyAPI", "图层 {{layerName}}", "sdppp/directRequest", "以当前图层边界获取画布", "return", "云端推荐：", "isNotification", "getAccountStatus API failed - HTTP error! status: {{status}}", "messageHandlers", "broadcastManager", "Please select AI service", "requestHandlers", "prototype", "deprecate", "saveMissingTo", "loadLanguages", "property ", "workflows", "filter", "ZodUnion", "stream", ") || ", "3rdParty", "#CC3399", "Confirm", "pluralRulesCache", "tools/list", "skipKeywords", "OpenAI API 错误", " , params: { passingSchemas: ", "_cachedPath", " not found in graph definition", "meta", "errs__", "merge", "anyOf", "模板名称", "comfy_api_key", " throw new ValidationError(vErrors); ", "Number must be a multiple of ", "Enter Google API Key", "Auto repick from PS", "Input not instance of ", "Empty", "ActionSet {{0}} 未找到", "OpenAI - 图片编辑", "formatters", "Mask resource is missing", "mesh", "meta-schema not available", "relative-json-pointer", "missed to resolve ", "Show Preview ({{count}} images)", "setRequestHandler", "at least", "仅当前图层范围", "if (", "sdppp/streamResponse", " } else if ( ", "isLanguageChangingTo", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "Rescoped", "set", "留空表示不限", "Intersection results could not be merged", "getStats", "Creating task...", " , validate.schema", "oneOf", "negative", "#99CC00", "yds", "removeResourceBundle", "Default Templates", "File not found: {{path}}", "未知错误", "prepend", "compiling", "交集或缩放目标为空", "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", "sourceNodeId", "initializedStoreOnce", "onmessage", "_requestMessageId", "abv", " items' ", "reduce", "已限定范围", "按选区裁剪", "pattern", "regexp", "send", "组 {{0}} 中没有第一个相关图层", "创建参考线框架", "状态检查已中止", "Username: {{username}}", "Canvas bounds", "messagePoster", "请填写提示词内容。", "acq", "valueType", "ownProperties", "flags", "fail", "result", "compileAsync", "outputs API failed - {{reason}}", "getTime", "从 当前图层 获取图像", "elicitInput", " , data: ", "translation", " , schema:  ", " , params: { comparison: ", "NOT_PATH_NOSCHEME", ".async; ", "Leave empty for no limit", " var itemIndices = {}, item; for (;i--;) { var item = ", "keys", "$dataMetaSchema", "cleanupConnection", "debugDisableHeartbeatResponse", "_parseAsync", "yud", "New Document", "Received a progress notification for an unknown token: ", "-latn", "expected", "timeout", "#FF6600", "proxy", "Invalid enum value. Expected ", "Local video", "resolveRef", "Action {{0}} 未找到", "iri", "No workflows available.", "#0066CC", "[^]", "Server does not support logging (required for ", "reason", "Server does not support notifying about resources (required for ", "ayh", " , message: 'should be equal to one of the allowed values' ", " if (Array.isArray(", "Prompt", "queue", "Unicode", " = equal(", "ZodPipeline", "defaultNS", "当前图层", "+Alt reversed mask", "No videos yet", "allErrors", "#33CC99", "get_layer_info requires layer_identify", "PluralRules", "jsonrpc", "当前选项：图层", "not-basic", "684027NNVwpe", "prp", "Waiting in queue", "#00CC00", "nullish", " delete ", "ayl", "outgoingNotificationInterceptors", "resources/subscribe", "Fetch canvas with primary boundary", ".length; ", "Layer mask", "catchall", "obj", "Content", " character(s)", "execution_interrupted", "ayp", "getAllReachableNodes", "Shift 点击或右键可切换自动发送", "Task cancelled", "当前没有活动图层", "addUsedSchema", "log", "protocol", "#3300FF", "_errors", "$id", "addEventListener", "Uncaught error in notification handler: ", "broadcastReceived", "范围 1-100", "schema is invalid: ", "getScriptPartFromCode", "加载中...", "resource", "[\\:\\@\\/\\?]", ".call( ", "$el", "kPanelBrightnessMediumGray", "every", "setupAbortHandler", "definitions", "#CC0000", "custom", "InternalError", "无法将文件作为文档打开: {{path}}", " , params: { failingKeyword: ", "removed", "从磁盘获取", "正面提示词", "multipleOfPrecision", "exists", "handleDirectProxyForward", "#0033FF", "valueSchema", "execution_success", "没有活动文档", "suffix", "_parse", "应用模板失败。", "Failed to check workflow changeTracker state:", "aec", "finished", "unrecognized_keys", "newlayer_selection", "escapeComponent", "AI 生成任务", " } if (", "tried", "lazycreate", ") : ", "mountTo", "resetRegExp", "append", "ignore", "ASCII", "清空选择", "Get image from Current Layer", " / ", "Store not found for ", "需要提供图像和提示词", "precision", "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "mergeShapes", "#CCCC00", "nonstrict", "enable", "ping", "setKey", "var customRule", "async schema referenced by sync schema", "Request handler failed: ", "metaSchema", "跳转到最后一个", "++) { if (", "Request interceptor failed for ", "extendRefs", "A request handler for ", "_pendingDebouncedNotifications", "skipCopy", "notifications/cancelled", "connected", "WebkitAppearance", "forEach", "direction", "&filename=", "No crop", ";if (", "ZodSet", "ruleErr", "kind", "throwIfAborted", "Get selection", "partialBundledLanguages", "apply", " == +", "Tutorial", "images", "setItem", "Template applied.", " , params: { limit: ", "]; var ", "order", "substr", "assertCapabilityForMethod", "[BroadcastManager] Error forwarding ", "initialState", ` , message: 'should match "' + `, "currency", "unknown", " , params: { keyword: '", "missingKeyHandler", "defaultMeta", " , ", "适配至当前图层", "__origin", "extract", "actionHandlers", "root", "Import from disk", "pst", "stateUpdate", "async format in sync schema", "模板名称已存在。", "executeOutgoingNotificationInterceptor", "utils", "callValidate", "nonExplicitSupportedLngs", ")) { ", "Refresh workflow list", "smaller than", "contextSeparator", "Get image from Canvas", "yrs", "Upload aborted", "exclusiveMaximum", "req_", "#CC9900", "nodeIndexes", " = false; else {", "SCHEMES", "property", "ZodPromise", "Main Image", "Click to get RunningHub APIKey", "addSchema", "以主图边界获取画布", "checkState", " === 0 || ", "masks", "清除视频", "capacity", "尚未配置 ComfyUI 连接，请先设置地址。", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", "getNodes API 调用失败 - HTTP 错误，状态: {{status}}", "getNodeIds", "sourceCode", `"' `, "asyncIterator", "msec", "useDefaults", "Email address's domain name can not be converted to ", "toString", "optional", "按住 Shift 键以新文档方式导入", "outgoingRequestInterceptors", "负面提示词", "root.refVal[0]", "resources/read", "format", "Please select the mask to get", "sdppp-heartbeat", "Local file", "非法的名称: {{0}}", "\\:\\:", "当前没有可用图层", "toStringTag", " if (schema", " is loaded but ", ";  ", "cleanup", "queues", "registerStreamRequestorHandler", "loadOne", "uploadImage API 调用失败 - {{reason}}", "服务不可用 (503)", "style", "Running...", "mesh:comfy", "_loadingSchemas", "elicitation/create", "rest", "keyword schema is invalid: ", "选择文件失败，请重试", "Failed to load workflows.", "设为画布", ` , message: 'should pass "`, "removeNamespaces", "removeCatch", "userAgent", "Failed to get result: {{error}}", "notification", "success", "#CC0099", "encountered", "Modify", " = true; if ( ", "Cannot register capabilities after connecting to transport", " + '\\']'", "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", "interrupt", "++) if (equal(", " === null || (", ") - division", "Failed to open file as document: {{path}}", "#CC3300", "loadSchema", "varOccurences", "not_finite", "overflow", "isTransportReady", "click to restore", "typ", "Source", "datetime", "dataProperties", "ComfyManager not found, cannot reboot", "正在上传...", "Unable to reboot ComfyUI", ") == -1 ", "reconnecting", "nullable", "right", "slice", "nid", "[GraphStoreSynchronizer] Error processing store update for ", "retryTimeout", "Entire Canvas", "基础 URL", "ZodDefault", "passContext", "actionManager", "Connecting to ComfyUI...", " = validate.schema", "Enum", " = formats[", "https", "isCUID2", "Refresh", "Workflow stopped by user", "Error compiling schema, function code:", "%[EFef]", "Generating...", "4296EdXUBt", "schemaHasRules", "_fragments", " ); if (isAdditional", "invalid_type", "Invalid name: {{0}}", "使用整个画布", "hasRequestHandler", "transports", "toUpperCase", "wait", "env", "运行失败 - 未获取到 nodeInfoList，请先执行 getNodes()。", "Prompts", "languageOnly", " else { ", "validateSchema", "filename", "  if (!", "正在连接 ComfyUI...", "detectCycles", "removeMessageEventListener", "获取像素失败: {{0}}", "#33CC00", "{6}", "') ", "transport", "_notificationHandlers", " { keyword: '", "不支持的上传类型：{{type}}", "当前任务数:", ") continue; ", "readonly", "parentElement", "Cancel", "not", "alg", "__cycle__", " in key: ", "暂无图片", `" won't get resolved as namespace "`, " } if (errors === ", "', depsCount: ", "exactly equal to ", "opts", "'].definition; var ", "symbol", `((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)`, "fromCharCode", "Defaults using", "array", "自动同步未打开", "Send all", " === undefined) { ", "getSuffixes", "_transport", "selectColor", "customRule", "[\\:\\@]", "auto", "exception", "init: i18next is already initialized. You should call init just once!", ") && ", "No workflow selected", "size", "createAsyncIterator", " = undefined; ", "formatSeparator", " = false;for (var ", "_instructions", " = false;  ", "edges", "getFixedT", "issues", "validate.schema", "broadcast", "Select a model", "verbose", "Refreshing preview...", "requestsHandled", "DEBUG", "#0000CC", "nodeId", " && !", "/required", "自动取图中…", "mcp-mesh-router", "_regex", "每批图像数", "findPathInternal", "maxLength", "保存并立即执行", "Fit to selection", "notifications/resources/list_changed", "parsedType", "fallbackLng", "safeValue", "getAccountStatus API 调用失败 - HTTP 错误，状态: {{status}}", "getSuffix", "default", "round", "编辑模板", "maxTotalTimeout", "暂无视频", "validateStreamRequestorRequest", "getDefinition", "_serverInfo", "execution_error", " != 'string') || ", "isNaN", "nss", "aborted", "openWorkflowJSON", "isULID", "本地文件", "221lYQoTA", "revocable", "UUID is not valid.", "acy", " : ", "Send to PS", "assertNotificationCapability", "pathname", "hostVersion", "errorPath", "Graph must have at least one node", "removeSchema", "删除当前", ".length ", "join", "~validate", "clear", "_refinement", "addFormat", "exclude", "=== Options ===", "maxTokens", "[MCPMiddleware]", "graphInstance", "Received host version from UXP:", "reload", "debug", "error", "ComfyUI加载失败，HTTP状态码：{{code}}", '" is used in schema at path "', "user", "lte", "(typeof ", "任务已取消", "No store found for node ", "Current", "Auto-run workflow after changes...", "Failed to save prompt templates.", "setState", "store", "Failed to open image file: {{error}}", "createWithPreprocess", "from", "shift", "/*# sourceURL=", "sdppp_assets", "ZodRecord", "pending", "effect", "Unsupported upload type: {{type}}", "self", "Import as New Document", "RequestTimeout", "index", " = true;  ", "Incoming message:", "停止自动运行", "documentElement", "#CC0033", "hasOutgoingRequestInterceptor", "#6600CC", "else", "nestingOptionsSeparator", "splice", "Paste your model name", "_unknown", "normalizeId", "cycles", "isBase64url", "date-time", "__DEFAULT__", " }; return validate;", "isEmoji", "apc", "formatLanguageCode", "Invalid proxy forwarding: current node ", "URI is not a ", " == '", "Please provide prompt content.", "无法写入{{part}}提示词：未找到对应控件。", "setLimit", "Opening workflow", " || ", " -> ", "OpenAI - Image Edit", "day", "escapeFragment", "setupGeneralBroadcastHandler", "正在等待图片上传...", ` , message: 'should match pattern "`, "Base URL", "escape", "URN can not be parsed.", "选择工作流", " ucs2length(", " , rootData )  ", "maxParallelReads", "Internal error", "clearHeartbeatTimers", "var ", "模板已应用。", "debouncedNotificationMethods", "preload", "outputs API failed - HTTP error! status: {{status}}", "handle", "languageChanged", "full", "Template removed.", "lowerCaseLng", "strictKeywords", "json", "画布范围", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "duration", " else ", "languages", "pickLocalFile", "isCIDR", "#FF33CC", "]; return false; ", " , message: 'should NOT have more than ", "Connect", "++) { vErrors[", "'[' + ", "updateKey", "RULES", "streamRequestorHandlers", "#33CC66", "equal", "刷新工作流列表", "interpolate", "Shortcut selection feature requires login", "setupNodeBindings", "forward", "ParseError", "minDate", "); if (!", "translate", "#33CCCC", "未返回图片", "dependencies", "keywords", "点击移除本地文件", "applyPostProcessor", "curlayer", "toUnicode", "prevValid", "widgetable", "getPrototypeOf", "superRefine", "Gemini 2.5 Flash Image", "regExpMap", "%25", "Crop", "dataPathArr", "secs", "storage", "stats", "ordinal", "Layer", "Select AI Service Provider", "自动获取中…", "Invalid date", "sendStreamRequestorRequest", "Task creation aborted", "alwaysFormat", "Syncing assets", "macro", "Please select the position to send image", "_getOrReturnCtx", "uri-reference", "additionalProperties", " } } ", "Run", "createTemporary", "mountedEndpoints", '" resolves to more than one schema', "2025-06-18", "Copy", "acw", "Are you sure you want to delete this template?", "ZodNever", "languageUtils", "Cannot access data ", "fcName", "loaded", "缺少主图资源", "workflow", ") break; }  ", "onclose", "loadGraphData", "ary", ` if (typeof item == 'string') item = '"' + item; `, "自动同步: 开启", "]; ", "Selection", "getHandlerTypes", " via punycode: ", "Error handling incoming message:", "; var ", "当前无法应用模板。", "nanoid", "messageQueue", "批次数量", "removeDefault", "%c ", "progress", "Current Selection", " && ", "failed parsing options string in nesting for key ", "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF", "hasResourceBundle", "Resize document for preview", "生成中...", "NOT_SCHEME", "substring", "level", "console", "baseId", "cancelled", "Sending image...", " , message: 'should be multiple of ", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", "WARNING DEPRECATED: ", " , (dataPath || '')", "getLanguagePartFromCode", "510", "registerHandler", "notifications/prompts/list_changed", "选择边界", "currentOnly", "create", "cidr", "执行成功", "isObject", '.schemaPath = "', " = true; break; }", "path", "contains", "oninitialized", "stopAll", "too_big", "resetTimeoutOnProgress", "name", "' } ", "comfyAPI is not initialized, maybe comfyUI is too old", "Action set {{0}} was not found", "++) { var ", "unwrap", "[UnexpectedJSONParseError]: ", "Invalid discriminator value. Expected ", "Gemini 2.5 Flash 图像", "getTextInfo", "uuid", "Stop", "Uploading, if the image too large, may be lag...", " === false || ", ") { if (vErrors === null) vErrors = ", "Open images from file", "mailto", "getNodes API failed - {{reason}}", "title", "Fetch current layer with canvas boundary", "__connection_established", "Module", "Error in broadcast handler for ", "画布变动后自动运行", "[\\+\\-\\.]", " == 'string' || ", "Delete", "hour", "更多操作", "9RTTMLL", " | ", "以画布边界获取当前图层", "absolute", "domainHost", "Task execution failed", "rules", "executed", "Use current layer", "新图层", "maxItems", " , params: { pattern:  ", "toLowerCase", "ajv", "' : '", "prompt_ids: ", "./sdppp_upload2", "__proto__", "more", "未配置上传器"];
  return qx = function() {
    return o;
  }, qx();
}
var Dt, Kr;
function _2() {
  return Kr || (Kr = 1, Dt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2454)], i = x.dataLevel, c = x[e(224)][t], u = x[e(442)] + x[e(910)][e(1295)](t), d = x[e(1056)] + "/" + t, l = !x[e(2167)].allErrors, f, b = e(2887) + (i || ""), h = e(295) + n, m = e(1721) + n, v = x[e(2167)][e(218)] && c && c[e(218)], k;
    v ? (s += e(992) + n + " = " + x[e(910)][e(1207)](c[e(218)], i, x[e(2392)]) + "; ", k = "schema" + n) : k = c;
    var E = this, q = "definition" + n, T = E[e(1259)], C = "", P, F, D, j, O;
    if (v && T[e(218)]) {
      O = e(275) + n;
      var N = T.validateSchema;
      s += e(551) + q + " = RULES.custom['" + t + e(2168) + O + e(2821) + q + e(1345);
    } else {
      if (j = x[e(285)](E, c, x[e(224)], x), !j) return;
      k = e(2197) + u, O = j.code, P = T[e(1544)], F = T[e(2730)], D = T[e(2405)];
    }
    var R = O + e(1516), L = "i" + n, $ = e(1959) + n, z = T[e(418)];
    if (z && !x.async) throw new Error(e(1292));
    if (!(F || D) && (s += "" + R + " = null;"), s += e(2337) + m + e(2872) + h + ";", v && T[e(218)] && (C += "}", s += " if (" + k + e(2176) + h + e(2659), N && (C += "}", s += " " + h + e(2821) + q + e(1107) + k + e(2746) + h + e(1432))), F) T.statements ? s += " " + j[e(1348)] + " " : s += " " + h + " = " + j.validate + "; ";
    else if (D) {
      var G = x[e(910)][e(1196)](x), C = "";
      G[e(2454)]++;
      var ce = e(295) + G[e(2454)];
      G.schema = j[e(1348)], G.schemaPath = "";
      var ue = x[e(2807)];
      x[e(2807)] = G.compositeRule = !0;
      var fe = x.validate(G)[e(784)](/validate\.schema/g, O);
      x[e(2807)] = G[e(2807)] = ue, s += " " + fe;
    } else {
      var oe = oe || [];
      oe[e(902)](s), s = "", s += "  " + O + e(1886), x[e(2167)][e(2110)] ? s += "this" : s += "self", P || T[e(224)] === !1 ? s += " , " + b + " " : s += e(1983) + k + e(1983) + b + e(1755) + x[e(442)] + " ", s += e(2462), x[e(2247)] != '""' && (s += e(2721) + x[e(2247)]);
      var le = i ? e(2887) + (i - 1 || "") : e(1391), ke = i ? x[e(2392)][i] : e(1263);
      s += e(1983) + le + e(1983) + ke + e(2333);
      var ye = s;
      s = oe[e(469)](), T[e(638)] === !1 ? (s += " " + h + e(2821), z && (s += e(2850)), s += "" + ye + "; ") : z ? (R = "customErrors" + n, s += e(551) + R + e(778) + h + " = await " + ye + "; } catch (e) { " + h + e(1570) + R + " = e.errors; else throw e; } ") : s += " " + R + e(1171) + h + " = " + ye + "; ";
    }
    if (T[e(309)] && (s += e(537) + le + ") " + b + e(2821) + le + "[" + ke + "];"), s += "" + C, T[e(295)]) l && (s += " if (true) { ");
    else {
      s += " if ( ", T.valid === void 0 ? (s += " !", D ? s += "" + ce : s += "" + h) : s += " " + !T.valid + " ", s += ") { ", f = E[e(1174)];
      var oe = oe || [];
      oe.push(s), s = "";
      var oe = oe || [];
      oe[e(902)](s), s = "", x[e(1560)] !== !1 ? (s += e(2151) + (f || "custom") + "' , dataPath: (dataPath || '') + " + x[e(2247)] + e(192) + x[e(910)][e(1250)](d) + e(1980) + E[e(1174)] + e(2482), x[e(2167)][e(389)] !== !1 && (s += e(2066) + E[e(1174)] + e(1674)), x[e(2167)][e(2200)] && (s += e(624) + u + e(2799) + x[e(442)] + " , data: " + b + " "), s += e(1134)) : s += " {} ";
      var Me = s;
      s = oe[e(469)](), !x[e(2807)] && l ? x[e(418)] ? s += " throw new ValidationError([" + Me + "]); " : s += e(553) + Me + e(2357) : s += e(2804) + Me + e(1109);
      var Ee = s;
      s = oe[e(469)](), F ? T[e(638)] ? T[e(638)] != e(2344) && (s += e(1571) + L + "=" + m + "; " + L + "<errors; " + L + e(2485) + $ + e(2574) + L + e(350) + $ + e(643) + $ + e(188) + x[e(2247)] + e(1676) + $ + e(1591) + $ + e(2473) + d + e(2570), x[e(2167)].verbose && (s += " " + $ + e(491) + k + "; " + $ + e(238) + b + "; "), s += " } ") : T[e(638)] === !1 ? s += " " + Ee + " " : (s += e(537) + m + e(1240) + Ee + " } else {  for (var " + L + "=" + m + "; " + L + e(2704) + L + "++) { var " + $ + e(2574) + L + "]; if (" + $ + e(643) + $ + ".dataPath = (dataPath || '') + " + x.errorPath + e(1676) + $ + ".schemaPath === undefined) { " + $ + e(2473) + d + e(2570), x[e(2167)][e(2200)] && (s += " " + $ + e(491) + k + "; " + $ + e(238) + b + "; "), s += e(2410)) : D ? (s += e(208), x.createErrors !== !1 ? (s += e(2151) + (f || e(1893)) + e(1016) + x.errorPath + e(192) + x.util[e(1250)](d) + e(1980) + E[e(1174)] + "' } ", x[e(2167)].messages !== !1 && (s += e(2066) + E[e(1174)] + `" keyword validation' `), x[e(2167)][e(2200)] && (s += e(624) + u + " , parentSchema: validate.schema" + x[e(442)] + e(1798) + b + " "), s += e(1134)) : s += e(1136), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(2807)] && l && (x[e(418)] ? s += e(1726) : s += e(900))) : T[e(638)] === !1 ? s += " " + Ee + " " : (s += e(1832) + R + e(767) + R + e(2577) + R + "); errors = vErrors.length;  for (var " + L + "=" + m + "; " + L + e(2704) + L + e(2485) + $ + e(2574) + L + e(350) + $ + ".dataPath === undefined) " + $ + e(188) + x[e(2247)] + e(2049) + $ + e(2473) + d + '";  ', x[e(2167)][e(2200)] && (s += " " + $ + e(491) + k + "; " + $ + e(238) + b + "; "), s += " } } else { " + Ee + e(1134)), s += e(1134), l && (s += " else { ");
    }
    return s;
  }), Dt;
}
const O2 = "http://json-schema.org/draft-07/schema#", D2 = a(983), j2 = a(1139), M2 = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: a(1605), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: a(239) }, { default: 0 }] }, simpleTypes: { enum: [a(2173), a(1001), a(1605), a(1589), "number", a(2844), a(1653)] }, stringArray: { type: "array", items: { type: a(1653) }, uniqueItems: !0, default: [] } }, L2 = ["object", "boolean"], $2 = { $id: { type: a(1653), format: a(2408) }, $schema: { type: a(1653), format: a(622) }, $ref: { type: a(1653), format: a(2408) }, $comment: { type: a(1653) }, title: { type: a(1653) }, description: { type: "string" }, default: !0, readOnly: { type: a(1001), default: !1 }, examples: { type: a(2173), items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: a(1206) }, exclusiveMaximum: { type: a(1206) }, minimum: { type: "number" }, exclusiveMinimum: { type: a(1206) }, maxLength: { $ref: a(239) }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: a(1653), format: a(2830) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: a(963) }], default: !0 }, maxItems: { $ref: a(239) }, minItems: { $ref: a(1047) }, uniqueItems: { type: a(1001), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: a(239) }, minProperties: { $ref: a(1047) }, required: { $ref: a(916) }, additionalProperties: { $ref: "#" }, definitions: { type: a(2844), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: a(2844), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: a(2844), additionalProperties: { $ref: "#" }, propertyNames: { format: a(2830) }, default: {} }, dependencies: { type: a(2844), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: a(916) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: a(1287) }, { type: a(2173), items: { $ref: a(1287) }, minItems: 1, uniqueItems: !0 }] }, format: { type: a(1653) }, contentMediaType: { type: a(1653) }, contentEncoding: { type: a(1653) }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: a(963) }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: a(963) }, not: { $ref: "#" } }, wn = { $schema: O2, $id: D2, title: j2, definitions: M2, type: L2, properties: $2, default: !0 };
var jt, Gr;
function U2() {
  const o = a;
  if (Gr) return jt;
  Gr = 1;
  var x = wn;
  return jt = { $id: o(2460), definitions: { simpleTypes: x[o(1891)][o(2668)] }, type: o(2844), dependencies: { schema: [o(1348)], $data: [o(1348)], statements: [o(2730)], valid: { not: { required: [o(2405)] } } }, properties: { type: x[o(657)].type, schema: { type: o(1001) }, statements: { type: "boolean" }, dependencies: { type: "array", items: { type: o(1653) } }, metaSchema: { type: o(2844) }, modifying: { type: o(1001) }, valid: { type: "boolean" }, $data: { type: o(1001) }, async: { type: o(1001) }, errors: { anyOf: [{ type: "boolean" }, { const: o(2344) }] } } }, jt;
}
var Mt, Jr;
function H2() {
  if (Jr) return Mt;
  Jr = 1;
  var o = /^[a-z_$][a-z0-9_$-]*$/i, x = _2(), t = U2();
  Mt = { add: r, get: e, remove: s, validate: n };
  function r(i, c) {
    const u = K;
    var d = this[u(2363)];
    if (d[u(2379)][i]) throw new Error(u(629) + i + " is already defined");
    if (!o[u(1055)](i)) throw new Error(u(629) + i + u(2661));
    if (c) {
      this[u(2841)](c, !0);
      var l = c.type;
      if (Array[u(977)](l))
        for (var f = 0; f < l[u(1332)]; f++) h(i, l[f], c);
      else h(i, l, c);
      var b = c[u(1942)];
      b && (c[u(218)] && this[u(2801)][u(218)] && (b = { anyOf: [b, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] }), c.validateSchema = this[u(1544)](b, !0));
    }
    d[u(2379)][i] = d[u(1288)][i] = !0;
    function h(m, v, k) {
      const E = u;
      for (var q, T = 0; T < d.length; T++) {
        var C = d[T];
        if (C[E(190)] == v) {
          q = C;
          break;
        }
      }
      !q && (q = { type: v, rules: [] }, d[E(902)](q));
      var P = { keyword: m, definition: k, custom: !0, code: x, implements: k[E(2789)] };
      q.rules[E(902)](P), d[E(1893)][m] = P;
    }
    return this;
  }
  function e(i) {
    const c = K;
    var u = this.RULES[c(1893)][i];
    return u ? u[c(1259)] : this.RULES.keywords[i] || !1;
  }
  function s(i) {
    const c = K;
    var u = this[c(2363)];
    delete u.keywords[i], delete u[c(1288)][i], delete u[c(1893)][i];
    for (var d = 0; d < u.length; d++)
      for (var l = u[d].rules, f = 0; f < l.length; f++)
        if (l[f].keyword == i) {
          l[c(2301)](f, 1);
          break;
        }
    return this;
  }
  function n(i, c) {
    const u = K;
    n.errors = null;
    var d = this._validateKeyword = this._validateKeyword || this[u(1544)](t, !0);
    if (d(i)) return !0;
    if (n[u(638)] = d[u(638)], c) throw new Error(u(733) + this[u(1425)](d[u(638)]));
    return !1;
  }
  return Mt;
}
const z2 = a(983), V2 = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", B2 = a(688), W2 = "object", Z2 = [a(218)], K2 = { $data: { type: a(1653), anyOf: [{ format: a(1738) }, { format: a(689) }] } }, G2 = !1, J2 = { $schema: z2, $id: V2, description: B2, type: W2, required: Z2, properties: K2, additionalProperties: G2 };
var Lt, Qr;
function Q2() {
  const o = a;
  if (Qr) return Lt;
  Qr = 1;
  var x = i2(), t = fa(), r = c2(), e = gn(), s = yn(), n = u2(), i = T2(), c = q2(), u = W0();
  Lt = m, m[o(1700)][o(1348)] = v, m[o(1700)][o(1544)] = k, m[o(1700)].addSchema = E, m[o(1700)][o(1035)] = q, m.prototype.validateSchema = T, m[o(1700)][o(1454)] = P, m[o(1700)][o(2249)] = j, m[o(1700)][o(2256)] = ue, m.prototype.errorsText = ce, m[o(1700)]._addSchema = N, m[o(1700)][o(774)] = R, m[o(1700)][o(1793)] = A2();
  var d = H2();
  m[o(1700)].addKeyword = d[o(479)], m[o(1700)][o(544)] = d[o(1094)], m.prototype[o(1623)] = d[o(940)], m[o(1700)].validateKeyword = d.validate;
  var l = ha();
  m[o(1294)] = l.Validation, m[o(673)] = l[o(2646)], m[o(1807)] = c;
  var f = o(427), b = ["removeAdditional", "useDefaults", "coerceTypes", o(1474)], h = [o(2698)];
  function m(_) {
    const A = o;
    if (!(this instanceof m)) return new m(_);
    _ = this[A(2801)] = u.copy(_) || {}, Ee(this), this[A(840)] = {}, this[A(605)] = {}, this[A(2125)] = {}, this[A(272)] = n(_.format), this[A(2852)] = _.cache || new r(), this[A(2059)] = {}, this[A(1339)] = [], this.RULES = i(), this[A(317)] = L(_), _.loopRequired = _.loopRequired || 1 / 0, _.errorDataPath == A(2011) && (_._errorDataPathProperty = !0), _[A(1045)] === void 0 && (_.serialize = s), this._metaOpts = Me(this), _[A(2726)] && le(this), _[A(2379)] && ke(this), fe(this), typeof _.meta == A(2844) && this[A(1035)](_.meta), _[A(2101)] && this.addKeyword("nullable", { metaSchema: { type: "boolean" } }), oe(this);
  }
  function v(_, A) {
    const H = o;
    var J;
    if (typeof _ == "string") {
      if (J = this[H(1454)](_), !J) throw new Error(H(348) + _ + '"');
    } else {
      var Q = this._addSchema(_);
      J = Q[H(1348)] || this[H(774)](Q);
    }
    var V = J(A);
    return J[H(2532)] !== !0 && (this.errors = J[H(638)]), V;
  }
  function k(_, A) {
    const H = o;
    var J = this._addSchema(_, void 0, A);
    return J.validate || this[H(774)](J);
  }
  function E(_, A, H, J) {
    const Q = o;
    if (Array[Q(977)](_)) {
      for (var V = 0; V < _[Q(1332)]; V++) this[Q(2015)](_[V], void 0, H, J);
      return this;
    }
    var X = this[Q(317)](_);
    if (X !== void 0 && typeof X != Q(1653)) throw new Error(Q(2769));
    return A = t[Q(2304)](A || X), ye(this, A), this[Q(840)][A] = this[Q(1124)](_, H, J, !0), this;
  }
  function q(_, A, H) {
    return this.addSchema(_, A, H, !0), this;
  }
  function T(_, A) {
    const H = o;
    var J = _[H(684)];
    if (J !== void 0 && typeof J != "string") throw new Error(H(957));
    if (J = J || this._opts[H(1982)] || C(this), !J) return this[H(665)][H(196)](H(1737)), this[H(638)] = null, !0;
    var Q = this.validate(J, _);
    if (!Q && A) {
      var V = H(1881) + this[H(1425)]();
      if (this[H(2801)][H(2139)] == H(1872)) this[H(665)].error(V);
      else throw new Error(V);
    }
    return Q;
  }
  function C(_) {
    const A = o;
    var H = _[A(2801)][A(1720)];
    return _._opts[A(1982)] = typeof H == "object" ? _[A(317)](H) || H : _[A(1454)](f) ? f : void 0, _[A(2801)][A(1982)];
  }
  function P(_) {
    const A = o;
    var H = D(this, _);
    switch (typeof H) {
      case "object":
        return H[A(1348)] || this[A(774)](H);
      case A(1653):
        return this.getSchema(H);
      case A(2694):
        return F(this, _);
    }
  }
  function F(_, A) {
    const H = o;
    var J = t[H(224)].call(_, { schema: {} }, A);
    if (J) {
      var Q = J.schema, V = J.root, X = J.baseId, ie = x[H(377)](_, Q, V, void 0, X);
      return _._fragments[A] = new e({ ref: A, fragment: !0, schema: Q, root: V, baseId: X, validate: ie }), ie;
    }
  }
  function D(_, A) {
    const H = o;
    return A = t[H(2304)](A), _[H(840)][A] || _._refs[A] || _[H(2125)][A];
  }
  function j(_) {
    const A = o;
    if (_ instanceof RegExp) return O(this, this[A(840)], _), O(this, this[A(605)], _), this;
    switch (typeof _) {
      case A(2694):
        return O(this, this[A(840)]), O(this, this[A(605)]), this[A(2852)].clear(), this;
      case "string":
        var H = D(this, _);
        return H && this[A(2852)][A(1301)](H.cacheKey), delete this._schemas[_], delete this._refs[_], this;
      case A(2844):
        var J = this[A(2801)][A(1045)], Q = J ? J(_) : _;
        this[A(2852)][A(1301)](Q);
        var V = this[A(317)](_);
        V && (V = t[A(2304)](V), delete this[A(840)][V], delete this[A(605)][V]);
    }
    return this;
  }
  function O(_, A, H) {
    const J = o;
    for (var Q in A) {
      var V = A[Q];
      !V.meta && (!H || H[J(1055)](Q)) && (_[J(2852)][J(1301)](V[J(2744)]), delete A[Q]);
    }
  }
  function N(_, A, H, J) {
    const Q = o;
    if (typeof _ != Q(2844) && typeof _ != Q(1001)) throw new Error(Q(737));
    var V = this[Q(2801)][Q(1045)], X = V ? V(_) : _, ie = this[Q(2852)][Q(1094)](X);
    if (ie) return ie;
    J = J || this[Q(2801)][Q(1871)] !== !1;
    var se = t.normalizeId(this[Q(317)](_));
    se && J && ye(this, se);
    var xe = this[Q(2801)].validateSchema !== !1 && !A, Le;
    xe && !(Le = se && se == t.normalizeId(_.$schema)) && this[Q(2139)](_, !0);
    var Ae = t[Q(2621)][Q(377)](this, _), He = new e({ id: se, schema: _, localRefs: Ae, cacheKey: X, meta: H });
    return se[0] != "#" && J && (this[Q(605)][se] = He), this[Q(2852)][Q(422)](X, He), xe && Le && this.validateSchema(_, !0), He;
  }
  function R(_, A) {
    const H = o;
    if (_[H(1765)])
      return _.validate = V, V[H(224)] = _[H(224)], V[H(638)] = null, V.root = A || V, _[H(224)][H(2532)] === !0 && (V[H(2532)] = !0), V;
    _.compiling = !0;
    var J;
    _.meta && (J = this[H(2801)], this._opts = this[H(775)]);
    var Q;
    try {
      Q = x.call(this, _.schema, A, _[H(2827)]);
    } catch (X) {
      throw delete _[H(1348)], X;
    } finally {
      _[H(1765)] = !1, _.meta && (this[H(2801)] = J);
    }
    return _.validate = Q, _[H(985)] = Q[H(985)], _.refVal = Q[H(874)], _[H(1988)] = Q[H(1988)], Q;
    function V() {
      const X = H;
      var ie = _.validate, se = ie[X(1964)](this, arguments);
      return V.errors = ie.errors, se;
    }
  }
  function L(_) {
    const A = o;
    switch (_[A(400)]) {
      case A(2182):
        return G;
      case "id":
        return $;
      default:
        return z;
    }
  }
  function $(_) {
    const A = o;
    return _.$id && this.logger[A(196)]("schema $id ignored", _.$id), _.id;
  }
  function z(_) {
    const A = o;
    return _.id && this.logger[A(196)](A(2632), _.id), _[A(1876)];
  }
  function G(_) {
    const A = o;
    if (_[A(1876)] && _.id && _[A(1876)] != _.id) throw new Error(A(1504));
    return _[A(1876)] || _.id;
  }
  function ce(_, A) {
    const H = o;
    if (_ = _ || this[H(638)], !_) return H(641);
    A = A || {};
    for (var J = A[H(1201)] === void 0 ? ", " : A[H(1201)], Q = A.dataVar === void 0 ? H(2887) : A[H(1400)], V = "", X = 0; X < _.length; X++) {
      var ie = _[X];
      ie && (V += Q + ie[H(830)] + " " + ie[H(615)] + J);
    }
    return V[H(2103)](0, -J[H(1332)]);
  }
  function ue(_, A) {
    return typeof A == o(1653) && (A = new RegExp(A)), this._formats[_] = A, this;
  }
  function fe(_) {
    const A = o;
    var H;
    if (_[A(2801)][A(218)] && (H = J2, _[A(1035)](H, H[A(1876)], !0)), _[A(2801)].meta !== !1) {
      var J = wn;
      _[A(2801)].$data && (J = c(J, h)), _.addMetaSchema(J, f, !0), _._refs["http://json-schema.org/schema"] = f;
    }
  }
  function oe(_) {
    const A = o;
    var H = _[A(2801)][A(2853)];
    if (H)
      if (Array[A(977)](H)) _[A(2015)](H);
      else
        for (var J in H) _[A(2015)](H[J], J);
  }
  function le(_) {
    const A = o;
    for (var H in _[A(2801)][A(2726)]) {
      var J = _[A(2801)][A(2726)][H];
      _[A(2256)](H, J);
    }
  }
  function ke(_) {
    const A = o;
    for (var H in _._opts.keywords) {
      var J = _[A(2801)][A(2379)][H];
      _.addKeyword(H, J);
    }
  }
  function ye(_, A) {
    const H = o;
    if (_._schemas[A] || _._refs[A]) throw new Error('schema with key or id "' + A + H(1498));
  }
  function Me(_) {
    for (var H = u[o(1196)](_._opts), J = 0; J < b.length; J++) delete H[b[J]];
    return H;
  }
  function Ee(_) {
    const A = o;
    var H = _[A(2801)][A(665)];
    if (H === !1) _[A(665)] = { log: Je, warn: Je, error: Je };
    else {
      if (H === void 0 && (H = console), !(typeof H == A(2844) && H[A(1872)] && H.warn && H.error)) throw new Error("logger must implement log, warn and error methods");
      _[A(665)] = H;
    }
  }
  function Je() {
  }
  return Lt;
}
var X2 = Q2();
const Y2 = Bs(X2);
class eu extends t2 {
  constructor(x, t) {
    const r = a;
    var e;
    super(t), this[r(2229)] = x, this._capabilities = (e = t == null ? void 0 : t[r(894)]) !== null && e !== void 0 ? e : {}, this[r(2192)] = t == null ? void 0 : t.instructions, this[r(1741)](sn, (s) => this[r(2878)](s)), this[r(259)](nn, () => {
      const s = r;
      var n;
      return (n = this[s(2477)]) === null || n === void 0 ? void 0 : n[s(377)](this);
    });
  }
  registerCapabilities(x) {
    const t = a;
    if (this[t(2149)]) throw new Error(t(2077));
    this._capabilities = a2(this[t(1067)], x);
  }
  [a(1974)](x) {
    const t = a;
    var r, e, s;
    switch (x) {
      case "sampling/createMessage":
        if (!(!((r = this[t(1328)]) === null || r === void 0) && r[t(850)])) throw new Error(t(1051) + x + ")");
        break;
      case "elicitation/create":
        if (!(!((e = this._clientCapabilities) === null || e === void 0) && e[t(570)])) throw new Error(t(1277) + x + ")");
        break;
      case t(2823):
        if (!(!((s = this[t(1328)]) === null || s === void 0) && s.roots)) throw new Error("Client does not support listing roots (required for " + x + ")");
        break;
    }
  }
  [a(2244)](x) {
    const t = a;
    switch (x) {
      case "notifications/message":
        if (!this[t(1067)][t(493)]) throw new Error(t(1827) + x + ")");
        break;
      case t(2760):
      case t(2216):
        if (!this[t(1067)].resources) throw new Error(t(1829) + x + ")");
        break;
      case "notifications/tools/list_changed":
        if (!this[t(1067)][t(234)]) throw new Error(t(1641) + x + ")");
        break;
      case t(2466):
        if (!this._capabilities.prompts) throw new Error("Server does not support notifying of prompt list changes (required for " + x + ")");
        break;
    }
  }
  assertRequestHandlerCapability(x) {
    const t = a;
    switch (x) {
      case t(2563):
        if (!this[t(1067)][t(850)]) throw new Error(t(1582) + x + ")");
        break;
      case t(237):
        if (!this._capabilities[t(493)]) throw new Error(t(1827) + x + ")");
        break;
      case t(2683):
      case t(417):
        if (!this[t(1067)][t(1299)]) throw new Error(t(2879) + x + ")");
        break;
      case t(2901):
      case t(1316):
      case t(2038):
        if (!this[t(1067)][t(554)]) throw new Error(t(2710) + x + ")");
        break;
      case "tools/call":
      case t(1714):
        if (!this[t(1067)][t(234)]) throw new Error(t(843) + x + ")");
        break;
    }
  }
  async [a(2878)](x) {
    const t = a, r = x.params[t(1217)];
    return this._clientCapabilities = x.params.capabilities, this[t(1098)] = x[t(1133)][t(1409)], { protocolVersion: ec[t(2798)](r) ? r : Qs, capabilities: this[t(337)](), serverInfo: this[t(2229)], ...this[t(2192)] && { instructions: this[t(2192)] } };
  }
  getClientCapabilities() {
    return this[a(1328)];
  }
  [a(287)]() {
    return this[a(1098)];
  }
  [a(337)]() {
    return this[a(1067)];
  }
  async ping() {
    const x = a;
    return this[x(2752)]({ method: x(1937) }, ta);
  }
  async [a(1633)](x, t) {
    return this[a(2752)]({ method: "sampling/createMessage", params: x }, pn, t);
  }
  async [a(1797)](x, t) {
    const r = a, e = await this[r(2752)]({ method: r(2060), params: x }, mn, t);
    if (e.action === r(2727) && e[r(1306)]) try {
      const s = new Y2(), n = s[r(1544)](x.requestedSchema);
      if (!n(e.content)) throw new _0(y0[r(1346)], r(1493) + s[r(1425)](n[r(638)]));
    } catch (s) {
      throw s instanceof _0 ? s : new _0(y0[r(1894)], "Error validating elicitation response: " + s);
    }
    return e;
  }
  async listRoots(x, t) {
    const r = a;
    return this[r(2752)]({ method: r(2823), params: x }, bn, t);
  }
  async [a(219)](x) {
    return this.notification({ method: "notifications/message", params: x });
  }
  async [a(2808)](x) {
    const t = a;
    return this[t(2071)]({ method: t(2760), params: x });
  }
  async [a(189)]() {
    const x = a;
    return this[x(2071)]({ method: x(2216) });
  }
  async [a(1331)]() {
    const x = a;
    return this.notification({ method: x(358) });
  }
  async sendPromptListChanged() {
    const x = a;
    return this[x(2071)]({ method: x(2466) });
  }
}
class xu extends Error {
  constructor(x, t) {
    const r = a;
    super(r(811) + x + r(1186) + t + "ms"), this.name = "HeartbeatTimeoutError";
  }
}
const px = /* @__PURE__ */ new Map();
class tu {
  constructor(x) {
    const t = a;
    if (this[t(2440)] = [], this[t(1656)] = Date[t(315)](), px.has(x.posterIdentifier)) {
      const i = px[t(1094)](x[t(863)]);
      i && i[t(639)]();
    }
    this[t(863)] = x[t(863)], this[t(1785)] = x.messagePoster, this[t(1244)] = x[t(1244)], this[t(2144)] = x[t(2144)];
    const r = x.heartbeatInterval ?? x[t(2697)], e = x[t(2697)] ?? x.heartbeatInterval, s = this[t(1127)](r), n = this[t(1127)](e);
    s && n && (this[t(1382)] = s, this[t(2697)] = n), this[t(1809)] = x[t(1809)] ?? !1, px[t(1750)](this.posterIdentifier, this), this[t(380)] = this[t(380)][t(591)](this), this.externalListenMessageCallback = this[t(1244)](this[t(380)]);
  }
  [a(1127)](x) {
    if (typeof x === a(1206) && !(!Number.isFinite(x) || x <= 0))
      return x;
  }
  [a(912)]() {
    const x = a;
    return typeof this[x(1382)] == "number" && typeof this.heartbeatTimeout === x(1206);
  }
  [a(380)](x) {
    const t = a;
    if (x[t(863)] === this[t(863)]) {
      if (x.channel === t(2041)) {
        x[t(190)] === t(1937) && !this[t(1809)] ? this.messagePoster({ channel: t(2041), posterIdentifier: this.posterIdentifier, type: t(725), timestamp: x[t(1261)] }) : x.type === t(725) && (this[t(1656)] = Date[t(315)](), this[t(1444)] && (clearTimeout(this.heartbeatTimeoutTimer), this[t(1444)] = void 0));
        return;
      }
      x.channel === t(1465) && (this[t(1770)] && "payload" in x ? this.onmessage(x[t(2549)]) : t(2549) in x && this[t(2440)][t(902)](x[t(2549)]));
    }
  }
  async [a(2540)]() {
    const x = a;
    for (; this.messageQueue[x(1332)] > 0; ) {
      const t = this.messageQueue[x(2281)]();
      t && this[x(1770)] && this.onmessage(t);
    }
    this.isHeartbeatEnabled() && this[x(171)]();
  }
  [a(171)]() {
    const x = a;
    if (!this[x(912)]()) return;
    const t = this[x(1382)], r = this[x(2697)];
    this[x(2336)](), this[x(291)] = setInterval(() => {
      const e = x, s = Date[e(315)]();
      this[e(1785)]({ channel: "sdppp-heartbeat", posterIdentifier: this[e(863)], type: e(1937), timestamp: s }), this[e(1444)] = setTimeout(() => {
        const n = e, i = new xu(this[n(863)], r);
        this.onerror && this.onerror(i);
      }, r);
    }, t);
  }
  [a(2336)]() {
    const x = a;
    this[x(291)] && (clearInterval(this.heartbeatTimer), this[x(291)] = void 0), this[x(1444)] && (clearTimeout(this[x(1444)]), this.heartbeatTimeoutTimer = void 0);
  }
  async [a(1779)](x, t) {
    const r = a;
    this[r(1785)]({ channel: r(1465), posterIdentifier: this[r(863)], payload: x });
  }
  async close() {
    const x = a;
    this[x(2336)](), px.delete(this.posterIdentifier), this.removeMessageEventListener(this[x(1559)]);
  }
}
const au = ox[a(2636)](a(1736));
async function Sn() {
  const o = a;
  if (!window.uxpHost) return;
  const x = new tu({ posterIdentifier: o(666), messagePoster: (e) => {
    const s = o;
    window[s(996)][s(2547)](e, "*");
  }, addMessageEventListener: (e) => {
    const s = o, n = (i) => {
      e(i.data);
    };
    return window.addEventListener(s(615), n), n;
  }, removeMessageEventListener: (e) => {
    const s = o;
    window[s(607)](s(615), e);
  } });
  x[o(860)] = (e) => {
    au(o(2679), e);
  };
  const t = new eu({ name: o(666), version: o(738) }, {}), r = new Fo(t);
  return await r[o(1651)](x), window.uxpHost[o(2547)]({ channel: o(2209), meshName: "comfy", action: o(1651), version: o(2464) }, "*"), await Pe.connect(o(999), r);
}
const ru = Object.freeze(Object[a(2592)]({ __proto__: null, connectUXP: Sn, mcpMesh: Pe }, Symbol[a(2046)], { value: a(2502) }));
function kn(o) {
  const x = a, t = Ne[x(1153)] || Ne.extensionManager[x(2425)], r = t[x(1568)];
  if (o && o[x(2587)] && o.detail.id !== r[x(735)].id) return;
  const e = Pe.store[x(1357)]()[x(596)], s = ea(Ne[x(167)], r);
  En(s, e) && Pe[x(2277)].setState({ widgetableStructure: s }), Pe[x(2277)].setState({ widgetableValues: Nx(Ne[x(167)]) });
}
C0[a(1877)]("graphChanged", kn), C0.addEventListener(a(2517), () => {
  const o = a;
  Pe[o(2277)].setState({ widgetableValues: Nx(Ne[o(167)]) });
});
let Xr = 0, Yr = !0, es = "";
function Pn() {
  const o = a;
  requestAnimationFrame(Pn);
  const x = Ne[o(1153)] || Ne.extensionManager.workflow, t = x[o(1568)], r = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[o(2475)]) || "", s = (t == null ? void 0 : t.isPersisted) || !0;
  if (r === Xr && e === es && s === Yr) return;
  const n = Date[o(315)]();
  Xr = r, es = e, Yr = s;
  const i = ea(Ne.graph, t), c = Nx(Ne[o(167)]);
  Pe[o(2277)][o(2276)]({ widgetableStructure: i, widgetableValues: c }), console[o(1872)]("graph update cost " + (Date.now() - n) + "ms"), setTimeout(() => {
    const u = o;
    if (t !== x[u(1568)]) return;
    const d = ea(Ne[u(167)], t), l = Nx(Ne[u(167)]);
    En(d, i) && Pe[u(2277)][u(2276)]({ widgetableStructure: d }), Pe[u(2277)].setState({ widgetableValues: l });
  }, 800);
}
requestAnimationFrame(Pn);
function En(o, x) {
  const t = a;
  return o[t(2008)].length !== x[t(2008)][t(1332)] || JSON[t(306)](o.nodeIndexes) !== JSON[t(306)](x[t(2008)]) || JSON.stringify(o.nodes) !== JSON.stringify(x[t(1064)]);
}
let xs = !1;
async function su() {
  const o = a;
  if (xs) return Promise[o(1635)]();
  C0[o(2268)] && Pe.store[o(2276)]({ comfyUserToken: C0[o(2268)] }), xs = !0;
}
ox[a(2636)](a(2811));
async function nu(o, x, t) {
  const r = a;
  x[r(1877)](r(2444), ({ detail: n }) => {
    const i = r;
    if (!n) return;
    let c = 0, u = 0;
    !isNaN(n[i(998)] / n[i(718)]) && (c = Math.round(n[i(998)] / n[i(718)] * 100));
    const d = n.node, l = graph[i(1064)][i(1036)]((f) => f.id == d);
    if (l && l[i(1972)]) {
      const f = 100 / graph.nodes.length;
      u = Math.round(l[i(1972)] * f) + (c ? c / 100 * f : 0);
    }
    Pe.store[i(2276)]({ progress: c, graphProgress: u });
  }), x[r(1877)](r(2745), (n) => {
    var c;
    const i = r;
    (c = n[i(2587)]) != null && c[i(2812)] && Pe[i(2277)].setState({ queueSize: n[i(2587)][i(2812)].queue_remaining });
  }), x.addEventListener(r(2230), ({ detail: n }) => {
    const i = r;
    if (Pe[i(2277)][i(2276)]({ executingNodeTitle: "", executingNodeID: "", lastError: n[i(445)] }), n[i(521)]) {
      const c = o[i(167)][i(1064)][i(1036)]((u) => u.id == n.node_id);
      Pe[i(2277)].setState({ widgetableErrors: { [n[i(521)]]: "[" + ((c == null ? void 0 : c[i(2499)]) || n[i(521)]) + "]" + n.exception_message } });
    }
  }), x.addEventListener("executing", (n) => {
    const i = r, c = n.detail, u = graph[i(1064)][i(1036)]((d) => d.id == c);
    if (u) {
      const d = 100 / graph[i(1064)][i(1332)];
      Pe[i(2277)].setState({ executingNodeTitle: u[i(2499)], executingNodeID: u.id, graphProgress: Math[i(2223)](u[i(1972)] * d) });
    }
  }), x[r(1877)](r(1865), () => {
    const n = r;
    Pe[n(2277)][n(2276)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x[r(1877)](r(565), ({ detail: n }) => {
    const i = r;
    Pe.store[i(2276)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date.now() });
  });
  const e = /* @__PURE__ */ new Map();
  x[r(1877)](r(1905), (n) => {
    const i = r;
    Pe.store[i(2276)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[i(1094)](n[i(2587)][i(532)]) || [])[i(2742)]((u) => ({ url: u, thumbnail: u }));
    zi(n[i(2587)].prompt_id, c), e[i(882)](n.detail[i(532)]);
  }), x[r(1877)](r(2517), (n) => {
    const i = r, c = e.get(n[i(2587)].prompt_id) || [];
    n.detail[i(681)] && Array[i(977)](n.detail[i(681)][i(1967)]) && n[i(2587)][i(681)].images[i(1332)] > 0 && c.push(...n[i(2587)][i(681)][i(1967)][i(1706)]((u) => u[i(190)] == i(681))[i(2742)]((u) => {
      const d = i;
      return location[d(1204)] + location.pathname + d(2671) + u[d(190)] + d(1955) + encodeURIComponent(u.filename) + (u[d(346)] ? d(274) + encodeURIComponent(u.subfolder) : "");
    })), n[i(2587)][i(681)] && Array[i(977)](n[i(2587)][i(681)][i(2283)]) && n[i(2587)][i(681)][i(2283)][i(1332)] > 0 && c[i(902)](...n[i(2587)][i(681)][i(2283)].map((u) => {
      const d = i;
      return location[d(1204)] + location[d(2245)] + d(157) + encodeURIComponent(u);
    })), e.set(n[i(2587)].prompt_id, c);
  });
  let s = null;
  x[r(1877)](r(2100), (n) => {
    s = setTimeout(() => {
      const i = K;
      Pe[i(2277)][i(2276)]({ comfyWSState: i(2100) });
    }, 1e3);
  }), x.addEventListener("reconnected", (n) => {
    const i = r;
    Pe[i(2277)].setState({ comfyWSState: i(1951) }), clearTimeout(s);
  });
}
let $t = [];
(async function() {
  var x, t, r, e, s, n;
  const o = a;
  if (typeof gradioApp == o(2694)) {
    try {
      const i = (t = (x = window[o(1688)]) == null ? void 0 : x[o(1388)]) == null ? void 0 : t[o(1388)], c = (e = (r = window[o(1688)]) == null ? void 0 : r.ui) == null ? void 0 : e[o(1887)], u = (n = (s = window[o(1688)]) == null ? void 0 : s.api) == null ? void 0 : n[o(699)];
      if (!i || !u || !c) throw new Error(o(2483));
      await su(), await Sn(), await nu(i, u, c), import(o(776))[o(723)]((d) => {
        d[o(2222)](xx, 2);
      });
    } catch (i) {
      $t[o(902)](i.stack || i.message || i);
    }
    await new Promise((i) => setTimeout(i, 2e3)), $t[o(1332)] && console[o(2265)]($t[0]);
  }
})();
