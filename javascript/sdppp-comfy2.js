var Nn = Object.defineProperty;
var On = (i, x, t) => x in i ? Nn(i, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[x] = t;
var c0 = (i, x, t) => On(i, typeof x != "symbol" ? x + "" : x, t);
var s = B;
(function(i, x) {
  for (var t = B, a = i(); ; )
    try {
      var e = -parseInt(t(814)) / 1 + parseInt(t(1387)) / 2 * (parseInt(t(633)) / 3) + parseInt(t(745)) / 4 * (parseInt(t(2354)) / 5) + -parseInt(t(2175)) / 6 * (-parseInt(t(2202)) / 7) + parseInt(t(1023)) / 8 * (parseInt(t(1227)) / 9) + -parseInt(t(1786)) / 10 + parseInt(t(624)) / 11 * (-parseInt(t(2357)) / 12);
      if (e === x) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Cx, 392353);
const R0 = window.comfyAPI[s(1107)].app;
window.comfyAPI.ui[s(1610)];
const Te = window.comfyAPI[s(826)][s(826)];
var Ba;
class qn {
  constructor(x) {
    c0(this, Ba);
    var t = s;
    this[t(2274)] = x;
    const a = this.validate();
    if (!a.valid) throw new Error("Invalid graph definition: " + a.errors[t(1541)](", "));
  }
  [(Ba = s(2274), s(454))]() {
    var x = s;
    const t = [];
    (!this[x(2274)][x(1930)] || Object.keys(this.definition[x(1930)])[x(1013)] === 0) && t[x(482)](x(2001));
    for (const [e, r] of this[x(2274)].edges)
      !this[x(2274)][x(1930)][e] && t[x(482)](x(2002) + e), !this.definition[x(1930)][r] && t.push(x(2226) + r);
    const a = this[x(1031)]();
    return !a[x(2154)] && t[x(482)](...a[x(1483)]), { valid: t[x(1013)] === 0, errors: t };
  }
  [s(1245)]() {
    var x = s;
    const t = /* @__PURE__ */ new Map();
    for (const a of Object[x(522)](this.definition.nodes))
      t.set(a, []);
    for (const [a, e] of this[x(2274)][x(760)]) {
      const r = t[x(1717)](a) || [];
      r[x(482)](e), t[x(1260)](a, r);
    }
    return t;
  }
  [s(1031)]() {
    var x = s;
    const t = [], a = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), r = this[x(1245)](), n = (o, c) => {
      var f = x;
      if (e.has(o)) {
        const l = c[f(1280)](o), d = c.slice(l).concat(o);
        return t[f(482)](f(1455) + d[f(1541)](" -> ")), !0;
      }
      if (a[f(2109)](o)) return !1;
      a.add(o), e[f(2293)](o);
      const u = r[f(1717)](o) || [];
      for (const l of u)
        if (n(l, [...c, o])) return !0;
      return e[f(1853)](o), !1;
    };
    for (const o of Object[x(522)](this[x(2274)][x(1930)]))
      !a[x(2109)](o) && n(o, []);
    return { valid: t[x(1013)] === 0, errors: t };
  }
  buildAdjacencyList() {
    var x = s;
    const t = /* @__PURE__ */ new Map();
    for (const a of Object[x(522)](this.definition.nodes))
      t[x(1260)](a, []);
    for (const [a, e] of this[x(2274)].edges) {
      const r = t.get(a) || [];
      r[x(482)](e), t[x(1260)](a, r);
      const n = t[x(1717)](e) || [];
      n[x(482)](a), t[x(1260)](e, n);
    }
    return t;
  }
  getNeighbors(x) {
    var t = s;
    return this[t(1819)]()[t(1717)](x) || [];
  }
  getNode(x) {
    var t = s;
    return this[t(2274)][t(1930)][x];
  }
  [s(1691)]() {
    var x = s;
    return Object[x(522)](this.definition[x(1930)]);
  }
  [s(1870)](x, t) {
    var a = s;
    return this.definition[a(760)].some(([e, r]) => e === x && r === t || e === t && r === x);
  }
  [s(1344)](x, t) {
    var a = s;
    if (x === t) return [x];
    const e = this[a(1819)](), r = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; r[a(1013)] > 0; ) {
      const { nodeId: o, path: c } = r[a(1889)]();
      if (n[a(2109)](o)) continue;
      if (n.add(o), o === t) return c;
      const f = e[a(1717)](o) || [];
      for (const u of f)
        !n.has(u) && r[a(482)]({ nodeId: u, path: [...c, u] });
    }
    return null;
  }
  [s(2313)](x, t) {
    return this.findPath(x, t) !== null;
  }
  getDefinition() {
    var x = s;
    return { ...this[x(2274)] };
  }
}
const mr = (i) => {
  let x;
  const t = /* @__PURE__ */ new Set(), a = (f, u) => {
    var l = B;
    const d = typeof f === l(1806) ? f(x) : f;
    if (!Object.is(d, x)) {
      const v = x;
      x = u ?? (typeof d !== l(570) || d === null) ? d : Object[l(1876)]({}, x, d), t[l(720)]((h) => h(x, v));
    }
  }, e = () => x, r = () => c, n = (f) => (t.add(f), () => t.delete(f)), o = { setState: a, getState: e, getInitialState: r, subscribe: n }, c = x = i(a, e, o);
  return o;
}, An = (i) => i ? mr(i) : mr;
var I0;
(function(i) {
  var x = s;
  i[x(634)] = (r) => {
  };
  function t(r) {
  }
  i[x(1143)] = t;
  function a(r) {
    throw new Error();
  }
  i[x(2368)] = a, i[x(2085)] = (r) => {
    const n = {};
    for (const o of r)
      n[o] = o;
    return n;
  }, i.getValidEnumValues = (r) => {
    var n = x;
    const o = i.objectKeys(r).filter((f) => typeof r[r[f]] != "number"), c = {};
    for (const f of o)
      c[f] = r[f];
    return i[n(1118)](c);
  }, i[x(1118)] = (r) => {
    var n = x;
    return i[n(1011)](r)[n(2299)](function(o) {
      return r[o];
    });
  }, i[x(1011)] = typeof Object[x(522)] === x(1806) ? (r) => Object[x(522)](r) : (r) => {
    var n = x;
    const o = [];
    for (const c in r)
      Object.prototype[n(1491)][n(1122)](r, c) && o[n(482)](c);
    return o;
  }, i[x(1718)] = (r, n) => {
    for (const o of r)
      if (n(o)) return o;
  }, i[x(913)] = typeof Number.isInteger === x(1806) ? (r) => Number[x(913)](r) : (r) => typeof r == "number" && Number[x(2273)](r) && Math[x(1615)](r) === r;
  function e(r, n = x(1677)) {
    var o = x;
    return r[o(2299)]((c) => typeof c === o(2203) ? "'" + c + "'" : c)[o(1541)](n);
  }
  i[x(1973)] = e, i[x(1019)] = (r, n) => {
    var o = x;
    return typeof n === o(1933) ? n[o(506)]() : n;
  };
})(I0 || (I0 = {}));
var br;
(function(i) {
  var x = s;
  i[x(1201)] = (t, a) => ({ ...t, ...a });
})(br || (br = {}));
const _ = I0[s(2085)](["string", "nan", s(986), s(688), s(800), s(741), s(555), s(1933), s(862), s(1806), s(2220), s(1898), "array", s(570), s(1582), s(710), s(2325), "never", s(2299), s(1260)]), Pe = (i) => {
  var x = s;
  switch (typeof i) {
    case x(2220):
      return _[x(2220)];
    case x(2203):
      return _[x(2203)];
    case x(986):
      return Number[x(1042)](i) ? _[x(2152)] : _[x(986)];
    case x(741):
      return _[x(741)];
    case x(1806):
      return _[x(1806)];
    case x(1933):
      return _[x(1933)];
    case x(862):
      return _[x(862)];
    case "object":
      return Array.isArray(i) ? _[x(1457)] : i === null ? _.null : i.then && typeof i[x(2480)] == "function" && i[x(981)] && typeof i.catch === x(1806) ? _[x(710)] : typeof Map !== x(2220) && i instanceof Map ? _.map : typeof Set < "u" && i instanceof Set ? _.set : typeof Date !== x(2220) && i instanceof Date ? _.date : _.object;
    default:
      return _.unknown;
  }
}, W = I0[s(2085)]([s(438), "invalid_literal", "custom", s(2278), "invalid_union_discriminator", s(1832), s(2315), s(1852), s(2328), "invalid_date", "invalid_string", s(2035), "too_big", s(2404), "not_multiple_of", s(2454)]);
class Se extends Error {
  get [s(1483)]() {
    return this.issues;
  }
  constructor(x) {
    var t = s;
    super(), this[t(1784)] = [], this.addIssue = (e) => {
      var r = t;
      this[r(1784)] = [...this[r(1784)], e];
    }, this[t(2050)] = (e = []) => {
      var r = t;
      this[r(1784)] = [...this[r(1784)], ...e];
    };
    const a = new.target[t(2017)];
    Object[t(2093)] ? Object[t(2093)](this, a) : this.__proto__ = a, this[t(2252)] = t(480), this.issues = x;
  }
  [s(1727)](x) {
    const t = x || function(r) {
      var n = B;
      return r[n(820)];
    }, a = { _errors: [] }, e = (r) => {
      var n = B;
      for (const o of r[n(1784)])
        if (o[n(2440)] === "invalid_union") o[n(1440)].map(e);
        else if (o[n(2440)] === n(2328)) e(o.returnTypeError);
        else if (o[n(2440)] === n(1852)) e(o[n(1561)]);
        else if (o[n(1106)].length === 0) a[n(2347)].push(t(o));
        else {
          let c = a, f = 0;
          for (; f < o.path[n(1013)]; ) {
            const u = o[n(1106)][f];
            f === o[n(1106)][n(1013)] - 1 ? (c[u] = c[u] || { _errors: [] }, c[u][n(2347)][n(482)](t(o))) : c[u] = c[u] || { _errors: [] }, c = c[u], f++;
          }
        }
    };
    return e(this), a;
  }
  static assert(x) {
    var t = s;
    if (!(x instanceof Se)) throw new Error(t(661) + x);
  }
  toString() {
    var x = s;
    return this[x(820)];
  }
  get [s(820)]() {
    var x = s;
    return JSON[x(2225)](this.issues, I0[x(1019)], 2);
  }
  get [s(1573)]() {
    var x = s;
    return this[x(1784)][x(1013)] === 0;
  }
  [s(2421)](x = (t) => t.message) {
    var t = s;
    const a = {}, e = [];
    for (const r of this[t(1784)])
      if (r[t(1106)][t(1013)] > 0) {
        const n = r[t(1106)][0];
        a[n] = a[n] || [], a[n].push(x(r));
      } else e[t(482)](x(r));
    return { formErrors: e, fieldErrors: a };
  }
  get [s(1724)]() {
    return this.flatten();
  }
}
Se.create = (i) => new Se(i);
const At = (i, x) => {
  var t = s;
  let a;
  switch (i.code) {
    case W[t(438)]:
      i[t(1617)] === _[t(2220)] ? a = t(606) : a = "Expected " + i[t(2010)] + ", received " + i[t(1617)];
      break;
    case W[t(1012)]:
      a = t(2481) + JSON[t(2225)](i[t(2010)], I0.jsonStringifyReplacer);
      break;
    case W[t(2315)]:
      a = t(1376) + I0.joinValues(i[t(522)], ", ");
      break;
    case W[t(2278)]:
      a = t(881);
      break;
    case W[t(2178)]:
      a = "Invalid discriminator value. Expected " + I0[t(1973)](i[t(942)]);
      break;
    case W[t(1832)]:
      a = t(1795) + I0[t(1973)](i[t(942)]) + t(2266) + i[t(1617)] + "'";
      break;
    case W[t(1852)]:
      a = "Invalid function arguments";
      break;
    case W[t(2328)]:
      a = t(1851);
      break;
    case W[t(703)]:
      a = t(2382);
      break;
    case W[t(1410)]:
      typeof i[t(2474)] === t(570) ? "includes" in i.validation ? (a = t(1544) + i[t(2474)][t(1586)] + '"', typeof i.validation.position == "number" && (a = a + t(1871) + i[t(2474)].position)) : t(869) in i[t(2474)] ? a = 'Invalid input: must start with "' + i[t(2474)][t(869)] + '"' : t(1261) in i.validation ? a = t(1906) + i[t(2474)].endsWith + '"' : I0[t(2368)](i[t(2474)]) : i[t(2474)] !== t(565) ? a = "Invalid " + i.validation : a = t(1383);
      break;
    case W[t(2035)]:
      i.type === t(1457) ? a = t(501) + (i[t(1593)] ? t(526) : i[t(707)] ? t(1568) : "more than") + " " + i[t(1706)] + t(1329) : i.type === t(2203) ? a = t(1877) + (i[t(1593)] ? t(526) : i[t(707)] ? "at least" : t(980)) + " " + i[t(1706)] + t(588) : i.type === "number" ? a = t(448) + (i[t(1593)] ? t(764) : i[t(707)] ? t(1793) : "greater than ") + i[t(1706)] : i[t(1650)] === t(1933) ? a = t(448) + (i[t(1593)] ? "exactly equal to " : i.inclusive ? "greater than or equal to " : t(1566)) + i[t(1706)] : i[t(1650)] === "date" ? a = t(1333) + (i[t(1593)] ? t(764) : i.inclusive ? t(1793) : t(1566)) + new Date(Number(i[t(1706)])) : a = t(881);
      break;
    case W[t(2306)]:
      i[t(1650)] === t(1457) ? a = t(501) + (i[t(1593)] ? t(526) : i[t(707)] ? t(437) : t(2356)) + " " + i[t(1618)] + t(1329) : i.type === "string" ? a = t(1877) + (i[t(1593)] ? "exactly" : i[t(707)] ? t(437) : t(799)) + " " + i.maximum + t(588) : i.type === t(986) ? a = t(448) + (i[t(1593)] ? "exactly" : i.inclusive ? t(699) : "less than") + " " + i[t(1618)] : i[t(1650)] === "bigint" ? a = t(1578) + (i[t(1593)] ? t(526) : i.inclusive ? t(699) : t(2356)) + " " + i[t(1618)] : i[t(1650)] === t(555) ? a = t(1333) + (i[t(1593)] ? t(526) : i[t(707)] ? "smaller than or equal to" : "smaller than") + " " + new Date(Number(i[t(1618)])) : a = t(881);
      break;
    case W[t(2162)]:
      a = t(881);
      break;
    case W.invalid_intersection_types:
      a = "Intersection results could not be merged";
      break;
    case W.not_multiple_of:
      a = "Number must be a multiple of " + i[t(1766)];
      break;
    case W[t(2454)]:
      a = "Number must be finite";
      break;
    default:
      a = x[t(1422)], I0[t(2368)](i);
  }
  return { message: a };
};
let Tn = At;
function Dn() {
  return Tn;
}
const jn = (i) => {
  var x = s;
  const { data: t, path: a, errorMaps: e, issueData: r } = i, n = [...a, ...r.path || []], o = { ...r, path: n };
  if (r[x(820)] !== void 0) return { ...r, path: n, message: r[x(820)] };
  let c = "";
  const f = e[x(2142)]((u) => !!u)[x(1323)]()[x(1785)]();
  for (const u of f)
    c = u(o, { data: t, defaultError: c })[x(820)];
  return { ...r, path: n, message: c };
};
function Y(i, x) {
  var t = s;
  const a = Dn(), e = jn({ issueData: x, data: i[t(1513)], path: i[t(1106)], errorMaps: [i[t(2196)].contextualErrorMap, i[t(755)], a, a === At ? void 0 : At][t(2142)]((r) => !!r) });
  i.common[t(1784)][t(482)](e);
}
class ee {
  constructor() {
    var x = s;
    this.value = x(2154);
  }
  [s(996)]() {
    var x = s;
    this[x(1547)] === x(2154) && (this[x(1547)] = x(996));
  }
  [s(856)]() {
    var x = s;
    this[x(1547)] !== x(627) && (this[x(1547)] = x(627));
  }
  static mergeArray(x, t) {
    var a = s;
    const e = [];
    for (const r of t) {
      if (r[a(951)] === a(627)) return l0;
      r[a(951)] === "dirty" && x[a(996)](), e[a(482)](r[a(1547)]);
    }
    return { status: x.value, value: e };
  }
  static async [s(1490)](x, t) {
    var a = s;
    const e = [];
    for (const r of t) {
      const n = await r[a(1180)], o = await r.value;
      e[a(482)]({ key: n, value: o });
    }
    return ee.mergeObjectSync(x, e);
  }
  static [s(2214)](x, t) {
    var a = s;
    const e = {};
    for (const r of t) {
      const { key: n, value: o } = r;
      if (n[a(951)] === "aborted" || o[a(951)] === a(627)) return l0;
      n[a(951)] === a(996) && x.dirty(), o[a(951)] === "dirty" && x[a(996)](), n[a(1547)] !== a(2239) && (typeof o.value !== a(2220) || r.alwaysSet) && (e[n[a(1547)]] = o.value);
    }
    return { status: x.value, value: e };
  }
}
const l0 = Object[s(542)]({ status: s(627) }), Ge = (i) => ({ status: s(996), value: i }), re = (i) => ({ status: "valid", value: i }), gr = (i) => i.status === s(627), yr = (i) => i[s(951)] === s(996), Ue = (i) => i[s(951)] === "valid", vx = (i) => typeof Promise !== s(2220) && i instanceof Promise;
var x0;
(function(i) {
  var x = s;
  i[x(1046)] = (t) => typeof t === x(2203) ? { message: t } : t || {}, i[x(506)] = (t) => typeof t === x(2203) ? t : t == null ? void 0 : t[x(820)];
})(x0 || (x0 = {}));
class he {
  constructor(x, t, a, e) {
    var r = s;
    this[r(1683)] = [], this[r(1080)] = x, this[r(1513)] = t, this[r(1690)] = a, this[r(1389)] = e;
  }
  get [s(1106)]() {
    var x = s;
    return !this[x(1683)].length && (Array[x(1842)](this[x(1389)]) ? this._cachedPath[x(482)](...this[x(1690)], ...this[x(1389)]) : this[x(1683)][x(482)](...this[x(1690)], this._key)), this[x(1683)];
  }
}
const wr = (i, x) => {
  var t = s;
  if (Ue(x)) return { success: !0, data: x[t(1547)] };
  if (!i.common[t(1784)][t(1013)]) throw new Error(t(845));
  return { success: !1, get error() {
    var a = t;
    if (this[a(1737)]) return this._error;
    const e = new Se(i[a(2196)][a(1784)]);
    return this[a(1737)] = e, this[a(1737)];
  } };
};
function b0(i) {
  var x = s;
  if (!i) return {};
  const { errorMap: t, invalid_type_error: a, required_error: e, description: r } = i;
  if (t && (a || e)) throw new Error(x(1296));
  return t ? { errorMap: t, description: r } : { errorMap: (o, c) => {
    var f = x;
    const { message: u } = i;
    return o[f(2440)] === f(1832) ? { message: u ?? c[f(1422)] } : typeof c[f(1513)] === f(2220) ? { message: u ?? e ?? c.defaultError } : o[f(2440)] !== f(438) ? { message: c.defaultError } : { message: u ?? a ?? c[f(1422)] };
  }, description: r };
}
class E0 {
  get description() {
    var x = s;
    return this._def[x(568)];
  }
  [s(2169)](x) {
    var t = s;
    return Pe(x[t(1513)]);
  }
  _getOrReturnCtx(x, t) {
    var a = s;
    return t || { common: x[a(1080)].common, data: x[a(1513)], parsedType: Pe(x[a(1513)]), schemaErrorMap: this[a(1123)][a(1963)], path: x.path, parent: x[a(1080)] };
  }
  _processInputParams(x) {
    var t = s;
    return { status: new ee(), ctx: { common: x[t(1080)][t(2196)], data: x[t(1513)], parsedType: Pe(x[t(1513)]), schemaErrorMap: this._def[t(1963)], path: x[t(1106)], parent: x.parent } };
  }
  [s(1495)](x) {
    var t = s;
    const a = this[t(607)](x);
    if (vx(a)) throw new Error("Synchronous parse encountered promise.");
    return a;
  }
  [s(1131)](x) {
    var t = s;
    const a = this._parse(x);
    return Promise[t(1674)](a);
  }
  [s(1503)](x, t) {
    var a = s;
    const e = this[a(1088)](x, t);
    if (e[a(675)]) return e[a(1513)];
    throw e[a(1316)];
  }
  [s(1088)](x, t) {
    var a = s;
    const e = { common: { issues: [], async: (t == null ? void 0 : t[a(1279)]) ?? !1, contextualErrorMap: t == null ? void 0 : t[a(1963)] }, path: (t == null ? void 0 : t[a(1106)]) || [], schemaErrorMap: this[a(1123)][a(1963)], parent: null, data: x, parsedType: Pe(x) }, r = this[a(1495)]({ data: x, path: e[a(1106)], parent: e });
    return wr(e, r);
  }
  [s(1154)](x) {
    var e, r;
    var t = s;
    const a = { common: { issues: [], async: !!this[t(472)][t(1279)] }, path: [], schemaErrorMap: this[t(1123)][t(1963)], parent: null, data: x, parsedType: Pe(x) };
    if (!this[t(472)][t(1279)]) try {
      const n = this[t(1495)]({ data: x, path: [], parent: a });
      return Ue(n) ? { value: n[t(1547)] } : { issues: a[t(2196)].issues };
    } catch (n) {
      (r = (e = n == null ? void 0 : n.message) == null ? void 0 : e[t(1698)]()) != null && r[t(1586)](t(452)) && (this["~standard"][t(1279)] = !0), a.common = { issues: [], async: !0 };
    }
    return this._parseAsync({ data: x, path: [], parent: a })[t(2480)]((n) => Ue(n) ? { value: n[t(1547)] } : { issues: a[t(2196)][t(1784)] });
  }
  async [s(2043)](x, t) {
    var a = s;
    const e = await this[a(867)](x, t);
    if (e.success) return e[a(1513)];
    throw e[a(1316)];
  }
  async [s(867)](x, t) {
    var a = s;
    const e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[a(1963)], async: !0 }, path: (t == null ? void 0 : t[a(1106)]) || [], schemaErrorMap: this[a(1123)][a(1963)], parent: null, data: x, parsedType: Pe(x) }, r = this[a(607)]({ data: x, path: e.path, parent: e }), n = await (vx(r) ? r : Promise[a(1674)](r));
    return wr(e, n);
  }
  refine(x, t) {
    var a = s;
    const e = (r) => {
      var n = B;
      return typeof t === n(2203) || typeof t > "u" ? { message: t } : typeof t === n(1806) ? t(r) : t;
    };
    return this[a(1420)]((r, n) => {
      var o = a;
      const c = x(r), f = () => n[o(2216)]({ code: W[o(2162)], ...e(r) });
      return typeof Promise !== o(2220) && c instanceof Promise ? c[o(2480)]((u) => u ? !0 : (f(), !1)) : c ? !0 : (f(), !1);
    });
  }
  refinement(x, t) {
    var a = s;
    return this[a(1420)]((e, r) => {
      var n = a;
      return x(e) ? !0 : (r[n(2216)](typeof t === n(1806) ? t(e, r) : t), !1);
    });
  }
  [s(1420)](x) {
    var t = s;
    return new qe({ schema: this, typeName: h0.ZodEffects, effect: { type: t(721), refinement: x } });
  }
  [s(948)](x) {
    var t = s;
    return this[t(1420)](x);
  }
  constructor(x) {
    var t = s;
    this.spa = this.safeParseAsync, this._def = x, this[t(1503)] = this.parse[t(1646)](this), this[t(1088)] = this[t(1088)][t(1646)](this), this[t(2043)] = this[t(2043)].bind(this), this.safeParseAsync = this[t(867)][t(1646)](this), this[t(645)] = this[t(645)][t(1646)](this), this[t(1516)] = this.refine[t(1646)](this), this[t(721)] = this[t(721)][t(1646)](this), this[t(948)] = this.superRefine[t(1646)](this), this[t(2247)] = this[t(2247)][t(1646)](this), this[t(495)] = this[t(495)].bind(this), this[t(1298)] = this.nullish[t(1646)](this), this.array = this[t(1457)].bind(this), this[t(710)] = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this[t(1259)].bind(this), this[t(2076)] = this[t(2076)][t(1646)](this), this.default = this.default[t(1646)](this), this[t(981)] = this[t(981)].bind(this), this.describe = this.describe[t(1646)](this), this[t(1855)] = this[t(1855)].bind(this), this[t(1940)] = this[t(1940)][t(1646)](this), this[t(2279)] = this.isNullable.bind(this), this[t(1867)] = this[t(1867)][t(1646)](this), this[t(472)] = { version: 1, vendor: t(671), validate: (a) => this[t(1154)](a) };
  }
  [s(2247)]() {
    return we.create(this, this._def);
  }
  nullable() {
    var x = s;
    return Me[x(740)](this, this[x(1123)]);
  }
  nullish() {
    var x = s;
    return this[x(495)]().optional();
  }
  [s(1457)]() {
    var x = s;
    return le[x(740)](this);
  }
  [s(710)]() {
    var x = s;
    return Sx[x(740)](this, this[x(1123)]);
  }
  or(x) {
    var t = s;
    return bx[t(740)]([this, x], this._def);
  }
  [s(536)](x) {
    var t = s;
    return gx[t(740)](this, x, this[t(1123)]);
  }
  [s(1259)](x) {
    var t = s;
    return new qe({ ...b0(this[t(1123)]), schema: this, typeName: h0.ZodEffects, effect: { type: t(1259), transform: x } });
  }
  default(x) {
    var t = s;
    const a = typeof x === t(1806) ? x : () => x;
    return new Ex({ ...b0(this[t(1123)]), innerType: this, defaultValue: a, typeName: h0[t(635)] });
  }
  [s(2076)]() {
    var x = s;
    return new Ds({ typeName: h0[x(1572)], type: this, ...b0(this[x(1123)]) });
  }
  [s(981)](x) {
    var t = s;
    const a = typeof x == "function" ? x : () => x;
    return new Px({ ...b0(this[t(1123)]), innerType: this, catchValue: a, typeName: h0[t(911)] });
  }
  [s(2365)](x) {
    var t = s;
    const a = this.constructor;
    return new a({ ...this[t(1123)], description: x });
  }
  pipe(x) {
    var t = s;
    return Xt[t(740)](this, x);
  }
  readonly() {
    var x = s;
    return kx[x(740)](this);
  }
  [s(1867)]() {
    var x = s;
    return this[x(1088)](void 0)[x(675)];
  }
  [s(2279)]() {
    var x = s;
    return this[x(1088)](null).success;
  }
}
const Mn = /^c[^\s-]{8,}$/i, $n = /^[0-9a-z]+$/, Ln = /^[0-9A-HJKMNP-TV-Z]{26}$/i, zn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Hn = /^[a-z0-9_-]{21}$/i, Vn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Un = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Zn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Bn = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Lx;
const Kn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Wn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Jn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Qn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Gn = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Xn = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, qs = s(1156), Yn = new RegExp("^" + qs + "$");
function As(i) {
  var x = s;
  let t = x(1563);
  i[x(547)] ? t = t + x(1398) + i[x(547)] + "}" : i[x(547)] == null && (t = t + x(1071));
  const a = i[x(547)] ? "+" : "?";
  return x(1266) + t + ")" + a;
}
function _n(i) {
  return new RegExp("^" + As(i) + "$");
}
function ei(i) {
  var x = s;
  let t = qs + "T" + As(i);
  const a = [];
  return a[x(482)](i.local ? "Z?" : "Z"), i[x(714)] && a[x(482)](x(483)), t = t + "(" + a.join("|") + ")", new RegExp("^" + t + "$");
}
function xi(i, x) {
  var t = s;
  return !!((x === "v4" || !x) && Kn[t(857)](i) || (x === "v6" || !x) && Jn[t(857)](i));
}
function ti(i, x) {
  var t = s;
  if (!Vn[t(857)](i)) return !1;
  try {
    const [a] = i[t(519)](".");
    if (!a) return !1;
    const e = a[t(1081)](/-/g, "+")[t(1081)](/_/g, "/")[t(2130)](a.length + (4 - a[t(1013)] % 4) % 4, "="), r = JSON[t(1503)](atob(e));
    return !(typeof r !== t(570) || r === null || "typ" in r && (r == null ? void 0 : r[t(494)]) !== "JWT" || !r.alg || x && r[t(1343)] !== x);
  } catch {
    return !1;
  }
}
function ri(i, x) {
  var t = s;
  return !!((x === "v4" || !x) && Wn[t(857)](i) || (x === "v6" || !x) && Qn[t(857)](i));
}
class ye extends E0 {
  [s(607)](x) {
    var t = s;
    if (this[t(1123)][t(1189)] && (x.data = String(x[t(1513)])), this[t(2169)](x) !== _[t(2203)]) {
      const n = this[t(1928)](x);
      return Y(n, { code: W.invalid_type, expected: _[t(2203)], received: n.parsedType }), l0;
    }
    const e = new ee();
    let r;
    for (const n of this[t(1123)][t(1637)])
      if (n.kind === t(477)) x[t(1513)][t(1013)] < n[t(1547)] && (r = this[t(1928)](x, r), Y(r, { code: W[t(2035)], minimum: n[t(1547)], type: t(2203), inclusive: !0, exact: !1, message: n.message }), e.dirty());
      else if (n.kind === t(1269)) x.data.length > n[t(1547)] && (r = this._getOrReturnCtx(x, r), Y(r, { code: W.too_big, maximum: n[t(1547)], type: t(2203), inclusive: !0, exact: !1, message: n.message }), e[t(996)]());
      else if (n[t(1642)] === t(1013)) {
        const o = x[t(1513)][t(1013)] > n[t(1547)], c = x[t(1513)][t(1013)] < n[t(1547)];
        (o || c) && (r = this[t(1928)](x, r), o ? Y(r, { code: W[t(2306)], maximum: n[t(1547)], type: t(2203), inclusive: !0, exact: !0, message: n[t(820)] }) : c && Y(r, { code: W.too_small, minimum: n.value, type: t(2203), inclusive: !0, exact: !0, message: n.message }), e[t(996)]());
      } else if (n[t(1642)] === "email") !Zn[t(857)](x[t(1513)]) && (r = this[t(1928)](x, r), Y(r, { validation: t(1534), code: W[t(1410)], message: n.message }), e[t(996)]());
      else if (n[t(1642)] === "emoji") !Lx && (Lx = new RegExp(Bn, "u")), !Lx[t(857)](x[t(1513)]) && (r = this[t(1928)](x, r), Y(r, { validation: t(1076), code: W[t(1410)], message: n[t(820)] }), e[t(996)]());
      else if (n[t(1642)] === t(609)) !zn[t(857)](x[t(1513)]) && (r = this[t(1928)](x, r), Y(r, { validation: t(609), code: W[t(1410)], message: n[t(820)] }), e[t(996)]());
      else if (n.kind === "nanoid") !Hn[t(857)](x.data) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: t(668), code: W.invalid_string, message: n[t(820)] }), e[t(996)]());
      else if (n.kind === "cuid") !Mn.test(x[t(1513)]) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: "cuid", code: W[t(1410)], message: n.message }), e[t(996)]());
      else if (n[t(1642)] === t(1168)) !$n.test(x[t(1513)]) && (r = this[t(1928)](x, r), Y(r, { validation: "cuid2", code: W[t(1410)], message: n[t(820)] }), e.dirty());
      else if (n[t(1642)] === t(1098)) !Ln[t(857)](x[t(1513)]) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: t(1098), code: W[t(1410)], message: n[t(820)] }), e[t(996)]());
      else if (n[t(1642)] === t(1554)) try {
        new URL(x.data);
      } catch {
        r = this[t(1928)](x, r), Y(r, { validation: t(1554), code: W.invalid_string, message: n[t(820)] }), e[t(996)]();
      }
      else
        n[t(1642)] === t(565) ? (n[t(565)][t(1149)] = 0, !n[t(565)][t(857)](x.data) && (r = this[t(1928)](x, r), Y(r, { validation: t(565), code: W.invalid_string, message: n[t(820)] }), e[t(996)]())) : n[t(1642)] === t(1240) ? x[t(1513)] = x[t(1513)][t(1240)]() : n[t(1642)] === t(1586) ? !x[t(1513)][t(1586)](n[t(1547)], n[t(1961)]) && (r = this[t(1928)](x, r), Y(r, { code: W[t(1410)], validation: { includes: n[t(1547)], position: n[t(1961)] }, message: n[t(820)] }), e[t(996)]()) : n[t(1642)] === t(1698) ? x[t(1513)] = x[t(1513)][t(1698)]() : n[t(1642)] === t(1954) ? x[t(1513)] = x[t(1513)][t(1954)]() : n.kind === t(869) ? !x[t(1513)][t(869)](n[t(1547)]) && (r = this._getOrReturnCtx(x, r), Y(r, { code: W[t(1410)], validation: { startsWith: n[t(1547)] }, message: n[t(820)] }), e[t(996)]()) : n[t(1642)] === t(1261) ? !x[t(1513)][t(1261)](n[t(1547)]) && (r = this[t(1928)](x, r), Y(r, { code: W[t(1410)], validation: { endsWith: n[t(1547)] }, message: n[t(820)] }), e[t(996)]()) : n.kind === t(1800) ? !ei(n)[t(857)](x[t(1513)]) && (r = this._getOrReturnCtx(x, r), Y(r, { code: W.invalid_string, validation: t(1800), message: n[t(820)] }), e[t(996)]()) : n.kind === "date" ? !Yn[t(857)](x[t(1513)]) && (r = this[t(1928)](x, r), Y(r, { code: W[t(1410)], validation: t(555), message: n[t(820)] }), e.dirty()) : n.kind === t(946) ? !_n(n)[t(857)](x[t(1513)]) && (r = this[t(1928)](x, r), Y(r, { code: W.invalid_string, validation: t(946), message: n.message }), e[t(996)]()) : n[t(1642)] === t(2461) ? !Un[t(857)](x[t(1513)]) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: t(2461), code: W[t(1410)], message: n[t(820)] }), e[t(996)]()) : n[t(1642)] === "ip" ? !xi(x[t(1513)], n[t(1275)]) && (r = this[t(1928)](x, r), Y(r, { validation: "ip", code: W[t(1410)], message: n[t(820)] }), e[t(996)]()) : n[t(1642)] === t(1353) ? !ti(x.data, n.alg) && (r = this[t(1928)](x, r), Y(r, { validation: t(1353), code: W[t(1410)], message: n[t(820)] }), e[t(996)]()) : n.kind === t(718) ? !ri(x[t(1513)], n[t(1275)]) && (r = this[t(1928)](x, r), Y(r, { validation: "cidr", code: W.invalid_string, message: n[t(820)] }), e[t(996)]()) : n[t(1642)] === "base64" ? !Gn.test(x[t(1513)]) && (r = this[t(1928)](x, r), Y(r, { validation: t(772), code: W[t(1410)], message: n[t(820)] }), e.dirty()) : n[t(1642)] === t(2055) ? !Xn[t(857)](x[t(1513)]) && (r = this[t(1928)](x, r), Y(r, { validation: t(2055), code: W[t(1410)], message: n[t(820)] }), e.dirty()) : I0[t(2368)](n);
    return { status: e[t(1547)], value: x[t(1513)] };
  }
  [s(2116)](x, t, a) {
    var e = s;
    return this.refinement((r) => x[e(857)](r), { validation: t, code: W[e(1410)], ...x0[e(1046)](a) });
  }
  [s(2255)](x) {
    var t = s;
    return new ye({ ...this[t(1123)], checks: [...this[t(1123)][t(1637)], x] });
  }
  [s(1534)](x) {
    var t = s;
    return this[t(2255)]({ kind: t(1534), ...x0[t(1046)](x) });
  }
  url(x) {
    var t = s;
    return this._addCheck({ kind: t(1554), ...x0[t(1046)](x) });
  }
  [s(1076)](x) {
    var t = s;
    return this[t(2255)]({ kind: "emoji", ...x0.errToObj(x) });
  }
  [s(609)](x) {
    var t = s;
    return this[t(2255)]({ kind: t(609), ...x0[t(1046)](x) });
  }
  [s(668)](x) {
    var t = s;
    return this[t(2255)]({ kind: "nanoid", ...x0[t(1046)](x) });
  }
  [s(1112)](x) {
    var t = s;
    return this[t(2255)]({ kind: "cuid", ...x0.errToObj(x) });
  }
  [s(1168)](x) {
    var t = s;
    return this[t(2255)]({ kind: t(1168), ...x0[t(1046)](x) });
  }
  ulid(x) {
    var t = s;
    return this._addCheck({ kind: "ulid", ...x0[t(1046)](x) });
  }
  base64(x) {
    var t = s;
    return this[t(2255)]({ kind: "base64", ...x0[t(1046)](x) });
  }
  base64url(x) {
    var t = s;
    return this[t(2255)]({ kind: "base64url", ...x0[t(1046)](x) });
  }
  [s(1353)](x) {
    var t = s;
    return this[t(2255)]({ kind: t(1353), ...x0[t(1046)](x) });
  }
  ip(x) {
    var t = s;
    return this[t(2255)]({ kind: "ip", ...x0[t(1046)](x) });
  }
  [s(718)](x) {
    var t = s;
    return this[t(2255)]({ kind: t(718), ...x0[t(1046)](x) });
  }
  [s(1800)](x) {
    var t = s;
    return typeof x === t(2203) ? this._addCheck({ kind: t(1800), precision: null, offset: !1, local: !1, message: x }) : this[t(2255)]({ kind: t(1800), precision: typeof (x == null ? void 0 : x[t(547)]) > "u" ? null : x == null ? void 0 : x[t(547)], offset: (x == null ? void 0 : x.offset) ?? !1, local: (x == null ? void 0 : x[t(879)]) ?? !1, ...x0[t(1046)](x == null ? void 0 : x[t(820)]) });
  }
  [s(555)](x) {
    var t = s;
    return this[t(2255)]({ kind: "date", message: x });
  }
  [s(946)](x) {
    var t = s;
    return typeof x === t(2203) ? this[t(2255)]({ kind: "time", precision: null, message: x }) : this[t(2255)]({ kind: t(946), precision: typeof (x == null ? void 0 : x[t(547)]) === t(2220) ? null : x == null ? void 0 : x[t(547)], ...x0.errToObj(x == null ? void 0 : x.message) });
  }
  [s(2461)](x) {
    var t = s;
    return this._addCheck({ kind: t(2461), ...x0[t(1046)](x) });
  }
  [s(565)](x, t) {
    var a = s;
    return this[a(2255)]({ kind: a(565), regex: x, ...x0[a(1046)](t) });
  }
  [s(1586)](x, t) {
    var a = s;
    return this[a(2255)]({ kind: "includes", value: x, position: t == null ? void 0 : t.position, ...x0.errToObj(t == null ? void 0 : t[a(820)]) });
  }
  [s(869)](x, t) {
    var a = s;
    return this._addCheck({ kind: a(869), value: x, ...x0.errToObj(t) });
  }
  [s(1261)](x, t) {
    var a = s;
    return this[a(2255)]({ kind: a(1261), value: x, ...x0[a(1046)](t) });
  }
  [s(477)](x, t) {
    var a = s;
    return this[a(2255)]({ kind: "min", value: x, ...x0.errToObj(t) });
  }
  [s(1269)](x, t) {
    var a = s;
    return this[a(2255)]({ kind: a(1269), value: x, ...x0[a(1046)](t) });
  }
  [s(1013)](x, t) {
    var a = s;
    return this[a(2255)]({ kind: "length", value: x, ...x0[a(1046)](t) });
  }
  [s(643)](x) {
    var t = s;
    return this.min(1, x0[t(1046)](x));
  }
  [s(1240)]() {
    var x = s;
    return new ye({ ...this._def, checks: [...this._def.checks, { kind: x(1240) }] });
  }
  [s(1698)]() {
    var x = s;
    return new ye({ ...this[x(1123)], checks: [...this[x(1123)][x(1637)], { kind: x(1698) }] });
  }
  toUpperCase() {
    var x = s;
    return new ye({ ...this[x(1123)], checks: [...this[x(1123)].checks, { kind: "toUpperCase" }] });
  }
  get [s(1175)]() {
    var x = s;
    return !!this._def[x(1637)][x(1718)]((t) => t[x(1642)] === x(1800));
  }
  get isDate() {
    var x = s;
    return !!this[x(1123)][x(1637)][x(1718)]((t) => t.kind === x(555));
  }
  get [s(1025)]() {
    var x = s;
    return !!this[x(1123)][x(1637)].find((t) => t.kind === x(946));
  }
  get [s(1880)]() {
    var x = s;
    return !!this[x(1123)][x(1637)].find((t) => t.kind === x(2461));
  }
  get [s(952)]() {
    var x = s;
    return !!this[x(1123)][x(1637)][x(1718)]((t) => t[x(1642)] === x(1534));
  }
  get [s(1629)]() {
    var x = s;
    return !!this._def[x(1637)].find((t) => t.kind === x(1554));
  }
  get [s(1431)]() {
    var x = s;
    return !!this._def[x(1637)].find((t) => t[x(1642)] === x(1076));
  }
  get [s(1893)]() {
    var x = s;
    return !!this[x(1123)].checks[x(1718)]((t) => t.kind === x(609));
  }
  get [s(1450)]() {
    var x = s;
    return !!this[x(1123)][x(1637)][x(1718)]((t) => t[x(1642)] === "nanoid");
  }
  get [s(2164)]() {
    var x = s;
    return !!this[x(1123)][x(1637)][x(1718)]((t) => t[x(1642)] === x(1112));
  }
  get isCUID2() {
    var x = s;
    return !!this[x(1123)][x(1637)][x(1718)]((t) => t.kind === "cuid2");
  }
  get [s(652)]() {
    var x = s;
    return !!this[x(1123)][x(1637)].find((t) => t[x(1642)] === x(1098));
  }
  get [s(514)]() {
    var x = s;
    return !!this[x(1123)][x(1637)][x(1718)]((t) => t[x(1642)] === "ip");
  }
  get [s(2292)]() {
    var x = s;
    return !!this[x(1123)][x(1637)][x(1718)]((t) => t.kind === "cidr");
  }
  get [s(1010)]() {
    var x = s;
    return !!this[x(1123)][x(1637)].find((t) => t[x(1642)] === x(772));
  }
  get [s(1960)]() {
    var x = s;
    return !!this[x(1123)][x(1637)][x(1718)]((t) => t[x(1642)] === "base64url");
  }
  get minLength() {
    var x = s;
    let t = null;
    for (const a of this[x(1123)].checks)
      a[x(1642)] === x(477) && (t === null || a.value > t) && (t = a.value);
    return t;
  }
  get maxLength() {
    var x = s;
    let t = null;
    for (const a of this[x(1123)][x(1637)])
      a[x(1642)] === x(1269) && (t === null || a.value < t) && (t = a.value);
    return t;
  }
}
ye[s(740)] = (i) => {
  var x = s;
  return new ye({ checks: [], typeName: h0[x(2223)], coerce: (i == null ? void 0 : i[x(1189)]) ?? !1, ...b0(i) });
};
function ai(i, x) {
  var t = s;
  const a = (i[t(506)]()[t(519)](".")[1] || "").length, e = (x[t(506)]()[t(519)](".")[1] || "").length, r = a > e ? a : e, n = Number[t(2177)](i[t(1262)](r).replace(".", "")), o = Number[t(2177)](x[t(1262)](r)[t(1081)](".", ""));
  return n % o / 10 ** r;
}
class Ze extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(477)] = this.gte, this[x(1269)] = this.lte, this[x(711)] = this.multipleOf;
  }
  [s(607)](x) {
    var t = s;
    if (this[t(1123)][t(1189)] && (x[t(1513)] = Number(x.data)), this._getType(x) !== _[t(986)]) {
      const n = this[t(1928)](x);
      return Y(n, { code: W[t(438)], expected: _.number, received: n[t(463)] }), l0;
    }
    let e;
    const r = new ee();
    for (const n of this[t(1123)][t(1637)])
      n[t(1642)] === t(2140) ? !I0[t(913)](x[t(1513)]) && (e = this._getOrReturnCtx(x, e), Y(e, { code: W.invalid_type, expected: "integer", received: t(800), message: n[t(820)] }), r[t(996)]()) : n[t(1642)] === t(477) ? (n.inclusive ? x[t(1513)] < n[t(1547)] : x[t(1513)] <= n.value) && (e = this[t(1928)](x, e), Y(e, { code: W[t(2035)], minimum: n[t(1547)], type: t(986), inclusive: n[t(707)], exact: !1, message: n[t(820)] }), r.dirty()) : n[t(1642)] === "max" ? (n[t(707)] ? x.data > n[t(1547)] : x.data >= n[t(1547)]) && (e = this[t(1928)](x, e), Y(e, { code: W[t(2306)], maximum: n[t(1547)], type: t(986), inclusive: n[t(707)], exact: !1, message: n[t(820)] }), r.dirty()) : n.kind === "multipleOf" ? ai(x[t(1513)], n.value) !== 0 && (e = this[t(1928)](x, e), Y(e, { code: W.not_multiple_of, multipleOf: n[t(1547)], message: n.message }), r[t(996)]()) : n[t(1642)] === t(1764) ? !Number[t(2273)](x.data) && (e = this[t(1928)](x, e), Y(e, { code: W[t(2454)], message: n[t(820)] }), r[t(996)]()) : I0[t(2368)](n);
    return { status: r[t(1547)], value: x[t(1513)] };
  }
  [s(2364)](x, t) {
    var a = s;
    return this[a(2262)](a(477), x, !0, x0[a(506)](t));
  }
  gt(x, t) {
    var a = s;
    return this.setLimit(a(477), x, !1, x0[a(506)](t));
  }
  [s(2191)](x, t) {
    var a = s;
    return this[a(2262)](a(1269), x, !0, x0[a(506)](t));
  }
  lt(x, t) {
    var a = s;
    return this.setLimit(a(1269), x, !1, x0.toString(t));
  }
  setLimit(x, t, a, e) {
    var r = s;
    return new Ze({ ...this[r(1123)], checks: [...this[r(1123)].checks, { kind: x, value: t, inclusive: a, message: x0.toString(e) }] });
  }
  [s(2255)](x) {
    var t = s;
    return new Ze({ ...this[t(1123)], checks: [...this[t(1123)][t(1637)], x] });
  }
  int(x) {
    var t = s;
    return this[t(2255)]({ kind: t(2140), message: x0[t(506)](x) });
  }
  positive(x) {
    var t = s;
    return this[t(2255)]({ kind: t(477), value: 0, inclusive: !1, message: x0[t(506)](x) });
  }
  [s(2199)](x) {
    var t = s;
    return this._addCheck({ kind: t(1269), value: 0, inclusive: !1, message: x0[t(506)](x) });
  }
  [s(2272)](x) {
    var t = s;
    return this[t(2255)]({ kind: t(1269), value: 0, inclusive: !0, message: x0.toString(x) });
  }
  [s(1402)](x) {
    var t = s;
    return this._addCheck({ kind: t(477), value: 0, inclusive: !0, message: x0[t(506)](x) });
  }
  [s(1766)](x, t) {
    var a = s;
    return this._addCheck({ kind: a(1766), value: x, message: x0[a(506)](t) });
  }
  [s(1764)](x) {
    var t = s;
    return this[t(2255)]({ kind: t(1764), message: x0.toString(x) });
  }
  [s(644)](x) {
    var t = s;
    return this._addCheck({ kind: "min", inclusive: !0, value: Number.MIN_SAFE_INTEGER, message: x0[t(506)](x) })[t(2255)]({ kind: t(1269), inclusive: !0, value: Number[t(1304)], message: x0.toString(x) });
  }
  get [s(2271)]() {
    var x = s;
    let t = null;
    for (const a of this[x(1123)][x(1637)])
      a[x(1642)] === x(477) && (t === null || a[x(1547)] > t) && (t = a[x(1547)]);
    return t;
  }
  get maxValue() {
    var x = s;
    let t = null;
    for (const a of this[x(1123)][x(1637)])
      a[x(1642)] === x(1269) && (t === null || a[x(1547)] < t) && (t = a[x(1547)]);
    return t;
  }
  get [s(771)]() {
    var x = s;
    return !!this[x(1123)][x(1637)][x(1718)]((t) => t.kind === x(2140) || t[x(1642)] === x(1766) && I0[x(913)](t[x(1547)]));
  }
  get [s(2273)]() {
    var x = s;
    let t = null, a = null;
    for (const e of this._def[x(1637)]) {
      if (e[x(1642)] === x(1764) || e[x(1642)] === "int" || e.kind === x(1766)) return !0;
      e.kind === "min" ? (a === null || e[x(1547)] > a) && (a = e.value) : e[x(1642)] === x(1269) && (t === null || e[x(1547)] < t) && (t = e[x(1547)]);
    }
    return Number[x(2273)](a) && Number[x(2273)](t);
  }
}
Ze.create = (i) => new Ze({ checks: [], typeName: h0.ZodNumber, coerce: (i == null ? void 0 : i.coerce) || !1, ...b0(i) });
class xx extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this.min = this[x(2364)], this[x(1269)] = this[x(2191)];
  }
  _parse(x) {
    var t = s;
    if (this._def[t(1189)]) try {
      x.data = BigInt(x[t(1513)]);
    } catch {
      return this[t(1396)](x);
    }
    if (this._getType(x) !== _.bigint) return this[t(1396)](x);
    let e;
    const r = new ee();
    for (const n of this._def[t(1637)])
      n[t(1642)] === t(477) ? (n[t(707)] ? x[t(1513)] < n[t(1547)] : x[t(1513)] <= n[t(1547)]) && (e = this[t(1928)](x, e), Y(e, { code: W.too_small, type: t(1933), minimum: n.value, inclusive: n[t(707)], message: n[t(820)] }), r[t(996)]()) : n[t(1642)] === t(1269) ? (n[t(707)] ? x[t(1513)] > n[t(1547)] : x.data >= n.value) && (e = this._getOrReturnCtx(x, e), Y(e, { code: W[t(2306)], type: t(1933), maximum: n[t(1547)], inclusive: n[t(707)], message: n[t(820)] }), r[t(996)]()) : n.kind === "multipleOf" ? x[t(1513)] % n[t(1547)] !== BigInt(0) && (e = this[t(1928)](x, e), Y(e, { code: W.not_multiple_of, multipleOf: n[t(1547)], message: n.message }), r.dirty()) : I0[t(2368)](n);
    return { status: r[t(1547)], value: x.data };
  }
  _getInvalidInput(x) {
    var t = s;
    const a = this[t(1928)](x);
    return Y(a, { code: W.invalid_type, expected: _[t(1933)], received: a[t(463)] }), l0;
  }
  [s(2364)](x, t) {
    var a = s;
    return this[a(2262)]("min", x, !0, x0.toString(t));
  }
  gt(x, t) {
    var a = s;
    return this[a(2262)](a(477), x, !1, x0.toString(t));
  }
  lte(x, t) {
    var a = s;
    return this[a(2262)](a(1269), x, !0, x0.toString(t));
  }
  lt(x, t) {
    var a = s;
    return this[a(2262)](a(1269), x, !1, x0.toString(t));
  }
  [s(2262)](x, t, a, e) {
    var r = s;
    return new xx({ ...this[r(1123)], checks: [...this[r(1123)][r(1637)], { kind: x, value: t, inclusive: a, message: x0.toString(e) }] });
  }
  [s(2255)](x) {
    var t = s;
    return new xx({ ...this[t(1123)], checks: [...this._def[t(1637)], x] });
  }
  [s(1681)](x) {
    var t = s;
    return this._addCheck({ kind: t(477), value: BigInt(0), inclusive: !1, message: x0[t(506)](x) });
  }
  [s(2199)](x) {
    var t = s;
    return this[t(2255)]({ kind: t(1269), value: BigInt(0), inclusive: !1, message: x0[t(506)](x) });
  }
  [s(2272)](x) {
    var t = s;
    return this[t(2255)]({ kind: t(1269), value: BigInt(0), inclusive: !0, message: x0[t(506)](x) });
  }
  [s(1402)](x) {
    var t = s;
    return this[t(2255)]({ kind: "min", value: BigInt(0), inclusive: !0, message: x0[t(506)](x) });
  }
  [s(1766)](x, t) {
    var a = s;
    return this._addCheck({ kind: "multipleOf", value: x, message: x0[a(506)](t) });
  }
  get [s(2271)]() {
    var x = s;
    let t = null;
    for (const a of this[x(1123)].checks)
      a[x(1642)] === x(477) && (t === null || a[x(1547)] > t) && (t = a[x(1547)]);
    return t;
  }
  get [s(579)]() {
    var x = s;
    let t = null;
    for (const a of this[x(1123)].checks)
      a.kind === x(1269) && (t === null || a[x(1547)] < t) && (t = a.value);
    return t;
  }
}
xx.create = (i) => {
  var x = s;
  return new xx({ checks: [], typeName: h0[x(2422)], coerce: (i == null ? void 0 : i[x(1189)]) ?? !1, ...b0(i) });
};
class Tt extends E0 {
  _parse(x) {
    var t = s;
    if (this[t(1123)][t(1189)] && (x.data = !!x.data), this[t(2169)](x) !== _.boolean) {
      const e = this[t(1928)](x);
      return Y(e, { code: W[t(438)], expected: _[t(741)], received: e[t(463)] }), l0;
    }
    return re(x[t(1513)]);
  }
}
Tt[s(740)] = (i) => {
  var x = s;
  return new Tt({ typeName: h0[x(844)], coerce: (i == null ? void 0 : i[x(1189)]) || !1, ...b0(i) });
};
class mx extends E0 {
  [s(607)](x) {
    var t = s;
    if (this[t(1123)].coerce && (x[t(1513)] = new Date(x[t(1513)])), this._getType(x) !== _[t(555)]) {
      const n = this[t(1928)](x);
      return Y(n, { code: W[t(438)], expected: _[t(555)], received: n.parsedType }), l0;
    }
    if (Number[t(1042)](x[t(1513)][t(1756)]())) {
      const n = this[t(1928)](x);
      return Y(n, { code: W[t(703)] }), l0;
    }
    const e = new ee();
    let r;
    for (const n of this[t(1123)][t(1637)])
      n[t(1642)] === "min" ? x[t(1513)][t(1756)]() < n[t(1547)] && (r = this._getOrReturnCtx(x, r), Y(r, { code: W[t(2035)], message: n[t(820)], inclusive: !0, exact: !1, minimum: n.value, type: t(555) }), e.dirty()) : n.kind === t(1269) ? x.data.getTime() > n[t(1547)] && (r = this[t(1928)](x, r), Y(r, { code: W[t(2306)], message: n.message, inclusive: !0, exact: !1, maximum: n.value, type: t(555) }), e[t(996)]()) : I0[t(2368)](n);
    return { status: e[t(1547)], value: new Date(x.data[t(1756)]()) };
  }
  [s(2255)](x) {
    var t = s;
    return new mx({ ...this._def, checks: [...this[t(1123)].checks, x] });
  }
  [s(477)](x, t) {
    var a = s;
    return this[a(2255)]({ kind: "min", value: x[a(1756)](), message: x0[a(506)](t) });
  }
  [s(1269)](x, t) {
    var a = s;
    return this[a(2255)]({ kind: "max", value: x[a(1756)](), message: x0[a(506)](t) });
  }
  get minDate() {
    var x = s;
    let t = null;
    for (const a of this._def.checks)
      a[x(1642)] === "min" && (t === null || a[x(1547)] > t) && (t = a[x(1547)]);
    return t != null ? new Date(t) : null;
  }
  get [s(2352)]() {
    var x = s;
    let t = null;
    for (const a of this[x(1123)].checks)
      a[x(1642)] === "max" && (t === null || a[x(1547)] < t) && (t = a[x(1547)]);
    return t != null ? new Date(t) : null;
  }
}
mx[s(740)] = (i) => {
  var x = s;
  return new mx({ checks: [], coerce: (i == null ? void 0 : i[x(1189)]) || !1, typeName: h0[x(1664)], ...b0(i) });
};
class Sr extends E0 {
  [s(607)](x) {
    var t = s;
    if (this._getType(x) !== _[t(862)]) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: W[t(438)], expected: _[t(862)], received: e.parsedType }), l0;
    }
    return re(x[t(1513)]);
  }
}
Sr[s(740)] = (i) => new Sr({ typeName: h0.ZodSymbol, ...b0(i) });
class Dt extends E0 {
  [s(607)](x) {
    var t = s;
    if (this[t(2169)](x) !== _[t(2220)]) {
      const e = this[t(1928)](x);
      return Y(e, { code: W.invalid_type, expected: _[t(2220)], received: e.parsedType }), l0;
    }
    return re(x.data);
  }
}
Dt[s(740)] = (i) => {
  var x = s;
  return new Dt({ typeName: h0[x(1334)], ...b0(i) });
};
class jt extends E0 {
  [s(607)](x) {
    var t = s;
    if (this._getType(x) !== _[t(1898)]) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: W.invalid_type, expected: _[t(1898)], received: e[t(463)] }), l0;
    }
    return re(x[t(1513)]);
  }
}
function B(i, x) {
  var t = Cx();
  return B = function(a, e) {
    a = a - 427;
    var r = t[a];
    return r;
  }, B(i, x);
}
jt[s(740)] = (i) => {
  var x = s;
  return new jt({ typeName: h0[x(904)], ...b0(i) });
};
class Mt extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(2291)] = !0;
  }
  _parse(x) {
    var t = s;
    return re(x[t(1513)]);
  }
}
Mt.create = (i) => {
  var x = s;
  return new Mt({ typeName: h0[x(1705)], ...b0(i) });
};
class $t extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(1721)] = !0;
  }
  [s(607)](x) {
    var t = s;
    return re(x[t(1513)]);
  }
}
$t[s(740)] = (i) => {
  var x = s;
  return new $t({ typeName: h0[x(2339)], ...b0(i) });
};
class ke extends E0 {
  _parse(x) {
    var t = s;
    const a = this[t(1928)](x);
    return Y(a, { code: W[t(438)], expected: _[t(2259)], received: a.parsedType }), l0;
  }
}
ke.create = (i) => new ke({ typeName: h0.ZodNever, ...b0(i) });
class Er extends E0 {
  [s(607)](x) {
    var t = s;
    if (this[t(2169)](x) !== _[t(2220)]) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: W[t(438)], expected: _.void, received: e.parsedType }), l0;
    }
    return re(x[t(1513)]);
  }
}
Er[s(740)] = (i) => {
  var x = s;
  return new Er({ typeName: h0[x(878)], ...b0(i) });
};
class le extends E0 {
  [s(607)](x) {
    var t = s;
    const { ctx: a, status: e } = this[t(2238)](x), r = this._def;
    if (a[t(463)] !== _[t(1457)]) return Y(a, { code: W[t(438)], expected: _[t(1457)], received: a[t(463)] }), l0;
    if (r[t(2362)] !== null) {
      const o = a[t(1513)].length > r[t(2362)][t(1547)], c = a[t(1513)][t(1013)] < r[t(2362)][t(1547)];
      (o || c) && (Y(a, { code: o ? W[t(2306)] : W[t(2035)], minimum: c ? r.exactLength.value : void 0, maximum: o ? r[t(2362)][t(1547)] : void 0, type: t(1457), inclusive: !0, exact: !0, message: r[t(2362)][t(820)] }), e.dirty());
    }
    if (r.minLength !== null && a[t(1513)].length < r[t(954)][t(1547)] && (Y(a, { code: W.too_small, minimum: r[t(954)][t(1547)], type: "array", inclusive: !0, exact: !1, message: r[t(954)].message }), e[t(996)]()), r.maxLength !== null && a[t(1513)][t(1013)] > r[t(1585)][t(1547)] && (Y(a, { code: W[t(2306)], maximum: r[t(1585)].value, type: t(1457), inclusive: !0, exact: !1, message: r[t(1585)][t(820)] }), e[t(996)]()), a.common.async) return Promise[t(1878)]([...a[t(1513)]][t(2299)]((o, c) => {
      var f = t;
      return r.type[f(1131)](new he(a, o, a[f(1106)], c));
    })).then((o) => ee.mergeArray(e, o));
    const n = [...a[t(1513)]][t(2299)]((o, c) => {
      var f = t;
      return r[f(1650)][f(1495)](new he(a, o, a[f(1106)], c));
    });
    return ee[t(1482)](e, n);
  }
  get element() {
    var x = s;
    return this[x(1123)][x(1650)];
  }
  [s(477)](x, t) {
    return new le({ ...this._def, minLength: { value: x, message: x0.toString(t) } });
  }
  [s(1269)](x, t) {
    var a = s;
    return new le({ ...this[a(1123)], maxLength: { value: x, message: x0.toString(t) } });
  }
  [s(1013)](x, t) {
    var a = s;
    return new le({ ...this[a(1123)], exactLength: { value: x, message: x0[a(506)](t) } });
  }
  [s(643)](x) {
    var t = s;
    return this[t(477)](1, x);
  }
}
le[s(740)] = (i, x) => {
  var t = s;
  return new le({ type: i, minLength: null, maxLength: null, exactLength: null, typeName: h0[t(1211)], ...b0(x) });
};
function Ve(i) {
  var x = s;
  if (i instanceof B0) {
    const t = {};
    for (const a in i[x(1465)]) {
      const e = i[x(1465)][a];
      t[a] = we.create(Ve(e));
    }
    return new B0({ ...i._def, shape: () => t });
  } else
    return i instanceof le ? new le({ ...i[x(1123)], type: Ve(i.element) }) : i instanceof we ? we.create(Ve(i[x(1361)]())) : i instanceof Me ? Me[x(740)](Ve(i.unwrap())) : i instanceof De ? De[x(740)](i.items[x(2299)]((t) => Ve(t))) : i;
}
class B0 extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(1753)] = null, this[x(2482)] = this[x(2302)], this.augment = this[x(705)];
  }
  [s(1869)]() {
    var x = s;
    if (this[x(1753)] !== null) return this[x(1753)];
    const t = this[x(1123)][x(1465)](), a = I0[x(1011)](t);
    return this[x(1753)] = { shape: t, keys: a }, this[x(1753)];
  }
  _parse(x) {
    var t = s;
    if (this[t(2169)](x) !== _[t(570)]) {
      const u = this._getOrReturnCtx(x);
      return Y(u, { code: W[t(438)], expected: _.object, received: u[t(463)] }), l0;
    }
    const { status: e, ctx: r } = this[t(2238)](x), { shape: n, keys: o } = this[t(1869)](), c = [];
    if (!(this[t(1123)][t(2310)] instanceof ke && this._def[t(1161)] === t(1213))) for (const u in r[t(1513)])
      !o[t(1586)](u) && c[t(482)](u);
    const f = [];
    for (const u of o) {
      const l = n[u], d = r[t(1513)][u];
      f.push({ key: { status: "valid", value: u }, value: l[t(607)](new he(r, d, r.path, u)), alwaysSet: u in r[t(1513)] });
    }
    if (this[t(1123)].catchall instanceof ke) {
      const u = this._def[t(1161)];
      if (u === t(2302)) for (const l of c)
        f.push({ key: { status: "valid", value: l }, value: { status: t(2154), value: r[t(1513)][l] } });
      else if (u === t(1185)) c.length > 0 && (Y(r, { code: W[t(2315)], keys: c }), e[t(996)]());
      else if (u !== t(1213)) throw new Error(t(1091));
    } else {
      const u = this[t(1123)].catchall;
      for (const l of c) {
        const d = r[t(1513)][l];
        f[t(482)]({ key: { status: t(2154), value: l }, value: u._parse(new he(r, d, r[t(1106)], l)), alwaysSet: l in r[t(1513)] });
      }
    }
    return r[t(2196)].async ? Promise[t(1674)]().then(async () => {
      var u = t;
      const l = [];
      for (const d of f) {
        const v = await d[u(1180)], h = await d[u(1547)];
        l.push({ key: v, value: h, alwaysSet: d.alwaysSet });
      }
      return l;
    }).then((u) => {
      var l = t;
      return ee[l(2214)](e, u);
    }) : ee[t(2214)](e, f);
  }
  get [s(1465)]() {
    var x = s;
    return this[x(1123)][x(1465)]();
  }
  [s(1185)](x) {
    var t = s;
    return x0[t(1046)], new B0({ ...this[t(1123)], unknownKeys: t(1185), ...x !== void 0 ? { errorMap: (a, e) => {
      var o, c;
      var r = t;
      const n = ((c = (o = this[r(1123)])[r(1963)]) == null ? void 0 : c.call(o, a, e)[r(820)]) ?? e.defaultError;
      return a[r(2440)] === "unrecognized_keys" ? { message: x0[r(1046)](x)[r(820)] ?? n } : { message: n };
    } } : {} });
  }
  strip() {
    var x = s;
    return new B0({ ...this[x(1123)], unknownKeys: "strip" });
  }
  passthrough() {
    var x = s;
    return new B0({ ...this[x(1123)], unknownKeys: x(2302) });
  }
  [s(705)](x) {
    var t = s;
    return new B0({ ...this[t(1123)], shape: () => ({ ...this[t(1123)][t(1465)](), ...x }) });
  }
  merge(x) {
    var t = s;
    return new B0({ unknownKeys: x[t(1123)][t(1161)], catchall: x[t(1123)][t(2310)], shape: () => ({ ...this[t(1123)][t(1465)](), ...x[t(1123)].shape() }), typeName: h0[t(626)] });
  }
  setKey(x, t) {
    var a = s;
    return this[a(955)]({ [x]: t });
  }
  [s(2310)](x) {
    var t = s;
    return new B0({ ...this[t(1123)], catchall: x });
  }
  [s(1831)](x) {
    var t = s;
    const a = {};
    for (const e of I0[t(1011)](x))
      x[e] && this[t(1465)][e] && (a[e] = this[t(1465)][e]);
    return new B0({ ...this[t(1123)], shape: () => a });
  }
  [s(2018)](x) {
    var t = s;
    const a = {};
    for (const e of I0[t(1011)](this[t(1465)]))
      !x[e] && (a[e] = this[t(1465)][e]);
    return new B0({ ...this[t(1123)], shape: () => a });
  }
  deepPartial() {
    return Ve(this);
  }
  [s(2153)](x) {
    var t = s;
    const a = {};
    for (const e of I0[t(1011)](this[t(1465)])) {
      const r = this.shape[e];
      x && !x[e] ? a[e] = r : a[e] = r[t(2247)]();
    }
    return new B0({ ...this[t(1123)], shape: () => a });
  }
  [s(1435)](x) {
    var t = s;
    const a = {};
    for (const e of I0[t(1011)](this[t(1465)]))
      if (x && !x[e]) a[e] = this[t(1465)][e];
      else {
        let n = this[t(1465)][e];
        for (; n instanceof we; )
          n = n[t(1123)].innerType;
        a[e] = n;
      }
    return new B0({ ...this._def, shape: () => a });
  }
  [s(1789)]() {
    var x = s;
    return Ts(I0[x(1011)](this[x(1465)]));
  }
}
B0[s(740)] = (i, x) => {
  var t = s;
  return new B0({ shape: () => i, unknownKeys: t(1213), catchall: ke.create(), typeName: h0.ZodObject, ...b0(x) });
}, B0.strictCreate = (i, x) => {
  var t = s;
  return new B0({ shape: () => i, unknownKeys: "strict", catchall: ke[t(740)](), typeName: h0[t(626)], ...b0(x) });
}, B0[s(1977)] = (i, x) => {
  var t = s;
  return new B0({ shape: i, unknownKeys: t(1213), catchall: ke.create(), typeName: h0.ZodObject, ...b0(x) });
};
class bx extends E0 {
  _parse(x) {
    var t = s;
    const { ctx: a } = this[t(2238)](x), e = this[t(1123)][t(942)];
    function r(n) {
      var o = t;
      for (const f of n)
        if (f[o(1802)][o(951)] === o(2154)) return f[o(1802)];
      for (const f of n)
        if (f[o(1802)][o(951)] === o(996)) return a[o(2196)][o(1784)][o(482)](...f[o(1470)][o(2196)][o(1784)]), f[o(1802)];
      const c = n.map((f) => new Se(f[o(1470)].common.issues));
      return Y(a, { code: W.invalid_union, unionErrors: c }), l0;
    }
    if (a[t(2196)][t(1279)]) return Promise[t(1878)](e[t(2299)](async (n) => {
      var o = t;
      const c = { ...a, common: { ...a.common, issues: [] }, parent: null };
      return { result: await n[o(1131)]({ data: a[o(1513)], path: a.path, parent: c }), ctx: c };
    }))[t(2480)](r);
    {
      let n;
      const o = [];
      for (const f of e) {
        const u = { ...a, common: { ...a[t(2196)], issues: [] }, parent: null }, l = f[t(1495)]({ data: a[t(1513)], path: a[t(1106)], parent: u });
        if (l.status === t(2154)) return l;
        l[t(951)] === t(996) && !n && (n = { result: l, ctx: u }), u[t(2196)][t(1784)][t(1013)] && o[t(482)](u.common.issues);
      }
      if (n) return a[t(2196)][t(1784)].push(...n[t(1470)][t(2196)][t(1784)]), n[t(1802)];
      const c = o.map((f) => new Se(f));
      return Y(a, { code: W[t(2278)], unionErrors: c }), l0;
    }
  }
  get [s(942)]() {
    var x = s;
    return this._def[x(942)];
  }
}
bx[s(740)] = (i, x) => {
  var t = s;
  return new bx({ options: i, typeName: h0[t(750)], ...b0(x) });
};
const be = (i) => {
  var x = s;
  return i instanceof zt ? be(i[x(540)]) : i instanceof qe ? be(i[x(2107)]()) : i instanceof wx ? [i[x(1547)]] : i instanceof je ? i[x(942)] : i instanceof Ht ? I0[x(1118)](i[x(909)]) : i instanceof Ex ? be(i[x(1123)][x(2107)]) : i instanceof Dt ? [void 0] : i instanceof jt ? [null] : i instanceof we ? [void 0, ...be(i.unwrap())] : i instanceof Me ? [null, ...be(i[x(1361)]())] : i instanceof Ds ? be(i.unwrap()) : i instanceof kx ? be(i[x(1361)]()) : i instanceof Px ? be(i[x(1123)][x(2107)]) : [];
};
class Gt extends E0 {
  _parse(x) {
    var t = s;
    const { ctx: a } = this[t(2238)](x);
    if (a[t(463)] !== _[t(570)]) return Y(a, { code: W[t(438)], expected: _.object, received: a[t(463)] }), l0;
    const e = this.discriminator, r = a[t(1513)][e], n = this[t(1453)].get(r);
    return n ? a[t(2196)].async ? n[t(1131)]({ data: a[t(1513)], path: a[t(1106)], parent: a }) : n[t(1495)]({ data: a[t(1513)], path: a[t(1106)], parent: a }) : (Y(a, { code: W.invalid_union_discriminator, options: Array[t(431)](this[t(1453)][t(522)]()), path: [e] }), l0);
  }
  get [s(2450)]() {
    var x = s;
    return this[x(1123)][x(2450)];
  }
  get [s(942)]() {
    var x = s;
    return this[x(1123)].options;
  }
  get [s(1453)]() {
    var x = s;
    return this[x(1123)][x(1453)];
  }
  static [s(740)](x, t, a) {
    var e = s;
    const r = /* @__PURE__ */ new Map();
    for (const n of t) {
      const o = be(n.shape[x]);
      if (!o[e(1013)]) throw new Error(e(1242) + x + e(789));
      for (const c of o) {
        if (r[e(2109)](c)) throw new Error("Discriminator property " + String(x) + e(2497) + String(c));
        r[e(1260)](c, n);
      }
    }
    return new Gt({ typeName: h0[e(1206)], discriminator: x, options: t, optionsMap: r, ...b0(a) });
  }
}
function Lt(i, x) {
  var t = s;
  const a = Pe(i), e = Pe(x);
  if (i === x) return { valid: !0, data: i };
  if (a === _.object && e === _[t(570)]) {
    const r = I0[t(1011)](x), n = I0[t(1011)](i).filter((c) => r[t(1280)](c) !== -1), o = { ...i, ...x };
    for (const c of n) {
      const f = Lt(i[c], x[c]);
      if (!f.valid) return { valid: !1 };
      o[c] = f[t(1513)];
    }
    return { valid: !0, data: o };
  } else if (a === _.array && e === _[t(1457)]) {
    if (i[t(1013)] !== x[t(1013)]) return { valid: !1 };
    const r = [];
    for (let n = 0; n < i[t(1013)]; n++) {
      const o = i[n], c = x[n], f = Lt(o, c);
      if (!f[t(2154)]) return { valid: !1 };
      r[t(482)](f.data);
    }
    return { valid: !0, data: r };
  } else return a === _[t(555)] && e === _[t(555)] && +i == +x ? { valid: !0, data: i } : { valid: !1 };
}
class gx extends E0 {
  _parse(x) {
    var t = s;
    const { status: a, ctx: e } = this[t(2238)](x), r = (n, o) => {
      var c = t;
      if (gr(n) || gr(o)) return l0;
      const f = Lt(n[c(1547)], o[c(1547)]);
      return f[c(2154)] ? ((yr(n) || yr(o)) && a[c(996)](), { status: a[c(1547)], value: f[c(1513)] }) : (Y(e, { code: W.invalid_intersection_types }), l0);
    };
    return e[t(2196)][t(1279)] ? Promise[t(1878)]([this[t(1123)].left[t(1131)]({ data: e[t(1513)], path: e[t(1106)], parent: e }), this[t(1123)].right._parseAsync({ data: e.data, path: e[t(1106)], parent: e })]).then(([n, o]) => r(n, o)) : r(this._def[t(1250)][t(1495)]({ data: e.data, path: e[t(1106)], parent: e }), this[t(1123)][t(1713)][t(1495)]({ data: e[t(1513)], path: e.path, parent: e }));
  }
}
gx.create = (i, x, t) => {
  var a = s;
  return new gx({ left: i, right: x, typeName: h0[a(457)], ...b0(t) });
};
class De extends E0 {
  [s(607)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(2238)](x);
    if (e[t(463)] !== _[t(1457)]) return Y(e, { code: W[t(438)], expected: _[t(1457)], received: e[t(463)] }), l0;
    if (e[t(1513)].length < this[t(1123)].items[t(1013)]) return Y(e, { code: W.too_small, minimum: this[t(1123)][t(1040)][t(1013)], inclusive: !0, exact: !1, type: t(1457) }), l0;
    !this[t(1123)].rest && e[t(1513)][t(1013)] > this[t(1123)][t(1040)][t(1013)] && (Y(e, { code: W[t(2306)], maximum: this[t(1123)][t(1040)][t(1013)], inclusive: !0, exact: !1, type: t(1457) }), a[t(996)]());
    const n = [...e[t(1513)]][t(2299)]((o, c) => {
      var f = t;
      const u = this._def[f(1040)][c] || this[f(1123)][f(979)];
      return u ? u[f(607)](new he(e, o, e.path, c)) : null;
    })[t(2142)]((o) => !!o);
    return e[t(2196)][t(1279)] ? Promise[t(1878)](n)[t(2480)]((o) => {
      var c = t;
      return ee[c(1482)](a, o);
    }) : ee[t(1482)](a, n);
  }
  get items() {
    var x = s;
    return this[x(1123)].items;
  }
  [s(979)](x) {
    var t = s;
    return new De({ ...this[t(1123)], rest: x });
  }
}
De[s(740)] = (i, x) => {
  var t = s;
  if (!Array[t(1842)](i)) throw new Error(t(1992));
  return new De({ items: i, typeName: h0.ZodTuple, rest: null, ...b0(x) });
};
class yx extends E0 {
  get [s(1595)]() {
    var x = s;
    return this[x(1123)][x(1135)];
  }
  get [s(1818)]() {
    var x = s;
    return this[x(1123)][x(2392)];
  }
  [s(607)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(2238)](x);
    if (e[t(463)] !== _[t(570)]) return Y(e, { code: W[t(438)], expected: _.object, received: e[t(463)] }), l0;
    const r = [], n = this[t(1123)][t(1135)], o = this[t(1123)][t(2392)];
    for (const c in e[t(1513)])
      r.push({ key: n[t(607)](new he(e, c, e.path, c)), value: o[t(607)](new he(e, e.data[c], e[t(1106)], c)), alwaysSet: c in e.data });
    return e[t(2196)][t(1279)] ? ee[t(1490)](a, r) : ee.mergeObjectSync(a, r);
  }
  get [s(610)]() {
    var x = s;
    return this[x(1123)][x(2392)];
  }
  static [s(740)](x, t, a) {
    var e = s;
    return t instanceof E0 ? new yx({ keyType: x, valueType: t, typeName: h0[e(1809)], ...b0(a) }) : new yx({ keyType: ye.create(), valueType: x, typeName: h0[e(1809)], ...b0(t) });
  }
}
class Pr extends E0 {
  get [s(1595)]() {
    var x = s;
    return this[x(1123)][x(1135)];
  }
  get [s(1818)]() {
    var x = s;
    return this._def[x(2392)];
  }
  [s(607)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(2238)](x);
    if (e[t(463)] !== _[t(2299)]) return Y(e, { code: W[t(438)], expected: _.map, received: e.parsedType }), l0;
    const r = this[t(1123)][t(1135)], n = this[t(1123)].valueType, o = [...e.data[t(1082)]()][t(2299)](([c, f], u) => {
      var l = t;
      return { key: r[l(607)](new he(e, c, e[l(1106)], [u, l(1180)])), value: n[l(607)](new he(e, f, e[l(1106)], [u, l(1547)])) };
    });
    if (e[t(2196)][t(1279)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise.resolve()[t(2480)](async () => {
        var f = t;
        for (const u of o) {
          const l = await u.key, d = await u[f(1547)];
          if (l.status === f(627) || d[f(951)] === f(627)) return l0;
          (l.status === f(996) || d[f(951)] === f(996)) && a[f(996)](), c[f(1260)](l.value, d.value);
        }
        return { status: a[f(1547)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const f of o) {
        const u = f[t(1180)], l = f[t(1547)];
        if (u[t(951)] === t(627) || l[t(951)] === t(627)) return l0;
        (u.status === t(996) || l[t(951)] === "dirty") && a.dirty(), c.set(u[t(1547)], l.value);
      }
      return { status: a.value, value: c };
    }
  }
}
Pr[s(740)] = (i, x, t) => new Pr({ valueType: x, keyType: i, typeName: h0.ZodMap, ...b0(t) });
class tx extends E0 {
  [s(607)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(2238)](x);
    if (e[t(463)] !== _.set) return Y(e, { code: W[t(438)], expected: _[t(1260)], received: e[t(463)] }), l0;
    const r = this[t(1123)];
    r[t(920)] !== null && e.data.size < r[t(920)][t(1547)] && (Y(e, { code: W[t(2035)], minimum: r[t(920)].value, type: "set", inclusive: !0, exact: !1, message: r[t(920)][t(820)] }), a[t(996)]()), r[t(895)] !== null && e.data[t(1388)] > r.maxSize[t(1547)] && (Y(e, { code: W[t(2306)], maximum: r.maxSize[t(1547)], type: t(1260), inclusive: !0, exact: !1, message: r[t(895)][t(820)] }), a[t(996)]());
    const n = this[t(1123)][t(2392)];
    function o(f) {
      var u = t;
      const l = /* @__PURE__ */ new Set();
      for (const d of f) {
        if (d[u(951)] === u(627)) return l0;
        d[u(951)] === u(996) && a[u(996)](), l[u(2293)](d[u(1547)]);
      }
      return { status: a.value, value: l };
    }
    const c = [...e[t(1513)][t(517)]()][t(2299)]((f, u) => n[t(607)](new he(e, f, e[t(1106)], u)));
    return e[t(2196)][t(1279)] ? Promise.all(c)[t(2480)]((f) => o(f)) : o(c);
  }
  [s(477)](x, t) {
    var a = s;
    return new tx({ ...this._def, minSize: { value: x, message: x0[a(506)](t) } });
  }
  [s(1269)](x, t) {
    var a = s;
    return new tx({ ...this[a(1123)], maxSize: { value: x, message: x0.toString(t) } });
  }
  [s(1388)](x, t) {
    var a = s;
    return this[a(477)](x, t)[a(1269)](x, t);
  }
  [s(643)](x) {
    var t = s;
    return this[t(477)](1, x);
  }
}
tx[s(740)] = (i, x) => new tx({ valueType: i, minSize: null, maxSize: null, typeName: h0.ZodSet, ...b0(x) });
class zt extends E0 {
  get [s(540)]() {
    return this._def.getter();
  }
  [s(607)](x) {
    var t = s;
    const { ctx: a } = this[t(2238)](x);
    return this[t(1123)][t(2241)]()._parse({ data: a[t(1513)], path: a.path, parent: a });
  }
}
zt[s(740)] = (i, x) => {
  var t = s;
  return new zt({ getter: i, typeName: h0[t(818)], ...b0(x) });
};
class wx extends E0 {
  [s(607)](x) {
    var t = s;
    if (x[t(1513)] !== this[t(1123)][t(1547)]) {
      const a = this[t(1928)](x);
      return Y(a, { received: a[t(1513)], code: W[t(1012)], expected: this[t(1123)][t(1547)] }), l0;
    }
    return { status: t(2154), value: x[t(1513)] };
  }
  get value() {
    var x = s;
    return this[x(1123)][x(1547)];
  }
}
wx.create = (i, x) => {
  var t = s;
  return new wx({ value: i, typeName: h0[t(1499)], ...b0(x) });
};
function Ts(i, x) {
  return new je({ values: i, typeName: h0.ZodEnum, ...b0(x) });
}
class je extends E0 {
  [s(607)](x) {
    var t = s;
    if (typeof x[t(1513)] !== t(2203)) {
      const a = this._getOrReturnCtx(x), e = this[t(1123)].values;
      return Y(a, { expected: I0[t(1973)](e), received: a[t(463)], code: W.invalid_type }), l0;
    }
    if (!this._cache && (this._cache = new Set(this._def[t(517)])), !this[t(2019)][t(2109)](x[t(1513)])) {
      const a = this._getOrReturnCtx(x), e = this[t(1123)][t(517)];
      return Y(a, { received: a.data, code: W[t(1832)], options: e }), l0;
    }
    return re(x.data);
  }
  get [s(942)]() {
    var x = s;
    return this[x(1123)][x(517)];
  }
  get [s(909)]() {
    var x = s;
    const t = {};
    for (const a of this[x(1123)][x(517)])
      t[a] = a;
    return t;
  }
  get [s(1004)]() {
    var x = s;
    const t = {};
    for (const a of this._def[x(517)])
      t[a] = a;
    return t;
  }
  get [s(1386)]() {
    var x = s;
    const t = {};
    for (const a of this._def[x(517)])
      t[a] = a;
    return t;
  }
  [s(1419)](x, t = this._def) {
    var a = s;
    return je[a(740)](x, { ...this[a(1123)], ...t });
  }
  [s(1114)](x, t = this._def) {
    var a = s;
    return je[a(740)](this[a(942)][a(2142)]((e) => !x[a(1586)](e)), { ...this._def, ...t });
  }
}
je.create = Ts;
class Ht extends E0 {
  [s(607)](x) {
    var t = s;
    const a = I0[t(1244)](this[t(1123)][t(517)]), e = this[t(1928)](x);
    if (e[t(463)] !== _[t(2203)] && e[t(463)] !== _.number) {
      const r = I0[t(1118)](a);
      return Y(e, { expected: I0.joinValues(r), received: e[t(463)], code: W[t(438)] }), l0;
    }
    if (!this._cache && (this[t(2019)] = new Set(I0.getValidEnumValues(this[t(1123)][t(517)]))), !this[t(2019)][t(2109)](x[t(1513)])) {
      const r = I0[t(1118)](a);
      return Y(e, { received: e[t(1513)], code: W[t(1832)], options: r }), l0;
    }
    return re(x[t(1513)]);
  }
  get enum() {
    var x = s;
    return this[x(1123)][x(517)];
  }
}
Ht[s(740)] = (i, x) => {
  var t = s;
  return new Ht({ values: i, typeName: h0[t(1103)], ...b0(x) });
};
class Sx extends E0 {
  unwrap() {
    var x = s;
    return this._def[x(1650)];
  }
  _parse(x) {
    var t = s;
    const { ctx: a } = this[t(2238)](x);
    if (a[t(463)] !== _[t(710)] && a.common[t(1279)] === !1) return Y(a, { code: W[t(438)], expected: _[t(710)], received: a.parsedType }), l0;
    const e = a[t(463)] === _.promise ? a[t(1513)] : Promise[t(1674)](a[t(1513)]);
    return re(e[t(2480)]((r) => {
      var n = t;
      return this[n(1123)].type[n(2043)](r, { path: a.path, errorMap: a[n(2196)][n(586)] });
    }));
  }
}
Sx.create = (i, x) => new Sx({ type: i, typeName: h0.ZodPromise, ...b0(x) });
class qe extends E0 {
  [s(2107)]() {
    var x = s;
    return this._def[x(540)];
  }
  [s(953)]() {
    var x = s;
    return this._def[x(540)]._def[x(860)] === h0[x(747)] ? this[x(1123)].schema[x(953)]() : this[x(1123)].schema;
  }
  _parse(x) {
    var t = s;
    const { status: a, ctx: e } = this[t(2238)](x), r = this[t(1123)].effect || null, n = { addIssue: (o) => {
      var c = t;
      Y(e, o), o.fatal ? a[c(856)]() : a[c(996)]();
    }, get path() {
      var o = t;
      return e[o(1106)];
    } };
    if (n[t(2216)] = n.addIssue[t(1646)](n), r[t(1650)] === t(1942)) {
      const o = r[t(1259)](e.data, n);
      if (e.common[t(1279)]) return Promise.resolve(o)[t(2480)](async (c) => {
        var f = t;
        if (a[f(1547)] === "aborted") return l0;
        const u = await this[f(1123)][f(540)]._parseAsync({ data: c, path: e[f(1106)], parent: e });
        return u[f(951)] === f(627) ? l0 : u.status === f(996) ? Ge(u.value) : a[f(1547)] === "dirty" ? Ge(u[f(1547)]) : u;
      });
      {
        if (a[t(1547)] === "aborted") return l0;
        const c = this._def[t(540)]._parseSync({ data: o, path: e[t(1106)], parent: e });
        return c.status === t(627) ? l0 : c[t(951)] === t(996) || a[t(1547)] === t(996) ? Ge(c.value) : c;
      }
    }
    if (r[t(1650)] === "refinement") {
      const o = (c) => {
        var f = t;
        const u = r.refinement(c, n);
        if (e.common[f(1279)]) return Promise[f(1674)](u);
        if (u instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return c;
      };
      if (e[t(2196)].async === !1) {
        const c = this[t(1123)].schema._parseSync({ data: e.data, path: e[t(1106)], parent: e });
        return c[t(951)] === "aborted" ? l0 : (c[t(951)] === t(996) && a.dirty(), o(c.value), { status: a[t(1547)], value: c[t(1547)] });
      } else return this[t(1123)].schema._parseAsync({ data: e[t(1513)], path: e.path, parent: e }).then((c) => {
        var f = t;
        return c[f(951)] === f(627) ? l0 : (c[f(951)] === f(996) && a[f(996)](), o(c.value).then(() => {
          var u = f;
          return { status: a[u(1547)], value: c[u(1547)] };
        }));
      });
    }
    if (r[t(1650)] === "transform")
      if (e[t(2196)][t(1279)] === !1) {
        const o = this[t(1123)][t(540)][t(1495)]({ data: e[t(1513)], path: e[t(1106)], parent: e });
        if (!Ue(o)) return l0;
        const c = r[t(1259)](o[t(1547)], n);
        if (c instanceof Promise) throw new Error(t(1024));
        return { status: a[t(1547)], value: c };
      } else return this[t(1123)][t(540)][t(1131)]({ data: e[t(1513)], path: e[t(1106)], parent: e })[t(2480)]((o) => {
        var c = t;
        return Ue(o) ? Promise.resolve(r[c(1259)](o[c(1547)], n))[c(2480)]((f) => ({ status: a.value, value: f })) : l0;
      });
    I0[t(2368)](r);
  }
}
qe.create = (i, x, t) => {
  var a = s;
  return new qe({ schema: i, typeName: h0[a(747)], effect: x, ...b0(t) });
}, qe.createWithPreprocess = (i, x, t) => {
  var a = s;
  return new qe({ schema: x, effect: { type: a(1942), transform: i }, typeName: h0[a(747)], ...b0(t) });
};
class we extends E0 {
  [s(607)](x) {
    var t = s;
    return this[t(2169)](x) === _[t(2220)] ? re(void 0) : this[t(1123)][t(2107)][t(607)](x);
  }
  unwrap() {
    var x = s;
    return this[x(1123)][x(2107)];
  }
}
we[s(740)] = (i, x) => {
  var t = s;
  return new we({ innerType: i, typeName: h0[t(2330)], ...b0(x) });
};
class Me extends E0 {
  [s(607)](x) {
    var t = s;
    return this._getType(x) === _[t(1898)] ? re(null) : this[t(1123)][t(2107)][t(607)](x);
  }
  [s(1361)]() {
    var x = s;
    return this[x(1123)][x(2107)];
  }
}
Me[s(740)] = (i, x) => new Me({ innerType: i, typeName: h0.ZodNullable, ...b0(x) });
class Ex extends E0 {
  [s(607)](x) {
    var t = s;
    const { ctx: a } = this[t(2238)](x);
    let e = a[t(1513)];
    return a[t(463)] === _[t(2220)] && (e = this._def[t(1598)]()), this[t(1123)][t(2107)][t(607)]({ data: e, path: a[t(1106)], parent: a });
  }
  [s(2398)]() {
    var x = s;
    return this[x(1123)].innerType;
  }
}
Ex[s(740)] = (i, x) => {
  var t = s;
  return new Ex({ innerType: i, typeName: h0[t(635)], defaultValue: typeof x[t(1846)] === t(1806) ? x.default : () => x[t(1846)], ...b0(x) });
};
class Px extends E0 {
  [s(607)](x) {
    var t = s;
    const { ctx: a } = this[t(2238)](x), e = { ...a, common: { ...a[t(2196)], issues: [] } }, r = this[t(1123)][t(2107)][t(607)]({ data: e[t(1513)], path: e[t(1106)], parent: { ...e } });
    return vx(r) ? r[t(2480)]((n) => {
      var o = t;
      return { status: o(2154), value: n[o(951)] === "valid" ? n.value : this[o(1123)].catchValue({ get error() {
        var c = o;
        return new Se(e[c(2196)][c(1784)]);
      }, input: e[o(1513)] }) };
    }) : { status: t(2154), value: r.status === t(2154) ? r[t(1547)] : this[t(1123)][t(2298)]({ get error() {
      var n = t;
      return new Se(e.common[n(1784)]);
    }, input: e.data }) };
  }
  removeCatch() {
    var x = s;
    return this[x(1123)][x(2107)];
  }
}
Px[s(740)] = (i, x) => {
  var t = s;
  return new Px({ innerType: i, typeName: h0.ZodCatch, catchValue: typeof x[t(981)] === t(1806) ? x[t(981)] : () => x[t(981)], ...b0(x) });
};
class kr extends E0 {
  [s(607)](x) {
    var t = s;
    if (this[t(2169)](x) !== _.nan) {
      const e = this[t(1928)](x);
      return Y(e, { code: W[t(438)], expected: _[t(2152)], received: e[t(463)] }), l0;
    }
    return { status: "valid", value: x[t(1513)] };
  }
}
kr[s(740)] = (i) => {
  var x = s;
  return new kr({ typeName: h0[x(1723)], ...b0(i) });
};
class Ds extends E0 {
  _parse(x) {
    var t = s;
    const { ctx: a } = this[t(2238)](x), e = a[t(1513)];
    return this[t(1123)][t(1650)][t(607)]({ data: e, path: a[t(1106)], parent: a });
  }
  [s(1361)]() {
    var x = s;
    return this[x(1123)][x(1650)];
  }
}
class Xt extends E0 {
  [s(607)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(2238)](x);
    if (e[t(2196)][t(1279)])
      return (async () => {
        var n = t;
        const o = await this._def.in[n(1131)]({ data: e[n(1513)], path: e[n(1106)], parent: e });
        return o.status === "aborted" ? l0 : o.status === n(996) ? (a[n(996)](), Ge(o.value)) : this[n(1123)].out[n(1131)]({ data: o[n(1547)], path: e[n(1106)], parent: e });
      })();
    {
      const r = this[t(1123)].in[t(1495)]({ data: e[t(1513)], path: e.path, parent: e });
      return r[t(951)] === t(627) ? l0 : r[t(951)] === "dirty" ? (a.dirty(), { status: t(996), value: r.value }) : this[t(1123)].out[t(1495)]({ data: r[t(1547)], path: e[t(1106)], parent: e });
    }
  }
  static [s(740)](x, t) {
    var a = s;
    return new Xt({ in: x, out: t, typeName: h0[a(1885)] });
  }
}
class kx extends E0 {
  [s(607)](x) {
    var t = s;
    const a = this._def[t(2107)][t(607)](x), e = (r) => {
      var n = t;
      return Ue(r) && (r[n(1547)] = Object.freeze(r[n(1547)])), r;
    };
    return vx(a) ? a[t(2480)]((r) => e(r)) : e(a);
  }
  unwrap() {
    var x = s;
    return this[x(1123)][x(2107)];
  }
}
kx[s(740)] = (i, x) => {
  var t = s;
  return new kx({ innerType: i, typeName: h0[t(2253)], ...b0(x) });
};
var h0;
(function(i) {
  var x = s;
  i[x(2223)] = x(2223), i[x(1788)] = x(1788), i[x(1723)] = x(1723), i[x(2422)] = x(2422), i[x(844)] = x(844), i[x(1664)] = x(1664), i.ZodSymbol = x(930), i[x(1334)] = x(1334), i[x(904)] = x(904), i.ZodAny = x(1705), i[x(2339)] = x(2339), i[x(1923)] = x(1923), i[x(878)] = x(878), i[x(1211)] = x(1211), i[x(626)] = x(626), i[x(750)] = "ZodUnion", i[x(1206)] = "ZodDiscriminatedUnion", i[x(457)] = x(457), i[x(729)] = x(729), i[x(1809)] = x(1809), i[x(580)] = x(580), i[x(2430)] = x(2430), i[x(539)] = "ZodFunction", i.ZodLazy = "ZodLazy", i[x(1499)] = x(1499), i[x(518)] = x(518), i[x(747)] = x(747), i.ZodNativeEnum = x(1103), i[x(2330)] = x(2330), i[x(1339)] = x(1339), i.ZodDefault = x(635), i[x(911)] = x(911), i[x(2020)] = x(2020), i.ZodBranded = "ZodBranded", i[x(1885)] = "ZodPipeline", i[x(2253)] = x(2253);
})(h0 || (h0 = {}));
const q = ye[s(740)], O0 = Ze[s(740)], y0 = Tt[s(740)], U0 = Mt[s(740)], sx = $t.create;
ke[s(740)];
const q0 = le[s(740)], M = B0[s(740)], _0 = bx.create, si = Gt[s(740)];
gx[s(740)], De[s(740)];
const G0 = yx[s(740)], f0 = wx[s(740)], K0 = je[s(740)];
Sx[s(740)];
const K = we[s(740)];
Me.create;
var Ka, Wa;
class ni {
  constructor(x, t) {
    c0(this, Wa);
    c0(this, Ka);
    var a = s;
    this[a(1072)] = x, this.nodeId = t;
  }
  get [(Wa = s(1072), Ka = s(1596), s(2244))]() {
    var x = s;
    const t = this[x(1072)][x(569)](this[x(1596)]);
    if (!t) throw new Error("No store found for node " + this[x(1596)]);
    return this.nodeId !== this[x(1072)][x(1089)]() && this.graphInstance[x(1645)](this[x(1596)]), t;
  }
  get actions() {
    var x = s;
    const t = this[x(1072)].getDefinition().getNode(this.nodeId);
    if (!t) throw new Error("Node definition not found for " + this.nodeId);
    return new Proxy({}, { get: (e, r) => {
      var n = x;
      if (typeof r !== n(2203)) return;
      const o = t[n(1864)][r];
      if (!o) throw new Error(n(2375) + r + n(507) + this[n(1596)]);
      return async (c, f) => {
        var u = n;
        const l = this.getConnectionInfo();
        if (!l) throw new Error(u(1736) + this[u(1596)]);
        const { connection: d, path: v } = l, h = this[u(1072)][u(1089)]();
        if (!o[u(1164)]) {
          const g = U0();
          let w;
          if (v[u(1013)] === 2) w = await d[u(1021)](u(1682), { action: r, data: c, sourceNodeId: h }, g, { timeout: 3e5 });
          else try {
            w = await d[u(1021)](u(1682), { action: "__proxy_forward", data: { targetNodeId: this[u(1596)], targetAction: r, targetData: c, forwardPath: v[u(1323)](1) }, sourceNodeId: h }, g, { timeout: 3e5 });
          } catch (S) {
            throw console[u(1316)](u(2376), S), console[u(1316)]({ targetNodeId: this[u(1596)], targetAction: r, targetData: c, forwardPath: v[u(1323)](1) }), S;
          }
          return w;
        }
        let m;
        return v.length === 2 ? m = d.action({ action: r, data: c, sourceNodeId: h }, o[u(2198)], f) : m = d[u(691)]({ action: u(1997), data: { targetNodeId: this.nodeId, targetAction: r, targetData: c, forwardPath: v[u(1323)](1) }, sourceNodeId: h }, o[u(2198)], f), m;
      };
    } });
  }
  getConnectionInfo() {
    var x = s;
    return this[x(1072)].getConnectionToNodeInternal(this[x(1596)]);
  }
}
const ze = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map();
var Ja;
class js {
  constructor(x) {
    c0(this, Ja);
    var t = s;
    this[t(2335)] = x;
  }
  [(Ja = s(2335), s(2393))]({ store: x, storeName: t, onStateUpdate: a, requestInitialState: e }) {
    var r = s;
    this[r(2335)][r(1794)](M({ method: f0(r(2032) + t), params: U0() }), (o) => {
      var c = r;
      try {
        a(o[c(1636)]);
      } catch (f) {
        console[c(1316)]("Error updating store " + t + ":", f);
      }
    });
    const n = async (o = 0, c = 5, f = 100) => {
      var u = r;
      try {
        await e();
      } catch {
        if (o < c) {
          const d = f * Math[u(1627)](2, o) + Math[u(1390)]() * 100;
          setTimeout(() => {
            n(o + 1, c, f);
          }, d);
        } else console.warn(u(1408) + t + u(2240) + c + " retries");
      }
    };
    setTimeout(() => n(), 50);
  }
  [s(474)]({ store: x, storeName: t, sendStateUpdate: a, onInitialStateRequested: e }) {
    var r = s;
    const n = t + "_" + Date[r(1947)]() + "_" + Math[r(1390)](), o = async (f, u = !1) => {
      var l = r;
      if (this.isTransportReady()) try {
        await a(f), ze[l(2109)](n) && ze[l(1853)](n);
      } catch (d) {
        const v = d instanceof Error ? d[l(820)] : String(d);
        !v[l(1586)](l(1695)) && !v[l(1586)](l(886)) && console[l(1316)](l(794) + t + ":", d), (v[l(1586)](l(1695)) || v[l(1586)]("transport")) && ze.set(n, f);
      }
      else {
        ze.set(n, f), !Ne[l(2109)](n) && Ne.set(n, /* @__PURE__ */ new Set());
        const d = Ne[l(1717)](n), v = () => {
          var m = l;
          const g = ze[m(1717)](n);
          g && o(g, !0);
        };
        d[l(2293)](v);
        const h = () => {
          var m = l;
          this[m(1216)]() ? (d[m(720)]((g) => g()), d[m(1321)](), Ne[m(1853)](n)) : setTimeout(h, 100);
        };
        setTimeout(h, 50);
      }
    }, c = x.subscribe((f) => {
      o(f, !1);
    });
    return e(() => {
      o(x.getState(), !0);
    }), o(x.getState(), !0), () => {
      var f = r;
      c(), ze[f(1853)](n), Ne[f(2109)](n) && (Ne[f(1717)](n)[f(1321)](), Ne[f(1853)](n));
    };
  }
  isTransportReady() {
    var x = s;
    try {
      const t = this.endpoint[x(886)] || this[x(2335)][x(1805)] || this[x(2335)][x(442)];
      return t === void 0 && typeof this[x(2335)][x(1644)] == "function" ? !0 : !!t;
    } catch {
      return typeof this[x(2335)][x(1644)] === x(1806);
    }
  }
}
var Qa, Ga, Xa;
class Ms {
  constructor(x) {
    c0(this, Xa);
    c0(this, Ga);
    c0(this, Qa);
    var t = s;
    this[t(1072)] = x, this.actionManager = x[t(2261)], this.broadcastManager = x.broadcastManager;
  }
  initializeConsumer({ store: x, storeName: t, onStateUpdate: a, requestInitialState: e }) {
    var r = s;
    this.broadcastManager.registerHandler(r(1590) + t, (o) => {
      var c = r;
      try {
        o.sourceNodeId !== this[c(1072)][c(1089)]() && a(o[c(2108)]);
      } catch {
      }
    });
    const n = async (o = 0, c = 5, f = 100) => {
      var u = r;
      try {
        await e();
      } catch {
        if (o < c) {
          const d = f * Math[u(1627)](2, o) + Math.random() * 100;
          setTimeout(() => {
            n(o + 1, c, f);
          }, d);
        }
      }
    };
    setTimeout(() => n(), 50);
  }
  [(Xa = s(1072), Ga = s(2261), Qa = s(2211), s(474))]({ store: x, storeName: t, sendStateUpdate: a, onInitialStateRequested: e }) {
    var r = s;
    const n = this[r(1072)][r(1089)](), o = async (u, l = !1) => {
      var d = r;
      if (this[d(1216)]()) try {
        await this[d(2211)][d(1982)](d(1590) + t, { storeName: t, sourceNodeId: n, stateUpdate: u, isInitialState: l }), await a(u);
      } catch {
      }
    }, c = x[r(500)]((u) => {
      o(u, !1);
    });
    e(() => {
      o(x.getState(), !0);
    });
    const f = r(1332) + t;
    return this[r(2261)].implementInternalAction(f, async () => {
      var u = r;
      const l = x[u(2007)]();
      return await o(l, !0), { success: !0 };
    }), o(x.getState(), !0), () => {
      var l;
      var u = r;
      c(), (l = this[u(2261)][u(843)]) == null || l[u(1853)](f);
    };
  }
  [s(1216)]() {
    var t;
    var x = s;
    try {
      const a = this[x(1072)].connectionManager, e = a && a[x(868)]() > 0, r = ((t = this[x(2211)][x(2346)]) == null ? void 0 : t[x(1388)]) > 0;
      return e || r;
    } catch {
      return !!this[x(2211)];
    }
  }
}
function ii({ endpoint: i, store: x, name: t }) {
  const a = new js(i), e = (n) => {
    var o = B;
    const c = x[o(2007)](), f = { ...c, ...n };
    x.setState(f);
  }, r = async () => {
    var n = B;
    await i[n(1644)]({ method: "sdppp/requestInitialState/" + t, params: {} });
  };
  a.initializeConsumer({ store: x, storeName: t, onStateUpdate: e, requestInitialState: r });
}
function $s({ endpoint: i, store: x, name: t }) {
  var a = s;
  const e = new js(i), r = async (o) => {
    var c = B;
    await i[c(1644)]({ method: c(2032) + t, params: o });
  }, n = (o) => {
    var c = B;
    i[c(1794)](M({ method: f0(c(1602) + t), params: U0() }), () => {
      o();
    });
  };
  return e[a(474)]({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: n });
}
function Cr({ graphInstance: i, store: x, name: t }) {
  const a = new Ms(i), e = (n) => {
    var o = B;
    const c = x.getState(), f = { ...c, ...n };
    x[o(2181)](f);
  }, r = async () => {
    var n = B;
    const o = "__internal_requestInitialState_" + t;
    try {
      const c = i[n(2096)]()[n(1192)](i[n(1089)]());
      for (const f of c)
        try {
          const u = i[n(1382)](f);
          if (u && u.actions && u.actions[o]) {
            await u[n(1864)][o]();
            break;
          }
        } catch {
          continue;
        }
    } catch (c) {
      console.warn(n(1408) + t + ":", c);
    }
  };
  a.initializeConsumer({ store: x, storeName: t, onStateUpdate: e, requestInitialState: r });
}
function oi({ graphInstance: i, store: x, name: t }) {
  var a = s;
  const e = new Ms(i), r = async (o) => {
  }, n = (o) => {
  };
  return e[a(474)]({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: n });
}
var Ya;
class ci {
  constructor() {
    c0(this, Ya, /* @__PURE__ */ new Map());
  }
  [(Ya = s(632), s(1366))]({ endpoint: x, store: t, nodeId: a }) {
    var e = s;
    this[e(2118)](a), ii({ endpoint: x, store: t, name: a }), this[e(632)][e(1260)](a, { nodeId: a, isProducer: !1 });
  }
  [s(2209)]({ endpoint: x, store: t, nodeId: a }) {
    var e = s;
    this.unbind(a);
    const r = $s({ endpoint: x, store: t, name: a });
    this[e(632)][e(1260)](a, { nodeId: a, isProducer: !0, cleanup: r });
  }
  [s(2118)](x) {
    var t = s;
    const a = this[t(632)][t(1717)](x);
    a && (a[t(1241)] && a[t(1241)](), this.bindings[t(1853)](x));
  }
  getBinding(x) {
    var t = s;
    return this[t(632)][t(1717)](x);
  }
  [s(936)]() {
    var x = s;
    return Array[x(431)](this[x(632)].values());
  }
  [s(690)](x) {
    var t = s;
    const a = this[t(632)][t(1717)](x);
    return a ? !a[t(1160)] : !1;
  }
  [s(2069)](x) {
    var t = s;
    this[t(632)][t(1260)](x, { nodeId: x, isProducer: !1 });
  }
  cleanup() {
    var x = s;
    for (const t of this[x(632)].values())
      t[x(1241)] && t[x(1241)]();
    this[x(632)][x(1321)]();
  }
}
var _a, es, xs, ts;
class fi {
  constructor(x, t = {}) {
    c0(this, ts);
    c0(this, xs);
    c0(this, "monitoringIntervals", /* @__PURE__ */ new Map());
    c0(this, es);
    c0(this, _a);
    var a = s;
    this[a(1072)] = x, this.definition = x.definition, this[a(2351)] = x.currentNodeId, this[a(942)] = { pingInterval: t[a(629)] || 3e4, maxRetries: t[a(1007)] || 3, retryDelay: t[a(1888)] || 5e3, dfsInterval: t[a(2236)] || 3e4 };
  }
  startMonitoring(x) {
    var t = s;
    if (this[t(791)][t(2109)](x)) return;
    const a = setInterval(() => {
      var e = t;
      this[e(1445)](x);
    }, this[t(942)].pingInterval);
    this[t(791)][t(1260)](x, a);
  }
  stopMonitoring(x) {
    var t = s;
    const a = this.monitoringIntervals.get(x);
    a && (clearInterval(a), this[t(791)][t(1853)](x));
  }
  async [(ts = s(1072), xs = s(942), es = s(2274), _a = s(2351), s(1445))](x) {
    var t = s;
    try {
      await this[t(597)](x);
    } catch (a) {
      console[t(1034)]("Connection to " + x + t(641), a);
    }
  }
  async pingConnection(x) {
    var t = s;
    const a = this[t(1072)][t(1481)](x);
    if (!a) throw new Error("No connection available");
    if (a[t(2476)] && typeof a[t(2476)] == "function" && a[t(2476)]()) return Promise.resolve();
    throw new Error(t(1078));
  }
  destroy() {
    var x = s;
    for (const t of this.monitoringIntervals[x(517)]())
      clearInterval(t);
    this[x(791)][x(1321)]();
  }
}
var rs, as, ss;
class ui {
  constructor() {
    c0(this, ss, /* @__PURE__ */ new Map());
    c0(this, as, /* @__PURE__ */ new Map());
    c0(this, rs, /* @__PURE__ */ new Set());
  }
  createGlobalDispatcherForType(x) {
    return (t) => {
      var a = B;
      const e = this[a(1704)][a(1717)](x);
      if (e) for (const r of e)
        try {
          r(t);
        } catch (n) {
          console[a(1316)](a(450) + x + ":", n);
        }
      (x[a(869)](a(1590)) || x === "mesh:state:update") && !t[a(2383)] && this.forwardBroadcast(x, t);
    };
  }
  async forwardBroadcast(x, t) {
    var a = s;
    try {
      const e = { ...t, forwarded: !0 }, r = Array.from(this[a(1133)][a(517)]()), n = [...r];
      let o = 0;
      for (const f of this[a(2346)])
        r[a(1586)](f) || (n[a(482)](f), o++);
      this.mountedEndpoints.size;
      const c = n[a(2299)]((f, u) => {
        var l = a;
        const d = r[l(1586)](f) ? l(2378) : l(2501);
        return f[l(1982)](x, e)[l(981)]((v) => {
          throw v;
        });
      });
      await Promise[a(1878)](c);
    } catch (e) {
      console[a(1316)]("[BroadcastManager] Error forwarding broadcast:", e);
    }
  }
  [(ss = s(1704), as = s(1133), rs = s(2346), s(708))](x, t) {
    var a = s;
    !this.broadcastHandlers.has(x) && this.broadcastHandlers[a(1260)](x, /* @__PURE__ */ new Set()), this[a(1704)][a(1717)](x).add(t);
    const e = this[a(834)](x);
    for (const r of this.connections[a(517)]())
      r[a(969)](x, e);
    for (const r of this.mountedEndpoints)
      r[a(969)](x, e);
  }
  [s(2439)](x) {
    var t = s;
    for (const a of this[t(1704)][t(522)]()) {
      const e = this.createGlobalDispatcherForType(a);
      x[t(969)](a, e);
    }
  }
  [s(1608)](x, t) {
    var a = s;
    this[a(1133)].set(x, t), this[a(2439)](t);
  }
  [s(2208)](x) {
    var t = s;
    this.connections[t(1853)](x);
  }
  async [s(1982)](x, t) {
    var a = s;
    const e = Array[a(431)](this[a(1133)][a(517)]()), r = [...e];
    for (const o of this[a(2346)])
      !e[a(1586)](o) && r[a(482)](o);
    const n = r[a(2299)]((o) => o.broadcast(x, t));
    await Promise[a(1878)](n);
  }
  [s(2414)](x) {
    var t = s;
    this[t(2346)][t(2293)](x);
    for (const a of this[t(1704)].keys()) {
      const e = this[t(834)](a);
      x[t(969)](a, e);
    }
  }
  getHandlerTypes() {
    var x = s;
    return Array[x(431)](this[x(1704)].keys());
  }
  [s(1321)]() {
    var x = s;
    this[x(1704)][x(1321)](), this.connections[x(1321)](), this[x(2346)].clear();
  }
}
var ns, is;
class di {
  constructor(x, t, a) {
    c0(this, is, /* @__PURE__ */ new Map());
    c0(this, "definition");
    c0(this, ns);
    c0(this, "getConnection");
    var e = s;
    this.definition = x, this[e(2351)] = t, this[e(1728)] = a;
  }
  implementAction(x, t) {
    var a = s;
    const e = this[a(2274)][a(1382)](this[a(2351)]);
    if (!e) throw new Error("Node definition not found for " + this[a(2351)]);
    const r = e[a(1864)][x];
    if (!r) throw new Error(a(2375) + String(x) + a(507) + this[a(2351)]);
    this.validateHandlerType(x, t, r), this[a(843)].set(x, t);
  }
  [(is = s(843), ns = s(2351), s(1134))](x, t, a) {
    var e = s;
    a[e(1164)];
  }
  [s(2487)](x, t) {
    var a = s;
    this[a(843)][a(1260)](x, t);
  }
  [s(2414)](x) {
    var t = s;
    for (const [a, e] of this[t(843)]) {
      const r = this[t(2274)][t(1382)](this[t(2351)]), n = r == null ? void 0 : r.actions[a];
      !((n == null ? void 0 : n[t(1164)]) === !0) && this[t(683)](x, a, e);
      const c = { shape: { action: { value: a } } }, f = async function* (u, l, d) {
        var v = t;
        const h = u[v(1513)] || u, m = e(h, l, d);
        if (m && typeof m === v(570) && Symbol.asyncIterator in m && typeof m[Symbol[v(1303)]] === v(1806)) for await (const g of m)
          yield g === void 0 ? {} : g;
        else {
          const g = await m;
          if (g && typeof g[Symbol[v(1303)]] == "function") for await (const w of g)
            yield w === void 0 ? {} : w;
          else yield g === void 0 ? {} : g;
        }
      };
      x[t(485)](c, f);
    }
    this.registerProxyForwardHandler(x), this[t(2161)](x);
  }
  [s(1934)](x) {
    var t = s;
    const a = { shape: { action: { value: "__proxy_forward" } } }, e = this, r = async function* (n, o, c) {
      var f = B;
      const u = n[f(1513)] || n, { targetNodeId: l, targetAction: d, targetData: v, forwardPath: h } = u;
      if (!h || h.length === 0) throw new Error(f(672));
      const m = h[0], g = h[f(1323)](1);
      if (g[f(1013)] === 0 && m === e[f(2351)]) {
        const w = e[f(843)][f(1717)](d);
        if (!w) throw new Error("Action " + d + " not found on node " + e[f(2351)]);
        const S = w(v, o, c);
        if (S && typeof S == "object" && Symbol[f(1303)] in S && typeof S[Symbol.asyncIterator] === f(1806)) for await (const R of S)
          yield R === void 0 ? {} : R;
        else {
          const R = await S;
          yield R === void 0 ? {} : R;
        }
        return;
      }
      if (m === e[f(2351)] && g[f(1013)] > 0) {
        const w = g[0], S = e.getConnection(w);
        if (S) {
          const R = await S[f(691)]({ action: f(1997), data: { targetNodeId: l, targetAction: d, targetData: v, forwardPath: g } }, {}, c);
          for await (const O of R)
            yield O === void 0 ? {} : O;
          return;
        }
        throw new Error(f(1209) + w + f(470));
      }
      throw new Error(f(1545) + e[f(2351)] + f(1614) + h);
    };
    x[t(485)](a, r);
  }
  [s(2289)]() {
    var x = s;
    return Array[x(431)](this.actionHandlers.keys());
  }
  [s(1739)](x) {
    var t = s;
    return this.actionHandlers[t(2109)](x);
  }
  [s(1317)](x) {
    var t = s;
    return this[t(843)].get(x);
  }
  clear() {
    var x = s;
    this[x(843)][x(1321)]();
  }
  registerDirectRequestHandler(x, t, a) {
  }
  [s(2161)](x) {
    var t = s;
    const a = M({ method: f0(t(1682)), params: M({ action: q(), data: U0().optional() }) }), e = this;
    x.registerRequestHandler(a, async (r, n) => {
      var o = t;
      const { action: c, data: f } = r[o(1636)];
      if (c === "__proxy_forward") return await e[o(949)](f, n);
      const u = e.actionHandlers.get(c);
      if (!u) throw new Error(o(2375) + c + o(1379) + e[o(2351)]);
      const l = u(f, n), d = await l;
      return d === void 0 ? {} : d;
    });
  }
  async [s(949)](x, t) {
    var a = s;
    const { targetNodeId: e, targetAction: r, targetData: n, forwardPath: o } = x;
    if (!o || o[a(1013)] === 0) throw new Error(a(672));
    const c = o[0], f = o[a(1323)](1);
    if (f[a(1013)] === 0 && c === this[a(2351)]) {
      const u = this.actionHandlers[a(1717)](r);
      if (!u) throw new Error(a(2375) + r + a(1379) + this[a(2351)]);
      const l = u(n, t), d = await l;
      return d === void 0 ? {} : d;
    }
    if (c === this[a(2351)] && f[a(1013)] > 0) {
      const u = f[0], l = this[a(1728)](u);
      if (l) return await l[a(1021)](a(1682), { action: a(1997), data: { targetNodeId: e, targetAction: r, targetData: n, forwardPath: f } }, U0(), { timeout: 3e5 });
      throw new Error(a(1209) + u + " - no connection available");
    }
    throw new Error(a(1545) + this[a(2351)] + a(1614) + o);
  }
}
var os, cs, fs;
class li {
  constructor(x, t, a, e, r) {
    c0(this, "definition");
    c0(this, "currentNodeId");
    c0(this, "connections", /* @__PURE__ */ new Map());
    c0(this, fs);
    c0(this, cs);
    c0(this, os);
    var n = s;
    this.definition = x, this[n(2351)] = t, this[n(2211)] = a, this[n(2261)] = e, this[n(2158)] = r;
  }
  async [(fs = s(2211), cs = s(2261), os = s(2158), s(918))](x, t) {
    var a = s;
    if (!this[a(2274)][a(1870)](this[a(2351)], x)) throw new Error(a(888) + this[a(2351)] + " to " + x);
    if (this[a(1133)][a(2109)](x)) throw new Error(a(2331) + x);
    try {
      const e = await t();
      this[a(1133)].set(x, e), this.setupStoreBinding(x, e), this[a(2211)][a(1608)](x, e), this[a(2407)](x, e);
    } catch (e) {
      throw e;
    }
  }
  [s(1728)](x) {
    var t = s;
    return this[t(1133)][t(1717)](x);
  }
  getConnectionToNode(x) {
    var t = s;
    const a = this[t(1133)][t(1717)](x);
    if (a) return { connection: a, path: [this.currentNodeId, x] };
    const e = this[t(1344)](this[t(2351)], x);
    if (e && e[t(1013)] > 1) {
      const r = e[1], n = this[t(1133)].get(r);
      if (n) return { connection: n, path: e };
    }
  }
  [s(1344)](x, t) {
    var a = s;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), r = [{ nodeId: x, path: [x] }];
    for (; r[a(1013)] > 0; ) {
      const { nodeId: n, path: o } = r.shift();
      if (e[a(2109)](n)) continue;
      e[a(2293)](n);
      const c = this.definition.getNeighbors(n);
      for (const f of c) {
        if (f === t) return [...o, f];
        !e[a(2109)](f) && r[a(482)]({ nodeId: f, path: [...o, f] });
      }
    }
  }
  [s(593)]() {
    var x = s;
    return Array[x(431)](this[x(1133)][x(522)]());
  }
  [s(564)](x) {
    var t = s;
    return this[t(1133)][t(2109)](x);
  }
  [s(868)]() {
    var x = s;
    return this[x(1133)].size;
  }
  disconnect(x, t = !1) {
    var a = s;
    const e = this[a(1133)].get(x);
    e && (t && a(566) in e && typeof e[a(566)] == "function" && e[a(566)]()[a(981)]((r) => {
      var n = a;
      console[n(1034)](n(1110) + x + ":", r);
    }), this[a(1133)][a(1853)](x), this[a(2211)][a(2208)](x));
  }
  [s(2407)](x, t) {
    const a = () => {
      var e = B;
      const r = t[e(1074)], n = t.server;
      if (r && r[e(1413)] !== void 0) {
        const c = r[e(1413)];
        r[e(1413)] = (f) => {
          var u = e;
          this[u(1030)](x, f), c && typeof c == "function" && c(f);
        };
      }
      if (n && n[e(1413)] !== void 0) {
        const c = n[e(1413)];
        n.onclose = (f) => {
          var u = e;
          this[u(1030)](x, f), c && typeof c == "function" && c(f);
        };
      }
      t && typeof t[e(1166)] === e(1806) && t[e(1166)](() => {
        var c = e;
        this[c(1030)](x);
      });
      const o = t[e(886)];
      if (o && o[e(1413)] !== void 0) {
        const c = o[e(1413)];
        o.onclose = (f) => {
          var u = e;
          this[u(1030)](x, f), c && typeof c == "function" && c(f);
        };
      }
    };
    try {
      a();
    } catch {
    }
  }
  handleConnectionClose(x, t) {
    var a = s;
    this[a(1133)][a(2109)](x) && (this[a(1133)].delete(x), this.broadcastManager[a(2208)](x));
  }
  [s(1321)]() {
    var x = s;
    for (const t of this.connections[x(522)]())
      this.disconnect(t);
  }
}
var us, ds, ls, hs, ps, vs, ms;
class hi {
  constructor(x, t, a) {
    c0(this, "definition");
    c0(this, ms);
    c0(this, vs, /* @__PURE__ */ new Map());
    c0(this, ps, /* @__PURE__ */ new Map());
    c0(this, hs);
    c0(this, ls, new ci());
    c0(this, ds);
    c0(this, "actionManager");
    c0(this, us);
    var e = s;
    this[e(2274)] = x, this[e(2351)] = t, this.initializeNodeStores(), this[e(2211)] = new ui(), this[e(2261)] = new di(x, t, (r) => this[e(1481)](r)), this.connectionManager = new li(x, t, this[e(2211)], this[e(2261)], (r, n) => this[e(2158)](r, n)), this.connectionMonitor = new fi(this, a), this[e(1549)]();
  }
  [(ms = s(2351), vs = s(2051), ps = s(2269), hs = s(767), ls = s(1511), ds = s(2211), us = s(548), s(1917))]() {
    var x = s;
    for (const t of this[x(2274)][x(1691)]()) {
      const a = this[x(2274)].getNode(t);
      if (a && a[x(2244)]) {
        const e = this.getDefaultValuesFromSchema(a[x(2244)]), r = An(() => e);
        this[x(2051)][x(1260)](t, r);
      }
    }
  }
  [s(1520)](x) {
    var t = s;
    if (!x) return {};
    try {
      return x[t(1503)]({});
    } catch {
      return this[t(1696)](x);
    }
  }
  [s(1696)](x) {
    var t = s;
    if (!x || !x[t(1658)]) return {};
    if (x.def.type === "default") {
      const a = x[t(1658)][t(1598)];
      return typeof a === t(1806) ? a() : a;
    }
    if (x[t(1658)].type === t(570)) {
      const a = {};
      let e;
      try {
        e = x[t(1658)][t(1465)];
      } catch {
        return {};
      }
      if (e) for (const [r, n] of Object.entries(e)) {
        const o = this.getDefaultValueFromField(n);
        o !== void 0 && (a[r] = o);
      }
      return a;
    }
    return {};
  }
  getDefaultValueFromField(x) {
    var t = s;
    if (x)
      try {
        return x[t(1503)](void 0);
      } catch {
        return this.manuallyExtractDefaults(x);
      }
  }
  async [s(918)](x, t) {
    var a = s;
    return this[a(548)][a(918)](x, t);
  }
  [s(571)](x, t = !1) {
    var a = s;
    return this[a(548)].disconnect(x, t);
  }
  [s(2158)](x, t) {
    var a = s;
    const e = this[a(2051)][a(1717)](x);
    if (!e) return;
    const r = t[a(666)] || t[a(1074)];
    r && (t[a(1074)] ? this.storeManager[a(1366)]({ endpoint: r, store: e, nodeId: x }) : this[a(1511)][a(2209)]({ endpoint: r, store: e, nodeId: x }));
  }
  [s(1549)]() {
    var x = s;
    for (const [t, a] of this[x(2051)])
      t === this[x(2351)] ? oi({ graphInstance: this, store: a, name: t }) : Cr({ graphInstance: this, store: a, name: t });
  }
  [s(1382)](x) {
    var t = s;
    if (!this[t(2269)][t(2109)](x)) {
      const a = new ni(this, x);
      this[t(2269)].set(x, a);
    }
    return this[t(2269)][t(1717)](x);
  }
  getConnectionInternal(x) {
    var t = s;
    return this[t(548)].getConnection(x);
  }
  [s(1728)](x) {
    var t = s;
    return this[t(1481)](x);
  }
  [s(569)](x) {
    var t = s;
    return this[t(2051)][t(1717)](x);
  }
  get [s(2244)]() {
    var x = s;
    const t = this.nodeStores.get(this[x(2351)]);
    if (!t) throw new Error(x(2172) + this[x(2351)]);
    return t;
  }
  get actions() {
    var x = s;
    const t = this[x(2274)][x(1382)](this.currentNodeId);
    if (!t) throw new Error(x(2245) + this.currentNodeId);
    return new Proxy({}, { get: (e, r) => {
      var n = x;
      if (typeof r !== n(2203)) return;
      const o = t[n(1864)][r];
      if (!o) throw new Error("Action " + r + n(1594) + this[n(2351)]);
      return (c, f) => {
        var u = n;
        const l = this.actionManager[u(1317)](r);
        if (!l) throw new Error(u(1009) + r + " not implemented for node " + this[u(2351)]);
        const d = { nodeId: this[u(2351)] };
        if (o[u(1164)] === !0) {
          const v = l(c, d, f);
          return v && typeof v === u(570) && Symbol.asyncIterator in v ? async function* () {
            for await (const h of v)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await v;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          var v = u;
          const h = l(c, d, f);
          if (h && typeof h === v(570) && Symbol[v(1303)] in h) {
            const m = h[Symbol[v(1303)]](), g = await m.next();
            return g[v(1547)] === void 0 ? {} : g[v(1547)];
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  getDefinition() {
    var x = s;
    return this[x(2274)];
  }
  [s(1089)]() {
    var x = s;
    return this[x(2351)];
  }
  [s(1645)](x) {
    var t = s;
    if (x === this[t(2351)] || this.storeManager[t(690)](x)) return;
    const a = this[t(2051)][t(1717)](x);
    if (a)
      try {
        Cr({ graphInstance: this, store: a, name: x }), this.storeManager.markConsumerBinding(x);
      } catch {
      }
  }
  [s(2098)](x) {
    var t = s;
    return this[t(548)].getConnectionToNode(x);
  }
  [s(1271)](x) {
    return this.getConnectionToNodeInternal(x);
  }
  [s(2414)](x) {
    var t = s;
    const a = this[t(2051)][t(1717)](this[t(2351)]);
    if (!a) throw new Error(t(2173) + this[t(2351)]);
    const e = x[t(666)] || x[t(1074)];
    $s({ endpoint: e, store: a, name: this[t(2351)] }), this[t(2261)][t(2414)](x), this[t(2211)][t(2414)](x);
  }
  [s(1367)](x, t) {
    var a = s;
    this[a(2261)][a(1367)](x, t);
  }
  [s(1066)]() {
    var x = s;
    this[x(767)].destroy(), this[x(1511)][x(1241)](), this.broadcastManager[x(1321)](), this.actionManager[x(1321)](), this.connectionManager[x(1321)]();
  }
  [s(680)](x, t) {
    var a = s;
    return this.connectionManager[a(1344)](x, t);
  }
  [s(1344)](x, t) {
    var a = s;
    return this[a(680)](x, t);
  }
  async [s(1982)](x, t) {
    var a = s;
    return this[a(2211)].broadcast(x, t);
  }
  [s(2150)](x, t) {
    var a = s;
    this.broadcastManager[a(708)](x, t);
  }
}
const Ls = s(1983), pi = [Ls, s(2479), s(1635), s(1476)], Ox = s(1526), zs = _0([q(), O0().int()]), Hs = q(), vi = M({ progressToken: K(zs) })[s(2302)](), ae = M({ _meta: K(vi) })[s(2302)](), xe = M({ method: q(), params: K(ae) }), nx = M({ _meta: K(M({})[s(2302)]()) })[s(2302)](), pe = M({ method: q(), params: K(nx) }), se = M({ _meta: K(M({})[s(2302)]()) })[s(2302)](), qx = _0([q(), O0()[s(2140)]()]), Vs = M({ jsonrpc: f0(Ox), id: qx })[s(2489)](xe)[s(1185)](), mi = (i) => Vs[s(1088)](i)[s(675)], Us = M({ jsonrpc: f0(Ox) })[s(2489)](pe)[s(1185)](), bi = (i) => Us.safeParse(i)[s(675)], Zs = M({ jsonrpc: f0(Ox), id: qx, result: se })[s(1185)](), Ir = (i) => Zs[s(1088)](i).success;
var ge;
(function(i) {
  var x = s;
  i[i[x(1895)] = -32e3] = x(1895), i[i[x(2095)] = -32001] = x(2095), i[i[x(2452)] = -32700] = x(2452), i[i[x(1199)] = -32600] = x(1199), i[i.MethodNotFound = -32601] = x(1371), i[i.InvalidParams = -32602] = x(2131), i[i[x(1257)] = -32603] = x(1257);
})(ge || (ge = {}));
const Bs = M({ jsonrpc: f0(Ox), id: qx, error: M({ code: O0()[s(2140)](), message: q(), data: K(sx()) }) }).strict(), gi = (i) => Bs[s(1088)](i).success;
_0([Vs, Us, Zs, Bs]);
const Vt = se.strict(), Ut = pe[s(705)]({ method: f0(s(456)), params: nx[s(705)]({ requestId: qx, reason: q()[s(2247)]() }) }), ix = M({ name: q(), title: K(q()) })[s(2302)](), Ks = ix[s(705)]({ version: q() }), yi = M({ experimental: K(M({})[s(2302)]()), sampling: K(M({})[s(2302)]()), elicitation: K(M({})[s(2302)]()), roots: K(M({ listChanged: K(y0()) })[s(2302)]()) })[s(2302)](), Ws = xe[s(705)]({ method: f0(s(623)), params: ae[s(705)]({ protocolVersion: q(), capabilities: yi, clientInfo: Ks }) }), wi = M({ experimental: K(M({})[s(2302)]()), logging: K(M({})[s(2302)]()), completions: K(M({})[s(2302)]()), prompts: K(M({ listChanged: K(y0()) })[s(2302)]()), resources: K(M({ subscribe: K(y0()), listChanged: K(y0()) })[s(2302)]()), tools: K(M({ listChanged: K(y0()) })[s(2302)]()) })[s(2302)](), Si = se[s(705)]({ protocolVersion: q(), capabilities: wi, serverInfo: Ks, instructions: K(q()) }), Js = pe[s(705)]({ method: f0(s(2387)) }), Zt = xe[s(705)]({ method: f0(s(777)) }), Ei = M({ progress: O0(), total: K(O0()), message: K(q()) }).passthrough(), Bt = pe[s(705)]({ method: f0(s(1273)), params: nx[s(2489)](Ei)[s(705)]({ progressToken: zs }) }), Ax = xe[s(705)]({ params: ae.extend({ cursor: K(Hs) })[s(2247)]() }), Tx = se[s(705)]({ nextCursor: K(Hs) }), Qs = M({ uri: q(), mimeType: K(q()), _meta: K(M({})[s(2302)]()) }).passthrough(), Gs = Qs[s(705)]({ text: q() }), Xs = Qs[s(705)]({ blob: q()[s(772)]() }), Ys = ix[s(705)]({ uri: q(), description: K(q()), mimeType: K(q()), _meta: K(M({})[s(2302)]()) }), Pi = ix[s(705)]({ uriTemplate: q(), description: K(q()), mimeType: K(q()), _meta: K(M({})[s(2302)]()) }), ki = Ax[s(705)]({ method: f0(s(1625)) }), Ci = Tx[s(705)]({ resources: q0(Ys) }), Ii = Ax.extend({ method: f0("resources/templates/list") }), Ri = Tx.extend({ resourceTemplates: q0(Pi) }), Fi = xe[s(705)]({ method: f0(s(2082)), params: ae[s(705)]({ uri: q() }) }), Ni = se[s(705)]({ contents: q0(_0([Gs, Xs])) }), Oi = pe.extend({ method: f0(s(669)) }), qi = xe[s(705)]({ method: f0(s(1197)), params: ae[s(705)]({ uri: q() }) }), Ai = xe[s(705)]({ method: f0(s(1649)), params: ae[s(705)]({ uri: q() }) }), Ti = pe[s(705)]({ method: f0(s(1754)), params: nx.extend({ uri: q() }) }), Di = M({ name: q(), description: K(q()), required: K(y0()) })[s(2302)](), ji = ix[s(705)]({ description: K(q()), arguments: K(q0(Di)), _meta: K(M({})[s(2302)]()) }), Mi = Ax.extend({ method: f0(s(2477)) }), $i = Tx[s(705)]({ prompts: q0(ji) }), Li = xe[s(705)]({ method: f0(s(990)), params: ae.extend({ name: q(), arguments: K(G0(q())) }) }), Yt = M({ type: f0(s(2449)), text: q(), _meta: K(M({}).passthrough()) })[s(2302)](), _t = M({ type: f0(s(1740)), data: q()[s(772)](), mimeType: q(), _meta: K(M({})[s(2302)]()) })[s(2302)](), er = M({ type: f0(s(1493)), data: q()[s(772)](), mimeType: q(), _meta: K(M({})[s(2302)]()) })[s(2302)](), zi = M({ type: f0(s(2281)), resource: _0([Gs, Xs]), _meta: K(M({})[s(2302)]()) })[s(2302)](), Hi = Ys.extend({ type: f0(s(1843)) }), _s = _0([Yt, _t, er, Hi, zi]), Vi = M({ role: K0(["user", "assistant"]), content: _s })[s(2302)](), Ui = se.extend({ description: K(q()), messages: q0(Vi) }), Zi = pe.extend({ method: f0(s(704)) }), Bi = M({ title: K(q()), readOnlyHint: K(y0()), destructiveHint: K(y0()), idempotentHint: K(y0()), openWorldHint: K(y0()) })[s(2302)](), Ki = ix[s(705)]({ description: K(q()), inputSchema: M({ type: f0(s(570)), properties: K(M({})[s(2302)]()), required: K(q0(q())) })[s(2302)](), outputSchema: K(M({ type: f0(s(570)), properties: K(M({})[s(2302)]()), required: K(q0(q())) })[s(2302)]()), annotations: K(Bi), _meta: K(M({})[s(2302)]()) }), Wi = Ax[s(705)]({ method: f0(s(802)) }), Ji = Tx[s(705)]({ tools: q0(Ki) }), en = se[s(705)]({ content: q0(_s)[s(1846)]([]), structuredContent: M({}).passthrough()[s(2247)](), isError: K(y0()) });
en.or(se[s(705)]({ toolResult: sx() }));
const Qi = xe.extend({ method: f0("tools/call"), params: ae[s(705)]({ name: q(), arguments: K(G0(sx())) }) }), Gi = pe[s(705)]({ method: f0("notifications/tools/list_changed") }), xn = K0([s(2027), s(1498), s(2359), s(2428), "error", s(441), s(521), s(1265)]), Xi = xe[s(705)]({ method: f0(s(1026)), params: ae.extend({ level: xn }) }), Yi = pe.extend({ method: f0(s(713)), params: nx[s(705)]({ level: xn, logger: K(q()), data: sx() }) }), _i = M({ name: q()[s(2247)]() })[s(2302)](), e2 = M({ hints: K(q0(_i)), costPriority: K(O0().min(0).max(1)), speedPriority: K(O0()[s(477)](0)[s(1269)](1)), intelligencePriority: K(O0()[s(477)](0)[s(1269)](1)) }).passthrough(), x2 = M({ role: K0(["user", s(967)]), content: _0([Yt, _t, er]) })[s(2302)](), t2 = xe[s(705)]({ method: f0(s(1759)), params: ae[s(705)]({ messages: q0(x2), systemPrompt: K(q()), includeContext: K(K0([s(2065), s(1624), "allServers"])), temperature: K(O0()), maxTokens: O0()[s(2140)](), stopSequences: K(q0(q())), metadata: K(M({})[s(2302)]()), modelPreferences: K(e2) }) }), tn = se[s(705)]({ model: q(), stopReason: K(K0([s(1931), s(1121), "maxTokens"]).or(q())), role: K0([s(2081), "assistant"]), content: si(s(1650), [Yt, _t, er]) }), r2 = M({ type: f0("boolean"), title: K(q()), description: K(q()), default: K(y0()) })[s(2302)](), a2 = M({ type: f0(s(2203)), title: K(q()), description: K(q()), minLength: K(O0()), maxLength: K(O0()), format: K(K0([s(1534), "uri", "date", "date-time"])) })[s(2302)](), s2 = M({ type: K0([s(986), s(688)]), title: K(q()), description: K(q()), minimum: K(O0()), maximum: K(O0()) }).passthrough(), n2 = M({ type: f0(s(2203)), title: K(q()), description: K(q()), enum: q0(q()), enumNames: K(q0(q())) }).passthrough(), i2 = _0([r2, a2, s2, n2]), o2 = xe[s(705)]({ method: f0(s(1981)), params: ae.extend({ message: q(), requestedSchema: M({ type: f0(s(570)), properties: G0(q(), i2), required: K(q0(q())) })[s(2302)]() }) }), rn = se.extend({ action: K0(["accept", s(906), s(1351)]), content: K(G0(q(), sx())) }), c2 = M({ type: f0(s(1079)), uri: q() })[s(2302)](), f2 = M({ type: f0(s(947)), name: q() }).passthrough(), u2 = xe[s(705)]({ method: f0("completion/complete"), params: ae[s(705)]({ ref: _0([f2, c2]), argument: M({ name: q(), value: q() })[s(2302)](), context: K(M({ arguments: K(G0(q(), q())) })) }) }), d2 = se[s(705)]({ completion: M({ values: q0(q())[s(1269)](100), total: K(O0()[s(2140)]()), hasMore: K(y0()) })[s(2302)]() }), l2 = M({ uri: q()[s(869)]("file://"), name: K(q()), _meta: K(M({}).passthrough()) })[s(2302)](), h2 = xe[s(705)]({ method: f0("roots/list") }), an = se.extend({ roots: q0(l2) }), p2 = pe[s(705)]({ method: f0(s(893)) });
_0([Zt, Ws, u2, Xi, Li, Mi, ki, Ii, Fi, qi, Ai, Qi, Wi]), _0([Ut, Bt, Js, p2]), _0([Vt, tn, rn, an]), _0([Zt, t2, o2, h2]), _0([Ut, Bt, Yi, Ti, Oi, Gi, Zi]), _0([Vt, Si, d2, Ui, $i, Ci, Ri, Ni, en, Ji]);
class Ae extends Error {
  constructor(x, t, a) {
    var e = s;
    super(e(931) + x + ": " + t), this[e(2440)] = x, this[e(1513)] = a, this[e(2252)] = "McpError";
  }
}
const v2 = 6e4;
class m2 {
  constructor(x) {
    var t = s;
    this[t(653)] = x, this[t(1515)] = 0, this[t(785)] = /* @__PURE__ */ new Map(), this[t(562)] = /* @__PURE__ */ new Map(), this[t(1621)] = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this[t(801)] = /* @__PURE__ */ new Map(), this[t(491)] = /* @__PURE__ */ new Map(), this[t(2485)] = /* @__PURE__ */ new Set(), this[t(1794)](Ut, (a) => {
      var e = t;
      const r = this[e(562)].get(a[e(1636)][e(1286)]);
      r == null || r[e(856)](a[e(1636)].reason);
    }), this[t(1794)](Bt, (a) => {
      this._onprogress(a);
    }), this[t(677)](Zt, (a) => ({}));
  }
  [s(2064)](x, t, a, e, r = !1) {
    var n = s;
    this[n(491)][n(1260)](x, { timeoutId: setTimeout(e, t), startTime: Date[n(1947)](), timeout: t, maxTotalTimeout: a, resetTimeoutOnProgress: r, onTimeout: e });
  }
  [s(1527)](x) {
    var t = s;
    const a = this._timeoutInfo.get(x);
    if (!a) return !1;
    const e = Date.now() - a.startTime;
    if (a[t(1743)] && e >= a[t(1743)])
      throw this[t(491)][t(1853)](x), new Ae(ge[t(2095)], "Maximum total timeout exceeded", { maxTotalTimeout: a[t(1743)], totalElapsed: e });
    return clearTimeout(a.timeoutId), a[t(443)] = setTimeout(a.onTimeout, a[t(1140)]), !0;
  }
  [s(736)](x) {
    var t = s;
    const a = this[t(491)][t(1717)](x);
    a && (clearTimeout(a[t(443)]), this[t(491)].delete(x));
  }
  async [s(918)](x) {
    var t = s, a, e, r;
    this._transport = x;
    const n = (a = this[t(886)]) === null || a === void 0 ? void 0 : a[t(1413)];
    this[t(1805)][t(1413)] = () => {
      var f = t;
      n == null || n(), this[f(1497)]();
    };
    const o = (e = this[t(886)]) === null || e === void 0 ? void 0 : e[t(827)];
    this[t(1805)][t(827)] = (f) => {
      o == null || o(f), this._onerror(f);
    };
    const c = (r = this[t(1805)]) === null || r === void 0 ? void 0 : r[t(1668)];
    this[t(1805)][t(1668)] = (f, u) => {
      var l = t;
      c == null || c(f, u), Ir(f) || gi(f) ? this._onresponse(f) : mi(f) ? this[l(599)](f, u) : bi(f) ? this[l(2040)](f) : this[l(2129)](new Error(l(1592) + JSON.stringify(f)));
    }, await this[t(1805)][t(1767)]();
  }
  _onclose() {
    var x = s, t;
    const a = this[x(1375)];
    this[x(1375)] = /* @__PURE__ */ new Map(), this._progressHandlers[x(1321)](), this[x(2485)][x(1321)](), this[x(1805)] = void 0, (t = this[x(1413)]) === null || t === void 0 || t[x(1122)](this);
    const e = new Ae(ge[x(1895)], x(1884));
    for (const r of a.values())
      r(e);
  }
  [s(2129)](x) {
    var t = s, a;
    (a = this[t(827)]) === null || a === void 0 || a[t(1122)](this, x);
  }
  [s(2040)](x) {
    var t = s, a;
    const e = (a = this[t(1621)][t(1717)](x[t(1971)])) !== null && a !== void 0 ? a : this[t(2381)];
    e !== void 0 && Promise[t(1674)]()[t(2480)](() => e(x))[t(981)]((r) => this._onerror(new Error("Uncaught error in notification handler: " + r)));
  }
  _onrequest(x, t) {
    var a = s, e, r, n, o;
    const c = (e = this[a(785)][a(1717)](x[a(1971)])) !== null && e !== void 0 ? e : this[a(2070)];
    if (c === void 0) {
      (r = this._transport) === null || r === void 0 || r.send({ jsonrpc: "2.0", id: x.id, error: { code: ge[a(1371)], message: a(1999) } }).catch((l) => this[a(2129)](new Error(a(2134) + l)));
      return;
    }
    const f = new AbortController();
    this._requestHandlerAbortControllers[a(1260)](x.id, f);
    const u = { signal: f.signal, sessionId: (n = this[a(1805)]) === null || n === void 0 ? void 0 : n[a(1039)], _meta: (o = x[a(1636)]) === null || o === void 0 ? void 0 : o[a(2455)], sendNotification: (l) => this[a(1644)](l, { relatedRequestId: x.id }), sendRequest: (l, d, v) => this.request(l, d, { ...v, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t[a(1701)], requestId: x.id, requestInfo: t == null ? void 0 : t[a(1703)] };
    Promise[a(1674)]()[a(2480)](() => c(x, u))[a(2480)]((l) => {
      var d = a, v;
      if (!f[d(774)][d(627)])
        return (v = this._transport) === null || v === void 0 ? void 0 : v[d(2344)]({ result: l, jsonrpc: "2.0", id: x.id });
    }, (l) => {
      var d = a, v, h;
      if (!f.signal[d(627)])
        return (v = this._transport) === null || v === void 0 ? void 0 : v.send({ jsonrpc: "2.0", id: x.id, error: { code: Number.isSafeInteger(l.code) ? l.code : ge[d(1257)], message: (h = l[d(820)]) !== null && h !== void 0 ? h : d(513) } });
    })[a(981)]((l) => this[a(2129)](new Error(a(917) + l))).finally(() => {
      this._requestHandlerAbortControllers.delete(x.id);
    });
  }
  _onprogress(x) {
    var t = s;
    const { progressToken: a, ...e } = x.params, r = Number(a), n = this._progressHandlers.get(r);
    if (!n) {
      this[t(2129)](new Error(t(2318) + JSON.stringify(x)));
      return;
    }
    const o = this[t(1375)][t(1717)](r), c = this[t(491)][t(1717)](r);
    if (c && o && c.resetTimeoutOnProgress) try {
      this[t(1527)](r);
    } catch (f) {
      o(f);
      return;
    }
    n(e);
  }
  [s(1460)](x) {
    var t = s;
    const a = Number(x.id), e = this[t(1375)][t(1717)](a);
    if (e === void 0) {
      this[t(2129)](new Error(t(1501) + JSON[t(2225)](x)));
      return;
    }
    if (this[t(1375)][t(1853)](a), this[t(801)][t(1853)](a), this[t(736)](a), Ir(x)) e(x);
    else {
      const r = new Ae(x[t(1316)].code, x.error[t(820)], x[t(1316)].data);
      e(r);
    }
  }
  get [s(886)]() {
    var x = s;
    return this[x(1805)];
  }
  async [s(566)]() {
    var x = s, t;
    await ((t = this[x(1805)]) === null || t === void 0 ? void 0 : t[x(566)]());
  }
  [s(1021)](x, t, a) {
    const { relatedRequestId: e, resumptionToken: r, onresumptiontoken: n } = a ?? {};
    return new Promise((o, c) => {
      var f = B, u, l, d, v, h, m;
      if (!this[f(1805)]) {
        c(new Error(f(1951)));
        return;
      }
      ((u = this[f(653)]) === null || u === void 0 ? void 0 : u.enforceStrictCapabilities) === !0 && this[f(1630)](x[f(1971)]), (l = a == null ? void 0 : a[f(774)]) === null || l === void 0 || l.throwIfAborted();
      const g = this._requestMessageId++, w = { ...x, jsonrpc: f(1526), id: g };
      a != null && a[f(1576)] && (this._progressHandlers.set(g, a[f(1576)]), w[f(1636)] = { ...x[f(1636)], _meta: { ...((d = x.params) === null || d === void 0 ? void 0 : d[f(2455)]) || {}, progressToken: g } });
      const S = (k) => {
        var E = f, C;
        this[E(1375)].delete(g), this._progressHandlers.delete(g), this[E(736)](g), (C = this[E(1805)]) === null || C === void 0 || C[E(2344)]({ jsonrpc: E(1526), method: E(456), params: { requestId: g, reason: String(k) } }, { relatedRequestId: e, resumptionToken: r, onresumptiontoken: n })[E(981)]((D) => this[E(2129)](new Error(E(793) + D))), c(k);
      };
      this[f(1375)][f(1260)](g, (k) => {
        var E = f, C;
        if (!(!((C = a == null ? void 0 : a[E(774)]) === null || C === void 0) && C[E(627)])) {
          if (k instanceof Error) return c(k);
          try {
            const D = t[E(1503)](k[E(1802)]);
            o(D);
          } catch (D) {
            c(D);
          }
        }
      }), (v = a == null ? void 0 : a.signal) === null || v === void 0 || v.addEventListener("abort", () => {
        var k = f, E;
        S((E = a == null ? void 0 : a.signal) === null || E === void 0 ? void 0 : E[k(2088)]);
      });
      const R = (h = a == null ? void 0 : a[f(1140)]) !== null && h !== void 0 ? h : v2, O = () => S(new Ae(ge[f(2095)], f(2114), { timeout: R }));
      this._setupTimeout(g, R, a == null ? void 0 : a.maxTotalTimeout, O, (m = a == null ? void 0 : a[f(1505)]) !== null && m !== void 0 ? m : !1), this[f(1805)][f(2344)](w, { relatedRequestId: e, resumptionToken: r, onresumptiontoken: n }).catch((k) => {
        var E = f;
        this[E(736)](g), c(k);
      });
    });
  }
  async notification(x, t) {
    var a = s, e, r;
    if (!this[a(1805)]) throw new Error(a(1951));
    if (this[a(2499)](x[a(1971)]), ((r = (e = this._options) === null || e === void 0 ? void 0 : e[a(1220)]) !== null && r !== void 0 ? r : [])[a(1586)](x[a(1971)]) && !x[a(1636)] && !(t != null && t.relatedRequestId)) {
      if (this[a(2485)][a(2109)](x[a(1971)])) return;
      this[a(2485)][a(2293)](x[a(1971)]), Promise[a(1674)]()[a(2480)](() => {
        var f = a, u;
        if (this[f(2485)][f(1853)](x.method), !this._transport) return;
        const l = { ...x, jsonrpc: f(1526) };
        (u = this[f(1805)]) === null || u === void 0 || u[f(2344)](l, t)[f(981)]((d) => this[f(2129)](d));
      });
      return;
    }
    const c = { ...x, jsonrpc: a(1526) };
    await this[a(1805)][a(2344)](c, t);
  }
  setRequestHandler(x, t) {
    var a = s;
    const e = x.shape[a(1971)][a(1547)];
    this[a(554)](e), this[a(785)][a(1260)](e, (r, n) => {
      var o = a;
      return Promise[o(1674)](t(x[o(1503)](r), n));
    });
  }
  [s(1272)](x) {
    var t = s;
    this[t(785)][t(1853)](x);
  }
  [s(1542)](x) {
    var t = s;
    if (this[t(785)][t(2109)](x)) throw new Error(t(659) + x + " already exists, which would be overridden");
  }
  [s(1794)](x, t) {
    var a = s;
    this[a(1621)][a(1260)](x[a(1465)].method[a(1547)], (e) => Promise.resolve(t(x[a(1503)](e))));
  }
  removeNotificationHandler(x) {
    var t = s;
    this[t(1621)].delete(x);
  }
}
function b2(i, x) {
  var t = s;
  return Object[t(1082)](x)[t(2092)]((a, [e, r]) => {
    var n = t;
    return r && typeof r === n(570) ? a[e] = a[e] ? { ...a[e], ...r } : r : a[e] = r, a;
  }, { ...i });
}
function sn(i) {
  var x = s;
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, x(1846)) ? i[x(1846)] : i;
}
var Xe = { exports: {} }, g2 = Xe[s(1936)], Rr;
function y2() {
  var i = s;
  return Rr ? Xe.exports : (Rr = 1, function(x, t) {
    (function(a, e) {
      e(t);
    })(g2, function(a) {
      var e = B;
      function r() {
        for (var P = B, p = arguments[P(1013)], b = Array(p), y = 0; y < p; y++)
          b[y] = arguments[y];
        if (b[P(1013)] > 1) {
          b[0] = b[0][P(1323)](0, -1);
          for (var z = b[P(1013)] - 1, H = 1; H < z; ++H)
            b[H] = b[H].slice(1, -1);
          return b[z] = b[z].slice(1), b.join("");
        } else return b[0];
      }
      function n(P) {
        var p = B;
        return p(1144) + P + ")";
      }
      function o(P) {
        var p = B;
        return P === void 0 ? "undefined" : P === null ? p(1898) : Object[p(2017)][p(506)].call(P)[p(519)](" ")[p(1903)]()[p(519)]("]")[p(1889)]()[p(1698)]();
      }
      function c(P) {
        var p = B;
        return P[p(1954)]();
      }
      function f(P) {
        var p = B;
        return P != null ? P instanceof Array ? P : typeof P[p(1013)] !== p(986) || P.split || P[p(2295)] || P[p(1122)] ? [P] : Array.prototype[p(1323)][p(1122)](P) : [];
      }
      function u(P, p) {
        var b = P;
        if (p) for (var y in p)
          b[y] = p[y];
        return b;
      }
      function l(P) {
        var p = B, b = p(2249), y = "[0-9]", z = r(y, p(1381)), H = n(n(p(654) + z + "%" + z + z + "%" + z + z) + "|" + n(p(1330) + z + "%" + z + z) + "|" + n("%" + z + z)), t0 = p(2350), o0 = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", C0 = r(t0, o0), T0 = P ? p(1708) : "[]", H0 = P ? p(1292) : "[]", S0 = r(b, y, "[\\-\\.\\_\\~]", T0);
        n(b + r(b, y, "[\\+\\-\\.]") + "*"), n(n(H + "|" + r(S0, o0, p(2033))) + "*");
        var A0 = n(n(p(1597)) + "|" + n("2[0-4]" + y) + "|" + n("1" + y + y) + "|" + n(p(1862) + y) + p(1231) + y), V0 = n(A0 + "\\." + A0 + "\\." + A0 + "\\." + A0), v0 = n(z + p(1710)), M0 = n(n(v0 + "\\:" + v0) + "|" + V0), Z0 = n(n(v0 + "\\:") + p(1972) + M0), $0 = n("\\:\\:" + n(v0 + "\\:") + p(1581) + M0), Ee = n(n(v0) + p(1730) + n(v0 + "\\:") + "{4}" + M0), oe = n(n(n(v0 + "\\:") + p(787) + v0) + p(1730) + n(v0 + "\\:") + "{3}" + M0), ce = n(n(n(v0 + "\\:") + p(1920) + v0) + "?\\:\\:" + n(v0 + "\\:") + p(2213) + M0), Le = n(n(n(v0 + "\\:") + p(1834) + v0) + p(1730) + v0 + "\\:" + M0), Re = n(n(n(v0 + "\\:") + p(1340) + v0) + "?\\:\\:" + M0), te = n(n(n(v0 + "\\:") + p(2265) + v0) + "?\\:\\:" + v0), fe = n(n(n(v0 + "\\:") + p(1678) + v0) + "?\\:\\:"), Fe = n([Z0, $0, Ee, oe, ce, Le, Re, te, fe].join("|")), me = n(n(S0 + "|" + H) + "+");
        n("[vV]" + z + p(1129) + r(S0, o0, "[\\:]") + "+"), n(n(H + "|" + r(S0, o0)) + "*");
        var ue = n(H + "|" + r(S0, o0, p(1048)));
        return n(n(H + "|" + r(S0, o0, p(1873))) + "+"), n(n(ue + "|" + r(p(2168), H0)) + "*"), { NOT_SCHEME: new RegExp(r(p(2011), b, y, "[\\+\\-\\.]"), "g"), NOT_USERINFO: new RegExp(r(p(1409), S0, o0), "g"), NOT_HOST: new RegExp(r(p(1416), S0, o0), "g"), NOT_PATH: new RegExp(r(p(1385), S0, o0), "g"), NOT_PATH_NOSCHEME: new RegExp(r(p(2113), S0, o0), "g"), NOT_QUERY: new RegExp(r("[^\\%]", S0, o0, p(430), H0), "g"), NOT_FRAGMENT: new RegExp(r(p(2311), S0, o0, p(430)), "g"), ESCAPE: new RegExp(r(p(2011), S0, o0), "g"), UNRESERVED: new RegExp(S0, "g"), OTHER_CHARS: new RegExp(r(p(2311), S0, C0), "g"), PCT_ENCODED: new RegExp(H, "g"), IPV4ADDRESS: new RegExp("^(" + V0 + ")$"), IPV6ADDRESS: new RegExp(p(835) + Fe + ")" + n(n(p(923) + z + p(1467)) + "(" + me + ")") + p(964)) };
      }
      var d = l(!1), v = l(!0), h = /* @__PURE__ */ function() {
        function P(p, b) {
          var y = B, z = [], H = !0, t0 = !1, o0 = void 0;
          try {
            for (var C0 = p[Symbol[y(1347)]](), T0; !(H = (T0 = C0[y(585)]())[y(1291)]) && (z[y(482)](T0.value), !(b && z[y(1013)] === b)); H = !0)
              ;
          } catch (H0) {
            t0 = !0, o0 = H0;
          } finally {
            try {
              !H && C0[y(2166)] && C0[y(2166)]();
            } finally {
              if (t0) throw o0;
            }
          }
          return z;
        }
        return function(p, b) {
          var y = B;
          if (Array[y(1842)](p)) return p;
          if (Symbol[y(1347)] in Object(p)) return P(p, b);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(), m = function(P) {
        var p = B;
        if (Array.isArray(P)) {
          for (var b = 0, y = Array(P.length); b < P[p(1013)]; b++) y[b] = P[b];
          return y;
        } else return Array[p(431)](P);
      }, g = 2147483647, w = 36, S = 1, R = 26, O = 38, k = 700, E = 72, C = 128, D = "-", T = /^xn--/, $ = /[^\0-\x7E]/, I = /[\x2E\u3002\uFF0E\uFF61]/g, F = { overflow: e(2013), "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": e(881) }, V = w - S, L = Math[e(1615)], U = String[e(1941)];
      function J(P) {
        throw new RangeError(F[P]);
      }
      function n0(P, p) {
        for (var b = e, y = [], z = P[b(1013)]; z--; )
          y[z] = p(P[z]);
        return y;
      }
      function i0(P, p) {
        var b = e, y = P[b(519)]("@"), z = "";
        y[b(1013)] > 1 && (z = y[0] + "@", P = y[1]), P = P[b(1081)](I, ".");
        var H = P[b(519)]("."), t0 = n0(H, p)[b(1541)](".");
        return z + t0;
      }
      function d0(P) {
        for (var p = e, b = [], y = 0, z = P[p(1013)]; y < z; ) {
          var H = P.charCodeAt(y++);
          if (H >= 55296 && H <= 56319 && y < z) {
            var t0 = P[p(1119)](y++);
            (t0 & 64512) == 56320 ? b[p(482)](((H & 1023) << 10) + (t0 & 1023) + 65536) : (b[p(482)](H), y--);
          } else b.push(H);
        }
        return b;
      }
      var a0 = function(p) {
        return String.fromCodePoint.apply(String, m(p));
      }, u0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : w;
      }, w0 = function(p, b) {
        return p + 22 + 75 * (p < 26) - ((b != 0) << 5);
      }, m0 = function(p, b, y) {
        var z = 0;
        for (p = y ? L(p / k) : p >> 1, p += L(p / b); p > V * R >> 1; z += w)
          p = L(p / V);
        return L(z + (V + 1) * p / (p + O));
      }, D0 = function(p) {
        var b = e, y = [], z = p[b(1013)], H = 0, t0 = C, o0 = E, C0 = p.lastIndexOf(D);
        C0 < 0 && (C0 = 0);
        for (var T0 = 0; T0 < C0; ++T0)
          p.charCodeAt(T0) >= 128 && J(b(1218)), y[b(482)](p[b(1119)](T0));
        for (var H0 = C0 > 0 ? C0 + 1 : 0; H0 < z; ) {
          for (var S0 = H, A0 = 1, V0 = w; ; V0 += w) {
            H0 >= z && J(b(1993));
            var v0 = u0(p[b(1119)](H0++));
            (v0 >= w || v0 > L((g - H) / A0)) && J(b(2229)), H += v0 * A0;
            var M0 = V0 <= o0 ? S : V0 >= o0 + R ? R : V0 - o0;
            if (v0 < M0) break;
            var Z0 = w - M0;
            A0 > L(g / Z0) && J(b(2229)), A0 *= Z0;
          }
          var $0 = y[b(1013)] + 1;
          o0 = m0(H - S0, $0, S0 == 0), L(H / $0) > g - t0 && J(b(2229)), t0 += L(H / $0), H %= $0, y.splice(H++, 0, t0);
        }
        return String[b(2195)][b(1001)](String, y);
      }, k0 = function(p) {
        var b = e, y = [];
        p = d0(p);
        var z = p.length, H = C, t0 = 0, o0 = E, C0 = !0, T0 = !1, H0 = void 0;
        try {
          for (var S0 = p[Symbol[b(1347)]](), A0; !(C0 = (A0 = S0[b(585)]())[b(1291)]); C0 = !0) {
            var V0 = A0.value;
            V0 < 128 && y[b(482)](U(V0));
          }
        } catch (Je) {
          T0 = !0, H0 = Je;
        } finally {
          try {
            !C0 && S0.return && S0[b(2166)]();
          } finally {
            if (T0) throw H0;
          }
        }
        var v0 = y[b(1013)], M0 = v0;
        for (v0 && y.push(D); M0 < z; ) {
          var Z0 = g, $0 = !0, Ee = !1, oe = void 0;
          try {
            for (var ce = p[Symbol[b(1347)]](), Le; !($0 = (Le = ce.next())[b(1291)]); $0 = !0) {
              var Re = Le.value;
              Re >= H && Re < Z0 && (Z0 = Re);
            }
          } catch (Je) {
            Ee = !0, oe = Je;
          } finally {
            try {
              !$0 && ce[b(2166)] && ce.return();
            } finally {
              if (Ee) throw oe;
            }
          }
          var te = M0 + 1;
          Z0 - H > L((g - t0) / te) && J(b(2229)), t0 += (Z0 - H) * te, H = Z0;
          var fe = !0, Fe = !1, me = void 0;
          try {
            for (var ue = p[Symbol[b(1347)]](), lr; !(fe = (lr = ue[b(585)]())[b(1291)]); fe = !0) {
              var hr = lr[b(1547)];
              if (hr < H && ++t0 > g && J(b(2229)), hr == H) {
                for (var ox = t0, cx = w; ; cx += w) {
                  var fx = cx <= o0 ? S : cx >= o0 + R ? R : cx - o0;
                  if (ox < fx) break;
                  var pr = ox - fx, vr = w - fx;
                  y[b(482)](U(w0(fx + pr % vr, 0))), ox = L(pr / vr);
                }
                y[b(482)](U(w0(ox, 0))), o0 = m0(t0, te, M0 == v0), t0 = 0, ++M0;
              }
            }
          } catch (Je) {
            Fe = !0, me = Je;
          } finally {
            try {
              !fe && ue[b(2166)] && ue[b(2166)]();
            } finally {
              if (Fe) throw me;
            }
          }
          ++t0, ++H;
        }
        return y.join("");
      }, J0 = function(p) {
        return i0(p, function(b) {
          var y = B;
          return T[y(857)](b) ? D0(b[y(1323)](4)[y(1698)]()) : b;
        });
      }, A = function(p) {
        return i0(p, function(b) {
          var y = B;
          return $[y(857)](b) ? "xn--" + k0(b) : b;
        });
      }, N = { version: e(2427), ucs2: { decode: d0, encode: a0 }, decode: D0, encode: k0, toASCII: A, toUnicode: J0 }, j = {};
      function Q(P) {
        var p = e, b = P.charCodeAt(0), y = void 0;
        return b < 16 ? y = "%0" + b.toString(16)[p(1954)]() : b < 128 ? y = "%" + b[p(506)](16)[p(1954)]() : b < 2048 ? y = "%" + (b >> 6 | 192)[p(506)](16)[p(1954)]() + "%" + (b & 63 | 128)[p(506)](16).toUpperCase() : y = "%" + (b >> 12 | 224)[p(506)](16)[p(1954)]() + "%" + (b >> 6 & 63 | 128).toString(16)[p(1954)]() + "%" + (b & 63 | 128)[p(506)](16)[p(1954)](), y;
      }
      function G(P) {
        for (var p = e, b = "", y = 0, z = P[p(1013)]; y < z; ) {
          var H = parseInt(P[p(2441)](y + 1, 2), 16);
          if (H < 128) b += String[p(1941)](H), y += 3;
          else if (H >= 194 && H < 224) {
            if (z - y >= 6) {
              var t0 = parseInt(P[p(2441)](y + 4, 2), 16);
              b += String.fromCharCode((H & 31) << 6 | t0 & 63);
            } else b += P[p(2441)](y, 6);
            y += 6;
          } else if (H >= 224) {
            if (z - y >= 9) {
              var o0 = parseInt(P[p(2441)](y + 4, 2), 16), C0 = parseInt(P[p(2441)](y + 7, 2), 16);
              b += String[p(1941)]((H & 15) << 12 | (o0 & 63) << 6 | C0 & 63);
            } else b += P.substr(y, 9);
            y += 9;
          } else b += P.substr(y, 3), y += 3;
        }
        return b;
      }
      function Z(P, p) {
        var b = e;
        function y(z) {
          var H = B, t0 = G(z);
          return t0[H(2277)](p.UNRESERVED) ? t0 : z;
        }
        return P[b(716)] && (P[b(716)] = String(P.scheme)[b(1081)](p[b(2068)], y).toLowerCase()[b(1081)](p[b(863)], "")), P[b(1604)] !== void 0 && (P[b(1604)] = String(P[b(1604)])[b(1081)](p[b(2068)], y)[b(1081)](p[b(1907)], Q).replace(p.PCT_ENCODED, c)), P[b(603)] !== void 0 && (P[b(603)] = String(P[b(603)])[b(1081)](p[b(2068)], y)[b(1698)]()[b(1081)](p.NOT_HOST, Q)[b(1081)](p[b(2068)], c)), P[b(1106)] !== void 0 && (P[b(1106)] = String(P[b(1106)])[b(1081)](p[b(2068)], y)[b(1081)](P[b(716)] ? p.NOT_PATH : p[b(2e3)], Q)[b(1081)](p.PCT_ENCODED, c)), P[b(1826)] !== void 0 && (P[b(1826)] = String(P.query)[b(1081)](p[b(2068)], y)[b(1081)](p[b(1890)], Q)[b(1081)](p[b(2068)], c)), P[b(1246)] !== void 0 && (P.fragment = String(P[b(1246)]).replace(p[b(2068)], y).replace(p[b(1825)], Q)[b(1081)](p[b(2068)], c)), P;
      }
      function X(P) {
        var p = e;
        return P[p(1081)](/^0*(.*)/, "$1") || "0";
      }
      function r0(P, p) {
        var b = e, y = P[b(2277)](p[b(1172)]) || [], z = h(y, 2), H = z[1];
        return H ? H.split(".")[b(2299)](X)[b(1541)](".") : P;
      }
      function s0(P, p) {
        var b = e, y = P.match(p[b(761)]) || [], z = h(y, 3), H = z[1], t0 = z[2];
        if (H) {
          for (var o0 = H[b(1698)]()[b(519)]("::")[b(1785)](), C0 = h(o0, 2), T0 = C0[0], H0 = C0[1], S0 = H0 ? H0.split(":")[b(2299)](X) : [], A0 = T0[b(519)](":").map(X), V0 = p[b(1172)].test(A0[A0[b(1013)] - 1]), v0 = V0 ? 7 : 8, M0 = A0.length - v0, Z0 = Array(v0), $0 = 0; $0 < v0; ++$0)
            Z0[$0] = S0[$0] || A0[M0 + $0] || "";
          V0 && (Z0[v0 - 1] = r0(Z0[v0 - 1], p));
          var Ee = Z0[b(2092)](function(te, fe, Fe) {
            var me = b;
            if (!fe || fe === "0") {
              var ue = te[te[me(1013)] - 1];
              ue && ue[me(2367)] + ue.length === Fe ? ue[me(1013)]++ : te[me(482)]({ index: Fe, length: 1 });
            }
            return te;
          }, []), oe = Ee.sort(function(te, fe) {
            return fe.length - te.length;
          })[0], ce = void 0;
          if (oe && oe[b(1013)] > 1) {
            var Le = Z0[b(1323)](0, oe.index), Re = Z0.slice(oe[b(2367)] + oe.length);
            ce = Le[b(1541)](":") + "::" + Re.join(":");
          } else ce = Z0[b(1541)](":");
          return t0 && (ce += "%" + t0), ce;
        } else return P;
      }
      var e0 = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, j0 = ""[e(2277)](/(){0}/)[1] === void 0;
      function F0(P) {
        var p = e, b = arguments[p(1013)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = {}, z = b[p(1820)] !== !1 ? v : d;
        b[p(1714)] === "suffix" && (P = (b[p(716)] ? b[p(716)] + ":" : "") + "//" + P);
        var H = P[p(2277)](e0);
        if (H) {
          j0 ? (y[p(716)] = H[1], y[p(1604)] = H[3], y[p(603)] = H[4], y[p(830)] = parseInt(H[5], 10), y[p(1106)] = H[6] || "", y[p(1826)] = H[7], y.fragment = H[8], isNaN(y[p(830)]) && (y.port = H[5])) : (y[p(716)] = H[1] || void 0, y[p(1604)] = P.indexOf("@") !== -1 ? H[3] : void 0, y.host = P.indexOf("//") !== -1 ? H[4] : void 0, y[p(830)] = parseInt(H[5], 10), y[p(1106)] = H[6] || "", y[p(1826)] = P[p(1280)]("?") !== -1 ? H[7] : void 0, y[p(1246)] = P[p(1280)]("#") !== -1 ? H[8] : void 0, isNaN(y.port) && (y[p(830)] = P.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? H[4] : void 0)), y[p(603)] && (y[p(603)] = s0(r0(y.host, z), z)), y.scheme === void 0 && y[p(1604)] === void 0 && y[p(603)] === void 0 && y[p(830)] === void 0 && !y[p(1106)] && y.query === void 0 ? y[p(1714)] = p(630) : y.scheme === void 0 ? y.reference = p(476) : y[p(1246)] === void 0 ? y[p(1714)] = p(1663) : y[p(1714)] = "uri", b[p(1714)] && b.reference !== "suffix" && b.reference !== y[p(1714)] && (y[p(1316)] = y[p(1316)] || "URI is not a " + b[p(1714)] + " reference.");
          var t0 = j[(b.scheme || y[p(716)] || "")[p(1698)]()];
          if (!b[p(1117)] && (!t0 || !t0[p(1117)])) {
            if (y[p(603)] && (b[p(1600)] || t0 && t0.domainHost)) try {
              y.host = N[p(612)](y[p(603)].replace(z.PCT_ENCODED, G)[p(1698)]());
            } catch (o0) {
              y[p(1316)] = y[p(1316)] || p(715) + o0;
            }
            Z(y, d);
          } else Z(y, z);
          t0 && t0[p(1503)] && t0[p(1503)](y, b);
        } else y[p(1316)] = y.error || p(1474);
        return y;
      }
      function L0(P, p) {
        var b = e, y = p.iri !== !1 ? v : d, z = [];
        return P[b(1604)] !== void 0 && (z[b(482)](P[b(1604)]), z[b(482)]("@")), P[b(603)] !== void 0 && z.push(s0(r0(String(P[b(603)]), y), y)[b(1081)](y[b(761)], function(H, t0, o0) {
          return "[" + t0 + (o0 ? "%25" + o0 : "") + "]";
        })), (typeof P[b(830)] == "number" || typeof P[b(830)] == "string") && (z[b(482)](":"), z[b(482)](String(P[b(830)]))), z[b(1013)] ? z[b(1541)]("") : void 0;
      }
      var g0 = /^\.\.?\//, W0 = /^\/\.(\/|$)/, ne = /^\/\.\.(\/|$)/, Q0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function N0(P) {
        for (var p = e, b = []; P.length; )
          if (P[p(2277)](g0)) P = P[p(1081)](g0, "");
          else if (P[p(2277)](W0)) P = P.replace(W0, "/");
          else if (P.match(ne)) P = P[p(1081)](ne, "/"), b.pop();
          else if (P === "." || P === "..") P = "";
          else {
            var y = P[p(2277)](Q0);
            if (y) {
              var z = y[0];
              P = P[p(1323)](z.length), b[p(482)](z);
            } else throw new Error(p(1567));
          }
        return b[p(1541)]("");
      }
      function z0(P) {
        var p = e, b = arguments[p(1013)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = b[p(1820)] ? v : d, z = [], H = j[(b[p(716)] || P[p(716)] || "")[p(1698)]()];
        if (H && H[p(877)] && H.serialize(P, b), P.host && !y[p(761)].test(P[p(603)])) {
          if (b[p(1600)] || H && H[p(1600)]) try {
            P[p(603)] = b[p(1820)] ? N[p(742)](P.host) : N[p(612)](P.host[p(1081)](y.PCT_ENCODED, G)[p(1698)]());
          } catch (C0) {
            P.error = P[p(1316)] || p(1815) + (b.iri ? p(2117) : p(1263)) + " via punycode: " + C0;
          }
        }
        Z(P, y), b.reference !== p(2460) && P[p(716)] && (z[p(482)](P[p(716)]), z.push(":"));
        var t0 = L0(P, b);
        if (t0 !== void 0 && (b[p(1714)] !== "suffix" && z.push("//"), z[p(482)](t0), P[p(1106)] && P[p(1106)].charAt(0) !== "/" && z[p(482)]("/")), P[p(1106)] !== void 0) {
          var o0 = P[p(1106)];
          !b[p(1374)] && (!H || !H.absolutePath) && (o0 = N0(o0)), t0 === void 0 && (o0 = o0[p(1081)](/^\/\//, p(2394))), z.push(o0);
        }
        return P.query !== void 0 && (z[p(482)]("?"), z[p(482)](P[p(1826)])), P[p(1246)] !== void 0 && (z[p(482)]("#"), z[p(482)](P[p(1246)])), z[p(1541)]("");
      }
      function Y0(P, p) {
        var b = e, y = arguments[b(1013)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, z = arguments[3], H = {};
        return !z && (P = F0(z0(P, y), y), p = F0(z0(p, y), y)), y = y || {}, !y[b(987)] && p.scheme ? (H[b(716)] = p[b(716)], H[b(1604)] = p[b(1604)], H[b(603)] = p[b(603)], H[b(830)] = p[b(830)], H.path = N0(p.path || ""), H[b(1826)] = p[b(1826)]) : (p[b(1604)] !== void 0 || p[b(603)] !== void 0 || p[b(830)] !== void 0 ? (H[b(1604)] = p[b(1604)], H[b(603)] = p.host, H[b(830)] = p[b(830)], H[b(1106)] = N0(p[b(1106)] || ""), H.query = p[b(1826)]) : (p[b(1106)] ? (p[b(1106)][b(1363)](0) === "/" ? H[b(1106)] = N0(p[b(1106)]) : ((P[b(1604)] !== void 0 || P[b(603)] !== void 0 || P[b(830)] !== void 0) && !P[b(1106)] ? H[b(1106)] = "/" + p.path : P[b(1106)] ? H[b(1106)] = P[b(1106)][b(1323)](0, P[b(1106)].lastIndexOf("/") + 1) + p.path : H[b(1106)] = p[b(1106)], H[b(1106)] = N0(H[b(1106)])), H[b(1826)] = p[b(1826)]) : (H[b(1106)] = P[b(1106)], p.query !== void 0 ? H.query = p[b(1826)] : H[b(1826)] = P[b(1826)]), H[b(1604)] = P[b(1604)], H[b(603)] = P[b(603)], H.port = P[b(830)]), H[b(716)] = P[b(716)]), H[b(1246)] = p[b(1246)], H;
      }
      function Ie(P, p, b) {
        var y = e, z = u({ scheme: y(1898) }, b);
        return z0(Y0(F0(P, z), F0(p, z), z, !0), z);
      }
      function jx(P, p) {
        var b = e;
        return typeof P === b(2203) ? P = z0(F0(P, p), p) : o(P) === "object" && (P = F0(z0(P, p), p)), P;
      }
      function Mx(P, p, b) {
        var y = e;
        return typeof P == "string" ? P = z0(F0(P, b), b) : o(P) === y(570) && (P = z0(P, b)), typeof p == "string" ? p = z0(F0(p, b), b) : o(p) === y(570) && (p = z0(p, b)), P === p;
      }
      function bn(P, p) {
        var b = e;
        return P && P.toString()[b(1081)](!p || !p[b(1820)] ? d[b(1449)] : v[b(1449)], Q);
      }
      function ve(P, p) {
        var b = e;
        return P && P.toString()[b(1081)](!p || !p[b(1820)] ? d[b(2068)] : v[b(2068)], G);
      }
      var Ke = { scheme: e(780), domainHost: !0, parse: function(p, b) {
        var y = e;
        return !p.host && (p[y(1316)] = p[y(1316)] || y(1461)), p;
      }, serialize: function(p, b) {
        var y = e, z = String(p[y(716)])[y(1698)]() === "https";
        return (p.port === (z ? 443 : 80) || p[y(830)] === "") && (p[y(830)] = void 0), !p[y(1106)] && (p[y(1106)] = "/"), p;
      } }, sr = { scheme: e(1203), domainHost: Ke[e(1600)], parse: Ke[e(1503)], serialize: Ke.serialize };
      function nr(P) {
        var p = e;
        return typeof P[p(2496)] === p(741) ? P[p(2496)] : String(P[p(716)])[p(1698)]() === p(929);
      }
      var We = { scheme: "ws", domainHost: !0, parse: function(p, b) {
        var y = e, z = p;
        return z.secure = nr(z), z[y(2429)] = (z.path || "/") + (z[y(1826)] ? "?" + z[y(1826)] : ""), z[y(1106)] = void 0, z[y(1826)] = void 0, z;
      }, serialize: function(p, b) {
        var y = e;
        if ((p[y(830)] === (nr(p) ? 443 : 80) || p[y(830)] === "") && (p[y(830)] = void 0), typeof p[y(2496)] == "boolean" && (p[y(716)] = p[y(2496)] ? "wss" : "ws", p[y(2496)] = void 0), p[y(2429)]) {
          var z = p[y(2429)][y(519)]("?"), H = h(z, 2), t0 = H[0], o0 = H[1];
          p[y(1106)] = t0 && t0 !== "/" ? t0 : void 0, p[y(1826)] = o0, p[y(2429)] = void 0;
        }
        return p[y(1246)] = void 0, p;
      } }, ir = { scheme: "wss", domainHost: We.domainHost, parse: We[e(1503)], serialize: We.serialize }, gn = {}, or = e(811) + "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", ie = e(1099), yn = n(n(e(654) + ie + "%" + ie + ie + "%" + ie + ie) + "|" + n(e(1330) + ie + "%" + ie + ie) + "|" + n("%" + ie + ie)), wn = e(1073), Sn = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", En = r(Sn, e(783)), Pn = e(531), kn = new RegExp(or, "g"), $e = new RegExp(yn, "g"), Cn = new RegExp(r(e(2011), wn, "[\\.]", e(2493), En), "g"), cr = new RegExp(r(e(2011), or, Pn), "g"), In = cr;
      function $x(P) {
        var p = e, b = G(P);
        return b[p(2277)](kn) ? b : P;
      }
      var fr = { scheme: e(1281), parse: function(p, b) {
        var y = e, z = p, H = z.to = z.path ? z[y(1106)][y(519)](",") : [];
        if (z[y(1106)] = void 0, z[y(1826)]) {
          for (var t0 = !1, o0 = {}, C0 = z[y(1826)][y(519)]("&"), T0 = 0, H0 = C0[y(1013)]; T0 < H0; ++T0) {
            var S0 = C0[T0][y(519)]("=");
            switch (S0[0]) {
              case "to":
                for (var A0 = S0[1][y(519)](","), V0 = 0, v0 = A0[y(1013)]; V0 < v0; ++V0)
                  H[y(482)](A0[V0]);
                break;
              case "subject":
                z[y(1952)] = ve(S0[1], b);
                break;
              case y(927):
                z[y(927)] = ve(S0[1], b);
                break;
              default:
                t0 = !0, o0[ve(S0[0], b)] = ve(S0[1], b);
                break;
            }
          }
          t0 && (z[y(1626)] = o0);
        }
        z.query = void 0;
        for (var M0 = 0, Z0 = H[y(1013)]; M0 < Z0; ++M0) {
          var $0 = H[M0][y(519)]("@");
          if ($0[0] = ve($0[0]), b.unicodeSupport) $0[1] = ve($0[1], b).toLowerCase();
          else try {
            $0[1] = N[y(612)](ve($0[1], b)[y(1698)]());
          } catch (Ee) {
            z[y(1316)] = z[y(1316)] || "Email address's domain name can not be converted to ASCII via punycode: " + Ee;
          }
          H[M0] = $0[y(1541)]("@");
        }
        return z;
      }, serialize: function(p, b) {
        var y = e, z = p, H = f(p.to);
        if (H) {
          for (var t0 = 0, o0 = H.length; t0 < o0; ++t0) {
            var C0 = String(H[t0]), T0 = C0.lastIndexOf("@"), H0 = C0[y(1323)](0, T0)[y(1081)]($e, $x)[y(1081)]($e, c)[y(1081)](Cn, Q), S0 = C0[y(1323)](T0 + 1);
            try {
              S0 = b[y(1820)] ? N[y(742)](S0) : N[y(612)](ve(S0, b)[y(1698)]());
            } catch (M0) {
              z[y(1316)] = z.error || y(2119) + (b.iri ? y(2117) : "ASCII") + y(1372) + M0;
            }
            H[t0] = H0 + "@" + S0;
          }
          z[y(1106)] = H[y(1541)](",");
        }
        var A0 = p[y(1626)] = p[y(1626)] || {};
        p[y(1952)] && (A0.subject = p[y(1952)]), p[y(927)] && (A0.body = p[y(927)]);
        var V0 = [];
        for (var v0 in A0)
          A0[v0] !== gn[v0] && V0[y(482)](v0.replace($e, $x).replace($e, c)[y(1081)](cr, Q) + "=" + A0[v0][y(1081)]($e, $x)[y(1081)]($e, c)[y(1081)](In, Q));
        return V0.length && (z[y(1826)] = V0[y(1541)]("&")), z;
      } }, Rn = /^([^\:]+)\:(.*)/, ur = { scheme: e(1979), parse: function(p, b) {
        var y = e, z = p.path && p[y(1106)].match(Rn), H = p;
        if (z) {
          var t0 = b[y(716)] || H[y(716)] || "urn", o0 = z[1][y(1698)](), C0 = z[2], T0 = t0 + ":" + (b[y(2410)] || o0), H0 = j[T0];
          H[y(2410)] = o0, H[y(722)] = C0, H[y(1106)] = void 0, H0 && (H = H0[y(1503)](H, b));
        } else H[y(1316)] = H[y(1316)] || y(1468);
        return H;
      }, serialize: function(p, b) {
        var y = e, z = b[y(716)] || p[y(716)] || y(1979), H = p[y(2410)], t0 = z + ":" + (b[y(2410)] || H), o0 = j[t0];
        o0 && (p = o0.serialize(p, b));
        var C0 = p, T0 = p[y(722)];
        return C0[y(1106)] = (H || b[y(2410)]) + ":" + T0, C0;
      } }, Fn = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, dr = { scheme: e(1325), parse: function(p, b) {
        var y = e, z = p;
        return z[y(609)] = z[y(722)], z.nss = void 0, !b.tolerant && (!z[y(609)] || !z[y(609)][y(2277)](Fn)) && (z[y(1316)] = z[y(1316)] || y(1355)), z;
      }, serialize: function(p, b) {
        var y = e, z = p;
        return z[y(722)] = (p[y(609)] || "")[y(1698)](), z;
      } };
      j[Ke[e(716)]] = Ke, j[sr[e(716)]] = sr, j[We[e(716)]] = We, j[ir[e(716)]] = ir, j[fr[e(716)]] = fr, j[ur[e(716)]] = ur, j[dr[e(716)]] = dr, a[e(2448)] = j, a[e(2179)] = Q, a[e(592)] = G, a[e(1503)] = F0, a[e(2121)] = N0, a[e(877)] = z0, a.resolveComponents = Y0, a[e(1674)] = Ie, a[e(1821)] = jx, a[e(2106)] = Mx, a.escapeComponent = bn, a.unescapeComponent = ve, Object[e(1441)](a, e(1584), { value: !0 });
    });
  }(Xe, Xe[i(1936)]), Xe[i(1936)]);
}
var zx, Fr;
function xr() {
  return Fr || (Fr = 1, zx = function i(x, t) {
    var a = B;
    if (x === t) return !0;
    if (x && t && typeof x == a(570) && typeof t == a(570)) {
      if (x[a(937)] !== t[a(937)]) return !1;
      var e, r, n;
      if (Array[a(1842)](x)) {
        if (e = x.length, e != t[a(1013)]) return !1;
        for (r = e; r-- !== 0; ) if (!i(x[r], t[r])) return !1;
        return !0;
      }
      if (x[a(937)] === RegExp) return x[a(466)] === t[a(466)] && x[a(1176)] === t[a(1176)];
      if (x.valueOf !== Object[a(2017)][a(2201)]) return x[a(2201)]() === t.valueOf();
      if (x[a(506)] !== Object.prototype.toString) return x.toString() === t[a(506)]();
      if (n = Object[a(522)](x), e = n.length, e !== Object[a(522)](t)[a(1013)]) return !1;
      for (r = e; r-- !== 0; ) if (!Object[a(2017)][a(1491)][a(1122)](t, n[r])) return !1;
      for (r = e; r-- !== 0; ) {
        var o = n[r];
        if (!i(x[o], t[o])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), zx;
}
var Hx, Nr;
function w2() {
  return Nr || (Nr = 1, Hx = function(x) {
    for (var t = B, a = 0, e = x[t(1013)], r = 0, n; r < e; )
      a++, n = x[t(1119)](r++), n >= 55296 && n <= 56319 && r < e && (n = x[t(1119)](r), (n & 64512) == 56320 && r++);
    return a;
  }), Hx;
}
var Vx, Or;
function Be() {
  var i = s;
  if (Or) return Vx;
  Or = 1, Vx = { copy: x, checkDataType: t, checkDataTypes: a, coerceToTypes: r, toHash: n, getProperty: f, escapeQuotes: u, equal: xr(), ucs2length: w2(), varOccurences: l, varReplace: d, schemaHasRules: v, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: g, getPathExpr: w, getPath: S, getData: k, unescapeFragment: C, unescapeJsonPointer: $, escapeFragment: D, escapeJsonPointer: T };
  function x(I, F) {
    F = F || {};
    for (var V in I) F[V] = I[V];
    return F;
  }
  function t(I, F, V, L) {
    var U = B, J = U(L ? 1162 : 1813), n0 = L ? U(642) : " && ", i0 = L ? "!" : "", d0 = L ? "" : "!";
    switch (I) {
      case "null":
        return F + J + U(1898);
      case U(1457):
        return i0 + U(2466) + F + ")";
      case "object":
        return "(" + i0 + F + n0 + U(1017) + F + J + '"object"' + n0 + d0 + U(2466) + F + "))";
      case U(688):
        return U(1053) + F + J + U(1186) + n0 + d0 + "(" + F + U(1836) + n0 + F + J + F + (V ? n0 + i0 + U(2360) + F + ")" : "") + ")";
      case U(986):
        return "(typeof " + F + J + '"' + I + '"' + (V ? n0 + i0 + "isFinite(" + F + ")" : "") + ")";
      default:
        return "typeof " + F + J + '"' + I + '"';
    }
  }
  function a(I, F, V) {
    var L = B;
    switch (I.length) {
      case 1:
        return t(I[0], F, V, !0);
      default:
        var U = "", J = n(I);
        J.array && J[L(570)] && (U = J.null ? "(" : "(!" + F + L(642), U += L(1017) + F + L(1158), delete J[L(1898)], delete J[L(1457)], delete J[L(570)]), J[L(986)] && delete J[L(688)];
        for (var n0 in J) U += (U ? L(1033) : "") + t(n0, F, V, !0);
        return U;
    }
  }
  var e = n(["string", i(986), i(688), i(741), i(1898)]);
  function r(I, F) {
    var V = i;
    if (Array[V(1842)](F)) {
      for (var L = [], U = 0; U < F[V(1013)]; U++) {
        var J = F[U];
        e[J] ? L[L[V(1013)]] = J : I === V(1457) && J === V(1457) && (L[L.length] = J);
      }
      if (L.length) return L;
    } else {
      if (e[F]) return [F];
      if (I === "array" && F === V(1457)) return [V(1457)];
    }
  }
  function n(I) {
    for (var F = i, V = {}, L = 0; L < I[F(1013)]; L++) V[I[L]] = !0;
    return V;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function f(I) {
    var F = i;
    return typeof I == F(986) ? "[" + I + "]" : o[F(857)](I) ? "." + I : "['" + u(I) + "']";
  }
  function u(I) {
    var F = i;
    return I.replace(c, F(778))[F(1081)](/\n/g, "\\n")[F(1081)](/\r/g, "\\r")[F(1081)](/\f/g, "\\f")[F(1081)](/\t/g, "\\t");
  }
  function l(I, F) {
    var V = i;
    F += "[^0-9]";
    var L = I[V(2277)](new RegExp(F, "g"));
    return L ? L[V(1013)] : 0;
  }
  function d(I, F, V) {
    var L = i;
    return F += L(1354), V = V.replace(/\$/g, L(1264)), I.replace(new RegExp(F, "g"), V + "$1");
  }
  function v(I, F) {
    var V = i;
    if (typeof I == V(741)) return !I;
    for (var L in I) if (F[L]) return !0;
  }
  function h(I, F, V) {
    var L = i;
    if (typeof I == "boolean") return !I && V != L(993);
    for (var U in I) if (U != V && F[U]) return !0;
  }
  function m(I, F) {
    var V = i;
    if (typeof I != V(741)) {
      for (var L in I) if (!F[L]) return L;
    }
  }
  function g(I) {
    return "'" + u(I) + "'";
  }
  function w(I, F, V, L) {
    var U = i, J = V ? "'/' + " + F + (L ? "" : U(1055)) : L ? "'[' + " + F + U(2041) : "'[\\'' + " + F + U(2187);
    return E(I, J);
  }
  function S(I, F, V) {
    var L = g(V ? "/" + T(F) : f(F));
    return E(I, L);
  }
  var R = /^\/(?:[^~]|~0|~1)*$/, O = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function k(I, F, V) {
    var L = i, U, J, n0, i0;
    if (I === "") return L(940);
    if (I[0] == "/") {
      if (!R.test(I)) throw new Error(L(2185) + I);
      J = I, n0 = "rootData";
    } else {
      if (i0 = I[L(2277)](O), !i0) throw new Error(L(2185) + I);
      if (U = +i0[1], J = i0[2], J == "#") {
        if (U >= F) throw new Error(L(1686) + U + L(728) + F);
        return V[F - U];
      }
      if (U > F) throw new Error(L(855) + U + L(728) + F);
      if (n0 = L(1513) + (F - U || ""), !J) return n0;
    }
    for (var d0 = n0, a0 = J.split("/"), u0 = 0; u0 < a0[L(1013)]; u0++) {
      var w0 = a0[u0];
      w0 && (n0 += f($(w0)), d0 += L(1033) + n0);
    }
    return d0;
  }
  function E(I, F) {
    var V = i;
    return I == '""' ? F : (I + V(2343) + F)[V(1081)](/([^\\])' \+ '/g, "$1");
  }
  function C(I) {
    return $(decodeURIComponent(I));
  }
  function D(I) {
    return encodeURIComponent(T(I));
  }
  function T(I) {
    var F = i;
    return I.replace(/~/g, "~0")[F(1081)](/\//g, "~1");
  }
  function $(I) {
    var F = i;
    return I[F(1081)](/~1/g, "/")[F(1081)](/~0/g, "~");
  }
  return Vx;
}
var Ux, qr;
function nn() {
  if (qr) return Ux;
  qr = 1;
  var i = Be();
  Ux = x;
  function x(t) {
    var a = B;
    i[a(2014)](t, this);
  }
  return Ux;
}
var Zx = { exports: {} }, Ar;
function S2() {
  var i = s;
  if (Ar) return Zx[i(1936)];
  Ar = 1;
  var x = Zx[i(1936)] = function(e, r, n) {
    var o = i;
    typeof r == o(1806) && (n = r, r = {}), n = r.cb || n;
    var c = typeof n == o(1806) ? n : n[o(1693)] || function() {
    }, f = n[o(648)] || function() {
    };
    t(r, c, f, e, "", e);
  };
  x[i(735)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[i(2139)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[i(2443)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x.skipKeywords = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, r, n, o, c, f, u, l, d, v) {
    var h = i;
    if (o && typeof o == h(570) && !Array[h(1842)](o)) {
      r(o, c, f, u, l, d, v);
      for (var m in o) {
        var g = o[m];
        if (Array.isArray(g)) {
          if (m in x[h(2139)])
            for (var w = 0; w < g[h(1013)]; w++) t(e, r, n, g[w], c + "/" + m + "/" + w, f, c, m, o, w);
        } else if (m in x[h(2443)]) {
          if (g && typeof g == "object")
            for (var S in g) t(e, r, n, g[S], c + "/" + m + "/" + a(S), f, c, m, o, S);
        } else (m in x[h(735)] || e.allKeys && !(m in x[h(1548)])) && t(e, r, n, g, c + "/" + m, f, c, m, o);
      }
      n(o, c, f, u, l, d, v);
    }
  }
  function a(e) {
    var r = i;
    return e[r(1081)](/~/g, "~0")[r(1081)](/\//g, "~1");
  }
  return Zx[i(1936)];
}
var Bx, Tr;
function tr() {
  var i = s;
  if (Tr) return Bx;
  Tr = 1;
  var x = y2(), t = xr(), a = Be(), e = nn(), r = S2();
  Bx = n, n.normalizeId = S, n[i(1406)] = m, n[i(1554)] = R, n[i(1190)] = O, n[i(1901)] = d, n[i(540)] = o;
  function n(k, E, C) {
    var D = i, T = this[D(2491)][C];
    if (typeof T == "string")
      if (this._refs[T]) T = this[D(2491)][T];
      else return n[D(1122)](this, k, E, T);
    if (T = T || this._schemas[C], T instanceof e) return d(T[D(540)], this[D(2397)].inlineRefs) ? T.schema : T[D(454)] || this[D(816)](T);
    var $ = o[D(1122)](this, E, C), I, F, V;
    return $ && (I = $[D(540)], E = $[D(1360)], V = $[D(1925)]), I instanceof e ? F = I.validate || k[D(1122)](this, I.schema, E, void 0, V) : I !== void 0 && (F = d(I, this[D(2397)].inlineRefs) ? I : k[D(1122)](this, I, E, void 0, V)), F;
  }
  function o(k, E) {
    var C = i, D = x[C(1503)](E), T = g(D), $ = m(this._getId(k[C(540)]));
    if (Object[C(522)](k[C(540)]).length === 0 || T !== $) {
      var I = S(T), F = this[C(2491)][I];
      if (typeof F == C(2203)) return c[C(1122)](this, k, F, D);
      if (F instanceof e)
        F[C(454)] || this._compile(F), k = F;
      else if (F = this._schemas[I], F instanceof e) {
        if (F[C(454)] || this._compile(F), I == S(E)) return { schema: F, root: k, baseId: $ };
        k = F;
      } else return;
      if (!k[C(540)]) return;
      $ = m(this[C(1657)](k.schema));
    }
    return u[C(1122)](this, D, $, k[C(540)], k);
  }
  function c(k, E, C) {
    var D = i, T = o.call(this, k, E);
    if (T) {
      var $ = T[D(540)], I = T.baseId;
      k = T[D(1360)];
      var F = this[D(1657)]($);
      return F && (I = R(I, F)), u.call(this, C, I, $, k);
    }
  }
  var f = a[i(866)](["properties", "patternProperties", i(909), i(1057), i(616)]);
  function u(k, E, C, D) {
    var T = i;
    if (k[T(1246)] = k[T(1246)] || "", k[T(1246)][T(1323)](0, 1) == "/") {
      for (var $ = k[T(1246)].split("/"), I = 1; I < $.length; I++) {
        var F = $[I];
        if (F) {
          if (F = a[T(1512)](F), C = C[F], C === void 0) break;
          var V;
          if (!f[F] && (V = this[T(1657)](C), V && (E = R(E, V)), C[T(1655)])) {
            var L = R(E, C.$ref), U = o[T(1122)](this, D, L);
            U && (C = U.schema, D = U[T(1360)], E = U[T(1925)]);
          }
        }
      }
      if (C !== void 0 && C !== D[T(540)]) return { schema: C, root: D, baseId: E };
    }
  }
  var l = a[i(866)](["type", i(1727), i(685), i(1585), i(954), i(1633), i(523), i(1665), i(1583), i(1618), i(1706), i(1415), i(1766), i(1435), i(909)]);
  function d(k, E) {
    if (E === !1) return !1;
    if (E === void 0 || E === !0) return v(k);
    if (E) return h(k) <= E;
  }
  function v(k) {
    var E = i, C;
    if (Array[E(1842)](k)) {
      for (var D = 0; D < k[E(1013)]; D++)
        if (C = k[D], typeof C == E(570) && !v(C)) return !1;
    } else for (var T in k)
      if (T == "$ref" || (C = k[T], typeof C == E(570) && !v(C))) return !1;
    return !0;
  }
  function h(k) {
    var E = i, C = 0, D;
    if (Array[E(1842)](k)) {
      for (var T = 0; T < k[E(1013)]; T++)
        if (D = k[T], typeof D == "object" && (C += h(D)), C == 1 / 0) return 1 / 0;
    } else for (var $ in k) {
      if ($ == E(1655)) return 1 / 0;
      if (l[$]) C++;
      else if (D = k[$], typeof D == E(570) && (C += h(D) + 1), C == 1 / 0) return 1 / 0;
    }
    return C;
  }
  function m(k, E) {
    E !== !1 && (k = S(k));
    var C = x.parse(k);
    return g(C);
  }
  function g(k) {
    return x.serialize(k).split("#")[0] + "#";
  }
  var w = /#\/?$/;
  function S(k) {
    var E = i;
    return k ? k[E(1081)](w, "") : "";
  }
  function R(k, E) {
    var C = i;
    return E = S(E), x[C(1674)](k, E);
  }
  function O(k) {
    var E = i, C = S(this[E(1657)](k)), D = { "": C }, T = { "": m(C, !1) }, $ = {}, I = this;
    return r(k, { allKeys: !0 }, function(F, V, L, U, J, n0, i0) {
      var d0 = E;
      if (V !== "") {
        var a0 = I[d0(1657)](F), u0 = D[U], w0 = T[U] + "/" + J;
        if (i0 !== void 0 && (w0 += "/" + (typeof i0 == "number" ? i0 : a.escapeFragment(i0))), typeof a0 == "string") {
          a0 = u0 = S(u0 ? x[d0(1674)](u0, a0) : a0);
          var m0 = I[d0(2491)][a0];
          if (typeof m0 == d0(2203) && (m0 = I[d0(2491)][m0]), m0 && m0[d0(540)]) {
            if (!t(F, m0[d0(540)])) throw new Error('id "' + a0 + '" resolves to more than one schema');
          } else if (a0 != S(w0))
            if (a0[0] == "#") {
              if ($[a0] && !t(F, $[a0])) throw new Error('id "' + a0 + d0(509));
              $[a0] = F;
            } else I[d0(2491)][a0] = w0;
        }
        D[V] = u0, T[V] = w0;
      }
    }), $;
  }
  return Bx;
}
var Kx, Dr;
function rr() {
  if (Dr) return Kx;
  Dr = 1;
  var i = tr();
  Kx = { Validation: a(x), MissingRef: a(t) };
  function x(e) {
    var r = B;
    this[r(820)] = "validation failed", this[r(1483)] = e, this[r(769)] = this[r(2474)] = !0;
  }
  t.message = function(e, r) {
    var n = B;
    return n(751) + r + n(1810) + e;
  };
  function t(e, r, n) {
    var o = B;
    this[o(820)] = n || t.message(e, r), this[o(944)] = i[o(1554)](e, r), this.missingSchema = i[o(2327)](i[o(1406)](this[o(944)]));
  }
  function a(e) {
    var r = B;
    return e[r(2017)] = Object.create(Error[r(2017)]), e[r(2017)][r(937)] = e, e;
  }
  return Kx;
}
function Cx() {
  var i = ["3rdParty", "  }  ", "base64url", " , params: { limit: ", "'].definition; var ", "nodeIndexes", " || validate.schema", "tDescription", "languageDetector", "listeners", "toQuotedString", "_setupTimeout", "none", "checkDataTypes", "uri-reference", "PCT_ENCODED", "markConsumerBinding", "fallbackRequestHandler", "abs", "yih", '";  ', ";if (", "lng", "brand", " && self._opts.unknownFormats.indexOf(", "#FF0066", "setNodeTitle", "#00CC33", "user", "resources/read", "#CC0033", "addEventListener", "arrayToEnum", ".then", " else ", "reason", " === 0 || ", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "overloadTranslationOptionHandler", "reduce", "setPrototypeOf", "yrs", "RequestTimeout", "getDefinition", "response", "getConnectionToNodeInternal", " = errors; ", "#33CC00", "$t(", "refs", "finished", " != 'string') || ", ") - division", "equal", "innerType", "stateUpdate", "has", " ) : ( (", "Converting circular structure to JSON", "sendResourceUpdated", "[^\\%\\/\\@]", "Request timed out", "jsonPointers", "_regex", "Unicode", "unbind", "Email address's domain name can not be converted to ", "connecting", "removeDotSegments", "men", "interpolate", "exclusiveMaximum", " , schema: false , parentSchema: validate.schema", "read", "compile", "isTop", "_onerror", "padEnd", "InvalidParams", "sdppp://", "roots/list", "Failed to send an error response: ", '" was not yet loaded', "callValidate", " == +", ".length; ", "arrayKeywords", "int", "images", "filter", ") continue; ", "regExpMap", " , (dataPath || '')", ") {   var err =   ", ".call(this, ", "checkDataType", " &&   Object.prototype.hasOwnProperty.call(", "broadcastReceived", "ajp", "nan", "partial", "valid", " == 'object' && Array.isArray(", "Server does not support notifying about resources (required for ", " == 'boolean' || ", "setupStoreBinding", "cleanupStreamHandlers", "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "registerDirectRequestHandlerGeneric", "custom", "=0; ", "isCUID", "$schema must be a string", "return", ") vErrors.length = ", "[\\/\\?]", "_getType", "', missingProperty: '", "setComfyOrgAPIKey", "Store not found for current node ", "Store not found for ", "pendingCount", "50868dxFCmU", "fewer", "parseInt", "invalid_union_discriminator", "pctEncChar", "Workflow not found", "setState", "#CC3366", ` , message: 'should pass "`, "; if (", "Invalid JSON-pointer: ", "val is not a non-empty string or a valid number. val=", " + '\\']'", "newlayer_curlayer", "usedKey", "documentElement", "lte", '.schemaPath = "', " } if (", "         , parentSchema: validate.schema", "fromCodePoint", "common", "addPostProcessor", "responseSchema", "negative", "is an invalid additional property", "valueOf", "217KioVAV", "string", "curlayer_curlayer", "prefix", " , validate.schema", "hasDefaultValue", "removeConnection", "bindProducer", " = RULES.custom['", "broadcastManager", "languageChanging", "{2}", "mergeObjectSync", " var isAdditional", "addIssue", "posterIdentifier", "inlineRefs", "createInstance", "undefined", " == 'function' ? ", "PluralRules", "ZodString", ".errors; else vErrors = vErrors.concat(", "stringify", "Edge references unknown target node: ", "key '", "workflow-run", "overflow", " === 1) ", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "pst", " = true; if ( ", "widgets", `"' `, "dfsInterval", "graphChanged", "_processInputParams", "__proto__", " after ", "getter", "missingRefs", "getPathExpr", "store", "Node definition not found for current node ", "streamManager", "optional", "]) ", "[A-Za-z]", "acy", "auz", "name", "ZodReadonly", "workflow", "_addCheck", " === null) ", " }; return validate;", "addSchema", "never", "removeMessageEventListener", "actionManager", "setLimit", "rules", "parent schema must have all required keywords: ", "{0,5}", ", received '", "createAsyncIterator", "#FFCC33", "nodeProxies", ") break; } ", "minValue", "nonpositive", "isFinite", "definition", "uiWeight", ") || ", "match", "invalid_union", "isNullable", "getCanonicalLocales", "resource", "dataPathArr", "elicitInput", "reconnected", "coerced", "initAsync", '$ref: keywords ignored in schema at path "', " } if (errors === ", "getRegisteredActions", "addFormat", "_any", "isCIDR", "add", "options.loadSchema should be a function", "setInterval", "streamIterator", " = true; if (", "catchValue", "map", "' } ", "else", "passthrough", "messages", " , message: 'can\\'t resolve reference ", "backendConnector", "too_big", "#0000CC", " = undefined; ", "__cycle__", "catchall", "[^\\%]", " than ", "hasPath", "alwaysFormat", "unrecognized_keys", "res", "localRefs", "Received a progress notification for an unknown token: ", "schema should be object or boolean", "init: no languageDetector is used and no lng is defined", "separator", "detail", "ckb", "errorDataPath", "void", "Client does not support listing roots (required for ", "normalizeId", "invalid_return_type", "default is ignored for: ", "ZodOptional", "Already connected to node ", "varOccurences", "#CC00CC", "property", "endpoint", " } else { ", "rejectImage", " = errors; var ", "ZodUnknown", "initImmediate", ".errors); errors = vErrors.length; } ", "yhd", " + ", "send", "empty", "mountedEndpoints", "_errors", " } else {  for (var ", "sdppp/streamResponse", "[\\:\\/\\?\\#\\[\\]\\@]", "currentNodeId", "maxDate", ") { ", "1490WXsPFo", "WARNING DEPRECATED: ", "less than", "12fjqiRF", "style", "notice", "isFinite(", "ValidationError", "exactLength", "; var ", "gte", "describe", " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ", "index", "assertNever", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", " ( ", ")) {  ", "currency", "escape", "validateActionRequest", "Action ", "Error in direct request:", "mcpMesh", "outgoing", " = e.errors; else throw e; } ", " in key: ", "fallbackNotificationHandler", "Invalid date", "forwarded", "zero", "DEBUG", "parseMissingKeyHandler", "notifications/initialized", "comfyAPI", "minutes", "/type", "allOf", "valueType", "initializeConsumer", "/%2F", "addRule", "state", "_opts", "removeDefault", 'schema with key or id "', "requestIdSeq", " , schema: validate.schema", " if (errors === 0) return data;           ", "tools", "invalid_intersection_types", ".length ", "abh", "setupConnectionCloseHandler", "_capabilities", "usePattern", "nid", "You are passing an undefined module! Please check the object you are passing to i18next.use()", "extendTranslation", "_compilations", "mountTo", "lngs", "querySelector", "no plural rule found for: ", " === null || ", "after app.queuePrompt errors: ", "this", "flatten", "ZodBigInt", " else if (", "sendStreamData", "messagePoster", ", (dataPath || '')", "2.1.0", "warning", "resourceName", "ZodSet", "unescapePrefix", "pluralResolver", "context", '"failed to compile', " = defaults[", "protocolVersion", "removeNamespaces", "#33CCCC", "setupConnectionHandlers", "code", "substr", "missingKeyHandler", "propsKeywords", "_schemas", "getRule", "strong", "http://json-schema.org/schema", "SCHEMES", "text", "discriminator", "changeLanguage", "ParseError", "storage", "not_finite", "_meta", "#33CC66", "Validation", "$comment", " } else {  errors = ", "suffix", "duration", "%c ", "[object Number]", "cache", "] = ", "Array.isArray(", "getClientCapabilities", "hasResourceBundle", "added", "regexpUnescape", "logger", "waitingReads", "#00CCCC", "validation", "#CC9933", "isConnected", "prompts/list", "localeCompare", "2025-03-26", "then", "Invalid literal value, expected ", "nonstrict", "getPrototypeOf", " != 'boolean') ", "_pendingDebouncedNotifications", "extendRefs", "implementInternalAction", " == 'number' ? ( (", "merge", " == 'object' && !(", "_refs", "var default", '[\\"]', " return errors === 0;       ", "use", "secure", " has duplicate value ", " Object.keys(", "assertNotificationCapability", " else throw new ValidationError(vErrors); ", "mounted", "isValidLookup", "; if (vErrors !== null) { if (", "Core schema meta-schema", "queueLoad", "[\\:\\@\\/\\?]", "from", "appendNamespaceToMissingKey", "getItem", "clone", " , params: { additionalProperty: '", " , params: { propertyName: '", "at most", "invalid_type", "if ( ", ".schema = ", "critical", "connection", "timeoutId", "fail", "useDefaults", "init: i18next is already initialized. You should call init just once!", "var division", "Number must be ", " = undefined;", "Error in broadcast handler for ", "queue_remaining", "encountered", " = errors;  ", "validate", "#CC3300", "notifications/cancelled", "ZodIntersection", ") == -1 ", "DateTimeFormat", "errs__", "defaultVariables", "avl", "parsedType", "]); ", "execution_interrupted", "source", "click", "sdpppToken", "ordinal", " - no connection available", "exists", "~standard", " , message: 'should be multiple of ", "initializeProducer", "selectColor", "relative", "min", "_instructions", "peo", "ZodError", "count", "push", "([+-]\\d{2}:?\\d{2})", "https://sdppp-api.zombee.tech/api/", "registerActionHandler", "emit", ".length == 1) { ", "auto", "node", "label", "_timeoutInfo", " , params: { pattern:  ", "humanize", "typ", "nullable", "loadGraphData", "setResolvedLanguage", "pending", "vip", "subscribe", "Array must contain ", "_limit", ") {  var err =   ", "aec", "colors", "toString", " not found for node ", "strictNumbers", '" resolves to more than one schema', "json", "formatters", "&filename=", "Internal error", "isIP", "maxParallelReads", "mcp-mesh-router", "values", "ZodEnum", "split", "other", "alert", "keys", "minProperties", "hasLoadedNamespace", "sdppp_widgetable_title", "exactly", " else {   ", '$ref: validation keywords used in schema at path "', "prepareLoading", " instanceof RegExp) && ", "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", "cacheUserLanguage", "lowerCaseLng", " , params: { failingKeyword: ", "newlayer_canvas", "and", "#3399FF", "$data", "ZodFunction", "schema", "sdppp", "freeze", " var ", "queuePrompt", "resolveRunImages", "keyword", "precision", "connectionManager", "coerceTypes", "cimode", "openWorkflows", "]] !== undefined ", "addResourceBundle", "assertRequestHandlerCapability", "date", "getScriptPartFromCode", "obj", "self", "reboot", "  var err =   ", "http://json-schema.org/draft-07/schema#", "_requestHandlerAbortControllers", "addResource", "isConnectedTo", "regex", "close", " && ( ", "description", "getNodeStore", "object", "disconnect", "getResource", "del", " (division", "ydd", "coerceToTypes", "escapeValue", " === false || ", "maxValue", "ZodMap", "No backend was added via i18next.use. Will not load resources.", "/then", "favorites", "]] === undefined ", "next", "contextualErrorMap", "default is ignored in the schema root", " character(s)", "keyPrefix", "locale", "'then'", "pctDecChars", "getConnectedNodeIds", "Keyword ", "translate", "escapeQuotes", "pingConnection", "aeb", "_onrequest", "; }", "userDefinedKeySeparator", "external", "host", "; else vErrors = null; }  ", "protocol", "Required", "_parse", "inline", "uuid", "element", "formatter", "toASCII", ".dataPath = (dataPath || '') + ", "preload", "tried", "definitions", "translation", "stack", "unicode", " = false;for (var ", "userDefinedNsSeparator", "node_id", "initialize", "8101445CrDhWP", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "ZodObject", "aborted", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "pingInterval", "same-document", "resources", "bindings", "462HHujPo", "assertEqual", "ZodDefault", ")) { if (vErrors === null) vErrors = ", "async schema in sync schema", "#FF0033", "createAbortHandler", " var startErrs", " appears unhealthy:", " || ", "nonempty", "safe", "spa", "every", " == 'boolean') ", "post", "\\' is invalid' ", "listenMessageCallback", "]; if (", "isULID", "_options", "%[EFef]", "logging", "maxReplaces", "registerCapabilities", " == ", "A request handler for ", "Node ", "Not a ZodError: ", "$id", "env", "++) { var ", "isRoot", "server", "removeItem", "nanoid", "notifications/resources/list_changed", "#6600FF", "zod", "Invalid forward path for proxy action", "applyPostProcessor", ".length <= ", "success", "getPath", "setRequestHandler", "updateMissing", "useColors", "findPathInternal", ".type", " must be number or boolean", "registerDirectRequestHandler", "rootId", "pattern", "fcName", " = true , j; if (i > 1) { ", "integer", "setupAbortHandler", "hasConsumerBinding", "action", "usedLng", " = false; else {", "joinArrays", " ) ", "skipOnVariables", "meta-schema not available", "react", "less than or equal to", "setupStreamHandlers", "#9900FF", "ads", "invalid_date", "notifications/prompts/list_changed", "extend", "errSchemaPath", "inclusive", "registerHandler", "isInitializing", "promise", "step", "regExpQueue", "notifications/message", "offset", "Host's domain name can not be converted to ASCII via punycode: ", "scheme", "messageQueue", "cidr", "#3366CC", "forEach", "refinement", "nss", "returnObjects", "shu", " === null || (", "#0066CC", " if (Array.isArray(", " levels up, current level is ", "ZodTuple", "userAgent", "initializeResponseQueue", "one", "fallbackNS", "_limitLength", "keywords", "_cleanupTimeout", "compositeRule", " !== parseInt(division", `" keyword validation' `, "create", "boolean", "toUnicode", " for nesting ", "=startErrs", "2572bLpCRV", "node_errors", "ZodEffects", "Operation was aborted", "setupNotificationHandler", "ZodUnion", "can't resolve reference ", "ayl", "  )  ", " !== undefined) { ", "schemaErrorMap", " , params: {} ", "#CC0000", " if (errors === ", "#66CC33", "edges", "IPV6ADDRESS", " is already defined", " , params: { format:  ", "exactly equal to ", "pluralSeparator", " = errors === errs_", "connectionMonitor", "millisecond", "ajv", "NumberFormat", "isInt", "base64", " if (typeof itemIndices[item] == 'number') { ", "signal", "widgetableStructure", " return data; ", "ping", "\\$&", "isObject", "http", "You are passing a wrong module! Please check the object you are passing to i18next.use()", " = false; break outer; } } } ", '[\\"\\\\]', "hour", "_requestHandlers", " } } ", "{0,1}", "execution_success", "` could not be extracted from all schema options", "' , dataPath: (dataPath || '') + ", "monitoringIntervals", ".data = ", "Failed to send cancellation: ", "Error sending store update for ", "statusText", "files", " = false; else { ", "year", "under", "float", "_progressHandlers", "tools/list", " if (schema", "statements", " || Object.keys(", "#33CCFF", "parentElement", "meta", "sourceCode", " is loaded but ", "[A-Za-z0-9\\-\\.\\_\\~", "idx", "interpolator", "168900BmmBzS", "setupStreamRequestHandler", "_compile", "namespace", "ZodLazy", "extensionManager", "message", " , params: { allowedValue: schema", "addMessageEventListener", "reloadResources", " = true; else if (typeof ", " , message: 'should be ", "api", "onerror", "compiling", "   ", "port", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "keyword schema is invalid: ", "clientInfo", "createGlobalDispatcherForType", "^\\[?(", "_addSchema", " && !", '" ignored in schema at path "', "channel", "types", " self._opts.$comment(", "shorter", "actionHandlers", "ZodBoolean", "Validation failed but no issues detected.", " !== undefined && ( typeof ", "dataLevel", '" as the namespace "', "var refVal", " validate.errors = vErrors; return false; ", "regexp", " = await ", " var validate = ", "extractFromKey", "Cannot access data ", "abort", "test", "prompt_id", "init", "typeName", ".validate; var ", "symbol", "NOT_SCHEME", "acm", "loadSchema", "toHash", "safeParseAsync", "getConnectionCount", "startsWith", ")) ", "bbz", "/else", "removeEventListener", " is present' ", "getUsedParamsDetails", "clearItems", "serialize", "ZodVoid", "local", " , schema: ", "Invalid input", " must be number", "defaultNS", "longer", "renderer", "transport", "pathname", "No edge defined from ", "validateKeyword", "addLookupKeys", "]; ", "abv", "notifications/roots/list_changed", "schemaUnknownRules", "maxSize", "comfy-user", "sdppp/abort", "$schema", " = errors;var ", "sec", " !== undefined && typeof ", "isLanguageChangingTo", " if (", "ZodNull", "defaultMeta", "decline", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", "resolveImage", "enum", "process", "ZodCatch", " , message: 'boolean schema is false' ", "isInteger", "comfy-uxp", " === '' ", ".length , ", "Failed to send response: ", "connect", "reset", "minSize", "languages", ".type || 'string'; if (", "\\%25|\\%(?!", "&#x2F;", " = equal(", "defaults", "body", "Server does not support prompts (required for ", "wss", "ZodSymbol", "MCP error ", "#0033CC", "_oninitialize", " , message: 'should have ", "setupBroadcastHandler", "getAllBindings", "constructor", "skips", 'unknown format "', "rootData", "removeResourceBundle", "options", "isPersisted", "missingRef", " var schemaExcl", "time", "ref/prompt", "superRefine", "handleDirectProxyForward", "patternProperties", "status", "isEmail", "sourceType", "minLength", "augment", "getRegExp", "fallbackLng", "initialized", "ignoreJSONStructure", "#/definitions/nonNegativeInteger", "macro", "&amp;", "weeks", "?\\]?$", "getClientVersion", "useCustomRule", "assistant", '" already exists', "registerBroadcastHandler", "passContext", "pluralRulesCache", "setProperty", "acw", "passingSchemas", "formatSeparator", "skipCopy", "nestingPrefix", "#FF33CC", "rest", "over", "catch", "__DEFAULT__", "detection", "async ", "_formats", "number", "tolerant", "loadLanguages", "workflows", "prompts/get", "splice", "&gt;", "not", " && !(", "keySeparator", "dirty", "errorsText", "formatArgs", "[0]; ", "nest", "apply", "root.refVal[0]", "newdoc_canvas", "Values", "createStreamState", " } ", "maxRetries", " , message: 'should match exactly one schema in oneOf' ", "Action handler ", "isBase64", "objectKeys", "invalid_literal", "length", "afb", "supportedLngs", "backend", "typeof ", ".validate; } if (  ", "jsonStringifyReplacer", " , message: 'should be equal to constant' ", "request", "needsPlural", "1712344tALktB", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", "isTime", "logging/setLevel", "addMetaSchema", "loading namespace ", "RULES", "handleConnectionClose", "detectCycles", "fallback", " && ", "warn", "schemaHasRules", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "sendLoggingMessage", "sendAbortedResponse", "sessionId", "items", "listMode", "isNaN", "range", "prepend", "content", "errToObj", " = 'then'; ", "[\\:\\@]", "contains", "syncWorkflows", "schemas", "select", "(typeof ", "#FF3399", ".replace(/~/g, '~0').replace(/\\//g, '~1')", " + '", "dependencies", "getFallbackCodes", " === false) ", "postProcess", "uxpHost", "disable", "api/view?type=", "forward", "async format in sync schema", "destroy", "loaded namespace ", "Comfy.userId", "isInitialized", "missed to pass in variable ", "(\\.\\d+)?", "graphInstance", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "client", ` , message: 'should match format "`, "emoji", " , params: { passingSchemas: ", "Connection appears to be disconnected", "ref/resource", "parent", "replace", "entries", "#CC0099", "escapeFragment", "sqr", "reject", ") { for (var ", "safeParse", "getCurrentNodeId", "newlayer_selection", "Internal ZodObject error: invalid unknownKeys value.", " = 0; ", "' : '", "second", "cacheInBuiltFormats", "properties ", ", '", "ulid", "[0-9A-Fa-f]", "dataType", "contentEncoding", "_exclusiveLimit", "ZodNativeEnum", " == errors) { ", ".test(", "path", "app", "dir", "missing", "Error closing connection to ", "parentData", "cuid", "var customRule", "exclude", " !== undefined) ; ", ".async; ", "unicodeSupport", "objectValues", "charCodeAt", "appendNamespaceToCIMode", "stopSequence", "call", "_def", "processCode", ") && (missing", "notifications/tools/list_changed", "languageOnly", "MissingRef", "+\\.", "workflowManager", "_parseAsync", "插件可能正在拦截 PS 快捷键... ", "connections", "validateHandlerType", "keyType", "color: ", " = typeof ", " var err = ", " var async", "timeout", "formats", "#0033FF", "assertIs", "(?:", "usedNS", " }  ", " === '' || ", " != 'undefined' && ", "lastIndex", "); if (!", " {} ", "simplifyPluralSuffix", "#/definitions/simpleTypes", "~validate", "convert widget {0} failed:", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "readingCalls", ' !== "object")', "missed to resolve ", "isProducer", "unknownKeys", " !== ", "dataPath", "stream", "toResolveHierarchy", "onClose", ` , message: 'should match "' + `, "cuid2", "); errors = vErrors.length;  for (var ", ` + '" schema' `, "&quot;", "IPV4ADDRESS", "exception_message", "allErrors", "isDatetime", "flags", " === true) ? ", "isClone", "sendPromptListChanged", "key", "languageChanged", 'key "', " should be boolean' ", " === undefined) ", "strict", '"number"', "openWorkflowJSON", "interpolation", "coerce", "ids", ").length ", "getNeighbors", " properties' ", "customErrors", "#66CC00", "sdppp_assets", "resources/subscribe", "]; } else { ", "InvalidRequest", "#00CC00", "mergeShapes", " for language ", "https", ".json", "#CC33CC", "ZodDiscriminatedUnion", "there was no format function for ", "formatType", "Cannot forward to node ", "resetRegExp", "ZodArray", "/sd-ppp-static/sdppp-workflows/", "strip", "graph", "unshift", "isTransportReady", "setWidgetValue", "not-basic", "  for (var ", "debouncedNotificationMethods", "createNotificationHandler", "anyOf", "apd", " === 'true' || ", "ruleErr", "mins", "9jmTkbO", "skipInterpolation", "runningRequests", "addListener", "|0?0?", "is a required property", "#FF6600", "pes", "schemaId", "log", "isSupportedCode", "async keyword in sync schema", "dev", "trim", "cleanup", "A discriminator value for key `", "language", "getValidEnumValues", "buildDirectedAdjacencyList", "fragment", " division", " == '", " = ", "left", "No handler for action: ", "validateSchema", "pluralCategories", "#/definitions/schemaArray", " = null; ", "refVal", "InternalError", "widgetable", "transform", "set", "endsWith", "toFixed", "ASCII", "$$$$", "emergency", "([01]\\d|2[0-3]):[0-5]\\d(:", "wait", "Error fetching workflow list", "max", " validate.errors = vErrors; ", "getConnectionToNode", "removeRequestHandler", "notifications/progress", "day", "version", " , message: 'should match some schema in anyOf' ", "onAbort", " var schema", "async", "indexOf", "mailto", 'no schema with key or ref "', " != 'number' || ", ".validateSchema(", "getOwnPropertyNames", "requestId", "title", "#FF0099", "#FF33FF", " items' ", "done", "[\\uE000-\\uF8FF]", "enable", "removeListener", " === undefined || ", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, "nestingSuffix", "nullish", "RelativeTimeFormat", "#00CC66", "Failed to reboot ComfyUI", "progress", "asyncIterator", "MAX_SAFE_INTEGER", "writeOnly", "updateKey", "aao", "sdppp/streamRequest", ", deps: '", " || ! Object.prototype.hasOwnProperty.call(", "postProcessor", ".length > ", "schemaPath", "strictKeywords", "/additionalProperties", "error", "getHandler", " , params: { allowedValues: schema", "#99CC33", "ayp", "clear", "sendErrorResponse", "slice", "long", "urn:uuid", "minute", "cos-vip://", "implements", " element(s)", "%[89A-Fa-f]", "sdppp/broadcast", "__internal_requestInitialState_", "Date must be ", "ZodUndefined", "/required", "PS shortcuts may be blocked by plugin...", "json-pointer", "yds", "ZodNullable", "{0,4}", "queue", "origin", "alg", "findPath", " === undefined) { ", "comfyAPI is not initialized, maybe comfyUI is too old", "iterator", ") { errors = ", "http://json-schema.org/draft-07/schema", ".validate", "cancel", "closeWorkflow", "jwt", "([^0-9])", "UUID is not valid.", "false schema", "#/definitions/stringArray", " = validate.schema", "missingInterpolationHandler", "root", "unwrap", "; else vErrors = vErrors.concat(", "charAt", "oninitialized", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "bindConsumer", "implementAction", ", schema", "if (", " !== undefined ", "MethodNotFound", " via punycode: ", "removeByRequestId", "absolutePath", "_responseHandlers", "Unrecognized key(s) in object: ", " != 'boolean' && ", "activeState", " not found on node ", "#CC9900", "[A-Fa-f]", "getNode", "Invalid", "put", "[^\\%\\/\\:\\@]", "Enum", "9926XmOGLT", "size", "_key", "random", ") { if (vErrors === null) vErrors = ", "missingSchema", "[j])) { ", "yud", " = 'else'; ", "_getInvalidInput", "req_", "\\.\\d{", "[UnexpectedJSONParseError]: ", " }; return validate; ", " , message: '", "nonnegative", "load", "usedParams", 'custom keyword "', "fullPath", "capabilities", "Failed to request initial state for ", "[^\\%\\:]", "invalid_string", " , message: 'should NOT be valid' ", "returnedObjectHandler", "onclose", "failed parsing options string in nesting for key ", "uniqueItems", "[^\\%\\[\\]\\:]", "#/definitions/nonNegativeIntegerDefault0", "missingKey", "extract", "_refinement", "varReplace", "defaultError", ", validate.root.schema);", "ary", "#CC00FF", "cos", " if ( ", " , parentSchema: validate.schema", "names", " , params: { missingProperty: '", "isEmoji", " , rootData )  ", " for (var ", " === 'false' || ", "required", "loadResources", "multipleOfPrecision", '" for languages "', " == errors) {", "unionErrors", "defineProperty", "refVal[", "additionalItems", "activeWorkflow", "checkConnection", "console", "utils", "dataVar", "ESCAPE", "isNANOID", "createMessage", "disconnected", "optionsMap", "loadNamespaces", "Cycle detected: ", " && !Array.isArray(", "array", "translator", "prs", "_onresponse", "HTTP URIs must have a host.", "  } ", "sendFinishedResponse", "))))) {", "shape", " else { ", "{2})", "URN can not be parsed.", "./api/manager/reboot", "ctx", "useRawValueToEscape", "++) { if (", " = false , ", "URI can not be parsed.", "#CC33FF", "2024-10-07", " == null) ", " validate.errors = null; return true; ", "more", "Workflow stopped by user", "getConnectionInternal", "mergeArray", "errors", "cmp", " , params: { i: i, j: j } ", "Error compiling schema, function code:", " = true; break; }", "sdpppX2", "Module", "mergeObjectAsync", "hasOwnProperty", "simpleTypes", "audio", "isOpen", "_parseSync", "substring", "_onclose", "info", "ZodLiteral", "nestingOptionsSeparator", "Received a response for an unknown message ID: ", "schema $id ignored", "parse", " , params: { keyword: '", "resetTimeoutOnProgress", "#FF9900", " !== undefined)", "workflows/", "opts", "ayh", "storeManager", "unescapeFragment", "data", "requestedSchema", "_requestMessageId", "refine", ") : ", ", exclusive: ", " = null; try { ", "getDefaultValuesFromSchema", "resolveRef", "&lt;", "') ", "_limitProperties", "processQueueItems", "2.0", "_resetTimeout", " < ", "interpolationkey", " = new RegExp(", " throw new ValidationError(vErrors); ", "returnNull", "payload", "email", " var i = ", " = errors;", " , schemaPath: ", " when property ", "_loadingSchemas", ") break; }  ", "join", "assertCanSetRequestHandler", "cycles", 'Invalid input: must include "', "Invalid proxy forwarding: current node ", " = null;", "value", "skipKeywords", "setupGraphStoreSync", " } }", "onNotification", "extra", " in ", "url", " { keyword: '", ") {   ", "round", "returnEmptyString", "reload", "Server does not support tools (required for ", "argumentsError", "  errors = ", "[0-5]\\d", " break; ", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", "greater than ", "Unexpected dot segment condition", "at least", "sendToolListChanged", " = '' + ", " , params: { comparison: ", "ZodBranded", "isEmpty", " if (true) { ", "[ ]*{", "onprogress", "Bearer ", "BigInt must be ", "))) { ", "getData", "{5}", "unknown", "minItems", "__esModule", "maxLength", "includes", "examples", "waiting for queue prompt", "uri", "store:update:", "forkResourceStore", "Unknown message type: ", "exact", " not found for current node ", "keySchema", "nodeId", "25[0-5]", "defaultValue", "ignore", "domainHost", "modifying", "sdppp/requestInitialState/", "ucs2length", "userinfo", "token", " : ", "subfolder", "addConnection", "   var err =   ", "$el", ") break; ", ".call( ", "_clientCapabilities", " not in path ", "floor", "Server does not support logging (required for ", "received", "maximum", " ) { ", " = true; else if (!Array.isArray(schema", "_notificationHandlers", " = refVal[", " cannot be resolved", "thisServer", "resources/list", "headers", "pow", "; }   var err =   ", "isURL", "assertCapabilityForMethod", "order", "rtl", "maxProperties", "#0099CC", "2024-11-05", "params", "checks", "loopRequired", "fullFilename", "getBestMatchFromCodes", "full", "kind", " if (rootData === undefined) rootData = data; ", "notification", "ensureStoreConsumerBinding", "bind", "canvas", "buffer", "resources/unsubscribe", "type", "#CC6600", " if (!", "setItem", "processors", "$ref", "reconnecting", "_getId", "def", "properties", "sdppp_workflow_alias", "output", "executed", "absolute", "ZodDate", "maxItems", "schema $id is different from id", "nsSeparator", "onmessage", "getResourceBundle", " = false; else if (", " if (true) {", " console.log(", "getCapabilities", "resolve", "#6600CC", "fast", " | ", "{0,6}", ".additionalProperties", "#6633CC", "positive", "sdppp/directRequest", "_cachedPath", "missingKeyNoValueFallbackToKey", "retryTimeout", "Cannot access property/index ", "safeValue", ") ) ", "instructions", "_path", "getNodeIds", "prompts", "pre", "sort", "Transport", "manuallyExtractDefaults", " , schema:  ", "toLowerCase", "_limitItems", "#3333FF", "authInfo", "processStreamQueue", "requestInfo", "broadcastHandlers", "ZodAny", "minimum", " var vErrors = null; ", "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", "connected", "{1,4}", "toJSON", "exclType", "right", "reference", "', depsCount: ", "msecs", "get", "find", " = true; ", "_metaOpts", "_unknown", " == 'number' || ", "ZodNaN", "formErrors", "curlayer", " var errors = 0;     ", "format", "getConnection", "detect", "?\\:\\:", "loadOne", "#FF3333", " if (!(await ", " ? '", "/additionalItems", "No connection available for node ", "_error", "++) { vErrors[", "hasAction", "image", "loaded", "; else vErrors = null; } ", "maxTotalTimeout", " if (! ", "adf", " Math.abs(Math.round(division", "cacheKey", "level", "removeAdditional", " not found in graph definition", " }   ", " ) || ", "_cached", "notifications/resources/updated", " delete ", "getTime", "setDefaultNamespace", "customRule", "sampling/createMessage", " , message: 'should NOT have more than ", " for interpolating ", "const", " validate.errors = [", "finite", "createErrors", "multipleOf", "start", "prompt_ids: ", ";  ", "notificationQueue", "currentOnly", "/files", "#FF3366", " = false; ", "nestingRegexp", "services", "cos://", "$async", "  if (!", " ms", " = true;", ") && ", "setter", "issues", "reverse", "1350290XKqKpE", "languageUtils", "ZodNumber", "keyof", " = vErrors[", 'did not save key "', "sendActionRequest", "greater than or equal to ", "setNotificationHandler", "Invalid enum value. Expected ", " == 'string' && ", "concat", " = formats[", "getDataByLanguage", "datetime", "schema id ignored", "result", "changeTracker", " , message: 'should be equal to one of the allowed values' ", "_transport", "function", "__nwjs", ", rootData)  ", "ZodRecord", " from id ", " is not a valid identifier", " === undefined ", " === ", "checkState", "Host's domain name can not be converted to ", "点我恢复", " , ", "valueSchema", "buildAdjacencyList", "iri", "normalize", "]; return false; ", "(.+?)", "silent", "NOT_FRAGMENT", "query", "resolvedOptions", " ucs2length(", "util", "saveMissingTo", "pick", "invalid_enum_value", "getFixedT", "{0,3}", "color", " % 1)", " } else if ( ", "processHandlerStream", "Schema ", "verbose", ".patternProperties", "isArray", "resource_link", " != 'number') || ", " , params: { ref: '", "default", "contextSeparator", "getLanguagePartFromCode", "formatLanguageCode", "filterByRequestId", "Invalid function return type", "invalid_arguments", "delete", "partialBundledLanguages", "pipe", "exec_info", "++) { ", " , message: 'should contain a valid item' ", " */", "enabled", "openWorkflow", "0?[1-9]", " (async", "actions", "unescapeSuffix", "sampling", "isOptional", "postMessage", "_getCached", "hasEdge", " at one or more positions greater than or equal to ", "should have required property \\'", "[\\@]", "#6633FF", "sd-ppp-static/sdppp_images/", "assign", "String must contain ", "all", "parentDataProperty", "isDuration", "executeHandlerAsync", "jpr", "exec", "Connection closed", "ZodPipeline", " = true; } else { ", "seconds", "retryDelay", "shift", "NOT_QUERY", "#CC6633", "keywordValidate", "isUUID", "./api/userdata/workflows%2F.index.json", "ConnectionClosed", "ars", "_fragments", "null", "Cannot register capabilities after connecting to transport", "customRules", "inlineRef", "sdpppID", "pop", "var missing", "/patternProperties/", 'Invalid input: must end with "', "NOT_USERINFO", "precheck", "' + ", "); for (var ", " , data: ", " } }  ", "$dataMetaSchema", "Client does not support elicitation (required for ", " ( ( ", " == 'string' || ", "initializeNodeStores", "saveWorkflow", "resourceStore", "{0,2}", "_serverInfo", "validate.schema", "ZodNever", "getSchema", "baseId", "tools/call", " if (false) { ", "_getOrReturnCtx", "&subfolder=", "nodes", "endTurn", "schema id must be string", "bigint", "registerProxyForwardHandler", "elicitation", "exports", "; else if (", "namespaces", "property ", "readonly", "fromCharCode", "preprocess", "#FF00FF", " ); if (isAdditional", '"; } ', " = false; if (e instanceof ValidationError) ", "now", "resolvedLanguage", " , params: { type: '", "acq", "Not connected", "subject", "dataProperties", "toUpperCase", "#3300FF", "resolved promise for", "'else'", " = true;  ", "modules", "isBase64url", "position", "relative-json-pointer", "errorMap", "zh-CN", "' && !(typeof ", "sendResourceListChanged", "handleAsObject", "unknownFormats", "_validateKeyword", "uxp", "method", "{6}", "joinValues", "Error validating elicitation response: ", " != 'number') { ", "externalListenMessageCallback", "lazycreate", "-arab", "urn", " = [", "elicitation/create", "broadcast", "2025-06-18", " ) {   ", "additionalProperties", "contentMediaType", "useDefault", "strictDefaults", "var ", "false", "callback", "You must pass an array of schemas to z.tuple([ ... ])", "invalid-input", "getSuffixes", "observers", "exactUsedKey", "__proxy_forward", " } } else { ", "Method not found", "NOT_PATH_NOSCHEME", "Graph must have at least one node", "Edge references unknown source node: ", "&#39;", "MissingRefError", "formatParams", "_errorDataPathProperty", "getState", "save", " var missing", "expected", "[^]", "addNamespaces", "Overflow: input needs wider integers to process", "copy", "hasLanguageSomeTranslations", "actionExecutor", "prototype", "omit", "_cache", "ZodPromise", "#CC0066", "errorPath", "i18nFormat", "<errors; ", "returnDetails", "Meta-schema for $data reference (JSON Schema extension proposal)", "debug", "ownProperties", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", " throw new ValidationError([", " ? await ", "sdppp/updateStore/", "[\\:]", "getProperty", "too_small", "roots", "#3366FF", "getSuffix", "selection", "_onnotification", " + ']'", "; if (!", "parseAsync", "comfy", "exclusiveMinimum", "addKeyword", "errs_", "saveMissing", "removeSchema", "addIssues", "nodeStores", "ComfyManager not found, cannot reboot"];
  return Cx = function() {
    return i;
  }, Cx();
}
var Wx, jr;
function on() {
  return jr || (jr = 1, Wx = function(i, x) {
    var t = B;
    x || (x = {}), typeof x === t(1806) && (x = { cmp: x });
    var a = typeof x[t(1543)] === t(741) ? x[t(1543)] : !1, e = x[t(1484)] && /* @__PURE__ */ function(n) {
      return function(o) {
        return function(c, f) {
          var u = { key: c, value: o[c] }, l = { key: f, value: o[f] };
          return n(u, l);
        };
      };
    }(x[t(1484)]), r = [];
    return function n(o) {
      var c = t;
      if (o && o.toJSON && typeof o.toJSON == "function" && (o = o[c(1711)]()), o !== void 0) {
        if (typeof o == c(986)) return isFinite(o) ? "" + o : c(1898);
        if (typeof o !== c(570)) return JSON.stringify(o);
        var f, u;
        if (Array[c(1842)](o)) {
          for (u = "[", f = 0; f < o[c(1013)]; f++)
            f && (u += ","), u += n(o[f]) || "null";
          return u + "]";
        }
        if (o === null) return c(1898);
        if (r[c(1280)](o) !== -1) {
          if (a) return JSON.stringify(c(2309));
          throw new TypeError(c(2111));
        }
        var l = r[c(482)](o) - 1, d = Object[c(522)](o)[c(1694)](e && e(o));
        for (u = "", f = 0; f < d.length; f++) {
          var v = d[f], h = n(o[v]);
          h && (u && (u += ","), u += JSON[c(2225)](v) + ":" + h);
        }
        return r[c(991)](l, 1), "{" + u + "}";
      }
    }(i);
  }), Wx;
}
var Jx, Mr;
function cn() {
  return Mr || (Mr = 1, Jx = function(x, t, a) {
    var e = B, r = "", n = x.schema[e(1778)] === !0, o = x[e(1829)].schemaHasRulesExcept(x[e(540)], x[e(1029)][e(1878)], "$ref"), c = x[e(558)][e(1657)](x[e(540)]);
    if (x.opts.strictKeywords) {
      var f = x[e(1829)][e(894)](x[e(540)], x[e(1029)].keywords);
      if (f) {
        var u = "unknown keyword: " + f;
        if (x[e(1509)][e(1314)] === e(1236)) x[e(2471)].warn(u);
        else throw new Error(u);
      }
    }
    if (x[e(2128)] && (r += e(853), n && (x[e(1279)] = !0, r += e(984)), r += e(625), c && (x[e(1509)][e(809)] || x[e(1509)][e(1124)]) && (r += " " + ("/*# sourceURL=" + c + e(1859)) + " ")), typeof x[e(540)] == e(741) || !(o || x.schema[e(1655)])) {
      var t = e(1356), l = x.level, d = x[e(847)], v = x[e(540)][t], h = x[e(1313)] + x.util[e(2034)](t), m = x[e(706)] + "/" + t, E = !x.opts[e(1174)], T, g = e(1513) + (d || ""), k = "valid" + l;
      if (x[e(540)] === !1) {
        x[e(2128)] ? E = !0 : r += " var " + k + e(1774);
        var w = w || [];
        w.push(r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + (T || e(1356)) + e(790) + x[e(2022)] + e(1537) + x[e(1829)].toQuotedString(m) + e(756), x.opts[e(2303)] !== !1 && (r += e(912)), x[e(1509)][e(1840)] && (r += e(2125) + x[e(1313)] + e(1911) + g + " "), r += e(1006)) : r += e(1151);
        var S = r;
        r = w[e(1903)](), !x[e(737)] && E ? x[e(1279)] ? r += e(2030) + S + e(464) : r += " validate.errors = [" + S + e(1822) : r += e(1138) + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else x.isTop ? n ? r += e(776) : r += e(1478) : r += e(543) + k + " = true; ";
      return x[e(2128)] && (r += e(1400)), r;
    }
    if (x[e(2128)]) {
      var R = x.isTop, l = x[e(1748)] = 0, d = x.dataLevel = 0, g = e(1513);
      if (x.rootId = x[e(1674)][e(1406)](x.self._getId(x[e(1360)].schema)), x.baseId = x.baseId || x[e(684)], delete x[e(2128)], x[e(2282)] = [""], x[e(540)].default !== void 0 && x[e(1509)][e(445)] && x[e(1509)][e(1988)]) {
        var O = e(587);
        if (x[e(1509)][e(1988)] === "log") x[e(2471)].warn(O);
        else throw new Error(O);
      }
      r += e(1707), r += e(1726), r += e(1643);
    } else {
      var l = x[e(1748)], d = x[e(847)], g = e(1513) + (d || "");
      if (c && (x[e(1925)] = x[e(1674)][e(1554)](x[e(1925)], c)), n && !x[e(1279)]) throw new Error(e(637));
      r += " var errs_" + l + e(1536);
    }
    var k = e(2154) + l, E = !x[e(1509)][e(1174)], C = "", D = "", T, $ = x[e(540)].type, I = Array.isArray($);
    if ($ && x.opts[e(495)] && x.schema.nullable === !0 && (I ? $[e(1280)](e(1898)) == -1 && ($ = $[e(1797)]("null")) : $ != e(1898) && ($ = [$, e(1898)], I = !0)), I && $[e(1013)] == 1 && ($ = $[0], I = !1), x[e(540)][e(1655)] && o) {
      if (x[e(1509)][e(2486)] == e(444)) throw new Error(e(528) + x.errSchemaPath + '" (see option extendRefs)');
      x[e(1509)].extendRefs !== !0 && (o = !1, x[e(2471)][e(1034)](e(2287) + x[e(706)] + '"'));
    }
    if (x.schema[e(2458)] && x[e(1509)][e(2458)] && (r += " " + x[e(1029)][e(1878)][e(2458)].code(x, e(2458))), $) {
      if (x[e(1509)][e(549)]) var F = x[e(1829)][e(576)](x.opts.coerceTypes, $);
      var V = x.RULES[e(840)][$];
      if (F || I || V === !0 || V && !g0(V)) {
        var h = x.schemaPath + e(681), m = x.errSchemaPath + e(2390), h = x[e(1313)] + e(681), m = x[e(706)] + e(2390), L = I ? e(2066) : "checkDataType";
        if (r += " if (" + x.util[L]($, g, x.opts[e(508)], !0) + e(2353), F) {
          var U = e(1100) + l, J = e(2285) + l;
          r += " var " + U + e(1137) + g + e(2363) + J + e(2308), x[e(1509)][e(549)] == e(1457) && (r += " if (" + U + e(2155) + g + e(1782) + g + e(487) + g + " = " + g + e(999) + U + " = typeof " + g + e(2184) + x[e(1829)][e(2148)](x[e(540)][e(1650)], g, x[e(1509)][e(508)]) + ") " + J + " = " + g + "; } "), r += e(903) + J + e(1115);
          var n0 = F;
          if (n0)
            for (var i0, d0 = -1, a0 = n0[e(1013)] - 1; d0 < a0; )
              i0 = n0[d0 += 1], i0 == e(2203) ? r += " else if (" + U + e(1722) + U + e(647) + J + e(1570) + g + e(1937) + g + e(2256) + J + " = ''; " : i0 == e(986) || i0 == e(688) ? (r += " else if (" + U + " == 'boolean' || " + g + e(725) + U + e(1796) + g + e(1033) + g + e(2137) + g + " ", i0 == e(688) && (r += e(994) + g + e(1836)), r += e(870) + J + " = +" + g + "; ") : i0 == e(741) ? r += e(2423) + g + e(1434) + g + " === 0 || " + g + e(2256) + J + e(1670) + g + e(1224) + g + e(2230) + J + " = true; " : i0 == e(1898) ? r += " else if (" + g + e(1147) + g + e(2089) + g + e(1059) + J + e(1255) : x[e(1509)][e(549)] == e(1457) && i0 == e(1457) && (r += e(2423) + U + e(1916) + U + e(1722) + U + e(2157) + g + e(1477) + J + e(1980) + g + e(891));
          r += e(527);
          var w = w || [];
          w[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + (T || e(1650)) + "' , dataPath: (dataPath || '') + " + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](m) + e(1949), I ? r += "" + $[e(1541)](",") : r += "" + $, r += "' } ", x[e(1509)][e(2303)] !== !1 && (r += " , message: 'should be ", I ? r += "" + $.join(",") : r += "" + $, r += "' "), x[e(1509)][e(1840)] && (r += e(2401) + h + e(1428) + x[e(1313)] + " , data: " + g + " "), r += e(1006)) : r += e(1151);
          var S = r;
          r = w[e(1903)](), !x[e(737)] && E ? x[e(1279)] ? r += " throw new ValidationError([" + S + "]); " : r += e(1763) + S + e(1822) : r += e(1138) + S + e(2369), r += e(2193) + J + " !== undefined) {  ";
          var u0 = d ? e(1513) + (d - 1 || "") : e(1111), w0 = d ? x.dataPathArr[d] : e(1879);
          r += " " + g + e(1249) + J + "; ", !d && (r += e(1369) + u0 + e(1507)), r += " " + u0 + "[" + w0 + e(2465) + J + "; } ";
        } else {
          var w = w || [];
          w[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + (T || e(1650)) + e(790) + x[e(2022)] + " , schemaPath: " + x.util[e(2063)](m) + " , params: { type: '", I ? r += "" + $.join(",") : r += "" + $, r += e(2300), x[e(1509)][e(2303)] !== !1 && (r += e(825), I ? r += "" + $[e(1541)](",") : r += "" + $, r += "' "), x[e(1509)][e(1840)] && (r += e(2401) + h + e(1428) + x.schemaPath + e(1911) + g + " "), r += e(1006)) : r += " {} ";
          var S = r;
          r = w.pop(), !x.compositeRule && E ? x[e(1279)] ? r += " throw new ValidationError([" + S + e(464) : r += e(1763) + S + e(1822) : r += e(1138) + S + e(2369);
        }
        r += e(1006);
      }
    }
    if (x.schema[e(1655)] && !o) r += " " + x[e(1029)].all[e(1655)][e(2440)](x, e(1655)) + " ", E && (r += e(2288), R ? r += "0" : r += e(2047) + l, r += e(2353), D += "}");
    else {
      var m0 = x[e(1029)];
      if (m0) {
        for (var V, D0 = -1, k0 = m0[e(1013)] - 1; D0 < k0; )
          if (V = m0[D0 += 1], g0(V)) {
            if (V[e(1650)] && (r += e(903) + x[e(1829)].checkDataType(V[e(1650)], g, x.opts[e(508)]) + e(2353)), x[e(1509)][e(445)]) {
              if (V[e(1650)] == e(570) && x[e(540)][e(1659)]) {
                var v = x[e(540)][e(1659)], J0 = Object.keys(v), A = J0;
                if (A)
                  for (var N, j = -1, Q = A[e(1013)] - 1; j < Q; ) {
                    N = A[j += 1];
                    var G = v[N];
                    if (G[e(1846)] !== void 0) {
                      var Z = g + x[e(1829)].getProperty(N);
                      if (x[e(737)]) {
                        if (x[e(1509)].strictDefaults) {
                          var O = e(2329) + Z;
                          if (x[e(1509)][e(1988)] === "log") x[e(2471)][e(1034)](O);
                          else throw new Error(O);
                        }
                      } else r += e(903) + Z + e(1812), x.opts[e(445)] == e(2345) && (r += e(642) + Z + " === null || " + Z + e(915)), r += e(695) + Z + " = ", x.opts[e(445)] == "shared" ? r += " " + x[e(1987)](G.default) + " " : r += " " + JSON.stringify(G[e(1846)]) + " ", r += "; ";
                    }
                  }
              } else if (V[e(1650)] == e(1457) && Array[e(1842)](x[e(540)].items)) {
                var X = x.schema[e(1040)];
                if (X) {
                  for (var G, d0 = -1, r0 = X[e(1013)] - 1; d0 < r0; )
                    if (G = X[d0 += 1], G[e(1846)] !== void 0) {
                      var Z = g + "[" + d0 + "]";
                      if (x[e(737)]) {
                        if (x.opts.strictDefaults) {
                          var O = e(2329) + Z;
                          if (x[e(1509)][e(1988)] === "log") x[e(2471)][e(1034)](O);
                          else throw new Error(O);
                        }
                      } else r += e(903) + Z + e(1812), x[e(1509)][e(445)] == e(2345) && (r += e(642) + Z + e(2418) + Z + e(915)), r += e(695) + Z + e(1249), x[e(1509)].useDefaults == "shared" ? r += " " + x[e(1987)](G.default) + " " : r += " " + JSON[e(2225)](G[e(1846)]) + " ", r += "; ";
                    }
                }
              }
            }
            var s0 = V[e(2263)];
            if (s0) {
              for (var e0, j0 = -1, F0 = s0[e(1013)] - 1; j0 < F0; )
                if (e0 = s0[j0 += 1], W0(e0)) {
                  var L0 = e0[e(2440)](x, e0[e(546)], V.type);
                  L0 && (r += " " + L0 + " ", E && (C += "}"));
                }
            }
            if (E && (r += " " + C + " ", C = ""), V[e(1650)] && (r += e(1006), $ && $ === V.type && !F)) {
              r += " else { ";
              var h = x[e(1313)] + ".type", m = x[e(706)] + e(2390), w = w || [];
              w.push(r), r = "", x.createErrors !== !1 ? (r += " { keyword: '" + (T || e(1650)) + e(790) + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](m) + e(1949), I ? r += "" + $[e(1541)](",") : r += "" + $, r += e(2300), x[e(1509)].messages !== !1 && (r += " , message: 'should be ", I ? r += "" + $[e(1541)](",") : r += "" + $, r += "' "), x[e(1509)][e(1840)] && (r += " , schema: validate.schema" + h + e(1428) + x.schemaPath + e(1911) + g + " "), r += e(1006)) : r += e(1151);
              var S = r;
              r = w[e(1903)](), !x[e(737)] && E ? x[e(1279)] ? r += " throw new ValidationError([" + S + e(464) : r += e(1763) + S + e(1822) : r += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += e(1006);
            }
            E && (r += e(758), R ? r += "0" : r += "errs_" + l, r += ") { ", D += "}");
          }
      }
    }
    E && (r += " " + D + " "), R ? (n ? (r += e(2402), r += e(2500)) : (r += e(1270), r += e(2494)), r += e(2257)) : r += " var " + k + e(766) + l + ";";
    function g0(Q0) {
      for (var N0 = e, z0 = Q0[N0(2263)], Y0 = 0; Y0 < z0[N0(1013)]; Y0++) if (W0(z0[Y0])) return !0;
    }
    function W0(Q0) {
      var N0 = e;
      return x[N0(540)][Q0[N0(546)]] !== void 0 || Q0[N0(1328)] && ne(Q0);
    }
    function ne(Q0) {
      for (var N0 = e, z0 = Q0[N0(1328)], Y0 = 0; Y0 < z0.length; Y0++) if (x[N0(540)][z0[Y0]] !== void 0) return !0;
    }
    return r;
  }), Jx;
}
var Qx, $r;
function E2() {
  var i = s;
  if ($r) return Qx;
  $r = 1;
  var x = tr(), t = Be(), a = rr(), e = on(), r = cn(), n = t[i(1603)], o = xr(), c = a[i(2457)];
  Qx = f;
  function f(S, R, O, k) {
    var E = i, C = this, D = this[E(2397)], T = [void 0], $ = {}, I = [], F = {}, V = [], L = {}, U = [];
    R = R || { schema: S, refVal: T, refs: $ };
    var J = u[E(1122)](this, S, R, k), n0 = this._compilations[J[E(2367)]];
    if (J[E(828)]) return n0[E(2136)] = w0;
    var i0 = this[E(985)], d0 = this[E(1029)];
    try {
      var a0 = m0(S, R, O, k);
      n0[E(454)] = a0;
      var u0 = n0[E(2136)];
      return u0 && (u0.schema = a0[E(540)], u0[E(1483)] = null, u0.refs = a0.refs, u0[E(1256)] = a0[E(1256)], u0[E(1360)] = a0[E(1360)], u0.$async = a0[E(1778)], D.sourceCode && (u0.source = a0[E(466)])), a0;
    } finally {
      l[E(1122)](this, S, R, k);
    }
    function w0() {
      var Z = E, X = n0.validate, r0 = X[Z(1001)](this, arguments);
      return w0[Z(1483)] = X[Z(1483)], r0;
    }
    function m0(Z, X, r0, s0) {
      var e0 = E, j0 = !X || X && X[e0(540)] == Z;
      if (X.schema != R[e0(540)]) return f.call(C, Z, X, r0, s0);
      var F0 = Z.$async === !0, L0 = r({ isTop: !0, schema: Z, isRoot: j0, baseId: s0, root: X, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: a[e0(1128)], RULES: d0, validate: r, util: t, resolve: x, resolveRef: D0, usePattern: j, useDefault: Q, useCustomRule: G, opts: D, formats: i0, logger: C[e0(2471)], self: C });
      L0 = w(T, m) + w(I, v) + w(V, h) + w(U, g) + L0, D.processCode && (L0 = D.processCode(L0, Z));
      var g0;
      try {
        var W0 = new Function(e0(558), e0(1029), e0(1141), "root", "refVal", e0(926), e0(1900), e0(2106), e0(1603), e0(2361), L0);
        g0 = W0(C, d0, i0, R, T, V, U, o, n, c), T[0] = g0;
      } catch (ne) {
        throw C[e0(2471)].error(e0(1486), L0), ne;
      }
      return g0[e0(540)] = Z, g0.errors = null, g0[e0(2102)] = $, g0[e0(1256)] = T, g0[e0(1360)] = j0 ? g0 : X, F0 && (g0[e0(1778)] = !0), D[e0(809)] === !0 && (g0[e0(466)] = { code: L0, patterns: I, defaults: V }), g0;
    }
    function D0(Z, X, r0) {
      var s0 = E;
      X = x.url(Z, X);
      var e0 = $[X], j0, F0;
      if (e0 !== void 0) return j0 = T[e0], F0 = s0(1442) + e0 + "]", N(j0, F0);
      if (!r0 && R.refs) {
        var L0 = R[s0(2102)][X];
        if (L0 !== void 0) return j0 = R[s0(1256)][L0], F0 = k0(X, j0), N(j0, F0);
      }
      F0 = k0(X);
      var g0 = x[s0(1122)](C, m0, R, X);
      if (g0 === void 0) {
        var W0 = O && O[X];
        W0 && (g0 = x.inlineRef(W0, D[s0(2218)]) ? W0 : f[s0(1122)](C, W0, R, O, Z));
      }
      if (g0 === void 0) J0(X);
      else return A(X, g0), N(g0, F0);
    }
    function k0(Z, X) {
      var r0 = E, s0 = T[r0(1013)];
      return T[s0] = X, $[Z] = s0, r0(1256) + s0;
    }
    function J0(Z) {
      delete $[Z];
    }
    function A(Z, X) {
      var r0 = $[Z];
      T[r0] = X;
    }
    function N(Z, X) {
      var r0 = E;
      return typeof Z == r0(570) || typeof Z == "boolean" ? { code: X, schema: Z, inline: !0 } : { code: X, $async: Z && !!Z[r0(1778)] };
    }
    function j(Z) {
      var X = E, r0 = F[Z];
      return r0 === void 0 && (r0 = F[Z] = I[X(1013)], I[r0] = Z), "pattern" + r0;
    }
    function Q(Z) {
      var X = E;
      switch (typeof Z) {
        case X(741):
        case X(986):
          return "" + Z;
        case X(2203):
          return t[X(2063)](Z);
        case X(570):
          if (Z === null) return X(1898);
          var r0 = e(Z), s0 = L[r0];
          return s0 === void 0 && (s0 = L[r0] = V[X(1013)], V[s0] = Z), X(1846) + s0;
      }
    }
    function G(Z, X, r0, s0) {
      var e0 = E;
      if (C._opts.validateSchema !== !1) {
        var j0 = Z.definition[e0(1057)];
        if (j0 && !j0[e0(646)](function(Y0) {
          var Ie = e0;
          return Object[Ie(2017)][Ie(1491)][Ie(1122)](r0, Y0);
        })) throw new Error(e0(2264) + j0[e0(1541)](","));
        var F0 = Z[e0(2274)][e0(1252)];
        if (F0) {
          var L0 = F0(X);
          if (!L0) {
            var g0 = e0(832) + C.errorsText(F0.errors);
            if (C[e0(2397)][e0(1252)] == e0(1236)) C.logger.error(g0);
            else throw new Error(g0);
          }
        }
      }
      var W0 = Z[e0(2274)][e0(2127)], ne = Z[e0(2274)][e0(608)], Q0 = Z[e0(2274)][e0(961)], N0;
      if (W0) N0 = W0.call(C, X, r0, s0);
      else if (Q0)
        N0 = Q0[e0(1122)](C, X, r0, s0), D[e0(1252)] !== !1 && C.validateSchema(N0, !0);
      else if (ne) N0 = ne.call(C, s0, Z[e0(546)], X, r0);
      else if (N0 = Z[e0(2274)][e0(454)], !N0) return;
      if (N0 === void 0) throw new Error(e0(1405) + Z[e0(546)] + e0(2434));
      var z0 = U[e0(1013)];
      return U[z0] = N0, { code: e0(1758) + z0, validate: N0 };
    }
  }
  function u(S, R, O) {
    var k = i, E = d[k(1122)](this, S, R, O);
    return E >= 0 ? { index: E, compiling: !0 } : (E = this[k(2413)][k(1013)], this._compilations[E] = { schema: S, root: R, baseId: O }, { index: E, compiling: !1 });
  }
  function l(S, R, O) {
    var k = i, E = d[k(1122)](this, S, R, O);
    E >= 0 && this._compilations.splice(E, 1);
  }
  function d(S, R, O) {
    for (var k = i, E = 0; E < this[k(2413)][k(1013)]; E++) {
      var C = this[k(2413)][E];
      if (C[k(540)] == S && C[k(1360)] == R && C[k(1925)] == O) return E;
    }
    return -1;
  }
  function v(S, R) {
    var O = i;
    return "var pattern" + S + O(1530) + t[O(2063)](R[S]) + ");";
  }
  function h(S) {
    var R = i;
    return R(2492) + S + R(2435) + S + "];";
  }
  function m(S, R) {
    var O = i;
    return R[S] === void 0 ? "" : O(849) + S + O(1622) + S + "];";
  }
  function g(S) {
    var R = i;
    return R(1113) + S + " = customRules[" + S + "];";
  }
  function w(S, R) {
    var O = i;
    if (!S[O(1013)]) return "";
    for (var k = "", E = 0; E < S[O(1013)]; E++) k += R(E, S);
    return k;
  }
  return Qx;
}
var Gx = { exports: {} }, Lr;
function P2() {
  var i = s;
  if (Lr) return Gx[i(1936)];
  Lr = 1;
  var x = Gx[i(1936)] = function() {
    var a = i;
    this[a(2019)] = {};
  };
  return x.prototype[i(1384)] = function(a, e) {
    this._cache[a] = e;
  }, x[i(2017)][i(1717)] = function(a) {
    var e = i;
    return this[e(2019)][a];
  }, x.prototype[i(573)] = function(a) {
    var e = i;
    delete this[e(2019)][a];
  }, x[i(2017)][i(1321)] = function() {
    var a = i;
    this[a(2019)] = {};
  }, Gx.exports;
}
var Xx, zr;
function k2() {
  var i = s;
  if (zr) return Xx;
  zr = 1;
  var x = Be(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, r = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, f = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, u = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, l = /^(?:\/(?:[^~/]|~0|~1)*)*$/, d = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, v = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  Xx = h;
  function h(D) {
    var T = B;
    return D = D == "full" ? T(1641) : T(1676), x.copy(h[D]);
  }
  h.fast = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: f, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: u, "json-pointer": l, "json-pointer-uri-fragment": d, "relative-json-pointer": v }, h[i(1641)] = { date: g, time: w, "date-time": R, uri: k, "uri-reference": o, "uri-template": c, url: f, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: u, "json-pointer": l, "json-pointer-uri-fragment": d, "relative-json-pointer": v };
  function m(D) {
    return D % 4 === 0 && (D % 100 !== 0 || D % 400 === 0);
  }
  function g(D) {
    var T = D.match(t);
    if (!T) return !1;
    var $ = +T[1], I = +T[2], F = +T[3];
    return I >= 1 && I <= 12 && F >= 1 && F <= (I == 2 && m($) ? 29 : a[I]);
  }
  function w(D, T) {
    var $ = i, I = D[$(2277)](e);
    if (!I) return !1;
    var F = I[1], V = I[2], L = I[3], U = I[5];
    return (F <= 23 && V <= 59 && L <= 59 || F == 23 && V == 59 && L == 60) && (!T || U);
  }
  var S = /t|\s/i;
  function R(D) {
    var T = i, $ = D[T(519)](S);
    return $[T(1013)] == 2 && g($[0]) && w($[1], !0);
  }
  var O = /\/|:/;
  function k(D) {
    var T = i;
    return O[T(857)](D) && n[T(857)](D);
  }
  var E = /[^\\]\\Z/;
  function C(D) {
    var T = i;
    if (E[T(857)](D)) return !1;
    try {
      return new RegExp(D), !0;
    } catch {
      return !1;
    }
  }
  return Xx;
}
var Yx, Hr;
function C2() {
  return Hr || (Hr = 1, Yx = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x[e(847)], c = x[e(540)][t], f = x[e(706)] + "/" + t, u = !x[e(1509)].allErrors, l = "data" + (o || ""), d = e(2154) + n, v, h;
    if (c == "#" || c == "#/") x[e(665)] ? (v = x[e(1279)], h = e(454)) : (v = x[e(1360)][e(540)][e(1778)] === !0, h = e(1002));
    else {
      var m = x[e(1521)](x[e(1925)], c, x[e(665)]);
      if (m === void 0) {
        var g = x[e(2004)][e(820)](x[e(1925)], c);
        if (x.opts[e(2242)] == e(444)) {
          x[e(2471)].error(g);
          var w = w || [];
          w[e(482)](r), r = "", x.createErrors !== !1 ? (r += e(1555) + e(1655) + e(790) + x.errorPath + e(1537) + x.util.toQuotedString(f) + e(1845) + x[e(1829)][e(596)](c) + "' } ", x[e(1509)][e(2303)] !== !1 && (r += e(2304) + x[e(1829)][e(596)](c) + "' "), x[e(1509)].verbose && (r += e(880) + x[e(1829)][e(2063)](c) + " , parentSchema: validate.schema" + x[e(1313)] + " , data: " + l + " "), r += e(1006)) : r += e(1151);
          var S = r;
          r = w[e(1903)](), !x.compositeRule && u ? x.async ? r += e(2030) + S + e(464) : r += e(1763) + S + e(1822) : r += e(1138) + S + e(2369), u && (r += e(1927));
        } else if (x[e(1509)][e(2242)] == e(1599)) x[e(2471)].warn(g), u && (r += e(1574));
        else throw new x[e(2004)](x[e(1925)], c, g);
      } else if (m[e(608)]) {
        var R = x[e(1829)][e(2014)](x);
        R[e(1748)]++;
        var O = e(2154) + R[e(1748)];
        R.schema = m[e(540)], R.schemaPath = "", R[e(706)] = c;
        var k = x[e(454)](R)[e(1081)](/validate\.schema/g, m.code);
        r += " " + k + " ", u && (r += e(903) + O + e(2353));
      } else v = m[e(1778)] === !0 || x[e(1279)] && m[e(1778)] !== !1, h = m.code;
    }
    if (h) {
      var w = w || [];
      w.push(r), r = "", x.opts[e(970)] ? r += " " + h + e(2147) : r += " " + h + "( ", r += " " + l + e(2426), x[e(2022)] != '""' && (r += e(2343) + x[e(2022)]);
      var E = o ? e(1513) + (o - 1 || "") : e(1111), C = o ? x[e(2282)][o] : e(1879);
      r += e(1817) + E + " , " + C + e(1808);
      var D = r;
      if (r = w.pop(), v) {
        if (!x[e(1279)]) throw new Error("async schema referenced by sync schema");
        u && (r += " var " + d + "; "), r += " try { await " + D + "; ", u && (r += " " + d + " = true; "), r += e(2029), u && (r += " " + d + " = false; "), r += e(1006), u && (r += e(903) + d + e(2353));
      } else r += e(1652) + D + e(1391) + h + e(2224) + h + e(2341), u && (r += e(1466));
    }
    return r;
  }), Yx;
}
var _x, Vr;
function I2() {
  return Vr || (Vr = 1, _x = function(x, t, a) {
    var e = B, r = " ", n = x.schema[t], o = x[e(1313)] + x[e(1829)][e(2034)](t), c = x[e(706)] + "/" + t, f = !x[e(1509)][e(1174)], u = x[e(1829)][e(2014)](x), l = "";
    u[e(1748)]++;
    var d = e(2154) + u[e(1748)], v = u[e(1925)], h = !0, m = n;
    if (m)
      for (var g, w = -1, S = m[e(1013)] - 1; w < S; )
        g = m[w += 1], (x[e(1509)].strictKeywords ? typeof g == e(570) && Object[e(522)](g)[e(1013)] > 0 || g === !1 : x[e(1829)][e(1035)](g, x[e(1029)][e(1878)])) && (h = !1, u.schema = g, u[e(1313)] = o + "[" + w + "]", u.errSchemaPath = c + "/" + w, r += "  " + x[e(454)](u) + " ", u.baseId = v, f && (r += e(903) + d + ") { ", l += "}"));
    return f && (h ? r += e(1574) : r += " " + l[e(1323)](0, -1) + " "), r;
  }), _x;
}
var et, Ur;
function R2() {
  return Ur || (Ur = 1, et = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x.dataLevel, c = x[e(540)][t], f = x.schemaPath + x.util[e(2034)](t), u = x[e(706)] + "/" + t, l = !x[e(1509)][e(1174)], d = "data" + (o || ""), v = "valid" + n, h = e(460) + n, m = x[e(1829)].copy(x), g = "";
    m[e(1748)]++;
    var w = e(2154) + m[e(1748)], S = c.every(function(T) {
      var $ = e;
      return x[$(1509)][$(1314)] ? typeof T == "object" && Object[$(522)](T)[$(1013)] > 0 || T === !1 : x[$(1829)][$(1035)](T, x[$(1029)][$(1878)]);
    });
    if (S) {
      var R = m[e(1925)];
      r += " var " + h + e(2338) + v + " = false;  ";
      var O = x.compositeRule;
      x.compositeRule = m[e(737)] = !0;
      var k = c;
      if (k)
        for (var E, C = -1, D = k.length - 1; C < D; )
          E = k[C += 1], m[e(540)] = E, m.schemaPath = f + "[" + C + "]", m[e(706)] = u + "/" + C, r += "  " + x[e(454)](m) + " ", m[e(1925)] = R, r += " " + v + e(1249) + v + e(642) + w + e(2042) + v + e(2353), g += "}";
      x[e(737)] = m[e(737)] = O, r += " " + g + " if (!" + v + e(2146), x.createErrors !== !1 ? (r += " { keyword: '" + e(1222) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(1537) + x[e(1829)].toQuotedString(u) + e(756), x[e(1509)][e(2303)] !== !1 && (r += e(1276)), x[e(1509)].verbose && (r += e(2401) + f + " , parentSchema: validate.schema" + x[e(1313)] + e(1911) + d + " "), r += " } ") : r += e(1151), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(737)] && l && (x[e(1279)] ? r += e(1531) : r += e(850)), r += e(2459) + h + e(427) + h + e(2167) + h + e(1742), x[e(1509)][e(1174)] && (r += e(1006));
    } else l && (r += " if (true) { ");
    return r;
  }), et;
}
var xt, Zr;
function F2() {
  return Zr || (Zr = 1, xt = function(x, t, a) {
    var e = B, r = " ", n = x[e(540)][t], o = x[e(706)] + "/" + t;
    x[e(1509)].allErrors;
    var c = x[e(1829)][e(2063)](n);
    return x[e(1509)].$comment === !0 ? r += e(1672) + c + ");" : typeof x[e(1509)][e(2458)] == e(1806) && (r += e(841) + c + ", " + x[e(1829)][e(2063)](o) + e(1423)), r;
  }), xt;
}
var tt, Br;
function N2() {
  return Br || (Br = 1, tt = function(x, t, a) {
    var e = B, r = " ", n = x.level, o = x.dataLevel, c = x.schema[t], f = x.schemaPath + x.util[e(2034)](t), u = x[e(706)] + "/" + t, l = !x.opts[e(1174)], d = e(1513) + (o || ""), v = e(2154) + n, h = x.opts[e(538)] && c && c[e(538)];
    h && (r += e(1278) + n + e(1249) + x[e(1829)][e(1580)](c[e(538)], o, x[e(2282)]) + "; "), !h && (r += e(1278) + n + e(1358) + f + ";"), r += e(1989) + v + e(925) + d + e(1368) + n + e(1150) + v + ") {   ";
    var m = m || [];
    m[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += " { keyword: '" + e(1762) + e(790) + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](u) + e(821) + n + e(1006), x.opts[e(2303)] !== !1 && (r += e(1020)), x[e(1509)].verbose && (r += " , schema: validate.schema" + f + e(1428) + x[e(1313)] + e(1911) + d + " "), r += " } ") : r += " {} ";
    var g = r;
    return r = m[e(1903)](), !x[e(737)] && l ? x[e(1279)] ? r += e(2030) + g + "]); " : r += e(1763) + g + e(1822) : r += e(1138) + g + e(2369), r += " }", l && (r += " else { "), r;
  }), tt;
}
var rt, Kr;
function O2() {
  return Kr || (Kr = 1, rt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x[e(847)], c = x[e(540)][t], f = x[e(1313)] + x[e(1829)][e(2034)](t), u = x[e(706)] + "/" + t, l = !x[e(1509)].allErrors, d = e(1513) + (o || ""), v = e(2154) + n, h = e(460) + n, m = x.util[e(2014)](x), g = "";
    m[e(1748)]++;
    var w = e(2154) + m[e(1748)], S = "i" + n, R = m[e(847)] = x[e(847)] + 1, O = e(1513) + R, k = x.baseId, E = x.opts[e(1314)] ? typeof c == "object" && Object[e(522)](c)[e(1013)] > 0 || c === !1 : x[e(1829)][e(1035)](c, x[e(1029)][e(1878)]);
    if (r += "var " + h + " = errors;var " + v + ";", E) {
      var C = x[e(737)];
      x[e(737)] = m.compositeRule = !0, m.schema = c, m.schemaPath = f, m[e(706)] = u, r += e(543) + w + " = false; for (var " + S + e(1092) + S + e(1528) + d + e(2138) + S + e(1857), m[e(2022)] = x[e(1829)][e(2243)](x.errorPath, S, x[e(1509)][e(2115)], !0);
      var D = d + "[" + S + "]";
      m[e(2282)][R] = S;
      var T = x[e(454)](m);
      m[e(1925)] = k, x[e(1829)].varOccurences(T, O) < 2 ? r += " " + x[e(1829)][e(1421)](T, O, D) + " " : r += " var " + O + e(1249) + D + "; " + T + " ", r += e(903) + w + e(1540), x[e(737)] = m[e(737)] = C, r += " " + g + e(1652) + w + ") {";
    } else r += e(903) + d + ".length == 0) {";
    var $ = $ || [];
    $[e(482)](r), r = "", x.createErrors !== !1 ? (r += " { keyword: 'contains" + e(790) + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](u) + e(756), x[e(1509)][e(2303)] !== !1 && (r += e(1858)), x.opts[e(1840)] && (r += " , schema: validate.schema" + f + e(1428) + x.schemaPath + e(1911) + d + " "), r += e(1006)) : r += e(1151);
    var I = r;
    return r = $[e(1903)](), !x[e(737)] && l ? x.async ? r += e(2030) + I + e(464) : r += " validate.errors = [" + I + e(1822) : r += e(1138) + I + e(2369), r += e(2336), E && (r += e(1562) + h + e(427) + h + e(2167) + h + e(1742)), x[e(1509)][e(1174)] && (r += e(1006)), r;
  }), rt;
}
var at, Wr;
function q2() {
  return Wr || (Wr = 1, at = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x[e(847)], c = x[e(540)][t], f = x[e(1313)] + x[e(1829)].getProperty(t), u = x[e(706)] + "/" + t, l = !x.opts[e(1174)], d = e(1513) + (o || ""), v = e(460) + n, h = x.util[e(2014)](x), m = "";
    h[e(1748)]++;
    var g = "valid" + h[e(1748)], w = {}, S = {}, R = x[e(1509)].ownProperties;
    for (C in c)
      if (C != e(2239)) {
        var O = c[C], k = Array[e(1842)](O) ? S : w;
        k[C] = O;
      }
    r += "var " + v + " = errors;";
    var E = x.errorPath;
    r += e(1904) + n + ";";
    for (var C in S)
      if (k = S[C], k[e(1013)]) {
        if (r += e(1427) + d + x.util[e(2034)](C) + e(1370), R && (r += " && Object.prototype.hasOwnProperty.call(" + d + e(1097) + x[e(1829)][e(596)](C) + "') "), l) {
          r += e(567);
          var D = k;
          if (D)
            for (var T, $ = -1, I = D[e(1013)] - 1; $ < I; ) {
              T = D[$ += 1], $ && (r += e(642));
              var F = x[e(1829)][e(2034)](T), V = d + F;
              r += e(1915) + V + e(1812), R && (r += e(1310) + d + ", '" + x.util[e(596)](T) + e(1523)), r += ") && (missing" + n + e(1249) + x[e(1829)][e(2063)](x[e(1509)].jsonPointers ? T : F) + e(1688);
            }
          r += e(2371);
          var L = e(1109) + n, U = "' + " + L + e(1056);
          x[e(1509)]._errorDataPathProperty && (x[e(2022)] = x[e(1509)][e(2115)] ? x.util[e(2243)](E, L, !0) : E + e(2343) + L);
          var J = J || [];
          J[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + e(1057) + e(790) + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](u) + " , params: { property: '" + x[e(1829)][e(596)](C) + e(2170) + U + e(1715) + k[e(1013)] + e(1309) + x[e(1829)][e(596)](k[e(1013)] == 1 ? k[0] : k[e(1541)](", ")) + e(2300), x[e(1509)][e(2303)] !== !1 && (r += " , message: 'should have ", k[e(1013)] == 1 ? r += e(1939) + x.util.escapeQuotes(k[0]) : r += e(1096) + x.util[e(596)](k[e(1541)](", ")), r += e(1538) + x[e(1829)].escapeQuotes(C) + e(874)), x[e(1509)][e(1840)] && (r += " , schema: validate.schema" + f + e(1428) + x[e(1313)] + " , data: " + d + " "), r += e(1006)) : r += e(1151);
          var n0 = r;
          r = J.pop(), !x[e(737)] && l ? x[e(1279)] ? r += e(2030) + n0 + e(464) : r += " validate.errors = [" + n0 + e(1822) : r += " var err = " + n0 + e(2369);
        } else {
          r += e(1619);
          var i0 = k;
          if (i0)
            for (var T, d0 = -1, a0 = i0[e(1013)] - 1; d0 < a0; ) {
              T = i0[d0 += 1];
              var F = x[e(1829)].getProperty(T), U = x.util.escapeQuotes(T), V = d + F;
              x[e(1509)][e(2006)] && (x[e(2022)] = x[e(1829)][e(676)](E, T, x[e(1509)][e(2115)])), r += e(1427) + V + e(1812), R && (r += " || ! Object.prototype.hasOwnProperty.call(" + d + ", '" + x[e(1829)].escapeQuotes(T) + e(1523)), r += e(503), x[e(1765)] !== !1 ? (r += e(1555) + e(1057) + e(790) + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](u) + " , params: { property: '" + x.util[e(596)](C) + "', missingProperty: '" + U + e(1715) + k[e(1013)] + ", deps: '" + x[e(1829)][e(596)](k[e(1013)] == 1 ? k[0] : k.join(", ")) + e(2300), x[e(1509)].messages !== !1 && (r += e(934), k.length == 1 ? r += "property " + x.util[e(596)](k[0]) : r += e(1096) + x[e(1829)][e(596)](k[e(1541)](", ")), r += e(1538) + x[e(1829)].escapeQuotes(C) + " is present' "), x[e(1509)].verbose && (r += e(2401) + f + e(1428) + x[e(1313)] + e(1911) + d + " "), r += e(1006)) : r += " {} ", r += e(628);
            }
        }
        r += e(1751), l && (m += "}", r += " else { ");
      }
    x[e(2022)] = E;
    var u0 = h[e(1925)];
    for (var C in w) {
      var O = w[C];
      (x[e(1509)].strictKeywords ? typeof O == e(570) && Object[e(522)](O)[e(1013)] > 0 || O === !1 : x[e(1829)].schemaHasRules(O, x[e(1029)][e(1878)])) && (r += " " + g + e(2233) + d + x[e(1829)][e(2034)](C) + e(1370), R && (r += " && Object.prototype.hasOwnProperty.call(" + d + ", '" + x[e(1829)][e(596)](C) + e(1523)), r += e(2353), h[e(540)] = O, h[e(1313)] = f + x.util[e(2034)](C), h[e(706)] = u + "/" + x[e(1829)].escapeFragment(C), r += "  " + x.validate(h) + " ", h[e(1925)] = u0, r += e(1146), l && (r += e(903) + g + e(2353), m += "}"));
    }
    return l && (r += e(829) + m + e(903) + v + " == errors) {"), r;
  }), at;
}
var st, Jr;
function A2() {
  return Jr || (Jr = 1, st = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x[e(847)], c = x[e(540)][t], f = x[e(1313)] + x[e(1829)].getProperty(t), u = x.errSchemaPath + "/" + t, l = !x.opts[e(1174)], d = e(1513) + (o || ""), v = e(2154) + n, h = x.opts.$data && c && c[e(538)];
    h && (r += e(1278) + n + e(1249) + x[e(1829)][e(1580)](c[e(538)], o, x[e(2282)]) + "; ");
    var m = "i" + n, g = e(540) + n;
    !h && (r += e(543) + g + e(1358) + f + ";"), r += e(1989) + v + ";", h && (r += e(803) + n + " === undefined) " + v + " = true; else if (!Array.isArray(schema" + n + e(870) + v + e(693)), r += "" + v + e(620) + m + e(2163) + m + "<" + g + ".length; " + m + "++) if (equal(" + d + ", " + g + "[" + m + "])) { " + v + e(1487), h && (r += e(2054)), r += e(1652) + v + e(1556);
    var w = w || [];
    w[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += " { keyword: '" + e(909) + e(790) + x.errorPath + e(1537) + x[e(1829)][e(2063)](u) + e(1318) + n + e(1006), x[e(1509)][e(2303)] !== !1 && (r += e(1804)), x[e(1509)].verbose && (r += e(2401) + f + e(1428) + x[e(1313)] + " , data: " + d + " "), r += e(1006)) : r += e(1151);
    var S = r;
    return r = w.pop(), !x.compositeRule && l ? x[e(1279)] ? r += e(2030) + S + "]); " : r += e(1763) + S + "]; return false; " : r += e(1138) + S + e(2369), r += " }", l && (r += e(1466)), r;
  }), st;
}
var nt, Qr;
function T2() {
  return Qr || (Qr = 1, nt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x.dataLevel, c = x[e(540)][t], f = x.schemaPath + x[e(1829)].getProperty(t), u = x[e(706)] + "/" + t, l = !x.opts[e(1174)], d = "data" + (o || "");
    if (x[e(1509)][e(1727)] === !1) return l && (r += e(1574)), r;
    var v = x.opts[e(538)] && c && c[e(538)], h;
    v ? (r += e(1278) + n + e(1249) + x[e(1829)].getData(c[e(538)], o, x[e(2282)]) + "; ", h = e(540) + n) : h = c;
    var m = x[e(1509)][e(1968)], g = Array.isArray(m);
    if (v) {
      var w = e(1727) + n, S = e(779) + n, R = e(1208) + n;
      r += e(543) + w + e(1798) + h + "]; var " + S + e(1137) + w + e(2490) + w + e(530) + w + e(861) + R + e(1249) + S + " && " + w + e(922) + S + ") { ", x.async && (r += e(1139) + n + e(1249) + w + e(1116)), r += " " + w + e(1249) + w + e(1018), v && (r += " (" + h + e(901) + h + e(2104)), r += " (", m != e(1599) && (r += " (" + h + e(837) + w + " ", g && (r += e(2077) + h + e(458)), r += e(2276)), r += " (" + w + e(1033) + R + e(1248) + a + e(1965) + w + e(2221), x[e(1279)] ? r += e(1863) + n + e(2031) + w + "(" + d + e(1517) + w + "(" + d + e(870) : r += " " + w + "(" + d + ") ", r += e(1606) + w + e(1105) + d + e(1464);
    } else {
      var w = x[e(1141)][c];
      if (!w) {
        if (m == "ignore") return x.logger[e(1034)](e(939) + c + e(838) + x[e(706)] + '"'), l && (r += e(1574)), r;
        if (g && m.indexOf(c) >= 0) return l && (r += " if (true) { "), r;
        throw new Error(e(939) + c + '" is used in schema at path "' + x[e(706)] + '"');
      }
      var S = typeof w == e(570) && !(w instanceof RegExp) && w.validate, R = S && w[e(1650)] || "string";
      if (S) {
        var O = w[e(1279)] === !0;
        w = w[e(454)];
      }
      if (R != a) return l && (r += e(1574)), r;
      if (O) {
        if (!x.async) throw new Error(e(1065));
        var k = e(1141) + x[e(1829)][e(2034)](c) + ".validate";
        r += e(1733) + k + "(" + d + e(1579);
      } else {
        r += e(1744);
        var k = e(1141) + x.util.getProperty(c);
        S && (k += e(1350)), typeof w == e(1806) ? r += " " + k + "(" + d + ") " : r += " " + k + e(1105) + d + ") ", r += e(2353);
      }
    }
    var E = E || [];
    E.push(r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + e(1727) + e(790) + x[e(2022)] + e(1537) + x.util.toQuotedString(u) + e(763), v ? r += "" + h : r += "" + x.util.toQuotedString(c), r += e(1462), x.opts.messages !== !1 && (r += e(1075), v ? r += e(1909) + h + e(1056) : r += "" + x[e(1829)].escapeQuotes(c), r += e(2235)), x.opts[e(1840)] && (r += e(1697), v ? r += e(1922) + f : r += "" + x.util[e(2063)](c), r += e(2194) + x[e(1313)] + e(1911) + d + " "), r += e(1006)) : r += e(1151);
    var C = r;
    return r = E[e(1903)](), !x[e(737)] && l ? x[e(1279)] ? r += e(2030) + C + "]); " : r += e(1763) + C + e(1822) : r += " var err = " + C + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } ", l && (r += e(1466)), r;
  }), nt;
}
var it, Gr;
function D2() {
  return Gr || (Gr = 1, it = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x.dataLevel, c = x.schema[t], f = x[e(1313)] + x[e(1829)].getProperty(t), u = x[e(706)] + "/" + t, l = !x[e(1509)][e(1174)], d = e(1513) + (o || ""), v = "valid" + n, h = e(460) + n, m = x[e(1829)][e(2014)](x);
    m[e(1748)]++;
    var g = "valid" + m[e(1748)], w = x[e(540)][e(2480)], S = x[e(540)][e(2301)], R = w !== void 0 && (x[e(1509)][e(1314)] ? typeof w == "object" && Object[e(522)](w)[e(1013)] > 0 || w === !1 : x.util.schemaHasRules(w, x[e(1029)][e(1878)])), O = S !== void 0 && (x[e(1509)][e(1314)] ? typeof S == "object" && Object[e(522)](S)[e(1013)] > 0 || S === !1 : x[e(1829)][e(1035)](S, x[e(1029)][e(1878)])), k = m[e(1925)];
    if (R || O) {
      var E;
      m[e(1765)] = !1, m.schema = c, m[e(1313)] = f, m.errSchemaPath = u, r += e(543) + h + e(2338) + v + e(1958);
      var C = x[e(737)];
      x[e(737)] = m[e(737)] = !0, r += "  " + x[e(454)](m) + " ", m.baseId = k, m[e(1765)] = !0, r += e(1562) + h + e(427) + h + e(2167) + h + e(604), x[e(737)] = m[e(737)] = C, R ? (r += e(903) + g + ") {  ", m[e(540)] = x[e(540)][e(2480)], m[e(1313)] = x.schemaPath + e(2086), m[e(706)] = x.errSchemaPath + e(582), r += "  " + x[e(454)](m) + " ", m.baseId = k, r += " " + v + e(1249) + g + "; ", R && O ? (E = "ifClause" + n, r += e(543) + E + e(1047)) : E = e(591), r += e(1006), O && (r += " else { ")) : r += e(1652) + g + e(2353), O && (m[e(540)] = x[e(540)][e(2301)], m[e(1313)] = x[e(1313)] + ".else", m[e(706)] = x[e(706)] + e(872), r += "  " + x[e(454)](m) + " ", m[e(1925)] = k, r += " " + v + " = " + g + "; ", R && O ? (E = "ifClause" + n, r += e(543) + E + e(1395)) : E = e(1957), r += e(1006)), r += e(1652) + v + e(2146), x[e(1765)] !== !1 ? (r += e(1555) + "if" + e(790) + x[e(2022)] + e(1537) + x[e(1829)].toQuotedString(u) + e(534) + E + " } ", x[e(1509)].messages !== !1 && (r += e(1167) + E + e(1170)), x.opts[e(1840)] && (r += e(2401) + f + " , parentSchema: validate.schema" + x[e(1313)] + e(1911) + d + " "), r += e(1006)) : r += e(1151), r += e(2369), !x[e(737)] && l && (x[e(1279)] ? r += e(1531) : r += " validate.errors = vErrors; return false; "), r += e(1751), l && (r += e(1466));
    } else l && (r += e(1574));
    return r;
  }), it;
}
var ot, Xr;
function j2() {
  return Xr || (Xr = 1, ot = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x[e(847)], c = x.schema[t], f = x[e(1313)] + x[e(1829)].getProperty(t), u = x[e(706)] + "/" + t, l = !x.opts[e(1174)], d = "data" + (o || ""), v = "valid" + n, h = e(460) + n, m = x[e(1829)][e(2014)](x), g = "";
    m[e(1748)]++;
    var w = e(2154) + m[e(1748)], S = "i" + n, R = m[e(847)] = x.dataLevel + 1, O = e(1513) + R, k = x[e(1925)];
    if (r += e(1989) + h + e(899) + v + ";", Array[e(1842)](c)) {
      var E = x[e(540)][e(1443)];
      if (E === !1) {
        r += " " + v + e(1249) + d + e(674) + c[e(1013)] + "; ";
        var C = u;
        u = x[e(706)] + e(1735), r += "  if (!" + v + ") {   ";
        var D = D || [];
        D[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + "additionalItems" + e(790) + x[e(2022)] + " , schemaPath: " + x.util[e(2063)](u) + e(2056) + c[e(1013)] + e(1006), x[e(1509)][e(2303)] !== !1 && (r += e(1760) + c[e(1013)] + e(1290)), x.opts[e(1840)] && (r += e(2125) + x.schemaPath + e(1911) + d + " "), r += " } ") : r += e(1151);
        var T = r;
        r = D[e(1903)](), !x[e(737)] && l ? x[e(1279)] ? r += e(2030) + T + e(464) : r += " validate.errors = [" + T + e(1822) : r += e(1138) + T + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += e(1006), u = C, l && (g += "}", r += " else { ");
      }
      var $ = c;
      if ($) {
        for (var I, F = -1, V = $.length - 1; F < V; )
          if (I = $[F += 1], x[e(1509)][e(1314)] ? typeof I == e(570) && Object.keys(I).length > 0 || I === !1 : x[e(1829)][e(1035)](I, x[e(1029)].all)) {
            r += " " + w + e(2297) + d + ".length > " + F + e(2353);
            var L = d + "[" + F + "]";
            m[e(540)] = I, m[e(1313)] = f + "[" + F + "]", m[e(706)] = u + "/" + F, m[e(2022)] = x[e(1829)][e(2243)](x[e(2022)], F, x[e(1509)][e(2115)], !0), m[e(2282)][R] = F;
            var U = x[e(454)](m);
            m[e(1925)] = k, x[e(1829)][e(2332)](U, O) < 2 ? r += " " + x[e(1829)].varReplace(U, O, L) + " " : r += e(543) + O + e(1249) + L + "; " + U + " ", r += e(1146), l && (r += e(903) + w + e(2353), g += "}");
          }
      }
      if (typeof E == e(570) && (x.opts[e(1314)] ? typeof E == e(570) && Object.keys(E)[e(1013)] > 0 || E === !1 : x.util[e(1035)](E, x[e(1029)][e(1878)]))) {
        m[e(540)] = E, m[e(1313)] = x[e(1313)] + ".additionalItems", m[e(706)] = x[e(706)] + e(1735), r += " " + w + e(2297) + d + e(1312) + c[e(1013)] + ") {  for (var " + S + " = " + c[e(1013)] + "; " + S + e(1528) + d + ".length; " + S + e(1857), m.errorPath = x.util[e(2243)](x[e(2022)], S, x[e(1509)][e(2115)], !0);
        var L = d + "[" + S + "]";
        m.dataPathArr[R] = S;
        var U = x.validate(m);
        m.baseId = k, x[e(1829)][e(2332)](U, O) < 2 ? r += " " + x.util[e(1421)](U, O, L) + " " : r += e(543) + O + e(1249) + L + "; " + U + " ", l && (r += e(1652) + w + e(1611)), r += e(1912), l && (r += e(903) + w + e(2353), g += "}");
      }
    } else if (x[e(1509)][e(1314)] ? typeof c == e(570) && Object.keys(c)[e(1013)] > 0 || c === !1 : x[e(1829)].schemaHasRules(c, x.RULES.all)) {
      m[e(540)] = c, m[e(1313)] = f, m[e(706)] = u, r += e(1219) + S + e(1249) + 0 + "; " + S + e(1528) + d + ".length; " + S + e(1857), m[e(2022)] = x[e(1829)].getPathExpr(x[e(2022)], S, x[e(1509)][e(2115)], !0);
      var L = d + "[" + S + "]";
      m.dataPathArr[R] = S;
      var U = x[e(454)](m);
      m[e(1925)] = k, x[e(1829)][e(2332)](U, O) < 2 ? r += " " + x.util[e(1421)](U, O, L) + " " : r += " var " + O + e(1249) + L + "; " + U + " ", l && (r += e(1652) + w + ") break; "), r += " }";
    }
    return l && (r += " " + g + " if (" + h + e(1439)), r;
  }), ot;
}
var ct, Yr;
function _r() {
  return Yr || (Yr = 1, ct = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x[e(847)], c = x[e(540)][t], f = x[e(1313)] + x[e(1829)][e(2034)](t), u = x[e(706)] + "/" + t, l = !x.opts.allErrors, k, d = "data" + (o || ""), v = x[e(1509)][e(538)] && c && c.$data, h;
    v ? (r += e(1278) + n + e(1249) + x.util[e(1580)](c.$data, o, x[e(2282)]) + "; ", h = e(540) + n) : h = c;
    var m = t == e(1618), g = m ? e(2124) : "exclusiveMinimum", w = x[e(540)][g], S = x[e(1509)][e(538)] && w && w.$data, R = m ? "<" : ">", O = m ? ">" : "<", k = void 0;
    if (!(v || typeof c == e(986) || c === void 0)) throw new Error(t + " must be number");
    if (!(S || w === void 0 || typeof w == e(986) || typeof w == e(741))) throw new Error(g + e(682));
    if (S) {
      var E = x[e(1829)].getData(w[e(538)], o, x.dataPathArr), C = "exclusive" + n, D = e(1712) + n, T = "exclIsNumber" + n, $ = "op" + n, I = e(1909) + $ + e(1056);
      r += e(945) + n + e(1249) + E + "; ", E = "schemaExcl" + n, r += e(543) + C + e(2363) + D + e(1137) + E + e(2184) + D + e(1377) + D + e(1148) + D + e(1975);
      var k = g, F = F || [];
      F.push(r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + (k || e(1102)) + e(790) + x.errorPath + e(1537) + x.util[e(2063)](u) + e(756), x[e(1509)].messages !== !1 && (r += e(1401) + g + e(1183)), x[e(1509)][e(1840)] && (r += " , schema: validate.schema" + f + e(1428) + x.schemaPath + e(1911) + d + " "), r += e(1006)) : r += e(1151);
      var V = r;
      r = F[e(1903)](), !x[e(737)] && l ? x[e(1279)] ? r += " throw new ValidationError([" + V + "]); " : r += e(1763) + V + e(1822) : r += e(1138) + V + e(2369), r += e(1837), v && (r += " (" + h + e(901) + h + " != 'number') || "), r += " " + D + e(2488) + C + e(1249) + h + e(1295) + E + " " + R + "= " + h + ") ? " + d + " " + O + "= " + E + e(1606) + d + " " + O + " " + h + e(2110) + C + e(1249) + E + e(1177) + d + " " + O + "= " + h + e(1606) + d + " " + O + " " + h + e(1752) + d + e(1162) + d + ") { var op" + n + e(1249) + C + e(1734) + R + e(1093) + R + "='; ", c === void 0 && (k = g, u = x.errSchemaPath + "/" + g, h = E, v = S);
    } else {
      var T = typeof w == "number", I = R;
      if (T && v) {
        var $ = "'" + I + "'";
        r += e(1427), v && (r += " (" + h + e(901) + h + " != 'number') || "), r += e(2370) + h + e(1295) + w + " " + R + "= " + h + " ? " + d + " " + O + "= " + w + e(1606) + d + " " + O + " " + h + e(1752) + d + " !== " + d + e(2353);
      } else {
        T && c === void 0 ? (C = !0, k = g, u = x[e(706)] + "/" + g, h = w, O += "=") : (T && (h = Math[e(m ? 477 : 1269)](w, c)), w === (T ? h : !0) ? (C = !0, k = g, u = x[e(706)] + "/" + g, O += "=") : (C = !1, I += "="));
        var $ = "'" + I + "'";
        r += e(1427), v && (r += " (" + h + e(901) + h + e(1844)), r += " " + d + " " + O + " " + h + e(642) + d + " !== " + d + e(2353);
      }
    }
    k = k || t;
    var F = F || [];
    F.push(r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + (k || e(502)) + e(790) + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](u) + e(1571) + $ + ", limit: " + h + e(1518) + C + e(1006), x[e(1509)][e(2303)] !== !1 && (r += e(825) + I + " ", v ? r += e(1909) + h : r += "" + h + "'"), x[e(1509)][e(1840)] && (r += " , schema:  ", v ? r += "validate.schema" + f : r += "" + c, r += e(2194) + x[e(1313)] + " , data: " + d + " "), r += e(1006)) : r += e(1151);
    var V = r;
    return r = F.pop(), !x[e(737)] && l ? x.async ? r += " throw new ValidationError([" + V + e(464) : r += e(1763) + V + e(1822) : r += " var err = " + V + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += e(1006), l && (r += e(1466)), r;
  }), ct;
}
var ft, ea;
function xa() {
  return ea || (ea = 1, ft = function(x, t, a) {
    var e = B, r = " ", n = x.level, o = x[e(847)], c = x.schema[t], f = x[e(1313)] + x[e(1829)][e(2034)](t), u = x[e(706)] + "/" + t, l = !x[e(1509)][e(1174)], g, d = "data" + (o || ""), v = x[e(1509)][e(538)] && c && c.$data, h;
    if (v ? (r += " var schema" + n + e(1249) + x[e(1829)][e(1580)](c[e(538)], o, x[e(2282)]) + "; ", h = "schema" + n) : h = c, !(v || typeof c == e(986))) throw new Error(t + e(882));
    var m = t == "maxItems" ? ">" : "<";
    r += e(439), v && (r += " (" + h + e(901) + h + " != 'number') || "), r += " " + d + ".length " + m + " " + h + e(2353);
    var g = t, w = w || [];
    w[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + (g || e(1699)) + "' , dataPath: (dataPath || '') + " + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](u) + e(2056) + h + e(1006), x[e(1509)][e(2303)] !== !1 && (r += " , message: 'should NOT have ", t == e(1665) ? r += e(1479) : r += e(2176), r += e(2312), v ? r += "' + " + h + e(1056) : r += "" + c, r += e(1290)), x[e(1509)][e(1840)] && (r += e(1697), v ? r += "validate.schema" + f : r += "" + c, r += "         , parentSchema: validate.schema" + x.schemaPath + e(1911) + d + " "), r += e(1006)) : r += " {} ";
    var S = r;
    return r = w[e(1903)](), !x[e(737)] && l ? x.async ? r += e(2030) + S + "]); " : r += e(1763) + S + e(1822) : r += e(1138) + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", l && (r += " else { "), r;
  }), ft;
}
var ut, ta;
function ra() {
  return ta || (ta = 1, ut = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x[e(847)], c = x[e(540)][t], f = x.schemaPath + x[e(1829)].getProperty(t), u = x[e(706)] + "/" + t, l = !x.opts[e(1174)], g, d = e(1513) + (o || ""), v = x.opts[e(538)] && c && c[e(538)], h;
    if (v ? (r += e(1278) + n + e(1249) + x[e(1829)][e(1580)](c[e(538)], o, x.dataPathArr) + "; ", h = e(540) + n) : h = c, !(v || typeof c == "number")) throw new Error(t + e(882));
    var m = t == e(1585) ? ">" : "<";
    r += "if ( ", v && (r += " (" + h + e(901) + h + e(1844)), x.opts[e(619)] === !1 ? r += " " + d + e(2405) : r += e(1828) + d + ") ", r += " " + m + " " + h + ") { ";
    var g = t, w = w || [];
    w.push(r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + (g || e(734)) + e(790) + x[e(2022)] + " , schemaPath: " + x[e(1829)][e(2063)](u) + e(2056) + h + " } ", x[e(1509)][e(2303)] !== !1 && (r += " , message: 'should NOT be ", t == e(1585) ? r += e(884) : r += e(842), r += e(2312), v ? r += e(1909) + h + e(1056) : r += "" + c, r += " characters' "), x.opts[e(1840)] && (r += " , schema:  ", v ? r += "validate.schema" + f : r += "" + c, r += e(2194) + x[e(1313)] + e(1911) + d + " "), r += e(1006)) : r += e(1151);
    var S = r;
    return r = w[e(1903)](), !x[e(737)] && l ? x.async ? r += e(2030) + S + e(464) : r += e(1763) + S + e(1822) : r += " var err = " + S + e(2369), r += "} ", l && (r += e(1466)), r;
  }), ut;
}
var dt, aa;
function sa() {
  return aa || (aa = 1, dt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x[e(847)], c = x.schema[t], f = x.schemaPath + x[e(1829)][e(2034)](t), u = x[e(706)] + "/" + t, l = !x[e(1509)][e(1174)], g, d = e(1513) + (o || ""), v = x[e(1509)][e(538)] && c && c[e(538)], h;
    if (v ? (r += e(1278) + n + e(1249) + x[e(1829)][e(1580)](c[e(538)], o, x[e(2282)]) + "; ", h = e(540) + n) : h = c, !(v || typeof c == e(986))) throw new Error(t + e(882));
    var m = t == e(1633) ? ">" : "<";
    r += "if ( ", v && (r += " (" + h + e(901) + h + e(1844)), r += e(2498) + d + e(1191) + m + " " + h + e(2353);
    var g = t, w = w || [];
    w.push(r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + (g || e(1524)) + e(790) + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](u) + e(2056) + h + e(1006), x.opts[e(2303)] !== !1 && (r += " , message: 'should NOT have ", t == e(1633) ? r += e(1479) : r += e(2176), r += " than ", v ? r += e(1909) + h + e(1056) : r += "" + c, r += e(1193)), x[e(1509)][e(1840)] && (r += e(1697), v ? r += e(1922) + f : r += "" + c, r += e(2194) + x[e(1313)] + " , data: " + d + " "), r += e(1006)) : r += e(1151);
    var S = r;
    return r = w[e(1903)](), !x.compositeRule && l ? x[e(1279)] ? r += e(2030) + S + e(464) : r += e(1763) + S + "]; return false; " : r += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", l && (r += e(1466)), r;
  }), dt;
}
var lt, na;
function M2() {
  return na || (na = 1, lt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x[e(847)], c = x[e(540)][t], f = x[e(1313)] + x[e(1829)][e(2034)](t), u = x[e(706)] + "/" + t, l = !x[e(1509)][e(1174)], d = e(1513) + (o || ""), v = x[e(1509)][e(538)] && c && c[e(538)], h;
    if (v ? (r += e(1278) + n + " = " + x[e(1829)][e(1580)](c[e(538)], o, x[e(2282)]) + "; ", h = e(540) + n) : h = c, !(v || typeof c == e(986))) throw new Error(t + e(882));
    r += e(447) + n + e(2074), v && (r += " " + h + e(846) + h + e(1283)), r += e(574) + n + " = " + d + " / " + h + ", ", x[e(1509)].multipleOfPrecision ? r += e(1746) + n + e(2105) + n + ") > 1e-" + x[e(1509)][e(1437)] + " " : r += e(1247) + n + e(738) + n + ") ", r += e(695), v && (r += e(753)), r += e(1984);
    var m = m || [];
    m[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + e(1766) + "' , dataPath: (dataPath || '') + " + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](u) + " , params: { multipleOf: " + h + e(1006), x.opts[e(2303)] !== !1 && (r += e(473), v ? r += e(1909) + h : r += "" + h + "'"), x[e(1509)][e(1840)] && (r += e(1697), v ? r += e(1922) + f : r += "" + c, r += e(2194) + x[e(1313)] + " , data: " + d + " "), r += e(1006)) : r += e(1151);
    var g = r;
    return r = m[e(1903)](), !x[e(737)] && l ? x.async ? r += " throw new ValidationError([" + g + e(464) : r += e(1763) + g + e(1822) : r += e(1138) + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", l && (r += e(1466)), r;
  }), lt;
}
var ht, ia;
function $2() {
  return ia || (ia = 1, ht = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x.dataLevel, c = x.schema[t], f = x.schemaPath + x[e(1829)][e(2034)](t), u = x[e(706)] + "/" + t, l = !x.opts[e(1174)], d = e(1513) + (o || ""), v = e(460) + n, h = x[e(1829)].copy(x);
    h[e(1748)]++;
    var m = e(2154) + h[e(1748)];
    if (x[e(1509)][e(1314)] ? typeof c == e(570) && Object[e(522)](c)[e(1013)] > 0 || c === !1 : x[e(1829)][e(1035)](c, x.RULES.all)) {
      h[e(540)] = c, h[e(1313)] = f, h[e(706)] = u, r += e(543) + v + " = errors;  ";
      var g = x[e(737)];
      x.compositeRule = h[e(737)] = !0, h.createErrors = !1;
      var w;
      h[e(1509)][e(1174)] && (w = h[e(1509)][e(1174)], h[e(1509)].allErrors = !1), r += " " + x[e(454)](h) + " ", h[e(1765)] = !0, w && (h[e(1509)].allErrors = w), x[e(737)] = h[e(737)] = g, r += e(903) + m + e(1556);
      var S = S || [];
      S[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + e(993) + e(790) + x[e(2022)] + " , schemaPath: " + x[e(1829)].toQuotedString(u) + e(756), x[e(1509)][e(2303)] !== !1 && (r += e(1411)), x[e(1509)][e(1840)] && (r += e(2401) + f + " , parentSchema: validate.schema" + x[e(1313)] + e(1911) + d + " "), r += e(1006)) : r += " {} ";
      var R = r;
      r = S[e(1903)](), !x.compositeRule && l ? x.async ? r += " throw new ValidationError([" + R + e(464) : r += e(1763) + R + e(1822) : r += e(1138) + R + e(2369), r += e(2459) + v + "; if (vErrors !== null) { if (" + v + e(2167) + v + "; else vErrors = null; } ", x[e(1509)][e(1174)] && (r += e(1006));
    } else r += e(560), x[e(1765)] !== !1 ? (r += " { keyword: '" + e(993) + e(790) + x.errorPath + e(1537) + x[e(1829)][e(2063)](u) + e(756), x.opts.messages !== !1 && (r += e(1411)), x.opts.verbose && (r += e(2401) + f + e(1428) + x.schemaPath + " , data: " + d + " "), r += " } ") : r += e(1151), r += e(2369), l && (r += e(1927));
    return r;
  }), ht;
}
var pt, oa;
function L2() {
  return oa || (oa = 1, pt = function(x, t, a) {
    var e = B, r = " ", n = x.level, o = x[e(847)], c = x.schema[t], f = x[e(1313)] + x[e(1829)][e(2034)](t), u = x[e(706)] + "/" + t, l = !x[e(1509)][e(1174)], d = e(1513) + (o || ""), v = e(2154) + n, h = e(460) + n, m = x[e(1829)][e(2014)](x), g = "";
    m[e(1748)]++;
    var w = "valid" + m[e(1748)], S = m[e(1925)], R = "prevValid" + n, O = e(974) + n;
    r += e(1989) + h + " = errors , " + R + e(1473) + v + " = false , " + O + e(1255);
    var k = x.compositeRule;
    x.compositeRule = m[e(737)] = !0;
    var E = c;
    if (E)
      for (var C, D = -1, T = E[e(1013)] - 1; D < T; )
        C = E[D += 1], (x[e(1509)][e(1314)] ? typeof C == e(570) && Object[e(522)](C)[e(1013)] > 0 || C === !1 : x[e(1829)][e(1035)](C, x[e(1029)].all)) ? (m[e(540)] = C, m[e(1313)] = f + "[" + D + "]", m[e(706)] = u + "/" + D, r += "  " + x[e(454)](m) + " ", m.baseId = S) : r += e(543) + w + e(1719), D && (r += e(903) + w + " && " + R + e(2353) + v + e(1774) + O + e(1980) + O + ", " + D + e(1198), g += "}"), r += e(903) + w + ") { " + v + " = " + R + e(1719) + O + e(1249) + D + e(600);
    return x[e(737)] = m[e(737)] = k, r += "" + g + "if (!" + v + e(2146), x[e(1765)] !== !1 ? (r += e(1555) + "oneOf" + e(790) + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](u) + e(1077) + O + e(1006), x.opts.messages !== !1 && (r += e(1008)), x[e(1509)][e(1840)] && (r += " , schema: validate.schema" + f + " , parentSchema: validate.schema" + x[e(1313)] + e(1911) + d + " "), r += e(1006)) : r += e(1151), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x.compositeRule && l && (x[e(1279)] ? r += " throw new ValidationError(vErrors); " : r += e(850)), r += "} else {  errors = " + h + e(427) + h + e(2167) + h + "; else vErrors = null; }", x.opts.allErrors && (r += " } "), r;
  }), pt;
}
var vt, ca;
function z2() {
  return ca || (ca = 1, vt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x[e(847)], c = x.schema[t], f = x.schemaPath + x[e(1829)][e(2034)](t), u = x[e(706)] + "/" + t, l = !x.opts.allErrors, d = e(1513) + (o || ""), v = x[e(1509)][e(538)] && c && c[e(538)], h;
    v ? (r += e(1278) + n + e(1249) + x[e(1829)][e(1580)](c.$data, o, x[e(2282)]) + "; ", h = "schema" + n) : h = c;
    var m = v ? "(new RegExp(" + h + "))" : x.usePattern(c);
    r += e(439), v && (r += " (" + h + e(901) + h + " != 'string') || "), r += " !" + m + e(1105) + d + ") ) {   ";
    var g = g || [];
    g[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + e(685) + "' , dataPath: (dataPath || '') + " + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](u) + e(492), v ? r += "" + h : r += "" + x[e(1829)][e(2063)](c), r += e(1462), x[e(1509)][e(2303)] !== !1 && (r += ` , message: 'should match pattern "`, v ? r += e(1909) + h + e(1056) : r += "" + x.util[e(596)](c), r += e(2235)), x[e(1509)][e(1840)] && (r += e(1697), v ? r += e(1922) + f : r += "" + x[e(1829)][e(2063)](c), r += e(2194) + x[e(1313)] + e(1911) + d + " "), r += " } ") : r += " {} ";
    var w = r;
    return r = g[e(1903)](), !x[e(737)] && l ? x[e(1279)] ? r += e(2030) + w + "]); " : r += e(1763) + w + e(1822) : r += e(1138) + w + e(2369), r += "} ", l && (r += e(1466)), r;
  }), vt;
}
var mt, fa;
function H2() {
  return fa || (fa = 1, mt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x[e(847)], c = x[e(540)][t], f = x[e(1313)] + x.util[e(2034)](t), u = x[e(706)] + "/" + t, l = !x[e(1509)].allErrors, d = e(1513) + (o || ""), v = e(460) + n, h = x[e(1829)][e(2014)](x), m = "";
    h[e(1748)]++;
    var g = e(2154) + h[e(1748)], w = "key" + n, S = "idx" + n, R = h.dataLevel = x.dataLevel + 1, O = e(1513) + R, k = "dataProperties" + n, E = Object[e(522)](c || {})[e(2142)](d0), C = x[e(540)][e(950)] || {}, D = Object[e(522)](C)[e(2142)](d0), T = x[e(540)][e(1985)], $ = E[e(1013)] || D.length, I = T === !1, F = typeof T == e(570) && Object[e(522)](T)[e(1013)], V = x[e(1509)][e(1749)], L = I || F || V, U = x[e(1509)].ownProperties, J = x[e(1925)], n0 = x[e(540)][e(1435)];
    if (n0 && !(x.opts[e(538)] && n0.$data) && n0[e(1013)] < x[e(1509)][e(1638)]) var i0 = x[e(1829)][e(866)](n0);
    function d0(jx) {
      var Mx = e;
      return jx !== Mx(2239);
    }
    if (r += "var " + v + e(899) + g + e(1781), U && (r += e(543) + k + e(449)), L) {
      if (U ? r += " " + k + e(1249) + k + e(805) + d + e(1910) + S + "=0; " + S + "<" + k + e(2138) + S + e(664) + w + e(1249) + k + "[" + S + "]; " : r += " for (var " + w + e(1553) + d + ") { ", $) {
        if (r += e(2215) + n + " = !(false ", E.length)
          if (E.length > 8) r += e(2059) + f + ".hasOwnProperty(" + w + ") ";
          else {
            var a0 = E;
            if (a0)
              for (var u0, w0 = -1, m0 = a0[e(1013)] - 1; w0 < m0; )
                u0 = a0[w0 += 1], r += e(642) + w + e(658) + x[e(1829)][e(2063)](u0) + " ";
          }
        if (D.length) {
          var D0 = D;
          if (D0)
            for (var k0, J0 = -1, A = D0[e(1013)] - 1; J0 < A; )
              k0 = D0[J0 += 1], r += e(642) + x[e(2409)](k0) + e(1105) + w + ") ";
        }
        r += e(1944) + n + e(2353);
      }
      if (V == e(1878)) r += e(1755) + d + "[" + w + "]; ";
      else {
        var N = x.errorPath, j = e(1909) + w + e(1056);
        if (x[e(1509)][e(2006)] && (x[e(2022)] = x[e(1829)].getPathExpr(x[e(2022)], w, x[e(1509)][e(2115)])), I)
          if (V) r += e(1755) + d + "[" + w + e(891);
          else {
            r += " " + g + e(1774);
            var Q = u;
            u = x[e(706)] + "/additionalProperties";
            var G = G || [];
            G.push(r), r = "", x.createErrors !== !1 ? (r += e(1555) + e(1985) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(1537) + x.util.toQuotedString(u) + e(435) + j + e(2300), x.opts.messages !== !1 && (r += " , message: '", x[e(1509)][e(2006)] ? r += e(2200) : r += "should NOT have additional properties", r += "' "), x[e(1509)][e(1840)] && (r += " , schema: false , parentSchema: validate.schema" + x[e(1313)] + e(1911) + d + " "), r += e(1006)) : r += " {} ";
            var Z = r;
            r = G[e(1903)](), !x.compositeRule && l ? x[e(1279)] ? r += e(2030) + Z + e(464) : r += " validate.errors = [" + Z + e(1822) : r += e(1138) + Z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", u = Q, l && (r += " break; ");
          }
        else if (F)
          if (V == "failing") {
            r += e(543) + v + e(453);
            var X = x[e(737)];
            x[e(737)] = h[e(737)] = !0, h[e(540)] = T, h.schemaPath = x[e(1313)] + e(1679), h.errSchemaPath = x[e(706)] + e(1315), h.errorPath = x[e(1509)]._errorDataPathProperty ? x[e(2022)] : x[e(1829)][e(2243)](x[e(2022)], w, x[e(1509)][e(2115)]);
            var r0 = d + "[" + w + "]";
            h[e(2282)][R] = w;
            var s0 = x[e(454)](h);
            h[e(1925)] = J, x.util[e(2332)](s0, O) < 2 ? r += " " + x[e(1829)][e(1421)](s0, O, r0) + " " : r += e(543) + O + e(1249) + r0 + "; " + s0 + " ", r += " if (!" + g + e(1348) + v + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + d + "[" + w + "]; }  ", x[e(737)] = h[e(737)] = X;
          } else {
            h[e(540)] = T, h.schemaPath = x[e(1313)] + e(1679), h[e(706)] = x.errSchemaPath + e(1315), h[e(2022)] = x[e(1509)][e(2006)] ? x.errorPath : x[e(1829)][e(2243)](x[e(2022)], w, x[e(1509)][e(2115)]);
            var r0 = d + "[" + w + "]";
            h[e(2282)][R] = w;
            var s0 = x[e(454)](h);
            h[e(1925)] = J, x[e(1829)][e(2332)](s0, O) < 2 ? r += " " + x[e(1829)].varReplace(s0, O, r0) + " " : r += e(543) + O + e(1249) + r0 + "; " + s0 + " ", l && (r += e(1652) + g + e(1611));
          }
        x[e(2022)] = N;
      }
      $ && (r += " } "), r += e(1146), l && (r += e(903) + g + e(2353), m += "}");
    }
    var e0 = x[e(1509)].useDefaults && !x[e(737)];
    if (E[e(1013)]) {
      var j0 = E;
      if (j0)
        for (var u0, F0 = -1, L0 = j0[e(1013)] - 1; F0 < L0; ) {
          u0 = j0[F0 += 1];
          var g0 = c[u0];
          if (x.opts.strictKeywords ? typeof g0 == "object" && Object[e(522)](g0)[e(1013)] > 0 || g0 === !1 : x[e(1829)][e(1035)](g0, x[e(1029)][e(1878)])) {
            var W0 = x[e(1829)].getProperty(u0), r0 = d + W0, ne = e0 && g0[e(1846)] !== void 0;
            h[e(540)] = g0, h[e(1313)] = f + W0, h[e(706)] = u + "/" + x[e(1829)][e(1084)](u0), h[e(2022)] = x[e(1829)].getPath(x[e(2022)], u0, x[e(1509)][e(2115)]), h[e(2282)][R] = x[e(1829)][e(2063)](u0);
            var s0 = x[e(454)](h);
            if (h.baseId = J, x[e(1829)][e(2332)](s0, O) < 2) {
              s0 = x[e(1829)][e(1421)](s0, O, r0);
              var Q0 = r0;
            } else {
              var Q0 = O;
              r += e(543) + O + e(1249) + r0 + "; ";
            }
            if (ne) r += " " + s0 + " ";
            else {
              if (i0 && i0[u0]) {
                r += e(1427) + Q0 + " === undefined ", U && (r += " || ! Object.prototype.hasOwnProperty.call(" + d + e(1097) + x[e(1829)][e(596)](u0) + "') "), r += e(2353) + g + e(1774);
                var N = x[e(2022)], Q = u, N0 = x.util[e(596)](u0);
                x[e(1509)]._errorDataPathProperty && (x[e(2022)] = x[e(1829)][e(676)](N, u0, x[e(1509)][e(2115)])), u = x[e(706)] + e(1335);
                var G = G || [];
                G[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += e(1555) + "required' , dataPath: (dataPath || '') + " + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](u) + e(1430) + N0 + "' } ", x[e(1509)][e(2303)] !== !1 && (r += " , message: '", x[e(1509)][e(2006)] ? r += e(1232) : r += e(1872) + N0 + "\\'", r += "' "), x[e(1509)][e(1840)] && (r += " , schema: validate.schema" + f + e(1428) + x.schemaPath + " , data: " + d + " "), r += e(1006)) : r += e(1151);
                var Z = r;
                r = G[e(1903)](), !x[e(737)] && l ? x[e(1279)] ? r += e(2030) + Z + e(464) : r += e(1763) + Z + e(1822) : r += " var err = " + Z + e(2369), u = Q, x[e(2022)] = N, r += " } else { ";
              } else l ? (r += e(1427) + Q0 + e(1812), U && (r += e(1310) + d + e(1097) + x.util.escapeQuotes(u0) + e(1523)), r += e(2353) + g + e(1886)) : (r += e(903) + Q0 + e(1370), U && (r += e(2149) + d + ", '" + x[e(1829)][e(596)](u0) + e(1523)), r += " ) { ");
              r += " " + s0 + e(1006);
            }
          }
          l && (r += e(903) + g + e(2353), m += "}");
        }
    }
    if (D.length) {
      var z0 = D;
      if (z0)
        for (var k0, Y0 = -1, Ie = z0[e(1013)] - 1; Y0 < Ie; ) {
          k0 = z0[Y0 += 1];
          var g0 = C[k0];
          if (x[e(1509)][e(1314)] ? typeof g0 == e(570) && Object[e(522)](g0)[e(1013)] > 0 || g0 === !1 : x[e(1829)][e(1035)](g0, x[e(1029)][e(1878)])) {
            h[e(540)] = g0, h[e(1313)] = x[e(1313)] + e(1841) + x[e(1829)][e(2034)](k0), h.errSchemaPath = x.errSchemaPath + e(1905) + x[e(1829)][e(1084)](k0), U ? r += " " + k + e(1249) + k + e(805) + d + e(1910) + S + e(2163) + S + "<" + k + e(2138) + S + e(664) + w + e(1249) + k + "[" + S + "]; " : r += e(1433) + w + e(1553) + d + e(2353), r += e(903) + x[e(2409)](k0) + e(1105) + w + ")) { ", h.errorPath = x.util[e(2243)](x[e(2022)], w, x[e(1509)][e(2115)]);
            var r0 = d + "[" + w + "]";
            h[e(2282)][R] = w;
            var s0 = x.validate(h);
            h[e(1925)] = J, x[e(1829)][e(2332)](s0, O) < 2 ? r += " " + x.util.varReplace(s0, O, r0) + " " : r += e(543) + O + e(1249) + r0 + "; " + s0 + " ", l && (r += e(1652) + g + e(1611)), r += e(1006), l && (r += e(2087) + g + " = true; "), r += e(1146), l && (r += e(903) + g + e(2353), m += "}");
          }
        }
    }
    return l && (r += " " + m + " if (" + v + " == errors) {"), r;
  }), mt;
}
var bt, ua;
function V2() {
  return ua || (ua = 1, bt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x[e(847)], c = x[e(540)][t], f = x[e(1313)] + x[e(1829)].getProperty(t), u = x[e(706)] + "/" + t, l = !x.opts.allErrors, d = e(1513) + (o || ""), v = "errs__" + n, h = x.util[e(2014)](x), m = "";
    h[e(1748)]++;
    var g = e(2154) + h[e(1748)];
    if (r += e(1989) + v + " = errors;", x[e(1509)][e(1314)] ? typeof c == e(570) && Object.keys(c)[e(1013)] > 0 || c === !1 : x[e(1829)].schemaHasRules(c, x[e(1029)][e(1878)])) {
      h[e(540)] = c, h.schemaPath = f, h[e(706)] = u;
      var w = e(1180) + n, S = e(812) + n, R = "i" + n, O = e(1909) + w + e(1056), k = h.dataLevel = x[e(847)] + 1, E = e(1513) + k, C = e(1953) + n, D = x.opts[e(2028)], T = x[e(1925)];
      D && (r += e(543) + C + e(2308)), D ? r += " " + C + e(1249) + C + " || Object.keys(" + d + e(1910) + S + e(2163) + S + "<" + C + e(2138) + S + e(664) + w + e(1249) + C + "[" + S + e(891) : r += e(1433) + w + e(1553) + d + ") { ", r += e(640) + n + e(2099);
      var $ = w, I = x.compositeRule;
      x[e(737)] = h[e(737)] = !0;
      var F = x[e(454)](h);
      h[e(1925)] = T, x[e(1829)].varOccurences(F, E) < 2 ? r += " " + x[e(1829)][e(1421)](F, E, $) + " " : r += e(543) + E + e(1249) + $ + "; " + F + " ", x.compositeRule = h[e(737)] = I, r += e(1652) + g + e(1087) + R + e(744) + n + "; " + R + e(2024) + R + e(1738) + R + "].propertyName = " + w + e(1628), x[e(1765)] !== !1 ? (r += e(1555) + "propertyNames" + e(790) + x[e(2022)] + e(1537) + x.util.toQuotedString(u) + e(436) + O + "' } ", x[e(1509)].messages !== !1 && (r += " , message: 'property name \\'" + O + e(649)), x[e(1509)][e(1840)] && (r += " , schema: validate.schema" + f + e(1428) + x[e(1313)] + e(1911) + d + " "), r += e(1006)) : r += " {} ", r += e(2369), !x[e(737)] && l && (x[e(1279)] ? r += e(1531) : r += e(850)), l && (r += e(1564)), r += e(1550);
    }
    return l && (r += " " + m + e(903) + v + " == errors) {"), r;
  }), bt;
}
var gt, da;
function U2() {
  return da || (da = 1, gt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x.dataLevel, c = x[e(540)][t], f = x[e(1313)] + x[e(1829)][e(2034)](t), u = x[e(706)] + "/" + t, l = !x[e(1509)][e(1174)], d = e(1513) + (o || ""), v = e(2154) + n, h = x.opts[e(538)] && c && c.$data;
    h && (r += e(1278) + n + e(1249) + x[e(1829)].getData(c.$data, o, x[e(2282)]) + "; ");
    var m = e(540) + n;
    if (!h)
      if (c[e(1013)] < x[e(1509)][e(1638)] && x[e(540)][e(1659)] && Object[e(522)](x[e(540)][e(1659)])[e(1013)]) {
        var k = [], g = c;
        if (g)
          for (var w, S = -1, R = g[e(1013)] - 1; S < R; ) {
            w = g[S += 1];
            var O = x[e(540)][e(1659)][w];
            !(O && (x[e(1509)][e(1314)] ? typeof O == e(570) && Object[e(522)](O)[e(1013)] > 0 || O === !1 : x.util[e(1035)](O, x.RULES[e(1878)]))) && (k[k[e(1013)]] = w);
          }
      } else var k = c;
    if (h || k[e(1013)]) {
      var E = x.errorPath, C = h || k[e(1013)] >= x.opts[e(1638)], D = x[e(1509)][e(2028)];
      if (l)
        if (r += e(2009) + n + "; ", C) {
          !h && (r += e(543) + m + e(1358) + f + "; ");
          var T = "i" + n, $ = "schema" + n + "[" + T + "]", I = e(1909) + $ + e(1056);
          x[e(1509)][e(2006)] && (x[e(2022)] = x[e(1829)].getPathExpr(E, $, x[e(1509)][e(2115)])), r += e(543) + v + e(1719), h && (r += " if (schema" + n + e(1184) + v + e(1620) + n + e(870) + v + e(693)), r += " for (var " + T + e(1092) + T + e(1528) + m + e(2138) + T + e(1857) + v + e(1249) + d + "[" + m + "[" + T + e(552), D && (r += " &&   Object.prototype.hasOwnProperty.call(" + d + ", " + m + "[" + T + e(2248)), r += e(2042) + v + e(2270), h && (r += e(2054)), r += e(1779) + v + ") {   ";
          var F = F || [];
          F[e(482)](r), r = "", x.createErrors !== !1 ? (r += e(1555) + e(1435) + "' , dataPath: (dataPath || '') + " + x[e(2022)] + " , schemaPath: " + x[e(1829)][e(2063)](u) + e(1430) + I + "' } ", x[e(1509)][e(2303)] !== !1 && (r += e(1401), x[e(1509)][e(2006)] ? r += e(1232) : r += e(1872) + I + "\\'", r += "' "), x[e(1509)][e(1840)] && (r += e(2401) + f + e(1428) + x[e(1313)] + e(1911) + d + " "), r += " } ") : r += " {} ";
          var V = r;
          r = F[e(1903)](), !x[e(737)] && l ? x[e(1279)] ? r += e(2030) + V + "]); " : r += e(1763) + V + e(1822) : r += e(1138) + V + e(2369), r += e(2336);
        } else {
          r += e(1427);
          var L = k;
          if (L)
            for (var U, T = -1, J = L[e(1013)] - 1; T < J; ) {
              U = L[T += 1], T && (r += e(642));
              var n0 = x[e(1829)][e(2034)](U), i0 = d + n0;
              r += e(1915) + i0 + e(1812), D && (r += e(1310) + d + e(1097) + x[e(1829)][e(596)](U) + e(1523)), r += e(1125) + n + e(1249) + x[e(1829)][e(2063)](x.opts[e(2115)] ? U : n0) + e(1688);
            }
          r += ") {  ";
          var $ = e(1109) + n, I = e(1909) + $ + e(1056);
          x.opts._errorDataPathProperty && (x.errorPath = x[e(1509)][e(2115)] ? x[e(1829)][e(2243)](E, $, !0) : E + e(2343) + $);
          var F = F || [];
          F[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += " { keyword: 'required" + e(790) + x[e(2022)] + e(1537) + x[e(1829)].toQuotedString(u) + " , params: { missingProperty: '" + I + "' } ", x.opts.messages !== !1 && (r += e(1401), x.opts[e(2006)] ? r += e(1232) : r += e(1872) + I + "\\'", r += "' "), x[e(1509)][e(1840)] && (r += e(2401) + f + e(1428) + x[e(1313)] + e(1911) + d + " "), r += e(1006)) : r += e(1151);
          var V = r;
          r = F[e(1903)](), !x[e(737)] && l ? x[e(1279)] ? r += e(2030) + V + e(464) : r += e(1763) + V + e(1822) : r += e(1138) + V + e(2369), r += e(2336);
        }
      else if (C) {
        !h && (r += e(543) + m + e(1358) + f + "; ");
        var T = "i" + n, $ = e(540) + n + "[" + T + "]", I = e(1909) + $ + " + '";
        x[e(1509)][e(2006)] && (x[e(2022)] = x[e(1829)][e(2243)](E, $, x[e(1509)].jsonPointers)), h && (r += e(903) + m + e(1456) + m + ")) {  var err =   ", x[e(1765)] !== !1 ? (r += e(1555) + e(1435) + "' , dataPath: (dataPath || '') + " + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](u) + e(1430) + I + e(2300), x[e(1509)][e(2303)] !== !1 && (r += e(1401), x[e(1509)][e(2006)] ? r += e(1232) : r += e(1872) + I + "\\'", r += "' "), x[e(1509)][e(1840)] && (r += e(2401) + f + e(1428) + x[e(1313)] + e(1911) + d + " "), r += " } ") : r += e(1151), r += e(1565) + m + e(754)), r += e(1433) + T + e(1092) + T + e(1528) + m + e(2138) + T + e(1472) + d + "[" + m + "[" + T + e(584), D && (r += e(1310) + d + ", " + m + "[" + T + e(2248)), r += e(503), x[e(1765)] !== !1 ? (r += e(1555) + e(1435) + e(790) + x[e(2022)] + e(1537) + x[e(1829)].toQuotedString(u) + " , params: { missingProperty: '" + I + "' } ", x[e(1509)].messages !== !1 && (r += e(1401), x[e(1509)][e(2006)] ? r += e(1232) : r += e(1872) + I + "\\'", r += "' "), x[e(1509)].verbose && (r += e(2401) + f + e(1428) + x.schemaPath + e(1911) + d + " "), r += e(1006)) : r += " {} ", r += e(1036), h && (r += "  }  ");
      } else {
        var d0 = k;
        if (d0)
          for (var U, a0 = -1, u0 = d0[e(1013)] - 1; a0 < u0; ) {
            U = d0[a0 += 1];
            var n0 = x[e(1829)][e(2034)](U), I = x[e(1829)][e(596)](U), i0 = d + n0;
            x[e(1509)][e(2006)] && (x[e(2022)] = x[e(1829)][e(676)](E, U, x[e(1509)].jsonPointers)), r += e(1427) + i0 + e(1812), D && (r += " || ! Object.prototype.hasOwnProperty.call(" + d + ", '" + x[e(1829)].escapeQuotes(U) + e(1523)), r += e(503), x[e(1765)] !== !1 ? (r += e(1555) + "required" + e(790) + x[e(2022)] + e(1537) + x.util[e(2063)](u) + " , params: { missingProperty: '" + I + e(2300), x.opts[e(2303)] !== !1 && (r += " , message: '", x[e(1509)][e(2006)] ? r += "is a required property" : r += e(1872) + I + "\\'", r += "' "), x[e(1509)][e(1840)] && (r += e(2401) + f + e(1428) + x.schemaPath + " , data: " + d + " "), r += e(1006)) : r += e(1151), r += e(628);
          }
      }
      x[e(2022)] = E;
    } else l && (r += e(1671));
    return r;
  }), gt;
}
var yt, la;
function Z2() {
  return la || (la = 1, yt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1748)], o = x[e(847)], c = x[e(540)][t], f = x.schemaPath + x[e(1829)].getProperty(t), u = x[e(706)] + "/" + t, l = !x[e(1509)][e(1174)], d = "data" + (o || ""), v = e(2154) + n, h = x.opts[e(538)] && c && c.$data, m;
    if (h ? (r += e(1278) + n + e(1249) + x[e(1829)][e(1580)](c[e(538)], o, x.dataPathArr) + "; ", m = e(540) + n) : m = c, (c || h) && x.opts[e(1415)] !== !1) {
      h && (r += e(543) + v + e(2184) + m + e(578) + m + e(1184) + v + e(824) + m + e(2484) + v + e(797)), r += e(1535) + d + e(916) + v + e(687);
      var g = x.schema[e(1040)] && x.schema.items[e(1650)], w = Array[e(1842)](g);
      if (!g || g == e(570) || g == "array" || w && (g[e(1280)]("object") >= 0 || g[e(1280)](e(1457)) >= 0)) r += e(2231) + d + "[i], " + d + e(1393) + v + e(782);
      else {
        r += " var itemIndices = {}, item; for (;i--;) { var item = " + d + "[i]; ";
        var S = e(2148) + (w ? "s" : "");
        r += e(903) + x[e(1829)][S](g, "item", x[e(1509)][e(508)], !0) + e(2143), w && (r += ` if (typeof item == 'string') item = '"' + item; `), r += e(773) + v + e(1365);
      }
      r += e(1006), h && (r += e(2054)), r += e(1652) + v + e(1556);
      var R = R || [];
      R[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += " { keyword: '" + e(1415) + e(790) + x[e(2022)] + e(1537) + x[e(1829)][e(2063)](u) + e(1485), x[e(1509)][e(2303)] !== !1 && (r += e(2366)), x[e(1509)].verbose && (r += " , schema:  ", h ? r += e(1922) + f : r += "" + c, r += e(2194) + x.schemaPath + " , data: " + d + " "), r += e(1006)) : r += e(1151);
      var O = r;
      r = R.pop(), !x[e(737)] && l ? x.async ? r += " throw new ValidationError([" + O + e(464) : r += e(1763) + O + "]; return false; " : r += " var err = " + O + e(2369), r += e(1006), l && (r += e(1466));
    } else l && (r += e(1574));
    return r;
  }), yt;
}
var wt, ha;
function B2() {
  return ha || (ha = 1, wt = { $ref: C2(), allOf: I2(), anyOf: R2(), $comment: F2(), const: N2(), contains: O2(), dependencies: q2(), enum: A2(), format: T2(), if: D2(), items: j2(), maximum: _r(), minimum: _r(), maxItems: xa(), minItems: xa(), maxLength: ra(), minLength: ra(), maxProperties: sa(), minProperties: sa(), multipleOf: M2(), not: $2(), oneOf: L2(), pattern: z2(), properties: H2(), propertyNames: V2(), required: U2(), uniqueItems: Z2(), validate: cn() }), wt;
}
var St, pa;
function K2() {
  if (pa) return St;
  pa = 1;
  var i = B2(), x = Be().toHash;
  return St = function() {
    var a = B, e = [{ type: "number", rules: [{ maximum: [a(2124)] }, { minimum: [a(2045)] }, a(1766), a(1727)] }, { type: a(2203), rules: [a(1585), a(954), a(685), a(1727)] }, { type: a(1457), rules: [a(1665), a(1583), a(1040), a(1049), "uniqueItems"] }, { type: a(570), rules: ["maxProperties", a(523), a(1435), a(1057), "propertyNames", { properties: [a(1985), a(950)] }] }, { rules: [a(1655), a(1762), "enum", "not", "anyOf", "oneOf", a(2391), "if"] }], r = [a(1650), a(2458)], n = [a(898), "$id", "id", "$data", a(1778), a(1287), "description", a(1846), a(616), a(1587), "readOnly", a(1305), a(1986), a(1101), a(1443), a(2480), a(2301)], o = [a(986), a(688), a(2203), a(1457), "object", "boolean", "null"];
    return e[a(1878)] = x(r), e[a(840)] = x(o), e[a(720)](function(c) {
      var f = a;
      c.rules = c[f(2263)][f(2299)](function(u) {
        var l = f, d;
        if (typeof u == "object") {
          var v = Object.keys(u)[0];
          d = u[v], u = v, d[l(720)](function(m) {
            var g = l;
            r[g(482)](m), e[g(1878)][m] = !0;
          });
        }
        r[l(482)](u);
        var h = e[l(1878)][u] = { keyword: u, code: i[u], implements: d };
        return h;
      }), e[f(1878)][f(2458)] = { keyword: f(2458), code: i[f(2458)] }, c[f(1650)] && (e[f(840)][c[f(1650)]] = c);
    }), e[a(735)] = x(r.concat(n)), e[a(2162)] = {}, e;
  }, St;
}
var Et, va;
function W2() {
  var i = s;
  if (va) return Et;
  va = 1;
  var x = [i(1766), i(1618), "exclusiveMaximum", i(1706), "exclusiveMinimum", i(1585), i(954), "pattern", "additionalItems", "maxItems", i(1583), i(1415), i(1633), i(523), i(1435), "additionalProperties", "enum", i(1727), i(1762)];
  return Et = function(t, a) {
    for (var e = i, r = 0; r < a.length; r++) {
      t = JSON[e(1503)](JSON[e(2225)](t));
      var n = a[r][e(519)]("/"), o = t, c;
      for (c = 1; c < n[e(1013)]; c++) o = o[n[c]];
      for (c = 0; c < x[e(1013)]; c++) {
        var f = x[c], u = o[f];
        u && (o[f] = { anyOf: [u, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] });
      }
    }
    return t;
  }, Et;
}
var Pt, ma;
function J2() {
  var i = s;
  if (ma) return Pt;
  ma = 1;
  var x = rr()[i(1128)];
  Pt = t;
  function t(a, e, r) {
    var n = i, o = this;
    if (typeof this._opts[n(865)] != "function") throw new Error(n(2294));
    typeof e == n(1806) && (r = e, e = void 0);
    var c = f(a)[n(2480)](function() {
      var l = n, d = o[l(836)](a, void 0, e);
      return d[l(454)] || u(d);
    });
    return r && c[n(2480)](function(l) {
      r(null, l);
    }, r), c;
    function f(l) {
      var d = n, v = l.$schema;
      return v && !o[d(1924)](v) ? t[d(1122)](o, { $ref: v }, !0) : Promise.resolve();
    }
    function u(l) {
      var d = n;
      try {
        return o[d(816)](l);
      } catch (h) {
        if (h instanceof x) return v(h);
        throw h;
      }
      function v(h) {
        var m = d, g = h[m(1392)];
        if (R(g)) throw new Error(m(1839) + g + m(810) + h[m(944)] + m(1623));
        var w = o._loadingSchemas[g];
        return !w && (w = o[m(1539)][g] = o[m(2397)].loadSchema(g), w.then(S, S)), w[m(2480)](function(O) {
          var k = m;
          if (!R(g)) return f(O)[k(2480)](function() {
            var E = k;
            R(g) || o[E(2258)](O, g, void 0, e);
          });
        }).then(function() {
          return u(l);
        });
        function S() {
          var O = m;
          delete o[O(1539)][g];
        }
        function R(O) {
          var k = m;
          return o[k(2491)][O] || o[k(2444)][O];
        }
      }
    }
  }
  return Pt;
}
var kt, ba;
function Q2() {
  return ba || (ba = 1, kt = function(x, t, a) {
    var e = B, r = " ", n = x.level, o = x.dataLevel, c = x.schema[t], f = x.schemaPath + x[e(1829)][e(2034)](t), u = x[e(706)] + "/" + t, l = !x[e(1509)][e(1174)], d, v = e(1513) + (o || ""), h = "valid" + n, m = "errs__" + n, g = x[e(1509)][e(538)] && c && c[e(538)], w;
    g ? (r += " var schema" + n + e(1249) + x[e(1829)][e(1580)](c[e(538)], o, x[e(2282)]) + "; ", w = e(540) + n) : w = c;
    var S = this, R = e(2274) + n, O = S[e(2274)], k = "", E, C, D, T, $;
    if (g && O[e(538)]) {
      $ = e(1892) + n;
      var I = O[e(1252)];
      r += e(543) + R + e(2210) + t + e(2057) + $ + " = " + R + ".validate;";
    } else {
      if (T = x[e(966)](S, c, x.schema, x), !T) return;
      w = e(1922) + f, $ = T[e(2440)], E = O.compile, C = O[e(608)], D = O[e(961)];
    }
    var F = $ + ".errors", V = "i" + n, L = e(1225) + n, U = O[e(1279)];
    if (U && !x.async) throw new Error(e(1238));
    if (!(C || D) && (r += "" + F + e(1546)), r += e(1989) + m + e(899) + h + ";", g && O.$data && (k += "}", r += e(903) + w + e(1345) + h + e(1886), I && (k += "}", r += " " + h + e(1249) + R + e(1284) + w + "); if (" + h + e(2353))), C) O[e(804)] ? r += " " + T[e(454)] + " " : r += " " + h + e(1249) + T.validate + "; ";
    else if (D) {
      var J = x[e(1829)].copy(x), k = "";
      J[e(1748)]++;
      var n0 = e(2154) + J.level;
      J.schema = T.validate, J[e(1313)] = "";
      var i0 = x[e(737)];
      x[e(737)] = J[e(737)] = !0;
      var d0 = x[e(454)](J)[e(1081)](/validate\.schema/g, $);
      x[e(737)] = J.compositeRule = i0, r += " " + d0;
    } else {
      var a0 = a0 || [];
      a0[e(482)](r), r = "", r += "  " + $ + e(1612), x[e(1509)].passContext ? r += e(2420) : r += e(558), E || O[e(540)] === !1 ? r += e(1817) + v + " " : r += e(1817) + w + " , " + v + e(2206) + x[e(1313)] + " ", r += e(2145), x.errorPath != '""' && (r += e(2343) + x.errorPath);
      var u0 = o ? e(1513) + (o - 1 || "") : e(1111), w0 = o ? x.dataPathArr[o] : e(1879);
      r += " , " + u0 + e(1817) + w0 + e(1432);
      var m0 = r;
      r = a0[e(1903)](), O[e(1483)] === !1 ? (r += " " + h + " = ", U && (r += "await "), r += "" + m0 + "; ") : U ? (F = e(1194) + n, r += e(543) + F + e(1519) + h + e(852) + m0 + "; } catch (e) { " + h + e(1946) + F + e(2379)) : r += " " + F + e(1255) + h + e(1249) + m0 + "; ";
    }
    if (O[e(1601)] && (r += e(903) + u0 + ") " + v + e(1249) + u0 + "[" + w0 + "];"), r += "" + k, O[e(2154)]) l && (r += e(1574));
    else {
      r += e(1427), O.valid === void 0 ? (r += " !", D ? r += "" + n0 : r += "" + h) : r += " " + !O.valid + " ", r += ") { ", d = S.keyword;
      var a0 = a0 || [];
      a0[e(482)](r), r = "";
      var a0 = a0 || [];
      a0[e(482)](r), r = "", x[e(1765)] !== !1 ? (r += " { keyword: '" + (d || e(2162)) + "' , dataPath: (dataPath || '') + " + x[e(2022)] + " , schemaPath: " + x.util[e(2063)](u) + e(1504) + S[e(546)] + "' } ", x[e(1509)][e(2303)] !== !1 && (r += e(2183) + S[e(546)] + e(739)), x[e(1509)][e(1840)] && (r += " , schema: validate.schema" + f + e(1428) + x[e(1313)] + e(1911) + v + " "), r += e(1006)) : r += e(1151);
      var D0 = r;
      r = a0[e(1903)](), !x[e(737)] && l ? x[e(1279)] ? r += e(2030) + D0 + e(464) : r += e(1763) + D0 + e(1822) : r += e(1138) + D0 + e(2369);
      var k0 = r;
      r = a0[e(1903)](), C ? O[e(1483)] ? O.errors != e(1641) && (r += e(1219) + V + "=" + m + "; " + V + e(2024) + V + e(664) + L + " = vErrors[" + V + e(651) + L + ".dataPath === undefined) " + L + e(613) + x[e(2022)] + "; if (" + L + ".schemaPath === undefined) { " + L + e(2192) + u + e(1945), x[e(1509)].verbose && (r += " " + L + e(440) + w + "; " + L + ".data = " + v + "; "), r += e(1006)) : O.errors === !1 ? r += " " + k0 + " " : (r += e(903) + m + e(1104) + k0 + e(2348) + V + "=" + m + "; " + V + e(2024) + V + e(664) + L + e(1790) + V + e(651) + L + ".dataPath === undefined) " + L + e(613) + x.errorPath + e(2184) + L + ".schemaPath === undefined) { " + L + e(2192) + u + '"; } ', x.opts.verbose && (r += " " + L + e(440) + w + "; " + L + e(792) + v + "; "), r += e(786)) : D ? (r += e(1609), x.createErrors !== !1 ? (r += e(1555) + (d || e(2162)) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(1537) + x.util[e(2063)](u) + e(1504) + S.keyword + e(2300), x[e(1509)].messages !== !1 && (r += e(2183) + S[e(546)] + `" keyword validation' `), x[e(1509)][e(1840)] && (r += e(2401) + f + e(1428) + x[e(1313)] + e(1911) + v + " "), r += e(1006)) : r += " {} ", r += e(2369), !x[e(737)] && l && (x[e(1279)] ? r += e(1531) : r += e(850))) : O[e(1483)] === !1 ? r += " " + k0 + " " : (r += e(727) + F + e(636) + F + e(1362) + F + e(1169) + V + "=" + m + "; " + V + e(2024) + V + e(664) + L + e(1790) + V + e(651) + L + ".dataPath === undefined) " + L + e(613) + x[e(2022)] + e(1769) + L + e(2192) + u + e(2073), x[e(1509)][e(1840)] && (r += " " + L + e(440) + w + "; " + L + ".data = " + v + "; "), r += e(1998) + k0 + e(1006)), r += e(1006), l && (r += " else { ");
    }
    return r;
  }), kt;
}
const G2 = s(561), X2 = "http://json-schema.org/draft-07/schema#", Y2 = s(428), _2 = { schemaArray: { type: s(1457), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: s(688), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: [s(1457), s(741), s(688), "null", s(986), s(570), s(2203)] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, eo = [s(570), s(741)], xo = { $id: { type: s(2203), format: s(2067) }, $schema: { type: s(2203), format: s(1589) }, $ref: { type: s(2203), format: "uri-reference" }, $comment: { type: "string" }, title: { type: s(2203) }, description: { type: s(2203) }, default: !0, readOnly: { type: s(741), default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: s(986), exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: s(986) }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: s(960) }, minLength: { $ref: s(1417) }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: s(1254) }], default: !0 }, maxItems: { $ref: s(960) }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: s(741), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: s(960) }, minProperties: { $ref: s(1417) }, required: { $ref: s(1357) }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: s(570), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: s(570), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: s(1357) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: s(1457), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: s(1153) }, { type: "array", items: { $ref: s(1153) }, minItems: 1, uniqueItems: !0 }] }, format: { type: s(2203) }, contentMediaType: { type: s(2203) }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: s(1254) }, anyOf: { $ref: s(1254) }, oneOf: { $ref: s(1254) }, not: { $ref: "#" } }, fn = { $schema: G2, $id: X2, title: Y2, definitions: _2, type: eo, properties: xo, default: !0 };
var Ct, ga;
function to() {
  var i = s;
  if (ga) return Ct;
  ga = 1;
  var x = fn;
  return Ct = { $id: i(907), definitions: { simpleTypes: x[i(616)][i(1492)] }, type: "object", dependencies: { schema: [i(454)], $data: [i(454)], statements: ["inline"], valid: { not: { required: [i(961)] } } }, properties: { type: x[i(1659)][i(1650)], schema: { type: "boolean" }, statements: { type: "boolean" }, dependencies: { type: i(1457), items: { type: i(2203) } }, metaSchema: { type: i(570) }, modifying: { type: "boolean" }, valid: { type: i(741) }, $data: { type: "boolean" }, async: { type: i(741) }, errors: { anyOf: [{ type: i(741) }, { const: "full" }] } } }, Ct;
}
var It, ya;
function ro() {
  if (ya) return It;
  ya = 1;
  var i = /^[a-z_$][a-z0-9_$-]*$/i, x = Q2(), t = to();
  It = { add: a, get: e, remove: r, validate: n };
  function a(o, c) {
    var f = B, u = this[f(1029)];
    if (u.keywords[o]) throw new Error(f(594) + o + f(762));
    if (!i[f(857)](o)) throw new Error(f(594) + o + f(1811));
    if (c) {
      this.validateKeyword(c, !0);
      var l = c[f(1650)];
      if (Array[f(1842)](l))
        for (var d = 0; d < l[f(1013)]; d++) h(o, l[d], c);
      else h(o, l, c);
      var v = c.metaSchema;
      v && (c[f(538)] && this[f(2397)].$data && (v = { anyOf: [v, { $ref: f(831) }] }), c[f(1252)] = this[f(2127)](v, !0));
    }
    u[f(735)][o] = u[f(1878)][o] = !0;
    function h(m, g, w) {
      for (var S = f, R, O = 0; O < u.length; O++) {
        var k = u[O];
        if (k.type == g) {
          R = k;
          break;
        }
      }
      !R && (R = { type: g, rules: [] }, u.push(R));
      var E = { keyword: m, definition: w, custom: !0, code: x, implements: w[S(1328)] };
      R[S(2263)][S(482)](E), u[S(2162)][m] = E;
    }
    return this;
  }
  function e(o) {
    var c = B, f = this.RULES.custom[o];
    return f ? f.definition : this.RULES[c(735)][o] || !1;
  }
  function r(o) {
    var c = B, f = this[c(1029)];
    delete f[c(735)][o], delete f[c(1878)][o], delete f.custom[o];
    for (var u = 0; u < f.length; u++)
      for (var l = f[u][c(2263)], d = 0; d < l[c(1013)]; d++)
        if (l[d][c(546)] == o) {
          l[c(991)](d, 1);
          break;
        }
    return this;
  }
  function n(o, c) {
    var f = B;
    n[f(1483)] = null;
    var u = this._validateKeyword = this[f(1969)] || this.compile(t, !0);
    if (u(o)) return !0;
    if (n.errors = u[f(1483)], c) throw new Error("custom keyword definition is invalid: " + this[f(997)](u.errors));
    return !1;
  }
  return It;
}
const ao = s(561), so = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", no = s(2026), io = s(570), oo = ["$data"], co = { $data: { type: s(2203), anyOf: [{ format: s(1962) }, { format: s(1337) }] } }, fo = !1, uo = { $schema: ao, $id: so, description: no, type: io, required: oo, properties: co, additionalProperties: fo };
var Rt, wa;
function lo() {
  var i = s;
  if (wa) return Rt;
  wa = 1;
  var x = E2(), t = tr(), a = P2(), e = nn(), r = on(), n = k2(), o = K2(), c = W2(), f = Be();
  Rt = m, m[i(2017)][i(454)] = g, m[i(2017)][i(2127)] = w, m[i(2017)].addSchema = S, m[i(2017)].addMetaSchema = R, m[i(2017)][i(1252)] = O, m[i(2017)].getSchema = E, m[i(2017)][i(2049)] = T, m[i(2017)][i(2290)] = i0, m[i(2017)][i(997)] = n0, m[i(2017)][i(836)] = I, m[i(2017)][i(816)] = F, m.prototype.compileAsync = J2();
  var u = ro();
  m.prototype[i(2046)] = u[i(2293)], m.prototype.getKeyword = u.get, m[i(2017)].removeKeyword = u.remove, m.prototype[i(889)] = u[i(454)];
  var l = rr();
  m[i(2361)] = l[i(2457)], m[i(2004)] = l[i(1128)], m[i(1913)] = c;
  var d = i(1349), v = [i(1749), i(445), "coerceTypes", i(1988)], h = ["/properties"];
  function m(A) {
    var N = i;
    if (!(this instanceof m)) return new m(A);
    A = this._opts = f[N(2014)](A) || {}, k0(this), this._schemas = {}, this[N(2491)] = {}, this[N(1897)] = {}, this._formats = n(A[N(1727)]), this[N(2019)] = A[N(2464)] || new a(), this[N(1539)] = {}, this[N(2413)] = [], this[N(1029)] = o(), this._getId = V(A), A[N(1638)] = A[N(1638)] || 1 / 0, A[N(2324)] == N(2334) && (A[N(2006)] = !0), A[N(877)] === void 0 && (A[N(877)] = r), this[N(1720)] = D0(this), A[N(1141)] && u0(this), A.keywords && w0(this), d0(this), typeof A[N(808)] == N(570) && this[N(1027)](A[N(808)]), A[N(495)] && this[N(2046)]("nullable", { metaSchema: { type: "boolean" } }), a0(this);
  }
  function g(A, N) {
    var j = i, Q;
    if (typeof A == j(2203)) {
      if (Q = this.getSchema(A), !Q) throw new Error(j(1282) + A + '"');
    } else {
      var G = this[j(836)](A);
      Q = G[j(454)] || this[j(816)](G);
    }
    var Z = Q(N);
    return Q.$async !== !0 && (this[j(1483)] = Q[j(1483)]), Z;
  }
  function w(A, N) {
    var j = i, Q = this._addSchema(A, void 0, N);
    return Q[j(454)] || this[j(816)](Q);
  }
  function S(A, N, j, Q) {
    var G = i;
    if (Array[G(1842)](A)) {
      for (var Z = 0; Z < A[G(1013)]; Z++) this.addSchema(A[Z], void 0, j, Q);
      return this;
    }
    var X = this[G(1657)](A);
    if (X !== void 0 && typeof X != "string") throw new Error(G(1932));
    return N = t[G(2327)](N || X), m0(this, N), this[G(2444)][N] = this[G(836)](A, j, Q, !0), this;
  }
  function R(A, N, j) {
    return this.addSchema(A, N, j, !0), this;
  }
  function O(A, N) {
    var j = i, Q = A[j(898)];
    if (Q !== void 0 && typeof Q != j(2203)) throw new Error(j(2165));
    if (Q = Q || this[j(2397)].defaultMeta || k(this), !Q) return this[j(2471)].warn(j(697)), this[j(1483)] = null, !0;
    var G = this[j(454)](Q, A);
    if (!G && N) {
      var Z = "schema is invalid: " + this[j(997)]();
      if (this._opts[j(1252)] == j(1236)) this[j(2471)][j(1316)](Z);
      else throw new Error(Z);
    }
    return G;
  }
  function k(A) {
    var N = i, j = A._opts[N(808)];
    return A[N(2397)][N(905)] = typeof j == N(570) ? A._getId(j) || j : A[N(1924)](d) ? d : void 0, A[N(2397)][N(905)];
  }
  function E(A) {
    var N = i, j = D(this, A);
    switch (typeof j) {
      case N(570):
        return j[N(454)] || this[N(816)](j);
      case N(2203):
        return this.getSchema(j);
      case N(2220):
        return C(this, A);
    }
  }
  function C(A, N) {
    var j = i, Q = t[j(540)][j(1122)](A, { schema: {} }, N);
    if (Q) {
      var G = Q[j(540)], Z = Q[j(1360)], X = Q.baseId, r0 = x[j(1122)](A, G, Z, void 0, X);
      return A[j(1897)][N] = new e({ ref: N, fragment: !0, schema: G, root: Z, baseId: X, validate: r0 }), r0;
    }
  }
  function D(A, N) {
    var j = i;
    return N = t[j(2327)](N), A._schemas[N] || A._refs[N] || A[j(1897)][N];
  }
  function T(A) {
    var N = i;
    if (A instanceof RegExp) return $(this, this[N(2444)], A), $(this, this[N(2491)], A), this;
    switch (typeof A) {
      case N(2220):
        return $(this, this[N(2444)]), $(this, this[N(2491)]), this[N(2019)].clear(), this;
      case "string":
        var j = D(this, A);
        return j && this[N(2019)][N(573)](j[N(1747)]), delete this[N(2444)][A], delete this[N(2491)][A], this;
      case N(570):
        var Q = this[N(2397)][N(877)], G = Q ? Q(A) : A;
        this[N(2019)][N(573)](G);
        var Z = this[N(1657)](A);
        Z && (Z = t[N(2327)](Z), delete this._schemas[Z], delete this._refs[Z]);
    }
    return this;
  }
  function $(A, N, j) {
    var Q = i;
    for (var G in N) {
      var Z = N[G];
      !Z[Q(808)] && (!j || j.test(G)) && (A[Q(2019)].del(Z[Q(1747)]), delete N[G]);
    }
  }
  function I(A, N, j, Q) {
    var G = i;
    if (typeof A != "object" && typeof A != G(741)) throw new Error(G(2319));
    var Z = this[G(2397)].serialize, X = Z ? Z(A) : A, r0 = this[G(2019)][G(1717)](X);
    if (r0) return r0;
    Q = Q || this[G(2397)].addUsedSchema !== !1;
    var s0 = t[G(2327)](this[G(1657)](A));
    s0 && Q && m0(this, s0);
    var e0 = this[G(2397)][G(1252)] !== !1 && !N, j0;
    e0 && !(j0 = s0 && s0 == t[G(2327)](A[G(898)])) && this[G(1252)](A, !0);
    var F0 = t[G(1190)].call(this, A), L0 = new e({ id: s0, schema: A, localRefs: F0, cacheKey: X, meta: j });
    return s0[0] != "#" && Q && (this[G(2491)][s0] = L0), this._cache[G(1384)](X, L0), e0 && j0 && this[G(1252)](A, !0), L0;
  }
  function F(A, N) {
    var j = i;
    if (A[j(828)])
      return A[j(454)] = Z, Z[j(540)] = A[j(540)], Z[j(1483)] = null, Z[j(1360)] = N || Z, A.schema[j(1778)] === !0 && (Z[j(1778)] = !0), Z;
    A.compiling = !0;
    var Q;
    A[j(808)] && (Q = this[j(2397)], this[j(2397)] = this[j(1720)]);
    var G;
    try {
      G = x[j(1122)](this, A[j(540)], N, A[j(2317)]);
    } catch (X) {
      throw delete A[j(454)], X;
    } finally {
      A[j(828)] = !1, A[j(808)] && (this[j(2397)] = Q);
    }
    return A[j(454)] = G, A[j(2102)] = G[j(2102)], A[j(1256)] = G[j(1256)], A[j(1360)] = G[j(1360)], G;
    function Z() {
      var X = j, r0 = A[X(454)], s0 = r0[X(1001)](this, arguments);
      return Z[X(1483)] = r0.errors, s0;
    }
  }
  function V(A) {
    var N = i;
    switch (A[N(1235)]) {
      case N(488):
        return J;
      case "id":
        return L;
      default:
        return U;
    }
  }
  function L(A) {
    var N = i;
    return A[N(662)] && this[N(2471)].warn(N(1502), A[N(662)]), A.id;
  }
  function U(A) {
    var N = i;
    return A.id && this[N(2471)].warn(N(1801), A.id), A[N(662)];
  }
  function J(A) {
    var N = i;
    if (A[N(662)] && A.id && A[N(662)] != A.id) throw new Error(N(1666));
    return A[N(662)] || A.id;
  }
  function n0(A, N) {
    var j = i;
    if (A = A || this[j(1483)], !A) return "No errors";
    N = N || {};
    for (var Q = N[j(2321)] === void 0 ? ", " : N[j(2321)], G = N[j(1448)] === void 0 ? j(1513) : N[j(1448)], Z = "", X = 0; X < A[j(1013)]; X++) {
      var r0 = A[X];
      r0 && (Z += G + r0[j(1163)] + " " + r0[j(820)] + Q);
    }
    return Z[j(1323)](0, -Q[j(1013)]);
  }
  function i0(A, N) {
    var j = i;
    return typeof N == j(2203) && (N = new RegExp(N)), this[j(985)][A] = N, this;
  }
  function d0(A) {
    var N = i, j;
    if (A._opts[N(538)] && (j = uo, A[N(1027)](j, j[N(662)], !0)), A[N(2397)].meta !== !1) {
      var Q = fn;
      A[N(2397)].$data && (Q = c(Q, h)), A.addMetaSchema(Q, d, !0), A._refs[N(2447)] = d;
    }
  }
  function a0(A) {
    var N = i, j = A[N(2397)][N(1051)];
    if (j)
      if (Array.isArray(j)) A.addSchema(j);
      else
        for (var Q in j) A[N(2258)](j[Q], Q);
  }
  function u0(A) {
    var N = i;
    for (var j in A[N(2397)][N(1141)]) {
      var Q = A._opts[N(1141)][j];
      A[N(2290)](j, Q);
    }
  }
  function w0(A) {
    var N = i;
    for (var j in A._opts.keywords) {
      var Q = A[N(2397)].keywords[j];
      A.addKeyword(j, Q);
    }
  }
  function m0(A, N) {
    var j = i;
    if (A._schemas[N] || A._refs[N]) throw new Error(j(2399) + N + j(968));
  }
  function D0(A) {
    for (var N = i, j = f[N(2014)](A[N(2397)]), Q = 0; Q < v[N(1013)]; Q++) delete j[v[Q]];
    return j;
  }
  function k0(A) {
    var N = i, j = A[N(2397)][N(2471)];
    if (j === !1) A.logger = { log: J0, warn: J0, error: J0 };
    else {
      if (j === void 0 && (j = console), !(typeof j == N(570) && j[N(1236)] && j[N(1034)] && j.error)) throw new Error("logger must implement log, warn and error methods");
      A[N(2471)] = j;
    }
  }
  function J0() {
  }
  return Rt;
}
var ho = lo();
const po = sn(ho);
class vo extends m2 {
  constructor(x, t) {
    var a = s, e;
    super(t), this[a(1921)] = x, this[a(2408)] = (e = t == null ? void 0 : t[a(1407)]) !== null && e !== void 0 ? e : {}, this[a(478)] = t == null ? void 0 : t[a(1689)], this[a(677)](Ws, (r) => this[a(933)](r)), this[a(1794)](Js, () => {
      var r = a, n;
      return (n = this[r(1364)]) === null || n === void 0 ? void 0 : n[r(1122)](this);
    });
  }
  [s(657)](x) {
    var t = s;
    if (this[t(886)]) throw new Error(t(1899));
    this._capabilities = b2(this[t(2408)], x);
  }
  assertCapabilityForMethod(x) {
    var t = s, a, e, r;
    switch (x) {
      case "sampling/createMessage":
        if (!(!((a = this[t(1613)]) === null || a === void 0) && a[t(1866)])) throw new Error("Client does not support sampling (required for " + x + ")");
        break;
      case t(1981):
        if (!(!((e = this._clientCapabilities) === null || e === void 0) && e[t(1935)])) throw new Error(t(1914) + x + ")");
        break;
      case t(2133):
        if (!(!((r = this[t(1613)]) === null || r === void 0) && r[t(2036)])) throw new Error(t(2326) + x + ")");
        break;
    }
  }
  [s(2499)](x) {
    var t = s;
    switch (x) {
      case t(713):
        if (!this[t(2408)][t(655)]) throw new Error("Server does not support logging (required for " + x + ")");
        break;
      case t(1754):
      case t(669):
        if (!this[t(2408)].resources) throw new Error(t(2156) + x + ")");
        break;
      case t(1126):
        if (!this._capabilities[t(2403)]) throw new Error("Server does not support notifying of tool list changes (required for " + x + ")");
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities[t(1692)]) throw new Error("Server does not support notifying of prompt list changes (required for " + x + ")");
        break;
    }
  }
  [s(554)](x) {
    var t = s;
    switch (x) {
      case "sampling/createMessage":
        if (!this[t(2408)][t(1866)]) throw new Error("Server does not support sampling (required for " + x + ")");
        break;
      case t(1026):
        if (!this[t(2408)].logging) throw new Error(t(1616) + x + ")");
        break;
      case t(990):
      case t(2477):
        if (!this[t(2408)].prompts) throw new Error(t(928) + x + ")");
        break;
      case "resources/list":
      case "resources/templates/list":
      case t(2082):
        if (!this[t(2408)][t(631)]) throw new Error("Server does not support resources (required for " + x + ")");
        break;
      case t(1926):
      case t(802):
        if (!this._capabilities[t(2403)]) throw new Error(t(1560) + x + ")");
        break;
    }
  }
  async [s(933)](x) {
    var t = s;
    const a = x[t(1636)][t(2436)];
    return this[t(1613)] = x[t(1636)].capabilities, this._clientVersion = x.params[t(833)], { protocolVersion: pi[t(1586)](a) ? a : Ls, capabilities: this[t(1673)](), serverInfo: this[t(1921)], ...this[t(478)] && { instructions: this[t(478)] } };
  }
  [s(2467)]() {
    var x = s;
    return this[x(1613)];
  }
  [s(965)]() {
    return this._clientVersion;
  }
  [s(1673)]() {
    return this._capabilities;
  }
  async [s(777)]() {
    var x = s;
    return this.request({ method: x(777) }, Vt);
  }
  async [s(1451)](x, t) {
    var a = s;
    return this[a(1021)]({ method: a(1759), params: x }, tn, t);
  }
  async [s(2283)](x, t) {
    var a = s;
    const e = await this[a(1021)]({ method: a(1981), params: x }, rn, t);
    if (e[a(691)] === "accept" && e.content) try {
      const r = new po(), n = r.compile(x[a(1514)]);
      if (!n(e[a(1045)])) throw new Ae(ge[a(2131)], "Elicitation response content does not match requested schema: " + r[a(997)](n[a(1483)]));
    } catch (r) {
      throw r instanceof Ae ? r : new Ae(ge[a(1257)], a(1974) + r);
    }
    return e;
  }
  async listRoots(x, t) {
    var a = s;
    return this[a(1021)]({ method: a(2133), params: x }, an, t);
  }
  async [s(1037)](x) {
    var t = s;
    return this[t(1644)]({ method: t(713), params: x });
  }
  async [s(2112)](x) {
    var t = s;
    return this[t(1644)]({ method: t(1754), params: x });
  }
  async [s(1966)]() {
    var x = s;
    return this[x(1644)]({ method: x(669) });
  }
  async [s(1569)]() {
    var x = s;
    return this[x(1644)]({ method: x(1126) });
  }
  async [s(1179)]() {
    var x = s;
    return this[x(1644)]({ method: x(704) });
  }
}
var bs, gs;
class mo {
  constructor() {
    c0(this, gs, []);
    c0(this, bs, []);
  }
  [(gs = s(1341), bs = s(2062), s(482))](x) {
    var t = s;
    this[t(1341)][t(482)](x), this[t(2062)][t(720)]((a) => a(x));
  }
  [s(1850)](x) {
    var t = s;
    return this[t(1341)][t(2142)]((a) => a[t(1636)][t(1286)] === x);
  }
  removeByRequestId(x) {
    var t = s;
    this.queue = this[t(1341)][t(2142)]((a) => a[t(1636)].requestId !== x);
  }
  addListener(x) {
    var t = s;
    this[t(2062)][t(482)](x);
  }
  removeListener(x) {
    var t = s;
    const a = this.listeners[t(1280)](x);
    a !== -1 && this[t(2062)][t(991)](a, 1);
  }
}
var ys;
class bo {
  constructor(x) {
    c0(this, ys);
    this.protocol = x;
  }
  [(ys = s(605), s(2424))](x, t) {
    var a = s;
    this[a(605)][a(1644)]({ method: a(2349), params: { requestId: x, data: t, error: null, finished: !1 } });
  }
  [s(1463)](x) {
    var t = s;
    this[t(605)][t(1644)]({ method: t(2349), params: { requestId: x, data: null, error: null, finished: !0 } });
  }
  [s(1038)](x) {
    var t = s;
    this[t(605)].notification({ method: t(2349), params: { requestId: x, data: null, error: t(748), finished: !0 } });
  }
  [s(1322)](x, t) {
    var a = s;
    this.protocol[a(1644)]({ method: "sdppp/streamResponse", params: { requestId: x, data: null, error: t, finished: !0 } });
  }
}
var ws;
class go {
  constructor(x, t) {
    c0(this, "streamManager");
    c0(this, ws);
    var a = s;
    this[a(2246)] = x, this[a(1229)] = t;
  }
  async executeHandlerAsync(x, t, a, e, r) {
    var n = s;
    try {
      await this.processHandlerStream(x, t, a, e, r);
    } catch (o) {
      this.streamManager[n(1322)](x, (o == null ? void 0 : o.message) || String(o));
    } finally {
      this[n(1229)][n(1853)](x);
    }
  }
  async [(ws = s(1229), s(1838))](x, t, a, e, r) {
    var n = s;
    for await (const o of t(a, e, r[n(774)])) {
      if (r[n(774)][n(627)]) {
        this.streamManager[n(1038)](x);
        return;
      }
      this[n(2246)][n(2424)](x, o);
    }
    r[n(774)][n(627)] ? this[n(2246)][n(1038)](x) : this[n(2246)].sendFinishedResponse(x);
  }
}
var Ss, Es;
class yo {
  constructor(x, t) {
    c0(this, Es);
    c0(this, Ss);
    var a = s;
    this[a(605)] = x, this.notificationQueue = t;
  }
  [(Es = s(605), Ss = s(1770), s(2374))](x) {
    var t = s;
    if (x != null && x[t(627)]) throw new Error(t(748));
  }
  async [s(1792)](x) {
    var t = s;
    return (await this[t(605)][t(1021)]({ method: t(1308), params: { action: x[t(691)], data: x[t(1513)] } }, M({ requestId: q() }), { timeout: 3e5 })).requestId;
  }
  [s(731)](x) {
    var t = s;
    const a = this[t(1770)][t(1850)](x).map((e) => ({ data: e.params[t(1513)], error: e[t(1636)][t(1316)], finished: e[t(1636)][t(2103)] }));
    return this[t(1770)][t(1373)](x), a;
  }
  [s(1005)]() {
    return { resolve: null, finished: !1, aborted: !1 };
  }
  [s(700)](x, t, a, e) {
    var r = s;
    const n = this[r(1221)](x, t, a), o = this[r(639)](x, a);
    return this.notificationQueue[r(1230)](n), e == null || e.addEventListener("abort", o), { onNotification: n, onAbort: o };
  }
  createNotificationHandler(x, t, a) {
    var e = s;
    const r = M({ method: f0(e(2349)), params: M({ requestId: q(), data: U0(), error: q().nullable(), finished: y0() }) });
    return (n) => {
      var o = e;
      const c = r[o(1088)](n);
      if (!c[o(675)] || c[o(1513)].params[o(1286)] !== x) return;
      const { data: f, error: u, finished: l } = c.data[o(1636)];
      t[o(482)]({ data: f, error: u, finished: l }), a[o(1674)] && (a[o(1674)](), a.resolve = null);
    };
  }
  createAbortHandler(x, t) {
    return async () => {
      var a = B;
      if (!t[a(627)]) {
        t[a(627)] = !0;
        try {
          await this[a(605)][a(1021)]({ method: "sdppp/abort", params: { requestId: x } }, M({ success: y0() }), { timeout: 3e5 });
        } catch {
        }
        t.finished = !0, t[a(1674)] && (t.resolve(), t[a(1674)] = null);
      }
    };
  }
  [s(2267)](x, t, a, e) {
    var r = s;
    const n = this;
    return { async *[Symbol[r(1303)]]() {
      var o = r;
      const c = n[o(700)](a, x, t, e);
      try {
        yield* n[o(1702)](x, t, e);
      } finally {
        n[o(2159)](a, c, e);
      }
    } };
  }
  async *[s(1702)](x, t, a) {
    for (var e = s; !t.finished && !t[e(627)]; ) {
      if (a != null && a[e(627)] && !t[e(627)]) {
        t[e(627)] = !0;
        break;
      }
      if (x[e(1013)] === 0) {
        await new Promise((r) => {
          var n = e;
          t[n(1674)] = r;
        });
        continue;
      }
      yield* this[e(1525)](x, t);
    }
    if (t.aborted) throw new Error(e(748));
  }
  *processQueueItems(x, t) {
    for (; x.length > 0; ) {
      const a = x.shift();
      if (!a) continue;
      const { data: e, error: r, finished: n } = a;
      if (r) throw new Error(r);
      if (n) {
        t.finished = !0;
        break;
      }
      yield e;
    }
  }
  [s(2159)](x, t, a) {
    var e = s;
    this[e(1770)][e(1294)](t[e(1551)]), a == null || a[e(873)](e(856), t[e(1277)]), this[e(1770)].removeByRequestId(x);
  }
}
var Ps, ks, Cs, Is, Rs, Fs, Ns, Os;
class wo {
  constructor(x) {
    c0(this, Os, /* @__PURE__ */ new Map());
    c0(this, Ns, /* @__PURE__ */ new Map());
    c0(this, Fs, 1);
    c0(this, Rs, /* @__PURE__ */ new Map());
    c0(this, Is);
    c0(this, "notificationQueue", new mo());
    c0(this, Cs);
    c0(this, ks);
    c0(this, Ps);
    var t = s;
    this.protocol = x, this[t(2246)] = new bo(x), this[t(2016)] = new go(this[t(2246)], this[t(1229)]), this[t(2296)] = new yo(x, this[t(1770)]), this[t(749)](), this[t(689)](), this.setupStreamRequestHandler(), this[t(935)]();
  }
  [(Os = s(843), Ns = s(1704), Fs = s(2400), Rs = s(1229), Is = s(605), Cs = s(2246), ks = s(2016), Ps = s(2296), s(749))]() {
    var x = s;
    const t = M({ method: f0(x(2349)), params: M({ requestId: q(), data: U0(), error: q()[x(495)](), finished: y0() }) });
    this[x(605)][x(1794)](t, (a) => this[x(1770)][x(482)](a));
  }
  [s(689)]() {
    var x = s;
    const t = M({ method: f0(x(897)), params: M({ requestId: q() }) });
    this.protocol.setRequestHandler(t, async (a, e) => {
      var r = x;
      const { requestId: n } = a[r(1636)], o = this[r(1229)][r(1717)](n);
      return o && (o.abort(), this[r(1229)].delete(n)), { success: !0 };
    });
  }
  [s(815)]() {
    var x = s;
    const t = M({ method: f0(x(1308)), params: M({ action: q(), data: U0() }) });
    this[x(605)][x(677)](t, async (a, e) => {
      var r = x;
      const n = r(1397) + this[r(2400)]++, o = this[r(843)].get(a[r(1636)][r(691)]);
      if (!o) throw new Error(r(1251) + a.params[r(691)]);
      const c = new AbortController();
      return this[r(1229)].set(n, c), this[r(2016)][r(1881)](n, o, a[r(1636)], e, c), { requestId: n };
    });
  }
  [s(485)](x, t) {
    var a = s;
    this.actionHandlers.set(x[a(1465)][a(691)].value, t);
  }
  async [s(691)](x, t, a) {
    var e = s;
    this[e(2296)][e(2374)](a);
    const r = await this.streamIterator.sendActionRequest(x), n = this.streamIterator[e(731)](r), o = this[e(2296)][e(1005)]();
    return this.streamIterator.createAsyncIterator(n, o, r, a);
  }
  setupBroadcastHandler() {
    var x = s;
    const t = M({ method: f0(x(1331)), params: M({ messageType: q(), message: U0() }) });
    this[x(605)][x(1794)](t, (a) => {
      var e = x;
      const { messageType: r, message: n } = a.params, o = this[e(1704)][e(1717)](r);
      o && o(n);
    });
  }
  [s(969)](x, t) {
    var a = s;
    this[a(1704)][a(1260)](x, t);
  }
  async [s(1982)](x, t) {
    var a = s;
    await this[a(605)][a(1644)]({ method: "sdppp/broadcast", params: { messageType: x, message: t } });
  }
  async [s(1021)](x, t, a, e) {
    var r = s;
    return await this[r(605)][r(1021)]({ method: x, params: t }, a, e);
  }
  registerRequestHandler(x, t) {
    var a = s;
    this[a(605)][a(677)](x, t);
  }
}
class So extends wo {
  constructor(t, a) {
    var e = s;
    const r = new vo(t, a);
    r[e(827)] = (n) => {
      var o = e;
      console[o(1316)]("MCP Server Error:", n);
    };
    super(r);
    c0(this, "server");
    this[e(666)] = r;
  }
  async [s(918)](t) {
    var a = s;
    return await this[a(666)][a(918)](t);
  }
  async [s(566)]() {
    var t = s;
    await this[t(666)][t(566)]();
  }
  isConnected() {
    return this.server.transport !== void 0;
  }
}
function Eo(i) {
  const x = new qn(i);
  return { joinAs(t, a) {
    var e = B;
    if (!x[e(1382)](t)) throw new Error(e(660) + String(t) + e(1750));
    return new hi(x, t, a);
  }, getDefinition() {
    var t = B;
    return x[t(2096)]();
  }, getNodeIds() {
    var t = B;
    return x[t(1691)]();
  }, getNeighbors(t) {
    var a = B;
    return x[a(1192)](t);
  }, hasEdge(t, a) {
    var e = B;
    return x[e(1870)](t, a);
  }, hasPath(t, a) {
    var e = B;
    return x[e(2313)](t, a);
  }, findPath(t, a) {
    var e = B;
    return x[e(1344)](t, a);
  } };
}
const Po = M({}), ko = M({ uname: q()[s(1846)](""), activeDocumentID: O0().default(0), layers: q0(M({ id: O0(), name: q(), identify: q() }))[s(1846)]([]), actions: q0(q()).default([]), theme: q()[s(1846)]("kPanelBrightnessMediumGray"), sdpppX: G0(q(), U0())[s(1846)]({}), comfyWebviewConnectStatus: K0([s(2120), s(1709), s(1452)])[s(1846)](s(1452)), comfyWebviewLoadError: q()[s(1846)](""), comfyWebviewLoading: y0()[s(1846)](!1), comfyWebviewVersion: q()[s(1846)](""), comfyAutoRunning: y0()[s(1846)](!1), comfyHTTPCode: O0()[s(1846)](200), comfyURL: q()[s(1846)](""), sdkWebviewFocusing: y0()[s(1846)](!1), sdkWebviewConnectStatus: K0(["connecting", "connected", "disconnected"]).default(s(1452)), isLogin: y0()[s(1846)](!1), requestingLogin: y0()[s(1846)](!1), loginMessage: q().default(""), token: q().default(""), userInfo: G0(q(), U0())[s(1846)]({}) }), Co = M({ widgetableStructure: M({ widgetableID: q(), widgetablePath: q(), nodes: G0(q(), U0()), options: G0(q(), U0()), nodeIndexes: q0(q()) })[s(1846)]({ widgetableID: "", widgetablePath: "", nodes: {}, options: {}, nodeIndexes: [] }), widgetableValues: G0(q(), q0(U0())).default({}), widgetableErrors: G0(q(), q())[s(1846)]({}), queueSize: O0()[s(1846)](0), lastError: q().default(""), progress: O0()[s(1846)](0), executingNodeTitle: q()[s(1846)](""), graphProgress: O0()[s(1846)](0), comfyUserToken: q()[s(1846)](""), comfyOrgLoggedIn: y0()[s(1846)](!1), comfyOrgAPIKey: q()[s(1846)](""), comfyWSState: K0([s(1709), "reconnecting"])[s(1846)](s(1709)), lastRunTime: O0().default(0) }), Io = { log: { requestSchema: M({ level: K0([s(1236), s(1498), s(1034), s(1316)]), messages: q0(q()) }), responseSchema: M({}) }, openExternalLink: { requestSchema: M({ url: q() }), responseSchema: M({ error: q()[s(2247)]() }) }, getStorage: { requestSchema: M({ key: q() }), responseSchema: M({ value: q(), error: q()[s(2247)]() }) }, setStorage: { requestSchema: M({ key: q(), value: q() }), responseSchema: M({ error: q()[s(2247)]() }) }, removeStorage: { requestSchema: M({ key: q() }), responseSchema: M({ error: q()[s(2247)]() }) }, keyboardAction: { requestSchema: M({ keycode: q() }), responseSchema: M({}) }, setComfyWebviewURL: { requestSchema: M({ url: q() }), responseSchema: M({}) }, uploadComfyImage: { requestSchema: M({ uploadInput: M({ type: f0(s(1648)).or(f0(s(1605))), tokenOrBuffer: U0(), fileName: q() }), overwrite: y0()[s(2247)]()[s(1846)](!0) }), responseSchema: M({ name: q() }) }, proxiedFetch: { requestSchema: M({ url: q(), method: q()[s(2247)](), headers: G0(q())[s(2247)](), body: U0()[s(2247)](), bodyType: K0([s(510), "formData", s(2449)])[s(2247)]() }), responseSchema: M({ success: y0(), status: O0()[s(2247)](), statusText: q()[s(2247)](), headers: G0(q())[s(2247)](), data: U0()[s(2247)](), error: q()[s(2247)]() }) } }, ux = M({ thumbnail_url: q()[s(2247)](), file_token: q()[s(2247)](), source: q().optional(), error: q()[s(2247)]() }), Ro = { doGetImage: { requestSchema: M({ boundary: K0([s(1647), "curlayer", s(2039)]), content: K0(["canvas", s(1725), s(2039)]).or(q()), imageSize: O0(), imageQuality: O0(), cropBySelection: K0(["no", s(1681), s(2199)]) }), responseSchema: ux }, doGetMask: { requestSchema: M({ content: K0([s(1647), s(1725), s(2039)]), reverse: y0(), imageSize: O0() }), responseSchema: ux }, doSendImage: { requestSchema: M({ selection: K0([s(1003), s(535), s(2188), s(1090), "curlayer_canvas", s(2204), "curlayer_selection", s(1003)]), url: q(), source: q(), cropBySelection: K0(["no", "positive", "negative"]).default("no") }), responseSchema: M({ error: q()[s(2247)]() }) }, requestImageGet: { requestSchema: M({}), responseSchema: ux }, requestImageSend: { requestSchema: M({ url: q(), source: q() }), responseSchema: M({ error: q()[s(2247)]() }) }, requestMaskGet: { requestSchema: M({ isMask: y0()[s(1846)](!1) }), responseSchema: ux } }, Fo = { register: { requestSchema: M({ username: q(), password: q(), infos: G0(q(), U0()) }), responseSchema: M({}) }, loginByPassword: { requestSchema: M({ username: q(), password: q() }), responseSchema: M({}) }, loginByPhone: { requestSchema: M({ phone: q(), code: q() }), responseSchema: M({}) }, sendPhoneCode: { requestSchema: M({ phone: q() }), responseSchema: M({}) }, logout: { requestSchema: M({}), responseSchema: M({}) } }, No = M({ workflows: q0(q()), error: q().optional() }), Oo = M({ success: y0(), nodeErrors: G0(q())[s(2247)](), prompt_ids: q0(q())[s(2247)](), images: q0(M({ url: q(), thumbnail: q() }))[s(2247)]() }), qo = { setWidgetValue: { requestSchema: M({ values: q0(M({ nodeID: q(), widgetIndex: O0(), value: G0(q(), U0()).or(q()).or(O0()).or(y0()).or(q0(U0())) })) }), responseSchema: M({ success: y0() }) }, openWorkflow: { requestSchema: M({ workflow_path: q(), reset: y0()[s(1846)](!1) }), responseSchema: M({ success: y0() }) }, openWorkflowJSON: { requestSchema: M({ workflow_content: G0(U0()), workflow_path: q() }), responseSchema: M({ success: y0() }) }, listWorkflows: { requestSchema: M({ listMode: q().optional(), sdpppID: q()[s(2247)](), sdpppToken: q()[s(2247)]() }), responseSchema: No }, saveWorkflow: { requestSchema: M({ workflow_path: q(), from_sid: q()[s(2247)]() }), responseSchema: M({ success: y0() }) }, run: { requestSchema: M({ size: O0() }), responseSchema: Oo, stream: !0 }, stopAll: { requestSchema: M({}), responseSchema: M({ success: y0() }) } }, Ao = { setNodeTitle: { requestSchema: M({ node_id: q(), title: q() }), responseSchema: M({ success: y0() }) }, reboot: { requestSchema: M({}), responseSchema: M({ success: y0(), error: q()[s(2247)]() }) }, setComfyOrgAPIKey: { requestSchema: M({ api_key: q() }), responseSchema: M({ success: y0() }) }, logout: { requestSchema: M({}), responseSchema: M({ success: y0() }) } }, To = Eo({ nodes: { sdk: { store: Po, actions: {} }, uxp: { store: ko, actions: { ...Ro, ...Io, ...Fo } }, comfy: { store: Co, actions: { ...qo, ...Ao } } }, edges: [["sdk", s(1970)], [s(2044), s(1970)]] }), P0 = To.joinAs(s(2044));
globalThis[s(2377)] = P0, globalThis.sdpppX2 = globalThis[s(1488)] || {};
const _e = globalThis[s(1488)], p0 = (i) => typeof i == "string", Qe = () => {
  var i = s;
  let x, t;
  const a = new Promise((e, r) => {
    x = e, t = r;
  });
  return a[i(1674)] = x, a[i(1086)] = t, a;
}, Sa = (i) => i == null ? "" : "" + i, Do = (i, x, t) => {
  var a = s;
  i[a(720)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, jo = /###/g, Ea = (i) => i && i.indexOf("###") > -1 ? i.replace(jo, ".") : i, Pa = (i) => !i || p0(i), ex = (i, x, t) => {
  var a = s;
  const e = p0(x) ? x[a(519)](".") : x;
  let r = 0;
  for (; r < e[a(1013)] - 1; ) {
    if (Pa(i)) return {};
    const n = Ea(e[r]);
    !i[n] && t && (i[n] = new t()), Object[a(2017)][a(1491)][a(1122)](i, n) ? i = i[n] : i = {}, ++r;
  }
  return Pa(i) ? {} : { obj: i, k: Ea(e[r]) };
}, ka = (i, x, t) => {
  var a = s;
  const { obj: e, k: r } = ex(i, x, Object);
  if (e !== void 0 || x[a(1013)] === 1) {
    e[r] = t;
    return;
  }
  let n = x[x[a(1013)] - 1], o = x[a(1323)](0, x[a(1013)] - 1), c = ex(i, o, Object);
  for (; c[a(557)] === void 0 && o[a(1013)]; )
    n = o[o[a(1013)] - 1] + "." + n, o = o[a(1323)](0, o[a(1013)] - 1), c = ex(i, o, Object), c != null && c[a(557)] && typeof c[a(557)][c.k + "." + n] !== a(2220) && (c[a(557)] = void 0);
  c[a(557)][c.k + "." + n] = t;
}, Mo = (i, x, t, a) => {
  var e = s;
  const { obj: r, k: n } = ex(i, x, Object);
  r[n] = r[n] || [], r[n][e(482)](t);
}, Ix = (i, x) => {
  var t = s;
  const { obj: a, k: e } = ex(i, x);
  if (a && Object[t(2017)].hasOwnProperty[t(1122)](a, e))
    return a[e];
}, $o = (i, x, t) => {
  const a = Ix(i, t);
  return a !== void 0 ? a : Ix(x, t);
}, un = (i, x, t) => {
  var a = s;
  for (const e in x)
    e !== "__proto__" && e !== a(937) && (e in i ? p0(i[e]) || i[e] instanceof String || p0(x[e]) || x[e] instanceof String ? t && (i[e] = x[e]) : un(i[e], x[e], t) : i[e] = x[e]);
  return i;
}, He = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Lo = { "&": s(962), "<": s(1522), ">": s(992), '"': s(1171), "'": s(2003), "/": s(924) };
const zo = (i) => p0(i) ? i.replace(/[&<>"'\/]/g, (x) => Lo[x]) : i;
class Ho {
  constructor(x) {
    var t = s;
    this.capacity = x, this[t(2144)] = /* @__PURE__ */ new Map(), this[t(712)] = [];
  }
  [s(956)](x) {
    var t = s;
    const a = this[t(2144)][t(1717)](x);
    if (a !== void 0) return a;
    const e = new RegExp(x);
    return this[t(712)].length === this.capacity && this[t(2144)][t(1853)](this[t(712)][t(1889)]()), this.regExpMap.set(x, e), this[t(712)][t(482)](x), e;
  }
}
const Vo = [" ", ",", "?", "!", ";"], Uo = new Ho(20), Zo = (i, x, t) => {
  var a = s;
  x = x || "", t = t || "";
  const e = Vo[a(2142)]((o) => x[a(1280)](o) < 0 && t[a(1280)](o) < 0);
  if (e[a(1013)] === 0) return !0;
  const r = Uo[a(956)]("(" + e[a(2299)]((o) => o === "?" ? "\\?" : o)[a(1541)]("|") + ")");
  let n = !r[a(857)](i);
  if (!n) {
    const o = i[a(1280)](t);
    o > 0 && !r[a(857)](i[a(1496)](0, o)) && (n = !0);
  }
  return n;
}, Kt = (i, x, t = ".") => {
  var a = s;
  if (!i) return;
  if (i[x])
    return Object[a(2017)][a(1491)][a(1122)](i, x) ? i[x] : void 0;
  const e = x[a(519)](t);
  let r = i;
  for (let n = 0; n < e[a(1013)]; ) {
    if (!r || typeof r != "object") return;
    let o, c = "";
    for (let f = n; f < e[a(1013)]; ++f)
      if (f !== n && (c += t), c += e[f], o = r[c], o !== void 0) {
        if ([a(2203), a(986), a(741)][a(1280)](typeof o) > -1 && f < e[a(1013)] - 1) continue;
        n += f - n + 1;
        break;
      }
    r = o;
  }
  return r;
}, rx = (i) => i == null ? void 0 : i[s(1081)]("_", "-"), Bo = { type: s(2471), log(i) {
  var x = s;
  this[x(1661)](x(1236), i);
}, warn(i) {
  var x = s;
  this.output(x(1034), i);
}, error(i) {
  var x = s;
  this[x(1661)]("error", i);
}, output(i, x) {
  var a, e;
  var t = s;
  (e = (a = console == null ? void 0 : console[i]) == null ? void 0 : a[t(1001)]) == null || e.call(a, console, x);
} };
class Rx {
  constructor(x, t = {}) {
    var a = s;
    this[a(859)](x, t);
  }
  [s(859)](x, t = {}) {
    var a = s;
    this[a(2205)] = t[a(2205)] || "i18next:", this[a(2471)] = x || Bo, this[a(942)] = t, this[a(2027)] = t[a(2027)];
  }
  [s(1236)](...x) {
    var t = s;
    return this[t(1064)](x, t(1236), "", !0);
  }
  [s(1034)](...x) {
    var t = s;
    return this[t(1064)](x, t(1034), "", !0);
  }
  [s(1316)](...x) {
    var t = s;
    return this[t(1064)](x, t(1316), "");
  }
  deprecate(...x) {
    var t = s;
    return this[t(1064)](x, "warn", t(2355), !0);
  }
  [s(1064)](x, t, a, e) {
    var r = s;
    return e && !this[r(2027)] ? null : (p0(x[0]) && (x[0] = "" + a + this[r(2205)] + " " + x[0]), this[r(2471)][t](x));
  }
  [s(740)](x) {
    var t = s;
    return new Rx(this[t(2471)], { prefix: this[t(2205)] + ":" + x + ":", ...this.options });
  }
  [s(434)](x) {
    var t = s;
    return x = x || this[t(942)], x[t(2205)] = x[t(2205)] || this.prefix, new Rx(this[t(2471)], x);
  }
}
var de = new Rx();
class Dx {
  constructor() {
    var x = s;
    this[x(1995)] = {};
  }
  on(x, t) {
    var a = s;
    return x[a(519)](" ")[a(720)]((e) => {
      var r = a;
      this[r(1995)][e] || (this[r(1995)][e] = /* @__PURE__ */ new Map());
      const n = this[r(1995)][e].get(t) || 0;
      this.observers[e][r(1260)](t, n + 1);
    }), this;
  }
  off(x, t) {
    var a = s;
    if (this.observers[x]) {
      if (!t) {
        delete this[a(1995)][x];
        return;
      }
      this.observers[x][a(1853)](t);
    }
  }
  [s(486)](x, ...t) {
    var a = s;
    this[a(1995)][x] && Array[a(431)](this[a(1995)][x].entries())[a(720)](([r, n]) => {
      for (let o = 0; o < n; o++)
        r(...t);
    }), this.observers["*"] && Array[a(431)](this[a(1995)]["*"].entries())[a(720)](([r, n]) => {
      var o = a;
      for (let c = 0; c < n; c++)
        r[o(1001)](r, [x, ...t]);
    });
  }
}
class Ca extends Dx {
  constructor(x, t = { ns: ["translation"], defaultNS: s(617) }) {
    var a = s;
    super(), this.data = x || {}, this[a(942)] = t, this[a(942)].keySeparator === void 0 && (this.options[a(995)] = "."), this.options.ignoreJSONStructure === void 0 && (this[a(942)][a(959)] = !0);
  }
  [s(2012)](x) {
    var t = s;
    this.options.ns[t(1280)](x) < 0 && this.options.ns.push(x);
  }
  [s(2437)](x) {
    var t = s;
    const a = this.options.ns[t(1280)](x);
    a > -1 && this[t(942)].ns.splice(a, 1);
  }
  [s(572)](x, t, a, e = {}) {
    var u, l;
    var r = s;
    const n = e[r(995)] !== void 0 ? e[r(995)] : this[r(942)][r(995)], o = e[r(959)] !== void 0 ? e[r(959)] : this[r(942)].ignoreJSONStructure;
    let c;
    x[r(1280)](".") > -1 ? c = x[r(519)](".") : (c = [x, t], a && (Array[r(1842)](a) ? c[r(482)](...a) : p0(a) && n ? c[r(482)](...a[r(519)](n)) : c[r(482)](a)));
    const f = Ix(this[r(1513)], c);
    return !f && !t && !a && x[r(1280)](".") > -1 && (x = c[0], t = c[1], a = c[r(1323)](2)[r(1541)](".")), f || !o || !p0(a) ? f : Kt((l = (u = this.data) == null ? void 0 : u[x]) == null ? void 0 : l[t], a, n);
  }
  [s(563)](x, t, a, e, r = { silent: !1 }) {
    var n = s;
    const o = r.keySeparator !== void 0 ? r.keySeparator : this.options[n(995)];
    let c = [x, t];
    a && (c = c[n(1797)](o ? a[n(519)](o) : a)), x[n(1280)](".") > -1 && (c = x[n(519)]("."), e = t, t = c[1]), this[n(2012)](t), ka(this.data, c, e), r[n(1824)] || this[n(486)](n(2469), x, t, a, e);
  }
  addResources(x, t, a, e = { silent: !1 }) {
    var r = s;
    for (const n in a)
      (p0(a[n]) || Array[r(1842)](a[n])) && this[r(563)](x, t, n, a[n], { silent: !0 });
    e[r(1824)] || this[r(486)]("added", x, t, a);
  }
  [s(553)](x, t, a, e, r, n = { silent: !1, skipCopy: !1 }) {
    var o = s;
    let c = [x, t];
    x.indexOf(".") > -1 && (c = x.split("."), e = a, a = t, t = c[1]), this[o(2012)](t);
    let f = Ix(this[o(1513)], c) || {};
    n[o(976)] || (a = JSON[o(1503)](JSON[o(2225)](a))), e ? un(f, a, r) : f = { ...f, ...a }, ka(this.data, c, f), n.silent || this[o(486)]("added", x, t, a);
  }
  [s(941)](x, t) {
    var a = s;
    this[a(2468)](x, t) && delete this[a(1513)][x][t], this[a(2437)](t), this[a(486)]("removed", x, t);
  }
  hasResourceBundle(x, t) {
    var a = s;
    return this[a(572)](x, t) !== void 0;
  }
  [s(1669)](x, t) {
    var a = s;
    return t || (t = this[a(942)][a(883)]), this.getResource(x, t);
  }
  [s(1799)](x) {
    return this.data[x];
  }
  [s(2015)](x) {
    var t = s;
    const a = this.getDataByLanguage(x);
    return !!(a && Object.keys(a) || [])[t(1718)]((r) => a[r] && Object[t(522)](a[r])[t(1013)] > 0);
  }
  [s(1711)]() {
    var x = s;
    return this[x(1513)];
  }
}
var dn = { processors: {}, addPostProcessor(i) {
  var x = s;
  this[x(1654)][i[x(2252)]] = i;
}, handle(i, x, t, a, e) {
  var r = s;
  return i[r(720)]((n) => {
    var c;
    var o = r;
    x = ((c = this[o(1654)][n]) == null ? void 0 : c[o(910)](x, t, a, e)) ?? x;
  }), x;
} };
const Ia = {}, Ra = (i) => !p0(i) && typeof i !== s(741) && typeof i !== s(986);
class Fx extends Dx {
  constructor(x, t = {}) {
    var a = s;
    super(), Do([a(1919), a(1787), a(2432), a(813), a(2305), a(2023), "utils"], x, this), this.options = t, this[a(942)][a(995)] === void 0 && (this.options.keySeparator = "."), this.logger = de[a(740)](a(1458));
  }
  [s(2451)](x) {
    var t = s;
    x && (this[t(1243)] = x);
  }
  [s(471)](x, t = { interpolation: {} }) {
    var a = s;
    const e = { ...t };
    if (x == null) return !1;
    const r = this[a(1674)](x, e);
    return (r == null ? void 0 : r[a(2316)]) !== void 0;
  }
  [s(854)](x, t) {
    var a = s;
    let e = t[a(1667)] !== void 0 ? t[a(1667)] : this[a(942)][a(1667)];
    e === void 0 && (e = ":");
    const r = t[a(995)] !== void 0 ? t[a(995)] : this[a(942)][a(995)];
    let n = t.ns || this[a(942)].defaultNS || [];
    const o = e && x[a(1280)](e) > -1, c = !this[a(942)][a(601)] && !t.keySeparator && !this[a(942)][a(621)] && !t[a(1667)] && !Zo(x, e, r);
    if (o && !c) {
      const f = x[a(2277)](this[a(813)].nestingRegexp);
      if (f && f[a(1013)] > 0) return { key: x, namespaces: p0(n) ? [n] : n };
      const u = x[a(519)](e);
      (e !== r || e === r && this[a(942)].ns[a(1280)](u[0]) > -1) && (n = u[a(1889)]()), x = u[a(1541)](r);
    }
    return { key: x, namespaces: p0(n) ? [n] : n };
  }
  translate(x, t, a) {
    var e = s;
    let r = typeof t === e(570) ? { ...t } : t;
    if (typeof r !== e(570) && this[e(942)][e(2091)] && (r = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (r = { ...r }), r || (r = {}), x == null) return "";
    Array[e(1842)](x) || (x = [String(x)]);
    const n = r[e(2025)] !== void 0 ? r.returnDetails : this[e(942)][e(2025)], o = r.keySeparator !== void 0 ? r.keySeparator : this.options[e(995)], { key: c, namespaces: f } = this[e(854)](x[x[e(1013)] - 1], r), u = f[f[e(1013)] - 1];
    let l = r[e(1667)] !== void 0 ? r[e(1667)] : this[e(942)].nsSeparator;
    l === void 0 && (l = ":");
    const d = r[e(2075)] || this[e(1243)], v = r[e(1120)] || this.options[e(1120)];
    if ((d == null ? void 0 : d.toLowerCase()) === e(550))
      return v ? n ? { res: "" + u + l + c, usedKey: c, exactUsedKey: c, usedLng: d, usedNS: u, usedParams: this.getUsedParamsDetails(r) } : "" + u + l + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: d, usedNS: u, usedParams: this[e(875)](r) } : c;
    const h = this[e(1674)](x, r);
    let m = h == null ? void 0 : h.res;
    const g = (h == null ? void 0 : h[e(2189)]) || c, w = (h == null ? void 0 : h[e(1996)]) || c, S = [e(2463), "[object Function]", "[object RegExp]"], R = r[e(694)] !== void 0 ? r.joinArrays : this[e(942)].joinArrays, O = !this[e(2023)] || this.i18nFormat[e(1967)], k = r.count !== void 0 && !p0(r[e(481)]), E = Fx[e(2207)](r), C = k ? this[e(2432)][e(2038)](d, r.count, r) : "", D = r[e(469)] && k ? this.pluralResolver[e(2038)](d, r[e(481)], { ordinal: !1 }) : "", T = k && !r.ordinal && r[e(481)] === 0, $ = T && r[e(1598) + this.options[e(765)] + e(2384)] || r[e(1598) + C] || r[e(1598) + D] || r[e(1598)];
    let I = m;
    O && !m && E && (I = $);
    const F = Ra(I), V = Object[e(2017)].toString[e(1001)](I);
    if (O && I && F && S[e(1280)](V) < 0 && !(p0(R) && Array.isArray(I))) {
      if (!r[e(723)] && !this[e(942)][e(723)]) {
        !this[e(942)][e(1412)] && this[e(2471)][e(1034)]("accessing an object - but returnObjects options is not enabled!");
        const L = this[e(942)][e(1412)] ? this[e(942)][e(1412)](g, I, { ...r, ns: f }) : e(2227) + c + " (" + this[e(1243)] + ")' returned an object instead of string.";
        return n ? (h[e(2316)] = L, h[e(1404)] = this.getUsedParamsDetails(r), h) : L;
      }
      if (o) {
        const L = Array[e(1842)](I), U = L ? [] : {}, J = L ? w : g;
        for (const n0 in I)
          if (Object[e(2017)][e(1491)].call(I, n0)) {
            const i0 = "" + J + o + n0;
            E && !m ? U[n0] = this[e(595)](i0, { ...r, defaultValue: Ra($) ? $[n0] : void 0, joinArrays: !1, ns: f }) : U[n0] = this.translate(i0, { ...r, joinArrays: !1, ns: f }), U[n0] === i0 && (U[n0] = I[n0]);
          }
        m = U;
      }
    } else if (O && p0(R) && Array[e(1842)](m))
      m = m[e(1541)](R), m && (m = this[e(2412)](m, x, r, a));
    else {
      let L = !1, U = !1;
      !this[e(2502)](m) && E && (L = !0, m = $), !this[e(2502)](m) && (U = !0, m = c);
      const J = r.missingKeyNoValueFallbackToKey || this[e(942)][e(1684)], n0 = J && U ? void 0 : m, i0 = E && $ !== m && this[e(942)][e(678)];
      if (U || L || i0) {
        if (this[e(2471)].log(e(i0 ? 1306 : 1418), d, u, c, i0 ? $ : m), o) {
          const w0 = this.resolve(c, { ...r, keySeparator: !1 });
          w0 && w0[e(2316)] && this[e(2471)][e(1034)](e(2160));
        }
        let d0 = [];
        const a0 = this.languageUtils[e(1058)](this.options[e(957)], r[e(2075)] || this[e(1243)]);
        if (this[e(942)][e(1830)] === "fallback" && a0 && a0[0]) for (let w0 = 0; w0 < a0[e(1013)]; w0++)
          d0.push(a0[w0]);
        else this[e(942)][e(1830)] === e(1878) ? d0 = this[e(1787)][e(1165)](r[e(2075)] || this[e(1243)]) : d0[e(482)](r.lng || this[e(1243)]);
        const u0 = (w0, m0, D0) => {
          var A;
          var k0 = e;
          const J0 = E && D0 !== m ? D0 : n0;
          this[k0(942)][k0(2442)] ? this[k0(942)].missingKeyHandler(w0, u, m0, J0, i0, r) : (A = this[k0(2305)]) != null && A[k0(2048)] && this.backendConnector[k0(2048)](w0, u, m0, J0, i0, r), this[k0(486)]("missingKey", w0, u, m0, m);
        };
        this[e(942)][e(2048)] && (this[e(942)].saveMissingPlurals && k ? d0[e(720)]((w0) => {
          var m0 = e;
          const D0 = this[m0(2432)][m0(1994)](w0, r);
          T && r["defaultValue" + this[m0(942)][m0(765)] + m0(2384)] && D0[m0(1280)](this[m0(942)][m0(765)] + m0(2384)) < 0 && D0[m0(482)](this.options[m0(765)] + m0(2384)), D0.forEach((k0) => {
            var J0 = m0;
            u0([w0], c + k0, r[J0(1598) + k0] || $);
          });
        }) : u0(d0, c, $));
      }
      m = this[e(2412)](m, x, r, h, a), U && m === c && this[e(942)][e(432)] && (m = "" + u + l + c), (U || L) && this.options.parseMissingKeyHandler && (m = this[e(942)][e(2386)](this.options.appendNamespaceToMissingKey ? "" + u + l + c : c, L ? m : void 0, r));
    }
    return n ? (h[e(2316)] = m, h[e(1404)] = this[e(875)](r), h) : m;
  }
  extendTranslation(x, t, a, e, r) {
    var f, u;
    var n = s;
    if ((f = this[n(2023)]) != null && f[n(1503)]) x = this.i18nFormat[n(1503)](x, { ...this.options[n(1188)][n(461)], ...a }, a[n(2075)] || this.language || e[n(692)], e[n(1145)], e[n(2189)], { resolved: e });
    else if (!a[n(1228)]) {
      a[n(1188)] && this.interpolator[n(859)]({ ...a, interpolation: { ...this[n(942)][n(1188)], ...a.interpolation } });
      const l = p0(x) && (((u = a == null ? void 0 : a[n(1188)]) == null ? void 0 : u[n(696)]) !== void 0 ? a[n(1188)][n(696)] : this.options[n(1188)][n(696)]);
      let d;
      if (l) {
        const h = x[n(2277)](this[n(813)].nestingRegexp);
        d = h && h[n(1013)];
      }
      let v = a[n(1081)] && !p0(a[n(1081)]) ? a[n(1081)] : a;
      if (this[n(942)].interpolation[n(461)] && (v = { ...this.options[n(1188)][n(461)], ...v }), x = this[n(813)][n(2123)](x, v, a.lng || this[n(1243)] || e[n(692)], a), l) {
        const h = x[n(2277)](this[n(813)].nestingRegexp), m = h && h[n(1013)];
        d < m && (a.nest = !1);
      }
      !a.lng && e && e.res && (a[n(2075)] = this[n(1243)] || e[n(692)]), a[n(1e3)] !== !1 && (x = this[n(813)][n(1e3)](x, (...h) => {
        var m = n;
        return (r == null ? void 0 : r[0]) === h[0] && !a[m(2433)] ? (this.logger[m(1034)]("It seems you are nesting recursively key: " + h[0] + m(2380) + t[0]), null) : this[m(595)](...h, t);
      }, a)), a[n(1188)] && this[n(813)][n(919)]();
    }
    const o = a[n(1060)] || this[n(942)][n(1060)], c = p0(o) ? [o] : o;
    return x != null && (c != null && c.length) && a[n(673)] !== !1 && (x = dn.handle(c, x, t, this.options && this.options.postProcessPassResolved ? { i18nResolved: { ...e, usedParams: this[n(875)](a) }, ...a } : a, this)), x;
  }
  resolve(x, t = {}) {
    var a = s;
    let e, r, n, o, c;
    return p0(x) && (x = [x]), x[a(720)]((f) => {
      var u = a;
      if (this[u(2502)](e)) return;
      const l = this[u(854)](f, t), d = l[u(1180)];
      r = d;
      let v = l[u(1938)];
      this[u(942)][u(733)] && (v = v[u(1797)](this[u(942)].fallbackNS));
      const h = t[u(481)] !== void 0 && !p0(t.count), m = h && !t[u(469)] && t.count === 0, g = t[u(2433)] !== void 0 && (p0(t[u(2433)]) || typeof t.context === u(986)) && t[u(2433)] !== "", w = t[u(2415)] ? t.lngs : this[u(1787)].toResolveHierarchy(t[u(2075)] || this.language, t[u(957)]);
      v[u(720)]((S) => {
        var O, k;
        var R = u;
        this.isValidLookup(e) || (c = S, !Ia[w[0] + "-" + S] && ((O = this.utils) != null && O.hasLoadedNamespace) && !((k = this[R(1447)]) != null && k[R(524)](c)) && (Ia[w[0] + "-" + S] = !0, this.logger[R(1034)](R(1182) + r + R(1438) + w[R(1541)](", ") + `" won't get resolved as namespace "` + c + R(2135), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), w.forEach((E) => {
          var $;
          var C = R;
          if (this[C(2502)](e)) return;
          o = E;
          const D = [d];
          if (($ = this[C(2023)]) != null && $[C(890)]) this[C(2023)][C(890)](D, d, E, S, t);
          else {
            let I;
            h && (I = this.pluralResolver[C(2038)](E, t[C(481)], t));
            const F = this.options[C(765)] + C(2384), V = this.options[C(765)] + C(469) + this[C(942)][C(765)];
            if (h && (D[C(482)](d + I), t[C(469)] && I[C(1280)](V) === 0 && D[C(482)](d + I[C(1081)](V, this[C(942)][C(765)])), m && D[C(482)](d + F)), g) {
              const L = "" + d + this[C(942)][C(1847)] + t.context;
              D.push(L), h && (D[C(482)](L + I), t[C(469)] && I[C(1280)](V) === 0 && D[C(482)](L + I[C(1081)](V, this.options[C(765)])), m && D.push(L + F));
            }
          }
          let T;
          for (; T = D[C(1903)](); )
            !this[C(2502)](e) && (n = T, e = this[C(572)](E, S, T, t));
        }));
      });
    }), { res: e, usedKey: r, exactUsedKey: n, usedLng: o, usedNS: c };
  }
  [s(2502)](x) {
    var t = s;
    return x !== void 0 && !(!this[t(942)][t(1532)] && x === null) && !(!this.options[t(1558)] && x === "");
  }
  [s(572)](x, t, a, e = {}) {
    var n;
    var r = s;
    return (n = this.i18nFormat) != null && n.getResource ? this[r(2023)].getResource(x, t, a, e) : this[r(1919)][r(572)](x, t, a, e);
  }
  [s(875)](x = {}) {
    var t = s;
    const a = [t(1598), t(469), t(2433), t(1081), t(2075), t(2415), t(957), "ns", "keySeparator", t(1667), "returnObjects", t(2025), t(694), t(1060), t(1188)], e = x[t(1081)] && !p0(x[t(1081)]);
    let r = e ? x[t(1081)] : x;
    if (e && typeof x[t(481)] < "u" && (r.count = x.count), this[t(942)][t(1188)][t(461)] && (r = { ...this[t(942)][t(1188)][t(461)], ...r }), !e) {
      r = { ...r };
      for (const n of a)
        delete r[n];
    }
    return r;
  }
  static [s(2207)](x) {
    var t = s;
    const a = "defaultValue";
    for (const e in x)
      if (Object[t(2017)][t(1491)][t(1122)](x, e) && a === e[t(1496)](0, a[t(1013)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Fa {
  constructor(x) {
    var t = s;
    this[t(942)] = x, this[t(1015)] = this[t(942)][t(1015)] || !1, this[t(2471)] = de[t(740)](t(1787));
  }
  [s(556)](x) {
    var t = s;
    if (x = rx(x), !x || x[t(1280)]("-") < 0) return null;
    const a = x[t(519)]("-");
    return a.length === 2 || (a[t(1903)](), a[a[t(1013)] - 1][t(1698)]() === "x") ? null : this.formatLanguageCode(a.join("-"));
  }
  [s(1848)](x) {
    var t = s;
    if (x = rx(x), !x || x[t(1280)]("-") < 0) return x;
    const a = x[t(519)]("-");
    return this[t(1849)](a[0]);
  }
  [s(1849)](x) {
    var t = s;
    if (p0(x) && x[t(1280)]("-") > -1) {
      let a;
      try {
        a = Intl[t(2280)](x)[0];
      } catch {
      }
      return a && this[t(942)][t(533)] && (a = a[t(1698)]()), a || (this.options[t(533)] ? x[t(1698)]() : x);
    }
    return this.options.cleanCode || this[t(942)].lowerCaseLng ? x[t(1698)]() : x;
  }
  [s(1237)](x) {
    var t = s;
    return (this.options.load === "languageOnly" || this[t(942)].nonExplicitSupportedLngs) && (x = this[t(1848)](x)), !this[t(1015)] || !this[t(1015)][t(1013)] || this[t(1015)][t(1280)](x) > -1;
  }
  [s(1640)](x) {
    var t = s;
    if (!x) return null;
    let a;
    return x[t(720)]((e) => {
      var r = t;
      if (a) return;
      const n = this[r(1849)](e);
      (!this[r(942)][r(1015)] || this[r(1237)](n)) && (a = n);
    }), !a && this[t(942)][t(1015)] && x[t(720)]((e) => {
      var r = t;
      if (a) return;
      const n = this[r(556)](e);
      if (this[r(1237)](n)) return a = n;
      const o = this[r(1848)](e);
      if (this[r(1237)](o)) return a = o;
      a = this[r(942)][r(1015)][r(1718)]((c) => {
        var f = r;
        if (c === o) return c;
        if (!(c[f(1280)]("-") < 0 && o[f(1280)]("-") < 0) && (c.indexOf("-") > 0 && o.indexOf("-") < 0 && c[f(1496)](0, c[f(1280)]("-")) === o || c[f(1280)](o) === 0 && o[f(1013)] > 1))
          return c;
      });
    }), a || (a = this.getFallbackCodes(this[t(942)].fallbackLng)[0]), a;
  }
  [s(1058)](x, t) {
    var a = s;
    if (!x) return [];
    if (typeof x === a(1806) && (x = x(t)), p0(x) && (x = [x]), Array[a(1842)](x)) return x;
    if (!t) return x[a(1846)] || [];
    let e = x[t];
    return e || (e = x[this[a(556)](t)]), e || (e = x[this[a(1849)](t)]), e || (e = x[this[a(1848)](t)]), e || (e = x.default), e || [];
  }
  [s(1165)](x, t) {
    var a = s;
    const e = this[a(1058)]((t === !1 ? [] : t) || this[a(942)][a(957)] || [], x), r = [], n = (o) => {
      var c = a;
      o && (this.isSupportedCode(o) ? r.push(o) : this.logger[c(1034)]("rejecting language code not found in supportedLngs: " + o));
    };
    return p0(x) && (x.indexOf("-") > -1 || x[a(1280)]("_") > -1) ? (this.options.load !== a(1127) && n(this[a(1849)](x)), this.options.load !== a(1127) && this[a(942)].load !== a(1771) && n(this[a(556)](x)), this[a(942)].load !== a(1771) && n(this[a(1848)](x))) : p0(x) && n(this[a(1849)](x)), e[a(720)]((o) => {
      var c = a;
      r[c(1280)](o) < 0 && n(this.formatLanguageCode(o));
    }), r;
  }
}
const Na = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Oa = { select: (i) => s(i === 1 ? 732 : 520), resolvedOptions: () => ({ pluralCategories: [s(732), s(520)] }) };
class Ko {
  constructor(x, t = {}) {
    var a = s;
    this[a(1787)] = x, this[a(942)] = t, this[a(2471)] = de[a(740)](a(2432)), this[a(971)] = {};
  }
  [s(2395)](x, t) {
    var a = s;
    this[a(2263)][x] = t;
  }
  clearCache() {
    var x = s;
    this[x(971)] = {};
  }
  [s(2445)](x, t = {}) {
    var a = s;
    const e = rx(x === a(1239) ? "en" : x), r = t[a(469)] ? a(469) : "cardinal", n = JSON.stringify({ cleanedCode: e, type: r });
    if (n in this[a(971)]) return this.pluralRulesCache[n];
    let o;
    try {
      o = new Intl[a(2222)](e, { type: r });
    } catch {
      if (!Intl) return this.logger[a(1316)]("No Intl support, please use an Intl polyfill!"), Oa;
      if (!x[a(2277)](/-|_/)) return Oa;
      const f = this[a(1787)][a(1848)](x);
      o = this[a(2445)](f, t);
    }
    return this[a(971)][n] = o, o;
  }
  [s(1022)](x, t = {}) {
    var a = s;
    let e = this.getRule(x, t);
    return e || (e = this[a(2445)]("dev", t)), (e == null ? void 0 : e[a(1827)]()[a(1253)][a(1013)]) > 1;
  }
  getPluralFormsOfKey(x, t, a = {}) {
    var e = s;
    return this.getSuffixes(x, a)[e(2299)]((r) => "" + t + r);
  }
  [s(1994)](x, t = {}) {
    var a = s;
    let e = this[a(2445)](x, t);
    return e || (e = this[a(2445)](a(1239), t)), e ? e[a(1827)]()[a(1253)][a(1694)]((r, n) => Na[r] - Na[n]).map((r) => "" + this[a(942)].prepend + (t.ordinal ? a(469) + this[a(942)][a(1044)] : "") + r) : [];
  }
  [s(2038)](x, t, a = {}) {
    var e = s;
    const r = this.getRule(x, a);
    return r ? "" + this[e(942)][e(1044)] + (a[e(469)] ? "ordinal" + this[e(942)][e(1044)] : "") + r[e(1052)](t) : (this[e(2471)][e(1034)](e(2417) + x), this.getSuffix(e(1239), t, a));
  }
}
const qa = (i, x, t, a = ".", e = !0) => {
  let r = $o(i, x, t);
  return !r && e && p0(t) && (r = Kt(i, t, a), r === void 0 && (r = Kt(x, t, a))), r;
}, Ft = (i) => i.replace(/\$/g, s(1264));
class Wo {
  constructor(x = {}) {
    var a;
    var t = s;
    this[t(2471)] = de[t(740)](t(813)), this[t(942)] = x, this[t(1727)] = ((a = x == null ? void 0 : x[t(1188)]) == null ? void 0 : a[t(1727)]) || ((e) => e), this[t(859)](x);
  }
  [s(859)](x = {}) {
    var t = s;
    x.interpolation || (x.interpolation = { escapeValue: !0 });
    const { escape: a, escapeValue: e, useRawValueToEscape: r, prefix: n, prefixEscaped: o, suffix: c, suffixEscaped: f, formatSeparator: u, unescapeSuffix: l, unescapePrefix: d, nestingPrefix: v, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: g, nestingOptionsSeparator: w, maxReplaces: S, alwaysFormat: R } = x[t(1188)];
    this[t(2373)] = a !== void 0 ? a : zo, this.escapeValue = e !== void 0 ? e : !0, this.useRawValueToEscape = r !== void 0 ? r : !1, this[t(2205)] = n ? He(n) : o || "{{", this.suffix = c ? He(c) : f || "}}", this[t(975)] = u || ",", this[t(2431)] = l ? "" : d || "-", this[t(1865)] = this[t(2431)] ? "" : l || "", this[t(977)] = v ? He(v) : h || He(t(2101)), this.nestingSuffix = m ? He(m) : g || He(")"), this[t(1500)] = w || ",", this[t(656)] = S || 1e3, this[t(2314)] = R !== void 0 ? R : !1, this.resetRegExp();
  }
  reset() {
    var x = s;
    this[x(942)] && this.init(this[x(942)]);
  }
  [s(1210)]() {
    var x = s;
    const t = (a, e) => {
      var r = B;
      return (a == null ? void 0 : a[r(466)]) === e ? (a[r(1149)] = 0, a) : new RegExp(e, "g");
    };
    this.regexp = t(this[x(851)], this[x(2205)] + x(1823) + this[x(2460)]), this.regexpUnescape = t(this[x(2470)], "" + this[x(2205)] + this[x(2431)] + "(.+?)" + this[x(1865)] + this.suffix), this[x(1775)] = t(this[x(1775)], this[x(977)] + x(1823) + this[x(1297)]);
  }
  [s(2123)](x, t, a, e) {
    var h;
    var r = s;
    let n, o, c;
    const f = this[r(942)] && this[r(942)].interpolation && this[r(942)][r(1188)][r(461)] || {}, u = (m) => {
      var g = r;
      if (m[g(1280)](this[g(975)]) < 0) {
        const O = qa(t, f, m, this.options.keySeparator, this[g(942)][g(959)]);
        return this[g(2314)] ? this.format(O, void 0, a, { ...e, ...t, interpolationkey: m }) : O;
      }
      const w = m.split(this.formatSeparator), S = w[g(1889)]()[g(1240)](), R = w[g(1541)](this.formatSeparator)[g(1240)]();
      return this[g(1727)](qa(t, f, S, this.options.keySeparator, this.options[g(959)]), R, a, { ...e, ...t, interpolationkey: S });
    };
    this[r(1210)]();
    const l = (e == null ? void 0 : e.missingInterpolationHandler) || this[r(942)][r(1359)], d = ((h = e == null ? void 0 : e[r(1188)]) == null ? void 0 : h[r(696)]) !== void 0 ? e[r(1188)][r(696)] : this[r(942)].interpolation[r(696)];
    return [{ regex: this[r(2470)], safeValue: (m) => Ft(m) }, { regex: this[r(851)], safeValue: (m) => this[r(577)] ? Ft(this.escape(m)) : Ft(m) }][r(720)]((m) => {
      var g = r;
      for (c = 0; n = m[g(565)][g(1883)](x); ) {
        const w = n[1][g(1240)]();
        if (o = u(w), o === void 0)
          if (typeof l === g(1806)) {
            const R = l(x, n, e);
            o = p0(R) ? R : "";
          } else if (e && Object[g(2017)][g(1491)][g(1122)](e, w)) o = "";
          else if (d) {
            o = n[0];
            continue;
          } else this[g(2471)][g(1034)](g(1070) + w + g(1761) + x), o = "";
        else !p0(o) && !this[g(1471)] && (o = Sa(o));
        const S = m[g(1687)](o);
        if (x = x[g(1081)](n[0], S), d ? (m[g(565)][g(1149)] += o[g(1013)], m.regex[g(1149)] -= n[0].length) : m.regex[g(1149)] = 0, c++, c >= this.maxReplaces) break;
      }
    }), x;
  }
  [s(1e3)](x, t, a = {}) {
    var e = s;
    let r, n, o;
    const c = (f, u) => {
      var l = B;
      const d = this[l(1500)];
      if (f.indexOf(d) < 0) return f;
      const v = f[l(519)](new RegExp(d + l(1575)));
      let h = "{" + v[1];
      f = v[0], h = this[l(2123)](h, o);
      const m = h[l(2277)](/'/g), g = h.match(/"/g);
      (((m == null ? void 0 : m[l(1013)]) ?? 0) % 2 === 0 && !g || g[l(1013)] % 2 !== 0) && (h = h[l(1081)](/'/g, '"'));
      try {
        o = JSON[l(1503)](h), u && (o = { ...u, ...o });
      } catch (w) {
        return this[l(2471)][l(1034)](l(1414) + f, w), "" + f + d + h;
      }
      return o[l(1598)] && o[l(1598)].indexOf(this.prefix) > -1 && delete o[l(1598)], f;
    };
    for (; r = this[e(1775)][e(1883)](x); ) {
      let f = [];
      o = { ...a }, o = o[e(1081)] && !p0(o.replace) ? o.replace : o, o[e(673)] = !1, delete o[e(1598)];
      let u = !1;
      if (r[0][e(1280)](this.formatSeparator) !== -1 && !/{.*}/.test(r[1])) {
        const l = r[1][e(519)](this[e(975)])[e(2299)]((d) => d.trim());
        r[1] = l[e(1889)](), f = l, u = !0;
      }
      if (n = t(c[e(1122)](this, r[1][e(1240)](), o), o), n && r[0] === x && !p0(n)) return n;
      p0(n) || (n = Sa(n)), !n && (this[e(2471)][e(1034)](e(1159) + r[1] + e(743) + x), n = ""), u && (n = f[e(2092)]((l, d) => this[e(1727)](l, d, a[e(2075)], { ...a, interpolationkey: r[1][e(1240)]() }), n[e(1240)]())), x = x[e(1081)](r[0], n), this.regexp[e(1149)] = 0;
    }
    return x;
  }
}
const Jo = (i) => {
  var x = s;
  let t = i[x(1698)]().trim();
  const a = {};
  if (i[x(1280)]("(") > -1) {
    const e = i[x(519)]("(");
    t = e[0].toLowerCase()[x(1240)]();
    const r = e[1][x(1496)](0, e[1][x(1013)] - 1);
    t === x(2372) && r[x(1280)](":") < 0 ? a[x(2372)] || (a[x(2372)] = r[x(1240)]()) : t === "relativetime" && r.indexOf(":") < 0 ? a.range || (a.range = r[x(1240)]()) : r[x(519)](";")[x(720)]((o) => {
      var c = x;
      if (o) {
        const [f, ...u] = o[c(519)](":"), l = u.join(":").trim()[c(1081)](/^'+|'+$/g, ""), d = f.trim();
        a[d] || (a[d] = l), l === c(1990) && (a[d] = !1), l === "true" && (a[d] = !0), isNaN(l) || (a[d] = parseInt(l, 10));
      }
    });
  }
  return { formatName: t, formatOptions: a };
}, Aa = (i) => {
  const x = {};
  return (t, a, e) => {
    var r = B;
    let n = e;
    e && e.interpolationkey && e[r(2005)] && e[r(2005)][e[r(1529)]] && e[e[r(1529)]] && (n = { ...n, [e.interpolationkey]: void 0 });
    const o = a + JSON.stringify(n);
    let c = x[o];
    return !c && (c = i(rx(a), e), x[o] = c), c(t);
  };
}, Qo = (i) => (x, t, a) => i(rx(t), a)(x);
class Go {
  constructor(x = {}) {
    var t = s;
    this.logger = de[t(740)](t(611)), this[t(942)] = x, this.init(x);
  }
  [s(859)](x, t = { interpolation: {} }) {
    var a = s;
    this[a(975)] = t[a(1188)][a(975)] || ",";
    const e = t[a(1095)] ? Aa : Qo;
    this[a(1141)] = { number: e((r, n) => {
      var o = a;
      const c = new Intl[o(770)](r, { ...n });
      return (f) => c[o(1727)](f);
    }), currency: e((r, n) => {
      var o = a;
      const c = new Intl[o(770)](r, { ...n, style: o(2372) });
      return (f) => c.format(f);
    }), datetime: e((r, n) => {
      var o = a;
      const c = new Intl[o(459)](r, { ...n });
      return (f) => c[o(1727)](f);
    }), relativetime: e((r, n) => {
      var o = a;
      const c = new Intl[o(1299)](r, { ...n });
      return (f) => c.format(f, n[o(1043)] || o(1274));
    }), list: e((r, n) => {
      const o = new Intl.ListFormat(r, { ...n });
      return (c) => o.format(c);
    }) };
  }
  add(x, t) {
    var a = s;
    this.formats[x.toLowerCase()[a(1240)]()] = t;
  }
  addCached(x, t) {
    var a = s;
    this[a(1141)][x[a(1698)]()[a(1240)]()] = Aa(t);
  }
  format(x, t, a, e = {}) {
    var r = s;
    const n = t[r(519)](this[r(975)]);
    if (n[r(1013)] > 1 && n[0][r(1280)]("(") > 1 && n[0][r(1280)](")") < 0 && n[r(1718)]((c) => c[r(1280)](")") > -1)) {
      const c = n.findIndex((f) => f[r(1280)](")") > -1);
      n[0] = [n[0], ...n.splice(1, c)].join(this[r(975)]);
    }
    return n[r(2092)]((c, f) => {
      var v;
      var u = r;
      const { formatName: l, formatOptions: d } = Jo(f);
      if (this[u(1141)][l]) {
        let h = c;
        try {
          const m = ((v = e == null ? void 0 : e[u(2005)]) == null ? void 0 : v[e[u(1529)]]) || {}, g = m[u(590)] || m[u(2075)] || e[u(590)] || e[u(2075)] || a;
          h = this.formats[l](c, g, { ...d, ...e, ...m });
        } catch (m) {
          this.logger[u(1034)](m);
        }
        return h;
      } else this[u(2471)][u(1034)](u(1207) + l);
      return c;
    }, x);
  }
}
const Xo = (i, x) => {
  var t = s;
  i.pending[x] !== void 0 && (delete i[t(498)][x], i.pendingCount--);
};
class Yo extends Dx {
  constructor(x, t, a, e = {}) {
    var n, o;
    var r = s;
    super(), this[r(1016)] = x, this[r(2244)] = t, this[r(1776)] = a, this[r(1787)] = a.languageUtils, this[r(942)] = e, this[r(2471)] = de[r(740)](r(2305)), this[r(2472)] = [], this[r(515)] = e.maxParallelReads || 10, this[r(1157)] = 0, this.maxRetries = e[r(1007)] >= 0 ? e[r(1007)] : 5, this[r(1685)] = e[r(1685)] >= 1 ? e[r(1685)] : 350, this[r(2396)] = {}, this[r(1341)] = [], (o = (n = this[r(1016)]) == null ? void 0 : n[r(859)]) == null || o.call(n, a, e[r(1016)], e);
  }
  queueLoad(x, t, a, e) {
    var r = s;
    const n = {}, o = {}, c = {}, f = {};
    return x[r(720)]((u) => {
      var l = r;
      let d = !0;
      t[l(720)]((v) => {
        var h = l;
        const m = u + "|" + v;
        !a[h(1559)] && this.store.hasResourceBundle(u, v) ? this[h(2396)][m] = 2 : this.state[m] < 0 || (this.state[m] === 1 ? o[m] === void 0 && (o[m] = !0) : (this[h(2396)][m] = 1, d = !1, o[m] === void 0 && (o[m] = !0), n[m] === void 0 && (n[m] = !0), f[v] === void 0 && (f[v] = !0)));
      }), d || (c[u] = !0);
    }), (Object[r(522)](n)[r(1013)] || Object[r(522)](o)[r(1013)]) && this[r(1341)][r(482)]({ pending: o, pendingCount: Object[r(522)](o)[r(1013)], loaded: {}, errors: [], callback: e }), { toLoad: Object.keys(n), pending: Object[r(522)](o), toLoadLanguages: Object[r(522)](c), toLoadNamespaces: Object.keys(f) };
  }
  [s(1741)](x, t, a) {
    var e = s;
    const r = x[e(519)]("|"), n = r[0], o = r[1];
    t && this.emit("failedLoading", n, o, t), !t && a && this[e(2244)][e(553)](n, o, a, void 0, void 0, { skipCopy: !0 }), this.state[x] = t ? -1 : 2, t && a && (this[e(2396)][x] = 0);
    const c = {};
    this[e(1341)][e(720)]((f) => {
      var u = e;
      Mo(f[u(1741)], [n], o), Xo(f, x), t && f[u(1483)][u(482)](t), f[u(2174)] === 0 && !f[u(1291)] && (Object.keys(f[u(1741)])[u(720)]((l) => {
        var d = u;
        c[l] || (c[l] = {});
        const v = f[d(1741)][l];
        v.length && v[d(720)]((h) => {
          c[l][h] === void 0 && (c[l][h] = !0);
        });
      }), f[u(1291)] = !0, f[u(1483)][u(1013)] ? f.callback(f[u(1483)]) : f[u(1991)]());
    }), this[e(486)](e(1741), c), this.queue = this[e(1341)][e(2142)]((f) => !f[e(1291)]);
  }
  [s(2126)](x, t, a, e = 0, r = this.retryTimeout, n) {
    var o = s;
    if (!x[o(1013)]) return n(null, {});
    if (this[o(1157)] >= this.maxParallelReads) {
      this[o(2472)][o(482)]({ lng: x, ns: t, fcName: a, tried: e, wait: r, callback: n });
      return;
    }
    this[o(1157)]++;
    const c = (u, l) => {
      var d = o;
      if (this[d(1157)]--, this[d(2472)].length > 0) {
        const v = this[d(2472)][d(1889)]();
        this[d(2126)](v[d(2075)], v.ns, v[d(686)], v[d(615)], v[d(1267)], v[d(1991)]);
      }
      if (u && l && e < this[d(1007)]) {
        setTimeout(() => {
          var v = d;
          this[v(2126)][v(1122)](this, x, t, a, e + 1, r * 2, n);
        }, r);
        return;
      }
      n(u, l);
    }, f = this[o(1016)][a][o(1646)](this.backend);
    if (f[o(1013)] === 2) {
      try {
        const u = f(x, t);
        u && typeof u[o(2480)] === o(1806) ? u.then((l) => c(null, l)).catch(c) : c(null, u);
      } catch (u) {
        c(u);
      }
      return;
    }
    return f(x, t, c);
  }
  [s(529)](x, t, a = {}, e) {
    var r = s;
    if (!this[r(1016)]) return this[r(2471)][r(1034)](r(581)), e && e();
    p0(x) && (x = this[r(1787)][r(1165)](x)), p0(t) && (t = [t]);
    const n = this[r(429)](x, t, a, e);
    if (!n.toLoad.length)
      return n.pending.length || e(), null;
    n.toLoad[r(720)]((o) => {
      this.loadOne(o);
    });
  }
  [s(1403)](x, t, a) {
    var e = s;
    this[e(529)](x, t, {}, a);
  }
  [s(1559)](x, t, a) {
    var e = s;
    this[e(529)](x, t, { reload: !0 }, a);
  }
  [s(1731)](x, t = "") {
    var a = s;
    const e = x[a(519)]("|"), r = e[0], n = e[1];
    this[a(2126)](r, n, "read", void 0, void 0, (o, c) => {
      var f = a;
      o && this.logger[f(1034)](t + f(1028) + n + f(1202) + r + " failed", o), !o && c && this[f(2471)][f(1236)](t + f(1067) + n + f(1202) + r, c), this.loaded(x, o, c);
    });
  }
  [s(2048)](x, t, a, e, r, n = {}, o = () => {
  }) {
    var f, u, l, d, v;
    var c = s;
    if ((u = (f = this.services) == null ? void 0 : f[c(1447)]) != null && u[c(524)] && !((d = (l = this[c(1776)]) == null ? void 0 : l[c(1447)]) != null && d.hasLoadedNamespace(t))) {
      this[c(2471)].warn(c(1791) + a + c(848) + t + c(2135), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(a == null || a === "")) {
      if ((v = this[c(1016)]) != null && v[c(740)]) {
        const h = { ...n, isUpdate: r }, m = this.backend[c(740)][c(1646)](this[c(1016)]);
        if (m[c(1013)] < 6) try {
          let g;
          m[c(1013)] === 5 ? g = m(x, t, a, e, h) : g = m(x, t, a, e), g && typeof g[c(2480)] === c(1806) ? g[c(2480)]((w) => o(null, w)).catch(o) : o(null, g);
        } catch (g) {
          o(g);
        }
        else m(x, t, a, e, o, h);
      }
      !x || !x[0] || this.store[c(563)](x[0], t, a, e);
    }
  }
}
const Ta = () => ({ debug: !1, initAsync: !0, ns: [s(617)], defaultNS: ["translation"], fallbackLng: [s(1239)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: s(1878), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: s(1032), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (i) => {
  var x = s;
  let t = {};
  if (typeof i[1] == "object" && (t = i[1]), p0(i[1]) && (t[x(1598)] = i[1]), p0(i[2]) && (t[x(2060)] = i[2]), typeof i[2] === x(570) || typeof i[3] === x(570)) {
    const a = i[3] || i[2];
    Object[x(522)](a)[x(720)]((e) => {
      t[e] = a[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (i) => i, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: s(2101), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), Da = (i) => {
  var t, a;
  var x = s;
  return p0(i.ns) && (i.ns = [i.ns]), p0(i.fallbackLng) && (i[x(957)] = [i.fallbackLng]), p0(i[x(733)]) && (i[x(733)] = [i[x(733)]]), ((a = (t = i[x(1015)]) == null ? void 0 : t[x(1280)]) == null ? void 0 : a.call(t, x(550))) < 0 && (i[x(1015)] = i[x(1015)].concat([x(550)])), typeof i[x(2340)] === x(741) && (i[x(2286)] = i[x(2340)]), i;
}, dx = () => {
}, _o = (i) => {
  var x = s;
  Object[x(1285)](Object[x(2483)](i))[x(720)]((a) => {
    var e = x;
    typeof i[a] === e(1806) && (i[a] = i[a][e(1646)](i));
  });
};
class ax extends Dx {
  constructor(x = {}, t) {
    var a = s;
    if (super(), this[a(942)] = Da(x), this.services = {}, this[a(2471)] = de, this[a(1959)] = { external: [] }, _o(this), t && !this[a(1069)] && !x[a(1178)]) {
      if (!this[a(942)].initAsync) return this.init(x, t), this;
      setTimeout(() => {
        this.init(x, t);
      }, 0);
    }
  }
  [s(859)](x = {}, t) {
    var a = s;
    this[a(709)] = !0, typeof x == "function" && (t = x, x = {}), x.defaultNS == null && x.ns && (p0(x.ns) ? x[a(883)] = x.ns : x.ns[a(1280)](a(617)) < 0 && (x.defaultNS = x.ns[0]));
    const e = Ta();
    this[a(942)] = { ...e, ...this.options, ...Da(x) }, this[a(942)][a(1188)] = { ...e[a(1188)], ...this[a(942)][a(1188)] }, x[a(995)] !== void 0 && (this[a(942)][a(601)] = x[a(995)]), x.nsSeparator !== void 0 && (this[a(942)][a(621)] = x.nsSeparator);
    const r = (u) => {
      var l = a;
      return u ? typeof u === l(1806) ? new u() : u : null;
    };
    if (!this[a(942)].isClone) {
      this[a(1959)].logger ? de.init(r(this.modules[a(2471)]), this.options) : de.init(null, this[a(942)]);
      let u;
      this[a(1959)][a(611)] ? u = this[a(1959)][a(611)] : u = Go;
      const l = new Fa(this.options);
      this[a(2244)] = new Ca(this[a(942)][a(631)], this[a(942)]);
      const d = this[a(1776)];
      d[a(2471)] = de, d[a(1919)] = this[a(2244)], d[a(1787)] = l, d[a(2432)] = new Ko(l, { prepend: this[a(942)][a(765)], simplifyPluralSuffix: this[a(942)][a(1152)] }), u && (!this[a(942)][a(1188)].format || this.options.interpolation[a(1727)] === e[a(1188)].format) && (d[a(611)] = r(u), d[a(611)][a(859)](d, this[a(942)]), this[a(942)][a(1188)][a(1727)] = d[a(611)][a(1727)][a(1646)](d[a(611)])), d[a(813)] = new Wo(this[a(942)]), d[a(1447)] = { hasLoadedNamespace: this[a(524)][a(1646)](this) }, d.backendConnector = new Yo(r(this[a(1959)][a(1016)]), d[a(1919)], d, this[a(942)]), d[a(2305)].on("*", (v, ...h) => {
        var m = a;
        this[m(486)](v, ...h);
      }), this[a(1959)][a(2061)] && (d.languageDetector = r(this.modules[a(2061)]), d.languageDetector[a(859)] && d.languageDetector[a(859)](d, this[a(942)][a(983)], this[a(942)])), this[a(1959)][a(2023)] && (d[a(2023)] = r(this[a(1959)][a(2023)]), d[a(2023)].init && d[a(2023)][a(859)](this)), this[a(1458)] = new Fx(this[a(1776)], this.options), this[a(1458)].on("*", (v, ...h) => {
        var m = a;
        this[m(486)](v, ...h);
      }), this[a(1959)][a(602)][a(720)]((v) => {
        var h = a;
        v[h(859)] && v[h(859)](this);
      });
    }
    if (this.format = this[a(942)][a(1188)][a(1727)], t || (t = dx), this[a(942)].fallbackLng && !this[a(1776)][a(2061)] && !this[a(942)].lng) {
      const u = this[a(1776)][a(1787)][a(1058)](this[a(942)][a(957)]);
      u[a(1013)] > 0 && u[0] !== a(1239) && (this[a(942)].lng = u[0]);
    }
    !this[a(1776)][a(2061)] && !this[a(942)].lng && this[a(2471)][a(1034)](a(2320)), [a(572), a(2468), a(1669), a(1799)][a(720)]((u) => {
      var l = a;
      this[u] = (...d) => this[l(2244)][u](...d);
    }), [a(563), "addResources", a(553), a(941)].forEach((u) => {
      this[u] = (...l) => {
        var d = B;
        return this[d(2244)][u](...l), this;
      };
    });
    const c = Qe(), f = () => {
      var u = a;
      const l = (d, v) => {
        var h = B;
        this.isInitializing = !1, this[h(1069)] && !this.initializedStoreOnce && this[h(2471)][h(1034)](h(446)), this.isInitialized = !0, this[h(942)][h(1178)] || this[h(2471)].log(h(958), this[h(942)]), this[h(486)](h(958), this[h(942)]), c[h(1674)](v), t(d, v);
      };
      if (this[u(921)] && !this[u(1069)]) return l(null, this.t.bind(this));
      this[u(2451)](this[u(942)][u(2075)], l);
    };
    return this[a(942)][a(631)] || !this.options[a(2286)] ? f() : setTimeout(f, 0), c;
  }
  [s(1436)](x, t = dx) {
    var n, o;
    var a = s;
    let e = t;
    const r = p0(x) ? x : this[a(1243)];
    if (typeof x === a(1806) && (e = x), !this[a(942)][a(631)] || this[a(942)][a(1854)]) {
      if ((r == null ? void 0 : r[a(1698)]()) === a(550) && (!this[a(942)].preload || this[a(942)][a(614)].length === 0)) return e();
      const c = [], f = (u) => {
        var l = a;
        if (!u || u === l(550)) return;
        this.services[l(1787)].toResolveHierarchy(u).forEach((v) => {
          var h = l;
          v !== "cimode" && c[h(1280)](v) < 0 && c[h(482)](v);
        });
      };
      r ? f(r) : this[a(1776)].languageUtils.getFallbackCodes(this[a(942)][a(957)])[a(720)]((l) => f(l)), (o = (n = this.options[a(614)]) == null ? void 0 : n.forEach) == null || o.call(n, (u) => f(u)), this.services.backendConnector.load(c, this[a(942)].ns, (u) => {
        var l = a;
        !u && !this[l(1948)] && this[l(1243)] && this.setResolvedLanguage(this[l(1243)]), e(u);
      });
    } else e(null);
  }
  [s(823)](x, t, a) {
    var e = s;
    const r = Qe();
    return typeof x === e(1806) && (a = x, x = void 0), typeof t === e(1806) && (a = t, t = void 0), x || (x = this.languages), t || (t = this[e(942)].ns), a || (a = dx), this[e(1776)][e(2305)][e(1559)](x, t, (n) => {
      r.resolve(), a(n);
    }), r;
  }
  [s(2495)](x) {
    var t = s;
    if (!x) throw new Error(t(2411));
    if (!x[t(1650)]) throw new Error(t(781));
    return x[t(1650)] === t(1016) && (this.modules[t(1016)] = x), (x.type === "logger" || x.log && x.warn && x[t(1316)]) && (this[t(1959)][t(2471)] = x), x[t(1650)] === t(2061) && (this[t(1959)][t(2061)] = x), x[t(1650)] === t(2023) && (this[t(1959)][t(2023)] = x), x[t(1650)] === t(1311) && dn[t(2197)](x), x[t(1650)] === "formatter" && (this.modules[t(611)] = x), x.type === t(2053) && this[t(1959)][t(602)][t(482)](x), this;
  }
  [s(497)](x) {
    var t = s;
    if (!(!x || !this.languages) && !([t(550), t(1239)].indexOf(x) > -1)) {
      for (let a = 0; a < this[t(921)][t(1013)]; a++) {
        const e = this[t(921)][a];
        if (!([t(550), t(1239)].indexOf(e) > -1) && this.store.hasLanguageSomeTranslations(e)) {
          this.resolvedLanguage = e;
          break;
        }
      }
      !this[t(1948)] && this.languages[t(1280)](x) < 0 && this[t(2244)][t(2015)](x) && (this[t(1948)] = x, this.languages[t(1215)](x));
    }
  }
  [s(2451)](x, t) {
    var a = s;
    this[a(902)] = x;
    const e = Qe();
    this[a(486)](a(2212), x);
    const r = (c) => {
      var f = a;
      this[f(1243)] = c, this[f(921)] = this.services.languageUtils[f(1165)](c), this[f(1948)] = void 0, this[f(497)](c);
    }, n = (c, f) => {
      var u = a;
      f ? this[u(902)] === x && (r(f), this.translator[u(2451)](f), this[u(902)] = void 0, this[u(486)]("languageChanged", f), this[u(2471)][u(1236)](u(1181), f)) : this.isLanguageChangingTo = void 0, e[u(1674)]((...l) => this.t(...l)), t && t(c, (...l) => this.t(...l));
    }, o = (c) => {
      var d, v;
      var f = a;
      !x && !c && this[f(1776)][f(2061)] && (c = []);
      const u = p0(c) ? c : c && c[0], l = this.store[f(2015)](u) ? u : this[f(1776)][f(1787)][f(1640)](p0(c) ? [c] : c);
      l && (!this[f(1243)] && r(l), this[f(1458)][f(1243)] || this[f(1458)].changeLanguage(l), (v = (d = this[f(1776)][f(2061)]) == null ? void 0 : d[f(532)]) == null || v.call(d, l)), this[f(1436)](l, (h) => {
        n(h, l);
      });
    };
    return !x && this.services.languageDetector && !this[a(1776)].languageDetector[a(1279)] ? o(this[a(1776)][a(2061)][a(1729)]()) : !x && this.services.languageDetector && this.services[a(2061)][a(1279)] ? this[a(1776)][a(2061)][a(1729)][a(1013)] === 0 ? this[a(1776)].languageDetector[a(1729)]()[a(2480)](o) : this.services.languageDetector[a(1729)](o) : o(x), e;
  }
  [s(1833)](x, t, a) {
    var e = s;
    const r = (n, o, ...c) => {
      var f = B;
      let u;
      typeof o != "object" ? u = this[f(942)][f(2091)]([n, o][f(1797)](c)) : u = { ...o }, u.lng = u[f(2075)] || r[f(2075)], u[f(2415)] = u[f(2415)] || r.lngs, u.ns = u.ns || r.ns, u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || a || r[f(589)]);
      const l = this[f(942)].keySeparator || ".";
      let d;
      return u[f(589)] && Array[f(1842)](n) ? d = n[f(2299)]((v) => "" + u.keyPrefix + l + v) : d = u[f(589)] ? "" + u[f(589)] + l + n : n, this.t(d, u);
    };
    return p0(x) ? r[e(2075)] = x : r[e(2415)] = x, r.ns = t, r[e(589)] = a, r;
  }
  t(...x) {
    var a;
    var t = s;
    return (a = this[t(1458)]) == null ? void 0 : a[t(595)](...x);
  }
  exists(...x) {
    var a;
    var t = s;
    return (a = this[t(1458)]) == null ? void 0 : a[t(471)](...x);
  }
  [s(1757)](x) {
    var t = s;
    this[t(942)].defaultNS = x;
  }
  [s(524)](x, t = {}) {
    var a = s;
    if (!this[a(1069)]) return this[a(2471)][a(1034)]("hasLoadedNamespace: i18next was not initialized", this[a(921)]), !1;
    if (!this.languages || !this[a(921)][a(1013)]) return this[a(2471)][a(1034)]("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const e = t[a(2075)] || this.resolvedLanguage || this[a(921)][0], r = this.options ? this[a(942)][a(957)] : !1, n = this[a(921)][this[a(921)][a(1013)] - 1];
    if (e[a(1698)]() === a(550)) return !0;
    const o = (c, f) => {
      var u = a;
      const l = this[u(1776)][u(2305)][u(2396)][c + "|" + f];
      return l === -1 || l === 0 || l === 2;
    };
    if (t[a(1908)]) {
      const c = t[a(1908)](this, o);
      if (c !== void 0) return c;
    }
    return !!(this[a(2468)](e, x) || !this[a(1776)].backendConnector[a(1016)] || this[a(942)][a(631)] && !this[a(942)][a(1854)] || o(e, x) && (!r || o(n, x)));
  }
  loadNamespaces(x, t) {
    var a = s;
    const e = Qe();
    return this[a(942)].ns ? (p0(x) && (x = [x]), x[a(720)]((r) => {
      var n = a;
      this[n(942)].ns[n(1280)](r) < 0 && this.options.ns[n(482)](r);
    }), this[a(1436)]((r) => {
      var n = a;
      e[n(1674)](), t && t(r);
    }), e) : (t && t(), Promise[a(1674)]());
  }
  [s(988)](x, t) {
    var a = s;
    const e = Qe();
    p0(x) && (x = [x]);
    const r = this[a(942)][a(614)] || [], n = x[a(2142)]((o) => r.indexOf(o) < 0 && this[a(1776)][a(1787)].isSupportedCode(o));
    return n[a(1013)] ? (this.options[a(614)] = r[a(1797)](n), this[a(1436)]((o) => {
      var c = a;
      e[c(1674)](), t && t(o);
    }), e) : (t && t(), Promise[a(1674)]());
  }
  [s(1108)](x) {
    var r, n;
    var t = s;
    if (x || (x = this[t(1948)] || (((r = this[t(921)]) == null ? void 0 : r[t(1013)]) > 0 ? this[t(921)][0] : this.language)), !x) return t(1632);
    const a = ["ar", t(724), t(1085), "ssh", "xaa", t(2342), t(1394), t(1307), t(2406), t(892), t(864), t(1950), t(973), "acx", t(2250), t(1745), t(702), t(598), t(504), t(1014), t(2151), "apc", t(1223), "arb", "arq", t(1896), t(1424), "arz", t(2251), t(462), t(1510), t(752), "ayn", t(1320), t(871), "pga", "he", "iw", "ps", "pbt", "pbu", t(2232), "prp", "prd", "ug", "ur", t(575), t(1338), t(2072), "ji", "yi", "hbo", t(2122), "xmn", "fa", t(1882), t(479), t(1234), t(1459), "dv", "sam", t(2323)], e = ((n = this.services) == null ? void 0 : n[t(1787)]) || new Fa(Ta());
    return a[t(1280)](e[t(1848)](x)) > -1 || x[t(1698)]()[t(1280)](t(1978)) > 1 ? t(1632) : "ltr";
  }
  static createInstance(x = {}, t) {
    return new ax(x, t);
  }
  cloneInstance(x = {}, t = dx) {
    var a = s;
    const e = x.forkResourceStore;
    e && delete x[a(1591)];
    const r = { ...this[a(942)], ...x, isClone: !0 }, n = new ax(r);
    if ((x[a(2027)] !== void 0 || x[a(2205)] !== void 0) && (n[a(2471)] = n.logger.clone(x)), [a(2244), a(1776), a(1243)][a(720)]((c) => {
      n[c] = this[c];
    }), n[a(1776)] = { ...this[a(1776)] }, n.services[a(1447)] = { hasLoadedNamespace: n[a(524)][a(1646)](n) }, e) {
      const c = Object[a(522)](this.store.data).reduce((f, u) => {
        var l = a;
        return f[u] = { ...this[l(2244)].data[u] }, f[u] = Object[l(522)](f[u])[l(2092)]((d, v) => (d[v] = { ...f[u][v] }, d), f[u]), f;
      }, {});
      n[a(2244)] = new Ca(c, r), n[a(1776)][a(1919)] = n.store;
    }
    return n.translator = new Fx(n[a(1776)], r), n[a(1458)].on("*", (c, ...f) => {
      var u = a;
      n[u(486)](c, ...f);
    }), n[a(859)](r, t), n.translator[a(942)] = r, n[a(1458)][a(2305)][a(1776)].utils = { hasLoadedNamespace: n.hasLoadedNamespace[a(1646)](n) }, n;
  }
  [s(1711)]() {
    var x = s;
    return { options: this.options, store: this[x(2244)], language: this[x(1243)], languages: this[x(921)], resolvedLanguage: this[x(1948)] };
  }
}
const X0 = ax[s(2219)]();
X0.createInstance = ax[s(2219)], X0[s(2219)], X0[s(1108)], X0[s(859)], X0[s(1436)], X0[s(823)], X0[s(2495)], X0[s(2451)], X0.getFixedT;
const Wt = X0.t;
X0[s(471)], X0[s(1757)], X0[s(524)], X0[s(1454)], X0.loadLanguages;
const ec = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, xc = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, tc = (i) => xc[i], rc = (i) => i[s(1081)](ec, tc);
let ja = { bindI18n: s(1181), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", s(2446), "i", "p"], useSuspense: !0, unescape: rc };
const ac = (i = {}) => {
  ja = { ...ja, ...i };
}, sc = { type: s(2053), init(i) {
  var x = s;
  ac(i.options[x(698)]);
} }, nc = s(1132), ic = s(1816), oc = { webviewInForeground: nc, webviewInForeground2: ic }, cc = s(1336), fc = "click to restore", uc = { webviewInForeground: cc, webviewInForeground2: fc }, Ma = typeof require != s(2220) ? require : void 0;
let Jt = "en";
typeof navigator !== s(2220) && navigator.language ? Jt = navigator[s(1243)] == s(1964) ? "zh" : "en" : Ma && (Jt = Ma(s(1970))[s(603)].uiLocale.startsWith("zh") ? "zh" : "en");
X0[s(2495)](sc)[s(859)]({ resources: { zh: { translation: oc }, en: { translation: uc } }, lng: Jt, fallbackLng: "en", interpolation: { escapeValue: !1 } });
const Ce = [];
_e[s(1258)] = _e[s(1258)] || {}, _e[s(1258)][s(2293)] = function(i, x) {
  var t = s;
  typeof x === t(1806) ? Ce[t(482)]([i, { formatter: x, setter: null }]) : Ce[t(482)]([i, x]);
};
function dc(i, x, t) {
  var c, f, u;
  var a = s;
  const e = Ce[a(1718)](([l]) => {
    var d = a;
    return l == d(982);
  }), r = Ce[a(1718)](([l]) => {
    var d = a;
    return ar(l, i[d(1650)]);
  }) || e;
  let n = !1;
  if (r) {
    const l = r[1][a(1783)];
    l && (n = !!l(i, x, t));
  }
  !n && (i[a(2234)][x].value = t, (f = (c = i[a(2234)][x])[a(1991)]) == null || f.call(c, t)), (u = (R0[a(1130)] || R0[a(819)][a(2254)])[a(1444)]) == null || u[a(1803)][a(1814)]();
}
function Nx(i) {
  var x = s;
  const t = {}, a = Ce[x(1718)](([e]) => {
    var r = x;
    return e == r(982);
  });
  return i.nodes[x(720)]((e) => {
    var r = x;
    if (!e[r(2234)] || e.widgets[r(1013)] == 0) return;
    const n = Ce[r(1718)](([o]) => {
      var c = r;
      return ar(o, e[c(1650)]);
    }) || a;
    if (n) try {
      const o = n[1][r(611)](e);
      o && (t[e.id] = o[r(2234)][r(2299)]((c) => c[r(1547)]));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function Qt(i, x) {
  var e;
  var t = s;
  if (!i) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {} };
  const a = i[t(1930)][t(2299)]((r) => {
    var n = t;
    if (r.mode != 0) return;
    const o = px(r);
    if (!o || o[n(869)](".") || !r[n(2234)] || r[n(2234)].length == 0) return;
    let c = Ce[n(1718)](([d]) => {
      var v = n;
      return ar(d, r[v(1650)]);
    });
    if (c) try {
      const d = c[1][n(611)](r);
      if (d) return d.id = r.id, d.uiWeightSum = d[n(2234)].reduce((v, h) => v + (h.uiWeight || 12), 0), d;
    } catch (d) {
      return { id: r.id, title: o, uiWeightSum: 12, widgets: [{ outputType: n(1316), value: Wt(n(1155), c[0]) + (d[n(820)] || d || ""), name: "", options: {} }] };
    }
    if (!o[n(869)]("#")) return null;
    let f = r.widgets;
    const u = Ce[n(1718)](([d]) => {
      var v = n;
      return d == v(982);
    });
    if (u) {
      const d = u[1].formatter(r);
      if (d) return Object[n(1876)](d, { uiWeightSum: d[n(2234)][n(2092)]((v, h) => v + (h[n(2275)] || 12), 0) });
    }
    const l = { id: r.id, title: o, widgets: f.map((d) => ({ name: d[n(490)] || d[n(2252)], outputType: d[n(1650)] || n(2203), value: d.value, options: d[n(942)] })) };
    return Object.assign(l, { uiWeightSum: l[n(2234)][n(2092)]((d, v) => d + (v[n(2275)] || 12), 0) });
  })[t(2142)](Boolean)[t(1694)]((r, n) => {
    var o = t;
    let c = px(r), f = px(n);
    return c = c[o(869)]("#") ? c[o(1323)](1)[o(1240)]() : c.trim(), f = f[o(869)]("#") ? f[o(1323)](1)[o(1240)]() : f[o(1240)](), c[o(2478)](f);
  });
  return { widgetablePath: ((e = x[t(1378)][t(1552)]) == null ? void 0 : e[t(1660)]) || x[t(1106)], widgetableID: x[t(1378)].id, nodes: a[t(2092)]((r, n) => (r[n.id] = n, r), {}), nodeIndexes: a[t(2299)]((r) => r.id), options: {} };
}
function ar(i, x) {
  var t = s;
  const a = i.replace(/[.+^${}()|[\]\\]/g, t(778))[t(1081)](/\*/g, ".*").replace(/\?/g, ".");
  return new RegExp("^" + a + "$")[t(857)](x);
}
function px(i, x = "") {
  var e;
  var t = s;
  let a = x || i[t(1287)] || "";
  return i.setProperty && (a[t(869)]("#") || a[t(869)](".")) ? i[t(972)](t(525), a) : a = ((e = i.properties) == null ? void 0 : e[t(525)]) || a, a;
}
_e.getNodeTitle = px, P0[s(1367)](s(1217), async (i) => {
  var x = s;
  return i[x(517)][x(720)](({ nodeID: t, widgetIndex: a, value: e }) => {
    var r = x;
    const n = R0[r(1214)][r(1930)].find((o) => o.id == t);
    !n || e == n[r(2234)][a][r(1547)] || dc(n, a, e);
  }), { success: !0 };
}), P0[s(1367)](s(1861), async (i) => {
  var f;
  var x = s;
  const { workflow_path: t, reset: a } = i, e = { last_node_id: 0, last_link_id: 0, nodes: [], links: [], groups: [], config: {}, extra: {}, version: 0.4 };
  if (t[x(869)]("sdppp://")) return await c(t);
  const r = R0[x(1130)] || R0[x(819)][x(2254)], n = r[x(989)][x(1718)]((u) => u[x(1639)] === t || u[x(1106)] === t || u[x(1106)] === x(1508) + t);
  if (!a) return o(r, n), { success: !0 };
  return (n[x(1494)] || (f = r[x(1494)]) != null && f.call(r, n)) && r.openWorkflows.length === 1 ? await R0.loadGraphData(e) : await o(r, r.openWorkflows[0] == n ? r.openWorkflows[1] : r[x(551)][0]), await r[x(1352)](n, !1), await new Promise((u) => requestAnimationFrame(u)), await o(r, n), { success: !0 };
  async function o(u, l) {
    var d = x;
    R0[d(1130)] == u ? await l.load() : (await u[d(1861)](l), await R0[d(496)](JSON[d(1503)](JSON[d(2225)](l.activeState)), !0, !0, l, {}));
  }
  async function c(u) {
    var l = x;
    const d = u[l(1081)](l(2132), ""), v = await fetch(l(1212) + d)[l(2480)]((h) => h[l(510)]());
    return v[l(1552)][l(1660)] = u, await R0[l(496)](v), { success: !0 };
  }
}), P0[s(1367)](s(1187), async function(i) {
  var x = s;
  let { workflow_content: t, workflow_path: a } = i;
  return t.extra = { ...t[x(1552)] || {}, sdppp_workflow_alias: a }, await R0[x(496)](t), { success: !0 };
}), P0[s(1367)]("listWorkflows", async (i) => {
  var r;
  var x = s;
  if (i[x(1041)] == x(1426)) try {
    const n = await fetch(x(484) + i[x(1902)] + x(1772), { headers: i[x(468)] ? { Authorization: x(1577) + i.sdpppToken } : void 0 });
    return n.ok ? { workflows: (await n[x(510)]())[x(796)][x(2142)]((c) => c[x(1180)].endsWith(x(1204)))[x(2299)]((c) => (c[x(499)] ? x(1327) : x(1777)) + c.key) } : { workflows: [], error: x(1268) };
  } catch (n) {
    return { workflows: [], error: n[x(506)]() };
  }
  const t = R0[x(1130)] || R0.extensionManager.workflow;
  (r = t[x(1050)]) == null || r.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t[x(989)][x(2299)]((n) => n[x(1106)].replace("workflows/", ""));
  try {
    const n = new Headers(), o = localStorage.getItem(x(1068));
    o && n.set(x(896), o);
    const c = await fetch(x(1894), { headers: n });
    let f = [];
    c.ok && (f = (await c.json())[x(583)][x(2299)]((l) => l[x(1081)]("workflows/", ""))), e.sort((u, l) => {
      var d = x;
      const v = f[d(1586)](u), h = f[d(1586)](l);
      return v && !h ? -1 : !v && h ? 1 : u.localeCompare(l);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), P0.implementAction(s(1918), async (i) => {
  var n;
  var x = s;
  const { workflow_path: t, from_sid: a } = i, e = R0[x(1130)] || R0[x(819)].workflow, r = e[x(989)][x(1718)]((o) => o[x(1639)] === t || o.path === t || o[x(1106)] === x(1508) + t);
  if (!r) throw new Error(x(2180));
  return ((n = e[x(1444)]) == null ? void 0 : n.id) != r.id && await R0[x(1861)](t, a, !1), r[x(1803)].checkState(), await e[x(1918)](r), { success: !0 };
});
var lx = { exports: {} }, Nt, $a;
function lc() {
  if ($a) return Nt;
  $a = 1;
  var i = 1e3, x = i * 60, t = x * 60, a = t * 24, e = a * 7, r = a * 365.25;
  Nt = function(u, l) {
    var d = B;
    l = l || {};
    var v = typeof u;
    if (v === d(2203) && u[d(1013)] > 0) return n(u);
    if (v === "number" && isFinite(u)) return l[d(1324)] ? c(u) : o(u);
    throw new Error(d(2186) + JSON[d(2225)](u));
  };
  function n(u) {
    var l = B;
    if (u = String(u), !(u.length > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(u);
      if (d) {
        var v = parseFloat(d[1]), h = (d[2] || "ms")[l(1698)]();
        switch (h) {
          case "years":
          case l(798):
          case l(2094):
          case "yr":
          case "y":
            return v * r;
          case l(963):
          case "week":
          case "w":
            return v * e;
          case "days":
          case l(1274):
          case "d":
            return v * a;
          case "hours":
          case l(784):
          case "hrs":
          case "hr":
          case "h":
            return v * t;
          case l(2389):
          case l(1326):
          case l(1226):
          case l(477):
          case "m":
            return v * x;
          case l(1887):
          case l(1094):
          case "secs":
          case l(900):
          case "s":
            return v * i;
          case "milliseconds":
          case l(768):
          case l(1716):
          case "msec":
          case "ms":
            return v;
          default:
            return;
        }
      }
    }
  }
  function o(u) {
    var l = B, d = Math[l(2071)](u);
    return d >= a ? Math[l(1557)](u / a) + "d" : d >= t ? Math[l(1557)](u / t) + "h" : d >= x ? Math[l(1557)](u / x) + "m" : d >= i ? Math[l(1557)](u / i) + "s" : u + "ms";
  }
  function c(u) {
    var l = B, d = Math.abs(u);
    return d >= a ? f(u, d, a, l(1274)) : d >= t ? f(u, d, t, l(784)) : d >= x ? f(u, d, x, l(1326)) : d >= i ? f(u, d, i, l(1094)) : u + l(1780);
  }
  function f(u, l, d, v) {
    var h = B, m = l >= d * 1.5;
    return Math[h(1557)](u / d) + " " + v + (m ? "s" : "");
  }
  return Nt;
}
var Ot, La;
function hc() {
  if (La) return Ot;
  La = 1;
  function i(x) {
    var t = B;
    e.debug = e, e.default = e, e.coerce = u, e[t(1062)] = c, e.enable = n, e[t(1860)] = f, e.humanize = lc(), e[t(1066)] = l, Object[t(522)](x)[t(720)]((d) => {
      e[d] = x[d];
    }), e[t(1429)] = [], e[t(938)] = [], e.formatters = {};
    function a(d) {
      var v = t;
      let h = 0;
      for (let m = 0; m < d.length; m++)
        h = (h << 5) - h + d[v(1119)](m), h |= 0;
      return e.colors[Math[v(2071)](h) % e.colors[v(1013)]];
    }
    e[t(475)] = a;
    function e(d) {
      var v = t;
      let h, m = null, g, w;
      function S(...R) {
        var O = B;
        if (!S[O(1860)]) return;
        const k = S, E = Number(/* @__PURE__ */ new Date()), C = E - (h || E);
        k.diff = C, k.prev = h, k.curr = E, h = E, R[0] = e.coerce(R[0]), typeof R[0] != "string" && R[O(1215)]("%O");
        let D = 0;
        R[0] = R[0].replace(/%([a-zA-Z%])/g, ($, I) => {
          var F = O;
          if ($ === "%%") return "%";
          D++;
          const V = e[F(511)][I];
          if (typeof V == "function") {
            const L = R[D];
            $ = V.call(k, L), R.splice(D, 1), D--;
          }
          return $;
        }), e.formatArgs.call(k, R), (k.log || e.log).apply(k, R);
      }
      return S[v(817)] = d, S[v(679)] = e[v(679)](), S[v(1835)] = e[v(475)](d), S[v(705)] = r, S[v(1066)] = e.destroy, Object[v(1441)](S, v(1860), { enumerable: !0, configurable: !1, get: () => {
        var R = v;
        return m !== null ? m : (g !== e[R(1938)] && (g = e[R(1938)], w = e[R(1860)](d)), w);
      }, set: (R) => {
        m = R;
      } }), typeof e[v(859)] === v(1806) && e[v(859)](S), S;
    }
    function r(d, v) {
      var h = t;
      const m = e(this.namespace + (typeof v > "u" ? ":" : v) + d);
      return m[h(1236)] = this[h(1236)], m;
    }
    function n(d) {
      var v = t;
      e[v(2008)](d), e[v(1938)] = d, e[v(1429)] = [], e[v(938)] = [];
      const h = (typeof d === v(2203) ? d : "").trim()[v(1081)](/\s+/g, ",")[v(519)](",")[v(2142)](Boolean);
      for (const m of h)
        m[0] === "-" ? e.skips[v(482)](m[v(1323)](1)) : e.names[v(482)](m);
    }
    function o(d, v) {
      var h = t;
      let m = 0, g = 0, w = -1, S = 0;
      for (; m < d[h(1013)]; )
        if (g < v[h(1013)] && (v[g] === d[m] || v[g] === "*")) v[g] === "*" ? (w = g, S = m, g++) : (m++, g++);
        else if (w !== -1) g = w + 1, S++, m = S;
        else return !1;
      for (; g < v[h(1013)] && v[g] === "*"; )
        g++;
      return g === v.length;
    }
    function c() {
      var d = t;
      const v = [...e.names, ...e[d(938)][d(2299)]((h) => "-" + h)][d(1541)](",");
      return e.enable(""), v;
    }
    function f(d) {
      var v = t;
      for (const h of e[v(938)])
        if (o(d, h)) return !1;
      for (const h of e[v(1429)])
        if (o(d, h)) return !0;
      return !1;
    }
    function u(d) {
      var v = t;
      return d instanceof Error ? d[v(618)] || d[v(820)] : d;
    }
    function l() {
      var d = t;
      console[d(1034)](d(2090));
    }
    return e[t(1293)](e[t(1403)]()), e;
  }
  return Ot = i, Ot;
}
var za;
function pc() {
  var i = s;
  return za || (za = 1, function(x, t) {
    var a = i;
    t[a(998)] = r, t[a(2008)] = n, t.load = o, t[a(679)] = e, t[a(2453)] = c(), t[a(1066)] = /* @__PURE__ */ (() => {
      let u = !1;
      return () => {
        var l = B;
        !u && (u = !0, console.warn(l(2090)));
      };
    })(), t[a(505)] = [a(2307), "#0000FF", a(932), a(1142), a(726), "#0066FF", a(1634), "#0099FF", a(1200), a(2080), a(1300), "#00CC99", a(2473), "#00CCFF", "#3300CC", a(1955), "#3333CC", a(1700), a(719), a(2037), "#3399CC", a(537), a(2100), "#33CC33", a(2456), "#33CC99", a(2438), a(806), a(1675), a(670), a(1680), a(1874), a(1195), a(759), "#9900CC", a(701), "#9933CC", "#9933FF", "#99CC00", a(1319), a(757), a(2083), a(2021), a(1083), a(2333), a(1425), a(455), "#CC3333", a(2182), "#CC3399", a(1205), a(1475), a(1651), a(1891), a(1380), a(2475), "#CCCC00", "#CCCC33", "#FF0000", a(638), a(2078), a(1288), "#FF00CC", a(1943), "#FF3300", a(1732), a(1773), a(1054), a(978), a(1289), a(1233), "#FF6633", a(1506), "#FF9933", "#FFCC00", a(2268)];
    function e() {
      var u = a;
      if (typeof window !== u(2220) && window[u(910)] && (window[u(910)].type === u(885) || window[u(910)][u(1807)])) return !0;
      if (typeof navigator !== u(2220) && navigator[u(730)] && navigator[u(730)].toLowerCase()[u(2277)](/(edge|trident)\/(\d+)/)) return !1;
      let l;
      return typeof document < "u" && document[u(2190)] && document[u(2190)][u(2358)] && document[u(2190)][u(2358)].WebkitAppearance || typeof window !== u(2220) && window.console && (window.console.firebug || window[u(1446)].exception && window[u(1446)].table) || typeof navigator < "u" && navigator[u(730)] && (l = navigator[u(730)][u(1698)]()[u(2277)](/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || typeof navigator !== u(2220) && navigator[u(730)] && navigator.userAgent[u(1698)]().match(/applewebkit\/(\d+)/);
    }
    function r(u) {
      var l = a;
      if (u[0] = (this[l(679)] ? "%c" : "") + this.namespace + (this[l(679)] ? " %c" : " ") + u[0] + (this[l(679)] ? l(2462) : " ") + "+" + x[l(1936)][l(493)](this.diff), !this[l(679)]) return;
      const d = l(1136) + this[l(1835)];
      u[l(991)](1, 0, d, "color: inherit");
      let v = 0, h = 0;
      u[0].replace(/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (v++, m === "%c" && (h = v));
      }), u[l(991)](h, 0, d);
    }
    t[a(1236)] = console[a(2027)] || console[a(1236)] || (() => {
    });
    function n(u) {
      var l = a;
      try {
        u ? t[l(2453)][l(1653)](l(2027), u) : t[l(2453)][l(667)](l(2027));
      } catch {
      }
    }
    function o() {
      var u = a;
      let l;
      try {
        l = t.storage[u(433)]("debug") || t[u(2453)][u(433)]("DEBUG");
      } catch {
      }
      return !l && typeof process < "u" && u(663) in process && (l = process[u(663)][u(2385)]), l;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x.exports = hc()(t);
    const { formatters: f } = x.exports;
    f.j = function(u) {
      var l = a;
      try {
        return JSON[l(2225)](u);
      } catch (d) {
        return l(1399) + d[l(820)];
      }
    };
  }(lx, lx[i(1936)])), lx[i(1936)];
}
var vc = pc();
const ln = sn(vc);
ln[s(1293)]("*");
function mc(i, x) {
  var t = s;
  const a = ln(i), e = (r, n) => async function(...o) {
    try {
      await x({ level: r, messages: o });
    } catch {
    }
  };
  return a[t(1236)] = e(t(1236)), a;
}
const hn = mc("mesh:comfy", async ({ level: i, messages: x }) => {
  var t = s;
  const { mcpMesh: a } = await Promise[t(1674)]()[t(2480)](() => yc);
  await a[t(1382)](t(1970))[t(1864)][t(1236)]({ level: i, messages: x });
}), Ye = hn[s(705)](s(2228)), Oe = /* @__PURE__ */ new Map();
function bc(i, x) {
  var t = s;
  const a = Oe.get(i);
  Ye(t(545), i, x, a, Oe), a && a[t(908)](x);
}
P0[s(1367)]("run", async function* (i) {
  var x = s;
  let t = !1, a = [];
  function e() {
    var d = B;
    if (t) return;
    const v = Te.queuePrompt;
    Te[d(544)] = async (...h) => {
      var m = d;
      try {
        const g = await v[m(1122)](Te, ...h);
        return a[m(482)]({ error: null, result: g, prompt_id: g[m(858)] }), g;
      } catch (g) {
        throw a[m(482)]({ error: g, result: null, prompt_id: "" }), g;
      }
    }, t = !0;
  }
  t || e();
  const r = i.size;
  let n = !1, o = {}, c = [];
  P0[x(2244)][x(2181)]({ lastError: "", widgetableErrors: {} });
  try {
    a = [], await R0[x(544)](1, r), a[x(720)]((d) => {
      var h, m;
      var v = x;
      if (d[v(1316)]) n = !0, o = d[v(1316)][v(2097)] ? l(d[v(1316)].response[v(746)]) : {}, Object[v(1876)](o, { "-1": ((m = (h = d[v(1316)][v(2097)]) == null ? void 0 : h[v(1316)]) == null ? void 0 : m.message) || d[v(1316)][v(820)] });
      else {
        const g = d[v(1802)][v(858)];
        c[v(482)](g);
        let w, S;
        const R = new Promise((k, E) => {
          w = k, S = E;
        }), O = { promise: R, resolveImage: w, rejectImage: S };
        Oe[v(1260)](g, O);
      }
    });
  } catch (d) {
    Ye("app.queuePrompt caught", d[x(618)]), n = !0, o = { "-1": d[x(820)] || d[x(506)]() };
  }
  Ye(x(2419), n, o, x(1768), c), n && P0[x(2244)].setState({ widgetableErrors: o });
  let f = [];
  const u = /* @__PURE__ */ new Map();
  for (const d of c) {
    const v = Oe[x(1717)](d);
    v && u[x(1260)](d, v[x(710)]);
  }
  for (Ye(x(1588)); u[x(1388)] > 0; ) {
    const d = Array.from(u[x(1082)]()), v = d[x(2299)](([g, w]) => w[x(2480)]((S) => ({ prompt_id: g, images: S }))), { prompt_id: h, images: m } = await Promise.race(v);
    Ye(x(1956), h), f[x(482)](...m), u.delete(h), Oe.delete(h), yield { success: !0, prompt_ids: [h], images: m };
  }
  function l(d) {
    var v = x;
    const h = {};
    return Object[v(522)](d)[v(720)]((m) => {
      var g = v;
      const w = m[g(519)](":")[0], S = R0[g(1214)][g(1930)][g(1718)]((R) => R.id == w);
      h[w] = "[" + ((S == null ? void 0 : S.title) || w) + "]" + d[m][g(1483)][g(2299)](JSON[g(2225)])[g(1541)](`
`);
    }), h;
  }
}), P0[s(1367)]("stopAll", async () => {
  var i = s;
  await R0[i(826)][i(876)](i(1341)), await R0.api.interrupt();
  const x = Array[i(431)](Oe[i(517)]());
  Oe[i(1321)]();
  for (const t of x)
    try {
      t[i(2337)](new Error(i(1480)));
    } catch {
    }
  return { success: !0 };
}), P0[s(1367)](s(2079), async (i) => {
  var x = s;
  const { node_id: t, title: a } = i, e = R0[x(1214)][x(1930)][x(1718)]((r) => r.id == t);
  if (!e) throw new Error("Node not found");
  return e[x(1287)] = a, e[x(972)]("sdppp_widgetable_title", a), { success: !0 };
}), P0[s(1367)](s(559), async () => {
  var i = s;
  const x = await fetch(i(1469));
  return x.status == 404 ? { error: Wt(i(2052)), success: !1 } : x[i(951)] == 200 ? { success: !0 } : { error: Wt(i(1301)) + x[i(795)], success: !1 };
}), P0[s(1367)](s(2171), async (i) => {
  var x = s;
  const { api_key: t } = i;
  return localStorage[x(1653)]("comfy_api_key", t), location[x(1559)](), { success: !0 };
}), P0.implementAction("logout", async () => {
  var i = s;
  return document[i(2416)](".pi-sign-out")[i(807)][i(467)](), { success: !0 };
});
const hx = /* @__PURE__ */ new Map();
class gc {
  constructor(x) {
    var t = s;
    if (this[t(717)] = [], hx[t(2109)](x[t(2217)])) {
      const a = hx[t(1717)](x.posterIdentifier);
      a && a[t(566)]();
    }
    this[t(2217)] = x[t(2217)], this[t(2425)] = x.messagePoster, this[t(822)] = x[t(822)], this[t(2260)] = x.removeMessageEventListener, hx[t(1260)](this.posterIdentifier, this), this[t(650)] = this[t(650)].bind(this), this[t(1976)] = this.addMessageEventListener(this[t(650)]);
  }
  [s(650)](x) {
    var t = s;
    x[t(839)] !== t(541) || x[t(2217)] !== this[t(2217)] || (this[t(1668)] ? this[t(1668)](x.payload) : this.messageQueue.push(x[t(1533)]));
  }
  async [s(1767)]() {
    for (var x = s; this.messageQueue.length > 0; ) {
      const t = this[x(717)][x(1889)]();
      t && this.onmessage && this[x(1668)](t);
    }
  }
  async send(x, t) {
    var a = s;
    this[a(2425)]({ channel: "sdppp", posterIdentifier: this[a(2217)], payload: x });
  }
  async [s(566)]() {
    var x = s;
    hx[x(1853)](this[x(2217)]), this[x(2260)](this[x(1976)]);
  }
}
async function pn() {
  var i = s;
  if (window[i(1061)])
    return await P0[i(918)](i(1970), async function() {
      var x = i;
      const t = new gc({ posterIdentifier: x(914), messagePoster: (e) => {
        var r = x;
        window[r(1061)][r(1868)](e, "*");
      }, addMessageEventListener: (e) => {
        var r = x;
        const n = (o) => {
          var c = B;
          e(o[c(1513)]);
        };
        return window[r(2084)](r(820), n), n;
      }, removeMessageEventListener: (e) => {
        var r = x;
        window[r(873)]("message", e);
      } }), a = new So({ name: "comfy-uxp", version: "1.0.0" });
      return a[x(918)](t), P0[x(2414)](a), window[x(1061)][x(1868)]({ channel: x(516), meshName: x(2044), action: x(918) }, "*"), await new Promise((e) => {
        var r = x;
        a[r(666)][r(1364)] = () => {
          var n = r;
          a[n(666)].oninitialized = void 0, e(!0);
        };
      }), a;
    });
}
const yc = Object[s(542)](Object[s(1441)]({ __proto__: null, connectUXP: pn, mcpMesh: P0 }, Symbol.toStringTag, { value: s(1489) }));
Te[s(2084)](s(2237), (i) => {
  var x = s;
  const t = R0[x(1130)] || R0[x(819)][x(2254)], a = t[x(1444)];
  if (i[x(2322)].id !== a[x(1378)].id) return;
  const e = P0[x(2244)].getState()[x(775)], r = Qt(R0[x(1214)], a);
  mn(r, e) && P0[x(2244)][x(2181)]({ widgetableStructure: r }), P0[x(2244)][x(2181)]({ widgetableValues: Nx(R0[x(1214)]) });
}), Te[s(2084)](s(1662), () => {
  var i = s;
  P0[i(2244)][i(2181)]({ widgetableValues: Nx(R0[i(1214)]) });
});
let Ha = 0, Va = !0, Ua = "";
function vn() {
  var i = s;
  requestAnimationFrame(vn);
  const x = R0[i(1130)] || R0[i(819)][i(2254)], t = x.activeWorkflow, a = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[i(1106)]) || "", r = (t == null ? void 0 : t[i(943)]) || !0;
  if (a === Ha && e === Ua && r === Va) return;
  Ha = a, Ua = e, Va = r;
  const n = Qt(R0[i(1214)], t), o = Nx(R0[i(1214)]);
  P0[i(2244)][i(2181)]({ widgetableStructure: n, widgetableValues: o }), setTimeout(() => {
    var c = i;
    if (t !== x[c(1444)]) return;
    const f = Qt(R0[c(1214)], t), u = Nx(R0[c(1214)]);
    mn(f, n) && P0.store[c(2181)]({ widgetableStructure: f }), P0[c(2244)][c(2181)]({ widgetableValues: u });
  }, 800);
}
requestAnimationFrame(vn);
function mn(i, x) {
  var t = s;
  return i[t(2058)].length !== x[t(2058)].length || JSON[t(2225)](i[t(2058)]) !== JSON[t(2225)](x[t(2058)]) || JSON.stringify(i[t(1930)]) !== JSON[t(2225)](x.nodes);
}
let Za = !1;
async function wc() {
  var i = s;
  if (Za) return Promise[i(1674)]();
  Te[i(2081)] && P0.store.setState({ comfyUserToken: Te[i(2081)] }), Za = !0;
}
hn[s(705)]("comfy-entry");
async function Sc(i, x, t) {
  var a = s;
  x[a(2084)](a(1302), ({ detail: n }) => {
    var o = a;
    if (!n) return;
    let c = 0, f = 0;
    !isNaN(n[o(1547)] / n[o(1269)]) && (c = Math[o(1557)](n[o(1547)] / n.max * 100));
    const u = n[o(489)], l = graph[o(1930)][o(1718)]((d) => d.id == u);
    if (l && l[o(1631)]) {
      const d = 100 / graph.nodes.length;
      f = Math.round(l[o(1631)] * d) + (c ? c / 100 * d : 0);
    }
    P0[o(2244)].setState({ progress: c, graphProgress: f });
  }), x[a(2084)]("status", (n) => {
    var c;
    var o = a;
    (c = n[o(2322)]) != null && c.exec_info && P0[o(2244)][o(2181)]({ queueSize: n[o(2322)][o(1856)][o(451)] });
  }), x[a(2084)]("execution_error", ({ detail: n }) => {
    var o = a;
    if (P0[o(2244)].setState({ executingNodeTitle: "", lastError: n[o(1173)] }), n.node_id) {
      const c = i[o(1214)].nodes[o(1718)]((f) => f.id == n.node_id);
      P0.store[o(2181)]({ widgetableErrors: { [n[o(622)]]: "[" + ((c == null ? void 0 : c[o(1287)]) || n[o(622)]) + "]" + n[o(1173)] } });
    }
  }), x[a(2084)]("executing", (n) => {
    var o = a;
    const c = n[o(2322)], f = graph.nodes[o(1718)]((u) => u.id == c);
    if (f) {
      const u = 100 / graph[o(1930)].length;
      P0[o(2244)][o(2181)]({ executingNodeTitle: f.title, graphProgress: Math[o(1557)](f[o(1631)] * u) });
    }
  }), x[a(2084)](a(465), () => {
    var n = a;
    P0[n(2244)][n(2181)]({ progress: 0, executingNodeTitle: "" });
  }), x.addEventListener("execution_start", ({ detail: n }) => {
    var o = a;
    P0[o(2244)][o(2181)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", lastRunTime: Date[o(1947)]() });
  });
  const e = /* @__PURE__ */ new Map();
  x.addEventListener(a(788), (n) => {
    var o = a;
    P0[o(2244)][o(2181)]({ progress: 0, executingNodeTitle: "" });
    const c = (e[o(1717)](n[o(2322)][o(858)]) || [])[o(2299)]((f) => ({ url: f, thumbnail: f }));
    bc(n[o(2322)][o(858)], c), e[o(1853)](n.detail[o(858)]);
  }), x[a(2084)](a(1662), (n) => {
    var o = a;
    const c = e.get(n[o(2322)][o(858)]) || [];
    n[o(2322)][o(1661)] && Array.isArray(n[o(2322)][o(1661)][o(2141)]) && n[o(2322)].output.images[o(1013)] > 0 && c[o(482)](...n[o(2322)][o(1661)][o(2141)][o(2142)]((f) => f.type == o(1661)).map((f) => {
      var u = o;
      return location[u(1342)] + location[u(887)] + u(1063) + f.type + u(512) + f.filename + (f.subfolder ? u(1929) + f[u(1607)] : "");
    })), n.detail.output && Array.isArray(n.detail.output[o(1196)]) && n.detail[o(1661)][o(1196)][o(1013)] > 0 && c.push(...n[o(2322)][o(1661)][o(1196)][o(2299)]((f) => {
      var u = o;
      return location.origin + location[u(887)] + u(1875) + f;
    })), e[o(1260)](n.detail[o(858)], c);
  });
  let r = null;
  x[a(2084)]("reconnecting", (n) => {
    r = setTimeout(() => {
      var o = B;
      P0[o(2244)].setState({ comfyWSState: o(1656) });
    }, 1e3);
  }), x[a(2084)](a(2284), (n) => {
    var o = a;
    P0.store.setState({ comfyWSState: o(1709) }), clearTimeout(r);
  });
}
let qt = [];
(async function() {
  var x, t, a, e, r, n;
  var i = s;
  if (typeof gradioApp == i(2220)) {
    try {
      const o = (t = (x = window.comfyAPI) == null ? void 0 : x[i(1107)]) == null ? void 0 : t[i(1107)], c = (e = (a = window[i(2388)]) == null ? void 0 : a.ui) == null ? void 0 : e[i(1610)], f = (n = (r = window.comfyAPI) == null ? void 0 : r.api) == null ? void 0 : n[i(826)];
      if (!o || !f || !c) throw new Error(i(1346));
      await wc(), await pn(), await Sc(o, f, c), import("./sdppp-custom.js")[i(2480)]((u) => {
        var l = i;
        u[l(1846)](_e, 2);
      });
    } catch (o) {
      qt[i(482)](o[i(618)] || o[i(820)] || o);
    }
    await new Promise((o) => setTimeout(o, 2e3)), qt[i(1013)] && console[i(1316)](qt[0]);
  }
})();
