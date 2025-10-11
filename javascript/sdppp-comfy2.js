var jn = Object.defineProperty;
var Mn = (i, x, t) => x in i ? jn(i, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[x] = t;
var m0 = (i, x, t) => Mn(i, typeof x != "symbol" ? x + "" : x, t);
var s = K;
(function(i, x) {
  for (var t = K, r = i(); ; )
    try {
      var e = parseInt(t(1555)) / 1 * (-parseInt(t(2532)) / 2) + parseInt(t(1210)) / 3 + -parseInt(t(2340)) / 4 + -parseInt(t(540)) / 5 + -parseInt(t(1342)) / 6 + -parseInt(t(2350)) / 7 * (-parseInt(t(1550)) / 8) + parseInt(t(447)) / 9 * (parseInt(t(1896)) / 10);
      if (e === x) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Fx, 908159);
const T0 = window.comfyAPI.app[s(830)];
window[s(2725)].ui[s(1668)];
const Ae = window[s(2725)].api[s(1520)];
var _a;
class Ln {
  constructor(x) {
    m0(this, _a);
    var t = s;
    this.definition = x;
    const r = this[t(1999)]();
    if (!r[t(2073)]) throw new Error("Invalid graph definition: " + r[t(2400)][t(1372)](", "));
  }
  [(_a = s(1984), s(1999))]() {
    var x = s;
    const t = [];
    (!this[x(1984)][x(530)] || Object[x(2559)](this[x(1984)][x(530)])[x(1027)] === 0) && t[x(1020)](x(2053));
    for (const [e, a] of this[x(1984)][x(1245)])
      !this.definition[x(530)][e] && t[x(1020)](x(506) + e), !this[x(1984)][x(530)][a] && t.push(x(868) + a);
    const r = this[x(2593)]();
    return !r[x(2073)] && t[x(1020)](...r[x(2400)]), { valid: t[x(1027)] === 0, errors: t };
  }
  buildDirectedAdjacencyList() {
    var x = s;
    const t = /* @__PURE__ */ new Map();
    for (const r of Object[x(2559)](this[x(1984)][x(530)]))
      t[x(2151)](r, []);
    for (const [r, e] of this[x(1984)].edges) {
      const a = t[x(2558)](r) || [];
      a.push(e), t[x(2151)](r, a);
    }
    return t;
  }
  [s(2593)]() {
    var x = s;
    const t = [], r = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), a = this.buildDirectedAdjacencyList(), n = (o, c) => {
      var u = K;
      if (e[u(1263)](o)) {
        const d = c[u(393)](o), l = c.slice(d)[u(383)](o);
        return t[u(1020)]("Cycle detected: " + l.join(u(372))), !0;
      }
      if (r.has(o)) return !1;
      r[u(1988)](o), e[u(1988)](o);
      const f = a[u(2558)](o) || [];
      for (const d of f)
        if (n(d, [...c, o])) return !0;
      return e[u(2394)](o), !1;
    };
    for (const o of Object.keys(this[x(1984)].nodes))
      !r.has(o) && n(o, []);
    return { valid: t[x(1027)] === 0, errors: t };
  }
  [s(2004)]() {
    var x = s;
    const t = /* @__PURE__ */ new Map();
    for (const r of Object[x(2559)](this.definition[x(530)]))
      t.set(r, []);
    for (const [r, e] of this.definition[x(1245)]) {
      const a = t[x(2558)](r) || [];
      a[x(1020)](e), t.set(r, a);
      const n = t[x(2558)](e) || [];
      n[x(1020)](r), t[x(2151)](e, n);
    }
    return t;
  }
  [s(663)](x) {
    var t = s;
    return this[t(2004)]()[t(2558)](x) || [];
  }
  [s(1078)](x) {
    var t = s;
    return this.definition[t(530)][x];
  }
  [s(609)]() {
    var x = s;
    return Object[x(2559)](this.definition.nodes);
  }
  [s(982)](x, t) {
    var r = s;
    return this[r(1984)][r(1245)][r(584)](([e, a]) => e === x && a === t || e === t && a === x);
  }
  findPath(x, t) {
    var r = s;
    if (x === t) return [x];
    const e = this[r(2004)](), a = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; a.length > 0; ) {
      const { nodeId: o, path: c } = a[r(2310)]();
      if (n[r(1263)](o)) continue;
      if (n.add(o), o === t) return c;
      const u = e[r(2558)](o) || [];
      for (const f of u)
        !n[r(1263)](f) && a[r(1020)]({ nodeId: f, path: [...c, f] });
    }
    return null;
  }
  [s(1002)](x, t) {
    var r = s;
    return this[r(1898)](x, t) !== null;
  }
  [s(707)]() {
    var x = s;
    return { ...this[x(1984)] };
  }
}
const kr = (i) => {
  let x;
  const t = /* @__PURE__ */ new Set(), r = (u, f) => {
    var d = K;
    const l = typeof u == "function" ? u(x) : u;
    if (!Object.is(l, x)) {
      const v = x;
      x = f ?? (typeof l !== d(644) || l === null) ? l : Object[d(2390)]({}, x, l), t.forEach((h) => h(x, v));
    }
  }, e = () => x, a = () => c, n = (u) => {
    var f = K;
    return t[f(1988)](u), () => t[f(2394)](u);
  }, o = { setState: r, getState: e, getInitialState: a, subscribe: n }, c = x = i(r, e, o);
  return o;
}, $n = (i) => i ? kr(i) : kr;
var N0;
(function(i) {
  var x = s;
  i[x(1821)] = (a) => {
  };
  function t(a) {
  }
  i[x(1170)] = t;
  function r(a) {
    throw new Error();
  }
  i[x(578)] = r, i[x(502)] = (a) => {
    const n = {};
    for (const o of a)
      n[o] = o;
    return n;
  }, i.getValidEnumValues = (a) => {
    var n = x;
    const o = i[n(1053)](a)[n(2674)]((u) => typeof a[a[u]] !== n(2479)), c = {};
    for (const u of o)
      c[u] = a[u];
    return i[n(882)](c);
  }, i[x(882)] = (a) => {
    var n = x;
    return i[n(1053)](a)[n(802)](function(o) {
      return a[o];
    });
  }, i[x(1053)] = typeof Object[x(2559)] === x(2138) ? (a) => Object[x(2559)](a) : (a) => {
    var n = x;
    const o = [];
    for (const c in a)
      Object[n(1745)][n(2036)][n(1580)](a, c) && o[n(1020)](c);
    return o;
  }, i[x(2142)] = (a, n) => {
    for (const o of a)
      if (n(o)) return o;
  }, i.isInteger = typeof Number[x(1250)] === x(2138) ? (a) => Number[x(1250)](a) : (a) => typeof a === x(2479) && Number.isFinite(a) && Math[x(1124)](a) === a;
  function e(a, n = x(1001)) {
    var o = x;
    return a[o(802)]((c) => typeof c === o(1278) ? "'" + c + "'" : c)[o(1372)](n);
  }
  i[x(512)] = e, i.jsonStringifyReplacer = (a, n) => {
    var o = x;
    return typeof n === o(2587) ? n[o(1339)]() : n;
  };
})(N0 || (N0 = {}));
var Er;
(function(i) {
  var x = s;
  i[x(994)] = (t, r) => ({ ...t, ...r });
})(Er || (Er = {}));
const x0 = N0[s(502)]([s(1278), "nan", "number", s(1155), s(1323), s(2665), s(1125), s(2587), s(1383), s(2138), s(1584), "null", s(2052), "object", s(2210), s(366), s(1616), s(1752), s(802), s(2151)]), Pe = (i) => {
  var x = s;
  switch (typeof i) {
    case x(1584):
      return x0[x(1584)];
    case "string":
      return x0[x(1278)];
    case x(2479):
      return Number[x(1677)](i) ? x0[x(422)] : x0.number;
    case "boolean":
      return x0[x(2665)];
    case x(2138):
      return x0.function;
    case "bigint":
      return x0[x(2587)];
    case "symbol":
      return x0[x(1383)];
    case x(644):
      return Array[x(710)](i) ? x0.array : i === null ? x0[x(697)] : i[x(2397)] && typeof i[x(2397)] === x(2138) && i[x(1615)] && typeof i[x(1615)] == "function" ? x0[x(366)] : typeof Map !== x(1584) && i instanceof Map ? x0[x(802)] : typeof Set < "u" && i instanceof Set ? x0.set : typeof Date < "u" && i instanceof Date ? x0.date : x0[x(644)];
    default:
      return x0.unknown;
  }
}, B = N0[s(502)](["invalid_type", s(1034), "custom", "invalid_union", s(1416), s(1140), s(505), s(1380), "invalid_return_type", s(463), s(1371), s(1185), s(381), s(2128), s(549), s(2110)]);
function K(i, x) {
  var t = Fx();
  return K = function(r, e) {
    r = r - 350;
    var a = t[r];
    return a;
  }, K(i, x);
}
class ke extends Error {
  get [s(2400)]() {
    return this.issues;
  }
  constructor(x) {
    var t = s;
    super(), this[t(2654)] = [], this.addIssue = (e) => {
      var a = t;
      this[a(2654)] = [...this[a(2654)], e];
    }, this[t(874)] = (e = []) => {
      var a = t;
      this[a(2654)] = [...this[a(2654)], ...e];
    };
    const r = new.target[t(1745)];
    Object[t(2272)] ? Object[t(2272)](this, r) : this.__proto__ = r, this.name = t(923), this.issues = x;
  }
  [s(1533)](x) {
    const t = x || function(a) {
      return a.message;
    }, r = { _errors: [] }, e = (a) => {
      var n = K;
      for (const o of a.issues)
        if (o[n(1749)] === n(2457)) o.unionErrors[n(802)](e);
        else if (o.code === n(848)) e(o[n(2398)]);
        else if (o[n(1749)] === n(1380)) e(o[n(2573)]);
        else if (o[n(2610)][n(1027)] === 0) r[n(657)][n(1020)](t(o));
        else {
          let c = r, u = 0;
          for (; u < o.path[n(1027)]; ) {
            const f = o.path[u];
            u === o[n(2610)][n(1027)] - 1 ? (c[f] = c[f] || { _errors: [] }, c[f]._errors[n(1020)](t(o))) : c[f] = c[f] || { _errors: [] }, c = c[f], u++;
          }
        }
    };
    return e(this), r;
  }
  static [s(1392)](x) {
    var t = s;
    if (!(x instanceof ke)) throw new Error(t(1193) + x);
  }
  [s(1339)]() {
    var x = s;
    return this[x(1912)];
  }
  get [s(1912)]() {
    var x = s;
    return JSON[x(2351)](this[x(2654)], N0[x(495)], 2);
  }
  get [s(679)]() {
    var x = s;
    return this[x(2654)][x(1027)] === 0;
  }
  [s(2083)](x = (t) => t[s(1912)]) {
    var t = s;
    const r = {}, e = [];
    for (const a of this[t(2654)])
      if (a.path[t(1027)] > 0) {
        const n = a.path[0];
        r[n] = r[n] || [], r[n][t(1020)](x(a));
      } else e.push(x(a));
    return { formErrors: e, fieldErrors: r };
  }
  get [s(1300)]() {
    var x = s;
    return this[x(2083)]();
  }
}
ke[s(1640)] = (i) => new ke(i);
const Mt = (i, x) => {
  var t = s;
  let r;
  switch (i[t(1749)]) {
    case B[t(2595)]:
      i[t(728)] === x0[t(1584)] ? r = t(1473) : r = t(2758) + i[t(630)] + t(399) + i.received;
      break;
    case B[t(1034)]:
      r = t(1581) + JSON[t(2351)](i[t(630)], N0.jsonStringifyReplacer);
      break;
    case B[t(505)]:
      r = t(2274) + N0[t(512)](i[t(2559)], ", ");
      break;
    case B[t(2457)]:
      r = t(2081);
      break;
    case B[t(1416)]:
      r = "Invalid discriminator value. Expected " + N0[t(512)](i.options);
      break;
    case B[t(1140)]:
      r = t(1166) + N0[t(512)](i[t(1582)]) + ", received '" + i.received + "'";
      break;
    case B.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case B[t(848)]:
      r = t(2135);
      break;
    case B[t(463)]:
      r = t(521);
      break;
    case B.invalid_string:
      typeof i[t(1287)] === t(644) ? t(539) in i[t(1287)] ? (r = t(983) + i.validation[t(539)] + '"', typeof i[t(1287)][t(2548)] === t(2479) && (r = r + " at one or more positions greater than or equal to " + i[t(1287)][t(2548)])) : "startsWith" in i.validation ? r = t(1546) + i[t(1287)][t(410)] + '"' : t(816) in i[t(1287)] ? r = t(2264) + i.validation[t(816)] + '"' : N0[t(578)](i[t(1287)]) : i.validation !== t(2e3) ? r = t(1401) + i[t(1287)] : r = "Invalid";
      break;
    case B[t(1185)]:
      i[t(2122)] === t(2052) ? r = t(2570) + (i[t(2273)] ? t(1387) : i.inclusive ? "at least" : t(2195)) + " " + i.minimum + " element(s)" : i.type === t(1278) ? r = "String must contain " + (i[t(2273)] ? t(1387) : i[t(971)] ? "at least" : t(1526)) + " " + i[t(714)] + t(2257) : i[t(2122)] === "number" ? r = "Number must be " + (i.exact ? t(491) : i.inclusive ? t(870) : t(1829)) + i.minimum : i[t(2122)] === t(2587) ? r = t(1337) + (i[t(2273)] ? t(491) : i[t(971)] ? t(870) : t(1829)) + i[t(714)] : i[t(2122)] === t(1125) ? r = t(951) + (i[t(2273)] ? "exactly equal to " : i[t(971)] ? t(870) : "greater than ") + new Date(Number(i.minimum)) : r = t(2081);
      break;
    case B[t(381)]:
      i[t(2122)] === t(2052) ? r = t(2570) + (i[t(2273)] ? "exactly" : i[t(971)] ? t(499) : "less than") + " " + i.maximum + t(1675) : i[t(2122)] === "string" ? r = t(2682) + (i[t(2273)] ? "exactly" : i.inclusive ? t(499) : t(2679)) + " " + i[t(2005)] + t(2257) : i[t(2122)] === t(2479) ? r = "Number must be " + (i[t(2273)] ? t(1387) : i[t(971)] ? t(2157) : t(1641)) + " " + i[t(2005)] : i[t(2122)] === t(2587) ? r = "BigInt must be " + (i[t(2273)] ? "exactly" : i.inclusive ? t(2157) : t(1641)) + " " + i.maximum : i[t(2122)] === "date" ? r = t(951) + (i[t(2273)] ? t(1387) : i[t(971)] ? t(2415) : "smaller than") + " " + new Date(Number(i.maximum)) : r = t(2081);
      break;
    case B[t(1694)]:
      r = t(2081);
      break;
    case B.invalid_intersection_types:
      r = t(2019);
      break;
    case B[t(549)]:
      r = "Number must be a multiple of " + i.multipleOf;
      break;
    case B[t(2110)]:
      r = "Number must be finite";
      break;
    default:
      r = x.defaultError, N0[t(578)](i);
  }
  return { message: r };
};
let zn = Mt;
function Hn() {
  return zn;
}
const Un = (i) => {
  var x = s;
  const { data: t, path: r, errorMaps: e, issueData: a } = i, n = [...r, ...a.path || []], o = { ...a, path: n };
  if (a[x(1912)] !== void 0) return { ...a, path: n, message: a[x(1912)] };
  let c = "";
  const u = e[x(2674)]((f) => !!f).slice()[x(1885)]();
  for (const f of u)
    c = f(o, { data: t, defaultError: c })[x(1912)];
  return { ...a, path: n, message: c };
};
function _(i, x) {
  var t = s;
  const r = Hn(), e = Un({ issueData: x, data: i.data, path: i[t(2610)], errorMaps: [i[t(2346)].contextualErrorMap, i[t(2301)], r, r === Mt ? void 0 : Mt][t(2674)]((a) => !!a) });
  i[t(2346)].issues[t(1020)](e);
}
class ee {
  constructor() {
    var x = s;
    this[x(1551)] = x(2073);
  }
  [s(839)]() {
    var x = s;
    this[x(1551)] === x(2073) && (this.value = x(839));
  }
  [s(1747)]() {
    var x = s;
    this.value !== x(1019) && (this[x(1551)] = x(1019));
  }
  static [s(2098)](x, t) {
    var r = s;
    const e = [];
    for (const a of t) {
      if (a[r(975)] === r(1019)) return h0;
      a[r(975)] === r(839) && x[r(839)](), e[r(1020)](a.value);
    }
    return { status: x[r(1551)], value: e };
  }
  static async [s(1504)](x, t) {
    var r = s;
    const e = [];
    for (const a of t) {
      const n = await a[r(2640)], o = await a[r(1551)];
      e[r(1020)]({ key: n, value: o });
    }
    return ee[r(1521)](x, e);
  }
  static mergeObjectSync(x, t) {
    var r = s;
    const e = {};
    for (const a of t) {
      const { key: n, value: o } = a;
      if (n.status === "aborted" || o[r(975)] === r(1019)) return h0;
      n[r(975)] === r(839) && x[r(839)](), o[r(975)] === r(839) && x[r(839)](), n[r(1551)] !== r(2092) && (typeof o.value !== r(1584) || a.alwaysSet) && (e[n[r(1551)]] = o[r(1551)]);
    }
    return { status: x.value, value: e };
  }
}
const h0 = Object.freeze({ status: "aborted" }), Qe = (i) => ({ status: s(839), value: i }), re = (i) => ({ status: s(2073), value: i }), Pr = (i) => i[s(975)] === s(1019), Ir = (i) => i.status === s(839), Ue = (i) => i[s(975)] === "valid", px = (i) => typeof Promise !== s(1584) && i instanceof Promise;
var a0;
(function(i) {
  var x = s;
  i[x(1340)] = (t) => typeof t === x(1278) ? { message: t } : t || {}, i.toString = (t) => typeof t === x(1278) ? t : t == null ? void 0 : t[x(1912)];
})(a0 || (a0 = {}));
class me {
  constructor(x, t, r, e) {
    var a = s;
    this[a(2476)] = [], this[a(2209)] = x, this.data = t, this._path = r, this._key = e;
  }
  get [s(2610)]() {
    var x = s;
    return !this[x(2476)][x(1027)] && (Array.isArray(this[x(419)]) ? this[x(2476)][x(1020)](...this[x(1824)], ...this[x(419)]) : this._cachedPath.push(...this[x(1824)], this[x(419)])), this[x(2476)];
  }
}
const Rr = (i, x) => {
  var t = s;
  if (Ue(x)) return { success: !0, data: x[t(1551)] };
  if (!i[t(2346)][t(2654)][t(1027)]) throw new Error(t(483));
  return { success: !1, get error() {
    var r = t;
    if (this[r(1171)]) return this[r(1171)];
    const e = new ke(i[r(2346)][r(2654)]);
    return this[r(1171)] = e, this[r(1171)];
  } };
};
function b0(i) {
  if (!i) return {};
  const { errorMap: x, invalid_type_error: t, required_error: r, description: e } = i;
  if (x && (t || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return x ? { errorMap: x, description: e } : { errorMap: (n, o) => {
    var c = K;
    const { message: u } = i;
    return n[c(1749)] === c(1140) ? { message: u ?? o.defaultError } : typeof o[c(984)] === c(1584) ? { message: u ?? r ?? o.defaultError } : n[c(1749)] !== c(2595) ? { message: o.defaultError } : { message: u ?? t ?? o.defaultError };
  }, description: e };
}
class E0 {
  get [s(511)]() {
    var x = s;
    return this[x(407)][x(511)];
  }
  _getType(x) {
    var t = s;
    return Pe(x[t(984)]);
  }
  [s(871)](x, t) {
    var r = s;
    return t || { common: x[r(2209)][r(2346)], data: x[r(984)], parsedType: Pe(x.data), schemaErrorMap: this[r(407)].errorMap, path: x[r(2610)], parent: x[r(2209)] };
  }
  [s(1348)](x) {
    var t = s;
    return { status: new ee(), ctx: { common: x[t(2209)].common, data: x[t(984)], parsedType: Pe(x.data), schemaErrorMap: this[t(407)].errorMap, path: x[t(2610)], parent: x[t(2209)] } };
  }
  _parseSync(x) {
    var t = s;
    const r = this[t(2650)](x);
    if (px(r)) throw new Error(t(965));
    return r;
  }
  [s(1476)](x) {
    var t = s;
    const r = this[t(2650)](x);
    return Promise[t(639)](r);
  }
  [s(2673)](x, t) {
    var r = s;
    const e = this[r(792)](x, t);
    if (e[r(2220)]) return e[r(984)];
    throw e[r(2463)];
  }
  safeParse(x, t) {
    var r = s;
    const e = { common: { issues: [], async: (t == null ? void 0 : t[r(1927)]) ?? !1, contextualErrorMap: t == null ? void 0 : t.errorMap }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this[r(407)].errorMap, parent: null, data: x, parsedType: Pe(x) }, a = this[r(2602)]({ data: x, path: e[r(2610)], parent: e });
    return Rr(e, a);
  }
  [s(351)](x) {
    var e, a;
    var t = s;
    const r = { common: { issues: [], async: !!this[t(1597)].async }, path: [], schemaErrorMap: this[t(407)][t(2099)], parent: null, data: x, parsedType: Pe(x) };
    if (!this[t(1597)].async) try {
      const n = this._parseSync({ data: x, path: [], parent: r });
      return Ue(n) ? { value: n[t(1551)] } : { issues: r[t(2346)][t(2654)] };
    } catch (n) {
      (a = (e = n == null ? void 0 : n[t(1912)]) == null ? void 0 : e[t(955)]()) != null && a[t(539)]("encountered") && (this[t(1597)][t(1927)] = !0), r.common = { issues: [], async: !0 };
    }
    return this._parseAsync({ data: x, path: [], parent: r })[t(2397)]((n) => Ue(n) ? { value: n.value } : { issues: r[t(2346)].issues });
  }
  async parseAsync(x, t) {
    var r = s;
    const e = await this[r(2113)](x, t);
    if (e[r(2220)]) return e[r(984)];
    throw e[r(2463)];
  }
  async [s(2113)](x, t) {
    var r = s;
    const e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[r(2099)], async: !0 }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this[r(407)].errorMap, parent: null, data: x, parsedType: Pe(x) }, a = this[r(2650)]({ data: x, path: e[r(2610)], parent: e }), n = await (px(a) ? a : Promise.resolve(a));
    return Rr(e, n);
  }
  refine(x, t) {
    var r = s;
    const e = (a) => {
      var n = K;
      return typeof t === n(1278) || typeof t === n(1584) ? { message: t } : typeof t == "function" ? t(a) : t;
    };
    return this[r(1082)]((a, n) => {
      var o = r;
      const c = x(a), u = () => n[o(2097)]({ code: B[o(1694)], ...e(a) });
      return typeof Promise !== o(1584) && c instanceof Promise ? c[o(2397)]((f) => f ? !0 : (u(), !1)) : c ? !0 : (u(), !1);
    });
  }
  [s(2241)](x, t) {
    var r = s;
    return this[r(1082)]((e, a) => {
      var n = r;
      return x(e) ? !0 : (a[n(2097)](typeof t === n(2138) ? t(e, a) : t), !1);
    });
  }
  _refinement(x) {
    var t = s;
    return new qe({ schema: this, typeName: p0[t(702)], effect: { type: t(2241), refinement: x } });
  }
  [s(2528)](x) {
    var t = s;
    return this[t(1082)](x);
  }
  constructor(x) {
    var t = s;
    this[t(389)] = this[t(2113)], this[t(407)] = x, this[t(2673)] = this[t(2673)][t(960)](this), this[t(792)] = this[t(792)][t(960)](this), this.parseAsync = this[t(1011)].bind(this), this[t(2113)] = this.safeParseAsync.bind(this), this[t(389)] = this[t(389)][t(960)](this), this.refine = this[t(996)][t(960)](this), this[t(2241)] = this.refinement[t(960)](this), this[t(2528)] = this[t(2528)][t(960)](this), this[t(1823)] = this.optional[t(960)](this), this[t(2526)] = this.nullable[t(960)](this), this[t(761)] = this.nullish[t(960)](this), this[t(2052)] = this[t(2052)][t(960)](this), this[t(366)] = this.promise[t(960)](this), this.or = this.or[t(960)](this), this[t(2087)] = this[t(2087)][t(960)](this), this[t(1136)] = this[t(1136)][t(960)](this), this[t(2158)] = this[t(2158)][t(960)](this), this[t(1479)] = this.default[t(960)](this), this[t(1615)] = this[t(1615)][t(960)](this), this[t(1781)] = this[t(1781)].bind(this), this.pipe = this[t(742)][t(960)](this), this[t(1500)] = this[t(1500)].bind(this), this[t(706)] = this[t(706)][t(960)](this), this[t(493)] = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: t(2067), validate: (r) => this["~validate"](r) };
  }
  [s(1823)]() {
    var x = s;
    return Se[x(1640)](this, this[x(407)]);
  }
  [s(2526)]() {
    var x = s;
    return je[x(1640)](this, this._def);
  }
  [s(761)]() {
    var x = s;
    return this[x(2526)]()[x(1823)]();
  }
  [s(2052)]() {
    var x = s;
    return pe[x(1640)](this);
  }
  [s(366)]() {
    var x = s;
    return wx[x(1640)](this, this._def);
  }
  or(x) {
    var t = s;
    return vx[t(1640)]([this, x], this._def);
  }
  [s(2087)](x) {
    var t = s;
    return gx.create(this, x, this[t(407)]);
  }
  [s(1136)](x) {
    var t = s;
    return new qe({ ...b0(this[t(407)]), schema: this, typeName: p0[t(702)], effect: { type: "transform", transform: x } });
  }
  [s(1479)](x) {
    var t = s;
    const r = typeof x === t(2138) ? x : () => x;
    return new Sx({ ...b0(this[t(407)]), innerType: this, defaultValue: r, typeName: p0[t(1298)] });
  }
  [s(2158)]() {
    var x = s;
    return new Us({ typeName: p0[x(1101)], type: this, ...b0(this[x(407)]) });
  }
  [s(1615)](x) {
    var t = s;
    const r = typeof x == "function" ? x : () => x;
    return new kx({ ...b0(this[t(407)]), innerType: this, catchValue: r, typeName: p0.ZodCatch });
  }
  describe(x) {
    var t = s;
    const r = this[t(2611)];
    return new r({ ...this[t(407)], description: x });
  }
  pipe(x) {
    var t = s;
    return rr[t(1640)](this, x);
  }
  [s(1500)]() {
    var x = s;
    return Ex[x(1640)](this);
  }
  isOptional() {
    var x = s;
    return this.safeParse(void 0)[x(2220)];
  }
  [s(706)]() {
    var x = s;
    return this[x(792)](null)[x(2220)];
  }
}
const Vn = /^c[^\s-]{8,}$/i, Wn = /^[0-9a-z]+$/, Zn = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Bn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Kn = /^[a-z0-9_-]{21}$/i, Jn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Gn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Qn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Xn = s(1146);
let $x;
const Yn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, _n = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ei = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, xi = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ti = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ri = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, $s = s(1051), ai = new RegExp("^" + $s + "$");
function zs(i) {
  var x = s;
  let t = x(1121);
  i[x(2303)] ? t = t + "\\.\\d{" + i[x(2303)] + "}" : i[x(2303)] == null && (t = t + "(\\.\\d+)?");
  const r = i[x(2303)] ? "+" : "?";
  return "([01]\\d|2[0-3]):[0-5]\\d(:" + t + ")" + r;
}
function si(i) {
  return new RegExp("^" + zs(i) + "$");
}
function ni(i) {
  var x = s;
  let t = $s + "T" + zs(i);
  const r = [];
  return r[x(1020)](i[x(2713)] ? "Z?" : "Z"), i[x(604)] && r[x(1020)](x(1877)), t = t + "(" + r[x(1372)]("|") + ")", new RegExp("^" + t + "$");
}
function ii(i, x) {
  var t = s;
  return !!((x === "v4" || !x) && Yn[t(1063)](i) || (x === "v6" || !x) && ei[t(1063)](i));
}
function oi(i, x) {
  var t = s;
  if (!Jn.test(i)) return !1;
  try {
    const [r] = i[t(2432)](".");
    if (!r) return !1;
    const e = r[t(1024)](/-/g, "+")[t(1024)](/_/g, "/")[t(2624)](r[t(1027)] + (4 - r[t(1027)] % 4) % 4, "="), a = JSON.parse(atob(e));
    return !(typeof a != "object" || a === null || t(2105) in a && (a == null ? void 0 : a[t(2105)]) !== t(2620) || !a[t(1108)] || x && a.alg !== x);
  } catch {
    return !1;
  }
}
function ci(i, x) {
  var t = s;
  return !!((x === "v4" || !x) && _n[t(1063)](i) || (x === "v6" || !x) && xi.test(i));
}
class we extends E0 {
  [s(2650)](x) {
    var t = s;
    if (this[t(407)][t(498)] && (x[t(984)] = String(x[t(984)])), this[t(2700)](x) !== x0[t(1278)]) {
      const n = this[t(871)](x);
      return _(n, { code: B.invalid_type, expected: x0.string, received: n[t(917)] }), h0;
    }
    const e = new ee();
    let a;
    for (const n of this[t(407)][t(565)])
      if (n[t(1737)] === t(1614)) x[t(984)][t(1027)] < n[t(1551)] && (a = this._getOrReturnCtx(x, a), _(a, { code: B[t(1185)], minimum: n[t(1551)], type: t(1278), inclusive: !0, exact: !1, message: n[t(1912)] }), e[t(839)]());
      else if (n[t(1737)] === "max") x[t(984)][t(1027)] > n[t(1551)] && (a = this[t(871)](x, a), _(a, { code: B[t(381)], maximum: n.value, type: t(1278), inclusive: !0, exact: !1, message: n[t(1912)] }), e[t(839)]());
      else if (n[t(1737)] === "length") {
        const o = x.data[t(1027)] > n[t(1551)], c = x[t(984)][t(1027)] < n[t(1551)];
        (o || c) && (a = this[t(871)](x, a), o ? _(a, { code: B[t(381)], maximum: n[t(1551)], type: t(1278), inclusive: !0, exact: !0, message: n[t(1912)] }) : c && _(a, { code: B[t(1185)], minimum: n[t(1551)], type: "string", inclusive: !0, exact: !0, message: n[t(1912)] }), e[t(839)]());
      } else if (n.kind === t(1094)) !Qn.test(x[t(984)]) && (a = this[t(871)](x, a), _(a, { validation: "email", code: B[t(1371)], message: n[t(1912)] }), e[t(839)]());
      else if (n.kind === t(1240)) !$x && ($x = new RegExp(Xn, "u")), !$x[t(1063)](x[t(984)]) && (a = this[t(871)](x, a), _(a, { validation: t(1240), code: B[t(1371)], message: n[t(1912)] }), e[t(839)]());
      else if (n.kind === t(2221)) !Bn[t(1063)](x[t(984)]) && (a = this[t(871)](x, a), _(a, { validation: t(2221), code: B.invalid_string, message: n.message }), e.dirty());
      else if (n[t(1737)] === t(2625)) !Kn[t(1063)](x[t(984)]) && (a = this[t(871)](x, a), _(a, { validation: t(2625), code: B[t(1371)], message: n.message }), e[t(839)]());
      else if (n.kind === t(614)) !Vn[t(1063)](x[t(984)]) && (a = this[t(871)](x, a), _(a, { validation: t(614), code: B[t(1371)], message: n.message }), e[t(839)]());
      else if (n[t(1737)] === t(1897)) !Wn[t(1063)](x.data) && (a = this[t(871)](x, a), _(a, { validation: "cuid2", code: B[t(1371)], message: n[t(1912)] }), e[t(839)]());
      else if (n[t(1737)] === t(1160)) !Zn[t(1063)](x[t(984)]) && (a = this[t(871)](x, a), _(a, { validation: "ulid", code: B[t(1371)], message: n[t(1912)] }), e[t(839)]());
      else if (n[t(1737)] === t(828)) try {
        new URL(x[t(984)]);
      } catch {
        a = this[t(871)](x, a), _(a, { validation: "url", code: B.invalid_string, message: n.message }), e[t(839)]();
      }
      else
        n.kind === t(2e3) ? (n[t(2e3)][t(481)] = 0, !n.regex.test(x.data) && (a = this._getOrReturnCtx(x, a), _(a, { validation: "regex", code: B.invalid_string, message: n[t(1912)] }), e.dirty())) : n.kind === t(2235) ? x[t(984)] = x.data[t(2235)]() : n[t(1737)] === t(539) ? !x[t(984)][t(539)](n.value, n[t(2548)]) && (a = this[t(871)](x, a), _(a, { code: B[t(1371)], validation: { includes: n.value, position: n[t(2548)] }, message: n[t(1912)] }), e.dirty()) : n[t(1737)] === t(955) ? x[t(984)] = x.data[t(955)]() : n[t(1737)] === t(660) ? x[t(984)] = x.data[t(660)]() : n[t(1737)] === t(410) ? !x[t(984)][t(410)](n[t(1551)]) && (a = this._getOrReturnCtx(x, a), _(a, { code: B[t(1371)], validation: { startsWith: n[t(1551)] }, message: n.message }), e[t(839)]()) : n[t(1737)] === t(816) ? !x[t(984)].endsWith(n[t(1551)]) && (a = this[t(871)](x, a), _(a, { code: B[t(1371)], validation: { endsWith: n[t(1551)] }, message: n[t(1912)] }), e[t(839)]()) : n.kind === t(708) ? !ni(n)[t(1063)](x[t(984)]) && (a = this[t(871)](x, a), _(a, { code: B[t(1371)], validation: t(708), message: n.message }), e.dirty()) : n[t(1737)] === t(1125) ? !ai.test(x[t(984)]) && (a = this[t(871)](x, a), _(a, { code: B[t(1371)], validation: t(1125), message: n[t(1912)] }), e[t(839)]()) : n[t(1737)] === t(1996) ? !si(n)[t(1063)](x[t(984)]) && (a = this[t(871)](x, a), _(a, { code: B[t(1371)], validation: t(1996), message: n.message }), e[t(839)]()) : n.kind === t(1938) ? !Gn[t(1063)](x[t(984)]) && (a = this[t(871)](x, a), _(a, { validation: t(1938), code: B[t(1371)], message: n.message }), e[t(839)]()) : n.kind === "ip" ? !ii(x.data, n[t(2234)]) && (a = this._getOrReturnCtx(x, a), _(a, { validation: "ip", code: B.invalid_string, message: n.message }), e[t(839)]()) : n.kind === t(1098) ? !oi(x[t(984)], n[t(1108)]) && (a = this[t(871)](x, a), _(a, { validation: t(1098), code: B.invalid_string, message: n[t(1912)] }), e[t(839)]()) : n[t(1737)] === t(513) ? !ci(x[t(984)], n[t(2234)]) && (a = this[t(871)](x, a), _(a, { validation: t(513), code: B.invalid_string, message: n[t(1912)] }), e.dirty()) : n[t(1737)] === t(2633) ? !ti[t(1063)](x.data) && (a = this[t(871)](x, a), _(a, { validation: t(2633), code: B[t(1371)], message: n[t(1912)] }), e[t(839)]()) : n[t(1737)] === t(1310) ? !ri[t(1063)](x[t(984)]) && (a = this[t(871)](x, a), _(a, { validation: "base64url", code: B[t(1371)], message: n[t(1912)] }), e[t(839)]()) : N0.assertNever(n);
    return { status: e.value, value: x[t(984)] };
  }
  _regex(x, t, r) {
    var e = s;
    return this[e(2241)]((a) => x[e(1063)](a), { validation: t, code: B[e(1371)], ...a0[e(1340)](r) });
  }
  [s(2015)](x) {
    var t = s;
    return new we({ ...this[t(407)], checks: [...this[t(407)][t(565)], x] });
  }
  email(x) {
    var t = s;
    return this._addCheck({ kind: t(1094), ...a0[t(1340)](x) });
  }
  url(x) {
    var t = s;
    return this._addCheck({ kind: t(828), ...a0.errToObj(x) });
  }
  [s(1240)](x) {
    var t = s;
    return this._addCheck({ kind: t(1240), ...a0[t(1340)](x) });
  }
  [s(2221)](x) {
    var t = s;
    return this[t(2015)]({ kind: t(2221), ...a0[t(1340)](x) });
  }
  [s(2625)](x) {
    var t = s;
    return this[t(2015)]({ kind: t(2625), ...a0[t(1340)](x) });
  }
  cuid(x) {
    var t = s;
    return this[t(2015)]({ kind: t(614), ...a0.errToObj(x) });
  }
  [s(1897)](x) {
    var t = s;
    return this[t(2015)]({ kind: "cuid2", ...a0[t(1340)](x) });
  }
  ulid(x) {
    var t = s;
    return this._addCheck({ kind: t(1160), ...a0[t(1340)](x) });
  }
  base64(x) {
    var t = s;
    return this[t(2015)]({ kind: t(2633), ...a0.errToObj(x) });
  }
  [s(1310)](x) {
    var t = s;
    return this[t(2015)]({ kind: t(1310), ...a0[t(1340)](x) });
  }
  [s(1098)](x) {
    var t = s;
    return this[t(2015)]({ kind: t(1098), ...a0[t(1340)](x) });
  }
  ip(x) {
    var t = s;
    return this[t(2015)]({ kind: "ip", ...a0[t(1340)](x) });
  }
  [s(513)](x) {
    var t = s;
    return this[t(2015)]({ kind: t(513), ...a0[t(1340)](x) });
  }
  [s(708)](x) {
    var t = s;
    return typeof x == "string" ? this[t(2015)]({ kind: t(708), precision: null, offset: !1, local: !1, message: x }) : this._addCheck({ kind: t(708), precision: typeof (x == null ? void 0 : x.precision) === t(1584) ? null : x == null ? void 0 : x.precision, offset: (x == null ? void 0 : x.offset) ?? !1, local: (x == null ? void 0 : x.local) ?? !1, ...a0[t(1340)](x == null ? void 0 : x[t(1912)]) });
  }
  [s(1125)](x) {
    var t = s;
    return this[t(2015)]({ kind: "date", message: x });
  }
  [s(1996)](x) {
    var t = s;
    return typeof x === t(1278) ? this[t(2015)]({ kind: "time", precision: null, message: x }) : this._addCheck({ kind: "time", precision: typeof (x == null ? void 0 : x[t(2303)]) === t(1584) ? null : x == null ? void 0 : x.precision, ...a0[t(1340)](x == null ? void 0 : x[t(1912)]) });
  }
  duration(x) {
    var t = s;
    return this[t(2015)]({ kind: t(1938), ...a0[t(1340)](x) });
  }
  [s(2e3)](x, t) {
    var r = s;
    return this[r(2015)]({ kind: "regex", regex: x, ...a0[r(1340)](t) });
  }
  [s(539)](x, t) {
    var r = s;
    return this[r(2015)]({ kind: "includes", value: x, position: t == null ? void 0 : t[r(2548)], ...a0[r(1340)](t == null ? void 0 : t.message) });
  }
  startsWith(x, t) {
    var r = s;
    return this._addCheck({ kind: r(410), value: x, ...a0[r(1340)](t) });
  }
  [s(816)](x, t) {
    var r = s;
    return this[r(2015)]({ kind: r(816), value: x, ...a0[r(1340)](t) });
  }
  min(x, t) {
    var r = s;
    return this[r(2015)]({ kind: "min", value: x, ...a0[r(1340)](t) });
  }
  [s(1743)](x, t) {
    var r = s;
    return this[r(2015)]({ kind: r(1743), value: x, ...a0.errToObj(t) });
  }
  [s(1027)](x, t) {
    var r = s;
    return this[r(2015)]({ kind: r(1027), value: x, ...a0[r(1340)](t) });
  }
  [s(2376)](x) {
    var t = s;
    return this[t(1614)](1, a0[t(1340)](x));
  }
  [s(2235)]() {
    var x = s;
    return new we({ ...this[x(407)], checks: [...this[x(407)][x(565)], { kind: x(2235) }] });
  }
  [s(955)]() {
    var x = s;
    return new we({ ...this._def, checks: [...this[x(407)][x(565)], { kind: x(955) }] });
  }
  [s(660)]() {
    var x = s;
    return new we({ ...this[x(407)], checks: [...this._def[x(565)], { kind: x(660) }] });
  }
  get isDatetime() {
    var x = s;
    return !!this[x(407)][x(565)][x(2142)]((t) => t[x(1737)] === x(708));
  }
  get isDate() {
    var x = s;
    return !!this._def.checks[x(2142)]((t) => t[x(1737)] === "date");
  }
  get [s(1535)]() {
    var x = s;
    return !!this._def[x(565)][x(2142)]((t) => t[x(1737)] === x(1996));
  }
  get isDuration() {
    var x = s;
    return !!this[x(407)][x(565)][x(2142)]((t) => t.kind === x(1938));
  }
  get isEmail() {
    var x = s;
    return !!this._def.checks[x(2142)]((t) => t[x(1737)] === x(1094));
  }
  get [s(1088)]() {
    var x = s;
    return !!this._def[x(565)][x(2142)]((t) => t.kind === x(828));
  }
  get isEmoji() {
    var x = s;
    return !!this[x(407)][x(565)][x(2142)]((t) => t[x(1737)] === x(1240));
  }
  get isUUID() {
    var x = s;
    return !!this._def.checks[x(2142)]((t) => t[x(1737)] === "uuid");
  }
  get [s(1039)]() {
    var x = s;
    return !!this[x(407)][x(565)][x(2142)]((t) => t.kind === "nanoid");
  }
  get [s(1780)]() {
    var x = s;
    return !!this._def[x(565)].find((t) => t[x(1737)] === x(614));
  }
  get [s(1421)]() {
    var x = s;
    return !!this[x(407)][x(565)][x(2142)]((t) => t[x(1737)] === x(1897));
  }
  get [s(2042)]() {
    var x = s;
    return !!this[x(407)].checks[x(2142)]((t) => t[x(1737)] === x(1160));
  }
  get [s(893)]() {
    var x = s;
    return !!this[x(407)][x(565)][x(2142)]((t) => t[x(1737)] === "ip");
  }
  get [s(1462)]() {
    var x = s;
    return !!this[x(407)][x(565)].find((t) => t.kind === x(513));
  }
  get [s(355)]() {
    var x = s;
    return !!this[x(407)][x(565)][x(2142)]((t) => t[x(1737)] === "base64");
  }
  get [s(995)]() {
    var x = s;
    return !!this[x(407)][x(565)][x(2142)]((t) => t[x(1737)] === x(1310));
  }
  get [s(1312)]() {
    var x = s;
    let t = null;
    for (const r of this[x(407)][x(565)])
      r[x(1737)] === x(1614) && (t === null || r[x(1551)] > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    var x = s;
    let t = null;
    for (const r of this[x(407)][x(565)])
      r.kind === x(1743) && (t === null || r[x(1551)] < t) && (t = r[x(1551)]);
    return t;
  }
}
we[s(1640)] = (i) => {
  var x = s;
  return new we({ checks: [], typeName: p0[x(1724)], coerce: (i == null ? void 0 : i[x(498)]) ?? !1, ...b0(i) });
};
function ui(i, x) {
  var t = s;
  const r = (i[t(1339)]()[t(2432)](".")[1] || "")[t(1027)], e = (x.toString().split(".")[1] || "")[t(1027)], a = r > e ? r : e, n = Number[t(1958)](i[t(2226)](a)[t(1024)](".", "")), o = Number.parseInt(x.toFixed(a)[t(1024)](".", ""));
  return n % o / 10 ** a;
}
class Ve extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(1614)] = this.gte, this[x(1743)] = this[x(1561)], this[x(1154)] = this[x(2752)];
  }
  [s(2650)](x) {
    var t = s;
    if (this[t(407)].coerce && (x[t(984)] = Number(x.data)), this[t(2700)](x) !== x0.number) {
      const n = this[t(871)](x);
      return _(n, { code: B[t(2595)], expected: x0[t(2479)], received: n[t(917)] }), h0;
    }
    let e;
    const a = new ee();
    for (const n of this[t(407)][t(565)])
      n[t(1737)] === t(2634) ? !N0[t(1250)](x.data) && (e = this[t(871)](x, e), _(e, { code: B.invalid_type, expected: t(1155), received: "float", message: n[t(1912)] }), a[t(839)]()) : n[t(1737)] === "min" ? (n[t(971)] ? x[t(984)] < n[t(1551)] : x.data <= n[t(1551)]) && (e = this[t(871)](x, e), _(e, { code: B[t(1185)], minimum: n.value, type: t(2479), inclusive: n[t(971)], exact: !1, message: n.message }), a[t(839)]()) : n[t(1737)] === "max" ? (n[t(971)] ? x[t(984)] > n[t(1551)] : x.data >= n[t(1551)]) && (e = this[t(871)](x, e), _(e, { code: B[t(381)], maximum: n.value, type: t(2479), inclusive: n[t(971)], exact: !1, message: n[t(1912)] }), a[t(839)]()) : n[t(1737)] === t(2752) ? ui(x.data, n[t(1551)]) !== 0 && (e = this[t(871)](x, e), _(e, { code: B.not_multiple_of, multipleOf: n[t(1551)], message: n[t(1912)] }), a[t(839)]()) : n[t(1737)] === t(1712) ? !Number[t(944)](x.data) && (e = this[t(871)](x, e), _(e, { code: B[t(2110)], message: n[t(1912)] }), a[t(839)]()) : N0.assertNever(n);
    return { status: a.value, value: x[t(984)] };
  }
  [s(1977)](x, t) {
    return this.setLimit("min", x, !0, a0.toString(t));
  }
  gt(x, t) {
    var r = s;
    return this.setLimit(r(1614), x, !1, a0[r(1339)](t));
  }
  [s(1561)](x, t) {
    var r = s;
    return this.setLimit(r(1743), x, !0, a0[r(1339)](t));
  }
  lt(x, t) {
    var r = s;
    return this[r(1956)](r(1743), x, !1, a0[r(1339)](t));
  }
  [s(1956)](x, t, r, e) {
    var a = s;
    return new Ve({ ...this[a(407)], checks: [...this[a(407)][a(565)], { kind: x, value: t, inclusive: r, message: a0.toString(e) }] });
  }
  _addCheck(x) {
    var t = s;
    return new Ve({ ...this[t(407)], checks: [...this[t(407)][t(565)], x] });
  }
  [s(2634)](x) {
    var t = s;
    return this[t(2015)]({ kind: t(2634), message: a0[t(1339)](x) });
  }
  [s(1952)](x) {
    var t = s;
    return this._addCheck({ kind: t(1614), value: 0, inclusive: !1, message: a0.toString(x) });
  }
  negative(x) {
    var t = s;
    return this[t(2015)]({ kind: "max", value: 0, inclusive: !1, message: a0.toString(x) });
  }
  [s(1908)](x) {
    var t = s;
    return this[t(2015)]({ kind: t(1743), value: 0, inclusive: !0, message: a0.toString(x) });
  }
  [s(2443)](x) {
    var t = s;
    return this[t(2015)]({ kind: t(1614), value: 0, inclusive: !0, message: a0.toString(x) });
  }
  [s(2752)](x, t) {
    var r = s;
    return this[r(2015)]({ kind: r(2752), value: x, message: a0.toString(t) });
  }
  [s(1712)](x) {
    var t = s;
    return this[t(2015)]({ kind: t(1712), message: a0[t(1339)](x) });
  }
  [s(2066)](x) {
    var t = s;
    return this[t(2015)]({ kind: "min", inclusive: !0, value: Number[t(1102)], message: a0.toString(x) })[t(2015)]({ kind: "max", inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: a0[t(1339)](x) });
  }
  get [s(652)]() {
    var x = s;
    let t = null;
    for (const r of this[x(407)][x(565)])
      r[x(1737)] === x(1614) && (t === null || r[x(1551)] > t) && (t = r.value);
    return t;
  }
  get [s(2102)]() {
    var x = s;
    let t = null;
    for (const r of this[x(407)][x(565)])
      r[x(1737)] === x(1743) && (t === null || r[x(1551)] < t) && (t = r[x(1551)]);
    return t;
  }
  get [s(2331)]() {
    var x = s;
    return !!this._def[x(565)][x(2142)]((t) => t[x(1737)] === "int" || t.kind === "multipleOf" && N0.isInteger(t[x(1551)]));
  }
  get [s(944)]() {
    var x = s;
    let t = null, r = null;
    for (const e of this._def.checks) {
      if (e.kind === "finite" || e[x(1737)] === x(2634) || e[x(1737)] === x(2752)) return !0;
      e[x(1737)] === x(1614) ? (r === null || e[x(1551)] > r) && (r = e[x(1551)]) : e[x(1737)] === x(1743) && (t === null || e[x(1551)] < t) && (t = e[x(1551)]);
    }
    return Number[x(944)](r) && Number.isFinite(t);
  }
}
Ve[s(1640)] = (i) => {
  var x = s;
  return new Ve({ checks: [], typeName: p0[x(1256)], coerce: (i == null ? void 0 : i[x(498)]) || !1, ...b0(i) });
};
class xx extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(1614)] = this.gte, this.max = this.lte;
  }
  _parse(x) {
    var t = s;
    if (this[t(407)][t(498)]) try {
      x.data = BigInt(x[t(984)]);
    } catch {
      return this[t(1818)](x);
    }
    if (this[t(2700)](x) !== x0[t(2587)]) return this[t(1818)](x);
    let e;
    const a = new ee();
    for (const n of this._def.checks)
      n[t(1737)] === t(1614) ? (n[t(971)] ? x[t(984)] < n.value : x.data <= n[t(1551)]) && (e = this._getOrReturnCtx(x, e), _(e, { code: B[t(1185)], type: t(2587), minimum: n[t(1551)], inclusive: n[t(971)], message: n[t(1912)] }), a.dirty()) : n[t(1737)] === t(1743) ? (n[t(971)] ? x.data > n[t(1551)] : x.data >= n[t(1551)]) && (e = this[t(871)](x, e), _(e, { code: B.too_big, type: t(2587), maximum: n[t(1551)], inclusive: n[t(971)], message: n[t(1912)] }), a.dirty()) : n.kind === t(2752) ? x[t(984)] % n[t(1551)] !== BigInt(0) && (e = this[t(871)](x, e), _(e, { code: B.not_multiple_of, multipleOf: n[t(1551)], message: n[t(1912)] }), a[t(839)]()) : N0[t(578)](n);
    return { status: a.value, value: x[t(984)] };
  }
  [s(1818)](x) {
    var t = s;
    const r = this[t(871)](x);
    return _(r, { code: B[t(2595)], expected: x0.bigint, received: r.parsedType }), h0;
  }
  [s(1977)](x, t) {
    var r = s;
    return this[r(1956)](r(1614), x, !0, a0[r(1339)](t));
  }
  gt(x, t) {
    var r = s;
    return this[r(1956)](r(1614), x, !1, a0[r(1339)](t));
  }
  [s(1561)](x, t) {
    var r = s;
    return this[r(1956)](r(1743), x, !0, a0[r(1339)](t));
  }
  lt(x, t) {
    var r = s;
    return this[r(1956)](r(1743), x, !1, a0[r(1339)](t));
  }
  [s(1956)](x, t, r, e) {
    var a = s;
    return new xx({ ...this[a(407)], checks: [...this[a(407)][a(565)], { kind: x, value: t, inclusive: r, message: a0[a(1339)](e) }] });
  }
  [s(2015)](x) {
    var t = s;
    return new xx({ ...this._def, checks: [...this[t(407)][t(565)], x] });
  }
  positive(x) {
    var t = s;
    return this[t(2015)]({ kind: "min", value: BigInt(0), inclusive: !1, message: a0.toString(x) });
  }
  [s(1624)](x) {
    var t = s;
    return this[t(2015)]({ kind: t(1743), value: BigInt(0), inclusive: !1, message: a0.toString(x) });
  }
  nonpositive(x) {
    var t = s;
    return this[t(2015)]({ kind: t(1743), value: BigInt(0), inclusive: !0, message: a0[t(1339)](x) });
  }
  [s(2443)](x) {
    var t = s;
    return this[t(2015)]({ kind: "min", value: BigInt(0), inclusive: !0, message: a0.toString(x) });
  }
  [s(2752)](x, t) {
    var r = s;
    return this._addCheck({ kind: r(2752), value: x, message: a0[r(1339)](t) });
  }
  get [s(652)]() {
    var x = s;
    let t = null;
    for (const r of this[x(407)][x(565)])
      r[x(1737)] === x(1614) && (t === null || r[x(1551)] > t) && (t = r[x(1551)]);
    return t;
  }
  get [s(2102)]() {
    var x = s;
    let t = null;
    for (const r of this[x(407)][x(565)])
      r[x(1737)] === x(1743) && (t === null || r[x(1551)] < t) && (t = r[x(1551)]);
    return t;
  }
}
xx[s(1640)] = (i) => {
  var x = s;
  return new xx({ checks: [], typeName: p0[x(1086)], coerce: (i == null ? void 0 : i[x(498)]) ?? !1, ...b0(i) });
};
class Lt extends E0 {
  [s(2650)](x) {
    var t = s;
    if (this[t(407)][t(498)] && (x[t(984)] = !!x[t(984)]), this[t(2700)](x) !== x0[t(2665)]) {
      const e = this._getOrReturnCtx(x);
      return _(e, { code: B[t(2595)], expected: x0[t(2665)], received: e[t(917)] }), h0;
    }
    return re(x.data);
  }
}
Lt.create = (i) => {
  var x = s;
  return new Lt({ typeName: p0[x(2141)], coerce: (i == null ? void 0 : i[x(498)]) || !1, ...b0(i) });
};
class mx extends E0 {
  _parse(x) {
    var t = s;
    if (this[t(407)].coerce && (x[t(984)] = new Date(x.data)), this._getType(x) !== x0[t(1125)]) {
      const n = this[t(871)](x);
      return _(n, { code: B[t(2595)], expected: x0.date, received: n.parsedType }), h0;
    }
    if (Number[t(1677)](x[t(984)][t(501)]())) {
      const n = this._getOrReturnCtx(x);
      return _(n, { code: B[t(463)] }), h0;
    }
    const e = new ee();
    let a;
    for (const n of this[t(407)][t(565)])
      n[t(1737)] === t(1614) ? x[t(984)][t(501)]() < n[t(1551)] && (a = this[t(871)](x, a), _(a, { code: B[t(1185)], message: n[t(1912)], inclusive: !0, exact: !1, minimum: n[t(1551)], type: t(1125) }), e[t(839)]()) : n[t(1737)] === t(1743) ? x[t(984)].getTime() > n[t(1551)] && (a = this._getOrReturnCtx(x, a), _(a, { code: B.too_big, message: n[t(1912)], inclusive: !0, exact: !1, maximum: n[t(1551)], type: t(1125) }), e[t(839)]()) : N0[t(578)](n);
    return { status: e[t(1551)], value: new Date(x[t(984)].getTime()) };
  }
  [s(2015)](x) {
    var t = s;
    return new mx({ ...this._def, checks: [...this[t(407)][t(565)], x] });
  }
  [s(1614)](x, t) {
    var r = s;
    return this[r(2015)]({ kind: r(1614), value: x[r(501)](), message: a0[r(1339)](t) });
  }
  [s(1743)](x, t) {
    var r = s;
    return this[r(2015)]({ kind: r(1743), value: x[r(501)](), message: a0.toString(t) });
  }
  get [s(2168)]() {
    var x = s;
    let t = null;
    for (const r of this._def.checks)
      r[x(1737)] === x(1614) && (t === null || r[x(1551)] > t) && (t = r[x(1551)]);
    return t != null ? new Date(t) : null;
  }
  get [s(1655)]() {
    var x = s;
    let t = null;
    for (const r of this._def[x(565)])
      r[x(1737)] === x(1743) && (t === null || r[x(1551)] < t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
}
mx[s(1640)] = (i) => {
  var x = s;
  return new mx({ checks: [], coerce: (i == null ? void 0 : i[x(498)]) || !1, typeName: p0[x(374)], ...b0(i) });
};
class Cr extends E0 {
  [s(2650)](x) {
    var t = s;
    if (this[t(2700)](x) !== x0[t(1383)]) {
      const e = this[t(871)](x);
      return _(e, { code: B[t(2595)], expected: x0[t(1383)], received: e[t(917)] }), h0;
    }
    return re(x.data);
  }
}
Cr[s(1640)] = (i) => {
  var x = s;
  return new Cr({ typeName: p0[x(2639)], ...b0(i) });
};
class $t extends E0 {
  [s(2650)](x) {
    var t = s;
    if (this._getType(x) !== x0.undefined) {
      const e = this[t(871)](x);
      return _(e, { code: B.invalid_type, expected: x0.undefined, received: e.parsedType }), h0;
    }
    return re(x[t(984)]);
  }
}
$t[s(1640)] = (i) => {
  var x = s;
  return new $t({ typeName: p0[x(2739)], ...b0(i) });
};
class zt extends E0 {
  [s(2650)](x) {
    var t = s;
    if (this[t(2700)](x) !== x0.null) {
      const e = this._getOrReturnCtx(x);
      return _(e, { code: B[t(2595)], expected: x0[t(697)], received: e[t(917)] }), h0;
    }
    return re(x.data);
  }
}
zt[s(1640)] = (i) => {
  var x = s;
  return new zt({ typeName: p0[x(401)], ...b0(i) });
};
class Ht extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(2578)] = !0;
  }
  [s(2650)](x) {
    var t = s;
    return re(x[t(984)]);
  }
}
Ht[s(1640)] = (i) => {
  var x = s;
  return new Ht({ typeName: p0[x(375)], ...b0(i) });
};
class Ut extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(1266)] = !0;
  }
  [s(2650)](x) {
    var t = s;
    return re(x[t(984)]);
  }
}
Ut.create = (i) => {
  var x = s;
  return new Ut({ typeName: p0[x(2345)], ...b0(i) });
};
class Ie extends E0 {
  [s(2650)](x) {
    var t = s;
    const r = this[t(871)](x);
    return _(r, { code: B[t(2595)], expected: x0[t(1752)], received: r[t(917)] }), h0;
  }
}
Ie[s(1640)] = (i) => {
  var x = s;
  return new Ie({ typeName: p0[x(796)], ...b0(i) });
};
class Vt extends E0 {
  _parse(x) {
    var t = s;
    if (this[t(2700)](x) !== x0.undefined) {
      const e = this[t(871)](x);
      return _(e, { code: B.invalid_type, expected: x0.void, received: e[t(917)] }), h0;
    }
    return re(x[t(984)]);
  }
}
Vt[s(1640)] = (i) => new Vt({ typeName: p0.ZodVoid, ...b0(i) });
class pe extends E0 {
  [s(2650)](x) {
    var t = s;
    const { ctx: r, status: e } = this._processInputParams(x), a = this[t(407)];
    if (r.parsedType !== x0.array) return _(r, { code: B[t(2595)], expected: x0.array, received: r[t(917)] }), h0;
    if (a[t(1921)] !== null) {
      const o = r[t(984)].length > a[t(1921)][t(1551)], c = r.data.length < a[t(1921)][t(1551)];
      (o || c) && (_(r, { code: o ? B[t(381)] : B[t(1185)], minimum: c ? a[t(1921)].value : void 0, maximum: o ? a.exactLength[t(1551)] : void 0, type: "array", inclusive: !0, exact: !0, message: a[t(1921)].message }), e[t(839)]());
    }
    if (a[t(1312)] !== null && r.data[t(1027)] < a[t(1312)][t(1551)] && (_(r, { code: B[t(1185)], minimum: a[t(1312)][t(1551)], type: t(2052), inclusive: !0, exact: !1, message: a[t(1312)][t(1912)] }), e[t(839)]()), a[t(2380)] !== null && r[t(984)].length > a.maxLength[t(1551)] && (_(r, { code: B.too_big, maximum: a.maxLength.value, type: t(2052), inclusive: !0, exact: !1, message: a[t(2380)][t(1912)] }), e.dirty()), r[t(2346)].async) return Promise.all([...r[t(984)]].map((o, c) => {
      var u = t;
      return a[u(2122)][u(1476)](new me(r, o, r[u(2610)], c));
    }))[t(2397)]((o) => {
      var c = t;
      return ee[c(2098)](e, o);
    });
    const n = [...r[t(984)]][t(802)]((o, c) => {
      var u = t;
      return a[u(2122)]._parseSync(new me(r, o, r[u(2610)], c));
    });
    return ee[t(2098)](e, n);
  }
  get [s(1671)]() {
    var x = s;
    return this[x(407)][x(2122)];
  }
  [s(1614)](x, t) {
    var r = s;
    return new pe({ ...this[r(407)], minLength: { value: x, message: a0[r(1339)](t) } });
  }
  max(x, t) {
    var r = s;
    return new pe({ ...this[r(407)], maxLength: { value: x, message: a0[r(1339)](t) } });
  }
  [s(1027)](x, t) {
    var r = s;
    return new pe({ ...this[r(407)], exactLength: { value: x, message: a0[r(1339)](t) } });
  }
  [s(2376)](x) {
    var t = s;
    return this[t(1614)](1, x);
  }
}
pe[s(1640)] = (i, x) => {
  var t = s;
  return new pe({ type: i, minLength: null, maxLength: null, exactLength: null, typeName: p0[t(1703)], ...b0(x) });
};
function He(i) {
  var x = s;
  if (i instanceof K0) {
    const t = {};
    for (const r in i[x(2104)]) {
      const e = i[x(2104)][r];
      t[r] = Se.create(He(e));
    }
    return new K0({ ...i[x(407)], shape: () => t });
  } else
    return i instanceof pe ? new pe({ ...i._def, type: He(i[x(1671)]) }) : i instanceof Se ? Se[x(1640)](He(i[x(1593)]())) : i instanceof je ? je.create(He(i[x(1593)]())) : i instanceof Oe ? Oe[x(1640)](i[x(1438)][x(802)]((t) => He(t))) : i;
}
class K0 extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(2309)] = null, this.nonstrict = this[x(1369)], this[x(2662)] = this[x(2094)];
  }
  [s(1508)]() {
    var x = s;
    if (this[x(2309)] !== null) return this._cached;
    const t = this[x(407)][x(2104)](), r = N0[x(1053)](t);
    return this[x(2309)] = { shape: t, keys: r }, this[x(2309)];
  }
  [s(2650)](x) {
    var t = s;
    if (this._getType(x) !== x0[t(644)]) {
      const f = this[t(871)](x);
      return _(f, { code: B.invalid_type, expected: x0[t(644)], received: f[t(917)] }), h0;
    }
    const { status: e, ctx: a } = this._processInputParams(x), { shape: n, keys: o } = this[t(1508)](), c = [];
    if (!(this[t(407)][t(1451)] instanceof Ie && this[t(407)][t(2469)] === t(2714))) for (const f in a[t(984)])
      !o.includes(f) && c[t(1020)](f);
    const u = [];
    for (const f of o) {
      const d = n[f], l = a[t(984)][f];
      u[t(1020)]({ key: { status: t(2073), value: f }, value: d[t(2650)](new me(a, l, a[t(2610)], f)), alwaysSet: f in a[t(984)] });
    }
    if (this._def[t(1451)] instanceof Ie) {
      const f = this[t(407)][t(2469)];
      if (f === t(1369)) for (const d of c)
        u[t(1020)]({ key: { status: t(2073), value: d }, value: { status: t(2073), value: a[t(984)][d] } });
      else if (f === t(489)) c.length > 0 && (_(a, { code: B.unrecognized_keys, keys: c }), e[t(839)]());
      else if (f !== "strip") throw new Error(t(1040));
    } else {
      const f = this[t(407)][t(1451)];
      for (const d of c) {
        const l = a[t(984)][d];
        u[t(1020)]({ key: { status: t(2073), value: d }, value: f[t(2650)](new me(a, l, a[t(2610)], d)), alwaysSet: d in a[t(984)] });
      }
    }
    return a[t(2346)][t(1927)] ? Promise[t(639)]()[t(2397)](async () => {
      var f = t;
      const d = [];
      for (const l of u) {
        const v = await l[f(2640)], h = await l[f(1551)];
        d.push({ key: v, value: h, alwaysSet: l.alwaysSet });
      }
      return d;
    })[t(2397)]((f) => ee.mergeObjectSync(e, f)) : ee[t(1521)](e, u);
  }
  get [s(2104)]() {
    var x = s;
    return this[x(407)].shape();
  }
  strict(x) {
    var t = s;
    return a0[t(1340)], new K0({ ...this[t(407)], unknownKeys: t(489), ...x !== void 0 ? { errorMap: (r, e) => {
      var o, c;
      var a = t;
      const n = ((c = (o = this._def)[a(2099)]) == null ? void 0 : c.call(o, r, e).message) ?? e.defaultError;
      return r[a(1749)] === a(505) ? { message: a0[a(1340)](x)[a(1912)] ?? n } : { message: n };
    } } : {} });
  }
  strip() {
    var x = s;
    return new K0({ ...this[x(407)], unknownKeys: "strip" });
  }
  [s(1369)]() {
    var x = s;
    return new K0({ ...this._def, unknownKeys: x(1369) });
  }
  [s(2094)](x) {
    var t = s;
    return new K0({ ...this[t(407)], shape: () => ({ ...this[t(407)].shape(), ...x }) });
  }
  [s(2501)](x) {
    var t = s;
    return new K0({ unknownKeys: x[t(407)][t(2469)], catchall: x[t(407)][t(1451)], shape: () => ({ ...this._def[t(2104)](), ...x[t(407)][t(2104)]() }), typeName: p0[t(1350)] });
  }
  [s(1482)](x, t) {
    var r = s;
    return this[r(2662)]({ [x]: t });
  }
  [s(1451)](x) {
    return new K0({ ...this._def, catchall: x });
  }
  pick(x) {
    var t = s;
    const r = {};
    for (const e of N0[t(1053)](x))
      x[e] && this[t(2104)][e] && (r[e] = this[t(2104)][e]);
    return new K0({ ...this[t(407)], shape: () => r });
  }
  [s(1138)](x) {
    var t = s;
    const r = {};
    for (const e of N0[t(1053)](this[t(2104)]))
      !x[e] && (r[e] = this[t(2104)][e]);
    return new K0({ ...this[t(407)], shape: () => r });
  }
  deepPartial() {
    return He(this);
  }
  partial(x) {
    var t = s;
    const r = {};
    for (const e of N0[t(1053)](this[t(2104)])) {
      const a = this.shape[e];
      x && !x[e] ? r[e] = a : r[e] = a[t(1823)]();
    }
    return new K0({ ...this[t(407)], shape: () => r });
  }
  [s(1058)](x) {
    var t = s;
    const r = {};
    for (const e of N0.objectKeys(this[t(2104)]))
      if (x && !x[e]) r[e] = this[t(2104)][e];
      else {
        let n = this[t(2104)][e];
        for (; n instanceof Se; )
          n = n[t(407)].innerType;
        r[e] = n;
      }
    return new K0({ ...this[t(407)], shape: () => r });
  }
  [s(561)]() {
    var x = s;
    return Hs(N0[x(1053)](this.shape));
  }
}
K0.create = (i, x) => {
  var t = s;
  return new K0({ shape: () => i, unknownKeys: t(2714), catchall: Ie.create(), typeName: p0[t(1350)], ...b0(x) });
}, K0[s(1778)] = (i, x) => {
  var t = s;
  return new K0({ shape: () => i, unknownKeys: "strict", catchall: Ie[t(1640)](), typeName: p0[t(1350)], ...b0(x) });
}, K0[s(2646)] = (i, x) => {
  var t = s;
  return new K0({ shape: i, unknownKeys: t(2714), catchall: Ie.create(), typeName: p0[t(1350)], ...b0(x) });
};
class vx extends E0 {
  [s(2650)](x) {
    var t = s;
    const { ctx: r } = this[t(1348)](x), e = this[t(407)][t(1582)];
    function a(n) {
      var o = t;
      for (const u of n)
        if (u[o(1801)][o(975)] === o(2073)) return u[o(1801)];
      for (const u of n)
        if (u[o(1801)][o(975)] === o(839)) return r[o(2346)].issues[o(1020)](...u[o(735)][o(2346)][o(2654)]), u[o(1801)];
      const c = n.map((u) => new ke(u.ctx[o(2346)].issues));
      return _(r, { code: B[o(2457)], unionErrors: c }), h0;
    }
    if (r.common.async) return Promise[t(1676)](e[t(802)](async (n) => {
      var o = t;
      const c = { ...r, common: { ...r[o(2346)], issues: [] }, parent: null };
      return { result: await n[o(1476)]({ data: r[o(984)], path: r[o(2610)], parent: c }), ctx: c };
    }))[t(2397)](a);
    {
      let n;
      const o = [];
      for (const u of e) {
        const f = { ...r, common: { ...r[t(2346)], issues: [] }, parent: null }, d = u._parseSync({ data: r[t(984)], path: r[t(2610)], parent: f });
        if (d[t(975)] === "valid") return d;
        d[t(975)] === t(839) && !n && (n = { result: d, ctx: f }), f[t(2346)][t(2654)][t(1027)] && o[t(1020)](f.common.issues);
      }
      if (n) return r[t(2346)][t(2654)][t(1020)](...n[t(735)][t(2346)][t(2654)]), n[t(1801)];
      const c = o[t(802)]((u) => new ke(u));
      return _(r, { code: B.invalid_union, unionErrors: c }), h0;
    }
  }
  get options() {
    var x = s;
    return this._def[x(1582)];
  }
}
vx[s(1640)] = (i, x) => {
  var t = s;
  return new vx({ options: i, typeName: p0[t(2187)], ...b0(x) });
};
const ye = (i) => {
  var x = s;
  return i instanceof Zt ? ye(i.schema) : i instanceof qe ? ye(i.innerType()) : i instanceof bx ? [i[x(1551)]] : i instanceof De ? i.options : i instanceof Bt ? N0.objectValues(i[x(635)]) : i instanceof Sx ? ye(i[x(407)][x(2556)]) : i instanceof $t ? [void 0] : i instanceof zt ? [null] : i instanceof Se ? [void 0, ...ye(i[x(1593)]())] : i instanceof je ? [null, ...ye(i[x(1593)]())] : i instanceof Us ? ye(i.unwrap()) : i instanceof Ex ? ye(i[x(1593)]()) : i instanceof kx ? ye(i[x(407)][x(2556)]) : [];
};
class tr extends E0 {
  [s(2650)](x) {
    var t = s;
    const { ctx: r } = this[t(1348)](x);
    if (r[t(917)] !== x0[t(644)]) return _(r, { code: B[t(2595)], expected: x0[t(644)], received: r[t(917)] }), h0;
    const e = this[t(1196)], a = r[t(984)][e], n = this[t(2743)][t(2558)](a);
    return n ? r[t(2346)].async ? n[t(1476)]({ data: r[t(984)], path: r.path, parent: r }) : n[t(2602)]({ data: r[t(984)], path: r[t(2610)], parent: r }) : (_(r, { code: B[t(1416)], options: Array[t(429)](this.optionsMap.keys()), path: [e] }), h0);
  }
  get discriminator() {
    var x = s;
    return this[x(407)].discriminator;
  }
  get options() {
    var x = s;
    return this[x(407)][x(1582)];
  }
  get [s(2743)]() {
    var x = s;
    return this[x(407)].optionsMap;
  }
  static [s(1640)](x, t, r) {
    var e = s;
    const a = /* @__PURE__ */ new Map();
    for (const n of t) {
      const o = ye(n[e(2104)][x]);
      if (!o[e(1027)]) throw new Error(e(618) + x + e(1697));
      for (const c of o) {
        if (a[e(1263)](c)) throw new Error(e(2370) + String(x) + e(671) + String(c));
        a[e(2151)](c, n);
      }
    }
    return new tr({ typeName: p0.ZodDiscriminatedUnion, discriminator: x, options: t, optionsMap: a, ...b0(r) });
  }
}
function Wt(i, x) {
  var t = s;
  const r = Pe(i), e = Pe(x);
  if (i === x) return { valid: !0, data: i };
  if (r === x0[t(644)] && e === x0[t(644)]) {
    const a = N0.objectKeys(x), n = N0.objectKeys(i)[t(2674)]((c) => a[t(393)](c) !== -1), o = { ...i, ...x };
    for (const c of n) {
      const u = Wt(i[c], x[c]);
      if (!u[t(2073)]) return { valid: !1 };
      o[c] = u.data;
    }
    return { valid: !0, data: o };
  } else if (r === x0[t(2052)] && e === x0[t(2052)]) {
    if (i.length !== x[t(1027)]) return { valid: !1 };
    const a = [];
    for (let n = 0; n < i[t(1027)]; n++) {
      const o = i[n], c = x[n], u = Wt(o, c);
      if (!u[t(2073)]) return { valid: !1 };
      a.push(u.data);
    }
    return { valid: !0, data: a };
  } else return r === x0[t(1125)] && e === x0[t(1125)] && +i == +x ? { valid: !0, data: i } : { valid: !1 };
}
class gx extends E0 {
  _parse(x) {
    var t = s;
    const { status: r, ctx: e } = this[t(1348)](x), a = (n, o) => {
      var c = t;
      if (Pr(n) || Pr(o)) return h0;
      const u = Wt(n[c(1551)], o[c(1551)]);
      return u.valid ? ((Ir(n) || Ir(o)) && r.dirty(), { status: r[c(1551)], value: u[c(984)] }) : (_(e, { code: B[c(2128)] }), h0);
    };
    return e.common[t(1927)] ? Promise[t(1676)]([this[t(407)][t(2109)][t(1476)]({ data: e[t(984)], path: e.path, parent: e }), this[t(407)][t(1409)][t(1476)]({ data: e[t(984)], path: e[t(2610)], parent: e })])[t(2397)](([n, o]) => a(n, o)) : a(this[t(407)][t(2109)]._parseSync({ data: e[t(984)], path: e[t(2610)], parent: e }), this[t(407)][t(1409)][t(2602)]({ data: e[t(984)], path: e.path, parent: e }));
  }
}
gx[s(1640)] = (i, x, t) => {
  var r = s;
  return new gx({ left: i, right: x, typeName: p0[r(620)], ...b0(t) });
};
class Oe extends E0 {
  [s(2650)](x) {
    var t = s;
    const { status: r, ctx: e } = this._processInputParams(x);
    if (e[t(917)] !== x0.array) return _(e, { code: B[t(2595)], expected: x0[t(2052)], received: e.parsedType }), h0;
    if (e[t(984)].length < this[t(407)][t(1438)][t(1027)]) return _(e, { code: B[t(1185)], minimum: this[t(407)][t(1438)][t(1027)], inclusive: !0, exact: !1, type: t(2052) }), h0;
    !this[t(407)][t(1496)] && e[t(984)].length > this[t(407)].items[t(1027)] && (_(e, { code: B[t(381)], maximum: this[t(407)][t(1438)][t(1027)], inclusive: !0, exact: !1, type: "array" }), r.dirty());
    const n = [...e.data].map((o, c) => {
      var u = t;
      const f = this._def[u(1438)][c] || this[u(407)][u(1496)];
      return f ? f[u(2650)](new me(e, o, e[u(2610)], c)) : null;
    })[t(2674)]((o) => !!o);
    return e[t(2346)][t(1927)] ? Promise.all(n)[t(2397)]((o) => {
      var c = t;
      return ee[c(2098)](r, o);
    }) : ee[t(2098)](r, n);
  }
  get [s(1438)]() {
    var x = s;
    return this[x(407)][x(1438)];
  }
  rest(x) {
    var t = s;
    return new Oe({ ...this[t(407)], rest: x });
  }
}
Oe[s(1640)] = (i, x) => {
  var t = s;
  if (!Array[t(710)](i)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Oe({ items: i, typeName: p0[t(461)], rest: null, ...b0(x) });
};
class yx extends E0 {
  get [s(1213)]() {
    var x = s;
    return this[x(407)][x(647)];
  }
  get [s(785)]() {
    var x = s;
    return this[x(407)][x(1127)];
  }
  [s(2650)](x) {
    var t = s;
    const { status: r, ctx: e } = this[t(1348)](x);
    if (e[t(917)] !== x0.object) return _(e, { code: B.invalid_type, expected: x0.object, received: e[t(917)] }), h0;
    const a = [], n = this[t(407)].keyType, o = this._def.valueType;
    for (const c in e[t(984)])
      a.push({ key: n._parse(new me(e, c, e[t(2610)], c)), value: o[t(2650)](new me(e, e.data[c], e[t(2610)], c)), alwaysSet: c in e[t(984)] });
    return e[t(2346)][t(1927)] ? ee[t(1504)](r, a) : ee[t(1521)](r, a);
  }
  get [s(1671)]() {
    var x = s;
    return this[x(407)][x(1127)];
  }
  static [s(1640)](x, t, r) {
    var e = s;
    return t instanceof E0 ? new yx({ keyType: x, valueType: t, typeName: p0[e(2645)], ...b0(r) }) : new yx({ keyType: we[e(1640)](), valueType: x, typeName: p0.ZodRecord, ...b0(t) });
  }
}
class Fr extends E0 {
  get keySchema() {
    var x = s;
    return this._def[x(647)];
  }
  get valueSchema() {
    var x = s;
    return this[x(407)][x(1127)];
  }
  [s(2650)](x) {
    var t = s;
    const { status: r, ctx: e } = this[t(1348)](x);
    if (e.parsedType !== x0[t(802)]) return _(e, { code: B.invalid_type, expected: x0[t(802)], received: e[t(917)] }), h0;
    const a = this[t(407)][t(647)], n = this[t(407)][t(1127)], o = [...e[t(984)][t(1430)]()][t(802)](([c, u], f) => {
      var d = t;
      return { key: a[d(2650)](new me(e, c, e[d(2610)], [f, d(2640)])), value: n[d(2650)](new me(e, u, e[d(2610)], [f, d(1551)])) };
    });
    if (e[t(2346)][t(1927)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        var u = t;
        for (const f of o) {
          const d = await f[u(2640)], l = await f[u(1551)];
          if (d[u(975)] === u(1019) || l[u(975)] === u(1019)) return h0;
          (d.status === u(839) || l[u(975)] === u(839)) && r.dirty(), c[u(2151)](d.value, l[u(1551)]);
        }
        return { status: r[u(1551)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of o) {
        const f = u[t(2640)], d = u[t(1551)];
        if (f[t(975)] === "aborted" || d[t(975)] === t(1019)) return h0;
        (f.status === t(839) || d.status === t(839)) && r.dirty(), c[t(2151)](f.value, d[t(1551)]);
      }
      return { status: r[t(1551)], value: c };
    }
  }
}
Fr.create = (i, x, t) => {
  var r = s;
  return new Fr({ valueType: x, keyType: i, typeName: p0[r(1762)], ...b0(t) });
};
class tx extends E0 {
  _parse(x) {
    var t = s;
    const { status: r, ctx: e } = this[t(1348)](x);
    if (e[t(917)] !== x0.set) return _(e, { code: B.invalid_type, expected: x0[t(2151)], received: e[t(917)] }), h0;
    const a = this[t(407)];
    a[t(1463)] !== null && e.data[t(1288)] < a[t(1463)][t(1551)] && (_(e, { code: B[t(1185)], minimum: a[t(1463)][t(1551)], type: "set", inclusive: !0, exact: !1, message: a.minSize[t(1912)] }), r[t(839)]()), a.maxSize !== null && e.data[t(1288)] > a[t(743)][t(1551)] && (_(e, { code: B.too_big, maximum: a[t(743)].value, type: t(2151), inclusive: !0, exact: !1, message: a.maxSize[t(1912)] }), r[t(839)]());
    const n = this[t(407)][t(1127)];
    function o(u) {
      var f = t;
      const d = /* @__PURE__ */ new Set();
      for (const l of u) {
        if (l[f(975)] === f(1019)) return h0;
        l[f(975)] === f(839) && r.dirty(), d[f(1988)](l[f(1551)]);
      }
      return { status: r.value, value: d };
    }
    const c = [...e[t(984)].values()][t(802)]((u, f) => n[t(2650)](new me(e, u, e[t(2610)], f)));
    return e.common.async ? Promise[t(1676)](c)[t(2397)]((u) => o(u)) : o(c);
  }
  [s(1614)](x, t) {
    var r = s;
    return new tx({ ...this[r(407)], minSize: { value: x, message: a0[r(1339)](t) } });
  }
  [s(1743)](x, t) {
    var r = s;
    return new tx({ ...this[r(407)], maxSize: { value: x, message: a0[r(1339)](t) } });
  }
  [s(1288)](x, t) {
    var r = s;
    return this[r(1614)](x, t).max(x, t);
  }
  [s(2376)](x) {
    var t = s;
    return this[t(1614)](1, x);
  }
}
tx.create = (i, x) => {
  var t = s;
  return new tx({ valueType: i, minSize: null, maxSize: null, typeName: p0[t(1458)], ...b0(x) });
};
class Zt extends E0 {
  get schema() {
    var x = s;
    return this[x(407)][x(2368)]();
  }
  [s(2650)](x) {
    var t = s;
    const { ctx: r } = this[t(1348)](x);
    return this[t(407)][t(2368)]()[t(2650)]({ data: r.data, path: r[t(2610)], parent: r });
  }
}
Zt[s(1640)] = (i, x) => {
  var t = s;
  return new Zt({ getter: i, typeName: p0[t(2362)], ...b0(x) });
};
class bx extends E0 {
  [s(2650)](x) {
    var t = s;
    if (x[t(984)] !== this[t(407)][t(1551)]) {
      const r = this._getOrReturnCtx(x);
      return _(r, { received: r[t(984)], code: B[t(1034)], expected: this[t(407)][t(1551)] }), h0;
    }
    return { status: t(2073), value: x[t(984)] };
  }
  get value() {
    var x = s;
    return this[x(407)][x(1551)];
  }
}
bx.create = (i, x) => {
  var t = s;
  return new bx({ value: i, typeName: p0[t(1481)], ...b0(x) });
};
function Hs(i, x) {
  var t = s;
  return new De({ values: i, typeName: p0[t(1079)], ...b0(x) });
}
class De extends E0 {
  [s(2650)](x) {
    var t = s;
    if (typeof x.data != "string") {
      const r = this[t(871)](x), e = this._def[t(1215)];
      return _(r, { expected: N0.joinValues(e), received: r[t(917)], code: B[t(2595)] }), h0;
    }
    if (!this._cache && (this._cache = new Set(this[t(407)][t(1215)])), !this[t(543)][t(1263)](x[t(984)])) {
      const r = this._getOrReturnCtx(x), e = this._def[t(1215)];
      return _(r, { received: r.data, code: B[t(1140)], options: e }), h0;
    }
    return re(x[t(984)]);
  }
  get [s(1582)]() {
    var x = s;
    return this._def[x(1215)];
  }
  get enum() {
    var x = s;
    const t = {};
    for (const r of this[x(407)][x(1215)])
      t[r] = r;
    return t;
  }
  get [s(541)]() {
    var x = s;
    const t = {};
    for (const r of this[x(407)][x(1215)])
      t[r] = r;
    return t;
  }
  get [s(1407)]() {
    var x = s;
    const t = {};
    for (const r of this[x(407)][x(1215)])
      t[r] = r;
    return t;
  }
  [s(563)](x, t = this._def) {
    var r = s;
    return De[r(1640)](x, { ...this[r(407)], ...t });
  }
  [s(757)](x, t = this[s(407)]) {
    var r = s;
    return De[r(1640)](this[r(1582)][r(2674)]((e) => !x.includes(e)), { ...this[r(407)], ...t });
  }
}
De.create = Hs;
class Bt extends E0 {
  [s(2650)](x) {
    var t = s;
    const r = N0.getValidEnumValues(this._def[t(1215)]), e = this[t(871)](x);
    if (e[t(917)] !== x0[t(1278)] && e[t(917)] !== x0[t(2479)]) {
      const a = N0.objectValues(r);
      return _(e, { expected: N0[t(512)](a), received: e[t(917)], code: B[t(2595)] }), h0;
    }
    if (!this[t(543)] && (this[t(543)] = new Set(N0[t(1578)](this._def.values))), !this._cache[t(1263)](x[t(984)])) {
      const a = N0[t(882)](r);
      return _(e, { received: e.data, code: B.invalid_enum_value, options: a }), h0;
    }
    return re(x[t(984)]);
  }
  get enum() {
    var x = s;
    return this[x(407)][x(1215)];
  }
}
Bt.create = (i, x) => {
  var t = s;
  return new Bt({ values: i, typeName: p0[t(1613)], ...b0(x) });
};
class wx extends E0 {
  [s(1593)]() {
    var x = s;
    return this[x(407)][x(2122)];
  }
  _parse(x) {
    var t = s;
    const { ctx: r } = this[t(1348)](x);
    if (r[t(917)] !== x0[t(366)] && r[t(2346)].async === !1) return _(r, { code: B[t(2595)], expected: x0[t(366)], received: r[t(917)] }), h0;
    const e = r[t(917)] === x0[t(366)] ? r[t(984)] : Promise.resolve(r[t(984)]);
    return re(e[t(2397)]((a) => {
      var n = t;
      return this[n(407)][n(2122)][n(1011)](a, { path: r[n(2610)], errorMap: r[n(2346)][n(730)] });
    }));
  }
}
wx[s(1640)] = (i, x) => {
  var t = s;
  return new wx({ type: i, typeName: p0[t(1629)], ...b0(x) });
};
class qe extends E0 {
  [s(2556)]() {
    var x = s;
    return this[x(407)][x(1303)];
  }
  [s(2756)]() {
    var x = s;
    return this[x(407)][x(1303)]._def[x(2590)] === p0[x(702)] ? this[x(407)][x(1303)][x(2756)]() : this[x(407)].schema;
  }
  [s(2650)](x) {
    var t = s;
    const { status: r, ctx: e } = this[t(1348)](x), a = this._def[t(2599)] || null, n = { addIssue: (o) => {
      var c = t;
      _(e, o), o.fatal ? r[c(1747)]() : r[c(839)]();
    }, get path() {
      var o = t;
      return e[o(2610)];
    } };
    if (n[t(2097)] = n.addIssue[t(960)](n), a[t(2122)] === t(2300)) {
      const o = a[t(1136)](e[t(984)], n);
      if (e[t(2346)][t(1927)]) return Promise[t(639)](o)[t(2397)](async (c) => {
        var u = t;
        if (r[u(1551)] === "aborted") return h0;
        const f = await this[u(407)].schema._parseAsync({ data: c, path: e[u(2610)], parent: e });
        return f[u(975)] === u(1019) ? h0 : f[u(975)] === u(839) || r.value === "dirty" ? Qe(f[u(1551)]) : f;
      });
      {
        if (r[t(1551)] === "aborted") return h0;
        const c = this[t(407)].schema[t(2602)]({ data: o, path: e.path, parent: e });
        return c[t(975)] === t(1019) ? h0 : c[t(975)] === t(839) || r.value === t(839) ? Qe(c[t(1551)]) : c;
      }
    }
    if (a[t(2122)] === "refinement") {
      const o = (c) => {
        var u = t;
        const f = a.refinement(c, n);
        if (e[u(2346)].async) return Promise[u(639)](f);
        if (f instanceof Promise) throw new Error(u(939));
        return c;
      };
      if (e[t(2346)][t(1927)] === !1) {
        const c = this._def[t(1303)][t(2602)]({ data: e[t(984)], path: e.path, parent: e });
        return c.status === t(1019) ? h0 : (c[t(975)] === t(839) && r[t(839)](), o(c[t(1551)]), { status: r.value, value: c[t(1551)] });
      } else return this._def[t(1303)][t(1476)]({ data: e[t(984)], path: e.path, parent: e })[t(2397)]((c) => {
        var u = t;
        return c[u(975)] === u(1019) ? h0 : (c[u(975)] === u(839) && r[u(839)](), o(c.value)[u(2397)](() => {
          var f = u;
          return { status: r[f(1551)], value: c.value };
        }));
      });
    }
    if (a[t(2122)] === t(1136))
      if (e[t(2346)][t(1927)] === !1) {
        const o = this[t(407)].schema[t(2602)]({ data: e[t(984)], path: e[t(2610)], parent: e });
        if (!Ue(o)) return h0;
        const c = a.transform(o[t(1551)], n);
        if (c instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r[t(1551)], value: c };
      } else return this[t(407)].schema[t(1476)]({ data: e[t(984)], path: e[t(2610)], parent: e })[t(2397)]((o) => {
        var c = t;
        return Ue(o) ? Promise.resolve(a.transform(o[c(1551)], n)).then((u) => ({ status: r[c(1551)], value: u })) : h0;
      });
    N0.assertNever(a);
  }
}
qe.create = (i, x, t) => {
  var r = s;
  return new qe({ schema: i, typeName: p0[r(702)], effect: x, ...b0(t) });
}, qe[s(1378)] = (i, x, t) => {
  var r = s;
  return new qe({ schema: x, effect: { type: r(2300), transform: i }, typeName: p0[r(702)], ...b0(t) });
};
class Se extends E0 {
  [s(2650)](x) {
    var t = s;
    return this._getType(x) === x0.undefined ? re(void 0) : this[t(407)][t(2556)][t(2650)](x);
  }
  [s(1593)]() {
    var x = s;
    return this._def[x(2556)];
  }
}
Se[s(1640)] = (i, x) => {
  var t = s;
  return new Se({ innerType: i, typeName: p0[t(1164)], ...b0(x) });
};
class je extends E0 {
  [s(2650)](x) {
    var t = s;
    return this[t(2700)](x) === x0[t(697)] ? re(null) : this[t(407)][t(2556)]._parse(x);
  }
  [s(1593)]() {
    var x = s;
    return this[x(407)][x(2556)];
  }
}
je.create = (i, x) => new je({ innerType: i, typeName: p0.ZodNullable, ...b0(x) });
class Sx extends E0 {
  _parse(x) {
    var t = s;
    const { ctx: r } = this[t(1348)](x);
    let e = r.data;
    return r[t(917)] === x0[t(1584)] && (e = this[t(407)].defaultValue()), this[t(407)][t(2556)][t(2650)]({ data: e, path: r[t(2610)], parent: r });
  }
  removeDefault() {
    var x = s;
    return this[x(407)][x(2556)];
  }
}
Sx.create = (i, x) => {
  var t = s;
  return new Sx({ innerType: i, typeName: p0[t(1298)], defaultValue: typeof x.default === t(2138) ? x[t(1479)] : () => x[t(1479)], ...b0(x) });
};
class kx extends E0 {
  [s(2650)](x) {
    var t = s;
    const { ctx: r } = this[t(1348)](x), e = { ...r, common: { ...r[t(2346)], issues: [] } }, a = this._def[t(2556)]._parse({ data: e[t(984)], path: e.path, parent: { ...e } });
    return px(a) ? a.then((n) => {
      var o = t;
      return { status: o(2073), value: n[o(975)] === "valid" ? n[o(1551)] : this[o(407)].catchValue({ get error() {
        var c = o;
        return new ke(e[c(2346)][c(2654)]);
      }, input: e.data }) };
    }) : { status: t(2073), value: a.status === "valid" ? a[t(1551)] : this[t(407)][t(1208)]({ get error() {
      var n = t;
      return new ke(e.common[n(2654)]);
    }, input: e.data }) };
  }
  [s(1532)]() {
    return this._def.innerType;
  }
}
kx.create = (i, x) => {
  var t = s;
  return new kx({ innerType: i, typeName: p0[t(1565)], catchValue: typeof x[t(1615)] === t(2138) ? x[t(1615)] : () => x.catch, ...b0(x) });
};
class Nr extends E0 {
  _parse(x) {
    var t = s;
    if (this[t(2700)](x) !== x0.nan) {
      const e = this[t(871)](x);
      return _(e, { code: B.invalid_type, expected: x0[t(422)], received: e.parsedType }), h0;
    }
    return { status: t(2073), value: x[t(984)] };
  }
}
Nr[s(1640)] = (i) => {
  var x = s;
  return new Nr({ typeName: p0[x(1262)], ...b0(i) });
};
class Us extends E0 {
  [s(2650)](x) {
    var t = s;
    const { ctx: r } = this[t(1348)](x), e = r[t(984)];
    return this._def[t(2122)]._parse({ data: e, path: r[t(2610)], parent: r });
  }
  [s(1593)]() {
    var x = s;
    return this[x(407)].type;
  }
}
class rr extends E0 {
  [s(2650)](x) {
    var t = s;
    const { status: r, ctx: e } = this[t(1348)](x);
    if (e[t(2346)][t(1927)])
      return (async () => {
        var n = t;
        const o = await this[n(407)].in[n(1476)]({ data: e[n(984)], path: e[n(2610)], parent: e });
        return o.status === "aborted" ? h0 : o[n(975)] === n(839) ? (r[n(839)](), Qe(o.value)) : this[n(407)][n(2076)][n(1476)]({ data: o[n(1551)], path: e[n(2610)], parent: e });
      })();
    {
      const a = this._def.in[t(2602)]({ data: e[t(984)], path: e[t(2610)], parent: e });
      return a[t(975)] === "aborted" ? h0 : a[t(975)] === t(839) ? (r[t(839)](), { status: t(839), value: a.value }) : this._def[t(2076)][t(2602)]({ data: a[t(1551)], path: e[t(2610)], parent: e });
    }
  }
  static [s(1640)](x, t) {
    var r = s;
    return new rr({ in: x, out: t, typeName: p0[r(448)] });
  }
}
class Ex extends E0 {
  [s(2650)](x) {
    var t = s;
    const r = this[t(407)][t(2556)][t(2650)](x), e = (a) => {
      var n = t;
      return Ue(a) && (a[n(1551)] = Object[n(850)](a[n(1551)])), a;
    };
    return px(r) ? r.then((a) => e(a)) : e(r);
  }
  [s(1593)]() {
    var x = s;
    return this[x(407)][x(2556)];
  }
}
Ex.create = (i, x) => {
  var t = s;
  return new Ex({ innerType: i, typeName: p0[t(1489)], ...b0(x) });
};
var p0;
(function(i) {
  var x = s;
  i[x(1724)] = x(1724), i[x(1256)] = x(1256), i.ZodNaN = x(1262), i[x(1086)] = x(1086), i[x(2141)] = x(2141), i[x(374)] = x(374), i.ZodSymbol = x(2639), i[x(2739)] = x(2739), i[x(401)] = x(401), i[x(375)] = x(375), i.ZodUnknown = "ZodUnknown", i[x(796)] = x(796), i[x(2560)] = x(2560), i[x(1703)] = x(1703), i[x(1350)] = x(1350), i[x(2187)] = x(2187), i[x(1987)] = x(1987), i[x(620)] = x(620), i[x(461)] = x(461), i.ZodRecord = "ZodRecord", i[x(1762)] = x(1762), i.ZodSet = x(1458), i.ZodFunction = x(1316), i[x(2362)] = x(2362), i[x(1481)] = "ZodLiteral", i.ZodEnum = "ZodEnum", i.ZodEffects = x(702), i.ZodNativeEnum = x(1613), i.ZodOptional = x(1164), i.ZodNullable = x(1980), i[x(1298)] = x(1298), i[x(1565)] = "ZodCatch", i.ZodPromise = x(1629), i.ZodBranded = x(1101), i[x(448)] = x(448), i.ZodReadonly = x(1489);
})(p0 || (p0 = {}));
const S = we[s(1640)], r0 = Ve[s(1640)], e0 = Lt.create, F0 = Ht.create, sx = Ut.create;
Ie[s(1640)];
const zx = Vt[s(1640)], P0 = pe[s(1640)], E = K0[s(1640)], J0 = vx[s(1640)], Vs = tr[s(1640)];
gx[s(1640)], Oe.create;
const H0 = yx.create, t0 = bx[s(1640)], C0 = De[s(1640)];
wx[s(1640)];
const Z = Se[s(1640)];
je.create;
var es;
class fi {
  constructor(x, t) {
    m0(this, "graphInstance");
    m0(this, es);
    var r = s;
    this[r(775)] = x, this[r(2656)] = t;
  }
  get [(es = s(2656), s(2577))]() {
    var x = s;
    const t = this[x(775)][x(2461)](this[x(2656)]);
    if (!t) throw new Error("No store found for node " + this[x(2656)]);
    return t;
  }
  get [s(2225)]() {
    var x = s;
    const t = this[x(775)][x(707)]()[x(1078)](this[x(2656)]);
    if (!t) throw new Error(x(1726) + this.nodeId);
    return new Proxy({}, { get: (e, a) => {
      var n = x;
      if (typeof a !== n(1278)) return;
      const o = t[n(2225)][a], c = a[n(410)](n(2040));
      if (!o && !c) throw new Error(n(1983) + a + " not found for node " + this[n(2656)]);
      return async (u, f) => {
        var d = n;
        const l = this[d(601)]();
        if (!l) throw new Error(d(656) + this[d(2656)]);
        const { transport: v, path: h } = l, m = this.graphInstance[d(633)]();
        if (!(o != null && o[d(1863)])) {
          const w = F0();
          let k;
          if (h[d(1027)] === 2) k = await v[d(1637)]({ method: d(2006), params: { action: a, data: u, sourceNodeId: m } }, w);
          else try {
            k = await v[d(1637)]({ method: d(2006), params: { action: "__proxy_forward", data: { targetNodeId: this[d(2656)], targetAction: a, targetData: u, forwardPath: h[d(771)](1) }, sourceNodeId: m } }, w);
          } catch (F) {
            throw console[d(2463)](d(2256) + a + ":", F), console[d(2463)]({ targetNodeId: this.nodeId, targetAction: a, targetData: u, forwardPath: h[d(771)](1) }), F;
          }
          return k;
        }
        let y;
        return h[d(1027)] === 2 ? y = v[d(2162)]({ action: a, data: u, sourceNodeId: m }, o[d(1785)], f) : y = v[d(2162)]({ action: d(1010), data: { targetNodeId: this[d(2656)], targetAction: a, targetData: u, forwardPath: h[d(771)](1) }, sourceNodeId: m }, o[d(1785)], f), y;
      };
    } });
  }
  [s(601)]() {
    var x = s;
    return this.graphInstance[x(2539)](this.nodeId);
  }
}
var xs, ts, rs;
class Ws {
  constructor(x) {
    m0(this, rs);
    m0(this, ts);
    m0(this, xs);
    var t = s;
    this[t(775)] = x, this[t(1083)] = x[t(1083)], this[t(950)] = x[t(950)];
  }
  [(rs = s(775), ts = s(1083), xs = s(950), s(2617))]({ store: x, storeName: t, onStateUpdate: r, requestInitialState: e }) {
    var a = s;
    this.broadcastManager.registerHandler(a(573) + t, (n) => {
      var o = a;
      try {
        n[o(1318)] !== this[o(775)][o(633)]() && r(n[o(1267)]);
      } catch (c) {
        console[o(2463)](o(2339) + t + ":", c);
      }
    });
  }
  initializeProducer({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: e }) {
    var a = s;
    const n = this[a(775)][a(633)](), o = async (f, d = !1) => {
      var l = a;
      if (this[l(1583)]()) try {
        await this.broadcastManager[l(918)](l(573) + t, { storeName: t, sourceNodeId: n, stateUpdate: f, isInitialState: d });
      } catch (h) {
        console[l(2463)](l(1971) + t + ":", h);
      }
    }, c = x[a(2621)]((f) => {
      o(f, !1);
    });
    e(() => {
      var f = a;
      o(x[f(2194)](), !0);
    });
    const u = a(2701) + t;
    return this[a(1083)].implementInternalAction(u, async () => {
      const f = x.getState();
      return await o(f, !0), { success: !0 };
    }), this[a(950)][a(703)](a(1395), async (f) => {
      var d = a;
      try {
        (f[d(1662)] === n || f.fromNode === n) && await o(x[d(2194)](), !0);
      } catch {
      }
    }), () => {
      var d;
      var f = a;
      c(), (d = this[f(1083)][f(1089)]) == null || d[f(2394)](u);
    };
  }
  [s(1583)]() {
    var t;
    var x = s;
    try {
      const r = this[x(775)][x(1324)], e = r && r[x(1795)]() > 0, a = ((t = this[x(950)][x(2687)]) == null ? void 0 : t[x(1288)]) > 0;
      return e || a;
    } catch {
      return !!this[x(950)];
    }
  }
  async broadcastCurrentState(x, t) {
    var r = s;
    const e = this[r(775)].getCurrentNodeId();
    if (this.isTransportReady()) try {
      await this[r(950)][r(918)](r(573) + t, { storeName: t, sourceNodeId: e, stateUpdate: x[r(2194)](), isInitialState: !0 });
    } catch {
    }
  }
}
function di({ graphInstance: i, store: x, name: t }) {
  const r = new Ws(i), e = (n) => {
    var o = K;
    const c = x[o(2194)](), u = { ...c, ...n };
    x.setState(u);
  }, a = async () => {
    var n = K;
    const o = n(2701) + t;
    try {
      const c = i[n(1078)](t);
      c && c[n(2225)] && c.actions[o] && await c[n(2225)][o]();
    } catch (c) {
      console[n(2279)](n(392) + t + ":", c);
    }
  };
  r.initializeConsumer({ store: x, storeName: t, onStateUpdate: e, requestInitialState: a });
}
function li({ graphInstance: i, store: x, name: t }) {
  const r = new Ws(i), e = async (n) => {
  }, a = (n) => {
  };
  return r.initializeProducer({ store: x, storeName: t, sendStateUpdate: e, onInitialStateRequested: a });
}
var as, ss, ns, is;
class hi {
  constructor(x) {
    m0(this, is, /* @__PURE__ */ new Map());
    m0(this, ns, /* @__PURE__ */ new Map());
    m0(this, ss, /* @__PURE__ */ new Set());
    m0(this, as);
    var t = s;
    this[t(1343)] = x;
  }
  createGlobalDispatcherForType(x) {
    return (t) => {
      var r = K;
      if (t && t[r(2074)] === this.currentNodeId) return;
      const e = this[r(2125)][r(2558)](x);
      if (e) {
        const { __origin: a, forwarded: n, ...o } = t || {};
        for (const c of e)
          try {
            c(o);
          } catch (u) {
            console[r(2463)](r(1242) + x + ":", u);
          }
      }
      !t.forwarded && this[r(2549)](x, t);
    };
  }
  async [(is = s(2125), ns = s(1843), ss = s(1934), as = s(1343), s(2549))](x, t) {
    var r = s;
    try {
      const e = { ...t, forwarded: !0 }, a = [...Array.from(this.transports[r(1215)]()), ...Array[r(429)](this[r(1934)])], n = a[r(802)]((o) => {
        var c = r;
        return o[c(890)]({ method: c(1321), params: { messageType: x, message: e } }).catch((u) => {
          var f = c;
          console[f(2463)](f(1732) + x + ":", u);
        });
      });
      await Promise[r(1676)](n);
    } catch (e) {
      console[r(2463)](r(1646), e);
    }
  }
  [s(703)](x, t) {
    var r = s;
    !this[r(2125)][r(1263)](x) && this[r(2125)][r(2151)](x, /* @__PURE__ */ new Set()), this[r(2125)][r(2558)](x)[r(1988)](t);
  }
  [s(977)](x) {
    var t = s;
    this[t(1966)](x);
  }
  [s(1966)](x) {
    var t = s;
    const r = E({ method: t0(t(1321)), params: E({ messageType: S(), message: F0() }) });
    x[t(934)](r, async (e) => {
      var a = t;
      const n = e.params[a(2609)];
      this[a(989)](n)(e.params[a(1912)]);
    });
  }
  [s(1807)](x, t) {
    var r = s;
    this[r(1843)][r(2151)](x, t), this[r(977)](t);
  }
  [s(860)](x) {
    var t = s;
    this[t(1843)].delete(x);
  }
  async broadcast(x, t) {
    var r = s;
    const e = [...Array[r(429)](this[r(1843)][r(1215)]()), ...Array[r(429)](this[r(1934)])], a = e[r(802)]((n) => {
      var o = r;
      return n[o(890)]({ method: o(1321), params: { messageType: x, message: t } });
    });
    await Promise[r(1676)](a);
  }
  [s(2330)](x) {
    var t = s;
    this[t(1934)][t(1988)](x), this[t(977)](x);
  }
  [s(2078)]() {
    var x = s;
    return Array[x(429)](this.broadcastHandlers[x(2559)]());
  }
  [s(2592)]() {
    var x = s;
    this[x(2125)][x(2592)](), this[x(1843)][x(2592)](), this[x(1934)][x(2592)]();
  }
}
var os, cs, us, fs;
class pi {
  constructor(x, t, r) {
    m0(this, fs, /* @__PURE__ */ new Map());
    m0(this, us);
    m0(this, cs);
    m0(this, os);
    var e = s;
    this[e(1984)] = x, this[e(1343)] = t, this[e(2001)] = r;
  }
  [(fs = s(1089), us = s(1984), cs = s(1343), os = s(2001), s(1798))](x, t) {
    var r = s;
    const e = this[r(1984)].getNode(this[r(1343)]);
    if (!e) throw new Error(r(1726) + this[r(1343)]);
    const a = e[r(2225)][x];
    if (!a) throw new Error(r(1983) + String(x) + r(1315) + this[r(1343)]);
    this[r(2047)](x, t, a), this.actionHandlers[r(2151)](x, t);
  }
  validateHandlerType(x, t, r) {
    var e = s;
    r[e(1863)];
  }
  [s(1850)](x, t) {
    var r = s;
    this[r(1089)].set(x, t);
  }
  [s(2330)](x) {
    var t = s;
    for (const [r, e] of this[t(1089)]) {
      const a = this[t(1984)].getNode(this.currentNodeId), n = a == null ? void 0 : a[t(2225)][r];
      if (r[t(410)]("__internal_") ? !1 : (n == null ? void 0 : n[t(1863)]) === !0) {
        const u = E({ action: t0(r) });
        x[t(1684)](u, async function* (f, d, l) {
          var v = t;
          const h = f[v(984)] || f, m = e(h, d, l);
          if (m && typeof m == "object" && Symbol.asyncIterator in m) for await (const y of m)
            yield y === void 0 ? {} : y;
          else {
            const y = await m;
            yield y === void 0 ? {} : y;
          }
        });
      }
    }
    this[t(2203)](x), this[t(2230)](x);
  }
  [s(2203)](x) {
    var t = s;
    const r = E({ action: t0("__proxy_forward") }), e = this;
    x[t(1684)](r, async function* (a, n, o) {
      var c = t;
      const u = a[c(984)] || a, { targetNodeId: f, targetAction: d, targetData: l, forwardPath: v } = u;
      if (!v || v[c(1027)] === 0) throw new Error(c(586));
      const h = v[0], m = v[c(771)](1);
      if (m[c(1027)] === 0 && h === e.currentNodeId) {
        const y = e.actionHandlers.get(d);
        if (!y) throw new Error(c(1983) + d + c(2737) + e.currentNodeId);
        const w = y(l, n, o);
        if (w && typeof w === c(644) && Symbol.asyncIterator in w) for await (const k of w)
          yield k === void 0 ? {} : k;
        else {
          const k = await w;
          yield k === void 0 ? {} : k;
        }
        return;
      }
      if (h === e[c(1343)] && m[c(1027)] > 0) {
        const y = m[0], w = e.getTransport(y);
        if (w) {
          const k = await w[c(2162)]({ action: c(1010), data: { targetNodeId: f, targetAction: d, targetData: l, forwardPath: m } }, E({}), o);
          for await (const F of k)
            yield F === void 0 ? {} : F;
          return;
        }
        throw new Error("Cannot forward to node " + y + c(1381));
      }
      throw new Error(c(1330) + e[c(1343)] + c(2440) + v);
    });
  }
  getRegisteredActions() {
    var x = s;
    return Array.from(this.actionHandlers[x(2559)]());
  }
  [s(2511)](x) {
    var t = s;
    return this[t(1089)][t(1263)](x);
  }
  [s(769)](x) {
    var t = s;
    return this[t(1089)][t(2558)](x);
  }
  clear() {
    var x = s;
    this[x(1089)][x(2592)]();
  }
  registerDirectRequestHandler(x, t, r) {
  }
  [s(2230)](x) {
    var t = s;
    const r = E({ method: t0(t(2006)), params: E({ action: S(), data: F0()[t(1823)]() }) }), e = this;
    x[t(1311)](r, async (a, n) => {
      var o = t;
      const { action: c, data: u } = a[o(1534)];
      if (c === o(1010)) return await e[o(1836)](u, n);
      const f = e[o(1089)][o(2558)](c);
      if (!f) throw new Error(o(1983) + c + o(2737) + e[o(1343)]);
      const d = f(u, n), l = await d;
      return l === void 0 ? {} : l;
    });
  }
  async handleDirectProxyForward(x, t) {
    var r = s;
    const { targetNodeId: e, targetAction: a, targetData: n, forwardPath: o } = x;
    if (!o || o[r(1027)] === 0) throw new Error("Invalid forward path for proxy action");
    const c = o[0], u = o[r(771)](1);
    if (u[r(1027)] === 0 && c === this[r(1343)]) {
      const f = this.actionHandlers[r(2558)](a);
      if (!f) throw new Error(r(1983) + a + r(2737) + this[r(1343)]);
      const d = f(n, t), l = await d;
      return l === void 0 ? {} : l;
    }
    if (c === this.currentNodeId && u[r(1027)] > 0) {
      const f = u[0], d = this.getTransport(f);
      if (d) return await d[r(1637)]({ method: "sdppp/directRequest", params: { action: r(1010), data: { targetNodeId: e, targetAction: a, targetData: n, forwardPath: u } } }, F0());
      throw new Error(r(1701) + f + r(1381));
    }
    throw new Error("Invalid proxy forwarding: current node " + this[r(1343)] + r(2440) + o);
  }
}
var ds, ls;
class mi {
  constructor(x, t) {
    m0(this, ls);
    m0(this, "currentNodeId");
    m0(this, ds, /* @__PURE__ */ new Set());
    var r = s;
    this[r(1984)] = x, this[r(1343)] = t;
  }
  markConnected(x) {
    this.connectedNodes.add(x);
  }
  [(ls = s(1984), ds = s(1394), s(2360))](x) {
    var t = s;
    this[t(1394)][t(2394)](x);
  }
  [s(852)](x) {
    var t = s;
    return this[t(1394)].has(x);
  }
  [s(1898)](x, t) {
    var r = s;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), a = [{ nodeId: x, path: [x] }];
    for (; a[r(1027)] > 0; ) {
      const { nodeId: n, path: o } = a[r(2310)]();
      if (e[r(1263)](n)) continue;
      e[r(1988)](n);
      const c = this.definition.getNeighbors(n);
      for (const u of c) {
        if (u === t) return [...o, u];
        !e.has(u) && a[r(1020)]({ nodeId: u, path: [...o, u] });
      }
    }
  }
  [s(615)]() {
    var x = s;
    return Array.from(this[x(1394)]);
  }
  [s(1795)]() {
    var x = s;
    return this[x(1394)][x(1288)];
  }
  [s(1163)]() {
    var x = s;
    const t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), e = [this.currentNodeId];
    for (r.add(this[x(1343)]); e[x(1027)] > 0; ) {
      const a = e[x(2310)](), n = this[x(1984)][x(663)](a);
      for (const o of n)
        !r[x(1263)](o) && (r[x(1988)](o), (this.connectedNodes[x(1263)](o) || this[x(645)](o, r)) && (t[x(1988)](o), e[x(1020)](o)));
    }
    return Array[x(429)](t);
  }
  [s(645)](x, t) {
    var r = s;
    const e = this[r(1898)](this[r(1343)], x);
    if (!e || e.length <= 1) return !1;
    for (let a = 1; a < e[r(1027)] - 1; a++)
      if (!this[r(1394)][r(1263)](e[a])) return !1;
    return !0;
  }
  [s(2592)]() {
    var x = s;
    this[x(1394)][x(2592)]();
  }
}
var hs, ps, ms, vs, gs, ys, bs;
class vi {
  constructor(x, t) {
    m0(this, bs);
    m0(this, ys);
    m0(this, gs, /* @__PURE__ */ new Map());
    m0(this, vs, /* @__PURE__ */ new Map());
    m0(this, ms);
    m0(this, ps);
    m0(this, "connectionManager");
    m0(this, hs, /* @__PURE__ */ new Map());
    var r = s;
    this[r(1984)] = x, this[r(1343)] = t, this[r(777)](), this[r(950)] = new hi(t), this[r(1083)] = new pi(x, t, (e) => this.getTransportInternal(e)), this[r(1324)] = new mi(x, t), this[r(1595)]();
  }
  [(bs = s(1984), ys = s(1343), gs = s(1492), vs = s(2585), ms = s(950), ps = s(1083), hs = s(764), s(777))]() {
    var x = s;
    for (const t of this[x(1984)][x(609)]()) {
      const r = this.definition[x(1078)](t);
      if (r && r[x(2577)]) {
        const e = this[x(1913)](r.store), a = $n(() => e);
        this[x(1492)].set(t, a);
      }
    }
  }
  [s(1913)](x) {
    var t = s;
    if (!x) return {};
    try {
      return x[t(2673)]({});
    } catch {
      return this[t(2155)](x);
    }
  }
  [s(2155)](x) {
    var t = s;
    if (!x || !x[t(556)]) return {};
    if (x[t(556)][t(2122)] === t(1479)) {
      const r = x[t(556)][t(1363)];
      return typeof r === t(2138) ? r() : r;
    }
    if (x.def[t(2122)] === t(644)) {
      const r = {};
      let e;
      try {
        e = x[t(556)].shape;
      } catch {
        return {};
      }
      if (e) for (const [a, n] of Object[t(1430)](e)) {
        const o = this.getDefaultValueFromField(n);
        o !== void 0 && (r[a] = o);
      }
      return r;
    }
    return {};
  }
  getDefaultValueFromField(x) {
    var t = s;
    if (x)
      try {
        return x[t(2673)](void 0);
      } catch {
        return this[t(2155)](x);
      }
  }
  async [s(1679)](x, t) {
    var r = s;
    if (!this[r(1984)][r(982)](this[r(1343)], x)) throw new Error(r(1739) + this[r(1343)] + r(806) + x);
    if (this[r(764)][r(1263)](x)) throw new Error(r(1302) + x);
    try {
      this.nodeTransports[r(2151)](x, t), this.connectionManager.markConnected(x), this[r(1428)](x, t), await this[r(1733)](x), await this[r(1630)](x);
    } catch (e) {
      throw this.cleanupConnection(x), e;
    }
  }
  [s(683)](x) {
    var t = s;
    this[t(2223)](x);
  }
  async [s(1733)](x) {
    var t = s;
    await new Promise((r) => setTimeout(r, 100));
    for (const [r, e] of this.nodeStores)
      if (r === this[t(1343)]) try {
        await this[t(950)].broadcast("store:update:" + r, { storeName: r, sourceNodeId: this.currentNodeId, stateUpdate: e.getState(), isInitialState: !0 });
      } catch {
      }
    try {
      await this[t(950)][t(918)](t(1395), { fromNode: this.currentNodeId, toNode: x });
    } catch {
    }
  }
  async requestInitialStateForNode(x) {
    var t = s;
    try {
      const r = this[t(1324)].getAllReachableNodes();
      for (const e of r)
        try {
          const a = t(2701) + e, n = this[t(1078)](e);
          if (n && n[t(2225)] && n[t(2225)][a]) {
            const o = n[t(2225)][a]({});
            await Promise[t(2684)]([o, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (a) {
          console[t(1448)](t(392) + e + ":", a);
        }
    } catch (r) {
      console.log(t(426) + x + ":", r);
    }
  }
  cleanupConnection(x) {
    var t = s;
    const r = this[t(764)][t(2558)](x);
    this[t(764)][t(2394)](x), this[t(1324)].markDisconnected(x), this.broadcastManager.removeMiddleware(x), r && r[t(2021)]();
  }
  setupNodeBindings(x, t) {
    var r = s;
    if (!this.nodeStores[r(2558)](this[r(1343)])) throw new Error(r(1257) + this[r(1343)]);
    this[r(1083)].mountTo(t), this[r(950)][r(1807)](x, t);
  }
  [s(1595)]() {
    var x = s;
    for (const [t, r] of this[x(1492)])
      t === this[x(1343)] ? li({ graphInstance: this, store: r, name: t }) : di({ graphInstance: this, store: r, name: t });
  }
  [s(1078)](x) {
    var t = s;
    if (!this[t(2585)].has(x)) {
      const r = new fi(this, x);
      this[t(2585)].set(x, r);
    }
    return this[t(2585)].get(x);
  }
  getTransportInternal(x) {
    var t = s;
    return this[t(764)][t(2558)](x);
  }
  [s(2539)](x) {
    var t = s;
    const r = this.nodeTransports.get(x);
    if (r) return { transport: r, path: [this[t(1343)], x] };
    const e = this[t(991)](this[t(1343)], x);
    if (e && e[t(1027)] > 1) {
      const a = e[1], n = this.nodeTransports[t(2558)](a);
      if (n) return { transport: n, path: e };
    }
  }
  [s(2461)](x) {
    var t = s;
    return this.nodeStores[t(2558)](x);
  }
  get [s(2577)]() {
    var x = s;
    const t = this[x(1492)][x(2558)](this.currentNodeId);
    if (!t) throw new Error(x(1356) + this[x(1343)]);
    return t;
  }
  get [s(2225)]() {
    var x = s;
    const t = this[x(1984)].getNode(this[x(1343)]);
    if (!t) throw new Error(x(726) + this.currentNodeId);
    return new Proxy({}, { get: (e, a) => {
      var n = x;
      if (typeof a != "string") return;
      const o = t[n(2225)][a];
      if (!o) throw new Error("Action " + a + n(2068) + this[n(1343)]);
      return (c, u) => {
        var f = n;
        const d = this.actionManager[f(769)](a);
        if (!d) throw new Error(f(2213) + a + " not implemented for node " + this[f(1343)]);
        const l = { nodeId: this[f(1343)] };
        if (o[f(1863)] === !0) {
          const v = d(c, l, u);
          return v && typeof v === f(644) && Symbol[f(898)] in v ? async function* () {
            for await (const h of v)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await v;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          var v = f;
          const h = d(c, l, u);
          if (h && typeof h === v(644) && Symbol[v(898)] in h) {
            const m = h[Symbol[v(898)]](), y = await m[v(1180)]();
            return y[v(1551)] === void 0 ? {} : y[v(1551)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [s(707)]() {
    var x = s;
    return this[x(1984)];
  }
  [s(633)]() {
    return this.currentNodeId;
  }
  [s(2075)](x) {
    var t = s;
    return this[t(2539)](x);
  }
  [s(1798)](x, t) {
    var r = s;
    this.actionManager[r(1798)](x, t);
  }
  destroy() {
    var x = s;
    const t = Array[x(429)](this.nodeTransports.keys());
    for (const r of t)
      this[x(2223)](r);
    this[x(950)][x(2592)](), this[x(1083)][x(2592)](), this[x(1324)][x(2592)]();
  }
  [s(991)](x, t) {
    var r = s;
    return this[r(1324)].findPath(x, t);
  }
  [s(1898)](x, t) {
    var r = s;
    return this[r(991)](x, t);
  }
  async [s(918)](x, t) {
    var r = s;
    const e = { ...t, __origin: this[r(1343)] };
    return this[r(950)].broadcast(x, e);
  }
  [s(2632)](x, t) {
    var r = s;
    this[r(950)][r(703)](x, t);
  }
}
function gi(i) {
  const x = new Ln(i);
  return { joinAs(t) {
    var r = K;
    if (!x[r(1078)](t)) throw new Error(r(1420) + String(t) + r(972));
    return new vi(x, t);
  }, getDefinition() {
    return i;
  }, getNodeIds() {
    var t = K;
    return x[t(609)]();
  }, getNeighbors(t) {
    return x.getNeighbors(t);
  }, hasEdge(t, r) {
    var e = K;
    return x[e(982)](t, r);
  }, hasPath(t, r) {
    var e = K;
    return x[e(1002)](t, r);
  }, findPath(t, r) {
    var e = K;
    return x[e(1898)](t, r);
  } };
}
const qr = { INTERCEPTOR_ERROR: s(643) };
var ws, Ss, ks, Es;
class Tr extends (Es = Error, ks = s(2122), Ss = s(1109), ws = s(459), Es) {
  constructor(t, r, e, a) {
    var n = s;
    super(e);
    m0(this, ks);
    m0(this, Ss);
    m0(this, ws);
    this[n(1483)] = "MiddlewareError", this[n(2122)] = t, this.method = r, this[n(459)] = a;
  }
}
var Ps, Is, Rs, Cs, Fs, Ns, qs, Ts, As;
class yi {
  constructor(x, t = {}) {
    m0(this, As);
    m0(this, Ts, null);
    m0(this, qs);
    m0(this, Ns, /* @__PURE__ */ new Map());
    m0(this, Fs, /* @__PURE__ */ new Map());
    m0(this, Cs, /* @__PURE__ */ new Map());
    m0(this, Rs, /* @__PURE__ */ new Map());
    m0(this, "messageHandlers", []);
    m0(this, Is, []);
    m0(this, Ps, []);
    m0(this, "stats", { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    var r = s;
    this[r(591)] = x, this.options = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async [(As = s(591), Ts = s(841), qs = s(1582), Ns = s(2608), Fs = s(2285), Cs = s(1279), Rs = s(1814), Is = s(1647), Ps = s(2571), s(1679))](x) {
    var t = s;
    this[t(841)] = x, x[t(1835)] = (r) => {
      var e = t;
      this[e(1309)](r);
    }, x.onclose = () => {
      var r = t;
      this[r(1647)].forEach((e) => e());
    }, x[t(1604)] = (r) => {
      var e = t;
      this[e(2571)][e(1455)]((a) => a(r));
    }, await this[t(591)].connect(this);
  }
  async [s(1309)](x) {
    var t = s;
    this.log(t(377), "Incoming message:", x);
    try {
      if (this.isRequest(x) && await this[t(1244)](x) || this[t(1491)](x) && await this[t(1887)](x))
        return;
      this.messageHandlers[t(1455)]((r) => r(x));
    } catch (r) {
      this[t(2710)][t(2400)]++, this[t(1448)]("error", t(2438), r), this[t(462)].forEach((e) => e(x));
    }
  }
  async [s(1244)](x) {
    var t = s;
    const r = this[t(2608)][t(2558)](x[t(1109)]);
    if (!r) return !1;
    try {
      this[t(2710)][t(504)]++;
      const e = await r(x, {});
      return this.realTransport && "id" in x && await this[t(841)][t(2470)]({ jsonrpc: "2.0", id: x.id, result: e }), !0;
    } catch (e) {
      return this[t(2710)][t(2400)]++, this[t(841)] && "id" in x && await this[t(841)][t(2470)]({ jsonrpc: t(884), id: x.id, error: { code: -32603, message: t(797) + JSON[t(2351)](x.params) + " " + e.message } }), !0;
    }
  }
  async [s(1887)](x) {
    var t = s;
    const r = this.notificationHandlers[t(2558)](x[t(1109)]);
    if (!r) return !1;
    try {
      return this.stats.notificationsHandled++, await r(x), !0;
    } catch (e) {
      return this.stats[t(2400)]++, this[t(1448)](t(2463), t(1046) + x.method + ":", e), !0;
    }
  }
  async [s(2470)](x) {
    var t = s;
    this[t(1448)](t(377), t(607), x);
    try {
      if (this[t(2334)](x)) {
        const r = await this[t(2383)](x);
        if (r.success) {
          if (r[t(1801)] === null) return;
          r[t(1801)] && (x = { ...r[t(1801)], jsonrpc: t(884) }, this[t(2710)][t(373)]++);
        } else if (this.options.continueOnInterceptorError) this.log("warn", "Request interceptor failed for " + x[t(1109)] + ":", r[t(2463)]);
        else throw r[t(2463)];
      }
      if (this.isNotification(x)) {
        const r = await this.executeOutgoingNotificationInterceptor(x);
        if (r[t(2220)]) {
          if (r[t(1801)] === null) return;
          r.result && (x = { ...r[t(1801)], jsonrpc: t(884) }, this[t(2710)][t(1135)]++);
        } else if (this[t(1582)][t(627)]) this[t(1448)](t(2279), t(1169) + x.method + ":", r.error);
        else throw r.error;
      }
      this[t(841)] && await this[t(841)][t(2470)](x);
    } catch (r) {
      throw this[t(2710)][t(2400)]++, r;
    }
  }
  async start() {
    var x = s;
    this[x(841)] && await this[x(841)].start();
  }
  async close() {
    var x = s;
    this[x(841)] && await this[x(841)][x(664)]();
  }
  set [s(1835)](x) {
    var t = s;
    this[t(462)] = [x];
  }
  set onclose(x) {
    var t = s;
    this[t(1647)] = [x];
  }
  set onerror(x) {
    this.errorHandlers = [x];
  }
  async [s(2383)](x) {
    var t = s;
    const r = this[t(1279)][t(2558)](x.method);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(2254)](r(x), this[t(1582)][t(887)]) };
    } catch (e) {
      return this.stats[t(2400)]++, { success: !1, error: new Tr(qr.INTERCEPTOR_ERROR, x[t(1109)], t(2411) + e.message, e) };
    }
  }
  async executeOutgoingNotificationInterceptor(x) {
    var t = s;
    const r = this[t(1814)][t(2558)](x[t(1109)]);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(2254)](r(x), this[t(1582)].interceptorTimeout) };
    } catch (e) {
      return this[t(2710)][t(2400)]++, { success: !1, error: new Tr(qr[t(599)], x[t(1109)], t(1445) + e[t(1912)], e) };
    }
  }
  async [s(1637)](x, t) {
    var r = s;
    return await this[r(591)][r(1637)](x, t, { timeout: 36e5 });
  }
  async notification(x) {
    var t = s;
    return await this.protocol[t(890)](x);
  }
  [s(1311)](x, t) {
    var r = s;
    const e = x[r(2104)][r(1109)][r(1551)];
    this[r(2608)].set(e, t);
  }
  setNotificationHandler(x, t) {
    var r = s;
    const e = x.shape[r(1109)][r(1551)];
    this[r(2285)][r(2151)](e, t);
  }
  [s(754)](x, t) {
    var r = s;
    const e = x.shape[r(1109)][r(1551)];
    this[r(1279)].set(e, t);
  }
  [s(674)](x, t) {
    var r = s;
    const e = x[r(2104)][r(1109)][r(1551)];
    this[r(1814)][r(2151)](e, t);
  }
  [s(1756)](x) {
    var t = s;
    this[t(2608)][t(2394)](x);
  }
  [s(1731)](x) {
    var t = s;
    this[t(2285)][t(2394)](x);
  }
  [s(2482)](x) {
    var t = s;
    this[t(1279)][t(2394)](x);
  }
  [s(1258)](x) {
    var t = s;
    this.outgoingNotificationInterceptors[t(2394)](x);
  }
  hasRequestHandler(x) {
    var t = s;
    return this[t(2608)][t(1263)](x);
  }
  [s(1494)](x) {
    var t = s;
    return this[t(2285)][t(1263)](x);
  }
  [s(765)](x) {
    var t = s;
    return this.outgoingRequestInterceptors[t(1263)](x);
  }
  [s(1681)](x) {
    var t = s;
    return this.outgoingNotificationInterceptors[t(1263)](x);
  }
  [s(2377)]() {
    var x = s;
    return { ...this[x(2710)] };
  }
  resetStats() {
    this.stats = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [s(1699)]() {
    var x = s;
    return this[x(591)];
  }
  [s(2021)]() {
    var x = s;
    this[x(2608)][x(2592)](), this[x(2285)][x(2592)](), this[x(1279)].clear(), this[x(1814)][x(2592)]();
  }
  [s(2334)](x) {
    var t = s;
    return x[t(605)] === t(884) && t(1109) in x && "id" in x;
  }
  [s(1491)](x) {
    var t = s;
    return x[t(605)] === t(884) && "method" in x && !("id" in x);
  }
  async withTimeout(x, t) {
    var r = s;
    const e = new Promise((a, n) => {
      var o = K;
      setTimeout(() => n(new Error(o(1338))), t);
    });
    return await Promise[r(2684)]([x, e]);
  }
  [s(1448)](x, t, ...r) {
    var e = s;
    if (!this[e(1582)][e(377)] && x === e(377)) return;
    const a = e(1048);
    switch (x) {
      case e(377):
        console.debug(a, t, ...r);
        break;
      case e(937):
        console.info(a, t, ...r);
        break;
      case "warn":
        console.warn(a, t, ...r);
        break;
      case e(2463):
        console[e(2463)](a, t, ...r);
        break;
    }
  }
}
E({ method: t0(s(1446)), params: E({ requestId: S(), data: F0(), error: S()[s(2526)](), finished: e0() }) }), E({ method: t0(s(758)), params: E({ action: S(), data: F0() }) }), E({ method: t0(s(851)), params: E({ requestId: S() }) });
const bi = E({ method: t0(s(1446)), params: E({ requestId: S(), data: F0(), error: S()[s(2526)](), finished: e0() }) }), wi = E({ method: t0("sdppp/streamRequest"), params: E({ action: S(), data: F0() }) }), Si = E({ method: t0("sdppp/abort"), params: E({ requestId: S() }) });
var Os;
class ki {
  constructor() {
    m0(this, Os, /* @__PURE__ */ new Map());
    m0(this, "waiters", /* @__PURE__ */ new Map());
  }
  [(Os = s(431), s(1020))](x) {
    var t = s;
    const { requestId: r } = x[t(1534)], e = this[t(431)][t(2558)](r) || [], a = this.waiters[t(2558)](r) || [];
    a.length > 0 ? a[t(2310)]()(x[t(1534)]) : (e.push(x[t(1534)]), this[t(431)][t(2151)](r, e));
  }
  async [s(907)](x) {
    var t = s;
    const r = this[t(431)].get(x) || [];
    return r[t(1027)] > 0 ? r[t(2310)]() : new Promise((e) => {
      var a = t;
      const n = this.waiters[a(2558)](x) || [];
      n[a(1020)](e), this.waiters.set(x, n);
    });
  }
  [s(2021)](x) {
    var t = s;
    this[t(431)][t(2394)](x), this[t(2134)][t(2394)](x);
  }
}
var Ds, js, Ms, Ls;
class Ei extends yi {
  constructor(t, r = {}) {
    var e = s;
    super(t, r);
    m0(this, Ls, /* @__PURE__ */ new Map());
    m0(this, Ms, 1);
    m0(this, js, /* @__PURE__ */ new Map());
    m0(this, Ds, new ki());
    this[e(1878)]();
  }
  setupStreamProtocolHandlers() {
    var t = s;
    this[t(1800)](), this[t(2452)](), this[t(1653)]();
  }
  [(Ls = s(547), Ms = s(1901), js = s(1816), Ds = s(2450), s(1800))]() {
    var t = s;
    this[t(934)](bi, async (r) => {
      var e = t;
      this.notificationQueue[e(1020)](r);
    });
  }
  [s(2452)]() {
    this.setRequestHandler(Si, async (t, r) => {
      var e = K;
      const { requestId: a } = t[e(1534)], n = this[e(1816)].get(a);
      return n && (n.abort(), this[e(1816)][e(2394)](a)), { success: !0 };
    });
  }
  [s(1653)]() {
    var t = s;
    this[t(1311)](wi, async (r, e) => {
      var a = t;
      const n = a(589) + this[a(1901)]++, o = this.streamRequestorHandlers[a(2558)](r.params[a(537)]);
      if (!o) throw new Error(a(2037) + r.params.action);
      const c = new AbortController();
      return this.runningRequests[a(2151)](n, c), this[a(577)](n, o, r[a(1534)], e, c), { requestId: n };
    });
  }
  async [s(577)](t, r, e, a, n) {
    var o = s;
    try {
      const c = r(e, a, n[o(2337)]);
      for await (const u of c) {
        if (n.signal.aborted) break;
        await this[o(890)]({ method: o(1446), params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !n[o(2337)][o(1019)] && await this[o(890)]({ method: o(1446), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n[o(2337)][o(1019)] && await this[o(890)]({ method: o(1446), params: { requestId: t, data: null, error: c[o(1912)], finished: !0 } });
    } finally {
      this[o(1816)][o(2394)](t);
    }
  }
  registerStreamRequestorHandler(t, r) {
    var e = s;
    this[e(547)][e(2151)](t[e(2104)][e(537)].value, r);
  }
  async [s(2162)](t, r, e) {
    var a = s;
    this[a(2112)](e);
    const n = await this[a(958)](t), o = this[a(2329)](n), c = this[a(2667)]();
    return this.createAsyncIterator(o, c, n, e);
  }
  [s(2112)](t) {
    var r = s;
    if (t && t[r(1019)]) throw new Error(r(1432));
  }
  async sendStreamRequestorRequest(t) {
    var r = s;
    return (await this[r(1637)]({ method: r(758), params: { action: t.action, data: t[r(984)] } }, E({ requestId: S() })))[r(430)];
  }
  [s(2329)](t) {
    return this.notificationQueue;
  }
  createStreamState() {
    return { finished: !1, error: null };
  }
  [s(1190)](t, r, e, a) {
    var n = s;
    const o = this;
    return { async *[Symbol[n(898)]]() {
      var c = n;
      try {
        for (; !r[c(1693)] && !r[c(2463)]; ) {
          if (a && a[c(1019)])
            throw await o[c(1637)]({ method: "sdppp/abort", params: { requestId: e } }, E({ success: e0() })), new Error(c(2262));
          const u = await t[c(907)](e);
          if (u[c(2463)])
            throw r[c(2463)] = u[c(2463)], new Error(u[c(2463)]);
          if (u[c(1693)]) {
            r[c(1693)] = !0;
            break;
          }
          u[c(984)] !== null && (yield u[c(984)]);
        }
      } finally {
        t[c(2021)](e);
      }
    } };
  }
  [s(1361)]() {
    var t = s;
    return this[t(1816)][t(1288)];
  }
  async [s(1460)](t) {
    var r = s;
    const e = this.runningRequests[r(2558)](t);
    return e ? (e[r(1747)](), this[r(1816)][r(2394)](t), !0) : !1;
  }
  [s(2227)]() {
    var t = s;
    for (const [r, e] of this[t(1816)])
      e[t(1747)]();
    this[t(1816)][t(2592)]();
  }
  [s(2021)]() {
    var t = s;
    super[t(2021)](), this[t(2227)](), this.streamRequestorHandlers[t(2592)]();
  }
}
E({ id: S(), method: S(), params: F0()[s(1823)](), traceId: S().optional() }), E({ id: S(), result: F0()[s(1823)](), error: E({ code: r0(), message: S(), data: F0()[s(1823)]() })[s(1823)]() }), E({ method: S(), params: F0().optional() }), E({ method: t0("sdppp/streamRequest"), params: E({ action: S(), data: F0() }) }), E({ method: t0(s(1446)), params: E({ requestId: S(), data: F0()[s(1823)](), error: S()[s(2526)]()[s(1823)](), finished: e0()[s(1479)](!1) }) }), E({ method: t0(s(851)), params: E({ requestId: S() }) }), E({ method: t0("sdppp/broadcast"), params: E({ messageType: S(), message: F0() }) });
function Zs(i) {
  var x = s;
  return i && i[x(542)] && Object.prototype[x(2036)][x(1580)](i, x(1479)) ? i.default : i;
}
const Fe = E({ leftDistance: r0(), topDistance: r0(), rightDistance: r0(), bottomDistance: r0(), width: r0(), height: r0() }), Me = { name: S(), uiWeight: r0() }, Pi = E({ ...Me, outputType: t0("images"), options: E({ required: e0(), maxCount: r0().optional(), maskMode: e0()[s(1823)]() }) }), Ii = E({ ...Me, outputType: t0(s(1716)), options: E({ required: e0() }) }), Ri = E({ ...Me, outputType: t0(s(1278)), options: E({ required: e0() }) }), Ci = E({ ...Me, outputType: t0(s(2665)), options: E({ required: e0() }) }), Fi = E({ ...Me, outputType: t0(s(2479)), options: E({ required: e0(), min: r0()[s(1823)](), max: r0()[s(1823)](), step: r0()[s(1823)](), random: e0()[s(1823)](), slider: e0().optional() }) }), Ni = E({ ...Me, outputType: t0(s(1658)), options: E({ required: e0(), values: P0(S()), labels: P0(S())[s(1823)]() }) }), qi = E({ ...Me, outputType: t0(s(1744)), options: E({ required: e0(), values: P0(S()) }) }), Ti = Vs(s(2161), [Pi, Ii, Ri, Ci, Fi, Ni, qi]), Ai = E({ id: S(), title: S(), widgets: P0(Ti), uiWeightSum: r0() }), Oi = E({ widgetableID: S(), widgetablePath: S(), nodes: H0(S(), Ai), nodeIndexes: P0(S()), note: S()[s(1823)](), options: H0(S(), F0()) }), Di = E({ bannerData: F0()[s(1823)](), refreshable: e0()[s(1479)](!1), backwardable: e0()[s(1479)](!1), loginable: e0().default(!1), runnable: e0()[s(1479)](!1), workBoundaries: H0(r0(), Fe).default({}), workBoundaryMaxSizes: H0(r0(), r0())[s(1479)]({}) }), ji = E({ uname: S().default(""), activeDocumentID: r0()[s(1479)](0), layers: P0(E({ id: r0(), name: S(), identify: S() }))[s(1479)]([]), actions: P0(S()).default([]), theme: S()[s(1479)](s(1480)), sdpppX: H0(S(), F0())[s(1479)]({}), locale: C0([s(358), s(1560)])[s(1479)](s(1560)), comfyWebviewConnectStatus: C0([s(1685), s(1588), "disconnected"])[s(1479)](s(2464)), comfyWebviewLoadError: S()[s(1479)](""), comfyWebviewLoading: e0()[s(1479)](!1), comfyWebviewVersion: S().default(""), comfyHTTPCode: r0().default(200), comfyURL: S().default(""), sdkWebviewFocusing: e0()[s(1479)](!1), sdkWebviewConnectStatus: C0(["connecting", s(1588), "disconnected"])[s(1479)]("disconnected"), isLogin: e0().default(!1), isGuest: e0()[s(1479)](!1), requestingLogin: e0()[s(1479)](!1), loginMessage: S()[s(1479)](""), token: S()[s(1479)](""), userInfo: H0(S(), F0()).default({}), taskLastRun: r0().default(0), canvasStateID: r0().optional(), selectionStateID: S()[s(1823)](), canvasThumbnail: S().default(""), curlayerThumbnail: S()[s(1479)]("") }), Mi = E({ widgetableStructure: Oi.default({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: H0(S(), P0(F0()))[s(1479)]({}), widgetableErrors: H0(S(), S())[s(1479)]({}), queueSize: r0()[s(1479)](0), lastError: S()[s(1479)](""), progress: r0()[s(1479)](0), executingNodeTitle: S().default(""), executingNodeID: S()[s(1479)](""), graphProgress: r0()[s(1479)](0), comfyUserToken: S()[s(1479)](""), comfyOrgLoggedIn: e0()[s(1479)](!1), comfyOrgAPIKey: S().default(""), comfyWSState: C0([s(1588), s(784)]).default(s(1588)), lastRunTime: r0()[s(1479)](0) }), Li = { backward: { requestSchema: zx(), responseSchema: E({ success: e0() }) }, refresh: { requestSchema: zx(), responseSchema: E({ success: e0() }) }, run: { requestSchema: zx(), responseSchema: E({ success: e0() }) } }, $i = { log: { requestSchema: E({ level: C0([s(1448), s(937), s(2279), s(2463)]), messages: P0(S()) }), responseSchema: E({}) }, openExternalLink: { requestSchema: E({ url: S() }), responseSchema: E({ error: S()[s(1823)]() }) }, getStorage: { requestSchema: E({ key: S() }), responseSchema: E({ value: S(), error: S().optional() }) }, setStorage: { requestSchema: E({ key: S(), value: S() }), responseSchema: E({ error: S()[s(1823)]() }) }, removeStorage: { requestSchema: E({ key: S() }), responseSchema: E({ error: S()[s(1823)]() }) }, keyboardAction: { requestSchema: E({ keycode: S() }), responseSchema: E({}) }, setComfyWebviewURL: { requestSchema: E({ url: S() }), responseSchema: E({}) }, getImageBase64: { requestSchema: E({ token: S() }), responseSchema: E({ base64: S()[s(1823)](), mimeType: S()[s(1823)](), error: S()[s(1823)]() }) }, uploadComfyImage: { requestSchema: E({ uploadInput: E({ type: t0("buffer").or(t0(s(2153))), tokenOrBuffer: F0(), fileName: S() }), overwrite: e0()[s(1823)]()[s(1479)](!0) }), responseSchema: E({ name: S() }) }, proxiedFetch: { requestSchema: E({ url: S(), method: S().optional(), headers: H0(S())[s(1823)](), body: F0().optional(), bodyType: C0([s(2016), s(1478), s(1285)])[s(1823)]() }), responseSchema: E({ success: e0(), status: r0()[s(1823)](), statusText: S()[s(1823)](), headers: H0(S())[s(1823)](), data: F0()[s(1823)](), error: S()[s(1823)]() }) }, openaiImageEdit: { requestSchema: E({ apiKey: S(), baseURL: S(), imageToken: S(), prompt: S(), model: S() }), responseSchema: E({ success: e0(), imageUrl: S()[s(1823)](), apiTime: r0().optional(), error: S()[s(1823)]() }) }, geminiImageGenerate: { requestSchema: E({ apiKey: S(), baseURL: S()[s(1823)](), imageInputs: P0(S())[s(1823)](), imageInput: S().optional(), imageInputType: C0([s(2153), s(2633)]), prompt: S() }), responseSchema: E({ success: e0(), imageUrl: S()[s(1823)](), apiTime: r0()[s(1823)](), error: S().optional() }) } };
E({ thumbnail_url: S()[s(1823)](), file_token: S()[s(1823)](), source: S()[s(1823)](), error: S().optional() });
const Ar = E({ boundary: C0([s(2551), "curlayer", s(1605)]), content: C0(["canvas", "curlayer", "selection"]).or(S()), imageSize: r0(), imageQuality: r0(), cropBySelection: C0(["no", s(1952), s(1624)]) }), Or = E({ content: C0([s(2551), s(2405), "selection"]), reverse: e0(), imageSize: r0() });
E({ selection: C0([s(2649), s(1690), "newlayer_curlayer", "newlayer_selection", s(2180), "curlayer_curlayer", s(2058), s(2649)]), url: S(), source: S(), cropBySelection: C0(["no", s(1952), s(1624)]) });
const zi = { downloadImage: { requestSchema: E({ url: S() }), responseSchema: E({ thumbnail_url: S()[s(1823)](), nativePath: S()[s(1823)](), width: r0()[s(1823)](), height: r0()[s(1823)](), error: S()[s(1823)]() }) }, deleteDownloadedImage: { requestSchema: E({ nativePaths: P0(S()) }), responseSchema: E({ error: S()[s(1823)]() }) }, requestAndDoSaveImage: { requestSchema: E({ nativePaths: P0(S()) }), responseSchema: E({ error: S()[s(1823)]() }) } }, Hi = E({ passwordPayload: E({ username: S(), password: S() }).or(E({ email: S(), password: S() })).or(E({ phone: S(), password: S() })).or(E({ identifier: S(), password: S() })) }).or(E({ passcodePayload: E({ phone: S(), code: S() }).or(E({ email: S(), code: S() })) })), Ui = E({ passwordPayload: E({ username: S(), password: S() }).or(E({ email: S(), password: S() })).or(E({ phone: S(), password: S() })).or(E({ identifier: S(), password: S() })) }).or(E({ passcodePayload: E({ phone: S(), code: S() }).or(E({ email: S(), code: S() })) })), Vi = { register: { requestSchema: Hi, responseSchema: E({}) }, login: { requestSchema: Ui, responseSchema: E({}) }, sendPassCode: { requestSchema: E({ phone: S()[s(1823)](), email: S()[s(1823)]() }), responseSchema: E({}) }, logout: { requestSchema: E({}), responseSchema: E({}) }, guestLogin: { requestSchema: E({}), responseSchema: E({}) } }, Hx = E({ taskId: S(), taskName: S(), status: C0([s(2424), "completed", s(2003), s(1567)]), currentStep: r0().optional(), totalSteps: r0()[s(1823)](), stepDescription: S().optional(), progressPercentage: r0()[s(1614)](0)[s(1743)](100)[s(1823)](), startTime: S(), endTime: S()[s(1823)](), error: S()[s(1823)](), errorCode: S().optional(), result: F0().optional(), metadata: H0(F0()).optional() }), Ux = E({ success: e0(), error: S()[s(1823)]() }), Wi = { taskAdd: { requestSchema: Hx, responseSchema: Ux }, taskUpdate: { requestSchema: Hx[s(379)]()[s(1058)]({ taskId: !0 }), responseSchema: Ux }, taskRemove: { requestSchema: Hx.pick({ taskId: !0 }), responseSchema: Ux } }, Zi = { manageGuides: { requestSchema: E({ action: C0(["create", "clear"]), rect: Fe[s(1823)]() }), responseSchema: E({ success: e0() }) }, openImagesFromFile: { requestSchema: E({ nativePath: S(), boundary: Fe[s(1823)]() }), responseSchema: E({ success: e0(), documentId: r0(), documentName: S(), width: r0(), height: r0() }) }, getBoundary: { requestSchema: E({ type: C0([s(2405), s(1605)]) }), responseSchema: Fe }, getImage: { requestSchema: E({ boundary: J0([C0([s(2551), "curlayer", s(1605)]), Fe]), content: J0([C0([s(2551), "curlayer"]), S()]), imageSize: r0(), imageQuality: r0(), cropBySelection: C0(["no", "positive", s(1624)]), SkipNonNormalLayer: e0() }), responseSchema: E({ thumbnail_url: S()[s(1823)](), file_token: S()[s(1823)](), source: S()[s(1823)](), error: S()[s(1823)]() }) }, getMask: { requestSchema: E({ boundary: J0([C0([s(2551), s(2405), s(1605)]), Fe]), content: C0([s(2551), "curlayer", s(1605)]), reverse: e0(), imageSize: r0() }), responseSchema: E({ thumbnail_url: S()[s(1823)](), file_token: S().optional(), source: S()[s(1823)](), error: S().optional() }) }, importImage: { requestSchema: E({ nativePath: S(), boundary: J0([C0([s(2551), s(2405), s(1605)]), Fe])[s(1823)](), type: C0(["canvas", s(2405), "newdoc", s(889)]), sourceWidth: r0().optional(), sourceHeight: r0()[s(1823)]() }), responseSchema: E({ success: e0(), layers: P0(E({ identify: S() })).optional(), message: S()[s(1823)](), error: S().optional() }) }, showBoundarySelectionDialog: { requestSchema: E({ additionalData: H0(F0())[s(1823)]() }), responseSchema: E({ boundary: C0([s(2551), s(2405), s(1605)]).optional(), cancelled: e0().optional() }) }, selectCanvasImage: { requestSchema: E({ additionalData: H0(F0()).optional() }), responseSchema: E({ getImageParams: Ar[s(1823)](), source: S()[s(1823)](), cancelled: e0()[s(1823)]() }) }, selectLayerImage: { requestSchema: E({ additionalData: H0(F0())[s(1823)]() }), responseSchema: E({ getImageParams: Ar[s(1823)](), source: S()[s(1823)](), cancelled: e0()[s(1823)]() }) }, selectLayerMask: { requestSchema: E({ additionalData: H0(F0())[s(1823)]() }), responseSchema: E({ getMaskParams: Or[s(1823)](), source: S()[s(1823)](), cancelled: e0().optional() }) }, selectSelectionMask: { requestSchema: E({ additionalData: H0(F0())[s(1823)]() }), responseSchema: E({ getMaskParams: Or[s(1823)](), source: S()[s(1823)](), cancelled: e0()[s(1823)]() }) } }, Bi = E({ workflows: P0(S()), error: S().optional() }), Ki = E({ success: e0(), nodeErrors: H0(S())[s(1823)](), prompt_ids: P0(S()).optional(), images: P0(E({ url: S(), thumbnail: S() }))[s(1823)]() }), Ji = { setWidgetValue: { requestSchema: E({ values: P0(E({ nodeID: S(), widgetIndex: r0(), value: H0(S(), F0()).or(S()).or(r0()).or(e0()).or(P0(F0())) })) }), responseSchema: E({ success: e0() }) }, openWorkflow: { requestSchema: E({ workflow_path: S(), reset: e0()[s(1479)](!1) }), responseSchema: E({ success: e0() }) }, openWorkflowJSON: { requestSchema: E({ workflow_content: H0(F0()), workflow_path: S() }), responseSchema: E({ success: e0() }) }, listWorkflows: { requestSchema: E({ listMode: S()[s(1823)](), sdpppID: S()[s(1823)](), sdpppToken: S()[s(1823)]() }), responseSchema: Bi }, saveWorkflow: { requestSchema: E({ workflow_path: S(), from_sid: S()[s(1823)]() }), responseSchema: E({ success: e0() }) }, run: { requestSchema: E({ size: r0() }), responseSchema: Ki, stream: !0 }, stopAll: { requestSchema: E({}), responseSchema: E({ success: e0() }) } }, Gi = { setNodeTitle: { requestSchema: E({ node_id: S(), title: S() }), responseSchema: E({ success: e0() }) }, reboot: { requestSchema: E({}), responseSchema: E({ success: e0(), error: S()[s(1823)]() }) }, setComfyOrgAPIKey: { requestSchema: E({ api_key: S() }), responseSchema: E({ success: e0() }) }, logout: { requestSchema: E({}), responseSchema: E({ success: e0() }) } }, Qi = gi({ nodes: { sdk: { store: Di, actions: { ...Li } }, uxp: { store: ji, actions: { ...zi, ...$i, ...Vi, ...Wi, ...Zi } }, comfy: { store: Mi, actions: { ...Ji, ...Gi } } }, edges: [["sdk", s(1985)], [s(1734), "uxp"]] }), R0 = Qi[s(2543)](s(1734));
globalThis[s(2603)] = R0, globalThis.sdpppX2 = globalThis.sdpppX2 || {};
const _e = globalThis.sdpppX2, Xi = { "preview.show": "显示预览框 ({{count}}张图片)", "gateway.select_ai_service": s(485), "provider.select.title": "选择 AI 服务提供商", "provider.comfyui.description": s(894), "provider.replicate.description": s(1104), "provider.runninghub.description": "模型物美价廉，海量社区应用", "provider.google.description": s(1216), "task.waiting_upload": s(2582), "task.creating_task": "正在创建任务...", "task.running_duration": s(1023), "task.cancelled": s(1349), "task.cancel_failed": s(2626), "comfy.connect": "连接", "comfy.load_failed": s(2504), "comfy.loading": s(1418), "comfy.channel_connecting": "通道连接中...", "comfy.server_reconnecting": s(2631), "comfy.version_mismatch": s(700), "comfy.cloud_recommend": s(2581), "comfy.your_workflows": "你的工作流", "comfy.refresh_workflows": s(1402), "comfy.queue_progress": s(853), "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": s(2056), "comfy.stop_auto_run": s(400), "comfy.start_auto_run": s(1282), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": s(1203), "comfy.help_tooltip": "使用教程", "boundary.title": s(1238), "boundary.tooltip": s(1857), "boundary.current_canvas": s(2555), "boundary.current_layer": s(2729), "boundary.current_selection": s(2417), "boundary.set_as_canvas": "设为画布", "boundary.set_as_layer": "设为当前图层", "boundary.set_as_selection": s(1507), "http.404": s(2356), "http.401": "未授权 (401)", "http.403": "禁止访问 (403)", "http.408": s(1147), "http.500": s(895), "http.501": s(913), "http.502": s(1689), "http.503": s(402), "http.504": s(1308), "http.unknown": "未知错误（{{code}}）", "runninghub.get_apikey": s(693), "runninghub.apikey_placeholder": s(1854), "runninghub.app_id": "应用ID:", "runninghub.webapp_id_placeholder": "此处粘贴 WebApp ID", "runninghub.open_app": s(820), "runninghub.execute": "执行", "runninghub.rh_coins": "RH币:", "runninghub.current_tasks": s(524), "runninghub.help_tooltip": "使用教程", "runninghub.status.waiting": "排队等待", "runninghub.status.running": "正在运行", "runninghub.status.failed": "执行失败", "runninghub.status.success": s(2591), "image.auto_refetch": "自动从PS重新获取", "runninghub.error.get_result_failed": s(1708), "runninghub.error.task_failed": "任务执行失败: {{error}}", "runninghub.error.task_incomplete": s(1585), "replicate.get_apikey": s(2744), "replicate.apikey_placeholder": "请输入您的Replicate API Key", "replicate.execute": "执行", "replicate.model_placeholder": s(1607), "replicate.help_tooltip": s(1698), "liblib.get_apikey": s(1237), "liblib.execute": "执行", "common.close": "关闭", "common.save_and_run": s(694), "common.loading": s(437), "common.error": "错误", "common.success": "成功", "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": s(1294), webviewInForeground: s(2294), webviewInForeground2: s(1851), "auth.login_success": s(2425), "auth.username_label": s(1673), "auth.email_label": s(1720), "auth.logout": s(1573), "auth.login_required": s(1270), "image.send.select_position": s(1273), "image.send.sending": s(2396), "image.layer.new": s(1767), "image.layer.current": s(2729), "image.layer.fit_to_current": "适配至当前图层", "image.layer.fit_to_selection": s(1639), "image.layer.fit_to_canvas": s(1474), "image.shortcut_auth_required": s(1220), "image.shortcut_focus_required": "快捷键选图功能仅在插件窗口聚焦时可用", "image.get.select_image": "请选择要获取的图像", "image.get.entire_canvas": s(2555), "image.get.canvas": "画布", "image.get.current_layer": s(2729), "image.get.current_layer_bounds": "仅当前图层范围", "image.get.selection_bounds": s(1965), "image.get.canvas_bounds": s(688), "image.crop_by_selection": s(695), "image.limit_size": s(794), "image.crop.none": s(1799), "image.crop.inpaint": "反向裁剪(Inpaint)", "image.crop.outpaint": s(2216), "image.send_all": s(2496), "image.save_all": "保存所有", "image.save_current": s(2524), "image.delete_current": s(2636), "image.more_actions": s(2252), "image.jump_to_last": s(1975), "image.clear_all": s(2741), "image.send_to_ps": s(914), "image.download": "下载", "image.copy": "复制", "image.sending": "正在发送...", "image.sending_all": s(1554), "mask.get.select_mask": s(1292), "mask.selection": "选区", "mask.current_layer_bounds": s(961), "mask.all": "全部", "mask.selection_exclude": "选区除外", "mask.current_layer_exclude": "当前图层除外", "mask.empty": "空", "document {{0}} not found": s(475), "create document for preview": "创建预览文档", "resize document for preview": s(1828), "create document for sent images": s(2308), "show sent images": "显示发送的图片", "create layer failed": s(464), "layer not found {{0}}": s(678), "layer not found: {{0}}": s(678), "layer {{0}} is not a group": s(441), "no linked layer for {{0}}": "没有链接图层: {{0}}", "no first related layer in {{0}}": s(1271), "merge group failed": s(2169), "get content of layer {{0}}": s(810), "get layer info": s(686), "get_layer_info: layer_identify required": "get_layer_info: 需要 layer_identify", "get pixel of {{0}} failed": "获取像素失败: {{0}}", "get selection failed": "获取选区失败", "invalid name: {{0}}": "非法的名称: {{0}}", "desire bounds is null": s(2605), "intersect or scaledDesire is null": s(2736), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': s(1301), "select layer": s(1399), "run Photoshop Action": "sdppp 运行 Photoshop Action", "Action {{0}} not found": s(469), "Action set {{0}} not found": s(2664), "set text to layer": s(2468), "ComfyManager not found, cannot reboot": s(653), "Failed to reboot ComfyUI": s(1844), "image.upload.from_canvas": "画布", "image.upload.from_curlayer": s(2729), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": "上传中，如果图片过大，可能会卡顿...", "image.upload.no_images": s(354), "image.upload.tooltip.more_options_hint": s(405), "image.upload.tooltip.alt.crop": s(701), "image.upload.tooltip.alt.reverse": "+Alt 反转遮罩", "image.upload.tooltip.image.canvas": "从 画布 获取图像", "image.upload.tooltip.image.curlayer": s(1531), "image.upload.tooltip.mask.curlayer": s(1826), "image.upload.tooltip.mask.selection": s(869), "image.upload.tooltip.mask.canvas": s(621), "image.upload.tooltip.autosync.on": s(1246), "image.upload.tooltip.autosync.off": s(933), "image.auto_send_enabled": "自动填入画布开启", "image.auto_send_disabled": s(1834), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": s(1663), "source.ps_mask": "PS遮罩", "source.canvas": "整个画布", "source.current_layer": s(2729), "source.selection": "选区", "source.quality_percent": s(1415), "source.crop.positive": s(1236), "source.crop.negative": s(2421), "source.reverse": "反转", "send_images.create_document": s(1879), "send_images.create_document_failed": "创建文档失败", "photoshop.no_active_document": s(1374), "photoshop.rectangle_coordinates_required": s(364), "photoshop.create_guide_frame": s(946), "photoshop.clear_guide_frame": s(1272), "photoshop.invalid_action": s(1617), "photoshop.file_not_found": s(2644), "photoshop.failed_to_open_file_as_document": s(1112), "photoshop.invalid_boundary": s(1067), "photoshop.failed_to_open_image_file": s(2514), "photoshop.open_images_from_file": "从文件打开图像", "photoshop.failed_to_create_document_from_file": s(2552), "google.field.image_input": s(1412), "google.field.prompt": s(738), "google.field.batch_count": s(350), "google.field.images_per_batch": s(2320), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": s(1204), "google.apikey_placeholder": "请输入您的 Google API Key", "google.baseurl_placeholder": s(2176), "google.get_apikey": s(704), "google.help_tooltip": s(2204), "google.model_name": s(1838), "google.loading": s(437), "google.generating": s(1672), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": s(1486), "image.import_as_newdoc": "作为新文档导入", "image.boundary": "边界", "image.import_tip": s(2663), "auth.guest_login_success": "", "boundary.canvas": "画布", "boundary.select_boundary": "选择边界", "boundary.selection": "选区", "convert widget {0} failed:": "", "document {0} not found": "", "image.document.new": "", "image.layer.smart_object": "", "layer not found {0}": "", "photoshop.invalid_boundary_type": "", "photoshop.no_active_layer": "" }, Yi = { "preview.show": s(2266), "gateway.select_ai_service": s(646), "provider.select.title": s(388), "provider.comfyui.description": s(835), "provider.replicate.description": "Cloud-based model service platform", "provider.runninghub.description": "Model with affordable price, abundant community applications", "provider.google.description": s(458), "task.waiting_upload": "Waiting for image upload...", "task.creating_task": s(385), "task.running_duration": s(420), "task.cancelled": s(1167), "task.cancel_failed": s(359), "comfy.connect": "Connect", "comfy.load_failed": "ComfyUI failed to load, HTTP status code: {{code}}", "comfy.loading": s(854), "comfy.channel_connecting": s(516), "comfy.server_reconnecting": s(1080), "comfy.version_mismatch": s(2580), "comfy.cloud_recommend": s(2338), "comfy.your_workflows": s(1705), "comfy.refresh_workflows": s(1252), "comfy.queue_progress": s(1359), "comfy.save": s(1198), "comfy.refresh": s(1876), "comfy.stop_cancel_all": s(872), "comfy.stop_auto_run": s(2531), "comfy.start_auto_run": s(472), "comfy.run": "Run", "comfy.back": "Back", "comfy.uploading": s(721), "comfy.help_tooltip": s(778), "boundary.title": s(909), "boundary.tooltip": "Area AI reads from; controls max image size", "boundary.current_canvas": s(2491), "boundary.current_layer": "Current Layer", "boundary.current_selection": s(2328), "boundary.set_as_canvas": s(780), "boundary.set_as_layer": s(632), "boundary.set_as_selection": s(2754), "http.404": s(588), "http.401": s(2481), "http.403": "Forbidden (403)", "http.408": s(1009), "http.500": s(1090), "http.501": s(2365), "http.502": s(1050), "http.503": "Service unavailable (503)", "http.504": s(1261), "http.unknown": "Unknown error ({{code}})", "runninghub.get_apikey": s(1933), "runninghub.apikey_placeholder": "Enter your RunningHub API Key", "runninghub.app_id": s(1334), "runninghub.webapp_id_placeholder": "Paste WebApp ID here", "runninghub.open_app": s(1513), "runninghub.execute": s(2244), "runninghub.rh_coins": s(990), "runninghub.current_tasks": s(1586), "runninghub.help_tooltip": s(778), "runninghub.status.waiting": s(840), "runninghub.status.running": "Running", "runninghub.status.failed": s(2540), "runninghub.status.success": "Success", "image.auto_refetch": s(1788), "runninghub.error.get_result_failed": s(879), "runninghub.error.task_failed": s(1517), "runninghub.error.task_incomplete": s(1413), "replicate.get_apikey": "How to get APIKey", "replicate.apikey_placeholder": s(1141), "replicate.execute": s(2244), "replicate.model_placeholder": s(665), "replicate.help_tooltip": s(778), "liblib.get_apikey": s(1511), "liblib.execute": s(2244), "common.close": s(2060), "common.save_and_run": s(1243), "common.loading": s(394), "common.error": s(1924), "common.success": s(1317), "common.cancel": "Cancel", "common.confirm": s(829), "common.options": s(910), "common.options_separator": s(1488), webviewInForeground: s(1748), webviewInForeground2: "click to restore", "auth.login_success": "Login Successful", "auth.username_label": s(2364), "auth.email_label": s(2088), "auth.logout": s(2703), "auth.login_required": s(2708), "image.send.select_position": s(2716), "image.send.sending": s(2647), "image.layer.new": s(2054), "image.layer.current": s(571), "image.layer.fit_to_current": s(2615), "image.layer.fit_to_selection": s(479), "image.layer.fit_to_canvas": s(2557), "image.shortcut_auth_required": "Shortcut selection feature requires login", "image.shortcut_focus_required": s(2734), "image.get.select_image": s(2747), "image.get.entire_canvas": "Entire Canvas", "image.get.canvas": "Canvas", "image.get.current_layer": "Current Layer", "image.get.current_layer_bounds": s(1881), "image.get.selection_bounds": s(2217), "image.get.canvas_bounds": "Canvas bounds", "image.crop_by_selection": "Crop by selection", "image.limit_size": s(525), "image.crop.none": s(725), "image.crop.inpaint": s(2623), "image.crop.outpaint": "Outpaint (positive crop)", "image.send_all": s(412), "image.save_all": s(2089), "image.save_current": s(2276), "image.delete_current": s(2304), "image.more_actions": s(2537), "image.jump_to_last": s(2459), "image.clear_all": "Clear all", "image.send_to_ps": s(362), "image.download": "Download", "image.copy": "Copy", "image.sending": s(640), "image.sending_all": s(532), "mask.get.select_mask": s(2374), "mask.selection": s(1091), "mask.current_layer_bounds": s(2749), "mask.all": s(1231), "mask.selection_exclude": s(978), "mask.current_layer_exclude": s(1856), "mask.empty": s(2245), "document {{0}} not found": s(825), "create document for preview": s(901), "resize document for preview": "Resize document for preview", "create document for sent images": "Create document for sent images", "show sent images": s(1426), "create layer failed": "Create layer failed", "layer not found {{0}}": s(1930), "layer not found: {{0}}": s(1819), "layer {{0}} is not a group": s(2488), "no linked layer for {{0}}": s(2369), "no first related layer in {{0}}": "No first related layer in {{0}}", "merge group failed": s(928), "get content of layer {{0}}": s(973), "get layer info": "Get layer info", "get_layer_info: layer_identify required": s(1622), "get pixel of {{0}} failed": s(2191), "get selection failed": s(2024), "invalid name: {{0}}": s(1777), "desire bounds is null": s(1621), "intersect or scaledDesire is null": s(580), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': s(1903), "select layer": s(1518), "run Photoshop Action": s(1021), "Action {{0}} not found": s(2420), "Action set {{0}} not found": s(2622), "set text to layer": "Set text to layer", "ComfyManager not found, cannot reboot": "ComfyManager not found, cannot reboot", "Failed to reboot ComfyUI": s(2170), "image.upload.from_canvas": s(484), "image.upload.from_curlayer": s(571), "image.upload.from_selection": s(1091), "image.upload.from_harddisk": "Disk", "image.upload.clear": s(1902), "image.upload.uploading": s(1918), "image.upload.no_images": s(371), "image.upload.tooltip.alt.crop": "+Alt crop by selection", "image.upload.tooltip.alt.reverse": s(2197), "image.upload.tooltip.image.canvas": "Get image from Canvas", "image.upload.tooltip.image.curlayer": s(1255), "image.upload.tooltip.mask.canvas": s(858), "image.upload.tooltip.mask.curlayer": "Get mask from Current Layer", "image.upload.tooltip.mask.selection": s(1283), "image.upload.tooltip.autosync.on": "Auto Sync: on", "image.upload.tooltip.autosync.off": s(1530), "image.auto_send_enabled": s(2025), "image.auto_send_disabled": s(1217), "source.source": "Source", "source.content": s(2401), "source.boundary": s(2478), "source.mask": s(2445), "source.disk": "Disk", "source.remote": s(634), "source.unknown": s(1105), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": s(484), "source.current_layer": s(1888), "source.selection": s(1091), "source.quality_percent": s(1721), "source.crop.positive": s(2229), "source.crop.negative": s(1830), "source.reverse": "Reverse", "send_images.create_document": s(2413), "send_images.create_document_failed": s(2085), "photoshop.no_active_document": "No active document", "photoshop.rectangle_coordinates_required": "Rectangle coordinates required for create action", "photoshop.create_guide_frame": s(1191), "photoshop.clear_guide_frame": s(2733), "photoshop.invalid_action": s(783), "photoshop.file_not_found": "File not found: {{path}}", "photoshop.failed_to_open_file_as_document": s(1172), "photoshop.invalid_boundary": s(1566), "photoshop.failed_to_open_image_file": s(2121), "photoshop.open_images_from_file": s(1817), "photoshop.failed_to_create_document_from_file": s(1812), "google.field.image_input": s(1117), "google.field.prompt": s(921), "google.field.batch_count": s(772), "google.field.images_per_batch": s(487), "google.status.success": s(1317), "google.status.failed": s(2540), "google.status.generating": s(1683), "google.apikey_placeholder": "Enter Google API Key", "google.get_apikey": s(1332), "google.baseurl_placeholder": s(535), "google.help_tooltip": s(576), "google.model_name": s(1376), "google.loading": s(394), "google.generating": s(1047), "google.generate": s(2010), "image.auto_toggle": s(1770), "image.import_as_smartobject": s(1596), "image.import_as_newdoc": "Import as New Document", "image.boundary": s(1886), "image.import_tip": s(1187), "auth.guest_login_success": s(1015), "boundary.canvas": s(484), "boundary.select_boundary": "Select boundary", "boundary.selection": s(1091), "convert widget {0} failed:": s(611), "document {0} not found": s(1012), "image.document.new": s(931), "image.layer.smart_object": s(2232), "layer not found {0}": s(2694), "photoshop.invalid_boundary_type": s(1635), "photoshop.no_active_layer": s(2171) }, v0 = (i) => typeof i === s(1278), Ge = () => {
  var i = s;
  let x, t;
  const r = new Promise((e, a) => {
    x = e, t = a;
  });
  return r.resolve = x, r[i(2612)] = t, r;
}, Dr = (i) => i == null ? "" : "" + i, _i = (i, x, t) => {
  i.forEach((r) => {
    x[r] && (t[r] = x[r]);
  });
}, eo = /###/g, jr = (i) => i && i[s(393)](s(1919)) > -1 ? i.replace(eo, ".") : i, Mr = (i) => !i || v0(i), ex = (i, x, t) => {
  var r = s;
  const e = v0(x) ? x[r(2432)](".") : x;
  let a = 0;
  for (; a < e[r(1027)] - 1; ) {
    if (Mr(i)) return {};
    const n = jr(e[a]);
    !i[n] && t && (i[n] = new t()), Object.prototype.hasOwnProperty.call(i, n) ? i = i[n] : i = {}, ++a;
  }
  return Mr(i) ? {} : { obj: i, k: jr(e[a]) };
}, Lr = (i, x, t) => {
  var r = s;
  const { obj: e, k: a } = ex(i, x, Object);
  if (e !== void 0 || x.length === 1) {
    e[a] = t;
    return;
  }
  let n = x[x[r(1027)] - 1], o = x[r(771)](0, x[r(1027)] - 1), c = ex(i, o, Object);
  for (; c.obj === void 0 && o[r(1027)]; )
    n = o[o[r(1027)] - 1] + "." + n, o = o.slice(0, o[r(1027)] - 1), c = ex(i, o, Object), c != null && c[r(1403)] && typeof c[r(1403)][c.k + "." + n] !== r(1584) && (c[r(1403)] = void 0);
  c[r(1403)][c.k + "." + n] = t;
}, xo = (i, x, t, r) => {
  var e = s;
  const { obj: a, k: n } = ex(i, x, Object);
  a[n] = a[n] || [], a[n][e(1020)](t);
}, Px = (i, x) => {
  var t = s;
  const { obj: r, k: e } = ex(i, x);
  if (r && Object.prototype[t(2036)][t(1580)](r, e))
    return r[e];
}, to = (i, x, t) => {
  const r = Px(i, t);
  return r !== void 0 ? r : Px(x, t);
}, Bs = (i, x, t) => {
  var r = s;
  for (const e in x)
    e !== r(2092) && e !== "constructor" && (e in i ? v0(i[e]) || i[e] instanceof String || v0(x[e]) || x[e] instanceof String ? t && (i[e] = x[e]) : Bs(i[e], x[e], t) : i[e] = x[e]);
  return i;
}, ze = (i) => i[s(1024)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, s(1556));
var ro = { "&": s(790), "<": s(1077), ">": s(2344), '"': s(932), "'": s(1634), "/": s(1954) };
const ao = (i) => {
  var x = s;
  return v0(i) ? i[x(1024)](/[&<>"'\/]/g, (t) => ro[t]) : i;
};
class so {
  constructor(x) {
    var t = s;
    this[t(2722)] = x, this[t(1362)] = /* @__PURE__ */ new Map(), this[t(2150)] = [];
  }
  [s(1986)](x) {
    var t = s;
    const r = this[t(1362)][t(2558)](x);
    if (r !== void 0) return r;
    const e = new RegExp(x);
    return this[t(2150)][t(1027)] === this.capacity && this[t(1362)].delete(this[t(2150)][t(2310)]()), this[t(1362)].set(x, e), this.regExpQueue.push(x), e;
  }
}
const no = [" ", ",", "?", "!", ";"], io = new so(20), oo = (i, x, t) => {
  var r = s;
  x = x || "", t = t || "";
  const e = no[r(2674)]((o) => x[r(393)](o) < 0 && t.indexOf(o) < 0);
  if (e[r(1027)] === 0) return !0;
  const a = io[r(1986)]("(" + e[r(802)]((o) => o === "?" ? "\\?" : o).join("|") + ")");
  let n = !a[r(1063)](i);
  if (!n) {
    const o = i[r(393)](t);
    o > 0 && !a[r(1063)](i[r(1776)](0, o)) && (n = !0);
  }
  return n;
}, Kt = (i, x, t = ".") => {
  var r = s;
  if (!i) return;
  if (i[x])
    return Object[r(1745)][r(2036)][r(1580)](i, x) ? i[x] : void 0;
  const e = x[r(2432)](t);
  let a = i;
  for (let n = 0; n < e[r(1027)]; ) {
    if (!a || typeof a !== r(644)) return;
    let o, c = "";
    for (let u = n; u < e[r(1027)]; ++u)
      if (u !== n && (c += t), c += e[u], o = a[c], o !== void 0) {
        if ([r(1278), r(2479), "boolean"][r(393)](typeof o) > -1 && u < e.length - 1) continue;
        n += u - n + 1;
        break;
      }
    a = o;
  }
  return a;
}, rx = (i) => i == null ? void 0 : i[s(1024)]("_", "-"), co = { type: s(2116), log(i) {
  var x = s;
  this[x(1440)]("log", i);
}, warn(i) {
  var x = s;
  this[x(1440)](x(2279), i);
}, error(i) {
  var x = s;
  this[x(1440)](x(2463), i);
}, output(i, x) {
  var r, e;
  var t = s;
  (e = (r = console == null ? void 0 : console[i]) == null ? void 0 : r[t(1969)]) == null || e.call(r, console, x);
} };
class Ix {
  constructor(x, t = {}) {
    var r = s;
    this[r(2049)](x, t);
  }
  [s(2049)](x, t = {}) {
    var r = s;
    this[r(2178)] = t[r(2178)] || r(1989), this[r(2116)] = x || co, this[r(1582)] = t, this[r(377)] = t.debug;
  }
  log(...x) {
    var t = s;
    return this[t(2332)](x, t(1448), "", !0);
  }
  [s(2279)](...x) {
    var t = s;
    return this[t(2332)](x, t(2279), "", !0);
  }
  [s(2463)](...x) {
    var t = s;
    return this[t(2332)](x, "error", "");
  }
  [s(1035)](...x) {
    var t = s;
    return this[t(2332)](x, t(2279), "WARNING DEPRECATED: ", !0);
  }
  [s(2332)](x, t, r, e) {
    var a = s;
    return e && !this[a(377)] ? null : (v0(x[0]) && (x[0] = "" + r + this[a(2178)] + " " + x[0]), this[a(2116)][t](x));
  }
  create(x) {
    var t = s;
    return new Ix(this[t(2116)], { prefix: this.prefix + ":" + x + ":", ...this.options });
  }
  [s(1512)](x) {
    var t = s;
    return x = x || this[t(1582)], x[t(2178)] = x[t(2178)] || this.prefix, new Ix(this[t(2116)], x);
  }
}
var he = new Ix();
class Nx {
  constructor() {
    var x = s;
    this[x(623)] = {};
  }
  on(x, t) {
    var r = s;
    return x.split(" ")[r(1455)]((e) => {
      var a = r;
      this[a(623)][e] || (this[a(623)][e] = /* @__PURE__ */ new Map());
      const n = this[a(623)][e][a(2558)](t) || 0;
      this[a(623)][e].set(t, n + 1);
    }), this;
  }
  [s(610)](x, t) {
    var r = s;
    if (this[r(623)][x]) {
      if (!t) {
        delete this.observers[x];
        return;
      }
      this[r(623)][x][r(2394)](t);
    }
  }
  emit(x, ...t) {
    var r = s;
    this[r(623)][x] && Array[r(429)](this[r(623)][x].entries()).forEach(([a, n]) => {
      for (let o = 0; o < n; o++)
        a(...t);
    }), this.observers["*"] && Array[r(429)](this.observers["*"][r(1430)]()).forEach(([a, n]) => {
      for (let o = 0; o < n; o++)
        a.apply(a, [x, ...t]);
    });
  }
}
class $r extends Nx {
  constructor(x, t = { ns: [s(408)], defaultNS: s(408) }) {
    var r = s;
    super(), this[r(984)] = x || {}, this[r(1582)] = t, this[r(1582)].keySeparator === void 0 && (this[r(1582)][r(819)] = "."), this[r(1582)][r(1557)] === void 0 && (this.options[r(1557)] = !0);
  }
  addNamespaces(x) {
    var t = s;
    this.options.ns[t(393)](x) < 0 && this.options.ns.push(x);
  }
  [s(2718)](x) {
    var t = s;
    const r = this[t(1582)].ns.indexOf(x);
    r > -1 && this[t(1582)].ns.splice(r, 1);
  }
  getResource(x, t, r, e = {}) {
    var f, d;
    var a = s;
    const n = e[a(819)] !== void 0 ? e.keySeparator : this[a(1582)][a(819)], o = e[a(1557)] !== void 0 ? e[a(1557)] : this.options[a(1557)];
    let c;
    x[a(393)](".") > -1 ? c = x[a(2432)](".") : (c = [x, t], r && (Array[a(710)](r) ? c[a(1020)](...r) : v0(r) && n ? c[a(1020)](...r[a(2432)](n)) : c.push(r)));
    const u = Px(this[a(984)], c);
    return !u && !t && !r && x.indexOf(".") > -1 && (x = c[0], t = c[1], r = c[a(771)](2).join(".")), u || !o || !v0(r) ? u : Kt((d = (f = this[a(984)]) == null ? void 0 : f[x]) == null ? void 0 : d[t], r, n);
  }
  [s(2013)](x, t, r, e, a = { silent: !1 }) {
    var n = s;
    const o = a.keySeparator !== void 0 ? a[n(819)] : this[n(1582)][n(819)];
    let c = [x, t];
    r && (c = c.concat(o ? r[n(2432)](o) : r)), x[n(393)](".") > -1 && (c = x[n(2432)]("."), e = t, t = c[1]), this[n(1935)](t), Lr(this.data, c, e), a[n(2521)] || this[n(1909)]("added", x, t, r, e);
  }
  [s(2498)](x, t, r, e = { silent: !1 }) {
    var a = s;
    for (const n in r)
      (v0(r[n]) || Array.isArray(r[n])) && this[a(2013)](x, t, n, r[n], { silent: !0 });
    e.silent || this[a(1909)](a(1729), x, t, r);
  }
  [s(1037)](x, t, r, e, a, n = { silent: !1, skipCopy: !1 }) {
    var o = s;
    let c = [x, t];
    x[o(393)](".") > -1 && (c = x[o(2432)]("."), e = r, r = t, t = c[1]), this[o(1935)](t);
    let u = Px(this[o(984)], c) || {};
    n[o(2477)] || (r = JSON[o(2673)](JSON[o(2351)](r))), e ? Bs(u, r, a) : u = { ...u, ...r }, Lr(this.data, c, u), n[o(2521)] || this[o(1909)](o(1729), x, t, r);
  }
  removeResourceBundle(x, t) {
    var r = s;
    this[r(1911)](x, t) && delete this.data[x][t], this.removeNamespaces(t), this[r(1909)](r(1357), x, t);
  }
  hasResourceBundle(x, t) {
    var r = s;
    return this[r(1804)](x, t) !== void 0;
  }
  [s(2202)](x, t) {
    var r = s;
    return t || (t = this[r(1582)][r(2050)]), this[r(1804)](x, t);
  }
  [s(1181)](x) {
    return this.data[x];
  }
  [s(1978)](x) {
    var t = s;
    const r = this[t(1181)](x);
    return !!(r && Object[t(2559)](r) || [])[t(2142)]((a) => r[a] && Object[t(2559)](r[a])[t(1027)] > 0);
  }
  [s(2742)]() {
    var x = s;
    return this[x(984)];
  }
}
var Ks = { processors: {}, addPostProcessor(i) {
  var x = s;
  this.processors[i[x(1483)]] = i;
}, handle(i, x, t, r, e) {
  var a = s;
  return i[a(1455)]((n) => {
    var c;
    var o = a;
    x = ((c = this[o(1264)][n]) == null ? void 0 : c[o(575)](x, t, r, e)) ?? x;
  }), x;
} };
const zr = {}, Hr = (i) => !v0(i) && typeof i !== s(2665) && typeof i != "number";
class Rx extends Nx {
  constructor(x, t = {}) {
    var r = s;
    super(), _i([r(1623), r(1753), r(837), r(2323), r(2584), r(1992), r(457)], x, this), this.options = t, this[r(1582)][r(819)] === void 0 && (this[r(1582)][r(819)] = "."), this[r(2116)] = he.create("translator");
  }
  [s(2447)](x) {
    var t = s;
    x && (this[t(1070)] = x);
  }
  [s(2538)](x, t = { interpolation: {} }) {
    var r = s;
    const e = { ...t };
    if (x == null) return !1;
    const a = this[r(639)](x, e);
    return (a == null ? void 0 : a[r(925)]) !== void 0;
  }
  [s(902)](x, t) {
    var r = s;
    let e = t.nsSeparator !== void 0 ? t.nsSeparator : this.options[r(689)];
    e === void 0 && (e = ":");
    const a = t[r(819)] !== void 0 ? t[r(819)] : this.options[r(819)];
    let n = t.ns || this[r(1582)][r(2050)] || [];
    const o = e && x[r(393)](e) > -1, c = !this.options[r(1666)] && !t[r(819)] && !this[r(1582)][r(2248)] && !t[r(689)] && !oo(x, e, a);
    if (o && !c) {
      const u = x.match(this[r(2323)][r(1940)]);
      if (u && u[r(1027)] > 0) return { key: x, namespaces: v0(n) ? [n] : n };
      const f = x[r(2432)](e);
      (e !== a || e === a && this[r(1582)].ns[r(393)](f[0]) > -1) && (n = f[r(2310)]()), x = f.join(a);
    }
    return { key: x, namespaces: v0(n) ? [n] : n };
  }
  [s(1233)](x, t, r) {
    var e = s;
    let a = typeof t === e(644) ? { ...t } : t;
    if (typeof a !== e(644) && this[e(1582)][e(1265)] && (a = this[e(1582)][e(1265)](arguments)), typeof options === e(644) && (a = { ...a }), a || (a = {}), x == null) return "";
    Array[e(710)](x) || (x = [String(x)]);
    const n = a[e(453)] !== void 0 ? a[e(453)] : this.options[e(453)], o = a[e(819)] !== void 0 ? a[e(819)] : this[e(1582)][e(819)], { key: c, namespaces: u } = this[e(902)](x[x[e(1027)] - 1], a), f = u[u[e(1027)] - 1];
    let d = a[e(689)] !== void 0 ? a[e(689)] : this[e(1582)].nsSeparator;
    d === void 0 && (d = ":");
    const l = a[e(687)] || this[e(1070)], v = a[e(827)] || this.options[e(827)];
    if ((l == null ? void 0 : l[e(955)]()) === "cimode")
      return v ? n ? { res: "" + f + d + c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: f, usedParams: this[e(1802)](a) } : "" + f + d + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: f, usedParams: this[e(1802)](a) } : c;
    const h = this.resolve(x, a);
    let m = h == null ? void 0 : h[e(925)];
    const y = (h == null ? void 0 : h[e(1825)]) || c, w = (h == null ? void 0 : h[e(1920)]) || c, k = [e(1026), e(711), e(1542)], F = a[e(608)] !== void 0 ? a.joinArrays : this[e(1582)][e(608)], T = !this.i18nFormat || this.i18nFormat.handleAsObject, R = a[e(1235)] !== void 0 && !v0(a.count), P = Rx[e(2061)](a), C = R ? this.pluralResolver[e(2030)](l, a.count, a) : "", O = a[e(2666)] && R ? this[e(837)][e(2030)](l, a[e(1235)], { ordinal: !1 }) : "", j = R && !a.ordinal && a.count === 0, M = j && a[e(1363) + this[e(1582)][e(2184)] + e(1228)] || a[e(1363) + C] || a[e(1363) + O] || a[e(1363)];
    let N = m;
    T && !m && P && (N = M);
    const q = Hr(N), $ = Object.prototype[e(1339)][e(1969)](N);
    if (T && N && q && k[e(393)]($) < 0 && !(v0(F) && Array[e(710)](N))) {
      if (!a[e(2530)] && !this[e(1582)][e(2530)]) {
        !this[e(1582)][e(2366)] && this.logger[e(2279)](e(1946));
        const U = this[e(1582)][e(2366)] ? this[e(1582)][e(2366)](y, N, { ...a, ns: u }) : e(1134) + c + " (" + this.language + e(2399);
        return n ? (h[e(925)] = U, h[e(1906)] = this[e(1802)](a), h) : U;
      }
      if (o) {
        const U = Array[e(710)](N), V = U ? [] : {}, J = U ? w : y;
        for (const c0 in N)
          if (Object[e(1745)][e(2036)].call(N, c0)) {
            const u0 = "" + J + o + c0;
            P && !m ? V[c0] = this[e(1233)](u0, { ...a, defaultValue: Hr(M) ? M[c0] : void 0, joinArrays: !1, ns: u }) : V[c0] = this.translate(u0, { ...a, joinArrays: !1, ns: u }), V[c0] === u0 && (V[c0] = N[c0]);
          }
        m = V;
      }
    } else if (T && v0(F) && Array[e(710)](m))
      m = m[e(1372)](F), m && (m = this[e(2319)](m, x, a, r));
    else {
      let U = !1, V = !1;
      !this[e(717)](m) && P && (U = !0, m = M), !this[e(717)](m) && (V = !0, m = c);
      const J = a.missingKeyNoValueFallbackToKey || this[e(1582)][e(1882)], c0 = J && V ? void 0 : m, u0 = P && M !== m && this[e(1582)].updateMissing;
      if (V || U || u0) {
        if (this[e(2116)].log(e(u0 ? 1848 : 1751), l, f, c, u0 ? M : m), o) {
          const S0 = this[e(639)](c, { ...a, keySeparator: !1 });
          S0 && S0[e(925)] && this[e(2116)].warn(e(1227));
        }
        let d0 = [];
        const o0 = this[e(1753)][e(2315)](this[e(1582)].fallbackLng, a[e(687)] || this[e(1070)]);
        if (this[e(1582)][e(2759)] === e(2696) && o0 && o0[0]) for (let S0 = 0; S0 < o0[e(1027)]; S0++)
          d0[e(1020)](o0[S0]);
        else this.options.saveMissingTo === e(1676) ? d0 = this[e(1753)][e(1390)](a.lng || this.language) : d0[e(1020)](a[e(687)] || this[e(1070)]);
        const l0 = (S0, y0, M0) => {
          var D;
          var q0 = e;
          const Q0 = P && M0 !== m ? M0 : c0;
          this.options.missingKeyHandler ? this.options[q0(1441)](S0, f, y0, Q0, u0, a) : (D = this.backendConnector) != null && D[q0(1405)] && this[q0(2584)].saveMissing(S0, f, y0, Q0, u0, a), this[q0(1909)](q0(1751), S0, f, y0, m);
        };
        this.options.saveMissing && (this[e(1582)].saveMissingPlurals && R ? d0.forEach((S0) => {
          var y0 = e;
          const M0 = this.pluralResolver.getSuffixes(S0, a);
          j && a["defaultValue" + this[y0(1582)][y0(2184)] + y0(1228)] && M0[y0(393)](this.options[y0(2184)] + y0(1228)) < 0 && M0[y0(1020)](this[y0(1582)][y0(2184)] + y0(1228)), M0[y0(1455)]((q0) => {
            var Q0 = y0;
            l0([S0], c + q0, a[Q0(1363) + q0] || M);
          });
        }) : l0(d0, c, M));
      }
      m = this[e(2319)](m, x, a, h, r), V && m === c && this[e(1582)][e(1151)] && (m = "" + f + d + c), (V || U) && this[e(1582)][e(572)] && (m = this.options.parseMissingKeyHandler(this[e(1582)][e(1151)] ? "" + f + d + c : c, U ? m : void 0, a));
    }
    return n ? (h[e(925)] = m, h[e(1906)] = this[e(1802)](a), h) : m;
  }
  extendTranslation(x, t, r, e, a) {
    var u, f;
    var n = s;
    if ((u = this.i18nFormat) != null && u[n(2673)]) x = this.i18nFormat[n(2673)](x, { ...this.options[n(1291)][n(751)], ...r }, r[n(687)] || this[n(1070)] || e[n(857)], e[n(1758)], e[n(1825)], { resolved: e });
    else if (!r.skipInterpolation) {
      r[n(1291)] && this[n(2323)][n(2049)]({ ...r, interpolation: { ...this.options[n(1291)], ...r.interpolation } });
      const d = v0(x) && (((f = r == null ? void 0 : r[n(1291)]) == null ? void 0 : f[n(2709)]) !== void 0 ? r[n(1291)][n(2709)] : this[n(1582)][n(1291)][n(2709)]);
      let l;
      if (d) {
        const h = x.match(this[n(2323)][n(1940)]);
        l = h && h[n(1027)];
      }
      let v = r[n(1024)] && !v0(r[n(1024)]) ? r.replace : r;
      if (this[n(1582)].interpolation.defaultVariables && (v = { ...this[n(1582)][n(1291)].defaultVariables, ...v }), x = this[n(2323)].interpolate(x, v, r.lng || this[n(1070)] || e.usedLng, r), d) {
        const h = x.match(this[n(2323)][n(1940)]), m = h && h[n(1027)];
        l < m && (r[n(427)] = !1);
      }
      !r.lng && e && e.res && (r[n(687)] = this[n(1070)] || e.usedLng), r[n(427)] !== !1 && (x = this[n(2323)][n(427)](x, (...h) => {
        var m = n;
        return (a == null ? void 0 : a[0]) === h[0] && !r[m(1543)] ? (this[m(2116)][m(2279)](m(2706) + h[0] + " in key: " + t[0]), null) : this[m(1233)](...h, t);
      }, r)), r[n(1291)] && this.interpolator.reset();
    }
    const o = r.postProcess || this[n(1582)][n(1495)], c = v0(o) ? [o] : o;
    return x != null && (c != null && c.length) && r[n(1472)] !== !1 && (x = Ks[n(776)](c, x, t, this.options && this[n(1582)][n(2079)] ? { i18nResolved: { ...e, usedParams: this[n(1802)](r) }, ...r } : r, this)), x;
  }
  [s(639)](x, t = {}) {
    var r = s;
    let e, a, n, o, c;
    return v0(x) && (x = [x]), x[r(1455)]((u) => {
      var f = r;
      if (this[f(717)](e)) return;
      const d = this[f(902)](u, t), l = d[f(2640)];
      a = l;
      let v = d[f(2020)];
      this.options[f(528)] && (v = v.concat(this.options.fallbackNS));
      const h = t[f(1235)] !== void 0 && !v0(t[f(1235)]), m = h && !t[f(2666)] && t.count === 0, y = t[f(1543)] !== void 0 && (v0(t[f(1543)]) || typeof t.context == "number") && t[f(1543)] !== "", w = t[f(2077)] ? t.lngs : this[f(1753)].toResolveHierarchy(t[f(687)] || this[f(1070)], t[f(2261)]);
      v[f(1455)]((k) => {
        var T, R;
        var F = f;
        this[F(717)](e) || (c = k, !zr[w[0] + "-" + k] && ((T = this[F(457)]) != null && T.hasLoadedNamespace) && !((R = this[F(457)]) != null && R[F(2562)](c)) && (zr[w[0] + "-" + k] = !0, this[F(2116)][F(2279)]('key "' + a + F(2011) + w[F(1372)](", ") + F(1628) + c + '" was not yet loaded', F(1618))), w[F(1455)]((P) => {
          var M;
          var C = F;
          if (this[C(717)](e)) return;
          o = P;
          const O = [l];
          if ((M = this[C(1992)]) != null && M[C(1657)]) this.i18nFormat[C(1657)](O, l, P, k, t);
          else {
            let N;
            h && (N = this[C(837)][C(2030)](P, t.count, t));
            const q = this[C(1582)].pluralSeparator + C(1228), $ = this[C(1582)][C(2184)] + C(2666) + this[C(1582)][C(2184)];
            if (h && (O.push(l + N), t[C(2666)] && N[C(393)]($) === 0 && O[C(1020)](l + N[C(1024)]($, this[C(1582)][C(2184)])), m && O.push(l + q)), y) {
              const U = "" + l + this[C(1582)][C(384)] + t[C(1543)];
              O[C(1020)](U), h && (O[C(1020)](U + N), t[C(2666)] && N[C(393)]($) === 0 && O[C(1020)](U + N[C(1024)]($, this[C(1582)][C(2184)])), m && O[C(1020)](U + q));
            }
          }
          let j;
          for (; j = O[C(907)](); )
            !this.isValidLookup(e) && (n = j, e = this[C(1804)](P, k, j, t));
        }));
      });
    }), { res: e, usedKey: a, exactUsedKey: n, usedLng: o, usedNS: c };
  }
  [s(717)](x) {
    var t = s;
    return x !== void 0 && !(!this[t(1582)].returnNull && x === null) && !(!this[t(1582)][t(425)] && x === "");
  }
  [s(1804)](x, t, r, e = {}) {
    var n;
    var a = s;
    return (n = this[a(1992)]) != null && n.getResource ? this[a(1992)][a(1804)](x, t, r, e) : this[a(1623)][a(1804)](x, t, r, e);
  }
  [s(1802)](x = {}) {
    var t = s;
    const r = [t(1363), t(2666), t(1543), t(1024), t(687), "lngs", t(2261), "ns", t(819), t(689), t(2530), t(453), t(608), t(1495), t(1291)], e = x.replace && !v0(x[t(1024)]);
    let a = e ? x[t(1024)] : x;
    if (e && typeof x.count !== t(1584) && (a.count = x[t(1235)]), this.options[t(1291)][t(751)] && (a = { ...this[t(1582)][t(1291)][t(751)], ...a }), !e) {
      a = { ...a };
      for (const n of r)
        delete a[n];
    }
    return a;
  }
  static [s(2061)](x) {
    var t = s;
    const r = t(1363);
    for (const e in x)
      if (Object.prototype.hasOwnProperty.call(x, e) && r === e.substring(0, r.length) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Ur {
  constructor(x) {
    var t = s;
    this.options = x, this[t(929)] = this[t(1582)][t(929)] || !1, this[t(2116)] = he[t(1640)](t(1753));
  }
  getScriptPartFromCode(x) {
    var t = s;
    if (x = rx(x), !x || x[t(393)]("-") < 0) return null;
    const r = x[t(2432)]("-");
    return r[t(1027)] === 2 || (r[t(907)](), r[r.length - 1][t(955)]() === "x") ? null : this[t(440)](r[t(1372)]("-"));
  }
  [s(2522)](x) {
    var t = s;
    if (x = rx(x), !x || x.indexOf("-") < 0) return x;
    const r = x[t(2432)]("-");
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(x) {
    var t = s;
    if (v0(x) && x.indexOf("-") > -1) {
      let r;
      try {
        r = Intl[t(2676)](x)[0];
      } catch {
      }
      return r && this[t(1582)][t(2434)] && (r = r.toLowerCase()), r || (this.options[t(2434)] ? x[t(955)]() : x);
    }
    return this[t(1582)][t(2453)] || this[t(1582)].lowerCaseLng ? x[t(955)]() : x;
  }
  [s(655)](x) {
    var t = s;
    return (this[t(1582)][t(1182)] === t(1784) || this[t(1582)][t(2382)]) && (x = this[t(2522)](x)), !this.supportedLngs || !this.supportedLngs[t(1027)] || this.supportedLngs.indexOf(x) > -1;
  }
  [s(781)](x) {
    var t = s;
    if (!x) return null;
    let r;
    return x.forEach((e) => {
      var a = K;
      if (r) return;
      const n = this.formatLanguageCode(e);
      (!this.options[a(929)] || this[a(655)](n)) && (r = n);
    }), !r && this[t(1582)][t(929)] && x[t(1455)]((e) => {
      var a = t;
      if (r) return;
      const n = this[a(1056)](e);
      if (this[a(655)](n)) return r = n;
      const o = this[a(2522)](e);
      if (this.isSupportedCode(o)) return r = o;
      r = this.options[a(929)][a(2142)]((c) => {
        var u = a;
        if (c === o) return c;
        if (!(c[u(393)]("-") < 0 && o[u(393)]("-") < 0) && (c[u(393)]("-") > 0 && o[u(393)]("-") < 0 && c[u(1776)](0, c[u(393)]("-")) === o || c[u(393)](o) === 0 && o.length > 1))
          return c;
      });
    }), r || (r = this[t(2315)](this.options[t(2261)])[0]), r;
  }
  [s(2315)](x, t) {
    var r = s;
    if (!x) return [];
    if (typeof x == "function" && (x = x(t)), v0(x) && (x = [x]), Array.isArray(x)) return x;
    if (!t) return x[r(1479)] || [];
    let e = x[t];
    return e || (e = x[this[r(1056)](t)]), e || (e = x[this[r(440)](t)]), e || (e = x[this[r(2522)](t)]), e || (e = x.default), e || [];
  }
  toResolveHierarchy(x, t) {
    var r = s;
    const e = this[r(2315)]((t === !1 ? [] : t) || this[r(1582)][r(2261)] || [], x), a = [], n = (o) => {
      var c = r;
      o && (this[c(655)](o) ? a[c(1020)](o) : this[c(2116)][c(2279)](c(1074) + o));
    };
    return v0(x) && (x.indexOf("-") > -1 || x.indexOf("_") > -1) ? (this.options[r(1182)] !== "languageOnly" && n(this[r(440)](x)), this[r(1582)].load !== r(1784) && this[r(1582)][r(1182)] !== r(2164) && n(this.getScriptPartFromCode(x)), this[r(1582)][r(1182)] !== r(2164) && n(this[r(2522)](x))) : v0(x) && n(this.formatLanguageCode(x)), e[r(1455)]((o) => {
      var c = r;
      a[c(393)](o) < 0 && n(this[c(440)](o));
    }), a;
  }
}
const Vr = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Wr = { select: (i) => s(i === 1 ? 815 : 1928), resolvedOptions: () => ({ pluralCategories: ["one", s(1928)] }) };
class uo {
  constructor(x, t = {}) {
    var r = s;
    this[r(1753)] = x, this.options = t, this.logger = he[r(1640)](r(837)), this[r(747)] = {};
  }
  [s(2165)](x, t) {
    var r = s;
    this[r(526)][x] = t;
  }
  [s(2298)]() {
    var x = s;
    this[x(747)] = {};
  }
  [s(1028)](x, t = {}) {
    var r = s;
    const e = rx(x === r(529) ? "en" : x), a = t[r(2666)] ? r(2666) : r(767), n = JSON[r(2351)]({ cleanedCode: e, type: a });
    if (n in this[r(747)]) return this.pluralRulesCache[n];
    let o;
    try {
      o = new Intl[r(2410)](e, { type: a });
    } catch {
      if (!Intl) return this[r(2116)][r(2463)](r(1209)), Wr;
      if (!x[r(2096)](/-|_/)) return Wr;
      const u = this.languageUtils[r(2522)](x);
      o = this.getRule(u, t);
    }
    return this[r(747)][n] = o, o;
  }
  [s(823)](x, t = {}) {
    var r = s;
    let e = this[r(1028)](x, t);
    return e || (e = this[r(1028)](r(529), t)), (e == null ? void 0 : e[r(1335)]()[r(1325)].length) > 1;
  }
  [s(733)](x, t, r = {}) {
    var e = s;
    return this[e(2702)](x, r)[e(802)]((a) => "" + t + a);
  }
  [s(2702)](x, t = {}) {
    var r = s;
    let e = this[r(1028)](x, t);
    return e || (e = this[r(1028)]("dev", t)), e ? e[r(1335)]()[r(1325)][r(2601)]((a, n) => Vr[a] - Vr[n])[r(802)]((a) => "" + this[r(1582)][r(409)] + (t[r(2666)] ? r(2666) + this[r(1582)][r(409)] : "") + a) : [];
  }
  [s(2030)](x, t, r = {}) {
    var e = s;
    const a = this[e(1028)](x, r);
    return a ? "" + this[e(1582)][e(409)] + (r[e(2666)] ? e(2666) + this[e(1582)][e(409)] : "") + a[e(1538)](t) : (this[e(2116)][e(2279)](e(1787) + x), this[e(2030)](e(529), t, r));
  }
}
const Zr = (i, x, t, r = ".", e = !0) => {
  let a = to(i, x, t);
  return !a && e && v0(t) && (a = Kt(i, t, r), a === void 0 && (a = Kt(x, t, r))), a;
}, Vx = (i) => i[s(1024)](/\$/g, "$$$$");
class fo {
  constructor(x = {}) {
    var r;
    var t = s;
    this.logger = he[t(1640)](t(2323)), this[t(1582)] = x, this.format = ((r = x == null ? void 0 : x[t(1291)]) == null ? void 0 : r[t(1533)]) || ((e) => e), this[t(2049)](x);
  }
  [s(2049)](x = {}) {
    var t = s;
    x.interpolation || (x.interpolation = { escapeValue: !0 });
    const { escape: r, escapeValue: e, useRawValueToEscape: a, prefix: n, prefixEscaped: o, suffix: c, suffixEscaped: u, formatSeparator: f, unescapeSuffix: d, unescapePrefix: l, nestingPrefix: v, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: y, nestingOptionsSeparator: w, maxReplaces: k, alwaysFormat: F } = x.interpolation;
    this[t(2118)] = r !== void 0 ? r : ao, this[t(1932)] = e !== void 0 ? e : !0, this[t(2500)] = a !== void 0 ? a : !1, this[t(2178)] = n ? ze(n) : o || "{{", this[t(2402)] = c ? ze(c) : u || "}}", this[t(2034)] = f || ",", this[t(1872)] = d ? "" : l || "-", this[t(2512)] = this[t(1872)] ? "" : d || "", this[t(1018)] = v ? ze(v) : h || ze(t(836)), this[t(864)] = m ? ze(m) : y || ze(")"), this.nestingOptionsSeparator = w || ",", this.maxReplaces = k || 1e3, this[t(1945)] = F !== void 0 ? F : !1, this[t(953)]();
  }
  [s(1548)]() {
    var x = s;
    this[x(1582)] && this[x(2049)](this.options);
  }
  [s(953)]() {
    var x = s;
    const t = (r, e) => {
      var a = K;
      return (r == null ? void 0 : r[a(1490)]) === e ? (r.lastIndex = 0, r) : new RegExp(e, "g");
    };
    this[x(2043)] = t(this[x(2043)], this[x(2178)] + x(1544) + this[x(2402)]), this[x(1103)] = t(this.regexpUnescape, "" + this[x(2178)] + this.unescapePrefix + x(1544) + this[x(2512)] + this[x(2402)]), this[x(1940)] = t(this[x(1940)], this[x(1018)] + x(1544) + this[x(864)]);
  }
  [s(1212)](x, t, r, e) {
    var h;
    var a = s;
    let n, o, c;
    const u = this[a(1582)] && this[a(1582)][a(1291)] && this[a(1582)].interpolation[a(751)] || {}, f = (m) => {
      var y = a;
      if (m[y(393)](this[y(2034)]) < 0) {
        const T = Zr(t, u, m, this[y(1582)].keySeparator, this[y(1582)][y(1557)]);
        return this.alwaysFormat ? this.format(T, void 0, r, { ...e, ...t, interpolationkey: m }) : T;
      }
      const w = m[y(2432)](this[y(2034)]), k = w[y(2310)]()[y(2235)](), F = w[y(1372)](this[y(2034)])[y(2235)]();
      return this[y(1533)](Zr(t, u, k, this[y(1582)][y(819)], this[y(1582)][y(1557)]), F, r, { ...e, ...t, interpolationkey: k });
    };
    this[a(953)]();
    const d = (e == null ? void 0 : e[a(1841)]) || this[a(1582)][a(1841)], l = ((h = e == null ? void 0 : e[a(1291)]) == null ? void 0 : h.skipOnVariables) !== void 0 ? e[a(1291)][a(2709)] : this[a(1582)].interpolation[a(2709)];
    return [{ regex: this[a(1103)], safeValue: (m) => Vx(m) }, { regex: this[a(2043)], safeValue: (m) => this[a(1932)] ? Vx(this[a(2118)](m)) : Vx(m) }][a(1455)]((m) => {
      var y = a;
      for (c = 0; n = m[y(2e3)][y(413)](x); ) {
        const w = n[1][y(2235)]();
        if (o = f(w), o === void 0)
          if (typeof d == "function") {
            const F = d(x, n, e);
            o = v0(F) ? F : "";
          } else if (e && Object[y(1745)][y(2036)][y(1580)](e, w)) o = "";
          else if (l) {
            o = n[0];
            continue;
          } else this.logger[y(2279)]("missed to pass in variable " + w + y(387) + x), o = "";
        else !v0(o) && !this[y(2500)] && (o = Dr(o));
        const k = m[y(2133)](o);
        if (x = x[y(1024)](n[0], k), l ? (m[y(2e3)][y(481)] += o[y(1027)], m[y(2e3)][y(481)] -= n[0][y(1027)]) : m[y(2e3)].lastIndex = 0, c++, c >= this[y(1742)]) break;
      }
    }), x;
  }
  [s(427)](x, t, r = {}) {
    var e = s;
    let a, n, o;
    const c = (u, f) => {
      var d = K;
      const l = this.nestingOptionsSeparator;
      if (u[d(393)](l) < 0) return u;
      const v = u[d(2432)](new RegExp(l + d(1929)));
      let h = "{" + v[1];
      u = v[0], h = this[d(1212)](h, o);
      const m = h.match(/'/g), y = h[d(2096)](/"/g);
      (((m == null ? void 0 : m.length) ?? 0) % 2 === 0 && !y || y[d(1027)] % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        o = JSON[d(2673)](h), f && (o = { ...f, ...o });
      } catch (w) {
        return this[d(2116)].warn("failed parsing options string in nesting for key " + u, w), "" + u + l + h;
      }
      return o[d(1363)] && o.defaultValue[d(393)](this[d(2178)]) > -1 && delete o[d(1363)], u;
    };
    for (; a = this[e(1940)][e(413)](x); ) {
      let u = [];
      o = { ...r }, o = o[e(1024)] && !v0(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o[e(1363)];
      let f = !1;
      if (a[0][e(393)](this[e(2034)]) !== -1 && !/{.*}/.test(a[1])) {
        const d = a[1].split(this[e(2034)]).map((l) => l[e(2235)]());
        a[1] = d[e(2310)](), u = d, f = !0;
      }
      if (n = t(c[e(1580)](this, a[1][e(2235)](), o), o), n && a[0] === x && !v0(n)) return n;
      v0(n) || (n = Dr(n)), !n && (this.logger[e(2279)](e(1760) + a[1] + " for nesting " + x), n = ""), f && (n = u[e(473)]((d, l) => this[e(1533)](d, l, r[e(687)], { ...r, interpolationkey: a[1].trim() }), n[e(2235)]())), x = x[e(1024)](a[0], n), this[e(2043)][e(481)] = 0;
    }
    return x;
  }
}
const lo = (i) => {
  var x = s;
  let t = i[x(955)]()[x(2235)]();
  const r = {};
  if (i[x(393)]("(") > -1) {
    const e = i[x(2432)]("(");
    t = e[0].toLowerCase()[x(2235)]();
    const a = e[1].substring(0, e[1][x(1027)] - 1);
    t === "currency" && a[x(393)](":") < 0 ? r[x(1931)] || (r[x(1931)] = a[x(2235)]()) : t === x(2218) && a.indexOf(":") < 0 ? r[x(1259)] || (r.range = a[x(2235)]()) : a.split(";")[x(1455)]((o) => {
      var c = x;
      if (o) {
        const [u, ...f] = o[c(2432)](":"), d = f[c(1372)](":").trim()[c(1024)](/^'+|'+$/g, ""), l = u[c(2235)]();
        r[l] || (r[l] = d), d === c(788) && (r[l] = !1), d === "true" && (r[l] = !0), isNaN(d) || (r[l] = parseInt(d, 10));
      }
    });
  }
  return { formatName: t, formatOptions: r };
}, Br = (i) => {
  const x = {};
  return (t, r, e) => {
    var a = K;
    let n = e;
    e && e[a(1205)] && e.formatParams && e[a(446)][e.interpolationkey] && e[e[a(1205)]] && (n = { ...n, [e[a(1205)]]: void 0 });
    const o = r + JSON.stringify(n);
    let c = x[o];
    return !c && (c = i(rx(r), e), x[o] = c), c(t);
  };
}, ho = (i) => (x, t, r) => i(rx(t), r)(x);
class po {
  constructor(x = {}) {
    var t = s;
    this[t(2116)] = he.create("formatter"), this.options = x, this[t(2049)](x);
  }
  [s(2049)](x, t = { interpolation: {} }) {
    var r = s;
    this.formatSeparator = t[r(1291)][r(2034)] || ",";
    const e = t.cacheInBuiltFormats ? Br : ho;
    this[r(628)] = { number: e((a, n) => {
      var o = r;
      const c = new Intl[o(1195)](a, { ...n });
      return (u) => c[o(1533)](u);
    }), currency: e((a, n) => {
      var o = r;
      const c = new Intl[o(1195)](a, { ...n, style: "currency" });
      return (u) => c.format(u);
    }), datetime: e((a, n) => {
      var o = r;
      const c = new Intl[o(865)](a, { ...n });
      return (u) => c[o(1533)](u);
    }), relativetime: e((a, n) => {
      var o = r;
      const c = new Intl[o(885)](a, { ...n });
      return (u) => c[o(1533)](u, n[o(1259)] || "day");
    }), list: e((a, n) => {
      var o = r;
      const c = new Intl[o(1594)](a, { ...n });
      return (u) => c[o(1533)](u);
    }) };
  }
  [s(1988)](x, t) {
    var r = s;
    this[r(628)][x[r(955)]()[r(2235)]()] = t;
  }
  [s(2693)](x, t) {
    var r = s;
    this[r(628)][x[r(955)]().trim()] = Br(t);
  }
  [s(1533)](x, t, r, e = {}) {
    var a = s;
    const n = t[a(2432)](this[a(2034)]);
    if (n[a(1027)] > 1 && n[0].indexOf("(") > 1 && n[0][a(393)](")") < 0 && n[a(2142)]((c) => c.indexOf(")") > -1)) {
      const c = n[a(1861)]((u) => u[a(393)](")") > -1);
      n[0] = [n[0], ...n[a(1849)](1, c)][a(1372)](this[a(2034)]);
    }
    return n[a(473)]((c, u) => {
      var v;
      var f = a;
      const { formatName: d, formatOptions: l } = lo(u);
      if (this[f(628)][d]) {
        let h = c;
        try {
          const m = ((v = e == null ? void 0 : e.formatParams) == null ? void 0 : v[e[f(1205)]]) || {}, y = m[f(1178)] || m[f(687)] || e[f(1178)] || e[f(687)] || r;
          h = this.formats[d](c, y, { ...l, ...e, ...m });
        } catch (m) {
          this[f(2116)][f(2279)](m);
        }
        return h;
      } else this[f(2116)][f(2279)](f(1740) + d);
      return c;
    }, x);
  }
}
const mo = (i, x) => {
  var t = s;
  i[t(439)][x] !== void 0 && (delete i[t(439)][x], i.pendingCount--);
};
class vo extends Nx {
  constructor(x, t, r, e = {}) {
    var n, o;
    var a = s;
    super(), this[a(2466)] = x, this[a(2577)] = t, this[a(2418)] = r, this[a(1753)] = r[a(1753)], this[a(1582)] = e, this[a(2116)] = he[a(1640)](a(2584)), this[a(1032)] = [], this[a(1066)] = e[a(1066)] || 10, this.readingCalls = 0, this[a(1113)] = e[a(1113)] >= 0 ? e[a(1113)] : 5, this[a(2494)] = e.retryTimeout >= 1 ? e.retryTimeout : 350, this.state = {}, this[a(568)] = [], (o = (n = this.backend) == null ? void 0 : n[a(2049)]) == null || o.call(n, r, e[a(2466)], e);
  }
  [s(943)](x, t, r, e) {
    var a = s;
    const n = {}, o = {}, c = {}, u = {};
    return x[a(1455)]((f) => {
      var d = a;
      let l = !0;
      t[d(1455)]((v) => {
        var h = d;
        const m = f + "|" + v;
        !r.reload && this[h(2577)].hasResourceBundle(f, v) ? this[h(368)][m] = 2 : this[h(368)][m] < 0 || (this[h(368)][m] === 1 ? o[m] === void 0 && (o[m] = !0) : (this[h(368)][m] = 1, l = !1, o[m] === void 0 && (o[m] = !0), n[m] === void 0 && (n[m] = !0), u[v] === void 0 && (u[v] = !0)));
      }), l || (c[f] = !0);
    }), (Object[a(2559)](n)[a(1027)] || Object[a(2559)](o)[a(1027)]) && this[a(568)][a(1020)]({ pending: o, pendingCount: Object.keys(o)[a(1027)], loaded: {}, errors: [], callback: e }), { toLoad: Object[a(2559)](n), pending: Object.keys(o), toLoadLanguages: Object.keys(c), toLoadNamespaces: Object.keys(u) };
  }
  loaded(x, t, r) {
    var e = s;
    const a = x[e(2432)]("|"), n = a[0], o = a[1];
    t && this.emit(e(380), n, o, t), !t && r && this[e(2577)][e(1037)](n, o, r, void 0, void 0, { skipCopy: !0 }), this[e(368)][x] = t ? -1 : 2, t && r && (this[e(368)][x] = 0);
    const c = {};
    this[e(568)].forEach((u) => {
      var f = e;
      xo(u.loaded, [n], o), mo(u, x), t && u[f(2400)][f(1020)](t), u[f(1796)] === 0 && !u[f(2385)] && (Object[f(2559)](u[f(2231)])[f(1455)]((d) => {
        var l = f;
        c[d] || (c[d] = {});
        const v = u[l(2231)][d];
        v[l(1027)] && v.forEach((h) => {
          c[d][h] === void 0 && (c[d][h] = !0);
        });
      }), u.done = !0, u[f(2400)][f(1027)] ? u[f(2152)](u[f(2400)]) : u[f(2152)]());
    }), this[e(1909)](e(2231), c), this[e(568)] = this.queue[e(2674)]((u) => !u[e(2385)]);
  }
  [s(2381)](x, t, r, e = 0, a = this[s(2494)], n) {
    var o = s;
    if (!x[o(1027)]) return n(null, {});
    if (this[o(1648)] >= this[o(1066)]) {
      this[o(1032)].push({ lng: x, ns: t, fcName: r, tried: e, wait: a, callback: n });
      return;
    }
    this.readingCalls++;
    const c = (f, d) => {
      var l = o;
      if (this[l(1648)]--, this[l(1032)][l(1027)] > 0) {
        const v = this[l(1032)][l(2310)]();
        this[l(2381)](v[l(687)], v.ns, v[l(1031)], v[l(1232)], v[l(2201)], v.callback);
      }
      if (f && d && e < this.maxRetries) {
        setTimeout(() => {
          var v = l;
          this[v(2381)].call(this, x, t, r, e + 1, a * 2, n);
        }, a);
        return;
      }
      n(f, d);
    }, u = this[o(2466)][r][o(960)](this[o(2466)]);
    if (u[o(1027)] === 2) {
      try {
        const f = u(x, t);
        f && typeof f.then === o(2138) ? f.then((d) => c(null, d)).catch(c) : c(null, f);
      } catch (f) {
        c(f);
      }
      return;
    }
    return u(x, t, c);
  }
  [s(1073)](x, t, r = {}, e) {
    var a = s;
    if (!this.backend) return this[a(2116)].warn("No backend was added via i18next.use. Will not load resources."), e && e();
    v0(x) && (x = this[a(1753)][a(1390)](x)), v0(t) && (t = [t]);
    const n = this[a(943)](x, t, r, e);
    if (!n[a(1211)][a(1027)])
      return n[a(439)][a(1027)] || e(), null;
    n[a(1211)][a(1455)]((o) => {
      var c = a;
      this[c(1922)](o);
    });
  }
  [s(1182)](x, t, r) {
    var e = s;
    this[e(1073)](x, t, {}, r);
  }
  [s(1527)](x, t, r) {
    this.prepareLoading(x, t, { reload: !0 }, r);
  }
  loadOne(x, t = "") {
    var r = s;
    const e = x[r(2432)]("|"), a = e[0], n = e[1];
    this.read(a, n, r(2381), void 0, void 0, (o, c) => {
      var u = r;
      o && this[u(2116)][u(2279)](t + u(2243) + n + u(891) + a + u(818), o), !o && c && this.logger[u(1448)](t + u(593) + n + u(891) + a, c), this[u(2231)](x, o, c);
    });
  }
  [s(1405)](x, t, r, e, a, n = {}, o = () => {
  }) {
    var u, f, d, l, v;
    var c = s;
    if ((f = (u = this[c(2418)]) == null ? void 0 : u[c(457)]) != null && f[c(2562)] && !((l = (d = this.services) == null ? void 0 : d[c(457)]) != null && l[c(2562)](t))) {
      this[c(2116)].warn(c(1502) + r + c(1899) + t + c(2618), c(1618));
      return;
    }
    if (!(r == null || r === "")) {
      if ((v = this[c(2466)]) != null && v[c(1640)]) {
        const h = { ...n, isUpdate: a }, m = this[c(2466)][c(1640)].bind(this[c(2466)]);
        if (m.length < 6) try {
          let y;
          m.length === 5 ? y = m(x, t, r, e, h) : y = m(x, t, r, e), y && typeof y[c(2397)] === c(2138) ? y[c(2397)]((w) => o(null, w))[c(1615)](o) : o(null, y);
        } catch (y) {
          o(y);
        }
        else m(x, t, r, e, o, h);
      }
      !x || !x[0] || this.store[c(2013)](x[0], t, r, e);
    }
  }
}
const Kr = () => ({ debug: !1, initAsync: !0, ns: ["translation"], defaultNS: [s(408)], fallbackLng: ["dev"], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: s(1676), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: s(2696), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (i) => {
  var x = s;
  let t = {};
  if (typeof i[1] == "object" && (t = i[1]), v0(i[1]) && (t.defaultValue = i[1]), v0(i[2]) && (t.tDescription = i[2]), typeof i[2] === x(644) || typeof i[3] === x(644)) {
    const r = i[3] || i[2];
    Object[x(2559)](r)[x(1455)]((e) => {
      t[e] = r[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (i) => i, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: s(836), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), Jr = (i) => {
  var t, r;
  var x = s;
  return v0(i.ns) && (i.ns = [i.ns]), v0(i.fallbackLng) && (i[x(2261)] = [i.fallbackLng]), v0(i[x(528)]) && (i[x(528)] = [i[x(528)]]), ((r = (t = i[x(929)]) == null ? void 0 : t[x(393)]) == null ? void 0 : r.call(t, "cimode")) < 0 && (i.supportedLngs = i.supportedLngs[x(383)]([x(787)])), typeof i[x(1571)] === x(2665) && (i[x(566)] = i[x(1571)]), i;
}, fx = () => {
}, go = (i) => {
  var x = s;
  Object[x(1993)](Object.getPrototypeOf(i))[x(1455)]((r) => {
    var e = x;
    typeof i[r] === e(2138) && (i[r] = i[r][e(960)](i));
  });
};
class ax extends Nx {
  constructor(x = {}, t) {
    var r = s;
    if (super(), this[r(1582)] = Jr(x), this[r(2418)] = {}, this[r(2116)] = he, this[r(1354)] = { external: [] }, go(this), t && !this.isInitialized && !x[r(1313)]) {
      if (!this[r(1582)].initAsync) return this[r(2049)](x, t), this;
      setTimeout(() => {
        var e = r;
        this[e(2049)](x, t);
      }, 0);
    }
  }
  init(x = {}, t) {
    var r = s;
    this[r(1194)] = !0, typeof x === r(2138) && (t = x, x = {}), x[r(2050)] == null && x.ns && (v0(x.ns) ? x[r(2050)] = x.ns : x.ns[r(393)](r(408)) < 0 && (x[r(2050)] = x.ns[0]));
    const e = Kr();
    this[r(1582)] = { ...e, ...this[r(1582)], ...Jr(x) }, this[r(1582)][r(1291)] = { ...e[r(1291)], ...this.options.interpolation }, x.keySeparator !== void 0 && (this.options[r(1666)] = x[r(819)]), x[r(689)] !== void 0 && (this[r(1582)][r(2248)] = x[r(689)]);
    const a = (f) => {
      var d = r;
      return f ? typeof f === d(2138) ? new f() : f : null;
    };
    if (!this[r(1582)][r(1313)]) {
      this.modules[r(2116)] ? he[r(2049)](a(this[r(1354)][r(2116)]), this.options) : he[r(2049)](null, this.options);
      let f;
      this[r(1354)][r(2293)] ? f = this[r(1354)][r(2293)] : f = po;
      const d = new Ur(this[r(1582)]);
      this.store = new $r(this[r(1582)][r(1408)], this[r(1582)]);
      const l = this[r(2418)];
      l[r(2116)] = he, l[r(1623)] = this[r(2577)], l[r(1753)] = d, l[r(837)] = new uo(d, { prepend: this[r(1582)][r(2184)], simplifyPluralSuffix: this.options.simplifyPluralSuffix }), f && (!this[r(1582)][r(1291)][r(1533)] || this[r(1582)].interpolation.format === e[r(1291)][r(1533)]) && (l[r(2293)] = a(f), l[r(2293)].init(l, this.options), this[r(1582)][r(1291)][r(1533)] = l[r(2293)].format[r(960)](l[r(2293)])), l.interpolator = new fo(this[r(1582)]), l[r(457)] = { hasLoadedNamespace: this.hasLoadedNamespace[r(960)](this) }, l.backendConnector = new vo(a(this[r(1354)][r(2466)]), l[r(1623)], l, this[r(1582)]), l[r(2584)].on("*", (v, ...h) => {
        var m = r;
        this[m(1909)](v, ...h);
      }), this[r(1354)][r(1568)] && (l[r(1568)] = a(this.modules.languageDetector), l.languageDetector[r(2049)] && l[r(1568)][r(2049)](l, this[r(1582)][r(919)], this[r(1582)])), this[r(1354)].i18nFormat && (l[r(1992)] = a(this[r(1354)][r(1992)]), l[r(1992)][r(2049)] && l[r(1992)][r(2049)](this)), this[r(1072)] = new Rx(this[r(2418)], this[r(1582)]), this.translator.on("*", (v, ...h) => {
        this.emit(v, ...h);
      }), this.modules.external.forEach((v) => {
        var h = r;
        v[h(2049)] && v.init(this);
      });
    }
    if (this[r(1533)] = this[r(1582)][r(1291)][r(1533)], t || (t = fx), this[r(1582)][r(2261)] && !this.services.languageDetector && !this[r(1582)][r(687)]) {
      const f = this[r(2418)][r(1753)][r(2315)](this[r(1582)][r(2261)]);
      f[r(1027)] > 0 && f[0] !== "dev" && (this[r(1582)][r(687)] = f[0]);
    }
    !this[r(2418)][r(1568)] && !this[r(1582)][r(687)] && this[r(2116)][r(2279)](r(1411)), [r(1804), "hasResourceBundle", r(2202), r(1181)][r(1455)]((f) => {
      var d = r;
      this[f] = (...l) => this[d(2577)][f](...l);
    }), [r(2013), r(2498), r(1037), r(2407)][r(1455)]((f) => {
      this[f] = (...d) => (this.store[f](...d), this);
    });
    const c = Ge(), u = () => {
      var f = r;
      const d = (l, v) => {
        var h = K;
        this.isInitializing = !1, this[h(1453)] && !this[h(786)] && this[h(2116)][h(2279)]("init: i18next is already initialized. You should call init just once!"), this[h(1453)] = !0, this.options[h(1313)] || this[h(2116)].log(h(677), this[h(1582)]), this[h(1909)]("initialized", this.options), c[h(639)](v), t(l, v);
      };
      if (this.languages && !this[f(1453)]) return d(null, this.t[f(960)](this));
      this[f(2447)](this[f(1582)][f(687)], d);
    };
    return this[r(1582)].resources || !this[r(1582)][r(566)] ? u() : setTimeout(u, 0), c;
  }
  [s(2008)](x, t = fx) {
    var n, o;
    var r = s;
    let e = t;
    const a = v0(x) ? x : this[r(1070)];
    if (typeof x === r(2138) && (e = x), !this[r(1582)][r(1408)] || this[r(1582)][r(1763)]) {
      if ((a == null ? void 0 : a[r(955)]()) === r(787) && (!this[r(1582)][r(801)] || this[r(1582)][r(801)][r(1027)] === 0)) return e();
      const c = [], u = (f) => {
        var d = r;
        if (!f || f === "cimode") return;
        this[d(2418)][d(1753)][d(1390)](f)[d(1455)]((v) => {
          var h = d;
          v !== h(787) && c[h(393)](v) < 0 && c[h(1020)](v);
        });
      };
      a ? u(a) : this[r(2418)].languageUtils.getFallbackCodes(this[r(1582)][r(2261)])[r(1455)]((d) => u(d)), (o = (n = this[r(1582)][r(801)]) == null ? void 0 : n[r(1455)]) == null || o.call(n, (f) => u(f)), this.services[r(2584)][r(1182)](c, this[r(1582)].ns, (f) => {
        var d = r;
        !f && !this[d(2607)] && this.language && this[d(1636)](this.language), e(f);
      });
    } else e(null);
  }
  [s(2721)](x, t, r) {
    var e = s;
    const a = Ge();
    return typeof x === e(2138) && (r = x, x = void 0), typeof t === e(2138) && (r = t, t = void 0), x || (x = this.languages), t || (t = this[e(1582)].ns), r || (r = fx), this[e(2418)].backendConnector[e(1527)](x, t, (n) => {
      var o = e;
      a[o(639)](), r(n);
    }), a;
  }
  use(x) {
    var t = s;
    if (!x) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!x.type) throw new Error(t(2576));
    return x[t(2122)] === t(2466) && (this[t(1354)][t(2466)] = x), (x[t(2122)] === t(2116) || x[t(1448)] && x[t(2279)] && x[t(2463)]) && (this[t(1354)][t(2116)] = x), x[t(2122)] === "languageDetector" && (this[t(1354)][t(1568)] = x), x[t(2122)] === t(1992) && (this[t(1354)][t(1992)] = x), x[t(2122)] === t(741) && Ks[t(2686)](x), x.type === t(2293) && (this[t(1354)][t(2293)] = x), x.type === t(1598) && this[t(1354)].external[t(1020)](x), this;
  }
  [s(1636)](x) {
    var t = s;
    if (!(!x || !this.languages) && !([t(787), "dev"][t(393)](x) > -1)) {
      for (let r = 0; r < this.languages.length; r++) {
        const e = this[t(361)][r];
        if (!(["cimode", "dev"][t(393)](e) > -1) && this[t(2577)][t(1978)](e)) {
          this[t(2607)] = e;
          break;
        }
      }
      !this[t(2607)] && this[t(361)].indexOf(x) < 0 && this[t(2577)][t(1978)](x) && (this[t(2607)] = x, this[t(361)][t(474)](x));
    }
  }
  [s(2447)](x, t) {
    var r = s;
    this[r(1225)] = x;
    const e = Ge();
    this[r(1909)](r(1860), x);
    const a = (c) => {
      var u = r;
      this[u(1070)] = c, this[u(361)] = this[u(2418)][u(1753)].toResolveHierarchy(c), this[u(2607)] = void 0, this.setResolvedLanguage(c);
    }, n = (c, u) => {
      var f = r;
      u ? this[f(1225)] === x && (a(u), this.translator[f(2447)](u), this[f(1225)] = void 0, this[f(1909)](f(722), u), this[f(2116)][f(1448)](f(722), u)) : this[f(1225)] = void 0, e[f(639)]((...d) => this.t(...d)), t && t(c, (...d) => this.t(...d));
    }, o = (c) => {
      var l, v;
      var u = r;
      !x && !c && this.services[u(1568)] && (c = []);
      const f = v0(c) ? c : c && c[0], d = this[u(2577)][u(1978)](f) ? f : this[u(2418)][u(1753)][u(781)](v0(c) ? [c] : c);
      d && (!this[u(1070)] && a(d), this.translator[u(1070)] || this[u(1072)].changeLanguage(d), (v = (l = this[u(2418)][u(1568)]) == null ? void 0 : l[u(927)]) == null || v.call(l, d)), this[u(2008)](d, (h) => {
        n(h, d);
      });
    };
    return !x && this[r(2418)].languageDetector && !this.services[r(1568)][r(1927)] ? o(this[r(2418)][r(1568)].detect()) : !x && this.services[r(1568)] && this[r(2418)][r(1568)][r(1927)] ? this[r(2418)].languageDetector[r(2520)][r(1027)] === 0 ? this[r(2418)][r(1568)][r(2520)]()[r(2397)](o) : this[r(2418)].languageDetector[r(2520)](o) : o(x), e;
  }
  [s(2185)](x, t, r) {
    var e = s;
    const a = (n, o, ...c) => {
      var u = K;
      let f;
      typeof o !== u(644) ? f = this[u(1582)][u(1265)]([n, o][u(383)](c)) : f = { ...o }, f[u(687)] = f[u(687)] || a[u(687)], f.lngs = f.lngs || a[u(2077)], f.ns = f.ns || a.ns, f[u(654)] !== "" && (f[u(654)] = f[u(654)] || r || a[u(654)]);
      const d = this.options[u(819)] || ".";
      let l;
      return f[u(654)] && Array[u(710)](n) ? l = n[u(802)]((v) => "" + f[u(654)] + d + v) : l = f[u(654)] ? "" + f[u(654)] + d + n : n, this.t(l, f);
    };
    return v0(x) ? a[e(687)] = x : a[e(2077)] = x, a.ns = t, a[e(654)] = r, a;
  }
  t(...x) {
    var r;
    var t = s;
    return (r = this[t(1072)]) == null ? void 0 : r[t(1233)](...x);
  }
  [s(2538)](...x) {
    var r;
    var t = s;
    return (r = this[t(1072)]) == null ? void 0 : r[t(2538)](...x);
  }
  [s(1444)](x) {
    var t = s;
    this[t(1582)].defaultNS = x;
  }
  [s(2562)](x, t = {}) {
    var r = s;
    if (!this[r(1453)]) return this.logger[r(2279)]("hasLoadedNamespace: i18next was not initialized", this[r(361)]), !1;
    if (!this[r(361)] || !this[r(361)][r(1027)]) return this.logger[r(2279)]("hasLoadedNamespace: i18n.languages were undefined or empty", this[r(361)]), !1;
    const e = t.lng || this[r(2607)] || this.languages[0], a = this[r(1582)] ? this[r(1582)][r(2261)] : !1, n = this.languages[this.languages.length - 1];
    if (e[r(955)]() === r(787)) return !0;
    const o = (c, u) => {
      var f = r;
      const d = this[f(2418)][f(2584)][f(368)][c + "|" + u];
      return d === -1 || d === 0 || d === 2;
    };
    if (t[r(676)]) {
      const c = t[r(676)](this, o);
      if (c !== void 0) return c;
    }
    return !!(this[r(1911)](e, x) || !this.services[r(2584)][r(2466)] || this[r(1582)][r(1408)] && !this.options.partialBundledLanguages || o(e, x) && (!a || o(n, x)));
  }
  [s(2671)](x, t) {
    var r = s;
    const e = Ge();
    return this[r(1582)].ns ? (v0(x) && (x = [x]), x.forEach((a) => {
      var n = r;
      this[n(1582)].ns[n(393)](a) < 0 && this[n(1582)].ns.push(a);
    }), this[r(2008)]((a) => {
      e.resolve(), t && t(a);
    }), e) : (t && t(), Promise[r(639)]());
  }
  loadLanguages(x, t) {
    var r = s;
    const e = Ge();
    v0(x) && (x = [x]);
    const a = this[r(1582)][r(801)] || [], n = x[r(2674)]((o) => a[r(393)](o) < 0 && this[r(2418)][r(1753)].isSupportedCode(o));
    return n[r(1027)] ? (this[r(1582)][r(801)] = a[r(383)](n), this.loadResources((o) => {
      e.resolve(), t && t(o);
    }), e) : (t && t(), Promise[r(639)]());
  }
  [s(517)](x) {
    var a, n;
    var t = s;
    if (x || (x = this[t(2607)] || (((a = this[t(361)]) == null ? void 0 : a[t(1027)]) > 0 ? this.languages[0] : this[t(1070)])), !x) return "rtl";
    const r = ["ar", t(1937), t(1926), t(1447), "xaa", t(908), t(766), t(2471), t(470), t(1406), "acm", t(2486), t(2519), t(2352), t(2451), t(1179), "ads", "aeb", t(800), "afb", t(2259), t(720), "apd", t(2748), t(760), t(1997), t(1536), t(1522), t(1794), "avl", t(2174), "ayl", t(2454), "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", t(842), t(2692), "prp", t(1650), "ug", "ur", "ydd", "yds", t(2444), "ji", "yi", "hbo", t(1524), t(1188), "fa", t(734), t(947), t(2062), t(1025), "dv", t(670), t(1410)], e = ((n = this[t(2418)]) == null ? void 0 : n.languageUtils) || new Ur(Kr());
    return r.indexOf(e[t(2522)](x)) > -1 || x[t(955)]().indexOf(t(1515)) > 1 ? t(1727) : "ltr";
  }
  static [s(969)](x = {}, t) {
    return new ax(x, t);
  }
  [s(1893)](x = {}, t = fx) {
    var r = s;
    const e = x.forkResourceStore;
    e && delete x[r(2012)];
    const a = { ...this[r(1582)], ...x, isClone: !0 }, n = new ax(a);
    if ((x[r(377)] !== void 0 || x[r(2178)] !== void 0) && (n[r(2116)] = n[r(2116)][r(1512)](x)), [r(2577), r(2418), "language"][r(1455)]((c) => {
      n[c] = this[c];
    }), n[r(2418)] = { ...this.services }, n[r(2418)][r(457)] = { hasLoadedNamespace: n[r(2562)][r(960)](n) }, e) {
      const c = Object.keys(this[r(2577)][r(984)])[r(473)]((u, f) => {
        var d = r;
        return u[f] = { ...this[d(2577)][d(984)][f] }, u[f] = Object[d(2559)](u[f])[d(473)]((l, v) => (l[v] = { ...u[f][v] }, l), u[f]), u;
      }, {});
      n[r(2577)] = new $r(c, a), n[r(2418)].resourceStore = n[r(2577)];
    }
    return n[r(1072)] = new Rx(n[r(2418)], a), n[r(1072)].on("*", (c, ...u) => {
      var f = r;
      n[f(1909)](c, ...u);
    }), n[r(2049)](a, t), n[r(1072)][r(1582)] = a, n[r(1072)][r(2584)][r(2418)][r(457)] = { hasLoadedNamespace: n[r(2562)][r(960)](n) }, n;
  }
  [s(2742)]() {
    var x = s;
    return { options: this[x(1582)], store: this.store, language: this[x(1070)], languages: this[x(361)], resolvedLanguage: this[x(2607)] };
  }
}
const Y0 = ax[s(969)]();
Y0[s(969)] = ax[s(969)], Y0[s(969)], Y0[s(517)], Y0[s(2049)], Y0[s(2008)], Y0[s(2721)], Y0.use, Y0[s(2447)], Y0.getFixedT, Y0.t, Y0[s(2538)], Y0[s(1444)], Y0[s(2562)], Y0[s(2671)], Y0[s(1608)];
function yo() {
  var i = s;
  if (typeof navigator < "u" && navigator[i(1070)]) return navigator[i(1070)] === i(358) ? "zh-CN" : i(1560);
  try {
    const x = typeof require !== i(1584) ? require : void 0;
    if (x)
      return x(i(1985))[i(1320)][i(2143)].startsWith("zh") ? i(358) : "en-US";
  } catch {
  }
  return i(1560);
}
let Js = yo();
const bo = { "zh-CN": {}, "en-US": {} };
function Jt(i) {
  const x = i === "zh-CN" ? Xi : Yi, t = bo[i];
  return { ...x, ...t };
}
function wo() {
  return Js;
}
function Gt(i, x = {}) {
  var t = s;
  let e = Jt(Js)[i];
  return e ? typeof e === t(1278) ? e[t(1024)](/\{\{(\w+)\}\}/g, (a, n) => x[n] !== void 0 ? String(x[n]) : a) : e : i;
}
const So = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, ko = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, Eo = (i) => ko[i], Po = (i) => i[s(1024)](So, Eo);
let Gr = { bindI18n: s(722), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", s(2313), "i", "p"], useSuspense: !0, unescape: Po };
const Io = (i = {}) => {
  Gr = { ...Gr, ...i };
}, Ro = { type: s(1598), init(i) {
  var x = s;
  Io(i[x(1582)][x(2565)]);
} };
!Y0[s(1453)] && Y0[s(2527)](Ro)[s(2049)]({ resources: { "zh-CN": { translation: Jt(s(358)) }, "en-US": { translation: Jt(s(1560)) } }, lng: wo(), fallbackLng: "en-US", interpolation: { escapeValue: !1 } });
const Re = [];
_e[s(986)] = _e[s(986)] || {}, _e[s(986)][s(1988)] = function(i, x) {
  var t = s;
  typeof x === t(2138) ? Re[t(1020)]([i, { formatter: x, setter: null }]) : Re[t(1020)]([i, x]);
};
function Co(i, x, t) {
  var c, u, f;
  var r = s;
  const e = Re[r(2142)](([d]) => {
    var l = r;
    return d == l(2136);
  }), a = Re.find(([d]) => {
    var l = r;
    return ar(d, i[l(2122)]);
  }) || e;
  let n = !1;
  if (a) {
    const d = a[1][r(2546)];
    d && (n = !!d(i, x, t));
  }
  !n && (i[r(1341)][x].value = t, (u = (c = i.widgets[x])[r(2152)]) == null || u.call(c, t)), (f = (T0[r(1484)] || T0[r(782)].workflow).activeWorkflow) == null || f.changeTracker[r(1865)]();
}
function Cx(i) {
  var x = s;
  const t = {}, r = Re.find(([e]) => {
    var a = K;
    return e == a(2136);
  });
  return i[x(530)][x(1455)]((e) => {
    var a = x;
    if (!e[a(1341)] || e[a(1341)][a(1027)] == 0) return;
    const n = Re[a(2142)](([o]) => {
      var c = a;
      return ar(o, e[c(2122)]);
    }) || r;
    if (n) try {
      const o = n[1][a(2293)](e);
      o && (t[e.id] = o[a(1341)].map((c) => c[a(1551)]));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function Qt(i, x) {
  var a, n, o;
  var t = s;
  if (!i) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const r = i.nodes[t(802)]((c) => {
    var u = t;
    if (c[u(1148)] != 0) return;
    const f = hx(c);
    if (!f || f[u(410)](".") || !c.widgets || c[u(1341)][u(1027)] == 0) return;
    let d = Re[u(2142)](([m]) => ar(m, c.type));
    if (d) try {
      const m = d[1][u(2293)](c);
      if (m) return m.id = c.id, m.uiWeightSum = m[u(1341)][u(473)]((y, w) => y + (w[u(949)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: f, uiWeightSum: 12, widgets: [{ outputType: "error", value: Gt(u(611), d[0]) + (m[u(1912)] || m || ""), name: "", options: {} }] };
    }
    if (!f[u(410)]("#")) return null;
    let l = c[u(1341)];
    const v = Re[u(2142)](([m]) => {
      var y = u;
      return m == y(2136);
    });
    if (v) {
      const m = v[1].formatter(c);
      if (m) return Object[u(2390)](m, { uiWeightSum: m.widgets[u(473)]((y, w) => y + (w[u(949)] || 12), 0) });
    }
    const h = { id: c.id, title: f, widgets: l[u(802)]((m) => ({ name: m[u(2082)] || m[u(1483)], outputType: m[u(2122)] || u(1278), value: m[u(1551)], options: m[u(1582)] })) };
    return Object[u(2390)](h, { uiWeightSum: h.widgets[u(473)]((m, y) => m + (y.uiWeight || 12), 0) });
  })[t(2674)](Boolean)[t(2601)]((c, u) => {
    var f = t;
    let d = hx(c), l = hx(u);
    return d = d[f(410)]("#") ? d[f(771)](1)[f(2235)]() : d[f(2235)](), l = l.startsWith("#") ? l[f(771)](1)[f(2235)]() : l.trim(), d.localeCompare(l);
  }), e = ((n = (a = i[t(530)][t(2142)]((c) => c[t(2122)] == t(811) && c[t(1006)][t(2096)](/SD-?PPP/i))) == null ? void 0 : a[t(1341)][0]) == null ? void 0 : n[t(1551)]) || "";
  return { widgetablePath: ((o = x[t(2435)][t(1189)]) == null ? void 0 : o[t(1576)]) || x[t(2610)], widgetableID: x[t(2435)].id, nodes: r[t(473)]((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: r[t(802)]((c) => c.id), options: {} };
}
function ar(i, x) {
  var t = s;
  const r = i[t(1024)](/[.+^${}()|[\]\\]/g, t(1556))[t(1024)](/\*/g, ".*")[t(1024)](/\?/g, ".");
  return new RegExp("^" + r + "$")[t(1063)](x);
}
function hx(i, x = "") {
  var e;
  var t = s;
  let r = x || i[t(1006)] || "";
  return i[t(415)] && (r[t(410)]("#") || r[t(410)](".")) ? i.setProperty(t(450), r) : r = ((e = i[t(2423)]) == null ? void 0 : e.sdppp_widgetable_title) || r, r;
}
_e[s(1397)] = hx;
var dx = { exports: {} }, Wx, Qr;
function Fo() {
  if (Qr) return Wx;
  Qr = 1;
  var i = 1e3, x = i * 60, t = x * 60, r = t * 24, e = r * 7, a = r * 365.25;
  Wx = function(f, d) {
    var l = K;
    d = d || {};
    var v = typeof f;
    if (v === l(1278) && f[l(1027)] > 0) return n(f);
    if (v === l(2479) && isFinite(f)) return d[l(1061)] ? c(f) : o(f);
    throw new Error(l(2207) + JSON.stringify(f));
  };
  function n(f) {
    var d = K;
    if (f = String(f), !(f[d(1027)] > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[d(413)](f);
      if (l) {
        var v = parseFloat(l[1]), h = (l[2] || "ms")[d(955)]();
        switch (h) {
          case d(2306):
          case d(2063):
          case "yrs":
          case "yr":
          case "y":
            return v * a;
          case d(941):
          case "week":
          case "w":
            return v * e;
          case d(2290):
          case "day":
          case "d":
            return v * r;
          case d(1493):
          case d(2318):
          case d(1183):
          case "hr":
          case "h":
            return v * t;
          case "minutes":
          case d(1939):
          case d(2437):
          case "min":
          case "m":
            return v * x;
          case "seconds":
          case d(1943):
          case "secs":
          case "sec":
          case "s":
            return v * i;
          case d(1786):
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return v;
          default:
            return;
        }
      }
    }
  }
  function o(f) {
    var d = K, l = Math[d(555)](f);
    return l >= r ? Math[d(1572)](f / r) + "d" : l >= t ? Math[d(1572)](f / t) + "h" : l >= x ? Math[d(1572)](f / x) + "m" : l >= i ? Math.round(f / i) + "s" : f + "ms";
  }
  function c(f) {
    var d = K, l = Math[d(555)](f);
    return l >= r ? u(f, l, r, d(2439)) : l >= t ? u(f, l, t, "hour") : l >= x ? u(f, l, x, "minute") : l >= i ? u(f, l, i, "second") : f + d(2057);
  }
  function u(f, d, l, v) {
    var h = K, m = d >= l * 1.5;
    return Math[h(1572)](f / l) + " " + v + (m ? "s" : "");
  }
  return Wx;
}
var Zx, Xr;
function No() {
  if (Xr) return Zx;
  Xr = 1;
  function i(x) {
    var t = K;
    e[t(377)] = e, e[t(1479)] = e, e.coerce = f, e.disable = c, e[t(2389)] = n, e.enabled = u, e[t(964)] = Fo(), e[t(544)] = d, Object[t(2559)](x).forEach((l) => {
      e[l] = x[l];
    }), e[t(1869)] = [], e.skips = [], e.formatters = {};
    function r(l) {
      var v = t;
      let h = 0;
      for (let m = 0; m < l[v(1027)]; m++)
        h = (h << 5) - h + l[v(1706)](m), h |= 0;
      return e.colors[Math[v(555)](h) % e[v(2588)][v(1027)]];
    }
    e[t(648)] = r;
    function e(l) {
      var v = t;
      let h, m = null, y, w;
      function k(...F) {
        var T = K;
        if (!k[T(2100)]) return;
        const R = k, P = Number(/* @__PURE__ */ new Date()), C = P - (h || P);
        R.diff = C, R.prev = h, R[T(2375)] = P, h = P, F[0] = e[T(498)](F[0]), typeof F[0] != "string" && F.unshift("%O");
        let O = 0;
        F[0] = F[0][T(1024)](/%([a-zA-Z%])/g, (M, N) => {
          var q = T;
          if (M === "%%") return "%";
          O++;
          const $ = e.formatters[N];
          if (typeof $ === q(2138)) {
            const U = F[O];
            M = $.call(R, U), F[q(1849)](O, 1), O--;
          }
          return M;
        }), e[T(625)].call(R, F), (R[T(1448)] || e[T(1448)])[T(1969)](R, F);
      }
      return k.namespace = l, k[v(1177)] = e.useColors(), k[v(2373)] = e[v(648)](l), k[v(2094)] = a, k[v(544)] = e[v(544)], Object.defineProperty(k, "enabled", { enumerable: !0, configurable: !1, get: () => {
        var F = v;
        return m !== null ? m : (y !== e[F(2020)] && (y = e[F(2020)], w = e.enabled(l)), w);
      }, set: (F) => {
        m = F;
      } }), typeof e[v(2049)] === v(2138) && e[v(2049)](k), k;
    }
    function a(l, v) {
      var h = t;
      const m = e(this.namespace + (typeof v === h(1584) ? ":" : v) + l);
      return m[h(1448)] = this[h(1448)], m;
    }
    function n(l) {
      var v = t;
      e[v(2119)](l), e[v(2020)] = l, e.names = [], e.skips = [];
      const h = (typeof l === v(1278) ? l : "").trim().replace(/\s+/g, ",").split(",")[v(2674)](Boolean);
      for (const m of h)
        m[0] === "-" ? e[v(1552)][v(1020)](m[v(771)](1)) : e[v(1869)][v(1020)](m);
    }
    function o(l, v) {
      var h = t;
      let m = 0, y = 0, w = -1, k = 0;
      for (; m < l.length; )
        if (y < v[h(1027)] && (v[y] === l[m] || v[y] === "*")) v[y] === "*" ? (w = y, k = m, y++) : (m++, y++);
        else if (w !== -1) y = w + 1, k++, m = k;
        else return !1;
      for (; y < v[h(1027)] && v[y] === "*"; )
        y++;
      return y === v[h(1027)];
    }
    function c() {
      var l = t;
      const v = [...e[l(1869)], ...e.skips.map((h) => "-" + h)][l(1372)](",");
      return e[l(2389)](""), v;
    }
    function u(l) {
      var v = t;
      for (const h of e[v(1552)])
        if (o(l, h)) return !1;
      for (const h of e[v(1869)])
        if (o(l, h)) return !0;
      return !1;
    }
    function f(l) {
      var v = t;
      return l instanceof Error ? l[v(2446)] || l.message : l;
    }
    function d() {
      var l = t;
      console[l(2279)](l(1845));
    }
    return e[t(2389)](e[t(1182)]()), e;
  }
  return Zx = i, Zx;
}
var Yr;
function qo() {
  var i = s;
  return Yr || (Yr = 1, function(x, t) {
    var r = i;
    t[r(625)] = a, t.save = n, t[r(1182)] = o, t[r(1177)] = e, t[r(2422)] = c(), t[r(544)] = /* @__PURE__ */ (() => {
      let f = !1;
      return () => {
        var d = K;
        !f && (f = !0, console[d(2279)](d(1845)));
      };
    })(), t[r(2588)] = [r(1133), r(748), r(863), r(2146), "#0066CC", "#0066FF", r(468), r(1221), "#00CC00", "#00CC33", r(2242), r(1295), r(2485), r(594), "#3300CC", r(1386), r(1564), r(1013), r(497), r(920), r(1674), r(1319), r(2416), r(970), "#33CC66", r(1769), r(2336), "#33CCFF", r(508), "#6600FF", r(878), r(2324), r(1810), r(2727), r(1741), r(2144), r(2246), r(1377), r(861), r(1452), r(1820), "#CC0033", r(1322), r(1905), "#CC00CC", r(2395), "#CC3300", r(1509), r(2189), "#CC3399", r(1649), r(1296), r(799), "#CC6633", r(2198), r(2648), r(2675), r(752), r(1184), r(2619), r(2566), r(2107), r(1664), "#FF00FF", r(2270), r(1549), r(2358), "#FF3399", "#FF33CC", r(2265), r(1036), r(812), r(2406), r(2563), "#FFCC00", r(1269)];
    function e() {
      var f = r;
      if (typeof window !== f(1584) && window[f(575)] && (window.process[f(2122)] === "renderer" || window[f(575)].__nwjs)) return !0;
      if (typeof navigator !== f(1584) && navigator.userAgent && navigator[f(2404)][f(955)]()[f(2096)](/(edge|trident)\/(\d+)/)) return !1;
      let d;
      return typeof document !== f(1584) && document[f(1130)] && document[f(1130)][f(2295)] && document.documentElement[f(2295)][f(2409)] || typeof window < "u" && window.console && (window[f(476)].firebug || window[f(476)][f(1119)] && window[f(476)][f(2335)]) || typeof navigator !== f(1584) && navigator[f(2404)] && (d = navigator[f(2404)][f(955)]().match(/firefox\/(\d+)/)) && parseInt(d[1], 10) >= 31 || typeof navigator !== f(1584) && navigator.userAgent && navigator.userAgent[f(955)]().match(/applewebkit\/(\d+)/);
    }
    function a(f) {
      var d = r;
      if (f[0] = (this.useColors ? "%c" : "") + this[d(1545)] + (this.useColors ? d(2115) : " ") + f[0] + (this.useColors ? d(1968) : " ") + "+" + x[d(545)][d(964)](this[d(536)]), !this.useColors) return;
      const l = d(562) + this[d(2373)];
      f.splice(1, 0, l, d(560));
      let v = 0, h = 0;
      f[0][d(1024)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (v++, m === "%c" && (h = v));
      }), f.splice(h, 0, l);
    }
    t.log = console[r(377)] || console[r(1448)] || (() => {
    });
    function n(f) {
      var d = r;
      try {
        f ? t[d(2422)].setItem(d(377), f) : t[d(2422)][d(2260)](d(377));
      } catch {
      }
    }
    function o() {
      var f = r;
      let d;
      try {
        d = t[f(2422)][f(2745)](f(377)) || t[f(2422)][f(2745)](f(2755));
      } catch {
      }
      return !d && typeof process !== f(1584) && "env" in process && (d = process[f(445)].DEBUG), d;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x[r(545)] = No()(t);
    const { formatters: u } = x.exports;
    u.j = function(f) {
      var d = r;
      try {
        return JSON[d(2351)](f);
      } catch (l) {
        return "[UnexpectedJSONParseError]: " + l[d(1912)];
      }
    };
  }(dx, dx.exports)), dx[i(545)];
}
var To = qo();
const Gs = Zs(To);
Gs[s(2389)]("*");
function Ao(i, x) {
  var t = s;
  const r = Gs(i), e = (a, n) => async function(...o) {
    try {
      await x({ level: a, messages: o });
    } catch {
    }
  };
  return r.log = e(t(1448)), r;
}
const qx = Ao(s(2281), async ({ level: i, messages: x }) => {
  var t = s;
  const { mcpMesh: r } = await Promise.resolve()[t(2397)](() => zc);
  await r[t(1078)](t(1985))[t(2225)][t(1448)]({ level: i, messages: x });
}), Xt = qx[s(2094)](s(1157)), _r = /* @__PURE__ */ new Set();
R0[s(1798)](s(2575), async (i) => {
  var x = s;
  return i[x(1215)].forEach(({ nodeID: t, widgetIndex: r, value: e }) => {
    var a = x;
    const n = T0[a(2738)][a(530)][a(2142)]((o) => o.id == t);
    !n || e == n[a(1341)][r][a(1551)] || Co(n, r, e);
  }), { success: !0 };
}), R0[s(1798)](s(2154), async (i) => {
  var x = s;
  const { workflow_path: t } = i, r = !_r[x(1263)](t), e = i[x(1548)] || r;
  _r[x(1988)](t);
  const a = T0[x(782)][x(1076)] || T0[x(1484)], n = a.workflows.find((c) => c[x(2515)] === t || c[x(2610)] === t || c[x(2610)] === "workflows/" + t);
  if (!e) {
    const c = await Oo(a, n);
    if (Xt(x(471) + c), c) await Bx(a, n);
    else try {
      await o(a, n);
    } catch {
      await Bx(a, n);
    }
    return { success: !0 };
  }
  return await Bx(a, n), { success: !0 };
  async function o(c, u) {
    var f = x;
    Xt(f(1579) + u[f(2610)], u[f(1832)]), T0[f(1484)] == c ? await u.load() : (await c.openWorkflow(u), await T0[f(2428)](JSON[f(2673)](JSON[f(2351)](u[f(1832)])), !0, !0, u, {}));
  }
}), R0[s(1798)](s(2363), async function(i) {
  var x = s;
  let { workflow_content: t, workflow_path: r } = i;
  return t[x(1189)] = { ...t.extra || {}, sdppp_workflow_alias: r }, await T0[x(2428)](t), { success: !0 };
}), R0.implementAction(s(2278), async (i) => {
  var a;
  var x = s;
  const t = T0[x(1484)] || T0[x(782)][x(1076)];
  (a = t.syncWorkflows) == null || a.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t[x(1540)][x(802)]((n) => n[x(2610)][x(1024)](x(732), ""));
  try {
    const n = new Headers(), o = localStorage[x(2745)](x(2190));
    o && n[x(2151)](x(1979), o);
    const c = await fetch(x(1772), { headers: n });
    let u = [];
    c.ok && (u = (await c.json())[x(2579)][x(802)]((d) => d[x(1024)](x(732), ""))), e[x(2601)]((f, d) => {
      var l = x;
      const v = u.includes(f), h = u[l(539)](d);
      return v && !h ? -1 : !v && h ? 1 : f[l(2403)](d);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), R0[s(1798)]("saveWorkflow", async (i) => {
  var n;
  var x = s;
  const { workflow_path: t, from_sid: r } = i, e = T0[x(1484)] || T0[x(782)][x(1076)], a = e[x(1540)].find((o) => o[x(2515)] === t || o[x(2610)] === t || o[x(2610)] === x(732) + t);
  if (!a) throw new Error(x(1353));
  return ((n = e[x(911)]) == null ? void 0 : n.id) != a.id && await T0[x(2154)](t, r, !1), a[x(1097)][x(1865)](), await e[x(1964)](a), { success: !0 };
});
async function Oo(i, x) {
  var e, a, n;
  var t = s;
  if (!x || !(((e = i[t(911)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((a = x[t(1097)]) != null && a[t(1865)]) try {
    x[t(1097)][t(1865)]();
  } catch (o) {
    console.warn(t(1299), o);
  }
  try {
    const o = (n = T0.graph) == null ? void 0 : n.serialize(), c = x[t(2435)];
    if (!o || !c) return !1;
    const u = JSON[t(2351)](o), f = JSON[t(2351)](c);
    return u !== f;
  } catch (o) {
    return console[t(2279)](t(803), o), !1;
  }
}
async function Bx(i, x) {
  var e;
  var t = s;
  Xt(t(2200) + x[t(2610)]);
  async function r(a, n) {
    var o = t;
    T0.workflowManager == a ? await n[o(1182)]() : (await a[o(2154)](n), await T0[o(2428)](JSON[o(2673)](JSON[o(2351)](n[o(2435)])), !0, !0, n, {}));
  }
  if ((x[t(1281)] || (e = i[t(1281)]) != null && e.call(i, x)) && i.openWorkflows[t(1027)] === 1) {
    const a = i[t(813)]();
    i.openWorkflow(a);
  } else await r(i, i[t(2427)][0] == x ? i[t(2427)][1] : i[t(2427)][0]);
  await i.closeWorkflow(x, !1), await new Promise((a) => requestAnimationFrame(a)), await r(i, x);
}
const Xe = qx[s(2094)](s(596)), Ne = /* @__PURE__ */ new Map();
function Do(i, x) {
  var t = s;
  const r = Ne.get(i);
  Xe("resolveRunImages", i, x, r, Ne), r && r[t(1891)](x);
}
R0[s(1798)](s(942), async function* (i) {
  var x = s;
  let t = !1, r = [];
  function e() {
    var l = K;
    if (t) return;
    const v = Ae[l(2367)];
    Ae[l(2367)] = async (...h) => {
      var m = l;
      try {
        const y = await v.call(Ae, ...h);
        return r[m(1020)]({ error: null, result: y, prompt_id: y[m(1060)] }), y;
      } catch (y) {
        throw r[m(1020)]({ error: y, result: null, prompt_id: "" }), y;
      }
    }, t = !0;
  }
  t || e();
  const a = i[x(1288)];
  let n = !1, o = {}, c = [];
  R0[x(2577)].setState({ lastError: "", widgetableErrors: {} });
  try {
    r = [], await T0.queuePrompt(1, a), r[x(1455)]((l) => {
      var h, m;
      var v = x;
      if (l[v(2463)]) n = !0, o = l.error.response ? d(l[v(2463)].response[v(2604)]) : {}, Object.assign(o, { "-1": ((m = (h = l.error.response) == null ? void 0 : h[v(2463)]) == null ? void 0 : m[v(1912)]) || l.error.message });
      else {
        const y = l[v(1801)][v(1060)];
        c.push(y);
        let w, k;
        const F = new Promise((R, P) => {
          w = R, k = P;
        }), T = { promise: F, resolveImage: w, rejectImage: k };
        Ne[v(2151)](y, T);
      }
    });
  } catch (l) {
    Xe(x(2489), l.stack), n = !0, o = { "-1": l[x(1912)] || l[x(1339)]() };
  }
  Xe(x(2093), n, o, x(2529), c), n && R0[x(2577)].setState({ widgetableErrors: o });
  let u = [];
  const f = /* @__PURE__ */ new Map();
  for (const l of c) {
    const v = Ne[x(2558)](l);
    v && f[x(2151)](l, v[x(366)]);
  }
  for (Xe(x(546)); f[x(1288)] > 0; ) {
    const l = Array.from(f[x(1430)]()), v = l[x(802)](([y, w]) => w[x(2397)]((k) => ({ prompt_id: y, images: k }))), { prompt_id: h, images: m } = await Promise.race(v);
    Xe("resolved promise for", h), u[x(1020)](...m), f.delete(h), Ne.delete(h), yield { success: !0, prompt_ids: [h], images: m };
  }
  function d(l) {
    var v = x;
    const h = {};
    return Object[v(2559)](l)[v(1455)]((m) => {
      var y = v;
      const w = m[y(2432)](":")[0], k = T0[y(2738)][y(530)].find((F) => F.id == w);
      h[w] = "[" + ((k == null ? void 0 : k[y(1006)]) || w) + "]" + l[m][y(2400)].map(JSON.stringify).join(`
`);
    }), h;
  }
}), R0.implementAction("stopAll", async () => {
  var i = s;
  await T0.api[i(906)]("queue"), await T0[i(1520)][i(1214)]();
  const x = Array[i(429)](Ne.values());
  Ne[i(2592)]();
  for (const t of x)
    try {
      t[i(753)](new Error(i(661)));
    } catch {
    }
  return { success: !0 };
}), R0[s(1798)]("setNodeTitle", async (i) => {
  var x = s;
  const { node_id: t, title: r } = i, e = T0[x(2738)].nodes[x(2142)]((a) => a.id == t);
  if (!e) throw new Error("Node not found");
  return e[x(1006)] = r, e[x(415)](x(450), r), { success: !0 };
}), R0[s(1798)]("reboot", async () => {
  var i = s;
  const x = await fetch(i(1654));
  return x[i(975)] == 404 ? { error: Gt(i(2513)), success: !1 } : x[i(975)] == 200 ? { success: !0 } : { error: Gt(i(2170)) + x[i(1007)], success: !1 };
}), R0[s(1798)](s(798), async (i) => {
  var x = s;
  const { api_key: t } = i;
  return localStorage.setItem(x(1004), t), location[x(1527)](), { success: !0 };
}), R0[s(1798)](s(2523), async () => {
  var i = s;
  return document.querySelector(i(2436)).parentElement[i(438)](), { success: !0 };
});
const Qs = "2025-06-18", jo = [Qs, s(807), s(736), s(2414)], Tx = s(884), Xs = J0([S(), r0()[s(2634)]()]), Ys = S(), Mo = E({ progressToken: Z(Xs) }).passthrough(), ae = E({ _meta: Z(Mo) })[s(1369)](), xe = E({ method: S(), params: Z(ae) }), nx = E({ _meta: Z(E({}).passthrough()) }).passthrough(), ve = E({ method: S(), params: Z(nx) }), se = E({ _meta: Z(E({}).passthrough()) })[s(1369)](), Ax = J0([S(), r0()[s(2634)]()]), _s = E({ jsonrpc: t0(Tx), id: Ax }).merge(xe)[s(489)](), Lo = (i) => _s[s(792)](i)[s(2220)], en = E({ jsonrpc: t0(Tx) }).merge(ve)[s(489)](), $o = (i) => en[s(792)](i)[s(2220)], xn = E({ jsonrpc: t0(Tx), id: Ax, result: se })[s(489)](), ea = (i) => xn[s(792)](i)[s(2220)];
var be;
(function(i) {
  var x = s;
  i[i.ConnectionClosed = -32e3] = "ConnectionClosed", i[i.RequestTimeout = -32001] = x(574), i[i[x(2291)] = -32700] = x(2291), i[i.InvalidRequest = -32600] = x(2535), i[i[x(1234)] = -32601] = x(1234), i[i[x(2156)] = -32602] = "InvalidParams", i[i.InternalError = -32603] = x(2029);
})(be || (be = {}));
const tn = E({ jsonrpc: t0(Tx), id: Ax, error: E({ code: r0()[s(2634)](), message: S(), data: Z(sx()) }) })[s(489)](), zo = (i) => tn[s(792)](i).success;
J0([_s, en, xn, tn]);
const Yt = se[s(489)](), _t = ve[s(2094)]({ method: t0("notifications/cancelled"), params: nx[s(2094)]({ requestId: Ax, reason: S()[s(1823)]() }) }), ix = E({ name: S(), title: Z(S()) }).passthrough(), rn = ix.extend({ version: S() }), Ho = E({ experimental: Z(E({})[s(1369)]()), sampling: Z(E({}).passthrough()), elicitation: Z(E({})[s(1369)]()), roots: Z(E({ listChanged: Z(e0()) })[s(1369)]()) }).passthrough(), an = xe[s(2094)]({ method: t0(s(1423)), params: ae[s(2094)]({ protocolVersion: S(), capabilities: Ho, clientInfo: rn }) }), Uo = E({ experimental: Z(E({})[s(1369)]()), logging: Z(E({})[s(1369)]()), completions: Z(E({})[s(1369)]()), prompts: Z(E({ listChanged: Z(e0()) })[s(1369)]()), resources: Z(E({ subscribe: Z(e0()), listChanged: Z(e0()) })[s(1369)]()), tools: Z(E({ listChanged: Z(e0()) })[s(1369)]()) }).passthrough(), Vo = se[s(2094)]({ protocolVersion: S(), capabilities: Uo, serverInfo: rn, instructions: Z(S()) }), sn = ve[s(2094)]({ method: t0(s(1043)) }), er = xe[s(2094)]({ method: t0(s(1345)) }), Wo = E({ progress: r0(), total: Z(r0()), message: Z(S()) })[s(1369)](), xr = ve[s(2094)]({ method: t0("notifications/progress"), params: nx[s(2501)](Wo).extend({ progressToken: Xs }) }), Ox = xe[s(2094)]({ params: ae.extend({ cursor: Z(Ys) })[s(1823)]() }), Dx = se[s(2094)]({ nextCursor: Z(Ys) }), nn = E({ uri: S(), mimeType: Z(S()), _meta: Z(E({})[s(1369)]()) }).passthrough(), on = nn[s(2094)]({ text: S() }), cn = nn[s(2094)]({ blob: S()[s(2633)]() }), un = ix[s(2094)]({ uri: S(), description: Z(S()), mimeType: Z(S()), _meta: Z(E({})[s(1369)]()) }), Zo = ix[s(2094)]({ uriTemplate: S(), description: Z(S()), mimeType: Z(S()), _meta: Z(E({}).passthrough()) }), Bo = Ox.extend({ method: t0("resources/list") }), Ko = Dx[s(2094)]({ resources: P0(un) }), Jo = Ox.extend({ method: t0(s(559)) }), Go = Dx[s(2094)]({ resourceTemplates: P0(Zo) }), Qo = xe.extend({ method: t0("resources/read"), params: ae[s(2094)]({ uri: S() }) }), Xo = se[s(2094)]({ contents: P0(J0([on, cn])) }), Yo = ve[s(2094)]({ method: t0(s(795)) }), _o = xe[s(2094)]({ method: t0("resources/subscribe"), params: ae[s(2094)]({ uri: S() }) }), e2 = xe[s(2094)]({ method: t0(s(2222)), params: ae.extend({ uri: S() }) }), x2 = ve[s(2094)]({ method: t0(s(2108)), params: nx[s(2094)]({ uri: S() }) }), t2 = E({ name: S(), description: Z(S()), required: Z(e0()) })[s(1369)](), r2 = ix.extend({ description: Z(S()), arguments: Z(P0(t2)), _meta: Z(E({}).passthrough()) }), a2 = Ox[s(2094)]({ method: t0(s(553)) }), s2 = Dx[s(2094)]({ prompts: P0(r2) }), n2 = xe[s(2094)]({ method: t0(s(1717)), params: ae[s(2094)]({ name: S(), arguments: Z(H0(S())) }) }), sr = E({ type: t0(s(1285)), text: S(), _meta: Z(E({})[s(1369)]()) })[s(1369)](), nr = E({ type: t0(s(1944)), data: S()[s(2633)](), mimeType: S(), _meta: Z(E({})[s(1369)]()) })[s(1369)](), ir = E({ type: t0(s(466)), data: S()[s(2633)](), mimeType: S(), _meta: Z(E({})[s(1369)]()) })[s(1369)](), i2 = E({ type: t0(s(1627)), resource: J0([on, cn]), _meta: Z(E({}).passthrough()) }).passthrough(), o2 = un[s(2094)]({ type: t0(s(1725)) }), fn = J0([sr, nr, ir, o2, i2]), c2 = E({ role: C0([s(723), s(2041)]), content: fn })[s(1369)](), u2 = se[s(2094)]({ description: Z(S()), messages: P0(c2) }), f2 = ve[s(2094)]({ method: t0(s(1669)) }), d2 = E({ title: Z(S()), readOnlyHint: Z(e0()), destructiveHint: Z(e0()), idempotentHint: Z(e0()), openWorldHint: Z(e0()) })[s(1369)](), l2 = ix[s(2094)]({ description: Z(S()), inputSchema: E({ type: t0("object"), properties: Z(E({})[s(1369)]()), required: Z(P0(S())) })[s(1369)](), outputSchema: Z(E({ type: t0(s(644)), properties: Z(E({})[s(1369)]()), required: Z(P0(S())) }).passthrough()), annotations: Z(d2), _meta: Z(E({})[s(1369)]()) }), h2 = Ox[s(2094)]({ method: t0(s(2355)) }), p2 = Dx[s(2094)]({ tools: P0(l2) }), dn = se[s(2094)]({ content: P0(fn)[s(1479)]([]), structuredContent: E({})[s(1369)]()[s(1823)](), isError: Z(e0()) });
dn.or(se.extend({ toolResult: sx() }));
const m2 = xe[s(2094)]({ method: t0(s(1755)), params: ae[s(2094)]({ name: S(), arguments: Z(H0(sx())) }) }), v2 = ve.extend({ method: t0(s(881)) }), ln = C0([s(377), s(937), s(2126), "warning", s(2463), s(1714), "alert", s(2670)]), g2 = xe[s(2094)]({ method: t0("logging/setLevel"), params: ae.extend({ level: ln }) }), y2 = ve[s(2094)]({ method: t0(s(2518)), params: nx[s(2094)]({ level: ln, logger: Z(S()), data: sx() }) }), b2 = E({ name: S().optional() })[s(1369)](), w2 = E({ hints: Z(P0(b2)), costPriority: Z(r0()[s(1614)](0)[s(1743)](1)), speedPriority: Z(r0()[s(1614)](0)[s(1743)](1)), intelligencePriority: Z(r0()[s(1614)](0).max(1)) })[s(1369)](), S2 = E({ role: C0([s(723), "assistant"]), content: J0([sr, nr, ir]) })[s(1369)](), k2 = xe[s(2094)]({ method: t0(s(1590)), params: ae[s(2094)]({ messages: P0(S2), systemPrompt: Z(S()), includeContext: Z(C0([s(1797), s(667), s(2282)])), temperature: Z(r0()), maxTokens: r0()[s(2634)](), stopSequences: Z(P0(S())), metadata: Z(E({})[s(1369)]()), modelPreferences: Z(w2) }) }), hn = se[s(2094)]({ model: S(), stopReason: Z(C0([s(680), s(398), s(1718)]).or(S())), role: C0([s(723), s(2041)]), content: Vs("type", [sr, nr, ir]) }), E2 = E({ type: t0(s(2665)), title: Z(S()), description: Z(S()), default: Z(e0()) })[s(1369)](), P2 = E({ type: t0("string"), title: Z(S()), description: Z(S()), minLength: Z(r0()), maxLength: Z(r0()), format: Z(C0([s(1094), "uri", "date", s(1005)])) }).passthrough(), I2 = E({ type: C0([s(2479), s(1155)]), title: Z(S()), description: Z(S()), minimum: Z(r0()), maximum: Z(r0()) }).passthrough(), R2 = E({ type: t0(s(1278)), title: Z(S()), description: Z(S()), enum: P0(S()), enumNames: Z(P0(S())) })[s(1369)](), C2 = J0([E2, P2, I2, R2]), F2 = xe[s(2094)]({ method: t0(s(1620)), params: ae[s(2094)]({ message: S(), requestedSchema: E({ type: t0(s(644)), properties: H0(S(), C2), required: Z(P0(S())) })[s(1369)]() }) }), pn = se[s(2094)]({ action: C0(["accept", "decline", s(2643)]), content: Z(H0(S(), sx())) }), N2 = E({ type: t0("ref/resource"), uri: S() })[s(1369)](), q2 = E({ type: t0(s(2192)), name: S() })[s(1369)](), T2 = xe.extend({ method: t0(s(1528)), params: ae[s(2094)]({ ref: J0([q2, N2]), argument: E({ name: S(), value: S() }).passthrough(), context: Z(E({ arguments: Z(H0(S(), S())) })) }) }), A2 = se.extend({ completion: E({ values: P0(S())[s(1743)](100), total: Z(r0()[s(2634)]()), hasMore: Z(e0()) })[s(1369)]() }), O2 = E({ uri: S()[s(410)](s(442)), name: Z(S()), _meta: Z(E({})[s(1369)]()) })[s(1369)](), D2 = xe[s(2094)]({ method: t0("roots/list") }), mn = se[s(2094)]({ roots: P0(O2) }), j2 = ve[s(2094)]({ method: t0("notifications/roots/list_changed") });
J0([er, an, T2, g2, n2, a2, Bo, Jo, Qo, _o, e2, m2, h2]), J0([_t, xr, sn, j2]), J0([Yt, hn, pn, mn]), J0([er, k2, F2, D2]), J0([_t, xr, y2, x2, Yo, v2, f2]), J0([Yt, Vo, A2, u2, s2, Ko, Go, Xo, dn, p2]);
class Te extends Error {
  constructor(x, t, r) {
    var e = s;
    super(e(1599) + x + ": " + t), this[e(1749)] = x, this[e(984)] = r, this[e(1483)] = "McpError";
  }
}
const M2 = 6e4;
class L2 {
  constructor(x) {
    var t = s;
    this._options = x, this[t(1994)] = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this[t(2458)] = /* @__PURE__ */ new Map(), this[t(2594)] = /* @__PURE__ */ new Map(), this[t(2193)] = /* @__PURE__ */ new Map(), this[t(2147)] = /* @__PURE__ */ new Map(), this[t(406)] = /* @__PURE__ */ new Map(), this[t(809)] = /* @__PURE__ */ new Set(), this.setNotificationHandler(_t, (r) => {
      var e = t;
      const a = this._requestHandlerAbortControllers.get(r[e(1534)].requestId);
      a == null || a[e(1747)](r[e(1534)][e(2137)]);
    }), this[t(934)](xr, (r) => {
      var e = t;
      this[e(2753)](r);
    }), this[t(1311)](er, (r) => ({}));
  }
  [s(2175)](x, t, r, e, a = !1) {
    var n = s;
    this._timeoutInfo.set(x, { timeoutId: setTimeout(e, t), startTime: Date[n(1268)](), timeout: t, maxTotalTimeout: r, resetTimeoutOnProgress: a, onTimeout: e });
  }
  [s(1855)](x) {
    var t = s;
    const r = this[t(406)][t(2558)](x);
    if (!r) return !1;
    const e = Date.now() - r.startTime;
    if (r.maxTotalTimeout && e >= r.maxTotalTimeout)
      throw this[t(406)][t(2394)](x), new Te(be.RequestTimeout, t(1917), { maxTotalTimeout: r[t(669)], totalElapsed: e });
    return clearTimeout(r[t(1827)]), r.timeoutId = setTimeout(r[t(357)], r[t(952)]), !0;
  }
  [s(759)](x) {
    var t = s;
    const r = this[t(406)][t(2558)](x);
    r && (clearTimeout(r[t(1827)]), this[t(406)][t(2394)](x));
  }
  async connect(x) {
    var t = s, r, e, a;
    this[t(880)] = x;
    const n = (r = this[t(779)]) === null || r === void 0 ? void 0 : r[t(1773)];
    this[t(880)][t(1773)] = () => {
      var u = t;
      n == null || n(), this[u(1439)]();
    };
    const o = (e = this[t(779)]) === null || e === void 0 ? void 0 : e[t(1604)];
    this[t(880)][t(1604)] = (u) => {
      o == null || o(u), this._onerror(u);
    };
    const c = (a = this[t(880)]) === null || a === void 0 ? void 0 : a[t(1835)];
    this[t(880)][t(1835)] = (u, f) => {
      var d = t;
      c == null || c(u, f), ea(u) || zo(u) ? this[d(938)](u) : Lo(u) ? this[d(762)](u, f) : $o(u) ? this[d(434)](u) : this[d(2018)](new Error(d(443) + JSON[d(2351)](u)));
    }, await this[t(880)].start();
  }
  [s(1439)]() {
    var x = s, t;
    const r = this[x(2193)];
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers[x(2592)](), this[x(809)][x(2592)](), this[x(880)] = void 0, (t = this[x(1773)]) === null || t === void 0 || t.call(this);
    const e = new Te(be[x(2661)], "Connection closed");
    for (const a of r[x(1215)]())
      a(e);
  }
  [s(2018)](x) {
    var t = s, r;
    (r = this[t(1604)]) === null || r === void 0 || r[t(1580)](this, x);
  }
  _onnotification(x) {
    var t = s, r;
    const e = (r = this[t(2594)][t(2558)](x[t(1109)])) !== null && r !== void 0 ? r : this[t(2392)];
    e !== void 0 && Promise[t(639)]()[t(2397)](() => e(x))[t(1615)]((a) => this[t(2018)](new Error(t(2638) + a)));
  }
  _onrequest(x, t) {
    var r = s, e, a, n, o;
    const c = (e = this._requestHandlers.get(x.method)) !== null && e !== void 0 ? e : this[r(2506)];
    if (c === void 0) {
      (a = this[r(880)]) === null || a === void 0 || a[r(2470)]({ jsonrpc: r(884), id: x.id, error: { code: be[r(1234)], message: r(1859) } })[r(1615)]((d) => this[r(2018)](new Error(r(2467) + d)));
      return;
    }
    const u = new AbortController();
    this[r(2458)][r(2151)](x.id, u);
    const f = { signal: u.signal, sessionId: (n = this._transport) === null || n === void 0 ? void 0 : n.sessionId, _meta: (o = x[r(1534)]) === null || o === void 0 ? void 0 : o._meta, sendNotification: (d) => this[r(890)](d, { relatedRequestId: x.id }), sendRequest: (d, l, v) => this[r(1637)](d, l, { ...v, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t[r(846)], requestId: x.id, requestInfo: t == null ? void 0 : t[r(1201)] };
    Promise[r(639)]()[r(2397)](() => c(x, f)).then((d) => {
      var l = r, v;
      if (!u[l(2337)][l(1019)])
        return (v = this[l(880)]) === null || v === void 0 ? void 0 : v.send({ result: d, jsonrpc: "2.0", id: x.id });
    }, (d) => {
      var l = r, v, h;
      if (!u[l(2337)].aborted)
        return (v = this[l(880)]) === null || v === void 0 ? void 0 : v[l(2470)]({ jsonrpc: l(884), id: x.id, error: { code: Number[l(1619)](d.code) ? d[l(1749)] : be[l(2029)], message: (h = d[l(1912)]) !== null && h !== void 0 ? h : l(488) } });
    })[r(1615)]((d) => this[r(2018)](new Error(r(391) + d)))[r(2051)](() => {
      var d = r;
      this._requestHandlerAbortControllers[d(2394)](x.id);
    });
  }
  [s(2753)](x) {
    var t = s;
    const { progressToken: r, ...e } = x.params, a = Number(r), n = this[t(2147)][t(2558)](a);
    if (!n) {
      this[t(2018)](new Error(t(2490) + JSON[t(2351)](x)));
      return;
    }
    const o = this[t(2193)][t(2558)](a), c = this[t(406)][t(2558)](a);
    if (c && o && c[t(2534)]) try {
      this[t(1855)](a);
    } catch (u) {
      o(u);
      return;
    }
    n(e);
  }
  [s(938)](x) {
    var t = s;
    const r = Number(x.id), e = this[t(2193)][t(2558)](r);
    if (e === void 0) {
      this[t(2018)](new Error("Received a response for an unknown message ID: " + JSON.stringify(x)));
      return;
    }
    if (this[t(2193)][t(2394)](r), this[t(2147)][t(2394)](r), this[t(759)](r), ea(x)) e(x);
    else {
      const a = new Te(x.error[t(1749)], x[t(2463)][t(1912)], x[t(2463)][t(984)]);
      e(a);
    }
  }
  get [s(779)]() {
    var x = s;
    return this[x(880)];
  }
  async close() {
    var x = s, t;
    await ((t = this[x(880)]) === null || t === void 0 ? void 0 : t.close());
  }
  [s(1637)](x, t, r) {
    const { relatedRequestId: e, resumptionToken: a, onresumptiontoken: n } = r ?? {};
    return new Promise((o, c) => {
      var u = K, f, d, l, v, h, m;
      if (!this[u(880)]) {
        c(new Error(u(1364)));
        return;
      }
      ((f = this[u(2554)]) === null || f === void 0 ? void 0 : f[u(352)]) === !0 && this[u(538)](x[u(1109)]), (d = r == null ? void 0 : r[u(2337)]) === null || d === void 0 || d[u(2287)]();
      const y = this[u(1994)]++, w = { ...x, jsonrpc: "2.0", id: y };
      r != null && r.onprogress && (this[u(2147)][u(2151)](y, r[u(2517)]), w[u(1534)] = { ...x[u(1534)], _meta: { ...((l = x[u(1534)]) === null || l === void 0 ? void 0 : l[u(896)]) || {}, progressToken: y } });
      const k = (R) => {
        var P = u, C;
        this[P(2193)].delete(y), this[P(2147)].delete(y), this._cleanupTimeout(y), (C = this[P(880)]) === null || C === void 0 || C[P(2470)]({ jsonrpc: P(884), method: "notifications/cancelled", params: { requestId: y, reason: String(R) } }, { relatedRequestId: e, resumptionToken: a, onresumptiontoken: n })[P(1615)]((O) => this[P(2018)](new Error(P(1156) + O))), c(R);
      };
      this[u(2193)][u(2151)](y, (R) => {
        var P = u, C;
        if (!(!((C = r == null ? void 0 : r[P(2337)]) === null || C === void 0) && C.aborted)) {
          if (R instanceof Error) return c(R);
          try {
            const O = t.parse(R[P(1801)]);
            o(O);
          } catch (O) {
            c(O);
          }
        }
      }), (v = r == null ? void 0 : r[u(2337)]) === null || v === void 0 || v.addEventListener(u(1747), () => {
        var R;
        k((R = r == null ? void 0 : r.signal) === null || R === void 0 ? void 0 : R.reason);
      });
      const F = (h = r == null ? void 0 : r[u(952)]) !== null && h !== void 0 ? h : M2, T = () => k(new Te(be.RequestTimeout, u(403), { timeout: F }));
      this[u(2175)](y, F, r == null ? void 0 : r[u(669)], T, (m = r == null ? void 0 : r[u(2534)]) !== null && m !== void 0 ? m : !1), this._transport[u(2470)](w, { relatedRequestId: e, resumptionToken: a, onresumptiontoken: n })[u(1615)]((R) => {
        var P = u;
        this[P(759)](y), c(R);
      });
    });
  }
  async [s(890)](x, t) {
    var r = s, e, a;
    if (!this[r(880)]) throw new Error(r(1364));
    if (this[r(2672)](x[r(1109)]), ((a = (e = this[r(2554)]) === null || e === void 0 ? void 0 : e.debouncedNotificationMethods) !== null && a !== void 0 ? a : [])[r(539)](x[r(1109)]) && !x[r(1534)] && !(t != null && t[r(2484)])) {
      if (this._pendingDebouncedNotifications[r(1263)](x[r(1109)])) return;
      this[r(809)][r(1988)](x[r(1109)]), Promise.resolve()[r(2397)](() => {
        var u = r, f;
        if (this[u(809)][u(2394)](x[u(1109)]), !this._transport) return;
        const d = { ...x, jsonrpc: "2.0" };
        (f = this[u(880)]) === null || f === void 0 || f.send(d, t).catch((l) => this[u(2018)](l));
      });
      return;
    }
    const c = { ...x, jsonrpc: r(884) };
    await this[r(880)][r(2470)](c, t);
  }
  [s(1311)](x, t) {
    var r = s;
    const e = x.shape[r(1109)][r(1551)];
    this[r(1771)](e), this._requestHandlers[r(2151)](e, (a, n) => {
      var o = r;
      return Promise[o(639)](t(x[o(2673)](a), n));
    });
  }
  [s(602)](x) {
    var t = s;
    this[t(1466)][t(2394)](x);
  }
  [s(592)](x) {
    var t = s;
    if (this[t(1466)][t(1263)](x)) throw new Error("A request handler for " + x + t(2333));
  }
  [s(934)](x, t) {
    var r = s;
    this[r(2594)][r(2151)](x[r(2104)].method[r(1551)], (e) => Promise[r(639)](t(x[r(2673)](e))));
  }
  [s(2691)](x) {
    var t = s;
    this[t(2594)][t(2394)](x);
  }
}
function $2(i, x) {
  var t = s;
  return Object[t(1430)](x)[t(473)]((r, [e, a]) => {
    var n = t;
    return a && typeof a === n(644) ? r[e] = r[e] ? { ...r[e], ...a } : a : r[e] = a, r;
  }, { ...i });
}
var Ye = { exports: {} }, z2 = Ye[s(545)], xa;
function H2() {
  var i = s;
  return xa ? Ye[i(545)] : (xa = 1, function(x, t) {
    (function(r, e) {
      e(t);
    })(z2, function(r) {
      var e = K;
      function a() {
        for (var I = K, p = arguments.length, g = Array(p), b = 0; b < p; b++)
          g[b] = arguments[b];
        if (g[I(1027)] > 1) {
          g[0] = g[0].slice(0, -1);
          for (var z = g[I(1027)] - 1, H = 1; H < z; ++H)
            g[H] = g[H][I(771)](1, -1);
          return g[z] = g[z].slice(1), g[I(1372)]("");
        } else return g[0];
      }
      function n(I) {
        var p = K;
        return p(768) + I + ")";
      }
      function o(I) {
        var p = K;
        return I === void 0 ? "undefined" : I === null ? p(697) : Object[p(1745)][p(1339)].call(I).split(" ").pop().split("]")[p(2310)]().toLowerCase();
      }
      function c(I) {
        var p = K;
        return I[p(660)]();
      }
      function u(I) {
        var p = K;
        return I != null ? I instanceof Array ? I : typeof I.length !== p(2479) || I.split || I[p(2163)] || I[p(1580)] ? [I] : Array[p(1745)].slice[p(1580)](I) : [];
      }
      function f(I, p) {
        var g = I;
        if (p) for (var b in p)
          g[b] = p[b];
        return g;
      }
      function d(I) {
        var p = K, g = p(1707), b = p(1501), z = a(b, p(821)), H = n(n(p(1709) + z + "%" + z + z + "%" + z + z) + "|" + n("%[89A-Fa-f]" + z + "%" + z + z) + "|" + n("%" + z + z)), i0 = p(705), f0 = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", I0 = a(i0, f0), j0 = I ? p(675) : "[]", W0 = I ? p(1274) : "[]", k0 = a(g, b, "[\\-\\.\\_\\~]", j0);
        n(g + a(g, b, p(480)) + "*"), n(n(H + "|" + a(k0, f0, "[\\:]")) + "*");
        var D0 = n(n("25[0-5]") + "|" + n("2[0-4]" + b) + "|" + n("1" + b + b) + "|" + n("0?[1-9]" + b) + p(2533) + b), Z0 = n(D0 + "\\." + D0 + "\\." + D0 + "\\." + D0), g0 = n(z + p(1951)), $0 = n(n(g0 + "\\:" + g0) + "|" + Z0), B0 = n(n(g0 + "\\:") + p(1427) + $0), z0 = n("\\:\\:" + n(g0 + "\\:") + p(1202) + $0), Ee = n(n(g0) + p(1702) + n(g0 + "\\:") + p(579) + $0), oe = n(n(n(g0 + "\\:") + p(622) + g0) + "?\\:\\:" + n(g0 + "\\:") + p(1499) + $0), ce = n(n(n(g0 + "\\:") + p(585) + g0) + p(1702) + n(g0 + "\\:") + p(770) + $0), $e = n(n(n(g0 + "\\:") + "{0,3}" + g0) + "?\\:\\:" + g0 + "\\:" + $0), Ce = n(n(n(g0 + "\\:") + "{0,4}" + g0) + p(1702) + $0), te = n(n(n(g0 + "\\:") + p(1398) + g0) + p(1702) + g0), ue = n(n(n(g0 + "\\:") + p(2657) + g0) + p(1702)), fe = n([B0, z0, Ee, oe, ce, $e, Ce, te, ue].join("|")), de = n(n(k0 + "|" + H) + "+");
        n(p(424) + z + "+\\." + a(k0, f0, p(1981)) + "+"), n(n(H + "|" + a(k0, f0)) + "*");
        var le = n(H + "|" + a(k0, f0, p(2086)));
        return n(n(H + "|" + a(k0, f0, p(2483))) + "+"), n(n(le + "|" + a(p(719), W0)) + "*"), { NOT_SCHEME: new RegExp(a("[^]", g, b, p(480)), "g"), NOT_USERINFO: new RegExp(a(p(712), k0, f0), "g"), NOT_HOST: new RegExp(a("[^\\%\\[\\]\\:]", k0, f0), "g"), NOT_PATH: new RegExp(a(p(1297), k0, f0), "g"), NOT_PATH_NOSCHEME: new RegExp(a(p(1329), k0, f0), "g"), NOT_QUERY: new RegExp(a(p(956), k0, f0, p(737), W0), "g"), NOT_FRAGMENT: new RegExp(a(p(956), k0, f0, p(737)), "g"), ESCAPE: new RegExp(a("[^]", k0, f0), "g"), UNRESERVED: new RegExp(k0, "g"), OTHER_CHARS: new RegExp(a(p(956), k0, I0), "g"), PCT_ENCODED: new RegExp(H, "g"), IPV4ADDRESS: new RegExp("^(" + Z0 + ")$"), IPV6ADDRESS: new RegExp(p(1503) + fe + ")" + n(n(p(2173) + z + p(2497)) + "(" + de + ")") + p(2668)) };
      }
      var l = d(!1), v = d(!0), h = /* @__PURE__ */ function() {
        function I(p, g) {
          var b = K, z = [], H = !0, i0 = !1, f0 = void 0;
          try {
            for (var I0 = p[Symbol[b(1644)]](), j0; !(H = (j0 = I0[b(1180)]())[b(2385)]) && (z[b(1020)](j0[b(1551)]), !(g && z[b(1027)] === g)); H = !0)
              ;
          } catch (W0) {
            i0 = !0, f0 = W0;
          } finally {
            try {
              !H && I0.return && I0[b(624)]();
            } finally {
              if (i0) throw f0;
            }
          }
          return z;
        }
        return function(p, g) {
          var b = K;
          if (Array[b(710)](p)) return p;
          if (Symbol[b(1644)] in Object(p)) return I(p, g);
          throw new TypeError(b(1110));
        };
      }(), m = function(I) {
        var p = K;
        if (Array.isArray(I)) {
          for (var g = 0, b = Array(I[p(1027)]); g < I[p(1027)]; g++) b[g] = I[g];
          return b;
        } else return Array[p(429)](I);
      }, y = 2147483647, w = 36, k = 1, F = 26, T = 38, R = 700, P = 72, C = 128, O = "-", j = /^xn--/, M = /[^\0-\x7E]/, N = /[\x2E\u3002\uFF0E\uFF61]/g, q = { overflow: "Overflow: input needs wider integers to process", "not-basic": e(548), "invalid-input": e(2081) }, $ = w - k, U = Math[e(1124)], V = String.fromCharCode;
      function J(I) {
        throw new RangeError(q[I]);
      }
      function c0(I, p) {
        for (var g = e, b = [], z = I[g(1027)]; z--; )
          b[z] = p(I[z]);
        return b;
      }
      function u0(I, p) {
        var g = e, b = I.split("@"), z = "";
        b[g(1027)] > 1 && (z = b[0] + "@", I = b[1]), I = I[g(1024)](N, ".");
        var H = I[g(2432)]("."), i0 = c0(H, p).join(".");
        return z + i0;
      }
      function d0(I) {
        for (var p = e, g = [], b = 0, z = I[p(1027)]; b < z; ) {
          var H = I[p(1706)](b++);
          if (H >= 55296 && H <= 56319 && b < z) {
            var i0 = I.charCodeAt(b++);
            (i0 & 64512) == 56320 ? g[p(1020)](((H & 1023) << 10) + (i0 & 1023) + 65536) : (g[p(1020)](H), b--);
          } else g.push(H);
        }
        return g;
      }
      var o0 = function(p) {
        var g = e;
        return String[g(1030)][g(1969)](String, m(p));
      }, l0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : w;
      }, S0 = function(p, g) {
        return p + 22 + 75 * (p < 26) - ((g != 0) << 5);
      }, y0 = function(p, g, b) {
        var z = 0;
        for (p = b ? U(p / R) : p >> 1, p += U(p / g); p > $ * F >> 1; z += w)
          p = U(p / $);
        return U(z + ($ + 1) * p / (p + T));
      }, M0 = function(p) {
        var g = e, b = [], z = p[g(1027)], H = 0, i0 = C, f0 = P, I0 = p[g(1e3)](O);
        I0 < 0 && (I0 = 0);
        for (var j0 = 0; j0 < I0; ++j0)
          p[g(1706)](j0) >= 128 && J(g(672)), b.push(p.charCodeAt(j0));
        for (var W0 = I0 > 0 ? I0 + 1 : 0; W0 < z; ) {
          for (var k0 = H, D0 = 1, Z0 = w; ; Z0 += w) {
            W0 >= z && J(g(500));
            var g0 = l0(p[g(1706)](W0++));
            (g0 >= w || g0 > U((y - H) / D0)) && J("overflow"), H += g0 * D0;
            var $0 = Z0 <= f0 ? k : Z0 >= f0 + F ? F : Z0 - f0;
            if (g0 < $0) break;
            var B0 = w - $0;
            D0 > U(y / B0) && J(g(1280)), D0 *= B0;
          }
          var z0 = b[g(1027)] + 1;
          f0 = y0(H - k0, z0, k0 == 0), U(H / z0) > y - i0 && J(g(1280)), i0 += U(H / z0), H %= z0, b.splice(H++, 0, i0);
        }
        return String[g(1030)][g(1969)](String, b);
      }, q0 = function(p) {
        var g = e, b = [];
        p = d0(p);
        var z = p.length, H = C, i0 = 0, f0 = P, I0 = !0, j0 = !1, W0 = void 0;
        try {
          for (var k0 = p[Symbol[g(1644)]](), D0; !(I0 = (D0 = k0[g(1180)]()).done); I0 = !0) {
            var Z0 = D0[g(1551)];
            Z0 < 128 && b.push(V(Z0));
          }
        } catch (Je) {
          j0 = !0, W0 = Je;
        } finally {
          try {
            !I0 && k0[g(624)] && k0[g(624)]();
          } finally {
            if (j0) throw W0;
          }
        }
        var g0 = b[g(1027)], $0 = g0;
        for (g0 && b[g(1020)](O); $0 < z; ) {
          var B0 = y, z0 = !0, Ee = !1, oe = void 0;
          try {
            for (var ce = p[Symbol[g(1644)]](), $e; !(z0 = ($e = ce[g(1180)]())[g(2385)]); z0 = !0) {
              var Ce = $e[g(1551)];
              Ce >= H && Ce < B0 && (B0 = Ce);
            }
          } catch (Je) {
            Ee = !0, oe = Je;
          } finally {
            try {
              !z0 && ce.return && ce[g(624)]();
            } finally {
              if (Ee) throw oe;
            }
          }
          var te = $0 + 1;
          B0 - H > U((y - i0) / te) && J(g(1280)), i0 += (B0 - H) * te, H = B0;
          var ue = !0, fe = !1, de = void 0;
          try {
            for (var le = p[Symbol[g(1644)]](), yr; !(ue = (yr = le[g(1180)]()).done); ue = !0) {
              var br = yr[g(1551)];
              if (br < H && ++i0 > y && J(g(1280)), br == H) {
                for (var ox = i0, cx = w; ; cx += w) {
                  var ux = cx <= f0 ? k : cx >= f0 + F ? F : cx - f0;
                  if (ox < ux) break;
                  var wr = ox - ux, Sr = w - ux;
                  b[g(1020)](V(S0(ux + wr % Sr, 0))), ox = U(wr / Sr);
                }
                b.push(V(S0(ox, 0))), f0 = y0(i0, te, $0 == g0), i0 = 0, ++$0;
              }
            }
          } catch (Je) {
            fe = !0, de = Je;
          } finally {
            try {
              !ue && le[g(624)] && le.return();
            } finally {
              if (fe) throw de;
            }
          }
          ++i0, ++H;
        }
        return b[g(1372)]("");
      }, Q0 = function(p) {
        return u0(p, function(g) {
          var b = K;
          return j[b(1063)](g) ? M0(g[b(771)](4)[b(955)]()) : g;
        });
      }, D = function(p) {
        return u0(p, function(g) {
          var b = K;
          return M[b(1063)](g) ? b(1775) + q0(g) : g;
        });
      }, A = { version: e(1388), ucs2: { decode: d0, encode: o0 }, decode: M0, encode: q0, toASCII: D, toUnicode: Q0 }, L = {};
      function G(I) {
        var p = e, g = I.charCodeAt(0), b = void 0;
        return g < 16 ? b = "%0" + g[p(1339)](16)[p(660)]() : g < 128 ? b = "%" + g[p(1339)](16)[p(660)]() : g < 2048 ? b = "%" + (g >> 6 | 192)[p(1339)](16).toUpperCase() + "%" + (g & 63 | 128)[p(1339)](16).toUpperCase() : b = "%" + (g >> 12 | 224)[p(1339)](16)[p(660)]() + "%" + (g >> 6 & 63 | 128)[p(1339)](16)[p(660)]() + "%" + (g & 63 | 128)[p(1339)](16)[p(660)](), b;
      }
      function Q(I) {
        for (var p = e, g = "", b = 0, z = I[p(1027)]; b < z; ) {
          var H = parseInt(I[p(378)](b + 1, 2), 16);
          if (H < 128) g += String[p(2388)](H), b += 3;
          else if (H >= 194 && H < 224) {
            if (z - b >= 6) {
              var i0 = parseInt(I[p(378)](b + 4, 2), 16);
              g += String.fromCharCode((H & 31) << 6 | i0 & 63);
            } else g += I[p(378)](b, 6);
            b += 6;
          } else if (H >= 224) {
            if (z - b >= 9) {
              var f0 = parseInt(I[p(378)](b + 4, 2), 16), I0 = parseInt(I[p(378)](b + 7, 2), 16);
              g += String[p(2388)]((H & 15) << 12 | (f0 & 63) << 6 | I0 & 63);
            } else g += I.substr(b, 9);
            b += 9;
          } else g += I[p(378)](b, 3), b += 3;
        }
        return g;
      }
      function W(I, p) {
        var g = e;
        function b(z) {
          var H = K, i0 = Q(z);
          return i0[H(2096)](p.UNRESERVED) ? i0 : z;
        }
        return I[g(1963)] && (I[g(1963)] = String(I.scheme)[g(1024)](p[g(1247)], b)[g(955)]().replace(p[g(1459)], "")), I[g(2652)] !== void 0 && (I[g(2652)] = String(I[g(2652)]).replace(p[g(1247)], b)[g(1024)](p.NOT_USERINFO, G)[g(1024)](p[g(1247)], c)), I[g(1320)] !== void 0 && (I[g(1320)] = String(I[g(1320)])[g(1024)](p.PCT_ENCODED, b)[g(955)]().replace(p[g(682)], G)[g(1024)](p[g(1247)], c)), I.path !== void 0 && (I[g(2610)] = String(I.path)[g(1024)](p[g(1247)], b)[g(1024)](I[g(1963)] ? p[g(650)] : p[g(1158)], G).replace(p[g(1247)], c)), I[g(2697)] !== void 0 && (I.query = String(I.query)[g(1024)](p[g(1247)], b)[g(1024)](p.NOT_QUERY, G)[g(1024)](p[g(1247)], c)), I[g(1123)] !== void 0 && (I[g(1123)] = String(I[g(1123)]).replace(p.PCT_ENCODED, b)[g(1024)](p[g(451)], G)[g(1024)](p.PCT_ENCODED, c)), I;
      }
      function X(I) {
        return I.replace(/^0*(.*)/, "$1") || "0";
      }
      function s0(I, p) {
        var g = e, b = I[g(2096)](p[g(2561)]) || [], z = h(b, 2), H = z[1];
        return H ? H[g(2432)](".")[g(802)](X)[g(1372)](".") : I;
      }
      function n0(I, p) {
        var g = e, b = I[g(2096)](p[g(740)]) || [], z = h(b, 3), H = z[1], i0 = z[2];
        if (H) {
          for (var f0 = H[g(955)]()[g(2432)]("::").reverse(), I0 = h(f0, 2), j0 = I0[0], W0 = I0[1], k0 = W0 ? W0[g(2432)](":").map(X) : [], D0 = j0[g(2432)](":")[g(802)](X), Z0 = p[g(2561)][g(1063)](D0[D0[g(1027)] - 1]), g0 = Z0 ? 7 : 8, $0 = D0[g(1027)] - g0, B0 = Array(g0), z0 = 0; z0 < g0; ++z0)
            B0[z0] = k0[z0] || D0[$0 + z0] || "";
          Z0 && (B0[g0 - 1] = s0(B0[g0 - 1], p));
          var Ee = B0[g(473)](function(te, ue, fe) {
            var de = g;
            if (!ue || ue === "0") {
              var le = te[te[de(1027)] - 1];
              le && le[de(2022)] + le[de(1027)] === fe ? le[de(1027)]++ : te[de(1020)]({ index: fe, length: 1 });
            }
            return te;
          }, []), oe = Ee[g(2601)](function(te, ue) {
            var fe = g;
            return ue[fe(1027)] - te[fe(1027)];
          })[0], ce = void 0;
          if (oe && oe[g(1027)] > 1) {
            var $e = B0[g(771)](0, oe.index), Ce = B0[g(771)](oe[g(2022)] + oe[g(1027)]);
            ce = $e[g(1372)](":") + "::" + Ce[g(1372)](":");
          } else ce = B0[g(1372)](":");
          return i0 && (ce += "%" + i0), ce;
        } else return I;
      }
      var Y = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, L0 = ""[e(2096)](/(){0}/)[1] === void 0;
      function A0(I) {
        var p = e, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = {}, z = g[p(1229)] !== !1 ? v : l;
        g[p(2678)] === "suffix" && (I = (g[p(1963)] ? g.scheme + ":" : "") + "//" + I);
        var H = I[p(2096)](Y);
        if (H) {
          L0 ? (b[p(1963)] = H[1], b[p(2652)] = H[3], b[p(1320)] = H[4], b[p(1206)] = parseInt(H[5], 10), b[p(2610)] = H[6] || "", b[p(2697)] = H[7], b[p(1123)] = H[8], isNaN(b[p(1206)]) && (b[p(1206)] = H[5])) : (b[p(1963)] = H[1] || void 0, b[p(2652)] = I.indexOf("@") !== -1 ? H[3] : void 0, b.host = I[p(393)]("//") !== -1 ? H[4] : void 0, b.port = parseInt(H[5], 10), b[p(2610)] = H[6] || "", b[p(2697)] = I[p(393)]("?") !== -1 ? H[7] : void 0, b[p(1123)] = I[p(393)]("#") !== -1 ? H[8] : void 0, isNaN(b[p(1206)]) && (b[p(1206)] = I[p(2096)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? H[4] : void 0)), b[p(1320)] && (b[p(1320)] = n0(s0(b.host, z), z)), b.scheme === void 0 && b.userinfo === void 0 && b[p(1320)] === void 0 && b[p(1206)] === void 0 && !b[p(2610)] && b[p(2697)] === void 0 ? b.reference = p(1365) : b.scheme === void 0 ? b[p(2678)] = "relative" : b[p(1123)] === void 0 ? b[p(2678)] = p(1947) : b[p(2678)] = p(2426), g[p(2678)] && g.reference !== p(2402) && g[p(2678)] !== b.reference && (b[p(2463)] = b[p(2463)] || "URI is not a " + g[p(2678)] + p(613));
          var i0 = L[(g.scheme || b[p(1963)] || "")[p(955)]()];
          if (!g[p(2026)] && (!i0 || !i0[p(2026)])) {
            if (b.host && (g[p(1162)] || i0 && i0[p(1162)])) try {
              b[p(1320)] = A[p(1435)](b[p(1320)][p(1024)](z.PCT_ENCODED, Q)[p(955)]());
            } catch (f0) {
              b[p(2463)] = b[p(2463)] || "Host's domain name can not be converted to ASCII via punycode: " + f0;
            }
            W(b, l);
          } else W(b, z);
          i0 && i0[p(2673)] && i0.parse(b, g);
        } else b[p(2463)] = b[p(2463)] || p(522);
        return b;
      }
      function U0(I, p) {
        var g = e, b = p[g(1229)] !== !1 ? v : l, z = [];
        return I[g(2652)] !== void 0 && (z[g(1020)](I[g(2652)]), z[g(1020)]("@")), I[g(1320)] !== void 0 && z[g(1020)](n0(s0(String(I[g(1320)]), b), b).replace(b[g(740)], function(H, i0, f0) {
          return "[" + i0 + (f0 ? "%25" + f0 : "") + "]";
        })), (typeof I[g(1206)] === g(2479) || typeof I[g(1206)] === g(1278)) && (z[g(1020)](":"), z[g(1020)](String(I[g(1206)]))), z[g(1027)] ? z.join("") : void 0;
      }
      var w0 = /^\.\.?\//, G0 = /^\/\.(\/|$)/, ne = /^\/\.\.(\/|$)/, X0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function O0(I) {
        for (var p = e, g = []; I[p(1027)]; )
          if (I.match(w0)) I = I[p(1024)](w0, "");
          else if (I.match(G0)) I = I[p(1024)](G0, "/");
          else if (I[p(2096)](ne)) I = I[p(1024)](ne, "/"), g[p(907)]();
          else if (I === "." || I === "..") I = "";
          else {
            var b = I[p(2096)](X0);
            if (b) {
              var z = b[0];
              I = I[p(771)](z.length), g[p(1020)](z);
            } else throw new Error(p(1633));
          }
        return g[p(1372)]("");
      }
      function V0(I) {
        var p = e, g = arguments[p(1027)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = g[p(1229)] ? v : l, z = [], H = L[(g[p(1963)] || I.scheme || "")[p(955)]()];
        if (H && H[p(1464)] && H[p(1464)](I, g), I[p(1320)] && !b[p(740)][p(1063)](I[p(1320)])) {
          if (g[p(1162)] || H && H[p(1162)]) try {
            I.host = g[p(1229)] ? A[p(1290)](I[p(1320)]) : A[p(1435)](I[p(1320)].replace(b[p(1247)], Q)[p(955)]());
          } catch (I0) {
            I[p(2463)] = I[p(2463)] || p(976) + (g[p(1229)] ? "Unicode" : p(2341)) + p(1587) + I0;
          }
        }
        W(I, b), g[p(2678)] !== p(2402) && I[p(1963)] && (z[p(1020)](I.scheme), z.push(":"));
        var i0 = U0(I, g);
        if (i0 !== void 0 && (g[p(2678)] !== "suffix" && z[p(1020)]("//"), z.push(i0), I[p(2610)] && I[p(2610)].charAt(0) !== "/" && z[p(1020)]("/")), I[p(2610)] !== void 0) {
          var f0 = I[p(2610)];
          !g[p(2101)] && (!H || !H[p(2101)]) && (f0 = O0(f0)), i0 === void 0 && (f0 = f0[p(1024)](/^\/\//, p(651))), z[p(1020)](f0);
        }
        return I[p(2697)] !== void 0 && (z[p(1020)]("?"), z[p(1020)](I[p(2697)])), I.fragment !== void 0 && (z[p(1020)]("#"), z.push(I.fragment)), z.join("");
      }
      function _0(I, p) {
        var g = e, b = arguments[g(1027)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, z = arguments[3], H = {};
        return !z && (I = A0(V0(I, b), b), p = A0(V0(p, b), b)), b = b || {}, !b.tolerant && p[g(1963)] ? (H[g(1963)] = p.scheme, H[g(2652)] = p[g(2652)], H[g(1320)] = p[g(1320)], H[g(1206)] = p.port, H.path = O0(p[g(2610)] || ""), H[g(2697)] = p[g(2697)]) : (p.userinfo !== void 0 || p[g(1320)] !== void 0 || p[g(1206)] !== void 0 ? (H[g(2652)] = p[g(2652)], H[g(1320)] = p[g(1320)], H[g(1206)] = p[g(1206)], H[g(2610)] = O0(p[g(2610)] || ""), H[g(2697)] = p.query) : (p[g(2610)] ? (p[g(2610)][g(1276)](0) === "/" ? H[g(2610)] = O0(p[g(2610)]) : ((I[g(2652)] !== void 0 || I.host !== void 0 || I.port !== void 0) && !I[g(2610)] ? H.path = "/" + p.path : I[g(2610)] ? H[g(2610)] = I.path[g(771)](0, I.path[g(1e3)]("/") + 1) + p[g(2610)] : H[g(2610)] = p[g(2610)], H[g(2610)] = O0(H[g(2610)])), H[g(2697)] = p[g(2697)]) : (H[g(2610)] = I.path, p[g(2697)] !== void 0 ? H[g(2697)] = p[g(2697)] : H[g(2697)] = I.query), H[g(2652)] = I[g(2652)], H.host = I[g(1320)], H[g(1206)] = I[g(1206)]), H.scheme = I[g(1963)]), H.fragment = p[g(1123)], H;
      }
      function Ze(I, p, g) {
        var b = e, z = f({ scheme: b(697) }, g);
        return V0(_0(A0(I, z), A0(p, z), z, !0), z);
      }
      function jx(I, p) {
        var g = e;
        return typeof I == "string" ? I = V0(A0(I, p), p) : o(I) === g(644) && (I = A0(V0(I, p), p)), I;
      }
      function Mx(I, p, g) {
        var b = e;
        return typeof I === b(1278) ? I = V0(A0(I, g), g) : o(I) === b(644) && (I = V0(I, g)), typeof p === b(1278) ? p = V0(A0(p, g), g) : o(p) === b(644) && (p = V0(p, g)), I === p;
      }
      function En(I, p) {
        var g = e;
        return I && I[g(1339)]()[g(1024)](!p || !p[g(1229)] ? l[g(2044)] : v[g(2044)], G);
      }
      function ge(I, p) {
        var g = e;
        return I && I[g(1339)]()[g(1024)](!p || !p[g(1229)] ? l[g(1247)] : v.PCT_ENCODED, Q);
      }
      var Be = { scheme: e(1600), domainHost: !0, parse: function(p, g) {
        var b = e;
        return !p[b(1320)] && (p[b(2463)] = p[b(2463)] || b(1682)), p;
      }, serialize: function(p, g) {
        var b = e, z = String(p.scheme)[b(955)]() === "https";
        return (p[b(1206)] === (z ? 443 : 80) || p.port === "") && (p[b(1206)] = void 0), !p[b(2610)] && (p[b(2610)] = "/"), p;
      } }, fr = { scheme: e(1948), domainHost: Be[e(1162)], parse: Be.parse, serialize: Be[e(1464)] };
      function dr(I) {
        var p = e;
        return typeof I[p(1468)] === p(2665) ? I[p(1468)] : String(I[p(1963)])[p(955)]() === "wss";
      }
      var Ke = { scheme: "ws", domainHost: !0, parse: function(p, g) {
        var b = e, z = p;
        return z.secure = dr(z), z.resourceName = (z[b(2610)] || "/") + (z[b(2697)] ? "?" + z[b(2697)] : ""), z.path = void 0, z[b(2697)] = void 0, z;
      }, serialize: function(p, g) {
        var b = e;
        if ((p[b(1206)] === (dr(p) ? 443 : 80) || p[b(1206)] === "") && (p[b(1206)] = void 0), typeof p[b(1468)] === b(2665) && (p.scheme = p[b(1468)] ? "wss" : "ws", p.secure = void 0), p[b(369)]) {
          var z = p[b(369)][b(2432)]("?"), H = h(z, 2), i0 = H[0], f0 = H[1];
          p[b(2610)] = i0 && i0 !== "/" ? i0 : void 0, p[b(2697)] = f0, p[b(369)] = void 0;
        }
        return p.fragment = void 0, p;
      } }, lr = { scheme: e(1327), domainHost: Ke[e(1162)], parse: Ke.parse, serialize: Ke.serialize }, Pn = {}, hr = e(922) + e(2095) + "]", ie = e(1419), In = n(n(e(1709) + ie + "%" + ie + ie + "%" + ie + ie) + "|" + n(e(2103) + ie + "%" + ie + ie) + "|" + n("%" + ie + ie)), Rn = e(1815), Cn = e(2188), Fn = a(Cn, e(892)), Nn = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", qn = new RegExp(hr, "g"), Le = new RegExp(In, "g"), Tn = new RegExp(a(e(1149), Rn, e(1955), e(444), Fn), "g"), pr = new RegExp(a(e(1149), hr, Nn), "g"), An = pr;
      function Lx(I) {
        var p = e, g = Q(I);
        return g[p(2096)](qn) ? g : I;
      }
      var mr = { scheme: e(1059), parse: function(p, g) {
        var b = e, z = p, H = z.to = z.path ? z[b(2610)][b(2432)](",") : [];
        if (z[b(2610)] = void 0, z[b(2697)]) {
          for (var i0 = !1, f0 = {}, I0 = z.query[b(2432)]("&"), j0 = 0, W0 = I0[b(1027)]; j0 < W0; ++j0) {
            var k0 = I0[j0][b(2432)]("=");
            switch (k0[0]) {
              case "to":
                for (var D0 = k0[1].split(","), Z0 = 0, g0 = D0[b(1027)]; Z0 < g0; ++Z0)
                  H[b(1020)](D0[Z0]);
                break;
              case b(1789):
                z[b(1789)] = ge(k0[1], g);
                break;
              case b(2583):
                z[b(2583)] = ge(k0[1], g);
                break;
              default:
                i0 = !0, f0[ge(k0[0], g)] = ge(k0[1], g);
                break;
            }
          }
          i0 && (z[b(1998)] = f0);
        }
        z.query = void 0;
        for (var $0 = 0, B0 = H[b(1027)]; $0 < B0; ++$0) {
          var z0 = H[$0][b(2432)]("@");
          if (z0[0] = ge(z0[0]), g.unicodeSupport) z0[1] = ge(z0[1], g)[b(955)]();
          else try {
            z0[1] = A[b(1435)](ge(z0[1], g).toLowerCase());
          } catch (Ee) {
            z[b(2463)] = z[b(2463)] || "Email address's domain name can not be converted to ASCII via punycode: " + Ee;
          }
          H[$0] = z0[b(1372)]("@");
        }
        return z;
      }, serialize: function(p, g) {
        var b = e, z = p, H = u(p.to);
        if (H) {
          for (var i0 = 0, f0 = H[b(1027)]; i0 < f0; ++i0) {
            var I0 = String(H[i0]), j0 = I0[b(1e3)]("@"), W0 = I0.slice(0, j0)[b(1024)](Le, Lx)[b(1024)](Le, c).replace(Tn, G), k0 = I0[b(771)](j0 + 1);
            try {
              k0 = g[b(1229)] ? A.toUnicode(k0) : A[b(1435)](ge(k0, g).toLowerCase());
            } catch ($0) {
              z.error = z.error || b(979) + (g[b(1229)] ? b(2080) : b(2341)) + b(1587) + $0;
            }
            H[i0] = W0 + "@" + k0;
          }
          z[b(2610)] = H[b(1372)](",");
        }
        var D0 = p[b(1998)] = p[b(1998)] || {};
        p[b(1789)] && (D0[b(1789)] = p[b(1789)]), p[b(2583)] && (D0.body = p[b(2583)]);
        var Z0 = [];
        for (var g0 in D0)
          D0[g0] !== Pn[g0] && Z0.push(g0.replace(Le, Lx)[b(1024)](Le, c)[b(1024)](pr, G) + "=" + D0[g0].replace(Le, Lx).replace(Le, c)[b(1024)](An, G));
        return Z0[b(1027)] && (z[b(2697)] = Z0[b(1372)]("&")), z;
      } }, On = /^([^\:]+)\:(.*)/, vr = { scheme: e(1612), parse: function(p, g) {
        var b = e, z = p.path && p[b(2610)][b(2096)](On), H = p;
        if (z) {
          var i0 = g[b(1963)] || H.scheme || b(1612), f0 = z[1][b(955)](), I0 = z[2], j0 = i0 + ":" + (g[b(598)] || f0), W0 = L[j0];
          H[b(598)] = f0, H.nss = I0, H[b(2610)] = void 0, W0 && (H = W0[b(2673)](H, g));
        } else H[b(2463)] = H[b(2463)] || b(2509);
        return H;
      }, serialize: function(p, g) {
        var b = e, z = g[b(1963)] || p[b(1963)] || b(1612), H = p[b(598)], i0 = z + ":" + (g[b(598)] || H), f0 = L[i0];
        f0 && (p = f0[b(1464)](p, g));
        var I0 = p, j0 = p[b(478)];
        return I0[b(2610)] = (H || g[b(598)]) + ":" + j0, I0;
      } }, Dn = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, gr = { scheme: e(1165), parse: function(p, g) {
        var b = e, z = p;
        return z[b(2221)] = z[b(478)], z[b(478)] = void 0, !g[b(1941)] && (!z[b(2221)] || !z[b(2221)].match(Dn)) && (z[b(2463)] = z.error || b(631)), z;
      }, serialize: function(p, g) {
        var b = e, z = p;
        return z[b(478)] = (p.uuid || "")[b(955)](), z;
      } };
      L[Be[e(1963)]] = Be, L[fr[e(1963)]] = fr, L[Ke[e(1963)]] = Ke, L[lr[e(1963)]] = lr, L[mr[e(1963)]] = mr, L[vr[e(1963)]] = vr, L[gr[e(1963)]] = gr, r[e(2179)] = L, r.pctEncChar = G, r.pctDecChars = Q, r[e(2673)] = A0, r.removeDotSegments = O0, r[e(1464)] = V0, r[e(1688)] = _0, r[e(639)] = Ze, r[e(2597)] = jx, r.equal = Mx, r[e(2219)] = En, r[e(1900)] = ge, Object[e(2574)](r, e(542), { value: !0 });
    });
  }(Ye, Ye[i(545)]), Ye.exports);
}
var Kx, ta;
function or() {
  return ta || (ta = 1, Kx = function i(x, t) {
    var r = K;
    if (x === t) return !0;
    if (x && t && typeof x == r(644) && typeof t == r(644)) {
      if (x[r(2611)] !== t.constructor) return !1;
      var e, a, n;
      if (Array.isArray(x)) {
        if (e = x[r(1027)], e != t[r(1027)]) return !1;
        for (a = e; a-- !== 0; ) if (!i(x[a], t[a])) return !1;
        return !0;
      }
      if (x[r(2611)] === RegExp) return x[r(1490)] === t[r(1490)] && x[r(1084)] === t[r(1084)];
      if (x[r(1230)] !== Object[r(1745)][r(1230)]) return x[r(1230)]() === t.valueOf();
      if (x[r(1339)] !== Object[r(1745)][r(1339)]) return x[r(1339)]() === t[r(1339)]();
      if (n = Object[r(2559)](x), e = n.length, e !== Object[r(2559)](t).length) return !1;
      for (a = e; a-- !== 0; ) if (!Object[r(1745)].hasOwnProperty[r(1580)](t, n[a])) return !1;
      for (a = e; a-- !== 0; ) {
        var o = n[a];
        if (!i(x[o], t[o])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), Kx;
}
var Jx, ra;
function U2() {
  return ra || (ra = 1, Jx = function(x) {
    for (var t = K, r = 0, e = x.length, a = 0, n; a < e; )
      r++, n = x.charCodeAt(a++), n >= 55296 && n <= 56319 && a < e && (n = x[t(1706)](a), (n & 64512) == 56320 && a++);
    return r;
  }), Jx;
}
var Gx, aa;
function We() {
  var i = s;
  if (aa) return Gx;
  aa = 1, Gx = { copy: x, checkDataType: t, checkDataTypes: r, coerceToTypes: a, toHash: n, getProperty: u, escapeQuotes: f, equal: or(), ucs2length: U2(), varOccurences: d, varReplace: l, schemaHasRules: v, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: y, getPathExpr: w, getPath: k, getData: R, unescapeFragment: C, unescapeJsonPointer: M, escapeFragment: O, escapeJsonPointer: j };
  function x(N, q) {
    q = q || {};
    for (var $ in N) q[$] = N[$];
    return q;
  }
  function t(N, q, $, U) {
    var V = K, J = V(U ? 2503 : 2711), c0 = U ? " || " : " && ", u0 = U ? "!" : "", d0 = U ? "" : "!";
    switch (N) {
      case V(697):
        return q + J + V(697);
      case V(2052):
        return u0 + "Array.isArray(" + q + ")";
      case V(644):
        return "(" + u0 + q + c0 + V(2349) + q + J + V(2456) + c0 + d0 + V(1153) + q + "))";
      case V(1155):
        return V(2224) + q + J + V(2070) + c0 + d0 + "(" + q + V(2263) + c0 + q + J + q + ($ ? c0 + u0 + V(1949) + q + ")" : "") + ")";
      case V(2479):
        return V(2224) + q + J + '"' + N + '"' + ($ ? c0 + u0 + V(1949) + q + ")" : "") + ")";
      default:
        return V(2349) + q + J + '"' + N + '"';
    }
  }
  function r(N, q, $) {
    var U = K;
    switch (N.length) {
      case 1:
        return t(N[0], q, $, !0);
      default:
        var V = "", J = n(N);
        J[U(2052)] && J[U(644)] && (V = J.null ? "(" : "(!" + q + U(2129), V += U(2349) + q + ' !== "object")', delete J[U(697)], delete J[U(2052)], delete J[U(644)]), J[U(2479)] && delete J[U(1155)];
        for (var c0 in J) V += (V ? U(2627) : "") + t(c0, q, $, !0);
        return V;
    }
  }
  var e = n([i(1278), i(2479), i(1155), i(2665), i(697)]);
  function a(N, q) {
    var $ = i;
    if (Array[$(710)](q)) {
      for (var U = [], V = 0; V < q[$(1027)]; V++) {
        var J = q[V];
        (e[J] || N === $(2052) && J === "array") && (U[U[$(1027)]] = J);
      }
      if (U[$(1027)]) return U;
    } else {
      if (e[q]) return [q];
      if (N === "array" && q === $(2052)) return ["array"];
    }
  }
  function n(N) {
    for (var q = i, $ = {}, U = 0; U < N[q(1027)]; U++) $[N[U]] = !0;
    return $;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(N) {
    var q = i;
    return typeof N == "number" ? "[" + N + "]" : o[q(1063)](N) ? "." + N : "['" + f(N) + "']";
  }
  function f(N) {
    var q = i;
    return N[q(1024)](c, "\\$&")[q(1024)](/\n/g, "\\n")[q(1024)](/\r/g, "\\r").replace(/\f/g, "\\f")[q(1024)](/\t/g, "\\t");
  }
  function d(N, q) {
    var $ = i;
    q += $(1601);
    var U = N[$(2096)](new RegExp(q, "g"));
    return U ? U[$(1027)] : 0;
  }
  function l(N, q, $) {
    var U = i;
    return q += "([^0-9])", $ = $[U(1024)](/\$/g, U(2510)), N.replace(new RegExp(q, "g"), $ + "$1");
  }
  function v(N, q) {
    var $ = i;
    if (typeof N == $(2665)) return !N;
    for (var U in N) if (q[U]) return !0;
  }
  function h(N, q, $) {
    var U = i;
    if (typeof N == U(2665)) return !N && $ != "not";
    for (var V in N) if (V != $ && q[V]) return !0;
  }
  function m(N, q) {
    var $ = i;
    if (typeof N != $(2665)) {
      for (var U in N) if (!q[U]) return U;
    }
  }
  function y(N) {
    return "'" + f(N) + "'";
  }
  function w(N, q, $, U) {
    var V = i, J = $ ? V(2681) + q + (U ? "" : V(2735)) : U ? V(2354) + q + V(962) : "'[\\'' + " + q + V(1880);
    return P(N, J);
  }
  function k(N, q, $) {
    var U = y($ ? "/" + j(q) : u(q));
    return P(N, U);
  }
  var F = /^\/(?:[^~]|~0|~1)*$/, T = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function R(N, q, $) {
    var U = i, V, J, c0, u0;
    if (N === "") return U(1029);
    if (N[0] == "/") {
      if (!F.test(N)) throw new Error(U(1241) + N);
      J = N, c0 = U(1029);
    } else {
      if (u0 = N.match(T), !u0) throw new Error(U(1241) + N);
      if (V = +u0[1], J = u0[2], J == "#") {
        if (V >= q) throw new Error(U(2239) + V + U(1813) + q);
        return $[q - V];
      }
      if (V > q) throw new Error(U(2502) + V + " levels up, current level is " + q);
      if (c0 = "data" + (q - V || ""), !J) return c0;
    }
    for (var d0 = c0, o0 = J[U(2432)]("/"), l0 = 0; l0 < o0[U(1027)]; l0++) {
      var S0 = o0[l0];
      S0 && (c0 += u(M(S0)), d0 += U(2627) + c0);
    }
    return d0;
  }
  function P(N, q) {
    var $ = i;
    return N == '""' ? q : (N + $(1137) + q)[$(1024)](/([^\\])' \+ '/g, "$1");
  }
  function C(N) {
    return M(decodeURIComponent(N));
  }
  function O(N) {
    return encodeURIComponent(j(N));
  }
  function j(N) {
    var q = i;
    return N.replace(/~/g, "~0")[q(1024)](/\//g, "~1");
  }
  function M(N) {
    var q = i;
    return N[q(1024)](/~1/g, "/")[q(1024)](/~0/g, "~");
  }
  return Gx;
}
var Qx, sa;
function vn() {
  if (sa) return Qx;
  sa = 1;
  var i = We();
  Qx = x;
  function x(t) {
    var r = K;
    i[r(1840)](t, this);
  }
  return Qx;
}
var Xx = { exports: {} }, na;
function V2() {
  var i = s;
  if (na) return Xx[i(545)];
  na = 1;
  var x = Xx[i(545)] = function(e, a, n) {
    var o = i;
    typeof a == o(2138) && (n = a, a = {}), n = a.cb || n;
    var c = typeof n == "function" ? n : n.pre || function() {
    }, u = n[o(2598)] || function() {
    };
    t(a, c, u, e, "", e);
  };
  x.keywords = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[i(1626)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x.propsKeywords = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[i(2746)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, a, n, o, c, u, f, d, l, v) {
    var h = i;
    if (o && typeof o == "object" && !Array[h(710)](o)) {
      a(o, c, u, f, d, l, v);
      for (var m in o) {
        var y = o[m];
        if (Array[h(710)](y)) {
          if (m in x.arrayKeywords)
            for (var w = 0; w < y.length; w++) t(e, a, n, y[w], c + "/" + m + "/" + w, u, c, m, o, w);
        } else if (m in x[h(2065)]) {
          if (y && typeof y == h(644))
            for (var k in y) t(e, a, n, y[k], c + "/" + m + "/" + r(k), u, c, m, o, k);
        } else (m in x[h(789)] || e[h(1957)] && !(m in x[h(2746)])) && t(e, a, n, y, c + "/" + m, u, c, m, o);
      }
      n(o, c, u, f, d, l, v);
    }
  }
  function r(e) {
    var a = i;
    return e.replace(/~/g, "~0")[a(1024)](/\//g, "~1");
  }
  return Xx[i(545)];
}
var Yx, ia;
function cr() {
  var i = s;
  if (ia) return Yx;
  ia = 1;
  var x = H2(), t = or(), r = We(), e = vn(), a = V2();
  Yx = n, n[i(1670)] = k, n[i(1606)] = m, n[i(828)] = F, n[i(465)] = T, n[i(1914)] = l, n[i(1303)] = o;
  function n(R, P, C) {
    var O = i, j = this[O(1960)][C];
    if (typeof j == O(1278))
      if (this[O(1960)][j]) j = this[O(1960)][j];
      else return n[O(1580)](this, R, P, j);
    if (j = j || this[O(360)][C], j instanceof e) return l(j.schema, this[O(2724)][O(2199)]) ? j[O(1303)] : j[O(1999)] || this[O(2032)](j);
    var M = o[O(1580)](this, P, C), N, q, $;
    return M && (N = M[O(1303)], P = M[O(2206)], $ = M[O(1870)]), N instanceof e ? q = N[O(1999)] || R[O(1580)](this, N[O(1303)], P, void 0, $) : N !== void 0 && (q = l(N, this[O(2724)][O(2199)]) ? N : R[O(1580)](this, N, P, void 0, $)), q;
  }
  function o(R, P) {
    var C = i, O = x[C(2673)](P), j = y(O), M = m(this[C(2698)](R.schema));
    if (Object.keys(R[C(1303)])[C(1027)] === 0 || j !== M) {
      var N = k(j), q = this[C(1960)][N];
      if (typeof q == "string") return c[C(1580)](this, R, q, O);
      if (q instanceof e)
        q[C(1999)] || this[C(2032)](q), R = q;
      else if (q = this._schemas[N], q instanceof e) {
        if (q[C(1999)] || this[C(2032)](q), N == k(P)) return { schema: q, root: R, baseId: M };
        R = q;
      } else return;
      if (!R[C(1303)]) return;
      M = m(this[C(2698)](R[C(1303)]));
    }
    return f[C(1580)](this, O, M, R[C(1303)], R);
  }
  function c(R, P, C) {
    var O = i, j = o[O(1580)](this, R, P);
    if (j) {
      var M = j[O(1303)], N = j[O(1870)];
      R = j[O(2206)];
      var q = this._getId(M);
      return q && (N = F(N, q)), f[O(1580)](this, C, N, M, R);
    }
  }
  var u = r.toHash([i(2423), "patternProperties", i(635), i(1610), i(2730)]);
  function f(R, P, C, O) {
    var j = i;
    if (R[j(1123)] = R[j(1123)] || "", R[j(1123)][j(771)](0, 1) == "/") {
      for (var M = R[j(1123)][j(2432)]("/"), N = 1; N < M[j(1027)]; N++) {
        var q = M[N];
        if (q) {
          if (q = r[j(877)](q), C = C[q], C === void 0) break;
          var $;
          if (!u[q] && ($ = this._getId(C), $ && (P = F(P, $)), C.$ref)) {
            var U = F(P, C[j(814)]), V = o[j(1580)](this, O, U);
            V && (C = V.schema, O = V[j(2206)], P = V[j(1870)]);
          }
        }
      }
      if (C !== void 0 && C !== O[j(1303)]) return { schema: C, root: O, baseId: P };
    }
  }
  var d = r[i(1871)]([i(2122), i(1533), i(1811), "maxLength", "minLength", i(1286), i(2717), i(455), i(2251), "maximum", i(714), i(2635), "multipleOf", i(1058), i(635)]);
  function l(R, P) {
    if (P === !1) return !1;
    if (P === void 0 || P === !0) return v(R);
    if (P) return h(R) <= P;
  }
  function v(R) {
    var P = i, C;
    if (Array[P(710)](R)) {
      for (var O = 0; O < R[P(1027)]; O++)
        if (C = R[O], typeof C == "object" && !v(C)) return !1;
    } else for (var j in R)
      if (j == P(814) || (C = R[j], typeof C == P(644) && !v(C))) return !1;
    return !0;
  }
  function h(R) {
    var P = i, C = 0, O;
    if (Array[P(710)](R)) {
      for (var j = 0; j < R[P(1027)]; j++)
        if (O = R[j], typeof O == P(644) && (C += h(O)), C == 1 / 0) return 1 / 0;
    } else for (var M in R) {
      if (M == P(814)) return 1 / 0;
      if (d[M]) C++;
      else if (O = R[M], typeof O == P(644) && (C += h(O) + 1), C == 1 / 0) return 1 / 0;
    }
    return C;
  }
  function m(R, P) {
    P !== !1 && (R = k(R));
    var C = x.parse(R);
    return y(C);
  }
  function y(R) {
    var P = i;
    return x[P(1464)](R)[P(2432)]("#")[0] + "#";
  }
  var w = /#\/?$/;
  function k(R) {
    var P = i;
    return R ? R[P(1024)](w, "") : "";
  }
  function F(R, P) {
    var C = i;
    return P = k(P), x[C(639)](R, P);
  }
  function T(R) {
    var P = i, C = k(this[P(2698)](R)), O = { "": C }, j = { "": m(C, !1) }, M = {}, N = this;
    return a(R, { allKeys: !0 }, function(q, $, U, V, J, c0, u0) {
      var d0 = P;
      if ($ !== "") {
        var o0 = N[d0(2698)](q), l0 = O[V], S0 = j[V] + "/" + J;
        if (u0 !== void 0 && (S0 += "/" + (typeof u0 == d0(2479) ? u0 : r.escapeFragment(u0))), typeof o0 == d0(1278)) {
          o0 = l0 = k(l0 ? x[d0(639)](l0, o0) : o0);
          var y0 = N[d0(1960)][o0];
          if (typeof y0 == d0(1278) && (y0 = N[d0(1960)][y0]), y0 && y0[d0(1303)]) {
            if (!t(q, y0.schema)) throw new Error(d0(2728) + o0 + d0(1293));
          } else if (o0 != k(S0))
            if (o0[0] == "#") {
              if (M[o0] && !t(q, M[o0])) throw new Error(d0(2728) + o0 + d0(1293));
              M[o0] = q;
            } else N[d0(1960)][o0] = S0;
        }
        O[$] = l0, j[$] = S0;
      }
    }), M;
  }
  return Yx;
}
var _x, oa;
function ur() {
  var i = s;
  if (oa) return _x;
  oa = 1;
  var x = cr();
  _x = { Validation: e(t), MissingRef: e(r) };
  function t(a) {
    var n = K;
    this[n(1912)] = n(930), this.errors = a, this[n(1467)] = this[n(1287)] = !0;
  }
  r[i(1912)] = function(a, n) {
    return "can't resolve reference " + n + " from id " + a;
  };
  function r(a, n, o) {
    var c = i;
    this.message = o || r[c(1912)](a, n), this.missingRef = x[c(828)](a, n), this[c(2140)] = x[c(1670)](x.fullPath(this[c(774)]));
  }
  function e(a) {
    var n = i;
    return a[n(1745)] = Object[n(1640)](Error[n(1745)]), a[n(1745)][n(2611)] = a, a;
  }
  return _x;
}
function Fx() {
  var i = ["删除当前", "   var err =   ", "Uncaught error in notification handler: ", "ZodSymbol", "key", "messagePoster", " = e.errors; else throw e; } ", "cancel", "文件未找到: {{path}}", "ZodRecord", "lazycreate", "Sending image...", "#CC9933", "newdoc_canvas", "_parse", " = [", "userinfo", "lastPongReceived", "issues", "sampling", "nodeId", "{0,6}", ".length > ", "level", ".schema = ", "ConnectionClosed", "augment", "按住 Shift 键以新文档方式导入", "ActionSet {{0}} 未找到", "boolean", "ordinal", "createStreamState", "?\\]?$", " } else {  for (var ", "emergency", "loadNamespaces", "assertNotificationCapability", "parse", "filter", "#CCCC00", "getCanonicalLocales", ") { ", "reference", "under", " = null; ", "'/' + ", "String must contain ", "  )  ", "race", "idx", "addPostProcessor", "mountedEndpoints", "  } ", "getPathExpr", "removeSchema", "removeNotificationHandler", "pst", "addCached", "layer not found {0}", " , schema: false , parentSchema: validate.schema", "fallback", "query", "_getId", " = false; if (e instanceof ValidationError) ", "_getType", "__internal_requestInitialState_", "getSuffixes", "Logout", "nodeIndexes", "detail", "It seems you are nesting recursively key: ", " = ", "Please login to use the plugin", "skipOnVariables", "stats", " === ", " = true;  ", "local", "strip", "elicitInput", "Please select the position to send image", "minProperties", "removeNamespaces", " , params: { failingKeyword: ", "not", "reloadResources", "capacity", "$comment", "_opts", "comfyAPI", ".validate;", "#66CC33", 'id "', "当前图层", "definitions", "ValidationError", " ? await ", "Clear guide frame", "Plugin window focused required to use keyboard shortcut", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "交集或缩放目标为空", " not found on node ", "graph", "ZodUndefined", ") {   ", "清空所有", "toJSON", "optionsMap", "如何获取APIKey", "getItem", "skipKeywords", "Please select the image to get", "arb", "Current layer bounds", " ) ", "dataType", "multipleOf", "_onprogress", "Set as Current Selection", "DEBUG", "sourceType", " , params: { passingSchemas: ", "Expected ", "saveMissingTo", " = false; else {", "批次数量", "~validate", "enforceStrictCapabilities", "useDefaults", "暂无图片", "isBase64", "; var ", "onTimeout", "zh-CN", "Task cancel failed: {{error}}", "_schemas", "languages", "Send to PS", "await ", "创建操作需要矩形坐标", "full", "promise", "toStringTag", "state", "resourceName", "schema $id ignored", "No images", " -> ", "requestsIntercepted", "ZodDate", "ZodAny", "Server does not support notifying of tool list changes (required for ", "debug", "substr", "partial", "failedLoading", "too_big", "', depsCount: ", "concat", "contextSeparator", "Creating task...", " ) || ", " for interpolating ", "Select AI Service Provider", "spa", "macro", "Failed to send response: ", "Failed to request initial state for ", "indexOf", "Loading...", " = false;for (var ", "Server does not support prompts (required for ", " , params: { ref: '", "stopSequence", ", received ", "停止自动运行", "ZodNull", "服务不可用 (503)", "Request timed out", " = true; ", "+Shift 调整更多选项；Ctrl 单次获取。", "_timeoutInfo", "_def", "translation", "prepend", "startsWith", " , message: 'should be equal to one of the allowed values' ", "Send all", "exec", "messages", "setProperty", "missing", "] = ", "startHeartbeat", "_key", "Running for {{duration}} secs, {{message}}", " == errors) { ", "nan", "custom keyword definition is invalid: ", "[vV]", "returnEmptyString", "Failed to request initial states after connecting to ", "nest", ";  ", "from", "requestId", "queues", "refs", " var schema", "_onnotification", "_clientVersion", "])) { ", "加载中...", "click", "pending", "formatLanguageCode", "图层 {{0}} 不是一个组", "file://", "Unknown message type: ", '[\\"]', "env", "formatParams", "882DsSjhw", "ZodPipeline", "meta", "sdppp_widgetable_title", "NOT_FRAGMENT", " , message: 'should NOT have ", "returnDetails", "keyword", "maxItems", ") vErrors.length = ", "utils", "OpenAI/Google format API", "originalError", " var ", "ZodTuple", "messageHandlers", "invalid_date", "创建图层失败", "ids", "audio", "#/definitions/nonNegativeIntegerDefault0", "#0099CC", "Action {{0}} 未找到", "abh", "reset=false but needsReset: ", "Auto run after canvas change", "reduce", "unshift", "找不到文档: {{0}}", "console", "meta-schema not available", "nss", "Fit to selection", "[\\+\\-\\.]", "lastIndex", ".additionalItems", "Validation failed but no issues detected.", "Canvas", "请选择AI服务", "[j])) { ", "Images Per Batch", "Internal error", "strict", "Server does not support logging (required for ", "exactly equal to ", "posterIdentifier", "isOptional", '" ignored in schema at path "', "jsonStringifyReplacer", ".else", "#3366CC", "coerce", "at most", "invalid-input", "getTime", "arrayToEnum", " , params: { type: '", "requestsHandled", "unrecognized_keys", "Edge references unknown source node: ", " != 'number' || ", "#6600CC", "removeEventListener", "node", "description", "joinValues", "cidr", "logging", "queue_remaining", "Channel connecting...", "dir", "Server does not support notifying of prompt list changes (required for ", "customRule", "implements", "Invalid date", "URI can not be parsed.", "[0]; ", "当前任务数:", "Limit image size", "rules", " === true) ? ", "fallbackNS", "dev", "nodes", "]; }  ", "Sending all images...", "  }  ", "processCode", "Base URL", "diff", "action", "assertCapabilityForMethod", "includes", "1282600JcyWZX", "Values", "__esModule", "_cache", "destroy", "exports", "waiting for queue prompt", "streamRequestorHandlers", "Illegal input >= 0x80 (not a basic code point)", "not_multiple_of", "strictNumbers", "]); ", "statements", "prompts/list", ".errors; else vErrors = vErrors.concat(", "abs", "def", ".validateSchema(", "roots/list", "resources/templates/list", "color: inherit", "keyof", "color: ", "extract", "; } catch (e) { ", "checks", "initAsync", "http://json-schema.org/draft-07/schema", "queue", " = 'else'; ", " when property ", "Current Layer", "parseMissingKeyHandler", "store:update:", "RequestTimeout", "process", "Google Gemini Image Generator", "executeHandlerAsync", "assertNever", "{4}", "Intersect or scaledDesire is null", "jsonPointers", "_errorDataPathProperty", "defaultMeta", "some", "{0,2}", "Invalid forward path for proxy action", " == 'string' && ", "SDPPP may not be installed or version mismatch (404)", "req_", "else", "protocol", "assertCanSetRequestHandler", "loaded namespace ", "#00CCFF", "_fragments", "workflow-run", "#/definitions/stringArray", "nid", "INTERCEPTOR_ERROR", " , message: 'should NOT be valid' ", "getConnectionInfo", "removeRequestHandler", "strictKeywords", "offset", "jsonrpc", " = errors;var ", "Outgoing message:", "joinArrays", "getNodeIds", "off", "convert widget {0} failed:", "dataLevel", " reference.", "cuid", "getConnectedNodeIds", " = +", " , message: 'should NOT be ", "A discriminator value for key `", ".call(this, ", "ZodIntersection", "从 画布 获取遮罩", "{0,1}", "observers", "return", "formatArgs", "self", "continueOnInterceptorError", "formats", "uxpHost", "expected", "UUID is not valid.", "Set as Current Layer", "getCurrentNodeId", "Remote", "enum", " division", "execution_interrupted", "refVal", "resolve", "Sending...", " = false; ", " else { ", "interceptor_error", "object", "canReachThroughConnectedNodes", "Please select AI service", "keyType", "selectColor", " { keyword: '", "NOT_PATH", "/%2F", "minValue", "Comfy Manager未安装，无法重启", "keyPrefix", "isSupportedCode", "No connection available for node ", "_errors", "errorDataPath", " var i = ", "toUpperCase", "Workflow stopped by user", "multipleOfPrecision", "getNeighbors", "close", "Paste your model name", " === undefined || ", "thisServer", " , message: 'should have ", "maxTotalTimeout", "sam", " has duplicate value ", "not-basic", "put", "setOutgoingNotificationInterceptor", "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", "precheck", "initialized", "找不到图层: {{0}}", "isEmpty", "endTurn", " = !(false ", "NOT_HOST", "disconnect", "exclIsNumber", " === null || (", "获取图层信息", "lng", "画布范围", "nsSeparator", "/else", "should NOT have additional properties", "Elicitation response content does not match requested schema: ", "点此获取RunningHub APIKey", "保存并立即执行", "按选区裁剪", "++) { var ", "null", ".then", " is present' ", "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "+Alt 按选区裁剪", "ZodEffects", "registerHandler", "获取 API Key", "[\\:\\/\\?\\#\\[\\]\\@]", "isNullable", "getDefinition", "datetime", " = false; break outer; } } } ", "isArray", "[object Function]", "[^\\%\\:]", "schema should be object or boolean", "minimum", "execution_start", " , message: 'property name \\'", "isValidLookup", ", deps: '", "[\\/\\?]", "apc", "Uploading...", "languageChanged", "user", " === false || ", "No crop", "Node definition not found for current node ", " ( ", "received", "var division", "contextualErrorMap", ") break; }  ", "workflows/", "getPluralFormsOfKey", "jpr", "ctx", "2024-11-05", "[\\:\\@\\/\\?]", "提示词", " } else if ( ", "IPV6ADDRESS", "postProcessor", "pipe", "maxSize", "Core schema meta-schema", " = errors; var ", "async ", "pluralRulesCache", "#0000FF", "sdppp-heartbeat", "roots", "defaultVariables", "#CCCC33", "rejectImage", "setOutgoingRequestInterceptor", "var pattern", "'else'", "exclude", "sdppp/streamRequest", "_cleanupTimeout", "arq", "nullish", "_onrequest", "getKeyword", "nodeTransports", "hasOutgoingRequestInterceptor", "yud", "cardinal", "(?:", "getHandler", "{2}", "slice", "Batch Count", "async schema in sync schema", "missingRef", "graphInstance", "handle", "initializeNodeStores", "Tutorial", "transport", "Set as Canvas", "getBestMatchFromCodes", "extensionManager", "Invalid action: {{action}}", "reconnecting", "valueSchema", "initializedStoreOnce", "cimode", "false", "keywords", "&amp;", "_limitLength", "safeParse", "Server does not support sampling (required for ", "限制图片尺寸", "notifications/resources/list_changed", "ZodNever", "Request handler failed: ", "setComfyOrgAPIKey", "#CC6600", "aec", "preload", "map", "Failed to check workflow state changes:", " var err = ", " !== undefined && typeof ", " to ", "2025-03-26", ".test(", "_pendingDebouncedNotifications", "获取图层 {{0}} 的内容", "Note", "#FF6633", "createTemporary", "$ref", "one", "endsWith", "start", " failed", "keySeparator", "按回车打开应用： {{appName}}", "[A-Fa-f]", "false schema", "needsPlural", ".type", "Document {{0}} not found", " if (true) {", "appendNamespaceToCIMode", "url", "Confirm", "app", "_validateKeyword", " || Object.keys(", " }  ", "dataVar", "Your powerful node-based workflow engine", "$t(", "pluralResolver", '" already exists', "dirty", "Waiting in queue", "realTransport", "pbu", "auto", "addUsedSchema", " === 1) ", "authInfo", "compiling", "invalid_return_type", " = '' + ", "freeze", "sdppp/abort", "isConnected", "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "ComfyUI loading...", "more", "http://json-schema.org/schema", "usedLng", "Get mask from Canvas", " } ", "removeMiddleware", "#99CC00", " , params: { multipleOf: ", "#0033CC", "nestingSuffix", "DateTimeFormat", "useCustomRule", "_oninitialize", "Edge references unknown target node: ", "从 选区 获取遮罩", "greater than or equal to ", "_getOrReturnCtx", "Stop and cancel all", "coerced", "addIssues", ".dataPath = (dataPath || '') + ", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "unescapeFragment", "#6633CC", "Failed to get result: {{error}}", "_transport", "notifications/tools/list_changed", "objectValues", ") {  var err =   ", "2.0", "RelativeTimeFormat", "content", "interceptorTimeout", " , params: { missingProperty: '", "smartobject", "notification", " for language ", '[\\"\\\\]', "isIP", "自定义AI工作流引擎", "服务器错误 (500)", "_meta", " < ", "asyncIterator", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", " = ''; ", "Create document for preview", "extractFromKey", "extendRefs", 'unknown format "', " } } ", "clearItems", "pop", "yhd", "Input Setting", "Options", "activeWorkflow", " = equal(", "未实现 (501)", "发送到PS", "errs__", "listRoots", "parsedType", "broadcast", "detection", "#3366FF", "Prompt", "[A-Za-z0-9\\-\\.\\_\\~", "ZodError", "', missingProperty: '", "res", "default is ignored for: ", "cacheUserLanguage", "Merge group failed", "supportedLngs", "validation failed", "image.document.new", "&quot;", "自动同步: 关闭", "setNotificationHandler", "contains", "); if (", "info", "_onresponse", "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "_loadingSchemas", "weeks", "run", "queueLoad", "isFinite", "cacheKey", "创建参考线框架", "peo", "addKeyword", "uiWeight", "broadcastManager", "Date must be ", "timeout", "resetRegExp", " , params: { pattern:  ", "toLowerCase", "[^\\%]", "remove", "sendStreamRequestorRequest", " , schema: ", "bind", "当前图层范围", " + ']'", "schema id must be string", "humanize", "Synchronous parse encountered promise.", ` + '" schema' `, ", limit: ", "(new RegExp(", "createInstance", "#33CC33", "inclusive", " not found in graph definition", "Get content of layer {{0}}", "schemaPath", "status", "Host's domain name can not be converted to ", "setupTransportHandlers", "Exclude selection", "Email address's domain name can not be converted to ", " === '' ", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "hasEdge", 'Invalid input: must include "', "data", "equal", "widgetable", "HeartbeatTimeoutError", "Client does not support listing roots (required for ", "createGlobalDispatcherForType", "RH Coins:", "findPathInternal", "removeAdditional", " } else { ", "mergeShapes", "isBase64url", "refine", "additionalProperties", "$schema must be a string", "_clientCapabilities", "lastIndexOf", " | ", "hasPath", ".length == 1) { ", "comfy_api_key", "date-time", "title", "statusText", "$data", "Request timeout (408)", "__proxy_forward", "parseAsync", "document {0} not found", "#3333FF", "metaSchema", "auth.guest_login_success", "]; return false; ", ") { errors = ", "nestingPrefix", "aborted", "push", "Run Photoshop Action", "/properties", "运行了 {{duration}} 秒，{{message}}", "replace", "prs", "[object Number]", "length", "getRule", "rootData", "fromCodePoint", "fcName", "waitingReads", "fast", "invalid_literal", "deprecate", "#FF6600", "addResourceBundle", "exception_message", "isNANOID", "Internal ZodObject error: invalid unknownKeys value.", " , params: { limit: ", "clientInfo", "notifications/initialized", "createErrors", " if (Array.isArray(", "Notification handler failed for ", "Generating...", "[MCPMiddleware]", "postMessage", "Gateway error (502)", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "requestedSchema", "objectKeys", '" is used in schema at path "', "capabilities", "getScriptPartFromCode", " if (!(await ", "required", "mailto", "prompt_id", "long", "; else if (", "test", ` , message: 'should match format "`, " if (true) { ", "maxParallelReads", "无效边界: 左边必须小于右边，上边必须小于下边", ") > 1e-", ") {  for (var ", "language", "const", "translator", "prepareLoading", "rejecting language code not found in supportedLngs: ", " throw new ValidationError([", "workflow", "&lt;", "getNode", "ZodEnum", "ComfyUI server reconnecting", " } else {  errors = ", "_refinement", "actionManager", "flags", "ignore", "ZodBigInt", "escapeFragment", "isURL", "actionHandlers", "Server error (500)", "Selection", " != 'number') { ", "node_id", "email", "addMessageEventListener", "Validation", "changeTracker", "jwt", " === 0 || ", " = vErrors[", "ZodBranded", "MIN_SAFE_INTEGER", "regexpUnescape", "海量模型，稳定服务", "Unknown", "api/view?type=", "dataPathArr", "alg", "method", "Invalid attempt to destructure non-iterable instance", " != 'string') || ", "无法将文件作为文档打开: {{path}}", "maxRetries", "; else vErrors = null; }", " === null) ", "opts", "Input Image", " cannot be resolved", "exception", "if ( ", "[0-5]\\d", "allErrors", "fragment", "floor", "date", "Schema ", "valueType", "fewer", " , message: 'boolean schema is false' ", "documentElement", "refVal[", 'no schema with key or ref "', "#0000CC", "key '", "notificationsIntercepted", "transform", " + ", "omit", " = false;  ", "invalid_enum_value", "Enter your Replicate API Key", "MissingRefError", "addFormat", "='; ", "verbose", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "请求超时 (408)", "mode", "[^]", '$ref: validation keywords used in schema at path "', "appendNamespaceToMissingKey", " , rootData )  ", "Array.isArray(", "step", "integer", "Failed to send cancellation: ", "mesh:workflow", "NOT_PATH_NOSCHEME", "removeMessageEventListener", "ulid", " = validate.schema", "domainHost", "getAllReachableNodes", "ZodOptional", "urn:uuid", "Invalid enum value. Expected ", "Task cancelled", " == 'boolean' || ", "Notification interceptor failed for ", "assertIs", "_error", "Failed to open file as document: {{path}}", " , message: 'should be ", "   ", " var isAdditional", "_limitProperties", "useColors", "locale", "adf", "next", "getDataByLanguage", "load", "hrs", "#FF0000", "too_small", "toQuotedString", "Hold Shift key to import as new document", "xmn", "extra", "createAsyncIterator", "Create guide frame", ") break; ", "Not a ZodError: ", "isInitializing", "NumberFormat", "discriminator", " ? '", "Save", " , params: { property: '", "getClientVersion", "requestInfo", "{5}", "正在上传...", "生成中", "interpolationkey", "port", 'custom keyword "', "catchValue", "No Intl support, please use an Intl polyfill!", "4417110rZoPwA", "toLoad", "interpolate", "keySchema", "interrupt", "values", "OpenAI/Google 格式API", "Auto send disabled", "protocolVersion", "; } ", "快捷键选图功能仅登陆后可用", "#0099FF", "' } ", `"' `, "separator", "isLanguageChangingTo", "Converting circular structure to JSON", "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "zero", "iri", "valueOf", "All", "tried", "translate", "MethodNotFound", "count", "正向裁剪", "如何获取APIKey和API Secret", "输入设置", "ruleErr", "emoji", "Invalid JSON-pointer: ", "Error in broadcast handler for ", "Save and run immediately", "handleIncomingRequest", "edges", "自动同步: 开启", "PCT_ENCODED", ") || ", "&subfolder=", "isInteger", "var ", "Refresh workflow list", ".validate; } if (  ", "var default", "Get image from Current Layer", "ZodNumber", "Store not found for ", "unsetOutgoingNotificationInterceptor", "range", "/*# sourceURL=", "Gateway timeout (504)", "ZodNaN", "has", "processors", "overloadTranslationOptionHandler", "_unknown", "stateUpdate", "now", "#FFCC33", "请登陆后使用插件", "组 {{0}} 中没有第一个相关图层", "清除参考线框架", "请选择要发送图像的位置", "[\\uE000-\\uF8FF]", ") && ", "charAt", "cache", "string", "outgoingRequestInterceptors", "overflow", "isOpen", "画布变动后自动运行", "Get mask from Selection", " = true; } else { ", "text", "maxProperties", "validation", "size", " && !(", "toUnicode", "interpolation", "请选择要获取的遮罩", '" resolves to more than one schema', "=== 选项 ===", "#00CC99", "#CC33FF", "[^\\%\\/\\:\\@]", "ZodDefault", "Failed to check workflow changeTracker state:", "formErrors", "不支持非文本图层: {{0}}", "Already connected to node ", "schema", "exclusiveMaximum", "default is ignored in the schema root", "executed", " , params: { keyword: '", "网关超时 (504)", "handleIncomingMessage", "base64url", "setRequestHandler", "minLength", "isClone", "checkDataType", " not found for node ", "ZodFunction", "Success", "sourceNodeId", "#3399FF", "host", "sdppp/broadcast", "#CC0066", "float", "connectionManager", "pluralCategories", " && !", "wss", " !== parseInt(division", "[^\\%\\/\\@]", "Invalid proxy forwarding: current node ", ".validate", "Get API Key", "addSchema", "App ID:", "resolvedOptions", ".call( ", "Number must be ", "Timeout", "toString", "errToObj", "widgets", "8326380tXzUip", "currentNodeId", " = new RegExp(", "ping", "$id", ".errors", "_processInputParams", "任务已取消", "ZodObject", " } }", "' + ", "Workflow not found", "modules", " , schema: validate.schema", "Store not found for current node ", "removed", " if (schema", "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "origin", "getRunningRequestsCount", "regExpMap", "defaultValue", "Not connected", "same-document", ` , message: 'should pass "`, "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ", " ) {   ", "passthrough", "sourceCode", "invalid_string", "join", " , message: 'should be multiple of ", "没有活动文档", " validate.errors = vErrors; return false; ", "Gemini 2.5 Flash Image", "#9933FF", "createWithPreprocess", "isTop", "invalid_arguments", " - no connection available", "options.loadSchema should be a function", "symbol", "compositeRule", " , data: ", "#3300FF", "exactly", "2.1.0", " else if (", "toResolveHierarchy", "_addSchema", "assert", "/required", "connectedNodes", "__connection_established", ` if (typeof item == 'string') item = '"' + item; `, "getNodeTitle", "{0,5}", "sdppp 选中图层", ".data = ", "Invalid ", "刷新工作流列表", "obj", " && self._opts.unknownFormats.indexOf(", "saveMissing", "abv", "Enum", "resources", "right", "ckb", "init: no languageDetector is used and no lng is defined", "输入图像", "Task incomplete, current status: {{status}}", " = customRules[", "质量{{percent}}%", "invalid_union_discriminator", "escapeQuotes", "ComfyUI加载中...", "[0-9A-Fa-f]", "Node ", "isCUID2", ").length ", "initialize", '" (see option extendRefs)', " self._opts.$comment(", "Show sent images", "{6}", "setupNodeBindings", "  var err =   ", "entries", "=0; ", "AbortSignal is already aborted", "Keyword ", "_limitItems", "toASCII", "schemaHasRules", "_instructions", "items", "_onclose", "output", "missingKeyHandler", " */", " return errors === 0;       ", "setDefaultNamespace", "Outgoing notification interceptor failed: ", "sdppp/streamResponse", "ssh", "log", " = typeof ", " !== undefined ", "catchall", "#99CC33", "isInitialized", "ifClause", "forEach", "properties ", " after ", "ZodSet", "NOT_SCHEME", "abortRequest", "\\' is invalid' ", "isCIDR", "minSize", "serialize", "del", "_requestHandlers", "ajv", "secure", "]] === undefined ", " === null || ", " for (var ", "applyPostProcessor", "Required", "适配至画布", " = refVal[", "_parseAsync", " ( ( ", "formData", "default", "kPanelBrightnessMediumGray", "ZodLiteral", "setKey", "name", "workflowManager", "ucs2length", "作为智能对象导入", " , params: { additionalProperty: '", "=== Options ===", "ZodReadonly", "source", "isNotification", "nodeStores", "hours", "hasNotificationHandler", "postProcess", "rest", "mcp-mesh-router", " if (rootData === undefined) rootData = data; ", "{3}", "readonly", "[0-9]", 'did not save key "', "^\\[?(", "mergeObjectAsync", "subfolder", " , message: 'should NOT have more than ", "设为当前选区", "_getCached", "#CC3333", "validateSchema", "How to get APIKey and API Secret", "clone", "Press Enter to open app: {{appName}}", "passContext", "-arab", "dataProperties", "Task execution failed: {{error}}", "Select layer", "async format in sync schema", "api", "mergeObjectSync", "arz", " === 'true' || ", "men", ") continue; ", "over", "reload", "completion/complete", " must be number", "Auto Sync: off", "从 当前图层 获取图像", "removeCatch", "format", "params", "isTime", "ary", " || ! Object.prototype.hasOwnProperty.call(", "select", "') ", "workflows", " , params: { allowedValues: schema", "[object RegExp]", "context", "(.+?)", "namespace", 'Invalid input: must start with "', ") {  ", "reset", "#FF3333", "4874872lIpxvS", "value", "skips", "_formats", "正在发送所有图片...", "1602589LzXrXq", "\\$&", "ignoreJSONStructure", ` , message: 'should match pattern "`, "createMessage", "en-US", "lte", "errorsText", "elicitation", "#3333CC", "ZodCatch", "Invalid boundary: left must be less than right, top must be less than bottom", "cancelled", "languageDetector", " , message: '", " (async", "initImmediate", "round", "退出登录", " } if (", ".length == 0) {", "sdppp_workflow_alias", " , ", "getValidEnumValues", "openWorkflow: ", "call", "Invalid literal value, expected ", "options", "isTransportReady", "undefined", "任务未完成，当前状态: {{status}}", "Current Tasks:", " via punycode: ", "connected", "#/definitions/nonNegativeInteger", "sampling/createMessage", "is a required property", "writeOnly", "unwrap", "ListFormat", "setupGraphStoreSync", "Import as Smart Object", "~standard", "3rdParty", "MCP error ", "http", "[^0-9]", "__cycle__", "listenMessageCallback", "onerror", "selection", "fullPath", "粘贴你的模型名称", "loadLanguages", " var errs_", "dependencies", "Module", "urn", "ZodNativeEnum", "min", "catch", "void", "无效操作: {{action}}", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "isSafeInteger", "elicitation/create", "Desire bounds is null", "get_layer_info: layer_identify required", "resourceStore", "negative", " ) { ", "arrayKeywords", "resource", `" won't get resolved as namespace "`, "ZodPromise", "requestInitialStateForNode", "parent schema must have all required keywords: ", " === undefined) ", "Unexpected dot segment condition", "&#39;", "photoshop.invalid_boundary_type", "setResolvedLanguage", "request", "parentDataProperty", "适配至选区", "create", "less than", " throw new ValidationError(vErrors); ", "]; var ", "iterator", "payload", "[BroadcastManager] Error forwarding broadcast:", "closeHandlers", "readingCalls", "#CC33CC", "prd", "heartbeatInterval", " , schemaPath: ", "setupStreamRequestHandler", "./api/manager/reboot", "maxDate", ") { var op", "addLookupKeys", "combo", ".dataPath === undefined) ", "getSchema", ".async; ", "toNode", "PS图片", "#FF00CC", " === 'false' || ", "userDefinedKeySeparator", "; }", "$el", "notifications/prompts/list_changed", "normalizeId", "element", "生成中...", "用户名: {{username}}", "#3399CC", " element(s)", "all", "isNaN", "_exclusiveLimit", "connect", "'then'", "hasOutgoingNotificationInterceptor", "HTTP URIs must have a host.", "Generating", "registerStreamRequestorHandler", "connecting", "images", " !== undefined)", "resolveComponents", "网关错误 (502)", "newlayer_canvas", "instructions", "fail", "finished", "custom", "comfy side transport.onerror", " if (! ", "` could not be extracted from all schema options", "使用教程", "getProtocol", ".additionalProperties", "Cannot forward to node ", "?\\:\\:", "ZodArray", "RULES", "Your Workflows", "charCodeAt", "[A-Za-z]", "获取结果失败: {{error}}", "%[EFef]", " = null;", "]; ", "finite", "item", "critical", " == ", "masks", "prompts/get", "maxTokens", "validate.schema", "邮箱: {{email}}", "Quality {{percent}}%", "removeKeyword", ".patternProperties", "ZodString", "resource_link", "Node definition not found for ", "rtl", " validate.errors = vErrors; ", "added", "addMetaSchema", "unsetNotificationHandler", "[BroadcastManager] Error forwarding ", "syncStoresToNewConnection", "comfy", "exclusiveMinimum", ", (dataPath || '')", "kind", " than ", "No edge defined from ", "there was no format function for ", "#9900CC", "maxReplaces", "max", "segment", "prototype", "loopRequired", "abort", "PS shortcuts may be blocked by plugin...", "code", "addEventListener", "missingKey", "never", "languageUtils", "mesh", "tools/call", "unsetRequestHandler", "every", "usedNS", " == +", "missed to resolve ", "$async", "ZodMap", "partialBundledLanguages", "#/definitions/simpleTypes", " var vErrors = null; ", '"; } ', "新图层", "schemaUnknownRules", "#33CC99", "AUTO", "assertRequestHandlerCapability", "./api/userdata/workflows%2F.index.json", "onclose", "useDefault", "xn--", "substring", "Invalid name: {{0}}", "strictCreate", " ? ", "isCUID", "describe", " == 'string' || ", "property ", "languageOnly", "responseSchema", "milliseconds", "no plural rule found for: ", "Auto repick from PS", "subject", "<errors; ", "should have required property \\'", " }; return validate;", "strictDefaults", "auz", "getConnectionCount", "pendingCount", "none", "implementAction", "不裁剪", "setupStreamResponseHandler", "result", "getUsedParamsDetails", "sdppp_assets", "getResource", "#/definitions/schemaArray", "++) { if (", "addMiddleware", " !== undefined) {  ", " var itemIndices = {}, item; for (;i--;) { var item = ", "#66CC00", "pattern", "Failed to create document from file", " levels up, current level is ", "outgoingNotificationInterceptors", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "runningRequests", "Open images from file", "_getInvalidInput", "Layer not found: {{0}}", "#CC0000", "assertEqual", "uri-reference", "optional", "_path", "usedKey", "从 当前图层 获取遮罩", "timeoutId", "调整预览文档尺寸", "greater than ", "Negative Crop", " = false; else { ", "initialState", "++) { ", "自动填入画布关闭", "onmessage", "handleDirectProxyForward", ", validate.root.schema);", "Gemini 2.5 Flash 图像", " var missing", "copy", "missingInterpolationHandler", "Server does not support resources (required for ", "transports", "重启ComfyUI失败", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", " , parentSchema: validate.schema", "]) ", "updateKey", "splice", "implementInternalAction", "点我恢复", "util", " = true; if (", "请输入您的RunningHub API Key", "_resetTimeout", "Exclude current layer", "AI使用的区域与最大尺寸控制", " , message: 'should match exactly one schema in oneOf' ", "Method not found", "languageChanging", "findIndex", "=startErrs", "stream", "resources/read", "checkState", "schema is invalid: ", "prompts", "comfyAPI is not initialized, maybe comfyUI is too old", "names", "baseId", "toHash", "unescapePrefix", "errs_", " == errors) {", "schema id ignored", "Refresh", "([+-]\\d{2}:?\\d{2})", "setupStreamProtocolHandlers", "创建文档", " + '\\']'", "Current layer bounds only", "missingKeyNoValueFallbackToKey", " if (!", " = true; if ( ", "reverse", "Boundary", "handleIncomingNotification", "CurLayer", " Object.keys(", "cmp", "resolveImage", "order", "cloneInstance", " , params: { i: i, j: j } ", "async schema referenced by sync schema", "365350wnAUIN", "cuid2", "findPath", '" as the namespace "', "unescapeComponent", "requestIdSeq", "Clear", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "property", "#CC0099", "usedParams", "getData", "nonpositive", "emit", "No errors", "hasResourceBundle", "message", "getDefaultValuesFromSchema", "inlineRef", " delete ", "heartbeatTimer", "Maximum total timeout exceeded", "Uploading, if the image too large, may be lag...", "###", "exactUsedKey", "exactLength", "loadOne", "http://json-schema.org/draft-07/schema#", "Error", "Client does not support elicitation (required for ", "sqr", "async", "other", "[ ]*{", "Layer not found {{0}}", "currency", "escapeValue", "Click to get RunningHub APIKey", "mountedTransports", "addNamespaces", "; if (", "shu", "duration", "minute", "nestingRegexp", "tolerant", "logger must implement log, warn and error methods", "second", "image", "alwaysFormat", "accessing an object - but returnObjects options is not enabled!", "absolute", "https", "isFinite(", "oninitialized", "{1,4}", "positive", " console.log(", "&#x2F;", "[\\.]", "setLimit", "allKeys", "parseInt", ") ) ", "_refs", " = true , j; if (i > 1) { ", "schemas", "scheme", "saveWorkflow", "仅选区范围", "setupGeneralBroadcastHandler", ")) ", "%c ", "apply", "varReplace", "[GraphStoreSynchronizer] Error broadcasting state update for ", "; if (vErrors !== null) { if (", "accept", "types", "跳转到最后一个", "defaults", "gte", "hasLanguageSomeTranslations", "comfy-user", "ZodNullable", "[\\:]", " else {   ", "Action ", "definition", "uxp", "getRegExp", "ZodDiscriminatedUnion", "add", "i18next:", " , params: { allowedValue: schema", "Client does not support sampling (required for ", "i18nFormat", "getOwnPropertyNames", "_requestMessageId", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "time", "ars", "headers", "validate", "regex", "getTransport", "shorter", "failed", "buildAdjacencyList", "maximum", "sdppp/directRequest", "' && !(typeof ", "loadResources", "allOf", "Generate", '" for languages "', "forkResourceStore", "addResource", " = errors;  ", "_addCheck", "json", ";if (", "_onerror", "Intersection results could not be merged", "namespaces", "cleanup", "index", "var missing", "Get selection failed", "Auto send enabled", "unicodeSupport", "getProperty", ") - division", "InternalError", "getSuffix", "cycles", "_compile", "Cannot register capabilities after connecting to transport", "formatSeparator", "setState", "hasOwnProperty", "No handler for streamRequestor: ", "sd-ppp-static/sdppp_images/", "_capabilities", "__internal_", "assistant", "isULID", "regexp", "ESCAPE", "widgetableStructure", "execution_error", "validateHandlerType", ".type || 'string'; if (", "init", "defaultNS", "finally", "array", "Graph must have at least one node", "New Layer", "]] !== undefined ", "停止并取消全部", " ms", "curlayer_selection", "  errors = ", "Close", "hasDefaultValue", "pes", "year", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "propsKeywords", "safe", "zod", " not found for current node ", "validateKeyword", '"number"', "unicode", " = false; else if (", "valid", "__origin", "getConnectionToNodeInternal", "out", "lngs", "getHandlerTypes", "postProcessPassResolved", "Unicode", "Invalid input", "label", "flatten", " != 'boolean' && ", "Create document failed", "[\\:\\@]", "and", "Email: {{email}}", "Save all", "tools", "empty", "__proto__", "after app.queuePrompt errors: ", "extend", "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF", "match", "addIssue", "mergeArray", "errorMap", "enabled", "absolutePath", "maxValue", "%[89A-Fa-f]", "shape", "typ", " , params: { comparison: ", "#FF0099", "notifications/resources/updated", "left", "not_finite", ") ? ", "validateStreamRequestorRequest", "safeParseAsync", "timestamp", " %c", "logger", 'schema with key or id "', "escape", "save", " validate.errors = [", "Failed to open image file: {{error}}", "type", "heartbeatTimeoutTimer", " , (dataPath || '')", "broadcastHandlers", "notice", ")) {  var err =   ", "invalid_intersection_types", " || ", "oneOf", " : ", ") == -1 ", "safeValue", "waiters", "Invalid function return type", "__DEFAULT__", "reason", "function", "errorPath", "missingSchema", "ZodBoolean", "find", "uiLocale", "#9900FF", "Meta-schema for $data reference (JSON Schema extension proposal)", "#0033FF", "_progressHandlers", "patternProperties", " items' ", "regExpQueue", "set", "callback", "token", "openWorkflow", "manuallyExtractDefaults", "InvalidParams", "less than or equal to", "brand", "/then", "execution_success", "outputType", "streamRequest", "setInterval", "currentOnly", "addRule", "getPath", "' , dataPath: (dataPath || '') + ", "minDate", "合并组失败", "Failed to reboot ComfyUI", "photoshop.no_active_layer", "schemaId", "\\%25|\\%(?!", "ayh", "_setupTimeout", "基础 URL", ") { if (vErrors === null) vErrors = ", "prefix", "SCHEMES", "curlayer_canvas", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", ") {   var err =   ", "$schema", "pluralSeparator", "getFixedT", " } } else { ", "ZodUnion", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "#CC3366", "Comfy.userId", "Get pixel of {{0}} failed", "ref/prompt", "_responseHandlers", "getState", "more than", "usePattern", "+Alt reversed mask", "#CC9900", "inlineRefs", "performWorkflowReset: ", "wait", "getResourceBundle", "registerProxyForwardHandler", "Google Gemini 图像生成器", "root.refVal[0]", "root", "val is not a non-empty string or a valid number. val=", "messageQueue", "parent", "unknown", "pathname", "longer", "Action handler ", "         , parentSchema: validate.schema", "/additionalItems", "正向裁剪(Outpaint)", "Selection bounds only", "relativetime", "escapeComponent", "success", "uuid", "resources/unsubscribe", "cleanupConnection", "(typeof ", "actions", "toFixed", "abortAllRequests", ")) { ", "Positive Crop", "registerDirectRequestHandlerGeneric", "loaded", "image.layer.smart_object", ", rootData)  ", "version", "trim", " = true;", " {} ", " != 'number') || ", "Cannot access property/index ", ") ) {   ", "refinement", "#00CC66", "loading namespace ", "Execute", "Empty", "#9933CC", "]; if (", "userDefinedNsSeparator", " = undefined;", " = undefined; ", "minItems", "更多操作", "progress", "withTimeout", " = 0; ", "Error in direct request ", " character(s)", " } }  ", "ajp", "removeItem", "fallbackLng", "Aborted", " % 1)", 'Invalid input: must end with "', "#FF33FF", "Show Preview ({{count}} images)", " = errors;", ") break; } ", "sendLoggingMessage", "#FF3300", " = 'then'; ", "setPrototypeOf", "exact", "Unrecognized key(s) in object: ", " / ", "Save current", " && ( ", "listWorkflows", "warn", "customErrors", "mesh:comfy", "allServers", "schemaHasRulesExcept", " = false , ", "notificationHandlers", " if (", "throwIfAborted", " === undefined ", "heartbeatTimeout", "days", "ParseError", "customRules", "formatter", "插件可能正在拦截 PS 快捷键... ", "style", "sendResourceListChanged", " ucs2length(", "clearCache", "_serverInfo", "preprocess", "schemaErrorMap", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", "precision", "Delete current", "exec_info", "years", " is not a valid identifier", "给发送的图片创建文档", "_cached", "shift", ".validate; var ", "Error validating elicitation response: ", "strong", "externalListenMessageCallback", "getFallbackCodes", ".length; ", "schemaExcl", "hour", "extendTranslation", "每批图像数", "/type", "additionalItems", "interpolator", "#6633FF", "isRoot", ") && (missing", " = formats[", "Current Selection", "initializeResponseQueue", "mountTo", "isInt", "forward", " already exists, which would be overridden", "isRequest", "table", "#33CCCC", "signal", "Cloud:", "[GraphStoreSynchronizer] Error processing store update for ", "6028644MWblxF", "ASCII", "isPersisted", "'].definition; var ", "&gt;", "ZodUnknown", "common", `" keyword validation' `, "parentData", "typeof ", "7sZkJcg", "stringify", "acx", "sdppp", "'[' + ", "tools/list", "SDPPP可能未安装或和插件版本不匹配 (404)", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "#FF3366", "  if (!", "markDisconnected", '.schemaPath = "', "ZodLazy", "openWorkflowJSON", "Username: {{username}}", "Not implemented (501)", "returnedObjectHandler", "queuePrompt", "getter", "No linked layer for {{0}}", "Discriminator property ", " else ", " !== undefined) ; ", "color", "Please select the mask to get", "curr", "nonempty", "getStats", "compile", " !== undefined && ( typeof ", "maxLength", "read", "nonExplicitSupportedLngs", "executeOutgoingRequestInterceptor", "MissingRef", "done", "this", " , message: 'can\\'t resolve reference ", "fromCharCode", "enable", "assign", "++) if (equal(", "fallbackNotificationHandler", " break; ", "delete", "#CC00FF", "正在发送图像...", "then", "returnTypeError", ")' returned an object instead of string.", "errors", "Content", "suffix", "localeCompare", "userAgent", "curlayer", "#FF9900", "removeResourceBundle", "ownProperties", "WebkitAppearance", "PluralRules", "Outgoing request interceptor failed: ", "Error compiling schema, function code:", "Create document", "2024-10-07", "smaller than or equal to", "#33CC00", "当前选区", "services", "  for (var ", "Action {{0}} not found", "反向裁剪", "storage", "properties", "running", "登录成功", "uri", "openWorkflows", "loadGraphData", "; else vErrors = null; } ", "); for (var ", "Server does not support notifying about resources (required for ", "split", "is an invalid additional property", "lowerCaseLng", "activeState", ".pi-sign-out", "mins", "Error handling incoming message:", "day", " not in path ", " == 'number' ? ( (", "coerceTypes", "nonnegative", "yih", "Mask", "stack", "changeLanguage", "; if (!", "_compilations", "notificationQueue", "acy", "setupAbortHandler", "cleanCode", "ayn", " , params: { format:  ", '"object"', "invalid_union", "_requestHandlerAbortControllers", "Jump to last", "registerCapabilities", "getNodeStore", "getClientCapabilities", "error", "disconnected", " = true; else if (typeof ", "backend", "Failed to send an error response: ", "设置图层的文本", "unknownKeys", "send", "aao", "_metaOpts", ", '", ".length ", "missingRefs", "_cachedPath", "skipCopy", "Bounds", "number", " if (errors === 0) return data;           ", "Unauthorized (401)", "unsetOutgoingRequestInterceptor", "[\\@]", "relatedRequestId", "#00CCCC", "acq", "errSchemaPath", "Layer {{0}} is not a group", "app.queuePrompt caught", "Received a progress notification for an unknown token: ", "Entire Canvas", " ) : ( (", " &&   Object.prototype.hasOwnProperty.call(", "retryTimeout", " === undefined) { ", "发送所有", "{2})", "addResources", " var validate = ", "useRawValueToEscape", "merge", "Cannot access data ", " !== ", "ComfyUI加载失败，HTTP状态码：{{code}}", "; }   var err =   ", "fallbackRequestHandler", " && !Array.isArray(", "inline", "URN can not be parsed.", "$$$$", "hasAction", "unescapeSuffix", "ComfyManager not found, cannot reboot", "无法打开图像文件: {{error}}", "fullFilename", " = await ", "onprogress", "notifications/message", "acw", "detect", "silent", "getLanguagePartFromCode", "logout", "保存当前", "async keyword in sync schema", "nullable", "use", "superRefine", "prompt_ids: ", "returnObjects", "Stop auto run", "2UyhSaI", "|0?0?", "resetTimeoutOnProgress", "InvalidRequest", " if ( ", "More actions", "exists", "getTransportToNode", "Failed", " in ", "/additionalProperties", "joinAs", "resources/list", " = errors; ", "setter", " } if (errors === ", "position", "forwardBroadcast", " + '", "canvas", "无法从文件创建文档", " == 'boolean') ", "_options", "整个画布", "innerType", "Fit to canvas", "get", "keys", "ZodVoid", "IPV4ADDRESS", "hasLoadedNamespace", "#FF9933", " should be boolean' ", "react", "#FF0066", "var refVal", " try { await ", " !== undefined) { ", "Array must contain ", "errorHandlers", "debugDisableHeartbeatResponse", "argumentsError", "defineProperty", "setWidgetValue", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "store", "_any", "favorites", "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "云端推荐：", "正在等待图片上传...", "body", "backendConnector", "nodeProxies", " , params: {} ", "bigint", "colors", " , params: { propertyName: '", "typeName", "执行成功", "clear", "detectCycles", "_notificationHandlers", "invalid_type", "pong", "normalize", "post", "effect", "varOccurences", "sort", "_parseSync", "mcpMesh", "node_errors", "目标边界为空", ".schemaPath === undefined) { ", "resolvedLanguage", "requestHandlers", "messageType", "path", "constructor", "reject", " = null; try { ", "var customRule", "Fit to current layer", "anyOf", "initializeConsumer", '" was not yet loaded', "#FF0033", "JWT", "subscribe", "Action set {{0}} not found", "Inpaint (reverse crop)", "padEnd", "nanoid", "任务取消失败: {{error}}", " && ", " var startErrs", "/patternProperties/", " , schema:  ", "ComfyUI服务器重连中", "broadcastReceived", "base64", "int", "uniqueItems"];
  return Fx = function() {
    return i;
  }, Fx();
}
var et, ca;
function gn() {
  return ca || (ca = 1, et = function(i, x) {
    var t = K;
    x || (x = {}), typeof x === t(2138) && (x = { cmp: x });
    var r = typeof x.cycles === t(2665) ? x[t(2031)] : !1, e = x[t(1890)] && /* @__PURE__ */ function(n) {
      return function(o) {
        return function(c, u) {
          var f = { key: c, value: o[c] }, d = { key: u, value: o[u] };
          return n(f, d);
        };
      };
    }(x[t(1890)]), a = [];
    return function n(o) {
      var c = t;
      if (o && o[c(2742)] && typeof o[c(2742)] == "function" && (o = o[c(2742)]()), o !== void 0) {
        if (typeof o == c(2479)) return isFinite(o) ? "" + o : "null";
        if (typeof o !== c(644)) return JSON[c(2351)](o);
        var u, f;
        if (Array.isArray(o)) {
          for (f = "[", u = 0; u < o[c(1027)]; u++)
            u && (f += ","), f += n(o[u]) || c(697);
          return f + "]";
        }
        if (o === null) return "null";
        if (a.indexOf(o) !== -1) {
          if (r) return JSON[c(2351)](c(1602));
          throw new TypeError(c(1226));
        }
        var d = a.push(o) - 1, l = Object[c(2559)](o)[c(2601)](e && e(o));
        for (f = "", u = 0; u < l[c(1027)]; u++) {
          var v = l[u], h = n(o[v]);
          h && (f && (f += ","), f += JSON.stringify(v) + ":" + h);
        }
        return a[c(1849)](d, 1), "{" + f + "}";
      }
    }(i);
  }), et;
}
var xt, ua;
function yn() {
  return ua || (ua = 1, xt = function(x, t, r) {
    var e = K, a = "", n = x[e(1303)][e(1761)] === !0, o = x[e(1852)][e(2283)](x[e(1303)], x[e(1704)][e(1676)], e(814)), c = x[e(626)]._getId(x[e(1303)]);
    if (x[e(1116)][e(603)]) {
      var u = x[e(1852)][e(1768)](x[e(1303)], x[e(1704)][e(789)]);
      if (u) {
        var f = "unknown keyword: " + u;
        if (x[e(1116)][e(603)] === e(1448)) x[e(2116)].warn(f);
        else throw new Error(f);
      }
    }
    if (x[e(1379)] && (a += e(2499), n && (x[e(1927)] = !0, a += e(746)), a += e(876), c && (x[e(1116)][e(1370)] || x[e(1116)].processCode) && (a += " " + (e(1260) + c + e(1442)) + " ")), typeof x[e(1303)] == e(2665) || !(o || x.schema[e(814)])) {
      var t = e(822), d = x[e(2659)], l = x[e(612)], v = x.schema[t], h = x[e(974)] + x[e(1852)][e(2027)](t), m = x[e(2487)] + "/" + t, P = !x[e(1116)][e(1122)], j, y = "data" + (l || ""), R = "valid" + d;
      if (x[e(1303)] === !1) {
        x[e(1379)] ? P = !0 : a += e(460) + R + e(641);
        var w = w || [];
        w.push(a), a = "", x[e(1044)] !== !1 ? (a += e(649) + (j || e(822)) + "' , dataPath: (dataPath || '') + " + x.errorPath + " , schemaPath: " + x[e(1852)][e(1186)](m) + e(2586), x.opts[e(414)] !== !1 && (a += e(1129)), x.opts[e(1145)] && (a += " , schema: false , parentSchema: validate.schema" + x[e(974)] + e(1385) + y + " "), a += e(859)) : a += " {} ";
        var k = a;
        a = w[e(907)](), !x[e(1384)] && P ? x[e(1927)] ? a += " throw new ValidationError([" + k + "]); " : a += e(2120) + k + e(1016) : a += e(804) + k + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else x.isTop ? n ? a += " return data; " : a += " validate.errors = null; return true; " : a += " var " + R + e(404);
      return x[e(1379)] && (a += " }; return validate; "), a;
    }
    if (x[e(1379)]) {
      var F = x.isTop, d = x[e(2659)] = 0, l = x.dataLevel = 0, y = e(984);
      if (x.rootId = x[e(639)][e(1606)](x[e(626)][e(2698)](x[e(2206)].schema)), x[e(1870)] = x.baseId || x.rootId, delete x[e(1379)], x[e(1107)] = [""], x[e(1303)].default !== void 0 && x[e(1116)][e(353)] && x.opts.strictDefaults) {
        var T = e(1305);
        if (x.opts[e(1793)] === "log") x[e(2116)].warn(T);
        else throw new Error(T);
      }
      a += e(1765), a += " var errors = 0;     ", a += e(1498);
    } else {
      var d = x[e(2659)], l = x.dataLevel, y = e(984) + (l || "");
      if (c && (x[e(1870)] = x.resolve[e(828)](x[e(1870)], c)), n && !x[e(1927)]) throw new Error(e(773));
      a += e(1609) + d + " = errors;";
    }
    var R = "valid" + d, P = !x[e(1116)][e(1122)], C = "", O = "", j, M = x[e(1303)].type, N = Array[e(710)](M);
    if (M && x[e(1116)].nullable && x[e(1303)][e(2526)] === !0 && (N ? M[e(393)](e(697)) == -1 && (M = M[e(383)]("null")) : M != e(697) && (M = [M, e(697)], N = !0)), N && M[e(1027)] == 1 && (M = M[0], N = !1), x.schema.$ref && o) {
      if (x.opts[e(903)] == e(1692)) throw new Error(e(1150) + x[e(2487)] + e(1424));
      x[e(1116)].extendRefs !== !0 && (o = !1, x.logger.warn('$ref: keywords ignored in schema at path "' + x[e(2487)] + '"'));
    }
    if (x[e(1303)].$comment && x.opts.$comment && (a += " " + x[e(1704)][e(1676)][e(2723)][e(1749)](x, e(2723))), M) {
      if (x[e(1116)][e(2442)]) var q = x[e(1852)].coerceToTypes(x[e(1116)][e(2442)], M);
      var $ = x[e(1704)][e(1974)][M];
      if (q || N || $ === !0 || $ && !w0($)) {
        var h = x.schemaPath + e(824), m = x[e(2487)] + e(2321), h = x[e(974)] + e(824), m = x[e(2487)] + "/type", U = N ? "checkDataTypes" : e(1314);
        if (a += e(2286) + x[e(1852)][U](M, y, x[e(1116)][e(550)], !0) + ") { ", q) {
          var V = e(2751) + d, J = e(873) + d;
          a += e(460) + V + " = typeof " + y + e(356) + J + e(2250), x.opts[e(2442)] == e(2052) && (a += e(2286) + V + " == 'object' && Array.isArray(" + y + e(1275) + y + e(1003) + y + e(2707) + y + e(523) + V + e(1449) + y + e(1936) + x[e(1852)][e(1314)](x[e(1303)].type, y, x[e(1116)][e(550)]) + ") " + J + e(2707) + y + e(1219)), a += e(2286) + J + e(2372);
          var c0 = q;
          if (c0)
            for (var u0, d0 = -1, o0 = c0[e(1027)] - 1; d0 < o0; )
              u0 = c0[d0 += 1], u0 == "string" ? a += e(1389) + V + " == 'number' || " + V + e(2553) + J + e(849) + y + e(1062) + y + e(1115) + J + e(900) : u0 == "number" || u0 == e(1155) ? (a += " else if (" + V + e(1168) + y + e(685) + V + e(587) + y + e(2627) + y + e(1759) + y + " ", u0 == e(1155) && (a += e(1289) + y + " % 1)"), a += e(1967) + J + e(616) + y + "; ") : u0 == "boolean" ? a += e(1389) + y + e(1665) + y + e(1099) + y + e(1115) + J + e(2072) + y + e(1523) + y + e(845) + J + " = true; " : u0 == e(697) ? a += " else if (" + y + " === '' || " + y + " === 0 || " + y + " === false) " + J + e(2680) : x.opts.coerceTypes == e(2052) && u0 == e(2052) && (a += e(1389) + V + e(1782) + V + " == 'number' || " + V + e(1168) + y + " == null) " + J + e(2651) + y + e(1711));
          a += e(1982);
          var w = w || [];
          w[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += e(649) + (j || "type") + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](m) + e(503), N ? a += "" + M[e(1372)](",") : a += "" + M, a += "' } ", x[e(1116)][e(414)] !== !1 && (a += e(1173), N ? a += "" + M[e(1372)](",") : a += "" + M, a += "' "), x.opts[e(1145)] && (a += e(1355) + h + " , parentSchema: validate.schema" + x.schemaPath + e(1385) + y + " "), a += " } ") : a += " {} ";
          var k = a;
          a = w.pop(), !x[e(1384)] && P ? x.async ? a += " throw new ValidationError([" + k + e(551) : a += e(2120) + k + "]; return false; " : a += e(804) + k + e(2357), a += e(1574) + J + e(1808);
          var l0 = l ? e(984) + (l - 1 || "") : "parentData", S0 = l ? x[e(1107)][l] : e(1638);
          a += " " + y + e(2707) + J + "; ", !l && (a += "if (" + l0 + e(1687)), a += " " + l0 + "[" + S0 + e(417) + J + e(1219);
        } else {
          var w = w || [];
          w[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += e(649) + (j || e(2122)) + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](m) + " , params: { type: '", N ? a += "" + M.join(",") : a += "" + M, a += e(1222), x[e(1116)][e(414)] !== !1 && (a += e(1173), N ? a += "" + M[e(1372)](",") : a += "" + M, a += "' "), x[e(1116)][e(1145)] && (a += e(1355) + h + e(1846) + x.schemaPath + e(1385) + y + " "), a += " } ") : a += e(2237);
          var k = a;
          a = w.pop(), !x[e(1384)] && P ? x[e(1927)] ? a += e(1075) + k + "]); " : a += e(2120) + k + e(1016) : a += e(804) + k + e(2357);
        }
        a += e(859);
      }
    }
    if (x.schema[e(814)] && !o) a += " " + x[e(1704)][e(1676)].$ref.code(x, e(814)) + " ", P && (a += e(2547), F ? a += "0" : a += e(1873) + d, a += ") { ", O += "}");
    else {
      var y0 = x[e(1704)];
      if (y0) {
        for (var $, M0 = -1, q0 = y0[e(1027)] - 1; M0 < q0; )
          if ($ = y0[M0 += 1], w0($)) {
            if ($[e(2122)] && (a += " if (" + x.util[e(1314)]($[e(2122)], y, x[e(1116)][e(550)]) + e(2677)), x[e(1116)][e(353)]) {
              if ($[e(2122)] == e(644) && x[e(1303)][e(2423)]) {
                var v = x[e(1303)][e(2423)], Q0 = Object[e(2559)](v), D = Q0;
                if (D)
                  for (var A, L = -1, G = D[e(1027)] - 1; L < G; ) {
                    A = D[L += 1];
                    var Q = v[A];
                    if (Q[e(1479)] !== void 0) {
                      var W = y + x[e(1852)][e(2027)](A);
                      if (x[e(1384)]) {
                        if (x[e(1116)][e(1793)]) {
                          var T = e(926) + W;
                          if (x[e(1116)][e(1793)] === e(1448)) x[e(2116)][e(2279)](T);
                          else throw new Error(T);
                        }
                      } else a += e(2286) + W + " === undefined ", x[e(1116)][e(353)] == e(2091) && (a += e(2129) + W + e(1470) + W + e(980)), a += " ) " + W + " = ", x[e(1116)].useDefaults == "shared" ? a += " " + x[e(1774)](Q.default) + " " : a += " " + JSON[e(2351)](Q.default) + " ", a += "; ";
                    }
                  }
              } else if ($[e(2122)] == e(2052) && Array[e(710)](x[e(1303)].items)) {
                var X = x[e(1303)].items;
                if (X) {
                  for (var Q, d0 = -1, s0 = X[e(1027)] - 1; d0 < s0; )
                    if (Q = X[d0 += 1], Q[e(1479)] !== void 0) {
                      var W = y + "[" + d0 + "]";
                      if (x.compositeRule) {
                        if (x[e(1116)][e(1793)]) {
                          var T = e(926) + W;
                          if (x[e(1116)][e(1793)] === e(1448)) x[e(2116)][e(2279)](T);
                          else throw new Error(T);
                        }
                      } else a += e(2286) + W + e(2288), x.opts.useDefaults == e(2091) && (a += " || " + W + e(1470) + W + e(980)), a += e(2750) + W + e(2707), x.opts.useDefaults == "shared" ? a += " " + x.useDefault(Q[e(1479)]) + " " : a += " " + JSON[e(2351)](Q[e(1479)]) + " ", a += "; ";
                    }
                }
              }
            }
            var n0 = $[e(526)];
            if (n0) {
              for (var Y, L0 = -1, A0 = n0[e(1027)] - 1; L0 < A0; )
                if (Y = n0[L0 += 1], G0(Y)) {
                  var U0 = Y.code(x, Y[e(454)], $.type);
                  U0 && (a += " " + U0 + " ", P && (C += "}"));
                }
            }
            if (P && (a += " " + C + " ", C = ""), $[e(2122)] && (a += e(859), M && M === $.type && !q)) {
              a += e(642);
              var h = x[e(974)] + e(824), m = x.errSchemaPath + "/type", w = w || [];
              w.push(a), a = "", x.createErrors !== !1 ? (a += e(649) + (j || e(2122)) + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](m) + e(503), N ? a += "" + M[e(1372)](",") : a += "" + M, a += e(1222), x.opts[e(414)] !== !1 && (a += e(1173), N ? a += "" + M[e(1372)](",") : a += "" + M, a += "' "), x[e(1116)][e(1145)] && (a += e(1355) + h + e(1846) + x[e(974)] + " , data: " + y + " "), a += e(859)) : a += e(2237);
              var k = a;
              a = w[e(907)](), !x.compositeRule && P ? x[e(1927)] ? a += e(1075) + k + e(551) : a += e(2120) + k + "]; return false; " : a += e(804) + k + e(2357), a += e(859);
            }
            P && (a += " if (errors === ", F ? a += "0" : a += e(1873) + d, a += ") { ", O += "}");
          }
      }
    }
    P && (a += " " + O + " "), F ? (n ? (a += e(2480), a += " else throw new ValidationError(vErrors); ") : (a += e(1728), a += e(1443)), a += e(1792)) : a += " var " + R + " = errors === errs_" + d + ";";
    function w0(X0) {
      for (var O0 = e, V0 = X0.rules, _0 = 0; _0 < V0[O0(1027)]; _0++) if (G0(V0[_0])) return !0;
    }
    function G0(X0) {
      var O0 = e;
      return x[O0(1303)][X0[O0(454)]] !== void 0 || X0[O0(520)] && ne(X0);
    }
    function ne(X0) {
      for (var O0 = e, V0 = X0[O0(520)], _0 = 0; _0 < V0[O0(1027)]; _0++) if (x[O0(1303)][V0[_0]] !== void 0) return !0;
    }
    return a;
  }), xt;
}
var tt, fa;
function W2() {
  var i = s;
  if (fa) return tt;
  fa = 1;
  var x = cr(), t = We(), r = ur(), e = gn(), a = yn(), n = t[i(1485)], o = or(), c = r[i(1096)];
  tt = u;
  function u(k, F, T, R) {
    var P = i, C = this, O = this[P(2724)], j = [void 0], M = {}, N = [], q = {}, $ = [], U = {}, V = [];
    F = F || { schema: k, refVal: j, refs: M };
    var J = f[P(1580)](this, k, F, R), c0 = this[P(2449)][J.index];
    if (J.compiling) return c0.callValidate = S0;
    var u0 = this[P(1553)], d0 = this.RULES;
    try {
      var o0 = y0(k, F, T, R);
      c0[P(1999)] = o0;
      var l0 = c0.callValidate;
      return l0 && (l0.schema = o0[P(1303)], l0[P(2400)] = null, l0[P(432)] = o0[P(432)], l0.refVal = o0[P(638)], l0.root = o0[P(2206)], l0[P(1761)] = o0[P(1761)], O[P(1370)] && (l0[P(1490)] = o0.source)), o0;
    } finally {
      d[P(1580)](this, k, F, R);
    }
    function S0() {
      var W = P, X = c0[W(1999)], s0 = X[W(1969)](this, arguments);
      return S0.errors = X[W(2400)], s0;
    }
    function y0(W, X, s0, n0) {
      var Y = P, L0 = !X || X && X.schema == W;
      if (X[Y(1303)] != F[Y(1303)]) return u[Y(1580)](C, W, X, s0, n0);
      var A0 = W[Y(1761)] === !0, U0 = a({ isTop: !0, schema: W, isRoot: L0, baseId: n0, root: X, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: r[Y(2384)], RULES: d0, validate: a, util: t, resolve: x, resolveRef: M0, usePattern: L, useDefault: G, useCustomRule: Q, opts: O, formats: u0, logger: C[Y(2116)], self: C });
      U0 = w(j, m) + w(N, v) + w($, h) + w(V, y) + U0, O[Y(534)] && (U0 = O[Y(534)](U0, W));
      var w0;
      try {
        var G0 = new Function(Y(626), Y(1704), Y(628), Y(2206), Y(638), Y(1976), Y(2292), Y(985), Y(1485), Y(2731), U0);
        w0 = G0(C, d0, u0, F, j, $, V, o, n, c), j[0] = w0;
      } catch (ne) {
        throw C.logger.error(Y(2412), U0), ne;
      }
      return w0[Y(1303)] = W, w0[Y(2400)] = null, w0[Y(432)] = M, w0[Y(638)] = j, w0[Y(2206)] = L0 ? w0 : X, A0 && (w0[Y(1761)] = !0), O[Y(1370)] === !0 && (w0[Y(1490)] = { code: U0, patterns: N, defaults: $ }), w0;
    }
    function M0(W, X, s0) {
      var n0 = P;
      X = x.url(W, X);
      var Y = M[X], L0, A0;
      if (Y !== void 0) return L0 = j[Y], A0 = n0(1131) + Y + "]", A(L0, A0);
      if (!s0 && F[n0(432)]) {
        var U0 = F[n0(432)][X];
        if (U0 !== void 0) return L0 = F[n0(638)][U0], A0 = q0(X, L0), A(L0, A0);
      }
      A0 = q0(X);
      var w0 = x[n0(1580)](C, y0, F, X);
      if (w0 === void 0) {
        var G0 = T && T[X];
        G0 && (w0 = x[n0(1914)](G0, O[n0(2199)]) ? G0 : u[n0(1580)](C, G0, F, T, W));
      }
      if (w0 === void 0) Q0(X);
      else return D(X, w0), A(w0, A0);
    }
    function q0(W, X) {
      var s0 = P, n0 = j[s0(1027)];
      return j[n0] = X, M[W] = n0, s0(638) + n0;
    }
    function Q0(W) {
      delete M[W];
    }
    function D(W, X) {
      var s0 = M[W];
      j[s0] = X;
    }
    function A(W, X) {
      var s0 = P;
      return typeof W == s0(644) || typeof W == s0(2665) ? { code: X, schema: W, inline: !0 } : { code: X, $async: W && !!W[s0(1761)] };
    }
    function L(W) {
      var X = P, s0 = q[W];
      return s0 === void 0 && (s0 = q[W] = N[X(1027)], N[s0] = W), X(1811) + s0;
    }
    function G(W) {
      var X = P;
      switch (typeof W) {
        case "boolean":
        case X(2479):
          return "" + W;
        case X(1278):
          return t[X(1186)](W);
        case "object":
          if (W === null) return "null";
          var s0 = e(W), n0 = U[s0];
          return n0 === void 0 && (n0 = U[s0] = $[X(1027)], $[n0] = W), X(1479) + n0;
      }
    }
    function Q(W, X, s0, n0) {
      var Y = P;
      if (C[Y(2724)].validateSchema !== !1) {
        var L0 = W[Y(1984)][Y(1610)];
        if (L0 && !L0[Y(1757)](function(_0) {
          var Ze = Y;
          return Object.prototype[Ze(2036)].call(s0, _0);
        })) throw new Error(Y(1631) + L0[Y(1372)](","));
        var A0 = W.definition[Y(1510)];
        if (A0) {
          var U0 = A0(X);
          if (!U0) {
            var w0 = "keyword schema is invalid: " + C[Y(1562)](A0[Y(2400)]);
            if (C[Y(2724)][Y(1510)] == Y(1448)) C[Y(2116)][Y(2463)](w0);
            else throw new Error(w0);
          }
        }
      }
      var G0 = W[Y(1984)][Y(2378)], ne = W[Y(1984)][Y(2508)], X0 = W.definition[Y(390)], O0;
      if (G0) O0 = G0.call(C, X, s0, n0);
      else if (X0)
        O0 = X0[Y(1580)](C, X, s0, n0), O[Y(1510)] !== !1 && C.validateSchema(O0, !0);
      else if (ne) O0 = ne[Y(1580)](C, n0, W[Y(454)], X, s0);
      else if (O0 = W[Y(1984)].validate, !O0) return;
      if (O0 === void 0) throw new Error(Y(1207) + W[Y(454)] + '"failed to compile');
      var V0 = V[Y(1027)];
      return V[V0] = O0, { code: Y(519) + V0, validate: O0 };
    }
  }
  function f(k, F, T) {
    var R = i, P = l.call(this, k, F, T);
    return P >= 0 ? { index: P, compiling: !0 } : (P = this[R(2449)].length, this[R(2449)][P] = { schema: k, root: F, baseId: T }, { index: P, compiling: !1 });
  }
  function d(k, F, T) {
    var R = i, P = l[R(1580)](this, k, F, T);
    P >= 0 && this[R(2449)].splice(P, 1);
  }
  function l(k, F, T) {
    for (var R = i, P = 0; P < this[R(2449)][R(1027)]; P++) {
      var C = this._compilations[P];
      if (C[R(1303)] == k && C[R(2206)] == F && C[R(1870)] == T) return P;
    }
    return -1;
  }
  function v(k, F) {
    var T = i;
    return T(755) + k + T(1344) + t[T(1186)](F[k]) + ");";
  }
  function h(k) {
    var F = i;
    return F(1254) + k + " = defaults[" + k + "];";
  }
  function m(k, F) {
    var T = i;
    return F[k] === void 0 ? "" : T(2567) + k + T(1475) + k + "];";
  }
  function y(k) {
    var F = i;
    return F(2614) + k + F(1414) + k + "];";
  }
  function w(k, F) {
    var T = i;
    if (!k[T(1027)]) return "";
    for (var R = "", P = 0; P < k[T(1027)]; P++) R += F(P, k);
    return R;
  }
  return tt;
}
var rt = { exports: {} }, da;
function Z2() {
  var i = s;
  if (da) return rt[i(545)];
  da = 1;
  var x = rt[i(545)] = function() {
    var r = i;
    this[r(543)] = {};
  };
  return x[i(1745)].put = function(r, e) {
    var a = i;
    this[a(543)][r] = e;
  }, x[i(1745)].get = function(r) {
    var e = i;
    return this[e(543)][r];
  }, x.prototype[i(1465)] = function(r) {
    delete this._cache[r];
  }, x[i(1745)].clear = function() {
    var r = i;
    this[r(543)] = {};
  }, rt.exports;
}
var at, la;
function B2() {
  var i = s;
  if (la) return at;
  la = 1;
  var x = We(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, r = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, a = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, f = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, d = /^(?:\/(?:[^~/]|~0|~1)*)*$/, l = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, v = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  at = h;
  function h(O) {
    var j = K;
    return O = O == j(365) ? j(365) : j(1033), x.copy(h[O]);
  }
  h[i(1033)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: a, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: f, "json-pointer": d, "json-pointer-uri-fragment": l, "relative-json-pointer": v }, h[i(365)] = { date: y, time: w, "date-time": F, uri: R, "uri-reference": o, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: a, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: f, "json-pointer": d, "json-pointer-uri-fragment": l, "relative-json-pointer": v };
  function m(O) {
    return O % 4 === 0 && (O % 100 !== 0 || O % 400 === 0);
  }
  function y(O) {
    var j = i, M = O[j(2096)](t);
    if (!M) return !1;
    var N = +M[1], q = +M[2], $ = +M[3];
    return q >= 1 && q <= 12 && $ >= 1 && $ <= (q == 2 && m(N) ? 29 : r[q]);
  }
  function w(O, j) {
    var M = O.match(e);
    if (!M) return !1;
    var N = M[1], q = M[2], $ = M[3], U = M[5];
    return (N <= 23 && q <= 59 && $ <= 59 || N == 23 && q == 59 && $ == 60) && (!j || U);
  }
  var k = /t|\s/i;
  function F(O) {
    var j = i, M = O[j(2432)](k);
    return M[j(1027)] == 2 && y(M[0]) && w(M[1], !0);
  }
  var T = /\/|:/;
  function R(O) {
    var j = i;
    return T[j(1063)](O) && n[j(1063)](O);
  }
  var P = /[^\\]\\Z/;
  function C(O) {
    var j = i;
    if (P[j(1063)](O)) return !1;
    try {
      return new RegExp(O), !0;
    } catch {
      return !1;
    }
  }
  return at;
}
var st, ha;
function K2() {
  return ha || (ha = 1, st = function(x, t, r) {
    var e = K, a = " ", n = x.level, o = x[e(612)], c = x[e(1303)][t], u = x[e(2487)] + "/" + t, f = !x[e(1116)][e(1122)], d = e(984) + (o || ""), l = "valid" + n, v, h;
    if (c == "#" || c == "#/") x[e(2325)] ? (v = x[e(1927)], h = e(1999)) : (v = x[e(2206)][e(1303)][e(1761)] === !0, h = e(2205));
    else {
      var m = x.resolveRef(x[e(1870)], c, x[e(2325)]);
      if (m === void 0) {
        var y = x[e(1142)][e(1912)](x[e(1870)], c);
        if (x[e(1116)][e(2475)] == "fail") {
          x.logger[e(2463)](y);
          var w = w || [];
          w.push(a), a = "", x.createErrors !== !1 ? (a += e(649) + e(814) + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](u) + e(397) + x.util[e(1417)](c) + e(1222), x.opts[e(414)] !== !1 && (a += e(2387) + x[e(1852)][e(1417)](c) + "' "), x[e(1116)].verbose && (a += e(959) + x[e(1852)][e(1186)](c) + e(1846) + x[e(974)] + e(1385) + d + " "), a += e(859)) : a += e(2237);
          var k = a;
          a = w[e(907)](), !x.compositeRule && f ? x.async ? a += " throw new ValidationError([" + k + e(551) : a += e(2120) + k + "]; return false; " : a += e(804) + k + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", f && (a += " if (false) { ");
        } else if (x.opts[e(2475)] == e(1085)) x[e(2116)].warn(y), f && (a += e(1065));
        else throw new x[e(1142)](x.baseId, c, y);
      } else if (m.inline) {
        var F = x[e(1852)][e(1840)](x);
        F[e(2659)]++;
        var T = "valid" + F[e(2659)];
        F.schema = m[e(1303)], F[e(974)] = "", F[e(2487)] = c;
        var R = x[e(1999)](F)[e(1024)](/validate\.schema/g, m[e(1749)]);
        a += " " + R + " ", f && (a += e(2286) + T + e(2677));
      } else v = m[e(1761)] === !0 || x[e(1927)] && m[e(1761)] !== !1, h = m[e(1749)];
    }
    if (h) {
      var w = w || [];
      w[e(1020)](a), a = "", x[e(1116)][e(1514)] ? a += " " + h + e(619) : a += " " + h + "( ", a += " " + d + e(1736), x.errorPath != '""' && (a += e(1137) + x.errorPath);
      var P = o ? "data" + (o - 1 || "") : e(2348), C = o ? x[e(1107)][o] : e(1638);
      a += e(1577) + P + " , " + C + e(2233);
      var O = a;
      if (a = w[e(907)](), v) {
        if (!x[e(1927)]) throw new Error(e(1895));
        f && (a += e(460) + l + "; "), a += e(2568) + O + "; ", f && (a += " " + l + e(404)), a += e(2064), f && (a += " " + l + e(641)), a += e(859), f && (a += e(2286) + l + e(2677));
      } else a += " if (!" + O + e(2177) + h + e(554) + h + ".errors); errors = vErrors.length; } ", f && (a += e(642));
    }
    return a;
  }), st;
}
var nt, pa;
function J2() {
  return pa || (pa = 1, nt = function(x, t, r) {
    var e = K, a = " ", n = x[e(1303)][t], o = x.schemaPath + x.util[e(2027)](t), c = x[e(2487)] + "/" + t, u = !x.opts[e(1122)], f = x[e(1852)][e(1840)](x), d = "";
    f.level++;
    var l = e(2073) + f[e(2659)], v = f[e(1870)], h = !0, m = n;
    if (m)
      for (var y, w = -1, k = m[e(1027)] - 1; w < k; )
        y = m[w += 1], (x.opts.strictKeywords ? typeof y == "object" && Object[e(2559)](y)[e(1027)] > 0 || y === !1 : x[e(1852)][e(1436)](y, x[e(1704)][e(1676)])) && (h = !1, f.schema = y, f[e(974)] = o + "[" + w + "]", f[e(2487)] = c + "/" + w, a += "  " + x[e(1999)](f) + " ", f[e(1870)] = v, u && (a += e(2286) + l + ") { ", d += "}"));
    return u && (h ? a += " if (true) { " : a += " " + d.slice(0, -1) + " "), a;
  }), nt;
}
var it, ma;
function G2() {
  return ma || (ma = 1, it = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x.schema[t], u = x[e(974)] + x[e(1852)].getProperty(t), f = x[e(2487)] + "/" + t, d = !x.opts[e(1122)], l = "data" + (o || ""), v = e(2073) + n, h = e(915) + n, m = x[e(1852)][e(1840)](x), y = "";
    m.level++;
    var w = e(2073) + m[e(2659)], k = c.every(function(j) {
      var M = e;
      return x[M(1116)][M(603)] ? typeof j == "object" && Object[M(2559)](j)[M(1027)] > 0 || j === !1 : x.util[M(1436)](j, x.RULES[M(1676)]);
    });
    if (k) {
      var F = m.baseId;
      a += e(460) + h + e(745) + v + e(1139);
      var T = x[e(1384)];
      x[e(1384)] = m[e(1384)] = !0;
      var R = c;
      if (R)
        for (var P, C = -1, O = R[e(1027)] - 1; C < O; )
          P = R[C += 1], m[e(1303)] = P, m.schemaPath = u + "[" + C + "]", m.errSchemaPath = f + "/" + C, a += "  " + x[e(1999)](m) + " ", m[e(1870)] = F, a += " " + v + e(2707) + v + e(2129) + w + e(2448) + v + e(2677), y += "}";
      x.compositeRule = m[e(1384)] = T, a += " " + y + e(1883) + v + e(2182), x[e(1044)] !== !1 ? (a += e(649) + e(2616) + e(2167) + x.errorPath + " , schemaPath: " + x.util.toQuotedString(f) + " , params: {} ", x[e(1116)][e(414)] !== !1 && (a += " , message: 'should match some schema in anyOf' "), x.opts.verbose && (a += e(1355) + u + e(1846) + x[e(974)] + e(1385) + l + " "), a += " } ") : a += e(2237), a += e(2357), !x.compositeRule && d && (x.async ? a += e(1642) : a += e(1375)), a += e(1081) + h + e(1972) + h + e(456) + h + e(2429), x[e(1116)].allErrors && (a += " } ");
    } else d && (a += " if (true) { ");
    return a;
  }), it;
}
var ot, va;
function Q2() {
  return va || (va = 1, ot = function(x, t, r) {
    var e = K, a = " ", n = x[e(1303)][t], o = x[e(2487)] + "/" + t;
    x[e(1116)][e(1122)];
    var c = x[e(1852)][e(1186)](n);
    return x.opts[e(2723)] === !0 ? a += e(1953) + c + ");" : typeof x[e(1116)][e(2723)] == e(2138) && (a += e(1425) + c + ", " + x[e(1852)][e(1186)](o) + e(1837)), a;
  }), ot;
}
var ct, ga;
function X2() {
  return ga || (ga = 1, ct = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x.schema[t], u = x[e(974)] + x[e(1852)].getProperty(t), f = x[e(2487)] + "/" + t, d = !x.opts.allErrors, l = e(984) + (o || ""), v = e(2073) + n, h = x.opts[e(1008)] && c && c[e(1008)];
    h && (a += e(433) + n + e(2707) + x[e(1852)][e(1907)](c[e(1008)], o, x[e(1107)]) + "; "), !h && (a += e(433) + n + e(1161) + u + ";"), a += e(1251) + v + e(912) + l + ", schema" + n + "); if (!" + v + e(2740);
    var m = m || [];
    m[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += e(649) + e(1071) + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](f) + e(1990) + n + e(859), x[e(1116)][e(414)] !== !1 && (a += " , message: 'should be equal to constant' "), x[e(1116)].verbose && (a += e(1355) + u + e(1846) + x.schemaPath + e(1385) + l + " "), a += e(859)) : a += e(2237);
    var y = a;
    return a = m.pop(), !x[e(1384)] && d ? x.async ? a += e(1075) + y + e(551) : a += e(2120) + y + "]; return false; " : a += e(804) + y + e(2357), a += " }", d && (a += e(642)), a;
  }), ct;
}
var ut, ya;
function Y2() {
  return ya || (ya = 1, ut = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x[e(1303)][t], u = x[e(974)] + x[e(1852)][e(2027)](t), f = x.errSchemaPath + "/" + t, d = !x[e(1116)][e(1122)], l = e(984) + (o || ""), v = e(2073) + n, h = e(915) + n, m = x[e(1852)][e(1840)](x), y = "";
    m[e(2659)]++;
    var w = e(2073) + m[e(2659)], k = "i" + n, F = m[e(612)] = x.dataLevel + 1, T = e(984) + F, R = x[e(1870)], P = x.opts[e(603)] ? typeof c == "object" && Object[e(2559)](c)[e(1027)] > 0 || c === !1 : x.util[e(1436)](c, x.RULES[e(1676)]);
    if (a += e(1251) + h + e(606) + v + ";", P) {
      var C = x[e(1384)];
      x[e(1384)] = m[e(1384)] = !0, m[e(1303)] = c, m[e(974)] = u, m.errSchemaPath = f, a += e(460) + w + " = false; for (var " + k + e(2255) + k + e(897) + l + e(2316) + k + e(1833), m[e(2139)] = x.util[e(2689)](x.errorPath, k, x.opts[e(581)], !0);
      var O = l + "[" + k + "]";
      m[e(1107)][F] = k;
      var j = x[e(1999)](m);
      m[e(1870)] = R, x.util[e(2600)](j, T) < 2 ? a += " " + x.util[e(1970)](j, T, O) + " " : a += " var " + T + e(2707) + O + "; " + j + " ", a += e(2286) + w + e(731), x[e(1384)] = m.compositeRule = C, a += " " + y + e(1883) + w + ") {";
    } else a += e(2286) + l + e(1575);
    var M = M || [];
    M[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += e(649) + e(935) + "' , dataPath: (dataPath || '') + " + x.errorPath + " , schemaPath: " + x[e(1852)][e(1186)](f) + e(2586), x[e(1116)].messages !== !1 && (a += " , message: 'should contain a valid item' "), x[e(1116)][e(1145)] && (a += e(1355) + u + e(1846) + x.schemaPath + e(1385) + l + " "), a += e(859)) : a += e(2237);
    var N = a;
    return a = M[e(907)](), !x[e(1384)] && d ? x[e(1927)] ? a += " throw new ValidationError([" + N + e(551) : a += e(2120) + N + e(1016) : a += e(804) + N + e(2357), a += " } else { ", P && (a += e(2059) + h + e(1972) + h + e(456) + h + e(2429)), x[e(1116)][e(1122)] && (a += " } "), a;
  }), ut;
}
var ft, ba;
function _2() {
  return ba || (ba = 1, ft = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x[e(1303)][t], u = x[e(974)] + x.util[e(2027)](t), f = x[e(2487)] + "/" + t, d = !x[e(1116)][e(1122)], l = e(984) + (o || ""), v = "errs__" + n, h = x[e(1852)][e(1840)](x), m = "";
    h[e(2659)]++;
    var y = e(2073) + h[e(2659)], w = {}, k = {}, F = x[e(1116)].ownProperties;
    for (C in c)
      if (C != "__proto__") {
        var T = c[C], R = Array[e(710)](T) ? k : w;
        R[C] = T;
      }
    a += "var " + v + " = errors;";
    var P = x[e(2139)];
    a += e(2023) + n + ";";
    for (var C in k)
      if (R = k[C], R[e(1027)]) {
        if (a += e(2536) + l + x[e(1852)].getProperty(C) + " !== undefined ", F && (a += " && Object.prototype.hasOwnProperty.call(" + l + e(2473) + x[e(1852)][e(1417)](C) + "') "), d) {
          a += e(2277);
          var O = R;
          if (O)
            for (var j, M = -1, N = O[e(1027)] - 1; M < N; ) {
              j = O[M += 1], M && (a += " || ");
              var q = x[e(1852)][e(2027)](j), $ = l + q;
              a += e(1477) + $ + e(2288), F && (a += e(1537) + l + ", '" + x.util[e(1417)](j) + e(1539)), a += e(2326) + n + e(2707) + x[e(1852)][e(1186)](x[e(1116)][e(581)] ? j : q) + e(1959);
            }
          a += ")) {  ";
          var U = e(416) + n, V = e(1352) + U + " + '";
          x.opts._errorDataPathProperty && (x[e(2139)] = x.opts[e(581)] ? x[e(1852)].getPathExpr(P, U, !0) : P + e(1137) + U);
          var J = J || [];
          J[e(1020)](a), a = "", x.createErrors !== !1 ? (a += e(649) + e(1610) + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](f) + " , params: { property: '" + x[e(1852)][e(1417)](C) + e(924) + V + e(382) + R[e(1027)] + e(718) + x[e(1852)].escapeQuotes(R[e(1027)] == 1 ? R[0] : R[e(1372)](", ")) + e(1222), x[e(1116)][e(414)] !== !1 && (a += e(668), R.length == 1 ? a += "property " + x.util[e(1417)](R[0]) : a += "properties " + x[e(1852)][e(1417)](R[e(1372)](", ")), a += e(570) + x[e(1852)].escapeQuotes(C) + " is present' "), x[e(1116)][e(1145)] && (a += e(1355) + u + " , parentSchema: validate.schema" + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += e(2237);
          var c0 = a;
          a = J[e(907)](), !x.compositeRule && d ? x[e(1927)] ? a += e(1075) + c0 + e(551) : a += e(2120) + c0 + e(1016) : a += " var err = " + c0 + e(2357);
        } else {
          a += e(1625);
          var u0 = R;
          if (u0)
            for (var j, d0 = -1, o0 = u0.length - 1; d0 < o0; ) {
              j = u0[d0 += 1];
              var q = x[e(1852)][e(2027)](j), V = x[e(1852)].escapeQuotes(j), $ = l + q;
              x.opts[e(582)] && (x.errorPath = x[e(1852)][e(2166)](P, j, x[e(1116)].jsonPointers)), a += " if ( " + $ + " === undefined ", F && (a += e(1537) + l + e(2473) + x.util[e(1417)](j) + e(1539)), a += e(883), x.createErrors !== !1 ? (a += e(649) + "dependencies" + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](f) + e(1199) + x[e(1852)].escapeQuotes(C) + e(924) + V + e(382) + R[e(1027)] + e(718) + x[e(1852)][e(1417)](R[e(1027)] == 1 ? R[0] : R[e(1372)](", ")) + e(1222), x[e(1116)][e(414)] !== !1 && (a += e(668), R[e(1027)] == 1 ? a += e(1783) + x[e(1852)][e(1417)](R[0]) : a += e(1456) + x.util.escapeQuotes(R[e(1372)](", ")), a += e(570) + x[e(1852)][e(1417)](C) + e(699)), x[e(1116)][e(1145)] && (a += e(1355) + u + e(1846) + x.schemaPath + e(1385) + l + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
            }
        }
        a += " }   ", d && (m += "}", a += e(642));
      }
    x.errorPath = P;
    var l0 = h[e(1870)];
    for (var C in w) {
      var T = w[C];
      (x[e(1116)].strictKeywords ? typeof T == "object" && Object[e(2559)](T)[e(1027)] > 0 || T === !1 : x[e(1852)].schemaHasRules(T, x[e(1704)][e(1676)])) && (a += " " + y + e(1884) + l + x[e(1852)][e(2027)](C) + e(1450), F && (a += " && Object.prototype.hasOwnProperty.call(" + l + ", '" + x[e(1852)].escapeQuotes(C) + e(1539)), a += e(2677), h[e(1303)] = T, h[e(974)] = u + x[e(1852)][e(2027)](C), h.errSchemaPath = f + "/" + x[e(1852)][e(1087)](C), a += "  " + x.validate(h) + " ", h[e(1870)] = l0, a += e(833), d && (a += e(2286) + y + ") { ", m += "}"));
    }
    return d && (a += e(1174) + m + e(2286) + v + e(1874)), a;
  }), ft;
}
var dt, wa;
function ec() {
  return wa || (wa = 1, dt = function(x, t, r) {
    var e = K, a = " ", n = x.level, o = x.dataLevel, c = x[e(1303)][t], u = x[e(974)] + x[e(1852)].getProperty(t), f = x[e(2487)] + "/" + t, d = !x.opts[e(1122)], l = "data" + (o || ""), v = "valid" + n, h = x[e(1116)][e(1008)] && c && c[e(1008)];
    h && (a += e(433) + n + e(2707) + x[e(1852)][e(1907)](c.$data, o, x.dataPathArr) + "; ");
    var m = "i" + n, y = "schema" + n;
    !h && (a += " var " + y + e(1161) + u + ";"), a += e(1251) + v + ";", h && (a += e(1358) + n + e(1632) + v + " = true; else if (!Array.isArray(schema" + n + e(1967) + v + e(2760)), a += "" + v + e(395) + m + e(1431) + m + "<" + y + e(2316) + m + e(2391) + l + ", " + y + "[" + m + e(436) + v + " = true; break; }", h && (a += e(533)), a += " if (!" + v + e(2740);
    var w = w || [];
    w[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += e(649) + e(635) + e(2167) + x[e(2139)] + " , schemaPath: " + x[e(1852)][e(1186)](f) + e(1541) + n + " } ", x[e(1116)][e(414)] !== !1 && (a += e(411)), x[e(1116)][e(1145)] && (a += e(1355) + u + e(1846) + x[e(974)] + " , data: " + l + " "), a += e(859)) : a += " {} ";
    var k = a;
    return a = w[e(907)](), !x[e(1384)] && d ? x.async ? a += e(1075) + k + e(551) : a += " validate.errors = [" + k + e(1016) : a += e(804) + k + e(2357), a += " }", d && (a += " else { "), a;
  }), dt;
}
var lt, Sa;
function xc() {
  return Sa || (Sa = 1, lt = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x.schema[t], u = x[e(974)] + x[e(1852)][e(2027)](t), f = x[e(2487)] + "/" + t, d = !x[e(1116)][e(1122)], l = e(984) + (o || "");
    if (x.opts[e(1533)] === !1) return d && (a += e(1065)), a;
    var v = x.opts.$data && c && c[e(1008)], h;
    v ? (a += e(433) + n + " = " + x[e(1852)][e(1907)](c[e(1008)], o, x[e(1107)]) + "; ", h = "schema" + n) : h = c;
    var m = x[e(1116)].unknownFormats, y = Array[e(710)](m);
    if (v) {
      var w = e(1533) + n, k = "isObject" + n, F = "formatType" + n;
      a += e(460) + w + e(2327) + h + e(1643) + k + e(1449) + w + " == 'object' && !(" + w + " instanceof RegExp) && " + w + e(2311) + F + " = " + k + e(2627) + w + e(2048) + k + e(2677), x[e(1927)] && (a += " var async" + n + e(2707) + w + e(1661)), a += " " + w + e(2707) + w + e(1253), v && (a += " (" + h + e(805) + h + e(1111)), a += " (", m != e(1085) && (a += " (" + h + e(1326) + w + " ", y && (a += e(1404) + h + e(2132)), a += e(1248)), a += " (" + w + e(2627) + F + " == '" + r + e(2007) + w + " == 'function' ? ", x.async ? a += e(1570) + n + e(2732) + w + "(" + l + ") : " + w + "(" + l + ")) " : a += " " + w + "(" + l + ") ", a += e(2131) + w + e(808) + l + "))))) {";
    } else {
      var w = x[e(628)][c];
      if (!w) {
        if (m == e(1085)) return x.logger[e(2279)](e(904) + c + e(494) + x.errSchemaPath + '"'), d && (a += " if (true) { "), a;
        if (y && m[e(393)](c) >= 0) return d && (a += e(1065)), a;
        throw new Error(e(904) + c + e(1054) + x.errSchemaPath + '"');
      }
      var k = typeof w == e(644) && !(w instanceof RegExp) && w[e(1999)], F = k && w[e(2122)] || "string";
      if (k) {
        var T = w[e(1927)] === !0;
        w = w[e(1999)];
      }
      if (F != r) return d && (a += e(1065)), a;
      if (T) {
        if (!x[e(1927)]) throw new Error(e(1519));
        var R = e(628) + x[e(1852)][e(2027)](c) + ".validate";
        a += e(1057) + R + "(" + l + "))) { ";
      } else {
        a += e(1696);
        var R = e(628) + x.util.getProperty(c);
        k && (R += e(1331)), typeof w == e(2138) ? a += " " + R + "(" + l + ") " : a += " " + R + e(808) + l + ") ", a += e(2677);
      }
    }
    var P = P || [];
    P[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += e(649) + e(1533) + e(2167) + x[e(2139)] + e(1652) + x.util[e(1186)](f) + e(2455), v ? a += "" + h : a += "" + x[e(1852)].toQuotedString(c), a += e(2688), x[e(1116)][e(414)] !== !1 && (a += e(1064), v ? a += "' + " + h + e(2550) : a += "" + x.util[e(1417)](c), a += e(1223)), x.opts.verbose && (a += e(2630), v ? a += e(1719) + u : a += "" + x.util.toQuotedString(c), a += e(2214) + x[e(974)] + " , data: " + l + " "), a += e(859)) : a += e(2237);
    var C = a;
    return a = P[e(907)](), !x[e(1384)] && d ? x[e(1927)] ? a += e(1075) + C + e(551) : a += e(2120) + C + e(1016) : a += e(804) + C + e(2357), a += e(859), d && (a += e(642)), a;
  }), lt;
}
var ht, ka;
function tc() {
  return ka || (ka = 1, ht = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x[e(1303)][t], u = x[e(974)] + x.util[e(2027)](t), f = x.errSchemaPath + "/" + t, d = !x[e(1116)][e(1122)], l = "data" + (o || ""), v = e(2073) + n, h = e(915) + n, m = x[e(1852)][e(1840)](x);
    m[e(2659)]++;
    var y = e(2073) + m[e(2659)], w = x.schema[e(2397)], k = x[e(1303)][e(590)], F = w !== void 0 && (x[e(1116)][e(603)] ? typeof w == e(644) && Object[e(2559)](w)[e(1027)] > 0 || w === !1 : x[e(1852)][e(1436)](w, x[e(1704)][e(1676)])), T = k !== void 0 && (x[e(1116)][e(603)] ? typeof k == e(644) && Object[e(2559)](k).length > 0 || k === !1 : x.util.schemaHasRules(k, x[e(1704)].all)), R = m[e(1870)];
    if (F || T) {
      var P;
      m[e(1044)] = !1, m[e(1303)] = c, m[e(974)] = u, m[e(2487)] = f, a += " var " + h + " = errors; var " + v + e(2712);
      var C = x[e(1384)];
      x[e(1384)] = m[e(1384)] = !0, a += "  " + x[e(1999)](m) + " ", m[e(1870)] = R, m[e(1044)] = !0, a += e(2059) + h + e(1972) + h + e(456) + h + "; else vErrors = null; }  ", x[e(1384)] = m[e(1384)] = C, F ? (a += e(2286) + y + e(1547), m.schema = x[e(1303)][e(2397)], m[e(974)] = x.schemaPath + e(698), m[e(2487)] = x[e(2487)] + e(2159), a += "  " + x[e(1999)](m) + " ", m[e(1870)] = R, a += " " + v + e(2707) + y + "; ", F && T ? (P = e(1454) + n, a += e(460) + P + e(2271)) : P = e(1680), a += e(859), T && (a += " else { ")) : a += e(1883) + y + e(2677), T && (m[e(1303)] = x.schema[e(590)], m[e(974)] = x[e(974)] + e(496), m[e(2487)] = x.errSchemaPath + e(690), a += "  " + x[e(1999)](m) + " ", m[e(1870)] = R, a += " " + v + e(2707) + y + "; ", F && T ? (P = e(1454) + n, a += e(460) + P + e(569)) : P = e(756), a += e(859)), a += e(1883) + v + e(2182), x[e(1044)] !== !1 ? (a += e(649) + "if" + e(2167) + x[e(2139)] + " , schemaPath: " + x[e(1852)][e(1186)](f) + e(2719) + P + e(859), x[e(1116)][e(414)] !== !1 && (a += ` , message: 'should match "' + ` + P + e(966)), x[e(1116)].verbose && (a += e(1355) + u + " , parentSchema: validate.schema" + x[e(974)] + " , data: " + l + " "), a += e(859)) : a += e(2237), a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(1384)] && d && (x[e(1927)] ? a += e(1642) : a += e(1375)), a += " }   ", d && (a += " else { ");
    } else d && (a += e(1065));
    return a;
  }), ht;
}
var pt, Ea;
function rc() {
  return Ea || (Ea = 1, pt = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x.schema[t], u = x[e(974)] + x[e(1852)].getProperty(t), f = x.errSchemaPath + "/" + t, d = !x.opts.allErrors, l = e(984) + (o || ""), v = e(2073) + n, h = e(915) + n, m = x[e(1852)][e(1840)](x), y = "";
    m[e(2659)]++;
    var w = e(2073) + m[e(2659)], k = "i" + n, F = m[e(612)] = x[e(612)] + 1, T = e(984) + F, R = x[e(1870)];
    if (a += "var " + h + e(606) + v + ";", Array[e(710)](c)) {
      var P = x[e(1303)][e(2322)];
      if (P === !1) {
        a += " " + v + e(2707) + l + ".length <= " + c.length + "; ";
        var C = f;
        f = x[e(2487)] + e(2215), a += e(2359) + v + ") {   ";
        var O = O || [];
        O[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += e(649) + "additionalItems" + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](f) + e(1041) + c.length + " } ", x[e(1116)][e(414)] !== !1 && (a += e(1506) + c[e(1027)] + e(2149)), x[e(1116)][e(1145)] && (a += e(2695) + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += " {} ";
        var j = a;
        a = O.pop(), !x.compositeRule && d ? x[e(1927)] ? a += e(1075) + j + "]); " : a += e(2120) + j + e(1016) : a += " var err = " + j + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += e(859), f = C, d && (y += "}", a += e(642));
      }
      var M = c;
      if (M) {
        for (var N, q = -1, $ = M[e(1027)] - 1; q < $; )
          if (N = M[q += 1], x[e(1116)][e(603)] ? typeof N == "object" && Object[e(2559)](N)[e(1027)] > 0 || N === !1 : x.util[e(1436)](N, x.RULES[e(1676)])) {
            a += " " + w + e(1853) + l + e(2658) + q + e(2677);
            var U = l + "[" + q + "]";
            m[e(1303)] = N, m[e(974)] = u + "[" + q + "]", m[e(2487)] = f + "/" + q, m.errorPath = x[e(1852)][e(2689)](x[e(2139)], q, x[e(1116)][e(581)], !0), m.dataPathArr[F] = q;
            var V = x.validate(m);
            m[e(1870)] = R, x[e(1852)][e(2600)](V, T) < 2 ? a += " " + x[e(1852)][e(1970)](V, T, U) + " " : a += e(460) + T + e(2707) + U + "; " + V + " ", a += " }  ", d && (a += e(2286) + w + ") { ", y += "}");
          }
      }
      if (typeof P == e(644) && (x[e(1116)].strictKeywords ? typeof P == "object" && Object[e(2559)](P)[e(1027)] > 0 || P === !1 : x[e(1852)][e(1436)](P, x[e(1704)][e(1676)]))) {
        m[e(1303)] = P, m[e(974)] = x[e(974)] + e(482), m[e(2487)] = x.errSchemaPath + e(2215), a += " " + w + e(1853) + l + e(2658) + c[e(1027)] + e(1069) + k + " = " + c[e(1027)] + "; " + k + " < " + l + e(2316) + k + e(1833), m[e(2139)] = x[e(1852)][e(2689)](x.errorPath, k, x[e(1116)][e(581)], !0);
        var U = l + "[" + k + "]";
        m[e(1107)][F] = k;
        var V = x[e(1999)](m);
        m[e(1870)] = R, x.util[e(2600)](V, T) < 2 ? a += " " + x[e(1852)][e(1970)](V, T, U) + " " : a += e(460) + T + e(2707) + U + "; " + V + " ", d && (a += e(1883) + w + e(1192)), a += e(2258), d && (a += e(2286) + w + e(2677), y += "}");
      }
    } else if (x[e(1116)][e(603)] ? typeof c == e(644) && Object[e(2559)](c).length > 0 || c === !1 : x[e(1852)].schemaHasRules(c, x[e(1704)][e(1676)])) {
      m[e(1303)] = c, m[e(974)] = u, m.errSchemaPath = f, a += e(2419) + k + e(2707) + 0 + "; " + k + e(897) + l + e(2316) + k + "++) { ", m[e(2139)] = x[e(1852)].getPathExpr(x.errorPath, k, x[e(1116)][e(581)], !0);
      var U = l + "[" + k + "]";
      m.dataPathArr[F] = k;
      var V = x[e(1999)](m);
      m[e(1870)] = R, x[e(1852)].varOccurences(V, T) < 2 ? a += " " + x[e(1852)][e(1970)](V, T, U) + " " : a += " var " + T + e(2707) + U + "; " + V + " ", d && (a += e(1883) + w + e(1192)), a += " }";
    }
    return d && (a += " " + y + e(2286) + h + e(1874)), a;
  }), pt;
}
var mt, Pa;
function Ia() {
  return Pa || (Pa = 1, mt = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x.dataLevel, c = x[e(1303)][t], u = x.schemaPath + x.util[e(2027)](t), f = x[e(2487)] + "/" + t, d = !x.opts[e(1122)], R, l = e(984) + (o || ""), v = x[e(1116)][e(1008)] && c && c[e(1008)], h;
    v ? (a += e(433) + n + e(2707) + x[e(1852)][e(1907)](c[e(1008)], o, x.dataPathArr) + "; ", h = e(1303) + n) : h = c;
    var m = t == e(2005), y = e(m ? 1304 : 1735), w = x.schema[y], k = x[e(1116)].$data && w && w[e(1008)], F = m ? "<" : ">", T = m ? ">" : "<", R = void 0;
    if (!(v || typeof c == e(2479) || c === void 0)) throw new Error(t + e(1529));
    if (!(k || w === void 0 || typeof w == e(2479) || typeof w == "boolean")) throw new Error(y + " must be number or boolean");
    if (k) {
      var P = x[e(1852)][e(1907)](w[e(1008)], o, x[e(1107)]), C = "exclusive" + n, O = "exclType" + n, j = e(684) + n, M = "op" + n, N = e(1352) + M + e(2550);
      a += " var schemaExcl" + n + e(2707) + P + "; ", P = e(2317) + n, a += " var " + C + e(356) + O + e(1449) + P + e(1936) + O + e(2084) + O + " != 'undefined' && " + O + e(1092);
      var R = y, q = q || [];
      q[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += e(649) + (R || e(1678)) + e(2167) + x.errorPath + e(1652) + x[e(1852)][e(1186)](f) + e(2586), x[e(1116)].messages !== !1 && (a += e(1569) + y + e(2564)), x.opts[e(1145)] && (a += e(1355) + u + " , parentSchema: validate.schema" + x[e(974)] + " , data: " + l + " "), a += " } ") : a += " {} ";
      var $ = a;
      a = q[e(907)](), !x.compositeRule && d ? x[e(1927)] ? a += e(1075) + $ + e(551) : a += e(2120) + $ + e(1016) : a += " var err = " + $ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += e(739), v && (a += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), a += " " + O + e(2441) + C + " = " + h + e(666) + P + " " + F + "= " + h + e(2111) + l + " " + T + "= " + P + e(2131) + l + " " + T + " " + h + e(2492) + C + e(2707) + P + e(527) + l + " " + T + "= " + h + e(2131) + l + " " + T + " " + h + e(386) + l + " !== " + l + e(1656) + n + e(2707) + C + e(1197) + F + "' : '" + F + e(1144), c === void 0 && (R = y, f = x.errSchemaPath + "/" + y, h = P, v = k);
    } else {
      var j = typeof w == e(2479), N = F;
      if (j && v) {
        var M = "'" + N + "'";
        a += e(2536), v && (a += " (" + h + e(805) + h + e(2238)), a += e(727) + h + " === undefined || " + w + " " + F + "= " + h + e(1779) + l + " " + T + "= " + w + e(2131) + l + " " + T + " " + h + " ) || " + l + " !== " + l + e(2677);
      } else {
        j && c === void 0 ? (C = !0, R = y, f = x.errSchemaPath + "/" + y, h = w, T += "=") : (j && (h = Math[e(m ? 1614 : 1743)](w, c)), w === (j ? h : !0) ? (C = !0, R = y, f = x.errSchemaPath + "/" + y, T += "=") : (C = !1, N += "="));
        var M = "'" + N + "'";
        a += e(2536), v && (a += " (" + h + e(805) + h + e(2238)), a += " " + l + " " + T + " " + h + e(2129) + l + e(2503) + l + ") { ";
      }
    }
    R = R || t;
    var q = q || [];
    q[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += e(649) + (R || "_limit") + "' , dataPath: (dataPath || '') + " + x.errorPath + e(1652) + x[e(1852)][e(1186)](f) + e(2106) + M + e(967) + h + ", exclusive: " + C + e(859), x[e(1116)][e(414)] !== !1 && (a += e(1173) + N + " ", v ? a += e(1352) + h : a += "" + h + "'"), x[e(1116)][e(1145)] && (a += " , schema:  ", v ? a += e(1719) + u : a += "" + c, a += e(2214) + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += e(2237);
    var $ = a;
    return a = q.pop(), !x.compositeRule && d ? x.async ? a += e(1075) + $ + e(551) : a += e(2120) + $ + "]; return false; " : a += e(804) + $ + e(2357), a += e(859), d && (a += e(642)), a;
  }), mt;
}
var vt, Ra;
function Ca() {
  return Ra || (Ra = 1, vt = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x[e(1303)][t], u = x.schemaPath + x[e(1852)][e(2027)](t), f = x[e(2487)] + "/" + t, d = !x[e(1116)][e(1122)], y, l = e(984) + (o || ""), v = x[e(1116)][e(1008)] && c && c.$data, h;
    if (v ? (a += e(433) + n + e(2707) + x[e(1852)].getData(c[e(1008)], o, x.dataPathArr) + "; ", h = e(1303) + n) : h = c, !(v || typeof c == e(2479))) throw new Error(t + " must be number");
    var m = t == e(455) ? ">" : "<";
    a += e(1120), v && (a += " (" + h + " !== undefined && typeof " + h + e(2238)), a += " " + l + e(2474) + m + " " + h + ") { ";
    var y = t, w = w || [];
    w[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += e(649) + (y || e(1434)) + e(2167) + x[e(2139)] + " , schemaPath: " + x[e(1852)][e(1186)](f) + " , params: { limit: " + h + e(859), x[e(1116)][e(414)] !== !1 && (a += e(452), t == e(455) ? a += e(855) : a += e(1128), a += e(1738), v ? a += e(1352) + h + e(2550) : a += "" + c, a += e(2149)), x[e(1116)][e(1145)] && (a += " , schema:  ", v ? a += e(1719) + u : a += "" + c, a += e(2214) + x.schemaPath + " , data: " + l + " "), a += e(859)) : a += e(2237);
    var k = a;
    return a = w[e(907)](), !x[e(1384)] && d ? x[e(1927)] ? a += " throw new ValidationError([" + k + e(551) : a += e(2120) + k + e(1016) : a += e(804) + k + e(2357), a += "} ", d && (a += " else { "), a;
  }), vt;
}
var gt, Fa;
function Na() {
  return Fa || (Fa = 1, gt = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x[e(1303)][t], u = x[e(974)] + x[e(1852)].getProperty(t), f = x[e(2487)] + "/" + t, d = !x[e(1116)][e(1122)], y, l = e(984) + (o || ""), v = x[e(1116)].$data && c && c[e(1008)], h;
    if (v ? (a += " var schema" + n + " = " + x.util[e(1907)](c[e(1008)], o, x[e(1107)]) + "; ", h = e(1303) + n) : h = c, !(v || typeof c == e(2479))) throw new Error(t + e(1529));
    var m = t == "maxLength" ? ">" : "<";
    a += e(1120), v && (a += " (" + h + e(805) + h + e(2238)), x.opts[e(2071)] === !1 ? a += " " + l + e(2474) : a += e(2297) + l + ") ", a += " " + m + " " + h + e(2677);
    var y = t, w = w || [];
    w[e(1020)](a), a = "", x.createErrors !== !1 ? (a += e(649) + (y || e(791)) + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](f) + e(1041) + h + " } ", x[e(1116)][e(414)] !== !1 && (a += e(617), t == "maxLength" ? a += e(2212) : a += e(2002), a += e(1738), v ? a += e(1352) + h + " + '" : a += "" + c, a += " characters' "), x.opts[e(1145)] && (a += e(2630), v ? a += "validate.schema" + u : a += "" + c, a += e(2214) + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += e(2237);
    var k = a;
    return a = w[e(907)](), !x[e(1384)] && d ? x[e(1927)] ? a += " throw new ValidationError([" + k + e(551) : a += e(2120) + k + "]; return false; " : a += e(804) + k + e(2357), a += "} ", d && (a += e(642)), a;
  }), gt;
}
var yt, qa;
function Ta() {
  return qa || (qa = 1, yt = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x[e(1303)][t], u = x[e(974)] + x[e(1852)][e(2027)](t), f = x[e(2487)] + "/" + t, d = !x[e(1116)][e(1122)], y, l = e(984) + (o || ""), v = x[e(1116)][e(1008)] && c && c[e(1008)], h;
    if (v ? (a += e(433) + n + " = " + x[e(1852)][e(1907)](c[e(1008)], o, x[e(1107)]) + "; ", h = e(1303) + n) : h = c, !(v || typeof c == e(2479))) throw new Error(t + " must be number");
    var m = t == "maxProperties" ? ">" : "<";
    a += e(1120), v && (a += " (" + h + e(805) + h + " != 'number') || "), a += e(1889) + l + e(1422) + m + " " + h + e(2677);
    var y = t, w = w || [];
    w[e(1020)](a), a = "", x.createErrors !== !1 ? (a += e(649) + (y || e(1176)) + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](f) + e(1041) + h + e(859), x[e(1116)][e(414)] !== !1 && (a += e(452), t == e(1286) ? a += "more" : a += e(1128), a += e(1738), v ? a += e(1352) + h + e(2550) : a += "" + c, a += " properties' "), x[e(1116)][e(1145)] && (a += " , schema:  ", v ? a += e(1719) + u : a += "" + c, a += e(2214) + x[e(974)] + " , data: " + l + " "), a += e(859)) : a += e(2237);
    var k = a;
    return a = w[e(907)](), !x[e(1384)] && d ? x.async ? a += e(1075) + k + e(551) : a += e(2120) + k + e(1016) : a += e(804) + k + e(2357), a += "} ", d && (a += " else { "), a;
  }), yt;
}
var bt, Aa;
function ac() {
  return Aa || (Aa = 1, bt = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x.schema[t], u = x[e(974)] + x[e(1852)][e(2027)](t), f = x[e(2487)] + "/" + t, d = !x.opts[e(1122)], l = e(984) + (o || ""), v = x[e(1116)].$data && c && c.$data, h;
    if (v ? (a += " var schema" + n + e(2707) + x[e(1852)].getData(c.$data, o, x[e(1107)]) + "; ", h = e(1303) + n) : h = c, !(v || typeof c == e(2479))) throw new Error(t + " must be number");
    a += e(729) + n + e(2017), v && (a += " " + h + e(2379) + h + e(507)), a += " (division" + n + e(2707) + l + e(2275) + h + ", ", x[e(1116)][e(662)] ? a += " Math.abs(Math.round(division" + n + e(2028) + n + e(1068) + x.opts[e(662)] + " " : a += e(636) + n + e(1328) + n + ") ", a += e(2750), v && (a += e(2683)), a += e(1368);
    var m = m || [];
    m[e(1020)](a), a = "", x.createErrors !== !1 ? (a += e(649) + e(2752) + e(2167) + x[e(2139)] + e(1652) + x.util[e(1186)](f) + e(862) + h + e(859), x.opts[e(414)] !== !1 && (a += e(1373), v ? a += e(1352) + h : a += "" + h + "'"), x.opts[e(1145)] && (a += e(2630), v ? a += e(1719) + u : a += "" + c, a += e(2214) + x[e(974)] + " , data: " + l + " "), a += e(859)) : a += e(2237);
    var y = a;
    return a = m[e(907)](), !x[e(1384)] && d ? x[e(1927)] ? a += " throw new ValidationError([" + y + e(551) : a += e(2120) + y + e(1016) : a += e(804) + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += "} ", d && (a += e(642)), a;
  }), bt;
}
var wt, Oa;
function sc() {
  return Oa || (Oa = 1, wt = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x[e(1303)][t], u = x.schemaPath + x[e(1852)][e(2027)](t), f = x[e(2487)] + "/" + t, d = !x.opts[e(1122)], l = "data" + (o || ""), v = e(915) + n, h = x[e(1852)][e(1840)](x);
    h[e(2659)]++;
    var m = e(2073) + h.level;
    if (x[e(1116)][e(603)] ? typeof c == e(644) && Object[e(2559)](c)[e(1027)] > 0 || c === !1 : x[e(1852)].schemaHasRules(c, x[e(1704)].all)) {
      h[e(1303)] = c, h[e(974)] = u, h[e(2487)] = f, a += " var " + v + e(2014);
      var y = x[e(1384)];
      x[e(1384)] = h[e(1384)] = !0, h.createErrors = !1;
      var w;
      h[e(1116)][e(1122)] && (w = h[e(1116)][e(1122)], h.opts[e(1122)] = !1), a += " " + x[e(1999)](h) + " ", h[e(1044)] = !0, w && (h[e(1116)].allErrors = w), x[e(1384)] = h[e(1384)] = y, a += e(2286) + m + e(2740);
      var k = k || [];
      k[e(1020)](a), a = "", x.createErrors !== !1 ? (a += e(649) + e(2720) + e(2167) + x[e(2139)] + " , schemaPath: " + x[e(1852)][e(1186)](f) + " , params: {} ", x[e(1116)][e(414)] !== !1 && (a += " , message: 'should NOT be valid' "), x.opts.verbose && (a += e(1355) + u + e(1846) + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += e(2237);
      var F = a;
      a = k[e(907)](), !x[e(1384)] && d ? x.async ? a += " throw new ValidationError([" + F + "]); " : a += e(2120) + F + "]; return false; " : a += e(804) + F + e(2357), a += e(1081) + v + "; if (vErrors !== null) { if (" + v + e(456) + v + e(2429), x[e(1116)].allErrors && (a += e(859));
    } else a += e(1429), x[e(1044)] !== !1 ? (a += e(649) + "not" + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](f) + e(2586), x[e(1116)][e(414)] !== !1 && (a += e(600)), x[e(1116)][e(1145)] && (a += e(1355) + u + e(1846) + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += e(2237), a += e(2357), d && (a += " if (false) { ");
    return a;
  }), wt;
}
var St, Da;
function nc() {
  return Da || (Da = 1, St = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x.dataLevel, c = x[e(1303)][t], u = x[e(974)] + x.util[e(2027)](t), f = x[e(2487)] + "/" + t, d = !x[e(1116)][e(1122)], l = "data" + (o || ""), v = e(2073) + n, h = e(915) + n, m = x[e(1852)][e(1840)](x), y = "";
    m[e(2659)]++;
    var w = e(2073) + m[e(2659)], k = m[e(1870)], F = "prevValid" + n, T = "passingSchemas" + n;
    a += "var " + h + " = errors , " + F + e(2284) + v + e(2284) + T + " = null; ";
    var R = x[e(1384)];
    x[e(1384)] = m[e(1384)] = !0;
    var P = c;
    if (P)
      for (var C, O = -1, j = P.length - 1; O < j; )
        C = P[O += 1], (x.opts[e(603)] ? typeof C == "object" && Object[e(2559)](C)[e(1027)] > 0 || C === !1 : x[e(1852)][e(1436)](C, x[e(1704)][e(1676)])) ? (m[e(1303)] = C, m[e(974)] = u + "[" + O + "]", m.errSchemaPath = f + "/" + O, a += "  " + x[e(1999)](m) + " ", m[e(1870)] = k) : a += e(460) + w + e(404), O && (a += " if (" + w + e(2627) + F + e(2677) + v + e(641) + T + e(2651) + T + ", " + O + "]; } else { ", y += "}"), a += e(2286) + w + ") { " + v + e(2707) + F + e(404) + T + e(2707) + O + e(1667);
    return x[e(1384)] = m.compositeRule = R, a += "" + y + "if (!" + v + e(2182), x[e(1044)] !== !1 ? (a += e(649) + e(2130) + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](f) + e(2757) + T + e(859), x.opts[e(414)] !== !1 && (a += e(1858)), x[e(1116)][e(1145)] && (a += " , schema: validate.schema" + u + e(1846) + x.schemaPath + " , data: " + l + " "), a += e(859)) : a += e(2237), a += e(2357), !x.compositeRule && d && (x[e(1927)] ? a += " throw new ValidationError(vErrors); " : a += e(1375)), a += "} else {  errors = " + h + e(1972) + h + e(456) + h + e(1114), x[e(1116)][e(1122)] && (a += e(859)), a;
  }), St;
}
var kt, ja;
function ic() {
  return ja || (ja = 1, kt = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x[e(1303)][t], u = x[e(974)] + x[e(1852)].getProperty(t), f = x[e(2487)] + "/" + t, d = !x.opts[e(1122)], l = e(984) + (o || ""), v = x[e(1116)][e(1008)] && c && c[e(1008)], h;
    v ? (a += " var schema" + n + " = " + x[e(1852)][e(1907)](c[e(1008)], o, x[e(1107)]) + "; ", h = e(1303) + n) : h = c;
    var m = v ? e(968) + h + "))" : x[e(2196)](c);
    a += "if ( ", v && (a += " (" + h + e(805) + h + e(1111)), a += " !" + m + e(808) + l + e(2240);
    var y = y || [];
    y[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += e(649) + "pattern" + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](f) + e(954), v ? a += "" + h : a += "" + x[e(1852)][e(1186)](c), a += e(2688), x[e(1116)][e(414)] !== !1 && (a += e(1558), v ? a += e(1352) + h + e(2550) : a += "" + x[e(1852)][e(1417)](c), a += e(1223)), x[e(1116)][e(1145)] && (a += e(2630), v ? a += e(1719) + u : a += "" + x.util[e(1186)](c), a += "         , parentSchema: validate.schema" + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += " {} ";
    var w = a;
    return a = y[e(907)](), !x[e(1384)] && d ? x[e(1927)] ? a += " throw new ValidationError([" + w + "]); " : a += e(2120) + w + e(1016) : a += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += "} ", d && (a += e(642)), a;
  }), kt;
}
var Et, Ma;
function oc() {
  return Ma || (Ma = 1, Et = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x[e(1303)][t], u = x[e(974)] + x.util[e(2027)](t), f = x.errSchemaPath + "/" + t, d = !x.opts[e(1122)], l = "data" + (o || ""), v = e(915) + n, h = x[e(1852)].copy(x), m = "";
    h[e(2659)]++;
    var y = "valid" + h[e(2659)], w = "key" + n, k = "idx" + n, F = h.dataLevel = x.dataLevel + 1, T = e(984) + F, R = e(1516) + n, P = Object[e(2559)](c || {})[e(2674)](d0), C = x[e(1303)][e(2148)] || {}, O = Object[e(2559)](C)[e(2674)](d0), j = x[e(1303)][e(997)], M = P[e(1027)] || O[e(1027)], N = j === !1, q = typeof j == e(644) && Object.keys(j)[e(1027)], $ = x[e(1116)][e(992)], U = N || q || $, V = x[e(1116)][e(2408)], J = x.baseId, c0 = x.schema.required;
    if (c0 && !(x[e(1116)][e(1008)] && c0[e(1008)]) && c0[e(1027)] < x[e(1116)][e(1746)]) var u0 = x[e(1852)][e(1871)](c0);
    function d0(jx) {
      var Mx = e;
      return jx !== Mx(2092);
    }
    if (a += e(1251) + v + " = errors;var " + y + e(2236), V && (a += " var " + R + e(2249)), U) {
      if (V ? a += " " + R + " = " + R + " || Object.keys(" + l + e(2430) + k + e(1431) + k + "<" + R + ".length; " + k + e(696) + w + e(2707) + R + "[" + k + "]; " : a += e(1471) + w + e(2541) + l + ") { ", M) {
        if (a += e(1175) + n + e(681), P[e(1027)])
          if (P[e(1027)] > 8) a += " || validate.schema" + u + ".hasOwnProperty(" + w + ") ";
          else {
            var o0 = P;
            if (o0)
              for (var l0, S0 = -1, y0 = o0.length - 1; S0 < y0; )
                l0 = o0[S0 += 1], a += e(2129) + w + e(1715) + x[e(1852)][e(1186)](l0) + " ";
          }
        if (O[e(1027)]) {
          var M0 = O;
          if (M0)
            for (var q0, Q0 = -1, D = M0.length - 1; Q0 < D; )
              q0 = M0[Q0 += 1], a += e(2129) + x[e(2196)](q0) + e(808) + w + ") ";
        }
        a += " ); if (isAdditional" + n + e(2677);
      }
      if ($ == e(1676)) a += e(1915) + l + "[" + w + e(1711);
      else {
        var A = x[e(2139)], L = e(1352) + w + e(2550);
        if (x[e(1116)][e(582)] && (x.errorPath = x.util.getPathExpr(x[e(2139)], w, x.opts[e(581)])), N)
          if ($) a += e(1915) + l + "[" + w + e(1711);
          else {
            a += " " + y + " = false; ";
            var G = f;
            f = x.errSchemaPath + e(2542);
            var Q = Q || [];
            Q[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += e(649) + e(997) + e(2167) + x[e(2139)] + " , schemaPath: " + x[e(1852)].toQuotedString(f) + e(1487) + L + "' } ", x.opts[e(414)] !== !1 && (a += e(1569), x.opts._errorDataPathProperty ? a += e(2433) : a += e(691), a += "' "), x[e(1116)][e(1145)] && (a += e(2695) + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += e(2237);
            var W = a;
            a = Q[e(907)](), !x[e(1384)] && d ? x.async ? a += e(1075) + W + e(551) : a += e(2120) + W + e(1016) : a += " var err = " + W + e(2357), f = G, d && (a += e(2393));
          }
        else if (q)
          if ($ == "failing") {
            a += e(460) + v + e(2014);
            var X = x.compositeRule;
            x.compositeRule = h[e(1384)] = !0, h[e(1303)] = j, h.schemaPath = x.schemaPath + e(1700), h.errSchemaPath = x[e(2487)] + "/additionalProperties", h[e(2139)] = x[e(1116)]._errorDataPathProperty ? x[e(2139)] : x[e(1852)][e(2689)](x[e(2139)], w, x.opts[e(581)]);
            var s0 = l + "[" + w + "]";
            h.dataPathArr[F] = w;
            var n0 = x[e(1999)](h);
            h[e(1870)] = J, x[e(1852)][e(2600)](n0, T) < 2 ? a += " " + x[e(1852)][e(1970)](n0, T, s0) + " " : a += e(460) + T + " = " + s0 + "; " + n0 + " ", a += e(1883) + y + e(1017) + v + e(1367) + l + "[" + w + e(531), x.compositeRule = h[e(1384)] = X;
          } else {
            h.schema = j, h[e(974)] = x.schemaPath + e(1700), h[e(2487)] = x[e(2487)] + "/additionalProperties", h[e(2139)] = x[e(1116)]._errorDataPathProperty ? x[e(2139)] : x.util[e(2689)](x[e(2139)], w, x[e(1116)][e(581)]);
            var s0 = l + "[" + w + "]";
            h[e(1107)][F] = w;
            var n0 = x.validate(h);
            h[e(1870)] = J, x[e(1852)][e(2600)](n0, T) < 2 ? a += " " + x[e(1852)][e(1970)](n0, T, s0) + " " : a += e(460) + T + " = " + s0 + "; " + n0 + " ", d && (a += " if (!" + y + e(1192));
          }
        x[e(2139)] = A;
      }
      M && (a += e(859)), a += e(833), d && (a += e(2286) + y + e(2677), m += "}");
    }
    var Y = x[e(1116)].useDefaults && !x[e(1384)];
    if (P[e(1027)]) {
      var L0 = P;
      if (L0)
        for (var l0, A0 = -1, U0 = L0[e(1027)] - 1; A0 < U0; ) {
          l0 = L0[A0 += 1];
          var w0 = c[l0];
          if (x[e(1116)].strictKeywords ? typeof w0 == e(644) && Object.keys(w0)[e(1027)] > 0 || w0 === !1 : x[e(1852)].schemaHasRules(w0, x[e(1704)][e(1676)])) {
            var G0 = x[e(1852)][e(2027)](l0), s0 = l + G0, ne = Y && w0[e(1479)] !== void 0;
            h[e(1303)] = w0, h[e(974)] = u + G0, h[e(2487)] = f + "/" + x.util[e(1087)](l0), h[e(2139)] = x[e(1852)][e(2166)](x[e(2139)], l0, x.opts[e(581)]), h[e(1107)][F] = x.util[e(1186)](l0);
            var n0 = x[e(1999)](h);
            if (h[e(1870)] = J, x[e(1852)][e(2600)](n0, T) < 2) {
              n0 = x[e(1852)].varReplace(n0, T, s0);
              var X0 = s0;
            } else {
              var X0 = T;
              a += e(460) + T + e(2707) + s0 + "; ";
            }
            if (ne) a += " " + n0 + " ";
            else {
              if (u0 && u0[l0]) {
                a += e(2536) + X0 + e(2288), V && (a += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + x[e(1852)][e(1417)](l0) + e(1539)), a += e(2677) + y + e(641);
                var A = x[e(2139)], G = f, O0 = x[e(1852)][e(1417)](l0);
                x[e(1116)][e(582)] && (x[e(2139)] = x.util[e(2166)](A, l0, x[e(1116)][e(581)])), f = x.errSchemaPath + e(1393);
                var Q = Q || [];
                Q.push(a), a = "", x[e(1044)] !== !1 ? (a += " { keyword: '" + e(1058) + e(2167) + x[e(2139)] + " , schemaPath: " + x[e(1852)][e(1186)](f) + e(888) + O0 + "' } ", x[e(1116)][e(414)] !== !1 && (a += e(1569), x.opts._errorDataPathProperty ? a += e(1591) : a += e(1791) + O0 + "\\'", a += "' "), x[e(1116)][e(1145)] && (a += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += e(2237);
                var W = a;
                a = Q.pop(), !x[e(1384)] && d ? x.async ? a += e(1075) + W + "]); " : a += " validate.errors = [" + W + e(1016) : a += e(804) + W + e(2357), f = G, x[e(2139)] = A, a += e(993);
              } else d ? (a += e(2536) + X0 + e(2288), V && (a += " || ! Object.prototype.hasOwnProperty.call(" + l + e(2473) + x.util[e(1417)](l0) + e(1539)), a += ") { " + y + e(1284)) : (a += e(2286) + X0 + e(1450), V && (a += e(2493) + l + e(2473) + x[e(1852)][e(1417)](l0) + e(1539)), a += e(1625));
              a += " " + n0 + e(859);
            }
          }
          d && (a += e(2286) + y + e(2677), m += "}");
        }
    }
    if (O[e(1027)]) {
      var V0 = O;
      if (V0)
        for (var q0, _0 = -1, Ze = V0.length - 1; _0 < Ze; ) {
          q0 = V0[_0 += 1];
          var w0 = C[q0];
          if (x[e(1116)][e(603)] ? typeof w0 == e(644) && Object[e(2559)](w0)[e(1027)] > 0 || w0 === !1 : x.util.schemaHasRules(w0, x.RULES[e(1676)])) {
            h.schema = w0, h[e(974)] = x[e(974)] + e(1723) + x.util[e(2027)](q0), h.errSchemaPath = x[e(2487)] + e(2629) + x[e(1852)][e(1087)](q0), V ? a += " " + R + e(2707) + R + e(832) + l + "); for (var " + k + e(1431) + k + "<" + R + ".length; " + k + "++) { var " + w + " = " + R + "[" + k + e(1711) : a += e(1471) + w + e(2541) + l + e(2677), a += " if (" + x[e(2196)](q0) + e(808) + w + e(2228), h[e(2139)] = x.util[e(2689)](x[e(2139)], w, x[e(1116)][e(581)]);
            var s0 = l + "[" + w + "]";
            h.dataPathArr[F] = w;
            var n0 = x[e(1999)](h);
            h.baseId = J, x[e(1852)][e(2600)](n0, T) < 2 ? a += " " + x[e(1852)][e(1970)](n0, T, s0) + " " : a += e(460) + T + e(2707) + s0 + "; " + n0 + " ", d && (a += " if (!" + y + ") break; "), a += e(859), d && (a += e(2371) + y + e(404)), a += " }  ", d && (a += e(2286) + y + e(2677), m += "}");
          }
        }
    }
    return d && (a += " " + m + e(2286) + v + " == errors) {"), a;
  }), Et;
}
var Pt, La;
function cc() {
  return La || (La = 1, Pt = function(x, t, r) {
    var e = K, a = " ", n = x.level, o = x[e(612)], c = x.schema[t], u = x[e(974)] + x[e(1852)][e(2027)](t), f = x[e(2487)] + "/" + t, d = !x[e(1116)][e(1122)], l = e(984) + (o || ""), v = e(915) + n, h = x[e(1852)][e(1840)](x), m = "";
    h[e(2659)]++;
    var y = "valid" + h[e(2659)];
    if (a += e(1251) + v + e(2267), x[e(1116)][e(603)] ? typeof c == e(644) && Object.keys(c)[e(1027)] > 0 || c === !1 : x[e(1852)][e(1436)](c, x[e(1704)][e(1676)])) {
      h.schema = c, h[e(974)] = u, h[e(2487)] = f;
      var w = e(2640) + n, k = e(2685) + n, F = "i" + n, T = "' + " + w + e(2550), R = h.dataLevel = x[e(612)] + 1, P = e(984) + R, C = e(1516) + n, O = x.opts[e(2408)], j = x.baseId;
      O && (a += e(460) + C + e(2250)), O ? a += " " + C + e(2707) + C + " || Object.keys(" + l + e(2430) + k + "=0; " + k + "<" + C + e(2316) + k + "++) { var " + w + e(2707) + C + "[" + k + "]; " : a += e(1471) + w + e(2541) + l + e(2677), a += e(2628) + n + e(2545);
      var M = w, N = x[e(1384)];
      x[e(1384)] = h.compositeRule = !0;
      var q = x.validate(h);
      h[e(1870)] = j, x.util[e(2600)](q, P) < 2 ? a += " " + x[e(1852)][e(1970)](q, P, M) + " " : a += e(460) + P + e(2707) + M + "; " + q + " ", x.compositeRule = h[e(1384)] = N, a += " if (!" + y + ") { for (var " + F + e(1862) + n + "; " + F + e(1790) + F + "++) { vErrors[" + F + "].propertyName = " + w + e(2505), x[e(1044)] !== !1 ? (a += e(649) + "propertyNames" + e(2167) + x.errorPath + e(1652) + x[e(1852)][e(1186)](f) + e(2589) + T + e(1222), x[e(1116)][e(414)] !== !1 && (a += e(716) + T + e(1461)), x[e(1116)][e(1145)] && (a += e(1355) + u + " , parentSchema: validate.schema" + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += e(2237), a += e(2357), !x[e(1384)] && d && (x[e(1927)] ? a += " throw new ValidationError(vErrors); " : a += e(1375)), d && (a += e(2393)), a += e(1351);
    }
    return d && (a += " " + m + " if (" + v + e(1874)), a;
  }), Pt;
}
var It, $a;
function uc() {
  return $a || ($a = 1, It = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x.dataLevel, c = x[e(1303)][t], u = x[e(974)] + x.util[e(2027)](t), f = x[e(2487)] + "/" + t, d = !x.opts.allErrors, l = e(984) + (o || ""), v = e(2073) + n, h = x[e(1116)][e(1008)] && c && c[e(1008)];
    h && (a += " var schema" + n + e(2707) + x[e(1852)][e(1907)](c[e(1008)], o, x[e(1107)]) + "; ");
    var m = "schema" + n;
    if (!h)
      if (c[e(1027)] < x[e(1116)][e(1746)] && x[e(1303)][e(2423)] && Object[e(2559)](x[e(1303)][e(2423)])[e(1027)]) {
        var R = [], y = c;
        if (y)
          for (var w, k = -1, F = y[e(1027)] - 1; k < F; ) {
            w = y[k += 1];
            var T = x[e(1303)].properties[w];
            !(T && (x[e(1116)][e(603)] ? typeof T == e(644) && Object[e(2559)](T)[e(1027)] > 0 || T === !1 : x[e(1852)][e(1436)](T, x[e(1704)][e(1676)]))) && (R[R[e(1027)]] = w);
          }
      } else var R = c;
    if (h || R[e(1027)]) {
      var P = x[e(2139)], C = h || R[e(1027)] >= x[e(1116)][e(1746)], O = x[e(1116)].ownProperties;
      if (d)
        if (a += e(1839) + n + "; ", C) {
          !h && (a += e(460) + m + e(1161) + u + "; ");
          var j = "i" + n, M = e(1303) + n + "[" + j + "]", N = "' + " + M + " + '";
          x[e(1116)][e(582)] && (x.errorPath = x.util[e(2689)](P, M, x[e(1116)].jsonPointers)), a += e(460) + v + e(404), h && (a += e(1358) + n + e(1632) + v + " = true; else if (!Array.isArray(schema" + n + e(1967) + v + e(2760)), a += e(1471) + j + e(2255) + j + e(897) + m + e(2316) + j + "++) { " + v + e(2707) + l + "[" + m + "[" + j + e(2055), O && (a += e(2493) + l + ", " + m + "[" + j + e(1847)), a += e(2448) + v + e(2268), h && (a += e(533)), a += e(2359) + v + e(2740);
          var q = q || [];
          q[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += " { keyword: 'required" + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](f) + " , params: { missingProperty: '" + N + e(1222), x.opts[e(414)] !== !1 && (a += e(1569), x[e(1116)]._errorDataPathProperty ? a += e(1591) : a += e(1791) + N + "\\'", a += "' "), x[e(1116)][e(1145)] && (a += e(1355) + u + e(1846) + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += e(2237);
          var $ = a;
          a = q[e(907)](), !x[e(1384)] && d ? x.async ? a += " throw new ValidationError([" + $ + e(551) : a += e(2120) + $ + e(1016) : a += " var err = " + $ + e(2357), a += e(993);
        } else {
          a += e(2536);
          var U = R;
          if (U)
            for (var V, j = -1, J = U[e(1027)] - 1; j < J; ) {
              V = U[j += 1], j && (a += e(2129));
              var c0 = x[e(1852)][e(2027)](V), u0 = l + c0;
              a += e(1477) + u0 + " === undefined ", O && (a += e(1537) + l + e(2473) + x[e(1852)][e(1417)](V) + e(1539)), a += e(2326) + n + e(2707) + x[e(1852)].toQuotedString(x[e(1116)][e(581)] ? V : c0) + e(1959);
            }
          a += e(1547);
          var M = e(416) + n, N = "' + " + M + " + '";
          x[e(1116)]._errorDataPathProperty && (x[e(2139)] = x.opts[e(581)] ? x[e(1852)][e(2689)](P, M, !0) : P + " + " + M);
          var q = q || [];
          q[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += e(649) + "required" + e(2167) + x[e(2139)] + " , schemaPath: " + x[e(1852)][e(1186)](f) + e(888) + N + "' } ", x.opts[e(414)] !== !1 && (a += e(1569), x[e(1116)][e(582)] ? a += e(1591) : a += e(1791) + N + "\\'", a += "' "), x.opts[e(1145)] && (a += e(1355) + u + e(1846) + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += e(2237);
          var $ = a;
          a = q[e(907)](), !x[e(1384)] && d ? x[e(1927)] ? a += e(1075) + $ + e(551) : a += e(2120) + $ + e(1016) : a += e(804) + $ + e(2357), a += e(993);
        }
      else if (C) {
        !h && (a += e(460) + m + e(1161) + u + "; ");
        var j = "i" + n, M = e(1303) + n + "[" + j + "]", N = e(1352) + M + " + '";
        x[e(1116)][e(582)] && (x[e(2139)] = x[e(1852)].getPathExpr(P, M, x[e(1116)].jsonPointers)), h && (a += " if (" + m + e(2507) + m + e(2127), x[e(1044)] !== !1 ? (a += e(649) + "required" + e(2167) + x[e(2139)] + e(1652) + x[e(1852)].toQuotedString(f) + e(888) + N + e(1222), x[e(1116)][e(414)] !== !1 && (a += e(1569), x[e(1116)][e(582)] ? a += e(1591) : a += e(1791) + N + "\\'", a += "' "), x[e(1116)][e(1145)] && (a += e(1355) + u + e(1846) + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += " {} ", a += e(899) + m + e(2569)), a += e(1471) + j + e(2255) + j + " < " + m + ".length; " + j + e(1806) + l + "[" + m + "[" + j + e(1469), O && (a += e(1537) + l + ", " + m + "[" + j + "]) "), a += ") {  var err =   ", x[e(1044)] !== !1 ? (a += e(649) + e(1058) + e(2167) + x[e(2139)] + e(1652) + x.util.toQuotedString(f) + e(888) + N + e(1222), x[e(1116)][e(414)] !== !1 && (a += e(1569), x.opts._errorDataPathProperty ? a += "is a required property" : a += e(1791) + N + "\\'", a += "' "), x.opts[e(1145)] && (a += e(1355) + u + " , parentSchema: validate.schema" + x[e(974)] + " , data: " + l + " "), a += e(859)) : a += e(2237), a += e(981), h && (a += "  }  ");
      } else {
        var d0 = R;
        if (d0)
          for (var V, o0 = -1, l0 = d0[e(1027)] - 1; o0 < l0; ) {
            V = d0[o0 += 1];
            var c0 = x.util[e(2027)](V), N = x.util[e(1417)](V), u0 = l + c0;
            x[e(1116)][e(582)] && (x.errorPath = x[e(1852)].getPath(P, V, x[e(1116)][e(581)])), a += e(2536) + u0 + " === undefined ", O && (a += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + x[e(1852)].escapeQuotes(V) + "') "), a += e(883), x[e(1044)] !== !1 ? (a += e(649) + e(1058) + e(2167) + x[e(2139)] + e(1652) + x[e(1852)][e(1186)](f) + e(888) + N + e(1222), x.opts[e(414)] !== !1 && (a += " , message: '", x[e(1116)][e(582)] ? a += e(1591) : a += "should have required property \\'" + N + "\\'", a += "' "), x[e(1116)][e(1145)] && (a += e(1355) + u + " , parentSchema: validate.schema" + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += " {} ", a += e(2181);
          }
      }
      x[e(2139)] = P;
    } else d && (a += e(826));
    return a;
  }), It;
}
var Rt, za;
function fc() {
  return za || (za = 1, Rt = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x[e(1303)][t], u = x[e(974)] + x[e(1852)][e(2027)](t), f = x.errSchemaPath + "/" + t, d = !x[e(1116)][e(1122)], l = e(984) + (o || ""), v = e(2073) + n, h = x[e(1116)].$data && c && c[e(1008)], m;
    if (h ? (a += e(433) + n + e(2707) + x.util.getData(c[e(1008)], o, x[e(1107)]) + "; ", m = e(1303) + n) : m = c, (c || h) && x[e(1116)][e(2635)] !== !1) {
      h && (a += e(460) + v + e(1936) + m + e(724) + m + e(1632) + v + e(2465) + m + " != 'boolean') " + v + e(1831)), a += e(659) + l + ".length , " + v + e(1961);
      var y = x[e(1303)][e(1438)] && x.schema[e(1438)][e(2122)], w = Array.isArray(y);
      if (!y || y == e(644) || y == e(2052) || w && (y[e(393)](e(644)) >= 0 || y[e(393)](e(2052)) >= 0)) a += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + l + "[i], " + l + e(486) + v + e(709);
      else {
        a += e(1809) + l + "[i]; ";
        var k = e(1314) + (w ? "s" : "");
        a += e(2286) + x[e(1852)][k](y, e(1713), x[e(1116)][e(550)], !0) + e(1525), w && (a += e(1396)), a += " if (typeof itemIndices[item] == 'number') { " + v + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
      }
      a += e(859), h && (a += e(533)), a += e(1883) + v + ") {   ";
      var F = F || [];
      F[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += " { keyword: '" + e(2635) + "' , dataPath: (dataPath || '') + " + x[e(2139)] + " , schemaPath: " + x.util[e(1186)](f) + e(1894), x.opts[e(414)] !== !1 && (a += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), x[e(1116)][e(1145)] && (a += e(2630), h ? a += "validate.schema" + u : a += "" + c, a += e(2214) + x[e(974)] + e(1385) + l + " "), a += e(859)) : a += e(2237);
      var T = a;
      a = F[e(907)](), !x.compositeRule && d ? x[e(1927)] ? a += " throw new ValidationError([" + T + e(551) : a += e(2120) + T + e(1016) : a += " var err = " + T + e(2357), a += " } ", d && (a += e(642));
    } else d && (a += " if (true) { ");
    return a;
  }), Rt;
}
var Ct, Ha;
function dc() {
  return Ha || (Ha = 1, Ct = { $ref: K2(), allOf: J2(), anyOf: G2(), $comment: Q2(), const: X2(), contains: Y2(), dependencies: _2(), enum: ec(), format: xc(), if: tc(), items: rc(), maximum: Ia(), minimum: Ia(), maxItems: Ca(), minItems: Ca(), maxLength: Na(), minLength: Na(), maxProperties: Ta(), minProperties: Ta(), multipleOf: ac(), not: sc(), oneOf: nc(), pattern: ic(), properties: oc(), propertyNames: cc(), required: uc(), uniqueItems: fc(), validate: yn() }), Ct;
}
var Ft, Ua;
function lc() {
  var i = s;
  if (Ua) return Ft;
  Ua = 1;
  var x = dc(), t = We()[i(1871)];
  return Ft = function() {
    var e = i, a = [{ type: e(2479), rules: [{ maximum: [e(1304)] }, { minimum: [e(1735)] }, e(2752), "format"] }, { type: e(1278), rules: [e(2380), e(1312), e(1811), e(1533)] }, { type: e(2052), rules: ["maxItems", e(2251), "items", e(935), "uniqueItems"] }, { type: e(644), rules: ["maxProperties", e(2717), e(1058), e(1610), "propertyNames", { properties: [e(997), "patternProperties"] }] }, { rules: [e(814), "const", e(635), e(2720), e(2616), "oneOf", e(2009), "if"] }], n = [e(2122), e(2723)], o = [e(2183), e(1346), "id", e(1008), e(1761), e(1006), "description", e(1479), e(2730), "examples", "readOnly", e(1592), "contentMediaType", "contentEncoding", "additionalItems", e(2397), "else"], c = [e(2479), e(1155), e(1278), e(2052), e(644), e(2665), e(697)];
    return a[e(1676)] = t(n), a[e(1974)] = t(c), a[e(1455)](function(u) {
      var f = e;
      u[f(526)] = u.rules[f(802)](function(d) {
        var l = f, v;
        if (typeof d == l(644)) {
          var h = Object[l(2559)](d)[0];
          v = d[h], d = h, v[l(1455)](function(y) {
            var w = l;
            n[w(1020)](y), a[w(1676)][y] = !0;
          });
        }
        n[l(1020)](d);
        var m = a[l(1676)][d] = { keyword: d, code: x[d], implements: v };
        return m;
      }), a[f(1676)][f(2723)] = { keyword: f(2723), code: x[f(2723)] }, u[f(2122)] && (a[f(1974)][u.type] = u);
    }), a[e(789)] = t(n[e(383)](o)), a[e(1694)] = {}, a;
  }, Ft;
}
var Nt, Va;
function hc() {
  var i = s;
  if (Va) return Nt;
  Va = 1;
  var x = ["multipleOf", i(2005), i(1304), i(714), i(1735), i(2380), "minLength", i(1811), "additionalItems", i(455), i(2251), i(2635), "maxProperties", "minProperties", "required", i(997), i(635), "format", i(1071)];
  return Nt = function(t, r) {
    for (var e = i, a = 0; a < r[e(1027)]; a++) {
      t = JSON[e(2673)](JSON[e(2351)](t));
      var n = r[a][e(2432)]("/"), o = t, c;
      for (c = 1; c < n[e(1027)]; c++) o = o[n[c]];
      for (c = 0; c < x[e(1027)]; c++) {
        var u = x[c], f = o[u];
        f && (o[u] = { anyOf: [f, { $ref: e(1995) }] });
      }
    }
    return t;
  }, Nt;
}
var qt, Wa;
function pc() {
  var i = s;
  if (Wa) return qt;
  Wa = 1;
  var x = ur()[i(2384)];
  qt = t;
  function t(r, e, a) {
    var n = i, o = this;
    if (typeof this[n(2724)].loadSchema != n(2138)) throw new Error(n(1382));
    typeof e == n(2138) && (a = e, e = void 0);
    var c = u(r).then(function() {
      var d = n, l = o[d(1391)](r, void 0, e);
      return l[d(1999)] || f(l);
    });
    return a && c[n(2397)](function(d) {
      a(null, d);
    }, a), c;
    function u(d) {
      var l = n, v = d[l(2183)];
      return v && !o[l(1660)](v) ? t.call(o, { $ref: v }, !0) : Promise.resolve();
    }
    function f(d) {
      var l = n;
      try {
        return o[l(2032)](d);
      } catch (h) {
        if (h instanceof x) return v(h);
        throw h;
      }
      function v(h) {
        var m = l, y = h[m(2140)];
        if (F(y)) throw new Error(m(1126) + y + " is loaded but " + h.missingRef + m(1118));
        var w = o[m(940)][y];
        return !w && (w = o._loadingSchemas[y] = o._opts.loadSchema(y), w[m(2397)](k, k)), w[m(2397)](function(T) {
          var R = m;
          if (!F(y)) return u(T)[R(2397)](function() {
            var P = R;
            F(y) || o[P(1333)](T, y, void 0, e);
          });
        })[m(2397)](function() {
          return f(d);
        });
        function k() {
          var T = m;
          delete o[T(940)][y];
        }
        function F(T) {
          var R = m;
          return o[R(1960)][T] || o[R(360)][T];
        }
      }
    }
  }
  return qt;
}
var Tt, Za;
function mc() {
  return Za || (Za = 1, Tt = function(x, t, r) {
    var e = K, a = " ", n = x[e(2659)], o = x[e(612)], c = x[e(1303)][t], u = x[e(974)] + x.util[e(2027)](t), f = x[e(2487)] + "/" + t, d = !x[e(1116)][e(1122)], l, v = "data" + (o || ""), h = e(2073) + n, m = e(915) + n, y = x[e(1116)][e(1008)] && c && c[e(1008)], w;
    y ? (a += e(433) + n + " = " + x.util[e(1907)](c[e(1008)], o, x[e(1107)]) + "; ", w = e(1303) + n) : w = c;
    var k = this, F = e(1984) + n, T = k[e(1984)], R = "", P, C, O, j, M;
    if (y && T.$data) {
      M = "keywordValidate" + n;
      var N = T[e(1510)];
      a += e(460) + F + " = RULES.custom['" + t + e(2343) + M + e(2707) + F + e(2726);
    } else {
      if (j = x[e(866)](k, c, x[e(1303)], x), !j) return;
      w = "validate.schema" + u, M = j[e(1749)], P = T.compile, C = T[e(2508)], O = T[e(390)];
    }
    var q = M + e(1347), $ = "i" + n, U = e(1239) + n, V = T[e(1927)];
    if (V && !x[e(1927)]) throw new Error(e(2525));
    if (!(C || O) && (a += "" + q + e(1710)), a += e(1251) + m + e(606) + h + ";", y && T.$data && (R += "}", a += e(2286) + w + e(2495) + h + e(1284), N && (R += "}", a += " " + h + e(2707) + F + e(557) + w + e(936) + h + e(2677))), C) T[e(552)] ? a += " " + j[e(1999)] + " " : a += " " + h + e(2707) + j.validate + "; ";
    else if (O) {
      var J = x[e(1852)][e(1840)](x), R = "";
      J.level++;
      var c0 = e(2073) + J[e(2659)];
      J[e(1303)] = j.validate, J[e(974)] = "";
      var u0 = x[e(1384)];
      x[e(1384)] = J.compositeRule = !0;
      var d0 = x[e(1999)](J).replace(/validate\.schema/g, M);
      x[e(1384)] = J[e(1384)] = u0, a += " " + d0;
    } else {
      var o0 = o0 || [];
      o0[e(1020)](a), a = "", a += "  " + M + e(1336), x.opts[e(1514)] ? a += e(2386) : a += e(626), P || T[e(1303)] === !1 ? a += e(1577) + v + " " : a += e(1577) + w + e(1577) + v + " , validate.schema" + x[e(974)] + " ", a += e(2124), x[e(2139)] != '""' && (a += " + " + x.errorPath);
      var l0 = o ? e(984) + (o - 1 || "") : "parentData", S0 = o ? x[e(1107)][o] : e(1638);
      a += " , " + l0 + " , " + S0 + e(1152);
      var y0 = a;
      a = o0.pop(), T[e(2400)] === !1 ? (a += " " + h + e(2707), V && (a += e(363)), a += "" + y0 + "; ") : V ? (q = e(2280) + n, a += e(460) + q + e(2613) + h + e(2516) + y0 + e(564) + h + e(2699) + q + e(2642)) : a += " " + q + " = null; " + h + e(2707) + y0 + "; ";
    }
    if (T.modifying && (a += e(2286) + l0 + ") " + v + " = " + l0 + "[" + S0 + "];"), a += "" + R, T[e(2073)]) d && (a += " if (true) { ");
    else {
      a += " if ( ", T[e(2073)] === void 0 ? (a += " !", O ? a += "" + c0 : a += "" + h) : a += " " + !T[e(2073)] + " ", a += e(2677), l = k[e(454)];
      var o0 = o0 || [];
      o0.push(a), a = "";
      var o0 = o0 || [];
      o0[e(1020)](a), a = "", x[e(1044)] !== !1 ? (a += " { keyword: '" + (l || e(1694)) + "' , dataPath: (dataPath || '') + " + x[e(2139)] + e(1652) + x.util.toQuotedString(f) + e(1307) + k[e(454)] + e(1222), x[e(1116)][e(414)] !== !1 && (a += e(1366) + k[e(454)] + e(2347)), x[e(1116)].verbose && (a += e(1355) + u + " , parentSchema: validate.schema" + x.schemaPath + " , data: " + v + " "), a += e(859)) : a += e(2237);
      var M0 = a;
      a = o0[e(907)](), !x[e(1384)] && d ? x[e(1927)] ? a += e(1075) + M0 + e(551) : a += " validate.errors = [" + M0 + e(1016) : a += e(804) + M0 + e(2357);
      var q0 = a;
      a = o0[e(907)](), C ? T.errors ? T.errors != e(365) && (a += e(2419) + $ + "=" + m + "; " + $ + e(1790) + $ + "++) { var " + U + " = vErrors[" + $ + "]; if (" + U + e(1659) + U + ".dataPath = (dataPath || '') + " + x.errorPath + e(1936) + U + e(2606) + U + e(2361) + f + e(1766), x.opts.verbose && (a += " " + U + e(2660) + w + "; " + U + ".data = " + v + "; "), a += e(859)) : T[e(2400)] === !1 ? a += " " + q0 + " " : (a += e(2286) + m + e(421) + q0 + e(2669) + $ + "=" + m + "; " + $ + e(1790) + $ + e(696) + U + e(1100) + $ + "]; if (" + U + ".dataPath === undefined) " + U + ".dataPath = (dataPath || '') + " + x[e(2139)] + e(1936) + U + e(2606) + U + e(2361) + f + e(1766), x.opts[e(1145)] && (a += " " + U + e(2660) + w + "; " + U + e(1400) + v + "; "), a += e(905)) : O ? (a += e(2637), x[e(1044)] !== !1 ? (a += " { keyword: '" + (l || e(1694)) + e(2167) + x[e(2139)] + e(1652) + x.util[e(1186)](f) + " , params: { keyword: '" + k[e(454)] + e(1222), x.opts.messages !== !1 && (a += ` , message: 'should pass "` + k[e(454)] + e(2347)), x[e(1116)].verbose && (a += " , schema: validate.schema" + u + e(1846) + x[e(974)] + e(1385) + v + " "), a += e(859)) : a += e(2237), a += e(2357), !x[e(1384)] && d && (x.async ? a += e(1642) : a += e(1375))) : T[e(2400)] === !1 ? a += " " + q0 + " " : (a += e(1045) + q + ")) { if (vErrors === null) vErrors = " + q + "; else vErrors = vErrors.concat(" + q + "); errors = vErrors.length;  for (var " + $ + "=" + m + "; " + $ + e(1790) + $ + e(696) + U + e(1100) + $ + e(2247) + U + e(1659) + U + e(875) + x[e(2139)] + e(428) + U + e(2361) + f + '";  ', x.opts[e(1145)] && (a += " " + U + e(2660) + w + "; " + U + e(1400) + v + "; "), a += e(2186) + q0 + e(859)), a += e(859), d && (a += e(642));
    }
    return a;
  }), Tt;
}
const vc = s(1923), gc = s(1923), yc = s(744), bc = { schemaArray: { type: s(2052), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: s(1155), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: s(1589) }, { default: 0 }] }, simpleTypes: { enum: [s(2052), s(2665), s(1155), s(697), s(2479), s(644), s(1278)] }, stringArray: { type: s(2052), items: { type: "string" }, uniqueItems: !0, default: [] } }, wc = [s(644), s(2665)], Sc = { $id: { type: s(1278), format: s(1822) }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: s(1822) }, $comment: { type: s(1278) }, title: { type: s(1278) }, description: { type: s(1278) }, default: !0, readOnly: { type: s(2665), default: !1 }, examples: { type: s(2052), items: !0 }, multipleOf: { type: s(2479), exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: s(2479) }, minimum: { type: s(2479) }, exclusiveMinimum: { type: s(2479) }, maxLength: { $ref: s(1589) }, minLength: { $ref: s(467) }, pattern: { type: s(1278), format: s(2e3) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: s(2665), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: s(1589) }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: s(597) }, additionalProperties: { $ref: "#" }, definitions: { type: s(644), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: s(644), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: s(597) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: s(2052), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: s(1764) }, { type: s(2052), items: { $ref: s(1764) }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: s(1278) }, contentEncoding: { type: s(1278) }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: s(1805) }, anyOf: { $ref: s(1805) }, oneOf: { $ref: s(1805) }, not: { $ref: "#" } }, bn = { $schema: vc, $id: gc, title: yc, definitions: bc, type: wc, properties: Sc, default: !0 };
var At, Ba;
function kc() {
  var i = s;
  if (Ba) return At;
  Ba = 1;
  var x = bn;
  return At = { $id: i(2302), definitions: { simpleTypes: x.definitions.simpleTypes }, type: i(644), dependencies: { schema: ["validate"], $data: [i(1999)], statements: [i(2508)], valid: { not: { required: [i(390)] } } }, properties: { type: x[i(2423)][i(2122)], schema: { type: "boolean" }, statements: { type: i(2665) }, dependencies: { type: i(2052), items: { type: i(1278) } }, metaSchema: { type: i(644) }, modifying: { type: i(2665) }, valid: { type: i(2665) }, $data: { type: i(2665) }, async: { type: i(2665) }, errors: { anyOf: [{ type: i(2665) }, { const: i(365) }] } } }, At;
}
var Ot, Ka;
function Ec() {
  if (Ka) return Ot;
  Ka = 1;
  var i = /^[a-z_$][a-z0-9_$-]*$/i, x = mc(), t = kc();
  Ot = { add: r, get: e, remove: a, validate: n };
  function r(o, c) {
    var u = K, f = this[u(1704)];
    if (f.keywords[o]) throw new Error(u(1433) + o + " is already defined");
    if (!i[u(1063)](o)) throw new Error("Keyword " + o + u(2307));
    if (c) {
      this[u(2069)](c, !0);
      var d = c.type;
      if (Array[u(710)](d))
        for (var l = 0; l < d.length; l++) h(o, d[l], c);
      else h(o, d, c);
      var v = c[u(1014)];
      v && (c[u(1008)] && this[u(2724)][u(1008)] && (v = { anyOf: [v, { $ref: u(1995) }] }), c[u(1510)] = this[u(2378)](v, !0));
    }
    f[u(789)][o] = f[u(1676)][o] = !0;
    function h(m, y, w) {
      for (var k = u, F, T = 0; T < f[k(1027)]; T++) {
        var R = f[T];
        if (R.type == y) {
          F = R;
          break;
        }
      }
      !F && (F = { type: y, rules: [] }, f.push(F));
      var P = { keyword: m, definition: w, custom: !0, code: x, implements: w[k(520)] };
      F[k(526)][k(1020)](P), f[k(1694)][m] = P;
    }
    return this;
  }
  function e(o) {
    var c = K, u = this[c(1704)][c(1694)][o];
    return u ? u[c(1984)] : this[c(1704)][c(789)][o] || !1;
  }
  function a(o) {
    var c = K, u = this[c(1704)];
    delete u.keywords[o], delete u[c(1676)][o], delete u[c(1694)][o];
    for (var f = 0; f < u[c(1027)]; f++)
      for (var d = u[f][c(526)], l = 0; l < d[c(1027)]; l++)
        if (d[l][c(454)] == o) {
          d[c(1849)](l, 1);
          break;
        }
    return this;
  }
  function n(o, c) {
    var u = K;
    n[u(2400)] = null;
    var f = this._validateKeyword = this[u(831)] || this.compile(t, !0);
    if (f(o)) return !0;
    if (n[u(2400)] = f[u(2400)], c) throw new Error(u(423) + this[u(1562)](f[u(2400)]));
    return !1;
  }
  return Ot;
}
const Pc = "http://json-schema.org/draft-07/schema#", Ic = s(1995), Rc = s(2145), Cc = "object", Fc = [s(1008)], Nc = { $data: { type: s(1278), anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, qc = !1, Tc = { $schema: Pc, $id: Ic, description: Rc, type: Cc, required: Fc, properties: Nc, additionalProperties: qc };
var Dt, Ja;
function Ac() {
  var i = s;
  if (Ja) return Dt;
  Ja = 1;
  var x = W2(), t = cr(), r = Z2(), e = vn(), a = gn(), n = B2(), o = lc(), c = hc(), u = We();
  Dt = m, m[i(1745)].validate = y, m[i(1745)][i(2378)] = w, m[i(1745)][i(1333)] = k, m[i(1745)][i(1730)] = F, m[i(1745)][i(1510)] = T, m.prototype[i(1660)] = P, m[i(1745)][i(2690)] = j, m[i(1745)][i(1143)] = u0, m[i(1745)][i(1562)] = c0, m[i(1745)][i(1391)] = N, m[i(1745)][i(2032)] = q, m.prototype.compileAsync = pc();
  var f = Ec();
  m.prototype.addKeyword = f[i(1988)], m[i(1745)][i(763)] = f.get, m.prototype[i(1722)] = f[i(957)], m[i(1745)][i(2069)] = f[i(1999)];
  var d = ur();
  m[i(2731)] = d[i(1096)], m.MissingRefError = d[i(2384)], m.$dataMetaSchema = c;
  var l = i(567), v = [i(992), i(353), i(2442), "strictDefaults"], h = [i(1022)];
  function m(D) {
    var A = i;
    if (!(this instanceof m)) return new m(D);
    D = this[A(2724)] = u[A(1840)](D) || {}, q0(this), this[A(360)] = {}, this[A(1960)] = {}, this._fragments = {}, this[A(1553)] = n(D[A(1533)]), this[A(543)] = D[A(1277)] || new r(), this[A(940)] = {}, this[A(2449)] = [], this[A(1704)] = o(), this[A(2698)] = $(D), D[A(1746)] = D[A(1746)] || 1 / 0, D[A(658)] == A(1904) && (D[A(582)] = !0), D[A(1464)] === void 0 && (D.serialize = a), this[A(2472)] = M0(this), D[A(628)] && l0(this), D[A(789)] && S0(this), d0(this), typeof D[A(449)] == "object" && this[A(1730)](D.meta), D[A(2526)] && this[A(948)](A(2526), { metaSchema: { type: A(2665) } }), o0(this);
  }
  function y(D, A) {
    var L = i, G;
    if (typeof D == "string") {
      if (G = this[L(1660)](D), !G) throw new Error(L(1132) + D + '"');
    } else {
      var Q = this[L(1391)](D);
      G = Q[L(1999)] || this._compile(Q);
    }
    var W = G(A);
    return G[L(1761)] !== !0 && (this[L(2400)] = G.errors), W;
  }
  function w(D, A) {
    var L = i, G = this._addSchema(D, void 0, A);
    return G[L(1999)] || this[L(2032)](G);
  }
  function k(D, A, L, G) {
    var Q = i;
    if (Array[Q(710)](D)) {
      for (var W = 0; W < D[Q(1027)]; W++) this[Q(1333)](D[W], void 0, L, G);
      return this;
    }
    var X = this._getId(D);
    if (X !== void 0 && typeof X != Q(1278)) throw new Error(Q(963));
    return A = t[Q(1670)](A || X), y0(this, A), this[Q(360)][A] = this[Q(1391)](D, L, G, !0), this;
  }
  function F(D, A, L) {
    var G = i;
    return this[G(1333)](D, A, L, !0), this;
  }
  function T(D, A) {
    var L = i, G = D.$schema;
    if (G !== void 0 && typeof G != L(1278)) throw new Error(L(998));
    if (G = G || this._opts[L(583)] || R(this), !G) return this[L(2116)][L(2279)](L(477)), this[L(2400)] = null, !0;
    var Q = this[L(1999)](G, D);
    if (!Q && A) {
      var W = L(1866) + this[L(1562)]();
      if (this[L(2724)][L(1510)] == L(1448)) this[L(2116)][L(2463)](W);
      else throw new Error(W);
    }
    return Q;
  }
  function R(D) {
    var A = i, L = D[A(2724)][A(449)];
    return D[A(2724)][A(583)] = typeof L == A(644) ? D[A(2698)](L) || L : D[A(1660)](l) ? l : void 0, D[A(2724)].defaultMeta;
  }
  function P(D) {
    var A = i, L = O(this, D);
    switch (typeof L) {
      case A(644):
        return L[A(1999)] || this[A(2032)](L);
      case "string":
        return this.getSchema(L);
      case A(1584):
        return C(this, D);
    }
  }
  function C(D, A) {
    var L = i, G = t[L(1303)][L(1580)](D, { schema: {} }, A);
    if (G) {
      var Q = G[L(1303)], W = G.root, X = G.baseId, s0 = x[L(1580)](D, Q, W, void 0, X);
      return D[L(595)][A] = new e({ ref: A, fragment: !0, schema: Q, root: W, baseId: X, validate: s0 }), s0;
    }
  }
  function O(D, A) {
    var L = i;
    return A = t[L(1670)](A), D._schemas[A] || D._refs[A] || D[L(595)][A];
  }
  function j(D) {
    var A = i;
    if (D instanceof RegExp) return M(this, this._schemas, D), M(this, this[A(1960)], D), this;
    switch (typeof D) {
      case A(1584):
        return M(this, this[A(360)]), M(this, this._refs), this._cache.clear(), this;
      case A(1278):
        var L = O(this, D);
        return L && this[A(543)][A(1465)](L[A(945)]), delete this[A(360)][D], delete this[A(1960)][D], this;
      case A(644):
        var G = this._opts[A(1464)], Q = G ? G(D) : D;
        this[A(543)][A(1465)](Q);
        var W = this[A(2698)](D);
        W && (W = t[A(1670)](W), delete this._schemas[W], delete this[A(1960)][W]);
    }
    return this;
  }
  function M(D, A, L) {
    var G = i;
    for (var Q in A) {
      var W = A[Q];
      !W[G(449)] && (!L || L[G(1063)](Q)) && (D._cache.del(W[G(945)]), delete A[Q]);
    }
  }
  function N(D, A, L, G) {
    var Q = i;
    if (typeof D != Q(644) && typeof D != Q(2665)) throw new Error(Q(713));
    var W = this._opts.serialize, X = W ? W(D) : D, s0 = this[Q(543)][Q(2558)](X);
    if (s0) return s0;
    G = G || this[Q(2724)][Q(844)] !== !1;
    var n0 = t[Q(1670)](this[Q(2698)](D));
    n0 && G && y0(this, n0);
    var Y = this[Q(2724)][Q(1510)] !== !1 && !A, L0;
    Y && !(L0 = n0 && n0 == t[Q(1670)](D[Q(2183)])) && this.validateSchema(D, !0);
    var A0 = t[Q(465)][Q(1580)](this, D), U0 = new e({ id: n0, schema: D, localRefs: A0, cacheKey: X, meta: L });
    return n0[0] != "#" && G && (this._refs[n0] = U0), this[Q(543)][Q(673)](X, U0), Y && L0 && this[Q(1510)](D, !0), U0;
  }
  function q(D, A) {
    var L = i;
    if (D[L(847)])
      return D[L(1999)] = W, W.schema = D[L(1303)], W.errors = null, W[L(2206)] = A || W, D[L(1303)].$async === !0 && (W[L(1761)] = !0), W;
    D[L(847)] = !0;
    var G;
    D[L(449)] && (G = this[L(2724)], this[L(2724)] = this[L(2472)]);
    var Q;
    try {
      Q = x[L(1580)](this, D[L(1303)], A, D.localRefs);
    } catch (X) {
      throw delete D[L(1999)], X;
    } finally {
      D[L(847)] = !1, D.meta && (this._opts = G);
    }
    return D[L(1999)] = Q, D.refs = Q.refs, D.refVal = Q[L(638)], D[L(2206)] = Q[L(2206)], Q;
    function W() {
      var X = L, s0 = D[X(1999)], n0 = s0[X(1969)](this, arguments);
      return W.errors = s0[X(2400)], n0;
    }
  }
  function $(D) {
    var A = i;
    switch (D[A(2172)]) {
      case A(843):
        return J;
      case "id":
        return U;
      default:
        return V;
    }
  }
  function U(D) {
    var A = i;
    return D[A(1346)] && this[A(2116)][A(2279)](A(370), D[A(1346)]), D.id;
  }
  function V(D) {
    var A = i;
    return D.id && this.logger.warn(A(1875), D.id), D[A(1346)];
  }
  function J(D) {
    if (D.$id && D.id && D.$id != D.id) throw new Error("schema $id is different from id");
    return D.$id || D.id;
  }
  function c0(D, A) {
    var L = i;
    if (D = D || this[L(2400)], !D) return L(1910);
    A = A || {};
    for (var G = A[L(1224)] === void 0 ? ", " : A[L(1224)], Q = A[L(834)] === void 0 ? "data" : A.dataVar, W = "", X = 0; X < D[L(1027)]; X++) {
      var s0 = D[X];
      s0 && (W += Q + s0.dataPath + " " + s0.message + G);
    }
    return W.slice(0, -G[L(1027)]);
  }
  function u0(D, A) {
    var L = i;
    return typeof A == L(1278) && (A = new RegExp(A)), this._formats[D] = A, this;
  }
  function d0(D) {
    var A = i, L;
    if (D[A(2724)].$data && (L = Tc, D[A(1730)](L, L[A(1346)], !0)), D[A(2724)][A(449)] !== !1) {
      var G = bn;
      D._opts[A(1008)] && (G = c(G, h)), D[A(1730)](G, l, !0), D._refs[A(856)] = l;
    }
  }
  function o0(D) {
    var A = i, L = D._opts[A(1962)];
    if (L)
      if (Array[A(710)](L)) D.addSchema(L);
      else
        for (var G in L) D[A(1333)](L[G], G);
  }
  function l0(D) {
    var A = i;
    for (var L in D[A(2724)][A(628)]) {
      var G = D._opts.formats[L];
      D.addFormat(L, G);
    }
  }
  function S0(D) {
    var A = i;
    for (var L in D[A(2724)].keywords) {
      var G = D[A(2724)].keywords[L];
      D[A(948)](L, G);
    }
  }
  function y0(D, A) {
    var L = i;
    if (D[L(360)][A] || D._refs[A]) throw new Error(L(2117) + A + L(838));
  }
  function M0(D) {
    for (var A = i, L = u[A(1840)](D[A(2724)]), G = 0; G < v.length; G++) delete L[v[G]];
    return L;
  }
  function q0(D) {
    var A = i, L = D[A(2724)].logger;
    if (L === !1) D[A(2116)] = { log: Q0, warn: Q0, error: Q0 };
    else {
      if (L === void 0 && (L = console), !(typeof L == A(644) && L[A(1448)] && L[A(2279)] && L[A(2463)])) throw new Error(A(1942));
      D[A(2116)] = L;
    }
  }
  function Q0() {
  }
  return Dt;
}
var Oc = Ac();
const Dc = Zs(Oc);
class jc extends L2 {
  constructor(x, t) {
    var r = s, e;
    super(t), this._serverInfo = x, this[r(2039)] = (e = t == null ? void 0 : t[r(1055)]) !== null && e !== void 0 ? e : {}, this[r(1437)] = t == null ? void 0 : t[r(1691)], this[r(1311)](an, (a) => this[r(867)](a)), this.setNotificationHandler(sn, () => {
      var a = r, n;
      return (n = this[a(1950)]) === null || n === void 0 ? void 0 : n[a(1580)](this);
    });
  }
  [s(2460)](x) {
    var t = s;
    if (this[t(779)]) throw new Error(t(2033));
    this[t(2039)] = $2(this[t(2039)], x);
  }
  assertCapabilityForMethod(x) {
    var t = s, r, e, a;
    switch (x) {
      case t(1590):
        if (!(!((r = this[t(999)]) === null || r === void 0) && r[t(2655)])) throw new Error(t(1991) + x + ")");
        break;
      case "elicitation/create":
        if (!(!((e = this[t(999)]) === null || e === void 0) && e[t(1563)])) throw new Error(t(1925) + x + ")");
        break;
      case t(558):
        if (!(!((a = this[t(999)]) === null || a === void 0) && a[t(750)])) throw new Error(t(988) + x + ")");
        break;
    }
  }
  [s(2672)](x) {
    var t = s;
    switch (x) {
      case "notifications/message":
        if (!this[t(2039)][t(514)]) throw new Error("Server does not support logging (required for " + x + ")");
        break;
      case t(2108):
      case "notifications/resources/list_changed":
        if (!this[t(2039)][t(1408)]) throw new Error(t(2431) + x + ")");
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities[t(2090)]) throw new Error(t(376) + x + ")");
        break;
      case t(1669):
        if (!this._capabilities[t(1867)]) throw new Error(t(518) + x + ")");
        break;
    }
  }
  [s(1771)](x) {
    var t = s;
    switch (x) {
      case "sampling/createMessage":
        if (!this[t(2039)][t(2655)]) throw new Error(t(793) + x + ")");
        break;
      case "logging/setLevel":
        if (!this[t(2039)].logging) throw new Error(t(490) + x + ")");
        break;
      case t(1717):
      case t(553):
        if (!this[t(2039)].prompts) throw new Error(t(396) + x + ")");
        break;
      case t(2544):
      case "resources/templates/list":
      case t(1864):
        if (!this[t(2039)].resources) throw new Error(t(1842) + x + ")");
        break;
      case t(1755):
      case t(2355):
        if (!this[t(2039)][t(2090)]) throw new Error("Server does not support tools (required for " + x + ")");
        break;
    }
  }
  async [s(867)](x) {
    var t = s;
    const r = x.params[t(1218)];
    return this[t(999)] = x.params.capabilities, this[t(435)] = x[t(1534)][t(1042)], { protocolVersion: jo.includes(r) ? r : Qs, capabilities: this.getCapabilities(), serverInfo: this[t(2299)], ...this._instructions && { instructions: this[t(1437)] } };
  }
  [s(2462)]() {
    var x = s;
    return this[x(999)];
  }
  [s(1200)]() {
    return this._clientVersion;
  }
  getCapabilities() {
    var x = s;
    return this[x(2039)];
  }
  async ping() {
    var x = s;
    return this[x(1637)]({ method: x(1345) }, Yt);
  }
  async [s(1559)](x, t) {
    var r = s;
    return this.request({ method: r(1590), params: x }, hn, t);
  }
  async [s(2715)](x, t) {
    var r = s;
    const e = await this.request({ method: r(1620), params: x }, pn, t);
    if (e.action === r(1973) && e[r(886)]) try {
      const a = new Dc(), n = a[r(2378)](x[r(1052)]);
      if (!n(e.content)) throw new Te(be[r(2156)], r(692) + a[r(1562)](n[r(2400)]));
    } catch (a) {
      throw a instanceof Te ? a : new Te(be[r(2029)], r(2312) + a);
    }
    return e;
  }
  async [s(916)](x, t) {
    var r = s;
    return this[r(1637)]({ method: "roots/list", params: x }, mn, t);
  }
  async [s(2269)](x) {
    var t = s;
    return this[t(890)]({ method: t(2518), params: x });
  }
  async sendResourceUpdated(x) {
    var t = s;
    return this[t(890)]({ method: t(2108), params: x });
  }
  async [s(2296)]() {
    var x = s;
    return this[x(890)]({ method: x(795) });
  }
  async sendToolListChanged() {
    var x = s;
    return this[x(890)]({ method: x(881) });
  }
  async sendPromptListChanged() {
    var x = s;
    return this[x(890)]({ method: "notifications/prompts/list_changed" });
  }
}
class Mc extends Error {
  constructor(x, t) {
    var r = s;
    super("Heartbeat timeout for poster " + x + r(1457) + t + "ms"), this.name = r(987);
  }
}
const lx = /* @__PURE__ */ new Map();
class Lc {
  constructor(x) {
    var t = s;
    if (this.messageQueue = [], this[t(2653)] = Date[t(1268)](), lx[t(1263)](x[t(492)])) {
      const r = lx.get(x[t(492)]);
      r && r.close();
    }
    this[t(492)] = x.posterIdentifier, this.messagePoster = x[t(2641)], this[t(1095)] = x[t(1095)], this[t(1159)] = x[t(1159)], this[t(1651)] = x[t(1651)] ?? 5e3, this[t(2289)] = x[t(2289)] ?? 5e3, this[t(2572)] = x[t(2572)] ?? !1, lx.set(this[t(492)], this), this[t(1603)] = this[t(1603)][t(960)](this), this[t(2314)] = this[t(1095)](this[t(1603)]);
  }
  [s(1603)](x) {
    var t = s;
    if (x.posterIdentifier === this[t(492)]) {
      if (x.channel === t(749)) {
        x[t(2122)] === t(1345) && !this.debugDisableHeartbeatResponse ? this[t(2641)]({ channel: t(749), posterIdentifier: this[t(492)], type: t(2596), timestamp: x[t(2114)] }) : x.type === t(2596) && (this[t(2653)] = Date[t(1268)](), this[t(2123)] && (clearTimeout(this[t(2123)]), this[t(2123)] = void 0));
        return;
      }
      x.channel === t(2353) && (this[t(1835)] && t(1645) in x ? this[t(1835)](x.payload) : t(1645) in x && this[t(2208)].push(x[t(1645)]));
    }
  }
  async [s(817)]() {
    for (var x = s; this[x(2208)].length > 0; ) {
      const t = this[x(2208)][x(2310)]();
      t && this[x(1835)] && this[x(1835)](t);
    }
    this[x(418)]();
  }
  [s(418)]() {
    var x = s;
    this[x(1916)] = setInterval(() => {
      var t = x;
      const r = Date[t(1268)]();
      this[t(2641)]({ channel: "sdppp-heartbeat", posterIdentifier: this[t(492)], type: t(1345), timestamp: r }), this[t(2123)] = setTimeout(() => {
        var e = t;
        const a = new Mc(this[e(492)], this[e(2289)]);
        this[e(1604)] && this.onerror(a);
      }, this.heartbeatTimeout);
    }, this[x(1651)]);
  }
  async [s(2470)](x, t) {
    var r = s;
    this[r(2641)]({ channel: r(2353), posterIdentifier: this[r(492)], payload: x });
  }
  async close() {
    var x = s;
    this[x(1916)] && (clearInterval(this[x(1916)]), this[x(1916)] = void 0), this.heartbeatTimeoutTimer && (clearTimeout(this[x(2123)]), this[x(2123)] = void 0), lx[x(2394)](this[x(492)]), this.removeMessageEventListener(this[x(2314)]);
  }
}
const $c = qx[s(2094)](s(1754));
async function wn() {
  var i = s;
  if (!window[i(629)]) return;
  const x = new Lc({ posterIdentifier: "comfy-uxp", messagePoster: (e) => {
    var a = i;
    window[a(629)].postMessage(e, "*");
  }, addMessageEventListener: (e) => {
    var a = i;
    const n = (o) => {
      var c = K;
      e(o[c(984)]);
    };
    return window[a(1750)](a(1912), n), n;
  }, removeMessageEventListener: (e) => {
    var a = i;
    window[a(509)](a(1912), e);
  } });
  x.onerror = (e) => {
    var a = i;
    $c(a(1695), e);
  };
  const t = new jc({ name: "comfy-uxp", version: "1.0.0" }, {}), r = new Ei(t);
  return await r[i(1679)](x), window[i(629)][i(1049)]({ channel: i(1497), meshName: i(1734), action: i(1679) }, "*"), await R0[i(1679)]("uxp", r);
}
const zc = Object.freeze(Object[s(2574)]({ __proto__: null, connectUXP: wn, mcpMesh: R0 }, Symbol[s(367)], { value: s(1611) }));
Ae.addEventListener("graphChanged", (i) => {
  var x = s;
  const t = T0[x(1484)] || T0.extensionManager[x(1076)], r = t.activeWorkflow;
  if (i[x(2705)].id !== r[x(2435)].id) return;
  const e = R0[x(2577)][x(2194)]()[x(2045)], a = Qt(T0.graph, r);
  kn(a, e) && R0[x(2577)][x(2035)]({ widgetableStructure: a }), R0[x(2577)][x(2035)]({ widgetableValues: Cx(T0[x(2738)]) });
}), Ae[s(1750)](s(1306), () => {
  var i = s;
  R0[i(2577)][i(2035)]({ widgetableValues: Cx(T0[i(2738)]) });
});
let Ga = 0, Qa = !0, Xa = "";
function Sn() {
  var i = s;
  requestAnimationFrame(Sn);
  const x = T0[i(1484)] || T0.extensionManager.workflow, t = x[i(911)], r = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[i(2610)]) || "", a = (t == null ? void 0 : t[i(2342)]) || !0;
  if (r === Ga && e === Xa && a === Qa) return;
  Ga = r, Xa = e, Qa = a;
  const n = Qt(T0[i(2738)], t), o = Cx(T0[i(2738)]);
  R0[i(2577)].setState({ widgetableStructure: n, widgetableValues: o }), setTimeout(() => {
    var c = i;
    if (t !== x[c(911)]) return;
    const u = Qt(T0[c(2738)], t), f = Cx(T0.graph);
    kn(u, n) && R0.store[c(2035)]({ widgetableStructure: u }), R0[c(2577)][c(2035)]({ widgetableValues: f });
  }, 800);
}
requestAnimationFrame(Sn);
function kn(i, x) {
  var t = s;
  return i.nodeIndexes[t(1027)] !== x[t(2704)].length || JSON.stringify(i[t(2704)]) !== JSON[t(2351)](x[t(2704)]) || JSON[t(2351)](i[t(530)]) !== JSON[t(2351)](x[t(530)]);
}
let Ya = !1;
async function Hc() {
  var i = s;
  if (Ya) return Promise[i(639)]();
  Ae.user && R0[i(2577)][i(2035)]({ comfyUserToken: Ae[i(723)] }), Ya = !0;
}
qx[s(2094)]("comfy-entry");
async function Uc(i, x, t) {
  var r = s;
  x.addEventListener(r(2253), ({ detail: n }) => {
    var o = r;
    if (!n) return;
    let c = 0, u = 0;
    !isNaN(n.value / n[o(1743)]) && (c = Math.round(n[o(1551)] / n[o(1743)] * 100));
    const f = n[o(510)], d = graph[o(530)][o(2142)]((l) => l.id == f);
    if (d && d[o(1892)]) {
      const l = 100 / graph.nodes.length;
      u = Math.round(d[o(1892)] * l) + (c ? c / 100 * l : 0);
    }
    R0[o(2577)].setState({ progress: c, graphProgress: u });
  }), x.addEventListener(r(975), (n) => {
    var c;
    var o = r;
    (c = n[o(2705)]) != null && c.exec_info && R0[o(2577)][o(2035)]({ queueSize: n[o(2705)][o(2305)][o(515)] });
  }), x[r(1750)](r(2046), ({ detail: n }) => {
    var o = r;
    if (R0[o(2577)].setState({ executingNodeTitle: "", executingNodeID: "", lastError: n[o(1038)] }), n.node_id) {
      const c = i[o(2738)][o(530)][o(2142)]((u) => u.id == n.node_id);
      R0[o(2577)][o(2035)]({ widgetableErrors: { [n.node_id]: "[" + ((c == null ? void 0 : c[o(1006)]) || n[o(1093)]) + "]" + n[o(1038)] } });
    }
  }), x[r(1750)]("executing", (n) => {
    var o = r;
    const c = n[o(2705)], u = graph[o(530)][o(2142)]((f) => f.id == c);
    if (u) {
      const f = 100 / graph.nodes.length;
      R0[o(2577)][o(2035)]({ executingNodeTitle: u[o(1006)], executingNodeID: u.id, graphProgress: Math[o(1572)](u[o(1892)] * f) });
    }
  }), x[r(1750)](r(637), () => {
    var n = r;
    R0.store[n(2035)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x[r(1750)](r(715), ({ detail: n }) => {
    var o = r;
    R0[o(2577)][o(2035)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date[o(1268)]() });
  });
  const e = /* @__PURE__ */ new Map();
  x[r(1750)](r(2160), (n) => {
    var o = r;
    R0[o(2577)][o(2035)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[o(2558)](n.detail[o(1060)]) || [])[o(802)]((u) => ({ url: u, thumbnail: u }));
    Do(n[o(2705)].prompt_id, c), e[o(2394)](n.detail.prompt_id);
  }), x[r(1750)](r(1306), (n) => {
    var o = r;
    const c = e[o(2558)](n[o(2705)].prompt_id) || [];
    n[o(2705)][o(1440)] && Array[o(710)](n[o(2705)].output[o(1686)]) && n[o(2705)][o(1440)].images[o(1027)] > 0 && c[o(1020)](...n[o(2705)].output.images[o(2674)]((u) => u[o(2122)] == o(1440))[o(802)]((u) => {
      var f = o;
      return location[f(1360)] + location.pathname + f(1106) + u[f(2122)] + "&filename=" + encodeURIComponent(u.filename) + (u[f(1505)] ? f(1249) + encodeURIComponent(u[f(1505)]) : "");
    })), n.detail[o(1440)] && Array.isArray(n[o(2705)][o(1440)][o(1803)]) && n[o(2705)][o(1440)].sdppp_assets.length > 0 && c[o(1020)](...n.detail[o(1440)][o(1803)].map((u) => {
      var f = o;
      return location[f(1360)] + location[f(2211)] + f(2038) + encodeURIComponent(u);
    })), e[o(2151)](n[o(2705)][o(1060)], c);
  });
  let a = null;
  x[r(1750)](r(784), (n) => {
    a = setTimeout(() => {
      var o = K;
      R0[o(2577)][o(2035)]({ comfyWSState: "reconnecting" });
    }, 1e3);
  }), x.addEventListener("reconnected", (n) => {
    var o = r;
    R0[o(2577)][o(2035)]({ comfyWSState: o(1588) }), clearTimeout(a);
  });
}
let jt = [];
(async function() {
  var x, t, r, e, a, n;
  var i = s;
  if (typeof gradioApp == i(1584)) {
    try {
      const o = (t = (x = window[i(2725)]) == null ? void 0 : x[i(830)]) == null ? void 0 : t[i(830)], c = (e = (r = window.comfyAPI) == null ? void 0 : r.ui) == null ? void 0 : e[i(1668)], u = (n = (a = window[i(2725)]) == null ? void 0 : a.api) == null ? void 0 : n[i(1520)];
      if (!o || !u || !c) throw new Error(i(1868));
      await Hc(), await wn(), await Uc(o, u, c), import("./sdppp-custom.js").then((f) => {
        var d = i;
        f[d(1479)](_e, 2);
      });
    } catch (o) {
      jt[i(1020)](o[i(2446)] || o[i(1912)] || o);
    }
    await new Promise((o) => setTimeout(o, 2e3)), jt[i(1027)] && console[i(2463)](jt[0]);
  }
})();
