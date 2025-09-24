var Tn = Object.defineProperty;
var On = (i, x, t) => x in i ? Tn(i, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[x] = t;
var v0 = (i, x, t) => On(i, typeof x != "symbol" ? x + "" : x, t);
var s = K;
(function(i, x) {
  for (var t = K, a = i(); ; )
    try {
      var e = parseInt(t(2525)) / 1 + -parseInt(t(353)) / 2 * (-parseInt(t(1942)) / 3) + parseInt(t(871)) / 4 + -parseInt(t(607)) / 5 * (parseInt(t(1602)) / 6) + parseInt(t(2435)) / 7 * (-parseInt(t(1909)) / 8) + -parseInt(t(1012)) / 9 * (parseInt(t(1971)) / 10) + parseInt(t(1271)) / 11;
      if (e === x) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Ix, 385169);
const q0 = window[s(1975)][s(939)][s(939)];
window[s(1975)].ui[s(2278)];
const Oe = window[s(1975)][s(1634)][s(1634)];
class An {
  constructor(x) {
    v0(this, "definition");
    var t = s;
    this.definition = x;
    const a = this[t(328)]();
    if (!a[t(2538)]) throw new Error(t(1491) + a.errors.join(", "));
  }
  [s(328)]() {
    var x = s;
    const t = [];
    (!this[x(2103)][x(719)] || Object.keys(this[x(2103)].nodes)[x(2021)] === 0) && t[x(2380)]("Graph must have at least one node");
    for (const [e, r] of this[x(2103)][x(1331)])
      !this.definition[x(719)][e] && t[x(2380)]("Edge references unknown source node: " + e), !this[x(2103)][x(719)][r] && t[x(2380)]("Edge references unknown target node: " + r);
    const a = this[x(852)]();
    return !a[x(2538)] && t[x(2380)](...a[x(1188)]), { valid: t[x(2021)] === 0, errors: t };
  }
  buildDirectedAdjacencyList() {
    var x = s;
    const t = /* @__PURE__ */ new Map();
    for (const a of Object[x(1040)](this[x(2103)][x(719)]))
      t.set(a, []);
    for (const [a, e] of this.definition[x(1331)]) {
      const r = t[x(2229)](a) || [];
      r[x(2380)](e), t.set(a, r);
    }
    return t;
  }
  [s(852)]() {
    var x = s;
    const t = [], a = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), r = this[x(2294)](), n = (o, c) => {
      var u = x;
      if (e.has(o)) {
        const f = c[u(831)](o), l = c[u(1813)](f)[u(1355)](o);
        return t.push("Cycle detected: " + l[u(2515)](" -> ")), !0;
      }
      if (a.has(o)) return !1;
      a[u(1342)](o), e.add(o);
      const d = r[u(2229)](o) || [];
      for (const f of d)
        if (n(f, [...c, o])) return !0;
      return e[u(2434)](o), !1;
    };
    for (const o of Object[x(1040)](this[x(2103)][x(719)]))
      !a.has(o) && n(o, []);
    return { valid: t[x(2021)] === 0, errors: t };
  }
  [s(2392)]() {
    var x = s;
    const t = /* @__PURE__ */ new Map();
    for (const a of Object[x(1040)](this[x(2103)][x(719)]))
      t[x(1951)](a, []);
    for (const [a, e] of this.definition.edges) {
      const r = t.get(a) || [];
      r.push(e), t[x(1951)](a, r);
      const n = t[x(2229)](e) || [];
      n[x(2380)](a), t.set(e, n);
    }
    return t;
  }
  getNeighbors(x) {
    var t = s;
    return this[t(2392)]()[t(2229)](x) || [];
  }
  getNode(x) {
    var t = s;
    return this[t(2103)].nodes[x];
  }
  [s(551)]() {
    var x = s;
    return Object[x(1040)](this[x(2103)][x(719)]);
  }
  hasEdge(x, t) {
    var a = s;
    return this.definition[a(1331)][a(1373)](([e, r]) => e === x && r === t || e === t && r === x);
  }
  [s(2505)](x, t) {
    var a = s;
    if (x === t) return [x];
    const e = this[a(2392)](), r = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; r[a(2021)] > 0; ) {
      const { nodeId: o, path: c } = r[a(761)]();
      if (n.has(o)) continue;
      if (n[a(1342)](o), o === t) return c;
      const u = e[a(2229)](o) || [];
      for (const d of u)
        !n.has(d) && r[a(2380)]({ nodeId: d, path: [...c, d] });
    }
    return null;
  }
  [s(2202)](x, t) {
    var a = s;
    return this[a(2505)](x, t) !== null;
  }
  [s(736)]() {
    var x = s;
    return { ...this[x(2103)] };
  }
}
const kr = (i) => {
  let x;
  const t = /* @__PURE__ */ new Set(), a = (u, d) => {
    var f = K;
    const l = typeof u == "function" ? u(x) : u;
    if (!Object.is(l, x)) {
      const v = x;
      x = d ?? (typeof l !== f(1923) || l === null) ? l : Object[f(740)]({}, x, l), t[f(1222)]((h) => h(x, v));
    }
  }, e = () => x, r = () => c, n = (u) => {
    var d = K;
    return t[d(1342)](u), () => t[d(2434)](u);
  }, o = { setState: a, getState: e, getInitialState: r, subscribe: n }, c = x = i(a, e, o);
  return o;
}, Dn = (i) => i ? kr(i) : kr;
var N0;
(function(i) {
  var x = s;
  i[x(1037)] = (r) => {
  };
  function t(r) {
  }
  i.assertIs = t;
  function a(r) {
    throw new Error();
  }
  i.assertNever = a, i.arrayToEnum = (r) => {
    const n = {};
    for (const o of r)
      n[o] = o;
    return n;
  }, i[x(2644)] = (r) => {
    var n = x;
    const o = i.objectKeys(r)[n(2397)]((u) => typeof r[r[u]] !== n(960)), c = {};
    for (const u of o)
      c[u] = r[u];
    return i[n(1322)](c);
  }, i.objectValues = (r) => {
    var n = x;
    return i[n(2574)](r)[n(632)](function(o) {
      return r[o];
    });
  }, i.objectKeys = typeof Object[x(1040)] === x(1853) ? (r) => Object.keys(r) : (r) => {
    var n = x;
    const o = [];
    for (const c in r)
      Object[n(2180)].hasOwnProperty[n(1547)](r, c) && o[n(2380)](c);
    return o;
  }, i[x(1666)] = (r, n) => {
    for (const o of r)
      if (n(o)) return o;
  }, i.isInteger = typeof Number[x(2309)] === x(1853) ? (r) => Number[x(2309)](r) : (r) => typeof r == "number" && Number.isFinite(r) && Math[x(937)](r) === r;
  function e(r, n = x(1001)) {
    var o = x;
    return r[o(632)]((c) => typeof c == "string" ? "'" + c + "'" : c)[o(2515)](n);
  }
  i.joinValues = e, i.jsonStringifyReplacer = (r, n) => {
    var o = x;
    return typeof n === o(356) ? n[o(1892)]() : n;
  };
})(N0 || (N0 = {}));
var Er;
(function(i) {
  var x = s;
  i[x(1195)] = (t, a) => ({ ...t, ...a });
})(Er || (Er = {}));
const e0 = N0[s(691)]([s(2348), s(1999), "number", "integer", s(1684), "boolean", "date", s(356), s(633), s(1853), s(1887), s(1382), s(1315), s(1923), s(2409), s(694), s(500), s(2109), s(632), s(1951)]), Ie = (i) => {
  var x = s;
  switch (typeof i) {
    case x(1887):
      return e0.undefined;
    case "string":
      return e0[x(2348)];
    case x(960):
      return Number[x(1230)](i) ? e0[x(1999)] : e0[x(960)];
    case x(2251):
      return e0[x(2251)];
    case x(1853):
      return e0[x(1853)];
    case x(356):
      return e0.bigint;
    case "symbol":
      return e0[x(633)];
    case x(1923):
      return Array.isArray(i) ? e0[x(1315)] : i === null ? e0.null : i[x(432)] && typeof i[x(432)] === x(1853) && i[x(947)] && typeof i[x(947)] === x(1853) ? e0[x(694)] : typeof Map !== x(1887) && i instanceof Map ? e0[x(632)] : typeof Set < "u" && i instanceof Set ? e0[x(1951)] : typeof Date !== x(1887) && i instanceof Date ? e0[x(1582)] : e0[x(1923)];
    default:
      return e0[x(2409)];
  }
}, B = N0.arrayToEnum([s(635), "invalid_literal", s(2290), s(1550), s(2450), s(401), s(1289), s(2579), s(1628), s(1225), s(1191), s(1287), "too_big", "invalid_intersection_types", s(590), s(1803)]);
class ke extends Error {
  get [s(1188)]() {
    return this.issues;
  }
  constructor(x) {
    var t = s;
    super(), this[t(1729)] = [], this[t(441)] = (e) => {
      var r = t;
      this.issues = [...this[r(1729)], e];
    }, this[t(1117)] = (e = []) => {
      var r = t;
      this[r(1729)] = [...this.issues, ...e];
    };
    const a = new.target.prototype;
    Object[t(714)] ? Object.setPrototypeOf(this, a) : this[t(1416)] = a, this[t(940)] = t(888), this[t(1729)] = x;
  }
  [s(2093)](x) {
    const t = x || function(r) {
      var n = K;
      return r[n(2089)];
    }, a = { _errors: [] }, e = (r) => {
      var n = K;
      for (const o of r[n(1729)])
        if (o[n(733)] === n(1550)) o.unionErrors[n(632)](e);
        else if (o[n(733)] === n(1628)) e(o[n(2113)]);
        else if (o.code === n(2579)) e(o[n(489)]);
        else if (o[n(1796)][n(2021)] === 0) a._errors[n(2380)](t(o));
        else {
          let c = a, u = 0;
          for (; u < o[n(1796)][n(2021)]; ) {
            const d = o[n(1796)][u];
            u === o[n(1796)][n(2021)] - 1 ? (c[d] = c[d] || { _errors: [] }, c[d][n(1130)].push(t(o))) : c[d] = c[d] || { _errors: [] }, c = c[d], u++;
          }
        }
    };
    return e(this), a;
  }
  static [s(860)](x) {
    var t = s;
    if (!(x instanceof ke)) throw new Error(t(1126) + x);
  }
  [s(1892)]() {
    var x = s;
    return this[x(2089)];
  }
  get [s(2089)]() {
    var x = s;
    return JSON[x(990)](this[x(1729)], N0[x(600)], 2);
  }
  get [s(758)]() {
    var x = s;
    return this[x(1729)][x(2021)] === 0;
  }
  [s(1996)](x = (t) => t[s(2089)]) {
    var t = s;
    const a = {}, e = [];
    for (const r of this[t(1729)])
      if (r[t(1796)].length > 0) {
        const n = r[t(1796)][0];
        a[n] = a[n] || [], a[n][t(2380)](x(r));
      } else e.push(x(r));
    return { formErrors: e, fieldErrors: a };
  }
  get formErrors() {
    var x = s;
    return this[x(1996)]();
  }
}
ke.create = (i) => new ke(i);
const Mt = (i, x) => {
  var t = s;
  let a;
  switch (i.code) {
    case B[t(635)]:
      i[t(656)] === e0[t(1887)] ? a = t(1068) : a = t(2301) + i[t(2599)] + t(707) + i[t(656)];
      break;
    case B.invalid_literal:
      a = "Invalid literal value, expected " + JSON.stringify(i[t(2599)], N0[t(600)]);
      break;
    case B[t(1289)]:
      a = t(1226) + N0[t(2111)](i[t(1040)], ", ");
      break;
    case B[t(1550)]:
      a = "Invalid input";
      break;
    case B[t(2450)]:
      a = t(750) + N0[t(2111)](i[t(778)]);
      break;
    case B.invalid_enum_value:
      a = t(1294) + N0[t(2111)](i[t(778)]) + t(1679) + i[t(656)] + "'";
      break;
    case B[t(2579)]:
      a = t(1347);
      break;
    case B[t(1628)]:
      a = t(2595);
      break;
    case B[t(1225)]:
      a = t(1288);
      break;
    case B[t(1191)]:
      typeof i.validation === t(1923) ? t(553) in i.validation ? (a = t(986) + i.validation.includes + '"', typeof i.validation[t(1670)] == "number" && (a = a + t(2356) + i[t(391)][t(1670)])) : t(467) in i[t(391)] ? a = t(1918) + i[t(391)][t(467)] + '"' : t(956) in i[t(391)] ? a = 'Invalid input: must end with "' + i.validation[t(956)] + '"' : N0[t(1397)](i[t(391)]) : i[t(391)] !== "regex" ? a = t(766) + i[t(391)] : a = t(1589);
      break;
    case B.too_small:
      i[t(338)] === t(1315) ? a = t(444) + (i[t(2295)] ? t(1102) : i.inclusive ? t(1216) : t(2475)) + " " + i.minimum + t(1560) : i[t(338)] === t(2348) ? a = "String must contain " + (i[t(2295)] ? t(1102) : i[t(1526)] ? t(1216) : t(995)) + " " + i[t(1848)] + " character(s)" : i[t(338)] === t(960) ? a = t(1391) + (i.exact ? t(1002) : i[t(1526)] ? t(912) : "greater than ") + i[t(1848)] : i[t(338)] === "bigint" ? a = t(1391) + (i.exact ? t(1002) : i.inclusive ? t(912) : t(301)) + i[t(1848)] : i[t(338)] === "date" ? a = t(2053) + (i.exact ? t(1002) : i[t(1526)] ? t(912) : t(301)) + new Date(Number(i[t(1848)])) : a = t(1506);
      break;
    case B.too_big:
      i[t(338)] === t(1315) ? a = t(444) + (i[t(2295)] ? "exactly" : i.inclusive ? t(1488) : t(445)) + " " + i[t(981)] + " element(s)" : i[t(338)] === t(2348) ? a = t(2607) + (i[t(2295)] ? t(1102) : i[t(1526)] ? t(1488) : t(1144)) + " " + i.maximum + t(1013) : i[t(338)] === "number" ? a = t(1391) + (i[t(2295)] ? t(1102) : i[t(1526)] ? t(2480) : t(445)) + " " + i[t(981)] : i[t(338)] === t(356) ? a = "BigInt must be " + (i.exact ? t(1102) : i[t(1526)] ? "less than or equal to" : t(445)) + " " + i.maximum : i[t(338)] === "date" ? a = "Date must be " + (i[t(2295)] ? "exactly" : i[t(1526)] ? "smaller than or equal to" : t(2167)) + " " + new Date(Number(i[t(981)])) : a = t(1506);
      break;
    case B[t(2290)]:
      a = "Invalid input";
      break;
    case B.invalid_intersection_types:
      a = t(1326);
      break;
    case B[t(590)]:
      a = t(1389) + i[t(2246)];
      break;
    case B[t(1803)]:
      a = "Number must be finite";
      break;
    default:
      a = x.defaultError, N0[t(1397)](i);
  }
  return { message: a };
};
let jn = Mt;
function Mn() {
  return jn;
}
const Ln = (i) => {
  var x = s;
  const { data: t, path: a, errorMaps: e, issueData: r } = i, n = [...a, ...r.path || []], o = { ...r, path: n };
  if (r[x(2089)] !== void 0) return { ...r, path: n, message: r[x(2089)] };
  let c = "";
  const u = e[x(2397)]((d) => !!d).slice()[x(1976)]();
  for (const d of u)
    c = d(o, { data: t, defaultError: c }).message;
  return { ...r, path: n, message: c };
};
function Y(i, x) {
  var t = s;
  const a = Mn(), e = Ln({ issueData: x, data: i[t(1073)], path: i[t(1796)], errorMaps: [i.common[t(2096)], i.schemaErrorMap, a, a === Mt ? void 0 : Mt][t(2397)]((r) => !!r) });
  i[t(975)].issues.push(e);
}
class ee {
  constructor() {
    this.value = "valid";
  }
  [s(1162)]() {
    var x = s;
    this[x(2038)] === "valid" && (this[x(2038)] = "dirty");
  }
  [s(1198)]() {
    var x = s;
    this[x(2038)] !== x(806) && (this[x(2038)] = "aborted");
  }
  static [s(2048)](x, t) {
    var a = s;
    const e = [];
    for (const r of t) {
      if (r[a(2296)] === "aborted") return h0;
      r[a(2296)] === a(1162) && x.dirty(), e[a(2380)](r[a(2038)]);
    }
    return { status: x.value, value: e };
  }
  static async [s(2665)](x, t) {
    var a = s;
    const e = [];
    for (const r of t) {
      const n = await r[a(1810)], o = await r.value;
      e.push({ key: n, value: o });
    }
    return ee[a(1058)](x, e);
  }
  static [s(1058)](x, t) {
    var a = s;
    const e = {};
    for (const r of t) {
      const { key: n, value: o } = r;
      if (n[a(2296)] === "aborted" || o[a(2296)] === a(806)) return h0;
      n[a(2296)] === a(1162) && x[a(1162)](), o[a(2296)] === a(1162) && x[a(1162)](), n[a(2038)] !== a(1416) && (typeof o.value < "u" || r[a(604)]) && (e[n[a(2038)]] = o[a(2038)]);
    }
    return { status: x.value, value: e };
  }
}
const h0 = Object[s(568)]({ status: s(806) }), Qe = (i) => ({ status: s(1162), value: i }), re = (i) => ({ status: s(2538), value: i }), Ir = (i) => i[s(2296)] === "aborted", Pr = (i) => i[s(2296)] === "dirty", Ve = (i) => i.status === s(2538), px = (i) => typeof Promise < "u" && i instanceof Promise;
var a0;
(function(i) {
  var x = s;
  i[x(2649)] = (t) => typeof t === x(2348) ? { message: t } : t || {}, i[x(1892)] = (t) => typeof t === x(2348) ? t : t == null ? void 0 : t[x(2089)];
})(a0 || (a0 = {}));
class me {
  constructor(x, t, a, e) {
    var r = s;
    this._cachedPath = [], this[r(2115)] = x, this[r(1073)] = t, this[r(2549)] = a, this._key = e;
  }
  get path() {
    var x = s;
    return !this._cachedPath.length && (Array[x(1435)](this[x(1089)]) ? this[x(1804)][x(2380)](...this[x(2549)], ...this[x(1089)]) : this._cachedPath[x(2380)](...this[x(2549)], this[x(1089)])), this[x(1804)];
  }
}
const Rr = (i, x) => {
  var t = s;
  if (Ve(x)) return { success: !0, data: x[t(2038)] };
  if (!i[t(975)][t(1729)][t(2021)]) throw new Error(t(1705));
  return { success: !1, get error() {
    var a = t;
    if (this._error) return this[a(1850)];
    const e = new ke(i[a(975)][a(1729)]);
    return this[a(1850)] = e, this[a(1850)];
  } };
};
function b0(i) {
  var x = s;
  if (!i) return {};
  const { errorMap: t, invalid_type_error: a, required_error: e, description: r } = i;
  if (t && (a || e)) throw new Error(x(1562));
  return t ? { errorMap: t, description: r } : { errorMap: (o, c) => {
    var u = x;
    const { message: d } = i;
    return o[u(733)] === u(401) ? { message: d ?? c.defaultError } : typeof c[u(1073)] > "u" ? { message: d ?? e ?? c[u(2234)] } : o[u(733)] !== u(635) ? { message: c[u(2234)] } : { message: d ?? a ?? c[u(2234)] };
  }, description: r };
}
class E0 {
  get [s(1941)]() {
    var x = s;
    return this[x(1821)][x(1941)];
  }
  [s(337)](x) {
    var t = s;
    return Ie(x[t(1073)]);
  }
  [s(2486)](x, t) {
    var a = s;
    return t || { common: x[a(2115)][a(975)], data: x[a(1073)], parsedType: Ie(x.data), schemaErrorMap: this[a(1821)][a(1788)], path: x[a(1796)], parent: x[a(2115)] };
  }
  [s(1408)](x) {
    var t = s;
    return { status: new ee(), ctx: { common: x[t(2115)].common, data: x[t(1073)], parsedType: Ie(x.data), schemaErrorMap: this[t(1821)][t(1788)], path: x[t(1796)], parent: x[t(2115)] } };
  }
  _parseSync(x) {
    var t = s;
    const a = this._parse(x);
    if (px(a)) throw new Error(t(1385));
    return a;
  }
  [s(2628)](x) {
    var t = s;
    const a = this[t(796)](x);
    return Promise[t(1890)](a);
  }
  [s(1325)](x, t) {
    var a = s;
    const e = this.safeParse(x, t);
    if (e[a(2624)]) return e[a(1073)];
    throw e[a(503)];
  }
  safeParse(x, t) {
    var a = s;
    const e = { common: { issues: [], async: (t == null ? void 0 : t[a(2572)]) ?? !1, contextualErrorMap: t == null ? void 0 : t[a(1788)] }, path: (t == null ? void 0 : t[a(1796)]) || [], schemaErrorMap: this[a(1821)][a(1788)], parent: null, data: x, parsedType: Ie(x) }, r = this[a(1252)]({ data: x, path: e.path, parent: e });
    return Rr(e, r);
  }
  [s(2527)](x) {
    var e, r;
    var t = s;
    const a = { common: { issues: [], async: !!this["~standard"][t(2572)] }, path: [], schemaErrorMap: this[t(1821)][t(1788)], parent: null, data: x, parsedType: Ie(x) };
    if (!this[t(1508)][t(2572)]) try {
      const n = this[t(1252)]({ data: x, path: [], parent: a });
      return Ve(n) ? { value: n.value } : { issues: a[t(975)][t(1729)] };
    } catch (n) {
      (r = (e = n == null ? void 0 : n[t(2089)]) == null ? void 0 : e[t(1991)]()) != null && r[t(553)](t(1727)) && (this[t(1508)][t(2572)] = !0), a[t(975)] = { issues: [], async: !0 };
    }
    return this[t(2628)]({ data: x, path: [], parent: a })[t(432)]((n) => Ve(n) ? { value: n[t(2038)] } : { issues: a.common[t(1729)] });
  }
  async [s(955)](x, t) {
    var a = s;
    const e = await this[a(2433)](x, t);
    if (e[a(2624)]) return e[a(1073)];
    throw e[a(503)];
  }
  async safeParseAsync(x, t) {
    var a = s;
    const e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t.errorMap, async: !0 }, path: (t == null ? void 0 : t[a(1796)]) || [], schemaErrorMap: this[a(1821)].errorMap, parent: null, data: x, parsedType: Ie(x) }, r = this[a(796)]({ data: x, path: e[a(1796)], parent: e }), n = await (px(r) ? r : Promise[a(1890)](r));
    return Rr(e, n);
  }
  refine(x, t) {
    var a = s;
    const e = (r) => {
      var n = K;
      return typeof t === n(2348) || typeof t === n(1887) ? { message: t } : typeof t === n(1853) ? t(r) : t;
    };
    return this[a(1072)]((r, n) => {
      var o = a;
      const c = x(r), u = () => n.addIssue({ code: B[o(2290)], ...e(r) });
      return typeof Promise !== o(1887) && c instanceof Promise ? c.then((d) => d ? !0 : (u(), !1)) : c ? !0 : (u(), !1);
    });
  }
  refinement(x, t) {
    var a = s;
    return this[a(1072)]((e, r) => {
      var n = a;
      return x(e) ? !0 : (r[n(441)](typeof t === n(1853) ? t(e, r) : t), !1);
    });
  }
  _refinement(x) {
    var t = s;
    return new qe({ schema: this, typeName: p0[t(1762)], effect: { type: t(623), refinement: x } });
  }
  [s(1947)](x) {
    var t = s;
    return this[t(1072)](x);
  }
  constructor(x) {
    var t = s;
    this[t(2652)] = this[t(2433)], this[t(1821)] = x, this[t(1325)] = this[t(1325)][t(1748)](this), this[t(915)] = this.safeParse[t(1748)](this), this[t(955)] = this.parseAsync[t(1748)](this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this[t(2652)][t(1748)](this), this[t(1734)] = this.refine[t(1748)](this), this[t(623)] = this.refinement[t(1748)](this), this[t(1947)] = this[t(1947)][t(1748)](this), this.optional = this[t(1285)][t(1748)](this), this[t(1977)] = this[t(1977)][t(1748)](this), this[t(2591)] = this[t(2591)][t(1748)](this), this[t(1315)] = this[t(1315)][t(1748)](this), this[t(694)] = this[t(694)][t(1748)](this), this.or = this.or.bind(this), this[t(1267)] = this[t(1267)][t(1748)](this), this.transform = this.transform[t(1748)](this), this[t(1852)] = this[t(1852)][t(1748)](this), this[t(2641)] = this[t(2641)][t(1748)](this), this.catch = this.catch[t(1748)](this), this[t(1205)] = this.describe[t(1748)](this), this.pipe = this.pipe[t(1748)](this), this[t(1207)] = this[t(1207)][t(1748)](this), this.isNullable = this[t(977)][t(1748)](this), this.isOptional = this[t(1520)][t(1748)](this), this["~standard"] = { version: 1, vendor: t(1690), validate: (a) => this["~validate"](a) };
  }
  [s(1285)]() {
    return Se.create(this, this._def);
  }
  [s(1977)]() {
    var x = s;
    return je[x(2196)](this, this[x(1821)]);
  }
  [s(2591)]() {
    var x = s;
    return this[x(1977)]()[x(1285)]();
  }
  array() {
    var x = s;
    return pe[x(2196)](this);
  }
  promise() {
    var x = s;
    return wx[x(2196)](this, this[x(1821)]);
  }
  or(x) {
    var t = s;
    return vx[t(2196)]([this, x], this[t(1821)]);
  }
  [s(1267)](x) {
    var t = s;
    return gx[t(2196)](this, x, this[t(1821)]);
  }
  transform(x) {
    var t = s;
    return new qe({ ...b0(this[t(1821)]), schema: this, typeName: p0[t(1762)], effect: { type: t(1009), transform: x } });
  }
  [s(2641)](x) {
    var t = s;
    const a = typeof x === t(1853) ? x : () => x;
    return new Sx({ ...b0(this[t(1821)]), innerType: this, defaultValue: a, typeName: p0[t(2520)] });
  }
  [s(1852)]() {
    var x = s;
    return new Ls({ typeName: p0[x(1442)], type: this, ...b0(this._def) });
  }
  [s(947)](x) {
    var t = s;
    const a = typeof x === t(1853) ? x : () => x;
    return new kx({ ...b0(this[t(1821)]), innerType: this, catchValue: a, typeName: p0.ZodCatch });
  }
  describe(x) {
    var t = s;
    const a = this[t(599)];
    return new a({ ...this[t(1821)], description: x });
  }
  [s(2207)](x) {
    var t = s;
    return rr[t(2196)](this, x);
  }
  [s(1207)]() {
    var x = s;
    return Ex[x(2196)](this);
  }
  [s(1520)]() {
    var x = s;
    return this.safeParse(void 0)[x(2624)];
  }
  [s(977)]() {
    var x = s;
    return this.safeParse(null)[x(2624)];
  }
}
const $n = /^c[^\s-]{8,}$/i, zn = /^[0-9a-z]+$/, Hn = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Un = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Vn = /^[a-z0-9_-]{21}$/i, Wn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Zn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Bn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Kn = s(2619);
let $x;
const Jn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Gn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Qn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Xn = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Yn = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, _n = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ds = s(1173), ei = new RegExp("^" + Ds + "$");
function js(i) {
  var x = s;
  let t = x(2344);
  i[x(1886)] ? t = t + x(1136) + i[x(1886)] + "}" : i.precision == null && (t = t + x(380));
  const a = i[x(1886)] ? "+" : "?";
  return x(674) + t + ")" + a;
}
function xi(i) {
  return new RegExp("^" + js(i) + "$");
}
function ti(i) {
  var x = s;
  let t = Ds + "T" + js(i);
  const a = [];
  return a[x(2380)](i[x(2645)] ? "Z?" : "Z"), i[x(1636)] && a.push(x(2315)), t = t + "(" + a[x(2515)]("|") + ")", new RegExp("^" + t + "$");
}
function ri(i, x) {
  var t = s;
  return !!((x === "v4" || !x) && Jn[t(856)](i) || (x === "v6" || !x) && Qn[t(856)](i));
}
function ai(i, x) {
  var t = s;
  if (!Wn[t(856)](i)) return !1;
  try {
    const [a] = i[t(2183)](".");
    if (!a) return !1;
    const e = a[t(2112)](/-/g, "+")[t(2112)](/_/g, "/")[t(1041)](a[t(2021)] + (4 - a[t(2021)] % 4) % 4, "="), r = JSON.parse(atob(e));
    return !(typeof r !== t(1923) || r === null || t(543) in r && (r == null ? void 0 : r[t(543)]) !== t(335) || !r[t(1036)] || x && r[t(1036)] !== x);
  } catch {
    return !1;
  }
}
function si(i, x) {
  var t = s;
  return !!((x === "v4" || !x) && Gn[t(856)](i) || (x === "v6" || !x) && Xn.test(i));
}
class we extends E0 {
  [s(796)](x) {
    var t = s;
    if (this._def[t(779)] && (x[t(1073)] = String(x.data)), this._getType(x) !== e0.string) {
      const n = this[t(2486)](x);
      return Y(n, { code: B[t(635)], expected: e0[t(2348)], received: n[t(2268)] }), h0;
    }
    const e = new ee();
    let r;
    for (const n of this[t(1821)][t(2055)])
      if (n[t(1495)] === t(1524)) x[t(1073)].length < n[t(2038)] && (r = this[t(2486)](x, r), Y(r, { code: B[t(1287)], minimum: n[t(2038)], type: t(2348), inclusive: !0, exact: !1, message: n[t(2089)] }), e.dirty());
      else if (n[t(1495)] === t(2537)) x.data.length > n.value && (r = this[t(2486)](x, r), Y(r, { code: B[t(718)], maximum: n.value, type: t(2348), inclusive: !0, exact: !1, message: n[t(2089)] }), e.dirty());
      else if (n[t(1495)] === "length") {
        const o = x[t(1073)].length > n[t(2038)], c = x[t(1073)][t(2021)] < n[t(2038)];
        (o || c) && (r = this._getOrReturnCtx(x, r), o ? Y(r, { code: B[t(718)], maximum: n[t(2038)], type: t(2348), inclusive: !0, exact: !0, message: n[t(2089)] }) : c && Y(r, { code: B[t(1287)], minimum: n[t(2038)], type: "string", inclusive: !0, exact: !0, message: n[t(2089)] }), e[t(1162)]());
      } else if (n[t(1495)] === t(2500)) !Bn[t(856)](x[t(1073)]) && (r = this[t(2486)](x, r), Y(r, { validation: t(2500), code: B.invalid_string, message: n[t(2089)] }), e[t(1162)]());
      else if (n.kind === t(1071)) !$x && ($x = new RegExp(Kn, "u")), !$x.test(x[t(1073)]) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: t(1071), code: B.invalid_string, message: n.message }), e[t(1162)]());
      else if (n[t(1495)] === t(616)) !Un[t(856)](x[t(1073)]) && (r = this[t(2486)](x, r), Y(r, { validation: t(616), code: B[t(1191)], message: n[t(2089)] }), e[t(1162)]());
      else if (n[t(1495)] === "nanoid") !Vn.test(x[t(1073)]) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: t(1008), code: B.invalid_string, message: n.message }), e[t(1162)]());
      else if (n[t(1495)] === "cuid") !$n[t(856)](x.data) && (r = this[t(2486)](x, r), Y(r, { validation: t(1926), code: B[t(1191)], message: n[t(2089)] }), e[t(1162)]());
      else if (n[t(1495)] === t(548)) !zn.test(x[t(1073)]) && (r = this[t(2486)](x, r), Y(r, { validation: t(548), code: B.invalid_string, message: n[t(2089)] }), e.dirty());
      else if (n[t(1495)] === t(924)) !Hn[t(856)](x[t(1073)]) && (r = this[t(2486)](x, r), Y(r, { validation: t(924), code: B[t(1191)], message: n[t(2089)] }), e[t(1162)]());
      else if (n.kind === "url") try {
        new URL(x.data);
      } catch {
        r = this[t(2486)](x, r), Y(r, { validation: t(1965), code: B[t(1191)], message: n[t(2089)] }), e[t(1162)]();
      }
      else
        n[t(1495)] === t(994) ? (n[t(994)].lastIndex = 0, !n[t(994)][t(856)](x[t(1073)]) && (r = this[t(2486)](x, r), Y(r, { validation: t(994), code: B[t(1191)], message: n[t(2089)] }), e.dirty())) : n.kind === t(902) ? x[t(1073)] = x[t(1073)][t(902)]() : n[t(1495)] === t(553) ? !x[t(1073)][t(553)](n.value, n.position) && (r = this[t(2486)](x, r), Y(r, { code: B[t(1191)], validation: { includes: n[t(2038)], position: n[t(1670)] }, message: n[t(2089)] }), e[t(1162)]()) : n[t(1495)] === t(1991) ? x[t(1073)] = x[t(1073)][t(1991)]() : n.kind === t(1626) ? x[t(1073)] = x.data.toUpperCase() : n[t(1495)] === t(467) ? !x[t(1073)].startsWith(n[t(2038)]) && (r = this[t(2486)](x, r), Y(r, { code: B.invalid_string, validation: { startsWith: n[t(2038)] }, message: n[t(2089)] }), e[t(1162)]()) : n[t(1495)] === "endsWith" ? !x.data[t(956)](n[t(2038)]) && (r = this[t(2486)](x, r), Y(r, { code: B[t(1191)], validation: { endsWith: n[t(2038)] }, message: n[t(2089)] }), e[t(1162)]()) : n[t(1495)] === "datetime" ? !ti(n)[t(856)](x.data) && (r = this[t(2486)](x, r), Y(r, { code: B[t(1191)], validation: t(2559), message: n[t(2089)] }), e[t(1162)]()) : n[t(1495)] === t(1582) ? !ei[t(856)](x[t(1073)]) && (r = this[t(2486)](x, r), Y(r, { code: B[t(1191)], validation: t(1582), message: n.message }), e[t(1162)]()) : n[t(1495)] === t(2285) ? !xi(n)[t(856)](x.data) && (r = this[t(2486)](x, r), Y(r, { code: B[t(1191)], validation: t(2285), message: n[t(2089)] }), e[t(1162)]()) : n[t(1495)] === t(2003) ? !Zn[t(856)](x[t(1073)]) && (r = this[t(2486)](x, r), Y(r, { validation: t(2003), code: B[t(1191)], message: n[t(2089)] }), e[t(1162)]()) : n[t(1495)] === "ip" ? !ri(x[t(1073)], n[t(1098)]) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: "ip", code: B[t(1191)], message: n.message }), e[t(1162)]()) : n[t(1495)] === "jwt" ? !ai(x[t(1073)], n[t(1036)]) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: "jwt", code: B[t(1191)], message: n[t(2089)] }), e.dirty()) : n[t(1495)] === t(809) ? !si(x[t(1073)], n.version) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: t(809), code: B[t(1191)], message: n.message }), e[t(1162)]()) : n[t(1495)] === t(2287) ? !Yn[t(856)](x[t(1073)]) && (r = this[t(2486)](x, r), Y(r, { validation: t(2287), code: B[t(1191)], message: n[t(2089)] }), e.dirty()) : n.kind === t(2307) ? !_n[t(856)](x[t(1073)]) && (r = this._getOrReturnCtx(x, r), Y(r, { validation: t(2307), code: B.invalid_string, message: n[t(2089)] }), e[t(1162)]()) : N0[t(1397)](n);
    return { status: e[t(2038)], value: x[t(1073)] };
  }
  [s(373)](x, t, a) {
    var e = s;
    return this[e(623)]((r) => x[e(856)](r), { validation: t, code: B.invalid_string, ...a0[e(2649)](a) });
  }
  [s(606)](x) {
    var t = s;
    return new we({ ...this[t(1821)], checks: [...this[t(1821)].checks, x] });
  }
  [s(2500)](x) {
    var t = s;
    return this[t(606)]({ kind: t(2500), ...a0[t(2649)](x) });
  }
  [s(1965)](x) {
    var t = s;
    return this._addCheck({ kind: t(1965), ...a0.errToObj(x) });
  }
  [s(1071)](x) {
    var t = s;
    return this[t(606)]({ kind: t(1071), ...a0.errToObj(x) });
  }
  [s(616)](x) {
    var t = s;
    return this[t(606)]({ kind: t(616), ...a0.errToObj(x) });
  }
  [s(1008)](x) {
    var t = s;
    return this[t(606)]({ kind: t(1008), ...a0[t(2649)](x) });
  }
  [s(1926)](x) {
    var t = s;
    return this[t(606)]({ kind: t(1926), ...a0.errToObj(x) });
  }
  [s(548)](x) {
    var t = s;
    return this[t(606)]({ kind: t(548), ...a0[t(2649)](x) });
  }
  [s(924)](x) {
    return this._addCheck({ kind: "ulid", ...a0.errToObj(x) });
  }
  [s(2287)](x) {
    var t = s;
    return this._addCheck({ kind: t(2287), ...a0[t(2649)](x) });
  }
  base64url(x) {
    return this._addCheck({ kind: "base64url", ...a0.errToObj(x) });
  }
  [s(677)](x) {
    var t = s;
    return this[t(606)]({ kind: t(677), ...a0.errToObj(x) });
  }
  ip(x) {
    var t = s;
    return this[t(606)]({ kind: "ip", ...a0[t(2649)](x) });
  }
  cidr(x) {
    var t = s;
    return this[t(606)]({ kind: t(809), ...a0[t(2649)](x) });
  }
  datetime(x) {
    var t = s;
    return typeof x === t(2348) ? this[t(606)]({ kind: "datetime", precision: null, offset: !1, local: !1, message: x }) : this[t(606)]({ kind: t(2559), precision: typeof (x == null ? void 0 : x[t(1886)]) > "u" ? null : x == null ? void 0 : x[t(1886)], offset: (x == null ? void 0 : x[t(1636)]) ?? !1, local: (x == null ? void 0 : x[t(2645)]) ?? !1, ...a0[t(2649)](x == null ? void 0 : x[t(2089)]) });
  }
  [s(1582)](x) {
    var t = s;
    return this[t(606)]({ kind: "date", message: x });
  }
  [s(2285)](x) {
    var t = s;
    return typeof x === t(2348) ? this[t(606)]({ kind: t(2285), precision: null, message: x }) : this[t(606)]({ kind: t(2285), precision: typeof (x == null ? void 0 : x.precision) > "u" ? null : x == null ? void 0 : x[t(1886)], ...a0[t(2649)](x == null ? void 0 : x[t(2089)]) });
  }
  [s(2003)](x) {
    var t = s;
    return this._addCheck({ kind: t(2003), ...a0[t(2649)](x) });
  }
  [s(994)](x, t) {
    var a = s;
    return this[a(606)]({ kind: a(994), regex: x, ...a0[a(2649)](t) });
  }
  [s(553)](x, t) {
    var a = s;
    return this[a(606)]({ kind: a(553), value: x, position: t == null ? void 0 : t[a(1670)], ...a0[a(2649)](t == null ? void 0 : t[a(2089)]) });
  }
  startsWith(x, t) {
    var a = s;
    return this[a(606)]({ kind: a(467), value: x, ...a0[a(2649)](t) });
  }
  [s(956)](x, t) {
    var a = s;
    return this[a(606)]({ kind: a(956), value: x, ...a0[a(2649)](t) });
  }
  [s(1524)](x, t) {
    var a = s;
    return this[a(606)]({ kind: a(1524), value: x, ...a0.errToObj(t) });
  }
  max(x, t) {
    var a = s;
    return this[a(606)]({ kind: a(2537), value: x, ...a0.errToObj(t) });
  }
  [s(2021)](x, t) {
    var a = s;
    return this._addCheck({ kind: "length", value: x, ...a0[a(2649)](t) });
  }
  [s(1609)](x) {
    var t = s;
    return this.min(1, a0[t(2649)](x));
  }
  [s(902)]() {
    var x = s;
    return new we({ ...this[x(1821)], checks: [...this[x(1821)][x(2055)], { kind: x(902) }] });
  }
  [s(1991)]() {
    var x = s;
    return new we({ ...this[x(1821)], checks: [...this._def[x(2055)], { kind: x(1991) }] });
  }
  [s(1626)]() {
    var x = s;
    return new we({ ...this[x(1821)], checks: [...this[x(1821)][x(2055)], { kind: x(1626) }] });
  }
  get [s(1154)]() {
    var x = s;
    return !!this[x(1821)][x(2055)].find((t) => t[x(1495)] === "datetime");
  }
  get isDate() {
    var x = s;
    return !!this._def.checks[x(1666)]((t) => t[x(1495)] === x(1582));
  }
  get [s(1371)]() {
    var x = s;
    return !!this[x(1821)].checks[x(1666)]((t) => t[x(1495)] === x(2285));
  }
  get [s(818)]() {
    var x = s;
    return !!this[x(1821)][x(2055)].find((t) => t[x(1495)] === x(2003));
  }
  get [s(842)]() {
    var x = s;
    return !!this[x(1821)][x(2055)][x(1666)]((t) => t[x(1495)] === x(2500));
  }
  get isURL() {
    var x = s;
    return !!this[x(1821)].checks.find((t) => t[x(1495)] === x(1965));
  }
  get isEmoji() {
    var x = s;
    return !!this[x(1821)][x(2055)][x(1666)]((t) => t[x(1495)] === x(1071));
  }
  get [s(935)]() {
    var x = s;
    return !!this._def[x(2055)].find((t) => t[x(1495)] === "uuid");
  }
  get [s(639)]() {
    var x = s;
    return !!this[x(1821)].checks[x(1666)]((t) => t[x(1495)] === x(1008));
  }
  get [s(2129)]() {
    var x = s;
    return !!this[x(1821)][x(2055)][x(1666)]((t) => t.kind === x(1926));
  }
  get [s(1051)]() {
    var x = s;
    return !!this[x(1821)][x(2055)][x(1666)]((t) => t[x(1495)] === x(548));
  }
  get isULID() {
    var x = s;
    return !!this._def[x(2055)][x(1666)]((t) => t.kind === x(924));
  }
  get [s(1344)]() {
    var x = s;
    return !!this[x(1821)][x(2055)][x(1666)]((t) => t[x(1495)] === "ip");
  }
  get [s(1304)]() {
    var x = s;
    return !!this[x(1821)].checks[x(1666)]((t) => t[x(1495)] === x(809));
  }
  get [s(2436)]() {
    var x = s;
    return !!this[x(1821)][x(2055)][x(1666)]((t) => t[x(1495)] === "base64");
  }
  get [s(2441)]() {
    var x = s;
    return !!this[x(1821)][x(2055)][x(1666)]((t) => t[x(1495)] === x(2307));
  }
  get [s(549)]() {
    var x = s;
    let t = null;
    for (const a of this[x(1821)][x(2055)])
      a.kind === "min" && (t === null || a[x(2038)] > t) && (t = a[x(2038)]);
    return t;
  }
  get [s(2277)]() {
    var x = s;
    let t = null;
    for (const a of this[x(1821)][x(2055)])
      a.kind === "max" && (t === null || a.value < t) && (t = a[x(2038)]);
    return t;
  }
}
we[s(2196)] = (i) => {
  var x = s;
  return new we({ checks: [], typeName: p0.ZodString, coerce: (i == null ? void 0 : i[x(779)]) ?? !1, ...b0(i) });
};
function ni(i, x) {
  var t = s;
  const a = (i[t(1892)]()[t(2183)](".")[1] || "").length, e = (x[t(1892)]()[t(2183)](".")[1] || "").length, r = a > e ? a : e, n = Number[t(412)](i[t(522)](r)[t(2112)](".", "")), o = Number.parseInt(x[t(522)](r)[t(2112)](".", ""));
  return n % o / 10 ** r;
}
class We extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(1524)] = this[x(1055)], this[x(2537)] = this[x(2289)], this.step = this[x(2246)];
  }
  [s(796)](x) {
    var t = s;
    if (this[t(1821)][t(779)] && (x[t(1073)] = Number(x[t(1073)])), this[t(337)](x) !== e0[t(960)]) {
      const n = this[t(2486)](x);
      return Y(n, { code: B[t(635)], expected: e0.number, received: n.parsedType }), h0;
    }
    let e;
    const r = new ee();
    for (const n of this[t(1821)][t(2055)])
      n.kind === t(2395) ? !N0[t(2309)](x.data) && (e = this._getOrReturnCtx(x, e), Y(e, { code: B.invalid_type, expected: t(893), received: t(1684), message: n[t(2089)] }), r.dirty()) : n.kind === "min" ? (n.inclusive ? x[t(1073)] < n[t(2038)] : x[t(1073)] <= n[t(2038)]) && (e = this[t(2486)](x, e), Y(e, { code: B[t(1287)], minimum: n[t(2038)], type: t(960), inclusive: n[t(1526)], exact: !1, message: n.message }), r.dirty()) : n.kind === t(2537) ? (n[t(1526)] ? x[t(1073)] > n.value : x[t(1073)] >= n[t(2038)]) && (e = this[t(2486)](x, e), Y(e, { code: B.too_big, maximum: n[t(2038)], type: t(960), inclusive: n[t(1526)], exact: !1, message: n[t(2089)] }), r.dirty()) : n.kind === t(2246) ? ni(x[t(1073)], n[t(2038)]) !== 0 && (e = this[t(2486)](x, e), Y(e, { code: B[t(590)], multipleOf: n.value, message: n[t(2089)] }), r[t(1162)]()) : n.kind === t(1233) ? !Number[t(2452)](x.data) && (e = this[t(2486)](x, e), Y(e, { code: B[t(1803)], message: n.message }), r[t(1162)]()) : N0[t(1397)](n);
    return { status: r[t(2038)], value: x[t(1073)] };
  }
  [s(1055)](x, t) {
    var a = s;
    return this[a(1914)](a(1524), x, !0, a0[a(1892)](t));
  }
  gt(x, t) {
    var a = s;
    return this.setLimit(a(1524), x, !1, a0[a(1892)](t));
  }
  [s(2289)](x, t) {
    var a = s;
    return this[a(1914)](a(2537), x, !0, a0[a(1892)](t));
  }
  lt(x, t) {
    var a = s;
    return this[a(1914)](a(2537), x, !1, a0[a(1892)](t));
  }
  [s(1914)](x, t, a, e) {
    var r = s;
    return new We({ ...this[r(1821)], checks: [...this._def[r(2055)], { kind: x, value: t, inclusive: a, message: a0.toString(e) }] });
  }
  [s(606)](x) {
    var t = s;
    return new We({ ...this[t(1821)], checks: [...this[t(1821)][t(2055)], x] });
  }
  [s(2395)](x) {
    var t = s;
    return this[t(606)]({ kind: t(2395), message: a0[t(1892)](x) });
  }
  [s(1115)](x) {
    var t = s;
    return this[t(606)]({ kind: t(1524), value: 0, inclusive: !1, message: a0.toString(x) });
  }
  negative(x) {
    var t = s;
    return this[t(606)]({ kind: t(2537), value: 0, inclusive: !1, message: a0[t(1892)](x) });
  }
  [s(1279)](x) {
    var t = s;
    return this[t(606)]({ kind: t(2537), value: 0, inclusive: !0, message: a0[t(1892)](x) });
  }
  [s(1032)](x) {
    var t = s;
    return this[t(606)]({ kind: "min", value: 0, inclusive: !0, message: a0[t(1892)](x) });
  }
  [s(2246)](x, t) {
    var a = s;
    return this[a(606)]({ kind: "multipleOf", value: x, message: a0.toString(t) });
  }
  [s(1233)](x) {
    var t = s;
    return this._addCheck({ kind: t(1233), message: a0.toString(x) });
  }
  safe(x) {
    var t = s;
    return this[t(606)]({ kind: t(1524), inclusive: !0, value: Number.MIN_SAFE_INTEGER, message: a0[t(1892)](x) })._addCheck({ kind: t(2537), inclusive: !0, value: Number[t(2100)], message: a0[t(1892)](x) });
  }
  get [s(1790)]() {
    var x = s;
    let t = null;
    for (const a of this._def[x(2055)])
      a[x(1495)] === x(1524) && (t === null || a[x(2038)] > t) && (t = a[x(2038)]);
    return t;
  }
  get maxValue() {
    var x = s;
    let t = null;
    for (const a of this[x(1821)][x(2055)])
      a[x(1495)] === x(2537) && (t === null || a[x(2038)] < t) && (t = a[x(2038)]);
    return t;
  }
  get [s(807)]() {
    var x = s;
    return !!this[x(1821)][x(2055)].find((t) => t[x(1495)] === x(2395) || t[x(1495)] === x(2246) && N0.isInteger(t[x(2038)]));
  }
  get [s(2452)]() {
    var x = s;
    let t = null, a = null;
    for (const e of this[x(1821)][x(2055)]) {
      if (e[x(1495)] === x(1233) || e.kind === x(2395) || e[x(1495)] === x(2246)) return !0;
      e[x(1495)] === "min" ? (a === null || e[x(2038)] > a) && (a = e[x(2038)]) : e.kind === x(2537) && (t === null || e[x(2038)] < t) && (t = e.value);
    }
    return Number.isFinite(a) && Number[x(2452)](t);
  }
}
We[s(2196)] = (i) => {
  var x = s;
  return new We({ checks: [], typeName: p0[x(1321)], coerce: (i == null ? void 0 : i.coerce) || !1, ...b0(i) });
};
class xx extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(1524)] = this[x(1055)], this.max = this[x(2289)];
  }
  [s(796)](x) {
    var t = s;
    if (this[t(1821)][t(779)]) try {
      x[t(1073)] = BigInt(x.data);
    } catch {
      return this[t(2299)](x);
    }
    if (this[t(337)](x) !== e0[t(356)]) return this._getInvalidInput(x);
    let e;
    const r = new ee();
    for (const n of this[t(1821)].checks)
      n[t(1495)] === t(1524) ? (n[t(1526)] ? x.data < n[t(2038)] : x.data <= n[t(2038)]) && (e = this[t(2486)](x, e), Y(e, { code: B.too_small, type: t(356), minimum: n.value, inclusive: n[t(1526)], message: n[t(2089)] }), r[t(1162)]()) : n[t(1495)] === t(2537) ? (n[t(1526)] ? x[t(1073)] > n[t(2038)] : x[t(1073)] >= n[t(2038)]) && (e = this[t(2486)](x, e), Y(e, { code: B.too_big, type: t(356), maximum: n[t(2038)], inclusive: n[t(1526)], message: n[t(2089)] }), r[t(1162)]()) : n.kind === "multipleOf" ? x[t(1073)] % n[t(2038)] !== BigInt(0) && (e = this[t(2486)](x, e), Y(e, { code: B[t(590)], multipleOf: n.value, message: n[t(2089)] }), r[t(1162)]()) : N0.assertNever(n);
    return { status: r[t(2038)], value: x[t(1073)] };
  }
  _getInvalidInput(x) {
    var t = s;
    const a = this[t(2486)](x);
    return Y(a, { code: B.invalid_type, expected: e0[t(356)], received: a[t(2268)] }), h0;
  }
  [s(1055)](x, t) {
    var a = s;
    return this[a(1914)](a(1524), x, !0, a0[a(1892)](t));
  }
  gt(x, t) {
    var a = s;
    return this[a(1914)](a(1524), x, !1, a0[a(1892)](t));
  }
  [s(2289)](x, t) {
    var a = s;
    return this.setLimit(a(2537), x, !0, a0[a(1892)](t));
  }
  lt(x, t) {
    var a = s;
    return this.setLimit("max", x, !1, a0[a(1892)](t));
  }
  [s(1914)](x, t, a, e) {
    var r = s;
    return new xx({ ...this[r(1821)], checks: [...this[r(1821)][r(2055)], { kind: x, value: t, inclusive: a, message: a0.toString(e) }] });
  }
  [s(606)](x) {
    var t = s;
    return new xx({ ...this[t(1821)], checks: [...this[t(1821)].checks, x] });
  }
  [s(1115)](x) {
    var t = s;
    return this[t(606)]({ kind: t(1524), value: BigInt(0), inclusive: !1, message: a0[t(1892)](x) });
  }
  [s(936)](x) {
    var t = s;
    return this[t(606)]({ kind: t(2537), value: BigInt(0), inclusive: !1, message: a0[t(1892)](x) });
  }
  [s(1279)](x) {
    var t = s;
    return this[t(606)]({ kind: "max", value: BigInt(0), inclusive: !0, message: a0[t(1892)](x) });
  }
  nonnegative(x) {
    var t = s;
    return this[t(606)]({ kind: "min", value: BigInt(0), inclusive: !0, message: a0[t(1892)](x) });
  }
  [s(2246)](x, t) {
    var a = s;
    return this._addCheck({ kind: a(2246), value: x, message: a0[a(1892)](t) });
  }
  get [s(1790)]() {
    var x = s;
    let t = null;
    for (const a of this[x(1821)][x(2055)])
      a[x(1495)] === x(1524) && (t === null || a[x(2038)] > t) && (t = a[x(2038)]);
    return t;
  }
  get [s(2573)]() {
    var x = s;
    let t = null;
    for (const a of this[x(1821)][x(2055)])
      a[x(1495)] === x(2537) && (t === null || a[x(2038)] < t) && (t = a[x(2038)]);
    return t;
  }
}
xx.create = (i) => {
  var x = s;
  return new xx({ checks: [], typeName: p0[x(1528)], coerce: (i == null ? void 0 : i[x(779)]) ?? !1, ...b0(i) });
};
class Lt extends E0 {
  [s(796)](x) {
    var t = s;
    if (this[t(1821)][t(779)] && (x[t(1073)] = !!x.data), this[t(337)](x) !== e0[t(2251)]) {
      const e = this[t(2486)](x);
      return Y(e, { code: B[t(635)], expected: e0[t(2251)], received: e[t(2268)] }), h0;
    }
    return re(x[t(1073)]);
  }
}
Lt[s(2196)] = (i) => {
  var x = s;
  return new Lt({ typeName: p0[x(2280)], coerce: (i == null ? void 0 : i.coerce) || !1, ...b0(i) });
};
class mx extends E0 {
  [s(796)](x) {
    var t = s;
    if (this._def[t(779)] && (x.data = new Date(x.data)), this[t(337)](x) !== e0.date) {
      const n = this._getOrReturnCtx(x);
      return Y(n, { code: B.invalid_type, expected: e0.date, received: n[t(2268)] }), h0;
    }
    if (Number.isNaN(x[t(1073)][t(1223)]())) {
      const n = this._getOrReturnCtx(x);
      return Y(n, { code: B[t(1225)] }), h0;
    }
    const e = new ee();
    let r;
    for (const n of this[t(1821)][t(2055)])
      n.kind === t(1524) ? x.data[t(1223)]() < n[t(2038)] && (r = this[t(2486)](x, r), Y(r, { code: B[t(1287)], message: n[t(2089)], inclusive: !0, exact: !1, minimum: n[t(2038)], type: t(1582) }), e[t(1162)]()) : n[t(1495)] === t(2537) ? x.data[t(1223)]() > n[t(2038)] && (r = this[t(2486)](x, r), Y(r, { code: B[t(718)], message: n[t(2089)], inclusive: !0, exact: !1, maximum: n[t(2038)], type: "date" }), e.dirty()) : N0[t(1397)](n);
    return { status: e.value, value: new Date(x[t(1073)][t(1223)]()) };
  }
  _addCheck(x) {
    var t = s;
    return new mx({ ...this._def, checks: [...this[t(1821)].checks, x] });
  }
  [s(1524)](x, t) {
    var a = s;
    return this[a(606)]({ kind: a(1524), value: x[a(1223)](), message: a0[a(1892)](t) });
  }
  [s(2537)](x, t) {
    var a = s;
    return this[a(606)]({ kind: a(2537), value: x[a(1223)](), message: a0[a(1892)](t) });
  }
  get minDate() {
    var x = s;
    let t = null;
    for (const a of this[x(1821)].checks)
      a[x(1495)] === x(1524) && (t === null || a.value > t) && (t = a[x(2038)]);
    return t != null ? new Date(t) : null;
  }
  get [s(2139)]() {
    var x = s;
    let t = null;
    for (const a of this._def.checks)
      a[x(1495)] === x(2537) && (t === null || a[x(2038)] < t) && (t = a[x(2038)]);
    return t != null ? new Date(t) : null;
  }
}
mx.create = (i) => {
  var x = s;
  return new mx({ checks: [], coerce: (i == null ? void 0 : i[x(779)]) || !1, typeName: p0[x(566)], ...b0(i) });
};
class Cr extends E0 {
  _parse(x) {
    var t = s;
    if (this[t(337)](x) !== e0[t(633)]) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: B[t(635)], expected: e0[t(633)], received: e[t(2268)] }), h0;
    }
    return re(x[t(1073)]);
  }
}
Cr[s(2196)] = (i) => {
  var x = s;
  return new Cr({ typeName: p0[x(2354)], ...b0(i) });
};
class $t extends E0 {
  [s(796)](x) {
    var t = s;
    if (this[t(337)](x) !== e0[t(1887)]) {
      const e = this[t(2486)](x);
      return Y(e, { code: B[t(635)], expected: e0[t(1887)], received: e[t(2268)] }), h0;
    }
    return re(x[t(1073)]);
  }
}
$t[s(2196)] = (i) => new $t({ typeName: p0.ZodUndefined, ...b0(i) });
class zt extends E0 {
  [s(796)](x) {
    var t = s;
    if (this[t(337)](x) !== e0[t(1382)]) {
      const e = this[t(2486)](x);
      return Y(e, { code: B[t(635)], expected: e0.null, received: e.parsedType }), h0;
    }
    return re(x[t(1073)]);
  }
}
zt[s(2196)] = (i) => {
  var x = s;
  return new zt({ typeName: p0[x(914)], ...b0(i) });
};
class Ht extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(2080)] = !0;
  }
  [s(796)](x) {
    var t = s;
    return re(x[t(1073)]);
  }
}
Ht[s(2196)] = (i) => new Ht({ typeName: p0.ZodAny, ...b0(i) });
class Ut extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this[x(2389)] = !0;
  }
  [s(796)](x) {
    var t = s;
    return re(x[t(1073)]);
  }
}
Ut[s(2196)] = (i) => {
  var x = s;
  return new Ut({ typeName: p0[x(1736)], ...b0(i) });
};
class Pe extends E0 {
  _parse(x) {
    const t = this._getOrReturnCtx(x);
    return Y(t, { code: B.invalid_type, expected: e0.never, received: t.parsedType }), h0;
  }
}
Pe[s(2196)] = (i) => {
  var x = s;
  return new Pe({ typeName: p0[x(592)], ...b0(i) });
};
class Vt extends E0 {
  [s(796)](x) {
    var t = s;
    if (this._getType(x) !== e0[t(1887)]) {
      const e = this[t(2486)](x);
      return Y(e, { code: B[t(635)], expected: e0[t(500)], received: e[t(2268)] }), h0;
    }
    return re(x[t(1073)]);
  }
}
Vt[s(2196)] = (i) => new Vt({ typeName: p0.ZodVoid, ...b0(i) });
class pe extends E0 {
  [s(796)](x) {
    var t = s;
    const { ctx: a, status: e } = this._processInputParams(x), r = this[t(1821)];
    if (a[t(2268)] !== e0.array) return Y(a, { code: B[t(635)], expected: e0[t(1315)], received: a[t(2268)] }), h0;
    if (r[t(836)] !== null) {
      const o = a[t(1073)][t(2021)] > r[t(836)][t(2038)], c = a[t(1073)][t(2021)] < r[t(836)][t(2038)];
      (o || c) && (Y(a, { code: o ? B.too_big : B[t(1287)], minimum: c ? r[t(836)].value : void 0, maximum: o ? r.exactLength[t(2038)] : void 0, type: "array", inclusive: !0, exact: !0, message: r[t(836)].message }), e[t(1162)]());
    }
    if (r[t(549)] !== null && a[t(1073)][t(2021)] < r[t(549)].value && (Y(a, { code: B[t(1287)], minimum: r.minLength[t(2038)], type: "array", inclusive: !0, exact: !1, message: r[t(549)][t(2089)] }), e.dirty()), r[t(2277)] !== null && a[t(1073)][t(2021)] > r.maxLength[t(2038)] && (Y(a, { code: B.too_big, maximum: r[t(2277)][t(2038)], type: t(1315), inclusive: !0, exact: !1, message: r.maxLength[t(2089)] }), e[t(1162)]()), a.common.async) return Promise[t(1897)]([...a[t(1073)]][t(632)]((o, c) => {
      var u = t;
      return r.type[u(2628)](new me(a, o, a[u(1796)], c));
    }))[t(432)]((o) => {
      var c = t;
      return ee[c(2048)](e, o);
    });
    const n = [...a.data].map((o, c) => {
      var u = t;
      return r[u(338)][u(1252)](new me(a, o, a.path, c));
    });
    return ee.mergeArray(e, n);
  }
  get element() {
    var x = s;
    return this[x(1821)][x(338)];
  }
  min(x, t) {
    var a = s;
    return new pe({ ...this[a(1821)], minLength: { value: x, message: a0[a(1892)](t) } });
  }
  [s(2537)](x, t) {
    var a = s;
    return new pe({ ...this[a(1821)], maxLength: { value: x, message: a0[a(1892)](t) } });
  }
  [s(2021)](x, t) {
    return new pe({ ...this._def, exactLength: { value: x, message: a0.toString(t) } });
  }
  [s(1609)](x) {
    var t = s;
    return this[t(1524)](1, x);
  }
}
pe.create = (i, x) => {
  var t = s;
  return new pe({ type: i, minLength: null, maxLength: null, exactLength: null, typeName: p0[t(2463)], ...b0(x) });
};
function Ue(i) {
  var x = s;
  if (i instanceof K0) {
    const t = {};
    for (const a in i[x(2219)]) {
      const e = i[x(2219)][a];
      t[a] = Se[x(2196)](Ue(e));
    }
    return new K0({ ...i[x(1821)], shape: () => t });
  } else
    return i instanceof pe ? new pe({ ...i[x(1821)], type: Ue(i.element) }) : i instanceof Se ? Se[x(2196)](Ue(i.unwrap())) : i instanceof je ? je[x(2196)](Ue(i[x(1808)]())) : i instanceof Ae ? Ae[x(2196)](i[x(2187)][x(632)]((t) => Ue(t))) : i;
}
class K0 extends E0 {
  constructor() {
    var x = s;
    super(...arguments), this._cached = null, this.nonstrict = this[x(1685)], this.augment = this[x(1369)];
  }
  _getCached() {
    var x = s;
    if (this[x(423)] !== null) return this[x(423)];
    const t = this._def[x(2219)](), a = N0[x(2574)](t);
    return this[x(423)] = { shape: t, keys: a }, this[x(423)];
  }
  [s(796)](x) {
    var t = s;
    if (this[t(337)](x) !== e0[t(1923)]) {
      const d = this[t(2486)](x);
      return Y(d, { code: B[t(635)], expected: e0[t(1923)], received: d[t(2268)] }), h0;
    }
    const { status: e, ctx: r } = this[t(1408)](x), { shape: n, keys: o } = this[t(479)](), c = [];
    if (!(this[t(1821)].catchall instanceof Pe && this[t(1821)][t(2046)] === t(688))) for (const d in r.data)
      !o[t(553)](d) && c[t(2380)](d);
    const u = [];
    for (const d of o) {
      const f = n[d], l = r[t(1073)][d];
      u[t(2380)]({ key: { status: "valid", value: d }, value: f[t(796)](new me(r, l, r[t(1796)], d)), alwaysSet: d in r[t(1073)] });
    }
    if (this[t(1821)][t(2556)] instanceof Pe) {
      const d = this[t(1821)][t(2046)];
      if (d === t(1685)) for (const f of c)
        u[t(2380)]({ key: { status: t(2538), value: f }, value: { status: t(2538), value: r.data[f] } });
      else if (d === "strict") c[t(2021)] > 0 && (Y(r, { code: B[t(1289)], keys: c }), e.dirty());
      else if (d !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this[t(1821)][t(2556)];
      for (const f of c) {
        const l = r[t(1073)][f];
        u.push({ key: { status: t(2538), value: f }, value: d[t(796)](new me(r, l, r[t(1796)], f)), alwaysSet: f in r.data });
      }
    }
    return r[t(975)][t(2572)] ? Promise[t(1890)]()[t(432)](async () => {
      var d = t;
      const f = [];
      for (const l of u) {
        const v = await l[d(1810)], h = await l[d(2038)];
        f[d(2380)]({ key: v, value: h, alwaysSet: l[d(604)] });
      }
      return f;
    }).then((d) => {
      var f = t;
      return ee[f(1058)](e, d);
    }) : ee.mergeObjectSync(e, u);
  }
  get [s(2219)]() {
    var x = s;
    return this[x(1821)][x(2219)]();
  }
  strict(x) {
    var t = s;
    return a0[t(2649)], new K0({ ...this._def, unknownKeys: t(565), ...x !== void 0 ? { errorMap: (a, e) => {
      var o, c;
      var r = t;
      const n = ((c = (o = this._def).errorMap) == null ? void 0 : c.call(o, a, e)[r(2089)]) ?? e[r(2234)];
      return a[r(733)] === r(1289) ? { message: a0[r(2649)](x)[r(2089)] ?? n } : { message: n };
    } } : {} });
  }
  [s(688)]() {
    var x = s;
    return new K0({ ...this[x(1821)], unknownKeys: x(688) });
  }
  [s(1685)]() {
    var x = s;
    return new K0({ ...this[x(1821)], unknownKeys: x(1685) });
  }
  extend(x) {
    var t = s;
    return new K0({ ...this[t(1821)], shape: () => ({ ...this[t(1821)][t(2219)](), ...x }) });
  }
  merge(x) {
    var t = s;
    return new K0({ unknownKeys: x[t(1821)][t(2046)], catchall: x[t(1821)][t(2556)], shape: () => ({ ...this._def[t(2219)](), ...x[t(1821)][t(2219)]() }), typeName: p0.ZodObject });
  }
  [s(1218)](x, t) {
    var a = s;
    return this[a(505)]({ [x]: t });
  }
  [s(2556)](x) {
    var t = s;
    return new K0({ ...this[t(1821)], catchall: x });
  }
  pick(x) {
    var t = s;
    const a = {};
    for (const e of N0.objectKeys(x))
      x[e] && this[t(2219)][e] && (a[e] = this[t(2219)][e]);
    return new K0({ ...this._def, shape: () => a });
  }
  [s(2388)](x) {
    var t = s;
    const a = {};
    for (const e of N0[t(2574)](this[t(2219)]))
      !x[e] && (a[e] = this.shape[e]);
    return new K0({ ...this[t(1821)], shape: () => a });
  }
  deepPartial() {
    return Ue(this);
  }
  [s(403)](x) {
    var t = s;
    const a = {};
    for (const e of N0[t(2574)](this[t(2219)])) {
      const r = this[t(2219)][e];
      x && !x[e] ? a[e] = r : a[e] = r[t(1285)]();
    }
    return new K0({ ...this[t(1821)], shape: () => a });
  }
  required(x) {
    var t = s;
    const a = {};
    for (const e of N0[t(2574)](this.shape))
      if (x && !x[e]) a[e] = this[t(2219)][e];
      else {
        let n = this[t(2219)][e];
        for (; n instanceof Se; )
          n = n[t(1821)][t(2593)];
        a[e] = n;
      }
    return new K0({ ...this[t(1821)], shape: () => a });
  }
  [s(384)]() {
    var x = s;
    return Ms(N0[x(2574)](this[x(2219)]));
  }
}
K0.create = (i, x) => {
  var t = s;
  return new K0({ shape: () => i, unknownKeys: t(688), catchall: Pe[t(2196)](), typeName: p0[t(894)], ...b0(x) });
}, K0[s(618)] = (i, x) => {
  var t = s;
  return new K0({ shape: () => i, unknownKeys: t(565), catchall: Pe.create(), typeName: p0[t(894)], ...b0(x) });
}, K0[s(409)] = (i, x) => {
  var t = s;
  return new K0({ shape: i, unknownKeys: t(688), catchall: Pe[t(2196)](), typeName: p0[t(894)], ...b0(x) });
};
class vx extends E0 {
  [s(796)](x) {
    var t = s;
    const { ctx: a } = this[t(1408)](x), e = this[t(1821)][t(778)];
    function r(n) {
      var o = t;
      for (const u of n)
        if (u.result[o(2296)] === o(2538)) return u[o(1806)];
      for (const u of n)
        if (u[o(1806)][o(2296)] === o(1162)) return a[o(975)][o(1729)][o(2380)](...u.ctx.common[o(1729)]), u.result;
      const c = n[o(632)]((u) => new ke(u[o(334)][o(975)][o(1729)]));
      return Y(a, { code: B[o(1550)], unionErrors: c }), h0;
    }
    if (a[t(975)][t(2572)]) return Promise.all(e[t(632)](async (n) => {
      var o = t;
      const c = { ...a, common: { ...a[o(975)], issues: [] }, parent: null };
      return { result: await n._parseAsync({ data: a[o(1073)], path: a[o(1796)], parent: c }), ctx: c };
    }))[t(432)](r);
    {
      let n;
      const o = [];
      for (const u of e) {
        const d = { ...a, common: { ...a[t(975)], issues: [] }, parent: null }, f = u[t(1252)]({ data: a[t(1073)], path: a.path, parent: d });
        if (f.status === t(2538)) return f;
        f[t(2296)] === t(1162) && !n && (n = { result: f, ctx: d }), d[t(975)][t(1729)][t(2021)] && o[t(2380)](d[t(975)][t(1729)]);
      }
      if (n) return a[t(975)][t(1729)].push(...n.ctx[t(975)][t(1729)]), n[t(1806)];
      const c = o[t(632)]((u) => new ke(u));
      return Y(a, { code: B[t(1550)], unionErrors: c }), h0;
    }
  }
  get [s(778)]() {
    var x = s;
    return this[x(1821)][x(778)];
  }
}
vx[s(2196)] = (i, x) => {
  var t = s;
  return new vx({ options: i, typeName: p0[t(726)], ...b0(x) });
};
const ye = (i) => {
  var x = s;
  return i instanceof Zt ? ye(i[x(1174)]) : i instanceof qe ? ye(i[x(2593)]()) : i instanceof bx ? [i[x(2038)]] : i instanceof De ? i.options : i instanceof Bt ? N0.objectValues(i.enum) : i instanceof Sx ? ye(i[x(1821)][x(2593)]) : i instanceof $t ? [void 0] : i instanceof zt ? [null] : i instanceof Se ? [void 0, ...ye(i[x(1808)]())] : i instanceof je ? [null, ...ye(i[x(1808)]())] : i instanceof Ls ? ye(i.unwrap()) : i instanceof Ex ? ye(i[x(1808)]()) : i instanceof kx ? ye(i[x(1821)].innerType) : [];
};
class tr extends E0 {
  [s(796)](x) {
    var t = s;
    const { ctx: a } = this[t(1408)](x);
    if (a[t(2268)] !== e0[t(1923)]) return Y(a, { code: B[t(635)], expected: e0[t(1923)], received: a[t(2268)] }), h0;
    const e = this[t(2128)], r = a[t(1073)][e], n = this[t(808)][t(2229)](r);
    return n ? a[t(975)][t(2572)] ? n._parseAsync({ data: a[t(1073)], path: a[t(1796)], parent: a }) : n[t(1252)]({ data: a[t(1073)], path: a[t(1796)], parent: a }) : (Y(a, { code: B.invalid_union_discriminator, options: Array[t(1147)](this[t(808)][t(1040)]()), path: [e] }), h0);
  }
  get [s(2128)]() {
    var x = s;
    return this[x(1821)][x(2128)];
  }
  get [s(778)]() {
    var x = s;
    return this._def[x(778)];
  }
  get [s(808)]() {
    var x = s;
    return this[x(1821)][x(808)];
  }
  static [s(2196)](x, t, a) {
    var e = s;
    const r = /* @__PURE__ */ new Map();
    for (const n of t) {
      const o = ye(n[e(2219)][x]);
      if (!o[e(2021)]) throw new Error(e(1532) + x + e(2361));
      for (const c of o) {
        if (r.has(c)) throw new Error("Discriminator property " + String(x) + e(1090) + String(c));
        r.set(c, n);
      }
    }
    return new tr({ typeName: p0[e(872)], discriminator: x, options: t, optionsMap: r, ...b0(a) });
  }
}
function Wt(i, x) {
  var t = s;
  const a = Ie(i), e = Ie(x);
  if (i === x) return { valid: !0, data: i };
  if (a === e0[t(1923)] && e === e0[t(1923)]) {
    const r = N0[t(2574)](x), n = N0[t(2574)](i)[t(2397)]((c) => r.indexOf(c) !== -1), o = { ...i, ...x };
    for (const c of n) {
      const u = Wt(i[c], x[c]);
      if (!u[t(2538)]) return { valid: !1 };
      o[c] = u.data;
    }
    return { valid: !0, data: o };
  } else if (a === e0[t(1315)] && e === e0[t(1315)]) {
    if (i[t(2021)] !== x[t(2021)]) return { valid: !1 };
    const r = [];
    for (let n = 0; n < i[t(2021)]; n++) {
      const o = i[n], c = x[n], u = Wt(o, c);
      if (!u[t(2538)]) return { valid: !1 };
      r[t(2380)](u[t(1073)]);
    }
    return { valid: !0, data: r };
  } else return a === e0[t(1582)] && e === e0.date && +i == +x ? { valid: !0, data: i } : { valid: !1 };
}
class gx extends E0 {
  [s(796)](x) {
    var t = s;
    const { status: a, ctx: e } = this._processInputParams(x), r = (n, o) => {
      var c = K;
      if (Ir(n) || Ir(o)) return h0;
      const u = Wt(n[c(2038)], o[c(2038)]);
      return u[c(2538)] ? ((Pr(n) || Pr(o)) && a.dirty(), { status: a.value, value: u[c(1073)] }) : (Y(e, { code: B[c(811)] }), h0);
    };
    return e[t(975)][t(2572)] ? Promise[t(1897)]([this[t(1821)][t(1755)]._parseAsync({ data: e.data, path: e[t(1796)], parent: e }), this._def[t(792)][t(2628)]({ data: e.data, path: e[t(1796)], parent: e })])[t(432)](([n, o]) => r(n, o)) : r(this._def[t(1755)][t(1252)]({ data: e.data, path: e[t(1796)], parent: e }), this._def[t(792)][t(1252)]({ data: e.data, path: e.path, parent: e }));
  }
}
gx.create = (i, x, t) => new gx({ left: i, right: x, typeName: p0.ZodIntersection, ...b0(t) });
class Ae extends E0 {
  [s(796)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(1408)](x);
    if (e.parsedType !== e0[t(1315)]) return Y(e, { code: B.invalid_type, expected: e0.array, received: e[t(2268)] }), h0;
    if (e[t(1073)][t(2021)] < this[t(1821)][t(2187)].length) return Y(e, { code: B.too_small, minimum: this[t(1821)][t(2187)][t(2021)], inclusive: !0, exact: !1, type: t(1315) }), h0;
    !this._def[t(1837)] && e[t(1073)].length > this[t(1821)][t(2187)][t(2021)] && (Y(e, { code: B[t(718)], maximum: this[t(1821)][t(2187)][t(2021)], inclusive: !0, exact: !1, type: "array" }), a[t(1162)]());
    const n = [...e[t(1073)]][t(632)]((o, c) => {
      var u = t;
      const d = this[u(1821)][u(2187)][c] || this[u(1821)][u(1837)];
      return d ? d._parse(new me(e, o, e[u(1796)], c)) : null;
    })[t(2397)]((o) => !!o);
    return e[t(975)][t(2572)] ? Promise[t(1897)](n)[t(432)]((o) => {
      var c = t;
      return ee[c(2048)](a, o);
    }) : ee[t(2048)](a, n);
  }
  get [s(2187)]() {
    var x = s;
    return this._def[x(2187)];
  }
  [s(1837)](x) {
    var t = s;
    return new Ae({ ...this[t(1821)], rest: x });
  }
}
Ae[s(2196)] = (i, x) => {
  var t = s;
  if (!Array[t(1435)](i)) throw new Error(t(1902));
  return new Ae({ items: i, typeName: p0[t(1614)], rest: null, ...b0(x) });
};
class yx extends E0 {
  get [s(742)]() {
    var x = s;
    return this[x(1821)][x(2200)];
  }
  get valueSchema() {
    var x = s;
    return this._def[x(1851)];
  }
  [s(796)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(1408)](x);
    if (e.parsedType !== e0[t(1923)]) return Y(e, { code: B.invalid_type, expected: e0[t(1923)], received: e.parsedType }), h0;
    const r = [], n = this._def[t(2200)], o = this[t(1821)].valueType;
    for (const c in e[t(1073)])
      r.push({ key: n._parse(new me(e, c, e.path, c)), value: o._parse(new me(e, e.data[c], e[t(1796)], c)), alwaysSet: c in e[t(1073)] });
    return e.common[t(2572)] ? ee[t(2665)](a, r) : ee[t(1058)](a, r);
  }
  get [s(1567)]() {
    var x = s;
    return this[x(1821)][x(1851)];
  }
  static create(x, t, a) {
    var e = s;
    return t instanceof E0 ? new yx({ keyType: x, valueType: t, typeName: p0[e(1759)], ...b0(a) }) : new yx({ keyType: we[e(2196)](), valueType: x, typeName: p0.ZodRecord, ...b0(t) });
  }
}
class Fr extends E0 {
  get [s(742)]() {
    var x = s;
    return this[x(1821)].keyType;
  }
  get [s(2418)]() {
    var x = s;
    return this[x(1821)][x(1851)];
  }
  [s(796)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(1408)](x);
    if (e[t(2268)] !== e0[t(632)]) return Y(e, { code: B[t(635)], expected: e0[t(632)], received: e[t(2268)] }), h0;
    const r = this[t(1821)][t(2200)], n = this[t(1821)].valueType, o = [...e[t(1073)].entries()][t(632)](([c, u], d) => {
      var f = t;
      return { key: r[f(796)](new me(e, c, e.path, [d, f(1810)])), value: n._parse(new me(e, u, e.path, [d, f(2038)])) };
    });
    if (e[t(975)][t(2572)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise[t(1890)]()[t(432)](async () => {
        var u = t;
        for (const d of o) {
          const f = await d[u(1810)], l = await d[u(2038)];
          if (f[u(2296)] === u(806) || l.status === u(806)) return h0;
          (f.status === "dirty" || l[u(2296)] === u(1162)) && a[u(1162)](), c[u(1951)](f[u(2038)], l[u(2038)]);
        }
        return { status: a[u(2038)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of o) {
        const d = u.key, f = u.value;
        if (d[t(2296)] === t(806) || f[t(2296)] === t(806)) return h0;
        (d[t(2296)] === "dirty" || f[t(2296)] === t(1162)) && a[t(1162)](), c[t(1951)](d[t(2038)], f[t(2038)]);
      }
      return { status: a[t(2038)], value: c };
    }
  }
}
Fr[s(2196)] = (i, x, t) => {
  var a = s;
  return new Fr({ valueType: x, keyType: i, typeName: p0[a(570)], ...b0(t) });
};
class tx extends E0 {
  [s(796)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(1408)](x);
    if (e.parsedType !== e0[t(1951)]) return Y(e, { code: B[t(635)], expected: e0.set, received: e[t(2268)] }), h0;
    const r = this._def;
    r[t(2037)] !== null && e.data.size < r.minSize[t(2038)] && (Y(e, { code: B[t(1287)], minimum: r[t(2037)][t(2038)], type: "set", inclusive: !0, exact: !1, message: r[t(2037)][t(2089)] }), a.dirty()), r[t(1215)] !== null && e[t(1073)].size > r[t(1215)][t(2038)] && (Y(e, { code: B[t(718)], maximum: r[t(1215)][t(2038)], type: t(1951), inclusive: !0, exact: !1, message: r.maxSize[t(2089)] }), a[t(1162)]());
    const n = this[t(1821)][t(1851)];
    function o(u) {
      var d = t;
      const f = /* @__PURE__ */ new Set();
      for (const l of u) {
        if (l[d(2296)] === "aborted") return h0;
        l.status === d(1162) && a[d(1162)](), f[d(1342)](l[d(2038)]);
      }
      return { status: a[d(2038)], value: f };
    }
    const c = [...e[t(1073)][t(2166)]()][t(632)]((u, d) => n[t(796)](new me(e, u, e.path, d)));
    return e.common[t(2572)] ? Promise.all(c)[t(432)]((u) => o(u)) : o(c);
  }
  [s(1524)](x, t) {
    var a = s;
    return new tx({ ...this._def, minSize: { value: x, message: a0[a(1892)](t) } });
  }
  [s(2537)](x, t) {
    return new tx({ ...this._def, maxSize: { value: x, message: a0.toString(t) } });
  }
  [s(1066)](x, t) {
    var a = s;
    return this[a(1524)](x, t).max(x, t);
  }
  [s(1609)](x) {
    var t = s;
    return this[t(1524)](1, x);
  }
}
tx[s(2196)] = (i, x) => {
  var t = s;
  return new tx({ valueType: i, minSize: null, maxSize: null, typeName: p0[t(468)], ...b0(x) });
};
class Zt extends E0 {
  get [s(1174)]() {
    var x = s;
    return this[x(1821)][x(801)]();
  }
  _parse(x) {
    var t = s;
    const { ctx: a } = this._processInputParams(x);
    return this._def[t(801)]()[t(796)]({ data: a[t(1073)], path: a[t(1796)], parent: a });
  }
}
Zt[s(2196)] = (i, x) => {
  var t = s;
  return new Zt({ getter: i, typeName: p0[t(2293)], ...b0(x) });
};
class bx extends E0 {
  [s(796)](x) {
    var t = s;
    if (x[t(1073)] !== this._def[t(2038)]) {
      const a = this._getOrReturnCtx(x);
      return Y(a, { received: a[t(1073)], code: B[t(1451)], expected: this[t(1821)][t(2038)] }), h0;
    }
    return { status: t(2538), value: x.data };
  }
  get value() {
    var x = s;
    return this[x(1821)].value;
  }
}
bx[s(2196)] = (i, x) => {
  var t = s;
  return new bx({ value: i, typeName: p0[t(2204)], ...b0(x) });
};
function Ms(i, x) {
  var t = s;
  return new De({ values: i, typeName: p0[t(2067)], ...b0(x) });
}
class De extends E0 {
  [s(796)](x) {
    var t = s;
    if (typeof x[t(1073)] !== t(2348)) {
      const a = this[t(2486)](x), e = this[t(1821)][t(2166)];
      return Y(a, { expected: N0[t(2111)](e), received: a[t(2268)], code: B[t(635)] }), h0;
    }
    if (!this[t(1229)] && (this._cache = new Set(this[t(1821)][t(2166)])), !this[t(1229)][t(2561)](x.data)) {
      const a = this[t(2486)](x), e = this[t(1821)][t(2166)];
      return Y(a, { received: a[t(1073)], code: B[t(401)], options: e }), h0;
    }
    return re(x[t(1073)]);
  }
  get options() {
    var x = s;
    return this[x(1821)][x(2166)];
  }
  get [s(1053)]() {
    var x = s;
    const t = {};
    for (const a of this[x(1821)].values)
      t[a] = a;
    return t;
  }
  get [s(890)]() {
    var x = s;
    const t = {};
    for (const a of this[x(1821)][x(2166)])
      t[a] = a;
    return t;
  }
  get [s(573)]() {
    var x = s;
    const t = {};
    for (const a of this[x(1821)][x(2166)])
      t[a] = a;
    return t;
  }
  [s(1213)](x, t = this[s(1821)]) {
    var a = s;
    return De[a(2196)](x, { ...this[a(1821)], ...t });
  }
  [s(1787)](x, t = this[s(1821)]) {
    var a = s;
    return De.create(this.options.filter((e) => !x[a(553)](e)), { ...this[a(1821)], ...t });
  }
}
De[s(2196)] = Ms;
class Bt extends E0 {
  [s(796)](x) {
    var t = s;
    const a = N0[t(2644)](this[t(1821)][t(2166)]), e = this._getOrReturnCtx(x);
    if (e[t(2268)] !== e0[t(2348)] && e[t(2268)] !== e0[t(960)]) {
      const r = N0.objectValues(a);
      return Y(e, { expected: N0[t(2111)](r), received: e[t(2268)], code: B.invalid_type }), h0;
    }
    if (!this[t(1229)] && (this._cache = new Set(N0.getValidEnumValues(this[t(1821)][t(2166)]))), !this._cache.has(x[t(1073)])) {
      const r = N0[t(1322)](a);
      return Y(e, { received: e[t(1073)], code: B[t(401)], options: r }), h0;
    }
    return re(x.data);
  }
  get enum() {
    var x = s;
    return this[x(1821)][x(2166)];
  }
}
Bt[s(2196)] = (i, x) => {
  var t = s;
  return new Bt({ values: i, typeName: p0[t(1477)], ...b0(x) });
};
class wx extends E0 {
  [s(1808)]() {
    var x = s;
    return this._def[x(338)];
  }
  [s(796)](x) {
    var t = s;
    const { ctx: a } = this._processInputParams(x);
    if (a[t(2268)] !== e0[t(694)] && a[t(975)].async === !1) return Y(a, { code: B[t(635)], expected: e0[t(694)], received: a.parsedType }), h0;
    const e = a.parsedType === e0[t(694)] ? a[t(1073)] : Promise[t(1890)](a.data);
    return re(e.then((r) => {
      var n = t;
      return this[n(1821)][n(338)][n(955)](r, { path: a[n(1796)], errorMap: a[n(975)][n(2096)] });
    }));
  }
}
wx[s(2196)] = (i, x) => {
  var t = s;
  return new wx({ type: i, typeName: p0[t(613)], ...b0(x) });
};
class qe extends E0 {
  [s(2593)]() {
    var x = s;
    return this._def[x(1174)];
  }
  sourceType() {
    var x = s;
    return this[x(1821)][x(1174)][x(1821)][x(2074)] === p0[x(1762)] ? this[x(1821)][x(1174)][x(2618)]() : this[x(1821)][x(1174)];
  }
  [s(796)](x) {
    var t = s;
    const { status: a, ctx: e } = this[t(1408)](x), r = this[t(1821)][t(1782)] || null, n = { addIssue: (o) => {
      var c = t;
      Y(e, o), o[c(910)] ? a[c(1198)]() : a[c(1162)]();
    }, get path() {
      var o = t;
      return e[o(1796)];
    } };
    if (n[t(441)] = n.addIssue[t(1748)](n), r[t(338)] === "preprocess") {
      const o = r[t(1009)](e.data, n);
      if (e[t(975)].async) return Promise[t(1890)](o).then(async (c) => {
        var u = t;
        if (a[u(2038)] === u(806)) return h0;
        const d = await this[u(1821)][u(1174)][u(2628)]({ data: c, path: e.path, parent: e });
        return d.status === "aborted" ? h0 : d[u(2296)] === u(1162) || a[u(2038)] === u(1162) ? Qe(d[u(2038)]) : d;
      });
      {
        if (a[t(2038)] === t(806)) return h0;
        const c = this._def[t(1174)]._parseSync({ data: o, path: e[t(1796)], parent: e });
        return c.status === t(806) ? h0 : c[t(2296)] === t(1162) ? Qe(c[t(2038)]) : a[t(2038)] === "dirty" ? Qe(c.value) : c;
      }
    }
    if (r.type === "refinement") {
      const o = (c) => {
        var u = t;
        const d = r[u(623)](c, n);
        if (e.common[u(2572)]) return Promise.resolve(d);
        if (d instanceof Promise) throw new Error(u(1443));
        return c;
      };
      if (e[t(975)][t(2572)] === !1) {
        const c = this._def.schema[t(1252)]({ data: e[t(1073)], path: e[t(1796)], parent: e });
        return c[t(2296)] === t(806) ? h0 : (c[t(2296)] === t(1162) && a[t(1162)](), o(c[t(2038)]), { status: a.value, value: c[t(2038)] });
      } else return this[t(1821)][t(1174)]._parseAsync({ data: e[t(1073)], path: e[t(1796)], parent: e })[t(432)]((c) => {
        var u = t;
        return c[u(2296)] === u(806) ? h0 : (c.status === "dirty" && a[u(1162)](), o(c[u(2038)])[u(432)](() => {
          var d = u;
          return { status: a[d(2038)], value: c.value };
        }));
      });
    }
    if (r[t(338)] === t(1009))
      if (e[t(975)][t(2572)] === !1) {
        const o = this[t(1821)][t(1174)][t(1252)]({ data: e[t(1073)], path: e[t(1796)], parent: e });
        if (!Ve(o)) return h0;
        const c = r[t(1009)](o[t(2038)], n);
        if (c instanceof Promise) throw new Error(t(2620));
        return { status: a.value, value: c };
      } else return this[t(1821)][t(1174)][t(2628)]({ data: e[t(1073)], path: e.path, parent: e }).then((o) => {
        var c = t;
        return Ve(o) ? Promise[c(1890)](r[c(1009)](o[c(2038)], n)).then((u) => ({ status: a.value, value: u })) : h0;
      });
    N0[t(1397)](r);
  }
}
qe[s(2196)] = (i, x, t) => {
  var a = s;
  return new qe({ schema: i, typeName: p0[a(1762)], effect: x, ...b0(t) });
}, qe[s(1789)] = (i, x, t) => {
  var a = s;
  return new qe({ schema: x, effect: { type: a(1642), transform: i }, typeName: p0[a(1762)], ...b0(t) });
};
class Se extends E0 {
  _parse(x) {
    var t = s;
    return this[t(337)](x) === e0.undefined ? re(void 0) : this[t(1821)][t(2593)][t(796)](x);
  }
  [s(1808)]() {
    var x = s;
    return this[x(1821)][x(2593)];
  }
}
Se[s(2196)] = (i, x) => new Se({ innerType: i, typeName: p0.ZodOptional, ...b0(x) });
class je extends E0 {
  [s(796)](x) {
    var t = s;
    return this[t(337)](x) === e0[t(1382)] ? re(null) : this[t(1821)][t(2593)][t(796)](x);
  }
  unwrap() {
    var x = s;
    return this[x(1821)][x(2593)];
  }
}
je[s(2196)] = (i, x) => {
  var t = s;
  return new je({ innerType: i, typeName: p0[t(2386)], ...b0(x) });
};
class Sx extends E0 {
  _parse(x) {
    var t = s;
    const { ctx: a } = this[t(1408)](x);
    let e = a[t(1073)];
    return a[t(2268)] === e0[t(1887)] && (e = this[t(1821)].defaultValue()), this[t(1821)].innerType[t(796)]({ data: e, path: a[t(1796)], parent: a });
  }
  [s(1064)]() {
    var x = s;
    return this[x(1821)][x(2593)];
  }
}
Sx[s(2196)] = (i, x) => {
  var t = s;
  return new Sx({ innerType: i, typeName: p0[t(2520)], defaultValue: typeof x[t(2641)] === t(1853) ? x.default : () => x.default, ...b0(x) });
};
class kx extends E0 {
  [s(796)](x) {
    var t = s;
    const { ctx: a } = this._processInputParams(x), e = { ...a, common: { ...a[t(975)], issues: [] } }, r = this._def[t(2593)]._parse({ data: e[t(1073)], path: e[t(1796)], parent: { ...e } });
    return px(r) ? r.then((n) => {
      var o = t;
      return { status: "valid", value: n[o(2296)] === "valid" ? n[o(2038)] : this[o(1821)][o(572)]({ get error() {
        return new ke(e.common.issues);
      }, input: e[o(1073)] }) };
    }) : { status: "valid", value: r.status === t(2538) ? r.value : this[t(1821)][t(572)]({ get error() {
      var n = t;
      return new ke(e[n(975)].issues);
    }, input: e.data }) };
  }
  [s(2227)]() {
    var x = s;
    return this._def[x(2593)];
  }
}
kx[s(2196)] = (i, x) => {
  var t = s;
  return new kx({ innerType: i, typeName: p0[t(2195)], catchValue: typeof x.catch === t(1853) ? x.catch : () => x[t(947)], ...b0(x) });
};
class Nr extends E0 {
  _parse(x) {
    var t = s;
    if (this._getType(x) !== e0[t(1999)]) {
      const e = this[t(2486)](x);
      return Y(e, { code: B.invalid_type, expected: e0[t(1999)], received: e.parsedType }), h0;
    }
    return { status: t(2538), value: x[t(1073)] };
  }
}
Nr[s(2196)] = (i) => new Nr({ typeName: p0.ZodNaN, ...b0(i) });
class Ls extends E0 {
  [s(796)](x) {
    var t = s;
    const { ctx: a } = this._processInputParams(x), e = a.data;
    return this._def.type._parse({ data: e, path: a[t(1796)], parent: a });
  }
  [s(1808)]() {
    var x = s;
    return this[x(1821)].type;
  }
}
class rr extends E0 {
  _parse(x) {
    var t = s;
    const { status: a, ctx: e } = this[t(1408)](x);
    if (e[t(975)][t(2572)])
      return (async () => {
        var n = t;
        const o = await this._def.in[n(2628)]({ data: e[n(1073)], path: e[n(1796)], parent: e });
        return o.status === n(806) ? h0 : o.status === n(1162) ? (a[n(1162)](), Qe(o.value)) : this._def[n(516)][n(2628)]({ data: o[n(2038)], path: e[n(1796)], parent: e });
      })();
    {
      const r = this[t(1821)].in[t(1252)]({ data: e[t(1073)], path: e.path, parent: e });
      return r.status === t(806) ? h0 : r.status === t(1162) ? (a[t(1162)](), { status: t(1162), value: r[t(2038)] }) : this[t(1821)][t(516)][t(1252)]({ data: r[t(2038)], path: e[t(1796)], parent: e });
    }
  }
  static [s(2196)](x, t) {
    return new rr({ in: x, out: t, typeName: p0.ZodPipeline });
  }
}
class Ex extends E0 {
  [s(796)](x) {
    var t = s;
    const a = this._def[t(2593)][t(796)](x), e = (r) => {
      var n = t;
      return Ve(r) && (r.value = Object[n(568)](r[n(2038)])), r;
    };
    return px(a) ? a.then((r) => e(r)) : e(a);
  }
  [s(1808)]() {
    return this._def.innerType;
  }
}
Ex[s(2196)] = (i, x) => {
  var t = s;
  return new Ex({ innerType: i, typeName: p0[t(2123)], ...b0(x) });
};
var p0;
(function(i) {
  var x = s;
  i[x(394)] = x(394), i.ZodNumber = "ZodNumber", i[x(2105)] = x(2105), i[x(1528)] = x(1528), i[x(2280)] = x(2280), i.ZodDate = x(566), i[x(2354)] = x(2354), i[x(1469)] = x(1469), i[x(914)] = "ZodNull", i[x(1092)] = x(1092), i[x(1736)] = x(1736), i[x(592)] = x(592), i[x(687)] = x(687), i.ZodArray = "ZodArray", i[x(894)] = x(894), i[x(726)] = x(726), i[x(872)] = x(872), i.ZodIntersection = x(2575), i.ZodTuple = x(1614), i.ZodRecord = x(1759), i.ZodMap = x(570), i[x(468)] = "ZodSet", i.ZodFunction = x(775), i[x(2293)] = x(2293), i[x(2204)] = x(2204), i[x(2067)] = x(2067), i.ZodEffects = x(1762), i[x(1477)] = x(1477), i[x(2232)] = x(2232), i.ZodNullable = x(2386), i[x(2520)] = x(2520), i[x(2195)] = x(2195), i[x(613)] = "ZodPromise", i[x(1442)] = x(1442), i[x(1840)] = x(1840), i[x(2123)] = x(2123);
})(p0 || (p0 = {}));
const S = we.create, t0 = We.create, x0 = Lt[s(2196)], D0 = Ht[s(2196)], sx = Ut.create;
Pe[s(2196)];
const zx = Vt[s(2196)], I0 = pe[s(2196)], I = K0[s(2196)], J0 = vx.create, $s = tr[s(2196)];
gx[s(2196)], Ae.create;
const H0 = yx.create, r0 = bx[s(2196)], F0 = De[s(2196)];
wx[s(2196)];
function Ix() {
  var i = ["hasPath", "[^0-9]", "ZodLiteral", "getNeighbors", "emit", "pipe", "cardinal", ` if (typeof item == 'string') item = '"' + item; `, "maxReplaces", "#33CC00", "Failed to check workflow changeTracker state:", "cacheKey", "{5}", "types", "defaults", "setupNodeBindings", " var startErrs", "shape", ".length == 1) { ", "fail", "邮箱: {{email}}", "getNode", ".schemaPath === undefined) { ", "maxProperties", "initialize", "removeCatch", "unsetOutgoingRequestInterceptor", "get", "usePattern", ` , message: 'should pass "`, "ZodOptional", "Save", "defaultError", "#/definitions/schemaArray", "locale", "#6600CC", ".async; ", "closeWorkflow", "subscribe", "customRule", "Enter Google API Key", "2.1.0", "postProcess", "[vV]", "multipleOf", "__nwjs", "click to restore", "regexpUnescape", ".dataPath === undefined) ", "boolean", "cancel", "longer", "enabled", "pendingCount", "favorites", "创建图层失败", "toStringTag", "Get pixel of {{0}} failed", " - no connection available", "var ", ") && (missing", "graphChanged", "ucs2length", "save", "Forbidden (403)", "overflow", "parsedType", "sdppp/streamResponse", "getItem", "true", "translate", "isObject", "missingKey", "yhd", "Resize document for preview", "maxLength", "$el", "Loading...", "ZodBoolean", "Sending all images...", "Get content of layer {{0}}", "$async", " Object.keys(", "time", "cloneInstance", "base64", "getSchema", "lte", "custom", " not found for node ", "Outgoing message:", "ZodLazy", "buildDirectedAdjacencyList", "exact", "status", "$comment", "&amp;", "_getInvalidInput", "createGlobalDispatcherForType", "Expected ", "observers", "listRoots", ".errors", "auth.guest_login_success", " = '' + ", "base64url", "' + ", "isInteger", "merge", "Not connected", " , params: { comparison: ", "#CCCC00", `"' `, "([+-]\\d{2}:?\\d{2})", "regexp", "logger must implement log, warn and error methods", "Server does not support resources (required for ", ") { if (vErrors === null) vErrors = ", "&#39;", "No active document", " = true; else if (!Array.isArray(schema", "widgetable", "retryTimeout", "_requestHandlers", " , params: {} ", "正在上传...", "#99CC33", "作为智能对象导入", "#CC0066", "logging", "schema id ignored", "parseMissingKeyHandler", "workflow", "从 选区 获取遮罩", "[i], ", "getProperty", "uri", "isOpen", "done", 'id "', " from id ", " ) || ", "[0-5]\\d", "ListFormat", ") == -1 ", "Failed to check workflow state changes:", "string", "api/view?type=", "Invalid attempt to destructure non-iterable instance", "ids", ".length > ", "unknown keyword: ", "ZodSymbol", "  if (!", " at one or more positions greater than or equal to ", "#9933FF", "defaultMeta", "{2})", " && !", "` could not be extracted from all schema options", "cimode", ".length; ", " = false; ", "未实现 (501)", " , message: 'can\\'t resolve reference ", "abortRequest", "#CC9900", " = undefined; ", "regExpQueue", "_addSchema", "dependencies", "no plural rule found for: ", "full", "onTimeout", "implementAction", "removeMiddleware", "startHeartbeat", "); if (!", "push", "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "missed to pass in variable ", "ltr", " ) {   ", "[ ]*{", "ZodNullable", "interpolate", "omit", "_unknown", "Click to get RunningHub APIKey", "broadcast", "buildAdjacencyList", "toJSON", "Send all", "int", "getLanguagePartFromCode", "filter", "resetTimeoutOnProgress", "hbo", "_compilations", "findIndex", "无法将文件作为文档打开: {{path}}", ")' returned an object instead of string.", "workflows", "querySelector", "keyPrefix", " is present' ", "registerProxyForwardHandler", "unknown", "documentElement", " , parentSchema: validate.schema", "getFallbackCodes", " = true; break; }", "rootData", "checkDataTypes", "compositeRule", "uiWeight", "valueSchema", "++) { var ", "jsonPointers", "PluralRules", "processCode", "shorter", "获取图层 {{0}} 的内容", "Meta-schema for $data reference (JSON Schema extension proposal)", "userinfo", "masks", "Get mask from Selection", " == 'function' ? ", "当前选区", "dir", "Error compiling schema, function code:", "safeParseAsync", "delete", "1631VwRMOC", "isBase64", "Uploading, if the image too large, may be stuck...", " = validate.schema", " , schema:  ", " } } else { ", "isBase64url", "Invalid JSON-pointer: ", "resource", "yds", "normalize", "auz", "schema should be object or boolean", '.schemaPath = "', "order", "invalid_union_discriminator", "toQuotedString", "isFinite", "Fit to selection", "sourceCode", " === undefined ", "#/definitions/nonNegativeIntegerDefault0", "elicitation/create", "forkResourceStore", "maxTotalTimeout", "NOT_PATH", "getTransport", "curlayer_selection", "ZodArray", "Cannot register capabilities after connecting to transport", "'/' + ", "Current layer bounds only", "getClientCapabilities", "debugDisableHeartbeatResponse", "; else vErrors = null; } ", "meta", "#0099FF", ") continue; ", "if (!", "rootId", "more than", "Create guide frame", ") break; }  ", "从 画布 获取图像", "other", "less than or equal to", "Current Tasks:", "Reverse", "reduce", "#CCCC33", "schemaExcl", "_getOrReturnCtx", "/*# sourceURL=", "unsetOutgoingNotificationInterceptor", ", schema", "errorDataPath", "debug", "rtl", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "markConnected", "PCT_ENCODED", "更多操作", "reloadResources", "getHandler", "execution_interrupted", "email", "label", " && !Array.isArray(", " ) : ( (", "minute", "findPath", "graph", "Failed", "sdppp/abort", "'then'", " !== undefined) {  ", "suffix", "Exclude current layer", "joinArrays", "fragment", "join", "audio", "weeks", "#33CCFF", "ComfyManager not found, cannot reboot", "ZodDefault", "isFinite(", "warning", " }  ", "作为新文档导入", "388930SUpJNd", "react", "~validate", "formData", " if (!(await ", "Core schema meta-schema", "propertyNames", "failed parsing options string in nesting for key ", "#FF9933", "layer not found {0}", "输入图像", "setupGeneralBroadcastHandler", "max", "valid", "validateStreamRequestorRequest", "ASCII", " } }", "Model with affordable price, abundant community applications", " try { await ", "nestingSuffix", "2.0", "needsPlural", "#00CC00", "Your powerful node-based workflow engine", "_path", " validate.errors = [", "ayn", "heartbeatInterval", "Connection closed", "nestingOptionsSeparator", " + '", "catchall", "setupGraphStoreSync", "bbz", "datetime", "postProcessPassResolved", "has", "broadcastCurrentState", "hasAction", "ValidationError", "findPathInternal", "{1,4}", "运行了 {{duration}} 秒，{{message}}", "#/definitions/nonNegativeInteger", "找不到图层: {{0}}", "ComfyUI server reconnecting", "markDisconnected", "async", "maxValue", "objectKeys", "ZodIntersection", "additionalProperties", "; if (", "ayp", "invalid_arguments", "domainHost", "_clientCapabilities", "3rdParty", "resolvedLanguage", "default is ignored in the schema root", "#33CCCC", "   ", ") {  for (var ", "checkState", "renderer", "{0,1}", "nullish", "\\$&", "innerType", " = ''; ", "Invalid function return type", "forwarded", "iterator", "responseSchema", "expected", "now", "assertRequestHandlerCapability", "index", "Array.isArray(", "days", "keywords", "fromCharCode", "String must contain ", "apc", " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ", "getPathExpr", "#CC9933", "serialize", "].propertyName = ", "Failed to send cancellation: ", "Server does not support notifying about resources (required for ", "addMetaSchema", "load", "sourceType", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", " === undefined || ", "accept", "_opts", "success", "Keyword ", "headers", "Gemini 2.5 Flash 图像", "_parseAsync", "))))) {", "newlayer_curlayer", "Server does not support notifying of tool list changes (required for ", " if (errors === 0) return data;           ", "sdppp-heartbeat", "#3399FF", "从 当前图层 获取遮罩", "nestingRegexp", "requestInitialStateForNode", "seconds", " = await ", "More actions", "default", "unescapeComponent", "util", "getValidEnumValues", "local", "registerDirectRequestHandlerGeneric", "inlineRef", "\\:\\:", "errToObj", "storage", " === 1) ", "spa", "valueOf", ") {   ", "removeAdditional", " = false; else {", "strictDefaults", "newlayer_canvas", ", rootData)  ", " = typeof ", "heartbeatTimeoutTimer", " var err = ", " } else {  errors = ", "compiling", "mergeObjectAsync", " === undefined) ", "hasRequestHandler", ") && ", "fallbackNS", "Select boundary", "_timeoutInfo", "zero", "#FF3333", "&quot;", "hasDefaultValue", "missingSchema", "[\\+\\-\\.]", "isInitialized", "unknownFormats", " if (! ", '"failed to compile', " == errors) { ", "executeHandlerAsync", "Task cancelled", "AbortSignal is already aborted", "errSchemaPath", "failing", "#66CC33", "greater than ", "_schemas", " }; return validate; ", "Cloud:", "ruleErr", "mode", "stats", "exists", "extendTranslation", "http://json-schema.org/draft-07/schema#", "notice", "Unknown", "[^]", "获取选区失败", " == null) ", " = false; else if (", "Task incomplete, current status: {{status}}", "schemas", "Generating", "missingKeyHandler", "getRule", "languageChanged", "execution_success", "{0,6}", " % 1)", "_meta", " validate.errors = vErrors; return false; ", "validate", " instanceof RegExp) && ", "select", "unsetRequestHandler", "调整预览文档尺寸", "No linked layer for {{0}}", "ctx", "JWT", "setNotificationHandler", "_getType", "type", "nest", "[GraphStoreSynchronizer] Error processing store update for ", "  var err =   ", "Get image from Canvas", " = true; } else { ", "title", "Please select the mask to get", "oninitialized", "getNodeTitle", "交集或缩放目标为空", "显示发送的图片", "_options", "ydd", "lowerCaseLng", "50uMyCfy", "implementInternalAction", "跳转到最后一个", "bigint", "if ( ", "iri", "mcp-mesh-router", "hours", "typeof ", "设为当前选区", "en-US", "_resetTimeout", " && Object.prototype.hasOwnProperty.call(", "addMiddleware", "ayh", "反向裁剪", "获取 API Key", ".dataPath = (dataPath || '') + ", "initialState", "originalError", "_regex", "Username: {{username}}", " if (!", "curr", '" is used in schema at path "', "tolerant", "lngs", "(\\.\\d+)?", '";  ', "执行失败", "_onerror", "keyof", "convert widget {0} failed:", "anyOf", "每批图像数", " || ", "stateUpdate", "substr", "validation", "addNamespaces", "logging/setLevel", "ZodString", "if (", " , params: { allowedValues: schema", "整个画布", " for nesting ", "languageOnly", "useRawValueToEscape", "invalid_enum_value", "Prompt", "partial", "$dataMetaSchema", "xmn", "+Shift 单次获取", "CurLayer", "Success", "lazycreate", "$schema must be a string", "sdppp/streamRequest", "parseInt", "_notificationHandlers", "isClone", "count", "如何获取APIKey", "Document {{0}} not found", "__internal_requestInitialState_", "WARNING DEPRECATED: ", "subfolder", "refVal", "[^\\%\\/\\@]", "_cached", "curlayer", "Boundary", "=0; ", "模型物美价廉，海量社区应用", "Rectangle coordinates required for create action", "Cloud-based model service platform", "网关超时 (504)", " Math.abs(Math.round(division", "then", "Converting circular structure to JSON", "sqr", "无法打开图像文件: {{error}}", "reconnecting", "$id", "生成中", "skipKeywords", "round", "addIssue", "找不到文档: {{0}}", "cancelled", "Array must contain ", "less than", "entries", "Show Preview ({{count}} images)", "else", "coerceToTypes", "formatters", "req_", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", "charAt", ".patternProperties", "[\\@]", "loopRequired", "生成中...", "_getId", "get_layer_info: layer_identify required", "Creating task...", " !== ", "getResource", "run", "output", "shu", "errs_", "startsWith", "ZodSet", "partialBundledLanguages", "pick", "IPV6ADDRESS", "Unknown error ({{code}})", "prompt_ids: ", "__internal_", '[\\"]', "Google Gemini 图像生成器", "Stop and cancel all", "processors", "_getCached", "清除参考线框架", "How to get APIKey", "loadGraphData", "canReachThroughConnectedNodes", "strictKeywords", "remove", "输入设置", 'custom keyword "', "nonExplicitSupportedLngs", "argumentsError", "{2}", "]] !== undefined ", "mesh:workflow", "reference", "请选择要获取的图像", "waiters", "assistant", ".validateSchema(", "Please select the image to get", "); errors = vErrors.length;  for (var ", "void", "yih", "readOnly", "error", "useDefaults", "augment", "unescapePrefix", " is already defined", "unescapeSuffix", "more", "setOutgoingNotificationInterceptor", " , schemaPath: ", ") {  ", "var refVal", "#FF0033", "sdppp_workflow_alias", "out", "Invalid name: {{0}}", "not", "prepend", "wss", "getDataByLanguage", "toFixed", "abortAllRequests", "postMessage", " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ", "absolutePath", "running", "parent schema must have all required keywords: ", "sdppp/broadcast", "Received a response for an unknown message ID: ", "substring", '" for languages "', "performWorkflowReset: ", " == 'number' ? ( (", "process", "usedLng", "InternalError", "[object Number]", "Clear all", "getBestMatchFromCodes", "', depsCount: ", "createInstance", "typ", "&#x2F;", " == ", "[A-Za-z0-9\\-\\.\\_\\~", "/type", "cuid2", "minLength", " var vErrors = null; ", "getNodeIds", "#FFCC00", "includes", "此处粘贴 WebApp ID", "disconnect", "interpolator", "executed", "[\\:\\/\\?\\#\\[\\]\\@]", "Select AI Service Provider", ";  ", "粘贴你的模型名称", "prev", "_limitProperties", "workflow-run", "strict", "ZodDate", "color: inherit", "freeze", "is an invalid additional property", "ZodMap", "pluralCategories", "catchValue", "Enum", "saveMissing", "setupStreamProtocolHandlers", "throwIfAborted", "批次数量", "stopAll", "openWorkflows", "namespace", "reason", " = 'else'; ", "prompt_id", "week", " ms", "getStats", "changeTracker", "加载中...", "auto", "not_multiple_of", "default is ignored for: ", "ZodNever", "app.queuePrompt caught", " division", "海量模型，稳定服务", "[GraphStoreSynchronizer] Error broadcasting state update for ", " if (true) { ", "; if (vErrors !== null) { if (", "constructor", "jsonStringifyReplacer", "heartbeatTimer", "Jump to last", "nodeIndexes", "alwaysSet", "applyPostProcessor", "_addCheck", "424825zqgWaG", "actionManager", "#00CCFF", "/additionalProperties", "Inpaint (reverse crop)", "async format in sync schema", "ZodPromise", "invalid-input", "dataVar", "uuid", " , data: ", "strictCreate", "创建操作需要矩形坐标", "#0099CC", "widgets", "interpolationkey", "refinement", "_loadingSchemas", "skipInterpolation", "toHash", "cmp", "__proxy_forward", "_instructions", "\\' is invalid' ", "color: ", "map", "symbol", "Clear", "invalid_type", "empty", " === null) ", "initializeResponseQueue", "isNANOID", "decline", "#CC3399", "getState", ".call(this, ", "connectionManager", " , message: 'should be equal to constant' ", " && self._opts.unknownFormats.indexOf(", "sendPromptListChanged", "images", "Method not found", "MiddlewareError", "init: i18next is already initialized. You should call init just once!", "nestingPrefix", "sdpppX2", "exclusiveMinimum", "put", "received", "Batch Count", "manuallyExtractDefaults", " = true; else if (typeof ", "[BroadcastManager] Error forwarding ", ", limit: ", "#FF0099", "broadcastReceived", "; } ", "rejecting language code not found in supportedLngs: ", "Please select AI service", "(new RegExp(", "getFixedT", "del", " = equal(", "host", ".length , ", "channel", "([01]\\d|2[0-3]):[0-5]\\d(:", "addEventListener", "[A-Za-z]", "jwt", " === null || (", "reset", " ) ", " if (Array.isArray(", " var ", "MCP error ", "selection", "Email: {{email}}", "ConnectionClosed", "ZodVoid", "strip", "setupAbortHandler", "next", "arrayToEnum", "]; ", " for (var ", "promise", ".validate;", ")) {  ", "race", "cleanCode", "hasNotificationHandler", "implements", " = [", "getNodeStore", "removeRequestHandler", "defaultValue", "###", "sendLoggingMessage", ", received ", "Note", "Set text to layer", "_onprogress", "addResourceBundle", " ) { ", "执行成功", "setPrototypeOf", "heartbeatTimeout", "extendRefs", "} else {  errors = ", "too_big", "nodes", "escapeValue", "addMessageEventListener", " , params: { passingSchemas: ", " / ", "newlayer_selection", "idx", "ZodUnion", "No Intl support, please use an Intl polyfill!", "updateMissing", " = ", "Execute", "abv", "sampling/createMessage", "code", "zh-CN", " var i = ", "getDefinition", " if ( ", ") vErrors.length = ", "setComfyOrgAPIKey", "assign", " == 'object' && Array.isArray(", "keySchema", "#9900CC", "coerceTypes", "registerCapabilities", "0?[1-9]", "contains", "mountedTransports", "schema $id ignored", "Invalid discriminator value. Expected ", "def", "PS shortcuts may be blocked by plugin...", "getCurrentNodeId", "Layer {{0}} is not a group", " !== undefined ", "apply", "sourceNodeId", "isEmpty", "sort", "initialized", "shift", "passingSchemas", "saveMissingPlurals", "$schema", " for interpolating ", "Invalid ", "customRules", "setupStreamResponseHandler", "isPersisted", " to ", "ajp", "Workflow not found", ` + '" schema' `, "ESCAPE", "ZodFunction", "基础 URL", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "options", "coerce", "uxp", "hasOwnProperty", "token", "hour", "非法的名称: {{0}}", "任务执行失败: {{error}}", "addLookupKeys", " outer: for (;i--;) { for (j = i; j--;) { if (equal(", " , message: 'should NOT be valid' ", "prompts", "Running for {{duration}} seconds, {{message}}", "当前图层范围", "right", " throw new ValidationError(vErrors); ", "getSuffix", "validateSchema", "_parse", "No crop", "ifClause", "isValidLookup", " var schema", "getter", ") > 1e-", "broadcastHandlers", "exec_info", "lastIndex", "aborted", "isInt", "optionsMap", "cidr", "maxTokens", "invalid_intersection_types", "Invalid boundary: left must be less than right, top must be less than bottom", "Workflow stopped by user", " = false; if (e instanceof ValidationError) ", "setter", "resources/subscribe", "params", "isDuration", "refs", "hasOutgoingNotificationInterceptor", "unshift", "Back", ".data = ", "nodeTransports", "context", "服务不可用 (503)", "Create document failed", "  )  ", "messageType", "+Alt 按选区裁剪", "indexOf", " than ", "comfy-user", "fullFilename", " === false) ", "exactLength", "Action {{0}} not found", " properties' ", "extensionManager", " } else { ", "unicodeSupport", "isEmail", "resources/list", "not-basic", "property ", "utils", "暂无图片", "required", "requestInfo", "正向裁剪", "requestHandlers", "detectCycles", "range", "请选择要获取的遮罩", "splice", "test", "Input Image", "setInterval", "Server does not support logging (required for ", "assert", "maxRetries", "notifications/cancelled", "fromCodePoint", "Press Enter to open app: {{appName}}", "errorHandlers", "resources/read", "__DEFAULT__", "user", "should NOT have additional properties", "Maximum total timeout exceeded", "230856yNZybf", "ZodDiscriminatedUnion", "_clientVersion", "body", "fewer", "Content", "definitions", "; if (!", "=== 选项 ===", "当前图层除外", "Current layer bounds", "获取结果失败: {{error}}", "reset=false but needsReset: ", "roots", "comfy-entry", "#3333FF", "currentOnly", "ZodError", "Error", "Values", "comfyAPI is not initialized, maybe comfyUI is too old", "setState", "integer", "ZodObject", "getSuffixes", "pctDecChars", " && ( ", "_cleanupTimeout", " , params: { i: i, j: j } ", "  for (var ", "notifications/progress", "trim", "skipCopy", "Save all", "formatParams", "languageDetector", "flags", "Unknown message type: ", " = e.errors; else throw e; } ", "fatal", " delete ", "greater than or equal to ", "pctEncChar", "ZodNull", "safeParse", "+Shift 调整更多选项；Ctrl 单次获取。", "store", "exec", "schemaId", "; } catch (e) { ", "[0-9A-Fa-f]", "lastPongReceived", "forwardBroadcast", "ulid", "formatLanguageCode", "#6633FF", "var pattern", "pga", " if (typeof itemIndices[item] == 'number') { ", "Cannot access data ", "failed", "pop", "pluralSeparator", "capabilities", "isUUID", "negative", "floor", "Clear guide frame", "app", "name", "' : '", "msec", "#FF3399", ".type", "resetRegExp", "mins", "catch", "适配至选区", "apd", "men", "__esModule", "cycles", "' , dataPath: (dataPath || '') + ", "registerStreamRequestorHandler", "parseAsync", "endsWith", " = false; else { ", "Sending...", "assertCanSetRequestHandler", "number", "Get API Key", "schema is invalid: ", " items' ", "PS图片", "addRule", "languageUtils", "prefix", " = true , j; if (i > 1) { ", "patternProperties", "getRegExp", "Gateway timeout (504)", "toLoad", "]; return false; ", "contentMediaType", "common", "outgoingNotificationInterceptors", "isNullable", "comfy", "relativetime", "send", "maximum", "allOf", "_setupTimeout", "parentData", "resources/templates/list", 'Invalid input: must include "', "#9933CC", "prevValid", "(typeof ", "stringify", " = +", "#00CC66", "/properties", "regex", "over", "signal", ";if (", "Sending image...", " , message: 'should contain a valid item' ", "segment", " | ", "exactly equal to ", "json", "backend", "extra", "createStreamState", " break; ", "nanoid", "transform", "Client does not support elicitation (required for ", "hasLanguageSomeTranslations", "1803402LWSLVv", " character(s)", " for language ", "请登陆后使用插件", "从 当前图层 获取图像", "async schema in sync schema", "; }", "Download", "pluralRulesCache", "sdppp_widgetable_title", "sec", '" was not yet loaded', "Auto run after canvas change", "[i]; ", "scheme", "image", "missingRefs", "second", "removeNotificationHandler", "detail", "nonnegative", "silent", "createTemporary", "handle", "alg", "assertEqual", "selectColor", "Failed to get result: {{error}}", "keys", "padEnd", "init: no languageDetector is used and no lng is defined", "enable", "queue_remaining", "Failed to request initial state for ", "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "executeOutgoingRequestInterceptor", "escapeComponent", "syncStoresToNewConnection", "Node not found", "isCUID2", "smartobject", "enum", "DEBUG", "gte", "#99CC00", "messages", "mergeObjectSync", "cacheInBuiltFormats", "toASCII", "prepareLoading", " == 'boolean') ", "resourceStore", "removeDefault", "graphInstance", "size", "dev", "Required", "messagePoster", "No backend was added via i18next.use. Will not load resources.", "emoji", "_refinement", "data", "removeItem", "assertNotificationCapability", "image.document.new", "false", "messageQueue", "workflowManager", "[j])) { ", "_requestMessageId", "_limitItems", ` , message: 'should match "' + `, "Overflow: input needs wider integers to process", " after ", "Running", "inline", "waitingReads", "_key", " has duplicate value ", "nodeStores", "ZodAny", "/patternProperties/", "jpr", "buffer", "options.loadSchema should be a function", "pluralResolver", "version", "should have required property \\'", " = errors;", "updateKey", "exactly", "yud", "SDPPP可能未安装或和插件版本不匹配 (404)", "#FF6633", " , params: { multipleOf: ", "Disk", "选择 AI 服务提供商", "无效边界: 左边必须小于右边，上边必须小于下边", "请输入您的 Google API Key", "=startErrs", " = !(false ", ".hasOwnProperty(", "queueLoad", "positive", "returnNull", "addIssues", "文件未找到: {{path}}", "Delete current", "Request interceptor failed for ", "Quality {{percent}}%", "Request handler failed: ", "key '", "ref/prompt", "messageHandlers", "Not a ZodError: ", "cleanupConnection", " === 0 || ", "A request handler for ", "_errors", "RequestTimeout", "目标边界为空", "log", "resolvedOptions", "InvalidRequest", "\\.\\d{", "]; } else { ", " if (", "Failed to create document from file", "getCapabilities", "#CC0033", "missed to resolve ", "#0066CC", "under", "requestsHandled", "'[' + ", "from", 'unknown format "', "从文件打开图像", " , schema: validate.schema", "returnDetails", " == 'boolean' || ", "verbose", "isDatetime", "humanize", " = undefined;", "compile", "Waiting in queue", "_requestHandlerAbortControllers", "未知错误（{{code}}）", "services", "dirty", "{0,4}", " , message: 'should be equal to one of the allowed values' ", ", validate.root.schema);", "openWorkflow", "#FF00CC", "syncWorkflows", "abh", "escapeFragment", "Failed to open file as document: {{path}}", "isNotification", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", "schema", "exports", "#0066FF", "ComfyUI加载失败，HTTP状态码：{{code}}", "strictNumbers", "_limit", "' && !(typeof ", "postProcessor", "callValidate", "schema $id is different from id", ".schema = ", '" resolves to more than one schema', "posterIdentifier", " === '' || ", "errors", " should be boolean' ", " if (errors === ", "invalid_string", " reference.", " must be number or boolean", "exclIsNumber", "mergeShapes", "No connection available for node ", "env", "abort", "externalListenMessageCallback", "hasLoadedNamespace: i18next was not initialized", "Validation", " || ! Object.prototype.hasOwnProperty.call(", "extractFromKey", "absolute", "describe", "fullPath", "readonly", "filename", "logout", "如何获取APIKey和API Secret", "$$$$", " console.log(", "extract", "queue", "maxSize", "at least", "http://json-schema.org/schema", "setKey", "color", "[^\\%]", " , message: 'should be ", "forEach", "getTime", "Gateway error (502)", "invalid_date", "Unrecognized key(s) in object: ", " == 'object' && !(", " === false || ", "_cache", "isNaN", "lastIndexOf", "Error handling incoming message:", "finite", "stream", "useCustomRule", "after app.queuePrompt errors: ", "kPanelBrightnessMediumGray", "logger", " return errors === 0;       ", "Action ", "]; }  ", "Paste WebApp ID here", "initializeNodeStores", "'].definition; var ", "formatSeparator", "finished", "2025-06-18", "content", "#CC00CC", ", deps: '", "Node definition not found for ", "_parseSync", "Create document for preview", "http", "clearItems", "); if (", "RelativeTimeFormat", "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ", "resolveRef", "Task execution failed: {{error}}", "document {0} not found", " == 'string' || ", "loadResources", " { keyword: '", "重启ComfyUI失败", "removed", "and", "_errorDataPathProperty", "Server error (500)", "Selection", "2690457bFjuYt", "Error in direct request ", "正在等待图片上传...", "sdppp/directRequest", "waiting for queue prompt", "arz", "#/definitions/stringArray", "separator", "nonpositive", "disable", " : ", "can't resolve reference ", "createAsyncIterator", "defaultNS", "optional", "translation", "too_small", "Invalid date", "unrecognized_keys", "authInfo", " , schema: ", " ); if (isAdditional", "removeEventListener", "Invalid enum value. Expected ", "McpError", "ignoreJSONStructure", "#3300CC", "returnedObjectHandler", "varReplace", "prp", "appendNamespaceToMissingKey", "usedKey", "getDefaultValueFromField", "isCIDR", "deprecate", "one", " != 'boolean' && ", "forward", "ComfyUI failed to load, HTTP status code: {{code}}", "addResource", "getRunningRequestsCount", "创建预览文档", "uri-reference", "errs__", "array", "useDefault", "仅选区范围", "const", "propsKeywords", "languageChanging", "ZodNumber", "objectValues", "relative-json-pointer", "sessionId", "parse", "Intersection results could not be merged", ".validate; var ", "Cannot forward to node ", "item", "namespaces", "edges", "http://json-schema.org/draft-07/schema", "handleIncomingMessage", "         , parentSchema: validate.schema", "[^\\%\\[\\]\\:]", " != 'boolean') ", "fast", "])) { ", "port", ".call( ", " !== undefined && typeof ", "add", "[\\-\\.\\_\\~]", "isIP", "translator", "setOutgoingRequestInterceptor", "Invalid function arguments", "asyncIterator", "notifications/prompts/list_changed", "schemaPath", "day", "disconnected", "ComfyUI loading...", "RH Coins:", "concat", ", '", "No handler for streamRequestor: ", "pending", "fromNode", "mountTo", "cleanup", "Incoming message:", "nodeId", "%[EFef]", "missingInterpolationHandler", "No edge defined from ", "sendResourceListChanged", "[\\:\\@\\/\\?]", "extend", "+Alt 反转遮罩", "isTime", "store:update:", "some", "usedParams", "NumberFormat", "res", "prompts/list", "parentElement", "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", "Server does not support sampling (required for ", " ( ( ", "null", "loaded", "dataProperties", "Synchronous parse encountered promise.", "HeartbeatTimeoutError", "[\\:\\@]", " not found on node ", "Number must be a multiple of ", "正在创建任务...", "Number must be ", "inlineRefs", "there was no format function for ", "Failed to open image file: {{error}}", "给发送的图片创建文档", "roots/list", "assertNever", "_capabilities", "source", "cacheUserLanguage", "notifications/message", "#00CC99", "sendStreamRequestorRequest", "arq", "%c ", "[0]; ", "isRoot", "_processInputParams", "[\\:]", ") { errors = ", "examples", ") ) {   ", "localRefs", "getConnectionCount", "_formats", "__proto__", "Close", "obj", "reconnected", "shared", "#0033FF", "tools", "没有活动文档", "resource_link", "keyword schema is invalid: ", "#33CC33", "MethodNotFound", "Get layer info", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (", " != 'number' || ", "detect", "sampling", "transport", "Comfy.userId", "isArray", " self._opts.$comment(", "acq", "mesh:comfy", 'schema with key or id "', "Entire Canvas", "Set as Current Layer", "ZodBranded", "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.", "preload", "Uploading...", "-arab", "Elicitation response content does not match requested schema: ", "init", "getPath", "protocol", "invalid_literal", " else if (", " , params: { pattern:  ", "反向裁剪(Inpaint)", " = refVal[", "#CC33FF", "minItems", " in ", "backendConnector", "colors", "Uncaught error in notification handler: ", "connectedNodes", "pathname", "i18next:", " != 'string') || ", "./api/userdata/workflows%2F.index.json", "Comfy Manager未安装，无法重启", "coerced", "ZodUndefined", "; }   var err =   ", " !== undefined) ; ", "Host's domain name can not be converted to ASCII via punycode: ", "sam", "nss", '$ref: validation keywords used in schema at path "', "Channel connecting...", "ZodNativeEnum", "onprogress", "handleIncomingRequest", "start", "<errors; ", "i18nFormat", "INTERCEPTOR_ERROR", "aeb", " = errors === errs_", "acm", "_validateKeyword", "at most", "notifications/roots/list_changed", " , ", "Invalid graph definition: ", "_serverInfo", " == errors) {", "质量{{percent}}%", "kind", "Set as Current Selection", "avl", " var errors = 0;     ", "Source", "resources/unsubscribe", " + '\\']'", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ", "ownProperties", " }   ", " = true;", "Invalid input", "+\\.", "~standard", "use", "; var ", " , message: 'should NOT be ", " + ", `" won't get resolved as namespace "`, "skips", "exclusiveMaximum", "fallbackNotificationHandler", " = errors; var ", " === '' ", "Paste your model name", "isOptional", " , message: 'should NOT have ", "pong", '" already exists', "min", "reload", "inclusive", "createMessage", "ZodBigInt", "新图层", " , params: { property: '", "oneOf", "A discriminator value for key `", "var missing", "Host's domain name can not be converted to ", "continueOnInterceptorError", "prs", "nid", "; else vErrors = null; }", "适配至画布", ") {   var err =   ", "registerHandler", "nodeProxies", "画布范围", "prompts/get", " !== parseInt(division", "Generating...", "call", " = 'then'; ", "mountedEndpoints", "invalid_union", "Client does not support sampling (required for ", "uniqueItems", "#FFCC33", '"object"', "setWidgetValue", "_onclose", "1.0.0", "获取像素失败: {{0}}", "Shortcut selection feature requires login", " element(s)", "Save and run immediately", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, "alwaysFormat", "added", "requestId", "alert", "element", "getAllReachableNodes", "supportedLngs", "subject", "./sdppp-custom.js", "toUnicode", "ssh", "#FF33FF", "emergency", "#CC6633", " = vErrors[", "2[0-4]", "tDescription", "abs", "listWorkflows", "date", "/required", "No first related layer in {{0}}", "_compile", "parentDataProperty", "urn", "timeout", "Invalid", "multipleOfPrecision", "Canvas", "ping", "validateKeyword", "Received a progress notification for an unknown token: ", "任务取消失败: {{error}}", "customErrors", ") { ", "createErrors", "从 画布 获取遮罩", " cannot be resolved", "exception_message", "24aMQGoy", "hasResourceBundle", "info", "#FF6600", "#0000FF", "adf", " , params: { missingProperty: '", "nonempty", "thisServer", "requestIdSeq", " ( ", "setDefaultNamespace", "ZodTuple", "#FF9900", "图层 {{0}} 不是一个组", "fallback", "capacity", "escapeQuotes", "任务已取消", " } else if ( ", "varOccurences", "Select layer", "level", "ordinal", "toUpperCase", "executeOutgoingNotificationInterceptor", "invalid_return_type", "loadOne", " || Object.keys(", ") - division", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", "endTurn", "api", "__connection_established", "offset", "async keyword in sync schema", "setupTransportHandlers", "快捷键选图功能仅登陆后可用", "workflows/", "ref/resource", "preprocess", "rules", " */", "text", "SDPPP may not be installed or version mismatch (404)", "loadLanguages", "Failed to send response: ", "connect", "changeLanguage", ") { for (var ", "closeHandlers", "getDefaultValuesFromSchema", "acx", "notificationQueue", " } } ", "interceptorTimeout", "request", "diff", "loadSchema", ") ? ", "?\\]?$", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "ajv", ") { var op", "find", "ignore", " , message: '", "正在发送图像...", "position", "#3366CC", "[0-9]", "setResolvedLanguage", "{0,3}", "dataLevel", "notification", "userDefinedNsSeparator", "Current Layer", ", received '", " = 0; ", "Mask", "Get selection failed", "#3399CC", "float", "passthrough", ") ) ", "' } ", "addFormat", "loadNamespaces", "zod", "normalizeId", "acw", "activeWorkflow", "AUTO", "sdk", "properties", "xaa", "widgetableStructure", "arrayKeywords", "_responseHandlers", " is loaded but ", "#66CC00", "schema id must be string", "file://", "Validation failed but no issues detected.", "Not implemented (501)", "notificationHandlers", "activeState", "2024-10-07", "#FF33CC", "resolveComponents", "clientInfo", "getConnectionInfo", "nsSeparator", "getTransportToNode", "connected", "提示词", "userDefinedKeySeparator", "]); ", "New Layer", "appendNamespaceToCIMode", "missing", " , params: { limit: ", "Request timed out", "Plugin window focused required to use keyboard shortcut", " } else {  for (var ", "encountered", "getUsedParamsDetails", "issues", "queuePrompt", "/additionalItems", ") break; ", " || validate.schema", "refine", "25[0-5]", "ZodUnknown", "dataPath", "#/definitions/simpleTypes", "Timeout", "#9900FF", "addUsedSchema", "$t(", "schemaHasRules", "创建文档", "initializedStoreOnce", "清空所有", "合并组失败", "bind", "点此获取RunningHub APIKey", "resources", "execution_error", "notifications/initialized", "copy", "+Shift to fetch once", "left", "validation failed", "skipOnVariables", "image.layer.smart_object", "ZodRecord", " && ", " var errs_", "ZodEffects", " not found in graph definition", "fallbackRequestHandler", "initializeProducer", "handleAsObject", "组 {{0}} 中没有第一个相关图层", "当前任务数:", "unsetNotificationHandler", "]; if (", "#00CC33", "schemaUnknownRules", " === 'false' || ", "Send to PS", "_transport", " , schema: false , parentSchema: validate.schema", "(.+?)", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "secure", "connecting", "comfy_api_key", "effect", "sendToolListChanged", "正在发送...", "async schema referenced by sync schema", "Your Workflows", "exclude", "errorMap", "createWithPreprocess", "minValue", "statements", "uiWeightSum", "  } ", "return", " validate.errors = null; return true; ", "path", "warn", "[object RegExp]", "_pendingDebouncedNotifications", "contentEncoding", " if (rootData === undefined) rootData = data; ", "NOT_USERINFO", "not_finite", "_cachedPath", "canvas", "result", "setupStreamRequestHandler", "unwrap", "通道连接中...", "key", "withTimeout", "Notification interceptor failed for ", "slice", " ? '", "Generate", "properties ", "finally", '" as the namespace "', "macro", "var default", "_def", " = defaults[", "errorsText", "checkDataType", " , params: { type: '", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "addSchema", ` , message: 'should match pattern "`, " = customRules[", "Gemini 2.5 Flash Image", " != 'number') || ", "initializeConsumer", "#CC0000", "simpleTypes", "formatType", " === null || ", "rest", " = errors;var ", "resourceName", "ZodPipeline", "addKeyword", "state", "  }  ", " = true; ", "ComfyUI加载中...", "uiLocale", " when property ", "minimum", "MissingRef", "_error", "valueType", "brand", "function", " = true; if (", "getConnectedNodeIds", "exclType", "_exclusiveLimit", "请选择AI服务", "Open images from file", "#33CC99", "peo", "&gt;", "action", "getProtocol", "onerror", " else { ", "language", "isSupportedCode", "#0000CC", "timestamp", "ary", " = null;", "realTransport", "currentNodeId", "#FF3300", " == 'number' || ", "++) if (equal(", "NOT_HOST", "clone", "baseId", "  errors = ", "root", " throw new ValidationError([", "Confirm", "streamRequestorHandlers", "precision", "undefined", "notifications/resources/list_changed", "Internal error", "resolve", "destroy", "toString", "resolveRunImages", " , params: { keyword: '", "payload", "Run", "all", "#CC00FF", "newdoc", "_refs", "minProperties", "You must pass an array of schemas to z.tuple([ ... ])", "Server does not support prompts (required for ", "json-pointer", " = errors;  ", "_onnotification", "defineProperty", "#6600FF", "4168fRuMZi", ".test(", "_metaOpts", " , message: 'should have ", " < ", "setLimit", "origin", "SCHEMES", "[\\uE000-\\uF8FF]", 'Invalid input: must start with "', "keyword", "Layer not found: {{0}}", "method", "regExpMap", "object", "Get mask from Current Layer", "|0?0?", "cuid", "_fragments", "table", "快捷键选图功能仅在插件窗口聚焦时可用", ".length ", "ParseError", "root.refVal[0]", "isTop", "InvalidParams", "Error in broadcast handler for ", "当前图层", "++) { if (", "请输入您的Replicate API Key", "NOT_QUERY", "/%2F", "description", "90759BOdMet", "timeoutId", "仅当前图层范围", "#6633CC", "equal", "superRefine", "opts", "is a required property", "curlayer_canvas", "set", "errorPath", "HTTP URIs must have a host.", "isRequest", " }; return validate;", "hasLoadedNamespace", "readingCalls", "Email address's domain name can not be converted to ", "Module", " != 'number') { ", " , validate.schema", "streamRequest", "Intersect or scaledDesire is null", "IPV4ADDRESS", "url", "_progressHandlers", "allServers", "发送所有", "queues", "Invalid action: {{action}}", "30DOTIwu", "适配至当前图层", " , params: { allowedValue: schema", "限制图片尺寸", "comfyAPI", "reverse", "nullable", "Show sent images", "every", " levels up, current level is ", "keySeparator", '" (see option extendRefs)', "setRequestHandler", "#CC3333", "); for (var ", "画布变动后自动运行", "photoshop.no_active_layer", "Tutorial", " failed", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", "toLowerCase", "Remote", "aao", "_limitLength", "read", "flatten", ".length <= ", "App ID:", "nan", "outgoingRequestInterceptors", "Request timeout (408)", "transports", "duration", "按回车打开应用： {{appName}}", "mesh", "Failed to send an error response: ", "maxParallelReads", "getHandlerTypes", ")) ", "未授权 (401)", "MissingRefError", "validate.schema", "No store found for node ", "precheck", "$ref", "; else if (", " = false; for (var ", "插件可能正在拦截 PS 快捷键... ", "mcpMesh", "'else'", "length", "external", "; else vErrors = null; }  ", "maxItems", "interpolation", "Create layer failed", "secs", "lng", "handleIncomingNotification", "comfy side transport.onerror", "strong", "defaultVariables", " via punycode: ", "自动从PS重新获取", "_onrequest", " , message: 'should NOT have more than ", "minSize", "value", " , params: { ref: '", "getData", "escape", " } if (", "modules", "', missingProperty: '", "pst", "unknownKeys", "formatter", "mergeArray", "self", "returnObjects", "localeCompare", " , (dataPath || '')", "Date must be ", "#00CCCC", "checks", "arb", "RULES", "isLanguageChangingTo", "DateTimeFormat", " == '", "addPostProcessor", " } ", "initAsync", "保存当前", "Google Gemini Image Generator", "callback", "ZodEnum", "exactUsedKey", "match", " must be number", "Unicode", "pattern", "instructions", "typeName", "year", "按选区裁剪", "ayl", "listenMessageCallback", "No images", "_any", "saveWorkflow", "onmessage", "names", "broadcastManager", " = null; ", '[\\"\\\\]', "languages", "Error validating elicitation response: ", "message", "#CC0099", "node_id", "returnEmptyString", "format", " = errors , ", "tools/list", "contextualErrorMap", "getConnectionToNodeInternal", " not in path ", "Merge group failed", "MAX_SAFE_INTEGER", "toResolveHierarchy", "getScriptPartFromCode", "definition", "setNodeTitle", "ZodNaN", "isTransportReady", "initImmediate", "stack", "never", "uxpHost", "joinValues", "replace", "returnTypeError", "close", "parent", " if (schema", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "additionalItems", "millisecond", "?\\:\\:", "Negative Crop", " characters' ", "ZodReadonly", "setItem", ".errors); errors = vErrors.length; } ", "{0,5}", "overloadTranslationOptionHandler", "discriminator", "isCUID", "startTime", "minutes", "Aborted", ".errors; else vErrors = vErrors.concat(", "runningRequests", "removeMessageEventListener", " = false , ", " != 'undefined' && ", "hasEdge", "maxDate", "isInitializing", "curlayer_curlayer", "console", "assertCapabilityForMethod", "UNRESERVED", "Schema ", " } }  ", "Failed to reboot ComfyUI", "passContext", " == +", "stopSequence", "resolved promise for", " {} ", "使用教程", "actions", "query", "hasOutgoingRequestInterceptor", "removeNamespaces", "Refresh", "comfy-uxp", "notificationsIntercepted", "[^\\%\\/\\:\\@]", "actionHandlers", "sdppp_assets", "years", " = RULES.custom['", "values", "smaller than", "allErrors", "') ", "Cannot access property/index ", "Invalid proxy forwarding: current node ", "onclose", "clear", "No errors", "Bounds", "$data", "fallbackLng", "userAgent", "useColors", "prototype", "schemaHasRulesExcept", "Logout", "split", "charCodeAt", "{0,2}", "NOT_PATH_NOSCHEME", "items", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "currency", "Input Setting", "++) { ", "unescapeFragment", "writeOnly", "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "ZodCatch", "create", "dataPathArr", "response", "formats", "keyType", "reject"];
  return Ix = function() {
    return i;
  }, Ix();
}
const Z = Se[s(2196)];
je[s(2196)];
var _a;
class ii {
  constructor(x, t) {
    v0(this, _a);
    v0(this, "nodeId");
    var a = s;
    this[a(1065)] = x, this[a(1363)] = t;
  }
  get [(_a = s(1065), s(917))]() {
    var x = s;
    const t = this[x(1065)][x(702)](this[x(1363)]);
    if (!t) throw new Error(x(2013) + this[x(1363)]);
    return t;
  }
  get actions() {
    var x = s;
    const t = this[x(1065)].getDefinition()[x(2223)](this[x(1363)]);
    if (!t) throw new Error(x(1251) + this[x(1363)]);
    return new Proxy({}, { get: (e, r) => {
      var n = x;
      if (typeof r != "string") return;
      const o = t.actions[r], c = r[n(467)](n(474));
      if (!o && !c) throw new Error(n(1240) + r + " not found for node " + this[n(1363)]);
      return async (u, d) => {
        var f = n;
        const l = this[f(1713)]();
        if (!l) throw new Error(f(1196) + this[f(1363)]);
        const { transport: v, path: h } = l, m = this.graphInstance[f(753)]();
        if (!(o != null && o.stream)) {
          const w = D0();
          let E;
          if (h[f(2021)] === 2) E = await v[f(1658)]({ method: f(1274), params: { action: r, data: u, sourceNodeId: m } }, w);
          else try {
            E = await v.request({ method: "sdppp/directRequest", params: { action: f(628), data: { targetNodeId: this[f(1363)], targetAction: r, targetData: u, forwardPath: h[f(1813)](1) }, sourceNodeId: m } }, w);
          } catch (O) {
            throw console[f(503)](f(1272) + r + ":", O), console.error({ targetNodeId: this.nodeId, targetAction: r, targetData: u, forwardPath: h[f(1813)](1) }), O;
          }
          return E;
        }
        let y;
        return h[f(2021)] === 2 ? y = v.streamRequest({ action: r, data: u, sourceNodeId: m }, o[f(2598)], d) : y = v.streamRequest({ action: f(628), data: { targetNodeId: this[f(1363)], targetAction: r, targetData: u, forwardPath: h.slice(1) }, sourceNodeId: m }, o[f(2598)], d), y;
      };
    } });
  }
  [s(1713)]() {
    var x = s;
    return this[x(1065)][x(1715)](this[x(1363)]);
  }
}
var es, xs, ts;
class zs {
  constructor(x) {
    v0(this, ts);
    v0(this, xs);
    v0(this, es);
    var t = s;
    this[t(1065)] = x, this[t(608)] = x.actionManager, this[t(2084)] = x[t(2084)];
  }
  [(ts = s(1065), xs = s(608), es = s(2084), s(1832))]({ store: x, storeName: t, onStateUpdate: a, requestInitialState: e }) {
    var r = s;
    this[r(2084)].registerHandler(r(1372) + t, (n) => {
      var o = r;
      try {
        n[o(757)] !== this[o(1065)][o(753)]() && a(n[o(389)]);
      } catch (c) {
        console[o(503)](o(340) + t + ":", c);
      }
    });
  }
  initializeProducer({ store: x, storeName: t, sendStateUpdate: a, onInitialStateRequested: e }) {
    var r = s;
    const n = this[r(1065)][r(753)](), o = async (d, f = !1) => {
      var l = r;
      if (this[l(2106)]()) try {
        await this[l(2084)].broadcast("store:update:" + t, { storeName: t, sourceNodeId: n, stateUpdate: d, isInitialState: f });
      } catch (h) {
        console[l(503)](l(596) + t + ":", h);
      }
    }, c = x[r(2240)]((d) => {
      o(d, !1);
    });
    e(() => {
      var d = r;
      o(x[d(642)](), !0);
    });
    const u = "__internal_requestInitialState_" + t;
    return this[r(608)][r(354)](u, async () => {
      var d = r;
      const f = x[d(642)]();
      return await o(f, !0), { success: !0 };
    }), this[r(2084)][r(1541)](r(1635), async (d) => {
      var f = r;
      try {
        (d.toNode === n || d[f(1359)] === n) && await o(x[f(642)](), !0);
      } catch {
      }
    }), () => {
      var f;
      var d = r;
      c(), (f = this[d(608)][d(2162)]) == null || f[d(2434)](u);
    };
  }
  [s(2106)]() {
    var t;
    var x = s;
    try {
      const a = this.graphInstance[x(644)], e = a && a[x(1414)]() > 0, r = ((t = this.broadcastManager[x(1549)]) == null ? void 0 : t.size) > 0;
      return e || r;
    } catch {
      return !!this[x(2084)];
    }
  }
  async [s(2562)](x, t) {
    var a = s;
    const e = this[a(1065)][a(753)]();
    if (this[a(2106)]()) try {
      await this[a(2084)][a(2391)](a(1372) + t, { storeName: t, sourceNodeId: e, stateUpdate: x[a(642)](), isInitialState: !0 });
    } catch {
    }
  }
}
function oi({ graphInstance: i, store: x, name: t }) {
  var a = s;
  const e = new zs(i), r = (o) => {
    var c = K;
    const u = x[c(642)](), d = { ...u, ...o };
    x.setState(d);
  }, n = async () => {
    var o = K;
    const c = o(418) + t;
    try {
      const u = i[o(2223)](t);
      u && u[o(2154)] && u[o(2154)][c] && await u[o(2154)][c]();
    } catch (u) {
      console.warn("Failed to request initial state for " + t + ":", u);
    }
  };
  e[a(1832)]({ store: x, storeName: t, onStateUpdate: r, requestInitialState: n });
}
function ci({ graphInstance: i, store: x, name: t }) {
  var a = s;
  const e = new zs(i), r = async (o) => {
  }, n = (o) => {
  };
  return e[a(1765)]({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: n });
}
var rs, as, ss;
class ui {
  constructor() {
    v0(this, ss, /* @__PURE__ */ new Map());
    v0(this, as, /* @__PURE__ */ new Map());
    v0(this, rs, /* @__PURE__ */ new Set());
  }
  createGlobalDispatcherForType(x) {
    return (t) => {
      var a = K;
      const e = this[a(803)][a(2229)](x);
      if (e) for (const r of e)
        try {
          r(t);
        } catch (n) {
          console[a(503)](a(1935) + x + ":", n);
        }
      !t[a(2596)] && this[a(923)](x, t);
    };
  }
  async forwardBroadcast(x, t) {
    var a = s;
    try {
      const e = { ...t, forwarded: !0 }, r = [...Array.from(this[a(2002)][a(2166)]()), ...Array[a(1147)](this[a(748)])], n = r[a(632)]((o) => {
        var c = a;
        return o[c(1676)]({ method: c(529), params: { messageType: x, message: e } })[c(947)]((u) => {
          var d = c;
          console.error(d(660) + x + ":", u);
        });
      });
      await Promise[a(1897)](n);
    } catch (e) {
      console[a(503)]("[BroadcastManager] Error forwarding broadcast:", e);
    }
  }
  [(ss = s(803), as = s(2002), rs = s(748), s(1541))](x, t) {
    var a = s;
    !this.broadcastHandlers[a(2561)](x) && this[a(803)][a(1951)](x, /* @__PURE__ */ new Set()), this.broadcastHandlers[a(2229)](x).add(t);
  }
  [s(1638)](x) {
    var t = s;
    this[t(2536)](x);
  }
  [s(2536)](x) {
    var t = s;
    const a = I({ method: r0(t(529)), params: I({ messageType: S(), message: D0() }) });
    x[t(336)](a, async (e) => {
      var r = t;
      const n = e[r(817)][r(829)];
      this[r(2300)](n)(e[r(817)][r(2089)]);
    });
  }
  [s(366)](x, t) {
    var a = s;
    this[a(2002)][a(1951)](x, t), this.setupTransportHandlers(t);
  }
  [s(2377)](x) {
    var t = s;
    this[t(2002)].delete(x);
  }
  async [s(2391)](x, t) {
    var a = s;
    const e = [...Array.from(this[a(2002)].values()), ...Array[a(1147)](this[a(748)])], r = e[a(632)]((n) => {
      var o = a;
      return n.notification({ method: o(529), params: { messageType: x, message: t } });
    });
    await Promise[a(1897)](r);
  }
  mountTo(x) {
    var t = s;
    this[t(748)][t(1342)](x), this.setupTransportHandlers(x);
  }
  [s(2008)]() {
    var x = s;
    return Array[x(1147)](this.broadcastHandlers.keys());
  }
  [s(2173)]() {
    var x = s;
    this[x(803)][x(2173)](), this.transports[x(2173)](), this.mountedTransports[x(2173)]();
  }
}
var ns, is, os, cs;
class di {
  constructor(x, t, a) {
    v0(this, cs, /* @__PURE__ */ new Map());
    v0(this, os);
    v0(this, is);
    v0(this, ns);
    var e = s;
    this[e(2103)] = x, this[e(1874)] = t, this[e(2461)] = a;
  }
  [(cs = s(2162), os = s(2103), is = s(1874), ns = s(2461), s(2376))](x, t) {
    var a = s;
    const e = this[a(2103)][a(2223)](this.currentNodeId);
    if (!e) throw new Error(a(1251) + this[a(1874)]);
    const r = e[a(2154)][x];
    if (!r) throw new Error(a(1240) + String(x) + a(2291) + this[a(1874)]);
    this.validateHandlerType(x, t, r), this[a(2162)].set(x, t);
  }
  validateHandlerType(x, t, a) {
    var e = s;
    a[e(1234)];
  }
  [s(354)](x, t) {
    var a = s;
    this[a(2162)][a(1951)](x, t);
  }
  [s(1360)](x) {
    var t = s;
    for (const [a, e] of this.actionHandlers) {
      const r = this[t(2103)][t(2223)](this[t(1874)]), n = r == null ? void 0 : r[t(2154)][a];
      if (a.startsWith(t(474)) ? !1 : (n == null ? void 0 : n[t(1234)]) === !0) {
        const u = I({ action: r0(a) });
        x[t(954)](u, async function* (d, f, l) {
          var v = t;
          const h = d[v(1073)] || d, m = e(h, f, l);
          if (m && typeof m == "object" && Symbol[v(1348)] in m) for await (const y of m)
            yield y === void 0 ? {} : y;
          else {
            const y = await m;
            yield y === void 0 ? {} : y;
          }
        });
      }
    }
    this[t(2408)](x), this[t(2646)](x);
  }
  registerProxyForwardHandler(x) {
    const t = I({ action: r0("__proxy_forward") }), a = this;
    x.registerStreamRequestorHandler(t, async function* (e, r, n) {
      var o = K;
      const c = e[o(1073)] || e, { targetNodeId: u, targetAction: d, targetData: f, forwardPath: l } = c;
      if (!l || l.length === 0) throw new Error("Invalid forward path for proxy action");
      const v = l[0], h = l[o(1813)](1);
      if (h[o(2021)] === 0 && v === a[o(1874)]) {
        const m = a.actionHandlers[o(2229)](d);
        if (!m) throw new Error(o(1240) + d + o(1388) + a[o(1874)]);
        const y = m(f, r, n);
        if (y && typeof y == "object" && Symbol[o(1348)] in y) for await (const w of y)
          yield w === void 0 ? {} : w;
        else {
          const w = await y;
          yield w === void 0 ? {} : w;
        }
        return;
      }
      if (v === a[o(1874)] && h[o(2021)] > 0) {
        const m = h[0], y = a[o(2461)](m);
        if (y) {
          const w = await y[o(1962)]({ action: "__proxy_forward", data: { targetNodeId: u, targetAction: d, targetData: f, forwardPath: h } }, I({}), n);
          for await (const E of w)
            yield E === void 0 ? {} : E;
          return;
        }
        throw new Error("Cannot forward to node " + m + o(2260));
      }
      throw new Error(o(2171) + a[o(1874)] + " not in path " + l);
    });
  }
  getRegisteredActions() {
    var x = s;
    return Array.from(this[x(2162)][x(1040)]());
  }
  [s(2563)](x) {
    var t = s;
    return this[t(2162)][t(2561)](x);
  }
  [s(2498)](x) {
    var t = s;
    return this.actionHandlers[t(2229)](x);
  }
  clear() {
    var x = s;
    this[x(2162)][x(2173)]();
  }
  registerDirectRequestHandler(x, t, a) {
  }
  [s(2646)](x) {
    var t = s;
    const a = I({ method: r0(t(1274)), params: I({ action: S(), data: D0()[t(1285)]() }) }), e = this;
    x[t(1983)](a, async (r, n) => {
      var o = t;
      const { action: c, data: u } = r.params;
      if (c === "__proxy_forward") return await e.handleDirectProxyForward(u, n);
      const d = e[o(2162)].get(c);
      if (!d) throw new Error("Action " + c + " not found on node " + e[o(1874)]);
      const f = d(u, n), l = await f;
      return l === void 0 ? {} : l;
    });
  }
  async handleDirectProxyForward(x, t) {
    var a = s;
    const { targetNodeId: e, targetAction: r, targetData: n, forwardPath: o } = x;
    if (!o || o[a(2021)] === 0) throw new Error("Invalid forward path for proxy action");
    const c = o[0], u = o[a(1813)](1);
    if (u.length === 0 && c === this[a(1874)]) {
      const d = this[a(2162)].get(r);
      if (!d) throw new Error(a(1240) + r + a(1388) + this.currentNodeId);
      const f = d(n, t), l = await f;
      return l === void 0 ? {} : l;
    }
    if (c === this.currentNodeId && u[a(2021)] > 0) {
      const d = u[0], f = this.getTransport(d);
      if (f) return await f[a(1658)]({ method: "sdppp/directRequest", params: { action: a(628), data: { targetNodeId: e, targetAction: r, targetData: n, forwardPath: u } } }, D0());
      throw new Error(a(1328) + d + " - no connection available");
    }
    throw new Error(a(2171) + this[a(1874)] + a(2098) + o);
  }
}
var us, ds, fs;
class fi {
  constructor(x, t) {
    v0(this, fs);
    v0(this, ds);
    v0(this, us, /* @__PURE__ */ new Set());
    var a = s;
    this.definition = x, this[a(1874)] = t;
  }
  [(fs = s(2103), ds = s(1874), us = s(1462), s(2494))](x) {
    var t = s;
    this[t(1462)][t(1342)](x);
  }
  [s(2571)](x) {
    var t = s;
    this[t(1462)][t(2434)](x);
  }
  isConnected(x) {
    var t = s;
    return this[t(1462)][t(2561)](x);
  }
  [s(2505)](x, t) {
    var a = s;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), r = [{ nodeId: x, path: [x] }];
    for (; r[a(2021)] > 0; ) {
      const { nodeId: n, path: o } = r[a(761)]();
      if (e[a(2561)](n)) continue;
      e[a(1342)](n);
      const c = this[a(2103)][a(2205)](n);
      for (const u of c) {
        if (u === t) return [...o, u];
        !e.has(u) && r[a(2380)]({ nodeId: u, path: [...o, u] });
      }
    }
  }
  [s(1855)]() {
    var x = s;
    return Array[x(1147)](this[x(1462)]);
  }
  [s(1414)]() {
    var x = s;
    return this[x(1462)].size;
  }
  [s(1568)]() {
    var x = s;
    const t = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), e = [this[x(1874)]];
    for (a[x(1342)](this[x(1874)]); e[x(2021)] > 0; ) {
      const r = e[x(761)](), n = this[x(2103)].getNeighbors(r);
      for (const o of n)
        !a.has(o) && (a[x(1342)](o), (this[x(1462)][x(2561)](o) || this[x(483)](o, a)) && (t[x(1342)](o), e.push(o)));
    }
    return Array[x(1147)](t);
  }
  [s(483)](x, t) {
    var a = s;
    const e = this.findPath(this[a(1874)], x);
    if (!e || e.length <= 1) return !1;
    for (let r = 1; r < e[a(2021)] - 1; r++)
      if (!this[a(1462)][a(2561)](e[r])) return !1;
    return !0;
  }
  [s(2173)]() {
    var x = s;
    this[x(1462)].clear();
  }
}
var ls, hs, ps, ms, vs, gs;
class li {
  constructor(x, t) {
    v0(this, gs);
    v0(this, vs);
    v0(this, ms, /* @__PURE__ */ new Map());
    v0(this, "nodeProxies", /* @__PURE__ */ new Map());
    v0(this, ps);
    v0(this, hs);
    v0(this, ls);
    v0(this, "nodeTransports", /* @__PURE__ */ new Map());
    var a = s;
    this[a(2103)] = x, this[a(1874)] = t, this[a(1243)](), this[a(2084)] = new ui(), this.actionManager = new di(x, t, (e) => this.getTransportInternal(e)), this[a(644)] = new fi(x, t), this[a(2557)]();
  }
  [(gs = s(2103), vs = s(1874), ms = s(1091), ps = s(2084), hs = s(608), ls = s(644), s(1243))]() {
    var x = s;
    for (const t of this[x(2103)][x(551)]()) {
      const a = this.definition[x(2223)](t);
      if (a && a[x(917)]) {
        const e = this[x(1653)](a[x(917)]), r = Dn(() => e);
        this.nodeStores.set(t, r);
      }
    }
  }
  getDefaultValuesFromSchema(x) {
    var t = s;
    if (!x) return {};
    try {
      return x[t(1325)]({});
    } catch {
      return this[t(658)](x);
    }
  }
  manuallyExtractDefaults(x) {
    var t = s;
    if (!x || !x[t(751)]) return {};
    if (x[t(751)][t(338)] === t(2641)) {
      const a = x[t(751)][t(704)];
      return typeof a === t(1853) ? a() : a;
    }
    if (x[t(751)].type === t(1923)) {
      const a = {};
      let e;
      try {
        e = x[t(751)][t(2219)];
      } catch {
        return {};
      }
      if (e) for (const [r, n] of Object[t(446)](e)) {
        const o = this[t(1303)](n);
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
        return x.parse(void 0);
      } catch {
        return this[t(658)](x);
      }
  }
  async [s(1649)](x, t) {
    var a = s;
    if (!this[a(2103)][a(2138)](this[a(1874)], x)) throw new Error(a(1366) + this[a(1874)] + a(770) + x);
    if (this.nodeTransports[a(2561)](x)) throw new Error("Already connected to node " + x);
    try {
      this[a(824)].set(x, t), this.connectionManager[a(2494)](x), this[a(2217)](x, t), await this.syncStoresToNewConnection(x), await this[a(2637)](x);
    } catch (e) {
      throw this[a(1127)](x), e;
    }
  }
  [s(555)](x) {
    this.cleanupConnection(x);
  }
  async [s(1049)](x) {
    var t = s;
    await new Promise((a) => setTimeout(a, 100));
    for (const [a, e] of this.nodeStores)
      if (a === this[t(1874)]) try {
        await this[t(2084)][t(2391)](t(1372) + a, { storeName: a, sourceNodeId: this[t(1874)], stateUpdate: e[t(642)](), isInitialState: !0 });
      } catch {
      }
    try {
      await this[t(2084)][t(2391)](t(1635), { fromNode: this[t(1874)], toNode: x });
    } catch {
    }
  }
  async [s(2637)](x) {
    var t = s;
    try {
      const a = this[t(644)][t(1568)]();
      for (const e of a)
        try {
          const r = t(418) + e, n = this[t(2223)](e);
          n && n[t(2154)] && n[t(2154)][r] && await n[t(2154)][r]({});
        } catch (r) {
          console[t(1133)](t(1045) + e + ":", r);
        }
    } catch (a) {
      console[t(1133)]("Failed to request initial states after connecting to " + x + ":", a);
    }
  }
  [s(1127)](x) {
    var t = s;
    const a = this[t(824)][t(2229)](x);
    this[t(824)][t(2434)](x), this.connectionManager[t(2571)](x), this[t(2084)][t(2377)](x), a && a[t(1361)]();
  }
  [s(2217)](x, t) {
    var a = s;
    if (!this[a(1091)][a(2229)](this[a(1874)])) throw new Error("Store not found for " + this[a(1874)]);
    this[a(608)][a(1360)](t), this[a(2084)].addMiddleware(x, t);
  }
  [s(2557)]() {
    var x = s;
    for (const [t, a] of this[x(1091)])
      t === this[x(1874)] ? ci({ graphInstance: this, store: a, name: t }) : oi({ graphInstance: this, store: a, name: t });
  }
  getNode(x) {
    var t = s;
    if (!this.nodeProxies[t(2561)](x)) {
      const a = new ii(this, x);
      this[t(1542)].set(x, a);
    }
    return this[t(1542)][t(2229)](x);
  }
  getTransportInternal(x) {
    var t = s;
    return this.nodeTransports[t(2229)](x);
  }
  [s(1715)](x) {
    var t = s;
    const a = this[t(824)][t(2229)](x);
    if (a) return { transport: a, path: [this.currentNodeId, x] };
    const e = this[t(2565)](this.currentNodeId, x);
    if (e && e.length > 1) {
      const r = e[1], n = this[t(824)][t(2229)](r);
      if (n) return { transport: n, path: e };
    }
  }
  [s(702)](x) {
    return this.nodeStores.get(x);
  }
  get store() {
    var x = s;
    const t = this[x(1091)][x(2229)](this[x(1874)]);
    if (!t) throw new Error("Store not found for current node " + this.currentNodeId);
    return t;
  }
  get [s(2154)]() {
    var x = s;
    const t = this[x(2103)][x(2223)](this[x(1874)]);
    if (!t) throw new Error("Node definition not found for current node " + this[x(1874)]);
    return new Proxy({}, { get: (e, r) => {
      var n = x;
      if (typeof r != "string") return;
      const o = t[n(2154)][r];
      if (!o) throw new Error(n(1240) + r + " not found for current node " + this[n(1874)]);
      return (c, u) => {
        var d = n;
        const f = this[d(608)][d(2498)](r);
        if (!f) throw new Error("Action handler " + r + " not implemented for node " + this.currentNodeId);
        const l = { nodeId: this[d(1874)] };
        if (o[d(1234)] === !0) {
          const v = f(c, l, u);
          return v && typeof v == "object" && Symbol[d(1348)] in v ? async function* () {
            for await (const h of v)
              yield h === void 0 ? {} : h;
          }() : async function* () {
            const h = await v;
            yield h === void 0 ? {} : h;
          }();
        } else return (async () => {
          var v = d;
          const h = f(c, l, u);
          if (h && typeof h == "object" && Symbol[v(1348)] in h) {
            const m = h[Symbol[v(1348)]](), y = await m[v(690)]();
            return y.value === void 0 ? {} : y.value;
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [s(736)]() {
    return this.definition;
  }
  [s(753)]() {
    var x = s;
    return this[x(1874)];
  }
  [s(2097)](x) {
    var t = s;
    return this[t(1715)](x);
  }
  [s(2376)](x, t) {
    var a = s;
    this[a(608)].implementAction(x, t);
  }
  [s(1891)]() {
    var x = s;
    const t = Array[x(1147)](this.nodeTransports.keys());
    for (const a of t)
      this[x(1127)](a);
    this[x(2084)].clear(), this.actionManager[x(2173)](), this[x(644)][x(2173)]();
  }
  [s(2565)](x, t) {
    var a = s;
    return this[a(644)][a(2505)](x, t);
  }
  [s(2505)](x, t) {
    var a = s;
    return this[a(2565)](x, t);
  }
  async broadcast(x, t) {
    var a = s;
    return this.broadcastManager[a(2391)](x, t);
  }
  [s(663)](x, t) {
    var a = s;
    this[a(2084)][a(1541)](x, t);
  }
}
const qr = { INTERCEPTOR_ERROR: "interceptor_error" };
var ys, bs, ws;
class Tr extends (ws = Error, bs = s(338), ys = s(1921), ws) {
  constructor(t, a, e, r) {
    var n = s;
    super(e);
    v0(this, bs);
    v0(this, ys);
    v0(this, "originalError");
    this.name = n(650), this[n(338)] = t, this[n(1921)] = a, this[n(372)] = r;
  }
}
var Ss, ks, Es, Is, Ps, Rs, Cs;
class hi {
  constructor(x, t = {}) {
    v0(this, "protocol");
    v0(this, "realTransport", null);
    v0(this, Cs);
    v0(this, "requestHandlers", /* @__PURE__ */ new Map());
    v0(this, Rs, /* @__PURE__ */ new Map());
    v0(this, "outgoingRequestInterceptors", /* @__PURE__ */ new Map());
    v0(this, Ps, /* @__PURE__ */ new Map());
    v0(this, Is, []);
    v0(this, Es, []);
    v0(this, ks, []);
    v0(this, Ss, { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    var a = s;
    this[a(1450)] = x, this[a(778)] = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async connect(x) {
    var t = s;
    this[t(1873)] = x, x[t(2082)] = (a) => {
      var e = t;
      this[e(1333)](a);
    }, x[t(2172)] = () => {
      var a = t;
      this[a(1652)][a(1222)]((e) => e());
    }, x[t(1865)] = (a) => {
      var e = t;
      this[e(865)][e(1222)]((r) => r(a));
    }, await this[t(1450)][t(1649)](this);
  }
  async [(Cs = s(778), Rs = s(1707), Ps = s(976), Is = s(1125), Es = s(1652), ks = s(865), Ss = s(307), s(1333))](x) {
    var t = s;
    this.log("debug", t(1362), x);
    try {
      if (this[t(1954)](x) && await this[t(1479)](x) || this[t(1172)](x) && await this[t(2029)](x))
        return;
      this[t(1125)][t(1222)]((a) => a(x));
    } catch (a) {
      this[t(307)].errors++, this[t(1133)](t(503), t(1232), a), this.messageHandlers[t(1222)]((e) => e(x));
    }
  }
  async [s(1479)](x) {
    var t = s;
    const a = this[t(851)].get(x.method);
    if (!a) return !1;
    try {
      this[t(307)][t(1145)]++;
      const e = await a(x, {});
      return this.realTransport && "id" in x && await this[t(1873)].send({ jsonrpc: t(2545), id: x.id, result: e }), !0;
    } catch (e) {
      return this[t(307)].errors++, this[t(1873)] && "id" in x && await this[t(1873)].send({ jsonrpc: "2.0", id: x.id, error: { code: -32603, message: t(1122) + JSON[t(990)](x[t(817)]) + " " + e[t(2089)] } }), !0;
    }
  }
  async [s(2029)](x) {
    var t = s;
    const a = this.notificationHandlers[t(2229)](x[t(1921)]);
    if (!a) return !1;
    try {
      return this.stats.notificationsHandled++, await a(x), !0;
    } catch (e) {
      return this.stats.errors++, this[t(1133)]("error", "Notification handler failed for " + x[t(1921)] + ":", e), !0;
    }
  }
  async [s(980)](x) {
    var t = s;
    this[t(1133)](t(2491), t(2292), x);
    try {
      if (this.isRequest(x)) {
        const a = await this[t(1047)](x);
        if (a.success) {
          if (a[t(1806)] === null) return;
          a[t(1806)] && (x = { ...a[t(1806)], jsonrpc: "2.0" }, this.stats.requestsIntercepted++);
        } else if (this[t(778)][t(1535)]) this.log(t(1797), t(1120) + x[t(1921)] + ":", a.error);
        else throw a[t(503)];
      }
      if (this.isNotification(x)) {
        const a = await this.executeOutgoingNotificationInterceptor(x);
        if (a[t(2624)]) {
          if (a[t(1806)] === null) return;
          a[t(1806)] && (x = { ...a[t(1806)], jsonrpc: "2.0" }, this[t(307)][t(2160)]++);
        } else if (this[t(778)].continueOnInterceptorError) this.log(t(1797), t(1812) + x[t(1921)] + ":", a[t(503)]);
        else throw a[t(503)];
      }
      this.realTransport && await this[t(1873)].send(x);
    } catch (a) {
      throw this[t(307)][t(1188)]++, a;
    }
  }
  async [s(1480)]() {
    var x = s;
    this.realTransport && await this[x(1873)].start();
  }
  async close() {
    var x = s;
    this[x(1873)] && await this.realTransport[x(2114)]();
  }
  set [s(2082)](x) {
    var t = s;
    this[t(1125)] = [x];
  }
  set [s(2172)](x) {
    var t = s;
    this[t(1652)] = [x];
  }
  set [s(1865)](x) {
    var t = s;
    this[t(865)] = [x];
  }
  async [s(1047)](x) {
    var t = s;
    const a = this[t(2e3)].get(x[t(1921)]);
    if (!a) return { success: !0, result: x };
    try {
      return { success: !0, result: await this.withTimeout(a(x), this[t(778)][t(1657)]) };
    } catch (e) {
      return this[t(307)][t(1188)]++, { success: !1, error: new Tr(qr[t(1483)], x[t(1921)], "Outgoing request interceptor failed: " + e[t(2089)], e) };
    }
  }
  async [s(1627)](x) {
    var t = s;
    const a = this.outgoingNotificationInterceptors[t(2229)](x.method);
    if (!a) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1811)](a(x), this[t(778)].interceptorTimeout) };
    } catch (e) {
      return this[t(307)][t(1188)]++, { success: !1, error: new Tr(qr.INTERCEPTOR_ERROR, x[t(1921)], "Outgoing notification interceptor failed: " + e[t(2089)], e) };
    }
  }
  async [s(1658)](x, t) {
    var a = s;
    return await this[a(1450)][a(1658)](x, t, { timeout: 36e5 });
  }
  async [s(1676)](x) {
    var t = s;
    return await this.protocol[t(1676)](x);
  }
  [s(1983)](x, t) {
    var a = s;
    const e = x[a(2219)][a(1921)].value;
    this[a(851)][a(1951)](e, t);
  }
  setNotificationHandler(x, t) {
    var a = s;
    const e = x.shape[a(1921)][a(2038)];
    this[a(1707)].set(e, t);
  }
  [s(1346)](x, t) {
    var a = s;
    const e = x.shape[a(1921)][a(2038)];
    this[a(2e3)][a(1951)](e, t);
  }
  [s(510)](x, t) {
    var a = s;
    const e = x.shape[a(1921)][a(2038)];
    this[a(976)][a(1951)](e, t);
  }
  [s(331)](x) {
    var t = s;
    this[t(851)][t(2434)](x);
  }
  [s(1769)](x) {
    var t = s;
    this[t(1707)][t(2434)](x);
  }
  [s(2228)](x) {
    var t = s;
    this[t(2e3)][t(2434)](x);
  }
  [s(2488)](x) {
    var t = s;
    this[t(976)][t(2434)](x);
  }
  [s(2667)](x) {
    return this.requestHandlers.has(x);
  }
  [s(699)](x) {
    var t = s;
    return this.notificationHandlers[t(2561)](x);
  }
  [s(2156)](x) {
    var t = s;
    return this[t(2e3)].has(x);
  }
  [s(820)](x) {
    var t = s;
    return this[t(976)][t(2561)](x);
  }
  [s(586)]() {
    var x = s;
    return { ...this[x(307)] };
  }
  resetStats() {
    var x = s;
    this[x(307)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [s(1864)]() {
    var x = s;
    return this[x(1450)];
  }
  [s(1361)]() {
    var x = s;
    this[x(851)][x(2173)](), this[x(1707)][x(2173)](), this[x(2e3)][x(2173)](), this[x(976)][x(2173)]();
  }
  [s(1954)](x) {
    var t = s;
    return x.jsonrpc === t(2545) && t(1921) in x && "id" in x;
  }
  [s(1172)](x) {
    var t = s;
    return x.jsonrpc === t(2545) && t(1921) in x && !("id" in x);
  }
  async [s(1811)](x, t) {
    var a = s;
    const e = new Promise((r, n) => {
      var o = K;
      setTimeout(() => n(new Error(o(1739))), t);
    });
    return await Promise[a(697)]([x, e]);
  }
  [s(1133)](x, t, ...a) {
    var e = s;
    if (!this[e(778)][e(2491)] && x === e(2491)) return;
    const r = "[MCPMiddleware]";
    switch (x) {
      case "debug":
        console[e(2491)](r, t, ...a);
        break;
      case e(1604):
        console[e(1604)](r, t, ...a);
        break;
      case e(1797):
        console[e(1797)](r, t, ...a);
        break;
      case "error":
        console[e(503)](r, t, ...a);
        break;
    }
  }
}
I({ method: r0(s(2269)), params: I({ requestId: S(), data: D0(), error: S().nullable(), finished: x0() }) }), I({ method: r0("sdppp/streamRequest"), params: I({ action: S(), data: D0() }) }), I({ method: r0(s(2508)), params: I({ requestId: S() }) });
const pi = I({ method: r0("sdppp/streamResponse"), params: I({ requestId: S(), data: D0(), error: S()[s(1977)](), finished: x0() }) }), mi = I({ method: r0(s(411)), params: I({ action: S(), data: D0() }) }), vi = I({ method: r0(s(2508)), params: I({ requestId: S() }) });
var Fs, Ns;
class gi {
  constructor() {
    v0(this, Ns, /* @__PURE__ */ new Map());
    v0(this, Fs, /* @__PURE__ */ new Map());
  }
  [(Ns = s(1969), Fs = s(495), s(2380))](x) {
    var t = s;
    const { requestId: a } = x[t(817)], e = this[t(1969)].get(a) || [], r = this[t(495)][t(2229)](a) || [];
    r[t(2021)] > 0 ? r[t(761)]()(x[t(817)]) : (e[t(2380)](x[t(817)]), this.queues[t(1951)](a, e));
  }
  async pop(x) {
    var t = s;
    const a = this[t(1969)][t(2229)](x) || [];
    return a.length > 0 ? a.shift() : new Promise((e) => {
      var r = t;
      const n = this[r(495)][r(2229)](x) || [];
      n[r(2380)](e), this[r(495)].set(x, n);
    });
  }
  [s(1361)](x) {
    var t = s;
    this[t(1969)].delete(x), this[t(495)].delete(x);
  }
}
var qs, Ts, Os, As;
class yi extends hi {
  constructor(t, a = {}) {
    var e = s;
    super(t, a);
    v0(this, As, /* @__PURE__ */ new Map());
    v0(this, Os, 1);
    v0(this, Ts, /* @__PURE__ */ new Map());
    v0(this, qs, new gi());
    this[e(575)]();
  }
  [(As = s(1885), Os = s(1611), Ts = s(2134), qs = s(1655), s(575))]() {
    var t = s;
    this[t(768)](), this[t(689)](), this[t(1807)]();
  }
  [s(768)]() {
    var t = s;
    this[t(336)](pi, async (a) => {
      this.notificationQueue.push(a);
    });
  }
  [s(689)]() {
    var t = s;
    this[t(1983)](vi, async (a, e) => {
      var r = t;
      const { requestId: n } = a[r(817)], o = this[r(2134)][r(2229)](n);
      return o && (o[r(1198)](), this[r(2134)].delete(n)), { success: !0 };
    });
  }
  [s(1807)]() {
    var t = s;
    this[t(1983)](mi, async (a, e) => {
      var r = t;
      const n = r(451) + this[r(1611)]++, o = this[r(1885)].get(a[r(817)][r(1863)]);
      if (!o) throw new Error(r(1357) + a.params[r(1863)]);
      const c = new AbortController();
      return this[r(2134)][r(1951)](n, c), this[r(295)](n, o, a[r(817)], e, c), { requestId: n };
    });
  }
  async executeHandlerAsync(t, a, e, r, n) {
    var o = s;
    try {
      const c = a(e, r, n[o(996)]);
      for await (const u of c) {
        if (n[o(996)].aborted) break;
        await this[o(1676)]({ method: "sdppp/streamResponse", params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !n[o(996)][o(806)] && await this[o(1676)]({ method: o(2269), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n.signal[o(806)] && await this[o(1676)]({ method: o(2269), params: { requestId: t, data: null, error: c[o(2089)], finished: !0 } });
    } finally {
      this[o(2134)][o(2434)](t);
    }
  }
  [s(954)](t, a) {
    var e = s;
    this.streamRequestorHandlers[e(1951)](t[e(2219)][e(1863)][e(2038)], a);
  }
  async [s(1962)](t, a, e) {
    var r = s;
    this[r(2539)](e);
    const n = await this[r(1403)](t), o = this[r(638)](n), c = this[r(1006)]();
    return this[r(1283)](o, c, n, e);
  }
  [s(2539)](t) {
    var a = s;
    if (t && t.aborted) throw new Error(a(297));
  }
  async [s(1403)](t) {
    var a = s;
    return (await this.request({ method: a(411), params: { action: t[a(1863)], data: t.data } }, I({ requestId: S() })))[a(1565)];
  }
  [s(638)](t) {
    return this.notificationQueue;
  }
  [s(1006)]() {
    return { finished: !1, error: null };
  }
  [s(1283)](t, a, e, r) {
    var n = s;
    const o = this;
    return { async *[Symbol[n(1348)]]() {
      var c = n;
      try {
        for (; !a[c(1246)] && !a[c(503)]; ) {
          if (r && r[c(806)])
            throw await o[c(1658)]({ method: "sdppp/abort", params: { requestId: e } }, I({ success: x0() })), new Error(c(2132));
          const u = await t.pop(e);
          if (u[c(503)])
            throw a[c(503)] = u[c(503)], new Error(u.error);
          if (u.finished) {
            a[c(1246)] = !0;
            break;
          }
          u[c(1073)] !== null && (yield u[c(1073)]);
        }
      } finally {
        t.cleanup(e);
      }
    } };
  }
  [s(1311)]() {
    var t = s;
    return this[t(2134)][t(1066)];
  }
  async [s(2367)](t) {
    var a = s;
    const e = this[a(2134)][a(2229)](t);
    return e ? (e[a(1198)](), this.runningRequests[a(2434)](t), !0) : !1;
  }
  abortAllRequests() {
    var t = s;
    for (const [a, e] of this.runningRequests)
      e[t(1198)]();
    this[t(2134)][t(2173)]();
  }
  [s(1361)]() {
    var t = s;
    super[t(1361)](), this[t(523)](), this[t(1885)][t(2173)]();
  }
}
function bi(i) {
  const x = new An(i);
  return { joinAs(t) {
    var a = K;
    if (!x[a(2223)](t)) throw new Error("Node " + String(t) + a(1763));
    return new li(x, t);
  }, getDefinition() {
    return i;
  }, getNodeIds() {
    var t = K;
    return x[t(551)]();
  }, getNeighbors(t) {
    return x.getNeighbors(t);
  }, hasEdge(t, a) {
    return x.hasEdge(t, a);
  }, hasPath(t, a) {
    var e = K;
    return x[e(2202)](t, a);
  }, findPath(t, a) {
    var e = K;
    return x[e(2505)](t, a);
  } };
}
const Fe = I({ leftDistance: t0(), topDistance: t0(), rightDistance: t0(), bottomDistance: t0(), width: t0(), height: t0() }), Me = { name: S(), uiWeight: t0() }, wi = I({ ...Me, outputType: r0(s(648)), options: I({ required: x0(), maxCount: t0()[s(1285)](), maskMode: x0().optional() }) }), Si = I({ ...Me, outputType: r0(s(2427)), options: I({ required: x0() }) }), ki = I({ ...Me, outputType: r0(s(2348)), options: I({ required: x0() }) }), Ei = I({ ...Me, outputType: r0("boolean"), options: I({ required: x0() }) }), Ii = I({ ...Me, outputType: r0(s(960)), options: I({ required: x0(), min: t0()[s(1285)](), max: t0()[s(1285)](), step: t0()[s(1285)](), random: x0()[s(1285)](), slider: x0()[s(1285)]() }) }), Pi = I({ ...Me, outputType: r0("combo"), options: I({ required: x0(), values: I0(S()), labels: I0(S())[s(1285)]() }) }), Ri = I({ ...Me, outputType: r0(s(1e3)), options: I({ required: x0(), values: I0(S()) }) }), Ci = $s("outputType", [wi, Si, ki, Ei, Ii, Pi, Ri]), Fi = I({ id: S(), title: S(), widgets: I0(Ci), uiWeightSum: t0() }), Ni = I({ widgetableID: S(), widgetablePath: S(), nodes: H0(S(), Fi), nodeIndexes: I0(S()), note: S()[s(1285)](), options: H0(S(), D0()) }), qi = I({ bannerData: D0().optional(), refreshable: x0()[s(2641)](!1), backwardable: x0()[s(2641)](!1), loginable: x0().default(!1), runnable: x0()[s(2641)](!1), workBoundaries: H0(t0(), Fe)[s(2641)]({}), workBoundaryMaxSizes: H0(t0(), t0())[s(2641)]({}) }), Ti = I({ uname: S()[s(2641)](""), activeDocumentID: t0()[s(2641)](0), layers: I0(I({ id: t0(), name: S(), identify: S() }))[s(2641)]([]), actions: I0(S())[s(2641)]([]), theme: S()[s(2641)](s(1237)), sdpppX: H0(S(), D0())[s(2641)]({}), locale: F0([s(734), s(363)])[s(2641)](s(363)), comfyWebviewConnectStatus: F0(["connecting", s(1716), s(1352)])[s(2641)](s(1352)), comfyWebviewLoadError: S()[s(2641)](""), comfyWebviewLoading: x0()[s(2641)](!1), comfyWebviewVersion: S()[s(2641)](""), comfyHTTPCode: t0()[s(2641)](200), comfyURL: S()[s(2641)](""), sdkWebviewFocusing: x0()[s(2641)](!1), sdkWebviewConnectStatus: F0([s(1780), "connected", "disconnected"])[s(2641)]("disconnected"), isLogin: x0().default(!1), isGuest: x0().default(!1), requestingLogin: x0()[s(2641)](!1), loginMessage: S()[s(2641)](""), token: S()[s(2641)](""), userInfo: H0(S(), D0()).default({}), taskLastRun: t0().default(0), canvasStateID: t0()[s(1285)](), selectionStateID: S().optional(), canvasThumbnail: S()[s(2641)](""), curlayerThumbnail: S()[s(2641)]("") }), Oi = I({ widgetableStructure: Ni[s(2641)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: H0(S(), I0(D0()))[s(2641)]({}), widgetableErrors: H0(S(), S())[s(2641)]({}), queueSize: t0().default(0), lastError: S()[s(2641)](""), progress: t0()[s(2641)](0), executingNodeTitle: S()[s(2641)](""), executingNodeID: S()[s(2641)](""), graphProgress: t0()[s(2641)](0), comfyUserToken: S()[s(2641)](""), comfyOrgLoggedIn: x0()[s(2641)](!1), comfyOrgAPIKey: S()[s(2641)](""), comfyWSState: F0([s(1716), "reconnecting"])[s(2641)](s(1716)), lastRunTime: t0()[s(2641)](0) }), Ai = { backward: { requestSchema: zx(), responseSchema: I({ success: x0() }) }, refresh: { requestSchema: zx(), responseSchema: I({ success: x0() }) }, run: { requestSchema: zx(), responseSchema: I({ success: x0() }) } }, Di = { log: { requestSchema: I({ level: F0([s(1133), s(1604), "warn", s(503)]), messages: I0(S()) }), responseSchema: I({}) }, openExternalLink: { requestSchema: I({ url: S() }), responseSchema: I({ error: S()[s(1285)]() }) }, getStorage: { requestSchema: I({ key: S() }), responseSchema: I({ value: S(), error: S()[s(1285)]() }) }, setStorage: { requestSchema: I({ key: S(), value: S() }), responseSchema: I({ error: S()[s(1285)]() }) }, removeStorage: { requestSchema: I({ key: S() }), responseSchema: I({ error: S()[s(1285)]() }) }, keyboardAction: { requestSchema: I({ keycode: S() }), responseSchema: I({}) }, setComfyWebviewURL: { requestSchema: I({ url: S() }), responseSchema: I({}) }, getImageBase64: { requestSchema: I({ token: S() }), responseSchema: I({ base64: S()[s(1285)](), mimeType: S()[s(1285)](), error: S().optional() }) }, uploadComfyImage: { requestSchema: I({ uploadInput: I({ type: r0(s(1095)).or(r0(s(782))), tokenOrBuffer: D0(), fileName: S() }), overwrite: x0()[s(1285)]()[s(2641)](!0) }), responseSchema: I({ name: S() }) }, proxiedFetch: { requestSchema: I({ url: S(), method: S()[s(1285)](), headers: H0(S())[s(1285)](), body: D0().optional(), bodyType: F0([s(1003), s(2528), s(1645)]).optional() }), responseSchema: I({ success: x0(), status: t0().optional(), statusText: S().optional(), headers: H0(S())[s(1285)](), data: D0().optional(), error: S()[s(1285)]() }) }, openaiImageEdit: { requestSchema: I({ apiKey: S(), baseURL: S(), imageToken: S(), prompt: S(), model: S() }), responseSchema: I({ success: x0(), imageUrl: S()[s(1285)](), apiTime: t0().optional(), error: S()[s(1285)]() }) }, geminiImageGenerate: { requestSchema: I({ apiKey: S(), baseURL: S()[s(1285)](), imageInputs: I0(S())[s(1285)](), imageInput: S()[s(1285)](), imageInputType: F0([s(782), s(2287)]), prompt: S() }), responseSchema: I({ success: x0(), imageUrl: S()[s(1285)](), apiTime: t0()[s(1285)](), error: S()[s(1285)]() }) } };
I({ thumbnail_url: S()[s(1285)](), file_token: S()[s(1285)](), source: S()[s(1285)](), error: S()[s(1285)]() });
const Or = I({ boundary: F0([s(1805), s(424), "selection"]), content: F0([s(1805), "curlayer", s(684)]).or(S()), imageSize: t0(), imageQuality: t0(), cropBySelection: F0(["no", "positive", s(936)]) }), Ar = I({ content: F0(["canvas", "curlayer", s(684)]), reverse: x0(), imageSize: t0() });
I({ selection: F0(["newdoc_canvas", s(2658), s(2630), s(724), s(1950), s(2141), s(2462), "newdoc_canvas"]), url: S(), source: S(), cropBySelection: F0(["no", s(1115), s(936)]) });
const ji = { downloadImage: { requestSchema: I({ url: S() }), responseSchema: I({ thumbnail_url: S()[s(1285)](), nativePath: S()[s(1285)](), width: t0()[s(1285)](), height: t0()[s(1285)](), error: S()[s(1285)]() }) }, deleteDownloadedImage: { requestSchema: I({ nativePaths: I0(S()) }), responseSchema: I({ error: S()[s(1285)]() }) }, requestAndDoSaveImage: { requestSchema: I({ nativePaths: I0(S()) }), responseSchema: I({ error: S()[s(1285)]() }) } }, Mi = I({ passwordPayload: I({ username: S(), password: S() }).or(I({ email: S(), password: S() })).or(I({ phone: S(), password: S() })).or(I({ identifier: S(), password: S() })) }).or(I({ passcodePayload: I({ phone: S(), code: S() }).or(I({ email: S(), code: S() })) })), Li = I({ passwordPayload: I({ username: S(), password: S() }).or(I({ email: S(), password: S() })).or(I({ phone: S(), password: S() })).or(I({ identifier: S(), password: S() })) }).or(I({ passcodePayload: I({ phone: S(), code: S() }).or(I({ email: S(), code: S() })) })), $i = { register: { requestSchema: Mi, responseSchema: I({}) }, login: { requestSchema: Li, responseSchema: I({}) }, sendPassCode: { requestSchema: I({ phone: S().optional(), email: S()[s(1285)]() }), responseSchema: I({}) }, logout: { requestSchema: I({}), responseSchema: I({}) }, guestLogin: { requestSchema: I({}), responseSchema: I({}) } }, Hx = I({ taskId: S(), taskName: S(), status: F0([s(527), "completed", s(931), s(443)]), currentStep: t0().optional(), totalSteps: t0()[s(1285)](), stepDescription: S()[s(1285)](), progressPercentage: t0()[s(1524)](0)[s(2537)](100)[s(1285)](), startTime: S(), endTime: S()[s(1285)](), error: S().optional(), errorCode: S()[s(1285)](), result: D0()[s(1285)](), metadata: H0(D0())[s(1285)]() }), Ux = I({ success: x0(), error: S()[s(1285)]() }), zi = { taskAdd: { requestSchema: Hx, responseSchema: Ux }, taskUpdate: { requestSchema: Hx[s(403)]()[s(848)]({ taskId: !0 }), responseSchema: Ux }, taskRemove: { requestSchema: Hx[s(470)]({ taskId: !0 }), responseSchema: Ux } }, Hi = { manageGuides: { requestSchema: I({ action: F0(["create", "clear"]), rect: Fe[s(1285)]() }), responseSchema: I({ success: x0() }) }, openImagesFromFile: { requestSchema: I({ nativePath: S(), boundary: Fe[s(1285)]() }), responseSchema: I({ success: x0(), documentId: t0(), documentName: S(), width: t0(), height: t0() }) }, getBoundary: { requestSchema: I({ type: F0([s(424), "selection"]) }), responseSchema: Fe }, getImage: { requestSchema: I({ boundary: J0([F0(["canvas", s(424), s(684)]), Fe]), content: J0([F0([s(1805), "curlayer"]), S()]), imageSize: t0(), imageQuality: t0(), cropBySelection: F0(["no", s(1115), s(936)]) }), responseSchema: I({ thumbnail_url: S()[s(1285)](), file_token: S()[s(1285)](), source: S().optional(), error: S()[s(1285)]() }) }, getMask: { requestSchema: I({ boundary: J0([F0(["canvas", s(424), "selection"]), Fe]), content: F0([s(1805), s(424), s(684)]), reverse: x0(), imageSize: t0() }), responseSchema: I({ thumbnail_url: S().optional(), file_token: S()[s(1285)](), source: S()[s(1285)](), error: S().optional() }) }, importImage: { requestSchema: I({ nativePath: S(), boundary: J0([F0([s(1805), s(424), s(684)]), Fe])[s(1285)](), type: F0(["canvas", "curlayer", s(1899), s(1052)]), sourceWidth: t0().optional(), sourceHeight: t0()[s(1285)]() }), responseSchema: I({ success: x0(), layers: I0(I({ identify: S() }))[s(1285)](), message: S().optional(), error: S()[s(1285)]() }) }, showBoundarySelectionDialog: { requestSchema: I({ additionalData: H0(D0())[s(1285)]() }), responseSchema: I({ boundary: F0([s(1805), "curlayer", "selection"])[s(1285)](), cancelled: x0()[s(1285)]() }) }, selectCanvasImage: { requestSchema: I({ additionalData: H0(D0())[s(1285)]() }), responseSchema: I({ getImageParams: Or[s(1285)](), source: S()[s(1285)](), cancelled: x0()[s(1285)]() }) }, selectLayerImage: { requestSchema: I({ additionalData: H0(D0()).optional() }), responseSchema: I({ getImageParams: Or[s(1285)](), source: S()[s(1285)](), cancelled: x0()[s(1285)]() }) }, selectLayerMask: { requestSchema: I({ additionalData: H0(D0()).optional() }), responseSchema: I({ getMaskParams: Ar[s(1285)](), source: S()[s(1285)](), cancelled: x0()[s(1285)]() }) }, selectSelectionMask: { requestSchema: I({ additionalData: H0(D0())[s(1285)]() }), responseSchema: I({ getMaskParams: Ar[s(1285)](), source: S().optional(), cancelled: x0().optional() }) } }, Ui = I({ workflows: I0(S()), error: S()[s(1285)]() }), Vi = I({ success: x0(), nodeErrors: H0(S()).optional(), prompt_ids: I0(S())[s(1285)](), images: I0(I({ url: S(), thumbnail: S() }))[s(1285)]() }), Wi = { setWidgetValue: { requestSchema: I({ values: I0(I({ nodeID: S(), widgetIndex: t0(), value: H0(S(), D0()).or(S()).or(t0()).or(x0()).or(I0(D0())) })) }), responseSchema: I({ success: x0() }) }, openWorkflow: { requestSchema: I({ workflow_path: S(), reset: x0()[s(2641)](!1) }), responseSchema: I({ success: x0() }) }, openWorkflowJSON: { requestSchema: I({ workflow_content: H0(D0()), workflow_path: S() }), responseSchema: I({ success: x0() }) }, listWorkflows: { requestSchema: I({ listMode: S()[s(1285)](), sdpppID: S().optional(), sdpppToken: S().optional() }), responseSchema: Ui }, saveWorkflow: { requestSchema: I({ workflow_path: S(), from_sid: S().optional() }), responseSchema: I({ success: x0() }) }, run: { requestSchema: I({ size: t0() }), responseSchema: Vi, stream: !0 }, stopAll: { requestSchema: I({}), responseSchema: I({ success: x0() }) } }, Zi = { setNodeTitle: { requestSchema: I({ node_id: S(), title: S() }), responseSchema: I({ success: x0() }) }, reboot: { requestSchema: I({}), responseSchema: I({ success: x0(), error: S()[s(1285)]() }) }, setComfyOrgAPIKey: { requestSchema: I({ api_key: S() }), responseSchema: I({ success: x0() }) }, logout: { requestSchema: I({}), responseSchema: I({ success: x0() }) } }, Bi = bi({ nodes: { sdk: { store: qi, actions: { ...Ai } }, uxp: { store: Ti, actions: { ...ji, ...Di, ...$i, ...zi, ...Hi } }, comfy: { store: Oi, actions: { ...Wi, ...Zi } } }, edges: [[s(1695), s(780)], [s(978), s(780)]] }), C0 = Bi.joinAs(s(978));
globalThis[s(2019)] = C0, globalThis.sdpppX2 = globalThis.sdpppX2 || {};
const _e = globalThis[s(653)], Ki = { "preview.show": "显示预览框 ({{count}}张图片)", "gateway.select_ai_service": s(1858), "provider.select.title": s(1108), "provider.comfyui.description": "自定义AI工作流引擎", "provider.replicate.description": s(595), "provider.runninghub.description": s(427), "provider.google.description": "OpenAI/Google 格式API", "task.waiting_upload": s(1273), "task.creating_task": s(1390), "task.running_duration": s(2567), "task.cancelled": s(1620), "task.cancel_failed": s(1595), "comfy.connect": "连接", "comfy.load_failed": s(1177), "comfy.loading": s(1845), "comfy.channel_connecting": s(1809), "comfy.server_reconnecting": "ComfyUI服务器重连中", "comfy.version_mismatch": s(2194), "comfy.cloud_recommend": "云端推荐：", "comfy.your_workflows": "你的工作流", "comfy.refresh_workflows": "刷新工作流列表", "comfy.queue_progress": "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": "停止并取消全部", "comfy.stop_auto_run": "停止自动运行", "comfy.start_auto_run": s(1986), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": s(2327), "comfy.help_tooltip": s(2153), "boundary.title": s(486), "boundary.tooltip": "AI使用的区域与最大尺寸控制", "boundary.current_canvas": s(397), "boundary.current_layer": s(1936), "boundary.current_selection": s(2430), "boundary.set_as_canvas": "设为画布", "boundary.set_as_layer": "设为当前图层", "boundary.set_as_selection": s(362), "http.404": s(1104), "http.401": s(2010), "http.403": "禁止访问 (403)", "http.408": "请求超时 (408)", "http.500": "服务器错误 (500)", "http.501": s(2365), "http.502": "网关错误 (502)", "http.503": s(826), "http.504": s(430), "http.unknown": s(1160), "runninghub.get_apikey": s(1749), "runninghub.apikey_placeholder": "请输入您的RunningHub API Key", "runninghub.app_id": "应用ID:", "runninghub.webapp_id_placeholder": s(554), "runninghub.open_app": s(2004), "runninghub.execute": "执行", "runninghub.rh_coins": "RH币:", "runninghub.current_tasks": s(1768), "runninghub.help_tooltip": "使用教程", "runninghub.status.waiting": "排队等待", "runninghub.status.running": "正在运行", "runninghub.status.failed": s(382), "runninghub.status.success": s(713), "image.auto_refetch": s(2034), "runninghub.error.get_result_failed": s(882), "runninghub.error.task_failed": s(785), "runninghub.error.task_incomplete": "任务未完成，当前状态: {{status}}", "replicate.get_apikey": s(416), "replicate.apikey_placeholder": s(1938), "replicate.execute": "执行", "replicate.model_placeholder": s(561), "replicate.help_tooltip": s(2153), "liblib.get_apikey": s(1210), "liblib.execute": "执行", "common.close": "关闭", "common.save_and_run": "保存并立即执行", "common.loading": "加载中...", "common.error": "错误", "common.success": "成功", "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": s(879), webviewInForeground: s(2018), webviewInForeground2: "点我恢复", "auth.login_success": "登录成功", "auth.username_label": "用户名: {{username}}", "auth.email_label": s(2222), "auth.logout": "退出登录", "auth.login_required": s(1015), "image.send.select_position": "请选择要发送图像的位置", "image.send.sending": s(1669), "image.layer.new": s(1529), "image.layer.current": s(1936), "image.layer.fit_to_current": s(1972), "image.layer.fit_to_selection": s(948), "image.layer.fit_to_canvas": s(1539), "image.shortcut_auth_required": s(1639), "image.shortcut_focus_required": s(1929), "image.get.select_image": s(494), "image.get.entire_canvas": s(397), "image.get.canvas": "画布", "image.get.current_layer": s(1936), "image.get.current_layer_bounds": s(1944), "image.get.selection_bounds": s(1317), "image.get.canvas_bounds": s(1543), "image.crop_by_selection": s(2076), "image.limit_size": s(1974), "image.crop.none": "不裁剪", "image.crop.inpaint": s(1454), "image.crop.outpaint": "正向裁剪(Outpaint)", "image.send_all": s(1968), "image.save_all": "保存所有", "image.save_current": s(2064), "image.delete_current": "删除当前", "image.more_actions": s(2496), "image.jump_to_last": s(355), "image.clear_all": s(1746), "image.send_to_ps": "发送到PS", "image.download": "下载", "image.copy": "复制", "image.sending": s(1784), "image.sending_all": "正在发送所有图片...", "mask.get.select_mask": s(854), "mask.selection": "选区", "mask.current_layer_bounds": s(791), "mask.all": "全部", "mask.selection_exclude": "选区除外", "mask.current_layer_exclude": s(880), "mask.empty": "空", "document {{0}} not found": s(442), "create document for preview": s(1312), "resize document for preview": s(332), "create document for sent images": s(1395), "show sent images": s(349), "create layer failed": s(2257), "layer not found {{0}}": s(2569), "layer not found: {{0}}": s(2569), "layer {{0}} is not a group": s(1616), "no linked layer for {{0}}": "没有链接图层: {{0}}", "no first related layer in {{0}}": s(1767), "merge group failed": s(1747), "get content of layer {{0}}": s(2424), "get layer info": "获取图层信息", "get_layer_info: layer_identify required": "get_layer_info: 需要 layer_identify", "get pixel of {{0}} failed": s(1558), "get selection failed": s(314), "invalid name: {{0}}": s(784), "desire bounds is null": s(1132), "intersect or scaledDesire is null": s(348), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': "不支持非文本图层: {{0}}", "select layer": "sdppp 选中图层", "run Photoshop Action": "sdppp 运行 Photoshop Action", "Action {{0}} not found": "Action {{0}} 未找到", "Action set {{0}} not found": "ActionSet {{0}} 未找到", "set text to layer": "设置图层的文本", "ComfyManager not found, cannot reboot": s(1467), "Failed to reboot ComfyUI": s(1265), "image.upload.from_canvas": "画布", "image.upload.from_curlayer": s(1936), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "硬盘", "image.upload.clear": "清空", "image.upload.uploading": "上传中，如果图片过大，可能会卡顿...", "image.upload.no_images": s(847), "image.upload.tooltip.more_options_hint": s(916), "image.upload.tooltip.alt.crop": s(830), "image.upload.tooltip.alt.reverse": s(1370), "image.upload.tooltip.shift.once": s(406), "image.upload.tooltip.image.canvas": s(2478), "image.upload.tooltip.image.curlayer": s(1016), "image.upload.tooltip.mask.curlayer": s(2635), "image.upload.tooltip.mask.selection": s(2335), "image.upload.tooltip.mask.canvas": s(1599), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": s(964), "source.ps_mask": "PS遮罩", "source.canvas": s(397), "source.current_layer": s(1936), "source.selection": "选区", "source.quality_percent": s(1494), "source.crop.positive": s(850), "source.crop.negative": s(368), "source.reverse": "反转", "send_images.create_document": s(1744), "send_images.create_document_failed": "创建文档失败", "photoshop.no_active_document": s(1423), "photoshop.rectangle_coordinates_required": s(619), "photoshop.create_guide_frame": "创建参考线框架", "photoshop.clear_guide_frame": s(480), "photoshop.invalid_action": "无效操作: {{action}}", "photoshop.file_not_found": s(1118), "photoshop.failed_to_open_file_as_document": s(2402), "photoshop.invalid_boundary": s(1109), "photoshop.failed_to_open_image_file": s(435), "photoshop.open_images_from_file": s(1149), "photoshop.failed_to_create_document_from_file": "无法从文件创建文档", "google.field.image_input": s(2535), "google.field.prompt": s(1717), "google.field.batch_count": s(577), "google.field.images_per_batch": s(387), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": s(438), "google.apikey_placeholder": s(1110), "google.baseurl_placeholder": s(776), "google.get_apikey": s(369), "google.help_tooltip": s(476), "google.model_name": s(2627), "google.loading": s(588), "google.generating": s(457), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": s(2329), "image.import_as_newdoc": s(2524), "image.boundary": "边界", "image.import_tip": "按住 Shift 键以新文档方式导入", "auth.guest_login_success": "", "boundary.canvas": "画布", "boundary.select_boundary": "选择边界", "boundary.selection": "选区", "convert widget {0} failed:": "", "document {0} not found": "", "image.document.new": "", "image.layer.smart_object": "", "layer not found {0}": "", "photoshop.invalid_boundary_type": "", "photoshop.no_active_layer": "" }, Ji = { "preview.show": s(447), "gateway.select_ai_service": s(666), "provider.select.title": s(559), "provider.comfyui.description": s(2548), "provider.replicate.description": s(429), "provider.runninghub.description": s(2542), "provider.google.description": "OpenAI/Google format API", "task.waiting_upload": "Waiting for image upload...", "task.creating_task": s(460), "task.running_duration": s(790), "task.cancelled": s(296), "task.cancel_failed": "Task cancel failed: {{error}}", "comfy.connect": "Connect", "comfy.load_failed": s(1309), "comfy.loading": s(1353), "comfy.channel_connecting": s(1476), "comfy.server_reconnecting": s(2570), "comfy.version_mismatch": "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "comfy.cloud_recommend": s(304), "comfy.your_workflows": s(1786), "comfy.refresh_workflows": "Refresh workflow list", "comfy.queue_progress": s(1046), "comfy.save": s(2233), "comfy.refresh": s(2158), "comfy.stop_cancel_all": s(477), "comfy.stop_auto_run": "Stop auto run", "comfy.start_auto_run": s(1024), "comfy.run": s(1896), "comfy.back": s(822), "comfy.uploading": s(1445), "comfy.help_tooltip": s(1988), "boundary.title": s(2190), "boundary.tooltip": "Area AI reads from; controls max image size", "boundary.current_canvas": "Entire Canvas", "boundary.current_layer": s(1678), "boundary.current_selection": "Current Selection", "boundary.set_as_canvas": "Set as Canvas", "boundary.set_as_layer": s(1441), "boundary.set_as_selection": s(1496), "http.404": s(1646), "http.401": "Unauthorized (401)", "http.403": s(2266), "http.408": s(2001), "http.500": s(1269), "http.501": s(1706), "http.502": s(1224), "http.503": "Service unavailable (503)", "http.504": s(971), "http.unknown": s(472), "runninghub.get_apikey": s(2390), "runninghub.apikey_placeholder": "Enter your RunningHub API Key", "runninghub.app_id": s(1998), "runninghub.webapp_id_placeholder": s(1242), "runninghub.open_app": s(864), "runninghub.execute": s(730), "runninghub.rh_coins": s(1354), "runninghub.current_tasks": s(2481), "runninghub.help_tooltip": s(1988), "runninghub.status.waiting": s(1158), "runninghub.status.running": s(1086), "runninghub.status.failed": "Failed", "runninghub.status.success": s(408), "image.auto_refetch": "Auto repick from PS", "runninghub.error.get_result_failed": s(1039), "runninghub.error.task_failed": s(1260), "runninghub.error.task_incomplete": s(317), "replicate.get_apikey": s(481), "replicate.apikey_placeholder": "Enter your Replicate API Key", "replicate.execute": "Execute", "replicate.model_placeholder": s(1519), "replicate.help_tooltip": s(1988), "liblib.get_apikey": "How to get APIKey and API Secret", "liblib.execute": s(730), "common.close": s(1417), "common.save_and_run": s(1561), "common.loading": "Loading...", "common.error": s(889), "common.success": "Success", "common.cancel": "Cancel", "common.confirm": s(1884), "common.options": "Options", "common.options_separator": "=== Options ===", webviewInForeground: s(752), webviewInForeground2: s(2248), "auth.login_success": "Login Successful", "auth.username_label": s(374), "auth.email_label": s(685), "auth.logout": s(2182), "auth.login_required": "Please login to use the plugin", "image.send.select_position": "Please select the position to send image", "image.send.sending": s(998), "image.layer.new": s(1720), "image.layer.current": s(1678), "image.layer.fit_to_current": "Fit to current layer", "image.layer.fit_to_selection": s(2453), "image.layer.fit_to_canvas": "Fit to canvas", "image.shortcut_auth_required": s(1559), "image.shortcut_focus_required": s(1725), "image.get.select_image": s(498), "image.get.entire_canvas": s(1440), "image.get.canvas": s(1591), "image.get.current_layer": s(1678), "image.get.current_layer_bounds": s(2466), "image.get.selection_bounds": "Selection bounds only", "image.get.canvas_bounds": "Canvas bounds", "image.crop_by_selection": "Crop by selection", "image.limit_size": "Limit image size", "image.crop.none": s(797), "image.crop.inpaint": s(611), "image.crop.outpaint": "Outpaint (positive crop)", "image.send_all": s(2394), "image.save_all": s(904), "image.save_current": "Save current", "image.delete_current": s(1119), "image.more_actions": s(2640), "image.jump_to_last": s(602), "image.clear_all": s(539), "image.send_to_ps": s(1774), "image.download": s(1019), "image.copy": "Copy", "image.sending": s(958), "image.sending_all": s(2281), "mask.get.select_mask": s(345), "mask.selection": s(1270), "mask.current_layer_bounds": s(881), "mask.all": "All", "mask.selection_exclude": "Exclude selection", "mask.current_layer_exclude": s(2512), "mask.empty": "Empty", "document {{0}} not found": s(417), "create document for preview": s(1253), "resize document for preview": s(2276), "create document for sent images": "Create document for sent images", "show sent images": s(1978), "create layer failed": s(2026), "layer not found {{0}}": "Layer not found {{0}}", "layer not found: {{0}}": s(1920), "layer {{0}} is not a group": s(754), "no linked layer for {{0}}": s(333), "no first related layer in {{0}}": s(1584), "merge group failed": s(2099), "get content of layer {{0}}": s(2282), "get layer info": s(1428), "get_layer_info: layer_identify required": s(459), "get pixel of {{0}} failed": s(2259), "get selection failed": s(1682), "invalid name: {{0}}": s(517), "desire bounds is null": "Desire bounds is null", "intersect or scaledDesire is null": s(1963), 'only layer kind "TEXT" is supported, invalid layer: {{0}}': 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "select layer": s(1623), "run Photoshop Action": "Run Photoshop Action", "Action {{0}} not found": s(837), "Action set {{0}} not found": "Action set {{0}} not found", "set text to layer": s(709), "ComfyManager not found, cannot reboot": s(2519), "Failed to reboot ComfyUI": "Failed to reboot ComfyUI", "image.upload.from_canvas": s(1591), "image.upload.from_curlayer": s(1678), "image.upload.from_selection": s(1270), "image.upload.from_harddisk": s(1107), "image.upload.clear": s(634), "image.upload.uploading": s(2437), "image.upload.no_images": s(2079), "image.upload.tooltip.more_options_hint": "+Shift for more options; Ctrl to fetch once.", "image.upload.tooltip.alt.crop": "+Alt crop by selection", "image.upload.tooltip.alt.reverse": "+Alt reversed mask", "image.upload.tooltip.shift.once": s(1754), "image.upload.tooltip.image.canvas": s(342), "image.upload.tooltip.image.curlayer": "Get image from Current Layer", "image.upload.tooltip.mask.canvas": "Get mask from Canvas", "image.upload.tooltip.mask.curlayer": s(1924), "image.upload.tooltip.mask.selection": s(2428), "source.source": s(1499), "source.content": s(876), "source.boundary": s(2175), "source.mask": s(1681), "source.disk": "Disk", "source.remote": s(1992), "source.unknown": s(312), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": s(1591), "source.current_layer": s(407), "source.selection": s(1270), "source.quality_percent": s(1121), "source.crop.positive": "Positive Crop", "source.crop.negative": s(2121), "source.reverse": s(2482), "send_images.create_document": "Create document", "send_images.create_document_failed": s(827), "photoshop.no_active_document": s(2321), "photoshop.rectangle_coordinates_required": s(428), "photoshop.create_guide_frame": s(2476), "photoshop.clear_guide_frame": s(938), "photoshop.invalid_action": s(1970), "photoshop.file_not_found": "File not found: {{path}}", "photoshop.failed_to_open_file_as_document": s(1171), "photoshop.invalid_boundary": s(812), "photoshop.failed_to_open_image_file": s(1394), "photoshop.open_images_from_file": s(1859), "photoshop.failed_to_create_document_from_file": s(1139), "google.field.image_input": s(857), "google.field.prompt": s(402), "google.field.batch_count": s(657), "google.field.images_per_batch": "Images Per Batch", "google.status.success": s(408), "google.status.failed": s(2507), "google.status.generating": s(319), "google.apikey_placeholder": s(2242), "google.get_apikey": s(961), "google.baseurl_placeholder": "Base URL", "google.help_tooltip": s(2065), "google.model_name": s(1830), "google.loading": s(2279), "google.generating": s(1546), "google.generate": s(1815), "image.auto_toggle": s(1694), "image.import_as_smartobject": "Import as Smart Object", "image.import_as_newdoc": "Import as New Document", "image.boundary": s(425), "image.import_tip": "Hold Shift key to import as new document", "auth.guest_login_success": s(2305), "boundary.canvas": s(1591), "boundary.select_boundary": s(282), "boundary.selection": s(1270), "convert widget {0} failed:": s(385), "document {0} not found": s(1261), "image.document.new": s(1076), "image.layer.smart_object": s(1758), "layer not found {0}": s(2534), "photoshop.invalid_boundary_type": "photoshop.invalid_boundary_type", "photoshop.no_active_layer": s(1987) }, m0 = (i) => typeof i == "string", Ge = () => {
  var i = s;
  let x, t;
  const a = new Promise((e, r) => {
    x = e, t = r;
  });
  return a[i(1890)] = x, a[i(2201)] = t, a;
}, Dr = (i) => i == null ? "" : "" + i, Gi = (i, x, t) => {
  var a = s;
  i[a(1222)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, Qi = /###/g, jr = (i) => i && i[s(831)](s(705)) > -1 ? i[s(2112)](Qi, ".") : i, Mr = (i) => !i || m0(i), ex = (i, x, t) => {
  var a = s;
  const e = m0(x) ? x[a(2183)](".") : x;
  let r = 0;
  for (; r < e.length - 1; ) {
    if (Mr(i)) return {};
    const n = jr(e[r]);
    !i[n] && t && (i[n] = new t()), Object.prototype[a(781)][a(1547)](i, n) ? i = i[n] : i = {}, ++r;
  }
  return Mr(i) ? {} : { obj: i, k: jr(e[r]) };
}, Lr = (i, x, t) => {
  var a = s;
  const { obj: e, k: r } = ex(i, x, Object);
  if (e !== void 0 || x[a(2021)] === 1) {
    e[r] = t;
    return;
  }
  let n = x[x[a(2021)] - 1], o = x[a(1813)](0, x[a(2021)] - 1), c = ex(i, o, Object);
  for (; c.obj === void 0 && o[a(2021)]; )
    n = o[o[a(2021)] - 1] + "." + n, o = o[a(1813)](0, o.length - 1), c = ex(i, o, Object), c != null && c[a(1418)] && typeof c[a(1418)][c.k + "." + n] < "u" && (c.obj = void 0);
  c.obj[c.k + "." + n] = t;
}, Xi = (i, x, t, a) => {
  var e = s;
  const { obj: r, k: n } = ex(i, x, Object);
  r[n] = r[n] || [], r[n][e(2380)](t);
}, Px = (i, x) => {
  var t = s;
  const { obj: a, k: e } = ex(i, x);
  if (a && Object[t(2180)].hasOwnProperty.call(a, e))
    return a[e];
}, Yi = (i, x, t) => {
  const a = Px(i, t);
  return a !== void 0 ? a : Px(x, t);
}, Hs = (i, x, t) => {
  var a = s;
  for (const e in x)
    e !== a(1416) && e !== a(599) && (e in i ? m0(i[e]) || i[e] instanceof String || m0(x[e]) || x[e] instanceof String ? t && (i[e] = x[e]) : Hs(i[e], x[e], t) : i[e] = x[e]);
  return i;
}, He = (i) => i[s(2112)](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, s(2592));
var _i = { "&": s(2298), "<": "&lt;", ">": s(1862), '"': s(286), "'": s(2320), "/": s(544) };
const eo = (i) => {
  var x = s;
  return m0(i) ? i[x(2112)](/[&<>"'\/]/g, (t) => _i[t]) : i;
};
class xo {
  constructor(x) {
    var t = s;
    this[t(1618)] = x, this[t(1922)] = /* @__PURE__ */ new Map(), this[t(2370)] = [];
  }
  [s(970)](x) {
    var t = s;
    const a = this.regExpMap[t(2229)](x);
    if (a !== void 0) return a;
    const e = new RegExp(x);
    return this[t(2370)][t(2021)] === this[t(1618)] && this[t(1922)].delete(this[t(2370)].shift()), this[t(1922)].set(x, e), this[t(2370)][t(2380)](x), e;
  }
}
const to = [" ", ",", "?", "!", ";"], ro = new xo(20), ao = (i, x, t) => {
  var a = s;
  x = x || "", t = t || "";
  const e = to[a(2397)]((o) => x[a(831)](o) < 0 && t[a(831)](o) < 0);
  if (e[a(2021)] === 0) return !0;
  const r = ro.getRegExp("(" + e[a(632)]((o) => o === "?" ? "\\?" : o)[a(2515)]("|") + ")");
  let n = !r[a(856)](i);
  if (!n) {
    const o = i[a(831)](t);
    o > 0 && !r[a(856)](i[a(531)](0, o)) && (n = !0);
  }
  return n;
}, Kt = (i, x, t = ".") => {
  var a = s;
  if (!i) return;
  if (i[x])
    return Object[a(2180)].hasOwnProperty[a(1547)](i, x) ? i[x] : void 0;
  const e = x.split(t);
  let r = i;
  for (let n = 0; n < e.length; ) {
    if (!r || typeof r !== a(1923)) return;
    let o, c = "";
    for (let u = n; u < e[a(2021)]; ++u)
      if (u !== n && (c += t), c += e[u], o = r[c], o !== void 0) {
        if ([a(2348), a(960), a(2251)][a(831)](typeof o) > -1 && u < e[a(2021)] - 1) continue;
        n += u - n + 1;
        break;
      }
    r = o;
  }
  return r;
}, rx = (i) => i == null ? void 0 : i.replace("_", "-"), so = { type: "logger", log(i) {
  var x = s;
  this.output(x(1133), i);
}, warn(i) {
  var x = s;
  this[x(464)](x(1797), i);
}, error(i) {
  var x = s;
  this[x(464)]("error", i);
}, output(i, x) {
  var a, e;
  var t = s;
  (e = (a = console == null ? void 0 : console[i]) == null ? void 0 : a[t(756)]) == null || e.call(a, console, x);
} };
class Rx {
  constructor(x, t = {}) {
    var a = s;
    this[a(1448)](x, t);
  }
  [s(1448)](x, t = {}) {
    var a = s;
    this[a(967)] = t[a(967)] || a(1464), this.logger = x || so, this.options = t, this[a(2491)] = t[a(2491)];
  }
  [s(1133)](...x) {
    var t = s;
    return this[t(1308)](x, t(1133), "", !0);
  }
  [s(1797)](...x) {
    var t = s;
    return this[t(1308)](x, t(1797), "", !0);
  }
  [s(503)](...x) {
    var t = s;
    return this[t(1308)](x, "error", "");
  }
  [s(1305)](...x) {
    var t = s;
    return this.forward(x, "warn", t(419), !0);
  }
  forward(x, t, a, e) {
    var r = s;
    return e && !this[r(2491)] ? null : (m0(x[0]) && (x[0] = "" + a + this[r(967)] + " " + x[0]), this[r(1238)][t](x));
  }
  [s(2196)](x) {
    var t = s;
    return new Rx(this[t(1238)], { prefix: this[t(967)] + ":" + x + ":", ...this.options });
  }
  [s(1879)](x) {
    var t = s;
    return x = x || this[t(778)], x.prefix = x.prefix || this.prefix, new Rx(this[t(1238)], x);
  }
}
var he = new Rx();
class Nx {
  constructor() {
    this.observers = {};
  }
  on(x, t) {
    var a = s;
    return x.split(" ")[a(1222)]((e) => {
      var r = a;
      this[r(2302)][e] || (this.observers[e] = /* @__PURE__ */ new Map());
      const n = this.observers[e][r(2229)](t) || 0;
      this[r(2302)][e][r(1951)](t, n + 1);
    }), this;
  }
  off(x, t) {
    var a = s;
    if (this.observers[x]) {
      if (!t) {
        delete this[a(2302)][x];
        return;
      }
      this[a(2302)][x][a(2434)](t);
    }
  }
  [s(2206)](x, ...t) {
    var a = s;
    this[a(2302)][x] && Array[a(1147)](this[a(2302)][x][a(446)]())[a(1222)](([r, n]) => {
      for (let o = 0; o < n; o++)
        r(...t);
    }), this.observers["*"] && Array.from(this[a(2302)]["*"][a(446)]()).forEach(([r, n]) => {
      var o = a;
      for (let c = 0; c < n; c++)
        r[o(756)](r, [x, ...t]);
    });
  }
}
class $r extends Nx {
  constructor(x, t = { ns: [s(1286)], defaultNS: s(1286) }) {
    var a = s;
    super(), this.data = x || {}, this[a(778)] = t, this.options[a(1981)] === void 0 && (this[a(778)][a(1981)] = "."), this[a(778)][a(1296)] === void 0 && (this[a(778)][a(1296)] = !0);
  }
  addNamespaces(x) {
    var t = s;
    this.options.ns.indexOf(x) < 0 && this.options.ns[t(2380)](x);
  }
  [s(2157)](x) {
    var t = s;
    const a = this.options.ns[t(831)](x);
    a > -1 && this.options.ns.splice(a, 1);
  }
  [s(462)](x, t, a, e = {}) {
    var d, f;
    var r = s;
    const n = e[r(1981)] !== void 0 ? e[r(1981)] : this.options[r(1981)], o = e.ignoreJSONStructure !== void 0 ? e[r(1296)] : this.options.ignoreJSONStructure;
    let c;
    x[r(831)](".") > -1 ? c = x[r(2183)](".") : (c = [x, t], a && (Array.isArray(a) ? c.push(...a) : m0(a) && n ? c[r(2380)](...a.split(n)) : c.push(a)));
    const u = Px(this[r(1073)], c);
    return !u && !t && !a && x.indexOf(".") > -1 && (x = c[0], t = c[1], a = c[r(1813)](2)[r(2515)](".")), u || !o || !m0(a) ? u : Kt((f = (d = this[r(1073)]) == null ? void 0 : d[x]) == null ? void 0 : f[t], a, n);
  }
  [s(1310)](x, t, a, e, r = { silent: !1 }) {
    var n = s;
    const o = r[n(1981)] !== void 0 ? r[n(1981)] : this[n(778)][n(1981)];
    let c = [x, t];
    a && (c = c.concat(o ? a[n(2183)](o) : a)), x.indexOf(".") > -1 && (c = x[n(2183)]("."), e = t, t = c[1]), this[n(392)](t), Lr(this[n(1073)], c, e), r[n(1033)] || this.emit(n(1564), x, t, a, e);
  }
  addResources(x, t, a, e = { silent: !1 }) {
    var r = s;
    for (const n in a)
      (m0(a[n]) || Array[r(1435)](a[n])) && this[r(1310)](x, t, n, a[n], { silent: !0 });
    e.silent || this[r(2206)](r(1564), x, t, a);
  }
  [s(711)](x, t, a, e, r, n = { silent: !1, skipCopy: !1 }) {
    var o = s;
    let c = [x, t];
    x[o(831)](".") > -1 && (c = x[o(2183)]("."), e = a, a = t, t = c[1]), this[o(392)](t);
    let u = Px(this[o(1073)], c) || {};
    n[o(903)] || (a = JSON[o(1325)](JSON[o(990)](a))), e ? Hs(u, a, r) : u = { ...u, ...a }, Lr(this[o(1073)], c, u), n[o(1033)] || this.emit(o(1564), x, t, a);
  }
  removeResourceBundle(x, t) {
    var a = s;
    this[a(1603)](x, t) && delete this[a(1073)][x][t], this[a(2157)](t), this[a(2206)](a(1266), x, t);
  }
  [s(1603)](x, t) {
    var a = s;
    return this[a(462)](x, t) !== void 0;
  }
  getResourceBundle(x, t) {
    var a = s;
    return t || (t = this[a(778)].defaultNS), this[a(462)](x, t);
  }
  [s(521)](x) {
    var t = s;
    return this[t(1073)][x];
  }
  [s(1011)](x) {
    var t = s;
    const a = this[t(521)](x);
    return !!(a && Object[t(1040)](a) || [])[t(1666)]((r) => a[r] && Object.keys(a[r])[t(2021)] > 0);
  }
  [s(2393)]() {
    return this.data;
  }
}
var Us = { processors: {}, addPostProcessor(i) {
  var x = s;
  this[x(478)][i[x(940)]] = i;
}, handle(i, x, t, a, e) {
  return i.forEach((r) => {
    var o;
    var n = K;
    x = ((o = this[n(478)][r]) == null ? void 0 : o[n(535)](x, t, a, e)) ?? x;
  }), x;
} };
const zr = {}, Hr = (i) => !m0(i) && typeof i !== s(2251) && typeof i !== s(960);
class Cx extends Nx {
  constructor(x, t = {}) {
    var a = s;
    super(), Gi(["resourceStore", a(966), "pluralResolver", a(556), a(1459), a(1482), a(846)], x, this), this.options = t, this[a(778)][a(1981)] === void 0 && (this[a(778)][a(1981)] = "."), this[a(1238)] = he.create(a(1345));
  }
  [s(1650)](x) {
    var t = s;
    x && (this[t(1867)] = x);
  }
  exists(x, t = { interpolation: {} }) {
    var a = s;
    const e = { ...t };
    if (x == null) return !1;
    const r = this[a(1890)](x, e);
    return (r == null ? void 0 : r.res) !== void 0;
  }
  extractFromKey(x, t) {
    var a = s;
    let e = t.nsSeparator !== void 0 ? t[a(1714)] : this[a(778)].nsSeparator;
    e === void 0 && (e = ":");
    const r = t[a(1981)] !== void 0 ? t[a(1981)] : this[a(778)][a(1981)];
    let n = t.ns || this[a(778)].defaultNS || [];
    const o = e && x[a(831)](e) > -1, c = !this.options[a(1718)] && !t.keySeparator && !this[a(778)][a(1677)] && !t[a(1714)] && !ao(x, e, r);
    if (o && !c) {
      const u = x[a(2069)](this[a(556)].nestingRegexp);
      if (u && u.length > 0) return { key: x, namespaces: m0(n) ? [n] : n };
      const d = x[a(2183)](e);
      (e !== r || e === r && this.options.ns.indexOf(d[0]) > -1) && (n = d[a(761)]()), x = d.join(r);
    }
    return { key: x, namespaces: m0(n) ? [n] : n };
  }
  [s(2272)](x, t, a) {
    var e = s;
    let r = typeof t === e(1923) ? { ...t } : t;
    if (typeof r !== e(1923) && this[e(778)][e(2127)] && (r = this.options.overloadTranslationOptionHandler(arguments)), typeof options === e(1923) && (r = { ...r }), r || (r = {}), x == null) return "";
    Array[e(1435)](x) || (x = [String(x)]);
    const n = r[e(1151)] !== void 0 ? r.returnDetails : this[e(778)][e(1151)], o = r.keySeparator !== void 0 ? r[e(1981)] : this.options[e(1981)], { key: c, namespaces: u } = this[e(1203)](x[x.length - 1], r), d = u[u[e(2021)] - 1];
    let f = r[e(1714)] !== void 0 ? r[e(1714)] : this[e(778)][e(1714)];
    f === void 0 && (f = ":");
    const l = r.lng || this.language, v = r[e(1721)] || this[e(778)].appendNamespaceToCIMode;
    if ((l == null ? void 0 : l[e(1991)]()) === e(2362))
      return v ? n ? { res: "" + d + f + c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: d, usedParams: this.getUsedParamsDetails(r) } : "" + d + f + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: d, usedParams: this[e(1728)](r) } : c;
    const h = this[e(1890)](x, r);
    let m = h == null ? void 0 : h[e(1376)];
    const y = (h == null ? void 0 : h[e(1302)]) || c, w = (h == null ? void 0 : h[e(2068)]) || c, E = [e(538), "[object Function]", e(1798)], O = r[e(2513)] !== void 0 ? r[e(2513)] : this[e(778)][e(2513)], T = !this[e(1482)] || this[e(1482)][e(1766)], R = r[e(415)] !== void 0 && !m0(r[e(415)]), k = Cx[e(287)](r), N = R ? this[e(1097)][e(794)](l, r[e(415)], r) : "", j = r[e(1625)] && R ? this.pluralResolver[e(794)](l, r[e(415)], { ordinal: !1 }) : "", D = R && !r[e(1625)] && r[e(415)] === 0, M = D && r["defaultValue" + this.options.pluralSeparator + e(284)] || r[e(704) + N] || r[e(704) + j] || r.defaultValue;
    let F = m;
    T && !m && k && (F = M);
    const C = Hr(F), H = Object[e(2180)][e(1892)][e(756)](F);
    if (T && F && C && E[e(831)](H) < 0 && !(m0(O) && Array[e(1435)](F))) {
      if (!r[e(2050)] && !this[e(778)][e(2050)]) {
        !this[e(778)][e(1298)] && this[e(1238)][e(1797)]("accessing an object - but returnObjects options is not enabled!");
        const U = this[e(778)][e(1298)] ? this[e(778)][e(1298)](y, F, { ...r, ns: u }) : e(1123) + c + " (" + this[e(1867)] + e(2403);
        return n ? (h[e(1376)] = U, h.usedParams = this[e(1728)](r), h) : U;
      }
      if (o) {
        const U = Array.isArray(F), V = U ? [] : {}, J = U ? w : y;
        for (const c0 in F)
          if (Object[e(2180)][e(781)][e(1547)](F, c0)) {
            const u0 = "" + J + o + c0;
            k && !m ? V[c0] = this[e(2272)](u0, { ...r, defaultValue: Hr(M) ? M[c0] : void 0, joinArrays: !1, ns: u }) : V[c0] = this[e(2272)](u0, { ...r, joinArrays: !1, ns: u }), V[c0] === u0 && (V[c0] = F[c0]);
          }
        m = V;
      }
    } else if (T && m0(O) && Array[e(1435)](m))
      m = m[e(2515)](O), m && (m = this[e(309)](m, x, r, a));
    else {
      let U = !1, V = !1;
      !this.isValidLookup(m) && k && (U = !0, m = M), !this[e(799)](m) && (V = !0, m = c);
      const J = r.missingKeyNoValueFallbackToKey || this[e(778)].missingKeyNoValueFallbackToKey, c0 = J && V ? void 0 : m, u0 = k && M !== m && this[e(778)][e(728)];
      if (V || U || u0) {
        if (this[e(1238)][e(1133)](e(u0 ? 1101 : 2274), l, d, c, u0 ? M : m), o) {
          const S0 = this[e(1890)](c, { ...r, keySeparator: !1 });
          S0 && S0[e(1376)] && this[e(1238)][e(1797)](e(2381));
        }
        let l0 = [];
        const i0 = this[e(966)][e(2412)](this[e(778)][e(2177)], r[e(2028)] || this[e(1867)]);
        if (this[e(778)].saveMissingTo === e(1617) && i0 && i0[0]) for (let S0 = 0; S0 < i0[e(2021)]; S0++)
          l0[e(2380)](i0[S0]);
        else this.options.saveMissingTo === e(1897) ? l0 = this[e(966)][e(2101)](r[e(2028)] || this[e(1867)]) : l0[e(2380)](r[e(2028)] || this[e(1867)]);
        const f0 = (S0, y0, M0) => {
          var A;
          var P0 = e;
          const Q0 = k && M0 !== m ? M0 : c0;
          this[P0(778)].missingKeyHandler ? this[P0(778)][P0(320)](S0, d, y0, Q0, u0, r) : (A = this[P0(1459)]) != null && A[P0(574)] && this.backendConnector[P0(574)](S0, d, y0, Q0, u0, r), this[P0(2206)](P0(2274), S0, d, y0, m);
        };
        this.options[e(574)] && (this[e(778)][e(763)] && R ? l0[e(1222)]((S0) => {
          var y0 = e;
          const M0 = this[y0(1097)].getSuffixes(S0, r);
          D && r[y0(704) + this[y0(778)][y0(933)] + y0(284)] && M0.indexOf(this[y0(778)].pluralSeparator + y0(284)) < 0 && M0[y0(2380)](this[y0(778)][y0(933)] + "zero"), M0[y0(1222)]((P0) => {
            var Q0 = y0;
            f0([S0], c + P0, r[Q0(704) + P0] || M);
          });
        }) : f0(l0, c, M));
      }
      m = this.extendTranslation(m, x, r, h, a), V && m === c && this[e(778)][e(1301)] && (m = "" + d + f + c), (V || U) && this[e(778)][e(2333)] && (m = this.options[e(2333)](this[e(778)][e(1301)] ? "" + d + f + c : c, U ? m : void 0, r));
    }
    return n ? (h[e(1376)] = m, h[e(1374)] = this[e(1728)](r), h) : m;
  }
  [s(309)](x, t, a, e, r) {
    var u, d;
    var n = s;
    if ((u = this[n(1482)]) != null && u[n(1325)]) x = this[n(1482)][n(1325)](x, { ...this[n(778)][n(2025)][n(2032)], ...a }, a[n(2028)] || this[n(1867)] || e[n(536)], e.usedNS, e.usedKey, { resolved: e });
    else if (!a[n(625)]) {
      a[n(2025)] && this[n(556)].init({ ...a, interpolation: { ...this.options[n(2025)], ...a[n(2025)] } });
      const f = m0(x) && (((d = a == null ? void 0 : a[n(2025)]) == null ? void 0 : d[n(1757)]) !== void 0 ? a.interpolation.skipOnVariables : this[n(778)][n(2025)].skipOnVariables);
      let l;
      if (f) {
        const h = x[n(2069)](this[n(556)][n(2636)]);
        l = h && h[n(2021)];
      }
      let v = a[n(2112)] && !m0(a[n(2112)]) ? a.replace : a;
      if (this[n(778)][n(2025)].defaultVariables && (v = { ...this.options[n(2025)].defaultVariables, ...v }), x = this[n(556)][n(2387)](x, v, a[n(2028)] || this[n(1867)] || e[n(536)], a), f) {
        const h = x.match(this.interpolator[n(2636)]), m = h && h.length;
        l < m && (a[n(339)] = !1);
      }
      !a.lng && e && e[n(1376)] && (a[n(2028)] = this[n(1867)] || e[n(536)]), a[n(339)] !== !1 && (x = this[n(556)].nest(x, (...h) => {
        var m = n;
        return (r == null ? void 0 : r[0]) === h[0] && !a[m(825)] ? (this[m(1238)][m(1797)]("It seems you are nesting recursively key: " + h[0] + " in key: " + t[0]), null) : this[m(2272)](...h, t);
      }, a)), a[n(2025)] && this[n(556)][n(679)]();
    }
    const o = a[n(2244)] || this[n(778)][n(2244)], c = m0(o) ? [o] : o;
    return x != null && (c != null && c.length) && a[n(605)] !== !1 && (x = Us[n(1035)](c, x, t, this[n(778)] && this[n(778)][n(2560)] ? { i18nResolved: { ...e, usedParams: this[n(1728)](a) }, ...a } : a, this)), x;
  }
  [s(1890)](x, t = {}) {
    let a, e, r, n, o;
    return m0(x) && (x = [x]), x.forEach((c) => {
      var u = K;
      if (this[u(799)](a)) return;
      const d = this[u(1203)](c, t), f = d[u(1810)];
      e = f;
      let l = d.namespaces;
      this[u(778)].fallbackNS && (l = l[u(1355)](this.options[u(281)]));
      const v = t[u(415)] !== void 0 && !m0(t[u(415)]), h = v && !t[u(1625)] && t.count === 0, m = t[u(825)] !== void 0 && (m0(t.context) || typeof t[u(825)] === u(960)) && t[u(825)] !== "", y = t[u(379)] ? t[u(379)] : this[u(966)][u(2101)](t[u(2028)] || this[u(1867)], t[u(2177)]);
      l.forEach((w) => {
        var O, T;
        var E = u;
        this.isValidLookup(a) || (o = w, !zr[y[0] + "-" + w] && ((O = this[E(846)]) != null && O[E(1956)]) && !((T = this[E(846)]) != null && T[E(1956)](o)) && (zr[y[0] + "-" + w] = !0, this.logger[E(1797)]('key "' + e + E(532) + y[E(2515)](", ") + E(1513) + o + E(1023), E(1990))), y.forEach((R) => {
          var D;
          var k = E;
          if (this[k(799)](a)) return;
          n = R;
          const N = [f];
          if ((D = this.i18nFormat) != null && D[k(786)]) this[k(1482)][k(786)](N, f, R, w, t);
          else {
            let M;
            v && (M = this.pluralResolver[k(794)](R, t[k(415)], t));
            const F = this[k(778)].pluralSeparator + "zero", C = this[k(778)].pluralSeparator + "ordinal" + this[k(778)].pluralSeparator;
            if (v && (N.push(f + M), t[k(1625)] && M.indexOf(C) === 0 && N[k(2380)](f + M[k(2112)](C, this.options[k(933)])), h && N[k(2380)](f + F)), m) {
              const H = "" + f + this[k(778)].contextSeparator + t[k(825)];
              N[k(2380)](H), v && (N[k(2380)](H + M), t[k(1625)] && M[k(831)](C) === 0 && N[k(2380)](H + M.replace(C, this[k(778)][k(933)])), h && N.push(H + F));
            }
          }
          let j;
          for (; j = N[k(932)](); )
            !this[k(799)](a) && (r = j, a = this[k(462)](R, w, j, t));
        }));
      });
    }), { res: a, usedKey: e, exactUsedKey: r, usedLng: n, usedNS: o };
  }
  [s(799)](x) {
    var t = s;
    return x !== void 0 && !(!this[t(778)][t(1116)] && x === null) && !(!this[t(778)][t(2092)] && x === "");
  }
  [s(462)](x, t, a, e = {}) {
    var n;
    var r = s;
    return (n = this[r(1482)]) != null && n[r(462)] ? this[r(1482)][r(462)](x, t, a, e) : this[r(1063)][r(462)](x, t, a, e);
  }
  [s(1728)](x = {}) {
    var t = s;
    const a = [t(704), "ordinal", t(825), t(2112), t(2028), t(379), t(2177), "ns", t(1981), t(1714), "returnObjects", t(1151), "joinArrays", t(2244), "interpolation"], e = x[t(2112)] && !m0(x[t(2112)]);
    let r = e ? x[t(2112)] : x;
    if (e && typeof x[t(415)] !== t(1887) && (r[t(415)] = x.count), this[t(778)][t(2025)][t(2032)] && (r = { ...this.options[t(2025)].defaultVariables, ...r }), !e) {
      r = { ...r };
      for (const n of a)
        delete r[n];
    }
    return r;
  }
  static [s(287)](x) {
    var t = s;
    const a = t(704);
    for (const e in x)
      if (Object.prototype[t(781)][t(1547)](x, e) && a === e[t(531)](0, a[t(2021)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Ur {
  constructor(x) {
    var t = s;
    this[t(778)] = x, this[t(1569)] = this.options.supportedLngs || !1, this[t(1238)] = he[t(2196)](t(966));
  }
  getScriptPartFromCode(x) {
    var t = s;
    if (x = rx(x), !x || x[t(831)]("-") < 0) return null;
    const a = x.split("-");
    return a[t(2021)] === 2 || (a[t(932)](), a[a[t(2021)] - 1][t(1991)]() === "x") ? null : this[t(925)](a[t(2515)]("-"));
  }
  [s(2396)](x) {
    var t = s;
    if (x = rx(x), !x || x.indexOf("-") < 0) return x;
    const a = x[t(2183)]("-");
    return this[t(925)](a[0]);
  }
  [s(925)](x) {
    var t = s;
    if (m0(x) && x[t(831)]("-") > -1) {
      let a;
      try {
        a = Intl.getCanonicalLocales(x)[0];
      } catch {
      }
      return a && this[t(778)].lowerCaseLng && (a = a.toLowerCase()), a || (this.options[t(352)] ? x[t(1991)]() : x);
    }
    return this[t(778)][t(698)] || this[t(778)][t(352)] ? x.toLowerCase() : x;
  }
  [s(1868)](x) {
    var t = s;
    return (this[t(778)][t(2617)] === "languageOnly" || this[t(778)][t(488)]) && (x = this[t(2396)](x)), !this.supportedLngs || !this.supportedLngs[t(2021)] || this.supportedLngs.indexOf(x) > -1;
  }
  [s(540)](x) {
    var t = s;
    if (!x) return null;
    let a;
    return x.forEach((e) => {
      var r = K;
      if (a) return;
      const n = this[r(925)](e);
      (!this[r(778)][r(1569)] || this[r(1868)](n)) && (a = n);
    }), !a && this[t(778)][t(1569)] && x.forEach((e) => {
      var r = t;
      if (a) return;
      const n = this[r(2102)](e);
      if (this[r(1868)](n)) return a = n;
      const o = this[r(2396)](e);
      if (this[r(1868)](o)) return a = o;
      a = this[r(778)][r(1569)][r(1666)]((c) => {
        var u = r;
        if (c === o) return c;
        if (!(c[u(831)]("-") < 0 && o.indexOf("-") < 0) && (c.indexOf("-") > 0 && o[u(831)]("-") < 0 && c[u(531)](0, c[u(831)]("-")) === o || c[u(831)](o) === 0 && o[u(2021)] > 1))
          return c;
      });
    }), a || (a = this[t(2412)](this.options[t(2177)])[0]), a;
  }
  [s(2412)](x, t) {
    var a = s;
    if (!x) return [];
    if (typeof x === a(1853) && (x = x(t)), m0(x) && (x = [x]), Array[a(1435)](x)) return x;
    if (!t) return x.default || [];
    let e = x[t];
    return e || (e = x[this[a(2102)](t)]), e || (e = x[this[a(925)](t)]), e || (e = x[this.getLanguagePartFromCode(t)]), e || (e = x[a(2641)]), e || [];
  }
  toResolveHierarchy(x, t) {
    var a = s;
    const e = this[a(2412)]((t === !1 ? [] : t) || this.options.fallbackLng || [], x), r = [], n = (o) => {
      var c = a;
      o && (this[c(1868)](o) ? r[c(2380)](o) : this.logger[c(1797)](c(665) + o));
    };
    return m0(x) && (x[a(831)]("-") > -1 || x[a(831)]("_") > -1) ? (this.options.load !== a(399) && n(this.formatLanguageCode(x)), this[a(778)][a(2617)] !== "languageOnly" && this.options[a(2617)] !== a(887) && n(this[a(2102)](x)), this[a(778)][a(2617)] !== a(887) && n(this.getLanguagePartFromCode(x))) : m0(x) && n(this[a(925)](x)), e.forEach((o) => {
      var c = a;
      r[c(831)](o) < 0 && n(this.formatLanguageCode(o));
    }), r;
  }
}
const Vr = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Wr = { select: (i) => s(i === 1 ? 1306 : 2479), resolvedOptions: () => ({ pluralCategories: [s(1306), s(2479)] }) };
class no {
  constructor(x, t = {}) {
    var a = s;
    this[a(966)] = x, this.options = t, this.logger = he[a(2196)](a(1097)), this[a(1020)] = {};
  }
  [s(965)](x, t) {
    var a = s;
    this[a(1643)][x] = t;
  }
  clearCache() {
    var x = s;
    this[x(1020)] = {};
  }
  getRule(x, t = {}) {
    var a = s;
    const e = rx(x === a(1067) ? "en" : x), r = t[a(1625)] ? a(1625) : a(2208), n = JSON[a(990)]({ cleanedCode: e, type: r });
    if (n in this[a(1020)]) return this[a(1020)][n];
    let o;
    try {
      o = new Intl[a(2421)](e, { type: r });
    } catch {
      if (!Intl) return this[a(1238)].error(a(727)), Wr;
      if (!x[a(2069)](/-|_/)) return Wr;
      const u = this[a(966)].getLanguagePartFromCode(x);
      o = this[a(321)](u, t);
    }
    return this[a(1020)][n] = o, o;
  }
  [s(2546)](x, t = {}) {
    var a = s;
    let e = this[a(321)](x, t);
    return e || (e = this.getRule("dev", t)), (e == null ? void 0 : e[a(1134)]()[a(571)][a(2021)]) > 1;
  }
  getPluralFormsOfKey(x, t, a = {}) {
    var e = s;
    return this[e(895)](x, a)[e(632)]((r) => "" + t + r);
  }
  [s(895)](x, t = {}) {
    var a = s;
    let e = this.getRule(x, t);
    return e || (e = this.getRule(a(1067), t)), e ? e[a(1134)]()[a(571)][a(759)]((r, n) => Vr[r] - Vr[n])[a(632)]((r) => "" + this.options.prepend + (t[a(1625)] ? a(1625) + this[a(778)][a(519)] : "") + r) : [];
  }
  [s(794)](x, t, a = {}) {
    var e = s;
    const r = this[e(321)](x, a);
    return r ? "" + this[e(778)][e(519)] + (a[e(1625)] ? "ordinal" + this[e(778)][e(519)] : "") + r[e(330)](t) : (this[e(1238)].warn(e(2373) + x), this[e(794)]("dev", t, a));
  }
}
const Zr = (i, x, t, a = ".", e = !0) => {
  let r = Yi(i, x, t);
  return !r && e && m0(t) && (r = Kt(i, t, a), r === void 0 && (r = Kt(x, t, a))), r;
}, Vx = (i) => i[s(2112)](/\$/g, s(1211));
class io {
  constructor(x = {}) {
    var a;
    var t = s;
    this[t(1238)] = he[t(2196)]("interpolator"), this[t(778)] = x, this[t(2093)] = ((a = x == null ? void 0 : x[t(2025)]) == null ? void 0 : a[t(2093)]) || ((e) => e), this[t(1448)](x);
  }
  [s(1448)](x = {}) {
    var t = s;
    x.interpolation || (x.interpolation = { escapeValue: !0 });
    const { escape: a, escapeValue: e, useRawValueToEscape: r, prefix: n, prefixEscaped: o, suffix: c, suffixEscaped: u, formatSeparator: d, unescapeSuffix: f, unescapePrefix: l, nestingPrefix: v, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: y, nestingOptionsSeparator: w, maxReplaces: E, alwaysFormat: O } = x[t(2025)];
    this.escape = a !== void 0 ? a : eo, this[t(720)] = e !== void 0 ? e : !0, this[t(400)] = r !== void 0 ? r : !1, this[t(967)] = n ? He(n) : o || "{{", this[t(2511)] = c ? He(c) : u || "}}", this[t(1245)] = d || ",", this.unescapePrefix = f ? "" : l || "-", this[t(508)] = this[t(506)] ? "" : f || "", this.nestingPrefix = v ? He(v) : h || He(t(1742)), this.nestingSuffix = m ? He(m) : y || He(")"), this.nestingOptionsSeparator = w || ",", this[t(2210)] = E || 1e3, this[t(1563)] = O !== void 0 ? O : !1, this[t(945)]();
  }
  reset() {
    var x = s;
    this[x(778)] && this[x(1448)](this[x(778)]);
  }
  resetRegExp() {
    var x = s;
    const t = (a, e) => {
      var r = K;
      return (a == null ? void 0 : a[r(1399)]) === e ? (a.lastIndex = 0, a) : new RegExp(e, "g");
    };
    this.regexp = t(this.regexp, this.prefix + x(1777) + this[x(2511)]), this[x(2249)] = t(this[x(2249)], "" + this[x(967)] + this[x(506)] + x(1777) + this.unescapeSuffix + this[x(2511)]), this[x(2636)] = t(this[x(2636)], this[x(652)] + x(1777) + this[x(2544)]);
  }
  [s(2387)](x, t, a, e) {
    var h;
    var r = s;
    let n, o, c;
    const u = this[r(778)] && this[r(778)][r(2025)] && this[r(778)][r(2025)][r(2032)] || {}, d = (m) => {
      var y = r;
      if (m[y(831)](this[y(1245)]) < 0) {
        const T = Zr(t, u, m, this[y(778)][y(1981)], this[y(778)][y(1296)]);
        return this[y(1563)] ? this[y(2093)](T, void 0, a, { ...e, ...t, interpolationkey: m }) : T;
      }
      const w = m.split(this.formatSeparator), E = w.shift()[y(902)](), O = w.join(this[y(1245)]).trim();
      return this.format(Zr(t, u, E, this.options[y(1981)], this[y(778)][y(1296)]), O, a, { ...e, ...t, interpolationkey: E });
    };
    this[r(945)]();
    const f = (e == null ? void 0 : e.missingInterpolationHandler) || this[r(778)][r(1365)], l = ((h = e == null ? void 0 : e.interpolation) == null ? void 0 : h[r(1757)]) !== void 0 ? e.interpolation[r(1757)] : this[r(778)].interpolation[r(1757)];
    return [{ regex: this[r(2249)], safeValue: (m) => Vx(m) }, { regex: this[r(2316)], safeValue: (m) => this[r(720)] ? Vx(this[r(2041)](m)) : Vx(m) }][r(1222)]((m) => {
      var y = r;
      for (c = 0; n = m[y(994)][y(918)](x); ) {
        const w = n[1][y(902)]();
        if (o = d(w), o === void 0)
          if (typeof f === y(1853)) {
            const O = f(x, n, e);
            o = m0(O) ? O : "";
          } else if (e && Object.prototype[y(781)][y(1547)](e, w)) o = "";
          else if (l) {
            o = n[0];
            continue;
          } else this.logger.warn(y(2382) + w + y(765) + x), o = "";
        else !m0(o) && !this[y(400)] && (o = Dr(o));
        const E = m.safeValue(o);
        if (x = x[y(2112)](n[0], E), l ? (m[y(994)].lastIndex += o[y(2021)], m[y(994)].lastIndex -= n[0].length) : m[y(994)][y(805)] = 0, c++, c >= this[y(2210)]) break;
      }
    }), x;
  }
  [s(339)](x, t, a = {}) {
    var e = s;
    let r, n, o;
    const c = (u, d) => {
      var f = K;
      const l = this[f(2554)];
      if (u[f(831)](l) < 0) return u;
      const v = u[f(2183)](new RegExp(l + f(2385)));
      let h = "{" + v[1];
      u = v[0], h = this.interpolate(h, o);
      const m = h.match(/'/g), y = h[f(2069)](/"/g);
      (((m == null ? void 0 : m.length) ?? 0) % 2 === 0 && !y || y[f(2021)] % 2 !== 0) && (h = h[f(2112)](/'/g, '"'));
      try {
        o = JSON.parse(h), d && (o = { ...d, ...o });
      } catch (w) {
        return this[f(1238)][f(1797)](f(2532) + u, w), "" + u + l + h;
      }
      return o[f(704)] && o.defaultValue[f(831)](this[f(967)]) > -1 && delete o[f(704)], u;
    };
    for (; r = this[e(2636)][e(918)](x); ) {
      let u = [];
      o = { ...a }, o = o[e(2112)] && !m0(o[e(2112)]) ? o[e(2112)] : o, o[e(605)] = !1, delete o[e(704)];
      let d = !1;
      if (r[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/[e(856)](r[1])) {
        const f = r[1][e(2183)](this[e(1245)]).map((l) => l[e(902)]());
        r[1] = f[e(761)](), u = f, d = !0;
      }
      if (n = t(c[e(1547)](this, r[1][e(902)](), o), o), n && r[0] === x && !m0(n)) return n;
      m0(n) || (n = Dr(n)), !n && (this[e(1238)].warn(e(1142) + r[1] + e(398) + x), n = ""), d && (n = u[e(2483)]((f, l) => this[e(2093)](f, l, a.lng, { ...a, interpolationkey: r[1][e(902)]() }), n[e(902)]())), x = x.replace(r[0], n), this[e(2316)][e(805)] = 0;
    }
    return x;
  }
}
const oo = (i) => {
  var x = s;
  let t = i[x(1991)]()[x(902)]();
  const a = {};
  if (i[x(831)]("(") > -1) {
    const e = i[x(2183)]("(");
    t = e[0].toLowerCase()[x(902)]();
    const r = e[1][x(531)](0, e[1][x(2021)] - 1);
    t === x(2189) && r.indexOf(":") < 0 ? a[x(2189)] || (a.currency = r[x(902)]()) : t === x(979) && r[x(831)](":") < 0 ? a[x(853)] || (a.range = r[x(902)]()) : r[x(2183)](";")[x(1222)]((o) => {
      var c = x;
      if (o) {
        const [u, ...d] = o[c(2183)](":"), f = d[c(2515)](":")[c(902)]()[c(2112)](/^'+|'+$/g, ""), l = u.trim();
        a[l] || (a[l] = f), f === c(1077) && (a[l] = !1), f === c(2271) && (a[l] = !0), isNaN(f) || (a[l] = parseInt(f, 10));
      }
    });
  }
  return { formatName: t, formatOptions: a };
}, Br = (i) => {
  const x = {};
  return (t, a, e) => {
    var r = K;
    let n = e;
    e && e.interpolationkey && e[r(905)] && e[r(905)][e[r(622)]] && e[e[r(622)]] && (n = { ...n, [e[r(622)]]: void 0 });
    const o = a + JSON.stringify(n);
    let c = x[o];
    return !c && (c = i(rx(a), e), x[o] = c), c(t);
  };
}, co = (i) => (x, t, a) => i(rx(t), a)(x);
class uo {
  constructor(x = {}) {
    var t = s;
    this[t(1238)] = he[t(2196)](t(2047)), this[t(778)] = x, this[t(1448)](x);
  }
  [s(1448)](x, t = { interpolation: {} }) {
    var a = s;
    this[a(1245)] = t[a(2025)][a(1245)] || ",";
    const e = t[a(1059)] ? Br : co;
    this[a(2199)] = { number: e((r, n) => {
      var o = a;
      const c = new Intl[o(1375)](r, { ...n });
      return (u) => c[o(2093)](u);
    }), currency: e((r, n) => {
      var o = a;
      const c = new Intl.NumberFormat(r, { ...n, style: o(2189) });
      return (u) => c.format(u);
    }), datetime: e((r, n) => {
      var o = a;
      const c = new Intl[o(2059)](r, { ...n });
      return (u) => c[o(2093)](u);
    }), relativetime: e((r, n) => {
      var o = a;
      const c = new Intl[o(1257)](r, { ...n });
      return (u) => c[o(2093)](u, n[o(853)] || o(1351));
    }), list: e((r, n) => {
      var o = a;
      const c = new Intl[o(2345)](r, { ...n });
      return (u) => c[o(2093)](u);
    }) };
  }
  [s(1342)](x, t) {
    var a = s;
    this[a(2199)][x.toLowerCase()[a(902)]()] = t;
  }
  addCached(x, t) {
    var a = s;
    this[a(2199)][x.toLowerCase().trim()] = Br(t);
  }
  [s(2093)](x, t, a, e = {}) {
    var r = s;
    const n = t[r(2183)](this.formatSeparator);
    if (n[r(2021)] > 1 && n[0][r(831)]("(") > 1 && n[0][r(831)](")") < 0 && n[r(1666)]((c) => c[r(831)](")") > -1)) {
      const c = n[r(2401)]((u) => u[r(831)](")") > -1);
      n[0] = [n[0], ...n.splice(1, c)][r(2515)](this[r(1245)]);
    }
    return n[r(2483)]((c, u) => {
      var v;
      var d = r;
      const { formatName: f, formatOptions: l } = oo(u);
      if (this[d(2199)][f]) {
        let h = c;
        try {
          const m = ((v = e == null ? void 0 : e.formatParams) == null ? void 0 : v[e[d(622)]]) || {}, y = m[d(2236)] || m.lng || e[d(2236)] || e[d(2028)] || a;
          h = this.formats[f](c, y, { ...l, ...e, ...m });
        } catch (m) {
          this[d(1238)][d(1797)](m);
        }
        return h;
      } else this[d(1238)].warn(d(1393) + f);
      return c;
    }, x);
  }
}
const fo = (i, x) => {
  var t = s;
  i[t(1358)][x] !== void 0 && (delete i[t(1358)][x], i[t(2255)]--);
};
class lo extends Nx {
  constructor(x, t, a, e = {}) {
    var n, o;
    var r = s;
    super(), this[r(1004)] = x, this.store = t, this[r(1161)] = a, this[r(966)] = a.languageUtils, this[r(778)] = e, this[r(1238)] = he[r(2196)](r(1459)), this.waitingReads = [], this[r(2007)] = e[r(2007)] || 10, this[r(1957)] = 0, this[r(861)] = e[r(861)] >= 0 ? e[r(861)] : 5, this[r(2324)] = e.retryTimeout >= 1 ? e[r(2324)] : 350, this[r(1842)] = {}, this.queue = [], (o = (n = this.backend) == null ? void 0 : n.init) == null || o.call(n, a, e[r(1004)], e);
  }
  queueLoad(x, t, a, e) {
    var r = s;
    const n = {}, o = {}, c = {}, u = {};
    return x[r(1222)]((d) => {
      var f = r;
      let l = !0;
      t[f(1222)]((v) => {
        var h = f;
        const m = d + "|" + v;
        !a[h(1525)] && this[h(917)].hasResourceBundle(d, v) ? this[h(1842)][m] = 2 : this[h(1842)][m] < 0 || (this[h(1842)][m] === 1 ? o[m] === void 0 && (o[m] = !0) : (this[h(1842)][m] = 1, l = !1, o[m] === void 0 && (o[m] = !0), n[m] === void 0 && (n[m] = !0), u[v] === void 0 && (u[v] = !0)));
      }), l || (c[d] = !0);
    }), (Object.keys(n)[r(2021)] || Object[r(1040)](o).length) && this[r(1214)][r(2380)]({ pending: o, pendingCount: Object[r(1040)](o)[r(2021)], loaded: {}, errors: [], callback: e }), { toLoad: Object.keys(n), pending: Object[r(1040)](o), toLoadLanguages: Object[r(1040)](c), toLoadNamespaces: Object.keys(u) };
  }
  [s(1383)](x, t, a) {
    var e = s;
    const r = x[e(2183)]("|"), n = r[0], o = r[1];
    t && this[e(2206)]("failedLoading", n, o, t), !t && a && this[e(917)].addResourceBundle(n, o, a, void 0, void 0, { skipCopy: !0 }), this[e(1842)][x] = t ? -1 : 2, t && a && (this.state[x] = 0);
    const c = {};
    this[e(1214)][e(1222)]((u) => {
      var d = e;
      Xi(u[d(1383)], [n], o), fo(u, x), t && u.errors.push(t), u.pendingCount === 0 && !u[d(2340)] && (Object.keys(u[d(1383)])[d(1222)]((f) => {
        var l = d;
        c[f] || (c[f] = {});
        const v = u[l(1383)][f];
        v[l(2021)] && v[l(1222)]((h) => {
          c[f][h] === void 0 && (c[f][h] = !0);
        });
      }), u[d(2340)] = !0, u.errors.length ? u[d(2066)](u[d(1188)]) : u[d(2066)]());
    }), this.emit(e(1383), c), this[e(1214)] = this.queue[e(2397)]((u) => !u[e(2340)]);
  }
  read(x, t, a, e = 0, r = this.retryTimeout, n) {
    var o = s;
    if (!x[o(2021)]) return n(null, {});
    if (this[o(1957)] >= this[o(2007)]) {
      this[o(1088)].push({ lng: x, ns: t, fcName: a, tried: e, wait: r, callback: n });
      return;
    }
    this[o(1957)]++;
    const c = (d, f) => {
      var l = o;
      if (this.readingCalls--, this[l(1088)].length > 0) {
        const v = this[l(1088)][l(761)]();
        this.read(v[l(2028)], v.ns, v.fcName, v.tried, v.wait, v[l(2066)]);
      }
      if (d && f && e < this[l(861)]) {
        setTimeout(() => {
          var v = l;
          this[v(1995)][v(1547)](this, x, t, a, e + 1, r * 2, n);
        }, r);
        return;
      }
      n(d, f);
    }, u = this[o(1004)][a][o(1748)](this[o(1004)]);
    if (u.length === 2) {
      try {
        const d = u(x, t);
        d && typeof d.then === o(1853) ? d[o(432)]((f) => c(null, f))[o(947)](c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return u(x, t, c);
  }
  [s(1061)](x, t, a = {}, e) {
    var r = s;
    if (!this[r(1004)]) return this[r(1238)][r(1797)](r(1070)), e && e();
    m0(x) && (x = this[r(966)].toResolveHierarchy(x)), m0(t) && (t = [t]);
    const n = this[r(1114)](x, t, a, e);
    if (!n[r(972)][r(2021)])
      return n.pending[r(2021)] || e(), null;
    n.toLoad.forEach((o) => {
      var c = r;
      this[c(1629)](o);
    });
  }
  [s(2617)](x, t, a) {
    var e = s;
    this[e(1061)](x, t, {}, a);
  }
  [s(1525)](x, t, a) {
    this.prepareLoading(x, t, { reload: !0 }, a);
  }
  [s(1629)](x, t = "") {
    var a = s;
    const e = x.split("|"), r = e[0], n = e[1];
    this[a(1995)](r, n, "read", void 0, void 0, (o, c) => {
      var u = a;
      o && this[u(1238)].warn(t + "loading namespace " + n + u(1014) + r + u(1989), o), !o && c && this[u(1238)][u(1133)](t + "loaded namespace " + n + " for language " + r, c), this[u(1383)](x, o, c);
    });
  }
  saveMissing(x, t, a, e, r, n = {}, o = () => {
  }) {
    var u, d, f, l, v;
    var c = s;
    if ((d = (u = this[c(1161)]) == null ? void 0 : u[c(846)]) != null && d.hasLoadedNamespace && !((l = (f = this[c(1161)]) == null ? void 0 : f[c(846)]) != null && l[c(1956)](t))) {
      this.logger[c(1797)]('did not save key "' + a + c(1818) + t + c(1023), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(a == null || a === "")) {
      if ((v = this[c(1004)]) != null && v.create) {
        const h = { ...n, isUpdate: r }, m = this.backend[c(2196)][c(1748)](this[c(1004)]);
        if (m[c(2021)] < 6) try {
          let y;
          m[c(2021)] === 5 ? y = m(x, t, a, e, h) : y = m(x, t, a, e), y && typeof y[c(432)] === c(1853) ? y[c(432)]((w) => o(null, w))[c(947)](o) : o(null, y);
        } catch (y) {
          o(y);
        }
        else m(x, t, a, e, o, h);
      }
      !x || !x[0] || this[c(917)][c(1310)](x[0], t, a, e);
    }
  }
}
const Kr = () => ({ debug: !1, initAsync: !0, ns: ["translation"], defaultNS: ["translation"], fallbackLng: [s(1067)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: "fallback", saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (i) => {
  var x = s;
  let t = {};
  if (typeof i[1] == "object" && (t = i[1]), m0(i[1]) && (t[x(704)] = i[1]), m0(i[2]) && (t[x(1579)] = i[2]), typeof i[2] == "object" || typeof i[3] == "object") {
    const a = i[3] || i[2];
    Object[x(1040)](a).forEach((e) => {
      t[e] = a[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (i) => i, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), Jr = (i) => {
  var t, a;
  var x = s;
  return m0(i.ns) && (i.ns = [i.ns]), m0(i.fallbackLng) && (i.fallbackLng = [i[x(2177)]]), m0(i[x(281)]) && (i.fallbackNS = [i[x(281)]]), ((a = (t = i[x(1569)]) == null ? void 0 : t[x(831)]) == null ? void 0 : a.call(t, x(2362))) < 0 && (i[x(1569)] = i[x(1569)].concat([x(2362)])), typeof i.initImmediate === x(2251) && (i.initAsync = i[x(2107)]), i;
}, dx = () => {
}, ho = (i) => {
  var x = s;
  Object.getOwnPropertyNames(Object.getPrototypeOf(i))[x(1222)]((a) => {
    var e = x;
    typeof i[a] === e(1853) && (i[a] = i[a][e(1748)](i));
  });
};
class ax extends Nx {
  constructor(x = {}, t) {
    var a = s;
    if (super(), this.options = Jr(x), this[a(1161)] = {}, this[a(1238)] = he, this[a(2043)] = { external: [] }, ho(this), t && !this.isInitialized && !x[a(414)]) {
      if (!this.options[a(2063)]) return this[a(1448)](x, t), this;
      setTimeout(() => {
        var e = a;
        this[e(1448)](x, t);
      }, 0);
    }
  }
  init(x = {}, t) {
    var a = s;
    this[a(2140)] = !0, typeof x === a(1853) && (t = x, x = {}), x[a(1284)] == null && x.ns && (m0(x.ns) ? x.defaultNS = x.ns : x.ns[a(831)](a(1286)) < 0 && (x[a(1284)] = x.ns[0]));
    const e = Kr();
    this[a(778)] = { ...e, ...this[a(778)], ...Jr(x) }, this.options[a(2025)] = { ...e.interpolation, ...this[a(778)][a(2025)] }, x.keySeparator !== void 0 && (this.options[a(1718)] = x[a(1981)]), x[a(1714)] !== void 0 && (this[a(778)].userDefinedNsSeparator = x[a(1714)]);
    const r = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this[a(778)][a(414)]) {
      this[a(2043)][a(1238)] ? he[a(1448)](r(this.modules[a(1238)]), this[a(778)]) : he[a(1448)](null, this.options);
      let d;
      this[a(2043)][a(2047)] ? d = this[a(2043)][a(2047)] : d = uo;
      const f = new Ur(this[a(778)]);
      this[a(917)] = new $r(this[a(778)][a(1750)], this[a(778)]);
      const l = this[a(1161)];
      l[a(1238)] = he, l[a(1063)] = this.store, l[a(966)] = f, l.pluralResolver = new no(f, { prepend: this[a(778)].pluralSeparator, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), d && (!this[a(778)].interpolation[a(2093)] || this.options.interpolation[a(2093)] === e[a(2025)][a(2093)]) && (l[a(2047)] = r(d), l.formatter.init(l, this[a(778)]), this[a(778)][a(2025)][a(2093)] = l.formatter[a(2093)][a(1748)](l[a(2047)])), l[a(556)] = new io(this[a(778)]), l[a(846)] = { hasLoadedNamespace: this.hasLoadedNamespace[a(1748)](this) }, l.backendConnector = new lo(r(this[a(2043)][a(1004)]), l[a(1063)], l, this[a(778)]), l[a(1459)].on("*", (v, ...h) => {
        var m = a;
        this[m(2206)](v, ...h);
      }), this[a(2043)][a(906)] && (l.languageDetector = r(this[a(2043)][a(906)]), l.languageDetector[a(1448)] && l[a(906)].init(l, this.options.detection, this[a(778)])), this[a(2043)][a(1482)] && (l[a(1482)] = r(this[a(2043)][a(1482)]), l.i18nFormat[a(1448)] && l[a(1482)][a(1448)](this)), this[a(1345)] = new Cx(this[a(1161)], this[a(778)]), this[a(1345)].on("*", (v, ...h) => {
        var m = a;
        this[m(2206)](v, ...h);
      }), this[a(2043)].external[a(1222)]((v) => {
        var h = a;
        v[h(1448)] && v[h(1448)](this);
      });
    }
    if (this.format = this.options[a(2025)][a(2093)], t || (t = dx), this[a(778)].fallbackLng && !this[a(1161)][a(906)] && !this[a(778)][a(2028)]) {
      const d = this[a(1161)][a(966)].getFallbackCodes(this[a(778)][a(2177)]);
      d.length > 0 && d[0] !== a(1067) && (this[a(778)][a(2028)] = d[0]);
    }
    !this[a(1161)][a(906)] && !this.options[a(2028)] && this[a(1238)].warn(a(1042)), [a(462), a(1603), "getResourceBundle", "getDataByLanguage"].forEach((d) => {
      var f = a;
      this[d] = (...l) => this[f(917)][d](...l);
    }), [a(1310), "addResources", "addResourceBundle", "removeResourceBundle"][a(1222)]((d) => {
      this[d] = (...f) => {
        var l = K;
        return this[l(917)][d](...f), this;
      };
    });
    const c = Ge(), u = () => {
      var d = a;
      const f = (l, v) => {
        var h = K;
        this.isInitializing = !1, this[h(290)] && !this[h(1745)] && this[h(1238)][h(1797)](h(651)), this[h(290)] = !0, this[h(778)][h(414)] || this[h(1238)][h(1133)](h(760), this.options), this.emit("initialized", this.options), c.resolve(v), t(l, v);
      };
      if (this.languages && !this[d(290)]) return f(null, this.t[d(1748)](this));
      this[d(1650)](this[d(778)][d(2028)], f);
    };
    return this[a(778)].resources || !this[a(778)][a(2063)] ? u() : setTimeout(u, 0), c;
  }
  [s(1263)](x, t = dx) {
    var n, o;
    var a = s;
    let e = t;
    const r = m0(x) ? x : this.language;
    if (typeof x === a(1853) && (e = x), !this[a(778)][a(1750)] || this[a(778)][a(469)]) {
      if ((r == null ? void 0 : r[a(1991)]()) === a(2362) && (!this[a(778)][a(1444)] || this.options[a(1444)][a(2021)] === 0)) return e();
      const c = [], u = (d) => {
        var f = a;
        if (!d || d === f(2362)) return;
        this.services.languageUtils.toResolveHierarchy(d)[f(1222)]((v) => {
          var h = f;
          v !== h(2362) && c[h(831)](v) < 0 && c[h(2380)](v);
        });
      };
      r ? u(r) : this[a(1161)].languageUtils[a(2412)](this[a(778)].fallbackLng).forEach((f) => u(f)), (o = (n = this[a(778)][a(1444)]) == null ? void 0 : n[a(1222)]) == null || o.call(n, (d) => u(d)), this.services[a(1459)].load(c, this[a(778)].ns, (d) => {
        var f = a;
        !d && !this.resolvedLanguage && this[f(1867)] && this[f(1673)](this[f(1867)]), e(d);
      });
    } else e(null);
  }
  reloadResources(x, t, a) {
    var e = s;
    const r = Ge();
    return typeof x === e(1853) && (a = x, x = void 0), typeof t == "function" && (a = t, t = void 0), x || (x = this.languages), t || (t = this[e(778)].ns), a || (a = dx), this[e(1161)][e(1459)][e(1525)](x, t, (n) => {
      var o = e;
      r[o(1890)](), a(n);
    }), r;
  }
  use(x) {
    var t = s;
    if (!x) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!x[t(338)]) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return x[t(338)] === "backend" && (this.modules[t(1004)] = x), (x[t(338)] === "logger" || x[t(1133)] && x[t(1797)] && x[t(503)]) && (this[t(2043)][t(1238)] = x), x.type === t(906) && (this[t(2043)][t(906)] = x), x.type === t(1482) && (this[t(2043)][t(1482)] = x), x[t(338)] === t(1181) && Us[t(2061)](x), x[t(338)] === "formatter" && (this[t(2043)][t(2047)] = x), x[t(338)] === t(2582) && this[t(2043)][t(2022)][t(2380)](x), this;
  }
  [s(1673)](x) {
    var t = s;
    if (!(!x || !this.languages) && !(["cimode", t(1067)].indexOf(x) > -1)) {
      for (let a = 0; a < this[t(2087)].length; a++) {
        const e = this[t(2087)][a];
        if (!([t(2362), t(1067)].indexOf(e) > -1) && this[t(917)][t(1011)](e)) {
          this.resolvedLanguage = e;
          break;
        }
      }
      !this[t(2583)] && this.languages[t(831)](x) < 0 && this.store[t(1011)](x) && (this.resolvedLanguage = x, this[t(2087)][t(821)](x));
    }
  }
  [s(1650)](x, t) {
    var a = s;
    this[a(2058)] = x;
    const e = Ge();
    this[a(2206)](a(1320), x);
    const r = (c) => {
      var u = a;
      this[u(1867)] = c, this.languages = this.services.languageUtils[u(2101)](c), this.resolvedLanguage = void 0, this[u(1673)](c);
    }, n = (c, u) => {
      var d = a;
      u ? this[d(2058)] === x && (r(u), this[d(1345)][d(1650)](u), this[d(2058)] = void 0, this.emit(d(322), u), this.logger[d(1133)](d(322), u)) : this[d(2058)] = void 0, e[d(1890)]((...f) => this.t(...f)), t && t(c, (...f) => this.t(...f));
    }, o = (c) => {
      var l, v;
      var u = a;
      !x && !c && this[u(1161)][u(906)] && (c = []);
      const d = m0(c) ? c : c && c[0], f = this[u(917)].hasLanguageSomeTranslations(d) ? d : this[u(1161)].languageUtils[u(540)](m0(c) ? [c] : c);
      f && (!this[u(1867)] && r(f), this[u(1345)].language || this[u(1345)][u(1650)](f), (v = (l = this[u(1161)][u(906)]) == null ? void 0 : l[u(1400)]) == null || v.call(l, f)), this[u(1263)](f, (h) => {
        n(h, f);
      });
    };
    return !x && this.services[a(906)] && !this[a(1161)][a(906)][a(2572)] ? o(this[a(1161)].languageDetector[a(1431)]()) : !x && this[a(1161)][a(906)] && this[a(1161)][a(906)].async ? this[a(1161)][a(906)][a(1431)][a(2021)] === 0 ? this[a(1161)][a(906)][a(1431)]().then(o) : this.services.languageDetector.detect(o) : o(x), e;
  }
  [s(668)](x, t, a) {
    var e = s;
    const r = (n, o, ...c) => {
      var u = K;
      let d;
      typeof o !== u(1923) ? d = this[u(778)][u(2127)]([n, o][u(1355)](c)) : d = { ...o }, d[u(2028)] = d[u(2028)] || r[u(2028)], d[u(379)] = d.lngs || r[u(379)], d.ns = d.ns || r.ns, d[u(2406)] !== "" && (d.keyPrefix = d.keyPrefix || a || r[u(2406)]);
      const f = this.options.keySeparator || ".";
      let l;
      return d.keyPrefix && Array[u(1435)](n) ? l = n.map((v) => "" + d[u(2406)] + f + v) : l = d[u(2406)] ? "" + d[u(2406)] + f + n : n, this.t(l, d);
    };
    return m0(x) ? r.lng = x : r.lngs = x, r.ns = t, r[e(2406)] = a, r;
  }
  t(...x) {
    var a;
    var t = s;
    return (a = this[t(1345)]) == null ? void 0 : a[t(2272)](...x);
  }
  [s(308)](...x) {
    var a;
    var t = s;
    return (a = this[t(1345)]) == null ? void 0 : a[t(308)](...x);
  }
  [s(1613)](x) {
    var t = s;
    this[t(778)].defaultNS = x;
  }
  [s(1956)](x, t = {}) {
    var a = s;
    if (!this[a(290)]) return this[a(1238)].warn(a(1200), this.languages), !1;
    if (!this[a(2087)] || !this[a(2087)][a(2021)]) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this[a(2087)]), !1;
    const e = t[a(2028)] || this[a(2583)] || this[a(2087)][0], r = this.options ? this[a(778)].fallbackLng : !1, n = this.languages[this[a(2087)].length - 1];
    if (e[a(1991)]() === a(2362)) return !0;
    const o = (c, u) => {
      var d = a;
      const f = this[d(1161)][d(1459)][d(1842)][c + "|" + u];
      return f === -1 || f === 0 || f === 2;
    };
    if (t[a(2014)]) {
      const c = t[a(2014)](this, o);
      if (c !== void 0) return c;
    }
    return !!(this[a(1603)](e, x) || !this[a(1161)].backendConnector[a(1004)] || this[a(778)][a(1750)] && !this[a(778)].partialBundledLanguages || o(e, x) && (!r || o(n, x)));
  }
  [s(1689)](x, t) {
    var a = s;
    const e = Ge();
    return this.options.ns ? (m0(x) && (x = [x]), x[a(1222)]((r) => {
      var n = a;
      this[n(778)].ns.indexOf(r) < 0 && this.options.ns.push(r);
    }), this[a(1263)]((r) => {
      e.resolve(), t && t(r);
    }), e) : (t && t(), Promise[a(1890)]());
  }
  [s(1647)](x, t) {
    var a = s;
    const e = Ge();
    m0(x) && (x = [x]);
    const r = this[a(778)].preload || [], n = x.filter((o) => r[a(831)](o) < 0 && this[a(1161)][a(966)][a(1868)](o));
    return n.length ? (this[a(778)][a(1444)] = r[a(1355)](n), this[a(1263)]((o) => {
      var c = a;
      e[c(1890)](), t && t(o);
    }), e) : (t && t(), Promise[a(1890)]());
  }
  [s(2431)](x) {
    var r, n;
    var t = s;
    if (x || (x = this.resolvedLanguage || (((r = this.languages) == null ? void 0 : r[t(2021)]) > 0 ? this[t(2087)][0] : this[t(1867)])), !x) return t(2492);
    const a = ["ar", t(465), t(434), t(1573), t(1697), t(2275), t(1103), t(1993), t(1169), t(731), t(1486), t(1437), t(1692), t(1654), "acy", t(1607), "ads", t(1484), "aec", "afb", t(771), t(2608), t(949), t(2056), t(1404), "ars", t(1871), t(1276), t(2446), t(1497), t(367), t(2077), t(2551), t(2578), t(2558), t(928), "he", "iw", "ps", "pbt", "pbu", t(2045), t(1300), "prd", "ug", "ur", t(351), t(2444), t(501), "ji", "yi", t(2399), t(950), t(405), "fa", t(1094), t(1861), "pes", t(1536), "dv", t(1473), "ckb"], e = ((n = this[t(1161)]) == null ? void 0 : n[t(966)]) || new Ur(Kr());
    return a[t(831)](e[t(2396)](x)) > -1 || x[t(1991)]()[t(831)](t(1446)) > 1 ? t(2492) : t(2383);
  }
  static [s(542)](x = {}, t) {
    return new ax(x, t);
  }
  [s(2286)](x = {}, t = dx) {
    var a = s;
    const e = x[a(2458)];
    e && delete x[a(2458)];
    const r = { ...this.options, ...x, isClone: !0 }, n = new ax(r);
    if ((x[a(2491)] !== void 0 || x[a(967)] !== void 0) && (n.logger = n[a(1238)].clone(x)), ["store", "services", "language"][a(1222)]((c) => {
      n[c] = this[c];
    }), n[a(1161)] = { ...this[a(1161)] }, n[a(1161)].utils = { hasLoadedNamespace: n[a(1956)][a(1748)](n) }, e) {
      const c = Object[a(1040)](this[a(917)][a(1073)]).reduce((u, d) => {
        var f = a;
        return u[d] = { ...this.store[f(1073)][d] }, u[d] = Object[f(1040)](u[d])[f(2483)]((l, v) => (l[v] = { ...u[d][v] }, l), u[d]), u;
      }, {});
      n.store = new $r(c, r), n[a(1161)][a(1063)] = n.store;
    }
    return n[a(1345)] = new Cx(n.services, r), n[a(1345)].on("*", (c, ...u) => {
      var d = a;
      n[d(2206)](c, ...u);
    }), n[a(1448)](r, t), n.translator.options = r, n.translator[a(1459)].services[a(846)] = { hasLoadedNamespace: n[a(1956)][a(1748)](n) }, n;
  }
  toJSON() {
    var x = s;
    return { options: this[x(778)], store: this[x(917)], language: this[x(1867)], languages: this[x(2087)], resolvedLanguage: this[x(2583)] };
  }
}
const Y0 = ax[s(542)]();
Y0[s(542)] = ax[s(542)], Y0[s(542)], Y0[s(2431)], Y0[s(1448)], Y0[s(1263)], Y0[s(2497)], Y0[s(1509)], Y0[s(1650)], Y0[s(668)], Y0.t, Y0.exists, Y0.setDefaultNamespace, Y0.hasLoadedNamespace, Y0[s(1689)], Y0[s(1647)];
function po() {
  var i = s;
  if (typeof navigator !== i(1887) && navigator.language) return navigator[i(1867)] === i(734) ? i(734) : i(363);
  try {
    const x = typeof require !== i(1887) ? require : void 0;
    if (x)
      return x(i(780))[i(671)][i(1846)][i(467)]("zh") ? "zh-CN" : "en-US";
  } catch {
  }
  return "en-US";
}
let Vs = po();
const mo = { "zh-CN": {}, "en-US": {} };
function Jt(i) {
  const x = i === "zh-CN" ? Ki : Ji, t = mo[i];
  return { ...x, ...t };
}
function vo() {
  return Vs;
}
function Gt(i, x = {}) {
  var t = s;
  let e = Jt(Vs)[i];
  return e ? typeof e == "string" ? e[t(2112)](/\{\{(\w+)\}\}/g, (r, n) => x[n] !== void 0 ? String(x[n]) : r) : e : i;
}
function Ws(i) {
  var x = s;
  return i && i[x(951)] && Object[x(2180)][x(781)].call(i, x(2641)) ? i[x(2641)] : i;
}
const go = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, yo = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, bo = (i) => yo[i], wo = (i) => i[s(2112)](go, bo);
let Gr = { bindI18n: s(322), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", s(2031), "i", "p"], useSuspense: !0, unescape: wo };
const So = (i = {}) => {
  Gr = { ...Gr, ...i };
}, ko = { type: "3rdParty", init(i) {
  var x = s;
  So(i.options[x(2526)]);
} };
!Y0[s(290)] && Y0[s(1509)](ko)[s(1448)]({ resources: { "zh-CN": { translation: Jt("zh-CN") }, "en-US": { translation: Jt("en-US") } }, lng: vo(), fallbackLng: s(363), interpolation: { escapeValue: !1 } });
const Re = [];
_e[s(2323)] = _e.widgetable || {}, _e[s(2323)].add = function(i, x) {
  var t = s;
  typeof x === t(1853) ? Re[t(2380)]([i, { formatter: x, setter: null }]) : Re[t(2380)]([i, x]);
};
function Eo(i, x, t) {
  var c, u, d;
  var a = s;
  const e = Re[a(1666)](([f]) => {
    var l = a;
    return f == l(867);
  }), r = Re[a(1666)](([f]) => {
    var l = a;
    return ar(f, i[l(338)]);
  }) || e;
  let n = !1;
  if (r) {
    const f = r[1][a(815)];
    f && (n = !!f(i, x, t));
  }
  !n && (i[a(621)][x][a(2038)] = t, (u = (c = i[a(621)][x])[a(2066)]) == null || u.call(c, t)), (d = (q0.workflowManager || q0.extensionManager.workflow)[a(1693)]) == null || d[a(587)][a(2588)]();
}
function Fx(i) {
  var x = s;
  const t = {}, a = Re[x(1666)](([e]) => {
    var r = x;
    return e == r(867);
  });
  return i[x(719)][x(1222)]((e) => {
    var r = x;
    if (!e.widgets || e.widgets.length == 0) return;
    const n = Re[r(1666)](([o]) => {
      var c = r;
      return ar(o, e[c(338)]);
    }) || a;
    if (n) try {
      const o = n[1][r(2047)](e);
      o && (t[e.id] = o[r(621)][r(632)]((c) => c[r(2038)]));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function Qt(i, x) {
  var r, n, o;
  var t = s;
  if (!i) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const a = i[t(719)][t(632)]((c) => {
    var u = t;
    if (c[u(306)] != 0) return;
    const d = hx(c);
    if (!d || d[u(467)](".") || !c[u(621)] || c[u(621)].length == 0) return;
    let f = Re.find(([m]) => {
      var y = u;
      return ar(m, c[y(338)]);
    });
    if (f) try {
      const m = f[1][u(2047)](c);
      if (m) return m.id = c.id, m[u(1792)] = m[u(621)].reduce((y, w) => y + (w[u(2417)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: d, uiWeightSum: 12, widgets: [{ outputType: "error", value: Gt(u(385), f[0]) + (m[u(2089)] || m || ""), name: "", options: {} }] };
    }
    if (!d[u(467)]("#")) return null;
    let l = c[u(621)];
    const v = Re.find(([m]) => {
      var y = u;
      return m == y(867);
    });
    if (v) {
      const m = v[1][u(2047)](c);
      if (m) return Object.assign(m, { uiWeightSum: m.widgets.reduce((y, w) => y + (w[u(2417)] || 12), 0) });
    }
    const h = { id: c.id, title: d, widgets: l[u(632)]((m) => ({ name: m[u(2501)] || m[u(940)], outputType: m[u(338)] || "string", value: m.value, options: m.options })) };
    return Object[u(740)](h, { uiWeightSum: h[u(621)][u(2483)]((m, y) => m + (y[u(2417)] || 12), 0) });
  })[t(2397)](Boolean)[t(759)]((c, u) => {
    var d = t;
    let f = hx(c), l = hx(u);
    return f = f[d(467)]("#") ? f[d(1813)](1).trim() : f[d(902)](), l = l[d(467)]("#") ? l[d(1813)](1).trim() : l[d(902)](), f[d(2051)](l);
  }), e = ((n = (r = i[t(719)].find((c) => c[t(338)] == t(708) && c[t(344)].match(/SD-?PPP/i))) == null ? void 0 : r.widgets[0]) == null ? void 0 : n.value) || "";
  return { widgetablePath: ((o = x.activeState.extra) == null ? void 0 : o[t(515)]) || x[t(1796)], widgetableID: x[t(1708)].id, nodes: a.reduce((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: a[t(632)]((c) => c.id), options: {} };
}
function ar(i, x) {
  var t = s;
  const a = i[t(2112)](/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*")[t(2112)](/\?/g, ".");
  return new RegExp("^" + a + "$")[t(856)](x);
}
function hx(i, x = "") {
  var e;
  var t = s;
  let a = x || i.title || "";
  return i.setProperty && (a[t(467)]("#") || a[t(467)](".")) ? i.setProperty("sdppp_widgetable_title", a) : a = ((e = i.properties) == null ? void 0 : e[t(1021)]) || a, a;
}
_e[s(347)] = hx;
var fx = { exports: {} }, Wx, Qr;
function Io() {
  if (Qr) return Wx;
  Qr = 1;
  var i = 1e3, x = i * 60, t = x * 60, a = t * 24, e = a * 7, r = a * 365.25;
  Wx = function(d, f) {
    var l = K;
    f = f || {};
    var v = typeof d;
    if (v === "string" && d[l(2021)] > 0) return n(d);
    if (v === l(960) && isFinite(d)) return f.long ? c(d) : o(d);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON[l(990)](d));
  };
  function n(d) {
    var f = K;
    if (d = String(d), !(d[f(2021)] > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(d);
      if (l) {
        var v = parseFloat(l[1]), h = (l[2] || "ms")[f(1991)]();
        switch (h) {
          case f(2164):
          case f(2075):
          case "yrs":
          case "yr":
          case "y":
            return v * r;
          case f(2517):
          case f(584):
          case "w":
            return v * e;
          case f(2604):
          case f(1351):
          case "d":
            return v * a;
          case f(360):
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return v * t;
          case f(2131):
          case f(2504):
          case f(946):
          case "min":
          case "m":
            return v * x;
          case f(2638):
          case f(1029):
          case f(2027):
          case f(1022):
          case "s":
            return v * i;
          case "milliseconds":
          case f(2119):
          case "msecs":
          case f(942):
          case "ms":
            return v;
          default:
            return;
        }
      }
    }
  }
  function o(d) {
    var f = K, l = Math[f(1580)](d);
    return l >= a ? Math[f(440)](d / a) + "d" : l >= t ? Math[f(440)](d / t) + "h" : l >= x ? Math[f(440)](d / x) + "m" : l >= i ? Math[f(440)](d / i) + "s" : d + "ms";
  }
  function c(d) {
    var f = K, l = Math[f(1580)](d);
    return l >= a ? u(d, l, a, f(1351)) : l >= t ? u(d, l, t, f(783)) : l >= x ? u(d, l, x, "minute") : l >= i ? u(d, l, i, f(1029)) : d + f(585);
  }
  function u(d, f, l, v) {
    var h = K, m = f >= l * 1.5;
    return Math[h(440)](d / l) + " " + v + (m ? "s" : "");
  }
  return Wx;
}
var Zx, Xr;
function Po() {
  if (Xr) return Zx;
  Xr = 1;
  function i(x) {
    var t = K;
    e[t(2491)] = e, e[t(2641)] = e, e[t(779)] = d, e[t(1280)] = c, e[t(1043)] = n, e[t(2254)] = u, e[t(1155)] = Io(), e[t(1891)] = f, Object[t(1040)](x).forEach((l) => {
      e[l] = x[l];
    }), e[t(2083)] = [], e[t(1514)] = [], e[t(450)] = {};
    function a(l) {
      var v = t;
      let h = 0;
      for (let m = 0; m < l[v(2021)]; m++)
        h = (h << 5) - h + l[v(2184)](m), h |= 0;
      return e[v(1460)][Math[v(1580)](h) % e[v(1460)].length];
    }
    e[t(1038)] = a;
    function e(l) {
      var v = t;
      let h, m = null, y, w;
      function E(...O) {
        var T = K;
        if (!E.enabled) return;
        const R = E, k = Number(/* @__PURE__ */ new Date()), N = k - (h || k);
        R[T(1659)] = N, R[T(562)] = h, R[T(376)] = k, h = k, O[0] = e[T(779)](O[0]), typeof O[0] != "string" && O.unshift("%O");
        let j = 0;
        O[0] = O[0][T(2112)](/%([a-zA-Z%])/g, (M, F) => {
          var C = T;
          if (M === "%%") return "%";
          j++;
          const H = e.formatters[F];
          if (typeof H == "function") {
            const U = O[j];
            M = H.call(R, U), O[C(855)](j, 1), j--;
          }
          return M;
        }), e.formatArgs[T(1547)](R, O), (R[T(1133)] || e[T(1133)])[T(756)](R, O);
      }
      return E.namespace = l, E[v(2179)] = e[v(2179)](), E[v(1219)] = e[v(1038)](l), E.extend = r, E.destroy = e[v(1891)], Object.defineProperty(E, v(2254), { enumerable: !0, configurable: !1, get: () => {
        var O = v;
        return m !== null ? m : (y !== e.namespaces && (y = e[O(1330)], w = e[O(2254)](l)), w);
      }, set: (O) => {
        m = O;
      } }), typeof e[v(1448)] === v(1853) && e[v(1448)](E), E;
    }
    function r(l, v) {
      var h = t;
      const m = e(this[h(580)] + (typeof v === h(1887) ? ":" : v) + l);
      return m[h(1133)] = this[h(1133)], m;
    }
    function n(l) {
      var v = t;
      e[v(2265)](l), e[v(1330)] = l, e[v(2083)] = [], e.skips = [];
      const h = (typeof l === v(2348) ? l : "")[v(902)]()[v(2112)](/\s+/g, ",")[v(2183)](",")[v(2397)](Boolean);
      for (const m of h)
        m[0] === "-" ? e[v(1514)][v(2380)](m[v(1813)](1)) : e[v(2083)][v(2380)](m);
    }
    function o(l, v) {
      var h = t;
      let m = 0, y = 0, w = -1, E = 0;
      for (; m < l[h(2021)]; )
        if (y < v[h(2021)] && (v[y] === l[m] || v[y] === "*")) v[y] === "*" ? (w = y, E = m, y++) : (m++, y++);
        else if (w !== -1) y = w + 1, E++, m = E;
        else return !1;
      for (; y < v[h(2021)] && v[y] === "*"; )
        y++;
      return y === v[h(2021)];
    }
    function c() {
      var l = t;
      const v = [...e[l(2083)], ...e[l(1514)][l(632)]((h) => "-" + h)][l(2515)](",");
      return e.enable(""), v;
    }
    function u(l) {
      var v = t;
      for (const h of e.skips)
        if (o(l, h)) return !1;
      for (const h of e[v(2083)])
        if (o(l, h)) return !0;
      return !1;
    }
    function d(l) {
      var v = t;
      return l instanceof Error ? l[v(2108)] || l[v(2089)] : l;
    }
    function f() {
      var l = t;
      console[l(1797)](l(1663));
    }
    return e.enable(e[t(2617)]()), e;
  }
  return Zx = i, Zx;
}
var Yr;
function Ro() {
  var i = s;
  return Yr ? fx[i(1175)] : (Yr = 1, function(x, t) {
    var a = i;
    t.formatArgs = r, t[a(2265)] = n, t[a(2617)] = o, t.useColors = e, t[a(2650)] = c(), t[a(1891)] = /* @__PURE__ */ (() => {
      let d = !1;
      return () => {
        var f = K;
        !d && (d = !0, console[f(1797)](f(1663)));
      };
    })(), t.colors = [a(1869), a(1606), "#0033CC", a(1421), a(1143), a(1176), a(620), a(2471), a(2547), a(1771), a(992), a(1402), a(2054), a(609), a(1297), "#3300FF", "#3333CC", a(886), a(1671), "#3366FF", a(1683), a(2634), a(2211), a(1426), "#33CC66", a(1860), a(2585), a(2518), a(2237), a(1908), a(1945), a(926), a(1702), a(300), a(743), a(1740), a(987), a(2357), a(1056), a(2328), a(1833), a(1141), a(2330), a(2090), a(1249), a(1898), "#CC3300", a(1984), "#CC3366", a(641), "#CC33CC", a(1456), "#CC6600", a(1576), a(2368), a(2611), a(2313), a(2484), "#FF0000", a(514), "#FF0066", a(662), a(1167), "#FF00FF", a(1875), a(285), "#FF3366", a(943), a(1710), a(1574), a(1605), a(1105), a(1615), a(2533), a(552), a(1553)];
    function e() {
      var d = a;
      if (typeof window !== d(1887) && window[d(535)] && (window[d(535)][d(338)] === d(2589) || window[d(535)][d(2247)])) return !0;
      if (typeof navigator !== d(1887) && navigator.userAgent && navigator[d(2178)][d(1991)]()[d(2069)](/(edge|trident)\/(\d+)/)) return !1;
      let f;
      return typeof document !== d(1887) && document[d(2410)] && document.documentElement.style && document[d(2410)].style.WebkitAppearance || typeof window !== d(1887) && window.console && (window[d(2142)].firebug || window[d(2142)].exception && window.console[d(1928)]) || typeof navigator !== d(1887) && navigator.userAgent && (f = navigator.userAgent[d(1991)]()[d(2069)](/firefox\/(\d+)/)) && parseInt(f[1], 10) >= 31 || typeof navigator !== d(1887) && navigator[d(2178)] && navigator.userAgent[d(1991)]()[d(2069)](/applewebkit\/(\d+)/);
    }
    function r(d) {
      var f = a;
      if (d[0] = (this[f(2179)] ? "%c" : "") + this[f(580)] + (this.useColors ? " %c" : " ") + d[0] + (this.useColors ? f(1405) : " ") + "+" + x.exports[f(1155)](this[f(1659)]), !this[f(2179)]) return;
      const l = f(631) + this[f(1219)];
      d[f(855)](1, 0, l, f(567));
      let v = 0, h = 0;
      d[0][f(2112)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (v++, m === "%c" && (h = v));
      }), d[f(855)](h, 0, l);
    }
    t.log = console.debug || console[a(1133)] || (() => {
    });
    function n(d) {
      var f = a;
      try {
        d ? t.storage.setItem(f(2491), d) : t[f(2650)][f(1074)]("debug");
      } catch {
      }
    }
    function o() {
      var d = a;
      let f;
      try {
        f = t.storage[d(2270)](d(2491)) || t[d(2650)].getItem("DEBUG");
      } catch {
      }
      return !f && typeof process !== d(1887) && d(1197) in process && (f = process[d(1197)][d(1054)]), f;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x[a(1175)] = Po()(t);
    const { formatters: u } = x[a(1175)];
    u.j = function(d) {
      var f = a;
      try {
        return JSON.stringify(d);
      } catch (l) {
        return "[UnexpectedJSONParseError]: " + l[f(2089)];
      }
    };
  }(fx, fx.exports), fx.exports);
}
var Co = Ro();
const Zs = Ws(Co);
Zs.enable("*");
function Fo(i, x) {
  var t = s;
  const a = Zs(i), e = (r, n) => async function(...o) {
    try {
      await x({ level: r, messages: o });
    } catch {
    }
  };
  return a[t(1133)] = e("log"), a;
}
const qx = Fo(s(1438), async ({ level: i, messages: x }) => {
  var t = s;
  const { mcpMesh: a } = await Promise[t(1890)]()[t(432)](() => jc);
  await a[t(2223)](t(780))[t(2154)].log({ level: i, messages: x });
}), Xt = qx[s(1369)](s(492)), _r = /* @__PURE__ */ new Set();
C0.implementAction(s(1555), async (i) => {
  var x = s;
  return i[x(2166)].forEach(({ nodeID: t, widgetIndex: a, value: e }) => {
    var r = x;
    const n = q0[r(2506)][r(719)].find((o) => o.id == t);
    !n || e == n.widgets[a][r(2038)] || Eo(n, a, e);
  }), { success: !0 };
}), C0.implementAction("openWorkflow", async (i) => {
  var x = s;
  const { workflow_path: t } = i, a = !_r[x(2561)](t), e = i[x(679)] || a;
  _r[x(1342)](t);
  const r = q0[x(839)][x(2334)] || q0[x(1079)], n = r[x(2404)][x(1666)]((c) => c[x(834)] === t || c[x(1796)] === t || c[x(1796)] === x(1640) + t);
  if (!e) {
    const c = await No(r, n);
    if (Xt(x(883) + c), c) await Bx(r, n);
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
    Xt("openWorkflow: " + u.path, u.initialState), q0.workflowManager == c ? await u.load() : (await c[d(1166)](u), await q0[d(482)](JSON[d(1325)](JSON[d(990)](u[d(371)])), !0, !0, u, {}));
  }
}), C0.implementAction("openWorkflowJSON", async function(i) {
  var x = s;
  let { workflow_content: t, workflow_path: a } = i;
  return t[x(1005)] = { ...t[x(1005)] || {}, sdppp_workflow_alias: a }, await q0[x(482)](t), { success: !0 };
}), C0[s(2376)](s(1581), async (i) => {
  var r;
  var x = s;
  const t = q0.workflowManager || q0.extensionManager[x(2334)];
  (r = t[x(1168)]) == null || r.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t.workflows[x(632)]((n) => n[x(1796)][x(2112)]("workflows/", ""));
  try {
    const n = new Headers(), o = localStorage[x(2270)](x(1434));
    o && n[x(1951)](x(833), o);
    const c = await fetch(x(1466), { headers: n });
    let u = [];
    c.ok && (u = (await c[x(1003)]())[x(2256)][x(632)]((f) => f[x(2112)]("workflows/", ""))), e[x(759)]((d, f) => {
      var l = x;
      const v = u.includes(d), h = u[l(553)](f);
      return v && !h ? -1 : !v && h ? 1 : d.localeCompare(f);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), C0[s(2376)](s(2081), async (i) => {
  var n;
  var x = s;
  const { workflow_path: t, from_sid: a } = i, e = q0[x(1079)] || q0[x(839)].workflow, r = e[x(2404)].find((o) => o[x(834)] === t || o[x(1796)] === t || o[x(1796)] === x(1640) + t);
  if (!r) throw new Error(x(772));
  return ((n = e[x(1693)]) == null ? void 0 : n.id) != r.id && await q0[x(1166)](t, a, !1), r[x(587)].checkState(), await e[x(2081)](r), { success: !0 };
});
async function No(i, x) {
  var e, r, n;
  var t = s;
  if (!x || !(((e = i[t(1693)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((r = x[t(587)]) != null && r[t(2588)]) try {
    x[t(587)].checkState();
  } catch (o) {
    console[t(1797)](t(2212), o);
  }
  try {
    const o = (n = q0[t(2506)]) == null ? void 0 : n.serialize(), c = x[t(1708)];
    if (!o || !c) return !1;
    const u = JSON[t(990)](o), d = JSON[t(990)](c);
    return u !== d;
  } catch (o) {
    return console[t(1797)](t(2347), o), !1;
  }
}
async function Bx(i, x) {
  var e;
  var t = s;
  Xt(t(533) + x[t(1796)]);
  async function a(r, n) {
    var o = t;
    q0[o(1079)] == r ? await n.load() : (await r.openWorkflow(n), await q0[o(482)](JSON.parse(JSON[o(990)](n.activeState)), !0, !0, n, {}));
  }
  if ((x[t(2339)] || (e = i[t(2339)]) != null && e.call(i, x)) && i[t(579)][t(2021)] === 1) {
    const r = i[t(1034)]();
    i.openWorkflow(r);
  } else await a(i, i.openWorkflows[0] == x ? i[t(579)][1] : i.openWorkflows[0]);
  await i[t(2239)](x, !1), await new Promise((r) => requestAnimationFrame(r)), await a(i, x);
}
const Xe = qx[s(1369)](s(564)), Ne = /* @__PURE__ */ new Map();
function qo(i, x) {
  var t = s;
  const a = Ne.get(i);
  Xe(t(1893), i, x, a, Ne), a && a.resolveImage(x);
}
C0[s(2376)](s(463), async function* (i) {
  var x = s;
  let t = !1, a = [];
  function e() {
    var l = K;
    if (t) return;
    const v = Oe[l(1730)];
    Oe[l(1730)] = async (...h) => {
      var m = l;
      try {
        const y = await v[m(1547)](Oe, ...h);
        return a.push({ error: null, result: y, prompt_id: y.prompt_id }), y;
      } catch (y) {
        throw a.push({ error: y, result: null, prompt_id: "" }), y;
      }
    }, t = !0;
  }
  t || e();
  const r = i[x(1066)];
  let n = !1, o = {}, c = [];
  C0[x(917)][x(892)]({ lastError: "", widgetableErrors: {} });
  try {
    a = [], await q0.queuePrompt(1, r), a.forEach((l) => {
      var h, m;
      var v = x;
      if (l[v(503)]) n = !0, o = l[v(503)][v(2198)] ? f(l[v(503)][v(2198)].node_errors) : {}, Object[v(740)](o, { "-1": ((m = (h = l[v(503)].response) == null ? void 0 : h[v(503)]) == null ? void 0 : m[v(2089)]) || l[v(503)].message });
      else {
        const y = l[v(1806)][v(583)];
        c[v(2380)](y);
        let w, E;
        const O = new Promise((R, k) => {
          w = R, E = k;
        }), T = { promise: O, resolveImage: w, rejectImage: E };
        Ne[v(1951)](y, T);
      }
    });
  } catch (l) {
    Xe(x(593), l[x(2108)]), n = !0, o = { "-1": l[x(2089)] || l[x(1892)]() };
  }
  Xe(x(1236), n, o, x(473), c), n && C0[x(917)][x(892)]({ widgetableErrors: o });
  let u = [];
  const d = /* @__PURE__ */ new Map();
  for (const l of c) {
    const v = Ne.get(l);
    v && d[x(1951)](l, v[x(694)]);
  }
  for (Xe(x(1275)); d[x(1066)] > 0; ) {
    const l = Array[x(1147)](d[x(446)]()), v = l[x(632)](([y, w]) => w[x(432)]((E) => ({ prompt_id: y, images: E }))), { prompt_id: h, images: m } = await Promise.race(v);
    Xe(x(2151), h), u[x(2380)](...m), d[x(2434)](h), Ne[x(2434)](h), yield { success: !0, prompt_ids: [h], images: m };
  }
  function f(l) {
    const v = {};
    return Object.keys(l).forEach((h) => {
      var m = K;
      const y = h[m(2183)](":")[0], w = q0[m(2506)][m(719)][m(1666)]((E) => E.id == y);
      v[y] = "[" + ((w == null ? void 0 : w[m(344)]) || y) + "]" + l[h][m(1188)][m(632)](JSON.stringify).join(`
`);
    }), v;
  }
}), C0[s(2376)](s(578), async () => {
  var i = s;
  await q0.api[i(1255)]("queue"), await q0[i(1634)].interrupt();
  const x = Array[i(1147)](Ne.values());
  Ne.clear();
  for (const t of x)
    try {
      t.rejectImage(new Error(i(813)));
    } catch {
    }
  return { success: !0 };
}), C0[s(2376)](s(2104), async (i) => {
  var x = s;
  const { node_id: t, title: a } = i, e = q0[x(2506)][x(719)][x(1666)]((r) => r.id == t);
  if (!e) throw new Error(x(1050));
  return e.title = a, e.setProperty(x(1021), a), { success: !0 };
}), C0.implementAction("reboot", async () => {
  var i = s;
  const x = await fetch("./api/manager/reboot");
  return x[i(2296)] == 404 ? { error: Gt(i(2519)), success: !1 } : x[i(2296)] == 200 ? { success: !0 } : { error: Gt(i(2147)) + x.statusText, success: !1 };
}), C0.implementAction(s(739), async (i) => {
  var x = s;
  const { api_key: t } = i;
  return localStorage[x(2124)](x(1781), t), location[x(1525)](), { success: !0 };
}), C0[s(2376)](s(1209), async () => {
  var i = s;
  return document[i(2405)](".pi-sign-out")[i(1378)].click(), { success: !0 };
});
const Bs = s(1247), To = [Bs, "2025-03-26", "2024-11-05", s(1709)], Tx = s(2545), Ks = J0([S(), t0().int()]), Js = S(), Oo = I({ progressToken: Z(Ks) }).passthrough(), ae = I({ _meta: Z(Oo) })[s(1685)](), xe = I({ method: S(), params: Z(ae) }), nx = I({ _meta: Z(I({})[s(1685)]()) })[s(1685)](), ve = I({ method: S(), params: Z(nx) }), se = I({ _meta: Z(I({})[s(1685)]()) })[s(1685)](), Ox = J0([S(), t0()[s(2395)]()]), Gs = I({ jsonrpc: r0(Tx), id: Ox })[s(2310)](xe).strict(), Ao = (i) => Gs.safeParse(i).success, Qs = I({ jsonrpc: r0(Tx) })[s(2310)](ve).strict(), Do = (i) => Qs[s(915)](i)[s(2624)], Xs = I({ jsonrpc: r0(Tx), id: Ox, result: se })[s(565)](), ea = (i) => Xs[s(915)](i).success;
var be;
(function(i) {
  var x = s;
  i[i.ConnectionClosed = -32e3] = x(686), i[i[x(1131)] = -32001] = x(1131), i[i[x(1931)] = -32700] = "ParseError", i[i.InvalidRequest = -32600] = x(1135), i[i[x(1427)] = -32601] = x(1427), i[i[x(1934)] = -32602] = x(1934), i[i.InternalError = -32603] = "InternalError";
})(be || (be = {}));
const Ys = I({ jsonrpc: r0(Tx), id: Ox, error: I({ code: t0()[s(2395)](), message: S(), data: Z(sx()) }) })[s(565)](), jo = (i) => Ys.safeParse(i)[s(2624)];
J0([Gs, Qs, Xs, Ys]);
const Yt = se.strict(), _t = ve[s(1369)]({ method: r0("notifications/cancelled"), params: nx[s(1369)]({ requestId: Ox, reason: S()[s(1285)]() }) }), ix = I({ name: S(), title: Z(S()) })[s(1685)](), _s = ix[s(1369)]({ version: S() }), Mo = I({ experimental: Z(I({})[s(1685)]()), sampling: Z(I({}).passthrough()), elicitation: Z(I({})[s(1685)]()), roots: Z(I({ listChanged: Z(x0()) })[s(1685)]()) })[s(1685)](), en = xe[s(1369)]({ method: r0(s(2226)), params: ae[s(1369)]({ protocolVersion: S(), capabilities: Mo, clientInfo: _s }) }), Lo = I({ experimental: Z(I({})[s(1685)]()), logging: Z(I({})[s(1685)]()), completions: Z(I({})[s(1685)]()), prompts: Z(I({ listChanged: Z(x0()) })[s(1685)]()), resources: Z(I({ subscribe: Z(x0()), listChanged: Z(x0()) })[s(1685)]()), tools: Z(I({ listChanged: Z(x0()) })[s(1685)]()) }).passthrough(), $o = se[s(1369)]({ protocolVersion: S(), capabilities: Lo, serverInfo: _s, instructions: Z(S()) }), xn = ve.extend({ method: r0(s(1752)) }), er = xe[s(1369)]({ method: r0(s(1592)) }), zo = I({ progress: t0(), total: Z(t0()), message: Z(S()) }).passthrough(), xr = ve[s(1369)]({ method: r0(s(901)), params: nx[s(2310)](zo)[s(1369)]({ progressToken: Ks }) }), Ax = xe[s(1369)]({ params: ae[s(1369)]({ cursor: Z(Js) }).optional() }), Dx = se[s(1369)]({ nextCursor: Z(Js) }), tn = I({ uri: S(), mimeType: Z(S()), _meta: Z(I({})[s(1685)]()) })[s(1685)](), rn = tn[s(1369)]({ text: S() }), an = tn[s(1369)]({ blob: S().base64() }), sn = ix.extend({ uri: S(), description: Z(S()), mimeType: Z(S()), _meta: Z(I({}).passthrough()) }), Ho = ix.extend({ uriTemplate: S(), description: Z(S()), mimeType: Z(S()), _meta: Z(I({})[s(1685)]()) }), Uo = Ax.extend({ method: r0(s(843)) }), Vo = Dx.extend({ resources: I0(sn) }), Wo = Ax[s(1369)]({ method: r0(s(985)) }), Zo = Dx[s(1369)]({ resourceTemplates: I0(Ho) }), Bo = xe[s(1369)]({ method: r0(s(866)), params: ae[s(1369)]({ uri: S() }) }), Ko = se[s(1369)]({ contents: I0(J0([rn, an])) }), Jo = ve.extend({ method: r0(s(1888)) }), Go = xe[s(1369)]({ method: r0(s(816)), params: ae.extend({ uri: S() }) }), Qo = xe[s(1369)]({ method: r0(s(1500)), params: ae.extend({ uri: S() }) }), Xo = ve[s(1369)]({ method: r0("notifications/resources/updated"), params: nx[s(1369)]({ uri: S() }) }), Yo = I({ name: S(), description: Z(S()), required: Z(x0()) })[s(1685)](), _o = ix[s(1369)]({ description: Z(S()), arguments: Z(I0(Yo)), _meta: Z(I({})[s(1685)]()) }), e2 = Ax[s(1369)]({ method: r0(s(1377)) }), x2 = Dx.extend({ prompts: I0(_o) }), t2 = xe[s(1369)]({ method: r0(s(1544)), params: ae[s(1369)]({ name: S(), arguments: Z(H0(S())) }) }), sr = I({ type: r0(s(1645)), text: S(), _meta: Z(I({})[s(1685)]()) })[s(1685)](), nr = I({ type: r0(s(1027)), data: S()[s(2287)](), mimeType: S(), _meta: Z(I({}).passthrough()) }).passthrough(), ir = I({ type: r0(s(2516)), data: S()[s(2287)](), mimeType: S(), _meta: Z(I({}).passthrough()) })[s(1685)](), r2 = I({ type: r0(s(2443)), resource: J0([rn, an]), _meta: Z(I({})[s(1685)]()) }).passthrough(), a2 = sn[s(1369)]({ type: r0(s(1424)) }), nn = J0([sr, nr, ir, a2, r2]), s2 = I({ role: F0([s(868), s(496)]), content: nn })[s(1685)](), n2 = se[s(1369)]({ description: Z(S()), messages: I0(s2) }), i2 = ve[s(1369)]({ method: r0(s(1349)) }), o2 = I({ title: Z(S()), readOnlyHint: Z(x0()), destructiveHint: Z(x0()), idempotentHint: Z(x0()), openWorldHint: Z(x0()) })[s(1685)](), c2 = ix[s(1369)]({ description: Z(S()), inputSchema: I({ type: r0(s(1923)), properties: Z(I({}).passthrough()), required: Z(I0(S())) }).passthrough(), outputSchema: Z(I({ type: r0(s(1923)), properties: Z(I({})[s(1685)]()), required: Z(I0(S())) })[s(1685)]()), annotations: Z(o2), _meta: Z(I({})[s(1685)]()) }), u2 = Ax[s(1369)]({ method: r0(s(2095)) }), d2 = Dx[s(1369)]({ tools: I0(c2) }), on = se[s(1369)]({ content: I0(nn)[s(2641)]([]), structuredContent: I({})[s(1685)]()[s(1285)](), isError: Z(x0()) });
on.or(se.extend({ toolResult: sx() }));
const f2 = xe[s(1369)]({ method: r0("tools/call"), params: ae[s(1369)]({ name: S(), arguments: Z(H0(sx())) }) }), l2 = ve[s(1369)]({ method: r0("notifications/tools/list_changed") }), cn = F0(["debug", s(1604), s(311), s(2522), s(503), "critical", s(1566), s(1575)]), h2 = xe[s(1369)]({ method: r0("logging/setLevel"), params: ae[s(1369)]({ level: cn }) }), p2 = ve[s(1369)]({ method: r0(s(1401)), params: nx[s(1369)]({ level: cn, logger: Z(S()), data: sx() }) }), m2 = I({ name: S().optional() })[s(1685)](), v2 = I({ hints: Z(I0(m2)), costPriority: Z(t0()[s(1524)](0)[s(2537)](1)), speedPriority: Z(t0()[s(1524)](0)[s(2537)](1)), intelligencePriority: Z(t0().min(0)[s(2537)](1)) })[s(1685)](), g2 = I({ role: F0([s(868), s(496)]), content: J0([sr, nr, ir]) })[s(1685)](), y2 = xe[s(1369)]({ method: r0(s(732)), params: ae[s(1369)]({ messages: I0(g2), systemPrompt: Z(S()), includeContext: Z(F0(["none", s(1610), s(1967)])), temperature: Z(t0()), maxTokens: t0()[s(2395)](), stopSequences: Z(I0(S())), metadata: Z(I({})[s(1685)]()), modelPreferences: Z(v2) }) }), un = se.extend({ model: S(), stopReason: Z(F0([s(1633), s(2150), s(810)]).or(S())), role: F0(["user", s(496)]), content: $s(s(338), [sr, nr, ir]) }), b2 = I({ type: r0("boolean"), title: Z(S()), description: Z(S()), default: Z(x0()) }).passthrough(), w2 = I({ type: r0(s(2348)), title: Z(S()), description: Z(S()), minLength: Z(t0()), maxLength: Z(t0()), format: Z(F0([s(2500), s(2338), s(1582), "date-time"])) })[s(1685)](), S2 = I({ type: F0([s(960), s(893)]), title: Z(S()), description: Z(S()), minimum: Z(t0()), maximum: Z(t0()) })[s(1685)](), k2 = I({ type: r0(s(2348)), title: Z(S()), description: Z(S()), enum: I0(S()), enumNames: Z(I0(S())) })[s(1685)](), E2 = J0([b2, w2, S2, k2]), I2 = xe.extend({ method: r0("elicitation/create"), params: ae[s(1369)]({ message: S(), requestedSchema: I({ type: r0(s(1923)), properties: H0(S(), E2), required: Z(I0(S())) })[s(1685)]() }) }), dn = se[s(1369)]({ action: F0([s(2622), s(640), s(2252)]), content: Z(H0(S(), sx())) }), P2 = I({ type: r0(s(1641)), uri: S() })[s(1685)](), R2 = I({ type: r0(s(1124)), name: S() }).passthrough(), C2 = xe[s(1369)]({ method: r0("completion/complete"), params: ae[s(1369)]({ ref: J0([R2, P2]), argument: I({ name: S(), value: S() })[s(1685)](), context: Z(I({ arguments: Z(H0(S(), S())) })) }) }), F2 = se[s(1369)]({ completion: I({ values: I0(S())[s(2537)](100), total: Z(t0()[s(2395)]()), hasMore: Z(x0()) })[s(1685)]() }), N2 = I({ uri: S().startsWith(s(1704)), name: Z(S()), _meta: Z(I({})[s(1685)]()) })[s(1685)](), q2 = xe[s(1369)]({ method: r0(s(1396)) }), fn = se[s(1369)]({ roots: I0(N2) }), T2 = ve[s(1369)]({ method: r0(s(1489)) });
J0([er, en, C2, h2, t2, e2, Uo, Wo, Bo, Go, Qo, f2, u2]), J0([_t, xr, xn, T2]), J0([Yt, un, dn, fn]), J0([er, y2, I2, q2]), J0([_t, xr, p2, Xo, Jo, l2, i2]), J0([Yt, $o, F2, n2, x2, Vo, Zo, Ko, on, d2]);
class Te extends Error {
  constructor(x, t, a) {
    var e = s;
    super(e(683) + x + ": " + t), this.code = x, this[e(1073)] = a, this.name = e(1295);
  }
}
const O2 = 6e4;
class A2 {
  constructor(x) {
    var t = s;
    this[t(350)] = x, this[t(1081)] = 0, this[t(2325)] = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this[t(413)] = /* @__PURE__ */ new Map(), this[t(1700)] = /* @__PURE__ */ new Map(), this[t(1966)] = /* @__PURE__ */ new Map(), this[t(283)] = /* @__PURE__ */ new Map(), this[t(1799)] = /* @__PURE__ */ new Set(), this[t(336)](_t, (a) => {
      var e = t;
      const r = this[e(1159)][e(2229)](a[e(817)].requestId);
      r == null || r[e(1198)](a[e(817)][e(581)]);
    }), this[t(336)](xr, (a) => {
      var e = t;
      this[e(710)](a);
    }), this[t(1983)](er, (a) => ({}));
  }
  [s(983)](x, t, a, e, r = !1) {
    var n = s;
    this[n(283)][n(1951)](x, { timeoutId: setTimeout(e, t), startTime: Date[n(2600)](), timeout: t, maxTotalTimeout: a, resetTimeoutOnProgress: r, onTimeout: e });
  }
  [s(364)](x) {
    var t = s;
    const a = this[t(283)][t(2229)](x);
    if (!a) return !1;
    const e = Date[t(2600)]() - a[t(2130)];
    if (a[t(2459)] && e >= a.maxTotalTimeout)
      throw this[t(283)][t(2434)](x), new Te(be[t(1131)], t(870), { maxTotalTimeout: a[t(2459)], totalElapsed: e });
    return clearTimeout(a[t(1943)]), a.timeoutId = setTimeout(a[t(2375)], a[t(1588)]), !0;
  }
  [s(898)](x) {
    var t = s;
    const a = this[t(283)][t(2229)](x);
    a && (clearTimeout(a.timeoutId), this[t(283)][t(2434)](x));
  }
  async [s(1649)](x) {
    var t = s, a, e, r;
    this._transport = x;
    const n = (a = this.transport) === null || a === void 0 ? void 0 : a.onclose;
    this[t(1775)][t(2172)] = () => {
      var u = t;
      n == null || n(), this[u(1556)]();
    };
    const o = (e = this[t(1433)]) === null || e === void 0 ? void 0 : e[t(1865)];
    this[t(1775)].onerror = (u) => {
      o == null || o(u), this._onerror(u);
    };
    const c = (r = this[t(1775)]) === null || r === void 0 ? void 0 : r[t(2082)];
    this[t(1775)].onmessage = (u, d) => {
      var f = t;
      c == null || c(u, d), ea(u) || jo(u) ? this._onresponse(u) : Ao(u) ? this._onrequest(u, d) : Do(u) ? this[f(1906)](u) : this[f(383)](new Error(f(908) + JSON.stringify(u)));
    }, await this[t(1775)].start();
  }
  [s(1556)]() {
    var x = s, t;
    const a = this[x(1700)];
    this[x(1700)] = /* @__PURE__ */ new Map(), this[x(1966)].clear(), this[x(1799)][x(2173)](), this[x(1775)] = void 0, (t = this.onclose) === null || t === void 0 || t[x(1547)](this);
    const e = new Te(be[x(686)], x(2553));
    for (const r of a[x(2166)]())
      r(e);
  }
  [s(383)](x) {
    var t = s, a;
    (a = this[t(1865)]) === null || a === void 0 || a[t(1547)](this, x);
  }
  _onnotification(x) {
    var t = s, a;
    const e = (a = this._notificationHandlers.get(x[t(1921)])) !== null && a !== void 0 ? a : this[t(1516)];
    e !== void 0 && Promise[t(1890)]().then(() => e(x))[t(947)]((r) => this[t(383)](new Error(t(1461) + r)));
  }
  [s(2035)](x, t) {
    var a = s, e, r, n, o;
    const c = (e = this._requestHandlers[a(2229)](x[a(1921)])) !== null && e !== void 0 ? e : this[a(1764)];
    if (c === void 0) {
      (r = this[a(1775)]) === null || r === void 0 || r[a(980)]({ jsonrpc: "2.0", id: x.id, error: { code: be[a(1427)], message: a(649) } })[a(947)]((f) => this[a(383)](new Error(a(2006) + f)));
      return;
    }
    const u = new AbortController();
    this._requestHandlerAbortControllers[a(1951)](x.id, u);
    const d = { signal: u[a(996)], sessionId: (n = this[a(1775)]) === null || n === void 0 ? void 0 : n[a(1324)], _meta: (o = x[a(817)]) === null || o === void 0 ? void 0 : o[a(326)], sendNotification: (f) => this[a(1676)](f, { relatedRequestId: x.id }), sendRequest: (f, l, v) => this[a(1658)](f, l, { ...v, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t[a(1290)], requestId: x.id, requestInfo: t == null ? void 0 : t[a(849)] };
    Promise.resolve().then(() => c(x, d)).then((f) => {
      var l = a, v;
      if (!u[l(996)][l(806)])
        return (v = this._transport) === null || v === void 0 ? void 0 : v[l(980)]({ result: f, jsonrpc: l(2545), id: x.id });
    }, (f) => {
      var l = a, v, h;
      if (!u[l(996)][l(806)])
        return (v = this[l(1775)]) === null || v === void 0 ? void 0 : v.send({ jsonrpc: "2.0", id: x.id, error: { code: Number.isSafeInteger(f.code) ? f[l(733)] : be[l(537)], message: (h = f[l(2089)]) !== null && h !== void 0 ? h : l(1889) } });
    }).catch((f) => this[a(383)](new Error(a(1648) + f)))[a(1817)](() => {
      var f = a;
      this[f(1159)][f(2434)](x.id);
    });
  }
  [s(710)](x) {
    var t = s;
    const { progressToken: a, ...e } = x.params, r = Number(a), n = this._progressHandlers[t(2229)](r);
    if (!n) {
      this[t(383)](new Error(t(1594) + JSON[t(990)](x)));
      return;
    }
    const o = this[t(1700)][t(2229)](r), c = this[t(283)][t(2229)](r);
    if (c && o && c[t(2398)]) try {
      this[t(364)](r);
    } catch (u) {
      o(u);
      return;
    }
    n(e);
  }
  _onresponse(x) {
    var t = s;
    const a = Number(x.id), e = this[t(1700)][t(2229)](a);
    if (e === void 0) {
      this[t(383)](new Error(t(530) + JSON[t(990)](x)));
      return;
    }
    if (this[t(1700)][t(2434)](a), this._progressHandlers[t(2434)](a), this[t(898)](a), ea(x)) e(x);
    else {
      const r = new Te(x[t(503)].code, x[t(503)].message, x.error.data);
      e(r);
    }
  }
  get [s(1433)]() {
    var x = s;
    return this[x(1775)];
  }
  async close() {
    var x = s, t;
    await ((t = this[x(1775)]) === null || t === void 0 ? void 0 : t[x(2114)]());
  }
  [s(1658)](x, t, a) {
    const { relatedRequestId: e, resumptionToken: r, onresumptiontoken: n } = a ?? {};
    return new Promise((o, c) => {
      var u = K, d, f, l, v, h, m;
      if (!this[u(1775)]) {
        c(new Error(u(2311)));
        return;
      }
      ((d = this[u(350)]) === null || d === void 0 ? void 0 : d.enforceStrictCapabilities) === !0 && this[u(2143)](x.method), (f = a == null ? void 0 : a[u(996)]) === null || f === void 0 || f[u(576)]();
      const y = this[u(1081)]++, w = { ...x, jsonrpc: u(2545), id: y };
      a != null && a[u(1478)] && (this[u(1966)].set(y, a.onprogress), w[u(817)] = { ...x.params, _meta: { ...((l = x[u(817)]) === null || l === void 0 ? void 0 : l[u(326)]) || {}, progressToken: y } });
      const E = (R) => {
        var k = u, N;
        this[k(1700)][k(2434)](y), this[k(1966)][k(2434)](y), this[k(898)](y), (N = this[k(1775)]) === null || N === void 0 || N[k(980)]({ jsonrpc: k(2545), method: k(862), params: { requestId: y, reason: String(R) } }, { relatedRequestId: e, resumptionToken: r, onresumptiontoken: n })[k(947)]((j) => this[k(383)](new Error(k(2614) + j))), c(R);
      };
      this[u(1700)][u(1951)](y, (R) => {
        var k = u, N;
        if (!(!((N = a == null ? void 0 : a[k(996)]) === null || N === void 0) && N[k(806)])) {
          if (R instanceof Error) return c(R);
          try {
            const j = t[k(1325)](R[k(1806)]);
            o(j);
          } catch (j) {
            c(j);
          }
        }
      }), (v = a == null ? void 0 : a[u(996)]) === null || v === void 0 || v.addEventListener(u(1198), () => {
        var R = u, k;
        E((k = a == null ? void 0 : a[R(996)]) === null || k === void 0 ? void 0 : k.reason);
      });
      const O = (h = a == null ? void 0 : a[u(1588)]) !== null && h !== void 0 ? h : O2, T = () => E(new Te(be.RequestTimeout, u(1724), { timeout: O }));
      this[u(983)](y, O, a == null ? void 0 : a.maxTotalTimeout, T, (m = a == null ? void 0 : a[u(2398)]) !== null && m !== void 0 ? m : !1), this._transport.send(w, { relatedRequestId: e, resumptionToken: r, onresumptiontoken: n }).catch((R) => {
        var k = u;
        this[k(898)](y), c(R);
      });
    });
  }
  async [s(1676)](x, t) {
    var a = s, e, r;
    if (!this[a(1775)]) throw new Error(a(2311));
    if (this[a(1075)](x.method), ((r = (e = this[a(350)]) === null || e === void 0 ? void 0 : e.debouncedNotificationMethods) !== null && r !== void 0 ? r : [])[a(553)](x[a(1921)]) && !x[a(817)] && !(t != null && t.relatedRequestId)) {
      if (this[a(1799)].has(x.method)) return;
      this[a(1799)][a(1342)](x[a(1921)]), Promise[a(1890)]().then(() => {
        var u = a, d;
        if (this[u(1799)].delete(x[u(1921)]), !this[u(1775)]) return;
        const f = { ...x, jsonrpc: u(2545) };
        (d = this[u(1775)]) === null || d === void 0 || d.send(f, t)[u(947)]((l) => this[u(383)](l));
      });
      return;
    }
    const c = { ...x, jsonrpc: "2.0" };
    await this[a(1775)][a(980)](c, t);
  }
  [s(1983)](x, t) {
    var a = s;
    const e = x[a(2219)].method[a(2038)];
    this[a(2601)](e), this[a(2325)][a(1951)](e, (r, n) => {
      var o = a;
      return Promise[o(1890)](t(x[o(1325)](r), n));
    });
  }
  [s(703)](x) {
    var t = s;
    this[t(2325)][t(2434)](x);
  }
  [s(959)](x) {
    var t = s;
    if (this[t(2325)][t(2561)](x)) throw new Error(t(1129) + x + " already exists, which would be overridden");
  }
  [s(336)](x, t) {
    var a = s;
    this._notificationHandlers[a(1951)](x[a(2219)][a(1921)][a(2038)], (e) => Promise[a(1890)](t(x[a(1325)](e))));
  }
  [s(1030)](x) {
    var t = s;
    this[t(413)][t(2434)](x);
  }
}
function D2(i, x) {
  var t = s;
  return Object.entries(x)[t(2483)]((a, [e, r]) => {
    var n = t;
    return r && typeof r === n(1923) ? a[e] = a[e] ? { ...a[e], ...r } : r : a[e] = r, a;
  }, { ...i });
}
var Ye = { exports: {} }, j2 = Ye[s(1175)], xa;
function M2() {
  var i = s;
  return xa || (xa = 1, function(x, t) {
    (function(a, e) {
      e(t);
    })(j2, function(a) {
      var e = K;
      function r() {
        for (var P = K, p = arguments[P(2021)], g = Array(p), b = 0; b < p; b++)
          g[b] = arguments[b];
        if (g[P(2021)] > 1) {
          g[0] = g[0][P(1813)](0, -1);
          for (var z = g[P(2021)] - 1, $ = 1; $ < z; ++$)
            g[$] = g[$][P(1813)](1, -1);
          return g[z] = g[z][P(1813)](1), g[P(2515)]("");
        } else return g[0];
      }
      function n(P) {
        return "(?:" + P + ")";
      }
      function o(P) {
        var p = K;
        return P === void 0 ? "undefined" : P === null ? "null" : Object[p(2180)][p(1892)][p(1547)](P)[p(2183)](" ")[p(932)]()[p(2183)]("]")[p(761)]()[p(1991)]();
      }
      function c(P) {
        var p = K;
        return P[p(1626)]();
      }
      function u(P) {
        var p = K;
        return P != null ? P instanceof Array ? P : typeof P[p(2021)] !== p(960) || P.split || P[p(858)] || P[p(1547)] ? [P] : Array[p(2180)][p(1813)][p(1547)](P) : [];
      }
      function d(P, p) {
        var g = P;
        if (p) for (var b in p)
          g[b] = p[b];
        return g;
      }
      function f(P) {
        var p = K, g = p(676), b = p(1672), z = r(b, "[A-Fa-f]"), $ = n(n(p(1364) + z + "%" + z + z + "%" + z + z) + "|" + n("%[89A-Fa-f]" + z + "%" + z + z) + "|" + n("%" + z + z)), s0 = p(558), d0 = p(2493), R0 = r(s0, d0), j0 = P ? p(1379) : "[]", W0 = P ? p(1917) : "[]", k0 = r(g, b, p(1343), j0);
        n(g + r(g, b, "[\\+\\-\\.]") + "*"), n(n($ + "|" + r(k0, d0, p(1409))) + "*");
        var A0 = n(n(p(1735)) + "|" + n(p(1578) + b) + "|" + n("1" + b + b) + "|" + n(p(746) + b) + p(1925) + b), Z0 = n(A0 + "\\." + A0 + "\\." + A0 + "\\." + A0), g0 = n(z + p(2566)), $0 = n(n(g0 + "\\:" + g0) + "|" + Z0), B0 = n(n(g0 + "\\:") + "{6}" + $0), z0 = n(p(2648) + n(g0 + "\\:") + p(2214) + $0), Ee = n(n(g0) + p(2120) + n(g0 + "\\:") + "{4}" + $0), oe = n(n(n(g0 + "\\:") + p(2590) + g0) + p(2120) + n(g0 + "\\:") + "{3}" + $0), ce = n(n(n(g0 + "\\:") + p(2185) + g0) + p(2120) + n(g0 + "\\:") + p(490) + $0), ze = n(n(n(g0 + "\\:") + p(1674) + g0) + p(2120) + g0 + "\\:" + $0), Ce = n(n(n(g0 + "\\:") + p(1163) + g0) + p(2120) + $0), te = n(n(n(g0 + "\\:") + p(2126) + g0) + p(2120) + g0), ue = n(n(n(g0 + "\\:") + p(324) + g0) + p(2120)), de = n([B0, z0, Ee, oe, ce, ze, Ce, te, ue][p(2515)]("|")), fe = n(n(k0 + "|" + $) + "+");
        n(p(2245) + z + p(1507) + r(k0, d0, p(1409)) + "+"), n(n($ + "|" + r(k0, d0)) + "*");
        var le = n($ + "|" + r(k0, d0, p(1387)));
        return n(n($ + "|" + r(k0, d0, p(455))) + "+"), n(n(le + "|" + r("[\\/\\?]", W0)) + "*"), { NOT_SCHEME: new RegExp(r(p(313), g, b, p(289)), "g"), NOT_USERINFO: new RegExp(r("[^\\%\\:]", k0, d0), "g"), NOT_HOST: new RegExp(r(p(1335), k0, d0), "g"), NOT_PATH: new RegExp(r(p(2161), k0, d0), "g"), NOT_PATH_NOSCHEME: new RegExp(r(p(422), k0, d0), "g"), NOT_QUERY: new RegExp(r(p(1220), k0, d0, "[\\:\\@\\/\\?]", W0), "g"), NOT_FRAGMENT: new RegExp(r(p(1220), k0, d0, p(1368)), "g"), ESCAPE: new RegExp(r(p(313), k0, d0), "g"), UNRESERVED: new RegExp(k0, "g"), OTHER_CHARS: new RegExp(r("[^\\%]", k0, R0), "g"), PCT_ENCODED: new RegExp($, "g"), IPV4ADDRESS: new RegExp("^(" + Z0 + ")$"), IPV6ADDRESS: new RegExp("^\\[?(" + de + ")" + n(n("\\%25|\\%(?!" + z + p(2359)) + "(" + fe + ")") + p(1662)) };
      }
      var l = f(!1), v = f(!0), h = /* @__PURE__ */ function() {
        function P(p, g) {
          var b = K, z = [], $ = !0, s0 = !1, d0 = void 0;
          try {
            for (var R0 = p[Symbol[b(2597)]](), j0; !($ = (j0 = R0[b(690)]())[b(2340)]) && (z[b(2380)](j0[b(2038)]), !(g && z.length === g)); $ = !0)
              ;
          } catch (W0) {
            s0 = !0, d0 = W0;
          } finally {
            try {
              !$ && R0[b(1794)] && R0[b(1794)]();
            } finally {
              if (s0) throw d0;
            }
          }
          return z;
        }
        return function(p, g) {
          var b = K;
          if (Array[b(1435)](p)) return p;
          if (Symbol[b(2597)] in Object(p)) return P(p, g);
          throw new TypeError(b(2350));
        };
      }(), m = function(P) {
        var p = K;
        if (Array[p(1435)](P)) {
          for (var g = 0, b = Array(P.length); g < P[p(2021)]; g++) b[g] = P[g];
          return b;
        } else return Array[p(1147)](P);
      }, y = 2147483647, w = 36, E = 1, O = 26, T = 38, R = 700, k = 72, N = 128, j = "-", D = /^xn--/, M = /[^\0-\x7E]/, F = /[\x2E\u3002\uFF0E\uFF61]/g, C = { overflow: e(1084), "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": e(1506) }, H = w - E, U = Math.floor, V = String[e(2606)];
      function J(P) {
        throw new RangeError(C[P]);
      }
      function c0(P, p) {
        for (var g = e, b = [], z = P[g(2021)]; z--; )
          b[z] = p(P[z]);
        return b;
      }
      function u0(P, p) {
        var g = e, b = P[g(2183)]("@"), z = "";
        b.length > 1 && (z = b[0] + "@", P = b[1]), P = P[g(2112)](F, ".");
        var $ = P.split("."), s0 = c0($, p).join(".");
        return z + s0;
      }
      function l0(P) {
        for (var p = e, g = [], b = 0, z = P[p(2021)]; b < z; ) {
          var $ = P[p(2184)](b++);
          if ($ >= 55296 && $ <= 56319 && b < z) {
            var s0 = P[p(2184)](b++);
            (s0 & 64512) == 56320 ? g[p(2380)]((($ & 1023) << 10) + (s0 & 1023) + 65536) : (g[p(2380)]($), b--);
          } else g.push($);
        }
        return g;
      }
      var i0 = function(p) {
        var g = e;
        return String[g(863)][g(756)](String, m(p));
      }, f0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : w;
      }, S0 = function(p, g) {
        return p + 22 + 75 * (p < 26) - ((g != 0) << 5);
      }, y0 = function(p, g, b) {
        var z = 0;
        for (p = b ? U(p / R) : p >> 1, p += U(p / g); p > H * O >> 1; z += w)
          p = U(p / H);
        return U(z + (H + 1) * p / (p + T));
      }, M0 = function(p) {
        var g = e, b = [], z = p[g(2021)], $ = 0, s0 = N, d0 = k, R0 = p[g(1231)](j);
        R0 < 0 && (R0 = 0);
        for (var j0 = 0; j0 < R0; ++j0)
          p[g(2184)](j0) >= 128 && J(g(844)), b[g(2380)](p[g(2184)](j0));
        for (var W0 = R0 > 0 ? R0 + 1 : 0; W0 < z; ) {
          for (var k0 = $, A0 = 1, Z0 = w; ; Z0 += w) {
            W0 >= z && J(g(614));
            var g0 = f0(p[g(2184)](W0++));
            (g0 >= w || g0 > U((y - $) / A0)) && J(g(2267)), $ += g0 * A0;
            var $0 = Z0 <= d0 ? E : Z0 >= d0 + O ? O : Z0 - d0;
            if (g0 < $0) break;
            var B0 = w - $0;
            A0 > U(y / B0) && J(g(2267)), A0 *= B0;
          }
          var z0 = b[g(2021)] + 1;
          d0 = y0($ - k0, z0, k0 == 0), U($ / z0) > y - s0 && J(g(2267)), s0 += U($ / z0), $ %= z0, b.splice($++, 0, s0);
        }
        return String[g(863)][g(756)](String, b);
      }, P0 = function(p) {
        var g = e, b = [];
        p = l0(p);
        var z = p[g(2021)], $ = N, s0 = 0, d0 = k, R0 = !0, j0 = !1, W0 = void 0;
        try {
          for (var k0 = p[Symbol[g(2597)]](), A0; !(R0 = (A0 = k0[g(690)]())[g(2340)]); R0 = !0) {
            var Z0 = A0[g(2038)];
            Z0 < 128 && b.push(V(Z0));
          }
        } catch (Je) {
          j0 = !0, W0 = Je;
        } finally {
          try {
            !R0 && k0.return && k0[g(1794)]();
          } finally {
            if (j0) throw W0;
          }
        }
        var g0 = b[g(2021)], $0 = g0;
        for (g0 && b[g(2380)](j); $0 < z; ) {
          var B0 = y, z0 = !0, Ee = !1, oe = void 0;
          try {
            for (var ce = p[Symbol[g(2597)]](), ze; !(z0 = (ze = ce[g(690)]()).done); z0 = !0) {
              var Ce = ze[g(2038)];
              Ce >= $ && Ce < B0 && (B0 = Ce);
            }
          } catch (Je) {
            Ee = !0, oe = Je;
          } finally {
            try {
              !z0 && ce[g(1794)] && ce[g(1794)]();
            } finally {
              if (Ee) throw oe;
            }
          }
          var te = $0 + 1;
          B0 - $ > U((y - s0) / te) && J("overflow"), s0 += (B0 - $) * te, $ = B0;
          var ue = !0, de = !1, fe = void 0;
          try {
            for (var le = p[Symbol[g(2597)]](), yr; !(ue = (yr = le[g(690)]())[g(2340)]); ue = !0) {
              var br = yr[g(2038)];
              if (br < $ && ++s0 > y && J(g(2267)), br == $) {
                for (var ox = s0, cx = w; ; cx += w) {
                  var ux = cx <= d0 ? E : cx >= d0 + O ? O : cx - d0;
                  if (ox < ux) break;
                  var wr = ox - ux, Sr = w - ux;
                  b[g(2380)](V(S0(ux + wr % Sr, 0))), ox = U(wr / Sr);
                }
                b[g(2380)](V(S0(ox, 0))), d0 = y0(s0, te, $0 == g0), s0 = 0, ++$0;
              }
            }
          } catch (Je) {
            de = !0, fe = Je;
          } finally {
            try {
              !ue && le[g(1794)] && le[g(1794)]();
            } finally {
              if (de) throw fe;
            }
          }
          ++s0, ++$;
        }
        return b[g(2515)]("");
      }, Q0 = function(p) {
        return u0(p, function(g) {
          var b = K;
          return D[b(856)](g) ? M0(g.slice(4)[b(1991)]()) : g;
        });
      }, A = function(p) {
        return u0(p, function(g) {
          return M.test(g) ? "xn--" + P0(g) : g;
        });
      }, q = { version: e(2243), ucs2: { decode: l0, encode: i0 }, decode: M0, encode: P0, toASCII: A, toUnicode: Q0 }, L = {};
      function G(P) {
        var p = e, g = P[p(2184)](0), b = void 0;
        return g < 16 ? b = "%0" + g[p(1892)](16)[p(1626)]() : g < 128 ? b = "%" + g[p(1892)](16)[p(1626)]() : g < 2048 ? b = "%" + (g >> 6 | 192)[p(1892)](16)[p(1626)]() + "%" + (g & 63 | 128).toString(16)[p(1626)]() : b = "%" + (g >> 12 | 224).toString(16)[p(1626)]() + "%" + (g >> 6 & 63 | 128)[p(1892)](16).toUpperCase() + "%" + (g & 63 | 128)[p(1892)](16)[p(1626)](), b;
      }
      function X(P) {
        for (var p = e, g = "", b = 0, z = P[p(2021)]; b < z; ) {
          var $ = parseInt(P.substr(b + 1, 2), 16);
          if ($ < 128) g += String[p(2606)]($), b += 3;
          else if ($ >= 194 && $ < 224) {
            if (z - b >= 6) {
              var s0 = parseInt(P[p(390)](b + 4, 2), 16);
              g += String[p(2606)](($ & 31) << 6 | s0 & 63);
            } else g += P.substr(b, 6);
            b += 6;
          } else if ($ >= 224) {
            if (z - b >= 9) {
              var d0 = parseInt(P[p(390)](b + 4, 2), 16), R0 = parseInt(P[p(390)](b + 7, 2), 16);
              g += String[p(2606)](($ & 15) << 12 | (d0 & 63) << 6 | R0 & 63);
            } else g += P.substr(b, 9);
            b += 9;
          } else g += P[p(390)](b, 3), b += 3;
        }
        return g;
      }
      function W(P, p) {
        var g = e;
        function b(z) {
          var $ = K, s0 = X(z);
          return s0[$(2069)](p[$(2144)]) ? s0 : z;
        }
        return P[g(1026)] && (P[g(1026)] = String(P.scheme)[g(2112)](p[g(2495)], b)[g(1991)]()[g(2112)](p.NOT_SCHEME, "")), P[g(2426)] !== void 0 && (P[g(2426)] = String(P.userinfo)[g(2112)](p[g(2495)], b).replace(p[g(1802)], G)[g(2112)](p[g(2495)], c)), P[g(671)] !== void 0 && (P.host = String(P[g(671)])[g(2112)](p[g(2495)], b)[g(1991)]()[g(2112)](p[g(1878)], G)[g(2112)](p[g(2495)], c)), P[g(1796)] !== void 0 && (P[g(1796)] = String(P[g(1796)])[g(2112)](p.PCT_ENCODED, b)[g(2112)](P[g(1026)] ? p[g(2460)] : p[g(2186)], G)[g(2112)](p[g(2495)], c)), P[g(2155)] !== void 0 && (P[g(2155)] = String(P.query).replace(p[g(2495)], b).replace(p[g(1939)], G)[g(2112)](p[g(2495)], c)), P[g(2514)] !== void 0 && (P[g(2514)] = String(P[g(2514)])[g(2112)](p.PCT_ENCODED, b).replace(p.NOT_FRAGMENT, G)[g(2112)](p[g(2495)], c)), P;
      }
      function Q(P) {
        var p = e;
        return P[p(2112)](/^0*(.*)/, "$1") || "0";
      }
      function n0(P, p) {
        var g = e, b = P[g(2069)](p[g(1964)]) || [], z = h(b, 2), $ = z[1];
        return $ ? $.split(".").map(Q)[g(2515)](".") : P;
      }
      function o0(P, p) {
        var g = e, b = P[g(2069)](p[g(471)]) || [], z = h(b, 3), $ = z[1], s0 = z[2];
        if ($) {
          for (var d0 = $[g(1991)]()[g(2183)]("::")[g(1976)](), R0 = h(d0, 2), j0 = R0[0], W0 = R0[1], k0 = W0 ? W0.split(":").map(Q) : [], A0 = j0[g(2183)](":")[g(632)](Q), Z0 = p[g(1964)].test(A0[A0.length - 1]), g0 = Z0 ? 7 : 8, $0 = A0[g(2021)] - g0, B0 = Array(g0), z0 = 0; z0 < g0; ++z0)
            B0[z0] = k0[z0] || A0[$0 + z0] || "";
          Z0 && (B0[g0 - 1] = n0(B0[g0 - 1], p));
          var Ee = B0.reduce(function(te, ue, de) {
            var fe = g;
            if (!ue || ue === "0") {
              var le = te[te[fe(2021)] - 1];
              le && le[fe(2602)] + le[fe(2021)] === de ? le[fe(2021)]++ : te[fe(2380)]({ index: de, length: 1 });
            }
            return te;
          }, []), oe = Ee[g(759)](function(te, ue) {
            var de = g;
            return ue[de(2021)] - te[de(2021)];
          })[0], ce = void 0;
          if (oe && oe[g(2021)] > 1) {
            var ze = B0[g(1813)](0, oe.index), Ce = B0[g(1813)](oe[g(2602)] + oe[g(2021)]);
            ce = ze[g(2515)](":") + "::" + Ce[g(2515)](":");
          } else ce = B0[g(2515)](":");
          return s0 && (ce += "%" + s0), ce;
        } else return P;
      }
      var _ = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, L0 = "".match(/(){0}/)[1] === void 0;
      function T0(P) {
        var p = e, g = arguments[p(2021)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = {}, z = g[p(358)] !== !1 ? v : l;
        g.reference === p(2511) && (P = (g[p(1026)] ? g[p(1026)] + ":" : "") + "//" + P);
        var $ = P.match(_);
        if ($) {
          L0 ? (b.scheme = $[1], b[p(2426)] = $[3], b[p(671)] = $[4], b[p(1339)] = parseInt($[5], 10), b[p(1796)] = $[6] || "", b[p(2155)] = $[7], b.fragment = $[8], isNaN(b.port) && (b[p(1339)] = $[5])) : (b[p(1026)] = $[1] || void 0, b[p(2426)] = P[p(831)]("@") !== -1 ? $[3] : void 0, b[p(671)] = P[p(831)]("//") !== -1 ? $[4] : void 0, b[p(1339)] = parseInt($[5], 10), b[p(1796)] = $[6] || "", b[p(2155)] = P[p(831)]("?") !== -1 ? $[7] : void 0, b[p(2514)] = P.indexOf("#") !== -1 ? $[8] : void 0, isNaN(b[p(1339)]) && (b[p(1339)] = P.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? $[4] : void 0)), b.host && (b[p(671)] = o0(n0(b.host, z), z)), b[p(1026)] === void 0 && b[p(2426)] === void 0 && b[p(671)] === void 0 && b.port === void 0 && !b.path && b[p(2155)] === void 0 ? b[p(493)] = "same-document" : b[p(1026)] === void 0 ? b.reference = "relative" : b[p(2514)] === void 0 ? b.reference = p(1204) : b.reference = p(2338), g[p(493)] && g[p(493)] !== "suffix" && g[p(493)] !== b[p(493)] && (b.error = b[p(503)] || "URI is not a " + g.reference + p(1192));
          var s0 = L[(g[p(1026)] || b[p(1026)] || "")[p(1991)]()];
          if (!g[p(841)] && (!s0 || !s0.unicodeSupport)) {
            if (b.host && (g.domainHost || s0 && s0[p(2580)])) try {
              b[p(671)] = q[p(1060)](b[p(671)].replace(z[p(2495)], X)[p(1991)]());
            } catch (d0) {
              b[p(503)] = b[p(503)] || p(1472) + d0;
            }
            W(b, l);
          } else W(b, z);
          s0 && s0[p(1325)] && s0[p(1325)](b, g);
        } else b[p(503)] = b[p(503)] || "URI can not be parsed.";
        return b;
      }
      function U0(P, p) {
        var g = e, b = p[g(358)] !== !1 ? v : l, z = [];
        return P.userinfo !== void 0 && (z.push(P[g(2426)]), z[g(2380)]("@")), P[g(671)] !== void 0 && z[g(2380)](o0(n0(String(P.host), b), b)[g(2112)](b.IPV6ADDRESS, function($, s0, d0) {
          return "[" + s0 + (d0 ? "%25" + d0 : "") + "]";
        })), (typeof P[g(1339)] === g(960) || typeof P[g(1339)] === g(2348)) && (z[g(2380)](":"), z[g(2380)](String(P[g(1339)]))), z[g(2021)] ? z[g(2515)]("") : void 0;
      }
      var w0 = /^\.\.?\//, G0 = /^\/\.(\/|$)/, ne = /^\/\.\.(\/|$)/, X0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function O0(P) {
        for (var p = e, g = []; P[p(2021)]; )
          if (P[p(2069)](w0)) P = P[p(2112)](w0, "");
          else if (P[p(2069)](G0)) P = P[p(2112)](G0, "/");
          else if (P[p(2069)](ne)) P = P[p(2112)](ne, "/"), g.pop();
          else if (P === "." || P === "..") P = "";
          else {
            var b = P[p(2069)](X0);
            if (b) {
              var z = b[0];
              P = P[p(1813)](z.length), g[p(2380)](z);
            } else throw new Error("Unexpected dot segment condition");
          }
        return g[p(2515)]("");
      }
      function V0(P) {
        var p = e, g = arguments[p(2021)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = g[p(358)] ? v : l, z = [], $ = L[(g[p(1026)] || P[p(1026)] || "")[p(1991)]()];
        if ($ && $[p(2612)] && $.serialize(P, g), P[p(671)] && !b.IPV6ADDRESS.test(P.host)) {
          if (g[p(2580)] || $ && $[p(2580)]) try {
            P[p(671)] = g[p(358)] ? q[p(1572)](P[p(671)]) : q[p(1060)](P[p(671)][p(2112)](b[p(2495)], X).toLowerCase());
          } catch (R0) {
            P[p(503)] = P[p(503)] || p(1534) + (g[p(358)] ? p(2071) : p(2540)) + p(2033) + R0;
          }
        }
        W(P, b), g.reference !== p(2511) && P.scheme && (z[p(2380)](P[p(1026)]), z[p(2380)](":"));
        var s0 = U0(P, g);
        if (s0 !== void 0 && (g.reference !== p(2511) && z.push("//"), z[p(2380)](s0), P[p(1796)] && P[p(1796)][p(453)](0) !== "/" && z[p(2380)]("/")), P[p(1796)] !== void 0) {
          var d0 = P[p(1796)];
          !g[p(526)] && (!$ || !$[p(526)]) && (d0 = O0(d0)), s0 === void 0 && (d0 = d0[p(2112)](/^\/\//, p(1940))), z[p(2380)](d0);
        }
        return P[p(2155)] !== void 0 && (z[p(2380)]("?"), z[p(2380)](P[p(2155)])), P[p(2514)] !== void 0 && (z[p(2380)]("#"), z[p(2380)](P[p(2514)])), z[p(2515)]("");
      }
      function _0(P, p) {
        var g = e, b = arguments[g(2021)] > 2 && arguments[2] !== void 0 ? arguments[2] : {}, z = arguments[3], $ = {};
        return !z && (P = T0(V0(P, b), b), p = T0(V0(p, b), b)), b = b || {}, !b[g(378)] && p.scheme ? ($[g(1026)] = p[g(1026)], $[g(2426)] = p[g(2426)], $[g(671)] = p[g(671)], $[g(1339)] = p[g(1339)], $[g(1796)] = O0(p[g(1796)] || ""), $[g(2155)] = p[g(2155)]) : (p[g(2426)] !== void 0 || p[g(671)] !== void 0 || p.port !== void 0 ? ($[g(2426)] = p[g(2426)], $[g(671)] = p.host, $.port = p.port, $.path = O0(p[g(1796)] || ""), $.query = p[g(2155)]) : (p.path ? (p[g(1796)][g(453)](0) === "/" ? $[g(1796)] = O0(p[g(1796)]) : ((P[g(2426)] !== void 0 || P[g(671)] !== void 0 || P[g(1339)] !== void 0) && !P[g(1796)] ? $.path = "/" + p[g(1796)] : P[g(1796)] ? $[g(1796)] = P.path[g(1813)](0, P[g(1796)].lastIndexOf("/") + 1) + p[g(1796)] : $[g(1796)] = p[g(1796)], $.path = O0($[g(1796)])), $[g(2155)] = p[g(2155)]) : ($[g(1796)] = P.path, p[g(2155)] !== void 0 ? $[g(2155)] = p.query : $[g(2155)] = P[g(2155)]), $[g(2426)] = P[g(2426)], $[g(671)] = P[g(671)], $[g(1339)] = P[g(1339)]), $[g(1026)] = P[g(1026)]), $[g(2514)] = p.fragment, $;
      }
      function Le(P, p, g) {
        var b = e, z = d({ scheme: b(1382) }, g);
        return V0(_0(T0(P, z), T0(p, z), z, !0), z);
      }
      function jx(P, p) {
        var g = e;
        return typeof P === g(2348) ? P = V0(T0(P, p), p) : o(P) === g(1923) && (P = T0(V0(P, p), p)), P;
      }
      function Mx(P, p, g) {
        var b = e;
        return typeof P === b(2348) ? P = V0(T0(P, g), g) : o(P) === b(1923) && (P = V0(P, g)), typeof p === b(2348) ? p = V0(T0(p, g), g) : o(p) === b(1923) && (p = V0(p, g)), P === p;
      }
      function bn(P, p) {
        var g = e;
        return P && P[g(1892)]().replace(!p || !p.iri ? l[g(774)] : v[g(774)], G);
      }
      function ge(P, p) {
        var g = e;
        return P && P.toString()[g(2112)](!p || !p[g(358)] ? l[g(2495)] : v.PCT_ENCODED, X);
      }
      var Be = { scheme: e(1254), domainHost: !0, parse: function(p, g) {
        var b = e;
        return !p.host && (p[b(503)] = p[b(503)] || b(1953)), p;
      }, serialize: function(p, g) {
        var b = e, z = String(p[b(1026)])[b(1991)]() === "https";
        return (p.port === (z ? 443 : 80) || p[b(1339)] === "") && (p.port = void 0), !p[b(1796)] && (p[b(1796)] = "/"), p;
      } }, dr = { scheme: "https", domainHost: Be.domainHost, parse: Be[e(1325)], serialize: Be[e(2612)] };
      function fr(P) {
        var p = e;
        return typeof P[p(1779)] === p(2251) ? P.secure : String(P[p(1026)])[p(1991)]() === p(520);
      }
      var Ke = { scheme: "ws", domainHost: !0, parse: function(p, g) {
        var b = e, z = p;
        return z[b(1779)] = fr(z), z.resourceName = (z[b(1796)] || "/") + (z[b(2155)] ? "?" + z.query : ""), z[b(1796)] = void 0, z.query = void 0, z;
      }, serialize: function(p, g) {
        var b = e;
        if ((p[b(1339)] === (fr(p) ? 443 : 80) || p[b(1339)] === "") && (p.port = void 0), typeof p[b(1779)] == "boolean" && (p.scheme = p.secure ? b(520) : "ws", p.secure = void 0), p[b(1839)]) {
          var z = p[b(1839)][b(2183)]("?"), $ = h(z, 2), s0 = $[0], d0 = $[1];
          p[b(1796)] = s0 && s0 !== "/" ? s0 : void 0, p[b(2155)] = d0, p[b(1839)] = void 0;
        }
        return p.fragment = void 0, p;
      } }, lr = { scheme: e(520), domainHost: Ke.domainHost, parse: Ke[e(1325)], serialize: Ke[e(2612)] }, wn = {}, hr = e(546) + "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", ie = e(921), Sn = n(n(e(1364) + ie + "%" + ie + ie + "%" + ie + ie) + "|" + n("%[89A-Fa-f]" + ie + "%" + ie + ie) + "|" + n("%" + ie + ie)), kn = e(2188), En = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", In = r(En, e(2086)), Pn = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", Rn = new RegExp(hr, "g"), $e = new RegExp(Sn, "g"), Cn = new RegExp(r(e(313), kn, "[\\.]", e(475), In), "g"), pr = new RegExp(r(e(313), hr, Pn), "g"), Fn = pr;
      function Lx(P) {
        var p = e, g = X(P);
        return g[p(2069)](Rn) ? g : P;
      }
      var mr = { scheme: "mailto", parse: function(p, g) {
        var b = e, z = p, $ = z.to = z[b(1796)] ? z[b(1796)][b(2183)](",") : [];
        if (z.path = void 0, z[b(2155)]) {
          for (var s0 = !1, d0 = {}, R0 = z[b(2155)].split("&"), j0 = 0, W0 = R0[b(2021)]; j0 < W0; ++j0) {
            var k0 = R0[j0].split("=");
            switch (k0[0]) {
              case "to":
                for (var A0 = k0[1][b(2183)](","), Z0 = 0, g0 = A0[b(2021)]; Z0 < g0; ++Z0)
                  $[b(2380)](A0[Z0]);
                break;
              case "subject":
                z.subject = ge(k0[1], g);
                break;
              case b(874):
                z.body = ge(k0[1], g);
                break;
              default:
                s0 = !0, d0[ge(k0[0], g)] = ge(k0[1], g);
                break;
            }
          }
          s0 && (z.headers = d0);
        }
        z[b(2155)] = void 0;
        for (var $0 = 0, B0 = $[b(2021)]; $0 < B0; ++$0) {
          var z0 = $[$0].split("@");
          if (z0[0] = ge(z0[0]), g.unicodeSupport) z0[1] = ge(z0[1], g)[b(1991)]();
          else try {
            z0[1] = q.toASCII(ge(z0[1], g).toLowerCase());
          } catch (Ee) {
            z[b(503)] = z.error || "Email address's domain name can not be converted to ASCII via punycode: " + Ee;
          }
          $[$0] = z0[b(2515)]("@");
        }
        return z;
      }, serialize: function(p, g) {
        var b = e, z = p, $ = u(p.to);
        if ($) {
          for (var s0 = 0, d0 = $[b(2021)]; s0 < d0; ++s0) {
            var R0 = String($[s0]), j0 = R0[b(1231)]("@"), W0 = R0[b(1813)](0, j0)[b(2112)]($e, Lx)[b(2112)]($e, c)[b(2112)](Cn, G), k0 = R0[b(1813)](j0 + 1);
            try {
              k0 = g[b(358)] ? q[b(1572)](k0) : q.toASCII(ge(k0, g)[b(1991)]());
            } catch ($0) {
              z.error = z[b(503)] || b(1958) + (g[b(358)] ? b(2071) : "ASCII") + b(2033) + $0;
            }
            $[s0] = W0 + "@" + k0;
          }
          z.path = $[b(2515)](",");
        }
        var A0 = p[b(2626)] = p.headers || {};
        p[b(1570)] && (A0[b(1570)] = p.subject), p[b(874)] && (A0[b(874)] = p.body);
        var Z0 = [];
        for (var g0 in A0)
          A0[g0] !== wn[g0] && Z0[b(2380)](g0.replace($e, Lx).replace($e, c)[b(2112)](pr, G) + "=" + A0[g0][b(2112)]($e, Lx)[b(2112)]($e, c).replace(Fn, G));
        return Z0[b(2021)] && (z.query = Z0[b(2515)]("&")), z;
      } }, Nn = /^([^\:]+)\:(.*)/, vr = { scheme: e(1587), parse: function(p, g) {
        var b = e, z = p.path && p[b(1796)][b(2069)](Nn), $ = p;
        if (z) {
          var s0 = g[b(1026)] || $[b(1026)] || b(1587), d0 = z[1][b(1991)](), R0 = z[2], j0 = s0 + ":" + (g[b(1537)] || d0), W0 = L[j0];
          $[b(1537)] = d0, $.nss = R0, $[b(1796)] = void 0, W0 && ($ = W0[b(1325)]($, g));
        } else $[b(503)] = $[b(503)] || "URN can not be parsed.";
        return $;
      }, serialize: function(p, g) {
        var b = e, z = g[b(1026)] || p[b(1026)] || b(1587), $ = p.nid, s0 = z + ":" + (g.nid || $), d0 = L[s0];
        d0 && (p = d0[b(2612)](p, g));
        var R0 = p, j0 = p[b(1474)];
        return R0[b(1796)] = ($ || g[b(1537)]) + ":" + j0, R0;
      } }, qn = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, gr = { scheme: "urn:uuid", parse: function(p, g) {
        var b = e, z = p;
        return z[b(616)] = z[b(1474)], z[b(1474)] = void 0, !g[b(378)] && (!z[b(616)] || !z[b(616)][b(2069)](qn)) && (z.error = z.error || "UUID is not valid."), z;
      }, serialize: function(p, g) {
        var b = e, z = p;
        return z[b(1474)] = (p[b(616)] || "")[b(1991)](), z;
      } };
      L[Be.scheme] = Be, L[dr[e(1026)]] = dr, L[Ke[e(1026)]] = Ke, L[lr[e(1026)]] = lr, L[mr[e(1026)]] = mr, L[vr[e(1026)]] = vr, L[gr.scheme] = gr, a[e(1916)] = L, a[e(913)] = G, a[e(896)] = X, a[e(1325)] = T0, a.removeDotSegments = O0, a[e(2612)] = V0, a[e(1711)] = _0, a[e(1890)] = Le, a[e(2445)] = jx, a[e(1946)] = Mx, a[e(1048)] = bn, a[e(2642)] = ge, Object[e(1907)](a, e(951), { value: !0 });
    });
  }(Ye, Ye[i(1175)])), Ye[i(1175)];
}
var Kx, ta;
function or() {
  return ta || (ta = 1, Kx = function i(x, t) {
    var a = K;
    if (x === t) return !0;
    if (x && t && typeof x == a(1923) && typeof t == "object") {
      if (x[a(599)] !== t[a(599)]) return !1;
      var e, r, n;
      if (Array.isArray(x)) {
        if (e = x[a(2021)], e != t[a(2021)]) return !1;
        for (r = e; r-- !== 0; ) if (!i(x[r], t[r])) return !1;
        return !0;
      }
      if (x[a(599)] === RegExp) return x[a(1399)] === t[a(1399)] && x[a(907)] === t[a(907)];
      if (x[a(2653)] !== Object.prototype.valueOf) return x.valueOf() === t[a(2653)]();
      if (x.toString !== Object[a(2180)][a(1892)]) return x[a(1892)]() === t[a(1892)]();
      if (n = Object[a(1040)](x), e = n.length, e !== Object[a(1040)](t)[a(2021)]) return !1;
      for (r = e; r-- !== 0; ) if (!Object[a(2180)].hasOwnProperty.call(t, n[r])) return !1;
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
function L2() {
  return ra || (ra = 1, Jx = function(x) {
    for (var t = K, a = 0, e = x[t(2021)], r = 0, n; r < e; )
      a++, n = x[t(2184)](r++), n >= 55296 && n <= 56319 && r < e && (n = x.charCodeAt(r), (n & 64512) == 56320 && r++);
    return a;
  }), Jx;
}
var Gx, aa;
function Ze() {
  var i = s;
  if (aa) return Gx;
  aa = 1, Gx = { copy: x, checkDataType: t, checkDataTypes: a, coerceToTypes: r, toHash: n, getProperty: u, escapeQuotes: d, equal: or(), ucs2length: L2(), varOccurences: f, varReplace: l, schemaHasRules: v, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: y, getPathExpr: w, getPath: E, getData: R, unescapeFragment: N, unescapeJsonPointer: M, escapeFragment: j, escapeJsonPointer: D };
  function x(F, C) {
    C = C || {};
    for (var H in F) C[H] = F[H];
    return C;
  }
  function t(F, C, H, U) {
    var V = K, J = U ? V(461) : " === ", c0 = V(U ? 388 : 1760), u0 = U ? "!" : "", l0 = U ? "" : "!";
    switch (F) {
      case V(1382):
        return C + J + V(1382);
      case V(1315):
        return u0 + V(2603) + C + ")";
      case V(1923):
        return "(" + u0 + C + c0 + V(361) + C + J + V(1554) + c0 + l0 + V(2603) + C + "))";
      case V(893):
        return V(989) + C + J + '"number"' + c0 + l0 + "(" + C + V(325) + c0 + C + J + C + (H ? c0 + u0 + V(2521) + C + ")" : "") + ")";
      case V(960):
        return V(989) + C + J + '"' + F + '"' + (H ? c0 + u0 + V(2521) + C + ")" : "") + ")";
      default:
        return V(361) + C + J + '"' + F + '"';
    }
  }
  function a(F, C, H) {
    var U = K;
    switch (F.length) {
      case 1:
        return t(F[0], C, H, !0);
      default:
        var V = "", J = n(F);
        J[U(1315)] && J.object && (V = J.null ? "(" : "(!" + C + " || ", V += U(361) + C + ' !== "object")', delete J[U(1382)], delete J[U(1315)], delete J[U(1923)]), J.number && delete J[U(893)];
        for (var c0 in J) V += (V ? U(1760) : "") + t(c0, C, H, !0);
        return V;
    }
  }
  var e = n(["string", i(960), i(893), i(2251), i(1382)]);
  function r(F, C) {
    var H = i;
    if (Array[H(1435)](C)) {
      for (var U = [], V = 0; V < C[H(2021)]; V++) {
        var J = C[V];
        (e[J] || F === H(1315) && J === H(1315)) && (U[U[H(2021)]] = J);
      }
      if (U[H(2021)]) return U;
    } else {
      if (e[C]) return [C];
      if (F === H(1315) && C === H(1315)) return [H(1315)];
    }
  }
  function n(F) {
    for (var C = i, H = {}, U = 0; U < F[C(2021)]; U++) H[F[U]] = !0;
    return H;
  }
  var o = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(F) {
    var C = i;
    return typeof F == C(960) ? "[" + F + "]" : o[C(856)](F) ? "." + F : "['" + d(F) + "']";
  }
  function d(F) {
    var C = i;
    return F[C(2112)](c, C(2592))[C(2112)](/\n/g, "\\n")[C(2112)](/\r/g, "\\r").replace(/\f/g, "\\f")[C(2112)](/\t/g, "\\t");
  }
  function f(F, C) {
    var H = i;
    C += H(2203);
    var U = F.match(new RegExp(C, "g"));
    return U ? U[H(2021)] : 0;
  }
  function l(F, C, H) {
    var U = i;
    return C += "([^0-9])", H = H[U(2112)](/\$/g, U(1211)), F[U(2112)](new RegExp(C, "g"), H + "$1");
  }
  function v(F, C) {
    if (typeof F == "boolean") return !F;
    for (var H in F) if (C[H]) return !0;
  }
  function h(F, C, H) {
    var U = i;
    if (typeof F == U(2251)) return !F && H != U(518);
    for (var V in F) if (V != H && C[V]) return !0;
  }
  function m(F, C) {
    var H = i;
    if (typeof F != H(2251)) {
      for (var U in F) if (!C[U]) return U;
    }
  }
  function y(F) {
    return "'" + d(F) + "'";
  }
  function w(F, C, H, U) {
    var V = i, J = H ? V(2465) + C + (U ? "" : V(777)) : U ? V(1146) + C + " + ']'" : "'[\\'' + " + C + V(1501);
    return k(F, J);
  }
  function E(F, C, H) {
    var U = y(H ? "/" + D(C) : u(C));
    return k(F, U);
  }
  var O = /^\/(?:[^~]|~0|~1)*$/, T = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function R(F, C, H) {
    var U = i, V, J, c0, u0;
    if (F === "") return U(2414);
    if (F[0] == "/") {
      if (!O.test(F)) throw new Error(U(2442) + F);
      J = F, c0 = U(2414);
    } else {
      if (u0 = F.match(T), !u0) throw new Error(U(2442) + F);
      if (V = +u0[1], J = u0[2], J == "#") {
        if (V >= C) throw new Error(U(2170) + V + U(1980) + C);
        return H[C - V];
      }
      if (V > C) throw new Error(U(930) + V + U(1980) + C);
      if (c0 = U(1073) + (C - V || ""), !J) return c0;
    }
    for (var l0 = c0, i0 = J.split("/"), f0 = 0; f0 < i0[U(2021)]; f0++) {
      var S0 = i0[f0];
      S0 && (c0 += u(M(S0)), l0 += U(1760) + c0);
    }
    return l0;
  }
  function k(F, C) {
    var H = i;
    return F == '""' ? C : (F + " + " + C)[H(2112)](/([^\\])' \+ '/g, "$1");
  }
  function N(F) {
    return M(decodeURIComponent(F));
  }
  function j(F) {
    return encodeURIComponent(D(F));
  }
  function D(F) {
    var C = i;
    return F[C(2112)](/~/g, "~0")[C(2112)](/\//g, "~1");
  }
  function M(F) {
    var C = i;
    return F[C(2112)](/~1/g, "/")[C(2112)](/~0/g, "~");
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
    var a = K;
    i[a(1753)](t, this);
  }
  return Qx;
}
var Xx = { exports: {} }, na;
function $2() {
  var i = s;
  if (na) return Xx[i(1175)];
  na = 1;
  var x = Xx[i(1175)] = function(e, r, n) {
    var o = i;
    typeof r == o(1853) && (n = r, r = {}), n = r.cb || n;
    var c = typeof n == o(1853) ? n : n.pre || function() {
    }, u = n.post || function() {
    };
    t(r, c, u, e, "", e);
  };
  x[i(2605)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x.arrayKeywords = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[i(1319)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[i(439)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, r, n, o, c, u, d, f, l, v) {
    var h = i;
    if (o && typeof o == "object" && !Array[h(1435)](o)) {
      r(o, c, u, d, f, l, v);
      for (var m in o) {
        var y = o[m];
        if (Array[h(1435)](y)) {
          if (m in x[h(1699)])
            for (var w = 0; w < y[h(2021)]; w++) t(e, r, n, y[w], c + "/" + m + "/" + w, u, c, m, o, w);
        } else if (m in x[h(1319)]) {
          if (y && typeof y == h(1923))
            for (var E in y) t(e, r, n, y[E], c + "/" + m + "/" + a(E), u, c, m, o, E);
        } else (m in x[h(2605)] || e.allKeys && !(m in x[h(439)])) && t(e, r, n, y, c + "/" + m, u, c, m, o);
      }
      n(o, c, u, d, f, l, v);
    }
  }
  function a(e) {
    var r = i;
    return e[r(2112)](/~/g, "~0")[r(2112)](/\//g, "~1");
  }
  return Xx[i(1175)];
}
var Yx, ia;
function cr() {
  var i = s;
  if (ia) return Yx;
  ia = 1;
  var x = M2(), t = or(), a = Ze(), e = ln(), r = $2();
  Yx = n, n.normalizeId = E, n.fullPath = m, n[i(1965)] = O, n[i(2351)] = T, n[i(2647)] = l, n[i(1174)] = o;
  function n(R, k, N) {
    var j = i, D = this[j(1900)][N];
    if (typeof D == j(2348))
      if (this[j(1900)][D]) D = this[j(1900)][D];
      else return n[j(1547)](this, R, k, D);
    if (D = D || this[j(302)][N], D instanceof e) return l(D[j(1174)], this[j(2623)][j(1392)]) ? D[j(1174)] : D[j(328)] || this[j(1585)](D);
    var M = o[j(1547)](this, k, N), F, C, H;
    return M && (F = M[j(1174)], k = M[j(1882)], H = M.baseId), F instanceof e ? C = F.validate || R[j(1547)](this, F.schema, k, void 0, H) : F !== void 0 && (C = l(F, this._opts.inlineRefs) ? F : R[j(1547)](this, F, k, void 0, H)), C;
  }
  function o(R, k) {
    var N = i, j = x[N(1325)](k), D = y(j), M = m(this[N(458)](R.schema));
    if (Object[N(1040)](R[N(1174)])[N(2021)] === 0 || D !== M) {
      var F = E(D), C = this._refs[F];
      if (typeof C == "string") return c[N(1547)](this, R, C, j);
      if (C instanceof e)
        C[N(328)] || this[N(1585)](C), R = C;
      else if (C = this._schemas[F], C instanceof e) {
        if (C[N(328)] || this._compile(C), F == E(k)) return { schema: C, root: R, baseId: M };
        R = C;
      } else return;
      if (!R[N(1174)]) return;
      M = m(this[N(458)](R[N(1174)]));
    }
    return d.call(this, j, M, R[N(1174)], R);
  }
  function c(R, k, N) {
    var j = i, D = o[j(1547)](this, R, k);
    if (D) {
      var M = D[j(1174)], F = D[j(1880)];
      R = D[j(1882)];
      var C = this._getId(M);
      return C && (F = O(F, C)), d[j(1547)](this, N, F, M, R);
    }
  }
  var u = a[i(626)]([i(1696), i(969), i(1053), i(2372), i(877)]);
  function d(R, k, N, j) {
    var D = i;
    if (R.fragment = R[D(2514)] || "", R[D(2514)][D(1813)](0, 1) == "/") {
      for (var M = R[D(2514)].split("/"), F = 1; F < M[D(2021)]; F++) {
        var C = M[F];
        if (C) {
          if (C = a[D(2192)](C), N = N[C], N === void 0) break;
          var H;
          if (!u[C] && (H = this[D(458)](N), H && (k = O(k, H)), N[D(2015)])) {
            var U = O(k, N[D(2015)]), V = o[D(1547)](this, j, U);
            V && (N = V[D(1174)], j = V[D(1882)], k = V[D(1880)]);
          }
        }
      }
      if (N !== void 0 && N !== j.schema) return { schema: N, root: j, baseId: k };
    }
  }
  var f = a[i(626)]([i(338), "format", i(2072), i(2277), i(549), i(2225), i(1901), "maxItems", i(1457), i(981), i(1848), i(1552), i(2246), "required", i(1053)]);
  function l(R, k) {
    if (k === !1) return !1;
    if (k === void 0 || k === !0) return v(R);
    if (k) return h(R) <= k;
  }
  function v(R) {
    var k = i, N;
    if (Array[k(1435)](R)) {
      for (var j = 0; j < R[k(2021)]; j++)
        if (N = R[j], typeof N == k(1923) && !v(N)) return !1;
    } else for (var D in R)
      if (D == k(2015) || (N = R[D], typeof N == k(1923) && !v(N))) return !1;
    return !0;
  }
  function h(R) {
    var k = i, N = 0, j;
    if (Array[k(1435)](R)) {
      for (var D = 0; D < R.length; D++)
        if (j = R[D], typeof j == k(1923) && (N += h(j)), N == 1 / 0) return 1 / 0;
    } else for (var M in R) {
      if (M == k(2015)) return 1 / 0;
      if (f[M]) N++;
      else if (j = R[M], typeof j == k(1923) && (N += h(j) + 1), N == 1 / 0) return 1 / 0;
    }
    return N;
  }
  function m(R, k) {
    k !== !1 && (R = E(R));
    var N = x.parse(R);
    return y(N);
  }
  function y(R) {
    return x.serialize(R).split("#")[0] + "#";
  }
  var w = /#\/?$/;
  function E(R) {
    var k = i;
    return R ? R[k(2112)](w, "") : "";
  }
  function O(R, k) {
    var N = i;
    return k = E(k), x[N(1890)](R, k);
  }
  function T(R) {
    var k = i, N = E(this[k(458)](R)), j = { "": N }, D = { "": m(N, !1) }, M = {}, F = this;
    return r(R, { allKeys: !0 }, function(C, H, U, V, J, c0, u0) {
      var l0 = k;
      if (H !== "") {
        var i0 = F._getId(C), f0 = j[V], S0 = D[V] + "/" + J;
        if (u0 !== void 0 && (S0 += "/" + (typeof u0 == l0(960) ? u0 : a[l0(1170)](u0))), typeof i0 == l0(2348)) {
          i0 = f0 = E(f0 ? x.resolve(f0, i0) : i0);
          var y0 = F[l0(1900)][i0];
          if (typeof y0 == l0(2348) && (y0 = F._refs[y0]), y0 && y0[l0(1174)]) {
            if (!t(C, y0.schema)) throw new Error('id "' + i0 + l0(1185));
          } else if (i0 != E(S0))
            if (i0[0] == "#") {
              if (M[i0] && !t(C, M[i0])) throw new Error(l0(2341) + i0 + '" resolves to more than one schema');
              M[i0] = C;
            } else F[l0(1900)][i0] = S0;
        }
        j[H] = f0, D[H] = S0;
      }
    }), M;
  }
  return Yx;
}
var _x, oa;
function ur() {
  if (oa) return _x;
  oa = 1;
  var i = cr();
  _x = { Validation: a(x), MissingRef: a(t) };
  function x(e) {
    var r = K;
    this[r(2089)] = r(1756), this.errors = e, this[r(1664)] = this[r(391)] = !0;
  }
  t.message = function(e, r) {
    var n = K;
    return n(1282) + r + n(2342) + e;
  };
  function t(e, r, n) {
    var o = K;
    this.message = n || t[o(2089)](e, r), this.missingRef = i.url(e, r), this[o(288)] = i[o(1691)](i[o(1206)](this.missingRef));
  }
  function a(e) {
    var r = K;
    return e[r(2180)] = Object.create(Error[r(2180)]), e[r(2180)][r(599)] = e, e;
  }
  return _x;
}
var et, ca;
function hn() {
  return ca || (ca = 1, et = function(i, x) {
    var t = K;
    x || (x = {}), typeof x === t(1853) && (x = { cmp: x });
    var a = typeof x.cycles == "boolean" ? x[t(952)] : !1, e = x[t(627)] && /* @__PURE__ */ function(n) {
      return function(o) {
        return function(c, u) {
          var d = { key: c, value: o[c] }, f = { key: u, value: o[u] };
          return n(d, f);
        };
      };
    }(x[t(627)]), r = [];
    return function n(o) {
      var c = t;
      if (o && o[c(2393)] && typeof o[c(2393)] === c(1853) && (o = o[c(2393)]()), o !== void 0) {
        if (typeof o == c(960)) return isFinite(o) ? "" + o : c(1382);
        if (typeof o !== c(1923)) return JSON.stringify(o);
        var u, d;
        if (Array[c(1435)](o)) {
          for (d = "[", u = 0; u < o[c(2021)]; u++)
            u && (d += ","), d += n(o[u]) || c(1382);
          return d + "]";
        }
        if (o === null) return c(1382);
        if (r[c(831)](o) !== -1) {
          if (a) return JSON[c(990)]("__cycle__");
          throw new TypeError(c(433));
        }
        var f = r.push(o) - 1, l = Object[c(1040)](o).sort(e && e(o));
        for (d = "", u = 0; u < l[c(2021)]; u++) {
          var v = l[u], h = n(o[v]);
          h && (d && (d += ","), d += JSON[c(990)](v) + ":" + h);
        }
        return r.splice(f, 1), "{" + d + "}";
      }
    }(i);
  }), et;
}
var xt, ua;
function pn() {
  return ua || (ua = 1, xt = function(x, t, a) {
    var e = K, r = "", n = x.schema.$async === !0, o = x[e(2643)][e(2181)](x[e(1174)], x[e(2057)][e(1897)], e(2015)), c = x[e(2049)][e(458)](x.schema);
    if (x[e(1948)][e(484)]) {
      var u = x.util[e(1772)](x[e(1174)], x[e(2057)][e(2605)]);
      if (u) {
        var d = e(2353) + u;
        if (x[e(1948)][e(484)] === "log") x.logger[e(1797)](d);
        else throw new Error(d);
      }
    }
    if (x[e(1933)] && (r += " var validate = ", n && (x[e(2572)] = !0, r += "async "), r += e(1778), c && (x[e(1948)].sourceCode || x[e(1948)][e(2422)]) && (r += " " + (e(2487) + c + e(1644)) + " ")), typeof x[e(1174)] == e(2251) || !(o || x[e(1174)][e(2015)])) {
      var t = "false schema", f = x.level, l = x[e(1675)], v = x[e(1174)][t], h = x.schemaPath + x.util.getProperty(t), m = x[e(298)] + "/" + t, k = !x[e(1948)][e(2168)], D, y = e(1073) + (l || ""), R = e(2538) + f;
      if (x[e(1174)] === !1) {
        x[e(1933)] ? k = !0 : r += e(682) + R + e(2364);
        var w = w || [];
        w[e(2380)](r), r = "", x[e(1598)] !== !1 ? (r += e(1264) + (D || "false schema") + "' , dataPath: (dataPath || '') + " + x[e(1952)] + e(511) + x[e(2643)][e(2451)](m) + e(2326), x.opts[e(1057)] !== !1 && (r += " , message: 'boolean schema is false' "), x[e(1948)].verbose && (r += e(1776) + x[e(1350)] + e(617) + y + " "), r += e(2062)) : r += e(2152);
        var E = r;
        r = w[e(932)](), !x.compositeRule && k ? x[e(2572)] ? r += " throw new ValidationError([" + E + e(1719) : r += e(2550) + E + e(973) : r += e(2662) + E + e(1826);
      } else x[e(1933)] ? n ? r += " return data; " : r += e(1795) : r += e(682) + R + e(1844);
      return x[e(1933)] && (r += e(303)), r;
    }
    if (x[e(1933)]) {
      var O = x.isTop, f = x.level = 0, l = x[e(1675)] = 0, y = e(1073);
      if (x[e(2474)] = x.resolve.fullPath(x[e(2049)][e(458)](x.root[e(1174)])), x[e(1880)] = x[e(1880)] || x.rootId, delete x[e(1933)], x.dataPathArr = [""], x.schema[e(2641)] !== void 0 && x[e(1948)][e(504)] && x.opts.strictDefaults) {
        var T = e(2584);
        if (x[e(1948)][e(2657)] === e(1133)) x[e(1238)].warn(T);
        else throw new Error(T);
      }
      r += e(550), r += e(1498), r += e(1801);
    } else {
      var f = x[e(1624)], l = x[e(1675)], y = e(1073) + (l || "");
      if (c && (x.baseId = x.resolve[e(1965)](x[e(1880)], c)), n && !x[e(2572)]) throw new Error(e(1017));
      r += e(1761) + f + e(1100);
    }
    var R = e(2538) + f, k = !x[e(1948)].allErrors, N = "", j = "", D, M = x[e(1174)][e(338)], F = Array[e(1435)](M);
    if (M && x[e(1948)][e(1977)] && x[e(1174)][e(1977)] === !0 && (F ? M.indexOf(e(1382)) == -1 && (M = M[e(1355)](e(1382))) : M != e(1382) && (M = [M, "null"], F = !0)), F && M[e(2021)] == 1 && (M = M[0], F = !1), x[e(1174)].$ref && o) {
      if (x[e(1948)].extendRefs == e(2221)) throw new Error(e(1475) + x[e(298)] + e(1982));
      x[e(1948)][e(716)] !== !0 && (o = !1, x.logger.warn('$ref: keywords ignored in schema at path "' + x[e(298)] + '"'));
    }
    if (x[e(1174)][e(2297)] && x[e(1948)].$comment && (r += " " + x[e(2057)][e(1897)][e(2297)][e(733)](x, e(2297))), M) {
      if (x[e(1948)][e(744)]) var C = x[e(2643)][e(449)](x[e(1948)][e(744)], M);
      var H = x[e(2057)][e(2215)][M];
      if (C || F || H === !0 || H && !w0(H)) {
        var h = x[e(1350)] + e(944), m = x[e(298)] + "/type", h = x[e(1350)] + ".type", m = x[e(298)] + e(547), U = e(F ? 2415 : 1824);
        if (r += e(1138) + x.util[U](M, y, x[e(1948)][e(1178)], !0) + e(1597), C) {
          var V = "dataType" + f, J = e(1468) + f;
          r += e(682) + V + e(2660) + y + e(1510) + J + e(2369), x.opts.coerceTypes == e(1315) && (r += e(1138) + V + e(741) + y + e(2668) + y + e(2220) + y + e(729) + y + e(1406) + V + " = typeof " + y + "; if (" + x.util.checkDataType(x[e(1174)][e(338)], y, x[e(1948)].strictNumbers) + ") " + J + e(729) + y + e(664)), r += e(1138) + J + e(1471);
          var c0 = C;
          if (c0)
            for (var u0, l0 = -1, i0 = c0[e(2021)] - 1; l0 < i0; )
              u0 = c0[l0 += 1], u0 == e(2348) ? r += e(1452) + V + e(1876) + V + e(1062) + J + e(2306) + y + e(2016) + y + e(637) + J + e(2594) : u0 == "number" || u0 == e(893) ? (r += e(1452) + V + e(1152) + y + e(678) + V + " == 'string' && " + y + e(1760) + y + e(2149) + y + " ", u0 == "integer" && (r += " && !(" + y + e(325)), r += ")) " + J + e(991) + y + "; ") : u0 == e(2251) ? r += " else if (" + y + e(1773) + y + " === 0 || " + y + e(637) + J + e(316) + y + " === 'true' || " + y + e(2651) + J + e(1844) : u0 == e(1382) ? r += e(1452) + y + e(1187) + y + e(1128) + y + e(835) + J + " = null; " : x[e(1948)][e(744)] == e(1315) && u0 == e(1315) && (r += " else if (" + V + e(1262) + V + " == 'number' || " + V + e(1152) + y + e(315) + J + e(701) + y + e(692));
          r += " else {   ";
          var w = w || [];
          w.push(r), r = "", x.createErrors !== !1 ? (r += e(1264) + (D || "type") + e(953) + x[e(1952)] + e(511) + x.util[e(2451)](m) + " , params: { type: '", F ? r += "" + M[e(2515)](",") : r += "" + M, r += e(1687), x[e(1948)].messages !== !1 && (r += e(1221), F ? r += "" + M[e(2515)](",") : r += "" + M, r += "' "), x[e(1948)][e(1153)] && (r += " , schema: validate.schema" + h + e(2411) + x[e(1350)] + e(617) + y + " "), r += e(2062)) : r += e(2152);
          var E = r;
          r = w.pop(), !x.compositeRule && k ? x.async ? r += e(1883) + E + "]); " : r += e(2550) + E + e(973) : r += e(2662) + E + e(1826), r += e(2042) + J + e(2510);
          var f0 = l ? e(1073) + (l - 1 || "") : e(984), S0 = l ? x[e(2197)][l] : "parentDataProperty";
          r += " " + y + e(729) + J + "; ", !l && (r += e(395) + f0 + " !== undefined)"), r += " " + f0 + "[" + S0 + "] = " + J + e(664);
        } else {
          var w = w || [];
          w.push(r), r = "", x[e(1598)] !== !1 ? (r += e(1264) + (D || "type") + e(953) + x[e(1952)] + e(511) + x.util[e(2451)](m) + e(1825), F ? r += "" + M[e(2515)](",") : r += "" + M, r += e(1687), x[e(1948)].messages !== !1 && (r += e(1221), F ? r += "" + M[e(2515)](",") : r += "" + M, r += "' "), x[e(1948)][e(1153)] && (r += e(1150) + h + " , parentSchema: validate.schema" + x[e(1350)] + e(617) + y + " "), r += " } ") : r += e(2152);
          var E = r;
          r = w[e(932)](), !x[e(2416)] && k ? x.async ? r += e(1883) + E + "]); " : r += e(2550) + E + e(973) : r += e(2662) + E + e(1826);
        }
        r += e(2062);
      }
    }
    if (x[e(1174)].$ref && !o) r += " " + x.RULES.all[e(2015)][e(733)](x, e(2015)) + " ", k && (r += " } if (errors === ", O ? r += "0" : r += "errs_" + f, r += e(1597), j += "}");
    else {
      var y0 = x.RULES;
      if (y0) {
        for (var H, M0 = -1, P0 = y0[e(2021)] - 1; M0 < P0; )
          if (H = y0[M0 += 1], w0(H)) {
            if (H.type && (r += e(1138) + x.util[e(1824)](H.type, y, x.opts[e(1178)]) + e(1597)), x[e(1948)][e(504)]) {
              if (H[e(338)] == "object" && x.schema[e(1696)]) {
                var v = x[e(1174)][e(1696)], Q0 = Object[e(1040)](v), A = Q0;
                if (A)
                  for (var q, L = -1, G = A[e(2021)] - 1; L < G; ) {
                    q = A[L += 1];
                    var X = v[q];
                    if (X[e(2641)] !== void 0) {
                      var W = y + x[e(2643)][e(2337)](q);
                      if (x[e(2416)]) {
                        if (x[e(1948)][e(2657)]) {
                          var T = e(591) + W;
                          if (x.opts[e(2657)] === e(1133)) x[e(1238)][e(1797)](T);
                          else throw new Error(T);
                        }
                      } else r += " if (" + W + e(2455), x[e(1948)].useDefaults == e(636) && (r += e(388) + W + " === null || " + W + e(1518)), r += e(680) + W + e(729), x[e(1948)][e(504)] == "shared" ? r += " " + x.useDefault(X[e(2641)]) + " " : r += " " + JSON[e(990)](X.default) + " ", r += "; ";
                    }
                  }
              } else if (H[e(338)] == "array" && Array[e(1435)](x.schema[e(2187)])) {
                var Q = x[e(1174)].items;
                if (Q) {
                  for (var X, l0 = -1, n0 = Q[e(2021)] - 1; l0 < n0; )
                    if (X = Q[l0 += 1], X.default !== void 0) {
                      var W = y + "[" + l0 + "]";
                      if (x[e(2416)]) {
                        if (x[e(1948)][e(2657)]) {
                          var T = e(591) + W;
                          if (x.opts[e(2657)] === e(1133)) x[e(1238)].warn(T);
                          else throw new Error(T);
                        }
                      } else r += e(1138) + W + e(2455), x.opts.useDefaults == e(636) && (r += e(388) + W + e(1836) + W + e(1518)), r += " ) " + W + e(729), x.opts.useDefaults == e(1420) ? r += " " + x[e(1316)](X.default) + " " : r += " " + JSON[e(990)](X[e(2641)]) + " ", r += "; ";
                    }
                }
              }
            }
            var o0 = H[e(1643)];
            if (o0) {
              for (var _, L0 = -1, T0 = o0.length - 1; L0 < T0; )
                if (_ = o0[L0 += 1], G0(_)) {
                  var U0 = _.code(x, _[e(1919)], H[e(338)]);
                  U0 && (r += " " + U0 + " ", k && (N += "}"));
                }
            }
            if (k && (r += " " + N + " ", N = ""), H[e(338)] && (r += e(2062), M && M === H.type && !C)) {
              r += " else { ";
              var h = x.schemaPath + e(944), m = x.errSchemaPath + e(547), w = w || [];
              w[e(2380)](r), r = "", x.createErrors !== !1 ? (r += e(1264) + (D || e(338)) + e(953) + x.errorPath + e(511) + x[e(2643)][e(2451)](m) + e(1825), F ? r += "" + M[e(2515)](",") : r += "" + M, r += e(1687), x[e(1948)][e(1057)] !== !1 && (r += e(1221), F ? r += "" + M.join(",") : r += "" + M, r += "' "), x.opts.verbose && (r += " , schema: validate.schema" + h + e(2411) + x[e(1350)] + e(617) + y + " "), r += " } ") : r += e(2152);
              var E = r;
              r = w[e(932)](), !x[e(2416)] && k ? x[e(2572)] ? r += e(1883) + E + "]); " : r += " validate.errors = [" + E + e(973) : r += e(2662) + E + e(1826), r += e(2062);
            }
            k && (r += e(1190), O ? r += "0" : r += e(466) + f, r += e(1597), j += "}");
          }
      }
    }
    k && (r += " " + j + " "), O ? (n ? (r += e(2632), r += " else throw new ValidationError(vErrors); ") : (r += " validate.errors = vErrors; ", r += e(1239)), r += e(1955)) : r += " var " + R + e(1485) + f + ";";
    function w0(X0) {
      for (var O0 = e, V0 = X0[O0(1643)], _0 = 0; _0 < V0.length; _0++) if (G0(V0[_0])) return !0;
    }
    function G0(X0) {
      var O0 = e;
      return x[O0(1174)][X0[O0(1919)]] !== void 0 || X0.implements && ne(X0);
    }
    function ne(X0) {
      for (var O0 = e, V0 = X0[O0(700)], _0 = 0; _0 < V0[O0(2021)]; _0++) if (x[O0(1174)][V0[_0]] !== void 0) return !0;
    }
    return r;
  }), xt;
}
var tt, da;
function z2() {
  var i = s;
  if (da) return tt;
  da = 1;
  var x = cr(), t = Ze(), a = ur(), e = hn(), r = pn(), n = t[i(2264)], o = or(), c = a[i(1201)];
  tt = u;
  function u(E, O, T, R) {
    var k = i, N = this, j = this._opts, D = [void 0], M = {}, F = [], C = {}, H = [], U = {}, V = [];
    O = O || { schema: E, refVal: D, refs: M };
    var J = d[k(1547)](this, E, O, R), c0 = this[k(2400)][J[k(2602)]];
    if (J[k(2664)]) return c0[k(1182)] = S0;
    var u0 = this[k(1415)], l0 = this.RULES;
    try {
      var i0 = y0(E, O, T, R);
      c0[k(328)] = i0;
      var f0 = c0.callValidate;
      return f0 && (f0[k(1174)] = i0.schema, f0[k(1188)] = null, f0.refs = i0[k(819)], f0[k(421)] = i0[k(421)], f0[k(1882)] = i0[k(1882)], f0[k(2283)] = i0[k(2283)], j.sourceCode && (f0[k(1399)] = i0.source)), i0;
    } finally {
      f[k(1547)](this, E, O, R);
    }
    function S0() {
      var W = k, Q = c0[W(328)], n0 = Q[W(756)](this, arguments);
      return S0[W(1188)] = Q[W(1188)], n0;
    }
    function y0(W, Q, n0, o0) {
      var _ = k, L0 = !Q || Q && Q[_(1174)] == W;
      if (Q[_(1174)] != O[_(1174)]) return u[_(1547)](N, W, Q, n0, o0);
      var T0 = W[_(2283)] === !0, U0 = r({ isTop: !0, schema: W, isRoot: L0, baseId: o0, root: Q, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: a[_(1849)], RULES: l0, validate: r, util: t, resolve: x, resolveRef: M0, usePattern: L, useDefault: G, useCustomRule: X, opts: j, formats: u0, logger: N[_(1238)], self: N });
      U0 = w(D, m) + w(F, v) + w(H, h) + w(V, y) + U0, j.processCode && (U0 = j[_(2422)](U0, W));
      var w0;
      try {
        var G0 = new Function(_(2049), _(2057), _(2199), _(1882), _(421), _(2216), _(767), _(1946), _(2264), _(2564), U0);
        w0 = G0(N, l0, u0, O, D, H, V, o, n, c), D[0] = w0;
      } catch (ne) {
        throw N.logger[_(503)](_(2432), U0), ne;
      }
      return w0[_(1174)] = W, w0[_(1188)] = null, w0[_(819)] = M, w0[_(421)] = D, w0[_(1882)] = L0 ? w0 : Q, T0 && (w0[_(2283)] = !0), j[_(2454)] === !0 && (w0[_(1399)] = { code: U0, patterns: F, defaults: H }), w0;
    }
    function M0(W, Q, n0) {
      var o0 = k;
      Q = x[o0(1965)](W, Q);
      var _ = M[Q], L0, T0;
      if (_ !== void 0) return L0 = D[_], T0 = "refVal[" + _ + "]", q(L0, T0);
      if (!n0 && O[o0(819)]) {
        var U0 = O.refs[Q];
        if (U0 !== void 0) return L0 = O[o0(421)][U0], T0 = P0(Q, L0), q(L0, T0);
      }
      T0 = P0(Q);
      var w0 = x[o0(1547)](N, y0, O, Q);
      if (w0 === void 0) {
        var G0 = T && T[Q];
        G0 && (w0 = x.inlineRef(G0, j[o0(1392)]) ? G0 : u[o0(1547)](N, G0, O, T, W));
      }
      if (w0 === void 0) Q0(Q);
      else return A(Q, w0), q(w0, T0);
    }
    function P0(W, Q) {
      var n0 = k, o0 = D[n0(2021)];
      return D[o0] = Q, M[W] = o0, n0(421) + o0;
    }
    function Q0(W) {
      delete M[W];
    }
    function A(W, Q) {
      var n0 = M[W];
      D[n0] = Q;
    }
    function q(W, Q) {
      var n0 = k;
      return typeof W == n0(1923) || typeof W == n0(2251) ? { code: Q, schema: W, inline: !0 } : { code: Q, $async: W && !!W.$async };
    }
    function L(W) {
      var Q = k, n0 = C[W];
      return n0 === void 0 && (n0 = C[W] = F[Q(2021)], F[n0] = W), Q(2072) + n0;
    }
    function G(W) {
      var Q = k;
      switch (typeof W) {
        case Q(2251):
        case Q(960):
          return "" + W;
        case Q(2348):
          return t[Q(2451)](W);
        case Q(1923):
          if (W === null) return Q(1382);
          var n0 = e(W), o0 = U[n0];
          return o0 === void 0 && (o0 = U[n0] = H[Q(2021)], H[o0] = W), "default" + o0;
      }
    }
    function X(W, Q, n0, o0) {
      var _ = k;
      if (N[_(2623)].validateSchema !== !1) {
        var L0 = W[_(2103)].dependencies;
        if (L0 && !L0[_(1979)](function(_0) {
          var Le = _;
          return Object[Le(2180)].hasOwnProperty[Le(1547)](n0, _0);
        })) throw new Error(_(528) + L0[_(2515)](","));
        var T0 = W[_(2103)][_(795)];
        if (T0) {
          var U0 = T0(Q);
          if (!U0) {
            var w0 = _(1425) + N[_(1823)](T0.errors);
            if (N._opts[_(795)] == _(1133)) N.logger[_(503)](w0);
            else throw new Error(w0);
          }
        }
      }
      var G0 = W[_(2103)][_(1157)], ne = W[_(2103)].inline, X0 = W.definition[_(1819)], O0;
      if (G0) O0 = G0.call(N, Q, n0, o0);
      else if (X0)
        O0 = X0[_(1547)](N, Q, n0, o0), j.validateSchema !== !1 && N[_(795)](O0, !0);
      else if (ne) O0 = ne[_(1547)](N, o0, W[_(1919)], Q, n0);
      else if (O0 = W[_(2103)][_(328)], !O0) return;
      if (O0 === void 0) throw new Error(_(487) + W[_(1919)] + _(293));
      var V0 = V.length;
      return V[V0] = O0, { code: _(2241) + V0, validate: O0 };
    }
  }
  function d(E, O, T) {
    var R = i, k = l[R(1547)](this, E, O, T);
    return k >= 0 ? { index: k, compiling: !0 } : (k = this._compilations[R(2021)], this[R(2400)][k] = { schema: E, root: O, baseId: T }, { index: k, compiling: !1 });
  }
  function f(E, O, T) {
    var R = i, k = l[R(1547)](this, E, O, T);
    k >= 0 && this._compilations.splice(k, 1);
  }
  function l(E, O, T) {
    for (var R = i, k = 0; k < this._compilations.length; k++) {
      var N = this._compilations[k];
      if (N[R(1174)] == E && N[R(1882)] == O && N.baseId == T) return k;
    }
    return -1;
  }
  function v(E, O) {
    var T = i;
    return T(927) + E + " = new RegExp(" + t[T(2451)](O[E]) + ");";
  }
  function h(E) {
    var O = i;
    return O(1820) + E + O(1822) + E + "];";
  }
  function m(E, O) {
    var T = i;
    return O[E] === void 0 ? "" : T(513) + E + T(1455) + E + "];";
  }
  function y(E) {
    var O = i;
    return "var customRule" + E + O(1829) + E + "];";
  }
  function w(E, O) {
    var T = i;
    if (!E[T(2021)]) return "";
    for (var R = "", k = 0; k < E.length; k++) R += O(k, E);
    return R;
  }
  return tt;
}
var rt = { exports: {} }, fa;
function H2() {
  var i = s;
  if (fa) return rt.exports;
  fa = 1;
  var x = rt[i(1175)] = function() {
    var a = i;
    this[a(1229)] = {};
  };
  return x[i(2180)][i(655)] = function(a, e) {
    var r = i;
    this[r(1229)][a] = e;
  }, x[i(2180)][i(2229)] = function(a) {
    var e = i;
    return this[e(1229)][a];
  }, x[i(2180)][i(669)] = function(a) {
    var e = i;
    delete this[e(1229)][a];
  }, x.prototype.clear = function() {
    var a = i;
    this[a(1229)] = {};
  }, rt.exports;
}
var at, la;
function U2() {
  var i = s;
  if (la) return at;
  la = 1;
  var x = Ze(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, r = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, o = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, d = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, f = /^(?:\/(?:[^~/]|~0|~1)*)*$/, l = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, v = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  at = h;
  function h(j) {
    var D = K;
    return j = j == "full" ? D(2374) : D(1337), x[D(1753)](h[j]);
  }
  h[i(1337)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: N, uuid: d, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": v }, h[i(2374)] = { date: y, time: w, "date-time": O, uri: R, "uri-reference": o, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: r, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: N, uuid: d, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": v };
  function m(j) {
    return j % 4 === 0 && (j % 100 !== 0 || j % 400 === 0);
  }
  function y(j) {
    var D = j.match(t);
    if (!D) return !1;
    var M = +D[1], F = +D[2], C = +D[3];
    return F >= 1 && F <= 12 && C >= 1 && C <= (F == 2 && m(M) ? 29 : a[F]);
  }
  function w(j, D) {
    var M = i, F = j[M(2069)](e);
    if (!F) return !1;
    var C = F[1], H = F[2], U = F[3], V = F[5];
    return (C <= 23 && H <= 59 && U <= 59 || C == 23 && H == 59 && U == 60) && (!D || V);
  }
  var E = /t|\s/i;
  function O(j) {
    var D = i, M = j.split(E);
    return M[D(2021)] == 2 && y(M[0]) && w(M[1], !0);
  }
  var T = /\/|:/;
  function R(j) {
    var D = i;
    return T[D(856)](j) && n[D(856)](j);
  }
  var k = /[^\\]\\Z/;
  function N(j) {
    var D = i;
    if (k[D(856)](j)) return !1;
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
  return ha || (ha = 1, st = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x[e(1675)], c = x[e(1174)][t], u = x.errSchemaPath + "/" + t, d = !x[e(1948)][e(2168)], f = "data" + (o || ""), l = e(2538) + n, v, h;
    if (c == "#" || c == "#/") x.isRoot ? (v = x[e(2572)], h = e(328)) : (v = x[e(1882)].schema[e(2283)] === !0, h = e(1932));
    else {
      var m = x[e(1259)](x[e(1880)], c, x[e(1407)]);
      if (m === void 0) {
        var y = x[e(2011)][e(2089)](x[e(1880)], c);
        if (x[e(1948)][e(1028)] == "fail") {
          x[e(1238)].error(y);
          var w = w || [];
          w.push(r), r = "", x[e(1598)] !== !1 ? (r += " { keyword: '" + e(2015) + e(953) + x.errorPath + e(511) + x[e(2643)][e(2451)](u) + e(2039) + x[e(2643)][e(1619)](c) + e(1687), x[e(1948)][e(1057)] !== !1 && (r += e(2366) + x[e(2643)][e(1619)](c) + "' "), x[e(1948)][e(1153)] && (r += e(1291) + x[e(2643)][e(2451)](c) + e(2411) + x.schemaPath + e(617) + f + " "), r += e(2062)) : r += e(2152);
          var E = r;
          r = w[e(932)](), !x[e(2416)] && d ? x.async ? r += e(1883) + E + e(1719) : r += e(2550) + E + "]; return false; " : r += e(2662) + E + e(1826), d && (r += " if (false) { ");
        } else if (x[e(1948)][e(1028)] == e(1667)) x[e(1238)][e(1797)](y), d && (r += e(597));
        else throw new x[e(2011)](x.baseId, c, y);
      } else if (m[e(1087)]) {
        var O = x[e(2643)][e(1753)](x);
        O[e(1624)]++;
        var T = e(2538) + O.level;
        O.schema = m.schema, O[e(1350)] = "", O[e(298)] = c;
        var R = x.validate(O)[e(2112)](/validate\.schema/g, m[e(733)]);
        r += " " + R + " ", d && (r += e(1138) + T + e(1597));
      } else v = m.$async === !0 || x.async && m[e(2283)] !== !1, h = m[e(733)];
    }
    if (h) {
      var w = w || [];
      w[e(2380)](r), r = "", x.opts[e(2148)] ? r += " " + h + e(643) : r += " " + h + "( ", r += " " + f + ", (dataPath || '')", x.errorPath != '""' && (r += e(1512) + x[e(1952)]);
      var k = o ? e(1073) + (o - 1 || "") : "parentData", N = o ? x.dataPathArr[o] : "parentDataProperty";
      r += " , " + k + e(1490) + N + e(2659);
      var j = r;
      if (r = w.pop(), v) {
        if (!x[e(2572)]) throw new Error(e(1785));
        d && (r += " var " + l + "; "), r += e(2543) + j + "; ", d && (r += " " + l + " = true; "), r += e(1632), d && (r += " " + l + " = false; "), r += e(2062), d && (r += e(1138) + l + ") { ");
      } else r += e(375) + j + e(2319) + h + e(2133) + h + e(2125), d && (r += e(1866));
    }
    return r;
  }), st;
}
var nt, pa;
function W2() {
  return pa || (pa = 1, nt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1174)][t], o = x[e(1350)] + x[e(2643)][e(2337)](t), c = x.errSchemaPath + "/" + t, u = !x[e(1948)][e(2168)], d = x[e(2643)][e(1753)](x), f = "";
    d[e(1624)]++;
    var l = e(2538) + d[e(1624)], v = d.baseId, h = !0, m = n;
    if (m)
      for (var y, w = -1, E = m.length - 1; w < E; )
        y = m[w += 1], (x[e(1948)][e(484)] ? typeof y == e(1923) && Object[e(1040)](y).length > 0 || y === !1 : x[e(2643)].schemaHasRules(y, x[e(2057)][e(1897)])) && (h = !1, d[e(1174)] = y, d.schemaPath = o + "[" + w + "]", d[e(298)] = c + "/" + w, r += "  " + x[e(328)](d) + " ", d[e(1880)] = v, u && (r += " if (" + l + e(1597), f += "}"));
    return u && (h ? r += e(597) : r += " " + f.slice(0, -1) + " "), r;
  }), nt;
}
var it, ma;
function Z2() {
  return ma || (ma = 1, it = function(x, t, a) {
    var e = K, r = " ", n = x.level, o = x[e(1675)], c = x[e(1174)][t], u = x[e(1350)] + x[e(2643)].getProperty(t), d = x.errSchemaPath + "/" + t, f = !x[e(1948)][e(2168)], l = e(1073) + (o || ""), v = "valid" + n, h = e(1314) + n, m = x[e(2643)][e(1753)](x), y = "";
    m.level++;
    var w = "valid" + m.level, E = c[e(1979)](function(D) {
      var M = e;
      return x[M(1948)].strictKeywords ? typeof D == M(1923) && Object[M(1040)](D)[M(2021)] > 0 || D === !1 : x[M(2643)][M(1743)](D, x.RULES[M(1897)]);
    });
    if (E) {
      var O = m[e(1880)];
      r += e(682) + h + e(1517) + v + " = false;  ";
      var T = x[e(2416)];
      x[e(2416)] = m.compositeRule = !0;
      var R = c;
      if (R)
        for (var k, N = -1, j = R.length - 1; N < j; )
          k = R[N += 1], m[e(1174)] = k, m[e(1350)] = u + "[" + N + "]", m[e(298)] = d + "/" + N, r += "  " + x[e(328)](m) + " ", m[e(1880)] = O, r += " " + v + " = " + v + e(388) + w + e(878) + v + e(1597), y += "}";
      x[e(2416)] = m[e(2416)] = T, r += " " + y + e(375) + v + e(1540), x[e(1598)] !== !1 ? (r += e(1264) + "anyOf" + e(953) + x.errorPath + " , schemaPath: " + x[e(2643)][e(2451)](d) + e(2326), x.opts[e(1057)] !== !1 && (r += " , message: 'should match some schema in anyOf' "), x[e(1948)][e(1153)] && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x[e(1350)] + " , data: " + l + " "), r += e(2062)) : r += " {} ", r += e(1826), !x[e(2416)] && f && (x[e(2572)] ? r += e(793) : r += e(327)), r += e(2663) + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; } ", x[e(1948)][e(2168)] && (r += e(2062));
    } else f && (r += e(597));
    return r;
  }), it;
}
var ot, va;
function B2() {
  return va || (va = 1, ot = function(x, t, a) {
    var e = K, r = " ", n = x[e(1174)][t], o = x.errSchemaPath + "/" + t;
    x[e(1948)].allErrors;
    var c = x[e(2643)][e(2451)](n);
    return x[e(1948)][e(2297)] === !0 ? r += e(1212) + c + ");" : typeof x[e(1948)][e(2297)] == "function" && (r += e(1436) + c + ", " + x.util[e(2451)](o) + e(1165)), r;
  }), ot;
}
var ct, ga;
function K2() {
  return ga || (ga = 1, ct = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x[e(1675)], c = x[e(1174)][t], u = x[e(1350)] + x.util[e(2337)](t), d = x[e(298)] + "/" + t, f = !x[e(1948)][e(2168)], l = e(1073) + (o || ""), v = e(2538) + n, h = x[e(1948)][e(2176)] && c && c[e(2176)];
    h && (r += e(800) + n + e(729) + x[e(2643)].getData(c[e(2176)], o, x[e(2197)]) + "; "), !h && (r += e(800) + n + " = validate.schema" + u + ";"), r += e(2261) + v + e(670) + l + e(2489) + n + e(2379) + v + e(2654);
    var m = m || [];
    m[e(2380)](r), r = "", x[e(1598)] !== !1 ? (r += e(1264) + e(1318) + e(953) + x[e(1952)] + e(511) + x[e(2643)][e(2451)](d) + e(1973) + n + e(2062), x.opts[e(1057)] !== !1 && (r += e(645)), x[e(1948)][e(1153)] && (r += e(1150) + u + e(2411) + x[e(1350)] + e(617) + l + " "), r += " } ") : r += e(2152);
    var y = r;
    return r = m[e(932)](), !x.compositeRule && f ? x[e(2572)] ? r += e(1883) + y + e(1719) : r += e(2550) + y + e(973) : r += " var err = " + y + e(1826), r += " }", f && (r += " else { "), r;
  }), ct;
}
var ut, ya;
function J2() {
  return ya || (ya = 1, ut = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x[e(1675)], c = x.schema[t], u = x.schemaPath + x[e(2643)][e(2337)](t), d = x.errSchemaPath + "/" + t, f = !x[e(1948)].allErrors, l = "data" + (o || ""), v = e(2538) + n, h = "errs__" + n, m = x.util[e(1753)](x), y = "";
    m[e(1624)]++;
    var w = e(2538) + m[e(1624)], E = "i" + n, O = m[e(1675)] = x[e(1675)] + 1, T = e(1073) + O, R = x.baseId, k = x[e(1948)][e(484)] ? typeof c == e(1923) && Object[e(1040)](c)[e(2021)] > 0 || c === !1 : x.util[e(1743)](c, x[e(2057)][e(1897)]);
    if (r += e(2261) + h + e(1838) + v + ";", k) {
      var N = x[e(2416)];
      x[e(2416)] = m.compositeRule = !0, m.schema = c, m[e(1350)] = u, m[e(298)] = d, r += " var " + w + e(2017) + E + e(1680) + E + e(1913) + l + ".length; " + E + e(2191), m[e(1952)] = x[e(2643)][e(2610)](x[e(1952)], E, x.opts[e(2420)], !0);
      var j = l + "[" + E + "]";
      m[e(2197)][O] = E;
      var D = x[e(328)](m);
      m[e(1880)] = R, x.util[e(1622)](D, T) < 2 ? r += " " + x.util[e(1299)](D, T, j) + " " : r += e(682) + T + e(729) + j + "; " + D + " ", r += e(1138) + w + e(2477), x[e(2416)] = m[e(2416)] = N, r += " " + y + e(375) + w + ") {";
    } else r += e(1138) + l + ".length == 0) {";
    var M = M || [];
    M.push(r), r = "", x[e(1598)] !== !1 ? (r += e(1264) + e(747) + "' , dataPath: (dataPath || '') + " + x[e(1952)] + e(511) + x[e(2643)][e(2451)](d) + " , params: {} ", x[e(1948)][e(1057)] !== !1 && (r += e(999)), x[e(1948)][e(1153)] && (r += e(1150) + u + " , parentSchema: validate.schema" + x[e(1350)] + " , data: " + l + " "), r += e(2062)) : r += e(2152);
    var F = r;
    return r = M.pop(), !x[e(2416)] && f ? x[e(2572)] ? r += e(1883) + F + e(1719) : r += e(2550) + F + "]; return false; " : r += e(2662) + F + e(1826), r += e(840), k && (r += e(1881) + h + "; if (vErrors !== null) { if (" + h + e(738) + h + e(2469)), x[e(1948)][e(2168)] && (r += e(2062)), r;
  }), ut;
}
var dt, ba;
function G2() {
  return ba || (ba = 1, dt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x[e(1675)], c = x[e(1174)][t], u = x[e(1350)] + x[e(2643)][e(2337)](t), d = x.errSchemaPath + "/" + t, f = !x[e(1948)].allErrors, l = e(1073) + (o || ""), v = e(1314) + n, h = x[e(2643)].copy(x), m = "";
    h[e(1624)]++;
    var y = "valid" + h[e(1624)], w = {}, E = {}, O = x[e(1948)][e(1503)];
    for (N in c)
      if (N != "__proto__") {
        var T = c[N], R = Array.isArray(T) ? E : w;
        R[N] = T;
      }
    r += e(2261) + v + " = errors;";
    var k = x[e(1952)];
    r += e(1533) + n + ";";
    for (var N in E)
      if (R = E[N], R.length) {
        if (r += e(737) + l + x.util[e(2337)](N) + " !== undefined ", O && (r += e(365) + l + ", '" + x[e(2643)].escapeQuotes(N) + e(2169)), f) {
          r += e(897);
          var j = R;
          if (j)
            for (var D, M = -1, F = j[e(2021)] - 1; M < F; ) {
              D = j[M += 1], M && (r += e(388));
              var C = x.util[e(2337)](D), H = l + C;
              r += " ( ( " + H + e(2455), O && (r += e(1202) + l + e(1356) + x.util.escapeQuotes(D) + e(2169)), r += ") && (missing" + n + e(729) + x[e(2643)][e(2451)](x[e(1948)][e(2420)] ? D : C) + e(1686);
            }
          r += e(696);
          var U = e(1722) + n, V = "' + " + U + e(2555);
          x.opts[e(1268)] && (x[e(1952)] = x[e(1948)][e(2420)] ? x.util[e(2610)](k, U, !0) : k + " + " + U);
          var J = J || [];
          J[e(2380)](r), r = "", x.createErrors !== !1 ? (r += e(1264) + e(2372) + "' , dataPath: (dataPath || '') + " + x[e(1952)] + " , schemaPath: " + x[e(2643)][e(2451)](d) + e(1530) + x[e(2643)][e(1619)](N) + e(2044) + V + "', depsCount: " + R.length + ", deps: '" + x[e(2643)][e(1619)](R[e(2021)] == 1 ? R[0] : R[e(2515)](", ")) + e(1687), x[e(1948)][e(1057)] !== !1 && (r += e(1912), R[e(2021)] == 1 ? r += e(845) + x[e(2643)].escapeQuotes(R[0]) : r += e(1816) + x[e(2643)][e(1619)](R[e(2515)](", ")), r += e(1847) + x[e(2643)][e(1619)](N) + e(2407)), x[e(1948)].verbose && (r += e(1150) + u + e(2411) + x[e(1350)] + e(617) + l + " "), r += " } ") : r += e(2152);
          var c0 = r;
          r = J[e(932)](), !x[e(2416)] && f ? x[e(2572)] ? r += " throw new ValidationError([" + c0 + e(1719) : r += e(2550) + c0 + e(973) : r += e(2662) + c0 + e(1826);
        } else {
          r += e(712);
          var u0 = R;
          if (u0)
            for (var D, l0 = -1, i0 = u0[e(2021)] - 1; l0 < i0; ) {
              D = u0[l0 += 1];
              var C = x[e(2643)][e(2337)](D), V = x.util[e(1619)](D), H = l + C;
              x[e(1948)][e(1268)] && (x[e(1952)] = x.util[e(1449)](k, D, x[e(1948)].jsonPointers)), r += " if ( " + H + " === undefined ", O && (r += e(1202) + l + e(1356) + x[e(2643)].escapeQuotes(D) + "') "), r += ") {  var err =   ", x.createErrors !== !1 ? (r += e(1264) + e(2372) + e(953) + x.errorPath + e(511) + x[e(2643)][e(2451)](d) + e(1530) + x[e(2643)][e(1619)](N) + e(2044) + V + e(541) + R[e(2021)] + e(1250) + x[e(2643)].escapeQuotes(R[e(2021)] == 1 ? R[0] : R[e(2515)](", ")) + e(1687), x[e(1948)].messages !== !1 && (r += e(1912), R.length == 1 ? r += e(845) + x[e(2643)].escapeQuotes(R[0]) : r += e(1816) + x[e(2643)][e(1619)](R[e(2515)](", ")), r += e(1847) + x[e(2643)][e(1619)](N) + e(2407)), x.opts[e(1153)] && (r += e(1150) + u + e(2411) + x.schemaPath + e(617) + l + " "), r += e(2062)) : r += e(2152), r += e(1502);
            }
        }
        r += e(1504), f && (m += "}", r += " else { ");
      }
    x[e(1952)] = k;
    var f0 = h[e(1880)];
    for (var N in w) {
      var T = w[N];
      (x.opts[e(484)] ? typeof T == e(1923) && Object.keys(T)[e(2021)] > 0 || T === !1 : x[e(2643)][e(1743)](T, x[e(2057)][e(1897)])) && (r += " " + y + " = true; if ( " + l + x[e(2643)][e(2337)](N) + e(755), O && (r += e(365) + l + e(1356) + x[e(2643)][e(1619)](N) + "') "), r += e(1597), h[e(1174)] = T, h[e(1350)] = u + x.util[e(2337)](N), h[e(298)] = d + "/" + x[e(2643)][e(1170)](N), r += "  " + x.validate(h) + " ", h.baseId = f0, r += " }  ", f && (r += e(1138) + y + e(1597), m += "}"));
    }
    return f && (r += e(2586) + m + e(1138) + v + e(1493)), r;
  }), dt;
}
var ft, wa;
function Q2() {
  return wa || (wa = 1, ft = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x.dataLevel, c = x[e(1174)][t], u = x[e(1350)] + x[e(2643)][e(2337)](t), d = x[e(298)] + "/" + t, f = !x[e(1948)][e(2168)], l = e(1073) + (o || ""), v = e(2538) + n, h = x[e(1948)].$data && c && c.$data;
    h && (r += " var schema" + n + " = " + x[e(2643)][e(2040)](c[e(2176)], o, x[e(2197)]) + "; ");
    var m = "i" + n, y = e(1174) + n;
    !h && (r += e(682) + y + " = validate.schema" + u + ";"), r += e(2261) + v + ";", h && (r += " if (schema" + n + " === undefined) " + v + e(2322) + n + ")) " + v + e(2656)), r += "" + v + " = false;for (var " + m + "=0; " + m + "<" + y + e(2363) + m + e(1877) + l + ", " + y + "[" + m + e(1338) + v + e(2413), h && (r += e(1843)), r += " if (!" + v + e(2654);
    var w = w || [];
    w.push(r), r = "", x[e(1598)] !== !1 ? (r += e(1264) + e(1053) + e(953) + x[e(1952)] + e(511) + x[e(2643)][e(2451)](d) + e(396) + n + " } ", x[e(1948)][e(1057)] !== !1 && (r += e(1164)), x[e(1948)][e(1153)] && (r += e(1150) + u + e(2411) + x[e(1350)] + e(617) + l + " "), r += e(2062)) : r += e(2152);
    var E = r;
    return r = w[e(932)](), !x[e(2416)] && f ? x.async ? r += e(1883) + E + e(1719) : r += e(2550) + E + "]; return false; " : r += " var err = " + E + e(1826), r += " }", f && (r += e(1866)), r;
  }), ft;
}
var lt, Sa;
function X2() {
  return Sa || (Sa = 1, lt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x[e(1675)], c = x[e(1174)][t], u = x[e(1350)] + x.util[e(2337)](t), d = x[e(298)] + "/" + t, f = !x[e(1948)][e(2168)], l = e(1073) + (o || "");
    if (x.opts[e(2093)] === !1) return f && (r += e(597)), r;
    var v = x[e(1948)][e(2176)] && c && c[e(2176)], h;
    v ? (r += e(800) + n + " = " + x[e(2643)][e(2040)](c[e(2176)], o, x[e(2197)]) + "; ", h = e(1174) + n) : h = c;
    var m = x[e(1948)][e(291)], y = Array.isArray(m);
    if (v) {
      var w = e(2093) + n, E = e(2273) + n, O = e(1835) + n;
      r += e(682) + w + " = formats[" + h + "]; var " + E + " = typeof " + w + e(1227) + w + e(329) + w + e(1327) + O + e(729) + E + e(1760) + w + ".type || 'string'; if (" + E + e(1597), x[e(2572)] && (r += " var async" + n + e(729) + w + e(2238)), r += " " + w + " = " + w + ".validate; } if (  ", v && (r += " (" + h + e(1341) + h + " != 'string') || "), r += " (", m != "ignore" && (r += " (" + h + e(2360) + w + " ", y && (r += e(646) + h + e(2346)), r += ") || "), r += " (" + w + e(1760) + O + e(2060) + a + e(1180) + w + e(2429), x[e(2572)] ? r += " (async" + n + " ? await " + w + "(" + l + ") : " + w + "(" + l + e(2009) : r += " " + w + "(" + l + ") ", r += e(1281) + w + ".test(" + l + e(2629);
    } else {
      var w = x[e(2199)][c];
      if (!w) {
        if (m == e(1667)) return x[e(1238)][e(1797)]('unknown format "' + c + '" ignored in schema at path "' + x[e(298)] + '"'), f && (r += e(597)), r;
        if (y && m[e(831)](c) >= 0) return f && (r += e(597)), r;
        throw new Error(e(1148) + c + e(377) + x[e(298)] + '"');
      }
      var E = typeof w == e(1923) && !(w instanceof RegExp) && w[e(328)], O = E && w[e(338)] || e(2348);
      if (E) {
        var T = w.async === !0;
        w = w[e(328)];
      }
      if (O != a) return f && (r += e(597)), r;
      if (T) {
        if (!x.async) throw new Error(e(612));
        var R = e(2199) + x[e(2643)][e(2337)](c) + ".validate";
        r += e(2529) + R + "(" + l + "))) { ";
      } else {
        r += e(292);
        var R = e(2199) + x[e(2643)].getProperty(c);
        E && (R += ".validate"), typeof w == e(1853) ? r += " " + R + "(" + l + ") " : r += " " + R + e(1910) + l + ") ", r += e(1597);
      }
    }
    var k = k || [];
    k[e(2380)](r), r = "", x[e(1598)] !== !1 ? (r += " { keyword: '" + e(2093) + e(953) + x[e(1952)] + e(511) + x.util[e(2451)](d) + " , params: { format:  ", v ? r += "" + h : r += "" + x[e(2643)][e(2451)](c), r += "  } ", x[e(1948)].messages !== !1 && (r += ` , message: 'should match format "`, v ? r += e(2308) + h + e(2555) : r += "" + x[e(2643)][e(1619)](c), r += e(2314)), x[e(1948)][e(1153)] && (r += " , schema:  ", v ? r += e(2012) + u : r += "" + x[e(2643)][e(2451)](c), r += e(1334) + x.schemaPath + e(617) + l + " "), r += e(2062)) : r += e(2152);
    var N = r;
    return r = k[e(932)](), !x.compositeRule && f ? x.async ? r += e(1883) + N + e(1719) : r += e(2550) + N + e(973) : r += " var err = " + N + e(1826), r += e(2062), f && (r += e(1866)), r;
  }), lt;
}
var ht, ka;
function Y2() {
  return ka || (ka = 1, ht = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x[e(1675)], c = x.schema[t], u = x[e(1350)] + x[e(2643)].getProperty(t), d = x.errSchemaPath + "/" + t, f = !x.opts.allErrors, l = e(1073) + (o || ""), v = e(2538) + n, h = e(1314) + n, m = x.util[e(1753)](x);
    m[e(1624)]++;
    var y = e(2538) + m[e(1624)], w = x[e(1174)][e(432)], E = x[e(1174)].else, O = w !== void 0 && (x[e(1948)][e(484)] ? typeof w == "object" && Object[e(1040)](w)[e(2021)] > 0 || w === !1 : x.util.schemaHasRules(w, x[e(2057)][e(1897)])), T = E !== void 0 && (x.opts[e(484)] ? typeof E == e(1923) && Object[e(1040)](E)[e(2021)] > 0 || E === !1 : x[e(2643)].schemaHasRules(E, x[e(2057)][e(1897)])), R = m[e(1880)];
    if (O || T) {
      var k;
      m.createErrors = !1, m[e(1174)] = c, m[e(1350)] = u, m[e(298)] = d, r += e(682) + h + e(1517) + v + " = true;  ";
      var N = x.compositeRule;
      x[e(2416)] = m[e(2416)] = !0, r += "  " + x.validate(m) + " ", m.baseId = R, m[e(1598)] = !0, r += e(1881) + h + "; if (vErrors !== null) { if (" + h + e(738) + h + e(2023), x[e(2416)] = m.compositeRule = N, O ? (r += e(1138) + y + ") {  ", m[e(1174)] = x[e(1174)][e(432)], m[e(1350)] = x[e(1350)] + ".then", m[e(298)] = x[e(298)] + "/then", r += "  " + x[e(328)](m) + " ", m[e(1880)] = R, r += " " + v + e(729) + y + "; ", O && T ? (k = e(798) + n, r += " var " + k + e(1548)) : k = e(2509), r += e(2062), T && (r += e(1866))) : r += e(375) + y + ") { ", T && (m[e(1174)] = x[e(1174)][e(448)], m[e(1350)] = x.schemaPath + ".else", m[e(298)] = x.errSchemaPath + "/else", r += "  " + x[e(328)](m) + " ", m.baseId = R, r += " " + v + e(729) + y + "; ", O && T ? (k = e(798) + n, r += e(682) + k + e(582)) : k = e(2020), r += e(2062)), r += " if (!" + v + e(1540), x[e(1598)] !== !1 ? (r += " { keyword: 'if" + e(953) + x[e(1952)] + e(511) + x[e(2643)][e(2451)](d) + " , params: { failingKeyword: " + k + e(2062), x[e(1948)][e(1057)] !== !1 && (r += e(1083) + k + e(773)), x[e(1948)].verbose && (r += e(1150) + u + e(2411) + x[e(1350)] + e(617) + l + " "), r += e(2062)) : r += e(2152), r += e(1826), !x[e(2416)] && f && (x[e(2572)] ? r += e(793) : r += e(327)), r += " }   ", f && (r += " else { ");
    } else f && (r += e(597));
    return r;
  }), ht;
}
var pt, Ea;
function _2() {
  return Ea || (Ea = 1, pt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x[e(1675)], c = x[e(1174)][t], u = x.schemaPath + x[e(2643)][e(2337)](t), d = x[e(298)] + "/" + t, f = !x[e(1948)][e(2168)], l = "data" + (o || ""), v = "valid" + n, h = e(1314) + n, m = x.util[e(1753)](x), y = "";
    m[e(1624)]++;
    var w = e(2538) + m[e(1624)], E = "i" + n, O = m.dataLevel = x.dataLevel + 1, T = e(1073) + O, R = x.baseId;
    if (r += e(2261) + h + e(1838) + v + ";", Array.isArray(c)) {
      var k = x[e(1174)][e(2118)];
      if (k === !1) {
        r += " " + v + e(729) + l + e(1997) + c.length + "; ";
        var N = d;
        d = x[e(298)] + e(1731), r += "  if (!" + v + e(2654);
        var j = j || [];
        j[e(2380)](r), r = "", x[e(1598)] !== !1 ? (r += " { keyword: '" + e(2118) + e(953) + x[e(1952)] + e(511) + x[e(2643)][e(2451)](d) + e(1723) + c[e(2021)] + " } ", x[e(1948)][e(1057)] !== !1 && (r += e(2036) + c[e(2021)] + e(963)), x[e(1948)][e(1153)] && (r += " , schema: false , parentSchema: validate.schema" + x[e(1350)] + " , data: " + l + " "), r += e(2062)) : r += " {} ";
        var D = r;
        r = j.pop(), !x[e(2416)] && f ? x[e(2572)] ? r += e(1883) + D + e(1719) : r += e(2550) + D + e(973) : r += " var err = " + D + e(1826), r += e(2062), d = N, f && (y += "}", r += e(1866));
      }
      var M = c;
      if (M) {
        for (var F, C = -1, H = M[e(2021)] - 1; C < H; )
          if (F = M[C += 1], x.opts[e(484)] ? typeof F == e(1923) && Object[e(1040)](F)[e(2021)] > 0 || F === !1 : x[e(2643)][e(1743)](F, x[e(2057)].all)) {
            r += " " + w + e(1854) + l + ".length > " + C + e(1597);
            var U = l + "[" + C + "]";
            m[e(1174)] = F, m.schemaPath = u + "[" + C + "]", m[e(298)] = d + "/" + C, m[e(1952)] = x[e(2643)][e(2610)](x[e(1952)], C, x.opts[e(2420)], !0), m[e(2197)][O] = C;
            var V = x.validate(m);
            m.baseId = R, x[e(2643)][e(1622)](V, T) < 2 ? r += " " + x[e(2643)][e(1299)](V, T, U) + " " : r += e(682) + T + e(729) + U + "; " + V + " ", r += " }  ", f && (r += e(1138) + w + e(1597), y += "}");
          }
      }
      if (typeof k == e(1923) && (x[e(1948)][e(484)] ? typeof k == e(1923) && Object[e(1040)](k)[e(2021)] > 0 || k === !1 : x[e(2643)][e(1743)](k, x[e(2057)][e(1897)]))) {
        m[e(1174)] = k, m[e(1350)] = x[e(1350)] + ".additionalItems", m.errSchemaPath = x[e(298)] + e(1731), r += " " + w + e(1854) + l + e(2352) + c.length + e(2587) + E + e(729) + c.length + "; " + E + e(1913) + l + ".length; " + E + "++) { ", m[e(1952)] = x[e(2643)][e(2610)](x[e(1952)], E, x[e(1948)][e(2420)], !0);
        var U = l + "[" + E + "]";
        m[e(2197)][O] = E;
        var V = x.validate(m);
        m.baseId = R, x[e(2643)].varOccurences(V, T) < 2 ? r += " " + x[e(2643)].varReplace(V, T, U) + " " : r += e(682) + T + e(729) + U + "; " + V + " ", f && (r += e(375) + w + e(1732)), r += e(2146), f && (r += e(1138) + w + e(1597), y += "}");
      }
    } else if (x.opts[e(484)] ? typeof c == e(1923) && Object[e(1040)](c)[e(2021)] > 0 || c === !1 : x[e(2643)][e(1743)](c, x[e(2057)].all)) {
      m.schema = c, m[e(1350)] = u, m[e(298)] = d, r += "  for (var " + E + e(729) + 0 + "; " + E + e(1913) + l + e(2363) + E + e(2191), m[e(1952)] = x.util[e(2610)](x.errorPath, E, x[e(1948)][e(2420)], !0);
      var U = l + "[" + E + "]";
      m[e(2197)][O] = E;
      var V = x.validate(m);
      m[e(1880)] = R, x[e(2643)][e(1622)](V, T) < 2 ? r += " " + x[e(2643)][e(1299)](V, T, U) + " " : r += e(682) + T + e(729) + U + "; " + V + " ", f && (r += e(375) + w + ") break; "), r += " }";
    }
    return f && (r += " " + y + e(1138) + h + e(1493)), r;
  }), pt;
}
var mt, Ia;
function Pa() {
  return Ia || (Ia = 1, mt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x.dataLevel, c = x.schema[t], u = x[e(1350)] + x[e(2643)][e(2337)](t), d = x[e(298)] + "/" + t, f = !x[e(1948)].allErrors, R, l = e(1073) + (o || ""), v = x[e(1948)][e(2176)] && c && c[e(2176)], h;
    v ? (r += e(800) + n + e(729) + x[e(2643)][e(2040)](c[e(2176)], o, x[e(2197)]) + "; ", h = e(1174) + n) : h = c;
    var m = t == e(981), y = e(m ? 1515 : 654), w = x[e(1174)][y], E = x[e(1948)][e(2176)] && w && w.$data, O = m ? "<" : ">", T = m ? ">" : "<", R = void 0;
    if (!(v || typeof c == "number" || c === void 0)) throw new Error(t + e(2070));
    if (!(E || w === void 0 || typeof w == e(960) || typeof w == e(2251))) throw new Error(y + e(1193));
    if (E) {
      var k = x[e(2643)][e(2040)](w.$data, o, x[e(2197)]), N = "exclusive" + n, j = e(1856) + n, D = e(1194) + n, M = "op" + n, F = e(2308) + M + e(2555);
      r += " var schemaExcl" + n + e(729) + k + "; ", k = e(2485) + n, r += e(682) + N + "; var " + j + e(2660) + k + e(2577) + j + e(1307) + j + e(2137) + j + e(1960);
      var R = y, C = C || [];
      C.push(r), r = "", x.createErrors !== !1 ? (r += " { keyword: '" + (R || e(1857)) + e(953) + x.errorPath + e(511) + x[e(2643)][e(2451)](d) + " , params: {} ", x[e(1948)].messages !== !1 && (r += e(1668) + y + e(1189)), x[e(1948)][e(1153)] && (r += e(1150) + u + e(2411) + x[e(1350)] + e(617) + l + " "), r += e(2062)) : r += " {} ";
      var H = r;
      r = C[e(932)](), !x[e(2416)] && f ? x[e(2572)] ? r += " throw new ValidationError([" + H + e(1719) : r += e(2550) + H + e(973) : r += e(2662) + H + e(1826), r += e(1621), v && (r += " (" + h + e(1341) + h + e(1831)), r += " " + j + e(534) + N + e(729) + h + e(2621) + k + " " + O + "= " + h + e(1661) + l + " " + T + "= " + k + e(1281) + l + " " + T + " " + h + e(2503) + N + " = " + k + " === true) ? " + l + " " + T + "= " + h + e(1281) + l + " " + T + " " + h + e(2343) + l + e(461) + l + e(1665) + n + e(729) + N + e(1814) + O + e(941) + O + "='; ", c === void 0 && (R = y, d = x[e(298)] + "/" + y, h = k, v = E);
    } else {
      var D = typeof w == e(960), F = O;
      if (D && v) {
        var M = "'" + F + "'";
        r += e(737), v && (r += " (" + h + e(1341) + h + e(1831)), r += e(1612) + h + e(2621) + w + " " + O + "= " + h + " ? " + l + " " + T + "= " + w + " : " + l + " " + T + " " + h + e(2343) + l + e(461) + l + e(1597);
      } else {
        D && c === void 0 ? (N = !0, R = y, d = x[e(298)] + "/" + y, h = w, T += "=") : (D && (h = Math[m ? e(1524) : "max"](w, c)), w === (D ? h : !0) ? (N = !0, R = y, d = x[e(298)] + "/" + y, T += "=") : (N = !1, F += "="));
        var M = "'" + F + "'";
        r += e(737), v && (r += " (" + h + e(1341) + h + e(1831)), r += " " + l + " " + T + " " + h + e(388) + l + " !== " + l + e(1597);
      }
    }
    R = R || t;
    var C = C || [];
    C[e(2380)](r), r = "", x.createErrors !== !1 ? (r += e(1264) + (R || e(1179)) + e(953) + x[e(1952)] + e(511) + x[e(2643)].toQuotedString(d) + e(2312) + M + e(661) + h + ", exclusive: " + N + e(2062), x[e(1948)][e(1057)] !== !1 && (r += e(1221) + F + " ", v ? r += e(2308) + h : r += "" + h + "'"), x[e(1948)][e(1153)] && (r += " , schema:  ", v ? r += "validate.schema" + u : r += "" + c, r += e(1334) + x[e(1350)] + e(617) + l + " "), r += " } ") : r += " {} ";
    var H = r;
    return r = C[e(932)](), !x[e(2416)] && f ? x[e(2572)] ? r += " throw new ValidationError([" + H + e(1719) : r += e(2550) + H + e(973) : r += e(2662) + H + e(1826), r += " } ", f && (r += " else { "), r;
  }), mt;
}
var vt, Ra;
function Ca() {
  return Ra || (Ra = 1, vt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x.dataLevel, c = x[e(1174)][t], u = x.schemaPath + x[e(2643)][e(2337)](t), d = x[e(298)] + "/" + t, f = !x[e(1948)][e(2168)], y, l = e(1073) + (o || ""), v = x[e(1948)][e(2176)] && c && c[e(2176)], h;
    if (v ? (r += e(800) + n + " = " + x[e(2643)].getData(c[e(2176)], o, x[e(2197)]) + "; ", h = e(1174) + n) : h = c, !(v || typeof c == e(960))) throw new Error(t + e(2070));
    var m = t == "maxItems" ? ">" : "<";
    r += "if ( ", v && (r += " (" + h + e(1341) + h + e(1831)), r += " " + l + e(1930) + m + " " + h + e(1597);
    var y = t, w = w || [];
    w[e(2380)](r), r = "", x[e(1598)] !== !1 ? (r += " { keyword: '" + (y || e(1082)) + e(953) + x[e(1952)] + e(511) + x[e(2643)][e(2451)](d) + e(1723) + h + e(2062), x[e(1948)].messages !== !1 && (r += " , message: 'should NOT have ", t == e(2024) ? r += e(509) : r += e(875), r += " than ", v ? r += e(2308) + h + e(2555) : r += "" + c, r += " items' "), x[e(1948)][e(1153)] && (r += e(2439), v ? r += e(2012) + u : r += "" + c, r += e(1334) + x[e(1350)] + " , data: " + l + " "), r += e(2062)) : r += e(2152);
    var E = r;
    return r = w[e(932)](), !x[e(2416)] && f ? x.async ? r += e(1883) + E + "]); " : r += e(2550) + E + e(973) : r += " var err = " + E + e(1826), r += "} ", f && (r += " else { "), r;
  }), vt;
}
var gt, Fa;
function Na() {
  return Fa || (Fa = 1, gt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x.dataLevel, c = x[e(1174)][t], u = x[e(1350)] + x[e(2643)][e(2337)](t), d = x[e(298)] + "/" + t, f = !x[e(1948)][e(2168)], y, l = e(1073) + (o || ""), v = x[e(1948)][e(2176)] && c && c.$data, h;
    if (v ? (r += e(800) + n + e(729) + x[e(2643)][e(2040)](c.$data, o, x[e(2197)]) + "; ", h = e(1174) + n) : h = c, !(v || typeof c == e(960))) throw new Error(t + e(2070));
    var m = t == e(2277) ? ">" : "<";
    r += e(357), v && (r += " (" + h + e(1341) + h + e(1831)), x[e(1948)].unicode === !1 ? r += " " + l + e(1930) : r += " ucs2length(" + l + ") ", r += " " + m + " " + h + e(1597);
    var y = t, w = w || [];
    w.push(r), r = "", x[e(1598)] !== !1 ? (r += " { keyword: '" + (y || e(1994)) + e(953) + x[e(1952)] + e(511) + x.util[e(2451)](d) + e(1723) + h + e(2062), x.opts[e(1057)] !== !1 && (r += e(1511), t == e(2277) ? r += e(2253) : r += e(2423), r += e(832), v ? r += e(2308) + h + " + '" : r += "" + c, r += e(2122)), x.opts.verbose && (r += e(2439), v ? r += e(2012) + u : r += "" + c, r += e(1334) + x[e(1350)] + e(617) + l + " "), r += e(2062)) : r += " {} ";
    var E = r;
    return r = w[e(932)](), !x[e(2416)] && f ? x[e(2572)] ? r += e(1883) + E + e(1719) : r += e(2550) + E + "]; return false; " : r += e(2662) + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += "} ", f && (r += e(1866)), r;
  }), gt;
}
var yt, qa;
function Ta() {
  return qa || (qa = 1, yt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x[e(1675)], c = x[e(1174)][t], u = x[e(1350)] + x[e(2643)][e(2337)](t), d = x.errSchemaPath + "/" + t, f = !x.opts[e(2168)], y, l = e(1073) + (o || ""), v = x[e(1948)][e(2176)] && c && c[e(2176)], h;
    if (v ? (r += e(800) + n + e(729) + x.util[e(2040)](c[e(2176)], o, x[e(2197)]) + "; ", h = "schema" + n) : h = c, !(v || typeof c == e(960))) throw new Error(t + e(2070));
    var m = t == e(2225) ? ">" : "<";
    r += e(357), v && (r += " (" + h + e(1341) + h + " != 'number') || "), r += e(2284) + l + ").length " + m + " " + h + e(1597);
    var y = t, w = w || [];
    w[e(2380)](r), r = "", x.createErrors !== !1 ? (r += e(1264) + (y || e(563)) + "' , dataPath: (dataPath || '') + " + x[e(1952)] + e(511) + x[e(2643)][e(2451)](d) + e(1723) + h + e(2062), x[e(1948)][e(1057)] !== !1 && (r += e(1521), t == e(2225) ? r += e(509) : r += e(875), r += e(832), v ? r += e(2308) + h + e(2555) : r += "" + c, r += e(838)), x[e(1948)][e(1153)] && (r += " , schema:  ", v ? r += e(2012) + u : r += "" + c, r += e(1334) + x.schemaPath + e(617) + l + " "), r += e(2062)) : r += e(2152);
    var E = r;
    return r = w[e(932)](), !x.compositeRule && f ? x[e(2572)] ? r += " throw new ValidationError([" + E + e(1719) : r += e(2550) + E + e(973) : r += e(2662) + E + e(1826), r += "} ", f && (r += e(1866)), r;
  }), yt;
}
var bt, Oa;
function ec() {
  return Oa || (Oa = 1, bt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x.dataLevel, c = x[e(1174)][t], u = x[e(1350)] + x[e(2643)][e(2337)](t), d = x[e(298)] + "/" + t, f = !x.opts.allErrors, l = e(1073) + (o || ""), v = x[e(1948)][e(2176)] && c && c[e(2176)], h;
    if (v ? (r += e(800) + n + e(729) + x[e(2643)][e(2040)](c[e(2176)], o, x[e(2197)]) + "; ", h = e(1174) + n) : h = c, !(v || typeof c == e(960))) throw new Error(t + e(2070));
    r += "var division" + n + e(997), v && (r += " " + h + " !== undefined && ( typeof " + h + e(1430)), r += " (division" + n + " = " + l + e(723) + h + ", ", x[e(1948)][e(1590)] ? r += e(431) + n + e(1631) + n + e(802) + x[e(1948)][e(1590)] + " " : r += e(594) + n + e(1545) + n + ") ", r += e(680), v && (r += e(828)), r += e(2384);
    var m = m || [];
    m[e(2380)](r), r = "", x[e(1598)] !== !1 ? (r += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + x.errorPath + e(511) + x.util[e(2451)](d) + e(1106) + h + " } ", x[e(1948)][e(1057)] !== !1 && (r += " , message: 'should be multiple of ", v ? r += "' + " + h : r += "" + h + "'"), x[e(1948)].verbose && (r += " , schema:  ", v ? r += e(2012) + u : r += "" + c, r += e(1334) + x[e(1350)] + e(617) + l + " "), r += " } ") : r += e(2152);
    var y = r;
    return r = m[e(932)](), !x[e(2416)] && f ? x[e(2572)] ? r += e(1883) + y + "]); " : r += e(2550) + y + e(973) : r += " var err = " + y + e(1826), r += "} ", f && (r += e(1866)), r;
  }), bt;
}
var wt, Aa;
function xc() {
  return Aa || (Aa = 1, wt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x.dataLevel, c = x[e(1174)][t], u = x[e(1350)] + x.util[e(2337)](t), d = x.errSchemaPath + "/" + t, f = !x[e(1948)][e(2168)], l = "data" + (o || ""), v = e(1314) + n, h = x[e(2643)].copy(x);
    h[e(1624)]++;
    var m = "valid" + h.level;
    if (x[e(1948)][e(484)] ? typeof c == e(1923) && Object[e(1040)](c)[e(2021)] > 0 || c === !1 : x[e(2643)].schemaHasRules(c, x[e(2057)][e(1897)])) {
      h[e(1174)] = c, h[e(1350)] = u, h[e(298)] = d, r += e(682) + v + e(1905);
      var y = x.compositeRule;
      x[e(2416)] = h[e(2416)] = !0, h.createErrors = !1;
      var w;
      h[e(1948)][e(2168)] && (w = h[e(1948)][e(2168)], h[e(1948)].allErrors = !1), r += " " + x[e(328)](h) + " ", h[e(1598)] = !0, w && (h[e(1948)][e(2168)] = w), x[e(2416)] = h.compositeRule = y, r += e(1138) + m + ") {   ";
      var E = E || [];
      E[e(2380)](r), r = "", x[e(1598)] !== !1 ? (r += e(1264) + e(518) + e(953) + x[e(1952)] + e(511) + x.util.toQuotedString(d) + e(2326), x[e(1948)].messages !== !1 && (r += " , message: 'should NOT be valid' "), x[e(1948)][e(1153)] && (r += e(1150) + u + e(2411) + x[e(1350)] + e(617) + l + " "), r += " } ") : r += e(2152);
      var O = r;
      r = E[e(932)](), !x[e(2416)] && f ? x[e(2572)] ? r += " throw new ValidationError([" + O + e(1719) : r += e(2550) + O + e(973) : r += " var err = " + O + e(1826), r += e(2663) + v + e(598) + v + e(738) + v + e(2469), x.opts[e(2168)] && (r += e(2062));
    } else r += e(341), x[e(1598)] !== !1 ? (r += e(1264) + e(518) + e(953) + x[e(1952)] + e(511) + x[e(2643)][e(2451)](d) + e(2326), x[e(1948)][e(1057)] !== !1 && (r += e(788)), x[e(1948)].verbose && (r += e(1150) + u + " , parentSchema: validate.schema" + x.schemaPath + " , data: " + l + " "), r += e(2062)) : r += e(2152), r += e(1826), f && (r += " if (false) { ");
    return r;
  }), wt;
}
var St, Da;
function tc() {
  return Da || (Da = 1, St = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x[e(1675)], c = x.schema[t], u = x.schemaPath + x.util[e(2337)](t), d = x[e(298)] + "/" + t, f = !x[e(1948)].allErrors, l = e(1073) + (o || ""), v = e(2538) + n, h = e(1314) + n, m = x.util[e(1753)](x), y = "";
    m.level++;
    var w = "valid" + m[e(1624)], E = m.baseId, O = e(988) + n, T = e(762) + n;
    r += e(2261) + h + e(2094) + O + e(2136) + v + e(2136) + T + e(2085);
    var R = x[e(2416)];
    x[e(2416)] = m.compositeRule = !0;
    var k = c;
    if (k)
      for (var N, j = -1, D = k[e(2021)] - 1; j < D; )
        N = k[j += 1], (x[e(1948)][e(484)] ? typeof N == e(1923) && Object[e(1040)](N)[e(2021)] > 0 || N === !1 : x[e(2643)].schemaHasRules(N, x[e(2057)][e(1897)])) ? (m[e(1174)] = N, m[e(1350)] = u + "[" + j + "]", m.errSchemaPath = d + "/" + j, r += "  " + x.validate(m) + " ", m[e(1880)] = E) : r += " var " + w + e(1844), j && (r += e(1138) + w + e(1760) + O + e(1597) + v + " = false; " + T + e(701) + T + ", " + j + e(1137), y += "}"), r += " if (" + w + e(1597) + v + e(729) + O + e(1844) + T + e(729) + j + e(1018);
    return x.compositeRule = m[e(2416)] = R, r += "" + y + e(2473) + v + ") {   var err =   ", x[e(1598)] !== !1 ? (r += e(1264) + "oneOf" + e(953) + x[e(1952)] + e(511) + x[e(2643)].toQuotedString(d) + e(722) + T + e(2062), x[e(1948)].messages !== !1 && (r += " , message: 'should match exactly one schema in oneOf' "), x.opts[e(1153)] && (r += e(1150) + u + " , parentSchema: validate.schema" + x[e(1350)] + " , data: " + l + " "), r += e(2062)) : r += e(2152), r += e(1826), !x[e(2416)] && f && (x[e(2572)] ? r += e(793) : r += " validate.errors = vErrors; return false; "), r += e(717) + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + e(1538), x[e(1948)][e(2168)] && (r += e(2062)), r;
  }), St;
}
var kt, ja;
function rc() {
  return ja || (ja = 1, kt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x[e(1675)], c = x[e(1174)][t], u = x[e(1350)] + x.util[e(2337)](t), d = x.errSchemaPath + "/" + t, f = !x[e(1948)].allErrors, l = e(1073) + (o || ""), v = x[e(1948)].$data && c && c.$data, h;
    v ? (r += e(800) + n + " = " + x[e(2643)][e(2040)](c.$data, o, x[e(2197)]) + "; ", h = "schema" + n) : h = c;
    var m = v ? e(667) + h + "))" : x[e(2230)](c);
    r += e(357), v && (r += " (" + h + e(1341) + h + e(1465)), r += " !" + m + e(1910) + l + e(1412);
    var y = y || [];
    y[e(2380)](r), r = "", x[e(1598)] !== !1 ? (r += e(1264) + e(2072) + "' , dataPath: (dataPath || '') + " + x[e(1952)] + " , schemaPath: " + x[e(2643)][e(2451)](d) + e(1453), v ? r += "" + h : r += "" + x.util[e(2451)](c), r += e(1793), x[e(1948)].messages !== !1 && (r += e(1828), v ? r += e(2308) + h + e(2555) : r += "" + x[e(2643)][e(1619)](c), r += e(2314)), x.opts[e(1153)] && (r += e(2439), v ? r += e(2012) + u : r += "" + x[e(2643)][e(2451)](c), r += e(1334) + x.schemaPath + e(617) + l + " "), r += " } ") : r += e(2152);
    var w = r;
    return r = y[e(932)](), !x[e(2416)] && f ? x.async ? r += " throw new ValidationError([" + w + e(1719) : r += " validate.errors = [" + w + e(973) : r += e(2662) + w + e(1826), r += "} ", f && (r += " else { "), r;
  }), kt;
}
var Et, Ma;
function ac() {
  return Ma || (Ma = 1, Et = function(x, t, a) {
    var e = K, r = " ", n = x.level, o = x[e(1675)], c = x[e(1174)][t], u = x[e(1350)] + x.util[e(2337)](t), d = x[e(298)] + "/" + t, f = !x[e(1948)][e(2168)], l = "data" + (o || ""), v = e(1314) + n, h = x[e(2643)].copy(x), m = "";
    h.level++;
    var y = e(2538) + h.level, w = "key" + n, E = e(725) + n, O = h[e(1675)] = x[e(1675)] + 1, T = e(1073) + O, R = e(1384) + n, k = Object[e(1040)](c || {})[e(2397)](l0), N = x.schema[e(969)] || {}, j = Object[e(1040)](N)[e(2397)](l0), D = x.schema[e(2576)], M = k[e(2021)] || j[e(2021)], F = D === !1, C = typeof D == e(1923) && Object[e(1040)](D)[e(2021)], H = x[e(1948)][e(2655)], U = F || C || H, V = x[e(1948)][e(1503)], J = x[e(1880)], c0 = x[e(1174)].required;
    if (c0 && !(x[e(1948)][e(2176)] && c0[e(2176)]) && c0[e(2021)] < x[e(1948)][e(456)]) var u0 = x[e(2643)][e(626)](c0);
    function l0(jx) {
      var Mx = e;
      return jx !== Mx(1416);
    }
    if (r += e(2261) + v + e(1838) + y + e(1505), V && (r += e(682) + R + e(1156)), U) {
      if (V ? r += " " + R + e(729) + R + e(1630) + l + e(1985) + E + e(426) + E + "<" + R + e(2363) + E + e(2419) + w + e(729) + R + "[" + E + e(692) : r += e(693) + w + " in " + l + e(1597), M) {
        if (r += " var isAdditional" + n + e(1112), k.length)
          if (k[e(2021)] > 8) r += e(1733) + u + e(1113) + w + ") ";
          else {
            var i0 = k;
            if (i0)
              for (var f0, S0 = -1, y0 = i0[e(2021)] - 1; S0 < y0; )
                f0 = i0[S0 += 1], r += " || " + w + e(545) + x[e(2643)][e(2451)](f0) + " ";
          }
        if (j[e(2021)]) {
          var M0 = j;
          if (M0)
            for (var P0, Q0 = -1, A = M0[e(2021)] - 1; Q0 < A; )
              P0 = M0[Q0 += 1], r += e(388) + x[e(2230)](P0) + e(1910) + w + ") ";
        }
        r += e(1292) + n + e(1597);
      }
      if (H == e(1897)) r += " delete " + l + "[" + w + e(692);
      else {
        var q = x[e(1952)], L = e(2308) + w + e(2555);
        if (x.opts[e(1268)] && (x[e(1952)] = x[e(2643)][e(2610)](x[e(1952)], w, x[e(1948)][e(2420)])), F)
          if (H) r += e(911) + l + "[" + w + e(692);
          else {
            r += " " + y + " = false; ";
            var G = d;
            d = x[e(298)] + "/additionalProperties";
            var X = X || [];
            X[e(2380)](r), r = "", x.createErrors !== !1 ? (r += e(1264) + e(2576) + e(953) + x[e(1952)] + e(511) + x.util[e(2451)](d) + " , params: { additionalProperty: '" + L + "' } ", x[e(1948)][e(1057)] !== !1 && (r += e(1668), x[e(1948)][e(1268)] ? r += e(569) : r += e(869), r += "' "), x[e(1948)][e(1153)] && (r += " , schema: false , parentSchema: validate.schema" + x[e(1350)] + e(617) + l + " "), r += e(2062)) : r += e(2152);
            var W = r;
            r = X[e(932)](), !x[e(2416)] && f ? x[e(2572)] ? r += e(1883) + W + e(1719) : r += e(2550) + W + e(973) : r += " var err = " + W + e(1826), d = G, f && (r += e(1007));
          }
        else if (C)
          if (H == e(299)) {
            r += e(682) + v + e(1905);
            var Q = x[e(2416)];
            x[e(2416)] = h[e(2416)] = !0, h[e(1174)] = D, h[e(1350)] = x[e(1350)] + ".additionalProperties", h[e(298)] = x[e(298)] + "/additionalProperties", h[e(1952)] = x.opts[e(1268)] ? x[e(1952)] : x[e(2643)][e(2610)](x[e(1952)], w, x.opts[e(2420)]);
            var n0 = l + "[" + w + "]";
            h[e(2197)][O] = w;
            var o0 = x[e(328)](h);
            h.baseId = J, x[e(2643)].varOccurences(o0, T) < 2 ? r += " " + x[e(2643)].varReplace(o0, T, n0) + " " : r += " var " + T + e(729) + n0 + "; " + o0 + " ", r += e(375) + y + e(1410) + v + e(1258) + l + "[" + w + e(1241), x[e(2416)] = h[e(2416)] = Q;
          } else {
            h.schema = D, h.schemaPath = x[e(1350)] + ".additionalProperties", h.errSchemaPath = x[e(298)] + e(610), h[e(1952)] = x[e(1948)]._errorDataPathProperty ? x.errorPath : x[e(2643)].getPathExpr(x[e(1952)], w, x[e(1948)][e(2420)]);
            var n0 = l + "[" + w + "]";
            h.dataPathArr[O] = w;
            var o0 = x[e(328)](h);
            h[e(1880)] = J, x[e(2643)][e(1622)](o0, T) < 2 ? r += " " + x.util[e(1299)](o0, T, n0) + " " : r += e(682) + T + e(729) + n0 + "; " + o0 + " ", f && (r += " if (!" + y + e(1732));
          }
        x.errorPath = q;
      }
      M && (r += e(2062)), r += e(2523), f && (r += e(1138) + y + e(1597), m += "}");
    }
    var _ = x.opts[e(504)] && !x[e(2416)];
    if (k.length) {
      var L0 = k;
      if (L0)
        for (var f0, T0 = -1, U0 = L0[e(2021)] - 1; T0 < U0; ) {
          f0 = L0[T0 += 1];
          var w0 = c[f0];
          if (x[e(1948)].strictKeywords ? typeof w0 == "object" && Object[e(1040)](w0)[e(2021)] > 0 || w0 === !1 : x[e(2643)][e(1743)](w0, x.RULES[e(1897)])) {
            var G0 = x[e(2643)].getProperty(f0), n0 = l + G0, ne = _ && w0[e(2641)] !== void 0;
            h.schema = w0, h[e(1350)] = u + G0, h[e(298)] = d + "/" + x[e(2643)][e(1170)](f0), h[e(1952)] = x.util[e(1449)](x[e(1952)], f0, x[e(1948)].jsonPointers), h[e(2197)][O] = x[e(2643)].toQuotedString(f0);
            var o0 = x[e(328)](h);
            if (h[e(1880)] = J, x[e(2643)].varOccurences(o0, T) < 2) {
              o0 = x.util[e(1299)](o0, T, n0);
              var X0 = n0;
            } else {
              var X0 = T;
              r += e(682) + T + e(729) + n0 + "; ";
            }
            if (ne) r += " " + o0 + " ";
            else {
              if (u0 && u0[f0]) {
                r += e(737) + X0 + e(2455), V && (r += e(1202) + l + e(1356) + x.util[e(1619)](f0) + e(2169)), r += e(1597) + y + e(2364);
                var q = x[e(1952)], G = d, O0 = x[e(2643)][e(1619)](f0);
                x.opts[e(1268)] && (x[e(1952)] = x[e(2643)][e(1449)](q, f0, x[e(1948)][e(2420)])), d = x[e(298)] + e(1583);
                var X = X || [];
                X[e(2380)](r), r = "", x.createErrors !== !1 ? (r += e(1264) + e(848) + e(953) + x[e(1952)] + e(511) + x[e(2643)][e(2451)](d) + e(1608) + O0 + e(1687), x[e(1948)][e(1057)] !== !1 && (r += e(1668), x[e(1948)][e(1268)] ? r += e(1949) : r += e(1099) + O0 + "\\'", r += "' "), x.opts.verbose && (r += " , schema: validate.schema" + u + e(2411) + x[e(1350)] + e(617) + l + " "), r += e(2062)) : r += " {} ";
                var W = r;
                r = X.pop(), !x[e(2416)] && f ? x[e(2572)] ? r += e(1883) + W + "]); " : r += e(2550) + W + e(973) : r += e(2662) + W + e(1826), d = G, x[e(1952)] = q, r += " } else { ";
              } else f ? (r += " if ( " + X0 + e(2455), V && (r += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + x.util[e(1619)](f0) + e(2169)), r += ") { " + y + e(343)) : (r += e(1138) + X0 + e(755), V && (r += " &&   Object.prototype.hasOwnProperty.call(" + l + e(1356) + x[e(2643)].escapeQuotes(f0) + e(2169)), r += e(712));
              r += " " + o0 + e(2062);
            }
          }
          f && (r += e(1138) + y + e(1597), m += "}");
        }
    }
    if (j[e(2021)]) {
      var V0 = j;
      if (V0)
        for (var P0, _0 = -1, Le = V0[e(2021)] - 1; _0 < Le; ) {
          P0 = V0[_0 += 1];
          var w0 = N[P0];
          if (x[e(1948)][e(484)] ? typeof w0 == "object" && Object[e(1040)](w0)[e(2021)] > 0 || w0 === !1 : x[e(2643)].schemaHasRules(w0, x[e(2057)][e(1897)])) {
            h[e(1174)] = w0, h[e(1350)] = x[e(1350)] + e(454) + x[e(2643)][e(2337)](P0), h.errSchemaPath = x[e(298)] + e(1093) + x[e(2643)][e(1170)](P0), V ? r += " " + R + e(729) + R + e(1630) + l + e(1985) + E + e(426) + E + "<" + R + e(2363) + E + "++) { var " + w + " = " + R + "[" + E + e(692) : r += " for (var " + w + e(1458) + l + e(1597), r += " if (" + x[e(2230)](P0) + e(1910) + w + ")) { ", h.errorPath = x[e(2643)][e(2610)](x[e(1952)], w, x.opts[e(2420)]);
            var n0 = l + "[" + w + "]";
            h[e(2197)][O] = w;
            var o0 = x[e(328)](h);
            h[e(1880)] = J, x.util[e(1622)](o0, T) < 2 ? r += " " + x[e(2643)][e(1299)](o0, T, n0) + " " : r += e(682) + T + " = " + n0 + "; " + o0 + " ", f && (r += e(375) + y + e(1732)), r += e(2062), f && (r += " else " + y + " = true; "), r += e(2523), f && (r += e(1138) + y + e(1597), m += "}");
          }
        }
    }
    return f && (r += " " + m + e(1138) + v + " == errors) {"), r;
  }), Et;
}
var It, La;
function sc() {
  return La || (La = 1, It = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x[e(1675)], c = x.schema[t], u = x[e(1350)] + x[e(2643)][e(2337)](t), d = x[e(298)] + "/" + t, f = !x.opts.allErrors, l = e(1073) + (o || ""), v = e(1314) + n, h = x[e(2643)][e(1753)](x), m = "";
    h[e(1624)]++;
    var y = e(2538) + h[e(1624)];
    if (r += e(2261) + v + e(1100), x[e(1948)][e(484)] ? typeof c == e(1923) && Object[e(1040)](c)[e(2021)] > 0 || c === !1 : x[e(2643)][e(1743)](c, x[e(2057)][e(1897)])) {
      h[e(1174)] = c, h[e(1350)] = u, h[e(298)] = d;
      var w = "key" + n, E = e(725) + n, O = "i" + n, T = "' + " + w + e(2555), R = h[e(1675)] = x.dataLevel + 1, k = e(1073) + R, N = "dataProperties" + n, j = x.opts.ownProperties, D = x[e(1880)];
      j && (r += e(682) + N + e(2369)), j ? r += " " + N + e(729) + N + e(1630) + l + e(1985) + E + e(426) + E + "<" + N + ".length; " + E + e(2419) + w + e(729) + N + "[" + E + e(692) : r += e(693) + w + " in " + l + e(1597), r += e(2218) + n + " = errors; ";
      var M = w, F = x[e(2416)];
      x[e(2416)] = h[e(2416)] = !0;
      var C = x[e(328)](h);
      h[e(1880)] = D, x[e(2643)][e(1622)](C, k) < 2 ? r += " " + x.util[e(1299)](C, k, M) + " " : r += " var " + k + e(729) + M + "; " + C + " ", x.compositeRule = h.compositeRule = F, r += e(375) + y + e(1651) + O + e(1111) + n + "; " + O + e(1481) + O + "++) { vErrors[" + O + e(2613) + w + e(1470), x[e(1598)] !== !1 ? (r += e(1264) + e(2531) + e(953) + x[e(1952)] + e(511) + x[e(2643)][e(2451)](d) + " , params: { propertyName: '" + T + e(1687), x[e(1948)][e(1057)] !== !1 && (r += " , message: 'property name \\'" + T + e(630)), x[e(1948)].verbose && (r += e(1150) + u + " , parentSchema: validate.schema" + x.schemaPath + e(617) + l + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(2416)] && f && (x.async ? r += e(793) : r += e(327)), f && (r += e(1007)), r += e(2541);
    }
    return f && (r += " " + m + e(1138) + v + " == errors) {"), r;
  }), It;
}
var Pt, $a;
function nc() {
  return $a || ($a = 1, Pt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x[e(1675)], c = x[e(1174)][t], u = x[e(1350)] + x[e(2643)][e(2337)](t), d = x[e(298)] + "/" + t, f = !x[e(1948)][e(2168)], l = "data" + (o || ""), v = e(2538) + n, h = x[e(1948)][e(2176)] && c && c.$data;
    h && (r += " var schema" + n + e(729) + x[e(2643)][e(2040)](c.$data, o, x[e(2197)]) + "; ");
    var m = "schema" + n;
    if (!h)
      if (c[e(2021)] < x[e(1948)][e(456)] && x[e(1174)][e(1696)] && Object[e(1040)](x[e(1174)][e(1696)]).length) {
        var R = [], y = c;
        if (y)
          for (var w, E = -1, O = y.length - 1; E < O; ) {
            w = y[E += 1];
            var T = x[e(1174)].properties[w];
            !(T && (x[e(1948)][e(484)] ? typeof T == e(1923) && Object.keys(T).length > 0 || T === !1 : x[e(2643)].schemaHasRules(T, x[e(2057)][e(1897)]))) && (R[R[e(2021)]] = w);
          }
      } else var R = c;
    if (h || R.length) {
      var k = x[e(1952)], N = h || R[e(2021)] >= x[e(1948)].loopRequired, j = x[e(1948)][e(1503)];
      if (f)
        if (r += " var missing" + n + "; ", N) {
          !h && (r += e(682) + m + " = validate.schema" + u + "; ");
          var D = "i" + n, M = e(1174) + n + "[" + D + "]", F = e(2308) + M + e(2555);
          x[e(1948)]._errorDataPathProperty && (x[e(1952)] = x[e(2643)].getPathExpr(k, M, x[e(1948)][e(2420)])), r += " var " + v + e(1844), h && (r += e(2116) + n + " === undefined) " + v + e(2322) + n + e(2009) + v + e(2656)), r += " for (var " + D + e(1680) + D + e(1913) + m + e(2363) + D + "++) { " + v + e(729) + l + "[" + m + "[" + D + e(491), j && (r += " &&   Object.prototype.hasOwnProperty.call(" + l + ", " + m + "[" + D + "]) "), r += e(878) + v + ") break; } ", h && (r += "  }  "), r += e(2355) + v + e(2654);
          var C = C || [];
          C.push(r), r = "", x.createErrors !== !1 ? (r += " { keyword: 'required" + e(953) + x[e(1952)] + e(511) + x[e(2643)].toQuotedString(d) + " , params: { missingProperty: '" + F + e(1687), x[e(1948)][e(1057)] !== !1 && (r += e(1668), x[e(1948)][e(1268)] ? r += "is a required property" : r += e(1099) + F + "\\'", r += "' "), x.opts.verbose && (r += e(1150) + u + e(2411) + x[e(1350)] + " , data: " + l + " "), r += e(2062)) : r += e(2152);
          var H = r;
          r = C[e(932)](), !x[e(2416)] && f ? x[e(2572)] ? r += e(1883) + H + e(1719) : r += e(2550) + H + e(973) : r += e(2662) + H + e(1826), r += " } else { ";
        } else {
          r += e(737);
          var U = R;
          if (U)
            for (var V, D = -1, J = U[e(2021)] - 1; D < J; ) {
              V = U[D += 1], D && (r += e(388));
              var c0 = x[e(2643)][e(2337)](V), u0 = l + c0;
              r += e(1381) + u0 + e(2455), j && (r += e(1202) + l + e(1356) + x[e(2643)][e(1619)](V) + e(2169)), r += e(2262) + n + " = " + x.util.toQuotedString(x[e(1948)].jsonPointers ? V : c0) + e(1686);
            }
          r += e(512);
          var M = e(1722) + n, F = e(2308) + M + e(2555);
          x[e(1948)][e(1268)] && (x[e(1952)] = x[e(1948)][e(2420)] ? x[e(2643)].getPathExpr(k, M, !0) : k + e(1512) + M);
          var C = C || [];
          C[e(2380)](r), r = "", x[e(1598)] !== !1 ? (r += e(1264) + "required" + e(953) + x[e(1952)] + e(511) + x[e(2643)][e(2451)](d) + e(1608) + F + e(1687), x[e(1948)].messages !== !1 && (r += " , message: '", x[e(1948)][e(1268)] ? r += e(1949) : r += "should have required property \\'" + F + "\\'", r += "' "), x.opts[e(1153)] && (r += e(1150) + u + " , parentSchema: validate.schema" + x[e(1350)] + e(617) + l + " "), r += " } ") : r += " {} ";
          var H = r;
          r = C[e(932)](), !x[e(2416)] && f ? x[e(2572)] ? r += e(1883) + H + e(1719) : r += " validate.errors = [" + H + e(973) : r += e(2662) + H + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", r += e(840);
        }
      else if (N) {
        !h && (r += e(682) + m + e(2438) + u + "; ");
        var D = "i" + n, M = e(1174) + n + "[" + D + "]", F = e(2308) + M + e(2555);
        x[e(1948)][e(1268)] && (x[e(1952)] = x[e(2643)].getPathExpr(k, M, x[e(1948)][e(2420)])), h && (r += " if (" + m + e(2502) + m + ")) {  var err =   ", x.createErrors !== !1 ? (r += e(1264) + e(848) + e(953) + x[e(1952)] + e(511) + x[e(2643)].toQuotedString(d) + e(1608) + F + e(1687), x[e(1948)][e(1057)] !== !1 && (r += e(1668), x[e(1948)][e(1268)] ? r += e(1949) : r += "should have required property \\'" + F + "\\'", r += "' "), x[e(1948)][e(1153)] && (r += e(1150) + u + e(2411) + x.schemaPath + e(617) + l + " "), r += e(2062)) : r += e(2152), r += e(1429) + m + " !== undefined) { "), r += e(693) + D + e(1680) + D + e(1913) + m + ".length; " + D + e(1937) + l + "[" + m + "[" + D + "]] === undefined ", j && (r += e(1202) + l + ", " + m + "[" + D + "]) "), r += ") {  var err =   ", x.createErrors !== !1 ? (r += " { keyword: '" + e(848) + e(953) + x[e(1952)] + e(511) + x.util.toQuotedString(d) + e(1608) + F + "' } ", x[e(1948)].messages !== !1 && (r += e(1668), x[e(1948)][e(1268)] ? r += "is a required property" : r += e(1099) + F + "\\'", r += "' "), x[e(1948)][e(1153)] && (r += e(1150) + u + e(2411) + x[e(1350)] + " , data: " + l + " "), r += e(2062)) : r += e(2152), r += e(452), h && (r += e(1843));
      } else {
        var l0 = R;
        if (l0)
          for (var V, i0 = -1, f0 = l0[e(2021)] - 1; i0 < f0; ) {
            V = l0[i0 += 1];
            var c0 = x[e(2643)][e(2337)](V), F = x[e(2643)][e(1619)](V), u0 = l + c0;
            x.opts[e(1268)] && (x[e(1952)] = x.util[e(1449)](k, V, x[e(1948)].jsonPointers)), r += " if ( " + u0 + " === undefined ", j && (r += e(1202) + l + e(1356) + x[e(2643)].escapeQuotes(V) + e(2169)), r += ") {  var err =   ", x[e(1598)] !== !1 ? (r += e(1264) + e(848) + e(953) + x[e(1952)] + e(511) + x[e(2643)][e(2451)](d) + " , params: { missingProperty: '" + F + "' } ", x[e(1948)][e(1057)] !== !1 && (r += e(1668), x.opts[e(1268)] ? r += e(1949) : r += "should have required property \\'" + F + "\\'", r += "' "), x[e(1948)][e(1153)] && (r += e(1150) + u + e(2411) + x[e(1350)] + e(617) + l + " "), r += e(2062)) : r += e(2152), r += e(1502);
          }
      }
      x[e(1952)] = k;
    } else f && (r += " if (true) {");
    return r;
  }), Pt;
}
var Rt, za;
function ic() {
  return za || (za = 1, Rt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x.dataLevel, c = x[e(1174)][t], u = x.schemaPath + x[e(2643)][e(2337)](t), d = x[e(298)] + "/" + t, f = !x[e(1948)][e(2168)], l = e(1073) + (o || ""), v = "valid" + n, h = x[e(1948)][e(2176)] && c && c[e(2176)], m;
    if (h ? (r += e(800) + n + e(729) + x.util[e(2040)](c[e(2176)], o, x[e(2197)]) + "; ", m = e(1174) + n) : m = c, (c || h) && x[e(1948)][e(1552)] !== !1) {
      h && (r += e(682) + v + e(2577) + m + e(1228) + m + e(2666) + v + e(659) + m + e(1336) + v + e(957)), r += e(735) + l + e(672) + v + e(968);
      var y = x.schema[e(2187)] && x.schema.items[e(338)], w = Array[e(1435)](y);
      if (!y || y == e(1923) || y == e(1315) || w && (y[e(831)]("object") >= 0 || y[e(831)](e(1315)) >= 0)) r += e(787) + l + e(2336) + l + e(1080) + v + " = false; break outer; } } } ";
      else {
        r += " var itemIndices = {}, item; for (;i--;) { var item = " + l + e(1025);
        var E = e(1824) + (w ? "s" : "");
        r += e(1138) + x[e(2643)][E](y, e(1329), x.opts[e(1178)], !0) + e(2472), w && (r += e(2209)), r += e(929) + v + e(2609);
      }
      r += e(2062), h && (r += e(1843)), r += " if (!" + v + ") {   ";
      var O = O || [];
      O[e(2380)](r), r = "", x[e(1598)] !== !1 ? (r += e(1264) + "uniqueItems" + e(953) + x[e(1952)] + " , schemaPath: " + x[e(2643)].toQuotedString(d) + e(899), x[e(1948)][e(1057)] !== !1 && (r += e(525)), x[e(1948)].verbose && (r += e(2439), h ? r += e(2012) + u : r += "" + c, r += "         , parentSchema: validate.schema" + x[e(1350)] + " , data: " + l + " "), r += e(2062)) : r += e(2152);
      var T = r;
      r = O[e(932)](), !x[e(2416)] && f ? x[e(2572)] ? r += e(1883) + T + e(1719) : r += " validate.errors = [" + T + e(973) : r += " var err = " + T + e(1826), r += e(2062), f && (r += e(1866));
    } else f && (r += e(597));
    return r;
  }), Rt;
}
var Ct, Ha;
function oc() {
  return Ha || (Ha = 1, Ct = { $ref: V2(), allOf: W2(), anyOf: Z2(), $comment: B2(), const: K2(), contains: J2(), dependencies: G2(), enum: Q2(), format: X2(), if: Y2(), items: _2(), maximum: Pa(), minimum: Pa(), maxItems: Ca(), minItems: Ca(), maxLength: Na(), minLength: Na(), maxProperties: Ta(), minProperties: Ta(), multipleOf: ec(), not: xc(), oneOf: tc(), pattern: rc(), properties: ac(), propertyNames: sc(), required: nc(), uniqueItems: ic(), validate: pn() }), Ct;
}
var Ft, Ua;
function cc() {
  var i = s;
  if (Ua) return Ft;
  Ua = 1;
  var x = oc(), t = Ze()[i(626)];
  return Ft = function() {
    var e = i, r = [{ type: "number", rules: [{ maximum: ["exclusiveMaximum"] }, { minimum: [e(654)] }, e(2246), e(2093)] }, { type: e(2348), rules: [e(2277), e(549), e(2072), e(2093)] }, { type: e(1315), rules: ["maxItems", e(1457), e(2187), e(747), "uniqueItems"] }, { type: e(1923), rules: [e(2225), e(1901), e(848), "dependencies", e(2531), { properties: [e(2576), "patternProperties"] }] }, { rules: ["$ref", "const", e(1053), e(518), e(386), e(1531), e(982), "if"] }], n = [e(338), "$comment"], o = [e(764), e(437), "id", e(2176), e(2283), e(344), e(1941), e(2641), e(877), e(1411), e(502), e(2193), e(974), e(1800), e(2118), e(432), e(448)], c = ["number", "integer", e(2348), e(1315), e(1923), e(2251), e(1382)];
    return r[e(1897)] = t(n), r.types = t(c), r.forEach(function(u) {
      var d = e;
      u[d(1643)] = u[d(1643)].map(function(f) {
        var l = d, v;
        if (typeof f == l(1923)) {
          var h = Object[l(1040)](f)[0];
          v = f[h], f = h, v[l(1222)](function(y) {
            var w = l;
            n.push(y), r[w(1897)][y] = !0;
          });
        }
        n[l(2380)](f);
        var m = r[l(1897)][f] = { keyword: f, code: x[f], implements: v };
        return m;
      }), r.all[d(2297)] = { keyword: "$comment", code: x[d(2297)] }, u.type && (r[d(2215)][u[d(338)]] = u);
    }), r.keywords = t(n[e(1355)](o)), r[e(2290)] = {}, r;
  }, Ft;
}
var Nt, Va;
function uc() {
  var i = s;
  if (Va) return Nt;
  Va = 1;
  var x = [i(2246), i(981), i(1515), i(1848), i(654), "maxLength", "minLength", i(2072), i(2118), i(2024), i(1457), i(1552), i(2225), i(1901), "required", i(2576), i(1053), i(2093), i(1318)];
  return Nt = function(t, a) {
    for (var e = i, r = 0; r < a.length; r++) {
      t = JSON[e(1325)](JSON[e(990)](t));
      var n = a[r][e(2183)]("/"), o = t, c;
      for (c = 1; c < n[e(2021)]; c++) o = o[n[c]];
      for (c = 0; c < x[e(2021)]; c++) {
        var u = x[c], d = o[u];
        d && (o[u] = { anyOf: [d, { $ref: e(2117) }] });
      }
    }
    return t;
  }, Nt;
}
var qt, Wa;
function dc() {
  var i = s;
  if (Wa) return qt;
  Wa = 1;
  var x = ur()[i(1849)];
  qt = t;
  function t(a, e, r) {
    var n = i, o = this;
    if (typeof this[n(2623)][n(1660)] != n(1853)) throw new Error(n(1096));
    typeof e == n(1853) && (r = e, e = void 0);
    var c = u(a).then(function() {
      var f = n, l = o[f(2371)](a, void 0, e);
      return l[f(328)] || d(l);
    });
    return r && c[n(432)](function(f) {
      r(null, f);
    }, r), c;
    function u(f) {
      var l = n, v = f[l(764)];
      return v && !o[l(2288)](v) ? t[l(1547)](o, { $ref: v }, !0) : Promise[l(1890)]();
    }
    function d(f) {
      var l = n;
      try {
        return o[l(1585)](f);
      } catch (h) {
        if (h instanceof x) return v(h);
        throw h;
      }
      function v(h) {
        var m = l, y = h.missingSchema;
        if (O(y)) throw new Error(m(2145) + y + m(1701) + h.missingRef + m(1600));
        var w = o._loadingSchemas[y];
        return !w && (w = o._loadingSchemas[y] = o[m(2623)][m(1660)](y), w.then(E, E)), w[m(432)](function(T) {
          if (!O(y)) return u(T).then(function() {
            O(y) || o.addSchema(T, y, void 0, e);
          });
        })[m(432)](function() {
          return d(f);
        });
        function E() {
          var T = m;
          delete o[T(624)][y];
        }
        function O(T) {
          var R = m;
          return o[R(1900)][T] || o._schemas[T];
        }
      }
    }
  }
  return qt;
}
var Tt, Za;
function fc() {
  return Za || (Za = 1, Tt = function(x, t, a) {
    var e = K, r = " ", n = x[e(1624)], o = x[e(1675)], c = x[e(1174)][t], u = x[e(1350)] + x[e(2643)][e(2337)](t), d = x[e(298)] + "/" + t, f = !x[e(1948)][e(2168)], l, v = e(1073) + (o || ""), h = e(2538) + n, m = e(1314) + n, y = x[e(1948)][e(2176)] && c && c[e(2176)], w;
    y ? (r += e(800) + n + e(729) + x[e(2643)][e(2040)](c[e(2176)], o, x[e(2197)]) + "; ", w = e(1174) + n) : w = c;
    var E = this, O = e(2103) + n, T = E[e(2103)], R = "", k, N, j, D, M;
    if (y && T[e(2176)]) {
      M = "keywordValidate" + n;
      var F = T.validateSchema;
      r += e(682) + O + e(2165) + t + e(1244) + M + e(729) + O + e(695);
    } else {
      if (D = x[e(1235)](E, c, x[e(1174)], x), !D) return;
      w = e(2012) + u, M = D.code, k = T[e(1157)], N = T[e(1087)], j = T[e(1819)];
    }
    var C = M + e(2304), H = "i" + n, U = e(305) + n, V = T[e(2572)];
    if (V && !x[e(2572)]) throw new Error(e(1637));
    if (!(N || j) && (r += "" + C + e(1872)), r += e(2261) + m + e(1838) + h + ";", y && T[e(2176)] && (R += "}", r += " if (" + w + " === undefined) { " + h + e(343), F && (R += "}", r += " " + h + e(729) + O + e(497) + w + e(1256) + h + ") { ")), N) T[e(1791)] ? r += " " + D[e(328)] + " " : r += " " + h + e(729) + D.validate + "; ";
    else if (j) {
      var J = x.util[e(1753)](x), R = "";
      J.level++;
      var c0 = e(2538) + J[e(1624)];
      J[e(1174)] = D[e(328)], J[e(1350)] = "";
      var u0 = x[e(2416)];
      x[e(2416)] = J[e(2416)] = !0;
      var l0 = x.validate(J)[e(2112)](/validate\.schema/g, M);
      x.compositeRule = J.compositeRule = u0, r += " " + l0;
    } else {
      var i0 = i0 || [];
      i0.push(r), r = "", r += "  " + M + e(1340), x[e(1948)].passContext ? r += "this" : r += e(2049), k || T[e(1174)] === !1 ? r += " , " + v + " " : r += e(1490) + w + e(1490) + v + e(1961) + x[e(1350)] + " ", r += e(2052), x.errorPath != '""' && (r += e(1512) + x[e(1952)]);
      var f0 = o ? "data" + (o - 1 || "") : "parentData", S0 = o ? x[e(2197)][o] : e(1586);
      r += e(1490) + f0 + e(1490) + S0 + " , rootData )  ";
      var y0 = r;
      r = i0[e(932)](), T.errors === !1 ? (r += " " + h + " = ", V && (r += "await "), r += "" + y0 + "; ") : V ? (C = e(1596) + n, r += e(682) + C + " = null; try { " + h + e(2639) + y0 + e(920) + h + e(814) + C + e(909)) : r += " " + C + e(2085) + h + " = " + y0 + "; ";
    }
    if (T.modifying && (r += e(1138) + f0 + ") " + v + " = " + f0 + "[" + S0 + "];"), r += "" + R, T[e(2538)]) f && (r += e(597));
    else {
      r += e(737), T[e(2538)] === void 0 ? (r += " !", j ? r += "" + c0 : r += "" + h) : r += " " + !T[e(2538)] + " ", r += e(1597), l = E[e(1919)];
      var i0 = i0 || [];
      i0.push(r), r = "";
      var i0 = i0 || [];
      i0.push(r), r = "", x[e(1598)] !== !1 ? (r += e(1264) + (l || e(2290)) + e(953) + x.errorPath + e(511) + x[e(2643)][e(2451)](d) + e(1894) + E.keyword + e(1687), x[e(1948)][e(1057)] !== !1 && (r += e(2231) + E.keyword + `" keyword validation' `), x[e(1948)].verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x[e(1350)] + e(617) + v + " "), r += e(2062)) : r += e(2152);
      var M0 = r;
      r = i0[e(932)](), !x[e(2416)] && f ? x.async ? r += e(1883) + M0 + e(1719) : r += e(2550) + M0 + e(973) : r += e(2662) + M0 + e(1826);
      var P0 = r;
      r = i0[e(932)](), N ? T[e(1188)] ? T.errors != e(2374) && (r += e(900) + H + "=" + m + "; " + H + e(1481) + H + e(2419) + U + e(1577) + H + e(1770) + U + e(2250) + U + e(370) + x[e(1952)] + e(2577) + U + e(2224) + U + e(2448) + d + '"; } ', x.opts[e(1153)] && (r += " " + U + e(1184) + w + "; " + U + e(823) + v + "; "), r += e(2062)) : T[e(1188)] === !1 ? r += " " + P0 + " " : (r += " if (" + m + e(294) + P0 + e(1726) + H + "=" + m + "; " + H + e(1481) + H + e(2419) + U + e(1577) + H + e(1770) + U + e(2250) + U + e(370) + x.errorPath + "; if (" + U + e(2224) + U + e(2448) + d + '"; } ', x[e(1948)][e(1153)] && (r += " " + U + e(1184) + w + "; " + U + ".data = " + v + "; "), r += e(1656)) : j ? (r += "   var err =   ", x.createErrors !== !1 ? (r += e(1264) + (l || e(2290)) + e(953) + x[e(1952)] + e(511) + x[e(2643)][e(2451)](d) + e(1894) + E[e(1919)] + e(1687), x[e(1948)][e(1057)] !== !1 && (r += e(2231) + E[e(1919)] + `" keyword validation' `), x[e(1948)].verbose && (r += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + x.schemaPath + e(617) + v + " "), r += e(2062)) : r += e(2152), r += e(1826), !x.compositeRule && f && (x[e(2572)] ? r += e(793) : r += e(327))) : T.errors === !1 ? r += " " + P0 + " " : (r += e(681) + C + ")) { if (vErrors === null) vErrors = " + C + "; else vErrors = vErrors.concat(" + C + e(499) + H + "=" + m + "; " + H + e(1481) + H + "++) { var " + U + " = vErrors[" + H + e(1770) + U + e(2250) + U + e(370) + x[e(1952)] + e(560) + U + e(2448) + d + e(381), x.opts.verbose && (r += " " + U + e(1184) + w + "; " + U + ".data = " + v + "; "), r += e(2440) + P0 + " } "), r += e(2062), f && (r += e(1866));
    }
    return r;
  }), Tt;
}
const lc = s(310), hc = "http://json-schema.org/draft-07/schema#", pc = s(2530), mc = { schemaArray: { type: s(1315), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: s(2568) }, { default: 0 }] }, simpleTypes: { enum: [s(1315), s(2251), "integer", s(1382), "number", s(1923), s(2348)] }, stringArray: { type: s(1315), items: { type: s(2348) }, uniqueItems: !0, default: [] } }, vc = [s(1923), s(2251)], gc = { $id: { type: s(2348), format: "uri-reference" }, $schema: { type: s(2348), format: "uri" }, $ref: { type: "string", format: s(1313) }, $comment: { type: "string" }, title: { type: s(2348) }, description: { type: s(2348) }, default: !0, readOnly: { type: s(2251), default: !1 }, examples: { type: s(1315), items: !0 }, multipleOf: { type: s(960), exclusiveMinimum: 0 }, maximum: { type: s(960) }, exclusiveMaximum: { type: "number" }, minimum: { type: s(960) }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: s(2568) }, minLength: { $ref: s(2456) }, pattern: { type: s(2348), format: s(994) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: s(2235) }], default: !0 }, maxItems: { $ref: s(2568) }, minItems: { $ref: s(2456) }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: s(2456) }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: s(1923), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: s(1923), additionalProperties: { $ref: "#" }, propertyNames: { format: s(994) }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: s(1277) }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: s(1315), items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: s(1738) }, { type: s(1315), items: { $ref: s(1738) }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: s(2348) }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: s(2235) }, anyOf: { $ref: s(2235) }, oneOf: { $ref: s(2235) }, not: { $ref: "#" } }, mn = { $schema: lc, $id: hc, title: pc, definitions: mc, type: vc, properties: gc, default: !0 };
var Ot, Ba;
function yc() {
  var i = s;
  if (Ba) return Ot;
  Ba = 1;
  var x = mn;
  return Ot = { $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", definitions: { simpleTypes: x.definitions[i(1834)] }, type: i(1923), dependencies: { schema: [i(328)], $data: [i(328)], statements: [i(1087)], valid: { not: { required: [i(1819)] } } }, properties: { type: x.properties.type, schema: { type: i(2251) }, statements: { type: i(2251) }, dependencies: { type: i(1315), items: { type: i(2348) } }, metaSchema: { type: "object" }, modifying: { type: "boolean" }, valid: { type: i(2251) }, $data: { type: i(2251) }, async: { type: i(2251) }, errors: { anyOf: [{ type: i(2251) }, { const: i(2374) }] } } }, Ot;
}
var At, Ka;
function bc() {
  if (Ka) return At;
  Ka = 1;
  var i = /^[a-z_$][a-z0-9_$-]*$/i, x = fc(), t = yc();
  At = { add: a, get: e, remove: r, validate: n };
  function a(o, c) {
    var u = K, d = this[u(2057)];
    if (d[u(2605)][o]) throw new Error(u(2625) + o + u(507));
    if (!i[u(856)](o)) throw new Error("Keyword " + o + " is not a valid identifier");
    if (c) {
      this.validateKeyword(c, !0);
      var f = c.type;
      if (Array[u(1435)](f))
        for (var l = 0; l < f[u(2021)]; l++) h(o, f[l], c);
      else h(o, f, c);
      var v = c.metaSchema;
      v && (c[u(2176)] && this[u(2623)][u(2176)] && (v = { anyOf: [v, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] }), c[u(795)] = this[u(1157)](v, !0));
    }
    d[u(2605)][o] = d[u(1897)][o] = !0;
    function h(m, y, w) {
      for (var E = u, O, T = 0; T < d[E(2021)]; T++) {
        var R = d[T];
        if (R[E(338)] == y) {
          O = R;
          break;
        }
      }
      !O && (O = { type: y, rules: [] }, d[E(2380)](O));
      var k = { keyword: m, definition: w, custom: !0, code: x, implements: w[E(700)] };
      O[E(1643)][E(2380)](k), d[E(2290)][m] = k;
    }
    return this;
  }
  function e(o) {
    var c = K, u = this[c(2057)][c(2290)][o];
    return u ? u.definition : this[c(2057)][c(2605)][o] || !1;
  }
  function r(o) {
    var c = K, u = this[c(2057)];
    delete u.keywords[o], delete u[c(1897)][o], delete u[c(2290)][o];
    for (var d = 0; d < u[c(2021)]; d++)
      for (var f = u[d][c(1643)], l = 0; l < f.length; l++)
        if (f[l][c(1919)] == o) {
          f[c(855)](l, 1);
          break;
        }
    return this;
  }
  function n(o, c) {
    var u = K;
    n[u(1188)] = null;
    var d = this._validateKeyword = this[u(1487)] || this[u(1157)](t, !0);
    if (d(o)) return !0;
    if (n[u(1188)] = d[u(1188)], c) throw new Error("custom keyword definition is invalid: " + this.errorsText(d[u(1188)]));
    return !1;
  }
  return At;
}
const wc = s(310), Sc = s(2117), kc = s(2425), Ec = s(1923), Ic = [s(2176)], Pc = { $data: { type: "string", anyOf: [{ format: s(1323) }, { format: s(1904) }] } }, Rc = !1, Cc = { $schema: wc, $id: Sc, description: kc, type: Ec, required: Ic, properties: Pc, additionalProperties: Rc };
var Dt, Ja;
function Fc() {
  var i = s;
  if (Ja) return Dt;
  Ja = 1;
  var x = z2(), t = cr(), a = H2(), e = ln(), r = hn(), n = U2(), o = cc(), c = uc(), u = Ze();
  Dt = m, m[i(2180)][i(328)] = y, m[i(2180)][i(1157)] = w, m[i(2180)].addSchema = E, m.prototype[i(2616)] = O, m[i(2180)][i(795)] = T, m[i(2180)][i(2288)] = k, m[i(2180)].removeSchema = D, m[i(2180)][i(1688)] = u0, m.prototype.errorsText = c0, m[i(2180)][i(2371)] = F, m[i(2180)][i(1585)] = C, m[i(2180)].compileAsync = dc();
  var d = bc();
  m[i(2180)].addKeyword = d.add, m[i(2180)].getKeyword = d[i(2229)], m.prototype.removeKeyword = d[i(485)], m[i(2180)][i(1593)] = d.validate;
  var f = ur();
  m[i(2564)] = f[i(1201)], m[i(2011)] = f[i(1849)], m[i(404)] = c;
  var l = i(1332), v = [i(2655), i(504), i(744), i(2657)], h = [i(993)];
  function m(A) {
    var q = i;
    if (!(this instanceof m)) return new m(A);
    A = this[q(2623)] = u[q(1753)](A) || {}, P0(this), this._schemas = {}, this[q(1900)] = {}, this[q(1927)] = {}, this[q(1415)] = n(A[q(2093)]), this[q(1229)] = A.cache || new a(), this[q(624)] = {}, this._compilations = [], this[q(2057)] = o(), this[q(458)] = H(A), A[q(456)] = A[q(456)] || 1 / 0, A[q(2490)] == "property" && (A[q(1268)] = !0), A[q(2612)] === void 0 && (A[q(2612)] = r), this[q(1911)] = M0(this), A[q(2199)] && f0(this), A.keywords && S0(this), l0(this), typeof A[q(2470)] == q(1923) && this.addMetaSchema(A[q(2470)]), A[q(1977)] && this[q(1841)](q(1977), { metaSchema: { type: "boolean" } }), i0(this);
  }
  function y(A, q) {
    var L = i, G;
    if (typeof A == "string") {
      if (G = this[L(2288)](A), !G) throw new Error('no schema with key or ref "' + A + '"');
    } else {
      var X = this[L(2371)](A);
      G = X[L(328)] || this[L(1585)](X);
    }
    var W = G(q);
    return G.$async !== !0 && (this[L(1188)] = G[L(1188)]), W;
  }
  function w(A, q) {
    var L = i, G = this[L(2371)](A, void 0, q);
    return G.validate || this._compile(G);
  }
  function E(A, q, L, G) {
    var X = i;
    if (Array[X(1435)](A)) {
      for (var W = 0; W < A[X(2021)]; W++) this.addSchema(A[W], void 0, L, G);
      return this;
    }
    var Q = this[X(458)](A);
    if (Q !== void 0 && typeof Q != X(2348)) throw new Error(X(1703));
    return q = t[X(1691)](q || Q), y0(this, q), this._schemas[q] = this[X(2371)](A, L, G, !0), this;
  }
  function O(A, q, L) {
    var G = i;
    return this[G(1827)](A, q, L, !0), this;
  }
  function T(A, q) {
    var L = i, G = A[L(764)];
    if (G !== void 0 && typeof G != L(2348)) throw new Error(L(410));
    if (G = G || this[L(2623)].defaultMeta || R(this), !G) return this[L(1238)][L(1797)]("meta-schema not available"), this[L(1188)] = null, !0;
    var X = this[L(328)](G, A);
    if (!X && q) {
      var W = L(962) + this[L(1823)]();
      if (this[L(2623)][L(795)] == "log") this[L(1238)].error(W);
      else throw new Error(W);
    }
    return X;
  }
  function R(A) {
    var q = i, L = A._opts.meta;
    return A[q(2623)][q(2358)] = typeof L == q(1923) ? A[q(458)](L) || L : A[q(2288)](l) ? l : void 0, A[q(2623)][q(2358)];
  }
  function k(A) {
    var q = i, L = j(this, A);
    switch (typeof L) {
      case q(1923):
        return L[q(328)] || this[q(1585)](L);
      case "string":
        return this[q(2288)](L);
      case "undefined":
        return N(this, A);
    }
  }
  function N(A, q) {
    var L = i, G = t[L(1174)][L(1547)](A, { schema: {} }, q);
    if (G) {
      var X = G[L(1174)], W = G[L(1882)], Q = G[L(1880)], n0 = x[L(1547)](A, X, W, void 0, Q);
      return A[L(1927)][q] = new e({ ref: q, fragment: !0, schema: X, root: W, baseId: Q, validate: n0 }), n0;
    }
  }
  function j(A, q) {
    var L = i;
    return q = t.normalizeId(q), A[L(302)][q] || A._refs[q] || A._fragments[q];
  }
  function D(A) {
    var q = i;
    if (A instanceof RegExp) return M(this, this[q(302)], A), M(this, this[q(1900)], A), this;
    switch (typeof A) {
      case q(1887):
        return M(this, this[q(302)]), M(this, this._refs), this[q(1229)][q(2173)](), this;
      case q(2348):
        var L = j(this, A);
        return L && this[q(1229)][q(669)](L[q(2213)]), delete this[q(302)][A], delete this[q(1900)][A], this;
      case q(1923):
        var G = this._opts[q(2612)], X = G ? G(A) : A;
        this[q(1229)].del(X);
        var W = this._getId(A);
        W && (W = t[q(1691)](W), delete this[q(302)][W], delete this._refs[W]);
    }
    return this;
  }
  function M(A, q, L) {
    var G = i;
    for (var X in q) {
      var W = q[X];
      !W.meta && (!L || L[G(856)](X)) && (A[G(1229)][G(669)](W[G(2213)]), delete q[X]);
    }
  }
  function F(A, q, L, G) {
    var X = i;
    if (typeof A != "object" && typeof A != "boolean") throw new Error(X(2447));
    var W = this[X(2623)][X(2612)], Q = W ? W(A) : A, n0 = this[X(1229)].get(Q);
    if (n0) return n0;
    G = G || this[X(2623)][X(1741)] !== !1;
    var o0 = t[X(1691)](this[X(458)](A));
    o0 && G && y0(this, o0);
    var _ = this._opts[X(795)] !== !1 && !q, L0;
    _ && !(L0 = o0 && o0 == t[X(1691)](A[X(764)])) && this[X(795)](A, !0);
    var T0 = t.ids.call(this, A), U0 = new e({ id: o0, schema: A, localRefs: T0, cacheKey: Q, meta: L });
    return o0[0] != "#" && G && (this[X(1900)][o0] = U0), this[X(1229)].put(Q, U0), _ && L0 && this[X(795)](A, !0), U0;
  }
  function C(A, q) {
    var L = i;
    if (A[L(2664)])
      return A[L(328)] = W, W[L(1174)] = A[L(1174)], W[L(1188)] = null, W[L(1882)] = q || W, A.schema[L(2283)] === !0 && (W.$async = !0), W;
    A[L(2664)] = !0;
    var G;
    A.meta && (G = this[L(2623)], this._opts = this[L(1911)]);
    var X;
    try {
      X = x[L(1547)](this, A[L(1174)], q, A[L(1413)]);
    } catch (Q) {
      throw delete A[L(328)], Q;
    } finally {
      A.compiling = !1, A[L(2470)] && (this[L(2623)] = G);
    }
    return A.validate = X, A.refs = X[L(819)], A[L(421)] = X[L(421)], A.root = X[L(1882)], X;
    function W() {
      var Q = L, n0 = A[Q(328)], o0 = n0[Q(756)](this, arguments);
      return W.errors = n0[Q(1188)], o0;
    }
  }
  function H(A) {
    var q = i;
    switch (A[q(919)]) {
      case q(589):
        return J;
      case "id":
        return U;
      default:
        return V;
    }
  }
  function U(A) {
    var q = i;
    return A[q(437)] && this[q(1238)][q(1797)](q(749), A[q(437)]), A.id;
  }
  function V(A) {
    var q = i;
    return A.id && this[q(1238)][q(1797)](q(2332), A.id), A[q(437)];
  }
  function J(A) {
    var q = i;
    if (A.$id && A.id && A[q(437)] != A.id) throw new Error(q(1183));
    return A[q(437)] || A.id;
  }
  function c0(A, q) {
    var L = i;
    if (A = A || this[L(1188)], !A) return L(2174);
    q = q || {};
    for (var G = q[L(1278)] === void 0 ? ", " : q[L(1278)], X = q[L(615)] === void 0 ? L(1073) : q[L(615)], W = "", Q = 0; Q < A.length; Q++) {
      var n0 = A[Q];
      n0 && (W += X + n0[L(1737)] + " " + n0[L(2089)] + G);
    }
    return W[L(1813)](0, -G[L(2021)]);
  }
  function u0(A, q) {
    var L = i;
    return typeof q == L(2348) && (q = new RegExp(q)), this._formats[A] = q, this;
  }
  function l0(A) {
    var q = i, L;
    if (A[q(2623)].$data && (L = Cc, A.addMetaSchema(L, L.$id, !0)), A[q(2623)][q(2470)] !== !1) {
      var G = mn;
      A._opts[q(2176)] && (G = c(G, h)), A[q(2616)](G, l, !0), A[q(1900)][q(1217)] = l;
    }
  }
  function i0(A) {
    var q = i, L = A[q(2623)][q(318)];
    if (L)
      if (Array[q(1435)](L)) A[q(1827)](L);
      else
        for (var G in L) A[q(1827)](L[G], G);
  }
  function f0(A) {
    var q = i;
    for (var L in A[q(2623)][q(2199)]) {
      var G = A._opts[q(2199)][L];
      A.addFormat(L, G);
    }
  }
  function S0(A) {
    var q = i;
    for (var L in A[q(2623)].keywords) {
      var G = A[q(2623)][q(2605)][L];
      A[q(1841)](L, G);
    }
  }
  function y0(A, q) {
    var L = i;
    if (A[L(302)][q] || A[L(1900)][q]) throw new Error(L(1439) + q + L(1523));
  }
  function M0(A) {
    for (var q = i, L = u[q(1753)](A[q(2623)]), G = 0; G < v[q(2021)]; G++) delete L[v[G]];
    return L;
  }
  function P0(A) {
    var q = i, L = A[q(2623)].logger;
    if (L === !1) A.logger = { log: Q0, warn: Q0, error: Q0 };
    else {
      if (L === void 0 && (L = console), !(typeof L == q(1923) && L[q(1133)] && L.warn && L.error)) throw new Error(q(2317));
      A[q(1238)] = L;
    }
  }
  function Q0() {
  }
  return Dt;
}
var Nc = Fc();
const qc = Ws(Nc);
class Tc extends A2 {
  constructor(x, t) {
    var a = s, e;
    super(t), this[a(1492)] = x, this[a(1398)] = (e = t == null ? void 0 : t[a(934)]) !== null && e !== void 0 ? e : {}, this[a(629)] = t == null ? void 0 : t[a(2073)], this[a(1983)](en, (r) => this._oninitialize(r)), this[a(336)](xn, () => {
      var r = a, n;
      return (n = this[r(346)]) === null || n === void 0 ? void 0 : n[r(1547)](this);
    });
  }
  [s(745)](x) {
    var t = s;
    if (this[t(1433)]) throw new Error(t(2464));
    this[t(1398)] = D2(this[t(1398)], x);
  }
  assertCapabilityForMethod(x) {
    var t = s, a, e, r;
    switch (x) {
      case t(732):
        if (!(!((a = this[t(2581)]) === null || a === void 0) && a[t(1432)])) throw new Error(t(1551) + x + ")");
        break;
      case "elicitation/create":
        if (!(!((e = this._clientCapabilities) === null || e === void 0) && e.elicitation)) throw new Error(t(1010) + x + ")");
        break;
      case t(1396):
        if (!(!((r = this[t(2581)]) === null || r === void 0) && r[t(884)])) throw new Error("Client does not support listing roots (required for " + x + ")");
        break;
    }
  }
  [s(1075)](x) {
    var t = s;
    switch (x) {
      case t(1401):
        if (!this[t(1398)].logging) throw new Error("Server does not support logging (required for " + x + ")");
        break;
      case "notifications/resources/updated":
      case t(1888):
        if (!this._capabilities[t(1750)]) throw new Error(t(2615) + x + ")");
        break;
      case "notifications/tools/list_changed":
        if (!this[t(1398)][t(1422)]) throw new Error(t(2631) + x + ")");
        break;
      case "notifications/prompts/list_changed":
        if (!this[t(1398)][t(789)]) throw new Error("Server does not support notifying of prompt list changes (required for " + x + ")");
        break;
    }
  }
  assertRequestHandlerCapability(x) {
    var t = s;
    switch (x) {
      case t(732):
        if (!this[t(1398)][t(1432)]) throw new Error(t(1380) + x + ")");
        break;
      case t(393):
        if (!this[t(1398)][t(2331)]) throw new Error(t(859) + x + ")");
        break;
      case "prompts/get":
      case t(1377):
        if (!this[t(1398)][t(789)]) throw new Error(t(1903) + x + ")");
        break;
      case t(843):
      case t(985):
      case t(866):
        if (!this._capabilities[t(1750)]) throw new Error(t(2318) + x + ")");
        break;
      case "tools/call":
      case t(2095):
        if (!this[t(1398)][t(1422)]) throw new Error("Server does not support tools (required for " + x + ")");
        break;
    }
  }
  async _oninitialize(x) {
    var t = s;
    const a = x[t(817)].protocolVersion;
    return this[t(2581)] = x.params[t(934)], this[t(873)] = x[t(817)][t(1712)], { protocolVersion: To[t(553)](a) ? a : Bs, capabilities: this.getCapabilities(), serverInfo: this._serverInfo, ...this[t(629)] && { instructions: this[t(629)] } };
  }
  [s(2467)]() {
    return this._clientCapabilities;
  }
  getClientVersion() {
    var x = s;
    return this[x(873)];
  }
  [s(1140)]() {
    var x = s;
    return this[x(1398)];
  }
  async ping() {
    var x = s;
    return this[x(1658)]({ method: "ping" }, Yt);
  }
  async [s(1527)](x, t) {
    var a = s;
    return this[a(1658)]({ method: a(732), params: x }, un, t);
  }
  async elicitInput(x, t) {
    var a = s;
    const e = await this[a(1658)]({ method: a(2457), params: x }, dn, t);
    if (e[a(1863)] === a(2622) && e[a(1248)]) try {
      const r = new qc(), n = r.compile(x.requestedSchema);
      if (!n(e[a(1248)])) throw new Te(be[a(1934)], a(1447) + r[a(1823)](n[a(1188)]));
    } catch (r) {
      throw r instanceof Te ? r : new Te(be.InternalError, a(2088) + r);
    }
    return e;
  }
  async [s(2303)](x, t) {
    var a = s;
    return this[a(1658)]({ method: a(1396), params: x }, fn, t);
  }
  async [s(706)](x) {
    var t = s;
    return this[t(1676)]({ method: t(1401), params: x });
  }
  async sendResourceUpdated(x) {
    var t = s;
    return this[t(1676)]({ method: "notifications/resources/updated", params: x });
  }
  async [s(1367)]() {
    var x = s;
    return this[x(1676)]({ method: x(1888) });
  }
  async [s(1783)]() {
    var x = s;
    return this[x(1676)]({ method: "notifications/tools/list_changed" });
  }
  async [s(647)]() {
    var x = s;
    return this[x(1676)]({ method: x(1349) });
  }
}
class Oc extends Error {
  constructor(x, t) {
    var a = s;
    super("Heartbeat timeout for poster " + x + a(1085) + t + "ms"), this[a(940)] = a(1386);
  }
}
const lx = /* @__PURE__ */ new Map();
class Ac {
  constructor(x) {
    var t = s;
    if (this.messageQueue = [], this[t(922)] = Date.now(), lx[t(2561)](x.posterIdentifier)) {
      const a = lx[t(2229)](x.posterIdentifier);
      a && a[t(2114)]();
    }
    this.posterIdentifier = x.posterIdentifier, this[t(1069)] = x[t(1069)], this[t(721)] = x.addMessageEventListener, this[t(2135)] = x[t(2135)], this[t(2552)] = x.heartbeatInterval ?? 5e3, this[t(715)] = x.heartbeatTimeout ?? 5e3, this[t(2468)] = x[t(2468)] ?? !1, lx[t(1951)](this[t(1186)], this), this.listenMessageCallback = this[t(2078)].bind(this), this[t(1199)] = this[t(721)](this[t(2078)]);
  }
  listenMessageCallback(x) {
    var t = s;
    if (x.posterIdentifier === this[t(1186)]) {
      if (x[t(673)] === t(2633)) {
        x[t(338)] === t(1592) && !this[t(2468)] ? this[t(1069)]({ channel: "sdppp-heartbeat", posterIdentifier: this.posterIdentifier, type: t(1522), timestamp: x[t(1870)] }) : x[t(338)] === t(1522) && (this[t(922)] = Date[t(2600)](), this[t(2661)] && (clearTimeout(this[t(2661)]), this.heartbeatTimeoutTimer = void 0));
        return;
      }
      x.channel === "sdppp" && (this.onmessage && t(1895) in x ? this.onmessage(x[t(1895)]) : t(1895) in x && this[t(1078)][t(2380)](x.payload));
    }
  }
  async [s(1480)]() {
    for (var x = s; this[x(1078)][x(2021)] > 0; ) {
      const t = this.messageQueue[x(761)]();
      t && this[x(2082)] && this[x(2082)](t);
    }
    this[x(2378)]();
  }
  [s(2378)]() {
    var x = s;
    this[x(601)] = setInterval(() => {
      var t = x;
      const a = Date[t(2600)]();
      this[t(1069)]({ channel: t(2633), posterIdentifier: this[t(1186)], type: t(1592), timestamp: a }), this.heartbeatTimeoutTimer = setTimeout(() => {
        var e = t;
        const r = new Oc(this[e(1186)], this[e(715)]);
        this[e(1865)] && this.onerror(r);
      }, this.heartbeatTimeout);
    }, this[x(2552)]);
  }
  async send(x, t) {
    var a = s;
    this[a(1069)]({ channel: "sdppp", posterIdentifier: this[a(1186)], payload: x });
  }
  async [s(2114)]() {
    var x = s;
    this.heartbeatTimer && (clearInterval(this[x(601)]), this.heartbeatTimer = void 0), this.heartbeatTimeoutTimer && (clearTimeout(this[x(2661)]), this.heartbeatTimeoutTimer = void 0), lx[x(2434)](this[x(1186)]), this.removeMessageEventListener(this.externalListenMessageCallback);
  }
}
const Dc = qx[s(1369)](s(2005));
async function vn() {
  var i = s;
  if (!window[i(2110)]) return;
  const x = new Ac({ posterIdentifier: i(2159), messagePoster: (e) => {
    var r = i;
    window[r(2110)].postMessage(e, "*");
  }, addMessageEventListener: (e) => {
    var r = i;
    const n = (o) => {
      e(o.data);
    };
    return window.addEventListener(r(2089), n), n;
  }, removeMessageEventListener: (e) => {
    var r = i;
    window[r(1293)]("message", e);
  } });
  x[i(1865)] = (e) => {
    var r = i;
    Dc(r(2030), e);
  };
  const t = new Tc({ name: i(2159), version: i(1557) }, {}), a = new yi(t);
  return await a[i(1649)](x), window[i(2110)][i(524)]({ channel: i(359), meshName: i(978), action: i(1649) }, "*"), await C0[i(1649)](i(780), a);
}
const jc = Object[s(568)](Object[s(1907)]({ __proto__: null, connectUXP: vn, mcpMesh: C0 }, Symbol[s(2258)], { value: s(1959) }));
Oe[s(675)](s(2263), (i) => {
  var x = s;
  const t = q0.workflowManager || q0[x(839)].workflow, a = t[x(1693)];
  if (i.detail.id !== a[x(1708)].id) return;
  const e = C0[x(917)][x(642)]()[x(1698)], r = Qt(q0[x(2506)], a);
  yn(r, e) && C0[x(917)][x(892)]({ widgetableStructure: r }), C0[x(917)][x(892)]({ widgetableValues: Fx(q0[x(2506)]) });
}), Oe[s(675)](s(557), () => {
  var i = s;
  C0[i(917)][i(892)]({ widgetableValues: Fx(q0[i(2506)]) });
});
let Ga = 0, Qa = !0, Xa = "";
function gn() {
  var i = s;
  requestAnimationFrame(gn);
  const x = q0[i(1079)] || q0[i(839)][i(2334)], t = x[i(1693)], a = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[i(1796)]) || "", r = (t == null ? void 0 : t[i(769)]) || !0;
  if (a === Ga && e === Xa && r === Qa) return;
  Ga = a, Xa = e, Qa = r;
  const n = Qt(q0[i(2506)], t), o = Fx(q0[i(2506)]);
  C0[i(917)][i(892)]({ widgetableStructure: n, widgetableValues: o }), setTimeout(() => {
    var c = i;
    if (t !== x[c(1693)]) return;
    const u = Qt(q0.graph, t), d = Fx(q0[c(2506)]);
    yn(u, n) && C0[c(917)][c(892)]({ widgetableStructure: u }), C0[c(917)][c(892)]({ widgetableValues: d });
  }, 800);
}
requestAnimationFrame(gn);
function K(i, x) {
  var t = Ix();
  return K = function(a, e) {
    a = a - 281;
    var r = t[a];
    return r;
  }, K(i, x);
}
function yn(i, x) {
  var t = s;
  return i[t(603)][t(2021)] !== x[t(603)].length || JSON[t(990)](i[t(603)]) !== JSON[t(990)](x[t(603)]) || JSON[t(990)](i[t(719)]) !== JSON[t(990)](x[t(719)]);
}
let Ya = !1;
async function Mc() {
  var i = s;
  if (Ya) return Promise[i(1890)]();
  Oe.user && C0[i(917)][i(892)]({ comfyUserToken: Oe[i(868)] }), Ya = !0;
}
qx.extend(s(885));
async function Lc(i, x, t) {
  var a = s;
  x[a(675)]("progress", ({ detail: n }) => {
    var o = a;
    if (!n) return;
    let c = 0, u = 0;
    !isNaN(n[o(2038)] / n[o(2537)]) && (c = Math[o(440)](n[o(2038)] / n[o(2537)] * 100));
    const d = n.node, f = graph[o(719)][o(1666)]((l) => l.id == d);
    if (f && f[o(2449)]) {
      const l = 100 / graph[o(719)][o(2021)];
      u = Math[o(440)](f[o(2449)] * l) + (c ? c / 100 * l : 0);
    }
    C0[o(917)][o(892)]({ progress: c, graphProgress: u });
  }), x[a(675)](a(2296), (n) => {
    var c;
    var o = a;
    (c = n[o(1031)]) != null && c[o(804)] && C0[o(917)].setState({ queueSize: n[o(1031)][o(804)][o(1044)] });
  }), x[a(675)](a(1751), ({ detail: n }) => {
    var o = a;
    if (C0.store[o(892)]({ executingNodeTitle: "", executingNodeID: "", lastError: n.exception_message }), n[o(2091)]) {
      const c = i[o(2506)][o(719)][o(1666)]((u) => u.id == n.node_id);
      C0[o(917)][o(892)]({ widgetableErrors: { [n[o(2091)]]: "[" + ((c == null ? void 0 : c.title) || n.node_id) + "]" + n[o(1601)] } });
    }
  }), x[a(675)]("executing", (n) => {
    var o = a;
    const c = n[o(1031)], u = graph[o(719)].find((d) => d.id == c);
    if (u) {
      const d = 100 / graph[o(719)][o(2021)];
      C0.store[o(892)]({ executingNodeTitle: u.title, executingNodeID: u.id, graphProgress: Math[o(440)](u[o(2449)] * d) });
    }
  }), x[a(675)](a(2499), () => {
    C0.store.setState({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x[a(675)]("execution_start", ({ detail: n }) => {
    var o = a;
    C0[o(917)][o(892)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date.now() });
  });
  const e = /* @__PURE__ */ new Map();
  x[a(675)](a(323), (n) => {
    var o = a;
    C0.store[o(892)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[o(2229)](n.detail[o(583)]) || [])[o(632)]((u) => ({ url: u, thumbnail: u }));
    qo(n.detail.prompt_id, c), e.delete(n[o(1031)].prompt_id);
  }), x.addEventListener(a(557), (n) => {
    var o = a;
    const c = e.get(n.detail[o(583)]) || [];
    n[o(1031)][o(464)] && Array[o(1435)](n[o(1031)][o(464)][o(648)]) && n.detail[o(464)][o(648)][o(2021)] > 0 && c.push(...n[o(1031)].output[o(648)][o(2397)]((u) => u.type == o(464))[o(632)]((u) => {
      var d = o;
      return location[d(1915)] + location.pathname + d(2349) + u[d(338)] + "&filename=" + encodeURIComponent(u[d(1208)]) + (u[d(420)] ? "&subfolder=" + encodeURIComponent(u.subfolder) : "");
    })), n.detail.output && Array[o(1435)](n[o(1031)].output.sdppp_assets) && n[o(1031)][o(464)][o(2163)][o(2021)] > 0 && c[o(2380)](...n.detail[o(464)][o(2163)][o(632)]((u) => {
      var d = o;
      return location[d(1915)] + location[d(1463)] + "sd-ppp-static/sdppp_images/" + encodeURIComponent(u);
    })), e.set(n[o(1031)][o(583)], c);
  });
  let r = null;
  x[a(675)](a(436), (n) => {
    r = setTimeout(() => {
      var o = K;
      C0.store[o(892)]({ comfyWSState: "reconnecting" });
    }, 1e3);
  }), x.addEventListener(a(1419), (n) => {
    var o = a;
    C0[o(917)][o(892)]({ comfyWSState: o(1716) }), clearTimeout(r);
  });
}
let jt = [];
(async function() {
  var x, t, a, e, r, n;
  var i = s;
  if (typeof gradioApp == i(1887)) {
    try {
      const o = (t = (x = window[i(1975)]) == null ? void 0 : x.app) == null ? void 0 : t[i(939)], c = (e = (a = window[i(1975)]) == null ? void 0 : a.ui) == null ? void 0 : e[i(2278)], u = (n = (r = window[i(1975)]) == null ? void 0 : r[i(1634)]) == null ? void 0 : n[i(1634)];
      if (!o || !u || !c) throw new Error(i(891));
      await Mc(), await vn(), await Lc(o, u, c), import(i(1571))[i(432)]((d) => {
        var f = i;
        d[f(2641)](_e, 2);
      });
    } catch (o) {
      jt[i(2380)](o[i(2108)] || o[i(2089)] || o);
    }
    await new Promise((o) => setTimeout(o, 2e3)), jt[i(2021)] && console[i(503)](jt[0]);
  }
})();
