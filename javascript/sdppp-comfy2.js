var On = Object.defineProperty;
var Tn = (i, x, t) => x in i ? On(i, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[x] = t;
var m0 = (i, x, t) => Tn(i, typeof x != "symbol" ? x + "" : x, t);
var s = K;
(function(i, x) {
  for (var t = K, r = i(); ; )
    try {
      var e = parseInt(t(2170)) / 1 * (parseInt(t(891)) / 2) + -parseInt(t(914)) / 3 * (-parseInt(t(2230)) / 4) + -parseInt(t(813)) / 5 * (parseInt(t(1602)) / 6) + parseInt(t(2036)) / 7 * (-parseInt(t(1466)) / 8) + parseInt(t(1465)) / 9 + parseInt(t(743)) / 10 + -parseInt(t(445)) / 11;
      if (e === x) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Fx, 852701);
const O0 = window.comfyAPI[s(903)][s(903)];
window[s(834)].ui[s(2305)];
const Te = window[s(834)].api.api;
var _a;
class An {
  constructor(x) {
    m0(this, _a);
    var t = s;
    this[t(2063)] = x;
    const r = this.validate();
    if (!r[t(1390)]) throw new Error(t(1209) + r.errors[t(152)](", "));
  }
  validate() {
    var x = s;
    const t = [];
    (!this[x(2063)][x(1998)] || Object[x(1087)](this.definition[x(1998)])[x(1407)] === 0) && t[x(365)]("Graph must have at least one node");
    for (const [e, a] of this[x(2063)][x(279)])
      !this[x(2063)][x(1998)][e] && t[x(365)](x(1809) + e), !this[x(2063)][x(1998)][a] && t[x(365)](x(1643) + a);
    const r = this.detectCycles();
    return !r[x(1390)] && t[x(365)](...r[x(2493)]), { valid: t[x(1407)] === 0, errors: t };
  }
  [(_a = s(2063), s(1624))]() {
    var x = s;
    const t = /* @__PURE__ */ new Map();
    for (const r of Object[x(1087)](this.definition[x(1998)]))
      t[x(321)](r, []);
    for (const [r, e] of this[x(2063)][x(279)]) {
      const a = t[x(1170)](r) || [];
      a[x(365)](e), t[x(321)](r, a);
    }
    return t;
  }
  [s(1444)]() {
    var x = s;
    const t = [], r = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), a = this[x(1624)](), n = (o, c) => {
      var d = x;
      if (e[d(179)](o)) {
        const f = c.indexOf(o), l = c[d(571)](f).concat(o);
        return t[d(365)](d(1478) + l[d(152)](d(2333))), !0;
      }
      if (r.has(o)) return !1;
      r[d(540)](o), e[d(540)](o);
      const u = a[d(1170)](o) || [];
      for (const f of u)
        if (n(f, [...c, o])) return !0;
      return e.delete(o), !1;
    };
    for (const o of Object[x(1087)](this[x(2063)][x(1998)]))
      !r[x(179)](o) && n(o, []);
    return { valid: t[x(1407)] === 0, errors: t };
  }
  buildAdjacencyList() {
    var x = s;
    const t = /* @__PURE__ */ new Map();
    for (const r of Object[x(1087)](this[x(2063)].nodes))
      t[x(321)](r, []);
    for (const [r, e] of this.definition[x(279)]) {
      const a = t[x(1170)](r) || [];
      a.push(e), t[x(321)](r, a);
      const n = t[x(1170)](e) || [];
      n[x(365)](r), t.set(e, n);
    }
    return t;
  }
  getNeighbors(x) {
    var t = s;
    return this[t(1456)]().get(x) || [];
  }
  getNode(x) {
    return this.definition.nodes[x];
  }
  [s(1712)]() {
    var x = s;
    return Object[x(1087)](this[x(2063)][x(1998)]);
  }
  [s(395)](x, t) {
    var r = s;
    return this[r(2063)][r(279)][r(1648)](([e, a]) => e === x && a === t || e === t && a === x);
  }
  findPath(x, t) {
    var r = s;
    if (x === t) return [x];
    const e = this[r(1456)](), a = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; a.length > 0; ) {
      const { nodeId: o, path: c } = a.shift();
      if (n[r(179)](o)) continue;
      if (n[r(540)](o), o === t) return c;
      const d = e[r(1170)](o) || [];
      for (const u of d)
        !n[r(179)](u) && a.push({ nodeId: u, path: [...c, u] });
    }
    return null;
  }
  [s(1670)](x, t) {
    var r = s;
    return this[r(662)](x, t) !== null;
  }
  [s(654)]() {
    var x = s;
    return { ...this[x(2063)] };
  }
}
const kr = (i) => {
  let x;
  const t = /* @__PURE__ */ new Set(), r = (d, u) => {
    var f = K;
    const l = typeof d === f(2042) ? d(x) : d;
    if (!Object.is(l, x)) {
      const v = x;
      x = u ?? (typeof l != "object" || l === null) ? l : Object.assign({}, x, l), t[f(2106)]((h) => h(x, v));
    }
  }, e = () => x, a = () => c, n = (d) => {
    var u = K;
    return t[u(540)](d), () => t.delete(d);
  }, o = { setState: r, getState: e, getInitialState: a, subscribe: n }, c = x = i(r, e, o);
  return o;
}, Dn = (i) => i ? kr(i) : kr;
var q0;
(function(i) {
  var x = s;
  i[x(1415)] = (a) => {
  };
  function t(a) {
  }
  i[x(1309)] = t;
  function r(a) {
    throw new Error();
  }
  i[x(131)] = r, i[x(1928)] = (a) => {
    const n = {};
    for (const o of a)
      n[o] = o;
    return n;
  }, i.getValidEnumValues = (a) => {
    var n = x;
    const o = i.objectKeys(a).filter((d) => typeof a[a[d]] != "number"), c = {};
    for (const d of o)
      c[d] = a[d];
    return i[n(1488)](c);
  }, i.objectValues = (a) => i.objectKeys(a).map(function(n) {
    return a[n];
  }), i[x(1830)] = typeof Object[x(1087)] === x(2042) ? (a) => Object[x(1087)](a) : (a) => {
    var n = x;
    const o = [];
    for (const c in a)
      Object[n(2023)].hasOwnProperty[n(2497)](a, c) && o[n(365)](c);
    return o;
  }, i[x(1119)] = (a, n) => {
    for (const o of a)
      if (n(o)) return o;
  }, i[x(2134)] = typeof Number[x(2134)] == "function" ? (a) => Number[x(2134)](a) : (a) => typeof a === x(2240) && Number[x(1943)](a) && Math.floor(a) === a;
  function e(a, n = x(1613)) {
    var o = x;
    return a[o(2159)]((c) => typeof c == "string" ? "'" + c + "'" : c)[o(152)](n);
  }
  i[x(1919)] = e, i.jsonStringifyReplacer = (a, n) => {
    var o = x;
    return typeof n === o(999) ? n[o(349)]() : n;
  };
})(q0 || (q0 = {}));
var Er;
(function(i) {
  i.mergeShapes = (x, t) => ({ ...x, ...t });
})(Er || (Er = {}));
const x0 = q0.arrayToEnum([s(2254), s(2120), s(2240), s(197), "float", s(968), s(1903), s(999), "symbol", s(2042), s(1110), s(599), s(1040), s(1526), "unknown", s(697), "void", s(636), "map", s(321)]), Ee = (i) => {
  var x = s;
  switch (typeof i) {
    case x(1110):
      return x0[x(1110)];
    case x(2254):
      return x0[x(2254)];
    case "number":
      return Number[x(1211)](i) ? x0[x(2120)] : x0[x(2240)];
    case x(968):
      return x0.boolean;
    case x(2042):
      return x0[x(2042)];
    case x(999):
      return x0[x(999)];
    case "symbol":
      return x0[x(1459)];
    case x(1526):
      return Array[x(242)](i) ? x0[x(1040)] : i === null ? x0[x(599)] : i[x(2367)] && typeof i[x(2367)] === x(2042) && i[x(206)] && typeof i[x(206)] === x(2042) ? x0[x(697)] : typeof Map !== x(1110) && i instanceof Map ? x0[x(2159)] : typeof Set < "u" && i instanceof Set ? x0[x(321)] : typeof Date < "u" && i instanceof Date ? x0[x(1903)] : x0.object;
    default:
      return x0[x(1870)];
  }
}, B = q0[s(1928)]([s(1966), s(264), "custom", s(2328), s(752), s(653), s(1549), s(947), s(2241), s(2035), "invalid_string", s(717), "too_big", "invalid_intersection_types", "not_multiple_of", s(933)]);
class Se extends Error {
  get errors() {
    var x = s;
    return this[x(1916)];
  }
  constructor(x) {
    var t = s;
    super(), this[t(1916)] = [], this[t(524)] = (e) => {
      var a = t;
      this[a(1916)] = [...this[a(1916)], e];
    }, this[t(805)] = (e = []) => {
      var a = t;
      this.issues = [...this[a(1916)], ...e];
    };
    const r = new.target[t(2023)];
    Object.setPrototypeOf ? Object[t(755)](this, r) : this[t(518)] = r, this[t(1831)] = t(2207), this.issues = x;
  }
  [s(1102)](x) {
    const t = x || function(a) {
      var n = K;
      return a[n(1682)];
    }, r = { _errors: [] }, e = (a) => {
      var n = K;
      for (const o of a.issues)
        if (o[n(2029)] === n(2328)) o[n(1163)][n(2159)](e);
        else if (o[n(2029)] === "invalid_return_type") e(o.returnTypeError);
        else if (o.code === n(947)) e(o[n(1955)]);
        else if (o[n(1512)][n(1407)] === 0) r._errors[n(365)](t(o));
        else {
          let c = r, d = 0;
          for (; d < o.path[n(1407)]; ) {
            const u = o.path[d];
            d === o.path[n(1407)] - 1 ? (c[u] = c[u] || { _errors: [] }, c[u][n(756)][n(365)](t(o))) : c[u] = c[u] || { _errors: [] }, c = c[u], d++;
          }
        }
    };
    return e(this), r;
  }
  static [s(2233)](x) {
    if (!(x instanceof Se)) throw new Error("Not a ZodError: " + x);
  }
  [s(349)]() {
    var x = s;
    return this[x(1682)];
  }
  get [s(1682)]() {
    var x = s;
    return JSON[x(2099)](this[x(1916)], q0[x(2498)], 2);
  }
  get [s(2137)]() {
    var x = s;
    return this[x(1916)][x(1407)] === 0;
  }
  [s(2236)](x = (t) => t[s(1682)]) {
    var t = s;
    const r = {}, e = [];
    for (const a of this[t(1916)])
      if (a.path[t(1407)] > 0) {
        const n = a.path[0];
        r[n] = r[n] || [], r[n][t(365)](x(a));
      } else e.push(x(a));
    return { formErrors: e, fieldErrors: r };
  }
  get [s(1232)]() {
    var x = s;
    return this[x(2236)]();
  }
}
Se[s(1661)] = (i) => new Se(i);
const Mt = (i, x) => {
  var t = s;
  let r;
  switch (i[t(2029)]) {
    case B[t(1966)]:
      i[t(294)] === x0[t(1110)] ? r = t(1216) : r = t(1295) + i[t(1695)] + ", received " + i[t(294)];
      break;
    case B.invalid_literal:
      r = t(874) + JSON[t(2099)](i[t(1695)], q0[t(2498)]);
      break;
    case B.unrecognized_keys:
      r = t(229) + q0[t(1919)](i[t(1087)], ", ");
      break;
    case B[t(2328)]:
      r = t(894);
      break;
    case B[t(752)]:
      r = t(1382) + q0[t(1919)](i[t(1618)]);
      break;
    case B[t(653)]:
      r = "Invalid enum value. Expected " + q0[t(1919)](i[t(1618)]) + ", received '" + i[t(294)] + "'";
      break;
    case B[t(947)]:
      r = t(193);
      break;
    case B[t(2241)]:
      r = "Invalid function return type";
      break;
    case B[t(2035)]:
      r = t(2289);
      break;
    case B[t(1626)]:
      typeof i[t(274)] == "object" ? t(1502) in i[t(274)] ? (r = t(2470) + i.validation[t(1502)] + '"', typeof i[t(274)][t(1938)] === t(2240) && (r = r + t(1493) + i[t(274)][t(1938)])) : "startsWith" in i[t(274)] ? r = t(336) + i[t(274)].startsWith + '"' : "endsWith" in i[t(274)] ? r = 'Invalid input: must end with "' + i[t(274)][t(1853)] + '"' : q0.assertNever(i.validation) : i[t(274)] !== t(1353) ? r = "Invalid " + i.validation : r = t(591);
      break;
    case B[t(717)]:
      i.type === "array" ? r = t(1452) + (i[t(663)] ? t(2175) : i[t(1484)] ? "at least" : t(1672)) + " " + i.minimum + t(938) : i[t(1273)] === t(2254) ? r = t(2237) + (i.exact ? t(2175) : i[t(1484)] ? t(231) : t(1277)) + " " + i[t(656)] + t(2347) : i[t(1273)] === "number" ? r = "Number must be " + (i.exact ? t(2205) : i.inclusive ? t(1169) : "greater than ") + i[t(656)] : i[t(1273)] === t(999) ? r = t(747) + (i[t(663)] ? t(2205) : i.inclusive ? t(1169) : "greater than ") + i[t(656)] : i[t(1273)] === t(1903) ? r = t(1219) + (i.exact ? t(2205) : i[t(1484)] ? t(1169) : t(175)) + new Date(Number(i[t(656)])) : r = "Invalid input";
      break;
    case B.too_big:
      i[t(1273)] === t(1040) ? r = "Array must contain " + (i[t(663)] ? "exactly" : i[t(1484)] ? t(811) : t(1218)) + " " + i[t(1115)] + t(938) : i[t(1273)] === "string" ? r = t(2237) + (i[t(663)] ? t(2175) : i[t(1484)] ? t(811) : "under") + " " + i[t(1115)] + t(2347) : i[t(1273)] === t(2240) ? r = t(747) + (i.exact ? "exactly" : i[t(1484)] ? t(436) : t(1218)) + " " + i[t(1115)] : i[t(1273)] === t(999) ? r = "BigInt must be " + (i[t(663)] ? t(2175) : i.inclusive ? "less than or equal to" : t(1218)) + " " + i[t(1115)] : i[t(1273)] === "date" ? r = t(1219) + (i[t(663)] ? "exactly" : i[t(1484)] ? t(1028) : t(1022)) + " " + new Date(Number(i.maximum)) : r = "Invalid input";
      break;
    case B[t(363)]:
      r = t(894);
      break;
    case B.invalid_intersection_types:
      r = t(1324);
      break;
    case B[t(2388)]:
      r = t(1848) + i[t(1262)];
      break;
    case B[t(933)]:
      r = t(2041);
      break;
    default:
      r = x[t(601)], q0[t(131)](i);
  }
  return { message: r };
};
let jn = Mt;
function Mn() {
  return jn;
}
const Ln = (i) => {
  var x = s;
  const { data: t, path: r, errorMaps: e, issueData: a } = i, n = [...r, ...a[x(1512)] || []], o = { ...a, path: n };
  if (a[x(1682)] !== void 0) return { ...a, path: n, message: a[x(1682)] };
  let c = "";
  const d = e[x(1595)]((u) => !!u).slice()[x(996)]();
  for (const u of d)
    c = u(o, { data: t, defaultError: c })[x(1682)];
  return { ...a, path: n, message: c };
};
function X(i, x) {
  var t = s;
  const r = Mn(), e = Ln({ issueData: x, data: i[t(1841)], path: i[t(1512)], errorMaps: [i.common.contextualErrorMap, i[t(1370)], r, r === Mt ? void 0 : Mt][t(1595)]((a) => !!a) });
  i[t(1645)][t(1916)].push(e);
}
class ee {
  constructor() {
    var x = s;
    this.value = x(1390);
  }
  [s(1795)]() {
    var x = s;
    this[x(2109)] === "valid" && (this[x(2109)] = x(1795));
  }
  abort() {
    var x = s;
    this[x(2109)] !== x(463) && (this[x(2109)] = x(463));
  }
  static [s(127)](x, t) {
    var r = s;
    const e = [];
    for (const a of t) {
      if (a.status === r(463)) return h0;
      a[r(333)] === "dirty" && x[r(1795)](), e[r(365)](a[r(2109)]);
    }
    return { status: x[r(2109)], value: e };
  }
  static async [s(1699)](x, t) {
    var r = s;
    const e = [];
    for (const a of t) {
      const n = await a[r(2397)], o = await a[r(2109)];
      e[r(365)]({ key: n, value: o });
    }
    return ee.mergeObjectSync(x, e);
  }
  static [s(2466)](x, t) {
    var r = s;
    const e = {};
    for (const a of t) {
      const { key: n, value: o } = a;
      if (n[r(333)] === r(463) || o.status === r(463)) return h0;
      n[r(333)] === "dirty" && x.dirty(), o[r(333)] === r(1795) && x[r(1795)](), n[r(2109)] !== "__proto__" && (typeof o.value < "u" || a[r(895)]) && (e[n.value] = o[r(2109)]);
    }
    return { status: x[r(2109)], value: e };
  }
}
const h0 = Object.freeze({ status: s(463) }), Qe = (i) => ({ status: "dirty", value: i }), re = (i) => ({ status: "valid", value: i }), Pr = (i) => i.status === s(463), Ir = (i) => i.status === s(1795), Ve = (i) => i[s(333)] === s(1390), px = (i) => typeof Promise !== s(1110) && i instanceof Promise;
var a0;
(function(i) {
  var x = s;
  i[x(188)] = (t) => typeof t === x(2254) ? { message: t } : t || {}, i[x(349)] = (t) => typeof t == "string" ? t : t == null ? void 0 : t[x(1682)];
})(a0 || (a0 = {}));
class he {
  constructor(x, t, r, e) {
    var a = s;
    this[a(613)] = [], this[a(1174)] = x, this[a(1841)] = t, this._path = r, this[a(280)] = e;
  }
  get [s(1512)]() {
    var x = s;
    return !this[x(613)][x(1407)] && (Array[x(242)](this[x(280)]) ? this._cachedPath[x(365)](...this[x(1822)], ...this[x(280)]) : this._cachedPath.push(...this[x(1822)], this[x(280)])), this._cachedPath;
  }
}
const Rr = (i, x) => {
  var t = s;
  if (Ve(x)) return { success: !0, data: x[t(2109)] };
  if (!i[t(1645)][t(1916)][t(1407)]) throw new Error(t(1143));
  return { success: !1, get error() {
    var r = t;
    if (this[r(850)]) return this._error;
    const e = new Se(i[r(1645)][r(1916)]);
    return this[r(850)] = e, this._error;
  } };
};
function y0(i) {
  if (!i) return {};
  const { errorMap: x, invalid_type_error: t, required_error: r, description: e } = i;
  if (x && (t || r)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return x ? { errorMap: x, description: e } : { errorMap: (n, o) => {
    var c = K;
    const { message: d } = i;
    return n[c(2029)] === "invalid_enum_value" ? { message: d ?? o[c(601)] } : typeof o.data === c(1110) ? { message: d ?? r ?? o[c(601)] } : n[c(2029)] !== "invalid_type" ? { message: o[c(601)] } : { message: d ?? t ?? o[c(601)] };
  }, description: e };
}
class P0 {
  get description() {
    var x = s;
    return this[x(486)][x(2389)];
  }
  [s(2037)](x) {
    var t = s;
    return Ee(x[t(1841)]);
  }
  [s(1377)](x, t) {
    var r = s;
    return t || { common: x[r(1174)][r(1645)], data: x.data, parsedType: Ee(x[r(1841)]), schemaErrorMap: this[r(486)][r(1281)], path: x.path, parent: x.parent };
  }
  [s(1587)](x) {
    var t = s;
    return { status: new ee(), ctx: { common: x[t(1174)].common, data: x[t(1841)], parsedType: Ee(x[t(1841)]), schemaErrorMap: this._def.errorMap, path: x[t(1512)], parent: x[t(1174)] } };
  }
  [s(592)](x) {
    var t = s;
    const r = this[t(1441)](x);
    if (px(r)) throw new Error(t(1953));
    return r;
  }
  [s(357)](x) {
    var t = s;
    const r = this[t(1441)](x);
    return Promise.resolve(r);
  }
  [s(734)](x, t) {
    var r = s;
    const e = this[r(2005)](x, t);
    if (e[r(1283)]) return e[r(1841)];
    throw e[r(2239)];
  }
  [s(2005)](x, t) {
    var r = s;
    const e = { common: { issues: [], async: (t == null ? void 0 : t[r(1501)]) ?? !1, contextualErrorMap: t == null ? void 0 : t.errorMap }, path: (t == null ? void 0 : t[r(1512)]) || [], schemaErrorMap: this[r(486)][r(1281)], parent: null, data: x, parsedType: Ee(x) }, a = this[r(592)]({ data: x, path: e.path, parent: e });
    return Rr(e, a);
  }
  "~validate"(x) {
    var e, a;
    var t = s;
    const r = { common: { issues: [], async: !!this[t(146)].async }, path: [], schemaErrorMap: this[t(486)][t(1281)], parent: null, data: x, parsedType: Ee(x) };
    if (!this["~standard"][t(1501)]) try {
      const n = this[t(592)]({ data: x, path: [], parent: r });
      return Ve(n) ? { value: n[t(2109)] } : { issues: r[t(1645)][t(1916)] };
    } catch (n) {
      (a = (e = n == null ? void 0 : n[t(1682)]) == null ? void 0 : e[t(1418)]()) != null && a[t(1502)](t(842)) && (this[t(146)].async = !0), r[t(1645)] = { issues: [], async: !0 };
    }
    return this[t(357)]({ data: x, path: [], parent: r })[t(2367)]((n) => Ve(n) ? { value: n[t(2109)] } : { issues: r[t(1645)][t(1916)] });
  }
  async [s(1316)](x, t) {
    var r = s;
    const e = await this[r(1276)](x, t);
    if (e[r(1283)]) return e[r(1841)];
    throw e[r(2239)];
  }
  async safeParseAsync(x, t) {
    var r = s;
    const e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[r(1281)], async: !0 }, path: (t == null ? void 0 : t[r(1512)]) || [], schemaErrorMap: this[r(486)][r(1281)], parent: null, data: x, parsedType: Ee(x) }, a = this._parse({ data: x, path: e[r(1512)], parent: e }), n = await (px(a) ? a : Promise[r(595)](a));
    return Rr(e, n);
  }
  [s(872)](x, t) {
    var r = s;
    const e = (a) => {
      var n = K;
      return typeof t === n(2254) || typeof t === n(1110) ? { message: t } : typeof t === n(2042) ? t(a) : t;
    };
    return this[r(1909)]((a, n) => {
      var o = r;
      const c = x(a), d = () => n[o(524)]({ code: B[o(363)], ...e(a) });
      return typeof Promise !== o(1110) && c instanceof Promise ? c.then((u) => u ? !0 : (d(), !1)) : c ? !0 : (d(), !1);
    });
  }
  [s(2184)](x, t) {
    var r = s;
    return this[r(1909)]((e, a) => {
      var n = r;
      return x(e) ? !0 : (a[n(524)](typeof t === n(2042) ? t(e, a) : t), !1);
    });
  }
  [s(1909)](x) {
    var t = s;
    return new qe({ schema: this, typeName: p0[t(2067)], effect: { type: t(2184), refinement: x } });
  }
  [s(256)](x) {
    return this._refinement(x);
  }
  constructor(x) {
    var t = s;
    this[t(135)] = this[t(1276)], this._def = x, this[t(734)] = this[t(734)][t(1766)](this), this[t(2005)] = this.safeParse[t(1766)](this), this[t(1316)] = this[t(1316)].bind(this), this.safeParseAsync = this[t(1276)][t(1766)](this), this[t(135)] = this[t(135)][t(1766)](this), this[t(872)] = this[t(872)][t(1766)](this), this[t(2184)] = this.refinement.bind(this), this.superRefine = this[t(256)][t(1766)](this), this[t(1597)] = this[t(1597)][t(1766)](this), this[t(1222)] = this.nullable[t(1766)](this), this[t(555)] = this[t(555)][t(1766)](this), this[t(1040)] = this[t(1040)].bind(this), this.promise = this[t(697)][t(1766)](this), this.or = this.or[t(1766)](this), this[t(1685)] = this[t(1685)][t(1766)](this), this[t(707)] = this[t(707)][t(1766)](this), this[t(488)] = this.brand[t(1766)](this), this[t(1058)] = this[t(1058)][t(1766)](this), this[t(206)] = this[t(206)][t(1766)](this), this[t(700)] = this[t(700)].bind(this), this[t(173)] = this.pipe[t(1766)](this), this.readonly = this.readonly[t(1766)](this), this[t(2153)] = this[t(2153)][t(1766)](this), this[t(876)] = this[t(876)].bind(this), this[t(146)] = { version: 1, vendor: t(1489), validate: (r) => this[t(792)](r) };
  }
  [s(1597)]() {
    var x = s;
    return we[x(1661)](this, this[x(486)]);
  }
  [s(1222)]() {
    var x = s;
    return je[x(1661)](this, this[x(486)]);
  }
  [s(555)]() {
    var x = s;
    return this[x(1222)]()[x(1597)]();
  }
  [s(1040)]() {
    var x = s;
    return le[x(1661)](this);
  }
  [s(697)]() {
    var x = s;
    return wx[x(1661)](this, this[x(486)]);
  }
  or(x) {
    var t = s;
    return vx[t(1661)]([this, x], this[t(486)]);
  }
  [s(1685)](x) {
    var t = s;
    return gx[t(1661)](this, x, this[t(486)]);
  }
  [s(707)](x) {
    var t = s;
    return new qe({ ...y0(this._def), schema: this, typeName: p0[t(2067)], effect: { type: t(707), transform: x } });
  }
  [s(1058)](x) {
    var t = s;
    const r = typeof x === t(2042) ? x : () => x;
    return new Sx({ ...y0(this[t(486)]), innerType: this, defaultValue: r, typeName: p0.ZodDefault });
  }
  [s(488)]() {
    var x = s;
    return new Ls({ typeName: p0[x(610)], type: this, ...y0(this._def) });
  }
  catch(x) {
    var t = s;
    const r = typeof x === t(2042) ? x : () => x;
    return new kx({ ...y0(this._def), innerType: this, catchValue: r, typeName: p0[t(1171)] });
  }
  [s(700)](x) {
    var t = s;
    const r = this[t(151)];
    return new r({ ...this[t(486)], description: x });
  }
  [s(173)](x) {
    return rr.create(this, x);
  }
  readonly() {
    var x = s;
    return Ex[x(1661)](this);
  }
  [s(876)]() {
    var x = s;
    return this[x(2005)](void 0)[x(1283)];
  }
  [s(2153)]() {
    var x = s;
    return this[x(2005)](null).success;
  }
}
const $n = /^c[^\s-]{8,}$/i, zn = /^[0-9a-z]+$/, Hn = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Un = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Vn = /^[a-z0-9_-]{21}$/i, Wn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Zn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Kn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Bn = s(290);
let $x;
const Jn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Gn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Qn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Yn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Xn = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, _n = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ds = s(319), ei = new RegExp("^" + Ds + "$");
function js(i) {
  var x = s;
  let t = x(1692);
  i[x(711)] ? t = t + x(1352) + i[x(711)] + "}" : i[x(711)] == null && (t = t + x(913));
  const r = i[x(711)] ? "+" : "?";
  return x(1579) + t + ")" + r;
}
function xi(i) {
  return new RegExp("^" + js(i) + "$");
}
function ti(i) {
  var x = s;
  let t = Ds + "T" + js(i);
  const r = [];
  return r[x(365)](i[x(980)] ? "Z?" : "Z"), i[x(1813)] && r[x(365)](x(1438)), t = t + "(" + r.join("|") + ")", new RegExp("^" + t + "$");
}
function ri(i, x) {
  var t = s;
  return !!((x === "v4" || !x) && Jn[t(937)](i) || (x === "v6" || !x) && Qn[t(937)](i));
}
function ai(i, x) {
  var t = s;
  if (!Wn[t(937)](i)) return !1;
  try {
    const [r] = i[t(1363)](".");
    if (!r) return !1;
    const e = r[t(139)](/-/g, "+")[t(139)](/_/g, "/")[t(1773)](r[t(1407)] + (4 - r.length % 4) % 4, "="), a = JSON[t(734)](atob(e));
    return !(typeof a !== t(1526) || a === null || t(269) in a && (a == null ? void 0 : a[t(269)]) !== t(971) || !a[t(1667)] || x && a[t(1667)] !== x);
  } catch {
    return !1;
  }
}
function si(i, x) {
  var t = s;
  return !!((x === "v4" || !x) && Gn[t(937)](i) || (x === "v6" || !x) && Yn.test(i));
}
class ye extends P0 {
  [s(1441)](x) {
    var t = s;
    if (this[t(486)][t(569)] && (x[t(1841)] = String(x[t(1841)])), this[t(2037)](x) !== x0[t(2254)]) {
      const n = this[t(1377)](x);
      return X(n, { code: B[t(1966)], expected: x0[t(2254)], received: n[t(1665)] }), h0;
    }
    const e = new ee();
    let a;
    for (const n of this[t(486)].checks)
      if (n.kind === t(475)) x.data[t(1407)] < n[t(2109)] && (a = this._getOrReturnCtx(x, a), X(a, { code: B[t(717)], minimum: n[t(2109)], type: "string", inclusive: !0, exact: !1, message: n.message }), e[t(1795)]());
      else if (n.kind === t(1443)) x.data[t(1407)] > n[t(2109)] && (a = this[t(1377)](x, a), X(a, { code: B[t(1089)], maximum: n[t(2109)], type: "string", inclusive: !0, exact: !1, message: n[t(1682)] }), e[t(1795)]());
      else if (n[t(168)] === t(1407)) {
        const o = x.data[t(1407)] > n.value, c = x[t(1841)].length < n[t(2109)];
        (o || c) && (a = this._getOrReturnCtx(x, a), o ? X(a, { code: B.too_big, maximum: n[t(2109)], type: t(2254), inclusive: !0, exact: !0, message: n[t(1682)] }) : c && X(a, { code: B[t(717)], minimum: n[t(2109)], type: t(2254), inclusive: !0, exact: !0, message: n.message }), e[t(1795)]());
      } else if (n[t(168)] === "email") !Kn[t(937)](x[t(1841)]) && (a = this[t(1377)](x, a), X(a, { validation: t(2481), code: B[t(1626)], message: n.message }), e[t(1795)]());
      else if (n.kind === t(492)) !$x && ($x = new RegExp(Bn, "u")), !$x[t(937)](x[t(1841)]) && (a = this[t(1377)](x, a), X(a, { validation: t(492), code: B.invalid_string, message: n[t(1682)] }), e[t(1795)]());
      else if (n[t(168)] === t(729)) !Un[t(937)](x.data) && (a = this[t(1377)](x, a), X(a, { validation: t(729), code: B[t(1626)], message: n[t(1682)] }), e[t(1795)]());
      else if (n[t(168)] === t(1972)) !Vn[t(937)](x[t(1841)]) && (a = this[t(1377)](x, a), X(a, { validation: t(1972), code: B[t(1626)], message: n[t(1682)] }), e[t(1795)]());
      else if (n[t(168)] === t(1464)) !$n[t(937)](x[t(1841)]) && (a = this[t(1377)](x, a), X(a, { validation: "cuid", code: B[t(1626)], message: n.message }), e[t(1795)]());
      else if (n.kind === "cuid2") !zn[t(937)](x.data) && (a = this._getOrReturnCtx(x, a), X(a, { validation: t(1192), code: B[t(1626)], message: n.message }), e[t(1795)]());
      else if (n[t(168)] === t(374)) !Hn[t(937)](x[t(1841)]) && (a = this._getOrReturnCtx(x, a), X(a, { validation: t(374), code: B[t(1626)], message: n[t(1682)] }), e.dirty());
      else if (n[t(168)] === t(1011)) try {
        new URL(x[t(1841)]);
      } catch {
        a = this[t(1377)](x, a), X(a, { validation: "url", code: B[t(1626)], message: n.message }), e[t(1795)]();
      }
      else
        n[t(168)] === t(1353) ? (n[t(1353)][t(312)] = 0, !n[t(1353)].test(x[t(1841)]) && (a = this[t(1377)](x, a), X(a, { validation: t(1353), code: B.invalid_string, message: n.message }), e[t(1795)]())) : n[t(168)] === t(2247) ? x[t(1841)] = x[t(1841)][t(2247)]() : n[t(168)] === t(1502) ? !x[t(1841)][t(1502)](n.value, n[t(1938)]) && (a = this._getOrReturnCtx(x, a), X(a, { code: B.invalid_string, validation: { includes: n[t(2109)], position: n[t(1938)] }, message: n[t(1682)] }), e[t(1795)]()) : n.kind === t(1418) ? x[t(1841)] = x[t(1841)][t(1418)]() : n.kind === t(2031) ? x.data = x[t(1841)][t(2031)]() : n[t(168)] === t(897) ? !x[t(1841)][t(897)](n[t(2109)]) && (a = this._getOrReturnCtx(x, a), X(a, { code: B.invalid_string, validation: { startsWith: n[t(2109)] }, message: n[t(1682)] }), e.dirty()) : n[t(168)] === "endsWith" ? !x.data[t(1853)](n[t(2109)]) && (a = this[t(1377)](x, a), X(a, { code: B[t(1626)], validation: { endsWith: n[t(2109)] }, message: n.message }), e[t(1795)]()) : n[t(168)] === t(581) ? !ti(n)[t(937)](x[t(1841)]) && (a = this[t(1377)](x, a), X(a, { code: B[t(1626)], validation: "datetime", message: n[t(1682)] }), e[t(1795)]()) : n[t(168)] === t(1903) ? !ei[t(937)](x[t(1841)]) && (a = this[t(1377)](x, a), X(a, { code: B[t(1626)], validation: t(1903), message: n.message }), e[t(1795)]()) : n.kind === t(2396) ? !xi(n)[t(937)](x[t(1841)]) && (a = this._getOrReturnCtx(x, a), X(a, { code: B[t(1626)], validation: t(2396), message: n[t(1682)] }), e.dirty()) : n[t(168)] === t(392) ? !Zn[t(937)](x[t(1841)]) && (a = this[t(1377)](x, a), X(a, { validation: t(392), code: B[t(1626)], message: n[t(1682)] }), e[t(1795)]()) : n[t(168)] === "ip" ? !ri(x[t(1841)], n[t(1449)]) && (a = this[t(1377)](x, a), X(a, { validation: "ip", code: B.invalid_string, message: n[t(1682)] }), e[t(1795)]()) : n[t(168)] === t(630) ? !ai(x[t(1841)], n[t(1667)]) && (a = this[t(1377)](x, a), X(a, { validation: "jwt", code: B.invalid_string, message: n.message }), e.dirty()) : n.kind === t(218) ? !si(x[t(1841)], n[t(1449)]) && (a = this._getOrReturnCtx(x, a), X(a, { validation: t(218), code: B[t(1626)], message: n.message }), e[t(1795)]()) : n[t(168)] === "base64" ? !Xn[t(937)](x[t(1841)]) && (a = this[t(1377)](x, a), X(a, { validation: "base64", code: B[t(1626)], message: n[t(1682)] }), e[t(1795)]()) : n[t(168)] === "base64url" ? !_n[t(937)](x[t(1841)]) && (a = this[t(1377)](x, a), X(a, { validation: t(839), code: B[t(1626)], message: n[t(1682)] }), e[t(1795)]()) : q0.assertNever(n);
    return { status: e[t(2109)], value: x[t(1841)] };
  }
  [s(690)](x, t, r) {
    var e = s;
    return this[e(2184)]((a) => x.test(a), { validation: t, code: B.invalid_string, ...a0[e(188)](r) });
  }
  [s(1349)](x) {
    var t = s;
    return new ye({ ...this[t(486)], checks: [...this[t(486)][t(1921)], x] });
  }
  email(x) {
    var t = s;
    return this[t(1349)]({ kind: t(2481), ...a0.errToObj(x) });
  }
  url(x) {
    var t = s;
    return this._addCheck({ kind: t(1011), ...a0[t(188)](x) });
  }
  [s(492)](x) {
    var t = s;
    return this._addCheck({ kind: t(492), ...a0[t(188)](x) });
  }
  uuid(x) {
    var t = s;
    return this._addCheck({ kind: t(729), ...a0[t(188)](x) });
  }
  nanoid(x) {
    var t = s;
    return this._addCheck({ kind: t(1972), ...a0[t(188)](x) });
  }
  [s(1464)](x) {
    var t = s;
    return this[t(1349)]({ kind: "cuid", ...a0[t(188)](x) });
  }
  cuid2(x) {
    var t = s;
    return this._addCheck({ kind: t(1192), ...a0[t(188)](x) });
  }
  [s(374)](x) {
    var t = s;
    return this[t(1349)]({ kind: t(374), ...a0.errToObj(x) });
  }
  [s(712)](x) {
    var t = s;
    return this._addCheck({ kind: t(712), ...a0[t(188)](x) });
  }
  [s(839)](x) {
    var t = s;
    return this._addCheck({ kind: t(839), ...a0[t(188)](x) });
  }
  [s(630)](x) {
    var t = s;
    return this[t(1349)]({ kind: t(630), ...a0[t(188)](x) });
  }
  ip(x) {
    var t = s;
    return this[t(1349)]({ kind: "ip", ...a0.errToObj(x) });
  }
  cidr(x) {
    var t = s;
    return this._addCheck({ kind: t(218), ...a0.errToObj(x) });
  }
  [s(581)](x) {
    var t = s;
    return typeof x === t(2254) ? this[t(1349)]({ kind: t(581), precision: null, offset: !1, local: !1, message: x }) : this[t(1349)]({ kind: t(581), precision: typeof (x == null ? void 0 : x[t(711)]) > "u" ? null : x == null ? void 0 : x[t(711)], offset: (x == null ? void 0 : x[t(1813)]) ?? !1, local: (x == null ? void 0 : x[t(980)]) ?? !1, ...a0[t(188)](x == null ? void 0 : x.message) });
  }
  [s(1903)](x) {
    var t = s;
    return this[t(1349)]({ kind: "date", message: x });
  }
  time(x) {
    var t = s;
    return typeof x === t(2254) ? this[t(1349)]({ kind: "time", precision: null, message: x }) : this[t(1349)]({ kind: t(2396), precision: typeof (x == null ? void 0 : x[t(711)]) === t(1110) ? null : x == null ? void 0 : x.precision, ...a0.errToObj(x == null ? void 0 : x[t(1682)]) });
  }
  [s(392)](x) {
    var t = s;
    return this[t(1349)]({ kind: t(392), ...a0[t(188)](x) });
  }
  [s(1353)](x, t) {
    var r = s;
    return this[r(1349)]({ kind: "regex", regex: x, ...a0[r(188)](t) });
  }
  [s(1502)](x, t) {
    var r = s;
    return this[r(1349)]({ kind: r(1502), value: x, position: t == null ? void 0 : t.position, ...a0[r(188)](t == null ? void 0 : t[r(1682)]) });
  }
  [s(897)](x, t) {
    var r = s;
    return this[r(1349)]({ kind: r(897), value: x, ...a0[r(188)](t) });
  }
  [s(1853)](x, t) {
    var r = s;
    return this._addCheck({ kind: "endsWith", value: x, ...a0[r(188)](t) });
  }
  [s(475)](x, t) {
    var r = s;
    return this[r(1349)]({ kind: r(475), value: x, ...a0[r(188)](t) });
  }
  [s(1443)](x, t) {
    var r = s;
    return this[r(1349)]({ kind: r(1443), value: x, ...a0[r(188)](t) });
  }
  [s(1407)](x, t) {
    var r = s;
    return this[r(1349)]({ kind: r(1407), value: x, ...a0[r(188)](t) });
  }
  nonempty(x) {
    var t = s;
    return this[t(475)](1, a0[t(188)](x));
  }
  [s(2247)]() {
    var x = s;
    return new ye({ ...this[x(486)], checks: [...this[x(486)][x(1921)], { kind: x(2247) }] });
  }
  [s(1418)]() {
    var x = s;
    return new ye({ ...this._def, checks: [...this[x(486)][x(1921)], { kind: x(1418) }] });
  }
  [s(2031)]() {
    var x = s;
    return new ye({ ...this[x(486)], checks: [...this._def.checks, { kind: x(2031) }] });
  }
  get [s(1204)]() {
    var x = s;
    return !!this[x(486)][x(1921)][x(1119)]((t) => t[x(168)] === x(581));
  }
  get [s(1714)]() {
    var x = s;
    return !!this[x(486)][x(1921)].find((t) => t[x(168)] === x(1903));
  }
  get [s(121)]() {
    var x = s;
    return !!this[x(486)].checks[x(1119)]((t) => t[x(168)] === x(2396));
  }
  get [s(770)]() {
    var x = s;
    return !!this._def[x(1921)][x(1119)]((t) => t[x(168)] === "duration");
  }
  get [s(2438)]() {
    var x = s;
    return !!this[x(486)][x(1921)][x(1119)]((t) => t[x(168)] === x(2481));
  }
  get [s(1530)]() {
    var x = s;
    return !!this[x(486)][x(1921)][x(1119)]((t) => t.kind === x(1011));
  }
  get [s(342)]() {
    var x = s;
    return !!this[x(486)][x(1921)][x(1119)]((t) => t[x(168)] === x(492));
  }
  get [s(791)]() {
    var x = s;
    return !!this[x(486)][x(1921)][x(1119)]((t) => t.kind === "uuid");
  }
  get [s(1774)]() {
    var x = s;
    return !!this[x(486)][x(1921)][x(1119)]((t) => t.kind === "nanoid");
  }
  get isCUID() {
    var x = s;
    return !!this._def[x(1921)].find((t) => t[x(168)] === x(1464));
  }
  get [s(2108)]() {
    var x = s;
    return !!this[x(486)][x(1921)].find((t) => t[x(168)] === x(1192));
  }
  get isULID() {
    var x = s;
    return !!this._def[x(1921)][x(1119)]((t) => t[x(168)] === x(374));
  }
  get [s(1958)]() {
    var x = s;
    return !!this._def[x(1921)][x(1119)]((t) => t[x(168)] === "ip");
  }
  get [s(1708)]() {
    var x = s;
    return !!this[x(486)].checks.find((t) => t[x(168)] === x(218));
  }
  get [s(995)]() {
    var x = s;
    return !!this[x(486)][x(1921)].find((t) => t[x(168)] === x(712));
  }
  get [s(814)]() {
    var x = s;
    return !!this._def[x(1921)][x(1119)]((t) => t[x(168)] === x(839));
  }
  get [s(710)]() {
    var x = s;
    let t = null;
    for (const r of this[x(486)][x(1921)])
      r[x(168)] === x(475) && (t === null || r[x(2109)] > t) && (t = r.value);
    return t;
  }
  get [s(845)]() {
    var x = s;
    let t = null;
    for (const r of this[x(486)].checks)
      r.kind === x(1443) && (t === null || r[x(2109)] < t) && (t = r[x(2109)]);
    return t;
  }
}
ye[s(1661)] = (i) => {
  var x = s;
  return new ye({ checks: [], typeName: p0.ZodString, coerce: (i == null ? void 0 : i[x(569)]) ?? !1, ...y0(i) });
};
function ni(i, x) {
  var t = s;
  const r = (i[t(349)]()[t(1363)](".")[1] || "")[t(1407)], e = (x.toString().split(".")[1] || "")[t(1407)], a = r > e ? r : e, n = Number[t(388)](i[t(136)](a)[t(139)](".", "")), o = Number[t(388)](x[t(136)](a)[t(139)](".", ""));
  return n % o / 10 ** a;
}
class We extends P0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(475)] = this[x(1018)], this[x(1443)] = this[x(1157)], this[x(674)] = this[x(1262)];
  }
  [s(1441)](x) {
    var t = s;
    if (this[t(486)][t(569)] && (x[t(1841)] = Number(x[t(1841)])), this[t(2037)](x) !== x0.number) {
      const n = this._getOrReturnCtx(x);
      return X(n, { code: B[t(1966)], expected: x0.number, received: n.parsedType }), h0;
    }
    let e;
    const a = new ee();
    for (const n of this[t(486)][t(1921)])
      n[t(168)] === t(2044) ? !q0[t(2134)](x[t(1841)]) && (e = this._getOrReturnCtx(x, e), X(e, { code: B.invalid_type, expected: "integer", received: t(632), message: n[t(1682)] }), a.dirty()) : n.kind === t(475) ? (n[t(1484)] ? x.data < n[t(2109)] : x[t(1841)] <= n[t(2109)]) && (e = this._getOrReturnCtx(x, e), X(e, { code: B[t(717)], minimum: n[t(2109)], type: t(2240), inclusive: n.inclusive, exact: !1, message: n[t(1682)] }), a[t(1795)]()) : n[t(168)] === t(1443) ? (n[t(1484)] ? x[t(1841)] > n.value : x[t(1841)] >= n.value) && (e = this[t(1377)](x, e), X(e, { code: B[t(1089)], maximum: n[t(2109)], type: t(2240), inclusive: n[t(1484)], exact: !1, message: n[t(1682)] }), a[t(1795)]()) : n.kind === t(1262) ? ni(x.data, n[t(2109)]) !== 0 && (e = this[t(1377)](x, e), X(e, { code: B.not_multiple_of, multipleOf: n[t(2109)], message: n[t(1682)] }), a.dirty()) : n[t(168)] === "finite" ? !Number[t(1943)](x[t(1841)]) && (e = this[t(1377)](x, e), X(e, { code: B[t(933)], message: n[t(1682)] }), a[t(1795)]()) : q0[t(131)](n);
    return { status: a.value, value: x[t(1841)] };
  }
  [s(1018)](x, t) {
    var r = s;
    return this[r(1904)](r(475), x, !0, a0[r(349)](t));
  }
  gt(x, t) {
    var r = s;
    return this[r(1904)](r(475), x, !1, a0[r(349)](t));
  }
  lte(x, t) {
    var r = s;
    return this[r(1904)](r(1443), x, !0, a0[r(349)](t));
  }
  lt(x, t) {
    var r = s;
    return this[r(1904)](r(1443), x, !1, a0.toString(t));
  }
  [s(1904)](x, t, r, e) {
    var a = s;
    return new We({ ...this[a(486)], checks: [...this[a(486)][a(1921)], { kind: x, value: t, inclusive: r, message: a0[a(349)](e) }] });
  }
  _addCheck(x) {
    var t = s;
    return new We({ ...this._def, checks: [...this[t(486)][t(1921)], x] });
  }
  int(x) {
    var t = s;
    return this[t(1349)]({ kind: t(2044), message: a0[t(349)](x) });
  }
  [s(2083)](x) {
    var t = s;
    return this[t(1349)]({ kind: t(475), value: 0, inclusive: !1, message: a0[t(349)](x) });
  }
  [s(350)](x) {
    var t = s;
    return this[t(1349)]({ kind: t(1443), value: 0, inclusive: !1, message: a0[t(349)](x) });
  }
  [s(2069)](x) {
    var t = s;
    return this._addCheck({ kind: t(1443), value: 0, inclusive: !0, message: a0[t(349)](x) });
  }
  [s(2203)](x) {
    var t = s;
    return this._addCheck({ kind: t(475), value: 0, inclusive: !0, message: a0.toString(x) });
  }
  [s(1262)](x, t) {
    var r = s;
    return this[r(1349)]({ kind: "multipleOf", value: x, message: a0[r(349)](t) });
  }
  [s(808)](x) {
    var t = s;
    return this[t(1349)]({ kind: t(808), message: a0.toString(x) });
  }
  [s(1886)](x) {
    var t = s;
    return this[t(1349)]({ kind: t(475), inclusive: !0, value: Number[t(1369)], message: a0.toString(x) })[t(1349)]({ kind: t(1443), inclusive: !0, value: Number[t(775)], message: a0[t(349)](x) });
  }
  get [s(1280)]() {
    var x = s;
    let t = null;
    for (const r of this[x(486)][x(1921)])
      r[x(168)] === x(475) && (t === null || r[x(2109)] > t) && (t = r.value);
    return t;
  }
  get [s(615)]() {
    var x = s;
    let t = null;
    for (const r of this._def[x(1921)])
      r[x(168)] === x(1443) && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get [s(2051)]() {
    var x = s;
    return !!this[x(486)][x(1921)][x(1119)]((t) => t[x(168)] === x(2044) || t[x(168)] === x(1262) && q0[x(2134)](t[x(2109)]));
  }
  get [s(1943)]() {
    var x = s;
    let t = null, r = null;
    for (const e of this[x(486)][x(1921)]) {
      if (e[x(168)] === x(808) || e[x(168)] === x(2044) || e[x(168)] === x(1262)) return !0;
      e[x(168)] === "min" ? (r === null || e.value > r) && (r = e[x(2109)]) : e.kind === x(1443) && (t === null || e[x(2109)] < t) && (t = e[x(2109)]);
    }
    return Number[x(1943)](r) && Number.isFinite(t);
  }
}
We.create = (i) => {
  var x = s;
  return new We({ checks: [], typeName: p0[x(1396)], coerce: (i == null ? void 0 : i[x(569)]) || !1, ...y0(i) });
};
class xx extends P0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(475)] = this.gte, this[x(1443)] = this.lte;
  }
  [s(1441)](x) {
    var t = s;
    if (this._def.coerce) try {
      x[t(1841)] = BigInt(x[t(1841)]);
    } catch {
      return this[t(2172)](x);
    }
    if (this[t(2037)](x) !== x0[t(999)]) return this[t(2172)](x);
    let e;
    const a = new ee();
    for (const n of this[t(486)].checks)
      n.kind === "min" ? (n[t(1484)] ? x.data < n[t(2109)] : x.data <= n[t(2109)]) && (e = this[t(1377)](x, e), X(e, { code: B.too_small, type: t(999), minimum: n[t(2109)], inclusive: n.inclusive, message: n.message }), a[t(1795)]()) : n[t(168)] === t(1443) ? (n[t(1484)] ? x.data > n[t(2109)] : x[t(1841)] >= n[t(2109)]) && (e = this[t(1377)](x, e), X(e, { code: B.too_big, type: t(999), maximum: n.value, inclusive: n[t(1484)], message: n[t(1682)] }), a[t(1795)]()) : n[t(168)] === t(1262) ? x[t(1841)] % n[t(2109)] !== BigInt(0) && (e = this[t(1377)](x, e), X(e, { code: B[t(2388)], multipleOf: n.value, message: n[t(1682)] }), a[t(1795)]()) : q0.assertNever(n);
    return { status: a[t(2109)], value: x[t(1841)] };
  }
  [s(2172)](x) {
    var t = s;
    const r = this[t(1377)](x);
    return X(r, { code: B[t(1966)], expected: x0[t(999)], received: r[t(1665)] }), h0;
  }
  [s(1018)](x, t) {
    var r = s;
    return this[r(1904)](r(475), x, !0, a0[r(349)](t));
  }
  gt(x, t) {
    var r = s;
    return this[r(1904)](r(475), x, !1, a0[r(349)](t));
  }
  [s(1157)](x, t) {
    var r = s;
    return this[r(1904)](r(1443), x, !0, a0.toString(t));
  }
  lt(x, t) {
    var r = s;
    return this[r(1904)](r(1443), x, !1, a0[r(349)](t));
  }
  [s(1904)](x, t, r, e) {
    var a = s;
    return new xx({ ...this[a(486)], checks: [...this[a(486)][a(1921)], { kind: x, value: t, inclusive: r, message: a0.toString(e) }] });
  }
  [s(1349)](x) {
    var t = s;
    return new xx({ ...this[t(486)], checks: [...this[t(486)][t(1921)], x] });
  }
  [s(2083)](x) {
    var t = s;
    return this[t(1349)]({ kind: t(475), value: BigInt(0), inclusive: !1, message: a0.toString(x) });
  }
  [s(350)](x) {
    var t = s;
    return this[t(1349)]({ kind: t(1443), value: BigInt(0), inclusive: !1, message: a0[t(349)](x) });
  }
  [s(2069)](x) {
    var t = s;
    return this[t(1349)]({ kind: t(1443), value: BigInt(0), inclusive: !0, message: a0[t(349)](x) });
  }
  [s(2203)](x) {
    var t = s;
    return this[t(1349)]({ kind: "min", value: BigInt(0), inclusive: !0, message: a0[t(349)](x) });
  }
  [s(1262)](x, t) {
    var r = s;
    return this[r(1349)]({ kind: r(1262), value: x, message: a0[r(349)](t) });
  }
  get [s(1280)]() {
    var x = s;
    let t = null;
    for (const r of this[x(486)].checks)
      r[x(168)] === x(475) && (t === null || r[x(2109)] > t) && (t = r.value);
    return t;
  }
  get [s(615)]() {
    var x = s;
    let t = null;
    for (const r of this[x(486)][x(1921)])
      r[x(168)] === x(1443) && (t === null || r.value < t) && (t = r[x(2109)]);
    return t;
  }
}
xx[s(1661)] = (i) => {
  var x = s;
  return new xx({ checks: [], typeName: p0[x(904)], coerce: (i == null ? void 0 : i[x(569)]) ?? !1, ...y0(i) });
};
class Lt extends P0 {
  [s(1441)](x) {
    var t = s;
    if (this._def.coerce && (x[t(1841)] = !!x[t(1841)]), this[t(2037)](x) !== x0[t(968)]) {
      const e = this._getOrReturnCtx(x);
      return X(e, { code: B[t(1966)], expected: x0[t(968)], received: e[t(1665)] }), h0;
    }
    return re(x[t(1841)]);
  }
}
Lt[s(1661)] = (i) => {
  var x = s;
  return new Lt({ typeName: p0[x(2387)], coerce: (i == null ? void 0 : i[x(569)]) || !1, ...y0(i) });
};
class mx extends P0 {
  _parse(x) {
    var t = s;
    if (this._def[t(569)] && (x[t(1841)] = new Date(x[t(1841)])), this[t(2037)](x) !== x0.date) {
      const n = this[t(1377)](x);
      return X(n, { code: B[t(1966)], expected: x0[t(1903)], received: n[t(1665)] }), h0;
    }
    if (Number[t(1211)](x[t(1841)].getTime())) {
      const n = this._getOrReturnCtx(x);
      return X(n, { code: B[t(2035)] }), h0;
    }
    const e = new ee();
    let a;
    for (const n of this[t(486)][t(1921)])
      n.kind === t(475) ? x[t(1841)][t(404)]() < n.value && (a = this._getOrReturnCtx(x, a), X(a, { code: B.too_small, message: n[t(1682)], inclusive: !0, exact: !1, minimum: n[t(2109)], type: t(1903) }), e[t(1795)]()) : n.kind === "max" ? x[t(1841)][t(404)]() > n[t(2109)] && (a = this._getOrReturnCtx(x, a), X(a, { code: B[t(1089)], message: n.message, inclusive: !0, exact: !1, maximum: n[t(2109)], type: t(1903) }), e[t(1795)]()) : q0[t(131)](n);
    return { status: e[t(2109)], value: new Date(x.data[t(404)]()) };
  }
  [s(1349)](x) {
    var t = s;
    return new mx({ ...this[t(486)], checks: [...this[t(486)].checks, x] });
  }
  min(x, t) {
    var r = s;
    return this[r(1349)]({ kind: "min", value: x[r(404)](), message: a0[r(349)](t) });
  }
  max(x, t) {
    var r = s;
    return this[r(1349)]({ kind: r(1443), value: x[r(404)](), message: a0.toString(t) });
  }
  get minDate() {
    var x = s;
    let t = null;
    for (const r of this[x(486)].checks)
      r[x(168)] === x(475) && (t === null || r[x(2109)] > t) && (t = r[x(2109)]);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    var x = s;
    let t = null;
    for (const r of this[x(486)][x(1921)])
      r[x(168)] === "max" && (t === null || r[x(2109)] < t) && (t = r[x(2109)]);
    return t != null ? new Date(t) : null;
  }
}
mx[s(1661)] = (i) => {
  var x = s;
  return new mx({ checks: [], coerce: (i == null ? void 0 : i[x(569)]) || !1, typeName: p0[x(2325)], ...y0(i) });
};
class Cr extends P0 {
  [s(1441)](x) {
    var t = s;
    if (this[t(2037)](x) !== x0[t(1459)]) {
      const e = this[t(1377)](x);
      return X(e, { code: B[t(1966)], expected: x0[t(1459)], received: e[t(1665)] }), h0;
    }
    return re(x[t(1841)]);
  }
}
Cr[s(1661)] = (i) => {
  var x = s;
  return new Cr({ typeName: p0[x(1467)], ...y0(i) });
};
class $t extends P0 {
  [s(1441)](x) {
    var t = s;
    if (this[t(2037)](x) !== x0.undefined) {
      const e = this[t(1377)](x);
      return X(e, { code: B[t(1966)], expected: x0[t(1110)], received: e.parsedType }), h0;
    }
    return re(x[t(1841)]);
  }
}
$t[s(1661)] = (i) => new $t({ typeName: p0.ZodUndefined, ...y0(i) });
class zt extends P0 {
  [s(1441)](x) {
    var t = s;
    if (this._getType(x) !== x0[t(599)]) {
      const e = this[t(1377)](x);
      return X(e, { code: B.invalid_type, expected: x0[t(599)], received: e[t(1665)] }), h0;
    }
    return re(x[t(1841)]);
  }
}
zt[s(1661)] = (i) => new zt({ typeName: p0.ZodNull, ...y0(i) });
class Ht extends P0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(1494)] = !0;
  }
  [s(1441)](x) {
    return re(x.data);
  }
}
Ht[s(1661)] = (i) => new Ht({ typeName: p0.ZodAny, ...y0(i) });
class Ut extends P0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(1677)] = !0;
  }
  [s(1441)](x) {
    var t = s;
    return re(x[t(1841)]);
  }
}
Ut.create = (i) => new Ut({ typeName: p0.ZodUnknown, ...y0(i) });
class Pe extends P0 {
  [s(1441)](x) {
    var t = s;
    const r = this[t(1377)](x);
    return X(r, { code: B[t(1966)], expected: x0[t(636)], received: r[t(1665)] }), h0;
  }
}
Pe[s(1661)] = (i) => {
  var x = s;
  return new Pe({ typeName: p0[x(1150)], ...y0(i) });
};
class Vt extends P0 {
  [s(1441)](x) {
    var t = s;
    if (this[t(2037)](x) !== x0[t(1110)]) {
      const e = this[t(1377)](x);
      return X(e, { code: B[t(1966)], expected: x0[t(457)], received: e.parsedType }), h0;
    }
    return re(x[t(1841)]);
  }
}
Vt[s(1661)] = (i) => {
  var x = s;
  return new Vt({ typeName: p0[x(859)], ...y0(i) });
};
class le extends P0 {
  _parse(x) {
    var t = s;
    const { ctx: r, status: e } = this[t(1587)](x), a = this[t(486)];
    if (r[t(1665)] !== x0[t(1040)]) return X(r, { code: B[t(1966)], expected: x0[t(1040)], received: r[t(1665)] }), h0;
    if (a.exactLength !== null) {
      const o = r[t(1841)][t(1407)] > a[t(1268)][t(2109)], c = r[t(1841)][t(1407)] < a[t(1268)][t(2109)];
      (o || c) && (X(r, { code: o ? B[t(1089)] : B[t(717)], minimum: c ? a[t(1268)][t(2109)] : void 0, maximum: o ? a.exactLength.value : void 0, type: t(1040), inclusive: !0, exact: !0, message: a[t(1268)][t(1682)] }), e[t(1795)]());
    }
    if (a[t(710)] !== null && r[t(1841)][t(1407)] < a[t(710)].value && (X(r, { code: B[t(717)], minimum: a[t(710)][t(2109)], type: t(1040), inclusive: !0, exact: !1, message: a.minLength[t(1682)] }), e.dirty()), a[t(845)] !== null && r.data[t(1407)] > a[t(845)][t(2109)] && (X(r, { code: B[t(1089)], maximum: a[t(845)][t(2109)], type: "array", inclusive: !0, exact: !1, message: a.maxLength[t(1682)] }), e[t(1795)]()), r[t(1645)][t(1501)]) return Promise[t(2337)]([...r[t(1841)]][t(2159)]((o, c) => {
      var d = t;
      return a[d(1273)][d(357)](new he(r, o, r[d(1512)], c));
    }))[t(2367)]((o) => {
      var c = t;
      return ee[c(127)](e, o);
    });
    const n = [...r[t(1841)]][t(2159)]((o, c) => {
      var d = t;
      return a[d(1273)][d(592)](new he(r, o, r.path, c));
    });
    return ee[t(127)](e, n);
  }
  get [s(557)]() {
    var x = s;
    return this[x(486)][x(1273)];
  }
  [s(475)](x, t) {
    var r = s;
    return new le({ ...this[r(486)], minLength: { value: x, message: a0[r(349)](t) } });
  }
  max(x, t) {
    return new le({ ...this._def, maxLength: { value: x, message: a0.toString(t) } });
  }
  [s(1407)](x, t) {
    return new le({ ...this._def, exactLength: { value: x, message: a0.toString(t) } });
  }
  [s(1019)](x) {
    return this.min(1, x);
  }
}
le[s(1661)] = (i, x) => {
  var t = s;
  return new le({ type: i, minLength: null, maxLength: null, exactLength: null, typeName: p0[t(2393)], ...y0(x) });
};
function Ue(i) {
  var x = s;
  if (i instanceof B0) {
    const t = {};
    for (const r in i[x(414)]) {
      const e = i.shape[r];
      t[r] = we.create(Ue(e));
    }
    return new B0({ ...i[x(486)], shape: () => t });
  } else
    return i instanceof le ? new le({ ...i[x(486)], type: Ue(i[x(557)]) }) : i instanceof we ? we[x(1661)](Ue(i[x(1190)]())) : i instanceof je ? je.create(Ue(i.unwrap())) : i instanceof Ae ? Ae[x(1661)](i[x(561)][x(2159)]((t) => Ue(t))) : i;
}
class B0 extends P0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(1905)] = null, this[x(542)] = this[x(1686)], this.augment = this[x(2003)];
  }
  [s(409)]() {
    var x = s;
    if (this[x(1905)] !== null) return this[x(1905)];
    const t = this[x(486)][x(414)](), r = q0[x(1830)](t);
    return this[x(1905)] = { shape: t, keys: r }, this[x(1905)];
  }
  [s(1441)](x) {
    var t = s;
    if (this[t(2037)](x) !== x0.object) {
      const u = this[t(1377)](x);
      return X(u, { code: B[t(1966)], expected: x0[t(1526)], received: u[t(1665)] }), h0;
    }
    const { status: e, ctx: a } = this._processInputParams(x), { shape: n, keys: o } = this[t(409)](), c = [];
    if (!(this[t(486)][t(1802)] instanceof Pe && this._def.unknownKeys === t(2318))) for (const u in a.data)
      !o[t(1502)](u) && c[t(365)](u);
    const d = [];
    for (const u of o) {
      const f = n[u], l = a[t(1841)][u];
      d[t(365)]({ key: { status: t(1390), value: u }, value: f[t(1441)](new he(a, l, a.path, u)), alwaysSet: u in a.data });
    }
    if (this[t(486)][t(1802)] instanceof Pe) {
      const u = this[t(486)][t(1778)];
      if (u === "passthrough") for (const f of c)
        d[t(365)]({ key: { status: t(1390), value: f }, value: { status: t(1390), value: a[t(1841)][f] } });
      else if (u === t(2084)) c.length > 0 && (X(a, { code: B.unrecognized_keys, keys: c }), e[t(1795)]());
      else if (u !== t(2318)) throw new Error(t(1515));
    } else {
      const u = this[t(486)][t(1802)];
      for (const f of c) {
        const l = a[t(1841)][f];
        d[t(365)]({ key: { status: "valid", value: f }, value: u[t(1441)](new he(a, l, a.path, f)), alwaysSet: f in a[t(1841)] });
      }
    }
    return a[t(1645)].async ? Promise.resolve()[t(2367)](async () => {
      var u = t;
      const f = [];
      for (const l of d) {
        const v = await l[u(2397)], h = await l[u(2109)];
        f[u(365)]({ key: v, value: h, alwaysSet: l[u(895)] });
      }
      return f;
    }).then((u) => {
      var f = t;
      return ee[f(2466)](e, u);
    }) : ee.mergeObjectSync(e, d);
  }
  get [s(414)]() {
    var x = s;
    return this[x(486)][x(414)]();
  }
  [s(2084)](x) {
    var t = s;
    return a0[t(188)], new B0({ ...this[t(486)], unknownKeys: "strict", ...x !== void 0 ? { errorMap: (r, e) => {
      var o, c;
      var a = t;
      const n = ((c = (o = this[a(486)])[a(1281)]) == null ? void 0 : c.call(o, r, e)[a(1682)]) ?? e.defaultError;
      return r[a(2029)] === "unrecognized_keys" ? { message: a0[a(188)](x).message ?? n } : { message: n };
    } } : {} });
  }
  [s(2318)]() {
    var x = s;
    return new B0({ ...this[x(486)], unknownKeys: "strip" });
  }
  [s(1686)]() {
    var x = s;
    return new B0({ ...this[x(486)], unknownKeys: x(1686) });
  }
  [s(2003)](x) {
    var t = s;
    return new B0({ ...this[t(486)], shape: () => ({ ...this[t(486)][t(414)](), ...x }) });
  }
  merge(x) {
    var t = s;
    return new B0({ unknownKeys: x[t(486)][t(1778)], catchall: x[t(486)].catchall, shape: () => ({ ...this[t(486)][t(414)](), ...x._def.shape() }), typeName: p0[t(739)] });
  }
  [s(1865)](x, t) {
    return this.augment({ [x]: t });
  }
  [s(1802)](x) {
    var t = s;
    return new B0({ ...this[t(486)], catchall: x });
  }
  [s(1152)](x) {
    var t = s;
    const r = {};
    for (const e of q0.objectKeys(x))
      x[e] && this[t(414)][e] && (r[e] = this[t(414)][e]);
    return new B0({ ...this[t(486)], shape: () => r });
  }
  [s(314)](x) {
    var t = s;
    const r = {};
    for (const e of q0[t(1830)](this[t(414)]))
      !x[e] && (r[e] = this.shape[e]);
    return new B0({ ...this[t(486)], shape: () => r });
  }
  deepPartial() {
    return Ue(this);
  }
  [s(221)](x) {
    var t = s;
    const r = {};
    for (const e of q0[t(1830)](this.shape)) {
      const a = this[t(414)][e];
      x && !x[e] ? r[e] = a : r[e] = a[t(1597)]();
    }
    return new B0({ ...this[t(486)], shape: () => r });
  }
  [s(129)](x) {
    var t = s;
    const r = {};
    for (const e of q0[t(1830)](this[t(414)]))
      if (x && !x[e]) r[e] = this[t(414)][e];
      else {
        let n = this[t(414)][e];
        for (; n instanceof we; )
          n = n[t(486)][t(176)];
        r[e] = n;
      }
    return new B0({ ...this[t(486)], shape: () => r });
  }
  [s(2091)]() {
    var x = s;
    return Ms(q0[x(1830)](this.shape));
  }
}
B0[s(1661)] = (i, x) => {
  var t = s;
  return new B0({ shape: () => i, unknownKeys: t(2318), catchall: Pe[t(1661)](), typeName: p0[t(739)], ...y0(x) });
}, B0.strictCreate = (i, x) => {
  var t = s;
  return new B0({ shape: () => i, unknownKeys: t(2084), catchall: Pe[t(1661)](), typeName: p0[t(739)], ...y0(x) });
}, B0[s(993)] = (i, x) => {
  var t = s;
  return new B0({ shape: i, unknownKeys: t(2318), catchall: Pe[t(1661)](), typeName: p0[t(739)], ...y0(x) });
};
class vx extends P0 {
  [s(1441)](x) {
    var t = s;
    const { ctx: r } = this[t(1587)](x), e = this._def.options;
    function a(n) {
      var o = t;
      for (const d of n)
        if (d.result[o(333)] === o(1390)) return d[o(1690)];
      for (const d of n)
        if (d[o(1690)].status === o(1795)) return r.common[o(1916)][o(365)](...d[o(548)][o(1645)][o(1916)]), d.result;
      const c = n.map((d) => new Se(d[o(548)].common[o(1916)]));
      return X(r, { code: B.invalid_union, unionErrors: c }), h0;
    }
    if (r[t(1645)].async) return Promise[t(2337)](e[t(2159)](async (n) => {
      var o = t;
      const c = { ...r, common: { ...r[o(1645)], issues: [] }, parent: null };
      return { result: await n[o(357)]({ data: r.data, path: r.path, parent: c }), ctx: c };
    })).then(a);
    {
      let n;
      const o = [];
      for (const d of e) {
        const u = { ...r, common: { ...r[t(1645)], issues: [] }, parent: null }, f = d._parseSync({ data: r[t(1841)], path: r[t(1512)], parent: u });
        if (f[t(333)] === t(1390)) return f;
        f.status === t(1795) && !n && (n = { result: f, ctx: u }), u.common[t(1916)][t(1407)] && o[t(365)](u[t(1645)][t(1916)]);
      }
      if (n) return r.common[t(1916)][t(365)](...n.ctx[t(1645)][t(1916)]), n[t(1690)];
      const c = o[t(2159)]((d) => new Se(d));
      return X(r, { code: B[t(2328)], unionErrors: c }), h0;
    }
  }
  get [s(1618)]() {
    var x = s;
    return this._def[x(1618)];
  }
}
vx.create = (i, x) => new vx({ options: i, typeName: p0.ZodUnion, ...y0(x) });
const ge = (i) => {
  var x = s;
  return i instanceof Zt ? ge(i[x(2066)]) : i instanceof qe ? ge(i.innerType()) : i instanceof yx ? [i[x(2109)]] : i instanceof De ? i[x(1618)] : i instanceof Kt ? q0[x(1488)](i[x(1781)]) : i instanceof Sx ? ge(i[x(486)][x(176)]) : i instanceof $t ? [void 0] : i instanceof zt ? [null] : i instanceof we ? [void 0, ...ge(i[x(1190)]())] : i instanceof je ? [null, ...ge(i[x(1190)]())] : i instanceof Ls ? ge(i.unwrap()) : i instanceof Ex ? ge(i[x(1190)]()) : i instanceof kx ? ge(i[x(486)][x(176)]) : [];
};
class tr extends P0 {
  [s(1441)](x) {
    var t = s;
    const { ctx: r } = this[t(1587)](x);
    if (r.parsedType !== x0[t(1526)]) return X(r, { code: B[t(1966)], expected: x0[t(1526)], received: r[t(1665)] }), h0;
    const e = this.discriminator, a = r[t(1841)][e], n = this[t(1680)].get(a);
    return n ? r.common.async ? n._parseAsync({ data: r[t(1841)], path: r[t(1512)], parent: r }) : n[t(592)]({ data: r.data, path: r.path, parent: r }) : (X(r, { code: B[t(752)], options: Array.from(this[t(1680)][t(1087)]()), path: [e] }), h0);
  }
  get discriminator() {
    var x = s;
    return this[x(486)][x(165)];
  }
  get [s(1618)]() {
    var x = s;
    return this[x(486)][x(1618)];
  }
  get optionsMap() {
    var x = s;
    return this._def[x(1680)];
  }
  static [s(1661)](x, t, r) {
    var e = s;
    const a = /* @__PURE__ */ new Map();
    for (const n of t) {
      const o = ge(n[e(414)][x]);
      if (!o[e(1407)]) throw new Error("A discriminator value for key `" + x + e(2183));
      for (const c of o) {
        if (a[e(179)](c)) throw new Error("Discriminator property " + String(x) + e(1713) + String(c));
        a[e(321)](c, n);
      }
    }
    return new tr({ typeName: p0[e(1208)], discriminator: x, options: t, optionsMap: a, ...y0(r) });
  }
}
function Wt(i, x) {
  var t = s;
  const r = Ee(i), e = Ee(x);
  if (i === x) return { valid: !0, data: i };
  if (r === x0[t(1526)] && e === x0[t(1526)]) {
    const a = q0.objectKeys(x), n = q0.objectKeys(i).filter((c) => a[t(1679)](c) !== -1), o = { ...i, ...x };
    for (const c of n) {
      const d = Wt(i[c], x[c]);
      if (!d.valid) return { valid: !1 };
      o[c] = d[t(1841)];
    }
    return { valid: !0, data: o };
  } else if (r === x0[t(1040)] && e === x0.array) {
    if (i[t(1407)] !== x[t(1407)]) return { valid: !1 };
    const a = [];
    for (let n = 0; n < i[t(1407)]; n++) {
      const o = i[n], c = x[n], d = Wt(o, c);
      if (!d[t(1390)]) return { valid: !1 };
      a.push(d[t(1841)]);
    }
    return { valid: !0, data: a };
  } else return r === x0.date && e === x0[t(1903)] && +i == +x ? { valid: !0, data: i } : { valid: !1 };
}
class gx extends P0 {
  [s(1441)](x) {
    var t = s;
    const { status: r, ctx: e } = this[t(1587)](x), a = (n, o) => {
      var c = t;
      if (Pr(n) || Pr(o)) return h0;
      const d = Wt(n[c(2109)], o[c(2109)]);
      return d.valid ? ((Ir(n) || Ir(o)) && r.dirty(), { status: r[c(2109)], value: d.data }) : (X(e, { code: B[c(1012)] }), h0);
    };
    return e[t(1645)][t(1501)] ? Promise[t(2337)]([this._def.left[t(357)]({ data: e[t(1841)], path: e.path, parent: e }), this[t(486)][t(1367)]._parseAsync({ data: e[t(1841)], path: e.path, parent: e })]).then(([n, o]) => a(n, o)) : a(this[t(486)].left[t(592)]({ data: e[t(1841)], path: e[t(1512)], parent: e }), this[t(486)][t(1367)][t(592)]({ data: e[t(1841)], path: e.path, parent: e }));
  }
}
gx[s(1661)] = (i, x, t) => {
  var r = s;
  return new gx({ left: i, right: x, typeName: p0[r(943)], ...y0(t) });
};
class Ae extends P0 {
  [s(1441)](x) {
    var t = s;
    const { status: r, ctx: e } = this._processInputParams(x);
    if (e[t(1665)] !== x0.array) return X(e, { code: B[t(1966)], expected: x0[t(1040)], received: e.parsedType }), h0;
    if (e[t(1841)][t(1407)] < this[t(486)].items[t(1407)]) return X(e, { code: B[t(717)], minimum: this[t(486)][t(561)][t(1407)], inclusive: !0, exact: !1, type: "array" }), h0;
    !this[t(486)][t(1696)] && e[t(1841)].length > this[t(486)][t(561)].length && (X(e, { code: B[t(1089)], maximum: this._def.items.length, inclusive: !0, exact: !1, type: t(1040) }), r[t(1795)]());
    const n = [...e[t(1841)]].map((o, c) => {
      var d = t;
      const u = this[d(486)].items[c] || this._def[d(1696)];
      return u ? u[d(1441)](new he(e, o, e.path, c)) : null;
    }).filter((o) => !!o);
    return e[t(1645)][t(1501)] ? Promise[t(2337)](n)[t(2367)]((o) => {
      var c = t;
      return ee[c(127)](r, o);
    }) : ee[t(127)](r, n);
  }
  get items() {
    return this._def.items;
  }
  [s(1696)](x) {
    var t = s;
    return new Ae({ ...this[t(486)], rest: x });
  }
}
Ae[s(1661)] = (i, x) => {
  var t = s;
  if (!Array[t(242)](i)) throw new Error(t(951));
  return new Ae({ items: i, typeName: p0[t(202)], rest: null, ...y0(x) });
};
class bx extends P0 {
  get [s(549)]() {
    var x = s;
    return this[x(486)][x(2450)];
  }
  get [s(1015)]() {
    var x = s;
    return this[x(486)].valueType;
  }
  [s(1441)](x) {
    var t = s;
    const { status: r, ctx: e } = this[t(1587)](x);
    if (e[t(1665)] !== x0[t(1526)]) return X(e, { code: B[t(1966)], expected: x0[t(1526)], received: e[t(1665)] }), h0;
    const a = [], n = this[t(486)][t(2450)], o = this[t(486)][t(293)];
    for (const c in e[t(1841)])
      a[t(365)]({ key: n[t(1441)](new he(e, c, e[t(1512)], c)), value: o[t(1441)](new he(e, e[t(1841)][c], e[t(1512)], c)), alwaysSet: c in e[t(1841)] });
    return e[t(1645)][t(1501)] ? ee[t(1699)](r, a) : ee[t(2466)](r, a);
  }
  get [s(557)]() {
    var x = s;
    return this[x(486)][x(293)];
  }
  static create(x, t, r) {
    var e = s;
    return t instanceof P0 ? new bx({ keyType: x, valueType: t, typeName: p0.ZodRecord, ...y0(r) }) : new bx({ keyType: ye[e(1661)](), valueType: x, typeName: p0[e(1763)], ...y0(t) });
  }
}
class Fr extends P0 {
  get [s(549)]() {
    return this._def.keyType;
  }
  get [s(1015)]() {
    var x = s;
    return this[x(486)].valueType;
  }
  [s(1441)](x) {
    var t = s;
    const { status: r, ctx: e } = this[t(1587)](x);
    if (e[t(1665)] !== x0.map) return X(e, { code: B[t(1966)], expected: x0.map, received: e[t(1665)] }), h0;
    const a = this._def.keyType, n = this[t(486)].valueType, o = [...e[t(1841)][t(2177)]()][t(2159)](([c, d], u) => {
      var f = t;
      return { key: a[f(1441)](new he(e, c, e[f(1512)], [u, f(2397)])), value: n[f(1441)](new he(e, d, e[f(1512)], [u, f(2109)])) };
    });
    if (e[t(1645)][t(1501)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise.resolve()[t(2367)](async () => {
        var d = t;
        for (const u of o) {
          const f = await u[d(2397)], l = await u.value;
          if (f.status === d(463) || l[d(333)] === d(463)) return h0;
          (f[d(333)] === d(1795) || l[d(333)] === d(1795)) && r[d(1795)](), c.set(f[d(2109)], l.value);
        }
        return { status: r[d(2109)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const d of o) {
        const u = d.key, f = d[t(2109)];
        if (u[t(333)] === t(463) || f[t(333)] === t(463)) return h0;
        (u.status === "dirty" || f[t(333)] === t(1795)) && r[t(1795)](), c[t(321)](u.value, f.value);
      }
      return { status: r[t(2109)], value: c };
    }
  }
}
Fr.create = (i, x, t) => {
  var r = s;
  return new Fr({ valueType: x, keyType: i, typeName: p0[r(128)], ...y0(t) });
};
class tx extends P0 {
  [s(1441)](x) {
    var t = s;
    const { status: r, ctx: e } = this._processInputParams(x);
    if (e[t(1665)] !== x0[t(321)]) return X(e, { code: B[t(1966)], expected: x0.set, received: e[t(1665)] }), h0;
    const a = this[t(486)];
    a.minSize !== null && e[t(1841)][t(2308)] < a[t(1278)][t(2109)] && (X(e, { code: B.too_small, minimum: a[t(1278)].value, type: "set", inclusive: !0, exact: !1, message: a.minSize[t(1682)] }), r[t(1795)]()), a.maxSize !== null && e[t(1841)].size > a[t(816)][t(2109)] && (X(e, { code: B[t(1089)], maximum: a.maxSize[t(2109)], type: t(321), inclusive: !0, exact: !1, message: a[t(816)].message }), r[t(1795)]());
    const n = this[t(486)][t(293)];
    function o(d) {
      var u = t;
      const f = /* @__PURE__ */ new Set();
      for (const l of d) {
        if (l.status === u(463)) return h0;
        l[u(333)] === u(1795) && r[u(1795)](), f[u(540)](l[u(2109)]);
      }
      return { status: r[u(2109)], value: f };
    }
    const c = [...e[t(1841)][t(2425)]()][t(2159)]((d, u) => n[t(1441)](new he(e, d, e[t(1512)], u)));
    return e.common[t(1501)] ? Promise[t(2337)](c).then((d) => o(d)) : o(c);
  }
  [s(475)](x, t) {
    var r = s;
    return new tx({ ...this[r(486)], minSize: { value: x, message: a0[r(349)](t) } });
  }
  [s(1443)](x, t) {
    var r = s;
    return new tx({ ...this[r(486)], maxSize: { value: x, message: a0.toString(t) } });
  }
  [s(2308)](x, t) {
    var r = s;
    return this[r(475)](x, t)[r(1443)](x, t);
  }
  [s(1019)](x) {
    var t = s;
    return this[t(475)](1, x);
  }
}
tx[s(1661)] = (i, x) => {
  var t = s;
  return new tx({ valueType: i, minSize: null, maxSize: null, typeName: p0[t(2146)], ...y0(x) });
};
class Zt extends P0 {
  get schema() {
    var x = s;
    return this[x(486)].getter();
  }
  [s(1441)](x) {
    var t = s;
    const { ctx: r } = this[t(1587)](x);
    return this._def[t(1681)]()[t(1441)]({ data: r.data, path: r[t(1512)], parent: r });
  }
}
Zt[s(1661)] = (i, x) => {
  var t = s;
  return new Zt({ getter: i, typeName: p0[t(553)], ...y0(x) });
};
class yx extends P0 {
  [s(1441)](x) {
    var t = s;
    if (x.data !== this[t(486)].value) {
      const r = this._getOrReturnCtx(x);
      return X(r, { received: r[t(1841)], code: B.invalid_literal, expected: this._def[t(2109)] }), h0;
    }
    return { status: "valid", value: x[t(1841)] };
  }
  get [s(2109)]() {
    var x = s;
    return this._def[x(2109)];
  }
}
yx.create = (i, x) => {
  var t = s;
  return new yx({ value: i, typeName: p0[t(1356)], ...y0(x) });
};
function Ms(i, x) {
  var t = s;
  return new De({ values: i, typeName: p0[t(2508)], ...y0(x) });
}
class De extends P0 {
  [s(1441)](x) {
    var t = s;
    if (typeof x[t(1841)] !== t(2254)) {
      const r = this[t(1377)](x), e = this[t(486)][t(2425)];
      return X(r, { expected: q0[t(1919)](e), received: r[t(1665)], code: B[t(1966)] }), h0;
    }
    if (!this[t(1835)] && (this[t(1835)] = new Set(this._def[t(2425)])), !this[t(1835)][t(179)](x.data)) {
      const r = this[t(1377)](x), e = this[t(486)][t(2425)];
      return X(r, { received: r.data, code: B[t(653)], options: e }), h0;
    }
    return re(x[t(1841)]);
  }
  get [s(1618)]() {
    var x = s;
    return this[x(486)][x(2425)];
  }
  get [s(1781)]() {
    const x = {};
    for (const t of this._def.values)
      x[t] = t;
    return x;
  }
  get [s(723)]() {
    var x = s;
    const t = {};
    for (const r of this[x(486)].values)
      t[r] = r;
    return t;
  }
  get [s(753)]() {
    var x = s;
    const t = {};
    for (const r of this[x(486)].values)
      t[r] = r;
    return t;
  }
  [s(2420)](x, t = this._def) {
    var r = s;
    return De[r(1661)](x, { ...this[r(486)], ...t });
  }
  [s(2332)](x, t = this._def) {
    var r = s;
    return De[r(1661)](this.options[r(1595)]((e) => !x[r(1502)](e)), { ...this[r(486)], ...t });
  }
}
De[s(1661)] = Ms;
class Kt extends P0 {
  [s(1441)](x) {
    var t = s;
    const r = q0[t(162)](this[t(486)][t(2425)]), e = this[t(1377)](x);
    if (e[t(1665)] !== x0[t(2254)] && e[t(1665)] !== x0[t(2240)]) {
      const a = q0[t(1488)](r);
      return X(e, { expected: q0.joinValues(a), received: e[t(1665)], code: B[t(1966)] }), h0;
    }
    if (!this._cache && (this._cache = new Set(q0[t(162)](this._def[t(2425)]))), !this[t(1835)].has(x[t(1841)])) {
      const a = q0[t(1488)](r);
      return X(e, { received: e.data, code: B[t(653)], options: a }), h0;
    }
    return re(x[t(1841)]);
  }
  get enum() {
    var x = s;
    return this._def[x(2425)];
  }
}
Kt.create = (i, x) => {
  var t = s;
  return new Kt({ values: i, typeName: p0[t(1599)], ...y0(x) });
};
class wx extends P0 {
  [s(1190)]() {
    var x = s;
    return this[x(486)][x(1273)];
  }
  [s(1441)](x) {
    var t = s;
    const { ctx: r } = this[t(1587)](x);
    if (r[t(1665)] !== x0[t(697)] && r[t(1645)][t(1501)] === !1) return X(r, { code: B.invalid_type, expected: x0[t(697)], received: r[t(1665)] }), h0;
    const e = r[t(1665)] === x0[t(697)] ? r[t(1841)] : Promise[t(595)](r[t(1841)]);
    return re(e[t(2367)]((a) => {
      var n = t;
      return this[n(486)][n(1273)][n(1316)](a, { path: r[n(1512)], errorMap: r[n(1645)].contextualErrorMap });
    }));
  }
}
wx[s(1661)] = (i, x) => {
  var t = s;
  return new wx({ type: i, typeName: p0[t(2361)], ...y0(x) });
};
class qe extends P0 {
  [s(176)]() {
    var x = s;
    return this._def[x(2066)];
  }
  sourceType() {
    var x = s;
    return this[x(486)][x(2066)][x(486)].typeName === p0[x(2067)] ? this[x(486)].schema[x(2284)]() : this[x(486)][x(2066)];
  }
  _parse(x) {
    var t = s;
    const { status: r, ctx: e } = this[t(1587)](x), a = this[t(486)][t(1345)] || null, n = { addIssue: (o) => {
      var c = t;
      X(e, o), o[c(530)] ? r[c(2070)]() : r[c(1795)]();
    }, get path() {
      return e.path;
    } };
    if (n.addIssue = n[t(524)][t(1766)](n), a[t(1273)] === t(833)) {
      const o = a[t(707)](e[t(1841)], n);
      if (e[t(1645)][t(1501)]) return Promise[t(595)](o)[t(2367)](async (c) => {
        var d = t;
        if (r.value === d(463)) return h0;
        const u = await this[d(486)].schema[d(357)]({ data: c, path: e[d(1512)], parent: e });
        return u.status === d(463) ? h0 : u.status === d(1795) || r[d(2109)] === "dirty" ? Qe(u[d(2109)]) : u;
      });
      {
        if (r[t(2109)] === t(463)) return h0;
        const c = this[t(486)].schema[t(592)]({ data: o, path: e[t(1512)], parent: e });
        return c[t(333)] === t(463) ? h0 : c.status === t(1795) ? Qe(c.value) : r[t(2109)] === t(1795) ? Qe(c[t(2109)]) : c;
      }
    }
    if (a[t(1273)] === "refinement") {
      const o = (c) => {
        var d = t;
        const u = a.refinement(c, n);
        if (e.common.async) return Promise[d(595)](u);
        if (u instanceof Promise) throw new Error(d(2471));
        return c;
      };
      if (e[t(1645)][t(1501)] === !1) {
        const c = this._def.schema[t(592)]({ data: e[t(1841)], path: e.path, parent: e });
        return c[t(333)] === t(463) ? h0 : (c[t(333)] === t(1795) && r[t(1795)](), o(c[t(2109)]), { status: r[t(2109)], value: c.value });
      } else return this[t(486)][t(2066)]._parseAsync({ data: e[t(1841)], path: e[t(1512)], parent: e })[t(2367)]((c) => {
        var d = t;
        return c[d(333)] === d(463) ? h0 : (c[d(333)] === d(1795) && r[d(1795)](), o(c[d(2109)])[d(2367)](() => {
          var u = d;
          return { status: r[u(2109)], value: c[u(2109)] };
        }));
      });
    }
    if (a[t(1273)] === t(707))
      if (e[t(1645)].async === !1) {
        const o = this[t(486)][t(2066)][t(592)]({ data: e[t(1841)], path: e.path, parent: e });
        if (!Ve(o)) return h0;
        const c = a.transform(o[t(2109)], n);
        if (c instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r[t(2109)], value: c };
      } else return this[t(486)][t(2066)][t(357)]({ data: e[t(1841)], path: e[t(1512)], parent: e })[t(2367)]((o) => {
        var c = t;
        return Ve(o) ? Promise[c(595)](a[c(707)](o[c(2109)], n))[c(2367)]((d) => ({ status: r[c(2109)], value: d })) : h0;
      });
    q0.assertNever(a);
  }
}
qe.create = (i, x, t) => new qe({ schema: i, typeName: p0.ZodEffects, effect: x, ...y0(t) }), qe[s(1263)] = (i, x, t) => {
  var r = s;
  return new qe({ schema: x, effect: { type: r(833), transform: i }, typeName: p0.ZodEffects, ...y0(t) });
};
class we extends P0 {
  [s(1441)](x) {
    var t = s;
    return this._getType(x) === x0[t(1110)] ? re(void 0) : this[t(486)][t(176)][t(1441)](x);
  }
  unwrap() {
    var x = s;
    return this[x(486)][x(176)];
  }
}
we[s(1661)] = (i, x) => {
  var t = s;
  return new we({ innerType: i, typeName: p0[t(1897)], ...y0(x) });
};
class je extends P0 {
  [s(1441)](x) {
    var t = s;
    return this[t(2037)](x) === x0[t(599)] ? re(null) : this._def[t(176)][t(1441)](x);
  }
  unwrap() {
    var x = s;
    return this[x(486)][x(176)];
  }
}
je[s(1661)] = (i, x) => new je({ innerType: i, typeName: p0.ZodNullable, ...y0(x) });
class Sx extends P0 {
  _parse(x) {
    var t = s;
    const { ctx: r } = this[t(1587)](x);
    let e = r.data;
    return r[t(1665)] === x0[t(1110)] && (e = this[t(486)][t(1188)]()), this[t(486)].innerType[t(1441)]({ data: e, path: r[t(1512)], parent: r });
  }
  removeDefault() {
    var x = s;
    return this[x(486)][x(176)];
  }
}
Sx[s(1661)] = (i, x) => {
  var t = s;
  return new Sx({ innerType: i, typeName: p0[t(1338)], defaultValue: typeof x.default === t(2042) ? x[t(1058)] : () => x.default, ...y0(x) });
};
class kx extends P0 {
  [s(1441)](x) {
    var t = s;
    const { ctx: r } = this[t(1587)](x), e = { ...r, common: { ...r.common, issues: [] } }, a = this[t(486)][t(176)]._parse({ data: e[t(1841)], path: e[t(1512)], parent: { ...e } });
    return px(a) ? a[t(2367)]((n) => {
      var o = t;
      return { status: o(1390), value: n[o(333)] === o(1390) ? n[o(2109)] : this[o(486)][o(2477)]({ get error() {
        return new Se(e.common.issues);
      }, input: e.data }) };
    }) : { status: t(1390), value: a[t(333)] === t(1390) ? a[t(2109)] : this[t(486)][t(2477)]({ get error() {
      var n = t;
      return new Se(e[n(1645)][n(1916)]);
    }, input: e[t(1841)] }) };
  }
  [s(683)]() {
    var x = s;
    return this[x(486)][x(176)];
  }
}
kx[s(1661)] = (i, x) => {
  var t = s;
  return new kx({ innerType: i, typeName: p0[t(1171)], catchValue: typeof x[t(206)] === t(2042) ? x[t(206)] : () => x.catch, ...y0(x) });
};
class Nr extends P0 {
  [s(1441)](x) {
    var t = s;
    if (this[t(2037)](x) !== x0[t(2120)]) {
      const e = this[t(1377)](x);
      return X(e, { code: B[t(1966)], expected: x0[t(2120)], received: e[t(1665)] }), h0;
    }
    return { status: t(1390), value: x[t(1841)] };
  }
}
Nr[s(1661)] = (i) => {
  var x = s;
  return new Nr({ typeName: p0[x(483)], ...y0(i) });
};
class Ls extends P0 {
  [s(1441)](x) {
    var t = s;
    const { ctx: r } = this._processInputParams(x), e = r.data;
    return this[t(486)][t(1273)][t(1441)]({ data: e, path: r[t(1512)], parent: r });
  }
  [s(1190)]() {
    var x = s;
    return this[x(486)][x(1273)];
  }
}
class rr extends P0 {
  [s(1441)](x) {
    var t = s;
    const { status: r, ctx: e } = this[t(1587)](x);
    if (e[t(1645)][t(1501)])
      return (async () => {
        var n = t;
        const o = await this[n(486)].in[n(357)]({ data: e[n(1841)], path: e[n(1512)], parent: e });
        return o[n(333)] === "aborted" ? h0 : o[n(333)] === n(1795) ? (r[n(1795)](), Qe(o[n(2109)])) : this[n(486)][n(2457)]._parseAsync({ data: o[n(2109)], path: e[n(1512)], parent: e });
      })();
    {
      const a = this[t(486)].in[t(592)]({ data: e[t(1841)], path: e[t(1512)], parent: e });
      return a[t(333)] === t(463) ? h0 : a.status === t(1795) ? (r[t(1795)](), { status: t(1795), value: a[t(2109)] }) : this[t(486)][t(2457)][t(592)]({ data: a.value, path: e.path, parent: e });
    }
  }
  static [s(1661)](x, t) {
    var r = s;
    return new rr({ in: x, out: t, typeName: p0[r(1336)] });
  }
}
class Ex extends P0 {
  [s(1441)](x) {
    var t = s;
    const r = this._def[t(176)]._parse(x), e = (a) => {
      var n = t;
      return Ve(a) && (a[n(2109)] = Object.freeze(a.value)), a;
    };
    return px(r) ? r[t(2367)]((a) => e(a)) : e(r);
  }
  [s(1190)]() {
    var x = s;
    return this[x(486)][x(176)];
  }
}
Ex[s(1661)] = (i, x) => {
  var t = s;
  return new Ex({ innerType: i, typeName: p0[t(2244)], ...y0(x) });
};
var p0;
(function(i) {
  var x = s;
  i.ZodString = "ZodString", i[x(1396)] = x(1396), i[x(483)] = x(483), i.ZodBigInt = "ZodBigInt", i[x(2387)] = x(2387), i[x(2325)] = x(2325), i[x(1467)] = x(1467), i[x(1791)] = x(1791), i[x(2173)] = "ZodNull", i[x(2412)] = x(2412), i[x(535)] = x(535), i[x(1150)] = x(1150), i.ZodVoid = x(859), i.ZodArray = x(2393), i[x(739)] = "ZodObject", i.ZodUnion = "ZodUnion", i[x(1208)] = x(1208), i[x(943)] = x(943), i[x(202)] = x(202), i[x(1763)] = "ZodRecord", i[x(128)] = x(128), i[x(2146)] = x(2146), i.ZodFunction = x(796), i.ZodLazy = x(553), i[x(1356)] = "ZodLiteral", i[x(2508)] = "ZodEnum", i[x(2067)] = x(2067), i[x(1599)] = x(1599), i[x(1897)] = x(1897), i[x(2502)] = x(2502), i.ZodDefault = x(1338), i[x(1171)] = x(1171), i[x(2361)] = x(2361), i[x(610)] = x(610), i[x(1336)] = x(1336), i[x(2244)] = x(2244);
})(p0 || (p0 = {}));
const S = ye[s(1661)], r0 = We.create, e0 = Lt.create, N0 = Ht[s(1661)], sx = Ut[s(1661)];
Pe[s(1661)];
const zx = Vt[s(1661)], I0 = le[s(1661)], P = B0.create, J0 = vx.create, $s = tr.create;
gx[s(1661)], Ae.create;
const H0 = bx.create, t0 = yx[s(1661)], F0 = De.create;
wx[s(1661)];
const Z = we[s(1661)];
je[s(1661)];
var es, xs;
class ii {
  constructor(x, t) {
    m0(this, xs);
    m0(this, es);
    var r = s;
    this[r(2437)] = x, this.nodeId = t;
  }
  get [(xs = s(2437), es = s(1564), s(2363))]() {
    var x = s;
    const t = this[x(2437)][x(680)](this[x(1564)]);
    if (!t) throw new Error(x(1569) + this[x(1564)]);
    return t;
  }
  get [s(689)]() {
    var x = s;
    const t = this[x(2437)][x(654)]()[x(2362)](this.nodeId);
    if (!t) throw new Error(x(150) + this[x(1564)]);
    return new Proxy({}, { get: (e, a) => {
      var n = x;
      if (typeof a !== n(2254)) return;
      const o = t.actions[a], c = a[n(897)]("__internal_");
      if (!o && !c) throw new Error(n(2504) + a + n(2045) + this.nodeId);
      return async (d, u) => {
        var f = n;
        const l = this.getConnectionInfo();
        if (!l) throw new Error(f(1821) + this[f(1564)]);
        const { transport: v, path: h } = l, m = this.graphInstance.getCurrentNodeId();
        if (!(o != null && o[f(287)])) {
          const w = N0();
          let E;
          if (h[f(1407)] === 2) E = await v[f(1413)]({ method: f(1473), params: { action: a, data: d, sourceNodeId: m } }, w);
          else try {
            E = await v.request({ method: f(1473), params: { action: f(1862), data: { targetNodeId: this.nodeId, targetAction: a, targetData: d, forwardPath: h[f(571)](1) }, sourceNodeId: m } }, w);
          } catch (O) {
            throw console[f(2239)](f(1016) + a + ":", O), console[f(2239)]({ targetNodeId: this[f(1564)], targetAction: a, targetData: d, forwardPath: h[f(571)](1) }), O;
          }
          return E;
        }
        let b;
        return h.length === 2 ? b = v[f(1582)]({ action: a, data: d, sourceNodeId: m }, o[f(1175)], u) : b = v[f(1582)]({ action: f(1862), data: { targetNodeId: this.nodeId, targetAction: a, targetData: d, forwardPath: h[f(571)](1) }, sourceNodeId: m }, o[f(1175)], u), b;
      };
    } });
  }
  [s(1707)]() {
    var x = s;
    return this[x(2437)][x(2188)](this.nodeId);
  }
}
var ts, rs;
class zs {
  constructor(x) {
    m0(this, "graphInstance");
    m0(this, rs);
    m0(this, ts);
    var t = s;
    this[t(2437)] = x, this.actionManager = x[t(1826)], this.broadcastManager = x[t(989)];
  }
  [(rs = s(1826), ts = s(989), s(2354))]({ store: x, storeName: t, onStateUpdate: r, requestInitialState: e }) {
    var a = s;
    this[a(989)].registerHandler(a(1340) + t, (n) => {
      var o = a;
      try {
        n[o(2242)] !== this.graphInstance.getCurrentNodeId() && r(n[o(681)]);
      } catch (c) {
        console[o(2239)](o(2107) + t + ":", c);
      }
    });
  }
  [s(2449)]({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: e }) {
    var a = s;
    const n = this[a(2437)].getCurrentNodeId(), o = async (u, f = !1) => {
      var l = a;
      if (this[l(1768)]()) try {
        await this[l(989)][l(1650)](l(1340) + t, { storeName: t, sourceNodeId: n, stateUpdate: u, isInitialState: f });
      } catch (h) {
        console[l(2239)](l(2418) + t + ":", h);
      }
    }, c = x.subscribe((u) => {
      o(u, !1);
    });
    e(() => {
      o(x.getState(), !0);
    });
    const d = a(1130) + t;
    return this[a(1826)][a(1544)](d, async () => {
      var u = a;
      const f = x[u(328)]();
      return await o(f, !0), { success: !0 };
    }), this.broadcastManager[a(812)](a(1044), async (u) => {
      var f = a;
      try {
        (u[f(521)] === n || u[f(187)] === n) && await o(x.getState(), !0);
      } catch {
      }
    }), () => {
      var f;
      var u = a;
      c(), (f = this.actionManager[u(1242)]) == null || f[u(355)](d);
    };
  }
  [s(1768)]() {
    var t;
    var x = s;
    try {
      const r = this[x(2437)][x(1477)], e = r && r.getConnectionCount() > 0, a = ((t = this[x(989)][x(298)]) == null ? void 0 : t[x(2308)]) > 0;
      return e || a;
    } catch {
      return !!this[x(989)];
    }
  }
  async broadcastCurrentState(x, t) {
    var r = s;
    const e = this[r(2437)].getCurrentNodeId();
    if (this[r(1768)]()) try {
      await this[r(989)][r(1650)](r(1340) + t, { storeName: t, sourceNodeId: e, stateUpdate: x[r(328)](), isInitialState: !0 });
    } catch {
    }
  }
}
function oi({ graphInstance: i, store: x, name: t }) {
  var r = s;
  const e = new zs(i), a = (o) => {
    var c = K;
    const d = x.getState(), u = { ...d, ...o };
    x[c(2507)](u);
  }, n = async () => {
    var o = K;
    const c = o(1130) + t;
    try {
      const d = i.getNode(t);
      d && d.actions && d[o(689)][c] && await d[o(689)][c]();
    } catch (d) {
      console[o(1718)]("Failed to request initial state for " + t + ":", d);
    }
  };
  e[r(2354)]({ store: x, storeName: t, onStateUpdate: a, requestInitialState: n });
}
function ci({ graphInstance: i, store: x, name: t }) {
  var r = s;
  const e = new zs(i), a = async (o) => {
  }, n = (o) => {
  };
  return e[r(2449)]({ store: x, storeName: t, sendStateUpdate: a, onInitialStateRequested: n });
}
var as, ss, ns, is;
class di {
  constructor(x) {
    m0(this, is, /* @__PURE__ */ new Map());
    m0(this, ns, /* @__PURE__ */ new Map());
    m0(this, ss, /* @__PURE__ */ new Set());
    m0(this, as);
    var t = s;
    this[t(840)] = x;
  }
  [(is = s(2229), ns = s(211), ss = s(1430), as = s(840), s(639))](x) {
    return (t) => {
      var r = K;
      if (t && t[r(941)] === this[r(840)]) return;
      const e = this[r(2229)].get(x);
      if (e) {
        const { __origin: a, forwarded: n, ...o } = t || {};
        for (const c of e)
          try {
            c(o);
          } catch (d) {
            console[r(2239)]("Error in broadcast handler for " + x + ":", d);
          }
      }
      !t[r(212)] && this[r(327)](x, t);
    };
  }
  async [s(327)](x, t) {
    var r = s;
    try {
      const e = { ...t, forwarded: !0 }, a = [...Array.from(this.transports[r(2425)]()), ...Array[r(371)](this[r(1430)])], n = a[r(2159)]((o) => {
        var c = r;
        return o[c(2472)]({ method: c(664), params: { messageType: x, message: e } }).catch((d) => {
          var u = c;
          console[u(2239)](u(1318) + x + ":", d);
        });
      });
      await Promise[r(2337)](n);
    } catch (e) {
      console[r(2239)](r(2496), e);
    }
  }
  registerHandler(x, t) {
    var r = s;
    !this.broadcastHandlers[r(179)](x) && this[r(2229)][r(321)](x, /* @__PURE__ */ new Set()), this[r(2229)][r(1170)](x)[r(540)](t);
  }
  [s(484)](x) {
    this.setupGeneralBroadcastHandler(x);
  }
  [s(784)](x) {
    var t = s;
    const r = P({ method: t0(t(664)), params: P({ messageType: S(), message: N0() }) });
    x[t(335)](r, async (e) => {
      var a = t;
      const n = e[a(2012)].messageType;
      this[a(639)](n)(e[a(2012)].message);
    });
  }
  [s(624)](x, t) {
    var r = s;
    this[r(211)][r(321)](x, t), this[r(484)](t);
  }
  [s(411)](x) {
    var t = s;
    this.transports[t(355)](x);
  }
  async [s(1650)](x, t) {
    var r = s;
    const e = [...Array[r(371)](this.transports[r(2425)]()), ...Array[r(371)](this[r(1430)])], a = e[r(2159)]((n) => {
      var o = r;
      return n.notification({ method: o(664), params: { messageType: x, message: t } });
    });
    await Promise[r(2337)](a);
  }
  [s(1678)](x) {
    var t = s;
    this[t(1430)].add(x), this[t(484)](x);
  }
  getHandlerTypes() {
    var x = s;
    return Array[x(371)](this[x(2229)][x(1087)]());
  }
  [s(1547)]() {
    var x = s;
    this[x(2229)].clear(), this.transports.clear(), this[x(1430)][x(1547)]();
  }
}
var os, cs;
class ui {
  constructor(x, t, r) {
    m0(this, "actionHandlers", /* @__PURE__ */ new Map());
    m0(this, cs);
    m0(this, "currentNodeId");
    m0(this, os);
    var e = s;
    this.definition = x, this[e(840)] = t, this[e(1796)] = r;
  }
  [(cs = s(2063), os = s(1796), s(568))](x, t) {
    var r = s;
    const e = this[r(2063)].getNode(this[r(840)]);
    if (!e) throw new Error(r(150) + this.currentNodeId);
    const a = e[r(689)][x];
    if (!a) throw new Error(r(2504) + String(x) + r(2045) + this[r(840)]);
    this[r(2190)](x, t, a), this[r(1242)][r(321)](x, t);
  }
  [s(2190)](x, t, r) {
    var e = s;
    r[e(287)];
  }
  [s(1544)](x, t) {
    var r = s;
    this[r(1242)][r(321)](x, t);
  }
  [s(1678)](x) {
    var t = s;
    for (const [r, e] of this.actionHandlers) {
      const a = this[t(2063)][t(2362)](this[t(840)]), n = a == null ? void 0 : a[t(689)][r];
      if (r[t(897)](t(1468)) ? !1 : (n == null ? void 0 : n[t(287)]) === !0) {
        const d = P({ action: t0(r) });
        x[t(2505)](d, async function* (u, f, l) {
          var v = t;
          const h = u[v(1841)] || u, m = e(h, f, l);
          if (m && typeof m === v(1526) && Symbol[v(2176)] in m) for await (const b of m)
            yield b === void 0 ? {} : b;
          else {
            const b = await m;
            yield b === void 0 ? {} : b;
          }
        });
      }
    }
    this[t(2002)](x), this.registerDirectRequestHandlerGeneric(x);
  }
  [s(2002)](x) {
    var t = s;
    const r = P({ action: t0(t(1862)) }), e = this;
    x[t(2505)](r, async function* (a, n, o) {
      var c = t;
      const d = a[c(1841)] || a, { targetNodeId: u, targetAction: f, targetData: l, forwardPath: v } = d;
      if (!v || v[c(1407)] === 0) throw new Error(c(237));
      const h = v[0], m = v[c(571)](1);
      if (m[c(1407)] === 0 && h === e[c(840)]) {
        const b = e[c(1242)][c(1170)](f);
        if (!b) throw new Error(c(2504) + f + c(452) + e[c(840)]);
        const w = b(l, n, o);
        if (w && typeof w === c(1526) && Symbol[c(2176)] in w) for await (const E of w)
          yield E === void 0 ? {} : E;
        else {
          const E = await w;
          yield E === void 0 ? {} : E;
        }
        return;
      }
      if (h === e[c(840)] && m[c(1407)] > 0) {
        const b = m[0], w = e[c(1796)](b);
        if (w) {
          const E = await w[c(1582)]({ action: c(1862), data: { targetNodeId: u, targetAction: f, targetData: l, forwardPath: m } }, P({}), o);
          for await (const O of E)
            yield O === void 0 ? {} : O;
          return;
        }
        throw new Error("Cannot forward to node " + b + c(1923));
      }
      throw new Error(c(2171) + e[c(840)] + c(1065) + v);
    });
  }
  [s(736)]() {
    var x = s;
    return Array.from(this[x(1242)][x(1087)]());
  }
  [s(1979)](x) {
    var t = s;
    return this.actionHandlers[t(179)](x);
  }
  [s(1140)](x) {
    var t = s;
    return this[t(1242)][t(1170)](x);
  }
  clear() {
    var x = s;
    this[x(1242)][x(1547)]();
  }
  registerDirectRequestHandler(x, t, r) {
  }
  registerDirectRequestHandlerGeneric(x) {
    var t = s;
    const r = P({ method: t0(t(1473)), params: P({ action: S(), data: N0()[t(1597)]() }) }), e = this;
    x[t(112)](r, async (a, n) => {
      var o = t;
      const { action: c, data: d } = a[o(2012)];
      if (c === o(1862)) return await e[o(1621)](d, n);
      const u = e[o(1242)][o(1170)](c);
      if (!u) throw new Error("Action " + c + o(452) + e[o(840)]);
      const f = u(d, n), l = await f;
      return l === void 0 ? {} : l;
    });
  }
  async [s(1621)](x, t) {
    var r = s;
    const { targetNodeId: e, targetAction: a, targetData: n, forwardPath: o } = x;
    if (!o || o[r(1407)] === 0) throw new Error(r(237));
    const c = o[0], d = o[r(571)](1);
    if (d[r(1407)] === 0 && c === this[r(840)]) {
      const u = this[r(1242)].get(a);
      if (!u) throw new Error(r(2504) + a + r(452) + this[r(840)]);
      const f = u(n, t), l = await f;
      return l === void 0 ? {} : l;
    }
    if (c === this[r(840)] && d[r(1407)] > 0) {
      const u = d[0], f = this[r(1796)](u);
      if (f) return await f[r(1413)]({ method: r(1473), params: { action: "__proxy_forward", data: { targetNodeId: e, targetAction: a, targetData: n, forwardPath: d } } }, N0());
      throw new Error(r(916) + u + r(1923));
    }
    throw new Error("Invalid proxy forwarding: current node " + this[r(840)] + r(1065) + o);
  }
}
var ds, us, fs;
class fi {
  constructor(x, t) {
    m0(this, fs);
    m0(this, us);
    m0(this, ds, /* @__PURE__ */ new Set());
    var r = s;
    this[r(2063)] = x, this[r(840)] = t;
  }
  [(fs = s(2063), us = s(840), ds = s(2139), s(1392))](x) {
    var t = s;
    this[t(2139)][t(540)](x);
  }
  [s(2097)](x) {
    var t = s;
    this[t(2139)].delete(x);
  }
  isConnected(x) {
    var t = s;
    return this[t(2139)][t(179)](x);
  }
  [s(662)](x, t) {
    var r = s;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), a = [{ nodeId: x, path: [x] }];
    for (; a.length > 0; ) {
      const { nodeId: n, path: o } = a[r(1550)]();
      if (e[r(179)](n)) continue;
      e.add(n);
      const c = this[r(2063)][r(281)](n);
      for (const d of c) {
        if (d === t) return [...o, d];
        !e[r(179)](d) && a[r(365)]({ nodeId: d, path: [...o, d] });
      }
    }
  }
  [s(550)]() {
    var x = s;
    return Array[x(371)](this[x(2139)]);
  }
  [s(2116)]() {
    var x = s;
    return this.connectedNodes[x(2308)];
  }
  [s(1734)]() {
    var x = s;
    const t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), e = [this[x(840)]];
    for (r[x(540)](this[x(840)]); e[x(1407)] > 0; ) {
      const a = e.shift(), n = this[x(2063)][x(281)](a);
      for (const o of n)
        !r[x(179)](o) && (r[x(540)](o), (this[x(2139)][x(179)](o) || this[x(1700)](o, r)) && (t.add(o), e.push(o)));
    }
    return Array[x(371)](t);
  }
  [s(1700)](x, t) {
    var r = s;
    const e = this[r(662)](this.currentNodeId, x);
    if (!e || e[r(1407)] <= 1) return !1;
    for (let a = 1; a < e[r(1407)] - 1; a++)
      if (!this.connectedNodes[r(179)](e[a])) return !1;
    return !0;
  }
  [s(1547)]() {
    var x = s;
    this[x(2139)].clear();
  }
}
var ls, hs, ps, ms, vs, gs, bs;
class li {
  constructor(x, t) {
    m0(this, bs);
    m0(this, gs);
    m0(this, vs, /* @__PURE__ */ new Map());
    m0(this, "nodeProxies", /* @__PURE__ */ new Map());
    m0(this, ms);
    m0(this, ps);
    m0(this, hs);
    m0(this, ls, /* @__PURE__ */ new Map());
    var r = s;
    this.definition = x, this[r(840)] = t, this[r(157)](), this.broadcastManager = new di(t), this[r(1826)] = new ui(x, t, (e) => this[r(2475)](e)), this.connectionManager = new fi(x, t), this.setupGraphStoreSync();
  }
  [(bs = s(2063), gs = s(840), vs = s(1217), ms = s(989), ps = s(1826), hs = s(1477), ls = s(1581), s(157))]() {
    var x = s;
    for (const t of this.definition[x(1712)]()) {
      const r = this.definition.getNode(t);
      if (r && r[x(2363)]) {
        const e = this[x(1572)](r.store), a = Dn(() => e);
        this.nodeStores.set(t, a);
      }
    }
  }
  [s(1572)](x) {
    var t = s;
    if (!x) return {};
    try {
      return x[t(734)]({});
    } catch {
      return this.manuallyExtractDefaults(x);
    }
  }
  [s(900)](x) {
    var t = s;
    if (!x || !x.def) return {};
    if (x.def.type === t(1058)) {
      const r = x[t(586)].defaultValue;
      return typeof r === t(2042) ? r() : r;
    }
    if (x[t(586)].type === t(1526)) {
      const r = {};
      let e;
      try {
        e = x[t(586)][t(414)];
      } catch {
        return {};
      }
      if (e) for (const [a, n] of Object[t(2177)](e)) {
        const o = this[t(1745)](n);
        o !== void 0 && (r[a] = o);
      }
      return r;
    }
    return {};
  }
  [s(1745)](x) {
    var t = s;
    if (x)
      try {
        return x[t(734)](void 0);
      } catch {
        return this.manuallyExtractDefaults(x);
      }
  }
  async [s(1026)](x, t) {
    var r = s;
    if (!this[r(2063)].hasEdge(this.currentNodeId, x)) throw new Error(r(628) + this[r(840)] + " to " + x);
    if (this[r(1581)][r(179)](x)) throw new Error(r(1964) + x);
    try {
      this.nodeTransports[r(321)](x, t), this.connectionManager.markConnected(x), this[r(905)](x, t), await this[r(2330)](x), await this[r(1891)](x);
    } catch (e) {
      throw this[r(1083)](x), e;
    }
  }
  disconnect(x) {
    var t = s;
    this[t(1083)](x);
  }
  async [s(2330)](x) {
    var t = s;
    await new Promise((r) => setTimeout(r, 100));
    for (const [r, e] of this[t(1217)])
      if (r === this[t(840)]) try {
        await this.broadcastManager.broadcast(t(1340) + r, { storeName: r, sourceNodeId: this[t(840)], stateUpdate: e[t(328)](), isInitialState: !0 });
      } catch {
      }
    try {
      await this.broadcastManager[t(1650)]("__connection_established", { fromNode: this[t(840)], toNode: x });
    } catch {
    }
  }
  async [s(1891)](x) {
    var t = s;
    try {
      const r = this[t(1477)][t(1734)]();
      for (const e of r)
        try {
          const a = "__internal_requestInitialState_" + e, n = this[t(2362)](e);
          if (n && n[t(689)] && n[t(689)][a]) {
            const o = n[t(689)][a]({});
            await Promise.race([o, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (a) {
          console[t(2312)](t(1261) + e + ":", a);
        }
    } catch (r) {
      console[t(2312)](t(1321) + x + ":", r);
    }
  }
  cleanupConnection(x) {
    var t = s;
    const r = this.nodeTransports[t(1170)](x);
    this[t(1581)][t(355)](x), this[t(1477)][t(2097)](x), this[t(989)][t(411)](x), r && r[t(1875)]();
  }
  [s(905)](x, t) {
    var r = s;
    if (!this[r(1217)][r(1170)](this[r(840)])) throw new Error("Store not found for " + this[r(840)]);
    this[r(1826)].mountTo(t), this.broadcastManager[r(624)](x, t);
  }
  [s(1086)]() {
    var x = s;
    for (const [t, r] of this[x(1217)])
      t === this.currentNodeId ? ci({ graphInstance: this, store: r, name: t }) : oi({ graphInstance: this, store: r, name: t });
  }
  [s(2362)](x) {
    var t = s;
    if (!this[t(1039)].has(x)) {
      const r = new ii(this, x);
      this.nodeProxies.set(x, r);
    }
    return this[t(1039)].get(x);
  }
  [s(2475)](x) {
    var t = s;
    return this[t(1581)].get(x);
  }
  [s(2188)](x) {
    var t = s;
    const r = this[t(1581)][t(1170)](x);
    if (r) return { transport: r, path: [this[t(840)], x] };
    const e = this[t(2034)](this.currentNodeId, x);
    if (e && e[t(1407)] > 1) {
      const a = e[1], n = this[t(1581)].get(a);
      if (n) return { transport: n, path: e };
    }
  }
  [s(680)](x) {
    var t = s;
    return this[t(1217)][t(1170)](x);
  }
  get [s(2363)]() {
    var x = s;
    const t = this[x(1217)][x(1170)](this[x(840)]);
    if (!t) throw new Error(x(1045) + this[x(840)]);
    return t;
  }
  get actions() {
    var x = s;
    const t = this[x(2063)][x(2362)](this[x(840)]);
    if (!t) throw new Error(x(1358) + this[x(840)]);
    return new Proxy({}, { get: (e, a) => {
      var n = x;
      if (typeof a !== n(2254)) return;
      const o = t.actions[a];
      if (!o) throw new Error("Action " + a + n(1060) + this[n(840)]);
      return (c, d) => {
        var u = n;
        const f = this[u(1826)][u(1140)](a);
        if (!f) throw new Error(u(727) + a + u(2180) + this.currentNodeId);
        const l = { nodeId: this[u(840)] };
        if (o[u(287)] === !0) {
          const v = f(c, l, d);
          return v && typeof v == "object" && Symbol[u(2176)] in v ? async function* () {
            for await (const h of v)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await v;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          var v = u;
          const h = f(c, l, d);
          if (h && typeof h === v(1526) && Symbol.asyncIterator in h) {
            const m = h[Symbol[v(2176)]](), b = await m[v(2274)]();
            return b[v(2109)] === void 0 ? {} : b[v(2109)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [s(654)]() {
    var x = s;
    return this[x(2063)];
  }
  [s(1285)]() {
    var x = s;
    return this[x(840)];
  }
  getConnectionToNodeInternal(x) {
    var t = s;
    return this[t(2188)](x);
  }
  [s(568)](x, t) {
    var r = s;
    this[r(1826)][r(568)](x, t);
  }
  destroy() {
    var x = s;
    const t = Array[x(371)](this.nodeTransports[x(1087)]());
    for (const r of t)
      this.cleanupConnection(r);
    this[x(989)][x(1547)](), this.actionManager[x(1547)](), this[x(1477)][x(1547)]();
  }
  [s(2034)](x, t) {
    var r = s;
    return this[r(1477)].findPath(x, t);
  }
  [s(662)](x, t) {
    return this.findPathInternal(x, t);
  }
  async [s(1650)](x, t) {
    var r = s;
    const e = { ...t, __origin: this.currentNodeId };
    return this[r(989)][r(1650)](x, e);
  }
  [s(2079)](x, t) {
    var r = s;
    this[r(989)][r(812)](x, t);
  }
}
function hi(i) {
  const x = new An(i);
  return { joinAs(t) {
    var r = K;
    if (!x[r(2362)](t)) throw new Error(r(246) + String(t) + r(944));
    return new li(x, t);
  }, getDefinition() {
    return i;
  }, getNodeIds() {
    var t = K;
    return x[t(1712)]();
  }, getNeighbors(t) {
    var r = K;
    return x[r(281)](t);
  }, hasEdge(t, r) {
    var e = K;
    return x[e(395)](t, r);
  }, hasPath(t, r) {
    return x.hasPath(t, r);
  }, findPath(t, r) {
    var e = K;
    return x[e(662)](t, r);
  } };
}
const qr = { INTERCEPTOR_ERROR: s(959) };
var ys, ws;
class Or extends (ws = Error, ys = s(1913), ws) {
  constructor(t, r, e, a) {
    var n = s;
    super(e);
    m0(this, "type");
    m0(this, ys);
    m0(this, "originalError");
    this[n(1831)] = n(1815), this[n(1273)] = t, this.method = r, this.originalError = a;
  }
}
var Ss, ks, Es, Ps, Is, Rs, Cs, Fs;
class pi {
  constructor(x, t = {}) {
    m0(this, Fs);
    m0(this, "realTransport", null);
    m0(this, Cs);
    m0(this, Rs, /* @__PURE__ */ new Map());
    m0(this, Is, /* @__PURE__ */ new Map());
    m0(this, Ps, /* @__PURE__ */ new Map());
    m0(this, Es, /* @__PURE__ */ new Map());
    m0(this, ks, []);
    m0(this, "closeHandlers", []);
    m0(this, "errorHandlers", []);
    m0(this, Ss, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    var r = s;
    this[r(1447)] = x, this[r(1618)] = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async [(Fs = s(1447), Cs = s(1618), Rs = s(2053), Is = s(1331), Ps = s(2314), Es = s(504), ks = s(1829), Ss = s(1347), s(1026))](x) {
    var t = s;
    this[t(843)] = x, x.onmessage = (r) => {
      var e = t;
      this[e(2048)](r);
    }, x[t(311)] = () => {
      this.closeHandlers.forEach((r) => r());
    }, x[t(987)] = (r) => {
      var e = t;
      this[e(2406)][e(2106)]((a) => a(r));
    }, await this[t(1447)][t(1026)](this);
  }
  async [s(2048)](x) {
    var t = s;
    this[t(2312)](t(1491), t(1029), x);
    try {
      if (this.isRequest(x) && await this[t(898)](x) || this.isNotification(x) && await this[t(526)](x))
        return;
      this[t(1829)][t(2106)]((r) => r(x));
    } catch (r) {
      this[t(1347)][t(2493)]++, this[t(2312)]("error", t(1146), r), this[t(1829)][t(2106)]((e) => e(x));
    }
  }
  async [s(898)](x) {
    var t = s;
    const r = this[t(2053)].get(x[t(1913)]);
    if (!r) return !1;
    try {
      this[t(1347)][t(1939)]++;
      const e = await r(x, {});
      return this[t(843)] && "id" in x && await this.realTransport[t(1658)]({ jsonrpc: t(1168), id: x.id, result: e }), !0;
    } catch (e) {
      return this[t(1347)][t(2493)]++, this[t(843)] && "id" in x && await this[t(843)][t(1658)]({ jsonrpc: "2.0", id: x.id, error: { code: -32603, message: "Request handler failed: " + JSON[t(2099)](x.params) + " " + e.message } }), !0;
    }
  }
  async [s(526)](x) {
    var t = s;
    const r = this[t(1331)][t(1170)](x[t(1913)]);
    if (!r) return !1;
    try {
      return this[t(1347)][t(379)]++, await r(x), !0;
    } catch (e) {
      return this.stats.errors++, this[t(2312)](t(2239), t(1824) + x[t(1913)] + ":", e), !0;
    }
  }
  async [s(1658)](x) {
    var t = s;
    this[t(2312)](t(1491), t(738), x);
    try {
      if (this[t(1629)](x)) {
        const r = await this.executeOutgoingRequestInterceptor(x);
        if (r[t(1283)]) {
          if (r[t(1690)] === null) return;
          r[t(1690)] && (x = { ...r[t(1690)], jsonrpc: t(1168) }, this.stats[t(2081)]++);
        } else if (this[t(1618)][t(1398)]) this.log("warn", "Request interceptor failed for " + x[t(1913)] + ":", r.error);
        else throw r[t(2239)];
      }
      if (this[t(827)](x)) {
        const r = await this[t(1486)](x);
        if (r[t(1283)]) {
          if (r.result === null) return;
          r[t(1690)] && (x = { ...r[t(1690)], jsonrpc: t(1168) }, this[t(1347)][t(1046)]++);
        } else if (this.options[t(1398)]) this[t(2312)](t(1718), "Notification interceptor failed for " + x.method + ":", r.error);
        else throw r[t(2239)];
      }
      this[t(843)] && await this[t(843)][t(1658)](x);
    } catch (r) {
      throw this[t(1347)][t(2493)]++, r;
    }
  }
  async [s(497)]() {
    var x = s;
    this[x(843)] && await this[x(843)][x(497)]();
  }
  async [s(1420)]() {
    var x = s;
    this[x(843)] && await this[x(843)][x(1420)]();
  }
  set [s(1061)](x) {
    var t = s;
    this[t(1829)] = [x];
  }
  set [s(311)](x) {
    var t = s;
    this[t(2381)] = [x];
  }
  set [s(987)](x) {
    var t = s;
    this[t(2406)] = [x];
  }
  async [s(1820)](x) {
    var t = s;
    const r = this[t(2314)][t(1170)](x[t(1913)]);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(2376)](r(x), this[t(1618)][t(2348)]) };
    } catch (e) {
      return this[t(1347)][t(2493)]++, { success: !1, error: new Or(qr[t(893)], x[t(1913)], "Outgoing request interceptor failed: " + e[t(1682)], e) };
    }
  }
  async executeOutgoingNotificationInterceptor(x) {
    var t = s;
    const r = this[t(504)].get(x.method);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(2376)](r(x), this[t(1618)][t(2348)]) };
    } catch (e) {
      return this[t(1347)][t(2493)]++, { success: !1, error: new Or(qr.INTERCEPTOR_ERROR, x[t(1913)], "Outgoing notification interceptor failed: " + e[t(1682)], e) };
    }
  }
  async [s(1413)](x, t) {
    var r = s;
    return await this[r(1447)][r(1413)](x, t, { timeout: 36e5 });
  }
  async [s(2472)](x) {
    var t = s;
    return await this[t(1447)][t(2472)](x);
  }
  setRequestHandler(x, t) {
    var r = s;
    const e = x.shape.method[r(2109)];
    this.requestHandlers[r(321)](e, t);
  }
  [s(335)](x, t) {
    var r = s;
    const e = x[r(414)][r(1913)][r(2109)];
    this.notificationHandlers.set(e, t);
  }
  [s(626)](x, t) {
    var r = s;
    const e = x[r(414)][r(1913)][r(2109)];
    this.outgoingRequestInterceptors[r(321)](e, t);
  }
  [s(430)](x, t) {
    var r = s;
    const e = x[r(414)].method.value;
    this[r(504)][r(321)](e, t);
  }
  [s(508)](x) {
    var t = s;
    this[t(2053)][t(355)](x);
  }
  [s(1845)](x) {
    var t = s;
    this[t(1331)][t(355)](x);
  }
  [s(2298)](x) {
    var t = s;
    this[t(2314)][t(355)](x);
  }
  [s(1834)](x) {
    var t = s;
    this[t(504)][t(355)](x);
  }
  [s(164)](x) {
    return this.requestHandlers.has(x);
  }
  [s(777)](x) {
    return this.notificationHandlers.has(x);
  }
  [s(1113)](x) {
    var t = s;
    return this[t(2314)][t(179)](x);
  }
  hasOutgoingNotificationInterceptor(x) {
    var t = s;
    return this[t(504)].has(x);
  }
  [s(2040)]() {
    var x = s;
    return { ...this[x(1347)] };
  }
  [s(418)]() {
    this.stats = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [s(1101)]() {
    var x = s;
    return this[x(1447)];
  }
  [s(1875)]() {
    var x = s;
    this.requestHandlers.clear(), this[x(1331)][x(1547)](), this[x(2314)][x(1547)](), this[x(504)].clear();
  }
  isRequest(x) {
    var t = s;
    return x[t(438)] === t(1168) && t(1913) in x && "id" in x;
  }
  [s(827)](x) {
    var t = s;
    return x.jsonrpc === t(1168) && "method" in x && !("id" in x);
  }
  async [s(2376)](x, t) {
    var r = s;
    const e = new Promise((a, n) => {
      var o = K;
      setTimeout(() => n(new Error(o(230))), t);
    });
    return await Promise[r(318)]([x, e]);
  }
  [s(2312)](x, t, ...r) {
    var e = s;
    if (!this[e(1618)][e(1491)] && x === "debug") return;
    const a = e(1857);
    switch (x) {
      case "debug":
        console[e(1491)](a, t, ...r);
        break;
      case e(1684):
        console[e(1684)](a, t, ...r);
        break;
      case "warn":
        console.warn(a, t, ...r);
        break;
      case e(2239):
        console.error(a, t, ...r);
        break;
    }
  }
}
P({ method: t0("sdppp/streamResponse"), params: P({ requestId: S(), data: N0(), error: S().nullable(), finished: e0() }) }), P({ method: t0(s(1655)), params: P({ action: S(), data: N0() }) }), P({ method: t0(s(1840)), params: P({ requestId: S() }) });
const mi = P({ method: t0(s(1303)), params: P({ requestId: S(), data: N0(), error: S()[s(1222)](), finished: e0() }) }), vi = P({ method: t0("sdppp/streamRequest"), params: P({ action: S(), data: N0() }) }), gi = P({ method: t0(s(1840)), params: P({ requestId: S() }) });
var Ns;
class bi {
  constructor() {
    m0(this, "queues", /* @__PURE__ */ new Map());
    m0(this, Ns, /* @__PURE__ */ new Map());
  }
  [(Ns = s(2478), s(365))](x) {
    var t = s;
    const { requestId: r } = x[t(2012)], e = this[t(2202)][t(1170)](r) || [], a = this.waiters[t(1170)](r) || [];
    a.length > 0 ? a.shift()(x[t(2012)]) : (e[t(365)](x.params), this[t(2202)].set(r, e));
  }
  async [s(2211)](x) {
    var t = s;
    const r = this.queues[t(1170)](x) || [];
    return r[t(1407)] > 0 ? r[t(1550)]() : new Promise((e) => {
      var a = t;
      const n = this[a(2478)][a(1170)](x) || [];
      n.push(e), this.waiters[a(321)](x, n);
    });
  }
  cleanup(x) {
    var t = s;
    this[t(2202)][t(355)](x), this[t(2478)][t(355)](x);
  }
}
var qs, Os, Ts, As;
class yi extends pi {
  constructor(t, r = {}) {
    super(t, r);
    m0(this, As, /* @__PURE__ */ new Map());
    m0(this, Ts, 1);
    m0(this, Os, /* @__PURE__ */ new Map());
    m0(this, qs, new bi());
    this.setupStreamProtocolHandlers();
  }
  [(As = s(2245), Ts = s(2482), Os = s(1664), qs = s(1538), s(2147))]() {
    var t = s;
    this.setupStreamResponseHandler(), this.setupAbortHandler(), this[t(178)]();
  }
  [s(1111)]() {
    this.setNotificationHandler(mi, async (t) => {
      var r = K;
      this.notificationQueue[r(365)](t);
    });
  }
  [s(1427)]() {
    var t = s;
    this[t(112)](gi, async (r, e) => {
      var a = t;
      const { requestId: n } = r[a(2012)], o = this[a(1664)][a(1170)](n);
      return o && (o[a(2070)](), this.runningRequests[a(355)](n)), { success: !0 };
    });
  }
  [s(178)]() {
    var t = s;
    this[t(112)](vi, async (r, e) => {
      var a = t;
      const n = "req_" + this[a(2482)]++, o = this[a(2245)][a(1170)](r[a(2012)][a(1657)]);
      if (!o) throw new Error(a(1254) + r.params[a(1657)]);
      const c = new AbortController();
      return this.runningRequests.set(n, c), this[a(124)](n, o, r[a(2012)], e, c), { requestId: n };
    });
  }
  async [s(124)](t, r, e, a, n) {
    var o = s;
    try {
      const c = r(e, a, n[o(500)]);
      for await (const d of c) {
        if (n.signal.aborted) break;
        await this[o(2472)]({ method: o(1303), params: { requestId: t, data: d, error: null, finished: !1 } });
      }
      !n[o(500)][o(463)] && await this[o(2472)]({ method: "sdppp/streamResponse", params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n.signal.aborted && await this[o(2472)]({ method: o(1303), params: { requestId: t, data: null, error: c.message, finished: !0 } });
    } finally {
      this.runningRequests.delete(t);
    }
  }
  [s(2505)](t, r) {
    var e = s;
    this[e(2245)][e(321)](t.shape[e(1657)][e(2109)], r);
  }
  async [s(1582)](t, r, e) {
    var a = s;
    this[a(539)](e);
    const n = await this[a(496)](t), o = this[a(919)](n), c = this[a(2458)]();
    return this[a(2394)](o, c, n, e);
  }
  validateStreamRequestorRequest(t) {
    var r = s;
    if (t && t[r(463)]) throw new Error(r(794));
  }
  async [s(496)](t) {
    var r = s;
    return (await this[r(1413)]({ method: r(1655), params: { action: t[r(1657)], data: t.data } }, P({ requestId: S() })))[r(952)];
  }
  [s(919)](t) {
    var r = s;
    return this[r(1538)];
  }
  [s(2458)]() {
    return { finished: !1, error: null };
  }
  createAsyncIterator(t, r, e, a) {
    const n = this;
    return { async *[Symbol.asyncIterator]() {
      var o = K;
      try {
        for (; !r[o(2465)] && !r[o(2239)]; ) {
          if (a && a[o(463)])
            throw await n[o(1413)]({ method: "sdppp/abort", params: { requestId: e } }, P({ success: e0() })), new Error(o(1504));
          const c = await t[o(2211)](e);
          if (c.error)
            throw r.error = c.error, new Error(c.error);
          if (c[o(2465)]) {
            r[o(2465)] = !0;
            break;
          }
          c[o(1841)] !== null && (yield c[o(1841)]);
        }
      } finally {
        t[o(1875)](e);
      }
    } };
  }
  getRunningRequestsCount() {
    var t = s;
    return this[t(1664)][t(2308)];
  }
  async abortRequest(t) {
    var r = s;
    const e = this[r(1664)][r(1170)](t);
    return e ? (e.abort(), this[r(1664)][r(355)](t), !0) : !1;
  }
  [s(1082)]() {
    var t = s;
    for (const [r, e] of this[t(1664)])
      e.abort();
    this[t(1664)][t(1547)]();
  }
  [s(1875)]() {
    var t = s;
    super[t(1875)](), this[t(1082)](), this[t(2245)][t(1547)]();
  }
}
P({ id: S(), method: S(), params: N0()[s(1597)](), traceId: S()[s(1597)]() }), P({ id: S(), result: N0()[s(1597)](), error: P({ code: r0(), message: S(), data: N0()[s(1597)]() }).optional() }), P({ method: S(), params: N0()[s(1597)]() }), P({ method: t0(s(1655)), params: P({ action: S(), data: N0() }) }), P({ method: t0(s(1303)), params: P({ requestId: S(), data: N0()[s(1597)](), error: S()[s(1222)]().optional(), finished: e0()[s(1058)](!1) }) }), P({ method: t0(s(1840)), params: P({ requestId: S() }) }), P({ method: t0("sdppp/broadcast"), params: P({ messageType: S(), message: N0() }) });
function Hs(i) {
  var x = s;
  return i && i[x(2326)] && Object[x(2023)][x(676)][x(2497)](i, x(1058)) ? i.default : i;
}
const Fe = P({ leftDistance: r0(), topDistance: r0(), rightDistance: r0(), bottomDistance: r0(), width: r0(), height: r0() }), Me = { name: S(), uiWeight: r0() }, wi = P({ ...Me, outputType: t0("images"), options: P({ required: e0(), maxCount: r0().optional(), maskMode: e0().optional() }) }), Si = P({ ...Me, outputType: t0(s(829)), options: P({ required: e0() }) }), ki = P({ ...Me, outputType: t0(s(2254)), options: P({ required: e0() }) }), Ei = P({ ...Me, outputType: t0(s(968)), options: P({ required: e0() }) }), Pi = P({ ...Me, outputType: t0(s(2240)), options: P({ required: e0(), min: r0().optional(), max: r0()[s(1597)](), step: r0()[s(1597)](), random: e0()[s(1597)](), slider: e0().optional() }) }), Ii = P({ ...Me, outputType: t0(s(1001)), options: P({ required: e0(), values: I0(S()), labels: I0(S()).optional() }) }), Ri = P({ ...Me, outputType: t0(s(832)), options: P({ required: e0(), values: I0(S()) }) }), Ci = $s(s(627), [wi, Si, ki, Ei, Pi, Ii, Ri]), Fi = P({ id: S(), title: S(), widgets: I0(Ci), uiWeightSum: r0() }), Ni = P({ widgetableID: S(), widgetablePath: S(), nodes: H0(S(), Fi), nodeIndexes: I0(S()), note: S().optional(), options: H0(S(), N0()) }), qi = P({ bannerData: N0()[s(1597)](), refreshable: e0()[s(1058)](!1), backwardable: e0()[s(1058)](!1), loginable: e0().default(!1), runnable: e0()[s(1058)](!1), workBoundaries: H0(r0(), Fe)[s(1058)]({}), workBoundaryMaxSizes: H0(r0(), r0())[s(1058)]({}) }), Oi = P({ uname: S()[s(1058)](""), activeDocumentID: r0()[s(1058)](0), layers: I0(P({ id: r0(), name: S(), identify: S() })).default([]), actions: I0(S())[s(1058)]([]), theme: S()[s(1058)](s(2100)), sdpppX: H0(S(), N0())[s(1058)]({}), locale: F0([s(2033), s(1408)]).default(s(1408)), comfyWebviewConnectStatus: F0([s(646), s(2273), s(1024)])[s(1058)]("disconnected"), comfyWebviewLoadError: S().default(""), comfyWebviewLoading: e0().default(!1), comfyWebviewVersion: S()[s(1058)](""), comfyHTTPCode: r0()[s(1058)](200), comfyURL: S()[s(1058)](""), sdkWebviewFocusing: e0().default(!1), sdkWebviewConnectStatus: F0(["connecting", s(2273), s(1024)])[s(1058)](s(1024)), isLogin: e0()[s(1058)](!1), isGuest: e0()[s(1058)](!1), requestingLogin: e0()[s(1058)](!1), loginMessage: S()[s(1058)](""), token: S()[s(1058)](""), userInfo: H0(S(), N0()).default({}), taskLastRun: r0().default(0), canvasStateID: r0()[s(1597)](), selectionStateID: S()[s(1597)](), canvasThumbnail: S()[s(1058)](""), curlayerThumbnail: S()[s(1058)]("") }), Ti = P({ widgetableStructure: Ni.default({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: H0(S(), I0(N0()))[s(1058)]({}), widgetableErrors: H0(S(), S()).default({}), queueSize: r0()[s(1058)](0), lastError: S()[s(1058)](""), progress: r0().default(0), executingNodeTitle: S()[s(1058)](""), executingNodeID: S()[s(1058)](""), graphProgress: r0()[s(1058)](0), comfyUserToken: S().default(""), comfyOrgLoggedIn: e0().default(!1), comfyOrgAPIKey: S()[s(1058)](""), comfyWSState: F0([s(2273), "reconnecting"])[s(1058)]("connected"), lastRunTime: r0()[s(1058)](0) }), Ai = { backward: { requestSchema: zx(), responseSchema: P({ success: e0() }) }, refresh: { requestSchema: zx(), responseSchema: P({ success: e0() }) }, run: { requestSchema: zx(), responseSchema: P({ success: e0() }) } }, Di = { log: { requestSchema: P({ level: F0([s(2312), s(1684), s(1718), s(2239)]), messages: I0(S()) }), responseSchema: P({}) }, openExternalLink: { requestSchema: P({ url: S() }), responseSchema: P({ error: S()[s(1597)]() }) }, getStorage: { requestSchema: P({ key: S() }), responseSchema: P({ value: S(), error: S()[s(1597)]() }) }, setStorage: { requestSchema: P({ key: S(), value: S() }), responseSchema: P({ error: S().optional() }) }, removeStorage: { requestSchema: P({ key: S() }), responseSchema: P({ error: S()[s(1597)]() }) }, keyboardAction: { requestSchema: P({ keycode: S() }), responseSchema: P({}) }, setComfyWebviewURL: { requestSchema: P({ url: S() }), responseSchema: P({}) }, getImageBase64: { requestSchema: P({ token: S() }), responseSchema: P({ base64: S()[s(1597)](), mimeType: S()[s(1597)](), error: S()[s(1597)]() }) }, uploadComfyImage: { requestSchema: P({ uploadInput: P({ type: t0("buffer").or(t0("token")), tokenOrBuffer: N0(), fileName: S() }), overwrite: e0()[s(1597)]()[s(1058)](!0) }), responseSchema: P({ name: S() }) }, proxiedFetch: { requestSchema: P({ url: S(), method: S()[s(1597)](), headers: H0(S())[s(1597)](), body: N0().optional(), bodyType: F0([s(1987), s(2199), s(2191)])[s(1597)]() }), responseSchema: P({ success: e0(), status: r0()[s(1597)](), statusText: S()[s(1597)](), headers: H0(S())[s(1597)](), data: N0().optional(), error: S()[s(1597)]() }) }, openaiImageEdit: { requestSchema: P({ apiKey: S(), baseURL: S(), imageToken: S(), prompt: S(), model: S() }), responseSchema: P({ success: e0(), imageUrl: S()[s(1597)](), apiTime: r0()[s(1597)](), error: S()[s(1597)]() }) }, geminiImageGenerate: { requestSchema: P({ apiKey: S(), baseURL: S()[s(1597)](), imageInputs: I0(S())[s(1597)](), imageInput: S()[s(1597)](), imageInputType: F0([s(1164), s(712)]), prompt: S() }), responseSchema: P({ success: e0(), imageUrl: S()[s(1597)](), apiTime: r0()[s(1597)](), error: S()[s(1597)]() }) } };
P({ thumbnail_url: S()[s(1597)](), file_token: S()[s(1597)](), source: S().optional(), error: S()[s(1597)]() });
const Tr = P({ boundary: F0([s(1558), s(2510), s(1251)]), content: F0(["canvas", s(2510), s(1251)]).or(S()), imageSize: r0(), imageQuality: r0(), cropBySelection: F0(["no", s(2083), "negative"]) }), Ar = P({ content: F0([s(1558), "curlayer", s(1251)]), reverse: e0(), imageSize: r0() });
P({ selection: F0([s(631), s(248), s(1533), s(1777), s(2355), s(2201), s(687), s(631)]), url: S(), source: S(), cropBySelection: F0(["no", s(2083), "negative"]) });
const ji = { downloadImage: { requestSchema: P({ url: S() }), responseSchema: P({ thumbnail_url: S()[s(1597)](), nativePath: S().optional(), width: r0()[s(1597)](), height: r0()[s(1597)](), error: S()[s(1597)]() }) }, deleteDownloadedImage: { requestSchema: P({ nativePaths: I0(S()) }), responseSchema: P({ error: S()[s(1597)]() }) }, requestAndDoSaveImage: { requestSchema: P({ nativePaths: I0(S()) }), responseSchema: P({ error: S()[s(1597)]() }) } }, Mi = P({ passwordPayload: P({ username: S(), password: S() }).or(P({ email: S(), password: S() })).or(P({ phone: S(), password: S() })).or(P({ identifier: S(), password: S() })) }).or(P({ passcodePayload: P({ phone: S(), code: S() }).or(P({ email: S(), code: S() })) })), Li = P({ passwordPayload: P({ username: S(), password: S() }).or(P({ email: S(), password: S() })).or(P({ phone: S(), password: S() })).or(P({ identifier: S(), password: S() })) }).or(P({ passcodePayload: P({ phone: S(), code: S() }).or(P({ email: S(), code: S() })) })), $i = { register: { requestSchema: Mi, responseSchema: P({}) }, login: { requestSchema: Li, responseSchema: P({}) }, sendPassCode: { requestSchema: P({ phone: S()[s(1597)](), email: S()[s(1597)]() }), responseSchema: P({}) }, logout: { requestSchema: P({}), responseSchema: P({}) }, guestLogin: { requestSchema: P({}), responseSchema: P({}) } }, Hx = P({ taskId: S(), taskName: S(), status: F0([s(1898), s(2024), s(299), "cancelled"]), currentStep: r0()[s(1597)](), totalSteps: r0()[s(1597)](), stepDescription: S()[s(1597)](), progressPercentage: r0().min(0).max(100)[s(1597)](), startTime: S(), endTime: S()[s(1597)](), error: S()[s(1597)](), errorCode: S().optional(), result: N0().optional(), metadata: H0(N0())[s(1597)]() }), Ux = P({ success: e0(), error: S().optional() }), zi = { taskAdd: { requestSchema: Hx, responseSchema: Ux }, taskUpdate: { requestSchema: Hx[s(221)]()[s(129)]({ taskId: !0 }), responseSchema: Ux }, taskRemove: { requestSchema: Hx[s(1152)]({ taskId: !0 }), responseSchema: Ux } }, Hi = { manageGuides: { requestSchema: P({ action: F0(["create", s(1547)]), rect: Fe[s(1597)]() }), responseSchema: P({ success: e0() }) }, openImagesFromFile: { requestSchema: P({ nativePath: S(), boundary: Fe[s(1597)]() }), responseSchema: P({ success: e0(), documentId: r0(), documentName: S(), width: r0(), height: r0() }) }, getBoundary: { requestSchema: P({ type: F0(["curlayer", "selection"]) }), responseSchema: Fe }, getImage: { requestSchema: P({ boundary: J0([F0([s(1558), s(2510), s(1251)]), Fe]), content: J0([F0(["canvas", "curlayer"]), S()]), imageSize: r0(), imageQuality: r0(), cropBySelection: F0(["no", s(2083), "negative"]), SkipNonNormalLayer: e0() }), responseSchema: P({ thumbnail_url: S()[s(1597)](), file_token: S()[s(1597)](), source: S()[s(1597)](), error: S()[s(1597)]() }) }, getMask: { requestSchema: P({ boundary: J0([F0(["canvas", s(2510), "selection"]), Fe]), content: F0([s(1558), s(2510), s(1251)]), reverse: e0(), imageSize: r0() }), responseSchema: P({ thumbnail_url: S()[s(1597)](), file_token: S()[s(1597)](), source: S()[s(1597)](), error: S()[s(1597)]() }) }, importImage: { requestSchema: P({ nativePath: S(), boundary: J0([F0([s(1558), s(2510), s(1251)]), Fe])[s(1597)](), type: F0(["canvas", s(2510), s(614), s(1551)]), sourceWidth: r0()[s(1597)](), sourceHeight: r0().optional() }), responseSchema: P({ success: e0(), layers: I0(P({ identify: S() }))[s(1597)](), message: S()[s(1597)](), error: S()[s(1597)]() }) }, showBoundarySelectionDialog: { requestSchema: P({ additionalData: H0(N0())[s(1597)]() }), responseSchema: P({ boundary: F0(["canvas", "curlayer", s(1251)])[s(1597)](), cancelled: e0()[s(1597)]() }) }, selectCanvasImage: { requestSchema: P({ additionalData: H0(N0())[s(1597)]() }), responseSchema: P({ getImageParams: Tr[s(1597)](), source: S()[s(1597)](), cancelled: e0()[s(1597)]() }) }, selectLayerImage: { requestSchema: P({ additionalData: H0(N0()).optional() }), responseSchema: P({ getImageParams: Tr[s(1597)](), source: S()[s(1597)](), cancelled: e0().optional() }) }, selectLayerMask: { requestSchema: P({ additionalData: H0(N0()).optional() }), responseSchema: P({ getMaskParams: Ar[s(1597)](), source: S().optional(), cancelled: e0().optional() }) }, selectSelectionMask: { requestSchema: P({ additionalData: H0(N0())[s(1597)]() }), responseSchema: P({ getMaskParams: Ar.optional(), source: S()[s(1597)](), cancelled: e0().optional() }) } }, Ui = P({ workflows: I0(S()), error: S()[s(1597)]() }), Vi = P({ success: e0(), nodeErrors: H0(S()).optional(), prompt_ids: I0(S()).optional(), images: I0(P({ url: S(), thumbnail: S() }))[s(1597)]() }), Wi = { setWidgetValue: { requestSchema: P({ values: I0(P({ nodeID: S(), widgetIndex: r0(), value: H0(S(), N0()).or(S()).or(r0()).or(e0()).or(I0(N0())) })) }), responseSchema: P({ success: e0() }) }, openWorkflow: { requestSchema: P({ workflow_path: S(), reset: e0()[s(1058)](!1) }), responseSchema: P({ success: e0() }) }, openWorkflowJSON: { requestSchema: P({ workflow_content: H0(N0()), workflow_path: S() }), responseSchema: P({ success: e0() }) }, listWorkflows: { requestSchema: P({ listMode: S().optional(), sdpppID: S()[s(1597)](), sdpppToken: S()[s(1597)]() }), responseSchema: Ui }, saveWorkflow: { requestSchema: P({ workflow_path: S(), from_sid: S()[s(1597)]() }), responseSchema: P({ success: e0() }) }, run: { requestSchema: P({ size: r0() }), responseSchema: Vi, stream: !0 }, stopAll: { requestSchema: P({}), responseSchema: P({ success: e0() }) } }, Zi = { setNodeTitle: { requestSchema: P({ node_id: S(), title: S() }), responseSchema: P({ success: e0() }) }, reboot: { requestSchema: P({}), responseSchema: P({ success: e0(), error: S()[s(1597)]() }) }, setComfyOrgAPIKey: { requestSchema: P({ api_key: S() }), responseSchema: P({ success: e0() }) }, logout: { requestSchema: P({}), responseSchema: P({ success: e0() }) } }, Ki = hi({ nodes: { sdk: { store: qi, actions: { ...Ai } }, uxp: { store: Oi, actions: { ...ji, ...Di, ...$i, ...zi, ...Hi } }, comfy: { store: Ti, actions: { ...Wi, ...Zi } } }, edges: [[s(2225), s(1736)], ["comfy", s(1736)]] }), C0 = Ki[s(666)]("comfy");
globalThis.mcpMesh = C0, globalThis[s(647)] = globalThis[s(647)] || {};
const _e = globalThis[s(647)], Bi = { "preview.show": s(790), "gateway.select_ai_service": s(1267), "provider.select.title": s(1341), "provider.comfyui.description": s(1981), "provider.replicate.description": "海量模型，稳定服务", "provider.runninghub.description": s(260), "provider.google.description": s(359), "task.waiting_upload": s(694), "task.creating_task": s(783), "task.running_duration": s(2444), "task.cancelled": "任务已取消", "task.cancel_failed": "任务取消失败: {{error}}", "comfy.connect": "连接", "comfy.load_failed": s(1177), "comfy.loading": s(2142), "comfy.channel_connecting": "通道连接中...", "comfy.server_reconnecting": s(2302), "comfy.version_mismatch": "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "comfy.cloud_recommend": "云端推荐：", "comfy.your_workflows": s(1731), "comfy.refresh_workflows": s(1846), "comfy.queue_progress": "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": s(1067), "comfy.stop_auto_run": "停止自动运行", "comfy.start_auto_run": s(1788), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": "正在上传...", "comfy.help_tooltip": s(2094), "boundary.title": s(473), "boundary.tooltip": s(809), "boundary.current_canvas": s(191), "boundary.current_layer": s(954), "boundary.current_selection": s(1793), "boundary.set_as_canvas": "设为画布", "boundary.set_as_layer": "设为当前图层", "boundary.set_as_selection": "设为当前选区", "http.404": s(2228), "http.401": "未授权 (401)", "http.403": s(1705), "http.408": s(846), "http.500": s(1620), "http.501": s(1386), "http.502": s(973), "http.503": "服务不可用 (503)", "http.504": "网关超时 (504)", "http.unknown": s(983), "runninghub.get_apikey": "点此获取RunningHub APIKey", "runninghub.apikey_placeholder": s(1746), "runninghub.app_id": s(2358), "runninghub.webapp_id_placeholder": s(356), "runninghub.open_app": s(1503), "runninghub.execute": "执行", "runninghub.rh_coins": s(456), "runninghub.current_tasks": s(2503), "runninghub.help_tooltip": s(2094), "runninghub.status.waiting": s(2007), "runninghub.status.running": s(222), "runninghub.status.failed": s(2414), "runninghub.status.success": "执行成功", "image.auto_refetch": s(910), "runninghub.error.get_result_failed": s(668), "runninghub.error.task_failed": s(1683), "runninghub.error.task_incomplete": s(1859), "replicate.get_apikey": "如何获取APIKey", "replicate.apikey_placeholder": s(1633), "replicate.execute": "执行", "replicate.model_placeholder": s(1423), "replicate.help_tooltip": "使用教程", "liblib.get_apikey": s(1651), "liblib.execute": "执行", "common.close": "关闭", "common.save_and_run": s(1381), "common.loading": "加载中...", "common.error": "错误", "common.success": "成功", "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": s(2227), webviewInForeground: "插件可能正在拦截 PS 快捷键... ", webviewInForeground2: "点我恢复", "auth.login_success": s(383), "auth.username_label": s(763), "auth.email_label": s(2476), "auth.logout": s(1173), "auth.login_required": s(1077), "image.send.select_position": s(516), "image.send.sending": s(1364), "image.layer.new": s(2013), "image.layer.current": s(954), "image.layer.fit_to_current": s(2119), "image.layer.fit_to_selection": s(1064), "image.layer.fit_to_canvas": s(499), "image.shortcut_auth_required": s(2488), "image.shortcut_focus_required": s(579), "image.get.select_image": s(1320), "image.get.entire_canvas": "整个画布", "image.get.canvas": "画布", "image.get.current_layer": s(954), "image.get.current_layer_bounds": s(1902), "image.get.selection_bounds": s(1284), "image.get.canvas_bounds": s(490), "image.crop_by_selection": s(1990), "image.limit_size": s(1305), "image.crop.none": "不裁剪", "image.crop.inpaint": s(1311), "image.crop.outpaint": "正向裁剪(Outpaint)", "image.send_all": "发送所有", "image.save_all": s(528), "image.save_current": "保存当前", "image.delete_current": s(1035), "image.more_actions": s(1185), "image.jump_to_last": "跳转到最后一个", "image.clear_all": s(220), "image.send_to_ps": "发送到PS", "image.download": "下载", "image.copy": "复制", "image.sending": "正在发送...", "image.sending_all": s(2161), "mask.get.select_mask": "请选择要获取的遮罩", "mask.selection": "选区", "mask.current_layer_bounds": s(857), "mask.all": "全部", "mask.selection_exclude": s(1704), "mask.current_layer_exclude": s(1849), "mask.empty": "空", "document {{0}} not found": "找不到文档: {{0}}", "create document for preview": s(397), "resize document for preview": s(1593), "create document for sent images": s(1967), "show sent images": s(1962), "create layer failed": s(471), "layer not found {{0}}": s(1499), "layer not found: {{0}}": s(1499), "layer {{0}} is not a group": s(713), "no linked layer for {{0}}": "没有链接图层: {{0}}", "no first related layer in {{0}}": s(1100), "merge group failed": "合并组失败", "get content of layer {{0}}": s(257), "get layer info": s(686), "get_layer_info: layer_identify required": s(2015), "get pixel of {{0}} failed": s(2111), "get selection failed": "获取选区失败", "invalid name: {{0}}": s(580), "desire bounds is null": s(2400), "intersect or scaledDesire is null": s(1162), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': s(819), "select layer": s(634), "run Photoshop Action": "sdppp 运行 Photoshop Action", "Action {{0}} not found": s(990), "Action set {{0}} not found": s(618), "set text to layer": s(2255), "ComfyManager not found, cannot reboot": "Comfy Manager未安装，无法重启", "Failed to reboot ComfyUI": "重启ComfyUI失败", "image.upload.from_canvas": "画布", "image.upload.from_curlayer": s(954), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": "上传中，如果图片过大，可能会卡顿...", "image.upload.no_images": "暂无图片", "image.upload.tooltip.more_options_hint": s(2336), "image.upload.tooltip.alt.crop": s(147), "image.upload.tooltip.alt.reverse": s(1598), "image.upload.tooltip.image.canvas": s(606), "image.upload.tooltip.image.curlayer": s(563), "image.upload.tooltip.mask.curlayer": "从 当前图层 获取遮罩", "image.upload.tooltip.mask.selection": s(1419), "image.upload.tooltip.mask.canvas": s(2151), "image.upload.tooltip.autosync.on": "自动同步: 开启", "image.upload.tooltip.autosync.off": "自动同步: 关闭", "image.auto_send_enabled": s(992), "image.auto_send_disabled": s(556), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": s(1606), "source.ps_mask": s(863), "source.canvas": "整个画布", "source.current_layer": "当前图层", "source.selection": "选区", "source.quality_percent": s(2267), "source.crop.positive": s(1327), "source.crop.negative": s(641), "source.reverse": "反转", "send_images.create_document": "创建文档", "send_images.create_document_failed": s(818), "photoshop.no_active_document": s(786), "photoshop.rectangle_coordinates_required": s(2392), "photoshop.create_guide_frame": s(1749), "photoshop.clear_guide_frame": s(2346), "photoshop.invalid_action": "无效操作: {{action}}", "photoshop.file_not_found": "文件未找到: {{path}}", "photoshop.failed_to_open_file_as_document": s(2272), "photoshop.invalid_boundary": s(2090), "photoshop.failed_to_open_image_file": s(1154), "photoshop.open_images_from_file": "从文件打开图像", "photoshop.failed_to_create_document_from_file": s(1842), "google.field.image_input": s(1585), "google.field.prompt": "提示词", "google.field.batch_count": s(2296), "google.field.images_per_batch": s(2068), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": s(2179), "google.apikey_placeholder": s(986), "google.baseurl_placeholder": s(305), "google.get_apikey": s(467), "google.help_tooltip": s(1693), "google.model_name": s(925), "google.loading": "加载中...", "google.generating": s(619), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": "作为智能对象导入", "image.import_as_newdoc": s(1072), "image.boundary": "边界", "image.import_tip": s(1252), "auth.guest_login_success": "", "boundary.canvas": "画布", "boundary.select_boundary": "选择边界", "boundary.selection": "选区", "convert widget {0} failed:": "", "document {0} not found": "", "image.document.new": "", "image.layer.smart_object": "", "layer not found {0}": "", "photoshop.invalid_boundary_type": "", "photoshop.no_active_layer": "" }, Ji = { "preview.show": s(1108), "gateway.select_ai_service": "Please select AI service", "provider.select.title": s(1521), "provider.comfyui.description": s(1401), "provider.replicate.description": "Cloud-based model service platform", "provider.runninghub.description": "Model with affordable price, abundant community applications", "provider.google.description": s(2259), "task.waiting_upload": s(1056), "task.creating_task": s(213), "task.running_duration": s(1431), "task.cancelled": "Task cancelled", "task.cancel_failed": s(958), "comfy.connect": s(1230), "comfy.load_failed": s(1139), "comfy.loading": "ComfyUI loading...", "comfy.channel_connecting": s(1214), "comfy.server_reconnecting": "ComfyUI server reconnecting", "comfy.version_mismatch": s(670), "comfy.cloud_recommend": "Cloud:", "comfy.your_workflows": s(1751), "comfy.refresh_workflows": s(567), "comfy.queue_progress": s(1156), "comfy.save": s(432), "comfy.refresh": "Refresh", "comfy.stop_cancel_all": s(896), "comfy.stop_auto_run": s(1878), "comfy.start_auto_run": s(1757), "comfy.run": "Run", "comfy.back": s(1965), "comfy.uploading": "Uploading...", "comfy.help_tooltip": s(870), "boundary.title": s(352), "boundary.tooltip": s(2435), "boundary.current_canvas": s(1275), "boundary.current_layer": s(2117), "boundary.current_selection": "Current Selection", "boundary.set_as_canvas": s(758), "boundary.set_as_layer": s(1055), "boundary.set_as_selection": "Set as Current Selection", "http.404": "SDPPP may not be installed or version mismatch (404)", "http.401": "Unauthorized (401)", "http.403": "Forbidden (403)", "http.408": s(2432), "http.500": s(721), "http.501": s(651), "http.502": s(185), "http.503": s(2285), "http.504": s(205), "http.unknown": "Unknown error ({{code}})", "runninghub.get_apikey": s(2489), "runninghub.apikey_placeholder": s(597), "runninghub.app_id": s(760), "runninghub.webapp_id_placeholder": "Paste WebApp ID here", "runninghub.open_app": "Press Enter to open app: {{appName}}", "runninghub.execute": s(871), "runninghub.rh_coins": s(2103), "runninghub.current_tasks": "Current Tasks:", "runninghub.help_tooltip": "Tutorial", "runninghub.status.waiting": s(922), "runninghub.status.running": "Running", "runninghub.status.failed": "Failed", "runninghub.status.success": "Success", "image.auto_refetch": "Auto repick from PS", "runninghub.error.get_result_failed": s(930), "runninghub.error.task_failed": s(1799), "runninghub.error.task_incomplete": "Task incomplete, current status: {{status}}", "replicate.get_apikey": "How to get APIKey", "replicate.apikey_placeholder": "Enter your Replicate API Key", "replicate.execute": "Execute", "replicate.model_placeholder": s(2054), "replicate.help_tooltip": s(870), "liblib.get_apikey": "How to get APIKey and API Secret", "liblib.execute": s(871), "common.close": s(1215), "common.save_and_run": s(1764), "common.loading": "Loading...", "common.error": s(118), "common.success": s(2246), "common.cancel": s(2327), "common.confirm": s(1784), "common.options": s(416), "common.options_separator": s(1172), webviewInForeground: s(415), webviewInForeground2: s(502), "auth.login_success": s(1996), "auth.username_label": s(1896), "auth.email_label": "Email: {{email}}", "auth.logout": s(1470), "auth.login_required": "Please login to use the plugin", "image.send.select_position": "Please select the position to send image", "image.send.sending": s(596), "image.layer.new": "New Layer", "image.layer.current": s(2117), "image.layer.fit_to_current": s(714), "image.layer.fit_to_selection": s(2310), "image.layer.fit_to_canvas": s(1487), "image.shortcut_auth_required": s(1719), "image.shortcut_focus_required": s(1839), "image.get.select_image": s(353), "image.get.entire_canvas": s(1275), "image.get.canvas": s(950), "image.get.current_layer": s(2117), "image.get.current_layer_bounds": s(1710), "image.get.selection_bounds": "Selection bounds only", "image.get.canvas_bounds": s(489), "image.crop_by_selection": "Crop by selection", "image.limit_size": s(648), "image.crop.none": s(495), "image.crop.inpaint": "Inpaint (reverse crop)", "image.crop.outpaint": "Outpaint (positive crop)", "image.send_all": s(2351), "image.save_all": s(308), "image.save_current": s(429), "image.delete_current": s(2360), "image.more_actions": s(942), "image.jump_to_last": s(1319), "image.clear_all": s(1002), "image.send_to_ps": s(558), "image.download": s(251), "image.copy": s(132), "image.sending": s(1832), "image.sending_all": s(2323), "mask.get.select_mask": s(386), "mask.selection": "Selection", "mask.current_layer_bounds": s(1814), "mask.all": s(1647), "mask.selection_exclude": s(410), "mask.current_layer_exclude": s(324), "mask.empty": "Empty", "document {{0}} not found": s(1288), "create document for preview": s(261), "resize document for preview": "Resize document for preview", "create document for sent images": s(2102), "show sent images": s(1789), "create layer failed": "Create layer failed", "layer not found {{0}}": "Layer not found {{0}}", "layer not found: {{0}}": s(822), "layer {{0}} is not a group": s(1560), "no linked layer for {{0}}": s(400), "no first related layer in {{0}}": s(1178), "merge group failed": s(2212), "get content of layer {{0}}": s(1523), "get layer info": s(2426), "get_layer_info: layer_identify required": s(1786), "get pixel of {{0}} failed": s(673), "get selection failed": "Get selection failed", "invalid name: {{0}}": s(2416), "desire bounds is null": s(2126), "intersect or scaledDesire is null": s(2222), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': s(692), "select layer": s(1266), "run Photoshop Action": s(113), "Action {{0}} not found": "Action {{0}} not found", "Action set {{0}} not found": s(1074), "set text to layer": "Set text to layer", "ComfyManager not found, cannot reboot": s(340), "Failed to reboot ComfyUI": "Failed to reboot ComfyUI", "image.upload.from_canvas": s(950), "image.upload.from_curlayer": "Current Layer", "image.upload.from_selection": s(1640), "image.upload.from_harddisk": s(1932), "image.upload.clear": s(1380), "image.upload.uploading": s(1797), "image.upload.no_images": s(1635), "image.upload.tooltip.alt.crop": s(1476), "image.upload.tooltip.alt.reverse": "+Alt reversed mask", "image.upload.tooltip.image.canvas": s(1819), "image.upload.tooltip.image.curlayer": "Get image from Current Layer", "image.upload.tooltip.mask.canvas": s(1221), "image.upload.tooltip.mask.curlayer": s(667), "image.upload.tooltip.mask.selection": s(1787), "image.upload.tooltip.autosync.on": "Auto Sync: on", "image.upload.tooltip.autosync.off": s(1490), "image.auto_send_enabled": s(1050), "image.auto_send_disabled": s(2258), "source.source": s(494), "source.content": s(841), "source.boundary": s(1482), "source.mask": s(2167), "source.disk": s(1932), "source.remote": s(1348), "source.unknown": s(183), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": "Canvas", "source.current_layer": "CurLayer", "source.selection": s(1640), "source.quality_percent": s(1233), "source.crop.positive": s(732), "source.crop.negative": s(635), "source.reverse": s(570), "send_images.create_document": s(2168), "send_images.create_document_failed": s(2456), "photoshop.no_active_document": s(316), "photoshop.rectangle_coordinates_required": s(1510), "photoshop.create_guide_frame": "Create guide frame", "photoshop.clear_guide_frame": s(782), "photoshop.invalid_action": s(1893), "photoshop.file_not_found": s(1245), "photoshop.failed_to_open_file_as_document": "Failed to open file as document: {{path}}", "photoshop.invalid_boundary": "Invalid boundary: left must be less than right, top must be less than bottom", "photoshop.failed_to_open_image_file": s(1995), "photoshop.open_images_from_file": s(1537), "photoshop.failed_to_create_document_from_file": s(144), "google.field.image_input": s(1586), "google.field.prompt": s(1785), "google.field.batch_count": s(735), "google.field.images_per_batch": "Images Per Batch", "google.status.success": s(2246), "google.status.failed": "Failed", "google.status.generating": s(2198), "google.apikey_placeholder": s(1619), "google.get_apikey": s(1952), "google.baseurl_placeholder": s(695), "google.help_tooltip": s(1514), "google.model_name": s(1148), "google.loading": s(2338), "google.generating": s(731), "google.generate": "Generate", "image.auto_toggle": s(677), "image.import_as_smartobject": s(2462), "image.import_as_newdoc": s(1976), "image.boundary": s(926), "image.import_tip": s(2115), "auth.guest_login_success": s(534), "boundary.canvas": s(950), "boundary.select_boundary": "Select boundary", "boundary.selection": s(1640), "convert widget {0} failed:": s(377), "document {0} not found": s(1556), "image.document.new": "image.document.new", "image.layer.smart_object": s(703), "layer not found {0}": "layer not found {0}", "photoshop.invalid_boundary_type": s(450), "photoshop.no_active_layer": s(2235) }, v0 = (i) => typeof i === s(2254), Ge = () => {
  var i = s;
  let x, t;
  const r = new Promise((e, a) => {
    x = e, t = a;
  });
  return r.resolve = x, r[i(1954)] = t, r;
}, Dr = (i) => i == null ? "" : "" + i, Gi = (i, x, t) => {
  var r = s;
  i[r(2106)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, Qi = /###/g, jr = (i) => i && i[s(1679)](s(1126)) > -1 ? i[s(139)](Qi, ".") : i, Mr = (i) => !i || v0(i), ex = (i, x, t) => {
  var r = s;
  const e = v0(x) ? x[r(1363)](".") : x;
  let a = 0;
  for (; a < e.length - 1; ) {
    if (Mr(i)) return {};
    const n = jr(e[a]);
    !i[n] && t && (i[n] = new t()), Object[r(2023)][r(676)][r(2497)](i, n) ? i = i[n] : i = {}, ++a;
  }
  return Mr(i) ? {} : { obj: i, k: jr(e[a]) };
}, Lr = (i, x, t) => {
  var r = s;
  const { obj: e, k: a } = ex(i, x, Object);
  if (e !== void 0 || x.length === 1) {
    e[a] = t;
    return;
  }
  let n = x[x[r(1407)] - 1], o = x[r(571)](0, x.length - 1), c = ex(i, o, Object);
  for (; c[r(778)] === void 0 && o[r(1407)]; )
    n = o[o.length - 1] + "." + n, o = o[r(571)](0, o[r(1407)] - 1), c = ex(i, o, Object), c != null && c[r(778)] && typeof c.obj[c.k + "." + n] !== r(1110) && (c.obj = void 0);
  c.obj[c.k + "." + n] = t;
}, Yi = (i, x, t, r) => {
  const { obj: e, k: a } = ex(i, x, Object);
  e[a] = e[a] || [], e[a].push(t);
}, Px = (i, x) => {
  var t = s;
  const { obj: r, k: e } = ex(i, x);
  if (r && Object[t(2023)][t(676)][t(2497)](r, e))
    return r[e];
}, Xi = (i, x, t) => {
  const r = Px(i, t);
  return r !== void 0 ? r : Px(x, t);
}, Us = (i, x, t) => {
  var r = s;
  for (const e in x)
    e !== r(518) && e !== "constructor" && (e in i ? v0(i[e]) || i[e] instanceof String || v0(x[e]) || x[e] instanceof String ? t && (i[e] = x[e]) : Us(i[e], x[e], t) : i[e] = x[e]);
  return i;
}, He = (i) => i[s(139)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, s(1362));
var _i = { "&": s(847), "<": s(1411), ">": "&gt;", '"': s(785), "'": s(708), "/": s(934) };
const eo = (i) => v0(i) ? i.replace(/[&<>"'\/]/g, (x) => _i[x]) : i;
class xo {
  constructor(x) {
    var t = s;
    this[t(402)] = x, this[t(1432)] = /* @__PURE__ */ new Map(), this[t(1936)] = [];
  }
  [s(120)](x) {
    var t = s;
    const r = this.regExpMap[t(1170)](x);
    if (r !== void 0) return r;
    const e = new RegExp(x);
    return this[t(1936)][t(1407)] === this[t(402)] && this[t(1432)][t(355)](this.regExpQueue[t(1550)]()), this[t(1432)][t(321)](x, e), this.regExpQueue.push(x), e;
  }
}
const to = [" ", ",", "?", "!", ";"], ro = new xo(20), ao = (i, x, t) => {
  var r = s;
  x = x || "", t = t || "";
  const e = to.filter((o) => x.indexOf(o) < 0 && t[r(1679)](o) < 0);
  if (e.length === 0) return !0;
  const a = ro[r(120)]("(" + e.map((o) => o === "?" ? "\\?" : o).join("|") + ")");
  let n = !a[r(937)](i);
  if (!n) {
    const o = i.indexOf(t);
    o > 0 && !a[r(937)](i[r(1176)](0, o)) && (n = !0);
  }
  return n;
}, Bt = (i, x, t = ".") => {
  var r = s;
  if (!i) return;
  if (i[x])
    return Object[r(2023)].hasOwnProperty[r(2497)](i, x) ? i[x] : void 0;
  const e = x[r(1363)](t);
  let a = i;
  for (let n = 0; n < e[r(1407)]; ) {
    if (!a || typeof a !== r(1526)) return;
    let o, c = "";
    for (let d = n; d < e.length; ++d)
      if (d !== n && (c += t), c += e[d], o = a[c], o !== void 0) {
        if ([r(2254), r(2240), r(968)][r(1679)](typeof o) > -1 && d < e[r(1407)] - 1) continue;
        n += d - n + 1;
        break;
      }
    a = o;
  }
  return a;
}, rx = (i) => i == null ? void 0 : i.replace("_", "-"), so = { type: "logger", log(i) {
  var x = s;
  this[x(161)]("log", i);
}, warn(i) {
  var x = s;
  this[x(161)](x(1718), i);
}, error(i) {
  var x = s;
  this[x(161)](x(2239), i);
}, output(i, x) {
  var r, e;
  var t = s;
  (e = (r = console == null ? void 0 : console[i]) == null ? void 0 : r[t(1196)]) == null || e.call(r, console, x);
} };
class Ix {
  constructor(x, t = {}) {
    var r = s;
    this[r(1607)](x, t);
  }
  [s(1607)](x, t = {}) {
    var r = s;
    this[r(1274)] = t.prefix || r(372), this.logger = x || so, this.options = t, this[r(1491)] = t.debug;
  }
  [s(2312)](...x) {
    var t = s;
    return this[t(2075)](x, "log", "", !0);
  }
  [s(1718)](...x) {
    var t = s;
    return this.forward(x, t(1718), "", !0);
  }
  [s(2239)](...x) {
    var t = s;
    return this[t(2075)](x, t(2239), "");
  }
  deprecate(...x) {
    var t = s;
    return this.forward(x, t(1718), t(1625), !0);
  }
  [s(2075)](x, t, r, e) {
    var a = s;
    return e && !this[a(1491)] ? null : (v0(x[0]) && (x[0] = "" + r + this[a(1274)] + " " + x[0]), this[a(932)][t](x));
  }
  [s(1661)](x) {
    var t = s;
    return new Ix(this[t(932)], { prefix: this[t(1274)] + ":" + x + ":", ...this.options });
  }
  clone(x) {
    var t = s;
    return x = x || this[t(1618)], x[t(1274)] = x[t(1274)] || this.prefix, new Ix(this[t(932)], x);
  }
}
var fe = new Ix();
class Nx {
  constructor() {
    var x = s;
    this[x(1497)] = {};
  }
  on(x, t) {
    var r = s;
    return x[r(1363)](" ")[r(2106)]((e) => {
      var a = r;
      this[a(1497)][e] || (this[a(1497)][e] = /* @__PURE__ */ new Map());
      const n = this[a(1497)][e][a(1170)](t) || 0;
      this[a(1497)][e][a(321)](t, n + 1);
    }), this;
  }
  [s(2372)](x, t) {
    var r = s;
    if (this[r(1497)][x]) {
      if (!t) {
        delete this.observers[x];
        return;
      }
      this.observers[x][r(355)](t);
    }
  }
  [s(617)](x, ...t) {
    var r = s;
    this.observers[x] && Array.from(this.observers[x][r(2177)]())[r(2106)](([a, n]) => {
      for (let o = 0; o < n; o++)
        a(...t);
    }), this[r(1497)]["*"] && Array[r(371)](this[r(1497)]["*"][r(2177)]())[r(2106)](([a, n]) => {
      var o = r;
      for (let c = 0; c < n; c++)
        a[o(1196)](a, [x, ...t]);
    });
  }
}
class $r extends Nx {
  constructor(x, t = { ns: [s(2357)], defaultNS: s(2357) }) {
    var r = s;
    super(), this.data = x || {}, this.options = t, this.options[r(2446)] === void 0 && (this[r(1618)][r(2446)] = "."), this[r(1618)][r(1481)] === void 0 && (this[r(1618)][r(1481)] = !0);
  }
  [s(660)](x) {
    var t = s;
    this[t(1618)].ns.indexOf(x) < 0 && this[t(1618)].ns[t(365)](x);
  }
  [s(559)](x) {
    var t = s;
    const r = this[t(1618)].ns[t(1679)](x);
    r > -1 && this[t(1618)].ns.splice(r, 1);
  }
  [s(2485)](x, t, r, e = {}) {
    var u, f;
    var a = s;
    const n = e.keySeparator !== void 0 ? e[a(2446)] : this[a(1618)][a(2446)], o = e[a(1481)] !== void 0 ? e[a(1481)] : this[a(1618)][a(1481)];
    let c;
    x.indexOf(".") > -1 ? c = x[a(1363)](".") : (c = [x, t], r && (Array[a(242)](r) ? c.push(...r) : v0(r) && n ? c.push(...r[a(1363)](n)) : c[a(365)](r)));
    const d = Px(this[a(1841)], c);
    return !d && !t && !r && x[a(1679)](".") > -1 && (x = c[0], t = c[1], r = c[a(571)](2)[a(152)](".")), d || !o || !v0(r) ? d : Bt((f = (u = this[a(1841)]) == null ? void 0 : u[x]) == null ? void 0 : f[t], r, n);
  }
  [s(1236)](x, t, r, e, a = { silent: !1 }) {
    var n = s;
    const o = a[n(2446)] !== void 0 ? a.keySeparator : this[n(1618)][n(2446)];
    let c = [x, t];
    r && (c = c[n(2008)](o ? r[n(1363)](o) : r)), x[n(1679)](".") > -1 && (c = x[n(1363)]("."), e = t, t = c[1]), this[n(660)](t), Lr(this.data, c, e), a.silent || this[n(617)](n(1069), x, t, r, e);
  }
  addResources(x, t, r, e = { silent: !1 }) {
    var a = s;
    for (const n in r)
      (v0(r[n]) || Array[a(242)](r[n])) && this.addResource(x, t, n, r[n], { silent: !0 });
    e[a(2353)] || this[a(617)](a(1069), x, t, r);
  }
  [s(1776)](x, t, r, e, a, n = { silent: !1, skipCopy: !1 }) {
    var o = s;
    let c = [x, t];
    x[o(1679)](".") > -1 && (c = x[o(1363)]("."), e = r, r = t, t = c[1]), this[o(660)](t);
    let d = Px(this.data, c) || {};
    n[o(2074)] || (r = JSON[o(734)](JSON[o(2099)](r))), e ? Us(d, r, a) : d = { ...d, ...r }, Lr(this[o(1841)], c, d), n[o(2353)] || this.emit(o(1069), x, t, r);
  }
  removeResourceBundle(x, t) {
    var r = s;
    this[r(1833)](x, t) && delete this[r(1841)][x][t], this.removeNamespaces(t), this[r(617)](r(1328), x, t);
  }
  [s(1833)](x, t) {
    var r = s;
    return this[r(2485)](x, t) !== void 0;
  }
  [s(1315)](x, t) {
    var r = s;
    return t || (t = this[r(1618)].defaultNS), this[r(2485)](x, t);
  }
  [s(929)](x) {
    var t = s;
    return this[t(1841)][x];
  }
  [s(1387)](x) {
    var t = s;
    const r = this[t(929)](x);
    return !!(r && Object.keys(r) || [])[t(1119)]((a) => r[a] && Object[t(1087)](r[a])[t(1407)] > 0);
  }
  [s(1732)]() {
    var x = s;
    return this[x(1841)];
  }
}
var Vs = { processors: {}, addPostProcessor(i) {
  var x = s;
  this[x(1404)][i.name] = i;
}, handle(i, x, t, r, e) {
  var a = s;
  return i[a(2106)]((n) => {
    var c;
    var o = a;
    x = ((c = this[o(1404)][n]) == null ? void 0 : c[o(282)](x, t, r, e)) ?? x;
  }), x;
} };
const zr = {}, Hr = (i) => !v0(i) && typeof i !== s(968) && typeof i !== s(2240);
class Rx extends Nx {
  constructor(x, t = {}) {
    var r = s;
    super(), Gi([r(509), "languageUtils", r(1827), r(978), r(375), r(745), r(1239)], x, this), this.options = t, this.options.keySeparator === void 0 && (this[r(1618)][r(2446)] = "."), this[r(932)] = fe[r(1661)](r(1041));
  }
  [s(856)](x) {
    var t = s;
    x && (this[t(1297)] = x);
  }
  [s(1193)](x, t = { interpolation: {} }) {
    var r = s;
    const e = { ...t };
    if (x == null) return !1;
    const a = this[r(595)](x, e);
    return (a == null ? void 0 : a[r(536)]) !== void 0;
  }
  [s(1977)](x, t) {
    var r = s;
    let e = t[r(2154)] !== void 0 ? t[r(2154)] : this[r(1618)][r(2154)];
    e === void 0 && (e = ":");
    const a = t[r(2446)] !== void 0 ? t[r(2446)] : this[r(1618)][r(2446)];
    let n = t.ns || this[r(1618)][r(767)] || [];
    const o = e && x[r(1679)](e) > -1, c = !this[r(1618)].userDefinedKeySeparator && !t[r(2446)] && !this[r(1618)][r(821)] && !t[r(2154)] && !ao(x, e, a);
    if (o && !c) {
      const d = x[r(877)](this[r(978)][r(584)]);
      if (d && d.length > 0) return { key: x, namespaces: v0(n) ? [n] : n };
      const u = x.split(e);
      (e !== a || e === a && this[r(1618)].ns[r(1679)](u[0]) > -1) && (n = u[r(1550)]()), x = u[r(152)](a);
    }
    return { key: x, namespaces: v0(n) ? [n] : n };
  }
  translate(x, t, r) {
    var e = s;
    let a = typeof t == "object" ? { ...t } : t;
    if (typeof a != "object" && this.options[e(1070)] && (a = this[e(1618)][e(1070)](arguments)), typeof options === e(1526) && (a = { ...a }), a || (a = {}), x == null) return "";
    Array[e(242)](x) || (x = [String(x)]);
    const n = a.returnDetails !== void 0 ? a[e(1021)] : this[e(1618)][e(1021)], o = a[e(2446)] !== void 0 ? a[e(2446)] : this.options[e(2446)], { key: c, namespaces: d } = this[e(1977)](x[x.length - 1], a), u = d[d.length - 1];
    let f = a.nsSeparator !== void 0 ? a[e(2154)] : this.options.nsSeparator;
    f === void 0 && (f = ":");
    const l = a[e(1376)] || this[e(1297)], v = a[e(1453)] || this.options[e(1453)];
    if ((l == null ? void 0 : l.toLowerCase()) === e(163))
      return v ? n ? { res: "" + u + f + c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: u, usedParams: this[e(754)](a) } : "" + u + f + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: u, usedParams: this[e(754)](a) } : c;
    const h = this[e(595)](x, a);
    let m = h == null ? void 0 : h[e(536)];
    const b = (h == null ? void 0 : h[e(1129)]) || c, w = (h == null ? void 0 : h[e(665)]) || c, E = [e(1384), e(826), e(2253)], O = a.joinArrays !== void 0 ? a[e(169)] : this[e(1618)][e(169)], q = !this[e(745)] || this[e(745)].handleAsObject, R = a[e(339)] !== void 0 && !v0(a[e(339)]), k = Rx[e(286)](a), N = R ? this[e(1827)][e(2049)](l, a.count, a) : "", j = a[e(998)] && R ? this[e(1827)][e(2049)](l, a.count, { ordinal: !1 }) : "", D = R && !a[e(998)] && a.count === 0, M = D && a["defaultValue" + this[e(1618)][e(720)] + e(881)] || a[e(1188) + N] || a[e(1188) + j] || a[e(1188)];
    let F = m;
    q && !m && k && (F = M);
    const C = Hr(F), L = Object[e(2023)].toString.apply(F);
    if (q && F && C && E[e(1679)](L) < 0 && !(v0(O) && Array[e(242)](F))) {
      if (!a[e(2125)] && !this[e(1618)].returnObjects) {
        !this[e(1618)][e(701)] && this[e(932)][e(1718)](e(390));
        const H = this[e(1618)][e(701)] ? this[e(1618)][e(701)](b, F, { ...a, ns: d }) : "key '" + c + " (" + this[e(1297)] + e(750);
        return n ? (h[e(536)] = H, h[e(1517)] = this[e(754)](a), h) : H;
      }
      if (o) {
        const H = Array[e(242)](F), V = H ? [] : {}, J = H ? w : b;
        for (const c0 in F)
          if (Object[e(2023)][e(676)][e(2497)](F, c0)) {
            const d0 = "" + J + o + c0;
            k && !m ? V[c0] = this[e(2301)](d0, { ...a, defaultValue: Hr(M) ? M[c0] : void 0, joinArrays: !1, ns: d }) : V[c0] = this[e(2301)](d0, { ...a, joinArrays: !1, ns: d }), V[c0] === d0 && (V[c0] = F[c0]);
          }
        m = V;
      }
    } else if (q && v0(O) && Array.isArray(m))
      m = m.join(O), m && (m = this[e(2150)](m, x, a, r));
    else {
      let H = !1, V = !1;
      !this[e(600)](m) && k && (H = !0, m = M), !this[e(600)](m) && (V = !0, m = c);
      const J = a[e(565)] || this[e(1618)][e(565)], c0 = J && V ? void 0 : m, d0 = k && M !== m && this[e(1618)][e(200)];
      if (V || H || d0) {
        if (this[e(932)].log(d0 ? "updateKey" : e(820), l, u, c, d0 ? M : m), o) {
          const S0 = this[e(595)](c, { ...a, keySeparator: !1 });
          S0 && S0[e(536)] && this[e(932)].warn(e(1669));
        }
        let f0 = [];
        const i0 = this[e(1506)][e(271)](this[e(1618)][e(2001)], a[e(1376)] || this[e(1297)]);
        if (this[e(1618)][e(2256)] === e(1134) && i0 && i0[0]) for (let S0 = 0; S0 < i0.length; S0++)
          f0[e(365)](i0[S0]);
        else this.options.saveMissingTo === e(2337) ? f0 = this.languageUtils[e(2297)](a[e(1376)] || this[e(1297)]) : f0[e(365)](a[e(1376)] || this[e(1297)]);
        const l0 = (S0, b0, M0) => {
          var A;
          var k0 = e;
          const Q0 = k && M0 !== m ? M0 : c0;
          this[k0(1618)][k0(1359)] ? this[k0(1618)].missingKeyHandler(S0, u, b0, Q0, d0, a) : (A = this[k0(375)]) != null && A[k0(1588)] && this[k0(375)][k0(1588)](S0, u, b0, Q0, d0, a), this[k0(617)](k0(820), S0, u, b0, m);
        };
        this.options[e(1588)] && (this[e(1618)][e(1181)] && R ? f0[e(2106)]((S0) => {
          var b0 = e;
          const M0 = this[b0(1827)][b0(751)](S0, a);
          D && a[b0(1188) + this.options[b0(720)] + b0(881)] && M0[b0(1679)](this[b0(1618)].pluralSeparator + b0(881)) < 0 && M0[b0(365)](this[b0(1618)].pluralSeparator + b0(881)), M0[b0(2106)]((k0) => {
            var Q0 = b0;
            l0([S0], c + k0, a[Q0(1188) + k0] || M);
          });
        }) : l0(f0, c, M));
      }
      m = this.extendTranslation(m, x, a, h, r), V && m === c && this.options[e(1627)] && (m = "" + u + f + c), (V || H) && this.options[e(1416)] && (m = this.options[e(1416)](this[e(1618)].appendNamespaceToMissingKey ? "" + u + f + c : c, H ? m : void 0, a));
    }
    return n ? (h[e(536)] = m, h.usedParams = this[e(754)](a), h) : m;
  }
  [s(2150)](x, t, r, e, a) {
    var d, u;
    var n = s;
    if ((d = this[n(745)]) != null && d.parse) x = this[n(745)][n(734)](x, { ...this[n(1618)][n(1350)][n(2322)], ...r }, r.lng || this.language || e.usedLng, e[n(1342)], e.usedKey, { resolved: e });
    else if (!r[n(2217)]) {
      r.interpolation && this[n(978)].init({ ...r, interpolation: { ...this[n(1618)][n(1350)], ...r[n(1350)] } });
      const f = v0(x) && (((u = r == null ? void 0 : r[n(1350)]) == null ? void 0 : u[n(1412)]) !== void 0 ? r[n(1350)][n(1412)] : this.options[n(1350)][n(1412)]);
      let l;
      if (f) {
        const h = x[n(877)](this[n(978)][n(584)]);
        l = h && h[n(1407)];
      }
      let v = r[n(139)] && !v0(r[n(139)]) ? r.replace : r;
      if (this[n(1618)][n(1350)][n(2322)] && (v = { ...this[n(1618)][n(1350)][n(2322)], ...v }), x = this[n(978)][n(1460)](x, v, r.lng || this[n(1297)] || e.usedLng, r), f) {
        const h = x[n(877)](this[n(978)][n(584)]), m = h && h[n(1407)];
        l < m && (r[n(2451)] = !1);
      }
      !r.lng && e && e[n(536)] && (r.lng = this.language || e[n(1656)]), r[n(2451)] !== !1 && (x = this.interpolator[n(2451)](x, (...h) => {
        var m = n;
        return (a == null ? void 0 : a[0]) === h[0] && !r[m(975)] ? (this[m(932)].warn(m(1957) + h[0] + m(921) + t[0]), null) : this.translate(...h, t);
      }, r)), r[n(1350)] && this.interpolator.reset();
    }
    const o = r[n(341)] || this.options[n(341)], c = v0(o) ? [o] : o;
    return x != null && (c != null && c[n(1407)]) && r[n(2249)] !== !1 && (x = Vs[n(1642)](c, x, t, this.options && this[n(1618)][n(1927)] ? { i18nResolved: { ...e, usedParams: this[n(754)](r) }, ...r } : r, this)), x;
  }
  [s(595)](x, t = {}) {
    let r, e, a, n, o;
    return v0(x) && (x = [x]), x.forEach((c) => {
      var d = K;
      if (this[d(600)](r)) return;
      const u = this.extractFromKey(c, t), f = u[d(2397)];
      e = f;
      let l = u.namespaces;
      this[d(1618)][d(325)] && (l = l.concat(this.options[d(325)]));
      const v = t[d(339)] !== void 0 && !v0(t[d(339)]), h = v && !t[d(998)] && t[d(339)] === 0, m = t[d(975)] !== void 0 && (v0(t[d(975)]) || typeof t.context === d(2240)) && t[d(975)] !== "", b = t[d(920)] ? t[d(920)] : this[d(1506)][d(2297)](t.lng || this[d(1297)], t.fallbackLng);
      l[d(2106)]((w) => {
        var O, q;
        var E = d;
        this[E(600)](r) || (o = w, !zr[b[0] + "-" + w] && ((O = this[E(1239)]) != null && O[E(1742)]) && !((q = this.utils) != null && q.hasLoadedNamespace(o)) && (zr[b[0] + "-" + w] = !0, this[E(932)][E(1718)](E(2343) + e + '" for languages "' + b[E(152)](", ") + `" won't get resolved as namespace "` + o + E(1227), E(239))), b[E(2106)]((R) => {
          var D;
          var k = E;
          if (this[k(600)](r)) return;
          n = R;
          const N = [f];
          if ((D = this[k(745)]) != null && D[k(1601)]) this[k(745)][k(1601)](N, f, R, w, t);
          else {
            let M;
            v && (M = this.pluralResolver[k(2049)](R, t.count, t));
            const F = this[k(1618)][k(720)] + k(881), C = this[k(1618)][k(720)] + k(998) + this[k(1618)][k(720)];
            if (v && (N[k(365)](f + M), t[k(998)] && M[k(1679)](C) === 0 && N[k(365)](f + M[k(139)](C, this[k(1618)][k(720)])), h && N[k(365)](f + F)), m) {
              const L = "" + f + this[k(1618)].contextSeparator + t.context;
              N[k(365)](L), v && (N[k(365)](L + M), t[k(998)] && M[k(1679)](C) === 0 && N[k(365)](L + M.replace(C, this[k(1618)][k(720)])), h && N[k(365)](L + F));
            }
          }
          let j;
          for (; j = N[k(2211)](); )
            !this.isValidLookup(r) && (a = j, r = this[k(2485)](R, w, j, t));
        }));
      });
    }), { res: r, usedKey: e, exactUsedKey: a, usedLng: n, usedNS: o };
  }
  [s(600)](x) {
    var t = s;
    return x !== void 0 && !(!this[t(1618)][t(1883)] && x === null) && !(!this.options[t(1127)] && x === "");
  }
  [s(2485)](x, t, r, e = {}) {
    var n;
    var a = s;
    return (n = this[a(745)]) != null && n[a(2485)] ? this.i18nFormat[a(2485)](x, t, r, e) : this[a(509)].getResource(x, t, r, e);
  }
  [s(754)](x = {}) {
    var t = s;
    const r = ["defaultValue", "ordinal", t(975), t(139), t(1376), t(920), t(2001), "ns", t(2446), t(2154), "returnObjects", "returnDetails", t(169), t(341), "interpolation"], e = x[t(139)] && !v0(x[t(139)]);
    let a = e ? x[t(139)] : x;
    if (e && typeof x[t(339)] !== t(1110) && (a[t(339)] = x[t(339)]), this[t(1618)][t(1350)][t(2322)] && (a = { ...this[t(1618)][t(1350)].defaultVariables, ...a }), !e) {
      a = { ...a };
      for (const n of r)
        delete a[n];
    }
    return a;
  }
  static [s(286)](x) {
    var t = s;
    const r = t(1188);
    for (const e in x)
      if (Object[t(2023)].hasOwnProperty[t(2497)](x, e) && r === e[t(1176)](0, r[t(1407)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Ur {
  constructor(x) {
    var t = s;
    this[t(1618)] = x, this[t(1109)] = this[t(1618)][t(1109)] || !1, this[t(932)] = fe[t(1661)](t(1506));
  }
  [s(576)](x) {
    var t = s;
    if (x = rx(x), !x || x.indexOf("-") < 0) return null;
    const r = x[t(1363)]("-");
    return r[t(1407)] === 2 || (r[t(2211)](), r[r[t(1407)] - 1].toLowerCase() === "x") ? null : this[t(2133)](r.join("-"));
  }
  [s(2060)](x) {
    var t = s;
    if (x = rx(x), !x || x[t(1679)]("-") < 0) return x;
    const r = x.split("-");
    return this.formatLanguageCode(r[0]);
  }
  [s(2133)](x) {
    var t = s;
    if (v0(x) && x.indexOf("-") > -1) {
      let r;
      try {
        r = Intl[t(1025)](x)[0];
      } catch {
      }
      return r && this.options.lowerCaseLng && (r = r[t(1418)]()), r || (this[t(1618)][t(1008)] ? x[t(1418)]() : x);
    }
    return this[t(1618)][t(1225)] || this[t(1618)].lowerCaseLng ? x[t(1418)]() : x;
  }
  [s(1231)](x) {
    var t = s;
    return (this.options.load === "languageOnly" || this[t(1618)].nonExplicitSupportedLngs) && (x = this[t(2060)](x)), !this[t(1109)] || !this[t(1109)][t(1407)] || this[t(1109)][t(1679)](x) > -1;
  }
  [s(172)](x) {
    var t = s;
    if (!x) return null;
    let r;
    return x[t(2106)]((e) => {
      var a = t;
      if (r) return;
      const n = this[a(2133)](e);
      (!this[a(1618)][a(1109)] || this.isSupportedCode(n)) && (r = n);
    }), !r && this[t(1618)][t(1109)] && x[t(2106)]((e) => {
      var a = t;
      if (r) return;
      const n = this.getScriptPartFromCode(e);
      if (this[a(1231)](n)) return r = n;
      const o = this[a(2060)](e);
      if (this.isSupportedCode(o)) return r = o;
      r = this.options[a(1109)][a(1119)]((c) => {
        var d = a;
        if (c === o) return c;
        if (!(c[d(1679)]("-") < 0 && o.indexOf("-") < 0) && (c[d(1679)]("-") > 0 && o[d(1679)]("-") < 0 && c[d(1176)](0, c.indexOf("-")) === o || c[d(1679)](o) === 0 && o[d(1407)] > 1))
          return c;
      });
    }), r || (r = this[t(271)](this[t(1618)].fallbackLng)[0]), r;
  }
  [s(271)](x, t) {
    var r = s;
    if (!x) return [];
    if (typeof x === r(2042) && (x = x(t)), v0(x) && (x = [x]), Array.isArray(x)) return x;
    if (!t) return x[r(1058)] || [];
    let e = x[t];
    return e || (e = x[this[r(576)](t)]), e || (e = x[this.formatLanguageCode(t)]), e || (e = x[this[r(2060)](t)]), e || (e = x[r(1058)]), e || [];
  }
  [s(2297)](x, t) {
    var r = s;
    const e = this[r(271)]((t === !1 ? [] : t) || this.options[r(2001)] || [], x), a = [], n = (o) => {
      var c = r;
      o && (this[c(1231)](o) ? a.push(o) : this[c(932)].warn(c(545) + o));
    };
    return v0(x) && (x[r(1679)]("-") > -1 || x[r(1679)]("_") > -1) ? (this[r(1618)].load !== r(2483) && n(this.formatLanguageCode(x)), this[r(1618)][r(204)] !== r(2483) && this[r(1618)][r(204)] !== r(2276) && n(this[r(576)](x)), this.options.load !== r(2276) && n(this[r(2060)](x))) : v0(x) && n(this[r(2133)](x)), e[r(2106)]((o) => {
      var c = r;
      a.indexOf(o) < 0 && n(this[c(2133)](o));
    }), a;
  }
}
const Vr = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Wr = { select: (i) => i === 1 ? s(2324) : "other", resolvedOptions: () => ({ pluralCategories: [s(2324), s(787)] }) };
class no {
  constructor(x, t = {}) {
    var r = s;
    this[r(1506)] = x, this[r(1618)] = t, this[r(932)] = fe[r(1661)]("pluralResolver"), this[r(966)] = {};
  }
  [s(1836)](x, t) {
    var r = s;
    this[r(1562)][x] = t;
  }
  clearCache() {
    var x = s;
    this[x(966)] = {};
  }
  [s(725)](x, t = {}) {
    var r = s;
    const e = rx(x === r(255) ? "en" : x), a = t[r(998)] ? r(998) : r(2062), n = JSON.stringify({ cleanedCode: e, type: a });
    if (n in this[r(966)]) return this[r(966)][n];
    let o;
    try {
      o = new Intl[r(421)](e, { type: a });
    } catch {
      if (!Intl) return this[r(932)].error(r(1337)), Wr;
      if (!x[r(877)](/-|_/)) return Wr;
      const d = this[r(1506)][r(2060)](x);
      o = this[r(725)](d, t);
    }
    return this.pluralRulesCache[n] = o, o;
  }
  needsPlural(x, t = {}) {
    var r = s;
    let e = this[r(725)](x, t);
    return e || (e = this.getRule(r(255), t)), (e == null ? void 0 : e[r(1161)]().pluralCategories[r(1407)]) > 1;
  }
  getPluralFormsOfKey(x, t, r = {}) {
    var e = s;
    return this[e(751)](x, r).map((a) => "" + t + a);
  }
  [s(751)](x, t = {}) {
    var r = s;
    let e = this[r(725)](x, t);
    return e || (e = this[r(725)](r(255), t)), e ? e[r(1161)]().pluralCategories[r(437)]((a, n) => Vr[a] - Vr[n]).map((a) => "" + this.options.prepend + (t[r(998)] ? r(998) + this[r(1618)][r(1201)] : "") + a) : [];
  }
  [s(2049)](x, t, r = {}) {
    var e = s;
    const a = this[e(725)](x, r);
    return a ? "" + this[e(1618)][e(1201)] + (r.ordinal ? e(998) + this[e(1618)][e(1201)] : "") + a.select(t) : (this[e(932)][e(1718)](e(1552) + x), this[e(2049)](e(255), t, r));
  }
}
const Zr = (i, x, t, r = ".", e = !0) => {
  let a = Xi(i, x, t);
  return !a && e && v0(t) && (a = Bt(i, t, r), a === void 0 && (a = Bt(x, t, r))), a;
}, Vx = (i) => i.replace(/\$/g, s(2500));
class io {
  constructor(x = {}) {
    var r;
    var t = s;
    this[t(932)] = fe.create(t(978)), this.options = x, this[t(1102)] = ((r = x == null ? void 0 : x[t(1350)]) == null ? void 0 : r[t(1102)]) || ((e) => e), this[t(1607)](x);
  }
  [s(1607)](x = {}) {
    var t = s;
    x.interpolation || (x[t(1350)] = { escapeValue: !0 });
    const { escape: r, escapeValue: e, useRawValueToEscape: a, prefix: n, prefixEscaped: o, suffix: c, suffixEscaped: d, formatSeparator: u, unescapeSuffix: f, unescapePrefix: l, nestingPrefix: v, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: b, nestingOptionsSeparator: w, maxReplaces: E, alwaysFormat: O } = x[t(1350)];
    this[t(262)] = r !== void 0 ? r : eo, this[t(1823)] = e !== void 0 ? e : !0, this[t(464)] = a !== void 0 ? a : !1, this[t(1274)] = n ? He(n) : o || "{{", this[t(2331)] = c ? He(c) : d || "}}", this[t(2104)] = u || ",", this.unescapePrefix = f ? "" : l || "-", this[t(625)] = this.unescapePrefix ? "" : f || "", this[t(918)] = v ? He(v) : h || He("$t("), this.nestingSuffix = m ? He(m) : b || He(")"), this[t(2319)] = w || ",", this[t(2047)] = E || 1e3, this.alwaysFormat = O !== void 0 ? O : !1, this[t(1982)]();
  }
  [s(1790)]() {
    var x = s;
    this[x(1618)] && this[x(1607)](this.options);
  }
  resetRegExp() {
    var x = s;
    const t = (r, e) => {
      var a = K;
      return (r == null ? void 0 : r[a(1200)]) === e ? (r[a(312)] = 0, r) : new RegExp(e, "g");
    };
    this.regexp = t(this.regexp, this.prefix + x(427) + this[x(2331)]), this[x(799)] = t(this[x(799)], "" + this[x(1274)] + this[x(2384)] + x(427) + this[x(625)] + this[x(2331)]), this.nestingRegexp = t(this.nestingRegexp, this[x(918)] + x(427) + this[x(344)]);
  }
  [s(1460)](x, t, r, e) {
    var h;
    var a = s;
    let n, o, c;
    const d = this.options && this.options[a(1350)] && this[a(1618)][a(1350)][a(2322)] || {}, u = (m) => {
      var b = a;
      if (m[b(1679)](this[b(2104)]) < 0) {
        const q = Zr(t, d, m, this[b(1618)][b(2446)], this[b(1618)][b(1481)]);
        return this[b(2214)] ? this[b(1102)](q, void 0, r, { ...e, ...t, interpolationkey: m }) : q;
      }
      const w = m.split(this.formatSeparator), E = w[b(1550)]().trim(), O = w[b(152)](this[b(2104)])[b(2247)]();
      return this.format(Zr(t, d, E, this[b(1618)].keySeparator, this[b(1618)].ignoreJSONStructure), O, r, { ...e, ...t, interpolationkey: E });
    };
    this[a(1982)]();
    const f = (e == null ? void 0 : e[a(1800)]) || this[a(1618)][a(1800)], l = ((h = e == null ? void 0 : e.interpolation) == null ? void 0 : h[a(1412)]) !== void 0 ? e[a(1350)][a(1412)] : this[a(1618)][a(1350)][a(1412)];
    return [{ regex: this[a(799)], safeValue: (m) => Vx(m) }, { regex: this[a(2383)], safeValue: (m) => this[a(1823)] ? Vx(this[a(262)](m)) : Vx(m) }].forEach((m) => {
      var b = a;
      for (c = 0; n = m.regex[b(2463)](x); ) {
        const w = n[1][b(2247)]();
        if (o = u(w), o === void 0)
          if (typeof f === b(2042)) {
            const O = f(x, n, e);
            o = v0(O) ? O : "";
          } else if (e && Object[b(2023)][b(676)].call(e, w)) o = "";
          else if (l) {
            o = n[0];
            continue;
          } else this[b(932)].warn(b(2243) + w + b(1339) + x), o = "";
        else !v0(o) && !this[b(464)] && (o = Dr(o));
        const E = m[b(1385)](o);
        if (x = x[b(139)](n[0], E), l ? (m[b(1353)][b(312)] += o[b(1407)], m.regex.lastIndex -= n[0][b(1407)]) : m[b(1353)][b(312)] = 0, c++, c >= this.maxReplaces) break;
      }
    }), x;
  }
  nest(x, t, r = {}) {
    var e = s;
    let a, n, o;
    const c = (d, u) => {
      var f = K;
      const l = this[f(2319)];
      if (d[f(1679)](l) < 0) return d;
      const v = d[f(1363)](new RegExp(l + f(1304)));
      let h = "{" + v[1];
      d = v[0], h = this[f(1460)](h, o);
      const m = h[f(877)](/'/g), b = h[f(877)](/"/g);
      (((m == null ? void 0 : m[f(1407)]) ?? 0) % 2 === 0 && !b || b[f(1407)] % 2 !== 0) && (h = h[f(139)](/'/g, '"'));
      try {
        o = JSON[f(734)](h), u && (o = { ...u, ...o });
      } catch (w) {
        return this[f(932)][f(1718)]("failed parsing options string in nesting for key " + d, w), "" + d + l + h;
      }
      return o[f(1188)] && o[f(1188)][f(1679)](this[f(1274)]) > -1 && delete o[f(1188)], d;
    };
    for (; a = this.nestingRegexp[e(2463)](x); ) {
      let d = [];
      o = { ...r }, o = o[e(139)] && !v0(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o[e(1188)];
      let u = !1;
      if (a[0][e(1679)](this[e(2104)]) !== -1 && !/{.*}/.test(a[1])) {
        const f = a[1][e(1363)](this[e(2104)])[e(2159)]((l) => l[e(2247)]());
        a[1] = f[e(1550)](), d = f, u = !0;
      }
      if (n = t(c[e(2497)](this, a[1][e(2247)](), o), o), n && a[0] === x && !v0(n)) return n;
      v0(n) || (n = Dr(n)), !n && (this[e(932)][e(1718)](e(1649) + a[1] + e(2165) + x), n = ""), u && (n = d[e(2071)]((f, l) => this[e(1102)](f, l, r.lng, { ...r, interpolationkey: a[1].trim() }), n[e(2247)]())), x = x[e(139)](a[0], n), this[e(2383)][e(312)] = 0;
    }
    return x;
  }
}
const oo = (i) => {
  var x = s;
  let t = i.toLowerCase()[x(2247)]();
  const r = {};
  if (i[x(1679)]("(") > -1) {
    const e = i[x(1363)]("(");
    t = e[0][x(1418)]().trim();
    const a = e[1][x(1176)](0, e[1][x(1407)] - 1);
    t === x(851) && a[x(1679)](":") < 0 ? r[x(851)] || (r.currency = a[x(2247)]()) : t === x(1895) && a.indexOf(":") < 0 ? r[x(126)] || (r.range = a[x(2247)]()) : a[x(1363)](";")[x(2106)]((o) => {
      var c = x;
      if (o) {
        const [d, ...u] = o[c(1363)](":"), f = u.join(":").trim()[c(139)](/^'+|'+$/g, ""), l = d[c(2247)]();
        r[l] || (r[l] = f), f === c(434) && (r[l] = !1), f === c(2473) && (r[l] = !0), isNaN(f) || (r[l] = parseInt(f, 10));
      }
    });
  }
  return { formatName: t, formatOptions: r };
}, Kr = (i) => {
  const x = {};
  return (t, r, e) => {
    var a = K;
    let n = e;
    e && e.interpolationkey && e[a(682)] && e[a(682)][e.interpolationkey] && e[e[a(1374)]] && (n = { ...n, [e[a(1374)]]: void 0 });
    const o = r + JSON[a(2099)](n);
    let c = x[o];
    return !c && (c = i(rx(r), e), x[o] = c), c(t);
  };
}, co = (i) => (x, t, r) => i(rx(t), r)(x);
class uo {
  constructor(x = {}) {
    var t = s;
    this[t(932)] = fe.create(t(2401)), this[t(1618)] = x, this[t(1607)](x);
  }
  [s(1607)](x, t = { interpolation: {} }) {
    var r = s;
    this.formatSeparator = t[r(1350)][r(2104)] || ",";
    const e = t.cacheInBuiltFormats ? Kr : co;
    this[r(2169)] = { number: e((a, n) => {
      var o = r;
      const c = new Intl[o(974)](a, { ...n });
      return (d) => c[o(1102)](d);
    }), currency: e((a, n) => {
      var o = r;
      const c = new Intl.NumberFormat(a, { ...n, style: o(851) });
      return (d) => c[o(1102)](d);
    }), datetime: e((a, n) => {
      var o = r;
      const c = new Intl.DateTimeFormat(a, { ...n });
      return (d) => c[o(1102)](d);
    }), relativetime: e((a, n) => {
      var o = r;
      const c = new Intl[o(1907)](a, { ...n });
      return (d) => c[o(1102)](d, n.range || o(1548));
    }), list: e((a, n) => {
      var o = r;
      const c = new Intl[o(406)](a, { ...n });
      return (d) => c[o(1102)](d);
    }) };
  }
  [s(540)](x, t) {
    var r = s;
    this[r(2169)][x[r(1418)]()[r(2247)]()] = t;
  }
  [s(807)](x, t) {
    var r = s;
    this[r(2169)][x[r(1418)]().trim()] = Kr(t);
  }
  [s(1102)](x, t, r, e = {}) {
    var a = s;
    const n = t[a(1363)](this[a(2104)]);
    if (n[a(1407)] > 1 && n[0].indexOf("(") > 1 && n[0][a(1679)](")") < 0 && n.find((c) => c[a(1679)](")") > -1)) {
      const c = n[a(225)]((d) => d.indexOf(")") > -1);
      n[0] = [n[0], ...n[a(890)](1, c)][a(152)](this[a(2104)]);
    }
    return n[a(2071)]((c, d) => {
      var v;
      var u = a;
      const { formatName: f, formatOptions: l } = oo(d);
      if (this.formats[f]) {
        let h = c;
        try {
          const m = ((v = e == null ? void 0 : e[u(682)]) == null ? void 0 : v[e.interpolationkey]) || {}, b = m[u(1612)] || m.lng || e.locale || e[u(1376)] || r;
          h = this[u(2169)][f](c, b, { ...l, ...e, ...m });
        } catch (m) {
          this.logger[u(1718)](m);
        }
        return h;
      } else this[u(932)][u(1718)]("there was no format function for " + f);
      return c;
    }, x);
  }
}
const fo = (i, x) => {
  var t = s;
  i[t(1608)][x] !== void 0 && (delete i.pending[x], i[t(547)]--);
};
class lo extends Nx {
  constructor(x, t, r, e = {}) {
    var n, o;
    var a = s;
    super(), this[a(2270)] = x, this.store = t, this[a(1941)] = r, this[a(1506)] = r.languageUtils, this[a(1618)] = e, this[a(932)] = fe.create("backendConnector"), this[a(1436)] = [], this[a(447)] = e[a(447)] || 10, this.readingCalls = 0, this[a(412)] = e[a(412)] >= 0 ? e[a(412)] : 5, this[a(2143)] = e[a(2143)] >= 1 ? e[a(2143)] : 350, this[a(2293)] = {}, this[a(1628)] = [], (o = (n = this[a(2270)]) == null ? void 0 : n[a(1607)]) == null || o.call(n, r, e[a(2270)], e);
  }
  [s(1440)](x, t, r, e) {
    var a = s;
    const n = {}, o = {}, c = {}, d = {};
    return x.forEach((u) => {
      var f = K;
      let l = !0;
      t[f(2106)]((v) => {
        var h = f;
        const m = u + "|" + v;
        !r[h(2315)] && this.store[h(1833)](u, v) ? this.state[m] = 2 : this[h(2293)][m] < 0 || (this.state[m] === 1 ? o[m] === void 0 && (o[m] = !0) : (this[h(2293)][m] = 1, l = !1, o[m] === void 0 && (o[m] = !0), n[m] === void 0 && (n[m] = !0), d[v] === void 0 && (d[v] = !0)));
      }), l || (c[u] = !0);
    }), (Object[a(1087)](n)[a(1407)] || Object[a(1087)](o)[a(1407)]) && this.queue[a(365)]({ pending: o, pendingCount: Object[a(1087)](o)[a(1407)], loaded: {}, errors: [], callback: e }), { toLoad: Object[a(1087)](n), pending: Object.keys(o), toLoadLanguages: Object.keys(c), toLoadNamespaces: Object[a(1087)](d) };
  }
  loaded(x, t, r) {
    var e = s;
    const a = x.split("|"), n = a[0], o = a[1];
    t && this.emit(e(2352), n, o, t), !t && r && this[e(2363)][e(1776)](n, o, r, void 0, void 0, { skipCopy: !0 }), this.state[x] = t ? -1 : 2, t && r && (this[e(2293)][x] = 0);
    const c = {};
    this.queue[e(2106)]((d) => {
      var u = e;
      Yi(d.loaded, [n], o), fo(d, x), t && d[u(2493)].push(t), d[u(547)] === 0 && !d[u(1804)] && (Object[u(1087)](d[u(1535)]).forEach((f) => {
        var l = u;
        c[f] || (c[f] = {});
        const v = d.loaded[f];
        v[l(1407)] && v[l(2106)]((h) => {
          c[f][h] === void 0 && (c[f][h] = !0);
        });
      }), d.done = !0, d[u(2493)][u(1407)] ? d[u(1197)](d[u(2493)]) : d[u(1197)]());
    }), this[e(617)](e(1535), c), this[e(1628)] = this.queue[e(1595)]((d) => !d[e(1804)]);
  }
  [s(443)](x, t, r, e = 0, a = this[s(2143)], n) {
    var o = s;
    if (!x[o(1407)]) return n(null, {});
    if (this[o(1329)] >= this[o(447)]) {
      this[o(1436)].push({ lng: x, ns: t, fcName: r, tried: e, wait: a, callback: n });
      return;
    }
    this[o(1329)]++;
    const c = (u, f) => {
      var l = o;
      if (this[l(1329)]--, this[l(1436)][l(1407)] > 0) {
        const v = this[l(1436)][l(1550)]();
        this[l(443)](v[l(1376)], v.ns, v[l(1843)], v.tried, v[l(2156)], v.callback);
      }
      if (u && f && e < this[l(412)]) {
        setTimeout(() => {
          var v = l;
          this[v(443)][v(2497)](this, x, t, r, e + 1, a * 2, n);
        }, a);
        return;
      }
      n(u, f);
    }, d = this.backend[r].bind(this[o(2270)]);
    if (d[o(1407)] === 2) {
      try {
        const u = d(x, t);
        u && typeof u[o(2367)] === o(2042) ? u[o(2367)]((f) => c(null, f))[o(206)](c) : c(null, u);
      } catch (u) {
        c(u);
      }
      return;
    }
    return d(x, t, c);
  }
  [s(1153)](x, t, r = {}, e) {
    var a = s;
    if (!this[a(2270)]) return this[a(932)].warn(a(629)), e && e();
    v0(x) && (x = this[a(1506)][a(2297)](x)), v0(t) && (t = [t]);
    const n = this[a(1440)](x, t, r, e);
    if (!n[a(1974)].length)
      return n[a(1608)][a(1407)] || e(), null;
    n[a(1974)][a(2106)]((o) => {
      this.loadOne(o);
    });
  }
  [s(204)](x, t, r) {
    var e = s;
    this[e(1153)](x, t, {}, r);
  }
  reload(x, t, r) {
    var e = s;
    this[e(1153)](x, t, { reload: !0 }, r);
  }
  loadOne(x, t = "") {
    var r = s;
    const e = x[r(1363)]("|"), a = e[0], n = e[1];
    this[r(443)](a, n, r(443), void 0, void 0, (o, c) => {
      var d = r;
      o && this[d(932)][d(1718)](t + d(824) + n + d(1400) + a + " failed", o), !o && c && this.logger.log(t + d(1389) + n + d(1400) + a, c), this[d(1535)](x, o, c);
    });
  }
  [s(1588)](x, t, r, e, a, n = {}, o = () => {
  }) {
    var d, u, f, l, v;
    var c = s;
    if ((u = (d = this[c(1941)]) == null ? void 0 : d[c(1239)]) != null && u[c(1742)] && !((l = (f = this[c(1941)]) == null ? void 0 : f[c(1239)]) != null && l[c(1742)](t))) {
      this.logger[c(1718)](c(2208) + r + c(880) + t + '" was not yet loaded', c(239));
      return;
    }
    if (!(r == null || r === "")) {
      if ((v = this.backend) != null && v.create) {
        const h = { ...n, isUpdate: a }, m = this.backend[c(1661)].bind(this.backend);
        if (m[c(1407)] < 6) try {
          let b;
          m[c(1407)] === 5 ? b = m(x, t, r, e, h) : b = m(x, t, r, e), b && typeof b[c(2367)] == "function" ? b[c(2367)]((w) => o(null, w))[c(206)](o) : o(null, b);
        } catch (b) {
          o(b);
        }
        else m(x, t, r, e, o, h);
      }
      !x || !x[0] || this.store.addResource(x[0], t, r, e);
    }
  }
}
const Br = () => ({ debug: !1, initAsync: !0, ns: [s(2357)], defaultNS: [s(2357)], fallbackLng: [s(255)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: s(2337), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: "fallback", saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (i) => {
  var x = s;
  let t = {};
  if (typeof i[1] === x(1526) && (t = i[1]), v0(i[1]) && (t[x(1188)] = i[1]), v0(i[2]) && (t[x(2341)] = i[2]), typeof i[2] === x(1526) || typeof i[3] === x(1526)) {
    const r = i[3] || i[2];
    Object[x(1087)](r)[x(2106)]((e) => {
      t[e] = r[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (i) => i, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: s(1469), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), Jr = (i) => {
  var t, r;
  var x = s;
  return v0(i.ns) && (i.ns = [i.ns]), v0(i[x(2001)]) && (i[x(2001)] = [i.fallbackLng]), v0(i[x(325)]) && (i[x(325)] = [i[x(325)]]), ((r = (t = i[x(1109)]) == null ? void 0 : t[x(1679)]) == null ? void 0 : r.call(t, x(163))) < 0 && (i[x(1109)] = i[x(1109)].concat(["cimode"])), typeof i[x(1940)] === x(968) && (i.initAsync = i.initImmediate), i;
}, ux = () => {
}, ho = (i) => {
  var x = s;
  Object[x(1289)](Object[x(1322)](i))[x(2106)]((r) => {
    var e = x;
    typeof i[r] == "function" && (i[r] = i[r][e(1766)](i));
  });
};
class ax extends Nx {
  constructor(x = {}, t) {
    var r = s;
    if (super(), this[r(1618)] = Jr(x), this[r(1941)] = {}, this[r(932)] = fe, this[r(2260)] = { external: [] }, ho(this), t && !this.isInitialized && !x[r(1872)]) {
      if (!this.options[r(1228)]) return this.init(x, t), this;
      setTimeout(() => {
        var e = r;
        this[e(1607)](x, t);
      }, 0);
    }
  }
  [s(1607)](x = {}, t) {
    var r = s;
    this[r(1023)] = !0, typeof x === r(2042) && (t = x, x = {}), x[r(767)] == null && x.ns && (v0(x.ns) ? x[r(767)] = x.ns : x.ns.indexOf("translation") < 0 && (x[r(767)] = x.ns[0]));
    const e = Br();
    this.options = { ...e, ...this[r(1618)], ...Jr(x) }, this[r(1618)].interpolation = { ...e[r(1350)], ...this[r(1618)].interpolation }, x.keySeparator !== void 0 && (this[r(1618)].userDefinedKeySeparator = x[r(2446)]), x[r(2154)] !== void 0 && (this[r(1618)].userDefinedNsSeparator = x.nsSeparator);
    const a = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this[r(1618)].isClone) {
      this[r(2260)][r(932)] ? fe[r(1607)](a(this[r(2260)][r(932)]), this[r(1618)]) : fe[r(1607)](null, this[r(1618)]);
      let u;
      this[r(2260)].formatter ? u = this[r(2260)][r(2401)] : u = uo;
      const f = new Ur(this[r(1618)]);
      this[r(2363)] = new $r(this.options[r(2391)], this[r(1618)]);
      const l = this[r(1941)];
      l.logger = fe, l.resourceStore = this[r(2363)], l[r(1506)] = f, l[r(1827)] = new no(f, { prepend: this.options[r(720)], simplifyPluralSuffix: this[r(1618)][r(2050)] }), u && (!this[r(1618)][r(1350)][r(1102)] || this[r(1618)][r(1350)].format === e[r(1350)][r(1102)]) && (l[r(2401)] = a(u), l[r(2401)][r(1607)](l, this[r(1618)]), this.options.interpolation[r(1102)] = l[r(2401)][r(1102)].bind(l[r(2401)])), l[r(978)] = new io(this[r(1618)]), l[r(1239)] = { hasLoadedNamespace: this[r(1742)][r(1766)](this) }, l[r(375)] = new lo(a(this[r(2260)].backend), l[r(509)], l, this[r(1618)]), l[r(375)].on("*", (v, ...h) => {
        this.emit(v, ...h);
      }), this[r(2260)][r(1747)] && (l[r(1747)] = a(this[r(2260)][r(1747)]), l[r(1747)][r(1607)] && l[r(1747)][r(1607)](l, this[r(1618)][r(1220)], this[r(1618)])), this[r(2260)][r(745)] && (l.i18nFormat = a(this[r(2260)].i18nFormat), l[r(745)][r(1607)] && l[r(745)].init(this)), this.translator = new Rx(this[r(1941)], this.options), this.translator.on("*", (v, ...h) => {
        var m = r;
        this[m(617)](v, ...h);
      }), this[r(2260)][r(1723)].forEach((v) => {
        var h = r;
        v.init && v[h(1607)](this);
      });
    }
    if (this[r(1102)] = this[r(1618)].interpolation.format, t || (t = ux), this[r(1618)].fallbackLng && !this[r(1941)].languageDetector && !this[r(1618)][r(1376)]) {
      const u = this[r(1941)][r(1506)].getFallbackCodes(this[r(1618)][r(2001)]);
      u[r(1407)] > 0 && u[0] !== "dev" && (this[r(1618)][r(1376)] = u[0]);
    }
    !this.services[r(1747)] && !this.options[r(1376)] && this[r(932)][r(1718)](r(2025)), ["getResource", r(1833), r(1315), r(929)][r(2106)]((u) => {
      var f = r;
      this[u] = (...l) => this[f(2363)][u](...l);
    }), [r(1236), "addResources", "addResourceBundle", "removeResourceBundle"][r(2106)]((u) => {
      this[u] = (...f) => {
        var l = K;
        return this[l(2363)][u](...f), this;
      };
    });
    const c = Ge(), d = () => {
      var u = r;
      const f = (l, v) => {
        var h = K;
        this[h(1023)] = !1, this[h(1993)] && !this[h(1378)] && this[h(932)].warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this[h(1618)][h(1872)] || this[h(932)].log(h(1803), this[h(1618)]), this[h(617)]("initialized", this[h(1618)]), c[h(595)](v), t(l, v);
      };
      if (this[u(611)] && !this[u(1993)]) return f(null, this.t.bind(this));
      this[u(856)](this[u(1618)].lng, f);
    };
    return this[r(1618)].resources || !this[r(1618)][r(1228)] ? d() : setTimeout(d, 0), c;
  }
  [s(562)](x, t = ux) {
    var n, o;
    var r = s;
    let e = t;
    const a = v0(x) ? x : this.language;
    if (typeof x === r(2042) && (e = x), !this[r(1618)][r(2391)] || this[r(1618)][r(1096)]) {
      if ((a == null ? void 0 : a[r(1418)]()) === r(163) && (!this[r(1618)].preload || this[r(1618)][r(1630)][r(1407)] === 0)) return e();
      const c = [], d = (u) => {
        var f = r;
        if (!u || u === f(163)) return;
        this[f(1941)][f(1506)].toResolveHierarchy(u)[f(2106)]((v) => {
          var h = f;
          v !== "cimode" && c.indexOf(v) < 0 && c[h(365)](v);
        });
      };
      a ? d(a) : this.services.languageUtils[r(271)](this[r(1618)][r(2001)]).forEach((f) => d(f)), (o = (n = this[r(1618)].preload) == null ? void 0 : n[r(2106)]) == null || o.call(n, (u) => d(u)), this[r(1941)][r(375)][r(204)](c, this[r(1618)].ns, (u) => {
        var f = r;
        !u && !this.resolvedLanguage && this[f(1297)] && this.setResolvedLanguage(this.language), e(u);
      });
    } else e(null);
  }
  [s(514)](x, t, r) {
    var e = s;
    const a = Ge();
    return typeof x === e(2042) && (r = x, x = void 0), typeof t === e(2042) && (r = t, t = void 0), x || (x = this[e(611)]), t || (t = this[e(1618)].ns), r || (r = ux), this.services[e(375)][e(2315)](x, t, (n) => {
      var o = e;
      a[o(595)](), r(n);
    }), a;
  }
  [s(2252)](x) {
    var t = s;
    if (!x) throw new Error(t(2231));
    if (!x.type) throw new Error(t(1247));
    return x[t(1273)] === "backend" && (this.modules[t(2270)] = x), (x[t(1273)] === t(932) || x.log && x.warn && x.error) && (this[t(2260)].logger = x), x.type === "languageDetector" && (this[t(2260)].languageDetector = x), x[t(1273)] === t(745) && (this[t(2260)][t(745)] = x), x[t(1273)] === t(1740) && Vs[t(1307)](x), x.type === "formatter" && (this.modules[t(2401)] = x), x[t(1273)] === t(1668) && this[t(2260)][t(1723)][t(365)](x), this;
  }
  setResolvedLanguage(x) {
    var t = s;
    if (!(!x || !this[t(611)]) && !([t(163), "dev"].indexOf(x) > -1)) {
      for (let r = 0; r < this.languages[t(1407)]; r++) {
        const e = this[t(611)][r];
        if (!([t(163), t(255)][t(1679)](e) > -1) && this[t(2363)][t(1387)](e)) {
          this[t(1794)] = e;
          break;
        }
      }
      !this[t(1794)] && this.languages[t(1679)](x) < 0 && this.store.hasLanguageSomeTranslations(x) && (this[t(1794)] = x, this.languages.unshift(x));
    }
  }
  [s(856)](x, t) {
    var r = s;
    this[r(907)] = x;
    const e = Ge();
    this[r(617)]("languageChanging", x);
    const a = (c) => {
      var d = r;
      this[d(1297)] = c, this[d(611)] = this[d(1941)].languageUtils[d(2297)](c), this.resolvedLanguage = void 0, this[d(265)](c);
    }, n = (c, d) => {
      var u = r;
      d ? this[u(907)] === x && (a(d), this[u(1041)][u(856)](d), this[u(907)] = void 0, this.emit(u(1133), d), this[u(932)][u(2312)](u(1133), d)) : this[u(907)] = void 0, e.resolve((...f) => this.t(...f)), t && t(c, (...f) => this.t(...f));
    }, o = (c) => {
      var l, v;
      var d = r;
      !x && !c && this[d(1941)][d(1747)] && (c = []);
      const u = v0(c) ? c : c && c[0], f = this[d(2363)][d(1387)](u) ? u : this[d(1941)][d(1506)].getBestMatchFromCodes(v0(c) ? [c] : c);
      f && (!this[d(1297)] && a(f), this[d(1041)][d(1297)] || this[d(1041)][d(856)](f), (v = (l = this.services[d(1747)]) == null ? void 0 : l[d(1808)]) == null || v.call(l, f)), this[d(562)](f, (h) => {
        n(h, f);
      });
    };
    return !x && this[r(1941)][r(1747)] && !this[r(1941)][r(1747)][r(1501)] ? o(this.services[r(1747)][r(1151)]()) : !x && this[r(1941)][r(1747)] && this.services.languageDetector[r(1501)] ? this[r(1941)].languageDetector[r(1151)].length === 0 ? this.services[r(1747)][r(1151)]()[r(2367)](o) : this.services[r(1747)][r(1151)](o) : o(x), e;
  }
  [s(1573)](x, t, r) {
    var e = s;
    const a = (n, o, ...c) => {
      var d = K;
      let u;
      typeof o !== d(1526) ? u = this[d(1618)][d(1070)]([n, o][d(2008)](c)) : u = { ...o }, u.lng = u[d(1376)] || a[d(1376)], u[d(920)] = u.lngs || a[d(920)], u.ns = u.ns || a.ns, u[d(399)] !== "" && (u.keyPrefix = u[d(399)] || r || a[d(399)]);
      const f = this[d(1618)].keySeparator || ".";
      let l;
      return u.keyPrefix && Array[d(242)](n) ? l = n[d(2159)]((v) => "" + u.keyPrefix + f + v) : l = u[d(399)] ? "" + u[d(399)] + f + n : n, this.t(l, u);
    };
    return v0(x) ? a[e(1376)] = x : a[e(920)] = x, a.ns = t, a[e(399)] = r, a;
  }
  t(...x) {
    var r;
    var t = s;
    return (r = this.translator) == null ? void 0 : r[t(2301)](...x);
  }
  [s(1193)](...x) {
    var r;
    var t = s;
    return (r = this.translator) == null ? void 0 : r[t(1193)](...x);
  }
  [s(2321)](x) {
    var t = s;
    this[t(1618)][t(767)] = x;
  }
  [s(1742)](x, t = {}) {
    var r = s;
    if (!this[r(1993)]) return this.logger[r(1718)](r(2459), this[r(611)]), !1;
    if (!this.languages || !this[r(611)][r(1407)]) return this[r(932)][r(1718)](r(879), this[r(611)]), !1;
    const e = t[r(1376)] || this[r(1794)] || this[r(611)][0], a = this[r(1618)] ? this.options[r(2001)] : !1, n = this[r(611)][this[r(611)][r(1407)] - 1];
    if (e[r(1418)]() === r(163)) return !0;
    const o = (c, d) => {
      var u = r;
      const f = this[u(1941)][u(375)][u(2293)][c + "|" + d];
      return f === -1 || f === 0 || f === 2;
    };
    if (t.precheck) {
      const c = t[r(1034)](this, o);
      if (c !== void 0) return c;
    }
    return !!(this.hasResourceBundle(e, x) || !this[r(1941)].backendConnector[r(2270)] || this[r(1618)][r(2391)] && !this.options[r(1096)] || o(e, x) && (!a || o(n, x)));
  }
  [s(1914)](x, t) {
    var r = s;
    const e = Ge();
    return this.options.ns ? (v0(x) && (x = [x]), x[r(2106)]((a) => {
      var n = r;
      this[n(1618)].ns[n(1679)](a) < 0 && this[n(1618)].ns[n(365)](a);
    }), this[r(562)]((a) => {
      var n = r;
      e[n(595)](), t && t(a);
    }), e) : (t && t(), Promise[r(595)]());
  }
  [s(2014)](x, t) {
    var r = s;
    const e = Ge();
    v0(x) && (x = [x]);
    const a = this[r(1618)][r(1630)] || [], n = x.filter((o) => a[r(1679)](o) < 0 && this.services.languageUtils[r(1231)](o));
    return n[r(1407)] ? (this[r(1618)][r(1630)] = a[r(2008)](n), this[r(562)]((o) => {
      var c = r;
      e[c(595)](), t && t(o);
    }), e) : (t && t(), Promise[r(595)]());
  }
  dir(x) {
    var a, n;
    var t = s;
    if (x || (x = this.resolvedLanguage || (((a = this[t(611)]) == null ? void 0 : a[t(1407)]) > 0 ? this[t(611)][0] : this.language)), !x) return "rtl";
    const r = ["ar", "shu", t(334), t(1010), t(598), t(1894), t(1397), t(2e3), "abh", t(296), t(346), t(2160), t(1792), t(1702), t(773), t(1969), t(422), t(1334), t(177), "afb", "ajp", t(1889), t(1989), "arb", "arq", t(417), t(2407), "arz", "auz", "avl", t(643), t(741), t(1758), t(1960), t(469), "pga", "he", "iw", "ps", t(1596), t(190), t(935), t(1963), t(2419), "ug", "ur", t(1030), t(522), t(1160), "ji", "yi", t(1498), t(217), "xmn", "fa", t(1114), t(633), "pes", t(420), "dv", t(186), t(320)], e = ((n = this.services) == null ? void 0 : n[t(1506)]) || new Ur(Br());
    return r.indexOf(e[t(2060)](x)) > -1 || x.toLowerCase().indexOf(t(159)) > 1 ? "rtl" : t(1038);
  }
  static createInstance(x = {}, t) {
    return new ax(x, t);
  }
  cloneInstance(x = {}, t = ux) {
    var r = s;
    const e = x[r(1529)];
    e && delete x.forkResourceStore;
    const a = { ...this[r(1618)], ...x, isClone: !0 }, n = new ax(a);
    if ((x[r(1491)] !== void 0 || x[r(1274)] !== void 0) && (n.logger = n[r(932)][r(143)](x)), ["store", r(1941), r(1297)][r(2106)]((c) => {
      n[c] = this[c];
    }), n.services = { ...this[r(1941)] }, n[r(1941)][r(1239)] = { hasLoadedNamespace: n.hasLoadedNamespace[r(1766)](n) }, e) {
      const c = Object[r(1087)](this[r(2363)][r(1841)])[r(2071)]((d, u) => {
        var f = r;
        return d[u] = { ...this[f(2363)][f(1841)][u] }, d[u] = Object[f(1087)](d[u]).reduce((l, v) => (l[v] = { ...d[u][v] }, l), d[u]), d;
      }, {});
      n[r(2363)] = new $r(c, a), n[r(1941)].resourceStore = n[r(2363)];
    }
    return n[r(1041)] = new Rx(n[r(1941)], a), n[r(1041)].on("*", (c, ...d) => {
      n.emit(c, ...d);
    }), n[r(1607)](a, t), n[r(1041)][r(1618)] = a, n.translator[r(375)][r(1941)][r(1239)] = { hasLoadedNamespace: n[r(1742)][r(1766)](n) }, n;
  }
  [s(1732)]() {
    var x = s;
    return { options: this[x(1618)], store: this[x(2363)], language: this.language, languages: this.languages, resolvedLanguage: this[x(1794)] };
  }
}
const X0 = ax[s(1287)]();
X0[s(1287)] = ax.createInstance, X0.createInstance, X0.dir, X0.init, X0[s(562)], X0[s(514)], X0.use, X0.changeLanguage, X0[s(1573)], X0.t, X0[s(1193)], X0[s(2321)], X0[s(1742)], X0[s(1914)], X0.loadLanguages;
function po() {
  var i = s;
  if (typeof navigator !== i(1110) && navigator[i(1297)]) return navigator[i(1297)] === i(2033) ? i(2033) : "en-US";
  try {
    const x = typeof require !== i(1110) ? require : void 0;
    if (x)
      return x(i(1736)).host[i(1782)][i(897)]("zh") ? i(2033) : "en-US";
  } catch {
  }
  return i(1408);
}
let Ws = po();
const mo = { "zh-CN": {}, "en-US": {} };
function Jt(i) {
  const x = i === "zh-CN" ? Bi : Ji, t = mo[i];
  return { ...x, ...t };
}
function vo() {
  return Ws;
}
function Gt(i, x = {}) {
  var t = s;
  let e = Jt(Ws)[i];
  return e ? typeof e === t(2254) ? e[t(139)](/\{\{(\w+)\}\}/g, (a, n) => x[n] !== void 0 ? String(x[n]) : a) : e : i;
}
const go = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, bo = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, yo = (i) => bo[i], wo = (i) => i[s(139)](go, yo);
let Gr = { bindI18n: s(1133), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", s(2038), "i", "p"], useSuspense: !0, unescape: wo };
const So = (i = {}) => {
  Gr = { ...Gr, ...i };
}, ko = { type: "3rdParty", init(i) {
  var x = s;
  So(i[x(1618)][x(1424)]);
} };
!X0[s(1993)] && X0[s(2252)](ko).init({ resources: { "zh-CN": { translation: Jt(s(2033)) }, "en-US": { translation: Jt(s(1408)) } }, lng: vo(), fallbackLng: s(1408), interpolation: { escapeValue: !1 } });
const Ie = [];
_e[s(1474)] = _e[s(1474)] || {}, _e[s(1474)][s(540)] = function(i, x) {
  var t = s;
  typeof x === t(2042) ? Ie.push([i, { formatter: x, setter: null }]) : Ie[t(365)]([i, x]);
};
function Eo(i, x, t) {
  var c, d, u;
  var r = s;
  const e = Ie.find(([f]) => {
    var l = K;
    return f == l(1265);
  }), a = Ie[r(1119)](([f]) => {
    var l = r;
    return ar(f, i[l(1273)]);
  }) || e;
  let n = !1;
  if (a) {
    const f = a[1].setter;
    f && (n = !!f(i, x, t));
  }
  !n && (i[r(1541)][x][r(2109)] = t, (d = (c = i.widgets[x])[r(1197)]) == null || d.call(c, t)), (u = (O0[r(1844)] || O0[r(685)][r(1641)]).activeWorkflow) == null || u[r(1142)][r(114)]();
}
function Cx(i) {
  var x = s;
  const t = {}, r = Ie[x(1119)](([e]) => {
    var a = x;
    return e == a(1265);
  });
  return i.nodes.forEach((e) => {
    var a = x;
    if (!e[a(1541)] || e[a(1541)].length == 0) return;
    const n = Ie[a(1119)](([o]) => {
      var c = a;
      return ar(o, e[c(1273)]);
    }) || r;
    if (n) try {
      const o = n[1][a(2401)](e);
      o && (t[e.id] = o[a(1541)].map((c) => c[a(2109)]));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function Qt(i, x) {
  var a, n, o;
  var t = s;
  if (!i) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const r = i[t(1998)].map((c) => {
    var d = t;
    if (c.mode != 0) return;
    const u = hx(c);
    if (!u || u.startsWith(".") || !c[d(1541)] || c[d(1541)][d(1407)] == 0) return;
    let f = Ie[d(1119)](([m]) => ar(m, c.type));
    if (f) try {
      const m = f[1][d(2401)](c);
      if (m) return m.id = c.id, m[d(2268)] = m[d(1541)][d(2071)]((b, w) => b + (w.uiWeight || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: u, uiWeightSum: 12, widgets: [{ outputType: "error", value: Gt(d(377), f[0]) + (m.message || m || ""), name: "", options: {} }] };
    }
    if (!u[d(897)]("#")) return null;
    let l = c[d(1541)];
    const v = Ie[d(1119)](([m]) => m == "__DEFAULT__");
    if (v) {
      const m = v[1].formatter(c);
      if (m) return Object.assign(m, { uiWeightSum: m[d(1541)][d(2071)]((b, w) => b + (w[d(1344)] || 12), 0) });
    }
    const h = { id: c.id, title: u, widgets: l.map((m) => ({ name: m[d(453)] || m[d(1831)], outputType: m[d(1273)] || d(2254), value: m[d(2109)], options: m[d(1618)] })) };
    return Object.assign(h, { uiWeightSum: h[d(1541)][d(2071)]((m, b) => m + (b[d(1344)] || 12), 0) });
  }).filter(Boolean)[t(437)]((c, d) => {
    var u = t;
    let f = hx(c), l = hx(d);
    return f = f[u(897)]("#") ? f[u(571)](1)[u(2247)]() : f[u(2247)](), l = l[u(897)]("#") ? l[u(571)](1)[u(2247)]() : l[u(2247)](), f.localeCompare(l);
  }), e = ((n = (a = i[t(1998)][t(1119)]((c) => c[t(1273)] == "Note" && c[t(537)].match(/SD-?PPP/i))) == null ? void 0 : a.widgets[0]) == null ? void 0 : n[t(2109)]) || "";
  return { widgetablePath: ((o = x[t(2317)][t(2082)]) == null ? void 0 : o[t(772)]) || x[t(1512)], widgetableID: x[t(2317)].id, nodes: r[t(2071)]((c, d) => (c[d.id] = d, c), {}), note: e, nodeIndexes: r[t(2159)]((c) => c.id), options: {} };
}
function ar(i, x) {
  var t = s;
  const r = i[t(139)](/[.+^${}()|[\]\\]/g, t(1362))[t(139)](/\*/g, ".*")[t(139)](/\?/g, ".");
  return new RegExp("^" + r + "$")[t(937)](x);
}
function hx(i, x = "") {
  var e;
  var t = s;
  let r = x || i[t(537)] || "";
  return i.setProperty && (r[t(897)]("#") || r.startsWith(".")) ? i[t(578)](t(461), r) : r = ((e = i.properties) == null ? void 0 : e.sdppp_widgetable_title) || r, r;
}
_e[s(780)] = hx;
var fx = { exports: {} }, Wx, Qr;
function Po() {
  if (Qr) return Wx;
  Qr = 1;
  var i = 1e3, x = i * 60, t = x * 60, r = t * 24, e = r * 7, a = r * 365.25;
  Wx = function(u, f) {
    var l = K;
    f = f || {};
    var v = typeof u;
    if (v === l(2254) && u[l(1407)] > 0) return n(u);
    if (v === l(2240) && isFinite(u)) return f.long ? c(u) : o(u);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON[l(2099)](u));
  };
  function n(u) {
    var f = K;
    if (u = String(u), !(u[f(1407)] > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[f(2463)](u);
      if (l) {
        var v = parseFloat(l[1]), h = (l[2] || "ms")[f(1418)]();
        switch (h) {
          case "years":
          case f(117):
          case "yrs":
          case "yr":
          case "y":
            return v * a;
          case f(2135):
          case f(1812):
          case "w":
            return v * e;
          case f(1191):
          case f(1548):
          case "d":
            return v * r;
          case f(2417):
          case f(1158):
          case f(1365):
          case "hr":
          case "h":
            return v * t;
          case f(380):
          case "minute":
          case f(2234):
          case "min":
          case "m":
            return v * x;
          case f(1402):
          case f(2424):
          case f(1545):
          case f(1271):
          case "s":
            return v * i;
          case f(448):
          case f(2017):
          case "msecs":
          case f(1116):
          case "ms":
            return v;
          default:
            return;
        }
      }
    }
  }
  function o(u) {
    var f = K, l = Math[f(1051)](u);
    return l >= r ? Math[f(2200)](u / r) + "d" : l >= t ? Math[f(2200)](u / t) + "h" : l >= x ? Math[f(2200)](u / x) + "m" : l >= i ? Math.round(u / i) + "s" : u + "ms";
  }
  function c(u) {
    var f = K, l = Math[f(1051)](u);
    return l >= r ? d(u, l, r, f(1548)) : l >= t ? d(u, l, t, f(1158)) : l >= x ? d(u, l, x, f(385)) : l >= i ? d(u, l, i, f(2424)) : u + " ms";
  }
  function d(u, f, l, v) {
    var h = K, m = f >= l * 1.5;
    return Math[h(2200)](u / l) + " " + v + (m ? "s" : "");
  }
  return Wx;
}
var Zx, Yr;
function Io() {
  if (Yr) return Zx;
  Yr = 1;
  function i(x) {
    var t = K;
    e[t(1491)] = e, e.default = e, e[t(569)] = u, e[t(838)] = c, e[t(364)] = n, e[t(2021)] = d, e[t(1189)] = Po(), e[t(2374)] = f, Object[t(1087)](x).forEach((l) => {
      e[l] = x[l];
    }), e[t(746)] = [], e[t(2469)] = [], e.formatters = {};
    function r(l) {
      var v = t;
      let h = 0;
      for (let m = 0; m < l.length; m++)
        h = (h << 5) - h + l[v(574)](m), h |= 0;
      return e.colors[Math[v(1051)](h) % e[v(2181)][v(1407)]];
    }
    e[t(1241)] = r;
    function e(l) {
      var v = t;
      let h, m = null, b, w;
      function E(...O) {
        var q = K;
        if (!E.enabled) return;
        const R = E, k = Number(/* @__PURE__ */ new Date()), N = k - (h || k);
        R[q(2178)] = N, R[q(2080)] = h, R.curr = k, h = k, O[0] = e[q(569)](O[0]), typeof O[0] !== q(2254) && O[q(884)]("%O");
        let j = 0;
        O[0] = O[0].replace(/%([a-zA-Z%])/g, (M, F) => {
          var C = q;
          if (M === "%%") return "%";
          j++;
          const L = e[C(1299)][F];
          if (typeof L == "function") {
            const H = O[j];
            M = L.call(R, H), O[C(890)](j, 1), j--;
          }
          return M;
        }), e[q(1165)][q(2497)](R, O), (R[q(2312)] || e.log)[q(1196)](R, O);
      }
      return E[v(2461)] = l, E[v(1388)] = e[v(1388)](), E[v(2088)] = e[v(1241)](l), E[v(2003)] = a, E[v(2374)] = e.destroy, Object[v(612)](E, "enabled", { enumerable: !0, configurable: !1, get: () => {
        var O = v;
        return m !== null ? m : (b !== e.namespaces && (b = e.namespaces, w = e[O(2021)](l)), w);
      }, set: (O) => {
        m = O;
      } }), typeof e[v(1607)] === v(2042) && e[v(1607)](E), E;
    }
    function a(l, v) {
      var h = t;
      const m = e(this.namespace + (typeof v === h(1110) ? ":" : v) + l);
      return m[h(2312)] = this[h(2312)], m;
    }
    function n(l) {
      var v = t;
      e[v(798)](l), e[v(1780)] = l, e.names = [], e[v(2469)] = [];
      const h = (typeof l === v(2254) ? l : "")[v(2247)]()[v(139)](/\s+/g, ",")[v(1363)](",").filter(Boolean);
      for (const m of h)
        m[0] === "-" ? e[v(2469)][v(365)](m[v(571)](1)) : e.names[v(365)](m);
    }
    function o(l, v) {
      var h = t;
      let m = 0, b = 0, w = -1, E = 0;
      for (; m < l.length; )
        if (b < v[h(1407)] && (v[b] === l[m] || v[b] === "*")) v[b] === "*" ? (w = b, E = m, b++) : (m++, b++);
        else if (w !== -1) b = w + 1, E++, m = E;
        else return !1;
      for (; b < v.length && v[b] === "*"; )
        b++;
      return b === v[h(1407)];
    }
    function c() {
      var l = t;
      const v = [...e.names, ...e.skips.map((h) => "-" + h)].join(",");
      return e[l(364)](""), v;
    }
    function d(l) {
      for (const v of e.skips)
        if (o(l, v)) return !1;
      for (const v of e.names)
        if (o(l, v)) return !0;
      return !1;
    }
    function u(l) {
      var v = t;
      return l instanceof Error ? l[v(1306)] || l[v(1682)] : l;
    }
    function f() {
      var l = t;
      console.warn(l(289));
    }
    return e.enable(e[t(204)]()), e;
  }
  return Zx = i, Zx;
}
var Xr;
function Ro() {
  var i = s;
  return Xr ? fx[i(1117)] : (Xr = 1, function(x, t) {
    var r = i;
    t[r(1165)] = a, t.save = n, t[r(204)] = o, t.useColors = e, t[r(2185)] = c(), t[r(2374)] = /* @__PURE__ */ (() => {
      let u = !1;
      return () => {
        var f = K;
        !u && (u = !0, console.warn(f(289)));
      };
    })(), t.colors = [r(1310), r(1659), r(1867), "#0033FF", r(1671), r(238), r(866), "#0099FF", "#00CC00", "#00CC33", "#00CC66", r(1634), r(1527), r(1542), "#3300CC", r(1098), r(2055), "#3333FF", "#3366CC", r(1801), r(1879), r(1847), "#33CC00", "#33CC33", r(454), r(362), "#33CCCC", r(254), "#6600CC", r(1049), r(109), r(620), r(2105), "#66CC33", r(603), r(1900), r(2140), r(1994), r(1534), r(370), r(2423), r(744), r(1568), r(1609), r(2114), r(1605), r(192), r(1975), r(1425), "#CC3399", r(2262), r(1145), "#CC6600", r(1258), "#CC9900", r(679), r(684), "#CCCC33", r(519), r(577), r(2467), r(253), r(232), r(669), r(2421), r(2101), r(1357), r(1429), r(1614), r(963), r(2379), r(268), r(1507), r(1591), r(330), r(2224)];
    function e() {
      var u = r;
      if (typeof window !== u(1110) && window.process && (window[u(282)][u(1273)] === u(956) || window[u(282)].__nwjs)) return !0;
      if (typeof navigator !== u(1110) && navigator[u(1248)] && navigator[u(1248)][u(1418)]()[u(877)](/(edge|trident)\/(\d+)/)) return !1;
      let f;
      return typeof document !== u(1110) && document[u(658)] && document[u(658)][u(779)] && document.documentElement.style[u(1446)] || typeof window !== u(1110) && window[u(771)] && (window[u(771)][u(837)] || window[u(771)].exception && window[u(771)].table) || typeof navigator !== u(1110) && navigator[u(1248)] && (f = navigator[u(1248)][u(1418)]().match(/firefox\/(\d+)/)) && parseInt(f[1], 10) >= 31 || typeof navigator !== u(1110) && navigator[u(1248)] && navigator[u(1248)][u(1418)]()[u(877)](/applewebkit\/(\d+)/);
    }
    function a(u) {
      var f = r;
      if (u[0] = (this[f(1388)] ? "%c" : "") + this.namespace + (this.useColors ? f(153) : " ") + u[0] + (this.useColors ? f(2027) : " ") + "+" + x.exports[f(1189)](this[f(2178)]), !this.useColors) return;
      const l = f(1326) + this[f(2088)];
      u[f(890)](1, 0, l, f(1750));
      let v = 0, h = 0;
      u[0][f(139)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (v++, m === "%c" && (h = v));
      }), u[f(890)](h, 0, l);
    }
    t.log = console[r(1491)] || console[r(2312)] || (() => {
    });
    function n(u) {
      var f = r;
      try {
        u ? t.storage[f(1882)]("debug", u) : t.storage[f(306)](f(1491));
      } catch {
      }
    }
    function o() {
      var u = r;
      let f;
      try {
        f = t.storage[u(1561)]("debug") || t[u(2185)][u(1561)](u(2194));
      } catch {
      }
      return !f && typeof process !== u(1110) && u(1604) in process && (f = process[u(1604)][u(2194)]), f;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x[r(1117)] = Io()(t);
    const { formatters: d } = x[r(1117)];
    d.j = function(u) {
      var f = r;
      try {
        return JSON[f(2099)](u);
      } catch (l) {
        return f(2174) + l[f(1682)];
      }
    };
  }(fx, fx[i(1117)]), fx.exports);
}
var Co = Ro();
const Zs = Hs(Co);
Zs[s(364)]("*");
function Fo(i, x) {
  var t = s;
  const r = Zs(i), e = (a, n) => async function(...o) {
    try {
      await x({ level: a, messages: o });
    } catch {
    }
  };
  return r[t(2312)] = e(t(2312)), r;
}
const qx = Fo(s(1874), async ({ level: i, messages: x }) => {
  var t = s;
  const { mcpMesh: r } = await Promise.resolve().then(() => jc);
  await r[t(2362)]("uxp")[t(689)].log({ level: i, messages: x });
}), Yt = qx[s(2003)]("mesh:workflow"), _r = /* @__PURE__ */ new Set();
C0[s(568)](s(1739), async (i) => {
  var x = s;
  return i[x(2425)][x(2106)](({ nodeID: t, widgetIndex: r, value: e }) => {
    var a = x;
    const n = O0[a(315)][a(1998)][a(1119)]((o) => o.id == t);
    !n || e == n[a(1541)][r][a(2109)] || Eo(n, r, e);
  }), { success: !0 };
}), C0.implementAction(s(1638), async (i) => {
  var x = s;
  const { workflow_path: t } = i, r = !_r[x(179)](t), e = i[x(1790)] || r;
  _r[x(540)](t);
  const a = O0[x(685)].workflow || O0.workflowManager, n = a.workflows[x(1119)]((c) => c[x(431)] === t || c.path === t || c[x(1512)] === x(503) + t);
  if (!e) {
    const c = await No(a, n);
    if (Yt(x(2415) + c), c) await Kx(a, n);
    else try {
      await o(a, n);
    } catch {
      await Kx(a, n);
    }
    return { success: !0 };
  }
  return await Kx(a, n), { success: !0 };
  async function o(c, d) {
    var u = x;
    Yt(u(1701) + d.path, d[u(1027)]), O0[u(1844)] == c ? await d[u(204)]() : (await c.openWorkflow(d), await O0[u(1930)](JSON[u(734)](JSON[u(2099)](d[u(1027)])), !0, !0, d, {}));
  }
}), C0.implementAction("openWorkflowJSON", async function(i) {
  var x = s;
  let { workflow_content: t, workflow_path: r } = i;
  return t[x(2082)] = { ...t.extra || {}, sdppp_workflow_alias: r }, await O0[x(1930)](t), { success: !0 };
}), C0[s(568)](s(2064), async (i) => {
  var a;
  var x = s;
  const t = O0[x(1844)] || O0[x(685)][x(1641)];
  (a = t[x(233)]) == null || a.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t.workflows[x(2159)]((n) => n[x(1512)][x(139)](x(503), ""));
  try {
    const n = new Headers(), o = localStorage[x(1561)]("Comfy.userId");
    o && n[x(321)](x(258), o);
    const c = await fetch(x(587), { headers: n });
    let d = [];
    c.ok && (d = (await c[x(1987)]())[x(2019)][x(2159)]((f) => f.replace(x(503), ""))), e.sort((u, f) => {
      var l = x;
      const v = d.includes(u), h = d[l(1502)](f);
      return v && !h ? -1 : !v && h ? 1 : u[l(1944)](f);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), C0[s(568)](s(1092), async (i) => {
  var n;
  var x = s;
  const { workflow_path: t, from_sid: r } = i, e = O0[x(1844)] || O0[x(685)][x(1641)], a = e[x(1555)][x(1119)]((o) => o[x(431)] === t || o[x(1512)] === t || o.path === "workflows/" + t);
  if (!a) throw new Error(x(795));
  return ((n = e[x(133)]) == null ? void 0 : n.id) != a.id && await O0[x(1638)](t, r, !1), a[x(1142)][x(114)](), await e[x(1092)](a), { success: !0 };
});
async function No(i, x) {
  var e, a, n;
  var t = s;
  if (!x || !(((e = i[t(133)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((a = x[t(1142)]) != null && a[t(114)]) try {
    x[t(1142)][t(114)]();
  } catch (o) {
    console.warn(t(1735), o);
  }
  try {
    const o = (n = O0.graph) == null ? void 0 : n.serialize(), c = x[t(2317)];
    if (!o || !c) return !1;
    const d = JSON[t(2099)](o), u = JSON.stringify(c);
    return d !== u;
  } catch (o) {
    return console[t(1718)](t(2340), o), !1;
  }
}
async function Kx(i, x) {
  var e;
  var t = s;
  Yt(t(1912) + x[t(1512)]);
  async function r(a, n) {
    var o = t;
    O0.workflowManager == a ? await n[o(204)]() : (await a[o(1638)](n), await O0[o(1930)](JSON[o(734)](JSON[o(2099)](n[o(2317)])), !0, !0, n, {}));
  }
  if ((x[t(889)] || (e = i[t(889)]) != null && e.call(i, x)) && i.openWorkflows.length === 1) {
    const a = i.createTemporary();
    i.openWorkflow(a);
  } else await r(i, i[t(1346)][0] == x ? i[t(1346)][1] : i[t(1346)][0]);
  await i[t(2378)](x, !1), await new Promise((a) => requestAnimationFrame(a)), await r(i, x);
}
const Ye = qx.extend(s(2399)), Ne = /* @__PURE__ */ new Map();
function qo(i, x) {
  var t = s;
  const r = Ne.get(i);
  Ye(t(991), i, x, r, Ne), r && r[t(413)](x);
}
C0[s(568)](s(2453), async function* (i) {
  var x = s;
  let t = !1, r = [];
  function e() {
    var l = K;
    if (t) return;
    const v = Te[l(1694)];
    Te.queuePrompt = async (...h) => {
      var m = l;
      try {
        const b = await v[m(2497)](Te, ...h);
        return r[m(365)]({ error: null, result: b, prompt_id: b[m(2334)] }), b;
      } catch (b) {
        throw r[m(365)]({ error: b, result: null, prompt_id: "" }), b;
      }
    }, t = !0;
  }
  t || e();
  const a = i[x(2308)];
  let n = !1, o = {}, c = [];
  C0[x(2363)][x(2507)]({ lastError: "", widgetableErrors: {} });
  try {
    r = [], await O0[x(1694)](1, a), r[x(2106)]((l) => {
      var h, m;
      var v = x;
      if (l.error) n = !0, o = l[v(2239)][v(465)] ? f(l.error[v(465)][v(1013)]) : {}, Object[v(1184)](o, { "-1": ((m = (h = l[v(2239)].response) == null ? void 0 : h[v(2239)]) == null ? void 0 : m[v(1682)]) || l.error.message });
      else {
        const b = l[v(1690)][v(2334)];
        c[v(365)](b);
        let w, E;
        const O = new Promise((R, k) => {
          w = R, E = k;
        }), q = { promise: O, resolveImage: w, rejectImage: E };
        Ne[v(321)](b, q);
      }
    });
  } catch (l) {
    Ye(x(337), l[x(1306)]), n = !0, o = { "-1": l.message || l.toString() };
  }
  Ye("after app.queuePrompt errors: ", n, o, x(1973), c), n && C0[x(2363)][x(2507)]({ widgetableErrors: o });
  let d = [];
  const u = /* @__PURE__ */ new Map();
  for (const l of c) {
    const v = Ne.get(l);
    v && u[x(321)](l, v[x(697)]);
  }
  for (Ye("waiting for queue prompt"); u[x(2308)] > 0; ) {
    const l = Array[x(371)](u.entries()), v = l.map(([b, w]) => w[x(2367)]((E) => ({ prompt_id: b, images: E }))), { prompt_id: h, images: m } = await Promise[x(318)](v);
    Ye("resolved promise for", h), d[x(365)](...m), u[x(355)](h), Ne.delete(h), yield { success: !0, prompt_ids: [h], images: m };
  }
  function f(l) {
    var v = x;
    const h = {};
    return Object[v(1087)](l).forEach((m) => {
      var b = v;
      const w = m[b(1363)](":")[0], E = O0[b(315)][b(1998)][b(1119)]((O) => O.id == w);
      h[w] = "[" + ((E == null ? void 0 : E[b(537)]) || w) + "]" + l[m][b(2493)][b(2159)](JSON[b(2099)])[b(152)](`
`);
    }), h;
  }
}), C0.implementAction(s(277), async () => {
  var i = s;
  await O0.api.clearItems(i(1628)), await O0[i(1689)][i(2280)]();
  const x = Array[i(371)](Ne[i(2425)]());
  Ne[i(1547)]();
  for (const t of x)
    try {
      t[i(1528)](new Error("Workflow stopped by user"));
    } catch {
    }
  return { success: !0 };
}), C0[s(568)](s(1226), async (i) => {
  var x = s;
  const { node_id: t, title: r } = i, e = O0.graph[x(1998)][x(1119)]((a) => a.id == t);
  if (!e) throw new Error(x(301));
  return e.title = r, e.setProperty("sdppp_widgetable_title", r), { success: !0 };
}), C0[s(568)]("reboot", async () => {
  var i = s;
  const x = await fetch(i(1925));
  return x.status == 404 ? { error: Gt("ComfyManager not found, cannot reboot"), success: !1 } : x[i(333)] == 200 ? { success: !0 } : { error: Gt(i(2377)) + x[i(543)], success: !1 };
}), C0[s(568)](s(235), async (i) => {
  var x = s;
  const { api_key: t } = i;
  return localStorage[x(1882)](x(2299), t), location.reload(), { success: !0 };
}), C0[s(568)](s(1525), async () => {
  var i = s;
  return document[i(1590)](i(1729)).parentElement[i(1717)](), { success: !0 };
});
const Ks = "2025-06-18", Oo = [Ks, s(1565), s(1454), s(715)], Ox = s(1168), Bs = J0([S(), r0()[s(2044)]()]), Js = S(), To = P({ progressToken: Z(Bs) }).passthrough(), ae = P({ _meta: Z(To) })[s(1686)](), xe = P({ method: S(), params: Z(ae) }), nx = P({ _meta: Z(P({}).passthrough()) }).passthrough(), pe = P({ method: S(), params: Z(nx) }), se = P({ _meta: Z(P({})[s(1686)]()) })[s(1686)](), Tx = J0([S(), r0()[s(2044)]()]), Gs = P({ jsonrpc: t0(Ox), id: Tx }).merge(xe)[s(2084)](), Ao = (i) => Gs[s(2005)](i).success, Qs = P({ jsonrpc: t0(Ox) }).merge(pe).strict(), Do = (i) => Qs[s(2005)](i).success, Ys = P({ jsonrpc: t0(Ox), id: Tx, result: se })[s(2084)](), ea = (i) => Ys[s(2005)](i)[s(1283)];
var be;
(function(i) {
  var x = s;
  i[i[x(1703)] = -32e3] = x(1703), i[i[x(227)] = -32001] = x(227), i[i.ParseError = -32700] = "ParseError", i[i[x(2487)] = -32600] = "InvalidRequest", i[i[x(382)] = -32601] = x(382), i[i[x(462)] = -32602] = x(462), i[i[x(201)] = -32603] = x(201);
})(be || (be = {}));
const Xs = P({ jsonrpc: t0(Ox), id: Tx, error: P({ code: r0()[s(2044)](), message: S(), data: Z(sx()) }) })[s(2084)](), jo = (i) => Xs.safeParse(i).success;
J0([Gs, Qs, Ys, Xs]);
const Xt = se[s(2084)](), _t = pe[s(2003)]({ method: t0(s(2195)), params: nx.extend({ requestId: Tx, reason: S()[s(1597)]() }) }), ix = P({ name: S(), title: Z(S()) }).passthrough(), _s = ix[s(2003)]({ version: S() }), Mo = P({ experimental: Z(P({})[s(1686)]()), sampling: Z(P({})[s(1686)]()), elicitation: Z(P({})[s(1686)]()), roots: Z(P({ listChanged: Z(e0()) })[s(1686)]()) })[s(1686)](), en = xe[s(2003)]({ method: t0(s(2495)), params: ae[s(2003)]({ protocolVersion: S(), capabilities: Mo, clientInfo: _s }) }), Lo = P({ experimental: Z(P({})[s(1686)]()), logging: Z(P({})[s(1686)]()), completions: Z(P({}).passthrough()), prompts: Z(P({ listChanged: Z(e0()) })[s(1686)]()), resources: Z(P({ subscribe: Z(e0()), listChanged: Z(e0()) })[s(1686)]()), tools: Z(P({ listChanged: Z(e0()) })[s(1686)]()) })[s(1686)](), $o = se.extend({ protocolVersion: S(), capabilities: Lo, serverInfo: _s, instructions: Z(S()) }), xn = pe.extend({ method: t0(s(2162)) }), er = xe[s(2003)]({ method: t0("ping") }), zo = P({ progress: r0(), total: Z(r0()), message: Z(S()) })[s(1686)](), xr = pe.extend({ method: t0(s(1132)), params: nx.merge(zo)[s(2003)]({ progressToken: Bs }) }), Ax = xe[s(2003)]({ params: ae[s(2003)]({ cursor: Z(Js) })[s(1597)]() }), Dx = se[s(2003)]({ nextCursor: Z(Js) }), tn = P({ uri: S(), mimeType: Z(S()), _meta: Z(P({}).passthrough()) })[s(1686)](), rn = tn[s(2003)]({ text: S() }), an = tn.extend({ blob: S()[s(712)]() }), sn = ix[s(2003)]({ uri: S(), description: Z(S()), mimeType: Z(S()), _meta: Z(P({})[s(1686)]()) }), Ho = ix[s(2003)]({ uriTemplate: S(), description: Z(S()), mimeType: Z(S()), _meta: Z(P({}).passthrough()) }), Uo = Ax[s(2003)]({ method: t0("resources/list") }), Vo = Dx[s(2003)]({ resources: I0(sn) }), Wo = Ax[s(2003)]({ method: t0(s(2030)) }), Zo = Dx[s(2003)]({ resourceTemplates: I0(Ho) }), Ko = xe[s(2003)]({ method: t0("resources/read"), params: ae.extend({ uri: S() }) }), Bo = se[s(2003)]({ contents: I0(J0([rn, an])) }), Jo = pe[s(2003)]({ method: t0("notifications/resources/list_changed") }), Go = xe[s(2003)]({ method: t0(s(873)), params: ae[s(2003)]({ uri: S() }) }), Qo = xe[s(2003)]({ method: t0(s(652)), params: ae[s(2003)]({ uri: S() }) }), Yo = pe.extend({ method: t0("notifications/resources/updated"), params: nx[s(2003)]({ uri: S() }) }), Xo = P({ name: S(), description: Z(S()), required: Z(e0()) })[s(1686)](), _o = ix[s(2003)]({ description: Z(S()), arguments: Z(I0(Xo)), _meta: Z(P({}).passthrough()) }), e2 = Ax[s(2003)]({ method: t0("prompts/list") }), x2 = Dx[s(2003)]({ prompts: I0(_o) }), t2 = xe[s(2003)]({ method: t0(s(428)), params: ae[s(2003)]({ name: S(), arguments: Z(H0(S())) }) }), sr = P({ type: t0(s(2191)), text: S(), _meta: Z(P({})[s(1686)]()) }).passthrough(), nr = P({ type: t0(s(1383)), data: S().base64(), mimeType: S(), _meta: Z(P({})[s(1686)]()) }).passthrough(), ir = P({ type: t0(s(2131)), data: S()[s(712)](), mimeType: S(), _meta: Z(P({})[s(1686)]()) })[s(1686)](), r2 = P({ type: t0(s(2052)), resource: J0([rn, an]), _meta: Z(P({})[s(1686)]()) }).passthrough(), a2 = sn.extend({ type: t0(s(2422)) }), nn = J0([sr, nr, ir, a2, r2]), s2 = P({ role: F0(["user", "assistant"]), content: nn }).passthrough(), n2 = se[s(2003)]({ description: Z(S()), messages: I0(s2) }), i2 = pe[s(2003)]({ method: t0(s(1155)) }), o2 = P({ title: Z(S()), readOnlyHint: Z(e0()), destructiveHint: Z(e0()), idempotentHint: Z(e0()), openWorldHint: Z(e0()) })[s(1686)](), c2 = ix[s(2003)]({ description: Z(S()), inputSchema: P({ type: t0("object"), properties: Z(P({})[s(1686)]()), required: Z(I0(S())) })[s(1686)](), outputSchema: Z(P({ type: t0(s(1526)), properties: Z(P({})[s(1686)]()), required: Z(I0(S())) })[s(1686)]()), annotations: Z(o2), _meta: Z(P({})[s(1686)]()) }), d2 = Ax[s(2003)]({ method: t0(s(1366)) }), u2 = Dx[s(2003)]({ tools: I0(c2) }), on = se[s(2003)]({ content: I0(nn)[s(1058)]([]), structuredContent: P({}).passthrough()[s(1597)](), isError: Z(e0()) });
on.or(se[s(2003)]({ toolResult: sx() }));
const f2 = xe[s(2003)]({ method: t0(s(487)), params: ae.extend({ name: S(), arguments: Z(H0(sx())) }) }), l2 = pe[s(2003)]({ method: t0("notifications/tools/list_changed") }), cn = F0([s(1491), "info", s(1570), s(480), s(2239), s(241), s(1298), s(1610)]), h2 = xe[s(2003)]({ method: t0(s(2155)), params: ae[s(2003)]({ level: cn }) }), p2 = pe[s(2003)]({ method: t0(s(2164)), params: nx.extend({ level: cn, logger: Z(S()), data: sx() }) }), m2 = P({ name: S()[s(1597)]() })[s(1686)](), v2 = P({ hints: Z(I0(m2)), costPriority: Z(r0()[s(475)](0)[s(1443)](1)), speedPriority: Z(r0()[s(475)](0)[s(1443)](1)), intelligencePriority: Z(r0()[s(475)](0).max(1)) })[s(1686)](), g2 = P({ role: F0([s(481), s(2494)]), content: J0([sr, nr, ir]) })[s(1686)](), b2 = xe[s(2003)]({ method: t0(s(1509)), params: ae[s(2003)]({ messages: I0(g2), systemPrompt: Z(S()), includeContext: Z(F0([s(1728), s(865), s(2009)])), temperature: Z(r0()), maxTokens: r0()[s(2044)](), stopSequences: Z(I0(S())), metadata: Z(P({}).passthrough()), modelPreferences: Z(v2) }) }), dn = se.extend({ model: S(), stopReason: Z(F0([s(170), "stopSequence", "maxTokens"]).or(S())), role: F0([s(481), "assistant"]), content: $s(s(1273), [sr, nr, ir]) }), y2 = P({ type: t0(s(968)), title: Z(S()), description: Z(S()), default: Z(e0()) })[s(1686)](), w2 = P({ type: t0(s(2254)), title: Z(S()), description: Z(S()), minLength: Z(r0()), maxLength: Z(r0()), format: Z(F0([s(2481), s(892), s(1903), s(1910)])) })[s(1686)](), S2 = P({ type: F0([s(2240), "integer"]), title: Z(S()), description: Z(S()), minimum: Z(r0()), maximum: Z(r0()) })[s(1686)](), k2 = P({ type: t0(s(2254)), title: Z(S()), description: Z(S()), enum: I0(S()), enumNames: Z(I0(S())) })[s(1686)](), E2 = J0([y2, w2, S2, k2]), P2 = xe[s(2003)]({ method: t0(s(1434)), params: ae.extend({ message: S(), requestedSchema: P({ type: t0(s(1526)), properties: H0(S(), E2), required: Z(I0(S())) })[s(1686)]() }) }), un = se[s(2003)]({ action: F0([s(855), "decline", s(1282)]), content: Z(H0(S(), sx())) }), I2 = P({ type: t0(s(764)), uri: S() }).passthrough(), R2 = P({ type: t0(s(1779)), name: S() })[s(1686)](), C2 = xe[s(2003)]({ method: t0(s(1186)), params: ae.extend({ ref: J0([R2, I2]), argument: P({ name: S(), value: S() })[s(1686)](), context: Z(P({ arguments: Z(H0(S(), S())) })) }) }), F2 = se[s(2003)]({ completion: P({ values: I0(S())[s(1443)](100), total: Z(r0()[s(2044)]()), hasMore: Z(e0()) })[s(1686)]() }), N2 = P({ uri: S().startsWith(s(1269)), name: Z(S()), _meta: Z(P({})[s(1686)]()) })[s(1686)](), q2 = xe.extend({ method: t0(s(1866)) }), fn = se[s(2003)]({ roots: I0(N2) }), O2 = pe.extend({ method: t0(s(868)) });
J0([er, en, C2, h2, t2, e2, Uo, Wo, Ko, Go, Qo, f2, d2]), J0([_t, xr, xn, O2]), J0([Xt, dn, un, fn]), J0([er, b2, P2, q2]), J0([_t, xr, p2, Yo, Jo, l2, i2]), J0([Xt, $o, F2, n2, x2, Vo, Zo, Bo, on, u2]);
class Oe extends Error {
  constructor(x, t, r) {
    var e = s;
    super(e(1500) + x + ": " + t), this[e(2029)] = x, this[e(1841)] = r, this.name = "McpError";
  }
}
const T2 = 6e4;
class A2 {
  constructor(x) {
    var t = s;
    this[t(1004)] = x, this._requestMessageId = 0, this[t(174)] = /* @__PURE__ */ new Map(), this[t(1451)] = /* @__PURE__ */ new Map(), this[t(1076)] = /* @__PURE__ */ new Map(), this[t(573)] = /* @__PURE__ */ new Map(), this[t(960)] = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this[t(335)](_t, (r) => {
      var e = t;
      const a = this[e(1451)][e(1170)](r[e(2012)][e(952)]);
      a == null || a[e(2070)](r[e(2012)][e(1767)]);
    }), this[t(335)](xr, (r) => {
      var e = t;
      this[e(331)](r);
    }), this[t(112)](er, (r) => ({}));
  }
  [s(642)](x, t, r, e, a = !1) {
    var n = s;
    this[n(2311)][n(321)](x, { timeoutId: setTimeout(e, t), startTime: Date[n(2371)](), timeout: t, maxTotalTimeout: r, resetTimeoutOnProgress: a, onTimeout: e });
  }
  _resetTimeout(x) {
    var t = s;
    const r = this[t(2311)][t(1170)](x);
    if (!r) return !1;
    const e = Date.now() - r[t(2093)];
    if (r.maxTotalTimeout && e >= r.maxTotalTimeout)
      throw this[t(2311)][t(355)](x), new Oe(be[t(227)], t(2072), { maxTotalTimeout: r[t(2010)], totalElapsed: e });
    return clearTimeout(r[t(419)]), r[t(419)] = setTimeout(r[t(2238)], r[t(1198)]), !0;
  }
  [s(1033)](x) {
    var t = s;
    const r = this[t(2311)].get(x);
    r && (clearTimeout(r[t(419)]), this[t(2311)][t(355)](x));
  }
  async [s(1026)](x) {
    var t = s, r, e, a;
    this[t(228)] = x;
    const n = (r = this[t(1445)]) === null || r === void 0 ? void 0 : r[t(311)];
    this[t(228)][t(311)] = () => {
      var d = t;
      n == null || n(), this[d(291)]();
    };
    const o = (e = this[t(1445)]) === null || e === void 0 ? void 0 : e[t(987)];
    this[t(228)][t(987)] = (d) => {
      var u = t;
      o == null || o(d), this[u(2304)](d);
    };
    const c = (a = this[t(228)]) === null || a === void 0 ? void 0 : a[t(1061)];
    this[t(228)][t(1061)] = (d, u) => {
      var f = t;
      c == null || c(d, u), ea(d) || jo(d) ? this._onresponse(d) : Ao(d) ? this._onrequest(d, u) : Do(d) ? this[f(1580)](d) : this[f(2304)](new Error(f(793) + JSON.stringify(d)));
    }, await this[t(228)].start();
  }
  [s(291)]() {
    var x = s, t;
    const r = this[x(573)];
    this._responseHandlers = /* @__PURE__ */ new Map(), this[x(960)][x(1547)](), this[x(702)].clear(), this._transport = void 0, (t = this[x(311)]) === null || t === void 0 || t[x(2497)](this);
    const e = new Oe(be.ConnectionClosed, "Connection closed");
    for (const a of r[x(2425)]())
      a(e);
  }
  [s(2304)](x) {
    var t = s, r;
    (r = this[t(987)]) === null || r === void 0 || r.call(this, x);
  }
  [s(1580)](x) {
    var t = s, r;
    const e = (r = this[t(1076)][t(1170)](x[t(1913)])) !== null && r !== void 0 ? r : this[t(2316)];
    e !== void 0 && Promise.resolve()[t(2367)](() => e(x))[t(206)]((a) => this._onerror(new Error("Uncaught error in notification handler: " + a)));
  }
  [s(460)](x, t) {
    var r = s, e, a, n, o;
    const c = (e = this[r(174)][r(1170)](x[r(1913)])) !== null && e !== void 0 ? e : this.fallbackRequestHandler;
    if (c === void 0) {
      (a = this._transport) === null || a === void 0 || a[r(1658)]({ jsonrpc: r(1168), id: x.id, error: { code: be[r(382)], message: r(1442) } })[r(206)]((f) => this[r(2304)](new Error(r(2128) + f)));
      return;
    }
    const d = new AbortController();
    this[r(1451)].set(x.id, d);
    const u = { signal: d[r(500)], sessionId: (n = this._transport) === null || n === void 0 ? void 0 : n[r(1810)], _meta: (o = x[r(2012)]) === null || o === void 0 ? void 0 : o[r(2441)], sendNotification: (f) => this.notification(f, { relatedRequestId: x.id }), sendRequest: (f, l, v) => this[r(1413)](f, l, { ...v, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t.authInfo, requestId: x.id, requestInfo: t == null ? void 0 : t[r(423)] };
    Promise[r(595)]().then(() => c(x, u))[r(2367)]((f) => {
      var l = r, v;
      if (!d[l(500)].aborted)
        return (v = this[l(228)]) === null || v === void 0 ? void 0 : v.send({ result: f, jsonrpc: l(1168), id: x.id });
    }, (f) => {
      var l = r, v, h;
      if (!d[l(500)][l(463)])
        return (v = this[l(228)]) === null || v === void 0 ? void 0 : v[l(1658)]({ jsonrpc: l(1168), id: x.id, error: { code: Number[l(338)](f[l(2029)]) ? f.code : be.InternalError, message: (h = f[l(1682)]) !== null && h !== void 0 ? h : l(1931) } });
    }).catch((f) => this[r(2304)](new Error(r(2073) + f)))[r(1997)](() => {
      var f = r;
      this[f(1451)][f(355)](x.id);
    });
  }
  [s(331)](x) {
    var t = s;
    const { progressToken: r, ...e } = x[t(2012)], a = Number(r), n = this[t(960)][t(1170)](a);
    if (!n) {
      this[t(2304)](new Error(t(655) + JSON[t(2099)](x)));
      return;
    }
    const o = this._responseHandlers[t(1170)](a), c = this[t(2311)][t(1170)](a);
    if (c && o && c[t(345)]) try {
      this[t(1726)](a);
    } catch (d) {
      o(d);
      return;
    }
    n(e);
  }
  [s(2257)](x) {
    var t = s;
    const r = Number(x.id), e = this[t(573)][t(1170)](r);
    if (e === void 0) {
      this._onerror(new Error(t(1920) + JSON[t(2099)](x)));
      return;
    }
    if (this[t(573)][t(355)](r), this._progressHandlers[t(355)](r), this[t(1033)](r), ea(x)) e(x);
    else {
      const a = new Oe(x[t(2239)][t(2029)], x[t(2239)][t(1682)], x[t(2239)][t(1841)]);
      e(a);
    }
  }
  get transport() {
    return this._transport;
  }
  async close() {
    var x = s, t;
    await ((t = this[x(228)]) === null || t === void 0 ? void 0 : t[x(1420)]());
  }
  request(x, t, r) {
    const { relatedRequestId: e, resumptionToken: a, onresumptiontoken: n } = r ?? {};
    return new Promise((o, c) => {
      var d = K, u, f, l, v, h, m;
      if (!this[d(228)]) {
        c(new Error(d(1422)));
        return;
      }
      ((u = this[d(1004)]) === null || u === void 0 ? void 0 : u[d(1520)]) === !0 && this[d(590)](x[d(1913)]), (f = r == null ? void 0 : r[d(500)]) === null || f === void 0 || f.throwIfAborted();
      const b = this._requestMessageId++, w = { ...x, jsonrpc: d(1168), id: b };
      r != null && r[d(1660)] && (this[d(960)][d(321)](b, r[d(1660)]), w[d(2012)] = { ...x[d(2012)], _meta: { ...((l = x[d(2012)]) === null || l === void 0 ? void 0 : l[d(2441)]) || {}, progressToken: b } });
      const E = (R) => {
        var k = d, N;
        this[k(573)].delete(b), this[k(960)][k(355)](b), this._cleanupTimeout(b), (N = this[k(228)]) === null || N === void 0 || N[k(1658)]({ jsonrpc: k(1168), method: k(2195), params: { requestId: b, reason: String(R) } }, { relatedRequestId: e, resumptionToken: a, onresumptiontoken: n })[k(206)]((j) => this[k(2304)](new Error(k(759) + j))), c(R);
      };
      this[d(573)][d(321)](b, (R) => {
        var k = d, N;
        if (!(!((N = r == null ? void 0 : r[k(500)]) === null || N === void 0) && N[k(463)])) {
          if (R instanceof Error) return c(R);
          try {
            const j = t.parse(R[k(1690)]);
            o(j);
          } catch (j) {
            c(j);
          }
        }
      }), (v = r == null ? void 0 : r[d(500)]) === null || v === void 0 || v.addEventListener(d(2070), () => {
        var R = d, k;
        E((k = r == null ? void 0 : r[R(500)]) === null || k === void 0 ? void 0 : k[R(1767)]);
      });
      const O = (h = r == null ? void 0 : r[d(1198)]) !== null && h !== void 0 ? h : T2, q = () => E(new Oe(be[d(227)], d(2413), { timeout: O }));
      this._setupTimeout(b, O, r == null ? void 0 : r[d(2010)], q, (m = r == null ? void 0 : r[d(345)]) !== null && m !== void 0 ? m : !1), this._transport.send(w, { relatedRequestId: e, resumptionToken: a, onresumptiontoken: n })[d(206)]((R) => {
        this._cleanupTimeout(b), c(R);
      });
    });
  }
  async notification(x, t) {
    var r = s, e, a;
    if (!this[r(228)]) throw new Error(r(1422));
    if (this.assertNotificationCapability(x[r(1913)]), ((a = (e = this[r(1004)]) === null || e === void 0 ? void 0 : e.debouncedNotificationMethods) !== null && a !== void 0 ? a : [])[r(1502)](x.method) && !x[r(2012)] && !(t != null && t[r(899)])) {
      if (this[r(702)][r(179)](x[r(1913)])) return;
      this._pendingDebouncedNotifications[r(540)](x[r(1913)]), Promise[r(595)]()[r(2367)](() => {
        var d = r, u;
        if (this._pendingDebouncedNotifications[d(355)](x[d(1913)]), !this[d(228)]) return;
        const f = { ...x, jsonrpc: d(1168) };
        (u = this._transport) === null || u === void 0 || u[d(1658)](f, t)[d(206)]((l) => this[d(2304)](l));
      });
      return;
    }
    const c = { ...x, jsonrpc: r(1168) };
    await this[r(228)][r(1658)](c, t);
  }
  setRequestHandler(x, t) {
    var r = s;
    const e = x.shape[r(1913)][r(2109)];
    this.assertRequestHandlerCapability(e), this._requestHandlers[r(321)](e, (a, n) => {
      var o = r;
      return Promise.resolve(t(x[o(734)](a), n));
    });
  }
  [s(145)](x) {
    var t = s;
    this[t(174)].delete(x);
  }
  [s(2263)](x) {
    var t = s;
    if (this[t(174)][t(179)](x)) throw new Error(t(1644) + x + t(781));
  }
  [s(335)](x, t) {
    var r = s;
    this._notificationHandlers[r(321)](x.shape[r(1913)][r(2109)], (e) => Promise[r(595)](t(x[r(734)](e))));
  }
  [s(506)](x) {
    var t = s;
    this[t(1076)][t(355)](x);
  }
}
function D2(i, x) {
  var t = s;
  return Object.entries(x)[t(2071)]((r, [e, a]) => (a && typeof a == "object" ? r[e] = r[e] ? { ...r[e], ...a } : a : r[e] = a, r), { ...i });
}
var Xe = { exports: {} }, j2 = Xe.exports, xa;
function M2() {
  var i = s;
  return xa ? Xe[i(1117)] : (xa = 1, function(x, t) {
    (function(r, e) {
      e(t);
    })(j2, function(r) {
      var e = K;
      function a() {
        for (var I = K, p = arguments[I(1407)], g = Array(p), y = 0; y < p; y++)
          g[y] = arguments[y];
        if (g.length > 1) {
          g[0] = g[0][I(571)](0, -1);
          for (var U = g.length - 1, z = 1; z < U; ++z)
            g[z] = g[z].slice(1, -1);
          return g[U] = g[U][I(571)](1), g.join("");
        } else return g[0];
      }
      function n(I) {
        return "(?:" + I + ")";
      }
      function o(I) {
        var p = K;
        return I === void 0 ? "undefined" : I === null ? p(599) : Object[p(2023)][p(349)][p(2497)](I)[p(1363)](" ")[p(2211)]()[p(1363)]("]")[p(1550)]()[p(1418)]();
      }
      function c(I) {
        return I.toUpperCase();
      }
      function d(I) {
        var p = K;
        return I != null ? I instanceof Array ? I : typeof I[p(1407)] !== p(2240) || I[p(1363)] || I.setInterval || I[p(2497)] ? [I] : Array[p(2023)][p(571)].call(I) : [];
      }
      function u(I, p) {
        var g = I;
        if (p) for (var y in p)
          g[y] = p[y];
        return g;
      }
      function f(I) {
        var p = K, g = p(815), y = p(604), U = a(y, p(1293)), z = n(n(p(554) + U + "%" + U + U + "%" + U + U) + "|" + n(p(513) + U + "%" + U + U) + "|" + n("%" + U + U)), n0 = p(1081), u0 = p(425), R0 = a(n0, u0), j0 = I ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", W0 = I ? "[\\uE000-\\uF8FF]" : "[]", E0 = a(g, y, p(1721), j0);
        n(g + a(g, y, "[\\+\\-\\.]") + "*"), n(n(z + "|" + a(E0, u0, p(864))) + "*");
        var D0 = n(n(p(408)) + "|" + n("2[0-4]" + y) + "|" + n("1" + y + y) + "|" + n("0?[1-9]" + y) + p(733) + y), Z0 = n(D0 + "\\." + D0 + "\\." + D0 + "\\." + D0), g0 = n(U + "{1,4}"), $0 = n(n(g0 + "\\:" + g0) + "|" + Z0), K0 = n(n(g0 + "\\:") + p(575) + $0), z0 = n(p(2216) + n(g0 + "\\:") + p(1924) + $0), ke = n(n(g0) + p(566) + n(g0 + "\\:") + p(1673) + $0), oe = n(n(n(g0 + "\\:") + p(1880) + g0) + p(566) + n(g0 + "\\:") + p(122) + $0), ce = n(n(n(g0 + "\\:") + p(259) + g0) + p(566) + n(g0 + "\\:") + "{2}" + $0), ze = n(n(n(g0 + "\\:") + p(115) + g0) + p(566) + g0 + "\\:" + $0), Re = n(n(n(g0 + "\\:") + p(2158) + g0) + p(566) + $0), te = n(n(n(g0 + "\\:") + p(1399) + g0) + p(566) + g0), de = n(n(n(g0 + "\\:") + p(482) + g0) + p(566)), ve = n([K0, z0, ke, oe, ce, ze, Re, te, de][p(152)]("|")), Ce = n(n(E0 + "|" + z) + "+");
        n(p(970) + U + p(1970) + a(E0, u0, p(864)) + "+"), n(n(z + "|" + a(E0, u0)) + "*");
        var ue = n(z + "|" + a(E0, u0, p(2264)));
        return n(n(z + "|" + a(E0, u0, p(1890))) + "+"), n(n(ue + "|" + a(p(797), W0)) + "*"), { NOT_SCHEME: new RegExp(a(p(698), g, y, "[\\+\\-\\.]"), "g"), NOT_USERINFO: new RegExp(a("[^\\%\\:]", E0, u0), "g"), NOT_HOST: new RegExp(a(p(2430), E0, u0), "g"), NOT_PATH: new RegExp(a(p(182), E0, u0), "g"), NOT_PATH_NOSCHEME: new RegExp(a(p(1405), E0, u0), "g"), NOT_QUERY: new RegExp(a(p(266), E0, u0, p(1871), W0), "g"), NOT_FRAGMENT: new RegExp(a("[^\\%]", E0, u0, "[\\:\\@\\/\\?]"), "g"), ESCAPE: new RegExp(a(p(698), E0, u0), "g"), UNRESERVED: new RegExp(E0, "g"), OTHER_CHARS: new RegExp(a(p(266), E0, R0), "g"), PCT_ENCODED: new RegExp(z, "g"), IPV4ADDRESS: new RegExp("^(" + Z0 + ")$"), IPV6ADDRESS: new RegExp("^\\[?(" + ve + ")" + n(n(p(1571) + U + p(2110)) + "(" + Ce + ")") + p(1611)) };
      }
      var l = f(!1), v = f(!0), h = /* @__PURE__ */ function() {
        function I(p, g) {
          var y = K, U = [], z = !0, n0 = !1, u0 = void 0;
          try {
            for (var R0 = p[Symbol[y(2152)]](), j0; !(z = (j0 = R0.next())[y(1804)]) && (U[y(365)](j0.value), !(g && U.length === g)); z = !0)
              ;
          } catch (W0) {
            n0 = !0, u0 = W0;
          } finally {
            try {
              !z && R0.return && R0[y(2132)]();
            } finally {
              if (n0) throw u0;
            }
          }
          return U;
        }
        return function(p, g) {
          var y = K;
          if (Array[y(242)](p)) return p;
          if (Symbol[y(2152)] in Object(p)) return I(p, g);
          throw new TypeError(y(1144));
        };
      }(), m = function(I) {
        var p = K;
        if (Array[p(242)](I)) {
          for (var g = 0, y = Array(I[p(1407)]); g < I.length; g++) y[g] = I[g];
          return y;
        } else return Array[p(371)](I);
      }, b = 2147483647, w = 36, E = 1, O = 26, q = 38, R = 700, k = 72, N = 128, j = "-", D = /^xn--/, M = /[^\0-\x7E]/, F = /[\x2E\u3002\uFF0E\uFF61]/g, C = { overflow: "Overflow: input needs wider integers to process", "not-basic": e(307), "invalid-input": e(894) }, L = w - E, H = Math.floor, V = String[e(326)];
      function J(I) {
        throw new RangeError(C[I]);
      }
      function c0(I, p) {
        for (var g = [], y = I.length; y--; )
          g[y] = p(I[y]);
        return g;
      }
      function d0(I, p) {
        var g = e, y = I[g(1363)]("@"), U = "";
        y[g(1407)] > 1 && (U = y[0] + "@", I = y[1]), I = I.replace(F, ".");
        var z = I[g(1363)]("."), n0 = c0(z, p).join(".");
        return U + n0;
      }
      function f0(I) {
        for (var p = e, g = [], y = 0, U = I.length; y < U; ) {
          var z = I[p(574)](y++);
          if (z >= 55296 && z <= 56319 && y < U) {
            var n0 = I[p(574)](y++);
            (n0 & 64512) == 56320 ? g[p(365)](((z & 1023) << 10) + (n0 & 1023) + 65536) : (g[p(365)](z), y--);
          } else g.push(z);
        }
        return g;
      }
      var i0 = function(p) {
        var g = e;
        return String[g(1850)].apply(String, m(p));
      }, l0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : w;
      }, S0 = function(p, g) {
        return p + 22 + 75 * (p < 26) - ((g != 0) << 5);
      }, b0 = function(p, g, y) {
        var U = 0;
        for (p = y ? H(p / R) : p >> 1, p += H(p / g); p > L * O >> 1; U += w)
          p = H(p / L);
        return H(U + (L + 1) * p / (p + q));
      }, M0 = function(p) {
        var g = e, y = [], U = p[g(1407)], z = 0, n0 = N, u0 = k, R0 = p.lastIndexOf(j);
        R0 < 0 && (R0 = 0);
        for (var j0 = 0; j0 < R0; ++j0)
          p[g(574)](j0) >= 128 && J(g(125)), y[g(365)](p[g(574)](j0));
        for (var W0 = R0 > 0 ? R0 + 1 : 0; W0 < U; ) {
          for (var E0 = z, D0 = 1, Z0 = w; ; Z0 += w) {
            W0 >= U && J(g(354));
            var g0 = l0(p[g(574)](W0++));
            (g0 >= w || g0 > H((b - z) / D0)) && J(g(493)), z += g0 * D0;
            var $0 = Z0 <= u0 ? E : Z0 >= u0 + O ? O : Z0 - u0;
            if (g0 < $0) break;
            var K0 = w - $0;
            D0 > H(b / K0) && J(g(493)), D0 *= K0;
          }
          var z0 = y[g(1407)] + 1;
          u0 = b0(z - E0, z0, E0 == 0), H(z / z0) > b - n0 && J("overflow"), n0 += H(z / z0), z %= z0, y[g(890)](z++, 0, n0);
        }
        return String[g(1850)].apply(String, y);
      }, k0 = function(p) {
        var g = e, y = [];
        p = f0(p);
        var U = p[g(1407)], z = N, n0 = 0, u0 = k, R0 = !0, j0 = !1, W0 = void 0;
        try {
          for (var E0 = p[Symbol[g(2152)]](), D0; !(R0 = (D0 = E0[g(2274)]())[g(1804)]); R0 = !0) {
            var Z0 = D0.value;
            Z0 < 128 && y[g(365)](V(Z0));
          }
        } catch (Je) {
          j0 = !0, W0 = Je;
        } finally {
          try {
            !R0 && E0[g(2132)] && E0[g(2132)]();
          } finally {
            if (j0) throw W0;
          }
        }
        var g0 = y.length, $0 = g0;
        for (g0 && y.push(j); $0 < U; ) {
          var K0 = b, z0 = !0, ke = !1, oe = void 0;
          try {
            for (var ce = p[Symbol.iterator](), ze; !(z0 = (ze = ce.next())[g(1804)]); z0 = !0) {
              var Re = ze.value;
              Re >= z && Re < K0 && (K0 = Re);
            }
          } catch (Je) {
            ke = !0, oe = Je;
          } finally {
            try {
              !z0 && ce[g(2132)] && ce[g(2132)]();
            } finally {
              if (ke) throw oe;
            }
          }
          var te = $0 + 1;
          K0 - z > H((b - n0) / te) && J(g(493)), n0 += (K0 - z) * te, z = K0;
          var de = !0, ve = !1, Ce = void 0;
          try {
            for (var ue = p[Symbol.iterator](), br; !(de = (br = ue.next())[g(1804)]); de = !0) {
              var yr = br[g(2109)];
              if (yr < z && ++n0 > b && J(g(493)), yr == z) {
                for (var ox = n0, cx = w; ; cx += w) {
                  var dx = cx <= u0 ? E : cx >= u0 + O ? O : cx - u0;
                  if (ox < dx) break;
                  var wr = ox - dx, Sr = w - dx;
                  y[g(365)](V(S0(dx + wr % Sr, 0))), ox = H(wr / Sr);
                }
                y[g(365)](V(S0(ox, 0))), u0 = b0(n0, te, $0 == g0), n0 = 0, ++$0;
              }
            }
          } catch (Je) {
            ve = !0, Ce = Je;
          } finally {
            try {
              !de && ue[g(2132)] && ue[g(2132)]();
            } finally {
              if (ve) throw Ce;
            }
          }
          ++n0, ++z;
        }
        return y[g(152)]("");
      }, Q0 = function(p) {
        return d0(p, function(g) {
          var y = K;
          return D[y(937)](g) ? M0(g[y(571)](4).toLowerCase()) : g;
        });
      }, A = function(p) {
        return d0(p, function(g) {
          var y = K;
          return M.test(g) ? y(1864) + k0(g) : g;
        });
      }, T = { version: "2.1.0", ucs2: { decode: f0, encode: i0 }, decode: M0, encode: k0, toASCII: A, toUnicode: Q0 }, $ = {};
      function G(I) {
        var p = e, g = I[p(574)](0), y = void 0;
        return g < 16 ? y = "%0" + g[p(349)](16)[p(2031)]() : g < 128 ? y = "%" + g[p(349)](16).toUpperCase() : g < 2048 ? y = "%" + (g >> 6 | 192).toString(16)[p(2031)]() + "%" + (g & 63 | 128)[p(349)](16)[p(2031)]() : y = "%" + (g >> 12 | 224).toString(16)[p(2031)]() + "%" + (g >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (g & 63 | 128)[p(349)](16).toUpperCase(), y;
      }
      function Q(I) {
        for (var p = e, g = "", y = 0, U = I[p(1407)]; y < U; ) {
          var z = parseInt(I[p(366)](y + 1, 2), 16);
          if (z < 128) g += String[p(326)](z), y += 3;
          else if (z >= 194 && z < 224) {
            if (U - y >= 6) {
              var n0 = parseInt(I[p(366)](y + 4, 2), 16);
              g += String[p(326)]((z & 31) << 6 | n0 & 63);
            } else g += I[p(366)](y, 6);
            y += 6;
          } else if (z >= 224) {
            if (U - y >= 9) {
              var u0 = parseInt(I[p(366)](y + 4, 2), 16), R0 = parseInt(I.substr(y + 7, 2), 16);
              g += String[p(326)]((z & 15) << 12 | (u0 & 63) << 6 | R0 & 63);
            } else g += I[p(366)](y, 9);
            y += 9;
          } else g += I[p(366)](y, 3), y += 3;
        }
        return g;
      }
      function W(I, p) {
        var g = e;
        function y(U) {
          var z = K, n0 = Q(U);
          return n0[z(877)](p[z(2032)]) ? n0 : U;
        }
        return I[g(167)] && (I.scheme = String(I[g(167)])[g(139)](p.PCT_ENCODED, y)[g(1418)]()[g(139)](p[g(267)], "")), I[g(1463)] !== void 0 && (I.userinfo = String(I[g(1463)])[g(139)](p.PCT_ENCODED, y)[g(139)](p[g(1308)], G)[g(139)](p[g(948)], c)), I[g(607)] !== void 0 && (I[g(607)] = String(I[g(607)])[g(139)](p.PCT_ENCODED, y).toLowerCase()[g(139)](p.NOT_HOST, G)[g(139)](p.PCT_ENCODED, c)), I.path !== void 0 && (I[g(1512)] = String(I.path).replace(p[g(948)], y)[g(139)](I.scheme ? p.NOT_PATH : p.NOT_PATH_NOSCHEME, G)[g(139)](p.PCT_ENCODED, c)), I[g(2098)] !== void 0 && (I.query = String(I[g(2098)]).replace(p[g(948)], y)[g(139)](p.NOT_QUERY, G)[g(139)](p.PCT_ENCODED, c)), I[g(1259)] !== void 0 && (I[g(1259)] = String(I[g(1259)]).replace(p[g(948)], y).replace(p[g(1539)], G).replace(p[g(948)], c)), I;
      }
      function Y(I) {
        var p = e;
        return I[p(139)](/^0*(.*)/, "$1") || "0";
      }
      function o0(I, p) {
        var g = e, y = I[g(877)](p[g(426)]) || [], U = h(y, 2), z = U[1];
        return z ? z[g(1363)](".").map(Y).join(".") : I;
      }
      function s0(I, p) {
        var g = e, y = I[g(877)](p[g(1876)]) || [], U = h(y, 3), z = U[1], n0 = U[2];
        if (z) {
          for (var u0 = z[g(1418)]().split("::")[g(996)](), R0 = h(u0, 2), j0 = R0[0], W0 = R0[1], E0 = W0 ? W0[g(1363)](":")[g(2159)](Y) : [], D0 = j0[g(1363)](":")[g(2159)](Y), Z0 = p.IPV4ADDRESS[g(937)](D0[D0[g(1407)] - 1]), g0 = Z0 ? 7 : 8, $0 = D0[g(1407)] - g0, K0 = Array(g0), z0 = 0; z0 < g0; ++z0)
            K0[z0] = E0[z0] || D0[$0 + z0] || "";
          Z0 && (K0[g0 - 1] = o0(K0[g0 - 1], p));
          var ke = K0[g(2071)](function(te, de, ve) {
            var Ce = g;
            if (!de || de === "0") {
              var ue = te[te.length - 1];
              ue && ue.index + ue[Ce(1407)] === ve ? ue.length++ : te[Ce(365)]({ index: ve, length: 1 });
            }
            return te;
          }, []), oe = ke.sort(function(te, de) {
            var ve = g;
            return de.length - te[ve(1407)];
          })[0], ce = void 0;
          if (oe && oe.length > 1) {
            var ze = K0[g(571)](0, oe[g(1748)]), Re = K0[g(571)](oe[g(1748)] + oe[g(1407)]);
            ce = ze.join(":") + "::" + Re[g(152)](":");
          } else ce = K0[g(152)](":");
          return n0 && (ce += "%" + n0), ce;
        } else return I;
      }
      var _ = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, L0 = "".match(/(){0}/)[1] === void 0;
      function T0(I) {
        var p = e, g = arguments[p(1407)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = {}, U = g[p(1663)] !== !1 ? v : l;
        g.reference === p(2331) && (I = (g.scheme ? g[p(167)] + ":" : "") + "//" + I);
        var z = I[p(877)](_);
        if (z) {
          L0 ? (y[p(167)] = z[1], y.userinfo = z[3], y[p(607)] = z[4], y[p(608)] = parseInt(z[5], 10), y[p(1512)] = z[6] || "", y[p(2098)] = z[7], y.fragment = z[8], isNaN(y[p(608)]) && (y.port = z[5])) : (y[p(167)] = z[1] || void 0, y.userinfo = I[p(1679)]("@") !== -1 ? z[3] : void 0, y[p(607)] = I[p(1679)]("//") !== -1 ? z[4] : void 0, y[p(608)] = parseInt(z[5], 10), y.path = z[6] || "", y[p(2098)] = I[p(1679)]("?") !== -1 ? z[7] : void 0, y.fragment = I[p(1679)]("#") !== -1 ? z[8] : void 0, isNaN(y.port) && (y.port = I[p(877)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? z[4] : void 0)), y[p(607)] && (y[p(607)] = s0(o0(y[p(607)], U), U)), y[p(167)] === void 0 && y.userinfo === void 0 && y[p(607)] === void 0 && y[p(608)] === void 0 && !y[p(1512)] && y[p(2098)] === void 0 ? y[p(1005)] = p(1513) : y[p(167)] === void 0 ? y[p(1005)] = "relative" : y[p(1259)] === void 0 ? y.reference = p(2011) : y[p(1005)] = p(892), g[p(1005)] && g[p(1005)] !== p(2331) && g.reference !== y[p(1005)] && (y[p(2239)] = y[p(2239)] || p(1292) + g.reference + p(1020));
          var n0 = $[(g[p(167)] || y[p(167)] || "")[p(1418)]()];
          if (!g[p(1159)] && (!n0 || !n0[p(1159)])) {
            if (y[p(607)] && (g[p(1485)] || n0 && n0.domainHost)) try {
              y[p(607)] = T[p(806)](y[p(607)][p(139)](U[p(948)], Q).toLowerCase());
            } catch (u0) {
              y[p(2239)] = y.error || p(1205) + u0;
            }
            W(y, l);
          } else W(y, U);
          n0 && n0[p(734)] && n0[p(734)](y, g);
        } else y[p(2239)] = y[p(2239)] || p(945);
        return y;
      }
      function U0(I, p) {
        var g = e, y = p[g(1663)] !== !1 ? v : l, U = [];
        return I[g(1463)] !== void 0 && (U[g(365)](I[g(1463)]), U[g(365)]("@")), I[g(607)] !== void 0 && U[g(365)](s0(o0(String(I[g(607)]), y), y)[g(139)](y[g(1876)], function(z, n0, u0) {
          return "[" + n0 + (u0 ? "%25" + u0 : "") + "]";
        })), (typeof I[g(608)] === g(2240) || typeof I[g(608)] === g(2254)) && (U[g(365)](":"), U[g(365)](String(I[g(608)]))), U.length ? U[g(152)]("") : void 0;
      }
      var w0 = /^\.\.?\//, G0 = /^\/\.(\/|$)/, ne = /^\/\.\.(\/|$)/, Y0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function A0(I) {
        for (var p = e, g = []; I[p(1407)]; )
          if (I[p(877)](w0)) I = I.replace(w0, "");
          else if (I[p(877)](G0)) I = I.replace(G0, "/");
          else if (I[p(877)](ne)) I = I[p(139)](ne, "/"), g.pop();
          else if (I === "." || I === "..") I = "";
          else {
            var y = I[p(877)](Y0);
            if (y) {
              var U = y[0];
              I = I.slice(U.length), g[p(365)](U);
            } else throw new Error(p(902));
          }
        return g.join("");
      }
      function V0(I) {
        var p = e, g = arguments[p(1407)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = g[p(1663)] ? v : l, U = [], z = $[(g[p(167)] || I.scheme || "")[p(1418)]()];
        if (z && z.serialize && z.serialize(I, g), I[p(607)] && !y[p(1876)][p(937)](I.host)) {
          if (g.domainHost || z && z[p(1485)]) try {
            I[p(607)] = g[p(1663)] ? T[p(149)](I[p(607)]) : T[p(806)](I[p(607)][p(139)](y[p(948)], Q)[p(1418)]());
          } catch (R0) {
            I[p(2239)] = I[p(2239)] || p(1567) + (g[p(1663)] ? p(236) : p(1806)) + p(310) + R0;
          }
        }
        W(I, y), g[p(1005)] !== p(2331) && I[p(167)] && (U[p(365)](I[p(167)]), U[p(365)](":"));
        var n0 = U0(I, g);
        if (n0 !== void 0 && (g[p(1005)] !== p(2331) && U[p(365)]("//"), U[p(365)](n0), I[p(1512)] && I[p(1512)][p(1737)](0) !== "/" && U.push("/")), I[p(1512)] !== void 0) {
          var u0 = I[p(1512)];
          !g[p(2440)] && (!z || !z[p(2440)]) && (u0 = A0(u0)), n0 === void 0 && (u0 = u0[p(139)](/^\/\//, p(2368))), U[p(365)](u0);
        }
        return I[p(2098)] !== void 0 && (U[p(365)]("?"), U[p(365)](I.query)), I.fragment !== void 0 && (U[p(365)]("#"), U[p(365)](I[p(1259)])), U[p(152)]("");
      }
      function _0(I, p) {
        var g = e, y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, U = arguments[3], z = {};
        return !U && (I = T0(V0(I, y), y), p = T0(V0(p, y), y)), y = y || {}, !y.tolerant && p[g(167)] ? (z[g(167)] = p[g(167)], z[g(1463)] = p.userinfo, z[g(607)] = p[g(607)], z[g(608)] = p.port, z[g(1512)] = A0(p[g(1512)] || ""), z[g(2098)] = p[g(2098)]) : (p.userinfo !== void 0 || p[g(607)] !== void 0 || p.port !== void 0 ? (z[g(1463)] = p[g(1463)], z[g(607)] = p[g(607)], z[g(608)] = p[g(608)], z[g(1512)] = A0(p[g(1512)] || ""), z[g(2098)] = p[g(2098)]) : (p[g(1512)] ? (p[g(1512)][g(1737)](0) === "/" ? z[g(1512)] = A0(p.path) : ((I[g(1463)] !== void 0 || I[g(607)] !== void 0 || I[g(608)] !== void 0) && !I.path ? z[g(1512)] = "/" + p.path : I[g(1512)] ? z.path = I[g(1512)][g(571)](0, I[g(1512)][g(1646)]("/") + 1) + p[g(1512)] : z[g(1512)] = p[g(1512)], z[g(1512)] = A0(z[g(1512)])), z[g(2098)] = p[g(2098)]) : (z[g(1512)] = I[g(1512)], p[g(2098)] !== void 0 ? z[g(2098)] = p[g(2098)] : z[g(2098)] = I[g(2098)]), z[g(1463)] = I[g(1463)], z.host = I[g(607)], z[g(608)] = I[g(608)]), z[g(167)] = I.scheme), z.fragment = p[g(1259)], z;
      }
      function Le(I, p, g) {
        var y = e, U = u({ scheme: y(599) }, g);
        return V0(_0(T0(I, U), T0(p, U), U, !0), U);
      }
      function jx(I, p) {
        var g = e;
        return typeof I === g(2254) ? I = V0(T0(I, p), p) : o(I) === g(1526) && (I = T0(V0(I, p), p)), I;
      }
      function Mx(I, p, g) {
        var y = e;
        return typeof I === y(2254) ? I = V0(T0(I, g), g) : o(I) === y(1526) && (I = V0(I, g)), typeof p === y(2254) ? p = V0(T0(p, g), g) : o(p) === y(1526) && (p = V0(p, g)), I === p;
      }
      function yn(I, p) {
        var g = e;
        return I && I[g(349)]().replace(!p || !p[g(1663)] ? l[g(2395)] : v[g(2395)], G);
      }
      function me(I, p) {
        var g = e;
        return I && I.toString()[g(139)](!p || !p[g(1663)] ? l[g(948)] : v[g(948)], Q);
      }
      var Ke = { scheme: e(1206), domainHost: !0, parse: function(p, g) {
        var y = e;
        return !p[y(607)] && (p[y(2239)] = p[y(2239)] || y(2329)), p;
      }, serialize: function(p, g) {
        var y = e, U = String(p[y(167)])[y(1418)]() === y(1825);
        return (p[y(608)] === (U ? 443 : 80) || p[y(608)] === "") && (p[y(608)] = void 0), !p[y(1512)] && (p[y(1512)] = "/"), p;
      } }, ur = { scheme: e(1825), domainHost: Ke.domainHost, parse: Ke.parse, serialize: Ke[e(1899)] };
      function fr(I) {
        var p = e;
        return typeof I[p(2232)] === p(968) ? I[p(2232)] : String(I[p(167)])[p(1418)]() === p(1926);
      }
      var Be = { scheme: "ws", domainHost: !0, parse: function(p, g) {
        var y = e, U = p;
        return U[y(2232)] = fr(U), U.resourceName = (U[y(1512)] || "/") + (U[y(2098)] ? "?" + U[y(2098)] : ""), U[y(1512)] = void 0, U[y(2098)] = void 0, U;
      }, serialize: function(p, g) {
        var y = e;
        if ((p[y(608)] === (fr(p) ? 443 : 80) || p[y(608)] === "") && (p[y(608)] = void 0), typeof p[y(2232)] === y(968) && (p.scheme = p[y(2232)] ? "wss" : "ws", p[y(2232)] = void 0), p[y(705)]) {
          var U = p.resourceName[y(1363)]("?"), z = h(U, 2), n0 = z[0], u0 = z[1];
          p[y(1512)] = n0 && n0 !== "/" ? n0 : void 0, p[y(2098)] = u0, p[y(705)] = void 0;
        }
        return p.fragment = void 0, p;
      } }, lr = { scheme: "wss", domainHost: Be[e(1485)], parse: Be.parse, serialize: Be[e(1899)] }, wn = {}, hr = "[A-Za-z0-9\\-\\.\\_\\~" + e(367) + "]", ie = "[0-9A-Fa-f]", Sn = n(n("%[EFef]" + ie + "%" + ie + ie + "%" + ie + ie) + "|" + n(e(513) + ie + "%" + ie + ie) + "|" + n("%" + ie + ie)), kn = e(622), En = e(853), Pn = a(En, e(317)), In = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", Rn = new RegExp(hr, "g"), $e = new RegExp(Sn, "g"), Cn = new RegExp(a(e(698), kn, e(1472), e(962), Pn), "g"), pr = new RegExp(a("[^]", hr, In), "g"), Fn = pr;
      function Lx(I) {
        var p = e, g = Q(I);
        return g[p(877)](Rn) ? g : I;
      }
      var mr = { scheme: e(401), parse: function(p, g) {
        var y = e, U = p, z = U.to = U[y(1512)] ? U[y(1512)].split(",") : [];
        if (U[y(1512)] = void 0, U[y(2098)]) {
          for (var n0 = !1, u0 = {}, R0 = U[y(2098)][y(1363)]("&"), j0 = 0, W0 = R0[y(1407)]; j0 < W0; ++j0) {
            var E0 = R0[j0].split("=");
            switch (E0[0]) {
              case "to":
                for (var D0 = E0[1].split(","), Z0 = 0, g0 = D0[y(1407)]; Z0 < g0; ++Z0)
                  z.push(D0[Z0]);
                break;
              case y(602):
                U[y(602)] = me(E0[1], g);
                break;
              case "body":
                U[y(2265)] = me(E0[1], g);
                break;
              default:
                n0 = !0, u0[me(E0[0], g)] = me(E0[1], g);
                break;
            }
          }
          n0 && (U[y(1652)] = u0);
        }
        U.query = void 0;
        for (var $0 = 0, K0 = z[y(1407)]; $0 < K0; ++$0) {
          var z0 = z[$0][y(1363)]("@");
          if (z0[0] = me(z0[0]), g[y(1159)]) z0[1] = me(z0[1], g)[y(1418)]();
          else try {
            z0[1] = T[y(806)](me(z0[1], g)[y(1418)]());
          } catch (ke) {
            U[y(2239)] = U[y(2239)] || y(564) + ke;
          }
          z[$0] = z0[y(152)]("@");
        }
        return U;
      }, serialize: function(p, g) {
        var y = e, U = p, z = d(p.to);
        if (z) {
          for (var n0 = 0, u0 = z.length; n0 < u0; ++n0) {
            var R0 = String(z[n0]), j0 = R0[y(1646)]("@"), W0 = R0[y(571)](0, j0)[y(139)]($e, Lx)[y(139)]($e, c)[y(139)](Cn, G), E0 = R0.slice(j0 + 1);
            try {
              E0 = g.iri ? T[y(149)](E0) : T[y(806)](me(E0, g)[y(1418)]());
            } catch ($0) {
              U[y(2239)] = U[y(2239)] || "Email address's domain name can not be converted to " + (g[y(1663)] ? y(236) : "ASCII") + y(310) + $0;
            }
            z[n0] = W0 + "@" + E0;
          }
          U[y(1512)] = z.join(",");
        }
        var D0 = p.headers = p[y(1652)] || {};
        p.subject && (D0[y(602)] = p.subject), p.body && (D0.body = p[y(2265)]);
        var Z0 = [];
        for (var g0 in D0)
          D0[g0] !== wn[g0] && Z0[y(365)](g0.replace($e, Lx)[y(139)]($e, c)[y(139)](pr, G) + "=" + D0[g0][y(139)]($e, Lx)[y(139)]($e, c)[y(139)](Fn, G));
        return Z0[y(1407)] && (U.query = Z0[y(152)]("&")), U;
      } }, Nn = /^([^\:]+)\:(.*)/, vr = { scheme: e(1354), parse: function(p, g) {
        var y = e, U = p[y(1512)] && p.path.match(Nn), z = p;
        if (U) {
          var n0 = g[y(167)] || z[y(167)] || y(1354), u0 = U[1][y(1418)](), R0 = U[2], j0 = n0 + ":" + (g[y(373)] || u0), W0 = $[j0];
          z[y(373)] = u0, z[y(154)] = R0, z[y(1512)] = void 0, W0 && (z = W0[y(734)](z, g));
        } else z[y(2239)] = z.error || "URN can not be parsed.";
        return z;
      }, serialize: function(p, g) {
        var y = e, U = g[y(167)] || p.scheme || y(1354), z = p[y(373)], n0 = U + ":" + (g.nid || z), u0 = $[n0];
        u0 && (p = u0[y(1899)](p, g));
        var R0 = p, j0 = p[y(154)];
        return R0.path = (z || g.nid) + ":" + j0, R0;
      } }, qn = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, gr = { scheme: e(2320), parse: function(p, g) {
        var y = e, U = p;
        return U[y(729)] = U.nss, U[y(154)] = void 0, !g.tolerant && (!U[y(729)] || !U[y(729)][y(877)](qn)) && (U[y(2239)] = U[y(2239)] || y(1986)), U;
      }, serialize: function(p, g) {
        var y = e, U = p;
        return U[y(154)] = (p[y(729)] || "")[y(1418)](), U;
      } };
      $[Ke.scheme] = Ke, $[ur.scheme] = ur, $[Be[e(167)]] = Be, $[lr.scheme] = lr, $[mr[e(167)]] = mr, $[vr[e(167)]] = vr, $[gr[e(167)]] = gr, r[e(424)] = $, r[e(1379)] = G, r[e(2410)] = Q, r[e(734)] = T0, r[e(2248)] = A0, r.serialize = V0, r[e(1770)] = _0, r[e(595)] = Le, r.normalize = jx, r[e(696)] = Mx, r.escapeComponent = yn, r.unescapeComponent = me, Object[e(612)](r, e(2326), { value: !0 });
    });
  }(Xe, Xe[i(1117)]), Xe.exports);
}
var Bx, ta;
function or() {
  return ta || (ta = 1, Bx = function i(x, t) {
    var r = K;
    if (x === t) return !0;
    if (x && t && typeof x == r(1526) && typeof t == "object") {
      if (x[r(151)] !== t[r(151)]) return !1;
      var e, a, n;
      if (Array.isArray(x)) {
        if (e = x.length, e != t[r(1407)]) return !1;
        for (a = e; a-- !== 0; ) if (!i(x[a], t[a])) return !1;
        return !0;
      }
      if (x[r(151)] === RegExp) return x[r(1200)] === t[r(1200)] && x[r(1531)] === t[r(1531)];
      if (x[r(441)] !== Object.prototype[r(441)]) return x[r(441)]() === t.valueOf();
      if (x[r(349)] !== Object[r(2023)][r(349)]) return x[r(349)]() === t[r(349)]();
      if (n = Object[r(1087)](x), e = n.length, e !== Object.keys(t).length) return !1;
      for (a = e; a-- !== 0; ) if (!Object[r(2023)][r(676)][r(2497)](t, n[a])) return !1;
      for (a = e; a-- !== 0; ) {
        var o = n[a];
        if (!i(x[o], t[o])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), Bx;
}
var Jx, ra;
function L2() {
  return ra || (ra = 1, Jx = function(x) {
    for (var t = K, r = 0, e = x[t(1407)], a = 0, n; a < e; )
      r++, n = x[t(574)](a++), n >= 55296 && n <= 56319 && a < e && (n = x[t(574)](a), (n & 64512) == 56320 && a++);
    return r;
  }), Jx;
}
var Gx, aa;
function Ze() {
  var i = s;
  if (aa) return Gx;
  aa = 1, Gx = { copy: x, checkDataType: t, checkDataTypes: r, coerceToTypes: a, toHash: n, getProperty: d, escapeQuotes: u, equal: or(), ucs2length: L2(), varOccurences: f, varReplace: l, schemaHasRules: v, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: b, getPathExpr: w, getPath: E, getData: R, unescapeFragment: N, unescapeJsonPointer: M, escapeFragment: j, escapeJsonPointer: D };
  function x(F, C) {
    C = C || {};
    for (var L in F) C[L] = F[L];
    return C;
  }
  function t(F, C, L, H) {
    var V = K, J = V(H ? 1934 : 946), c0 = H ? V(1518) : " && ", d0 = H ? "!" : "", f0 = H ? "" : "!";
    switch (F) {
      case V(599):
        return C + J + "null";
      case V(1040):
        return d0 + "Array.isArray(" + C + ")";
      case V(1526):
        return "(" + d0 + C + c0 + V(1959) + C + J + '"object"' + c0 + f0 + V(295) + C + "))";
      case V(197):
        return V(263) + C + J + V(869) + c0 + f0 + "(" + C + V(858) + c0 + C + J + C + (L ? c0 + d0 + "isFinite(" + C + ")" : "") + ")";
      case V(2240):
        return "(typeof " + C + J + '"' + F + '"' + (L ? c0 + d0 + V(2454) + C + ")" : "") + ")";
      default:
        return "typeof " + C + J + '"' + F + '"';
    }
  }
  function r(F, C, L) {
    var H = K;
    switch (F[H(1407)]) {
      case 1:
        return t(F[0], C, L, !0);
      default:
        var V = "", J = n(F);
        J[H(1040)] && J.object && (V = J[H(599)] ? "(" : "(!" + C + H(1518), V += H(1959) + C + H(510), delete J[H(599)], delete J[H(1040)], delete J[H(1526)]), J[H(2240)] && delete J[H(197)];
        for (var c0 in J) V += (V ? " && " : "") + t(c0, C, L, !0);
        return V;
    }
  }
  var e = n([i(2254), i(2240), "integer", i(968), i(599)]);
  function a(F, C) {
    var L = i;
    if (Array[L(242)](C)) {
      for (var H = [], V = 0; V < C[L(1407)]; V++) {
        var J = C[V];
        (e[J] || F === L(1040) && J === "array") && (H[H[L(1407)]] = J);
      }
      if (H[L(1407)]) return H;
    } else {
      if (e[C]) return [C];
      if (F === L(1040) && C === L(1040)) return [L(1040)];
    }
  }
  function n(F) {
    for (var C = i, L = {}, H = 0; H < F[C(1407)]; H++) L[F[H]] = !0;
    return L;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function d(F) {
    var C = i;
    return typeof F == C(2240) ? "[" + F + "]" : o.test(F) ? "." + F : "['" + u(F) + "']";
  }
  function u(F) {
    var C = i;
    return F.replace(c, C(1362))[C(139)](/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f")[C(139)](/\t/g, "\\t");
  }
  function f(F, C) {
    var L = i;
    C += L(2501);
    var H = F.match(new RegExp(C, "g"));
    return H ? H[L(1407)] : 0;
  }
  function l(F, C, L) {
    var H = i;
    return C += "([^0-9])", L = L.replace(/\$/g, H(2500)), F[H(139)](new RegExp(C, "g"), L + "$1");
  }
  function v(F, C) {
    var L = i;
    if (typeof F == L(968)) return !F;
    for (var H in F) if (C[H]) return !0;
  }
  function h(F, C, L) {
    var H = i;
    if (typeof F == H(968)) return !F && L != H(472);
    for (var V in F) if (V != L && C[V]) return !0;
  }
  function m(F, C) {
    var L = i;
    if (typeof F != L(968)) {
      for (var H in F) if (!C[H]) return H;
    }
  }
  function b(F) {
    return "'" + u(F) + "'";
  }
  function w(F, C, L, H) {
    var V = i, J = L ? V(801) + C + (H ? "" : V(1884)) : H ? V(572) + C + V(2439) : V(2366) + C + V(2390);
    return k(F, J);
  }
  function E(F, C, L) {
    var H = b(L ? "/" + D(C) : d(C));
    return k(F, H);
  }
  var O = /^\/(?:[^~]|~0|~1)*$/, q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function R(F, C, L) {
    var H = i, V, J, c0, d0;
    if (F === "") return H(284);
    if (F[0] == "/") {
      if (!O.test(F)) throw new Error("Invalid JSON-pointer: " + F);
      J = F, c0 = H(284);
    } else {
      if (d0 = F[H(877)](q), !d0) throw new Error(H(1063) + F);
      if (V = +d0[1], J = d0[2], J == "#") {
        if (V >= C) throw new Error(H(451) + V + H(108) + C);
        return L[C - V];
      }
      if (V > C) throw new Error(H(479) + V + H(108) + C);
      if (c0 = H(1841) + (C - V || ""), !J) return c0;
    }
    for (var f0 = c0, i0 = J.split("/"), l0 = 0; l0 < i0[H(1407)]; l0++) {
      var S0 = i0[l0];
      S0 && (c0 += d(M(S0)), f0 += " && " + c0);
    }
    return f0;
  }
  function k(F, C) {
    var L = i;
    return F == '""' ? C : (F + L(1393) + C)[L(139)](/([^\\])' \+ '/g, "$1");
  }
  function N(F) {
    return M(decodeURIComponent(F));
  }
  function j(F) {
    return encodeURIComponent(D(F));
  }
  function D(F) {
    var C = i;
    return F[C(139)](/~/g, "~0")[C(139)](/\//g, "~1");
  }
  function M(F) {
    var C = i;
    return F.replace(/~1/g, "/")[C(139)](/~0/g, "~");
  }
  return Gx;
}
var Qx, sa;
function ln() {
  if (sa) return Qx;
  sa = 1;
  var i = Ze();
  Qx = x;
  function x(t) {
    i.copy(t, this);
  }
  return Qx;
}
var Yx = { exports: {} }, na;
function $2() {
  var i = s;
  if (na) return Yx.exports;
  na = 1;
  var x = Yx[i(1117)] = function(e, a, n) {
    var o = i;
    typeof a == "function" && (n = a, a = {}), n = a.cb || n;
    var c = typeof n == o(2042) ? n : n[o(1371)] || function() {
    }, d = n[o(1869)] || function() {
    };
    t(a, c, d, e, "", e);
  };
  x[i(2356)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[i(1095)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[i(1738)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x.skipKeywords = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, a, n, o, c, d, u, f, l, v) {
    var h = i;
    if (o && typeof o == "object" && !Array[h(242)](o)) {
      a(o, c, d, u, f, l, v);
      for (var m in o) {
        var b = o[m];
        if (Array[h(242)](b)) {
          if (m in x.arrayKeywords)
            for (var w = 0; w < b.length; w++) t(e, a, n, b[w], c + "/" + m + "/" + w, d, c, m, o, w);
        } else if (m in x[h(1738)]) {
          if (b && typeof b == "object")
            for (var E in b) t(e, a, n, b[E], c + "/" + m + "/" + r(E), d, c, m, o, E);
        } else (m in x[h(2356)] || e[h(2059)] && !(m in x[h(1617)])) && t(e, a, n, b, c + "/" + m, d, c, m, o);
      }
      n(o, c, d, u, f, l, v);
    }
  }
  function r(e) {
    var a = i;
    return e[a(139)](/~/g, "~0")[a(139)](/\//g, "~1");
  }
  return Yx[i(1117)];
}
var Xx, ia;
function cr() {
  var i = s;
  if (ia) return Xx;
  ia = 1;
  var x = M2(), t = or(), r = Ze(), e = ln(), a = $2();
  Xx = n, n.normalizeId = E, n[i(1124)] = m, n[i(1011)] = O, n[i(2112)] = q, n.inlineRef = l, n[i(2066)] = o;
  function n(R, k, N) {
    var j = i, D = this._refs[N];
    if (typeof D == "string")
      if (this[j(2375)][D]) D = this[j(2375)][D];
      else return n[j(2497)](this, R, k, D);
    if (D = D || this[j(678)][N], D instanceof e) return l(D.schema, this[j(1536)][j(2292)]) ? D.schema : D[j(138)] || this[j(1437)](D);
    var M = o[j(2497)](this, k, N), F, C, L;
    return M && (F = M[j(2066)], k = M[j(276)], L = M[j(1409)]), F instanceof e ? C = F[j(138)] || R[j(2497)](this, F.schema, k, void 0, L) : F !== void 0 && (C = l(F, this[j(1536)].inlineRefs) ? F : R[j(2497)](this, F, k, void 0, L)), C;
  }
  function o(R, k) {
    var N = i, j = x.parse(k), D = b(j), M = m(this._getId(R[N(2066)]));
    if (Object.keys(R[N(2066)])[N(1407)] === 0 || D !== M) {
      var F = E(D), C = this[N(2375)][F];
      if (typeof C == N(2254)) return c.call(this, R, C, j);
      if (C instanceof e)
        C[N(138)] || this[N(1437)](C), R = C;
      else if (C = this[N(678)][F], C instanceof e) {
        if (C[N(138)] || this[N(1437)](C), F == E(k)) return { schema: C, root: R, baseId: M };
        R = C;
      } else return;
      if (!R[N(2066)]) return;
      M = m(this[N(272)](R[N(2066)]));
    }
    return u[N(2497)](this, j, M, R.schema, R);
  }
  function c(R, k, N) {
    var j = i, D = o[j(2497)](this, R, k);
    if (D) {
      var M = D.schema, F = D.baseId;
      R = D[j(276)];
      var C = this[j(272)](M);
      return C && (F = O(F, C)), u[j(2497)](this, N, F, M, R);
    }
  }
  var d = r.toHash([i(189), i(582), i(1781), i(160), i(661)]);
  function u(R, k, N, j) {
    var D = i;
    if (R[D(1259)] = R[D(1259)] || "", R[D(1259)][D(571)](0, 1) == "/") {
      for (var M = R[D(1259)][D(1363)]("/"), F = 1; F < M[D(1407)]; F++) {
        var C = M[F];
        if (C) {
          if (C = r[D(1123)](C), N = N[C], N === void 0) break;
          var L;
          if (!d[C] && (L = this[D(272)](N), L && (k = O(k, L)), N[D(2431)])) {
            var H = O(k, N[D(2431)]), V = o.call(this, j, H);
            V && (N = V[D(2066)], j = V[D(276)], k = V.baseId);
          }
        }
      }
      if (N !== void 0 && N !== j[D(2066)]) return { schema: N, root: j, baseId: k };
    }
  }
  var f = r[i(1118)]([i(1273), "format", "pattern", i(845), "minLength", i(1079), i(1922), i(1837), i(2219), i(1115), i(656), i(1179), i(1262), "required", i(1781)]);
  function l(R, k) {
    if (k === !1) return !1;
    if (k === void 0 || k === !0) return v(R);
    if (k) return h(R) <= k;
  }
  function v(R) {
    var k = i, N;
    if (Array[k(242)](R)) {
      for (var j = 0; j < R.length; j++)
        if (N = R[j], typeof N == k(1526) && !v(N)) return !1;
    } else for (var D in R)
      if (D == k(2431) || (N = R[D], typeof N == k(1526) && !v(N))) return !1;
    return !0;
  }
  function h(R) {
    var k = i, N = 0, j;
    if (Array.isArray(R)) {
      for (var D = 0; D < R[k(1407)]; D++)
        if (j = R[D], typeof j == k(1526) && (N += h(j)), N == 1 / 0) return 1 / 0;
    } else for (var M in R) {
      if (M == k(2431)) return 1 / 0;
      if (f[M]) N++;
      else if (j = R[M], typeof j == "object" && (N += h(j) + 1), N == 1 / 0) return 1 / 0;
    }
    return N;
  }
  function m(R, k) {
    var N = i;
    k !== !1 && (R = E(R));
    var j = x[N(734)](R);
    return b(j);
  }
  function b(R) {
    var k = i;
    return x[k(1899)](R)[k(1363)]("#")[0] + "#";
  }
  var w = /#\/?$/;
  function E(R) {
    var k = i;
    return R ? R[k(139)](w, "") : "";
  }
  function O(R, k) {
    return k = E(k), x.resolve(R, k);
  }
  function q(R) {
    var k = i, N = E(this[k(272)](R)), j = { "": N }, D = { "": m(N, !1) }, M = {}, F = this;
    return a(R, { allKeys: !0 }, function(C, L, H, V, J, c0, d0) {
      var f0 = k;
      if (L !== "") {
        var i0 = F[f0(272)](C), l0 = j[V], S0 = D[V] + "/" + J;
        if (d0 !== void 0 && (S0 += "/" + (typeof d0 == f0(2240) ? d0 : r[f0(1229)](d0))), typeof i0 == f0(2254)) {
          i0 = l0 = E(l0 ? x[f0(595)](l0, i0) : i0);
          var b0 = F[f0(2375)][i0];
          if (typeof b0 == f0(2254) && (b0 = F[f0(2375)][b0]), b0 && b0.schema) {
            if (!t(C, b0.schema)) throw new Error('id "' + i0 + f0(2480));
          } else if (i0 != E(S0))
            if (i0[0] == "#") {
              if (M[i0] && !t(C, M[i0])) throw new Error(f0(2215) + i0 + f0(2480));
              M[i0] = C;
            } else F[f0(2375)][i0] = S0;
        }
        j[L] = l0, D[L] = S0;
      }
    }), M;
  }
  return Xx;
}
var _x, oa;
function dr() {
  if (oa) return _x;
  oa = 1;
  var i = cr();
  _x = { Validation: r(x), MissingRef: r(t) };
  function x(e) {
    var a = K;
    this.message = "validation failed", this[a(2493)] = e, this.ajv = this.validation = !0;
  }
  t.message = function(e, a) {
    var n = K;
    return "can't resolve reference " + a + n(2197) + e;
  };
  function t(e, a, n) {
    var o = K;
    this[o(1682)] = n || t.message(e, a), this[o(1183)] = i[o(1011)](e, a), this[o(994)] = i[o(234)](i[o(1124)](this[o(1183)]));
  }
  function r(e) {
    var a = K;
    return e[a(2023)] = Object.create(Error[a(2023)]), e[a(2023)].constructor = e, e;
  }
  return _x;
}
var et, ca;
function hn() {
  return ca || (ca = 1, et = function(i, x) {
    var t = K;
    x || (x = {}), typeof x === t(2042) && (x = { cmp: x });
    var r = typeof x.cycles === t(968) ? x.cycles : !1, e = x.cmp && /* @__PURE__ */ function(n) {
      return function(o) {
        return function(c, d) {
          var u = { key: c, value: o[c] }, f = { key: d, value: o[d] };
          return n(u, f);
        };
      };
    }(x[t(1084)]), a = [];
    return function n(o) {
      var c = t;
      if (o && o[c(1732)] && typeof o[c(1732)] === c(2042) && (o = o[c(1732)]()), o !== void 0) {
        if (typeof o == c(2240)) return isFinite(o) ? "" + o : c(599);
        if (typeof o != "object") return JSON[c(2099)](o);
        var d, u;
        if (Array[c(242)](o)) {
          for (u = "[", d = 0; d < o[c(1407)]; d++)
            d && (u += ","), u += n(o[d]) || "null";
          return u + "]";
        }
        if (o === null) return c(599);
        if (a[c(1679)](o) !== -1) {
          if (r) return JSON.stringify(c(156));
          throw new TypeError(c(270));
        }
        var f = a[c(365)](o) - 1, l = Object.keys(o)[c(437)](e && e(o));
        for (u = "", d = 0; d < l[c(1407)]; d++) {
          var v = l[d], h = n(o[v]);
          h && (u && (u += ","), u += JSON[c(2099)](v) + ":" + h);
        }
        return a[c(890)](f, 1), "{" + u + "}";
      }
    }(i);
  }), et;
}
var xt, da;
function pn() {
  return da || (da = 1, xt = function(x, t, r) {
    var e = K, a = "", n = x[e(2066)][e(1202)] === !0, o = x[e(491)][e(2335)](x.schema, x.RULES[e(2337)], e(2431)), c = x[e(2464)][e(272)](x[e(2066)]);
    if (x[e(1947)][e(1698)]) {
      var d = x.util[e(1167)](x[e(2066)], x[e(2136)][e(2356)]);
      if (d) {
        var u = e(1722) + d;
        if (x.opts[e(1698)] === e(2312)) x[e(932)][e(1718)](u);
        else throw new Error(u);
      }
    }
    if (x[e(2189)] && (a += " var validate = ", n && (x[e(1501)] = !0, a += "async "), a += e(1006), c && (x[e(1947)][e(2127)] || x[e(1947)][e(644)]) && (a += " " + (e(1122) + c + e(244)) + " ")), typeof x.schema == "boolean" || !(o || x.schema[e(2431)])) {
      var t = e(2129), f = x[e(285)], l = x[e(1333)], v = x[e(2066)][t], h = x[e(2303)] + x[e(491)][e(476)](t), m = x[e(967)] + "/" + t, k = !x[e(1947)].allErrors, D, b = "data" + (l || ""), R = e(1390) + f;
      if (x[e(2066)] === !1) {
        x[e(2189)] ? k = !0 : a += e(1901) + R + " = false; ";
        var w = w || [];
        w[e(365)](a), a = "", x[e(459)] !== !1 ? (a += e(2448) + (D || e(2129)) + e(2404) + x[e(1524)] + e(544) + x[e(491)][e(2364)](m) + " , params: {} ", x[e(1947)][e(649)] !== !1 && (a += e(2210)), x[e(1947)][e(387)] && (a += e(2182) + x.schemaPath + e(1688) + b + " "), a += e(1066)) : a += " {} ";
        var E = a;
        a = w.pop(), !x.compositeRule && k ? x[e(1501)] ? a += e(2020) + E + e(1480) : a += " validate.errors = [" + E + e(2294) : a += e(1433) + E + e(2193);
      } else x[e(2189)] ? n ? a += e(273) : a += e(1637) : a += e(1901) + R + e(546);
      return x[e(2189)] && (a += e(2163)), a;
    }
    if (x[e(2189)]) {
      var O = x[e(2189)], f = x[e(285)] = 0, l = x[e(1333)] = 0, b = "data";
      if (x[e(737)] = x[e(595)].fullPath(x[e(2464)][e(272)](x[e(276)][e(2066)])), x[e(1409)] = x[e(1409)] || x[e(737)], delete x[e(2189)], x[e(1743)] = [""], x[e(2066)][e(1058)] !== void 0 && x[e(1947)][e(1410)] && x.opts[e(111)]) {
        var q = "default is ignored in the schema root";
        if (x[e(1947)][e(111)] === e(2312)) x[e(932)][e(1718)](q);
        else throw new Error(q);
      }
      a += e(2121), a += e(2491), a += e(2290);
    } else {
      var f = x[e(285)], l = x[e(1333)], b = e(1841) + (l || "");
      if (c && (x[e(1409)] = x[e(595)].url(x[e(1409)], c)), n && !x[e(1501)]) throw new Error(e(740));
      a += e(207) + f + " = errors;";
    }
    var R = "valid" + f, k = !x[e(1947)][e(369)], N = "", j = "", D, M = x[e(2066)].type, F = Array.isArray(M);
    if (M && x[e(1947)].nullable && x[e(2066)][e(1222)] === !0 && (F ? M[e(1679)]("null") == -1 && (M = M.concat(e(599))) : M != e(599) && (M = [M, e(599)], F = !0)), F && M[e(1407)] == 1 && (M = M[0], F = !1), x.schema[e(2431)] && o) {
      if (x[e(1947)][e(1043)] == e(1017)) throw new Error('$ref: validation keywords used in schema at path "' + x[e(967)] + e(988));
      x.opts[e(1043)] !== !0 && (o = !1, x[e(932)].warn(e(911) + x[e(967)] + '"'));
    }
    if (x[e(2066)][e(313)] && x[e(1947)].$comment && (a += " " + x[e(2136)][e(2337)][e(313)].code(x, e(313))), M) {
      if (x[e(1947)].coerceTypes) var C = x[e(491)][e(1479)](x[e(1947)][e(844)], M);
      var L = x[e(2136)][e(2408)][M];
      if (C || F || L === !0 || L && !w0(L)) {
        var h = x[e(2303)] + e(474), m = x.errSchemaPath + e(961), h = x[e(2303)] + e(474), m = x[e(967)] + "/type", H = e(F ? 862 : 2429);
        if (a += e(1e3) + x[e(491)][H](M, b, x[e(1947)].strictNumbers, !0) + e(288), C) {
          var V = e(2204) + f, J = e(1128) + f;
          a += e(1901) + V + " = typeof " + b + e(2291) + J + e(923), x.opts.coerceTypes == e(1040) && (a += e(1e3) + V + " == 'object' && Array.isArray(" + b + e(1290) + b + e(1071) + b + e(1935) + b + "[0]; " + V + e(1578) + b + e(116) + x[e(491)][e(2429)](x[e(2066)][e(1273)], b, x[e(1947)][e(433)]) + ") " + J + e(1935) + b + e(718)), a += e(1e3) + J + " !== undefined) ; ";
          var c0 = C;
          if (c0)
            for (var d0, f0 = -1, i0 = c0[e(1407)] - 1; f0 < i0; )
              d0 = c0[f0 += 1], d0 == e(2254) ? a += e(1540) + V + e(1711) + V + e(2373) + J + " = '' + " + b + "; else if (" + b + e(2295) + J + e(134) : d0 == e(2240) || d0 == "integer" ? (a += e(1540) + V + e(2275) + b + " === null || (" + V + e(552) + b + e(1207) + b + e(1475) + b + " ", d0 == e(197) && (a += e(1559) + b + " % 1)"), a += e(449) + J + e(1881) + b + "; ") : d0 == e(968) ? a += " else if (" + b + " === 'false' || " + b + e(1771) + b + e(2295) + J + e(1753) + b + " === 'true' || " + b + " === 1) " + J + e(546) : d0 == e(599) ? a += " else if (" + b + " === '' || " + b + " === 0 || " + b + e(2028) + J + e(1097) : x.opts.coerceTypes == e(1040) && d0 == e(1040) && (a += " else if (" + V + e(292) + V + e(1711) + V + e(2275) + b + e(1457) + J + e(2166) + b + e(2213));
          a += e(693);
          var w = w || [];
          w[e(365)](a), a = "", x[e(459)] !== !1 ? (a += e(2448) + (D || e(1273)) + e(2404) + x[e(1524)] + e(544) + x.util.toQuotedString(m) + e(825), F ? a += "" + M[e(152)](",") : a += "" + M, a += e(394), x.opts[e(649)] !== !1 && (a += e(789), F ? a += "" + M.join(",") : a += "" + M, a += "' "), x[e(1947)].verbose && (a += e(1811) + h + e(361) + x.schemaPath + e(1688) + b + " "), a += e(1066)) : a += e(1335);
          var E = a;
          a = w[e(2211)](), !x[e(2089)] && k ? x[e(1501)] ? a += e(2020) + E + "]); " : a += " validate.errors = [" + E + e(2294) : a += e(1433) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } if (" + J + e(527);
          var l0 = l ? e(1841) + (l - 1 || "") : "parentData", S0 = l ? x.dataPathArr[l] : e(1361);
          a += " " + b + e(1935) + J + "; ", !l && (a += e(1772) + l0 + " !== undefined)"), a += " " + l0 + "[" + S0 + "] = " + J + e(718);
        } else {
          var w = w || [];
          w.push(a), a = "", x.createErrors !== !1 ? (a += e(2448) + (D || "type") + e(2404) + x[e(1524)] + e(544) + x[e(491)][e(2364)](m) + e(825), F ? a += "" + M[e(152)](",") : a += "" + M, a += e(394), x[e(1947)][e(649)] !== !1 && (a += " , message: 'should be ", F ? a += "" + M[e(152)](",") : a += "" + M, a += "' "), x[e(1947)][e(387)] && (a += e(1811) + h + " , parentSchema: validate.schema" + x.schemaPath + " , data: " + b + " "), a += e(1066)) : a += e(1335);
          var E = a;
          a = w[e(2211)](), !x.compositeRule && k ? x[e(1501)] ? a += e(2020) + E + e(1480) : a += " validate.errors = [" + E + e(2294) : a += " var err = " + E + e(2193);
        }
        a += " } ";
      }
    }
    if (x[e(2066)][e(2431)] && !o) a += " " + x[e(2136)][e(2337)][e(2431)][e(2029)](x, e(2431)) + " ", k && (a += e(885), O ? a += "0" : a += e(860) + f, a += e(288), j += "}");
    else {
      var b0 = x.RULES;
      if (b0) {
        for (var L, M0 = -1, k0 = b0[e(1407)] - 1; M0 < k0; )
          if (L = b0[M0 += 1], w0(L)) {
            if (L[e(1273)] && (a += e(1e3) + x[e(491)][e(2429)](L[e(1273)], b, x[e(1947)][e(433)]) + e(288)), x[e(1947)].useDefaults) {
              if (L[e(1273)] == "object" && x[e(2066)][e(189)]) {
                var v = x[e(2066)].properties, Q0 = Object[e(1087)](v), A = Q0;
                if (A)
                  for (var T, $ = -1, G = A[e(1407)] - 1; $ < G; ) {
                    T = A[$ += 1];
                    var Q = v[T];
                    if (Q[e(1058)] !== void 0) {
                      var W = b + x[e(491)][e(476)](T);
                      if (x.compositeRule) {
                        if (x[e(1947)][e(111)]) {
                          var q = e(498) + W;
                          if (x[e(1947)].strictDefaults === e(2312)) x[e(932)].warn(q);
                          else throw new Error(q);
                        }
                      } else a += e(1e3) + W + e(761), x[e(1947)].useDefaults == "empty" && (a += " || " + W + e(1351) + W + e(1798)), a += e(2402) + W + e(1935), x[e(1947)][e(1410)] == "shared" ? a += " " + x[e(861)](Q[e(1058)]) + " " : a += " " + JSON[e(2099)](Q[e(1058)]) + " ", a += "; ";
                    }
                  }
              } else if (L[e(1273)] == e(1040) && Array[e(242)](x[e(2066)][e(561)])) {
                var Y = x[e(2066)][e(561)];
                if (Y) {
                  for (var Q, f0 = -1, o0 = Y[e(1407)] - 1; f0 < o0; )
                    if (Q = Y[f0 += 1], Q[e(1058)] !== void 0) {
                      var W = b + "[" + f0 + "]";
                      if (x[e(2089)]) {
                        if (x.opts[e(111)]) {
                          var q = e(498) + W;
                          if (x[e(1947)].strictDefaults === e(2312)) x[e(932)][e(1718)](q);
                          else throw new Error(q);
                        }
                      } else a += e(1e3) + W + e(761), x[e(1947)].useDefaults == e(2442) && (a += e(1518) + W + " === null || " + W + e(1798)), a += e(2402) + W + " = ", x[e(1947)].useDefaults == e(1138) ? a += " " + x[e(861)](Q[e(1058)]) + " " : a += " " + JSON.stringify(Q[e(1058)]) + " ", a += "; ";
                    }
                }
              }
            }
            var s0 = L.rules;
            if (s0) {
              for (var _, L0 = -1, T0 = s0[e(1407)] - 1; L0 < T0; )
                if (_ = s0[L0 += 1], G0(_)) {
                  var U0 = _[e(2029)](x, _.keyword, L[e(1273)]);
                  U0 && (a += " " + U0 + " ", k && (N += "}"));
                }
            }
            if (k && (a += " " + N + " ", N = ""), L.type && (a += e(1066), M && M === L[e(1273)] && !C)) {
              a += e(742);
              var h = x[e(2303)] + e(474), m = x.errSchemaPath + "/type", w = w || [];
              w[e(365)](a), a = "", x.createErrors !== !1 ? (a += e(2448) + (D || "type") + e(2404) + x.errorPath + e(544) + x[e(491)][e(2364)](m) + " , params: { type: '", F ? a += "" + M.join(",") : a += "" + M, a += e(394), x.opts.messages !== !1 && (a += " , message: 'should be ", F ? a += "" + M[e(152)](",") : a += "" + M, a += "' "), x.opts[e(387)] && (a += e(1811) + h + e(361) + x[e(2303)] + e(1688) + b + " "), a += e(1066)) : a += e(1335);
              var E = a;
              a = w[e(2211)](), !x[e(2089)] && k ? x[e(1501)] ? a += e(2020) + E + "]); " : a += e(1908) + E + e(2294) : a += e(1433) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += e(1066);
            }
            k && (a += e(1716), O ? a += "0" : a += e(860) + f, a += e(288), j += "}");
          }
      }
    }
    k && (a += " " + j + " "), O ? (n ? (a += e(931), a += e(1421)) : (a += e(1180), a += e(1892)), a += " }; return validate;") : a += e(1901) + R + " = errors === errs_" + f + ";";
    function w0(Y0) {
      for (var A0 = e, V0 = Y0[A0(1562)], _0 = 0; _0 < V0[A0(1407)]; _0++) if (G0(V0[_0])) return !0;
    }
    function G0(Y0) {
      var A0 = e;
      return x[A0(2066)][Y0.keyword] !== void 0 || Y0[A0(908)] && ne(Y0);
    }
    function ne(Y0) {
      for (var A0 = e, V0 = Y0.implements, _0 = 0; _0 < V0[A0(1407)]; _0++) if (x[A0(2066)][V0[_0]] !== void 0) return !0;
    }
    return a;
  }), xt;
}
var tt, ua;
function z2() {
  var i = s;
  if (ua) return tt;
  ua = 1;
  var x = cr(), t = Ze(), r = dr(), e = hn(), a = pn(), n = t[i(1428)], o = or(), c = r[i(2144)];
  tt = d;
  function d(E, O, q, R) {
    var k = i, N = this, j = this._opts, D = [void 0], M = {}, F = [], C = {}, L = [], H = {}, V = [];
    O = O || { schema: E, refVal: D, refs: M };
    var J = u[k(2497)](this, E, O, R), c0 = this[k(203)][J[k(1748)]];
    if (J.compiling) return c0[k(949)] = S0;
    var d0 = this[k(396)], f0 = this.RULES;
    try {
      var i0 = b0(E, O, q, R);
      c0[k(138)] = i0;
      var l0 = c0.callValidate;
      return l0 && (l0[k(2066)] = i0[k(2066)], l0.errors = null, l0[k(1036)] = i0[k(1036)], l0[k(376)] = i0[k(376)], l0.root = i0[k(276)], l0[k(1202)] = i0[k(1202)], j[k(2127)] && (l0[k(1200)] = i0[k(1200)])), i0;
    } finally {
      f[k(2497)](this, E, O, R);
    }
    function S0() {
      var W = k, Y = c0[W(138)], o0 = Y[W(1196)](this, arguments);
      return S0[W(2493)] = Y.errors, o0;
    }
    function b0(W, Y, o0, s0) {
      var _ = k, L0 = !Y || Y && Y.schema == W;
      if (Y[_(2066)] != O[_(2066)]) return d[_(2497)](N, W, Y, o0, s0);
      var T0 = W[_(1202)] === !0, U0 = a({ isTop: !0, schema: W, isRoot: L0, baseId: s0, root: Y, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: r.MissingRef, RULES: f0, validate: a, util: t, resolve: x, resolveRef: M0, usePattern: $, useDefault: G, useCustomRule: Q, opts: j, formats: d0, logger: N[_(932)], self: N });
      U0 = w(D, m) + w(F, v) + w(L, h) + w(V, b) + U0, j.processCode && (U0 = j[_(644)](U0, W));
      var w0;
      try {
        var G0 = new Function(_(2464), _(2136), _(2169), _(276), "refVal", _(2218), "customRules", _(696), _(1428), _(939), U0);
        w0 = G0(N, f0, d0, O, D, L, V, o, n, c), D[0] = w0;
      } catch (ne) {
        throw N[_(932)][_(2239)](_(1062), U0), ne;
      }
      return w0[_(2066)] = W, w0[_(2493)] = null, w0.refs = M, w0.refVal = D, w0[_(276)] = L0 ? w0 : Y, T0 && (w0[_(1202)] = !0), j[_(2127)] === !0 && (w0.source = { code: U0, patterns: F, defaults: L }), w0;
    }
    function M0(W, Y, o0) {
      var s0 = k;
      Y = x[s0(1011)](W, Y);
      var _ = M[Y], L0, T0;
      if (_ !== void 0) return L0 = D[_], T0 = s0(1945) + _ + "]", T(L0, T0);
      if (!o0 && O.refs) {
        var U0 = O[s0(1036)][Y];
        if (U0 !== void 0) return L0 = O[s0(376)][U0], T0 = k0(Y, L0), T(L0, T0);
      }
      T0 = k0(Y);
      var w0 = x[s0(2497)](N, b0, O, Y);
      if (w0 === void 0) {
        var G0 = q && q[Y];
        G0 && (w0 = x[s0(2281)](G0, j[s0(2292)]) ? G0 : d[s0(2497)](N, G0, O, q, W));
      }
      if (w0 === void 0) Q0(Y);
      else return A(Y, w0), T(w0, T0);
    }
    function k0(W, Y) {
      var o0 = k, s0 = D[o0(1407)];
      return D[s0] = Y, M[W] = s0, "refVal" + s0;
    }
    function Q0(W) {
      delete M[W];
    }
    function A(W, Y) {
      var o0 = M[W];
      D[o0] = Y;
    }
    function T(W, Y) {
      var o0 = k;
      return typeof W == o0(1526) || typeof W == o0(968) ? { code: Y, schema: W, inline: !0 } : { code: Y, $async: W && !!W.$async };
    }
    function $(W) {
      var Y = k, o0 = C[W];
      return o0 === void 0 && (o0 = C[W] = F[Y(1407)], F[o0] = W), "pattern" + o0;
    }
    function G(W) {
      var Y = k;
      switch (typeof W) {
        case Y(968):
        case Y(2240):
          return "" + W;
        case Y(2254):
          return t[Y(2364)](W);
        case Y(1526):
          if (W === null) return "null";
          var o0 = e(W), s0 = H[o0];
          return s0 === void 0 && (s0 = H[o0] = L[Y(1407)], L[s0] = W), Y(1058) + s0;
      }
    }
    function Q(W, Y, o0, s0) {
      var _ = k;
      if (N[_(1536)].validateSchema !== !1) {
        var L0 = W[_(2063)][_(160)];
        if (L0 && !L0[_(1783)](function(_0) {
          var Le = _;
          return Object.prototype[Le(676)][Le(2497)](o0, _0);
        })) throw new Error(_(1131) + L0[_(152)](","));
        var T0 = W[_(2063)][_(1592)];
        if (T0) {
          var U0 = T0(Y);
          if (!U0) {
            var w0 = _(878) + N[_(1971)](T0[_(2493)]);
            if (N._opts.validateSchema == _(2312)) N.logger[_(2239)](w0);
            else throw new Error(w0);
          }
        }
      }
      var G0 = W[_(2063)].compile, ne = W[_(2063)].inline, Y0 = W[_(2063)][_(2455)], A0;
      if (G0) A0 = G0[_(2497)](N, Y, o0, s0);
      else if (Y0)
        A0 = Y0[_(2497)](N, Y, o0, s0), j[_(1592)] !== !1 && N[_(1592)](A0, !0);
      else if (ne) A0 = ne[_(2497)](N, s0, W[_(517)], Y, o0);
      else if (A0 = W.definition[_(138)], !A0) return;
      if (A0 === void 0) throw new Error('custom keyword "' + W[_(517)] + _(1120));
      var V0 = V[_(1407)];
      return V[V0] = A0, { code: _(141) + V0, validate: A0 };
    }
  }
  function u(E, O, q) {
    var R = i, k = l.call(this, E, O, q);
    return k >= 0 ? { index: k, compiling: !0 } : (k = this._compilations[R(1407)], this[R(203)][k] = { schema: E, root: O, baseId: q }, { index: k, compiling: !1 });
  }
  function f(E, O, q) {
    var R = i, k = l.call(this, E, O, q);
    k >= 0 && this[R(203)].splice(k, 1);
  }
  function l(E, O, q) {
    for (var R = i, k = 0; k < this[R(203)][R(1407)]; k++) {
      var N = this[R(203)][k];
      if (N[R(2066)] == E && N.root == O && N[R(1409)] == q) return k;
    }
    return -1;
  }
  function v(E, O) {
    var q = i;
    return "var pattern" + E + q(1483) + t[q(2364)](O[E]) + ");";
  }
  function h(E) {
    var O = i;
    return O(1403) + E + O(2369) + E + "];";
  }
  function m(E, O) {
    var q = i;
    return O[E] === void 0 ? "" : q(1091) + E + q(972) + E + "];";
  }
  function b(E) {
    var O = i;
    return O(1135) + E + " = customRules[" + E + "];";
  }
  function w(E, O) {
    var q = i;
    if (!E[q(1407)]) return "";
    for (var R = "", k = 0; k < E[q(1407)]; k++) R += O(k, E);
    return R;
  }
  return tt;
}
var rt = { exports: {} }, fa;
function H2() {
  var i = s;
  if (fa) return rt[i(1117)];
  fa = 1;
  var x = rt.exports = function() {
    var r = i;
    this[r(1835)] = {};
  };
  return x.prototype[i(957)] = function(r, e) {
    var a = i;
    this[a(1835)][r] = e;
  }, x[i(2023)].get = function(r) {
    var e = i;
    return this[e(1835)][r];
  }, x.prototype[i(478)] = function(r) {
    var e = i;
    delete this[e(1835)][r];
  }, x[i(2023)][i(1547)] = function() {
    var r = i;
    this[r(1835)] = {};
  }, rt[i(1117)];
}
var at, la;
function U2() {
  var i = s;
  if (la) return at;
  la = 1;
  var x = Ze(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, r = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, a = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, d = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, u = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, f = /^(?:\/(?:[^~/]|~0|~1)*)*$/, l = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, v = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  at = h;
  function h(j) {
    var D = K;
    return j = j == D(2468) ? D(2468) : "fast", x[D(2096)](h[j]);
  }
  h[i(1368)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: d, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: a, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: N, uuid: u, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": v }, h[i(2468)] = { date: b, time: w, "date-time": O, uri: R, "uri-reference": o, "uri-template": c, url: d, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: a, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: N, uuid: u, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": v };
  function m(j) {
    return j % 4 === 0 && (j % 100 !== 0 || j % 400 === 0);
  }
  function b(j) {
    var D = i, M = j[D(877)](t);
    if (!M) return !1;
    var F = +M[1], C = +M[2], L = +M[3];
    return C >= 1 && C <= 12 && L >= 1 && L <= (C == 2 && m(F) ? 29 : r[C]);
  }
  function w(j, D) {
    var M = i, F = j[M(877)](e);
    if (!F) return !1;
    var C = F[1], L = F[2], H = F[3], V = F[5];
    return (C <= 23 && L <= 59 && H <= 59 || C == 23 && L == 59 && H == 60) && (!D || V);
  }
  var E = /t|\s/i;
  function O(j) {
    var D = i, M = j[D(1363)](E);
    return M.length == 2 && b(M[0]) && w(M[1], !0);
  }
  var q = /\/|:/;
  function R(j) {
    var D = i;
    return q[D(937)](j) && n[D(937)](j);
  }
  var k = /[^\\]\\Z/;
  function N(j) {
    var D = i;
    if (k[D(937)](j)) return !1;
    try {
      return new RegExp(j), !0;
    } catch {
      return !1;
    }
  }
  return at;
}
var st, ha;
function V2() {
  return ha || (ha = 1, st = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x.dataLevel, c = x[e(2066)][t], d = x[e(967)] + "/" + t, u = !x[e(1947)][e(369)], f = e(1841) + (o || ""), l = e(1390) + n, v, h;
    if (c == "#" || c == "#/") x[e(1053)] ? (v = x[e(1501)], h = "validate") : (v = x.root[e(2066)].$async === !0, h = e(1149));
    else {
      var m = x[e(403)](x[e(1409)], c, x.isRoot);
      if (m === void 0) {
        var b = x.MissingRefError.message(x[e(1409)], c);
        if (x[e(1947)].missingRefs == e(1017)) {
          x[e(932)][e(2239)](b);
          var w = w || [];
          w[e(365)](a), a = "", x[e(459)] !== !1 ? (a += " { keyword: '$ref" + e(2404) + x[e(1524)] + e(544) + x[e(491)][e(2364)](d) + e(2282) + x[e(491)][e(1725)](c) + e(394), x[e(1947)][e(649)] !== !1 && (a += " , message: 'can\\'t resolve reference " + x.util[e(1725)](c) + "' "), x.opts[e(387)] && (a += e(389) + x[e(491)][e(2364)](c) + e(361) + x[e(2303)] + " , data: " + f + " "), a += e(1066)) : a += e(1335);
          var E = a;
          a = w[e(2211)](), !x[e(2089)] && u ? x[e(1501)] ? a += e(2020) + E + e(1480) : a += e(1908) + E + e(2294) : a += e(1433) + E + e(2193), u && (a += e(2344));
        } else if (x[e(1947)][e(2186)] == "ignore") x[e(932)][e(1718)](b), u && (a += e(1600));
        else throw new x.MissingRefError(x.baseId, c, b);
      } else if (m[e(275)]) {
        var O = x[e(491)][e(2096)](x);
        O.level++;
        var q = e(1390) + O[e(285)];
        O[e(2066)] = m[e(2066)], O[e(2303)] = "", O.errSchemaPath = c;
        var R = x[e(138)](O)[e(139)](/validate\.schema/g, m[e(2029)]);
        a += " " + R + " ", u && (a += e(1e3) + q + e(288));
      } else v = m[e(1202)] === !0 || x.async && m[e(1202)] !== !1, h = m[e(2029)];
    }
    if (h) {
      var w = w || [];
      w[e(365)](a), a = "", x.opts.passContext ? a += " " + h + e(637) : a += " " + h + "( ", a += " " + f + e(458), x[e(1524)] != '""' && (a += " + " + x[e(1524)]);
      var k = o ? e(1841) + (o - 1 || "") : e(1546), N = o ? x.dataPathArr[o] : e(1361);
      a += e(398) + k + e(398) + N + e(672);
      var j = a;
      if (a = w[e(2211)](), v) {
        if (!x[e(1501)]) throw new Error("async schema referenced by sync schema");
        u && (a += e(1901) + l + "; "), a += " try { await " + j + "; ", u && (a += " " + l + e(546)), a += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", u && (a += " " + l + e(2206)), a += e(1066), u && (a += e(1e3) + l + e(288));
      } else a += " if (!" + j + ") { if (vErrors === null) vErrors = " + h + e(704) + h + ".errors); errors = vErrors.length; } ", u && (a += e(742));
    }
    return a;
  }), st;
}
var nt, pa;
function W2() {
  return pa || (pa = 1, nt = function(x, t, r) {
    var e = K, a = " ", n = x[e(2066)][t], o = x[e(2303)] + x[e(491)][e(476)](t), c = x[e(967)] + "/" + t, d = !x[e(1947)][e(369)], u = x[e(491)][e(2096)](x), f = "";
    u[e(285)]++;
    var l = e(1390) + u.level, v = u[e(1409)], h = !0, m = n;
    if (m)
      for (var b, w = -1, E = m.length - 1; w < E; )
        b = m[w += 1], (x[e(1947)][e(1698)] ? typeof b == e(1526) && Object[e(1087)](b)[e(1407)] > 0 || b === !1 : x[e(491)].schemaHasRules(b, x[e(2136)][e(2337)])) && (h = !1, u[e(2066)] = b, u.schemaPath = o + "[" + w + "]", u.errSchemaPath = c + "/" + w, a += "  " + x[e(138)](u) + " ", u[e(1409)] = v, d && (a += e(1e3) + l + e(288), f += "}"));
    return d && (h ? a += " if (true) { " : a += " " + f[e(571)](0, -1) + " "), a;
  }), nt;
}
function K(i, x) {
  var t = Fx();
  return K = function(r, e) {
    r = r - 108;
    var a = t[r];
    return a;
  }, K(i, x);
}
var it, ma;
function Z2() {
  return ma || (ma = 1, it = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x[e(1333)], c = x[e(2066)][t], d = x.schemaPath + x[e(491)][e(476)](t), u = x[e(967)] + "/" + t, f = !x.opts.allErrors, l = "data" + (o || ""), v = e(1390) + n, h = e(2157) + n, m = x[e(491)].copy(x), b = "";
    m.level++;
    var w = e(1390) + m[e(285)], E = c.every(function(D) {
      var M = e;
      return x[M(1947)].strictKeywords ? typeof D == M(1526) && Object.keys(D)[M(1407)] > 0 || D === !1 : x[M(491)].schemaHasRules(D, x[M(2136)][M(2337)]);
    });
    if (E) {
      var O = m[e(1409)];
      a += " var " + h + e(1244) + v + e(2427);
      var q = x.compositeRule;
      x[e(2089)] = m[e(2089)] = !0;
      var R = c;
      if (R)
        for (var k, N = -1, j = R[e(1407)] - 1; N < j; )
          k = R[N += 1], m[e(2066)] = k, m[e(2303)] = d + "[" + N + "]", m[e(967)] = u + "/" + N, a += "  " + x[e(138)](m) + " ", m.baseId = O, a += " " + v + e(1935) + v + e(1518) + w + e(776) + v + e(288), b += "}";
      x.compositeRule = m[e(2089)] = q, a += " " + b + e(1439) + v + ") {   var err =   ", x.createErrors !== !1 ? (a += e(2448) + e(1816) + e(2404) + x.errorPath + " , schemaPath: " + x[e(491)][e(2364)](u) + e(831), x.opts[e(649)] !== !1 && (a += e(1911)), x[e(1947)][e(387)] && (a += e(1811) + d + e(361) + x[e(2303)] + e(1688) + l + " "), a += e(1066)) : a += e(1335), a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(2089)] && f && (x[e(1501)] ? a += " throw new ValidationError(vErrors); " : a += e(2056)), a += e(1511) + h + e(2123) + h + e(1088) + h + "; else vErrors = null; } ", x.opts[e(369)] && (a += e(1066));
    } else f && (a += " if (true) { ");
    return a;
  }), it;
}
var ot, va;
function K2() {
  return va || (va = 1, ot = function(x, t, r) {
    var e = K, a = " ", n = x.schema[t], o = x.errSchemaPath + "/" + t;
    x[e(1947)][e(369)];
    var c = x[e(491)].toQuotedString(n);
    return x[e(1947)][e(313)] === !0 ? a += " console.log(" + c + ");" : typeof x[e(1947)][e(313)] == e(2042) && (a += e(515) + c + ", " + x[e(491)][e(2364)](o) + ", validate.root.schema);"), a;
  }), ot;
}
var ct, ga;
function B2() {
  return ga || (ga = 1, ct = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x.dataLevel, c = x[e(2066)][t], d = x[e(2303)] + x[e(491)].getProperty(t), u = x[e(967)] + "/" + t, f = !x[e(1947)][e(369)], l = "data" + (o || ""), v = e(1390) + n, h = x.opts[e(2279)] && c && c[e(2279)];
    h && (a += e(1715) + n + e(1935) + x.util[e(477)](c.$data, o, x.dataPathArr) + "; "), !h && (a += e(1715) + n + " = validate.schema" + d + ";"), a += e(1125) + v + e(788) + l + ", schema" + n + e(358) + v + e(589);
    var m = m || [];
    m[e(365)](a), a = "", x[e(459)] !== !1 ? (a += e(2448) + e(1195) + e(2404) + x[e(1524)] + e(544) + x[e(491)][e(2364)](u) + " , params: { allowedValue: schema" + n + e(1066), x.opts[e(649)] !== !1 && (a += e(2484)), x.opts[e(387)] && (a += e(1811) + d + e(361) + x[e(2303)] + e(1688) + l + " "), a += " } ") : a += e(1335);
    var b = a;
    return a = m[e(2211)](), !x.compositeRule && f ? x[e(1501)] ? a += e(2020) + b + e(1480) : a += e(1908) + b + e(2294) : a += e(1433) + b + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " }", f && (a += " else { "), a;
  }), ct;
}
var dt, ba;
function J2() {
  return ba || (ba = 1, dt = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x[e(1333)], c = x.schema[t], d = x[e(2303)] + x[e(491)][e(476)](t), u = x[e(967)] + "/" + t, f = !x.opts[e(369)], l = e(1841) + (o || ""), v = e(1390) + n, h = e(2157) + n, m = x[e(491)].copy(x), b = "";
    m.level++;
    var w = e(1390) + m.level, E = "i" + n, O = m[e(1333)] = x[e(1333)] + 1, q = "data" + O, R = x[e(1409)], k = x.opts[e(1698)] ? typeof c == e(1526) && Object[e(1087)](c).length > 0 || c === !1 : x[e(491)][e(533)](c, x[e(2136)][e(2337)]);
    if (a += e(1125) + h + " = errors;var " + v + ";", k) {
      var N = x.compositeRule;
      x[e(2089)] = m[e(2089)] = !0, m[e(2066)] = c, m[e(2303)] = d, m[e(967)] = u, a += e(1901) + w + " = false; for (var " + E + " = 0; " + E + e(226) + l + ".length; " + E + e(1636), m.errorPath = x[e(491)][e(1733)](x[e(1524)], E, x[e(1947)][e(800)], !0);
      var j = l + "[" + E + "]";
      m[e(1743)][O] = E;
      var D = x[e(138)](m);
      m[e(1409)] = R, x[e(491)][e(1532)](D, q) < 2 ? a += " " + x[e(491)][e(1583)](D, q, j) + " " : a += e(1901) + q + e(1935) + j + "; " + D + " ", a += e(1e3) + w + ") break; }  ", x[e(2089)] = m[e(2089)] = N, a += " " + b + e(1439) + w + e(1759);
    } else a += e(1e3) + l + ".length == 0) {";
    var M = M || [];
    M[e(365)](a), a = "", x.createErrors !== !1 ? (a += e(2448) + "contains" + e(2404) + x[e(1524)] + e(544) + x[e(491)][e(2364)](u) + e(831), x[e(1947)][e(649)] !== !1 && (a += e(719)), x.opts.verbose && (a += e(1811) + d + e(361) + x[e(2303)] + " , data: " + l + " "), a += e(1066)) : a += e(1335);
    var F = a;
    return a = M[e(2211)](), !x[e(2089)] && f ? x[e(1501)] ? a += e(2020) + F + e(1480) : a += " validate.errors = [" + F + e(2294) : a += " var err = " + F + e(2193), a += e(240), k && (a += "  errors = " + h + e(2123) + h + e(1088) + h + "; else vErrors = null; } "), x[e(1947)][e(369)] && (a += e(1066)), a;
  }), dt;
}
var ut, ya;
function G2() {
  return ya || (ya = 1, ut = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x[e(1333)], c = x[e(2066)][t], d = x[e(2303)] + x[e(491)][e(476)](t), u = x[e(967)] + "/" + t, f = !x[e(1947)].allErrors, l = e(1841) + (o || ""), v = e(2157) + n, h = x[e(491)].copy(x), m = "";
    h[e(285)]++;
    var b = "valid" + h[e(285)], w = {}, E = {}, O = x.opts[e(1632)];
    for (N in c)
      if (N != e(518)) {
        var q = c[N], R = Array[e(242)](q) ? E : w;
        R[N] = q;
      }
    a += e(1125) + v + e(915);
    var k = x.errorPath;
    a += "var missing" + n + ";";
    for (var N in E)
      if (R = E[N], R[e(1407)]) {
        if (a += " if ( " + l + x[e(491)].getProperty(N) + " !== undefined ", O && (a += e(854) + l + ", '" + x[e(491)][e(1725)](N) + e(583)), f) {
          a += e(762);
          var j = R;
          if (j)
            for (var D, M = -1, F = j[e(1407)] - 1; M < F; ) {
              D = j[M += 1], M && (a += " || ");
              var C = x.util.getProperty(D), L = l + C;
              a += e(1854) + L + " === undefined ", O && (a += " || ! Object.prototype.hasOwnProperty.call(" + l + e(368) + x.util[e(1725)](D) + e(583)), a += e(2359) + n + e(1935) + x.util.toQuotedString(x[e(1947)][e(800)] ? D : C) + e(323);
            }
          a += ")) {  ";
          var H = e(1249) + n, V = e(887) + H + e(2085);
          x[e(1947)]._errorDataPathProperty && (x[e(1524)] = x[e(1947)][e(800)] ? x[e(491)].getPathExpr(k, H, !0) : k + e(1393) + H);
          var J = J || [];
          J[e(365)](a), a = "", x[e(459)] !== !1 ? (a += " { keyword: '" + e(160) + e(2404) + x[e(1524)] + e(544) + x.util.toQuotedString(u) + e(1234) + x[e(491)][e(1725)](N) + "', missingProperty: '" + V + e(593) + R[e(1407)] + e(1584) + x[e(491)].escapeQuotes(R[e(1407)] == 1 ? R[0] : R[e(152)](", ")) + e(394), x[e(1947)][e(649)] !== !1 && (a += e(2086), R[e(1407)] == 1 ? a += e(215) + x[e(491)][e(1725)](R[0]) : a += e(1906) + x.util[e(1725)](R.join(", ")), a += " when property " + x[e(491)].escapeQuotes(N) + " is present' "), x[e(1947)][e(387)] && (a += e(1811) + d + " , parentSchema: validate.schema" + x[e(2303)] + e(1688) + l + " "), a += e(1066)) : a += e(1335);
          var c0 = a;
          a = J[e(2211)](), !x[e(2089)] && f ? x[e(1501)] ? a += e(2020) + c0 + e(1480) : a += " validate.errors = [" + c0 + e(2294) : a += " var err = " + c0 + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        } else {
          a += e(2039);
          var d0 = R;
          if (d0)
            for (var D, f0 = -1, i0 = d0[e(1407)] - 1; f0 < i0; ) {
              D = d0[f0 += 1];
              var C = x[e(491)][e(476)](D), V = x[e(491)][e(1725)](D), L = l + C;
              x[e(1947)][e(1817)] && (x[e(1524)] = x[e(491)].getPath(k, D, x[e(1947)][e(800)])), a += " if ( " + L + e(761), O && (a += e(1887) + l + e(368) + x[e(491)].escapeQuotes(D) + e(583)), a += e(1807), x[e(459)] !== !1 ? (a += e(2448) + e(160) + "' , dataPath: (dataPath || '') + " + x[e(1524)] + e(544) + x.util[e(2364)](u) + e(1234) + x.util[e(1725)](N) + "', missingProperty: '" + V + "', depsCount: " + R.length + e(1584) + x[e(491)][e(1725)](R[e(1407)] == 1 ? R[0] : R[e(152)](", ")) + e(394), x[e(1947)][e(649)] !== !1 && (a += e(2086), R[e(1407)] == 1 ? a += e(215) + x[e(491)].escapeQuotes(R[0]) : a += e(1906) + x.util[e(1725)](R[e(152)](", ")), a += e(1557) + x.util.escapeQuotes(N) + e(955)), x[e(1947)].verbose && (a += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + x.schemaPath + e(1688) + l + " "), a += e(1066)) : a += e(1335), a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
            }
        }
        a += e(1462), f && (m += "}", a += " else { ");
      }
    x.errorPath = k;
    var l0 = h[e(1409)];
    for (var N in w) {
      var q = w[N];
      (x.opts[e(1698)] ? typeof q == "object" && Object[e(1087)](q).length > 0 || q === !1 : x[e(491)][e(533)](q, x[e(2136)].all)) && (a += " " + b + " = true; if ( " + l + x[e(491)].getProperty(N) + e(1917), O && (a += e(854) + l + e(368) + x.util[e(1725)](N) + e(583)), a += e(288), h[e(2066)] = q, h[e(2303)] = d + x[e(491)][e(476)](N), h[e(967)] = u + "/" + x[e(491)].escapeFragment(N), a += "  " + x[e(138)](h) + " ", h[e(1409)] = l0, a += e(1760), f && (a += " if (" + b + e(288), m += "}"));
    }
    return f && (a += e(1761) + m + e(1e3) + v + e(1576)), a;
  }), ut;
}
var ft, wa;
function Q2() {
  return wa || (wa = 1, ft = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x[e(1333)], c = x[e(2066)][t], d = x.schemaPath + x[e(491)].getProperty(t), u = x[e(967)] + "/" + t, f = !x[e(1947)][e(369)], l = e(1841) + (o || ""), v = e(1390) + n, h = x[e(1947)][e(2279)] && c && c[e(2279)];
    h && (a += e(1715) + n + e(1935) + x[e(491)][e(477)](c[e(2279)], o, x[e(1743)]) + "; ");
    var m = "i" + n, b = "schema" + n;
    !h && (a += e(1901) + b + e(1461) + d + ";"), a += "var " + v + ";", h && (a += e(1730) + n + e(2250) + v + e(405) + n + ")) " + v + " = false; else {"), a += "" + v + e(1057) + m + e(300) + m + "<" + b + e(728) + m + e(1141) + l + ", " + b + "[" + m + e(1136) + v + " = true; break; }", h && (a += e(1103)), a += " if (!" + v + ") {   ";
    var w = w || [];
    w[e(365)](a), a = "", x[e(459)] !== !1 ? (a += e(2448) + "enum" + e(2404) + x[e(1524)] + e(544) + x[e(491)].toQuotedString(u) + e(1873) + n + " } ", x[e(1947)][e(649)] !== !1 && (a += e(2226)), x[e(1947)][e(387)] && (a += e(1811) + d + e(361) + x[e(2303)] + e(1688) + l + " "), a += e(1066)) : a += " {} ";
    var E = a;
    return a = w.pop(), !x.compositeRule && f ? x[e(1501)] ? a += e(2020) + E + "]); " : a += e(1908) + E + e(2294) : a += e(1433) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " }", f && (a += e(742)), a;
  }), ft;
}
var lt, Sa;
function Y2() {
  return Sa || (Sa = 1, lt = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x[e(1333)], c = x[e(2066)][t], d = x[e(2303)] + x[e(491)][e(476)](t), u = x[e(967)] + "/" + t, f = !x[e(1947)][e(369)], l = "data" + (o || "");
    if (x.opts[e(1102)] === !1) return f && (a += " if (true) { "), a;
    var v = x.opts[e(2279)] && c && c.$data, h;
    v ? (a += " var schema" + n + e(1935) + x[e(491)][e(477)](c[e(2279)], o, x[e(1743)]) + "; ", h = e(2066) + n) : h = c;
    var m = x[e(1947)][e(302)], b = Array[e(242)](m);
    if (v) {
      var w = e(1102) + n, E = e(1756) + n, O = e(1980) + n;
      a += e(1901) + w + e(247) + h + e(1508) + E + " = typeof " + w + e(444) + w + e(1933) + w + e(2266) + O + e(1935) + E + e(1207) + w + e(1937) + E + e(288), x[e(1501)] && (a += e(716) + n + e(1935) + w + e(1687)), a += " " + w + " = " + w + e(1312), v && (a += " (" + h + " !== undefined && typeof " + h + e(1106)), a += " (", m != "ignore" && (a += " (" + h + e(1741) + w + " ", b && (a += e(304) + h + e(924)), a += e(2061)), a += " (" + w + e(1207) + O + e(2433) + r + e(645) + w + e(2370), x[e(1501)] ? a += e(1519) + n + e(1240) + w + "(" + l + ") : " + w + "(" + l + ")) " : a += " " + w + "(" + l + ") ", a += e(2271) + w + e(1272) + l + e(1325);
    } else {
      var w = x[e(2169)][c];
      if (!w) {
        if (m == e(657)) return x.logger.warn(e(2339) + c + e(888) + x[e(967)] + '"'), f && (a += " if (true) { "), a;
        if (b && m.indexOf(c) >= 0) return f && (a += e(1600)), a;
        throw new Error('unknown format "' + c + e(1279) + x[e(967)] + '"');
      }
      var E = typeof w == e(1526) && !(w instanceof RegExp) && w[e(138)], O = E && w[e(1273)] || e(2254);
      if (E) {
        var q = w[e(1501)] === !0;
        w = w[e(138)];
      }
      if (O != r) return f && (a += e(1600)), a;
      if (q) {
        if (!x[e(1501)]) throw new Error(e(691));
        var R = e(2169) + x[e(491)][e(476)](c) + e(1313);
        a += e(2460) + R + "(" + l + e(1991);
      } else {
        a += e(985);
        var R = "formats" + x[e(491)][e(476)](c);
        E && (R += e(1313)), typeof w == e(2042) ? a += " " + R + "(" + l + ") " : a += " " + R + e(1272) + l + ") ", a += ") { ";
      }
    }
    var k = k || [];
    k[e(365)](a), a = "", x[e(459)] !== !1 ? (a += e(2448) + e(1102) + e(2404) + x.errorPath + e(544) + x[e(491)][e(2364)](u) + e(2403), v ? a += "" + h : a += "" + x.util[e(2364)](c), a += e(2492), x[e(1947)][e(649)] !== !1 && (a += e(2307), v ? a += "' + " + h + e(2085) : a += "" + x[e(491)][e(1725)](c), a += e(278)), x[e(1947)][e(387)] && (a += " , schema:  ", v ? a += e(1237) + d : a += "" + x[e(491)][e(2364)](c), a += e(605) + x[e(2303)] + e(1688) + l + " "), a += e(1066)) : a += e(1335);
    var N = a;
    return a = k[e(2211)](), !x.compositeRule && f ? x[e(1501)] ? a += e(2020) + N + e(1480) : a += " validate.errors = [" + N + "]; return false; " : a += " var err = " + N + e(2193), a += e(1066), f && (a += " else { "), a;
  }), lt;
}
var ht, ka;
function X2() {
  return ka || (ka = 1, ht = function(x, t, r) {
    var e = K, a = " ", n = x.level, o = x[e(1333)], c = x[e(2066)][t], d = x[e(2303)] + x[e(491)][e(476)](t), u = x[e(967)] + "/" + t, f = !x[e(1947)][e(369)], l = e(1841) + (o || ""), v = e(1390) + n, h = e(2157) + n, m = x[e(491)][e(2096)](x);
    m.level++;
    var b = "valid" + m[e(285)], w = x.schema.then, E = x.schema[e(348)], O = w !== void 0 && (x[e(1947)][e(1698)] ? typeof w == e(1526) && Object[e(1087)](w)[e(1407)] > 0 || w === !1 : x[e(491)][e(533)](w, x[e(2136)][e(2337)])), q = E !== void 0 && (x[e(1947)].strictKeywords ? typeof E == e(1526) && Object[e(1087)](E)[e(1407)] > 0 || E === !1 : x[e(491)][e(533)](E, x[e(2136)][e(2337)])), R = m[e(1409)];
    if (O || q) {
      var k;
      m[e(459)] = !1, m[e(2066)] = c, m[e(2303)] = d, m[e(967)] = u, a += " var " + h + " = errors; var " + v + e(347);
      var N = x.compositeRule;
      x[e(2089)] = m[e(2089)] = !0, a += "  " + x[e(138)](m) + " ", m[e(1409)] = R, m.createErrors = !0, a += "  errors = " + h + e(2123) + h + e(1088) + h + e(2022), x[e(2089)] = m[e(2089)] = N, O ? (a += e(1e3) + b + e(748), m[e(2066)] = x.schema[e(2367)], m[e(2303)] = x[e(2303)] + e(1257), m[e(967)] = x[e(967)] + e(2382), a += "  " + x[e(138)](m) + " ", m[e(1409)] = R, a += " " + v + e(1935) + b + "; ", O && q ? (k = e(1691) + n, a += e(1901) + k + " = 'then'; ") : k = e(768), a += " } ", q && (a += e(742))) : a += e(1439) + b + e(288), q && (m[e(2066)] = x.schema[e(348)], m[e(2303)] = x[e(2303)] + e(1199), m[e(967)] = x.errSchemaPath + e(1243), a += "  " + x[e(138)](m) + " ", m[e(1409)] = R, a += " " + v + e(1935) + b + "; ", O && q ? (k = e(1691) + n, a += " var " + k + e(2313)) : k = e(196), a += e(1066)), a += e(1439) + v + e(1765), x[e(459)] !== !1 ? (a += e(2448) + "if" + e(2404) + x[e(1524)] + e(544) + x[e(491)][e(2364)](u) + " , params: { failingKeyword: " + k + e(1066), x.opts[e(649)] !== !1 && (a += ` , message: 'should match "' + ` + k + e(886)), x[e(1947)][e(387)] && (a += e(1811) + d + " , parentSchema: validate.schema" + x[e(2303)] + e(1688) + l + " "), a += e(1066)) : a += " {} ", a += e(2193), !x.compositeRule && f && (x[e(1501)] ? a += " throw new ValidationError(vErrors); " : a += " validate.errors = vErrors; return false; "), a += e(1462), f && (a += e(742));
    } else f && (a += " if (true) { ");
    return a;
  }), ht;
}
var pt, Ea;
function _2() {
  return Ea || (Ea = 1, pt = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x[e(1333)], c = x[e(2066)][t], d = x.schemaPath + x.util[e(476)](t), u = x[e(967)] + "/" + t, f = !x[e(1947)][e(369)], l = e(1841) + (o || ""), v = e(1390) + n, h = e(2157) + n, m = x[e(491)][e(2096)](x), b = "";
    m.level++;
    var w = e(1390) + m.level, E = "i" + n, O = m.dataLevel = x[e(1333)] + 1, q = e(1841) + O, R = x.baseId;
    if (a += e(1125) + h + e(1983) + v + ";", Array[e(242)](c)) {
      var k = x[e(2066)].additionalItems;
      if (k === !1) {
        a += " " + v + e(1935) + l + ".length <= " + c[e(1407)] + "; ";
        var N = u;
        u = x[e(967)] + "/additionalItems", a += e(2261) + v + ") {   ";
        var j = j || [];
        j[e(365)](a), a = "", x[e(459)] !== !1 ? (a += " { keyword: '" + e(2251) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(544) + x.util[e(2364)](u) + e(1107) + c[e(1407)] + e(1066), x[e(1947)][e(649)] !== !1 && (a += " , message: 'should NOT have more than " + c[e(1407)] + " items' "), x.opts[e(387)] && (a += e(2182) + x[e(2303)] + e(1688) + l + " "), a += e(1066)) : a += " {} ";
        var D = a;
        a = j[e(2211)](), !x[e(2089)] && f ? x[e(1501)] ? a += e(2020) + D + e(1480) : a += e(1908) + D + "]; return false; " : a += e(1433) + D + e(2193), a += e(1066), u = N, f && (b += "}", a += e(742));
      }
      var M = c;
      if (M) {
        for (var F, C = -1, L = M.length - 1; C < L; )
          if (F = M[C += 1], x[e(1947)][e(1698)] ? typeof F == e(1526) && Object[e(1087)](F).length > 0 || F === !1 : x.util[e(533)](F, x[e(2136)][e(2337)])) {
            a += " " + w + e(765) + l + e(1182) + C + e(288);
            var H = l + "[" + C + "]";
            m.schema = F, m[e(2303)] = d + "[" + C + "]", m[e(967)] = u + "/" + C, m.errorPath = x[e(491)][e(1733)](x[e(1524)], C, x[e(1947)][e(800)], !0), m.dataPathArr[O] = C;
            var V = x.validate(m);
            m[e(1409)] = R, x[e(491)].varOccurences(V, q) < 2 ? a += " " + x[e(491)].varReplace(V, q, H) + " " : a += " var " + q + e(1935) + H + "; " + V + " ", a += e(1760), f && (a += " if (" + w + e(288), b += "}");
          }
      }
      if (typeof k == "object" && (x.opts[e(1698)] ? typeof k == e(1526) && Object[e(1087)](k).length > 0 || k === !1 : x[e(491)][e(533)](k, x[e(2136)][e(2337)]))) {
        m.schema = k, m[e(2303)] = x[e(2303)] + e(199), m.errSchemaPath = x[e(967)] + "/additionalItems", a += " " + w + " = true; if (" + l + e(1182) + c.length + e(749) + E + e(1935) + c[e(1407)] + "; " + E + e(226) + l + e(728) + E + e(1636), m[e(1524)] = x[e(491)][e(1733)](x[e(1524)], E, x[e(1947)][e(800)], !0);
        var H = l + "[" + E + "]";
        m[e(1743)][O] = E;
        var V = x[e(138)](m);
        m[e(1409)] = R, x[e(491)][e(1532)](V, q) < 2 ? a += " " + x[e(491)][e(1583)](V, q, H) + " " : a += e(1901) + q + " = " + H + "; " + V + " ", f && (a += " if (!" + w + e(142)), a += " } }  ", f && (a += e(1e3) + w + e(288), b += "}");
      }
    } else if (x.opts[e(1698)] ? typeof c == e(1526) && Object[e(1087)](c).length > 0 || c === !1 : x[e(491)].schemaHasRules(c, x.RULES[e(2337)])) {
      m.schema = c, m[e(2303)] = d, m[e(967)] = u, a += e(532) + E + " = 0; " + E + e(226) + l + ".length; " + E + e(1636), m[e(1524)] = x[e(491)][e(1733)](x.errorPath, E, x[e(1947)][e(800)], !0);
      var H = l + "[" + E + "]";
      m[e(1743)][O] = E;
      var V = x.validate(m);
      m[e(1409)] = R, x[e(491)][e(1532)](V, q) < 2 ? a += " " + x[e(491)][e(1583)](V, q, H) + " " : a += " var " + q + e(1935) + H + "; " + V + " ", f && (a += e(1439) + w + e(142)), a += " }";
    }
    return f && (a += " " + b + " if (" + h + e(1576)), a;
  }), pt;
}
var mt, Pa;
function Ia() {
  return Pa || (Pa = 1, mt = function(x, t, r) {
    var e = K, a = " ", n = x.level, o = x.dataLevel, c = x[e(2066)][t], d = x[e(2303)] + x[e(491)][e(476)](t), u = x[e(967)] + "/" + t, f = !x.opts[e(369)], R, l = e(1841) + (o || ""), v = x[e(1947)][e(2279)] && c && c[e(2279)], h;
    v ? (a += " var schema" + n + " = " + x[e(491)][e(477)](c[e(2279)], o, x.dataPathArr) + "; ", h = e(2066) + n) : h = c;
    var m = t == "maximum", b = m ? e(2411) : "exclusiveMinimum", w = x[e(2066)][b], E = x.opts[e(2279)] && w && w.$data, O = m ? "<" : ">", q = m ? ">" : "<", R = void 0;
    if (!(v || typeof c == "number" || c === void 0)) throw new Error(t + e(730));
    if (!(E || w === void 0 || typeof w == e(2240) || typeof w == "boolean")) throw new Error(b + e(1300));
    if (E) {
      var k = x[e(491)].getData(w[e(2279)], o, x[e(1743)]), N = "exclusive" + n, j = e(2443) + n, D = e(2221) + n, M = "op" + n, F = e(887) + M + " + '";
      a += " var schemaExcl" + n + e(1935) + k + "; ", k = e(249) + n, a += e(1901) + N + e(2291) + j + e(1578) + k + e(116) + j + e(1639) + j + e(166) + j + e(1563);
      var R = b, C = C || [];
      C[e(365)](a), a = "", x[e(459)] !== !1 ? (a += e(2448) + (R || "_exclusiveLimit") + e(2404) + x[e(1524)] + " , schemaPath: " + x.util[e(2364)](u) + e(831), x[e(1947)][e(649)] !== !1 && (a += e(1360) + b + e(1674)), x[e(1947)][e(387)] && (a += e(1811) + d + " , parentSchema: validate.schema" + x[e(2303)] + " , data: " + l + " "), a += e(1066)) : a += e(1335);
      var L = a;
      a = C.pop(), !x[e(2089)] && f ? x[e(1501)] ? a += " throw new ValidationError([" + L + e(1480) : a += " validate.errors = [" + L + e(2294) : a += " var err = " + L + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += e(803), v && (a += " (" + h + " !== undefined && typeof " + h + e(1187)), a += " " + j + e(1828) + N + " = " + h + e(2365) + k + " " + O + "= " + h + ") ? " + l + " " + q + "= " + k + e(2271) + l + " " + q + " " + h + " ) : ( (" + N + e(1935) + k + e(455) + l + " " + q + "= " + h + e(2271) + l + " " + q + " " + h + e(194) + l + " !== " + l + e(817) + n + " = " + N + e(1286) + O + e(2095) + O + "='; ", c === void 0 && (R = b, u = x[e(967)] + "/" + b, h = k, v = E);
    } else {
      var D = typeof w == e(2240), F = O;
      if (D && v) {
        var M = "'" + F + "'";
        a += e(623), v && (a += " (" + h + e(940) + h + e(1187)), a += e(1662) + h + e(2365) + w + " " + O + "= " + h + e(1372) + l + " " + q + "= " + w + " : " + l + " " + q + " " + h + e(194) + l + e(1934) + l + e(288);
      } else {
        D && c === void 0 ? (N = !0, R = b, u = x.errSchemaPath + "/" + b, h = w, q += "=") : (D && (h = Math[e(m ? 475 : 1443)](w, c)), w === (D ? h : !0) ? (N = !0, R = b, u = x.errSchemaPath + "/" + b, q += "=") : (N = !1, F += "="));
        var M = "'" + F + "'";
        a += e(623), v && (a += " (" + h + e(940) + h + e(1187)), a += " " + l + " " + q + " " + h + e(1518) + l + e(1934) + l + e(288);
      }
    }
    R = R || t;
    var C = C || [];
    C[e(365)](a), a = "", x[e(459)] !== !1 ? (a += e(2448) + (R || e(1256)) + "' , dataPath: (dataPath || '') + " + x[e(1524)] + e(544) + x.util[e(2364)](u) + e(1270) + M + e(2409) + h + e(1838) + N + " } ", x.opts.messages !== !1 && (a += e(789) + F + " ", v ? a += e(887) + h : a += "" + h + "'"), x[e(1947)][e(387)] && (a += e(541), v ? a += e(1237) + d : a += "" + c, a += "         , parentSchema: validate.schema" + x[e(2303)] + " , data: " + l + " "), a += e(1066)) : a += e(1335);
    var L = a;
    return a = C[e(2211)](), !x[e(2089)] && f ? x[e(1501)] ? a += e(2020) + L + e(1480) : a += " validate.errors = [" + L + e(2294) : a += e(1433) + L + e(2193), a += e(1066), f && (a += e(742)), a;
  }), mt;
}
var vt, Ra;
function Ca() {
  return Ra || (Ra = 1, vt = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x[e(1333)], c = x[e(2066)][t], d = x.schemaPath + x.util[e(476)](t), u = x.errSchemaPath + "/" + t, f = !x.opts.allErrors, b, l = "data" + (o || ""), v = x[e(1947)][e(2279)] && c && c[e(2279)], h;
    if (v ? (a += " var schema" + n + e(1935) + x[e(491)].getData(c[e(2279)], o, x[e(1743)]) + "; ", h = e(2066) + n) : h = c, !(v || typeof c == "number")) throw new Error(t + e(730));
    var m = t == e(1837) ? ">" : "<";
    a += "if ( ", v && (a += " (" + h + e(940) + h + e(1187)), a += " " + l + ".length " + m + " " + h + ") { ";
    var b = t, w = w || [];
    w[e(365)](a), a = "", x.createErrors !== !1 ? (a += e(2448) + (b || e(1985)) + e(2404) + x[e(1524)] + " , schemaPath: " + x[e(491)][e(2364)](u) + e(1107) + h + e(1066), x[e(1947)][e(649)] !== !1 && (a += e(1553), t == e(1837) ? a += e(1978) : a += e(1623), a += " than ", v ? a += "' + " + h + e(2085) : a += "" + c, a += e(875)), x[e(1947)][e(387)] && (a += " , schema:  ", v ? a += e(1237) + d : a += "" + c, a += e(605) + x[e(2303)] + e(1688) + l + " "), a += " } ") : a += e(1335);
    var E = a;
    return a = w[e(2211)](), !x.compositeRule && f ? x[e(1501)] ? a += e(2020) + E + e(1480) : a += " validate.errors = [" + E + e(2294) : a += e(1433) + E + e(2193), a += "} ", f && (a += e(742)), a;
  }), vt;
}
var gt, Fa;
function Na() {
  return Fa || (Fa = 1, gt = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x[e(1333)], c = x[e(2066)][t], d = x.schemaPath + x[e(491)][e(476)](t), u = x[e(967)] + "/" + t, f = !x[e(1947)].allErrors, b, l = "data" + (o || ""), v = x[e(1947)][e(2279)] && c && c[e(2279)], h;
    if (v ? (a += e(1715) + n + e(1935) + x[e(491)].getData(c.$data, o, x.dataPathArr) + "; ", h = e(2066) + n) : h = c, !(v || typeof c == e(2240))) throw new Error(t + e(730));
    var m = t == e(845) ? ">" : "<";
    a += "if ( ", v && (a += " (" + h + e(940) + h + e(1187)), x[e(1947)][e(384)] === !1 ? a += " " + l + e(1616) : a += " ucs2length(" + l + ") ", a += " " + m + " " + h + e(288);
    var b = t, w = w || [];
    w[e(365)](a), a = "", x.createErrors !== !1 ? (a += e(2448) + (b || "_limitLength") + e(2404) + x.errorPath + e(544) + x[e(491)][e(2364)](u) + e(1107) + h + " } ", x[e(1947)][e(649)] !== !1 && (a += " , message: 'should NOT be ", t == "maxLength" ? a += e(2113) : a += "shorter", a += e(1522), v ? a += e(887) + h + e(2085) : a += "" + c, a += e(1574)), x[e(1947)][e(387)] && (a += e(541), v ? a += e(1237) + d : a += "" + c, a += e(605) + x[e(2303)] + e(1688) + l + " "), a += " } ") : a += " {} ";
    var E = a;
    return a = w.pop(), !x[e(2089)] && f ? x.async ? a += e(2020) + E + e(1480) : a += e(1908) + E + e(2294) : a += e(1433) + E + e(2193), a += "} ", f && (a += " else { "), a;
  }), gt;
}
var bt, qa;
function Oa() {
  return qa || (qa = 1, bt = function(x, t, r) {
    var e = K, a = " ", n = x.level, o = x[e(1333)], c = x[e(2066)][t], d = x[e(2303)] + x[e(491)].getProperty(t), u = x[e(967)] + "/" + t, f = !x[e(1947)][e(369)], b, l = e(1841) + (o || ""), v = x.opts[e(2279)] && c && c[e(2279)], h;
    if (v ? (a += e(1715) + n + e(1935) + x[e(491)][e(477)](c[e(2279)], o, x.dataPathArr) + "; ", h = "schema" + n) : h = c, !(v || typeof c == "number")) throw new Error(t + e(730));
    var m = t == e(1079) ? ">" : "<";
    a += e(435), v && (a += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), a += e(1093) + l + e(2016) + m + " " + h + e(288);
    var b = t, w = w || [];
    w.push(a), a = "", x.createErrors !== !1 ? (a += e(2448) + (b || e(2486)) + e(2404) + x.errorPath + e(544) + x[e(491)][e(2364)](u) + e(1107) + h + e(1066), x[e(1947)][e(649)] !== !1 && (a += " , message: 'should NOT have ", t == "maxProperties" ? a += e(1978) : a += e(1623), a += " than ", v ? a += e(887) + h + e(2085) : a += "" + c, a += e(2078)), x.opts.verbose && (a += e(541), v ? a += e(1237) + d : a += "" + c, a += e(605) + x[e(2303)] + e(1688) + l + " "), a += " } ") : a += " {} ";
    var E = a;
    return a = w.pop(), !x[e(2089)] && f ? x[e(1501)] ? a += e(2020) + E + e(1480) : a += e(1908) + E + e(2294) : a += e(1433) + E + e(2193), a += "} ", f && (a += e(742)), a;
  }), bt;
}
var yt, Ta;
function ec() {
  return Ta || (Ta = 1, yt = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x[e(1333)], c = x[e(2066)][t], d = x[e(2303)] + x[e(491)][e(476)](t), u = x.errSchemaPath + "/" + t, f = !x[e(1947)][e(369)], l = e(1841) + (o || ""), v = x.opts[e(2279)] && c && c[e(2279)], h;
    if (v ? (a += e(1715) + n + e(1935) + x[e(491)].getData(c.$data, o, x[e(1743)]) + "; ", h = e(2066) + n) : h = c, !(v || typeof c == "number")) throw new Error(t + e(730));
    a += e(198) + n + ";if (", v && (a += " " + h + e(1615) + h + " != 'number' || "), a += " (division" + n + e(1935) + l + e(1224) + h + ", ", x.opts[e(1003)] ? a += e(585) + n + ") - division" + n + e(2118) + x[e(1947)][e(1003)] + " " : a += e(1856) + n + e(2278) + n + ") ", a += e(2402), v && (a += e(1458)), a += e(123);
    var m = m || [];
    m[e(365)](a), a = "", x[e(459)] !== !1 ? (a += e(2448) + e(1262) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(544) + x[e(491)][e(2364)](u) + " , params: { multipleOf: " + h + e(1066), x.opts.messages !== !1 && (a += e(505), v ? a += "' + " + h : a += "" + h + "'"), x[e(1947)][e(387)] && (a += e(541), v ? a += e(1237) + d : a += "" + c, a += "         , parentSchema: validate.schema" + x.schemaPath + " , data: " + l + " "), a += " } ") : a += e(1335);
    var b = a;
    return a = m.pop(), !x[e(2089)] && f ? x[e(1501)] ? a += e(2020) + b + "]); " : a += e(1908) + b + "]; return false; " : a += e(1433) + b + e(2193), a += "} ", f && (a += e(742)), a;
  }), yt;
}
var wt, Aa;
function xc() {
  return Aa || (Aa = 1, wt = function(x, t, r) {
    var e = K, a = " ", n = x.level, o = x[e(1333)], c = x.schema[t], d = x[e(2303)] + x[e(491)][e(476)](t), u = x[e(967)] + "/" + t, f = !x[e(1947)][e(369)], l = e(1841) + (o || ""), v = e(2157) + n, h = x.util.copy(x);
    h[e(285)]++;
    var m = e(1390) + h[e(285)];
    if (x[e(1947)][e(1698)] ? typeof c == "object" && Object.keys(c)[e(1407)] > 0 || c === !1 : x[e(491)].schemaHasRules(c, x[e(2136)][e(2337)])) {
      h[e(2066)] = c, h[e(2303)] = d, h[e(967)] = u, a += e(1901) + v + " = errors;  ";
      var b = x[e(2089)];
      x[e(2089)] = h[e(2089)] = !0, h[e(459)] = !1;
      var w;
      h[e(1947)][e(369)] && (w = h[e(1947)][e(369)], h.opts[e(369)] = !1), a += " " + x[e(138)](h) + " ", h[e(459)] = !0, w && (h[e(1947)][e(369)] = w), x[e(2089)] = h[e(2089)] = b, a += e(1e3) + m + ") {   ";
      var E = E || [];
      E.push(a), a = "", x[e(459)] !== !1 ? (a += " { keyword: '" + e(472) + e(2404) + x[e(1524)] + e(544) + x[e(491)][e(2364)](u) + e(831), x[e(1947)][e(649)] !== !1 && (a += " , message: 'should NOT be valid' "), x[e(1947)][e(387)] && (a += e(1811) + d + e(361) + x[e(2303)] + e(1688) + l + " "), a += " } ") : a += " {} ";
      var O = a;
      a = E[e(2211)](), !x.compositeRule && f ? x[e(1501)] ? a += e(2020) + O + e(1480) : a += e(1908) + O + e(2294) : a += e(1433) + O + e(2193), a += e(1511) + v + e(2123) + v + ") vErrors.length = " + v + "; else vErrors = null; } ", x[e(1947)][e(369)] && (a += e(1066));
    } else a += e(1052), x[e(459)] !== !1 ? (a += " { keyword: '" + e(472) + e(2404) + x[e(1524)] + e(544) + x[e(491)][e(2364)](u) + " , params: {} ", x[e(1947)][e(649)] !== !1 && (a += " , message: 'should NOT be valid' "), x.opts[e(387)] && (a += e(1811) + d + e(361) + x[e(2303)] + e(1688) + l + " "), a += e(1066)) : a += e(1335), a += e(2193), f && (a += e(2344));
    return a;
  }), wt;
}
var St, Da;
function tc() {
  return Da || (Da = 1, St = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x[e(1333)], c = x[e(2066)][t], d = x[e(2303)] + x[e(491)][e(476)](t), u = x[e(967)] + "/" + t, f = !x[e(1947)][e(369)], l = "data" + (o || ""), v = "valid" + n, h = e(2157) + n, m = x[e(491)][e(2096)](x), b = "";
    m[e(285)]++;
    var w = e(1390) + m[e(285)], E = m.baseId, O = e(1373) + n, q = e(594) + n;
    a += e(1125) + h + " = errors , " + O + e(1317) + v + e(1317) + q + e(1097);
    var R = x[e(2089)];
    x.compositeRule = m.compositeRule = !0;
    var k = c;
    if (k)
      for (var N, j = -1, D = k[e(1407)] - 1; j < D; )
        N = k[j += 1], (x[e(1947)][e(1698)] ? typeof N == e(1526) && Object[e(1087)](N)[e(1407)] > 0 || N === !1 : x[e(491)][e(533)](N, x[e(2136)][e(2337)])) ? (m[e(2066)] = N, m.schemaPath = d + "[" + j + "]", m[e(967)] = u + "/" + j, a += "  " + x[e(138)](m) + " ", m.baseId = E) : a += " var " + w + " = true; ", j && (a += e(1e3) + w + " && " + O + ") { " + v + e(2206) + q + e(2166) + q + ", " + j + e(671), b += "}"), a += e(1e3) + w + e(288) + v + " = " + O + e(546) + q + e(1935) + j + e(531);
    return x[e(2089)] = m[e(2089)] = R, a += "" + b + e(466) + v + e(1765), x[e(459)] !== !1 ? (a += e(2448) + e(245) + e(2404) + x.errorPath + e(544) + x[e(491)][e(2364)](u) + " , params: { passingSchemas: " + q + e(1066), x[e(1947)][e(649)] !== !1 && (a += e(1301)), x[e(1947)][e(387)] && (a += e(1811) + d + e(361) + x[e(2303)] + e(1688) + l + " "), a += e(1066)) : a += e(1335), a += e(2193), !x[e(2089)] && f && (x[e(1501)] ? a += " throw new ValidationError(vErrors); " : a += e(2056)), a += e(529) + h + e(2123) + h + e(1088) + h + "; else vErrors = null; }", x.opts[e(369)] && (a += e(1066)), a;
  }), St;
}
var kt, ja;
function rc() {
  return ja || (ja = 1, kt = function(x, t, r) {
    var e = K, a = " ", n = x.level, o = x[e(1333)], c = x[e(2066)][t], d = x[e(2303)] + x.util.getProperty(t), u = x[e(967)] + "/" + t, f = !x.opts[e(369)], l = e(1841) + (o || ""), v = x[e(1947)][e(2279)] && c && c[e(2279)], h;
    v ? (a += e(1715) + n + e(1935) + x[e(491)][e(477)](c[e(2279)], o, x.dataPathArr) + "; ", h = e(2066) + n) : h = c;
    var m = v ? e(1250) + h + "))" : x[e(1007)](c);
    a += e(435), v && (a += " (" + h + e(940) + h + e(1106)), a += " !" + m + e(1272) + l + e(2065);
    var b = b || [];
    b[e(365)](a), a = "", x[e(459)] !== !1 ? (a += e(2448) + e(1949) + e(2404) + x[e(1524)] + e(544) + x[e(491)][e(2364)](u) + e(140), v ? a += "" + h : a += "" + x[e(491)][e(2364)](c), a += e(2492), x[e(1947)][e(649)] !== !1 && (a += e(1496), v ? a += e(887) + h + e(2085) : a += "" + x.util[e(1725)](c), a += e(278)), x.opts[e(387)] && (a += e(541), v ? a += e(1237) + d : a += "" + x[e(491)][e(2364)](c), a += e(605) + x[e(2303)] + " , data: " + l + " "), a += e(1066)) : a += e(1335);
    var w = a;
    return a = b[e(2211)](), !x.compositeRule && f ? x[e(1501)] ? a += e(2020) + w + e(1480) : a += e(1908) + w + "]; return false; " : a += " var err = " + w + e(2193), a += "} ", f && (a += e(742)), a;
  }), kt;
}
var Et, Ma;
function ac() {
  return Ma || (Ma = 1, Et = function(x, t, r) {
    var e = K, a = " ", n = x.level, o = x.dataLevel, c = x[e(2066)][t], d = x.schemaPath + x[e(491)][e(476)](t), u = x.errSchemaPath + "/" + t, f = !x[e(1947)][e(369)], l = e(1841) + (o || ""), v = "errs__" + n, h = x.util[e(2096)](x), m = "";
    h[e(285)]++;
    var b = e(1390) + h[e(285)], w = e(2397) + n, E = e(1375) + n, O = h[e(1333)] = x[e(1333)] + 1, q = e(1841) + O, R = e(1744) + n, k = Object[e(1087)](c || {}).filter(f0), N = x[e(2066)][e(582)] || {}, j = Object[e(1087)](N)[e(1595)](f0), D = x[e(2066)].additionalProperties, M = k[e(1407)] || j[e(1407)], F = D === !1, C = typeof D == e(1526) && Object.keys(D)[e(1407)], L = x.opts[e(1330)], H = F || C || L, V = x[e(1947)][e(1632)], J = x[e(1409)], c0 = x[e(2066)][e(129)];
    if (c0 && !(x[e(1947)][e(2279)] && c0[e(2279)]) && c0.length < x[e(1947)].loopRequired) var d0 = x.util[e(1118)](c0);
    function f0(jx) {
      var Mx = e;
      return jx !== Mx(518);
    }
    if (a += e(1125) + v + e(1983) + b + " = true;", V && (a += e(1901) + R + e(830)), H) {
      if (V ? a += " " + R + e(1935) + R + e(1212) + l + e(1426) + E + e(300) + E + "<" + R + ".length; " + E + e(2499) + w + e(1935) + R + "[" + E + e(2213) : a += e(351) + w + e(1471) + l + e(288), M) {
        if (a += e(1918) + n + e(155), k[e(1407)])
          if (k.length > 8) a += e(616) + d + e(1852) + w + ") ";
          else {
            var i0 = k;
            if (i0)
              for (var l0, S0 = -1, b0 = i0[e(1407)] - 1; S0 < b0; )
                l0 = i0[S0 += 1], a += e(1518) + w + " == " + x[e(491)][e(2364)](l0) + " ";
          }
        if (j[e(1407)]) {
          var M0 = j;
          if (M0)
            for (var k0, Q0 = -1, A = M0[e(1407)] - 1; Q0 < A; )
              k0 = M0[Q0 += 1], a += " || " + x[e(1007)](k0) + ".test(" + w + ") ";
        }
        a += e(538) + n + ") { ";
      }
      if (L == e(2337)) a += e(1332) + l + "[" + w + e(2213);
      else {
        var T = x[e(1524)], $ = e(887) + w + e(2085);
        if (x[e(1947)][e(1817)] && (x[e(1524)] = x[e(491)].getPathExpr(x[e(1524)], w, x[e(1947)][e(800)])), F)
          if (L) a += " delete " + l + "[" + w + e(2213);
          else {
            a += " " + b + " = false; ";
            var G = u;
            u = x[e(967)] + e(1264);
            var Q = Q || [];
            Q[e(365)](a), a = "", x[e(459)] !== !1 ? (a += e(2448) + e(1137) + "' , dataPath: (dataPath || '') + " + x[e(1524)] + " , schemaPath: " + x[e(491)].toQuotedString(u) + e(726) + $ + e(394), x.opts[e(649)] !== !1 && (a += " , message: '", x.opts[e(1817)] ? a += e(1915) : a += "should NOT have additional properties", a += "' "), x[e(1947)][e(387)] && (a += " , schema: false , parentSchema: validate.schema" + x[e(2303)] + e(1688) + l + " "), a += e(1066)) : a += e(1335);
            var W = a;
            a = Q[e(2211)](), !x[e(2089)] && f ? x.async ? a += e(2020) + W + e(1480) : a += e(1908) + W + "]; return false; " : a += e(1433) + W + e(2193), u = G, f && (a += " break; ");
          }
        else if (C)
          if (L == "failing") {
            a += e(1901) + v + e(1861);
            var Y = x[e(2089)];
            x.compositeRule = h.compositeRule = !0, h.schema = D, h.schemaPath = x.schemaPath + e(976), h[e(967)] = x[e(967)] + e(1264), h[e(1524)] = x[e(1947)][e(1817)] ? x.errorPath : x.util[e(1733)](x[e(1524)], w, x[e(1947)].jsonPointers);
            var o0 = l + "[" + w + "]";
            h[e(1743)][O] = w;
            var s0 = x[e(138)](h);
            h[e(1409)] = J, x.util[e(1532)](s0, q) < 2 ? a += " " + x[e(491)].varReplace(s0, q, o0) + " " : a += e(1901) + q + " = " + o0 + "; " + s0 + " ", a += " if (!" + b + e(1724) + v + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + l + "[" + w + "]; }  ", x[e(2089)] = h[e(2089)] = Y;
          } else {
            h.schema = D, h.schemaPath = x[e(2303)] + e(976), h[e(967)] = x.errSchemaPath + e(1264), h[e(1524)] = x[e(1947)][e(1817)] ? x[e(1524)] : x[e(491)].getPathExpr(x[e(1524)], w, x[e(1947)][e(800)]);
            var o0 = l + "[" + w + "]";
            h[e(1743)][O] = w;
            var s0 = x[e(138)](h);
            h[e(1409)] = J, x[e(491)][e(1532)](s0, q) < 2 ? a += " " + x.util[e(1583)](s0, q, o0) + " " : a += e(1901) + q + e(1935) + o0 + "; " + s0 + " ", f && (a += e(1439) + b + ") break; ");
          }
        x[e(1524)] = T;
      }
      M && (a += e(1066)), a += e(1760), f && (a += e(1e3) + b + e(288), m += "}");
    }
    var _ = x.opts[e(1410)] && !x[e(2089)];
    if (k[e(1407)]) {
      var L0 = k;
      if (L0)
        for (var l0, T0 = -1, U0 = L0.length - 1; T0 < U0; ) {
          l0 = L0[T0 += 1];
          var w0 = c[l0];
          if (x.opts.strictKeywords ? typeof w0 == e(1526) && Object[e(1087)](w0)[e(1407)] > 0 || w0 === !1 : x.util[e(533)](w0, x.RULES[e(2337)])) {
            var G0 = x[e(491)][e(476)](l0), o0 = l + G0, ne = _ && w0[e(1058)] !== void 0;
            h.schema = w0, h[e(2303)] = d + G0, h[e(967)] = u + "/" + x[e(491)].escapeFragment(l0), h[e(1524)] = x[e(491)][e(1860)](x[e(1524)], l0, x[e(1947)][e(800)]), h[e(1743)][O] = x[e(491)][e(2364)](l0);
            var s0 = x[e(138)](h);
            if (h[e(1409)] = J, x[e(491)].varOccurences(s0, q) < 2) {
              s0 = x[e(491)][e(1583)](s0, q, o0);
              var Y0 = o0;
            } else {
              var Y0 = q;
              a += " var " + q + e(1935) + o0 + "; ";
            }
            if (ne) a += " " + s0 + " ";
            else {
              if (d0 && d0[l0]) {
                a += e(623) + Y0 + " === undefined ", V && (a += e(1887) + l + e(368) + x[e(491)].escapeQuotes(l0) + "') "), a += e(288) + b + e(2206);
                var T = x[e(1524)], G = u, A0 = x[e(491)].escapeQuotes(l0);
                x[e(1947)][e(1817)] && (x[e(1524)] = x.util[e(1860)](T, l0, x[e(1947)].jsonPointers)), u = x[e(967)] + e(2509);
                var Q = Q || [];
                Q[e(365)](a), a = "", x[e(459)] !== !1 ? (a += e(2448) + e(129) + "' , dataPath: (dataPath || '') + " + x[e(1524)] + e(544) + x[e(491)][e(2364)](u) + e(2277) + A0 + e(394), x[e(1947)][e(649)] !== !1 && (a += e(1360), x[e(1947)][e(1817)] ? a += "is a required property" : a += e(1946) + A0 + "\\'", a += "' "), x[e(1947)][e(387)] && (a += e(1811) + d + e(361) + x[e(2303)] + " , data: " + l + " "), a += e(1066)) : a += " {} ";
                var W = a;
                a = Q[e(2211)](), !x[e(2089)] && f ? x.async ? a += e(2020) + W + "]); " : a += " validate.errors = [" + W + e(2294) : a += " var err = " + W + e(2193), u = G, x[e(1524)] = T, a += " } else { ";
              } else f ? (a += e(623) + Y0 + e(761), V && (a += e(1887) + l + ", '" + x[e(491)][e(1725)](l0) + e(583)), a += e(288) + b + e(1858)) : (a += " if (" + Y0 + " !== undefined ", V && (a += " &&   Object.prototype.hasOwnProperty.call(" + l + ", '" + x.util[e(1725)](l0) + e(583)), a += e(2039));
              a += " " + s0 + " } ";
            }
          }
          f && (a += e(1e3) + b + e(288), m += "}");
        }
    }
    if (j[e(1407)]) {
      var V0 = j;
      if (V0)
        for (var k0, _0 = -1, Le = V0[e(1407)] - 1; _0 < Le; ) {
          k0 = V0[_0 += 1];
          var w0 = N[k0];
          if (x.opts[e(1698)] ? typeof w0 == "object" && Object[e(1087)](w0).length > 0 || w0 === !1 : x.util[e(533)](w0, x[e(2136)][e(2337)])) {
            h[e(2066)] = w0, h[e(2303)] = x[e(2303)] + e(882) + x[e(491)][e(476)](k0), h[e(967)] = x[e(967)] + e(2043) + x[e(491)][e(1229)](k0), V ? a += " " + R + e(1935) + R + e(1212) + l + "); for (var " + E + e(300) + E + "<" + R + ".length; " + E + e(2499) + w + e(1935) + R + "[" + E + e(2213) : a += e(351) + w + e(1471) + l + e(288), a += e(1e3) + x[e(1007)](k0) + e(1272) + w + e(688), h.errorPath = x[e(491)].getPathExpr(x[e(1524)], w, x.opts[e(800)]);
            var o0 = l + "[" + w + "]";
            h[e(1743)][O] = w;
            var s0 = x.validate(h);
            h[e(1409)] = J, x[e(491)][e(1532)](s0, q) < 2 ? a += " " + x.util[e(1583)](s0, q, o0) + " " : a += e(1901) + q + " = " + o0 + "; " + s0 + " ", f && (a += e(1439) + b + e(142)), a += " } ", f && (a += e(119) + b + e(546)), a += e(1760), f && (a += e(1e3) + b + e(288), m += "}");
          }
        }
    }
    return f && (a += " " + m + e(1e3) + v + e(1576)), a;
  }), Et;
}
var Pt, La;
function sc() {
  return La || (La = 1, Pt = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x[e(1333)], c = x[e(2066)][t], d = x[e(2303)] + x[e(491)][e(476)](t), u = x[e(967)] + "/" + t, f = !x[e(1947)].allErrors, l = e(1841) + (o || ""), v = e(2157) + n, h = x[e(491)].copy(x), m = "";
    h[e(285)]++;
    var b = e(1390) + h[e(285)];
    if (a += "var " + v + " = errors;", x.opts[e(1698)] ? typeof c == "object" && Object[e(1087)](c).length > 0 || c === !1 : x[e(491)].schemaHasRules(c, x[e(2136)][e(2337)])) {
      h[e(2066)] = c, h[e(2303)] = d, h[e(967)] = u;
      var w = "key" + n, E = e(1375) + n, O = "i" + n, q = e(887) + w + " + '", R = h.dataLevel = x[e(1333)] + 1, k = "data" + R, N = "dataProperties" + n, j = x[e(1947)].ownProperties, D = x[e(1409)];
      j && (a += e(1901) + N + e(923)), j ? a += " " + N + e(1935) + N + e(1212) + l + e(1426) + E + e(300) + E + "<" + N + ".length; " + E + e(2499) + w + e(1935) + N + "[" + E + e(2213) : a += e(351) + w + e(1471) + l + ") { ", a += e(906) + n + e(2046);
      var M = w, F = x[e(2089)];
      x[e(2089)] = h[e(2089)] = !0;
      var C = x.validate(h);
      h[e(1409)] = D, x[e(491)][e(1532)](C, k) < 2 ? a += " " + x[e(491)][e(1583)](C, k, M) + " " : a += e(1901) + k + " = " + M + "; " + C + " ", x.compositeRule = h[e(2089)] = F, a += e(1439) + b + e(848) + O + e(2309) + n + "; " + O + e(1210) + O + e(214) + O + e(1238) + w + e(1992), x.createErrors !== !1 ? (a += e(2448) + e(2141) + e(2404) + x.errorPath + e(544) + x[e(491)][e(2364)](u) + e(1631) + q + e(394), x[e(1947)][e(649)] !== !1 && (a += " , message: 'property name \\'" + q + "\\' is invalid' "), x[e(1947)][e(387)] && (a += e(1811) + d + e(361) + x[e(2303)] + " , data: " + l + " "), a += e(1066)) : a += e(1335), a += e(2193), !x[e(2089)] && f && (x[e(1501)] ? a += e(560) : a += e(2056)), f && (a += e(1775)), a += e(650);
    }
    return f && (a += " " + m + e(1e3) + v + e(1576)), a;
  }), Pt;
}
var It, $a;
function nc() {
  return $a || ($a = 1, It = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x.dataLevel, c = x[e(2066)][t], d = x[e(2303)] + x[e(491)][e(476)](t), u = x[e(967)] + "/" + t, f = !x.opts[e(369)], l = e(1841) + (o || ""), v = e(1390) + n, h = x[e(1947)][e(2279)] && c && c.$data;
    h && (a += e(1715) + n + e(1935) + x.util[e(477)](c[e(2279)], o, x[e(1743)]) + "; ");
    var m = e(2066) + n;
    if (!h)
      if (c[e(1407)] < x[e(1947)].loopRequired && x.schema[e(189)] && Object[e(1087)](x[e(2066)].properties)[e(1407)]) {
        var R = [], b = c;
        if (b)
          for (var w, E = -1, O = b[e(1407)] - 1; E < O; ) {
            w = b[E += 1];
            var q = x[e(2066)][e(189)][w];
            !(q && (x[e(1947)].strictKeywords ? typeof q == e(1526) && Object.keys(q)[e(1407)] > 0 || q === !1 : x[e(491)][e(533)](q, x[e(2136)].all))) && (R[R[e(1407)]] = w);
          }
      } else var R = c;
    if (h || R.length) {
      var k = x[e(1524)], N = h || R[e(1407)] >= x[e(1947)][e(1888)], j = x[e(1947)].ownProperties;
      if (f)
        if (a += " var missing" + n + "; ", N) {
          !h && (a += e(1901) + m + e(1461) + d + "; ");
          var D = "i" + n, M = e(2066) + n + "[" + D + "]", F = e(887) + M + " + '";
          x.opts[e(1817)] && (x[e(1524)] = x[e(491)][e(1733)](k, M, x.opts[e(800)])), a += " var " + v + e(546), h && (a += e(1730) + n + e(2250) + v + e(405) + n + ")) " + v + " = false; else {"), a += e(351) + D + " = 0; " + D + e(226) + m + e(728) + D + e(1636) + v + e(1935) + l + "[" + m + "[" + D + e(1818), j && (a += e(953) + l + ", " + m + "[" + D + "]) "), a += "; if (!" + v + e(250), h && (a += e(1103)), a += e(2261) + v + e(589);
          var C = C || [];
          C.push(a), a = "", x[e(459)] !== !1 ? (a += e(2448) + e(129) + e(2404) + x[e(1524)] + e(544) + x[e(491)][e(2364)](u) + e(2277) + F + e(394), x.opts[e(649)] !== !1 && (a += " , message: '", x[e(1947)][e(1817)] ? a += e(1054) : a += e(1946) + F + "\\'", a += "' "), x[e(1947)][e(387)] && (a += " , schema: validate.schema" + d + e(361) + x[e(2303)] + " , data: " + l + " "), a += e(1066)) : a += " {} ";
          var L = a;
          a = C.pop(), !x.compositeRule && f ? x[e(1501)] ? a += e(2020) + L + e(1480) : a += " validate.errors = [" + L + e(2294) : a += e(1433) + L + e(2193), a += " } else { ";
        } else {
          a += e(623);
          var H = R;
          if (H)
            for (var V, D = -1, J = H[e(1407)] - 1; D < J; ) {
              V = H[D += 1], D && (a += " || ");
              var c0 = x[e(491)][e(476)](V), d0 = l + c0;
              a += e(1854) + d0 + " === undefined ", j && (a += e(1887) + l + e(368) + x[e(491)][e(1725)](V) + e(583)), a += e(2359) + n + e(1935) + x[e(491)][e(2364)](x[e(1947)][e(800)] ? V : c0) + e(323);
            }
          a += e(748);
          var M = e(1249) + n, F = "' + " + M + e(2085);
          x[e(1947)]._errorDataPathProperty && (x[e(1524)] = x[e(1947)][e(800)] ? x[e(491)][e(1733)](k, M, !0) : k + " + " + M);
          var C = C || [];
          C[e(365)](a), a = "", x[e(459)] !== !1 ? (a += e(2448) + e(129) + e(2404) + x[e(1524)] + e(544) + x[e(491)][e(2364)](u) + e(2277) + F + e(394), x[e(1947)][e(649)] !== !1 && (a += e(1360), x.opts._errorDataPathProperty ? a += e(1054) : a += e(1946) + F + "\\'", a += "' "), x.opts.verbose && (a += e(1811) + d + " , parentSchema: validate.schema" + x[e(2303)] + e(1688) + l + " "), a += e(1066)) : a += " {} ";
          var L = a;
          a = C[e(2211)](), !x[e(2089)] && f ? x[e(1501)] ? a += e(2020) + L + e(1480) : a += e(1908) + L + e(2294) : a += e(1433) + L + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += e(240);
        }
      else if (N) {
        !h && (a += e(1901) + m + e(1461) + d + "; ");
        var D = "i" + n, M = e(2066) + n + "[" + D + "]", F = e(887) + M + e(2085);
        x[e(1947)][e(1817)] && (x[e(1524)] = x[e(491)][e(1733)](k, M, x[e(1947)][e(800)])), h && (a += e(1e3) + m + e(1448) + m + e(1666), x[e(459)] !== !1 ? (a += e(2448) + e(129) + e(2404) + x[e(1524)] + " , schemaPath: " + x[e(491)][e(2364)](u) + e(2277) + F + "' } ", x[e(1947)][e(649)] !== !1 && (a += e(1360), x[e(1947)]._errorDataPathProperty ? a += e(1054) : a += "should have required property \\'" + F + "\\'", a += "' "), x.opts[e(387)] && (a += e(1811) + d + e(361) + x.schemaPath + e(1688) + l + " "), a += e(1066)) : a += e(1335), a += e(1291) + m + e(2342)), a += e(351) + D + e(551) + D + e(226) + m + e(728) + D + e(523) + l + "[" + m + "[" + D + e(1956), j && (a += " || ! Object.prototype.hasOwnProperty.call(" + l + ", " + m + "[" + D + "]) "), a += e(1807), x.createErrors !== !1 ? (a += e(2448) + "required' , dataPath: (dataPath || '') + " + x[e(1524)] + " , schemaPath: " + x.util[e(2364)](u) + e(2277) + F + e(394), x[e(1947)][e(649)] !== !1 && (a += e(1360), x[e(1947)]._errorDataPathProperty ? a += e(1054) : a += "should have required property \\'" + F + "\\'", a += "' "), x[e(1947)][e(387)] && (a += e(1811) + d + e(361) + x[e(2303)] + e(1688) + l + " "), a += e(1066)) : a += e(1335), a += e(1603), h && (a += e(1103));
      } else {
        var f0 = R;
        if (f0)
          for (var V, i0 = -1, l0 = f0[e(1407)] - 1; i0 < l0; ) {
            V = f0[i0 += 1];
            var c0 = x[e(491)][e(476)](V), F = x[e(491)][e(1725)](V), d0 = l + c0;
            x[e(1947)][e(1817)] && (x[e(1524)] = x[e(491)][e(1860)](k, V, x[e(1947)][e(800)])), a += e(623) + d0 + " === undefined ", j && (a += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + x.util[e(1725)](V) + e(583)), a += e(1807), x[e(459)] !== !1 ? (a += e(2448) + e(129) + e(2404) + x[e(1524)] + e(544) + x.util[e(2364)](u) + e(2277) + F + e(394), x.opts[e(649)] !== !1 && (a += e(1360), x[e(1947)]._errorDataPathProperty ? a += "is a required property" : a += e(1946) + F + "\\'", a += "' "), x[e(1947)][e(387)] && (a += e(1811) + d + e(361) + x.schemaPath + e(1688) + l + " "), a += " } ") : a += e(1335), a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
          }
      }
      x[e(1524)] = k;
    } else f && (a += " if (true) {");
    return a;
  }), It;
}
var Rt, za;
function ic() {
  return za || (za = 1, Rt = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x[e(1333)], c = x.schema[t], d = x[e(2303)] + x[e(491)][e(476)](t), u = x[e(967)] + "/" + t, f = !x[e(1947)][e(369)], l = "data" + (o || ""), v = e(1390) + n, h = x.opts[e(2279)] && c && c.$data, m;
    if (h ? (a += e(1715) + n + e(1935) + x[e(491)][e(477)](c.$data, o, x.dataPathArr) + "; ", m = "schema" + n) : m = c, (c || h) && x[e(1947)][e(1179)] !== !1) {
      h && (a += e(1901) + v + e(116) + m + " === false || " + m + e(2250) + v + " = true; else if (typeof " + m + e(1727) + v + e(1213)), a += " var i = " + l + e(2087) + v + " = true , j; if (i > 1) { ";
      var b = x[e(2066)][e(561)] && x[e(2066)][e(561)].type, w = Array[e(242)](b);
      if (!b || b == e(1526) || b == e(1040) || w && (b[e(1679)]("object") >= 0 || b.indexOf("array") >= 0)) a += e(1166) + l + e(1255) + l + e(209) + v + " = false; break outer; } } } ";
      else {
        a += " var itemIndices = {}, item; for (;i--;) { var item = " + l + e(252);
        var E = e(2429) + (w ? "s" : "");
        a += e(1e3) + x[e(491)][E](b, "item", x[e(1947)][e(433)], !0) + e(2026), w && (a += e(391)), a += e(909) + v + e(440);
      }
      a += e(1066), h && (a += e(1103)), a += e(1439) + v + e(589);
      var O = O || [];
      O[e(365)](a), a = "", x[e(459)] !== !1 ? (a += e(2448) + e(1179) + e(2404) + x[e(1524)] + e(544) + x[e(491)][e(2364)](u) + e(928), x[e(1947)][e(649)] !== !1 && (a += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), x[e(1947)][e(387)] && (a += e(541), h ? a += e(1237) + d : a += "" + c, a += e(605) + x[e(2303)] + e(1688) + l + " "), a += " } ") : a += e(1335);
      var q = a;
      a = O[e(2211)](), !x[e(2089)] && f ? x[e(1501)] ? a += e(2020) + q + "]); " : a += e(1908) + q + e(2294) : a += " var err = " + q + e(2193), a += e(1066), f && (a += e(742));
    } else f && (a += e(1600));
    return a;
  }), Rt;
}
var Ct, Ha;
function oc() {
  return Ha || (Ha = 1, Ct = { $ref: V2(), allOf: W2(), anyOf: Z2(), $comment: K2(), const: B2(), contains: J2(), dependencies: G2(), enum: Q2(), format: Y2(), if: X2(), items: _2(), maximum: Ia(), minimum: Ia(), maxItems: Ca(), minItems: Ca(), maxLength: Na(), minLength: Na(), maxProperties: Oa(), minProperties: Oa(), multipleOf: ec(), not: xc(), oneOf: tc(), pattern: rc(), properties: ac(), propertyNames: sc(), required: nc(), uniqueItems: ic(), validate: pn() }), Ct;
}
var Ft, Ua;
function cc() {
  if (Ua) return Ft;
  Ua = 1;
  var i = oc(), x = Ze().toHash;
  return Ft = function() {
    var r = K, e = [{ type: r(2240), rules: [{ maximum: ["exclusiveMaximum"] }, { minimum: ["exclusiveMinimum"] }, "multipleOf", r(1102)] }, { type: r(2254), rules: [r(845), r(710), r(1949), "format"] }, { type: r(1040), rules: [r(1837), "minItems", "items", "contains", r(1179)] }, { type: r(1526), rules: [r(1079), "minProperties", r(129), r(160), r(2141), { properties: [r(1137), r(582)] }] }, { rules: [r(2431), r(1195), r(1781), r(472), r(1816), r(245), r(2006), "if"] }], a = [r(1273), r(313)], n = ["$schema", r(110), "id", r(2279), r(1202), r(537), r(2389), r(1058), r(661), "examples", r(1094), r(2398), "contentMediaType", "contentEncoding", "additionalItems", r(2367), r(348)], o = [r(2240), r(197), r(2254), r(1040), r(1526), r(968), r(599)];
    return e.all = x(a), e[r(2408)] = x(o), e[r(2106)](function(c) {
      var d = r;
      c[d(1562)] = c[d(1562)][d(2159)](function(u) {
        var f = d, l;
        if (typeof u == f(1526)) {
          var v = Object[f(1087)](u)[0];
          l = u[v], u = v, l[f(2106)](function(m) {
            var b = f;
            a[b(365)](m), e[b(2337)][m] = !0;
          });
        }
        a[f(365)](u);
        var h = e[f(2337)][u] = { keyword: u, code: i[u], implements: l };
        return h;
      }), e[d(2337)][d(313)] = { keyword: "$comment", code: i[d(313)] }, c[d(1273)] && (e[d(2408)][c.type] = c);
    }), e[r(2356)] = x(a[r(2008)](n)), e[r(363)] = {}, e;
  }, Ft;
}
var Nt, Va;
function dc() {
  var i = s;
  if (Va) return Nt;
  Va = 1;
  var x = [i(1262), i(1115), "exclusiveMaximum", i(656), "exclusiveMinimum", i(845), i(710), "pattern", i(2251), i(1837), i(2219), i(1179), i(1079), i(1922), i(129), "additionalProperties", "enum", i(1102), "const"];
  return Nt = function(t, r) {
    for (var e = i, a = 0; a < r[e(1407)]; a++) {
      t = JSON.parse(JSON[e(2099)](t));
      var n = r[a][e(1363)]("/"), o = t, c;
      for (c = 1; c < n[e(1407)]; c++) o = o[n[c]];
      for (c = 0; c < x[e(1407)]; c++) {
        var d = x[c], u = o[d];
        u && (o[d] = { anyOf: [u, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] });
      }
    }
    return t;
  }, Nt;
}
var qt, Wa;
function uc() {
  var i = s;
  if (Wa) return qt;
  Wa = 1;
  var x = dr()[i(1343)];
  qt = t;
  function t(r, e, a) {
    var n = i, o = this;
    if (typeof this[n(1536)][n(446)] != n(2042)) throw new Error(n(984));
    typeof e == n(2042) && (a = e, e = void 0);
    var c = d(r).then(function() {
      var f = n, l = o[f(1984)](r, void 0, e);
      return l.validate || u(l);
    });
    return a && c[n(2367)](function(f) {
      a(null, f);
    }, a), c;
    function d(f) {
      var l = n, v = f[l(917)];
      return v && !o[l(208)](v) ? t[l(2497)](o, { $ref: v }, !0) : Promise[l(595)]();
    }
    function u(f) {
      var l = n;
      try {
        return o[l(1437)](f);
      } catch (h) {
        if (h instanceof x) return v(h);
        throw h;
      }
      function v(h) {
        var m = l, b = h[m(994)];
        if (O(b)) throw new Error(m(835) + b + m(965) + h.missingRef + m(2345));
        var w = o._loadingSchemas[b];
        return !w && (w = o[m(1112)][b] = o._opts[m(446)](b), w[m(2367)](E, E)), w[m(2367)](function(q) {
          var R = m;
          if (!O(b)) return d(q)[R(2367)](function() {
            var k = R;
            O(b) || o[k(2447)](q, b, void 0, e);
          });
        })[m(2367)](function() {
          return u(f);
        });
        function E() {
          var q = m;
          delete o[q(1112)][b];
        }
        function O(q) {
          var R = m;
          return o[R(2375)][q] || o[R(678)][q];
        }
      }
    }
  }
  return qt;
}
var Ot, Za;
function fc() {
  return Za || (Za = 1, Ot = function(x, t, r) {
    var e = K, a = " ", n = x[e(285)], o = x.dataLevel, c = x.schema[t], d = x[e(2303)] + x[e(491)][e(476)](t), u = x[e(967)] + "/" + t, f = !x.opts[e(369)], l, v = e(1841) + (o || ""), h = e(1390) + n, m = e(2157) + n, b = x[e(1947)][e(2279)] && c && c[e(2279)], w;
    b ? (a += e(1715) + n + " = " + x[e(491)].getData(c[e(2279)], o, x[e(1743)]) + "; ", w = e(2066) + n) : w = c;
    var E = this, O = "definition" + n, q = E[e(2063)], R = "", k, N, j, D, M;
    if (b && q[e(2279)]) {
      M = e(1855) + n;
      var F = q[e(1592)];
      a += e(1901) + O + " = RULES.custom['" + t + e(2148) + M + e(1935) + O + e(1999);
    } else {
      if (D = x[e(2445)](E, c, x[e(2066)], x), !D) return;
      w = e(1237) + d, M = D[e(2029)], k = q[e(2479)], N = q[e(275)], j = q[e(2455)];
    }
    var C = M + e(468), L = "i" + n, H = e(1929) + n, V = q[e(1501)];
    if (V && !x[e(1501)]) throw new Error(e(2349));
    if (!(N || j) && (a += "" + C + e(1203)), a += e(1125) + m + " = errors;var " + h + ";", b && q[e(2279)] && (R += "}", a += e(1e3) + w + e(223) + h + e(1858), F && (R += "}", a += " " + h + e(1935) + O + e(757) + w + e(1762) + h + e(288))), N) q[e(1395)] ? a += " " + D[e(138)] + " " : a += " " + h + e(1935) + D[e(138)] + "; ";
    else if (j) {
      var J = x[e(491)][e(2096)](x), R = "";
      J[e(285)]++;
      var c0 = e(1390) + J.level;
      J[e(2066)] = D[e(138)], J[e(2303)] = "";
      var d0 = x.compositeRule;
      x[e(2089)] = J[e(2089)] = !0;
      var f0 = x[e(138)](J)[e(139)](/validate\.schema/g, M);
      x[e(2089)] = J[e(2089)] = d0, a += " " + f0;
    } else {
      var i0 = i0 || [];
      i0.push(a), a = "", a += "  " + M + e(1577), x.opts.passContext ? a += "this" : a += e(2464), k || q[e(2066)] === !1 ? a += e(398) + v + " " : a += e(398) + w + " , " + v + e(621) + x.schemaPath + " ", a += e(981), x[e(1524)] != '""' && (a += e(1393) + x[e(1524)]);
      var l0 = o ? "data" + (o - 1 || "") : e(1546), S0 = o ? x[e(1743)][o] : e(1361);
      a += e(398) + l0 + e(398) + S0 + e(171);
      var b0 = a;
      a = i0.pop(), q[e(2493)] === !1 ? (a += " " + h + e(1935), V && (a += e(1951)), a += "" + b0 + "; ") : V ? (C = e(2004) + n, a += e(1901) + C + e(964) + h + e(1078) + b0 + e(1851) + h + e(470) + C + e(360)) : a += " " + C + e(1097) + h + e(1935) + b0 + "; ";
    }
    if (q[e(1505)] && (a += e(1e3) + l0 + ") " + v + e(1935) + l0 + "[" + S0 + "];"), a += "" + R, q.valid) f && (a += e(1600));
    else {
      a += e(623), q[e(1390)] === void 0 ? (a += " !", j ? a += "" + c0 : a += "" + h) : a += " " + !q[e(1390)] + " ", a += ") { ", l = E[e(517)];
      var i0 = i0 || [];
      i0[e(365)](a), a = "";
      var i0 = i0 || [];
      i0[e(365)](a), a = "", x[e(459)] !== !1 ? (a += " { keyword: '" + (l || e(363)) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(544) + x.util[e(2364)](u) + e(2434) + E.keyword + e(394), x[e(1947)][e(649)] !== !1 && (a += ` , message: 'should pass "` + E[e(517)] + e(2092)), x[e(1947)][e(387)] && (a += e(1811) + d + e(361) + x[e(2303)] + " , data: " + v + " "), a += e(1066)) : a += e(1335);
      var M0 = a;
      a = i0[e(2211)](), !x[e(2089)] && f ? x[e(1501)] ? a += e(2020) + M0 + e(1480) : a += e(1908) + M0 + "]; return false; " : a += e(1433) + M0 + e(2193);
      var k0 = a;
      a = i0.pop(), N ? q.errors ? q[e(2493)] != e(2468) && (a += e(532) + L + "=" + m + "; " + L + e(1210) + L + e(2499) + H + " = vErrors[" + L + e(219) + H + e(2057) + H + e(332) + x.errorPath + e(116) + H + ".schemaPath === undefined) { " + H + e(1047) + u + e(2428), x.opts.verbose && (a += " " + H + ".schema = " + w + "; " + H + e(1104) + v + "; "), a += " } ") : q.errors === !1 ? a += " " + k0 + " " : (a += e(1e3) + m + " == errors) { " + k0 + " } else {  for (var " + L + "=" + m + "; " + L + e(1210) + L + e(2499) + H + " = vErrors[" + L + e(219) + H + e(2057) + H + ".dataPath = (dataPath || '') + " + x.errorPath + "; if (" + H + e(130) + H + '.schemaPath = "' + u + '"; } ', x[e(1947)].verbose && (a += " " + H + e(1048) + w + "; " + H + e(1104) + v + "; "), a += e(659)) : j ? (a += e(722), x.createErrors !== !1 ? (a += e(2448) + (l || e(363)) + e(2404) + x[e(1524)] + e(544) + x[e(491)][e(2364)](u) + e(2434) + E[e(517)] + "' } ", x.opts[e(649)] !== !1 && (a += e(1988) + E[e(517)] + e(2092)), x[e(1947)][e(387)] && (a += e(1811) + d + e(361) + x[e(2303)] + e(1688) + v + " "), a += e(1066)) : a += e(1335), a += e(2193), !x[e(2089)] && f && (x[e(1501)] ? a += " throw new ValidationError(vErrors); " : a += e(2056))) : q.errors === !1 ? a += " " + k0 + " " : (a += e(1676) + C + e(2223) + C + e(1099) + C + e(2077) + L + "=" + m + "; " + L + e(1210) + L + e(2499) + H + e(1594) + L + e(219) + H + e(2057) + H + e(332) + x[e(1524)] + e(1589) + H + e(1047) + u + '";  ', x.opts[e(387)] && (a += " " + H + ".schema = " + w + "; " + H + e(1104) + v + "; "), a += " } } else { " + k0 + e(1066)), a += e(1066), f && (a += e(742));
    }
    return a;
  }), Ot;
}
const lc = s(1495), hc = s(1495), pc = s(977), mc = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: s(197), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: s(1414) }, { default: 0 }] }, simpleTypes: { enum: [s(1040), "boolean", "integer", s(599), "number", "object", s(2254)] }, stringArray: { type: "array", items: { type: s(2254) }, uniqueItems: !0, default: [] } }, vc = [s(1526), s(968)], gc = { $id: { type: s(2254), format: s(2300) }, $schema: { type: s(2254), format: s(892) }, $ref: { type: "string", format: s(2300) }, $comment: { type: s(2254) }, title: { type: s(2254) }, description: { type: "string" }, default: !0, readOnly: { type: s(968), default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: s(2240) }, exclusiveMaximum: { type: s(2240) }, minimum: { type: s(2240) }, exclusiveMinimum: { type: s(2240) }, maxLength: { $ref: s(1414) }, minLength: { $ref: s(501) }, pattern: { type: s(2254), format: s(1353) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: s(802) }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: s(968), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: s(1414) }, minProperties: { $ref: s(501) }, required: { $ref: s(769) }, additionalProperties: { $ref: "#" }, definitions: { type: s(1526), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: s(1526), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: s(1526), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: s(769) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: s(2286) }, { type: s(1040), items: { $ref: s(2286) }, minItems: 1, uniqueItems: !0 }] }, format: { type: s(2254) }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: s(802) }, anyOf: { $ref: s(802) }, oneOf: { $ref: s(802) }, not: { $ref: "#" } }, mn = { $schema: lc, $id: hc, title: pc, definitions: mc, type: vc, properties: gc, default: !0 };
var Tt, Ka;
function bc() {
  var i = s;
  if (Ka) return Tt;
  Ka = 1;
  var x = mn;
  return Tt = { $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", definitions: { simpleTypes: x[i(661)][i(309)] }, type: i(1526), dependencies: { schema: [i(138)], $data: [i(138)], statements: [i(275)], valid: { not: { required: ["macro"] } } }, properties: { type: x[i(189)][i(1273)], schema: { type: i(968) }, statements: { type: i(968) }, dependencies: { type: i(1040), items: { type: "string" } }, metaSchema: { type: "object" }, modifying: { type: i(968) }, valid: { type: i(968) }, $data: { type: i(968) }, async: { type: "boolean" }, errors: { anyOf: [{ type: "boolean" }, { const: i(2468) }] } } }, Tt;
}
var At, Ba;
function yc() {
  if (Ba) return At;
  Ba = 1;
  var i = /^[a-z_$][a-z0-9_$-]*$/i, x = fc(), t = bc();
  At = { add: r, get: e, remove: a, validate: n };
  function r(o, c) {
    var d = K, u = this.RULES;
    if (u[d(2356)][o]) throw new Error(d(303) + o + " is already defined");
    if (!i[d(937)](o)) throw new Error("Keyword " + o + " is not a valid identifier");
    if (c) {
      this[d(148)](c, !0);
      var f = c[d(1273)];
      if (Array[d(242)](f))
        for (var l = 0; l < f[d(1407)]; l++) h(o, f[l], c);
      else h(o, f, c);
      var v = c[d(1417)];
      v && (c[d(2279)] && this[d(1536)].$data && (v = { anyOf: [v, { $ref: d(709) }] }), c[d(1592)] = this[d(2479)](v, !0));
    }
    u[d(2356)][o] = u.all[o] = !0;
    function h(m, b, w) {
      for (var E = d, O, q = 0; q < u[E(1407)]; q++) {
        var R = u[q];
        if (R[E(1273)] == b) {
          O = R;
          break;
        }
      }
      !O && (O = { type: b, rules: [] }, u[E(365)](O));
      var k = { keyword: m, definition: w, custom: !0, code: x, implements: w[E(908)] };
      O[E(1562)][E(365)](k), u.custom[m] = k;
    }
    return this;
  }
  function e(o) {
    var c = K, d = this[c(2136)].custom[o];
    return d ? d[c(2063)] : this[c(2136)].keywords[o] || !1;
  }
  function a(o) {
    var c = K, d = this[c(2136)];
    delete d[c(2356)][o], delete d[c(2337)][o], delete d[c(363)][o];
    for (var u = 0; u < d.length; u++)
      for (var f = d[u][c(1562)], l = 0; l < f[c(1407)]; l++)
        if (f[l][c(517)] == o) {
          f[c(890)](l, 1);
          break;
        }
    return this;
  }
  function n(o, c) {
    var d = K;
    n[d(2493)] = null;
    var u = this._validateKeyword = this[d(609)] || this.compile(t, !0);
    if (u(o)) return !0;
    if (n[d(2493)] = u[d(2493)], c) throw new Error(d(1394) + this[d(1971)](u[d(2493)]));
    return !1;
  }
  return At;
}
const wc = s(1495), Sc = s(709), kc = s(2306), Ec = s(1526), Pc = [s(2279)], Ic = { $data: { type: "string", anyOf: [{ format: s(1355) }, { format: "json-pointer" }] } }, Rc = !1, Cc = { $schema: wc, $id: Sc, description: kc, type: Ec, required: Pc, properties: Ic, additionalProperties: Rc };
var Dt, Ja;
function Fc() {
  var i = s;
  if (Ja) return Dt;
  Ja = 1;
  var x = z2(), t = cr(), r = H2(), e = ln(), a = hn(), n = U2(), o = cc(), c = dc(), d = Ze();
  Dt = m, m.prototype[i(138)] = b, m.prototype[i(2479)] = w, m[i(2023)][i(2447)] = E, m[i(2023)][i(699)] = O, m[i(2023)][i(1592)] = q, m[i(2023)][i(208)] = k, m.prototype.removeSchema = D, m.prototype.addFormat = d0, m[i(2023)][i(1971)] = c0, m[i(2023)][i(1984)] = F, m.prototype[i(1437)] = C, m[i(2023)][i(1653)] = uc();
  var u = yc();
  m[i(2023)][i(828)] = u.add, m.prototype[i(2506)] = u[i(1170)], m[i(2023)][i(2386)] = u[i(1654)], m.prototype[i(148)] = u[i(138)];
  var f = dr();
  m[i(939)] = f[i(2144)], m[i(1877)] = f[i(1343)], m[i(2187)] = c;
  var l = i(2283), v = ["removeAdditional", "useDefaults", i(844), i(111)], h = [i(1755)];
  function m(A) {
    var T = i;
    if (!(this instanceof m)) return new m(A);
    A = this[T(1536)] = d.copy(A) || {}, k0(this), this[T(678)] = {}, this[T(2375)] = {}, this[T(210)] = {}, this[T(396)] = n(A[T(1102)]), this._cache = A.cache || new r(), this[T(1112)] = {}, this[T(203)] = [], this[T(2136)] = o(), this._getId = L(A), A.loopRequired = A.loopRequired || 1 / 0, A[T(407)] == T(2490) && (A._errorDataPathProperty = !0), A[T(1899)] === void 0 && (A[T(1899)] = a), this._metaOpts = M0(this), A[T(2169)] && l0(this), A[T(2356)] && S0(this), f0(this), typeof A.meta == T(1526) && this[T(699)](A[T(297)]), A[T(1222)] && this[T(828)](T(1222), { metaSchema: { type: T(968) } }), i0(this);
  }
  function b(A, T) {
    var $ = i, G;
    if (typeof A == $(2254)) {
      if (G = this[$(208)](A), !G) throw new Error('no schema with key or ref "' + A + '"');
    } else {
      var Q = this._addSchema(A);
      G = Q[$(138)] || this._compile(Q);
    }
    var W = G(T);
    return G[$(1202)] !== !0 && (this[$(2493)] = G.errors), W;
  }
  function w(A, T) {
    var $ = i, G = this[$(1984)](A, void 0, T);
    return G[$(138)] || this[$(1437)](G);
  }
  function E(A, T, $, G) {
    var Q = i;
    if (Array[Q(242)](A)) {
      for (var W = 0; W < A[Q(1407)]; W++) this.addSchema(A[W], void 0, $, G);
      return this;
    }
    var Y = this[Q(272)](A);
    if (Y !== void 0 && typeof Y != Q(2254)) throw new Error(Q(1968));
    return T = t[Q(234)](T || Y), b0(this, T), this._schemas[T] = this[Q(1984)](A, $, G, !0), this;
  }
  function O(A, T, $) {
    var G = i;
    return this[G(2447)](A, T, $, !0), this;
  }
  function q(A, T) {
    var $ = i, G = A[$(917)];
    if (G !== void 0 && typeof G != "string") throw new Error($(979));
    if (G = G || this._opts.defaultMeta || R(this), !G) return this[$(932)][$(1718)]($(2269)), this.errors = null, !0;
    var Q = this.validate(G, A);
    if (!Q && T) {
      var W = $(378) + this[$(1971)]();
      if (this[$(1536)][$(1592)] == "log") this[$(932)][$(2239)](W);
      else throw new Error(W);
    }
    return Q;
  }
  function R(A) {
    var T = i, $ = A[T(1536)][T(297)];
    return A._opts[T(823)] = typeof $ == "object" ? A[T(272)]($) || $ : A[T(208)](l) ? l : void 0, A._opts[T(823)];
  }
  function k(A) {
    var T = i, $ = j(this, A);
    switch (typeof $) {
      case T(1526):
        return $.validate || this[T(1437)]($);
      case T(2254):
        return this[T(208)]($);
      case T(1110):
        return N(this, A);
    }
  }
  function N(A, T) {
    var $ = i, G = t[$(2066)][$(2497)](A, { schema: {} }, T);
    if (G) {
      var Q = G[$(2066)], W = G[$(276)], Y = G[$(1409)], o0 = x[$(2497)](A, Q, W, void 0, Y);
      return A[$(210)][T] = new e({ ref: T, fragment: !0, schema: Q, root: W, baseId: Y, validate: o0 }), o0;
    }
  }
  function j(A, T) {
    var $ = i;
    return T = t.normalizeId(T), A[$(678)][T] || A[$(2375)][T] || A[$(210)][T];
  }
  function D(A) {
    var T = i;
    if (A instanceof RegExp) return M(this, this[T(678)], A), M(this, this[T(2375)], A), this;
    switch (typeof A) {
      case T(1110):
        return M(this, this[T(678)]), M(this, this[T(2375)]), this[T(1835)][T(1547)](), this;
      case T(2254):
        var $ = j(this, A);
        return $ && this[T(1835)].del($.cacheKey), delete this[T(678)][A], delete this[T(2375)][A], this;
      case T(1526):
        var G = this._opts[T(1899)], Q = G ? G(A) : A;
        this[T(1835)][T(478)](Q);
        var W = this[T(272)](A);
        W && (W = t[T(234)](W), delete this[T(678)][W], delete this._refs[W]);
    }
    return this;
  }
  function M(A, T, $) {
    var G = i;
    for (var Q in T) {
      var W = T[Q];
      !W[G(297)] && (!$ || $[G(937)](Q)) && (A[G(1835)][G(478)](W[G(1709)]), delete T[Q]);
    }
  }
  function F(A, T, $, G) {
    var Q = i;
    if (typeof A != Q(1526) && typeof A != Q(968)) throw new Error(Q(1391));
    var W = this[Q(1536)].serialize, Y = W ? W(A) : A, o0 = this[Q(1835)][Q(1170)](Y);
    if (o0) return o0;
    G = G || this[Q(1536)][Q(2192)] !== !1;
    var s0 = t[Q(234)](this[Q(272)](A));
    s0 && G && b0(this, s0);
    var _ = this[Q(1536)][Q(1592)] !== !1 && !T, L0;
    _ && !(L0 = s0 && s0 == t[Q(234)](A[Q(917)])) && this[Q(1592)](A, !0);
    var T0 = t.ids[Q(2497)](this, A), U0 = new e({ id: s0, schema: A, localRefs: T0, cacheKey: Y, meta: $ });
    return s0[0] != "#" && G && (this._refs[s0] = U0), this._cache[Q(957)](Y, U0), _ && L0 && this[Q(1592)](A, !0), U0;
  }
  function C(A, T) {
    var $ = i;
    if (A[$(2209)])
      return A.validate = W, W.schema = A.schema, W[$(2493)] = null, W[$(276)] = T || W, A.schema[$(1202)] === !0 && (W[$(1202)] = !0), W;
    A[$(2209)] = !0;
    var G;
    A[$(297)] && (G = this._opts, this._opts = this[$(512)]);
    var Q;
    try {
      Q = x[$(2497)](this, A.schema, T, A.localRefs);
    } catch (Y) {
      throw delete A[$(138)], Y;
    } finally {
      A[$(2209)] = !1, A[$(297)] && (this[$(1536)] = G);
    }
    return A.validate = Q, A[$(1036)] = Q.refs, A.refVal = Q[$(376)], A[$(276)] = Q[$(276)], Q;
    function W() {
      var Y = $, o0 = A[Y(138)], s0 = o0[Y(1196)](this, arguments);
      return W[Y(2493)] = o0.errors, s0;
    }
  }
  function L(A) {
    var T = i;
    switch (A[T(1014)]) {
      case T(525):
        return J;
      case "id":
        return H;
      default:
        return V;
    }
  }
  function H(A) {
    var T = i;
    return A.$id && this.logger[T(1718)]("schema $id ignored", A[T(110)]), A.id;
  }
  function V(A) {
    var T = i;
    return A.id && this[T(932)].warn("schema id ignored", A.id), A[T(110)];
  }
  function J(A) {
    var T = i;
    if (A[T(110)] && A.id && A[T(110)] != A.id) throw new Error(T(2405));
    return A[T(110)] || A.id;
  }
  function c0(A, T) {
    var $ = i;
    if (A = A || this[$(2493)], !A) return $(849);
    T = T || {};
    for (var G = T[$(2122)] === void 0 ? ", " : T.separator, Q = T[$(1246)] === void 0 ? $(1841) : T[$(1246)], W = "", Y = 0; Y < A.length; Y++) {
      var o0 = A[Y];
      o0 && (W += Q + o0.dataPath + " " + o0[$(1682)] + G);
    }
    return W[$(571)](0, -G[$(1407)]);
  }
  function d0(A, T) {
    var $ = i;
    return typeof T == $(2254) && (T = new RegExp(T)), this._formats[A] = T, this;
  }
  function f0(A) {
    var T = i, $;
    if (A[T(1536)][T(2279)] && ($ = Cc, A[T(699)]($, $[T(110)], !0)), A._opts.meta !== !1) {
      var G = mn;
      A._opts.$data && (G = c(G, h)), A[T(699)](G, l, !0), A[T(2375)][T(1543)] = l;
    }
  }
  function i0(A) {
    var T = i, $ = A[T(1536)][T(442)];
    if ($)
      if (Array[T(242)]($)) A[T(2447)]($);
      else
        for (var G in $) A.addSchema($[G], G);
  }
  function l0(A) {
    var T = i;
    for (var $ in A[T(1536)].formats) {
      var G = A._opts[T(2169)][$];
      A[T(507)]($, G);
    }
  }
  function S0(A) {
    var T = i;
    for (var $ in A[T(1536)].keywords) {
      var G = A[T(1536)].keywords[$];
      A.addKeyword($, G);
    }
  }
  function b0(A, T) {
    var $ = i;
    if (A[$(678)][T] || A[$(2375)][T]) throw new Error($(1194) + T + $(766));
  }
  function M0(A) {
    for (var T = i, $ = d[T(2096)](A._opts), G = 0; G < v[T(1407)]; G++) delete $[v[G]];
    return $;
  }
  function k0(A) {
    var T = i, $ = A[T(1536)][T(932)];
    if ($ === !1) A[T(932)] = { log: Q0, warn: Q0, error: Q0 };
    else {
      if ($ === void 0 && ($ = console), !(typeof $ == T(1526) && $[T(2312)] && $[T(1718)] && $[T(2239)])) throw new Error(T(1235));
      A.logger = $;
    }
  }
  function Q0() {
  }
  return Dt;
}
var Nc = Fc();
const qc = Hs(Nc);
class Oc extends A2 {
  constructor(x, t) {
    var r = s, e;
    super(t), this[r(675)] = x, this[r(867)] = (e = t == null ? void 0 : t[r(1009)]) !== null && e !== void 0 ? e : {}, this[r(181)] = t == null ? void 0 : t.instructions, this[r(112)](en, (a) => this[r(2220)](a)), this[r(335)](xn, () => {
      var a = r, n;
      return (n = this[a(1147)]) === null || n === void 0 ? void 0 : n[a(2497)](this);
    });
  }
  [s(1435)](x) {
    var t = s;
    if (this[t(1445)]) throw new Error(t(2288));
    this[t(867)] = D2(this[t(867)], x);
  }
  [s(590)](x) {
    var t = s, r, e, a;
    switch (x) {
      case t(1509):
        if (!(!((r = this[t(511)]) === null || r === void 0) && r[t(485)])) throw new Error(t(439) + x + ")");
        break;
      case t(1434):
        if (!(!((e = this._clientCapabilities) === null || e === void 0) && e[t(1752)])) throw new Error("Client does not support elicitation (required for " + x + ")");
        break;
      case t(1866):
        if (!(!((a = this._clientCapabilities) === null || a === void 0) && a[t(137)])) throw new Error(t(1697) + x + ")");
        break;
    }
  }
  [s(184)](x) {
    var t = s;
    switch (x) {
      case t(2164):
        if (!this[t(867)].logging) throw new Error("Server does not support logging (required for " + x + ")");
        break;
      case t(1868):
      case "notifications/resources/list_changed":
        if (!this[t(867)][t(2391)]) throw new Error(t(1075) + x + ")");
        break;
      case t(1302):
        if (!this._capabilities[t(195)]) throw new Error("Server does not support notifying of tool list changes (required for " + x + ")");
        break;
      case "notifications/prompts/list_changed":
        if (!this[t(867)][t(1720)]) throw new Error(t(2130) + x + ")");
        break;
    }
  }
  [s(1323)](x) {
    var t = s;
    switch (x) {
      case t(1509):
        if (!this[t(867)][t(485)]) throw new Error(t(224) + x + ")");
        break;
      case t(2155):
        if (!this[t(867)][t(1942)]) throw new Error(t(1080) + x + ")");
        break;
      case t(428):
      case t(1105):
        if (!this[t(867)][t(1720)]) throw new Error(t(158) + x + ")");
        break;
      case "resources/list":
      case t(2030):
      case t(1516):
        if (!this[t(867)].resources) throw new Error(t(2474) + x + ")");
        break;
      case t(487):
      case t(1366):
        if (!this._capabilities[t(195)]) throw new Error(t(724) + x + ")");
        break;
    }
  }
  async [s(2220)](x) {
    var t = s;
    const r = x.params.protocolVersion;
    return this._clientCapabilities = x[t(2012)][t(1009)], this[t(1706)] = x[t(2012)][t(2145)], { protocolVersion: Oo[t(1502)](r) ? r : Ks, capabilities: this[t(1031)](), serverInfo: this[t(675)], ...this[t(181)] && { instructions: this[t(181)] } };
  }
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  [s(2076)]() {
    return this._clientVersion;
  }
  [s(1031)]() {
    return this._capabilities;
  }
  async [s(216)]() {
    var x = s;
    return this[x(1413)]({ method: "ping" }, Xt);
  }
  async [s(2385)](x, t) {
    var r = s;
    return this[r(1413)]({ method: "sampling/createMessage", params: x }, dn, t);
  }
  async [s(804)](x, t) {
    var r = s;
    const e = await this[r(1413)]({ method: r(1434), params: x }, un, t);
    if (e[r(1657)] === r(855) && e[r(927)]) try {
      const a = new qc(), n = a[r(2479)](x[r(393)]);
      if (!n(e[r(927)])) throw new Oe(be[r(462)], r(638) + a[r(1971)](n[r(2493)]));
    } catch (a) {
      throw a instanceof Oe ? a : new Oe(be[r(201)], r(1073) + a);
    }
    return e;
  }
  async [s(969)](x, t) {
    var r = s;
    return this[r(1413)]({ method: r(1866), params: x }, fn, t);
  }
  async [s(1805)](x) {
    var t = s;
    return this[t(2472)]({ method: t(2164), params: x });
  }
  async [s(1260)](x) {
    var t = s;
    return this[t(2472)]({ method: t(1868), params: x });
  }
  async [s(1314)]() {
    var x = s;
    return this[x(2472)]({ method: x(1948) });
  }
  async [s(997)]() {
    return this.notification({ method: "notifications/tools/list_changed" });
  }
  async [s(1068)]() {
    var x = s;
    return this[x(2472)]({ method: "notifications/prompts/list_changed" });
  }
}
class Tc extends Error {
  constructor(x, t) {
    var r = s;
    super("Heartbeat timeout for poster " + x + r(588) + t + "ms"), this[r(1831)] = "HeartbeatTimeoutError";
  }
}
const lx = /* @__PURE__ */ new Map();
class Ac {
  constructor(x) {
    var t = s;
    if (this[t(1863)] = [], this[t(883)] = Date[t(2371)](), lx[t(179)](x[t(2138)])) {
      const r = lx[t(1170)](x[t(2138)]);
      r && r[t(1420)]();
    }
    this.posterIdentifier = x[t(2138)], this[t(2196)] = x[t(2196)], this[t(912)] = x[t(912)], this[t(1032)] = x[t(1032)], this[t(2287)] = x[t(2287)] ?? 5e3, this.heartbeatTimeout = x.heartbeatTimeout ?? 5e3, this[t(243)] = x.debugDisableHeartbeatResponse ?? !1, lx[t(321)](this.posterIdentifier, this), this[t(381)] = this[t(381)][t(1766)](this), this[t(2436)] = this[t(912)](this[t(381)]);
  }
  [s(381)](x) {
    var t = s;
    if (x[t(2138)] === this[t(2138)]) {
      if (x.channel === t(1554)) {
        x[t(1273)] === t(216) && !this[t(243)] ? this[t(2196)]({ channel: t(1554), posterIdentifier: this[t(2138)], type: "pong", timestamp: x[t(1294)] }) : x[t(1273)] === t(1961) && (this[t(883)] = Date[t(2371)](), this[t(2452)] && (clearTimeout(this.heartbeatTimeoutTimer), this.heartbeatTimeoutTimer = void 0));
        return;
      }
      x[t(2380)] === t(901) && (this.onmessage && t(936) in x ? this[t(1061)](x[t(936)]) : t(936) in x && this[t(1863)][t(365)](x[t(936)]));
    }
  }
  async [s(497)]() {
    for (var x = s; this[x(1863)].length > 0; ) {
      const t = this[x(1863)].shift();
      t && this.onmessage && this.onmessage(t);
    }
    this[x(1575)]();
  }
  [s(1575)]() {
    var x = s;
    this[x(1675)] = setInterval(() => {
      var t = x;
      const r = Date.now();
      this.messagePoster({ channel: t(1554), posterIdentifier: this[t(2138)], type: t(216), timestamp: r }), this[t(2452)] = setTimeout(() => {
        var e = t;
        const a = new Tc(this.posterIdentifier, this[e(706)]);
        this[e(987)] && this.onerror(a);
      }, this[t(706)]);
    }, this.heartbeatInterval);
  }
  async [s(1658)](x, t) {
    var r = s;
    this[r(2196)]({ channel: r(901), posterIdentifier: this[r(2138)], payload: x });
  }
  async close() {
    var x = s;
    this.heartbeatTimer && (clearInterval(this.heartbeatTimer), this[x(1675)] = void 0), this[x(2452)] && (clearTimeout(this[x(2452)]), this[x(2452)] = void 0), lx[x(355)](this[x(2138)]), this[x(1032)](this[x(2436)]);
  }
}
const Dc = qx[s(2003)](s(520));
async function vn() {
  var i = s;
  if (!window[i(2124)]) return;
  const x = new Ac({ posterIdentifier: i(1037), messagePoster: (e) => {
    var a = i;
    window[a(2124)].postMessage(e, "*");
  }, addMessageEventListener: (e) => {
    var a = i;
    const n = (o) => {
      e(o.data);
    };
    return window[a(982)](a(1682), n), n;
  }, removeMessageEventListener: (e) => {
    var a = i;
    window[a(810)](a(1682), e);
  } });
  x.onerror = (e) => {
    var a = i;
    Dc(a(329), e);
  };
  const t = new Oc({ name: i(1037), version: i(1769) }, {}), r = new yi(t);
  return await r[i(1026)](x), window[i(2124)][i(1455)]({ channel: "mcp-mesh-router", meshName: i(2058), action: "connect" }, "*"), await C0[i(1026)](i(1736), r);
}
const jc = Object[s(1885)](Object[s(612)]({ __proto__: null, connectUXP: vn, mcpMesh: C0 }, Symbol[s(2511)], { value: s(852) }));
Te.addEventListener("graphChanged", (i) => {
  var x = s;
  const t = O0.workflowManager || O0[x(685)][x(1641)], r = t[x(133)];
  if (i[x(1121)].id !== r[x(2317)].id) return;
  const e = C0[x(2363)].getState()[x(1059)], a = Qt(O0[x(315)], r);
  bn(a, e) && C0[x(2363)][x(2507)]({ widgetableStructure: a }), C0.store[x(2507)]({ widgetableValues: Cx(O0[x(315)]) });
}), Te.addEventListener(s(836), () => {
  var i = s;
  C0[i(2363)][i(2507)]({ widgetableValues: Cx(O0[i(315)]) });
});
let Ga = 0, Qa = !0, Ya = "";
function gn() {
  var i = s;
  requestAnimationFrame(gn);
  const x = O0[i(1844)] || O0.extensionManager.workflow, t = x[i(133)], r = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[i(1512)]) || "", a = (t == null ? void 0 : t.isPersisted) || !0;
  if (r === Ga && e === Ya && a === Qa) return;
  Ga = r, Ya = e, Qa = a;
  const n = Qt(O0[i(315)], t), o = Cx(O0.graph);
  C0[i(2363)].setState({ widgetableStructure: n, widgetableValues: o }), setTimeout(() => {
    var c = i;
    if (t !== x[c(133)]) return;
    const d = Qt(O0.graph, t), u = Cx(O0[c(315)]);
    bn(d, n) && C0[c(2363)][c(2507)]({ widgetableStructure: d }), C0[c(2363)][c(2507)]({ widgetableValues: u });
  }, 800);
}
requestAnimationFrame(gn);
function bn(i, x) {
  var t = s;
  return i[t(1296)].length !== x[t(1296)][t(1407)] || JSON[t(2099)](i.nodeIndexes) !== JSON.stringify(x.nodeIndexes) || JSON[t(2099)](i[t(1998)]) !== JSON[t(2099)](x[t(1998)]);
}
let Xa = !1;
function Fx() {
  var i = [" from id ", "Generating", "formData", "round", "curlayer_curlayer", "queues", "nonnegative", "dataType", "exactly equal to ", " = false; ", "ZodError", 'did not save key "', "compiling", " , message: 'boolean schema is false' ", "pop", "Merge group failed", "]; ", "alwaysFormat", 'id "', "\\:\\:", "skipInterpolation", "defaults", "minItems", "_oninitialize", "exclIsNumber", "Intersect or scaledDesire is null", ")) { if (vErrors === null) vErrors = ", "#FFCC33", "sdk", " , message: 'should be equal to one of the allowed values' ", "=== 选项 ===", "SDPPP可能未安装或和插件版本不匹配 (404)", "broadcastHandlers", "12KJrIeQ", "You are passing an undefined module! Please check the object you are passing to i18next.use()", "secure", "assert", "mins", "photoshop.no_active_layer", "flatten", "String must contain ", "onTimeout", "error", "number", "invalid_return_type", "sourceNodeId", "missed to pass in variable ", "ZodReadonly", "streamRequestorHandlers", "Success", "trim", "removeDotSegments", "applyPostProcessor", " === undefined) ", "additionalItems", "use", "[object RegExp]", "string", "设置图层的文本", "saveMissingTo", "_onresponse", "Auto send disabled", "OpenAI/Google format API", "modules", "  if (!", "#CC33CC", "assertCanSetRequestHandler", "[\\:\\@]", "body", ".validate; var ", "质量{{percent}}%", "uiWeightSum", "meta-schema not available", "backend", " : ", "无法将文件作为文档打开: {{path}}", "connected", "next", " == 'boolean' || ", "currentOnly", " , params: { missingProperty: '", " !== parseInt(division", "$data", "interrupt", "inlineRef", " , params: { ref: '", "http://json-schema.org/draft-07/schema", "sourceType", "Service unavailable (503)", "#/definitions/simpleTypes", "heartbeatInterval", "Cannot register capabilities after connecting to transport", "Invalid date", " if (rootData === undefined) rootData = data; ", "; var ", "inlineRefs", "state", "]; return false; ", " === null) ", "批次数量", "toResolveHierarchy", "unsetOutgoingRequestInterceptor", "comfy_api_key", "uri-reference", "translate", "ComfyUI服务器重连中", "schemaPath", "_onerror", "$el", "Meta-schema for $data reference (JSON Schema extension proposal)", ` , message: 'should match format "`, "size", "=startErrs", "Fit to selection", "_timeoutInfo", "log", " = 'else'; ", "outgoingRequestInterceptors", "reload", "fallbackNotificationHandler", "activeState", "strip", "nestingOptionsSeparator", "urn:uuid", "setDefaultNamespace", "defaultVariables", "Sending all images...", "one", "ZodDate", "__esModule", "Cancel", "invalid_union", "HTTP URIs must have a host.", "syncStoresToNewConnection", "suffix", "exclude", " -> ", "prompt_id", "schemaHasRulesExcept", "+Shift 调整更多选项；Ctrl 单次获取。", "all", "Loading...", 'unknown format "', "Failed to check workflow state changes:", "tDescription", " !== undefined) { ", 'key "', " if (false) { ", " cannot be resolved", "清除参考线框架", " character(s)", "interceptorTimeout", "async keyword in sync schema", "node_id", "Send all", "failedLoading", "silent", "initializeConsumer", "curlayer_canvas", "keywords", "translation", "应用ID:", ") && (missing", "Delete current", "ZodPromise", "getNode", "store", "toQuotedString", " === undefined || ", "'[\\'' + ", "then", "/%2F", " = defaults[", " == 'function' ? ", "now", "off", " == 'boolean') ", "destroy", "_refs", "withTimeout", "Failed to reboot ComfyUI", "closeWorkflow", "#FF6600", "channel", "closeHandlers", "/then", "regexp", "unescapePrefix", "createMessage", "removeKeyword", "ZodBoolean", "not_multiple_of", "description", " + '\\']'", "resources", "创建操作需要矩形坐标", "ZodArray", "createAsyncIterator", "ESCAPE", "time", "key", "writeOnly", "workflow-run", "目标边界为空", "formatter", " ) ", " , params: { format:  ", "' , dataPath: (dataPath || '') + ", "schema $id is different from id", "errorHandlers", "ary", "types", ", limit: ", "pctDecChars", "exclusiveMaximum", "ZodAny", "Request timed out", "执行失败", "reset=false but needsReset: ", "Invalid name: {{0}}", "hours", "[GraphStoreSynchronizer] Error broadcasting state update for ", "prd", "extract", "#FF3300", "resource_link", "#CC0000", "second", "values", "Get layer info", " = false;  ", '"; } ', "checkDataType", "[^\\%\\[\\]\\:]", "$ref", "Request timeout (408)", " == '", " , params: { keyword: '", "Area AI reads from; controls max image size", "externalListenMessageCallback", "graphInstance", "isEmail", " + ']'", "absolutePath", "_meta", "empty", "exclType", "运行了 {{duration}} 秒，{{message}}", "useCustomRule", "keySeparator", "addSchema", " { keyword: '", "initializeProducer", "keyType", "nest", "heartbeatTimeoutTimer", "run", "isFinite(", "macro", "Create document failed", "out", "createStreamState", "hasLoadedNamespace: i18next was not initialized", " if (!(await ", "namespace", "Import as Smart Object", "exec", "self", "finished", "mergeObjectSync", "#FF0066", "full", "skips", 'Invalid input: must include "', "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "notification", "true", "Server does not support resources (required for ", "getTransportInternal", "邮箱: {{email}}", "catchValue", "waiters", "compile", '" resolves to more than one schema', "email", "requestIdSeq", "languageOnly", " , message: 'should be equal to constant' ", "getResource", "_limitProperties", "InvalidRequest", "快捷键选图功能仅登陆后可用", "Click to get RunningHub APIKey", "property", " var errors = 0;     ", "  } ", "errors", "assistant", "initialize", "[BroadcastManager] Error forwarding broadcast:", "call", "jsonStringifyReplacer", "++) { var ", "$$$$", "[^0-9]", "ZodNullable", "当前任务数:", "Action ", "registerStreamRequestorHandler", "getKeyword", "setState", "ZodEnum", "/required", "curlayer", "toStringTag", " levels up, current level is ", "#6633CC", "$id", "strictDefaults", "setRequestHandler", "Run Photoshop Action", "checkState", "{0,3}", "; if (", "year", "Error", " else ", "getRegExp", "isTime", "{3}", " ) {   ", "executeHandlerAsync", "not-basic", "range", "mergeArray", "ZodMap", "required", ".schemaPath === undefined) { ", "assertNever", "Copy", "activeWorkflow", " = ''; ", "spa", "toFixed", "roots", "validate", "replace", " , params: { pattern:  ", "customRule", ") break; ", "clone", "Failed to create document from file", "removeRequestHandler", "~standard", "+Alt 按选区裁剪", "validateKeyword", "toUnicode", "Node definition not found for ", "constructor", "join", " %c", "nss", " = !(false ", "__cycle__", "initializeNodeStores", "Server does not support prompts (required for ", "-arab", "dependencies", "output", "getValidEnumValues", "cimode", "hasRequestHandler", "discriminator", " != 'undefined' && ", "scheme", "kind", "joinArrays", "endTurn", " , rootData )  ", "getBestMatchFromCodes", "pipe", "_requestHandlers", "greater than ", "innerType", "aec", "setupStreamRequestHandler", "has", "order", "_instructions", "[^\\%\\/\\:\\@]", "Unknown", "assertNotificationCapability", "Gateway error (502)", "sam", "fromNode", "errToObj", "properties", "pbu", "整个画布", "#CC3300", "Invalid function arguments", " ) || ", "tools", "'else'", "integer", "var division", ".additionalItems", "updateMissing", "InternalError", "ZodTuple", "_compilations", "load", "Gateway timeout (504)", "catch", " var errs_", "getSchema", "[j])) { ", "_fragments", "transports", "forwarded", "Creating task...", "++) { vErrors[", "property ", "ping", "men", "cidr", "]; if (", "清空所有", "partial", "正在运行", " === undefined) { ", "Server does not support sampling (required for ", "findIndex", " < ", "RequestTimeout", "_transport", "Unrecognized key(s) in object: ", "Timeout", "at least", "#FF00CC", "syncWorkflows", "normalizeId", "setComfyOrgAPIKey", "Unicode", "Invalid forward path for proxy action", "#0066FF", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", " } else { ", "critical", "isArray", "debugDisableHeartbeatResponse", " */", "oneOf", "Node ", " = formats[", "newlayer_canvas", "schemaExcl", ") break; } ", "Download", "[i]; ", "#FF0099", "#33CCFF", "dev", "superRefine", "获取图层 {{0}} 的内容", "comfy-user", "{0,2}", "模型物美价廉，海量社区应用", "Create document for preview", "escape", "(typeof ", "invalid_literal", "setResolvedLanguage", "[^\\%]", "NOT_SCHEME", "#FF6633", "typ", "Converting circular structure to JSON", "getFallbackCodes", "_getId", " return data; ", "validation", "inline", "root", "stopAll", `"' `, "edges", "_key", "getNeighbors", "process", "execution_success", "rootData", "level", "hasDefaultValue", "stream", ") { ", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "_onclose", " == 'string' || ", "valueType", "received", "Array.isArray(", "abv", "meta", "mountedEndpoints", "failed", "=0; ", "Node not found", "unknownFormats", "Keyword ", " && self._opts.unknownFormats.indexOf(", "基础 URL", "removeItem", "Illegal input >= 0x80 (not a basic code point)", "Save all", "simpleTypes", " via punycode: ", "onclose", "lastIndex", "$comment", "omit", "graph", "No active document", '[\\"\\\\]', "race", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "ckb", "set", "&filename=", ") ) ", "Exclude current layer", "fallbackNS", "fromCharCode", "forwardBroadcast", "getState", "comfy side transport.onerror", "#FFCC00", "_onprogress", ".dataPath = (dataPath || '') + ", "status", "sqr", "setNotificationHandler", 'Invalid input: must start with "', "app.queuePrompt caught", "isSafeInteger", "count", "ComfyManager not found, cannot reboot", "postProcess", "isEmoji", "exception_message", "nestingSuffix", "resetTimeoutOnProgress", "acm", " = true;  ", "else", "toString", "negative", " for (var ", "Input Setting", "Please select the image to get", "invalid-input", "delete", "此处粘贴 WebApp ID", "_parseAsync", "); if (!", "OpenAI/Google 格式API", " = e.errors; else throw e; } ", " , parentSchema: validate.schema", "#33CC99", "custom", "enable", "push", "substr", "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF", ", '", "allErrors", "#99CC33", "from", "i18next:", "nid", "ulid", "backendConnector", "refVal", "convert widget {0} failed:", "schema is invalid: ", "notificationsHandled", "minutes", "listenMessageCallback", "MethodNotFound", "登录成功", "unicode", "minute", "Please select the mask to get", "verbose", "parseInt", " , schema: ", "accessing an object - but returnObjects options is not enabled!", ` if (typeof item == 'string') item = '"' + item; `, "duration", "requestedSchema", "' } ", "hasEdge", "_formats", "创建预览文档", " , ", "keyPrefix", "No linked layer for {{0}}", "mailto", "capacity", "resolveRef", "getTime", " = true; else if (!Array.isArray(schema", "ListFormat", "errorDataPath", "25[0-5]", "_getCached", "Exclude selection", "removeMiddleware", "maxRetries", "resolveImage", "shape", "PS shortcuts may be blocked by plugin...", "Options", "ars", "resetStats", "timeoutId", "prs", "PluralRules", "ads", "requestInfo", "SCHEMES", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "IPV4ADDRESS", "(.+?)", "prompts/get", "Save current", "setOutgoingNotificationInterceptor", "fullFilename", "Save", "strictNumbers", "false", "if ( ", "less than or equal to", "sort", "jsonrpc", "Client does not support sampling (required for ", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "valueOf", "schemas", "read", " == 'object' && !(", "29462587PcSmQx", "loadSchema", "maxParallelReads", "milliseconds", ")) ", "photoshop.invalid_boundary_type", "Cannot access property/index ", " not found on node ", "label", "#33CC66", " === true) ? ", "RH币:", "void", ", (dataPath || '')", "createErrors", "_onrequest", "sdppp_widgetable_title", "InvalidParams", "aborted", "useRawValueToEscape", "response", "if (!", "获取 API Key", ".errors", "bbz", " = false; if (e instanceof ValidationError) ", "创建图层失败", "not", "输入设置", ".type", "min", "getProperty", "getData", "del", "Cannot access data ", "warning", "user", "{0,6}", "ZodNaN", "setupTransportHandlers", "sampling", "_def", "tools/call", "brand", "Canvas bounds", "画布范围", "util", "emoji", "overflow", "Source", "No crop", "sendStreamRequestorRequest", "start", "default is ignored for: ", "适配至画布", "signal", "#/definitions/nonNegativeIntegerDefault0", "click to restore", "workflows/", "outgoingNotificationInterceptors", " , message: 'should be multiple of ", "removeNotificationHandler", "addFormat", "unsetRequestHandler", "resourceStore", ' !== "object")', "_clientCapabilities", "_metaOpts", "%[89A-Fa-f]", "reloadResources", " self._opts.$comment(", "请选择要发送图像的位置", "keyword", "__proto__", "#FF0000", "mesh", "toNode", "yds", "++) { if (", "addIssue", "auto", "handleIncomingNotification", " !== undefined) {  ", "保存所有", "} else {  errors = ", "fatal", "; }", "  for (var ", "schemaHasRules", "auth.guest_login_success", "ZodUnknown", "res", "title", " ); if (isAdditional", "validateStreamRequestorRequest", "add", " , schema:  ", "nonstrict", "statusText", " , schemaPath: ", "rejecting language code not found in supportedLngs: ", " = true; ", "pendingCount", "ctx", "keySchema", "getConnectedNodeIds", " = 0; ", " == 'string' && ", "ZodLazy", "%[EFef]", "nullish", "自动填入画布关闭", "element", "Send to PS", "removeNamespaces", " throw new ValidationError(vErrors); ", "items", "loadResources", "从 当前图层 获取图像", "Email address's domain name can not be converted to ASCII via punycode: ", "missingKeyNoValueFallbackToKey", "?\\:\\:", "Refresh workflow list", "implementAction", "coerce", "Reverse", "slice", "'[' + ", "_responseHandlers", "charCodeAt", "{6}", "getScriptPartFromCode", "#FF0033", "setProperty", "快捷键选图功能仅在插件窗口聚焦时可用", "非法的名称: {{0}}", "datetime", "patternProperties", "') ", "nestingRegexp", " Math.abs(Math.round(division", "def", "./api/userdata/workflows%2F.index.json", " after ", ") {   ", "assertCapabilityForMethod", "Invalid", "_parseSync", "', depsCount: ", "passingSchemas", "resolve", "Sending image...", "Enter your RunningHub API Key", "xaa", "null", "isValidLookup", "defaultError", "subject", "#9900CC", "[0-9]", "         , parentSchema: validate.schema", "从 画布 获取图像", "host", "port", "_validateKeyword", "ZodBranded", "languages", "defineProperty", "_cachedPath", "newdoc", "maxValue", " || validate.schema", "emit", "ActionSet {{0}} 未找到", "生成中...", "#6633FF", " , validate.schema", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", " if ( ", "addMiddleware", "unescapeSuffix", "setOutgoingRequestInterceptor", "outputType", "No edge defined from ", "No backend was added via i18next.use. Will not load resources.", "jwt", "newdoc_canvas", "float", "peo", "sdppp 选中图层", "Negative Crop", "never", ".call(this, ", "Elicitation response content does not match requested schema: ", "createGlobalDispatcherForType", "sdppp_assets", "反向裁剪", "_setupTimeout", "ayh", "processCode", "' && !(typeof ", "connecting", "sdpppX2", "Limit image size", "messages", " } }", "Not implemented (501)", "resources/unsubscribe", "invalid_enum_value", "getDefinition", "Received a progress notification for an unknown token: ", "minimum", "ignore", "documentElement", " } } ", "addNamespaces", "definitions", "findPath", "exact", "sdppp/broadcast", "exactUsedKey", "joinAs", "Get mask from Current Layer", "获取结果失败: {{error}}", "#FF00FF", "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "]; } else { ", ", rootData)  ", "Get pixel of {{0}} failed", "step", "_serverInfo", "hasOwnProperty", "AUTO", "_schemas", "#CC9933", "getNodeStore", "stateUpdate", "formatParams", "removeCatch", "#CCCC00", "extensionManager", "获取图层信息", "curlayer_selection", ")) { ", "actions", "_regex", "async format in sync schema", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', " else {   ", "正在等待图片上传...", "Base URL", "equal", "promise", "[^]", "addMetaSchema", "describe", "returnedObjectHandler", "_pendingDebouncedNotifications", "image.layer.smart_object", ".errors; else vErrors = vErrors.concat(", "resourceName", "heartbeatTimeout", "transform", "&#39;", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "minLength", "precision", "base64", "图层 {{0}} 不是一个组", "Fit to current layer", "2024-10-07", " var async", "too_small", "; } ", " , message: 'should contain a valid item' ", "pluralSeparator", "Server error (500)", "   var err =   ", "Values", "Server does not support tools (required for ", "getRule", " , params: { additionalProperty: '", "Action handler ", ".length; ", "uuid", " must be number", "Generating...", "Positive Crop", "|0?0?", "parse", "Batch Count", "getRegisteredActions", "rootId", "Outgoing message:", "ZodObject", "async schema in sync schema", "ayl", " else { ", "5654440RAtYTN", "#CC0033", "i18nFormat", "names", "Number must be ", ") {  ", ") {  for (var ", ")' returned an object instead of string.", "getSuffixes", "invalid_union_discriminator", "Enum", "getUsedParamsDetails", "setPrototypeOf", "_errors", ".validateSchema(", "Set as Canvas", "Failed to send cancellation: ", "App ID:", " === undefined ", " && ( ", "用户名: {{username}}", "ref/resource", " = true; if (", '" already exists', "defaultNS", "'then'", "#/definitions/stringArray", "isDuration", "console", "sdppp_workflow_alias", "acy", "node", "MAX_SAFE_INTEGER", "; if (!", "hasNotificationHandler", "obj", "style", "getNodeTitle", " already exists, which would be overridden", "Clear guide frame", "正在创建任务...", "setupGeneralBroadcastHandler", "&quot;", "没有活动文档", "other", " = equal(", " , message: 'should be ", "显示预览框 ({{count}}张图片)", "isUUID", "~validate", "Unknown message type: ", "AbortSignal is already aborted", "Workflow not found", "ZodFunction", "[\\/\\?]", "save", "regexpUnescape", "jsonPointers", "'/' + ", "#/definitions/schemaArray", " } else if ( ", "elicitInput", "addIssues", "toASCII", "addCached", "finite", "AI使用的区域与最大尺寸控制", "removeEventListener", "at most", "registerHandler", "764495PwOKAZ", "isBase64url", "[A-Za-z]", "maxSize", ") { var op", "创建文档失败", "不支持非文本图层: {{0}}", "missingKey", "userDefinedNsSeparator", "Layer not found: {{0}}", "defaultMeta", "loading namespace ", " , params: { type: '", "[object Function]", "isNotification", "addKeyword", "masks", " = undefined;", " , params: {} ", "segment", "preprocess", "comfyAPI", "Schema ", "executed", "firebug", "disable", "base64url", "currentNodeId", "Content", "encountered", "realTransport", "coerceTypes", "maxLength", "请求超时 (408)", "&amp;", ") { for (var ", "No errors", "_error", "currency", "Module", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", " && Object.prototype.hasOwnProperty.call(", "accept", "changeLanguage", "当前图层范围", " % 1)", "ZodVoid", "errs_", "useDefault", "checkDataTypes", "PS遮罩", "[\\:]", "thisServer", "#0099CC", "_capabilities", "notifications/roots/list_changed", '"number"', "Tutorial", "Execute", "refine", "resources/subscribe", "Invalid literal value, expected ", " items' ", "isOptional", "match", "keyword schema is invalid: ", "hasLoadedNamespace: i18n.languages were undefined or empty", '" as the namespace "', "zero", ".patternProperties", "lastPongReceived", "unshift", " } if (errors === ", ` + '" schema' `, "' + ", '" ignored in schema at path "', "isOpen", "splice", "4RpIlkt", "uri", "INTERCEPTOR_ERROR", "Invalid input", "alwaysSet", "Stop and cancel all", "startsWith", "handleIncomingRequest", "relatedRequestId", "manuallyExtractDefaults", "sdppp", "Unexpected dot segment condition", "app", "ZodBigInt", "setupNodeBindings", " var startErrs", "isLanguageChangingTo", "implements", " if (typeof itemIndices[item] == 'number') { ", "自动从PS重新获取", '$ref: keywords ignored in schema at path "', "addMessageEventListener", "(\\.\\d+)?", "1654413nKbFyA", " = errors;", "Cannot forward to node ", "$schema", "nestingPrefix", "initializeResponseQueue", "lngs", " in key: ", "Waiting in queue", " = undefined; ", ") == -1 ", "Gemini 2.5 Flash 图像", "Boundary", "content", " , params: { i: i, j: j } ", "getDataByLanguage", "Failed to get result: {{error}}", " if (errors === 0) return data;           ", "logger", "not_finite", "&#x2F;", "pst", "payload", "test", " element(s)", "ValidationError", " !== undefined && typeof ", "__origin", "More actions", "ZodIntersection", " not found in graph definition", "URI can not be parsed.", " === ", "invalid_arguments", "PCT_ENCODED", "callValidate", "Canvas", "You must pass an array of schemas to z.tuple([ ... ])", "requestId", " &&   Object.prototype.hasOwnProperty.call(", "当前图层", " is present' ", "renderer", "put", "Task cancel failed: {{error}}", "interceptor_error", "_progressHandlers", "/type", '[\\"]', "#FF33FF", " = null; try { ", " is loaded but ", "pluralRulesCache", "errSchemaPath", "boolean", "listRoots", "[vV]", "JWT", " = refVal[", "网关错误 (502)", "NumberFormat", "context", ".additionalProperties", "Core schema meta-schema", "interpolator", "$schema must be a string", "local", " , (dataPath || '')", "addEventListener", "未知错误（{{code}}）", "options.loadSchema should be a function", " if (! ", "请输入您的 Google API Key", "onerror", '" (see option extendRefs)', "broadcastManager", "Action {{0}} 未找到", "resolveRunImages", "自动填入画布开启", "lazycreate", "missingSchema", "isBase64", "reverse", "sendToolListChanged", "ordinal", "bigint", " if (", "combo", "Clear all", "multipleOfPrecision", "_options", "reference", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "usePattern", "lowerCaseLng", "capabilities", "ssh", "url", "invalid_intersection_types", "node_errors", "schemaId", "valueSchema", "Error in direct request ", "fail", "gte", "nonempty", " reference.", "returnDetails", "smaller than", "isInitializing", "disconnected", "getCanonicalLocales", "connect", "initialState", "smaller than or equal to", "Incoming message:", "ydd", "getCapabilities", "removeMessageEventListener", "_cleanupTimeout", "precheck", "删除当前", "refs", "comfy-uxp", "ltr", "nodeProxies", "array", "translator", "comfy-entry", "extendRefs", "__connection_established", "Store not found for current node ", "notificationsIntercepted", '.schemaPath = "', ".schema = ", "#6600FF", "Auto send enabled", "abs", "  var err =   ", "isRoot", "is a required property", "Set as Current Layer", "Waiting for image upload...", " = false;for (var ", "default", "widgetableStructure", " not found for current node ", "onmessage", "Error compiling schema, function code:", "Invalid JSON-pointer: ", "适配至选区", " not in path ", " } ", "停止并取消全部", "sendPromptListChanged", "added", "overloadTranslationOptionHandler", ".length == 1) { ", "作为新文档导入", "Error validating elicitation response: ", "Action set {{0}} not found", "Server does not support notifying about resources (required for ", "_notificationHandlers", "请登陆后使用插件", " = await ", "maxProperties", "Server does not support logging (required for ", "[\\:\\/\\?\\#\\[\\]\\@]", "abortAllRequests", "cleanupConnection", "cmp", "images", "setupGraphStoreSync", "keys", ") vErrors.length = ", "too_big", "pathname", "var refVal", "saveWorkflow", " Object.keys(", "readOnly", "arrayKeywords", "partialBundledLanguages", " = null; ", "#3300FF", "; else vErrors = vErrors.concat(", "组 {{0}} 中没有第一个相关图层", "getProtocol", "format", "  }  ", ".data = ", "prompts/list", " != 'string') || ", " , params: { limit: ", "Show Preview ({{count}} images)", "supportedLngs", "undefined", "setupStreamResponseHandler", "_loadingSchemas", "hasOutgoingRequestInterceptor", "jpr", "maximum", "msec", "exports", "toHash", "find", '"failed to compile', "detail", "/*# sourceURL=", "unescapeFragment", "fullPath", "var ", "###", "returnEmptyString", "coerced", "usedKey", "__internal_requestInitialState_", "parent schema must have all required keywords: ", "notifications/progress", "languageChanged", "fallback", "var customRule", "])) { ", "additionalProperties", "shared", "ComfyUI failed to load, HTTP status code: {{code}}", "getHandler", "++) if (equal(", "changeTracker", "Validation failed but no issues detected.", "Invalid attempt to destructure non-iterable instance", "#CC33FF", "Error handling incoming message:", "oninitialized", "Gemini 2.5 Flash Image", "root.refVal[0]", "ZodNever", "detect", "pick", "prepareLoading", "无法打开图像文件: {{error}}", "notifications/prompts/list_changed", "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "lte", "hour", "unicodeSupport", "yih", "resolvedOptions", "交集或缩放目标为空", "unionErrors", "token", "formatArgs", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "schemaUnknownRules", "2.0", "greater than or equal to ", "get", "ZodCatch", "=== Options ===", "退出登录", "parent", "responseSchema", "substring", "ComfyUI加载失败，HTTP状态码：{{code}}", "No first related layer in {{0}}", "uniqueItems", " validate.errors = vErrors; ", "saveMissingPlurals", ".length > ", "missingRef", "assign", "更多操作", "completion/complete", " != 'number') || ", "defaultValue", "humanize", "unwrap", "days", "cuid2", "exists", 'schema with key or id "', "const", "apply", "callback", "timeout", ".else", "source", "prepend", "$async", " = null;", "isDatetime", "Host's domain name can not be converted to ASCII via punycode: ", "http", " && ", "ZodDiscriminatedUnion", "Invalid graph definition: ", "<errors; ", "isNaN", " || Object.keys(", " = false; else { ", "Channel connecting...", "Close", "Required", "nodeStores", "less than", "Date must be ", "detection", "Get mask from Canvas", "nullable", "origin", " / ", "cleanCode", "setNodeTitle", '" was not yet loaded', "initAsync", "escapeFragment", "Connect", "isSupportedCode", "formErrors", "Quality {{percent}}%", " , params: { property: '", "logger must implement log, warn and error methods", "addResource", "validate.schema", "].propertyName = ", "utils", " ? await ", "selectColor", "actionHandlers", "/else", " = errors; var ", "File not found: {{path}}", "dataVar", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "userAgent", "missing", "(new RegExp(", "selection", "按住 Shift 键以新文档方式导入", "executing", "No handler for streamRequestor: ", "[i], ", "_limit", ".then", "#CC6633", "fragment", "sendResourceUpdated", "Failed to request initial state for ", "multipleOf", "createWithPreprocess", "/additionalProperties", "__DEFAULT__", "Select layer", "请选择AI服务", "exactLength", "file://", " , params: { comparison: ", "sec", ".test(", "type", "prefix", "Entire Canvas", "safeParseAsync", "over", "minSize", '" is used in schema at path "', "minValue", "errorMap", "cancel", "success", "仅选区范围", "getCurrentNodeId", " ? '", "createInstance", "Document {{0}} not found", "getOwnPropertyNames", ") && ", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", "URI is not a ", "[A-Fa-f]", "timestamp", "Expected ", "nodeIndexes", "language", "alert", "formatters", " must be number or boolean", " , message: 'should match exactly one schema in oneOf' ", "notifications/tools/list_changed", "sdppp/streamResponse", "[ ]*{", "限制图片尺寸", "stack", "addPostProcessor", "NOT_USERINFO", "assertIs", "#0000CC", "反向裁剪(Inpaint)", ".validate; } if (  ", ".validate", "sendResourceListChanged", "getResourceBundle", "parseAsync", " = false , ", "[BroadcastManager] Error forwarding ", "Jump to last", "请选择要获取的图像", "Failed to request initial states after connecting to ", "getPrototypeOf", "assertRequestHandlerCapability", "Intersection results could not be merged", "))))) {", "color: ", "正向裁剪", "removed", "readingCalls", "removeAdditional", "notificationHandlers", " delete ", "dataLevel", "aeb", " {} ", "ZodPipeline", "No Intl support, please use an Intl polyfill!", "ZodDefault", " for interpolating ", "store:update:", "选择 AI 服务提供商", "usedNS", "MissingRef", "uiWeight", "effect", "openWorkflows", "stats", "Remote", "_addCheck", "interpolation", " === null || ", "\\.\\d{", "regex", "urn", "relative-json-pointer", "ZodLiteral", "#FF3366", "Node definition not found for current node ", "missingKeyHandler", " , message: '", "parentDataProperty", "\\$&", "split", "正在发送图像...", "hrs", "tools/list", "right", "fast", "MIN_SAFE_INTEGER", "schemaErrorMap", "pre", " ? ", "prevValid", "interpolationkey", "idx", "lng", "_getOrReturnCtx", "initializedStoreOnce", "pctEncChar", "Clear", "保存并立即执行", "Invalid discriminator value. Expected ", "image", "[object Number]", "safeValue", "未实现 (501)", "hasLanguageSomeTranslations", "useColors", "loaded namespace ", "valid", "schema should be object or boolean", "markConnected", " + ", "custom keyword definition is invalid: ", "statements", "ZodNumber", "yud", "continueOnInterceptorError", "{0,5}", " for language ", "Your powerful node-based workflow engine", "seconds", "var default", "processors", "[^\\%\\/\\@]", "./sdppp-custom.js", "length", "en-US", "baseId", "useDefaults", "&lt;", "skipOnVariables", "request", "#/definitions/nonNegativeInteger", "assertEqual", "parseMissingKeyHandler", "metaSchema", "toLowerCase", "从 选区 获取遮罩", "close", " else throw new ValidationError(vErrors); ", "Not connected", "粘贴你的模型名称", "react", "#CC3366", "); for (var ", "setupAbortHandler", "ucs2length", "#FF3399", "mountedTransports", "Running for {{duration}} secs, {{message}}", "regExpMap", " var err = ", "elicitation/create", "registerCapabilities", "waitingReads", "_compile", "([+-]\\d{2}:?\\d{2})", " if (!", "queueLoad", "_parse", "Method not found", "max", "detectCycles", "transport", "WebkitAppearance", "protocol", " && !Array.isArray(", "version", "reconnecting", "_requestHandlerAbortControllers", "Array must contain ", "appendNamespaceToCIMode", "2024-11-05", "postMessage", "buildAdjacencyList", " == null) ", "  )  ", "symbol", "interpolate", " = validate.schema", " }   ", "userinfo", "cuid", "11509758qOGnye", "67848zdsPZD", "ZodSymbol", "__internal_", "$t(", "Logout", " in ", "[\\.]", "sdppp/directRequest", "widgetable", " == +", "+Alt crop by selection", "connectionManager", "Cycle detected: ", "coerceToTypes", "]); ", "ignoreJSONStructure", "Bounds", " = new RegExp(", "inclusive", "domainHost", "executeOutgoingNotificationInterceptor", "Fit to canvas", "objectValues", "zod", "Auto Sync: off", "debug", "progress", " at one or more positions greater than or equal to ", "_any", "http://json-schema.org/draft-07/schema#", ` , message: 'should match pattern "`, "observers", "hbo", "找不到图层: {{0}}", "MCP error ", "async", "includes", "按回车打开应用： {{appName}}", "Aborted", "modifying", "languageUtils", "#FF9900", "]; var ", "sampling/createMessage", "Rectangle coordinates required for create action", " } else {  errors = ", "path", "same-document", "Google Gemini Image Generator", "Internal ZodObject error: invalid unknownKeys value.", "resources/read", "usedParams", " || ", " (async", "enforceStrictCapabilities", "Select AI Service Provider", " than ", "Get content of layer {{0}}", "errorPath", "logout", "object", "#00CCCC", "rejectImage", "forkResourceStore", "isURL", "flags", "varOccurences", "newlayer_curlayer", "#99CC00", "loaded", "_opts", "Open images from file", "notificationQueue", "NOT_FRAGMENT", " else if (", "widgets", "#00CCFF", "http://json-schema.org/schema", "implementInternalAction", "secs", "parentData", "clear", "day", "unrecognized_keys", "shift", "smartobject", "no plural rule found for: ", " , message: 'should NOT have ", "sdppp-heartbeat", "workflows", "document {0} not found", " when property ", "canvas", " && !(", "Layer {{0}} is not a group", "getItem", "rules", " != 'number') { ", "nodeId", "2025-03-26", "execution_start", "Host's domain name can not be converted to ", "#CC0066", "No store found for node ", "notice", "\\%25|\\%(?!", "getDefaultValuesFromSchema", "getFixedT", " characters' ", "startHeartbeat", " == errors) {", ".call( ", " = typeof ", "([01]\\d|2[0-3]):[0-5]\\d(:", "_onnotification", "nodeTransports", "streamRequest", "varReplace", ", deps: '", "输入图像", "Input Image", "_processInputParams", "saveMissing", ";  ", "querySelector", "#FF9933", "validateSchema", "调整预览文档尺寸", " = vErrors[", "filter", "pbt", "optional", "+Alt 反转遮罩", "ZodNativeEnum", " if (true) { ", "addLookupKeys", "6qdsqwM", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "env", "#CC00FF", "PS图片", "init", "pending", "#CC0099", "emergency", "?\\]?$", "locale", " | ", "#FF33CC", " !== undefined && ( typeof ", ".length ", "skipKeywords", "options", "Enter Google API Key", "服务器错误 (500)", "handleDirectProxyForward", "sd-ppp-static/sdppp_images/", "fewer", "buildDirectedAdjacencyList", "WARNING DEPRECATED: ", "invalid_string", "appendNamespaceToMissingKey", "queue", "isRequest", "preload", " , params: { propertyName: '", "ownProperties", "请输入您的Replicate API Key", "#00CC99", "No images", "++) { ", " validate.errors = null; return true; ", "openWorkflow", " != 'boolean' && ", "Selection", "workflow", "handle", "Edge references unknown target node: ", "A request handler for ", "common", "lastIndexOf", "All", "some", "missed to resolve ", "broadcast", "如何获取APIKey和API Secret", "headers", "compileAsync", "remove", "sdppp/streamRequest", "usedLng", "action", "send", "#0000FF", "onprogress", "create", " ( ", "iri", "runningRequests", "parsedType", ")) {  var err =   ", "alg", "3rdParty", "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "hasPath", "#0066CC", "more than", "{4}", " should be boolean' ", "heartbeatTimer", " if (Array.isArray(", "_unknown", "mountTo", "indexOf", "optionsMap", "getter", "message", "任务执行失败: {{error}}", "info", "and", "passthrough", ".async; ", " , data: ", "api", "result", "ifClause", "[0-5]\\d", "Google Gemini 图像生成器", "queuePrompt", "expected", "rest", "Client does not support listing roots (required for ", "strictKeywords", "mergeObjectAsync", "canReachThroughConnectedNodes", "openWorkflow: ", "acx", "ConnectionClosed", "选区除外", "禁止访问 (403)", "_clientVersion", "getConnectionInfo", "isCIDR", "cacheKey", "Current layer bounds only", " == 'number' || ", "getNodeIds", " has duplicate value ", "isDate", " var schema", " if (errors === ", "click", "warn", "Shortcut selection feature requires login", "prompts", "[\\-\\.\\_\\~]", "unknown keyword: ", "external", ") { errors = ", "escapeQuotes", "_resetTimeout", " != 'boolean') ", "none", ".pi-sign-out", " if (schema", "你的工作流", "toJSON", "getPathExpr", "getAllReachableNodes", "Failed to check workflow changeTracker state:", "uxp", "charAt", "propsKeywords", "setWidgetValue", "postProcessor", " && !", "hasLoadedNamespace", "dataPathArr", "dataProperties", "getDefaultValueFromField", "请输入您的RunningHub API Key", "languageDetector", "index", "创建参考线框架", "color: inherit", "Your Workflows", "elicitation", " = false; else if (", "subfolder", "/properties", "isObject", "Auto run after canvas change", "ayn", ") {", " }  ", "   ", "); if (", "ZodRecord", "Save and run immediately", ") {   var err =   ", "bind", "reason", "isTransportReady", "1.0.0", "resolveComponents", " === 0 || ", "if (", "padEnd", "isNANOID", " break; ", "addResourceBundle", "newlayer_selection", "unknownKeys", "ref/prompt", "namespaces", "enum", "uiLocale", "every", "Confirm", "Prompt", "get_layer_info: layer_identify required", "Get mask from Selection", "画布变动后自动运行", "Show sent images", "reset", "ZodUndefined", "acw", "当前选区", "resolvedLanguage", "dirty", "getTransport", "Uploading, if the image too large, may be lag...", " === '' ", "Task execution failed: {{error}}", "missingInterpolationHandler", "#3366FF", "catchall", "initialized", "done", "sendLoggingMessage", "ASCII", ") {  var err =   ", "cacheUserLanguage", "Edge references unknown source node: ", "sessionId", " , schema: validate.schema", "week", "offset", "Current layer bounds", "MiddlewareError", "anyOf", "_errorDataPathProperty", "]] !== undefined ", "Get image from Canvas", "executeOutgoingRequestInterceptor", "No connection available for node ", "_path", "escapeValue", "Notification handler failed for ", "https", "actionManager", "pluralResolver", " == 'number' ? ( (", "messageHandlers", "objectKeys", "name", "Sending...", "hasResourceBundle", "unsetOutgoingNotificationInterceptor", "_cache", "addRule", "maxItems", ", exclusive: ", "Plugin window focused required to use keyboard shortcut", "sdppp/abort", "data", "无法从文件创建文档", "fcName", "workflowManager", "unsetNotificationHandler", "刷新工作流列表", "#3399FF", "Number must be a multiple of ", "当前图层除外", "fromCodePoint", "; } catch (e) { ", ".hasOwnProperty(", "endsWith", " ( ( ", "keywordValidate", " division", "[MCPMiddleware]", " = true; } else { ", "任务未完成，当前状态: {{status}}", "getPath", " = errors;  ", "__proxy_forward", "messageQueue", "xn--", "setKey", "roots/list", "#0033CC", "notifications/resources/updated", "post", "unknown", "[\\:\\@\\/\\?]", "isClone", " , params: { allowedValues: schema", "mesh:comfy", "cleanup", "IPV6ADDRESS", "MissingRefError", "Stop auto run", "#3399CC", "{0,1}", " = +", "setItem", "returnNull", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "freeze", "safe", " || ! Object.prototype.hasOwnProperty.call(", "loopRequired", "apc", "[\\@]", "requestInitialStateForNode", " return errors === 0;       ", "Invalid action: {{action}}", "yhd", "relativetime", "Username: {{username}}", "ZodOptional", "running", "serialize", "#9900FF", " var ", "仅当前图层范围", "date", "setLimit", "_cached", "properties ", "RelativeTimeFormat", " validate.errors = [", "_refinement", "date-time", " , message: 'should match some schema in anyOf' ", "performWorkflowReset: ", "method", "loadNamespaces", "is an invalid additional property", "issues", " !== undefined ", " var isAdditional", "joinValues", "Received a response for an unknown message ID: ", "checks", "minProperties", " - no connection available", "{5}", "./api/manager/reboot", "wss", "postProcessPassResolved", "arrayToEnum", "ruleErr", "loadGraphData", "Internal error", "Disk", " instanceof RegExp) && ", " !== ", " = ", "regExpQueue", ".type || 'string'; if (", "position", "requestsHandled", "initImmediate", "services", "logging", "isFinite", "localeCompare", "refVal[", "should have required property \\'", "opts", "notifications/resources/list_changed", "pattern", "exec_info", "await ", "Get API Key", "Synchronous parse encountered promise.", "reject", "argumentsError", "]] === undefined ", "It seems you are nesting recursively key: ", "isIP", "typeof ", "ayp", "pong", "显示发送的图片", "prp", "Already connected to node ", "Back", "invalid_type", "给发送的图片创建文档", "schema id must be string", "adf", "+\\.", "errorsText", "nanoid", "prompt_ids: ", "toLoad", "#CC3333", "Import as New Document", "extractFromKey", "more", "hasAction", "formatType", "自定义AI工作流引擎", "resetRegExp", " = errors;var ", "_addSchema", "_limitItems", "UUID is not valid.", "json", ` , message: 'should pass "`, "apd", "按选区裁剪", "))) { ", "; }   var err =   ", "isInitialized", "#9933FF", "Failed to open image file: {{error}}", "Login Successful", "finally", "nodes", ".validate;", "aao", "fallbackLng", "registerProxyForwardHandler", "extend", "customErrors", "safeParse", "allOf", "排队等待", "concat", "allServers", "maxTotalTimeout", "absolute", "params", "新图层", "loadLanguages", "get_layer_info: 需要 layer_identify", ").length ", "millisecond", "&subfolder=", "favorites", " throw new ValidationError([", "enabled", "; else vErrors = null; }  ", "prototype", "completed", "init: no languageDetector is used and no lng is defined", ") continue; ", "%c ", " === false) ", "code", "resources/templates/list", "toUpperCase", "UNRESERVED", "zh-CN", "findPathInternal", "invalid_date", "266cQzmPg", "_getType", "strong", " ) { ", "getStats", "Number must be finite", "function", "/patternProperties/", "int", " not found for node ", " = errors; ", "maxReplaces", "handleIncomingMessage", "getSuffix", "simplifyPluralSuffix", "isInt", "resource", "requestHandlers", "Paste your model name", "#3333CC", " validate.errors = vErrors; return false; ", ".dataPath === undefined) ", "comfy", "allKeys", "getLanguagePartFromCode", ") || ", "cardinal", "definition", "listWorkflows", ") ) {   ", "schema", "ZodEffects", "每批图像数", "nonpositive", "abort", "reduce", "Maximum total timeout exceeded", "Failed to send response: ", "skipCopy", "forward", "getClientVersion", "); errors = vErrors.length;  for (var ", " properties' ", "broadcastReceived", "prev", "requestsIntercepted", "extra", "positive", "strict", " + '", " , message: 'should have ", ".length , ", "color", "compositeRule", "无效边界: 左边必须小于右边，上边必须小于下边", "keyof", `" keyword validation' `, "startTime", "使用教程", "' : '", "copy", "markDisconnected", "query", "stringify", "kPanelBrightnessMediumGray", "#FF3333", "Create document for sent images", "RH Coins:", "formatSeparator", "#66CC00", "forEach", "[GraphStoreSynchronizer] Error processing store update for ", "isCUID2", "value", "{2})", "获取像素失败: {{0}}", "ids", "longer", "#CC00CC", "Hold Shift key to import as new document", "getConnectionCount", "Current Layer", ") > 1e-", "适配至当前图层", "nan", " var vErrors = null; ", "separator", "; if (vErrors !== null) { if (", "uxpHost", "returnObjects", "Desire bounds is null", "sourceCode", "Failed to send an error response: ", "false schema", "Server does not support notifying of prompt list changes (required for ", "audio", "return", "formatLanguageCode", "isInteger", "weeks", "RULES", "isEmpty", "posterIdentifier", "connectedNodes", "#9933CC", "propertyNames", "ComfyUI加载中...", "retryTimeout", "Validation", "clientInfo", "ZodSet", "setupStreamProtocolHandlers", "'].definition; var ", "execution_interrupted", "extendTranslation", "从 画布 获取遮罩", "iterator", "isNullable", "nsSeparator", "logging/setLevel", "wait", "errs__", "{0,4}", "map", "acq", "正在发送所有图片...", "notifications/initialized", " }; return validate; ", "notifications/message", " for nesting ", " = [", "Mask", "Create document", "formats", "253788YhYjeE", "Invalid proxy forwarding: current node ", "_getInvalidInput", "ZodNull", "[UnexpectedJSONParseError]: ", "exactly", "asyncIterator", "entries", "diff", "生成中", " not implemented for node ", "colors", " , schema: false , parentSchema: validate.schema", "` could not be extracted from all schema options", "refinement", "storage", "missingRefs", "$dataMetaSchema", "getTransportToNode", "isTop", "validateHandlerType", "text", "addUsedSchema", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "DEBUG", "notifications/cancelled", "messagePoster"];
  return Fx = function() {
    return i;
  }, Fx();
}
async function Mc() {
  var i = s;
  if (Xa) return Promise.resolve();
  Te[i(481)] && C0[i(2363)][i(2507)]({ comfyUserToken: Te.user }), Xa = !0;
}
qx[s(2003)](s(1042));
async function Lc(i, x, t) {
  var r = s;
  x[r(982)](r(1492), ({ detail: n }) => {
    var o = r;
    if (!n) return;
    let c = 0, d = 0;
    !isNaN(n[o(2109)] / n[o(1443)]) && (c = Math.round(n.value / n.max * 100));
    const u = n[o(774)], f = graph.nodes[o(1119)]((l) => l.id == u);
    if (f && f[o(180)]) {
      const l = 100 / graph[o(1998)].length;
      d = Math[o(2200)](f[o(180)] * l) + (c ? c / 100 * l : 0);
    }
    C0.store.setState({ progress: c, graphProgress: d });
  }), x[r(982)]("status", (n) => {
    var c;
    var o = r;
    (c = n[o(1121)]) != null && c[o(1950)] && C0.store[o(2507)]({ queueSize: n.detail.exec_info.queue_remaining });
  }), x[r(982)]("execution_error", ({ detail: n }) => {
    var o = r;
    if (C0[o(2363)].setState({ executingNodeTitle: "", executingNodeID: "", lastError: n[o(343)] }), n[o(2350)]) {
      const c = i[o(315)][o(1998)][o(1119)]((d) => d.id == n[o(2350)]);
      C0[o(2363)][o(2507)]({ widgetableErrors: { [n[o(2350)]]: "[" + ((c == null ? void 0 : c[o(537)]) || n[o(2350)]) + "]" + n.exception_message } });
    }
  }), x[r(982)](r(1253), (n) => {
    var o = r;
    const c = n[o(1121)], d = graph[o(1998)][o(1119)]((u) => u.id == c);
    if (d) {
      const u = 100 / graph.nodes[o(1407)];
      C0[o(2363)][o(2507)]({ executingNodeTitle: d.title, executingNodeID: d.id, graphProgress: Math[o(2200)](d[o(180)] * u) });
    }
  }), x[r(982)](r(2149), () => {
    var n = r;
    C0[n(2363)][n(2507)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x.addEventListener(r(1566), ({ detail: n }) => {
    C0.store.setState({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date.now() });
  });
  const e = /* @__PURE__ */ new Map();
  x[r(982)](r(283), (n) => {
    var o = r;
    C0.store[o(2507)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[o(1170)](n[o(1121)][o(2334)]) || []).map((d) => ({ url: d, thumbnail: d }));
    qo(n[o(1121)][o(2334)], c), e.delete(n[o(1121)][o(2334)]);
  }), x[r(982)]("executed", (n) => {
    var o = r;
    const c = e[o(1170)](n.detail.prompt_id) || [];
    n[o(1121)][o(161)] && Array[o(242)](n.detail[o(161)].images) && n[o(1121)][o(161)][o(1085)][o(1407)] > 0 && c[o(365)](...n[o(1121)][o(161)][o(1085)][o(1595)]((d) => d[o(1273)] == o(161))[o(2159)]((d) => {
      var u = o;
      return location[u(1223)] + location[u(1090)] + "api/view?type=" + d[u(1273)] + u(322) + encodeURIComponent(d.filename) + (d[u(1754)] ? u(2018) + encodeURIComponent(d[u(1754)]) : "");
    })), n[o(1121)][o(161)] && Array[o(242)](n[o(1121)][o(161)][o(640)]) && n.detail[o(161)][o(640)][o(1407)] > 0 && c[o(365)](...n[o(1121)][o(161)].sdppp_assets.map((d) => {
      var u = o;
      return location[u(1223)] + location[u(1090)] + u(1622) + encodeURIComponent(d);
    })), e[o(321)](n[o(1121)].prompt_id, c);
  });
  let a = null;
  x.addEventListener(r(1450), (n) => {
    a = setTimeout(() => {
      var o = K;
      C0[o(2363)][o(2507)]({ comfyWSState: o(1450) });
    }, 1e3);
  }), x[r(982)]("reconnected", (n) => {
    var o = r;
    C0.store.setState({ comfyWSState: o(2273) }), clearTimeout(a);
  });
}
let jt = [];
(async function() {
  var x, t, r, e, a, n;
  var i = s;
  if (typeof gradioApp == i(1110)) {
    try {
      const o = (t = (x = window[i(834)]) == null ? void 0 : x[i(903)]) == null ? void 0 : t[i(903)], c = (e = (r = window[i(834)]) == null ? void 0 : r.ui) == null ? void 0 : e[i(2305)], d = (n = (a = window.comfyAPI) == null ? void 0 : a[i(1689)]) == null ? void 0 : n[i(1689)];
      if (!o || !d || !c) throw new Error("comfyAPI is not initialized, maybe comfyUI is too old");
      await Mc(), await vn(), await Lc(o, d, c), import(i(1406))[i(2367)]((u) => {
        u.default(_e, 2);
      });
    } catch (o) {
      jt.push(o.stack || o[i(1682)] || o);
    }
    await new Promise((o) => setTimeout(o, 2e3)), jt[i(1407)] && console[i(2239)](jt[0]);
  }
})();
