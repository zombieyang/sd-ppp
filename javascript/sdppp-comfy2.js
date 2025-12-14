var Dn = Object.defineProperty;
var jn = (o, x, t) => x in o ? Dn(o, x, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[x] = t;
var m0 = (o, x, t) => jn(o, typeof x != "symbol" ? x + "" : x, t);
const a = K;
(function(o, x) {
  const t = K, r = o();
  for (; ; )
    try {
      if (parseInt(t(2028)) / 1 * (-parseInt(t(1827)) / 2) + -parseInt(t(2642)) / 3 + -parseInt(t(2471)) / 4 + -parseInt(t(2474)) / 5 + -parseInt(t(1099)) / 6 * (-parseInt(t(2682)) / 7) + -parseInt(t(813)) / 8 + parseInt(t(1641)) / 9 === x) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Nx, 305767);
const N0 = window[a(930)].app[a(400)];
window.comfyAPI.ui[a(180)];
const Re = window.comfyAPI[a(724)].api;
class Mn {
  constructor(x) {
    m0(this, "definition");
    const t = a;
    this[t(2814)] = x;
    const r = this[t(2621)]();
    if (!r.valid) throw new Error(t(963) + r[t(1672)].join(", "));
  }
  [a(2621)]() {
    const x = a, t = [];
    (!this.definition[x(1102)] || Object[x(750)](this[x(2814)][x(1102)])[x(692)] === 0) && t.push("Graph must have at least one node");
    for (const [e, s] of this[x(2814)][x(1992)])
      !this[x(2814)][x(1102)][e] && t[x(452)](x(1427) + e), !this[x(2814)][x(1102)][s] && t[x(452)](x(915) + s);
    const r = this[x(2710)]();
    return !r[x(614)] && t[x(452)](...r.errors), { valid: t[x(692)] === 0, errors: t };
  }
  [a(2112)]() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const r of Object.keys(this[x(2814)][x(1102)]))
      t[x(758)](r, []);
    for (const [r, e] of this[x(2814)].edges) {
      const s = t[x(1075)](r) || [];
      s[x(452)](e), t[x(758)](r, s);
    }
    return t;
  }
  [a(2710)]() {
    const x = a, t = [], r = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), s = this[x(2112)](), n = (i, c) => {
      const u = x;
      if (e[u(2075)](i)) {
        const f = c.indexOf(i), l = c[u(2088)](f)[u(2044)](i);
        return t.push(u(1676) + l[u(2137)](u(2718))), !0;
      }
      if (r.has(i)) return !1;
      r[u(2655)](i), e[u(2655)](i);
      const d = s[u(1075)](i) || [];
      for (const f of d)
        if (n(f, [...c, i])) return !0;
      return e[u(2215)](i), !1;
    };
    for (const i of Object[x(750)](this[x(2814)][x(1102)]))
      !r[x(2075)](i) && n(i, []);
    return { valid: t[x(692)] === 0, errors: t };
  }
  [a(1740)]() {
    const x = a, t = /* @__PURE__ */ new Map();
    for (const r of Object[x(750)](this[x(2814)][x(1102)]))
      t.set(r, []);
    for (const [r, e] of this[x(2814)].edges) {
      const s = t[x(1075)](r) || [];
      s.push(e), t[x(758)](r, s);
      const n = t.get(e) || [];
      n.push(r), t[x(758)](e, n);
    }
    return t;
  }
  [a(1683)](x) {
    const t = a;
    return this.buildAdjacencyList()[t(1075)](x) || [];
  }
  [a(1366)](x) {
    const t = a;
    return this[t(2814)][t(1102)][x];
  }
  [a(2484)]() {
    const x = a;
    return Object[x(750)](this.definition[x(1102)]);
  }
  [a(2360)](x, t) {
    const r = a;
    return this.definition[r(1992)].some(([e, s]) => e === x && s === t || e === t && s === x);
  }
  [a(2545)](x, t) {
    const r = a;
    if (x === t) return [x];
    const e = this[r(1740)](), s = [{ nodeId: x, path: [x] }], n = /* @__PURE__ */ new Set();
    for (; s.length > 0; ) {
      const { nodeId: i, path: c } = s[r(252)]();
      if (n[r(2075)](i)) continue;
      if (n[r(2655)](i), i === t) return c;
      const u = e[r(1075)](i) || [];
      for (const d of u)
        !n.has(d) && s.push({ nodeId: d, path: [...c, d] });
    }
    return null;
  }
  [a(1489)](x, t) {
    return this[a(2545)](x, t) !== null;
  }
  [a(1655)]() {
    return { ...this[a(2814)] };
  }
}
const Ra = (o) => {
  let x;
  const t = /* @__PURE__ */ new Set(), r = (u, d) => {
    const f = K, l = typeof u === f(1622) ? u(x) : u;
    if (!Object.is(l, x)) {
      const b = x;
      x = d ?? (typeof l != "object" || l === null) ? l : Object[f(1191)]({}, x, l), t[f(1471)]((h) => h(x, b));
    }
  }, e = () => x, s = () => c, n = (u) => {
    const d = K;
    return t.add(u), () => t[d(2215)](u);
  }, i = { setState: r, getState: e, getInitialState: s, subscribe: n }, c = x = o(r, e, i);
  return i;
}, Ln = (o) => o ? Ra(o) : Ra;
var T0;
(function(o) {
  const x = a;
  o[x(2151)] = (s) => {
  };
  function t(s) {
  }
  o[x(2570)] = t;
  function r(s) {
    throw new Error();
  }
  o[x(2266)] = r, o[x(1692)] = (s) => {
    const n = {};
    for (const i of s)
      n[i] = i;
    return n;
  }, o.getValidEnumValues = (s) => {
    const n = x, i = o[n(1339)](s)[n(2145)]((u) => typeof s[s[u]] !== n(2153)), c = {};
    for (const u of i)
      c[u] = s[u];
    return o[n(925)](c);
  }, o[x(925)] = (s) => {
    const n = x;
    return o[n(1339)](s)[n(1649)](function(i) {
      return s[i];
    });
  }, o.objectKeys = typeof Object[x(750)] === x(1622) ? (s) => Object[x(750)](s) : (s) => {
    const n = x, i = [];
    for (const c in s)
      Object[n(2249)][n(873)].call(s, c) && i[n(452)](c);
    return i;
  }, o.find = (s, n) => {
    for (const i of s)
      if (n(i)) return i;
  }, o.isInteger = typeof Number[x(2844)] === x(1622) ? (s) => Number[x(2844)](s) : (s) => typeof s === x(2153) && Number[x(1812)](s) && Math[x(635)](s) === s;
  function e(s, n = x(949)) {
    const i = x;
    return s[i(1649)]((c) => typeof c === i(2161) ? "'" + c + "'" : c)[i(2137)](n);
  }
  o.joinValues = e, o[x(2392)] = (s, n) => {
    const i = x;
    return typeof n === i(1033) ? n[i(766)]() : n;
  };
})(T0 || (T0 = {}));
var Ca;
(function(o) {
  const x = a;
  o[x(2462)] = (t, r) => ({ ...t, ...r });
})(Ca || (Ca = {}));
const a0 = T0[a(1692)](["string", a(281), a(2153), "integer", a(2543), a(1146), "date", a(1033), "symbol", "function", a(420), a(845), a(973), a(544), "unknown", a(2447), a(2445), "never", a(1649), "set"]), Ee = (o) => {
  const x = a;
  switch (typeof o) {
    case "undefined":
      return a0[x(420)];
    case x(2161):
      return a0[x(2161)];
    case x(2153):
      return Number.isNaN(o) ? a0.nan : a0[x(2153)];
    case x(1146):
      return a0[x(1146)];
    case x(1622):
      return a0[x(1622)];
    case x(1033):
      return a0[x(1033)];
    case x(1100):
      return a0[x(1100)];
    case x(544):
      return Array.isArray(o) ? a0[x(973)] : o === null ? a0[x(845)] : o.then && typeof o[x(2403)] == "function" && o[x(1995)] && typeof o[x(1995)] === x(1622) ? a0[x(2447)] : typeof Map !== x(420) && o instanceof Map ? a0.map : typeof Set !== x(420) && o instanceof Set ? a0[x(758)] : typeof Date !== x(420) && o instanceof Date ? a0[x(959)] : a0.object;
    default:
      return a0[x(247)];
  }
}, Z = T0[a(1692)]([a(1801), a(2051), a(806), a(2771), a(1509), a(353), a(354), a(2383), "invalid_return_type", a(2839), a(2233), a(1057), a(175), "invalid_intersection_types", a(1875), a(1650)]);
class ke extends Error {
  get [a(1672)]() {
    return this[a(1157)];
  }
  constructor(x) {
    const t = a;
    super(), this[t(1157)] = [], this[t(2847)] = (e) => {
      const s = t;
      this[s(1157)] = [...this[s(1157)], e];
    }, this[t(351)] = (e = []) => {
      const s = t;
      this[s(1157)] = [...this[s(1157)], ...e];
    };
    const r = new.target.prototype;
    Object[t(188)] ? Object[t(188)](this, r) : this[t(1549)] = r, this.name = t(1708), this[t(1157)] = x;
  }
  [a(2197)](x) {
    const t = x || function(s) {
      return s.message;
    }, r = { _errors: [] }, e = (s) => {
      const n = K;
      for (const i of s[n(1157)])
        if (i.code === "invalid_union") i[n(2117)][n(1649)](e);
        else if (i[n(1172)] === n(2097)) e(i.returnTypeError);
        else if (i[n(1172)] === n(2383)) e(i.argumentsError);
        else if (i.path[n(692)] === 0) r[n(1507)][n(452)](t(i));
        else {
          let c = r, u = 0;
          for (; u < i[n(2619)][n(692)]; ) {
            const d = i.path[u];
            u === i.path[n(692)] - 1 ? (c[d] = c[d] || { _errors: [] }, c[d]._errors[n(452)](t(i))) : c[d] = c[d] || { _errors: [] }, c = c[d], u++;
          }
        }
    };
    return e(this), r;
  }
  static [a(1930)](x) {
    const t = a;
    if (!(x instanceof ke)) throw new Error(t(227) + x);
  }
  [a(766)]() {
    return this[a(225)];
  }
  get message() {
    const x = a;
    return JSON[x(2625)](this[x(1157)], T0[x(2392)], 2);
  }
  get [a(401)]() {
    const x = a;
    return this[x(1157)][x(692)] === 0;
  }
  [a(849)](x = (t) => t.message) {
    const t = a, r = {}, e = [];
    for (const s of this.issues)
      if (s.path[t(692)] > 0) {
        const n = s[t(2619)][0];
        r[n] = r[n] || [], r[n].push(x(s));
      } else e[t(452)](x(s));
    return { formErrors: e, fieldErrors: r };
  }
  get [a(1165)]() {
    return this[a(849)]();
  }
}
ke.create = (o) => new ke(o);
const Ut = (o, x) => {
  const t = a;
  let r;
  switch (o.code) {
    case Z[t(1801)]:
      o[t(2848)] === a0.undefined ? r = t(231) : r = t(970) + o[t(1085)] + t(1785) + o[t(2848)];
      break;
    case Z[t(2051)]:
      r = t(821) + JSON[t(2625)](o[t(1085)], T0[t(2392)]);
      break;
    case Z[t(354)]:
      r = t(1175) + T0[t(1162)](o[t(750)], ", ");
      break;
    case Z.invalid_union:
      r = "Invalid input";
      break;
    case Z.invalid_union_discriminator:
      r = t(1959) + T0[t(1162)](o[t(1005)]);
      break;
    case Z[t(353)]:
      r = t(2076) + T0[t(1162)](o.options) + t(1493) + o[t(2848)] + "'";
      break;
    case Z[t(2383)]:
      r = t(1348);
      break;
    case Z.invalid_return_type:
      r = t(1083);
      break;
    case Z.invalid_date:
      r = "Invalid date";
      break;
    case Z[t(2233)]:
      typeof o[t(1711)] === t(544) ? "includes" in o[t(1711)] ? (r = t(1097) + o[t(1711)][t(1150)] + '"', typeof o[t(1711)][t(467)] === t(2153) && (r = r + t(568) + o.validation[t(467)])) : t(1955) in o[t(1711)] ? r = 'Invalid input: must start with "' + o[t(1711)][t(1955)] + '"' : t(1451) in o[t(1711)] ? r = t(1869) + o[t(1711)][t(1451)] + '"' : T0[t(2266)](o.validation) : o[t(1711)] !== t(2764) ? r = t(831) + o.validation : r = t(171);
      break;
    case Z[t(1057)]:
      o[t(612)] === t(973) ? r = t(1591) + (o[t(1084)] ? t(1195) : o[t(1362)] ? t(267) : t(1948)) + " " + o[t(546)] + t(2045) : o[t(612)] === t(2161) ? r = "String must contain " + (o[t(1084)] ? t(1195) : o[t(1362)] ? t(267) : t(498)) + " " + o.minimum + t(1728) : o[t(612)] === t(2153) ? r = "Number must be " + (o[t(1084)] ? t(2144) : o[t(1362)] ? t(578) : "greater than ") + o[t(546)] : o[t(612)] === "bigint" ? r = t(1770) + (o[t(1084)] ? t(2144) : o[t(1362)] ? t(578) : "greater than ") + o[t(546)] : o.type === t(959) ? r = t(668) + (o[t(1084)] ? t(2144) : o[t(1362)] ? "greater than or equal to " : t(874)) + new Date(Number(o[t(546)])) : r = t(2657);
      break;
    case Z.too_big:
      o.type === "array" ? r = t(1591) + (o[t(1084)] ? t(1195) : o[t(1362)] ? t(1093) : t(1636)) + " " + o[t(2536)] + " element(s)" : o.type === t(2161) ? r = t(557) + (o[t(1084)] ? t(1195) : o.inclusive ? "at most" : t(1177)) + " " + o.maximum + t(1728) : o[t(612)] === t(2153) ? r = t(1770) + (o[t(1084)] ? "exactly" : o[t(1362)] ? t(1161) : t(1636)) + " " + o[t(2536)] : o[t(612)] === t(1033) ? r = t(726) + (o[t(1084)] ? t(1195) : o[t(1362)] ? t(1161) : "less than") + " " + o[t(2536)] : o[t(612)] === t(959) ? r = t(668) + (o[t(1084)] ? t(1195) : o.inclusive ? t(304) : t(1159)) + " " + new Date(Number(o[t(2536)])) : r = t(2657);
      break;
    case Z[t(806)]:
      r = t(2657);
      break;
    case Z[t(2121)]:
      r = t(2773);
      break;
    case Z[t(1875)]:
      r = "Number must be a multiple of " + o[t(888)];
      break;
    case Z[t(1650)]:
      r = t(1997);
      break;
    default:
      r = x[t(2641)], T0[t(2266)](o);
  }
  return { message: r };
};
let $n = Ut;
function Un() {
  return $n;
}
const Hn = (o) => {
  const x = a, { data: t, path: r, errorMaps: e, issueData: s } = o, n = [...r, ...s[x(2619)] || []], i = { ...s, path: n };
  if (s[x(225)] !== void 0) return { ...s, path: n, message: s[x(225)] };
  let c = "";
  const u = e[x(2145)]((d) => !!d)[x(2088)]().reverse();
  for (const d of u)
    c = d(i, { data: t, defaultError: c })[x(225)];
  return { ...s, path: n, message: c };
};
function Y(o, x) {
  const t = a, r = Un(), e = Hn({ issueData: x, data: o[t(909)], path: o.path, errorMaps: [o[t(2421)][t(2362)], o[t(590)], r, r === Ut ? void 0 : Ut][t(2145)]((s) => !!s) });
  o[t(2421)].issues.push(e);
}
class ee {
  constructor() {
    const x = a;
    this[x(1732)] = x(614);
  }
  [a(1357)]() {
    const x = a;
    this[x(1732)] === "valid" && (this[x(1732)] = x(1357));
  }
  [a(1284)]() {
    const x = a;
    this.value !== x(532) && (this[x(1732)] = x(532));
  }
  static mergeArray(x, t) {
    const r = a, e = [];
    for (const s of t) {
      if (s[r(2861)] === r(532)) return h0;
      s[r(2861)] === "dirty" && x[r(1357)](), e[r(452)](s[r(1732)]);
    }
    return { status: x[r(1732)], value: e };
  }
  static async [a(1917)](x, t) {
    const r = a, e = [];
    for (const s of t) {
      const n = await s.key, i = await s[r(1732)];
      e[r(452)]({ key: n, value: i });
    }
    return ee[r(565)](x, e);
  }
  static [a(565)](x, t) {
    const r = a, e = {};
    for (const s of t) {
      const { key: n, value: i } = s;
      if (n.status === r(532) || i.status === "aborted") return h0;
      n[r(2861)] === r(1357) && x[r(1357)](), i[r(2861)] === "dirty" && x[r(1357)](), n[r(1732)] !== r(1549) && (typeof i[r(1732)] !== r(420) || s[r(2884)]) && (e[n[r(1732)]] = i[r(1732)]);
    }
    return { status: x[r(1732)], value: e };
  }
}
const h0 = Object.freeze({ status: "aborted" }), Qe = (o) => ({ status: "dirty", value: o }), ae = (o) => ({ status: a(614), value: o }), Fa = (o) => o[a(2861)] === a(532), Na = (o) => o[a(2861)] === a(1357), Ve = (o) => o.status === a(614), bx = (o) => typeof Promise !== a(420) && o instanceof Promise;
var r0;
(function(o) {
  const x = a;
  o[x(1053)] = (t) => typeof t == "string" ? { message: t } : t || {}, o[x(766)] = (t) => typeof t == "string" ? t : t == null ? void 0 : t[x(225)];
})(r0 || (r0 = {}));
class he {
  constructor(x, t, r, e) {
    const s = a;
    this[s(216)] = [], this[s(1207)] = x, this.data = t, this[s(2156)] = r, this[s(2868)] = e;
  }
  get [a(2619)]() {
    const x = a;
    return !this[x(216)][x(692)] && (Array.isArray(this[x(2868)]) ? this[x(216)].push(...this._path, ...this._key) : this[x(216)].push(...this[x(2156)], this[x(2868)])), this._cachedPath;
  }
}
const Ta = (o, x) => {
  const t = a;
  if (Ve(x)) return { success: !0, data: x[t(1732)] };
  if (!o[t(2421)][t(1157)][t(692)]) throw new Error(t(1454));
  return { success: !1, get error() {
    const r = t;
    if (this[r(1934)]) return this[r(1934)];
    const e = new ke(o[r(2421)][r(1157)]);
    return this._error = e, this[r(1934)];
  } };
};
function y0(o) {
  const x = a;
  if (!o) return {};
  const { errorMap: t, invalid_type_error: r, required_error: e, description: s } = o;
  if (t && (r || e)) throw new Error(x(295));
  return t ? { errorMap: t, description: s } : { errorMap: (i, c) => {
    const u = x, { message: d } = o;
    return i[u(1172)] === "invalid_enum_value" ? { message: d ?? c[u(2641)] } : typeof c[u(909)] === u(420) ? { message: d ?? e ?? c[u(2641)] } : i[u(1172)] !== u(1801) ? { message: c[u(2641)] } : { message: d ?? r ?? c[u(2641)] };
  }, description: s };
}
class C0 {
  get description() {
    return this._def.description;
  }
  [a(1640)](x) {
    return Ee(x.data);
  }
  _getOrReturnCtx(x, t) {
    const r = a;
    return t || { common: x[r(1207)][r(2421)], data: x[r(909)], parsedType: Ee(x[r(909)]), schemaErrorMap: this[r(775)].errorMap, path: x[r(2619)], parent: x.parent };
  }
  [a(1020)](x) {
    const t = a;
    return { status: new ee(), ctx: { common: x.parent[t(2421)], data: x[t(909)], parsedType: Ee(x[t(909)]), schemaErrorMap: this[t(775)][t(1653)], path: x[t(2619)], parent: x[t(1207)] } };
  }
  _parseSync(x) {
    const t = a, r = this[t(1594)](x);
    if (bx(r)) throw new Error(t(917));
    return r;
  }
  [a(1098)](x) {
    const t = a, r = this[t(1594)](x);
    return Promise.resolve(r);
  }
  [a(706)](x, t) {
    const r = a, e = this[r(2373)](x, t);
    if (e[r(377)]) return e[r(909)];
    throw e[r(948)];
  }
  [a(2373)](x, t) {
    const r = a, e = { common: { issues: [], async: (t == null ? void 0 : t[r(1973)]) ?? !1, contextualErrorMap: t == null ? void 0 : t.errorMap }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this[r(775)][r(1653)], parent: null, data: x, parsedType: Ee(x) }, s = this[r(2802)]({ data: x, path: e[r(2619)], parent: e });
    return Ta(e, s);
  }
  [a(1792)](x) {
    var e, s;
    const t = a, r = { common: { issues: [], async: !!this[t(372)][t(1973)] }, path: [], schemaErrorMap: this[t(775)][t(1653)], parent: null, data: x, parsedType: Ee(x) };
    if (!this[t(372)][t(1973)]) try {
      const n = this[t(2802)]({ data: x, path: [], parent: r });
      return Ve(n) ? { value: n[t(1732)] } : { issues: r[t(2421)][t(1157)] };
    } catch (n) {
      (s = (e = n == null ? void 0 : n[t(225)]) == null ? void 0 : e.toLowerCase()) != null && s[t(1150)](t(447)) && (this[t(372)][t(1973)] = !0), r.common = { issues: [], async: !0 };
    }
    return this[t(1098)]({ data: x, path: [], parent: r })[t(2403)]((n) => Ve(n) ? { value: n[t(1732)] } : { issues: r[t(2421)][t(1157)] });
  }
  async parseAsync(x, t) {
    const r = a, e = await this[r(1741)](x, t);
    if (e[r(377)]) return e[r(909)];
    throw e.error;
  }
  async [a(1741)](x, t) {
    const r = a, e = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t.errorMap, async: !0 }, path: (t == null ? void 0 : t[r(2619)]) || [], schemaErrorMap: this[r(775)].errorMap, parent: null, data: x, parsedType: Ee(x) }, s = this[r(1594)]({ data: x, path: e[r(2619)], parent: e }), n = await (bx(s) ? s : Promise[r(1571)](s));
    return Ta(e, n);
  }
  [a(1703)](x, t) {
    const r = a, e = (s) => {
      const n = K;
      return typeof t === n(2161) || typeof t > "u" ? { message: t } : typeof t === n(1622) ? t(s) : t;
    };
    return this[r(2737)]((s, n) => {
      const i = r, c = x(s), u = () => n[i(2847)]({ code: Z[i(806)], ...e(s) });
      return typeof Promise !== i(420) && c instanceof Promise ? c[i(2403)]((d) => d ? !0 : (u(), !1)) : c ? !0 : (u(), !1);
    });
  }
  [a(414)](x, t) {
    const r = a;
    return this[r(2737)]((e, s) => {
      const n = r;
      return x(e) ? !0 : (s[n(2847)](typeof t === n(1622) ? t(e, s) : t), !1);
    });
  }
  [a(2737)](x) {
    const t = a;
    return new qe({ schema: this, typeName: p0[t(2720)], effect: { type: t(414), refinement: x } });
  }
  [a(1874)](x) {
    return this[a(2737)](x);
  }
  constructor(x) {
    const t = a;
    this[t(1921)] = this[t(1741)], this[t(775)] = x, this.parse = this[t(706)].bind(this), this[t(2373)] = this.safeParse.bind(this), this[t(183)] = this.parseAsync[t(2488)](this), this[t(1741)] = this[t(1741)].bind(this), this.spa = this[t(1921)][t(2488)](this), this[t(1703)] = this[t(1703)][t(2488)](this), this[t(414)] = this[t(414)].bind(this), this[t(1874)] = this[t(1874)][t(2488)](this), this[t(1027)] = this[t(1027)][t(2488)](this), this[t(1864)] = this[t(1864)].bind(this), this[t(2227)] = this[t(2227)][t(2488)](this), this[t(973)] = this.array.bind(this), this[t(2447)] = this[t(2447)][t(2488)](this), this.or = this.or[t(2488)](this), this[t(1898)] = this.and[t(2488)](this), this.transform = this[t(538)][t(2488)](this), this[t(2418)] = this[t(2418)][t(2488)](this), this.default = this[t(1944)].bind(this), this.catch = this[t(1995)][t(2488)](this), this[t(190)] = this[t(190)][t(2488)](this), this.pipe = this.pipe[t(2488)](this), this.readonly = this[t(2388)][t(2488)](this), this[t(1123)] = this[t(1123)][t(2488)](this), this[t(2608)] = this[t(2608)][t(2488)](this), this[t(372)] = { version: 1, vendor: t(1782), validate: (r) => this["~validate"](r) };
  }
  [a(1027)]() {
    const x = a;
    return we.create(this, this[x(775)]);
  }
  nullable() {
    const x = a;
    return De[x(665)](this, this[x(775)]);
  }
  [a(2227)]() {
    const x = a;
    return this[x(1864)]()[x(1027)]();
  }
  [a(973)]() {
    return le[a(665)](this);
  }
  promise() {
    const x = a;
    return kx[x(665)](this, this[x(775)]);
  }
  or(x) {
    const t = a;
    return yx.create([this, x], this[t(775)]);
  }
  [a(1898)](x) {
    const t = a;
    return vx[t(665)](this, x, this[t(775)]);
  }
  transform(x) {
    const t = a;
    return new qe({ ...y0(this[t(775)]), schema: this, typeName: p0[t(2720)], effect: { type: t(538), transform: x } });
  }
  [a(1944)](x) {
    const t = a, r = typeof x === t(1622) ? x : () => x;
    return new Px({ ...y0(this[t(775)]), innerType: this, defaultValue: r, typeName: p0.ZodDefault });
  }
  [a(2418)]() {
    const x = a;
    return new Ls({ typeName: p0[x(882)], type: this, ...y0(this[x(775)]) });
  }
  [a(1995)](x) {
    const t = a, r = typeof x === t(1622) ? x : () => x;
    return new Ix({ ...y0(this._def), innerType: this, catchValue: r, typeName: p0.ZodCatch });
  }
  [a(190)](x) {
    const t = a, r = this[t(599)];
    return new r({ ...this[t(775)], description: x });
  }
  [a(385)](x) {
    return oa[a(665)](this, x);
  }
  [a(2388)]() {
    return Ex.create(this);
  }
  [a(2608)]() {
    const x = a;
    return this[x(2373)](void 0)[x(377)];
  }
  [a(1123)]() {
    const x = a;
    return this.safeParse(null)[x(377)];
  }
}
const zn = /^c[^\s-]{8,}$/i, Vn = /^[0-9a-z]+$/, Bn = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Zn = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Wn = /^[a-z0-9_-]{21}$/i, Kn = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Gn = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Jn = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Qn = a(644);
let $x;
const Xn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Yn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, eo = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, xo = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, to = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ao = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ds = a(2280), ro = new RegExp("^" + Ds + "$");
function js(o) {
  const x = a;
  let t = x(404);
  o[x(1466)] ? t = t + "\\.\\d{" + o[x(1466)] + "}" : o[x(1466)] == null && (t = t + x(333));
  const r = o[x(1466)] ? "+" : "?";
  return "([01]\\d|2[0-3]):[0-5]\\d(:" + t + ")" + r;
}
function so(o) {
  return new RegExp("^" + js(o) + "$");
}
function no(o) {
  const x = a;
  let t = Ds + "T" + js(o);
  const r = [];
  return r[x(452)](o[x(253)] ? "Z?" : "Z"), o[x(1142)] && r[x(452)](x(1765)), t = t + "(" + r[x(2137)]("|") + ")", new RegExp("^" + t + "$");
}
function oo(o, x) {
  const t = a;
  return !!((x === "v4" || !x) && Xn[t(1904)](o) || (x === "v6" || !x) && eo[t(1904)](o));
}
function io(o, x) {
  const t = a;
  if (!Kn[t(1904)](o)) return !1;
  try {
    const [r] = o[t(628)](".");
    if (!r) return !1;
    const e = r[t(575)](/-/g, "+")[t(575)](/_/g, "/")[t(952)](r[t(692)] + (4 - r[t(692)] % 4) % 4, "="), s = JSON.parse(atob(e));
    return !(typeof s !== t(544) || s === null || t(1117) in s && (s == null ? void 0 : s.typ) !== t(510) || !s.alg || x && s.alg !== x);
  } catch {
    return !1;
  }
}
function co(o, x) {
  const t = a;
  return !!((x === "v4" || !x) && Yn[t(1904)](o) || (x === "v6" || !x) && xo[t(1904)](o));
}
class ve extends C0 {
  _parse(x) {
    const t = a;
    if (this[t(775)].coerce && (x[t(909)] = String(x[t(909)])), this[t(1640)](x) !== a0[t(2161)]) {
      const n = this[t(1350)](x);
      return Y(n, { code: Z[t(1801)], expected: a0[t(2161)], received: n[t(2573)] }), h0;
    }
    const e = new ee();
    let s;
    for (const n of this[t(775)].checks)
      if (n.kind === t(1279)) x.data[t(692)] < n[t(1732)] && (s = this[t(1350)](x, s), Y(s, { code: Z[t(1057)], minimum: n.value, type: t(2161), inclusive: !0, exact: !1, message: n[t(225)] }), e[t(1357)]());
      else if (n.kind === "max") x[t(909)].length > n[t(1732)] && (s = this._getOrReturnCtx(x, s), Y(s, { code: Z.too_big, maximum: n[t(1732)], type: "string", inclusive: !0, exact: !1, message: n[t(225)] }), e[t(1357)]());
      else if (n[t(1214)] === t(692)) {
        const i = x[t(909)][t(692)] > n.value, c = x[t(909)].length < n[t(1732)];
        (i || c) && (s = this[t(1350)](x, s), i ? Y(s, { code: Z[t(175)], maximum: n[t(1732)], type: t(2161), inclusive: !0, exact: !0, message: n[t(225)] }) : c && Y(s, { code: Z[t(1057)], minimum: n.value, type: t(2161), inclusive: !0, exact: !0, message: n[t(225)] }), e[t(1357)]());
      } else if (n.kind === t(2146)) !Jn[t(1904)](x[t(909)]) && (s = this._getOrReturnCtx(x, s), Y(s, { validation: "email", code: Z[t(2233)], message: n.message }), e[t(1357)]());
      else if (n[t(1214)] === t(1301)) !$x && ($x = new RegExp(Qn, "u")), !$x[t(1904)](x[t(909)]) && (s = this._getOrReturnCtx(x, s), Y(s, { validation: t(1301), code: Z[t(2233)], message: n.message }), e[t(1357)]());
      else if (n.kind === t(431)) !Zn[t(1904)](x[t(909)]) && (s = this[t(1350)](x, s), Y(s, { validation: t(431), code: Z[t(2233)], message: n[t(225)] }), e.dirty());
      else if (n.kind === t(1046)) !Wn[t(1904)](x.data) && (s = this[t(1350)](x, s), Y(s, { validation: t(1046), code: Z[t(2233)], message: n[t(225)] }), e[t(1357)]());
      else if (n[t(1214)] === "cuid") !zn[t(1904)](x.data) && (s = this[t(1350)](x, s), Y(s, { validation: t(1488), code: Z.invalid_string, message: n.message }), e[t(1357)]());
      else if (n[t(1214)] === t(2762)) !Vn[t(1904)](x[t(909)]) && (s = this[t(1350)](x, s), Y(s, { validation: "cuid2", code: Z[t(2233)], message: n.message }), e.dirty());
      else if (n[t(1214)] === t(2104)) !Bn.test(x[t(909)]) && (s = this[t(1350)](x, s), Y(s, { validation: "ulid", code: Z[t(2233)], message: n.message }), e[t(1357)]());
      else if (n[t(1214)] === t(2638)) try {
        new URL(x.data);
      } catch {
        s = this[t(1350)](x, s), Y(s, { validation: "url", code: Z.invalid_string, message: n[t(225)] }), e[t(1357)]();
      }
      else
        n[t(1214)] === t(2764) ? (n[t(2764)].lastIndex = 0, !n.regex[t(1904)](x[t(909)]) && (s = this._getOrReturnCtx(x, s), Y(s, { validation: t(2764), code: Z[t(2233)], message: n.message }), e[t(1357)]())) : n[t(1214)] === t(2444) ? x[t(909)] = x[t(909)][t(2444)]() : n[t(1214)] === t(1150) ? !x.data.includes(n[t(1732)], n[t(467)]) && (s = this[t(1350)](x, s), Y(s, { code: Z.invalid_string, validation: { includes: n[t(1732)], position: n[t(467)] }, message: n[t(225)] }), e[t(1357)]()) : n[t(1214)] === t(556) ? x[t(909)] = x[t(909)].toLowerCase() : n[t(1214)] === t(2520) ? x[t(909)] = x[t(909)][t(2520)]() : n[t(1214)] === t(1955) ? !x[t(909)][t(1955)](n[t(1732)]) && (s = this[t(1350)](x, s), Y(s, { code: Z[t(2233)], validation: { startsWith: n.value }, message: n.message }), e[t(1357)]()) : n[t(1214)] === t(1451) ? !x[t(909)][t(1451)](n[t(1732)]) && (s = this._getOrReturnCtx(x, s), Y(s, { code: Z[t(2233)], validation: { endsWith: n[t(1732)] }, message: n.message }), e[t(1357)]()) : n[t(1214)] === "datetime" ? !no(n).test(x[t(909)]) && (s = this._getOrReturnCtx(x, s), Y(s, { code: Z[t(2233)], validation: t(2455), message: n.message }), e.dirty()) : n[t(1214)] === t(959) ? !ro.test(x[t(909)]) && (s = this._getOrReturnCtx(x, s), Y(s, { code: Z[t(2233)], validation: "date", message: n[t(225)] }), e[t(1357)]()) : n[t(1214)] === t(289) ? !so(n)[t(1904)](x[t(909)]) && (s = this[t(1350)](x, s), Y(s, { code: Z[t(2233)], validation: t(289), message: n.message }), e[t(1357)]()) : n[t(1214)] === t(1568) ? !Gn[t(1904)](x[t(909)]) && (s = this._getOrReturnCtx(x, s), Y(s, { validation: t(1568), code: Z[t(2233)], message: n[t(225)] }), e[t(1357)]()) : n[t(1214)] === "ip" ? !oo(x[t(909)], n[t(685)]) && (s = this[t(1350)](x, s), Y(s, { validation: "ip", code: Z[t(2233)], message: n[t(225)] }), e[t(1357)]()) : n[t(1214)] === "jwt" ? !io(x.data, n.alg) && (s = this[t(1350)](x, s), Y(s, { validation: "jwt", code: Z[t(2233)], message: n.message }), e[t(1357)]()) : n.kind === "cidr" ? !co(x[t(909)], n[t(685)]) && (s = this[t(1350)](x, s), Y(s, { validation: t(2438), code: Z[t(2233)], message: n[t(225)] }), e[t(1357)]()) : n.kind === t(1129) ? !to[t(1904)](x[t(909)]) && (s = this[t(1350)](x, s), Y(s, { validation: "base64", code: Z[t(2233)], message: n[t(225)] }), e[t(1357)]()) : n[t(1214)] === t(2316) ? !ao[t(1904)](x[t(909)]) && (s = this[t(1350)](x, s), Y(s, { validation: t(2316), code: Z[t(2233)], message: n[t(225)] }), e[t(1357)]()) : T0.assertNever(n);
    return { status: e[t(1732)], value: x[t(909)] };
  }
  [a(2087)](x, t, r) {
    const e = a;
    return this[e(414)]((s) => x.test(s), { validation: t, code: Z[e(2233)], ...r0.errToObj(r) });
  }
  [a(1675)](x) {
    const t = a;
    return new ve({ ...this[t(775)], checks: [...this._def[t(1359)], x] });
  }
  [a(2146)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(2146), ...r0[t(1053)](x) });
  }
  [a(2638)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(2638), ...r0[t(1053)](x) });
  }
  [a(1301)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(1301), ...r0.errToObj(x) });
  }
  [a(431)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(431), ...r0[t(1053)](x) });
  }
  nanoid(x) {
    const t = a;
    return this._addCheck({ kind: "nanoid", ...r0[t(1053)](x) });
  }
  [a(1488)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(1488), ...r0[t(1053)](x) });
  }
  [a(2762)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(2762), ...r0.errToObj(x) });
  }
  [a(2104)](x) {
    const t = a;
    return this._addCheck({ kind: t(2104), ...r0[t(1053)](x) });
  }
  [a(1129)](x) {
    const t = a;
    return this[t(1675)]({ kind: "base64", ...r0[t(1053)](x) });
  }
  [a(2316)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(2316), ...r0.errToObj(x) });
  }
  jwt(x) {
    return this[a(1675)]({ kind: "jwt", ...r0.errToObj(x) });
  }
  ip(x) {
    const t = a;
    return this[t(1675)]({ kind: "ip", ...r0[t(1053)](x) });
  }
  cidr(x) {
    const t = a;
    return this._addCheck({ kind: t(2438), ...r0[t(1053)](x) });
  }
  [a(2455)](x) {
    const t = a;
    return typeof x == "string" ? this[t(1675)]({ kind: t(2455), precision: null, offset: !1, local: !1, message: x }) : this[t(1675)]({ kind: "datetime", precision: typeof (x == null ? void 0 : x[t(1466)]) === t(420) ? null : x == null ? void 0 : x.precision, offset: (x == null ? void 0 : x.offset) ?? !1, local: (x == null ? void 0 : x[t(253)]) ?? !1, ...r0[t(1053)](x == null ? void 0 : x[t(225)]) });
  }
  [a(959)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(959), message: x });
  }
  time(x) {
    const t = a;
    return typeof x === t(2161) ? this[t(1675)]({ kind: t(289), precision: null, message: x }) : this[t(1675)]({ kind: t(289), precision: typeof (x == null ? void 0 : x[t(1466)]) > "u" ? null : x == null ? void 0 : x.precision, ...r0[t(1053)](x == null ? void 0 : x.message) });
  }
  [a(1568)](x) {
    return this[a(1675)]({ kind: "duration", ...r0.errToObj(x) });
  }
  [a(2764)](x, t) {
    const r = a;
    return this[r(1675)]({ kind: r(2764), regex: x, ...r0[r(1053)](t) });
  }
  [a(1150)](x, t) {
    const r = a;
    return this[r(1675)]({ kind: r(1150), value: x, position: t == null ? void 0 : t[r(467)], ...r0[r(1053)](t == null ? void 0 : t[r(225)]) });
  }
  [a(1955)](x, t) {
    const r = a;
    return this[r(1675)]({ kind: r(1955), value: x, ...r0[r(1053)](t) });
  }
  [a(1451)](x, t) {
    const r = a;
    return this._addCheck({ kind: r(1451), value: x, ...r0.errToObj(t) });
  }
  [a(1279)](x, t) {
    const r = a;
    return this[r(1675)]({ kind: r(1279), value: x, ...r0[r(1053)](t) });
  }
  [a(1393)](x, t) {
    const r = a;
    return this[r(1675)]({ kind: "max", value: x, ...r0[r(1053)](t) });
  }
  [a(692)](x, t) {
    const r = a;
    return this[r(1675)]({ kind: r(692), value: x, ...r0.errToObj(t) });
  }
  nonempty(x) {
    const t = a;
    return this[t(1279)](1, r0[t(1053)](x));
  }
  [a(2444)]() {
    const x = a;
    return new ve({ ...this[x(775)], checks: [...this[x(775)][x(1359)], { kind: "trim" }] });
  }
  [a(556)]() {
    const x = a;
    return new ve({ ...this[x(775)], checks: [...this[x(775)][x(1359)], { kind: x(556) }] });
  }
  toUpperCase() {
    const x = a;
    return new ve({ ...this._def, checks: [...this[x(775)].checks, { kind: x(2520) }] });
  }
  get [a(593)]() {
    const x = a;
    return !!this._def[x(1359)][x(1341)]((t) => t[x(1214)] === x(2455));
  }
  get [a(653)]() {
    const x = a;
    return !!this._def[x(1359)][x(1341)]((t) => t.kind === x(959));
  }
  get [a(1532)]() {
    const x = a;
    return !!this[x(775)][x(1359)][x(1341)]((t) => t.kind === x(289));
  }
  get isDuration() {
    const x = a;
    return !!this._def[x(1359)][x(1341)]((t) => t[x(1214)] === x(1568));
  }
  get isEmail() {
    const x = a;
    return !!this._def[x(1359)].find((t) => t[x(1214)] === "email");
  }
  get [a(380)]() {
    const x = a;
    return !!this._def[x(1359)].find((t) => t[x(1214)] === x(2638));
  }
  get [a(2150)]() {
    const x = a;
    return !!this[x(775)][x(1359)][x(1341)]((t) => t.kind === x(1301));
  }
  get [a(307)]() {
    const x = a;
    return !!this[x(775)].checks[x(1341)]((t) => t[x(1214)] === "uuid");
  }
  get [a(2729)]() {
    const x = a;
    return !!this[x(775)].checks.find((t) => t.kind === x(1046));
  }
  get isCUID() {
    const x = a;
    return !!this[x(775)][x(1359)].find((t) => t.kind === x(1488));
  }
  get [a(1320)]() {
    const x = a;
    return !!this[x(775)][x(1359)][x(1341)]((t) => t.kind === x(2762));
  }
  get [a(1590)]() {
    const x = a;
    return !!this[x(775)][x(1359)].find((t) => t[x(1214)] === x(2104));
  }
  get [a(2135)]() {
    const x = a;
    return !!this[x(775)][x(1359)].find((t) => t[x(1214)] === "ip");
  }
  get isCIDR() {
    const x = a;
    return !!this[x(775)].checks.find((t) => t[x(1214)] === "cidr");
  }
  get [a(2308)]() {
    const x = a;
    return !!this[x(775)][x(1359)][x(1341)]((t) => t[x(1214)] === x(1129));
  }
  get [a(2060)]() {
    const x = a;
    return !!this[x(775)].checks.find((t) => t[x(1214)] === x(2316));
  }
  get [a(2877)]() {
    const x = a;
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r[x(1732)] > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    const x = a;
    let t = null;
    for (const r of this[x(775)].checks)
      r[x(1214)] === x(1393) && (t === null || r[x(1732)] < t) && (t = r.value);
    return t;
  }
}
ve[a(665)] = (o) => {
  const x = a;
  return new ve({ checks: [], typeName: p0[x(439)], coerce: (o == null ? void 0 : o[x(783)]) ?? !1, ...y0(o) });
};
function uo(o, x) {
  const t = a, r = (o[t(766)]()[t(628)](".")[1] || "")[t(692)], e = (x[t(766)]().split(".")[1] || "")[t(692)], s = r > e ? r : e, n = Number[t(2374)](o[t(1789)](s).replace(".", "")), i = Number[t(2374)](x[t(1789)](s)[t(575)](".", ""));
  return n % i / 10 ** s;
}
class Be extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this.min = this[x(2769)], this[x(1393)] = this.lte, this[x(2578)] = this.multipleOf;
  }
  [a(1594)](x) {
    const t = a;
    if (this[t(775)][t(783)] && (x.data = Number(x[t(909)])), this[t(1640)](x) !== a0.number) {
      const n = this._getOrReturnCtx(x);
      return Y(n, { code: Z[t(1801)], expected: a0[t(2153)], received: n.parsedType }), h0;
    }
    let e;
    const s = new ee();
    for (const n of this[t(775)].checks)
      n[t(1214)] === t(1691) ? !T0.isInteger(x.data) && (e = this[t(1350)](x, e), Y(e, { code: Z.invalid_type, expected: t(1449), received: t(2543), message: n[t(225)] }), s[t(1357)]()) : n[t(1214)] === t(1279) ? (n[t(1362)] ? x.data < n.value : x[t(909)] <= n[t(1732)]) && (e = this[t(1350)](x, e), Y(e, { code: Z[t(1057)], minimum: n.value, type: t(2153), inclusive: n[t(1362)], exact: !1, message: n[t(225)] }), s[t(1357)]()) : n.kind === t(1393) ? (n[t(1362)] ? x[t(909)] > n[t(1732)] : x[t(909)] >= n.value) && (e = this[t(1350)](x, e), Y(e, { code: Z[t(175)], maximum: n[t(1732)], type: "number", inclusive: n[t(1362)], exact: !1, message: n[t(225)] }), s.dirty()) : n[t(1214)] === t(888) ? uo(x[t(909)], n.value) !== 0 && (e = this[t(1350)](x, e), Y(e, { code: Z[t(1875)], multipleOf: n[t(1732)], message: n.message }), s[t(1357)]()) : n[t(1214)] === t(2454) ? !Number.isFinite(x[t(909)]) && (e = this[t(1350)](x, e), Y(e, { code: Z[t(1650)], message: n[t(225)] }), s.dirty()) : T0[t(2266)](n);
    return { status: s[t(1732)], value: x[t(909)] };
  }
  [a(2769)](x, t) {
    const r = a;
    return this[r(1548)](r(1279), x, !0, r0[r(766)](t));
  }
  gt(x, t) {
    const r = a;
    return this[r(1548)](r(1279), x, !1, r0[r(766)](t));
  }
  [a(859)](x, t) {
    const r = a;
    return this[r(1548)](r(1393), x, !0, r0[r(766)](t));
  }
  lt(x, t) {
    const r = a;
    return this.setLimit(r(1393), x, !1, r0[r(766)](t));
  }
  [a(1548)](x, t, r, e) {
    const s = a;
    return new Be({ ...this._def, checks: [...this[s(775)][s(1359)], { kind: x, value: t, inclusive: r, message: r0[s(766)](e) }] });
  }
  [a(1675)](x) {
    const t = a;
    return new Be({ ...this._def, checks: [...this._def[t(1359)], x] });
  }
  int(x) {
    return this[a(1675)]({ kind: "int", message: r0.toString(x) });
  }
  [a(786)](x) {
    const t = a;
    return this._addCheck({ kind: t(1279), value: 0, inclusive: !1, message: r0[t(766)](x) });
  }
  [a(1661)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(1393), value: 0, inclusive: !1, message: r0[t(766)](x) });
  }
  [a(266)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(1393), value: 0, inclusive: !0, message: r0[t(766)](x) });
  }
  [a(2105)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(1279), value: 0, inclusive: !0, message: r0[t(766)](x) });
  }
  [a(888)](x, t) {
    const r = a;
    return this._addCheck({ kind: "multipleOf", value: x, message: r0[r(766)](t) });
  }
  [a(2454)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(2454), message: r0[t(766)](x) });
  }
  [a(1024)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(1279), inclusive: !0, value: Number[t(1929)], message: r0.toString(x) })[t(1675)]({ kind: t(1393), inclusive: !0, value: Number[t(2478)], message: r0[t(766)](x) });
  }
  get [a(1071)]() {
    const x = a;
    let t = null;
    for (const r of this[x(775)][x(1359)])
      r[x(1214)] === x(1279) && (t === null || r[x(1732)] > t) && (t = r[x(1732)]);
    return t;
  }
  get [a(241)]() {
    const x = a;
    let t = null;
    for (const r of this[x(775)][x(1359)])
      r[x(1214)] === x(1393) && (t === null || r[x(1732)] < t) && (t = r[x(1732)]);
    return t;
  }
  get [a(2841)]() {
    const x = a;
    return !!this[x(775)][x(1359)][x(1341)]((t) => t[x(1214)] === "int" || t[x(1214)] === "multipleOf" && T0[x(2844)](t[x(1732)]));
  }
  get isFinite() {
    const x = a;
    let t = null, r = null;
    for (const e of this[x(775)][x(1359)]) {
      if (e[x(1214)] === x(2454) || e[x(1214)] === "int" || e[x(1214)] === x(888)) return !0;
      e[x(1214)] === x(1279) ? (r === null || e[x(1732)] > r) && (r = e[x(1732)]) : e.kind === x(1393) && (t === null || e[x(1732)] < t) && (t = e[x(1732)]);
    }
    return Number[x(1812)](r) && Number[x(1812)](t);
  }
}
Be[a(665)] = (o) => {
  const x = a;
  return new Be({ checks: [], typeName: p0[x(2334)], coerce: (o == null ? void 0 : o.coerce) || !1, ...y0(o) });
};
class tx extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(1279)] = this[x(2769)], this[x(1393)] = this[x(859)];
  }
  [a(1594)](x) {
    const t = a;
    if (this[t(775)].coerce) try {
      x[t(909)] = BigInt(x[t(909)]);
    } catch {
      return this[t(1725)](x);
    }
    if (this[t(1640)](x) !== a0.bigint) return this._getInvalidInput(x);
    let e;
    const s = new ee();
    for (const n of this[t(775)].checks)
      n[t(1214)] === "min" ? (n[t(1362)] ? x[t(909)] < n[t(1732)] : x[t(909)] <= n.value) && (e = this[t(1350)](x, e), Y(e, { code: Z[t(1057)], type: t(1033), minimum: n[t(1732)], inclusive: n[t(1362)], message: n.message }), s.dirty()) : n[t(1214)] === t(1393) ? (n[t(1362)] ? x[t(909)] > n[t(1732)] : x.data >= n.value) && (e = this[t(1350)](x, e), Y(e, { code: Z[t(175)], type: t(1033), maximum: n[t(1732)], inclusive: n.inclusive, message: n.message }), s[t(1357)]()) : n[t(1214)] === "multipleOf" ? x.data % n[t(1732)] !== BigInt(0) && (e = this[t(1350)](x, e), Y(e, { code: Z[t(1875)], multipleOf: n[t(1732)], message: n[t(225)] }), s[t(1357)]()) : T0[t(2266)](n);
    return { status: s[t(1732)], value: x[t(909)] };
  }
  [a(1725)](x) {
    const t = a, r = this[t(1350)](x);
    return Y(r, { code: Z.invalid_type, expected: a0[t(1033)], received: r[t(2573)] }), h0;
  }
  [a(2769)](x, t) {
    const r = a;
    return this.setLimit("min", x, !0, r0[r(766)](t));
  }
  gt(x, t) {
    const r = a;
    return this[r(1548)](r(1279), x, !1, r0.toString(t));
  }
  [a(859)](x, t) {
    const r = a;
    return this.setLimit(r(1393), x, !0, r0[r(766)](t));
  }
  lt(x, t) {
    const r = a;
    return this[r(1548)](r(1393), x, !1, r0[r(766)](t));
  }
  setLimit(x, t, r, e) {
    const s = a;
    return new tx({ ...this[s(775)], checks: [...this[s(775)].checks, { kind: x, value: t, inclusive: r, message: r0[s(766)](e) }] });
  }
  [a(1675)](x) {
    const t = a;
    return new tx({ ...this[t(775)], checks: [...this[t(775)].checks, x] });
  }
  positive(x) {
    const t = a;
    return this[t(1675)]({ kind: t(1279), value: BigInt(0), inclusive: !1, message: r0.toString(x) });
  }
  [a(1661)](x) {
    const t = a;
    return this[t(1675)]({ kind: "max", value: BigInt(0), inclusive: !1, message: r0[t(766)](x) });
  }
  [a(266)](x) {
    const t = a;
    return this[t(1675)]({ kind: t(1393), value: BigInt(0), inclusive: !0, message: r0[t(766)](x) });
  }
  [a(2105)](x) {
    const t = a;
    return this._addCheck({ kind: t(1279), value: BigInt(0), inclusive: !0, message: r0[t(766)](x) });
  }
  [a(888)](x, t) {
    const r = a;
    return this[r(1675)]({ kind: r(888), value: x, message: r0[r(766)](t) });
  }
  get [a(1071)]() {
    const x = a;
    let t = null;
    for (const r of this[x(775)][x(1359)])
      r[x(1214)] === x(1279) && (t === null || r.value > t) && (t = r[x(1732)]);
    return t;
  }
  get [a(241)]() {
    const x = a;
    let t = null;
    for (const r of this[x(775)][x(1359)])
      r[x(1214)] === x(1393) && (t === null || r.value < t) && (t = r[x(1732)]);
    return t;
  }
}
tx[a(665)] = (o) => {
  const x = a;
  return new tx({ checks: [], typeName: p0[x(303)], coerce: (o == null ? void 0 : o[x(783)]) ?? !1, ...y0(o) });
};
class Ht extends C0 {
  [a(1594)](x) {
    const t = a;
    if (this[t(775)][t(783)] && (x[t(909)] = !!x.data), this[t(1640)](x) !== a0[t(1146)]) {
      const e = this[t(1350)](x);
      return Y(e, { code: Z.invalid_type, expected: a0[t(1146)], received: e[t(2573)] }), h0;
    }
    return ae(x[t(909)]);
  }
}
Ht[a(665)] = (o) => {
  const x = a;
  return new Ht({ typeName: p0[x(2626)], coerce: (o == null ? void 0 : o[x(783)]) || !1, ...y0(o) });
};
class gx extends C0 {
  [a(1594)](x) {
    const t = a;
    if (this[t(775)][t(783)] && (x.data = new Date(x[t(909)])), this._getType(x) !== a0[t(959)]) {
      const n = this[t(1350)](x);
      return Y(n, { code: Z[t(1801)], expected: a0[t(959)], received: n[t(2573)] }), h0;
    }
    if (Number[t(2712)](x[t(909)][t(835)]())) {
      const n = this[t(1350)](x);
      return Y(n, { code: Z.invalid_date }), h0;
    }
    const e = new ee();
    let s;
    for (const n of this[t(775)].checks)
      n[t(1214)] === "min" ? x[t(909)][t(835)]() < n[t(1732)] && (s = this._getOrReturnCtx(x, s), Y(s, { code: Z[t(1057)], message: n[t(225)], inclusive: !0, exact: !1, minimum: n[t(1732)], type: "date" }), e[t(1357)]()) : n.kind === t(1393) ? x[t(909)][t(835)]() > n[t(1732)] && (s = this._getOrReturnCtx(x, s), Y(s, { code: Z[t(175)], message: n[t(225)], inclusive: !0, exact: !1, maximum: n[t(1732)], type: t(959) }), e[t(1357)]()) : T0.assertNever(n);
    return { status: e[t(1732)], value: new Date(x[t(909)][t(835)]()) };
  }
  [a(1675)](x) {
    const t = a;
    return new gx({ ...this[t(775)], checks: [...this[t(775)][t(1359)], x] });
  }
  [a(1279)](x, t) {
    const r = a;
    return this._addCheck({ kind: r(1279), value: x[r(835)](), message: r0[r(766)](t) });
  }
  [a(1393)](x, t) {
    const r = a;
    return this._addCheck({ kind: r(1393), value: x[r(835)](), message: r0[r(766)](t) });
  }
  get minDate() {
    const x = a;
    let t = null;
    for (const r of this[x(775)][x(1359)])
      r[x(1214)] === "min" && (t === null || r[x(1732)] > t) && (t = r[x(1732)]);
    return t != null ? new Date(t) : null;
  }
  get [a(1611)]() {
    const x = a;
    let t = null;
    for (const r of this._def.checks)
      r[x(1214)] === x(1393) && (t === null || r[x(1732)] < t) && (t = r[x(1732)]);
    return t != null ? new Date(t) : null;
  }
}
gx[a(665)] = (o) => {
  const x = a;
  return new gx({ checks: [], coerce: (o == null ? void 0 : o[x(783)]) || !1, typeName: p0[x(2259)], ...y0(o) });
};
class qa extends C0 {
  _parse(x) {
    const t = a;
    if (this[t(1640)](x) !== a0[t(1100)]) {
      const e = this._getOrReturnCtx(x);
      return Y(e, { code: Z[t(1801)], expected: a0.symbol, received: e[t(2573)] }), h0;
    }
    return ae(x.data);
  }
}
qa[a(665)] = (o) => {
  const x = a;
  return new qa({ typeName: p0[x(1415)], ...y0(o) });
};
class zt extends C0 {
  [a(1594)](x) {
    const t = a;
    if (this._getType(x) !== a0[t(420)]) {
      const e = this[t(1350)](x);
      return Y(e, { code: Z[t(1801)], expected: a0[t(420)], received: e.parsedType }), h0;
    }
    return ae(x.data);
  }
}
zt[a(665)] = (o) => new zt({ typeName: p0.ZodUndefined, ...y0(o) });
class Vt extends C0 {
  [a(1594)](x) {
    const t = a;
    if (this[t(1640)](x) !== a0[t(845)]) {
      const e = this[t(1350)](x);
      return Y(e, { code: Z[t(1801)], expected: a0[t(845)], received: e[t(2573)] }), h0;
    }
    return ae(x[t(909)]);
  }
}
Vt[a(665)] = (o) => {
  const x = a;
  return new Vt({ typeName: p0[x(1273)], ...y0(o) });
};
class ax extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(2079)] = !0;
  }
  _parse(x) {
    return ae(x.data);
  }
}
ax[a(665)] = (o) => {
  const x = a;
  return new ax({ typeName: p0[x(1022)], ...y0(o) });
};
class Bt extends C0 {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  [a(1594)](x) {
    return ae(x[a(909)]);
  }
}
Bt[a(665)] = (o) => {
  const x = a;
  return new Bt({ typeName: p0[x(1602)], ...y0(o) });
};
class Ce extends C0 {
  [a(1594)](x) {
    const t = a, r = this[t(1350)](x);
    return Y(r, { code: Z[t(1801)], expected: a0[t(1396)], received: r.parsedType }), h0;
  }
}
Ce[a(665)] = (o) => {
  const x = a;
  return new Ce({ typeName: p0[x(2322)], ...y0(o) });
};
class Zt extends C0 {
  [a(1594)](x) {
    const t = a;
    if (this[t(1640)](x) !== a0[t(420)]) {
      const e = this[t(1350)](x);
      return Y(e, { code: Z.invalid_type, expected: a0[t(2445)], received: e.parsedType }), h0;
    }
    return ae(x[t(909)]);
  }
}
Zt[a(665)] = (o) => {
  const x = a;
  return new Zt({ typeName: p0[x(944)], ...y0(o) });
};
class le extends C0 {
  [a(1594)](x) {
    const t = a, { ctx: r, status: e } = this[t(1020)](x), s = this[t(775)];
    if (r[t(2573)] !== a0[t(973)]) return Y(r, { code: Z[t(1801)], expected: a0[t(973)], received: r[t(2573)] }), h0;
    if (s[t(1958)] !== null) {
      const i = r[t(909)][t(692)] > s.exactLength.value, c = r[t(909)][t(692)] < s[t(1958)][t(1732)];
      (i || c) && (Y(r, { code: i ? Z[t(175)] : Z[t(1057)], minimum: c ? s[t(1958)][t(1732)] : void 0, maximum: i ? s[t(1958)][t(1732)] : void 0, type: t(973), inclusive: !0, exact: !0, message: s.exactLength[t(225)] }), e.dirty());
    }
    if (s[t(2877)] !== null && r[t(909)][t(692)] < s.minLength.value && (Y(r, { code: Z[t(1057)], minimum: s[t(2877)][t(1732)], type: "array", inclusive: !0, exact: !1, message: s.minLength[t(225)] }), e[t(1357)]()), s[t(558)] !== null && r[t(909)][t(692)] > s[t(558)][t(1732)] && (Y(r, { code: Z[t(175)], maximum: s[t(558)].value, type: t(973), inclusive: !0, exact: !1, message: s[t(558)][t(225)] }), e[t(1357)]()), r[t(2421)][t(1973)]) return Promise[t(403)]([...r[t(909)]][t(1649)]((i, c) => {
      const u = t;
      return s.type[u(1098)](new he(r, i, r[u(2619)], c));
    })).then((i) => ee[t(2395)](e, i));
    const n = [...r.data][t(1649)]((i, c) => {
      const u = t;
      return s[u(612)][u(2802)](new he(r, i, r.path, c));
    });
    return ee[t(2395)](e, n);
  }
  get [a(1294)]() {
    return this[a(775)].type;
  }
  [a(1279)](x, t) {
    const r = a;
    return new le({ ...this[r(775)], minLength: { value: x, message: r0[r(766)](t) } });
  }
  max(x, t) {
    const r = a;
    return new le({ ...this[r(775)], maxLength: { value: x, message: r0.toString(t) } });
  }
  [a(692)](x, t) {
    const r = a;
    return new le({ ...this[r(775)], exactLength: { value: x, message: r0[r(766)](t) } });
  }
  [a(1890)](x) {
    return this[a(1279)](1, x);
  }
}
le.create = (o, x) => {
  const t = a;
  return new le({ type: o, minLength: null, maxLength: null, exactLength: null, typeName: p0[t(2420)], ...y0(x) });
};
function He(o) {
  const x = a;
  if (o instanceof W0) {
    const t = {};
    for (const r in o[x(2068)]) {
      const e = o[x(2068)][r];
      t[r] = we[x(665)](He(e));
    }
    return new W0({ ...o._def, shape: () => t });
  } else
    return o instanceof le ? new le({ ...o[x(775)], type: He(o[x(1294)]) }) : o instanceof we ? we[x(665)](He(o[x(264)]())) : o instanceof De ? De[x(665)](He(o[x(264)]())) : o instanceof Oe ? Oe[x(665)](o[x(715)][x(1649)]((t) => He(t))) : o;
}
class W0 extends C0 {
  constructor() {
    const x = a;
    super(...arguments), this[x(2361)] = null, this[x(1232)] = this[x(2303)], this[x(2165)] = this[x(243)];
  }
  [a(740)]() {
    const x = a;
    if (this[x(2361)] !== null) return this[x(2361)];
    const t = this[x(775)].shape(), r = T0[x(1339)](t);
    return this._cached = { shape: t, keys: r }, this[x(2361)];
  }
  [a(1594)](x) {
    const t = a;
    if (this[t(1640)](x) !== a0[t(544)]) {
      const d = this[t(1350)](x);
      return Y(d, { code: Z.invalid_type, expected: a0.object, received: d.parsedType }), h0;
    }
    const { status: e, ctx: s } = this[t(1020)](x), { shape: n, keys: i } = this[t(740)](), c = [];
    if (!(this[t(775)].catchall instanceof Ce && this[t(775)][t(2223)] === t(2095))) for (const d in s[t(909)])
      !i.includes(d) && c[t(452)](d);
    const u = [];
    for (const d of i) {
      const f = n[d], l = s.data[d];
      u[t(452)]({ key: { status: t(614), value: d }, value: f[t(1594)](new he(s, l, s[t(2619)], d)), alwaysSet: d in s[t(909)] });
    }
    if (this._def[t(1390)] instanceof Ce) {
      const d = this[t(775)][t(2223)];
      if (d === t(2303)) for (const f of c)
        u[t(452)]({ key: { status: t(614), value: f }, value: { status: t(614), value: s.data[f] } });
      else if (d === "strict") c[t(692)] > 0 && (Y(s, { code: Z[t(354)], keys: c }), e[t(1357)]());
      else if (d !== t(2095)) throw new Error(t(1225));
    } else {
      const d = this[t(775)].catchall;
      for (const f of c) {
        const l = s[t(909)][f];
        u[t(452)]({ key: { status: t(614), value: f }, value: d[t(1594)](new he(s, l, s[t(2619)], f)), alwaysSet: f in s[t(909)] });
      }
    }
    return s[t(2421)][t(1973)] ? Promise[t(1571)]()[t(2403)](async () => {
      const d = t, f = [];
      for (const l of u) {
        const b = await l.key, h = await l[d(1732)];
        f.push({ key: b, value: h, alwaysSet: l.alwaysSet });
      }
      return f;
    }).then((d) => ee.mergeObjectSync(e, d)) : ee[t(565)](e, u);
  }
  get [a(2068)]() {
    return this[a(775)].shape();
  }
  [a(1450)](x) {
    const t = a;
    return r0[t(1053)], new W0({ ...this._def, unknownKeys: t(1450), ...x !== void 0 ? { errorMap: (r, e) => {
      var i, c;
      const s = t, n = ((c = (i = this[s(775)])[s(1653)]) == null ? void 0 : c.call(i, r, e)[s(225)]) ?? e[s(2641)];
      return r[s(1172)] === s(354) ? { message: r0[s(1053)](x)[s(225)] ?? n } : { message: n };
    } } : {} });
  }
  [a(2095)]() {
    const x = a;
    return new W0({ ...this[x(775)], unknownKeys: x(2095) });
  }
  passthrough() {
    const x = a;
    return new W0({ ...this[x(775)], unknownKeys: "passthrough" });
  }
  [a(243)](x) {
    const t = a;
    return new W0({ ...this[t(775)], shape: () => ({ ...this._def[t(2068)](), ...x }) });
  }
  merge(x) {
    const t = a;
    return new W0({ unknownKeys: x._def[t(2223)], catchall: x[t(775)][t(1390)], shape: () => ({ ...this[t(775)].shape(), ...x[t(775)][t(2068)]() }), typeName: p0[t(1739)] });
  }
  [a(1810)](x, t) {
    return this[a(2165)]({ [x]: t });
  }
  [a(1390)](x) {
    const t = a;
    return new W0({ ...this[t(775)], catchall: x });
  }
  pick(x) {
    const t = a, r = {};
    for (const e of T0[t(1339)](x))
      x[e] && this[t(2068)][e] && (r[e] = this[t(2068)][e]);
    return new W0({ ...this[t(775)], shape: () => r });
  }
  [a(1952)](x) {
    const t = a, r = {};
    for (const e of T0[t(1339)](this[t(2068)]))
      !x[e] && (r[e] = this[t(2068)][e]);
    return new W0({ ...this[t(775)], shape: () => r });
  }
  [a(2689)]() {
    return He(this);
  }
  [a(2495)](x) {
    const t = a, r = {};
    for (const e of T0[t(1339)](this[t(2068)])) {
      const s = this[t(2068)][e];
      x && !x[e] ? r[e] = s : r[e] = s[t(1027)]();
    }
    return new W0({ ...this._def, shape: () => r });
  }
  [a(310)](x) {
    const t = a, r = {};
    for (const e of T0[t(1339)](this[t(2068)]))
      if (x && !x[e]) r[e] = this.shape[e];
      else {
        let n = this.shape[e];
        for (; n instanceof we; )
          n = n[t(775)].innerType;
        r[e] = n;
      }
    return new W0({ ...this[t(775)], shape: () => r });
  }
  [a(757)]() {
    return Ms(T0.objectKeys(this.shape));
  }
}
W0[a(665)] = (o, x) => new W0({ shape: () => o, unknownKeys: "strip", catchall: Ce.create(), typeName: p0.ZodObject, ...y0(x) }), W0.strictCreate = (o, x) => {
  const t = a;
  return new W0({ shape: () => o, unknownKeys: t(1450), catchall: Ce[t(665)](), typeName: p0[t(1739)], ...y0(x) });
}, W0[a(1422)] = (o, x) => {
  const t = a;
  return new W0({ shape: o, unknownKeys: t(2095), catchall: Ce[t(665)](), typeName: p0.ZodObject, ...y0(x) });
};
class yx extends C0 {
  [a(1594)](x) {
    const t = a, { ctx: r } = this._processInputParams(x), e = this._def.options;
    function s(n) {
      const i = K;
      for (const u of n)
        if (u[i(2671)][i(2861)] === i(614)) return u[i(2671)];
      for (const u of n)
        if (u.result.status === i(1357)) return r[i(2421)][i(1157)][i(452)](...u.ctx[i(2421)][i(1157)]), u[i(2671)];
      const c = n[i(1649)]((u) => new ke(u.ctx[i(2421)][i(1157)]));
      return Y(r, { code: Z[i(2771)], unionErrors: c }), h0;
    }
    if (r[t(2421)].async) return Promise[t(403)](e[t(1649)](async (n) => {
      const i = t, c = { ...r, common: { ...r[i(2421)], issues: [] }, parent: null };
      return { result: await n[i(1098)]({ data: r[i(909)], path: r[i(2619)], parent: c }), ctx: c };
    }))[t(2403)](s);
    {
      let n;
      const i = [];
      for (const u of e) {
        const d = { ...r, common: { ...r[t(2421)], issues: [] }, parent: null }, f = u._parseSync({ data: r[t(909)], path: r[t(2619)], parent: d });
        if (f.status === t(614)) return f;
        f[t(2861)] === t(1357) && !n && (n = { result: f, ctx: d }), d.common.issues[t(692)] && i[t(452)](d[t(2421)][t(1157)]);
      }
      if (n) return r[t(2421)][t(1157)][t(452)](...n.ctx[t(2421)].issues), n.result;
      const c = i[t(1649)]((u) => new ke(u));
      return Y(r, { code: Z[t(2771)], unionErrors: c }), h0;
    }
  }
  get options() {
    const x = a;
    return this[x(775)][x(1005)];
  }
}
yx[a(665)] = (o, x) => {
  const t = a;
  return new yx({ options: o, typeName: p0[t(1597)], ...y0(x) });
};
const ge = (o) => {
  const x = a;
  return o instanceof Kt ? ge(o.schema) : o instanceof qe ? ge(o[x(257)]()) : o instanceof Sx ? [o.value] : o instanceof _e ? o[x(1005)] : o instanceof Gt ? T0.objectValues(o[x(1419)]) : o instanceof Px ? ge(o[x(775)][x(257)]) : o instanceof zt ? [void 0] : o instanceof Vt ? [null] : o instanceof we ? [void 0, ...ge(o[x(264)]())] : o instanceof De ? [null, ...ge(o.unwrap())] : o instanceof Ls ? ge(o.unwrap()) : o instanceof Ex ? ge(o[x(264)]()) : o instanceof Ix ? ge(o._def[x(257)]) : [];
};
class na extends C0 {
  [a(1594)](x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    if (r[t(2573)] !== a0[t(544)]) return Y(r, { code: Z[t(1801)], expected: a0.object, received: r.parsedType }), h0;
    const e = this[t(536)], s = r[t(909)][e], n = this[t(2343)].get(s);
    return n ? r.common[t(1973)] ? n._parseAsync({ data: r[t(909)], path: r[t(2619)], parent: r }) : n[t(2802)]({ data: r[t(909)], path: r[t(2619)], parent: r }) : (Y(r, { code: Z[t(1509)], options: Array[t(2781)](this[t(2343)][t(750)]()), path: [e] }), h0);
  }
  get discriminator() {
    const x = a;
    return this[x(775)][x(536)];
  }
  get [a(1005)]() {
    const x = a;
    return this[x(775)][x(1005)];
  }
  get [a(2343)]() {
    const x = a;
    return this[x(775)][x(2343)];
  }
  static [a(665)](x, t, r) {
    const e = a, s = /* @__PURE__ */ new Map();
    for (const n of t) {
      const i = ge(n[e(2068)][x]);
      if (!i[e(692)]) throw new Error("A discriminator value for key `" + x + e(2191));
      for (const c of i) {
        if (s[e(2075)](c)) throw new Error(e(1384) + String(x) + e(1791) + String(c));
        s[e(758)](c, n);
      }
    }
    return new na({ typeName: p0.ZodDiscriminatedUnion, discriminator: x, options: t, optionsMap: s, ...y0(r) });
  }
}
function Wt(o, x) {
  const t = a, r = Ee(o), e = Ee(x);
  if (o === x) return { valid: !0, data: o };
  if (r === a0.object && e === a0.object) {
    const s = T0[t(1339)](x), n = T0.objectKeys(o)[t(2145)]((c) => s[t(311)](c) !== -1), i = { ...o, ...x };
    for (const c of n) {
      const u = Wt(o[c], x[c]);
      if (!u[t(614)]) return { valid: !1 };
      i[c] = u[t(909)];
    }
    return { valid: !0, data: i };
  } else if (r === a0.array && e === a0.array) {
    if (o[t(692)] !== x.length) return { valid: !1 };
    const s = [];
    for (let n = 0; n < o[t(692)]; n++) {
      const i = o[n], c = x[n], u = Wt(i, c);
      if (!u.valid) return { valid: !1 };
      s[t(452)](u[t(909)]);
    }
    return { valid: !0, data: s };
  } else return r === a0[t(959)] && e === a0.date && +o == +x ? { valid: !0, data: o } : { valid: !1 };
}
class vx extends C0 {
  [a(1594)](x) {
    const t = a, { status: r, ctx: e } = this[t(1020)](x), s = (n, i) => {
      const c = t;
      if (Fa(n) || Fa(i)) return h0;
      const u = Wt(n[c(1732)], i[c(1732)]);
      return u.valid ? ((Na(n) || Na(i)) && r[c(1357)](), { status: r[c(1732)], value: u[c(909)] }) : (Y(e, { code: Z[c(2121)] }), h0);
    };
    return e[t(2421)][t(1973)] ? Promise[t(403)]([this[t(775)].left[t(1098)]({ data: e[t(909)], path: e[t(2619)], parent: e }), this[t(775)][t(2823)][t(1098)]({ data: e[t(909)], path: e.path, parent: e })])[t(2403)](([n, i]) => s(n, i)) : s(this._def[t(1410)][t(2802)]({ data: e[t(909)], path: e[t(2619)], parent: e }), this[t(775)].right[t(2802)]({ data: e[t(909)], path: e[t(2619)], parent: e }));
  }
}
vx[a(665)] = (o, x, t) => {
  const r = a;
  return new vx({ left: o, right: x, typeName: p0[r(1432)], ...y0(t) });
};
class Oe extends C0 {
  [a(1594)](x) {
    const t = a, { status: r, ctx: e } = this[t(1020)](x);
    if (e.parsedType !== a0.array) return Y(e, { code: Z.invalid_type, expected: a0[t(973)], received: e[t(2573)] }), h0;
    if (e.data.length < this[t(775)][t(715)].length) return Y(e, { code: Z[t(1057)], minimum: this[t(775)][t(715)][t(692)], inclusive: !0, exact: !1, type: t(973) }), h0;
    !this[t(775)][t(2743)] && e.data[t(692)] > this[t(775)].items[t(692)] && (Y(e, { code: Z.too_big, maximum: this[t(775)].items[t(692)], inclusive: !0, exact: !1, type: t(973) }), r.dirty());
    const n = [...e[t(909)]].map((i, c) => {
      const u = t, d = this[u(775)][u(715)][c] || this._def[u(2743)];
      return d ? d[u(1594)](new he(e, i, e.path, c)) : null;
    })[t(2145)]((i) => !!i);
    return e[t(2421)][t(1973)] ? Promise[t(403)](n).then((i) => ee[t(2395)](r, i)) : ee[t(2395)](r, n);
  }
  get [a(715)]() {
    const x = a;
    return this._def[x(715)];
  }
  [a(2743)](x) {
    const t = a;
    return new Oe({ ...this[t(775)], rest: x });
  }
}
Oe[a(665)] = (o, x) => {
  const t = a;
  if (!Array[t(1783)](o)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Oe({ items: o, typeName: p0[t(1222)], rest: null, ...y0(x) });
};
class wx extends C0 {
  get [a(1420)]() {
    const x = a;
    return this[x(775)][x(1386)];
  }
  get valueSchema() {
    return this._def.valueType;
  }
  [a(1594)](x) {
    const t = a, { status: r, ctx: e } = this[t(1020)](x);
    if (e.parsedType !== a0.object) return Y(e, { code: Z.invalid_type, expected: a0[t(544)], received: e[t(2573)] }), h0;
    const s = [], n = this[t(775)].keyType, i = this[t(775)].valueType;
    for (const c in e[t(909)])
      s[t(452)]({ key: n[t(1594)](new he(e, c, e[t(2619)], c)), value: i._parse(new he(e, e[t(909)][c], e.path, c)), alwaysSet: c in e[t(909)] });
    return e.common.async ? ee[t(1917)](r, s) : ee[t(565)](r, s);
  }
  get [a(1294)]() {
    const x = a;
    return this._def[x(1916)];
  }
  static create(x, t, r) {
    const e = a;
    return t instanceof C0 ? new wx({ keyType: x, valueType: t, typeName: p0.ZodRecord, ...y0(r) }) : new wx({ keyType: ve[e(665)](), valueType: x, typeName: p0[e(2849)], ...y0(t) });
  }
}
class Aa extends C0 {
  get [a(1420)]() {
    const x = a;
    return this[x(775)][x(1386)];
  }
  get [a(469)]() {
    const x = a;
    return this[x(775)][x(1916)];
  }
  [a(1594)](x) {
    const t = a, { status: r, ctx: e } = this[t(1020)](x);
    if (e.parsedType !== a0[t(1649)]) return Y(e, { code: Z[t(1801)], expected: a0[t(1649)], received: e[t(2573)] }), h0;
    const s = this[t(775)][t(1386)], n = this[t(775)][t(1916)], i = [...e[t(909)][t(1587)]()].map(([c, u], d) => {
      const f = t;
      return { key: s[f(1594)](new he(e, c, e[f(2619)], [d, "key"])), value: n[f(1594)](new he(e, u, e[f(2619)], [d, f(1732)])) };
    });
    if (e[t(2421)][t(1973)]) {
      const c = /* @__PURE__ */ new Map();
      return Promise.resolve()[t(2403)](async () => {
        const u = t;
        for (const d of i) {
          const f = await d[u(1867)], l = await d[u(1732)];
          if (f[u(2861)] === "aborted" || l[u(2861)] === u(532)) return h0;
          (f.status === "dirty" || l[u(2861)] === u(1357)) && r.dirty(), c.set(f[u(1732)], l.value);
        }
        return { status: r[u(1732)], value: c };
      });
    } else {
      const c = /* @__PURE__ */ new Map();
      for (const u of i) {
        const d = u[t(1867)], f = u[t(1732)];
        if (d.status === t(532) || f[t(2861)] === "aborted") return h0;
        (d.status === t(1357) || f[t(2861)] === "dirty") && r[t(1357)](), c[t(758)](d.value, f[t(1732)]);
      }
      return { status: r[t(1732)], value: c };
    }
  }
}
Aa[a(665)] = (o, x, t) => {
  const r = a;
  return new Aa({ valueType: x, keyType: o, typeName: p0[r(1285)], ...y0(t) });
};
class rx extends C0 {
  [a(1594)](x) {
    const t = a, { status: r, ctx: e } = this[t(1020)](x);
    if (e.parsedType !== a0[t(758)]) return Y(e, { code: Z[t(1801)], expected: a0[t(758)], received: e[t(2573)] }), h0;
    const s = this._def;
    s[t(1872)] !== null && e[t(909)][t(2715)] < s.minSize[t(1732)] && (Y(e, { code: Z.too_small, minimum: s[t(1872)][t(1732)], type: t(758), inclusive: !0, exact: !1, message: s[t(1872)][t(225)] }), r.dirty()), s[t(1127)] !== null && e.data.size > s[t(1127)][t(1732)] && (Y(e, { code: Z.too_big, maximum: s.maxSize[t(1732)], type: "set", inclusive: !0, exact: !1, message: s[t(1127)][t(225)] }), r[t(1357)]());
    const n = this[t(775)][t(1916)];
    function i(u) {
      const d = t, f = /* @__PURE__ */ new Set();
      for (const l of u) {
        if (l[d(2861)] === d(532)) return h0;
        l[d(2861)] === d(1357) && r.dirty(), f[d(2655)](l.value);
      }
      return { status: r[d(1732)], value: f };
    }
    const c = [...e[t(909)][t(1382)]()][t(1649)]((u, d) => n[t(1594)](new he(e, u, e.path, d)));
    return e[t(2421)].async ? Promise.all(c)[t(2403)]((u) => i(u)) : i(c);
  }
  [a(1279)](x, t) {
    const r = a;
    return new rx({ ...this._def, minSize: { value: x, message: r0[r(766)](t) } });
  }
  [a(1393)](x, t) {
    const r = a;
    return new rx({ ...this[r(775)], maxSize: { value: x, message: r0[r(766)](t) } });
  }
  [a(2715)](x, t) {
    return this[a(1279)](x, t).max(x, t);
  }
  [a(1890)](x) {
    return this[a(1279)](1, x);
  }
}
rx.create = (o, x) => {
  const t = a;
  return new rx({ valueType: o, minSize: null, maxSize: null, typeName: p0[t(2505)], ...y0(x) });
};
class Kt extends C0 {
  get [a(2555)]() {
    const x = a;
    return this[x(775)][x(923)]();
  }
  [a(1594)](x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    return this[t(775)].getter()[t(1594)]({ data: r[t(909)], path: r.path, parent: r });
  }
}
Kt[a(665)] = (o, x) => {
  const t = a;
  return new Kt({ getter: o, typeName: p0[t(2398)], ...y0(x) });
};
class Sx extends C0 {
  [a(1594)](x) {
    const t = a;
    if (x[t(909)] !== this[t(775)][t(1732)]) {
      const r = this[t(1350)](x);
      return Y(r, { received: r[t(909)], code: Z.invalid_literal, expected: this[t(775)][t(1732)] }), h0;
    }
    return { status: "valid", value: x[t(909)] };
  }
  get [a(1732)]() {
    const x = a;
    return this[x(775)][x(1732)];
  }
}
Sx[a(665)] = (o, x) => new Sx({ value: o, typeName: p0.ZodLiteral, ...y0(x) });
function Ms(o, x) {
  return new _e({ values: o, typeName: p0.ZodEnum, ...y0(x) });
}
class _e extends C0 {
  [a(1594)](x) {
    const t = a;
    if (typeof x[t(909)] !== t(2161)) {
      const r = this[t(1350)](x), e = this[t(775)].values;
      return Y(r, { expected: T0[t(1162)](e), received: r.parsedType, code: Z[t(1801)] }), h0;
    }
    if (!this[t(2851)] && (this[t(2851)] = new Set(this[t(775)][t(1382)])), !this._cache[t(2075)](x[t(909)])) {
      const r = this[t(1350)](x), e = this[t(775)][t(1382)];
      return Y(r, { received: r[t(909)], code: Z[t(353)], options: e }), h0;
    }
    return ae(x[t(909)]);
  }
  get [a(1005)]() {
    return this[a(775)].values;
  }
  get [a(1419)]() {
    const x = a, t = {};
    for (const r of this[x(775)][x(1382)])
      t[r] = r;
    return t;
  }
  get Values() {
    const x = a, t = {};
    for (const r of this._def[x(1382)])
      t[r] = r;
    return t;
  }
  get [a(2688)]() {
    const x = a, t = {};
    for (const r of this[x(775)][x(1382)])
      t[r] = r;
    return t;
  }
  extract(x, t = this[a(775)]) {
    const r = a;
    return _e.create(x, { ...this[r(775)], ...t });
  }
  exclude(x, t = this[a(775)]) {
    const r = a;
    return _e[r(665)](this[r(1005)][r(2145)]((e) => !x[r(1150)](e)), { ...this[r(775)], ...t });
  }
}
_e[a(665)] = Ms;
class Gt extends C0 {
  [a(1594)](x) {
    const t = a, r = T0[t(1631)](this._def.values), e = this[t(1350)](x);
    if (e[t(2573)] !== a0[t(2161)] && e[t(2573)] !== a0[t(2153)]) {
      const s = T0[t(925)](r);
      return Y(e, { expected: T0.joinValues(s), received: e.parsedType, code: Z.invalid_type }), h0;
    }
    if (!this[t(2851)] && (this[t(2851)] = new Set(T0[t(1631)](this[t(775)].values))), !this[t(2851)][t(2075)](x.data)) {
      const s = T0[t(925)](r);
      return Y(e, { received: e[t(909)], code: Z[t(353)], options: s }), h0;
    }
    return ae(x[t(909)]);
  }
  get [a(1419)]() {
    const x = a;
    return this._def[x(1382)];
  }
}
Gt.create = (o, x) => {
  const t = a;
  return new Gt({ values: o, typeName: p0[t(2294)], ...y0(x) });
};
class kx extends C0 {
  [a(264)]() {
    const x = a;
    return this[x(775)][x(612)];
  }
  [a(1594)](x) {
    const t = a, { ctx: r } = this._processInputParams(x);
    if (r[t(2573)] !== a0[t(2447)] && r.common.async === !1) return Y(r, { code: Z.invalid_type, expected: a0.promise, received: r[t(2573)] }), h0;
    const e = r.parsedType === a0[t(2447)] ? r[t(909)] : Promise[t(1571)](r[t(909)]);
    return ae(e[t(2403)]((s) => {
      const n = t;
      return this[n(775)][n(612)].parseAsync(s, { path: r.path, errorMap: r[n(2421)][n(2362)] });
    }));
  }
}
kx[a(665)] = (o, x) => {
  const t = a;
  return new kx({ type: o, typeName: p0[t(1135)], ...y0(x) });
};
class qe extends C0 {
  [a(257)]() {
    const x = a;
    return this[x(775)][x(2555)];
  }
  [a(1951)]() {
    const x = a;
    return this[x(775)][x(2555)][x(775)].typeName === p0.ZodEffects ? this[x(775)][x(2555)].sourceType() : this._def[x(2555)];
  }
  [a(1594)](x) {
    const t = a, { status: r, ctx: e } = this[t(1020)](x), s = this[t(775)][t(2860)] || null, n = { addIssue: (i) => {
      const c = t;
      Y(e, i), i[c(822)] ? r[c(1284)]() : r.dirty();
    }, get path() {
      return e[t(2619)];
    } };
    if (n[t(2847)] = n[t(2847)][t(2488)](n), s[t(612)] === t(931)) {
      const i = s[t(538)](e.data, n);
      if (e[t(2421)][t(1973)]) return Promise[t(1571)](i)[t(2403)](async (c) => {
        const u = t;
        if (r[u(1732)] === u(532)) return h0;
        const d = await this._def[u(2555)][u(1098)]({ data: c, path: e[u(2619)], parent: e });
        return d.status === u(532) ? h0 : d.status === u(1357) ? Qe(d[u(1732)]) : r[u(1732)] === u(1357) ? Qe(d.value) : d;
      });
      {
        if (r.value === t(532)) return h0;
        const c = this._def.schema._parseSync({ data: i, path: e.path, parent: e });
        return c.status === "aborted" ? h0 : c.status === t(1357) || r[t(1732)] === "dirty" ? Qe(c[t(1732)]) : c;
      }
    }
    if (s.type === t(414)) {
      const i = (c) => {
        const u = t, d = s[u(414)](c, n);
        if (e[u(2421)][u(1973)]) return Promise[u(1571)](d);
        if (d instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return c;
      };
      if (e.common[t(1973)] === !1) {
        const c = this._def.schema._parseSync({ data: e[t(909)], path: e[t(2619)], parent: e });
        return c[t(2861)] === t(532) ? h0 : (c.status === "dirty" && r[t(1357)](), i(c[t(1732)]), { status: r.value, value: c[t(1732)] });
      } else return this._def.schema[t(1098)]({ data: e[t(909)], path: e[t(2619)], parent: e })[t(2403)]((c) => {
        const u = t;
        return c[u(2861)] === u(532) ? h0 : (c[u(2861)] === "dirty" && r.dirty(), i(c.value)[u(2403)](() => {
          const d = u;
          return { status: r.value, value: c[d(1732)] };
        }));
      });
    }
    if (s[t(612)] === "transform")
      if (e[t(2421)][t(1973)] === !1) {
        const i = this[t(775)].schema[t(2802)]({ data: e.data, path: e[t(2619)], parent: e });
        if (!Ve(i)) return h0;
        const c = s.transform(i[t(1732)], n);
        if (c instanceof Promise) throw new Error(t(2017));
        return { status: r[t(1732)], value: c };
      } else return this[t(775)][t(2555)][t(1098)]({ data: e.data, path: e[t(2619)], parent: e }).then((i) => {
        const c = t;
        return Ve(i) ? Promise[c(1571)](s[c(538)](i[c(1732)], n)).then((u) => ({ status: r[c(1732)], value: u })) : h0;
      });
    T0[t(2266)](s);
  }
}
qe[a(665)] = (o, x, t) => new qe({ schema: o, typeName: p0.ZodEffects, effect: x, ...y0(t) }), qe[a(2646)] = (o, x, t) => new qe({ schema: x, effect: { type: "preprocess", transform: o }, typeName: p0.ZodEffects, ...y0(t) });
class we extends C0 {
  [a(1594)](x) {
    const t = a;
    return this[t(1640)](x) === a0[t(420)] ? ae(void 0) : this[t(775)][t(257)][t(1594)](x);
  }
  [a(264)]() {
    const x = a;
    return this[x(775)][x(257)];
  }
}
we.create = (o, x) => {
  const t = a;
  return new we({ innerType: o, typeName: p0[t(1168)], ...y0(x) });
};
class De extends C0 {
  _parse(x) {
    const t = a;
    return this[t(1640)](x) === a0.null ? ae(null) : this[t(775)].innerType._parse(x);
  }
  unwrap() {
    const x = a;
    return this[x(775)][x(257)];
  }
}
De[a(665)] = (o, x) => new De({ innerType: o, typeName: p0.ZodNullable, ...y0(x) });
class Px extends C0 {
  [a(1594)](x) {
    const t = a, { ctx: r } = this[t(1020)](x);
    let e = r.data;
    return r[t(2573)] === a0[t(420)] && (e = this[t(775)][t(244)]()), this[t(775)][t(257)]._parse({ data: e, path: r[t(2619)], parent: r });
  }
  [a(1772)]() {
    const x = a;
    return this[x(775)][x(257)];
  }
}
Px[a(665)] = (o, x) => {
  const t = a;
  return new Px({ innerType: o, typeName: p0[t(841)], defaultValue: typeof x.default == "function" ? x[t(1944)] : () => x[t(1944)], ...y0(x) });
};
class Ix extends C0 {
  [a(1594)](x) {
    const t = a, { ctx: r } = this._processInputParams(x), e = { ...r, common: { ...r[t(2421)], issues: [] } }, s = this[t(775)][t(257)][t(1594)]({ data: e.data, path: e[t(2619)], parent: { ...e } });
    return bx(s) ? s[t(2403)]((n) => {
      const i = t;
      return { status: i(614), value: n.status === i(614) ? n[i(1732)] : this._def[i(1423)]({ get error() {
        const c = i;
        return new ke(e.common[c(1157)]);
      }, input: e[i(909)] }) };
    }) : { status: "valid", value: s[t(2861)] === t(614) ? s.value : this[t(775)][t(1423)]({ get error() {
      const n = t;
      return new ke(e[n(2421)][n(1157)]);
    }, input: e[t(909)] }) };
  }
  removeCatch() {
    const x = a;
    return this[x(775)][x(257)];
  }
}
Ix.create = (o, x) => {
  const t = a;
  return new Ix({ innerType: o, typeName: p0[t(1822)], catchValue: typeof x[t(1995)] === t(1622) ? x[t(1995)] : () => x.catch, ...y0(x) });
};
class Oa extends C0 {
  [a(1594)](x) {
    const t = a;
    if (this._getType(x) !== a0[t(281)]) {
      const e = this[t(1350)](x);
      return Y(e, { code: Z.invalid_type, expected: a0.nan, received: e.parsedType }), h0;
    }
    return { status: t(614), value: x[t(909)] };
  }
}
Oa.create = (o) => {
  const x = a;
  return new Oa({ typeName: p0[x(2377)], ...y0(o) });
};
class Ls extends C0 {
  [a(1594)](x) {
    const t = a, { ctx: r } = this[t(1020)](x), e = r[t(909)];
    return this[t(775)][t(612)][t(1594)]({ data: e, path: r.path, parent: r });
  }
  unwrap() {
    return this[a(775)].type;
  }
}
class oa extends C0 {
  _parse(x) {
    const t = a, { status: r, ctx: e } = this[t(1020)](x);
    if (e[t(2421)][t(1973)])
      return (async () => {
        const n = t, i = await this[n(775)].in[n(1098)]({ data: e[n(909)], path: e[n(2619)], parent: e });
        return i[n(2861)] === n(532) ? h0 : i.status === n(1357) ? (r[n(1357)](), Qe(i[n(1732)])) : this[n(775)][n(2805)]._parseAsync({ data: i[n(1732)], path: e.path, parent: e });
      })();
    {
      const s = this._def.in[t(2802)]({ data: e[t(909)], path: e[t(2619)], parent: e });
      return s.status === t(532) ? h0 : s[t(2861)] === t(1357) ? (r[t(1357)](), { status: "dirty", value: s[t(1732)] }) : this[t(775)].out[t(2802)]({ data: s[t(1732)], path: e[t(2619)], parent: e });
    }
  }
  static create(x, t) {
    return new oa({ in: x, out: t, typeName: p0.ZodPipeline });
  }
}
class Ex extends C0 {
  [a(1594)](x) {
    const t = a, r = this[t(775)][t(257)][t(1594)](x), e = (s) => {
      const n = t;
      return Ve(s) && (s[n(1732)] = Object[n(1221)](s[n(1732)])), s;
    };
    return bx(r) ? r[t(2403)]((s) => e(s)) : e(r);
  }
  [a(264)]() {
    const x = a;
    return this._def[x(257)];
  }
}
Ex[a(665)] = (o, x) => new Ex({ innerType: o, typeName: p0.ZodReadonly, ...y0(x) });
function _a(o, x) {
  const t = a, r = typeof o === t(1622) ? o(x) : typeof o === t(2161) ? { message: o } : o;
  return typeof r === t(2161) ? { message: r } : r;
}
function fo(o, x = {}, t) {
  const r = a;
  return o ? ax[r(665)]().superRefine((e, s) => {
    const n = r, i = o(e);
    if (i instanceof Promise) return i[n(2403)]((c) => {
      const u = n;
      if (!c) {
        const d = _a(x, e), f = d[u(822)] ?? t ?? !0;
        s[u(2847)]({ code: u(806), ...d, fatal: f });
      }
    });
    if (!i) {
      const c = _a(x, e), u = c[n(822)] ?? t ?? !0;
      s.addIssue({ code: n(806), ...c, fatal: u });
    }
  }) : ax[r(665)]();
}
var p0;
(function(o) {
  const x = a;
  o[x(439)] = x(439), o[x(2334)] = x(2334), o[x(2377)] = x(2377), o[x(303)] = "ZodBigInt", o[x(2626)] = "ZodBoolean", o[x(2259)] = x(2259), o[x(1415)] = x(1415), o.ZodUndefined = "ZodUndefined", o[x(1273)] = x(1273), o.ZodAny = x(1022), o[x(1602)] = "ZodUnknown", o[x(2322)] = "ZodNever", o.ZodVoid = "ZodVoid", o[x(2420)] = x(2420), o[x(1739)] = x(1739), o[x(1597)] = x(1597), o.ZodDiscriminatedUnion = x(2837), o[x(1432)] = x(1432), o.ZodTuple = x(1222), o[x(2849)] = "ZodRecord", o[x(1285)] = x(1285), o.ZodSet = "ZodSet", o[x(1576)] = x(1576), o[x(2398)] = x(2398), o[x(2479)] = x(2479), o.ZodEnum = x(2059), o[x(2720)] = x(2720), o[x(2294)] = x(2294), o.ZodOptional = x(1168), o[x(2307)] = x(2307), o[x(841)] = x(841), o[x(1822)] = "ZodCatch", o[x(1135)] = x(1135), o[x(882)] = x(882), o.ZodPipeline = x(630), o[x(1076)] = x(1076);
})(p0 || (p0 = {}));
const Ux = (o, x = { message: a(2651) + o[a(1055)] }) => fo((t) => t instanceof o, x), g = ve.create, W = Be[a(665)], e0 = Ht[a(665)], q0 = ax[a(665)], Se = Bt.create;
Ce[a(665)];
const Hx = Zt[a(665)], v0 = le[a(665)], S = W0.create, K0 = yx[a(665)], $s = na.create;
vx[a(665)], Oe.create;
const D0 = wx[a(665)], t0 = Sx[a(665)], R0 = _e.create;
kx[a(665)];
const B = we[a(665)];
De[a(665)];
var ts;
class lo {
  constructor(x, t) {
    m0(this, "graphInstance");
    m0(this, ts);
    const r = a;
    this[r(1768)] = x, this[r(1719)] = t;
  }
  get [(ts = a(1719), a(2585))]() {
    const x = a, t = this[x(1768)].getNodeStore(this.nodeId);
    if (!t) throw new Error(x(1966) + this[x(1719)]);
    return t;
  }
  get [a(2482)]() {
    const x = a, t = this[x(1768)][x(1655)]().getNode(this[x(1719)]);
    if (!t) throw new Error(x(916) + this[x(1719)]);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s != "string") return;
      const i = t[n(2482)][s], c = s[n(1955)]("__internal_");
      if (!i && !c) throw new Error(n(2592) + s + " not found for node " + this[n(1719)]);
      return async (u, d) => {
        const f = n, l = this[f(2273)]();
        if (!l) throw new Error(f(2690) + this[f(1719)]);
        const { transport: b, path: h } = l, m = this[f(1768)][f(815)]();
        if (!(i != null && i[f(1943)])) {
          const k = q0();
          let I;
          if (h[f(692)] === 2) I = await b[f(563)]({ method: "sdppp/directRequest", params: { action: s, data: u, sourceNodeId: m } }, k);
          else try {
            I = await b[f(563)]({ method: f(2203), params: { action: f(345), data: { targetNodeId: this.nodeId, targetAction: s, targetData: u, forwardPath: h[f(2088)](1) }, sourceNodeId: m } }, k);
          } catch (A) {
            throw console[f(948)](f(2089) + s + ":", A), console[f(948)]({ targetNodeId: this[f(1719)], targetAction: s, targetData: u, forwardPath: h.slice(1) }), A;
          }
          return I;
        }
        let v;
        return h[f(692)] === 2 ? v = b[f(278)]({ action: s, data: u, sourceNodeId: m }, i[f(206)], d) : v = b.streamRequest({ action: f(345), data: { targetNodeId: this.nodeId, targetAction: s, targetData: u, forwardPath: h[f(2088)](1) }, sourceNodeId: m }, i.responseSchema, d), v;
      };
    } });
  }
  [a(2273)]() {
    const x = a;
    return this.graphInstance[x(928)](this[x(1719)]);
  }
}
var as, rs;
class Us {
  constructor(x) {
    m0(this, rs);
    m0(this, "actionManager");
    m0(this, as);
    const t = a;
    this[t(1768)] = x, this[t(2206)] = x[t(2206)], this.broadcastManager = x[t(2758)];
  }
  initializeConsumer({ store: x, storeName: t, onStateUpdate: r, requestInitialState: e }) {
    const s = a;
    this[s(2758)][s(1327)]("store:update:" + t, (n) => {
      const i = s;
      try {
        n.sourceNodeId !== this[i(1768)][i(815)]() && r(n[i(543)]);
      } catch (c) {
        console[i(948)]("[GraphStoreSynchronizer] Error processing store update for " + t + ":", c);
      }
    });
  }
  [(rs = a(1768), as = a(2758), a(457))]({ store: x, storeName: t, sendStateUpdate: r, onInitialStateRequested: e }) {
    const s = a, n = this[s(1768)][s(815)](), i = async (d, f = !1) => {
      const l = s;
      if (this[l(268)]()) try {
        await this[l(2758)][l(2354)](l(2829) + t, { storeName: t, sourceNodeId: n, stateUpdate: d, isInitialState: f });
      } catch (h) {
        console[l(948)](l(1331) + t + ":", h);
      }
    }, c = x[s(2683)]((d) => {
      i(d, !1);
    });
    e(() => {
      i(x[s(2716)](), !0);
    });
    const u = s(800) + t;
    return this[s(2206)][s(618)](u, async () => {
      const d = s, f = x[d(2716)]();
      return await i(f, !0), { success: !0 };
    }), this.broadcastManager[s(1327)](s(2738), async (d) => {
      const f = s;
      try {
        (d[f(373)] === n || d[f(473)] === n) && await i(x[f(2716)](), !0);
      } catch {
      }
    }), () => {
      var f;
      const d = s;
      c(), (f = this[d(2206)].actionHandlers) == null || f.delete(u);
    };
  }
  [a(268)]() {
    var t;
    const x = a;
    try {
      const r = this[x(1768)][x(1397)], e = r && r[x(1824)]() > 0, s = ((t = this.broadcastManager[x(2237)]) == null ? void 0 : t.size) > 0;
      return e || s;
    } catch {
      return !!this[x(2758)];
    }
  }
  async [a(2544)](x, t) {
    const r = a, e = this.graphInstance[r(815)]();
    if (this[r(268)]()) try {
      await this[r(2758)].broadcast("store:update:" + t, { storeName: t, sourceNodeId: e, stateUpdate: x[r(2716)](), isInitialState: !0 });
    } catch {
    }
  }
}
function ho({ graphInstance: o, store: x, name: t }) {
  const r = a, e = new Us(o), s = (i) => {
    const c = x.getState(), u = { ...c, ...i };
    x.setState(u);
  }, n = async () => {
    const i = K, c = "__internal_requestInitialState_" + t;
    try {
      const u = o[i(1366)](t);
      u && u[i(2482)] && u[i(2482)][c] && await u[i(2482)][c]();
    } catch (u) {
      console[i(343)](i(1037) + t + ":", u);
    }
  };
  e[r(416)]({ store: x, storeName: t, onStateUpdate: s, requestInitialState: n });
}
function po({ graphInstance: o, store: x, name: t }) {
  const r = a, e = new Us(o), s = async (i) => {
  }, n = (i) => {
  };
  return e[r(457)]({ store: x, storeName: t, sendStateUpdate: s, onInitialStateRequested: n });
}
var ss, ns;
class mo {
  constructor(x) {
    m0(this, ns, /* @__PURE__ */ new Map());
    m0(this, ss, /* @__PURE__ */ new Map());
    m0(this, "mountedTransports", /* @__PURE__ */ new Set());
    m0(this, "currentNodeId");
    const t = a;
    this[t(2723)] = x;
  }
  [(ns = a(1132), ss = a(2269), a(1967))](x) {
    return (t) => {
      const r = K;
      if (t && t[r(1534)] === this[r(2723)]) return;
      const e = this[r(1132)].get(x);
      if (e) {
        const { __origin: s, forwarded: n, ...i } = t || {};
        for (const c of e)
          try {
            c(i);
          } catch (u) {
            console[r(948)]("Error in broadcast handler for " + x + ":", u);
          }
      }
      !t[r(695)] && this[r(1920)](x, t);
    };
  }
  async [a(1920)](x, t) {
    const r = a;
    try {
      const e = { ...t, forwarded: !0 }, s = [...Array.from(this[r(2269)][r(1382)]()), ...Array[r(2781)](this.mountedTransports)], n = s[r(1649)]((i) => {
        const c = r;
        return i.notification({ method: c(1416), params: { messageType: x, message: e } })[c(1995)]((u) => {
          const d = c;
          console[d(948)](d(2014) + x + ":", u);
        });
      });
      await Promise.all(n);
    } catch (e) {
      console[r(948)](r(1184), e);
    }
  }
  [a(1327)](x, t) {
    const r = a;
    !this[r(1132)][r(2075)](x) && this[r(1132)][r(758)](x, /* @__PURE__ */ new Set()), this[r(1132)][r(1075)](x)[r(2655)](t);
  }
  setupTransportHandlers(x) {
    this[a(2790)](x);
  }
  [a(2790)](x) {
    const t = a, r = S({ method: t0("sdppp/broadcast"), params: S({ messageType: g(), message: q0() }) });
    x[t(1472)](r, async (e) => {
      const s = t, n = e.params.messageType;
      this[s(1967)](n)(e[s(1181)][s(225)]);
    });
  }
  [a(2069)](x, t) {
    const r = a;
    this[r(2269)][r(758)](x, t), this.setupTransportHandlers(t);
  }
  removeMiddleware(x) {
    const t = a;
    this[t(2269)][t(2215)](x);
  }
  async [a(2354)](x, t) {
    const r = a, e = [...Array[r(2781)](this[r(2269)][r(1382)]()), ...Array[r(2781)](this[r(297)])], s = e[r(1649)]((n) => {
      const i = r;
      return n[i(1750)]({ method: i(1416), params: { messageType: x, message: t } });
    });
    await Promise[r(403)](s);
  }
  mountTo(x) {
    const t = a;
    this[t(297)][t(2655)](x), this[t(2686)](x);
  }
  [a(1140)]() {
    const x = a;
    return Array.from(this.broadcastHandlers[x(750)]());
  }
  [a(899)]() {
    const x = a;
    this.broadcastHandlers[x(899)](), this[x(2269)][x(899)](), this[x(297)].clear();
  }
}
var os, is, cs;
class bo {
  constructor(x, t, r) {
    m0(this, cs, /* @__PURE__ */ new Map());
    m0(this, is);
    m0(this, os);
    m0(this, "getTransport");
    const e = a;
    this[e(2814)] = x, this[e(2723)] = t, this[e(2299)] = r;
  }
  [(cs = a(356), is = a(2814), os = a(2723), a(230))](x, t) {
    const r = a, e = this[r(2814)].getNode(this[r(2723)]);
    if (!e) throw new Error("Node definition not found for " + this[r(2723)]);
    const s = e[r(2482)][x];
    if (!s) throw new Error(r(2592) + String(x) + r(442) + this.currentNodeId);
    this[r(1e3)](x, t, s), this[r(356)].set(x, t);
  }
  validateHandlerType(x, t, r) {
    r[a(1943)];
  }
  [a(618)](x, t) {
    const r = a;
    this.actionHandlers[r(758)](x, t);
  }
  [a(621)](x) {
    const t = a;
    for (const [r, e] of this.actionHandlers) {
      const s = this[t(2814)][t(1366)](this[t(2723)]), n = s == null ? void 0 : s[t(2482)][r];
      if (r.startsWith("__internal_") ? !1 : (n == null ? void 0 : n[t(1943)]) === !0) {
        const u = S({ action: t0(r) });
        x.registerStreamRequestorHandler(u, async function* (d, f, l) {
          const b = t, h = d.data || d, m = e(h, f, l);
          if (m && typeof m === b(544) && Symbol[b(772)] in m) for await (const v of m)
            yield v === void 0 ? {} : v;
          else {
            const v = await m;
            yield v === void 0 ? {} : v;
          }
        });
      }
    }
    this[t(2842)](x), this.registerDirectRequestHandlerGeneric(x);
  }
  registerProxyForwardHandler(x) {
    const t = a, r = S({ action: t0(t(345)) }), e = this;
    x[t(438)](r, async function* (s, n, i) {
      const c = t, u = s[c(909)] || s, { targetNodeId: d, targetAction: f, targetData: l, forwardPath: b } = u;
      if (!b || b[c(692)] === 0) throw new Error(c(826));
      const h = b[0], m = b[c(2088)](1);
      if (m[c(692)] === 0 && h === e[c(2723)]) {
        const v = e[c(356)][c(1075)](f);
        if (!v) throw new Error("Action " + f + c(2551) + e[c(2723)]);
        const k = v(l, n, i);
        if (k && typeof k === c(544) && Symbol[c(772)] in k) for await (const I of k)
          yield I === void 0 ? {} : I;
        else {
          const I = await k;
          yield I === void 0 ? {} : I;
        }
        return;
      }
      if (h === e[c(2723)] && m[c(692)] > 0) {
        const v = m[0], k = e[c(2299)](v);
        if (k) {
          const I = await k[c(278)]({ action: c(345), data: { targetNodeId: d, targetAction: f, targetData: l, forwardPath: m } }, S({}), i);
          for await (const A of I)
            yield A === void 0 ? {} : A;
          return;
        }
        throw new Error("Cannot forward to node " + v + c(1089));
      }
      throw new Error(c(330) + e[c(2723)] + c(1436) + b);
    });
  }
  [a(1133)]() {
    const x = a;
    return Array[x(2781)](this[x(356)][x(750)]());
  }
  [a(2394)](x) {
    return this[a(356)].has(x);
  }
  [a(2417)](x) {
    const t = a;
    return this.actionHandlers[t(1075)](x);
  }
  [a(899)]() {
    const x = a;
    this[x(356)][x(899)]();
  }
  [a(1104)](x, t, r) {
  }
  [a(2817)](x) {
    const t = a, r = S({ method: t0("sdppp/directRequest"), params: S({ action: g(), data: q0()[t(1027)]() }) }), e = this;
    x[t(437)](r, async (s, n) => {
      const i = t, { action: c, data: u } = s[i(1181)];
      if (c === "__proxy_forward") return await e.handleDirectProxyForward(u, n);
      const d = e[i(356)][i(1075)](c);
      if (!d) throw new Error(i(2592) + c + i(2551) + e[i(2723)]);
      const f = d(u, n), l = await f;
      return l === void 0 ? {} : l;
    });
  }
  async [a(456)](x, t) {
    const r = a, { targetNodeId: e, targetAction: s, targetData: n, forwardPath: i } = x;
    if (!i || i[r(692)] === 0) throw new Error(r(826));
    const c = i[0], u = i.slice(1);
    if (u[r(692)] === 0 && c === this[r(2723)]) {
      const d = this[r(356)][r(1075)](s);
      if (!d) throw new Error(r(2592) + s + r(2551) + this[r(2723)]);
      const f = d(n, t), l = await f;
      return l === void 0 ? {} : l;
    }
    if (c === this[r(2723)] && u[r(692)] > 0) {
      const d = u[0], f = this.getTransport(d);
      if (f) return await f[r(563)]({ method: r(2203), params: { action: r(345), data: { targetNodeId: e, targetAction: s, targetData: n, forwardPath: u } } }, q0());
      throw new Error(r(856) + d + " - no connection available");
    }
    throw new Error(r(330) + this[r(2723)] + r(1436) + i);
  }
}
var us;
class go {
  constructor(x, t) {
    m0(this, "definition");
    m0(this, "currentNodeId");
    m0(this, us, /* @__PURE__ */ new Set());
    const r = a;
    this.definition = x, this[r(2723)] = t;
  }
  markConnected(x) {
    this[a(542)].add(x);
  }
  [(us = a(542), a(1176))](x) {
    this[a(542)].delete(x);
  }
  [a(1245)](x) {
    const t = a;
    return this[t(542)][t(2075)](x);
  }
  findPath(x, t) {
    const r = a;
    if (x === t) return [x];
    const e = /* @__PURE__ */ new Set(), s = [{ nodeId: x, path: [x] }];
    for (; s.length > 0; ) {
      const { nodeId: n, path: i } = s[r(252)]();
      if (e[r(2075)](n)) continue;
      e[r(2655)](n);
      const c = this[r(2814)].getNeighbors(n);
      for (const u of c) {
        if (u === t) return [...i, u];
        !e[r(2075)](u) && s[r(452)]({ nodeId: u, path: [...i, u] });
      }
    }
  }
  getConnectedNodeIds() {
    const x = a;
    return Array[x(2781)](this[x(542)]);
  }
  [a(1824)]() {
    const x = a;
    return this[x(542)][x(2715)];
  }
  getAllReachableNodes() {
    const x = a, t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), e = [this.currentNodeId];
    for (r[x(2655)](this[x(2723)]); e[x(692)] > 0; ) {
      const s = e[x(252)](), n = this[x(2814)][x(1683)](s);
      for (const i of n)
        !r[x(2075)](i) && (r[x(2655)](i), (this[x(542)][x(2075)](i) || this.canReachThroughConnectedNodes(i, r)) && (t.add(i), e[x(452)](i)));
    }
    return Array[x(2781)](t);
  }
  canReachThroughConnectedNodes(x, t) {
    const r = a, e = this.findPath(this.currentNodeId, x);
    if (!e || e[r(692)] <= 1) return !1;
    for (let s = 1; s < e.length - 1; s++)
      if (!this[r(542)][r(2075)](e[s])) return !1;
    return !0;
  }
  [a(899)]() {
    const x = a;
    this[x(542)][x(899)]();
  }
}
var ds, fs, ls, hs, ps, ms, bs;
class yo {
  constructor(x, t) {
    m0(this, bs);
    m0(this, ms);
    m0(this, ps, /* @__PURE__ */ new Map());
    m0(this, "nodeProxies", /* @__PURE__ */ new Map());
    m0(this, hs);
    m0(this, ls);
    m0(this, fs);
    m0(this, ds, /* @__PURE__ */ new Map());
    const r = a;
    this[r(2814)] = x, this[r(2723)] = t, this[r(2247)](), this[r(2758)] = new mo(t), this.actionManager = new bo(x, t, (e) => this[r(1385)](e)), this[r(1397)] = new go(x, t), this.setupGraphStoreSync();
  }
  [(bs = a(2814), ms = a(2723), ps = a(1258), hs = a(2758), ls = a(2206), fs = a(1397), ds = a(1964), a(2247))]() {
    const x = a;
    for (const t of this.definition[x(2484)]()) {
      const r = this.definition[x(1366)](t);
      if (r && r[x(2585)]) {
        const e = this[x(2295)](r[x(2585)]), s = Ln(() => e);
        this[x(1258)].set(t, s);
      }
    }
  }
  [a(2295)](x) {
    const t = a;
    if (!x) return {};
    try {
      return x[t(706)]({});
    } catch {
      return this[t(2284)](x);
    }
  }
  [a(2284)](x) {
    const t = a;
    if (!x || !x.def) return {};
    if (x[t(1250)][t(612)] === t(1944)) {
      const r = x.def[t(244)];
      return typeof r === t(1622) ? r() : r;
    }
    if (x[t(1250)].type === t(544)) {
      const r = {};
      let e;
      try {
        e = x.def[t(2068)];
      } catch {
        return {};
      }
      if (e) for (const [s, n] of Object[t(1587)](e)) {
        const i = this[t(996)](n);
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
        return this[t(2284)](x);
      }
  }
  async [a(2251)](x, t) {
    const r = a;
    if (!this[r(2814)][r(2360)](this.currentNodeId, x)) throw new Error(r(2452) + this[r(2723)] + " to " + x);
    if (this.nodeTransports[r(2075)](x)) throw new Error(r(2879) + x);
    try {
      this.nodeTransports[r(758)](x, t), this.connectionManager[r(2413)](x), this.setupNodeBindings(x, t), await this[r(2190)](x), await this[r(315)](x);
    } catch (e) {
      throw this[r(1614)](x), e;
    }
  }
  disconnect(x) {
    this[a(1614)](x);
  }
  async [a(2190)](x) {
    const t = a;
    await new Promise((r) => setTimeout(r, 100));
    for (const [r, e] of this[t(1258)])
      if (r === this[t(2723)]) try {
        await this[t(2758)].broadcast(t(2829) + r, { storeName: r, sourceNodeId: this.currentNodeId, stateUpdate: e.getState(), isInitialState: !0 });
      } catch {
      }
    try {
      await this.broadcastManager[t(2354)](t(2738), { fromNode: this[t(2723)], toNode: x });
    } catch {
    }
  }
  async [a(315)](x) {
    const t = a;
    try {
      const r = this.connectionManager.getAllReachableNodes();
      for (const e of r)
        try {
          const s = t(800) + e, n = this[t(1366)](e);
          if (n && n[t(2482)] && n[t(2482)][s]) {
            const i = n.actions[s]({});
            await Promise[t(2806)]([i, new Promise((c) => setTimeout(c, 300))]);
          }
        } catch (s) {
          console[t(2818)](t(1037) + e + ":", s);
        }
    } catch (r) {
      console[t(2818)](t(1064) + x + ":", r);
    }
  }
  cleanupConnection(x) {
    const t = a, r = this.nodeTransports[t(1075)](x);
    this[t(1964)][t(2215)](x), this[t(1397)][t(1176)](x), this[t(2758)].removeMiddleware(x), r && r.cleanup();
  }
  [a(633)](x, t) {
    const r = a;
    if (!this[r(1258)][r(1075)](this[r(2723)])) throw new Error(r(2430) + this.currentNodeId);
    this[r(2206)][r(621)](t), this[r(2758)].addMiddleware(x, t);
  }
  [a(2752)]() {
    const x = a;
    for (const [t, r] of this[x(1258)])
      t === this[x(2723)] ? po({ graphInstance: this, store: r, name: t }) : ho({ graphInstance: this, store: r, name: t });
  }
  [a(1366)](x) {
    const t = a;
    if (!this.nodeProxies[t(2075)](x)) {
      const r = new lo(this, x);
      this[t(1595)][t(758)](x, r);
    }
    return this[t(1595)][t(1075)](x);
  }
  [a(1385)](x) {
    const t = a;
    return this[t(1964)][t(1075)](x);
  }
  [a(928)](x) {
    const t = a, r = this[t(1964)][t(1075)](x);
    if (r) return { transport: r, path: [this[t(2723)], x] };
    const e = this[t(869)](this[t(2723)], x);
    if (e && e[t(692)] > 1) {
      const s = e[1], n = this.nodeTransports[t(1075)](s);
      if (n) return { transport: n, path: e };
    }
  }
  [a(731)](x) {
    return this[a(1258)].get(x);
  }
  get [a(2585)]() {
    const x = a, t = this[x(1258)][x(1075)](this[x(2723)]);
    if (!t) throw new Error(x(906) + this.currentNodeId);
    return t;
  }
  get [a(2482)]() {
    const x = a, t = this[x(2814)].getNode(this.currentNodeId);
    if (!t) throw new Error(x(540) + this[x(2723)]);
    return new Proxy({}, { get: (e, s) => {
      const n = x;
      if (typeof s != "string") return;
      const i = t.actions[s];
      if (!i) throw new Error(n(2592) + s + n(2254) + this[n(2723)]);
      return (c, u) => {
        const d = n, f = this.actionManager[d(2417)](s);
        if (!f) throw new Error(d(2160) + s + d(1892) + this[d(2723)]);
        const l = { nodeId: this[d(2723)] };
        if (i.stream === !0) {
          const b = f(c, l, u);
          return b && typeof b == "object" && Symbol[d(772)] in b ? (async function* () {
            for await (const h of b)
              yield h === void 0 ? {} : h;
          })() : (async function* () {
            const h = await b;
            yield h === void 0 ? {} : h;
          })();
        } else return (async () => {
          const b = d, h = f(c, l, u);
          if (h && typeof h == "object" && Symbol[b(772)] in h) {
            const m = h[Symbol[b(772)]](), v = await m[b(2596)]();
            return v[b(1732)] === void 0 ? {} : v.value;
          } else {
            const m = await h;
            return m === void 0 ? {} : m;
          }
        })();
      };
    } });
  }
  [a(1655)]() {
    return this[a(2814)];
  }
  [a(815)]() {
    return this[a(2723)];
  }
  [a(2001)](x) {
    return this.getTransportToNode(x);
  }
  [a(230)](x, t) {
    const r = a;
    this[r(2206)][r(230)](x, t);
  }
  destroy() {
    const x = a, t = Array[x(2781)](this.nodeTransports[x(750)]());
    for (const r of t)
      this[x(1614)](r);
    this.broadcastManager[x(899)](), this.actionManager[x(899)](), this.connectionManager[x(899)]();
  }
  [a(869)](x, t) {
    return this.connectionManager.findPath(x, t);
  }
  [a(2545)](x, t) {
    return this[a(869)](x, t);
  }
  async broadcast(x, t) {
    const r = a, e = { ...t, __origin: this.currentNodeId };
    return this[r(2758)][r(2354)](x, e);
  }
  [a(2102)](x, t) {
    const r = a;
    this[r(2758)][r(1327)](x, t);
  }
}
function vo(o) {
  const x = new Mn(o);
  return { joinAs(t) {
    const r = K;
    if (!x[r(1366)](t)) throw new Error(r(1054) + String(t) + r(561));
    return new yo(x, t);
  }, getDefinition() {
    return o;
  }, getNodeIds() {
    return x[K(2484)]();
  }, getNeighbors(t) {
    return x[K(1683)](t);
  }, hasEdge(t, r) {
    return x[K(2360)](t, r);
  }, hasPath(t, r) {
    return x.hasPath(t, r);
  }, findPath(t, r) {
    return x.findPath(t, r);
  } };
}
const Da = { INTERCEPTOR_ERROR: a(739) };
var gs, ys, vs, ws;
class ja extends (ws = Error, vs = a(612), ys = a(819), gs = a(496), ws) {
  constructor(t, r, e, s) {
    const n = a;
    super(e);
    m0(this, vs);
    m0(this, ys);
    m0(this, gs);
    this[n(1055)] = n(2276), this[n(612)] = t, this[n(819)] = r, this.originalError = s;
  }
}
var Ss, ks, Ps, Is, Es, Rs, Cs, Fs, Ns;
class wo {
  constructor(x, t = {}) {
    m0(this, Ns);
    m0(this, "realTransport", null);
    m0(this, Fs);
    m0(this, Cs, /* @__PURE__ */ new Map());
    m0(this, Rs, /* @__PURE__ */ new Map());
    m0(this, Es, /* @__PURE__ */ new Map());
    m0(this, Is, /* @__PURE__ */ new Map());
    m0(this, Ps, []);
    m0(this, ks, []);
    m0(this, Ss, []);
    m0(this, "stats", { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 });
    const r = a;
    this[r(604)] = x, this[r(1005)] = { debug: !1, interceptorTimeout: 5e3, continueOnInterceptorError: !0, ...t };
  }
  async connect(x) {
    const t = a;
    this[t(579)] = x, x[t(555)] = (r) => {
      this.handleIncomingMessage(r);
    }, x[t(1292)] = () => {
      const r = t;
      this[r(2091)][r(1471)]((e) => e());
    }, x[t(656)] = (r) => {
      const e = t;
      this[e(2761)][e(1471)]((s) => s(r));
    }, await this[t(604)][t(2251)](this);
  }
  async [(Ns = a(604), Fs = a(1005), Cs = a(1911), Rs = a(2556), Es = a(1556), Is = a(518), Ps = a(1550), ks = a(2091), Ss = a(2761), a(1832))](x) {
    const t = a;
    this[t(2818)](t(2297), t(2171), x);
    try {
      if (this[t(893)](x) && await this[t(1866)](x) || this[t(501)](x) && await this[t(2148)](x))
        return;
      this[t(1550)][t(1471)]((r) => r(x));
    } catch (r) {
      this[t(2130)][t(1672)]++, this[t(2818)](t(948), t(737), r), this[t(1550)][t(1471)]((e) => e(x));
    }
  }
  async [a(1866)](x) {
    const t = a, r = this.requestHandlers.get(x.method);
    if (!r) return !1;
    try {
      this[t(2130)][t(2677)]++;
      const e = await r(x, {});
      return this[t(579)] && "id" in x && await this.realTransport[t(405)]({ jsonrpc: t(2082), id: x.id, result: e }), !0;
    } catch (e) {
      return this[t(2130)][t(1672)]++, this[t(579)] && "id" in x && await this[t(579)][t(405)]({ jsonrpc: t(2082), id: x.id, error: { code: -32603, message: t(2475) + JSON[t(2625)](x.params) + " " + e.message } }), !0;
    }
  }
  async [a(2148)](x) {
    const t = a, r = this[t(2556)].get(x[t(819)]);
    if (!r) return !1;
    try {
      return this.stats[t(1668)]++, await r(x), !0;
    } catch (e) {
      return this[t(2130)][t(1672)]++, this.log("error", t(1628) + x[t(819)] + ":", e), !0;
    }
  }
  async send(x) {
    const t = a;
    this[t(2818)](t(2297), t(936), x);
    try {
      if (this[t(893)](x)) {
        const r = await this[t(597)](x);
        if (r[t(377)]) {
          if (r[t(2671)] === null) return;
          r.result && (x = { ...r.result, jsonrpc: "2.0" }, this[t(2130)][t(1805)]++);
        } else if (this[t(1005)][t(2389)]) this[t(2818)]("warn", t(1323) + x[t(819)] + ":", r.error);
        else throw r[t(948)];
      }
      if (this.isNotification(x)) {
        const r = await this[t(896)](x);
        if (r.success) {
          if (r[t(2671)] === null) return;
          r.result && (x = { ...r[t(2671)], jsonrpc: "2.0" }, this.stats[t(1298)]++);
        } else if (this[t(1005)].continueOnInterceptorError) this[t(2818)](t(343), t(666) + x[t(819)] + ":", r[t(948)]);
        else throw r[t(948)];
      }
      this[t(579)] && await this[t(579)][t(405)](x);
    } catch (r) {
      throw this.stats[t(1672)]++, r;
    }
  }
  async [a(2604)]() {
    const x = a;
    this[x(579)] && await this[x(579)][x(2604)]();
  }
  async [a(1278)]() {
    const x = a;
    this[x(579)] && await this[x(579)][x(1278)]();
  }
  set [a(555)](x) {
    const t = a;
    this[t(1550)] = [x];
  }
  set [a(1292)](x) {
    const t = a;
    this[t(2091)] = [x];
  }
  set [a(656)](x) {
    const t = a;
    this[t(2761)] = [x];
  }
  async executeOutgoingRequestInterceptor(x) {
    const t = a, r = this[t(1556)][t(1075)](x.method);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this.withTimeout(r(x), this.options.interceptorTimeout) };
    } catch (e) {
      return this.stats.errors++, { success: !1, error: new ja(Da[t(2874)], x[t(819)], t(1069) + e[t(225)], e) };
    }
  }
  async [a(896)](x) {
    const t = a, r = this.outgoingNotificationInterceptors[t(1075)](x[t(819)]);
    if (!r) return { success: !0, result: x };
    try {
      return { success: !0, result: await this[t(1111)](r(x), this[t(1005)][t(576)]) };
    } catch (e) {
      return this[t(2130)][t(1672)]++, { success: !1, error: new ja(Da[t(2874)], x.method, t(192) + e[t(225)], e) };
    }
  }
  async [a(563)](x, t) {
    const r = a;
    return await this.protocol[r(563)](x, t, { timeout: 36e5 });
  }
  async [a(1750)](x) {
    const t = a;
    return await this[t(604)][t(1750)](x);
  }
  setRequestHandler(x, t) {
    const r = a, e = x[r(2068)][r(819)][r(1732)];
    this[r(1911)].set(e, t);
  }
  [a(1472)](x, t) {
    const r = a, e = x[r(2068)][r(819)][r(1732)];
    this.notificationHandlers[r(758)](e, t);
  }
  [a(2499)](x, t) {
    const r = a, e = x[r(2068)].method[r(1732)];
    this[r(1556)][r(758)](e, t);
  }
  [a(1523)](x, t) {
    const r = a, e = x.shape[r(819)].value;
    this[r(518)].set(e, t);
  }
  [a(2041)](x) {
    this[a(1911)].delete(x);
  }
  unsetNotificationHandler(x) {
    this.notificationHandlers.delete(x);
  }
  unsetOutgoingRequestInterceptor(x) {
    this[a(1556)].delete(x);
  }
  [a(697)](x) {
    const t = a;
    this[t(518)][t(2215)](x);
  }
  hasRequestHandler(x) {
    const t = a;
    return this[t(1911)][t(2075)](x);
  }
  [a(1857)](x) {
    const t = a;
    return this[t(2556)][t(2075)](x);
  }
  [a(1491)](x) {
    const t = a;
    return this[t(1556)][t(2075)](x);
  }
  [a(2644)](x) {
    return this[a(518)].has(x);
  }
  [a(2093)]() {
    return { ...this[a(2130)] };
  }
  resetStats() {
    const x = a;
    this[x(2130)] = { requestsHandled: 0, notificationsHandled: 0, requestsIntercepted: 0, notificationsIntercepted: 0, errors: 0 };
  }
  [a(2742)]() {
    return this[a(604)];
  }
  [a(2652)]() {
    const x = a;
    this[x(1911)].clear(), this[x(2556)][x(899)](), this[x(1556)].clear(), this.outgoingNotificationInterceptors[x(899)]();
  }
  isRequest(x) {
    return x.jsonrpc === "2.0" && "method" in x && "id" in x;
  }
  isNotification(x) {
    return x[a(585)] === "2.0" && "method" in x && !("id" in x);
  }
  async [a(1111)](x, t) {
    const r = new Promise((e, s) => {
      const n = K;
      setTimeout(() => s(new Error(n(374))), t);
    });
    return await Promise.race([x, r]);
  }
  [a(2818)](x, t, ...r) {
    const e = a;
    if (!this.options.debug && x === e(2297)) return;
    const s = e(1645);
    switch (x) {
      case e(2297):
        console[e(2297)](s, t, ...r);
        break;
      case e(2381):
        console[e(2381)](s, t, ...r);
        break;
      case e(343):
        console[e(343)](s, t, ...r);
        break;
      case "error":
        console[e(948)](s, t, ...r);
        break;
    }
  }
}
S({ method: t0(a(1553)), params: S({ requestId: g(), data: q0(), error: g()[a(1864)](), finished: e0() }) }), S({ method: t0(a(2275)), params: S({ action: g(), data: q0() }) }), S({ method: t0(a(1458)), params: S({ requestId: g() }) });
const So = S({ method: t0(a(1553)), params: S({ requestId: g(), data: q0(), error: g()[a(1864)](), finished: e0() }) }), ko = S({ method: t0("sdppp/streamRequest"), params: S({ action: g(), data: q0() }) }), Po = S({ method: t0(a(1458)), params: S({ requestId: g() }) });
var Ts, qs;
class Io {
  constructor() {
    m0(this, qs, /* @__PURE__ */ new Map());
    m0(this, Ts, /* @__PURE__ */ new Map());
  }
  [(qs = a(1713), Ts = a(1654), a(452))](x) {
    const t = a, { requestId: r } = x[t(1181)], e = this.queues[t(1075)](r) || [], s = this[t(1654)].get(r) || [];
    s[t(692)] > 0 ? s[t(252)]()(x[t(1181)]) : (e.push(x[t(1181)]), this[t(1713)][t(758)](r, e));
  }
  async [a(2231)](x) {
    const t = a, r = this[t(1713)][t(1075)](x) || [];
    return r[t(692)] > 0 ? r[t(252)]() : new Promise((e) => {
      const s = t, n = this[s(1654)][s(1075)](x) || [];
      n[s(452)](e), this[s(1654)].set(x, n);
    });
  }
  [a(2652)](x) {
    const t = a;
    this[t(1713)][t(2215)](x), this[t(1654)][t(2215)](x);
  }
}
var As, Os, _s;
class Eo extends wo {
  constructor(t, r = {}) {
    const e = a;
    super(t, r);
    m0(this, "streamRequestorHandlers", /* @__PURE__ */ new Map());
    m0(this, _s, 1);
    m0(this, Os, /* @__PURE__ */ new Map());
    m0(this, As, new Io());
    this[e(2352)]();
  }
  [(_s = a(2054), Os = a(1908), As = a(2804), a(2352))]() {
    const t = a;
    this.setupStreamResponseHandler(), this.setupAbortHandler(), this[t(2422)]();
  }
  [a(1469)]() {
    const t = a;
    this[t(1472)](So, async (r) => {
      const e = t;
      this[e(2804)][e(452)](r);
    });
  }
  setupAbortHandler() {
    const t = a;
    this[t(437)](Po, async (r, e) => {
      const s = t, { requestId: n } = r[s(1181)], i = this[s(1908)][s(1075)](n);
      return i && (i[s(1284)](), this[s(1908)][s(2215)](n)), { success: !0 };
    });
  }
  setupStreamRequestHandler() {
    const t = a;
    this[t(437)](ko, async (r, e) => {
      const s = t, n = s(2518) + this[s(2054)]++, i = this[s(1861)][s(1075)](r.params[s(2077)]);
      if (!i) throw new Error(s(344) + r.params.action);
      const c = new AbortController();
      return this[s(1908)][s(758)](n, c), this.executeHandlerAsync(n, i, r[s(1181)], e, c), { requestId: n };
    });
  }
  async [a(448)](t, r, e, s, n) {
    const i = a;
    try {
      const c = r(e, s, n[i(1562)]);
      for await (const u of c) {
        if (n[i(1562)][i(532)]) break;
        await this.notification({ method: i(1553), params: { requestId: t, data: u, error: null, finished: !1 } });
      }
      !n.signal[i(532)] && await this[i(1750)]({ method: i(1553), params: { requestId: t, data: null, error: null, finished: !0 } });
    } catch (c) {
      !n[i(1562)][i(532)] && await this[i(1750)]({ method: "sdppp/streamResponse", params: { requestId: t, data: null, error: c[i(225)], finished: !0 } });
    } finally {
      this.runningRequests.delete(t);
    }
  }
  [a(438)](t, r) {
    const e = a;
    this.streamRequestorHandlers.set(t[e(2068)][e(2077)][e(1732)], r);
  }
  async [a(278)](t, r, e) {
    const s = a;
    this[s(1976)](e);
    const n = await this.sendStreamRequestorRequest(t), i = this[s(2719)](n), c = this[s(2241)]();
    return this[s(913)](i, c, n, e);
  }
  [a(1976)](t) {
    if (t && t.aborted) throw new Error("AbortSignal is already aborted");
  }
  async [a(1991)](t) {
    const r = a;
    return (await this[r(563)]({ method: r(2275), params: { action: t[r(2077)], data: t[r(909)] } }, S({ requestId: g() })))[r(1241)];
  }
  [a(2719)](t) {
    return this[a(2804)];
  }
  createStreamState() {
    return { finished: !1, error: null };
  }
  createAsyncIterator(t, r, e, s) {
    const n = a, i = this;
    return { async *[Symbol[n(772)]]() {
      const c = n;
      try {
        for (; !r.finished && !r[c(948)]; ) {
          if (s && s[c(532)])
            throw await i[c(563)]({ method: c(1458), params: { requestId: e } }, S({ success: e0() })), new Error(c(2885));
          const u = await t.pop(e);
          if (u[c(948)])
            throw r[c(948)] = u[c(948)], new Error(u[c(948)]);
          if (u[c(792)]) {
            r.finished = !0;
            break;
          }
          u.data !== null && (yield u[c(909)]);
        }
      } finally {
        t[c(2652)](e);
      }
    } };
  }
  [a(2525)]() {
    const t = a;
    return this[t(1908)][t(2715)];
  }
  async [a(365)](t) {
    const r = a, e = this[r(1908)][r(1075)](t);
    return e ? (e.abort(), this[r(1908)][r(2215)](t), !0) : !1;
  }
  abortAllRequests() {
    const t = a;
    for (const [r, e] of this.runningRequests)
      e.abort();
    this[t(1908)].clear();
  }
  [a(2652)]() {
    const t = a;
    super.cleanup(), this.abortAllRequests(), this[t(1861)][t(899)]();
  }
}
S({ id: g(), method: g(), params: q0()[a(1027)](), traceId: g().optional() }), S({ id: g(), result: q0()[a(1027)](), error: S({ code: W(), message: g(), data: q0()[a(1027)]() })[a(1027)]() }), S({ method: g(), params: q0()[a(1027)]() }), S({ method: t0("sdppp/streamRequest"), params: S({ action: g(), data: q0() }) }), S({ method: t0("sdppp/streamResponse"), params: S({ requestId: g(), data: q0()[a(1027)](), error: g()[a(1864)]()[a(1027)](), finished: e0()[a(1944)](!1) }) }), S({ method: t0("sdppp/abort"), params: S({ requestId: g() }) }), S({ method: t0(a(1416)), params: S({ messageType: g(), message: q0() }) });
function Hs(o) {
  const x = a;
  return o && o.__esModule && Object.prototype[x(873)][x(1994)](o, x(1944)) ? o[x(1944)] : o;
}
const ze = S({ leftDistance: W(), topDistance: W(), rightDistance: W(), bottomDistance: W(), width: W(), height: W() }), Ne = { name: g(), uiWeight: W() }, Ro = S({ ...Ne, outputType: t0("images"), options: S({ required: e0(), maxCount: W()[a(1027)](), maskMode: e0()[a(1027)]() }) }), Co = S({ ...Ne, outputType: t0(a(2271)), options: S({ required: e0() }) }), Fo = S({ ...Ne, outputType: t0(a(2161)), options: S({ required: e0() }) }), No = S({ ...Ne, outputType: t0(a(1146)), options: S({ required: e0() }) }), To = S({ ...Ne, outputType: t0(a(2153)), options: S({ required: e0(), min: W().optional(), max: W()[a(1027)](), step: W().optional(), random: e0()[a(1027)](), slider: e0()[a(1027)]() }) }), qo = S({ ...Ne, outputType: t0(a(2702)), options: S({ required: e0(), values: v0(g()), labels: v0(g())[a(1027)]() }) }), Ao = S({ ...Ne, outputType: t0(a(1280)), options: S({ required: e0(), values: v0(g()) }) }), Oo = S({ ...Ne, outputType: t0(a(1889)), options: S({ required: e0() }) }), _o = $s("outputType", [Ro, Co, Fo, No, To, qo, Ao, Oo]), Do = S({ id: g(), title: g(), widgets: v0(_o), uiWeightSum: W() }), jo = S({ widgetableID: g(), widgetablePath: g(), nodes: D0(g(), Do), nodeIndexes: v0(g()), note: g()[a(1027)](), options: D0(g(), q0()) }), Mo = S({ widgetableStructure: jo[a(1944)]({ widgetableID: "", widgetablePath: "", nodes: {}, note: "", options: {}, nodeIndexes: [] }), widgetableValues: D0(g(), v0(q0()))[a(1944)]({}), widgetableErrors: D0(g(), g())[a(1944)]({}), queueSize: W()[a(1944)](0), lastError: g()[a(1944)](""), progress: W().default(0), executingNodeTitle: g().default(""), executingNodeID: g()[a(1944)](""), graphProgress: W()[a(1944)](0), comfyUserToken: g()[a(1944)](""), comfyOrgLoggedIn: e0()[a(1944)](!1), comfyOrgAPIKey: g().default(""), comfyWSState: R0(["connected", a(1255)])[a(1944)](a(187)), lastRunTime: W().default(0) }), Lo = S({ bannerData: q0()[a(1027)](), refreshable: e0()[a(1944)](!1), backwardable: e0()[a(1944)](!1), loginable: e0()[a(1944)](!1), runnable: e0()[a(1944)](!1), workBoundaries: D0(W(), ze).default({}), workBoundaryMaxSizes: D0(W(), W())[a(1944)]({}) }), $o = S({ uname: g()[a(1944)](""), activeDocumentID: W()[a(1944)](0), layers: v0(S({ id: W(), name: g(), identify: g() }))[a(1944)]([]), actions: v0(g()).default([]), theme: g()[a(1944)]("kPanelBrightnessMediumGray"), sdpppX: D0(g(), q0())[a(1944)]({}), locale: R0([a(2367), "en-US"])[a(1944)](a(1282)), comfyWebviewConnectStatus: R0([a(637), a(187), "disconnected"])[a(1944)](a(1859)), comfyWebviewLoadError: g()[a(1944)](""), comfyWebviewLoading: e0()[a(1944)](!1), comfyWebviewVersion: g()[a(1944)](""), comfyHTTPCode: W().default(200), comfyURL: g().default(""), sdkWebviewFocusing: e0()[a(1944)](!1), sdkWebviewConnectStatus: R0(["connecting", "connected", "disconnected"])[a(1944)](a(1859)), isLogin: e0().default(!1), isGuest: e0()[a(1944)](!1), requestingLogin: e0()[a(1944)](!1), loginMessage: g()[a(1944)](""), token: g()[a(1944)](""), userInfo: D0(g(), q0())[a(1944)]({}), taskLastRun: W()[a(1944)](0), canvasStateID: W()[a(1027)](), selectionStateID: g().optional(), selectionBoundary: ze[a(1864)]()[a(1027)]() }), Uo = { setNodeTitle: { requestSchema: S({ node_id: g(), title: g() }), responseSchema: S({ success: e0() }) }, reboot: { requestSchema: S({}), responseSchema: S({ success: e0(), error: g()[a(1027)]() }) }, setComfyOrgAPIKey: { requestSchema: S({ api_key: g() }), responseSchema: S({ success: e0() }) }, logout: { requestSchema: S({}), responseSchema: S({ success: e0() }) }, uploadComfyImageFromUXP: { requestSchema: S({ fileName: g(), overwrite: e0()[a(1027)](), mimeType: g()[a(1027)](), dataBase64: g() }), responseSchema: S({ name: g() }) }, sdpppHandshake: { requestSchema: S({ hostVersion: g()[a(1027)]() }), responseSchema: S({ comfyVersion: g(), hostVersion: g().optional() }) } }, Ho = S({ workflows: v0(g()), error: g()[a(1027)]() }), zo = S({ success: e0(), nodeErrors: D0(g()).optional(), prompt_ids: v0(g()).optional(), images: v0(S({ url: g(), thumbnail: g() }))[a(1027)]() }), Vo = { setWidgetValue: { requestSchema: S({ values: v0(S({ nodeID: g(), widgetIndex: W(), value: D0(g(), q0()).or(g()).or(W()).or(e0()).or(v0(q0())) })) }), responseSchema: S({ success: e0() }) }, openWorkflow: { requestSchema: S({ workflow_path: g(), reset: e0()[a(1944)](!1) }), responseSchema: S({ success: e0() }) }, openWorkflowJSON: { requestSchema: S({ workflow_content: D0(q0()), workflow_path: g() }), responseSchema: S({ success: e0() }) }, listWorkflows: { requestSchema: S({ listMode: g()[a(1027)](), sdpppID: g().optional(), sdpppToken: g().optional() }), responseSchema: Ho }, saveWorkflow: { requestSchema: S({ workflow_path: g(), from_sid: g()[a(1027)]() }), responseSchema: S({ success: e0() }) }, run: { requestSchema: S({ size: W(), mode: R0([a(400), a(724)])[a(1944)](a(400))[a(1027)]() }), responseSchema: zo, stream: !0 }, stopAll: { requestSchema: S({}), responseSchema: S({ success: e0() }) } }, Bo = { backward: { requestSchema: Hx(), responseSchema: S({ success: e0() }) }, refresh: { requestSchema: Hx(), responseSchema: S({ success: e0() }) }, run: { requestSchema: Hx(), responseSchema: S({ success: e0() }) } }, Zo = S({ passwordPayload: S({ username: g(), password: g() }).or(S({ email: g(), password: g() })).or(S({ phone: g(), password: g() })).or(S({ identifier: g(), password: g() })) }).or(S({ passcodePayload: S({ phone: g(), code: g() }).or(S({ email: g(), code: g() })) })), Wo = S({ passwordPayload: S({ username: g(), password: g() }).or(S({ email: g(), password: g() })).or(S({ phone: g(), password: g() })).or(S({ identifier: g(), password: g() })) }).or(S({ passcodePayload: S({ phone: g(), code: g() }).or(S({ email: g(), code: g() })) })), Ko = { register: { requestSchema: Zo, responseSchema: S({}) }, login: { requestSchema: Wo, responseSchema: S({}) }, sendPassCode: { requestSchema: S({ phone: g().optional(), email: g()[a(1027)]() }), responseSchema: S({}) }, logout: { requestSchema: S({}), responseSchema: S({}) }, guestLogin: { requestSchema: S({}), responseSchema: S({}) } };
S({ resource: g()[a(1027)](), thumbnail: g()[a(1027)](), width: W()[a(1027)](), height: W().optional(), mimeType: g()[a(1027)](), source: g()[a(1027)](), error: g()[a(1027)]() }), S({ boundary: R0([a(367), "curlayer", a(210)]), content: R0([a(367), "curlayer", a(210)]).or(g()), imageSize: W(), imageQuality: W(), cropBySelection: R0(["no", a(786), a(1661)]), layer_identify: g().nullable()[a(1027)]() }), S({ content: R0([a(367), a(1082), a(210)]), reverse: e0(), imageSize: W(), layer_identify: g()[a(1864)]()[a(1027)]() }), S({ selection: R0(["newdoc_canvas", a(2620), a(762), a(664), a(2210), a(526), a(1687), a(866)]), url: g(), source: g(), cropBySelection: R0(["no", a(786), a(1661)]) });
const Go = { downloadImage: { requestSchema: S({ url: g() }), responseSchema: S({ thumbnail: g()[a(1027)](), resource: g()[a(1027)](), width: W()[a(1027)](), height: W()[a(1027)](), error: g()[a(1027)]() }) }, getThumbnail: { requestSchema: S({ resource: g(), maxSize: W().optional() }), responseSchema: S({ thumbnail: g().optional(), width: W()[a(1027)](), height: W()[a(1027)](), error: g()[a(1027)]() }) } }, Jo = { manageGuides: { requestSchema: S({ action: R0([a(665), a(899)]), rect: ze[a(1027)]() }), responseSchema: S({ success: e0() }) }, getBoundary: { requestSchema: S({ type: R0([a(1082), "selection"]) }), responseSchema: ze }, getImage: { requestSchema: S({ boundary: K0([R0([a(367), a(1082), a(210)]), ze]), content: K0([R0(["canvas", "curlayer"]), g()]), imageSize: W(), imageQuality: W(), cropBySelection: R0(["no", a(786), a(1661)]), SkipNonNormalLayer: e0(), layer_identify: g()[a(1864)]().optional() }), responseSchema: S({ resource: g()[a(1027)](), thumbnail: g()[a(1027)](), width: W().optional(), height: W().optional(), mimeType: g()[a(1027)](), source: g()[a(1027)](), error: g()[a(1027)]() }) }, getMask: { requestSchema: S({ boundary: K0([R0([a(367), "curlayer", a(210)]), ze]), content: R0(["canvas", "curlayer", a(210)]), reverse: e0(), imageSize: W(), layer_identify: g()[a(1864)]()[a(1027)]() }), responseSchema: S({ resource: g().optional(), thumbnail: g()[a(1027)](), width: W()[a(1027)](), height: W()[a(1027)](), mimeType: g()[a(1027)](), source: g()[a(1027)](), error: g()[a(1027)]() }) }, getCurrentLayerIdentify: { requestSchema: S({}), responseSchema: S({ layer_identify: g()[a(1864)]() }) }, importImage: { requestSchema: S({ resource: g(), boundaryUri: g()[a(1864)]()[a(1027)](), type: R0([a(367), a(1082), a(2441), a(1247)]), sourceWidth: W().optional(), sourceHeight: W()[a(1027)](), maskUri: g()[a(1864)]()[a(1027)]() }), responseSchema: S({ success: e0(), layers: v0(S({ identify: g() }))[a(1027)](), message: g().optional(), error: g()[a(1027)]() }) }, applyMaskToImage: { requestSchema: S({ imageResource: g(), maskResource: g(), invertMask: e0()[a(1027)]() }), responseSchema: S({ resource: g(), thumbnail: g()[a(1027)](), width: W(), height: W(), mimeType: g() }) }, showBoundarySelectionDialog: { requestSchema: S({ additionalData: D0(q0())[a(1027)]() }), responseSchema: S({ boundary: R0([a(367), a(1082), a(210)])[a(1027)](), cancelled: e0()[a(1027)]() }) }, selectImageSource: { requestSchema: S({ additionalData: D0(q0())[a(1027)]() }), responseSchema: S({ action: R0([a(2350), "pickLocalFile"])[a(1027)](), params: q0()[a(1027)](), cancelled: e0()[a(1027)]() }) }, selectContentSource: { requestSchema: S({ additionalData: D0(q0()).optional() })[a(1027)](), responseSchema: S({ resource: g()[a(1027)](), fileName: g()[a(1027)](), mimeType: g()[a(1027)](), size: W().optional(), layerIdentify: g()[a(1027)](), cancelled: e0().optional() }) } }, zx = S({ taskId: g(), taskName: g(), status: R0(["running", a(552), a(1608), "cancelled"]), currentStep: W()[a(1027)](), totalSteps: W()[a(1027)](), stepDescription: g()[a(1027)](), progressPercentage: W()[a(1279)](0).max(100)[a(1027)](), startTime: g(), endTime: g()[a(1027)](), error: g()[a(1027)](), errorCode: g()[a(1027)](), result: q0().optional(), metadata: D0(q0())[a(1027)]() }), Vx = S({ success: e0(), error: g().optional() }), Qo = { taskAdd: { requestSchema: zx, responseSchema: Vx }, taskUpdate: { requestSchema: zx[a(2495)]().required({ taskId: !0 }), responseSchema: Vx }, taskRemove: { requestSchema: zx[a(203)]({ taskId: !0 }), responseSchema: Vx } }, Xo = { log: { requestSchema: S({ level: R0(["log", a(2381), a(343), a(948)]), messages: v0(g()) }), responseSchema: S({}) }, openExternalLink: { requestSchema: S({ url: g() }), responseSchema: S({ error: g()[a(1027)]() }) }, getStorage: { requestSchema: S({ key: g() }), responseSchema: S({ value: g(), error: g().optional() }) }, setStorage: { requestSchema: S({ key: g(), value: g() }), responseSchema: S({ error: g()[a(1027)]() }) }, removeStorage: { requestSchema: S({ key: g() }), responseSchema: S({ error: g()[a(1027)]() }) }, keyboardAction: { requestSchema: S({ keycode: g() }), responseSchema: S({}) }, setComfyWebviewURL: { requestSchema: S({ url: g() }), responseSchema: S({}) }, getImageBase64: { requestSchema: S({ token: g() }), responseSchema: S({ base64: g().optional(), mimeType: g()[a(1027)](), error: g().optional() }) }, uploadComfyImage: { requestSchema: S({ uploadInput: S({ type: K0([t0(a(2279)), t0(a(1851)), t0(a(2424))]), resource: q0(), fileName: g(), mimeType: g().optional(), resourceId: g()[a(1027)]() }), overwrite: e0()[a(1027)]().default(!0) }), responseSchema: S({ name: g() }) }, pickLocalFile: { requestSchema: S({ acceptExtensions: v0(g())[a(1027)](), kind: R0(["image", a(1183)])[a(1027)]() })[a(1027)](), responseSchema: S({ cancelled: e0().optional(), resource: g()[a(1027)](), fileName: g()[a(1027)](), mimeType: g()[a(1027)](), size: W()[a(1027)](), error: g()[a(1027)]() }) }, proxiedFetch: { requestSchema: S({ url: g(), method: g()[a(1027)](), headers: D0(g())[a(1027)](), body: q0().optional(), bodyType: R0([a(506), a(1122), a(817)])[a(1027)]() }), responseSchema: S({ success: e0(), status: W()[a(1027)](), statusText: g()[a(1027)](), headers: D0(g())[a(1027)](), data: q0()[a(1027)](), error: g()[a(1027)]() }) }, openaiImageEdit: { requestSchema: S({ apiKey: g(), baseURL: g(), imageToken: g(), prompt: g(), model: g() }), responseSchema: S({ success: e0(), imageUrl: g()[a(1027)](), apiTime: W()[a(1027)](), error: g().optional() }) }, geminiImageGenerate: { requestSchema: S({ apiKey: g(), baseURL: g().optional(), imageInputs: v0(g())[a(1027)](), imageInput: g()[a(1027)](), imageInputType: R0([a(1851), a(1129)]), prompt: g() }), responseSchema: S({ success: e0(), imageUrl: g()[a(1027)](), apiTime: W().optional(), error: g()[a(1027)]() }) } }, Yo = K0([g(), Ux(Uint8Array), Ux(ArrayBuffer), Ux(DataView)]), ei = S({ buffer: Yo, name: g().nullable().optional(), mime: g()[a(1864)]()[a(1027)](), width: W().nullable()[a(1027)](), height: W()[a(1864)]()[a(1027)](), thumbnail: g().nullable()[a(1027)](), meta: D0(Se())[a(1027)]() }), xi = { "fileResource.createFromExternal": { requestSchema: S({ url: g(), fileName: g().optional() }), responseSchema: S({ resource: g()[a(1027)](), thumbnail: g()[a(1027)](), width: W()[a(1027)](), height: W()[a(1027)](), mime: g().optional(), mimeType: g().optional(), error: g()[a(1027)]() }) }, "fileResource.createFromLocal": { requestSchema: S({ types: v0(S({ description: g().optional(), extensions: v0(g())[a(1027)]() }))[a(1027)]() }), responseSchema: S({ resource: g()[a(1027)](), thumbnail: g().optional(), width: W().optional(), height: W()[a(1027)](), mime: g()[a(1027)](), error: g()[a(1027)]() }) }, "fileResource.createFromBuffer": { requestSchema: S({ files: v0(ei)[a(1279)](1) }), responseSchema: S({ resource: g()[a(1027)](), thumbnail: g()[a(1027)](), width: W()[a(1027)](), height: W()[a(1027)](), mime: g()[a(1027)](), error: g()[a(1027)]() }) }, "fileResource.createByContent": { requestSchema: S({ contentUri: g(), boundaryUri: g()[a(1027)](), options: D0(Se())[a(1027)]() }), responseSchema: S({ resource: g()[a(1027)](), thumbnail: g()[a(1027)](), width: W()[a(1027)](), height: W()[a(1027)](), mime: g()[a(1027)](), error: g()[a(1027)]() }) }, "fileResource.createByMask": { requestSchema: S({ maskUri: g(), boundaryUri: g().optional(), options: D0(Se())[a(1027)]() }), responseSchema: S({ resource: g()[a(1027)](), thumbnail: g()[a(1027)](), width: W().optional(), height: W()[a(1027)](), mime: g()[a(1027)](), error: g()[a(1027)]() }) }, "fileResource.combineByCBM": { requestSchema: S({ contentUri: g(), boundaryUri: g(), maskUri: g()[a(1864)]().optional(), options: D0(Se()).optional(), thumbnail: e0()[a(1027)]() }), responseSchema: S({ resource: g().optional(), thumbnail: g()[a(1027)](), width: W().optional(), height: W()[a(1027)](), mime: g()[a(1027)](), error: g().optional() }) }, "fileResource.delete": { requestSchema: S({ resources: v0(g()) }), responseSchema: S({ error: g().optional() }) }, "fileResource.thumbnail": { requestSchema: S({ resource: g(), maxSize: W()[a(1027)]() }), responseSchema: S({ thumbnail: g()[a(1027)](), width: W().optional(), height: W()[a(1027)](), error: g().optional() }) }, "fileResource.saveAs": { requestSchema: S({ resources: v0(g()) }), responseSchema: S({ error: g()[a(1027)]() }) }, "boundary.normalize": { requestSchema: S({ boundary: g() }), responseSchema: S({ boundary: g().optional(), error: g().optional() }) }, "layer.resolve": { requestSchema: S({ uri: g(), type: R0([a(1213), a(474)]) }), responseSchema: S({ uri: g()[a(1027)](), error: g()[a(1027)]() }) } }, ti = vo({ nodes: { sdk: { store: Lo, actions: { ...Bo } }, uxp: { store: $o, actions: { ...Go, ...xi, ...Xo, ...Ko, ...Qo, ...Jo } }, comfy: { store: Mo, actions: { ...Vo, ...Uo } } }, edges: [["sdk", "uxp"], [a(2195), a(359)]] }), P0 = ti[a(1883)](a(2195));
globalThis[a(921)] = P0;
var lx = { exports: {} }, Bx, Ma;
function ai() {
  if (Ma) return Bx;
  Ma = 1;
  var o = 1e3, x = o * 60, t = x * 60, r = t * 24, e = r * 7, s = r * 365.25;
  Bx = function(d, f) {
    const l = K;
    f = f || {};
    var b = typeof d;
    if (b === "string" && d[l(692)] > 0) return n(d);
    if (b === l(2153) && isFinite(d)) return f[l(271)] ? c(d) : i(d);
    throw new Error(l(1091) + JSON[l(2625)](d));
  };
  function n(d) {
    const f = K;
    if (d = String(d), !(d[f(692)] > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[f(537)](d);
      if (l) {
        var b = parseFloat(l[1]), h = (l[2] || "ms")[f(556)]();
        switch (h) {
          case "years":
          case f(1833):
          case "yrs":
          case "yr":
          case "y":
            return b * s;
          case f(2027):
          case "week":
          case "w":
            return b * e;
          case "days":
          case f(262):
          case "d":
            return b * r;
          case f(1387):
          case f(2631):
          case f(2310):
          case "hr":
          case "h":
            return b * t;
          case f(1541):
          case f(2598):
          case f(699):
          case "min":
          case "m":
            return b * x;
          case f(613):
          case f(2414):
          case "secs":
          case f(2049):
          case "s":
            return b * o;
          case f(1364):
          case f(193):
          case f(2456):
          case "msec":
          case "ms":
            return b;
          default:
            return;
        }
      }
    }
  }
  function i(d) {
    const f = K;
    var l = Math[f(1843)](d);
    return l >= r ? Math[f(481)](d / r) + "d" : l >= t ? Math.round(d / t) + "h" : l >= x ? Math[f(481)](d / x) + "m" : l >= o ? Math.round(d / o) + "s" : d + "ms";
  }
  function c(d) {
    const f = K;
    var l = Math[f(1843)](d);
    return l >= r ? u(d, l, r, "day") : l >= t ? u(d, l, t, f(2631)) : l >= x ? u(d, l, x, "minute") : l >= o ? u(d, l, o, f(2414)) : d + " ms";
  }
  function u(d, f, l, b) {
    const h = K;
    var m = f >= l * 1.5;
    return Math[h(481)](d / l) + " " + b + (m ? "s" : "");
  }
  return Bx;
}
var Zx, La;
function ri() {
  if (La) return Zx;
  La = 1;
  function o(x) {
    const t = K;
    e[t(2297)] = e, e[t(1944)] = e, e.coerce = d, e.disable = c, e[t(2157)] = n, e[t(1220)] = u, e.humanize = ai(), e[t(2141)] = f, Object.keys(x)[t(1471)]((l) => {
      e[l] = x[l];
    }), e[t(1185)] = [], e[t(2483)] = [], e[t(2593)] = {};
    function r(l) {
      const b = t;
      let h = 0;
      for (let m = 0; m < l[b(692)]; m++)
        h = (h << 5) - h + l[b(2170)](m), h |= 0;
      return e[b(189)][Math[b(1843)](h) % e.colors[b(692)]];
    }
    e[t(2199)] = r;
    function e(l) {
      const b = t;
      let h, m = null, v, k;
      function I(...A) {
        const T = K;
        if (!I[T(1220)]) return;
        const R = I, P = Number(/* @__PURE__ */ new Date()), N = P - (h || P);
        R[T(1371)] = N, R[T(337)] = h, R[T(260)] = P, h = P, A[0] = e[T(783)](A[0]), typeof A[0] !== T(2161) && A[T(1475)]("%O");
        let _ = 0;
        A[0] = A[0][T(575)](/%([a-zA-Z%])/g, (j, F) => {
          const C = T;
          if (j === "%%") return "%";
          _++;
          const H = e[C(2593)][F];
          if (typeof H == "function") {
            const U = A[_];
            j = H[C(1994)](R, U), A[C(2605)](_, 1), _--;
          }
          return j;
        }), e[T(760)][T(1994)](R, A), (R[T(2818)] || e[T(2818)])[T(2242)](R, A);
      }
      return I[b(2846)] = l, I[b(960)] = e.useColors(), I.color = e[b(2199)](l), I[b(243)] = s, I[b(2141)] = e[b(2141)], Object[b(1337)](I, b(1220), { enumerable: !0, configurable: !1, get: () => {
        const A = b;
        return m !== null ? m : (v !== e[A(2766)] && (v = e[A(2766)], k = e.enabled(l)), k);
      }, set: (A) => {
        m = A;
      } }), typeof e[b(2636)] == "function" && e[b(2636)](I), I;
    }
    function s(l, b) {
      const h = t, m = e(this[h(2846)] + (typeof b === h(420) ? ":" : b) + l);
      return m.log = this[h(2818)], m;
    }
    function n(l) {
      const b = t;
      e[b(2852)](l), e[b(2766)] = l, e[b(1185)] = [], e.skips = [];
      const h = (typeof l == "string" ? l : "").trim()[b(575)](/\s+/g, ",").split(",")[b(2145)](Boolean);
      for (const m of h)
        m[0] === "-" ? e[b(2483)].push(m.slice(1)) : e.names.push(m);
    }
    function i(l, b) {
      const h = t;
      let m = 0, v = 0, k = -1, I = 0;
      for (; m < l.length; )
        if (v < b.length && (b[v] === l[m] || b[v] === "*")) b[v] === "*" ? (k = v, I = m, v++) : (m++, v++);
        else if (k !== -1) v = k + 1, I++, m = I;
        else return !1;
      for (; v < b[h(692)] && b[v] === "*"; )
        v++;
      return v === b[h(692)];
    }
    function c() {
      const l = t, b = [...e.names, ...e[l(2483)][l(1649)]((h) => "-" + h)][l(2137)](",");
      return e[l(2157)](""), b;
    }
    function u(l) {
      const b = t;
      for (const h of e[b(2483)])
        if (i(l, h)) return !1;
      for (const h of e[b(1185)])
        if (i(l, h)) return !0;
      return !1;
    }
    function d(l) {
      const b = t;
      return l instanceof Error ? l[b(837)] || l.message : l;
    }
    function f() {
      console[t(343)]("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return e[t(2157)](e.load()), e;
  }
  return Zx = o, Zx;
}
var $a;
function si() {
  const o = a;
  return $a || ($a = 1, (function(x, t) {
    const r = o;
    t[r(760)] = s, t.save = n, t.load = i, t[r(960)] = e, t[r(2305)] = c(), t[r(2141)] = /* @__PURE__ */ (() => {
      let d = !1;
      return () => {
        const f = K;
        !d && (d = !0, console[f(343)](f(682)));
      };
    })(), t[r(189)] = [r(1113), r(1188), "#0033CC", r(429), "#0066CC", r(828), r(2111), r(2243), r(809), r(918), r(1352), r(1555), r(2792), r(972), r(2229), r(358), "#3333CC", r(1444), r(2022), r(392), r(2775), r(522), r(191), r(2218), r(1681), r(2099), "#33CCCC", r(2393), r(847), r(1107), r(1206), "#6633FF", r(838), "#66CC33", r(2618), r(323), r(2546), "#9933FF", r(2236), r(1050), "#CC0000", "#CC0033", r(1970), "#CC0099", "#CC00CC", r(2672), r(2568), "#CC3333", r(962), r(2673), r(505), r(1192), "#CC6600", r(2548), "#CC9900", r(214), r(876), r(2668), r(2046), r(2235), r(1051), r(470), r(1720), r(539), r(1040), r(434), "#FF3366", r(1844), r(2853), r(790), "#FF6600", "#FF6633", r(1178), "#FF9933", r(1151), r(1840)];
    function e() {
      const d = r;
      if (typeof window !== d(420) && window[d(391)] && (window[d(391)][d(612)] === d(1837) || window[d(391)][d(2288)])) return !0;
      if (typeof navigator !== d(420) && navigator[d(1769)] && navigator[d(1769)][d(556)]()[d(430)](/(edge|trident)\/(\d+)/)) return !1;
      let f;
      return typeof document !== d(420) && document[d(1536)] && document[d(1536)].style && document[d(1536)][d(720)].WebkitAppearance || typeof window !== d(420) && window[d(1531)] && (window[d(1531)][d(1121)] || window[d(1531)][d(2840)] && window[d(1531)][d(1985)]) || typeof navigator !== d(420) && navigator[d(1769)] && (f = navigator[d(1769)][d(556)]()[d(430)](/firefox\/(\d+)/)) && parseInt(f[1], 10) >= 31 || typeof navigator !== d(420) && navigator[d(1769)] && navigator[d(1769)][d(556)]()[d(430)](/applewebkit\/(\d+)/);
    }
    function s(d) {
      const f = r;
      if (d[0] = (this[f(960)] ? "%c" : "") + this.namespace + (this[f(960)] ? f(1635) : " ") + d[0] + (this[f(960)] ? f(1581) : " ") + "+" + x[f(2519)][f(1617)](this[f(1371)]), !this[f(960)]) return;
      const l = f(2272) + this[f(2793)];
      d[f(2605)](1, 0, l, f(2666));
      let b = 0, h = 0;
      d[0][f(575)](/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (b++, m === "%c" && (h = b));
      }), d.splice(h, 0, l);
    }
    t[r(2818)] = console[r(2297)] || console[r(2818)] || (() => {
    });
    function n(d) {
      const f = r;
      try {
        d ? t.storage[f(1598)](f(2297), d) : t[f(2305)][f(676)](f(2297));
      } catch {
      }
    }
    function i() {
      const d = r;
      let f;
      try {
        f = t[d(2305)][d(1630)](d(2297)) || t.storage[d(1630)]("DEBUG");
      } catch {
      }
      return !f && typeof process < "u" && d(1709) in process && (f = process[d(1709)][d(393)]), f;
    }
    function c() {
      try {
        return localStorage;
      } catch {
      }
    }
    x[r(2519)] = ri()(t);
    const { formatters: u } = x[r(2519)];
    u.j = function(d) {
      const f = r;
      try {
        return JSON[f(2625)](d);
      } catch (l) {
        return f(1478) + l.message;
      }
    };
  })(lx, lx[o(2519)])), lx[o(2519)];
}
var ni = si();
const zs = Hs(ni);
zs[a(2157)]("*");
function oi(o, x) {
  const t = a, r = zs(o), e = (s, n) => async function(...i) {
    try {
      await x({ level: s, messages: i });
    } catch {
    }
  };
  return r[t(2818)] = e(t(2818)), r;
}
const ox = oi(a(2293), async ({ level: o, messages: x }) => {
  const t = a, { mcpMesh: r } = await Promise[t(1571)]()[t(2403)](() => xu);
  await r[t(1366)](t(359)).actions[t(2818)]({ level: o, messages: x });
});
globalThis[a(1939)] = globalThis.sdpppX2 || {};
const Ye = globalThis[a(1939)], ii = { "preview.show": a(1034), "gateway.select_ai_service": a(600), "provider.select.title": a(2057), "provider.comfyui.description": a(2336), "provider.replicate.description": "海量模型，稳定服务", "provider.runninghub.description": a(1533), "provider.google.description": a(2584), "task.waiting_upload": a(2674), "task.creating_task": "正在创建任务...", "task.running_duration": "运行了 {{duration}} 秒，{{message}}", "task.cancelled": a(1001), "task.cancel_failed": a(820), "task.default_name": a(1326), "comfy.connect": "连接", "comfy.load_failed": a(1989), "comfy.loading": a(895), "comfy.channel_connecting": a(2701), "comfy.server_reconnecting": a(1558), "comfy.version_mismatch": a(2114), "comfy.cloud_recommend": a(1490), "comfy.your_workflows": "你的工作流", "comfy.refresh_workflows": a(553), "comfy.queue_progress": a(2691), "comfy.save": "保存", "comfy.refresh": "刷新", "comfy.stop_cancel_all": a(1896), "comfy.stop_auto_run": a(541), "comfy.start_auto_run": a(2050), "comfy.auto_run_status": a(1993), "comfy.run": "运行", "comfy.back": "返回", "comfy.uploading": a(2760), "comfy_simple.refreshing_preview": a(2788), "comfy.select_workflow": a(2699), "comfy.task.name": a(2732), "comfy.error.task_cancelled": a(1001), "comfy.task.processing_progress": a(2858), "comfy.help_tooltip": a(1613), "comfy.no_workflow_selected": a(1134), "comfy_simple.missing_url": a(250), "comfy_simple.loading_webview": a(812), "comfy_simple.http_error": a(755), "comfy_simple.wait_connect": a(2238), "comfy_simple.loading": a(877), "comfy_simple.connection_required": a(435), "comfy_simple.preview_empty": a(426), "comfy_simple.progress.idle": "空闲", "comfy_simple.auto_run": "自动", "comfy_simple.workflow_quick": "快捷", "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": a(2863), "comfy_simple.prompt_templates.manage_tooltip": a(1128), "comfy_simple.prompt_templates.button": a(2476), "comfy_simple.prompt_templates.save_error": a(1900), "comfy_simple.prompt_templates.missing_key": a(1474), "comfy_simple.prompt_templates.missing_value": a(1928), "comfy_simple.prompt_templates.duplicate_key": a(1888), "comfy_simple.prompt_templates.save_success": a(765), "comfy_simple.prompt_templates.delete_confirm_title": a(1431), "comfy_simple.prompt_templates.delete_confirm_content": "确定要删除此模板吗？", "comfy_simple.prompt_templates.delete_success": a(2757), "comfy_simple.prompt_templates.add_title": a(603), "comfy_simple.prompt_templates.edit_title": a(237), "comfy_simple.prompt_templates.modal_title": a(1767), "comfy_simple.prompt_templates.description": a(1406), "comfy_simple.prompt_templates.add_button": a(1659), "comfy_simple.prompt_templates.name_placeholder": a(1982), "comfy_simple.prompt_templates.value_placeholder": "提示词内容", "comfy_simple.fallback.title": a(1999), "comfy_simple.fallback.button": a(1999), "comfy_simple.prompt_templates.positive_label": a(2416), "comfy_simple.prompt_templates.negative_label": "负面提示词", "comfy_simple.prompt_templates.negative_placeholder": "负面提示词内容", "comfy_simple.prompt_templates.negative_empty": a(2026), "comfy_simple.prompt_templates.default_section": a(937), "comfy_simple.prompt_templates.default_empty": a(1575), "comfy_simple.prompt_templates.default_tag": "默认", "comfy_simple.prompt_templates.custom_section": a(2613), "comfy_simple.prompt_templates.custom_empty": "还没有自定义模板。", "comfy_simple.prompt_templates.applied_success": "模板已应用。", "comfy_simple.prompt_templates.applied_failed": a(1981), "comfy_simple.prompt_templates.apply_unavailable": a(2300), "comfy_simple.prompt_templates.apply_failed_missing_binding": "无法写入{{part}}提示词：未找到对应控件。", "comfy_simple.prompt_templates.apply_failed_caller_unavailable": a(1729), "comfy_simple.prompt_templates.apply_failed_set_error": "无法写入{{part}}提示词，请稍后重试。", "common.delete": "删除", "comfy_simple.preview_click_to_send": a(2550), "comfy_simple.workflow_select.empty": a(198), "comfy_simple.workflow_select.select": "选择", "comfy_simple.workflow_select.selected": a(1317), "comfy_simple.workflow_select.current": "当前", "comfy_simple.workflow_select.load_failed": a(1947), "comfy_simple.workflow_select.members_only": "（会员专属）", "boundary.title": "输入设置", "boundary.tooltip": a(1239), "boundary.current_canvas": a(1651), "boundary.current_layer": "当前图层", "boundary.current_selection": "当前选区", "boundary.set_as_canvas": a(1721), "boundary.set_as_layer": a(464), "boundary.set_as_selection": a(2803), "http.404": a(1114), "http.401": a(570), "http.403": "禁止访问 (403)", "http.408": a(471), "http.500": a(1773), "http.501": a(2695), "http.502": a(890), "http.503": a(1510), "http.504": a(255), "http.unknown": "未知错误（{{code}}）", "runninghub.get_apikey": a(1291), "runninghub.apikey_placeholder": a(194), "runninghub.app_id": a(200), "runninghub.webapp_id_placeholder": a(1012), "runninghub.open_app": a(2287), "runninghub.execute": "执行", "runninghub.running": "运行中...", "runninghub.rh_coins": a(2869), "runninghub.current_tasks": a(2733), "runninghub.help_tooltip": a(1613), "runninghub.stop_all": "停止全部", "runninghub.status.waiting": a(2528), "runninghub.status.running": a(2134), "runninghub.status.failed": a(1029), "runninghub.status.success": a(2557), "image.auto_refetch": "自动从PS重新获取", "local_resource.selection.images": "图片", "runninghub.error.get_result_failed": a(879), "runninghub.error.task_failed": a(1155), "runninghub.error.task_incomplete": a(218), "runninghub.error.account_status_http": a(701), "runninghub.error.account_status_reason_unknown": a(2292), "runninghub.error.account_status_failed": a(1421), "runninghub.error.form_data_http": a(2876), "runninghub.error.form_data_reason_unknown": a(1428), "runninghub.error.form_data_failed": a(1625), "runninghub.error.node_info_missing": a(2209), "runninghub.error.run_http": a(2533), "runninghub.error.run_reason_default": a(235), "runninghub.error.run_failed": a(1551), "runninghub.error.status_http": a(2400), "runninghub.error.status_reason_unknown": "获取任务状态失败", "runninghub.error.status_failed": "status API 调用失败 - {{reason}}", "runninghub.error.outputs_http": "outputs API 调用失败 - HTTP 错误，状态: {{status}}", "runninghub.error.outputs_failed": a(362), "runninghub.task.title": a(2681), "runninghub.error.upload_http": "uploadImage API 调用失败 - HTTP 错误，状态: {{status}}", "runninghub.error.upload_reason_unknown": a(2315), "runninghub.error.upload_failed": "uploadImage API 调用失败 - {{reason}}", "customapi.error.no_image_returned": "未返回图片", "customapi.error.openai_api": a(1949), "customapi.error.input_required": a(1656), "customapi.error.generation_failed": a(2654), "customapi.task.name.google": a(2333), "customapi.task.name.openai": a(1322), "customapi.error.unsupported_image_input": "不支持的图像输入类型", "replicate.get_apikey": a(749), "replicate.apikey_placeholder": "请输入您的Replicate API Key", "replicate.execute": "执行", "replicate.model_placeholder": a(1500), "replicate.help_tooltip": "使用教程", "replicate.loading": a(383), "replicate.running": a(2515), "replicate.stop": "停止", "liblib.get_apikey": "如何获取APIKey和API Secret", "liblib.execute": "执行", "common.close": "关闭", "common.save": "保存", "common.save_and_run": a(2603), "common.loading": a(383), "common.error": "错误", "common.error.unknown": a(2741), "common.error.task_creation_aborted": a(535), "common.error.status_check_aborted": "状态检查已中止", "common.error.result_fetch_aborted": a(1378), "common.error.upload_aborted": a(1465), "common.success": "成功", "common.failed": "失败", "common.generating": a(2304), "common.cancel": "取消", "common.confirm": "确认", "common.options": "选项", "common.options_separator": a(1200), "upload_pass.error.unsupported_type": a(1234), "upload_pass.error.uploader_missing": a(830), webviewInForeground: a(1544), webviewInForeground2: a(2337), "auth.login_success": "登录成功", "auth.username_label": a(780), "auth.email_label": a(480), "auth.logout": a(1081), "auth.login_required": a(2875), "image.send.select_position": a(2731), "image.send.sending": a(1854), "image.layer.new": a(622), "image.layer.current": a(939), "image.layer.fit_to_current": a(1460), "image.layer.fit_to_selection": "适配至选区", "image.layer.fit_to_canvas": "适配至画布", "image.shortcut_auth_required": "快捷键选图功能仅登陆后可用", "image.shortcut_focus_required": a(2607), "image.get.select_image": a(2214), "image.get.entire_canvas": a(1651), "image.get.canvas": "画布", "image.get.current_layer": a(939), "image.get.current_layer_bounds": "仅当前图层范围", "image.get.selection_bounds": a(1963), "image.get.canvas_bounds": a(1094), "image.crop_by_selection": a(2245), "image.limit_size": a(1137), "image.crop.none": a(512), "image.crop.inpaint": a(406), "image.crop.outpaint": a(529), "image.send_all": a(1880), "image.save_all": "保存所有", "image.save_current": a(833), "image.delete_current": a(1795), "image.more_actions": a(2402), "image.jump_to_last": a(407), "image.clear_all": "清空所有", "image.send_to_ps": a(519), "image.download": "下载", "image.copy": "复制", "image.sending": a(816), "image.sending_all": a(1975), "mask.get.select_mask": a(2331), "mask.selection": "选区", "mask.current_layer_bounds": "当前图层范围", "mask.all": "全部", "mask.selection_exclude": a(1118), "mask.current_layer_exclude": a(2826), "mask.empty": "空", "widgetable.photoshop.deprecated_node": a(1663), "work_boundary.error.empty_selection_mask": a(355), "work_boundary.error.primary_resource_missing": a(2807), "work_boundary.error.mask_resource_missing": "缺少遮罩资源", "work_boundary.error.mask_apply_empty": a(894), "document {{0}} not found": a(2341), "create document for preview": a(549), "resize document for preview": "调整预览文档尺寸", "create document for sent images": a(1518), "show sent images": "显示发送的图片", "create layer failed": a(1727), "layer not found {{0}}": a(1583), "layer not found: {{0}}": a(1583), "layer {{0}} is not a group": a(577), "no linked layer for {{0}}": a(998), "no first related layer in {{0}}": "组 {{0}} 中没有第一个相关图层", "merge group failed": a(1295), "get content of layer {{0}}": a(1101), "get layer info": a(2653), "get_layer_info: layer_identify required": a(2086), "get pixel of {{0}} failed": a(1189), "get selection failed": a(2583), "invalid name: {{0}}": a(1276), "desire bounds is null": a(1700), "intersect or scaledDesire is null": "交集或缩放目标为空", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': a(425), "select layer": a(2301), "run Photoshop Action": a(321), "Action {{0}} not found": a(298), "Action set {{0}} not found": a(805), "set text to layer": "设置图层的文本", "ComfyManager not found, cannot reboot": a(703), "Failed to reboot ComfyUI": a(2311), "image.upload.from_canvas": "画布", "image.upload.from_curlayer": a(939), "image.upload.from_selection": "选区", "image.upload.from_harddisk": "磁盘", "image.upload.clear": "清空", "image.upload.uploading": "上传中，如果图片过大，可能会卡顿...", "image.upload.syncing": a(1375), "image.upload.no_images": a(2796), "image.upload.error": a(461), "image.upload.tooltip.more_options_hint": a(1409), "image.upload.tooltip.alt.crop": a(2224), "image.upload.tooltip.alt.reverse": a(1564), "image.upload.tooltip.image.canvas": a(2436), "image.upload.tooltip.image.curlayer": a(911), "image.upload.tooltip.mask.curlayer": a(2261), "image.upload.tooltip.mask.selection": a(1106), "image.upload.tooltip.mask.canvas": "从 画布 获取遮罩", "image.upload.tooltip.cut_action": a(1032), "image.upload.tooltip.scan_action": a(1342), "image.upload.tooltip.autosync.on": a(1358), "image.upload.tooltip.autosync.off": a(2594), "image.upload.tooltip.sync_action": a(2309), "image.upload.autosync.fetching": "自动获取中…", "image.upload.autosync.status.enabled": "自动同步中…", "image.upload.autosync.status.disabled": "自动同步未打开", "image.upload.tooltip.current.canvas": "当前选项：画布", "image.upload.tooltip.current.layer": a(329), "image.upload.tooltip.current.layer_named": a(980), "image.upload.tooltip.current.file": a(441), "image.upload.retry": "重试", "image.pack.local.button": a(591), "image.pack.local.empty": a(2796), "image.auto_send_enabled": a(559), "image.auto_send_disabled": a(1938), "image.upload.primary.auto": a(202), "image.upload.primary.manual": a(2635), "image.upload.primary.hint": "该节点默认继承当前图层与遮罩", "image.upload.primary.cut": "裁剪", "image.upload.primary.scan": "扫描", "image.upload.primary.hint.line1": a(460), "image.upload.primary.hint.line2": "主图", "workflow.output.destination.title": a(1913), "workflow.output.destination.canvas": "全图", "image.upload.primary.advanced": a(1535), "image.upload.primary.advanced.modify": "修改", "image.upload.primary.advanced.reset": "重置", "image.upload.primary.advanced.local_file": a(1324), "image.upload.primary.advanced.content.canvas": "画布", "image.upload.primary.advanced.content.curlayer": a(939), "image.upload.primary.advanced.content.selection": "选区", "image.upload.primary.advanced.boundary.canvas": a(934), "image.upload.primary.advanced.boundary.curlayer": "当前图层边界", "image.upload.primary.advanced.boundary.selection": a(2821), "image.upload.primary.advanced.boundary.primary": "主图边界", "image.upload.source.file.tooltip": "从磁盘上传", "image.upload.mode.file.label": "文件", "image.upload.mode.layer.label": "图层", "image.upload.mode.canvas.label": "画布", "image.upload.source.layer.tooltip": a(1287), "image.upload.source.canvas.tooltip": a(1664), "image.upload.dropHint": a(1543), "image.upload.tooltip.clear_action": a(1380), "image.upload.status.layer.short_named": a(1860), "image.upload.status.layer.short": "图层", "image.upload.status.file.short": a(1794), "image.upload.status.canvas.short": "画布", "image.upload.status.file.active": a(341), "image.upload.status.file.resetHint": a(601), "image.upload.status.mask.resetHint": "点击恢复默认遮罩", "image.upload.status.mask.modified": a(2353), "image.upload.status.boundary.resetHint": a(2882), "image.upload.status.boundary.modified": a(2136), "image.upload.status.boundary.docMismatch": a(1747), "image.upload.mask.button": a(2616), "image.upload.mask.selection": a(2616), "image.upload.mask.layer": "图层遮罩", "image.upload.remove_slot": a(2572), "image.upload.add_slot": a(1624), "video.local.button": "本地视频", "video.local.empty": a(1274), "video.local.remove": a(798), "source.source": "来源", "source.content": "内容", "source.boundary": "范围", "source.mask": "遮罩", "source.disk": "磁盘", "source.remote": "远端", "source.unknown": "未知", "source.ps_image": a(364), "source.ps_mask": a(300), "source.canvas": "整个画布", "source.current_layer": a(939), "source.selection": "选区", "source.quality_percent": a(1313), "source.crop.positive": "正向裁剪", "source.crop.negative": "反向裁剪", "source.reverse": "反转", "send_images.create_document": "创建文档", "send_images.create_document_failed": a(1448), "photoshop.no_active_document": "没有活动文档", "photoshop.rectangle_coordinates_required": a(2232), "photoshop.create_guide_frame": "创建参考线框架", "photoshop.clear_guide_frame": a(1865), "photoshop.invalid_action": a(382), "photoshop.file_not_found": "文件未找到: {{path}}", "photoshop.failed_to_open_file_as_document": a(654), "photoshop.invalid_boundary": a(892), "photoshop.failed_to_open_image_file": a(1749), "photoshop.open_images_from_file": "从文件打开图像", "photoshop.failed_to_create_document_from_file": "无法从文件创建文档", "google.field.image_input": a(2832), "google.field.prompt": a(2476), "google.field.batch_count": a(2202), "google.field.images_per_batch": a(475), "google.status.success": "成功", "google.status.failed": "失败", "google.status.generating": a(1473), "google.apikey_placeholder": a(1425), "google.baseurl_placeholder": a(997), "google.get_apikey": a(1694), "google.help_tooltip": "Google Gemini 图像生成器", "google.model_name": a(1586), "google.model_label": "模型", "google.model_placeholder": a(258), "google.stop": "停止", "google.loading": a(383), "google.generating": a(2304), "google.generate": "生成", "image.auto_toggle": "自动", "image.import_as_smartobject": "作为智能对象导入", "image.import_as_newdoc": "作为新文档导入", "image.boundary": "边界", "image.import_tip": "按住 Shift 键以新文档方式导入", "auth.guest_login_success": "访客登录成功", "boundary.canvas": "画布", "boundary.select_boundary": "选择边界", "boundary.selection": "选区", "boundary.max_size": "尺寸限制 (px)", "boundary.max_size_error": a(2423), "boundary.max_size_hint": a(2119), "boundary.max_size_placeholder": a(2119), "boundary.no_limit": "不限", "boundary.image_quality": "图像质量 (%)", "boundary.image_quality_required": a(2508), "boundary.image_quality_range": a(976), "boundary.preview_main_image": a(1272), "boundary.preview_select": a(2338), "boundary.preview_alt": a(977), "boundary.preview_placeholder": "点击使用当前选区", "boundary.settings": a(2379), "convert widget {0} failed:": "控件 {0} 转换失败：", "document {0} not found": a(2617), "image.document.new": "新建文档", "image.layer.smart_object": a(2122), "layer not found {0}": a(2193), "photoshop.invalid_boundary_type": a(477), "photoshop.no_active_layer": a(650), "dialog.image_source.title": "选择图像来源", "dialog.image_source.primary_canvas": a(184), "dialog.image_source.primary_curlayer": a(2154), "dialog.image_source.canvas_canvas": a(2576), "dialog.image_source.canvas_curlayer": "以画布边界获取当前图层", "dialog.image_source.curlayer_canvas": "以当前图层边界获取画布", "dialog.image_source.curlayer_curlayer": a(1710), "dialog.image_source.local_file": a(1324), "dialog.simple_source.title": a(2867), "dialog.simple_source.canvas": "画布", "dialog.simple_source.current_layer": a(939), "dialog.simple_source.local_file": "选择文件", "dialog.simple_source.no_active_layer": a(1738), "dialog.simple_source.pick_error": a(1910) }, ci = { "preview.show": "Show Preview ({{count}} images)", "gateway.select_ai_service": a(1847), "provider.select.title": "Select AI Service Provider", "provider.comfyui.description": a(2512), "provider.replicate.description": "Cloud-based model service platform", "provider.runninghub.description": a(331), "provider.google.description": a(514), "task.waiting_upload": a(256), "task.creating_task": a(313), "task.running_duration": a(1193), "task.cancelled": a(2489), "task.cancel_failed": "Task cancel failed: {{error}}", "task.default_name": "AI Generation Task", "comfy.connect": a(211), "comfy.load_failed": a(2283), "comfy.loading": a(2523), "comfy.channel_connecting": a(1519), "comfy.server_reconnecting": a(534), "comfy.version_mismatch": a(2207), "comfy.cloud_recommend": a(1701), "comfy.your_workflows": "Your Workflows", "comfy.refresh_workflows": a(2601), "comfy.queue_progress": a(1665), "comfy.save": a(1370), "comfy.refresh": a(472), "comfy.stop_cancel_all": "Stop and cancel all", "comfy.stop_auto_run": "Stop auto run", "comfy.start_auto_run": a(1125), "comfy.auto_run_status": "Auto-run workflow after changes...", "comfy.run": "Run", "comfy.back": "Back", "comfy.uploading": a(846), "comfy_simple.refreshing_preview": a(1309), "comfy.select_workflow": a(2522), "comfy.task.name": a(2732), "comfy.error.task_cancelled": a(2489), "comfy.task.processing_progress": a(2855), "comfy.help_tooltip": a(767), "comfy.no_workflow_selected": "No workflow selected", "comfy_simple.missing_url": "ComfyUI connection not configured yet. Please set the address first.", "comfy_simple.loading_webview": a(1696), "comfy_simple.http_error": a(2058), "comfy_simple.wait_connect": a(1477), "comfy_simple.loading": a(1479), "comfy_simple.connection_required": a(2278), "comfy_simple.preview_empty": "No preview content yet", "comfy_simple.progress.idle": a(955), "comfy_simple.auto_run": a(2408), "comfy_simple.workflow_quick": a(1685), "comfy_simple.multiplier.X1": "X1", "comfy_simple.multiplier.X2": "X2", "comfy_simple.multiplier.X4": "X4", "comfy_simple.multiplier.X10": a(2863), "comfy_simple.prompt_templates.manage_tooltip": a(1669), "comfy_simple.prompt_templates.button": a(2401), "comfy_simple.prompt_templates.save_error": a(1882), "comfy_simple.prompt_templates.missing_key": a(1998), "comfy_simple.prompt_templates.missing_value": a(2397), "comfy_simple.prompt_templates.duplicate_key": "Template name already exists.", "comfy_simple.prompt_templates.save_success": "Template saved.", "comfy_simple.prompt_templates.delete_confirm_title": a(2176), "comfy_simple.prompt_templates.delete_confirm_content": "Are you sure you want to delete this template?", "comfy_simple.prompt_templates.delete_success": a(1634), "comfy_simple.prompt_templates.add_title": a(1310), "comfy_simple.prompt_templates.edit_title": "Edit Template", "comfy_simple.prompt_templates.modal_title": a(2472), "comfy_simple.prompt_templates.description": a(2643), "comfy_simple.prompt_templates.add_button": a(1818), "comfy_simple.prompt_templates.name_placeholder": "Template name", "comfy_simple.prompt_templates.value_placeholder": a(445), "comfy_simple.fallback.title": a(2084), "comfy_simple.fallback.button": a(2084), "comfy_simple.prompt_templates.positive_label": a(523), "comfy_simple.prompt_templates.negative_label": a(868), "comfy_simple.prompt_templates.negative_placeholder": a(1596), "comfy_simple.prompt_templates.negative_empty": a(2317), "comfy_simple.prompt_templates.default_section": "Default Templates", "comfy_simple.prompt_templates.default_empty": "No default templates available.", "comfy_simple.prompt_templates.default_tag": a(1513), "comfy_simple.prompt_templates.custom_section": a(2382), "comfy_simple.prompt_templates.custom_empty": "No custom templates yet.", "comfy_simple.prompt_templates.applied_success": a(1714), "comfy_simple.prompt_templates.applied_failed": "Failed to apply template.", "comfy_simple.prompt_templates.apply_unavailable": "Applying templates is unavailable right now.", "comfy_simple.prompt_templates.apply_failed_missing_binding": a(2765), "comfy_simple.prompt_templates.apply_failed_caller_unavailable": a(1674), "comfy_simple.prompt_templates.apply_failed_set_error": a(606), "common.delete": a(700), "comfy_simple.preview_click_to_send": "Click to send (Shift-click creates new document)", "comfy_simple.workflow_select.empty": a(1174), "comfy_simple.workflow_select.select": a(1774), "comfy_simple.workflow_select.selected": a(858), "comfy_simple.workflow_select.current": a(1487), "comfy_simple.workflow_select.load_failed": a(2009), "comfy_simple.workflow_select.members_only": " (Members only)", "boundary.title": a(2018), "boundary.tooltip": "Area AI reads from; controls max image size", "boundary.current_canvas": a(1330), "boundary.current_layer": "Current Layer", "boundary.current_selection": "Current Selection", "boundary.set_as_canvas": "Set as Canvas", "boundary.set_as_layer": a(560), "boundary.set_as_selection": "Set as Current Selection", "http.404": "SDPPP may not be installed or version mismatch (404)", "http.401": a(2669), "http.403": a(387), "http.408": "Request timeout (408)", "http.500": a(2025), "http.501": a(2225), "http.502": a(1942), "http.503": a(2428), "http.504": a(631), "http.unknown": a(228), "runninghub.get_apikey": "Click to get RunningHub APIKey", "runninghub.apikey_placeholder": a(2078), "runninghub.app_id": "App ID:", "runninghub.webapp_id_placeholder": a(2325), "runninghub.open_app": a(500), "runninghub.execute": a(1988), "runninghub.running": a(691), "runninghub.rh_coins": a(2772), "runninghub.current_tasks": a(2517), "runninghub.help_tooltip": a(767), "runninghub.stop_all": "Stop all", "runninghub.status.waiting": a(1399), "runninghub.status.running": a(1367), "runninghub.status.failed": a(2083), "runninghub.status.success": a(1850), "image.auto_refetch": "Auto repick from PS", "local_resource.selection.images": "Images", "runninghub.error.get_result_failed": a(2265), "runninghub.error.task_failed": "Task execution failed: {{error}}", "runninghub.error.task_incomplete": "Task incomplete, current status: {{status}}", "runninghub.error.account_status_http": a(1639), "runninghub.error.account_status_reason_unknown": a(1813), "runninghub.error.account_status_failed": a(987), "runninghub.error.form_data_http": "getNodes API failed - HTTP error! status: {{status}}", "runninghub.error.form_data_reason_unknown": "Failed to fetch form data", "runninghub.error.form_data_failed": a(2415), "runninghub.error.node_info_missing": a(1603), "runninghub.error.run_http": "run API failed - HTTP error! status: {{status}}", "runninghub.error.run_reason_default": "Task execution failed", "runninghub.error.run_failed": a(463), "runninghub.error.status_http": a(2426), "runninghub.error.status_reason_unknown": a(626), "runninghub.error.status_failed": a(2116), "runninghub.error.outputs_http": a(573), "runninghub.error.outputs_failed": a(759), "runninghub.task.title": a(2681), "runninghub.error.upload_http": a(1755), "runninghub.error.upload_reason_unknown": a(1734), "runninghub.error.upload_failed": a(785), "customapi.error.no_image_returned": a(1828), "customapi.error.openai_api": "OpenAI API error", "customapi.error.input_required": a(1105), "customapi.error.generation_failed": "Generation failed", "customapi.task.name.google": a(784), "customapi.task.name.openai": "OpenAI - Image Edit", "customapi.error.unsupported_image_input": "Unsupported image input type", "replicate.get_apikey": a(1316), "replicate.apikey_placeholder": a(2220), "replicate.execute": a(1988), "replicate.model_placeholder": a(935), "replicate.help_tooltip": a(767), "replicate.loading": a(1950), "replicate.running": "Running...", "replicate.stop": "Stop", "liblib.get_apikey": a(418), "liblib.execute": a(1988), "common.close": a(2810), "common.save": a(1370), "common.save_and_run": a(465), "common.loading": a(1950), "common.error": a(677), "common.error.unknown": a(486), "common.error.task_creation_aborted": a(1893), "common.error.status_check_aborted": a(2834), "common.error.result_fetch_aborted": "Result fetch aborted", "common.error.upload_aborted": "Upload aborted", "common.success": a(1850), "common.failed": "Failed", "common.generating": a(824), "common.cancel": a(1862), "common.confirm": a(517), "common.options": a(1540), "common.options_separator": a(390), "upload_pass.error.unsupported_type": a(1580), "upload_pass.error.uploader_missing": a(1825), webviewInForeground: a(2541), webviewInForeground2: a(810), "auth.login_success": a(818), "auth.username_label": a(2090), "auth.email_label": "Email: {{email}}", "auth.logout": a(1468), "auth.login_required": a(1599), "image.send.select_position": a(1376), "image.send.sending": "Sending image...", "image.layer.new": a(1806), "image.layer.current": "Current Layer", "image.layer.fit_to_current": a(2262), "image.layer.fit_to_selection": a(862), "image.layer.fit_to_canvas": "Fit to canvas", "image.shortcut_auth_required": "Shortcut selection feature requires login", "image.shortcut_focus_required": a(1226), "image.get.select_image": a(2629), "image.get.entire_canvas": a(1330), "image.get.canvas": "Canvas", "image.get.current_layer": "Current Layer", "image.get.current_layer_bounds": a(2037), "image.get.selection_bounds": a(1644), "image.get.canvas_bounds": "Canvas bounds", "image.crop_by_selection": a(2501), "image.limit_size": a(1297), "image.crop.none": a(2185), "image.crop.inpaint": a(1166), "image.crop.outpaint": a(1179), "image.send_all": a(272), "image.save_all": a(2612), "image.save_current": "Save current", "image.delete_current": a(195), "image.more_actions": a(1615), "image.jump_to_last": a(394), "image.clear_all": a(1277), "image.send_to_ps": a(1722), "image.download": a(693), "image.copy": "Copy", "image.sending": a(1616), "image.sending_all": a(273), "mask.get.select_mask": "Please select the mask to get", "mask.selection": a(2175), "mask.current_layer_bounds": "Current layer bounds", "mask.all": a(719), "mask.selection_exclude": a(1340), "mask.current_layer_exclude": a(386), "mask.empty": a(2317), "widgetable.photoshop.deprecated_node": a(2581), "work_boundary.error.empty_selection_mask": a(1379), "work_boundary.error.primary_resource_missing": a(2457), "work_boundary.error.mask_resource_missing": a(2768), "work_boundary.error.mask_apply_empty": "Mask apply returned empty resource", "document {{0}} not found": a(802), "create document for preview": a(2289), "resize document for preview": a(483), "create document for sent images": a(1158), "show sent images": a(1233), "create layer failed": a(497), "layer not found {{0}}": a(2411), "layer not found: {{0}}": "Layer not found: {{0}}", "layer {{0}} is not a group": a(958), "no linked layer for {{0}}": "No linked layer for {{0}}", "no first related layer in {{0}}": a(634), "merge group failed": a(567), "get content of layer {{0}}": a(1252), "get layer info": "Get layer info", "get_layer_info: layer_identify required": "get_layer_info requires layer_identify", "get pixel of {{0}} failed": a(624), "get selection failed": "Get selection failed", "invalid name: {{0}}": "Invalid name: {{0}}", "desire bounds is null": "Desire bounds is null", "intersect or scaledDesire is null": "Intersect or scaledDesire is null", 'only layer kind "TEXT" is supported, invalid layer: {{0}}': 'Only layer kind "TEXT" is supported, invalid layer: {{0}}', "select layer": a(2532), "run Photoshop Action": a(2029), "Action {{0}} not found": "Action {{0}} was not found", "Action set {{0}} not found": a(801), "set text to layer": a(689), "ComfyManager not found, cannot reboot": a(2504), "Failed to reboot ComfyUI": a(641), "image.upload.from_canvas": a(2004), "image.upload.from_curlayer": "Current Layer", "image.upload.from_selection": a(2175), "image.upload.from_harddisk": a(1678), "image.upload.clear": a(636), "image.upload.uploading": a(1814), "image.upload.syncing": a(2567), "image.upload.no_images": "No images", "image.upload.error": a(2872), "image.upload.tooltip.alt.crop": a(1047), "image.upload.tooltip.alt.reverse": a(929), "image.upload.tooltip.image.canvas": "Get image from Canvas", "image.upload.tooltip.image.curlayer": a(320), "image.upload.tooltip.mask.canvas": a(1807), "image.upload.tooltip.mask.curlayer": a(276), "image.upload.tooltip.mask.selection": a(683), "image.upload.tooltip.cut_action": a(1680), "image.upload.tooltip.scan_action": a(219), "image.upload.tooltip.autosync.on": a(1731), "image.upload.tooltip.autosync.off": a(793), "image.upload.tooltip.sync_action": a(2463), "image.upload.tooltip.more_options_hint": a(1074), "image.upload.tooltip.current.canvas": a(2100), "image.upload.tooltip.current.layer": a(2399), "image.upload.tooltip.current.layer_named": a(533), "image.upload.tooltip.current.file": a(2270), "image.upload.autosync.fetching": "Auto fetching…", "image.upload.autosync.status.enabled": "Auto sync in progress…", "image.upload.autosync.status.disabled": "Auto sync is off", "image.upload.retry": a(2521), "image.pack.local.button": a(1190), "image.pack.local.empty": "No images yet", "image.auto_send_enabled": a(503), "image.auto_send_disabled": "Auto send disabled", "image.upload.primary.auto": a(352), "image.upload.primary.manual": a(1660), "image.upload.primary.cut": a(2267), "image.upload.primary.scan": a(794), "image.upload.primary.hint": "This node defaults to current layer + mask", "image.upload.primary.hint.line1": a(207), "image.upload.primary.hint.line2": a(2815), "workflow.output.destination.title": a(1044), "workflow.output.destination.canvas": a(1831), "image.upload.primary.advanced": a(1546), "image.upload.primary.advanced.modify": a(1974), "image.upload.primary.advanced.reset": "Reset", "image.upload.primary.advanced.local_file": a(602), "image.upload.primary.advanced.content.canvas": a(2004), "image.upload.primary.advanced.content.curlayer": a(1891), "image.upload.primary.advanced.content.selection": a(2175), "image.upload.primary.advanced.boundary.canvas": a(415), "image.upload.primary.advanced.boundary.curlayer": "Current layer boundary", "image.upload.primary.advanced.boundary.selection": a(741), "image.upload.primary.advanced.boundary.primary": a(507), "image.upload.mode.file.label": "File", "image.upload.mode.layer.label": a(530), "image.upload.mode.canvas.label": a(2004), "image.upload.source.file.tooltip": "Upload from disk", "image.upload.source.layer.tooltip": a(647), "image.upload.source.canvas.tooltip": "Use entire canvas", "image.upload.dropHint": a(2627), "image.upload.tooltip.clear_action": a(2714), "image.upload.status.layer.short_named": a(2178), "image.upload.status.layer.short": a(530), "image.upload.status.file.short": "Local file", "image.upload.status.canvas.short": a(2004), "image.upload.status.file.active": a(2850), "image.upload.status.file.resetHint": a(825), "image.upload.status.mask.resetHint": "Click to restore default mask", "image.upload.status.mask.modified": a(933), "image.upload.status.boundary.resetHint": a(1706), "image.upload.status.boundary.modified": a(1167), "image.upload.status.boundary.docMismatch": "Not current document", "image.upload.mask.button": a(232), "image.upload.mask.selection": a(232), "image.upload.mask.layer": a(1746), "image.upload.remove_slot": a(1877), "image.upload.add_slot": a(2658), "video.local.button": "Local video", "video.local.empty": a(173), "video.local.remove": "Remove video", "source.source": a(411), "source.content": a(1048), "source.boundary": "Bounds", "source.mask": "Mask", "source.disk": "Disk", "source.remote": a(409), "source.unknown": a(1502), "source.ps_image": "PS", "source.ps_mask": "PS", "source.canvas": a(2004), "source.current_layer": a(2192), "source.selection": a(2175), "source.quality_percent": a(1208), "source.crop.positive": a(2198), "source.crop.negative": a(2774), "source.reverse": a(2845), "send_images.create_document": a(2034), "send_images.create_document_failed": "Create document failed", "photoshop.no_active_document": a(1116), "photoshop.rectangle_coordinates_required": "Rectangle coordinates required for create action", "photoshop.create_guide_frame": a(317), "photoshop.clear_guide_frame": a(941), "photoshop.invalid_action": "Invalid action: {{action}}", "photoshop.file_not_found": a(1652), "photoshop.failed_to_open_file_as_document": a(222), "photoshop.invalid_boundary": "Invalid boundary: left must be less than right, top must be less than bottom", "photoshop.failed_to_open_image_file": a(2486), "photoshop.open_images_from_file": a(1042), "photoshop.failed_to_create_document_from_file": a(829), "google.field.image_input": a(1829), "google.field.prompt": "Prompt", "google.field.batch_count": a(2856), "google.field.images_per_batch": "Images Per Batch", "google.status.success": "Success", "google.status.failed": a(2083), "google.status.generating": a(2274), "google.apikey_placeholder": a(2431), "google.get_apikey": "Get API Key", "google.baseurl_placeholder": a(1646), "google.help_tooltip": "Google Gemini Image Generator", "google.model_name": "Gemini 2.5 Flash Image", "google.model_label": a(1820), "google.model_placeholder": a(1014), "google.stop": a(912), "google.loading": "Loading...", "google.generating": "Generating...", "google.generate": "Generate", "image.auto_toggle": a(249), "image.import_as_smartobject": "Import as Smart Object", "image.import_as_newdoc": a(314), "image.boundary": a(797), "image.import_tip": a(1363), "auth.guest_login_success": a(789), "boundary.canvas": a(2004), "boundary.select_boundary": a(2809), "boundary.selection": a(2175), "boundary.max_size": a(1173), "boundary.max_size_error": a(1328), "boundary.max_size_hint": a(1516), "boundary.max_size_placeholder": a(1516), "boundary.no_limit": a(852), "boundary.image_quality": "Image quality (%)", "boundary.image_quality_required": "Enter a quality percentage", "boundary.image_quality_range": a(1788), "boundary.preview_main_image": a(2857), "boundary.preview_select": a(1426), "boundary.preview_alt": a(1080), "boundary.preview_placeholder": a(2552), "boundary.settings": "Adjust input settings", "convert widget {0} failed:": "Failed to convert widget {0}:", "document {0} not found": a(335), "image.document.new": a(340), "image.layer.smart_object": a(492), "layer not found {0}": a(1418), "photoshop.invalid_boundary_type": a(2439), "photoshop.no_active_layer": a(1398), "dialog.image_source.title": a(989), "dialog.image_source.primary_canvas": "Fetch canvas with primary boundary", "dialog.image_source.primary_curlayer": a(2070), "dialog.image_source.canvas_canvas": a(587), "dialog.image_source.canvas_curlayer": a(504), "dialog.image_source.curlayer_canvas": "Fetch canvas with current-layer boundary", "dialog.image_source.curlayer_curlayer": a(2346), "dialog.image_source.local_file": a(1438), "dialog.simple_source.title": "Select Source", "dialog.simple_source.canvas": a(2004), "dialog.simple_source.current_layer": "Current Layer", "dialog.simple_source.local_file": "Choose File", "dialog.simple_source.no_active_layer": a(2721), "dialog.simple_source.pick_error": a(1677) }, b0 = (o) => typeof o === a(2161), Je = () => {
  const o = a;
  let x, t;
  const r = new Promise((e, s) => {
    x = e, t = s;
  });
  return r.resolve = x, r[o(729)] = t, r;
}, Ua = (o) => o == null ? "" : "" + o, ui = (o, x, t) => {
  o[a(1471)]((e) => {
    x[e] && (t[e] = x[e]);
  });
}, di = /###/g, Ha = (o) => o && o[a(311)](a(296)) > -1 ? o[a(575)](di, ".") : o, za = (o) => !o || b0(o), ex = (o, x, t) => {
  const r = a, e = b0(x) ? x[r(628)](".") : x;
  let s = 0;
  for (; s < e[r(692)] - 1; ) {
    if (za(o)) return {};
    const n = Ha(e[s]);
    !o[n] && t && (o[n] = new t()), Object[r(2249)][r(873)].call(o, n) ? o = o[n] : o = {}, ++s;
  }
  return za(o) ? {} : { obj: o, k: Ha(e[s]) };
}, Va = (o, x, t) => {
  const r = a, { obj: e, k: s } = ex(o, x, Object);
  if (e !== void 0 || x[r(692)] === 1) {
    e[s] = t;
    return;
  }
  let n = x[x.length - 1], i = x[r(2088)](0, x[r(692)] - 1), c = ex(o, i, Object);
  for (; c.obj === void 0 && i.length; )
    n = i[i[r(692)] - 1] + "." + n, i = i[r(2088)](0, i[r(692)] - 1), c = ex(o, i, Object), c != null && c.obj && typeof c[r(2442)][c.k + "." + n] !== r(420) && (c[r(2442)] = void 0);
  c[r(2442)][c.k + "." + n] = t;
}, fi = (o, x, t, r) => {
  const e = a, { obj: s, k: n } = ex(o, x, Object);
  s[n] = s[n] || [], s[n][e(452)](t);
}, Rx = (o, x) => {
  const t = a, { obj: r, k: e } = ex(o, x);
  if (r && Object[t(2249)][t(873)][t(1994)](r, e))
    return r[e];
}, li = (o, x, t) => {
  const r = Rx(o, t);
  return r !== void 0 ? r : Rx(x, t);
}, Vs = (o, x, t) => {
  const r = a;
  for (const e in x)
    e !== r(1549) && e !== "constructor" && (e in o ? b0(o[e]) || o[e] instanceof String || b0(x[e]) || x[e] instanceof String ? t && (o[e] = x[e]) : Vs(o[e], x[e], t) : o[e] = x[e]);
  return o;
}, Ue = (o) => o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, a(605));
var hi = { "&": a(1626), "<": a(1690), ">": a(942), '"': a(2035), "'": a(1638), "/": a(946) };
const pi = (o) => b0(o) ? o.replace(/[&<>"'\/]/g, (x) => hi[x]) : o;
class mi {
  constructor(x) {
    const t = a;
    this[t(1778)] = x, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  [a(898)](x) {
    const t = a, r = this.regExpMap.get(x);
    if (r !== void 0) return r;
    const e = new RegExp(x);
    return this[t(1149)].length === this[t(1778)] && this.regExpMap[t(2215)](this[t(1149)][t(252)]()), this.regExpMap[t(758)](x, e), this[t(1149)][t(452)](x), e;
  }
}
const bi = [" ", ",", "?", "!", ";"], gi = new mi(20), yi = (o, x, t) => {
  const r = a;
  x = x || "", t = t || "";
  const e = bi[r(2145)]((i) => x.indexOf(i) < 0 && t[r(311)](i) < 0);
  if (e.length === 0) return !0;
  const s = gi[r(898)]("(" + e[r(1649)]((i) => i === "?" ? "\\?" : i)[r(2137)]("|") + ")");
  let n = !s[r(1904)](o);
  if (!n) {
    const i = o.indexOf(t);
    i > 0 && !s[r(1904)](o[r(1163)](0, i)) && (n = !0);
  }
  return n;
}, Jt = (o, x, t = ".") => {
  const r = a;
  if (!o) return;
  if (o[x])
    return Object[r(2249)].hasOwnProperty[r(1994)](o, x) ? o[x] : void 0;
  const e = x[r(628)](t);
  let s = o;
  for (let n = 0; n < e[r(692)]; ) {
    if (!s || typeof s !== r(544)) return;
    let i, c = "";
    for (let u = n; u < e[r(692)]; ++u)
      if (u !== n && (c += t), c += e[u], i = s[c], i !== void 0) {
        if ([r(2161), "number", r(1146)][r(311)](typeof i) > -1 && u < e[r(692)] - 1) continue;
        n += u - n + 1;
        break;
      }
    s = i;
  }
  return s;
}, sx = (o) => o == null ? void 0 : o[a(575)]("_", "-"), vi = { type: a(1610), log(o) {
  const x = a;
  this[x(1499)](x(2818), o);
}, warn(o) {
  const x = a;
  this[x(1499)](x(343), o);
}, error(o) {
  const x = a;
  this.output(x(948), o);
}, output(o, x) {
  var r, e;
  const t = a;
  (e = (r = console == null ? void 0 : console[o]) == null ? void 0 : r[t(2242)]) == null || e.call(r, console, x);
} };
class Cx {
  constructor(x, t = {}) {
    this[a(2636)](x, t);
  }
  [a(2636)](x, t = {}) {
    const r = a;
    this[r(338)] = t.prefix || "i18next:", this.logger = x || vi, this.options = t, this[r(2297)] = t[r(2297)];
  }
  [a(2818)](...x) {
    return this[a(1205)](x, "log", "", !0);
  }
  [a(343)](...x) {
    const t = a;
    return this[t(1205)](x, t(343), "", !0);
  }
  [a(948)](...x) {
    const t = a;
    return this[t(1205)](x, t(948), "");
  }
  [a(1717)](...x) {
    const t = a;
    return this[t(1205)](x, t(343), t(2019), !0);
  }
  forward(x, t, r, e) {
    const s = a;
    return e && !this[s(2297)] ? null : (b0(x[0]) && (x[0] = "" + r + this.prefix + " " + x[0]), this[s(1610)][t](x));
  }
  create(x) {
    const t = a;
    return new Cx(this[t(1610)], { prefix: this[t(338)] + ":" + x + ":", ...this[t(1005)] });
  }
  [a(2327)](x) {
    const t = a;
    return x = x || this[t(1005)], x[t(338)] = x[t(338)] || this[t(338)], new Cx(this[t(1610)], x);
  }
}
var fe = new Cx();
class Ax {
  constructor() {
    const x = a;
    this[x(2319)] = {};
  }
  on(x, t) {
    const r = a;
    return x[r(628)](" ")[r(1471)]((e) => {
      const s = r;
      this[s(2319)][e] || (this[s(2319)][e] = /* @__PURE__ */ new Map());
      const n = this.observers[e][s(1075)](t) || 0;
      this[s(2319)][e][s(758)](t, n + 1);
    }), this;
  }
  [a(2094)](x, t) {
    const r = a;
    if (this[r(2319)][x]) {
      if (!t) {
        delete this[r(2319)][x];
        return;
      }
      this[r(2319)][x][r(2215)](t);
    }
  }
  [a(1066)](x, ...t) {
    const r = a;
    this[r(2319)][x] && Array[r(2781)](this[r(2319)][x].entries())[r(1471)](([s, n]) => {
      for (let i = 0; i < n; i++)
        s(...t);
    }), this[r(2319)]["*"] && Array[r(2781)](this[r(2319)]["*"][r(1587)]()).forEach(([s, n]) => {
      const i = r;
      for (let c = 0; c < n; c++)
        s[i(2242)](s, [x, ...t]);
    });
  }
}
class Ba extends Ax {
  constructor(x, t = { ns: [a(1196)], defaultNS: a(1196) }) {
    const r = a;
    super(), this[r(909)] = x || {}, this.options = t, this[r(1005)].keySeparator === void 0 && (this[r(1005)][r(774)] = "."), this[r(1005)][r(1395)] === void 0 && (this[r(1005)][r(1395)] = !0);
  }
  [a(1754)](x) {
    const t = a;
    this[t(1005)].ns[t(311)](x) < 0 && this[t(1005)].ns[t(452)](x);
  }
  [a(2432)](x) {
    const t = a, r = this[t(1005)].ns[t(311)](x);
    r > -1 && this[t(1005)].ns.splice(r, 1);
  }
  [a(1424)](x, t, r, e = {}) {
    var d, f;
    const s = a, n = e[s(774)] !== void 0 ? e[s(774)] : this[s(1005)][s(774)], i = e[s(1395)] !== void 0 ? e.ignoreJSONStructure : this[s(1005)].ignoreJSONStructure;
    let c;
    x[s(311)](".") > -1 ? c = x[s(628)](".") : (c = [x, t], r && (Array[s(1783)](r) ? c[s(452)](...r) : b0(r) && n ? c[s(452)](...r[s(628)](n)) : c.push(r)));
    const u = Rx(this[s(909)], c);
    return !u && !t && !r && x[s(311)](".") > -1 && (x = c[0], t = c[1], r = c[s(2088)](2).join(".")), u || !i || !b0(r) ? u : Jt((f = (d = this[s(909)]) == null ? void 0 : d[x]) == null ? void 0 : f[t], r, n);
  }
  [a(1088)](x, t, r, e, s = { silent: !1 }) {
    const n = a, i = s[n(774)] !== void 0 ? s[n(774)] : this[n(1005)][n(774)];
    let c = [x, t];
    r && (c = c[n(2044)](i ? r[n(628)](i) : r)), x[n(311)](".") > -1 && (c = x[n(628)]("."), e = t, t = c[1]), this[n(1754)](t), Va(this[n(909)], c, e), s[n(2067)] || this[n(1066)](n(1299), x, t, r, e);
  }
  [a(1878)](x, t, r, e = { silent: !1 }) {
    const s = a;
    for (const n in r)
      (b0(r[n]) || Array[s(1783)](r[n])) && this.addResource(x, t, n, r[n], { silent: !0 });
    e[s(2067)] || this.emit(s(1299), x, t, r);
  }
  [a(2167)](x, t, r, e, s, n = { silent: !1, skipCopy: !1 }) {
    const i = a;
    let c = [x, t];
    x[i(311)](".") > -1 && (c = x.split("."), e = r, r = t, t = c[1]), this[i(1754)](t);
    let u = Rx(this[i(909)], c) || {};
    n[i(2516)] || (r = JSON[i(706)](JSON[i(2625)](r))), e ? Vs(u, r, s) : u = { ...u, ...r }, Va(this.data, c, u), n[i(2067)] || this[i(1066)](i(1299), x, t, r);
  }
  removeResourceBundle(x, t) {
    const r = a;
    this[r(1457)](x, t) && delete this[r(909)][x][t], this[r(2432)](t), this[r(1066)](r(2696), x, t);
  }
  [a(1457)](x, t) {
    return this.getResource(x, t) !== void 0;
  }
  getResourceBundle(x, t) {
    const r = a;
    return t || (t = this[r(1005)][r(2412)]), this.getResource(x, t);
  }
  [a(1699)](x) {
    return this.data[x];
  }
  [a(1870)](x) {
    const t = a, r = this[t(1699)](x);
    return !!(r && Object.keys(r) || []).find((s) => r[s] && Object[t(750)](r[s])[t(692)] > 0);
  }
  [a(1538)]() {
    return this[a(909)];
  }
}
var Bs = { processors: {}, addPostProcessor(o) {
  const x = a;
  this[x(1501)][o[x(1055)]] = o;
}, handle(o, x, t, r, e) {
  const s = a;
  return o[s(1471)]((n) => {
    var c;
    const i = s;
    x = ((c = this[i(1501)][n]) == null ? void 0 : c[i(391)](x, t, r, e)) ?? x;
  }), x;
} };
const Zs = Symbol("i18next/PATH_KEY");
function wi() {
  const o = a, x = [], t = Object[o(665)](null);
  let r;
  return t[o(1075)] = (e, s) => {
    var i;
    const n = o;
    return (i = r == null ? void 0 : r[n(2529)]) == null || i.call(r), s === Zs ? x : (x[n(452)](s), r = Proxy.revocable(e, t), r.proxy);
  }, Proxy[o(2558)](/* @__PURE__ */ Object.create(null), t)[o(1839)];
}
function Qt(o, x) {
  const t = a, { [Zs]: r } = o(wi());
  return r.join((x == null ? void 0 : x[t(774)]) ?? ".");
}
const Za = {}, Wx = (o) => !b0(o) && typeof o !== a(1146) && typeof o !== a(2153);
class Fx extends Ax {
  constructor(x, t = {}) {
    const r = a;
    super(), ui([r(2709), r(2469), r(322), "interpolator", r(2296), r(1752), r(1781)], x, this), this[r(1005)] = t, this[r(1005)][r(774)] === void 0 && (this.options[r(774)] = "."), this[r(1610)] = fe.create(r(853));
  }
  changeLanguage(x) {
    x && (this.language = x);
  }
  [a(280)](x, t = { interpolation: {} }) {
    const r = a, e = { ...t };
    if (x == null) return !1;
    const s = this[r(1571)](x, e);
    if ((s == null ? void 0 : s[r(1574)]) === void 0) return !1;
    const n = Wx(s.res);
    return !(e[r(1853)] === !1 && n);
  }
  extractFromKey(x, t) {
    const r = a;
    let e = t[r(1559)] !== void 0 ? t[r(1559)] : this.options[r(1559)];
    e === void 0 && (e = ":");
    const s = t[r(774)] !== void 0 ? t[r(774)] : this[r(1005)][r(774)];
    let n = t.ns || this.options[r(2412)] || [];
    const i = e && x[r(311)](e) > -1, c = !this[r(1005)].userDefinedKeySeparator && !t[r(774)] && !this[r(1005)][r(1073)] && !t[r(1559)] && !yi(x, e, s);
    if (i && !c) {
      const u = x[r(430)](this.interpolator[r(1268)]);
      if (u && u[r(692)] > 0) return { key: x, namespaces: b0(n) ? [n] : n };
      const d = x[r(628)](e);
      (e !== s || e === s && this[r(1005)].ns[r(311)](d[0]) > -1) && (n = d[r(252)]()), x = d[r(2137)](s);
    }
    return { key: x, namespaces: b0(n) ? [n] : n };
  }
  [a(242)](x, t, r) {
    const e = a;
    let s = typeof t === e(544) ? { ...t } : t;
    if (typeof s !== e(544) && this[e(1005)].overloadTranslationOptionHandler && (s = this[e(1005)].overloadTranslationOptionHandler(arguments)), typeof s === e(544) && (s = { ...s }), s || (s = {}), x == null) return "";
    typeof x === e(1622) && (x = Qt(x, { ...this.options, ...s })), Array[e(1783)](x) || (x = [String(x)]);
    const n = s.returnDetails !== void 0 ? s[e(2645)] : this[e(1005)][e(2645)], i = s[e(774)] !== void 0 ? s[e(774)] : this[e(1005)][e(774)], { key: c, namespaces: u } = this.extractFromKey(x[x[e(692)] - 1], s), d = u[u[e(692)] - 1];
    let f = s[e(1559)] !== void 0 ? s[e(1559)] : this[e(1005)][e(1559)];
    f === void 0 && (f = ":");
    const l = s[e(524)] || this[e(2756)], b = s[e(661)] || this[e(1005)][e(661)];
    if ((l == null ? void 0 : l.toLowerCase()) === e(2639))
      return b ? n ? { res: "" + d + f + c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: d, usedParams: this[e(1120)](s) } : "" + d + f + c : n ? { res: c, usedKey: c, exactUsedKey: c, usedLng: l, usedNS: d, usedParams: this[e(1120)](s) } : c;
    const h = this.resolve(x, s);
    let m = h == null ? void 0 : h[e(1574)];
    const v = (h == null ? void 0 : h.usedKey) || c, k = (h == null ? void 0 : h.exactUsedKey) || c, I = [e(1169), "[object Function]", e(287)], A = s.joinArrays !== void 0 ? s[e(1716)] : this[e(1005)][e(1716)], T = !this[e(1752)] || this.i18nFormat[e(836)], R = s[e(2200)] !== void 0 && !b0(s[e(2200)]), P = Fx[e(1210)](s), N = R ? this[e(322)][e(891)](l, s.count, s) : "", _ = s[e(2597)] && R ? this[e(322)][e(891)](l, s[e(2200)], { ordinal: !1 }) : "", D = R && !s[e(2597)] && s.count === 0, j = D && s[e(244) + this[e(1005)].pluralSeparator + e(744)] || s[e(244) + N] || s["defaultValue" + _] || s[e(244)];
    let F = m;
    T && !m && P && (F = j);
    const C = Wx(F), H = Object[e(2249)][e(766)][e(2242)](F);
    if (T && F && C && I[e(311)](H) < 0 && !(b0(A) && Array[e(1783)](F))) {
      if (!s[e(1853)] && !this[e(1005)][e(1853)]) {
        !this[e(1005)][e(282)] && this.logger[e(343)](e(2800));
        const U = this[e(1005)].returnedObjectHandler ? this[e(1005)][e(282)](v, F, { ...s, ns: u }) : e(1021) + c + " (" + this[e(2756)] + ")' returned an object instead of string.";
        return n ? (h[e(1574)] = U, h[e(2260)] = this[e(1120)](s), h) : U;
      }
      if (i) {
        const U = Array[e(1783)](F), z = U ? [] : {}, G = U ? k : v;
        for (const i0 in F)
          if (Object[e(2249)].hasOwnProperty[e(1994)](F, i0)) {
            const u0 = "" + G + i + i0;
            P && !m ? z[i0] = this[e(242)](u0, { ...s, defaultValue: Wx(j) ? j[i0] : void 0, joinArrays: !1, ns: u }) : z[i0] = this.translate(u0, { ...s, joinArrays: !1, ns: u }), z[i0] === u0 && (z[i0] = F[i0]);
          }
        m = z;
      }
    } else if (T && b0(A) && Array[e(1783)](m))
      m = m.join(A), m && (m = this.extendTranslation(m, x, s, r));
    else {
      let U = !1, z = !1;
      !this[e(339)](m) && P && (U = !0, m = j), !this[e(339)](m) && (z = !0, m = c);
      const G = s.missingKeyNoValueFallbackToKey || this[e(1005)].missingKeyNoValueFallbackToKey, i0 = G && z ? void 0 : m, u0 = P && j !== m && this[e(1005)][e(2056)];
      if (z || U || u0) {
        if (this[e(1610)][e(2818)](e(u0 ? 1539 : 1434), l, d, c, u0 ? j : m), i) {
          const k0 = this.resolve(c, { ...s, keySeparator: !1 });
          k0 && k0[e(1574)] && this.logger.warn(e(1217));
        }
        let l0 = [];
        const o0 = this[e(2469)].getFallbackCodes(this.options[e(1524)], s.lng || this[e(2756)]);
        if (this[e(1005)][e(478)] === e(292) && o0 && o0[0]) for (let k0 = 0; k0 < o0[e(692)]; k0++)
          l0[e(452)](o0[k0]);
        else this.options[e(478)] === e(403) ? l0 = this.languageUtils[e(1808)](s.lng || this[e(2756)]) : l0[e(452)](s[e(524)] || this.language);
        const f0 = (k0, S0, M0) => {
          var O;
          const F0 = e, J0 = P && M0 !== m ? M0 : i0;
          this[F0(1005)][F0(2724)] ? this.options.missingKeyHandler(k0, d, S0, J0, u0, s) : (O = this[F0(2296)]) != null && O[F0(2085)] && this[F0(2296)][F0(2085)](k0, d, S0, J0, u0, s), this[F0(1066)](F0(1434), k0, d, S0, m);
        };
        this[e(1005)].saveMissing && (this.options[e(988)] && R ? l0.forEach((k0) => {
          const S0 = e, M0 = this.pluralResolver[S0(1374)](k0, s);
          D && s["defaultValue" + this[S0(1005)].pluralSeparator + S0(744)] && M0[S0(311)](this[S0(1005)].pluralSeparator + "zero") < 0 && M0[S0(452)](this.options.pluralSeparator + S0(744)), M0.forEach((F0) => {
            const J0 = S0;
            f0([k0], c + F0, s[J0(244) + F0] || j);
          });
        }) : f0(l0, c, j));
      }
      m = this[e(451)](m, x, s, h, r), z && m === c && this.options.appendNamespaceToMissingKey && (m = "" + d + f + c), (z || U) && this[e(1005)][e(712)] && (m = this[e(1005)][e(712)](this.options[e(623)] ? "" + d + f + c : c, U ? m : void 0, s));
    }
    return n ? (h[e(1574)] = m, h.usedParams = this[e(1120)](s), h) : m;
  }
  [a(451)](x, t, r, e, s) {
    var u, d;
    const n = a;
    if ((u = this[n(1752)]) != null && u[n(706)]) x = this.i18nFormat.parse(x, { ...this[n(1005)][n(2660)].defaultVariables, ...r }, r[n(524)] || this[n(2756)] || e[n(562)], e.usedNS, e[n(363)], { resolved: e });
    else if (!r[n(2181)]) {
      r[n(2660)] && this[n(951)].init({ ...r, interpolation: { ...this.options[n(2660)], ...r[n(2660)] } });
      const f = b0(x) && (((d = r == null ? void 0 : r[n(2660)]) == null ? void 0 : d.skipOnVariables) !== void 0 ? r[n(2660)][n(1092)] : this[n(1005)][n(2660)][n(1092)]);
      let l;
      if (f) {
        const h = x[n(430)](this[n(951)][n(1268)]);
        l = h && h[n(692)];
      }
      let b = r[n(575)] && !b0(r.replace) ? r[n(575)] : r;
      if (this.options[n(2660)][n(491)] && (b = { ...this[n(1005)][n(2660)][n(491)], ...b }), x = this[n(951)][n(2678)](x, b, r[n(524)] || this[n(2756)] || e[n(562)], r), f) {
        const h = x[n(430)](this[n(951)][n(1268)]), m = h && h[n(692)];
        l < m && (r[n(1742)] = !1);
      }
      !r[n(524)] && e && e[n(1574)] && (r[n(524)] = this[n(2756)] || e[n(562)]), r[n(1742)] !== !1 && (x = this[n(951)][n(1742)](x, (...h) => {
        const m = n;
        return (s == null ? void 0 : s[0]) === h[0] && !r.context ? (this[m(1610)][m(343)](m(1372) + h[0] + " in key: " + t[0]), null) : this[m(242)](...h, t);
      }, r)), r[n(2660)] && this[n(951)][n(2865)]();
    }
    const i = r[n(181)] || this[n(1005)][n(181)], c = b0(i) ? [i] : i;
    return x != null && (c != null && c[n(692)]) && r[n(1990)] !== !1 && (x = Bs[n(1505)](c, x, t, this.options && this[n(1005)][n(1643)] ? { i18nResolved: { ...e, usedParams: this[n(1120)](r) }, ...r } : r, this)), x;
  }
  [a(1571)](x, t = {}) {
    let r, e, s, n, i;
    return b0(x) && (x = [x]), x.forEach((c) => {
      const u = K;
      if (this[u(339)](r)) return;
      const d = this[u(640)](c, t), f = d[u(1867)];
      e = f;
      let l = d.namespaces;
      this[u(1005)][u(1530)] && (l = l[u(2044)](this[u(1005)].fallbackNS));
      const b = t[u(2200)] !== void 0 && !b0(t[u(2200)]), h = b && !t[u(2597)] && t.count === 0, m = t[u(2320)] !== void 0 && (b0(t[u(2320)]) || typeof t[u(2320)] === u(2153)) && t[u(2320)] !== "", v = t[u(308)] ? t[u(308)] : this[u(2469)].toResolveHierarchy(t.lng || this[u(2756)], t[u(1524)]);
      l[u(1471)]((k) => {
        var A, T;
        const I = u;
        this.isValidLookup(r) || (i = k, !Za[v[0] + "-" + k] && ((A = this[I(1781)]) != null && A.hasLoadedNamespace) && !((T = this[I(1781)]) != null && T[I(286)](i)) && (Za[v[0] + "-" + k] = !0, this[I(1610)][I(343)](I(2177) + e + '" for languages "' + v[I(2137)](", ") + I(607) + i + '" was not yet loaded', I(2363))), v[I(1471)]((R) => {
          var D;
          const P = I;
          if (this[P(339)](r)) return;
          n = R;
          const N = [f];
          if ((D = this.i18nFormat) != null && D.addLookupKeys) this[P(1752)][P(205)](N, f, R, k, t);
          else {
            let j;
            b && (j = this[P(322)].getSuffix(R, t[P(2200)], t));
            const F = this[P(1005)][P(2139)] + P(744), C = this[P(1005)][P(2139)] + P(2597) + this[P(1005)][P(2139)];
            if (b && (t[P(2597)] && j[P(311)](C) === 0 && N[P(452)](f + j[P(575)](C, this.options[P(2139)])), N[P(452)](f + j), h && N[P(452)](f + F)), m) {
              const H = "" + f + (this[P(1005)][P(1987)] || "_") + t[P(2320)];
              N[P(452)](H), b && (t[P(2597)] && j[P(311)](C) === 0 && N[P(452)](H + j.replace(C, this[P(1005)][P(2139)])), N[P(452)](H + j), h && N.push(H + F));
            }
          }
          let _;
          for (; _ = N[P(2231)](); )
            !this[P(339)](r) && (s = _, r = this[P(1424)](R, k, _, t));
        }));
      });
    }), { res: r, usedKey: e, exactUsedKey: s, usedLng: n, usedNS: i };
  }
  [a(339)](x) {
    const t = a;
    return x !== void 0 && !(!this[t(1005)].returnNull && x === null) && !(!this[t(1005)][t(2859)] && x === "");
  }
  [a(1424)](x, t, r, e = {}) {
    var n;
    const s = a;
    return (n = this.i18nFormat) != null && n[s(1424)] ? this.i18nFormat[s(1424)](x, t, r, e) : this[s(2709)][s(1424)](x, t, r, e);
  }
  [a(1120)](x = {}) {
    const t = a, r = [t(244), "ordinal", t(2320), t(575), t(524), t(308), t(1524), "ns", "keySeparator", t(1559), t(1853), t(2645), t(1716), t(181), t(2660)], e = x[t(575)] && !b0(x.replace);
    let s = e ? x[t(575)] : x;
    if (e && typeof x[t(2200)] !== t(420) && (s.count = x[t(2200)]), this[t(1005)].interpolation[t(491)] && (s = { ...this[t(1005)][t(2660)][t(491)], ...s }), !e) {
      s = { ...s };
      for (const n of r)
        delete s[n];
    }
    return s;
  }
  static [a(1210)](x) {
    const t = a, r = "defaultValue";
    for (const e in x)
      if (Object.prototype[t(873)][t(1994)](x, e) && r === e.substring(0, r[t(692)]) && x[e] !== void 0) return !0;
    return !1;
  }
}
class Wa {
  constructor(x) {
    const t = a;
    this[t(1005)] = x, this.supportedLngs = this[t(1005)].supportedLngs || !1, this[t(1610)] = fe[t(665)]("languageUtils");
  }
  getScriptPartFromCode(x) {
    const t = a;
    if (x = sx(x), !x || x[t(311)]("-") < 0) return null;
    const r = x[t(628)]("-");
    return r[t(692)] === 2 || (r[t(2231)](), r[r[t(692)] - 1][t(556)]() === "x") ? null : this[t(1953)](r.join("-"));
  }
  [a(1786)](x) {
    const t = a;
    if (x = sx(x), !x || x.indexOf("-") < 0) return x;
    const r = x[t(628)]("-");
    return this[t(1953)](r[0]);
  }
  [a(1953)](x) {
    const t = a;
    if (b0(x) && x[t(311)]("-") > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(x)[0];
      } catch {
      }
      return r && this[t(1005)][t(336)] && (r = r[t(556)]()), r || (this[t(1005)][t(336)] ? x.toLowerCase() : x);
    }
    return this[t(1005)][t(2707)] || this.options[t(336)] ? x[t(556)]() : x;
  }
  isSupportedCode(x) {
    const t = a;
    return (this[t(1005)][t(2622)] === t(312) || this[t(1005)].nonExplicitSupportedLngs) && (x = this[t(1786)](x)), !this.supportedLngs || !this[t(1775)][t(692)] || this[t(1775)][t(311)](x) > -1;
  }
  getBestMatchFromCodes(x) {
    const t = a;
    if (!x) return null;
    let r;
    return x[t(1471)]((e) => {
      const s = t;
      if (r) return;
      const n = this[s(1953)](e);
      (!this[s(1005)][s(1775)] || this[s(863)](n)) && (r = n);
    }), !r && this[t(1005)][t(1775)] && x[t(1471)]((e) => {
      const s = t;
      if (r) return;
      const n = this[s(791)](e);
      if (this[s(863)](n)) return r = n;
      const i = this[s(1786)](e);
      if (this[s(863)](i)) return r = i;
      r = this[s(1005)][s(1775)][s(1341)]((c) => {
        const u = s;
        if (c === i) return c;
        if (!(c[u(311)]("-") < 0 && i[u(311)]("-") < 0) && (c[u(311)]("-") > 0 && i[u(311)]("-") < 0 && c[u(1163)](0, c[u(311)]("-")) === i || c[u(311)](i) === 0 && i[u(692)] > 1))
          return c;
      });
    }), r || (r = this[t(1391)](this[t(1005)][t(1524)])[0]), r;
  }
  [a(1391)](x, t) {
    const r = a;
    if (!x) return [];
    if (typeof x === r(1622) && (x = x(t)), b0(x) && (x = [x]), Array[r(1783)](x)) return x;
    if (!t) return x[r(1944)] || [];
    let e = x[t];
    return e || (e = x[this[r(791)](t)]), e || (e = x[this[r(1953)](t)]), e || (e = x[this[r(1786)](t)]), e || (e = x.default), e || [];
  }
  toResolveHierarchy(x, t) {
    const r = a, e = this[r(1391)]((t === !1 ? [] : t) || this.options[r(1524)] || [], x), s = [], n = (i) => {
      const c = r;
      i && (this[c(863)](i) ? s[c(452)](i) : this[c(1610)][c(343)](c(1903) + i));
    };
    return b0(x) && (x[r(311)]("-") > -1 || x[r(311)]("_") > -1) ? (this[r(1005)][r(2622)] !== r(312) && n(this[r(1953)](x)), this[r(1005)][r(2622)] !== r(312) && this[r(1005)][r(2622)] !== r(2127) && n(this[r(791)](x)), this[r(1005)].load !== r(2127) && n(this[r(1786)](x))) : b0(x) && n(this[r(1953)](x)), e[r(1471)]((i) => {
      const c = r;
      s.indexOf(i) < 0 && n(this[c(1953)](i));
    }), s;
  }
}
const Ka = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, Ga = { select: (o) => o === 1 ? "one" : a(1584), resolvedOptions: () => ({ pluralCategories: [a(2693), a(1584)] }) };
class Si {
  constructor(x, t = {}) {
    const r = a;
    this[r(2469)] = x, this[r(1005)] = t, this.logger = fe.create("pluralResolver"), this.pluralRulesCache = {};
  }
  [a(446)](x, t) {
    this.rules[x] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  [a(551)](x, t = {}) {
    const r = a, e = sx(x === r(1527) ? "en" : x), s = t[r(2597)] ? r(2597) : r(1314), n = JSON[r(2625)]({ cleanedCode: e, type: s });
    if (n in this[r(1470)]) return this[r(1470)][n];
    let i;
    try {
      i = new Intl.PluralRules(e, { type: s });
    } catch {
      if (!Intl) return this[r(1610)][r(948)]("No Intl support, please use an Intl polyfill!"), Ga;
      if (!x[r(430)](/-|_/)) return Ga;
      const u = this.languageUtils.getLanguagePartFromCode(x);
      i = this[r(551)](u, t);
    }
    return this.pluralRulesCache[n] = i, i;
  }
  [a(1483)](x, t = {}) {
    const r = a;
    let e = this.getRule(x, t);
    return e || (e = this.getRule("dev", t)), (e == null ? void 0 : e[r(396)]()[r(2133)][r(692)]) > 1;
  }
  [a(2061)](x, t, r = {}) {
    const e = a;
    return this.getSuffixes(x, r)[e(1649)]((s) => "" + t + s);
  }
  [a(1374)](x, t = {}) {
    const r = a;
    let e = this[r(551)](x, t);
    return e || (e = this[r(551)](r(1527), t)), e ? e.resolvedOptions()[r(2133)].sort((s, n) => Ka[s] - Ka[n])[r(1649)]((s) => "" + this[r(1005)][r(397)] + (t[r(2597)] ? r(2597) + this[r(1005)][r(397)] : "") + s) : [];
  }
  getSuffix(x, t, r = {}) {
    const e = a, s = this[e(551)](x, r);
    return s ? "" + this[e(1005)].prepend + (r[e(2597)] ? e(2597) + this[e(1005)][e(397)] : "") + s[e(1306)](t) : (this[e(1610)][e(343)]("no plural rule found for: " + x), this[e(891)](e(1527), t, r));
  }
}
const Ja = (o, x, t, r = ".", e = !0) => {
  let s = li(o, x, t);
  return !s && e && b0(t) && (s = Jt(o, t, r), s === void 0 && (s = Jt(x, t, r))), s;
}, Kx = (o) => o[a(575)](/\$/g, a(1244));
class Qa {
  constructor(x = {}) {
    var r;
    const t = a;
    this[t(1610)] = fe.create("interpolator"), this[t(1005)] = x, this.format = ((r = x == null ? void 0 : x[t(2660)]) == null ? void 0 : r.format) || ((e) => e), this.init(x);
  }
  [a(2636)](x = {}) {
    const t = a;
    x[t(2660)] || (x[t(2660)] = { escapeValue: !0 });
    const { escape: r, escapeValue: e, useRawValueToEscape: s, prefix: n, prefixEscaped: i, suffix: c, suffixEscaped: u, formatSeparator: d, unescapeSuffix: f, unescapePrefix: l, nestingPrefix: b, nestingPrefixEscaped: h, nestingSuffix: m, nestingSuffixEscaped: v, nestingOptionsSeparator: k, maxReplaces: I, alwaysFormat: A } = x[t(2660)];
    this[t(342)] = r !== void 0 ? r : pi, this[t(1216)] = e !== void 0 ? e : !0, this[t(1940)] = s !== void 0 ? s : !1, this[t(338)] = n ? Ue(n) : i || "{{", this[t(649)] = c ? Ue(c) : u || "}}", this[t(684)] = d || ",", this[t(1494)] = f ? "" : l || "-", this[t(864)] = this[t(1494)] ? "" : f || "", this[t(2538)] = b ? Ue(b) : h || Ue("$t("), this[t(1343)] = m ? Ue(m) : v || Ue(")"), this[t(2466)] = k || ",", this[t(2064)] = I || 1e3, this[t(1849)] = A !== void 0 ? A : !1, this[t(2120)]();
  }
  [a(2865)]() {
    const x = a;
    this[x(1005)] && this.init(this[x(1005)]);
  }
  [a(2120)]() {
    const x = a, t = (r, e) => {
      const s = K;
      return (r == null ? void 0 : r[s(901)]) === e ? (r[s(947)] = 0, r) : new RegExp(e, "g");
    };
    this[x(652)] = t(this[x(652)], this[x(338)] + "(.+?)" + this[x(649)]), this.regexpUnescape = t(this[x(1790)], "" + this.prefix + this[x(1494)] + x(1351) + this[x(864)] + this[x(649)]), this[x(1268)] = t(this[x(1268)], this.nestingPrefix + x(2526) + this[x(1343)]);
  }
  [a(2678)](x, t, r, e) {
    var h;
    const s = a;
    let n, i, c;
    const u = this[s(1005)] && this.options.interpolation && this.options[s(2660)][s(491)] || {}, d = (m) => {
      const v = s;
      if (m[v(311)](this[v(684)]) < 0) {
        const T = Ja(t, u, m, this[v(1005)][v(774)], this[v(1005)][v(1395)]);
        return this[v(1849)] ? this.format(T, void 0, r, { ...e, ...t, interpolationkey: m }) : T;
      }
      const k = m[v(628)](this[v(684)]), I = k.shift().trim(), A = k[v(2137)](this[v(684)]).trim();
      return this[v(2197)](Ja(t, u, I, this.options[v(774)], this[v(1005)][v(1395)]), A, r, { ...e, ...t, interpolationkey: I });
    };
    this[s(2120)]();
    const f = (e == null ? void 0 : e[s(2357)]) || this[s(1005)][s(2357)], l = ((h = e == null ? void 0 : e[s(2660)]) == null ? void 0 : h[s(1092)]) !== void 0 ? e[s(2660)][s(1092)] : this[s(1005)][s(2660)][s(1092)];
    return [{ regex: this.regexpUnescape, safeValue: (m) => Kx(m) }, { regex: this[s(652)], safeValue: (m) => this.escapeValue ? Kx(this[s(342)](m)) : Kx(m) }][s(1471)]((m) => {
      const v = s;
      for (c = 0; n = m[v(2764)][v(537)](x); ) {
        const k = n[1].trim();
        if (i = d(k), i === void 0)
          if (typeof f === v(1622)) {
            const A = f(x, n, e);
            i = b0(A) ? A : "";
          } else if (e && Object[v(2249)].hasOwnProperty.call(e, k)) i = "";
          else if (l) {
            i = n[0];
            continue;
          } else this[v(1610)][v(343)]("missed to pass in variable " + k + v(1498) + x), i = "";
        else !b0(i) && !this[v(1940)] && (i = Ua(i));
        const I = m.safeValue(i);
        if (x = x[v(575)](n[0], I), l ? (m[v(2764)][v(947)] += i[v(692)], m[v(2764)][v(947)] -= n[0][v(692)]) : m[v(2764)].lastIndex = 0, c++, c >= this[v(2064)]) break;
      }
    }), x;
  }
  [a(1742)](x, t, r = {}) {
    const e = a;
    let s, n, i;
    const c = (u, d) => {
      const f = K, l = this[f(2466)];
      if (u[f(311)](l) < 0) return u;
      const b = u[f(628)](new RegExp(l + "[ ]*{"));
      let h = "{" + b[1];
      u = b[0], h = this[f(2678)](h, i);
      const m = h.match(/'/g), v = h[f(430)](/"/g);
      (((m == null ? void 0 : m[f(692)]) ?? 0) % 2 === 0 && !v || v[f(692)] % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        i = JSON[f(706)](h), d && (i = { ...d, ...i });
      } catch (k) {
        return this[f(1610)][f(343)](f(2587) + u, k), "" + u + l + h;
      }
      return i[f(244)] && i[f(244)][f(311)](this[f(338)]) > -1 && delete i[f(244)], u;
    };
    for (; s = this.nestingRegexp[e(537)](x); ) {
      let u = [];
      i = { ...r }, i = i[e(575)] && !b0(i[e(575)]) ? i[e(575)] : i, i[e(1990)] = !1, delete i[e(244)];
      const d = /{.*}/[e(1904)](s[1]) ? s[1][e(1923)]("}") + 1 : s[1][e(311)](this[e(684)]);
      if (d !== -1 && (u = s[1][e(2088)](d)[e(628)](this[e(684)]).map((f) => f.trim())[e(2145)](Boolean), s[1] = s[1][e(2088)](0, d)), n = t(c[e(1994)](this, s[1].trim(), i), i), n && s[0] === x && !b0(n)) return n;
      b0(n) || (n = Ua(n)), !n && (this.logger[e(343)](e(1059) + s[1] + e(1689) + x), n = ""), u.length && (n = u[e(172)]((f, l) => this.format(f, l, r[e(524)], { ...r, interpolationkey: s[1][e(2444)]() }), n[e(2444)]())), x = x.replace(s[0], n), this[e(652)][e(947)] = 0;
    }
    return x;
  }
}
const ki = (o) => {
  const x = a;
  let t = o[x(556)]().trim();
  const r = {};
  if (o[x(311)]("(") > -1) {
    const e = o[x(628)]("(");
    t = e[0][x(556)]()[x(2444)]();
    const s = e[1][x(1163)](0, e[1][x(692)] - 1);
    t === "currency" && s.indexOf(":") < 0 ? r.currency || (r[x(199)] = s[x(2444)]()) : t === x(983) && s.indexOf(":") < 0 ? r[x(743)] || (r.range = s.trim()) : s[x(628)](";")[x(1471)]((i) => {
      const c = x;
      if (i) {
        const [u, ...d] = i.split(":"), f = d[c(2137)](":")[c(2444)]()[c(575)](/^'+|'+$/g, ""), l = u[c(2444)]();
        r[l] || (r[l] = f), f === c(2205) && (r[l] = !1), f === c(2704) && (r[l] = !0), isNaN(f) || (r[l] = parseInt(f, 10));
      }
    });
  }
  return { formatName: t, formatOptions: r };
}, Xa = (o) => {
  const x = {};
  return (t, r, e) => {
    const s = K;
    let n = e;
    e && e[s(1577)] && e[s(2074)] && e.formatParams[e[s(1577)]] && e[e[s(1577)]] && (n = { ...n, [e[s(1577)]]: void 0 });
    const i = r + JSON[s(2625)](n);
    let c = x[i];
    return !c && (c = o(sx(r), e), x[i] = c), c(t);
  };
}, Pi = (o) => (x, t, r) => o(sx(t), r)(x);
class Ii {
  constructor(x = {}) {
    const t = a;
    this.logger = fe[t(665)](t(839)), this.options = x, this[t(2636)](x);
  }
  [a(2636)](x, t = { interpolation: {} }) {
    const r = a;
    this.formatSeparator = t[r(2660)][r(684)] || ",";
    const e = t.cacheInBuiltFormats ? Xa : Pi;
    this[r(823)] = { number: e((s, n) => {
      const i = r, c = new Intl[i(643)](s, { ...n });
      return (u) => c[i(2197)](u);
    }), currency: e((s, n) => {
      const i = r, c = new Intl.NumberFormat(s, { ...n, style: "currency" });
      return (u) => c[i(2197)](u);
    }), datetime: e((s, n) => {
      const i = r, c = new Intl[i(648)](s, { ...n });
      return (u) => c[i(2197)](u);
    }), relativetime: e((s, n) => {
      const i = r, c = new Intl.RelativeTimeFormat(s, { ...n });
      return (u) => c.format(u, n[i(743)] || i(262));
    }), list: e((s, n) => {
      const i = r, c = new Intl[i(675)](s, { ...n });
      return (u) => c[i(2197)](u);
    }) };
  }
  [a(2655)](x, t) {
    const r = a;
    this[r(823)][x.toLowerCase()[r(2444)]()] = t;
  }
  [a(381)](x, t) {
    const r = a;
    this[r(823)][x[r(556)]()[r(2444)]()] = Xa(t);
  }
  [a(2197)](x, t, r, e = {}) {
    const s = a, n = t[s(628)](this.formatSeparator);
    if (n[s(692)] > 1 && n[0][s(311)]("(") > 1 && n[0][s(311)](")") < 0 && n[s(1341)]((c) => c.indexOf(")") > -1)) {
      const c = n[s(2503)]((u) => u[s(311)](")") > -1);
      n[0] = [n[0], ...n[s(2605)](1, c)].join(this[s(684)]);
    }
    return n.reduce((c, u) => {
      var b;
      const d = s, { formatName: f, formatOptions: l } = ki(u);
      if (this[d(823)][f]) {
        let h = c;
        try {
          const m = ((b = e == null ? void 0 : e[d(2074)]) == null ? void 0 : b[e.interpolationkey]) || {}, v = m[d(580)] || m[d(524)] || e[d(580)] || e.lng || r;
          h = this[d(823)][f](c, v, { ...l, ...e, ...m });
        } catch (m) {
          this[d(1610)][d(343)](m);
        }
        return h;
      } else this[d(1610)][d(343)](d(694) + f);
      return c;
    }, x);
  }
}
const Ei = (o, x) => {
  const t = a;
  o[t(1028)][x] !== void 0 && (delete o.pending[x], o[t(742)]--);
};
class Ri extends Ax {
  constructor(x, t, r, e = {}) {
    var n, i;
    const s = a;
    super(), this[s(1259)] = x, this[s(2585)] = t, this.services = r, this[s(2469)] = r[s(2469)], this[s(1005)] = e, this[s(1610)] = fe[s(665)](s(2296)), this.waitingReads = [], this[s(932)] = e[s(932)] || 10, this[s(410)] = 0, this.maxRetries = e[s(220)] >= 0 ? e[s(220)] : 5, this.retryTimeout = e[s(2676)] >= 1 ? e[s(2676)] : 350, this.state = {}, this[s(1153)] = [], (i = (n = this.backend) == null ? void 0 : n[s(2636)]) == null || i.call(n, r, e[s(1259)], e);
  }
  [a(645)](x, t, r, e) {
    const s = a, n = {}, i = {}, c = {}, u = {};
    return x[s(1471)]((d) => {
      const f = s;
      let l = !0;
      t[f(1471)]((b) => {
        const h = f, m = d + "|" + b;
        !r[h(1067)] && this[h(2585)][h(1457)](d, b) ? this[h(521)][m] = 2 : this[h(521)][m] < 0 || (this.state[m] === 1 ? i[m] === void 0 && (i[m] = !0) : (this.state[m] = 1, l = !1, i[m] === void 0 && (i[m] = !0), n[m] === void 0 && (n[m] = !0), u[b] === void 0 && (u[b] = !0)));
      }), l || (c[d] = !0);
    }), (Object[s(750)](n)[s(692)] || Object[s(750)](i).length) && this.queue[s(452)]({ pending: i, pendingCount: Object[s(750)](i)[s(692)], loaded: {}, errors: [], callback: e }), { toLoad: Object[s(750)](n), pending: Object[s(750)](i), toLoadLanguages: Object[s(750)](c), toLoadNamespaces: Object[s(750)](u) };
  }
  [a(566)](x, t, r) {
    const e = a, s = x[e(628)]("|"), n = s[0], i = s[1];
    t && this.emit(e(2751), n, i, t), !t && r && this[e(2585)][e(2167)](n, i, r, void 0, void 0, { skipCopy: !0 }), this[e(521)][x] = t ? -1 : 2, t && r && (this[e(521)][x] = 0);
    const c = {};
    this[e(1153)][e(1471)]((u) => {
      const d = e;
      fi(u[d(566)], [n], i), Ei(u, x), t && u[d(1672)].push(t), u[d(742)] === 0 && !u[d(1815)] && (Object[d(750)](u.loaded)[d(1471)]((f) => {
        const l = d;
        c[f] || (c[f] = {});
        const b = u[l(566)][f];
        b[l(692)] && b[l(1471)]((h) => {
          c[f][h] === void 0 && (c[f][h] = !0);
        });
      }), u.done = !0, u[d(1672)].length ? u[d(554)](u[d(1672)]) : u[d(554)]());
    }), this[e(1066)](e(566), c), this.queue = this[e(1153)][e(2145)]((u) => !u.done);
  }
  [a(346)](x, t, r, e = 0, s = this[a(2676)], n) {
    const i = a;
    if (!x[i(692)]) return n(null, {});
    if (this[i(410)] >= this[i(932)]) {
      this[i(1658)][i(452)]({ lng: x, ns: t, fcName: r, tried: e, wait: s, callback: n });
      return;
    }
    this[i(410)]++;
    const c = (d, f) => {
      const l = i;
      if (this[l(410)]--, this[l(1658)][l(692)] > 0) {
        const b = this[l(1658)][l(252)]();
        this[l(346)](b[l(524)], b.ns, b[l(2329)], b[l(2005)], b[l(2812)], b[l(554)]);
      }
      if (d && f && e < this[l(220)]) {
        setTimeout(() => {
          const b = l;
          this[b(346)][b(1994)](this, x, t, r, e + 1, s * 2, n);
        }, s);
        return;
      }
      n(d, f);
    }, u = this[i(1259)][r][i(2488)](this[i(1259)]);
    if (u[i(692)] === 2) {
      try {
        const d = u(x, t);
        d && typeof d.then === i(1622) ? d.then((f) => c(null, f))[i(1995)](c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return u(x, t, c);
  }
  [a(711)](x, t, r = {}, e) {
    const s = a;
    if (!this.backend) return this[s(1610)][s(343)](s(2820)), e && e();
    b0(x) && (x = this[s(2469)].toResolveHierarchy(x)), b0(t) && (t = [t]);
    const n = this[s(645)](x, t, r, e);
    if (!n[s(1070)][s(692)])
      return n[s(1028)][s(692)] || e(), null;
    n.toLoad[s(1471)]((i) => {
      this[s(2880)](i);
    });
  }
  [a(2622)](x, t, r) {
    this.prepareLoading(x, t, {}, r);
  }
  [a(1067)](x, t, r) {
    this[a(711)](x, t, { reload: !0 }, r);
  }
  [a(2880)](x, t = "") {
    const r = a, e = x[r(628)]("|"), s = e[0], n = e[1];
    this[r(346)](s, n, r(346), void 0, void 0, (i, c) => {
      const u = r;
      i && this[u(1610)].warn(t + u(2314) + n + u(1606) + s + u(1881), i), !i && c && this.logger[u(2818)](t + u(673) + n + u(1606) + s, c), this.loaded(x, i, c);
    });
  }
  [a(2085)](x, t, r, e, s, n = {}, i = () => {
  }) {
    var u, d, f, l, b;
    const c = a;
    if ((d = (u = this[c(1748)]) == null ? void 0 : u[c(1781)]) != null && d[c(286)] && !((l = (f = this[c(1748)]) == null ? void 0 : f[c(1781)]) != null && l[c(286)](t))) {
      this[c(1610)][c(343)](c(370) + r + '" as the namespace "' + t + c(1526), c(2363));
      return;
    }
    if (!(r == null || r === "")) {
      if ((b = this[c(1259)]) != null && b[c(665)]) {
        const h = { ...n, isUpdate: s }, m = this[c(1259)][c(665)].bind(this.backend);
        if (m.length < 6) try {
          let v;
          m[c(692)] === 5 ? v = m(x, t, r, e, h) : v = m(x, t, r, e), v && typeof v[c(2403)] === c(1622) ? v.then((k) => i(null, k))[c(1995)](i) : i(null, v);
        } catch (v) {
          i(v);
        }
        else m(x, t, r, e, i, h);
      }
      !x || !x[0] || this[c(2585)][c(1088)](x[0], t, r, e);
    }
  }
}
const Ya = () => ({ debug: !1, initAsync: !0, ns: [a(1196)], defaultNS: ["translation"], fallbackLng: [a(1527)], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: a(292), saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (o) => {
  const x = a;
  let t = {};
  if (typeof o[1] === x(544) && (t = o[1]), b0(o[1]) && (t[x(244)] = o[1]), b0(o[2]) && (t[x(698)] = o[2]), typeof o[2] === x(544) || typeof o[3] === x(544)) {
    const r = o[3] || o[2];
    Object[x(750)](r).forEach((e) => {
      t[e] = r[e];
    });
  }
  return t;
}, interpolation: { escapeValue: !0, format: (o) => o, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: a(1941), nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 }, cacheInBuiltFormats: !0 }), er = (o) => {
  var t, r;
  const x = a;
  return b0(o.ns) && (o.ns = [o.ns]), b0(o[x(1524)]) && (o.fallbackLng = [o[x(1524)]]), b0(o[x(1530)]) && (o[x(1530)] = [o[x(1530)]]), ((r = (t = o[x(1775)]) == null ? void 0 : t[x(311)]) == null ? void 0 : r.call(t, x(2639))) < 0 && (o[x(1775)] = o[x(1775)][x(2044)]([x(2639)])), typeof o.initImmediate === x(1146) && (o[x(1730)] = o[x(1308)]), o;
}, hx = () => {
}, Ci = (o) => {
  const x = a;
  Object[x(2020)](Object.getPrototypeOf(o)).forEach((r) => {
    const e = x;
    typeof o[r] === e(1622) && (o[r] = o[r][e(2488)](o));
  });
};
class xx extends Ax {
  constructor(x = {}, t) {
    const r = a;
    if (super(), this[r(1005)] = er(x), this[r(1748)] = {}, this.logger = fe, this[r(681)] = { external: [] }, Ci(this), t && !this[r(182)] && !x[r(2345)]) {
      if (!this[r(1005)][r(1730)]) return this[r(2636)](x, t), this;
      setTimeout(() => {
        this[r(2636)](x, t);
      }, 0);
    }
  }
  [a(2636)](x = {}, t) {
    const r = a;
    this[r(670)] = !0, typeof x == "function" && (t = x, x = {}), x[r(2412)] == null && x.ns && (b0(x.ns) ? x[r(2412)] = x.ns : x.ns[r(311)](r(1196)) < 0 && (x[r(2412)] = x.ns[0]));
    const e = Ya();
    this[r(1005)] = { ...e, ...this[r(1005)], ...er(x) }, this[r(1005)].interpolation = { ...e[r(2660)], ...this[r(1005)].interpolation }, x[r(774)] !== void 0 && (this[r(1005)][r(1329)] = x[r(774)]), x[r(1559)] !== void 0 && (this[r(1005)][r(1073)] = x[r(1559)]);
    const s = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this[r(1005)].isClone) {
      this[r(681)][r(1610)] ? fe[r(2636)](s(this[r(681)][r(1610)]), this[r(1005)]) : fe[r(2636)](null, this[r(1005)]);
      let d;
      this.modules[r(839)] ? d = this[r(681)][r(839)] : d = Ii;
      const f = new Wa(this[r(1005)]);
      this[r(2585)] = new Ba(this.options[r(2498)], this[r(1005)]);
      const l = this[r(1748)];
      l[r(1610)] = fe, l[r(2709)] = this[r(2585)], l[r(2469)] = f, l[r(322)] = new Si(f, { prepend: this.options[r(2139)], simplifyPluralSuffix: this[r(1005)][r(1007)] }), this[r(1005)][r(2660)][r(2197)] && this[r(1005)].interpolation[r(2197)] !== e[r(2660)][r(2197)] && this[r(1610)][r(1717)]("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), d && (!this.options[r(2660)][r(2197)] || this[r(1005)][r(2660)].format === e.interpolation[r(2197)]) && (l[r(839)] = s(d), l[r(839)].init && l[r(839)][r(2636)](l, this[r(1005)]), this[r(1005)][r(2660)][r(2197)] = l[r(839)][r(2197)][r(2488)](l[r(839)])), l[r(951)] = new Qa(this[r(1005)]), l[r(1781)] = { hasLoadedNamespace: this.hasLoadedNamespace[r(2488)](this) }, l.backendConnector = new Ri(s(this[r(681)][r(1259)]), l[r(2709)], l, this[r(1005)]), l[r(2296)].on("*", (h, ...m) => {
        this[r(1066)](h, ...m);
      }), this[r(681)][r(1743)] && (l[r(1743)] = s(this[r(681)].languageDetector), l[r(1743)][r(2636)] && l[r(1743)][r(2636)](l, this[r(1005)][r(1925)], this.options)), this[r(681)][r(1752)] && (l[r(1752)] = s(this[r(681)].i18nFormat), l[r(1752)][r(2636)] && l[r(1752)][r(2636)](this)), this.translator = new Fx(this.services, this.options), this[r(853)].on("*", (h, ...m) => {
        this[r(1066)](h, ...m);
      }), this[r(681)][r(1143)][r(1471)]((h) => {
        const m = r;
        h[m(2636)] && h[m(2636)](this);
      });
    }
    if (this.format = this[r(1005)][r(2660)].format, t || (t = hx), this[r(1005)][r(1524)] && !this[r(1748)][r(1743)] && !this[r(1005)][r(524)]) {
      const d = this[r(1748)].languageUtils[r(1391)](this.options.fallbackLng);
      d[r(692)] > 0 && d[0] !== r(1527) && (this[r(1005)][r(524)] = d[0]);
    }
    !this.services[r(1743)] && !this[r(1005)][r(524)] && this[r(1610)][r(343)](r(992)), [r(1424), r(1457), r(1804), "getDataByLanguage"][r(1471)]((d) => {
      this[d] = (...f) => this.store[d](...f);
    }), [r(1088), r(1878), r(2167), r(2332)][r(1471)]((d) => {
      this[d] = (...f) => (this[K(2585)][d](...f), this);
    });
    const c = Je(), u = () => {
      const d = r, f = (l, b) => {
        const h = K;
        this[h(670)] = !1, this[h(182)] && !this.initializedStoreOnce && this[h(1610)].warn(h(2825)), this[h(182)] = !0, this[h(1005)][h(2345)] || this[h(1610)].log(h(728), this[h(1005)]), this[h(1066)](h(728), this[h(1005)]), c[h(1571)](b), t(l, b);
      };
      if (this[d(1041)] && !this[d(182)]) return f(null, this.t.bind(this));
      this[d(1918)](this[d(1005)][d(524)], f);
    };
    return this[r(1005)].resources || !this[r(1005)][r(1730)] ? u() : setTimeout(u, 0), c;
  }
  [a(2535)](x, t = hx) {
    var n, i;
    const r = a;
    let e = t;
    const s = b0(x) ? x : this[r(2756)];
    if (typeof x === r(1622) && (e = x), !this[r(1005)][r(2498)] || this[r(1005)].partialBundledLanguages) {
      if ((s == null ? void 0 : s[r(556)]()) === r(2639) && (!this[r(1005)][r(2324)] || this[r(1005)].preload.length === 0)) return e();
      const c = [], u = (d) => {
        const f = r;
        if (!d || d === f(2639)) return;
        this[f(1748)][f(2469)][f(1808)](d)[f(1471)]((b) => {
          const h = f;
          b !== "cimode" && c[h(311)](b) < 0 && c.push(b);
        });
      };
      s ? u(s) : this[r(1748)].languageUtils[r(1391)](this[r(1005)][r(1524)]).forEach((f) => u(f)), (i = (n = this[r(1005)].preload) == null ? void 0 : n.forEach) == null || i.call(n, (d) => u(d)), this[r(1748)][r(2296)][r(2622)](c, this.options.ns, (d) => {
        const f = r;
        !d && !this[f(427)] && this[f(2756)] && this.setResolvedLanguage(this[f(2756)]), e(d);
      });
    } else e(null);
  }
  reloadResources(x, t, r) {
    const e = a, s = Je();
    return typeof x == "function" && (r = x, x = void 0), typeof t === e(1622) && (r = t, t = void 0), x || (x = this[e(1041)]), t || (t = this[e(1005)].ns), r || (r = hx), this[e(1748)][e(2296)][e(1067)](x, t, (n) => {
      s[e(1571)](), r(n);
    }), s;
  }
  [a(733)](x) {
    const t = a;
    if (!x) throw new Error(t(2277));
    if (!x[t(612)]) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return x.type === t(1259) && (this[t(681)].backend = x), (x[t(612)] === t(1610) || x[t(2818)] && x[t(343)] && x[t(948)]) && (this[t(681)][t(1610)] = x), x[t(612)] === t(1743) && (this[t(681)][t(1743)] = x), x[t(612)] === t(1752) && (this[t(681)][t(1752)] = x), x[t(612)] === t(855) && Bs[t(2372)](x), x.type === t(839) && (this[t(681)][t(839)] = x), x[t(612)] === "3rdParty" && this[t(681)][t(1143)][t(452)](x), this;
  }
  setResolvedLanguage(x) {
    const t = a;
    if (!(!x || !this[t(1041)]) && !(["cimode", t(1527)].indexOf(x) > -1)) {
      for (let r = 0; r < this[t(1041)][t(692)]; r++) {
        const e = this[t(1041)][r];
        if (!([t(2639), t(1527)][t(311)](e) > -1) && this[t(2585)][t(1870)](e)) {
          this[t(427)] = e;
          break;
        }
      }
      !this[t(427)] && this[t(1041)][t(311)](x) < 0 && this.store[t(1870)](x) && (this[t(427)] = x, this.languages[t(1475)](x));
    }
  }
  [a(1918)](x, t) {
    const r = a;
    this[r(1915)] = x;
    const e = Je();
    this[r(1066)](r(1821), x);
    const s = (c) => {
      const u = r;
      this.language = c, this[u(1041)] = this.services[u(2469)].toResolveHierarchy(c), this[u(427)] = void 0, this.setResolvedLanguage(c);
    }, n = (c, u) => {
      const d = r;
      u ? this[d(1915)] === x && (s(u), this[d(853)][d(1918)](u), this.isLanguageChangingTo = void 0, this[d(1066)]("languageChanged", u), this[d(1610)][d(2818)](d(1560), u)) : this[d(1915)] = void 0, e[d(1571)]((...f) => this.t(...f)), t && t(c, (...f) => this.t(...f));
    }, i = (c) => {
      var l, b;
      const u = r;
      !x && !c && this.services[u(1743)] && (c = []);
      const d = b0(c) ? c : c && c[0], f = this.store[u(1870)](d) ? d : this.services.languageUtils[u(1269)](b0(c) ? [c] : c);
      f && (!this.language && s(f), this[u(853)][u(2756)] || this[u(853)].changeLanguage(f), (b = (l = this[u(1748)][u(1743)]) == null ? void 0 : l.cacheUserLanguage) == null || b.call(l, f)), this[u(2535)](f, (h) => {
        n(h, f);
      });
    };
    return !x && this[r(1748)].languageDetector && !this[r(1748)][r(1743)][r(1973)] ? i(this.services.languageDetector[r(850)]()) : !x && this[r(1748)][r(1743)] && this[r(1748)][r(1743)][r(1973)] ? this[r(1748)][r(1743)].detect[r(692)] === 0 ? this[r(1748)][r(1743)][r(850)]()[r(2403)](i) : this[r(1748)].languageDetector[r(850)](i) : i(x), e;
  }
  [a(1504)](x, t, r) {
    const e = a, s = (n, i, ...c) => {
      const u = K;
      let d;
      typeof i !== u(544) ? d = this[u(1005)][u(1517)]([n, i][u(2044)](c)) : d = { ...i }, d[u(524)] = d[u(524)] || s[u(524)], d[u(308)] = d[u(308)] || s[u(308)], d.ns = d.ns || s.ns, d[u(2843)] !== "" && (d[u(2843)] = d[u(2843)] || r || s[u(2843)]);
      const f = this[u(1005)].keySeparator || ".";
      let l;
      return d[u(2843)] && Array[u(1783)](n) ? l = n.map((b) => {
        const h = u;
        return typeof b == "function" && (b = Qt(b, { ...this[h(1005)], ...i })), "" + d[h(2843)] + f + b;
      }) : (typeof n == "function" && (n = Qt(n, { ...this[u(1005)], ...i })), l = d[u(2843)] ? "" + d[u(2843)] + f + n : n), this.t(l, d);
    };
    return b0(x) ? s[e(524)] = x : s[e(308)] = x, s.ns = t, s[e(2843)] = r, s;
  }
  t(...x) {
    var r;
    return (r = this[a(853)]) == null ? void 0 : r.translate(...x);
  }
  exists(...x) {
    var r;
    return (r = this[a(853)]) == null ? void 0 : r.exists(...x);
  }
  [a(2833)](x) {
    const t = a;
    this[t(1005)][t(2412)] = x;
  }
  [a(286)](x, t = {}) {
    const r = a;
    if (!this[r(182)]) return this.logger[r(343)](r(2490), this.languages), !1;
    if (!this[r(1041)] || !this[r(1041)][r(692)]) return this[r(1610)][r(343)]("hasLoadedNamespace: i18n.languages were undefined or empty", this[r(1041)]), !1;
    const e = t[r(524)] || this.resolvedLanguage || this[r(1041)][0], s = this[r(1005)] ? this[r(1005)][r(1524)] : !1, n = this[r(1041)][this[r(1041)][r(692)] - 1];
    if (e.toLowerCase() === r(2639)) return !0;
    const i = (c, u) => {
      const d = r, f = this[d(1748)][d(2296)][d(521)][c + "|" + u];
      return f === -1 || f === 0 || f === 2;
    };
    if (t.precheck) {
      const c = t[r(2606)](this, i);
      if (c !== void 0) return c;
    }
    return !!(this.hasResourceBundle(e, x) || !this.services[r(2296)][r(1259)] || this[r(1005)][r(2498)] && !this[r(1005)].partialBundledLanguages || i(e, x) && (!s || i(n, x)));
  }
  [a(1961)](x, t) {
    const r = a, e = Je();
    return this[r(1005)].ns ? (b0(x) && (x = [x]), x.forEach((s) => {
      const n = r;
      this[n(1005)].ns[n(311)](s) < 0 && this[n(1005)].ns[n(452)](s);
    }), this[r(2535)]((s) => {
      e[r(1571)](), t && t(s);
    }), e) : (t && t(), Promise[r(1571)]());
  }
  [a(1442)](x, t) {
    const r = a, e = Je();
    b0(x) && (x = [x]);
    const s = this[r(1005)][r(2324)] || [], n = x.filter((i) => s[r(311)](i) < 0 && this[r(1748)].languageUtils[r(863)](i));
    return n[r(692)] ? (this.options[r(2324)] = s[r(2044)](n), this.loadResources((i) => {
      e[r(1571)](), t && t(i);
    }), e) : (t && t(), Promise.resolve());
  }
  [a(1482)](x) {
    var s, n;
    const t = a;
    if (x || (x = this[t(427)] || (((s = this[t(1041)]) == null ? void 0 : s[t(692)]) > 0 ? this[t(1041)][0] : this[t(2756)])), !x) return "rtl";
    try {
      const i = new Intl[t(2103)](x);
      if (i && i[t(1894)]) {
        const c = i[t(1894)]();
        if (c && c[t(834)]) return c[t(834)];
      }
    } catch {
    }
    const r = ["ar", t(513), "sqr", t(746), t(1078), t(2553), "yud", t(1112), t(2369), "abv", t(2282), t(2866), t(186), t(1753), t(2680), t(1353), t(857), t(1148), t(2216), t(1275), t(1079), t(2791), t(176), t(1585), t(2080), t(686), "ary", t(1627), t(2390), t(1907), t(735), "ayl", t(659), t(265), "bbz", t(1016), "he", "iw", "ps", "pbt", t(1263), t(1003), "prp", t(2386), "ug", "ur", t(1115), t(2048), "yih", "ji", "yi", t(674), t(1289), "xmn", "fa", t(2799), "peo", t(1381), t(1766), "dv", t(348), t(1508)], e = ((n = this[t(1748)]) == null ? void 0 : n[t(2469)]) || new Wa(Ya());
    return x[t(556)]()[t(311)](t(642)) > 1 ? "ltr" : r.indexOf(e[t(1786)](x)) > -1 || x.toLowerCase()[t(311)]("-arab") > 1 ? t(2468) : t(251);
  }
  static [a(1984)](x = {}, t) {
    const r = a, e = new xx(x, t);
    return e[r(1984)] = xx[r(1984)], e;
  }
  [a(1038)](x = {}, t = hx) {
    const r = a, e = x[r(1307)];
    e && delete x[r(1307)];
    const s = { ...this[r(1005)], ...x, isClone: !0 }, n = new xx(s);
    if ((x.debug !== void 0 || x[r(338)] !== void 0) && (n.logger = n[r(1610)][r(2327)](x)), [r(2585), r(1748), "language"][r(1471)]((c) => {
      n[c] = this[c];
    }), n[r(1748)] = { ...this.services }, n.services[r(1781)] = { hasLoadedNamespace: n.hasLoadedNamespace[r(2488)](n) }, e) {
      const c = Object[r(750)](this.store[r(909)])[r(172)]((u, d) => {
        const f = r;
        return u[d] = { ...this[f(2585)][f(909)][d] }, u[d] = Object.keys(u[d]).reduce((l, b) => (l[b] = { ...u[d][b] }, l), u[d]), u;
      }, {});
      n[r(2585)] = new Ba(c, s), n[r(1748)][r(2709)] = n[r(2585)];
    }
    return x[r(2660)] && (n[r(1748)][r(951)] = new Qa(s)), n[r(853)] = new Fx(n[r(1748)], s), n[r(853)].on("*", (c, ...u) => {
      n.emit(c, ...u);
    }), n[r(2636)](s, t), n[r(853)][r(1005)] = s, n[r(853)].backendConnector[r(1748)][r(1781)] = { hasLoadedNamespace: n[r(286)].bind(n) }, n;
  }
  [a(1538)]() {
    const x = a;
    return { options: this.options, store: this.store, language: this.language, languages: this[x(1041)], resolvedLanguage: this[x(427)] };
  }
}
const X0 = xx[a(1984)]();
X0[a(1984)], X0.dir, X0[a(2636)], X0[a(2535)], X0[a(748)], X0[a(733)], X0[a(1918)], X0[a(1504)], X0.t, X0[a(280)], X0[a(2833)], X0[a(286)], X0.loadNamespaces, X0[a(1442)];
function Fi() {
  const o = a;
  if (typeof navigator !== o(420) && navigator[o(2756)]) return navigator[o(2756)] === o(2367) ? o(2367) : "en-US";
  try {
    const x = typeof require < "u" ? require : void 0;
    if (x)
      return x("uxp")[o(957)][o(736)][o(1955)]("zh") ? "zh-CN" : o(1282);
  } catch {
  }
  return o(1282);
}
function Nx() {
  const o = ["skips", "getNodeIds", "resolveComponents", "Failed to open image file: {{error}}", "isTop", "bind", "Task cancelled", "hasLoadedNamespace: i18next was not initialized", " , message: 'should match exactly one schema in oneOf' ", "]; ", "Invalid JSON-pointer: ", "{5}", "partial", "var division", " levels up, current level is ", "resources", "setOutgoingRequestInterceptor", "isHeartbeatEnabled", "Crop by selection", "resource_link", "findIndex", "Cannot reboot because ComfyManager is missing", "ZodSet", "saveWorkflow", "Upload failed: ", "请输入质量百分比", "localeCompare", "else", "   ", "Your powerful node-based workflow engine", " && ( ", " , message: 'should have ", "运行中...", "skipCopy", "Current Tasks:", "req_", "exports", "toUpperCase", "Retry", "Select Workflow", "ComfyUI loading...", "ignore", "getRunningRequestsCount", `((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)`, "inline", "排队等待", "revoke", "Error compiling schema, function code:", " === '' ", "Select layer", "run API 调用失败 - HTTP 错误，状态: {{status}}", " = true; break; }", "loadResources", "maximum", " , params: { allowedValues: schema", "nestingPrefix", "item", " , message: 'can\\'t resolve reference ", "PS shortcuts may be blocked by plugin...", "reset=false but needsReset: ", "float", "broadcastCurrentState", "findPath", "#9933CC", "dataLevel", "#CC6633", "warning", "点击发送（Shift-点击新建文档）", " not found on node ", "Click to use current selection", "yhd", " (async", "schema", "notificationHandlers", "执行成功", "revocable", "getData", "postMessage", "ConnectionClosed", "transport", "var pattern", "domainHost", "user", " else throw new ValidationError(vErrors); ", "Syncing assets", "#CC3300", "2.1.0", "assertIs", "&filename=", "移除槽位", "parsedType", "Uncaught error in notification handler: ", "maxItems", "以画布边界获取画布", " if (Array.isArray(", "step", ", (dataPath || '')", "typeof ", "SDPPP 2.0 no longer needs this node", "schemaHasRulesExcept", "获取选区失败", "OpenAI/Google 格式API", "store", "sendPromptListChanged", "failed parsing options string in nesting for key ", "mode", ").length ", "examples", "hasError", "Action ", "formatters", "自动同步: 关闭", "normalizeId", "next", "ordinal", "minute", " if (rootData === undefined) rootData = data; ", "coerceTypes", "Refresh workflow list", ") { if (vErrors === null) vErrors = ", "保存并立即执行", "start", "splice", "precheck", "快捷键选图功能仅在插件窗口聚焦时可用", "isOptional", "$async", "baseId", ")) ", "Save all", "我的模板", "skipKeywords", "/required", "选区遮罩", "未找到文档 {0}", "#9900CC", "path", "newlayer_canvas", "validate", "load", "_requestHandlers", "errSchemaPath", "stringify", "ZodBoolean", "Drag images here and release to upload", "urn", "Please select the image to get", "fail", "hour", " = false;  ", "unescapeFragment", "return", "获取图片", "init", " } if (errors === ", "url", "cimode", " = true; if ( ", "defaultError", "221469drOvVs", "Manage reusable prompt snippets for Comfy Simple workflows.", "hasOutgoingNotificationInterceptor", "returnDetails", "createWithPreprocess", "onprogress", ", limit: ", " , params: { property: '", " == '", "Input not instance of ", "cleanup", "获取图层信息", "生成失败", "add", "exception_message", "Invalid input", "Add slot", "additionalProperties", "interpolation", " % 1)", "executed", " else if (", "Failed to send response: ", "uri-reference", "color: inherit", "cycles", "#CCCC33", "Unauthorized (401)", "equal", "result", "#CC00FF", "#CC3399", "正在等待图片上传...", "uniqueItems", "retryTimeout", "requestsHandled", "interpolate", " } else {  errors = ", "acy", "RunningHub - {{webappId}}", "7ozVkBj", "subscribe", "comfy-uxp", "Cannot access property/index ", "setupTransportHandlers", "getClientVersion", "Enum", "deepPartial", "No connection available for node ", "(队列:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", "_oninitialize", "one", "Error validating elicitation response: ", "未实现 (501)", "removed", "$id", "notifications/initialized", "选择工作流", "nss", "通道连接中...", "combo", "assertCanSetRequestHandler", "true", "not", '"; } ', "cleanCode", "tools/list", "resourceStore", "detectCycles", "Invalid attempt to destructure non-iterable instance", "isNaN", "=0; ", "Clear selection", "size", "getState", " !== ", " -> ", "initializeResponseQueue", "ZodEffects", "No active layer available", "valueOf", "currentNodeId", "missingKeyHandler", " var isAdditional", " === undefined ", "PCT_ENCODED", "/then", "isNANOID", "var missing", "请选择要发送图像的位置", "ComfyUI - {{workflowName}}", "当前任务数:", "oneOf", "NOT_FRAGMENT", "flags", "_refinement", "__connection_established", "_errorDataPathProperty", "options.loadSchema should be a function", "未知错误", "getProtocol", "rest", " var errs_", " != 'string') || ", "strictKeywords", "wss", "missingRef", "Node not found", "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", "failedLoading", "setupGraphStoreSync", "]; return false; ", "2025-03-26", "exclusive", "language", "模板已删除。", "broadcastManager", ") && (missing", "正在上传...", "errorHandlers", "cuid2", "widgetable", "regex", "Failed to update the {{part}} prompt: no matching widget binding.", "namespaces", "' , dataPath: (dataPath || '') + ", "Mask resource is missing", "gte", "mailto", "invalid_union", "RH Coins:", "Intersection results could not be merged", "Negative Crop", "#3399CC", "anyOf", "] = ", "MCP error ", ".validate", " Math.abs(Math.round(division", "from", "port", "IPV6ADDRESS", "registerCapabilities", " for (var ", "failing", " , params: {} ", "刷新图片中", " = refVal[", "setupGeneralBroadcastHandler", "apc", "#00CCCC", "color", ") == -1 ", " !== undefined) {  ", "暂无图片", "]; if (", "'].definition; var ", "jpr", "accessing an object - but returnObjects options is not enabled!", "prevValid", "_parseSync", "设为当前选区", "notificationQueue", "out", "race", "缺少主图资源", "; }   var err =   ", "Select boundary", "Close", "ESCAPE", "wait", "_refs", "definition", "Main Image", '[\\"\\\\]', "registerDirectRequestHandlerGeneric", "log", "keywords", "No backend was added via i18next.use. Will not load resources.", "选区边界", "definitions", "right", "); if (", "init: i18next is already initialized. You should call init just once!", "当前图层除外", "useDefault", ".replace(/~/g, '~0').replace(/\\//g, '~1')", "store:update:", "ifClause", ", deps: '", "输入图像", "setDefaultNamespace", "Status check aborted", " , params: { missingProperty: '", ") {   var err =   ", "ZodDiscriminatedUnion", "_meta", "invalid_date", "exception", "isInt", "registerProxyForwardHandler", "keyPrefix", "isInteger", "Reverse", "namespace", "addIssue", "received", "ZodRecord", "Using local file", "_cache", "save", "#FF33CC", "executing", "Processing {{processed}}/{{total}}", "Batch Count", "Output to", "处理进度 {{processed}}/{{total}}", "returnEmptyString", "effect", "status", "' } ", "X10", "logger must implement log, warn and error methods", "reset", "acq", "选择素材来源", "_key", "RH币:", "getClientCapabilities", "clientInfo", "Upload failed, please try again", "Failed to send an error response: ", "INTERCEPTOR_ERROR", "请登陆后使用插件", "getNodes API 调用失败 - HTTP 错误，状态: {{status}}", "minLength", "heartbeatTimeout", "Already connected to node ", "loadOne", " ); if (isAdditional", "点击恢复默认边界", ") && ", "alwaysSet", "Aborted", "errorPath", "Invalid", "reduce", "No videos yet", "]] === undefined ", "too_big", "apd", "'then'", " === 0 || ", "sourceCode", "$el", "postProcess", "isInitialized", "parseAsync", "以主图边界获取画布", ") { ", "acw", "connected", "setPrototypeOf", "colors", "describe", "#33CC00", "Outgoing notification interceptor failed: ", "millisecond", "请输入您的RunningHub API Key", "Delete current", "nodeIndexes", "maxProperties", "暂无可用工作流。", "currency", "应用ID:", "Failed to check workflow state changes:", "自动取图中…", "pick", "cacheKey", "addLookupKeys", "responseSchema", "Defaults using", "missingSchema", "[\\.]", "selection", "Connect", "++) { if (", "sendLoggingMessage", "#CC9933", '" is used in schema at path "', "_cachedPath", "loadGraphData", "任务未完成，当前状态: {{status}}", `Get image &
Limit image boundary`, "maxRetries", "elicitation/create", "Failed to open file as document: {{path}}", "unknownFormats", "{3}", "message", "allErrors", "Not a ZodError: ", "Unknown error ({{code}})", "addSchema", "implementAction", "Required", "Selection mask", ".errors", "widgets", "任务执行失败", "=startErrs", "编辑模板", "Workflow not found", "getPathExpr", "++) { vErrors[", "maxValue", "translate", "extend", "defaultValue", "[^\\%]", "minProperties", "unknown", "Unicode", "AUTO", "尚未配置 ComfyUI 连接，请先设置地址。", "ltr", "shift", "local", "missing", "网关超时 (504)", "Waiting for image upload...", "innerType", "选择模型", "_onerror", "curr", "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ", "day", "   var err =   ", "unwrap", "ayp", "nonpositive", "at least", "isTransportReady", "toUnicode", " var schema", "long", "Send all", "Sending all images...", " is present' ", " break; ", "Get mask from Current Layer", "listenMessageCallback", "streamRequest", ".hasOwnProperty(", "exists", "nan", "returnedObjectHandler", "refs", ".additionalProperties", " == 'number' ? ( (", "hasLoadedNamespace", "[object RegExp]", "schema is invalid: ", "time", " = '' + ", "properties ", "fallback", " properties' ", ") ? ", `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`, "###", "mountedTransports", "Action {{0}} 未找到", "assertNotificationCapability", "PS遮罩", "])) { ", " == 'function' ? ", "ZodBigInt", "smaller than or equal to", "; if (!", "cache", "isUUID", "lngs", " delete ", "required", "indexOf", "languageOnly", "Creating task...", "Import as New Document", "requestInitialStateForNode", '$ref: keywords ignored in schema at path "', "Create guide frame", "/properties", "strictDefaults", "Get image from Current Layer", "sdppp 运行 Photoshop Action", "pluralResolver", "#9900FF", "prompts/get", "; }", "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", "\\:\\:", "should NOT have additional properties", "当前选项：图层", "Invalid proxy forwarding: current node ", "Model with affordable price, abundant community applications", "SCHEMES", "(\\.\\d+)?", " &&   Object.prototype.hasOwnProperty.call(", "Document {0} not found", "lowerCaseLng", "prev", "prefix", "isValidLookup", "New Document", "正在使用本地文件", "escape", "warn", "No handler for streamRequestor: ", "__proxy_forward", "read", " , params: { type: '", "sam", " is already defined", " , params: { multipleOf: ", "addIssues", "Auto fetching…", "invalid_enum_value", "unrecognized_keys", "选区遮罩为空", "actionHandlers", "progress", "#3300FF", "uxp", "/additionalItems", "changeTracker", "outputs API 调用失败 - {{reason}}", "usedKey", "PS图片", "abortRequest", " , ", "canvas", "Converting circular structure to JSON", "emergency", 'did not save key "', "[\\:\\@\\/\\?]", "~standard", "toNode", "Timeout", "defaultMeta", "sendToolListChanged", "success", "throwIfAborted", " , validate.schema", "isURL", "addCached", "无效操作: {{action}}", "加载中...", "origin", "pipe", "Exclude current layer", "Forbidden (403)", " = await ", "; else vErrors = null; }", "=== Options ===", "process", "#3366FF", "DEBUG", "Jump to last", "Server does not support logging (required for ", "resolvedOptions", "prepend", "ajv", "$data", "app", "isEmpty", "'else'", "all", "[0-5]\\d", "send", "反向裁剪(Inpaint)", "跳转到最后一个", "removeAdditional", "Remote", "readingCalls", "Source", "promptIds", " = errors; ", "refinement", "Canvas boundary", "initializeConsumer", "api/view?type=", "How to get APIKey and API Secret", "sdppp_workflow_alias", "undefined", "./sdppp-custom.js", "prompts", "; else vErrors = null; } ", "; else if (", "不支持非文本图层: {{0}}", "暂无预览内容", "resolvedLanguage", "setProperty", "#0033FF", "match", "uuid", "); for (var ", "_cleanupTimeout", "#FF3333", "ComfyUI 未就绪", " }  ", "setRequestHandler", "registerStreamRequestorHandler", "ZodString", "propertyNames", "当前选项：文件", " not found for node ", "heartbeatInterval", ".validate;", "Prompt content", "addRule", "encountered", "executeHandlerAsync", "?\\]?$", "fullFilename", "extendTranslation", "push", " = true; } else { ", "_metaOpts", "missingRefs", "handleDirectProxyForward", "initializeProducer", " == ", ")) { ", "本节点默认继承:", "上传失败，请重试", "useCustomRule", "run API failed - {{reason}}", "设为当前图层", "Save and run immediately", " === undefined || ", "position", "Server does not support notifying of prompt list changes (required for ", "valueSchema", "#FF0099", "请求超时 (408)", "Refresh", "fromNode", "mask", "每批图像数", ", '", "无效的边界类型: {{type}}", "saveMissingTo", " throw new ValidationError(vErrors); ", "邮箱: {{email}}", "round", "parentData", "Resize document for preview", "customRules", "NOT_SCHEME", "Unknown error", "ASCII", " / ", "resources/read", '"object"', "defaultVariables", "Smart Object Layer", "Server does not support resources (required for ", " } else {  for (var ", " if (true) { ", "originalError", "Create layer failed", "over", "/additionalProperties", "Press Enter to open app: {{appName}}", "isNotification", "originalQueuePrompt", "Auto send enabled", "Fetch current layer with canvas boundary", "#CC33CC", "json", "Primary boundary", "]) ", " ucs2length(", "JWT", " == 'string' || ", "不裁剪", "shu", "OpenAI/Google format API", "<errors; ", ' !== "object")', "Confirm", "outgoingNotificationInterceptors", "发送到PS", "https", "state", "#3399FF", "Positive Prompt", "lng", "pathname", "curlayer_curlayer", ") ) ", " instanceof RegExp) && ", "正向裁剪(Outpaint)", "Layer", "uploadComfyImageFromUXP", "aborted", "Current selection: Layer {{layerName}}", "ComfyUI server reconnecting", "任务创建已中止", "discriminator", "exec", "transform", "#FF00FF", "Node definition not found for current node ", "停止自动运行", "connectedNodes", "stateUpdate", "object", "queuePrompt", "minimum", " else {   ", "channel", "创建预览文档", "Unexpected dot segment condition", "getRule", "completed", "刷新工作流列表", "callback", "onmessage", "toLowerCase", "String must contain ", "maxLength", "自动填入画布开启", "Set as Current Layer", " not found in graph definition", "usedLng", "request", "reconnected", "mergeObjectSync", "loaded", "Merge group failed", " at one or more positions greater than or equal to ", " if (typeof itemIndices[item] == 'number') { ", "未授权 (401)", "debouncedNotificationMethods", "schema $id is different from id", "outputs API failed - HTTP error! status: {{status}}", "rejectImage", "replace", "interceptorTimeout", "图层 {{0}} 不是一个组", "greater than or equal to ", "realTransport", "locale", "schema id ignored", "  errors = ", "refVal", " }; return validate; ", "jsonrpc", " var i = ", "Fetch canvas with canvas boundary", "custom keyword definition is invalid: ", "  var err =   ", "schemaErrorMap", "本地图片包", "openWorkflow: ", "isDatetime", "  } ", ") { var op", "resolveRef", "executeOutgoingRequestInterceptor", " = errors , ", "constructor", "请选择AI服务", "点击移除本地文件", "Local file", "新增模板", "protocol", "\\$&", "Failed to update the {{part}} prompt. Please try again.", `" won't get resolved as namespace "`, "[j])) { ", "heartbeatTimeoutTimer", "Client does not support elicitation (required for ", "%[EFef]", "type", "seconds", "valid", " : ", "is a required property", "_requestMessageId", "implementInternalAction", "del", "_pendingDebouncedNotifications", "mountTo", "新图层", "appendNamespaceToMissingKey", "Get pixel of {{0}} failed", "description", "Failed to get task status", "__esModule", "split", "(typeof ", "ZodPipeline", "Gateway timeout (504)", ` , message: 'should pass "`, "setupNodeBindings", "No first related layer in {{0}}", "floor", "Clear", "connecting", "extra", "processCode", "extractFromKey", "Unable to reboot ComfyUI", "-latn", "NumberFormat", "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "queueLoad", "hijacked", "Use current layer", "DateTimeFormat", "suffix", "当前没有活动图层", " validate.errors = [", "regexp", "isDate", "无法将文件作为文档打开: {{path}}", " == 'boolean' || ", "onerror", "2[0-4]", "setNodeTitle", "ayn", "fromCharCode", "appendNamespaceToCIMode", " === null) ", "; if (", "newlayer_selection", "create", "Notification interceptor failed for ", "[i], ", "Date must be ", " , params: { comparison: ", "isInitializing", "' && !(typeof ", " , params: { format:  ", "loaded namespace ", "hbo", "ListFormat", "removeItem", "Error", "setInterval", "customRule", "Array.isArray(", "modules", "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.", "Get mask from Selection", "formatSeparator", "version", "ars", "payload", "InternalError", "Set text to layer", "_capabilities", "Running...", "length", "Download", "there was no format function for ", "forwarded", "'[\\'' + ", "unsetOutgoingNotificationInterceptor", "tDescription", "mins", "Delete", "getAccountStatus API 调用失败 - HTTP 错误，状态: {{status}}", "sdppp-heartbeat", "Comfy Manager未安装，无法重启", "_progressHandlers", "compileAsync", "parse", "\\' is invalid' ", " , (dataPath || '')", " && !(", "Server does not support prompts (required for ", "prepareLoading", "parseMissingKeyHandler", " = false; for (var ", "MethodNotFound", "items", " } } else { ", "[^\\%\\:]", "', missingProperty: '", "All", "style", ".length == 1) { ", "Failed to check workflow changeTracker state:", "if ( ", "api", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "BigInt must be ", ".schemaPath === undefined) { ", "initialized", "reject", " characters' ", "getNodeStore", " = true; if (", "use", "{2})", "ayh", "uiLocale", "Error handling incoming message:", ".length > ", "interceptor_error", "_getCached", "Selection boundary", "pendingCount", "range", "zero", "toHash", "ssh", "scheme", "reloadResources", "如何获取APIKey", "keys", "' + ", "rules", "normalizeDuration", " = undefined; ", "连接 ComfyUI 失败（HTTP {{code}}）", "implements", "keyof", "set", "outputs API failed - {{reason}}", "formatArgs", "metaSchema", "newlayer_curlayer", "validateSchema", " || Object.keys(", "模板已保存。", "toString", "Tutorial", "Failed to send cancellation: ", ".then", "schemaExcl", "_getId", "asyncIterator", "getSchema", "keySeparator", "_def", "shared", "errorsText", " === null || ", "self", "用户名: {{username}}", "execution_success", "sdpppHandshake", "coerce", "Google Gemini - Image Generation", "uploadImage API failed - {{reason}}", "positive", "resetTimeoutOnProgress", "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", "Guest login successful", "#FF33FF", "getScriptPartFromCode", "finished", "Auto Sync: off", "Scan", " == errors) {", "posterIdentifier", "Boundary", "清除视频", "onTimeout", "__internal_requestInitialState_", "Action set {{0}} was not found", "Document {{0}} not found", "decline", " } }  ", "ActionSet {{0}} 未找到", "custom", "RULES", "inlineRefs", "#00CC00", "click to restore", "$dataMetaSchema", "正在连接 ComfyUI...", "4148800rxwstl", " = !(false ", "getCurrentNodeId", "正在发送...", "text", "Login Successful", "method", "任务取消失败: {{error}}", "Invalid literal value, expected ", "fatal", "formats", "Generating...", "Click to remove local file", "Invalid forward path for proxy action", "loopRequired", "#0066FF", "Failed to create document from file", "未配置上传器", "Invalid ", "workflow", "保存当前", "direction", "getTime", "handleAsObject", "stack", "#66CC00", "formatter", " < ", "ZodDefault", ")) {  var err =   ", "resources/list", "stopSequence", "null", "Uploading...", "#6600CC", ") {  var err =   ", "flatten", "detect", " if (", "No limit", "translator", " = true; ", "postProcessor", "Cannot forward to node ", "ads", "Selected", "lte", "ownProperties", " items' ", "Fit to selection", "isSupportedCode", "unescapeSuffix", "separator", "newdoc_canvas", "cancel", "Negative Prompt", "findPathInternal", "_limitProperties", "NOT_USERINFO", "keywordValidate", "hasOwnProperty", "greater than ", " , schema:  ", "#CCCC00", "工作流打开中", "audio", "获取结果失败: {{error}}", "Connection closed", "getNodeTitle", "ZodBranded", "++) { ", "addKeyword", "maxTotalTimeout", "patternProperties", " , params: { failingKeyword: ", "multipleOf", "sampling/createMessage", "网关错误 (502)", "getSuffix", "无效边界: 左边必须小于右边，上边必须小于下边", "isRequest", "遮罩应用后未得到资源", "ComfyUI加载中...", "executeOutgoingNotificationInterceptor", "can't resolve reference ", "getRegExp", "clear", "_instructions", "source", ".data = ", "MissingRefError", "nid", "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF", "Store not found for current node ", "coerceToTypes", '"failed to compile', "data", "schemaId", "从 当前图层 获取图像", "Stop", "createAsyncIterator", "isObject", "Edge references unknown target node: ", "Node definition not found for ", "Synchronous parse encountered promise.", "#00CC33", "notifications/cancelled", "ParseError", "mcpMesh", "         , parentSchema: validate.schema", "getter", "put", "objectValues", "prompt_id", " && ", "getTransportToNode", "+Alt reversed mask", "comfyAPI", "preprocess", "maxParallelReads", "Masked", "画布边界", "Paste your model name", "Outgoing message:", "默认模板", "removeDotSegments", "当前图层", "now", "Clear guide frame", "&gt;", "http://json-schema.org/draft-07/schema#", "ZodVoid", "properties", "&#x2F;", "lastIndex", "error", " | ", "_compilations", "interpolator", "padEnd", "_serverInfo", "run", "Idle", "]); ", "host", "Layer {{0}} is not a group", "date", "useColors", "subfolder", "#CC3366", "Invalid graph definition: ", "_notificationHandlers", "allServers", "rootData", "isOpen", "_requestHandlerAbortControllers", "extensionManager", "Expected ", "__DEFAULT__", "#00CCFF", "array", "_limitItems", ") {   ", "范围 1-100", "边界预览", " = validate.schema", "click", "当前选项：图层 {{layerName}}", "getProperty", "_resetTimeout", "relativetime", "dataPath", "getCapabilities", "activeState", "getAccountStatus API failed - {{reason}}", "saveMissingPlurals", "Select Image Source", "%25", " = false;for (var ", "init: no languageDetector is used and no lng is defined", "logging", "performWorkflowReset: ", "simpleTypes", "getDefaultValueFromField", "基础 URL", "没有链接图层: {{0}}", "additionalItems", "validateHandlerType", "任务已取消", ".call(this, ", "pst", "urn:uuid", "options", "schemaUnknownRules", "simplifyPluralSuffix", " already exists, which would be overridden", "25[0-5]", '[\\"]', "util", "此处粘贴 WebApp ID", "_onprogress", "Select a model", "async format in sync schema", "pga", "const", ")) { if (vErrors === null) vErrors = ", " if (!(await ", "_processInputParams", "key '", "ZodAny", " !== undefined) { ", "safe", "sort", "varReplace", "optional", "pending", "执行失败", " === ", "mcp-mesh-router", `获取图像 &
裁剪选区遮罩`, "bigint", "显示预览框 ({{count}}张图片)", "_opts", "&subfolder=", "Failed to request initial state for ", "cloneInstance", "resolveRunImages", "#FF3300", "languages", "Open images from file", "sd-ppp-static/sdppp_images/", "Output to:", " , message: 'should NOT be ", "nanoid", "+Alt crop by selection", "Content", "userinfo", "#99CC33", "#FF0066", ".else", "errToObj", "Node ", "name", ".additionalItems", "too_small", "notifications/progress", "missed to resolve ", " Object.keys(", "label", "510", "Server does not support notifying of tool list changes (required for ", "Failed to request initial states after connecting to ", "_loadingSchemas", "emit", "reload", "subject", "Outgoing request interceptor failed: ", "toLoad", "minValue", "_schemas", "userDefinedNsSeparator", "Hold Shift for more options; Ctrl for single fetch", "get", "ZodReadonly", "  }  ", "xaa", "ajp", "Boundary preview", "退出登录", "curlayer", "Invalid function return type", "exact", "expected", " throw new ValidationError([", "_fragments", "addResource", " - no connection available", " || ", "val is not a non-empty string or a valid number. val=", "skipOnVariables", "at most", "画布范围", "after app.queuePrompt errors: ", "parentDataProperty", 'Invalid input: must include "', "_parseAsync", "1217622CDlXnS", "symbol", "获取图层 {{0}} 的内容", "nodes", "graph", "registerDirectRequestHandler", "Image input and prompt are required", "从 选区 获取遮罩", "#6600FF", "Cannot access data ", "' : '", "sendResourceListChanged", "withTimeout", "aao", "#0000CC", "SDPPP可能未安装或和插件版本不匹配 (404)", "ydd", "No active document", "typ", "选区除外", "removeMessageEventListener", "getUsedParamsDetails", "firebug", "formData", "isNullable", " must be number", "Auto run after canvas change", ") {", "maxSize", "管理可复用的提示词模板", "base64", " var validate = ", " }   ", "broadcastHandlers", "getRegisteredActions", "未选择工作流", "ZodPromise", "capabilities", "限制图片尺寸", "_timeoutInfo", "fewer", "getHandlerTypes", "requestInfo", "offset", "external", "instructions", " , message: 'should be ", "boolean", "[^0-9]", "aeb", "regExpQueue", "includes", "#FFCC00", "queue_remaining", "queue", " = vErrors[", "任务执行失败: {{error}}", "; } ", "issues", "Create document for sent images", "smaller than", " = true; else if (!Array.isArray(schema", "less than or equal to", "joinValues", "substring", " validate.errors = null; return true; ", "formErrors", "Inpaint (reverse crop)", "Rescoped", "ZodOptional", "[object Number]", " = [", ") continue; ", "code", "Max size (px)", "No workflows available.", "Unrecognized key(s) in object: ", "markDisconnected", "under", "#FF9900", "Outpaint (positive crop)", "#/definitions/nonNegativeIntegerDefault0", "params", "unknown keyword: ", "file", "[BroadcastManager] Error forwarding broadcast:", "names", "var ", "compositeRule", "#0000FF", "获取像素失败: {{0}}", "Local image pack", "assign", "#CC33FF", "Running for {{duration}} secs, {{message}}", "{4}", "exactly", "translation", "[^\\%\\/\\@]", "reboot", "node", "=== 选项 ===", "varOccurences", " = formats[", "reference", "Host's domain name can not be converted to ASCII via punycode: ", "forward", "#6633CC", "parent", "Quality {{percent}}%", " + '", "hasDefaultValue", "].propertyName = ", "_limitLength", "content", "kind", "uxpHost", "escapeValue", "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.", "overflow", "verbose", "enabled", "freeze", "ZodTuple", "sendResourceUpdated", "validateKeyword", "Internal ZodObject error: invalid unknownKeys value.", "Plugin window focused required to use keyboard shortcut", " , data: ", "defaults", "false schema", " {} ", 'unknown format "', "nonstrict", "Show sent images", "不支持的上传类型：{{type}}", "keyword", " var async", " else { ", "++) { var ", "AI使用的区域与最大尺寸控制", "Overflow: input needs wider integers to process", "requestId", "timeout", "Elicitation response content does not match requested schema: ", "$$$$", "isConnected", "querySelector", "smartobject", " ) { ", "accept", "def", "[A-Za-z]", "Get content of layer {{0}}", "IPV4ADDRESS", "\\%25|\\%(?!", "reconnecting", "Method not found", "_transport", "nodeStores", "backend", "roots", " if ( ", "3rdParty", "pbu", "reason", "{6}", "title", "pattern", "nestingRegexp", "getBestMatchFromCodes", " !== undefined && typeof ", "notifications/resources/updated", "输出区域", "ZodNull", "暂无视频", "afb", "非法的名称: {{0}}", "Clear all", "close", "min", "segment", " = +", "en-US", "isSafeInteger", "abort", "ZodMap", "InvalidRequest", "使用当前图层", " , params: { limit: ", "men", "ref/prompt", "点此获取RunningHub APIKey", "onclose", "^\\[?(", "element", "合并组失败", "[\\:\\/\\?\\#\\[\\]\\@]", "Limit image size", "notificationsIntercepted", "added", "maxTokens", "emoji", "initialState", ", exclusive: ", "hostVersion", "ucs2length", "select", "forkResourceStore", "initImmediate", "Refreshing preview...", "Add Template", "strictNumbers", " = 0; ", "质量{{percent}}%", "cardinal", "relatedRequestId", "How to get APIKey", "已选择", "react", " , schema: validate.schema", "isCUID2", " && self._opts.unknownFormats.indexOf(", "OpenAI - 图片编辑", "Request interceptor failed for ", "从磁盘获取", "empty", "AI 生成任务", "registerHandler", "Enter a pixel value greater than 0", "userDefinedKeySeparator", "Entire Canvas", "[GraphStoreSynchronizer] Error broadcasting state update for ", ") vErrors.length = ", "assistant", " } ", "resolveImage", ".errors); errors = vErrors.length; } ", "defineProperty", " + '\\']'", "objectKeys", "Exclude selection", "find", `获取图像 &
限制图像范围`, "nestingSuffix", "') ", ` , message: 'should match format "`, "notifications/roots/list_changed", " , schemaPath: ", "Invalid function arguments", "detail", "_getOrReturnCtx", "(.+?)", "#00CC66", "adf", "Meta-schema for $data reference (JSON Schema extension proposal)", " , schema: false , parentSchema: validate.schema", "dependencies", "dirty", "自动同步: 开启", "checks", "/*# sourceURL=", " !== undefined) ; ", "inclusive", "Hold Shift key to import as new document", "milliseconds", "='; ", "getNode", "Running", ") || ", "fast", "Save", "diff", "It seems you are nesting recursively key: ", "{0,2}", "getSuffixes", "素材同步中", "Please select the position to send image", " if (! ", "结果获取已中止", "Empty selection mask", "清空选择", "pes", "values", "getPath", "Discriminator property ", "getTransportInternal", "keyType", "hours", "_onrequest", "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js", "catchall", "getFallbackCodes", "schemaHasRules", "max", 'id "', "ignoreJSONStructure", "never", "connectionManager", "No active layer", "Waiting in queue", "response", " && Object.prototype.hasOwnProperty.call(", " = 'then'; ", "addMetaSchema", "assertCapabilityForMethod", "append", "管理 Comfy Simple 工作流的提示词片段。", " = false , ", "unicode", "+Shift 调整更多选项；Ctrl 单次获取。", "left", "types", "openWorkflowJSON", " ( ( ", "NOT_PATH", "ZodSymbol", "sdppp/broadcast", "serialize", "Layer {0} not found", "enum", "keySchema", "getAccountStatus API 调用失败 - {{reason}}", "lazycreate", "catchValue", "getResource", "请输入您的 Google API Key", "Get selection", "Edge references unknown source node: ", "获取表单数据失败", "setState", "execution_start", "删除模板", "ZodIntersection", "uiWeight", "missingKey", "propsKeywords", " not in path ", " == null) ", "Import from disk", "fromCodePoint", "notifications/message", "var customRule", "loadLanguages", "this", "#3333FF", "strong", "app.queuePrompt caught", "sdppp_widgetable_title", "创建文档失败", "integer", "strict", "endsWith", " , parentSchema: validate.schema", "shorter", "Validation failed but no issues detected.", "secure", " , message: 'should match some schema in anyOf' ", "hasResourceBundle", "sdppp/abort", "heartbeatTimer", "适配至当前图层", " console.log(", " } } ", " = defaults[", "iri", "上传已中止", "precision", "jsonPointers", "Logout", "setupStreamResponseHandler", "pluralRulesCache", "forEach", "setNotificationHandler", "生成中", "请填写模板名称。", "unshift", ".call( ", "Waiting for ComfyUI to finish connecting…", "[UnexpectedJSONParseError]: ", "Opening workflow", " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", " = null; ", "dir", "needsPlural", "_formats", " if (true) {", "messagePoster", "Current", "cuid", "hasPath", "云端推荐：", "hasOutgoingRequestInterceptor", "|0?0?", ", received '", "unescapePrefix", "#/definitions/simpleTypes", " , message: 'boolean schema is false' ", "schema should be object or boolean", " for interpolating ", "output", "粘贴你的模型名称", "processors", "Unknown", "statusText", "getFixedT", "handle", "$comment", "_errors", "ckb", "invalid_union_discriminator", "服务不可用 (503)", "query", "statements", "Default", "coerced", "schema $id ignored", "Leave empty for no limit", "overloadTranslationOptionHandler", "给发送的图片创建文档", "Channel connecting...", ") break; ", "roots/list", "UNRESERVED", "setOutgoingNotificationInterceptor", "fallbackLng", "escapeComponent", '" was not yet loaded', "dev", "toASCII", " else ", "fallbackNS", "console", "isTime", "模型物美价廉，海量社区应用", "__origin", "高级选图", "documentElement", "2024-10-07", "toJSON", "updateKey", "Options", "minutes", "1.0.0", "拖拽图片到此处松开完成上传", "插件可能正在拦截 PS 快捷键... ", "_validateKeyword", "Advanced selection", "widgetableStructure", "setLimit", "__proto__", "messageHandlers", "run API 调用失败 - {{reason}}", "level", "sdppp/streamResponse", "pong", "#00CC99", "outgoingRequestInterceptors", "; if (vErrors !== null) { if (", "ComfyUI服务器重连中", "nsSeparator", "languageChanged", "checkState", "signal", "URI is not a ", "+Alt 反转遮罩", " = true;  ", "headers", " = ''; ", "duration", " == 'object' && Array.isArray(", "_compile", "resolve", "#/definitions/schemaArray", " cannot be resolved", "res", "暂无默认模板。", "ZodFunction", "interpolationkey", " if (errors === ", " , message: 'should be equal to one of the allowed values' ", "Unsupported upload type: {{type}}", "%c ", "graphToPrompt", "找不到图层: {{0}}", "other", "arb", "Gemini 2.5 Flash 图像", "entries", " { keyword: '", " ? ", "isULID", "Array must contain ", ".dataPath === undefined) ", "Email address's domain name can not be converted to ASCII via punycode: ", "_parse", "nodeProxies", "Negative prompt content", "ZodUnion", "setItem", "Please login to use the plugin", "Received host version from UXP:", ".test(", "ZodUnknown", "run API failed - nodeInfoList unavailable. Please call getNodes() first.", "passingSchemas", "stopAll", " for language ", "./api/userdata/workflows%2F.index.json", "failed", " than ", "logger", "maxDate", " , message: 'should NOT be valid' ", "使用教程", "cleanupConnection", "More actions", "Sending...", "humanize", " , params: { propertyName: '", "ValidationError", ".dataPath = (dataPath || '') + ", "'/' + ", "function", "comfy-user", "新增槽位", "getNodes API 调用失败 - {{reason}}", "&amp;", "arz", "Notification handler failed for ", " === 'true' || ", "getItem", "getValidEnumValues", '" resolves to more than one schema', " = false; ", "Template removed.", " %c", "less than", "longer", "&#39;", "getAccountStatus API failed - HTTP error! status: {{status}}", "_getType", "11520081QRymeY", " , params: { keyword: '", "postProcessPassResolved", "Selection bounds only", "[MCPMiddleware]", "Base URL", "resources/subscribe", " ? await ", "map", "not_finite", "整个画布", "File not found: {{path}}", "errorMap", "waiters", "getDefinition", "需要提供图像和提示词", ") {  ", "waitingReads", "新建模板", "Get Image", "negative", ".validateSchema(", "SDPPP 2.0 不再需要此节点", "使用整个画布", "(Queue:{{queueSize}}) {{progress}}% {{executingNodeTitle}}...", " = RULES.custom['", "isFinite(", "notificationsHandled", "Manage reusable prompt templates", "startTime", "[A-Fa-f]", "errors", "activeWorkflow", "Failed to update the {{part}} prompt: ComfyUI connection is not ready.", "_addCheck", "Cycle detected: ", "Failed to pick file. Please try again.", "Disk", "[vV]", `Get image &
Crop selection mask`, "#33CC66", " , rootData )  ", "getNeighbors", "{1,4}", "Quick", "rootId", "curlayer_selection", "removeSchema", " for nesting ", "&lt;", "int", "arrayToEnum", "index", "获取 API Key", "not-basic", "Connecting to ComfyUI...", " var vErrors = null; ", ` , message: 'should match "' + `, "getDataByLanguage", "目标边界为空", "Cloud:", " && !Array.isArray(", "refine", ") break; } ", ")) {  ", "Click to restore default boundary", "_responseHandlers", "ZodError", "env", "以当前图层边界获取当前图层", "validation", "Workflow stopped by user", "queues", "Template applied.", "createErrors", "joinArrays", "deprecate", "InvalidParams", "nodeId", "#FF00CC", "设为画布", "Send to PS", ".length; ", "McpError", "_getInvalidInput", "http://json-schema.org/schema", "创建图层失败", " character(s)", "无法写入{{part}}提示词：ComfyUI 尚未就绪。", "initAsync", "Auto Sync: on", "value", " , message: 'should be equal to constant' ", "File upload failed", " if (false) { ", "RequestTimeout", " == 'object' && !(", "当前没有可用图层", "ZodObject", "buildAdjacencyList", "safeParseAsync", "nest", "languageDetector", "messageQueue", "0?[1-9]", "Layer mask", "非当前文档", "services", "无法打开图像文件: {{error}}", "notification", "cmp", "i18nFormat", "acx", "addNamespaces", "uploadImage API failed - HTTP error! status: {{status}}", ") {  for (var ", "lastPongReceived", " + ']'", "compile", "order", "every", "Upload aborted", "sdppp_assets", " != 'undefined' && ", "([+-]\\d{2}:?\\d{2})", "prs", "提示词模板", "graphInstance", "userAgent", "Number must be ", "#/definitions/nonNegativeInteger", "removeDefault", "服务器错误 (500)", "Select", "supportedLngs", "sdppp", "callValidate", "capacity", "  if (!", "isPersisted", "utils", "zod", "isArray", "default is ignored in the schema root", ", received ", "getLanguagePartFromCode", "openWorkflows", "Range 1-100", "toFixed", "regexpUnescape", " has duplicate value ", "~validate", "messages", "本地文件", "删除当前", "resources/unsubscribe", "removeKeyword", "none", "macro", "[0]; ", "invalid_type", "exec_info", "workflowManager", "getResourceBundle", "requestsIntercepted", "New Layer", "Get mask from Canvas", "toResolveHierarchy", 'custom keyword "', "setKey", ".patternProperties", "isFinite", "Failed to fetch account status", "Uploading, if the image too large, may be lag...", "done", "errs_", "_options", "New Template", ";  ", "Model", "languageChanging", "ZodCatch", "async schema in sync schema", "getConnectionCount", "Uploader not set", "{0,4}", "902iKxqfg", "No image returned", "Input Image", "[0-9]", "Full Canvas", "handleIncomingMessage", "year", "Server does not support tools (required for ", "opts", "addEventListener", "renderer", "async keyword in sync schema", "proxy", "#FFCC33", ".schema = ", "isRoot", "abs", "#FF3399", "Internal error", "pctEncChar", "Please select AI service", "escapeQuotes", "alwaysFormat", "Success", "token", " try { await ", "returnObjects", "正在发送图像...", "/type", "clearHeartbeatTimers", "hasNotificationHandler", " } else { ", "disconnected", "图层 {{layerName}}", "streamRequestorHandlers", "Cancel", "getKeyword", "nullable", "清除参考线框架", "handleIncomingRequest", "key", " via punycode: ", 'Invalid input: must end with "', "hasLanguageSomeTranslations", " = false; else if (", "minSize", "externalListenMessageCallback", "superRefine", "not_multiple_of", "is an invalid additional property", "Remove slot", "addResources", "POST", "发送所有", " failed", "Failed to save prompt templates.", "joinAs", "dataProperties", "dataPathArr", "absolute", "substr", "模板名称已存在。", "video", "nonempty", "Current layer", " not implemented for node ", "Task creation aborted", "getTextInfo", "exclusiveMaximum", "停止并取消全部", "[^]", "and", ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", "保存提示词模板失败。", "toQuotedString", " = true; else if (typeof ", "rejecting language code not found in supportedLngs: ", "test", " !== undefined ", ".length , ", "avl", "runningRequests", "(?:", "选择文件失败，请重试", "requestHandlers", "./sdppp_upload2", "输出至：", "images", "isLanguageChangingTo", "valueType", "mergeObjectAsync", "changeLanguage", "schemas", "forwardBroadcast", "spa", "; var ", "lastIndexOf", "meta-schema not available", "detection", "notifications/prompts/list_changed", "./api/manager/reboot", "请填写提示词内容。", "MIN_SAFE_INTEGER", "assert", ".length <= ", "', depsCount: ", "Unknown message type: ", "_error", " , params: { ref: '", "removeEventListener", " , params: { i: i, j: j } ", "自动填入画布关闭", "sdpppX2", "useRawValueToEscape", "$t(", "Gateway error (502)", "stream", "default", " || validate.schema", "allKeys", "获取工作流列表失败。", "more than", "OpenAI API 错误", "Loading...", "sourceType", "omit", "formatLanguageCode", "listWorkflows", "startsWith", "{0,1}", "Server does not support sampling (required for ", "exactLength", "Invalid discriminator value. Expected ", "should have required property \\'", "loadNamespaces", " = errors; var ", "仅选区范围", "nodeTransports", "copy", "No store found for node ", "createGlobalDispatcherForType", ` + '" schema' `, '.schemaPath = "', "#CC0066", "sessionId", "; } catch (e) { ", "async", "Modify", "正在发送所有图片...", "validateStreamRequestorRequest", "minItems", "); errors = vErrors.length;  for (var ", "setter", "exclIsNumber", "应用模板失败。", "模板名称", "} else {  errors = ", "createInstance", "table", ".pi-sign-out", "contextSeparator", "Execute", "ComfyUI加载失败，HTTP状态码：{{code}}", "applyPostProcessor", "sendStreamRequestorRequest", "edges", "画布变更后自动运行工作流", "call", "catch", "xn--", "Number must be finite", "Please provide a template name.", "更多设置", "mesh", "getConnectionToNodeInternal", "tools", "HTTP URIs must have a host.", "Canvas", "tried", "[\\:\\@]", " var ", "$schema", "Failed to load workflows.", " ) ", " === '' || ", "auto", "addFormat", "[BroadcastManager] Error forwarding ", "prompts/list", "NOT_HOST", "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.", "Input Setting", "WARNING DEPRECATED: ", "getOwnPropertyNames", "2024-11-05", "#3366CC", " = errors;var ", " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ", "Server error (500)", "（为空）", "weeks", "591hssNzt", "Run Photoshop Action", "compiling", "workflow-run", "tolerant", " != 'boolean') ", "Create document", "&quot;", "[\\-\\.\\_\\~]", "Current layer bounds only", " var startErrs", "authInfo", "pctDecChars", "unsetRequestHandler", "Server does not support notifying about resources (required for ", "clearItems", "concat", " element(s)", "#FF0000", "notifications/tools/list_changed", "yds", "sec", "画布变动后自动运行", "invalid_literal", "startHeartbeat", "Keyword ", "requestIdSeq", " = undefined;", "updateMissing", "选择 AI 服务提供商", "Failed to connect to ComfyUI (HTTP {{code}})", "ZodEnum", "isBase64url", "getPluralFormsOfKey", '" (see option extendRefs)', ") break; }  ", "maxReplaces", '" already exists', "pre", "silent", "shape", "addMiddleware", "Fetch current layer with primary boundary", " = typeof ", "tools/call", "filename", "formatParams", "has", "Invalid enum value. Expected ", "action", "Enter your RunningHub API Key", "_any", "arq", "__cycle__", "2.0", "Failed", "More Settings", "saveMissing", "get_layer_info: 需要 layer_identify", "_regex", "slice", "Error in direct request ", "Username: {{username}}", "closeHandlers", "MissingRef", "getStats", "off", "strip", " return data; ", "invalid_return_type", "[\\+\\-\\.]", "#33CC99", "Current selection: Canvas", " when property ", "broadcastReceived", "Locale", "ulid", "nonnegative", " === false || ", "merge", "URI can not be parsed.", "nodeErrors", "/else", "#0099CC", "buildDirectedAdjacencyList", " != 'number') || ", "Comfy侧SDPPP版本({{comfyVersion}})与插件({{pluginVersion}})不匹配，运行可能有问题", "_clientVersion", "status API failed - {{reason}}", "unionErrors", '"number"', "留空表示不限", "resetRegExp", "invalid_intersection_types", "智能对象图层", "debugDisableHeartbeatResponse", "fullPath", "unicodeSupport", "addMessageEventListener", "currentOnly", " === undefined) ", ") ) {   ", "stats", " if (errors === 0) return data;           ", "useDefaults", "pluralCategories", "正在运行", "isIP", "已限定范围", "join", "_onclose", "pluralSeparator", "NOT_PATH_NOSCHEME", "destroy", " , params: { additionalProperty: '", "prompt_ids: ", "exactly equal to ", "filter", "email", "ping", "handleIncomingNotification", "[^\\%\\[\\]\\:]", "isEmoji", "assertEqual", " != 'number') { ", "number", "以主图边界获取当前图层", "; else vErrors = null; }  ", "_path", "enable", "charAt", "Comfy.userId", "Action handler ", "string", " validate.errors = vErrors; return false; ", " = errors;", " = null; try { ", "augment", "{0,5}", "addResourceBundle", "async schema referenced by sync schema", "requestedSchema", "charCodeAt", "Incoming message:", "invalid-input", " reference.", " === 'false' || ", "Selection", "Delete Template", 'key "', "Layer {{layerName}}", "timeoutId", " from id ", "skipInterpolation", " = errors;  ", ", schema", "dataVar", "No crop", ".length ", "validation failed", "notifications/resources/list_changed", "Not connected", "syncStoresToNewConnection", "` could not be extracted from all schema options", "CurLayer", "未找到图层 {0}", "[^\\%\\/\\:\\@]", "comfy", " + ", "format", "Positive Crop", "selectColor", "count", "_addSchema", "批次数量", "sdppp/directRequest", "assertRequestHandlerCapability", "false", "actionManager", "Comfy SDPPP version ({{comfyVersion}}) does not match plugin ({{pluginVersion}}), may cause issues", "execution_error", "运行失败 - 未获取到 nodeInfoList，请先执行 getNodes()。", "curlayer_canvas", "fragment", " == +", "exclusiveMinimum", "请选择要获取的图像", "delete", "aec", "_clientCapabilities", "#33CC33", " = equal(", "Enter your Replicate API Key", "$ref", "contentMediaType", "unknownKeys", "+Alt 按选区裁剪", "Not implemented (501)", " var itemIndices = {}, item; for (;i--;) { var item = ", "nullish", "Validation", "#3300CC", "mesh:workflow", "pop", "创建操作需要矩形坐标", "invalid_string", "default is ignored for: ", "#FF0033", "#99CC00", "mountedEndpoints", "等待 ComfyUI 连接完成…", ") > 1e-", "more", "createStreamState", "apply", "#0099FF", "[i]; ", "按选区裁剪", " should be boolean' ", "initializeNodeStores", "iterator", "prototype", " , message: '", "connect", "node_id", "remove", " not found for current node ", "?\\:\\:", "ref/resource", "multipleOfPrecision", "]; }  ", "ZodDate", "usedParams", "从 当前图层 获取遮罩", "Fit to current layer", " validate.errors = vErrors; ", "passContext", "Failed to get result: {{error}}", "assertNever", "Crop", "openWorkflow", "transports", "Current option: File", "masks", "color: ", "getConnectionInfo", "Generating", "sdppp/streamRequest", "MiddlewareError", "You are passing an undefined module! Please check the object you are passing to i18next.use()", "ComfyUI not ready", "buffer", "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", 'no schema with key or ref "', "acm", "ComfyUI failed to load, HTTP status code: {{code}}", "manuallyExtractDefaults", 'schema with key or id "', "extendRefs", "按回车打开应用： {{appName}}", "__nwjs", "Create document for preview", " , message: 'should contain a valid item' ", "setComfyOrgAPIKey", "获取账户信息失败", "mesh:comfy", "ZodNativeEnum", "getDefaultValuesFromSchema", "backendConnector", "debug", "%[89A-Fa-f]", "getTransport", "当前无法应用模板。", "sdppp 选中图层", "  )  ", "passthrough", "生成中...", "storage", " !== undefined)", "ZodNullable", "isBase64", "同步当前内容", "hrs", "重启ComfyUI失败", " = false; break outer; } } } ", "validate.schema", "loading namespace ", "文件上传失败", "base64url", "Empty", "root", "observers", "context", " ) || ", "ZodNever", "http://json-schema.org/draft-07/schema", "preload", "Paste WebApp ID here", "readOnly", "clone", " , message: 'should NOT have ", "fcName", "[\\uE000-\\uF8FF]", "请选择要获取的遮罩", "removeResourceBundle", "Google Gemini - 图片生成", "ZodNumber", "workflows/", "自定义AI工作流引擎", "点我恢复", "设为选区", " , params: { pattern:  ", "body", "找不到文档: {{0}}", "workflows", "optionsMap", " in ", "isClone", "Fetch current layer with current-layer boundary", "timestamp", "Schema ", "Request timed out", "getImage", " if (!", "setupStreamProtocolHandlers", "已添加遮罩", "broadcast", "{0,6}", "enforceStrictCapabilities", "missingInterpolationHandler", "escapeFragment", " , params: { passingSchemas: ", "hasEdge", "_cached", "contextualErrorMap", "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!", '";  ', "+\\.", "checkDataType", "zh-CN", "graph update cost ", "abh", " var missing", "_setupTimeout", "addPostProcessor", "safeParse", "parseInt", "usePattern", " ( ", "ZodNaN", "node_errors", "调整输入设置", ".type", "info", "My Templates", "invalid_arguments", "resolved promise for", "{2}", "prd", "post", "readonly", "continueOnInterceptorError", "auz", "full", "jsonStringifyReplacer", "#33CCFF", "hasAction", "mergeArray", "uri", "Please provide prompt content.", "ZodLazy", "Current selection: Layer", "status API 调用失败 - HTTP 错误，状态: {{status}}", "Prompts", "更多操作", "then", "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", "allOf", " ) : ( (", ", rootData)  ", "Auto", "ids", " = true;", "Layer not found {{0}}", "defaultNS", "markConnected", "second", "getNodes API failed - {{reason}}", "正面提示词", "getHandler", "brand", "comfy_api_key", "ZodArray", "common", "setupStreamRequestHandler", "请输入大于 0 的像素值", "resource", `" keyword validation' `, "status API failed - HTTP error! status: {{status}}", "loadSchema", "Service unavailable (503)", " == 'boolean') ", "Store not found for ", "Enter Google API Key", "removeNamespaces", "resourceName", " = false; else {", "/patternProperties/", "从 画布 获取图像", " var errors = 0;     ", "cidr", "Invalid boundary type: {{type}}", "contains", "newdoc", "obj", "schemaPath", "trim", "void", "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", "promise", "meta", "  for (var ", " == errors) { ", "errs__", "No edge defined from ", "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", "finite", "datetime", "msecs", "Primary image resource is missing", "resources/templates/list", "$schema must be a string", "property ", "schema id must be string", "mergeShapes", "Sync current content", "_onresponse", "file://", "nestingOptionsSeparator", " var err = ", "rtl", "languageUtils", " || ! Object.prototype.hasOwnProperty.call(", "866996juqZNF", "Prompt Templates", " = ", "507330gFwBKe", "Request handler failed: ", "提示词", "http", "MAX_SAFE_INTEGER", "ZodLiteral", "Client does not support listing roots (required for ", "same-document", "actions"];
  return Nx = function() {
    return o;
  }, Nx();
}
let Ws = Fi();
const Ni = { "zh-CN": {}, "en-US": {} };
function Xt(o) {
  const x = o === "zh-CN" ? ii : ci, t = Ni[o];
  return { ...x, ...t };
}
function Ti() {
  return Ws;
}
function Yt(o, x = {}) {
  const t = a;
  let e = Xt(Ws)[o];
  return e ? typeof e === t(2161) ? e[t(575)](/\{\{(\w+)\}\}/g, (s, n) => x[n] !== void 0 ? String(x[n]) : s) : e : o;
}
const qi = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Ai = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, Oi = (o) => Ai[o], _i = (o) => o.replace(qi, Oi);
let xr = { bindI18n: a(1560), bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", a(1445), "i", "p"], useSuspense: !0, unescape: _i };
const Di = (o = {}) => {
  xr = { ...xr, ...o };
}, ji = { type: a(1262), init(o) {
  const x = a;
  Di(o[x(1005)][x(1318)]);
} };
!X0[a(182)] && X0.use(ji)[a(2636)]({ resources: { "zh-CN": { translation: Xt(a(2367)) }, "en-US": { translation: Xt("en-US") } }, lng: Ti(), fallbackLng: a(1282), interpolation: { escapeValue: !1 } });
const Fe = [];
Ye[a(2763)] = Ye[a(2763)] || {}, Ye[a(2763)][a(2655)] = function(o, x) {
  const t = a;
  typeof x === t(1622) ? Fe[t(452)]([o, { formatter: x, setter: null }]) : Fe.push([o, x]);
};
function Mi(o, x, t) {
  var c, u, d;
  const r = a, e = Fe[r(1341)](([f]) => f == "__DEFAULT__"), s = Fe[r(1341)](([f]) => ia(f, o[r(612)])) || e;
  let n = !1;
  if (s) {
    const f = s[1][r(1979)];
    f && (n = !!f(o, x, t));
  }
  !n && (o[r(234)][x].value = t, (u = (c = o[r(234)][x]).callback) == null || u.call(c, t)), (d = (N0[r(1803)] || N0[r(969)][r(832)])[r(1673)]) == null || d[r(361)][r(1561)]();
}
function Tx(o) {
  const x = a, t = {}, r = Fe[x(1341)](([e]) => e == x(971));
  return o[x(1102)][x(1471)]((e) => {
    const s = x;
    if (!e.widgets || e.widgets[s(692)] == 0) return;
    const n = Fe.find(([i]) => ia(i, e[s(612)])) || r;
    if (n) try {
      const i = n[1][s(839)](e);
      i && (t[e.id] = i.widgets[s(1649)]((c) => c[s(1732)]));
    } catch {
      t[e.id] = [];
    }
  }), t;
}
function ea(o, x) {
  var s, n, i;
  const t = a;
  if (!o) return { widgetableID: "", widgetablePath: "", nodes: {}, nodeIndexes: [], options: {}, note: "" };
  const r = o[t(1102)][t(1649)]((c) => {
    const u = t;
    if (c[u(2588)] != 0) return;
    const d = mx(c);
    if (!d || d[u(1955)](".") || !c[u(234)] || c[u(234)][u(692)] == 0) return;
    let f = Fe[u(1341)](([m]) => ia(m, c[u(612)]));
    if (f) try {
      const m = f[1].formatter(c);
      if (m) return m.id = c.id, m.uiWeightSum = m[u(234)][u(172)]((v, k) => v + (k[u(1433)] || 12), 0), m;
    } catch (m) {
      return { id: c.id, title: d, uiWeightSum: 12, widgets: [{ outputType: u(948), value: Yt("convert widget {0} failed:", f[0]) + (m.message || m || ""), name: "", options: {} }] };
    }
    if (!d.startsWith("#")) return null;
    let l = c[u(234)];
    const b = Fe[u(1341)](([m]) => m == u(971));
    if (b) {
      const m = b[1][u(839)](c);
      if (m) return Object[u(1191)](m, { uiWeightSum: m[u(234)][u(172)]((v, k) => v + (k[u(1433)] || 12), 0) });
    }
    const h = { id: c.id, title: d, widgets: l[u(1649)]((m) => ({ name: m[u(1061)] || m.name, outputType: m[u(612)] || u(2161), value: m[u(1732)], options: m[u(1005)] })) };
    return Object[u(1191)](h, { uiWeightSum: h[u(234)][u(172)]((m, v) => m + (v[u(1433)] || 12), 0) });
  })[t(2145)](Boolean)[t(1025)]((c, u) => {
    const d = t;
    let f = mx(c), l = mx(u);
    return f = f[d(1955)]("#") ? f.slice(1)[d(2444)]() : f.trim(), l = l[d(1955)]("#") ? l[d(2088)](1)[d(2444)]() : l[d(2444)](), f.localeCompare(l);
  }), e = ((n = (s = o[t(1102)][t(1341)]((c) => c[t(612)] == "Note" && c[t(1266)].match(/SD-?PPP/i))) == null ? void 0 : s.widgets[0]) == null ? void 0 : n[t(1732)]) || "";
  return { widgetablePath: ((i = x.activeState[t(638)]) == null ? void 0 : i[t(419)]) || x[t(2619)], widgetableID: x[t(986)].id, nodes: r.reduce((c, u) => (c[u.id] = u, c), {}), note: e, nodeIndexes: r[t(1649)]((c) => c.id), options: {} };
}
function ia(o, x) {
  const t = a, r = o[t(575)](/[.+^${}()|[\]\\]/g, t(605)).replace(/\*/g, ".*")[t(575)](/\?/g, ".");
  return new RegExp("^" + r + "$")[t(1904)](x);
}
function mx(o, x = "") {
  var e;
  const t = a;
  let r = x || o[t(1266)] || "";
  return o[t(428)] && (r.startsWith("#") || r[t(1955)](".")) ? o[t(428)](t(1447), r) : r = ((e = o.properties) == null ? void 0 : e[t(1447)]) || r, r;
}
Ye[a(881)] = mx;
const xa = ox[a(243)](a(2230)), tr = /* @__PURE__ */ new Set();
P0[a(230)]("setWidgetValue", async (o) => {
  const x = a;
  return requestAnimationFrame(vn), o[x(1382)][x(1471)](({ nodeID: t, widgetIndex: r, value: e }) => {
    const s = x, n = N0.graph[s(1102)][s(1341)]((i) => i.id == t);
    Mi(n, r, e);
  }), { success: !0 };
}), P0[a(230)](a(2268), async (o) => {
  const x = a, { workflow_path: t } = o, r = !tr.has(t), e = o.reset || r;
  tr[x(2655)](t);
  const s = N0[x(969)][x(832)] || N0[x(1803)], n = s[x(2342)][x(1341)]((c) => c[x(450)] === t || c[x(2619)] === t || c[x(2619)] === x(2335) + t);
  if (!e) {
    const c = await Li(s, n);
    if (xa(x(2542) + c), c) await Gx(s, n);
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
    xa(d(592) + u[d(2619)], u[d(1302)]), N0[d(1803)] == c ? await u[d(2622)]() : (await c.openWorkflow(u), await N0[d(217)](JSON.parse(JSON[d(2625)](u[d(1302)])), !0, !0, u, {}));
  }
}), P0[a(230)](a(1412), async function(o) {
  const x = a;
  let { workflow_content: t, workflow_path: r } = o;
  return t[x(638)] = { ...t[x(638)] || {}, sdppp_workflow_alias: r }, await N0.loadGraphData(t), { success: !0 };
}), P0.implementAction(a(1954), async (o) => {
  var s;
  const x = a, t = N0[x(1803)] || N0[x(969)][x(832)];
  (s = t.syncWorkflows) == null || s.call(t), await new Promise((n) => requestAnimationFrame(n));
  let e = t[x(2342)][x(1649)]((n) => n[x(2619)][x(575)](x(2335), ""));
  try {
    const n = new Headers(), i = localStorage[x(1630)](x(2159));
    i && n[x(758)](x(1623), i);
    const c = await fetch(x(1607), { headers: n });
    let u = [];
    c.ok && (u = (await c[x(506)]()).favorites[x(1649)]((f) => f.replace("workflows/", ""))), e[x(1025)]((d, f) => {
      const l = x, b = u[l(1150)](d), h = u.includes(f);
      return b && !h ? -1 : !b && h ? 1 : d[l(2509)](f);
    });
  } catch {
  }
  return { workflows: e, error: "" };
}), P0[a(230)](a(2506), async (o) => {
  var n;
  const x = a, { workflow_path: t, from_sid: r } = o, e = N0.workflowManager || N0[x(969)][x(832)], s = e[x(2342)].find((i) => i[x(450)] === t || i[x(2619)] === t || i[x(2619)] === x(2335) + t);
  if (!s) throw new Error(x(238));
  return ((n = e.activeWorkflow) == null ? void 0 : n.id) != s.id && await N0[x(2268)](t, r, !1), s.changeTracker.checkState(), await e[x(2506)](s), { success: !0 };
});
async function Li(o, x) {
  var e, s, n;
  const t = a;
  if (!x || !(((e = o[t(1673)]) == null ? void 0 : e.id) === x.id)) return !1;
  if ((s = x.changeTracker) != null && s[t(1561)]) try {
    x[t(361)][t(1561)]();
  } catch (i) {
    console.warn(t(722), i);
  }
  try {
    const i = (n = N0[t(1103)]) == null ? void 0 : n.serialize(), c = x[t(986)];
    if (!i || !c) return !1;
    const u = JSON[t(2625)](i), d = JSON[t(2625)](c);
    return u !== d;
  } catch (i) {
    return console[t(343)](t(201), i), !1;
  }
}
async function Gx(o, x) {
  var e;
  const t = a;
  xa(t(994) + x[t(2619)]);
  async function r(s, n) {
    const i = t;
    N0[i(1803)] == s ? await n[i(2622)]() : (await s.openWorkflow(n), await N0.loadGraphData(JSON[i(706)](JSON[i(2625)](n[i(986)])), !0, !0, n, {}));
  }
  if ((x.isOpen || (e = o[t(967)]) != null && e.call(o, x)) && o[t(1787)][t(692)] === 1) {
    const s = o.createTemporary();
    o[t(2268)](s);
  } else await r(o, o[t(1787)][0] == x ? o.openWorkflows[1] : o[t(1787)][0]);
  await o.closeWorkflow(x, !1), await new Promise((s) => requestAnimationFrame(s)), await r(o, x);
}
const nx = ox[a(243)](a(2031)), je = /* @__PURE__ */ new Map();
let qx = [];
const Jx = { hijacked: !1, originalQueuePrompt: null };
function $i(o, x) {
  const t = a, r = je.get(o);
  nx(t(1039), o, x, r, je), r && r[t(1335)](x);
}
P0.implementAction(a(1605), async () => {
  const o = a;
  await N0.api[o(2043)](o(1153)), await N0[o(724)].interrupt();
  const x = Array.from(je[o(1382)]());
  je[o(899)]();
  for (const t of x)
    try {
      t[o(574)](new Error(o(1712)));
    } catch {
    }
  return { success: !0 };
}), P0[a(230)](a(954), async function* (o) {
  const x = a;
  Ui(), qx = [];
  const t = o[x(2715)];
  P0[x(2585)][x(1429)]({ lastError: "", widgetableErrors: {} });
  const r = await Vi(t, o[x(2588)]);
  nx(x(1095), r[x(2591)], r.nodeErrors, x(2143), r.promptIds), Zi(r), yield* Wi(r[x(412)]);
});
function Ui() {
  const o = a;
  if (Jx.hijacked) return;
  const x = Re.queuePrompt;
  Jx[o(502)] = x, Re[o(545)] = async (...t) => {
    const r = o;
    try {
      const e = await x.call(Re, ...t);
      return qx.push({ error: null, result: e, prompt_id: e[r(926)] }), e;
    } catch (e) {
      throw qx[r(452)]({ error: e, result: null, prompt_id: "" }), e;
    }
  }, Jx[o(646)] = !0;
}
async function Hi(o) {
  await N0[a(545)](1, o);
}
async function zi(o) {
  const x = a, t = await N0[x(1582)](N0[x(1103)]);
  for (let r = 0; r < o; r++)
    await Re[x(545)](1, t);
}
async function Vi(o, x = a(400)) {
  var e, s;
  const t = a, r = { promptIds: [], hasError: !1, generalError: "", nodeErrors: {} };
  try {
    x === t(724) ? await zi(o) : await Hi(o);
    for (const n of qx)
      if (n[t(948)]) r[t(2591)] = !0, r[t(2109)] = n[t(948)].response ? Ki(n.error[t(1400)][t(2378)]) : {}, Object[t(1191)](r[t(2109)], { "-1": ((s = (e = n.error[t(1400)]) == null ? void 0 : e[t(948)]) == null ? void 0 : s[t(225)]) || n[t(948)][t(225)] });
      else {
        const i = n[t(2671)][t(926)];
        r.promptIds[t(452)](i), Bi(i);
      }
  } catch (n) {
    nx(t(1446), n[t(837)]), r[t(2591)] = !0, r[t(2109)] = { "-1": n[t(225)] || n[t(766)]() };
  }
  return r;
}
function Bi(o) {
  let x, t;
  const r = new Promise((e, s) => {
    x = e, t = s;
  });
  je.set(o, { promise: r, resolveImage: x, rejectImage: t });
}
function Zi({ hasError: o, generalError: x, nodeErrors: t }) {
  const r = a;
  o && (x ? P0.store.setState({ lastError: x }) : P0[r(2585)].setState({ widgetableErrors: t }));
}
async function* Wi(o) {
  const x = a, t = /* @__PURE__ */ new Map();
  for (const r of o) {
    const e = je[x(1075)](r);
    e && t[x(758)](r, e[x(2447)]);
  }
  if (t[x(2715)] !== 0)
    for (nx("waiting for queue prompt"); t.size > 0; ) {
      const r = Array.from(t[x(1587)]()), e = r[x(1649)](([i, c]) => c[x(2403)]((u) => ({ prompt_id: i, images: u }))), { prompt_id: s, images: n } = await Promise[x(2806)](e);
      nx(x(2384), s), t[x(2215)](s), je[x(2215)](s), yield { success: !0, prompt_ids: [s], images: n };
    }
}
function Ki(o) {
  const x = a, t = {};
  return Object[x(750)](o).forEach((r) => {
    const e = x, s = r[e(628)](":")[0], n = N0.graph[e(1102)].find((i) => i.id == s);
    t[s] = "[" + ((n == null ? void 0 : n[e(1266)]) || s) + "]" + o[r][e(1672)][e(1649)](JSON.stringify).join(`
`);
  }), t;
}
const Gi = ox[a(243)]("actions:util");
P0.implementAction(a(782), async (o) => {
  const x = a;
  return o != null && o.hostVersion && Gi(x(1600), o[x(1304)]), { comfyVersion: "510", hostVersion: (o == null ? void 0 : o[x(1304)]) ?? "" };
}), P0.implementAction(a(658), async (o) => {
  const x = a, { node_id: t, title: r } = o, e = N0[x(1103)][x(1102)].find((s) => s.id == t);
  if (!e) throw new Error(x(2749));
  return e[x(1266)] = r, e.setProperty("sdppp_widgetable_title", r), { success: !0 };
}), P0[a(230)](a(1198), async () => {
  const o = a, x = await fetch(o(1927));
  return x[o(2861)] == 404 ? { error: Yt("ComfyManager not found, cannot reboot"), success: !1 } : x[o(2861)] == 200 ? { success: !0 } : { error: Yt("Failed to reboot ComfyUI") + x.statusText, success: !1 };
}), P0[a(230)](a(2291), async (o) => {
  const x = a, { api_key: t } = o;
  return localStorage[x(1598)](x(2419), t), location[x(1067)](), { success: !0 };
}), P0[a(230)]("logout", async () => {
  const o = a;
  return document[o(1246)](o(1986)).parentElement[o(979)](), { success: !0 };
});
function Ji(o) {
  const x = a, t = atob(o), r = t[x(692)], e = new Uint8Array(r);
  for (let s = 0; s < r; s++)
    e[s] = t[x(2170)](s);
  return e;
}
P0[a(230)](a(531), async (o, x, t) => {
  const r = a, { fileName: e, overwrite: s = !0, mimeType: n = "image/png", dataBase64: i } = o;
  if (t != null && t[r(532)]) throw new DOMException(r(1762), "AbortError");
  const c = Ji(i), u = new Blob([c], { type: n }), d = new FormData();
  d.append("image", u), d.append(r(2073), e), d[r(1405)]("overwrite", r(s ? 2704 : 2205));
  const f = await fetch(r(1912), { method: r(1879), body: d, signal: t });
  if (!f.ok) throw new Error(r(2507) + f[r(1503)]);
  const l = await f.json();
  return { name: l[r(961)] + "/" + l[r(1055)] };
});
const Ks = "2025-06-18", Qi = [Ks, a(2754), a(2021), a(1537)], Ox = a(2082), Gs = K0([g(), W().int()]), Js = g(), Xi = S({ progressToken: B(Gs) })[a(2303)](), re = S({ _meta: B(Xi) }).passthrough(), xe = S({ method: g(), params: B(re) }), ix = S({ _meta: B(S({}).passthrough()) })[a(2303)](), pe = S({ method: g(), params: B(ix) }), se = S({ _meta: B(S({})[a(2303)]()) })[a(2303)](), _x = K0([g(), W().int()]), Qs = S({ jsonrpc: t0(Ox), id: _x })[a(2107)](xe)[a(1450)](), Yi = (o) => Qs[a(2373)](o).success, Xs = S({ jsonrpc: t0(Ox) })[a(2107)](pe)[a(1450)](), e2 = (o) => Xs.safeParse(o)[a(377)], Ys = S({ jsonrpc: t0(Ox), id: _x, result: se })[a(1450)](), ar = (o) => Ys[a(2373)](o).success;
var ye;
(function(o) {
  const x = a;
  o[o[x(2561)] = -32e3] = x(2561), o[o[x(1736)] = -32001] = x(1736), o[o[x(920)] = -32700] = "ParseError", o[o[x(1286)] = -32600] = x(1286), o[o.MethodNotFound = -32601] = x(714), o[o[x(1718)] = -32602] = "InvalidParams", o[o[x(688)] = -32603] = x(688);
})(ye || (ye = {}));
const en = S({ jsonrpc: t0(Ox), id: _x, error: S({ code: W()[a(1691)](), message: g(), data: B(Se()) }) })[a(1450)](), x2 = (o) => en[a(2373)](o)[a(377)];
K0([Qs, Xs, Ys, en]);
const ta = se[a(1450)](), aa = pe.extend({ method: t0(a(919)), params: ix[a(243)]({ requestId: _x, reason: g()[a(1027)]() }) }), cx = S({ name: g(), title: B(g()) }).passthrough(), xn = cx[a(243)]({ version: g() }), t2 = S({ experimental: B(S({})[a(2303)]()), sampling: B(S({})[a(2303)]()), elicitation: B(S({}).passthrough()), roots: B(S({ listChanged: B(e0()) })[a(2303)]()) })[a(2303)](), tn = xe.extend({ method: t0("initialize"), params: re[a(243)]({ protocolVersion: g(), capabilities: t2, clientInfo: xn }) }), a2 = S({ experimental: B(S({})[a(2303)]()), logging: B(S({})[a(2303)]()), completions: B(S({})[a(2303)]()), prompts: B(S({ listChanged: B(e0()) })[a(2303)]()), resources: B(S({ subscribe: B(e0()), listChanged: B(e0()) }).passthrough()), tools: B(S({ listChanged: B(e0()) }).passthrough()) })[a(2303)](), r2 = se.extend({ protocolVersion: g(), capabilities: a2, serverInfo: xn, instructions: B(g()) }), an = pe[a(243)]({ method: t0(a(2698)) }), ra = xe[a(243)]({ method: t0(a(2147)) }), s2 = S({ progress: W(), total: B(W()), message: B(g()) }).passthrough(), sa = pe[a(243)]({ method: t0(a(1058)), params: ix[a(2107)](s2).extend({ progressToken: Gs }) }), Dx = xe[a(243)]({ params: re[a(243)]({ cursor: B(Js) })[a(1027)]() }), jx = se[a(243)]({ nextCursor: B(Js) }), rn = S({ uri: g(), mimeType: B(g()), _meta: B(S({})[a(2303)]()) }).passthrough(), sn = rn[a(243)]({ text: g() }), nn = rn[a(243)]({ blob: g()[a(1129)]() }), on = cx[a(243)]({ uri: g(), description: B(g()), mimeType: B(g()), _meta: B(S({})[a(2303)]()) }), n2 = cx[a(243)]({ uriTemplate: g(), description: B(g()), mimeType: B(g()), _meta: B(S({}).passthrough()) }), o2 = Dx[a(243)]({ method: t0(a(843)) }), i2 = jx[a(243)]({ resources: v0(on) }), c2 = Dx[a(243)]({ method: t0("resources/templates/list") }), u2 = jx[a(243)]({ resourceTemplates: v0(n2) }), d2 = xe.extend({ method: t0(a(489)), params: re.extend({ uri: g() }) }), f2 = se.extend({ contents: v0(K0([sn, nn])) }), l2 = pe[a(243)]({ method: t0(a(2188)) }), h2 = xe.extend({ method: t0(a(1647)), params: re[a(243)]({ uri: g() }) }), p2 = xe[a(243)]({ method: t0(a(1796)), params: re[a(243)]({ uri: g() }) }), m2 = pe[a(243)]({ method: t0(a(1271)), params: ix.extend({ uri: g() }) }), b2 = S({ name: g(), description: B(g()), required: B(e0()) }).passthrough(), g2 = cx[a(243)]({ description: B(g()), arguments: B(v0(b2)), _meta: B(S({}).passthrough()) }), y2 = Dx.extend({ method: t0(a(2015)) }), v2 = jx[a(243)]({ prompts: v0(g2) }), w2 = xe[a(243)]({ method: t0(a(324)), params: re[a(243)]({ name: g(), arguments: B(D0(g())) }) }), ca = S({ type: t0("text"), text: g(), _meta: B(S({})[a(2303)]()) })[a(2303)](), ua = S({ type: t0("image"), data: g().base64(), mimeType: g(), _meta: B(S({})[a(2303)]()) })[a(2303)](), da = S({ type: t0(a(878)), data: g()[a(1129)](), mimeType: g(), _meta: B(S({})[a(2303)]()) })[a(2303)](), S2 = S({ type: t0("resource"), resource: K0([sn, nn]), _meta: B(S({})[a(2303)]()) })[a(2303)](), k2 = on.extend({ type: t0(a(2502)) }), cn = K0([ca, ua, da, k2, S2]), P2 = S({ role: R0([a(2565), a(1333)]), content: cn }).passthrough(), I2 = se[a(243)]({ description: B(g()), messages: v0(P2) }), E2 = pe[a(243)]({ method: t0(a(1926)) }), R2 = S({ title: B(g()), readOnlyHint: B(e0()), destructiveHint: B(e0()), idempotentHint: B(e0()), openWorldHint: B(e0()) }).passthrough(), C2 = cx.extend({ description: B(g()), inputSchema: S({ type: t0(a(544)), properties: B(S({})[a(2303)]()), required: B(v0(g())) })[a(2303)](), outputSchema: B(S({ type: t0(a(544)), properties: B(S({})[a(2303)]()), required: B(v0(g())) })[a(2303)]()), annotations: B(R2), _meta: B(S({})[a(2303)]()) }), F2 = Dx.extend({ method: t0("tools/list") }), N2 = jx.extend({ tools: v0(C2) }), un = se[a(243)]({ content: v0(cn).default([]), structuredContent: S({})[a(2303)]().optional(), isError: B(e0()) });
un.or(se[a(243)]({ toolResult: Se() }));
const T2 = xe[a(243)]({ method: t0(a(2072)), params: re[a(243)]({ name: g(), arguments: B(D0(Se())) }) }), q2 = pe[a(243)]({ method: t0("notifications/tools/list_changed") }), dn = R0([a(2297), a(2381), "notice", a(2549), a(948), "critical", "alert", a(369)]), A2 = xe[a(243)]({ method: t0("logging/setLevel"), params: re[a(243)]({ level: dn }) }), O2 = pe[a(243)]({ method: t0(a(1440)), params: ix[a(243)]({ level: dn, logger: B(g()), data: Se() }) }), _2 = S({ name: g()[a(1027)]() })[a(2303)](), D2 = S({ hints: B(v0(_2)), costPriority: B(W()[a(1279)](0)[a(1393)](1)), speedPriority: B(W().min(0)[a(1393)](1)), intelligencePriority: B(W()[a(1279)](0)[a(1393)](1)) })[a(2303)](), j2 = S({ role: R0(["user", a(1333)]), content: K0([ca, ua, da]) })[a(2303)](), M2 = xe[a(243)]({ method: t0(a(889)), params: re.extend({ messages: v0(j2), systemPrompt: B(g()), includeContext: B(R0([a(1798), "thisServer", a(965)])), temperature: B(W()), maxTokens: W()[a(1691)](), stopSequences: B(v0(g())), metadata: B(S({})[a(2303)]()), modelPreferences: B(D2) }) }), fn = se[a(243)]({ model: g(), stopReason: B(R0(["endTurn", a(844), a(1300)]).or(g())), role: R0([a(2565), a(1333)]), content: $s("type", [ca, ua, da]) }), L2 = S({ type: t0(a(1146)), title: B(g()), description: B(g()), default: B(e0()) })[a(2303)](), $2 = S({ type: t0(a(2161)), title: B(g()), description: B(g()), minLength: B(W()), maxLength: B(W()), format: B(R0([a(2146), a(2396), a(959), "date-time"])) })[a(2303)](), U2 = S({ type: R0([a(2153), a(1449)]), title: B(g()), description: B(g()), minimum: B(W()), maximum: B(W()) })[a(2303)](), H2 = S({ type: t0(a(2161)), title: B(g()), description: B(g()), enum: v0(g()), enumNames: B(v0(g())) }).passthrough(), z2 = K0([L2, $2, U2, H2]), V2 = xe.extend({ method: t0(a(221)), params: re[a(243)]({ message: g(), requestedSchema: S({ type: t0("object"), properties: D0(g(), z2), required: B(v0(g())) })[a(2303)]() }) }), ln = se.extend({ action: R0([a(1249), a(803), a(867)]), content: B(D0(g(), Se())) }), B2 = S({ type: t0(a(2256)), uri: g() })[a(2303)](), Z2 = S({ type: t0(a(1290)), name: g() })[a(2303)](), W2 = xe[a(243)]({ method: t0("completion/complete"), params: re[a(243)]({ ref: K0([Z2, B2]), argument: S({ name: g(), value: g() })[a(2303)](), context: B(S({ arguments: B(D0(g(), g())) })) }) }), K2 = se[a(243)]({ completion: S({ values: v0(g())[a(1393)](100), total: B(W()[a(1691)]()), hasMore: B(e0()) })[a(2303)]() }), G2 = S({ uri: g()[a(1955)](a(2465)), name: B(g()), _meta: B(S({}).passthrough()) })[a(2303)](), J2 = xe[a(243)]({ method: t0("roots/list") }), hn = se[a(243)]({ roots: v0(G2) }), Q2 = pe[a(243)]({ method: t0(a(1346)) });
K0([ra, tn, W2, A2, w2, y2, o2, c2, d2, h2, p2, T2, F2]), K0([aa, sa, an, Q2]), K0([ta, fn, ln, hn]), K0([ra, M2, V2, J2]), K0([aa, sa, O2, m2, l2, q2, E2]), K0([ta, r2, K2, I2, v2, i2, u2, f2, un, N2]);
class Ae extends Error {
  constructor(x, t, r) {
    const e = a;
    super(e(2778) + x + ": " + t), this[e(1172)] = x, this.data = r, this[e(1055)] = e(1724);
  }
}
const X2 = 6e4;
class Y2 {
  constructor(x) {
    const t = a;
    this[t(1817)] = x, this[t(617)] = 0, this[t(2623)] = /* @__PURE__ */ new Map(), this[t(968)] = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this[t(704)] = /* @__PURE__ */ new Map(), this[t(1138)] = /* @__PURE__ */ new Map(), this[t(620)] = /* @__PURE__ */ new Set(), this[t(1472)](aa, (r) => {
      const e = t, s = this._requestHandlerAbortControllers.get(r[e(1181)][e(1241)]);
      s == null || s[e(1284)](r[e(1181)].reason);
    }), this[t(1472)](sa, (r) => {
      this[t(1013)](r);
    }), this[t(437)](ra, (r) => ({}));
  }
  [a(2371)](x, t, r, e, s = !1) {
    const n = a;
    this[n(1138)][n(758)](x, { timeoutId: setTimeout(e, t), startTime: Date[n(940)](), timeout: t, maxTotalTimeout: r, resetTimeoutOnProgress: s, onTimeout: e });
  }
  [a(982)](x) {
    const t = a, r = this[t(1138)][t(1075)](x);
    if (!r) return !1;
    const e = Date[t(940)]() - r[t(1670)];
    if (r[t(885)] && e >= r[t(885)])
      throw this[t(1138)][t(2215)](x), new Ae(ye[t(1736)], "Maximum total timeout exceeded", { maxTotalTimeout: r[t(885)], totalElapsed: e });
    return clearTimeout(r.timeoutId), r.timeoutId = setTimeout(r[t(799)], r[t(1242)]), !0;
  }
  [a(433)](x) {
    const t = a, r = this[t(1138)][t(1075)](x);
    r && (clearTimeout(r[t(2179)]), this[t(1138)].delete(x));
  }
  async [a(2251)](x) {
    const t = a;
    var r, e, s;
    this[t(1257)] = x;
    const n = (r = this[t(2562)]) === null || r === void 0 ? void 0 : r[t(1292)];
    this._transport.onclose = () => {
      const u = t;
      n == null || n(), this[u(2138)]();
    };
    const i = (e = this.transport) === null || e === void 0 ? void 0 : e.onerror;
    this[t(1257)][t(656)] = (u) => {
      const d = t;
      i == null || i(u), this[d(259)](u);
    };
    const c = (s = this[t(1257)]) === null || s === void 0 ? void 0 : s.onmessage;
    this[t(1257)][t(555)] = (u, d) => {
      const f = t;
      c == null || c(u, d), ar(u) || x2(u) ? this._onresponse(u) : Yi(u) ? this[f(1388)](u, d) : e2(u) ? this._onnotification(u) : this[f(259)](new Error(f(1933) + JSON[f(2625)](u)));
    }, await this[t(1257)][t(2604)]();
  }
  [a(2138)]() {
    const x = a;
    var t;
    const r = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this[x(704)][x(899)](), this[x(620)][x(899)](), this[x(1257)] = void 0, (t = this[x(1292)]) === null || t === void 0 || t[x(1994)](this);
    const e = new Ae(ye[x(2561)], x(880));
    for (const s of r.values())
      s(e);
  }
  _onerror(x) {
    const t = a;
    var r;
    (r = this[t(656)]) === null || r === void 0 || r[t(1994)](this, x);
  }
  _onnotification(x) {
    const t = a;
    var r;
    const e = (r = this._notificationHandlers.get(x[t(819)])) !== null && r !== void 0 ? r : this.fallbackNotificationHandler;
    e !== void 0 && Promise[t(1571)]()[t(2403)](() => e(x))[t(1995)]((s) => this[t(259)](new Error(t(2574) + s)));
  }
  [a(1388)](x, t) {
    const r = a;
    var e, s, n, i;
    const c = (e = this._requestHandlers[r(1075)](x[r(819)])) !== null && e !== void 0 ? e : this.fallbackRequestHandler;
    if (c === void 0) {
      (s = this[r(1257)]) === null || s === void 0 || s[r(405)]({ jsonrpc: "2.0", id: x.id, error: { code: ye[r(714)], message: r(1256) } })[r(1995)]((f) => this[r(259)](new Error(r(2873) + f)));
      return;
    }
    const u = new AbortController();
    this[r(968)][r(758)](x.id, u);
    const d = { signal: u[r(1562)], sessionId: (n = this[r(1257)]) === null || n === void 0 ? void 0 : n[r(1971)], _meta: (i = x[r(1181)]) === null || i === void 0 ? void 0 : i[r(2838)], sendNotification: (f) => this[r(1750)](f, { relatedRequestId: x.id }), sendRequest: (f, l, b) => this.request(f, l, { ...b, relatedRequestId: x.id }), authInfo: t == null ? void 0 : t[r(2039)], requestId: x.id, requestInfo: t == null ? void 0 : t[r(1141)] };
    Promise.resolve()[r(2403)](() => c(x, d)).then((f) => {
      const l = r;
      var b;
      if (!u[l(1562)][l(532)])
        return (b = this[l(1257)]) === null || b === void 0 ? void 0 : b[l(405)]({ result: f, jsonrpc: l(2082), id: x.id });
    }, (f) => {
      const l = r;
      var b, h;
      if (!u.signal[l(532)])
        return (b = this[l(1257)]) === null || b === void 0 ? void 0 : b.send({ jsonrpc: l(2082), id: x.id, error: { code: Number[l(1283)](f.code) ? f[l(1172)] : ye[l(688)], message: (h = f.message) !== null && h !== void 0 ? h : l(1845) } });
    }).catch((f) => this[r(259)](new Error(r(2664) + f))).finally(() => {
      this[r(968)].delete(x.id);
    });
  }
  _onprogress(x) {
    const t = a, { progressToken: r, ...e } = x[t(1181)], s = Number(r), n = this[t(704)][t(1075)](s);
    if (!n) {
      this._onerror(new Error("Received a progress notification for an unknown token: " + JSON[t(2625)](x)));
      return;
    }
    const i = this._responseHandlers[t(1075)](s), c = this[t(1138)].get(s);
    if (c && i && c.resetTimeoutOnProgress) try {
      this[t(982)](s);
    } catch (u) {
      i(u);
      return;
    }
    n(e);
  }
  [a(2464)](x) {
    const t = a, r = Number(x.id), e = this[t(1707)][t(1075)](r);
    if (e === void 0) {
      this._onerror(new Error("Received a response for an unknown message ID: " + JSON[t(2625)](x)));
      return;
    }
    if (this[t(1707)].delete(r), this[t(704)].delete(r), this[t(433)](r), ar(x)) e(x);
    else {
      const s = new Ae(x[t(948)].code, x[t(948)][t(225)], x[t(948)][t(909)]);
      e(s);
    }
  }
  get transport() {
    return this._transport;
  }
  async [a(1278)]() {
    const x = a;
    var t;
    await ((t = this[x(1257)]) === null || t === void 0 ? void 0 : t[x(1278)]());
  }
  [a(563)](x, t, r) {
    const { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n } = r ?? {};
    return new Promise((i, c) => {
      const u = K;
      var d, f, l, b, h, m;
      if (!this._transport) {
        c(new Error(u(2189)));
        return;
      }
      ((d = this._options) === null || d === void 0 ? void 0 : d[u(2356)]) === !0 && this[u(1404)](x[u(819)]), (f = r == null ? void 0 : r[u(1562)]) === null || f === void 0 || f[u(378)]();
      const v = this[u(617)]++, k = { ...x, jsonrpc: "2.0", id: v };
      r != null && r[u(2647)] && (this[u(704)][u(758)](v, r[u(2647)]), k.params = { ...x[u(1181)], _meta: { ...((l = x[u(1181)]) === null || l === void 0 ? void 0 : l[u(2838)]) || {}, progressToken: v } });
      const I = (R) => {
        const P = u;
        var N;
        this._responseHandlers[P(2215)](v), this[P(704)][P(2215)](v), this[P(433)](v), (N = this[P(1257)]) === null || N === void 0 || N[P(405)]({ jsonrpc: P(2082), method: P(919), params: { requestId: v, reason: String(R) } }, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n })[P(1995)]((_) => this._onerror(new Error(P(768) + _))), c(R);
      };
      this[u(1707)].set(v, (R) => {
        const P = u;
        var N;
        if (!(!((N = r == null ? void 0 : r.signal) === null || N === void 0) && N[P(532)])) {
          if (R instanceof Error) return c(R);
          try {
            const _ = t.parse(R.result);
            i(_);
          } catch (_) {
            c(_);
          }
        }
      }), (b = r == null ? void 0 : r[u(1562)]) === null || b === void 0 || b[u(1836)](u(1284), () => {
        const R = u;
        var P;
        I((P = r == null ? void 0 : r[R(1562)]) === null || P === void 0 ? void 0 : P[R(1264)]);
      });
      const A = (h = r == null ? void 0 : r.timeout) !== null && h !== void 0 ? h : X2, T = () => I(new Ae(ye[u(1736)], u(2349), { timeout: A }));
      this[u(2371)](v, A, r == null ? void 0 : r[u(885)], T, (m = r == null ? void 0 : r[u(787)]) !== null && m !== void 0 ? m : !1), this._transport[u(405)](k, { relatedRequestId: e, resumptionToken: s, onresumptiontoken: n }).catch((R) => {
        this[u(433)](v), c(R);
      });
    });
  }
  async [a(1750)](x, t) {
    const r = a;
    var e, s;
    if (!this._transport) throw new Error("Not connected");
    if (this[r(299)](x[r(819)]), ((s = (e = this[r(1817)]) === null || e === void 0 ? void 0 : e[r(571)]) !== null && s !== void 0 ? s : []).includes(x[r(819)]) && !x[r(1181)] && !(t != null && t[r(1315)])) {
      if (this._pendingDebouncedNotifications[r(2075)](x[r(819)])) return;
      this._pendingDebouncedNotifications[r(2655)](x.method), Promise[r(1571)]()[r(2403)](() => {
        const u = r;
        var d;
        if (this[u(620)][u(2215)](x[u(819)]), !this[u(1257)]) return;
        const f = { ...x, jsonrpc: u(2082) };
        (d = this[u(1257)]) === null || d === void 0 || d[u(405)](f, t)[u(1995)]((l) => this[u(259)](l));
      });
      return;
    }
    const c = { ...x, jsonrpc: r(2082) };
    await this[r(1257)][r(405)](c, t);
  }
  [a(437)](x, t) {
    const r = a, e = x[r(2068)][r(819)].value;
    this[r(2204)](e), this[r(2623)][r(758)](e, (s, n) => {
      const i = r;
      return Promise.resolve(t(x[i(706)](s), n));
    });
  }
  removeRequestHandler(x) {
    this[a(2623)].delete(x);
  }
  [a(2703)](x) {
    const t = a;
    if (this[t(2623)][t(2075)](x)) throw new Error("A request handler for " + x + t(1008));
  }
  [a(1472)](x, t) {
    const r = a;
    this[r(964)][r(758)](x[r(2068)][r(819)].value, (e) => Promise.resolve(t(x[r(706)](e))));
  }
  removeNotificationHandler(x) {
    const t = a;
    this[t(964)][t(2215)](x);
  }
}
function ec(o, x) {
  const t = a;
  return Object[t(1587)](x)[t(172)]((r, [e, s]) => (s && typeof s === t(544) ? r[e] = r[e] ? { ...r[e], ...s } : s : r[e] = s, r), { ...o });
}
var Xe = { exports: {} }, xc = Xe[a(2519)], rr;
function tc() {
  const o = a;
  return rr || (rr = 1, (function(x, t) {
    (function(r, e) {
      e(t);
    })(xc, function(r) {
      const e = K;
      function s() {
        const E = K;
        for (var p = arguments[E(692)], y = Array(p), w = 0; w < p; w++)
          y[w] = arguments[w];
        if (y[E(692)] > 1) {
          y[0] = y[0][E(2088)](0, -1);
          for (var L = y[E(692)] - 1, $ = 1; $ < L; ++$)
            y[$] = y[$][E(2088)](1, -1);
          return y[L] = y[L].slice(1), y[E(2137)]("");
        } else return y[0];
      }
      function n(E) {
        return K(1909) + E + ")";
      }
      function i(E) {
        const p = K;
        return E === void 0 ? p(420) : E === null ? p(845) : Object[p(2249)][p(766)].call(E)[p(628)](" ")[p(2231)]()[p(628)]("]")[p(252)]()[p(556)]();
      }
      function c(E) {
        return E[K(2520)]();
      }
      function u(E) {
        const p = K;
        return E != null ? E instanceof Array ? E : typeof E.length !== p(2153) || E[p(628)] || E[p(678)] || E[p(1994)] ? [E] : Array[p(2249)][p(2088)][p(1994)](E) : [];
      }
      function d(E, p) {
        var y = E;
        if (p) for (var w in p)
          y[w] = p[w];
        return y;
      }
      function f(E) {
        const p = K;
        var y = p(1251), w = p(1830), L = s(w, p(1671)), $ = n(n(p(611) + L + "%" + L + L + "%" + L + L) + "|" + n("%[89A-Fa-f]" + L + "%" + L + L) + "|" + n("%" + L + L)), n0 = p(1296), d0 = p(2750), I0 = s(n0, d0), j0 = E ? p(2404) : "[]", V0 = E ? p(2330) : "[]", E0 = s(y, w, p(2036), j0);
        n(y + s(y, w, p(2098)) + "*"), n(n($ + "|" + s(E0, d0, "[\\:]")) + "*");
        var _0 = n(n(p(1009)) + "|" + n(p(657) + w) + "|" + n("1" + w + w) + "|" + n(p(1745) + w) + p(1492) + w), B0 = n(_0 + "\\." + _0 + "\\." + _0 + "\\." + _0), g0 = n(L + p(1684)), $0 = n(n(g0 + "\\:" + g0) + "|" + B0), Z0 = n(n(g0 + "\\:") + p(1265) + $0), U0 = n(p(327) + n(g0 + "\\:") + p(2494) + $0), Pe = n(n(g0) + p(2255) + n(g0 + "\\:") + p(1194) + $0), ie = n(n(n(g0 + "\\:") + p(1956) + g0) + "?\\:\\:" + n(g0 + "\\:") + p(224) + $0), ce = n(n(n(g0 + "\\:") + p(1373) + g0) + p(2255) + n(g0 + "\\:") + p(2385) + $0), $e = n(n(n(g0 + "\\:") + "{0,3}" + g0) + p(2255) + g0 + "\\:" + $0), Te = n(n(n(g0 + "\\:") + p(1826) + g0) + "?\\:\\:" + $0), te = n(n(n(g0 + "\\:") + p(2166) + g0) + p(2255) + g0), ue = n(n(n(g0 + "\\:") + p(2355) + g0) + "?\\:\\:"), Ie = n([Z0, U0, Pe, ie, ce, $e, Te, te, ue][p(2137)]("|")), be = n(n(E0 + "|" + $) + "+");
        n(p(1679) + L + p(2365) + s(E0, d0, "[\\:]") + "+"), n(n($ + "|" + s(E0, d0)) + "*");
        var de = n($ + "|" + s(E0, d0, p(2006)));
        return n(n($ + "|" + s(E0, d0, "[\\@]")) + "+"), n(n(de + "|" + s("[\\/\\?]", V0)) + "*"), { NOT_SCHEME: new RegExp(s(p(1897), y, w, p(2098)), "g"), NOT_USERINFO: new RegExp(s(p(717), E0, d0), "g"), NOT_HOST: new RegExp(s(p(2149), E0, d0), "g"), NOT_PATH: new RegExp(s(p(2194), E0, d0), "g"), NOT_PATH_NOSCHEME: new RegExp(s(p(1197), E0, d0), "g"), NOT_QUERY: new RegExp(s(p(245), E0, d0, p(371), V0), "g"), NOT_FRAGMENT: new RegExp(s("[^\\%]", E0, d0, "[\\:\\@\\/\\?]"), "g"), ESCAPE: new RegExp(s("[^]", E0, d0), "g"), UNRESERVED: new RegExp(E0, "g"), OTHER_CHARS: new RegExp(s(p(245), E0, I0), "g"), PCT_ENCODED: new RegExp($, "g"), IPV4ADDRESS: new RegExp("^(" + B0 + ")$"), IPV6ADDRESS: new RegExp(p(1293) + Ie + ")" + n(n(p(1254) + L + p(734)) + "(" + be + ")") + p(449)) };
      }
      var l = f(!1), b = f(!0), h = /* @__PURE__ */ (function() {
        function E(p, y) {
          const w = K;
          var L = [], $ = !0, n0 = !1, d0 = void 0;
          try {
            for (var I0 = p[Symbol[w(2248)]](), j0; !($ = (j0 = I0[w(2596)]())[w(1815)]) && (L[w(452)](j0[w(1732)]), !(y && L[w(692)] === y)); $ = !0)
              ;
          } catch (V0) {
            n0 = !0, d0 = V0;
          } finally {
            try {
              !$ && I0.return && I0[w(2634)]();
            } finally {
              if (n0) throw d0;
            }
          }
          return L;
        }
        return function(p, y) {
          const w = K;
          if (Array[w(1783)](p)) return p;
          if (Symbol[w(2248)] in Object(p)) return E(p, y);
          throw new TypeError(w(2711));
        };
      })(), m = function(E) {
        const p = K;
        if (Array.isArray(E)) {
          for (var y = 0, w = Array(E[p(692)]); y < E.length; y++) w[y] = E[y];
          return w;
        } else return Array[p(2781)](E);
      }, v = 2147483647, k = 36, I = 1, A = 26, T = 38, R = 700, P = 72, N = 128, _ = "-", D = /^xn--/, j = /[^\0-\x7E]/, F = /[\x2E\u3002\uFF0E\uFF61]/g, C = { overflow: e(1240), "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, H = k - I, U = Math[e(635)], z = String[e(660)];
      function G(E) {
        throw new RangeError(C[E]);
      }
      function i0(E, p) {
        const y = e;
        for (var w = [], L = E[y(692)]; L--; )
          w[L] = p(E[L]);
        return w;
      }
      function u0(E, p) {
        const y = e;
        var w = E[y(628)]("@"), L = "";
        w[y(692)] > 1 && (L = w[0] + "@", E = w[1]), E = E[y(575)](F, ".");
        var $ = E[y(628)]("."), n0 = i0($, p).join(".");
        return L + n0;
      }
      function l0(E) {
        const p = e;
        for (var y = [], w = 0, L = E[p(692)]; w < L; ) {
          var $ = E[p(2170)](w++);
          if ($ >= 55296 && $ <= 56319 && w < L) {
            var n0 = E[p(2170)](w++);
            (n0 & 64512) == 56320 ? y.push((($ & 1023) << 10) + (n0 & 1023) + 65536) : (y.push($), w--);
          } else y[p(452)]($);
        }
        return y;
      }
      var o0 = function(p) {
        const y = e;
        return String[y(1439)][y(2242)](String, m(p));
      }, f0 = function(p) {
        return p - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : k;
      }, k0 = function(p, y) {
        return p + 22 + 75 * (p < 26) - ((y != 0) << 5);
      }, S0 = function(p, y, w) {
        var L = 0;
        for (p = w ? U(p / R) : p >> 1, p += U(p / y); p > H * A >> 1; L += k)
          p = U(p / H);
        return U(L + (H + 1) * p / (p + T));
      }, M0 = function(p) {
        const y = e;
        var w = [], L = p[y(692)], $ = 0, n0 = N, d0 = P, I0 = p[y(1923)](_);
        I0 < 0 && (I0 = 0);
        for (var j0 = 0; j0 < I0; ++j0)
          p[y(2170)](j0) >= 128 && G(y(1695)), w[y(452)](p[y(2170)](j0));
        for (var V0 = I0 > 0 ? I0 + 1 : 0; V0 < L; ) {
          for (var E0 = $, _0 = 1, B0 = k; ; B0 += k) {
            V0 >= L && G(y(2172));
            var g0 = f0(p[y(2170)](V0++));
            (g0 >= k || g0 > U((v - $) / _0)) && G(y(1218)), $ += g0 * _0;
            var $0 = B0 <= d0 ? I : B0 >= d0 + A ? A : B0 - d0;
            if (g0 < $0) break;
            var Z0 = k - $0;
            _0 > U(v / Z0) && G(y(1218)), _0 *= Z0;
          }
          var U0 = w.length + 1;
          d0 = S0($ - E0, U0, E0 == 0), U($ / U0) > v - n0 && G(y(1218)), n0 += U($ / U0), $ %= U0, w[y(2605)]($++, 0, n0);
        }
        return String.fromCodePoint[y(2242)](String, w);
      }, F0 = function(p) {
        const y = e;
        var w = [];
        p = l0(p);
        var L = p.length, $ = N, n0 = 0, d0 = P, I0 = !0, j0 = !1, V0 = void 0;
        try {
          for (var E0 = p[Symbol[y(2248)]](), _0; !(I0 = (_0 = E0.next())[y(1815)]); I0 = !0) {
            var B0 = _0[y(1732)];
            B0 < 128 && w[y(452)](z(B0));
          }
        } catch (Ge) {
          j0 = !0, V0 = Ge;
        } finally {
          try {
            !I0 && E0.return && E0[y(2634)]();
          } finally {
            if (j0) throw V0;
          }
        }
        var g0 = w[y(692)], $0 = g0;
        for (g0 && w[y(452)](_); $0 < L; ) {
          var Z0 = v, U0 = !0, Pe = !1, ie = void 0;
          try {
            for (var ce = p[Symbol[y(2248)]](), $e; !(U0 = ($e = ce[y(2596)]())[y(1815)]); U0 = !0) {
              var Te = $e[y(1732)];
              Te >= $ && Te < Z0 && (Z0 = Te);
            }
          } catch (Ge) {
            Pe = !0, ie = Ge;
          } finally {
            try {
              !U0 && ce.return && ce.return();
            } finally {
              if (Pe) throw ie;
            }
          }
          var te = $0 + 1;
          Z0 - $ > U((v - n0) / te) && G(y(1218)), n0 += (Z0 - $) * te, $ = Z0;
          var ue = !0, Ie = !1, be = void 0;
          try {
            for (var de = p[Symbol[y(2248)]](), ka; !(ue = (ka = de.next()).done); ue = !0) {
              var Pa = ka[y(1732)];
              if (Pa < $ && ++n0 > v && G(y(1218)), Pa == $) {
                for (var ux = n0, dx = k; ; dx += k) {
                  var fx = dx <= d0 ? I : dx >= d0 + A ? A : dx - d0;
                  if (ux < fx) break;
                  var Ia = ux - fx, Ea = k - fx;
                  w[y(452)](z(k0(fx + Ia % Ea, 0))), ux = U(Ia / Ea);
                }
                w[y(452)](z(k0(ux, 0))), d0 = S0(n0, te, $0 == g0), n0 = 0, ++$0;
              }
            }
          } catch (Ge) {
            Ie = !0, be = Ge;
          } finally {
            try {
              !ue && de.return && de[y(2634)]();
            } finally {
              if (Ie) throw be;
            }
          }
          ++n0, ++$;
        }
        return w[y(2137)]("");
      }, J0 = function(p) {
        return u0(p, function(y) {
          const w = K;
          return D[w(1904)](y) ? M0(y.slice(4)[w(556)]()) : y;
        });
      }, O = function(p) {
        return u0(p, function(y) {
          const w = K;
          return j[w(1904)](y) ? w(1996) + F0(y) : y;
        });
      }, q = { version: e(2569), ucs2: { decode: l0, encode: o0 }, decode: M0, encode: F0, toASCII: O, toUnicode: J0 }, M = {};
      function Q(E) {
        const p = e;
        var y = E[p(2170)](0), w = void 0;
        return y < 16 ? w = "%0" + y[p(766)](16)[p(2520)]() : y < 128 ? w = "%" + y[p(766)](16)[p(2520)]() : y < 2048 ? w = "%" + (y >> 6 | 192)[p(766)](16).toUpperCase() + "%" + (y & 63 | 128)[p(766)](16)[p(2520)]() : w = "%" + (y >> 12 | 224)[p(766)](16)[p(2520)]() + "%" + (y >> 6 & 63 | 128).toString(16)[p(2520)]() + "%" + (y & 63 | 128)[p(766)](16)[p(2520)](), w;
      }
      function J(E) {
        const p = e;
        for (var y = "", w = 0, L = E[p(692)]; w < L; ) {
          var $ = parseInt(E[p(1887)](w + 1, 2), 16);
          if ($ < 128) y += String[p(660)]($), w += 3;
          else if ($ >= 194 && $ < 224) {
            if (L - w >= 6) {
              var n0 = parseInt(E[p(1887)](w + 4, 2), 16);
              y += String[p(660)](($ & 31) << 6 | n0 & 63);
            } else y += E[p(1887)](w, 6);
            w += 6;
          } else if ($ >= 224) {
            if (L - w >= 9) {
              var d0 = parseInt(E[p(1887)](w + 4, 2), 16), I0 = parseInt(E[p(1887)](w + 7, 2), 16);
              y += String.fromCharCode(($ & 15) << 12 | (d0 & 63) << 6 | I0 & 63);
            } else y += E[p(1887)](w, 9);
            w += 9;
          } else y += E.substr(w, 3), w += 3;
        }
        return y;
      }
      function V(E, p) {
        const y = e;
        function w(L) {
          const $ = K;
          var n0 = J(L);
          return n0.match(p[$(1522)]) ? n0 : L;
        }
        return E[y(747)] && (E.scheme = String(E[y(747)])[y(575)](p.PCT_ENCODED, w)[y(556)]()[y(575)](p[y(485)], "")), E[y(1049)] !== void 0 && (E.userinfo = String(E[y(1049)])[y(575)](p[y(2727)], w).replace(p[y(871)], Q)[y(575)](p[y(2727)], c)), E[y(957)] !== void 0 && (E[y(957)] = String(E.host)[y(575)](p[y(2727)], w)[y(556)]()[y(575)](p[y(2016)], Q)[y(575)](p[y(2727)], c)), E[y(2619)] !== void 0 && (E.path = String(E[y(2619)])[y(575)](p.PCT_ENCODED, w).replace(E[y(747)] ? p[y(1414)] : p[y(2140)], Q)[y(575)](p[y(2727)], c)), E[y(1511)] !== void 0 && (E[y(1511)] = String(E.query)[y(575)](p.PCT_ENCODED, w).replace(p.NOT_QUERY, Q)[y(575)](p[y(2727)], c)), E[y(2211)] !== void 0 && (E[y(2211)] = String(E[y(2211)])[y(575)](p[y(2727)], w)[y(575)](p[y(2735)], Q)[y(575)](p[y(2727)], c)), E;
      }
      function X(E) {
        return E[e(575)](/^0*(.*)/, "$1") || "0";
      }
      function s0(E, p) {
        const y = e;
        var w = E[y(430)](p[y(1253)]) || [], L = h(w, 2), $ = L[1];
        return $ ? $[y(628)](".")[y(1649)](X)[y(2137)](".") : E;
      }
      function c0(E, p) {
        const y = e;
        var w = E[y(430)](p[y(2783)]) || [], L = h(w, 3), $ = L[1], n0 = L[2];
        if ($) {
          for (var d0 = $.toLowerCase()[y(628)]("::").reverse(), I0 = h(d0, 2), j0 = I0[0], V0 = I0[1], E0 = V0 ? V0[y(628)](":")[y(1649)](X) : [], _0 = j0[y(628)](":")[y(1649)](X), B0 = p[y(1253)].test(_0[_0[y(692)] - 1]), g0 = B0 ? 7 : 8, $0 = _0[y(692)] - g0, Z0 = Array(g0), U0 = 0; U0 < g0; ++U0)
            Z0[U0] = E0[U0] || _0[$0 + U0] || "";
          B0 && (Z0[g0 - 1] = s0(Z0[g0 - 1], p));
          var Pe = Z0.reduce(function(te, ue, Ie) {
            const be = y;
            if (!ue || ue === "0") {
              var de = te[te[be(692)] - 1];
              de && de[be(1693)] + de.length === Ie ? de[be(692)]++ : te[be(452)]({ index: Ie, length: 1 });
            }
            return te;
          }, []), ie = Pe[y(1025)](function(te, ue) {
            return ue[y(692)] - te.length;
          })[0], ce = void 0;
          if (ie && ie[y(692)] > 1) {
            var $e = Z0[y(2088)](0, ie.index), Te = Z0[y(2088)](ie[y(1693)] + ie[y(692)]);
            ce = $e[y(2137)](":") + "::" + Te[y(2137)](":");
          } else ce = Z0[y(2137)](":");
          return n0 && (ce += "%" + n0), ce;
        } else return E;
      }
      var x0 = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, L0 = ""[e(430)](/(){0}/)[1] === void 0;
      function A0(E) {
        const p = e;
        var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = {}, L = y[p(1464)] !== !1 ? b : l;
        y[p(1203)] === p(649) && (E = (y[p(747)] ? y[p(747)] + ":" : "") + "//" + E);
        var $ = E[p(430)](x0);
        if ($) {
          L0 ? (w[p(747)] = $[1], w[p(1049)] = $[3], w[p(957)] = $[4], w[p(2782)] = parseInt($[5], 10), w[p(2619)] = $[6] || "", w[p(1511)] = $[7], w[p(2211)] = $[8], isNaN(w.port) && (w.port = $[5])) : (w.scheme = $[1] || void 0, w[p(1049)] = E[p(311)]("@") !== -1 ? $[3] : void 0, w[p(957)] = E[p(311)]("//") !== -1 ? $[4] : void 0, w[p(2782)] = parseInt($[5], 10), w[p(2619)] = $[6] || "", w[p(1511)] = E[p(311)]("?") !== -1 ? $[7] : void 0, w[p(2211)] = E.indexOf("#") !== -1 ? $[8] : void 0, isNaN(w[p(2782)]) && (w[p(2782)] = E[p(430)](/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? $[4] : void 0)), w[p(957)] && (w[p(957)] = c0(s0(w.host, L), L)), w[p(747)] === void 0 && w[p(1049)] === void 0 && w.host === void 0 && w.port === void 0 && !w[p(2619)] && w[p(1511)] === void 0 ? w[p(1203)] = p(2481) : w[p(747)] === void 0 ? w[p(1203)] = "relative" : w[p(2211)] === void 0 ? w[p(1203)] = p(1886) : w.reference = p(2396), y[p(1203)] && y[p(1203)] !== p(649) && y.reference !== w[p(1203)] && (w[p(948)] = w[p(948)] || p(1563) + y[p(1203)] + p(2173));
          var n0 = M[(y[p(747)] || w[p(747)] || "")[p(556)]()];
          if (!y.unicodeSupport && (!n0 || !n0[p(2125)])) {
            if (w[p(957)] && (y[p(2564)] || n0 && n0[p(2564)])) try {
              w.host = q[p(1528)](w.host.replace(L[p(2727)], J)[p(556)]());
            } catch (d0) {
              w[p(948)] = w[p(948)] || p(1204) + d0;
            }
            V(w, l);
          } else V(w, L);
          n0 && n0[p(706)] && n0[p(706)](w, y);
        } else w[p(948)] = w[p(948)] || p(2108);
        return w;
      }
      function H0(E, p) {
        const y = e;
        var w = p.iri !== !1 ? b : l, L = [];
        return E[y(1049)] !== void 0 && (L[y(452)](E.userinfo), L.push("@")), E.host !== void 0 && L.push(c0(s0(String(E.host), w), w)[y(575)](w[y(2783)], function($, n0, d0) {
          const I0 = y;
          return "[" + n0 + (d0 ? I0(990) + d0 : "") + "]";
        })), (typeof E.port === y(2153) || typeof E[y(2782)] === y(2161)) && (L.push(":"), L[y(452)](String(E.port))), L[y(692)] ? L[y(2137)]("") : void 0;
      }
      var w0 = /^\.\.?\//, G0 = /^\/\.(\/|$)/, ne = /^\/\.\.(\/|$)/, Q0 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function O0(E) {
        const p = e;
        for (var y = []; E.length; )
          if (E[p(430)](w0)) E = E[p(575)](w0, "");
          else if (E[p(430)](G0)) E = E[p(575)](G0, "/");
          else if (E[p(430)](ne)) E = E.replace(ne, "/"), y[p(2231)]();
          else if (E === "." || E === "..") E = "";
          else {
            var w = E[p(430)](Q0);
            if (w) {
              var L = w[0];
              E = E[p(2088)](L.length), y[p(452)](L);
            } else throw new Error(p(550));
          }
        return y.join("");
      }
      function z0(E) {
        const p = e;
        var y = arguments[p(692)] > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = y[p(1464)] ? b : l, L = [], $ = M[(y[p(747)] || E[p(747)] || "")[p(556)]()];
        if ($ && $[p(1417)] && $.serialize(E, y), E[p(957)] && !w[p(2783)][p(1904)](E[p(957)])) {
          if (y.domainHost || $ && $[p(2564)]) try {
            E.host = y[p(1464)] ? q[p(269)](E[p(957)]) : q[p(1528)](E[p(957)].replace(w[p(2727)], J)[p(556)]());
          } catch (I0) {
            E.error = E[p(948)] || "Host's domain name can not be converted to " + (y[p(1464)] ? "Unicode" : p(487)) + p(1868) + I0;
          }
        }
        V(E, w), y[p(1203)] !== p(649) && E[p(747)] && (L[p(452)](E[p(747)]), L[p(452)](":"));
        var n0 = H0(E, y);
        if (n0 !== void 0 && (y[p(1203)] !== "suffix" && L[p(452)]("//"), L.push(n0), E[p(2619)] && E.path[p(2158)](0) !== "/" && L.push("/")), E.path !== void 0) {
          var d0 = E[p(2619)];
          !y.absolutePath && (!$ || !$.absolutePath) && (d0 = O0(d0)), n0 === void 0 && (d0 = d0.replace(/^\/\//, "/%2F")), L.push(d0);
        }
        return E[p(1511)] !== void 0 && (L[p(452)]("?"), L[p(452)](E[p(1511)])), E[p(2211)] !== void 0 && (L.push("#"), L.push(E[p(2211)])), L.join("");
      }
      function Y0(E, p) {
        const y = e;
        var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, L = arguments[3], $ = {};
        return !L && (E = A0(z0(E, w), w), p = A0(z0(p, w), w)), w = w || {}, !w[y(2032)] && p[y(747)] ? ($.scheme = p[y(747)], $.userinfo = p.userinfo, $[y(957)] = p[y(957)], $[y(2782)] = p[y(2782)], $[y(2619)] = O0(p[y(2619)] || ""), $[y(1511)] = p[y(1511)]) : (p[y(1049)] !== void 0 || p.host !== void 0 || p[y(2782)] !== void 0 ? ($[y(1049)] = p[y(1049)], $[y(957)] = p.host, $[y(2782)] = p[y(2782)], $.path = O0(p[y(2619)] || ""), $.query = p[y(1511)]) : (p[y(2619)] ? (p.path[y(2158)](0) === "/" ? $[y(2619)] = O0(p[y(2619)]) : ((E[y(1049)] !== void 0 || E.host !== void 0 || E[y(2782)] !== void 0) && !E.path ? $[y(2619)] = "/" + p[y(2619)] : E[y(2619)] ? $[y(2619)] = E[y(2619)][y(2088)](0, E[y(2619)][y(1923)]("/") + 1) + p[y(2619)] : $[y(2619)] = p[y(2619)], $[y(2619)] = O0($.path)), $[y(1511)] = p[y(1511)]) : ($[y(2619)] = E.path, p.query !== void 0 ? $.query = p[y(1511)] : $[y(1511)] = E[y(1511)]), $.userinfo = E[y(1049)], $[y(957)] = E.host, $[y(2782)] = E[y(2782)]), $[y(747)] = E[y(747)]), $[y(2211)] = p[y(2211)], $;
      }
      function Me(E, p, y) {
        var L = d({ scheme: e(845) }, y);
        return z0(Y0(A0(E, L), A0(p, L), L, !0), L);
      }
      function Mx(E, p) {
        const y = e;
        return typeof E === y(2161) ? E = z0(A0(E, p), p) : i(E) === y(544) && (E = A0(z0(E, p), p)), E;
      }
      function kn(E, p, y) {
        const w = e;
        return typeof E === w(2161) ? E = z0(A0(E, y), y) : i(E) === w(544) && (E = z0(E, y)), typeof p === w(2161) ? p = z0(A0(p, y), y) : i(p) === w(544) && (p = z0(p, y)), E === p;
      }
      function Pn(E, p) {
        const y = e;
        return E && E[y(766)]()[y(575)](!p || !p[y(1464)] ? l[y(2811)] : b.ESCAPE, Q);
      }
      function me(E, p) {
        const y = e;
        return E && E[y(766)]().replace(!p || !p[y(1464)] ? l[y(2727)] : b.PCT_ENCODED, J);
      }
      var We = { scheme: e(2477), domainHost: !0, parse: function(p, y) {
        const w = e;
        return !p[w(957)] && (p.error = p[w(948)] || w(2003)), p;
      }, serialize: function(p, y) {
        const w = e;
        var L = String(p[w(747)])[w(556)]() === w(520);
        return (p[w(2782)] === (L ? 443 : 80) || p.port === "") && (p[w(2782)] = void 0), !p[w(2619)] && (p[w(2619)] = "/"), p;
      } }, pa = { scheme: e(520), domainHost: We[e(2564)], parse: We[e(706)], serialize: We[e(1417)] };
      function ma(E) {
        const p = e;
        return typeof E[p(1455)] == "boolean" ? E.secure : String(E[p(747)]).toLowerCase() === p(2747);
      }
      var Ke = { scheme: "ws", domainHost: !0, parse: function(p, y) {
        const w = e;
        var L = p;
        return L[w(1455)] = ma(L), L[w(2433)] = (L[w(2619)] || "/") + (L[w(1511)] ? "?" + L[w(1511)] : ""), L.path = void 0, L[w(1511)] = void 0, L;
      }, serialize: function(p, y) {
        const w = e;
        if ((p[w(2782)] === (ma(p) ? 443 : 80) || p[w(2782)] === "") && (p.port = void 0), typeof p[w(1455)] === w(1146) && (p.scheme = p[w(1455)] ? "wss" : "ws", p[w(1455)] = void 0), p[w(2433)]) {
          var L = p[w(2433)][w(628)]("?"), $ = h(L, 2), n0 = $[0], d0 = $[1];
          p.path = n0 && n0 !== "/" ? n0 : void 0, p.query = d0, p.resourceName = void 0;
        }
        return p.fragment = void 0, p;
      } }, ba = { scheme: e(2747), domainHost: Ke[e(2564)], parse: Ke[e(706)], serialize: Ke[e(1417)] }, In = {}, ga = "[A-Za-z0-9\\-\\.\\_\\~" + e(905) + "]", oe = "[0-9A-Fa-f]", En = n(n("%[EFef]" + oe + "%" + oe + oe + "%" + oe + oe) + "|" + n(e(2298) + oe + "%" + oe + oe) + "|" + n("%" + oe + oe)), Rn = e(725), Cn = e(788), Fn = s(Cn, e(2816)), Nn = e(2453), Tn = new RegExp(ga, "g"), Le = new RegExp(En, "g"), qn = new RegExp(s(e(1897), Rn, e(209), e(1010), Fn), "g"), ya = new RegExp(s(e(1897), ga, Nn), "g"), An = ya;
      function Lx(E) {
        const p = e;
        var y = J(E);
        return y[p(430)](Tn) ? y : E;
      }
      var va = { scheme: e(2770), parse: function(p, y) {
        const w = e;
        var L = p, $ = L.to = L.path ? L[w(2619)][w(628)](",") : [];
        if (L[w(2619)] = void 0, L[w(1511)]) {
          for (var n0 = !1, d0 = {}, I0 = L[w(1511)].split("&"), j0 = 0, V0 = I0[w(692)]; j0 < V0; ++j0) {
            var E0 = I0[j0][w(628)]("=");
            switch (E0[0]) {
              case "to":
                for (var _0 = E0[1].split(","), B0 = 0, g0 = _0[w(692)]; B0 < g0; ++B0)
                  $[w(452)](_0[B0]);
                break;
              case w(1068):
                L[w(1068)] = me(E0[1], y);
                break;
              case w(2340):
                L[w(2340)] = me(E0[1], y);
                break;
              default:
                n0 = !0, d0[me(E0[0], y)] = me(E0[1], y);
                break;
            }
          }
          n0 && (L[w(1566)] = d0);
        }
        L[w(1511)] = void 0;
        for (var $0 = 0, Z0 = $.length; $0 < Z0; ++$0) {
          var U0 = $[$0][w(628)]("@");
          if (U0[0] = me(U0[0]), y[w(2125)]) U0[1] = me(U0[1], y)[w(556)]();
          else try {
            U0[1] = q[w(1528)](me(U0[1], y).toLowerCase());
          } catch (Pe) {
            L[w(948)] = L.error || w(1593) + Pe;
          }
          $[$0] = U0[w(2137)]("@");
        }
        return L;
      }, serialize: function(p, y) {
        const w = e;
        var L = p, $ = u(p.to);
        if ($) {
          for (var n0 = 0, d0 = $[w(692)]; n0 < d0; ++n0) {
            var I0 = String($[n0]), j0 = I0[w(1923)]("@"), V0 = I0[w(2088)](0, j0)[w(575)](Le, Lx)[w(575)](Le, c).replace(qn, Q), E0 = I0[w(2088)](j0 + 1);
            try {
              E0 = y[w(1464)] ? q[w(269)](E0) : q[w(1528)](me(E0, y)[w(556)]());
            } catch ($0) {
              L[w(948)] = L.error || "Email address's domain name can not be converted to " + (y[w(1464)] ? w(248) : w(487)) + w(1868) + $0;
            }
            $[n0] = V0 + "@" + E0;
          }
          L[w(2619)] = $[w(2137)](",");
        }
        var _0 = p[w(1566)] = p.headers || {};
        p[w(1068)] && (_0.subject = p[w(1068)]), p[w(2340)] && (_0.body = p[w(2340)]);
        var B0 = [];
        for (var g0 in _0)
          _0[g0] !== In[g0] && B0.push(g0[w(575)](Le, Lx)[w(575)](Le, c).replace(ya, Q) + "=" + _0[g0][w(575)](Le, Lx)[w(575)](Le, c).replace(An, Q));
        return B0[w(692)] && (L[w(1511)] = B0[w(2137)]("&")), L;
      } }, On = /^([^\:]+)\:(.*)/, wa = { scheme: e(2628), parse: function(p, y) {
        const w = e;
        var L = p[w(2619)] && p[w(2619)][w(430)](On), $ = p;
        if (L) {
          var n0 = y[w(747)] || $[w(747)] || w(2628), d0 = L[1].toLowerCase(), I0 = L[2], j0 = n0 + ":" + (y.nid || d0), V0 = M[j0];
          $[w(904)] = d0, $.nss = I0, $[w(2619)] = void 0, V0 && ($ = V0[w(706)]($, y));
        } else $[w(948)] = $[w(948)] || "URN can not be parsed.";
        return $;
      }, serialize: function(p, y) {
        const w = e;
        var L = y.scheme || p[w(747)] || w(2628), $ = p[w(904)], n0 = L + ":" + (y[w(904)] || $), d0 = M[n0];
        d0 && (p = d0[w(1417)](p, y));
        var I0 = p, j0 = p[w(2700)];
        return I0[w(2619)] = ($ || y[w(904)]) + ":" + j0, I0;
      } }, _n = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, Sa = { scheme: e(1004), parse: function(p, y) {
        const w = e;
        var L = p;
        return L[w(431)] = L.nss, L[w(2700)] = void 0, !y[w(2032)] && (!L.uuid || !L.uuid.match(_n)) && (L[w(948)] = L[w(948)] || "UUID is not valid."), L;
      }, serialize: function(p, y) {
        const w = e;
        var L = p;
        return L[w(2700)] = (p[w(431)] || "")[w(556)](), L;
      } };
      M[We[e(747)]] = We, M[pa[e(747)]] = pa, M[Ke[e(747)]] = Ke, M[ba[e(747)]] = ba, M[va[e(747)]] = va, M[wa[e(747)]] = wa, M[Sa.scheme] = Sa, r[e(332)] = M, r[e(1846)] = Q, r[e(2040)] = J, r.parse = A0, r[e(938)] = O0, r[e(1417)] = z0, r[e(2485)] = Y0, r[e(1571)] = Me, r.normalize = Mx, r.equal = kn, r[e(1525)] = Pn, r.unescapeComponent = me, Object[e(1337)](r, e(627), { value: !0 });
    });
  })(Xe, Xe.exports)), Xe[o(2519)];
}
var Qx, sr;
function fa() {
  return sr || (sr = 1, Qx = function o(x, t) {
    const r = K;
    if (x === t) return !0;
    if (x && t && typeof x == "object" && typeof t == "object") {
      if (x.constructor !== t[r(599)]) return !1;
      var e, s, n;
      if (Array[r(1783)](x)) {
        if (e = x[r(692)], e != t[r(692)]) return !1;
        for (s = e; s-- !== 0; ) if (!o(x[s], t[s])) return !1;
        return !0;
      }
      if (x[r(599)] === RegExp) return x[r(901)] === t[r(901)] && x[r(2736)] === t.flags;
      if (x[r(2722)] !== Object[r(2249)].valueOf) return x[r(2722)]() === t[r(2722)]();
      if (x[r(766)] !== Object[r(2249)][r(766)]) return x[r(766)]() === t[r(766)]();
      if (n = Object[r(750)](x), e = n[r(692)], e !== Object[r(750)](t)[r(692)]) return !1;
      for (s = e; s-- !== 0; ) if (!Object[r(2249)].hasOwnProperty.call(t, n[s])) return !1;
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
function ac() {
  return nr || (nr = 1, Xx = function(x) {
    const t = K;
    for (var r = 0, e = x.length, s = 0, n; s < e; )
      r++, n = x.charCodeAt(s++), n >= 55296 && n <= 56319 && s < e && (n = x[t(2170)](s), (n & 64512) == 56320 && s++);
    return r;
  }), Xx;
}
var Yx, or;
function Ze() {
  const o = a;
  if (or) return Yx;
  or = 1, Yx = { copy: x, checkDataType: t, checkDataTypes: r, coerceToTypes: s, toHash: n, getProperty: u, escapeQuotes: d, equal: fa(), ucs2length: ac(), varOccurences: f, varReplace: l, schemaHasRules: b, schemaHasRulesExcept: h, schemaUnknownRules: m, toQuotedString: v, getPathExpr: k, getPath: I, getData: R, unescapeFragment: N, unescapeJsonPointer: j, escapeFragment: _, escapeJsonPointer: D };
  function x(F, C) {
    C = C || {};
    for (var H in F) C[H] = F[H];
    return C;
  }
  function t(F, C, H, U) {
    const z = K;
    var G = z(U ? 2717 : 1030), i0 = z(U ? 1090 : 927), u0 = U ? "!" : "", l0 = U ? "" : "!";
    switch (F) {
      case "null":
        return C + G + z(845);
      case z(973):
        return u0 + z(680) + C + ")";
      case z(544):
        return "(" + u0 + C + i0 + z(2580) + C + G + z(490) + i0 + l0 + "Array.isArray(" + C + "))";
      case z(1449):
        return z(629) + C + G + z(2118) + i0 + l0 + "(" + C + z(2661) + i0 + C + G + C + (H ? i0 + u0 + z(1667) + C + ")" : "") + ")";
      case "number":
        return "(typeof " + C + G + '"' + F + '"' + (H ? i0 + u0 + "isFinite(" + C + ")" : "") + ")";
      default:
        return z(2580) + C + G + '"' + F + '"';
    }
  }
  function r(F, C, H) {
    const U = K;
    switch (F[U(692)]) {
      case 1:
        return t(F[0], C, H, !0);
      default:
        var z = "", G = n(F);
        G[U(973)] && G.object && (z = G[U(845)] ? "(" : "(!" + C + " || ", z += U(2580) + C + U(516), delete G[U(845)], delete G[U(973)], delete G.object), G[U(2153)] && delete G[U(1449)];
        for (var i0 in G) z += (z ? U(927) : "") + t(i0, C, H, !0);
        return z;
    }
  }
  var e = n([o(2161), o(2153), o(1449), o(1146), "null"]);
  function s(F, C) {
    const H = o;
    if (Array.isArray(C)) {
      for (var U = [], z = 0; z < C[H(692)]; z++) {
        var G = C[z];
        e[G] ? U[U.length] = G : F === H(973) && G === "array" && (U[U[H(692)]] = G);
      }
      if (U[H(692)]) return U;
    } else {
      if (e[C]) return [C];
      if (F === "array" && C === H(973)) return [H(973)];
    }
  }
  function n(F) {
    const C = o;
    for (var H = {}, U = 0; U < F[C(692)]; U++) H[F[U]] = !0;
    return H;
  }
  var i = /^[a-z$_][a-z$_0-9]*$/i, c = /'|\\/g;
  function u(F) {
    return typeof F == o(2153) ? "[" + F + "]" : i.test(F) ? "." + F : "['" + d(F) + "']";
  }
  function d(F) {
    const C = o;
    return F[C(575)](c, C(605))[C(575)](/\n/g, "\\n")[C(575)](/\r/g, "\\r").replace(/\f/g, "\\f")[C(575)](/\t/g, "\\t");
  }
  function f(F, C) {
    const H = o;
    C += H(1147);
    var U = F.match(new RegExp(C, "g"));
    return U ? U[H(692)] : 0;
  }
  function l(F, C, H) {
    const U = o;
    return C += "([^0-9])", H = H[U(575)](/\$/g, U(1244)), F[U(575)](new RegExp(C, "g"), H + "$1");
  }
  function b(F, C) {
    if (typeof F == o(1146)) return !F;
    for (var U in F) if (C[U]) return !0;
  }
  function h(F, C, H) {
    const U = o;
    if (typeof F == U(1146)) return !F && H != U(2705);
    for (var z in F) if (z != H && C[z]) return !0;
  }
  function m(F, C) {
    if (typeof F != o(1146)) {
      for (var U in F) if (!C[U]) return U;
    }
  }
  function v(F) {
    return "'" + d(F) + "'";
  }
  function k(F, C, H, U) {
    const z = o;
    var G = H ? z(1621) + C + (U ? "" : z(2828)) : U ? "'[' + " + C + z(1758) : z(696) + C + z(1338);
    return P(F, G);
  }
  function I(F, C, H) {
    var U = v(H ? "/" + D(C) : u(C));
    return P(F, U);
  }
  var A = /^\/(?:[^~]|~0|~1)*$/, T = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function R(F, C, H) {
    const U = o;
    var z, G, i0, u0;
    if (F === "") return U(966);
    if (F[0] == "/") {
      if (!A[U(1904)](F)) throw new Error("Invalid JSON-pointer: " + F);
      G = F, i0 = U(966);
    } else {
      if (u0 = F[U(430)](T), !u0) throw new Error(U(2493) + F);
      if (z = +u0[1], G = u0[2], G == "#") {
        if (z >= C) throw new Error(U(2685) + z + U(2497) + C);
        return H[C - z];
      }
      if (z > C) throw new Error(U(1108) + z + " levels up, current level is " + C);
      if (i0 = U(909) + (C - z || ""), !G) return i0;
    }
    for (var l0 = i0, o0 = G.split("/"), f0 = 0; f0 < o0[U(692)]; f0++) {
      var k0 = o0[f0];
      k0 && (i0 += u(j(k0)), l0 += " && " + i0);
    }
    return l0;
  }
  function P(F, C) {
    return F == '""' ? C : (F + " + " + C).replace(/([^\\])' \+ '/g, "$1");
  }
  function N(F) {
    return j(decodeURIComponent(F));
  }
  function _(F) {
    return encodeURIComponent(D(F));
  }
  function D(F) {
    const C = o;
    return F[C(575)](/~/g, "~0")[C(575)](/\//g, "~1");
  }
  function j(F) {
    const C = o;
    return F[C(575)](/~1/g, "/")[C(575)](/~0/g, "~");
  }
  return Yx;
}
var et, ir;
function pn() {
  if (ir) return et;
  ir = 1;
  var o = Ze();
  et = x;
  function x(t) {
    o.copy(t, this);
  }
  return et;
}
var xt = { exports: {} }, cr;
function rc() {
  const o = a;
  if (cr) return xt[o(2519)];
  cr = 1;
  var x = xt[o(2519)] = function(e, s, n) {
    const i = o;
    typeof s == i(1622) && (n = s, s = {}), n = s.cb || n;
    var c = typeof n == i(1622) ? n : n[i(2066)] || function() {
    }, u = n[i(2387)] || function() {
    };
    t(s, c, u, e, "", e);
  };
  x[o(2819)] = { additionalItems: !0, items: !0, contains: !0, additionalProperties: !0, propertyNames: !0, not: !0 }, x.arrayKeywords = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }, x[o(1435)] = { definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }, x[o(2614)] = { default: !0, enum: !0, const: !0, required: !0, maximum: !0, minimum: !0, exclusiveMaximum: !0, exclusiveMinimum: !0, multipleOf: !0, maxLength: !0, minLength: !0, pattern: !0, format: !0, maxItems: !0, minItems: !0, uniqueItems: !0, maxProperties: !0, minProperties: !0 };
  function t(e, s, n, i, c, u, d, f, l, b) {
    const h = o;
    if (i && typeof i == h(544) && !Array[h(1783)](i)) {
      s(i, c, u, d, f, l, b);
      for (var m in i) {
        var v = i[m];
        if (Array[h(1783)](v)) {
          if (m in x.arrayKeywords)
            for (var k = 0; k < v.length; k++) t(e, s, n, v[k], c + "/" + m + "/" + k, u, c, m, i, k);
        } else if (m in x[h(1435)]) {
          if (v && typeof v == h(544))
            for (var I in v) t(e, s, n, v[I], c + "/" + m + "/" + r(I), u, c, m, i, I);
        } else (m in x[h(2819)] || e[h(1946)] && !(m in x[h(2614)])) && t(e, s, n, v, c + "/" + m, u, c, m, i);
      }
      n(i, c, u, d, f, l, b);
    }
  }
  function r(e) {
    const s = o;
    return e[s(575)](/~/g, "~0")[s(575)](/\//g, "~1");
  }
  return xt[o(2519)];
}
var tt, ur;
function la() {
  const o = a;
  if (ur) return tt;
  ur = 1;
  var x = tc(), t = fa(), r = Ze(), e = pn(), s = rc();
  tt = n, n[o(2595)] = I, n[o(2124)] = m, n[o(2638)] = A, n[o(2409)] = T, n.inlineRef = l, n.schema = i;
  function n(R, P, N) {
    const _ = o;
    var D = this[_(2813)][N];
    if (typeof D == _(2161))
      if (this._refs[D]) D = this._refs[D];
      else return n[_(1994)](this, R, P, D);
    if (D = D || this[_(1072)][N], D instanceof e) return l(D[_(2555)], this._opts[_(808)]) ? D[_(2555)] : D[_(2621)] || this._compile(D);
    var j = i[_(1994)](this, P, N), F, C, H;
    return j && (F = j.schema, P = j.root, H = j[_(2610)]), F instanceof e ? C = F[_(2621)] || R[_(1994)](this, F[_(2555)], P, void 0, H) : F !== void 0 && (C = l(F, this[_(1035)][_(808)]) ? F : R[_(1994)](this, F, P, void 0, H)), C;
  }
  function i(R, P) {
    const N = o;
    var _ = x.parse(P), D = v(_), j = m(this[N(771)](R[N(2555)]));
    if (Object[N(750)](R[N(2555)])[N(692)] === 0 || D !== j) {
      var F = I(D), C = this[N(2813)][F];
      if (typeof C == N(2161)) return c[N(1994)](this, R, C, _);
      if (C instanceof e)
        C.validate || this[N(1570)](C), R = C;
      else if (C = this._schemas[F], C instanceof e) {
        if (C[N(2621)] || this._compile(C), F == I(P)) return { schema: C, root: R, baseId: j };
        R = C;
      } else return;
      if (!R[N(2555)]) return;
      j = m(this._getId(R[N(2555)]));
    }
    return d[N(1994)](this, _, j, R.schema, R);
  }
  function c(R, P, N) {
    const _ = o;
    var D = i[_(1994)](this, R, P);
    if (D) {
      var j = D[_(2555)], F = D[_(2610)];
      R = D[_(2318)];
      var C = this[_(771)](j);
      return C && (F = A(F, C)), d[_(1994)](this, N, F, j, R);
    }
  }
  var u = r[o(745)]([o(945), o(886), o(1419), o(1356), "definitions"]);
  function d(R, P, N, _) {
    const D = o;
    if (R[D(2211)] = R[D(2211)] || "", R[D(2211)][D(2088)](0, 1) == "/") {
      for (var j = R.fragment.split("/"), F = 1; F < j[D(692)]; F++) {
        var C = j[F];
        if (C) {
          if (C = r[D(2633)](C), N = N[C], N === void 0) break;
          var H;
          if (!u[C] && (H = this[D(771)](N), H && (P = A(P, H)), N.$ref)) {
            var U = A(P, N.$ref), z = i[D(1994)](this, _, U);
            z && (N = z.schema, _ = z[D(2318)], P = z[D(2610)]);
          }
        }
      }
      if (N !== void 0 && N !== _[D(2555)]) return { schema: N, root: _, baseId: P };
    }
  }
  var f = r[o(745)]([o(612), o(2197), o(1267), o(558), "minLength", o(197), o(246), o(2575), o(1977), o(2536), o(546), o(2675), "multipleOf", o(310), o(1419)]);
  function l(R, P) {
    if (P === !1) return !1;
    if (P === void 0 || P === !0) return b(R);
    if (P) return h(R) <= P;
  }
  function b(R) {
    const P = o;
    var N;
    if (Array.isArray(R)) {
      for (var _ = 0; _ < R.length; _++)
        if (N = R[_], typeof N == P(544) && !b(N)) return !1;
    } else for (var D in R)
      if (D == P(2221) || (N = R[D], typeof N == "object" && !b(N))) return !1;
    return !0;
  }
  function h(R) {
    const P = o;
    var N = 0, _;
    if (Array[P(1783)](R)) {
      for (var D = 0; D < R[P(692)]; D++)
        if (_ = R[D], typeof _ == P(544) && (N += h(_)), N == 1 / 0) return 1 / 0;
    } else for (var j in R) {
      if (j == P(2221)) return 1 / 0;
      if (f[j]) N++;
      else if (_ = R[j], typeof _ == P(544) && (N += h(_) + 1), N == 1 / 0) return 1 / 0;
    }
    return N;
  }
  function m(R, P) {
    const N = o;
    P !== !1 && (R = I(R));
    var _ = x[N(706)](R);
    return v(_);
  }
  function v(R) {
    const P = o;
    return x.serialize(R)[P(628)]("#")[0] + "#";
  }
  var k = /#\/?$/;
  function I(R) {
    return R ? R.replace(k, "") : "";
  }
  function A(R, P) {
    const N = o;
    return P = I(P), x[N(1571)](R, P);
  }
  function T(R) {
    const P = o;
    var N = I(this[P(771)](R)), _ = { "": N }, D = { "": m(N, !1) }, j = {}, F = this;
    return s(R, { allKeys: !0 }, function(C, H, U, z, G, i0, u0) {
      const l0 = P;
      if (H !== "") {
        var o0 = F[l0(771)](C), f0 = _[z], k0 = D[z] + "/" + G;
        if (u0 !== void 0 && (k0 += "/" + (typeof u0 == l0(2153) ? u0 : r[l0(2358)](u0))), typeof o0 == "string") {
          o0 = f0 = I(f0 ? x[l0(1571)](f0, o0) : o0);
          var S0 = F[l0(2813)][o0];
          if (typeof S0 == "string" && (S0 = F[l0(2813)][S0]), S0 && S0.schema) {
            if (!t(C, S0[l0(2555)])) throw new Error(l0(1394) + o0 + l0(1632));
          } else if (o0 != I(k0))
            if (o0[0] == "#") {
              if (j[o0] && !t(C, j[o0])) throw new Error('id "' + o0 + l0(1632));
              j[o0] = C;
            } else F[l0(2813)][o0] = k0;
        }
        _[H] = f0, D[H] = k0;
      }
    }), j;
  }
  return tt;
}
var at, dr;
function ha() {
  const o = a;
  if (dr) return at;
  dr = 1;
  var x = la();
  at = { Validation: e(t), MissingRef: e(r) };
  function t(s) {
    const n = K;
    this[n(225)] = n(2187), this[n(1672)] = s, this[n(398)] = this[n(1711)] = !0;
  }
  r[o(225)] = function(s, n) {
    const i = o;
    return i(897) + n + i(2180) + s;
  };
  function r(s, n, i) {
    const c = o;
    this.message = i || r[c(225)](s, n), this[c(2748)] = x[c(2638)](s, n), this[c(208)] = x[c(2595)](x[c(2124)](this[c(2748)]));
  }
  function e(s) {
    const n = o;
    return s.prototype = Object[n(665)](Error.prototype), s[n(2249)].constructor = s, s;
  }
  return at;
}
var rt, fr;
function mn() {
  return fr || (fr = 1, rt = function(o, x) {
    const t = K;
    x || (x = {}), typeof x === t(1622) && (x = { cmp: x });
    var r = typeof x[t(2667)] === t(1146) ? x.cycles : !1, e = x[t(1751)] && /* @__PURE__ */ (function(n) {
      return function(i) {
        return function(c, u) {
          var d = { key: c, value: i[c] }, f = { key: u, value: i[u] };
          return n(d, f);
        };
      };
    })(x[t(1751)]), s = [];
    return (function n(i) {
      const c = t;
      if (i && i[c(1538)] && typeof i[c(1538)] == "function" && (i = i[c(1538)]()), i !== void 0) {
        if (typeof i == "number") return isFinite(i) ? "" + i : c(845);
        if (typeof i !== c(544)) return JSON[c(2625)](i);
        var u, d;
        if (Array[c(1783)](i)) {
          for (d = "[", u = 0; u < i[c(692)]; u++)
            u && (d += ","), d += n(i[u]) || c(845);
          return d + "]";
        }
        if (i === null) return c(845);
        if (s[c(311)](i) !== -1) {
          if (r) return JSON[c(2625)](c(2081));
          throw new TypeError(c(368));
        }
        var f = s[c(452)](i) - 1, l = Object[c(750)](i)[c(1025)](e && e(i));
        for (d = "", u = 0; u < l[c(692)]; u++) {
          var b = l[u], h = n(i[b]);
          h && (d && (d += ","), d += JSON[c(2625)](b) + ":" + h);
        }
        return s[c(2605)](f, 1), "{" + d + "}";
      }
    })(o);
  }), rt;
}
var st, lr;
function bn() {
  return lr || (lr = 1, st = function(x, t, r) {
    const e = K;
    var s = "", n = x.schema[e(2609)] === !0, i = x[e(1011)][e(2582)](x[e(2555)], x[e(807)][e(403)], "$ref"), c = x[e(779)][e(771)](x[e(2555)]);
    if (x[e(1835)][e(2746)]) {
      var u = x[e(1011)][e(1006)](x[e(2555)], x[e(807)].keywords);
      if (u) {
        var d = e(1182) + u;
        if (x.opts.strictKeywords === e(2818)) x[e(1610)][e(343)](d);
        else throw new Error(d);
      }
    }
    if (x.isTop && (s += e(1130), n && (x[e(1973)] = !0, s += "async "), s += e(326), c && (x[e(1835)][e(179)] || x[e(1835)].processCode) && (s += " " + (e(1360) + c + " */") + " ")), typeof x[e(2555)] == e(1146) || !(i || x.schema.$ref)) {
      var t = e(1229), f = x[e(1552)], l = x[e(2547)], b = x.schema[t], h = x[e(2443)] + x[e(1011)][e(981)](t), m = x[e(2624)] + "/" + t, P = !x[e(1835)][e(226)], D, v = e(909) + (l || ""), R = e(614) + f;
      if (x[e(2555)] === !1) {
        x[e(2487)] ? P = !0 : s += e(2007) + R + e(1633);
        var k = k || [];
        k[e(452)](s), s = "", x.createErrors !== !1 ? (s += e(1588) + (D || e(1229)) + e(2767) + x[e(2886)] + e(1347) + x[e(1011)].toQuotedString(m) + " , params: {} ", x[e(1835)].messages !== !1 && (s += e(1496)), x[e(1835)][e(1219)] && (s += e(1355) + x[e(2443)] + e(1227) + v + " "), s += e(1334)) : s += " {} ";
        var I = s;
        s = k[e(2231)](), !x[e(1187)] && P ? x.async ? s += e(1086) + I + e(956) : s += e(651) + I + e(2753) : s += e(2467) + I + e(1899);
      } else x[e(2487)] ? n ? s += e(2096) : s += e(1164) : s += e(2007) + R + e(854);
      return x.isTop && (s += e(584)), s;
    }
    if (x[e(2487)]) {
      var A = x.isTop, f = x.level = 0, l = x.dataLevel = 0, v = e(909);
      if (x[e(1686)] = x.resolve.fullPath(x[e(779)][e(771)](x[e(2318)].schema)), x[e(2610)] = x.baseId || x.rootId, delete x[e(2487)], x[e(1885)] = [""], x[e(2555)][e(1944)] !== void 0 && x[e(1835)].useDefaults && x[e(1835)][e(319)]) {
        var T = e(1784);
        if (x[e(1835)].strictDefaults === e(2818)) x[e(1610)].warn(T);
        else throw new Error(T);
      }
      s += e(1697), s += e(2437), s += e(2599);
    } else {
      var f = x.level, l = x[e(2547)], v = e(909) + (l || "");
      if (c && (x[e(2610)] = x.resolve[e(2638)](x[e(2610)], c)), n && !x[e(1973)]) throw new Error(e(1823));
      s += e(2744) + f + e(2163);
    }
    var R = e(614) + f, P = !x[e(1835)].allErrors, N = "", _ = "", D, j = x[e(2555)][e(612)], F = Array[e(1783)](j);
    if (j && x[e(1835)][e(1864)] && x[e(2555)][e(1864)] === !0 && (F ? j.indexOf(e(845)) == -1 && (j = j.concat("null")) : j != e(845) && (j = [j, "null"], F = !0)), F && j[e(692)] == 1 && (j = j[0], F = !1), x[e(2555)][e(2221)] && i) {
      if (x[e(1835)][e(2286)] == e(2630)) throw new Error('$ref: validation keywords used in schema at path "' + x[e(2624)] + e(2062));
      x[e(1835)][e(2286)] !== !0 && (i = !1, x[e(1610)].warn(e(316) + x[e(2624)] + '"'));
    }
    if (x.schema.$comment && x[e(1835)][e(1506)] && (s += " " + x[e(807)][e(403)].$comment[e(1172)](x, e(1506))), j) {
      if (x[e(1835)].coerceTypes) var C = x[e(1011)][e(907)](x[e(1835)][e(2600)], j);
      var H = x[e(807)][e(1411)][j];
      if (C || F || H === !0 || H && !w0(H)) {
        var h = x.schemaPath + e(2380), m = x[e(2624)] + e(1855), h = x[e(2443)] + e(2380), m = x[e(2624)] + e(1855), U = F ? "checkDataTypes" : e(2366);
        if (s += e(851) + x[e(1011)][U](j, v, x[e(1835)][e(1311)], !0) + ") { ", C) {
          var z = "dataType" + f, G = e(1514) + f;
          s += " var " + z + " = typeof " + v + e(1922) + G + e(754), x[e(1835)][e(2600)] == "array" && (s += e(851) + z + e(1569) + v + e(2883) + v + e(721) + v + e(2473) + v + e(1800) + z + " = typeof " + v + e(663) + x[e(1011)][e(2366)](x[e(2555)].type, v, x[e(1835)][e(1311)]) + ") " + G + e(2473) + v + e(1156)), s += " if (" + G + e(1361);
          var i0 = C;
          if (i0)
            for (var u0, l0 = -1, o0 = i0[e(692)] - 1; l0 < o0; )
              u0 = i0[l0 += 1], u0 == e(2161) ? s += e(2663) + z + " == 'number' || " + z + e(2429) + G + e(290) + v + e(424) + v + " === null) " + G + e(1567) : u0 == "number" || u0 == e(1449) ? (s += " else if (" + z + e(655) + v + " === null || (" + z + " == 'string' && " + v + e(927) + v + e(2212) + v + " ", u0 == "integer" && (s += e(709) + v + e(2661)), s += e(2611) + G + e(1281) + v + "; ") : u0 == e(1146) ? s += e(2663) + v + e(2174) + v + " === 0 || " + v + e(662) + G + e(1871) + v + e(1629) + v + " === 1) " + G + e(854) : u0 == e(845) ? s += e(2663) + v + e(2011) + v + e(178) + v + " === false) " + G + " = null; " : x.opts[e(2600)] == e(973) && u0 == "array" && (s += e(2663) + z + e(511) + z + " == 'number' || " + z + e(655) + v + e(1437) + G + e(1170) + v + e(2492));
          s += e(547);
          var k = k || [];
          k[e(452)](s), s = "", x[e(1715)] !== !1 ? (s += e(1588) + (D || "type") + e(2767) + x[e(2886)] + " , schemaPath: " + x[e(1011)][e(1901)](m) + e(347), F ? s += "" + j[e(2137)](",") : s += "" + j, s += e(2862), x[e(1835)].messages !== !1 && (s += e(1145), F ? s += "" + j.join(",") : s += "" + j, s += "' "), x.opts[e(1219)] && (s += e(1319) + h + e(1452) + x[e(2443)] + e(1227) + v + " "), s += e(1334)) : s += e(1230);
          var I = s;
          s = k[e(2231)](), !x[e(1187)] && P ? x[e(1973)] ? s += " throw new ValidationError([" + I + "]); " : s += e(651) + I + e(2753) : s += e(2467) + I + e(1899), s += " } if (" + G + e(2795);
          var f0 = l ? e(909) + (l - 1 || "") : "parentData", k0 = l ? x[e(1885)][l] : e(1096);
          s += " " + v + " = " + G + "; ", !l && (s += "if (" + f0 + e(2306)), s += " " + f0 + "[" + k0 + e(2777) + G + "; } ";
        } else {
          var k = k || [];
          k[e(452)](s), s = "", x.createErrors !== !1 ? (s += e(1588) + (D || e(612)) + e(2767) + x[e(2886)] + " , schemaPath: " + x[e(1011)][e(1901)](m) + e(347), F ? s += "" + j[e(2137)](",") : s += "" + j, s += e(2862), x[e(1835)].messages !== !1 && (s += " , message: 'should be ", F ? s += "" + j[e(2137)](",") : s += "" + j, s += "' "), x[e(1835)][e(1219)] && (s += e(1319) + h + e(1452) + x[e(2443)] + " , data: " + v + " "), s += " } ") : s += e(1230);
          var I = s;
          s = k[e(2231)](), !x[e(1187)] && P ? x[e(1973)] ? s += e(1086) + I + e(956) : s += e(651) + I + "]; return false; " : s += " var err = " + I + e(1899);
        }
        s += e(1334);
      }
    }
    if (x.schema[e(2221)] && !i) s += " " + x.RULES.all.$ref[e(1172)](x, "$ref") + " ", P && (s += e(2637), A ? s += "0" : s += e(1816) + f, s += e(185), _ += "}");
    else {
      var S0 = x[e(807)];
      if (S0) {
        for (var H, M0 = -1, F0 = S0.length - 1; M0 < F0; )
          if (H = S0[M0 += 1], w0(H)) {
            if (H.type && (s += e(851) + x.util[e(2366)](H.type, v, x[e(1835)][e(1311)]) + ") { "), x[e(1835)][e(2132)]) {
              if (H[e(612)] == e(544) && x.schema.properties) {
                var b = x[e(2555)].properties, J0 = Object[e(750)](b), O = J0;
                if (O)
                  for (var q, M = -1, Q = O[e(692)] - 1; M < Q; ) {
                    q = O[M += 1];
                    var J = b[q];
                    if (J[e(1944)] !== void 0) {
                      var V = v + x[e(1011)][e(981)](q);
                      if (x[e(1187)]) {
                        if (x[e(1835)][e(319)]) {
                          var T = e(2234) + V;
                          if (x.opts[e(319)] === e(2818)) x[e(1610)][e(343)](T);
                          else throw new Error(T);
                        }
                      } else s += e(851) + V + e(2726), x[e(1835)][e(2132)] == e(1325) && (s += e(1090) + V + e(778) + V + " === '' "), s += " ) " + V + " = ", x[e(1835)][e(2132)] == e(776) ? s += " " + x[e(2827)](J[e(1944)]) + " " : s += " " + JSON[e(2625)](J[e(1944)]) + " ", s += "; ";
                    }
                  }
              } else if (H[e(612)] == e(973) && Array.isArray(x[e(2555)][e(715)])) {
                var X = x[e(2555)][e(715)];
                if (X) {
                  for (var J, l0 = -1, s0 = X[e(692)] - 1; l0 < s0; )
                    if (J = X[l0 += 1], J[e(1944)] !== void 0) {
                      var V = v + "[" + l0 + "]";
                      if (x[e(1187)]) {
                        if (x.opts[e(319)]) {
                          var T = e(2234) + V;
                          if (x[e(1835)][e(319)] === "log") x[e(1610)][e(343)](T);
                          else throw new Error(T);
                        }
                      } else s += e(851) + V + e(2726), x.opts[e(2132)] == "empty" && (s += " || " + V + e(778) + V + e(2531)), s += e(2010) + V + e(2473), x.opts[e(2132)] == e(776) ? s += " " + x[e(2827)](J[e(1944)]) + " " : s += " " + JSON[e(2625)](J[e(1944)]) + " ", s += "; ";
                    }
                }
              }
            }
            var c0 = H[e(752)];
            if (c0) {
              for (var x0, L0 = -1, A0 = c0[e(692)] - 1; L0 < A0; )
                if (x0 = c0[L0 += 1], G0(x0)) {
                  var H0 = x0.code(x, x0.keyword, H[e(612)]);
                  H0 && (s += " " + H0 + " ", P && (N += "}"));
                }
            }
            if (P && (s += " " + N + " ", N = ""), H[e(612)] && (s += e(1334), j && j === H[e(612)] && !C)) {
              s += e(1237);
              var h = x[e(2443)] + e(2380), m = x.errSchemaPath + e(1855), k = k || [];
              k[e(452)](s), s = "", x[e(1715)] !== !1 ? (s += e(1588) + (D || e(612)) + e(2767) + x.errorPath + e(1347) + x.util[e(1901)](m) + e(347), F ? s += "" + j[e(2137)](",") : s += "" + j, s += e(2862), x[e(1835)].messages !== !1 && (s += e(1145), F ? s += "" + j.join(",") : s += "" + j, s += "' "), x[e(1835)][e(1219)] && (s += e(1319) + h + e(1452) + x.schemaPath + e(1227) + v + " "), s += " } ") : s += e(1230);
              var I = s;
              s = k[e(2231)](), !x[e(1187)] && P ? x[e(1973)] ? s += e(1086) + I + e(956) : s += e(651) + I + e(2753) : s += e(2467) + I + e(1899), s += e(1334);
            }
            P && (s += e(1578), A ? s += "0" : s += e(1816) + f, s += e(185), _ += "}");
          }
      }
    }
    P && (s += " " + _ + " "), A ? (n ? (s += e(2131), s += e(2566)) : (s += e(2263), s += " return errors === 0;       "), s += " }; return validate;") : s += e(2007) + R + " = errors === errs_" + f + ";";
    function w0(Q0) {
      const O0 = e;
      for (var z0 = Q0[O0(752)], Y0 = 0; Y0 < z0[O0(692)]; Y0++) if (G0(z0[Y0])) return !0;
    }
    function G0(Q0) {
      const O0 = e;
      return x[O0(2555)][Q0[O0(1235)]] !== void 0 || Q0[O0(756)] && ne(Q0);
    }
    function ne(Q0) {
      const O0 = e;
      for (var z0 = Q0[O0(756)], Y0 = 0; Y0 < z0[O0(692)]; Y0++) if (x.schema[z0[Y0]] !== void 0) return !0;
    }
    return s;
  }), st;
}
var nt, hr;
function sc() {
  const o = a;
  if (hr) return nt;
  hr = 1;
  var x = la(), t = Ze(), r = ha(), e = mn(), s = bn(), n = t.ucs2length, i = fa(), c = r[o(2228)];
  nt = u;
  function u(I, A, T, R) {
    const P = o;
    var N = this, _ = this[P(1035)], D = [void 0], j = {}, F = [], C = {}, H = [], U = {}, z = [];
    A = A || { schema: I, refVal: D, refs: j };
    var G = d[P(1994)](this, I, A, R), i0 = this[P(950)][G[P(1693)]];
    if (G[P(2030)]) return i0[P(1777)] = k0;
    var u0 = this[P(1484)], l0 = this.RULES;
    try {
      var o0 = S0(I, A, T, R);
      i0[P(2621)] = o0;
      var f0 = i0[P(1777)];
      return f0 && (f0.schema = o0.schema, f0[P(1672)] = null, f0[P(283)] = o0.refs, f0.refVal = o0[P(583)], f0.root = o0[P(2318)], f0[P(2609)] = o0.$async, _[P(179)] && (f0[P(901)] = o0[P(901)])), o0;
    } finally {
      f[P(1994)](this, I, A, R);
    }
    function k0() {
      const V = P;
      var X = i0[V(2621)], s0 = X.apply(this, arguments);
      return k0[V(1672)] = X[V(1672)], s0;
    }
    function S0(V, X, s0, c0) {
      const x0 = P;
      var L0 = !X || X && X[x0(2555)] == V;
      if (X[x0(2555)] != A[x0(2555)]) return u[x0(1994)](N, V, X, s0, c0);
      var A0 = V[x0(2609)] === !0, H0 = s({ isTop: !0, schema: V, isRoot: L0, baseId: c0, root: X, schemaPath: "", errSchemaPath: "#", errorPath: '""', MissingRefError: r.MissingRef, RULES: l0, validate: s, util: t, resolve: x, resolveRef: M0, usePattern: M, useDefault: Q, useCustomRule: J, opts: _, formats: u0, logger: N.logger, self: N });
      H0 = k(D, m) + k(F, b) + k(H, h) + k(z, v) + H0, _[x0(639)] && (H0 = _.processCode(H0, V));
      var w0;
      try {
        var G0 = new Function("self", x0(807), x0(823), x0(2318), x0(583), x0(1228), x0(484), x0(2670), x0(1305), x0(1619), H0);
        w0 = G0(N, l0, u0, A, D, H, z, i, n, c), D[0] = w0;
      } catch (ne) {
        throw N[x0(1610)][x0(948)](x0(2530), H0), ne;
      }
      return w0[x0(2555)] = V, w0[x0(1672)] = null, w0.refs = j, w0[x0(583)] = D, w0[x0(2318)] = L0 ? w0 : X, A0 && (w0[x0(2609)] = !0), _[x0(179)] === !0 && (w0[x0(901)] = { code: H0, patterns: F, defaults: H }), w0;
    }
    function M0(V, X, s0) {
      const c0 = P;
      X = x.url(V, X);
      var x0 = j[X], L0, A0;
      if (x0 !== void 0) return L0 = D[x0], A0 = "refVal[" + x0 + "]", q(L0, A0);
      if (!s0 && A.refs) {
        var H0 = A.refs[X];
        if (H0 !== void 0) return L0 = A[c0(583)][H0], A0 = F0(X, L0), q(L0, A0);
      }
      A0 = F0(X);
      var w0 = x[c0(1994)](N, S0, A, X);
      if (w0 === void 0) {
        var G0 = T && T[X];
        G0 && (w0 = x.inlineRef(G0, _[c0(808)]) ? G0 : u[c0(1994)](N, G0, A, T, V));
      }
      if (w0 === void 0) J0(X);
      else return O(X, w0), q(w0, A0);
    }
    function F0(V, X) {
      const s0 = P;
      var c0 = D[s0(692)];
      return D[c0] = X, j[V] = c0, s0(583) + c0;
    }
    function J0(V) {
      delete j[V];
    }
    function O(V, X) {
      var s0 = j[V];
      D[s0] = X;
    }
    function q(V, X) {
      const s0 = P;
      return typeof V == s0(544) || typeof V == s0(1146) ? { code: X, schema: V, inline: !0 } : { code: X, $async: V && !!V[s0(2609)] };
    }
    function M(V) {
      const X = P;
      var s0 = C[V];
      return s0 === void 0 && (s0 = C[V] = F.length, F[s0] = V), X(1267) + s0;
    }
    function Q(V) {
      const X = P;
      switch (typeof V) {
        case X(1146):
        case X(2153):
          return "" + V;
        case X(2161):
          return t[X(1901)](V);
        case X(544):
          if (V === null) return "null";
          var s0 = e(V), c0 = U[s0];
          return c0 === void 0 && (c0 = U[s0] = H[X(692)], H[c0] = V), X(1944) + c0;
      }
    }
    function J(V, X, s0, c0) {
      const x0 = P;
      if (N[x0(1035)][x0(763)] !== !1) {
        var L0 = V.definition[x0(1356)];
        if (L0 && !L0[x0(1761)](function(Y0) {
          const Me = x0;
          return Object.prototype[Me(873)][Me(1994)](s0, Y0);
        })) throw new Error("parent schema must have all required keywords: " + L0[x0(2137)](","));
        var A0 = V[x0(2814)][x0(763)];
        if (A0) {
          var H0 = A0(X);
          if (!H0) {
            var w0 = "keyword schema is invalid: " + N.errorsText(A0.errors);
            if (N[x0(1035)][x0(763)] == x0(2818)) N.logger.error(w0);
            else throw new Error(w0);
          }
        }
      }
      var G0 = V[x0(2814)][x0(1759)], ne = V.definition[x0(2527)], Q0 = V[x0(2814)].macro, O0;
      if (G0) O0 = G0[x0(1994)](N, X, s0, c0);
      else if (Q0)
        O0 = Q0.call(N, X, s0, c0), _[x0(763)] !== !1 && N[x0(763)](O0, !0);
      else if (ne) O0 = ne.call(N, c0, V[x0(1235)], X, s0);
      else if (O0 = V[x0(2814)][x0(2621)], !O0) return;
      if (O0 === void 0) throw new Error(x0(1809) + V[x0(1235)] + x0(908));
      var z0 = z[x0(692)];
      return z[z0] = O0, { code: x0(679) + z0, validate: O0 };
    }
  }
  function d(I, A, T) {
    const R = o;
    var P = l[R(1994)](this, I, A, T);
    return P >= 0 ? { index: P, compiling: !0 } : (P = this[R(950)][R(692)], this[R(950)][P] = { schema: I, root: A, baseId: T }, { index: P, compiling: !1 });
  }
  function f(I, A, T) {
    const R = o;
    var P = l.call(this, I, A, T);
    P >= 0 && this._compilations[R(2605)](P, 1);
  }
  function l(I, A, T) {
    const R = o;
    for (var P = 0; P < this._compilations[R(692)]; P++) {
      var N = this[R(950)][P];
      if (N[R(2555)] == I && N[R(2318)] == A && N[R(2610)] == T) return P;
    }
    return -1;
  }
  function b(I, A) {
    const T = o;
    return T(2563) + I + " = new RegExp(" + t[T(1901)](A[I]) + ");";
  }
  function h(I) {
    const A = o;
    return "var default" + I + A(1463) + I + "];";
  }
  function m(I, A) {
    const T = o;
    return A[I] === void 0 ? "" : "var refVal" + I + T(2789) + I + "];";
  }
  function v(I) {
    return o(1441) + I + " = customRules[" + I + "];";
  }
  function k(I, A) {
    const T = o;
    if (!I[T(692)]) return "";
    for (var R = "", P = 0; P < I[T(692)]; P++) R += A(P, I);
    return R;
  }
  return nt;
}
var ot = { exports: {} }, pr;
function nc() {
  const o = a;
  if (pr) return ot[o(2519)];
  pr = 1;
  var x = ot[o(2519)] = function() {
    const r = o;
    this[r(2851)] = {};
  };
  return x[o(2249)][o(924)] = function(r, e) {
    const s = o;
    this[s(2851)][r] = e;
  }, x[o(2249)][o(1075)] = function(r) {
    return this[o(2851)][r];
  }, x[o(2249)][o(619)] = function(r) {
    const e = o;
    delete this[e(2851)][r];
  }, x[o(2249)][o(899)] = function() {
    this._cache = {};
  }, ot.exports;
}
function K(o, x) {
  return o = o - 171, Nx()[o];
}
var it, mr;
function oc() {
  const o = a;
  if (mr) return it;
  mr = 1;
  var x = Ze(), t = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, r = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], e = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, s = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, n = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, i = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, d = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, f = /^(?:\/(?:[^~/]|~0|~1)*)*$/, l = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, b = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
  it = h;
  function h(_) {
    const D = K;
    return _ = _ == D(2391) ? D(2391) : D(1369), x[D(1965)](h[_]);
  }
  h[o(1369)] = { date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/, time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, "uri-template": c, url: u, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: N, uuid: d, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": b }, h[o(2391)] = { date: v, time: k, "date-time": A, uri: R, "uri-reference": i, "uri-template": c, url: u, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: s, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/, ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i, regex: N, uuid: d, "json-pointer": f, "json-pointer-uri-fragment": l, "relative-json-pointer": b };
  function m(_) {
    return _ % 4 === 0 && (_ % 100 !== 0 || _ % 400 === 0);
  }
  function v(_) {
    var j = _[o(430)](t);
    if (!j) return !1;
    var F = +j[1], C = +j[2], H = +j[3];
    return C >= 1 && C <= 12 && H >= 1 && H <= (C == 2 && m(F) ? 29 : r[C]);
  }
  function k(_, D) {
    var F = _[o(430)](e);
    if (!F) return !1;
    var C = F[1], H = F[2], U = F[3], z = F[5];
    return (C <= 23 && H <= 59 && U <= 59 || C == 23 && H == 59 && U == 60) && (!D || z);
  }
  var I = /t|\s/i;
  function A(_) {
    const D = o;
    var j = _[D(628)](I);
    return j[D(692)] == 2 && v(j[0]) && k(j[1], !0);
  }
  var T = /\/|:/;
  function R(_) {
    const D = o;
    return T[D(1904)](_) && n[D(1904)](_);
  }
  var P = /[^\\]\\Z/;
  function N(_) {
    if (P[o(1904)](_)) return !1;
    try {
      return new RegExp(_), !0;
    } catch {
      return !1;
    }
  }
  return it;
}
var ct, br;
function ic() {
  return br || (br = 1, ct = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x[e(2547)], c = x[e(2555)][t], u = x.errSchemaPath + "/" + t, d = !x[e(1835)].allErrors, f = e(909) + (i || ""), l = e(614) + n, b, h;
    if (c == "#" || c == "#/") x[e(1842)] ? (b = x[e(1973)], h = e(2621)) : (b = x[e(2318)].schema[e(2609)] === !0, h = "root.refVal[0]");
    else {
      var m = x[e(596)](x[e(2610)], c, x[e(1842)]);
      if (m === void 0) {
        var v = x.MissingRefError[e(225)](x.baseId, c);
        if (x[e(1835)][e(455)] == "fail") {
          x[e(1610)][e(948)](v);
          var k = k || [];
          k[e(452)](s), s = "", x.createErrors !== !1 ? (s += e(1588) + e(2221) + "' , dataPath: (dataPath || '') + " + x[e(2886)] + " , schemaPath: " + x[e(1011)][e(1901)](u) + e(1935) + x[e(1011)][e(1848)](c) + "' } ", x[e(1835)][e(1793)] !== !1 && (s += e(2540) + x[e(1011)][e(1848)](c) + "' "), x[e(1835)].verbose && (s += " , schema: " + x[e(1011)][e(1901)](c) + " , parentSchema: validate.schema" + x[e(2443)] + e(1227) + f + " "), s += e(1334)) : s += e(1230);
          var I = s;
          s = k[e(2231)](), !x[e(1187)] && d ? x[e(1973)] ? s += e(1086) + I + e(956) : s += e(651) + I + e(2753) : s += e(2467) + I + e(1899), d && (s += e(1735));
        } else if (x[e(1835)].missingRefs == "ignore") x[e(1610)][e(343)](v), d && (s += " if (true) { ");
        else throw new x[e(903)](x.baseId, c, v);
      } else if (m[e(2527)]) {
        var A = x[e(1011)][e(1965)](x);
        A[e(1552)]++;
        var T = "valid" + A[e(1552)];
        A[e(2555)] = m[e(2555)], A.schemaPath = "", A[e(2624)] = c;
        var R = x.validate(A).replace(/validate\.schema/g, m[e(1172)]);
        s += " " + R + " ", d && (s += e(851) + T + ") { ");
      } else b = m[e(2609)] === !0 || x.async && m[e(2609)] !== !1, h = m[e(1172)];
    }
    if (h) {
      var k = k || [];
      k[e(452)](s), s = "", x[e(1835)].passContext ? s += " " + h + e(1002) : s += " " + h + "( ", s += " " + f + e(2579), x[e(2886)] != '""' && (s += e(2196) + x[e(2886)]);
      var P = i ? e(909) + (i - 1 || "") : e(482), N = i ? x[e(1885)][i] : e(1096);
      s += " , " + P + e(366) + N + e(2407);
      var _ = s;
      if (s = k[e(2231)](), b) {
        if (!x[e(1973)]) throw new Error(e(2168));
        d && (s += e(2007) + l + "; "), s += e(1852) + _ + "; ", d && (s += " " + l + e(854)), s += e(1480), d && (s += " " + l + " = false; "), s += e(1334), d && (s += e(851) + l + ") { ");
      } else s += e(2351) + _ + e(2602) + h + ".errors; else vErrors = vErrors.concat(" + h + e(1336), d && (s += e(1237));
    }
    return s;
  }), ct;
}
var ut, gr;
function cc() {
  return gr || (gr = 1, ut = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2555)][t], i = x[e(2443)] + x[e(1011)][e(981)](t), c = x.errSchemaPath + "/" + t, u = !x[e(1835)].allErrors, d = x[e(1011)].copy(x), f = "";
    d[e(1552)]++;
    var l = e(614) + d.level, b = d.baseId, h = !0, m = n;
    if (m)
      for (var v, k = -1, I = m.length - 1; k < I; )
        v = m[k += 1], (x[e(1835)][e(2746)] ? typeof v == e(544) && Object.keys(v)[e(692)] > 0 || v === !1 : x[e(1011)][e(1392)](v, x[e(807)].all)) && (h = !1, d[e(2555)] = v, d.schemaPath = i + "[" + k + "]", d.errSchemaPath = c + "/" + k, s += "  " + x.validate(d) + " ", d[e(2610)] = b, u && (s += " if (" + l + e(185), f += "}"));
    return u && (h ? s += e(495) : s += " " + f[e(2088)](0, -1) + " "), s;
  }), ut;
}
var dt, yr;
function uc() {
  return yr || (yr = 1, dt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x[e(2547)], c = x[e(2555)][t], u = x.schemaPath + x[e(1011)][e(981)](t), d = x.errSchemaPath + "/" + t, f = !x[e(1835)][e(226)], l = e(909) + (i || ""), b = e(614) + n, h = "errs__" + n, m = x[e(1011)][e(1965)](x), v = "";
    m[e(1552)]++;
    var k = e(614) + m.level, I = c[e(1761)](function(D) {
      const j = e;
      return x.opts[j(2746)] ? typeof D == j(544) && Object[j(750)](D).length > 0 || D === !1 : x[j(1011)].schemaHasRules(D, x.RULES[j(403)]);
    });
    if (I) {
      var A = m[e(2610)];
      s += e(2007) + h + e(1962) + b + e(2632);
      var T = x[e(1187)];
      x.compositeRule = m[e(1187)] = !0;
      var R = c;
      if (R)
        for (var P, N = -1, _ = R.length - 1; N < _; )
          P = R[N += 1], m[e(2555)] = P, m[e(2443)] = u + "[" + N + "]", m[e(2624)] = d + "/" + N, s += "  " + x[e(2621)](m) + " ", m[e(2610)] = A, s += " " + b + e(2473) + b + e(1090) + k + e(305) + b + e(185), v += "}";
      x.compositeRule = m[e(1187)] = T, s += " " + v + e(2351) + b + e(2836), x[e(1715)] !== !1 ? (s += " { keyword: '" + e(2776) + e(2767) + x[e(2886)] + e(1347) + x[e(1011)][e(1901)](d) + e(2787), x[e(1835)].messages !== !1 && (s += e(1456)), x.opts[e(1219)] && (s += e(1319) + u + e(1452) + x[e(2443)] + e(1227) + l + " "), s += e(1334)) : s += " {} ", s += e(1899), !x.compositeRule && f && (x[e(1973)] ? s += e(479) : s += e(2162)), s += e(2679) + h + "; if (vErrors !== null) { if (" + h + e(1332) + h + e(423), x[e(1835)][e(226)] && (s += e(1334));
    } else f && (s += " if (true) { ");
    return s;
  }), dt;
}
var ft, vr;
function dc() {
  return vr || (vr = 1, ft = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(2555)][t], i = x[e(2624)] + "/" + t;
    x[e(1835)][e(226)];
    var c = x.util[e(1901)](n);
    return x[e(1835)][e(1506)] === !0 ? s += e(1461) + c + ");" : typeof x[e(1835)][e(1506)] == e(1622) && (s += " self._opts.$comment(" + c + ", " + x[e(1011)][e(1901)](i) + ", validate.root.schema);"), s;
  }), ft;
}
var lt, wr;
function fc() {
  return wr || (wr = 1, lt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x.dataLevel, c = x.schema[t], u = x.schemaPath + x.util[e(981)](t), d = x.errSchemaPath + "/" + t, f = !x.opts.allErrors, l = e(909) + (i || ""), b = e(614) + n, h = x[e(1835)][e(399)] && c && c[e(399)];
    h && (s += e(270) + n + e(2473) + x[e(1011)].getData(c[e(399)], i, x.dataPathArr) + "; "), !h && (s += " var schema" + n + " = validate.schema" + u + ";"), s += e(1186) + b + e(2219) + l + e(2183) + n + "); if (!" + b + e(975);
    var m = m || [];
    m[e(452)](s), s = "", x[e(1715)] !== !1 ? (s += e(1588) + "const" + e(2767) + x[e(2886)] + e(1347) + x[e(1011)][e(1901)](d) + " , params: { allowedValue: schema" + n + e(1334), x[e(1835)].messages !== !1 && (s += e(1733)), x[e(1835)][e(1219)] && (s += e(1319) + u + e(1452) + x[e(2443)] + " , data: " + l + " "), s += e(1334)) : s += e(1230);
    var v = s;
    return s = m.pop(), !x[e(1187)] && f ? x.async ? s += e(1086) + v + "]); " : s += e(651) + v + e(2753) : s += e(2467) + v + e(1899), s += " }", f && (s += e(1237)), s;
  }), lt;
}
var ht, Sr;
function lc() {
  return Sr || (Sr = 1, ht = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(2547)], c = x[e(2555)][t], u = x[e(2443)] + x[e(1011)].getProperty(t), d = x[e(2624)] + "/" + t, f = !x.opts[e(226)], l = e(909) + (i || ""), b = e(614) + n, h = e(2451) + n, m = x[e(1011)][e(1965)](x), v = "";
    m.level++;
    var k = e(614) + m[e(1552)], I = "i" + n, A = m[e(2547)] = x[e(2547)] + 1, T = e(909) + A, R = x[e(2610)], P = x[e(1835)][e(2746)] ? typeof c == e(544) && Object[e(750)](c).length > 0 || c === !1 : x[e(1011)].schemaHasRules(c, x[e(807)][e(403)]);
    if (s += e(1186) + h + e(2023) + b + ";", P) {
      var N = x.compositeRule;
      x[e(1187)] = m[e(1187)] = !0, m[e(2555)] = c, m[e(2443)] = u, m[e(2624)] = d, s += e(2007) + k + e(713) + I + e(1312) + I + e(840) + l + e(1723) + I + e(883), m[e(2886)] = x.util[e(239)](x[e(2886)], I, x[e(1835)][e(1467)], !0);
      var _ = l + "[" + I + "]";
      m[e(1885)][A] = I;
      var D = x.validate(m);
      m[e(2610)] = R, x.util.varOccurences(D, T) < 2 ? s += " " + x.util[e(1026)](D, T, _) + " " : s += e(2007) + T + e(2473) + _ + "; " + D + " ", s += e(851) + k + e(2063), x.compositeRule = m[e(1187)] = N, s += " " + v + e(2351) + k + e(1126);
    } else s += e(851) + l + ".length == 0) {";
    var j = j || [];
    j[e(452)](s), s = "", x[e(1715)] !== !1 ? (s += " { keyword: '" + e(2440) + e(2767) + x[e(2886)] + e(1347) + x[e(1011)][e(1901)](d) + e(2787), x[e(1835)][e(1793)] !== !1 && (s += e(2290)), x[e(1835)][e(1219)] && (s += " , schema: validate.schema" + u + e(1452) + x.schemaPath + e(1227) + l + " "), s += e(1334)) : s += e(1230);
    var F = s;
    return s = j[e(2231)](), !x.compositeRule && f ? x.async ? s += e(1086) + F + e(956) : s += e(651) + F + e(2753) : s += e(2467) + F + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(1858), P && (s += e(582) + h + "; if (vErrors !== null) { if (" + h + e(1332) + h + e(423)), x[e(1835)].allErrors && (s += e(1334)), s;
  }), ht;
}
var pt, kr;
function hc() {
  return kr || (kr = 1, pt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(2547)], c = x[e(2555)][t], u = x[e(2443)] + x[e(1011)][e(981)](t), d = x.errSchemaPath + "/" + t, f = !x[e(1835)][e(226)], l = e(909) + (i || ""), b = e(2451) + n, h = x.util[e(1965)](x), m = "";
    h[e(1552)]++;
    var v = e(614) + h.level, k = {}, I = {}, A = x[e(1835)][e(860)];
    for (N in c)
      if (N != "__proto__") {
        var T = c[N], R = Array.isArray(T) ? I : k;
        R[N] = T;
      }
    s += e(1186) + b + e(2163);
    var P = x[e(2886)];
    s += e(2730) + n + ";";
    for (var N in I)
      if (R = I[N], R[e(692)]) {
        if (s += e(1261) + l + x[e(1011)].getProperty(N) + e(1905), A && (s += e(1401) + l + e(476) + x[e(1011)][e(1848)](N) + e(1344)), f) {
          s += e(2513);
          var _ = R;
          if (_)
            for (var D, j = -1, F = _[e(692)] - 1; j < F; ) {
              D = _[j += 1], j && (s += e(1090));
              var C = x[e(1011)][e(981)](D), H = l + C;
              s += " ( ( " + H + e(2726), A && (s += e(2470) + l + ", '" + x[e(1011)][e(1848)](D) + e(1344)), s += ") && (missing" + n + e(2473) + x[e(1011)].toQuotedString(x.opts[e(1467)] ? D : C) + e(527);
            }
          s += e(1705);
          var U = e(254) + n, z = e(751) + U + e(1209);
          x[e(1835)][e(2739)] && (x[e(2886)] = x[e(1835)][e(1467)] ? x.util.getPathExpr(P, U, !0) : P + " + " + U);
          var G = G || [];
          G[e(452)](s), s = "", x[e(1715)] !== !1 ? (s += e(1588) + e(1356) + e(2767) + x[e(2886)] + e(1347) + x[e(1011)].toQuotedString(d) + e(2649) + x[e(1011)][e(1848)](N) + e(718) + z + e(1932) + R[e(692)] + ", deps: '" + x.util[e(1848)](R[e(692)] == 1 ? R[0] : R[e(2137)](", ")) + e(2862), x[e(1835)].messages !== !1 && (s += " , message: 'should have ", R[e(692)] == 1 ? s += e(2460) + x.util[e(1848)](R[0]) : s += e(291) + x.util[e(1848)](R.join(", ")), s += e(2101) + x[e(1011)].escapeQuotes(N) + e(274)), x[e(1835)][e(1219)] && (s += e(1319) + u + e(1452) + x[e(2443)] + " , data: " + l + " "), s += " } ") : s += " {} ";
          var i0 = s;
          s = G[e(2231)](), !x[e(1187)] && f ? x[e(1973)] ? s += e(1086) + i0 + "]); " : s += e(651) + i0 + "]; return false; " : s += " var err = " + i0 + e(1899);
        } else {
          s += e(1248);
          var u0 = R;
          if (u0)
            for (var D, l0 = -1, o0 = u0[e(692)] - 1; l0 < o0; ) {
              D = u0[l0 += 1];
              var C = x[e(1011)].getProperty(D), z = x[e(1011)].escapeQuotes(D), H = l + C;
              x.opts._errorDataPathProperty && (x[e(2886)] = x[e(1011)][e(1383)](P, D, x[e(1835)][e(1467)])), s += e(1261) + H + " === undefined ", A && (s += e(2470) + l + e(476) + x[e(1011)][e(1848)](D) + "') "), s += e(848), x[e(1715)] !== !1 ? (s += e(1588) + e(1356) + e(2767) + x[e(2886)] + e(1347) + x[e(1011)][e(1901)](d) + e(2649) + x[e(1011)][e(1848)](N) + e(718) + z + e(1932) + R[e(692)] + e(2831) + x.util.escapeQuotes(R[e(692)] == 1 ? R[0] : R[e(2137)](", ")) + e(2862), x[e(1835)][e(1793)] !== !1 && (s += e(2514), R[e(692)] == 1 ? s += e(2460) + x[e(1011)][e(1848)](R[0]) : s += e(291) + x.util[e(1848)](R.join(", ")), s += e(2101) + x.util[e(1848)](N) + e(274)), x.opts[e(1219)] && (s += e(1319) + u + e(1452) + x[e(2443)] + e(1227) + l + " "), s += e(1334)) : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
            }
        }
        s += e(1131), f && (m += "}", s += e(1237));
      }
    x.errorPath = P;
    var f0 = h[e(2610)];
    for (var N in k) {
      var T = k[N];
      (x.opts.strictKeywords ? typeof T == e(544) && Object[e(750)](T)[e(692)] > 0 || T === !1 : x[e(1011)][e(1392)](T, x.RULES.all)) && (s += " " + v + e(2640) + l + x[e(1011)][e(981)](N) + " !== undefined ", A && (s += e(1401) + l + e(476) + x[e(1011)].escapeQuotes(N) + e(1344)), s += e(185), h.schema = T, h.schemaPath = u + x.util[e(981)](N), h[e(2624)] = d + "/" + x[e(1011)][e(2358)](N), s += "  " + x[e(2621)](h) + " ", h[e(2610)] = f0, s += e(436), f && (s += " if (" + v + e(185), m += "}"));
    }
    return f && (s += e(2511) + m + e(851) + b + e(795)), s;
  }), pt;
}
var mt, Pr;
function pc() {
  return Pr || (Pr = 1, mt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x[e(2547)], c = x[e(2555)][t], u = x[e(2443)] + x[e(1011)][e(981)](t), d = x[e(2624)] + "/" + t, f = !x[e(1835)].allErrors, l = e(909) + (i || ""), b = e(614) + n, h = x[e(1835)].$data && c && c.$data;
    h && (s += e(270) + n + e(2473) + x[e(1011)][e(2559)](c[e(399)], i, x[e(1885)]) + "; ");
    var m = "i" + n, v = e(2555) + n;
    !h && (s += e(2007) + v + e(978) + u + ";"), s += "var " + b + ";", h && (s += " if (schema" + n + e(2128) + b + e(1160) + n + e(2611) + b + e(2434)), s += "" + b + e(991) + m + "=0; " + m + "<" + v + e(1723) + m + "++) if (equal(" + l + ", " + v + "[" + m + e(301) + b + e(2534), h && (s += e(1077)), s += e(2351) + b + ") {   ";
    var k = k || [];
    k[e(452)](s), s = "", x.createErrors !== !1 ? (s += e(1588) + e(1419) + e(2767) + x[e(2886)] + e(1347) + x.util[e(1901)](d) + e(2537) + n + " } ", x.opts[e(1793)] !== !1 && (s += e(1579)), x.opts.verbose && (s += " , schema: validate.schema" + u + e(1452) + x[e(2443)] + e(1227) + l + " "), s += " } ") : s += e(1230);
    var I = s;
    return s = k[e(2231)](), !x.compositeRule && f ? x[e(1973)] ? s += " throw new ValidationError([" + I + e(956) : s += " validate.errors = [" + I + "]; return false; " : s += e(2467) + I + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " }", f && (s += e(1237)), s;
  }), mt;
}
var bt, Ir;
function mc() {
  return Ir || (Ir = 1, bt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x[e(2547)], c = x[e(2555)][t], u = x[e(2443)] + x[e(1011)][e(981)](t), d = x[e(2624)] + "/" + t, f = !x[e(1835)][e(226)], l = "data" + (i || "");
    if (x[e(1835)].format === !1) return f && (s += " if (true) { "), s;
    var b = x[e(1835)][e(399)] && c && c.$data, h;
    b ? (s += e(270) + n + e(2473) + x[e(1011)][e(2559)](c.$data, i, x[e(1885)]) + "; ", h = "schema" + n) : h = c;
    var m = x[e(1835)][e(223)], v = Array.isArray(m);
    if (b) {
      var k = e(2197) + n, I = e(914) + n, A = "formatType" + n;
      s += " var " + k + e(1202) + h + "]; var " + I + e(2071) + k + e(1737) + k + e(528) + k + ".validate; var " + A + e(2473) + I + e(927) + k + ".type || 'string'; if (" + I + e(185), x[e(1973)] && (s += e(1236) + n + e(2473) + k + ".async; "), s += " " + k + e(2473) + k + ".validate; } if (  ", b && (s += " (" + h + " !== undefined && typeof " + h + e(2745)), s += " (", m != e(2524) && (s += " (" + h + " && !" + k + " ", v && (s += e(1321) + h + e(2794)), s += e(1368)), s += " (" + k + e(927) + A + e(2650) + r + e(671) + k + e(302), x[e(1973)] ? s += e(2554) + n + e(1648) + k + "(" + l + ") : " + k + "(" + l + e(2611) : s += " " + k + "(" + l + ") ", s += e(615) + k + e(1601) + l + "))))) {";
    } else {
      var k = x[e(823)][c];
      if (!k) {
        if (m == e(2524)) return x.logger[e(343)]('unknown format "' + c + '" ignored in schema at path "' + x[e(2624)] + '"'), f && (s += e(495)), s;
        if (v && m.indexOf(c) >= 0) return f && (s += " if (true) { "), s;
        throw new Error(e(1231) + c + e(215) + x[e(2624)] + '"');
      }
      var I = typeof k == e(544) && !(k instanceof RegExp) && k.validate, A = I && k[e(612)] || "string";
      if (I) {
        var T = k[e(1973)] === !0;
        k = k[e(2621)];
      }
      if (A != r) return f && (s += " if (true) { "), s;
      if (T) {
        if (!x[e(1973)]) throw new Error(e(1015));
        var R = e(823) + x[e(1011)][e(981)](c) + e(2779);
        s += e(1019) + R + "(" + l + "))) { ";
      } else {
        s += e(1377);
        var R = e(823) + x[e(1011)][e(981)](c);
        I && (R += e(2779)), typeof k == e(1622) ? s += " " + R + "(" + l + ") " : s += " " + R + e(1601) + l + ") ", s += ") { ";
      }
    }
    var P = P || [];
    P.push(s), s = "", x[e(1715)] !== !1 ? (s += e(1588) + e(2197) + "' , dataPath: (dataPath || '') + " + x[e(2886)] + e(1347) + x.util.toQuotedString(d) + e(672), b ? s += "" + h : s += "" + x[e(1011)][e(1901)](c), s += e(594), x.opts[e(1793)] !== !1 && (s += e(1345), b ? s += e(751) + h + " + '" : s += "" + x[e(1011)][e(1848)](c), s += `"' `), x.opts[e(1219)] && (s += e(875), b ? s += "validate.schema" + u : s += "" + x.util[e(1901)](c), s += "         , parentSchema: validate.schema" + x[e(2443)] + e(1227) + l + " "), s += e(1334)) : s += " {} ";
    var N = s;
    return s = P.pop(), !x[e(1187)] && f ? x[e(1973)] ? s += e(1086) + N + e(956) : s += e(651) + N + "]; return false; " : s += e(2467) + N + e(1899), s += e(1334), f && (s += e(1237)), s;
  }), bt;
}
var gt, Er;
function bc() {
  return Er || (Er = 1, gt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x[e(2547)], c = x[e(2555)][t], u = x[e(2443)] + x[e(1011)][e(981)](t), d = x[e(2624)] + "/" + t, f = !x.opts[e(226)], l = e(909) + (i || ""), b = "valid" + n, h = e(2451) + n, m = x.util[e(1965)](x);
    m.level++;
    var v = "valid" + m[e(1552)], k = x[e(2555)][e(2403)], I = x[e(2555)][e(2510)], A = k !== void 0 && (x[e(1835)][e(2746)] ? typeof k == "object" && Object[e(750)](k)[e(692)] > 0 || k === !1 : x[e(1011)].schemaHasRules(k, x[e(807)].all)), T = I !== void 0 && (x.opts[e(2746)] ? typeof I == e(544) && Object[e(750)](I)[e(692)] > 0 || I === !1 : x[e(1011)][e(1392)](I, x[e(807)][e(403)])), R = m.baseId;
    if (A || T) {
      var P;
      m[e(1715)] = !1, m.schema = c, m[e(2443)] = u, m[e(2624)] = d, s += e(2007) + h + e(1962) + b + e(1565);
      var N = x[e(1187)];
      x[e(1187)] = m[e(1187)] = !0, s += "  " + x.validate(m) + " ", m.baseId = R, m[e(1715)] = !0, s += e(582) + h + "; if (vErrors !== null) { if (" + h + e(1332) + h + e(2155), x.compositeRule = m[e(1187)] = N, A ? (s += " if (" + v + e(1657), m.schema = x[e(2555)][e(2403)], m[e(2443)] = x[e(2443)] + e(769), m.errSchemaPath = x[e(2624)] + e(2728), s += "  " + x.validate(m) + " ", m[e(2610)] = R, s += " " + b + e(2473) + v + "; ", A && T ? (P = e(2830) + n, s += e(2007) + P + e(1402)) : P = e(177), s += e(1334), T && (s += " else { ")) : s += e(2351) + v + e(185), T && (m[e(2555)] = x[e(2555)][e(2510)], m.schemaPath = x[e(2443)] + e(1052), m.errSchemaPath = x[e(2624)] + e(2110), s += "  " + x.validate(m) + " ", m[e(2610)] = R, s += " " + b + e(2473) + v + "; ", A && T ? (P = e(2830) + n, s += e(2007) + P + " = 'else'; ") : P = e(402), s += e(1334)), s += e(2351) + b + e(2836), x[e(1715)] !== !1 ? (s += e(1588) + "if" + e(2767) + x.errorPath + " , schemaPath: " + x[e(1011)][e(1901)](d) + e(887) + P + e(1334), x[e(1835)][e(1793)] !== !1 && (s += e(1698) + P + e(1968)), x[e(1835)].verbose && (s += e(1319) + u + " , parentSchema: validate.schema" + x[e(2443)] + e(1227) + l + " "), s += e(1334)) : s += e(1230), s += e(1899), !x[e(1187)] && f && (x[e(1973)] ? s += e(479) : s += e(2162)), s += e(1131), f && (s += e(1237));
    } else f && (s += e(495));
    return s;
  }), gt;
}
var yt, Rr;
function gc() {
  return Rr || (Rr = 1, yt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x.dataLevel, c = x[e(2555)][t], u = x[e(2443)] + x.util.getProperty(t), d = x.errSchemaPath + "/" + t, f = !x[e(1835)].allErrors, l = "data" + (i || ""), b = "valid" + n, h = "errs__" + n, m = x.util[e(1965)](x), v = "";
    m[e(1552)]++;
    var k = "valid" + m[e(1552)], I = "i" + n, A = m[e(2547)] = x[e(2547)] + 1, T = e(909) + A, R = x.baseId;
    if (s += e(1186) + h + e(2023) + b + ";", Array[e(1783)](c)) {
      var P = x[e(2555)].additionalItems;
      if (P === !1) {
        s += " " + b + e(2473) + l + e(1931) + c[e(692)] + "; ";
        var N = d;
        d = x[e(2624)] + e(360), s += e(1779) + b + e(975);
        var _ = _ || [];
        _.push(s), s = "", x[e(1715)] !== !1 ? (s += e(1588) + e(999) + e(2767) + x[e(2886)] + e(1347) + x[e(1011)][e(1901)](d) + " , params: { limit: " + c[e(692)] + e(1334), x[e(1835)][e(1793)] !== !1 && (s += " , message: 'should NOT have more than " + c.length + e(861)), x.opts[e(1219)] && (s += e(1355) + x[e(2443)] + e(1227) + l + " "), s += " } ") : s += " {} ";
        var D = s;
        s = _[e(2231)](), !x[e(1187)] && f ? x.async ? s += " throw new ValidationError([" + D + e(956) : s += " validate.errors = [" + D + e(2753) : s += e(2467) + D + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } ", d = N, f && (v += "}", s += " else { ");
      }
      var j = c;
      if (j) {
        for (var F, C = -1, H = j[e(692)] - 1; C < H; )
          if (F = j[C += 1], x[e(1835)].strictKeywords ? typeof F == e(544) && Object[e(750)](F)[e(692)] > 0 || F === !1 : x[e(1011)][e(1392)](F, x[e(807)].all)) {
            s += " " + k + " = true; if (" + l + ".length > " + C + ") { ";
            var U = l + "[" + C + "]";
            m[e(2555)] = F, m[e(2443)] = u + "[" + C + "]", m[e(2624)] = d + "/" + C, m[e(2886)] = x.util[e(239)](x[e(2886)], C, x[e(1835)][e(1467)], !0), m[e(1885)][A] = C;
            var z = x[e(2621)](m);
            m[e(2610)] = R, x[e(1011)].varOccurences(z, T) < 2 ? s += " " + x[e(1011)][e(1026)](z, T, U) + " " : s += e(2007) + T + e(2473) + U + "; " + z + " ", s += e(436), f && (s += e(851) + k + e(185), v += "}");
          }
      }
      if (typeof P == e(544) && (x[e(1835)].strictKeywords ? typeof P == e(544) && Object[e(750)](P)[e(692)] > 0 || P === !1 : x[e(1011)].schemaHasRules(P, x.RULES[e(403)]))) {
        m[e(2555)] = P, m.schemaPath = x[e(2443)] + e(1056), m[e(2624)] = x[e(2624)] + e(360), s += " " + k + e(732) + l + e(738) + c.length + e(1756) + I + e(2473) + c[e(692)] + "; " + I + " < " + l + e(1723) + I + e(883), m[e(2886)] = x[e(1011)][e(239)](x[e(2886)], I, x[e(1835)].jsonPointers, !0);
        var U = l + "[" + I + "]";
        m.dataPathArr[A] = I;
        var z = x[e(2621)](m);
        m[e(2610)] = R, x[e(1011)][e(1201)](z, T) < 2 ? s += " " + x[e(1011)][e(1026)](z, T, U) + " " : s += e(2007) + T + e(2473) + U + "; " + z + " ", f && (s += e(2351) + k + ") break; "), s += e(804), f && (s += e(851) + k + ") { ", v += "}");
      }
    } else if (x.opts[e(2746)] ? typeof c == e(544) && Object[e(750)](c).length > 0 || c === !1 : x[e(1011)][e(1392)](c, x[e(807)][e(403)])) {
      m[e(2555)] = c, m[e(2443)] = u, m[e(2624)] = d, s += "  for (var " + I + e(2473) + 0 + "; " + I + " < " + l + e(1723) + I + e(883), m[e(2886)] = x[e(1011)].getPathExpr(x[e(2886)], I, x.opts.jsonPointers, !0);
      var U = l + "[" + I + "]";
      m[e(1885)][A] = I;
      var z = x[e(2621)](m);
      m[e(2610)] = R, x.util[e(1201)](z, T) < 2 ? s += " " + x[e(1011)][e(1026)](z, T, U) + " " : s += e(2007) + T + " = " + U + "; " + z + " ", f && (s += " if (!" + k + e(1520)), s += " }";
    }
    return f && (s += " " + v + e(851) + h + " == errors) {"), s;
  }), yt;
}
var vt, Cr;
function Fr() {
  return Cr || (Cr = 1, vt = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x.dataLevel, c = x[e(2555)][t], u = x.schemaPath + x[e(1011)][e(981)](t), d = x.errSchemaPath + "/" + t, f = !x[e(1835)].allErrors, R, l = e(909) + (i || ""), b = x.opts.$data && c && c[e(399)], h;
    b ? (s += e(270) + n + " = " + x[e(1011)][e(2559)](c[e(399)], i, x[e(1885)]) + "; ", h = e(2555) + n) : h = c;
    var m = t == e(2536), v = m ? "exclusiveMaximum" : e(2213), k = x[e(2555)][v], I = x[e(1835)][e(399)] && k && k[e(399)], A = m ? "<" : ">", T = m ? ">" : "<", R = void 0;
    if (!(b || typeof c == "number" || c === void 0)) throw new Error(t + " must be number");
    if (!(I || k === void 0 || typeof k == e(2153) || typeof k == "boolean")) throw new Error(v + " must be number or boolean");
    if (I) {
      var P = x[e(1011)][e(2559)](k.$data, i, x.dataPathArr), N = e(2755) + n, _ = "exclType" + n, D = e(1980) + n, j = "op" + n, F = e(751) + j + e(1209);
      s += " var schemaExcl" + n + e(2473) + P + "; ", P = e(770) + n, s += e(2007) + N + e(1922) + _ + e(2071) + P + e(663) + _ + " != 'boolean' && " + _ + e(1764) + _ + e(2152);
      var R = v, C = C || [];
      C[e(452)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + (R || "_exclusiveLimit") + e(2767) + x[e(2886)] + e(1347) + x.util.toQuotedString(d) + e(2787), x.opts[e(1793)] !== !1 && (s += e(2250) + v + e(2246)), x[e(1835)][e(1219)] && (s += e(1319) + u + e(1452) + x[e(2443)] + e(1227) + l + " "), s += e(1334)) : s += e(1230);
      var H = s;
      s = C.pop(), !x[e(1187)] && f ? x.async ? s += e(1086) + H + "]); " : s += e(651) + H + e(2753) : s += e(2467) + H + e(1899), s += " } else if ( ", b && (s += " (" + h + " !== undefined && typeof " + h + " != 'number') || "), s += " " + _ + e(285) + N + " = " + h + " === undefined || " + P + " " + A + "= " + h + e(294) + l + " " + T + "= " + P + e(615) + l + " " + T + " " + h + e(2406) + N + " = " + P + " === true) ? " + l + " " + T + "= " + h + e(615) + l + " " + T + " " + h + e(2321) + l + e(2717) + l + e(595) + n + e(2473) + N + " ? '" + A + e(1109) + A + e(1365), c === void 0 && (R = v, d = x[e(2624)] + "/" + v, h = P, b = I);
    } else {
      var D = typeof k == e(2153), F = A;
      if (D && b) {
        var j = "'" + F + "'";
        s += e(1261), b && (s += " (" + h + e(1270) + h + e(2113)), s += e(2376) + h + e(466) + k + " " + A + "= " + h + e(1589) + l + " " + T + "= " + k + e(615) + l + " " + T + " " + h + e(2321) + l + e(2717) + l + e(185);
      } else {
        D && c === void 0 ? (N = !0, R = v, d = x.errSchemaPath + "/" + v, h = k, T += "=") : (D && (h = Math[e(m ? 1279 : 1393)](k, c)), k === (D ? h : !0) ? (N = !0, R = v, d = x.errSchemaPath + "/" + v, T += "=") : (N = !1, F += "="));
        var j = "'" + F + "'";
        s += e(1261), b && (s += " (" + h + e(1270) + h + e(2113)), s += " " + l + " " + T + " " + h + e(1090) + l + e(2717) + l + e(185);
      }
    }
    R = R || t;
    var C = C || [];
    C.push(s), s = "", x[e(1715)] !== !1 ? (s += e(1588) + (R || "_limit") + e(2767) + x[e(2886)] + e(1347) + x[e(1011)][e(1901)](d) + e(669) + j + e(2648) + h + e(1303) + N + e(1334), x[e(1835)][e(1793)] !== !1 && (s += e(1145) + F + " ", b ? s += e(751) + h : s += "" + h + "'"), x[e(1835)][e(1219)] && (s += e(875), b ? s += "validate.schema" + u : s += "" + c, s += "         , parentSchema: validate.schema" + x[e(2443)] + " , data: " + l + " "), s += e(1334)) : s += " {} ";
    var H = s;
    return s = C.pop(), !x.compositeRule && f ? x[e(1973)] ? s += " throw new ValidationError([" + H + e(956) : s += e(651) + H + e(2753) : s += e(2467) + H + e(1899), s += e(1334), f && (s += e(1237)), s;
  }), vt;
}
var wt, Nr;
function Tr() {
  return Nr || (Nr = 1, wt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x[e(2547)], c = x[e(2555)][t], u = x[e(2443)] + x.util[e(981)](t), d = x.errSchemaPath + "/" + t, f = !x[e(1835)][e(226)], v, l = e(909) + (i || ""), b = x[e(1835)].$data && c && c[e(399)], h;
    if (b ? (s += e(270) + n + e(2473) + x[e(1011)][e(2559)](c[e(399)], i, x[e(1885)]) + "; ", h = e(2555) + n) : h = c, !(b || typeof c == "number")) throw new Error(t + " must be number");
    var m = t == e(2575) ? ">" : "<";
    s += e(723), b && (s += " (" + h + e(1270) + h + e(2113)), s += " " + l + e(2186) + m + " " + h + e(185);
    var v = t, k = k || [];
    k.push(s), s = "", x.createErrors !== !1 ? (s += e(1588) + (v || e(974)) + e(2767) + x[e(2886)] + " , schemaPath: " + x[e(1011)][e(1901)](d) + " , params: { limit: " + h + e(1334), x[e(1835)][e(1793)] !== !1 && (s += " , message: 'should NOT have ", t == "maxItems" ? s += e(2240) : s += e(1139), s += e(1609), b ? s += e(751) + h + e(1209) : s += "" + c, s += e(861)), x.opts[e(1219)] && (s += " , schema:  ", b ? s += e(2313) + u : s += "" + c, s += "         , parentSchema: validate.schema" + x[e(2443)] + e(1227) + l + " "), s += e(1334)) : s += e(1230);
    var I = s;
    return s = k[e(2231)](), !x[e(1187)] && f ? x[e(1973)] ? s += e(1086) + I + e(956) : s += " validate.errors = [" + I + e(2753) : s += e(2467) + I + e(1899), s += "} ", f && (s += e(1237)), s;
  }), wt;
}
var St, qr;
function Ar() {
  return qr || (qr = 1, St = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x.dataLevel, c = x[e(2555)][t], u = x[e(2443)] + x[e(1011)][e(981)](t), d = x[e(2624)] + "/" + t, f = !x[e(1835)].allErrors, v, l = "data" + (i || ""), b = x[e(1835)][e(399)] && c && c[e(399)], h;
    if (b ? (s += e(270) + n + e(2473) + x[e(1011)].getData(c.$data, i, x[e(1885)]) + "; ", h = "schema" + n) : h = c, !(b || typeof c == e(2153))) throw new Error(t + e(1124));
    var m = t == e(558) ? ">" : "<";
    s += e(723), b && (s += " (" + h + e(1270) + h + e(2113)), x[e(1835)][e(1408)] === !1 ? s += " " + l + ".length " : s += e(509) + l + ") ", s += " " + m + " " + h + ") { ";
    var v = t, k = k || [];
    k.push(s), s = "", x[e(1715)] !== !1 ? (s += " { keyword: '" + (v || e(1212)) + "' , dataPath: (dataPath || '') + " + x[e(2886)] + e(1347) + x[e(1011)][e(1901)](d) + e(1288) + h + e(1334), x[e(1835)][e(1793)] !== !1 && (s += e(1045), t == e(558) ? s += e(1637) : s += e(1453), s += e(1609), b ? s += e(751) + h + e(1209) : s += "" + c, s += e(730)), x[e(1835)][e(1219)] && (s += e(875), b ? s += "validate.schema" + u : s += "" + c, s += e(922) + x.schemaPath + e(1227) + l + " "), s += e(1334)) : s += " {} ";
    var I = s;
    return s = k.pop(), !x[e(1187)] && f ? x[e(1973)] ? s += e(1086) + I + "]); " : s += e(651) + I + "]; return false; " : s += e(2467) + I + e(1899), s += "} ", f && (s += e(1237)), s;
  }), St;
}
var kt, Or;
function _r() {
  return Or || (Or = 1, kt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x.dataLevel, c = x[e(2555)][t], u = x[e(2443)] + x[e(1011)][e(981)](t), d = x[e(2624)] + "/" + t, f = !x[e(1835)][e(226)], v, l = e(909) + (i || ""), b = x.opts[e(399)] && c && c[e(399)], h;
    if (b ? (s += e(270) + n + e(2473) + x[e(1011)].getData(c.$data, i, x[e(1885)]) + "; ", h = e(2555) + n) : h = c, !(b || typeof c == e(2153))) throw new Error(t + e(1124));
    var m = t == "maxProperties" ? ">" : "<";
    s += e(723), b && (s += " (" + h + e(1270) + h + e(2113)), s += e(1060) + l + e(2589) + m + " " + h + e(185);
    var v = t, k = k || [];
    k[e(452)](s), s = "", x.createErrors !== !1 ? (s += " { keyword: '" + (v || e(870)) + "' , dataPath: (dataPath || '') + " + x[e(2886)] + e(1347) + x[e(1011)].toQuotedString(d) + e(1288) + h + e(1334), x[e(1835)][e(1793)] !== !1 && (s += e(2328), t == e(197) ? s += "more" : s += e(1139), s += " than ", b ? s += e(751) + h + e(1209) : s += "" + c, s += e(293)), x[e(1835)][e(1219)] && (s += e(875), b ? s += e(2313) + u : s += "" + c, s += e(922) + x[e(2443)] + e(1227) + l + " "), s += e(1334)) : s += e(1230);
    var I = s;
    return s = k[e(2231)](), !x[e(1187)] && f ? x[e(1973)] ? s += e(1086) + I + "]); " : s += " validate.errors = [" + I + e(2753) : s += e(2467) + I + e(1899), s += "} ", f && (s += " else { "), s;
  }), kt;
}
var Pt, Dr;
function yc() {
  return Dr || (Dr = 1, Pt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x[e(2547)], c = x.schema[t], u = x[e(2443)] + x[e(1011)][e(981)](t), d = x[e(2624)] + "/" + t, f = !x.opts[e(226)], l = e(909) + (i || ""), b = x[e(1835)].$data && c && c.$data, h;
    if (b ? (s += e(270) + n + e(2473) + x.util[e(2559)](c[e(399)], i, x[e(1885)]) + "; ", h = "schema" + n) : h = c, !(b || typeof c == e(2153))) throw new Error(t + e(1124));
    s += e(2496) + n + ";if (", b && (s += " " + h + " !== undefined && ( typeof " + h + " != 'number' || "), s += " (division" + n + e(2473) + l + e(488) + h + ", ", x[e(1835)][e(2257)] ? s += e(2780) + n + ") - division" + n + e(2239) + x[e(1835)][e(2257)] + " " : s += " division" + n + " !== parseInt(division" + n + ") ", s += e(2010), b && (s += e(2302)), s += " ) {   ";
    var m = m || [];
    m.push(s), s = "", x[e(1715)] !== !1 ? (s += e(1588) + e(888) + "' , dataPath: (dataPath || '') + " + x[e(2886)] + e(1347) + x[e(1011)][e(1901)](d) + e(350) + h + " } ", x.opts[e(1793)] !== !1 && (s += " , message: 'should be multiple of ", b ? s += "' + " + h : s += "" + h + "'"), x.opts[e(1219)] && (s += " , schema:  ", b ? s += e(2313) + u : s += "" + c, s += e(922) + x[e(2443)] + e(1227) + l + " "), s += e(1334)) : s += e(1230);
    var v = s;
    return s = m.pop(), !x[e(1187)] && f ? x[e(1973)] ? s += " throw new ValidationError([" + v + e(956) : s += e(651) + v + e(2753) : s += e(2467) + v + e(1899), s += "} ", f && (s += e(1237)), s;
  }), Pt;
}
var It, jr;
function vc() {
  return jr || (jr = 1, It = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(2547)], c = x.schema[t], u = x[e(2443)] + x[e(1011)].getProperty(t), d = x.errSchemaPath + "/" + t, f = !x[e(1835)][e(226)], l = e(909) + (i || ""), b = e(2451) + n, h = x[e(1011)][e(1965)](x);
    h[e(1552)]++;
    var m = e(614) + h.level;
    if (x.opts[e(2746)] ? typeof c == e(544) && Object[e(750)](c)[e(692)] > 0 || c === !1 : x.util[e(1392)](c, x[e(807)][e(403)])) {
      h[e(2555)] = c, h[e(2443)] = u, h[e(2624)] = d, s += " var " + b + e(2182);
      var v = x.compositeRule;
      x.compositeRule = h[e(1187)] = !0, h[e(1715)] = !1;
      var k;
      h.opts[e(226)] && (k = h[e(1835)].allErrors, h[e(1835)][e(226)] = !1), s += " " + x[e(2621)](h) + " ", h[e(1715)] = !0, k && (h[e(1835)][e(226)] = k), x[e(1187)] = h[e(1187)] = v, s += e(851) + m + ") {   ";
      var I = I || [];
      I[e(452)](s), s = "", x[e(1715)] !== !1 ? (s += e(1588) + "not' , dataPath: (dataPath || '') + " + x[e(2886)] + e(1347) + x[e(1011)][e(1901)](d) + e(2787), x[e(1835)].messages !== !1 && (s += e(1612)), x.opts[e(1219)] && (s += " , schema: validate.schema" + u + e(1452) + x.schemaPath + " , data: " + l + " "), s += e(1334)) : s += " {} ";
      var A = s;
      s = I[e(2231)](), !x[e(1187)] && f ? x.async ? s += " throw new ValidationError([" + A + e(956) : s += e(651) + A + e(2753) : s += " var err = " + A + e(1899), s += e(2679) + b + e(1557) + b + e(1332) + b + "; else vErrors = null; } ", x[e(1835)].allErrors && (s += e(1334));
    } else s += e(589), x[e(1715)] !== !1 ? (s += e(1588) + e(2705) + "' , dataPath: (dataPath || '') + " + x.errorPath + e(1347) + x[e(1011)][e(1901)](d) + e(2787), x[e(1835)][e(1793)] !== !1 && (s += e(1612)), x[e(1835)][e(1219)] && (s += e(1319) + u + e(1452) + x.schemaPath + e(1227) + l + " "), s += e(1334)) : s += e(1230), s += e(1899), f && (s += " if (false) { ");
    return s;
  }), It;
}
var Et, Mr;
function wc() {
  return Mr || (Mr = 1, Et = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(2547)], c = x[e(2555)][t], u = x.schemaPath + x[e(1011)][e(981)](t), d = x[e(2624)] + "/" + t, f = !x[e(1835)][e(226)], l = e(909) + (i || ""), b = e(614) + n, h = e(2451) + n, m = x[e(1011)].copy(x), v = "";
    m[e(1552)]++;
    var k = e(614) + m[e(1552)], I = m[e(2610)], A = e(2801) + n, T = e(1604) + n;
    s += e(1186) + h + e(598) + A + e(1407) + b + e(1407) + T + e(1481);
    var R = x[e(1187)];
    x.compositeRule = m[e(1187)] = !0;
    var P = c;
    if (P)
      for (var N, _ = -1, D = P[e(692)] - 1; _ < D; )
        N = P[_ += 1], (x[e(1835)][e(2746)] ? typeof N == e(544) && Object[e(750)](N)[e(692)] > 0 || N === !1 : x[e(1011)][e(1392)](N, x[e(807)][e(403)])) ? (m[e(2555)] = N, m[e(2443)] = u + "[" + _ + "]", m.errSchemaPath = d + "/" + _, s += "  " + x[e(2621)](m) + " ", m[e(2610)] = I) : s += e(2007) + k + e(854), _ && (s += e(851) + k + e(927) + A + e(185) + b + e(1633) + T + e(1170) + T + ", " + _ + "]; } else { ", v += "}"), s += e(851) + k + e(185) + b + " = " + A + " = true; " + T + e(2473) + _ + e(325);
    return x[e(1187)] = m[e(1187)] = R, s += "" + v + "if (!" + b + e(2836), x[e(1715)] !== !1 ? (s += e(1588) + "oneOf" + e(2767) + x[e(2886)] + e(1347) + x[e(1011)][e(1901)](d) + e(2359) + T + " } ", x[e(1835)].messages !== !1 && (s += e(2491)), x[e(1835)][e(1219)] && (s += e(1319) + u + " , parentSchema: validate.schema" + x.schemaPath + e(1227) + l + " "), s += e(1334)) : s += e(1230), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !x[e(1187)] && f && (x[e(1973)] ? s += e(479) : s += " validate.errors = vErrors; return false; "), s += e(1983) + h + e(1557) + h + ") vErrors.length = " + h + e(389), x.opts[e(226)] && (s += e(1334)), s;
  }), Et;
}
var Rt, Lr;
function Sc() {
  return Lr || (Lr = 1, Rt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x[e(2547)], c = x[e(2555)][t], u = x[e(2443)] + x.util.getProperty(t), d = x.errSchemaPath + "/" + t, f = !x.opts[e(226)], l = e(909) + (i || ""), b = x[e(1835)].$data && c && c[e(399)], h;
    b ? (s += " var schema" + n + " = " + x[e(1011)][e(2559)](c[e(399)], i, x.dataPathArr) + "; ", h = e(2555) + n) : h = c;
    var m = b ? "(new RegExp(" + h + "))" : x.usePattern(c);
    s += e(723), b && (s += " (" + h + e(1270) + h + e(2745)), s += " !" + m + e(1601) + l + e(2129);
    var v = v || [];
    v[e(452)](s), s = "", x.createErrors !== !1 ? (s += e(1588) + e(1267) + e(2767) + x[e(2886)] + e(1347) + x[e(1011)][e(1901)](d) + e(2339), b ? s += "" + h : s += "" + x[e(1011)][e(1901)](c), s += e(594), x.opts[e(1793)] !== !1 && (s += ` , message: 'should match pattern "`, b ? s += e(751) + h + e(1209) : s += "" + x[e(1011)][e(1848)](c), s += `"' `), x[e(1835)].verbose && (s += e(875), b ? s += e(2313) + u : s += "" + x[e(1011)][e(1901)](c), s += e(922) + x[e(2443)] + " , data: " + l + " "), s += e(1334)) : s += e(1230);
    var k = s;
    return s = v[e(2231)](), !x[e(1187)] && f ? x[e(1973)] ? s += " throw new ValidationError([" + k + e(956) : s += " validate.errors = [" + k + e(2753) : s += e(2467) + k + e(1899), s += "} ", f && (s += " else { "), s;
  }), Rt;
}
var Ct, $r;
function kc() {
  return $r || ($r = 1, Ct = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(2547)], c = x.schema[t], u = x[e(2443)] + x[e(1011)][e(981)](t), d = x[e(2624)] + "/" + t, f = !x[e(1835)].allErrors, l = e(909) + (i || ""), b = e(2451) + n, h = x[e(1011)][e(1965)](x), m = "";
    h[e(1552)]++;
    var v = e(614) + h[e(1552)], k = e(1867) + n, I = "idx" + n, A = h.dataLevel = x[e(2547)] + 1, T = e(909) + A, R = e(1884) + n, P = Object.keys(c || {})[e(2145)](l0), N = x.schema[e(886)] || {}, _ = Object.keys(N)[e(2145)](l0), D = x[e(2555)][e(2659)], j = P[e(692)] || _.length, F = D === !1, C = typeof D == e(544) && Object[e(750)](D)[e(692)], H = x[e(1835)][e(408)], U = F || C || H, z = x.opts.ownProperties, G = x[e(2610)], i0 = x[e(2555)][e(310)];
    if (i0 && !(x[e(1835)][e(399)] && i0[e(399)]) && i0.length < x[e(1835)].loopRequired) var u0 = x[e(1011)].toHash(i0);
    function l0(Mx) {
      return Mx !== "__proto__";
    }
    if (s += e(1186) + b + e(2023) + v + e(2410), z && (s += e(2007) + R + e(2055)), U) {
      if (z ? s += " " + R + e(2473) + R + e(764) + l + "); for (var " + I + e(2713) + I + "<" + R + e(1723) + I + e(1238) + k + e(2473) + R + "[" + I + e(2492) : s += e(2785) + k + " in " + l + e(185), j) {
        if (s += e(2725) + n + e(814), P.length)
          if (P.length > 8) s += e(1945) + u + e(279) + k + ") ";
          else {
            var o0 = P;
            if (o0)
              for (var f0, k0 = -1, S0 = o0.length - 1; k0 < S0; )
                f0 = o0[k0 += 1], s += e(1090) + k + e(458) + x.util[e(1901)](f0) + " ";
          }
        if (_[e(692)]) {
          var M0 = _;
          if (M0)
            for (var F0, J0 = -1, O = M0[e(692)] - 1; J0 < O; )
              F0 = M0[J0 += 1], s += e(1090) + x[e(2375)](F0) + e(1601) + k + ") ";
        }
        s += e(2881) + n + e(185);
      }
      if (H == e(403)) s += " delete " + l + "[" + k + e(2492);
      else {
        var q = x[e(2886)], M = e(751) + k + e(1209);
        if (x[e(1835)]._errorDataPathProperty && (x.errorPath = x[e(1011)][e(239)](x.errorPath, k, x[e(1835)].jsonPointers)), F)
          if (H) s += e(309) + l + "[" + k + e(2492);
          else {
            s += " " + v + e(1633);
            var Q = d;
            d = x.errSchemaPath + e(499);
            var J = J || [];
            J[e(452)](s), s = "", x[e(1715)] !== !1 ? (s += " { keyword: 'additionalProperties" + e(2767) + x[e(2886)] + e(1347) + x.util[e(1901)](d) + e(2142) + M + "' } ", x[e(1835)].messages !== !1 && (s += e(2250), x[e(1835)]._errorDataPathProperty ? s += e(1876) : s += e(328), s += "' "), x[e(1835)].verbose && (s += " , schema: false , parentSchema: validate.schema" + x[e(2443)] + e(1227) + l + " "), s += e(1334)) : s += e(1230);
            var V = s;
            s = J[e(2231)](), !x[e(1187)] && f ? x[e(1973)] ? s += e(1086) + V + e(956) : s += e(651) + V + e(2753) : s += e(2467) + V + e(1899), d = Q, f && (s += e(275));
          }
        else if (C)
          if (H == e(2786)) {
            s += e(2007) + b + e(2182);
            var X = x.compositeRule;
            x[e(1187)] = h[e(1187)] = !0, h[e(2555)] = D, h[e(2443)] = x[e(2443)] + e(284), h[e(2624)] = x[e(2624)] + e(499), h[e(2886)] = x[e(1835)][e(2739)] ? x[e(2886)] : x[e(1011)][e(239)](x[e(2886)], k, x.opts[e(1467)]);
            var s0 = l + "[" + k + "]";
            h[e(1885)][A] = k;
            var c0 = x.validate(h);
            h[e(2610)] = G, x.util[e(1201)](c0, T) < 2 ? s += " " + x[e(1011)][e(1026)](c0, T, s0) + " " : s += e(2007) + T + e(2473) + s0 + "; " + c0 + " ", s += e(2351) + v + ") { errors = " + b + e(261) + l + "[" + k + e(2258), x[e(1187)] = h[e(1187)] = X;
          } else {
            h[e(2555)] = D, h.schemaPath = x[e(2443)] + e(284), h[e(2624)] = x[e(2624)] + e(499), h[e(2886)] = x.opts._errorDataPathProperty ? x[e(2886)] : x.util[e(239)](x[e(2886)], k, x[e(1835)][e(1467)]);
            var s0 = l + "[" + k + "]";
            h[e(1885)][A] = k;
            var c0 = x[e(2621)](h);
            h.baseId = G, x[e(1011)][e(1201)](c0, T) < 2 ? s += " " + x[e(1011)].varReplace(c0, T, s0) + " " : s += e(2007) + T + e(2473) + s0 + "; " + c0 + " ", f && (s += " if (!" + v + ") break; ");
          }
        x[e(2886)] = q;
      }
      j && (s += " } "), s += e(436), f && (s += e(851) + v + ") { ", m += "}");
    }
    var x0 = x.opts[e(2132)] && !x.compositeRule;
    if (P[e(692)]) {
      var L0 = P;
      if (L0)
        for (var f0, A0 = -1, H0 = L0[e(692)] - 1; A0 < H0; ) {
          f0 = L0[A0 += 1];
          var w0 = c[f0];
          if (x[e(1835)][e(2746)] ? typeof w0 == e(544) && Object[e(750)](w0)[e(692)] > 0 || w0 === !1 : x[e(1011)][e(1392)](w0, x[e(807)][e(403)])) {
            var G0 = x[e(1011)][e(981)](f0), s0 = l + G0, ne = x0 && w0[e(1944)] !== void 0;
            h[e(2555)] = w0, h.schemaPath = u + G0, h[e(2624)] = d + "/" + x[e(1011)][e(2358)](f0), h[e(2886)] = x[e(1011)][e(1383)](x[e(2886)], f0, x[e(1835)][e(1467)]), h[e(1885)][A] = x.util.toQuotedString(f0);
            var c0 = x[e(2621)](h);
            if (h[e(2610)] = G, x[e(1011)][e(1201)](c0, T) < 2) {
              c0 = x.util[e(1026)](c0, T, s0);
              var Q0 = s0;
            } else {
              var Q0 = T;
              s += e(2007) + T + " = " + s0 + "; ";
            }
            if (ne) s += " " + c0 + " ";
            else {
              if (u0 && u0[f0]) {
                s += " if ( " + Q0 + e(2726), z && (s += e(2470) + l + e(476) + x[e(1011)][e(1848)](f0) + e(1344)), s += e(185) + v + e(1633);
                var q = x[e(2886)], Q = d, O0 = x[e(1011)].escapeQuotes(f0);
                x[e(1835)][e(2739)] && (x[e(2886)] = x.util.getPath(q, f0, x[e(1835)][e(1467)])), d = x.errSchemaPath + e(2615);
                var J = J || [];
                J.push(s), s = "", x[e(1715)] !== !1 ? (s += e(1588) + e(310) + e(2767) + x[e(2886)] + " , schemaPath: " + x[e(1011)][e(1901)](d) + e(2835) + O0 + e(2862), x.opts[e(1793)] !== !1 && (s += e(2250), x[e(1835)]._errorDataPathProperty ? s += e(616) : s += "should have required property \\'" + O0 + "\\'", s += "' "), x[e(1835)].verbose && (s += e(1319) + u + " , parentSchema: validate.schema" + x[e(2443)] + e(1227) + l + " "), s += e(1334)) : s += e(1230);
                var V = s;
                s = J.pop(), !x.compositeRule && f ? x[e(1973)] ? s += " throw new ValidationError([" + V + "]); " : s += e(651) + V + e(2753) : s += e(2467) + V + e(1899), d = Q, x[e(2886)] = q, s += " } else { ";
              } else f ? (s += e(1261) + Q0 + e(2726), z && (s += " || ! Object.prototype.hasOwnProperty.call(" + l + e(476) + x[e(1011)].escapeQuotes(f0) + "') "), s += ") { " + v + e(453)) : (s += e(851) + Q0 + e(1905), z && (s += e(334) + l + e(476) + x[e(1011)][e(1848)](f0) + e(1344)), s += e(1248));
              s += " " + c0 + e(1334);
            }
          }
          f && (s += e(851) + v + ") { ", m += "}");
        }
    }
    if (_.length) {
      var z0 = _;
      if (z0)
        for (var F0, Y0 = -1, Me = z0.length - 1; Y0 < Me; ) {
          F0 = z0[Y0 += 1];
          var w0 = N[F0];
          if (x[e(1835)][e(2746)] ? typeof w0 == e(544) && Object[e(750)](w0).length > 0 || w0 === !1 : x[e(1011)][e(1392)](w0, x.RULES.all)) {
            h[e(2555)] = w0, h.schemaPath = x[e(2443)] + e(1811) + x[e(1011)][e(981)](F0), h[e(2624)] = x[e(2624)] + e(2435) + x.util[e(2358)](F0), z ? s += " " + R + e(2473) + R + e(764) + l + e(432) + I + e(2713) + I + "<" + R + ".length; " + I + e(1238) + k + e(2473) + R + "[" + I + e(2492) : s += e(2785) + k + e(2344) + l + ") { ", s += e(851) + x[e(2375)](F0) + e(1601) + k + e(459), h[e(2886)] = x[e(1011)][e(239)](x[e(2886)], k, x[e(1835)][e(1467)]);
            var s0 = l + "[" + k + "]";
            h[e(1885)][A] = k;
            var c0 = x.validate(h);
            h[e(2610)] = G, x.util.varOccurences(c0, T) < 2 ? s += " " + x.util[e(1026)](c0, T, s0) + " " : s += e(2007) + T + " = " + s0 + "; " + c0 + " ", f && (s += e(2351) + v + e(1520)), s += " } ", f && (s += e(1529) + v + " = true; "), s += " }  ", f && (s += e(851) + v + e(185), m += "}");
          }
        }
    }
    return f && (s += " " + m + e(851) + b + " == errors) {"), s;
  }), Ct;
}
var Ft, Ur;
function Pc() {
  return Ur || (Ur = 1, Ft = function(x, t, r) {
    const e = K;
    var s = " ", n = x.level, i = x[e(2547)], c = x[e(2555)][t], u = x[e(2443)] + x[e(1011)][e(981)](t), d = x[e(2624)] + "/" + t, f = !x.opts[e(226)], l = "data" + (i || ""), b = e(2451) + n, h = x[e(1011)][e(1965)](x), m = "";
    h[e(1552)]++;
    var v = e(614) + h[e(1552)];
    if (s += e(1186) + b + e(2163), x[e(1835)][e(2746)] ? typeof c == e(544) && Object[e(750)](c).length > 0 || c === !1 : x[e(1011)][e(1392)](c, x[e(807)][e(403)])) {
      h[e(2555)] = c, h[e(2443)] = u, h.errSchemaPath = d;
      var k = e(1867) + n, I = "idx" + n, A = "i" + n, T = "' + " + k + e(1209), R = h[e(2547)] = x[e(2547)] + 1, P = e(909) + R, N = e(1884) + n, _ = x[e(1835)][e(860)], D = x[e(2610)];
      _ && (s += e(2007) + N + e(754)), _ ? s += " " + N + " = " + N + e(764) + l + e(432) + I + "=0; " + I + "<" + N + e(1723) + I + "++) { var " + k + " = " + N + "[" + I + e(2492) : s += e(2785) + k + " in " + l + e(185), s += e(2038) + n + e(413);
      var j = k, F = x.compositeRule;
      x[e(1187)] = h[e(1187)] = !0;
      var C = x.validate(h);
      h[e(2610)] = D, x[e(1011)].varOccurences(C, P) < 2 ? s += " " + x.util[e(1026)](C, P, j) + " " : s += e(2007) + P + e(2473) + j + "; " + C + " ", x[e(1187)] = h[e(1187)] = F, s += e(2351) + v + ") { for (var " + A + e(236) + n + "; " + A + e(515) + A + e(240) + A + e(1211) + k + e(2808), x.createErrors !== !1 ? (s += e(1588) + e(440) + e(2767) + x[e(2886)] + e(1347) + x[e(1011)][e(1901)](d) + e(1618) + T + "' } ", x[e(1835)][e(1793)] !== !1 && (s += " , message: 'property name \\'" + T + e(707)), x[e(1835)][e(1219)] && (s += e(1319) + u + e(1452) + x[e(2443)] + e(1227) + l + " "), s += e(1334)) : s += e(1230), s += e(1899), !x[e(1187)] && f && (x.async ? s += e(479) : s += " validate.errors = vErrors; return false; "), f && (s += e(275)), s += " } }";
    }
    return f && (s += " " + m + e(851) + b + e(795)), s;
  }), Ft;
}
var Nt, Hr;
function Ic() {
  return Hr || (Hr = 1, Nt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x[e(2547)], c = x[e(2555)][t], u = x.schemaPath + x[e(1011)][e(981)](t), d = x[e(2624)] + "/" + t, f = !x[e(1835)][e(226)], l = "data" + (i || ""), b = "valid" + n, h = x[e(1835)][e(399)] && c && c[e(399)];
    h && (s += e(270) + n + e(2473) + x.util[e(2559)](c.$data, i, x.dataPathArr) + "; ");
    var m = e(2555) + n;
    if (!h)
      if (c.length < x[e(1835)].loopRequired && x[e(2555)].properties && Object.keys(x[e(2555)][e(945)]).length) {
        var R = [], v = c;
        if (v)
          for (var k, I = -1, A = v[e(692)] - 1; I < A; ) {
            k = v[I += 1];
            var T = x[e(2555)][e(945)][k];
            !(T && (x[e(1835)][e(2746)] ? typeof T == e(544) && Object.keys(T)[e(692)] > 0 || T === !1 : x[e(1011)][e(1392)](T, x[e(807)].all))) && (R[R[e(692)]] = k);
          }
      } else var R = c;
    if (h || R.length) {
      var P = x[e(2886)], N = h || R[e(692)] >= x[e(1835)].loopRequired, _ = x[e(1835)][e(860)];
      if (f)
        if (s += e(2370) + n + "; ", N) {
          !h && (s += e(2007) + m + e(978) + u + "; ");
          var D = "i" + n, j = e(2555) + n + "[" + D + "]", F = e(751) + j + e(1209);
          x[e(1835)][e(2739)] && (x.errorPath = x[e(1011)].getPathExpr(P, j, x[e(1835)][e(1467)])), s += e(2007) + b + e(854), h && (s += " if (schema" + n + e(2128) + b + e(1160) + n + ")) " + b + e(2434)), s += " for (var " + D + e(1312) + D + " < " + m + e(1723) + D + e(883) + b + e(2473) + l + "[" + m + "[" + D + "]] !== undefined ", _ && (s += e(334) + l + ", " + m + "[" + D + "]) "), s += e(305) + b + e(1704), h && (s += e(1077)), s += e(1779) + b + e(975);
          var C = C || [];
          C[e(452)](s), s = "", x[e(1715)] !== !1 ? (s += e(1588) + "required" + e(2767) + x[e(2886)] + " , schemaPath: " + x[e(1011)][e(1901)](d) + e(2835) + F + e(2862), x.opts.messages !== !1 && (s += e(2250), x[e(1835)][e(2739)] ? s += e(616) : s += e(1960) + F + "\\'", s += "' "), x.opts[e(1219)] && (s += e(1319) + u + " , parentSchema: validate.schema" + x[e(2443)] + e(1227) + l + " "), s += e(1334)) : s += e(1230);
          var H = s;
          s = C.pop(), !x[e(1187)] && f ? x[e(1973)] ? s += e(1086) + H + e(956) : s += e(651) + H + e(2753) : s += e(2467) + H + e(1899), s += e(1858);
        } else {
          s += e(1261);
          var U = R;
          if (U)
            for (var z, D = -1, G = U.length - 1; D < G; ) {
              z = U[D += 1], D && (s += " || ");
              var i0 = x[e(1011)][e(981)](z), u0 = l + i0;
              s += e(1413) + u0 + e(2726), _ && (s += " || ! Object.prototype.hasOwnProperty.call(" + l + e(476) + x[e(1011)][e(1848)](z) + e(1344)), s += e(2759) + n + e(2473) + x[e(1011)][e(1901)](x[e(1835)][e(1467)] ? z : i0) + e(527);
            }
          s += e(1657);
          var j = e(254) + n, F = e(751) + j + e(1209);
          x.opts[e(2739)] && (x[e(2886)] = x[e(1835)][e(1467)] ? x.util[e(239)](P, j, !0) : P + e(2196) + j);
          var C = C || [];
          C.push(s), s = "", x.createErrors !== !1 ? (s += e(1588) + e(310) + "' , dataPath: (dataPath || '') + " + x[e(2886)] + e(1347) + x[e(1011)][e(1901)](d) + " , params: { missingProperty: '" + F + "' } ", x.opts[e(1793)] !== !1 && (s += e(2250), x[e(1835)]._errorDataPathProperty ? s += e(616) : s += e(1960) + F + "\\'", s += "' "), x[e(1835)][e(1219)] && (s += e(1319) + u + e(1452) + x[e(2443)] + e(1227) + l + " "), s += e(1334)) : s += e(1230);
          var H = s;
          s = C[e(2231)](), !x[e(1187)] && f ? x[e(1973)] ? s += " throw new ValidationError([" + H + "]); " : s += e(651) + H + e(2753) : s += e(2467) + H + e(1899), s += e(1858);
        }
      else if (N) {
        !h && (s += " var " + m + e(978) + u + "; ");
        var D = "i" + n, j = e(2555) + n + "[" + D + "]", F = "' + " + j + e(1209);
        x[e(1835)][e(2739)] && (x[e(2886)] = x[e(1011)][e(239)](P, j, x[e(1835)][e(1467)])), h && (s += e(851) + m + e(1702) + m + e(842), x[e(1715)] !== !1 ? (s += e(1588) + "required" + e(2767) + x[e(2886)] + e(1347) + x.util.toQuotedString(d) + e(2835) + F + e(2862), x.opts.messages !== !1 && (s += " , message: '", x[e(1835)][e(2739)] ? s += e(616) : s += e(1960) + F + "\\'", s += "' "), x[e(1835)].verbose && (s += e(1319) + u + " , parentSchema: validate.schema" + x.schemaPath + e(1227) + l + " "), s += e(1334)) : s += e(1230), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + m + e(1023)), s += " for (var " + D + e(1312) + D + e(840) + m + e(1723) + D + e(212) + l + "[" + m + "[" + D + e(174), _ && (s += e(2470) + l + ", " + m + "[" + D + e(508)), s += e(848), x[e(1715)] !== !1 ? (s += e(1588) + "required" + e(2767) + x[e(2886)] + e(1347) + x[e(1011)].toQuotedString(d) + e(2835) + F + e(2862), x[e(1835)][e(1793)] !== !1 && (s += e(2250), x[e(1835)][e(2739)] ? s += e(616) : s += "should have required property \\'" + F + "\\'", s += "' "), x[e(1835)][e(1219)] && (s += " , schema: validate.schema" + u + e(1452) + x[e(2443)] + " , data: " + l + " "), s += e(1334)) : s += e(1230), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", h && (s += "  }  ");
      } else {
        var l0 = R;
        if (l0)
          for (var z, o0 = -1, f0 = l0[e(692)] - 1; o0 < f0; ) {
            z = l0[o0 += 1];
            var i0 = x[e(1011)][e(981)](z), F = x.util[e(1848)](z), u0 = l + i0;
            x[e(1835)][e(2739)] && (x[e(2886)] = x.util.getPath(P, z, x[e(1835)][e(1467)])), s += e(1261) + u0 + e(2726), _ && (s += " || ! Object.prototype.hasOwnProperty.call(" + l + ", '" + x[e(1011)][e(1848)](z) + e(1344)), s += e(848), x[e(1715)] !== !1 ? (s += e(1588) + e(310) + e(2767) + x[e(2886)] + e(1347) + x[e(1011)].toQuotedString(d) + " , params: { missingProperty: '" + F + "' } ", x[e(1835)].messages !== !1 && (s += e(2250), x[e(1835)][e(2739)] ? s += e(616) : s += e(1960) + F + "\\'", s += "' "), x[e(1835)][e(1219)] && (s += e(1319) + u + e(1452) + x.schemaPath + " , data: " + l + " "), s += e(1334)) : s += e(1230), s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
          }
      }
      x[e(2886)] = P;
    } else f && (s += e(1485));
    return s;
  }), Nt;
}
var Tt, zr;
function Ec() {
  return zr || (zr = 1, Tt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x.dataLevel, c = x[e(2555)][t], u = x[e(2443)] + x.util[e(981)](t), d = x[e(2624)] + "/" + t, f = !x[e(1835)][e(226)], l = "data" + (i || ""), b = e(614) + n, h = x[e(1835)][e(399)] && c && c[e(399)], m;
    if (h ? (s += " var schema" + n + " = " + x[e(1011)][e(2559)](c[e(399)], i, x[e(1885)]) + "; ", m = e(2555) + n) : m = c, (c || h) && x[e(1835)][e(2675)] !== !1) {
      h && (s += e(2007) + b + e(663) + m + e(2106) + m + e(2128) + b + e(1902) + m + e(2033) + b + " = false; else { "), s += e(586) + l + e(1906) + b + " = true , j; if (i > 1) { ";
      var v = x[e(2555)][e(715)] && x[e(2555)][e(715)][e(612)], k = Array[e(1783)](v);
      if (!v || v == e(544) || v == e(973) || k && (v.indexOf("object") >= 0 || v[e(311)](e(973)) >= 0)) s += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + l + e(667) + l + e(608) + b + e(2312);
      else {
        s += e(2226) + l + e(2244);
        var I = "checkDataType" + (k ? "s" : "");
        s += e(851) + x[e(1011)][I](v, e(2539), x[e(1835)][e(1311)], !0) + e(1171), k && (s += ` if (typeof item == 'string') item = '"' + item; `), s += e(569) + b + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
      }
      s += e(1334), h && (s += e(1077)), s += e(2351) + b + ") {   ";
      var A = A || [];
      A[e(452)](s), s = "", x[e(1715)] !== !1 ? (s += e(1588) + e(2675) + e(2767) + x.errorPath + e(1347) + x[e(1011)].toQuotedString(d) + e(1937), x[e(1835)].messages !== !1 && (s += e(2024)), x[e(1835)][e(1219)] && (s += e(875), h ? s += "validate.schema" + u : s += "" + c, s += e(922) + x.schemaPath + e(1227) + l + " "), s += e(1334)) : s += " {} ";
      var T = s;
      s = A.pop(), !x[e(1187)] && f ? x[e(1973)] ? s += " throw new ValidationError([" + T + e(956) : s += e(651) + T + e(2753) : s += e(2467) + T + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += e(1334), f && (s += " else { ");
    } else f && (s += e(495));
    return s;
  }), Tt;
}
var qt, Vr;
function Rc() {
  return Vr || (Vr = 1, qt = { $ref: ic(), allOf: cc(), anyOf: uc(), $comment: dc(), const: fc(), contains: lc(), dependencies: hc(), enum: pc(), format: mc(), if: bc(), items: gc(), maximum: Fr(), minimum: Fr(), maxItems: Tr(), minItems: Tr(), maxLength: Ar(), minLength: Ar(), maxProperties: _r(), minProperties: _r(), multipleOf: yc(), not: vc(), oneOf: wc(), pattern: Sc(), properties: kc(), propertyNames: Pc(), required: Ic(), uniqueItems: Ec(), validate: bn() }), qt;
}
var At, Br;
function Cc() {
  if (Br) return At;
  Br = 1;
  var o = Rc(), x = Ze().toHash;
  return At = function() {
    const r = K;
    var e = [{ type: r(2153), rules: [{ maximum: [r(1895)] }, { minimum: [r(2213)] }, "multipleOf", "format"] }, { type: r(2161), rules: [r(558), r(2877), r(1267), r(2197)] }, { type: r(973), rules: ["maxItems", "minItems", r(715), r(2440), "uniqueItems"] }, { type: r(544), rules: [r(197), "minProperties", r(310), r(1356), r(440), { properties: [r(2659), r(886)] }] }, { rules: [r(2221), r(1017), "enum", r(2705), r(2776), r(2734), r(2405), "if"] }], s = ["type", r(1506)], n = [r(2008), r(2697), "id", r(399), r(2609), r(1266), r(625), "default", r(2822), r(2590), r(2326), "writeOnly", r(2222), "contentEncoding", "additionalItems", r(2403), r(2510)], i = [r(2153), r(1449), r(2161), "array", r(544), "boolean", r(845)];
    return e[r(403)] = x(s), e[r(1411)] = x(i), e[r(1471)](function(c) {
      const u = r;
      c.rules = c[u(752)][u(1649)](function(d) {
        const f = u;
        var l;
        if (typeof d == f(544)) {
          var b = Object[f(750)](d)[0];
          l = d[b], d = b, l[f(1471)](function(m) {
            const v = f;
            s[v(452)](m), e[v(403)][m] = !0;
          });
        }
        s[f(452)](d);
        var h = e.all[d] = { keyword: d, code: o[d], implements: l };
        return h;
      }), e[u(403)][u(1506)] = { keyword: u(1506), code: o[u(1506)] }, c.type && (e.types[c[u(612)]] = c);
    }), e[r(2819)] = x(s[r(2044)](n)), e.custom = {}, e;
  }, At;
}
var Ot, Zr;
function Fc() {
  const o = a;
  if (Zr) return Ot;
  Zr = 1;
  var x = [o(888), o(2536), o(1895), o(546), o(2213), o(558), "minLength", o(1267), "additionalItems", o(2575), "minItems", o(2675), o(197), o(246), o(310), o(2659), o(1419), "format", o(1017)];
  return Ot = function(t, r) {
    const e = o;
    for (var s = 0; s < r[e(692)]; s++) {
      t = JSON[e(706)](JSON[e(2625)](t));
      var n = r[s][e(628)]("/"), i = t, c;
      for (c = 1; c < n.length; c++) i = i[n[c]];
      for (c = 0; c < x.length; c++) {
        var u = x[c], d = i[u];
        d && (i[u] = { anyOf: [d, { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }] });
      }
    }
    return t;
  }, Ot;
}
var _t, Wr;
function Nc() {
  const o = a;
  if (Wr) return _t;
  Wr = 1;
  var x = ha()[o(2092)];
  _t = t;
  function t(r, e, s) {
    const n = o;
    var i = this;
    if (typeof this[n(1035)][n(2427)] != n(1622)) throw new Error(n(2740));
    typeof e == n(1622) && (s = e, e = void 0);
    var c = u(r)[n(2403)](function() {
      const f = n;
      var l = i[f(2201)](r, void 0, e);
      return l[f(2621)] || d(l);
    });
    return s && c[n(2403)](function(f) {
      s(null, f);
    }, s), c;
    function u(f) {
      const l = n;
      var b = f[l(2008)];
      return b && !i[l(773)](b) ? t[l(1994)](i, { $ref: b }, !0) : Promise[l(1571)]();
    }
    function d(f) {
      try {
        return i._compile(f);
      } catch (b) {
        if (b instanceof x) return l(b);
        throw b;
      }
      function l(b) {
        const h = K;
        var m = b[h(208)];
        if (I(m)) throw new Error(h(2348) + m + " is loaded but " + b[h(2748)] + h(1573));
        var v = i[h(1065)][m];
        return !v && (v = i[h(1065)][m] = i[h(1035)].loadSchema(m), v[h(2403)](k, k)), v[h(2403)](function(A) {
          if (!I(m)) return u(A).then(function() {
            const T = K;
            I(m) || i[T(229)](A, m, void 0, e);
          });
        })[h(2403)](function() {
          return d(f);
        });
        function k() {
          const A = h;
          delete i[A(1065)][m];
        }
        function I(A) {
          const T = h;
          return i[T(2813)][A] || i[T(1072)][A];
        }
      }
    }
  }
  return _t;
}
var Dt, Kr;
function Tc() {
  return Kr || (Kr = 1, Dt = function(x, t, r) {
    const e = K;
    var s = " ", n = x[e(1552)], i = x[e(2547)], c = x[e(2555)][t], u = x[e(2443)] + x[e(1011)][e(981)](t), d = x[e(2624)] + "/" + t, f = !x.opts.allErrors, l, b = "data" + (i || ""), h = "valid" + n, m = e(2451) + n, v = x[e(1835)][e(399)] && c && c[e(399)], k;
    v ? (s += " var schema" + n + " = " + x[e(1011)].getData(c[e(399)], i, x[e(1885)]) + "; ", k = e(2555) + n) : k = c;
    var I = this, A = e(2814) + n, T = I[e(2814)], R = "", P, N, _, D, j;
    if (v && T[e(399)]) {
      j = e(872) + n;
      var F = T.validateSchema;
      s += e(2007) + A + e(1666) + t + e(2798) + j + e(2473) + A + e(444);
    } else {
      if (D = x[e(462)](I, c, x[e(2555)], x), !D) return;
      k = "validate.schema" + u, j = D[e(1172)], P = T[e(1759)], N = T.inline, _ = T[e(1799)];
    }
    var C = j + e(233), H = "i" + n, U = "ruleErr" + n, z = T[e(1973)];
    if (z && !x[e(1973)]) throw new Error(e(1838));
    if (!(N || _) && (s += "" + C + " = null;"), s += e(1186) + m + e(2023) + h + ";", v && T[e(399)] && (R += "}", s += e(851) + k + " === undefined) { " + h + " = true; } else { ", F && (R += "}", s += " " + h + e(2473) + A + e(1662) + k + e(2824) + h + e(185))), N) T[e(1512)] ? s += " " + D.validate + " " : s += " " + h + e(2473) + D[e(2621)] + "; ";
    else if (_) {
      var G = x.util[e(1965)](x), R = "";
      G[e(1552)]++;
      var i0 = e(614) + G.level;
      G[e(2555)] = D.validate, G[e(2443)] = "";
      var u0 = x[e(1187)];
      x.compositeRule = G[e(1187)] = !0;
      var l0 = x[e(2621)](G)[e(575)](/validate\.schema/g, j);
      x.compositeRule = G[e(1187)] = u0, s += " " + l0;
    } else {
      var o0 = o0 || [];
      o0.push(s), s = "", s += "  " + j + e(1476), x[e(1835)][e(2264)] ? s += e(1443) : s += "self", P || T[e(2555)] === !1 ? s += e(366) + b + " " : s += e(366) + k + " , " + b + e(379) + x.schemaPath + " ", s += e(708), x[e(2886)] != '""' && (s += " + " + x[e(2886)]);
      var f0 = i ? e(909) + (i - 1 || "") : "parentData", k0 = i ? x[e(1885)][i] : "parentDataProperty";
      s += e(366) + f0 + e(366) + k0 + e(1682);
      var S0 = s;
      s = o0.pop(), T[e(1672)] === !1 ? (s += " " + h + " = ", z && (s += "await "), s += "" + S0 + "; ") : z ? (C = "customErrors" + n, s += e(2007) + C + e(2164) + h + e(388) + S0 + e(1972) + h + " = false; if (e instanceof ValidationError) " + C + " = e.errors; else throw e; } ") : s += " " + C + e(1481) + h + " = " + S0 + "; ";
    }
    if (T.modifying && (s += e(851) + f0 + ") " + b + e(2473) + f0 + "[" + k0 + "];"), s += "" + R, T[e(614)]) f && (s += e(495));
    else {
      s += e(1261), T.valid === void 0 ? (s += " !", _ ? s += "" + i0 : s += "" + h) : s += " " + !T[e(614)] + " ", s += e(185), l = I[e(1235)];
      var o0 = o0 || [];
      o0.push(s), s = "";
      var o0 = o0 || [];
      o0[e(452)](s), s = "", x[e(1715)] !== !1 ? (s += e(1588) + (l || "custom") + e(2767) + x[e(2886)] + e(1347) + x[e(1011)].toQuotedString(d) + e(1642) + I[e(1235)] + e(2862), x[e(1835)][e(1793)] !== !1 && (s += e(632) + I[e(1235)] + e(2425)), x[e(1835)][e(1219)] && (s += e(1319) + u + e(1452) + x[e(2443)] + e(1227) + b + " "), s += e(1334)) : s += e(1230);
      var M0 = s;
      s = o0.pop(), !x.compositeRule && f ? x.async ? s += e(1086) + M0 + e(956) : s += e(651) + M0 + e(2753) : s += e(2467) + M0 + e(1899);
      var F0 = s;
      s = o0.pop(), N ? T.errors ? T.errors != e(2391) && (s += e(2449) + H + "=" + m + "; " + H + "<errors; " + H + e(1238) + U + e(1154) + H + e(2797) + U + ".dataPath === undefined) " + U + e(1620) + x[e(2886)] + e(663) + U + e(727) + U + e(1969) + d + e(2706), x[e(1835)][e(1219)] && (s += " " + U + e(1841) + k + "; " + U + ".data = " + b + "; "), s += e(1334)) : T[e(1672)] === !1 ? s += " " + F0 + " " : (s += e(851) + m + e(2450) + F0 + e(494) + H + "=" + m + "; " + H + e(515) + H + "++) { var " + U + " = vErrors[" + H + e(2797) + U + e(1592) + U + e(1620) + x[e(2886)] + e(663) + U + e(727) + U + e(1969) + d + '"; } ', x[e(1835)][e(1219)] && (s += " " + U + e(1841) + k + "; " + U + e(902) + b + "; "), s += e(1462)) : _ ? (s += e(263), x.createErrors !== !1 ? (s += e(1588) + (l || "custom") + e(2767) + x.errorPath + e(1347) + x.util[e(1901)](d) + " , params: { keyword: '" + I.keyword + e(2862), x.opts[e(1793)] !== !1 && (s += e(632) + I.keyword + e(2425)), x[e(1835)].verbose && (s += e(1319) + u + e(1452) + x[e(2443)] + " , data: " + b + " "), s += e(1334)) : s += " {} ", s += e(1899), !x[e(1187)] && f && (x[e(1973)] ? s += e(479) : s += e(2162))) : T[e(1672)] === !1 ? s += " " + F0 + " " : (s += e(2577) + C + e(1018) + C + "; else vErrors = vErrors.concat(" + C + e(1978) + H + "=" + m + "; " + H + e(515) + H + e(1238) + U + " = vErrors[" + H + e(2797) + U + ".dataPath === undefined) " + U + e(1620) + x[e(2886)] + e(1819) + U + e(1969) + d + e(2364), x.opts[e(1219)] && (s += " " + U + e(1841) + k + "; " + U + ".data = " + b + "; "), s += e(716) + F0 + e(1334)), s += e(1334), f && (s += " else { ");
    }
    return s;
  }), Dt;
}
const qc = a(943), Ac = "http://json-schema.org/draft-07/schema#", Oc = "Core schema meta-schema", _c = { schemaArray: { type: a(973), minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: a(1771) }, { default: 0 }] }, simpleTypes: { enum: ["array", a(1146), a(1449), a(845), a(2153), a(544), "string"] }, stringArray: { type: a(973), items: { type: "string" }, uniqueItems: !0, default: [] } }, Dc = ["object", a(1146)], jc = { $id: { type: "string", format: a(2665) }, $schema: { type: "string", format: a(2396) }, $ref: { type: a(2161), format: "uri-reference" }, $comment: { type: a(2161) }, title: { type: a(2161) }, description: { type: a(2161) }, default: !0, readOnly: { type: a(1146), default: !1 }, examples: { type: a(973), items: !0 }, multipleOf: { type: a(2153), exclusiveMinimum: 0 }, maximum: { type: a(2153) }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: a(2153) }, maxLength: { $ref: a(1771) }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: a(2161), format: a(2764) }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: a(1572) }], default: !0 }, maxItems: { $ref: a(1771) }, minItems: { $ref: a(1180) }, uniqueItems: { type: a(1146), default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: a(1771) }, minProperties: { $ref: a(1180) }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: a(544), additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: a(544), additionalProperties: { $ref: "#" }, propertyNames: { format: a(2764) }, default: {} }, dependencies: { type: a(544), additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: a(973), items: { $ref: a(1495) }, minItems: 1, uniqueItems: !0 }] }, format: { type: a(2161) }, contentMediaType: { type: a(2161) }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: a(1572) }, anyOf: { $ref: a(1572) }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, gn = { $schema: qc, $id: Ac, title: Oc, definitions: _c, type: Dc, properties: jc, default: !0 };
var jt, Gr;
function Mc() {
  const o = a;
  if (Gr) return jt;
  Gr = 1;
  var x = gn;
  return jt = { $id: o(1389), definitions: { simpleTypes: x[o(2822)][o(995)] }, type: o(544), dependencies: { schema: [o(2621)], $data: ["validate"], statements: ["inline"], valid: { not: { required: [o(1799)] } } }, properties: { type: x.properties[o(612)], schema: { type: o(1146) }, statements: { type: o(1146) }, dependencies: { type: "array", items: { type: o(2161) } }, metaSchema: { type: o(544) }, modifying: { type: "boolean" }, valid: { type: o(1146) }, $data: { type: o(1146) }, async: { type: o(1146) }, errors: { anyOf: [{ type: o(1146) }, { const: o(2391) }] } } }, jt;
}
var Mt, Jr;
function Lc() {
  if (Jr) return Mt;
  Jr = 1;
  var o = /^[a-z_$][a-z0-9_$-]*$/i, x = Tc(), t = Mc();
  Mt = { add: r, get: e, remove: s, validate: n };
  function r(i, c) {
    const u = K;
    var d = this[u(807)];
    if (d[u(2819)][i]) throw new Error(u(2053) + i + u(349));
    if (!o[u(1904)](i)) throw new Error(u(2053) + i + " is not a valid identifier");
    if (c) {
      this[u(1224)](c, !0);
      var f = c[u(612)];
      if (Array[u(1783)](f))
        for (var l = 0; l < f[u(692)]; l++) h(i, f[l], c);
      else h(i, f, c);
      var b = c[u(761)];
      b && (c.$data && this[u(1035)][u(399)] && (b = { anyOf: [b, { $ref: u(2446) }] }), c[u(763)] = this[u(1759)](b, !0));
    }
    d[u(2819)][i] = d.all[i] = !0;
    function h(m, v, k) {
      const I = u;
      for (var A, T = 0; T < d.length; T++) {
        var R = d[T];
        if (R[I(612)] == v) {
          A = R;
          break;
        }
      }
      !A && (A = { type: v, rules: [] }, d.push(A));
      var P = { keyword: m, definition: k, custom: !0, code: x, implements: k[I(756)] };
      A[I(752)][I(452)](P), d[I(806)][m] = P;
    }
    return this;
  }
  function e(i) {
    const c = K;
    var u = this[c(807)][c(806)][i];
    return u ? u[c(2814)] : this[c(807)].keywords[i] || !1;
  }
  function s(i) {
    const c = K;
    var u = this[c(807)];
    delete u[c(2819)][i], delete u[c(403)][i], delete u[c(806)][i];
    for (var d = 0; d < u[c(692)]; d++)
      for (var f = u[d][c(752)], l = 0; l < f[c(692)]; l++)
        if (f[l][c(1235)] == i) {
          f.splice(l, 1);
          break;
        }
    return this;
  }
  function n(i, c) {
    const u = K;
    n[u(1672)] = null;
    var d = this[u(1545)] = this[u(1545)] || this[u(1759)](t, !0);
    if (d(i)) return !0;
    if (n.errors = d[u(1672)], c) throw new Error(u(588) + this[u(777)](d[u(1672)]));
    return !1;
  }
  return Mt;
}
const $c = a(943), Uc = a(2446), Hc = a(1354), zc = a(544), Vc = [a(399)], Bc = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Zc = !1, Wc = { $schema: $c, $id: Uc, description: Hc, type: zc, required: Vc, properties: Bc, additionalProperties: Zc };
var Lt, Qr;
function Kc() {
  const o = a;
  if (Qr) return Lt;
  Qr = 1;
  var x = sc(), t = la(), r = nc(), e = pn(), s = mn(), n = oc(), i = Cc(), c = Fc(), u = Ze();
  Lt = m, m.prototype[o(2621)] = v, m[o(2249)][o(1759)] = k, m[o(2249)][o(229)] = I, m.prototype[o(1403)] = A, m[o(2249)][o(763)] = T, m.prototype.getSchema = P, m[o(2249)][o(1688)] = D, m[o(2249)][o(2013)] = u0, m[o(2249)].errorsText = i0, m[o(2249)]._addSchema = F, m[o(2249)][o(1570)] = C, m[o(2249)][o(705)] = Nc();
  var d = Lc();
  m[o(2249)].addKeyword = d[o(2655)], m[o(2249)][o(1863)] = d[o(1075)], m[o(2249)][o(1797)] = d[o(2253)], m[o(2249)][o(1224)] = d[o(2621)];
  var f = ha();
  m[o(1619)] = f[o(2228)], m[o(903)] = f[o(2092)], m[o(811)] = c;
  var l = o(2323), b = ["removeAdditional", o(2132), o(2600), o(319)], h = [o(318)];
  function m(O) {
    const q = o;
    if (!(this instanceof m)) return new m(O);
    O = this[q(1035)] = u[q(1965)](O) || {}, F0(this), this[q(1072)] = {}, this[q(2813)] = {}, this._fragments = {}, this[q(1484)] = n(O.format), this[q(2851)] = O[q(306)] || new r(), this[q(1065)] = {}, this._compilations = [], this[q(807)] = i(), this[q(771)] = H(O), O[q(827)] = O[q(827)] || 1 / 0, O.errorDataPath == "property" && (O._errorDataPathProperty = !0), O[q(1417)] === void 0 && (O.serialize = s), this[q(454)] = M0(this), O[q(823)] && f0(this), O[q(2819)] && k0(this), l0(this), typeof O[q(2448)] == "object" && this.addMetaSchema(O[q(2448)]), O.nullable && this[q(884)](q(1864), { metaSchema: { type: q(1146) } }), o0(this);
  }
  function v(O, q) {
    const M = o;
    var Q;
    if (typeof O == M(2161)) {
      if (Q = this[M(773)](O), !Q) throw new Error(M(2281) + O + '"');
    } else {
      var J = this[M(2201)](O);
      Q = J[M(2621)] || this._compile(J);
    }
    var V = Q(q);
    return Q[M(2609)] !== !0 && (this[M(1672)] = Q[M(1672)]), V;
  }
  function k(O, q) {
    const M = o;
    var Q = this[M(2201)](O, void 0, q);
    return Q[M(2621)] || this[M(1570)](Q);
  }
  function I(O, q, M, Q) {
    const J = o;
    if (Array[J(1783)](O)) {
      for (var V = 0; V < O.length; V++) this[J(229)](O[V], void 0, M, Q);
      return this;
    }
    var X = this[J(771)](O);
    if (X !== void 0 && typeof X != "string") throw new Error(J(2461));
    return q = t[J(2595)](q || X), S0(this, q), this._schemas[q] = this._addSchema(O, M, Q, !0), this;
  }
  function A(O, q, M) {
    return this.addSchema(O, q, M, !0), this;
  }
  function T(O, q) {
    const M = o;
    var Q = O[M(2008)];
    if (Q !== void 0 && typeof Q != M(2161)) throw new Error(M(2459));
    if (Q = Q || this._opts[M(375)] || R(this), !Q) return this[M(1610)][M(343)](M(1924)), this[M(1672)] = null, !0;
    var J = this[M(2621)](Q, O);
    if (!J && q) {
      var V = M(288) + this[M(777)]();
      if (this[M(1035)].validateSchema == M(2818)) this[M(1610)].error(V);
      else throw new Error(V);
    }
    return J;
  }
  function R(O) {
    const q = o;
    var M = O[q(1035)].meta;
    return O[q(1035)][q(375)] = typeof M == q(544) ? O._getId(M) || M : O[q(773)](l) ? l : void 0, O._opts.defaultMeta;
  }
  function P(O) {
    const q = o;
    var M = _(this, O);
    switch (typeof M) {
      case q(544):
        return M.validate || this[q(1570)](M);
      case q(2161):
        return this[q(773)](M);
      case "undefined":
        return N(this, O);
    }
  }
  function N(O, q) {
    const M = o;
    var Q = t[M(2555)][M(1994)](O, { schema: {} }, q);
    if (Q) {
      var J = Q[M(2555)], V = Q.root, X = Q[M(2610)], s0 = x.call(O, J, V, void 0, X);
      return O._fragments[q] = new e({ ref: q, fragment: !0, schema: J, root: V, baseId: X, validate: s0 }), s0;
    }
  }
  function _(O, q) {
    const M = o;
    return q = t[M(2595)](q), O[M(1072)][q] || O[M(2813)][q] || O[M(1087)][q];
  }
  function D(O) {
    const q = o;
    if (O instanceof RegExp) return j(this, this[q(1072)], O), j(this, this._refs, O), this;
    switch (typeof O) {
      case q(420):
        return j(this, this._schemas), j(this, this[q(2813)]), this[q(2851)][q(899)](), this;
      case "string":
        var M = _(this, O);
        return M && this[q(2851)].del(M[q(204)]), delete this._schemas[O], delete this._refs[O], this;
      case q(544):
        var Q = this._opts.serialize, J = Q ? Q(O) : O;
        this[q(2851)][q(619)](J);
        var V = this[q(771)](O);
        V && (V = t[q(2595)](V), delete this._schemas[V], delete this._refs[V]);
    }
    return this;
  }
  function j(O, q, M) {
    const Q = o;
    for (var J in q) {
      var V = q[J];
      !V[Q(2448)] && (!M || M[Q(1904)](J)) && (O[Q(2851)].del(V.cacheKey), delete q[J]);
    }
  }
  function F(O, q, M, Q) {
    const J = o;
    if (typeof O != J(544) && typeof O != J(1146)) throw new Error(J(1497));
    var V = this[J(1035)][J(1417)], X = V ? V(O) : O, s0 = this[J(2851)][J(1075)](X);
    if (s0) return s0;
    Q = Q || this[J(1035)].addUsedSchema !== !1;
    var c0 = t[J(2595)](this[J(771)](O));
    c0 && Q && S0(this, c0);
    var x0 = this[J(1035)][J(763)] !== !1 && !q, L0;
    x0 && !(L0 = c0 && c0 == t[J(2595)](O[J(2008)])) && this[J(763)](O, !0);
    var A0 = t[J(2409)][J(1994)](this, O), H0 = new e({ id: c0, schema: O, localRefs: A0, cacheKey: X, meta: M });
    return c0[0] != "#" && Q && (this[J(2813)][c0] = H0), this[J(2851)][J(924)](X, H0), x0 && L0 && this[J(763)](O, !0), H0;
  }
  function C(O, q) {
    const M = o;
    if (O.compiling)
      return O[M(2621)] = V, V[M(2555)] = O[M(2555)], V[M(1672)] = null, V[M(2318)] = q || V, O[M(2555)][M(2609)] === !0 && (V[M(2609)] = !0), V;
    O[M(2030)] = !0;
    var Q;
    O.meta && (Q = this[M(1035)], this._opts = this[M(454)]);
    var J;
    try {
      J = x[M(1994)](this, O[M(2555)], q, O.localRefs);
    } catch (X) {
      throw delete O[M(2621)], X;
    } finally {
      O.compiling = !1, O[M(2448)] && (this[M(1035)] = Q);
    }
    return O.validate = J, O[M(283)] = J[M(283)], O[M(583)] = J[M(583)], O[M(2318)] = J[M(2318)], J;
    function V() {
      const X = M;
      var s0 = O[X(2621)], c0 = s0.apply(this, arguments);
      return V[X(1672)] = s0.errors, c0;
    }
  }
  function H(O) {
    const q = o;
    switch (O[q(910)]) {
      case q(2012):
        return G;
      case "id":
        return U;
      default:
        return z;
    }
  }
  function U(O) {
    const q = o;
    return O[q(2697)] && this[q(1610)][q(343)](q(1515), O[q(2697)]), O.id;
  }
  function z(O) {
    const q = o;
    return O.id && this[q(1610)][q(343)](q(581), O.id), O[q(2697)];
  }
  function G(O) {
    const q = o;
    if (O[q(2697)] && O.id && O[q(2697)] != O.id) throw new Error(q(572));
    return O[q(2697)] || O.id;
  }
  function i0(O, q) {
    const M = o;
    if (O = O || this.errors, !O) return "No errors";
    q = q || {};
    for (var Q = q[M(865)] === void 0 ? ", " : q[M(865)], J = q[M(2184)] === void 0 ? M(909) : q[M(2184)], V = "", X = 0; X < O[M(692)]; X++) {
      var s0 = O[X];
      s0 && (V += J + s0[M(984)] + " " + s0[M(225)] + Q);
    }
    return V[M(2088)](0, -Q.length);
  }
  function u0(O, q) {
    const M = o;
    return typeof q == M(2161) && (q = new RegExp(q)), this[M(1484)][O] = q, this;
  }
  function l0(O) {
    const q = o;
    var M;
    if (O[q(1035)].$data && (M = Wc, O.addMetaSchema(M, M[q(2697)], !0)), O[q(1035)].meta !== !1) {
      var Q = gn;
      O[q(1035)][q(399)] && (Q = c(Q, h)), O[q(1403)](Q, l, !0), O._refs[q(1726)] = l;
    }
  }
  function o0(O) {
    const q = o;
    var M = O[q(1035)][q(1919)];
    if (M)
      if (Array[q(1783)](M)) O[q(229)](M);
      else
        for (var Q in M) O[q(229)](M[Q], Q);
  }
  function f0(O) {
    const q = o;
    for (var M in O[q(1035)][q(823)]) {
      var Q = O[q(1035)][q(823)][M];
      O[q(2013)](M, Q);
    }
  }
  function k0(O) {
    const q = o;
    for (var M in O[q(1035)][q(2819)]) {
      var Q = O[q(1035)][q(2819)][M];
      O[q(884)](M, Q);
    }
  }
  function S0(O, q) {
    const M = o;
    if (O[M(1072)][q] || O._refs[q]) throw new Error(M(2285) + q + M(2065));
  }
  function M0(O) {
    const q = o;
    for (var M = u[q(1965)](O[q(1035)]), Q = 0; Q < b.length; Q++) delete M[b[Q]];
    return M;
  }
  function F0(O) {
    const q = o;
    var M = O[q(1035)][q(1610)];
    if (M === !1) O[q(1610)] = { log: J0, warn: J0, error: J0 };
    else {
      if (M === void 0 && (M = console), !(typeof M == q(544) && M[q(2818)] && M[q(343)] && M.error)) throw new Error(q(2864));
      O[q(1610)] = M;
    }
  }
  function J0() {
  }
  return Lt;
}
var Gc = Kc();
const Jc = Hs(Gc);
class Qc extends Y2 {
  constructor(x, t) {
    const r = a;
    var e;
    super(t), this[r(953)] = x, this._capabilities = (e = t == null ? void 0 : t.capabilities) !== null && e !== void 0 ? e : {}, this[r(900)] = t == null ? void 0 : t[r(1144)], this[r(437)](tn, (s) => this[r(2692)](s)), this[r(1472)](an, () => {
      const s = r;
      var n;
      return (n = this.oninitialized) === null || n === void 0 ? void 0 : n[s(1994)](this);
    });
  }
  [a(2784)](x) {
    const t = a;
    if (this[t(2562)]) throw new Error("Cannot register capabilities after connecting to transport");
    this[t(690)] = ec(this[t(690)], x);
  }
  [a(1404)](x) {
    const t = a;
    var r, e, s;
    switch (x) {
      case t(889):
        if (!(!((r = this[t(2217)]) === null || r === void 0) && r.sampling)) throw new Error("Client does not support sampling (required for " + x + ")");
        break;
      case t(221):
        if (!(!((e = this[t(2217)]) === null || e === void 0) && e.elicitation)) throw new Error(t(610) + x + ")");
        break;
      case t(1521):
        if (!(!((s = this[t(2217)]) === null || s === void 0) && s[t(1260)])) throw new Error(t(2480) + x + ")");
        break;
    }
  }
  assertNotificationCapability(x) {
    const t = a;
    switch (x) {
      case t(1440):
        if (!this[t(690)].logging) throw new Error(t(395) + x + ")");
        break;
      case "notifications/resources/updated":
      case t(2188):
        if (!this[t(690)][t(2498)]) throw new Error(t(2042) + x + ")");
        break;
      case "notifications/tools/list_changed":
        if (!this[t(690)][t(2002)]) throw new Error(t(1063) + x + ")");
        break;
      case t(1926):
        if (!this[t(690)][t(422)]) throw new Error(t(468) + x + ")");
        break;
    }
  }
  [a(2204)](x) {
    const t = a;
    switch (x) {
      case t(889):
        if (!this[t(690)].sampling) throw new Error(t(1957) + x + ")");
        break;
      case "logging/setLevel":
        if (!this[t(690)][t(993)]) throw new Error("Server does not support logging (required for " + x + ")");
        break;
      case t(324):
      case t(2015):
        if (!this[t(690)].prompts) throw new Error(t(710) + x + ")");
        break;
      case "resources/list":
      case t(2458):
      case t(489):
        if (!this[t(690)][t(2498)]) throw new Error(t(493) + x + ")");
        break;
      case t(2072):
      case t(2708):
        if (!this[t(690)][t(2002)]) throw new Error(t(1834) + x + ")");
        break;
    }
  }
  async [a(2692)](x) {
    const t = a, r = x.params.protocolVersion;
    return this[t(2217)] = x[t(1181)][t(1136)], this[t(2115)] = x.params[t(2871)], { protocolVersion: Qi[t(1150)](r) ? r : Ks, capabilities: this[t(985)](), serverInfo: this[t(953)], ...this[t(900)] && { instructions: this[t(900)] } };
  }
  [a(2870)]() {
    return this[a(2217)];
  }
  [a(2687)]() {
    return this[a(2115)];
  }
  [a(985)]() {
    return this[a(690)];
  }
  async [a(2147)]() {
    return this[a(563)]({ method: "ping" }, ta);
  }
  async createMessage(x, t) {
    return this[a(563)]({ method: "sampling/createMessage", params: x }, fn, t);
  }
  async elicitInput(x, t) {
    const r = a, e = await this[r(563)]({ method: r(221), params: x }, ln, t);
    if (e[r(2077)] === r(1249) && e[r(1213)]) try {
      const s = new Jc(), n = s.compile(x[r(2169)]);
      if (!n(e[r(1213)])) throw new Ae(ye.InvalidParams, r(1243) + s[r(777)](n.errors));
    } catch (s) {
      throw s instanceof Ae ? s : new Ae(ye[r(688)], r(2694) + s);
    }
    return e;
  }
  async listRoots(x, t) {
    const r = a;
    return this[r(563)]({ method: r(1521), params: x }, hn, t);
  }
  async [a(213)](x) {
    const t = a;
    return this[t(1750)]({ method: t(1440), params: x });
  }
  async [a(1223)](x) {
    const t = a;
    return this[t(1750)]({ method: t(1271), params: x });
  }
  async [a(1110)]() {
    const x = a;
    return this[x(1750)]({ method: x(2188) });
  }
  async [a(376)]() {
    const x = a;
    return this[x(1750)]({ method: x(2047) });
  }
  async [a(2586)]() {
    const x = a;
    return this[x(1750)]({ method: x(1926) });
  }
}
class Xc extends Error {
  constructor(x, t) {
    const r = a;
    super("Heartbeat timeout for poster " + x + " after " + t + "ms"), this[r(1055)] = "HeartbeatTimeoutError";
  }
}
const px = /* @__PURE__ */ new Map();
class Yc {
  constructor(x) {
    const t = a;
    if (this[t(1744)] = [], this[t(1757)] = Date[t(940)](), px[t(2075)](x[t(796)])) {
      const i = px.get(x[t(796)]);
      i && i[t(1278)]();
    }
    this[t(796)] = x[t(796)], this.messagePoster = x[t(1486)], this[t(2126)] = x[t(2126)], this[t(1119)] = x.removeMessageEventListener;
    const r = x[t(443)] ?? x[t(2878)], e = x[t(2878)] ?? x.heartbeatInterval, s = this[t(753)](r), n = this[t(753)](e);
    s && n && (this[t(443)] = s, this.heartbeatTimeout = n), this.debugDisableHeartbeatResponse = x[t(2123)] ?? !1, px[t(758)](this[t(796)], this), this.listenMessageCallback = this[t(277)][t(2488)](this), this[t(1873)] = this[t(2126)](this[t(277)]);
  }
  [a(753)](x) {
    const t = a;
    if (typeof x == "number" && !(!Number[t(1812)](x) || x <= 0))
      return x;
  }
  isHeartbeatEnabled() {
    const x = a;
    return typeof this[x(443)] === x(2153) && typeof this[x(2878)] === x(2153);
  }
  listenMessageCallback(x) {
    const t = a;
    if (x.posterIdentifier === this[t(796)]) {
      if (x[t(548)] === t(702)) {
        x[t(612)] === "ping" && !this[t(2123)] ? this.messagePoster({ channel: t(702), posterIdentifier: this[t(796)], type: "pong", timestamp: x[t(2347)] }) : x[t(612)] === t(1554) && (this[t(1757)] = Date[t(940)](), this.heartbeatTimeoutTimer && (clearTimeout(this[t(609)]), this[t(609)] = void 0));
        return;
      }
      x[t(548)] === t(1776) && (this[t(555)] && t(687) in x ? this[t(555)](x[t(687)]) : t(687) in x && this[t(1744)].push(x.payload));
    }
  }
  async [a(2604)]() {
    const x = a;
    for (; this.messageQueue[x(692)] > 0; ) {
      const t = this[x(1744)][x(252)]();
      t && this[x(555)] && this.onmessage(t);
    }
    this[x(2500)]() && this.startHeartbeat();
  }
  [a(2052)]() {
    const x = a;
    if (!this[x(2500)]()) return;
    const t = this[x(443)], r = this[x(2878)];
    this[x(1856)](), this[x(1459)] = setInterval(() => {
      const e = x, s = Date[e(940)]();
      this[e(1486)]({ channel: e(702), posterIdentifier: this[e(796)], type: e(2147), timestamp: s }), this[e(609)] = setTimeout(() => {
        const n = e, i = new Xc(this[n(796)], r);
        this[n(656)] && this[n(656)](i);
      }, r);
    }, t);
  }
  [a(1856)]() {
    const x = a;
    this[x(1459)] && (clearInterval(this[x(1459)]), this[x(1459)] = void 0), this[x(609)] && (clearTimeout(this.heartbeatTimeoutTimer), this[x(609)] = void 0);
  }
  async [a(405)](x, t) {
    const r = a;
    this.messagePoster({ channel: r(1776), posterIdentifier: this[r(796)], payload: x });
  }
  async [a(1278)]() {
    const x = a;
    this[x(1856)](), px[x(2215)](this[x(796)]), this[x(1119)](this.externalListenMessageCallback);
  }
}
const eu = ox.extend(a(2e3));
async function yn() {
  const o = a;
  if (!window[o(1215)]) return;
  const x = new Yc({ posterIdentifier: "comfy-uxp", messagePoster: (e) => {
    const s = o;
    window[s(1215)][s(2560)](e, "*");
  }, addMessageEventListener: (e) => {
    const s = o, n = (i) => {
      e(i[K(909)]);
    };
    return window[s(1836)](s(225), n), n;
  }, removeMessageEventListener: (e) => {
    const s = o;
    window[s(1936)](s(225), e);
  } });
  x[o(656)] = (e) => {
    eu("comfy side transport.onerror", e);
  };
  const t = new Qc({ name: o(2684), version: o(1542) }, {}), r = new Eo(t);
  return await r[o(2251)](x), window[o(1215)][o(2560)]({ channel: o(1031), meshName: o(2195), action: "connect", version: o(1062) }, "*"), await P0.connect(o(359), r);
}
const xu = Object[a(1221)](Object[a(1337)]({ __proto__: null, connectUXP: yn, mcpMesh: P0 }, Symbol.toStringTag, { value: "Module" }));
function vn(o) {
  const x = a, t = N0[x(1803)] || N0[x(969)][x(832)], r = t[x(1673)];
  if (o && o[x(1349)] && o[x(1349)].id !== r[x(986)].id) return;
  const e = P0[x(2585)].getState()[x(1547)], s = ea(N0[x(1103)], r);
  Sn(s, e) && P0.store.setState({ widgetableStructure: s }), P0[x(2585)].setState({ widgetableValues: Tx(N0.graph) });
}
Re[a(1836)]("graphChanged", vn), Re.addEventListener(a(2662), () => {
  const o = a;
  P0.store[o(1429)]({ widgetableValues: Tx(N0[o(1103)]) });
});
let Xr = 0, Yr = !0, es = "";
function wn() {
  const o = a;
  requestAnimationFrame(wn);
  const x = N0[o(1803)] || N0[o(969)][o(832)], t = x[o(1673)], r = (t == null ? void 0 : t.id) || 0, e = (t == null ? void 0 : t[o(2619)]) || "", s = (t == null ? void 0 : t[o(1780)]) || !0;
  if (r === Xr && e === es && s === Yr) return;
  const n = Date[o(940)]();
  Xr = r, es = e, Yr = s;
  const i = ea(N0[o(1103)], t), c = Tx(N0[o(1103)]);
  P0[o(2585)][o(1429)]({ widgetableStructure: i, widgetableValues: c }), console.log(o(2368) + (Date[o(940)]() - n) + "ms"), setTimeout(() => {
    const u = o;
    if (t !== x[u(1673)]) return;
    const d = ea(N0.graph, t), f = Tx(N0.graph);
    Sn(d, i) && P0.store[u(1429)]({ widgetableStructure: d }), P0[u(2585)][u(1429)]({ widgetableValues: f });
  }, 800);
}
requestAnimationFrame(wn);
function Sn(o, x) {
  const t = a;
  return o[t(196)][t(692)] !== x[t(196)][t(692)] || JSON.stringify(o[t(196)]) !== JSON[t(2625)](x[t(196)]) || JSON[t(2625)](o[t(1102)]) !== JSON[t(2625)](x[t(1102)]);
}
let xs = !1;
async function tu() {
  const o = a;
  if (xs) return Promise[o(1571)]();
  Re[o(2565)] && P0[o(2585)][o(1429)]({ comfyUserToken: Re[o(2565)] }), xs = !0;
}
ox[a(243)]("comfy-entry");
async function au(o, x, t) {
  const r = a;
  x[r(1836)](r(357), ({ detail: n }) => {
    const i = r;
    if (!n) return;
    let c = 0, u = 0;
    !isNaN(n[i(1732)] / n[i(1393)]) && (c = Math[i(481)](n.value / n[i(1393)] * 100));
    const d = n[i(1199)], f = graph[i(1102)].find((l) => l.id == d);
    if (f && f[i(1760)]) {
      const l = 100 / graph.nodes[i(692)];
      u = Math[i(481)](f.order * l) + (c ? c / 100 * l : 0);
    }
    P0.store[i(1429)]({ progress: c, graphProgress: u });
  }), x.addEventListener(r(2861), (n) => {
    var c;
    const i = r;
    (c = n[i(1349)]) != null && c.exec_info && P0[i(2585)][i(1429)]({ queueSize: n[i(1349)][i(1802)][i(1152)] });
  }), x[r(1836)](r(2208), ({ detail: n }) => {
    const i = r;
    if (P0[i(2585)].setState({ executingNodeTitle: "", executingNodeID: "", lastError: n.exception_message }), n.node_id) {
      const c = o.graph[i(1102)][i(1341)]((u) => u.id == n[i(2252)]);
      P0[i(2585)][i(1429)]({ widgetableErrors: { [n[i(2252)]]: "[" + ((c == null ? void 0 : c[i(1266)]) || n[i(2252)]) + "]" + n[i(2656)] } });
    }
  }), x[r(1836)](r(2854), (n) => {
    const i = r, c = n.detail, u = graph[i(1102)][i(1341)]((d) => d.id == c);
    if (u) {
      const d = 100 / graph[i(1102)][i(692)];
      P0.store.setState({ executingNodeTitle: u[i(1266)], executingNodeID: u.id, graphProgress: Math[i(481)](u.order * d) });
    }
  }), x.addEventListener("execution_interrupted", () => {
    const n = r;
    P0[n(2585)][n(1429)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
  }), x[r(1836)](r(1430), ({ detail: n }) => {
    const i = r;
    P0[i(2585)][i(1429)]({ lastError: "", widgetableErrors: {}, progress: 0, executingNodeTitle: "", executingNodeID: "", lastRunTime: Date[i(940)]() });
  });
  const e = /* @__PURE__ */ new Map();
  x.addEventListener(r(781), (n) => {
    const i = r;
    P0[i(2585)][i(1429)]({ progress: 0, executingNodeTitle: "", executingNodeID: "" });
    const c = (e[i(1075)](n.detail.prompt_id) || [])[i(1649)]((u) => ({ url: u, thumbnail: u }));
    $i(n.detail[i(926)], c), e[i(2215)](n[i(1349)][i(926)]);
  }), x[r(1836)]("executed", (n) => {
    const i = r, c = e[i(1075)](n.detail[i(926)]) || [];
    n[i(1349)][i(1499)] && Array[i(1783)](n[i(1349)][i(1499)][i(1914)]) && n.detail.output[i(1914)][i(692)] > 0 && c.push(...n.detail[i(1499)][i(1914)][i(2145)]((u) => u[i(612)] == i(1499)).map((u) => {
      const d = i;
      return location[d(384)] + location[d(525)] + d(417) + u.type + d(2571) + encodeURIComponent(u.filename) + (u[d(961)] ? d(1036) + encodeURIComponent(u[d(961)]) : "");
    })), n[i(1349)].output && Array[i(1783)](n[i(1349)].output.sdppp_assets) && n[i(1349)][i(1499)][i(1763)].length > 0 && c[i(452)](...n[i(1349)][i(1499)][i(1763)].map((u) => {
      const d = i;
      return location[d(384)] + location[d(525)] + d(1043) + encodeURIComponent(u);
    })), e[i(758)](n.detail.prompt_id, c);
  });
  let s = null;
  x[r(1836)](r(1255), (n) => {
    s = setTimeout(() => {
      const i = K;
      P0.store[i(1429)]({ comfyWSState: i(1255) });
    }, 1e3);
  }), x.addEventListener(r(564), (n) => {
    const i = r;
    P0[i(2585)][i(1429)]({ comfyWSState: "connected" }), clearTimeout(s);
  });
}
let $t = [];
(async function() {
  var x, t, r, e, s, n;
  const o = a;
  if (!(typeof gradioApp < "u")) {
    try {
      const i = (t = (x = window[o(930)]) == null ? void 0 : x.app) == null ? void 0 : t[o(400)], c = (e = (r = window[o(930)]) == null ? void 0 : r.ui) == null ? void 0 : e.$el, u = (n = (s = window.comfyAPI) == null ? void 0 : s[o(724)]) == null ? void 0 : n.api;
      if (!i || !u || !c) throw new Error("comfyAPI is not initialized, maybe comfyUI is too old");
      await tu(), await yn(), await au(i, u, c), import(o(421))[o(2403)]((d) => {
        d.default(Ye, 2);
      });
    } catch (i) {
      $t.push(i[o(837)] || i.message || i);
    }
    await new Promise((i) => setTimeout(i, 2e3)), $t[o(692)] && console.error($t[0]);
  }
})();
