var Nn = Object.defineProperty;
var qn = (i, x, t) => x in i ? Nn(i, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[x] = t;
var m0 = (i, x, t) => qn(i, typeof x != "symbol" ? x + "" : x, t);
var s = B;
(function(i, x) {
  for (var t = B, a = i(); ; )
    try {
      var e = parseInt(t(979)) / 1 * (-parseInt(t(1239)) / 2) + -parseInt(t(1746)) / 3 + -parseInt(t(1183)) / 4 + parseInt(t(1698)) / 5 * (parseInt(t(1941)) / 6) + -parseInt(t(682)) / 7 * (parseInt(t(2379)) / 8) + parseInt(t(778)) / 9 + -parseInt(t(1558)) / 10 * (-parseInt(t(1201)) / 11);
      if (e === x) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Fx, 834814);
const T0 = window[s(1186)][s(936)][s(936)];
window[s(1186)].ui[s(1627)];
const Oe = window[s(1186)][s(1510)][s(1510)];
var _a;
class Tn {
  constructor(x) {
    m0(this, _a);
    var t = s;
    this[t(154)] = x;
    const a = this[t(1768)]();
    if (!a[t(1467)]) throw new Error(t(1043) + a.errors.join(", "));
  }
  [(_a = s(154), s(1768))]() {
    var x = s;
    const t = [];
    (!this.definition.nodes || Object.keys(this[x(154)][x(653)])[x(1001)] === 0) && t[x(1472)](x(2149));
    for (const [e, r] of this.definition[x(1843)])
      !this[x(154)][x(653)][e] && t[x(1472)]("Edge references unknown source node: " + e), !this[x(154)][x(653)][r] && t[x(1472)](x(433) + r);
    const a = this.detectCycles();
    return !a[x(1467)] && t[x(1472)](...a[x(2244)]), { valid: t[x(1001)] === 0, errors: t };
  }
  [s(181)]() {
    var x = s;
    const t = /* @__PURE__ */ new Map();
    for (const a of Object[x(2411)](this[x(154)][x(653)]))
      t[x(765)](a, []);
    for (const [a, e] of this.definition[x(1843)]) {
      const r = t[x(1195)](a) || [];
      r[x(1472)](e), t[x(765)](a, r);
    }
    return t;
  }
  [s(1250)]() {
    var x = s;
    const t = [], a = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), r = this.buildDirectedAdjacencyList(), n = (o, c) => {
      var u = B;
      if (e[u(1489)](o)) {
        const f = c[u(1616)](o), l = c[u(2349)](f)[u(393)](o);
        return t[u(1472)]("Cycle detected: " + l[u(697)](u(1479))), !0;
      }
      if (a.has(o)) return !1;
      a[u(2121)](o), e[u(2121)](o);
      const d = r[u(1195)](o) || [];
      for (const f of d)
        if (n(f, [...c, o])) return !0;
      return e.delete(o), !1;
    };
    for (const o of Object[x(2411)](this.definition[x(653)]))
      !a.has(o) && n(o, []);
    return { valid: t[x(1001)] === 0, errors: t };
  }
  [s(1714)]() {
    var x = s;
    const t = /* @__PURE__ */ new Map();
    for (const a of Object.keys(this.definition[x(653)]))
      t[x(765)](a, []);
    for (const [a, e] of this[x(154)][x(1843)]) {
      const r = t[x(1195)](a) || [];
      r[x(1472)](e), t[x(765)](a, r);
      const n = t[x(1195)](e) || [];
      n[x(1472)](a), t[x(765)](e, n);
    }
    return t;
  }
  [s(405)](x) {
    var t = s;
    return this[t(1714)]()[t(1195)](x) || [];
  }
  [s(1078)](x) {
    var t = s;
    return this[t(154)][t(653)][x];
  }
  [s(1634)]() {
    var x = s;
    return Object[x(2411)](this[x(154)][x(653)]);
  }
  hasEdge(x, t) {
    var a = s;
    return this[a(154)].edges[a(2331)](([e, r]) => e === x && r === t || e === t && r === x);
  }
  [s(923)](x, t) {
    var a = s;
    if (x === t) return [x];
    const e = this[a(1714)](), r = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; r[a(1001)] > 0; ) {
      const { nodeId: o, path: c } = r[a(2142)]();
      if (n[a(1489)](o)) continue;
      if (n[a(2121)](o), o === t) return c;
      const u = e[a(1195)](o) || [];
      for (const d of u)
        !n[a(1489)](d) && r[a(1472)]({ nodeId: d, path: [...c, d] });
    }
    return null;
  }
  hasPath(x, t) {
    var a = s;
    return this[a(923)](x, t) !== null;
  }
  [s(542)]() {
    var x = s;
    return { ...this[x(154)] };
  }
}
const kr = (i) => {
  let x;
  const t = /* @__PURE__ */ new Set(), a = (u, d) => {
    var f = B;
    const l = typeof u === f(834) ? u(x) : u;
    if (!Object.is(l, x)) {
      const v = x;
      x = d ?? (typeof l != "object" || l === null) ? l : Object[f(1236)]({}, x, l), t[f(1353)]((h) => h(x, v));
    }
  }, e = () => x, r = () => c, n = (u) => {
    var d = B;
    return t[d(2121)](u), () => t[d(2456)](u);
  }, o = { setState: a, getState: e, getInitialState: r, subscribe: n }, c = x = i(a, e, o);
  return o;
}, On = (i) => i ? kr(i) : kr;
var q0;
(function(i) {
  var x = s;
  i[x(1650)] = (r) => {
  };
  function t(r) {
  }
  i[x(2380)] = t;
  function a(r) {
    throw new Error();
  }
  i[x(715)] = a, i.arrayToEnum = (r) => {
    const n = {};
    for (const o of r)
      n[o] = o;
    return n;
  }, i[x(1795)] = (r) => {
    var n = x;
    const o = i[n(374)](r)[n(830)]((u) => typeof r[r[u]] != "number"), c = {};
    for (const u of o)
      c[u] = r[u];
    return i[n(1595)](c);
  }, i[x(1595)] = (r) => {
    var n = x;
    return i[n(374)](r).map(function(o) {
      return r[o];
    });
  }, i.objectKeys = typeof Object[x(2411)] === x(834) ? (r) => Object.keys(r) : (r) => {
    var n = x;
    const o = [];
    for (const c in r)
      Object[n(2123)][n(2107)][n(801)](r, c) && o[n(1472)](c);
    return o;
  }, i[x(305)] = (r, n) => {
    for (const o of r)
      if (n(o)) return o;
  }, i[x(257)] = typeof Number[x(257)] === x(834) ? (r) => Number[x(257)](r) : (r) => typeof r === x(1829) && Number[x(1989)](r) && Math[x(1728)](r) === r;
  function e(r, n = " | ") {
    var o = x;
    return r[o(1825)]((c) => typeof c === o(389) ? "'" + c + "'" : c).join(n);
  }
  i.joinValues = e, i[x(838)] = (r, n) => typeof n == "bigint" ? n.toString() : n;
})(q0 || (q0 = {}));
var Pr;
(function(i) {
  var x = s;
  i[x(1345)] = (t, a) => ({ ...t, ...a });
})(Pr || (Pr = {}));
const x0 = q0.arrayToEnum([s(389), s(2369), s(1829), s(2472), s(212), s(325), s(677), "bigint", s(672), s(834), s(2108), s(2348), s(791), "object", s(2090), s(1260), s(862), s(1428), s(1825), s(765)]), Ee = (i) => {
  var x = s;
  switch (typeof i) {
    case x(2108):
      return x0[x(2108)];
    case x(389):
      return x0[x(389)];
    case "number":
      return Number[x(921)](i) ? x0[x(2369)] : x0.number;
    case x(325):
      return x0.boolean;
    case x(834):
      return x0[x(834)];
    case x(1561):
      return x0.bigint;
    case x(672):
      return x0[x(672)];
    case x(865):
      return Array[x(2305)](i) ? x0.array : i === null ? x0.null : i[x(1934)] && typeof i.then == "function" && i[x(303)] && typeof i.catch === x(834) ? x0[x(1260)] : typeof Map !== x(2108) && i instanceof Map ? x0[x(1825)] : typeof Set < "u" && i instanceof Set ? x0[x(765)] : typeof Date < "u" && i instanceof Date ? x0[x(677)] : x0[x(865)];
    default:
      return x0[x(2090)];
  }
}, K = q0[s(1799)]([s(1763), "invalid_literal", s(592), s(1391), "invalid_union_discriminator", s(2270), s(1238), s(1285), s(1335), s(1928), s(462), s(1757), "too_big", s(512), s(1739), "not_finite"]);
class Se extends Error {
  get [s(2244)]() {
    var x = s;
    return this[x(309)];
  }
  constructor(x) {
    var t = s;
    super(), this.issues = [], this[t(2220)] = (e) => {
      var r = t;
      this[r(309)] = [...this[r(309)], e];
    }, this[t(332)] = (e = []) => {
      var r = t;
      this.issues = [...this[r(309)], ...e];
    };
    const a = new.target[t(2123)];
    Object.setPrototypeOf ? Object.setPrototypeOf(this, a) : this[t(1395)] = a, this[t(712)] = t(1463), this[t(309)] = x;
  }
  [s(1678)](x) {
    const t = x || function(r) {
      return r.message;
    }, a = { _errors: [] }, e = (r) => {
      var n = B;
      for (const o of r[n(309)])
        if (o[n(1993)] === n(1391)) o.unionErrors[n(1825)](e);
        else if (o.code === n(1335)) e(o[n(2481)]);
        else if (o[n(1993)] === "invalid_arguments") e(o[n(2462)]);
        else if (o.path[n(1001)] === 0) a[n(1783)][n(1472)](t(o));
        else {
          let c = a, u = 0;
          for (; u < o[n(1048)].length; ) {
            const d = o.path[u];
            u === o[n(1048)].length - 1 ? (c[d] = c[d] || { _errors: [] }, c[d][n(1783)].push(t(o))) : c[d] = c[d] || { _errors: [] }, c = c[d], u++;
          }
        }
    };
    return e(this), a;
  }
  static [s(1457)](x) {
    var t = s;
    if (!(x instanceof Se)) throw new Error(t(2115) + x);
  }
  [s(2345)]() {
    var x = s;
    return this[x(456)];
  }
  get [s(456)]() {
    var x = s;
    return JSON.stringify(this[x(309)], q0.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    var x = s;
    return this[x(309)][x(1001)] === 0;
  }
  [s(1797)](x = (t) => t[s(456)]) {
    var t = s;
    const a = {}, e = [];
    for (const r of this[t(309)])
      if (r.path[t(1001)] > 0) {
        const n = r[t(1048)][0];
        a[n] = a[n] || [], a[n][t(1472)](x(r));
      } else e[t(1472)](x(r));
    return { formErrors: e, fieldErrors: a };
  }
  get [s(1165)]() {
    var x = s;
    return this[x(1797)]();
  }
}
Se[s(536)] = (i) => new Se(i);
const Mt = (i, x) => {
  var t = s;
  let a;
  switch (i[t(1993)]) {
    case K.invalid_type:
      i[t(540)] === x0[t(2108)] ? a = t(957) : a = t(2043) + i.expected + t(2009) + i[t(540)];
      break;
    case K[t(770)]:
      a = t(1084) + JSON[t(1581)](i[t(221)], q0.jsonStringifyReplacer);
      break;
    case K.unrecognized_keys:
      a = "Unrecognized key(s) in object: " + q0.joinValues(i.keys, ", ");
      break;
    case K.invalid_union:
      a = "Invalid input";
      break;
    case K[t(2374)]:
      a = t(649) + q0[t(928)](i[t(146)]);
      break;
    case K[t(2270)]:
      a = t(2003) + q0[t(928)](i[t(146)]) + t(2011) + i.received + "'";
      break;
    case K.invalid_arguments:
      a = t(635);
      break;
    case K[t(1335)]:
      a = "Invalid function return type";
      break;
    case K[t(1928)]:
      a = t(1721);
      break;
    case K[t(462)]:
      typeof i[t(2128)] === t(865) ? t(1605) in i.validation ? (a = t(2081) + i[t(2128)].includes + '"', typeof i[t(2128)].position === t(1829) && (a = a + t(1686) + i[t(2128)][t(1485)])) : t(1287) in i.validation ? a = t(1835) + i.validation.startsWith + '"' : t(207) in i.validation ? a = t(583) + i[t(2128)][t(207)] + '"' : q0[t(715)](i[t(2128)]) : i[t(2128)] !== "regex" ? a = "Invalid " + i[t(2128)] : a = t(210);
      break;
    case K[t(1757)]:
      i.type === t(791) ? a = t(1945) + (i[t(166)] ? t(626) : i.inclusive ? t(2401) : "more than") + " " + i[t(621)] + t(1911) : i[t(399)] === t(389) ? a = t(577) + (i[t(166)] ? t(626) : i[t(1821)] ? t(2401) : "over") + " " + i[t(621)] + t(1831) : i[t(399)] === t(1829) ? a = t(176) + (i[t(166)] ? t(2474) : i.inclusive ? t(2138) : "greater than ") + i[t(621)] : i[t(399)] === "bigint" ? a = "Number must be " + (i[t(166)] ? t(2474) : i[t(1821)] ? "greater than or equal to " : t(2396)) + i[t(621)] : i[t(399)] === t(677) ? a = "Date must be " + (i.exact ? t(2474) : i[t(1821)] ? t(2138) : "greater than ") + new Date(Number(i[t(621)])) : a = "Invalid input";
      break;
    case K[t(1245)]:
      i.type === t(791) ? a = t(1945) + (i[t(166)] ? t(626) : i[t(1821)] ? "at most" : t(1572)) + " " + i[t(1932)] + " element(s)" : i.type === "string" ? a = "String must contain " + (i[t(166)] ? t(626) : i[t(1821)] ? "at most" : "under") + " " + i[t(1932)] + t(1831) : i.type === t(1829) ? a = t(176) + (i.exact ? t(626) : i[t(1821)] ? t(739) : t(1572)) + " " + i[t(1932)] : i[t(399)] === t(1561) ? a = t(1222) + (i[t(166)] ? t(626) : i[t(1821)] ? "less than or equal to" : t(1572)) + " " + i[t(1932)] : i[t(399)] === "date" ? a = "Date must be " + (i[t(166)] ? t(626) : i[t(1821)] ? t(709) : "smaller than") + " " + new Date(Number(i.maximum)) : a = t(2116);
      break;
    case K.custom:
      a = "Invalid input";
      break;
    case K[t(512)]:
      a = t(2302);
      break;
    case K.not_multiple_of:
      a = t(213) + i[t(2074)];
      break;
    case K[t(245)]:
      a = "Number must be finite";
      break;
    default:
      a = x[t(1870)], q0[t(715)](i);
  }
  return { message: a };
};
let An = Mt;
function Dn() {
  return An;
}
const jn = (i) => {
  var x = s;
  const { data: t, path: a, errorMaps: e, issueData: r } = i, n = [...a, ...r[x(1048)] || []], o = { ...r, path: n };
  if (r[x(456)] !== void 0) return { ...r, path: n, message: r.message };
  let c = "";
  const u = e[x(830)]((d) => !!d)[x(2349)]()[x(2161)]();
  for (const d of u)
    c = d(o, { data: t, defaultError: c })[x(456)];
  return { ...r, path: n, message: c };
};
function Q(i, x) {
  var t = s;
  const a = Dn(), e = jn({ issueData: x, data: i[t(1512)], path: i[t(1048)], errorMaps: [i[t(294)].contextualErrorMap, i[t(1147)], a, a === Mt ? void 0 : Mt].filter((r) => !!r) });
  i[t(294)][t(309)].push(e);
}
class _0 {
  constructor() {
    var x = s;
    this[x(226)] = "valid";
  }
  [s(1710)]() {
    var x = s;
    this[x(226)] === x(1467) && (this.value = x(1710));
  }
  [s(1202)]() {
    var x = s;
    this[x(226)] !== x(2423) && (this[x(226)] = x(2423));
  }
  static mergeArray(x, t) {
    var a = s;
    const e = [];
    for (const r of t) {
      if (r[a(1171)] === "aborted") return h0;
      r[a(1171)] === a(1710) && x[a(1710)](), e[a(1472)](r[a(226)]);
    }
    return { status: x[a(226)], value: e };
  }
  static async [s(1762)](x, t) {
    var a = s;
    const e = [];
    for (const r of t) {
      const n = await r[a(477)], o = await r[a(226)];
      e[a(1472)]({ key: n, value: o });
    }
    return _0[a(1895)](x, e);
  }
  static [s(1895)](x, t) {
    var a = s;
    const e = {};
    for (const r of t) {
      const { key: n, value: o } = r;
      if (n[a(1171)] === a(2423) || o[a(1171)] === a(2423)) return h0;
      n[a(1171)] === "dirty" && x[a(1710)](), o[a(1171)] === a(1710) && x[a(1710)](), n[a(226)] !== "__proto__" && (typeof o[a(226)] !== a(2108) || r[a(1370)]) && (e[n.value] = o[a(226)]);
    }
    return { status: x[a(226)], value: e };
  }
}
const h0 = Object[s(1104)]({ status: s(2423) }), Qe = (i) => ({ status: s(1710), value: i }), te = (i) => ({ status: s(1467), value: i }), Er = (i) => i[s(1171)] === s(2423), Ir = (i) => i[s(1171)] === s(1710), Ue = (i) => i[s(1171)] === s(1467), px = (i) => typeof Promise !== s(2108) && i instanceof Promise;
var a0;
(function(i) {
  var x = s;
  i[x(2210)] = (t) => typeof t === x(389) ? { message: t } : t || {}, i.toString = (t) => typeof t === x(389) ? t : t == null ? void 0 : t.message;
})(a0 || (a0 = {}));
class he {
  constructor(x, t, a, e) {
    var r = s;
    this[r(1528)] = [], this[r(549)] = x, this.data = t, this._path = a, this[r(897)] = e;
  }
  get [s(1048)]() {
    var x = s;
    return !this._cachedPath[x(1001)] && (Array.isArray(this[x(897)]) ? this[x(1528)][x(1472)](...this._path, ...this[x(897)]) : this[x(1528)][x(1472)](...this[x(2106)], this._key)), this[x(1528)];
  }
}
const Rr = (i, x) => {
  var t = s;
  if (Ue(x)) return { success: !0, data: x[t(226)] };
  if (!i[t(294)][t(309)].length) throw new Error(t(1552));
  return { success: !1, get error() {
    var a = t;
    if (this[a(1103)]) return this[a(1103)];
    const e = new Se(i.common[a(309)]);
    return this._error = e, this[a(1103)];
  } };
};
function y0(i) {
  var x = s;
  if (!i) return {};
  const { errorMap: t, invalid_type_error: a, required_error: e, description: r } = i;
  if (t && (a || e)) throw new Error(x(428));
  return t ? { errorMap: t, description: r } : { errorMap: (o, c) => {
    var u = x;
    const { message: d } = i;
    return o[u(1993)] === u(2270) ? { message: d ?? c[u(1870)] } : typeof c.data === u(2108) ? { message: d ?? e ?? c[u(1870)] } : o[u(1993)] !== "invalid_type" ? { message: c[u(1870)] } : { message: d ?? a ?? c[u(1870)] };
  }, description: r };
}
class I0 {
  get description() {
    return this._def.description;
  }
  _getType(x) {
    var t = s;
    return Ee(x[t(1512)]);
  }
  [s(1261)](x, t) {
    var a = s;
    return t || { common: x[a(549)][a(294)], data: x[a(1512)], parsedType: Ee(x[a(1512)]), schemaErrorMap: this._def[a(701)], path: x[a(1048)], parent: x[a(549)] };
  }
  [s(141)](x) {
    var t = s;
    return { status: new _0(), ctx: { common: x[t(549)][t(294)], data: x[t(1512)], parsedType: Ee(x[t(1512)]), schemaErrorMap: this._def[t(701)], path: x.path, parent: x.parent } };
  }
  _parseSync(x) {
    var t = s;
    const a = this[t(758)](x);
    if (px(a)) throw new Error(t(315));
    return a;
  }
  _parseAsync(x) {
    var t = s;
    const a = this[t(758)](x);
    return Promise[t(695)](a);
  }
  [s(1674)](x, t) {
    var a = s;
    const e = this[a(1961)](x, t);
    if (e[a(2203)]) return e[a(1512)];
    throw e[a(1106)];
  }
  safeParse(x, t) {
    var a = s;
    const e = { common: { issues: [], async: (t == null ? void 0 : t[a(1494)]) ?? !1, contextualErrorMap: t == null ? void 0 : t[a(701)] }, path: (t == null ? void 0 : t[a(1048)]) || [], schemaErrorMap: this[a(1640)][a(701)], parent: null, data: x, parsedType: Ee(x) }, r = this[a(652)]({ data: x, path: e.path, parent: e });
    return Rr(e, r);
  }
  [s(978)](x) {
    var e, r;
    var t = s;
    const a = { common: { issues: [], async: !!this[t(906)][t(1494)] }, path: [], schemaErrorMap: this[t(1640)].errorMap, parent: null, data: x, parsedType: Ee(x) };
    if (!this[t(906)].async) try {
      const n = this[t(652)]({ data: x, path: [], parent: a });
      return Ue(n) ? { value: n[t(226)] } : { issues: a.common[t(309)] };
    } catch (n) {
      (r = (e = n == null ? void 0 : n[t(456)]) == null ? void 0 : e[t(1158)]()) != null && r[t(1605)]("encountered") && (this[t(906)].async = !0), a[t(294)] = { issues: [], async: !0 };
    }
    return this[t(1807)]({ data: x, path: [], parent: a }).then((n) => Ue(n) ? { value: n[t(226)] } : { issues: a.common[t(309)] });
  }
  async [s(1996)](x, t) {
    var a = s;
    const e = await this.safeParseAsync(x, t);
    if (e[a(2203)]) return e[a(1512)];
    throw e.error;
  }
  async safeParseAsync(x, t) {
    var a = s;
    const e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t[a(701)], async: !0 }, path: (t == null ? void 0 : t[a(1048)]) || [], schemaErrorMap: this._def[a(701)], parent: null, data: x, parsedType: Ee(x) }, r = this[a(758)]({ data: x, path: e[a(1048)], parent: e }), n = await (px(r) ? r : Promise.resolve(r));
    return Rr(e, n);
  }
  [s(534)](x, t) {
    var a = s;
    const e = (r) => {
      var n = B;
      return typeof t === n(389) || typeof t === n(2108) ? { message: t } : typeof t === n(834) ? t(r) : t;
    };
    return this[a(738)]((r, n) => {
      var o = a;
      const c = x(r), u = () => n[o(2220)]({ code: K[o(592)], ...e(r) });
      return typeof Promise !== o(2108) && c instanceof Promise ? c.then((d) => d ? !0 : (u(), !1)) : c ? !0 : (u(), !1);
    });
  }
  [s(1906)](x, t) {
    var a = s;
    return this[a(738)]((e, r) => {
      var n = a;
      return x(e) ? !0 : (r[n(2220)](typeof t === n(834) ? t(e, r) : t), !1);
    });
  }
  _refinement(x) {
    var t = s;
    return new qe({ schema: this, typeName: p0[t(2242)], effect: { type: t(1906), refinement: x } });
  }
  [s(482)](x) {
    var t = s;
    return this[t(738)](x);
  }
  constructor(x) {
    var t = s;
    this[t(125)] = this.safeParseAsync, this[t(1640)] = x, this[t(1674)] = this.parse[t(2057)](this), this[t(1961)] = this[t(1961)].bind(this), this[t(1996)] = this[t(1996)][t(2057)](this), this.safeParseAsync = this[t(736)][t(2057)](this), this[t(125)] = this[t(125)][t(2057)](this), this[t(534)] = this[t(534)][t(2057)](this), this[t(1906)] = this[t(1906)].bind(this), this.superRefine = this[t(482)][t(2057)](this), this[t(1169)] = this[t(1169)][t(2057)](this), this.nullable = this[t(1387)][t(2057)](this), this[t(1854)] = this[t(1854)][t(2057)](this), this[t(791)] = this[t(791)].bind(this), this[t(1260)] = this.promise[t(2057)](this), this.or = this.or.bind(this), this[t(1130)] = this[t(1130)][t(2057)](this), this[t(129)] = this[t(129)][t(2057)](this), this[t(851)] = this[t(851)][t(2057)](this), this[t(2454)] = this[t(2454)][t(2057)](this), this[t(303)] = this.catch.bind(this), this[t(2016)] = this.describe.bind(this), this.pipe = this[t(1268)][t(2057)](this), this[t(769)] = this[t(769)][t(2057)](this), this[t(1615)] = this.isNullable.bind(this), this[t(2365)] = this.isOptional[t(2057)](this), this[t(906)] = { version: 1, vendor: t(629), validate: (a) => this[t(978)](a) };
  }
  optional() {
    var x = s;
    return we[x(536)](this, this[x(1640)]);
  }
  [s(1387)]() {
    var x = s;
    return je[x(536)](this, this[x(1640)]);
  }
  nullish() {
    var x = s;
    return this[x(1387)]().optional();
  }
  array() {
    var x = s;
    return le[x(536)](this);
  }
  promise() {
    var x = s;
    return wx[x(536)](this, this[x(1640)]);
  }
  or(x) {
    var t = s;
    return vx[t(536)]([this, x], this[t(1640)]);
  }
  and(x) {
    var t = s;
    return gx.create(this, x, this[t(1640)]);
  }
  transform(x) {
    var t = s;
    return new qe({ ...y0(this[t(1640)]), schema: this, typeName: p0[t(2242)], effect: { type: t(129), transform: x } });
  }
  [s(2454)](x) {
    var t = s;
    const a = typeof x === t(834) ? x : () => x;
    return new Sx({ ...y0(this[t(1640)]), innerType: this, defaultValue: a, typeName: p0.ZodDefault });
  }
  brand() {
    var x = s;
    return new js({ typeName: p0.ZodBranded, type: this, ...y0(this[x(1640)]) });
  }
  [s(303)](x) {
    var t = s;
    const a = typeof x === t(834) ? x : () => x;
    return new kx({ ...y0(this[t(1640)]), innerType: this, catchValue: a, typeName: p0.ZodCatch });
  }
  [s(2016)](x) {
    var t = s;
    const a = this[t(1667)];
    return new a({ ...this[t(1640)], description: x });
  }
  pipe(x) {
    var t = s;
    return rr[t(536)](this, x);
  }
  [s(769)]() {
    var x = s;
    return Px[x(536)](this);
  }
  [s(2365)]() {
    var x = s;
    return this.safeParse(void 0)[x(2203)];
  }
  [s(1615)]() {
    var x = s;
    return this[x(1961)](null).success;
  }
}
const Mn = /^c[^\s-]{8,}$/i, Ln = /^[0-9a-z]+$/, $n = /^[0-9A-HJKMNP-TV-Z]{26}$/i, zn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Hn = /^[a-z0-9_-]{21}$/i, Un = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Vn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Wn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Zn = s(1354);
let $x;
const Bn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Kn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Jn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Gn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Qn = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Yn = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Os = s(1855), Xn = new RegExp("^" + Os + "$");
function As(i) {
  var x = s;
  let t = x(603);
  i[x(1824)] ? t = t + x(1973) + i[x(1824)] + "}" : i[x(1824)] == null && (t = t + "(\\.\\d+)?");
  const a = i[x(1824)] ? "+" : "?";
  return x(1295) + t + ")" + a;
}
function _n(i) {
  return new RegExp("^" + As(i) + "$");
}
function ei(i) {
  var x = s;
  let t = Os + "T" + As(i);
  const a = [];
  return a[x(1472)](i[x(946)] ? "Z?" : "Z"), i[x(1871)] && a[x(1472)]("([+-]\\d{2}:?\\d{2})"), t = t + "(" + a[x(697)]("|") + ")", new RegExp("^" + t + "$");
}
function xi(i, x) {
  return !!((x === "v4" || !x) && Bn.test(i) || (x === "v6" || !x) && Jn.test(i));
}
function ti(i, x) {
  var t = s;
  if (!Un[t(2105)](i)) return !1;
  try {
    const [a] = i[t(1464)](".");
    if (!a) return !1;
    const e = a[t(1638)](/-/g, "+")[t(1638)](/_/g, "/").padEnd(a.length + (4 - a[t(1001)] % 4) % 4, "="), r = JSON[t(1674)](atob(e));
    return !(typeof r != "object" || r === null || t(2343) in r && (r == null ? void 0 : r[t(2343)]) !== t(1249) || !r[t(200)] || x && r[t(200)] !== x);
  } catch {
    return !1;
  }
}
function ri(i, x) {
  var t = s;
  return !!((x === "v4" || !x) && Kn[t(2105)](i) || (x === "v6" || !x) && Gn[t(2105)](i));
}
class be extends I0 {
  [s(758)](x) {
    var t = s;
    if (this[t(1640)][t(1593)] && (x[t(1512)] = String(x[t(1512)])), this._getType(x) !== x0[t(389)]) {
      const n = this[t(1261)](x);
      return Q(n, { code: K[t(1763)], expected: x0[t(389)], received: n[t(2094)] }), h0;
    }
    const e = new _0();
    let r;
    for (const n of this[t(1640)].checks)
      if (n[t(999)] === "min") x.data[t(1001)] < n[t(226)] && (r = this[t(1261)](x, r), Q(r, { code: K.too_small, minimum: n.value, type: t(389), inclusive: !0, exact: !1, message: n[t(456)] }), e.dirty());
      else if (n[t(999)] === t(1468)) x[t(1512)].length > n.value && (r = this[t(1261)](x, r), Q(r, { code: K.too_big, maximum: n[t(226)], type: "string", inclusive: !0, exact: !1, message: n[t(456)] }), e.dirty());
      else if (n[t(999)] === "length") {
        const o = x[t(1512)][t(1001)] > n[t(226)], c = x[t(1512)][t(1001)] < n[t(226)];
        (o || c) && (r = this[t(1261)](x, r), o ? Q(r, { code: K[t(1245)], maximum: n.value, type: t(389), inclusive: !0, exact: !0, message: n[t(456)] }) : c && Q(r, { code: K.too_small, minimum: n.value, type: t(389), inclusive: !0, exact: !0, message: n.message }), e[t(1710)]());
      } else if (n[t(999)] === t(2338)) !Wn.test(x[t(1512)]) && (r = this[t(1261)](x, r), Q(r, { validation: "email", code: K[t(462)], message: n.message }), e[t(1710)]());
      else if (n[t(999)] === t(164)) !$x && ($x = new RegExp(Zn, "u")), !$x[t(2105)](x[t(1512)]) && (r = this._getOrReturnCtx(x, r), Q(r, { validation: "emoji", code: K[t(462)], message: n.message }), e[t(1710)]());
      else if (n.kind === t(2060)) !zn.test(x[t(1512)]) && (r = this[t(1261)](x, r), Q(r, { validation: t(2060), code: K[t(462)], message: n[t(456)] }), e[t(1710)]());
      else if (n.kind === t(574)) !Hn[t(2105)](x.data) && (r = this[t(1261)](x, r), Q(r, { validation: "nanoid", code: K[t(462)], message: n[t(456)] }), e[t(1710)]());
      else if (n.kind === t(533)) !Mn[t(2105)](x[t(1512)]) && (r = this[t(1261)](x, r), Q(r, { validation: "cuid", code: K[t(462)], message: n.message }), e[t(1710)]());
      else if (n.kind === "cuid2") !Ln[t(2105)](x[t(1512)]) && (r = this._getOrReturnCtx(x, r), Q(r, { validation: t(1732), code: K[t(462)], message: n[t(456)] }), e.dirty());
      else if (n.kind === t(1691)) !$n[t(2105)](x[t(1512)]) && (r = this[t(1261)](x, r), Q(r, { validation: t(1691), code: K[t(462)], message: n[t(456)] }), e[t(1710)]());
      else if (n[t(999)] === t(1602)) try {
        new URL(x[t(1512)]);
      } catch {
        r = this[t(1261)](x, r), Q(r, { validation: t(1602), code: K[t(462)], message: n[t(456)] }), e[t(1710)]();
      }
      else
        n[t(999)] === "regex" ? (n.regex[t(474)] = 0, !n[t(1516)][t(2105)](x[t(1512)]) && (r = this[t(1261)](x, r), Q(r, { validation: t(1516), code: K.invalid_string, message: n[t(456)] }), e.dirty())) : n[t(999)] === t(613) ? x[t(1512)] = x[t(1512)][t(613)]() : n[t(999)] === t(1605) ? !x[t(1512)][t(1605)](n[t(226)], n[t(1485)]) && (r = this[t(1261)](x, r), Q(r, { code: K[t(462)], validation: { includes: n[t(226)], position: n.position }, message: n[t(456)] }), e[t(1710)]()) : n[t(999)] === t(1158) ? x[t(1512)] = x.data[t(1158)]() : n.kind === "toUpperCase" ? x[t(1512)] = x[t(1512)][t(188)]() : n[t(999)] === t(1287) ? !x.data[t(1287)](n[t(226)]) && (r = this[t(1261)](x, r), Q(r, { code: K[t(462)], validation: { startsWith: n[t(226)] }, message: n.message }), e[t(1710)]()) : n[t(999)] === t(207) ? !x[t(1512)][t(207)](n.value) && (r = this[t(1261)](x, r), Q(r, { code: K[t(462)], validation: { endsWith: n[t(226)] }, message: n[t(456)] }), e.dirty()) : n[t(999)] === t(105) ? !ei(n)[t(2105)](x.data) && (r = this[t(1261)](x, r), Q(r, { code: K[t(462)], validation: t(105), message: n.message }), e.dirty()) : n.kind === t(677) ? !Xn.test(x.data) && (r = this[t(1261)](x, r), Q(r, { code: K.invalid_string, validation: "date", message: n[t(456)] }), e[t(1710)]()) : n[t(999)] === "time" ? !_n(n).test(x[t(1512)]) && (r = this[t(1261)](x, r), Q(r, { code: K[t(462)], validation: t(308), message: n.message }), e[t(1710)]()) : n[t(999)] === "duration" ? !Vn[t(2105)](x[t(1512)]) && (r = this[t(1261)](x, r), Q(r, { validation: t(1471), code: K[t(462)], message: n[t(456)] }), e[t(1710)]()) : n[t(999)] === "ip" ? !xi(x[t(1512)], n[t(1705)]) && (r = this[t(1261)](x, r), Q(r, { validation: "ip", code: K[t(462)], message: n[t(456)] }), e[t(1710)]()) : n[t(999)] === t(2457) ? !ti(x[t(1512)], n[t(200)]) && (r = this[t(1261)](x, r), Q(r, { validation: "jwt", code: K[t(462)], message: n[t(456)] }), e[t(1710)]()) : n[t(999)] === t(2155) ? !ri(x[t(1512)], n[t(1705)]) && (r = this[t(1261)](x, r), Q(r, { validation: t(2155), code: K[t(462)], message: n[t(456)] }), e[t(1710)]()) : n[t(999)] === t(1194) ? !Qn[t(2105)](x[t(1512)]) && (r = this[t(1261)](x, r), Q(r, { validation: "base64", code: K[t(462)], message: n.message }), e.dirty()) : n.kind === t(1668) ? !Yn[t(2105)](x[t(1512)]) && (r = this[t(1261)](x, r), Q(r, { validation: t(1668), code: K.invalid_string, message: n[t(456)] }), e[t(1710)]()) : q0.assertNever(n);
    return { status: e[t(226)], value: x[t(1512)] };
  }
  [s(956)](x, t, a) {
    var e = s;
    return this.refinement((r) => x[e(2105)](r), { validation: t, code: K[e(462)], ...a0[e(2210)](a) });
  }
  [s(932)](x) {
    var t = s;
    return new be({ ...this[t(1640)], checks: [...this[t(1640)][t(2361)], x] });
  }
  [s(2338)](x) {
    var t = s;
    return this[t(932)]({ kind: t(2338), ...a0[t(2210)](x) });
  }
  [s(1602)](x) {
    var t = s;
    return this[t(932)]({ kind: t(1602), ...a0.errToObj(x) });
  }
  [s(164)](x) {
    var t = s;
    return this[t(932)]({ kind: t(164), ...a0.errToObj(x) });
  }
  [s(2060)](x) {
    var t = s;
    return this[t(932)]({ kind: "uuid", ...a0.errToObj(x) });
  }
  [s(574)](x) {
    var t = s;
    return this._addCheck({ kind: t(574), ...a0[t(2210)](x) });
  }
  [s(533)](x) {
    var t = s;
    return this[t(932)]({ kind: t(533), ...a0.errToObj(x) });
  }
  [s(1732)](x) {
    var t = s;
    return this[t(932)]({ kind: t(1732), ...a0[t(2210)](x) });
  }
  [s(1691)](x) {
    var t = s;
    return this[t(932)]({ kind: "ulid", ...a0[t(2210)](x) });
  }
  [s(1194)](x) {
    var t = s;
    return this[t(932)]({ kind: "base64", ...a0[t(2210)](x) });
  }
  [s(1668)](x) {
    var t = s;
    return this[t(932)]({ kind: t(1668), ...a0[t(2210)](x) });
  }
  [s(2457)](x) {
    var t = s;
    return this[t(932)]({ kind: t(2457), ...a0[t(2210)](x) });
  }
  ip(x) {
    var t = s;
    return this[t(932)]({ kind: "ip", ...a0[t(2210)](x) });
  }
  [s(2155)](x) {
    var t = s;
    return this[t(932)]({ kind: t(2155), ...a0.errToObj(x) });
  }
  datetime(x) {
    var t = s;
    return typeof x == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: !1, local: !1, message: x }) : this._addCheck({ kind: t(105), precision: typeof (x == null ? void 0 : x[t(1824)]) === t(2108) ? null : x == null ? void 0 : x.precision, offset: (x == null ? void 0 : x.offset) ?? !1, local: (x == null ? void 0 : x[t(946)]) ?? !1, ...a0[t(2210)](x == null ? void 0 : x[t(456)]) });
  }
  date(x) {
    var t = s;
    return this[t(932)]({ kind: t(677), message: x });
  }
  [s(308)](x) {
    var t = s;
    return typeof x === t(389) ? this[t(932)]({ kind: t(308), precision: null, message: x }) : this[t(932)]({ kind: t(308), precision: typeof (x == null ? void 0 : x[t(1824)]) > "u" ? null : x == null ? void 0 : x.precision, ...a0.errToObj(x == null ? void 0 : x[t(456)]) });
  }
  [s(1471)](x) {
    var t = s;
    return this[t(932)]({ kind: t(1471), ...a0.errToObj(x) });
  }
  [s(1516)](x, t) {
    var a = s;
    return this._addCheck({ kind: a(1516), regex: x, ...a0[a(2210)](t) });
  }
  [s(1605)](x, t) {
    var a = s;
    return this._addCheck({ kind: a(1605), value: x, position: t == null ? void 0 : t[a(1485)], ...a0.errToObj(t == null ? void 0 : t[a(456)]) });
  }
  [s(1287)](x, t) {
    var a = s;
    return this._addCheck({ kind: a(1287), value: x, ...a0[a(2210)](t) });
  }
  [s(207)](x, t) {
    var a = s;
    return this[a(932)]({ kind: a(207), value: x, ...a0[a(2210)](t) });
  }
  [s(1568)](x, t) {
    var a = s;
    return this[a(932)]({ kind: a(1568), value: x, ...a0[a(2210)](t) });
  }
  [s(1468)](x, t) {
    var a = s;
    return this[a(932)]({ kind: a(1468), value: x, ...a0[a(2210)](t) });
  }
  [s(1001)](x, t) {
    var a = s;
    return this[a(932)]({ kind: "length", value: x, ...a0.errToObj(t) });
  }
  nonempty(x) {
    var t = s;
    return this[t(1568)](1, a0[t(2210)](x));
  }
  [s(613)]() {
    var x = s;
    return new be({ ...this[x(1640)], checks: [...this._def[x(2361)], { kind: x(613) }] });
  }
  [s(1158)]() {
    var x = s;
    return new be({ ...this[x(1640)], checks: [...this[x(1640)][x(2361)], { kind: x(1158) }] });
  }
  [s(188)]() {
    var x = s;
    return new be({ ...this[x(1640)], checks: [...this[x(1640)][x(2361)], { kind: "toUpperCase" }] });
  }
  get [s(776)]() {
    var x = s;
    return !!this[x(1640)].checks[x(305)]((t) => t.kind === x(105));
  }
  get isDate() {
    var x = s;
    return !!this[x(1640)].checks[x(305)]((t) => t[x(999)] === x(677));
  }
  get isTime() {
    var x = s;
    return !!this[x(1640)][x(2361)][x(305)]((t) => t[x(999)] === "time");
  }
  get isDuration() {
    var x = s;
    return !!this[x(1640)][x(2361)][x(305)]((t) => t[x(999)] === x(1471));
  }
  get [s(766)]() {
    var x = s;
    return !!this[x(1640)][x(2361)][x(305)]((t) => t.kind === x(2338));
  }
  get [s(630)]() {
    var x = s;
    return !!this._def[x(2361)][x(305)]((t) => t[x(999)] === x(1602));
  }
  get [s(938)]() {
    var x = s;
    return !!this[x(1640)][x(2361)][x(305)]((t) => t[x(999)] === x(164));
  }
  get [s(1848)]() {
    var x = s;
    return !!this._def[x(2361)][x(305)]((t) => t.kind === "uuid");
  }
  get isNANOID() {
    var x = s;
    return !!this[x(1640)][x(2361)][x(305)]((t) => t[x(999)] === x(574));
  }
  get [s(2473)]() {
    var x = s;
    return !!this[x(1640)].checks.find((t) => t.kind === x(533));
  }
  get [s(1535)]() {
    var x = s;
    return !!this._def[x(2361)][x(305)]((t) => t[x(999)] === "cuid2");
  }
  get [s(424)]() {
    var x = s;
    return !!this[x(1640)][x(2361)][x(305)]((t) => t[x(999)] === x(1691));
  }
  get [s(1419)]() {
    var x = s;
    return !!this._def.checks[x(305)]((t) => t[x(999)] === "ip");
  }
  get [s(1135)]() {
    var x = s;
    return !!this[x(1640)][x(2361)].find((t) => t.kind === x(2155));
  }
  get [s(551)]() {
    var x = s;
    return !!this[x(1640)][x(2361)].find((t) => t[x(999)] === x(1194));
  }
  get [s(864)]() {
    var x = s;
    return !!this[x(1640)][x(2361)][x(305)]((t) => t.kind === "base64url");
  }
  get [s(1537)]() {
    var x = s;
    let t = null;
    for (const a of this[x(1640)][x(2361)])
      a[x(999)] === "min" && (t === null || a[x(226)] > t) && (t = a.value);
    return t;
  }
  get [s(520)]() {
    var x = s;
    let t = null;
    for (const a of this[x(1640)].checks)
      a[x(999)] === "max" && (t === null || a[x(226)] < t) && (t = a[x(226)]);
    return t;
  }
}
be[s(536)] = (i) => {
  var x = s;
  return new be({ checks: [], typeName: p0[x(1253)], coerce: (i == null ? void 0 : i[x(1593)]) ?? !1, ...y0(i) });
};
function ai(i, x) {
  var t = s;
  const a = (i[t(2345)]()[t(1464)](".")[1] || "")[t(1001)], e = (x[t(2345)]()[t(1464)](".")[1] || "")[t(1001)], r = a > e ? a : e, n = Number.parseInt(i[t(1460)](r)[t(1638)](".", "")), o = Number[t(1286)](x[t(1460)](r)[t(1638)](".", ""));
  return n % o / 10 ** r;
}
class Ve extends I0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(1568)] = this[x(237)], this[x(1468)] = this[x(2295)], this[x(1149)] = this[x(2074)];
  }
  [s(758)](x) {
    var t = s;
    if (this[t(1640)].coerce && (x[t(1512)] = Number(x[t(1512)])), this._getType(x) !== x0.number) {
      const n = this[t(1261)](x);
      return Q(n, { code: K.invalid_type, expected: x0[t(1829)], received: n[t(2094)] }), h0;
    }
    let e;
    const r = new _0();
    for (const n of this[t(1640)][t(2361)])
      n[t(999)] === t(1563) ? !q0[t(257)](x.data) && (e = this[t(1261)](x, e), Q(e, { code: K[t(1763)], expected: "integer", received: t(212), message: n[t(456)] }), r[t(1710)]()) : n.kind === "min" ? (n.inclusive ? x.data < n[t(226)] : x[t(1512)] <= n[t(226)]) && (e = this[t(1261)](x, e), Q(e, { code: K[t(1757)], minimum: n[t(226)], type: "number", inclusive: n[t(1821)], exact: !1, message: n.message }), r.dirty()) : n[t(999)] === t(1468) ? (n[t(1821)] ? x[t(1512)] > n.value : x[t(1512)] >= n[t(226)]) && (e = this[t(1261)](x, e), Q(e, { code: K[t(1245)], maximum: n[t(226)], type: "number", inclusive: n[t(1821)], exact: !1, message: n.message }), r.dirty()) : n[t(999)] === t(2074) ? ai(x[t(1512)], n[t(226)]) !== 0 && (e = this[t(1261)](x, e), Q(e, { code: K[t(1739)], multipleOf: n[t(226)], message: n[t(456)] }), r[t(1710)]()) : n[t(999)] === "finite" ? !Number[t(1989)](x.data) && (e = this[t(1261)](x, e), Q(e, { code: K[t(245)], message: n[t(456)] }), r.dirty()) : q0[t(715)](n);
    return { status: r.value, value: x[t(1512)] };
  }
  [s(237)](x, t) {
    var a = s;
    return this[a(1170)](a(1568), x, !0, a0.toString(t));
  }
  gt(x, t) {
    var a = s;
    return this[a(1170)](a(1568), x, !1, a0[a(2345)](t));
  }
  [s(2295)](x, t) {
    var a = s;
    return this.setLimit(a(1468), x, !0, a0.toString(t));
  }
  lt(x, t) {
    var a = s;
    return this[a(1170)](a(1468), x, !1, a0[a(2345)](t));
  }
  setLimit(x, t, a, e) {
    var r = s;
    return new Ve({ ...this[r(1640)], checks: [...this[r(1640)].checks, { kind: x, value: t, inclusive: a, message: a0[r(2345)](e) }] });
  }
  [s(932)](x) {
    var t = s;
    return new Ve({ ...this._def, checks: [...this[t(1640)][t(2361)], x] });
  }
  int(x) {
    var t = s;
    return this[t(932)]({ kind: t(1563), message: a0[t(2345)](x) });
  }
  [s(663)](x) {
    var t = s;
    return this._addCheck({ kind: t(1568), value: 0, inclusive: !1, message: a0[t(2345)](x) });
  }
  negative(x) {
    var t = s;
    return this[t(932)]({ kind: t(1468), value: 0, inclusive: !1, message: a0[t(2345)](x) });
  }
  [s(1781)](x) {
    var t = s;
    return this[t(932)]({ kind: t(1468), value: 0, inclusive: !0, message: a0[t(2345)](x) });
  }
  [s(1443)](x) {
    var t = s;
    return this[t(932)]({ kind: "min", value: 0, inclusive: !0, message: a0.toString(x) });
  }
  [s(2074)](x, t) {
    var a = s;
    return this[a(932)]({ kind: a(2074), value: x, message: a0[a(2345)](t) });
  }
  [s(1654)](x) {
    var t = s;
    return this[t(932)]({ kind: "finite", message: a0.toString(x) });
  }
  [s(1610)](x) {
    var t = s;
    return this[t(932)]({ kind: t(1568), inclusive: !0, value: Number[t(2185)], message: a0[t(2345)](x) })[t(932)]({ kind: t(1468), inclusive: !0, value: Number[t(2228)], message: a0.toString(x) });
  }
  get minValue() {
    var x = s;
    let t = null;
    for (const a of this[x(1640)][x(2361)])
      a[x(999)] === "min" && (t === null || a.value > t) && (t = a[x(226)]);
    return t;
  }
  get [s(1925)]() {
    var x = s;
    let t = null;
    for (const a of this[x(1640)][x(2361)])
      a[x(999)] === "max" && (t === null || a[x(226)] < t) && (t = a.value);
    return t;
  }
  get [s(1438)]() {
    var x = s;
    return !!this._def.checks[x(305)]((t) => t[x(999)] === x(1563) || t[x(999)] === x(2074) && q0.isInteger(t[x(226)]));
  }
  get [s(1989)]() {
    var x = s;
    let t = null, a = null;
    for (const e of this[x(1640)][x(2361)]) {
      if (e.kind === x(1654) || e.kind === x(1563) || e[x(999)] === x(2074)) return !0;
      e[x(999)] === x(1568) ? (a === null || e[x(226)] > a) && (a = e[x(226)]) : e[x(999)] === x(1468) && (t === null || e[x(226)] < t) && (t = e.value);
    }
    return Number[x(1989)](a) && Number[x(1989)](t);
  }
}
Ve[s(536)] = (i) => {
  var x = s;
  return new Ve({ checks: [], typeName: p0[x(1536)], coerce: (i == null ? void 0 : i[x(1593)]) || !1, ...y0(i) });
};
class xx extends I0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(1568)] = this[x(237)], this[x(1468)] = this[x(2295)];
  }
  [s(758)](x) {
    var t = s;
    if (this._def.coerce) try {
      x[t(1512)] = BigInt(x[t(1512)]);
    } catch {
      return this[t(1233)](x);
    }
    if (this[t(420)](x) !== x0[t(1561)]) return this[t(1233)](x);
    let e;
    const r = new _0();
    for (const n of this[t(1640)].checks)
      n.kind === t(1568) ? (n[t(1821)] ? x[t(1512)] < n[t(226)] : x[t(1512)] <= n.value) && (e = this[t(1261)](x, e), Q(e, { code: K[t(1757)], type: t(1561), minimum: n[t(226)], inclusive: n.inclusive, message: n[t(456)] }), r[t(1710)]()) : n[t(999)] === "max" ? (n[t(1821)] ? x[t(1512)] > n[t(226)] : x[t(1512)] >= n[t(226)]) && (e = this[t(1261)](x, e), Q(e, { code: K[t(1245)], type: t(1561), maximum: n.value, inclusive: n[t(1821)], message: n.message }), r.dirty()) : n[t(999)] === t(2074) ? x.data % n[t(226)] !== BigInt(0) && (e = this[t(1261)](x, e), Q(e, { code: K[t(1739)], multipleOf: n[t(226)], message: n[t(456)] }), r[t(1710)]()) : q0.assertNever(n);
    return { status: r[t(226)], value: x.data };
  }
  [s(1233)](x) {
    var t = s;
    const a = this._getOrReturnCtx(x);
    return Q(a, { code: K[t(1763)], expected: x0.bigint, received: a[t(2094)] }), h0;
  }
  [s(237)](x, t) {
    var a = s;
    return this[a(1170)](a(1568), x, !0, a0[a(2345)](t));
  }
  gt(x, t) {
    var a = s;
    return this[a(1170)](a(1568), x, !1, a0[a(2345)](t));
  }
  [s(2295)](x, t) {
    var a = s;
    return this[a(1170)](a(1468), x, !0, a0[a(2345)](t));
  }
  lt(x, t) {
    var a = s;
    return this.setLimit(a(1468), x, !1, a0.toString(t));
  }
  [s(1170)](x, t, a, e) {
    var r = s;
    return new xx({ ...this._def, checks: [...this[r(1640)][r(2361)], { kind: x, value: t, inclusive: a, message: a0[r(2345)](e) }] });
  }
  [s(932)](x) {
    var t = s;
    return new xx({ ...this._def, checks: [...this[t(1640)][t(2361)], x] });
  }
  [s(663)](x) {
    var t = s;
    return this._addCheck({ kind: t(1568), value: BigInt(0), inclusive: !1, message: a0[t(2345)](x) });
  }
  [s(415)](x) {
    var t = s;
    return this[t(932)]({ kind: t(1468), value: BigInt(0), inclusive: !1, message: a0[t(2345)](x) });
  }
  [s(1781)](x) {
    var t = s;
    return this._addCheck({ kind: t(1468), value: BigInt(0), inclusive: !0, message: a0.toString(x) });
  }
  [s(1443)](x) {
    var t = s;
    return this[t(932)]({ kind: t(1568), value: BigInt(0), inclusive: !0, message: a0[t(2345)](x) });
  }
  [s(2074)](x, t) {
    var a = s;
    return this[a(932)]({ kind: a(2074), value: x, message: a0[a(2345)](t) });
  }
  get [s(1502)]() {
    var x = s;
    let t = null;
    for (const a of this[x(1640)][x(2361)])
      a[x(999)] === x(1568) && (t === null || a[x(226)] > t) && (t = a[x(226)]);
    return t;
  }
  get [s(1925)]() {
    var x = s;
    let t = null;
    for (const a of this[x(1640)].checks)
      a[x(999)] === x(1468) && (t === null || a[x(226)] < t) && (t = a[x(226)]);
    return t;
  }
}
xx[s(536)] = (i) => {
  var x = s;
  return new xx({ checks: [], typeName: p0[x(1212)], coerce: (i == null ? void 0 : i[x(1593)]) ?? !1, ...y0(i) });
};
class Lt extends I0 {
  _parse(x) {
    var t = s;
    if (this._def.coerce && (x[t(1512)] = !!x[t(1512)]), this[t(420)](x) !== x0.boolean) {
      const e = this[t(1261)](x);
      return Q(e, { code: K[t(1763)], expected: x0[t(325)], received: e[t(2094)] }), h0;
    }
    return te(x[t(1512)]);
  }
}
Lt[s(536)] = (i) => {
  var x = s;
  return new Lt({ typeName: p0.ZodBoolean, coerce: (i == null ? void 0 : i[x(1593)]) || !1, ...y0(i) });
};
class mx extends I0 {
  _parse(x) {
    var t = s;
    if (this[t(1640)].coerce && (x[t(1512)] = new Date(x[t(1512)])), this[t(420)](x) !== x0[t(677)]) {
      const n = this[t(1261)](x);
      return Q(n, { code: K[t(1763)], expected: x0[t(677)], received: n.parsedType }), h0;
    }
    if (Number[t(921)](x[t(1512)][t(1018)]())) {
      const n = this._getOrReturnCtx(x);
      return Q(n, { code: K[t(1928)] }), h0;
    }
    const e = new _0();
    let r;
    for (const n of this._def.checks)
      n[t(999)] === t(1568) ? x.data[t(1018)]() < n[t(226)] && (r = this._getOrReturnCtx(x, r), Q(r, { code: K[t(1757)], message: n[t(456)], inclusive: !0, exact: !1, minimum: n[t(226)], type: t(677) }), e[t(1710)]()) : n.kind === t(1468) ? x[t(1512)].getTime() > n.value && (r = this[t(1261)](x, r), Q(r, { code: K[t(1245)], message: n[t(456)], inclusive: !0, exact: !1, maximum: n.value, type: t(677) }), e.dirty()) : q0[t(715)](n);
    return { status: e[t(226)], value: new Date(x[t(1512)][t(1018)]()) };
  }
  [s(932)](x) {
    var t = s;
    return new mx({ ...this[t(1640)], checks: [...this[t(1640)].checks, x] });
  }
  [s(1568)](x, t) {
    var a = s;
    return this[a(932)]({ kind: "min", value: x[a(1018)](), message: a0[a(2345)](t) });
  }
  [s(1468)](x, t) {
    var a = s;
    return this[a(932)]({ kind: a(1468), value: x.getTime(), message: a0[a(2345)](t) });
  }
  get minDate() {
    var x = s;
    let t = null;
    for (const a of this[x(1640)][x(2361)])
      a[x(999)] === "min" && (t === null || a[x(226)] > t) && (t = a[x(226)]);
    return t != null ? new Date(t) : null;
  }
  get [s(995)]() {
    var x = s;
    let t = null;
    for (const a of this._def[x(2361)])
      a[x(999)] === x(1468) && (t === null || a.value < t) && (t = a[x(226)]);
    return t != null ? new Date(t) : null;
  }
}
mx[s(536)] = (i) => {
  var x = s;
  return new mx({ checks: [], coerce: (i == null ? void 0 : i[x(1593)]) || !1, typeName: p0.ZodDate, ...y0(i) });
};
class Cr extends I0 {
  [s(758)](x) {
    var t = s;
    if (this[t(420)](x) !== x0[t(672)]) {
      const e = this._getOrReturnCtx(x);
      return Q(e, { code: K[t(1763)], expected: x0[t(672)], received: e[t(2094)] }), h0;
    }
    return te(x[t(1512)]);
  }
}
Cr.create = (i) => {
  var x = s;
  return new Cr({ typeName: p0[x(1241)], ...y0(i) });
};
class $t extends I0 {
  [s(758)](x) {
    var t = s;
    if (this[t(420)](x) !== x0[t(2108)]) {
      const e = this[t(1261)](x);
      return Q(e, { code: K[t(1763)], expected: x0[t(2108)], received: e[t(2094)] }), h0;
    }
    return te(x[t(1512)]);
  }
}
$t.create = (i) => {
  var x = s;
  return new $t({ typeName: p0[x(183)], ...y0(i) });
};
class zt extends I0 {
  [s(758)](x) {
    var t = s;
    if (this[t(420)](x) !== x0[t(2348)]) {
      const e = this._getOrReturnCtx(x);
      return Q(e, { code: K[t(1763)], expected: x0[t(2348)], received: e.parsedType }), h0;
    }
    return te(x.data);
  }
}
zt[s(536)] = (i) => {
  var x = s;
  return new zt({ typeName: p0[x(2032)], ...y0(i) });
};
class Ht extends I0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(1833)] = !0;
  }
  [s(758)](x) {
    var t = s;
    return te(x[t(1512)]);
  }
}
Ht[s(536)] = (i) => new Ht({ typeName: p0.ZodAny, ...y0(i) });
class Ut extends I0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(568)] = !0;
  }
  [s(758)](x) {
    var t = s;
    return te(x[t(1512)]);
  }
}
Ut[s(536)] = (i) => {
  var x = s;
  return new Ut({ typeName: p0[x(1965)], ...y0(i) });
};
class Ie extends I0 {
  _parse(x) {
    var t = s;
    const a = this[t(1261)](x);
    return Q(a, { code: K[t(1763)], expected: x0[t(1428)], received: a.parsedType }), h0;
  }
}
Ie[s(536)] = (i) => {
  var x = s;
  return new Ie({ typeName: p0[x(1551)], ...y0(i) });
};
class Vt extends I0 {
  [s(758)](x) {
    var t = s;
    if (this[t(420)](x) !== x0.undefined) {
      const e = this._getOrReturnCtx(x);
      return Q(e, { code: K.invalid_type, expected: x0[t(862)], received: e[t(2094)] }), h0;
    }
    return te(x[t(1512)]);
  }
}
Vt[s(536)] = (i) => {
  var x = s;
  return new Vt({ typeName: p0[x(2091)], ...y0(i) });
};
class le extends I0 {
  [s(758)](x) {
    var t = s;
    const { ctx: a, status: e } = this._processInputParams(x), r = this._def;
    if (a[t(2094)] !== x0[t(791)]) return Q(a, { code: K[t(1763)], expected: x0[t(791)], received: a[t(2094)] }), h0;
    if (r[t(1815)] !== null) {
      const o = a[t(1512)][t(1001)] > r.exactLength.value, c = a.data[t(1001)] < r[t(1815)][t(226)];
      (o || c) && (Q(a, { code: o ? K[t(1245)] : K.too_small, minimum: c ? r.exactLength[t(226)] : void 0, maximum: o ? r[t(1815)].value : void 0, type: t(791), inclusive: !0, exact: !0, message: r[t(1815)][t(456)] }), e[t(1710)]());
    }
    if (r[t(1537)] !== null && a[t(1512)][t(1001)] < r.minLength.value && (Q(a, { code: K[t(1757)], minimum: r[t(1537)][t(226)], type: t(791), inclusive: !0, exact: !1, message: r[t(1537)].message }), e.dirty()), r.maxLength !== null && a[t(1512)][t(1001)] > r[t(520)][t(226)] && (Q(a, { code: K[t(1245)], maximum: r[t(520)][t(226)], type: t(791), inclusive: !0, exact: !1, message: r.maxLength.message }), e[t(1710)]()), a[t(294)][t(1494)]) return Promise[t(1946)]([...a[t(1512)]][t(1825)]((o, c) => {
      var u = t;
      return r[u(399)][u(1807)](new he(a, o, a[u(1048)], c));
    })).then((o) => {
      var c = t;
      return _0[c(952)](e, o);
    });
    const n = [...a[t(1512)]][t(1825)]((o, c) => {
      var u = t;
      return r[u(399)][u(652)](new he(a, o, a[u(1048)], c));
    });
    return _0[t(952)](e, n);
  }
  get [s(2466)]() {
    var x = s;
    return this[x(1640)].type;
  }
  [s(1568)](x, t) {
    var a = s;
    return new le({ ...this[a(1640)], minLength: { value: x, message: a0.toString(t) } });
  }
  [s(1468)](x, t) {
    var a = s;
    return new le({ ...this[a(1640)], maxLength: { value: x, message: a0[a(2345)](t) } });
  }
  [s(1001)](x, t) {
    return new le({ ...this._def, exactLength: { value: x, message: a0.toString(t) } });
  }
  [s(205)](x) {
    var t = s;
    return this[t(1568)](1, x);
  }
}
le.create = (i, x) => new le({ type: i, minLength: null, maxLength: null, exactLength: null, typeName: p0.ZodArray, ...y0(x) });
function He(i) {
  var x = s;
  if (i instanceof K0) {
    const t = {};
    for (const a in i[x(469)]) {
      const e = i[x(469)][a];
      t[a] = we[x(536)](He(e));
    }
    return new K0({ ...i._def, shape: () => t });
  } else
    return i instanceof le ? new le({ ...i[x(1640)], type: He(i[x(2466)]) }) : i instanceof we ? we.create(He(i[x(364)]())) : i instanceof je ? je.create(He(i[x(364)]())) : i instanceof Ae ? Ae[x(536)](i[x(464)][x(1825)]((t) => He(t))) : i;
}
class K0 extends I0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(982)] = null, this[x(488)] = this[x(377)], this[x(1375)] = this.extend;
  }
  _getCached() {
    var x = s;
    if (this._cached !== null) return this._cached;
    const t = this[x(1640)][x(469)](), a = q0[x(374)](t);
    return this[x(982)] = { shape: t, keys: a }, this[x(982)];
  }
  [s(758)](x) {
    var t = s;
    if (this[t(420)](x) !== x0[t(865)]) {
      const d = this._getOrReturnCtx(x);
      return Q(d, { code: K[t(1763)], expected: x0[t(865)], received: d[t(2094)] }), h0;
    }
    const { status: e, ctx: r } = this[t(141)](x), { shape: n, keys: o } = this[t(253)](), c = [];
    if (!(this[t(1640)][t(1284)] instanceof Ie && this[t(1640)].unknownKeys === t(194))) for (const d in r[t(1512)])
      !o.includes(d) && c[t(1472)](d);
    const u = [];
    for (const d of o) {
      const f = n[d], l = r[t(1512)][d];
      u.push({ key: { status: t(1467), value: d }, value: f._parse(new he(r, l, r[t(1048)], d)), alwaysSet: d in r[t(1512)] });
    }
    if (this[t(1640)][t(1284)] instanceof Ie) {
      const d = this._def.unknownKeys;
      if (d === t(377)) for (const f of c)
        u[t(1472)]({ key: { status: t(1467), value: f }, value: { status: t(1467), value: r[t(1512)][f] } });
      else if (d === t(1414)) c[t(1001)] > 0 && (Q(r, { code: K[t(1238)], keys: c }), e[t(1710)]());
      else if (d !== t(194)) throw new Error(t(1765));
    } else {
      const d = this._def[t(1284)];
      for (const f of c) {
        const l = r.data[f];
        u.push({ key: { status: t(1467), value: f }, value: d[t(758)](new he(r, l, r[t(1048)], f)), alwaysSet: f in r[t(1512)] });
      }
    }
    return r[t(294)][t(1494)] ? Promise[t(695)]().then(async () => {
      var d = t;
      const f = [];
      for (const l of u) {
        const v = await l[d(477)], h = await l[d(226)];
        f.push({ key: v, value: h, alwaysSet: l[d(1370)] });
      }
      return f;
    }).then((d) => {
      var f = t;
      return _0[f(1895)](e, d);
    }) : _0[t(1895)](e, u);
  }
  get [s(469)]() {
    var x = s;
    return this._def[x(469)]();
  }
  [s(1414)](x) {
    var t = s;
    return a0[t(2210)], new K0({ ...this[t(1640)], unknownKeys: "strict", ...x !== void 0 ? { errorMap: (a, e) => {
      var o, c;
      var r = t;
      const n = ((c = (o = this._def)[r(701)]) == null ? void 0 : c.call(o, a, e)[r(456)]) ?? e[r(1870)];
      return a[r(1993)] === r(1238) ? { message: a0[r(2210)](x).message ?? n } : { message: n };
    } } : {} });
  }
  [s(194)]() {
    var x = s;
    return new K0({ ...this._def, unknownKeys: x(194) });
  }
  [s(377)]() {
    var x = s;
    return new K0({ ...this._def, unknownKeys: x(377) });
  }
  [s(1224)](x) {
    var t = s;
    return new K0({ ...this[t(1640)], shape: () => ({ ...this._def[t(469)](), ...x }) });
  }
  merge(x) {
    var t = s;
    return new K0({ unknownKeys: x[t(1640)][t(643)], catchall: x[t(1640)][t(1284)], shape: () => ({ ...this[t(1640)][t(469)](), ...x[t(1640)].shape() }), typeName: p0.ZodObject });
  }
  [s(271)](x, t) {
    return this.augment({ [x]: t });
  }
  [s(1284)](x) {
    var t = s;
    return new K0({ ...this[t(1640)], catchall: x });
  }
  [s(1885)](x) {
    var t = s;
    const a = {};
    for (const e of q0[t(374)](x))
      x[e] && this[t(469)][e] && (a[e] = this[t(469)][e]);
    return new K0({ ...this[t(1640)], shape: () => a });
  }
  [s(608)](x) {
    var t = s;
    const a = {};
    for (const e of q0[t(374)](this[t(469)]))
      !x[e] && (a[e] = this[t(469)][e]);
    return new K0({ ...this[t(1640)], shape: () => a });
  }
  [s(1052)]() {
    return He(this);
  }
  [s(1913)](x) {
    var t = s;
    const a = {};
    for (const e of q0[t(374)](this.shape)) {
      const r = this[t(469)][e];
      x && !x[e] ? a[e] = r : a[e] = r[t(1169)]();
    }
    return new K0({ ...this[t(1640)], shape: () => a });
  }
  [s(740)](x) {
    var t = s;
    const a = {};
    for (const e of q0.objectKeys(this[t(469)]))
      if (x && !x[e]) a[e] = this[t(469)][e];
      else {
        let n = this[t(469)][e];
        for (; n instanceof we; )
          n = n[t(1640)][t(167)];
        a[e] = n;
      }
    return new K0({ ...this[t(1640)], shape: () => a });
  }
  [s(1364)]() {
    var x = s;
    return Ds(q0.objectKeys(this[x(469)]));
  }
}
K0.create = (i, x) => {
  var t = s;
  return new K0({ shape: () => i, unknownKeys: t(194), catchall: Ie[t(536)](), typeName: p0[t(2326)], ...y0(x) });
}, K0[s(1444)] = (i, x) => {
  var t = s;
  return new K0({ shape: () => i, unknownKeys: "strict", catchall: Ie.create(), typeName: p0[t(2326)], ...y0(x) });
}, K0.lazycreate = (i, x) => {
  var t = s;
  return new K0({ shape: i, unknownKeys: t(194), catchall: Ie[t(536)](), typeName: p0.ZodObject, ...y0(x) });
};
class vx extends I0 {
  [s(758)](x) {
    var t = s;
    const { ctx: a } = this._processInputParams(x), e = this[t(1640)][t(146)];
    function r(n) {
      var o = t;
      for (const u of n)
        if (u[o(942)][o(1171)] === o(1467)) return u.result;
      for (const u of n)
        if (u.result[o(1171)] === o(1710)) return a.common[o(309)].push(...u[o(2475)].common[o(309)]), u[o(942)];
      const c = n[o(1825)]((u) => new Se(u.ctx[o(294)][o(309)]));
      return Q(a, { code: K[o(1391)], unionErrors: c }), h0;
    }
    if (a[t(294)][t(1494)]) return Promise[t(1946)](e.map(async (n) => {
      var o = t;
      const c = { ...a, common: { ...a[o(294)], issues: [] }, parent: null };
      return { result: await n[o(1807)]({ data: a[o(1512)], path: a[o(1048)], parent: c }), ctx: c };
    }))[t(1934)](r);
    {
      let n;
      const o = [];
      for (const u of e) {
        const d = { ...a, common: { ...a.common, issues: [] }, parent: null }, f = u[t(652)]({ data: a[t(1512)], path: a.path, parent: d });
        if (f.status === t(1467)) return f;
        f[t(1171)] === t(1710) && !n && (n = { result: f, ctx: d }), d[t(294)].issues[t(1001)] && o[t(1472)](d[t(294)][t(309)]);
      }
      if (n) return a.common[t(309)].push(...n.ctx[t(294)][t(309)]), n[t(942)];
      const c = o.map((u) => new Se(u));
      return Q(a, { code: K.invalid_union, unionErrors: c }), h0;
    }
  }
  get [s(146)]() {
    var x = s;
    return this._def[x(146)];
  }
}
vx[s(536)] = (i, x) => {
  var t = s;
  return new vx({ options: i, typeName: p0[t(1622)], ...y0(x) });
};
const ge = (i) => {
  var x = s;
  return i instanceof Zt ? ge(i[x(870)]) : i instanceof qe ? ge(i.innerType()) : i instanceof bx ? [i[x(226)]] : i instanceof De ? i.options : i instanceof Bt ? q0[x(1595)](i[x(2470)]) : i instanceof Sx ? ge(i[x(1640)][x(167)]) : i instanceof $t ? [void 0] : i instanceof zt ? [null] : i instanceof we ? [void 0, ...ge(i.unwrap())] : i instanceof je ? [null, ...ge(i[x(364)]())] : i instanceof js || i instanceof Px ? ge(i[x(364)]()) : i instanceof kx ? ge(i[x(1640)].innerType) : [];
};
class tr extends I0 {
  [s(758)](x) {
    var t = s;
    const { ctx: a } = this[t(141)](x);
    if (a.parsedType !== x0[t(865)]) return Q(a, { code: K.invalid_type, expected: x0.object, received: a[t(2094)] }), h0;
    const e = this[t(1601)], r = a[t(1512)][e], n = this[t(2308)][t(1195)](r);
    return n ? a[t(294)].async ? n._parseAsync({ data: a.data, path: a[t(1048)], parent: a }) : n._parseSync({ data: a.data, path: a[t(1048)], parent: a }) : (Q(a, { code: K[t(2374)], options: Array[t(903)](this[t(2308)][t(2411)]()), path: [e] }), h0);
  }
  get [s(1601)]() {
    var x = s;
    return this[x(1640)][x(1601)];
  }
  get [s(146)]() {
    var x = s;
    return this[x(1640)].options;
  }
  get [s(2308)]() {
    var x = s;
    return this[x(1640)][x(2308)];
  }
  static [s(536)](x, t, a) {
    var e = s;
    const r = /* @__PURE__ */ new Map();
    for (const n of t) {
      const o = ge(n[e(469)][x]);
      if (!o[e(1001)]) throw new Error("A discriminator value for key `" + x + e(646));
      for (const c of o) {
        if (r[e(1489)](c)) throw new Error("Discriminator property " + String(x) + " has duplicate value " + String(c));
        r[e(765)](c, n);
      }
    }
    return new tr({ typeName: p0[e(1543)], discriminator: x, options: t, optionsMap: r, ...y0(a) });
  }
}
function Wt(i, x) {
  var t = s;
  const a = Ee(i), e = Ee(x);
  if (i === x) return { valid: !0, data: i };
  if (a === x0.object && e === x0[t(865)]) {
    const r = q0[t(374)](x), n = q0[t(374)](i).filter((c) => r.indexOf(c) !== -1), o = { ...i, ...x };
    for (const c of n) {
      const u = Wt(i[c], x[c]);
      if (!u.valid) return { valid: !1 };
      o[c] = u.data;
    }
    return { valid: !0, data: o };
  } else if (a === x0[t(791)] && e === x0[t(791)]) {
    if (i[t(1001)] !== x[t(1001)]) return { valid: !1 };
    const r = [];
    for (let n = 0; n < i[t(1001)]; n++) {
      const o = i[n], c = x[n], u = Wt(o, c);
      if (!u[t(1467)]) return { valid: !1 };
      r[t(1472)](u[t(1512)]);
    }
    return { valid: !0, data: r };
  } else return a === x0.date && e === x0[t(677)] && +i == +x ? { valid: !0, data: i } : { valid: !1 };
}
class gx extends I0 {
  _parse(x) {
    var t = s;
    const { status: a, ctx: e } = this[t(141)](x), r = (n, o) => {
      var c = t;
      if (Er(n) || Er(o)) return h0;
      const u = Wt(n.value, o[c(226)]);
      return u.valid ? ((Ir(n) || Ir(o)) && a[c(1710)](), { status: a[c(226)], value: u[c(1512)] }) : (Q(e, { code: K[c(512)] }), h0);
    };
    return e[t(294)][t(1494)] ? Promise[t(1946)]([this[t(1640)][t(2362)]._parseAsync({ data: e.data, path: e[t(1048)], parent: e }), this[t(1640)][t(2464)][t(1807)]({ data: e.data, path: e[t(1048)], parent: e })]).then(([n, o]) => r(n, o)) : r(this[t(1640)][t(2362)][t(652)]({ data: e[t(1512)], path: e.path, parent: e }), this[t(1640)].right._parseSync({ data: e[t(1512)], path: e[t(1048)], parent: e }));
  }
}
gx[s(536)] = (i, x, t) => new gx({ left: i, right: x, typeName: p0.ZodIntersection, ...y0(t) });
class Ae extends I0 {
  [s(758)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(141)](x);
    if (e[t(2094)] !== x0[t(791)]) return Q(e, { code: K[t(1763)], expected: x0[t(791)], received: e[t(2094)] }), h0;
    if (e[t(1512)][t(1001)] < this[t(1640)].items.length) return Q(e, { code: K[t(1757)], minimum: this[t(1640)][t(464)][t(1001)], inclusive: !0, exact: !1, type: t(791) }), h0;
    !this[t(1640)][t(2467)] && e[t(1512)][t(1001)] > this[t(1640)][t(464)][t(1001)] && (Q(e, { code: K[t(1245)], maximum: this[t(1640)][t(464)][t(1001)], inclusive: !0, exact: !1, type: t(791) }), a.dirty());
    const n = [...e.data][t(1825)]((o, c) => {
      var u = t;
      const d = this[u(1640)].items[c] || this[u(1640)].rest;
      return d ? d[u(758)](new he(e, o, e[u(1048)], c)) : null;
    })[t(830)]((o) => !!o);
    return e[t(294)].async ? Promise[t(1946)](n)[t(1934)]((o) => {
      var c = t;
      return _0[c(952)](a, o);
    }) : _0.mergeArray(a, n);
  }
  get [s(464)]() {
    var x = s;
    return this[x(1640)][x(464)];
  }
  rest(x) {
    var t = s;
    return new Ae({ ...this[t(1640)], rest: x });
  }
}
Ae[s(536)] = (i, x) => {
  var t = s;
  if (!Array[t(2305)](i)) throw new Error(t(563));
  return new Ae({ items: i, typeName: p0[t(667)], rest: null, ...y0(x) });
};
class yx extends I0 {
  get keySchema() {
    var x = s;
    return this[x(1640)].keyType;
  }
  get [s(431)]() {
    var x = s;
    return this[x(1640)][x(1225)];
  }
  [s(758)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(141)](x);
    if (e[t(2094)] !== x0[t(865)]) return Q(e, { code: K[t(1763)], expected: x0[t(865)], received: e.parsedType }), h0;
    const r = [], n = this[t(1640)].keyType, o = this[t(1640)][t(1225)];
    for (const c in e[t(1512)])
      r[t(1472)]({ key: n[t(758)](new he(e, c, e.path, c)), value: o[t(758)](new he(e, e[t(1512)][c], e.path, c)), alwaysSet: c in e.data });
    return e.common[t(1494)] ? _0[t(1762)](a, r) : _0.mergeObjectSync(a, r);
  }
  get [s(2466)]() {
    var x = s;
    return this._def[x(1225)];
  }
  static [s(536)](x, t, a) {
    var e = s;
    return t instanceof I0 ? new yx({ keyType: x, valueType: t, typeName: p0[e(2378)], ...y0(a) }) : new yx({ keyType: be[e(536)](), valueType: x, typeName: p0[e(2378)], ...y0(t) });
  }
}
class Fr extends I0 {
  get [s(2419)]() {
    var x = s;
    return this._def[x(1036)];
  }
  get valueSchema() {
    var x = s;
    return this[x(1640)][x(1225)];
  }
  [s(758)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(141)](x);
    if (e.parsedType !== x0[t(1825)]) return Q(e, { code: K[t(1763)], expected: x0[t(1825)], received: e[t(2094)] }), h0;
    const r = this[t(1640)][t(1036)], n = this[t(1640)].valueType, o = [...e[t(1512)].entries()].map(([c, u], d) => {
      var f = t;
      return { key: r[f(758)](new he(e, c, e.path, [d, f(477)])), value: n[f(758)](new he(e, u, e.path, [d, f(226)])) };
    });
    if (e[t(294)][t(1494)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise.resolve()[t(1934)](async () => {
        var u = t;
        for (const d of o) {
          const f = await d[u(477)], l = await d.value;
          if (f[u(1171)] === u(2423) || l[u(1171)] === u(2423)) return h0;
          (f[u(1171)] === u(1710) || l[u(1171)] === u(1710)) && a.dirty(), c.set(f.value, l.value);
        }
        return { status: a[u(226)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of o) {
        const d = u[t(477)], f = u[t(226)];
        if (d.status === t(2423) || f[t(1171)] === t(2423)) return h0;
        (d[t(1171)] === t(1710) || f[t(1171)] === "dirty") && a[t(1710)](), c[t(765)](d[t(226)], f[t(226)]);
      }
      return { status: a.value, value: c };
    }
  }
}
Fr.create = (i, x, t) => {
  var a = s;
  return new Fr({ valueType: x, keyType: i, typeName: p0[a(2160)], ...y0(t) });
};
class tx extends I0 {
  [s(758)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(141)](x);
    if (e[t(2094)] !== x0.set) return Q(e, { code: K[t(1763)], expected: x0[t(765)], received: e.parsedType }), h0;
    const r = this._def;
    r[t(1960)] !== null && e[t(1512)][t(1159)] < r[t(1960)][t(226)] && (Q(e, { code: K.too_small, minimum: r[t(1960)].value, type: "set", inclusive: !0, exact: !1, message: r[t(1960)].message }), a[t(1710)]()), r[t(970)] !== null && e.data.size > r[t(970)].value && (Q(e, { code: K[t(1245)], maximum: r.maxSize[t(226)], type: t(765), inclusive: !0, exact: !1, message: r[t(970)][t(456)] }), a[t(1710)]());
    const n = this[t(1640)].valueType;
    function o(u) {
      var d = t;
      const f = /* @__PURE__ */ new Set();
      for (const l of u) {
        if (l[d(1171)] === d(2423)) return h0;
        l[d(1171)] === d(1710) && a[d(1710)](), f[d(2121)](l[d(226)]);
      }
      return { status: a[d(226)], value: f };
    }
    const c = [...e[t(1512)][t(1513)]()].map((u, d) => n[t(758)](new he(e, u, e[t(1048)], d)));
    return e[t(294)].async ? Promise.all(c)[t(1934)]((u) => o(u)) : o(c);
  }
  [s(1568)](x, t) {
    var a = s;
    return new tx({ ...this[a(1640)], minSize: { value: x, message: a0.toString(t) } });
  }
  max(x, t) {
    var a = s;
    return new tx({ ...this._def, maxSize: { value: x, message: a0[a(2345)](t) } });
  }
  size(x, t) {
    return this.min(x, t).max(x, t);
  }
  [s(205)](x) {
    return this.min(1, x);
  }
}
tx[s(536)] = (i, x) => {
  var t = s;
  return new tx({ valueType: i, minSize: null, maxSize: null, typeName: p0[t(2190)], ...y0(x) });
};
class Zt extends I0 {
  get [s(870)]() {
    var x = s;
    return this[x(1640)][x(941)]();
  }
  [s(758)](x) {
    var t = s;
    const { ctx: a } = this[t(141)](x);
    return this[t(1640)][t(941)]()[t(758)]({ data: a.data, path: a.path, parent: a });
  }
}
Zt[s(536)] = (i, x) => {
  var t = s;
  return new Zt({ getter: i, typeName: p0[t(2407)], ...y0(x) });
};
class bx extends I0 {
  [s(758)](x) {
    var t = s;
    if (x[t(1512)] !== this._def[t(226)]) {
      const a = this[t(1261)](x);
      return Q(a, { received: a[t(1512)], code: K[t(770)], expected: this[t(1640)][t(226)] }), h0;
    }
    return { status: t(1467), value: x[t(1512)] };
  }
  get value() {
    var x = s;
    return this[x(1640)].value;
  }
}
bx[s(536)] = (i, x) => {
  var t = s;
  return new bx({ value: i, typeName: p0[t(1433)], ...y0(x) });
};
function Ds(i, x) {
  return new De({ values: i, typeName: p0.ZodEnum, ...y0(x) });
}
class De extends I0 {
  [s(758)](x) {
    var t = s;
    if (typeof x[t(1512)] !== t(389)) {
      const a = this._getOrReturnCtx(x), e = this[t(1640)].values;
      return Q(a, { expected: q0.joinValues(e), received: a[t(2094)], code: K[t(1763)] }), h0;
    }
    if (!this[t(2188)] && (this[t(2188)] = new Set(this[t(1640)][t(1513)])), !this[t(2188)].has(x[t(1512)])) {
      const a = this[t(1261)](x), e = this[t(1640)][t(1513)];
      return Q(a, { received: a[t(1512)], code: K[t(2270)], options: e }), h0;
    }
    return te(x.data);
  }
  get options() {
    var x = s;
    return this[x(1640)][x(1513)];
  }
  get enum() {
    var x = s;
    const t = {};
    for (const a of this[x(1640)][x(1513)])
      t[a] = a;
    return t;
  }
  get [s(216)]() {
    var x = s;
    const t = {};
    for (const a of this[x(1640)][x(1513)])
      t[a] = a;
    return t;
  }
  get Enum() {
    var x = s;
    const t = {};
    for (const a of this[x(1640)][x(1513)])
      t[a] = a;
    return t;
  }
  [s(637)](x, t = this[s(1640)]) {
    var a = s;
    return De.create(x, { ...this[a(1640)], ...t });
  }
  [s(158)](x, t = this[s(1640)]) {
    var a = s;
    return De[a(536)](this.options[a(830)]((e) => !x[a(1605)](e)), { ...this[a(1640)], ...t });
  }
}
De[s(536)] = Ds;
class Bt extends I0 {
  [s(758)](x) {
    var t = s;
    const a = q0[t(1795)](this[t(1640)].values), e = this._getOrReturnCtx(x);
    if (e[t(2094)] !== x0.string && e[t(2094)] !== x0.number) {
      const r = q0.objectValues(a);
      return Q(e, { expected: q0.joinValues(r), received: e.parsedType, code: K[t(1763)] }), h0;
    }
    if (!this[t(2188)] && (this._cache = new Set(q0.getValidEnumValues(this[t(1640)][t(1513)]))), !this._cache.has(x[t(1512)])) {
      const r = q0[t(1595)](a);
      return Q(e, { received: e[t(1512)], code: K.invalid_enum_value, options: r }), h0;
    }
    return te(x.data);
  }
  get enum() {
    var x = s;
    return this[x(1640)][x(1513)];
  }
}
Bt[s(536)] = (i, x) => {
  var t = s;
  return new Bt({ values: i, typeName: p0[t(1315)], ...y0(x) });
};
class wx extends I0 {
  [s(364)]() {
    var x = s;
    return this[x(1640)][x(399)];
  }
  _parse(x) {
    var t = s;
    const { ctx: a } = this[t(141)](x);
    if (a.parsedType !== x0[t(1260)] && a[t(294)][t(1494)] === !1) return Q(a, { code: K[t(1763)], expected: x0[t(1260)], received: a[t(2094)] }), h0;
    const e = a[t(2094)] === x0.promise ? a.data : Promise[t(695)](a[t(1512)]);
    return te(e[t(1934)]((r) => {
      var n = t;
      return this._def[n(399)].parseAsync(r, { path: a[n(1048)], errorMap: a.common[n(940)] });
    }));
  }
}
wx.create = (i, x) => {
  var t = s;
  return new wx({ type: i, typeName: p0[t(1152)], ...y0(x) });
};
class qe extends I0 {
  [s(167)]() {
    var x = s;
    return this[x(1640)].schema;
  }
  [s(2156)]() {
    var x = s;
    return this[x(1640)][x(870)]._def[x(1028)] === p0[x(2242)] ? this[x(1640)].schema.sourceType() : this[x(1640)].schema;
  }
  [s(758)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(141)](x), r = this._def[t(1703)] || null, n = { addIssue: (o) => {
      var c = t;
      Q(e, o), o[c(2219)] ? a[c(1202)]() : a[c(1710)]();
    }, get path() {
      return e.path;
    } };
    if (n[t(2220)] = n[t(2220)][t(2057)](n), r[t(399)] === t(550)) {
      const o = r[t(129)](e.data, n);
      if (e[t(294)][t(1494)]) return Promise.resolve(o)[t(1934)](async (c) => {
        var u = t;
        if (a.value === "aborted") return h0;
        const d = await this._def[u(870)][u(1807)]({ data: c, path: e.path, parent: e });
        return d[u(1171)] === "aborted" ? h0 : d[u(1171)] === u(1710) ? Qe(d.value) : a[u(226)] === u(1710) ? Qe(d[u(226)]) : d;
      });
      {
        if (a[t(226)] === t(2423)) return h0;
        const c = this[t(1640)][t(870)][t(652)]({ data: o, path: e[t(1048)], parent: e });
        return c[t(1171)] === t(2423) ? h0 : c[t(1171)] === t(1710) || a[t(226)] === t(1710) ? Qe(c[t(226)]) : c;
      }
    }
    if (r[t(399)] === t(1906)) {
      const o = (c) => {
        var u = t;
        const d = r.refinement(c, n);
        if (e[u(294)][u(1494)]) return Promise.resolve(d);
        if (d instanceof Promise) throw new Error(u(868));
        return c;
      };
      if (e[t(294)][t(1494)] === !1) {
        const c = this._def.schema._parseSync({ data: e[t(1512)], path: e.path, parent: e });
        return c.status === t(2423) ? h0 : (c[t(1171)] === t(1710) && a[t(1710)](), o(c[t(226)]), { status: a[t(226)], value: c.value });
      } else return this[t(1640)][t(870)][t(1807)]({ data: e[t(1512)], path: e.path, parent: e })[t(1934)]((c) => {
        var u = t;
        return c[u(1171)] === u(2423) ? h0 : (c.status === u(1710) && a[u(1710)](), o(c[u(226)])[u(1934)](() => {
          var d = u;
          return { status: a.value, value: c[d(226)] };
        }));
      });
    }
    if (r[t(399)] === t(129))
      if (e[t(294)].async === !1) {
        const o = this[t(1640)].schema[t(652)]({ data: e[t(1512)], path: e[t(1048)], parent: e });
        if (!Ue(o)) return h0;
        const c = r.transform(o[t(226)], n);
        if (c instanceof Promise) throw new Error(t(2024));
        return { status: a[t(226)], value: c };
      } else return this[t(1640)].schema[t(1807)]({ data: e[t(1512)], path: e[t(1048)], parent: e })[t(1934)]((o) => {
        var c = t;
        return Ue(o) ? Promise[c(695)](r[c(129)](o[c(226)], n))[c(1934)]((u) => ({ status: a[c(226)], value: u })) : h0;
      });
    q0[t(715)](r);
  }
}
qe[s(536)] = (i, x, t) => {
  var a = s;
  return new qe({ schema: i, typeName: p0[a(2242)], effect: x, ...y0(t) });
}, qe[s(343)] = (i, x, t) => new qe({ schema: x, effect: { type: "preprocess", transform: i }, typeName: p0.ZodEffects, ...y0(t) });
class we extends I0 {
  [s(758)](x) {
    var t = s;
    return this[t(420)](x) === x0[t(2108)] ? te(void 0) : this[t(1640)][t(167)]._parse(x);
  }
  [s(364)]() {
    var x = s;
    return this._def[x(167)];
  }
}
we[s(536)] = (i, x) => new we({ innerType: i, typeName: p0.ZodOptional, ...y0(x) });
class je extends I0 {
  _parse(x) {
    var t = s;
    return this[t(420)](x) === x0[t(2348)] ? te(null) : this[t(1640)].innerType._parse(x);
  }
  unwrap() {
    var x = s;
    return this._def[x(167)];
  }
}
je[s(536)] = (i, x) => {
  var t = s;
  return new je({ innerType: i, typeName: p0[t(856)], ...y0(x) });
};
class Sx extends I0 {
  [s(758)](x) {
    var t = s;
    const { ctx: a } = this[t(141)](x);
    let e = a[t(1512)];
    return a[t(2094)] === x0.undefined && (e = this._def.defaultValue()), this._def[t(167)][t(758)]({ data: e, path: a[t(1048)], parent: a });
  }
  [s(493)]() {
    var x = s;
    return this._def[x(167)];
  }
}
Sx.create = (i, x) => {
  var t = s;
  return new Sx({ innerType: i, typeName: p0[t(1884)], defaultValue: typeof x[t(2454)] === t(834) ? x[t(2454)] : () => x[t(2454)], ...y0(x) });
};
class kx extends I0 {
  [s(758)](x) {
    var t = s;
    const { ctx: a } = this[t(141)](x), e = { ...a, common: { ...a[t(294)], issues: [] } }, r = this[t(1640)][t(167)][t(758)]({ data: e.data, path: e[t(1048)], parent: { ...e } });
    return px(r) ? r[t(1934)]((n) => {
      var o = t;
      return { status: o(1467), value: n[o(1171)] === o(1467) ? n[o(226)] : this[o(1640)][o(1199)]({ get error() {
        return new Se(e.common.issues);
      }, input: e[o(1512)] }) };
    }) : { status: "valid", value: r.status === t(1467) ? r[t(226)] : this[t(1640)][t(1199)]({ get error() {
      var n = t;
      return new Se(e[n(294)].issues);
    }, input: e[t(1512)] }) };
  }
  [s(2392)]() {
    var x = s;
    return this[x(1640)][x(167)];
  }
}
kx[s(536)] = (i, x) => {
  var t = s;
  return new kx({ innerType: i, typeName: p0.ZodCatch, catchValue: typeof x[t(303)] === t(834) ? x[t(303)] : () => x[t(303)], ...y0(x) });
};
class Nr extends I0 {
  _parse(x) {
    var t = s;
    if (this[t(420)](x) !== x0.nan) {
      const e = this[t(1261)](x);
      return Q(e, { code: K[t(1763)], expected: x0[t(2369)], received: e.parsedType }), h0;
    }
    return { status: "valid", value: x[t(1512)] };
  }
}
Nr[s(536)] = (i) => {
  var x = s;
  return new Nr({ typeName: p0[x(1901)], ...y0(i) });
};
class js extends I0 {
  [s(758)](x) {
    var t = s;
    const { ctx: a } = this[t(141)](x), e = a.data;
    return this[t(1640)][t(399)][t(758)]({ data: e, path: a.path, parent: a });
  }
  [s(364)]() {
    var x = s;
    return this._def[x(399)];
  }
}
class rr extends I0 {
  _parse(x) {
    var t = s;
    const { status: a, ctx: e } = this[t(141)](x);
    if (e.common.async)
      return (async () => {
        var n = t;
        const o = await this[n(1640)].in[n(1807)]({ data: e[n(1512)], path: e[n(1048)], parent: e });
        return o.status === n(2423) ? h0 : o[n(1171)] === n(1710) ? (a[n(1710)](), Qe(o[n(226)])) : this._def[n(341)]._parseAsync({ data: o[n(226)], path: e[n(1048)], parent: e });
      })();
    {
      const r = this[t(1640)].in[t(652)]({ data: e.data, path: e.path, parent: e });
      return r[t(1171)] === t(2423) ? h0 : r[t(1171)] === t(1710) ? (a[t(1710)](), { status: t(1710), value: r[t(226)] }) : this[t(1640)][t(341)][t(652)]({ data: r[t(226)], path: e.path, parent: e });
    }
  }
  static [s(536)](x, t) {
    var a = s;
    return new rr({ in: x, out: t, typeName: p0[a(1594)] });
  }
}
class Px extends I0 {
  _parse(x) {
    var t = s;
    const a = this[t(1640)][t(167)][t(758)](x), e = (r) => {
      var n = t;
      return Ue(r) && (r.value = Object[n(1104)](r[n(226)])), r;
    };
    return px(a) ? a[t(1934)]((r) => e(r)) : e(a);
  }
  unwrap() {
    var x = s;
    return this._def[x(167)];
  }
}
Px[s(536)] = (i, x) => {
  var t = s;
  return new Px({ innerType: i, typeName: p0[t(2395)], ...y0(x) });
};
var p0;
(function(i) {
  var x = s;
  i[x(1253)] = x(1253), i.ZodNumber = x(1536), i[x(1901)] = x(1901), i[x(1212)] = x(1212), i[x(661)] = "ZodBoolean", i[x(1173)] = "ZodDate", i[x(1241)] = x(1241), i[x(183)] = "ZodUndefined", i.ZodNull = x(2032), i[x(924)] = x(924), i[x(1965)] = x(1965), i[x(1551)] = "ZodNever", i[x(2091)] = x(2091), i[x(994)] = "ZodArray", i[x(2326)] = "ZodObject", i[x(1622)] = x(1622), i[x(1543)] = x(1543), i.ZodIntersection = x(435), i[x(667)] = x(667), i[x(2378)] = "ZodRecord", i[x(2160)] = x(2160), i[x(2190)] = x(2190), i.ZodFunction = x(2213), i[x(2407)] = x(2407), i.ZodLiteral = x(1433), i[x(265)] = x(265), i.ZodEffects = x(2242), i[x(1315)] = x(1315), i[x(2273)] = x(2273), i[x(856)] = x(856), i.ZodDefault = "ZodDefault", i[x(370)] = x(370), i[x(1152)] = x(1152), i.ZodBranded = x(1388), i[x(1594)] = x(1594), i.ZodReadonly = x(2395);
})(p0 || (p0 = {}));
const S = be[s(536)], r0 = Ve[s(536)], _ = Lt[s(536)], N0 = Ht[s(536)], sx = Ut[s(536)];
Ie[s(536)];
const zx = Vt[s(536)], R0 = le[s(536)], k = K0[s(536)], J0 = vx[s(536)], Ms = tr[s(536)];
gx.create, Ae[s(536)];
const U0 = yx[s(536)], t0 = bx.create, F0 = De[s(536)];
wx[s(536)];
const Z = we[s(536)];
je[s(536)];
var es, xs;
class si {
  constructor(x, t) {
    m0(this, xs);
    m0(this, es);
    var a = s;
    this[a(927)] = x, this.nodeId = t;
  }
  get [(xs = s(927), es = s(1604), s(1639))]() {
    var x = s;
    const t = this.graphInstance[x(1207)](this[x(1604)]);
    if (!t) throw new Error("No store found for node " + this[x(1604)]);
    return t;
  }
  get [s(1096)]() {
    var x = s;
    const t = this[x(927)][x(542)]()[x(1078)](this[x(1604)]);
    if (!t) throw new Error(x(2412) + this.nodeId);
    return new Proxy({}, { get: (e, r) => {
      var n = x;
      if (typeof r !== n(389)) return;
      const o = t.actions[r], c = r.startsWith(n(2461));
      if (!o && !c) throw new Error(n(1886) + r + n(2140) + this[n(1604)]);
      return async (u, d) => {
        var f = n;
        const l = this[f(1927)]();
        if (!l) throw new Error(f(2330) + this[f(1604)]);
        const { transport: v, path: h } = l, p = this[f(927)][f(1521)]();
        if (!(o != null && o[f(1532)])) {
          const w = N0();
          let P;
          if (h.length === 2) P = await v[f(2355)]({ method: f(850), params: { action: r, data: u, sourceNodeId: p } }, w);
          else try {
            P = await v.request({ method: f(850), params: { action: f(1366), data: { targetNodeId: this[f(1604)], targetAction: r, targetData: u, forwardPath: h[f(2349)](1) }, sourceNodeId: p } }, w);
          } catch (F) {
            throw console[f(1106)](f(1598) + r + ":", F), console[f(1106)]({ targetNodeId: this[f(1604)], targetAction: r, targetData: u, forwardPath: h[f(2349)](1) }), F;
          }
          return P;
        }
        let g;
        return h[f(1001)] === 2 ? g = v[f(615)]({ action: r, data: u, sourceNodeId: p }, o.responseSchema, d) : g = v[f(615)]({ action: f(1366), data: { targetNodeId: this[f(1604)], targetAction: r, targetData: u, forwardPath: h[f(2349)](1) }, sourceNodeId: p }, o[f(632)], d), g;
      };
    } });
  }
  [s(1927)]() {
    var x = s;
    return this[x(927)].getTransportToNode(this[x(1604)]);
  }
}
var ts, rs, as;
class Ls {
  constructor(x) {
    m0(this, as);
    m0(this, rs);
    m0(this, ts);
    var t = s;
    this[t(927)] = x, this[t(1741)] = x[t(1741)], this[t(131)] = x.broadcastManager;
  }
  [(as = s(927), rs = s(1741), ts = s(131), s(1785))]({ store: x, storeName: t, onStateUpdate: a, requestInitialState: e }) {
    var r = s;
    this[r(131)].registerHandler(r(869) + t, (n) => {
      var o = r;
      try {
        n.sourceNodeId !== this[o(927)][o(1521)]() && a(n[o(2446)]);
      } catch (c) {
        console[o(1106)](o(1076) + t + ":", c);
      }
    });
  }
  initializeProducer({ store: x, storeName: t, sendStateUpdate: a, onInitialStateRequested: e }) {
    var r = s;
    const n = this[r(927)][r(1521)](), o = async (d, f = !1) => {
      var l = r;
      if (this[l(1085)]()) try {
        await this[l(131)][l(1473)](l(869) + t, { storeName: t, sourceNodeId: n, stateUpdate: d, isInitialState: f });
      } catch (h) {
        console.error(l(1432) + t + ":", h);
      }
    }, c = x.subscribe((d) => {
      o(d, !1);
    });
    e(() => {
      var d = r;
      o(x[d(1237)](), !0);
    });
    const u = "__internal_requestInitialState_" + t;
    return this[r(1741)][r(1544)](u, async () => {
      var d = r;
      const f = x[d(1237)]();
      return await o(f, !0), { success: !0 };
    }), this[r(131)][r(458)](r(324), async (d) => {
      var f = r;
      try {
        (d[f(250)] === n || d[f(1312)] === n) && await o(x[f(1237)](), !0);
      } catch {
      }
    }), () => {
      var f;
      var d = r;
      c(), (f = this[d(1741)][d(616)]) == null || f.delete(u);
    };
  }
  [s(1085)]() {
    var t;
    var x = s;
    try {
      const a = this[x(927)].connectionManager, e = a && a[x(2427)]() > 0, r = ((t = this[x(131)][x(2386)]) == null ? void 0 : t[x(1159)]) > 0;
      return e || r;
    } catch {
      return !!this[x(131)];
    }
  }
  async [s(1203)](x, t) {
    var a = s;
    const e = this.graphInstance[a(1521)]();
    if (this.isTransportReady()) try {
      await this[a(131)][a(1473)]("store:update:" + t, { storeName: t, sourceNodeId: e, stateUpdate: x[a(1237)](), isInitialState: !0 });
    } catch {
    }
  }
}
function ni({ graphInstance: i, store: x, name: t }) {
  const a = new Ls(i), e = (n) => {
    var o = B;
    const c = x[o(1237)](), u = { ...c, ...n };
    x.setState(u);
  }, r = async () => {
    var n = B;
    const o = n(255) + t;
    try {
      const c = i[n(1078)](t);
      c && c[n(1096)] && c[n(1096)][o] && await c[n(1096)][o]();
    } catch (c) {
      console[n(1348)](n(647) + t + ":", c);
    }
  };
  a.initializeConsumer({ store: x, storeName: t, onStateUpdate: e, requestInitialState: r });
}
function ii({ graphInstance: i, store: x, name: t }) {
  var a = s;
  const e = new Ls(i), r = async (o) => {
  }, n = (o) => {
  };
  return e[a(1410)]({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: n });
}
var ss, ns;
class oi {
  constructor(x) {
    m0(this, "broadcastHandlers", /* @__PURE__ */ new Map());
    m0(this, ns, /* @__PURE__ */ new Map());
    m0(this, ss, /* @__PURE__ */ new Set());
    m0(this, "currentNodeId");
    var t = s;
    this[t(1495)] = x;
  }
  createGlobalDispatcherForType(x) {
    return (t) => {
      var a = B;
      if (t && t.__origin === this[a(1495)]) return;
      const e = this.broadcastHandlers.get(x);
      if (e) {
        const { __origin: r, forwarded: n, ...o } = t || {};
        for (const c of e)
          try {
            c(o);
          } catch (u) {
            console[a(1106)](a(1697) + x + ":", u);
          }
      }
      !t[a(1904)] && this[a(1725)](x, t);
    };
  }
  async [(ns = s(298), ss = s(1695), s(1725))](x, t) {
    var a = s;
    try {
      const e = { ...t, forwarded: !0 }, r = [...Array[a(903)](this[a(298)][a(1513)]()), ...Array[a(903)](this.mountedTransports)], n = r[a(1825)]((o) => {
        var c = a;
        return o[c(398)]({ method: c(2204), params: { messageType: x, message: e } })[c(303)]((u) => {
          var d = c;
          console.error(d(1054) + x + ":", u);
        });
      });
      await Promise[a(1946)](n);
    } catch (e) {
      console.error(a(687), e);
    }
  }
  [s(458)](x, t) {
    var a = s;
    !this[a(1083)][a(1489)](x) && this.broadcastHandlers.set(x, /* @__PURE__ */ new Set()), this[a(1083)].get(x)[a(2121)](t);
  }
  [s(675)](x) {
    var t = s;
    this[t(1330)](x);
  }
  [s(1330)](x) {
    var t = s;
    const a = k({ method: t0(t(2204)), params: k({ messageType: S(), message: N0() }) });
    x[t(700)](a, async (e) => {
      var r = t;
      const n = e.params[r(893)];
      this.createGlobalDispatcherForType(n)(e.params.message);
    });
  }
  [s(2248)](x, t) {
    var a = s;
    this[a(298)][a(765)](x, t), this[a(675)](t);
  }
  removeMiddleware(x) {
    var t = s;
    this[t(298)][t(2456)](x);
  }
  async [s(1473)](x, t) {
    var a = s;
    const e = [...Array[a(903)](this.transports[a(1513)]()), ...Array[a(903)](this[a(1695)])], r = e[a(1825)]((n) => {
      var o = a;
      return n[o(398)]({ method: "sdppp/broadcast", params: { messageType: x, message: t } });
    });
    await Promise.all(r);
  }
  [s(1753)](x) {
    var t = s;
    this[t(1695)][t(2121)](x), this[t(675)](x);
  }
  [s(321)]() {
    return Array.from(this.broadcastHandlers.keys());
  }
  clear() {
    var x = s;
    this.broadcastHandlers[x(1332)](), this[x(298)].clear(), this[x(1695)][x(1332)]();
  }
}
var is, os, cs, us;
class ci {
  constructor(x, t, a) {
    m0(this, us, /* @__PURE__ */ new Map());
    m0(this, cs);
    m0(this, os);
    m0(this, is);
    var e = s;
    this[e(154)] = x, this[e(1495)] = t, this[e(2112)] = a;
  }
  implementAction(x, t) {
    var a = s;
    const e = this[a(154)][a(1078)](this[a(1495)]);
    if (!e) throw new Error(a(2412) + this.currentNodeId);
    const r = e[a(1096)][x];
    if (!r) throw new Error(a(1886) + String(x) + a(2140) + this[a(1495)]);
    this[a(1447)](x, t, r), this[a(616)].set(x, t);
  }
  [(us = s(616), cs = s(154), os = s(1495), is = s(2112), s(1447))](x, t, a) {
    var e = s;
    a[e(1532)];
  }
  [s(1544)](x, t) {
    var a = s;
    this.actionHandlers[a(765)](x, t);
  }
  mountTo(x) {
    var t = s;
    for (const [a, e] of this[t(616)]) {
      const r = this[t(154)][t(1078)](this[t(1495)]), n = r == null ? void 0 : r.actions[a];
      if (a[t(1287)](t(2461)) ? !1 : (n == null ? void 0 : n[t(1532)]) === !0) {
        const u = k({ action: t0(a) });
        x.registerStreamRequestorHandler(u, async function* (d, f, l) {
          var v = t;
          const h = d[v(1512)] || d, p = e(h, f, l);
          if (p && typeof p == "object" && Symbol[v(1712)] in p) for await (const g of p)
            yield g === void 0 ? {} : g;
          else {
            const g = await p;
            yield g === void 0 ? {} : g;
          }
        });
      }
    }
    this[t(640)](x), this.registerDirectRequestHandlerGeneric(x);
  }
  [s(640)](x) {
    var t = s;
    const a = k({ action: t0("__proxy_forward") }), e = this;
    x[t(229)](a, async function* (r, n, o) {
      var c = t;
      const u = r[c(1512)] || r, { targetNodeId: d, targetAction: f, targetData: l, forwardPath: v } = u;
      if (!v || v[c(1001)] === 0) throw new Error(c(1155));
      const h = v[0], p = v.slice(1);
      if (p[c(1001)] === 0 && h === e[c(1495)]) {
        const g = e.actionHandlers[c(1195)](f);
        if (!g) throw new Error(c(1886) + f + " not found on node " + e[c(1495)]);
        const w = g(l, n, o);
        if (w && typeof w == "object" && Symbol.asyncIterator in w) for await (const P of w)
          yield P === void 0 ? {} : P;
        else {
          const P = await w;
          yield P === void 0 ? {} : P;
        }
        return;
      }
      if (h === e.currentNodeId && p[c(1001)] > 0) {
        const g = p[0], w = e[c(2112)](g);
        if (w) {
          const P = await w.streamRequest({ action: "__proxy_forward", data: { targetNodeId: d, targetAction: f, targetData: l, forwardPath: p } }, k({}), o);
          for await (const F of P)
            yield F === void 0 ? {} : F;
          return;
        }
        throw new Error(c(2375) + g + c(1805));
      }
      throw new Error(c(2181) + e[c(1495)] + c(1632) + v);
    });
  }
  [s(518)]() {
    var x = s;
    return Array[x(903)](this[x(616)][x(2411)]());
  }
  [s(2097)](x) {
    var t = s;
    return this.actionHandlers[t(1489)](x);
  }
  [s(1599)](x) {
    var t = s;
    return this[t(616)][t(1195)](x);
  }
  clear() {
    var x = s;
    this[x(616)][x(1332)]();
  }
  registerDirectRequestHandler(x, t, a) {
  }
  registerDirectRequestHandlerGeneric(x) {
    var t = s;
    const a = k({ method: t0(t(850)), params: k({ action: S(), data: N0().optional() }) }), e = this;
    x[t(190)](a, async (r, n) => {
      var o = t;
      const { action: c, data: u } = r[o(1063)];
      if (c === o(1366)) return await e[o(1782)](u, n);
      const d = e[o(616)][o(1195)](c);
      if (!d) throw new Error(o(1886) + c + o(296) + e[o(1495)]);
      const f = d(u, n), l = await f;
      return l === void 0 ? {} : l;
    });
  }
  async [s(1782)](x, t) {
    var a = s;
    const { targetNodeId: e, targetAction: r, targetData: n, forwardPath: o } = x;
    if (!o || o[a(1001)] === 0) throw new Error(a(1155));
    const c = o[0], u = o[a(2349)](1);
    if (u[a(1001)] === 0 && c === this[a(1495)]) {
      const d = this[a(616)][a(1195)](r);
      if (!d) throw new Error(a(1886) + r + a(296) + this[a(1495)]);
      const f = d(n, t), l = await f;
      return l === void 0 ? {} : l;
    }
    if (c === this[a(1495)] && u[a(1001)] > 0) {
      const d = u[0], f = this.getTransport(d);
      if (f) return await f[a(2355)]({ method: a(850), params: { action: a(1366), data: { targetNodeId: e, targetAction: r, targetData: n, forwardPath: u } } }, N0());
      throw new Error(a(2375) + d + a(1805));
    }
    throw new Error("Invalid proxy forwarding: current node " + this[a(1495)] + a(1632) + o);
  }
}
var ds, fs;
class ui {
  constructor(x, t) {
    m0(this, "definition");
    m0(this, fs);
    m0(this, ds, /* @__PURE__ */ new Set());
    this.definition = x, this.currentNodeId = t;
  }
  [(fs = s(1495), ds = s(2391), s(425))](x) {
    var t = s;
    this.connectedNodes[t(2121)](x);
  }
  [s(1477)](x) {
    var t = s;
    this[t(2391)][t(2456)](x);
  }
  isConnected(x) {
    var t = s;
    return this[t(2391)][t(1489)](x);
  }
  findPath(x, t) {
    var a = s;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), r = [{ nodeId: x, path: [x] }];
    for (; r[a(1001)] > 0; ) {
      const { nodeId: n, path: o } = r[a(2142)]();
      if (e[a(1489)](n)) continue;
      e[a(2121)](n);
      const c = this[a(154)][a(405)](n);
      for (const u of c) {
        if (u === t) return [...o, u];
        !e.has(u) && r.push({ nodeId: u, path: [...o, u] });
      }
    }
  }
  [s(761)]() {
    var x = s;
    return Array[x(903)](this.connectedNodes);
  }
  [s(2427)]() {
    var x = s;
    return this[x(2391)][x(1159)];
  }
  [s(1073)]() {
    var x = s;
    const t = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), e = [this[x(1495)]];
    for (a[x(2121)](this[x(1495)]); e[x(1001)] > 0; ) {
      const r = e[x(2142)](), n = this[x(154)][x(405)](r);
      for (const o of n)
        !a.has(o) && (a[x(2121)](o), (this[x(2391)][x(1489)](o) || this.canReachThroughConnectedNodes(o, a)) && (t[x(2121)](o), e[x(1472)](o)));
    }
    return Array[x(903)](t);
  }
  [s(997)](x, t) {
    var a = s;
    const e = this.findPath(this[a(1495)], x);
    if (!e || e[a(1001)] <= 1) return !1;
    for (let r = 1; r < e[a(1001)] - 1; r++)
      if (!this[a(2391)][a(1489)](e[r])) return !1;
    return !0;
  }
  [s(1332)]() {
    var x = s;
    this[x(2391)][x(1332)]();
  }
}
var ls, hs, ps, ms;
class di {
  constructor(x, t) {
    m0(this, ms);
    m0(this, "currentNodeId");
    m0(this, "nodeStores", /* @__PURE__ */ new Map());
    m0(this, "nodeProxies", /* @__PURE__ */ new Map());
    m0(this, "broadcastManager");
    m0(this, ps);
    m0(this, hs);
    m0(this, ls, /* @__PURE__ */ new Map());
    var a = s;
    this[a(154)] = x, this[a(1495)] = t, this[a(1200)](), this[a(131)] = new oi(t), this[a(1741)] = new ci(x, t, (e) => this[a(149)](e)), this[a(1987)] = new ui(x, t), this.setupGraphStoreSync();
  }
  [(ms = s(154), ps = s(1741), hs = s(1987), ls = s(807), s(1200))]() {
    var x = s;
    for (const t of this.definition[x(1634)]()) {
      const a = this[x(154)][x(1078)](t);
      if (a && a.store) {
        const e = this[x(1240)](a[x(1639)]), r = On(() => e);
        this[x(2018)].set(t, r);
      }
    }
  }
  [s(1240)](x) {
    var t = s;
    if (!x) return {};
    try {
      return x[t(1674)]({});
    } catch {
      return this.manuallyExtractDefaults(x);
    }
  }
  manuallyExtractDefaults(x) {
    var t = s;
    if (!x || !x.def) return {};
    if (x[t(277)][t(399)] === t(2454)) {
      const a = x[t(277)][t(2082)];
      return typeof a === t(834) ? a() : a;
    }
    if (x[t(277)][t(399)] === t(865)) {
      const a = {};
      let e;
      try {
        e = x.def[t(469)];
      } catch {
        return {};
      }
      if (e) for (const [r, n] of Object[t(899)](e)) {
        const o = this[t(572)](n);
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
        return x[t(1674)](void 0);
      } catch {
        return this[t(2398)](x);
      }
  }
  async [s(1166)](x, t) {
    var a = s;
    if (!this.definition[a(699)](this[a(1495)], x)) throw new Error("No edge defined from " + this[a(1495)] + a(1802) + x);
    if (this[a(807)][a(1489)](x)) throw new Error(a(1461) + x);
    try {
      this[a(807)][a(765)](x, t), this[a(1987)][a(425)](x), this[a(2230)](x, t), await this[a(2236)](x), await this[a(2177)](x);
    } catch (e) {
      throw this[a(963)](x), e;
    }
  }
  [s(819)](x) {
    var t = s;
    this[t(963)](x);
  }
  async [s(2236)](x) {
    var t = s;
    await new Promise((a) => setTimeout(a, 100));
    for (const [a, e] of this[t(2018)])
      if (a === this[t(1495)]) try {
        await this.broadcastManager[t(1473)](t(869) + a, { storeName: a, sourceNodeId: this[t(1495)], stateUpdate: e[t(1237)](), isInitialState: !0 });
      } catch {
      }
    try {
      await this[t(131)][t(1473)]("__connection_established", { fromNode: this[t(1495)], toNode: x });
    } catch {
    }
  }
  async requestInitialStateForNode(x) {
    var t = s;
    try {
      const a = this[t(1987)][t(1073)]();
      for (const e of a)
        try {
          const r = "__internal_requestInitialState_" + e, n = this[t(1078)](e);
          if (n && n[t(1096)] && n.actions[r]) {
            const o = n.actions[r]({});
            await Promise[t(289)]([o, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (r) {
          console.log(t(647) + e + ":", r);
        }
    } catch (a) {
      console[t(524)](t(236) + x + ":", a);
    }
  }
  [s(963)](x) {
    var t = s;
    const a = this[t(807)][t(1195)](x);
    this[t(807)][t(2456)](x), this.connectionManager[t(1477)](x), this.broadcastManager.removeMiddleware(x), a && a[t(314)]();
  }
  [s(2230)](x, t) {
    var a = s;
    if (!this[a(2018)][a(1195)](this[a(1495)])) throw new Error(a(2428) + this.currentNodeId);
    this.actionManager[a(1753)](t), this.broadcastManager[a(2248)](x, t);
  }
  [s(887)]() {
    var x = s;
    for (const [t, a] of this[x(2018)])
      t === this[x(1495)] ? ii({ graphInstance: this, store: a, name: t }) : ni({ graphInstance: this, store: a, name: t });
  }
  getNode(x) {
    var t = s;
    if (!this[t(251)][t(1489)](x)) {
      const a = new si(this, x);
      this[t(251)][t(765)](x, a);
    }
    return this.nodeProxies.get(x);
  }
  [s(149)](x) {
    var t = s;
    return this.nodeTransports[t(1195)](x);
  }
  [s(1953)](x) {
    var t = s;
    const a = this[t(807)].get(x);
    if (a) return { transport: a, path: [this.currentNodeId, x] };
    const e = this.findPathInternal(this[t(1495)], x);
    if (e && e[t(1001)] > 1) {
      const r = e[1], n = this[t(807)][t(1195)](r);
      if (n) return { transport: n, path: e };
    }
  }
  [s(1207)](x) {
    var t = s;
    return this[t(2018)][t(1195)](x);
  }
  get [s(1639)]() {
    var x = s;
    const t = this.nodeStores[x(1195)](this.currentNodeId);
    if (!t) throw new Error(x(1735) + this.currentNodeId);
    return t;
  }
  get actions() {
    var x = s;
    const t = this[x(154)][x(1078)](this.currentNodeId);
    if (!t) throw new Error(x(322) + this.currentNodeId);
    return new Proxy({}, { get: (e, r) => {
      var n = x;
      if (typeof r !== n(389)) return;
      const o = t[n(1096)][r];
      if (!o) throw new Error("Action " + r + n(1271) + this[n(1495)]);
      return (c, u) => {
        var d = n;
        const f = this.actionManager.getHandler(r);
        if (!f) throw new Error(d(2253) + r + d(2134) + this[d(1495)]);
        const l = { nodeId: this.currentNodeId };
        if (o[d(1532)] === !0) {
          const v = f(c, l, u);
          return v && typeof v === d(865) && Symbol.asyncIterator in v ? async function* () {
            for await (const h of v)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await v;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          var v = d;
          const h = f(c, l, u);
          if (h && typeof h === v(865) && Symbol[v(1712)] in h) {
            const p = h[Symbol[v(1712)]](), g = await p[v(2078)]();
            return g[v(226)] === void 0 ? {} : g[v(226)];
          } else {
            const p = await h;
            return p === void 0 ? {} : p;
          }
        })();
      };
    } });
  }
  [s(542)]() {
    var x = s;
    return this[x(154)];
  }
  [s(1521)]() {
    var x = s;
    return this[x(1495)];
  }
  [s(1412)](x) {
    var t = s;
    return this[t(1953)](x);
  }
  [s(2399)](x, t) {
    var a = s;
    this[a(1741)][a(2399)](x, t);
  }
  [s(1816)]() {
    var x = s;
    const t = Array[x(903)](this[x(807)][x(2411)]());
    for (const a of t)
      this[x(963)](a);
    this[x(131)][x(1332)](), this[x(1741)].clear(), this[x(1987)].clear();
  }
  [s(873)](x, t) {
    var a = s;
    return this[a(1987)][a(923)](x, t);
  }
  findPath(x, t) {
    return this.findPathInternal(x, t);
  }
  async [s(1473)](x, t) {
    var a = s;
    const e = { ...t, __origin: this[a(1495)] };
    return this[a(131)].broadcast(x, e);
  }
  [s(293)](x, t) {
    var a = s;
    this[a(131)][a(458)](x, t);
  }
}
function fi(i) {
  const x = new Tn(i);
  return { joinAs(t) {
    var a = B;
    if (!x[a(1078)](t)) throw new Error("Node " + String(t) + a(1567));
    return new di(x, t);
  }, getDefinition() {
    return i;
  }, getNodeIds() {
    var t = B;
    return x[t(1634)]();
  }, getNeighbors(t) {
    var a = B;
    return x[a(405)](t);
  }, hasEdge(t, a) {
    var e = B;
    return x[e(699)](t, a);
  }, hasPath(t, a) {
    return x.hasPath(t, a);
  }, findPath(t, a) {
    return x.findPath(t, a);
  } };
}
const qr = { INTERCEPTOR_ERROR: s(347) };
var vs, gs;
class Tr extends (gs = Error, vs = s(1206), gs) {
  constructor(t, a, e, r) {
    var n = s;
    super(e);
    m0(this, "type");
    m0(this, "method");
    m0(this, vs);
    this[n(712)] = n(1644), this[n(399)] = t, this[n(302)] = a, this[n(1206)] = r;
  }
}
var ys, bs, ws, Ss, ks, Ps, Es, Is, Rs, Cs;
class li {
  constructor(x, t = {}) {
    m0(this, Cs);
    m0(this, Rs, null);
    m0(this, Is);
    m0(this, Es, /* @__PURE__ */ new Map());
    m0(this, Ps, /* @__PURE__ */ new Map());
    m0(this, ks, /* @__PURE__ */ new Map());
    m0(this, Ss, /* @__PURE__ */ new Map());
    m0(this, ws, []);
    m0(this, "closeHandlers", []);
    m0(this, bs, []);
    m0(this, ys, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    this.protocol = x, this.options = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async [(Cs = s(2152), Rs = s(1822), Is = s(146), Es = s(808), Ps = s(2328), ks = s(1515), Ss = s(774), ws = s(1454), bs = s(2249), ys = s(521), s(1166))](x) {
    var t = s;
    this.realTransport = x, x[t(1618)] = (a) => {
      var e = t;
      this[e(1684)](a);
    }, x[t(2122)] = () => {
      var a = t;
      this[a(1283)][a(1353)]((e) => e());
    }, x.onerror = (a) => {
      var e = t;
      this.errorHandlers[e(1353)]((r) => r(a));
    }, await this[t(2152)][t(1166)](this);
  }
  async [s(1684)](x) {
    var t = s;
    this.log(t(1111), "Incoming message:", x);
    try {
      if (this[t(2281)](x) && await this[t(2320)](x) || this[t(2113)](x) && await this[t(1554)](x))
        return;
      this[t(1454)][t(1353)]((a) => a(x));
    } catch (a) {
      this.stats[t(2244)]++, this[t(524)](t(1106), t(1108), a), this.messageHandlers[t(1353)]((e) => e(x));
    }
  }
  async [s(2320)](x) {
    var t = s;
    const a = this.requestHandlers[t(1195)](x[t(302)]);
    if (!a) return !1;
    try {
      this[t(521)][t(1740)]++;
      const e = await a(x, {});
      return this.realTransport && "id" in x && await this[t(1822)][t(1888)]({ jsonrpc: "2.0", id: x.id, result: e }), !0;
    } catch (e) {
      return this.stats[t(2244)]++, this[t(1822)] && "id" in x && await this.realTransport.send({ jsonrpc: t(2304), id: x.id, error: { code: -32603, message: "Request handler failed: " + JSON[t(1581)](x[t(1063)]) + " " + e[t(456)] } }), !0;
    }
  }
  async [s(1554)](x) {
    var t = s;
    const a = this[t(2328)][t(1195)](x[t(302)]);
    if (!a) return !1;
    try {
      return this.stats[t(1373)]++, await a(x), !0;
    } catch (e) {
      return this[t(521)][t(2244)]++, this[t(524)](t(1106), t(1061) + x.method + ":", e), !0;
    }
  }
  async [s(1888)](x) {
    var t = s;
    this[t(524)]("debug", t(2372), x);
    try {
      if (this[t(2281)](x)) {
        const a = await this[t(1179)](x);
        if (a[t(2203)]) {
          if (a[t(942)] === null) return;
          a[t(942)] && (x = { ...a[t(942)], jsonrpc: t(2304) }, this[t(521)][t(209)]++);
        } else if (this.options[t(506)]) this[t(524)]("warn", t(373) + x[t(302)] + ":", a[t(1106)]);
        else throw a[t(1106)];
      }
      if (this[t(2113)](x)) {
        const a = await this.executeOutgoingNotificationInterceptor(x);
        if (a[t(2203)]) {
          if (a.result === null) return;
          a[t(942)] && (x = { ...a[t(942)], jsonrpc: t(2304) }, this[t(521)][t(478)]++);
        } else if (this.options[t(506)]) this[t(524)](t(1348), t(690) + x[t(302)] + ":", a[t(1106)]);
        else throw a[t(1106)];
      }
      this[t(1822)] && await this[t(1822)].send(x);
    } catch (a) {
      throw this[t(521)][t(2244)]++, a;
    }
  }
  async [s(1216)]() {
    var x = s;
    this[x(1822)] && await this.realTransport[x(1216)]();
  }
  async [s(618)]() {
    var x = s;
    this[x(1822)] && await this[x(1822)][x(618)]();
  }
  set [s(1618)](x) {
    var t = s;
    this[t(1454)] = [x];
  }
  set [s(2122)](x) {
    var t = s;
    this[t(1283)] = [x];
  }
  set onerror(x) {
    this.errorHandlers = [x];
  }
  async [s(1179)](x) {
    var t = s;
    const a = this.outgoingRequestInterceptors[t(1195)](x[t(302)]);
    if (!a) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(360)](a(x), this[t(146)][t(662)]) };
    } catch (e) {
      return this[t(521)][t(2244)]++, { success: !1, error: new Tr(qr.INTERCEPTOR_ERROR, x.method, t(917) + e.message, e) };
    }
  }
  async [s(491)](x) {
    var t = s;
    const a = this[t(774)].get(x[t(302)]);
    if (!a) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(360)](a(x), this[t(146)][t(662)]) };
    } catch (e) {
      return this[t(521)][t(2244)]++, { success: !1, error: new Tr(qr.INTERCEPTOR_ERROR, x[t(302)], t(442) + e[t(456)], e) };
    }
  }
  async [s(2355)](x, t) {
    var a = s;
    return await this.protocol[a(2355)](x, t, { timeout: 36e5 });
  }
  async [s(398)](x) {
    var t = s;
    return await this[t(2152)][t(398)](x);
  }
  [s(190)](x, t) {
    var a = s;
    const e = x.shape[a(302)][a(226)];
    this[a(808)][a(765)](e, t);
  }
  [s(700)](x, t) {
    var a = s;
    const e = x[a(469)][a(302)][a(226)];
    this[a(2328)][a(765)](e, t);
  }
  setOutgoingRequestInterceptor(x, t) {
    var a = s;
    const e = x[a(469)][a(302)][a(226)];
    this[a(1515)][a(765)](e, t);
  }
  setOutgoingNotificationInterceptor(x, t) {
    var a = s;
    const e = x[a(469)].method.value;
    this[a(774)][a(765)](e, t);
  }
  unsetRequestHandler(x) {
    var t = s;
    this.requestHandlers[t(2456)](x);
  }
  [s(2234)](x) {
    var t = s;
    this[t(2328)][t(2456)](x);
  }
  [s(722)](x) {
    var t = s;
    this[t(1515)].delete(x);
  }
  [s(1837)](x) {
    var t = s;
    this[t(774)][t(2456)](x);
  }
  [s(147)](x) {
    var t = s;
    return this[t(808)][t(1489)](x);
  }
  hasNotificationHandler(x) {
    var t = s;
    return this[t(2328)][t(1489)](x);
  }
  [s(1556)](x) {
    var t = s;
    return this.outgoingRequestInterceptors[t(1489)](x);
  }
  [s(311)](x) {
    var t = s;
    return this[t(774)].has(x);
  }
  getStats() {
    var x = s;
    return { ...this[x(521)] };
  }
  resetStats() {
    var x = s;
    this[x(521)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [s(2038)]() {
    return this.protocol;
  }
  [s(314)]() {
    var x = s;
    this[x(808)].clear(), this[x(2328)][x(1332)](), this[x(1515)][x(1332)](), this.outgoingNotificationInterceptors.clear();
  }
  [s(2281)](x) {
    var t = s;
    return x.jsonrpc === t(2304) && t(302) in x && "id" in x;
  }
  [s(2113)](x) {
    var t = s;
    return x.jsonrpc === "2.0" && t(302) in x && !("id" in x);
  }
  async [s(360)](x, t) {
    const a = new Promise((e, r) => {
      var n = B;
      setTimeout(() => r(new Error(n(517))), t);
    });
    return await Promise.race([x, a]);
  }
  [s(524)](x, t, ...a) {
    var e = s;
    if (!this.options[e(1111)] && x === e(1111)) return;
    const r = "[MCPMiddleware]";
    switch (x) {
      case e(1111):
        console[e(1111)](r, t, ...a);
        break;
      case e(1400):
        console[e(1400)](r, t, ...a);
        break;
      case e(1348):
        console.warn(r, t, ...a);
        break;
      case e(1106):
        console[e(1106)](r, t, ...a);
        break;
    }
  }
}
k({ method: t0("sdppp/streamResponse"), params: k({ requestId: S(), data: N0(), error: S().nullable(), finished: _() }) }), k({ method: t0(s(1053)), params: k({ action: S(), data: N0() }) }), k({ method: t0(s(467)), params: k({ requestId: S() }) });
const hi = k({ method: t0(s(2370)), params: k({ requestId: S(), data: N0(), error: S()[s(1387)](), finished: _() }) }), pi = k({ method: t0(s(1053)), params: k({ action: S(), data: N0() }) }), mi = k({ method: t0(s(467)), params: k({ requestId: S() }) });
var Fs;
class vi {
  constructor() {
    m0(this, "queues", /* @__PURE__ */ new Map());
    m0(this, Fs, /* @__PURE__ */ new Map());
  }
  push(x) {
    var t = s;
    const { requestId: a } = x[t(1063)], e = this[t(2050)][t(1195)](a) || [], r = this.waiters[t(1195)](a) || [];
    r.length > 0 ? r[t(2142)]()(x[t(1063)]) : (e[t(1472)](x[t(1063)]), this[t(2050)][t(765)](a, e));
  }
  async [(Fs = s(1208), s(876))](x) {
    var t = s;
    const a = this[t(2050)].get(x) || [];
    return a[t(1001)] > 0 ? a[t(2142)]() : new Promise((e) => {
      var r = t;
      const n = this[r(1208)][r(1195)](x) || [];
      n.push(e), this[r(1208)].set(x, n);
    });
  }
  [s(314)](x) {
    var t = s;
    this[t(2050)].delete(x), this[t(1208)][t(2456)](x);
  }
}
var Ns, qs, Ts;
class gi extends li {
  constructor(t, a = {}) {
    var e = s;
    super(t, a);
    m0(this, Ts, /* @__PURE__ */ new Map());
    m0(this, "requestIdSeq", 1);
    m0(this, qs, /* @__PURE__ */ new Map());
    m0(this, Ns, new vi());
    this[e(965)]();
  }
  setupStreamProtocolHandlers() {
    var t = s;
    this.setupStreamResponseHandler(), this[t(2297)](), this.setupStreamRequestHandler();
  }
  [(Ts = s(1446), qs = s(2137), Ns = s(2015), s(1907))]() {
    var t = s;
    this[t(700)](hi, async (a) => {
      var e = t;
      this[e(2015)].push(a);
    });
  }
  setupAbortHandler() {
    var t = s;
    this[t(190)](mi, async (a, e) => {
      var r = t;
      const { requestId: n } = a[r(1063)], o = this.runningRequests.get(n);
      return o && (o.abort(), this.runningRequests[r(2456)](n)), { success: !0 };
    });
  }
  [s(281)]() {
    var t = s;
    this[t(190)](pi, async (a, e) => {
      var r = t;
      const n = r(2387) + this[r(233)]++, o = this[r(1446)][r(1195)](a[r(1063)].action);
      if (!o) throw new Error(r(1555) + a.params[r(617)]);
      const c = new AbortController();
      return this[r(2137)][r(765)](n, c), this.executeHandlerAsync(n, o, a.params, e, c), { requestId: n };
    });
  }
  async [s(367)](t, a, e, r, n) {
    var o = s;
    try {
      const c = a(e, r, n.signal);
      for await (const u of c) {
        if (n[o(2318)][o(2423)]) break;
        await this[o(398)]({ method: o(2370), params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !n[o(2318)][o(2423)] && await this[o(398)]({ method: o(2370), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n.signal[o(2423)] && await this.notification({ method: o(2370), params: { requestId: t, data: null, error: c.message, finished: !0 } });
    } finally {
      this[o(2137)][o(2456)](t);
    }
  }
  [s(229)](t, a) {
    var e = s;
    this[e(1446)][e(765)](t[e(469)][e(617)][e(226)], a);
  }
  async [s(615)](t, a, e) {
    var r = s;
    this.validateStreamRequestorRequest(e);
    const n = await this.sendStreamRequestorRequest(t), o = this[r(698)](n), c = this[r(224)]();
    return this[r(1731)](o, c, n, e);
  }
  [s(1278)](t) {
    var a = s;
    if (t && t[a(2423)]) throw new Error(a(2366));
  }
  async [s(306)](t) {
    var a = s;
    return (await this.request({ method: a(1053), params: { action: t.action, data: t[a(1512)] } }, k({ requestId: S() }))).requestId;
  }
  initializeResponseQueue(t) {
    var a = s;
    return this[a(2015)];
  }
  [s(224)]() {
    return { finished: !1, error: null };
  }
  [s(1731)](t, a, e, r) {
    var n = s;
    const o = this;
    return { async *[Symbol[n(1712)]]() {
      var c = n;
      try {
        for (; !a[c(2267)] && !a[c(1106)]; ) {
          if (r && r.aborted)
            throw await o.request({ method: "sdppp/abort", params: { requestId: e } }, k({ success: _() })), new Error(c(1889));
          const u = await t[c(876)](e);
          if (u[c(1106)])
            throw a[c(1106)] = u[c(1106)], new Error(u[c(1106)]);
          if (u[c(2267)]) {
            a[c(2267)] = !0;
            break;
          }
          u.data !== null && (yield u[c(1512)]);
        }
      } finally {
        t[c(314)](e);
      }
    } };
  }
  [s(896)]() {
    var t = s;
    return this[t(2137)][t(1159)];
  }
  async abortRequest(t) {
    var a = s;
    const e = this[a(2137)].get(t);
    return e ? (e[a(1202)](), this[a(2137)][a(2456)](t), !0) : !1;
  }
  abortAllRequests() {
    var t = s;
    for (const [a, e] of this[t(2137)])
      e[t(1202)]();
    this[t(2137)][t(1332)]();
  }
  [s(314)]() {
    var t = s;
    super[t(314)](), this[t(1425)](), this[t(1446)][t(1332)]();
  }
}
k({ id: S(), method: S(), params: N0()[s(1169)](), traceId: S()[s(1169)]() }), k({ id: S(), result: N0().optional(), error: k({ code: r0(), message: S(), data: N0()[s(1169)]() })[s(1169)]() }), k({ method: S(), params: N0()[s(1169)]() }), k({ method: t0(s(1053)), params: k({ action: S(), data: N0() }) }), k({ method: t0(s(2370)), params: k({ requestId: S(), data: N0()[s(1169)](), error: S().nullable()[s(1169)](), finished: _().default(!1) }) }), k({ method: t0("sdppp/abort"), params: k({ requestId: S() }) }), k({ method: t0("sdppp/broadcast"), params: k({ messageType: S(), message: N0() }) });
function $s(i) {
  var x = s;
  return i && i[x(2438)] && Object[x(2123)][x(2107)][x(801)](i, x(2454)) ? i[x(2454)] : i;
}
const Fe = k({ leftDistance: r0(), topDistance: r0(), rightDistance: r0(), bottomDistance: r0(), width: r0(), height: r0() }), Me = { name: S(), uiWeight: r0() }, yi = k({ ...Me, outputType: t0(s(2129)), options: k({ required: _(), maxCount: r0()[s(1169)](), maskMode: _()[s(1169)]() }) }), bi = k({ ...Me, outputType: t0("masks"), options: k({ required: _() }) }), wi = k({ ...Me, outputType: t0(s(389)), options: k({ required: _() }) }), Si = k({ ...Me, outputType: t0(s(325)), options: k({ required: _() }) }), ki = k({ ...Me, outputType: t0("number"), options: k({ required: _(), min: r0()[s(1169)](), max: r0()[s(1169)](), step: r0()[s(1169)](), random: _().optional(), slider: _()[s(1169)]() }) }), Pi = k({ ...Me, outputType: t0(s(160)), options: k({ required: _(), values: R0(S()), labels: R0(S()).optional() }) }), Ei = k({ ...Me, outputType: t0(s(543)), options: k({ required: _(), values: R0(S()) }) }), Ii = Ms(s(1645), [yi, bi, wi, Si, ki, Pi, Ei]), Ri = k({ id: S(), title: S(), widgets: R0(Ii), uiWeightSum: r0() }), Ci = k({ widgetableID: S(), widgetablePath: S(), nodes: U0(S(), Ri), nodeIndexes: R0(S()), note: S().optional(), options: U0(S(), N0()) }), Fi = k({ bannerData: N0()[s(1169)](), refreshable: _().default(!1), backwardable: _()[s(2454)](!1), loginable: _().default(!1), runnable: _()[s(2454)](!1), workBoundaries: U0(r0(), Fe)[s(2454)]({}), workBoundaryMaxSizes: U0(r0(), r0())[s(2454)]({}) }), Ni = k({ uname: S().default(""), activeDocumentID: r0()[s(2454)](0), layers: R0(k({ id: r0(), name: S(), identify: S() }))[s(2454)]([]), actions: R0(S())[s(2454)]([]), theme: S()[s(2454)](s(1089)), sdpppX: U0(S(), N0())[s(2454)]({}), locale: F0(["zh-CN", s(1860)]).default(s(1860)), comfyWebviewConnectStatus: F0(["connecting", "connected", s(1079)])[s(2454)](s(1079)), comfyWebviewLoadError: S().default(""), comfyWebviewLoading: _()[s(2454)](!1), comfyWebviewVersion: S()[s(2454)](""), comfyHTTPCode: r0()[s(2454)](200), comfyURL: S()[s(2454)](""), sdkWebviewFocusing: _()[s(2454)](!1), sdkWebviewConnectStatus: F0([s(1168), s(452), s(1079)])[s(2454)](s(1079)), isLogin: _()[s(2454)](!1), isGuest: _().default(!1), requestingLogin: _()[s(2454)](!1), loginMessage: S()[s(2454)](""), token: S().default(""), userInfo: U0(S(), N0()).default({}), taskLastRun: r0()[s(2454)](0), canvasStateID: r0()[s(1169)](), selectionStateID: S()[s(1169)](), canvasThumbnail: S().default(""), curlayerThumbnail: S().default("") }), qi = k({ widgetableStructure: Ci[s(2454)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: U0(S(), R0(N0()))[s(2454)]({}), widgetableErrors: U0(S(), S())[s(2454)]({}), queueSize: r0()[s(2454)](0), lastError: S()[s(2454)](""), progress: r0().default(0), executingNodeTitle: S()[s(2454)](""), executingNodeID: S()[s(2454)](""), graphProgress: r0()[s(2454)](0), comfyUserToken: S()[s(2454)](""), comfyOrgLoggedIn: _().default(!1), comfyOrgAPIKey: S().default(""), comfyWSState: F0([s(452), "reconnecting"])[s(2454)]("connected"), lastRunTime: r0()[s(2454)](0) }), Ti = { backward: { requestSchema: zx(), responseSchema: k({ success: _() }) }, refresh: { requestSchema: zx(), responseSchema: k({ success: _() }) }, run: { requestSchema: zx(), responseSchema: k({ success: _() }) } }, Oi = { log: { requestSchema: k({ level: F0([s(524), s(1400), "warn", "error"]), messages: R0(S()) }), responseSchema: k({}) }, openExternalLink: { requestSchema: k({ url: S() }), responseSchema: k({ error: S()[s(1169)]() }) }, getStorage: { requestSchema: k({ key: S() }), responseSchema: k({ value: S(), error: S()[s(1169)]() }) }, setStorage: { requestSchema: k({ key: S(), value: S() }), responseSchema: k({ error: S()[s(1169)]() }) }, removeStorage: { requestSchema: k({ key: S() }), responseSchema: k({ error: S().optional() }) }, keyboardAction: { requestSchema: k({ keycode: S() }), responseSchema: k({}) }, setComfyWebviewURL: { requestSchema: k({ url: S() }), responseSchema: k({}) }, getImageBase64: { requestSchema: k({ token: S() }), responseSchema: k({ base64: S().optional(), mimeType: S()[s(1169)](), error: S()[s(1169)]() }) }, uploadComfyImage: { requestSchema: k({ uploadInput: k({ type: t0(s(1321)).or(t0("token")), tokenOrBuffer: N0(), fileName: S() }), overwrite: _()[s(1169)]()[s(2454)](!0) }), responseSchema: k({ name: S() }) }, proxiedFetch: { requestSchema: k({ url: S(), method: S()[s(1169)](), headers: U0(S())[s(1169)](), body: N0().optional(), bodyType: F0(["json", s(2316), s(702)])[s(1169)]() }), responseSchema: k({ success: _(), status: r0()[s(1169)](), statusText: S().optional(), headers: U0(S()).optional(), data: N0()[s(1169)](), error: S()[s(1169)]() }) }, openaiImageEdit: { requestSchema: k({ apiKey: S(), baseURL: S(), imageToken: S(), prompt: S(), model: S() }), responseSchema: k({ success: _(), imageUrl: S().optional(), apiTime: r0().optional(), error: S()[s(1169)]() }) }, geminiImageGenerate: { requestSchema: k({ apiKey: S(), baseURL: S()[s(1169)](), imageInputs: R0(S())[s(1169)](), imageInput: S()[s(1169)](), imageInputType: F0([s(1044), s(1194)]), prompt: S() }), responseSchema: k({ success: _(), imageUrl: S()[s(1169)](), apiTime: r0()[s(1169)](), error: S().optional() }) } };
k({ thumbnail_url: S()[s(1169)](), file_token: S().optional(), source: S()[s(1169)](), error: S()[s(1169)]() });
const Or = k({ boundary: F0([s(1376), s(2092), s(1869)]), content: F0([s(1376), "curlayer", "selection"]).or(S()), imageSize: r0(), imageQuality: r0(), cropBySelection: F0(["no", "positive", "negative"]) }), Ar = k({ content: F0([s(1376), s(2092), s(1869)]), reverse: _(), imageSize: r0() });
k({ selection: F0(["newdoc_canvas", "newlayer_canvas", s(1611), "newlayer_selection", s(1091), s(1643), "curlayer_selection", "newdoc_canvas"]), url: S(), source: S(), cropBySelection: F0(["no", s(663), s(415)]) });
const Ai = { downloadImage: { requestSchema: k({ url: S() }), responseSchema: k({ thumbnail_url: S()[s(1169)](), nativePath: S()[s(1169)](), width: r0()[s(1169)](), height: r0().optional(), error: S().optional() }) }, deleteDownloadedImage: { requestSchema: k({ nativePaths: R0(S()) }), responseSchema: k({ error: S().optional() }) }, requestAndDoSaveImage: { requestSchema: k({ nativePaths: R0(S()) }), responseSchema: k({ error: S().optional() }) } }, Di = k({ passwordPayload: k({ username: S(), password: S() }).or(k({ email: S(), password: S() })).or(k({ phone: S(), password: S() })).or(k({ identifier: S(), password: S() })) }).or(k({ passcodePayload: k({ phone: S(), code: S() }).or(k({ email: S(), code: S() })) })), ji = k({ passwordPayload: k({ username: S(), password: S() }).or(k({ email: S(), password: S() })).or(k({ phone: S(), password: S() })).or(k({ identifier: S(), password: S() })) }).or(k({ passcodePayload: k({ phone: S(), code: S() }).or(k({ email: S(), code: S() })) })), Mi = { register: { requestSchema: Di, responseSchema: k({}) }, login: { requestSchema: ji, responseSchema: k({}) }, sendPassCode: { requestSchema: k({ phone: S().optional(), email: S()[s(1169)]() }), responseSchema: k({}) }, logout: { requestSchema: k({}), responseSchema: k({}) }, guestLogin: { requestSchema: k({}), responseSchema: k({}) } }, Hx = k({ taskId: S(), taskName: S(), status: F0([s(593), "completed", s(1167), "cancelled"]), currentStep: r0()[s(1169)](), totalSteps: r0()[s(1169)](), stepDescription: S()[s(1169)](), progressPercentage: r0().min(0)[s(1468)](100).optional(), startTime: S(), endTime: S()[s(1169)](), error: S().optional(), errorCode: S().optional(), result: N0()[s(1169)](), metadata: U0(N0())[s(1169)]() }), Ux = k({ success: _(), error: S().optional() }), Li = { taskAdd: { requestSchema: Hx, responseSchema: Ux }, taskUpdate: { requestSchema: Hx[s(1913)]()[s(740)]({ taskId: !0 }), responseSchema: Ux }, taskRemove: { requestSchema: Hx[s(1885)]({ taskId: !0 }), responseSchema: Ux } }, $i = { manageGuides: { requestSchema: k({ action: F0([s(536), s(1332)]), rect: Fe[s(1169)]() }), responseSchema: k({ success: _() }) }, openImagesFromFile: { requestSchema: k({ nativePath: S(), boundary: Fe[s(1169)]() }), responseSchema: k({ success: _(), documentId: r0(), documentName: S(), width: r0(), height: r0() }) }, getBoundary: { requestSchema: k({ type: F0(["curlayer", "selection"]) }), responseSchema: Fe }, getImage: { requestSchema: k({ boundary: J0([F0([s(1376), s(2092), s(1869)]), Fe]), content: J0([F0(["canvas", s(2092)]), S()]), imageSize: r0(), imageQuality: r0(), cropBySelection: F0(["no", s(663), s(415)]), SkipNonNormalLayer: _() }), responseSchema: k({ thumbnail_url: S()[s(1169)](), file_token: S()[s(1169)](), source: S()[s(1169)](), error: S()[s(1169)]() }) }, getMask: { requestSchema: k({ boundary: J0([F0([s(1376), s(2092), "selection"]), Fe]), content: F0(["canvas", s(2092), s(1869)]), reverse: _(), imageSize: r0() }), responseSchema: k({ thumbnail_url: S()[s(1169)](), file_token: S()[s(1169)](), source: S()[s(1169)](), error: S()[s(1169)]() }) }, importImage: { requestSchema: k({ nativePath: S(), boundary: J0([F0([s(1376), "curlayer", s(1869)]), Fe])[s(1169)](), type: F0([s(1376), s(2092), s(1007), s(2093)]), sourceWidth: r0()[s(1169)](), sourceHeight: r0()[s(1169)]() }), responseSchema: k({ success: _(), layers: R0(k({ identify: S() }))[s(1169)](), message: S().optional(), error: S()[s(1169)]() }) }, showBoundarySelectionDialog: { requestSchema: k({ additionalData: U0(N0()).optional() }), responseSchema: k({ boundary: F0(["canvas", s(2092), s(1869)])[s(1169)](), cancelled: _()[s(1169)]() }) }, selectCanvasImage: { requestSchema: k({ additionalData: U0(N0())[s(1169)]() }), responseSchema: k({ getImageParams: Or.optional(), source: S()[s(1169)](), cancelled: _().optional() }) }, selectLayerImage: { requestSchema: k({ additionalData: U0(N0())[s(1169)]() }), responseSchema: k({ getImageParams: Or[s(1169)](), source: S()[s(1169)](), cancelled: _()[s(1169)]() }) }, selectLayerMask: { requestSchema: k({ additionalData: U0(N0())[s(1169)]() }), responseSchema: k({ getMaskParams: Ar[s(1169)](), source: S()[s(1169)](), cancelled: _().optional() }) }, selectSelectionMask: { requestSchema: k({ additionalData: U0(N0())[s(1169)]() }), responseSchema: k({ getMaskParams: Ar[s(1169)](), source: S().optional(), cancelled: _()[s(1169)]() }) } }, zi = k({ workflows: R0(S()), error: S()[s(1169)]() }), Hi = k({ success: _(), nodeErrors: U0(S())[s(1169)](), prompt_ids: R0(S())[s(1169)](), images: R0(k({ url: S(), thumbnail: S() }))[s(1169)]() }), Ui = { setWidgetValue: { requestSchema: k({ values: R0(k({ nodeID: S(), widgetIndex: r0(), value: U0(S(), N0()).or(S()).or(r0()).or(_()).or(R0(N0())) })) }), responseSchema: k({ success: _() }) }, openWorkflow: { requestSchema: k({ workflow_path: S(), reset: _()[s(2454)](!1) }), responseSchema: k({ success: _() }) }, openWorkflowJSON: { requestSchema: k({ workflow_content: U0(N0()), workflow_path: S() }), responseSchema: k({ success: _() }) }, listWorkflows: { requestSchema: k({ listMode: S()[s(1169)](), sdpppID: S().optional(), sdpppToken: S()[s(1169)]() }), responseSchema: zi }, saveWorkflow: { requestSchema: k({ workflow_path: S(), from_sid: S()[s(1169)]() }), responseSchema: k({ success: _() }) }, run: { requestSchema: k({ size: r0() }), responseSchema: Hi, stream: !0 }, stopAll: { requestSchema: k({}), responseSchema: k({ success: _() }) } }, Vi = { setNodeTitle: { requestSchema: k({ node_id: S(), title: S() }), responseSchema: k({ success: _() }) }, reboot: { requestSchema: k({}), responseSchema: k({ success: _(), error: S()[s(1169)]() }) }, setComfyOrgAPIKey: { requestSchema: k({ api_key: S() }), responseSchema: k({ success: _() }) }, logout: { requestSchema: k({}), responseSchema: k({ success: _() }) } }, Wi = fi({ nodes: { sdk: { store: Fi, actions: { ...Ti } }, uxp: { store: Ni, actions: { ...Ai, ...Oi, ...Mi, ...Li, ...$i } }, comfy: { store: qi, actions: { ...Ui, ...Vi } } }, edges: [[s(664), "uxp"], [s(304), s(853)]] }), C0 = Wi[s(1456)]("comfy");
globalThis.mcpMesh = C0, globalThis[s(276)] = globalThis[s(276)] || {};
const _e = globalThis[s(276)], Zi = { "preview.show": s(1077), "gateway.select_ai_service": "请选择AI服务", "provider.select.title": s(1603), "provider.comfyui.description": "自定义AI工作流引擎", "provider.replicate.description": "海量模型，稳定服务", "provider.runninghub.description": s(993), "provider.google.description": s(429), "task.waiting_upload": s(2198), "task.creating_task": "正在创建任务...", "task.running_duration": s(1303), "task.cancelled": s(151), "task.cancel_failed": "任务取消失败: {{error}}", "comfy.connect": "连接", "comfy.load_failed": s(172), "comfy.loading": s(933), "comfy.channel_connecting": s(1384), "comfy.server_reconnecting": s(1840), "comfy.version_mismatch": "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "comfy.cloud_recommend": s(1441), "comfy.your_workflows": s(457), "comfy.refresh_workflows": s(1514), "comfy.queue_progress": "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": "停止并取消全部", "comfy.stop_auto_run": "停止自动运行", "comfy.start_auto_run": s(1327), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": "正在上传...", "comfy.help_tooltip": s(2005), "boundary.title": s(2031), "boundary.tooltip": "AI使用的区域与最大尺寸控制", "boundary.current_canvas": s(1902), "boundary.current_layer": s(1191), "boundary.current_selection": s(110), "boundary.set_as_canvas": s(2170), "boundary.set_as_layer": s(219), "boundary.set_as_selection": "设为当前选区", "http.404": s(1966), "http.401": s(1994), "http.403": "禁止访问 (403)", "http.408": "请求超时 (408)", "http.500": "服务器错误 (500)", "http.501": s(412), "http.502": s(1565), "http.503": s(708), "http.504": "网关超时 (504)", "http.unknown": s(606), "runninghub.get_apikey": s(126), "runninghub.apikey_placeholder": s(1727), "runninghub.app_id": s(382), "runninghub.webapp_id_placeholder": s(386), "runninghub.open_app": s(356), "runninghub.execute": "执行", "runninghub.rh_coins": s(1770), "runninghub.current_tasks": s(875), "runninghub.help_tooltip": s(2005), "runninghub.status.waiting": s(1082), "runninghub.status.running": s(1952), "runninghub.status.failed": "执行失败", "runninghub.status.success": s(1722), "image.auto_refetch": s(794), "runninghub.error.get_result_failed": s(1491), "runninghub.error.task_failed": s(1664), "runninghub.error.task_incomplete": s(1626), "replicate.get_apikey": "如何获取APIKey", "replicate.apikey_placeholder": s(660), "replicate.execute": "执行", "replicate.model_placeholder": "粘贴你的模型名称", "replicate.help_tooltip": s(2005), "liblib.get_apikey": s(2333), "liblib.execute": "执行", "common.close": "关闭", "common.save_and_run": s(1459), "common.loading": "加载中...", "common.error": "错误", "common.success": "成功", "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": s(1777), webviewInForeground: s(659), webviewInForeground2: s(2039), "auth.login_success": s(1115), "auth.username_label": s(1385), "auth.email_label": s(247), "auth.logout": "退出登录", "auth.login_required": s(908), "image.send.select_position": s(1685), "image.send.sending": s(340), "image.layer.new": s(1649), "image.layer.current": s(1191), "image.layer.fit_to_current": s(1409), "image.layer.fit_to_selection": "适配至选区", "image.layer.fit_to_canvas": s(844), "image.shortcut_auth_required": s(1092), "image.shortcut_focus_required": s(1009), "image.get.select_image": "请选择要获取的图像", "image.get.entire_canvas": "整个画布", "image.get.canvas": "画布", "image.get.current_layer": "当前图层", "image.get.current_layer_bounds": "仅当前图层范围", "image.get.selection_bounds": s(1683), "image.get.canvas_bounds": s(1749), "image.crop_by_selection": s(2147), "image.limit_size": "限制图片尺寸", "image.crop.none": "不裁剪", "image.crop.inpaint": s(1331), "image.crop.outpaint": "正向裁剪(Outpaint)", "image.send_all": "发送所有", "image.save_all": s(1940), "image.save_current": s(2172), "image.delete_current": s(915), "image.more_actions": s(1520), "image.jump_to_last": "跳转到最后一个", "image.clear_all": "清空所有", "image.send_to_ps": s(1655), "image.download": "下载", "image.copy": "复制", "image.sending": s(1475), "image.sending_all": s(1955), "mask.get.select_mask": s(368), "mask.selection": "选区", "mask.current_layer_bounds": s(2211), "mask.all": "全部", "mask.selection_exclude": "选区除外", "mask.current_layer_exclude": s(1064), "mask.empty": "空", "document {{0}} not found": s(1071), "create document for preview": s(1488), "resize document for preview": "调整预览文档尺寸", "create document for sent images": s(436), "show sent images": s(2080), "create layer failed": "创建图层失败", "layer not found {{0}}": s(539), "layer not found: {{0}}": s(539), "layer {{0}} is not a group": s(2163), "no linked layer for {{0}}": s(1157), "no first related layer in {{0}}": "组 {{0}} 中没有第一个相关图层", "merge group failed": "合并组失败", "get content of layer {{0}}": s(227), "get layer info": "获取图层信息", "get_layer_info: layer_identify required": s(2059), "get pixel of {{0}} failed": s(1039), "get selection failed": s(538), "invalid name: {{0}}": s(1609), "desire bounds is null": s(191), "intersect or scaledDesire is null": "交集或缩放目标为空", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': s(2173), "select layer": "sdppp 选中图层", "run Photoshop Action": s(826), "Action {{0}} not found": s(170), "Action set {{0}} not found": "ActionSet {{0}} 未找到", "set text to layer": "设置图层的文本", "ComfyManager not found, cannot reboot": s(642), "Failed to reboot ComfyUI": s(1699), "image.upload.from_canvas": "画布", "image.upload.from_curlayer": s(1191), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": "上传中，如果图片过大，可能会卡顿...", "image.upload.no_images": s(1522), "image.upload.tooltip.more_options_hint": s(2241), "image.upload.tooltip.alt.crop": s(651), "image.upload.tooltip.alt.reverse": s(1937), "image.upload.tooltip.image.canvas": "从 画布 获取图像", "image.upload.tooltip.image.curlayer": s(1525), "image.upload.tooltip.mask.curlayer": "从 当前图层 获取遮罩", "image.upload.tooltip.mask.selection": s(450), "image.upload.tooltip.mask.canvas": s(1984), "image.upload.tooltip.autosync.on": "自动同步: 开启", "image.upload.tooltip.autosync.off": s(161), "image.auto_send_enabled": s(719), "image.auto_send_disabled": s(366), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": s(1613), "source.ps_mask": s(2027), "source.canvas": "整个画布", "source.current_layer": s(1191), "source.selection": "选区", "source.quality_percent": "质量{{percent}}%", "source.crop.positive": s(1380), "source.crop.negative": s(1574), "source.reverse": "反转", "send_images.create_document": s(444), "send_images.create_document_failed": s(2257), "photoshop.no_active_document": s(1117), "photoshop.rectangle_coordinates_required": "创建操作需要矩形坐标", "photoshop.create_guide_frame": s(1676), "photoshop.clear_guide_frame": s(2310), "photoshop.invalid_action": "无效操作: {{action}}", "photoshop.file_not_found": s(124), "photoshop.failed_to_open_file_as_document": "无法将文件作为文档打开: {{path}}", "photoshop.invalid_boundary": s(140), "photoshop.failed_to_open_image_file": s(1087), "photoshop.open_images_from_file": s(1652), "photoshop.failed_to_create_document_from_file": s(454), "google.field.image_input": s(2037), "google.field.prompt": s(2325), "google.field.batch_count": s(287), "google.field.images_per_batch": s(595), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": "生成中", "google.apikey_placeholder": s(788), "google.baseurl_placeholder": "基础 URL", "google.get_apikey": s(981), "google.help_tooltip": s(144), "google.model_name": s(1326), "google.loading": s(380), "google.generating": s(531), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": s(2373), "image.import_as_newdoc": s(426), "image.boundary": "边界", "image.import_tip": s(1049), "auth.guest_login_success": "", "boundary.canvas": "画布", "boundary.select_boundary": s(991), "boundary.selection": "选区", "convert widget {0} failed:": "", "document {0} not found": "", "image.document.new": "", "image.layer.smart_object": "", "layer not found {0}": "", "photoshop.invalid_boundary_type": "", "photoshop.no_active_layer": "" }, Bi = { "preview.show": s(2385), "gateway.select_ai_service": s(1296), "provider.select.title": s(1912), "provider.comfyui.description": s(378), "provider.replicate.description": s(1758), "provider.runninghub.description": s(2263), "provider.google.description": "OpenAI/Google format API", "task.waiting_upload": s(385), "task.creating_task": s(2239), "task.running_duration": s(1646), "task.cancelled": s(2164), "task.cancel_failed": "Task cancel failed: {{error}}", "comfy.connect": s(559), "comfy.load_failed": s(1136), "comfy.loading": "ComfyUI loading...", "comfy.channel_connecting": s(607), "comfy.server_reconnecting": s(749), "comfy.version_mismatch": "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "comfy.cloud_recommend": "Cloud:", "comfy.your_workflows": "Your Workflows", "comfy.refresh_workflows": s(1724), "comfy.queue_progress": "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "comfy.save": s(196), "comfy.refresh": s(710), "comfy.stop_cancel_all": s(107), "comfy.stop_auto_run": "Stop auto run", "comfy.start_auto_run": s(439), "comfy.run": s(134), "comfy.back": s(526), "comfy.uploading": s(2340), "comfy.help_tooltip": "Tutorial", "boundary.title": s(2371), "boundary.tooltip": s(825), "boundary.current_canvas": s(2288), "boundary.current_layer": s(706), "boundary.current_selection": s(2291), "boundary.set_as_canvas": s(920), "boundary.set_as_layer": "Set as Current Layer", "boundary.set_as_selection": s(1977), "http.404": s(590), "http.401": s(1389), "http.403": s(432), "http.408": s(1356), "http.500": "Server error (500)", "http.501": "Not implemented (501)", "http.502": s(863), "http.503": "Service unavailable (503)", "http.504": s(1709), "http.unknown": "Unknown error ({{code}})", "runninghub.get_apikey": s(1047), "runninghub.apikey_placeholder": "Enter your RunningHub API Key", "runninghub.app_id": s(254), "runninghub.webapp_id_placeholder": s(1809), "runninghub.open_app": s(525), "runninghub.execute": s(522), "runninghub.rh_coins": s(2053), "runninghub.current_tasks": s(1021), "runninghub.help_tooltip": s(1273), "runninghub.status.waiting": s(849), "runninghub.status.running": "Running", "runninghub.status.failed": s(1323), "runninghub.status.success": "Success", "image.auto_refetch": s(669), "runninghub.error.get_result_failed": s(1772), "runninghub.error.task_failed": s(1342), "runninghub.error.task_incomplete": s(2336), "replicate.get_apikey": s(1482), "replicate.apikey_placeholder": s(1308), "replicate.execute": s(522), "replicate.model_placeholder": s(2424), "replicate.help_tooltip": "Tutorial", "liblib.get_apikey": s(401), "liblib.execute": "Execute", "common.close": s(502), "common.save_and_run": s(1682), "common.loading": "Loading...", "common.error": s(1254), "common.success": s(1189), "common.cancel": s(562), "common.confirm": s(1016), "common.options": s(1600), "common.options_separator": s(2001), webviewInForeground: s(966), webviewInForeground2: s(1784), "auth.login_success": s(2071), "auth.username_label": s(2347), "auth.email_label": s(537), "auth.logout": "Logout", "auth.login_required": s(2482), "image.send.select_position": "Please select the position to send image", "image.send.sending": s(363), "image.layer.new": s(1247), "image.layer.current": s(706), "image.layer.fit_to_current": "Fit to current layer", "image.layer.fit_to_selection": "Fit to selection", "image.layer.fit_to_canvas": s(2195), "image.shortcut_auth_required": "Shortcut selection feature requires login", "image.shortcut_focus_required": s(2184), "image.get.select_image": s(163), "image.get.entire_canvas": s(2288), "image.get.canvas": s(742), "image.get.current_layer": s(706), "image.get.current_layer_bounds": "Current layer bounds only", "image.get.selection_bounds": s(1022), "image.get.canvas_bounds": s(299), "image.crop_by_selection": s(813), "image.limit_size": "Limit image size", "image.crop.none": s(413), "image.crop.inpaint": s(694), "image.crop.outpaint": s(934), "image.send_all": s(2135), "image.save_all": s(169), "image.save_current": s(1490), "image.delete_current": s(2282), "image.more_actions": "More actions", "image.jump_to_last": s(785), "image.clear_all": "Clear all", "image.send_to_ps": "Send to PS", "image.download": s(503), "image.copy": s(2429), "image.sending": s(1788), "image.sending_all": s(1959), "mask.get.select_mask": s(1248), "mask.selection": s(1027), "mask.current_layer_bounds": s(1943), "mask.all": s(2431), "mask.selection_exclude": s(1307), "mask.current_layer_exclude": s(284), "mask.empty": s(480), "document {{0}} not found": s(2072), "create document for preview": s(836), "resize document for preview": s(290), "create document for sent images": s(560), "show sent images": "Show sent images", "create layer failed": s(2422), "layer not found {{0}}": "Layer not found {{0}}", "layer not found: {{0}}": "Layer not found: {{0}}", "layer {{0}} is not a group": s(2119), "no linked layer for {{0}}": s(2303), "no first related layer in {{0}}": s(2354), "merge group failed": s(2337), "get content of layer {{0}}": s(1358), "get layer info": s(2463), "get_layer_info: layer_identify required": "get_layer_info: layer_identify required", "get pixel of {{0}} failed": s(2448), "get selection failed": s(833), "invalid name: {{0}}": s(1070), "desire bounds is null": "Desire bounds is null", "intersect or scaledDesire is null": "Intersect or scaledDesire is null", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': s(1708), "select layer": s(961), "run Photoshop Action": s(1920), "Action {{0}} not found": s(891), "Action set {{0}} not found": s(438), "set text to layer": s(2275), "ComfyManager not found, cannot reboot": "ComfyManager not found, cannot reboot", "Failed to reboot ComfyUI": s(1597), "image.upload.from_canvas": s(742), "image.upload.from_curlayer": s(706), "image.upload.from_selection": s(1027), "image.upload.from_harddisk": s(336), "image.upload.clear": "Clear", "image.upload.uploading": s(1164), "image.upload.no_images": s(358), "image.upload.tooltip.alt.crop": "+Alt crop by selection", "image.upload.tooltip.alt.reverse": s(1263), "image.upload.tooltip.image.canvas": s(2364), "image.upload.tooltip.image.curlayer": "Get image from Current Layer", "image.upload.tooltip.mask.canvas": s(1150), "image.upload.tooltip.mask.curlayer": "Get mask from Current Layer", "image.upload.tooltip.mask.selection": s(1145), "image.upload.tooltip.autosync.on": s(756), "image.upload.tooltip.autosync.off": s(1669), "image.auto_send_enabled": s(2388), "image.auto_send_disabled": "Auto send disabled", "source.source": s(1608), "source.content": "Content", "source.boundary": s(249), "source.mask": s(968), "source.disk": "Disk", "source.remote": "Remote", "source.unknown": s(1949), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": s(742), "source.current_layer": "CurLayer", "source.selection": s(1027), "source.quality_percent": s(713), "source.crop.positive": s(1025), "source.crop.negative": "Negative Crop", "source.reverse": "Reverse", "send_images.create_document": "Create document", "send_images.create_document_failed": "Create document failed", "photoshop.no_active_document": s(605), "photoshop.rectangle_coordinates_required": s(1476), "photoshop.create_guide_frame": s(718), "photoshop.clear_guide_frame": s(2252), "photoshop.invalid_action": s(2012), "photoshop.file_not_found": s(1921), "photoshop.failed_to_open_file_as_document": "Failed to open file as document: {{path}}", "photoshop.invalid_boundary": "Invalid boundary: left must be less than right, top must be less than bottom", "photoshop.failed_to_open_image_file": s(1404), "photoshop.open_images_from_file": s(1607), "photoshop.failed_to_create_document_from_file": s(680), "google.field.image_input": s(1397), "google.field.prompt": s(1671), "google.field.batch_count": "Batch Count", "google.field.images_per_batch": s(1276), "google.status.success": s(1189), "google.status.failed": s(1323), "google.status.generating": s(902), "google.apikey_placeholder": s(793), "google.get_apikey": s(414), "google.baseurl_placeholder": s(396), "google.help_tooltip": s(1006), "google.model_name": s(665), "google.loading": s(1437), "google.generating": "Generating...", "google.generate": "Generate", "image.auto_toggle": s(1220), "image.import_as_smartobject": s(644), "image.import_as_newdoc": s(2322), "image.boundary": "Boundary", "image.import_tip": "Hold Shift key to import as new document", "auth.guest_login_success": s(137), "boundary.canvas": s(742), "boundary.select_boundary": s(175), "boundary.selection": "Selection", "convert widget {0} failed:": s(1406), "document {0} not found": s(2151), "image.document.new": s(553), "image.layer.smart_object": s(1151), "layer not found {0}": s(2051), "photoshop.invalid_boundary_type": s(1575), "photoshop.no_active_layer": s(1466) }, v0 = (i) => typeof i === s(389), Ge = () => {
  var i = s;
  let x, t;
  const a = new Promise((e, r) => {
    x = e, t = r;
  });
  return a.resolve = x, a[i(728)] = t, a;
}, Dr = (i) => i == null ? "" : "" + i, Ki = (i, x, t) => {
  var a = s;
  i[a(1353)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, Ji = /###/g, jr = (i) => i && i[s(1616)](s(573)) > -1 ? i.replace(Ji, ".") : i, Mr = (i) => !i || v0(i), ex = (i, x, t) => {
  var a = s;
  const e = v0(x) ? x[a(1464)](".") : x;
  let r = 0;
  for (; r < e[a(1001)] - 1; ) {
    if (Mr(i)) return {};
    const n = jr(e[r]);
    !i[n] && t && (i[n] = new t()), Object.prototype.hasOwnProperty[a(801)](i, n) ? i = i[n] : i = {}, ++r;
  }
  return Mr(i) ? {} : { obj: i, k: jr(e[r]) };
}, Lr = (i, x, t) => {
  var a = s;
  const { obj: e, k: r } = ex(i, x, Object);
  if (e !== void 0 || x.length === 1) {
    e[r] = t;
    return;
  }
  let n = x[x[a(1001)] - 1], o = x.slice(0, x.length - 1), c = ex(i, o, Object);
  for (; c.obj === void 0 && o[a(1001)]; )
    n = o[o[a(1001)] - 1] + "." + n, o = o.slice(0, o.length - 1), c = ex(i, o, Object), c != null && c[a(799)] && typeof c[a(799)][c.k + "." + n] !== a(2108) && (c[a(799)] = void 0);
  c[a(799)][c.k + "." + n] = t;
}, Gi = (i, x, t, a) => {
  const { obj: e, k: r } = ex(i, x, Object);
  e[r] = e[r] || [], e[r].push(t);
}, Ex = (i, x) => {
  var t = s;
  const { obj: a, k: e } = ex(i, x);
  if (a && Object[t(2123)][t(2107)][t(801)](a, e))
    return a[e];
}, Qi = (i, x, t) => {
  const a = Ex(i, t);
  return a !== void 0 ? a : Ex(x, t);
}, zs = (i, x, t) => {
  var a = s;
  for (const e in x)
    e !== a(1395) && e !== a(1667) && (e in i ? v0(i[e]) || i[e] instanceof String || v0(x[e]) || x[e] instanceof String ? t && (i[e] = x[e]) : zs(i[e], x[e], t) : i[e] = x[e]);
  return i;
}, ze = (i) => i[s(1638)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, s(1162));
var Yi = { "&": s(2381), "<": s(2099), ">": s(1814), '"': "&quot;", "'": "&#39;", "/": s(2240) };
const Xi = (i) => v0(i) ? i.replace(/[&<>"'\/]/g, (x) => Yi[x]) : i;
class _i {
  constructor(x) {
    var t = s;
    this[t(1154)] = x, this[t(1845)] = /* @__PURE__ */ new Map(), this[t(622)] = [];
  }
  getRegExp(x) {
    var t = s;
    const a = this[t(1845)].get(x);
    if (a !== void 0) return a;
    const e = new RegExp(x);
    return this.regExpQueue[t(1001)] === this[t(1154)] && this[t(1845)][t(2456)](this[t(622)][t(2142)]()), this.regExpMap[t(765)](x, e), this[t(622)][t(1472)](x), e;
  }
}
const eo = [" ", ",", "?", "!", ";"], xo = new _i(20), to = (i, x, t) => {
  var a = s;
  x = x || "", t = t || "";
  const e = eo[a(830)]((o) => x[a(1616)](o) < 0 && t[a(1616)](o) < 0);
  if (e[a(1001)] === 0) return !0;
  const r = xo[a(2075)]("(" + e.map((o) => o === "?" ? "\\?" : o)[a(697)]("|") + ")");
  let n = !r.test(i);
  if (!n) {
    const o = i[a(1616)](t);
    o > 0 && !r.test(i[a(552)](0, o)) && (n = !0);
  }
  return n;
}, Kt = (i, x, t = ".") => {
  var a = s;
  if (!i) return;
  if (i[x])
    return Object.prototype.hasOwnProperty.call(i, x) ? i[x] : void 0;
  const e = x.split(t);
  let r = i;
  for (let n = 0; n < e[a(1001)]; ) {
    if (!r || typeof r != "object") return;
    let o, c = "";
    for (let u = n; u < e[a(1001)]; ++u)
      if (u !== n && (c += t), c += e[u], o = r[c], o !== void 0) {
        if ([a(389), "number", "boolean"][a(1616)](typeof o) > -1 && u < e[a(1001)] - 1) continue;
        n += u - n + 1;
        break;
      }
    r = o;
  }
  return r;
}, rx = (i) => i == null ? void 0 : i[s(1638)]("_", "-"), ro = { type: s(2218), log(i) {
  var x = s;
  this[x(1621)](x(524), i);
}, warn(i) {
  var x = s;
  this[x(1621)](x(1348), i);
}, error(i) {
  var x = s;
  this[x(1621)](x(1106), i);
}, output(i, x) {
  var a, e;
  var t = s;
  (e = (a = console == null ? void 0 : console[i]) == null ? void 0 : a[t(1720)]) == null || e.call(a, console, x);
} };
class Ix {
  constructor(x, t = {}) {
    var a = s;
    this[a(786)](x, t);
  }
  [s(786)](x, t = {}) {
    var a = s;
    this[a(1324)] = t[a(1324)] || a(1134), this.logger = x || ro, this.options = t, this[a(1111)] = t[a(1111)];
  }
  [s(524)](...x) {
    var t = s;
    return this[t(2e3)](x, t(524), "", !0);
  }
  [s(1348)](...x) {
    var t = s;
    return this[t(2e3)](x, t(1348), "", !0);
  }
  error(...x) {
    var t = s;
    return this[t(2e3)](x, "error", "");
  }
  [s(1999)](...x) {
    var t = s;
    return this[t(2e3)](x, "warn", "WARNING DEPRECATED: ", !0);
  }
  [s(2e3)](x, t, a, e) {
    var r = s;
    return e && !this.debug ? null : (v0(x[0]) && (x[0] = "" + a + this[r(1324)] + " " + x[0]), this[r(2218)][t](x));
  }
  create(x) {
    var t = s;
    return new Ix(this[t(2218)], { prefix: this.prefix + ":" + x + ":", ...this[t(146)] });
  }
  [s(1067)](x) {
    var t = s;
    return x = x || this[t(146)], x[t(1324)] = x.prefix || this[t(1324)], new Ix(this[t(2218)], x);
  }
}
var fe = new Ix();
class Nx {
  constructor() {
    var x = s;
    this[x(392)] = {};
  }
  on(x, t) {
    var a = s;
    return x[a(1464)](" ")[a(1353)]((e) => {
      var r = a;
      this.observers[e] || (this.observers[e] = /* @__PURE__ */ new Map());
      const n = this[r(392)][e][r(1195)](t) || 0;
      this[r(392)][e][r(765)](t, n + 1);
    }), this;
  }
  [s(1803)](x, t) {
    var a = s;
    if (this[a(392)][x]) {
      if (!t) {
        delete this[a(392)][x];
        return;
      }
      this[a(392)][x][a(2456)](t);
    }
  }
  [s(1519)](x, ...t) {
    var a = s;
    this[a(392)][x] && Array[a(903)](this.observers[x][a(899)]()).forEach(([r, n]) => {
      for (let o = 0; o < n; o++)
        r(...t);
    }), this[a(392)]["*"] && Array[a(903)](this[a(392)]["*"][a(899)]())[a(1353)](([r, n]) => {
      for (let o = 0; o < n; o++)
        r.apply(r, [x, ...t]);
    });
  }
}
class $r extends Nx {
  constructor(x, t = { ns: [s(1141)], defaultNS: "translation" }) {
    var a = s;
    super(), this[a(1512)] = x || {}, this[a(146)] = t, this[a(146)][a(1981)] === void 0 && (this[a(146)][a(1981)] = "."), this[a(146)].ignoreJSONStructure === void 0 && (this[a(146)][a(1204)] = !0);
  }
  [s(123)](x) {
    var t = s;
    this.options.ns[t(1616)](x) < 0 && this[t(146)].ns[t(1472)](x);
  }
  [s(1328)](x) {
    var t = s;
    const a = this[t(146)].ns.indexOf(x);
    a > -1 && this.options.ns[t(2052)](a, 1);
  }
  [s(1620)](x, t, a, e = {}) {
    var d, f;
    var r = s;
    const n = e[r(1981)] !== void 0 ? e[r(1981)] : this[r(146)][r(1981)], o = e[r(1204)] !== void 0 ? e.ignoreJSONStructure : this[r(146)][r(1204)];
    let c;
    x[r(1616)](".") > -1 ? c = x[r(1464)](".") : (c = [x, t], a && (Array.isArray(a) ? c.push(...a) : v0(a) && n ? c.push(...a[r(1464)](n)) : c[r(1472)](a)));
    const u = Ex(this[r(1512)], c);
    return !u && !t && !a && x[r(1616)](".") > -1 && (x = c[0], t = c[1], a = c.slice(2).join(".")), u || !o || !v0(a) ? u : Kt((f = (d = this[r(1512)]) == null ? void 0 : d[x]) == null ? void 0 : f[t], a, n);
  }
  [s(1874)](x, t, a, e, r = { silent: !1 }) {
    var n = s;
    const o = r[n(1981)] !== void 0 ? r[n(1981)] : this[n(146)][n(1981)];
    let c = [x, t];
    a && (c = c.concat(o ? a.split(o) : a)), x[n(1616)](".") > -1 && (c = x[n(1464)]("."), e = t, t = c[1]), this[n(123)](t), Lr(this[n(1512)], c, e), r.silent || this[n(1519)](n(1830), x, t, a, e);
  }
  addResources(x, t, a, e = { silent: !1 }) {
    var r = s;
    for (const n in a)
      (v0(a[n]) || Array[r(2305)](a[n])) && this.addResource(x, t, n, a[n], { silent: !0 });
    e.silent || this[r(1519)]("added", x, t, a);
  }
  [s(1413)](x, t, a, e, r, n = { silent: !1, skipCopy: !1 }) {
    var o = s;
    let c = [x, t];
    x[o(1616)](".") > -1 && (c = x[o(1464)]("."), e = a, a = t, t = c[1]), this[o(123)](t);
    let u = Ex(this[o(1512)], c) || {};
    n.skipCopy || (a = JSON[o(1674)](JSON.stringify(a))), e ? zs(u, a, r) : u = { ...u, ...a }, Lr(this[o(1512)], c, u), n[o(931)] || this[o(1519)](o(1830), x, t, a);
  }
  [s(2425)](x, t) {
    var a = s;
    this.hasResourceBundle(x, t) && delete this[a(1512)][x][t], this[a(1328)](t), this.emit(a(441), x, t);
  }
  hasResourceBundle(x, t) {
    var a = s;
    return this[a(1620)](x, t) !== void 0;
  }
  getResourceBundle(x, t) {
    var a = s;
    return t || (t = this[a(146)][a(1972)]), this[a(1620)](x, t);
  }
  [s(1838)](x) {
    var t = s;
    return this[t(1512)][x];
  }
  [s(2323)](x) {
    var t = s;
    const a = this[t(1838)](x);
    return !!(a && Object.keys(a) || [])[t(305)]((r) => a[r] && Object.keys(a[r]).length > 0);
  }
  toJSON() {
    var x = s;
    return this[x(1512)];
  }
}
var Hs = { processors: {}, addPostProcessor(i) {
  var x = s;
  this.processors[i[x(712)]] = i;
}, handle(i, x, t, a, e) {
  var r = s;
  return i[r(1353)]((n) => {
    var c;
    var o = r;
    x = ((c = this[o(114)][n]) == null ? void 0 : c[o(1003)](x, t, a, e)) ?? x;
  }), x;
} };
const zr = {}, Hr = (i) => !v0(i) && typeof i !== s(325) && typeof i != "number";
class Rx extends Nx {
  constructor(x, t = {}) {
    var a = s;
    super(), Ki([a(1773), a(1971), a(267), "interpolator", a(1630), a(822), a(2077)], x, this), this.options = t, this[a(146)][a(1981)] === void 0 && (this[a(146)][a(1981)] = "."), this[a(2218)] = fe.create(a(1687));
  }
  [s(689)](x) {
    var t = s;
    x && (this[t(1923)] = x);
  }
  exists(x, t = { interpolation: {} }) {
    var a = s;
    const e = { ...t };
    if (x == null) return !1;
    const r = this.resolve(x, e);
    return (r == null ? void 0 : r[a(2237)]) !== void 0;
  }
  [s(1509)](x, t) {
    var a = s;
    let e = t[a(1704)] !== void 0 ? t[a(1704)] : this.options[a(1704)];
    e === void 0 && (e = ":");
    const r = t[a(1981)] !== void 0 ? t[a(1981)] : this[a(146)][a(1981)];
    let n = t.ns || this.options.defaultNS || [];
    const o = e && x.indexOf(e) > -1, c = !this[a(146)][a(1844)] && !t[a(1981)] && !this[a(146)][a(1123)] && !t[a(1704)] && !to(x, e, r);
    if (o && !c) {
      const u = x[a(1548)](this.interpolator[a(1377)]);
      if (u && u[a(1001)] > 0) return { key: x, namespaces: v0(n) ? [n] : n };
      const d = x[a(1464)](e);
      (e !== r || e === r && this[a(146)].ns[a(1616)](d[0]) > -1) && (n = d.shift()), x = d[a(697)](r);
    }
    return { key: x, namespaces: v0(n) ? [n] : n };
  }
  [s(1246)](x, t, a) {
    var e = s;
    let r = typeof t === e(865) ? { ...t } : t;
    if (typeof r !== e(865) && this[e(146)][e(132)] && (r = this[e(146)][e(132)](arguments)), typeof options === e(865) && (r = { ...r }), r || (r = {}), x == null) return "";
    Array[e(2305)](x) || (x = [String(x)]);
    const n = r[e(357)] !== void 0 ? r[e(357)] : this[e(146)].returnDetails, o = r[e(1981)] !== void 0 ? r[e(1981)] : this[e(146)].keySeparator, { key: c, namespaces: u } = this[e(1509)](x[x[e(1001)] - 1], r), d = u[u[e(1001)] - 1];
    let f = r[e(1704)] !== void 0 ? r[e(1704)] : this[e(146)][e(1704)];
    f === void 0 && (f = ":");
    const l = r[e(2223)] || this[e(1923)], v = r[e(737)] || this.options[e(737)];
    if ((l == null ? void 0 : l[e(1158)]()) === e(987))
      return v ? n ? { res: "" + d + f + c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: d, usedParams: this[e(587)](r) } : "" + d + f + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: d, usedParams: this[e(587)](r) } : c;
    const h = this.resolve(x, r);
    let p = h == null ? void 0 : h.res;
    const g = (h == null ? void 0 : h[e(1302)]) || c, w = (h == null ? void 0 : h[e(150)]) || c, P = [e(2028), e(2287), e(1985)], F = r[e(1553)] !== void 0 ? r[e(1553)] : this[e(146)][e(1553)], O = !this.i18nFormat || this.i18nFormat[e(1242)], R = r[e(1534)] !== void 0 && !v0(r[e(1534)]), E = Rx.hasDefaultValue(r), C = R ? this[e(267)][e(1864)](l, r[e(1534)], r) : "", D = r.ordinal && R ? this[e(267)].getSuffix(l, r.count, { ordinal: !1 }) : "", j = R && !r[e(177)] && r[e(1534)] === 0, M = j && r[e(2082) + this.options[e(554)] + e(768)] || r[e(2082) + C] || r["defaultValue" + D] || r[e(2082)];
    let q = p;
    O && !p && E && (q = M);
    const N = Hr(q), $ = Object[e(2123)][e(2345)].apply(q);
    if (O && q && N && P[e(1616)]($) < 0 && !(v0(F) && Array[e(2305)](q))) {
      if (!r[e(1114)] && !this[e(146)].returnObjects) {
        !this[e(146)][e(641)] && this[e(2218)][e(1348)](e(1916));
        const H = this[e(146)][e(641)] ? this[e(146)][e(641)](g, q, { ...r, ns: u }) : "key '" + c + " (" + this[e(1923)] + e(2453);
        return n ? (h[e(2237)] = H, h[e(104)] = this[e(587)](r), h) : H;
      }
      if (o) {
        const H = Array[e(2305)](q), V = H ? [] : {}, J = H ? w : g;
        for (const c0 in q)
          if (Object.prototype[e(2107)][e(801)](q, c0)) {
            const u0 = "" + J + o + c0;
            E && !p ? V[c0] = this[e(1246)](u0, { ...r, defaultValue: Hr(M) ? M[c0] : void 0, joinArrays: !1, ns: u }) : V[c0] = this[e(1246)](u0, { ...r, joinArrays: !1, ns: u }), V[c0] === u0 && (V[c0] = q[c0]);
          }
        p = V;
      }
    } else if (O && v0(F) && Array.isArray(p))
      p = p[e(697)](F), p && (p = this.extendTranslation(p, x, r, a));
    else {
      let H = !1, V = !1;
      !this.isValidLookup(p) && E && (H = !0, p = M), !this.isValidLookup(p) && (V = !0, p = c);
      const J = r[e(949)] || this.options.missingKeyNoValueFallbackToKey, c0 = J && V ? void 0 : p, u0 = E && M !== p && this.options[e(423)];
      if (V || H || u0) {
        if (this.logger[e(524)](e(u0 ? 1661 : 1427), l, d, c, u0 ? M : p), o) {
          const S0 = this[e(695)](c, { ...r, keySeparator: !1 });
          S0 && S0[e(2237)] && this.logger[e(1348)](e(1853));
        }
        let l0 = [];
        const i0 = this.languageUtils.getFallbackCodes(this[e(146)][e(847)], r[e(2223)] || this[e(1923)]);
        if (this[e(146)][e(1180)] === "fallback" && i0 && i0[0]) for (let S0 = 0; S0 < i0.length; S0++)
          l0.push(i0[S0]);
        else this[e(146)].saveMissingTo === e(1946) ? l0 = this[e(1971)][e(352)](r[e(2223)] || this[e(1923)]) : l0.push(r[e(2223)] || this[e(1923)]);
        const f0 = (S0, b0, M0) => {
          var A;
          var k0 = e;
          const Q0 = E && M0 !== p ? M0 : c0;
          this[k0(146)][k0(1789)] ? this[k0(146)][k0(1789)](S0, d, b0, Q0, u0, r) : (A = this[k0(1630)]) != null && A[k0(589)] && this[k0(1630)][k0(589)](S0, d, b0, Q0, u0, r), this[k0(1519)](k0(1427), S0, d, b0, p);
        };
        this[e(146)].saveMissing && (this.options.saveMissingPlurals && R ? l0[e(1353)]((S0) => {
          var b0 = e;
          const M0 = this[b0(267)][b0(1806)](S0, r);
          j && r["defaultValue" + this.options[b0(554)] + b0(768)] && M0.indexOf(this.options[b0(554)] + "zero") < 0 && M0[b0(1472)](this[b0(146)].pluralSeparator + "zero"), M0[b0(1353)]((k0) => {
            var Q0 = b0;
            f0([S0], c + k0, r[Q0(2082) + k0] || M);
          });
        }) : f0(l0, c, M));
      }
      p = this[e(1647)](p, x, r, h, a), V && p === c && this[e(146)].appendNamespaceToMissingKey && (p = "" + d + f + c), (V || H) && this.options[e(988)] && (p = this[e(146)].parseMissingKeyHandler(this.options[e(1974)] ? "" + d + f + c : c, H ? p : void 0, r));
    }
    return n ? (h.res = p, h[e(104)] = this[e(587)](r), h) : p;
  }
  [s(1647)](x, t, a, e, r) {
    var u, d;
    var n = s;
    if ((u = this[n(822)]) != null && u[n(1674)]) x = this[n(822)][n(1674)](x, { ...this[n(146)][n(2397)][n(1924)], ...a }, a.lng || this[n(1923)] || e[n(155)], e[n(508)], e[n(1302)], { resolved: e });
    else if (!a[n(2021)]) {
      a[n(2397)] && this[n(348)][n(786)]({ ...a, interpolation: { ...this[n(146)][n(2397)], ...a[n(2397)] } });
      const f = v0(x) && (((d = a == null ? void 0 : a[n(2397)]) == null ? void 0 : d[n(102)]) !== void 0 ? a[n(2397)][n(102)] : this[n(146)].interpolation.skipOnVariables);
      let l;
      if (f) {
        const h = x[n(1548)](this[n(348)].nestingRegexp);
        l = h && h.length;
      }
      let v = a[n(1638)] && !v0(a[n(1638)]) ? a[n(1638)] : a;
      if (this.options[n(2397)][n(1924)] && (v = { ...this[n(146)][n(2397)][n(1924)], ...v }), x = this[n(348)][n(1541)](x, v, a[n(2223)] || this.language || e[n(155)], a), f) {
        const h = x[n(1548)](this[n(348)][n(1377)]), p = h && h[n(1001)];
        l < p && (a.nest = !1);
      }
      !a[n(2223)] && e && e[n(2237)] && (a[n(2223)] = this[n(1923)] || e[n(155)]), a[n(1423)] !== !1 && (x = this[n(348)][n(1423)](x, (...h) => {
        var p = n;
        return (r == null ? void 0 : r[0]) === h[0] && !a[p(530)] ? (this.logger[p(1348)](p(1090) + h[0] + p(2086) + t[0]), null) : this[p(1246)](...h, t);
      }, a)), a.interpolation && this[n(348)].reset();
    }
    const o = a[n(2243)] || this[n(146)][n(2243)], c = v0(o) ? [o] : o;
    return x != null && (c != null && c.length) && a.applyPostProcessor !== !1 && (x = Hs[n(495)](c, x, t, this.options && this[n(146)][n(2194)] ? { i18nResolved: { ...e, usedParams: this[n(587)](a) }, ...a } : a, this)), x;
  }
  resolve(x, t = {}) {
    var a = s;
    let e, r, n, o, c;
    return v0(x) && (x = [x]), x[a(1353)]((u) => {
      var d = a;
      if (this[d(2087)](e)) return;
      const f = this.extractFromKey(u, t), l = f[d(477)];
      r = l;
      let v = f.namespaces;
      this[d(146)][d(547)] && (v = v[d(393)](this[d(146)][d(547)]));
      const h = t[d(1534)] !== void 0 && !v0(t[d(1534)]), p = h && !t[d(177)] && t.count === 0, g = t.context !== void 0 && (v0(t[d(530)]) || typeof t[d(530)] === d(1829)) && t[d(530)] !== "", w = t[d(2141)] ? t[d(2141)] : this[d(1971)][d(352)](t[d(2223)] || this[d(1923)], t.fallbackLng);
      v[d(1353)]((P) => {
        var O, R;
        var F = d;
        this.isValidLookup(e) || (c = P, !zr[w[0] + "-" + P] && ((O = this.utils) != null && O[F(2144)]) && !((R = this[F(2077)]) != null && R.hasLoadedNamespace(c)) && (zr[w[0] + "-" + P] = !0, this[F(2218)][F(1348)](F(1451) + r + F(121) + w[F(697)](", ") + `" won't get resolved as namespace "` + c + F(772), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), w[F(1353)]((E) => {
          var M;
          var C = F;
          if (this[C(2087)](e)) return;
          o = E;
          const D = [l];
          if ((M = this[C(822)]) != null && M[C(1297)]) this[C(822)].addLookupKeys(D, l, E, P, t);
          else {
            let q;
            h && (q = this[C(267)].getSuffix(E, t[C(1534)], t));
            const N = this[C(146)][C(554)] + C(768), $ = this[C(146)][C(554)] + C(177) + this[C(146)][C(554)];
            if (h && (D[C(1472)](l + q), t[C(177)] && q[C(1616)]($) === 0 && D[C(1472)](l + q[C(1638)]($, this.options.pluralSeparator)), p && D[C(1472)](l + N)), g) {
              const H = "" + l + this[C(146)][C(1737)] + t[C(530)];
              D[C(1472)](H), h && (D[C(1472)](H + q), t[C(177)] && q[C(1616)]($) === 0 && D[C(1472)](H + q.replace($, this[C(146)].pluralSeparator)), p && D[C(1472)](H + N));
            }
          }
          let j;
          for (; j = D[C(876)](); )
            !this[C(2087)](e) && (n = j, e = this[C(1620)](E, P, j, t));
        }));
      });
    }), { res: e, usedKey: r, exactUsedKey: n, usedLng: o, usedNS: c };
  }
  isValidLookup(x) {
    var t = s;
    return x !== void 0 && !(!this.options[t(2261)] && x === null) && !(!this[t(146)].returnEmptyString && x === "");
  }
  getResource(x, t, a, e = {}) {
    var n;
    var r = s;
    return (n = this[r(822)]) != null && n[r(1620)] ? this[r(822)].getResource(x, t, a, e) : this[r(1773)][r(1620)](x, t, a, e);
  }
  [s(587)](x = {}) {
    var t = s;
    const a = [t(2082), t(177), "context", t(1638), t(2223), t(2141), t(847), "ns", t(1981), t(1704), "returnObjects", t(357), t(1553), "postProcess", t(2397)], e = x[t(1638)] && !v0(x[t(1638)]);
    let r = e ? x[t(1638)] : x;
    if (e && typeof x[t(1534)] !== t(2108) && (r.count = x[t(1534)]), this[t(146)].interpolation.defaultVariables && (r = { ...this[t(146)][t(2397)][t(1924)], ...r }), !e) {
      r = { ...r };
      for (const n of a)
        delete r[n];
    }
    return r;
  }
  static [s(244)](x) {
    var t = s;
    const a = t(2082);
    for (const e in x)
      if (Object[t(2123)][t(2107)][t(801)](x, e) && a === e[t(552)](0, a[t(1001)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Ur {
  constructor(x) {
    var t = s;
    this.options = x, this[t(2002)] = this[t(146)][t(2002)] || !1, this[t(2218)] = fe[t(536)]("languageUtils");
  }
  [s(337)](x) {
    var t = s;
    if (x = rx(x), !x || x[t(1616)]("-") < 0) return null;
    const a = x[t(1464)]("-");
    return a[t(1001)] === 2 || (a.pop(), a[a[t(1001)] - 1][t(1158)]() === "x") ? null : this[t(258)](a[t(697)]("-"));
  }
  getLanguagePartFromCode(x) {
    var t = s;
    if (x = rx(x), !x || x[t(1616)]("-") < 0) return x;
    const a = x[t(1464)]("-");
    return this[t(258)](a[0]);
  }
  formatLanguageCode(x) {
    var t = s;
    if (v0(x) && x[t(1616)]("-") > -1) {
      let a;
      try {
        a = Intl[t(1126)](x)[0];
      } catch {
      }
      return a && this[t(146)].lowerCaseLng && (a = a[t(1158)]()), a || (this[t(146)][t(1531)] ? x[t(1158)]() : x);
    }
    return this[t(146)].cleanCode || this[t(146)].lowerCaseLng ? x[t(1158)]() : x;
  }
  [s(855)](x) {
    var t = s;
    return (this[t(146)].load === t(754) || this[t(146)][t(1922)]) && (x = this[t(1636)](x)), !this[t(2002)] || !this[t(2002)][t(1001)] || this[t(2002)][t(1616)](x) > -1;
  }
  [s(1790)](x) {
    var t = s;
    if (!x) return null;
    let a;
    return x[t(1353)]((e) => {
      var r = t;
      if (a) return;
      const n = this[r(258)](e);
      (!this[r(146)].supportedLngs || this[r(855)](n)) && (a = n);
    }), !a && this.options[t(2002)] && x[t(1353)]((e) => {
      var r = t;
      if (a) return;
      const n = this[r(337)](e);
      if (this[r(855)](n)) return a = n;
      const o = this[r(1636)](e);
      if (this.isSupportedCode(o)) return a = o;
      a = this[r(146)][r(2002)].find((c) => {
        var u = r;
        if (c === o) return c;
        if (!(c.indexOf("-") < 0 && o.indexOf("-") < 0) && (c.indexOf("-") > 0 && o.indexOf("-") < 0 && c[u(552)](0, c[u(1616)]("-")) === o || c[u(1616)](o) === 0 && o[u(1001)] > 1))
          return c;
      });
    }), a || (a = this[t(497)](this[t(146)][t(847)])[0]), a;
  }
  [s(497)](x, t) {
    var a = s;
    if (!x) return [];
    if (typeof x === a(834) && (x = x(t)), v0(x) && (x = [x]), Array[a(2305)](x)) return x;
    if (!t) return x.default || [];
    let e = x[t];
    return e || (e = x[this[a(337)](t)]), e || (e = x[this[a(258)](t)]), e || (e = x[this.getLanguagePartFromCode(t)]), e || (e = x[a(2454)]), e || [];
  }
  toResolveHierarchy(x, t) {
    var a = s;
    const e = this.getFallbackCodes((t === !1 ? [] : t) || this[a(146)][a(847)] || [], x), r = [], n = (o) => {
      var c = a;
      o && (this[c(855)](o) ? r.push(o) : this[c(2218)].warn(c(2471) + o));
    };
    return v0(x) && (x.indexOf("-") > -1 || x[a(1616)]("_") > -1) ? (this[a(146)][a(815)] !== a(754) && n(this[a(258)](x)), this[a(146)][a(815)] !== a(754) && this[a(146)][a(815)] !== a(2269) && n(this[a(337)](x)), this[a(146)][a(815)] !== a(2269) && n(this.getLanguagePartFromCode(x))) : v0(x) && n(this.formatLanguageCode(x)), e[a(1353)]((o) => {
      var c = a;
      r[c(1616)](o) < 0 && n(this[c(258)](o));
    }), r;
  }
}
const Vr = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Wr = { select: (i) => i === 1 ? s(1416) : "other", resolvedOptions: () => ({ pluralCategories: [s(1416), "other"] }) };
class ao {
  constructor(x, t = {}) {
    var a = s;
    this.languageUtils = x, this[a(146)] = t, this[a(2218)] = fe.create(a(267)), this.pluralRulesCache = {};
  }
  addRule(x, t) {
    this.rules[x] = t;
  }
  clearCache() {
    var x = s;
    this[x(416)] = {};
  }
  [s(1329)](x, t = {}) {
    var a = s;
    const e = rx(x === a(2192) ? "en" : x), r = t[a(177)] ? a(177) : a(300), n = JSON[a(1581)]({ cleanedCode: e, type: r });
    if (n in this[a(416)]) return this[a(416)][n];
    let o;
    try {
      o = new Intl[a(861)](e, { type: r });
    } catch {
      if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), Wr;
      if (!x[a(1548)](/-|_/)) return Wr;
      const u = this[a(1971)][a(1636)](x);
      o = this[a(1329)](u, t);
    }
    return this[a(416)][n] = o, o;
  }
  [s(1023)](x, t = {}) {
    var a = s;
    let e = this[a(1329)](x, t);
    return e || (e = this[a(1329)](a(2192), t)), (e == null ? void 0 : e[a(468)]()[a(1585)].length) > 1;
  }
  [s(2098)](x, t, a = {}) {
    var e = s;
    return this[e(1806)](x, a)[e(1825)]((r) => "" + t + r);
  }
  getSuffixes(x, t = {}) {
    var a = s;
    let e = this[a(1329)](x, t);
    return e || (e = this[a(1329)](a(2192), t)), e ? e[a(468)]()[a(1585)][a(779)]((r, n) => Vr[r] - Vr[n])[a(1825)]((r) => "" + this[a(146)].prepend + (t.ordinal ? a(177) + this.options[a(1160)] : "") + r) : [];
  }
  [s(1864)](x, t, a = {}) {
    var e = s;
    const r = this[e(1329)](x, a);
    return r ? "" + this[e(146)][e(1160)] + (a.ordinal ? e(177) + this[e(146)].prepend : "") + r.select(t) : (this[e(2218)][e(1348)]("no plural rule found for: " + x), this[e(1864)](e(2192), t, a));
  }
}
const Zr = (i, x, t, a = ".", e = !0) => {
  let r = Qi(i, x, t);
  return !r && e && v0(t) && (r = Kt(i, t, a), r === void 0 && (r = Kt(x, t, a))), r;
}, Vx = (i) => i[s(1638)](/\$/g, s(1363));
class so {
  constructor(x = {}) {
    var a;
    var t = s;
    this[t(2218)] = fe.create(t(348)), this.options = x, this.format = ((a = x == null ? void 0 : x.interpolation) == null ? void 0 : a[t(1678)]) || ((e) => e), this[t(786)](x);
  }
  [s(786)](x = {}) {
    var t = s;
    x.interpolation || (x.interpolation = { escapeValue: !0 });
    const { escape: a, escapeValue: e, useRawValueToEscape: r, prefix: n, prefixEscaped: o, suffix: c, suffixEscaped: u, formatSeparator: d, unescapeSuffix: f, unescapePrefix: l, nestingPrefix: v, nestingPrefixEscaped: h, nestingSuffix: p, nestingSuffixEscaped: g, nestingOptionsSeparator: w, maxReplaces: P, alwaysFormat: F } = x.interpolation;
    this[t(262)] = a !== void 0 ? a : Xi, this[t(1641)] = e !== void 0 ? e : !0, this[t(666)] = r !== void 0 ? r : !1, this.prefix = n ? ze(n) : o || "{{", this[t(2158)] = c ? ze(c) : u || "}}", this[t(1010)] = d || ",", this[t(1614)] = f ? "" : l || "-", this[t(1304)] = this[t(1614)] ? "" : f || "", this[t(1045)] = v ? ze(v) : h || ze(t(2225)), this[t(1030)] = p ? ze(p) : g || ze(")"), this[t(484)] = w || ",", this[t(1693)] = P || 1e3, this[t(459)] = F !== void 0 ? F : !1, this[t(1294)]();
  }
  [s(1487)]() {
    var x = s;
    this[x(146)] && this[x(786)](this[x(146)]);
  }
  [s(1294)]() {
    var x = s;
    const t = (a, e) => {
      var r = B;
      return (a == null ? void 0 : a[r(2217)]) === e ? (a[r(474)] = 0, a) : new RegExp(e, "g");
    };
    this[x(1545)] = t(this[x(1545)], this.prefix + x(1347) + this[x(2158)]), this[x(376)] = t(this[x(376)], "" + this[x(1324)] + this[x(1614)] + "(.+?)" + this[x(1304)] + this[x(2158)]), this[x(1377)] = t(this[x(1377)], this.nestingPrefix + x(1347) + this.nestingSuffix);
  }
  [s(1541)](x, t, a, e) {
    var h;
    var r = s;
    let n, o, c;
    const u = this[r(146)] && this[r(146)].interpolation && this.options[r(2397)][r(1924)] || {}, d = (p) => {
      var g = r;
      if (p.indexOf(this[g(1010)]) < 0) {
        const O = Zr(t, u, p, this[g(146)][g(1981)], this[g(146)][g(1204)]);
        return this.alwaysFormat ? this[g(1678)](O, void 0, a, { ...e, ...t, interpolationkey: p }) : O;
      }
      const w = p[g(1464)](this[g(1010)]), P = w[g(2142)]()[g(613)](), F = w[g(697)](this.formatSeparator).trim();
      return this.format(Zr(t, u, P, this[g(146)][g(1981)], this[g(146)][g(1204)]), F, a, { ...e, ...t, interpolationkey: P });
    };
    this[r(1294)]();
    const f = (e == null ? void 0 : e[r(112)]) || this[r(146)][r(112)], l = ((h = e == null ? void 0 : e[r(2397)]) == null ? void 0 : h.skipOnVariables) !== void 0 ? e[r(2397)][r(102)] : this[r(146)][r(2397)][r(102)];
    return [{ regex: this[r(376)], safeValue: (p) => Vx(p) }, { regex: this[r(1545)], safeValue: (p) => this[r(1641)] ? Vx(this.escape(p)) : Vx(p) }][r(1353)]((p) => {
      var g = r;
      for (c = 0; n = p[g(1516)][g(1217)](x); ) {
        const w = n[1][g(613)]();
        if (o = d(w), o === void 0)
          if (typeof f === g(834)) {
            const F = f(x, n, e);
            o = v0(F) ? F : "";
          } else if (e && Object.prototype[g(2107)][g(801)](e, w)) o = "";
          else if (l) {
            o = n[0];
            continue;
          } else this[g(2218)][g(1348)](g(1718) + w + g(1132) + x), o = "";
        else !v0(o) && !this[g(666)] && (o = Dr(o));
        const P = p[g(120)](o);
        if (x = x.replace(n[0], P), l ? (p[g(1516)][g(474)] += o.length, p[g(1516)][g(474)] -= n[0][g(1001)]) : p.regex[g(474)] = 0, c++, c >= this[g(1693)]) break;
      }
    }), x;
  }
  [s(1423)](x, t, a = {}) {
    var e = s;
    let r, n, o;
    const c = (u, d) => {
      var f = B;
      const l = this[f(484)];
      if (u[f(1616)](l) < 0) return u;
      const v = u[f(1464)](new RegExp(l + f(1478)));
      let h = "{" + v[1];
      u = v[0], h = this[f(1541)](h, o);
      const p = h[f(1548)](/'/g), g = h[f(1548)](/"/g);
      (((p == null ? void 0 : p.length) ?? 0) % 2 === 0 && !g || g[f(1001)] % 2 !== 0) && (h = h[f(1638)](/'/g, '"'));
      try {
        o = JSON[f(1674)](h), d && (o = { ...d, ...o });
      } catch (w) {
        return this[f(2218)][f(1348)]("failed parsing options string in nesting for key " + u, w), "" + u + l + h;
      }
      return o[f(2082)] && o.defaultValue[f(1616)](this[f(1324)]) > -1 && delete o[f(2082)], u;
    };
    for (; r = this[e(1377)][e(1217)](x); ) {
      let u = [];
      o = { ...a }, o = o[e(1638)] && !v0(o[e(1638)]) ? o.replace : o, o[e(886)] = !1, delete o[e(2082)];
      let d = !1;
      if (r[0][e(1616)](this[e(1010)]) !== -1 && !/{.*}/[e(2105)](r[1])) {
        const f = r[1][e(1464)](this.formatSeparator)[e(1825)]((l) => l[e(613)]());
        r[1] = f[e(2142)](), u = f, d = !0;
      }
      if (n = t(c.call(this, r[1][e(613)](), o), o), n && r[0] === x && !v0(n)) return n;
      v0(n) || (n = Dr(n)), !n && (this.logger[e(1348)](e(1105) + r[1] + e(2309) + x), n = ""), d && (n = u[e(633)]((f, l) => this[e(1678)](f, l, a[e(2223)], { ...a, interpolationkey: r[1][e(613)]() }), n[e(613)]())), x = x.replace(r[0], n), this[e(1545)][e(474)] = 0;
    }
    return x;
  }
}
const no = (i) => {
  var x = s;
  let t = i.toLowerCase()[x(613)]();
  const a = {};
  if (i[x(1616)]("(") > -1) {
    const e = i[x(1464)]("(");
    t = e[0].toLowerCase()[x(613)]();
    const r = e[1][x(552)](0, e[1][x(1001)] - 1);
    t === x(2102) && r[x(1616)](":") < 0 ? a[x(2102)] || (a[x(2102)] = r[x(613)]()) : t === x(1113) && r.indexOf(":") < 0 ? a[x(171)] || (a[x(171)] = r[x(613)]()) : r[x(1464)](";")[x(1353)]((o) => {
      var c = x;
      if (o) {
        const [u, ...d] = o.split(":"), f = d[c(697)](":").trim()[c(1638)](/^'+|'+$/g, ""), l = u[c(613)]();
        a[l] || (a[l] = f), f === c(904) && (a[l] = !1), f === c(1453) && (a[l] = !0), isNaN(f) || (a[l] = parseInt(f, 10));
      }
    });
  }
  return { formatName: t, formatOptions: a };
}, Br = (i) => {
  const x = {};
  return (t, a, e) => {
    var r = B;
    let n = e;
    e && e[r(2479)] && e[r(182)] && e.formatParams[e.interpolationkey] && e[e[r(2479)]] && (n = { ...n, [e[r(2479)]]: void 0 });
    const o = a + JSON[r(1581)](n);
    let c = x[o];
    return !c && (c = i(rx(a), e), x[o] = c), c(t);
  };
}, io = (i) => (x, t, a) => i(rx(t), a)(x);
class oo {
  constructor(x = {}) {
    var t = s;
    this[t(2218)] = fe.create(t(645)), this[t(146)] = x, this[t(786)](x);
  }
  [s(786)](x, t = { interpolation: {} }) {
    var a = s;
    this.formatSeparator = t[a(2397)][a(1010)] || ",";
    const e = t[a(1493)] ? Br : io;
    this[a(704)] = { number: e((r, n) => {
      var o = a;
      const c = new Intl[o(747)](r, { ...n });
      return (u) => c[o(1678)](u);
    }), currency: e((r, n) => {
      var o = a;
      const c = new Intl[o(747)](r, { ...n, style: "currency" });
      return (u) => c[o(1678)](u);
    }), datetime: e((r, n) => {
      const o = new Intl.DateTimeFormat(r, { ...n });
      return (c) => o.format(c);
    }), relativetime: e((r, n) => {
      var o = a;
      const c = new Intl[o(430)](r, { ...n });
      return (u) => c[o(1678)](u, n.range || o(2055));
    }), list: e((r, n) => {
      var o = a;
      const c = new Intl[o(1421)](r, { ...n });
      return (u) => c[o(1678)](u);
    }) };
  }
  [s(2121)](x, t) {
    var a = s;
    this[a(704)][x[a(1158)]()[a(613)]()] = t;
  }
  [s(2459)](x, t) {
    var a = s;
    this[a(704)][x[a(1158)]().trim()] = Br(t);
  }
  format(x, t, a, e = {}) {
    var r = s;
    const n = t[r(1464)](this[r(1010)]);
    if (n[r(1001)] > 1 && n[0][r(1616)]("(") > 1 && n[0].indexOf(")") < 0 && n.find((c) => c.indexOf(")") > -1)) {
      const c = n[r(127)]((u) => u[r(1616)](")") > -1);
      n[0] = [n[0], ...n[r(2052)](1, c)][r(697)](this.formatSeparator);
    }
    return n.reduce((c, u) => {
      var v;
      var d = r;
      const { formatName: f, formatOptions: l } = no(u);
      if (this[d(704)][f]) {
        let h = c;
        try {
          const p = ((v = e == null ? void 0 : e[d(182)]) == null ? void 0 : v[e[d(2479)]]) || {}, g = p.locale || p.lng || e[d(1097)] || e.lng || a;
          h = this[d(704)][f](c, g, { ...l, ...e, ...p });
        } catch (p) {
          this[d(2218)][d(1348)](p);
        }
        return h;
      } else this[d(2218)][d(1348)](d(945) + f);
      return c;
    }, x);
  }
}
const co = (i, x) => {
  var t = s;
  i[t(852)][x] !== void 0 && (delete i[t(852)][x], i[t(390)]--);
};
class uo extends Nx {
  constructor(x, t, a, e = {}) {
    var n, o;
    var r = s;
    super(), this[r(1369)] = x, this.store = t, this[r(1256)] = a, this[r(1971)] = a.languageUtils, this[r(146)] = e, this[r(2218)] = fe.create(r(1630)), this[r(2084)] = [], this.maxParallelReads = e[r(507)] || 10, this[r(1700)] = 0, this.maxRetries = e.maxRetries >= 0 ? e[r(1086)] : 5, this[r(1742)] = e[r(1742)] >= 1 ? e[r(1742)] : 350, this.state = {}, this.queue = [], (o = (n = this[r(1369)]) == null ? void 0 : n[r(786)]) == null || o.call(n, a, e[r(1369)], e);
  }
  [s(2044)](x, t, a, e) {
    var r = s;
    const n = {}, o = {}, c = {}, u = {};
    return x[r(1353)]((d) => {
      var f = r;
      let l = !0;
      t[f(1353)]((v) => {
        var h = f;
        const p = d + "|" + v;
        !a[h(1592)] && this.store[h(1876)](d, v) ? this[h(1865)][p] = 2 : this[h(1865)][p] < 0 || (this[h(1865)][p] === 1 ? o[p] === void 0 && (o[p] = !0) : (this[h(1865)][p] = 1, l = !1, o[p] === void 0 && (o[p] = !0), n[p] === void 0 && (n[p] = !0), u[v] === void 0 && (u[v] = !0)));
      }), l || (c[d] = !0);
    }), (Object[r(2411)](n)[r(1001)] || Object[r(2411)](o)[r(1001)]) && this.queue[r(1472)]({ pending: o, pendingCount: Object[r(2411)](o).length, loaded: {}, errors: [], callback: e }), { toLoad: Object[r(2411)](n), pending: Object[r(2411)](o), toLoadLanguages: Object[r(2411)](c), toLoadNamespaces: Object.keys(u) };
  }
  [s(1696)](x, t, a) {
    var e = s;
    const r = x[e(1464)]("|"), n = r[0], o = r[1];
    t && this[e(1519)](e(1751), n, o, t), !t && a && this[e(1639)][e(1413)](n, o, a, void 0, void 0, { skipCopy: !0 }), this.state[x] = t ? -1 : 2, t && a && (this[e(1865)][x] = 0);
    const c = {};
    this.queue[e(1353)]((u) => {
      var d = e;
      Gi(u[d(1696)], [n], o), co(u, x), t && u.errors.push(t), u[d(390)] === 0 && !u[d(2404)] && (Object[d(2411)](u.loaded)[d(1353)]((f) => {
        var l = d;
        c[f] || (c[f] = {});
        const v = u[l(1696)][f];
        v.length && v[l(1353)]((h) => {
          c[f][h] === void 0 && (c[f][h] = !0);
        });
      }), u[d(2404)] = !0, u[d(2244)].length ? u[d(2232)](u[d(2244)]) : u[d(2232)]());
    }), this[e(1519)](e(1696), c), this[e(1861)] = this.queue[e(830)]((u) => !u[e(2404)]);
  }
  read(x, t, a, e = 0, r = this[s(1742)], n) {
    var o = s;
    if (!x[o(1001)]) return n(null, {});
    if (this.readingCalls >= this[o(507)]) {
      this[o(2084)][o(1472)]({ lng: x, ns: t, fcName: a, tried: e, wait: r, callback: n });
      return;
    }
    this[o(1700)]++;
    const c = (d, f) => {
      var l = o;
      if (this[l(1700)]--, this.waitingReads.length > 0) {
        const v = this[l(2084)][l(2142)]();
        this[l(2182)](v[l(2223)], v.ns, v[l(1002)], v[l(575)], v[l(2042)], v[l(2232)]);
      }
      if (d && f && e < this[l(1086)]) {
        setTimeout(() => {
          var v = l;
          this[v(2182)][v(801)](this, x, t, a, e + 1, r * 2, n);
        }, r);
        return;
      }
      n(d, f);
    }, u = this.backend[a][o(2057)](this[o(1369)]);
    if (u.length === 2) {
      try {
        const d = u(x, t);
        d && typeof d[o(1934)] === o(834) ? d.then((f) => c(null, f))[o(303)](c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return u(x, t, c);
  }
  [s(339)](x, t, a = {}, e) {
    var r = s;
    if (!this[r(1369)]) return this[r(2218)][r(1348)](r(582)), e && e();
    v0(x) && (x = this.languageUtils[r(352)](x)), v0(t) && (t = [t]);
    const n = this.queueLoad(x, t, a, e);
    if (!n[r(2183)].length)
      return n.pending.length || e(), null;
    n[r(2183)][r(1353)]((o) => {
      var c = r;
      this[c(1319)](o);
    });
  }
  [s(815)](x, t, a) {
    this.prepareLoading(x, t, {}, a);
  }
  reload(x, t, a) {
    var e = s;
    this[e(339)](x, t, { reload: !0 }, a);
  }
  [s(1319)](x, t = "") {
    var a = s;
    const e = x[a(1464)]("|"), r = e[0], n = e[1];
    this[a(2182)](r, n, a(2182), void 0, void 0, (o, c) => {
      var u = a;
      o && this[u(2218)][u(1348)](t + u(2207) + n + u(584) + r + u(1734), o), !o && c && this[u(2218)].log(t + "loaded namespace " + n + " for language " + r, c), this[u(1696)](x, o, c);
    });
  }
  [s(589)](x, t, a, e, r, n = {}, o = () => {
  }) {
    var u, d, f, l, v;
    var c = s;
    if ((d = (u = this[c(1256)]) == null ? void 0 : u.utils) != null && d[c(2144)] && !((l = (f = this[c(1256)]) == null ? void 0 : f[c(2077)]) != null && l.hasLoadedNamespace(t))) {
      this[c(2218)].warn(c(944) + a + c(2426) + t + c(772), c(759));
      return;
    }
    if (!(a == null || a === "")) {
      if ((v = this[c(1369)]) != null && v.create) {
        const h = { ...n, isUpdate: r }, p = this[c(1369)][c(536)][c(2057)](this[c(1369)]);
        if (p.length < 6) try {
          let g;
          p[c(1001)] === 5 ? g = p(x, t, a, e, h) : g = p(x, t, a, e), g && typeof g.then === c(834) ? g[c(1934)]((w) => o(null, w))[c(303)](o) : o(null, g);
        } catch (g) {
          o(g);
        }
        else p(x, t, a, e, o, h);
      }
      !x || !x[0] || this[c(1639)].addResource(x[0], t, a, e);
    }
  }
}
const Kr = () => ({ debug: !1, initAsync: !0, ns: [s(1141)], defaultNS: [s(1141)], fallbackLng: [s(2192)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: s(1946), preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: s(2079), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (i) => {
  var x = s;
  let t = {};
  if (typeof i[1] === x(865) && (t = i[1]), v0(i[1]) && (t[x(2082)] = i[1]), v0(i[2]) && (t[x(2025)] = i[2]), typeof i[2] == "object" || typeof i[3] === x(865)) {
    const a = i[3] || i[2];
    Object[x(2411)](a)[x(1353)]((e) => {
      t[e] = a[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (i) => i, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: s(2225), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), Jr = (i) => {
  var t, a;
  var x = s;
  return v0(i.ns) && (i.ns = [i.ns]), v0(i[x(847)]) && (i[x(847)] = [i.fallbackLng]), v0(i[x(547)]) && (i[x(547)] = [i.fallbackNS]), ((a = (t = i[x(2002)]) == null ? void 0 : t[x(1616)]) == null ? void 0 : a.call(t, "cimode")) < 0 && (i[x(2002)] = i[x(2002)][x(393)]([x(987)])), typeof i.initImmediate === x(325) && (i[x(417)] = i[x(714)]), i;
}, dx = () => {
}, fo = (i) => {
  var x = s;
  Object[x(448)](Object[x(1355)](i))[x(1353)]((a) => {
    var e = x;
    typeof i[a] === e(834) && (i[a] = i[a][e(2057)](i));
  });
};
class ax extends Nx {
  constructor(x = {}, t) {
    var a = s;
    if (super(), this[a(146)] = Jr(x), this[a(1256)] = {}, this[a(2218)] = fe, this[a(1072)] = { external: [] }, fo(this), t && !this.isInitialized && !x[a(187)]) {
      if (!this.options[a(417)]) return this[a(786)](x, t), this;
      setTimeout(() => {
        var e = a;
        this[e(786)](x, t);
      }, 0);
    }
  }
  [s(786)](x = {}, t) {
    var a = s;
    this.isInitializing = !0, typeof x === a(834) && (t = x, x = {}), x[a(1972)] == null && x.ns && (v0(x.ns) ? x[a(1972)] = x.ns : x.ns[a(1616)](a(1141)) < 0 && (x[a(1972)] = x.ns[0]));
    const e = Kr();
    this.options = { ...e, ...this.options, ...Jr(x) }, this.options[a(2397)] = { ...e[a(2397)], ...this.options[a(2397)] }, x[a(1981)] !== void 0 && (this[a(146)][a(1844)] = x[a(1981)]), x.nsSeparator !== void 0 && (this[a(146)][a(1123)] = x[a(1704)]);
    const r = (d) => {
      var f = a;
      return d ? typeof d === f(834) ? new d() : d : null;
    };
    if (!this[a(146)][a(187)]) {
      this.modules[a(2218)] ? fe.init(r(this[a(1072)][a(2218)]), this[a(146)]) : fe[a(786)](null, this[a(146)]);
      let d;
      this[a(1072)][a(645)] ? d = this.modules.formatter : d = oo;
      const f = new Ur(this[a(146)]);
      this[a(1639)] = new $r(this[a(146)][a(527)], this.options);
      const l = this.services;
      l[a(2218)] = fe, l[a(1773)] = this[a(1639)], l[a(1971)] = f, l.pluralResolver = new ao(f, { prepend: this[a(146)][a(554)], simplifyPluralSuffix: this.options[a(1458)] }), d && (!this[a(146)][a(2397)][a(1678)] || this[a(146)].interpolation[a(1678)] === e[a(2397)][a(1678)]) && (l[a(645)] = r(d), l[a(645)][a(786)](l, this[a(146)]), this[a(146)].interpolation[a(1678)] = l.formatter[a(1678)].bind(l[a(645)])), l[a(348)] = new so(this[a(146)]), l.utils = { hasLoadedNamespace: this[a(2144)].bind(this) }, l[a(1630)] = new uo(r(this[a(1072)][a(1369)]), l[a(1773)], l, this[a(146)]), l[a(1630)].on("*", (v, ...h) => {
        var p = a;
        this[p(1519)](v, ...h);
      }), this.modules.languageDetector && (l[a(1318)] = r(this.modules[a(1318)]), l[a(1318)][a(786)] && l[a(1318)][a(786)](l, this.options[a(211)], this[a(146)])), this[a(1072)].i18nFormat && (l[a(822)] = r(this[a(1072)][a(822)]), l[a(822)].init && l[a(822)].init(this)), this[a(1687)] = new Rx(this[a(1256)], this.options), this.translator.on("*", (v, ...h) => {
        var p = a;
        this[p(1519)](v, ...h);
      }), this[a(1072)][a(1290)][a(1353)]((v) => {
        var h = a;
        v[h(786)] && v[h(786)](this);
      });
    }
    if (this[a(1678)] = this[a(146)][a(2397)][a(1678)], t || (t = dx), this[a(146)][a(847)] && !this.services[a(1318)] && !this[a(146)][a(2223)]) {
      const d = this[a(1256)][a(1971)][a(497)](this[a(146)][a(847)]);
      d[a(1001)] > 0 && d[0] !== a(2192) && (this[a(146)].lng = d[0]);
    }
    !this[a(1256)].languageDetector && !this[a(146)].lng && this.logger[a(1348)]("init: no languageDetector is used and no lng is defined"), [a(1620), "hasResourceBundle", "getResourceBundle", a(1838)][a(1353)]((d) => {
      this[d] = (...f) => this.store[d](...f);
    }), [a(1874), "addResources", a(1413), a(2425)][a(1353)]((d) => {
      this[d] = (...f) => {
        var l = B;
        return this[l(1639)][d](...f), this;
      };
    });
    const c = Ge(), u = () => {
      var d = a;
      const f = (l, v) => {
        var h = B;
        this[h(2444)] = !1, this[h(2118)] && !this[h(1793)] && this.logger[h(1348)](h(1759)), this.isInitialized = !0, this[h(146)][h(187)] || this.logger[h(524)]("initialized", this.options), this[h(1519)](h(1244), this[h(146)]), c[h(695)](v), t(l, v);
      };
      if (this[d(792)] && !this[d(2118)]) return f(null, this.t[d(2057)](this));
      this[d(689)](this.options[d(2223)], f);
    };
    return this.options[a(527)] || !this[a(146)][a(417)] ? u() : setTimeout(u, 0), c;
  }
  loadResources(x, t = dx) {
    var n, o;
    var a = s;
    let e = t;
    const r = v0(x) ? x : this.language;
    if (typeof x === a(834) && (e = x), !this[a(146)][a(527)] || this[a(146)].partialBundledLanguages) {
      if ((r == null ? void 0 : r[a(1158)]()) === "cimode" && (!this[a(146)][a(1128)] || this[a(146)][a(1128)][a(1001)] === 0)) return e();
      const c = [], u = (d) => {
        var f = a;
        if (!d || d === f(987)) return;
        this[f(1256)][f(1971)][f(352)](d)[f(1353)]((v) => {
          var h = f;
          v !== h(987) && c[h(1616)](v) < 0 && c[h(1472)](v);
        });
      };
      r ? u(r) : this[a(1256)][a(1971)][a(497)](this.options[a(847)])[a(1353)]((f) => u(f)), (o = (n = this.options[a(1128)]) == null ? void 0 : n[a(1353)]) == null || o.call(n, (d) => u(d)), this[a(1256)][a(1630)][a(815)](c, this[a(146)].ns, (d) => {
        var f = a;
        !d && !this[f(1930)] && this.language && this.setResolvedLanguage(this[f(1923)]), e(d);
      });
    } else e(null);
  }
  reloadResources(x, t, a) {
    var e = s;
    const r = Ge();
    return typeof x == "function" && (a = x, x = void 0), typeof t === e(834) && (a = t, t = void 0), x || (x = this[e(792)]), t || (t = this[e(146)].ns), a || (a = dx), this.services[e(1630)][e(1592)](x, t, (n) => {
      var o = e;
      r[o(695)](), a(n);
    }), r;
  }
  [s(240)](x) {
    var t = s;
    if (!x) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!x[t(399)]) throw new Error(t(877));
    return x[t(399)] === t(1369) && (this.modules[t(1369)] = x), (x[t(399)] === "logger" || x[t(524)] && x[t(1348)] && x[t(1106)]) && (this[t(1072)][t(2218)] = x), x[t(399)] === t(1318) && (this[t(1072)][t(1318)] = x), x[t(399)] === t(822) && (this[t(1072)][t(822)] = x), x[t(399)] === t(1382) && Hs[t(404)](x), x[t(399)] === "formatter" && (this[t(1072)][t(645)] = x), x[t(399)] === t(1081) && this[t(1072)][t(1290)].push(x), this;
  }
  setResolvedLanguage(x) {
    var t = s;
    if (!(!x || !this.languages) && !(["cimode", t(2192)][t(1616)](x) > -1)) {
      for (let a = 0; a < this[t(792)][t(1001)]; a++) {
        const e = this[t(792)][a];
        if (!([t(987), t(2192)][t(1616)](e) > -1) && this[t(1639)][t(2323)](e)) {
          this[t(1930)] = e;
          break;
        }
      }
      !this[t(1930)] && this[t(792)].indexOf(x) < 0 && this[t(1639)].hasLanguageSomeTranslations(x) && (this[t(1930)] = x, this.languages[t(2402)](x));
    }
  }
  [s(689)](x, t) {
    var a = s;
    this[a(2382)] = x;
    const e = Ge();
    this.emit(a(434), x);
    const r = (c) => {
      var u = a;
      this[u(1923)] = c, this[u(792)] = this[u(1256)].languageUtils[u(352)](c), this[u(1930)] = void 0, this[u(1325)](c);
    }, n = (c, u) => {
      var d = a;
      u ? this[d(2382)] === x && (r(u), this[d(1687)][d(689)](u), this[d(2382)] = void 0, this[d(1519)](d(570), u), this[d(2218)][d(524)](d(570), u)) : this.isLanguageChangingTo = void 0, e[d(695)]((...f) => this.t(...f)), t && t(c, (...f) => this.t(...f));
    }, o = (c) => {
      var l, v;
      var u = a;
      !x && !c && this.services[u(1318)] && (c = []);
      const d = v0(c) ? c : c && c[0], f = this[u(1639)][u(2323)](d) ? d : this[u(1256)][u(1971)].getBestMatchFromCodes(v0(c) ? [c] : c);
      f && (!this[u(1923)] && r(f), this[u(1687)][u(1923)] || this[u(1687)][u(689)](f), (v = (l = this[u(1256)][u(1318)]) == null ? void 0 : l.cacheUserLanguage) == null || v.call(l, f)), this[u(1118)](f, (h) => {
        n(h, f);
      });
    };
    return !x && this[a(1256)][a(1318)] && !this[a(1256)][a(1318)][a(1494)] ? o(this[a(1256)][a(1318)][a(612)]()) : !x && this[a(1256)][a(1318)] && this[a(1256)].languageDetector[a(1494)] ? this[a(1256)].languageDetector[a(612)][a(1001)] === 0 ? this[a(1256)].languageDetector[a(612)]().then(o) : this.services.languageDetector[a(612)](o) : o(x), e;
  }
  [s(2317)](x, t, a) {
    var e = s;
    const r = (n, o, ...c) => {
      var u = B;
      let d;
      typeof o !== u(865) ? d = this[u(146)][u(132)]([n, o][u(393)](c)) : d = { ...o }, d[u(2223)] = d.lng || r.lng, d[u(2141)] = d[u(2141)] || r[u(2141)], d.ns = d.ns || r.ns, d[u(2290)] !== "" && (d.keyPrefix = d.keyPrefix || a || r[u(2290)]);
      const f = this.options.keySeparator || ".";
      let l;
      return d.keyPrefix && Array[u(2305)](n) ? l = n[u(1825)]((v) => "" + d[u(2290)] + f + v) : l = d.keyPrefix ? "" + d[u(2290)] + f + n : n, this.t(l, d);
    };
    return v0(x) ? r[e(2223)] = x : r[e(2141)] = x, r.ns = t, r[e(2290)] = a, r;
  }
  t(...x) {
    var a;
    var t = s;
    return (a = this[t(1687)]) == null ? void 0 : a[t(1246)](...x);
  }
  [s(2406)](...x) {
    var a;
    var t = s;
    return (a = this[t(1687)]) == null ? void 0 : a.exists(...x);
  }
  setDefaultNamespace(x) {
    var t = s;
    this[t(146)].defaultNS = x;
  }
  [s(2144)](x, t = {}) {
    var a = s;
    if (!this[a(2118)]) return this[a(2218)][a(1348)]("hasLoadedNamespace: i18next was not initialized", this[a(792)]), !1;
    if (!this[a(792)] || !this.languages[a(1001)]) return this[a(2218)][a(1348)]("hasLoadedNamespace: i18n.languages were undefined or empty", this[a(792)]), !1;
    const e = t[a(2223)] || this.resolvedLanguage || this[a(792)][0], r = this[a(146)] ? this[a(146)][a(847)] : !1, n = this[a(792)][this[a(792)][a(1001)] - 1];
    if (e[a(1158)]() === a(987)) return !0;
    const o = (c, u) => {
      var d = a;
      const f = this[d(1256)].backendConnector[d(1865)][c + "|" + u];
      return f === -1 || f === 0 || f === 2;
    };
    if (t[a(746)]) {
      const c = t[a(746)](this, o);
      if (c !== void 0) return c;
    }
    return !!(this[a(1876)](e, x) || !this[a(1256)].backendConnector[a(1369)] || this[a(146)].resources && !this[a(146)][a(885)] || o(e, x) && (!r || o(n, x)));
  }
  [s(1591)](x, t) {
    var a = s;
    const e = Ge();
    return this[a(146)].ns ? (v0(x) && (x = [x]), x[a(1353)]((r) => {
      var n = a;
      this[n(146)].ns.indexOf(r) < 0 && this.options.ns[n(1472)](r);
    }), this[a(1118)]((r) => {
      e.resolve(), t && t(r);
    }), e) : (t && t(), Promise[a(695)]());
  }
  [s(1648)](x, t) {
    var a = s;
    const e = Ge();
    v0(x) && (x = [x]);
    const r = this[a(146)][a(1128)] || [], n = x.filter((o) => r[a(1616)](o) < 0 && this[a(1256)][a(1971)][a(855)](o));
    return n[a(1001)] ? (this.options[a(1128)] = r[a(393)](n), this[a(1118)]((o) => {
      var c = a;
      e[c(695)](), t && t(o);
    }), e) : (t && t(), Promise[a(695)]());
  }
  [s(751)](x) {
    var r, n;
    var t = s;
    if (x || (x = this[t(1930)] || (((r = this[t(792)]) == null ? void 0 : r[t(1001)]) > 0 ? this[t(792)][0] : this[t(1923)])), !x) return t(1122);
    const a = ["ar", t(566), "sqr", t(1112), "xaa", t(2187), t(1309), "aao", t(1717), "abv", "acm", t(466), t(489), t(1013), t(1637), t(1500), "ads", t(1289), "aec", t(894), t(354), t(1747), t(1362), t(1657), t(204), t(2314), t(2120), t(1392), t(2410), t(2145), t(2254), "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", t(241), t(243), t(2443), t(220), t(157), "ug", "ur", t(744), t(2212), t(725), "ji", "yi", t(2046), "men", t(1080), "fa", "jpr", "peo", "pes", t(1361), "dv", t(1893), t(492)], e = ((n = this[t(1256)]) == null ? void 0 : n.languageUtils) || new Ur(Kr());
    return a[t(1616)](e[t(1636)](x)) > -1 || x.toLowerCase()[t(1616)](t(471)) > 1 ? t(1122) : t(256);
  }
  static createInstance(x = {}, t) {
    return new ax(x, t);
  }
  [s(403)](x = {}, t = dx) {
    var a = s;
    const e = x[a(384)];
    e && delete x[a(384)];
    const r = { ...this[a(146)], ...x, isClone: !0 }, n = new ax(r);
    if ((x.debug !== void 0 || x[a(1324)] !== void 0) && (n[a(2218)] = n[a(2218)].clone(x)), [a(1639), "services", "language"][a(1353)]((c) => {
      n[c] = this[c];
    }), n.services = { ...this[a(1256)] }, n[a(1256)].utils = { hasLoadedNamespace: n[a(2144)][a(2057)](n) }, e) {
      const c = Object[a(2411)](this[a(1639)][a(1512)])[a(633)]((u, d) => {
        var f = a;
        return u[d] = { ...this[f(1639)][f(1512)][d] }, u[d] = Object[f(2411)](u[d]).reduce((l, v) => (l[v] = { ...u[d][v] }, l), u[d]), u;
      }, {});
      n.store = new $r(c, r), n[a(1256)][a(1773)] = n[a(1639)];
    }
    return n[a(1687)] = new Rx(n[a(1256)], r), n[a(1687)].on("*", (c, ...u) => {
      var d = a;
      n[d(1519)](c, ...u);
    }), n[a(786)](r, t), n[a(1687)][a(146)] = r, n[a(1687)][a(1630)][a(1256)][a(2077)] = { hasLoadedNamespace: n[a(2144)][a(2057)](n) }, n;
  }
  [s(1625)]() {
    var x = s;
    return { options: this.options, store: this[x(1639)], language: this[x(1923)], languages: this[x(792)], resolvedLanguage: this[x(1930)] };
  }
}
const X0 = ax[s(1357)]();
X0[s(1357)] = ax[s(1357)], X0[s(1357)], X0[s(751)], X0.init, X0.loadResources, X0[s(1483)], X0[s(240)], X0.changeLanguage, X0[s(2317)], X0.t, X0[s(2406)], X0.setDefaultNamespace, X0[s(2144)], X0.loadNamespaces, X0[s(1648)];
function lo() {
  var i = s;
  if (typeof navigator !== i(2108) && navigator[i(1923)]) return navigator[i(1923)] === i(1221) ? i(1221) : i(1860);
  try {
    const x = typeof require !== i(2108) ? require : void 0;
    if (x)
      return x(i(853))[i(514)][i(2296)][i(1287)]("zh") ? i(1221) : i(1860);
  } catch {
  }
  return i(1860);
}
let Us = lo();
const ho = { "zh-CN": {}, "en-US": {} };
function Jt(i) {
  var x = s;
  const t = i === x(1221) ? Zi : Bi, a = ho[i];
  return { ...t, ...a };
}
function po() {
  return Us;
}
function Gt(i, x = {}) {
  var t = s;
  let e = Jt(Us)[i];
  return e ? typeof e === t(389) ? e.replace(/\{\{(\w+)\}\}/g, (r, n) => x[n] !== void 0 ? String(x[n]) : r) : e : i;
}
const mo = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, vo = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, go = (i) => vo[i], yo = (i) => i[s(1638)](mo, go);
let Gr = { bindI18n: "languageChanged", bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", s(1982), "i", "p"], useSuspense: !0, unescape: yo };
const bo = (i = {}) => {
  Gr = { ...Gr, ...i };
}, wo = { type: s(1081), init(i) {
  var x = s;
  bo(i.options[x(1069)]);
} };
!X0[s(2118)] && X0[s(240)](wo)[s(786)]({ resources: { "zh-CN": { translation: Jt(s(1221)) }, "en-US": { translation: Jt(s(1860)) } }, lng: po(), fallbackLng: s(1860), interpolation: { escapeValue: !1 } });
const Re = [];
_e[s(2478)] = _e.widgetable || {}, _e[s(2478)][s(2121)] = function(i, x) {
  var t = s;
  typeof x === t(834) ? Re[t(1472)]([i, { formatter: x, setter: null }]) : Re[t(1472)]([i, x]);
};
function So(i, x, t) {
  var c, u, d;
  var a = s;
  const e = Re[a(305)](([f]) => {
    var l = a;
    return f == l(135);
  }), r = Re[a(305)](([f]) => {
    var l = a;
    return ar(f, i[l(399)]);
  }) || e;
  let n = !1;
  if (r) {
    const f = r[1][a(122)];
    f && (n = !!f(i, x, t));
  }
  !n && (i[a(2405)][x][a(226)] = t, (u = (c = i[a(2405)][x])[a(2232)]) == null || u.call(c, t)), (d = (T0.workflowManager || T0[a(316)][a(1892)]).activeWorkflow) == null || d[a(1738)].checkState();
}
function Cx(i) {
  var x = s;
  const t = {}, a = Re[x(305)](([e]) => {
    var r = x;
    return e == r(135);
  });
  return i[x(653)].forEach((e) => {
    var r = x;
    if (!e.widgets || e.widgets[r(1001)] == 0) return;
    const n = Re.find(([o]) => {
      var c = r;
      return ar(o, e[c(399)]);
    }) || a;
    if (n) try {
      const o = n[1][r(645)](e);
      o && (t[e.id] = o[r(2405)][r(1825)]((c) => c[r(226)]));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function Qt(i, x) {
  var r, n, o;
  var t = s;
  if (!i) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const a = i.nodes[t(1825)]((c) => {
    var u = t;
    if (c.mode != 0) return;
    const d = hx(c);
    if (!d || d[u(1287)](".") || !c[u(2405)] || c[u(2405)][u(1001)] == 0) return;
    let f = Re[u(305)](([p]) => {
      var g = u;
      return ar(p, c[g(399)]);
    });
    if (f) try {
      const p = f[1][u(645)](c);
      if (p) return p.id = c.id, p[u(2139)] = p[u(2405)].reduce((g, w) => g + (w[u(2238)] || 12), 0), p;
    } catch (p) {
      return { id: c.id, title: d, uiWeightSum: 12, widgets: [{ outputType: "error", value: Gt(u(1406), f[0]) + (p[u(456)] || p || ""), name: "", options: {} }] };
    }
    if (!d[u(1287)]("#")) return null;
    let l = c[u(2405)];
    const v = Re.find(([p]) => {
      var g = u;
      return p == g(135);
    });
    if (v) {
      const p = v[1].formatter(c);
      if (p) return Object.assign(p, { uiWeightSum: p.widgets.reduce((g, w) => g + (w[u(2238)] || 12), 0) });
    }
    const h = { id: c.id, title: d, widgets: l[u(1825)]((p) => ({ name: p[u(926)] || p.name, outputType: p[u(399)] || u(389), value: p[u(226)], options: p[u(146)] })) };
    return Object[u(1236)](h, { uiWeightSum: h[u(2405)][u(633)]((p, g) => p + (g.uiWeight || 12), 0) });
  })[t(830)](Boolean).sort((c, u) => {
    var d = t;
    let f = hx(c), l = hx(u);
    return f = f.startsWith("#") ? f[d(2349)](1).trim() : f[d(613)](), l = l.startsWith("#") ? l[d(2349)](1)[d(613)]() : l[d(613)](), f.localeCompare(l);
  }), e = ((n = (r = i[t(653)][t(305)]((c) => c.type == t(569) && c[t(2247)][t(1548)](/SD-?PPP/i))) == null ? void 0 : r.widgets[0]) == null ? void 0 : n[t(226)]) || "";
  return { widgetablePath: ((o = x.activeState.extra) == null ? void 0 : o[t(1787)]) || x[t(1048)], widgetableID: x.activeState.id, nodes: a[t(633)]((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: a.map((c) => c.id), options: {} };
}
function ar(i, x) {
  var t = s;
  const a = i.replace(/[.+^${}()|[\]\\]/g, t(1162))[t(1638)](/\*/g, ".*")[t(1638)](/\?/g, ".");
  return new RegExp("^" + a + "$")[t(2105)](x);
}
function hx(i, x = "") {
  var e;
  var t = s;
  let a = x || i[t(2247)] || "";
  return i[t(1875)] && (a[t(1287)]("#") || a[t(1287)](".")) ? i[t(1875)](t(310), a) : a = ((e = i[t(1140)]) == null ? void 0 : e[t(310)]) || a, a;
}
_e[s(2245)] = hx;
var fx = { exports: {} }, Wx, Qr;
function ko() {
  if (Qr) return Wx;
  Qr = 1;
  var i = 1e3, x = i * 60, t = x * 60, a = t * 24, e = a * 7, r = a * 365.25;
  Wx = function(d, f) {
    var l = B;
    f = f || {};
    var v = typeof d;
    if (v === l(389) && d[l(1001)] > 0) return n(d);
    if (v === l(1829) && isFinite(d)) return f.long ? c(d) : o(d);
    throw new Error(l(1504) + JSON[l(1581)](d));
  };
  function n(d) {
    var f = B;
    if (d = String(d), !(d[f(1001)] > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[f(1217)](d);
      if (l) {
        var v = parseFloat(l[1]), h = (l[2] || "ms")[f(1158)]();
        switch (h) {
          case f(2193):
          case f(1877):
          case f(655):
          case "yr":
          case "y":
            return v * r;
          case "weeks":
          case "week":
          case "w":
            return v * e;
          case f(1780):
          case f(2055):
          case "d":
            return v * a;
          case f(2030):
          case f(1024):
          case f(1846):
          case "hr":
          case "h":
            return v * t;
          case f(796):
          case "minute":
          case "mins":
          case f(1568):
          case "m":
            return v * x;
          case "seconds":
          case f(331):
          case f(948):
          case f(116):
          case "s":
            return v * i;
          case f(638):
          case f(1214):
          case "msecs":
          case f(2246):
          case "ms":
            return v;
          default:
            return;
        }
      }
    }
  }
  function o(d) {
    var f = B, l = Math[f(1570)](d);
    return l >= a ? Math[f(2346)](d / a) + "d" : l >= t ? Math[f(2346)](d / t) + "h" : l >= x ? Math[f(2346)](d / x) + "m" : l >= i ? Math[f(2346)](d / i) + "s" : d + "ms";
  }
  function c(d) {
    var f = B, l = Math[f(1570)](d);
    return l >= a ? u(d, l, a, "day") : l >= t ? u(d, l, t, "hour") : l >= x ? u(d, l, x, "minute") : l >= i ? u(d, l, i, "second") : d + f(561);
  }
  function u(d, f, l, v) {
    var h = B, p = f >= l * 1.5;
    return Math[h(2346)](d / l) + " " + v + (p ? "s" : "");
  }
  return Wx;
}
var Zx, Yr;
function Po() {
  if (Yr) return Zx;
  Yr = 1;
  function i(x) {
    var t = B;
    e[t(1111)] = e, e[t(2454)] = e, e.coerce = d, e.disable = c, e[t(1931)] = n, e[t(2352)] = u, e[t(1786)] = ko(), e[t(1816)] = f, Object[t(2411)](x)[t(1353)]((l) => {
      e[l] = x[l];
    }), e[t(2289)] = [], e[t(279)] = [], e[t(1041)] = {};
    function a(l) {
      var v = t;
      let h = 0;
      for (let p = 0; p < l[v(1001)]; p++)
        h = (h << 5) - h + l.charCodeAt(p), h |= 0;
      return e[v(215)][Math[v(1570)](h) % e[v(215)][v(1001)]];
    }
    e[t(2342)] = a;
    function e(l) {
      var v = t;
      let h, p = null, g, w;
      function P(...F) {
        var O = B;
        if (!P[O(2352)]) return;
        const R = P, E = Number(/* @__PURE__ */ new Date()), C = E - (h || E);
        R[O(2449)] = C, R.prev = h, R[O(2133)] = E, h = E, F[0] = e.coerce(F[0]), typeof F[0] !== O(389) && F[O(2402)]("%O");
        let D = 0;
        F[0] = F[0][O(1638)](/%([a-zA-Z%])/g, (M, q) => {
          var N = O;
          if (M === "%%") return "%";
          D++;
          const $ = e[N(1041)][q];
          if (typeof $ === N(834)) {
            const H = F[D];
            M = $[N(801)](R, H), F[N(2052)](D, 1), D--;
          }
          return M;
        }), e[O(486)][O(801)](R, F), (R[O(524)] || e[O(524)])[O(1720)](R, F);
      }
      return P.namespace = l, P[v(930)] = e[v(930)](), P.color = e[v(2342)](l), P[v(1224)] = r, P[v(1816)] = e[v(1816)], Object.defineProperty(P, v(2352), { enumerable: !0, configurable: !1, get: () => {
        var F = v;
        return p !== null ? p : (g !== e.namespaces && (g = e[F(2341)], w = e[F(2352)](l)), w);
      }, set: (F) => {
        p = F;
      } }), typeof e[v(786)] == "function" && e[v(786)](P), P;
    }
    function r(l, v) {
      var h = t;
      const p = e(this[h(691)] + (typeof v > "u" ? ":" : v) + l);
      return p[h(524)] = this[h(524)], p;
    }
    function n(l) {
      var v = t;
      e[v(2483)](l), e[v(2341)] = l, e[v(2289)] = [], e[v(279)] = [];
      const h = (typeof l === v(389) ? l : "").trim()[v(1638)](/\s+/g, ",")[v(1464)](",").filter(Boolean);
      for (const p of h)
        p[0] === "-" ? e[v(279)][v(1472)](p[v(2349)](1)) : e[v(2289)][v(1472)](p);
    }
    function o(l, v) {
      var h = t;
      let p = 0, g = 0, w = -1, P = 0;
      for (; p < l[h(1001)]; )
        if (g < v[h(1001)] && (v[g] === l[p] || v[g] === "*")) v[g] === "*" ? (w = g, P = p, g++) : (p++, g++);
        else if (w !== -1) g = w + 1, P++, p = P;
        else return !1;
      for (; g < v[h(1001)] && v[g] === "*"; )
        g++;
      return g === v[h(1001)];
    }
    function c() {
      var l = t;
      const v = [...e[l(2289)], ...e[l(279)][l(1825)]((h) => "-" + h)][l(697)](",");
      return e[l(1931)](""), v;
    }
    function u(l) {
      var v = t;
      for (const h of e[v(279)])
        if (o(l, h)) return !1;
      for (const h of e[v(2289)])
        if (o(l, h)) return !0;
      return !1;
    }
    function d(l) {
      var v = t;
      return l instanceof Error ? l[v(1571)] || l[v(456)] : l;
    }
    function f() {
      var l = t;
      console[l(1348)](l(297));
    }
    return e.enable(e[t(815)]()), e;
  }
  return Zx = i, Zx;
}
var Xr;
function Eo() {
  var i = s;
  return Xr ? fx.exports : (Xr = 1, function(x, t) {
    var a = B;
    t[a(486)] = r, t[a(2483)] = n, t.load = o, t[a(930)] = e, t.storage = c(), t.destroy = /* @__PURE__ */ (() => {
      let d = !1;
      return () => {
        var f = B;
        !d && (d = !0, console[f(1348)](f(297)));
      };
    })(), t.colors = [a(2162), "#0000FF", "#0033CC", a(2356), a(2266), a(1900), a(1651), "#0099FF", a(1177), "#00CC33", a(1935), "#00CC99", "#00CCCC", a(1879), a(656), "#3300FF", a(1917), "#3333FF", a(1185), "#3366FF", a(1127), "#3399FF", a(1897), a(1346), a(346), a(317), a(586), a(174), a(1390), a(1744), "#6633CC", a(2049), a(624), "#66CC33", a(1119), a(111), a(275), a(811), a(2208), a(579), "#CC0000", "#CC0033", a(703), a(1692), a(513), a(1262), a(1379), "#CC3333", "#CC3366", "#CC3399", a(115), a(2260), a(117), a(730), a(1181), a(2150), a(1529), a(2276), a(248), a(1465), "#FF0066", a(594), a(803), a(1836), a(1508), "#FF3333", a(880), a(515), a(1415), a(1926), "#FF6600", a(860), a(1841), "#FF9933", "#FFCC00", a(974)];
    function e() {
      var d = a;
      if (typeof window < "u" && window[d(1003)] && (window[d(1003)][d(399)] === d(173) || window[d(1003)][d(1736)])) return !0;
      if (typeof navigator !== d(2108) && navigator.userAgent && navigator[d(225)][d(1158)]()[d(1548)](/(edge|trident)\/(\d+)/)) return !1;
      let f;
      return typeof document !== d(2108) && document[d(1503)] && document[d(1503)].style && document[d(1503)][d(470)].WebkitAppearance || typeof window !== d(2108) && window.console && (window[d(1351)][d(1269)] || window[d(1351)].exception && window[d(1351)][d(2359)]) || typeof navigator < "u" && navigator[d(225)] && (f = navigator[d(225)].toLowerCase().match(/firefox\/(\d+)/)) && parseInt(f[1], 10) >= 31 || typeof navigator !== d(2108) && navigator.userAgent && navigator[d(225)][d(1158)]()[d(1548)](/applewebkit\/(\d+)/);
    }
    function r(d) {
      var f = a;
      if (d[0] = (this[f(930)] ? "%c" : "") + this[f(691)] + (this[f(930)] ? f(883) : " ") + d[0] + (this.useColors ? f(1313) : " ") + "+" + x[f(1213)][f(1786)](this.diff), !this[f(930)]) return;
      const l = "color: " + this[f(817)];
      d[f(2052)](1, 0, l, f(611));
      let v = 0, h = 0;
      d[0][f(1638)](/%[a-zA-Z%]/g, (p) => {
        p !== "%%" && (v++, p === "%c" && (h = v));
      }), d.splice(h, 0, l);
    }
    t[a(524)] = console[a(1111)] || console[a(524)] || (() => {
    });
    function n(d) {
      var f = a;
      try {
        d ? t[f(338)].setItem(f(1111), d) : t.storage.removeItem(f(1111));
      } catch {
      }
    }
    function o() {
      var d = a;
      let f;
      try {
        f = t.storage[d(1344)](d(1111)) || t[d(338)][d(1344)]("DEBUG");
      } catch {
      }
      return !f && typeof process !== d(2108) && "env" in process && (f = process[d(1299)].DEBUG), f;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x.exports = Po()(t);
    const { formatters: u } = x[a(1213)];
    u.j = function(d) {
      var f = a;
      try {
        return JSON[f(1581)](d);
      } catch (l) {
        return "[UnexpectedJSONParseError]: " + l[f(456)];
      }
    };
  }(fx, fx.exports), fx[i(1213)]);
}
var Io = Eo();
const Vs = $s(Io);
Vs[s(1931)]("*");
function Ro(i, x) {
  var t = s;
  const a = Vs(i), e = (r, n) => async function(...o) {
    try {
      await x({ level: r, messages: o });
    } catch {
    }
  };
  return a[t(524)] = e(t(524)), a;
}
const qx = Ro(s(2465), async ({ level: i, messages: x }) => {
  var t = s;
  const { mcpMesh: a } = await Promise.resolve()[t(1934)](() => Ac);
  await a[t(1078)](t(853))[t(1096)][t(524)]({ level: i, messages: x });
}), Yt = qx[s(1224)](s(909)), _r = /* @__PURE__ */ new Set();
C0[s(2399)](s(919), async (i) => {
  var x = s;
  return i[x(1513)][x(1353)](({ nodeID: t, widgetIndex: a, value: e }) => {
    var r = x;
    const n = T0.graph.nodes[r(305)]((o) => o.id == t);
    !n || e == n[r(2405)][a][r(226)] || So(n, a, e);
  }), { success: !0 };
}), C0[s(2399)](s(1979), async (i) => {
  var x = s;
  const { workflow_path: t } = i, a = !_r[x(1489)](t), e = i[x(1487)] || a;
  _r[x(2121)](t);
  const r = T0[x(316)][x(1892)] || T0[x(1986)], n = r[x(397)].find((c) => c[x(285)] === t || c[x(1048)] === t || c.path === x(2440) + t);
  if (!e) {
    const c = await Co(r, n);
    if (Yt(x(2064) + c), c) await Bx(r, n);
    else try {
      await o(r, n);
    } catch {
      await Bx(r, n);
    }
    return { success: !0 };
  }
  return await Bx(r, n), { success: !0 };
  async function o(c, u) {
    var d = x;
    Yt(d(1726) + u[d(1048)], u[d(2368)]), T0[d(1986)] == c ? await u.load() : (await c[d(1979)](u), await T0[d(485)](JSON[d(1674)](JSON[d(1581)](u[d(2368)])), !0, !0, u, {}));
  }
}), C0.implementAction(s(286), async function(i) {
  var x = s;
  let { workflow_content: t, workflow_path: a } = i;
  return t[x(1898)] = { ...t[x(1898)] || {}, sdppp_workflow_alias: a }, await T0[x(485)](t), { success: !0 };
}), C0[s(2399)](s(2418), async (i) => {
  var r;
  var x = s;
  const t = T0[x(1986)] || T0[x(316)][x(1892)];
  (r = t[x(1951)]) == null || r.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t[x(397)][x(1825)]((n) => n[x(1048)][x(1638)](x(2440), ""));
  try {
    const n = new Headers(), o = localStorage[x(1344)]("Comfy.userId");
    o && n.set(x(1429), o);
    const c = await fetch("./api/userdata/workflows%2F.index.json", { headers: n });
    let u = [];
    c.ok && (u = (await c[x(1109)]())[x(381)][x(1825)]((f) => f[x(1638)]("workflows/", ""))), e.sort((d, f) => {
      var l = x;
      const v = u[l(1605)](d), h = u[l(1605)](f);
      return v && !h ? -1 : !v && h ? 1 : d[l(1131)](f);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), C0[s(2399)]("saveWorkflow", async (i) => {
  var n;
  var x = s;
  const { workflow_path: t, from_sid: a } = i, e = T0[x(1986)] || T0[x(316)].workflow, r = e[x(397)][x(305)]((o) => o[x(285)] === t || o[x(1048)] === t || o[x(1048)] === "workflows/" + t);
  if (!r) throw new Error(x(1408));
  return ((n = e.activeWorkflow) == null ? void 0 : n.id) != r.id && await T0[x(1979)](t, a, !1), r[x(1738)][x(1980)](), await e[x(1093)](r), { success: !0 };
});
async function Co(i, x) {
  var e, r, n;
  var t = s;
  if (!x || !(((e = i[t(2143)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((r = x.changeTracker) != null && r[t(1980)]) try {
    x[t(1738)][t(1980)]();
  } catch (o) {
    console.warn(t(2363), o);
  }
  try {
    const o = (n = T0[t(1707)]) == null ? void 0 : n[t(1992)](), c = x[t(2383)];
    if (!o || !c) return !1;
    const u = JSON[t(1581)](o), d = JSON[t(1581)](c);
    return u !== d;
  } catch (o) {
    return console[t(1348)](t(723), o), !1;
  }
}
async function Bx(i, x) {
  var e;
  var t = s;
  Yt("performWorkflowReset: " + x[t(1048)]);
  async function a(r, n) {
    var o = t;
    T0[o(1986)] == r ? await n.load() : (await r.openWorkflow(n), await T0[o(485)](JSON[o(1674)](JSON[o(1581)](n[o(2383)])), !0, !0, n, {}));
  }
  if ((x.isOpen || (e = i[t(1436)]) != null && e.call(i, x)) && i[t(773)][t(1001)] === 1) {
    const r = i[t(1481)]();
    i.openWorkflow(r);
  } else await a(i, i.openWorkflows[0] == x ? i[t(773)][1] : i.openWorkflows[0]);
  await i[t(857)](x, !1), await new Promise((r) => requestAnimationFrame(r)), await a(i, x);
}
const Ye = qx[s(1224)]("workflow-run"), Ne = /* @__PURE__ */ new Map();
function Fo(i, x) {
  var t = s;
  const a = Ne.get(i);
  Ye(t(1662), i, x, a, Ne), a && a[t(2441)](x);
}
C0[s(2399)](s(365), async function* (i) {
  var x = s;
  let t = !1, a = [];
  function e() {
    var l = B;
    if (t) return;
    const v = Oe[l(1142)];
    Oe.queuePrompt = async (...h) => {
      var p = l;
      try {
        const g = await v[p(801)](Oe, ...h);
        return a[p(1472)]({ error: null, result: g, prompt_id: g[p(2167)] }), g;
      } catch (g) {
        throw a[p(1472)]({ error: g, result: null, prompt_id: "" }), g;
      }
    }, t = !0;
  }
  t || e();
  const r = i[x(1159)];
  let n = !1, o = {}, c = [];
  C0[x(1639)][x(795)]({ lastError: "", widgetableErrors: {} });
  try {
    a = [], await T0.queuePrompt(1, r), a.forEach((l) => {
      var h, p;
      var v = x;
      if (l.error) n = !0, o = l.error[v(2400)] ? f(l[v(1106)][v(2400)][v(1205)]) : {}, Object[v(1236)](o, { "-1": ((p = (h = l[v(1106)][v(2400)]) == null ? void 0 : h[v(1106)]) == null ? void 0 : p[v(456)]) || l[v(1106)][v(456)] });
      else {
        const g = l[v(942)][v(2167)];
        c[v(1472)](g);
        let w, P;
        const F = new Promise((R, E) => {
          w = R, P = E;
        }), O = { promise: F, resolveImage: w, rejectImage: P };
        Ne.set(g, O);
      }
    });
  } catch (l) {
    Ye(x(487), l[x(1571)]), n = !0, o = { "-1": l[x(456)] || l.toString() };
  }
  Ye(x(2250), n, o, x(529), c), n && C0[x(1639)][x(795)]({ widgetableErrors: o });
  let u = [];
  const d = /* @__PURE__ */ new Map();
  for (const l of c) {
    const v = Ne[x(1195)](l);
    v && d[x(765)](l, v[x(1260)]);
  }
  for (Ye(x(128)); d[x(1159)] > 0; ) {
    const l = Array.from(d[x(899)]()), v = l.map(([g, w]) => w[x(1934)]((P) => ({ prompt_id: g, images: P }))), { prompt_id: h, images: p } = await Promise[x(289)](v);
    Ye(x(733), h), u[x(1472)](...p), d.delete(h), Ne[x(2456)](h), yield { success: !0, prompt_ids: [h], images: p };
  }
  function f(l) {
    var v = x;
    const h = {};
    return Object[v(2411)](l).forEach((p) => {
      var g = v;
      const w = p.split(":")[0], P = T0[g(1707)].nodes[g(305)]((F) => F.id == w);
      h[w] = "[" + ((P == null ? void 0 : P[g(2247)]) || w) + "]" + l[p][g(2244)][g(1825)](JSON[g(1581)])[g(697)](`
`);
    }), h;
  }
}), C0[s(2399)](s(509), async () => {
  var i = s;
  await T0[i(1510)][i(546)](i(1861)), await T0.api[i(312)]();
  const x = Array[i(903)](Ne[i(1513)]());
  Ne[i(1332)]();
  for (const t of x)
    try {
      t[i(479)](new Error(i(842)));
    } catch {
    }
  return { success: !0 };
}), C0.implementAction(s(1026), async (i) => {
  var x = s;
  const { node_id: t, title: a } = i, e = T0[x(1707)][x(653)][x(305)]((r) => r.id == t);
  if (!e) throw new Error(x(1978));
  return e.title = a, e.setProperty(x(310), a), { success: !0 };
}), C0[s(2399)]("reboot", async () => {
  var i = s;
  const x = await fetch(i(2040));
  return x[i(1171)] == 404 ? { error: Gt(i(1779)), success: !1 } : x[i(1171)] == 200 ? { success: !0 } : { error: Gt(i(1597)) + x.statusText, success: !1 };
}), C0[s(2399)]("setComfyOrgAPIKey", async (i) => {
  var x = s;
  const { api_key: t } = i;
  return localStorage[x(1163)](x(2262), t), location.reload(), { success: !0 };
}), C0[s(2399)](s(748), async () => {
  var i = s;
  return document.querySelector(i(721)).parentElement[i(1580)](), { success: !0 };
});
const Ws = "2025-06-18", No = [Ws, "2025-03-26", s(2393), s(323)], Tx = s(2304), Zs = J0([S(), r0().int()]), Bs = S(), qo = k({ progressToken: Z(Zs) })[s(377)](), re = k({ _meta: Z(qo) })[s(377)](), ee = k({ method: S(), params: Z(re) }), nx = k({ _meta: Z(k({})[s(377)]()) }).passthrough(), pe = k({ method: S(), params: Z(nx) }), ae = k({ _meta: Z(k({})[s(377)]()) })[s(377)](), Ox = J0([S(), r0()[s(1563)]()]), Ks = k({ jsonrpc: t0(Tx), id: Ox }).merge(ee)[s(1414)](), To = (i) => Ks[s(1961)](i)[s(2203)], Js = k({ jsonrpc: t0(Tx) })[s(494)](pe)[s(1414)](), Oo = (i) => Js.safeParse(i).success, Gs = k({ jsonrpc: t0(Tx), id: Ox, result: ae })[s(1414)](), ea = (i) => Gs.safeParse(i)[s(2203)];
var ye;
(function(i) {
  var x = s;
  i[i.ConnectionClosed = -32e3] = x(1766), i[i[x(1386)] = -32001] = x(1386), i[i[x(602)] = -32700] = x(602), i[i.InvalidRequest = -32600] = "InvalidRequest", i[i[x(1405)] = -32601] = x(1405), i[i[x(2301)] = -32602] = x(2301), i[i[x(2360)] = -32603] = x(2360);
})(ye || (ye = {}));
const Qs = k({ jsonrpc: t0(Tx), id: Ox, error: k({ code: r0().int(), message: S(), data: Z(sx()) }) })[s(1414)](), Ao = (i) => Qs[s(1961)](i).success;
J0([Ks, Js, Gs, Qs]);
const Xt = ae[s(1414)](), _t = pe[s(1224)]({ method: t0(s(1144)), params: nx.extend({ requestId: Ox, reason: S()[s(1169)]() }) }), ix = k({ name: S(), title: Z(S()) })[s(377)](), Ys = ix[s(1224)]({ version: S() }), Do = k({ experimental: Z(k({}).passthrough()), sampling: Z(k({})[s(377)]()), elicitation: Z(k({}).passthrough()), roots: Z(k({ listChanged: Z(_()) })[s(377)]()) })[s(377)](), Xs = ee.extend({ method: t0(s(153)), params: re[s(1224)]({ protocolVersion: S(), capabilities: Do, clientInfo: Ys }) }), jo = k({ experimental: Z(k({})[s(377)]()), logging: Z(k({})[s(377)]()), completions: Z(k({})[s(377)]()), prompts: Z(k({ listChanged: Z(_()) })[s(377)]()), resources: Z(k({ subscribe: Z(_()), listChanged: Z(_()) })[s(377)]()), tools: Z(k({ listChanged: Z(_()) }).passthrough()) }).passthrough(), Mo = ae.extend({ protocolVersion: S(), capabilities: jo, serverInfo: Ys, instructions: Z(S()) }), _s = pe[s(1224)]({ method: t0(s(2319)) }), er = ee[s(1224)]({ method: t0(s(802)) }), Lo = k({ progress: r0(), total: Z(r0()), message: Z(S()) }).passthrough(), xr = pe[s(1224)]({ method: t0(s(1910)), params: nx[s(494)](Lo)[s(1224)]({ progressToken: Zs }) }), Ax = ee[s(1224)]({ params: re.extend({ cursor: Z(Bs) })[s(1169)]() }), Dx = ae[s(1224)]({ nextCursor: Z(Bs) }), en = k({ uri: S(), mimeType: Z(S()), _meta: Z(k({})[s(377)]()) })[s(377)](), xn = en.extend({ text: S() }), tn = en[s(1224)]({ blob: S()[s(1194)]() }), rn = ix[s(1224)]({ uri: S(), description: Z(S()), mimeType: Z(S()), _meta: Z(k({}).passthrough()) }), $o = ix[s(1224)]({ uriTemplate: S(), description: Z(S()), mimeType: Z(S()), _meta: Z(k({})[s(377)]()) }), zo = Ax[s(1224)]({ method: t0("resources/list") }), Ho = Dx[s(1224)]({ resources: R0(rn) }), Uo = Ax[s(1224)]({ method: t0(s(818)) }), Vo = Dx.extend({ resourceTemplates: R0($o) }), Wo = ee[s(1224)]({ method: t0(s(1526)), params: re[s(1224)]({ uri: S() }) }), Zo = ae.extend({ contents: R0(J0([xn, tn])) }), Bo = pe.extend({ method: t0(s(1919)) }), Ko = ee.extend({ method: t0("resources/subscribe"), params: re[s(1224)]({ uri: S() }) }), Jo = ee[s(1224)]({ method: t0("resources/unsubscribe"), params: re[s(1224)]({ uri: S() }) }), Go = pe[s(1224)]({ method: t0(s(1232)), params: nx.extend({ uri: S() }) }), Qo = k({ name: S(), description: Z(S()), required: Z(_()) }).passthrough(), Yo = ix.extend({ description: Z(S()), arguments: Z(R0(Qo)), _meta: Z(k({})[s(377)]()) }), Xo = Ax[s(1224)]({ method: t0(s(591)) }), _o = Dx[s(1224)]({ prompts: R0(Yo) }), e2 = ee.extend({ method: t0(s(2357)), params: re[s(1224)]({ name: S(), arguments: Z(U0(S())) }) }), sr = k({ type: t0(s(702)), text: S(), _meta: Z(k({}).passthrough()) }).passthrough(), nr = k({ type: t0(s(874)), data: S()[s(1194)](), mimeType: S(), _meta: Z(k({})[s(377)]()) })[s(377)](), ir = k({ type: t0(s(1455)), data: S().base64(), mimeType: S(), _meta: Z(k({})[s(377)]()) })[s(377)](), x2 = k({ type: t0(s(1343)), resource: J0([xn, tn]), _meta: Z(k({})[s(377)]()) })[s(377)](), t2 = rn[s(1224)]({ type: t0("resource_link") }), an = J0([sr, nr, ir, t2, x2]), r2 = k({ role: F0([s(2280), s(2154)]), content: an })[s(377)](), a2 = ae[s(1224)]({ description: Z(S()), messages: R0(r2) }), s2 = pe[s(1224)]({ method: t0(s(871)) }), n2 = k({ title: Z(S()), readOnlyHint: Z(_()), destructiveHint: Z(_()), idempotentHint: Z(_()), openWorldHint: Z(_()) })[s(377)](), i2 = ix[s(1224)]({ description: Z(S()), inputSchema: k({ type: t0(s(865)), properties: Z(k({})[s(377)]()), required: Z(R0(S())) })[s(377)](), outputSchema: Z(k({ type: t0(s(865)), properties: Z(k({})[s(377)]()), required: Z(R0(S())) })[s(377)]()), annotations: Z(n2), _meta: Z(k({})[s(377)]()) }), o2 = Ax[s(1224)]({ method: t0(s(1850)) }), c2 = Dx.extend({ tools: R0(i2) }), sn = ae.extend({ content: R0(an)[s(2454)]([]), structuredContent: k({})[s(377)]().optional(), isError: Z(_()) });
sn.or(ae[s(1224)]({ toolResult: sx() }));
const u2 = ee[s(1224)]({ method: t0(s(476)), params: re[s(1224)]({ name: S(), arguments: Z(U0(sx())) }) }), d2 = pe.extend({ method: t0(s(1008)) }), nn = F0([s(1111), s(1400), "notice", "warning", "error", "critical", "alert", s(937)]), f2 = ee.extend({ method: t0("logging/setLevel"), params: re[s(1224)]({ level: nn }) }), l2 = pe[s(1224)]({ method: t0("notifications/message"), params: nx[s(1224)]({ level: nn, logger: Z(S()), data: sx() }) }), h2 = k({ name: S().optional() }).passthrough(), p2 = k({ hints: Z(R0(h2)), costPriority: Z(r0().min(0)[s(1468)](1)), speedPriority: Z(r0()[s(1568)](0)[s(1468)](1)), intelligencePriority: Z(r0()[s(1568)](0)[s(1468)](1)) }).passthrough(), m2 = k({ role: F0([s(2280), s(2154)]), content: J0([sr, nr, ir]) })[s(377)](), v2 = ee[s(1224)]({ method: t0(s(1116)), params: re[s(1224)]({ messages: R0(m2), systemPrompt: Z(S()), includeContext: Z(F0(["none", s(472), s(1715)])), temperature: Z(r0()), maxTokens: r0()[s(1563)](), stopSequences: Z(R0(S())), metadata: Z(k({})[s(377)]()), modelPreferences: Z(p2) }) }), on = ae.extend({ model: S(), stopReason: Z(F0([s(1352), s(193), s(859)]).or(S())), role: F0([s(2280), s(2154)]), content: Ms(s(399), [sr, nr, ir]) }), g2 = k({ type: t0(s(325)), title: Z(S()), description: Z(S()), default: Z(_()) })[s(377)](), y2 = k({ type: t0("string"), title: Z(S()), description: Z(S()), minLength: Z(r0()), maxLength: Z(r0()), format: Z(F0([s(2338), s(2029), "date", s(1226)])) })[s(377)](), b2 = k({ type: F0([s(1829), s(2472)]), title: Z(S()), description: Z(S()), minimum: Z(r0()), maximum: Z(r0()) })[s(377)](), w2 = k({ type: t0(s(389)), title: Z(S()), description: Z(S()), enum: R0(S()), enumNames: Z(R0(S())) }).passthrough(), S2 = J0([g2, y2, b2, w2]), k2 = ee.extend({ method: t0(s(395)), params: re[s(1224)]({ message: S(), requestedSchema: k({ type: t0("object"), properties: U0(S(), S2), required: Z(R0(S())) }).passthrough() }) }), cn = ae.extend({ action: F0([s(1320), "decline", s(1729)]), content: Z(U0(S(), sx())) }), P2 = k({ type: t0(s(1506)), uri: S() }).passthrough(), E2 = k({ type: t0("ref/prompt"), name: S() })[s(377)](), I2 = ee[s(1224)]({ method: t0(s(858)), params: re[s(1224)]({ ref: J0([E2, P2]), argument: k({ name: S(), value: S() }).passthrough(), context: Z(k({ arguments: Z(U0(S(), S())) })) }) }), R2 = ae.extend({ completion: k({ values: R0(S())[s(1468)](100), total: Z(r0()[s(1563)]()), hasMore: Z(_()) }).passthrough() }), C2 = k({ uri: S()[s(1287)](s(787)), name: Z(S()), _meta: Z(k({})[s(377)]()) }).passthrough(), F2 = ee.extend({ method: t0("roots/list") }), un = ae[s(1224)]({ roots: R0(C2) }), N2 = pe.extend({ method: t0("notifications/roots/list_changed") });
J0([er, Xs, I2, f2, e2, Xo, zo, Uo, Wo, Ko, Jo, u2, o2]), J0([_t, xr, _s, N2]), J0([Xt, on, cn, un]), J0([er, v2, k2, F2]), J0([_t, xr, l2, Go, Bo, d2, s2]), J0([Xt, Mo, R2, a2, _o, Ho, Vo, Zo, sn, c2]);
class Te extends Error {
  constructor(x, t, a) {
    var e = s;
    super("MCP error " + x + ": " + t), this.code = x, this[e(1512)] = a, this.name = e(1017);
  }
}
const q2 = 6e4;
class T2 {
  constructor(x) {
    var t = s;
    this[t(2076)] = x, this[t(2271)] = 0, this[t(2178)] = /* @__PURE__ */ new Map(), this[t(1094)] = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this[t(461)] = /* @__PURE__ */ new Map(), this[t(2268)] = /* @__PURE__ */ new Map(), this[t(2066)] = /* @__PURE__ */ new Map(), this[t(2148)] = /* @__PURE__ */ new Set(), this[t(700)](_t, (a) => {
      var e = t;
      const r = this[e(1094)].get(a[e(1063)][e(1659)]);
      r == null || r[e(1202)](a[e(1063)][e(1540)]);
    }), this[t(700)](xr, (a) => {
      var e = t;
      this[e(636)](a);
    }), this[t(190)](er, (a) => ({}));
  }
  [s(1847)](x, t, a, e, r = !1) {
    var n = s;
    this[n(2066)][n(765)](x, { timeoutId: setTimeout(e, t), startTime: Date.now(), timeout: t, maxTotalTimeout: a, resetTimeoutOnProgress: r, onTimeout: e });
  }
  [s(2041)](x) {
    var t = s;
    const a = this._timeoutInfo.get(x);
    if (!a) return !1;
    const e = Date[t(1340)]() - a[t(1197)];
    if (a[t(1235)] && e >= a[t(1235)])
      throw this[t(2066)][t(2456)](x), new Te(ye[t(1386)], t(1577), { maxTotalTimeout: a[t(1235)], totalElapsed: e });
    return clearTimeout(a[t(1314)]), a[t(1314)] = setTimeout(a.onTimeout, a[t(800)]), !0;
  }
  [s(1129)](x) {
    var t = s;
    const a = this[t(2066)][t(1195)](x);
    a && (clearTimeout(a[t(1314)]), this._timeoutInfo[t(2456)](x));
  }
  async [s(1166)](x) {
    var t = s, a, e, r;
    this[t(2146)] = x;
    const n = (a = this[t(2315)]) === null || a === void 0 ? void 0 : a[t(2122)];
    this._transport.onclose = () => {
      n == null || n(), this._onclose();
    };
    const o = (e = this[t(2315)]) === null || e === void 0 ? void 0 : e[t(2299)];
    this[t(2146)][t(2299)] = (u) => {
      var d = t;
      o == null || o(u), this[d(2311)](u);
    };
    const c = (r = this[t(2146)]) === null || r === void 0 ? void 0 : r[t(1618)];
    this[t(2146)][t(1618)] = (u, d) => {
      var f = t;
      c == null || c(u, d), ea(u) || Ao(u) ? this._onresponse(u) : To(u) ? this[f(2335)](u, d) : Oo(u) ? this._onnotification(u) : this[f(2311)](new Error("Unknown message type: " + JSON[f(1581)](u)));
    }, await this._transport[t(1216)]();
  }
  [s(1663)]() {
    var x = s, t;
    const a = this._responseHandlers;
    this[x(461)] = /* @__PURE__ */ new Map(), this[x(2268)][x(1332)](), this[x(2148)].clear(), this._transport = void 0, (t = this[x(2122)]) === null || t === void 0 || t.call(this);
    const e = new Te(ye[x(1766)], x(2227));
    for (const r of a[x(1513)]())
      r(e);
  }
  [s(2311)](x) {
    var t = s, a;
    (a = this[t(2299)]) === null || a === void 0 || a[t(801)](this, x);
  }
  [s(2088)](x) {
    var t = s, a;
    const e = (a = this._notificationHandlers[t(1195)](x[t(302)])) !== null && a !== void 0 ? a : this[t(1350)];
    e !== void 0 && Promise[t(695)]()[t(1934)](() => e(x))[t(303)]((r) => this[t(2311)](new Error(t(1420) + r)));
  }
  _onrequest(x, t) {
    var a = s, e, r, n, o;
    const c = (e = this[a(2178)][a(1195)](x[a(302)])) !== null && e !== void 0 ? e : this[a(1176)];
    if (c === void 0) {
      (r = this[a(2146)]) === null || r === void 0 || r[a(1888)]({ jsonrpc: "2.0", id: x.id, error: { code: ye[a(1405)], message: a(2036) } })[a(303)]((f) => this[a(2311)](new Error(a(1396) + f)));
      return;
    }
    const u = new AbortController();
    this[a(1094)][a(765)](x.id, u);
    const d = { signal: u[a(2318)], sessionId: (n = this[a(2146)]) === null || n === void 0 ? void 0 : n[a(889)], _meta: (o = x[a(1063)]) === null || o === void 0 ? void 0 : o[a(1936)], sendNotification: (f) => this[a(398)](f, { relatedRequestId: x.id }), sendRequest: (f, l, v) => this[a(2355)](f, l, { ...v, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t[a(674)], requestId: x.id, requestInfo: t == null ? void 0 : t[a(1905)] };
    Promise[a(695)]()[a(1934)](() => c(x, d)).then((f) => {
      var l = a, v;
      if (!u[l(2318)][l(2423)])
        return (v = this[l(2146)]) === null || v === void 0 ? void 0 : v[l(1888)]({ result: f, jsonrpc: l(2304), id: x.id });
    }, (f) => {
      var l = a, v, h;
      if (!u[l(2318)][l(2423)])
        return (v = this[l(2146)]) === null || v === void 0 ? void 0 : v.send({ jsonrpc: l(2304), id: x.id, error: { code: Number[l(234)](f[l(1993)]) ? f.code : ye[l(2360)], message: (h = f[l(456)]) !== null && h !== void 0 ? h : l(2442) } });
    })[a(303)]((f) => this[a(2311)](new Error(a(1057) + f))).finally(() => {
      this._requestHandlerAbortControllers.delete(x.id);
    });
  }
  [s(636)](x) {
    var t = s;
    const { progressToken: a, ...e } = x[t(1063)], r = Number(a), n = this[t(2268)][t(1195)](r);
    if (!n) {
      this[t(2311)](new Error(t(760) + JSON[t(1581)](x)));
      return;
    }
    const o = this._responseHandlers[t(1195)](r), c = this._timeoutInfo.get(r);
    if (c && o && c.resetTimeoutOnProgress) try {
      this[t(2041)](r);
    } catch (u) {
      o(u);
      return;
    }
    n(e);
  }
  _onresponse(x) {
    var t = s;
    const a = Number(x.id), e = this[t(461)][t(1195)](a);
    if (e === void 0) {
      this[t(2311)](new Error(t(2224) + JSON.stringify(x)));
      return;
    }
    if (this[t(461)][t(2456)](a), this[t(2268)][t(2456)](a), this._cleanupTimeout(a), ea(x)) e(x);
    else {
      const r = new Te(x[t(1106)][t(1993)], x.error.message, x.error[t(1512)]);
      e(r);
    }
  }
  get transport() {
    var x = s;
    return this[x(2146)];
  }
  async [s(618)]() {
    var x = s, t;
    await ((t = this[x(2146)]) === null || t === void 0 ? void 0 : t[x(618)]());
  }
  [s(2355)](x, t, a) {
    const { relatedRequestId: e, resumptionToken: r, onresumptiontoken: n } = a ?? {};
    return new Promise((o, c) => {
      var u = B, d, f, l, v, h, p;
      if (!this._transport) {
        c(new Error(u(2484)));
        return;
      }
      ((d = this[u(2076)]) === null || d === void 0 ? void 0 : d[u(969)]) === !0 && this[u(1417)](x[u(302)]), (f = a == null ? void 0 : a[u(2318)]) === null || f === void 0 || f[u(634)]();
      const g = this[u(2271)]++, w = { ...x, jsonrpc: "2.0", id: g };
      a != null && a.onprogress && (this._progressHandlers[u(765)](g, a[u(541)]), w.params = { ...x[u(1063)], _meta: { ...((l = x.params) === null || l === void 0 ? void 0 : l[u(1936)]) || {}, progressToken: g } });
      const P = (R) => {
        var E = u, C;
        this[E(461)][E(2456)](g), this[E(2268)][E(2456)](g), this[E(1129)](g), (C = this[E(2146)]) === null || C === void 0 || C[E(1888)]({ jsonrpc: "2.0", method: E(1144), params: { requestId: g, reason: String(R) } }, { relatedRequestId: e, resumptionToken: r, onresumptiontoken: n })[E(303)]((D) => this._onerror(new Error(E(1589) + D))), c(R);
      };
      this[u(461)][u(765)](g, (R) => {
        var E = u, C;
        if (!(!((C = a == null ? void 0 : a[E(2318)]) === null || C === void 0) && C[E(2423)])) {
          if (R instanceof Error) return c(R);
          try {
            const D = t[E(1674)](R[E(942)]);
            o(D);
          } catch (D) {
            c(D);
          }
        }
      }), (v = a == null ? void 0 : a[u(2318)]) === null || v === void 0 || v[u(867)](u(1202), () => {
        var R = u, E;
        P((E = a == null ? void 0 : a[R(2318)]) === null || E === void 0 ? void 0 : E[R(1540)]);
      });
      const F = (h = a == null ? void 0 : a[u(800)]) !== null && h !== void 0 ? h : q2, O = () => P(new Te(ye[u(1386)], u(1723), { timeout: F }));
      this[u(1847)](g, F, a == null ? void 0 : a.maxTotalTimeout, O, (p = a == null ? void 0 : a.resetTimeoutOnProgress) !== null && p !== void 0 ? p : !1), this[u(2146)].send(w, { relatedRequestId: e, resumptionToken: r, onresumptiontoken: n }).catch((R) => {
        var E = u;
        this[E(1129)](g), c(R);
      });
    });
  }
  async [s(398)](x, t) {
    var a = s, e, r;
    if (!this[a(2146)]) throw new Error(a(2484));
    if (this.assertNotificationCapability(x[a(302)]), ((r = (e = this[a(2076)]) === null || e === void 0 ? void 0 : e[a(846)]) !== null && r !== void 0 ? r : [])[a(1605)](x.method) && !x.params && !(t != null && t.relatedRequestId)) {
      if (this[a(2148)][a(1489)](x[a(302)])) return;
      this[a(2148)].add(x[a(302)]), Promise[a(695)]()[a(1934)](() => {
        var u = a, d;
        if (this._pendingDebouncedNotifications[u(2456)](x.method), !this[u(2146)]) return;
        const f = { ...x, jsonrpc: u(2304) };
        (d = this[u(2146)]) === null || d === void 0 || d.send(f, t)[u(303)]((l) => this[u(2311)](l));
      });
      return;
    }
    const c = { ...x, jsonrpc: a(2304) };
    await this[a(2146)][a(1888)](c, t);
  }
  [s(190)](x, t) {
    var a = s;
    const e = x[a(469)][a(302)][a(226)];
    this[a(2202)](e), this._requestHandlers[a(765)](e, (r, n) => {
      var o = a;
      return Promise[o(695)](t(x[o(1674)](r), n));
    });
  }
  removeRequestHandler(x) {
    var t = s;
    this[t(2178)][t(2456)](x);
  }
  [s(1298)](x) {
    var t = s;
    if (this[t(2178)].has(x)) throw new Error(t(2095) + x + " already exists, which would be overridden");
  }
  [s(700)](x, t) {
    var a = s;
    this[a(2324)][a(765)](x[a(469)][a(302)][a(226)], (e) => Promise[a(695)](t(x[a(1674)](e))));
  }
  removeNotificationHandler(x) {
    var t = s;
    this[t(2324)][t(2456)](x);
  }
}
function O2(i, x) {
  var t = s;
  return Object[t(899)](x)[t(633)]((a, [e, r]) => {
    var n = t;
    return r && typeof r === n(865) ? a[e] = a[e] ? { ...a[e], ...r } : r : a[e] = r, a;
  }, { ...i });
}
var Xe = { exports: {} }, A2 = Xe[s(1213)], xa;
function D2() {
  var i = s;
  return xa || (xa = 1, function(x, t) {
    (function(a, e) {
      e(t);
    })(A2, function(a) {
      var e = B;
      function r() {
        for (var I = B, m = arguments[I(1001)], y = Array(m), b = 0; b < m; b++)
          y[b] = arguments[b];
        if (y[I(1001)] > 1) {
          y[0] = y[0][I(2349)](0, -1);
          for (var U = y[I(1001)] - 1, L = 1; L < U; ++L)
            y[L] = y[L][I(2349)](1, -1);
          return y[U] = y[U][I(2349)](1), y[I(697)]("");
        } else return y[0];
      }
      function n(I) {
        var m = B;
        return m(2010) + I + ")";
      }
      function o(I) {
        var m = B;
        return I === void 0 ? m(2108) : I === null ? m(2348) : Object.prototype[m(2345)][m(801)](I)[m(1464)](" ")[m(876)]()[m(1464)]("]")[m(2142)]()[m(1158)]();
      }
      function c(I) {
        var m = B;
        return I[m(188)]();
      }
      function u(I) {
        var m = B;
        return I != null ? I instanceof Array ? I : typeof I[m(1001)] !== m(1829) || I[m(1464)] || I[m(2434)] || I[m(801)] ? [I] : Array[m(2123)][m(2349)][m(801)](I) : [];
      }
      function d(I, m) {
        var y = I;
        if (m) for (var b in m)
          y[b] = m[b];
        return y;
      }
      function f(I) {
        var m = B, y = m(2231), b = m(2272), U = r(b, m(1372)), L = n(n(m(1100) + U + "%" + U + U + "%" + U + U) + "|" + n("%[89A-Fa-f]" + U + "%" + U + U) + "|" + n("%" + U + U)), n0 = "[\\:\\/\\?\\#\\[\\]\\@]", d0 = m(884), P0 = r(n0, d0), j0 = I ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", W0 = I ? "[\\uE000-\\uF8FF]" : "[]", E0 = r(y, b, m(2067), j0);
        n(y + r(y, b, m(1257)) + "*"), n(n(L + "|" + r(E0, d0, "[\\:]")) + "*");
        var D0 = n(n(m(1938)) + "|" + n("2[0-4]" + b) + "|" + n("1" + b + b) + "|" + n("0?[1-9]" + b) + "|0?0?" + b), Z0 = n(D0 + "\\." + D0 + "\\." + D0 + "\\." + D0), g0 = n(U + m(1393)), z0 = n(n(g0 + "\\:" + g0) + "|" + Z0), B0 = n(n(g0 + "\\:") + m(975) + z0), H0 = n(m(1407) + n(g0 + "\\:") + "{5}" + z0), ke = n(n(g0) + m(1336) + n(g0 + "\\:") + m(463) + z0), oe = n(n(n(g0 + "\\:") + m(388) + g0) + "?\\:\\:" + n(g0 + "\\:") + m(775) + z0), ce = n(n(n(g0 + "\\:") + m(614) + g0) + "?\\:\\:" + n(g0 + "\\:") + "{2}" + z0), $e = n(n(n(g0 + "\\:") + m(1606) + g0) + m(1336) + g0 + "\\:" + z0), Ce = n(n(n(g0 + "\\:") + m(328) + g0) + m(1336) + z0), xe = n(n(n(g0 + "\\:") + m(2278) + g0) + m(1336) + g0), ue = n(n(n(g0 + "\\:") + m(2432) + g0) + m(1336)), ve = n([B0, H0, ke, oe, ce, $e, Ce, xe, ue][m(697)]("|")), Pe = n(n(E0 + "|" + L) + "+");
        n(m(1856) + U + "+\\." + r(E0, d0, "[\\:]") + "+"), n(n(L + "|" + r(E0, d0)) + "*");
        var de = n(L + "|" + r(E0, d0, "[\\:\\@]"));
        return n(n(L + "|" + r(E0, d0, "[\\@]")) + "+"), n(n(de + "|" + r(m(130), W0)) + "*"), { NOT_SCHEME: new RegExp(r(m(165), y, b, "[\\+\\-\\.]"), "g"), NOT_USERINFO: new RegExp(r(m(230), E0, d0), "g"), NOT_HOST: new RegExp(r(m(1564), E0, d0), "g"), NOT_PATH: new RegExp(r("[^\\%\\/\\:\\@]", E0, d0), "g"), NOT_PATH_NOSCHEME: new RegExp(r(m(1434), E0, d0), "g"), NOT_QUERY: new RegExp(r(m(1511), E0, d0, m(136), W0), "g"), NOT_FRAGMENT: new RegExp(r("[^\\%]", E0, d0, m(136)), "g"), ESCAPE: new RegExp(r(m(165), E0, d0), "g"), UNRESERVED: new RegExp(E0, "g"), OTHER_CHARS: new RegExp(r(m(1511), E0, P0), "g"), PCT_ENCODED: new RegExp(L, "g"), IPV4ADDRESS: new RegExp("^(" + Z0 + ")$"), IPV6ADDRESS: new RegExp(m(2063) + ve + ")" + n(n(m(1190) + U + "{2})") + "(" + Pe + ")") + m(291)) };
      }
      var l = f(!1), v = f(!0), h = /* @__PURE__ */ function() {
        function I(m, y) {
          var b = B, U = [], L = !0, n0 = !1, d0 = void 0;
          try {
            for (var P0 = m[Symbol[b(1062)]](), j0; !(L = (j0 = P0.next())[b(2404)]) && (U[b(1472)](j0.value), !(y && U[b(1001)] === y)); L = !0)
              ;
          } catch (W0) {
            n0 = !0, d0 = W0;
          } finally {
            try {
              !L && P0[b(1566)] && P0[b(1566)]();
            } finally {
              if (n0) throw d0;
            }
          }
          return U;
        }
        return function(m, y) {
          var b = B;
          if (Array[b(2305)](m)) return m;
          if (Symbol[b(1062)] in Object(m)) return I(m, y);
          throw new TypeError(b(197));
        };
      }(), p = function(I) {
        var m = B;
        if (Array[m(2305)](I)) {
          for (var y = 0, b = Array(I.length); y < I[m(1001)]; y++) b[y] = I[y];
          return b;
        } else return Array.from(I);
      }, g = 2147483647, w = 36, P = 1, F = 26, O = 38, R = 700, E = 72, C = 128, D = "-", j = /^xn--/, M = /[^\0-\x7E]/, q = /[\x2E\u3002\uFF0E\uFF61]/g, N = { overflow: e(1863), "not-basic": e(1882), "invalid-input": e(2116) }, $ = w - P, H = Math[e(1728)], V = String[e(1909)];
      function J(I) {
        throw new RangeError(N[I]);
      }
      function c0(I, m) {
        for (var y = [], b = I.length; b--; )
          y[b] = m(I[b]);
        return y;
      }
      function u0(I, m) {
        var y = e, b = I[y(1464)]("@"), U = "";
        b.length > 1 && (U = b[0] + "@", I = b[1]), I = I[y(1638)](q, ".");
        var L = I.split("."), n0 = c0(L, m)[y(697)](".");
        return U + n0;
      }
      function l0(I) {
        for (var m = e, y = [], b = 0, U = I[m(1001)]; b < U; ) {
          var L = I[m(195)](b++);
          if (L >= 55296 && L <= 56319 && b < U) {
            var n0 = I[m(195)](b++);
            (n0 & 64512) == 56320 ? y[m(1472)](((L & 1023) << 10) + (n0 & 1023) + 65536) : (y[m(1472)](L), b--);
          } else y[m(1472)](L);
        }
        return y;
      }
      var i0 = function(m) {
        var y = e;
        return String.fromCodePoint[y(1720)](String, p(m));
      }, f0 = function(m) {
        return m - 48 < 10 ? m - 22 : m - 65 < 26 ? m - 65 : m - 97 < 26 ? m - 97 : w;
      }, S0 = function(m, y) {
        return m + 22 + 75 * (m < 26) - ((y != 0) << 5);
      }, b0 = function(m, y, b) {
        var U = 0;
        for (m = b ? H(m / R) : m >> 1, m += H(m / y); m > $ * F >> 1; U += w)
          m = H(m / $);
        return H(U + ($ + 1) * m / (m + O));
      }, M0 = function(m) {
        var y = e, b = [], U = m[y(1001)], L = 0, n0 = C, d0 = E, P0 = m[y(1752)](D);
        P0 < 0 && (P0 = 0);
        for (var j0 = 0; j0 < P0; ++j0)
          m[y(195)](j0) >= 128 && J(y(567)), b.push(m[y(195)](j0));
        for (var W0 = P0 > 0 ? P0 + 1 : 0; W0 < U; ) {
          for (var E0 = L, D0 = 1, Z0 = w; ; Z0 += w) {
            W0 >= U && J(y(2279));
            var g0 = f0(m[y(195)](W0++));
            (g0 >= w || g0 > H((g - L) / D0)) && J(y(106)), L += g0 * D0;
            var z0 = Z0 <= d0 ? P : Z0 >= d0 + F ? F : Z0 - d0;
            if (g0 < z0) break;
            var B0 = w - z0;
            D0 > H(g / B0) && J("overflow"), D0 *= B0;
          }
          var H0 = b.length + 1;
          d0 = b0(L - E0, H0, E0 == 0), H(L / H0) > g - n0 && J(y(106)), n0 += H(L / H0), L %= H0, b[y(2052)](L++, 0, n0);
        }
        return String.fromCodePoint[y(1720)](String, b);
      }, k0 = function(m) {
        var y = e, b = [];
        m = l0(m);
        var U = m[y(1001)], L = C, n0 = 0, d0 = E, P0 = !0, j0 = !1, W0 = void 0;
        try {
          for (var E0 = m[Symbol[y(1062)]](), D0; !(P0 = (D0 = E0[y(2078)]())[y(2404)]); P0 = !0) {
            var Z0 = D0[y(226)];
            Z0 < 128 && b[y(1472)](V(Z0));
          }
        } catch (Je) {
          j0 = !0, W0 = Je;
        } finally {
          try {
            !P0 && E0[y(1566)] && E0[y(1566)]();
          } finally {
            if (j0) throw W0;
          }
        }
        var g0 = b.length, z0 = g0;
        for (g0 && b[y(1472)](D); z0 < U; ) {
          var B0 = g, H0 = !0, ke = !1, oe = void 0;
          try {
            for (var ce = m[Symbol.iterator](), $e; !(H0 = ($e = ce.next())[y(2404)]); H0 = !0) {
              var Ce = $e.value;
              Ce >= L && Ce < B0 && (B0 = Ce);
            }
          } catch (Je) {
            ke = !0, oe = Je;
          } finally {
            try {
              !H0 && ce[y(1566)] && ce[y(1566)]();
            } finally {
              if (ke) throw oe;
            }
          }
          var xe = z0 + 1;
          B0 - L > H((g - n0) / xe) && J(y(106)), n0 += (B0 - L) * xe, L = B0;
          var ue = !0, ve = !1, Pe = void 0;
          try {
            for (var de = m[Symbol.iterator](), yr; !(ue = (yr = de[y(2078)]())[y(2404)]); ue = !0) {
              var br = yr.value;
              if (br < L && ++n0 > g && J("overflow"), br == L) {
                for (var ox = n0, cx = w; ; cx += w) {
                  var ux = cx <= d0 ? P : cx >= d0 + F ? F : cx - d0;
                  if (ox < ux) break;
                  var wr = ox - ux, Sr = w - ux;
                  b.push(V(S0(ux + wr % Sr, 0))), ox = H(wr / Sr);
                }
                b[y(1472)](V(S0(ox, 0))), d0 = b0(n0, xe, z0 == g0), n0 = 0, ++z0;
              }
            }
          } catch (Je) {
            ve = !0, Pe = Je;
          } finally {
            try {
              !ue && de[y(1566)] && de.return();
            } finally {
              if (ve) throw Pe;
            }
          }
          ++n0, ++L;
        }
        return b[y(697)]("");
      }, Q0 = function(m) {
        return u0(m, function(y) {
          var b = B;
          return j[b(2105)](y) ? M0(y[b(2349)](4).toLowerCase()) : y;
        });
      }, A = function(m) {
        return u0(m, function(y) {
          var b = B;
          return M[b(2105)](y) ? b(1121) + k0(y) : y;
        });
      }, T = { version: e(1137), ucs2: { decode: l0, encode: i0 }, decode: M0, encode: k0, toASCII: A, toUnicode: Q0 }, z = {};
      function G(I) {
        var m = e, y = I[m(195)](0), b = void 0;
        return y < 16 ? b = "%0" + y[m(2345)](16).toUpperCase() : y < 128 ? b = "%" + y.toString(16)[m(188)]() : y < 2048 ? b = "%" + (y >> 6 | 192)[m(2345)](16)[m(188)]() + "%" + (y & 63 | 128)[m(2345)](16)[m(188)]() : b = "%" + (y >> 12 | 224)[m(2345)](16).toUpperCase() + "%" + (y >> 6 & 63 | 128)[m(2345)](16)[m(188)]() + "%" + (y & 63 | 128)[m(2345)](16).toUpperCase(), b;
      }
      function X(I) {
        for (var m = e, y = "", b = 0, U = I[m(1001)]; b < U; ) {
          var L = parseInt(I[m(829)](b + 1, 2), 16);
          if (L < 128) y += String[m(1909)](L), b += 3;
          else if (L >= 194 && L < 224) {
            if (U - b >= 6) {
              var n0 = parseInt(I[m(829)](b + 4, 2), 16);
              y += String[m(1909)]((L & 31) << 6 | n0 & 63);
            } else y += I.substr(b, 6);
            b += 6;
          } else if (L >= 224) {
            if (U - b >= 9) {
              var d0 = parseInt(I[m(829)](b + 4, 2), 16), P0 = parseInt(I[m(829)](b + 7, 2), 16);
              y += String[m(1909)]((L & 15) << 12 | (d0 & 63) << 6 | P0 & 63);
            } else y += I[m(829)](b, 9);
            b += 9;
          } else y += I[m(829)](b, 3), b += 3;
        }
        return y;
      }
      function W(I, m) {
        var y = e;
        function b(U) {
          var L = B, n0 = X(U);
          return n0[L(1548)](m[L(1291)]) ? n0 : U;
        }
        return I.scheme && (I[y(394)] = String(I.scheme)[y(1638)](m[y(1e3)], b)[y(1158)]()[y(1638)](m[y(767)], "")), I[y(445)] !== void 0 && (I[y(445)] = String(I[y(445)])[y(1638)](m[y(1e3)], b).replace(m[y(1817)], G)[y(1638)](m[y(1e3)], c)), I[y(514)] !== void 0 && (I[y(514)] = String(I[y(514)])[y(1638)](m[y(1e3)], b)[y(1158)]().replace(m[y(1228)], G)[y(1638)](m[y(1e3)], c)), I[y(1048)] !== void 0 && (I.path = String(I.path).replace(m[y(1e3)], b)[y(1638)](I[y(394)] ? m.NOT_PATH : m[y(2047)], G).replace(m[y(1e3)], c)), I[y(2403)] !== void 0 && (I[y(2403)] = String(I[y(2403)])[y(1638)](m.PCT_ENCODED, b)[y(1638)](m.NOT_QUERY, G)[y(1638)](m.PCT_ENCODED, c)), I[y(1281)] !== void 0 && (I.fragment = String(I[y(1281)]).replace(m[y(1e3)], b)[y(1638)](m[y(619)], G)[y(1638)](m.PCT_ENCODED, c)), I;
      }
      function Y(I) {
        return I.replace(/^0*(.*)/, "$1") || "0";
      }
      function s0(I, m) {
        var y = e, b = I.match(m[y(371)]) || [], U = h(b, 2), L = U[1];
        return L ? L[y(1464)](".")[y(1825)](Y).join(".") : I;
      }
      function o0(I, m) {
        var y = e, b = I[y(1548)](m[y(261)]) || [], U = h(b, 3), L = U[1], n0 = U[2];
        if (L) {
          for (var d0 = L.toLowerCase().split("::").reverse(), P0 = h(d0, 2), j0 = P0[0], W0 = P0[1], E0 = W0 ? W0[y(1464)](":")[y(1825)](Y) : [], D0 = j0.split(":")[y(1825)](Y), Z0 = m[y(371)][y(2105)](D0[D0.length - 1]), g0 = Z0 ? 7 : 8, z0 = D0.length - g0, B0 = Array(g0), H0 = 0; H0 < g0; ++H0)
            B0[H0] = E0[H0] || D0[z0 + H0] || "";
          Z0 && (B0[g0 - 1] = s0(B0[g0 - 1], m));
          var ke = B0[y(633)](function(xe, ue, ve) {
            var Pe = y;
            if (!ue || ue === "0") {
              var de = xe[xe[Pe(1001)] - 1];
              de && de.index + de[Pe(1001)] === ve ? de.length++ : xe[Pe(1472)]({ index: ve, length: 1 });
            }
            return xe;
          }, []), oe = ke[y(779)](function(xe, ue) {
            var ve = y;
            return ue[ve(1001)] - xe.length;
          })[0], ce = void 0;
          if (oe && oe[y(1001)] > 1) {
            var $e = B0[y(2349)](0, oe[y(1360)]), Ce = B0[y(2349)](oe[y(1360)] + oe[y(1001)]);
            ce = $e.join(":") + "::" + Ce[y(697)](":");
          } else ce = B0[y(697)](":");
          return n0 && (ce += "%" + n0), ce;
        } else return I;
      }
      var e0 = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, L0 = ""[e(1548)](/(){0}/)[1] === void 0;
      function O0(I) {
        var m = e, y = arguments[m(1001)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = {}, U = y.iri !== !1 ? v : l;
        y[m(823)] === m(2158) && (I = (y.scheme ? y[m(394)] + ":" : "") + "//" + I);
        var L = I.match(e0);
        if (L) {
          L0 ? (b[m(394)] = L[1], b[m(445)] = L[3], b[m(514)] = L[4], b[m(2205)] = parseInt(L[5], 10), b[m(1048)] = L[6] || "", b[m(2403)] = L[7], b[m(1281)] = L[8], isNaN(b[m(2205)]) && (b.port = L[5])) : (b[m(394)] = L[1] || void 0, b.userinfo = I[m(1616)]("@") !== -1 ? L[3] : void 0, b.host = I[m(1616)]("//") !== -1 ? L[4] : void 0, b[m(2205)] = parseInt(L[5], 10), b[m(1048)] = L[6] || "", b[m(2403)] = I.indexOf("?") !== -1 ? L[7] : void 0, b[m(1281)] = I.indexOf("#") !== -1 ? L[8] : void 0, isNaN(b[m(2205)]) && (b.port = I[m(1548)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? L[4] : void 0)), b.host && (b[m(514)] = o0(s0(b[m(514)], U), U)), b[m(394)] === void 0 && b.userinfo === void 0 && b[m(514)] === void 0 && b.port === void 0 && !b[m(1048)] && b[m(2403)] === void 0 ? b[m(823)] = m(1038) : b[m(394)] === void 0 ? b.reference = m(2045) : b.fragment === void 0 ? b[m(823)] = m(2332) : b[m(823)] = "uri", y[m(823)] && y[m(823)] !== m(2158) && y.reference !== b.reference && (b[m(1106)] = b[m(1106)] || "URI is not a " + y[m(823)] + m(1873));
          var n0 = z[(y[m(394)] || b[m(394)] || "")[m(1158)]()];
          if (!y[m(571)] && (!n0 || !n0.unicodeSupport)) {
            if (b[m(514)] && (y[m(806)] || n0 && n0[m(806)])) try {
              b[m(514)] = T.toASCII(b[m(514)][m(1638)](U[m(1e3)], X)[m(1158)]());
            } catch (d0) {
              b[m(1106)] = b.error || m(1015) + d0;
            }
            W(b, l);
          } else W(b, U);
          n0 && n0.parse && n0.parse(b, y);
        } else b.error = b[m(1106)] || m(2435);
        return b;
      }
      function V0(I, m) {
        var y = e, b = m[y(2159)] !== !1 ? v : l, U = [];
        return I[y(445)] !== void 0 && (U[y(1472)](I.userinfo), U.push("@")), I[y(514)] !== void 0 && U[y(1472)](o0(s0(String(I[y(514)]), b), b).replace(b[y(261)], function(L, n0, d0) {
          var P0 = y;
          return "[" + n0 + (d0 ? P0(1102) + d0 : "") + "]";
        })), (typeof I[y(2205)] === y(1829) || typeof I.port === y(389)) && (U[y(1472)](":"), U[y(1472)](String(I.port))), U.length ? U[y(697)]("") : void 0;
      }
      var w0 = /^\.\.?\//, G0 = /^\/\.(\/|$)/, se = /^\/\.\.(\/|$)/, Y0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function A0(I) {
        for (var m = e, y = []; I[m(1001)]; )
          if (I.match(w0)) I = I[m(1638)](w0, "");
          else if (I[m(1548)](G0)) I = I[m(1638)](G0, "/");
          else if (I[m(1548)](se)) I = I[m(1638)](se, "/"), y.pop();
          else if (I === "." || I === "..") I = "";
          else {
            var b = I.match(Y0);
            if (b) {
              var U = b[0];
              I = I[m(2349)](U[m(1001)]), y[m(1472)](U);
            } else throw new Error("Unexpected dot segment condition");
          }
        return y[m(697)]("");
      }
      function $0(I) {
        var m = e, y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = y[m(2159)] ? v : l, U = [], L = z[(y[m(394)] || I.scheme || "").toLowerCase()];
        if (L && L[m(1992)] && L.serialize(I, y), I.host && !b.IPV6ADDRESS.test(I[m(514)])) {
          if (y.domainHost || L && L[m(806)]) try {
            I[m(514)] = y[m(2159)] ? T[m(2229)](I[m(514)]) : T[m(2035)](I[m(514)].replace(b[m(1e3)], X)[m(1158)]());
          } catch (P0) {
            I[m(1106)] = I.error || m(272) + (y[m(2159)] ? "Unicode" : m(1958)) + m(1035) + P0;
          }
        }
        W(I, b), y.reference !== m(2158) && I[m(394)] && (U[m(1472)](I.scheme), U[m(1472)](":"));
        var n0 = V0(I, y);
        if (n0 !== void 0 && (y.reference !== m(2158) && U[m(1472)]("//"), U[m(1472)](n0), I.path && I[m(1048)].charAt(0) !== "/" && U[m(1472)]("/")), I.path !== void 0) {
          var d0 = I[m(1048)];
          !y.absolutePath && (!L || !L.absolutePath) && (d0 = A0(d0)), n0 === void 0 && (d0 = d0[m(1638)](/^\/\//, m(2110))), U[m(1472)](d0);
        }
        return I[m(2403)] !== void 0 && (U[m(1472)]("?"), U.push(I[m(2403)])), I[m(1281)] !== void 0 && (U.push("#"), U[m(1472)](I.fragment)), U.join("");
      }
      function ne(I, m) {
        var y = e, b = arguments[y(1001)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, U = arguments[3], L = {};
        return !U && (I = O0($0(I, b), b), m = O0($0(m, b), b)), b = b || {}, !b[y(2285)] && m[y(394)] ? (L[y(394)] = m.scheme, L[y(445)] = m[y(445)], L.host = m[y(514)], L[y(2205)] = m[y(2205)], L[y(1048)] = A0(m.path || ""), L[y(2403)] = m[y(2403)]) : (m.userinfo !== void 0 || m[y(514)] !== void 0 || m[y(2205)] !== void 0 ? (L[y(445)] = m.userinfo, L[y(514)] = m[y(514)], L[y(2205)] = m[y(2205)], L[y(1048)] = A0(m[y(1048)] || ""), L.query = m[y(2403)]) : (m[y(1048)] ? (m[y(1048)][y(1719)](0) === "/" ? L[y(1048)] = A0(m.path) : ((I[y(445)] !== void 0 || I[y(514)] !== void 0 || I.port !== void 0) && !I.path ? L[y(1048)] = "/" + m[y(1048)] : I.path ? L.path = I[y(1048)][y(2349)](0, I[y(1048)][y(1752)]("/") + 1) + m.path : L[y(1048)] = m[y(1048)], L[y(1048)] = A0(L.path)), L[y(2403)] = m[y(2403)]) : (L[y(1048)] = I[y(1048)], m.query !== void 0 ? L.query = m[y(2403)] : L[y(2403)] = I[y(2403)]), L[y(445)] = I[y(445)], L[y(514)] = I[y(514)], L.port = I.port), L[y(394)] = I[y(394)]), L[y(1281)] = m.fragment, L;
      }
      function Ze(I, m, y) {
        var b = e, U = d({ scheme: b(2348) }, y);
        return $0(ne(O0(I, U), O0(m, U), U, !0), U);
      }
      function jx(I, m) {
        var y = e;
        return typeof I === y(389) ? I = $0(O0(I, m), m) : o(I) === "object" && (I = O0($0(I, m), m)), I;
      }
      function Mx(I, m, y) {
        var b = e;
        return typeof I === b(389) ? I = $0(O0(I, y), y) : o(I) === "object" && (I = $0(I, y)), typeof m === b(389) ? m = $0(O0(m, y), y) : o(m) === b(865) && (m = $0(m, y)), I === m;
      }
      function gn(I, m) {
        var y = e;
        return I && I[y(2345)]().replace(!m || !m[y(2159)] ? l[y(1011)] : v[y(1011)], G);
      }
      function me(I, m) {
        var y = e;
        return I && I[y(2345)]()[y(1638)](!m || !m[y(2159)] ? l.PCT_ENCODED : v[y(1e3)], X);
      }
      var Be = { scheme: e(1761), domainHost: !0, parse: function(m, y) {
        var b = e;
        return !m.host && (m[b(1106)] = m[b(1106)] || b(1462)), m;
      }, serialize: function(m, y) {
        var b = e, U = String(m[b(394)])[b(1158)]() === b(1858);
        return (m[b(2205)] === (U ? 443 : 80) || m[b(2205)] === "") && (m[b(2205)] = void 0), !m[b(1048)] && (m[b(1048)] = "/"), m;
      } }, dr = { scheme: e(1858), domainHost: Be[e(806)], parse: Be[e(1674)], serialize: Be[e(1992)] };
      function fr(I) {
        var m = e;
        return typeof I[m(1042)] === m(325) ? I[m(1042)] : String(I[m(394)])[m(1158)]() === m(1282);
      }
      var Ke = { scheme: "ws", domainHost: !0, parse: function(m, y) {
        var b = e, U = m;
        return U[b(1042)] = fr(U), U[b(1839)] = (U.path || "/") + (U[b(2403)] ? "?" + U[b(2403)] : ""), U[b(1048)] = void 0, U[b(2403)] = void 0, U;
      }, serialize: function(m, y) {
        var b = e;
        if ((m[b(2205)] === (fr(m) ? 443 : 80) || m[b(2205)] === "") && (m[b(2205)] = void 0), typeof m.secure === b(325) && (m[b(394)] = m[b(1042)] ? b(1282) : "ws", m[b(1042)] = void 0), m[b(1839)]) {
          var U = m[b(1839)][b(1464)]("?"), L = h(U, 2), n0 = L[0], d0 = L[1];
          m[b(1048)] = n0 && n0 !== "/" ? n0 : void 0, m[b(2403)] = d0, m[b(1839)] = void 0;
        }
        return m[b(1281)] = void 0, m;
      } }, lr = { scheme: "wss", domainHost: Ke[e(806)], parse: Ke[e(1674)], serialize: Ke[e(1992)] }, yn = {}, hr = "[A-Za-z0-9\\-\\.\\_\\~" + e(1794) + "]", ie = e(1218), bn = n(n(e(1100) + ie + "%" + ie + ie + "%" + ie + ie) + "|" + n(e(576) + ie + "%" + ie + ie) + "|" + n("%" + ie + ie)), wn = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", Sn = e(2300), kn = r(Sn, '[\\"\\\\]'), Pn = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", En = new RegExp(hr, "g"), Le = new RegExp(bn, "g"), In = new RegExp(r(e(165), wn, "[\\.]", e(1933), kn), "g"), pr = new RegExp(r(e(165), hr, Pn), "g"), Rn = pr;
      function Lx(I) {
        var m = e, y = X(I);
        return y[m(1548)](En) ? y : I;
      }
      var mr = { scheme: e(375), parse: function(m, y) {
        var b = e, U = m, L = U.to = U[b(1048)] ? U[b(1048)][b(1464)](",") : [];
        if (U[b(1048)] = void 0, U[b(2403)]) {
          for (var n0 = !1, d0 = {}, P0 = U[b(2403)][b(1464)]("&"), j0 = 0, W0 = P0.length; j0 < W0; ++j0) {
            var E0 = P0[j0][b(1464)]("=");
            switch (E0[0]) {
              case "to":
                for (var D0 = E0[1][b(1464)](","), Z0 = 0, g0 = D0[b(1001)]; Z0 < g0; ++Z0)
                  L[b(1472)](D0[Z0]);
                break;
              case "subject":
                U.subject = me(E0[1], y);
                break;
              case b(727):
                U[b(727)] = me(E0[1], y);
                break;
              default:
                n0 = !0, d0[me(E0[0], y)] = me(E0[1], y);
                break;
            }
          }
          n0 && (U[b(1832)] = d0);
        }
        U[b(2403)] = void 0;
        for (var z0 = 0, B0 = L.length; z0 < B0; ++z0) {
          var H0 = L[z0][b(1464)]("@");
          if (H0[0] = me(H0[0]), y.unicodeSupport) H0[1] = me(H0[1], y)[b(1158)]();
          else try {
            H0[1] = T[b(2035)](me(H0[1], y)[b(1158)]());
          } catch (ke) {
            U[b(1106)] = U[b(1106)] || "Email address's domain name can not be converted to ASCII via punycode: " + ke;
          }
          L[z0] = H0.join("@");
        }
        return U;
      }, serialize: function(m, y) {
        var b = e, U = m, L = u(m.to);
        if (L) {
          for (var n0 = 0, d0 = L.length; n0 < d0; ++n0) {
            var P0 = String(L[n0]), j0 = P0.lastIndexOf("@"), W0 = P0[b(2349)](0, j0)[b(1638)](Le, Lx)[b(1638)](Le, c)[b(1638)](In, G), E0 = P0[b(2349)](j0 + 1);
            try {
              E0 = y[b(2159)] ? T[b(2229)](E0) : T[b(2035)](me(E0, y)[b(1158)]());
            } catch (z0) {
              U[b(1106)] = U[b(1106)] || b(359) + (y[b(2159)] ? b(407) : b(1958)) + b(1035) + z0;
            }
            L[n0] = W0 + "@" + E0;
          }
          U[b(1048)] = L[b(697)](",");
        }
        var D0 = m[b(1832)] = m[b(1832)] || {};
        m.subject && (D0.subject = m[b(2421)]), m.body && (D0[b(727)] = m[b(727)]);
        var Z0 = [];
        for (var g0 in D0)
          D0[g0] !== yn[g0] && Z0[b(1472)](g0[b(1638)](Le, Lx)[b(1638)](Le, c)[b(1638)](pr, G) + "=" + D0[g0].replace(Le, Lx)[b(1638)](Le, c)[b(1638)](Rn, G));
        return Z0.length && (U[b(2403)] = Z0[b(697)]("&")), U;
      } }, Cn = /^([^\:]+)\:(.*)/, vr = { scheme: e(845), parse: function(m, y) {
        var b = e, U = m.path && m.path[b(1548)](Cn), L = m;
        if (U) {
          var n0 = y.scheme || L[b(394)] || b(845), d0 = U[1].toLowerCase(), P0 = U[2], j0 = n0 + ":" + (y.nid || d0), W0 = z[j0];
          L.nid = d0, L[b(1976)] = P0, L[b(1048)] = void 0, W0 && (L = W0[b(1674)](L, y));
        } else L[b(1106)] = L[b(1106)] || b(2157);
        return L;
      }, serialize: function(m, y) {
        var b = e, U = y[b(394)] || m[b(394)] || b(845), L = m[b(2214)], n0 = U + ":" + (y.nid || L), d0 = z[n0];
        d0 && (m = d0[b(1992)](m, y));
        var P0 = m, j0 = m[b(1976)];
        return P0[b(1048)] = (L || y[b(2214)]) + ":" + j0, P0;
      } }, Fn = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, gr = { scheme: e(1796), parse: function(m, y) {
        var b = e, U = m;
        return U.uuid = U[b(1976)], U[b(1976)] = void 0, !y.tolerant && (!U[b(2060)] || !U.uuid[b(1548)](Fn)) && (U.error = U[b(1106)] || "UUID is not valid."), U;
      }, serialize: function(m, y) {
        var b = e, U = m;
        return U[b(1976)] = (m[b(2060)] || "").toLowerCase(), U;
      } };
      z[Be[e(394)]] = Be, z[dr[e(394)]] = dr, z[Ke.scheme] = Ke, z[lr.scheme] = lr, z[mr.scheme] = mr, z[vr[e(394)]] = vr, z[gr[e(394)]] = gr, a.SCHEMES = z, a[e(848)] = G, a.pctDecChars = X, a[e(1674)] = O0, a[e(992)] = A0, a.serialize = $0, a[e(2351)] = ne, a[e(695)] = Ze, a[e(2226)] = jx, a[e(1658)] = Mx, a.escapeComponent = gn, a.unescapeComponent = me, Object[e(648)](a, e(2438), { value: !0 });
    });
  }(Xe, Xe.exports)), Xe[i(1213)];
}
var Kx, ta;
function or() {
  return ta || (ta = 1, Kx = function i(x, t) {
    var a = B;
    if (x === t) return !0;
    if (x && t && typeof x == a(865) && typeof t == a(865)) {
      if (x[a(1667)] !== t.constructor) return !1;
      var e, r, n;
      if (Array.isArray(x)) {
        if (e = x[a(1001)], e != t[a(1001)]) return !1;
        for (r = e; r-- !== 0; ) if (!i(x[r], t[r])) return !1;
        return !0;
      }
      if (x.constructor === RegExp) return x[a(2217)] === t[a(2217)] && x[a(1146)] === t[a(1146)];
      if (x[a(1997)] !== Object[a(2123)][a(1997)]) return x[a(1997)]() === t[a(1997)]();
      if (x[a(2345)] !== Object[a(2123)][a(2345)]) return x[a(2345)]() === t.toString();
      if (n = Object[a(2411)](x), e = n[a(1001)], e !== Object[a(2411)](t).length) return !1;
      for (r = e; r-- !== 0; ) if (!Object[a(2123)][a(2107)].call(t, n[r])) return !1;
      for (r = e; r-- !== 0; ) {
        var o = n[r];
        if (!i(x[o], t[o])) return !1;
      }
      return !0;
    }
    return x !== x && t !== t;
  }), Kx;
}
var Jx, ra;
function j2() {
  return ra || (ra = 1, Jx = function(x) {
    for (var t = B, a = 0, e = x.length, r = 0, n; r < e; )
      a++, n = x[t(195)](r++), n >= 55296 && n <= 56319 && r < e && (n = x[t(195)](r), (n & 64512) == 56320 && r++);
    return a;
  }), Jx;
}
var Gx, aa;
function We() {
  var i = s;
  if (aa) return Gx;
  aa = 1, Gx = { copy: x, checkDataType: t, checkDataTypes: a, coerceToTypes: r, toHash: n, getProperty: u, escapeQuotes: d, equal: or(), ucs2length: j2(), varOccurences: f, varReplace: l, schemaHasRules: v, schemaHasRulesExcept: h, schemaUnknownRules: p, toQuotedString: g, getPathExpr: w, getPath: P, getData: R, unescapeFragment: C, unescapeJsonPointer: M, escapeFragment: D, escapeJsonPointer: j };
  function x(q, N) {
    N = N || {};
    for (var $ in q) N[$] = q[$];
    return N;
  }
  function t(q, N, $, H) {
    var V = B, J = V(H ? 334 : 1713), c0 = V(H ? 711 : 1633), u0 = H ? "!" : "", l0 = H ? "" : "!";
    switch (q) {
      case V(2348):
        return N + J + V(2348);
      case V(791):
        return u0 + V(320) + N + ")";
      case V(865):
        return "(" + u0 + N + c0 + V(753) + N + J + V(1808) + c0 + l0 + "Array.isArray(" + N + "))";
      case V(2472):
        return V(2390) + N + J + V(411) + c0 + l0 + "(" + N + V(1891) + c0 + N + J + N + ($ ? c0 + u0 + V(2109) + N + ")" : "") + ")";
      case V(1829):
        return "(typeof " + N + J + '"' + q + '"' + ($ ? c0 + u0 + V(2109) + N + ")" : "") + ")";
      default:
        return V(753) + N + J + '"' + q + '"';
    }
  }
  function a(q, N, $) {
    var H = B;
    switch (q[H(1001)]) {
      case 1:
        return t(q[0], N, $, !0);
      default:
        var V = "", J = n(q);
        J[H(791)] && J[H(865)] && (V = J[H(2348)] ? "(" : "(!" + N + H(711), V += "typeof " + N + H(964), delete J.null, delete J.array, delete J.object), J[H(1829)] && delete J.integer;
        for (var c0 in J) V += (V ? H(1633) : "") + t(c0, N, $, !0);
        return V;
    }
  }
  var e = n(["string", "number", i(2472), i(325), i(2348)]);
  function r(q, N) {
    var $ = i;
    if (Array.isArray(N)) {
      for (var H = [], V = 0; V < N[$(1001)]; V++) {
        var J = N[V];
        (e[J] || q === $(791) && J === $(791)) && (H[H[$(1001)]] = J);
      }
      if (H[$(1001)]) return H;
    } else {
      if (e[N]) return [N];
      if (q === $(791) && N === $(791)) return [$(791)];
    }
  }
  function n(q) {
    for (var N = i, $ = {}, H = 0; H < q[N(1001)]; H++) $[q[H]] = !0;
    return $;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(q) {
    var N = i;
    return typeof q == N(1829) ? "[" + q + "]" : o[N(2105)](q) ? "." + q : "['" + d(q) + "']";
  }
  function d(q) {
    var N = i;
    return q.replace(c, N(1162)).replace(/\n/g, "\\n").replace(/\r/g, "\\r")[N(1638)](/\f/g, "\\f")[N(1638)](/\t/g, "\\t");
  }
  function f(q, N) {
    var $ = i;
    N += "[^0-9]";
    var H = q[$(1548)](new RegExp(N, "g"));
    return H ? H.length : 0;
  }
  function l(q, N, $) {
    var H = i;
    return N += H(2022), $ = $[H(1638)](/\$/g, H(1363)), q[H(1638)](new RegExp(N, "g"), $ + "$1");
  }
  function v(q, N) {
    if (typeof q == "boolean") return !q;
    for (var $ in q) if (N[$]) return !0;
  }
  function h(q, N, $) {
    var H = i;
    if (typeof q == H(325)) return !q && $ != H(292);
    for (var V in q) if (V != $ && N[V]) return !0;
  }
  function p(q, N) {
    var $ = i;
    if (typeof q != $(325)) {
      for (var H in q) if (!N[H]) return H;
    }
  }
  function g(q) {
    return "'" + d(q) + "'";
  }
  function w(q, N, $, H) {
    var V = i, J = $ ? V(1688) + N + (H ? "" : V(2083)) : H ? V(335) + N + V(2061) : "'[\\'' + " + N + " + '\\']'";
    return E(q, J);
  }
  function P(q, N, $) {
    var H = g($ ? "/" + j(N) : u(N));
    return E(q, H);
  }
  var F = /^\/(?:[^~]|~0|~1)*$/, O = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function R(q, N, $) {
    var H = i, V, J, c0, u0;
    if (q === "") return H(516);
    if (q[0] == "/") {
      if (!F.test(q)) throw new Error("Invalid JSON-pointer: " + q);
      J = q, c0 = H(516);
    } else {
      if (u0 = q.match(O), !u0) throw new Error(H(841) + q);
      if (V = +u0[1], J = u0[2], J == "#") {
        if (V >= N) throw new Error(H(342) + V + " levels up, current level is " + N);
        return $[N - V];
      }
      if (V > N) throw new Error(H(1827) + V + " levels up, current level is " + N);
      if (c0 = H(1512) + (N - V || ""), !J) return c0;
    }
    for (var l0 = c0, i0 = J[H(1464)]("/"), f0 = 0; f0 < i0[H(1001)]; f0++) {
      var S0 = i0[f0];
      S0 && (c0 += u(M(S0)), l0 += H(1633) + c0);
    }
    return l0;
  }
  function E(q, N) {
    var $ = i;
    return q == '""' ? N : (q + $(510) + N)[$(1638)](/([^\\])' \+ '/g, "$1");
  }
  function C(q) {
    return M(decodeURIComponent(q));
  }
  function D(q) {
    return encodeURIComponent(j(q));
  }
  function j(q) {
    var N = i;
    return q[N(1638)](/~/g, "~0").replace(/\//g, "~1");
  }
  function M(q) {
    var N = i;
    return q[N(1638)](/~1/g, "/")[N(1638)](/~0/g, "~");
  }
  return Gx;
}
var Qx, sa;
function dn() {
  if (sa) return Qx;
  sa = 1;
  var i = We();
  Qx = x;
  function x(t) {
    var a = B;
    i[a(771)](t, this);
  }
  return Qx;
}
var Yx = { exports: {} }, na;
function M2() {
  var i = s;
  if (na) return Yx.exports;
  na = 1;
  var x = Yx[i(1213)] = function(e, r, n) {
    var o = i;
    typeof r == o(834) && (n = r, r = {}), n = r.cb || n;
    var c = typeof n == o(834) ? n : n[o(178)] || function() {
    }, u = n[o(1539)] || function() {
    };
    t(r, c, u, e, "", e);
  };
  x[i(460)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x[i(2176)] = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[i(1579)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[i(1975)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, r, n, o, c, u, d, f, l, v) {
    var h = i;
    if (o && typeof o == h(865) && !Array[h(2305)](o)) {
      r(o, c, u, d, f, l, v);
      for (var p in o) {
        var g = o[p];
        if (Array[h(2305)](g)) {
          if (p in x.arrayKeywords)
            for (var w = 0; w < g[h(1001)]; w++) t(e, r, n, g[w], c + "/" + p + "/" + w, u, c, p, o, w);
        } else if (p in x[h(1579)]) {
          if (g && typeof g == h(865))
            for (var P in g) t(e, r, n, g[P], c + "/" + p + "/" + a(P), u, c, p, o, P);
        } else (p in x[h(460)] || e[h(1275)] && !(p in x[h(1975)])) && t(e, r, n, g, c + "/" + p, u, c, p, o);
      }
      n(o, c, u, d, f, l, v);
    }
  }
  function a(e) {
    var r = i;
    return e[r(1638)](/~/g, "~0")[r(1638)](/\//g, "~1");
  }
  return Yx[i(1213)];
}
var Xx, ia;
function cr() {
  var i = s;
  if (ia) return Xx;
  ia = 1;
  var x = D2(), t = or(), a = We(), e = dn(), r = M2();
  Xx = n, n[i(1095)] = P, n[i(1255)] = p, n.url = F, n.ids = O, n.inlineRef = l, n[i(870)] = o;
  function n(R, E, C) {
    var D = i, j = this[D(1672)][C];
    if (typeof j == "string")
      if (this[D(1672)][j]) j = this._refs[j];
      else return n.call(this, R, E, j);
    if (j = j || this[D(598)][C], j instanceof e) return l(j.schema, this._opts[D(1890)]) ? j.schema : j[D(1768)] || this[D(351)](j);
    var M = o.call(this, E, C), q, N, $;
    return M && (q = M[D(870)], E = M[D(1573)], $ = M.baseId), q instanceof e ? N = q.validate || R[D(801)](this, q[D(870)], E, void 0, $) : q !== void 0 && (N = l(q, this[D(1755)][D(1890)]) ? q : R[D(801)](this, q, E, void 0, $)), N;
  }
  function o(R, E) {
    var C = i, D = x[C(1674)](E), j = g(D), M = p(this[C(344)](R.schema));
    if (Object.keys(R[C(870)])[C(1001)] === 0 || j !== M) {
      var q = P(j), N = this._refs[q];
      if (typeof N == C(389)) return c[C(801)](this, R, N, D);
      if (N instanceof e)
        N.validate || this[C(351)](N), R = N;
      else if (N = this._schemas[q], N instanceof e) {
        if (N[C(1768)] || this[C(351)](N), q == P(E)) return { schema: N, root: R, baseId: M };
        R = N;
      } else return;
      if (!R[C(870)]) return;
      M = p(this._getId(R[C(870)]));
    }
    return d[C(801)](this, D, M, R[C(870)], R);
  }
  function c(R, E, C) {
    var D = i, j = o[D(801)](this, R, E);
    if (j) {
      var M = j.schema, q = j[D(1014)];
      R = j[D(1573)];
      var N = this[D(344)](M);
      return N && (q = F(q, N)), d[D(801)](this, C, q, M, R);
    }
  }
  var u = a[i(781)](["properties", "patternProperties", i(2470), i(1050), i(732)]);
  function d(R, E, C, D) {
    var j = i;
    if (R[j(1281)] = R[j(1281)] || "", R[j(1281)].slice(0, 1) == "/") {
      for (var M = R[j(1281)][j(1464)]("/"), q = 1; q < M[j(1001)]; q++) {
        var N = M[q];
        if (N) {
          if (N = a[j(789)](N), C = C[N], C === void 0) break;
          var $;
          if (!u[N] && ($ = this[j(344)](C), $ && (E = F(E, $)), C[j(2259)])) {
            var H = F(E, C[j(2259)]), V = o[j(801)](this, D, H);
            V && (C = V.schema, D = V.root, E = V[j(1014)]);
          }
        }
      }
      if (C !== void 0 && C !== D[j(870)]) return { schema: C, root: D, baseId: E };
    }
  }
  var f = a[i(781)]([i(399), i(1678), "pattern", i(520), i(1537), i(1764), i(935), i(588), i(755), i(1932), "minimum", "uniqueItems", i(2074), i(740), i(2470)]);
  function l(R, E) {
    if (E === !1) return !1;
    if (E === void 0 || E === !0) return v(R);
    if (E) return h(R) <= E;
  }
  function v(R) {
    var E = i, C;
    if (Array.isArray(R)) {
      for (var D = 0; D < R[E(1001)]; D++)
        if (C = R[D], typeof C == E(865) && !v(C)) return !1;
    } else for (var j in R)
      if (j == E(2259) || (C = R[j], typeof C == E(865) && !v(C))) return !1;
    return !0;
  }
  function h(R) {
    var E = i, C = 0, D;
    if (Array[E(2305)](R)) {
      for (var j = 0; j < R[E(1001)]; j++)
        if (D = R[j], typeof D == E(865) && (C += h(D)), C == 1 / 0) return 1 / 0;
    } else for (var M in R) {
      if (M == "$ref") return 1 / 0;
      if (f[M]) C++;
      else if (D = R[M], typeof D == "object" && (C += h(D) + 1), C == 1 / 0) return 1 / 0;
    }
    return C;
  }
  function p(R, E) {
    var C = i;
    E !== !1 && (R = P(R));
    var D = x[C(1674)](R);
    return g(D);
  }
  function g(R) {
    var E = i;
    return x[E(1992)](R)[E(1464)]("#")[0] + "#";
  }
  var w = /#\/?$/;
  function P(R) {
    var E = i;
    return R ? R[E(1638)](w, "") : "";
  }
  function F(R, E) {
    var C = i;
    return E = P(E), x[C(695)](R, E);
  }
  function O(R) {
    var E = i, C = P(this[E(344)](R)), D = { "": C }, j = { "": p(C, !1) }, M = {}, q = this;
    return r(R, { allKeys: !0 }, function(N, $, H, V, J, c0, u0) {
      var l0 = E;
      if ($ !== "") {
        var i0 = q[l0(344)](N), f0 = D[V], S0 = j[V] + "/" + J;
        if (u0 !== void 0 && (S0 += "/" + (typeof u0 == l0(1829) ? u0 : a[l0(437)](u0))), typeof i0 == "string") {
          i0 = f0 = P(f0 ? x.resolve(f0, i0) : i0);
          var b0 = q[l0(1672)][i0];
          if (typeof b0 == "string" && (b0 = q._refs[b0]), b0 && b0[l0(870)]) {
            if (!t(N, b0[l0(870)])) throw new Error(l0(1908) + i0 + l0(2256));
          } else if (i0 != P(S0))
            if (i0[0] == "#") {
              if (M[i0] && !t(N, M[i0])) throw new Error(l0(1908) + i0 + l0(2256));
              M[i0] = N;
            } else q[l0(1672)][i0] = S0;
        }
        D[$] = f0, j[$] = S0;
      }
    }), M;
  }
  return Xx;
}
var _x, oa;
function ur() {
  if (oa) return _x;
  oa = 1;
  var i = cr();
  _x = { Validation: a(x), MissingRef: a(t) };
  function x(e) {
    var r = B;
    this[r(456)] = "validation failed", this[r(2244)] = e, this[r(989)] = this.validation = !0;
  }
  t.message = function(e, r) {
    var n = B;
    return n(2096) + r + n(1184) + e;
  };
  function t(e, r, n) {
    var o = B;
    this.message = n || t[o(456)](e, r), this.missingRef = i.url(e, r), this.missingSchema = i[o(1095)](i.fullPath(this[o(2153)]));
  }
  function a(e) {
    var r = B;
    return e.prototype = Object[r(536)](Error[r(2123)]), e[r(2123)][r(1667)] = e, e;
  }
  return _x;
}
var et, ca;
function fn() {
  return ca || (ca = 1, et = function(i, x) {
    var t = B;
    x || (x = {}), typeof x === t(834) && (x = { cmp: x });
    var a = typeof x[t(1227)] == "boolean" ? x[t(1227)] : !1, e = x.cmp && /* @__PURE__ */ function(n) {
      return function(o) {
        return function(c, u) {
          var d = { key: c, value: o[c] }, f = { key: u, value: o[u] };
          return n(d, f);
        };
      };
    }(x[t(2008)]), r = [];
    return function n(o) {
      var c = t;
      if (o && o[c(1625)] && typeof o[c(1625)] == "function" && (o = o.toJSON()), o !== void 0) {
        if (typeof o == c(1829)) return isFinite(o) ? "" + o : c(2348);
        if (typeof o != "object") return JSON.stringify(o);
        var u, d;
        if (Array.isArray(o)) {
          for (d = "[", u = 0; u < o.length; u++)
            u && (d += ","), d += n(o[u]) || c(2348);
          return d + "]";
        }
        if (o === null) return c(2348);
        if (r.indexOf(o) !== -1) {
          if (a) return JSON[c(1581)](c(1439));
          throw new TypeError(c(2286));
        }
        var f = r.push(o) - 1, l = Object.keys(o)[c(779)](e && e(o));
        for (d = "", u = 0; u < l[c(1001)]; u++) {
          var v = l[u], h = n(o[v]);
          h && (d && (d += ","), d += JSON[c(1581)](v) + ":" + h);
        }
        return r[c(2052)](f, 1), "{" + d + "}";
      }
    }(i);
  }), et;
}
var xt, ua;
function ln() {
  return ua || (ua = 1, xt = function(x, t, a) {
    var e = B, r = "", n = x[e(870)][e(1333)] === !0, o = x[e(288)][e(159)](x[e(870)], x.RULES[e(1946)], e(2259)), c = x[e(960)][e(344)](x[e(870)]);
    if (x[e(1266)].strictKeywords) {
      var u = x[e(288)][e(1963)](x[e(870)], x[e(1187)].keywords);
      if (u) {
        var d = e(2101) + u;
        if (x[e(1266)][e(2014)] === e(524)) x.logger[e(1348)](d);
        else throw new Error(d);
      }
    }
    if (x[e(1497)] && (r += " var validate = ", n && (x[e(1494)] = !0, r += e(1962)), r += e(557), c && (x[e(1266)].sourceCode || x.opts[e(2293)]) && (r += " " + ("/*# sourceURL=" + c + " */") + " ")), typeof x[e(870)] == e(325) || !(o || x[e(870)][e(2259)])) {
      var t = e(686), f = x.level, l = x[e(1628)], v = x[e(870)][t], h = x[e(2174)] + x[e(288)].getProperty(t), p = x.errSchemaPath + "/" + t, E = !x[e(1266)].allErrors, j, g = e(1512) + (l || ""), R = "valid" + f;
      if (x[e(870)] === !1) {
        x[e(1497)] ? E = !0 : r += e(2026) + R + e(1219);
        var w = w || [];
        w.push(r), r = "", x[e(764)] !== !1 ? (r += " { keyword: '" + (j || e(686)) + "' , dataPath: (dataPath || '') + " + x[e(757)] + e(2033) + x[e(288)][e(990)](p) + " , params: {} ", x[e(1266)][e(535)] !== !1 && (r += " , message: 'boolean schema is false' "), x[e(1266)][e(2439)] && (r += e(623) + x.schemaPath + " , data: " + g + " "), r += e(922)) : r += e(1066);
        var P = r;
        r = w[e(876)](), !x.compositeRule && E ? x[e(1494)] ? r += e(1775) + P + e(784) : r += e(1801) + P + e(1942) : r += e(1623) + P + e(1819);
      } else x[e(1497)] ? n ? r += e(1192) : r += e(449) : r += e(2026) + R + e(741);
      return x[e(1497)] && (r += e(2339)), r;
    }
    if (x[e(1497)]) {
      var F = x[e(1497)], f = x.level = 0, l = x[e(1628)] = 0, g = e(1512);
      if (x[e(333)] = x[e(695)][e(1255)](x[e(960)][e(344)](x.root[e(870)])), x[e(1014)] = x[e(1014)] || x[e(333)], delete x[e(1497)], x[e(189)] = [""], x[e(870)][e(2454)] !== void 0 && x[e(1266)].useDefaults && x[e(1266)][e(1383)]) {
        var O = e(1499);
        if (x[e(1266)][e(1383)] === "log") x[e(2218)][e(1348)](O);
        else throw new Error(O);
      }
      r += e(1338), r += e(1175), r += e(264);
    } else {
      var f = x.level, l = x[e(1628)], g = e(1512) + (l || "");
      if (c && (x[e(1014)] = x.resolve[e(1602)](x[e(1014)], c)), n && !x[e(1494)]) throw new Error(e(2384));
      r += e(505) + f + e(350);
    }
    var R = e(1467) + f, E = !x[e(1266)][e(313)], C = "", D = "", j, M = x[e(870)].type, q = Array.isArray(M);
    if (M && x[e(1266)].nullable && x[e(870)][e(1387)] === !0 && (q ? M[e(1616)](e(2348)) == -1 && (M = M[e(393)](e(2348))) : M != "null" && (M = [M, e(2348)], q = !0)), q && M[e(1001)] == 1 && (M = M[0], q = !1), x[e(870)][e(2259)] && o) {
      if (x[e(1266)][e(716)] == e(609)) throw new Error(e(1005) + x.errSchemaPath + e(939));
      x[e(1266)].extendRefs !== !0 && (o = !1, x[e(2218)][e(1348)](e(2004) + x[e(1110)] + '"'));
    }
    if (x[e(870)][e(1486)] && x[e(1266)][e(1486)] && (r += " " + x.RULES[e(1946)].$comment[e(1993)](x, e(1486))), M) {
      if (x[e(1266)][e(113)]) var N = x[e(288)][e(1547)](x[e(1266)][e(113)], M);
      var $ = x[e(1187)].types[M];
      if (N || q || $ === !0 || $ && !w0($)) {
        var h = x[e(2174)] + e(600), p = x[e(1110)] + e(1311), h = x[e(2174)] + ".type", p = x[e(1110)] + "/type", H = e(q ? 1426 : 1653);
        if (r += e(2433) + x[e(288)][H](M, g, x[e(1266)][e(270)], !0) + e(1196), N) {
          var V = e(929) + f, J = e(837) + f;
          r += e(2026) + V + e(879) + g + e(2377) + J + e(976), x[e(1266)].coerceTypes == e(791) && (r += e(2433) + V + e(601) + g + e(355) + g + e(1172) + g + e(528) + g + e(1887) + V + e(879) + g + e(2298) + x[e(288)][e(1653)](x[e(870)][e(399)], g, x[e(1266)][e(270)]) + ") " + J + " = " + g + "; } "), r += e(2433) + J + e(1139);
          var c0 = N;
          if (c0)
            for (var u0, l0 = -1, i0 = c0[e(1001)] - 1; l0 < i0; )
              u0 = c0[l0 += 1], u0 == e(389) ? r += e(696) + V + e(353) + V + e(2206) + J + e(1896) + g + e(419) + g + " === null) " + J + " = ''; " : u0 == "number" || u0 == e(2472) ? (r += " else if (" + V + e(2313) + g + e(2007) + V + e(1288) + g + e(1633) + g + e(1198) + g + " ", u0 == e(2472) && (r += e(1424) + g + e(1891)), r += e(1656) + J + e(1292) + g + "; ") : u0 == "boolean" ? r += e(696) + g + e(369) + g + e(1234) + g + e(1101) + J + e(1394) + g + " === 'true' || " + g + e(782) + J + e(741) : u0 == e(2348) ? r += e(696) + g + e(1929) + g + e(1234) + g + " === false) " + J + e(1679) : x[e(1266)].coerceTypes == e(791) && u0 == e(791) && (r += " else if (" + V + e(1894) + V + e(353) + V + e(2313) + g + e(998) + J + e(1619) + g + "]; ");
          r += e(685);
          var w = w || [];
          w[e(1472)](r), r = "", x.createErrors !== !1 ? (r += e(1754) + (j || e(399)) + e(1859) + x[e(757)] + e(2033) + x[e(288)].toQuotedString(p) + e(986), q ? r += "" + M[e(697)](",") : r += "" + M, r += e(900), x.opts[e(535)] !== !1 && (r += " , message: 'should be ", q ? r += "" + M[e(697)](",") : r += "" + M, r += "' "), x[e(1266)][e(2439)] && (r += e(109) + h + e(2452) + x[e(2174)] + e(2020) + g + " "), r += e(922)) : r += e(1066);
          var P = r;
          r = w.pop(), !x[e(252)] && E ? x[e(1494)] ? r += " throw new ValidationError([" + P + e(784) : r += " validate.errors = [" + P + e(1942) : r += " var err = " + P + e(1819), r += " } if (" + J + " !== undefined) {  ";
          var f0 = l ? e(1512) + (l - 1 || "") : e(217), S0 = l ? x[e(189)][l] : e(1293);
          r += " " + g + e(528) + J + "; ", !l && (r += e(901) + f0 + " !== undefined)"), r += " " + f0 + "[" + S0 + e(2389) + J + e(2455);
        } else {
          var w = w || [];
          w.push(r), r = "", x.createErrors !== !1 ? (r += e(1754) + (j || e(399)) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(2033) + x.util.toQuotedString(p) + e(986), q ? r += "" + M[e(697)](",") : r += "" + M, r += e(900), x[e(1266)].messages !== !1 && (r += e(688), q ? r += "" + M.join(",") : r += "" + M, r += "' "), x[e(1266)][e(2439)] && (r += e(109) + h + e(2452) + x[e(2174)] + " , data: " + g + " "), r += " } ") : r += e(1066);
          var P = r;
          r = w[e(876)](), !x[e(252)] && E ? x.async ? r += e(1775) + P + e(784) : r += e(1801) + P + e(1942) : r += e(1623) + P + e(1819);
        }
        r += " } ";
      }
    }
    if (x[e(870)][e(2259)] && !o) r += " " + x.RULES[e(1946)][e(2259)][e(1993)](x, e(2259)) + " ", E && (r += e(678), F ? r += "0" : r += "errs_" + f, r += ") { ", D += "}");
    else {
      var b0 = x[e(1187)];
      if (b0) {
        for (var $, M0 = -1, k0 = b0[e(1001)] - 1; M0 < k0; )
          if ($ = b0[M0 += 1], w0($)) {
            if ($.type && (r += e(2433) + x[e(288)].checkDataType($[e(399)], g, x.opts[e(270)]) + e(1196)), x[e(1266)][e(2013)]) {
              if ($[e(399)] == e(865) && x[e(870)][e(1140)]) {
                var v = x[e(870)].properties, Q0 = Object[e(2411)](v), A = Q0;
                if (A)
                  for (var T, z = -1, G = A.length - 1; z < G; ) {
                    T = A[z += 1];
                    var X = v[T];
                    if (X.default !== void 0) {
                      var W = g + x[e(288)].getProperty(T);
                      if (x[e(252)]) {
                        if (x[e(1266)].strictDefaults) {
                          var O = "default is ignored for: " + W;
                          if (x[e(1266)][e(1383)] === e(524)) x[e(2218)][e(1348)](O);
                          else throw new Error(O);
                        }
                      } else r += e(2433) + W + e(1872), x[e(1266)][e(2013)] == e(1498) && (r += e(711) + W + e(1099) + W + e(707)), r += e(1474) + W + " = ", x[e(1266)][e(2013)] == "shared" ? r += " " + x[e(1670)](X[e(2454)]) + " " : r += " " + JSON.stringify(X[e(2454)]) + " ", r += "; ";
                    }
                  }
              } else if ($[e(399)] == e(791) && Array[e(2305)](x[e(870)][e(464)])) {
                var Y = x.schema[e(464)];
                if (Y) {
                  for (var X, l0 = -1, s0 = Y[e(1001)] - 1; l0 < s0; )
                    if (X = Y[l0 += 1], X.default !== void 0) {
                      var W = g + "[" + l0 + "]";
                      if (x[e(252)]) {
                        if (x[e(1266)][e(1383)]) {
                          var O = "default is ignored for: " + W;
                          if (x[e(1266)].strictDefaults === e(524)) x[e(2218)].warn(O);
                          else throw new Error(O);
                        }
                      } else r += e(2433) + W + e(1872), x[e(1266)].useDefaults == "empty" && (r += " || " + W + e(1099) + W + " === '' "), r += " ) " + W + e(528), x[e(1266)][e(2013)] == e(499) ? r += " " + x[e(1670)](X[e(2454)]) + " " : r += " " + JSON[e(1581)](X[e(2454)]) + " ", r += "; ";
                    }
                }
              }
            }
            var o0 = $[e(1642)];
            if (o0) {
              for (var e0, L0 = -1, O0 = o0[e(1001)] - 1; L0 < O0; )
                if (e0 = o0[L0 += 1], G0(e0)) {
                  var V0 = e0.code(x, e0.keyword, $[e(399)]);
                  V0 && (r += " " + V0 + " ", E && (C += "}"));
                }
            }
            if (E && (r += " " + C + " ", C = ""), $.type && (r += e(922), M && M === $[e(399)] && !N)) {
              r += e(1798);
              var h = x[e(2174)] + ".type", p = x[e(1110)] + "/type", w = w || [];
              w.push(r), r = "", x[e(764)] !== !1 ? (r += e(1754) + (j || e(399)) + e(1859) + x.errorPath + " , schemaPath: " + x[e(288)][e(990)](p) + e(986), q ? r += "" + M[e(697)](",") : r += "" + M, r += "' } ", x.opts[e(535)] !== !1 && (r += e(688), q ? r += "" + M.join(",") : r += "" + M, r += "' "), x[e(1266)][e(2439)] && (r += e(109) + h + e(2452) + x[e(2174)] + e(2020) + g + " "), r += e(922)) : r += e(1066);
              var P = r;
              r = w[e(876)](), !x[e(252)] && E ? x[e(1494)] ? r += e(1775) + P + e(784) : r += e(1801) + P + e(1942) : r += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += e(922);
            }
            E && (r += e(409), F ? r += "0" : r += e(763) + f, r += e(1196), D += "}");
          }
      }
    }
    E && (r += " " + D + " "), F ? (n ? (r += " if (errors === 0) return data;           ", r += e(1542)) : (r += " validate.errors = vErrors; ", r += e(2321)), r += e(556)) : r += e(2026) + R + e(913) + f + ";";
    function w0(Y0) {
      for (var A0 = Y0.rules, $0 = 0; $0 < A0.length; $0++) if (G0(A0[$0])) return !0;
    }
    function G0(Y0) {
      var A0 = e;
      return x[A0(870)][Y0.keyword] !== void 0 || Y0[A0(881)] && se(Y0);
    }
    function se(Y0) {
      for (var A0 = e, $0 = Y0[A0(881)], ne = 0; ne < $0[A0(1001)]; ne++) if (x[A0(870)][$0[ne]] !== void 0) return !0;
    }
    return r;
  }), xt;
}
var tt, da;
function L2() {
  var i = s;
  if (da) return tt;
  da = 1;
  var x = cr(), t = We(), a = ur(), e = fn(), r = ln(), n = t.ucs2length, o = or(), c = a[i(1210)];
  tt = u;
  function u(P, F, O, R) {
    var E = i, C = this, D = this[E(1755)], j = [void 0], M = {}, q = [], N = {}, $ = [], H = {}, V = [];
    F = F || { schema: P, refVal: j, refs: M };
    var J = d[E(801)](this, P, F, R), c0 = this[E(973)][J[E(1360)]];
    if (J[E(2200)]) return c0[E(1842)] = S0;
    var u0 = this[E(1774)], l0 = this[E(1187)];
    try {
      var i0 = b0(P, F, O, R);
      c0[E(1768)] = i0;
      var f0 = c0.callValidate;
      return f0 && (f0.schema = i0[E(870)], f0[E(2244)] = null, f0[E(1694)] = i0[E(1694)], f0[E(580)] = i0[E(580)], f0.root = i0[E(1573)], f0[E(1333)] = i0[E(1333)], D[E(1899)] && (f0.source = i0[E(2217)])), i0;
    } finally {
      f[E(801)](this, P, F, R);
    }
    function S0() {
      var W = E, Y = c0.validate, s0 = Y[W(1720)](this, arguments);
      return S0[W(2244)] = Y[W(2244)], s0;
    }
    function b0(W, Y, s0, o0) {
      var e0 = E, L0 = !Y || Y && Y[e0(870)] == W;
      if (Y[e0(870)] != F[e0(870)]) return u[e0(801)](C, W, Y, s0, o0);
      var O0 = W[e0(1333)] === !0, V0 = r({ isTop: !0, schema: W, isRoot: L0, baseId: o0, root: Y, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: a[e0(326)], RULES: l0, validate: r, util: t, resolve: x, resolveRef: M0, usePattern: z, useDefault: G, useCustomRule: X, opts: D, formats: u0, logger: C[e0(2218)], self: C });
      V0 = w(j, p) + w(q, v) + w($, h) + w(V, g) + V0, D[e0(2293)] && (V0 = D[e0(2293)](V0, W));
      var w0;
      try {
        var G0 = new Function(e0(960), "RULES", e0(704), e0(1573), "refVal", e0(2292), e0(1033), e0(1658), e0(835), e0(2436), V0);
        w0 = G0(C, l0, u0, F, j, $, V, o, n, c), j[0] = w0;
      } catch (se) {
        throw C[e0(2218)].error("Error compiling schema, function code:", V0), se;
      }
      return w0.schema = W, w0.errors = null, w0[e0(1694)] = M, w0.refVal = j, w0[e0(1573)] = L0 ? w0 : Y, O0 && (w0[e0(1333)] = !0), D.sourceCode === !0 && (w0[e0(2217)] = { code: V0, patterns: q, defaults: $ }), w0;
    }
    function M0(W, Y, s0) {
      var o0 = E;
      Y = x[o0(1602)](W, Y);
      var e0 = M[Y], L0, O0;
      if (e0 !== void 0) return L0 = j[e0], O0 = "refVal[" + e0 + "]", T(L0, O0);
      if (!s0 && F[o0(1694)]) {
        var V0 = F.refs[Y];
        if (V0 !== void 0) return L0 = F[o0(580)][V0], O0 = k0(Y, L0), T(L0, O0);
      }
      O0 = k0(Y);
      var w0 = x[o0(801)](C, b0, F, Y);
      if (w0 === void 0) {
        var G0 = O && O[Y];
        G0 && (w0 = x[o0(1418)](G0, D[o0(1890)]) ? G0 : u.call(C, G0, F, O, W));
      }
      if (w0 === void 0) Q0(Y);
      else return A(Y, w0), T(w0, O0);
    }
    function k0(W, Y) {
      var s0 = E, o0 = j[s0(1001)];
      return j[o0] = Y, M[W] = o0, s0(580) + o0;
    }
    function Q0(W) {
      delete M[W];
    }
    function A(W, Y) {
      var s0 = M[W];
      j[s0] = Y;
    }
    function T(W, Y) {
      var s0 = E;
      return typeof W == s0(865) || typeof W == s0(325) ? { code: Y, schema: W, inline: !0 } : { code: Y, $async: W && !!W[s0(1333)] };
    }
    function z(W) {
      var Y = E, s0 = N[W];
      return s0 === void 0 && (s0 = N[W] = q.length, q[s0] = W), Y(235) + s0;
    }
    function G(W) {
      var Y = E;
      switch (typeof W) {
        case Y(325):
        case "number":
          return "" + W;
        case "string":
          return t[Y(990)](W);
        case Y(865):
          if (W === null) return Y(2348);
          var s0 = e(W), o0 = H[s0];
          return o0 === void 0 && (o0 = H[s0] = $[Y(1001)], $[o0] = W), Y(2454) + o0;
      }
    }
    function X(W, Y, s0, o0) {
      var e0 = E;
      if (C[e0(1755)][e0(1229)] !== !1) {
        var L0 = W[e0(154)][e0(1050)];
        if (L0 && !L0[e0(2103)](function(ne) {
          var Ze = e0;
          return Object[Ze(2123)].hasOwnProperty.call(s0, ne);
        })) throw new Error("parent schema must have all required keywords: " + L0[e0(697)](","));
        var O0 = W[e0(154)].validateSchema;
        if (O0) {
          var V0 = O0(Y);
          if (!V0) {
            var w0 = "keyword schema is invalid: " + C[e0(2166)](O0.errors);
            if (C[e0(1755)].validateSchema == e0(524)) C.logger[e0(1106)](w0);
            else throw new Error(w0);
          }
        }
      }
      var G0 = W[e0(154)][e0(280)], se = W[e0(154)][e0(898)], Y0 = W[e0(154)][e0(1280)], A0;
      if (G0) A0 = G0[e0(801)](C, Y, s0, o0);
      else if (Y0)
        A0 = Y0.call(C, Y, s0, o0), D[e0(1229)] !== !1 && C[e0(1229)](A0, !0);
      else if (se) A0 = se[e0(801)](C, o0, W[e0(1411)], Y, s0);
      else if (A0 = W[e0(154)][e0(1768)], !A0) return;
      if (A0 === void 0) throw new Error('custom keyword "' + W.keyword + e0(475));
      var $0 = V[e0(1001)];
      return V[$0] = A0, { code: e0(762) + $0, validate: A0 };
    }
  }
  function d(P, F, O) {
    var R = i, E = l.call(this, P, F, O);
    return E >= 0 ? { index: E, compiling: !0 } : (E = this._compilations[R(1001)], this[R(973)][E] = { schema: P, root: F, baseId: O }, { index: E, compiling: !1 });
  }
  function f(P, F, O) {
    var R = i, E = l.call(this, P, F, O);
    E >= 0 && this._compilations[R(2052)](E, 1);
  }
  function l(P, F, O) {
    for (var R = i, E = 0; E < this[R(973)][R(1001)]; E++) {
      var C = this._compilations[E];
      if (C.schema == P && C[R(1573)] == F && C[R(1014)] == O) return E;
    }
    return -1;
  }
  function v(P, F) {
    var O = i;
    return O(1810) + P + " = new RegExp(" + t[O(990)](F[P]) + ");";
  }
  function h(P) {
    var F = i;
    return F(1776) + P + " = defaults[" + P + "];";
  }
  function p(P, F) {
    var O = i;
    return F[P] === void 0 ? "" : O(743) + P + O(2034) + P + "];";
  }
  function g(P) {
    var F = i;
    return F(1590) + P + F(1748) + P + "];";
  }
  function w(P, F) {
    var O = i;
    if (!P[O(1001)]) return "";
    for (var R = "", E = 0; E < P[O(1001)]; E++) R += F(E, P);
    return R;
  }
  return tt;
}
var rt = { exports: {} }, fa;
function $2() {
  var i = s;
  if (fa) return rt[i(1213)];
  fa = 1;
  var x = rt[i(1213)] = function() {
    this._cache = {};
  };
  return x[i(2123)][i(882)] = function(a, e) {
    var r = i;
    this[r(2188)][a] = e;
  }, x[i(2123)][i(1195)] = function(a) {
    var e = i;
    return this[e(2188)][a];
  }, x[i(2123)][i(2179)] = function(a) {
    var e = i;
    delete this[e(2188)][a];
  }, x[i(2123)][i(1332)] = function() {
    var a = i;
    this[a(2188)] = {};
  }, rt[i(1213)];
}
var at, la;
function z2() {
  var i = s;
  if (la) return at;
  la = 1;
  var x = We(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, r = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, d = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, f = /^(?:\/(?:[^~/]|~0|~1)*)*$/, l = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, v = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  at = h;
  function h(D) {
    var j = B;
    return D = D == j(1445) ? j(1445) : j(1161), x[j(771)](h[D]);
  }
  h[i(1161)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: d, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": v }, h[i(1445)] = { date: g, time: w, "date-time": F, uri: R, "uri-reference": o, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: C, uuid: d, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": v };
  function p(D) {
    return D % 4 === 0 && (D % 100 !== 0 || D % 400 === 0);
  }
  function g(D) {
    var j = i, M = D[j(1548)](t);
    if (!M) return !1;
    var q = +M[1], N = +M[2], $ = +M[3];
    return N >= 1 && N <= 12 && $ >= 1 && $ <= (N == 2 && p(q) ? 29 : a[N]);
  }
  function w(D, j) {
    var M = D.match(e);
    if (!M) return !1;
    var q = M[1], N = M[2], $ = M[3], H = M[5];
    return (q <= 23 && N <= 59 && $ <= 59 || q == 23 && N == 59 && $ == 60) && (!j || H);
  }
  var P = /t|\s/i;
  function F(D) {
    var j = i, M = D[j(1464)](P);
    return M[j(1001)] == 2 && g(M[0]) && w(M[1], !0);
  }
  var O = /\/|:/;
  function R(D) {
    var j = i;
    return O.test(D) && n[j(2105)](D);
  }
  var E = /[^\\]\\Z/;
  function C(D) {
    var j = i;
    if (E[j(2105)](D)) return !1;
    try {
      return new RegExp(D), !0;
    } catch {
      return !1;
    }
  }
  return at;
}
var st, ha;
function H2() {
  return ha || (ha = 1, st = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x[e(1110)] + "/" + t, d = !x[e(1266)][e(313)], f = "data" + (o || ""), l = e(1467) + n, v, h;
    if (c == "#" || c == "#/") x[e(2019)] ? (v = x[e(1494)], h = e(1768)) : (v = x[e(1573)][e(870)][e(1333)] === !0, h = e(402));
    else {
      var p = x[e(1274)](x.baseId, c, x[e(2019)]);
      if (p === void 0) {
        var g = x[e(1950)].message(x.baseId, c);
        if (x.opts[e(676)] == "fail") {
          x[e(2218)].error(g);
          var w = w || [];
          w[e(1472)](r), r = "", x[e(764)] !== !1 ? (r += e(1754) + e(2259) + e(1859) + x[e(757)] + e(2033) + x[e(288)][e(990)](u) + " , params: { ref: '" + x[e(288)][e(498)](c) + "' } ", x[e(1266)][e(535)] !== !1 && (r += " , message: 'can\\'t resolve reference " + x[e(288)][e(498)](c) + "' "), x[e(1266)][e(2439)] && (r += e(361) + x[e(288)][e(990)](c) + e(2452) + x[e(2174)] + e(2020) + f + " "), r += " } ") : r += " {} ";
          var P = r;
          r = w[e(876)](), !x[e(252)] && d ? x[e(1494)] ? r += e(1775) + P + e(784) : r += e(1801) + P + e(1942) : r += e(1623) + P + e(1819), d && (r += e(496));
        } else if (x[e(1266)][e(676)] == e(1378)) x[e(2218)][e(1348)](g), d && (r += e(731));
        else throw new x.MissingRefError(x.baseId, c, g);
      } else if (p[e(898)]) {
        var F = x[e(288)][e(771)](x);
        F[e(1068)]++;
        var O = e(1467) + F[e(1068)];
        F[e(870)] = p[e(870)], F[e(2174)] = "", F[e(1110)] = c;
        var R = x.validate(F).replace(/validate\.schema/g, p[e(1993)]);
        r += " " + R + " ", d && (r += e(2433) + O + e(1196));
      } else v = p[e(1333)] === !0 || x[e(1494)] && p[e(1333)] !== !1, h = p.code;
    }
    if (h) {
      var w = w || [];
      w.push(r), r = "", x.opts[e(1449)] ? r += " " + h + e(705) : r += " " + h + "( ", r += " " + f + e(2196), x[e(757)] != '""' && (r += e(510) + x[e(757)]);
      var E = o ? e(1512) + (o - 1 || "") : e(217), C = o ? x.dataPathArr[o] : e(1293);
      r += e(1584) + E + e(1584) + C + e(259);
      var D = r;
      if (r = w[e(876)](), v) {
        if (!x.async) throw new Error(e(1403));
        d && (r += " var " + l + "; "), r += e(812) + D + "; ", d && (r += " " + l + e(741)), r += e(1371), d && (r += " " + l + e(1219)), r += " } ", d && (r += e(2433) + l + e(1196));
      } else r += e(453) + D + e(1583) + h + e(2283) + h + e(2437), d && (r += " else { ");
    }
    return r;
  }), st;
}
var nt, pa;
function U2() {
  return pa || (pa = 1, nt = function(x, t, a) {
    var e = B, r = " ", n = x[e(870)][t], o = x.schemaPath + x[e(288)].getProperty(t), c = x[e(1110)] + "/" + t, u = !x.opts.allErrors, d = x[e(288)][e(771)](x), f = "";
    d[e(1068)]++;
    var l = e(1467) + d[e(1068)], v = d[e(1014)], h = !0, p = n;
    if (p)
      for (var g, w = -1, P = p[e(1001)] - 1; w < P; )
        g = p[w += 1], (x[e(1266)][e(2014)] ? typeof g == "object" && Object[e(2411)](g)[e(1001)] > 0 || g === !1 : x.util.schemaHasRules(g, x[e(1187)][e(1946)])) && (h = !1, d[e(870)] = g, d[e(2174)] = o + "[" + w + "]", d.errSchemaPath = c + "/" + w, r += "  " + x.validate(d) + " ", d[e(1014)] = v, u && (r += e(2433) + l + ") { ", f += "}"));
    return u && (h ? r += " if (true) { " : r += " " + f[e(2349)](0, -1) + " "), r;
  }), nt;
}
var it, ma;
function V2() {
  return ma || (ma = 1, it = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x[e(2174)] + x[e(288)][e(1034)](t), d = x[e(1110)] + "/" + t, f = !x[e(1266)][e(313)], l = "data" + (o || ""), v = e(1467) + n, h = "errs__" + n, p = x[e(288)].copy(x), g = "";
    p.level++;
    var w = e(1467) + p[e(1068)], P = c.every(function(j) {
      var M = e;
      return x[M(1266)][M(2014)] ? typeof j == M(865) && Object[M(2411)](j).length > 0 || j === !1 : x[M(288)].schemaHasRules(j, x.RULES.all);
    });
    if (P) {
      var F = p[e(1014)];
      r += e(2026) + h + e(327) + v + e(750);
      var O = x[e(252)];
      x[e(252)] = p[e(252)] = !0;
      var R = c;
      if (R)
        for (var E, C = -1, D = R[e(1001)] - 1; C < D; )
          E = R[C += 1], p[e(870)] = E, p.schemaPath = u + "[" + C + "]", p[e(1110)] = d + "/" + C, r += "  " + x[e(1768)](p) + " ", p[e(1014)] = F, r += " " + v + e(528) + v + e(711) + w + e(907) + v + e(1196), g += "}";
      x[e(252)] = p.compositeRule = O, r += " " + g + e(453) + v + ") {   var err =   ", x[e(764)] !== !1 ? (r += e(1754) + "anyOf" + e(1859) + x[e(757)] + e(2033) + x[e(288)][e(990)](d) + " , params: {} ", x[e(1266)][e(535)] !== !1 && (r += e(692)), x[e(1266)][e(2439)] && (r += " , schema: validate.schema" + u + e(2452) + x[e(2174)] + e(2020) + l + " "), r += " } ") : r += " {} ", r += e(1819), !x[e(252)] && f && (x[e(1494)] ? r += e(143) : r += " validate.errors = vErrors; return false; "), r += e(451) + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + e(1334), x.opts[e(313)] && (r += e(922));
    } else f && (r += e(731));
    return r;
  }), it;
}
var ot, va;
function W2() {
  return va || (va = 1, ot = function(x, t, a) {
    var e = B, r = " ", n = x.schema[t], o = x.errSchemaPath + "/" + t;
    x[e(1266)].allErrors;
    var c = x.util[e(990)](n);
    return x[e(1266)][e(1486)] === !0 ? r += " console.log(" + c + ");" : typeof x.opts[e(1486)] == "function" && (r += e(1826) + c + ", " + x.util[e(990)](o) + ", validate.root.schema);"), r;
  }), ot;
}
var ct, ga;
function Z2() {
  return ga || (ga = 1, ct = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x[e(2174)] + x[e(288)].getProperty(t), d = x[e(1110)] + "/" + t, f = !x[e(1266)].allErrors, l = "data" + (o || ""), v = e(1467) + n, h = x[e(1266)][e(1517)] && c && c[e(1517)];
    h && (r += e(2017) + n + " = " + x[e(288)][e(274)](c[e(1517)], o, x.dataPathArr) + "; "), !h && (r += e(2017) + n + e(2100) + u + ";"), r += e(1480) + v + " = equal(" + l + ", schema" + n + e(2344) + v + e(681);
    var p = p || [];
    p[e(1472)](r), r = "", x[e(764)] !== !1 ? (r += " { keyword: '" + e(596) + e(1859) + x[e(757)] + e(2033) + x[e(288)].toQuotedString(d) + " , params: { allowedValue: schema" + n + e(922), x.opts[e(535)] !== !1 && (r += " , message: 'should be equal to constant' "), x.opts[e(2439)] && (r += e(109) + u + e(2452) + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += e(1066);
    var g = r;
    return r = p.pop(), !x[e(252)] && f ? x[e(1494)] ? r += e(1775) + g + e(784) : r += " validate.errors = [" + g + "]; return false; " : r += " var err = " + g + e(1819), r += " }", f && (r += e(1798)), r;
  }), ct;
}
var ut, ya;
function B2() {
  return ya || (ya = 1, ut = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x[e(2174)] + x[e(288)].getProperty(t), d = x[e(1110)] + "/" + t, f = !x[e(1266)].allErrors, l = "data" + (o || ""), v = "valid" + n, h = e(1969) + n, p = x[e(288)][e(771)](x), g = "";
    p[e(1068)]++;
    var w = e(1467) + p[e(1068)], P = "i" + n, F = p[e(1628)] = x[e(1628)] + 1, O = e(1512) + F, R = x.baseId, E = x[e(1266)].strictKeywords ? typeof c == e(865) && Object.keys(c)[e(1001)] > 0 || c === !1 : x[e(288)][e(954)](c, x.RULES.all);
    if (r += e(1480) + h + e(1365) + v + ";", E) {
      var C = x[e(252)];
      x.compositeRule = p[e(252)] = !0, p.schema = c, p[e(2174)] = u, p[e(1110)] = d, r += e(2026) + w + e(2215) + P + e(330) + P + " < " + l + ".length; " + P + e(481), p[e(757)] = x[e(288)][e(1673)](x.errorPath, P, x[e(1266)][e(1954)], !0);
      var D = l + "[" + P + "]";
      p[e(189)][F] = P;
      var j = x.validate(p);
      p[e(1014)] = R, x.util[e(1617)](j, O) < 2 ? r += " " + x[e(288)].varReplace(j, O, D) + " " : r += e(2026) + O + e(528) + D + "; " + j + " ", r += e(2433) + w + e(1264), x[e(252)] = p[e(252)] = C, r += " " + g + e(453) + w + ") {";
    } else r += e(2433) + l + e(943);
    var M = M || [];
    M[e(1472)](r), r = "", x[e(764)] !== !1 ? (r += e(1754) + e(599) + e(1859) + x.errorPath + e(2033) + x[e(288)].toQuotedString(d) + " , params: {} ", x[e(1266)].messages !== !1 && (r += " , message: 'should contain a valid item' "), x.opts[e(2439)] && (r += " , schema: validate.schema" + u + e(2452) + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += " {} ";
    var q = r;
    return r = M[e(876)](), !x[e(252)] && f ? x[e(1494)] ? r += e(1775) + q + e(784) : r += e(1801) + q + e(1942) : r += e(1623) + q + e(1819), r += e(1209), E && (r += e(1706) + h + e(2191) + h + e(911) + h + "; else vErrors = null; } "), x[e(1266)][e(313)] && (r += " } "), r;
  }), ut;
}
var dt, ba;
function K2() {
  return ba || (ba = 1, dt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x.dataLevel, c = x[e(870)][t], u = x[e(2174)] + x[e(288)][e(1034)](t), d = x[e(1110)] + "/" + t, f = !x.opts[e(313)], l = e(1512) + (o || ""), v = e(1969) + n, h = x[e(288)][e(771)](x), p = "";
    h[e(1068)]++;
    var g = "valid" + h.level, w = {}, P = {}, F = x[e(1266)][e(319)];
    for (C in c)
      if (C != e(1395)) {
        var O = c[C], R = Array[e(2305)](O) ? P : w;
        R[C] = O;
      }
    r += e(1480) + v + e(350);
    var E = x[e(757)];
    r += e(222) + n + ";";
    for (var C in P)
      if (R = P[C], R.length) {
        if (r += e(1530) + l + x[e(288)].getProperty(C) + e(890), F && (r += " && Object.prototype.hasOwnProperty.call(" + l + e(888) + x.util[e(498)](C) + e(501)), f) {
          r += e(473);
          var D = R;
          if (D)
            for (var j, M = -1, q = D.length - 1; M < q; ) {
              j = D[M += 1], M && (r += " || ");
              var N = x[e(288)].getProperty(j), $ = l + N;
              r += e(985) + $ + e(1872), F && (r += e(1435) + l + e(888) + x[e(288)][e(498)](j) + e(501)), r += e(544) + n + e(528) + x[e(288)].toQuotedString(x.opts[e(1954)] ? j : N) + e(231);
            }
          r += e(1367);
          var H = e(2408) + n, V = e(1107) + H + e(668);
          x[e(1266)][e(1578)] && (x[e(757)] = x[e(1266)][e(1954)] ? x.util[e(1673)](E, H, !0) : E + e(510) + H);
          var J = J || [];
          J[e(1472)](r), r = "", x[e(764)] !== !1 ? (r += e(1754) + e(1050) + e(1859) + x[e(757)] + e(2033) + x[e(288)].toQuotedString(d) + " , params: { property: '" + x.util[e(498)](C) + "', missingProperty: '" + V + e(1339) + R[e(1001)] + ", deps: '" + x.util.escapeQuotes(R[e(1001)] == 1 ? R[0] : R[e(697)](", ")) + e(900), x[e(1266)][e(535)] !== !1 && (r += e(1538), R[e(1001)] == 1 ? r += e(1020) + x[e(288)].escapeQuotes(R[0]) : r += e(238) + x[e(288)][e(498)](R.join(", ")), r += e(816) + x[e(288)][e(498)](C) + e(1188)), x[e(1266)][e(2439)] && (r += e(109) + u + " , parentSchema: validate.schema" + x[e(2174)] + " , data: " + l + " "), r += e(922)) : r += e(1066);
          var c0 = r;
          r = J[e(876)](), !x[e(252)] && f ? x[e(1494)] ? r += e(1775) + c0 + e(784) : r += e(1801) + c0 + e(1942) : r += " var err = " + c0 + e(1819);
        } else {
          r += e(798);
          var u0 = R;
          if (u0)
            for (var j, l0 = -1, i0 = u0[e(1001)] - 1; l0 < i0; ) {
              j = u0[l0 += 1];
              var N = x[e(288)][e(1034)](j), V = x.util[e(498)](j), $ = l + N;
              x[e(1266)]._errorDataPathProperty && (x.errorPath = x[e(288)][e(1624)](E, j, x.opts[e(1954)])), r += e(1530) + $ + e(1872), F && (r += " || ! Object.prototype.hasOwnProperty.call(" + l + e(888) + x[e(288)][e(498)](j) + "') "), r += e(2235), x.createErrors !== !1 ? (r += e(1754) + e(1050) + "' , dataPath: (dataPath || '') + " + x[e(757)] + e(2033) + x[e(288)][e(990)](d) + e(2414) + x[e(288)][e(498)](C) + e(545) + V + "', depsCount: " + R[e(1001)] + e(523) + x[e(288)].escapeQuotes(R[e(1001)] == 1 ? R[0] : R.join(", ")) + e(900), x.opts[e(535)] !== !1 && (r += e(1538), R[e(1001)] == 1 ? r += e(1020) + x[e(288)][e(498)](R[0]) : r += e(238) + x[e(288)][e(498)](R[e(697)](", ")), r += " when property " + x[e(288)][e(498)](C) + e(1188)), x.opts[e(2439)] && (r += e(109) + u + e(2452) + x.schemaPath + e(2020) + l + " "), r += e(922)) : r += e(1066), r += e(1587);
            }
        }
        r += e(1629), f && (p += "}", r += e(1798));
      }
    x[e(757)] = E;
    var f0 = h.baseId;
    for (var C in w) {
      var O = w[C];
      (x[e(1266)][e(2014)] ? typeof O == "object" && Object[e(2411)](O).length > 0 || O === !1 : x[e(288)][e(954)](O, x.RULES.all)) && (r += " " + g + " = true; if ( " + l + x.util[e(1034)](C) + e(890), F && (r += e(804) + l + ", '" + x[e(288)][e(498)](C) + e(501)), r += e(1196), h[e(870)] = O, h[e(2174)] = u + x[e(288)].getProperty(C), h[e(1110)] = d + "/" + x.util.escapeFragment(C), r += "  " + x[e(1768)](h) + " ", h[e(1014)] = f0, r += e(223), f && (r += e(2433) + g + e(1196), p += "}"));
    }
    return f && (r += e(2350) + p + e(2433) + v + e(133)), r;
  }), dt;
}
var ft, wa;
function J2() {
  return wa || (wa = 1, ft = function(x, t, a) {
    var e = B, r = " ", n = x.level, o = x[e(1628)], c = x[e(870)][t], u = x[e(2174)] + x[e(288)][e(1034)](t), d = x[e(1110)] + "/" + t, f = !x[e(1266)].allErrors, l = e(1512) + (o || ""), v = e(1467) + n, h = x.opts[e(1517)] && c && c.$data;
    h && (r += " var schema" + n + e(528) + x[e(288)][e(274)](c[e(1517)], o, x[e(189)]) + "; ");
    var p = "i" + n, g = e(870) + n;
    !h && (r += " var " + g + e(2100) + u + ";"), r += e(1480) + v + ";", h && (r += e(1745) + n + e(1665) + v + e(814) + n + ")) " + v + e(1124)), r += "" + v + e(519) + p + "=0; " + p + "<" + g + e(1452) + p + "++) if (equal(" + l + ", " + g + "[" + p + "])) { " + v + " = true; break; }", h && (r += e(345)), r += e(453) + v + e(681);
    var w = w || [];
    w[e(1472)](r), r = "", x[e(764)] !== !1 ? (r += e(1754) + "enum" + e(1859) + x[e(757)] + " , schemaPath: " + x[e(288)][e(990)](d) + e(1743) + n + e(922), x.opts[e(535)] !== !1 && (r += e(912)), x[e(1266)][e(2439)] && (r += e(109) + u + e(2452) + x.schemaPath + e(2020) + l + " "), r += e(922)) : r += " {} ";
    var P = r;
    return r = w.pop(), !x[e(252)] && f ? x[e(1494)] ? r += e(1775) + P + e(784) : r += e(1801) + P + e(1942) : r += e(1623) + P + e(1819), r += " }", f && (r += e(1798)), r;
  }), ft;
}
var lt, Sa;
function G2() {
  return Sa || (Sa = 1, lt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x[e(2174)] + x.util[e(1034)](t), d = x[e(1110)] + "/" + t, f = !x[e(1266)][e(313)], l = e(1512) + (o || "");
    if (x[e(1266)][e(1678)] === !1) return f && (r += e(731)), r;
    var v = x[e(1266)][e(1517)] && c && c[e(1517)], h;
    v ? (r += " var schema" + n + e(528) + x[e(288)][e(274)](c[e(1517)], o, x[e(189)]) + "; ", h = "schema" + n) : h = c;
    var p = x[e(1266)][e(2251)], g = Array[e(2305)](p);
    if (v) {
      var w = e(1678) + n, P = e(307) + n, F = e(400) + n;
      r += e(2026) + w + e(597) + h + e(1507) + P + e(879) + w + e(2175) + w + e(446) + w + e(214) + F + e(528) + P + e(1633) + w + ".type || 'string'; if (" + P + ") { ", x[e(1494)] && (r += e(2329) + n + " = " + w + e(916)), r += " " + w + e(528) + w + e(752), v && (r += " (" + h + e(2054) + h + e(142)), r += " (", p != e(1378) && (r += " (" + h + " && !" + w + " ", g && (r += e(1967) + h + e(504)), r += ") || "), r += " (" + w + e(1633) + F + e(558) + a + e(2058) + w + " == 'function' ? ", x[e(1494)] ? r += e(1818) + n + " ? await " + w + "(" + l + e(958) + w + "(" + l + e(1656) : r += " " + w + "(" + l + ") ", r += e(2104) + w + e(972) + l + e(1422);
    } else {
      var w = x[e(704)][c];
      if (!w) {
        if (p == "ignore") return x[e(2218)][e(1348)]('unknown format "' + c + e(1852) + x[e(1110)] + '"'), f && (r += e(731)), r;
        if (g && p.indexOf(c) >= 0) return f && (r += e(731)), r;
        throw new Error(e(1820) + c + e(1156) + x[e(1110)] + '"');
      }
      var P = typeof w == "object" && !(w instanceof RegExp) && w[e(1768)], F = P && w[e(399)] || e(389);
      if (P) {
        var O = w[e(1494)] === !0;
        w = w[e(1768)];
      }
      if (F != a) return f && (r += e(731)), r;
      if (O) {
        if (!x.async) throw new Error(e(2306));
        var R = e(704) + x[e(288)][e(1034)](c) + e(1660);
        r += e(1056) + R + "(" + l + e(735);
      } else {
        r += " if (! ";
        var R = "formats" + x[e(288)][e(1034)](c);
        P && (R += ".validate"), typeof w == e(834) ? r += " " + R + "(" + l + ") " : r += " " + R + ".test(" + l + ") ", r += e(1196);
      }
    }
    var E = E || [];
    E[e(1472)](r), r = "", x[e(764)] !== !1 ? (r += e(1754) + e(1678) + e(1859) + x[e(757)] + e(2033) + x[e(288)][e(990)](d) + " , params: { format:  ", v ? r += "" + h : r += "" + x.util.toQuotedString(c), r += e(278), x[e(1266)].messages !== !1 && (r += e(1310), v ? r += "' + " + h + e(668) : r += "" + x[e(288)][e(498)](c), r += e(2447)), x[e(1266)][e(2439)] && (r += e(720), v ? r += "validate.schema" + u : r += "" + x[e(288)].toQuotedString(c), r += "         , parentSchema: validate.schema" + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += e(1066);
    var C = r;
    return r = E.pop(), !x[e(252)] && f ? x[e(1494)] ? r += e(1775) + C + e(784) : r += e(1801) + C + "]; return false; " : r += e(1623) + C + e(1819), r += e(922), f && (r += e(1798)), r;
  }), lt;
}
function Fx() {
  var i = ["contentEncoding", " Object.keys(", " = undefined;", "curr", " not implemented for node ", "Send all", "_capabilities", "runningRequests", "greater than or equal to ", "uiWeightSum", " not found for node ", "lngs", "shift", "activeWorkflow", "hasLoadedNamespace", "avl", "_transport", "按选区裁剪", "_pendingDebouncedNotifications", "Graph must have at least one node", "#CC9933", "document {0} not found", "protocol", "missingRef", "assistant", "cidr", "sourceType", "URN can not be parsed.", "suffix", "iri", "ZodMap", "reverse", "#0000CC", "图层 {{0}} 不是一个组", "Task cancelled", " , params: { passingSchemas: ", "errorsText", "prompt_id", "Keyword ", "capabilities", "设为画布", "removeMessageEventListener", "保存当前", "不支持非文本图层: {{0}}", "schemaPath", " == 'object' && !(", "arrayKeywords", "requestInitialStateForNode", "_requestHandlers", "del", ") break; ", "Invalid proxy forwarding: current node ", "read", "toLoad", "Plugin window focused required to use keyboard shortcut", "MIN_SAFE_INTEGER", "localRefs", "yhd", "_cache", "options.loadSchema should be a function", "ZodSet", "; if (vErrors !== null) { if (", "dev", "years", "postProcessPassResolved", "Fit to canvas", ", (dataPath || '')", "ruleErr", "正在等待图片上传...", '.schemaPath = "', "compiling", " validate.errors = vErrors; return false; ", "assertRequestHandlerCapability", "success", "sdppp/broadcast", "port", " == 'boolean') ", "loading namespace ", "#99CC00", "multipleOfPrecision", "errToObj", "当前图层范围", "yds", "ZodFunction", "nid", " = false; for (var ", "[i], ", "source", "logger", "fatal", "addIssue", "if ( ", ") ? ", "lng", "Received a response for an unknown message ID: ", "$t(", "normalize", "Connection closed", "MAX_SAFE_INTEGER", "toUnicode", "setupNodeBindings", "[A-Za-z]", "callback", " = await ", "unsetNotificationHandler", ") {  var err =   ", "syncStoresToNewConnection", "res", "uiWeight", "Creating task...", "&#x2F;", "+Shift 调整更多选项；Ctrl 单次获取。", "ZodEffects", "postProcess", "errors", "getNodeTitle", "msec", "title", "addMiddleware", "errorHandlers", "after app.queuePrompt errors: ", "unknownFormats", "Clear guide frame", "Action handler ", "ayh", ";if (", '" resolves to more than one schema', "创建文档失败", "remove", "$ref", "#CC33FF", "returnNull", "comfy_api_key", "Model with affordable price, abundant community applications", ".else", "messageQueue", "#0066CC", "finished", "_progressHandlers", "currentOnly", "invalid_enum_value", "_requestMessageId", "[0-9]", "ZodOptional", ", exclusive: ", "Set text to layer", "#CCCC33", ") ) {   ", "{0,5}", "invalid-input", "user", "isRequest", "Delete current", ".errors; else vErrors = vErrors.concat(", " = true , j; if (i > 1) { ", "tolerant", "Converting circular structure to JSON", "[object Function]", "Entire Canvas", "names", "keyPrefix", "Current Selection", "defaults", "processCode", "compileAsync", "lte", "uiLocale", "setupAbortHandler", "; if (", "onerror", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "InvalidParams", "Intersection results could not be merged", "No linked layer for {{0}}", "2.0", "isArray", "async format in sync schema", "<errors; ", "optionsMap", " for nesting ", "清除参考线框架", "_onerror", "node", " == 'boolean' || ", "ars", "transport", "formData", "getFixedT", "signal", "notifications/initialized", "handleIncomingRequest", " return errors === 0;       ", "Import as New Document", "hasLanguageSomeTranslations", "_notificationHandlers", "提示词", "ZodObject", "lastPongReceived", "notificationHandlers", " var async", "No connection available for node ", "some", "absolute", "如何获取APIKey和API Secret", " ( ", "_onrequest", "Task incomplete, current status: {{status}}", "Merge group failed", "email", " }; return validate; ", "Uploading...", "namespaces", "selectColor", "typ", "); if (!", "toString", "round", "Username: {{username}}", "null", "slice", "   ", "resolveComponents", "enabled", ".data = ", "No first related layer in {{0}}", "request", "#0033FF", "prompts/get", "more", "table", "InternalError", "checks", "left", "Failed to check workflow changeTracker state:", "Get image from Canvas", "isOptional", "AbortSignal is already aborted", " delete ", "initialState", "nan", "sdppp/streamResponse", "Input Setting", "Outgoing message:", "作为智能对象导入", "invalid_union_discriminator", "Cannot forward to node ", "\\' is invalid' ", "; var ", "ZodRecord", "2376zMLrFL", "assertIs", "&amp;", "isLanguageChangingTo", "activeState", "async schema in sync schema", "Show Preview ({{count}} images)", "mountedEndpoints", "req_", "Auto send enabled", "] = ", "(typeof ", "connectedNodes", "removeCatch", "2024-11-05", "passingSchemas", "ZodReadonly", "greater than ", "interpolation", "manuallyExtractDefaults", "implementAction", "response", "at least", "unshift", "query", "done", "widgets", "exists", "ZodLazy", "missing", " if (true) {", "auz", "keys", "Node definition not found for ", "sendResourceUpdated", " , params: { property: '", "propertyNames", "prompts", "++) { if (", "listWorkflows", "keySchema", " } } else { ", "subject", "Create layer failed", "aborted", "Paste your model name", "removeResourceBundle", '" as the namespace "', "getConnectionCount", "Store not found for ", "Copy", " var itemIndices = {}, item; for (;i--;) { var item = ", "All", "{0,6}", " if (", "setInterval", "URI can not be parsed.", "ValidationError", ".errors); errors = vErrors.length; } ", "__esModule", "verbose", "workflows/", "resolveImage", "Internal error", "pst", "isInitializing", " !== parseInt(division", "stateUpdate", `"' `, "Get pixel of {{0}} failed", "diff", "this", " , params: { keyword: '", " , parentSchema: validate.schema", ")' returned an object instead of string.", "default", "; } ", "delete", "jwt", "execution_start", "addCached", " break; ", "__internal_", "argumentsError", "Get layer info", "right", "mesh:comfy", "element", "rest", "await ", "http://json-schema.org/schema", "enum", "rejecting language code not found in supportedLngs: ", "integer", "isCUID", "exactly equal to ", "ctx", "getClientCapabilities", "  for (var ", "widgetable", "interpolationkey", "$schema", "returnTypeError", "Please login to use the plugin", "save", "Not connected", "skipOnVariables", "); for (var ", "usedParams", "datetime", "overflow", "Stop and cancel all", "#/definitions/nonNegativeIntegerDefault0", " , schema: validate.schema", "当前选区", "#9900FF", "missingInterpolationHandler", "coerceTypes", "processors", "#CC33CC", "sec", "#CC6600", "notifications/message", "; } catch (e) { ", "safeValue", '" for languages "', "setter", "addNamespaces", "文件未找到: {{path}}", "spa", "点此获取RunningHub APIKey", "findIndex", "waiting for queue prompt", "transform", "[\\/\\?]", "broadcastManager", "overloadTranslationOptionHandler", " == errors) {", "Run", "__DEFAULT__", "[\\:\\@\\/\\?]", "auth.guest_login_success", "externalListenMessageCallback", "=startErrs", "无效边界: 左边必须小于右边，上边必须小于下边", "_processInputParams", " != 'string') || ", " throw new ValidationError(vErrors); ", "Google Gemini 图像生成器", "1.0.0", "options", "hasRequestHandler", "/else", "getTransportInternal", "exactUsedKey", "任务已取消", "schema id ignored", "initialize", "definition", "usedLng", "]] !== undefined ", "prd", "exclude", "schemaHasRulesExcept", "combo", "自动同步: 关闭", "sendLoggingMessage", "Please select the image to get", "emoji", "[^]", "exact", "innerType", "roots", "Save all", "Action {{0}} 未找到", "range", "ComfyUI加载失败，HTTP状态码：{{code}}", "renderer", "#33CCFF", "Select boundary", "Number must be ", "ordinal", "pre", "logging", "is an invalid additional property", "buildDirectedAdjacencyList", "formatParams", "ZodUndefined", "Module", "]; ", "; else vErrors = null; }", "isClone", "toUpperCase", "dataPathArr", "setRequestHandler", "目标边界为空", " = false , ", "stopSequence", "strip", "charCodeAt", "Save", "Invalid attempt to destructure non-iterable instance", "removeAdditional", ") { var op", "alg", " = false; if (e instanceof ValidationError) ", "sdppp", "getCapabilities", "arq", "nonempty", ".length > ", "endsWith", "listenMessageCallback", "requestsIntercepted", "Invalid", "detection", "float", "Number must be a multiple of ", ".validate; var ", "colors", "Values", "parentData", "roots/list", "设为当前图层", "prp", "expected", "var missing", " }  ", "createStreamState", "userAgent", "value", "获取图层 {{0}} 的内容", "usePattern", "registerStreamRequestorHandler", "[^\\%\\:]", ") ) ", "node_id", "requestIdSeq", "isSafeInteger", "pattern", "Failed to request initial states after connecting to ", "gte", "properties ", " , message: 'should NOT have ", "use", "pbt", "instructions", "pbu", "hasDefaultValue", "not_finite", "comfy side transport.onerror", "邮箱: {{email}}", "#FF0000", "Bounds", "toNode", "nodeProxies", "compositeRule", "_getCached", "App ID:", "__internal_requestInitialState_", "ltr", "isInteger", "formatLanguageCode", ", rootData)  ", "sdppp_assets", "IPV6ADDRESS", "escape", "Client does not support sampling (required for ", " if (rootData === undefined) rootData = data; ", "ZodEnum", "resources/list", "pluralResolver", " == ", " = 'else'; ", "strictNumbers", "setKey", "Host's domain name can not be converted to ", " else ", "getData", "#9933CC", "sdpppX2", "def", "  } ", "skips", "compile", "setupStreamRequestHandler", "subfolder", "json-pointer", "Exclude current layer", "fullFilename", "openWorkflowJSON", "批次数量", "util", "race", "Resize document for preview", "?\\]?$", "not", "broadcastReceived", "common", "examples", " not found on node ", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "transports", "Canvas bounds", "cardinal", "statements", "method", "catch", "comfy", "find", "sendStreamRequestorRequest", "isObject", "time", "issues", "sdppp_widgetable_title", "hasOutgoingNotificationInterceptor", "interrupt", "allErrors", "cleanup", "Synchronous parse encountered promise.", "extensionManager", "#33CC99", " == 'number' ? ( (", "ownProperties", "Array.isArray(", "getHandlerTypes", "Node definition not found for current node ", "2024-10-07", "__connection_established", "boolean", "MissingRef", " = errors; var ", "{0,4}", "#/definitions/schemaArray", " = 0; ", "second", "addIssues", "rootId", " !== ", "'[' + ", "Disk", "getScriptPartFromCode", "storage", "prepareLoading", "正在发送图像...", "out", "Cannot access property/index ", "createWithPreprocess", "_getId", "  }  ", "#33CC66", "interceptor_error", "interpolator", "/properties", " = errors;", "_compile", "toResolveHierarchy", " == 'number' || ", "ajp", ") && ", "按回车打开应用： {{appName}}", "returnDetails", "No images", "Email address's domain name can not be converted to ", "withTimeout", " , schema: ", "comfy-entry", "Sending image...", "unwrap", "run", "自动填入画布关闭", "executeHandlerAsync", "请选择要获取的遮罩", " === 'false' || ", "ZodCatch", "IPV4ADDRESS", ".schema = ", "Request interceptor failed for ", "objectKeys", "mailto", "regexpUnescape", "passthrough", "Your powerful node-based workflow engine", " ); if (isAdditional", "加载中...", "favorites", "应用ID:", "failing", "forkResourceStore", "Waiting for image upload...", "此处粘贴 WebApp ID", " in ", "{0,1}", "string", "pendingCount", ` if (typeof item == 'string') item = '"' + item; `, "observers", "concat", "scheme", "elicitation/create", "Base URL", "workflows", "notification", "type", "formatType", "How to get APIKey and API Secret", "root.refVal[0]", "cloneInstance", "addPostProcessor", "getNeighbors", "nodeIndexes", "Unicode", " , params: {} ", " if (errors === ", " = null;", '"number"', "未实现 (501)", "No crop", "Get API Key", "negative", "pluralRulesCache", "initAsync", " = errors , ", "; else if (", "_getType", " for (var ", "]] === undefined ", "updateMissing", "isULID", "markConnected", "作为新文档导入", "schema should be object or boolean", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, "OpenAI/Google 格式API", "RelativeTimeFormat", "valueSchema", "Forbidden (403)", "Edge references unknown target node: ", "languageChanging", "ZodIntersection", "给发送的图片创建文档", "escapeFragment", "Action set {{0}} not found", "Auto run after canvas change", "comfy-uxp", "removed", "Outgoing notification interceptor failed: ", "Server does not support prompts (required for ", "创建文档", "userinfo", " instanceof RegExp) && ", " = errors;  ", "getOwnPropertyNames", " validate.errors = null; return true; ", "从 选区 获取遮罩", " } else {  errors = ", "connected", " if (!", "无法从文件创建文档", " || Object.keys(", "message", "你的工作流", "registerHandler", "alwaysFormat", "keywords", "_responseHandlers", "invalid_string", "{4}", "items", ") {  ", "acq", "sdppp/abort", "resolvedOptions", "shape", "style", "-arab", "thisServer", " && ( ", "lastIndex", '"failed to compile', "tools/call", "key", "notificationsIntercepted", "rejectImage", "Empty", "++) { ", "superRefine", " } else {  for (var ", "nestingOptionsSeparator", "loadGraphData", "formatArgs", "app.queuePrompt caught", "nonstrict", "acw", "Server does not support notifying of prompt list changes (required for ", "executeOutgoingNotificationInterceptor", "ckb", "removeDefault", "merge", "handle", " if (false) { ", "getFallbackCodes", "escapeQuotes", "shared", "dataProperties", "') ", "Close", "Download", ") == -1 ", " var errs_", "continueOnInterceptorError", "maxParallelReads", "usedNS", "stopAll", " + ", ".dataPath = (dataPath || '') + ", "invalid_intersection_types", "#CC00CC", "host", "#FF3399", "rootData", "Timeout", "getRegisteredActions", " = false;for (var ", "maxLength", "stats", "Execute", ", deps: '", "log", "Press Enter to open app: {{appName}}", "Back", "resources", " = ", "prompt_ids: ", "context", "生成中...", "' : '", "cuid", "refine", "messages", "create", "Email: {{email}}", "获取选区失败", "找不到图层: {{0}}", "received", "onprogress", "getDefinition", "segment", ") && (missing", "', missingProperty: '", "clearItems", "fallbackNS", ")) { ", "parent", "preprocess", "isBase64", "substring", "image.document.new", "pluralSeparator", "simpleTypes", " }; return validate;", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", " == '", "Connect", "Create document for sent images", " ms", "Cancel", "You must pass an array of schemas to z.tuple([ ... ])", "Server does not support logging (required for ", " , message: 'should be multiple of ", "shu", "not-basic", "_unknown", "Note", "languageChanged", "unicodeSupport", "getDefaultValueFromField", "###", "nanoid", "tried", "%[89A-Fa-f]", "String must contain ", ".then", "#99CC33", "refVal", "protocolVersion", "No backend was added via i18next.use. Will not load resources.", 'Invalid input: must end with "', " for language ", "='; ", "#33CCCC", "getUsedParamsDetails", "maxItems", "saveMissing", "SDPPP may not be installed or version mismatch (404)", "prompts/list", "custom", "running", "#FF0099", "每批图像数", "const", " = formats[", "_schemas", "contains", ".type", " == 'object' && Array.isArray(", "ParseError", "[0-5]\\d", "_limitProperties", "No active document", "未知错误（{{code}}）", "Channel connecting...", "omit", "fail", "allOf", "color: inherit", "detect", "trim", "{0,2}", "streamRequest", "actionHandlers", "action", "close", "NOT_FRAGMENT", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", "minimum", "regExpQueue", " , schema: false , parentSchema: validate.schema", "#66CC00", " , params: { i: i, j: j } ", "exactly", " (division", ") continue; ", "zod", "isURL", "execution_interrupted", "responseSchema", "reduce", "throwIfAborted", "Invalid function arguments", "_onprogress", "extract", "milliseconds", "loadSchema", "registerProxyForwardHandler", "returnedObjectHandler", "Comfy Manager未安装，无法重启", "unknownKeys", "Import as Smart Object", "formatter", "` could not be extracted from all schema options", "Failed to request initial state for ", "defineProperty", "Invalid discriminator value. Expected ", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", "+Alt 按选区裁剪", "_parseSync", "nodes", " , params: { missingProperty: '", "yrs", "#3300CC", "http://json-schema.org/draft-07/schema", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", "插件可能正在拦截 PS 快捷键... ", "请输入您的Replicate API Key", "ZodBoolean", "interceptorTimeout", "positive", "sdk", "Gemini 2.5 Flash Image", "useRawValueToEscape", "ZodTuple", " + '", "Auto repick from PS", "_instructions", "exec_info", "symbol", "schemaId", "authInfo", "setupTransportHandlers", "missingRefs", "date", " } if (errors === ", " / ", "Failed to create document from file", ") {   ", "4109xDISzL", "_limit", "var division", " else {   ", "false schema", "[BroadcastManager] Error forwarding broadcast:", " , message: 'should be ", "changeLanguage", "Notification interceptor failed for ", "namespace", " , message: 'should match some schema in anyOf' ", " = e.errors; else throw e; } ", "Inpaint (reverse crop)", "resolve", " else if (", "join", "initializeResponseQueue", "hasEdge", "setNotificationHandler", "errorMap", "text", "#CC0066", "formats", ".call(this, ", "Current Layer", " === '' ", "服务不可用 (503)", "smaller than or equal to", "Refresh", " || ", "name", "Quality {{percent}}%", "initImmediate", "assertNever", "extendRefs", " , validate.schema", "Create guide frame", "自动填入画布开启", " , schema:  ", ".pi-sign-out", "unsetOutgoingRequestInterceptor", "Failed to check workflow state changes:", "execution_success", "yih", "getClientVersion", "body", "reject", "mesh", "#CC6633", " if (true) { ", "definitions", "resolved promise for", "addMessageEventListener", "))) { ", "safeParseAsync", "appendNamespaceToCIMode", "_refinement", "less than or equal to", "required", " = true; ", "Canvas", "var refVal", "ydd", "#/definitions/stringArray", "precheck", "NumberFormat", "logout", "ComfyUI server reconnecting", " = false;  ", "dir", ".validate; } if (  ", "typeof ", "languageOnly", "minItems", "Auto Sync: on", "errorPath", "_parse", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "Received a progress notification for an unknown token: ", "getConnectedNodeIds", "customRule", "errs_", "createErrors", "set", "isEmail", "NOT_SCHEME", "zero", "readonly", "invalid_literal", "copy", '" was not yet loaded', "openWorkflows", "outgoingNotificationInterceptors", "{3}", "isDatetime", "unicode", "9935874yQcfrf", "sort", "toStringTag", "toHash", " === 1) ", "addKeyword", "]); ", "Jump to last", "init", "file://", "请输入您的 Google API Key", "unescapeFragment", ".length ", "array", "languages", "Enter Google API Key", "自动从PS重新获取", "setState", "minutes", "validateKeyword", " ) { ", "obj", "timeout", "call", "ping", "#FF00CC", " && Object.prototype.hasOwnProperty.call(", "schemaExcl", "domainHost", "nodeTransports", "requestHandlers", ".dataPath === undefined) ", "loopRequired", "#9933FF", " try { await ", "Crop by selection", " = true; else if (!Array.isArray(schema", "load", " when property ", "color", "resources/templates/list", "disconnect", "Client does not support listing roots (required for ", "$id", "i18nFormat", "reference", " division", "Area AI reads from; controls max image size", "sdppp 运行 Photoshop Action", "getSchema", "addFormat", "substr", "filter", ") break; } ", "_limitLength", "Get selection failed", "function", "ucs2length", "Create document for preview", "coerced", "jsonStringifyReplacer", "oninitialized", "registerCapabilities", "Invalid JSON-pointer: ", "Workflow stopped by user", ".length , ", "适配至画布", "urn", "debouncedNotificationMethods", "fallbackLng", "pctEncChar", "Waiting in queue", "sdppp/directRequest", "brand", "pending", "uxp", " ucs2length(", "isSupportedCode", "ZodNullable", "closeWorkflow", "completion/complete", "maxTokens", "#FF6633", "PluralRules", "void", "Gateway error (502)", "isBase64url", "object", "channel", "addEventListener", "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "store:update:", "schema", "notifications/prompts/list_changed", ` , message: 'should match pattern "`, "findPathInternal", "image", "当前任务数:", "pop", "You are passing a wrong module! Please check the object you are passing to i18next.use()", "Server does not support resources (required for ", " = typeof ", "#FF3366", "implements", "put", " %c", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "partialBundledLanguages", "applyPostProcessor", "setupGraphStoreSync", ", '", "sessionId", " !== undefined ", "Action {{0}} not found", " , message: 'should NOT be ", "messageType", "afb", "schema $id is different from id", "getRunningRequestsCount", "_key", "inline", "entries", "' } ", "if (", "Generating", "from", "false", "separator", "~standard", "; if (!", "请登陆后使用插件", "mesh:workflow", " &&   Object.prototype.hasOwnProperty.call(", ") vErrors.length = ", " , message: 'should be equal to one of the allowed values' ", " = errors === errs_", "]) ", "删除当前", ".async; ", "Outgoing request interceptor failed: ", "exception_message", "setWidgetValue", "Set as Canvas", "isNaN", " } ", "findPath", "ZodAny", '"; } ', "label", "graphInstance", "joinValues", "dataType", "useColors", "silent", "_addCheck", "ComfyUI加载中...", "Outpaint (positive crop)", "minProperties", "app", "emergency", "isEmoji", '" (see option extendRefs)', "contextualErrorMap", "getter", "result", ".length == 0) {", 'did not save key "', "there was no format function for ", "local", " = true;  ", "secs", "missingKeyNoValueFallbackToKey", "clientInfo", "cache", "mergeArray", "++) { vErrors[", "schemaHasRules", ".length <= ", "_regex", "Required", ") : ", "_clientCapabilities", "self", "Select layer", "pathname", "cleanupConnection", ' !== "object")', "setupStreamProtocolHandlers", "PS shortcuts may be blocked by plugin...", "should NOT have additional properties", "Mask", "enforceStrictCapabilities", "maxSize", "/additionalProperties", ".test(", "_compilations", "#FFCC33", "{6}", " = undefined; ", " } }  ", "~validate", "207WBTXgD", "uxpHost", "获取 API Key", "_cached", "sendResourceListChanged", "exclusiveMaximum", " ( ( ", " , params: { type: '", "cimode", "parseMissingKeyHandler", "ajv", "toQuotedString", "选择边界", "removeDotSegments", "模型物美价廉，海量社区应用", "ZodArray", "maxDate", " != 'number') { ", "canReachThroughConnectedNodes", " == null) ", "kind", "PCT_ENCODED", "length", "fcName", "process", "Meta-schema for $data reference (JSON Schema extension proposal)", '$ref: validation keywords used in schema at path "', "Google Gemini Image Generator", "newdoc", "notifications/tools/list_changed", "快捷键选图功能仅在插件窗口聚焦时可用", "formatSeparator", "ESCAPE", " , message: '", "acx", "baseId", "Host's domain name can not be converted to ASCII via punycode: ", "Confirm", "McpError", "getTime", " properties' ", "property ", "Current Tasks:", "Selection bounds only", "needsPlural", "hour", "Positive Crop", "setNodeTitle", "Selection", "typeName", "Elicitation response content does not match requested schema: ", "nestingSuffix", "Core schema meta-schema", "'else'", "customRules", "getProperty", " via punycode: ", "keyType", " items' ", "same-document", "获取像素失败: {{0}}", "debugDisableHeartbeatResponse", "formatters", "secure", "Invalid graph definition: ", "token", "nestingPrefix", "additionalItems", "Click to get RunningHub APIKey", "path", "按住 Shift 键以新文档方式导入", "dependencies", "ifClause", "deepPartial", "sdppp/streamRequest", "[BroadcastManager] Error forwarding ", " , params: { limit: ", " if (!(await ", "Failed to send response: ", " ) {   ", " , params: { additionalProperty: '", "modifying", "Notification handler failed for ", "iterator", "params", "当前图层除外", "startHeartbeat", " {} ", "clone", "level", "react", "Invalid name: {{0}}", "找不到文档: {{0}}", "modules", "getAllReachableNodes", "exclusive", "http://json-schema.org/draft-07/schema#", "[GraphStoreSynchronizer] Error processing store update for ", "显示预览框 ({{count}}张图片)", "getNode", "disconnected", "xmn", "3rdParty", "排队等待", "broadcastHandlers", "Invalid literal value, expected ", "isTransportReady", "maxRetries", "无法打开图像文件: {{error}}", " = false; else { ", "kPanelBrightnessMediumGray", "It seems you are nesting recursively key: ", "curlayer_canvas", "快捷键选图功能仅登陆后可用", "saveWorkflow", "_requestHandlerAbortControllers", "normalizeId", "actions", "locale", "  )  ", " === null || ", "%[EFef]", " === null) ", "%25", "_error", "freeze", "missed to resolve ", "error", "' + ", "Error handling incoming message:", "json", "errSchemaPath", "debug", "ssh", "relativetime", "returnObjects", "登录成功", "sampling/createMessage", "没有活动文档", "loadResources", "#9900CC", "exclusiveMinimum", "xn--", "rtl", "userDefinedNsSeparator", " = false; else {", " ) || ", "getCanonicalLocales", "#3399CC", "preload", "_cleanupTimeout", "and", "localeCompare", " for interpolating ", " ? '", "i18next:", "isCIDR", "ComfyUI failed to load, HTTP status code: {{code}}", "2.1.0", " = true; if (", " !== undefined) ; ", "properties", "translation", "queuePrompt", "types", "notifications/cancelled", "Get mask from Selection", "flags", "schemaErrorMap", "); errors = vErrors.length;  for (var ", "step", "Get mask from Canvas", "image.layer.smart_object", "ZodPromise", "]; if (", "capacity", "Invalid forward path for proxy action", '" is used in schema at path "', "没有链接图层: {{0}}", "toLowerCase", "size", "prepend", "fast", "\\$&", "setItem", "Uploading, if the image too large, may be lag...", "formErrors", "connect", "failed", "connecting", "optional", "setLimit", "status", ".length == 1) { ", "ZodDate", " than ", " var errors = 0;     ", "fallbackRequestHandler", "#00CC00", " = true;", "executeOutgoingRequestInterceptor", "saveMissingTo", "#CC9900", "idx", "2266980DRTdeY", " from id ", "#3366CC", "comfyAPI", "RULES", " is present' ", "Success", "\\%25|\\%(?!", "当前图层", " return data; ", "elicitation", "base64", "get", ") { ", "startTime", " == +", "catchValue", "initializeNodeStores", "2353879vSMCID", "abort", "broadcastCurrentState", "ignoreJSONStructure", "node_errors", "originalError", "getNodeStore", "waiters", " } else { ", "Validation", "reconnected", "ZodBigInt", "exports", "millisecond", "Server does not support notifying about resources (required for ", "start", "exec", "[0-9A-Fa-f]", " = false; ", "AUTO", "zh-CN", "BigInt must be ", "messagePoster", "extend", "valueType", "date-time", "cycles", "NOT_HOST", "validateSchema", "/additionalItems", "heartbeatTimeout", "notifications/resources/updated", "_getInvalidInput", " === 0 || ", "maxTotalTimeout", "assign", "getState", "unrecognized_keys", "8154VNNFZV", "getDefaultValuesFromSchema", "ZodSymbol", "handleAsObject", "removeSchema", "initialized", "too_big", "translate", "New Layer", "Please select the mask to get", "JWT", "detectCycles", " === true) ? ", '";  ', "ZodString", "Error", "fullPath", "services", "[\\+\\-\\.]", "/patternProperties/", "is a required property", "promise", "_getOrReturnCtx", "#CC00FF", "+Alt reversed mask", ") break; }  ", " , rootData )  ", "opts", " == errors) { ", "pipe", "firebug", " = vErrors[", " not found for current node ", "defaultMeta", "Tutorial", "resolveRef", "allKeys", "Images Per Batch", "HeartbeatTimeoutError", "validateStreamRequestorRequest", ".validateSchema(", "macro", "fragment", "wss", "closeHandlers", "catchall", "invalid_arguments", "parseInt", "startsWith", " == 'string' && ", "aeb", "external", "UNRESERVED", " = +", "parentDataProperty", "resetRegExp", "([01]\\d|2[0-3]):[0-5]\\d(:", "Please select AI service", "addLookupKeys", "assertCanSetRequestHandler", "env", "[i]; ", "payload", "usedKey", "运行了 {{duration}} 秒，{{message}}", "unescapeSuffix", "heartbeatTimeoutTimer", ` , message: 'should pass "`, "Exclude selection", "Enter your Replicate API Key", "yud", ` , message: 'should match format "`, "/type", "fromNode", "%c ", "timeoutId", "ZodNativeEnum", " } }", " , message: 'should NOT be valid' ", "languageDetector", "loadOne", "accept", "buffer", ".hasOwnProperty(", "Failed", "prefix", "setResolvedLanguage", "Gemini 2.5 Flash 图像", "画布变动后自动运行", "removeNamespaces", "getRule", "setupGeneralBroadcastHandler", "反向裁剪(Inpaint)", "clear", "$async", "; else vErrors = null; } ", "invalid_return_type", "?\\:\\:", "varReplace", " var vErrors = null; ", "', depsCount: ", "now", ", limit: ", "Task execution failed: {{error}}", "resource", "getItem", "mergeShapes", "#33CC33", "(.+?)", "warn", " = true; else if (typeof ", "fallbackNotificationHandler", "console", "endTurn", "forEach", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "getPrototypeOf", "Request timeout (408)", "createInstance", "Get content of layer {{0}}", "schemas", "index", "prs", "apd", "$$$$", "keyof", " = errors;var ", "__proxy_forward", ")) {  ", "order", "backend", "alwaysSet", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "[A-Fa-f]", "notificationsHandled", "meta", "augment", "canvas", "nestingRegexp", "ignore", "#CC3300", "正向裁剪", " != 'number' || ", "postProcessor", "strictDefaults", "通道连接中...", "用户名: {{username}}", "RequestTimeout", "nullable", "ZodBranded", "Unauthorized (401)", "#6600CC", "invalid_union", "arz", "{1,4}", " = false; else if (", "__proto__", "Failed to send an error response: ", "Input Image", "#/definitions/nonNegativeInteger", "metaSchema", "info", "'then'", " must be number", "async schema referenced by sync schema", "Failed to open image file: {{error}}", "MethodNotFound", "convert widget {0} failed:", "\\:\\:", "Workflow not found", "适配至当前图层", "initializeProducer", "keyword", "getConnectionToNodeInternal", "addResourceBundle", "strict", "#FF33CC", "one", "assertCapabilityForMethod", "inlineRef", "isIP", "Uncaught error in notification handler: ", "ListFormat", "))))) {", "nest", " && !(", "abortAllRequests", "checkDataTypes", "missingKey", "never", "comfy-user", "postMessage", " < ", "[GraphStoreSynchronizer] Error broadcasting state update for ", "ZodLiteral", "[^\\%\\/\\@]", " || ! Object.prototype.hasOwnProperty.call(", "isOpen", "Loading...", "isInt", "__cycle__", "/then", "云端推荐：", "reconnecting", "nonnegative", "strictCreate", "full", "streamRequestorHandlers", "validateHandlerType", "posterIdentifier", "passContext", "sendToolListChanged", 'key "', ".length; ", "true", "messageHandlers", "audio", "joinAs", "assert", "simplifyPluralSuffix", "保存并立即执行", "toFixed", "Already connected to node ", "HTTP URIs must have a host.", "ZodError", "split", "#FF0033", "photoshop.no_active_layer", "valid", "max", " Math.abs(Math.round(division", "dataPath", "duration", "push", "broadcast", " ) ", "正在发送...", "Rectangle coordinates required for create action", "markDisconnected", "[ ]*{", " -> ", "var ", "createTemporary", "How to get APIKey", "reloadResources", " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ", "position", "$comment", "reset", "创建预览文档", "has", "Save current", "获取结果失败: {{error}}", ".additionalItems", "cacheInBuiltFormats", "async", "currentNodeId", "#/definitions/simpleTypes", "isTop", "empty", "default is ignored in the schema root", "adf", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "minValue", "documentElement", "val is not a non-empty string or a valid number. val=", " && !Array.isArray(", "ref/resource", "]; var ", "#FF3300", "extractFromKey", "api", "[^\\%]", "data", "values", "刷新工作流列表", "outgoingRequestInterceptors", "regex", "$data", "_exclusiveLimit", "emit", "更多操作", "getCurrentNodeId", "暂无图片", "prevValid", ") {  for (var ", "从 当前图层 获取图像", "resources/read", " after ", "_cachedPath", "#CCCC00", " if ( ", "lowerCaseLng", "stream", "errorDataPath", "count", "isCUID2", "ZodNumber", "minLength", " , message: 'should have ", "post", "reason", "interpolate", " else throw new ValidationError(vErrors); ", "ZodDiscriminatedUnion", "implementInternalAction", "regexp", "origin", "coerceToTypes", "match", " , message: 'should NOT have more than ", "[j])) { ", "ZodNever", "Validation failed but no issues detected.", "joinArrays", "handleIncomingNotification", "No handler for streamRequestor: ", "hasOutgoingRequestInterceptor", "_metaOpts", "60hTPtWI", "item", "dataVar", "bigint", " , message: 'property name \\'", "int", "[^\\%\\[\\]\\:]", "网关错误 (502)", "return", " not found in graph definition", "min", "; else vErrors = null; }  ", "abs", "stack", "less than", "root", "反向裁剪", "photoshop.invalid_boundary_type", "exclIsNumber", "Maximum total timeout exceeded", "_errorDataPathProperty", "propsKeywords", "click", "stringify", "widgetableStructure", ") { if (vErrors === null) vErrors = ", " , ", "pluralCategories", "_fragments", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "content", "Failed to send cancellation: ", "var customRule", "loadNamespaces", "reload", "coerce", "ZodPipeline", "objectValues", "Server does not support notifying of tool list changes (required for ", "Failed to reboot ComfyUI", "Error in direct request ", "getHandler", "Options", "discriminator", "url", "选择 AI 服务提供商", "nodeId", "includes", "{0,3}", "Open images from file", "Source", "非法的名称: {{0}}", "safe", "newlayer_curlayer", "additionalProperties", "PS图片", "unescapePrefix", "isNullable", "indexOf", "varOccurences", "onmessage", " = [", "getResource", "output", "ZodUnion", " var err = ", "getPath", "toJSON", "任务未完成，当前状态: {{status}}", "$el", "dataLevel", " }   ", "backendConnector", " ) : ( (", " not in path ", " && ", "getNodeIds", "auto", "getLanguagePartFromCode", "acy", "replace", "store", "_def", "escapeValue", "rules", "curlayer_curlayer", "MiddlewareError", "outputType", "Running for {{duration}} secs, {{message}}", "extendTranslation", "loadLanguages", "新图层", "assertEqual", "#0099CC", "从文件打开图像", "checkDataType", "finite", "发送到PS", ")) ", "arb", "equal", "requestId", ".validate", "updateKey", "resolveRunImages", "_onclose", "任务执行失败: {{error}}", " === undefined) ", "sendPromptListChanged", "constructor", "base64url", "Auto Sync: off", "useDefault", "Prompt", "_refs", "getPathExpr", "parse", " = 'then'; ", "创建参考线框架", "schema $id ignored", "format", " = null; ", ")) { if (vErrors === null) vErrors = ", "custom keyword definition is invalid: ", "Save and run immediately", "仅选区范围", "handleIncomingMessage", "请选择要发送图像的位置", " at one or more positions greater than or equal to ", "translator", "'/' + ", "++) { var ", "sd-ppp-static/sdppp_images/", "ulid", "#CC0099", "maxReplaces", "refs", "mountedTransports", "loaded", "Error in broadcast handler for ", "10nkAJiz", "重启ComfyUI失败", "readingCalls", ") - division", "&subfolder=", "effect", "nsSeparator", "version", "  errors = ", "graph", 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "Gateway timeout (504)", "dirty", "validate.schema", "asyncIterator", " === ", "buildAdjacencyList", "allServers", "_serverInfo", "abh", "missed to pass in variable ", "charAt", "apply", "Invalid date", "执行成功", "Request timed out", "Refresh workflow list", "forwardBroadcast", "openWorkflow: ", "请输入您的RunningHub API Key", "floor", "cancel", "Cannot register capabilities after connecting to transport", "createAsyncIterator", "cuid2", "getKeyword", " failed", "Store not found for current node ", "__nwjs", "contextSeparator", "changeTracker", "not_multiple_of", "requestsHandled", "actionManager", "retryTimeout", " , params: { allowedValues: schema", "#6600FF", " if (schema", "1370163YuFBTm", "apc", " = customRules[", "画布范围", "useCustomRule", "failedLoading", "lastIndexOf", "mountTo", " { keyword: '", "_opts", "_limitItems", "too_small", "Cloud-based model service platform", "init: i18next is already initialized. You should call init just once!", "]; } else { ", "http", "mergeObjectAsync", "invalid_type", "maxProperties", "Internal ZodObject error: invalid unknownKeys value.", "ConnectionClosed", " , params: { comparison: ", "validate", "fewer", "RH币:", "uniqueItems", "Failed to get result: {{error}}", "resourceStore", "_formats", " throw new ValidationError([", "var default", "=== 选项 ===", "_addSchema", "ComfyManager not found, cannot reboot", "days", "nonpositive", "handleDirectProxyForward", "_errors", "click to restore", "initializeConsumer", "humanize", "sdppp_workflow_alias", "Sending...", "missingKeyHandler", "getBestMatchFromCodes", " || validate.schema", "relative-json-pointer", "initializedStoreOnce", "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF", "getValidEnumValues", "urn:uuid", "flatten", " else { ", "arrayToEnum", " != 'number') || ", " validate.errors = [", " to ", "off", `" keyword validation' `, " - no connection available", "getSuffixes", "_parseAsync", '"object"', "Paste WebApp ID here", "var pattern", " cannot be resolved", "api/view?type=", "   var err =   ", "&gt;", "exactLength", "destroy", "NOT_USERINFO", " (async", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 'unknown format "', "inclusive", "realTransport", "_validateKeyword", "precision", "map", " self._opts.$comment(", "Cannot access data ", "comfyAPI is not initialized, maybe comfyUI is too old", "number", "added", " character(s)", "headers", "_any", "&filename=", 'Invalid input: must start with "', "#FF00FF", "unsetOutgoingNotificationInterceptor", "getDataByLanguage", "resourceName", "ComfyUI服务器重连中", "#FF9900", "callValidate", "edges", "userDefinedKeySeparator", "regExpMap", "hrs", "_setupTimeout", "isUUID", "(new RegExp(", "tools/list", "  if (!", '" ignored in schema at path "', "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "nullish", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "[vV]", " = true; } else { ", "https", "' , dataPath: (dataPath || '') + ", "en-US", "queue", " if (typeof itemIndices[item] == 'number') { ", "Overflow: input needs wider integers to process", "getSuffix", "state", "detail", " , params: { propertyName: '", "cacheKey", "selection", "defaultError", "offset", " === undefined ", " reference.", "addResource", "setProperty", "hasResourceBundle", "year", " === false || ", "#00CCFF", " is already defined", "=0; ", "Illegal input >= 0x80 (not a basic code point)", "_oninitialize", "ZodDefault", "pick", "Action ", "[0]; ", "send", "Aborted", "inlineRefs", " % 1)", "workflow", "sam", " == 'string' || ", "mergeObjectSync", " = '' + ", "#33CC00", "extra", "sourceCode", "#0066FF", "ZodNaN", "整个画布", " != 'boolean') ", "forwarded", "requestInfo", "refinement", "setupStreamResponseHandler", 'id "', "fromCharCode", "notifications/progress", " element(s)", "Select AI Service Provider", "partial", "./sdppp-custom.js", ".errors", "accessing an object - but returnObjects options is not enabled!", "#3333CC", "heartbeatInterval", "notifications/resources/list_changed", "Run Photoshop Action", "File not found: {{path}}", "nonExplicitSupportedLngs", "language", "defaultVariables", "maxValue", "#FF33FF", "getConnectionInfo", "invalid_date", " === '' || ", "resolvedLanguage", "enable", "maximum", '[\\"]', "then", "#00CC66", "_meta", "+Alt 反转遮罩", "25[0-5]", " = RULES.custom['", "保存所有", "1465914wLQYHM", "]; return false; ", "Current layer bounds", " should be boolean' ", "Array must contain ", "all", "'].definition; var ", " , (dataPath || '')", "Unknown", "MissingRefError", "syncWorkflows", "正在运行", "getTransportToNode", "jsonPointers", "正在发送所有图片...", "Heartbeat timeout for poster ", "isPersisted", "ASCII", "Sending all images...", "minSize", "safeParse", "async ", "schemaUnknownRules", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "ZodUnknown", "SDPPP可能未安装或和插件版本不匹配 (404)", " && self._opts.unknownFormats.indexOf(", "should have required property \\'", "errs__", ".schemaPath === undefined) { ", "languageUtils", "defaultNS", "\\.\\d{", "appendNamespaceToMissingKey", "skipKeywords", "nss", "Set as Current Selection", "Node not found", "openWorkflow", "checkState", "keySeparator", "strong", " var schemaExcl", "从 画布 获取遮罩", "[object RegExp]", "workflowManager", "connectionManager", "heartbeatTimer", "isFinite", " , params: { failingKeyword: ", "schema id must be string", "serialize", "code", "未授权 (401)", ") > 1e-", "parseAsync", "valueOf", "patternProperties", "deprecate", "forward", "=== Options ===", "supportedLngs", "Invalid enum value. Expected ", '$ref: keywords ignored in schema at path "', "使用教程", "_clientVersion", " === null || (", "cmp", ", received ", "(?:", ", received '", "Invalid action: {{action}}", "useDefaults", "strictKeywords", "notificationQueue", "describe", " var schema", "nodeStores", "isRoot", " , data: ", "skipInterpolation", "([^0-9])", ` , message: 'should match "' + `, "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", "tDescription", " var ", "PS遮罩", "[object Number]", "uri", "hours", "输入设置", "ZodNull", " , schemaPath: ", " = refVal[", "toASCII", "Method not found", "输入图像", "getProtocol", "点我恢复", "./api/manager/reboot", "_resetTimeout", "wait", "Expected ", "queueLoad", "relative", "hbo", "NOT_PATH_NOSCHEME", " is not a valid identifier", "#6633FF", "queues", "layer not found {0}", "splice", "RH Coins:", " !== undefined && typeof ", "day", "else", "bind", "' && !(typeof ", "get_layer_info: 需要 layer_identify", "uuid", " + ']'", "addSchema", "^\\[?(", "reset=false but needsReset: ", ")) {  var err =   ", "_timeoutInfo", "[\\-\\.\\_\\~]", 'no schema with key or ref "', "queue_remaining", "         , parentSchema: validate.schema", "Login Successful", "Document {{0}} not found", "executing", "multipleOf", "getRegExp", "_options", "utils", "next", "fallback", "显示发送的图片", 'Invalid input: must include "', "defaultValue", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "waitingReads", "_loadingSchemas", " in key: ", "isValidLookup", "_onnotification", " , params: { pattern:  ", "unknown", "ZodVoid", "curlayer", "smartobject", "parsedType", "A request handler for ", "can't resolve reference ", "hasAction", "getPluralFormsOfKey", "&lt;", " = validate.schema", "unknown keyword: ", "currency", "every", " : ", "test", "_path", "hasOwnProperty", "undefined", "isFinite(", "/%2F", "execution_error", "getTransport", "isNotification", "elicitInput", "Not a ZodError: ", "Invalid input", "addMetaSchema", "isInitialized", "Layer {{0}} is not a group", "ary", "add", "onclose", "prototype", "/required", "sdppp-heartbeat", "pong", " var i = ", "validation", "images"];
  return Fx = function() {
    return i;
  }, Fx();
}
var ht, ka;
function Q2() {
  return ka || (ka = 1, ht = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x.dataLevel, c = x[e(870)][t], u = x[e(2174)] + x[e(288)].getProperty(t), d = x.errSchemaPath + "/" + t, f = !x.opts[e(313)], l = e(1512) + (o || ""), v = e(1467) + n, h = e(1969) + n, p = x[e(288)][e(771)](x);
    p[e(1068)]++;
    var g = e(1467) + p.level, w = x.schema[e(1934)], P = x[e(870)][e(2056)], F = w !== void 0 && (x[e(1266)][e(2014)] ? typeof w == "object" && Object[e(2411)](w)[e(1001)] > 0 || w === !1 : x[e(288)][e(954)](w, x[e(1187)][e(1946)])), O = P !== void 0 && (x[e(1266)].strictKeywords ? typeof P == e(865) && Object[e(2411)](P).length > 0 || P === !1 : x[e(288)][e(954)](P, x[e(1187)][e(1946)])), R = p[e(1014)];
    if (F || O) {
      var E;
      p.createErrors = !1, p[e(870)] = c, p[e(2174)] = u, p[e(1110)] = d, r += " var " + h + e(327) + v + e(947);
      var C = x.compositeRule;
      x[e(252)] = p[e(252)] = !0, r += "  " + x[e(1768)](p) + " ", p[e(1014)] = R, p[e(764)] = !0, r += e(1706) + h + e(2191) + h + e(911) + h + e(1569), x[e(252)] = p[e(252)] = C, F ? (r += " if (" + g + e(465), p[e(870)] = x[e(870)][e(1934)], p[e(2174)] = x[e(2174)] + e(578), p[e(1110)] = x.errSchemaPath + e(1440), r += "  " + x.validate(p) + " ", p[e(1014)] = R, r += " " + v + e(528) + g + "; ", F && O ? (E = e(1051) + n, r += e(2026) + E + e(1675)) : E = e(1401), r += " } ", O && (r += e(1798))) : r += " if (!" + g + e(1196), O && (p.schema = x[e(870)][e(2056)], p.schemaPath = x[e(2174)] + e(2264), p.errSchemaPath = x[e(1110)] + e(148), r += "  " + x.validate(p) + " ", p[e(1014)] = R, r += " " + v + e(528) + g + "; ", F && O ? (E = e(1051) + n, r += e(2026) + E + e(269)) : E = e(1032), r += " } "), r += e(453) + v + ") {   var err =   ", x[e(764)] !== !1 ? (r += e(1754) + "if" + e(1859) + x.errorPath + e(2033) + x[e(288)][e(990)](d) + e(1990) + E + " } ", x.opts.messages !== !1 && (r += e(2023) + E + ` + '" schema' `), x[e(1266)][e(2439)] && (r += e(109) + u + e(2452) + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += " {} ", r += e(1819), !x[e(252)] && f && (x[e(1494)] ? r += " throw new ValidationError(vErrors); " : r += e(2201)), r += e(1629), f && (r += e(1798));
    } else f && (r += e(731));
    return r;
  }), ht;
}
var pt, Pa;
function Y2() {
  return Pa || (Pa = 1, pt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x[e(2174)] + x[e(288)][e(1034)](t), d = x[e(1110)] + "/" + t, f = !x[e(1266)][e(313)], l = "data" + (o || ""), v = e(1467) + n, h = e(1969) + n, p = x[e(288)][e(771)](x), g = "";
    p[e(1068)]++;
    var w = "valid" + p.level, P = "i" + n, F = p[e(1628)] = x.dataLevel + 1, O = e(1512) + F, R = x[e(1014)];
    if (r += "var " + h + e(1365) + v + ";", Array[e(2305)](c)) {
      var E = x.schema[e(1046)];
      if (E === !1) {
        r += " " + v + " = " + l + e(955) + c.length + "; ";
        var C = d;
        d = x[e(1110)] + e(1230), r += e(1851) + v + e(681);
        var D = D || [];
        D[e(1472)](r), r = "", x[e(764)] !== !1 ? (r += e(1754) + e(1046) + e(1859) + x[e(757)] + e(2033) + x.util.toQuotedString(d) + e(1055) + c[e(1001)] + e(922), x.opts[e(535)] !== !1 && (r += e(1549) + c[e(1001)] + e(1037)), x[e(1266)][e(2439)] && (r += " , schema: false , parentSchema: validate.schema" + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += e(1066);
        var j = r;
        r = D[e(876)](), !x[e(252)] && f ? x[e(1494)] ? r += e(1775) + j + "]); " : r += " validate.errors = [" + j + e(1942) : r += e(1623) + j + e(1819), r += e(922), d = C, f && (g += "}", r += " else { ");
      }
      var M = c;
      if (M) {
        for (var q, N = -1, $ = M[e(1001)] - 1; N < $; )
          if (q = M[N += 1], x[e(1266)][e(2014)] ? typeof q == e(865) && Object[e(2411)](q)[e(1001)] > 0 || q === !1 : x[e(288)][e(954)](q, x.RULES[e(1946)])) {
            r += " " + w + e(1138) + l + e(206) + N + e(1196);
            var H = l + "[" + N + "]";
            p.schema = q, p[e(2174)] = u + "[" + N + "]", p[e(1110)] = d + "/" + N, p[e(757)] = x[e(288)].getPathExpr(x[e(757)], N, x.opts[e(1954)], !0), p[e(189)][F] = N;
            var V = x[e(1768)](p);
            p[e(1014)] = R, x[e(288)][e(1617)](V, O) < 2 ? r += " " + x[e(288)][e(1337)](V, O, H) + " " : r += e(2026) + O + e(528) + H + "; " + V + " ", r += " }  ", f && (r += e(2433) + w + e(1196), g += "}");
          }
      }
      if (typeof E == "object" && (x[e(1266)][e(2014)] ? typeof E == e(865) && Object.keys(E)[e(1001)] > 0 || E === !1 : x[e(288)][e(954)](E, x[e(1187)][e(1946)]))) {
        p[e(870)] = E, p[e(2174)] = x[e(2174)] + e(1492), p[e(1110)] = x[e(1110)] + e(1230), r += " " + w + " = true; if (" + l + e(206) + c.length + e(1524) + P + e(528) + c[e(1001)] + "; " + P + e(1431) + l + ".length; " + P + e(481), p[e(757)] = x[e(288)][e(1673)](x[e(757)], P, x[e(1266)][e(1954)], !0);
        var H = l + "[" + P + "]";
        p.dataPathArr[F] = P;
        var V = x[e(1768)](p);
        p[e(1014)] = R, x[e(288)][e(1617)](V, O) < 2 ? r += " " + x[e(288)][e(1337)](V, O, H) + " " : r += e(2026) + O + e(528) + H + "; " + V + " ", f && (r += e(453) + w + e(2180)), r += e(977), f && (r += e(2433) + w + e(1196), g += "}");
      }
    } else if (x[e(1266)][e(2014)] ? typeof c == e(865) && Object.keys(c)[e(1001)] > 0 || c === !1 : x[e(288)][e(954)](c, x[e(1187)][e(1946)])) {
      p[e(870)] = c, p[e(2174)] = u, p[e(1110)] = d, r += e(2477) + P + " = 0; " + P + e(1431) + l + e(1452) + P + "++) { ", p[e(757)] = x[e(288)][e(1673)](x[e(757)], P, x[e(1266)][e(1954)], !0);
      var H = l + "[" + P + "]";
      p.dataPathArr[F] = P;
      var V = x[e(1768)](p);
      p[e(1014)] = R, x.util[e(1617)](V, O) < 2 ? r += " " + x.util[e(1337)](V, O, H) + " " : r += e(2026) + O + e(528) + H + "; " + V + " ", f && (r += e(453) + w + ") break; "), r += " }";
    }
    return f && (r += " " + g + e(2433) + h + e(133)), r;
  }), pt;
}
var mt, Ea;
function Ia() {
  return Ea || (Ea = 1, mt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x[e(2174)] + x.util[e(1034)](t), d = x[e(1110)] + "/" + t, f = !x.opts[e(313)], R, l = "data" + (o || ""), v = x[e(1266)][e(1517)] && c && c[e(1517)], h;
    v ? (r += e(2017) + n + " = " + x[e(288)][e(274)](c[e(1517)], o, x[e(189)]) + "; ", h = e(870) + n) : h = c;
    var p = t == e(1932), g = e(p ? 984 : 1120), w = x.schema[g], P = x[e(1266)].$data && w && w[e(1517)], F = p ? "<" : ">", O = p ? ">" : "<", R = void 0;
    if (!(v || typeof c == e(1829) || c === void 0)) throw new Error(t + e(1402));
    if (!(P || w === void 0 || typeof w == "number" || typeof w == e(325))) throw new Error(g + " must be number or boolean");
    if (P) {
      var E = x[e(288)][e(274)](w[e(1517)], o, x[e(189)]), C = e(1074) + n, D = "exclType" + n, j = e(1576) + n, M = "op" + n, q = e(1107) + M + e(668);
      r += e(1983) + n + e(528) + E + "; ", E = e(805) + n, r += " var " + C + "; var " + D + e(879) + E + e(2298) + D + " != 'boolean' && " + D + " != 'undefined' && " + D + e(996);
      var R = g, N = N || [];
      N[e(1472)](r), r = "", x[e(764)] !== !1 ? (r += e(1754) + (R || e(1518)) + "' , dataPath: (dataPath || '') + " + x[e(757)] + e(2033) + x[e(288)][e(990)](d) + " , params: {} ", x[e(1266)][e(535)] !== !1 && (r += e(1012) + g + e(1944)), x[e(1266)][e(2439)] && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += e(1066);
      var $ = r;
      r = N[e(876)](), !x[e(252)] && f ? x.async ? r += e(1775) + $ + "]); " : r += e(1801) + $ + e(1942) : r += " var err = " + $ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += " } else if ( ", v && (r += " (" + h + e(2054) + h + e(1800)), r += " " + D + e(318) + C + " = " + h + " === undefined || " + E + " " + F + "= " + h + e(2222) + l + " " + O + "= " + E + e(2104) + l + " " + O + " " + h + e(1631) + C + e(528) + E + e(1251) + l + " " + O + "= " + h + e(2104) + l + " " + O + " " + h + e(1125) + l + e(334) + l + e(199) + n + " = " + C + e(1133) + F + e(532) + F + e(585), c === void 0 && (R = g, d = x[e(1110)] + "/" + g, h = E, v = P);
    } else {
      var j = typeof w == e(1829), q = F;
      if (j && v) {
        var M = "'" + q + "'";
        r += e(1530), v && (r += " (" + h + " !== undefined && typeof " + h + e(1800)), r += e(2334) + h + " === undefined || " + w + " " + F + "= " + h + " ? " + l + " " + O + "= " + w + " : " + l + " " + O + " " + h + " ) || " + l + e(334) + l + e(1196);
      } else {
        j && c === void 0 ? (C = !0, R = g, d = x[e(1110)] + "/" + g, h = w, O += "=") : (j && (h = Math[p ? e(1568) : "max"](w, c)), w === (j ? h : !0) ? (C = !0, R = g, d = x[e(1110)] + "/" + g, O += "=") : (C = !1, q += "="));
        var M = "'" + q + "'";
        r += e(1530), v && (r += " (" + h + " !== undefined && typeof " + h + e(1800)), r += " " + l + " " + O + " " + h + e(711) + l + " !== " + l + e(1196);
      }
    }
    R = R || t;
    var N = N || [];
    N[e(1472)](r), r = "", x[e(764)] !== !1 ? (r += e(1754) + (R || e(683)) + e(1859) + x[e(757)] + e(2033) + x[e(288)][e(990)](d) + e(1767) + M + e(1341) + h + e(2274) + C + e(922), x[e(1266)][e(535)] !== !1 && (r += e(688) + q + " ", v ? r += e(1107) + h : r += "" + h + "'"), x[e(1266)].verbose && (r += e(720), v ? r += e(1711) + u : r += "" + c, r += "         , parentSchema: validate.schema" + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += " {} ";
    var $ = r;
    return r = N[e(876)](), !x.compositeRule && f ? x[e(1494)] ? r += e(1775) + $ + e(784) : r += e(1801) + $ + e(1942) : r += " var err = " + $ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += e(922), f && (r += e(1798)), r;
  }), mt;
}
var vt, Ra;
function Ca() {
  return Ra || (Ra = 1, vt = function(x, t, a) {
    var e = B, r = " ", n = x.level, o = x[e(1628)], c = x[e(870)][t], u = x[e(2174)] + x.util[e(1034)](t), d = x.errSchemaPath + "/" + t, f = !x[e(1266)][e(313)], g, l = e(1512) + (o || ""), v = x.opts[e(1517)] && c && c[e(1517)], h;
    if (v ? (r += " var schema" + n + e(528) + x.util[e(274)](c.$data, o, x[e(189)]) + "; ", h = e(870) + n) : h = c, !(v || typeof c == "number")) throw new Error(t + e(1402));
    var p = t == "maxItems" ? ">" : "<";
    r += e(2221), v && (r += " (" + h + " !== undefined && typeof " + h + e(1800)), r += " " + l + ".length " + p + " " + h + e(1196);
    var g = t, w = w || [];
    w[e(1472)](r), r = "", x[e(764)] !== !1 ? (r += e(1754) + (g || e(1756)) + "' , dataPath: (dataPath || '') + " + x[e(757)] + " , schemaPath: " + x[e(288)][e(990)](d) + e(1055) + h + e(922), x[e(1266)][e(535)] !== !1 && (r += e(239), t == e(588) ? r += e(2358) : r += e(1769), r += " than ", v ? r += e(1107) + h + e(668) : r += "" + c, r += " items' "), x[e(1266)][e(2439)] && (r += " , schema:  ", v ? r += e(1711) + u : r += "" + c, r += e(2070) + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += e(1066);
    var P = r;
    return r = w[e(876)](), !x[e(252)] && f ? x[e(1494)] ? r += e(1775) + P + e(784) : r += " validate.errors = [" + P + e(1942) : r += e(1623) + P + e(1819), r += "} ", f && (r += e(1798)), r;
  }), vt;
}
var gt, Fa;
function Na() {
  return Fa || (Fa = 1, gt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x[e(2174)] + x.util[e(1034)](t), d = x.errSchemaPath + "/" + t, f = !x[e(1266)].allErrors, g, l = e(1512) + (o || ""), v = x[e(1266)][e(1517)] && c && c[e(1517)], h;
    if (v ? (r += e(2017) + n + e(528) + x[e(288)][e(274)](c[e(1517)], o, x[e(189)]) + "; ", h = e(870) + n) : h = c, !(v || typeof c == "number")) throw new Error(t + e(1402));
    var p = t == e(520) ? ">" : "<";
    r += e(2221), v && (r += " (" + h + e(2054) + h + e(1800)), x.opts[e(777)] === !1 ? r += " " + l + e(790) : r += e(854) + l + ") ", r += " " + p + " " + h + e(1196);
    var g = t, w = w || [];
    w[e(1472)](r), r = "", x.createErrors !== !1 ? (r += e(1754) + (g || e(832)) + e(1859) + x.errorPath + e(2033) + x.util[e(990)](d) + e(1055) + h + e(922), x[e(1266)][e(535)] !== !1 && (r += e(892), t == e(520) ? r += "longer" : r += "shorter", r += e(1174), v ? r += e(1107) + h + e(668) : r += "" + c, r += " characters' "), x.opts[e(2439)] && (r += e(720), v ? r += "validate.schema" + u : r += "" + c, r += e(2070) + x.schemaPath + " , data: " + l + " "), r += e(922)) : r += e(1066);
    var P = r;
    return r = w[e(876)](), !x[e(252)] && f ? x[e(1494)] ? r += e(1775) + P + "]); " : r += e(1801) + P + e(1942) : r += e(1623) + P + e(1819), r += "} ", f && (r += " else { "), r;
  }), gt;
}
var yt, qa;
function Ta() {
  return qa || (qa = 1, yt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x.schema[t], u = x[e(2174)] + x[e(288)][e(1034)](t), d = x[e(1110)] + "/" + t, f = !x.opts[e(313)], g, l = e(1512) + (o || ""), v = x.opts[e(1517)] && c && c[e(1517)], h;
    if (v ? (r += " var schema" + n + " = " + x[e(288)][e(274)](c[e(1517)], o, x.dataPathArr) + "; ", h = e(870) + n) : h = c, !(v || typeof c == e(1829))) throw new Error(t + " must be number");
    var p = t == e(1764) ? ">" : "<";
    r += "if ( ", v && (r += " (" + h + e(2054) + h + e(1800)), r += e(2131) + l + ").length " + p + " " + h + e(1196);
    var g = t, w = w || [];
    w.push(r), r = "", x[e(764)] !== !1 ? (r += e(1754) + (g || e(604)) + e(1859) + x[e(757)] + " , schemaPath: " + x[e(288)][e(990)](d) + " , params: { limit: " + h + e(922), x[e(1266)][e(535)] !== !1 && (r += e(239), t == e(1764) ? r += e(2358) : r += e(1769), r += e(1174), v ? r += e(1107) + h + e(668) : r += "" + c, r += e(1019)), x[e(1266)].verbose && (r += " , schema:  ", v ? r += e(1711) + u : r += "" + c, r += e(2070) + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += e(1066);
    var P = r;
    return r = w[e(876)](), !x[e(252)] && f ? x[e(1494)] ? r += " throw new ValidationError([" + P + e(784) : r += e(1801) + P + e(1942) : r += e(1623) + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", f && (r += e(1798)), r;
  }), yt;
}
var bt, Oa;
function X2() {
  return Oa || (Oa = 1, bt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x[e(2174)] + x[e(288)].getProperty(t), d = x[e(1110)] + "/" + t, f = !x[e(1266)][e(313)], l = e(1512) + (o || ""), v = x[e(1266)][e(1517)] && c && c.$data, h;
    if (v ? (r += " var schema" + n + e(528) + x[e(288)][e(274)](c[e(1517)], o, x[e(189)]) + "; ", h = e(870) + n) : h = c, !(v || typeof c == e(1829))) throw new Error(t + e(1402));
    r += e(684) + n + e(2255), v && (r += " " + h + " !== undefined && ( typeof " + h + e(1381)), r += e(627) + n + e(528) + l + e(679) + h + ", ", x.opts[e(2209)] ? r += e(1469) + n + e(1701) + n + e(1995) + x[e(1266)][e(2209)] + " " : r += e(824) + n + e(2445) + n + ") ", r += e(1474), v && (r += e(1098)), r += e(1058);
    var p = p || [];
    p[e(1472)](r), r = "", x.createErrors !== !1 ? (r += e(1754) + e(2074) + e(1859) + x.errorPath + e(2033) + x[e(288)].toQuotedString(d) + " , params: { multipleOf: " + h + " } ", x[e(1266)][e(535)] !== !1 && (r += e(565), v ? r += e(1107) + h : r += "" + h + "'"), x[e(1266)].verbose && (r += " , schema:  ", v ? r += e(1711) + u : r += "" + c, r += e(2070) + x.schemaPath + e(2020) + l + " "), r += " } ") : r += e(1066);
    var g = r;
    return r = p.pop(), !x[e(252)] && f ? x[e(1494)] ? r += e(1775) + g + e(784) : r += " validate.errors = [" + g + e(1942) : r += e(1623) + g + e(1819), r += "} ", f && (r += e(1798)), r;
  }), bt;
}
var wt, Aa;
function _2() {
  return Aa || (Aa = 1, wt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x.schemaPath + x[e(288)][e(1034)](t), d = x[e(1110)] + "/" + t, f = !x.opts[e(313)], l = e(1512) + (o || ""), v = e(1969) + n, h = x[e(288)].copy(x);
    h[e(1068)]++;
    var p = "valid" + h[e(1068)];
    if (x[e(1266)][e(2014)] ? typeof c == "object" && Object[e(2411)](c)[e(1001)] > 0 || c === !1 : x.util[e(954)](c, x[e(1187)][e(1946)])) {
      h.schema = c, h[e(2174)] = u, h[e(1110)] = d, r += e(2026) + v + " = errors;  ";
      var g = x.compositeRule;
      x[e(252)] = h.compositeRule = !0, h.createErrors = !1;
      var w;
      h[e(1266)].allErrors && (w = h.opts[e(313)], h.opts.allErrors = !1), r += " " + x[e(1768)](h) + " ", h.createErrors = !0, w && (h[e(1266)][e(313)] = w), x[e(252)] = h[e(252)] = g, r += e(2433) + p + e(681);
      var P = P || [];
      P.push(r), r = "", x.createErrors !== !1 ? (r += " { keyword: '" + e(292) + e(1859) + x.errorPath + e(2033) + x[e(288)][e(990)](d) + e(408), x[e(1266)].messages !== !1 && (r += e(1317)), x[e(1266)][e(2439)] && (r += e(109) + u + e(2452) + x[e(2174)] + e(2020) + l + " "), r += " } ") : r += e(1066);
      var F = r;
      r = P.pop(), !x[e(252)] && f ? x[e(1494)] ? r += e(1775) + F + e(784) : r += " validate.errors = [" + F + e(1942) : r += e(1623) + F + e(1819), r += " } else {  errors = " + v + "; if (vErrors !== null) { if (" + v + ") vErrors.length = " + v + e(1334), x[e(1266)][e(313)] && (r += e(922));
    } else r += "  var err =   ", x[e(764)] !== !1 ? (r += e(1754) + "not" + e(1859) + x.errorPath + e(2033) + x[e(288)][e(990)](d) + e(408), x[e(1266)][e(535)] !== !1 && (r += " , message: 'should NOT be valid' "), x[e(1266)][e(2439)] && (r += e(109) + u + e(2452) + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += e(1066), r += e(1819), f && (r += " if (false) { ");
    return r;
  }), wt;
}
var St, Da;
function ec() {
  return Da || (Da = 1, St = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x[e(2174)] + x[e(288)].getProperty(t), d = x[e(1110)] + "/" + t, f = !x.opts[e(313)], l = e(1512) + (o || ""), v = "valid" + n, h = "errs__" + n, p = x[e(288)][e(771)](x), g = "";
    p.level++;
    var w = e(1467) + p.level, P = p[e(1014)], F = e(1523) + n, O = e(2394) + n;
    r += e(1480) + h + e(418) + F + e(192) + v + " = false , " + O + e(1679);
    var R = x.compositeRule;
    x[e(252)] = p.compositeRule = !0;
    var E = c;
    if (E)
      for (var C, D = -1, j = E[e(1001)] - 1; D < j; )
        C = E[D += 1], (x[e(1266)][e(2014)] ? typeof C == e(865) && Object[e(2411)](C)[e(1001)] > 0 || C === !1 : x[e(288)].schemaHasRules(C, x[e(1187)][e(1946)])) ? (p.schema = C, p[e(2174)] = u + "[" + D + "]", p[e(1110)] = d + "/" + D, r += "  " + x.validate(p) + " ", p.baseId = P) : r += e(2026) + w + e(741), D && (r += " if (" + w + e(1633) + F + e(1196) + v + e(1219) + O + e(1619) + O + ", " + D + e(1760), g += "}"), r += e(2433) + w + e(1196) + v + " = " + F + e(741) + O + " = " + D + "; }";
    return x[e(252)] = p[e(252)] = R, r += "" + g + "if (!" + v + ") {   var err =   ", x[e(764)] !== !1 ? (r += e(1754) + "oneOf" + e(1859) + x[e(757)] + " , schemaPath: " + x[e(288)][e(990)](d) + e(2165) + O + " } ", x.opts[e(535)] !== !1 && (r += " , message: 'should match exactly one schema in oneOf' "), x[e(1266)][e(2439)] && (r += e(109) + u + e(2452) + x.schemaPath + " , data: " + l + " "), r += e(922)) : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x.compositeRule && f && (x[e(1494)] ? r += e(143) : r += e(2201)), r += "} else {  errors = " + h + e(2191) + h + e(911) + h + e(186), x[e(1266)].allErrors && (r += e(922)), r;
  }), St;
}
var kt, ja;
function xc() {
  return ja || (ja = 1, kt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x.dataLevel, c = x[e(870)][t], u = x[e(2174)] + x[e(288)][e(1034)](t), d = x[e(1110)] + "/" + t, f = !x.opts[e(313)], l = "data" + (o || ""), v = x.opts[e(1517)] && c && c[e(1517)], h;
    v ? (r += e(2017) + n + " = " + x[e(288)][e(274)](c[e(1517)], o, x[e(189)]) + "; ", h = e(870) + n) : h = c;
    var p = v ? e(1849) + h + "))" : x[e(228)](c);
    r += e(2221), v && (r += " (" + h + e(2054) + h + " != 'string') || "), r += " !" + p + ".test(" + l + e(2277);
    var g = g || [];
    g[e(1472)](r), r = "", x[e(764)] !== !1 ? (r += " { keyword: '" + e(235) + e(1859) + x[e(757)] + e(2033) + x[e(288)].toQuotedString(d) + e(2089), v ? r += "" + h : r += "" + x[e(288)].toQuotedString(c), r += e(278), x.opts[e(535)] !== !1 && (r += e(872), v ? r += e(1107) + h + " + '" : r += "" + x.util[e(498)](c), r += e(2447)), x[e(1266)].verbose && (r += e(720), v ? r += "validate.schema" + u : r += "" + x[e(288)][e(990)](c), r += e(2070) + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += e(1066);
    var w = r;
    return r = g[e(876)](), !x.compositeRule && f ? x[e(1494)] ? r += e(1775) + w + e(784) : r += e(1801) + w + e(1942) : r += e(1623) + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", f && (r += " else { "), r;
  }), kt;
}
var Pt, Ma;
function tc() {
  return Ma || (Ma = 1, Pt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x.dataLevel, c = x[e(870)][t], u = x[e(2174)] + x[e(288)][e(1034)](t), d = x.errSchemaPath + "/" + t, f = !x.opts[e(313)], l = e(1512) + (o || ""), v = e(1969) + n, h = x[e(288)][e(771)](x), p = "";
    h.level++;
    var g = e(1467) + h.level, w = e(477) + n, P = e(1182) + n, F = h.dataLevel = x[e(1628)] + 1, O = e(1512) + F, R = e(500) + n, E = Object[e(2411)](c || {}).filter(l0), C = x[e(870)][e(1998)] || {}, D = Object[e(2411)](C)[e(830)](l0), j = x[e(870)][e(1612)], M = E[e(1001)] || D.length, q = j === !1, N = typeof j == e(865) && Object[e(2411)](j)[e(1001)], $ = x.opts[e(198)], H = q || N || $, V = x[e(1266)].ownProperties, J = x.baseId, c0 = x[e(870)].required;
    if (c0 && !(x.opts[e(1517)] && c0[e(1517)]) && c0[e(1001)] < x[e(1266)][e(810)]) var u0 = x[e(288)].toHash(c0);
    function l0(jx) {
      var Mx = e;
      return jx !== Mx(1395);
    }
    if (r += e(1480) + v + e(1365) + g + e(1178), V && (r += e(2026) + R + e(2132)), H) {
      if (V ? r += " " + R + e(528) + R + e(455) + l + e(103) + P + "=0; " + P + "<" + R + ".length; " + P + e(1689) + w + e(528) + R + "[" + P + e(185) : r += " for (var " + w + e(387) + l + ") { ", M) {
        if (r += " var isAdditional" + n + " = !(false ", E[e(1001)])
          if (E[e(1001)] > 8) r += e(1791) + u + e(1322) + w + ") ";
          else {
            var i0 = E;
            if (i0)
              for (var f0, S0 = -1, b0 = i0.length - 1; S0 < b0; )
                f0 = i0[S0 += 1], r += e(711) + w + e(268) + x[e(288)].toQuotedString(f0) + " ";
          }
        if (D[e(1001)]) {
          var M0 = D;
          if (M0)
            for (var k0, Q0 = -1, A = M0[e(1001)] - 1; Q0 < A; )
              k0 = M0[Q0 += 1], r += " || " + x.usePattern(k0) + e(972) + w + ") ";
        }
        r += e(379) + n + e(1196);
      }
      if ($ == e(1946)) r += e(2367) + l + "[" + w + e(185);
      else {
        var T = x[e(757)], z = e(1107) + w + e(668);
        if (x[e(1266)][e(1578)] && (x.errorPath = x[e(288)].getPathExpr(x[e(757)], w, x[e(1266)][e(1954)])), q)
          if ($) r += e(2367) + l + "[" + w + e(185);
          else {
            r += " " + g + e(1219);
            var G = d;
            d = x.errSchemaPath + "/additionalProperties";
            var X = X || [];
            X[e(1472)](r), r = "", x[e(764)] !== !1 ? (r += e(1754) + "additionalProperties" + e(1859) + x.errorPath + e(2033) + x[e(288)][e(990)](d) + e(1059) + z + e(900), x[e(1266)].messages !== !1 && (r += " , message: '", x.opts[e(1578)] ? r += e(180) : r += e(967), r += "' "), x[e(1266)][e(2439)] && (r += e(623) + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += e(1066);
            var W = r;
            r = X[e(876)](), !x[e(252)] && f ? x[e(1494)] ? r += e(1775) + W + e(784) : r += e(1801) + W + e(1942) : r += e(1623) + W + e(1819), d = G, f && (r += e(2460));
          }
        else if (N)
          if ($ == e(383)) {
            r += e(2026) + v + e(447);
            var Y = x[e(252)];
            x[e(252)] = h[e(252)] = !0, h[e(870)] = j, h.schemaPath = x[e(2174)] + ".additionalProperties", h[e(1110)] = x.errSchemaPath + e(971), h[e(757)] = x[e(1266)][e(1578)] ? x[e(757)] : x[e(288)][e(1673)](x.errorPath, w, x[e(1266)][e(1954)]);
            var s0 = l + "[" + w + "]";
            h[e(189)][F] = w;
            var o0 = x[e(1768)](h);
            h[e(1014)] = J, x[e(288)].varOccurences(o0, O) < 2 ? r += " " + x.util[e(1337)](o0, O, s0) + " " : r += e(2026) + O + e(528) + s0 + "; " + o0 + " ", r += " if (!" + g + ") { errors = " + v + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + l + "[" + w + "]; }  ", x[e(252)] = h[e(252)] = Y;
          } else {
            h[e(870)] = j, h.schemaPath = x.schemaPath + ".additionalProperties", h[e(1110)] = x[e(1110)] + e(971), h[e(757)] = x[e(1266)][e(1578)] ? x[e(757)] : x[e(288)][e(1673)](x[e(757)], w, x[e(1266)][e(1954)]);
            var s0 = l + "[" + w + "]";
            h.dataPathArr[F] = w;
            var o0 = x[e(1768)](h);
            h[e(1014)] = J, x[e(288)][e(1617)](o0, O) < 2 ? r += " " + x[e(288)][e(1337)](o0, O, s0) + " " : r += e(2026) + O + " = " + s0 + "; " + o0 + " ", f && (r += e(453) + g + e(2180));
          }
        x[e(757)] = T;
      }
      M && (r += e(922)), r += e(223), f && (r += " if (" + g + ") { ", p += "}");
    }
    var e0 = x.opts[e(2013)] && !x[e(252)];
    if (E.length) {
      var L0 = E;
      if (L0)
        for (var f0, O0 = -1, V0 = L0[e(1001)] - 1; O0 < V0; ) {
          f0 = L0[O0 += 1];
          var w0 = c[f0];
          if (x[e(1266)][e(2014)] ? typeof w0 == e(865) && Object[e(2411)](w0).length > 0 || w0 === !1 : x[e(288)][e(954)](w0, x[e(1187)][e(1946)])) {
            var G0 = x[e(288)][e(1034)](f0), s0 = l + G0, se = e0 && w0[e(2454)] !== void 0;
            h[e(870)] = w0, h[e(2174)] = u + G0, h[e(1110)] = d + "/" + x.util[e(437)](f0), h[e(757)] = x[e(288)][e(1624)](x[e(757)], f0, x[e(1266)][e(1954)]), h[e(189)][F] = x[e(288)][e(990)](f0);
            var o0 = x[e(1768)](h);
            if (h.baseId = J, x[e(288)][e(1617)](o0, O) < 2) {
              o0 = x[e(288)][e(1337)](o0, O, s0);
              var Y0 = s0;
            } else {
              var Y0 = O;
              r += e(2026) + O + e(528) + s0 + "; ";
            }
            if (se) r += " " + o0 + " ";
            else {
              if (u0 && u0[f0]) {
                r += e(1530) + Y0 + e(1872), V && (r += e(1435) + l + e(888) + x[e(288)][e(498)](f0) + e(501)), r += ") { " + g + e(1219);
                var T = x[e(757)], G = d, A0 = x[e(288)][e(498)](f0);
                x.opts[e(1578)] && (x[e(757)] = x[e(288)].getPath(T, f0, x[e(1266)][e(1954)])), d = x[e(1110)] + e(2124);
                var X = X || [];
                X[e(1472)](r), r = "", x.createErrors !== !1 ? (r += e(1754) + e(740) + e(1859) + x[e(757)] + e(2033) + x[e(288)][e(990)](d) + " , params: { missingProperty: '" + A0 + e(900), x.opts[e(535)] !== !1 && (r += e(1012), x[e(1266)][e(1578)] ? r += e(1259) : r += e(1968) + A0 + "\\'", r += "' "), x[e(1266)].verbose && (r += " , schema: validate.schema" + u + e(2452) + x.schemaPath + " , data: " + l + " "), r += e(922)) : r += e(1066);
                var W = r;
                r = X[e(876)](), !x[e(252)] && f ? x[e(1494)] ? r += e(1775) + W + e(784) : r += e(1801) + W + e(1942) : r += e(1623) + W + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = G, x.errorPath = T, r += e(1209);
              } else f ? (r += e(1530) + Y0 + e(1872), V && (r += e(1435) + l + e(888) + x.util.escapeQuotes(f0) + e(501)), r += e(1196) + g + e(1857)) : (r += e(2433) + Y0 + e(890), V && (r += " &&   Object.prototype.hasOwnProperty.call(" + l + e(888) + x[e(288)][e(498)](f0) + "') "), r += " ) { ");
              r += " " + o0 + " } ";
            }
          }
          f && (r += " if (" + g + e(1196), p += "}");
        }
    }
    if (D[e(1001)]) {
      var $0 = D;
      if ($0)
        for (var k0, ne = -1, Ze = $0[e(1001)] - 1; ne < Ze; ) {
          k0 = $0[ne += 1];
          var w0 = C[k0];
          if (x.opts[e(2014)] ? typeof w0 == e(865) && Object[e(2411)](w0)[e(1001)] > 0 || w0 === !1 : x[e(288)][e(954)](w0, x[e(1187)].all)) {
            h[e(870)] = w0, h[e(2174)] = x[e(2174)] + ".patternProperties" + x[e(288)][e(1034)](k0), h[e(1110)] = x[e(1110)] + e(1258) + x[e(288)].escapeFragment(k0), V ? r += " " + R + " = " + R + e(455) + l + e(103) + P + e(1881) + P + "<" + R + ".length; " + P + e(1689) + w + e(528) + R + "[" + P + e(185) : r += " for (var " + w + e(387) + l + e(1196), r += e(2433) + x[e(228)](k0) + ".test(" + w + e(548), h.errorPath = x[e(288)][e(1673)](x[e(757)], w, x.opts[e(1954)]);
            var s0 = l + "[" + w + "]";
            h[e(189)][F] = w;
            var o0 = x[e(1768)](h);
            h[e(1014)] = J, x[e(288)][e(1617)](o0, O) < 2 ? r += " " + x[e(288)][e(1337)](o0, O, s0) + " " : r += e(2026) + O + e(528) + s0 + "; " + o0 + " ", f && (r += e(453) + g + e(2180)), r += " } ", f && (r += e(273) + g + e(741)), r += e(223), f && (r += e(2433) + g + e(1196), p += "}");
          }
        }
    }
    return f && (r += " " + p + e(2433) + v + e(133)), r;
  }), Pt;
}
var Et, La;
function rc() {
  return La || (La = 1, Et = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x.schemaPath + x[e(288)][e(1034)](t), d = x[e(1110)] + "/" + t, f = !x[e(1266)][e(313)], l = e(1512) + (o || ""), v = e(1969) + n, h = x.util[e(771)](x), p = "";
    h[e(1068)]++;
    var g = e(1467) + h[e(1068)];
    if (r += e(1480) + v + " = errors;", x.opts[e(2014)] ? typeof c == e(865) && Object[e(2411)](c)[e(1001)] > 0 || c === !1 : x[e(288)][e(954)](c, x[e(1187)][e(1946)])) {
      h.schema = c, h[e(2174)] = u, h[e(1110)] = d;
      var w = e(477) + n, P = "idx" + n, F = "i" + n, O = "' + " + w + " + '", R = h[e(1628)] = x[e(1628)] + 1, E = "data" + R, C = e(500) + n, D = x[e(1266)].ownProperties, j = x[e(1014)];
      D && (r += e(2026) + C + e(976)), D ? r += " " + C + e(528) + C + e(455) + l + e(103) + P + e(1881) + P + "<" + C + e(1452) + P + e(1689) + w + e(528) + C + "[" + P + e(185) : r += e(421) + w + e(387) + l + ") { ", r += " var startErrs" + n + " = errors; ";
      var M = w, q = x[e(252)];
      x[e(252)] = h[e(252)] = !0;
      var N = x.validate(h);
      h.baseId = j, x[e(288)][e(1617)](N, E) < 2 ? r += " " + x[e(288)][e(1337)](N, E, M) + " " : r += e(2026) + E + e(528) + M + "; " + N + " ", x.compositeRule = h.compositeRule = q, r += e(453) + g + ") { for (var " + F + e(139) + n + "; " + F + e(2307) + F + e(953) + F + "].propertyName = " + w + "; }   var err =   ", x[e(764)] !== !1 ? (r += e(1754) + e(2415) + e(1859) + x[e(757)] + e(2033) + x[e(288)].toQuotedString(d) + e(1867) + O + e(900), x[e(1266)][e(535)] !== !1 && (r += e(1562) + O + e(2376)), x.opts[e(2439)] && (r += e(109) + u + " , parentSchema: validate.schema" + x[e(2174)] + e(2020) + l + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(252)] && f && (x[e(1494)] ? r += " throw new ValidationError(vErrors); " : r += e(2201)), f && (r += e(2460)), r += e(1316);
    }
    return f && (r += " " + p + e(2433) + v + " == errors) {"), r;
  }), Et;
}
var It, $a;
function ac() {
  return $a || ($a = 1, It = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x[e(2174)] + x[e(288)].getProperty(t), d = x[e(1110)] + "/" + t, f = !x[e(1266)][e(313)], l = e(1512) + (o || ""), v = e(1467) + n, h = x[e(1266)][e(1517)] && c && c[e(1517)];
    h && (r += e(2017) + n + " = " + x.util[e(274)](c[e(1517)], o, x[e(189)]) + "; ");
    var p = "schema" + n;
    if (!h)
      if (c[e(1001)] < x[e(1266)][e(810)] && x[e(870)].properties && Object.keys(x.schema[e(1140)])[e(1001)]) {
        var R = [], g = c;
        if (g)
          for (var w, P = -1, F = g[e(1001)] - 1; P < F; ) {
            w = g[P += 1];
            var O = x[e(870)][e(1140)][w];
            !(O && (x[e(1266)][e(2014)] ? typeof O == e(865) && Object[e(2411)](O)[e(1001)] > 0 || O === !1 : x[e(288)][e(954)](O, x[e(1187)][e(1946)]))) && (R[R[e(1001)]] = w);
          }
      } else var R = c;
    if (h || R.length) {
      var E = x[e(757)], C = h || R[e(1001)] >= x[e(1266)].loopRequired, D = x[e(1266)][e(319)];
      if (f)
        if (r += " var missing" + n + "; ", C) {
          !h && (r += e(2026) + p + e(2100) + u + "; ");
          var j = "i" + n, M = e(870) + n + "[" + j + "]", q = e(1107) + M + e(668);
          x[e(1266)]._errorDataPathProperty && (x[e(757)] = x[e(288)][e(1673)](E, M, x[e(1266)][e(1954)])), r += e(2026) + v + e(741), h && (r += " if (schema" + n + e(1665) + v + e(814) + n + ")) " + v + e(1124)), r += e(421) + j + e(330) + j + e(1431) + p + e(1452) + j + e(481) + v + e(528) + l + "[" + p + "[" + j + e(156), D && (r += e(910) + l + ", " + p + "[" + j + e(914)), r += e(907) + v + e(831), h && (r += e(345)), r += e(1851) + v + e(681);
          var N = N || [];
          N.push(r), r = "", x[e(764)] !== !1 ? (r += e(1754) + e(740) + e(1859) + x[e(757)] + e(2033) + x[e(288)][e(990)](d) + e(654) + q + e(900), x[e(1266)].messages !== !1 && (r += e(1012), x.opts[e(1578)] ? r += e(1259) : r += e(1968) + q + "\\'", r += "' "), x[e(1266)][e(2439)] && (r += e(109) + u + e(2452) + x.schemaPath + e(2020) + l + " "), r += " } ") : r += e(1066);
          var $ = r;
          r = N[e(876)](), !x.compositeRule && f ? x[e(1494)] ? r += e(1775) + $ + e(784) : r += e(1801) + $ + e(1942) : r += " var err = " + $ + e(1819), r += e(1209);
        } else {
          r += e(1530);
          var H = R;
          if (H)
            for (var V, j = -1, J = H[e(1001)] - 1; j < J; ) {
              V = H[j += 1], j && (r += " || ");
              var c0 = x.util.getProperty(V), u0 = l + c0;
              r += e(985) + u0 + " === undefined ", D && (r += e(1435) + l + ", '" + x.util[e(498)](V) + e(501)), r += ") && (missing" + n + e(528) + x[e(288)][e(990)](x[e(1266)].jsonPointers ? V : c0) + e(231);
            }
          r += e(465);
          var M = e(2408) + n, q = e(1107) + M + e(668);
          x.opts[e(1578)] && (x[e(757)] = x[e(1266)][e(1954)] ? x[e(288)][e(1673)](E, M, !0) : E + e(510) + M);
          var N = N || [];
          N[e(1472)](r), r = "", x.createErrors !== !1 ? (r += e(1754) + "required" + e(1859) + x[e(757)] + e(2033) + x.util[e(990)](d) + " , params: { missingProperty: '" + q + e(900), x[e(1266)][e(535)] !== !1 && (r += e(1012), x.opts._errorDataPathProperty ? r += e(1259) : r += e(1968) + q + "\\'", r += "' "), x.opts[e(2439)] && (r += e(109) + u + " , parentSchema: validate.schema" + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += e(1066);
          var $ = r;
          r = N[e(876)](), !x.compositeRule && f ? x.async ? r += e(1775) + $ + e(784) : r += e(1801) + $ + e(1942) : r += e(1623) + $ + e(1819), r += e(1209);
        }
      else if (C) {
        !h && (r += e(2026) + p + " = validate.schema" + u + "; ");
        var j = "i" + n, M = "schema" + n + "[" + j + "]", q = e(1107) + M + e(668);
        x[e(1266)][e(1578)] && (x[e(757)] = x[e(288)].getPathExpr(E, M, x.opts[e(1954)])), h && (r += e(2433) + p + e(1505) + p + e(2065), x[e(764)] !== !1 ? (r += e(1754) + e(740) + e(1859) + x.errorPath + e(2033) + x.util.toQuotedString(d) + " , params: { missingProperty: '" + q + "' } ", x.opts[e(535)] !== !1 && (r += e(1012), x[e(1266)][e(1578)] ? r += "is a required property" : r += e(1968) + q + "\\'", r += "' "), x[e(1266)][e(2439)] && (r += e(109) + u + e(2452) + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += e(1066), r += e(650) + p + " !== undefined) { "), r += " for (var " + j + " = 0; " + j + " < " + p + e(1452) + j + e(2417) + l + "[" + p + "[" + j + e(422), D && (r += e(1435) + l + ", " + p + "[" + j + e(914)), r += ") {  var err =   ", x[e(764)] !== !1 ? (r += " { keyword: '" + e(740) + "' , dataPath: (dataPath || '') + " + x[e(757)] + e(2033) + x[e(288)][e(990)](d) + e(654) + q + e(900), x[e(1266)][e(535)] !== !1 && (r += " , message: '", x.opts._errorDataPathProperty ? r += "is a required property" : r += e(1968) + q + "\\'", r += "' "), x[e(1266)][e(2439)] && (r += e(109) + u + e(2452) + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += e(1066), r += e(1964), h && (r += e(345));
      } else {
        var l0 = R;
        if (l0)
          for (var V, i0 = -1, f0 = l0[e(1001)] - 1; i0 < f0; ) {
            V = l0[i0 += 1];
            var c0 = x[e(288)][e(1034)](V), q = x[e(288)][e(498)](V), u0 = l + c0;
            x[e(1266)][e(1578)] && (x[e(757)] = x[e(288)][e(1624)](E, V, x.opts.jsonPointers)), r += e(1530) + u0 + e(1872), D && (r += e(1435) + l + e(888) + x[e(288)][e(498)](V) + "') "), r += e(2235), x[e(764)] !== !1 ? (r += e(1754) + e(740) + e(1859) + x[e(757)] + e(2033) + x.util[e(990)](d) + e(654) + q + "' } ", x[e(1266)][e(535)] !== !1 && (r += e(1012), x[e(1266)]._errorDataPathProperty ? r += e(1259) : r += e(1968) + q + "\\'", r += "' "), x[e(1266)].verbose && (r += e(109) + u + e(2452) + x[e(2174)] + " , data: " + l + " "), r += e(922)) : r += e(1066), r += e(1587);
          }
      }
      x.errorPath = E;
    } else f && (r += e(2409));
    return r;
  }), It;
}
var Rt, za;
function sc() {
  return za || (za = 1, Rt = function(x, t, a) {
    var e = B, r = " ", n = x.level, o = x.dataLevel, c = x[e(870)][t], u = x.schemaPath + x[e(288)][e(1034)](t), d = x[e(1110)] + "/" + t, f = !x[e(1266)][e(313)], l = e(1512) + (o || ""), v = e(1467) + n, h = x[e(1266)][e(1517)] && c && c[e(1517)], p;
    if (h ? (r += e(2017) + n + " = " + x[e(288)][e(274)](c[e(1517)], o, x.dataPathArr) + "; ", p = e(870) + n) : p = c, (c || h) && x.opts[e(1771)] !== !1) {
      h && (r += " var " + v + e(2298) + p + e(1878) + p + " === undefined) " + v + e(1349) + p + e(1903) + v + e(1088)), r += e(2127) + l + e(843) + v + e(2284);
      var g = x[e(870)][e(464)] && x.schema[e(464)][e(399)], w = Array[e(2305)](g);
      if (!g || g == e(865) || g == "array" || w && (g[e(1616)](e(865)) >= 0 || g[e(1616)](e(791)) >= 0)) r += e(658) + l + e(2216) + l + e(1550) + v + " = false; break outer; } } } ";
      else {
        r += e(2430) + l + e(1300);
        var P = e(1653) + (w ? "s" : "");
        r += " if (" + x[e(288)][P](g, e(1559), x[e(1266)][e(270)], !0) + e(628), w && (r += e(391)), r += e(1862) + v + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
      }
      r += " } ", h && (r += e(345)), r += e(453) + v + e(681);
      var F = F || [];
      F[e(1472)](r), r = "", x.createErrors !== !1 ? (r += e(1754) + e(1771) + e(1859) + x[e(757)] + e(2033) + x[e(288)].toQuotedString(d) + e(625), x[e(1266)][e(535)] !== !1 && (r += e(1484)), x[e(1266)][e(2439)] && (r += e(720), h ? r += "validate.schema" + u : r += "" + c, r += e(2070) + x[e(2174)] + e(2020) + l + " "), r += e(922)) : r += " {} ";
      var O = r;
      r = F[e(876)](), !x[e(252)] && f ? x[e(1494)] ? r += e(1775) + O + e(784) : r += e(1801) + O + e(1942) : r += e(1623) + O + e(1819), r += " } ", f && (r += " else { ");
    } else f && (r += e(731));
    return r;
  }), Rt;
}
var Ct, Ha;
function nc() {
  return Ha || (Ha = 1, Ct = { $ref: H2(), allOf: U2(), anyOf: V2(), $comment: W2(), const: Z2(), contains: B2(), dependencies: K2(), enum: J2(), format: G2(), if: Q2(), items: Y2(), maximum: Ia(), minimum: Ia(), maxItems: Ca(), minItems: Ca(), maxLength: Na(), minLength: Na(), maxProperties: Ta(), minProperties: Ta(), multipleOf: X2(), not: _2(), oneOf: ec(), pattern: xc(), properties: tc(), propertyNames: rc(), required: ac(), uniqueItems: sc(), validate: ln() }), Ct;
}
var Ft, Ua;
function ic() {
  var i = s;
  if (Ua) return Ft;
  Ua = 1;
  var x = nc(), t = We()[i(781)];
  return Ft = function() {
    var e = i, r = [{ type: e(1829), rules: [{ maximum: [e(984)] }, { minimum: [e(1120)] }, "multipleOf", e(1678)] }, { type: e(389), rules: [e(520), "minLength", e(235), e(1678)] }, { type: e(791), rules: ["maxItems", "minItems", "items", e(599), "uniqueItems"] }, { type: e(865), rules: ["maxProperties", e(935), e(740), e(1050), e(2415), { properties: [e(1612), e(1998)] }] }, { rules: ["$ref", e(596), e(2470), "not", "anyOf", "oneOf", e(610), "if"] }], n = ["type", e(1486)], o = [e(2480), e(821), "id", e(1517), e(1333), e(2247), "description", e(2454), "definitions", e(295), "readOnly", "writeOnly", "contentMediaType", e(2130), e(1046), e(1934), "else"], c = [e(1829), e(2472), e(389), e(791), e(865), e(325), "null"];
    return r[e(1946)] = t(n), r[e(1143)] = t(c), r[e(1353)](function(u) {
      var d = e;
      u[d(1642)] = u[d(1642)][d(1825)](function(f) {
        var l = d, v;
        if (typeof f == "object") {
          var h = Object[l(2411)](f)[0];
          v = f[h], f = h, v[l(1353)](function(g) {
            var w = l;
            n[w(1472)](g), r[w(1946)][g] = !0;
          });
        }
        n.push(f);
        var p = r[l(1946)][f] = { keyword: f, code: x[f], implements: v };
        return p;
      }), r[d(1946)][d(1486)] = { keyword: d(1486), code: x.$comment }, u[d(399)] && (r.types[u[d(399)]] = u);
    }), r[e(460)] = t(n[e(393)](o)), r[e(592)] = {}, r;
  }, Ft;
}
var Nt, Va;
function oc() {
  var i = s;
  if (Va) return Nt;
  Va = 1;
  var x = [i(2074), i(1932), i(984), i(621), i(1120), i(520), i(1537), "pattern", i(1046), i(588), "minItems", "uniqueItems", i(1764), i(935), i(740), i(1612), i(2470), i(1678), i(596)];
  return Nt = function(t, a) {
    for (var e = i, r = 0; r < a[e(1001)]; r++) {
      t = JSON[e(1674)](JSON.stringify(t));
      var n = a[r][e(1464)]("/"), o = t, c;
      for (c = 1; c < n.length; c++) o = o[n[c]];
      for (c = 0; c < x.length; c++) {
        var u = x[c], d = o[u];
        d && (o[u] = { anyOf: [d, { $ref: e(1501) }] });
      }
    }
    return t;
  }, Nt;
}
var qt, Wa;
function cc() {
  var i = s;
  if (Wa) return qt;
  Wa = 1;
  var x = ur()[i(326)];
  qt = t;
  function t(a, e, r) {
    var n = i, o = this;
    if (typeof this[n(1755)][n(639)] != "function") throw new Error(n(2189));
    typeof e == n(834) && (r = e, e = void 0);
    var c = u(a)[n(1934)](function() {
      var f = n, l = o[f(1778)](a, void 0, e);
      return l[f(1768)] || d(l);
    });
    return r && c[n(1934)](function(f) {
      r(null, f);
    }, r), c;
    function u(f) {
      var l = n, v = f[l(2480)];
      return v && !o[l(827)](v) ? t[l(801)](o, { $ref: v }, !0) : Promise[l(695)]();
    }
    function d(f) {
      var l = n;
      try {
        return o[l(351)](f);
      } catch (h) {
        if (h instanceof x) return v(h);
        throw h;
      }
      function v(h) {
        var p = l, g = h.missingSchema;
        if (F(g)) throw new Error("Schema " + g + " is loaded but " + h[p(2153)] + p(1811));
        var w = o[p(2085)][g];
        return !w && (w = o[p(2085)][g] = o._opts.loadSchema(g), w[p(1934)](P, P)), w[p(1934)](function(O) {
          var R = p;
          if (!F(g)) return u(O)[R(1934)](function() {
            var E = R;
            F(g) || o[E(2062)](O, g, void 0, e);
          });
        })[p(1934)](function() {
          return d(f);
        });
        function P() {
          delete o._loadingSchemas[g];
        }
        function F(O) {
          var R = p;
          return o[R(1672)][O] || o._schemas[O];
        }
      }
    }
  }
  return qt;
}
var Tt, Za;
function uc() {
  return Za || (Za = 1, Tt = function(x, t, a) {
    var e = B, r = " ", n = x[e(1068)], o = x[e(1628)], c = x[e(870)][t], u = x[e(2174)] + x[e(288)][e(1034)](t), d = x[e(1110)] + "/" + t, f = !x[e(1266)][e(313)], l, v = e(1512) + (o || ""), h = e(1467) + n, p = e(1969) + n, g = x[e(1266)][e(1517)] && c && c[e(1517)], w;
    g ? (r += " var schema" + n + e(528) + x[e(288)][e(274)](c[e(1517)], o, x.dataPathArr) + "; ", w = e(870) + n) : w = c;
    var P = this, F = e(154) + n, O = P.definition, R = "", E, C, D, j, M;
    if (g && O.$data) {
      M = "keywordValidate" + n;
      var q = O[e(1229)];
      r += " var " + F + e(1939) + t + e(1947) + M + e(528) + F + ".validate;";
    } else {
      if (j = x[e(1750)](P, c, x[e(870)], x), !j) return;
      w = e(1711) + u, M = j[e(1993)], E = O[e(280)], C = O[e(898)], D = O[e(1280)];
    }
    var N = M + e(1915), $ = "i" + n, H = e(2197) + n, V = O[e(1494)];
    if (V && !x[e(1494)]) throw new Error("async keyword in sync schema");
    if (!(C || D) && (r += "" + N + e(410)), r += e(1480) + p + e(1365) + h + ";", g && O[e(1517)] && (R += "}", r += e(2433) + w + " === undefined) { " + h + e(1857), q && (R += "}", r += " " + h + e(528) + F + e(1279) + w + "); if (" + h + e(1196))), C) O[e(301)] ? r += " " + j[e(1768)] + " " : r += " " + h + " = " + j[e(1768)] + "; ";
    else if (D) {
      var J = x.util[e(771)](x), R = "";
      J[e(1068)]++;
      var c0 = e(1467) + J[e(1068)];
      J.schema = j.validate, J[e(2174)] = "";
      var u0 = x[e(252)];
      x[e(252)] = J[e(252)] = !0;
      var l0 = x.validate(J).replace(/validate\.schema/g, M);
      x[e(252)] = J[e(252)] = u0, r += " " + l0;
    } else {
      var i0 = i0 || [];
      i0[e(1472)](r), r = "", r += "  " + M + ".call( ", x[e(1266)][e(1449)] ? r += e(2450) : r += "self", E || O[e(870)] === !1 ? r += e(1584) + v + " " : r += e(1584) + w + e(1584) + v + e(717) + x[e(2174)] + " ", r += e(1948), x[e(757)] != '""' && (r += " + " + x[e(757)]);
      var f0 = o ? e(1512) + (o - 1 || "") : e(217), S0 = o ? x[e(189)][o] : e(1293);
      r += e(1584) + f0 + e(1584) + S0 + e(1265);
      var b0 = r;
      r = i0[e(876)](), O[e(2244)] === !1 ? (r += " " + h + e(528), V && (r += e(2468)), r += "" + b0 + "; ") : V ? (N = "customErrors" + n, r += e(2026) + N + " = null; try { " + h + e(2233) + b0 + e(119) + h + e(201) + N + e(693)) : r += " " + N + e(1679) + h + e(528) + b0 + "; ";
    }
    if (O[e(1060)] && (r += e(2433) + f0 + ") " + v + " = " + f0 + "[" + S0 + "];"), r += "" + R, O[e(1467)]) f && (r += e(731));
    else {
      r += e(1530), O[e(1467)] === void 0 ? (r += " !", D ? r += "" + c0 : r += "" + h) : r += " " + !O[e(1467)] + " ", r += e(1196), l = P.keyword;
      var i0 = i0 || [];
      i0[e(1472)](r), r = "";
      var i0 = i0 || [];
      i0[e(1472)](r), r = "", x[e(764)] !== !1 ? (r += e(1754) + (l || "custom") + e(1859) + x.errorPath + e(2033) + x[e(288)][e(990)](d) + e(2451) + P[e(1411)] + e(900), x.opts.messages !== !1 && (r += e(1306) + P[e(1411)] + e(1804)), x[e(1266)][e(2439)] && (r += e(109) + u + e(2452) + x.schemaPath + e(2020) + v + " "), r += " } ") : r += " {} ";
      var M0 = r;
      r = i0[e(876)](), !x.compositeRule && f ? x.async ? r += e(1775) + M0 + e(784) : r += e(1801) + M0 + "]; return false; " : r += e(1623) + M0 + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      var k0 = r;
      r = i0[e(876)](), C ? O.errors ? O[e(2244)] != "full" && (r += e(2477) + $ + "=" + p + "; " + $ + e(2307) + $ + e(1689) + H + e(1270) + $ + "]; if (" + H + e(809) + H + e(511) + x[e(757)] + e(2298) + H + e(1970) + H + e(2199) + d + e(925), x[e(1266)][e(2439)] && (r += " " + H + e(372) + w + "; " + H + ".data = " + v + "; "), r += e(922)) : O.errors === !1 ? r += " " + k0 + " " : (r += e(2433) + p + e(1267) + k0 + e(483) + $ + "=" + p + "; " + $ + e(2307) + $ + e(1689) + H + e(1270) + $ + e(1153) + H + e(809) + H + e(511) + x[e(757)] + "; if (" + H + e(1970) + H + e(2199) + d + e(925), x[e(1266)][e(2439)] && (r += " " + H + e(372) + w + "; " + H + ".data = " + v + "; "), r += " } } ") : D ? (r += e(1813), x.createErrors !== !1 ? (r += e(1754) + (l || "custom") + e(1859) + x[e(757)] + e(2033) + x[e(288)][e(990)](d) + e(2451) + P.keyword + e(900), x[e(1266)][e(535)] !== !1 && (r += e(1306) + P[e(1411)] + e(1804)), x[e(1266)].verbose && (r += e(109) + u + e(2452) + x[e(2174)] + e(2020) + v + " "), r += e(922)) : r += e(1066), r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(252)] && f && (x[e(1494)] ? r += e(143) : r += e(2201))) : O[e(2244)] === !1 ? r += " " + k0 + " " : (r += " if (Array.isArray(" + N + e(1680) + N + "; else vErrors = vErrors.concat(" + N + e(1148) + $ + "=" + p + "; " + $ + e(2307) + $ + e(1689) + H + e(1270) + $ + e(1153) + H + e(809) + H + ".dataPath = (dataPath || '') + " + x[e(757)] + ";  " + H + e(2199) + d + e(1252), x[e(1266)][e(2439)] && (r += " " + H + e(372) + w + "; " + H + e(2353) + v + "; "), r += e(2420) + k0 + e(922)), r += " } ", f && (r += " else { ");
    }
    return r;
  }), Tt;
}
const dc = s(1075), fc = s(1075), lc = s(1031), hc = { schemaArray: { type: s(791), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: s(2472), minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: s(1398) }, { default: 0 }] }, simpleTypes: { enum: [s(791), s(325), s(2472), "null", s(1829), "object", s(389)] }, stringArray: { type: s(791), items: { type: s(389) }, uniqueItems: !0, default: [] } }, pc = [s(865), "boolean"], mc = { $id: { type: s(389), format: "uri-reference" }, $schema: { type: s(389), format: "uri" }, $ref: { type: s(389), format: "uri-reference" }, $comment: { type: s(389) }, title: { type: s(389) }, description: { type: "string" }, default: !0, readOnly: { type: s(325), default: !1 }, examples: { type: s(791), items: !0 }, multipleOf: { type: s(1829), exclusiveMinimum: 0 }, maximum: { type: s(1829) }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: s(1398) }, minLength: { $ref: s(108) }, pattern: { type: s(389), format: s(1516) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: s(329) }], default: !0 }, maxItems: { $ref: s(1398) }, minItems: { $ref: s(108) }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: s(1398) }, minProperties: { $ref: s(108) }, required: { $ref: s(745) }, additionalProperties: { $ref: "#" }, definitions: { type: s(865), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: s(865), additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: s(865), additionalProperties: { $ref: "#" }, propertyNames: { format: s(1516) }, default: {} }, dependencies: { type: s(865), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: s(791), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: s(1496) }, { type: s(791), items: { $ref: s(1496) }, minItems: 1, uniqueItems: !0 }] }, format: { type: s(389) }, contentMediaType: { type: s(389) }, contentEncoding: { type: s(389) }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: s(329) }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, hn = { $schema: dc, $id: fc, title: lc, definitions: hc, type: pc, properties: mc, default: !0 };
var Ot, Ba;
function vc() {
  var i = s;
  if (Ba) return Ot;
  Ba = 1;
  var x = hn;
  return Ot = { $id: i(620), definitions: { simpleTypes: x[i(732)][i(555)] }, type: i(865), dependencies: { schema: [i(1768)], $data: [i(1768)], statements: [i(898)], valid: { not: { required: ["macro"] } } }, properties: { type: x[i(1140)][i(399)], schema: { type: i(325) }, statements: { type: i(325) }, dependencies: { type: i(791), items: { type: i(389) } }, metaSchema: { type: i(865) }, modifying: { type: "boolean" }, valid: { type: i(325) }, $data: { type: i(325) }, async: { type: i(325) }, errors: { anyOf: [{ type: i(325) }, { const: "full" }] } } }, Ot;
}
var At, Ka;
function gc() {
  if (Ka) return At;
  Ka = 1;
  var i = /^[a-z_$][a-z0-9_$-]*$/i, x = uc(), t = vc();
  At = { add: a, get: e, remove: r, validate: n };
  function a(o, c) {
    var u = B, d = this[u(1187)];
    if (d[u(460)][o]) throw new Error("Keyword " + o + u(1880));
    if (!i[u(2105)](o)) throw new Error(u(2168) + o + u(2048));
    if (c) {
      this[u(797)](c, !0);
      var f = c[u(399)];
      if (Array[u(2305)](f))
        for (var l = 0; l < f.length; l++) h(o, f[l], c);
      else h(o, f, c);
      var v = c[u(1399)];
      v && (c[u(1517)] && this._opts[u(1517)] && (v = { anyOf: [v, { $ref: u(1501) }] }), c[u(1229)] = this[u(280)](v, !0));
    }
    d[u(460)][o] = d[u(1946)][o] = !0;
    function h(p, g, w) {
      for (var P = u, F, O = 0; O < d[P(1001)]; O++) {
        var R = d[O];
        if (R[P(399)] == g) {
          F = R;
          break;
        }
      }
      !F && (F = { type: g, rules: [] }, d[P(1472)](F));
      var E = { keyword: p, definition: w, custom: !0, code: x, implements: w.implements };
      F.rules.push(E), d[P(592)][p] = E;
    }
    return this;
  }
  function e(o) {
    var c = B, u = this[c(1187)][c(592)][o];
    return u ? u[c(154)] : this[c(1187)][c(460)][o] || !1;
  }
  function r(o) {
    var c = B, u = this[c(1187)];
    delete u[c(460)][o], delete u[c(1946)][o], delete u.custom[o];
    for (var d = 0; d < u[c(1001)]; d++)
      for (var f = u[d][c(1642)], l = 0; l < f[c(1001)]; l++)
        if (f[l].keyword == o) {
          f.splice(l, 1);
          break;
        }
    return this;
  }
  function n(o, c) {
    var u = B;
    n[u(2244)] = null;
    var d = this[u(1823)] = this[u(1823)] || this.compile(t, !0);
    if (d(o)) return !0;
    if (n[u(2244)] = d[u(2244)], c) throw new Error(u(1681) + this[u(2166)](d[u(2244)]));
    return !1;
  }
  return At;
}
const yc = s(1075), bc = s(1501), wc = s(1004), Sc = s(865), kc = ["$data"], Pc = { $data: { type: s(389), anyOf: [{ format: s(1792) }, { format: s(283) }] } }, Ec = !1, Ic = { $schema: yc, $id: bc, description: wc, type: Sc, required: kc, properties: Pc, additionalProperties: Ec };
var Dt, Ja;
function Rc() {
  var i = s;
  if (Ja) return Dt;
  Ja = 1;
  var x = L2(), t = cr(), a = $2(), e = dn(), r = fn(), n = z2(), o = ic(), c = oc(), u = We();
  Dt = p, p[i(2123)][i(1768)] = g, p.prototype[i(280)] = w, p[i(2123)][i(2062)] = P, p[i(2123)][i(2117)] = F, p[i(2123)][i(1229)] = O, p[i(2123)][i(827)] = E, p[i(2123)][i(1243)] = j, p[i(2123)][i(828)] = u0, p.prototype[i(2166)] = c0, p[i(2123)]._addSchema = q, p[i(2123)][i(351)] = N, p[i(2123)][i(2294)] = cc();
  var d = gc();
  p[i(2123)][i(783)] = d.add, p[i(2123)][i(1733)] = d[i(1195)], p[i(2123)].removeKeyword = d[i(2258)], p[i(2123)][i(797)] = d[i(1768)];
  var f = ur();
  p[i(2436)] = f[i(1210)], p[i(1950)] = f.MissingRef, p.$dataMetaSchema = c;
  var l = i(657), v = [i(198), i(2013), "coerceTypes", i(1383)], h = [i(349)];
  function p(A) {
    var T = i;
    if (!(this instanceof p)) return new p(A);
    A = this[T(1755)] = u[T(771)](A) || {}, k0(this), this._schemas = {}, this[T(1672)] = {}, this[T(1586)] = {}, this._formats = n(A[T(1678)]), this[T(2188)] = A[T(951)] || new a(), this[T(2085)] = {}, this[T(973)] = [], this.RULES = o(), this._getId = $(A), A[T(810)] = A[T(810)] || 1 / 0, A[T(1533)] == "property" && (A[T(1578)] = !0), A[T(1992)] === void 0 && (A[T(1992)] = r), this[T(1557)] = M0(this), A[T(704)] && f0(this), A[T(460)] && S0(this), l0(this), typeof A[T(1374)] == T(865) && this[T(2117)](A[T(1374)]), A[T(1387)] && this.addKeyword(T(1387), { metaSchema: { type: T(325) } }), i0(this);
  }
  function g(A, T) {
    var z = i, G;
    if (typeof A == "string") {
      if (G = this[z(827)](A), !G) throw new Error(z(2068) + A + '"');
    } else {
      var X = this._addSchema(A);
      G = X[z(1768)] || this[z(351)](X);
    }
    var W = G(T);
    return G.$async !== !0 && (this[z(2244)] = G[z(2244)]), W;
  }
  function w(A, T) {
    var z = i, G = this[z(1778)](A, void 0, T);
    return G[z(1768)] || this._compile(G);
  }
  function P(A, T, z, G) {
    var X = i;
    if (Array.isArray(A)) {
      for (var W = 0; W < A[X(1001)]; W++) this.addSchema(A[W], void 0, z, G);
      return this;
    }
    var Y = this[X(344)](A);
    if (Y !== void 0 && typeof Y != X(389)) throw new Error(X(1991));
    return T = t[X(1095)](T || Y), b0(this, T), this[X(598)][T] = this[X(1778)](A, z, G, !0), this;
  }
  function F(A, T, z) {
    var G = i;
    return this[G(2062)](A, T, z, !0), this;
  }
  function O(A, T) {
    var z = i, G = A[z(2480)];
    if (G !== void 0 && typeof G != z(389)) throw new Error("$schema must be a string");
    if (G = G || this[z(1755)][z(1272)] || R(this), !G) return this[z(2218)][z(1348)]("meta-schema not available"), this.errors = null, !0;
    var X = this.validate(G, A);
    if (!X && T) {
      var W = "schema is invalid: " + this[z(2166)]();
      if (this._opts[z(1229)] == z(524)) this[z(2218)].error(W);
      else throw new Error(W);
    }
    return X;
  }
  function R(A) {
    var T = i, z = A[T(1755)][T(1374)];
    return A[T(1755)][T(1272)] = typeof z == T(865) ? A[T(344)](z) || z : A.getSchema(l) ? l : void 0, A[T(1755)][T(1272)];
  }
  function E(A) {
    var T = i, z = D(this, A);
    switch (typeof z) {
      case T(865):
        return z[T(1768)] || this[T(351)](z);
      case T(389):
        return this[T(827)](z);
      case T(2108):
        return C(this, A);
    }
  }
  function C(A, T) {
    var z = i, G = t[z(870)][z(801)](A, { schema: {} }, T);
    if (G) {
      var X = G[z(870)], W = G[z(1573)], Y = G[z(1014)], s0 = x[z(801)](A, X, W, void 0, Y);
      return A[z(1586)][T] = new e({ ref: T, fragment: !0, schema: X, root: W, baseId: Y, validate: s0 }), s0;
    }
  }
  function D(A, T) {
    var z = i;
    return T = t[z(1095)](T), A[z(598)][T] || A[z(1672)][T] || A[z(1586)][T];
  }
  function j(A) {
    var T = i;
    if (A instanceof RegExp) return M(this, this._schemas, A), M(this, this._refs, A), this;
    switch (typeof A) {
      case T(2108):
        return M(this, this._schemas), M(this, this[T(1672)]), this[T(2188)].clear(), this;
      case T(389):
        var z = D(this, A);
        return z && this[T(2188)].del(z[T(1868)]), delete this[T(598)][A], delete this[T(1672)][A], this;
      case T(865):
        var G = this[T(1755)][T(1992)], X = G ? G(A) : A;
        this[T(2188)][T(2179)](X);
        var W = this[T(344)](A);
        W && (W = t[T(1095)](W), delete this._schemas[W], delete this[T(1672)][W]);
    }
    return this;
  }
  function M(A, T, z) {
    var G = i;
    for (var X in T) {
      var W = T[X];
      !W[G(1374)] && (!z || z[G(2105)](X)) && (A[G(2188)].del(W[G(1868)]), delete T[X]);
    }
  }
  function q(A, T, z, G) {
    var X = i;
    if (typeof A != "object" && typeof A != "boolean") throw new Error(X(427));
    var W = this._opts[X(1992)], Y = W ? W(A) : A, s0 = this[X(2188)][X(1195)](Y);
    if (s0) return s0;
    G = G || this[X(1755)].addUsedSchema !== !1;
    var o0 = t.normalizeId(this._getId(A));
    o0 && G && b0(this, o0);
    var e0 = this._opts.validateSchema !== !1 && !T, L0;
    e0 && !(L0 = o0 && o0 == t[X(1095)](A[X(2480)])) && this[X(1229)](A, !0);
    var O0 = t.ids[X(801)](this, A), V0 = new e({ id: o0, schema: A, localRefs: O0, cacheKey: Y, meta: z });
    return o0[0] != "#" && G && (this[X(1672)][o0] = V0), this[X(2188)].put(Y, V0), e0 && L0 && this[X(1229)](A, !0), V0;
  }
  function N(A, T) {
    var z = i;
    if (A.compiling)
      return A[z(1768)] = W, W.schema = A[z(870)], W[z(2244)] = null, W[z(1573)] = T || W, A.schema[z(1333)] === !0 && (W.$async = !0), W;
    A[z(2200)] = !0;
    var G;
    A[z(1374)] && (G = this[z(1755)], this[z(1755)] = this[z(1557)]);
    var X;
    try {
      X = x[z(801)](this, A[z(870)], T, A[z(2186)]);
    } catch (Y) {
      throw delete A[z(1768)], Y;
    } finally {
      A.compiling = !1, A[z(1374)] && (this[z(1755)] = G);
    }
    return A.validate = X, A.refs = X[z(1694)], A[z(580)] = X[z(580)], A.root = X[z(1573)], X;
    function W() {
      var Y = z, s0 = A.validate, o0 = s0.apply(this, arguments);
      return W.errors = s0[Y(2244)], o0;
    }
  }
  function $(A) {
    var T = i;
    switch (A[T(673)]) {
      case T(1635):
        return J;
      case "id":
        return H;
      default:
        return V;
    }
  }
  function H(A) {
    var T = i;
    return A[T(821)] && this[T(2218)].warn(T(1677), A.$id), A.id;
  }
  function V(A) {
    var T = i;
    return A.id && this[T(2218)].warn(T(152), A.id), A[T(821)];
  }
  function J(A) {
    var T = i;
    if (A[T(821)] && A.id && A[T(821)] != A.id) throw new Error(T(895));
    return A.$id || A.id;
  }
  function c0(A, T) {
    var z = i;
    if (A = A || this.errors, !A) return "No errors";
    T = T || {};
    for (var G = T.separator === void 0 ? ", " : T[z(905)], X = T.dataVar === void 0 ? z(1512) : T[z(1560)], W = "", Y = 0; Y < A.length; Y++) {
      var s0 = A[Y];
      s0 && (W += X + s0[z(1470)] + " " + s0[z(456)] + G);
    }
    return W.slice(0, -G[z(1001)]);
  }
  function u0(A, T) {
    var z = i;
    return typeof T == z(389) && (T = new RegExp(T)), this._formats[A] = T, this;
  }
  function l0(A) {
    var T = i, z;
    if (A[T(1755)][T(1517)] && (z = Ic, A.addMetaSchema(z, z[T(821)], !0)), A[T(1755)].meta !== !1) {
      var G = hn;
      A[T(1755)][T(1517)] && (G = c(G, h)), A[T(2117)](G, l, !0), A._refs[T(2469)] = l;
    }
  }
  function i0(A) {
    var T = i, z = A[T(1755)][T(1359)];
    if (z)
      if (Array[T(2305)](z)) A[T(2062)](z);
      else
        for (var G in z) A[T(2062)](z[G], G);
  }
  function f0(A) {
    var T = i;
    for (var z in A._opts[T(704)]) {
      var G = A._opts.formats[z];
      A[T(828)](z, G);
    }
  }
  function S0(A) {
    var T = i;
    for (var z in A[T(1755)][T(460)]) {
      var G = A._opts.keywords[z];
      A[T(783)](z, G);
    }
  }
  function b0(A, T) {
    var z = i;
    if (A._schemas[T] || A[z(1672)][T]) throw new Error('schema with key or id "' + T + '" already exists');
  }
  function M0(A) {
    for (var T = i, z = u.copy(A[T(1755)]), G = 0; G < v[T(1001)]; G++) delete z[v[G]];
    return z;
  }
  function k0(A) {
    var T = i, z = A[T(1755)][T(2218)];
    if (z === !1) A[T(2218)] = { log: Q0, warn: Q0, error: Q0 };
    else {
      if (z === void 0 && (z = console), !(typeof z == "object" && z[T(524)] && z[T(1348)] && z.error)) throw new Error("logger must implement log, warn and error methods");
      A[T(2218)] = z;
    }
  }
  function Q0() {
  }
  return Dt;
}
var Cc = Rc();
const Fc = $s(Cc);
class Nc extends T2 {
  constructor(x, t) {
    var a = s, e;
    super(t), this[a(1716)] = x, this[a(2136)] = (e = t == null ? void 0 : t.capabilities) !== null && e !== void 0 ? e : {}, this[a(670)] = t == null ? void 0 : t[a(242)], this[a(190)](Xs, (r) => this[a(1883)](r)), this[a(700)](_s, () => {
      var r = a, n;
      return (n = this[r(839)]) === null || n === void 0 ? void 0 : n[r(801)](this);
    });
  }
  [s(840)](x) {
    var t = s;
    if (this[t(2315)]) throw new Error(t(1730));
    this[t(2136)] = O2(this._capabilities, x);
  }
  [s(1417)](x) {
    var t = s, a, e, r;
    switch (x) {
      case t(1116):
        if (!(!((a = this[t(959)]) === null || a === void 0) && a.sampling)) throw new Error(t(263) + x + ")");
        break;
      case t(395):
        if (!(!((e = this[t(959)]) === null || e === void 0) && e[t(1193)])) throw new Error("Client does not support elicitation (required for " + x + ")");
        break;
      case "roots/list":
        if (!(!((r = this[t(959)]) === null || r === void 0) && r[t(168)])) throw new Error(t(820) + x + ")");
        break;
    }
  }
  assertNotificationCapability(x) {
    var t = s;
    switch (x) {
      case "notifications/message":
        if (!this[t(2136)].logging) throw new Error(t(564) + x + ")");
        break;
      case "notifications/resources/updated":
      case t(1919):
        if (!this._capabilities[t(527)]) throw new Error(t(1215) + x + ")");
        break;
      case t(1008):
        if (!this[t(2136)].tools) throw new Error(t(1596) + x + ")");
        break;
      case t(871):
        if (!this[t(2136)][t(2416)]) throw new Error(t(490) + x + ")");
        break;
    }
  }
  [s(2202)](x) {
    var t = s;
    switch (x) {
      case t(1116):
        if (!this[t(2136)].sampling) throw new Error("Server does not support sampling (required for " + x + ")");
        break;
      case "logging/setLevel":
        if (!this._capabilities[t(179)]) throw new Error("Server does not support logging (required for " + x + ")");
        break;
      case t(2357):
      case t(591):
        if (!this[t(2136)][t(2416)]) throw new Error(t(443) + x + ")");
        break;
      case t(266):
      case t(818):
      case t(1526):
        if (!this[t(2136)][t(527)]) throw new Error(t(878) + x + ")");
        break;
      case "tools/call":
      case t(1850):
        if (!this[t(2136)].tools) throw new Error("Server does not support tools (required for " + x + ")");
        break;
    }
  }
  async [s(1883)](x) {
    var t = s;
    const a = x[t(1063)][t(581)];
    return this._clientCapabilities = x[t(1063)][t(2169)], this[t(2006)] = x[t(1063)][t(950)], { protocolVersion: No[t(1605)](a) ? a : Ws, capabilities: this.getCapabilities(), serverInfo: this[t(1716)], ...this[t(670)] && { instructions: this[t(670)] } };
  }
  [s(2476)]() {
    return this._clientCapabilities;
  }
  [s(726)]() {
    var x = s;
    return this[x(2006)];
  }
  [s(203)]() {
    var x = s;
    return this[x(2136)];
  }
  async [s(802)]() {
    var x = s;
    return this[x(2355)]({ method: x(802) }, Xt);
  }
  async createMessage(x, t) {
    var a = s;
    return this.request({ method: a(1116), params: x }, on, t);
  }
  async [s(2114)](x, t) {
    var a = s;
    const e = await this[a(2355)]({ method: a(395), params: x }, cn, t);
    if (e.action === a(1320) && e[a(1588)]) try {
      const r = new Fc(), n = r[a(280)](x.requestedSchema);
      if (!n(e[a(1588)])) throw new Te(ye.InvalidParams, a(1029) + r[a(2166)](n[a(2244)]));
    } catch (r) {
      throw r instanceof Te ? r : new Te(ye[a(2360)], "Error validating elicitation response: " + r);
    }
    return e;
  }
  async listRoots(x, t) {
    var a = s;
    return this[a(2355)]({ method: a(218), params: x }, un, t);
  }
  async [s(162)](x) {
    var t = s;
    return this[t(398)]({ method: t(118), params: x });
  }
  async [s(2413)](x) {
    var t = s;
    return this[t(398)]({ method: "notifications/resources/updated", params: x });
  }
  async [s(983)]() {
    var x = s;
    return this[x(398)]({ method: x(1919) });
  }
  async [s(1450)]() {
    var x = s;
    return this[x(398)]({ method: x(1008) });
  }
  async [s(1666)]() {
    var x = s;
    return this[x(398)]({ method: x(871) });
  }
}
class qc extends Error {
  constructor(x, t) {
    var a = s;
    super(a(1956) + x + a(1527) + t + "ms"), this.name = a(1277);
  }
}
const lx = /* @__PURE__ */ new Map();
class Tc {
  constructor(x) {
    var t = s;
    if (this.messageQueue = [], this[t(2327)] = Date[t(1340)](), lx[t(1489)](x.posterIdentifier)) {
      const a = lx.get(x[t(1448)]);
      a && a[t(618)]();
    }
    this[t(1448)] = x[t(1448)], this[t(1223)] = x[t(1223)], this[t(734)] = x[t(734)], this.removeMessageEventListener = x[t(2171)], this[t(1918)] = x[t(1918)] ?? 5e3, this.heartbeatTimeout = x[t(1231)] ?? 5e3, this[t(1040)] = x[t(1040)] ?? !1, lx[t(765)](this[t(1448)], this), this[t(208)] = this[t(208)][t(2057)](this), this[t(138)] = this.addMessageEventListener(this[t(208)]);
  }
  [s(208)](x) {
    var t = s;
    if (x[t(1448)] === this[t(1448)]) {
      if (x[t(866)] === "sdppp-heartbeat") {
        x[t(399)] === "ping" && !this[t(1040)] ? this[t(1223)]({ channel: t(2125), posterIdentifier: this[t(1448)], type: t(2126), timestamp: x.timestamp }) : x.type === t(2126) && (this.lastPongReceived = Date[t(1340)](), this[t(1305)] && (clearTimeout(this.heartbeatTimeoutTimer), this[t(1305)] = void 0));
        return;
      }
      x[t(866)] === "sdppp" && (this[t(1618)] && t(1301) in x ? this.onmessage(x.payload) : t(1301) in x && this.messageQueue[t(1472)](x.payload));
    }
  }
  async [s(1216)]() {
    for (var x = s; this.messageQueue[x(1001)] > 0; ) {
      const t = this[x(2265)].shift();
      t && this[x(1618)] && this.onmessage(t);
    }
    this[x(1065)]();
  }
  startHeartbeat() {
    var x = s;
    this[x(1988)] = setInterval(() => {
      var t = x;
      const a = Date[t(1340)]();
      this.messagePoster({ channel: t(2125), posterIdentifier: this[t(1448)], type: t(802), timestamp: a }), this[t(1305)] = setTimeout(() => {
        var e = t;
        const r = new qc(this.posterIdentifier, this[e(1231)]);
        this.onerror && this.onerror(r);
      }, this.heartbeatTimeout);
    }, this[x(1918)]);
  }
  async [s(1888)](x, t) {
    var a = s;
    this[a(1223)]({ channel: a(202), posterIdentifier: this[a(1448)], payload: x });
  }
  async [s(618)]() {
    var x = s;
    this[x(1988)] && (clearInterval(this.heartbeatTimer), this[x(1988)] = void 0), this[x(1305)] && (clearTimeout(this.heartbeatTimeoutTimer), this.heartbeatTimeoutTimer = void 0), lx.delete(this[x(1448)]), this[x(2171)](this.externalListenMessageCallback);
  }
}
const Oc = qx.extend(s(729));
async function pn() {
  var i = s;
  if (!window.uxpHost) return;
  const x = new Tc({ posterIdentifier: "comfy-uxp", messagePoster: (e) => {
    var r = B;
    window.uxpHost[r(1430)](e, "*");
  }, addMessageEventListener: (e) => {
    var r = B;
    const n = (o) => {
      var c = B;
      e(o[c(1512)]);
    };
    return window[r(867)](r(456), n), n;
  }, removeMessageEventListener: (e) => {
    var r = B;
    window.removeEventListener(r(456), e);
  } });
  x[i(2299)] = (e) => {
    var r = i;
    Oc(r(246), e);
  };
  const t = new Nc({ name: i(440), version: i(145) }, {}), a = new gi(t);
  return await a.connect(x), window[i(980)][i(1430)]({ channel: "mcp-mesh-router", meshName: i(304), action: i(1166) }, "*"), await C0.connect(i(853), a);
}
const Ac = Object[s(1104)](Object.defineProperty({ __proto__: null, connectUXP: pn, mcpMesh: C0 }, Symbol[s(780)], { value: s(184) }));
Oe[s(867)]("graphChanged", (i) => {
  var x = s;
  const t = T0[x(1986)] || T0[x(316)].workflow, a = t[x(2143)];
  if (i[x(1866)].id !== a[x(2383)].id) return;
  const e = C0[x(1639)][x(1237)]()[x(1582)], r = Qt(T0[x(1707)], a);
  vn(r, e) && C0[x(1639)].setState({ widgetableStructure: r }), C0[x(1639)][x(795)]({ widgetableValues: Cx(T0[x(1707)]) });
}), Oe[s(867)]("executed", () => {
  var i = s;
  C0[i(1639)][i(795)]({ widgetableValues: Cx(T0[i(1707)]) });
});
let Ga = 0, Qa = !0, Ya = "";
function mn() {
  var i = s;
  requestAnimationFrame(mn);
  const x = T0[i(1986)] || T0.extensionManager[i(1892)], t = x[i(2143)], a = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[i(1048)]) || "", r = (t == null ? void 0 : t[i(1957)]) || !0;
  if (a === Ga && e === Ya && r === Qa) return;
  Ga = a, Ya = e, Qa = r;
  const n = Qt(T0.graph, t), o = Cx(T0.graph);
  C0[i(1639)].setState({ widgetableStructure: n, widgetableValues: o }), setTimeout(() => {
    var c = i;
    if (t !== x[c(2143)]) return;
    const u = Qt(T0.graph, t), d = Cx(T0[c(1707)]);
    vn(u, n) && C0.store[c(795)]({ widgetableStructure: u }), C0.store.setState({ widgetableValues: d });
  }, 800);
}
requestAnimationFrame(mn);
function vn(i, x) {
  var t = s;
  return i[t(406)][t(1001)] !== x[t(406)][t(1001)] || JSON.stringify(i[t(406)]) !== JSON.stringify(x.nodeIndexes) || JSON[t(1581)](i[t(653)]) !== JSON[t(1581)](x.nodes);
}
let Xa = !1;
async function Dc() {
  var i = s;
  if (Xa) return Promise[i(695)]();
  Oe[i(2280)] && C0.store.setState({ comfyUserToken: Oe[i(2280)] }), Xa = !0;
}
qx[s(1224)](s(362));
async function jc(i, x, t) {
  var a = s;
  x.addEventListener("progress", ({ detail: n }) => {
    var o = B;
    if (!n) return;
    let c = 0, u = 0;
    !isNaN(n.value / n[o(1468)]) && (c = Math[o(2346)](n[o(226)] / n[o(1468)] * 100));
    const d = n[o(2312)], f = graph.nodes.find((l) => l.id == d);
    if (f && f.order) {
      const l = 100 / graph[o(653)][o(1001)];
      u = Math[o(2346)](f.order * l) + (c ? c / 100 * l : 0);
    }
    C0[o(1639)][o(795)]({ progress: c, graphProgress: u });
  }), x[a(867)]("status", (n) => {
    var c;
    var o = a;
    (c = n[o(1866)]) != null && c[o(671)] && C0.store[o(795)]({ queueSize: n.detail[o(671)][o(2069)] });
  }), x[a(867)](a(2111), ({ detail: n }) => {
    var o = a;
    if (C0[o(1639)][o(795)]({ executingNodeTitle: "", executingNodeID: "", lastError: n[o(918)] }), n[o(232)]) {
      const c = i[o(1707)][o(653)][o(305)]((u) => u.id == n[o(232)]);
      C0[o(1639)][o(795)]({ widgetableErrors: { [n[o(232)]]: "[" + ((c == null ? void 0 : c[o(2247)]) || n[o(232)]) + "]" + n[o(918)] } });
    }
  }), x[a(867)](a(2073), (n) => {
    var o = a;
    const c = n[o(1866)], u = graph.nodes[o(305)]((d) => d.id == c);
    if (u) {
      const d = 100 / graph.nodes[o(1001)];
      C0.store[o(795)]({ executingNodeTitle: u.title, executingNodeID: u.id, graphProgress: Math[o(2346)](u[o(1368)] * d) });
    }
  }), x[a(867)](a(631), () => {
    var n = a;
    C0[n(1639)][n(795)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x.addEventListener(a(2458), ({ detail: n }) => {
    var o = a;
    C0[o(1639)].setState({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date[o(1340)]() });
  });
  const e = /* @__PURE__ */ new Map();
  x[a(867)](a(724), (n) => {
    var o = a;
    C0[o(1639)][o(795)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e.get(n[o(1866)][o(2167)]) || [])[o(1825)]((u) => ({ url: u, thumbnail: u }));
    Fo(n[o(1866)].prompt_id, c), e[o(2456)](n[o(1866)][o(2167)]);
  }), x[a(867)]("executed", (n) => {
    var o = a;
    const c = e[o(1195)](n[o(1866)][o(2167)]) || [];
    n[o(1866)].output && Array[o(2305)](n.detail[o(1621)][o(2129)]) && n.detail[o(1621)][o(2129)][o(1001)] > 0 && c[o(1472)](...n[o(1866)][o(1621)][o(2129)][o(830)]((u) => u[o(399)] == "output")[o(1825)]((u) => {
      var d = o;
      return location[d(1546)] + location[d(962)] + d(1812) + u[d(399)] + d(1834) + encodeURIComponent(u.filename) + (u[d(282)] ? d(1702) + encodeURIComponent(u.subfolder) : "");
    })), n[o(1866)][o(1621)] && Array[o(2305)](n[o(1866)][o(1621)][o(260)]) && n[o(1866)][o(1621)][o(260)][o(1001)] > 0 && c[o(1472)](...n.detail.output[o(260)][o(1825)]((u) => {
      var d = o;
      return location.origin + location.pathname + d(1690) + encodeURIComponent(u);
    })), e[o(765)](n[o(1866)][o(2167)], c);
  });
  let r = null;
  x[a(867)](a(1442), (n) => {
    r = setTimeout(() => {
      var o = B;
      C0[o(1639)][o(795)]({ comfyWSState: o(1442) });
    }, 1e3);
  }), x.addEventListener(a(1211), (n) => {
    C0.store.setState({ comfyWSState: "connected" }), clearTimeout(r);
  });
}
function B(i, x) {
  var t = Fx();
  return B = function(a, e) {
    a = a - 102;
    var r = t[a];
    return r;
  }, B(i, x);
}
let jt = [];
(async function() {
  var x, t, a, e, r, n;
  var i = s;
  if (typeof gradioApp == i(2108)) {
    try {
      const o = (t = (x = window[i(1186)]) == null ? void 0 : x[i(936)]) == null ? void 0 : t[i(936)], c = (e = (a = window[i(1186)]) == null ? void 0 : a.ui) == null ? void 0 : e[i(1627)], u = (n = (r = window[i(1186)]) == null ? void 0 : r[i(1510)]) == null ? void 0 : n[i(1510)];
      if (!o || !u || !c) throw new Error(i(1828));
      await Dc(), await pn(), await jc(o, u, c), import(i(1914)).then((d) => {
        d.default(_e, 2);
      });
    } catch (o) {
      jt[i(1472)](o[i(1571)] || o[i(456)] || o);
    }
    await new Promise((o) => setTimeout(o, 2e3)), jt[i(1001)] && console.error(jt[0]);
  }
})();
